#!/usr/bin/env node
// GEOMETRIA DO NATURAL EARTH PARA O RESEARCH DO JUNEAU (pesquisa-geo, 27/09/2026).
//
// O que grava (cada um é um slug em out/juneau/_media/geo/ e um item na pauta-geo.json, pelo gravarGeo da
// pré-v1, C:/projetos/regie-v1 no commit 7ab9543):
//   british-columbia            a província inteira        ne_10m_admin_1_states_provinces (CA-BC)     s44
//   yukon                       o território inteiro       ne_10m_admin_1_states_provinces (CA-YT)     s44
//   juneau-icefield             o campo de gelo            ne_10m_glaciated_areas ("Juneau Icefield")  s44
//   rede-rodoviaria-continente  as rodovias do noroeste    ne_10m_roads, recorte -170,51,-110,72       s03, s10
//   rede-rodoviaria-alasca      as do lado dos EUA         o mesmo recorte, só sov_a3 = USA            s33
//
// Por que um script do canal: a pré-v1 recorta por bbox (geo-recorte-bbox), mas não escolhe UMA feature por
// código (a província, o campo de gelo) sem levar as vizinhas, e o --nome dela grava o mesmo name_pt em todas
// as features (APRENDIZADOS.md, item 17, achado 16). Aqui a escolha é por código da fonte, conferida, e o
// recorte das estradas é o recortarBbox da própria pré-v1 (Sutherland–Hodgman), sem redesenho.
//
// CORREÇÃO DECLARADA (a única edição de dado da fonte): no ne_10m_roads, a feature uident 7105 (sov_a3 USA,
// name "2", a Klondike do lado do Alasca) segue de Skagway para o sul até Haines, pela margem oeste do Taiya
// Inlet. Essa estrada não existe: "Haines and Skagway are 15 miles apart by water, but 350 miles apart over land
// via the Klondike Highway, Alaska …" (fundamento.json) e "Travelers with vehicles may drive between Skagway and
// Haines using the highway route through Canada" (fundamento.json). A linha é cortada no ponto dela mais perto
// de Skagway (ponto do NE em cidades-ne.json; o ponto de corte é interseção calculada sobre o segmento, como a
// do recorte por bbox), e o trecho ao sul sai. O corte fica registrado nas propriedades da feature e da camada.
//
// As camadas ne_10m_roads e ne_10m_glaciated_areas não estão na lista do obter-natural-earth.mjs: foram
// baixadas do MESMO repositório e commit (urlCamada), e o sha256 medido em 27/09/2026 fica fixado abaixo.
//
// Uso (de dentro de C:/projetos/alpha-point):
//   node out/juneau/_pesquisa/geo-ne-juneau.mjs            (só confere e imprime)
//   node out/juneau/_pesquisa/geo-ne-juneau.mjs --gravar   (confere e grava)
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const { gravarGeo, relatarGravacao, validarFC } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const { CAMADAS, COMMIT_NE, urlCamada } = await import("file:///C:/projetos/regie-v1/src/geo/obter-natural-earth.mjs");
const { recortarBbox } = await import("file:///C:/projetos/regie-v1/src/geo/geo-recorte-bbox.mjs");

const GRAVAR = process.argv.includes("--gravar");
const PASTA_NE = join(homedir(), ".regie", "geo", "natural-earth");
const SHA_EXTRA = {   // medidos em 27/09/2026 sobre urlCamada(<camada>) no commit COMMIT_NE
  ne_10m_roads: "66a0c7b438e92fd124822cc5921cfa11042f48c294ade5e0f03f2c6640fd0248",
  ne_10m_glaciated_areas: "04fd2303d5f0ece2cf482af19d06731d745db9690501d7b0a2a4b7fe23a7726f",
};
const LIC = "Domínio público (Natural Earth) — sem crédito obrigatório; citável como fonte";
const LIC_URL = "https://www.naturalearthdata.com/about/terms-of-use/";
const hoje = new Date().toISOString().slice(0, 10);

function camada(nome) {
  const buf = readFileSync(join(PASTA_NE, `${nome}.geojson`));
  const h = createHash("sha256").update(buf).digest("hex");
  const esperado = CAMADAS[nome]?.sha256 || SHA_EXTRA[nome];
  if (h !== esperado) throw new Error(`${nome}: sha256 ${h.slice(0, 12)}… não bate com ${esperado?.slice(0, 12)}…`);
  const gj = JSON.parse(buf.toString("utf8"));
  if (gj.name !== nome) throw new Error(`${nome}: o arquivo diz name=${gj.name}`);
  return { gj, sha256: h, url: urlCamada(nome) };
}

