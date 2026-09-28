#!/usr/bin/env node
// O FIM DA THANE ROAD, DO OPENSTREETMAP (pesquisa-geo, 28/09/2026): s44, o ponto de partida do esquema do Taku.
//
// Uso (cwd = a raiz do canal; a rede é só no "baixar": UM pedido ao Overpass, com o User-Agent do canal):
//   node out/juneau/_pesquisa/geo-thane-road-fim.mjs baixar     (guarda a resposta em out/juneau/_tmp/geo-fontes/osm-thane-road.json)
//   node out/juneau/_pesquisa/geo-thane-road-fim.mjs conferir   (sem rede: decide a ponta, mede e imprime; não grava;
//                                                                 --fc imprime também a FeatureCollection que o gravar escreve)
//   node out/juneau/_pesquisa/geo-thane-road-fim.mjs gravar     (sem rede: confere de novo e grava pelo gravarGeo da pré-v1)
// Overpass: 504 é sobrecarga (espere uns minutos e rode o "baixar" de novo, uma vez); 403, 429, verificação de robô ou
// resposta que não é JSON é recusa, e recusa não se contorna: pare e diga no relato.
//
// O PEDIDO (espelho.json › s44 › needs.geo "thane-road-fim" e _esquema.taku.parte_de, pedido da direção de arte de
// 28/09): o ponto de onde o FSEIS 2018 faz sair a alternativa do Taku, "This alternative would construct a
// 118-mile-long highway from the end of Thane Road in Juneau, northeast along the Taku Inlet, across the Alaska-Canada
// border, up the Taku River Valley, ..." (FSEIS 2018, p. 2-2, §2.2.1; midia/juneau/fontes/triagem/fseis.txt:3665-3668).
// É o ponto de partida real do esquema tracejado do corredor do Taku (identidade §6, "Rota que nunca foi construída").
//
// A FONTE, pela ordem da roupa (§3): o Natural Earth não tem estrada com nome nem ponta de estrada. O GNIS
// (DomesticNames_AK, o arquivo que o geo-gnis-juneau.mjs baixou, lido aqui do disco, sem rede) não tem nenhuma classe
// de estrada; tem a vila de Thane (1410784), que aqui só confere o caminho. Então o ponto é a ponta da via com
// name=Thane Road no OpenStreetMap (ODbL: "© OpenStreetMap contributors" na tela, openstreetmap.org/copyright na
// descrição). Um nó do OSM, sem nenhuma coordenada mexida.
//
// QUAL PONTA: as ways com name=Thane Road viram um grafo (vértice = nó do OSM, porque o OSM liga ways por nó
// compartilhado). As duas pontas da via são as da varredura dupla (a mais longe, pela estrada, de um vértice qualquer,
// e a mais longe dela). A mais perto do ponto de Juneau do NE (cidades-ne) é a do centro; a outra é o fim. O script
// para se a geometria não confirmar isso: o fim tem de ficar a sudeste da ponta do centro (a via sai do centro para o
// sudeste, ao longo do Gastineau Channel), bem mais longe do ponto de Juneau, sem outra via de carro no nó (é o fim da
// estrada), e a vila de Thane do GNIS tem de ficar junto da via, entre as duas pontas.
//
// TERRA OU ÁGUA: (1) a linha de costa do OSM (natural=coastline) em volta da Thane Road, que vem no mesmo pedido. No
// OSM a costa se desenha com a terra à esquerda do sentido do way. O teste é conferido nos controles: todos os vértices
// da própria via (terra, menos ponte) e o ponto do Gastineau Channel no GNIS (1402497, água). (2) O NE 1:10M
// (panhandle-juneau), como nos outros pontos do canal: se ali o ponto cair na água, o deslocamento fica declarado.
//
// DISTÂNCIAS: geodésicas (Vincenty inverso, WGS84); a da estrada é a soma das arestas do caminho no grafo.
//
// Resultado de 28/09/2026 (Overpass respondeu na primeira; osm_base 2026-09-28T06:30:51Z; resposta sha256 9dabbed4e3c4…):
// 4 ways com name=Thane Road, um trecho só, 115 nós, 2 pontas. Fim = node/5691733230 (highway=turning_circle), na
// way/653314254: 58.2454469, -134.2958702. Dele só sai a Dupont Trail (highway=path). A 8,92 km (5,5 mi) do ponto de
// Juneau do NE, a 7,87 km (4,9 mi) pela via desde a ponta do centro (node/3266711489, onde a via continua como South
// Franklin Street, AK 7), azimute 132,2°. Terra pela costa do OSM, a 62 m (controles: o Gastineau Channel do GNIS deu
// água; os 115 nós da via deram terra). Terra também no NE 1:10M, a 154 m da costa simplificada. O Natural Earth não
// tem estrada a menos de 128,6 km dali. Gravado como _media/geo/thane-road-fim.json (pauta: s44).
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const { gravarGeo, relatarGravacao, validarFC } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const { lerConfigCanal } = await import("file:///C:/projetos/regie-v1/src/midia/canal.mjs");

