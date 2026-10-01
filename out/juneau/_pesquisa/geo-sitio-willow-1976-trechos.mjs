#!/usr/bin/env node
// OS TRECHOS DAS FEIÇÕES QUE LIMITAM O LOCAL DE WILLOW (1976) — pesquisa-geo, 01/10/2026 — s15, s21, s24.
//
// POR QUE EXISTE: o laudo de fatos da tela de 01/10 (roteiros/juneau/qc-roteiro/fatos-tela-2026-10-01.laudo.md, F1)
// pegou a legenda "Proposed site" sobre a camada limites-sitio-willow-1976, que desenha as quatro feições INTEIRAS (o
// Little Susitna vai da serra a Cook Inlet). O Claude central escolheu o conserto na arte: cortar cada feição ao trecho
// que limita o local. Esta camada é essa, derivada SEM REDE da camada gravada (cada linha nova fica exatamente sobre a
// de hoje, com os pontos de corte acrescentados). A camada de hoje não se apaga: as cenas ainda a usam.
//
// A FONTE DO LOCAL (a mesma da camada de hoje): o folheto oficial de 1976, p. 48: "The site is generally bounded by
// Willow Creek to the north, the Little Susitna River to the south and the Alaska Railroad to the west", e a cidade
// ficaria "adjacent to the Deception Creek". O folheto não dá o limite leste.
//
// A REGRA DO CORTE:
//   - o Willow Creek e o Little Susitna: só o leito principal (a primeira parte da camada de hoje, o trecho contínuo mais
//     longo; os braços com o mesmo nome saem), do ponto do rio mais perto da travessia da ferrovia que a camada registra
//     (conferencia.travessia_* da feature da ferrovia; a oeste) até o meridiano do ponto mais a leste do Deception Creek
//     (a leste). Em uma frase: "a leste, cada rio para no meridiano do ponto mais a leste do Deception Creek, o riacho
//     junto do qual a cidade ficaria". O riacho não chega ao Little Susitna; a regra usa só a longitude dele, e por
//     isso cabe nos dois rios;
//   - a Alaska Railroad: como está (já é só o trecho entre as duas travessias);
//   - o Deception Creek: inteiro (é o riacho que o folheto nomeia; a ponta leste dele é o próprio meridiano do corte, e a
//     oeste ele deságua no Willow Creek, dentro do trecho).
// Nada aqui fecha polígono, liga uma ponta à outra nem põe ponto "5 mi a leste": são trechos das linhas reais.
//
// A CONFERÊNCIA: os comprimentos de antes e de depois de cada feição; a distância de cada trecho ao ponto do anel da s15
// (5 milhas a leste do ponto da vila, cidade-willow-osm, na mesma latitude: a conta de out/juneau/graphics/s15.html,
// PT.S, com CENA.sitio.milhasLeste = 5), a menor e a maior; e as quatro direções a partir do anel (norte, sul, leste e
// oeste, até 50 km): os trechos que cada uma encontra, em ordem de distância.
//
// Crédito: "© OpenStreetMap contributors" na tela (Willow Creek, Little Susitna, ferrovia) e openstreetmap.org/copyright
// na descrição; o Deception Creek é do USGS NHD, domínio público.
//
// Uso (de dentro de C:/projetos/alpha-point; sem rede):
//   node out/juneau/_pesquisa/geo-sitio-willow-1976-trechos.mjs conferir   (imprime)
//   node out/juneau/_pesquisa/geo-sitio-willow-1976-trechos.mjs gravar     (confere, grava e escreve a ressalva dos dois itens na pauta)
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const { gravarGeo, relatarGravacao, validarFC } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");

const ORIGEM = "limites-sitio-willow-1976";
const SLUG = "limites-sitio-willow-1976-trechos";
const PAUTA = "out/juneau/_pesquisa/pauta-geo.json";
const MILHAS_LESTE = 5;   // CENA.sitio.milhasLeste da s15
export const RESSALVA_INTEIRAS = "são as feições que limitam o local, inteiras; não são o local";
const REGRA = "o Willow Creek e o Little Susitna só no leito principal, do ponto do rio mais perto da travessia da ferrovia (a oeste) até o meridiano do ponto mais a leste do Deception Creek (a leste: o folheto não dá o limite leste); a ferrovia como estava, entre as duas travessias; o Deception Creek inteiro";
const RESSALVA_TRECHOS = `são os trechos das feições que limitam o local; não são o local nem o contorno dele. Regra do corte: ${REGRA}`;
const ACAO = process.argv[2];

