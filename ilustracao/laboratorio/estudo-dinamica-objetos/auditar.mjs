import assert from 'node:assert/strict';
import {writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {meta, parameters as p, sample, ballAt} from './objetos.mjs';

const tests = [];
function test(name, fn) {fn(); tests.push({name, status: 'PASS'});}
const near = (a, b, epsilon = 1e-9) => assert.ok(Math.abs(a - b) <= epsilon, `${a} != ${b}`);
function validContact(b) {assert.ok(b.height >= -1e-12); near(b.centerHeight - b.radius, b.height);}
function validEnergy(before, after) {assert.ok(after.energy <= before.energy + 1e-8, 'energia mecânica aumentou');}
const cases = [{comparacao: 'materiais'}, {comparacao: 'massas', material: 'borracha'}, {comparacao: 'massas', material: 'madeira'}];

test('queda livre: y quadrático e aceleração igual a g, independente da massa', () => {
  for (const t of [0.1, 0.25, 0.5, 0.7]) {
    const s = sample(t, {comparacao: 'massas'}), a = s.balls[0], b = s.balls[1];
    near(a.height, p.dropHeight - p.gravity * t * t / 2); near(a.velocity, -p.gravity * t);
    near(a.height, b.height); near(a.velocity, b.velocity); near(b.energy, a.energy * 5);
  }
});

test('3.841 instantes por modo: sem penetração, energia não crescente e desenho em área segura', () => {
  for (const options of cases) {
    let prev = sample(0, options);
    for (let i = 0; i <= 3840; i++) {
      const s = sample(i / 480, options);
      for (const [index, b] of s.balls.entries()) {
        validContact(b); validEnergy(prev.balls[index], b);
        const cy = 428 - b.centerHeight * 109, r = b.radius * 109;
        assert.ok(b.x - r > 50 && b.x + r < 910); assert.ok(cy - r > 40 && cy + r <= 428 + 1e-9);
        assert.ok(Number.isFinite(b.velocity) && Number.isFinite(b.energy));
      }
      prev = s;
    }
  }
});

test('colisões resolvidas no instante exato: continuidade, restituição, energia e impulso', () => {
  for (const kind of Object.keys(p.materials)) {
    const e = p.materials[kind].restitution;
    const end = ballAt(meta.duration, e, 3);
    assert.ok(end.events.length >= 4);
    for (const event of end.events) {
      const left = ballAt(event.time - 1e-8, e, 3), right = ballAt(event.time + 1e-8, e, 3);
      assert.ok(left.height < 1e-6 && right.height < 1e-6);
      if (!event.resting) {
        near(event.outgoingVelocity, -e * event.incomingVelocity);
        near(event.energyAfter / event.energyBefore, e * e);
        near(right.velocity, event.outgoingVelocity, 2e-7);
        const impulse = 3 * (event.outgoingVelocity - event.incomingVelocity);
        near(impulse, -(1 + e) * 3 * event.incomingVelocity);
      } else near(event.outgoingVelocity, 0);
    }
  }
});

test('mesmo instante de primeiro contato e alturas seguintes determinadas por e²', () => {
  const t0 = Math.sqrt(2 * p.dropHeight / p.gravity);
  const s = sample(t0);
  near(s.balls[0].height, 0); near(s.balls[1].height, 0);
  for (const kind of Object.keys(p.materials)) {
    const e = p.materials[kind].restitution;
    const apex = t0 + e * p.gravity * t0 / p.gravity;
    const b = ballAt(apex, e);
    near(b.height, p.dropHeight * e * e); near(b.velocity, 0);
  }
});

test('aceleração em cada arco de voo: sem easing nem damping escondido', () => {
  const dt = 1e-4;
  for (const options of cases) for (let t = 0.002; t < 7.8; t += 0.0097) {
    const a = sample(t - dt, options), b = sample(t, options), c = sample(t + dt, options);
    for (let i = 0; i < 2; i++) if (!b.balls[i].resting && a.balls[i].bounce === c.balls[i].bounce) {
      near((c.balls[i].velocity - a.balls[i].velocity) / (2 * dt), -p.gravity, 1e-7);
      near((c.balls[i].height - a.balls[i].height) / (2 * dt), b.balls[i].velocity, 1e-7);
    }
  }
});

test('repouso estável e limiar explícito: nenhuma vibração depois do último impacto', () => {
  for (const options of cases) for (const t of [8, 9, 30, 800]) {
    for (const b of sample(t, options).balls) {
      assert.equal(b.resting, true); near(b.height, 0); near(b.velocity, 0); near(b.energy, 0);
      const last = b.events.at(-1);
      assert.ok(-last.incomingVelocity * b.restitution < p.restSpeed);
    }
  }
});

test('busca fora de ordem e mutação do retorno não alteram o resultado', () => {
  for (const options of cases) {
    const times = Array.from({length: 511}, (_, i) => ((i * 331) % 511) / 511 * meta.duration);
    const saved = new Map(times.map(t => [t, JSON.stringify(sample(t, options))]));
    for (const t of [...times].reverse()) assert.equal(JSON.stringify(sample(t, options)), saved.get(t));
    const altered = sample(4, options); altered.balls[0].height = -999; altered.balls[0].events.push({bad: true}); altered.units.length = 'px';
    assert.notEqual(sample(4, options).balls[0].height, -999); assert.equal(sample(4, options).units.length, 'm');
  }
});

test('sentinelas detectam regressões de penetração e ganho de energia', () => {
  assert.throws(() => validContact({...sample(0).balls[0], height: -0.01}));
  assert.throws(() => validEnergy({energy: 1}, {energy: 1.01}));
  assert.throws(() => sample(NaN)); assert.throws(() => sample(Infinity));
  assert.throws(() => sample(0, {material: 'metal-inexistente'}));
  assert.throws(() => sample(0, {comparacao: 'inventada'}));
  assert.throws(() => ballAt(0, 1)); assert.throws(() => ballAt(0, -0.1));
  assert.throws(() => ballAt(0, 0.5, 0));
  near(sample(-4).time, 0);
});

const result = {status: 'PASS', date: '2026-10-05', module: 'objetos.mjs', groups: tests.length, tests, numericalSamples: 11523, evidence: {solver: 'arcos analíticos, eventos exatos', g_m_s2: p.gravity, dropHeight_m: p.dropHeight, masses_kg: [1,5], restitutionIllustrative: p.materials, restSpeed_m_s: p.restSpeed}, limits: ['sem aprovação artística', 'sem QC oficial', 'sem motor geral de corpos rígidos', 'coeficientes ilustrativos, não material real calibrado']};
writeFileSync(fileURLToPath(new URL('./resultados.json', import.meta.url)), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
