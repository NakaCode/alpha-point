#!/usr/bin/env node
// A ROTA DA BALSA ESTADUAL NO LYNN CANAL, DO OPENSTREETMAP (pesquisa-geo, 01/10/2026) — s52, plano 2.
//
// O pedido (espelho, s52 › needs.geo › rota-balsa-lynn-canal-osm): a rota da Alaska Marine Highway no Lynn Canal,
// do terminal de Auke Bay, em Juneau, a Haines e a Skagway, como o OSM a mapeia (route=ferry). É o serviço que
// existe: sem esquema e sem "Approximate route".
//
// O que o OSM tem (descoberta de 01/10/2026, osm-descoberta-balsa-lynn.json): duas relations route=ferry com
// operator=Alaska Marine Highway, cada uma com um way só:
//   relation/12533329 "Juneau - Haines"  (way/196083744), do terminal de Juneau (Auke Bay) ao de Haines (Lutak);
//   relation/12533328 "Haines - Skagway" (way/468651609), do terminal de Haines (Lutak) ao de Skagway.
// Os dois ways dividem o nó do terminal de Lutak. Aqui eles entram juntos no derivarRota da pré-v1 (a costura pelas
// pontas do geo-osm-rota, --tol=0), sem a relation no dump, porque o derivarRota só lê os membros da primeira
// relation que encontra. Cada way entra no sentido da viagem (Juneau → Lutak, Lutak → Skagway; inverter a ordem dos
// vértices não muda o traçado), e a costura os cola no nó comum: nada é ligado à mão. O gravarGeo grava com a
// licença ODbL e as duas relations na procedência.
// Fica fora: way/1110587425 "Skagway - Haines", do Haines Skagway Fast Ferry (operador privado, não o Estado).
//
// A conferência (sem rede): as pontas dos ways são os nós ferry_terminal do OSM; a distância de cada ponta aos
// pontos do GNIS (Auke Bay, Lutak Inlet, Skagway) e das cidades; a água, pela costa do OSM (natural=coastline a
// até 600 m da rota: cruzamentos e lado, com a terra à esquerda do sentido da costa, como o OSM a desenha, provado
// com controles de terra e de água) e pelo polígono do Natural Earth 1:10M (panhandle-juneau), que é o que uma cena
// usaria para pintar a terra.
//
// Licença: ODbL 1.0 — "© OpenStreetMap contributors" na tela da cena, e openstreetmap.org/copyright na descrição.
//
// Uso (de dentro de C:/projetos/alpha-point; a rede é só no "baixar"):
//   node out/juneau/_pesquisa/geo-balsa-lynn-canal.mjs baixar <osm-descoberta-balsa-lynn|osm-balsa-lynn|osm-balsa-lynn-costa|todos>
//   node out/juneau/_pesquisa/geo-balsa-lynn-canal.mjs conferir     (sem rede; imprime)
//   node out/juneau/_pesquisa/geo-balsa-lynn-canal.mjs gravar       (sem rede; confere e grava)
// Overpass: 504 é sobrecarga (espere e tente de novo, espaçado); 403, 429 persistente ou verificação é recusa, e
// recusa não se contorna.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const { gravarGeo, relatarGravacao, validarFC, userAgentOSM } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const { derivarRota } = await import("file:///C:/projetos/regie-v1/src/geo/geo-osm-rota.mjs");

const PASTA = "out/juneau/_tmp/geo-fontes";
const SLUG = "rota-balsa-lynn-canal-osm";
const LIC = "ODbL 1.0 — exige atribuição © OpenStreetMap contributors";
const GNIS = `${PASTA}/gnis-ak/Text/DomesticNames_AK.txt`;
const GNIS_ZIP = "https://prd-tnm.s3.amazonaws.com/StagedProducts/GeographicNames/DomesticNames/DomesticNames_AK_Text.zip";
const BUFFER_M = 600;
const [ACAO, QUAL] = process.argv.slice(2);

