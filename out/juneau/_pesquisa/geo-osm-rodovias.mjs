#!/usr/bin/env node
// AS RODOVIAS COM NOME, DO OPENSTREETMAP (pesquisa-geo, 27/09/2026) — s10, s15, s44.
//
// O Natural Earth tem a malha (geo-ne-juneau.mjs), mas o name dele é o número da rota, não o nome da rodovia.
// Aqui cada rodovia vem da relation do OSM que tem o nome, e os EXTREMOS são os que a geometria dá: as duas pontas
// soltas mais distantes da relation (ou, na Klondike e na Haines, o nó que ela divide com a Alaska Highway, que é o
// "meet the Alaska Highway" do FSEIS). O caminho entre as pontas é o mais curto no grafo dos ways (vértice =
// coordenada, porque o OSM liga ways por nó compartilhado), como em estrada-juneau-cascade.mjs: a costura pelas
// pontas do geo-osm-rota quebra em pista dupla e rotatória (APRENDIZADOS.md, item 17, achado 23). O caminho entra no
// derivarRota da pré-v1 como um way só, e o gravarGeo grava com a licença ODbL.
//
// Licença de tudo daqui: ODbL 1.0 — "© OpenStreetMap contributors" na tela da cena, e openstreetmap.org/copyright na
// descrição. As cenas de mapa do Juneau já levam "© MapTiler © OpenStreetMap contributors" pela base.
//
// Uso (de dentro de C:/projetos/alpha-point; a rede é só no "baixar"):
//   node out/juneau/_pesquisa/geo-osm-rodovias.mjs baixar <item|todos>    (Overpass; guarda em out/juneau/_tmp/geo-fontes/)
//   node out/juneau/_pesquisa/geo-osm-rodovias.mjs conferir <item|todos>  (sem rede; imprime)
//   node out/juneau/_pesquisa/geo-osm-rodovias.mjs gravar <item|todos>    (sem rede; confere e grava)
// Itens: alaska-highway, glenn-highway, haines-highway, klondike-highway, alaska-highway-trecho-yukon,
//        estrada-anchorage-willow, haines-junction-osm, alaska-highway-ligacao-continente,
//        estrada-glennallen-tok (o elo da Glenn até a Alaska Highway, acrescentado em 27/09/2026 depois do verificador)
// Overpass: 504 é sobrecarga (espere e tente de novo, espaçado); 403, 429 persistente ou verificação é recusa, e
// recusa não se contorna.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const { gravarGeo, relatarGravacao, validarFC } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const { derivarRota } = await import("file:///C:/projetos/regie-v1/src/geo/geo-osm-rota.mjs");

const PASTA = "out/juneau/_tmp/geo-fontes";
const LIC = "ODbL 1.0 — exige atribuição © OpenStreetMap contributors";
const hoje = new Date().toISOString().slice(0, 10);
const [ACAO, QUAL] = process.argv.slice(2);

