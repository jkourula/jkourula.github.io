// Race state and simultaneous turn resolution (no DOM; runs in Node for tests).

import { Track, wrapAngle, clamp } from './track.js';
import { PHYS, pathPoint, movePose } from './physics.js';
import { computeProfile, chooseMove } from './ai.js';

export const DRIVERS = [
  // maxZone: furthest risk zone the driver uses; spinCost: how much they fear a spin
  { name: 'Rossi',   color: '#e53935', skill: 1.1,  maxZone: 2, driftCost: 3, spinCost: 110 },
  { name: 'Blau',    color: '#1e88e5', skill: 1.04, maxZone: 0, driftCost: 8, spinCost: 150 },
  { name: 'Giallo',  color: '#fdd835', skill: 1.0,  maxZone: 1, driftCost: 5, spinCost: 150 },
  { name: 'Verde',   color: '#43a047', skill: 0.95, maxZone: 1, driftCost: 6, spinCost: 220 },
  { name: 'Viola',   color: '#8e24aa', skill: 0.9,  maxZone: 0, driftCost: 8, spinCost: 150 },
];
export const PLAYER_COLOR = '#f5f5f5';

const SUBSTEPS = 30;
const STOP = { s: 0, theta: 0, drift: false, zone: 0, risk: 0 };