const REL = { jh: 12533329, hs: 12533328 };
const WAY = { jh: 196083744, hs: 468651609 };
const NO_TERMINAL = { juneau: [65663494, 2062659390], haines: 4631478695, skagway: 6232504244 };
// GNIS (USGS, domínio público): feature_id → o que se confere
const GNIS_REF = { auke_bay_baia: "1398468", auke_bay_lugar: "1398469", lutak_inlet: "1423480", haines: "1422400", skagway: "1414754" };

// ---------- as consultas (uma por arquivo guardado) ----------
const CONSULTAS = {
  "osm-descoberta-balsa-lynn": '[out:json][timeout:90];(relation["route"="ferry"](58.25,-135.9,59.6,-134.5);way["route"="ferry"](58.25,-135.9,59.6,-134.5);nwr["amenity"="ferry_terminal"](58.25,-135.9,59.6,-134.5););out tags center;',
  "osm-balsa-lynn": "[out:json][timeout:120];(relation(id:12533329,12533328);way(id:196083744,468651609);node(id:65663494,2062659390,4631478695,6232504244,8196315079,3179650638););out body geom;way(id:409578915,1093562756,1110587425);out tags center;",
  // a costa do OSM a até 600 m da rota (o around segue a linha costurada), dentro da janela da rota com folga de
  // 0,02° (a janela poupa o servidor: o around sozinho deu 504 em 01/10/2026); depende do osm-balsa-lynn
  "osm-balsa-lynn-costa": () => {
    const l = costurar(lerDump("osm-balsa-lynn")).linha;
    const lats = l.map((p) => p[1]), lons = l.map((p) => p[0]);
    const bb = [Math.min(...lats) - 0.02, Math.min(...lons) - 0.02, Math.max(...lats) + 0.02, Math.max(...lons) + 0.02].map((v) => v.toFixed(4)).join(",");
    return `[out:json][timeout:180];way["natural"="coastline"](${bb})(around:${BUFFER_M},${l.map(([lon, lat]) => `${lat.toFixed(6)},${lon.toFixed(6)}`).join(",")});out geom;`;
  },
};

async function baixar(nome) {
  const c = CONSULTAS[nome];
  const q = typeof c === "function" ? c() : c;
  const r = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST", headers: { "User-Agent": userAgentOSM(), "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ data: q }).toString(), signal: AbortSignal.timeout(200000),
  });
  if (!r.ok) { console.error(`Overpass HTTP ${r.status} em ${nome}: 504 é sobrecarga (tente de novo mais tarde, espaçado); 403/429 é recusa, e recusa não se contorna`); process.exit(1); }
  const t = await r.text();
  const j = JSON.parse(t);
  mkdirSync(PASTA, { recursive: true });
  writeFileSync(`${PASTA}/${nome}.json`, t);
  console.error(`✓ ${nome}: ${j.elements.length} elementos, base OSM ${j.osm3s?.timestamp_osm_base} → ${PASTA}/${nome}.json (${t.length} bytes)`);
}

function lerDump(n) {
  const a = `${PASTA}/${n}.json`;
  if (!existsSync(a)) { console.error(`falta ${a}: rode "baixar ${n}"`); process.exit(2); }
  return JSON.parse(readFileSync(a, "utf8"));
}

// ---------- medidas ----------
const rad = (x) => (x * Math.PI) / 180;
const hav = ([x1, y1], [x2, y2]) => {   // metros
  const dLat = rad(y2 - y1), dLon = rad(x2 - x1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(y1)) * Math.cos(rad(y2)) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371008.8 * Math.asin(Math.sqrt(a));
};
const comp = (l) => l.slice(1).reduce((s, p, i) => s + hav(l[i], p), 0);
// projeção fixa para cruzamento e lado (os dois testes não mudam com transformação afim)
const KX = 111320 * Math.cos(rad(58.9)), KY = 110574;
const P = ([lon, lat]) => [lon * KX, lat * KY];
const r6 = (p) => p.map((v) => +v.toFixed(6));