// ---------- as consultas (uma por arquivo guardado) ----------
const CONSULTAS = {
  "osm-alaska-highway": "[out:json][timeout:180];rel(326897);out geom;",
  "osm-glenn-parks-haines": "[out:json][timeout:180];(rel(16266162);rel(7636966);rel(7636967);rel(16265497););out geom;node(1715159941);out body;",
  "osm-klondike": '[out:json][timeout:180];(rel(8747347);rel(5385974);way[highway][name="Klondike Highway"](59.40,-135.45,60.90,-134.40);way[highway][ref="98"](59.40,-135.45,59.95,-134.90););out geom;',
  // REMENDOS: as relations têm buracos (ways da rodovia que não são membros, ou membros que não dividem nó). Aqui vêm
  // os ways REAIS do OSM com o mesmo nome ou a mesma ref da rodovia, só nas janelas dos buracos medidos em 27/09/2026
  // (Johnson's Crossing/Teslin e Tok na Alaska Highway; Anchorage na Glenn; Wasilla na Parks). Nada é ligado à mão.
  "osm-remendos": '[out:json][timeout:180];(' +
    'way[highway][name="Alaska Highway"](60.46,-133.34,60.51,-133.25);way[highway][ref~"^(YT )?1$"](60.46,-133.34,60.51,-133.25);' +
    'way[highway][name~"Alaska Highway"](63.29,-143.16,63.38,-142.87);way[highway][ref~"^(AK )?2$"](63.29,-143.16,63.38,-142.87);' +
    'way[highway][name~"Glenn Highway"](61.19,-149.87,61.32,-149.56);way[highway][ref~"^(AK )?1$"](61.19,-149.87,61.32,-149.56);' +
    'way[highway][name~"Parks Highway"](61.52,-149.52,61.61,-149.22);way[highway][ref~"^(AK )?3$"](61.52,-149.52,61.61,-149.22);' +
    ');out geom;',
  // segunda rodada de remendos (27/09/2026): em Tok e em Delta Junction os ways novos da Alaska Highway se chamam
  // "Alaska Hwy" ou "Alaska Hwy 2" (ref "Hwy 2"), e não entraram na primeira consulta
  "osm-remendos-tok-delta": '[out:json][timeout:90];(way[highway~"^(trunk|primary|secondary|trunk_link|primary_link)$"](63.320,-143.10,63.345,-142.90);way[highway~"^(trunk|primary|secondary|trunk_link|primary_link)$"](64.025,-145.76,64.045,-145.70););out geom;',
  // O ELO GLENNALLEN–TOK (27/09/2026, depois do verificador): a Glenn do OSM (relation/16266162) acaba em Glennallen;
  // dali a AK-1 segue pela Richardson (junto com a AK-4) até Gakona Junction e pelo Tok Cut-Off até a Alaska Highway,
  // em Tok. A relation "Alaska Route 1" (326212) e a "Tok Cut-Off" (16204311, from=Tok, to=Gulkana) foram achadas na
  // descoberta de 27/09 (out/juneau/_tmp/geo-fontes/osm-descoberta-ak1.json). A geometria vem recortada numa janela
  // de Glennallen a Tok (out geom(bbox)), e os ways soltos com ref AK 1 ou nome Tok Cut-Off da mesma janela são os
  // remendos possíveis. Nada é ligado à mão.
  "osm-ak1-tok": '[out:json][timeout:180];(rel(326212);rel(16204311););out geom(61.90,-146.30,63.60,-142.30);' +
    '(way[highway][ref~"AK 1(;|$)"](61.90,-146.30,63.60,-142.30);way[highway][name~"Tok Cut"](61.90,-146.30,63.60,-142.30););out geom;',
};
async function baixar(nome) {
  const contato = JSON.parse(readFileSync("canal.json", "utf8")).contato;
  const esperas = [0, 45000, 90000, 180000];
  for (const [n, ms] of esperas.entries()) {
    if (ms) { console.error(`  … Overpass sobrecarregado; nova tentativa em ${ms / 1000} s`); await new Promise((r) => setTimeout(r, ms)); }
    const r = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST", headers: { "User-Agent": `regie alpha-point (${contato})`, "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ data: CONSULTAS[nome] }).toString(), signal: AbortSignal.timeout(240000),
    }).catch((e) => ({ ok: false, status: `rede: ${e.message}` }));
    if (r.ok) {
      const t = await r.text();
      const j = JSON.parse(t);
      if (!j.elements?.length) throw new Error(`${nome}: Overpass devolveu vazio`);
      mkdirSync(PASTA, { recursive: true });
      writeFileSync(`${PASTA}/${nome}.json`, t);
      console.error(`✓ ${nome}: ${j.elements.length} elementos, ${(t.length / 1e6).toFixed(1)} MB → ${PASTA}/${nome}.json (osm3s ${j.osm3s?.timestamp_osm_base || "?"})`);
      return;
    }
    if (r.status === 403 || r.status === 429) { console.error(`✗ ${nome}: Overpass HTTP ${r.status} — recusa; pare aqui (não se contorna).`); process.exit(1); }
    console.error(`  ✗ ${nome}: tentativa ${n + 1}: HTTP ${r.status}`);
  }
  console.error(`✗ ${nome}: o Overpass não respondeu depois de ${esperas.length} tentativas espaçadas. BLOQUEIO reportado; nada desenhado.`);
  process.exit(1);
}
const lerDump = (nome) => {
  const arq = `${PASTA}/${nome}.json`;
  if (!existsSync(arq)) throw new Error(`falta ${arq}: rode "baixar" antes`);
  return JSON.parse(readFileSync(arq, "utf8"));
};

