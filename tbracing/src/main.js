// UI glue: menu, input, turn flow, HUD.

import { TRACKS } from './tracks.js';
import { createRace, resolveTurn, applyTurn, aiMoves, predictSolo, standings, lapOf, simulateToEnd } from './game.js';
import { initAudio, crash, scrape, screech, toggleMute } from './audio.js';
import { moveToward } from './physics.js';
import { Renderer } from './render.js';

const $ = (id) => document.getElementById(id);
const canvas = $('game');
const renderer = new Renderer(canvas);
const params = new URLSearchParams(location.search);
const autoplay = params.has('autoplay');

let race = null;
let phase = 'menu'; // menu | plan | animate | done
let anim = null;
let hover = null;
let mouse = null;
let lastOpts = null;
const ANIM_MS = 750;

const player = () => race?.cars.find((c) => c.isPlayer);

// ---------- menu ----------

const trackSel = $('track');
TRACKS.forEach((t, i) => trackSel.add(new Option(t.name, i)));

function startRace(opts) {
  lastOpts = opts;
  race = createRace({ trackDef: TRACKS[opts.track], laps: opts.laps, aiCount: opts.ai });
  renderer.setTrack(race.track, player());
  phase = 'plan';
  anim = null;
  hover = null;
  $('menu').classList.add('hidden');
  $('results').classList.add('hidden');
  $('hud').classList.remove('hidden');
  updateHud();
  updateHover();
}

$('start').onclick = () => initAudio() ||
  startRace({ track: +trackSel.value, laps: +$('laps').value, ai: +$('ai').value });
$('again').onclick = () => { initAudio(); startRace(lastOpts); };
$('tomenu').onclick = showMenu;

function showMenu() {
  phase = 'menu';
  $('results').classList.add('hidden');
  $('hud').classList.add('hidden');
  $('menu').classList.remove('hidden');
}

// ---------- input ----------

function updateHover() {
  const me = player();
  if (phase !== 'plan' || !mouse || !me) { hover = null; return; }
  const w = renderer.screenToWorld(mouse.x, mouse.y);
  const move = moveToward(me, w.x, w.y);
  const pred = predictSolo(race.track, me, move);
  const target = pred.frames[pred.frames.length - 1];
  hover = { car: me, move, pred, target: pred.wall ? target : { x: pred.end.x, y: pred.end.y } };
}

canvas.addEventListener('mousemove', (e) => {
  mouse = { x: e.clientX, y: e.clientY };
  updateHover();
});
canvas.addEventListener('mouseleave', () => { mouse = null; hover = null; });
canvas.addEventListener('click', (e) => {
  initAudio();
  if (e.button !== 0 || phase !== 'plan') return;
  mouse = { x: e.clientX, y: e.clientY };
  updateHover();
  if (hover) commit(hover.move);
});
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  renderer.setZoom(renderer.zoom * Math.exp(-e.deltaY * 0.0015));
  updateHover();
}, { passive: false });

window.addEventListener('keydown', (e) => {
  if (e.key === 'z' || e.key === 'Z') { renderer.setZoom(renderer.zoom > 1.2 ? 1 : 2); updateHover(); }
  if ((e.key === 'r' || e.key === 'R') && phase !== 'menu') startRace(lastOpts);
  if (e.key === 'Escape' && phase !== 'menu') showMenu();
  if (e.key === 'm' || e.key === 'M') $('mute').textContent = toggleMute() ? '🔇 muted (M)' : '';
});

// ---------- turn flow ----------

function commit(playerMove) {
  const moves = aiMoves(race);
  const idx = race.cars.findIndex((c) => c.isPlayer);
  if (idx >= 0 && moves[idx] === null) moves[idx] = playerMove;
  anim = { result: resolveTurn(race, moves), elapsed: 0, u: 0, hitstop: 0, fired: 0, firedEv: 0 };
  phase = 'animate';
  hover = null;
}