// ---------- geometria ----------
const r5 = (c) => JSON.parse(JSON.stringify(c, (k, v) => (typeof v === "number" ? +v.toFixed(5) : v)));
const km = ([aLon, aLat], [bLon, bLat]) => {
  const R = 6371.0088, r = Math.PI / 180, dLat = (bLat - aLat) * r, dLon = (bLon - aLon) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(aLat * r) * Math.cos(bLat * r) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};
const polys = (g) => (g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : []);
const dentroAnel = ([x, y], anel) => {
  let d = false;
  for (let i = 0, j = anel.length - 1; i < anel.length; j = i++) {
    const [xi, yi] = anel[i], [xj, yj] = anel[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) d = !d;
  }
  return d;
};
const dentro = (p, g) => polys(g).some((poly) => dentroAnel(p, poly[0]) && !poly.slice(1).some((h) => dentroAnel(p, h)));
const vertices = (g) => { const out = []; const w = (c) => { if (typeof c[0] === "number") out.push(c); else c.forEach(w); }; w(g.coordinates); return out; };
const partes = (g) => polys(g).length;

// ---------- 1 · admin-1: British Columbia e Yukon ----------
const A1 = camada("ne_10m_admin_1_states_provinces");
function admin1(iso, rotulo) {
  const achados = A1.gj.features.filter((f) => f.properties.iso_3166_2 === iso);
  if (achados.length !== 1) throw new Error(`${iso}: ${achados.length} features`);
  const f = achados[0], p = f.properties;
  if (p.adm0_a3 !== "CAN" || p.name_en !== rotulo) throw new Error(`${iso}: veio ${p.name_en}/${p.adm0_a3}`);
  const props = {
    name: p.name, name_en: p.name_en, name_pt: rotulo, rotulo, papel: "territorio",
    type_en: p.type_en, iso_3166_2: p.iso_3166_2, adm1_code: p.adm1_code, adm0_a3: p.adm0_a3, admin: p.admin,
    wikidataid: p.wikidataid, ne_id: p.ne_id, partes: partes(f.geometry), tol: 0,
    nota: "name_pt leva o nome em inglês de propósito: é texto de tela do canal (roupa do pesquisa-geo §4); a chave é da pré-v1.",
    license: LIC,
  };
  const fc = r5({ type: "FeatureCollection", properties: { fonte: "Natural Earth — ne_10m_admin_1_states_provinces", camada_url: A1.url, sha256_camada: A1.sha256, commit: COMMIT_NE, escolha: `iso_3166_2 = ${iso}`, obtido_em: hoje }, features: [{ type: "Feature", properties: props, geometry: f.geometry }] });
  if (partes(fc.features[0].geometry) !== props.partes) throw new Error(`${iso}: o arredondamento mudou o número de partes`);
  return fc;
}
const BC = admin1("CA-BC", "British Columbia");
const YT = admin1("CA-YT", "Yukon");
const AK = A1.gj.features.find((f) => f.properties.iso_3166_2 === "US-AK");

// ---------- 2 · o campo de gelo ----------
const GL = camada("ne_10m_glaciated_areas");
const gelos = GL.gj.features.filter((f) => f.properties.name === "Juneau Icefield");
if (gelos.length !== 1) throw new Error(`Juneau Icefield: ${gelos.length} features`);
const gelo = gelos[0];
const vGelo = vertices(gelo.geometry);
const noBC = vGelo.filter((p) => dentro(p, BC.features[0].geometry)).length;
const noAK = vGelo.filter((p) => dentro(p, AK.geometry)).length;
const JUNEAU = JSON.parse(readFileSync("out/juneau/_media/geo/cidades-ne.json", "utf8")).features.find((f) => f.properties.rotulo === "Juneau").geometry.coordinates;
const distGeloJuneau = Math.min(...vGelo.map((p) => km(p, JUNEAU)));
const GELO = r5({ type: "FeatureCollection", properties: { fonte: "Natural Earth — ne_10m_glaciated_areas", camada_url: GL.url, sha256_camada: GL.sha256, commit: COMMIT_NE, escolha: 'name = "Juneau Icefield" (1 feature na camada)', obtido_em: hoje },
  features: [{ type: "Feature", properties: {
    name: gelo.properties.name, name_pt: "Juneau Icefield", rotulo: "Juneau Icefield", papel: "area", featurecla: gelo.properties.featurecla,
    scalerank: gelo.properties.scalerank, recnum: gelo.properties.recnum, partes: partes(gelo.geometry), tol: 0,
    cruza_a_fronteira: { vertices: vGelo.length, na_british_columbia: noBC, no_alasca: noAK, fora_dos_dois: vGelo.length - noBC - noAK,
      como: "cada vértice testado contra os polígonos CA-BC e US-AK do ne_10m_admin_1_states_provinces (mesma fonte, mesma escala)" },
    vertice_mais_perto_de_juneau_km: +distGeloJuneau.toFixed(1),
    license: LIC }, geometry: gelo.geometry }] });