// ---------- a costura ----------
function costurar(d) {
  const el = (t, id) => d.elements.find((e) => e.type === t && e.id === id);
  const rels = { jh: el("relation", REL.jh), hs: el("relation", REL.hs) };
  for (const k of ["jh", "hs"]) {
    const r = rels[k];
    if (!r) throw new Error(`relation/${REL[k]} não está no dump`);
    if (r.tags?.route !== "ferry" || r.tags?.operator !== "Alaska Marine Highway") throw new Error(`relation/${r.id} não é route=ferry da Alaska Marine Highway: ${JSON.stringify(r.tags)}`);
    const ws = r.members.filter((m) => m.type === "way");
    if (ws.length !== 1 || ws[0].ref !== WAY[k]) throw new Error(`relation/${r.id}: membros ${JSON.stringify(ws.map((m) => m.ref))}, esperado só way/${WAY[k]} (a relation mudou no OSM: refaça a descoberta)`);
  }
  const ways = { jh: el("way", WAY.jh), hs: el("way", WAY.hs) };
  for (const k of ["jh", "hs"]) if (!ways[k]?.nodes || !ways[k]?.geometry) throw new Error(`way/${WAY[k]} sem nós ou geometria no dump`);
  const pontas = (w) => [w.nodes[0], w.nodes.at(-1)];
  const comum = pontas(ways.jh).filter((n) => pontas(ways.hs).includes(n));
  if (comum.length !== 1) throw new Error(`os dois ways dividem ${comum.length} pontas (esperado 1, o terminal de Lutak)`);
  const noComum = comum[0];
  // cada way no sentido da viagem: Juneau → Lutak, Lutak → Skagway
  const orientado = (w, primeiroNo) => { const g = w.geometry.map((p) => ({ lon: p.lon, lat: p.lat })); return w.nodes[0] === primeiroNo ? g : g.reverse(); };
  const noJuneau = pontas(ways.jh).find((n) => n !== noComum), noSkagway = pontas(ways.hs).find((n) => n !== noComum);
  const gJH = orientado(ways.jh, noJuneau), gHS = orientado(ways.hs, noComum);
  const dump = { elements: [{ type: "way", id: WAY.jh, geometry: gJH }, { type: "way", id: WAY.hs, geometry: gHS }] };
  return { d, el, rels, ways, noComum, noJuneau, noSkagway, dump, gJH, gHS,
    linha: [...gJH.map((p) => [p.lon, p.lat]), ...gHS.slice(1).map((p) => [p.lon, p.lat])] };
}

