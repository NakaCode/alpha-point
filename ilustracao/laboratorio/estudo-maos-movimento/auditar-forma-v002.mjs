/** Independent audit of retained motion only. Drawing quality is a separate gate. */
import assert from 'node:assert/strict';
import {readFileSync, writeFileSync, existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const baselineURL = new URL('./revisoes/v001/maos.mjs', import.meta.url);
const candidateURL = new URL('./maos-forma-v002.mjs', import.meta.url);
const rigURL = new URL('./maos.mjs', import.meta.url);
const reportURL = new URL('./resultados-forma-v002.json', import.meta.url);
const modes = ['fechamento', 'pinca', 'punho'];
const tolerance = 1e-10;
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const fileHash = url => sha256(readFileSync(fileURLToPath(url)));

export const visualChecklist = [
  {gesto: 'fechamento', t: 0, foco: 'Silhueta aberta', criterios: ['Cinco dedos reconhecíveis, implantação e espaço do polegar claros.', 'Palma, bases dos dedos e punho formam um contorno contínuo.', 'Dedos têm espessura e comprimento visual coerentes, sem ganchos ou membranas excessivas.'], resultado: 'PENDENTE'},
  {gesto: 'fechamento', t: 2, foco: 'Intermediário', criterios: ['Flexões continuam nos mesmos centros sem falanges aparentarem quebradas ou alongadas.', 'Transições de pele não geram picos, furos ou degraus nas bases.', 'A leitura do gesto permanece clara na escala final.'], resultado: 'PENDENTE'},
  {gesto: 'fechamento', t: 4.5, foco: 'Mão fechada', criterios: ['Massas dos dedos e palma mantêm volume aparente e oclusão legível.', 'Polegar se implanta na região tenar; não parece um segmento extra flutuante.', 'Junções não formam uma massa derretida ou linhas internas falsas.'], resultado: 'PENDENTE'},
  {gesto: 'pinca', t: 5, foco: 'Pinça em contato', criterios: ['Laço, indicador e polegar são reconhecíveis na vista escolhida.', 'Superfícies desenhadas se encontram sem vão ou interpenetração visível.', 'A melhora do contorno não mascara desvio entre alvo matemático e pele.'], resultado: 'PENDENTE'},
  {gesto: 'punho', t: 2.1, foco: 'Ligação punho–antebraço', criterios: ['Base da mão permanece ligada ao antebraço, sem estrangulamento ou órbita artificial.', 'Espessura da ligação e silhueta continuam coerentes ao flexionar.', 'Comparação com os quadros vizinhos confirma continuidade; uma pose isolada não aprova o movimento.'], resultado: 'PENDENTE'}
];

// Skin radii, projection, bounds and mesh are intentionally outside the motion
// comparison. They may change, and therefore need their own new measurements.
export function motionSnapshot(s) {
  if (!s || !Array.isArray(s.fingers) || !s.thumb) throw new TypeError('Estado sem dedos/polegar.');
  for (const key of ['joints', 'contacts', 'flex', 'deviation', 'wrist', 'forearmAnchors', 'phase', 't', 'gesture']) {
    if (!Object.hasOwn(s, key)) throw new TypeError(`Estado sem ${key}.`);
  }
  return {
    t: s.t, gesture: s.gesture, phase: s.phase,
    joints: s.joints, contacts: s.contacts, flex: s.flex, deviation: s.deviation,
    wrist: s.wrist, forearmAnchors: s.forearmAnchors,
    fingers: s.fingers.map(f => ({id: f.id, joints: f.joints, localJoints: f.localJoints, lengths: f.lengths, angles: f.angles, curl: f.curl})),
    thumb: {id: s.thumb.id, joints: s.thumb.joints, localJoints: s.thumb.localJoints, lengths: s.thumb.lengths, curl: s.thumb.curl, reach: s.thumb.reach}
  };
}

export function compareMotion(expected, actual) {
  const out = {maxAbsoluteDifference: 0, numbersCompared: 0, mismatchCount: 0, mismatches: []};
  function fail(path, reason, a, b) {
    out.mismatchCount++;
    if (out.mismatches.length < 12) out.mismatches.push({path, reason, baseline: a, candidate: b});
  }
  function walk(a, b, path) {
    if (typeof a === 'number' || typeof b === 'number') {
      if (typeof a !== 'number' || typeof b !== 'number' || !Number.isFinite(a) || !Number.isFinite(b)) return fail(path, 'tipo numérico ou valor não finito', a, b);
      const delta = Math.abs(a - b); out.maxAbsoluteDifference = Math.max(out.maxAbsoluteDifference, delta); out.numbersCompared++;
      if (delta > tolerance) fail(path, `diferença acima de ${tolerance}`, a, b);
      return;
    }
    if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
      if (a !== b) fail(path, 'valor/tipo diferente', a, b);
      return;
    }
    if (Array.isArray(a) !== Array.isArray(b)) return fail(path, 'array/objeto incompatível', a, b);
    const ka = Object.keys(a).sort(), kb = Object.keys(b).sort();
    if (ka.join('\0') !== kb.join('\0')) fail(path, 'campos/quantidade diferentes', ka, kb);
    for (const k of ka) if (Object.hasOwn(b, k)) walk(a[k], b[k], `${path}.${k}`);
  }
  walk(expected, actual, 'state');
  return out;
}