const PASTA_FONTES = "out/juneau/_tmp/geo-fontes";
const DUMP = `${PASTA_FONTES}/osm-thane-road.json`;
const GNIS_TXT = `${PASTA_FONTES}/gnis-ak/Text/DomesticNames_AK.txt`;
const GNIS_SHA = "4ff9df033d78734d31b02773cf605b852fb5c815e0aebb977d8a911d9b761bd9"; // o mesmo do geo-gnis-juneau.mjs
const FSEIS_TXT = "midia/juneau/fontes/triagem/fseis.txt";
const GEO = "out/juneau/_media/geo";
const LIC = "ODbL 1.0 — exige atribuição © OpenStreetMap contributors";
const SLUG = "thane-road-fim";
const JANELA = "58.15,-134.50,58.35,-134.10"; // do centro de Juneau a Bishop Point (sul, oeste, norte, leste)
// Um pedido só: (1) as ways com nome começando por "Thane" na janela (o script usa só name=Thane Road e lista as
// outras); (2) os nós com etiqueta dessas ways; (3) as outras ways com highway que tocam algum nó delas (o que se liga
// a cada ponta); (4) a costa do OSM a até 1,5 km da via.
const CONSULTA = "[out:json][timeout:90];" +
  `way[highway][name~"^Thane",i](${JANELA})->.t;.t out geom;` +
  "node(w.t)->.n;node.n(if:count_tags()>0);out;" +
  "way(bn.n)[highway]->.v;(.v; - .t;);out geom;" +
  "way[natural=coastline](around.t:1500);out geom;";
const FSEIS = {
  trecho: "This alternative would construct a 118-mile-long highway from the end of Thane Road in Juneau, northeast along the Taku Inlet, across the Alaska-Canada border, up the Taku River Valley, along the Sloko and Pike River Valleys, and connecting to Canadian Highway 7 south of Atlin, British Columbia (B.C.) (Figure 2-1; all Chapter 2 figures are at the end of the chapter).",
  onde: "FSEIS 2018 (Juneau Access Improvements Project Final SEIS), p. 2-2, §2.2.1 Taku River Valley Highway; midia/juneau/fontes/triagem/fseis.txt:3665-3668 (o rodapé \"2-2\" da página está na linha 3696)",
  nota: "a Figure 2-1 é do estudo, feito para o Estado: não se decalca (midia.md §7.1; identidade §6). O esquema sai deste texto",
};
const hoje = new Date().toISOString().slice(0, 10);
const sha256 = (s) => createHash("sha256").update(s).digest("hex");

// ---------- geodésia ----------
const RAD = Math.PI / 180;
/** Vincenty inverso no WGS84, em km. Pontos [lon, lat]. */
function vincenty([lon1, lat1], [lon2, lat2]) {
  const a = 6378137, f = 1 / 298.257223563, b = a * (1 - f);
  const L = (lon2 - lon1) * RAD;
  const U1 = Math.atan((1 - f) * Math.tan(lat1 * RAD)), U2 = Math.atan((1 - f) * Math.tan(lat2 * RAD));
  const sU1 = Math.sin(U1), cU1 = Math.cos(U1), sU2 = Math.sin(U2), cU2 = Math.cos(U2);
  let lam = L, lamAnt, it = 0, sS, cS, sig, c2a, c2m;
  do {
    const sl = Math.sin(lam), cl = Math.cos(lam);
    sS = Math.sqrt((cU2 * sl) ** 2 + (cU1 * sU2 - sU1 * cU2 * cl) ** 2);
    if (sS === 0) return 0;
    cS = sU1 * sU2 + cU1 * cU2 * cl;
    sig = Math.atan2(sS, cS);
    const sa = (cU1 * cU2 * sl) / sS;
    c2a = 1 - sa * sa;
    c2m = c2a ? cS - (2 * sU1 * sU2) / c2a : 0;
    const C = (f / 16) * c2a * (4 + f * (4 - 3 * c2a));
    lamAnt = lam;
    lam = L + (1 - C) * f * sa * (sig + C * sS * (c2m + C * cS * (-1 + 2 * c2m * c2m)));
  } while (Math.abs(lam - lamAnt) > 1e-12 && ++it < 200);
  const u2 = (c2a * (a * a - b * b)) / (b * b);
  const A = 1 + (u2 / 16384) * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)));
  const B = (u2 / 1024) * (256 + u2 * (-128 + u2 * (74 - 47 * u2)));
  const dS = B * sS * (c2m + (B / 4) * (cS * (-1 + 2 * c2m * c2m) - (B / 6) * c2m * (-3 + 4 * sS * sS) * (-3 + 4 * c2m * c2m)));
  return (b * A * (sig - dS)) / 1000;
}
/** Azimute inicial, em graus (0 = norte, 90 = leste). */
function azimute([lon1, lat1], [lon2, lat2]) {
  const y = Math.sin((lon2 - lon1) * RAD) * Math.cos(lat2 * RAD);
  const x = Math.cos(lat1 * RAD) * Math.sin(lat2 * RAD) - Math.sin(lat1 * RAD) * Math.cos(lat2 * RAD) * Math.cos((lon2 - lon1) * RAD);
  return ((Math.atan2(y, x) / RAD) + 360) % 360;
}
const mi = (km) => km / 1.609344;
const r2 = (v) => +v.toFixed(2), r1 = (v) => +v.toFixed(1);
const br = (v) => String(v).replace(".", ","); // número no texto em português

