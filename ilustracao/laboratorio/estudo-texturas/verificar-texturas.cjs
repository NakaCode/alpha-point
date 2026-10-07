#!/usr/bin/env node
'use strict';
// Bancada matemática independente: não é renderer nem medição de QC visual.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const round = n => Number(n.toPrecision(12));
const dist = (a, b) => Math.hypot(...a.map((v, i) => v - b[i]));
const W = 620, H = 440;

// Hash de identidade 32-bit. Não é gerador criptográfico ou modelo de material.
function hash32(seed, page, index, lane) {
  let n = (seed ^ Math.imul(page + 1, 0x9e3779b1) ^
    Math.imul(index + 1, 0x85ebca6b) ^ Math.imul(lane + 1, 0xc2b2ae35)) >>> 0;
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d);
  n = Math.imul(n ^ (n >>> 15), 0x846ca68b);
  return (n ^ (n >>> 16)) >>> 0;
}
function mark(seed, page, index) {
  const r = lane => hash32(seed, page, index, lane) / 4294967296;
  return { id: `${page}:${index}`, u: 0.08 + 0.84 * r(0), v: 0.08 + 0.84 * r(1),
    widthUV: 0.02 + 0.015 * r(2), heightUV: 0.004 + 0.003 * r(3) };
}
function marks(seed, page, n) { return Array.from({ length: n }, (_, i) => mark(seed, page, i)); }

// Superfície cilíndrica isométrica na direção de u; theta em radianos.
function sheet(u, v, theta) {
  if (Math.abs(theta) < 1e-10) return [W * u, H * v, 0];
  const radius = W / theta, a = u * theta;
  return [radius * Math.sin(a), H * v, radius * (1 - Math.cos(a))];
}
// Inversa independente da parametrização, válida no intervalo theta <= 2 rad.
function recoverUV(p, theta) {
  if (Math.abs(theta) < 1e-10) return [p[0] / W, p[1] / H];
  const radius = W / theta;
  return [Math.atan2(p[0], radius - p[2]) / theta, p[1] / H];
}
function rigid(p, angle, offset) {
  const c = Math.cos(angle), s = Math.sin(angle);
  return [c * p[0] - s * p[1] + offset[0], s * p[0] + c * p[1] + offset[1], p[2] + offset[2]];
}
function inverseRigid(p, angle, offset) {
  const q = p.map((v, i) => v - offset[i]);
  const c = Math.cos(angle), s = Math.sin(angle);
  return [c * q[0] + s * q[1], -s * q[0] + c * q[1], q[2]];
}
function project(p) {
  const depth = 1600 + p[2];
  assert.ok(depth > 100, 'Ponto fora do domínio da câmera do teste');
  return [960 + 1700 * p[0] / depth, 540 - 1700 * p[1] / depth];
}
function pageProjection(u, v, angle) {
  const x = (u - 0.5) * W, y = (v - 0.5) * H;
  return project([Math.cos(angle) * x, y, Math.sin(angle) * x]);
}
function jacobian(u, v, angle) {
  const h = 1e-5;
  const up = pageProjection(u + h, v, angle), um = pageProjection(u - h, v, angle);
  const vp = pageProjection(u, v + h, angle), vm = pageProjection(u, v - h, angle);
  return [(up[0] - um[0]) / (2 * h), (vp[0] - vm[0]) / (2 * h),
    (up[1] - um[1]) / (2 * h), (vp[1] - vm[1]) / (2 * h)];
}
function singularValues([a, b, c, d]) {
  const p = a * a + c * c, q = b * b + d * d, r = a * b + c * d;
  const delta = Math.hypot(p - q, 2 * r), trace = p + q;
  return [Math.sqrt(Math.max(0, (trace - delta) / 2)), Math.sqrt(Math.max(0, (trace + delta) / 2))];
}
function smooth(a, b, x) {
  const z = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return z * z * (3 - 2 * z);
}
function footprint(angle) {
  const [min, max] = singularValues(jacobian(0.5, 0.5, angle));
  const pitch = min / 8, width = min * 0.012;
  // Peso candidato de representação, não autorização de alpha da roupa.
  const contribution = smooth(4, 8, pitch) * smooth(1.25, 2.5, width);
  return { min, max, pitch, width, contribution };
}
function coverageUpperBound(items) {
  // União <= soma. Razão de área paramétrica para o quadrado UV unitário.
  return items.reduce((s, p) => {
    assert.ok(p.widthUV >= 0 && p.heightUV >= 0, 'Dimensão negativa');
    return s + p.widthUV * p.heightUV;
  }, 0);
}