// Trigger effects for an impact at the moment it happens in the animation.
function fireImpact(imp) {
  const I = Math.min(1, imp.speed / 120);
  const cars = imp.cars.map((i) => race.cars[i]);
  renderer.impactFX(imp, cars.map((c) => c.color));
  imp.cars.forEach((i) => {
    const c = race.cars[i], o = anim.result.cars[i];
    if (!c.pendingDents) c.pendingDents = o.dents.filter((d) => d.sev > 0.5);
    c.pendingDamage = (c.pendingDamage || 0) + imp.dmg;
  });
  const who = cars.find((c) => c.isPlayer) || cars[0];
  if (imp.wrecks.length) {
    for (const i of imp.wrecks) {
      const c = race.cars[i];
      c.pendingWreck = true;
      renderer.explode(imp.x, imp.y, c.color);
      renderer.addText(imp.x, imp.y - 8, c.isPlayer ? 'WRECKED!' : `${c.name} WRECKED`, '#ff5252');
    }
    crash(1, { big: true });
    anim.hitstop = 0.35;
  } else if (imp.dmg >= 1) {
    const word = imp.dmg > 30 ? 'SMASH!' : imp.dmg > 12 ? 'CRUNCH!' : imp.kind === 'wall' ? 'CRASH' : 'BUMP';
    renderer.addText(imp.x, imp.y, `${word} -${Math.round(imp.dmg)}%`, imp.dmg > 12 ? '#ff6e6e' : '#ffd54f');
    crash(I, { metal: true });
    anim.hitstop = Math.max(anim.hitstop, Math.min(0.22, 0.04 + imp.dmg * 0.004));
  } else {
    if (who && !who.ghost) renderer.addText(imp.x, imp.y, imp.kind === 'wall' ? 'scrape' : 'tap', '#ddd');
    scrape();
  }
}

// A car loses control: tyre smoke, screech, short pause.
function fireEvent(ev) {
  const i = ev.cars[0], c = race.cars[i];
  const f = anim.result.cars[i].frames[Math.min(ev.k, anim.result.N)];
  renderer.spinFX(f.x, f.y);
  renderer.addText(f.x, f.y, c.isPlayer ? 'SPIN OUT!' : `${c.name} spins!`, ev.zone >= 2 ? '#ff6e6e' : '#ffe74c');
  screech(c.isPlayer ? 0.8 : 0.45);
  if (c.isPlayer) anim.hitstop = Math.max(anim.hitstop, 0.12);
}

function finishTurn() {
  const result = anim.result;
  while (anim.fired < result.impacts.length) fireImpact(result.impacts[anim.fired++]);
  while (anim.firedEv < result.events.length) fireEvent(result.events[anim.firedEv++]);
  result.cars.forEach((o) => {
    if (o.drift || o.wall || o.spin) renderer.addSkid(o.frames, o.spin ? o.frames.length - 1 : o.k);
  });
  for (const c of race.cars) { c.pendingDents = null; c.pendingDamage = 0; c.pendingWreck = false; }
  const lapsBefore = race.cars.map((c) => lapOf(race, c));
  applyTurn(race, result);
  race.cars.forEach((c, i) => {
    if (c.finished && c.finishTime > race.turn - 1 && c.finishTime <= race.turn) {
      renderer.addText(c.x, c.y, c.isPlayer ? 'FINISH!' : `${c.name} finished`, '#fff');
    } else if (c.isPlayer && lapOf(race, c) > lapsBefore[i]) {
      renderer.addText(c.x, c.y, `LAP ${lapOf(race, c)}`, '#81d4fa');
    }
  });
  anim = null;
  if (player().finished || player().broken) {
    phase = 'done';
    setTimeout(showResults, player().broken ? 1800 : 900);
  } else {
    phase = 'plan';
    updateHover();
    if (autoplay) setTimeout(() => phase === 'plan' && commit(aiMoves(race, true)[race.cars.indexOf(player())]), 100);
  }
  updateHud();
}