// ---------- terra ou água ----------
/** Projeção local em metros em volta de p (a mesma do cidades-ne.mjs). */
const projecao = ([lon0, lat0]) => { const kx = 111320 * Math.cos(lat0 * RAD), ky = 110540; return ([x, y]) => [(x - lon0) * kx, (y - lat0) * ky]; };
const cruz = (a, b, p) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]); // > 0: p à esquerda de a→b

/**
 * Terra ou água pela costa do OSM (terra à esquerda do sentido do way). O segmento mais perto decide; se o ponto mais
 * perto é um vértice, entram o segmento que chega e o que sai dele (de qualquer way da costa, pelo id do nó): num giro à
 * esquerda a terra é a cunha menor (à esquerda dos dois), num giro à direita, a maior (à esquerda de um deles).
 */
function ladoDaCosta(p, segs) {
  const m = projecao(p), P = [0, 0];
  let melhor = null;
  for (const s of segs) {
    const a = m(s.a), b = m(s.b), dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy;
    let t = L2 ? -(a[0] * dx + a[1] * dy) / L2 : 0; t = Math.max(0, Math.min(1, t));
    const d = Math.hypot(a[0] + t * dx, a[1] + t * dy);
    if (!melhor || d < melhor.d) melhor = { d, t, s, a, b };
  }
  if (!melhor) return null;
  const { d, t, s, a, b } = melhor;
  let terra, como;
  if (t > 1e-9 && t < 1 - 1e-9) { terra = cruz(a, b, P) > 0; como = "segmento"; }
  else {
    const no = t <= 1e-9 ? s.na : s.nb;
    const entra = segs.find((x) => x.nb === no), sai = segs.find((x) => x.na === no);
    if (entra && sai) {
      const e1 = cruz(m(entra.a), m(entra.b), P) > 0, e2 = cruz(m(sai.a), m(sai.b), P) > 0;
      const giro = cruz(m(entra.a), m(entra.b), m(sai.b));
      terra = giro > 0 ? e1 && e2 : e1 || e2; como = `vértice node/${no} (giro à ${giro > 0 ? "esquerda" : "direita"})`;
    } else { const x = entra || sai; terra = cruz(m(x.a), m(x.b), P) > 0; como = `ponta solta da costa, node/${no}`; }
  }
  return { terra, distancia_m: Math.round(d), way: s.way, como };
}

// Natural Earth 1:10M (as funções do cidades-ne.mjs, sem importá-lo: ele roda ao ser importado)
const dentroAnel = ([x, y], anel) => { let d = false; for (let i = 0, j = anel.length - 1; i < anel.length; j = i++) { const [xi, yi] = anel[i], [xj, yj] = anel[j]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) d = !d; } return d; };
const poligonos = (g) => (g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : []);
const dentroPoly = (p, poly) => dentroAnel(p, poly[0]) && !poly.slice(1).some((h) => dentroAnel(p, h));
function noNE(p, fc) {
  const m = projecao(p);
  let pais = null, borda = Infinity;
  for (const f of fc.features) for (const poly of poligonos(f.geometry)) {
    if (!pais && dentroPoly(p, poly)) pais = f.properties.ADMIN || f.properties.NAME || "terra";
    for (const anel of poly) for (let i = 1; i < anel.length; i++) {
      const a = m(anel[i - 1]), b = m(anel[i]), dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy;
      let t = L2 ? -(a[0] * dx + a[1] * dy) / L2 : 0; t = Math.max(0, Math.min(1, t));
      borda = Math.min(borda, Math.hypot(a[0] + t * dx, a[1] + t * dy));
    }
  }
  return { resultado: pais ? "terra" : "água", pais, distancia_ate_a_costa_ou_borda_m: Math.round(borda) };
}

