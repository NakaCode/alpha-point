#!/usr/bin/env node
// A ESTRADA DO CENTRO DE JUNEAU AO FIM DA THANE ROAD, DO OPENSTREETMAP (pesquisa-geo, 01/10/2026) — s44.
//
// O pedido (Claude central, no passo art): na s44, o mapista mediu um vão de ~240 px em 4K entre o começo da estrada
// sólida (estrada-juneau-cascade, que começa na Marine Way, no vértice da Alaska Route 7 mais perto do ponto de Juneau
// do NE) e o fim da Thane Road (thane-road-fim, node/5691733230, de onde sai o corredor do Taku). Esta linha fecha o
// vão pela estrada real: do mesmo nó em que a estrada-juneau-cascade começa até o nó do fim da Thane Road.
//
// Como, igual a estrada-juneau-cascade.mjs: os ways da Alaska Route 7 (relation/535397) na janela do centro a Thane, e
// os ways com name=Thane Road, South Franklin Street ou Marine Way na mesma janela, viram um grafo (vértice = nó do OSM),
// e o caminho mais curto vai de um nó ao outro. A costura pelas pontas do geo-osm-rota quebra em pista dupla e
// rotatória (APRENDIZADOS.md, item 17, achado 23). O caminho entra no derivarRota da pré-v1 como um way só (--tol=0), e
// o gravarGeo grava com a licença ODbL. Nada é ligado à mão: cada trecho é um way do OSM, e o relato diz quais.
//
// A conferência (sem rede): o primeiro ponto contra o primeiro da estrada-juneau-cascade, o último contra o
// thane-road-fim, os ways e os nomes no caminho, e a terra, pela costa do OSM da janela (natural=coastline, terra à
// esquerda do sentido do way), com controles: o ponto do Gastineau Channel no GNIS (água) e a vila de Thane (terra).
//
// Licença: ODbL 1.0 — "© OpenStreetMap contributors" na tela da cena, e openstreetmap.org/copyright na descrição.
//
// Uso (de dentro de C:/projetos/alpha-point; a rede é só no "baixar"):
//   node out/juneau/_pesquisa/estrada-juneau-thane.mjs baixar      (um pedido ao Overpass; guarda em out/juneau/_tmp/geo-fontes/)
//   node out/juneau/_pesquisa/estrada-juneau-thane.mjs conferir    (sem rede; imprime)
//   node out/juneau/_pesquisa/estrada-juneau-thane.mjs gravar      (sem rede; confere e grava)
// Overpass: 504 é sobrecarga (espere e tente de novo, espaçado); 403, 429 persistente ou verificação é recusa, e
// recusa não se contorna.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const { gravarGeo, relatarGravacao, validarFC, userAgentOSM } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const { derivarRota } = await import("file:///C:/projetos/regie-v1/src/geo/geo-osm-rota.mjs");

const PASTA = "out/juneau/_tmp/geo-fontes";
const DUMP = `${PASTA}/osm-estrada-juneau-thane.json`;
const SLUG = "estrada-juneau-thane";
const LIC = "ODbL 1.0 — exige atribuição © OpenStreetMap contributors";
const GNIS = `${PASTA}/gnis-ak/Text/DomesticNames_AK.txt`;
const REL = 535397;                 // Alaska Route 7, a mesma da estrada-juneau-cascade
const NO_FIM = 5691733230;          // o fim da Thane Road (thane-road-fim)
const JANELA = [58.235, -134.42, 58.31, -134.28];   // sul, oeste, norte, leste
const NOMES = "^(Thane Road|South Franklin Street|Marine Way)$";
const GNIS_CTRL = { "1402497": "água", "1410784": "terra" };   // Gastineau Channel (Channel); Thane (Populated Place)
const ACAO = process.argv[2];

const bb = JANELA.join(",");
const CONSULTA = `[out:json][timeout:90];rel(${REL});out body;rel(${REL});way(r)(${bb})->.r7;way[highway][name~"${NOMES}"](${bb})->.nom;(.r7;.nom;);out body geom;node(${NO_FIM});out body;way["natural"="coastline"](${bb});out geom;`;

// ---------- medidas ----------
const rad = (x) => (x * Math.PI) / 180;
const hav = ([x1, y1], [x2, y2]) => {   // metros
  const dLat = rad(y2 - y1), dLon = rad(x2 - x1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(y1)) * Math.cos(rad(y2)) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371008.8 * Math.asin(Math.sqrt(a));
};
const r6 = (p) => p.map((v) => +v.toFixed(6));
const cruz = (A, B, Q) => (B[0] - A[0]) * (Q[1] - A[1]) - (B[1] - A[1]) * (Q[0] - A[0]);   // > 0: Q à esquerda de A→B