// small seeded RNG so a race can be replayed
function mulberry32(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createRace({ trackDef, laps = 2, aiCount = 3, withPlayer = true, seed = (Math.random() * 2 ** 31) | 0 }) {
  const track = new Track(trackDef);
  const race = { track, profile: computeProfile(track), laps, turn: 0, cars: [], finishOrder: [], rng: mulberry32(seed) };
  const total = aiCount + (withPlayer ? 1 : 0);
  for (let k = 0; k < total; k++) {
    const isPlayer = withPlayer && k === total - 1; // player starts at the back
    const drv = isPlayer ? null : DRIVERS[k % DRIVERS.length];
    const row = Math.floor(k / 2), side = k % 2 ? 1 : -1;
    const s = -26 - row * 40 - (k % 2) * 16;
    const p = track.pointAt(s), t = track.tan[track.indexAt(s)];
    const lat = side * track.hw * 0.45;
    race.cars.push({
      id: k,
      name: isPlayer ? 'You' : drv.name,
      color: isPlayer ? PLAYER_COLOR : drv.color,
      isPlayer,
      ai: isPlayer ? { skill: 1.0, maxZone: 0, driftCost: 8, spinCost: 150 } : drv,
      x: p.x - t.y * lat,
      y: p.y + t.x * lat,
      h: Math.atan2(t.y, t.x),
      v: 0,
      surface: 'road',
      progress: s,
      lastS: track.wrapS(s),
      finished: false,
      ghost: false,
      broken: false,
      damage: 0,
      dents: [], // {lx, ly, sev} in car-local coordinates, for drawing
      finishTime: null,
      trail: [],
      stats: { crashes: 0, bumps: 0, slides: 0, spins: 0 },
    });
  }
  return race;
}

export function aiMoves(race, includePlayer = false) {
  return race.cars.map((c) => {
    if (c.broken) return STOP;
    if (c.isPlayer && !c.finished && !includePlayer) return null;
    return chooseMove(c, race);
  });
}

// Roll the dice for a risky move: on a spin, the car loses control part-way.
function rollSpin(race, move) {
  if (!move.risk || race.rng() >= move.risk) return move;
  const r = race.rng, dir = Math.sign(move.theta) || 1;
  const big = move.zone >= 2;
  return {
    ...move,
    spin: {
      t0: 0.2 + r() * 0.5,
      angle: dir * (Math.PI * (big ? 0.6 : 0.4) + r() * Math.PI * (big ? 0.9 : 0.6)), // tail swings out
      curve: dir * Math.abs(move.theta) * 0.15,
    },
  };
}

// Outside the run-off, or jumped to a different part of the track (there is a
// barrier between neighbouring sections).
// Only counts when moving further outward, so a car resting against the wall can steer away.
export function hitsWall(track, nr, prev, maxJump = 250) {
  if (Math.abs(track.deltaS(prev.s, nr.s)) > maxJump) return true;
  return nr.dist > track.limit - PHYS.carRadius && nr.dist > prev.dist;
}

// How hard a car at `pos` heading `h` with speed `s` hits the wall.
function wallImpact(track, pos, h, s) {
  const nr = track.nearest(pos.x, pos.y);
  const c = track.pointAt(nr.s);
  let nx = pos.x - c.x, ny = pos.y - c.y;
  const l = Math.hypot(nx, ny) || 1;
  nx /= l; ny /= l;
  const into = Math.max(0.25, Math.cos(h) * nx + Math.sin(h) * ny);
  const speed = s * into;
  const dmg = Math.max(0, speed - PHYS.damage.wallMin) * PHYS.damage.wallScale;
  return { nx, ny, speed, dmg, trackAngle: track.angleAt(nr.s) };
}

// Replace the frames after contact with a short bounce: pushed by (dx,dy), turning to hTo.
function bounce(frames, k, N, dx, dy, hTo) {
  const c = frames[k];
  frames.length = k + 1;
  const n = N - k;
  if (n < 1) {
    frames[k] = { x: c.x + dx, y: c.y + dy, h: hTo };
    return;
  }
  for (let i = 1; i <= n; i++) {
    const e = 1 - Math.pow(1 - i / n, 3);
    frames.push({ x: c.x + dx * e, y: c.y + dy * e, h: c.h + wrapAngle(hTo - c.h) * e });
  }
}

// Rebound from the wall and get knocked roughly back in line with the track.
function wallBounce(frames, k, N, imp) {
  const c = frames[k];
  const mag = Math.min(14, 2 + imp.speed * 0.1);
  const hTo = c.h + wrapAngle(imp.trackAngle - c.h) * 0.6;
  bounce(frames, k, N, -imp.nx * mag, -imp.ny * mag, hTo);
}

function localDent(pose, x, y, sev) {
  const dx = x - pose.x, dy = y - pose.y;
  const c = Math.cos(pose.h), s = Math.sin(pose.h);
  return {
    lx: clamp(dx * c + dy * s, -PHYS.carLength / 2, PHYS.carLength / 2),
    ly: clamp(-dx * s + dy * c, -PHYS.carWidth / 2, PHYS.carWidth / 2),
    sev,
  };
}

// Speed after a (possibly interrupted) move.
function outcome(move, o) {
  const N = SUBSTEPS;
  const f = o.frames[o.frames.length - 1];
  const traveled = move.s * (o.k / N);
  let v = traveled;
  v *= PHYS.zones[move.zone || 0].keep;
  if (move.spin) v = move.s * PHYS.spinKeep;
  if (o.wall) v = traveled * PHYS.wallSpeedKeep;
  if (o.striker) v *= PHYS.strikerKeep;
  if (o.struck) v *= PHYS.struckKeep;
  const grassFrac = o.grassSteps / Math.max(1, o.k);
  v *= 1 - (1 - PHYS.grass.drag) * grassFrac;
  if (o.wrecked) v = 0;
  return { x: f.x, y: f.y, h: f.h, v };
}

// Predict a single car's move ignoring other cars (used for the hover preview).
export function predictSolo(track, car, move) {
  const N = SUBSTEPS;
  const o = { frames: [{ x: car.x, y: car.y, h: car.h }], k: N, wall: false, grassSteps: 0, dmg: 0 };
  let prev = track.nearest(car.x, car.y);
  for (let k = 1; k <= N; k++) {
    const p = pathPoint(car, move, k / N);
    const sf = track.nearest(p.x, p.y);
    if (hitsWall(track, sf, prev)) { o.wall = true; o.k = k - 1; break; }
    prev = sf;
    if (sf.dist > track.hw) o.grassSteps++;
    o.frames.push(p);
  }
  if (o.wall) {
    const c = o.frames[o.k];
    const imp = wallImpact(track, c, c.h, move.s);
    o.dmg = imp.dmg;
    o.wrecked = (car.damage || 0) + imp.dmg >= PHYS.damage.wreck;
    wallBounce(o.frames, o.k, N, imp);
  }
  const end = outcome(move, o);
  end.surface = track.surfaceAt(end.x, end.y).kind === 'road' ? 'road' : 'grass';
  end.damage = Math.min(PHYS.damage.wreck, (car.damage || 0) + o.dmg);
  return { frames: o.frames, end, wall: o.wall, grass: o.grassSteps > 0, dmg: o.dmg, wrecked: !!o.wrecked };
}

// Move all cars simultaneously, sub-stepping to detect walls and car contact.
// Returns per-car frames/outcomes plus a list of impacts (for damage and effects).
export function resolveTurn(race, moves) {
  const { track, cars } = race;
  const N = SUBSTEPS, r = PHYS.carRadius;
  const impacts = [];
  const hitPairs = new Set();
  const events = [];
  const st = cars.map((car, i) => ({
    i, car, move: rollSpin(race, moves[i] || STOP), k: N, stopped: !!car.broken, wall: false, striker: false, struck: false,
    grassSteps: 0, frames: [{ x: car.x, y: car.y, h: car.h }], tent: null,
    prev: track.nearest(car.x, car.y), dmg: 0, dents: [], bounce: null,
  }));
  st.forEach((o) => {
    if (o.move.spin) events.push({ kind: 'spin', k: Math.round(o.move.spin.t0 * N), cars: [o.i], zone: o.move.zone });
  });
  for (let k = 1; k <= N; k++) {
    for (const o of st) {
      const last = o.frames[o.frames.length - 1];
      if (o.stopped) { o.tent = last; continue; }
      const p = movePose(o.car, o.move, k / N);
      const sf = track.nearest(p.x, p.y);
      if (hitsWall(track, sf, o.prev)) {
        o.stopped = true; o.wall = true; o.k = k - 1; o.tent = last;
        const imp = wallImpact(track, last, last.vh ?? last.h, last.sp ?? o.move.s);
        o.dmg += imp.dmg;
        o.wallImp = imp;
        const hx = last.x + imp.nx * r, hy = last.y + imp.ny * r;
        o.dents.push(localDent(last, hx, hy, imp.dmg));
        if (!o.car.ghost) {
          impacts.push({ kind: 'wall', k: k - 1, x: hx, y: hy, nx: imp.nx, ny: imp.ny, speed: imp.speed, dmg: imp.dmg, cars: [o.i] });
        }
        continue;
      }
      o.prev = sf;
      if (sf.dist > track.hw) o.grassSteps++;
      o.tent = p;
    }
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < st.length; i++) {
        for (let j = i + 1; j < st.length; j++) {
          const a = st[i], b = st[j];
          if (a.car.ghost || b.car.ghost || (a.stopped && b.stopped)) continue;
          const dx = b.tent.x - a.tent.x, dy = b.tent.y - a.tent.y;
          const d = Math.hypot(dx, dy);
          if (d >= 2 * r) continue;
          const la = a.frames[a.frames.length - 1], lb = b.frames[b.frames.length - 1];
          if (d >= Math.hypot(lb.x - la.x, lb.y - la.y)) continue; // already separating

          // impact strength = closing speed along the line between the cars
          const nx = d > 1e-6 ? dx / d : Math.cos(a.tent.h), ny = d > 1e-6 ? dy / d : Math.sin(a.tent.h);
          const va = a.stopped ? 0 : a.tent.sp ?? a.move.s, vb = b.stopped ? 0 : b.tent.sp ?? b.move.s;
          const ha = a.tent.vh ?? a.tent.h, hb = b.tent.vh ?? b.tent.h;
          const rvx = Math.cos(ha) * va - Math.cos(hb) * vb;
          const rvy = Math.sin(ha) * va - Math.sin(hb) * vb;
          const closing = Math.max(0, rvx * nx + rvy * ny);
          const slide = rvx * -ny + rvy * nx; // tangential part spins the cars

          const bAheadOfA = dx * Math.cos(a.tent.h) + dy * Math.sin(a.tent.h) > 0.35 * d;
          const aAheadOfB = -dx * Math.cos(b.tent.h) - dy * Math.sin(b.tent.h) > 0.35 * d;
          const stopA = bAheadOfA || !aAheadOfB;
          const stopB = aAheadOfB || !bAheadOfA;
          for (const [o, stop, other, sign] of [[a, stopA, b, -1], [b, stopB, a, 1]]) {
            if (stop && !o.stopped) {
              o.stopped = true; o.striker = true; o.k = k - 1; o.tent = o.frames[o.frames.length - 1];
              other.struck = true;
              const mag = Math.min(9, 0.5 + closing * 0.07);
              o.bounce = { dx: sign * nx * mag, dy: sign * ny * mag, spin: clamp(slide * 0.006 * -sign, -0.6, 0.6) };
            }
          }

          const key = `${i}-${j}`;
          if (hitPairs.has(key)) continue;
          hitPairs.add(key);
          const dmg = Math.max(0, closing - PHYS.damage.carMin) * PHYS.damage.carScale;
          const mx = (a.tent.x + b.tent.x) / 2, my = (a.tent.y + b.tent.y) / 2;
          a.dmg += dmg; b.dmg += dmg;
          a.dents.push(localDent(a.tent, mx, my, dmg));
          b.dents.push(localDent(b.tent, mx, my, dmg));
          impacts.push({ kind: 'car', k: k - 1, x: mx, y: my, nx, ny, speed: closing, dmg, cars: [i, j] });
        }
      }
    }
    for (const o of st) o.frames.push(o.tent);
  }

  for (const o of st) {
    if (o.wall) wallBounce(o.frames, o.k, N, o.wallImp);
    else if (o.bounce) {
      const c = o.frames[o.k];
      bounce(o.frames, o.k, N, o.bounce.dx, o.bounce.dy, c.h + o.bounce.spin);
    }
    o.wrecked = !o.car.broken && o.car.damage + o.dmg >= PHYS.damage.wreck;
  }

  for (const imp of impacts) imp.wrecks = imp.cars.filter((i) => st[i].wrecked);
  return {
    N,
    impacts: impacts.sort((p, q) => p.k - q.k),
    events: events.sort((p, q) => p.k - q.k),
    cars: st.map((o) => ({
      frames: o.frames,
      final: outcome(o.move, o),
      wall: o.wall, striker: o.striker, struck: o.struck, drift: o.move.drift, spin: !!o.move.spin, k: o.k,
      dmg: o.dmg, dents: o.dents, wrecked: o.wrecked,
    })),
  };
}