// ---------- baixar (a única rede) ----------
async function baixar() {
  const { ua } = lerConfigCanal(); // o User-Agent do canal, com o contato do dono (canal.json)
  const r = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST", headers: { "User-Agent": ua, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ data: CONSULTA }).toString(), signal: AbortSignal.timeout(150000),
  }).catch((e) => ({ ok: false, status: `rede: ${e.message}` }));
  if (!r.ok) {
    const recusa = r.status === 403 || r.status === 429;
    console.error(`✗ Overpass: HTTP ${r.status}. ${recusa ? "É recusa: pare aqui e diga no relato (não se contorna)." : "Sobrecarga ou rede: espere uns minutos e rode o baixar de novo, uma vez."}`);
    process.exit(1);
  }
  const t = await r.text();
  let j;
  try { j = JSON.parse(t); } catch { console.error("✗ a resposta do Overpass não é JSON (página de erro ou de verificação?): pare e diga no relato."); process.exit(1); }
  if (j.remark && /error|timed? ?out/i.test(j.remark)) { console.error(`✗ o Overpass respondeu com erro ("${j.remark}"): a resposta pode estar pela metade e não foi guardada.`); process.exit(1); }
  if (!j.elements?.length) { console.error("✗ o Overpass devolveu vazio: nada foi guardado."); process.exit(1); }
  mkdirSync(PASTA_FONTES, { recursive: true });
  writeFileSync(DUMP, t);
  console.error(`✓ ${j.elements.length} elementos, ${(t.length / 1024).toFixed(0)} KB → ${DUMP} (osm_base ${j.osm3s?.timestamp_osm_base || "?"}; sha256 ${sha256(t).slice(0, 12)}…)`);
}

// ---------- montar e conferir (sem rede) ----------
const CARRO = /^(motorway|trunk|primary|secondary|tertiary|unclassified|residential|living_street|service|road)(_link)?$/;