// ---------- a costa do OSM ----------
function lerCosta(dump) {
  const ws = dump.elements.filter((e) => e.type === "way" && e.geometry && e.tags?.natural === "coastline");
  const segs = [], porIni = new Map(), porFim = new Map();
  const k = (p) => `${p[0].toFixed(7)},${p[1].toFixed(7)}`;
  for (const w of ws) {
    const g = w.geometry.map((p) => [p.lon, p.lat]);
    for (let i = 1; i < g.length; i++) { const s = { a: g[i - 1], b: g[i], way: w.id }; segs.push(s); porIni.set(k(s.a), s); porFim.set(k(s.b), s); }
  }
  return { ways: ws.length, segs, k, porIni, porFim };
}
const cruz = (A, B, Q) => (B[0] - A[0]) * (Q[1] - A[1]) - (B[1] - A[1]) * (Q[0] - A[0]);   // > 0: Q à esquerda de A→B
// a costa mais perto de um ponto, e de que lado dele a terra fica (terra à esquerda do sentido da costa)
function ladoDaCosta(p, C) {
  const kx = 111320 * Math.cos(rad(p[1])), ky = 110574;
  const L = ([lon, lat]) => [(lon - p[0]) * kx, (lat - p[1]) * ky];
  const O = [0, 0];
  let best = null;
  for (const s of C.segs) {
    if (Math.abs(s.a[1] - p[1]) > 0.02 && Math.abs(s.b[1] - p[1]) > 0.02 && Math.sign(s.a[1] - p[1]) === Math.sign(s.b[1] - p[1])) continue;   // longe demais
    const A = L(s.a), B = L(s.b), dx = B[0] - A[0], dy = B[1] - A[1], l2 = dx * dx + dy * dy;
    const t = l2 ? Math.max(0, Math.min(1, -(A[0] * dx + A[1] * dy) / l2)) : 0;
    const dd = Math.hypot(A[0] + t * dx, A[1] + t * dy);
    if (!best || dd < best.d) best = { d: dd, s, t, A, B };
  }
  if (!best || best.d > BUFFER_M) return { d: best ? best.d : null, terra: null };
  let terra;
  if (best.t > 0 && best.t < 1) terra = cruz(best.A, best.B, O) > 0;
  else {   // o mais perto é um vértice da costa: vale a virada nele
    const V = best.t === 0 ? best.s.a : best.s.b;
    const ent = C.porFim.get(C.k(V)), sai = C.porIni.get(C.k(V));
    if (ent && sai) {
      const U = L(ent.a), Vv = L(V), W = L(sai.b);
      const e1 = cruz(U, Vv, O) > 0, e2 = cruz(Vv, W, O) > 0;
      terra = cruz(U, Vv, W) > 0 ? e1 && e2 : e1 || e2;   // virada à esquerda: a terra é a cunha estreita
    } else terra = cruz(best.A, best.B, O) > 0;
  }
  return { d: best.d, terra, way: best.s.way };
}
function interT(p, p2, q, q2) {   // t ao longo de p→p2 onde cruza q→q2, ou null
  const r = [p2[0] - p[0], p2[1] - p[1]], s = [q2[0] - q[0], q2[1] - q[1]];
  const den = r[0] * s[1] - r[1] * s[0];
  if (den === 0) return null;
  const qp = [q[0] - p[0], q[1] - p[1]];
  const t = (qp[0] * s[1] - qp[1] * s[0]) / den, u = (qp[0] * r[1] - qp[1] * r[0]) / den;
  return t >= 0 && t <= 1 && u >= 0 && u <= 1 ? t : null;
}
function cruzamentos(linha, C) {
  const out = [];
  let acum = 0;
  for (let i = 1; i < linha.length; i++) {
    const a = P(linha[i - 1]), b = P(linha[i]), dseg = hav(linha[i - 1], linha[i]);
    for (const s of C.segs) {
      const t = interT(a, b, P(s.a), P(s.b));
      if (t === null) continue;
      out.push({ km: +((acum + dseg * t) / 1000).toFixed(3), ponto: r6([linha[i - 1][0] + (linha[i][0] - linha[i - 1][0]) * t, linha[i - 1][1] + (linha[i][1] - linha[i - 1][1]) * t]), costa: `way/${s.way}` });
    }
    acum += dseg;
  }
  return out.sort((x, y) => x.km - y.km);
}
function amostrar(linha, passo = 50) {
  const out = [{ p: linha[0], km: 0 }];
  let acum = 0;
  for (let i = 1; i < linha.length; i++) {
    const a = linha[i - 1], b = linha[i], d = hav(a, b), n = Math.max(1, Math.ceil(d / passo));
    for (let k = 1; k <= n; k++) { const t = k / n; out.push({ p: [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t], km: (acum + d * t) / 1000 }); }
    acum += d;
  }
  return out;
}
function trechos(amostras, marca, ancoras) {
  const out = [];
  let cur = null;
  for (const a of amostras) {
    if (marca(a)) { if (!cur) cur = { de: a.km, ate: a.km }; else cur.ate = a.km; }
    else if (cur) { out.push(cur); cur = null; }
  }
  if (cur) out.push(cur);
  return out.map((t) => {
    const perto = ancoras.map(([nome, km]) => ({ nome, m: Math.round(Math.min(Math.abs(t.de - km), Math.abs(t.ate - km)) * 1000) })).sort((x, y) => x.m - y.m)[0];
    return { de_km: +t.de.toFixed(3), ate_km: +t.ate.toFixed(3), m: Math.round((t.ate - t.de) * 1000), terminal_mais_perto: perto.nome, a_m_do_terminal: perto.m };
  });
}
// ---------- o polígono do Natural Earth ----------
function anel(p, r) { let c = false; for (let i = 0, j = r.length - 1; i < r.length; j = i++) { const [xi, yi] = r[i], [xj, yj] = r[j]; if ((yi > p[1]) !== (yj > p[1]) && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) c = !c; } return c; }
function emTerraNE(p, fc) {
  for (const f of fc.features) {
    const g = f.geometry, polys = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : [];
    for (const poly of polys) if (anel(p, poly[0]) && !poly.slice(1).some((h) => anel(p, h))) return true;
  }
  return false;
}
// ---------- referências ----------
function lerGnis() {
  if (!existsSync(GNIS)) { console.error(`falta ${GNIS}: extraia o ${GNIS_ZIP} em ${PASTA}/gnis-ak/`); process.exit(2); }
  const ids = Object.values(GNIS_REF), out = {};
  for (const l of readFileSync(GNIS, "utf8").split(/\r?\n/)) { const c = l.split("|"); if (ids.includes(c[0])) out[c[0]] = { gnis: +c[0], nome: c[1], classe: c[2], ponto: [+c[16], +c[15]] }; }
  for (const id of ids) if (!out[id]) throw new Error(`GNIS ${id} não está em ${GNIS}`);
  return out;
}
// os pontos de água do GNIS (Bay, Channel, Harbor, Gut) na janela da rota, com folga de 0,05°
function lerGnisAgua(linha) {
  const lats = linha.map((p) => p[1]), lons = linha.map((p) => p[0]);
  const [a, b, c, d] = [Math.min(...lats) - 0.05, Math.min(...lons) - 0.05, Math.max(...lats) + 0.05, Math.max(...lons) + 0.05];
  const out = [];
  for (const l of readFileSync(GNIS, "utf8").split(/\r?\n/)) {
    const k = l.split("|"), lat = +k[15], lon = +k[16];
    if (/^(Bay|Channel|Harbor|Gut)$/.test(k[2]) && lat > a && lat < c && lon > b && lon < d) out.push({ gnis: +k[0], nome: k[1], classe: k[2], ponto: [lon, lat] });
  }
  return out;
}
// a menor distância (m) de um ponto a uma linha
function distLinha(p, linha) {
  const kx = 111320 * Math.cos(rad(p[1])), ky = 110574;
  let m = Infinity;
  for (let i = 1; i < linha.length; i++) {
    const A = [(linha[i - 1][0] - p[0]) * kx, (linha[i - 1][1] - p[1]) * ky], B = [(linha[i][0] - p[0]) * kx, (linha[i][1] - p[1]) * ky];
    const dx = B[0] - A[0], dy = B[1] - A[1], l2 = dx * dx + dy * dy, t = l2 ? Math.max(0, Math.min(1, -(A[0] * dx + A[1] * dy) / l2)) : 0;
    m = Math.min(m, Math.hypot(A[0] + t * dx, A[1] + t * dy));
  }
  return m;
}
const lerGeo = (s) => JSON.parse(readFileSync(`out/juneau/_media/geo/${s}.json`, "utf8"));