function showResults() {
  simulateToEnd(race);
  const rows = standings(race);
  const best = rows[0].finishTime;
  $('results-body').innerHTML = rows
    .map((c, i) => {
      const t = c.finished ? c.finishTime.toFixed(2) : c.broken ? 'Wrecked' : 'DNF';
      const gap = c.finished && i ? `+${(c.finishTime - best).toFixed(2)}` : '';
      return `<tr class="${c.isPlayer ? 'me' : ''}"><td>${i + 1}</td><td><span class="dot" style="background:${c.color}"></span>${c.name}</td><td>${t}</td><td>${gap}</td><td>${Math.round(c.damage)}%</td></tr>`;
    })
    .join('');
  const pos = rows.findIndex((c) => c.isPlayer) + 1;
  const me = player();
  $('results-title').textContent = me.broken ? 'Wrecked!' : pos === 1 ? 'You win!' : `You finished P${pos}`;
  $('results').classList.remove('hidden');
}

// ---------- HUD ----------

function updateHud() {
  const me = player();
  const rows = standings(race);
  const pos = rows.indexOf(me) + 1;
  $('info').innerHTML = `
    <div><b>Lap</b> ${lapOf(race, me)}/${race.laps}</div>
    <div><b>Pos</b> ${pos}/${rows.length}</div>
    <div><b>Turn</b> ${race.turn + 1}</div>
    <div><b>Speed</b> ${Math.round(me.v)}</div>
    <div><b>Damage</b> <span class="dmgbar"><span style="width:${me.damage}%;background:${me.damage > 70 ? '#e53935' : me.damage > 40 ? '#fb8c00' : '#fdd835'}"></span></span> ${Math.round(me.damage)}%</div>
    ${me.surface === 'grass' ? '<div class="warn">On grass</div>' : ''}`;
  $('standings').innerHTML = rows
    .map((c, i) => `<div class="${c.isPlayer ? 'me' : ''}">${i + 1}. <span class="dot" style="background:${c.color}"></span>${c.name}${c.finished ? ' 🏁' : c.broken ? ' 💥' : ''}<span class="mini"><span style="width:${c.damage}%"></span></span></div>`)
    .join('');
}

// ---------- main loop ----------

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (phase === 'animate' && anim) {
    // hit-stop: freeze the action for a moment on big impacts
    if (anim.hitstop > 0) anim.hitstop -= dt;
    else anim.elapsed += dt * 1000;
    anim.u = Math.min(1, anim.elapsed / ANIM_MS);
    const imps = anim.result.impacts, N = anim.result.N;
    while (anim.fired < imps.length && imps[anim.fired].k / N <= anim.u) fireImpact(imps[anim.fired++]);
    const evs = anim.result.events;
    while (anim.firedEv < evs.length && evs[anim.firedEv].k / N <= anim.u) fireEvent(evs[anim.firedEv++]);
    if (anim.u >= 1 && anim.hitstop <= 0) finishTurn();
  }
  if (race) {
    const me = player();
    const focus = anim ? renderer.poseOf(me, race.cars.indexOf(me), anim) : me;
    renderer.updateCamera(focus, dt);
  }
  renderer.draw(
    {
      race,
      anim,
      hover: phase === 'plan' ? hover : null,
      selectorCar: phase === 'plan' ? player() : null,
    },
    dt,
  );
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// debugging hook: ?debug exposes the race and the commit function on window
if (params.has('debug')) window.__dbg = { get race() { return race; }, commit, renderer };

if (params.has('start') || autoplay) {
  startRace({ track: +(params.get('track') ?? 0), laps: +(params.get('laps') ?? 2), ai: +(params.get('ai') ?? 3) });
  if (autoplay) commit(aiMoves(race, true)[race.cars.indexOf(player())]);
}
