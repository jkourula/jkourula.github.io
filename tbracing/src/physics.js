// Turn-based car model.
//
// A car has a position, a heading `h` and a speed `v`. Speed is measured as
// "distance travelled per turn". Each turn the driver picks a move:
//   s     = distance travelled this turn (becomes the new speed)
//   theta = heading change over the turn (the car follows a circular arc)
//
// Limits:
//   s     in [v - brake, v + accel]
//   theta in [-limit(s), +limit(s)] where limit(s) = grip / s  (lateral grip:
//         v^2 / R <= grip), capped at maxTurn. Faster = less steering.
//   A wider "slide" zone allows extra steering at the cost of speed.

import { clamp } from './track.js';

export const PHYS = {
  maxSpeed: 150,
  accel: 28,
  brake: 48,
  grip: 75,
  maxTurn: 1.2,         // rad of heading change per turn when slow
  // Risk zones beyond the grip limit. Each zone allows more steering
  // (safe limit * factor, capped at maxTurn) for a chance to spin out.
  // Risk rises linearly from riskMin to riskMax across the zone.
  zones: [
    { name: 'grip',   factor: 1,   maxTurn: 1.2,  keep: 1,   riskMin: 0,    riskMax: 0 },
    { name: 'slide',  factor: 1.4, maxTurn: 1.55, keep: 1, riskMin: 0.05, riskMax: 0.25 },
    { name: 'risky',  factor: 1.8, maxTurn: 1.9,  keep: 1, riskMin: 0.3,  riskMax: 0.65 },
  ],
  spinKeep: 0.2,        // speed kept after spinning out
  wallSpeedKeep: 0.25,
  strikerKeep: 0.5,     // car that runs into another
  struckKeep: 0.85,     // car that gets hit
  grass: { accel: 0.5, brake: 0.7, grip: 0.6, maxSpeed: 75, drag: 0.7 },
  // damage: points per unit of impact speed above a threshold; 100 = wrecked
  damage: { wallMin: 18, wallScale: 0.55, carMin: 12, carScale: 0.45, wreck: 100 },
  carRadius: 8,
  carLength: 22,
  carWidth: 11,
};

// A damaged car is slower, accelerates worse and has less grip.
export function damageFactors(car) {
  const d = clamp((car.damage || 0) / PHYS.damage.wreck, 0, 1);
  return { top: 1 - 0.35 * d, accel: 1 - 0.4 * d, grip: 1 - 0.3 * d };
}

export function moveLimits(car) {
  if (car.broken) return { dMin: 0, dMax: 0, grip: PHYS.grip };
  const g = car.surface === 'grass';
  const df = damageFactors(car);
  const accel = PHYS.accel * (g ? PHYS.grass.accel : 1) * df.accel;
  const brake = PHYS.brake * (g ? PHYS.grass.brake : 1);
  const top = (g ? PHYS.grass.maxSpeed : PHYS.maxSpeed) * df.top;
  const dMin = Math.max(0, car.v - brake);
  const dMax = Math.max(dMin, Math.min(top, car.v + accel));
  const grip = PHYS.grip * (g ? PHYS.grass.grip : 1) * df.grip;
  return { dMin, dMax, grip };
}

export const MAX_ZONE = 2;

// Max heading change for distance s within zone 0 (grip), 1 (slide) or 2 (risky).
export function turnLimit(s, grip, zone = 0) {
  const safe = Math.min(PHYS.maxTurn, grip / Math.max(s, 1e-3));
  if (!zone) return safe;
  const z = PHYS.zones[zone];
  return Math.max(turnLimit(s, grip, zone - 1), Math.min(z.maxTurn, safe * z.factor));
}

// Which zone a steering amount falls in, and the chance of spinning out.
export function zoneOf(s, theta, grip) {
  const a = Math.abs(theta);
  let lo = turnLimit(s, grip, 0);
  if (a <= lo + 1e-6) return { zone: 0, risk: 0 };
  for (let zi = 1; zi <= MAX_ZONE; zi++) {
    const hi = turnLimit(s, grip, zi);
    if (a <= hi + 1e-6 || zi === MAX_ZONE) {
      const z = PHYS.zones[zi];
      const f = hi - lo > 1e-6 ? Math.min(1, (a - lo) / (hi - lo)) : 1;
      return { zone: zi, risk: z.riskMin + (z.riskMax - z.riskMin) * f };
    }
    lo = hi;
  }
}