const rad = Math.PI / 180;
const km = ([aLon, aLat], [bLon, bLat]) => {
  const dLat = (bLat - aLat) * rad, dLon = (bLon - aLon) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(aLat * rad) * Math.cos(bLat * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371.0088 * Math.asin(Math.sqrt(h));
};
const compr = (l) => l.slice(1).reduce((s, q, i) => s + km(l[i], q), 0);
const r6 = (p) => [+p[0].toFixed(6), +p[1].toFixed(6)];
const partes = (g) => (g.type === "LineString" ? [g.coordinates] : g.coordinates);
const sha = (t) => createHash("sha256").update(t).digest("hex");

/** o ponto da linha mais perto de p: segmento i (L[i-1] → L[i]) e o ponto nele */
function projetar(L, p) {
  let best = null;
  for (let i = 1; i < L.length; i++) {
    const a = L[i - 1], b = L[i], kx = Math.cos(p[1] * rad);
    const ax = (a[0] - p[0]) * kx, ay = a[1] - p[1], bx = (b[0] - p[0]) * kx, by = b[1] - p[1], dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy;
    const t = l2 ? Math.max(0, Math.min(1, -(ax * dx + ay * dy) / l2)) : 0;
    const q = [a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])], d = km(p, q);
    if (!best || d < best.d) best = { i, q, d };
  }
  return best;
}
/** de ini, seguindo a linha num sentido, até a primeira vez que ela chega ao meridiano lonE; null se não chega */
function ateMeridiano(L, ini, lonE, sentido) {
  const out = [ini.q];
  const ks = sentido > 0 ? Array.from({ length: L.length - ini.i }, (_, n) => ini.i + n) : Array.from({ length: ini.i }, (_, n) => ini.i - 1 - n);
  for (const [n, k] of ks.entries()) {
    const a = n === 0 ? ini.q : out.at(-1), b = L[k];
    if ((a[0] - lonE) * (b[0] - lonE) <= 0 && a[0] !== b[0]) { const t = (lonE - a[0]) / (b[0] - a[0]); out.push([lonE, a[1] + t * (b[1] - a[1])]); return out; }
    out.push(b);
  }
  return null;
}
/** distância (km) de um ponto a uma linha */
const distLinha = (p, L) => projetar(L, p).d;
/** onde um raio a partir de p (para N, S, L ou O, até 50 km) cruza uma linha: a menor distância, ou null */
function raio(p, L, dir) {
  const passo = 50 / 111.32, kx = Math.cos(p[1] * rad);
  const fim = { norte: [p[0], p[1] + passo], sul: [p[0], p[1] - passo], leste: [p[0] + passo / kx, p[1]], oeste: [p[0] - passo / kx, p[1]] }[dir];
  let best = null;
  for (let i = 1; i < L.length; i++) {
    const [p1, p2, p3, p4] = [p, fim, L[i - 1], L[i]];
    const d = (p2[0] - p1[0]) * (p4[1] - p3[1]) - (p2[1] - p1[1]) * (p4[0] - p3[0]);
    if (!d) continue;
    const t = ((p3[0] - p1[0]) * (p4[1] - p3[1]) - (p3[1] - p1[1]) * (p4[0] - p3[0])) / d, u = ((p3[0] - p1[0]) * (p2[1] - p1[1]) - (p3[1] - p1[1]) * (p2[0] - p1[0])) / d;
    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) { const x = [p1[0] + t * (p2[0] - p1[0]), p1[1] + t * (p2[1] - p1[1])], dd = km(p, x); if (!best || dd < best) best = dd; }
  }
  return best;
}