// ---------- 3 · as rodovias ----------
const RD = camada("ne_10m_roads");
const BBOX = [-170, 51, -110, 72];
const soEstrada = { ...RD.gj, features: RD.gj.features.filter((f) => f.properties.featurecla === "Road" && !/ferry/i.test(f.properties.type || "")) };
const rec = recortarBbox(soEstrada, { bbox: BBOX, tol: 0 });
const SKAGWAY = JSON.parse(readFileSync("out/juneau/_media/geo/cidades-ne.json", "utf8")).features.find((f) => f.properties.rotulo === "Skagway").geometry.coordinates;
const HAINES = JSON.parse(readFileSync("out/juneau/_media/geo/cidade-haines-osm.json", "utf8")).features.find((f) => f.geometry.type === "Point").geometry.coordinates;

/** Corta a linha no ponto dela mais perto de `alvo`; devolve [trecho-que-fica, trecho-que-sai, ponto, distância]. */
function cortarNoMaisPerto(linha, alvo) {
  const kx = 111320 * Math.cos((alvo[1] * Math.PI) / 180), ky = 110540;
  const m = ([x, y]) => [(x - alvo[0]) * kx, (y - alvo[1]) * ky];
  let melhor = null;
  for (let i = 1; i < linha.length; i++) {
    const a = m(linha[i - 1]), b = m(linha[i]), dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy;
    let t = L ? -(a[0] * dx + a[1] * dy) / L : 0; t = Math.max(0, Math.min(1, t));
    const q = [a[0] + t * dx, a[1] + t * dy], d = Math.hypot(q[0], q[1]);
    if (!melhor || d < melhor.d) melhor = { d, i, ponto: [alvo[0] + q[0] / kx, alvo[1] + q[1] / ky] };
  }
  const { i, ponto } = melhor;
  return { antes: [...linha.slice(0, i), ponto], depois: [ponto, ...linha.slice(i)], ponto, dist_m: Math.round(melhor.d) };
}
const correcoes = [];
for (const f of rec.fc.features) {
  const p = f.properties;
  if (!(p.uident === 7105 && p.sov_a3 === "USA" && p.name === "2")) continue;
  if (f.geometry.type !== "LineString") throw new Error("uident 7105 não é LineString");
  const linha = f.geometry.coordinates;
  const ini = linha[0], fim = linha.at(-1);
  // a linha vem de Carcross (norte) para o sul: o que fica é do começo até Skagway
  if (!(ini[1] > fim[1])) throw new Error("uident 7105: esperava a linha de norte para sul");
  const c = cortarNoMaisPerto(linha, SKAGWAY);
  const kmSai = c.depois.slice(1).reduce((s, q, k) => s + km(c.depois[k], q), 0);
  const reg = {
    feature: "ne_10m_roads uident 7105 (sov_a3 USA, name 2)",
    o_que_saiu: `o trecho de Skagway para o sul, ${kmSai.toFixed(1)} km, ${c.depois.length} vértices, até ${JSON.stringify(r5(fim))} (a ${km(fim, HAINES).toFixed(1)} km do ponto de Haines do OSM): uma estrada Skagway–Haines que não existe`,
    ponto_de_corte: r5(c.ponto), distancia_do_ponto_de_skagway_m: c.dist_m,
    como: "ponto da linha mais perto do ponto de Skagway do NE (cidades-ne.json), calculado sobre o segmento; nenhum vértice novo além dele",
    prova: [
      "fundamento.json: \"Haines and Skagway are 15 miles apart by water, but 350 miles apart over land via the Klondike Highway, Alaska …\"",
      "fundamento.json: \"Travelers with vehicles may drive between Skagway and Haines using the highway route through Canada and connect with AMHS service in Haines.\"",
    ],
  };
  f.geometry.coordinates = r5(c.antes);
  p.correcao_declarada = reg;
  correcoes.push(reg);
}
if (correcoes.length !== 1) throw new Error(`esperava 1 correção (uident 7105), fiz ${correcoes.length}`);
const propsRede = (escopo) => ({ fonte: "Natural Earth — ne_10m_roads", camada_url: RD.url, sha256_camada: RD.sha256, commit: COMMIT_NE,
  recorte: BBOX, filtro: 'featurecla = "Road" e type sem "Ferry" (as rotas de balsa ficam fora: não são estrada)', escopo,
  correcao_declarada: correcoes[0],
  nota: "O name do ne_10m_roads é o número da rota (1, 2, 3…), não o nome da rodovia: o nome de cada uma vem das camadas do OSM (alaska-highway, glenn-highway, haines-highway, klondike-highway), não daqui. Nenhuma estrada desta camada chega a Juneau.",
  obtido_em: hoje });