function makeMove(s, theta, L) {
  const { zone, risk } = zoneOf(s, theta, L.grip);
  return { s, theta, zone, risk, drift: zone > 0 };
}

export function makeMoveFor(car, s, theta) {
  return makeMove(s, theta, moveLimits(car));
}

export function clampMove(car, s, theta) {
  const L = moveLimits(car);
  s = clamp(s, L.dMin, L.dMax);
  const t = turnLimit(s, L.grip, MAX_ZONE);
  return makeMove(s, clamp(theta, -t, t), L);
}

// Position/heading after travelling fraction t of a move.
export function pathPoint(car, move, t) {
  const s = move.s * t, h0 = car.h;
  if (Math.abs(move.theta) < 1e-5) {
    return { x: car.x + Math.cos(h0) * s, y: car.y + Math.sin(h0) * s, h: h0 };
  }
  const th = move.theta * t, R = move.s / move.theta;
  return {
    x: car.x + R * (Math.sin(h0 + th) - Math.sin(h0)),
    y: car.y + R * (Math.cos(h0) - Math.cos(h0 + th)),
    h: h0 + th,
  };
}

// Pose at fraction t of a move. If the move has a spin (rolled in resolveTurn),
// the car leaves its arc at spin.t0: it keeps skidding roughly along its line,
// decelerating, while the body rotates by spin.angle.
// vh = direction of travel, sp = current speed (per turn).
export function movePose(car, move, t) {
  const sp = move.spin;
  if (!sp || t <= sp.t0) {
    const p = pathPoint(car, move, t);
    p.vh = p.h;
    p.sp = move.s;
    return p;
  }
  const p0 = pathPoint(car, move, sp.t0);
  const u = (t - sp.t0) / (1 - sp.t0);
  const e = 1 - (1 - u) * (1 - u);
  const D = move.s * (1 - sp.t0) * 0.5;           // skid distance (decelerating)
  const vh = p0.h + sp.curve * e;                 // travel direction bends slightly
  const mid = p0.h + sp.curve * e * 0.5;
  return {
    x: p0.x + Math.cos(mid) * D * e,
    y: p0.y + Math.sin(mid) * D * e,
    h: p0.h + sp.angle * e,
    vh,
    sp: move.s * (1 - u),
  };
}

// The arc (s, theta) that ends exactly at point p, or null if p is behind the car.
function rawMoveTo(car, px, py) {
  const dx = px - car.x, dy = py - car.y;
  const c = Math.hypot(dx, dy);
  if (c < 1e-6) return { s: 0, theta: 0 };
  const ch = Math.cos(car.h), sh = Math.sin(car.h);
  const phi = Math.atan2(-dx * sh + dy * ch, dx * ch + dy * sh);
  if (Math.abs(phi) > 1.4) return null;
  return { s: Math.abs(phi) < 1e-6 ? c : (c * phi) / Math.sin(phi), theta: 2 * phi };
}

// The legal move whose end point is closest to the given world point.
export function moveToward(car, px, py) {
  const L = moveLimits(car);
  const raw = rawMoveTo(car, px, py);
  if (raw && raw.s >= L.dMin - 1e-6 && raw.s <= L.dMax + 1e-6 &&
      Math.abs(raw.theta) <= turnLimit(raw.s, L.grip, MAX_ZONE)) {
    return makeMove(clamp(raw.s, L.dMin, L.dMax), raw.theta, L);
  }
  let best = null, bd = Infinity;
  const test = (s, theta) => {
    const p = pathPoint(car, { s, theta }, 1);
    const d = (p.x - px) ** 2 + (p.y - py) ** 2;
    if (d < bd) { bd = d; best = { s, theta }; }
  };
  const M = 48;
  for (let i = 0; i <= M; i++) {
    const s = L.dMin + ((L.dMax - L.dMin) * i) / M;
    const lim = turnLimit(s, L.grip, MAX_ZONE);
    test(s, lim);
    test(s, -lim);
  }
  for (const s of [L.dMin, L.dMax]) {
    const lim = turnLimit(s, L.grip, MAX_ZONE);
    for (let j = 0; j <= M; j++) test(s, -lim + (2 * lim * j) / M);
  }
  return makeMove(best.s, best.theta, L);
}