function montar() {
  const texto = readFileSync(`out/juneau/_media/geo/${ORIGEM}.json`, "utf8");
  const pauta = JSON.parse(readFileSync(PAUTA, "utf8"));
  const item = pauta.itens.find((x) => x.arquivo === `_media/geo/${ORIGEM}.json`);
  if (!item) throw new Error(`${ORIGEM} não está na pauta`);
  if (sha(texto) !== item.sha256) throw new Error(`${ORIGEM}.json não é a camada registrada (sha256 ${sha(texto)} ≠ ${item.sha256})`);
  const fc0 = JSON.parse(texto);
  const f = (n) => { const x = fc0.features.find((y) => y.properties.rotulo === n); if (!x) throw new Error(`falta a feature ${n}`); return x; };
  const FW = f("Willow Creek"), FL = f("Little Susitna River"), FD = f("Deception Creek"), FR = f("Alaska Railroad");

  // o anel da s15: 5 milhas a leste do ponto da vila, na mesma latitude (a conta de PT.S)
  const W = JSON.parse(readFileSync("out/juneau/_media/geo/cidade-willow-osm.json", "utf8")).features.find((x) => x.geometry.type === "Point").geometry.coordinates;
  const ANEL = [W[0] + (MILHAS_LESTE * 1.609344) / (111.32 * Math.cos(W[1] * rad)), W[1]];

  // o meridiano do corte: o ponto mais a leste do Deception Creek, como a camada o desenha
  const dcPts = partes(FD.geometry).flat();
  const leste = dcPts.reduce((m, p) => (p[0] > m[0] ? p : m));
  const LON_E = leste[0];

  const cortar = (F, travessia, nome) => {
    const L = partes(F.geometry)[0];   // o leito principal
    const ini = projetar(L, travessia);
    if (ini.d > 0.1) throw new Error(`${nome}: a travessia da ferrovia fica a ${(ini.d * 1000).toFixed(0)} m do leito principal`);
    const ida = ateMeridiano(L, ini, LON_E, +1), volta = ateMeridiano(L, ini, LON_E, -1);
    if (!!ida === !!volta) throw new Error(`${nome}: o meridiano do corte se alcança nos ${ida ? "dois" : "nenhum dos"} sentidos a partir da travessia`);
    const trecho = (ida || volta).map(r6);
    const cruzamentosMeridiano = L.slice(1).filter((b, i) => (L[i][0] - LON_E) * (b[0] - LON_E) <= 0 && L[i][0] !== b[0]).length;
    return { trecho, corte_oeste: { travessia_registrada: travessia, ponto_no_rio: r6(ini.q), a_m_da_travessia: +(ini.d * 1000).toFixed(1) },
      corte_leste: { meridiano: LON_E, ponto_no_rio: trecho.at(-1), vezes_que_o_leito_cruza_o_meridiano: cruzamentosMeridiano } };
  };
  const cW = cortar(FW, FR.properties.conferencia.travessia_willow_creek, "Willow Creek");
  const cL = cortar(FL, FR.properties.conferencia.travessia_little_susitna, "Little Susitna River");

  const novos = [
    { F: FW, linhas: [cW.trecho], corte: { como: "leito principal, da travessia da ferrovia ao meridiano do corte", ...cW } },
    { F: FL, linhas: [cL.trecho], corte: { como: "leito principal, da travessia da ferrovia ao meridiano do corte", ...cL } },
    { F: FD, linhas: partes(FD.geometry), corte: { como: "inteiro (a ponta leste dele é o meridiano do corte)" } },
    { F: FR, linhas: partes(FR.geometry), corte: { como: "como estava: o trecho entre as travessias do Little Susitna e do Willow Creek" } },
  ];
  const conf = [];
  const features = novos.map(({ F, linhas, corte }) => {
    const p0 = F.properties, antes = partes(F.geometry);
    const medir = (ls) => ({ km: +ls.reduce((s, l) => s + compr(l), 0).toFixed(2), partes: ls.length,
      anel_km_min: +Math.min(...ls.map((l) => distLinha(ANEL, l))).toFixed(2), anel_km_max: +Math.max(...ls.flat().map((p) => km(ANEL, p))).toFixed(2) });
    const mA = medir(antes), mD = medir(linhas);
    const c = { feicao: p0.rotulo, antes: { ...mA, km_leito_principal: +compr(antes[0]).toFixed(2) }, depois: mD };
    conf.push(c);
    const { vertices, vertices_completo, conferencia, nao_e, ...resto } = p0;
    return { type: "Feature", properties: { ...resto, nao_e: RESSALVA_TRECHOS, corte: { ...corte, trecho: undefined }, conferencia_antes: conferencia,
      km_antes: mA.km, km_depois: mD.km, vertices: linhas.reduce((s, l) => s + l.length, 0) },
      geometry: linhas.length === 1 ? { type: "LineString", coordinates: linhas[0] } : { type: "MultiLineString", coordinates: linhas } };
  });
  for (const x of features) delete x.properties.corte.trecho;

  // as quatro direções a partir do anel
  const direcoes = Object.fromEntries(["norte", "sul", "leste", "oeste"].map((dir) => {
    const hits = features.map((x) => ({ feicao: x.properties.rotulo, km: Math.min(...partes(x.geometry).map((l) => raio(ANEL, l, dir) ?? Infinity)) })).filter((h) => Number.isFinite(h.km)).sort((a, b) => a.km - b.km);
    return [dir, hits.length ? hits.map((h) => ({ feicao: h.feicao, km: +h.km.toFixed(2), mi: +(h.km / 1.609344).toFixed(2) })) : "nenhum trecho até 50 km"];
  }));

  const fc = { type: "FeatureCollection", properties: {
    ...fc0.properties,
    o_que_e: "os trechos das feições reais que o folheto oficial de 1976 (doc-16, p. 48) nomeia como limites do local da capital em Willow, e o riacho junto do qual a cidade ficaria, cortados ao trecho em volta do local",
    nao_e: RESSALVA_TRECHOS,
    regra_do_corte: REGRA,
    meridiano_do_corte: { lon: LON_E, ponto_mais_a_leste_do_deception_creek: r6(leste) },
    derivado_de: { slug: ORIGEM, arquivo: `_media/geo/${ORIGEM}.json`, sha256: item.sha256 },
    anel_s15: { ponto: r6(ANEL), conta: `cidade-willow-osm + ${MILHAS_LESTE} mi a leste, na mesma latitude (out/juneau/graphics/s15.html, PT.S)` },
    obtido_em: new Date().toISOString().slice(0, 10),
  }, features };
  validarFC(fc);
  return { fc, conf, direcoes, anel: r6(ANEL), lonE: LON_E, cortes: { willow: cW, little_susitna: cL }, item };
}

