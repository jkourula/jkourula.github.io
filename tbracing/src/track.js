// Track geometry: a closed centerline (Catmull-Rom spline, resampled evenly)
// with a road half-width and a grass run-off band. Beyond the grass is a tyre wall.

export const TAU = Math.PI * 2;

export function wrapAngle(a) {
  a = (a + Math.PI) % TAU;
  if (a < 0) a += TAU;
  return a - Math.PI;
}

export function clamp(v, a, b) {
  return v < a ? a : v > b ? b : v;
}

function catmull(p0, p1, p2, p3, t) {
  const t2 = t * t, t3 = t2 * t;
  const f = (a, b, c, d) =>
    0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
  return { x: f(p0[0], p1[0], p2[0], p3[0]), y: f(p0[1], p1[1], p2[1], p3[1]) };
}

function sampleSpline(ctrl, per) {
  const n = ctrl.length, out = [];
  for (let i = 0; i < n; i++) {
    const p0 = ctrl[(i - 1 + n) % n], p1 = ctrl[i], p2 = ctrl[(i + 1) % n], p3 = ctrl[(i + 2) % n];
    for (let j = 0; j < per; j++) out.push(catmull(p0, p1, p2, p3, j / per));
  }
  return out;
}

function resampleClosed(raw, step) {
  const m = raw.length, cum = [0];
  for (let i = 1; i <= m; i++) {
    const a = raw[i - 1], b = raw[i % m];
    cum.push(cum[i - 1] + Math.hypot(b.x - a.x, b.y - a.y));
  }
  const total = cum[m];
  const N = Math.round(total / step);
  const out = [];
  let k = 0;
  for (let j = 0; j < N; j++) {
    const d = (j * total) / N;
    while (cum[k + 1] < d) k++;
    const t = (d - cum[k]) / (cum[k + 1] - cum[k] || 1);
    const a = raw[k], b = raw[(k + 1) % m];
    out.push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
  }
  return out;
}

function circumradius(a, b, c) {
  const ab = Math.hypot(b.x - a.x, b.y - a.y);
  const bc = Math.hypot(c.x - b.x, c.y - b.y);
  const ca = Math.hypot(a.x - c.x, a.y - c.y);
  const cross = Math.abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x));
  if (cross < 1e-6) return 1e6;
  return (ab * bc * ca) / (2 * cross);
}

export class Track {
  constructor(def) {
    this.name = def.name;
    this.hw = def.width / 2;
    this.grass = def.grass ?? 38;
    this.limit = this.hw + this.grass; // distance from centerline where the wall starts

    const pts = resampleClosed(sampleSpline(def.points, 24), def.step ?? 6);
    const n = (this.n = pts.length);
    this.pts = pts;

    let L = 0;
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[(i + 1) % n];
      L += Math.hypot(b.x - a.x, b.y - a.y);
    }
    this.length = L;
    this.seg = L / n;

    this.tan = pts.map((_, i) => {
      const a = pts[(i - 1 + n) % n], b = pts[(i + 1) % n];
      const dx = b.x - a.x, dy = b.y - a.y, l = Math.hypot(dx, dy) || 1;
      return { x: dx / l, y: dy / l };
    });
    this.radius = pts.map((p, i) => circumradius(pts[(i - 6 + n) % n], p, pts[(i + 6) % n]));

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const p of pts) {
      minX = Math.min(minX, p.x); minY = Math.min(minY, p.y);
      maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y);
    }
    const m = this.limit + 40;
    this.bounds = { x: minX - m, y: minY - m, w: maxX - minX + 2 * m, h: maxY - minY + 2 * m };
  }

  wrapS(s) {
    s %= this.length;
    return s < 0 ? s + this.length : s;
  }

  // signed shortest distance along the track from a to b
  deltaS(a, b) {
    const L = this.length;
    let d = (((b - a) % L) + L) % L;
    if (d > L / 2) d -= L;
    return d;
  }

  pointAt(s) {
    const f = this.wrapS(s) / this.seg;
    const i = Math.floor(f) % this.n, t = f - Math.floor(f);
    const a = this.pts[i], b = this.pts[(i + 1) % this.n];
    return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
  }

  indexAt(s) {
    return Math.floor(this.wrapS(s) / this.seg) % this.n;
  }

  angleAt(s) {
    const t = this.tan[this.indexAt(s)];
    return Math.atan2(t.y, t.x);
  }

  // Nearest point on the centerline polyline.
  nearest(x, y) {
    const { pts, n } = this;
    let best = Infinity, bi = 0, bt = 0;
    for (let i = 0; i < n; i++) {
      const a = pts[i], b = pts[i + 1 < n ? i + 1 : 0];
      const abx = b.x - a.x, aby = b.y - a.y;
      let t = ((x - a.x) * abx + (y - a.y) * aby) / (abx * abx + aby * aby);
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const px = a.x + abx * t - x, py = a.y + aby * t - y;
      const d2 = px * px + py * py;
      if (d2 < best) { best = d2; bi = i; bt = t; }
    }
    const a = pts[bi], b = pts[(bi + 1) % n];
    const cross = (b.x - a.x) * (y - a.y) - (b.y - a.y) * (x - a.x);
    const dist = Math.sqrt(best);
    return { s: (bi + bt) * this.seg, dist, lateral: cross >= 0 ? dist : -dist, i: bi };
  }

  surfaceAt(x, y) {
    const nr = this.nearest(x, y);
    nr.kind = nr.dist <= this.hw ? 'road' : nr.dist <= this.limit ? 'grass' : 'wall';
    return nr;
  }
}