// a costa mais perto de um ponto, e de que lado dele a terra fica (terra à esquerda do sentido da costa); só decide se
// o círculo até a costa achada cabe na janela baixada (assim nenhuma costa mais perto ficou fora)
function ladoDaCosta(p, C) {
  const kx = 111320 * Math.cos(rad(p[1])), ky = 110574, O = [0, 0];
  const L = ([lon, lat]) => [(lon - p[0]) * kx, (lat - p[1]) * ky];
  let best = null;
  for (const s of C.segs) {
    const A = L(s.a), B = L(s.b), dx = B[0] - A[0], dy = B[1] - A[1], l2 = dx * dx + dy * dy;
    const t = l2 ? Math.max(0, Math.min(1, -(A[0] * dx + A[1] * dy) / l2)) : 0;
    const dd = Math.hypot(A[0] + t * dx, A[1] + t * dy);
    if (!best || dd < best.d) best = { d: dd, s, t, A, B };
  }
  if (!best) return { d: null, terra: null };
  const margem = Math.min((p[1] - JANELA[0]) * ky, (JANELA[2] - p[1]) * ky, (p[0] - JANELA[1]) * kx, (JANELA[3] - p[0]) * kx);
  if (best.d > margem) return { d: best.d, terra: null };
  let terra;
  if (best.t > 0 && best.t < 1) terra = cruz(best.A, best.B, O) > 0;
  else {   // o mais perto é um vértice da costa: vale a virada nele
    const V = best.t === 0 ? best.s.a : best.s.b, ent = C.porFim.get(C.k(V)), sai = C.porIni.get(C.k(V));
    if (ent && sai) {
      const U = L(ent.a), Vv = L(V), W = L(sai.b), e1 = cruz(U, Vv, O) > 0, e2 = cruz(Vv, W, O) > 0;
      terra = cruz(U, Vv, W) > 0 ? e1 && e2 : e1 || e2;
    } else terra = cruz(best.A, best.B, O) > 0;
  }
  return { d: best.d, terra };
}

function lerGnis(ids) {
  if (!existsSync(GNIS)) { console.error(`falta ${GNIS} (o GNIS do Alasca, como no geo-gnis-juneau.mjs)`); process.exit(2); }
  const out = {};
  for (const l of readFileSync(GNIS, "utf8").split(/\r?\n/)) { const c = l.split("|"); if (ids.includes(c[0])) out[c[0]] = { gnis: +c[0], nome: c[1], classe: c[2], ponto: [+c[16], +c[15]] }; }
  for (const id of ids) if (!out[id]) throw new Error(`GNIS ${id} não está em ${GNIS}`);
  return out;
}

