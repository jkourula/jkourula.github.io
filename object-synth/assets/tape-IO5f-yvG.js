// Tape-machine player: reads a take at its native sample rate with live
// variable speed, reverse, region and loop. Uses band-limited mip levels so any
// speed is alias-free; slowing a 192 kHz take pitches ultrasonic content down.

class Tape extends AudioWorkletProcessor {
  constructor() {
    super();
    this.levels = null;      // [{L, R, rate}] native first
    this.playing = false;
    this.pos = 0;            // position in native-rate samples
    this.speed = 1;
    this.loop = false;
    this.reverse = false;
    this.a = 0; this.b = 0;  // region in native samples
    this.fade = 0;           // 0..1 click-free start/stop envelope
    this.stopping = false;
    this.frame = 0;
    this.port.onmessage = (e) => {
      const d = e.data;
      if (d.type === 'levels') { this.levels = d.levels; this.playing = false; }
      else if (d.type === 'play' && this.levels) {
        const n = this.levels[0].L.length;
        this.a = Math.max(0, Math.floor(d.region[0] * n));
        this.b = Math.min(n - 1, Math.ceil(d.region[1] * n));
        if (this.b - this.a < 16) { this.a = 0; this.b = n - 1; }
        this.speed = d.speed; this.loop = d.loop; this.reverse = d.reverse;
        this.pos = this.reverse ? this.b : this.a;
        this.playing = true; this.stopping = false; this.fade = 0;
        this.id = d.id;
      } else if (d.type === 'speed') this.speed = d.speed;
      else if (d.type === 'loop') this.loop = d.loop;
      else if (d.type === 'stop') this.stopping = true;
    };
  }

  process(_in, outputs) {
    const out = outputs[0];
    const oL = out[0], oR = out[1] || out[0];
    if (!this.playing || !this.levels) return true;
    const lv = this.levels, nativeRate = lv[0].rate;
    // pick the highest-rate level whose read step is <= 1 (no aliasing)
    let k = 0;
    while (k < lv.length - 1 && (this.speed * lv[k].rate) / sampleRate > 1.0001) k++;
    const lev = lv[k], ratio = lev.rate / nativeRate;
    const L = lev.L, R = lev.R, n = L.length;
    const stepNative = (this.speed * nativeRate) / sampleRate * (this.reverse ? -1 : 1);
    const fadeStep = 1 / (0.006 * sampleRate);
    let ended = false;
    for (let i = 0; i < oL.length; i++) {
      if (this.stopping) { this.fade -= fadeStep; if (this.fade <= 0) { ended = true; break; } }
      else if (this.fade < 1) this.fade = Math.min(1, this.fade + fadeStep);
      // cubic Hermite read at this level
      const p = this.pos * ratio;
      const i1 = Math.floor(p), t = p - i1;
      const i0 = Math.max(i1 - 1, 0), i2 = Math.min(i1 + 1, n - 1), i3 = Math.min(i1 + 2, n - 1);
      const c = Math.min(i1, n - 1);
      oL[i] = herm(L[i0], L[c], L[i2], L[i3], t) * this.fade;
      oR[i] = herm(R[i0], R[c], R[i2], R[i3], t) * this.fade;
      this.pos += stepNative;
      if (this.pos > this.b || this.pos < this.a) {
        if (this.loop) this.pos = this.reverse ? this.b - (this.a - this.pos) : this.a + (this.pos - this.b);
        else { this.stopping = true; this.pos = Math.min(Math.max(this.pos, this.a), this.b); }
      }
    }
    if (ended) {
      this.playing = false;
      this.port.postMessage({ type: 'ended', id: this.id });
    } else if ((this.frame++ & 3) === 0) {
      this.port.postMessage({ type: 'pos', pos: this.pos / nativeRate, t: currentTime, speed: this.speed * (this.reverse ? -1 : 1), id: this.id });
    }
    return true;
  }
}

function herm(y0, y1, y2, y3, t) {
  const c1 = 0.5 * (y2 - y0);
  const c2 = y0 - 2.5 * y1 + 2 * y2 - 0.5 * y3;
  const c3 = 0.5 * (y3 - y0) + 1.5 * (y1 - y2);
  return ((c3 * t + c2) * t + c1) * t + y1;
}

registerProcessor('tape', Tape);
