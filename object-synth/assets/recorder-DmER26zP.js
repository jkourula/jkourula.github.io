// Captures the master output in chunks for lossless WAV export.
class Recorder extends AudioWorkletProcessor {
  constructor() {
    super();
    this.rec = false;
    this.size = 8192;
    this.bufL = new Float32Array(this.size); this.bufR = new Float32Array(this.size); this.n = 0;
    this.port.onmessage = (e) => {
      if (e.data === 'start') { this.rec = true; this.n = 0; }
      if (e.data === 'stop') { this.flush(); this.rec = false; this.port.postMessage({ type: 'done' }); }
    };
    this.peakT = 0; this.pk = 0;
  }
  flush() {
    if (this.n > 0) {
      this.port.postMessage({ type: 'chunk', L: this.bufL.slice(0, this.n), R: this.bufR.slice(0, this.n) });
      this.n = 0;
    }
  }
  process(inputs, outputs) {
    const inp = inputs[0];
    const l = inp[0], r = inp[1] || inp[0];
    if (outputs[0] && outputs[0][0] && l) { outputs[0][0].set(l); if (outputs[0][1]) outputs[0][1].set(r); }
    if (l) {
      for (let i = 0; i < l.length; i++) { const a = Math.abs(l[i]), b = Math.abs(r[i]); if (a > this.pk) this.pk = a; if (b > this.pk) this.pk = b; }
      if (++this.peakT >= 8) { this.port.postMessage({ type: 'peak', v: this.pk }); this.pk = 0; this.peakT = 0; }
    }
    if (this.rec && l) {
      for (let i = 0; i < l.length; i++) {
        this.bufL[this.n] = l[i]; this.bufR[this.n] = r[i]; this.n++;
        if (this.n >= this.size) this.flush();
      }
    }
    return true;
  }
}
registerProcessor('recorder', Recorder);