// ---------- geometria ----------
const rad = Math.PI / 180;
const km = ([aLon, aLat], [bLon, bLat]) => {
  const dLat = (bLat - aLat) * rad, dLon = (bLon - aLon) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(aLat * rad) * Math.cos(bLat * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371.0088 * Math.asin(Math.sqrt(h));
};
const chave = (p) => `${p[0].toFixed(7)},${p[1].toFixed(7)}`;
const compr = (l) => l.slice(1).reduce((s, q, i) => s + km(l[i], q), 0);

/** Grafo dos ways (vértice = coordenada). ways: [{id, coords:[[lon,lat],…], tags}] */
function grafo(ways) {
  const pts = new Map(), adj = new Map();
  const liga = (a, b, d, w) => { if (!adj.has(a)) adj.set(a, []); adj.get(a).push([b, d, w]); };
  for (const w of ways) for (let i = 1; i < w.coords.length; i++) {
    const p = w.coords[i], q = w.coords[i - 1], kp = chave(p), kq = chave(q);
    pts.set(kp, p); pts.set(kq, q);
    const d = km(p, q); liga(kp, kq, d, w.id); liga(kq, kp, d, w.id);
  }
  return { pts, adj };
}
/** Dijkstra com heap binário. Devolve { caminho:[[lon,lat]…], km, ways:[ids na ordem] } ou null. */
function caminhoMaisCurto(G, ini, fim) {
  const dist = new Map([[ini, 0]]), prev = new Map(), feito = new Set();
  const heap = [[0, ini]];
  const sobe = (i) => { while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const desce = (i) => { for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } };
  while (heap.length) {
    const [du, u] = heap[0]; const ult = heap.pop(); if (heap.length) { heap[0] = ult; desce(0); }
    if (feito.has(u)) continue; feito.add(u);
    if (u === fim) break;
    for (const [v, d, w] of G.adj.get(u) || []) { const nd = du + d; if (nd < (dist.get(v) ?? Infinity)) { dist.set(v, nd); prev.set(v, [u, w]); heap.push([nd, v]); sobe(heap.length - 1); } }
  }
  if (!dist.has(fim) || !feito.has(fim)) return null;
  const caminho = [], ways = []; let c = fim;
  while (c) { caminho.unshift(G.pts.get(c)); const pv = prev.get(c); if (pv) { if (ways[0] !== pv[1]) ways.unshift(pv[1]); c = pv[0]; } else c = null; }
  return { caminho, km: dist.get(fim), ways };
}
const maisPerto = (G, alvo) => { let m = null, dm = Infinity; for (const [k, p] of G.pts) { const d = km(p, alvo); if (d < dm) { dm = d; m = k; } } return { k: m, km: dm }; };
/** pontas soltas (grau 1) do grafo */
const pontas = (G) => [...G.adj].filter(([, l]) => new Set(l.map((x) => x[0])).size === 1).map(([k]) => k);
/** Dijkstra de uma origem para todos (heap binário): Map vértice → km pela estrada */
function distancias(G, ini) {
  const dist = new Map([[ini, 0]]), feito = new Set(), heap = [[0, ini]];
  const sobe = (i) => { while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const desce = (i) => { for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } };
  while (heap.length) {
    const [du, u] = heap[0]; const ult = heap.pop(); if (heap.length) { heap[0] = ult; desce(0); }
    if (feito.has(u)) continue; feito.add(u);
    for (const [v, d] of G.adj.get(u) || []) { const nd = du + d; if (nd < (dist.get(v) ?? Infinity)) { dist.set(v, nd); heap.push([nd, v]); sobe(heap.length - 1); } }
  }
  return dist;
}
/** Os extremos da rota pela geometria: o par de vértices mais distante PELA ESTRADA (varredura dupla: do vértice
 *  qualquer ao mais longe dele, A; de A ao mais longe dele, B). Numa rota, é o começo e o fim; um ramal ou uma
 *  "excursion" mais curta não ganha. Confere também que o grafo é um componente só. */
function extremos(G) {
  const qualquer = G.pts.keys().next().value;
  const d0 = distancias(G, qualquer);
  if (d0.size !== G.pts.size) throw new Error(`o grafo tem ${G.pts.size - d0.size} vértices desligados do resto: há buraco na rota`);
  const maisLonge = (d) => [...d].reduce((m, x) => (x[1] > m[1] ? x : m));
  const [A] = maisLonge(d0);
  const [B, kmAB] = maisLonge(distancias(G, A));
  return { par: [A, B], pontas: pontas(G).length, km_pela_estrada: kmAB };
}
/** Douglas–Peucker iterativo (em graus, como a pré-v1), preservando as pontas */
function dp(pts, tol) {
  if (!tol || pts.length < 3) return pts.slice();
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const pilha = [[0, pts.length - 1]];
  while (pilha.length) {
    const [i, j] = pilha.pop(); const [x1, y1] = pts[i], [x2, y2] = pts[j]; const dx = x2 - x1, dy = y2 - y1, den = Math.hypot(dx, dy);
    let dmax = -1, idx = -1;
    for (let k = i + 1; k < j; k++) { const [x0, y0] = pts[k]; const d = den === 0 ? Math.hypot(x0 - x1, y0 - y1) : Math.abs(dy * x0 - dx * y0 + x2 * y1 - y2 * x1) / den; if (d > dmax) { dmax = d; idx = k; } }
    if (dmax > tol && idx > 0) { keep[idx] = 1; pilha.push([i, idx], [idx, j]); }
  }
  return pts.filter((_, i) => keep[i]);
}
const waysDaRel = (dump, relId) => {
  const rel = dump.elements.find((e) => e.type === "relation" && e.id === relId);
  if (!rel) throw new Error(`relation/${relId} não está no dump`);
  const ways = rel.members.filter((m) => m.type === "way" && m.geometry?.length > 1).map((m) => ({ id: m.ref, coords: m.geometry.filter(Boolean).map((g) => [g.lon, g.lat]), role: m.role }));
  return { rel, ways, semGeometria: rel.members.filter((m) => m.type === "way" && !m.geometry).length, outros: rel.members.filter((m) => m.type !== "way").length };
};
const waysSoltos = (dump) => dump.elements.filter((e) => e.type === "way" && e.geometry?.length > 1).map((e) => ({ id: e.id, coords: e.geometry.map((g) => [g.lon, g.lat]), tags: e.tags }));
const nosComuns = (Ga, Gb) => [...Ga.pts.keys()].filter((k) => Gb.pts.has(k));

// ---------- lugares de referência (para dar nome aos extremos; nunca para desenhar) ----------
const lerGeo = (s) => JSON.parse(readFileSync(`out/juneau/_media/geo/${s}.json`, "utf8"));
const cid = (n) => lerGeo("cidades-ne").features.find((f) => f.properties.rotulo === n).geometry.coordinates;
const REF = {
  "Anchorage (NE)": cid("Anchorage"), "Fairbanks (NE)": cid("Fairbanks"), "Skagway (NE)": cid("Skagway"), "Whitehorse (NE)": cid("Whitehorse"), "Wasilla (NE)": cid("Wasilla"),
  "Haines (OSM)": lerGeo("cidade-haines-osm").features.find((f) => f.geometry.type === "Point").geometry.coordinates,
  "Willow (OSM)": lerGeo("cidade-willow-osm").features.find((f) => f.geometry.type === "Point").geometry.coordinates,
  "Dawson Creek (NE, ne_id 1159143727)": [-120.233266, 55.766969], "Watson Lake (NE, ne_id 1159148893)": [-128.711692, 60.062306],
  "Fort Nelson (NE, ne_id 1159148863)": [-122.686543, 58.803878], "Palmer (NE, ne_id 1159146305)": [-149.112692, 61.599714],
  "Delta Junction (GNIS 1401104)": [-145.7322222, 64.0377778], "Tok (GNIS 1411046)": [-142.9855556, 63.3366667], "Glennallen (GNIS 1402643)": [-145.5463889, 62.1091667],
  "Gakona Junction (GNIS 1402450)": [-145.3513889, 62.2886111],
  "Haines Junction (OSM node/1715159941)": [-137.51004, 60.75272],
};
const nomear = (p) => { const l = Object.entries(REF).map(([n, q]) => [n, km(p, q)]).sort((a, b) => a[1] - b[1]); return { mais_perto: l[0][0], a_km: +l[0][1].toFixed(1) }; };

// ---------- os itens ----------
// os ways de remendo (fora das relations), com as tags, para dizer quais entraram em cada caminho
const MOTOR = /^(motorway|trunk|primary|secondary|tertiary|motorway_link|trunk_link|primary_link|secondary_link)$/;
let REMENDOS = null;
const remendos = (filtro) => {
  if (!REMENDOS) { const vistos = new Set(); REMENDOS = [...waysSoltos(lerDump("osm-remendos")), ...waysSoltos(lerDump("osm-remendos-tok-delta"))].filter((w) => !vistos.has(w.id) && vistos.add(w.id)); }
  return REMENDOS.filter((w) => MOTOR.test(w.tags.highway || "") && filtro(w.tags));
};
const tagsRemendo = (id) => (REMENDOS || []).find((w) => w.id === id)?.tags || null;

function rota({ G, ini, fim, relTags, relId, nome, pt, tol, cena, slug, membros = null, extra = {} }) {
  const c = caminhoMaisCurto(G, ini, fim);
  if (!c) throw new Error(`${slug}: as pontas não se ligam no grafo`);
  if (membros) {
    const fora = c.ways.filter((id) => !membros.has(id));
    extra = { ...extra, ways_fora_das_relations_no_caminho: fora.map((id) => { const t = tagsRemendo(id); return { way: `way/${id}`, name: t?.name || null, ref: t?.ref || null, highway: t?.highway || null }; }) };
  }
  const simples = dp(c.caminho, tol);
  const dumpUm = { elements: [{ type: "way", geometry: simples.map(([lon, lat]) => ({ lon, lat })) }] };
  const r = derivarRota(dumpUm, { nome, pt, tol: 0, extra: {
    rotulo: pt, papel: "rota", osm_relation: relId ? `relation/${relId}` : null,
    ...Object.fromEntries(Object.entries(relTags || {}).filter(([k]) => /^(name|ref|network|wikidata|wikipedia|from|to|distance|description)$/.test(k)).map(([k, v]) => [`osm_${k.replace(":", "_")}`, v])),
    km_caminho_completo: +c.km.toFixed(2), mi_caminho_completo: +(c.km / 1.609344).toFixed(1), vertices_completo: c.caminho.length, tol_dp_graus: tol,
    ways_no_caminho: c.ways.length, extremo_a: { ponto: c.caminho[0].map((v) => +v.toFixed(6)), ...nomear(c.caminho[0]) }, extremo_b: { ponto: c.caminho.at(-1).map((v) => +v.toFixed(6)), ...nomear(c.caminho.at(-1)) },
    license: "ODbL — © OpenStreetMap contributors", ...extra } });
  return { slug, fc: r.fc, cena, relId, resumo: r.resumo, km: c.km, caminho: c.caminho };
}

function montar() {
  const out = {};
  // Alaska Highway (relation/326897, distance=2232)
  const AH = waysDaRel(lerDump("osm-alaska-highway"), 326897);
  const remAH = remendos((t) => /^Alaska (Highway|Hwy)( 2)?$/.test(t.name || ""));
  const GAH = grafo([...AH.ways, ...remAH]);
  const membrosAH = new Set(AH.ways.map((w) => w.id));
  const eAH = extremos(GAH);
  out["alaska-highway"] = rota({ G: GAH, ini: eAH.par[0], fim: eAH.par[1], relTags: AH.rel.tags, relId: 326897, nome: "Alaska Highway", pt: "Alaska Highway", tol: 0.0005, cena: ["s10", "s44"], slug: "alaska-highway", membros: membrosAH,
    extra: { pontas_soltas_na_relation: eAH.pontas, membros_sem_geometria: AH.semGeometria, nota: "a rota de hoje (retificada desde 1942); a tela não a rotula como o traçado de 1942 (espelho, s10)" } });
  // o ponto onde ela encontra a rede do continente: a ponta dela mais perto de um lugar com nome no NE
  const ahEnds = [out["alaska-highway"].caminho[0], out["alaska-highway"].caminho.at(-1)];
  const DC = REF["Dawson Creek (NE, ne_id 1159143727)"];
  const pontaDC = ahEnds.map((p) => km(p, DC)).sort((a, b) => a - b)[0];
  out["alaska-highway-ligacao-continente"] = { slug: "alaska-highway-ligacao-continente", cena: "s10", ne: true, fc: { type: "FeatureCollection",
    properties: { fonte: "Natural Earth — ne_10m_populated_places_simple (o ponto) + OpenStreetMap relation/326897 (a prova de que a rota começa ali)", obtido_em: hoje },
    features: [{ type: "Feature", properties: { rotulo: "", name: "Dawson Creek", papel: "ponto", ne_id: 1159143727, adm1name: "British Columbia",
      o_que_e: "a ponta sul da Alaska Highway, onde ela encontra as rodovias do continente (no NE, as rotas 2 e 97 da BC e a 2 de Alberta chegam ao mesmo lugar: rede-rodoviaria-continente)",
      prova: { ponta_da_rota_osm_mais_perto_km: +pontaDC.toFixed(2), rota: "relation/326897 (Alaska Highway), extremos pela geometria em alaska-highway.json" },
      nota: "o nome é o que a fonte dá (Dawson Creek, NE); nem o dossiê nem o texto aprovado o citam: o rótulo, se houver, é do redator-de-tela",
      license: "Domínio público (Natural Earth)" }, geometry: { type: "Point", coordinates: DC } }] } };

  // Glenn, Parks e Haines
  const D2 = lerDump("osm-glenn-parks-haines");
  const GL = waysDaRel(D2, 16266162), remGL = remendos((t) => t.name === "Glenn Highway");
  const GG = grafo([...GL.ways, ...remGL]), eGL = extremos(GG);
  const membrosGL = new Set(GL.ways.map((w) => w.id));
  out["glenn-highway"] = rota({ G: GG, ini: eGL.par[0], fim: eGL.par[1], relTags: GL.rel.tags, relId: 16266162, nome: "Glenn Highway", pt: "Glenn Highway", tol: 0.0003, cena: "s10", slug: "glenn-highway", membros: membrosGL,
    extra: { pontas_soltas_na_relation: eGL.pontas, membros_sem_geometria: GL.semGeometria,
      nota: "a relation do OSM diz from=Anchorage, to=Glennallen: a Glenn Highway do OSM acaba em Glennallen. Dali a AK-1 segue pela Richardson Highway até Gakona Junction e pelo Tok Cut-Off até a Alaska Highway, em Tok. Esse elo não está nesta camada: está em estrada-glennallen-tok.json (OSM, relations 326212 e 16204311), que começa no vértice em que esta acaba; e, sem nome, na rede-rodoviaria-continente (NE, rota 1)" } });
  const HH = waysDaRel(D2, 16265497), GH = grafo(HH.ways);
  const PK1 = waysDaRel(D2, 7636966), PK2 = waysDaRel(D2, 7636967);
  // Haines Highway: de Haines até o nó que ela divide com a Alaska Highway (Haines Junction)
  const comunsHH = nosComuns(GH, GAH);
  if (!comunsHH.length) throw new Error("haines-highway: nenhum nó em comum com a Alaska Highway");
  const iniHH = maisPerto(GH, REF["Haines (OSM)"]);
  // o encontro é o nó comum mais perto de Haines PELA ESTRADA
  let melhorHH = null;
  for (const k of comunsHH) { const c = caminhoMaisCurto(GH, iniHH.k, k); if (c && (!melhorHH || c.km < melhorHH.km)) melhorHH = { k, km: c.km }; }
  if (!melhorHH) throw new Error("haines-highway: Haines não se liga a nenhum nó comum com a Alaska Highway");
  const fimHH = melhorHH.k;
  out["haines-highway"] = rota({ G: GH, ini: iniHH.k, fim: fimHH, relTags: HH.rel.tags, relId: 16265497, nome: "Haines Highway", pt: "Haines Highway", tol: 0.0003, cena: "s44", slug: "haines-highway",
    extra: { inicio: `o vértice da relation mais perto do ponto de Haines do OSM (${iniHH.km.toFixed(2)} km)`, fim: "o nó que a Haines Highway divide com a Alaska Highway (relation/326897) — o encontro das duas",
      nos_em_comum_com_a_alaska_highway: comunsHH.length, membros_sem_geometria: HH.semGeometria } });

  // Klondike Highway: de Skagway até o primeiro nó que ela divide com a Alaska Highway
  const D3 = lerDump("osm-klondike");
  const kWays = [...waysDaRel(D3, 8747347).ways, ...waysDaRel(D3, 5385974).ways, ...waysSoltos(D3)];
  const GK = grafo(kWays);
  const iniK = maisPerto(GK, REF["Skagway (NE)"]);
  const comunsK = nosComuns(GK, GAH);
  if (!comunsK.length) throw new Error("klondike-highway: nenhum nó em comum com a Alaska Highway");
  // o encontro "near Whitehorse" é o nó comum mais perto de Skagway PELA ESTRADA
  let melhorK = null;
  for (const k of comunsK) { const c = caminhoMaisCurto(GK, iniK.k, k); if (c && (!melhorK || c.km < melhorK.km)) melhorK = { k, km: c.km }; }
  const relK = D3.elements.find((e) => e.type === "relation" && e.id === 5385974);
  out["klondike-highway"] = rota({ G: GK, ini: iniK.k, fim: melhorK.k, relTags: relK.tags, relId: null, nome: "Klondike Highway", pt: "Klondike Highway", tol: 0.0003, cena: "s44", slug: "klondike-highway",
    extra: { osm_fontes: "relation/8747347 (BC section), relation/5385974 (YT section) e os ways com name=\"Klondike Highway\" ou ref=98 no lado do Alasca",
      inicio: `o vértice mais perto do ponto de Skagway do NE (${iniK.km.toFixed(2)} km)`, fim: "o primeiro nó, pela estrada, que a Klondike divide com a Alaska Highway (relation/326897): o \"meets the Alaska Highway near Whitehorse\" do FSEIS (mec-01.8)",
      nos_em_comum_com_a_alaska_highway: comunsK.length } });

  // o trecho da Alaska Highway entre os dois encontros (s44: "só o trecho do Yukon que a Haines e a Klondike encontram")
  out["alaska-highway-trecho-yukon"] = rota({ G: GAH, ini: fimHH, fim: melhorK.k, relTags: AH.rel.tags, relId: 326897, nome: "Alaska Highway", pt: "Alaska Highway", tol: 0.0003, cena: "s44", slug: "alaska-highway-trecho-yukon", membros: membrosAH,
    extra: { recorte: "o caminho na Alaska Highway entre o nó que ela divide com a Haines Highway (Haines Junction) e o que divide com a Klondike Highway (perto de Whitehorse); o mesmo dado de alaska-highway.json" } });

  // Anchorage → Willow pela estrada (Glenn + Parks)
  const remPK = remendos((t) => /Parks Highway/.test(t.name || ""));
  const GAW = grafo([...GL.ways, ...remGL, ...PK1.ways, ...PK2.ways, ...remPK]);
  const membrosAW = new Set([...GL.ways, ...PK1.ways, ...PK2.ways].map((w) => w.id));
  const iniAW = maisPerto(GAW, REF["Anchorage (NE)"]), fimAW = maisPerto(GAW, REF["Willow (OSM)"]);
  out["estrada-anchorage-willow"] = rota({ G: GAW, ini: iniAW.k, fim: fimAW.k, relTags: null, relId: null, nome: "Glenn Highway and George Parks Highway (Anchorage to Willow)", pt: "", tol: 0.0003, cena: "s15", slug: "estrada-anchorage-willow", membros: membrosAW,
    extra: { osm_fontes: "relation/16266162 (Glenn Highway), relation/7636966 e relation/7636967 (George Parks Highway, os dois sentidos)",
      inicio: `o vértice mais perto do ponto de Anchorage do NE (${iniAW.km.toFixed(2)} km)`, fim: `o vértice mais perto do ponto de Willow do OSM (${fimAW.km.toFixed(2)} km)`,
      fonte_diz: "\"The Willow site is located approximately 70 road miles north of Anchorage ... The town of Willow is five miles to the west of the site.\" (1976, p. 48; fundamento.json). A medida aqui vai até a vila, não até o local" } });

  // Haines Junction (ponto do OSM)
  const nHJ = D2.elements.find((e) => e.type === "node" && e.id === 1715159941);
  if (!nHJ || nHJ.tags?.name !== "Haines Junction") throw new Error("node/1715159941 não é Haines Junction");
  out["haines-junction-osm"] = { slug: "haines-junction-osm", cena: "s44", osmNode: 1715159941, fc: { type: "FeatureCollection",
    properties: { fonte: "OpenStreetMap via Overpass API — node/1715159941", licenca: LIC, url: "https://www.openstreetmap.org/node/1715159941", obtido_em: hoje },
    features: [{ type: "Feature", properties: { rotulo: "Haines Junction", name: nHJ.tags.name, papel: "ponto", place: nHJ.tags.place || null, wikidata: nHJ.tags.wikidata || null,
      osm: "node/1715159941", a_km_do_encontro_haines_alaska_highway: +km([nHJ.lon, nHJ.lat], GH.pts.get(fimHH)).toFixed(2),
      nota: "o Natural Earth (ne_10m_populated_places_simple) não tem Haines Junction", license: "ODbL — © OpenStreetMap contributors" },
      geometry: { type: "Point", coordinates: [+nHJ.lon.toFixed(6), +nHJ.lat.toFixed(6)] } }] } };

  // O ELO GLENNALLEN–TOK (s10; 27/09/2026, depois do verificador): da ponta em que a Glenn do OSM acaba, em Glennallen,
  // até o nó que a AK-1 divide com a Alaska Highway, em Tok. Grafo: os membros da relation/326212 (Alaska Route 1)
  // que vieram INTEIROS na janela (sem nó cortado pelo out geom(bbox)), os da relation/16204311 (Tok Cut-Off) e os
  // ways soltos da janela com ref AK 1 ou nome Tok Cut-Off (geometria inteira). O nome de cada trecho é o dos ways.
  const D4 = lerDump("osm-ak1-tok");
  const relAK1 = D4.elements.find((e) => e.type === "relation" && e.id === 326212);
  if (!relAK1) throw new Error("relation/326212 não está no dump osm-ak1-tok");
  const idsAK1 = new Set(relAK1.members.filter((m) => m.type === "way").map((m) => m.ref));
  const ak1Inteiros = relAK1.members.filter((m) => m.type === "way" && m.geometry?.length > 1 && m.geometry.every(Boolean)).map((m) => ({ id: m.ref, coords: m.geometry.map((g) => [g.lon, g.lat]) }));
  const TC = waysDaRel(D4, 16204311);
  const idsTC = new Set(TC.rel.members.filter((m) => m.type === "way").map((m) => m.ref));
  const soltosAK1 = waysSoltos(D4);
  const tagsElo = new Map(soltosAK1.map((w) => [w.id, w.tags]));
  const vistosE = new Set();
  const waysElo = [...soltosAK1, ...ak1Inteiros, ...TC.ways].filter((w) => !vistosE.has(w.id) && vistosE.add(w.id));
  const GE = grafo(waysElo);
  const GLN = REF["Glennallen (GNIS 1402643)"];
  const glennCam = out["glenn-highway"].caminho;
  const pontaGlenn = [glennCam[0], glennCam.at(-1)].sort((a, b) => km(a, GLN) - km(b, GLN))[0];
  const iniE = maisPerto(GE, pontaGlenn);
  if (iniE.km > 0.005) throw new Error(`estrada-glennallen-tok: a ponta da Glenn não é vértice do grafo da AK-1 (${iniE.km.toFixed(3)} km)`);
  const comunsE = nosComuns(GE, GAH);
  if (!comunsE.length) throw new Error("estrada-glennallen-tok: nenhum nó em comum com a Alaska Highway");
  let melhorE = null;
  for (const k of comunsE) { const c = caminhoMaisCurto(GE, iniE.k, k); if (c && (!melhorE || c.km < melhorE.km)) melhorE = { k, km: c.km }; }
  if (!melhorE) throw new Error("estrada-glennallen-tok: a ponta da Glenn não se liga à Alaska Highway no grafo");
  const cE = caminhoMaisCurto(GE, iniE.k, melhorE.k);
  // os trechos, na ordem, pelo nome dos ways (e a quem cada way pertence)
  const trechosE = [];
  for (const id of cE.ways) {
    const t = tagsElo.get(id) || {};
    const nome = t.name || (idsTC.has(id) ? "Tok Cut-Off (relation)" : "?");
    const ult = trechosE.at(-1);
    if (ult && ult.name === nome) ult.ways++; else trechosE.push({ name: nome, ref: t.ref || null, ways: 1 });
  }
  // o km de cada trecho, pelo caminho (vértice a vértice, com o way de cada aresta)
  { const Gw = new Map(); for (const w of waysElo) for (let i = 1; i < w.coords.length; i++) { Gw.set(`${chave(w.coords[i - 1])}|${chave(w.coords[i])}`, w.id); Gw.set(`${chave(w.coords[i])}|${chave(w.coords[i - 1])}`, w.id); }
    let idx = -1, nomeAtual = null;
    for (let i = 1; i < cE.caminho.length; i++) {
      const id = Gw.get(`${chave(cE.caminho[i - 1])}|${chave(cE.caminho[i])}`);
      const t = tagsElo.get(id) || {}; const nome = t.name || (idsTC.has(id) ? "Tok Cut-Off (relation)" : "?");
      if (nome !== nomeAtual) { idx++; nomeAtual = nome; if (!trechosE[idx]) trechosE[idx] = { name: nome, ref: t.ref || null, ways: 0 }; trechosE[idx].km = 0; trechosE[idx].de = cE.caminho[i - 1].map((v) => +v.toFixed(6)); }
      trechosE[idx].km += km(cE.caminho[i - 1], cE.caminho[i]); trechosE[idx].ate = cE.caminho[i].map((v) => +v.toFixed(6));
    }
    for (const t of trechosE) { t.km = +t.km.toFixed(2); t.mi = +(t.km / 1.609344).toFixed(1); t.de_mais_perto = nomear(t.de); t.ate_mais_perto = nomear(t.ate); } }
  const foraE = cE.ways.filter((id) => !idsAK1.has(id) && !idsTC.has(id));
  out["estrada-glennallen-tok"] = rota({ G: GE, ini: iniE.k, fim: melhorE.k, relTags: null, relId: null,
    nome: "Alaska Route 1 from Glennallen to Tok (Richardson Highway and Tok Cut-Off)", pt: "", tol: 0.0003, cena: "s10", slug: "estrada-glennallen-tok",
    extra: { osm_fontes: "relation/326212 (Alaska Route 1), relation/16204311 (Tok Cut-Off, from=Tok, to=Gulkana) e os ways com ref AK 1 da janela de Glennallen a Tok",
      inicio: `o vértice em que a glenn-highway.json acaba (o mesmo nó do OSM; ${iniE.km.toFixed(3)} km), em Glennallen`,
      fim: "o nó que a AK-1 divide com a Alaska Highway (relation/326897), em Tok: o mais perto de Glennallen pela estrada",
      nos_em_comum_com_a_alaska_highway: comunsE.length, trechos: trechosE,
      ways_no_caminho_fora_das_relations: foraE.map((id) => { const t = tagsElo.get(id) || {}; return { way: `way/${id}`, name: t.name || null, ref: t.ref || null, highway: t.highway || null }; }),
      fonte_diz: "o dossiê só diz \"a Glenn Highway ligando Anchorage à rede nacional\" (fundamento.json, mec-15.6); o pedido do espelho (s10) é \"de Anchorage até a ligação com a Alaska Highway\"",
      nota: "com glenn-highway.json, faz o caminho de Anchorage até a Alaska Highway. Os nomes dos trechos são os do OSM (a AK-1 corre junto com a AK-4 pela Richardson Highway até Gakona Junction, e segue pelo Tok Cut-Off). O traçado é o de hoje; a tela não o rotula como o da década de 1940" } });
  return out;
}

// ---------- CLI ----------
const MAPA_DUMP = { "alaska-highway": ["osm-alaska-highway", "osm-remendos", "osm-remendos-tok-delta"], "alaska-highway-ligacao-continente": ["osm-alaska-highway", "osm-remendos", "osm-remendos-tok-delta"], "glenn-highway": ["osm-glenn-parks-haines", "osm-remendos"], "haines-highway": ["osm-glenn-parks-haines", "osm-alaska-highway"],
  "klondike-highway": ["osm-klondike", "osm-alaska-highway"], "alaska-highway-trecho-yukon": ["osm-alaska-highway", "osm-remendos", "osm-remendos-tok-delta", "osm-glenn-parks-haines", "osm-klondike"], "estrada-anchorage-willow": ["osm-glenn-parks-haines", "osm-remendos"], "haines-junction-osm": ["osm-glenn-parks-haines"],
  "estrada-glennallen-tok": ["osm-ak1-tok", "osm-glenn-parks-haines", "osm-remendos", "osm-alaska-highway", "osm-remendos-tok-delta"] };
if (ACAO === "baixar") {
  const nomes = QUAL === "todos" ? Object.keys(CONSULTAS) : [QUAL];
  for (const [i, n] of nomes.entries()) { if (!CONSULTAS[n]) { console.error(`uso: baixar <${Object.keys(CONSULTAS).join("|")}|todos>`); process.exit(2); } if (i) await new Promise((r) => setTimeout(r, 20000)); await baixar(n); }
} else if (ACAO === "conferir" || ACAO === "gravar") {
  const todos = montar();
  const nomes = QUAL === "todos" ? Object.keys(todos) : [QUAL];
  const tab = [];
  for (const n of nomes) {
    const it = todos[n]; if (!it) { console.error(`item desconhecido: ${n}`); process.exit(2); }
    const v = validarFC(it.fc);
    const p = it.fc.features[0].properties;
    tab.push({ slug: n, features: v.features, bbox: v.bbox, kb: Math.round(JSON.stringify(it.fc).length / 1024), km: p.km_caminho_completo ?? null, mi: p.mi_caminho_completo ?? null,
      vertices: p.vertices ?? null, extremo_a: p.extremo_a || null, extremo_b: p.extremo_b || null, prova: p.prova || null, a_km_do_encontro: p.a_km_do_encontro_haines_alaska_highway ?? null });
    if (ACAO === "gravar") {
      const origem = it.ne
        ? { fonte: "Natural Earth — ne_10m_populated_places_simple (ne_id 1159143727, Dawson Creek)", licenca: "Domínio público (Natural Earth) — sem crédito obrigatório; citável como fonte", url: "https://www.naturalearthdata.com/about/terms-of-use/", exige_credito: false,
            derivado_por: "out/juneau/_pesquisa/geo-osm-rodovias.mjs gravar alaska-highway-ligacao-continente (ponto do NE; a ponta sul da relation/326897 do OSM é a prova, não a geometria)" }
        : it.osmNode
          ? { fonte: `OpenStreetMap via Overpass API — node/${it.osmNode}`, licenca: LIC, url: `https://www.openstreetmap.org/node/${it.osmNode}`, exige_credito: true, derivado_por: `out/juneau/_pesquisa/geo-osm-rodovias.mjs gravar ${n}` }
          : { fonte: `OpenStreetMap via Overpass API — ${it.relId ? `relation/${it.relId}` : p.osm_fontes}`, licenca: LIC, url: it.relId ? `https://www.openstreetmap.org/relation/${it.relId}` : "https://www.openstreetmap.org/copyright", exige_credito: true,
              derivado_por: `out/juneau/_pesquisa/geo-osm-rodovias.mjs gravar ${n} (dumps ${MAPA_DUMP[n].join(", ")} em out/juneau/_tmp/geo-fontes/; caminho mais curto no grafo dos ways; Douglas–Peucker ${p.tol_dp_graus}°; derivarRota --tol=0)` };
      const g = gravarGeo({ slug: n, fc: it.fc, proj: "juneau", cena: it.cena, origem });
      console.error(`✓ ${n}\n${relatarGravacao(g)}`);
    }
  }
  console.log(JSON.stringify(tab, null, 1));
} else {
  console.error("uso: node out/juneau/_pesquisa/geo-osm-rodovias.mjs baixar|conferir|gravar <item|todos>");
  process.exit(2);
}