const groups = [];
const seed = 20260929, data = marks(seed, 3, 256);
assert.deepEqual(data, marks(seed, 3, 256));
assert.notDeepEqual(data, marks(seed + 1, 3, 256));
assert.notDeepEqual(data, marks(seed, 4, 256));
assert.equal(new Set(data.map(m => `${m.u},${m.v}`)).size, data.length);
groups.push({ id: 'identidade-e-seed', estado: 'passou', marcas: data.length,
  sha256_padrao: sha(JSON.stringify(data)), negativo_seed_diferente: 'detectado',
  limite: 'Amostra delimitada; não prova ausência de colisões em todas as identidades de 32 bits.' });

const reversed = [...data].reverse().map(m => mark(seed, 3, Number(m.id.split(':')[1]))).reverse();
assert.deepEqual(data, reversed);
const selected = [252, 3, 127, 7, 90, 0, 255];
selected.forEach(i => assert.deepEqual(data[i], mark(seed, 3, i)));
const sequentialBad = i => data[(i + 1) % data.length];
assert.notDeepEqual(data[7], sequentialBad(7));
groups.push({ id: 'ordem-independente', estado: 'passou', comparacoes: data.length + selected.length,
  negativo_indice_consumido_por_ordem: 'detectado' });

let maxUV = 0, maxCylinder = 0, maxRigid = 0, samples = 0;
const poses = [0, 0.2, 0.7, 1.2, 1.7, 2];
for (const theta of poses) {
  for (const item of data) {
    // Testa centro e quatro extremos do motivo, não somente sua âncora.
    const points = [[item.u, item.v], [item.u - item.widthUV / 2, item.v],
      [item.u + item.widthUV / 2, item.v], [item.u, item.v - item.heightUV / 2],
      [item.u, item.v + item.heightUV / 2]];
    for (const uv of points) {
      const p = sheet(...uv, theta);
      const world = rigid(p, 0.35 + theta / 9, [31, -27, 45]);
      const recoveredLocal = inverseRigid(world, 0.35 + theta / 9, [31, -27, 45]);
      maxUV = Math.max(maxUV, dist(recoverUV(recoveredLocal, theta), uv));
      if (theta) {
        const radius = W / theta;
        maxCylinder = Math.max(maxCylinder, Math.abs(Math.hypot(p[0], radius - p[2]) - radius));
      }
      const q = sheet(0.13, 0.77, theta);
      maxRigid = Math.max(maxRigid, Math.abs(dist(p, q) - dist(world, rigid(q, 0.35 + theta / 9, [31, -27, 45]))));
      samples++;
    }
  }
}
assert.ok(maxUV < 1e-12);
assert.ok(maxCylinder < 1e-9);
assert.ok(maxRigid < 1e-9);
groups.push({ id: 'superficie-e-transformacao', estado: 'passou', poses: poses.length, pontos: samples,
  erro_uv_maximo: round(maxUV), erro_raio_maximo: round(maxCylinder), erro_rigidez_maximo: round(maxRigid),
  limite: 'Cilindro analítico; não testa dobra do livro, interpolação de segmentos ou rasterização.' });

const anchor = [0.76, 0.61];
const atRest = project(sheet(...anchor, 0));
const attached = project(rigid(sheet(...anchor, 1.7), 0.31, [45, -20, 15]));
const drift = dist(atRest, attached);
assert.ok(drift > 20, 'O caso negativo deve ser discriminável');
const acceptsAnchor = (actual, expected) => dist(actual, expected) <= 0.5;
assert.equal(acceptsAnchor(attached, attached), true);
assert.equal(acceptsAnchor(atRest, attached), false);
groups.push({ id: 'negativo-textura-presa-a-tela', estado: 'passou', deriva_detectada_px: round(drift),
  tolerancia_px: 0.5, negativo_rejeitado: true });

