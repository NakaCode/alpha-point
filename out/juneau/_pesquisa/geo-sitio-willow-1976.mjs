#!/usr/bin/env node
// AS FEIÇÕES QUE LIMITAM O LOCAL DE WILLOW (1976) — pesquisa-geo, 27/09/2026 — s15, plano 3.
//
// POR QUE EXISTE: o local da capital de 1976 não tem coordenada nem contorno em fonte aberta (NÃO ACHADO). O folheto
// oficial de 1976 (doc-16 do dossiê; midia/juneau/fontes/documento/verif/oep76.pdf, p. 48 impressa = PDF p. 2, lida na
// imagem em 27/09/2026) delimita o local por feições com nome: Willow Creek ao norte, o Little Susitna River ao sul e a
// Alaska Railroad a oeste; a cidade ficaria junto do Deception Creek. Estas são essas feições, como as fontes abertas as
// têm. NÃO são o local: o limite leste do local só existe no mapa da p. 48 (figura do Estado, midia.md §7.1), e nada
// aqui fecha um polígono nem põe ponto "5 mi a leste". O montador decide se o plano 3 as usa (mostrar, não desenhar).
//
// FONTES, por feição:
//   Willow Creek e Little Susitna River: OpenStreetMap (ODbL), todos os ways waterway=river/stream com o nome, na janela
//     que vai da nascente à foz que o GNIS dá; costurados pelas pontas em trechos contínuos (o leito principal é o mais
//     longo; o resto são braços com o mesmo nome).
//   Deception Creek: USGS National Hydrography Dataset (NHD, domínio público), as flowlines com gnis_id 01401055. O OSM
//     só tem os 7 km de baixo do riacho (way/483131815): a nascente do GNIS ficava a 15,5 km da ponta dele.
//   Alaska Railroad: OpenStreetMap (ODbL), a linha-tronco (usage=main, "Central Subdivision" da Alaska Railroad
//     Corporation), só no trecho entre as travessias do Little Susitna e do Willow Creek (leito principal de cada um):
//     o caminho mais curto no grafo dos ways entre os dois vértices mais perto das travessias.
// A conferência de lugar (checagem 3 do contrato) é contra os pontos do GNIS (foz e nascente de cada curso; Willow e
// Houston) e fica na propriedade `conferencia` de cada feature.
//
// Crédito: "© OpenStreetMap contributors" na tela da cena e openstreetmap.org/copyright na descrição (a cena s15 já o leva
// por cidade-willow-osm e estrada-anchorage-willow). O NHD não pede crédito.
//
// Uso (de dentro de C:/projetos/alpha-point; a rede é só no "baixar"):
//   node out/juneau/_pesquisa/geo-sitio-willow-1976.mjs baixar     (Overpass e NHD; guarda em out/juneau/_tmp/geo-fontes/)
//   node out/juneau/_pesquisa/geo-sitio-willow-1976.mjs conferir   (sem rede; imprime)
//   node out/juneau/_pesquisa/geo-sitio-willow-1976.mjs gravar     (sem rede; confere e grava)
// Overpass e NHD: 504 ou tempo esgotado é sobrecarga (espere e tente de novo, espaçado); 403, 429 persistente ou
// verificação é recusa, e recusa não se contorna.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const { gravarGeo, relatarGravacao, validarFC, userAgentOSM } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");

const SLUG = "limites-sitio-willow-1976";
const PASTA = "out/juneau/_tmp/geo-fontes";
const DUMP_OSM = `${PASTA}/osm-sitio-willow.json`;
const DUMP_NHD = `${PASTA}/nhd-flowline-gnis-1401055.geojson`;
const LIC_OSM = "ODbL 1.0 — exige atribuição © OpenStreetMap contributors";
const LIC_NHD = "Domínio público (USGS National Hydrography Dataset, The National Map: \"USGS-authored or produced data and information are considered to be in the U.S. Public Domain\", usgs.gov/information-policies-and-instructions/copyrights-and-credits, lido em 27/09/2026; copyrightText do serviço: \"U.S. Geological Survey\")";
const hoje = new Date().toISOString().slice(0, 10);
const ACAO = process.argv[2];

const CONSULTA_OSM = '[out:json][timeout:180];(' +
  'way[waterway~"^(river|stream)$"][name~"^(Willow Creek|Little Susitna River|Deception Creek)$"](61.20,-150.40,61.95,-149.00);' +
  'way[railway=rail](61.55,-150.15,61.85,-149.70);' +
  ');out geom;';