function montar() {
  if (!existsSync(DUMP)) { console.error(`falta ${DUMP}: rode "baixar"`); process.exit(2); }
  const j = JSON.parse(readFileSync(DUMP, "utf8"));
  const rel = j.elements.find((e) => e.type === "relation" && e.id === REL);
  if (!rel) throw new Error(`relation/${REL} não está no dump`);
  const membros = new Set(rel.members.filter((m) => m.type === "way").map((m) => m.ref));
  const ways = j.elements.filter((e) => e.type === "way" && e.nodes && e.geometry && e.tags?.highway);
  const costa = j.elements.filter((e) => e.type === "way" && e.geometry && e.tags?.natural === "coastline");
  const noFim = j.elements.find((e) => e.type === "node" && e.id === NO_FIM);
  if (!noFim) throw new Error(`node/${NO_FIM} não está no dump`);

  // o grafo: vértice = nó do OSM, aresta = trecho de um way (sem sentido: é a geometria, não o trânsito)
  const pos = new Map(), adj = new Map();
  const liga = (a, b, d, w) => { if (!adj.has(a)) adj.set(a, []); adj.get(a).push([b, d, w]); };
  for (const w of ways) for (let i = 1; i < w.nodes.length; i++) {
    const a = w.nodes[i - 1], b = w.nodes[i], pa = [w.geometry[i - 1].lon, w.geometry[i - 1].lat], pb = [w.geometry[i].lon, w.geometry[i].lat];
    pos.set(a, pa); pos.set(b, pb);
    const d = hav(pa, pb); liga(a, b, d, w); liga(b, a, d, w);
  }
  // o começo: o nó do OSM no primeiro ponto da estrada-juneau-cascade (gravado com 6 casas: até 0,2 m)
  const est = JSON.parse(readFileSync("out/juneau/_media/geo/estrada-juneau-cascade.json", "utf8")).features[0].geometry.coordinates[0];
  const candIni = [...pos].map(([n, p]) => [n, hav(p, est)]).sort((a, b) => a[1] - b[1]);
  if (!candIni.length || candIni[0][1] > 0.2) throw new Error(`nenhum nó a até 0,2 m do começo da estrada-juneau-cascade (o mais perto a ${candIni[0]?.[1]?.toFixed(2)} m)`);
  const ini = candIni[0][0];
  if (!pos.has(NO_FIM)) throw new Error(`node/${NO_FIM} (o fim da Thane Road) não está em nenhum way da janela`);

  // Dijkstra
  const dist = new Map([[ini, 0]]), prev = new Map(), feito = new Set();
  for (;;) {
    let u = null, du = Infinity;
    for (const [n, d] of dist) if (!feito.has(n) && d < du) { du = d; u = n; }
    if (u === null || u === NO_FIM) break;
    feito.add(u);
    for (const [v, d, w] of adj.get(u) || []) { const nd = du + d; if (nd < (dist.get(v) ?? Infinity)) { dist.set(v, nd); prev.set(v, [u, w]); } }
  }
  if (!dist.has(NO_FIM)) throw new Error("o fim da Thane Road não se liga ao começo da estrada nesta janela");
  const nos = [], trechos = [];
  for (let c = NO_FIM; c !== undefined;) {
    nos.unshift(c);
    const pv = prev.get(c);
    if (!pv) break;
    const w = pv[1], km = hav(pos.get(pv[0]), pos.get(c)) / 1000;
    if (trechos[0]?.w === w) trechos[0].km += km; else trechos.unshift({ w, km });
    c = pv[0];
  }
  const caminho = nos.map((n) => pos.get(n));
  const kmTotal = dist.get(NO_FIM) / 1000;
  const waysNoCaminho = trechos.map(({ w, km }) => ({ way: `way/${w.id}`, name: w.tags.name || null, ref: w.tags.ref || null, highway: w.tags.highway, na_relation_535397: membros.has(w.id), km: +km.toFixed(3) }));
  const kmPorNome = {};
  for (const t of waysNoCaminho) kmPorNome[t.name || "(sem nome)"] = +((kmPorNome[t.name || "(sem nome)"] || 0) + t.km).toFixed(3);

  // a terra, pela costa da janela
  const segs = [], porIni = new Map(), porFim = new Map(), k = (p) => `${p[0].toFixed(7)},${p[1].toFixed(7)}`;
  for (const w of costa) { const g = w.geometry.map((p) => [p.lon, p.lat]); for (let i = 1; i < g.length; i++) { const s = { a: g[i - 1], b: g[i] }; segs.push(s); porIni.set(k(s.a), s); porFim.set(k(s.b), s); } }
  const C = { segs, porIni, porFim, k };
  const lados = caminho.map((p) => ladoDaCosta(p, C));
  const G = lerGnis(Object.keys(GNIS_CTRL));
  const controles = Object.entries(GNIS_CTRL).map(([id, espera]) => {
    const g = G[id], x = ladoDaCosta(g.ponto, C), deu = x.terra === null ? "não decide" : x.terra ? "terra" : "água";
    return { nome: `GNIS ${g.gnis} (${g.nome}, ${g.classe})`, ponto: r6(g.ponto), espera, deu, a_m_da_costa: x.d === null ? null : Math.round(x.d), passou: deu === "não decide" ? null : deu === espera };
  });
  if (controles.some((x) => x.passou !== true)) throw new Error(`controle do teste da costa não passou: ${JSON.stringify(controles)}`);
  const terra = {
    metodo: `os ${caminho.length} nós do caminho contra a costa do OSM da janela (${costa.length} ways natural=coastline), terra à esquerda do sentido do way`,
    nos_em_terra: lados.filter((x) => x.terra === true).length, nos_na_agua: lados.filter((x) => x.terra === false).length, nos_sem_veredito: lados.filter((x) => x.terra === null).length,
    distancia_a_costa_m: (() => { const d = lados.map((x) => x.d).filter((v) => v !== null).sort((a, b) => a - b); return { min: Math.round(d[0]), mediana: Math.round(d[Math.floor(d.length / 2)]), max: Math.round(d.at(-1)) }; })(),
    controles,
  };

  const thaneFim = JSON.parse(readFileSync("out/juneau/_media/geo/thane-road-fim.json", "utf8")).features[0].geometry.coordinates;
  const conferencia = {
    primeiro_ponto: r6(caminho[0]), no_inicial: `node/${ini}`, inicio_a_m_do_comeco_da_estrada_juneau_cascade: +hav(caminho[0], est).toFixed(2),
    ultimo_ponto: r6(caminho.at(-1)), no_final: `node/${NO_FIM}`, fim_a_m_do_thane_road_fim: +hav(caminho.at(-1), thaneFim).toFixed(2),
    tags_do_no_final: noFim.tags || null,
  };
  const dumpUm = { elements: [{ type: "way", geometry: caminho.map(([lon, lat]) => ({ lon, lat })) }] };
  const r = derivarRota(dumpUm, { nome: "South Franklin Street + Thane Road (Juneau)", pt: "Juneau to the end of Thane Road", tol: 0, extra: {
    rotulo: "", papel: "rota",
    o_que_e: "a estrada real do começo da estrada-juneau-cascade (Marine Way, centro de Juneau) ao fim da Thane Road (thane-road-fim): fecha o vão entre as duas na s44",
    osm_relation: `relation/${REL}`, osm_relation_name: rel.tags?.name || null, osm_relation_ref: rel.tags?.ref || null,
    km_por_nome: kmPorNome, mi_medido: +(kmTotal / 1.609344).toFixed(2), ways_no_caminho: waysNoCaminho,
    conferencia, terra, osm_base: j.osm3s?.timestamp_osm_base || null,
    license: "ODbL — © OpenStreetMap contributors",
  } });
  return { fc: r.fc, resumo: r.resumo, orfaos: r.orfaos, km: r.km, conferencia, terra, waysNoCaminho, kmPorNome, rel, base: j.osm3s?.timestamp_osm_base };
}