function negativeControls() {
  const fixture = {joints: {tip: [1, 2, 3]}, contacts: {active: true, gap: 0}, flex: 0, deviation: -2};
  const equal = compareMotion(fixture, structuredClone(fixture));
  assert.equal(equal.mismatchCount, 0);
  const mutations = [
    s => {s.joints.tip[1] += 0.25;},
    s => {s.contacts.active = false;},
    s => {s.contacts.gap = 0.01;},
    s => {s.flex += 0.01;},
    s => {s.deviation = NaN;},
    s => {delete s.joints;}
  ];
  for (const mutate of mutations) {
    const altered = structuredClone(fixture); mutate(altered);
    assert.ok(compareMotion(fixture, altered).mismatchCount > 0, 'Sentinela deixou uma alteração cinemática passar.');
  }
  return {status: 'PASSOU', detects: ['joint displacement', 'contact active state', 'contact gap', 'wrist angle', 'nonfinite value', 'missing structure']};
}

const sentinels = negativeControls();
if (process.argv.includes('--self-test-only')) {
  console.log(JSON.stringify({scope: 'apenas sentinelas do auditor', ...sentinels}, null, 2));
} else if (!existsSync(fileURLToPath(candidateURL))) {
  console.log('PENDENTE: maos-forma-v002.mjs ainda não existe. Nenhuma reprovação da superfície foi produzida.');
  process.exitCode = 2;
} else {
  const hashesBefore = {baseline: fileHash(baselineURL), candidate: fileHash(candidateURL), activeRig: fileHash(rigURL)};
  const baseline = await import(baselineURL.href), candidate = await import(candidateURL.href), activeRig = await import(rigURL.href);
  const report = {
    study: 'maos-forma-v002', date: '2026-10-05', status: 'EM CONFERÊNCIA',
    scope: 'Equivalência do movimento nos instantes amostrados entre a referência v001 e o redesenho v002; registra também reuso direto do rig. Não compara superfícies.',
    baseline: 'revisoes/v001/maos.mjs', candidate: 'maos-forma-v002.mjs', sharedRig: 'maos.mjs',
    moduleSha256: hashesBefore,
    rigReuse: {baselineAndActiveRigHaveSameBytes: hashesBefore.baseline === hashesBefore.activeRig, candidateExportsSameSampleFunction: candidate.sample === activeRig.sample},
    tolerance, samplesPerMode: 361, modes: {}, sentinels,
    geometry: {status: 'NÃO MEDIDO', surfaceMeshAvailable: typeof candidate.surfaceMesh === 'function', note: 'A ausência de surfaceMesh em um desenho 2D não reprova o movimento. Contorno, penetração visual, contato da pele, oclusões, proporção e área segura exigem auditoria própria da nova representação.'},
    visualChecklist, artisticApproval: 'PENDENTE', officialQC: 'NÃO MEDIDO', integration: 'NÃO MEDIDA'
  };
  const failures = [];
  if (typeof baseline.sample !== 'function' || typeof candidate.sample !== 'function' || typeof candidate.draw !== 'function') failures.push('API sample/draw ausente.');
  if (baseline.meta?.duration !== candidate.meta?.duration || baseline.meta?.duration !== 12) failures.push('Duração local difere da referência de 12 segundos.');
  if (failures.length === 0) {
    for (const gesto of modes) {
      const result = {samples: 361, maxAbsoluteDifference: 0, numbersCompared: 0, mismatchCount: 0, outOfOrder: 'PASSOU', samplesWithMismatch: []};
      const saved = [];
      for (let frame = 0; frame <= 360; frame++) {
        const t = frame / 30;
        try {
          const expected = motionSnapshot(baseline.sample(t, {gesto}));
          const actualState = candidate.sample(t, {gesto});
          const actual = motionSnapshot(actualState), check = compareMotion(expected, actual);
          saved.push(JSON.stringify(actualState));
          result.maxAbsoluteDifference = Math.max(result.maxAbsoluteDifference, check.maxAbsoluteDifference);
          result.numbersCompared += check.numbersCompared; result.mismatchCount += check.mismatchCount;
          if (check.mismatchCount > 0 && result.samplesWithMismatch.length < 6) result.samplesWithMismatch.push({frame, t, ...check});
        } catch (error) {
          saved.push(null); result.mismatchCount++;
          if (result.samplesWithMismatch.length < 6) result.samplesWithMismatch.push({frame, t, error: error.message});
        }
      }
      // Coprime permutation of 361 samples probes seeks in nonchronological order.
      for (let i = 0; i <= 360; i++) {
        const frame = (i * 137) % 361;
        try {
          if (JSON.stringify(candidate.sample(frame / 30, {gesto})) !== saved[frame]) result.outOfOrder = 'FALHOU';
        } catch {result.outOfOrder = 'FALHOU';}
      }
      if (result.mismatchCount > 0 || result.outOfOrder !== 'PASSOU') failures.push(`Movimento/seek divergiu no modo ${gesto}.`);
      report.modes[gesto] = result;
    }
  }
  const hashesAfter = {baseline: fileHash(baselineURL), candidate: fileHash(candidateURL), activeRig: fileHash(rigURL)};
  if (JSON.stringify(hashesBefore) !== JSON.stringify(hashesAfter)) failures.push('Arquivo alterado durante a auditoria; repetir com módulos estáveis.');
  report.failures = failures;
  report.status = failures.length ? 'FALHOU — equivalência cinemática' : 'PASSOU — equivalência cinemática';
  writeFileSync(fileURLToPath(reportURL), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
  if (failures.length) process.exitCode = 1;
}