/** a ressalva nos dois itens da pauta (idempotente) */
function escreverRessalvas() {
  const p = JSON.parse(readFileSync(PAUTA, "utf8"));
  for (const [arq, r] of [[`_media/geo/${ORIGEM}.json`, RESSALVA_INTEIRAS], [`_media/geo/${SLUG}.json`, RESSALVA_TRECHOS]]) {
    const it = p.itens.find((x) => x.arquivo === arq);
    if (!it) throw new Error(`${arq} não está na pauta`);
    it.ressalva = r;
  }
  writeFileSync(PAUTA, JSON.stringify(p, null, 2) + "\n");
}

if (ACAO === "conferir" || ACAO === "gravar") {
  const m = montar();
  const v = validarFC(m.fc);
  console.log(JSON.stringify({ anel_s15: m.anel, meridiano_do_corte: m.lonE, cortes: { willow_creek: { ...m.cortes.willow, trecho: undefined }, little_susitna: { ...m.cortes.little_susitna, trecho: undefined } },
    conferencia: m.conf, direcoes_a_partir_do_anel: m.direcoes, features: v.features, bbox: v.bbox, kb: +(JSON.stringify(m.fc).length / 1024).toFixed(1) }, null, 1));
  if (ACAO === "gravar") {
    const g = gravarGeo({ slug: SLUG, fc: m.fc, proj: "juneau", cena: "s15", origem: {
      fonte: `${m.item.fonte}; trechos da camada ${ORIGEM}`,
      licenca: m.item.licenca, url: "https://www.openstreetmap.org/copyright", exige_credito: true,
      derivado_por: `out/juneau/_pesquisa/geo-sitio-willow-1976-trechos.mjs gravar (sem rede, da camada ${ORIGEM}, sha256 ${m.item.sha256}; regra do corte: ${REGRA})`,
    } });
    escreverRessalvas();
    console.error(`✓ ${SLUG}\n${relatarGravacao(g)}\n  → ressalva escrita nos itens ${ORIGEM} e ${SLUG} da pauta`);
  }
} else {
  console.error("uso: node out/juneau/_pesquisa/geo-sitio-willow-1976-trechos.mjs conferir | gravar");
  process.exit(2);
}