if (ACAO === "baixar") {
  const r = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST", headers: { "User-Agent": userAgentOSM(), "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ data: CONSULTA }).toString(), signal: AbortSignal.timeout(150000),
  });
  if (!r.ok) { console.error(`Overpass HTTP ${r.status}: 504 é sobrecarga (tente de novo mais tarde, espaçado); 403/429 é recusa, e recusa não se contorna`); process.exit(1); }
  const t = await r.text(), j = JSON.parse(t);
  mkdirSync(PASTA, { recursive: true });
  writeFileSync(DUMP, t);
  console.error(`✓ ${j.elements.length} elementos, base OSM ${j.osm3s?.timestamp_osm_base} → ${DUMP} (${t.length} bytes)`);
} else if (ACAO === "conferir" || ACAO === "gravar") {
  const m = montar();
  const v = validarFC(m.fc), f = m.fc.features[0];
  const tab = { resumo_derivarRota: m.resumo, orfaos: m.orfaos, features: v.features, bbox: v.bbox, geometria: f.geometry.type, vertices: f.geometry.coordinates.length,
    km: +m.km.toFixed(3), mi: f.properties.mi_medido, km_por_nome: m.kmPorNome, ways_no_caminho: m.waysNoCaminho, kb: +(JSON.stringify(m.fc).length / 1024).toFixed(1),
    conferencia: m.conferencia, terra: m.terra };
  if (ACAO === "gravar") {
    if (m.orfaos) { console.error(`✗ ${m.orfaos} órfão(s). Nada foi gravado.`); process.exit(1); }
    if (m.conferencia.inicio_a_m_do_comeco_da_estrada_juneau_cascade > 0.2 || m.conferencia.fim_a_m_do_thane_road_fim > 0.2) { console.error("✗ as pontas não batem com a estrada-juneau-cascade e o thane-road-fim. Nada foi gravado."); process.exit(1); }
    const g = gravarGeo({ slug: SLUG, fc: m.fc, proj: "juneau", cena: "s44", origem: {
      fonte: `OpenStreetMap via Overpass API — ways da Alaska Route 7 (relation/${REL}) e da Thane Road, do começo da estrada-juneau-cascade (node/${m.conferencia.no_inicial.split("/")[1]}) ao fim da Thane Road (node/${NO_FIM})`,
      licenca: LIC, url: "https://www.openstreetmap.org/copyright", exige_credito: true,
      derivado_por: `out/juneau/_pesquisa/estrada-juneau-thane.mjs gravar (dump out/juneau/_tmp/geo-fontes/osm-estrada-juneau-thane.json, base OSM ${m.base}; caminho mais curto no grafo dos ways, ${m.waysNoCaminho.length} ways; derivarRota --tol=0)`,
    } });
    console.error(`✓ ${SLUG}\n${relatarGravacao(g)}`);
  }
  console.log(JSON.stringify(tab, null, 1));
} else {
  console.error("uso: node out/juneau/_pesquisa/estrada-juneau-thane.mjs baixar | conferir | gravar");
  process.exit(2);
}