// ---------- a montagem e a conferência ----------
function montar() {
  const c = costurar(lerDump("osm-balsa-lynn"));
  const C = lerCosta(lerDump("osm-balsa-lynn-costa"));
  const G = lerGnis();
  const ne = lerGeo("panhandle-juneau");
  const skagNE = lerGeo("cidades-ne").features.find((f) => f.properties.name === "Skagway").geometry.coordinates;
  const hainesOSM = lerGeo("cidade-haines-osm").features[0].geometry.coordinates;
  const noDe = (id) => { const n = c.el("node", id); return n ? { node: `node/${id}`, name: n.tags?.name || null, amenity: n.tags?.amenity || null, ponto: [n.lon, n.lat] } : null; };
  const wayDe = (id) => { const w = c.el("way", id); return w?.center ? { way: `way/${id}`, name: w.tags?.name || null, operator: w.tags?.operator || null, tipo: w.tags?.route || w.tags?.amenity || null, ponto: [w.center.lon, w.center.lat] } : null; };
  const dist = (a, b) => Math.round(hav(a, b));

  const kmJH = comp(c.gJH.map((p) => [p.lon, p.lat])) / 1000, kmHS = comp(c.gHS.map((p) => [p.lon, p.lat])) / 1000;
  const L = c.linha;
  const pJuneau = L[0], pLutak = [c.gHS[0].lon, c.gHS[0].lat], pSkagway = L.at(-1);

  const terminais = {
    juneau: {
      ponta_da_rota: r6(pJuneau), no_da_ponta: `node/${c.noJuneau}`, no_da_ponta_e_terminal: NO_TERMINAL.juneau.includes(c.noJuneau),
      terminal_osm: NO_TERMINAL.juneau.map(noDe).filter(Boolean).map((t) => ({ ...t, m: dist(pJuneau, t.ponto) })),
      area_do_terminal_osm: (() => { const w = wayDe(409578915); return w ? { ...w, m: dist(pJuneau, w.ponto) } : null; })(),
      gnis: [G[GNIS_REF.auke_bay_baia], G[GNIS_REF.auke_bay_lugar]].map((g) => ({ ...g, m: dist(pJuneau, g.ponto) })),
    },
    haines: {
      ponta_da_rota: r6(pLutak), no_da_ponta: `node/${c.noComum}`, no_da_ponta_e_terminal: c.noComum === NO_TERMINAL.haines,
      terminal_osm: [noDe(NO_TERMINAL.haines)].filter(Boolean).map((t) => ({ ...t, m: dist(pLutak, t.ponto) })),
      area_do_terminal_osm: (() => { const w = wayDe(1093562756); return w ? { ...w, m: dist(pLutak, w.ponto) } : null; })(),
      gnis: [G[GNIS_REF.lutak_inlet], G[GNIS_REF.haines]].map((g) => ({ ...g, m: dist(pLutak, g.ponto) })),
      cidade_haines_osm_m: dist(pLutak, hainesOSM),
      cais_da_cidade_nao_e_o_terminal: (() => { const n = noDe(8196315079); return n ? { ...n, m: dist(pLutak, n.ponto) } : null; })(),
    },
    skagway: {
      ponta_da_rota: r6(pSkagway), no_da_ponta: `node/${c.noSkagway}`, no_da_ponta_e_terminal: c.noSkagway === NO_TERMINAL.skagway,
      terminal_osm: [noDe(NO_TERMINAL.skagway)].filter(Boolean).map((t) => ({ ...t, m: dist(pSkagway, t.ponto) })),
      gnis: [G[GNIS_REF.skagway]].map((g) => ({ ...g, m: dist(pSkagway, g.ponto) })),
      cidade_skagway_ne_m: dist(pSkagway, skagNE),
    },
  };

  // a água
  const amostras = amostrar(L, 50);
  for (const a of amostras) { a.costa = ladoDaCosta(a.p, C); a.ne = emTerraNE(a.p, ne); }
  const ancoras = [["Juneau (Auke Bay)", 0], ["Haines (Lutak)", kmJH], ["Skagway", kmJH + kmHS]];
  const cr = cruzamentos(L, C).map((x) => ({ ...x, ...(() => { const p = ancoras.map(([nome, km]) => ({ nome, m: Math.round(Math.abs(x.km - km) * 1000) })).sort((u, v) => u.m - v.m)[0]; return { terminal_mais_perto: p.nome, a_m_do_terminal: p.m }; })() }));
  const terraOSM = trechos(amostras, (a) => a.costa.terra === true, ancoras);
  const terraNE = trechos(amostras, (a) => a.ne, ancoras);
  const longe = amostras.filter((a) => a.costa.terra === null).length;
  // a menor folga até a costa fora das chegadas (a mais de 1 km de cada terminal)
  const miolo = amostras.filter((a) => ancoras.every(([, km]) => Math.abs(a.km - km) > 1) && a.costa.terra === false);
  const folga = miolo.reduce((m, a) => (a.costa.d < m.d ? { d: a.costa.d, km: a.km, p: a.p } : m), { d: Infinity });
  // os controles do teste da costa: o que tem de dar terra (os prédios dos terminais no OSM) e o que tem de dar água
  // (todo ponto do GNIS de classe Bay, Channel, Harbor ou Gut na janela da rota). Um controle só decide se a distância
  // dele até a rota mais a distância até a costa baixada não passa de 600 m: só assim toda costa mais perto dele que
  // a achada estaria no que o Overpass devolveu. Os outros ficam contados, sem veredito.
  const ctrl = (nome, p, espera) => {
    const x = ladoDaCosta(p, C), r = distLinha(p, L), vale = x.d !== null && r + x.d <= BUFFER_M;
    const deu = !vale || x.terra === null ? "não decide" : x.terra ? "terra" : "água";
    return { nome, ponto: r6(p), espera, deu, a_m_da_rota: Math.round(r), a_m_da_costa: x.d === null ? null : Math.round(x.d), passou: deu === "não decide" ? null : deu === espera };
  };
  const gnisAgua = lerGnisAgua(L);
  const todos = [
    ...[409578915, 1093562756].map(wayDe).filter(Boolean).map((w) => ctrl(`${w.way} (${w.name || "ferry_terminal sem nome"}, building=yes)`, w.ponto, "terra")),
    ...gnisAgua.map((g) => ctrl(`GNIS ${g.gnis} (${g.nome}, ${g.classe})`, g.ponto, "água")),
  ];
  const controles = todos.filter((x) => x.passou !== null);
  if (controles.some((x) => x.passou === false)) throw new Error(`controle do teste da costa falhou: ${JSON.stringify(controles.filter((x) => !x.passou))}`);
  if (!controles.some((x) => x.espera === "terra") || !controles.some((x) => x.espera === "água")) throw new Error("o teste da costa ficou sem controle de terra ou de água que decida");
  const agua = {
    metodo: `amostras a cada 50 m (${amostras.length}); costa = natural=coastline do OSM a até ${BUFFER_M} m da rota (${C.ways} ways), terra à esquerda do sentido da costa; NE = panhandle-juneau (Natural Earth 1:10M admin-0)`,
    osm_controles: controles,
    osm_controles_sem_veredito: `${todos.length - controles.length} de ${todos.length} (${gnisAgua.length} pontos de água do GNIS na janela da rota; os que ficam a mais de 600 m, somando rota e costa)`,
    osm_cruzamentos_da_costa: cr,
    osm_trechos_em_terra: terraOSM,
    osm_amostras_a_mais_de_600m_da_costa: longe,
    osm_menor_folga_fora_das_chegadas_m: Number.isFinite(folga.d) ? { m: Math.round(folga.d), km: +folga.km.toFixed(2), ponto: r6(folga.p) } : null,
    ne_trechos_em_terra: terraNE,
  };

  const r = derivarRota(c.dump, {
    nome: "Juneau - Haines + Haines - Skagway (Alaska Marine Highway)", pt: "Alaska Marine Highway ferry route: Juneau – Haines – Skagway", tol: 0,
    extra: {
      rotulo: "", papel: "rota",
      servico: "Alaska Marine Highway (operator no OSM), o sistema de balsas do Estado do Alasca",
      osm_relacoes: [
        { relation: `relation/${REL.jh}`, name: c.rels.jh.tags.name, ref: c.rels.jh.tags.ref || null, way: `way/${WAY.jh}`, vertices: c.gJH.length, km: +kmJH.toFixed(2), mi: +(kmJH / 1.609344).toFixed(1) },
        { relation: `relation/${REL.hs}`, name: c.rels.hs.tags.name, ref: c.rels.hs.tags.ref || null, way: `way/${WAY.hs}`, vertices: c.gHS.length, km: +kmHS.toFixed(2), mi: +(kmHS / 1.609344).toFixed(1) },
      ],
      osm_network: c.rels.jh.tags.network || null, osm_network_wikidata: c.rels.jh.tags["network:wikidata"] || null, osm_website: c.rels.jh.tags.website || null,
      osm_base: c.d.osm3s?.timestamp_osm_base || null,
      mi_medido: +((kmJH + kmHS) / 1.609344).toFixed(1),
      no_de_juncao: `node/${c.noComum} (Alaska Marine Highway Terminal - Haines (Lutak))`,
      terminais, agua,
      nota: `o traçado é o desenho que o OSM dá ao serviço (route=ferry): ${L.length} vértices em ${(kmJH + kmHS).toFixed(1)} km; não se lê como o caminho exato de cada viagem`,
      fora: (() => { const w = wayDe(1110587425); return w ? `${w.way} "${w.name}" (operator=${w.operator}): empresa privada, não o Estado` : null; })(),
      license: "ODbL — © OpenStreetMap contributors",
    },
  });
  return { fc: r.fc, resumo: r.resumo, orfaos: r.orfaos, km: r.km, kmJH, kmHS, c, terminais, agua };
}

