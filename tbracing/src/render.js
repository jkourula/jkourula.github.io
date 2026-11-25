// Canvas renderer: pre-rendered track layer, cars, trails, move selector, minimap.

import { PHYS, moveLimits, turnLimit, pathPoint, MAX_ZONE } from './physics.js';

// fill / outline per risk zone: grip, slide, risky
const ZONE_STYLE = [
  ['rgba(76,217,100,0.30)', 'rgba(129,255,150,0.95)'],
  ['rgba(253,216,53,0.30)', 'rgba(255,235,59,0.9)'],
  ['rgba(229,57,53,0.30)', 'rgba(255,82,82,0.9)'],
];
const ZONE_TEXT = ['#ffffff', '#ffe74c', '#ff6e6e'];
import { clamp } from './track.js';

const RS = 2; // track layer resolution (pixels per world unit)

export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.zoom = 2;
    this.cam = { x: 0, y: 0 };
    this.texts = [];
    this.track = null;
    this.resetFX();
    window.addEventListener('resize', () => this.resize());
    this.resize();
  }

  resize() {
    this.dpr = window.devicePixelRatio || 1;
    this.W = window.innerWidth;
    this.H = window.innerHeight;
    this.canvas.width = Math.round(this.W * this.dpr);
    this.canvas.height = Math.round(this.H * this.dpr);
    this.canvas.style.width = this.W + 'px';
    this.canvas.style.height = this.H + 'px';
  }

  setTrack(track, focus) {
    this.track = track;
    this.texts = [];
    this.resetFX();
    this.buildTrackLayer();
    const b = track.bounds;
    this.cam = focus ? { x: focus.x, y: focus.y } : { x: b.x + b.w / 2, y: b.y + b.h / 2 };
  }

  get fitScale() {
    const b = this.track.bounds;
    return Math.min(this.W / b.w, this.H / b.h);
  }
  get scale() {
    return this.fitScale * this.zoom;
  }
  screenToWorld(sx, sy) {
    const s = this.scale;
    return { x: (sx - this.W / 2) / s + this.cam.x, y: (sy - this.H / 2) / s + this.cam.y };
  }
  worldToScreen(x, y) {
    const s = this.scale;
    return { x: (x - this.cam.x) * s + this.W / 2, y: (y - this.cam.y) * s + this.H / 2 };
  }

  setZoom(z) {
    this.zoom = clamp(z, 1, 5);
  }

  updateCamera(focus, dt) {
    const b = this.track.bounds;
    let tx = b.x + b.w / 2, ty = b.y + b.h / 2;
    if (this.zoom > 1.01 && focus) {
      const hw = this.W / 2 / this.scale, hh = this.H / 2 / this.scale;
      tx = b.w > 2 * hw ? clamp(focus.x, b.x + hw, b.x + b.w - hw) : tx;
      ty = b.h > 2 * hh ? clamp(focus.y, b.y + hh, b.y + b.h - hh) : ty;
    }
    const k = 1 - Math.exp(-dt * 5);
    this.cam.x += (tx - this.cam.x) * k;
    this.cam.y += (ty - this.cam.y) * k;
  }

  // ---------- static track layer ----------

  buildTrackLayer() {
    const t = this.track, b = t.bounds;
    const c = document.createElement('canvas');
    c.width = Math.ceil(b.w * RS);
    c.height = Math.ceil(b.h * RS);
    const g = c.getContext('2d');
    g.setTransform(RS, 0, 0, RS, -b.x * RS, -b.y * RS);
    this.layer = c;
    this.layerCtx = g;

    // forest floor + trees outside the barrier
    g.fillStyle = '#1f3d1a';
    g.fillRect(b.x, b.y, b.w, b.h);
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < 1400; i++) {
      const x = b.x + rnd() * b.w, y = b.y + rnd() * b.h;
      g.fillStyle = `rgba(${20 + rnd() * 30},${50 + rnd() * 40},${20 + rnd() * 20},0.5)`;
      g.fillRect(x, y, 3, 3);
    }
    for (let i = 0; i < 260; i++) {
      const x = b.x + rnd() * b.w, y = b.y + rnd() * b.h;
      if (t.nearest(x, y).dist < t.limit + 22) continue;
      const r = 9 + rnd() * 10;
      g.fillStyle = 'rgba(0,0,0,0.25)';
      g.beginPath(); g.arc(x + 3, y + 4, r, 0, Math.PI * 2); g.fill();
      g.fillStyle = `hsl(${105 + rnd() * 30}, 40%, ${18 + rnd() * 10}%)`;
      g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.06)';
      g.beginPath(); g.arc(x - r * 0.3, y - r * 0.3, r * 0.5, 0, Math.PI * 2); g.fill();
    }

    const path = () => {
      g.beginPath();
      t.pts.forEach((p, i) => (i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)));
      g.closePath();
    };
    g.lineJoin = 'round';
    g.lineCap = 'round';

    // tyre barrier (red/white)
    path(); g.lineWidth = 2 * t.limit + 8; g.strokeStyle = '#eeeeee'; g.stroke();
    g.setLineDash([10, 10]); path(); g.strokeStyle = '#c62828'; g.stroke(); g.setLineDash([]);
    // grass run-off
    path(); g.lineWidth = 2 * t.limit; g.strokeStyle = '#4c8a34'; g.stroke();
    for (let i = 0; i < 2500; i++) {
      const p = t.pts[Math.floor(rnd() * t.n)];
      const a = rnd() * Math.PI * 2, d = rnd() * t.limit;
      g.fillStyle = rnd() < 0.5 ? 'rgba(90,150,60,0.6)' : 'rgba(55,110,40,0.6)';
      g.fillRect(p.x + Math.cos(a) * d, p.y + Math.sin(a) * d, 2, 2);
    }

    // kerbs on the tighter corners
    g.lineWidth = 2 * t.hw + 10;
    g.lineCap = 'butt';
    for (const color of ['#f5f5f5', '#d32f2f']) {
      g.strokeStyle = color;
      g.setLineDash(color === '#d32f2f' ? [8, 8] : []);
      let open = false;
      g.beginPath();
      for (let i = 0; i <= t.n; i++) {
        const k = i % t.n, p = t.pts[k];
        if (t.radius[k] < 170) {
          open ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y);
          open = true;
        } else open = false;
      }
      g.stroke();
    }
    g.setLineDash([]);
    g.lineCap = 'round';

    // road with white edge lines
    path(); g.lineWidth = 2 * t.hw; g.strokeStyle = '#e8e8e8'; g.stroke();
    path(); g.lineWidth = 2 * t.hw - 4; g.strokeStyle = '#4b4d52'; g.stroke();
    path(); g.lineWidth = 2 * t.hw - 16; g.strokeStyle = '#505257'; g.stroke();

    // start / finish line (checkered)
    const p0 = t.pts[0], tn = t.tan[0], nx = -tn.y, ny = tn.x, sq = 6;
    const cols = Math.ceil((2 * t.hw) / sq);
    for (let r = 0; r < 2; r++) {
      for (let k = 0; k < cols; k++) {
        const l = -t.hw + k * sq, f = r * sq - sq;
        g.fillStyle = (r + k) % 2 ? '#111' : '#fff';
        g.beginPath();
        const cx = p0.x + nx * l + tn.x * f, cy = p0.y + ny * l + tn.y * f;
        g.moveTo(cx, cy);
        g.lineTo(cx + nx * sq, cy + ny * sq);
        g.lineTo(cx + nx * sq + tn.x * sq, cy + ny * sq + tn.y * sq);
        g.lineTo(cx + tn.x * sq, cy + tn.y * sq);
        g.fill();
      }
    }
  }

  // Permanent tyre marks on the track layer.
  addSkid(frames, upto) {
    const g = this.layerCtx;
    g.save();
    g.strokeStyle = 'rgba(15,15,15,0.35)';
    g.lineWidth = 1.6;
    for (const side of [-4, 4]) {
      g.beginPath();
      for (let i = 0; i <= upto; i++) {
        const f = frames[i];
        const x = f.x - Math.sin(f.h) * side - Math.cos(f.h) * 6;
        const y = f.y + Math.cos(f.h) * side - Math.sin(f.h) * 6;
        i ? g.lineTo(x, y) : g.moveTo(x, y);
      }
      g.stroke();
    }
    g.restore();
  }

  addText(x, y, text, color) {
    this.texts.push({ x, y, text, color, t: 0 });
  }

  // ---------- crash effects ----------

  resetFX() {
    this.debris = [];   // flying pieces; they settle and get stamped onto the track for good
    this.parts = [];    // sparks, smoke, fire, shockwaves
    this.shake = 0;
    this.flash = 0;
  }

  // imp: impact from resolveTurn; colors: body colours of the cars involved
  impactFX(imp, colors) {
    const I = clamp(imp.speed / 120, 0, 1);
    const tx = -imp.ny, ty = imp.nx; // tangent to the contact
    const R = Math.random;
    const away = imp.kind === 'wall' ? -1 : 0;

    // sparks along the contact surface
    for (let i = 0, n = Math.round(6 + I * 45); i < n; i++) {
      const side = R() < 0.5 ? -1 : 1, sp = 120 + R() * 380 * (0.4 + I);
      const ox = tx * side + imp.nx * away * R() * 0.8 + (R() - 0.5) * 0.6;
      const oy = ty * side + imp.ny * away * R() * 0.8 + (R() - 0.5) * 0.6;
      const l = Math.hypot(ox, oy) || 1;
      this.parts.push({ kind: 'spark', x: imp.x, y: imp.y, vx: (ox / l) * sp, vy: (oy / l) * sp, life: 0.25 + R() * 0.35 });
    }
    // body panels, glass, plastic
    const n = Math.min(45, Math.round(imp.dmg * 0.7 + (I > 0.25 ? 3 : 0)));
    for (let i = 0; i < n; i++) this.spawnPiece(imp.x, imp.y, imp.nx * away + tx * (R() < 0.5 ? -1 : 1) * 0.8, imp.ny * away + ty * (R() < 0.5 ? -1 : 1) * 0.8, 30 + I * 160, colors);
    // dust / tyre smoke
    for (let i = 0, m = Math.round(2 + I * 8); i < m; i++) {
      this.parts.push({ kind: 'smoke', x: imp.x, y: imp.y, vx: (R() - 0.5) * 40, vy: (R() - 0.5) * 40, r: 3 + R() * 4, grow: 10 + I * 14, life: 0.8 + R() * 0.8, shade: 190 });
    }
    if (I > 0.35) this.parts.push({ kind: 'ring', x: imp.x, y: imp.y, r: 4, vr: 120 + 160 * I, life: 0.35, a: 0.6 * I });
    if (imp.kind === 'wall') this.stampScuff(imp, I);
    this.shake = Math.max(this.shake, 2 + I * I * 16);
  }

  spinFX(x, y) {
    const R = Math.random;
    for (let i = 0; i < 10; i++) {
      this.parts.push({ kind: 'smoke', x: x + (R() - 0.5) * 8, y: y + (R() - 0.5) * 8, vx: (R() - 0.5) * 30, vy: (R() - 0.5) * 30, r: 3 + R() * 3, grow: 16, life: 1 + R() * 0.8, shade: 215 });
    }
  }

  explode(x, y, color) {
    const R = Math.random;
    for (let i = 0; i < 45; i++) {
      const a = R() * Math.PI * 2;
      this.spawnPiece(x, y, Math.cos(a), Math.sin(a), 60 + R() * 160, [color, color, '#222', '#555']);
    }
    for (let i = 0; i < 40; i++) {
      const a = R() * Math.PI * 2, sp = 40 + R() * 160;
      this.parts.push({ kind: 'fire', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, r: 3 + R() * 5, life: 0.4 + R() * 0.6 });
    }
    for (let i = 0; i < 18; i++) {
      this.parts.push({ kind: 'smoke', x, y, vx: (R() - 0.5) * 70, vy: (R() - 0.5) * 70, r: 6 + R() * 6, grow: 26, life: 1.6 + R() * 1.4, shade: 45 });
    }
    this.parts.push({ kind: 'ring', x, y, r: 6, vr: 340, life: 0.45, a: 0.9 });
    this.stampScorch(x, y);
    this.shake = Math.max(this.shake, 22);
    this.flash = 0.55;
  }

  spawnPiece(x, y, dx, dy, speed, colors) {
    const R = Math.random;
    const a = Math.atan2(dy, dx) + (R() - 0.5) * 2.2, sp = speed * (0.25 + R());
    const roll = R();
    const type = roll < 0.55 ? 'panel' : roll < 0.8 ? 'glass' : 'bit';
    this.debris.push({
      x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
      rot: R() * Math.PI * 2, vr: (R() - 0.5) * 30, age: 0, type,
      size: type === 'glass' ? 0.7 + R() * 1.1 : type === 'bit' ? 1 + R() * 1.6 : 1.4 + R() * 2.8,
      color: type === 'panel' ? colors[Math.floor(R() * colors.length)] : type === 'glass' ? 'rgba(205,232,255,0.9)' : '#161616',
      seed: R(),
    });
  }

  pieceShape(g, d) {
    g.save();
    g.translate(d.x, d.y);
    g.rotate(d.rot);
    g.fillStyle = d.color;
    const z = d.size;
    if (d.type === 'panel') {
      g.beginPath();
      g.moveTo(-z, -z * 0.6);
      g.lineTo(z * (0.6 + d.seed * 0.6), -z * 0.3);
      g.lineTo(z * 0.4, z * 0.7);
      g.lineTo(-z * 0.8, z * 0.4);
      g.closePath();
      g.fill();
      g.strokeStyle = 'rgba(0,0,0,0.4)';
      g.lineWidth = 0.3;
      g.stroke();
    } else {
      g.fillRect(-z / 2, -z / 2, z, z * (d.type === 'bit' ? 0.6 : 1));
    }
    g.restore();
  }

  stampScuff(imp, I) {
    const g = this.layerCtx, tx = -imp.ny, ty = imp.nx, l = 6 + I * 22;
    g.save();
    g.strokeStyle = `rgba(20,20,20,${0.3 + I * 0.4})`;
    g.lineWidth = 1 + I * 2;
    g.beginPath();
    g.moveTo(imp.x - tx * l, imp.y - ty * l);
    g.lineTo(imp.x + tx * l, imp.y + ty * l);
    g.stroke();
    g.restore();
  }

  stampScorch(x, y) {
    const g = this.layerCtx;
    const gr = g.createRadialGradient(x, y, 0, x, y, 26);
    gr.addColorStop(0, 'rgba(10,10,10,0.75)');
    gr.addColorStop(1, 'rgba(10,10,10,0)');
    g.fillStyle = gr;
    g.beginPath(); g.arc(x, y, 26, 0, Math.PI * 2); g.fill();
  }

  // continuous smoke / fire from damaged cars
  emitCarFX(car, pose, dt) {
    const dmg = (car.damage || 0) + (car.pendingDamage || 0);
    const wrecked = car.broken || car.pendingWreck;
    const rate = wrecked ? 22 : dmg > 40 ? ((dmg - 40) / 60) * 14 : 0;
    const R = Math.random;
    const ex = pose.x + Math.cos(pose.h) * 6, ey = pose.y + Math.sin(pose.h) * 6; // engine at the front
    for (let n = rate * dt; n > 0; n--) {
      if (R() > n) break;
      const dark = wrecked ? 30 : dmg > 75 ? 70 : 150;
      this.parts.push({ kind: 'smoke', x: ex, y: ey, vx: 8 + (R() - 0.5) * 14, vy: -10 + (R() - 0.5) * 14, r: 2 + R() * 2, grow: wrecked ? 16 : 9, life: 1 + R() * (wrecked ? 1.8 : 1), shade: dark });
      if (wrecked && R() < 0.5) this.parts.push({ kind: 'fire', x: ex + (R() - 0.5) * 6, y: ey + (R() - 0.5) * 6, vx: (R() - 0.5) * 10, vy: -12, r: 1.5 + R() * 2.5, life: 0.3 + R() * 0.4 });
      if (!wrecked && dmg > 80 && R() < 0.08) this.parts.push({ kind: 'spark', x: ex, y: ey, vx: (R() - 0.5) * 160, vy: (R() - 0.5) * 160, life: 0.2 });
    }
  }

  updateFX(dt) {
    for (const d of this.debris) {
      d.age += dt;
      d.x += d.vx * dt; d.y += d.vy * dt;
      const f = Math.exp(-3.2 * dt);
      d.vx *= f; d.vy *= f;
      d.rot += d.vr * dt; d.vr *= Math.exp(-2.5 * dt);
      if (d.age > 0.25 && Math.hypot(d.vx, d.vy) < 6) {
        this.pieceShape(this.layerCtx, d); // settles: stays on the track for the rest of the race
        d.dead = true;
      }
    }
    this.debris = this.debris.filter((d) => !d.dead);
    for (const p of this.parts) {
      p.life -= dt;
      p.t = (p.t || 0) + dt;
      if (p.kind === 'ring') { p.r += p.vr * dt; continue; }
      p.x += p.vx * dt; p.y += p.vy * dt;
      const f = Math.exp((p.kind === 'spark' ? -4 : -1.5) * dt);
      p.vx *= f; p.vy *= f;
      if (p.grow) p.r += p.grow * dt;
    }
    this.parts = this.parts.filter((p) => p.life > 0);
    this.shake *= Math.exp(-7 * dt);
    this.flash = Math.max(0, this.flash - dt * 1.6);
  }

  drawFX(layer) {
    const { ctx } = this;
    if (layer === 'under') {
      for (const d of this.debris) this.pieceShape(ctx, d);
      return;
    }
    for (const p of this.parts) {
      const k = clamp(p.life / (p.life + (p.t || 0)), 0, 1);
      if (p.kind === 'spark') {
        ctx.strokeStyle = `rgba(255,${200 + 55 * k | 0},${120 * k | 0},${k})`;
        ctx.lineWidth = 1.1;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 0.025, p.y - p.vy * 0.025); ctx.stroke();
      } else if (p.kind === 'smoke') {
        ctx.fillStyle = `rgba(${p.shade},${p.shade},${p.shade},${0.4 * k})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      } else if (p.kind === 'fire') {
        ctx.fillStyle = `rgba(255,${80 + 150 * k | 0},20,${0.85 * k})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * (0.5 + k), 0, Math.PI * 2); ctx.fill();
      } else if (p.kind === 'ring') {
        ctx.strokeStyle = `rgba(255,255,255,${p.a * k})`;
        ctx.lineWidth = 2.5 * k + 0.5;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.stroke();
      }
    }
  }

  // ---------- per-frame drawing ----------

  draw(view, dt) {
    const { ctx, dpr } = this;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#16290f';
    ctx.fillRect(0, 0, this.W, this.H);
    if (!this.track) return;

    const s = this.scale, b = this.track.bounds;
    const shx = (Math.random() - 0.5) * 2 * this.shake, shy = (Math.random() - 0.5) * 2 * this.shake;
    ctx.setTransform(dpr * s, 0, 0, dpr * s, dpr * (this.W / 2 - this.cam.x * s + shx), dpr * (this.H / 2 - this.cam.y * s + shy));
    this.updateFX(dt);
    ctx.drawImage(this.layer, b.x, b.y, b.w, b.h);
    this.drawFX('under');

    const race = view.race;
    if (race) {
      for (const car of race.cars) this.drawTrail(car);
      if (view.selectorCar) this.drawSelector(view.selectorCar);
      if (view.hover) this.drawHover(view.hover);
      const poses = race.cars.map((c, i) => this.poseOf(c, i, view.anim));
      race.cars.forEach((c, i) => { if (c.ghost) this.drawCar(c, poses[i]); });
      race.cars.forEach((c, i) => { if (!c.ghost) this.drawCar(c, poses[i]); });
      race.cars.forEach((c, i) => { if (!c.finished) this.emitCarFX(c, poses[i], dt); });
    }
    this.drawFX('over');

    // floating texts
    ctx.textAlign = 'center';
    ctx.font = `bold ${13 / s}px system-ui, sans-serif`;
    this.texts = this.texts.filter((tx) => (tx.t += dt) < 1.6);
    for (const tx of this.texts) {
      ctx.globalAlpha = 1 - tx.t / 1.6;
      ctx.fillStyle = '#000';
      ctx.fillText(tx.text, tx.x + 1 / s, tx.y - 18 / s - tx.t * 20 + 1 / s);
      ctx.fillStyle = tx.color;
      ctx.fillText(tx.text, tx.x, tx.y - 18 / s - tx.t * 20);
    }
    ctx.globalAlpha = 1;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (this.flash > 0) {
      ctx.fillStyle = `rgba(255,240,220,${this.flash})`;
      ctx.fillRect(0, 0, this.W, this.H);
    }
    if (view.hover) this.drawHoverLabel(view.hover);
    if (race && this.zoom > 1.2) this.drawMinimap(race, view.anim);
  }

  poseOf(car, i, anim) {
    if (!anim) return { x: car.x, y: car.y, h: car.h };
    const fr = anim.result.cars[i].frames;
    const f = clamp(anim.u, 0, 1) * (fr.length - 1);
    const k = Math.min(fr.length - 2, Math.floor(f)), t = f - k;
    const a = fr[k], b2 = fr[k + 1];
    return { x: a.x + (b2.x - a.x) * t, y: a.y + (b2.y - a.y) * t, h: a.h + (b2.h - a.h) * t };
  }

  drawTrail(car) {
    const { ctx } = this, s = this.scale;
    if (car.trail.length < 2) return;
    ctx.globalAlpha = car.ghost ? 0.15 : 0.45;
    ctx.strokeStyle = car.color;
    ctx.lineWidth = 1 / s;
    ctx.beginPath();
    car.trail.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
    ctx.stroke();
    ctx.fillStyle = car.color;
    for (const p of car.trail) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.2 / s + 0.6, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  // Body outline with each corner crumpled according to nearby dents.
  bodyPath(ctx, dents) {
    const L = PHYS.carLength / 2, W = PHYS.carWidth / 2;
    const corners = [[L, -W], [L, W], [-L, W], [-L, -W]];
    ctx.beginPath();
    corners.forEach(([cx, cy], i) => {
      let c = 0;
      for (const d of dents) c += d.sev * Math.max(0, 1 - Math.hypot(d.lx - cx, d.ly - cy) / 12) * 0.12;
      c = Math.min(5, c);
      const sx = Math.sign(cx), sy = Math.sign(cy), ch = 2.5 + c * 0.8;
      const px = cx - sx * c * 0.6, py = cy - sy * c * 0.35;
      const hPt = [px - sx * ch, py], vPt = [px, py - sy * ch];
      const [p1, p2] = i % 2 === 0 ? [hPt, vPt] : [vPt, hPt];
      i ? ctx.lineTo(p1[0], p1[1]) : ctx.moveTo(p1[0], p1[1]);
      ctx.lineTo(p2[0], p2[1]);
    });
    ctx.closePath();
  }

  drawCar(car, pose) {
    const { ctx } = this, L = PHYS.carLength, W = PHYS.carWidth;
    const dents = car.pendingDents ? car.dents.concat(car.pendingDents) : car.dents;
    const dmg = clamp(((car.damage || 0) + (car.pendingDamage || 0)) / 100, 0, 1);
    const wrecked = car.broken || car.pendingWreck;
    ctx.save();
    ctx.translate(pose.x, pose.y);
    if (car.isPlayer && !car.finished && !wrecked) {
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 1.5 / this.scale;
      ctx.beginPath();
      ctx.arc(0, 0, 17, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.rotate(pose.h);
    ctx.globalAlpha = car.ghost && !car.broken ? 0.45 : 1;
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.beginPath(); ctx.roundRect(-L / 2 + 2, -W / 2 + 2, L, W, 3); ctx.fill();
    ctx.fillStyle = '#111';
    for (const [x, y] of [[-L * 0.3, -W / 2 - 1], [L * 0.28, -W / 2 - 1], [-L * 0.3, W / 2 - 2], [L * 0.28, W / 2 - 2]]) {
      ctx.fillRect(x - 3, y, 6, 3);
    }
    this.bodyPath(ctx, dents);
    ctx.fillStyle = car.color;
    ctx.fill();
    ctx.save();
    ctx.clip();
    ctx.fillStyle = car.isPlayer ? '#1565c0' : 'rgba(255,255,255,0.75)';
    ctx.fillRect(-L / 2 + 1, -1.2, L - 3, 2.4);
    ctx.fillStyle = '#1b2733';
    ctx.fillRect(L * 0.02, -W / 2 + 1.8, 4.5, W - 3.6);
    if (dmg > 0.3 || wrecked) {
      // cracked windscreen
      ctx.strokeStyle = 'rgba(220,235,255,0.8)';
      ctx.lineWidth = 0.4;
      ctx.beginPath();
      ctx.moveTo(L * 0.05, -2); ctx.lineTo(L * 0.2, 1.5);
      ctx.moveTo(L * 0.12, -W / 2 + 2); ctx.lineTo(L * 0.08, 2.5);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.fillRect(-L / 2 - 1, -W / 2, 2.5, W);
    // dents and scratches
    dents.slice(-14).forEach((d, i) => {
      const r = 1.2 + Math.min(4, d.sev * 0.09);
      ctx.fillStyle = 'rgba(0,0,0,0.35)';
      ctx.beginPath(); ctx.ellipse(d.lx, d.ly, r, r * 0.7, i, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(230,230,230,0.55)';
      ctx.lineWidth = 0.35;
      ctx.beginPath();
      for (let k = 0; k < 2; k++) {
        const a = i * 1.7 + k * 0.9;
        ctx.moveTo(d.lx - Math.cos(a) * r * 1.6, d.ly - Math.sin(a) * r * 1.6);
        ctx.lineTo(d.lx + Math.cos(a) * r * 1.6, d.ly + Math.sin(a) * r * 1.6);
      }
      ctx.stroke();
    });
    // grime, or charred if wrecked
    ctx.fillStyle = wrecked ? 'rgba(12,10,8,0.7)' : `rgba(40,32,24,${dmg * 0.35})`;
    ctx.fillRect(-L, -W, 2 * L, 2 * W);
    ctx.restore();
    this.bodyPath(ctx, dents);
    ctx.strokeStyle = 'rgba(0,0,0,0.55)';
    ctx.lineWidth = 0.8;
    ctx.stroke();
    ctx.restore();
  }

  // Polygon of the reachable move region, built in (speed, steering) space.
  regionPolygon(car, zone) {
    const L = moveLimits(car), M = 20, pts = [];
    const lim = (s) => turnLimit(s, L.grip, zone);
    const at = (s, th) => pts.push(pathPoint(car, { s, theta: th }, 1));
    for (let i = 0; i <= M; i++) { const s = L.dMin + ((L.dMax - L.dMin) * i) / M; at(s, lim(s)); }
    for (let i = 1; i <= M; i++) { const l = lim(L.dMax); at(L.dMax, l - (2 * l * i) / M); }
    for (let i = 1; i <= M; i++) { const s = L.dMax - ((L.dMax - L.dMin) * i) / M; at(s, -lim(s)); }
    for (let i = 1; i < M; i++) { const l = lim(L.dMin); at(L.dMin, -l + (2 * l * i) / M); }
    return pts;
  }

  fillPoly(pts, fill, stroke) {
    const { ctx } = this;
    ctx.beginPath();
    pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
    ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1.2 / this.scale; ctx.stroke(); }
  }

  drawSelector(car) {
    const { ctx } = this, s = this.scale, L = moveLimits(car);
    for (let z = MAX_ZONE; z >= 0; z--) this.fillPoly(this.regionPolygon(car, z), ...ZONE_STYLE[z]);

    // iso-speed guide lines
    const iso = (sp, style, width, dash) => {
      const lim = turnLimit(sp, L.grip, MAX_ZONE);
      ctx.beginPath();
      for (let i = 0; i <= 24; i++) {
        const p = pathPoint(car, { s: sp, theta: -lim + (2 * lim * i) / 24 }, 1);
        i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y);
      }
      ctx.strokeStyle = style; ctx.lineWidth = width / s; ctx.setLineDash(dash.map((d) => d / s)); ctx.stroke();
      ctx.setLineDash([]);
    };
    for (let sp = Math.ceil(L.dMin / 10) * 10; sp < L.dMax; sp += 10) {
      if (sp > L.dMin) iso(sp, 'rgba(255,255,255,0.18)', 1, []);
    }
    if (car.v > L.dMin + 0.5 && car.v < L.dMax - 0.5) iso(car.v, 'rgba(255,255,255,0.85)', 1.4, [4, 3]);

    // straight-ahead line
    const a = pathPoint(car, { s: L.dMin, theta: 0 }, 1), b = pathPoint(car, { s: L.dMax, theta: 0 }, 1);
    ctx.beginPath(); ctx.moveTo(car.x, car.y); ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = 'rgba(255,255,255,0.22)'; ctx.lineWidth = 1 / s; ctx.setLineDash([2 / s, 3 / s]); ctx.stroke();
    ctx.setLineDash([]);
    void a;
  }

  drawHover(hv) {
    const { ctx } = this, s = this.scale;
    const color = hv.pred.wall ? '#ff5252' : ZONE_TEXT[hv.move.zone || 0];
    ctx.beginPath();
    hv.pred.frames.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
    ctx.strokeStyle = color; ctx.lineWidth = 2 / s; ctx.stroke();
    const end = hv.pred.end;
    // where the car will be able to go next turn
    const ghost = { ...end, isPlayer: false, color: hv.car.color, ghost: true, dents: hv.car.dents, broken: hv.pred.wrecked };
    this.fillPoly(this.regionPolygon(ghost, 0), 'rgba(255,255,255,0.06)', 'rgba(255,255,255,0.35)');
    this.drawCar({ ...ghost, ghost: true }, end);
    ctx.beginPath(); ctx.arc(hv.target.x, hv.target.y, 3 / s, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.fill();
  }

  drawHoverLabel(hv) {
    const { ctx } = this;
    const p = this.worldToScreen(hv.target.x, hv.target.y);
    const dv = Math.round(hv.move.s - hv.car.v);
    const lines = [`speed ${Math.round(hv.move.s)} (${dv >= 0 ? '+' : ''}${dv})`];
    if (hv.pred.wrecked) lines.push('WALL! car will be WRECKED');
    else if (hv.pred.wall) lines.push(hv.pred.dmg >= 1 ? `WALL! damage +${Math.round(hv.pred.dmg)}%` : 'WALL!');
    if (hv.move.zone) {
      lines.push(hv.move.zone === 2 ? 'RISKY' : 'SLIDE');
      lines.push(`spin chance ${Math.round(hv.move.risk * 100)}%`);
    }
    if (!hv.pred.wall && hv.pred.grass) lines.push('grass');
    ctx.font = '600 12px system-ui, sans-serif';
    ctx.textAlign = 'left';
    const w = Math.max(...lines.map((l) => ctx.measureText(l).width)) + 12;
    const x = p.x + 14, y = p.y - 8;
    ctx.fillStyle = 'rgba(10,14,20,0.8)';
    ctx.beginPath(); ctx.roundRect(x, y - 14, w, lines.length * 15 + 6, 5); ctx.fill();
    lines.forEach((l, i) => {
      ctx.fillStyle = l.startsWith('WALL!') ? '#ff6e6e' : l.startsWith('SLIDE') || (l.startsWith('spin') && hv.move.zone === 1) ? ZONE_TEXT[1]
        : l.startsWith('RISKY') || l.startsWith('spin') ? ZONE_TEXT[2] : l === 'grass' ? '#9ccc65' : '#fff';
      ctx.fillText(l, x + 6, y + i * 15);
    });
  }

  drawMinimap(race, anim) {
    const { ctx } = this, b = this.track.bounds;
    const w = 200, h = (w * b.h) / b.w, x = this.W - w - 16, y = this.H - h - 16;
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(x - 4, y - 4, w + 8, h + 8);
    ctx.drawImage(this.layer, x, y, w, h);
    ctx.globalAlpha = 1;
    const k = w / b.w;
    race.cars.forEach((c, i) => {
      const p = this.poseOf(c, i, anim);
      ctx.fillStyle = c.color;
      ctx.beginPath(); ctx.arc(x + (p.x - b.x) * k, y + (p.y - b.y) * k, c.isPlayer ? 4 : 3, 0, Math.PI * 2); ctx.fill();
      if (c.isPlayer) { ctx.strokeStyle = '#000'; ctx.lineWidth = 1; ctx.stroke(); }
    });
    const tl = this.screenToWorld(0, 0), br = this.screenToWorld(this.W, this.H);
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x + (tl.x - b.x) * k, y + (tl.y - b.y) * k, (br.x - tl.x) * k, (br.y - tl.y) * k);
  }
}