export function applyTurn(race, result) {
  const { track } = race;
  const goal = race.laps * track.length;
  result.cars.forEach((o, i) => {
    const car = race.cars[i];
    for (let k = 1; k < o.frames.length; k++) {
      const f = o.frames[k];
      const nr = track.nearest(f.x, f.y);
      const d = track.deltaS(car.lastS, nr.s);
      if (Math.abs(d) < 150) { car.progress += d; car.lastS = nr.s; }
      if (!car.finished && !car.broken && car.progress >= goal) {
        car.finished = true;
        car.ghost = true;
        car.finishTime = race.turn + k / result.N;
        race.finishOrder.push(car);
      }
    }
    Object.assign(car, o.final);
    car.surface = track.surfaceAt(car.x, car.y).kind === 'road' ? 'road' : 'grass';
    car.trail.push({ x: car.x, y: car.y });
    if (car.trail.length > 14) car.trail.shift();
    if (o.wall) car.stats.crashes++;
    if (o.striker || o.struck) car.stats.bumps++;
    if (o.drift) car.stats.slides++;
    if (o.spin) car.stats.spins++;
    car.damage = Math.min(PHYS.damage.wreck, car.damage + o.dmg);
    for (const d of o.dents) if (d.sev > 0.5) car.dents.push(d);
    if (o.wrecked) {
      car.broken = true;
      car.v = 0;
      car.wreckTurn = race.turn;
    }
  });
  clearWrecks(race);
  separate(race);
  race.turn++;
}