function montar() {
  if (!existsSync(DUMP)) throw new Error(`falta ${DUMP}: rode o "baixar" antes`);
  const bruto = readFileSync(DUMP, "utf8");
  const shaDump = sha256(bruto);
  const J = JSON.parse(bruto);
  const ways = J.elements.filter((e) => e.type === "way");
  const nosComTag = new Map(J.elements.filter((e) => e.type === "node").map((n) => [n.id, n]));
  const thane = ways.filter((w) => w.tags?.highway && w.tags?.name === "Thane Road");
  const outrosThane = ways.filter((w) => w.tags?.highway && /^thane/i.test(w.tags?.name || "") && w.tags.name !== "Thane Road");
  const vizinhos = ways.filter((w) => w.tags?.highway && !/^thane/i.test(w.tags?.name || ""));
  const costa = ways.filter((w) => w.tags?.natural === "coastline");
  if (!thane.length) throw new Error("nenhuma way com name=Thane Road na resposta");
  if (!costa.length) throw new Error("a resposta não trouxe a costa do OSM (natural=coastline): o teste de terra não se faz");

  // o grafo da via (vértice = nó do OSM)
  const coord = new Map(), adj = new Map();
  const liga = (a, b, d, w) => { if (!adj.has(a)) adj.set(a, []); adj.get(a).push([b, d, w]); };
  for (const w of thane) {
    if (!w.nodes || !w.geometry || w.nodes.length !== w.geometry.length) throw new Error(`way/${w.id}: sem a lista de nós ou a geometria`);
    w.nodes.forEach((id, i) => {
      const c = [w.geometry[i].lon, w.geometry[i].lat];
      if (coord.has(id) && (coord.get(id)[0] !== c[0] || coord.get(id)[1] !== c[1])) throw new Error(`node/${id} com duas coordenadas`);
      coord.set(id, c);
      if (i) { const a = w.nodes[i - 1], d = vincenty(coord.get(a), c); liga(a, id, d, w.id); liga(id, a, d, w.id); }
    });
  }
  // componentes
  const comp = new Map(); let nComp = 0;
  for (const id of coord.keys()) {
    if (comp.has(id)) continue; nComp++;
    const pilha = [id]; comp.set(id, nComp);
    while (pilha.length) { const u = pilha.pop(); for (const [v] of adj.get(u) || []) if (!comp.has(v)) { comp.set(v, nComp); pilha.push(v); } }
  }
  const dijkstra = (ini) => {
    const dist = new Map([[ini, 0]]), prev = new Map(), feito = new Set();
    for (;;) {
      let u = null, du = Infinity;
      for (const [n, d] of dist) if (!feito.has(n) && d < du) { du = d; u = n; }
      if (u === null) break; feito.add(u);
      for (const [v, d, w] of adj.get(u) || []) { const nd = du + d; if (nd < (dist.get(v) ?? Infinity)) { dist.set(v, nd); prev.set(v, [u, w]); } }
    }
    return { dist, prev };
  };
  const maisLonge = (dist) => [...dist].reduce((a, b) => (b[1] > a[1] ? b : a));
  const grau = (id) => new Set((adj.get(id) || []).map(([v]) => v)).size;
  const pontasSoltas = [...coord.keys()].filter((id) => grau(id) === 1);

  const JUNEAU = JSON.parse(readFileSync(`${GEO}/cidades-ne.json`, "utf8")).features.find((f) => f.properties.name === "Juneau").geometry.coordinates;
  // varredura dupla no maior componente (o do centro de Juneau)
  const pertoDeJuneau = [...coord.keys()].reduce((a, b) => (vincenty(coord.get(b), JUNEAU) < vincenty(coord.get(a), JUNEAU) ? b : a));
  const [A] = maisLonge(dijkstra(pertoDeJuneau).dist);
  const dA = dijkstra(A);
  const [B, kmAB] = maisLonge(dA.dist);
  const [centro, fim] = vincenty(coord.get(A), JUNEAU) <= vincenty(coord.get(B), JUNEAU) ? [A, B] : [B, A];
  const Pc = coord.get(centro), Pf = coord.get(fim);
  const dCentro = dijkstra(centro);
  const kmEstrada = dCentro.dist.get(fim);
  // o caminho do centro ao fim, e as ways dele
  const caminho = []; const waysCaminho = [];
  for (let c = fim; c !== undefined;) { caminho.unshift(c); const pv = dCentro.prev.get(c); if (!pv) break; if (waysCaminho[0] !== pv[1]) waysCaminho.unshift(pv[1]); c = pv[0]; }
  const wayDoFim = thane.find((w) => w.nodes[0] === fim || w.nodes.at(-1) === fim);

  // o que toca cada ponta
  const tocam = (id) => vizinhos.filter((w) => w.nodes?.includes(id)).map((w) => ({ way: `way/${w.id}`, highway: w.tags.highway, name: w.tags.name || null, ref: w.tags.ref || null }));
  const tocaFim = tocam(fim), tocaCentro = tocam(centro);
  const carroNoFim = tocaFim.filter((x) => CARRO.test(x.highway));

  // a vila de Thane e o Gastineau Channel, do GNIS (do disco)
  const txt = readFileSync(GNIS_TXT, "utf8");
  if (sha256(txt) !== GNIS_SHA) throw new Error(`${GNIS_TXT} mudou (sha256 diferente do geo-gnis-juneau.mjs)`);
  const gnis = (id) => { const l = txt.split(/\r?\n/).find((x) => x.startsWith(`${id}|`)); if (!l) throw new Error(`GNIS ${id} não está no arquivo`); const c = l.split("|"); return { id, nome: c[1], classe: c[2], condado: c[5], p: [+c[16], +c[15]] }; };
  const vila = gnis(1410784), canal = gnis(1402497);
  if (vila.nome !== "Thane" || canal.nome !== "Gastineau Channel") throw new Error("os pontos de controle do GNIS não são os esperados");
  const classesGnis = new Set(txt.split(/\r?\n/).slice(1).map((l) => l.split("|")[2]).filter(Boolean));
  const gnisTemEstrada = [...classesGnis].some((c) => /road|street|highway|trail/i.test(c));
  const vilaVertice = [...coord.keys()].reduce((a, b) => (vincenty(coord.get(b), vila.p) < vincenty(coord.get(a), vila.p) ? b : a));
  const vilaNaVia = { km_ate_a_via: r2(vincenty(coord.get(vilaVertice), vila.p)), km_do_centro_pela_via: r2(dCentro.dist.get(vilaVertice)), km_ate_o_fim_pela_via: r2(kmEstrada - dCentro.dist.get(vilaVertice)) };

  // terra ou água
  const segs = [];
  for (const w of costa) for (let i = 1; i < w.nodes.length; i++) segs.push({ way: w.id, na: w.nodes[i - 1], nb: w.nodes[i], a: [w.geometry[i - 1].lon, w.geometry[i - 1].lat], b: [w.geometry[i].lon, w.geometry[i].lat] });
  const costaFim = ladoDaCosta(Pf, segs), costaCentro = ladoDaCosta(Pc, segs), costaCanal = ladoDaCosta(canal.p, segs);
  const pontes = new Set(thane.filter((w) => w.tags.bridge && w.tags.bridge !== "no").flatMap((w) => w.nodes));
  const verts = [...coord.keys()];
  const vertsAgua = verts.filter((id) => !ladoDaCosta(coord.get(id), segs).terra);
  const vertsAguaForaDePonte = vertsAgua.filter((id) => !pontes.has(id));
  const distCosta = verts.map((id) => ladoDaCosta(coord.get(id), segs).distancia_m).sort((a, b) => a - b);
  const ne = JSON.parse(readFileSync(`${GEO}/panhandle-juneau.json`, "utf8"));
  const neFim = noNE(Pf, ne);

  // FSEIS: o trecho confere no disco?
  let fseisConfere = null;
  if (existsSync(FSEIS_TXT)) {
    const l = readFileSync(FSEIS_TXT, "utf8").split(/\r?\n/).slice(3664, 3668).join(" ").replace(/\s+/g, " ");
    fseisConfere = l === FSEIS.trecho;
    if (!fseisConfere) throw new Error(`o trecho do FSEIS não está, letra a letra, em ${FSEIS_TXT}:3665-3668`);
  }

  const med = {
    fim: { node: fim, lonlat: Pf, grau: grau(fim), way: wayDoFim ? `way/${wayDoFim.id}` : null, tags_do_no: nosComTag.get(fim)?.tags || null, tocam: tocaFim },
    centro: { node: centro, lonlat: Pc, grau: grau(centro), tocam: tocaCentro, km_ate_juneau_ne: r2(vincenty(Pc, JUNEAU)) },
    km_fim_ate_juneau_ne: r2(vincenty(Pf, JUNEAU)), mi_fim_ate_juneau_ne: r1(mi(vincenty(Pf, JUNEAU))),
    km_pela_via: r2(kmEstrada), mi_pela_via: r1(mi(kmEstrada)), km_varredura: r2(kmAB),
    azimute_centro_fim: r1(azimute(Pc, Pf)),
    componentes: nComp, pontas_soltas: pontasSoltas.length, ways_thane: thane.length, ways_no_caminho: waysCaminho.length, vertices: coord.size,
    outros_thane: outrosThane.map((w) => ({ way: `way/${w.id}`, name: w.tags.name, highway: w.tags.highway })),
    vila: { ...vilaNaVia, km_do_fim: r2(vincenty(Pf, vila.p)) },
    km_fim_ate_taku_inlet_gnis: r2(vincenty(Pf, JSON.parse(readFileSync(`${GEO}/taku-inlet-gnis.json`, "utf8")).features[0].geometry.coordinates)),
    costa: { fim: costaFim, centro: costaCentro, controle_gastineau_channel: costaCanal, vertices_na_agua: vertsAgua.length, vertices_na_agua_fora_de_ponte: vertsAguaForaDePonte.length,
      mediana_vertices_m: distCosta[Math.floor(distCosta.length / 2)], max_vertices_m: distCosta.at(-1), ways_costa: costa.length },
    ne: neFim, gnis_tem_estrada: gnisTemEstrada, fseis_confere: fseisConfere,
    osm_base: J.osm3s?.timestamp_osm_base || null, sha_dump: shaDump,
  };

  // os portões desta ponta (para em qualquer um)
  const falhas = [];
  if (nComp !== 1) falhas.push(`a via tem ${nComp} pedaços soltos no OSM: a ponta não se decide sozinha`);
  if (grau(fim) !== 1) falhas.push(`o fim (node/${fim}) não é ponta solta da via (grau ${grau(fim)})`);
  if (!(med.km_fim_ate_juneau_ne > med.centro.km_ate_juneau_ne + 3)) falhas.push("o fim não fica bem mais longe do ponto de Juneau do que a ponta do centro");
  if (!(med.azimute_centro_fim > 90 && med.azimute_centro_fim < 180)) falhas.push(`o fim não fica a sudeste da ponta do centro (azimute ${med.azimute_centro_fim}°)`);
  if (carroNoFim.length) falhas.push(`há via de carro no nó do fim: ${carroNoFim.map((x) => `${x.way} ${x.highway} ${x.name || ""}`).join("; ")}`);
  if (!tocaCentro.some((x) => CARRO.test(x.highway))) falhas.push("a ponta do centro não se liga a nenhuma outra via de carro");
  if (!(vilaNaVia.km_ate_a_via < 0.5 && vilaNaVia.km_do_centro_pela_via > 0 && vilaNaVia.km_ate_o_fim_pela_via > 0)) falhas.push("a vila de Thane do GNIS não fica junto da via, entre as duas pontas");
  if (costaCanal?.terra !== false) falhas.push("controle falhou: o Gastineau Channel do GNIS não deu água pela costa do OSM");
  if (vertsAguaForaDePonte.length) falhas.push(`controle falhou: ${vertsAguaForaDePonte.length} vértice(s) da via, fora de ponte, deram água pela costa do OSM`);
  if (!costaFim?.terra) falhas.push("o fim cai na água pela costa do OSM");
  if (gnisTemEstrada) falhas.push("o GNIS tem classe de estrada: procure o ponto nele antes do OSM (roupa §3)");
  return { med, falhas, shaDump };
}