const REDE = { type: "FeatureCollection", properties: propsRede("todas as rodovias do recorte (EUA e Canadá)"), features: rec.fc.features.map((f) => ({ ...f, properties: { ...f.properties, license: LIC } })) };
const REDE_AK = { type: "FeatureCollection", properties: propsRede("só as do lado dos EUA (sov_a3 = USA): a rede do Alasca; a ligação com o continente segue pelas features CAN de rede-rodoviaria-continente"), features: REDE.features.filter((f) => f.properties.sov_a3 === "USA") };

// ---------- conferência ----------
const tab = [];
const conferir = (slug, fc, ref) => {
  const v = validarFC(fc);
  const peso = JSON.stringify(fc).length;
  tab.push({ slug, features: v.features, bbox: v.bbox, kb: Math.round(peso / 1024), ...ref });
};
const centroBbox = (b) => [+((b[0] + b[2]) / 2).toFixed(3), +((b[1] + b[3]) / 2).toFixed(3)];
conferir("british-columbia", BC, { partes: BC.features[0].properties.partes, referencia: "Victoria (-123.37, 48.43) e Prince George (-122.75, 53.92) dentro",
  confere: dentro([-123.37, 48.43], BC.features[0].geometry) && dentro([-122.75, 53.92], BC.features[0].geometry) && !dentro(JUNEAU, BC.features[0].geometry) });
conferir("yukon", YT, { partes: YT.features[0].properties.partes, referencia: "Whitehorse (NE) dentro; Juneau fora",
  confere: dentro(JSON.parse(readFileSync("out/juneau/_media/geo/cidades-ne.json", "utf8")).features.find((f) => f.properties.rotulo === "Whitehorse").geometry.coordinates, YT.features[0].geometry) && !dentro(JUNEAU, YT.features[0].geometry) });
conferir("juneau-icefield", GELO, { centro_bbox: centroBbox(GELO.features[0] ? validarFC(GELO).bbox : [0, 0, 0, 0]), cruza: GELO.features[0].properties.cruza_a_fronteira, vertice_mais_perto_de_juneau_km: +distGeloJuneau.toFixed(1),
  confere: noBC > 0 && noAK > 0 });
conferir("rede-rodoviaria-continente", REDE, { correcao: correcoes[0].o_que_saiu, estradas_a_menos_de_20km_de_juneau: REDE.features.filter((f) => vertices(f.geometry).some((p) => km(p, JUNEAU) < 20)).length, confere: true });
conferir("rede-rodoviaria-alasca", REDE_AK, { confere: REDE_AK.features.every((f) => f.properties.sov_a3 === "USA") });
console.log(JSON.stringify(tab, null, 1));
if (tab.some((t) => !t.confere)) { console.error("✗ alguma conferência falhou: nada gravado"); process.exit(1); }

if (GRAVAR) {
  const deriv = (x) => `out/juneau/_pesquisa/geo-ne-juneau.mjs --gravar (${x}; commit ${COMMIT_NE.slice(0, 7)})`;
  const itens = [
    ["british-columbia", BC, "Natural Earth — ne_10m_admin_1_states_provinces", deriv("ne_10m_admin_1_states_provinces, iso_3166_2 = CA-BC, tol 0"), "s44"],
    ["yukon", YT, "Natural Earth — ne_10m_admin_1_states_provinces", deriv("ne_10m_admin_1_states_provinces, iso_3166_2 = CA-YT, tol 0"), "s44"],
    ["juneau-icefield", GELO, "Natural Earth — ne_10m_glaciated_areas", deriv(`ne_10m_glaciated_areas, name = Juneau Icefield, sha256 ${GL.sha256.slice(0, 12)}…, tol 0`), "s44"],
    ["rede-rodoviaria-continente", REDE, "Natural Earth — ne_10m_roads", deriv(`ne_10m_roads, sha256 ${RD.sha256.slice(0, 12)}…, recorte ${BBOX.join(",")}, sem balsas, com a correção declarada da uident 7105`), ["s03", "s10"]],
    ["rede-rodoviaria-alasca", REDE_AK, "Natural Earth — ne_10m_roads", deriv(`ne_10m_roads, sha256 ${RD.sha256.slice(0, 12)}…, recorte ${BBOX.join(",")}, só sov_a3 USA, sem balsas, com a correção declarada da uident 7105`), "s33"],
  ];
  for (const [slug, fc, fonte, derivado_por, cena] of itens) {
    const g = gravarGeo({ slug, fc, proj: "juneau", cena, origem: { fonte, licenca: LIC, url: LIC_URL, exige_credito: false, derivado_por } });
    console.error(`✓ ${slug}\n${relatarGravacao(g)}`);
  }
}
