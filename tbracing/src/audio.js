// Synthesized crash sounds (Web Audio, no assets).

let ctx = null;
let noise = null;
let muted = false;

export function initAudio() {
  try {
    if (!ctx) {
      ctx = new AudioContext();
      noise = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate);
      const d = noise.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    if (ctx.state === 'suspended') ctx.resume();
  } catch {
    ctx = null;
  }
}

export function toggleMute() {
  muted = !muted;
  return muted;
}

function env(g, t, peak, decay) {
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
}

// intensity 0..1
export function crash(intensity, { metal = true, big = false } = {}) {
  if (!ctx || muted) return;
  const t = ctx.currentTime;
  const out = ctx.createGain();
  out.gain.value = 0.35 + 0.65 * intensity;
  out.connect(ctx.destination);

  // crunch: filtered noise burst
  const src = ctx.createBufferSource();
  src.buffer = noise;
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.setValueAtTime(900 + 5000 * intensity, t);
  lp.frequency.exponentialRampToValueAtTime(150, t + 0.25 + 0.6 * intensity);
  const ng = ctx.createGain();
  env(ng, t, 0.9, 0.12 + (big ? 1.2 : 0.45) * intensity);
  src.connect(lp).connect(ng).connect(out);
  src.start(t);
  src.stop(t + 1.5);

  // body thud
  const o = ctx.createOscillator();
  o.type = 'sine';
  o.frequency.setValueAtTime(140, t);
  o.frequency.exponentialRampToValueAtTime(32, t + 0.35);
  const og = ctx.createGain();
  env(og, t, 0.4 + 0.8 * intensity, 0.4 + 0.3 * intensity);
  o.connect(og).connect(out);
  o.start(t);
  o.stop(t + 0.8);

  // metal clang: inharmonic partials
  if (metal && intensity > 0.15) {
    for (const f of [287, 431, 689, 1093]) {
      const m = ctx.createOscillator();
      m.type = 'triangle';
      m.frequency.value = f * (0.9 + Math.random() * 0.2);
      const mg = ctx.createGain();
      env(mg, t + Math.random() * 0.03, 0.06 * intensity, 0.2 + 0.4 * intensity);
      m.connect(mg).connect(out);
      m.start(t);
      m.stop(t + 0.8);
    }
  }

  // wreck: long rumbling boom
  if (big) {
    const b = ctx.createBufferSource();
    b.buffer = noise;
    const bl = ctx.createBiquadFilter();
    bl.type = 'lowpass';
    bl.frequency.value = 260;
    const bg = ctx.createGain();
    env(bg, t + 0.02, 1.4, 1.4);
    b.connect(bl).connect(bg).connect(out);
    b.start(t);
    b.stop(t + 1.5);
  }
}

// tyre screech for a spin-out
export function screech(intensity = 0.6) {
  if (!ctx || muted) return;
  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  src.buffer = noise;
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.Q.value = 8;
  bp.frequency.setValueAtTime(1800, t);
  bp.frequency.linearRampToValueAtTime(1100, t + 0.7);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.5 * intensity, t + 0.05);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
  src.connect(bp).connect(g).connect(ctx.destination);
  src.start(t);
  src.stop(t + 0.9);
}

export function scrape() {
  if (!ctx || muted) return;
  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  src.buffer = noise;
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = 2500;
  bp.Q.value = 3;
  const g = ctx.createGain();
  env(g, t, 0.15, 0.25);
  src.connect(bp).connect(g).connect(ctx.destination);
  src.start(t);
  src.stop(t + 0.3);
}