function fcDoPonto(med, shaDump) {
  const nota = med.ne.resultado === "terra"
    ? `no Natural Earth 1:10M (panhandle-juneau) também cai em terra, a ${med.ne.distancia_ate_a_costa_ou_borda_m} m da costa simplificada`
    : `no Natural Earth 1:10M (panhandle-juneau) o ponto cai na água, a ${med.ne.distancia_ate_a_costa_ou_borda_m} m da costa simplificada (a via corre junto ao mar). Sobre a base de satélite fica certo; se a cena pintar a terra com o polígono do NE, declare o deslocamento`;
  return {
    type: "FeatureCollection",
    properties: { fonte: `OpenStreetMap via Overpass API — node/${med.fim.node}, a ponta sudeste da via com name=Thane Road (${med.fim.way})`, licenca: LIC,
      url: `https://www.openstreetmap.org/node/${med.fim.node}`, obtido_em: med.osm_base?.slice(0, 10) || hoje, osm_base: med.osm_base,
      resposta: `out/juneau/_tmp/geo-fontes/osm-thane-road.json (sha256 ${shaDump.slice(0, 12)}…)` },
    features: [{
      type: "Feature",
      properties: {
        name: "End of Thane Road", name_pt: "End of Thane Road", rotulo: "",
        rotulo_nota: "sem nome na tela (espelho s44, needs.geo): se houver rótulo, quem o escreve é o redator-de-tela",
        papel: "ponto de partida do esquema tracejado do corredor do Taku (s44, _esquema.taku.parte_de)",
        osm: `node/${med.fim.node}`, osm_way: med.fim.way, osm_tags_do_no: med.fim.tags_do_no,
        origem_do_ponto: `a ponta da via com name=Thane Road no OpenStreetMap longe do centro de Juneau (${med.fim.way}, node/${med.fim.node}); a coordenada é a do nó, sem mudança`,
        origem_do_nome: "o FSEIS 2018 (\"from the end of Thane Road in Juneau\"); o OSM nomeia a via, não o ponto",
        como_se_decidiu_a_ponta: `as ${med.ways_thane} ways com name=Thane Road formam um trecho só (${med.componentes} componente, ${med.vertices} nós) com ${med.pontas_soltas} pontas soltas. A ponta perto do centro (node/${med.centro.node}) fica a ${br(med.centro.km_ate_juneau_ne)} km do ponto de Juneau do NE e continua em ${med.centro.tocam.filter((x) => CARRO.test(x.highway)).map((x) => `${x.name || x.way}${x.ref ? ` (${x.ref})` : ""}`).join(", ")}. A outra (esta) fica a ${br(med.km_fim_ate_juneau_ne)} km, a sudeste (azimute ${br(med.azimute_centro_fim)}° da ponta do centro), a ${br(med.km_pela_via)} km pela via, ao longo do Gastineau Channel (a mediana dos nós da via fica a ${med.costa.mediana_vertices_m} m da costa do OSM)${med.fim.tags_do_no?.highway === "turning_circle" ? "; o nó tem highway=turning_circle, o retorno do fim da estrada" : ""}; nenhuma outra via de carro sai dela${med.fim.tocam.length ? `, só ${med.fim.tocam.map((x) => `${x.name || x.way} (highway=${x.highway})`).join(", ")}` : ""}. A vila de Thane (GNIS 1410784) fica a ${br(med.vila.km_ate_a_via)} km da via, entre as duas pontas`,
        fonte_diz: FSEIS.trecho, fonte_onde: FSEIS.onde, fonte_nota: FSEIS.nota,
        nao_e: "não é um lugar com nome: nem o OSM nem o GNIS nomeiam o ponto (o GNIS do Alasca não tem estrada; tem a vila de Thane, 1410784). Não é o traçado da alternativa do Taku, que não existe em fonte livre: é só onde ela começa",
        conferencia: {
          a_km_de_juneau_ne: med.km_fim_ate_juneau_ne, a_mi_de_juneau_ne: med.mi_fim_ate_juneau_ne,
          pela_thane_road_desde_a_ponta_do_centro_km: med.km_pela_via, pela_thane_road_desde_a_ponta_do_centro_mi: med.mi_pela_via,
          ponta_do_centro: { osm: `node/${med.centro.node}`, lonlat: med.centro.lonlat, a_km_de_juneau_ne: med.centro.km_ate_juneau_ne, liga_se_a: med.centro.tocam },
          azimute_da_ponta_do_centro_graus: med.azimute_centro_fim,
          o_que_toca_o_fim: med.fim.tocam,
          vila_de_thane_gnis_1410784: med.vila,
          a_km_do_taku_inlet_gnis: med.km_fim_ate_taku_inlet_gnis,
          terra_pela_costa_do_osm: { resultado: med.costa.fim.terra ? "terra" : "água", a_m_da_costa: med.costa.fim.distancia_m, way_da_costa: `way/${med.costa.fim.way}`, como: med.costa.fim.como,
            regra: "no OSM a costa (natural=coastline) se desenha com a terra à esquerda do sentido do way",
            controles: { gastineau_channel_gnis_1402497: med.costa.controle_gastineau_channel.terra ? "terra (falhou)" : "água", vertices_da_via_na_agua_fora_de_ponte: med.costa.vertices_na_agua_fora_de_ponte, vertices_da_via: med.vertices } },
          na_terra_do_ne_1_10m: med.ne.resultado === "terra", ne_1_10m: med.ne,
        },
        aviso: nota,
        license: "ODbL — © OpenStreetMap contributors",
      },
      geometry: { type: "Point", coordinates: med.fim.lonlat },
    }],
  };
}