// Marshals drag a wreck to the edge of the run-off after a few turns; it stays
// there as scenery but no longer blocks anyone.
const WRECK_CLEAR_TURNS = 3;
function clearWrecks(race) {
  const { track } = race;
  for (const c of race.cars) {
    if (!c.broken || c.ghost || race.turn - c.wreckTurn < WRECK_CLEAR_TURNS) continue;
    c.ghost = true;
    const nr = track.nearest(c.x, c.y), p = track.pointAt(nr.s);
    const t = track.tan[nr.i], side = nr.lateral >= 0 ? 1 : -1;
    const off = track.limit - PHYS.carRadius - 2;
    c.x = p.x - t.y * off * side;
    c.y = p.y + t.x * off * side;
    c.h = Math.atan2(t.y, t.x);
    c.cleared = true;
  }
}

function separate(race) {
  const { track } = race, r = PHYS.carRadius, min = 2 * r + 0.5;
  const cars = race.cars.filter((c) => !c.ghost);
  for (let it = 0; it < 4; it++) {
    for (let i = 0; i < cars.length; i++) {
      for (let j = i + 1; j < cars.length; j++) {
        const a = cars[i], b = cars[j];
        let dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.hypot(dx, dy);
        if (d >= min) continue;
        if (d < 1e-3) { dx = -Math.sin(a.h); dy = Math.cos(a.h); } else { dx /= d; dy /= d; }
        // wrecks don't get shoved around; the moving car gives way
        const wa = a.broken ? 0 : b.broken ? 1 : 0.5;
        const push = min - d;
        a.x -= dx * push * wa; a.y -= dy * push * wa;
        b.x += dx * push * (1 - wa); b.y += dy * push * (1 - wa);
      }
    }
  }
  for (const c of race.cars) {
    const nr = track.nearest(c.x, c.y);
    const max = track.limit - r - 0.5;
    if (nr.dist > max) {
      const p = track.pointAt(nr.s), k = max / nr.dist;
      c.x = p.x + (c.x - p.x) * k;
      c.y = p.y + (c.y - p.y) * k;
    }
  }
}

export function standings(race) {
  const rank = (c) => (c.finished ? 0 : c.broken ? 2 : 1);
  return [...race.cars].sort((a, b) => {
    if (rank(a) !== rank(b)) return rank(a) - rank(b);
    if (a.finished) return a.finishTime - b.finishTime;
    return b.progress - a.progress;
  });
}

export function lapOf(race, car) {
  return Math.min(race.laps, Math.max(1, Math.floor(car.progress / race.track.length) + 1));
}

export function raceOver(race) {
  return race.cars.every((c) => c.finished || c.broken);
}

// Let the AI drive every car (including the player's) until everyone finishes or is wrecked.
export function simulateToEnd(race, maxTurns = 400) {
  let n = 0;
  while (!raceOver(race) && n++ < maxTurns) {
    applyTurn(race, resolveTurn(race, aiMoves(race, true)));
  }
}