const NHD_URL = "https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/6/query?" + new URLSearchParams({
  where: "gnis_id LIKE '%1401055'", outFields: "permanent_identifier,fdate,resolution,gnis_id,gnis_name,lengthkm,reachcode,ftype,fcode,mainpath,innetwork",
  returnGeometry: "true", outSR: "4326", f: "geojson" }).toString();

async function pedir(nome, fazer, arq) {
  const esperas = [0, 45000, 90000, 180000];
  for (const [n, ms] of esperas.entries()) {
    if (ms) { console.error(`  … ${nome}: nova tentativa em ${ms / 1000} s`); await new Promise((r) => setTimeout(r, ms)); }
    const r = await fazer().catch((e) => ({ ok: false, status: `rede: ${e.message}` }));
    if (r.ok) {
      const t = await r.text(); const j = JSON.parse(t);
      if (j.error) throw new Error(`${nome}: ${JSON.stringify(j.error)}`);
      if (!(j.elements?.length || j.features?.length)) throw new Error(`${nome}: resposta vazia`);
      mkdirSync(PASTA, { recursive: true }); writeFileSync(arq, t);
      console.error(`✓ ${nome}: ${(j.elements || j.features).length} elementos → ${arq}`); return;
    }
    if (r.status === 403 || r.status === 429) { console.error(`✗ ${nome}: HTTP ${r.status} — recusa; pare aqui (não se contorna).`); process.exit(1); }
    console.error(`  ✗ ${nome}: tentativa ${n + 1}: HTTP ${r.status}`);
  }
  console.error(`✗ ${nome}: não respondeu depois das tentativas espaçadas. BLOQUEIO reportado; nada desenhado.`); process.exit(1);
}
async function baixar() {
  const ua = userAgentOSM();
  await pedir("Overpass", () => fetch("https://overpass-api.de/api/interpreter", { method: "POST",
    headers: { "User-Agent": ua, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ data: CONSULTA_OSM }).toString(), signal: AbortSignal.timeout(240000) }), DUMP_OSM);
  await new Promise((r) => setTimeout(r, 5000));
  await pedir("NHD", () => fetch(NHD_URL, { headers: { "User-Agent": ua }, signal: AbortSignal.timeout(300000) }), DUMP_NHD);
}