// ---------- CLI ----------
const ACAO = process.argv[2];
if (ACAO === "baixar") await baixar();
else if (ACAO === "conferir" || ACAO === "gravar") {
  const { med, falhas, shaDump } = montar();
  console.log(JSON.stringify(med, null, 1));
  if (falhas.length) { console.error(`✗ ${falhas.length} portão(ões) desta ponta falharam; nada foi gravado:\n  - ${falhas.join("\n  - ")}`); process.exit(1); }
  const fc = fcDoPonto(med, shaDump);
  const v = validarFC(fc);
  if (process.argv.includes("--fc")) console.log(JSON.stringify(fc, null, 1));
  console.error(`✓ fim da Thane Road = ${med.fim.lonlat[1]}, ${med.fim.lonlat[0]} (node/${med.fim.node}) · ${br(med.km_fim_ate_juneau_ne)} km (${br(med.mi_fim_ate_juneau_ne)} mi) do ponto de Juneau do NE · ${br(med.km_pela_via)} km (${br(med.mi_pela_via)} mi) pela via · terra pela costa do OSM, a ${med.costa.fim.distancia_m} m · NE 1:10M: ${med.ne.resultado} · bbox ${v.bbox}`);
  if (ACAO === "gravar") {
    const g = gravarGeo({ slug: SLUG, fc, proj: "juneau", cena: "s44", origem: {
      fonte: `OpenStreetMap via Overpass API — node/${med.fim.node}, a ponta sudeste da via com name=Thane Road (${med.fim.way})`,
      licenca: LIC, url: `https://www.openstreetmap.org/node/${med.fim.node}`, exige_credito: true,
      derivado_por: `out/juneau/_pesquisa/geo-thane-road-fim.mjs gravar (resposta do Overpass out/juneau/_tmp/geo-fontes/osm-thane-road.json, sha256 ${shaDump.slice(0, 12)}…; a ponta longe do centro de Juneau, pela varredura dupla no grafo das ways com name=Thane Road)` } });
    console.error(`✓ ${SLUG}\n${relatarGravacao(g)}`);
  }
} else {
  console.error("uso: node out/juneau/_pesquisa/geo-thane-road-fim.mjs baixar|conferir|gravar");
  process.exit(2);
}
