// Granular time-stretch / freeze engine. Reads a source buffer at its native
// (possibly ultrasonic) sample rate, so pitching grains down reveals content
// above the audible band.
const WIN = 2048;

class Granular extends AudioWorkletProcessor {
  constructor() {
    super();
    this.L = null; this.R = null; this.srcRate = sampleRate;
    this.grains = [];
    this.p = {
      on: false, gain: 0.8, scan: 0.1, position: 0, sizeMs: 180, density: 24, pitch: 0, pitchRand: 0,
      quant: 'off', posRand: 0.05, spread: 0.7, reverse: 0, shape: 0.5, regionStart: 0, regionEnd: 1,
    };
    this.head = 0; // in source samples
    this.untilNext = 0;
    this.win = new Float32Array(WIN + 1);
    this.makeWindow();
    this.port.onmessage = (e) => {
      const d = e.data;
      if (d.type === 'buffer') {
        // band-limited levels, native rate first; each grain reads the level
        // that cannot alias at its pitch
        this.levels = d.levels;
        this.L = d.levels[0].L; this.R = d.levels[0].R; this.srcRate = d.levels[0].rate;
        this.grains.length = 0;
        this.head = this.p.regionStart * this.L.length;
      } else if (d.type === 'params') {
        const oldShape = this.p.shape;
        Object.assign(this.p, d.params);
        if (this.p.shape !== oldShape) this.makeWindow();
        if ('position' in d.params && this.L) this.head = this.regionPos(this.p.position);
      } else if (d.type === 'reset' && this.L) {
        this.head = this.regionPos(this.p.position);
      }
    };
    this.frame = 0;
  }
  makeWindow() {
    // Tukey-like: shape 0 = rectangular-ish (fast fades), 1 = full Hann
    const a = Math.max(0.02, Math.min(1, this.p.shape));
    for (let i = 0; i <= WIN; i++) {
      const x = i / WIN;
      let w;
      if (x < a / 2) w = 0.5 * (1 - Math.cos((2 * Math.PI * x) / a));
      else if (x > 1 - a / 2) w = 0.5 * (1 - Math.cos((2 * Math.PI * (1 - x)) / a));
      else w = 1;
      this.win[i] = w;
    }
  }
  regionPos(f) {
    const n = this.L.length;
    const s = this.p.regionStart * n, e = Math.max(s + 1, this.p.regionEnd * n);
    return s + f * (e - s);
  }
  spawn() {
    const p = this.p, n = this.L.length;
    const s = p.regionStart * n, e = Math.max(s + 64, p.regionEnd * n);
    let semis = p.pitch;
    if (p.pitchRand > 0) {
      const r = (Math.random() * 2 - 1) * p.pitchRand;
      if (p.quant === 'octaves') semis += 12 * Math.round(r / 12);
      else if (p.quant === 'fifths') semis += [0, 7, 12, -12, 19, -5, 24][Math.floor(Math.random() * Math.min(7, 1 + Math.abs(p.pitchRand) / 4))];
      else if (p.quant === 'semitones') semis += Math.round(r);
      else semis += r;
    }
    const ratio = Math.pow(2, semis / 12);
    const lv = this.levels;
    let k = 0;
    while (k < lv.length - 1 && (ratio * lv[k].rate) / sampleRate > 1.0001) k++;
    const lev = lv[k], scale = lev.rate / this.srcRate;
    const inc = ratio * (lev.rate / sampleRate);
    const lenOut = Math.max(32, Math.round((p.sizeMs / 1000) * sampleRate));
    let pos = this.head + (Math.random() * 2 - 1) * p.posRand * this.srcRate;
    const span = e - s;
    pos = s + ((((pos - s) % span) + span) % span);
    const rev = Math.random() < p.reverse;
    const pan = (Math.random() * 2 - 1) * p.spread;
    const g = 1 / Math.sqrt(Math.max(1, p.density * p.sizeMs / 1000));
    this.grains.push({
      L: lev.L, R: lev.R, pos: pos * scale, inc: rev ? -inc : inc, age: 0, len: lenOut,
      gl: Math.cos((Math.PI / 4) * (1 + pan)) * g, gr: Math.sin((Math.PI / 4) * (1 + pan)) * g,
    });
    if (this.grains.length > 300) this.grains.shift();
  }
  process(_inputs, outputs) {
    const out = outputs[0];
    const oL = out[0], oR = out[1] || out[0];
    if (!this.L || !this.p.on) { return true; }
    const p = this.p, n = this.L.length;
    const N = oL.length;
    const s = p.regionStart * n, e = Math.max(s + 64, p.regionEnd * n), span = e - s;
    const headInc = p.scan * (this.srcRate / sampleRate);
    const period = sampleRate / Math.max(0.1, p.density);
    for (let i = 0; i < N; i++) {
      if (--this.untilNext <= 0) {
        this.spawn();
        this.untilNext = period * (0.5 + Math.random());
      }
      this.head += headInc;
      if (this.head >= e) this.head -= span; else if (this.head < s) this.head += span;
    }
    const win = this.win;
    for (let gi = this.grains.length - 1; gi >= 0; gi--) {
      const gr = this.grains[gi];
      const L = gr.L, R = gr.R, gn = L.length;
      for (let i = 0; i < N; i++) {
        if (gr.age >= gr.len) break;
        const w = win[Math.floor((gr.age / gr.len) * WIN)];
        let ps = gr.pos;
        if (ps >= gn - 1) ps = ps % (gn - 1);
        else if (ps < 0) ps = (gn - 1) + (ps % (gn - 1));
        const i0 = ps | 0, fr = ps - i0;
        const a = L[i0] + (L[i0 + 1] - L[i0]) * fr;
        const b = R[i0] + (R[i0 + 1] - R[i0]) * fr;
        oL[i] += a * w * gr.gl * p.gain;
        oR[i] += b * w * gr.gr * p.gain;
        gr.pos += gr.inc;
        gr.age++;
      }
      if (gr.age >= gr.len) this.grains.splice(gi, 1);
    }
    if ((this.frame++ & 7) === 0) this.port.postMessage({ type: 'head', head: (this.head - s) / span, abs: this.head / n });
    return true;
  }
}
registerProcessor('granular', Granular);