// ---------- geometria ----------
const rad = Math.PI / 180;
const km = ([aLon, aLat], [bLon, bLat]) => {
  const dLat = (bLat - aLat) * rad, dLon = (bLon - aLon) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(aLat * rad) * Math.cos(bLat * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371.0088 * Math.asin(Math.sqrt(h));
};
const chave = (p) => `${p[0].toFixed(7)},${p[1].toFixed(7)}`;
const compr = (l) => l.slice(1).reduce((s, q, i) => s + km(l[i], q), 0);
/** Douglas–Peucker iterativo em graus, preservando as pontas */
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
/** costura pelas pontas (coordenada igual até 1e-7°) em trechos contínuos; o mais longo primeiro */
function costurar(linhas) {
  const resto = linhas.map((l) => l.slice()); const trechos = [];
  while (resto.length) {
    const t = resto.shift(); let mudou = true;
    while (mudou) {
      mudou = false;
      for (let i = 0; i < resto.length; i++) {
        const s = resto[i]; const a = chave(t[0]), b = chave(t.at(-1)), c = chave(s[0]), d = chave(s.at(-1));
        if (b === c) t.push(...s.slice(1)); else if (b === d) t.push(...s.slice(0, -1).reverse());
        else if (a === d) t.unshift(...s.slice(0, -1)); else if (a === c) t.unshift(...s.slice(1).reverse());
        else continue;
        resto.splice(i, 1); mudou = true; break;
      }
    }
    trechos.push(t);
  }
  return trechos.sort((x, y) => compr(y) - compr(x));
}
const maisPertoEm = (linhas, p) => { let m = null, dm = Infinity; for (const l of linhas) for (const q of l) { const d = km(p, q); if (d < dm) { dm = d; m = q; } } return { ponto: m, km: dm }; };
/** interseção de dois segmentos no plano lon/lat (poucos km: basta para achar a travessia) */
function cruza([p1, p2], [p3, p4]) {
  const d = (p2[0] - p1[0]) * (p4[1] - p3[1]) - (p2[1] - p1[1]) * (p4[0] - p3[0]);
  if (!d) return null;
  const t = ((p3[0] - p1[0]) * (p4[1] - p3[1]) - (p3[1] - p1[1]) * (p4[0] - p3[0])) / d;
  const u = ((p3[0] - p1[0]) * (p2[1] - p1[1]) - (p3[1] - p1[1]) * (p2[0] - p1[0])) / d;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1 ? [p1[0] + t * (p2[0] - p1[0]), p1[1] + t * (p2[1] - p1[1])] : null;
}
const travessias = (linhasA, linhasB) => { const out = []; for (const a of linhasA) for (let i = 1; i < a.length; i++) for (const b of linhasB) for (let j = 1; j < b.length; j++) { const x = cruza([a[i - 1], a[i]], [b[j - 1], b[j]]); if (x) out.push(x); } return out; };
function grafo(ways) {
  const pts = new Map(), adj = new Map();
  const liga = (a, b, d) => { if (!adj.has(a)) adj.set(a, []); adj.get(a).push([b, d]); };
  for (const w of ways) for (let i = 1; i < w.length; i++) { const p = w[i], q = w[i - 1], kp = chave(p), kq = chave(q); pts.set(kp, p); pts.set(kq, q); const d = km(p, q); liga(kp, kq, d); liga(kq, kp, d); }
  return { pts, adj };
}
function caminho(G, ini, fim) {
  const dist = new Map([[ini, 0]]), prev = new Map(), feito = new Set(); const fila = [[0, ini]];
  while (fila.length) {
    fila.sort((a, b) => a[0] - b[0]); const [du, u] = fila.shift();
    if (feito.has(u)) continue; feito.add(u); if (u === fim) break;
    for (const [v, d] of G.adj.get(u) || []) { const nd = du + d; if (nd < (dist.get(v) ?? Infinity)) { dist.set(v, nd); prev.set(v, u); fila.push([nd, v]); } }
  }
  if (!feito.has(fim)) return null;
  const c = []; let k = fim; while (k) { c.unshift(G.pts.get(k)); k = prev.get(k); }
  return { caminho: c, km: dist.get(fim) };
}
const arred = (l) => l.map(([x, y]) => [+x.toFixed(6), +y.toFixed(6)]);

// ---------- referências (GNIS, DomesticNames_AK de 28/08/2026, sha256 4ff9df033d78…; e os pontos já gravados) ----------
const GNIS = {
  "Willow Creek": { id: "1412108", foz: [-150.16, 61.7825], nascente: [-149.3197222, 61.7652778] },
  "Little Susitna River": { id: "1405547", foz: [-150.2880556, 61.2508333], nascente: [-149.0633333, 61.8586111] },
  "Deception Creek": { id: "1401055", foz: [-150.0413889, 61.7647222], nascente: [-149.6586111, 61.6980556] },
};
const WILLOW_GNIS = [-150.0375, 61.7472222], HOUSTON_GNIS = [-149.8180556, 61.6302778];
const ler = (s) => JSON.parse(readFileSync(`out/juneau/_media/geo/${s}.json`, "utf8"));
const WILLOW_OSM = ler("cidade-willow-osm").features.find((f) => f.geometry.type === "Point").geometry.coordinates;
const ANCHORAGE_NE = ler("cidades-ne").features.find((f) => f.properties.rotulo === "Anchorage").geometry.coordinates;
const PAPEL = {
  "Willow Creek": "limite norte do local de Willow (folheto oficial de 1976, p. 48: \"bounded by Willow Creek to the north\")",
  "Little Susitna River": "limite sul do local de Willow (folheto de 1976, p. 48: \"the Little Susitna River to the south\")",
  "Deception Creek": "o riacho junto do qual a cidade ficaria (folheto de 1976, p. 48: \"adjacent to the Deception Creek\")",
  ferrovia: "limite oeste do local de Willow (folheto de 1976, p. 48: \"the Alaska Railroad to the west\"): só o trecho entre as travessias do Little Susitna e do Willow Creek",
};
const NAO_E_RIO = "não é o contorno do local de 1976: é a feição que o texto do folheto nomeia; o limite leste do local só existe no mapa da p. 48 (figura do Estado, midia.md §7.1)";

function conferirRio(nome, trechos) {
  const g = GNIS[nome];
  const foz = maisPertoEm(trechos, g.foz), nasc = maisPertoEm(trechos, g.nascente);
  return { gnis_foz_ao_vertice_mais_perto_km: +foz.km.toFixed(2), gnis_nascente_ao_vertice_mais_perto_km: +nasc.km.toFixed(2),
    km_total: +trechos.reduce((s, t) => s + compr(t), 0).toFixed(1), km_leito_principal: +compr(trechos[0]).toFixed(1), trechos_continuos: trechos.length };
}

function montar() {
  for (const a of [DUMP_OSM, DUMP_NHD]) if (!existsSync(a)) throw new Error(`falta ${a}: rode "baixar" antes`);
  const d = JSON.parse(readFileSync(DUMP_OSM, "utf8"));
  const nhd = JSON.parse(readFileSync(DUMP_NHD, "utf8"));
  const ways = d.elements.filter((e) => e.type === "way" && e.geometry?.length > 1).map((e) => ({ id: e.id, tags: e.tags || {}, coords: e.geometry.map((g) => [g.lon, g.lat]) }));
  const features = [], tab = [], rios = {};

  // Willow Creek e Little Susitna River: OSM
  for (const nome of ["Willow Creek", "Little Susitna River"]) {
    const ws = ways.filter((w) => w.tags.name === nome && /^(river|stream)$/.test(w.tags.waterway || ""));
    if (!ws.length) throw new Error(`${nome}: nenhum way no dump`);
    const trechos = costurar(ws.map((w) => w.coords)); rios[nome] = trechos;
    const conf = conferirRio(nome, trechos);
    if (conf.gnis_foz_ao_vertice_mais_perto_km > 2.5 || conf.gnis_nascente_ao_vertice_mais_perto_km > 2.5) throw new Error(`${nome}: o OSM não vai da foz à nascente do GNIS (${JSON.stringify(conf)})`);
    const simples = trechos.map((t) => arred(dp(t, 0.0002)));
    features.push({ type: "Feature", properties: { rotulo: nome, name: nome, name_pt: nome, papel: PAPEL[nome], nao_e: NAO_E_RIO,
      fonte: "OpenStreetMap via Overpass API", licenca: LIC_OSM, exige_credito: true, osm_base: d.osm3s?.timestamp_osm_base || null,
      waterway: [...new Set(ws.map((w) => w.tags.waterway))].join("+"), osm_ways: ws.map((w) => `way/${w.id}`), gnis_id: GNIS[nome].id, gnis_url: `https://edits.nationalmap.gov/apps/gaz-domestic/public/summary/${GNIS[nome].id}`,
      leito_principal: "a primeira parte da geometria (o trecho contínuo mais longo); as outras são braços com o mesmo nome",
      vertices: simples.reduce((s, t) => s + t.length, 0), vertices_completo: trechos.reduce((s, t) => s + t.length, 0), tol_dp_graus: 0.0002, conferencia: conf,
      license: "ODbL — © OpenStreetMap contributors" },
      geometry: simples.length === 1 ? { type: "LineString", coordinates: simples[0] } : { type: "MultiLineString", coordinates: simples } });
    tab.push({ nome, fonte: "OSM", ways: ws.length, ...conf });
  }

  // Deception Creek: NHD (o OSM só tem os 7 km de baixo)
  {
    const nome = "Deception Creek";
    const fs = nhd.features || [];
    if (!fs.length || fs.some((f) => f.properties.gnis_id !== "01401055" || f.properties.gnis_name !== nome)) throw new Error("NHD: o dump não é só o Deception Creek (gnis_id 01401055)");
    const linhas = fs.flatMap((f) => (f.geometry.type === "LineString" ? [f.geometry.coordinates] : f.geometry.coordinates)).map((l) => l.map((p) => [p[0], p[1]]));
    const trechos = costurar(linhas); rios[nome] = trechos;
    const conf = conferirRio(nome, trechos);
    if (conf.gnis_foz_ao_vertice_mais_perto_km > 2.5 || conf.gnis_nascente_ao_vertice_mais_perto_km > 2.5) throw new Error(`${nome}: o NHD não vai da foz à nascente do GNIS (${JSON.stringify(conf)})`);
    const osmParcial = ways.filter((w) => w.tags.name === nome);
    Object.assign(conf, { foz_a_km_da_vila_de_willow_osm: +maisPertoEm(trechos, WILLOW_OSM).km.toFixed(2),
      por_que_nao_o_osm: osmParcial.length ? `o OSM só tem ${osmParcial.map((w) => `way/${w.id} (${compr(w.coords).toFixed(1)} km)`).join(", ")}: a nascente do GNIS fica a ${maisPertoEm(osmParcial.map((w) => w.coords), GNIS[nome].nascente).km.toFixed(1)} km da ponta dele` : "o OSM não tem o riacho" });
    const simples = trechos.map((t) => arred(dp(t, 0.0002)));
    const P = fs.map((f) => f.properties);
    features.push({ type: "Feature", properties: { rotulo: nome, name: nome, name_pt: nome, papel: PAPEL[nome], nao_e: NAO_E_RIO + ". Nem o riacho inteiro é o local: o folheto só diz que a cidade ficaria junto dele",
      fonte: "USGS National Hydrography Dataset (NHD), The National Map — MapServer/6 (Flowline - Large Scale), gnis_id 01401055", licenca: LIC_NHD, exige_credito: false,
      nhd_url: NHD_URL, nhd_flowlines: fs.length, nhd_ftype: [...new Set(P.map((p) => p.ftype))], nhd_resolution: [...new Set(P.map((p) => p.resolution))],
      nhd_fdate: [...new Set(P.map((p) => new Date(p.fdate).toISOString().slice(0, 10)))].sort(), nhd_lengthkm_somado: +P.reduce((s, p) => s + (p.lengthkm || 0), 0).toFixed(2),
      gnis_id: GNIS[nome].id, gnis_url: `https://edits.nationalmap.gov/apps/gaz-domestic/public/summary/${GNIS[nome].id}`,
      vertices: simples.reduce((s, t) => s + t.length, 0), vertices_completo: trechos.reduce((s, t) => s + t.length, 0), tol_dp_graus: 0.0002, conferencia: conf,
      license: "Domínio público (USGS NHD)" },
      geometry: simples.length === 1 ? { type: "LineString", coordinates: simples[0] } : { type: "MultiLineString", coordinates: simples } });
    tab.push({ nome, fonte: "NHD", flowlines: fs.length, ...conf });
  }

  // a ferrovia: a linha-tronco (usage=main, "Central Subdivision"), fora o ramal de Port MacKenzie (usage=branch), os
  // desvios e os ramais de serviço; só o trecho entre as travessias do leito principal dos rios
  const trilhos = ways.filter((w) => w.tags.railway === "rail" && w.tags.usage === "main" && w.tags.name === "Central Subdivision" && !w.tags.service);
  if (!trilhos.length) throw new Error("nenhum way da linha-tronco (railway=rail, usage=main, Central Subdivision) no dump");
  const opF = [...new Set(trilhos.map((w) => w.tags.operator).filter(Boolean))];
  if (opF.length !== 1 || !/^Alaska Railroad/i.test(opF[0])) throw new Error(`a ferrovia do dump não se identifica como Alaska Railroad: operator=${opF}`);
  const G = grafo(trilhos.map((w) => w.coords));
  const tr = trilhos.map((w) => w.coords);
  const xSul = travessias(tr, [rios["Little Susitna River"][0]]), xNorte = travessias(tr, [rios["Willow Creek"][0]]);
  const xTodas = { little_susitna: travessias(tr, rios["Little Susitna River"]).map((p) => arred([p])[0]), willow_creek: travessias(tr, rios["Willow Creek"]).map((p) => arred([p])[0]) };
  if (xSul.length !== 1 || xNorte.length !== 1) throw new Error(`travessias da ferrovia pelo leito principal: Little Susitna ${xSul.length}, Willow Creek ${xNorte.length} (esperava 1 e 1)`);
  const vMaisPerto = (p) => { let m = null, dm = Infinity; for (const [k, q] of G.pts) { const dd = km(p, q); if (dd < dm) { dm = dd; m = k; } } return { k: m, km: dm }; };
  const c = caminho(G, vMaisPerto(xSul[0]).k, vMaisPerto(xNorte[0]).k);
  if (!c) throw new Error("a ferrovia não liga as duas travessias no grafo");
  const cs = arred(dp(c.caminho, 0.0002));
  const confF = { travessia_little_susitna: arred(xSul)[0], travessia_willow_creek: arred(xNorte)[0], travessias_com_todos_os_bracos: xTodas,
    criterio: "a travessia do leito principal de cada rio (o trecho contínuo mais longo); um braço do Willow Creek cruza a ferrovia 0,8 km ao norte",
    travessia_little_susitna_a_km_de_houston_gnis: +km(xSul[0], HOUSTON_GNIS).toFixed(2), travessia_willow_creek_a_km_da_vila_de_willow_gnis: +km(xNorte[0], WILLOW_GNIS).toFixed(2),
    km_entre_as_travessias_pela_ferrovia: +c.km.toFixed(2), mi_entre_as_travessias_pela_ferrovia: +(c.km / 1.609344).toFixed(1),
    travessia_little_susitna_a_mi_do_ponto_de_anchorage_ne: +(km(xSul[0], ANCHORAGE_NE) / 1.609344).toFixed(1) };
  features.push({ type: "Feature", properties: { rotulo: "Alaska Railroad", name: `${opF[0]} — Central Subdivision (main line)`, name_pt: "Alaska Railroad", papel: PAPEL.ferrovia,
    nao_e: "não é o limite exato do local: o mapa da p. 48 mostra o contorno do local em degraus, junto da ferrovia, e o texto diz \"generally bounded\". O traçado é o de hoje",
    fonte: "OpenStreetMap via Overpass API", licenca: LIC_OSM, exige_credito: true, osm_base: d.osm3s?.timestamp_osm_base || null,
    osm_ways_na_janela: trilhos.length, vertices: cs.length, vertices_completo: c.caminho.length, tol_dp_graus: 0.0002, conferencia: confF,
    license: "ODbL — © OpenStreetMap contributors" }, geometry: { type: "LineString", coordinates: cs } });
  tab.push({ nome: "Alaska Railroad (Central Subdivision)", fonte: "OSM", ...confF });

  const fc = { type: "FeatureCollection", properties: {
    fonte: "OpenStreetMap via Overpass API (Willow Creek, Little Susitna River, Alaska Railroad) e USGS NHD (Deception Creek), consultas de " + hoje,
    licenca: `${LIC_OSM} (Willow Creek, Little Susitna River, Alaska Railroad); Deception Creek: domínio público (USGS NHD)`, obtido_em: hoje,
    o_que_e: "as feições reais que o folheto oficial de 1976 (doc-16, p. 48 = PDF p. 2) nomeia como limites do local da capital em Willow, e o riacho junto do qual a cidade ficaria",
    nao_e: "não é o local nem o contorno dele: nenhuma fonte aberta tem o local; o limite leste só existe no mapa da p. 48, figura do Estado que só vai à tela com permissão clara (midia.md §7.1). Nada aqui fecha polígono nem põe ponto \"5 mi a leste\"",
    fonte_do_local: "Official Election Pamphlet 1976, Ballot Measure: Capital Site Selection (material do Capital Site Selection Committee), p. 48; https://www.elections.alaska.gov/doc/oep/1976/1976-Ballot-Prop-Bond-Prop.pdf, lido pela cópia http://web.archive.org/web/20161230104844id_/https://www.elections.alaska.gov/doc/oep/1976/1976-Ballot-Prop-Bond-Prop.pdf (captura de 30/12/2016; fundamento.json › doc-16)" },
    features };
  validarFC(fc);
  return { fc, tab };
}

if (ACAO === "baixar") await baixar();
else if (ACAO === "conferir" || ACAO === "gravar") {
  const { fc, tab } = montar();
  console.log(JSON.stringify(tab, null, 1));
  console.log(`${fc.features.length} features, ${Math.round(JSON.stringify(fc).length / 1024)} KB`);
  if (ACAO === "gravar") {
    const g = gravarGeo({ slug: SLUG, fc, proj: "juneau", cena: "s15", origem: {
      fonte: "OpenStreetMap via Overpass API (Willow Creek, Little Susitna River, Alaska Railroad) e USGS National Hydrography Dataset (Deception Creek, gnis_id 01401055)",
      licenca: `${LIC_OSM} (Willow Creek, Little Susitna River, Alaska Railroad); Deception Creek: domínio público (USGS NHD)`,
      url: "https://www.openstreetmap.org/copyright", exige_credito: true,
      derivado_por: `out/juneau/_pesquisa/geo-sitio-willow-1976.mjs gravar (dumps ${DUMP_OSM} e ${DUMP_NHD}; cursos costurados pelas pontas; ferrovia pelo caminho mais curto entre as travessias; Douglas–Peucker 0.0002°)` } });
    console.error(`✓ ${SLUG}\n${relatarGravacao(g)}`);
  }
} else { console.error("uso: node out/juneau/_pesquisa/geo-sitio-willow-1976.mjs baixar|conferir|gravar"); process.exit(2); }