const exactFlat = [1700 * H / 1600, 1700 * W / 1600];
const measuredFlat = singularValues(jacobian(0.5, 0.5, 0));
assert.ok(dist(exactFlat, measuredFlat) < 1e-5, 'Jacobiano confrontado com solução plana exata');
const footprints = Array.from({ length: 891 }, (_, i) => footprint(i / 10 * Math.PI / 180));
let maxJump = 0;
for (let i = 1; i < footprints.length; i++) {
  assert.ok(footprints[i].contribution >= 0 && footprints[i].contribution <= 1);
  assert.ok(footprints[i].contribution <= footprints[i - 1].contribution + 1e-8);
  maxJump = Math.max(maxJump, Math.abs(footprints[i].contribution - footprints[i - 1].contribution));
}
assert.equal(footprints[0].contribution, 1);
assert.equal(footprints.at(-1).contribution, 0);
assert.ok(maxJump < 0.05);
const thin = footprint(87 * Math.PI / 180);
assert.ok(thin.width < 1.25);
assert.equal(thin.contribution, 0);
assert.equal(1 > thin.contribution, true, 'Negativo sem LOD conserva detalhe mesmo abaixo do limite experimental');
const direct = [75, 10, 87, 40, 75].map(a => footprint(a * Math.PI / 180).contribution);
assert.equal(direct[0], direct[4]);
groups.push({ id: 'footprint-e-transicao', estado: 'passou', orientacoes: footprints.length,
  salto_maximo_em_passo_de_01_grau: round(maxJump),
  amostras: [0, 60, 75, 80, 87, 89].map(a => ({ graus: a,
    ...Object.fromEntries(Object.entries(footprint(a * Math.PI / 180)).map(([k, v]) => [k, round(v)])) })),
  negativo_sem_lod: 'detectado',
  limite: 'Amostras centrais de folha plana em perspectiva; LOD matemático não é garantia temporal ou visual de antialias.' });

const coverage = coverageUpperBound(marks(seed, 3, 64));
const dense = coverageUpperBound(Array.from({ length: 2048 }, () => ({ widthUV: 0.035, heightUV: 0.012 })));
const budget = 0.06;
assert.ok(coverage < budget);
assert.ok(dense > budget);
assert.equal(coverageUpperBound([]), 0);
groups.push({ id: 'cobertura-parametrica', estado: 'passou', marcas_exemplo: 64,
  cobertura_superior: round(coverage), limite_experimental: budget,
  negativo_2048_marcas: round(dense), negativo_rejeitado: true,
  limite: 'Soma de áreas UV; limite superior de união, não cobertura de pixels e não teste de contraste.' });

const report = {
  estudo: 'Texturas: estabilidade e orçamento de detalhe',
  versao: 1,
  data_execucao: '2026-09-29',
  codigo: 'verificar-texturas.cjs',
  codigo_sha256: sha(fs.readFileSync(__filename)),
  metodo: 'Node.js, apenas matemática e assert; sem imagens, dependências externas ou browser.',
  grupos: groups,
  resumo: { grupos_passaram: groups.length, falhas: 0, qc_visual: 'nao_medido', qc_oficial: 'nao_medido' },
  limites: ['Não implementa materiais naturais.', 'Não audita a cena do livro ou anatomia da mão.',
    'Não mede pixels, compressão de vídeo, moiré, cintilação ou percepção.',
    'Os limiares e pesos de LOD são experimentais, condicionados à roupa quando aplicados.']
};
const destination = path.join(__dirname, 'resultados.json');
if (process.argv.includes('--check')) {
  assert.deepEqual(JSON.parse(fs.readFileSync(destination, 'utf8')), report, 'Evidência difere do código ou resultado atual');
  console.log(`Texturas: ${groups.length} grupos passaram; evidência e hash conferidos. QC visual NÃO MEDIDO.`);
} else {
  fs.writeFileSync(destination, JSON.stringify(report, null, 2) + '\n');
  console.log(`Texturas: ${groups.length} grupos passaram; resultados.json atualizado. QC visual NÃO MEDIDO.`);
}
