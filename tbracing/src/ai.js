// AI drivers: score a grid of legal moves with a 2-turn lookahead.
//
// A precomputed speed profile (max cornering speed from track curvature,
// propagated backwards with braking) tells the AI how fast it may go.

import { PHYS, moveLimits, turnLimit, pathPoint, damageFactors, makeMoveFor } from './physics.js';
import { wrapAngle } from './track.js';

export function computeProfile(track) {
  const n = track.n, v = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const R = track.radius[i];
    v[i] = Math.min(PHYS.maxSpeed, Math.sqrt(PHYS.grip * R), PHYS.maxTurn * R);
  }
  const b = PHYS.brake * 0.8;
  for (let pass = 0; pass < 2; pass++) {
    for (let i = n - 1; i >= 0; i--) {
      const j = (i + 1) % n;
      v[i] = Math.min(v[i], Math.sqrt(v[j] * v[j] + 2 * b * track.seg));
    }
  }
  return v;
}

function profileMin(race, s, window) {
  const { track, profile } = race;
  let i = track.indexAt(s), m = Infinity;
  const steps = Math.ceil(window / track.seg) + 1;
  for (let k = 0; k < steps; k++) {
    m = Math.min(m, profile[i]);
    i = (i + 1) % track.n;
  }
  return m;
}

function candidates(state, ns, nt, maxZone) {
  const L = moveLimits(state), out = [];
  for (let a = 0; a < ns; a++) {
    const s = ns === 1 ? L.dMax : L.dMin + ((L.dMax - L.dMin) * a) / (ns - 1);
    const lim = turnLimit(s, L.grip, 0);
    for (let b = 0; b < nt; b++) out.push({ s, theta: -lim + (2 * lim * b) / (nt - 1), drift: false, zone: 0, risk: 0 });
    let lo = lim;
    for (let z = 1; z <= (maxZone || 0); z++) {
      const hi = turnLimit(s, L.grip, z);
      if (hi > lo + 1e-3) {
        for (const th of [(lo + hi) / 2, hi]) {
          out.push(makeMoveFor(state, s, th), makeMoveFor(state, s, -th));
        }
      }
      lo = hi;
    }
  }
  return out;
}

function evaluate(race, state, m, startS, others, ai) {
  const { track } = race;
  const SAMPLES = 6, r = PHYS.carRadius;
  let grass = 0, endN = null, p = null, prevS = startS, prevD = state.dist ?? 0, blocked = 0;
  for (let q = 1; q <= SAMPLES; q++) {
    p = pathPoint(state, m, q / SAMPLES);
    const nr = track.nearest(p.x, p.y);
    if ((nr.dist > track.limit - r - 3 && nr.dist > prevD) || Math.abs(track.deltaS(prevS, nr.s)) > 250) {
      return { score: -1e6 + q * 1e4 - m.s * 50 };
    }
    prevS = nr.s;
    prevD = nr.dist;
    for (const o of others) {
      if (o.v < 40 && Math.hypot(o.x - p.x, o.y - p.y) < 2 * r + 3) blocked++;
    }
    if (nr.dist > track.hw - 3) grass++;
    endN = nr;
  }
  const gain = track.deltaS(startS, endN.s);
  let vNext = m.s * PHYS.zones[m.zone || 0].keep;
  vNext *= 1 - (1 - PHYS.grass.drag) * (grass / SAMPLES);
  const vAllowed = profileMin(race, endN.s, Math.max(vNext, 30) * 1.3) * ai.skill * Math.sqrt(damageFactors(state).grip);
  const over = Math.max(0, vNext - vAllowed);
  const tgt = track.pointAt(endN.s + Math.max(45, vNext * 1.3));
  const herr = Math.abs(wrapAngle(p.h - Math.atan2(tgt.y - p.y, tgt.x - p.x)));
  let score = gain - over * over * 0.08 - over * 1.5 - herr * herr * 30 * (0.5 + vNext / PHYS.maxSpeed) - grass * 10;
  if (endN.dist > track.hw) score -= 25;
  score -= blocked * 40;
  if (m.drift) score -= ai.driftCost;
  score -= (m.risk || 0) * (ai.spinCost ?? 150);
  for (const o of others) {
    const d = Math.hypot(o.px - p.x, o.py - p.y);
    if (d < 24) score -= (24 - d) * 3;
    const d0 = Math.hypot(o.x - p.x, o.y - p.y);
    if (d0 < 20) score -= (20 - d0) * 2;
  }
  return {
    score,
    next: { x: p.x, y: p.y, h: p.h, v: vNext, dist: endN.dist, damage: state.damage, surface: endN.dist > track.hw ? 'grass' : 'road' },
    endS: endN.s,
  };
}

export function chooseMove(car, race) {
  const { track } = race;
  const here = track.nearest(car.x, car.y);
  const self = { x: car.x, y: car.y, h: car.h, v: car.v, surface: car.surface, dist: here.dist, damage: car.damage };
  const others = car.ghost
    ? []
    : race.cars
        .filter((c) => c !== car && !c.ghost)
        .map((o) => ({ x: o.x, y: o.y, v: o.v, px: o.x + Math.cos(o.h) * o.v, py: o.y + Math.sin(o.h) * o.v }));
  const ai = car.ai;
  const first = candidates(car, 9, 13, ai.maxZone).map((m) => ({ m, e: evaluate(race, self, m, here.s, others, ai) }));
  first.sort((a, b) => b.e.score - a.e.score);

  let best = first[0], bestTotal = -Infinity;
  for (const c of first.slice(0, 10)) {
    if (c.e.score < -1e5) continue;
    let best2 = -1e7;
    for (const m2 of candidates(c.e.next, 5, 7, ai.maxZone)) {
      best2 = Math.max(best2, evaluate(race, c.e.next, m2, c.e.endS, [], ai).score);
    }
    const total = c.e.score + 0.8 * best2;
    if (total > bestTotal) { bestTotal = total; best = c; }
  }
  return best.m;
}