// ---------- CLI ----------
if (ACAO === "baixar") {
  const nomes = QUAL === "todos" ? Object.keys(CONSULTAS) : [QUAL];
  for (const [i, n] of nomes.entries()) {
    if (!CONSULTAS[n]) { console.error(`uso: baixar <${Object.keys(CONSULTAS).join("|")}|todos>`); process.exit(2); }
    if (i) await new Promise((res) => setTimeout(res, 20000));
    await baixar(n);
  }
} else if (ACAO === "conferir" || ACAO === "gravar") {
  const m = montar();
  const v = validarFC(m.fc);
  const f = m.fc.features[0];
  const tab = {
    resumo_derivarRota: m.resumo, orfaos: m.orfaos, features: v.features, bbox: v.bbox, geometria: f.geometry.type, vertices: f.geometry.coordinates.length,
    km: +m.km.toFixed(2), mi: f.properties.mi_medido, trechos: f.properties.osm_relacoes, kb: +(JSON.stringify(m.fc).length / 1024).toFixed(1),
    primeiros_pares: f.geometry.coordinates.slice(0, 2), terminais: m.terminais, agua: m.agua,
  };
  if (ACAO === "gravar") {
    if (m.orfaos) { console.error(`✗ ${m.orfaos} órfão(s): a rota não fechou de Juneau a Skagway. Nada foi gravado.`); process.exit(1); }
    const g = gravarGeo({ slug: SLUG, fc: m.fc, proj: "juneau", cena: "s52", origem: {
      fonte: `OpenStreetMap via Overpass API — relation/${REL.jh} (Juneau - Haines) e relation/${REL.hs} (Haines - Skagway), Alaska Marine Highway`,
      licenca: LIC, url: "https://www.openstreetmap.org/copyright", exige_credito: true,
      derivado_por: `out/juneau/_pesquisa/geo-balsa-lynn-canal.mjs gravar (dumps osm-balsa-lynn e osm-balsa-lynn-costa em out/juneau/_tmp/geo-fontes/, base OSM ${f.properties.osm_base}; way/${WAY.jh} e way/${WAY.hs} costurados pelo derivarRota do geo-osm-rota no node/${m.c.noComum}, --tol=0)`,
    } });
    console.error(`✓ ${SLUG}\n${relatarGravacao(g)}`);
  }
  console.log(JSON.stringify(tab, null, 1));
} else {
  console.error("uso: node out/juneau/_pesquisa/geo-balsa-lynn-canal.mjs baixar <consulta|todos> | conferir | gravar");
  process.exit(2);
}
