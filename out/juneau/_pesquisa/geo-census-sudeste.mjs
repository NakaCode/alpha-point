#!/usr/bin/env node
// OS TRÊS TERRITÓRIOS DA s42, DO CENSUS (pesquisa-geo, 03/10/2026, 5ª leva B).
// City and Borough of Juneau (GEOID 02110), Haines Borough (02100) e Skagway Municipality (02230): os territórios
// do contexto que a s42 pinta, cada um com uma cor da paleta (identidade.md §5, "Os territórios do contexto"). A
// British Columbia já está em _media/geo/british-columbia.json (Natural Earth).
//
// Fonte: U.S. Census Bureau, Cartographic Boundary Files 2025, condados 1:500.000
// (https://www2.census.gov/geo/tiger/GENZ2025/shp/cb_2025_us_county_500k.zip). No Alasca, o "condado" é o borough.
// O CB é o limite generalizado e recortado na linha da costa (a terra; a água do borough fica fora). Datum NAD83
// (EPSG:4269, o .prj do arquivo), em graus: no Sudeste do Alasca, a diferença para o WGS84 fica em ~1–2 m, abaixo
// de 0,1 px na câmera mais próxima da s42 (zoom 10,7, ~25 m por px): os graus entram como estão.
// Obra federal: domínio público (17 U.S.C. §105); o Census pede a citação da fonte, sem crédito na tela
// (identidade.md §7; marca/acervos/5-dados-e-fronteiras.md §1.6). robots.txt de www2.census.gov: nada vetado para
// "User-agent: *" (lido em 03/10/2026).
//
// Uso (de dentro de C:/projetos/alpha-point):
//   node out/juneau/_pesquisa/geo-census-sudeste.mjs [--baixar] [--gravar]
//   --baixar  pede o zip de novo (um GET, sem chave, com o User-Agent do canal) e guarda em out/juneau/_tmp/geo-fontes/
//   sem ele, usa o zip guardado, e para se o sha256 não for o medido em 03/10/2026.
//   sem --gravar, só mede e imprime (nada é escrito fora de _tmp).
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { inflateRawSync } from "node:zlib";

const { gravarGeo, relatarGravacao, validarFC } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const { recortarBbox } = await import("file:///C:/projetos/regie-v1/src/geo/geo-recorte-bbox.mjs");

const URL_ZIP = "https://www2.census.gov/geo/tiger/GENZ2025/shp/cb_2025_us_county_500k.zip";
const URL_PAG = "https://www.census.gov/geographies/mapping-files/time-series/geo/cartographic-boundary.html";
const ARQ = "out/juneau/_tmp/geo-fontes/cb_2025_us_county_500k.zip";
const SHA = "aa976c00b181939755d0da757f4c7c2dc0103c3b3b4530fb2a91c2bb62fc777c";   // medido em 03/10/2026
const LIC = "Domínio público (U.S. Census Bureau, Cartographic Boundary Files — obra federal, 17 U.S.C. §105); o Census pede citar \"Source: U.S. Census Bureau\"";
const TOL = 0;        // sem simplificação além da do Census (medido em 03/10/2026: o tol 0,0001° tirava só 5 % dos vértices, e, simplificando cada território à parte, a divisa comum entre dois deles podia deixar de coincidir)
const hoje = new Date().toISOString().slice(0, 10);

const ALVOS = [
  { geoid: "02110", nome: "Juneau City and Borough", slug: "juneau-borough", rotulo: "JUNEAU", oficial: "City and Borough of Juneau" },
  { geoid: "02100", nome: "Haines Borough", slug: "haines-borough", rotulo: "HAINES", oficial: "Haines Borough" },
  { geoid: "02230", nome: "Skagway Municipality", slug: "skagway-municipality", rotulo: "SKAGWAY", oficial: "Municipality of Skagway Borough" },
];

// ---------- o zip ----------
if (process.argv.includes("--baixar") || !existsSync(ARQ)) {
  const contato = JSON.parse(readFileSync("canal.json", "utf8")).contato;
  const r = await fetch(URL_ZIP, { headers: { "User-Agent": `regie alpha-point (${contato})` } });
  if (!r.ok) { console.error(`Census HTTP ${r.status}: pare aqui (403/429/captcha é recusa e não se contorna)`); process.exit(1); }
  mkdirSync("out/juneau/_tmp/geo-fontes", { recursive: true });
  writeFileSync(ARQ, Buffer.from(await r.arrayBuffer()));
}
const zip = readFileSync(ARQ);
const sha = createHash("sha256").update(zip).digest("hex");
if (sha !== SHA) { console.error(`✗ o zip do Census mudou (sha256 ${sha.slice(0, 12)}…, esperado ${SHA.slice(0, 12)}…). Confira e atualize o SHA conscientemente.`); process.exit(1); }

function lerZip(buf) {   // diretório central → { nome: Buffer }
  let e = buf.length - 22; while (e >= 0 && buf.readUInt32LE(e) !== 0x06054b50) e--;
  if (e < 0) throw new Error("zip sem diretório central");
  const n = buf.readUInt16LE(e + 10); let p = buf.readUInt32LE(e + 16); const out = {};
  for (let i = 0; i < n; i++) {
    const met = buf.readUInt16LE(p + 10), tam = buf.readUInt32LE(p + 20), ln = buf.readUInt16LE(p + 28), lx = buf.readUInt16LE(p + 30), lc = buf.readUInt16LE(p + 32), off = buf.readUInt32LE(p + 42);
    const nome = buf.slice(p + 46, p + 46 + ln).toString("utf8");
    const dados = off + 30 + buf.readUInt16LE(off + 26) + buf.readUInt16LE(off + 28);
    const raw = buf.slice(dados, dados + tam);
    out[nome] = met === 0 ? raw : met === 8 ? inflateRawSync(raw) : (() => { throw new Error(`método ${met}`); })();
    p += 46 + ln + lx + lc;
  }
  return out;
}
const z = lerZip(zip);
const B = (ext) => z[`cb_2025_us_county_500k.${ext}`];
if (!/North_American_1983/.test(B("prj").toString())) throw new Error("o .prj não é NAD83 geográfico");

// ---------- o .dbf ----------
const dbf = B("dbf");
const nReg = dbf.readUInt32LE(4), hLen = dbf.readUInt16LE(8), rLen = dbf.readUInt16LE(10);
const campos = []; for (let p = 32; dbf[p] !== 0x0d; p += 32) campos.push({ nome: dbf.slice(p, p + 11).toString("latin1").replace(/\0.*$/, ""), tam: dbf[p + 16] });
const registro = (i) => { const o = {}; let p = hLen + i * rLen + 1; for (const c of campos) { o[c.nome] = dbf.slice(p, p + c.tam).toString("utf8").trim(); p += c.tam; } return o; };

// ---------- o .shp (via .shx) ----------
const shp = B("shp"), shx = B("shx");
const anelArea = (r) => { let s = 0; for (let i = 0, k = r.length - 1; i < r.length; k = i++) s += (r[i][0] - r[k][0]) * (r[i][1] + r[k][1]); return s / 2; };   // >0 = horário
const dentroAnel = ([x, y], anel) => { let d = false; for (let i = 0, k = anel.length - 1; i < anel.length; k = i++) { const [xi, yi] = anel[i], [xk, yk] = anel[k]; if ((yi > y) !== (yk > y) && x < ((xk - xi) * (y - yi)) / (yk - yi) + xi) d = !d; } return d; };
function geometria(i) {
  const off = shx.readUInt32BE(100 + i * 8) * 2 + 8;
  const tipo = shp.readInt32LE(off); if (tipo !== 5) throw new Error(`registro ${i}: tipo ${tipo}, esperava 5 (Polygon)`);
  const nP = shp.readInt32LE(off + 36), nPt = shp.readInt32LE(off + 40);
  const partes = []; for (let k = 0; k < nP; k++) partes.push(shp.readInt32LE(off + 44 + k * 4));
  const base = off + 44 + nP * 4; const pts = []; for (let k = 0; k < nPt; k++) pts.push([shp.readDoubleLE(base + k * 16), shp.readDoubleLE(base + k * 16 + 8)]);
  const aneis = partes.map((s, k) => pts.slice(s, k + 1 < nP ? partes[k + 1] : nPt));
  const ext = aneis.filter((r) => anelArea(r) > 0).map((r) => [r.slice().reverse()]);   // RFC 7946: exterior anti-horário
  for (const h of aneis.filter((r) => anelArea(r) <= 0)) {
    const dono = ext.find((poly) => dentroAnel(h[0], poly[0])); if (!dono) throw new Error(`registro ${i}: buraco sem exterior`);
    dono.push(h.slice().reverse());
  }
  return { type: "MultiPolygon", coordinates: ext };
}
const achados = {};
for (let i = 0; i < nReg; i++) { const r = registro(i); const a = ALVOS.find((x) => x.geoid === r.GEOID); if (a) achados[a.geoid] = { r, g: geometria(i) }; }
for (const a of ALVOS) { if (!achados[a.geoid]) throw new Error(`GEOID ${a.geoid} não está no arquivo`); if (achados[a.geoid].r.NAMELSAD !== a.nome) throw new Error(`GEOID ${a.geoid}: veio "${achados[a.geoid].r.NAMELSAD}", esperava "${a.nome}"`); }

// ---------- medidas ----------
const polys = (g) => (g.type === "Polygon" ? [g.coordinates] : g.coordinates);
const dentro = (pt, g) => polys(g).some((poly) => dentroAnel(pt, poly[0]) && !poly.slice(1).some((h) => dentroAnel(pt, h)));
const vert = (g) => { let n = 0; const w = (c) => { if (typeof c[0] === "number") n++; else c.forEach(w); }; w(g.coordinates); return n; };
const M = (lat) => [111320 * Math.cos((lat * Math.PI) / 180), 110574];   // metros por grau, local
function distBorda(pt, g) {   // metros até a borda mais próxima (exterior ou buraco)
  const [mx, my] = M(pt[1]); let min = Infinity;
  for (const poly of polys(g)) for (const r of poly) for (let i = 1; i < r.length; i++) {
    const ax = (r[i - 1][0] - pt[0]) * mx, ay = (r[i - 1][1] - pt[1]) * my, bx = (r[i][0] - pt[0]) * mx, by = (r[i][1] - pt[1]) * my;
    const dx = bx - ax, dy = by - ay, L = dx * dx + dy * dy; let t = L ? -(ax * dx + ay * dy) / L : 0; t = Math.max(0, Math.min(1, t));
    const d = Math.hypot(ax + t * dx, ay + t * dy); if (d < min) min = d;
  }
  return min;
}
const ler = (s) => JSON.parse(readFileSync(`out/juneau/_media/geo/${s}.json`, "utf8"));
const ponto = (s, rot) => ler(s).features.find((f) => f.geometry.type === "Point" && (!rot || f.properties.rotulo === rot || f.properties.name === rot)).geometry.coordinates;
const linha = (s) => ler(s).features.filter((f) => f.geometry.type === "LineString").flatMap((f) => f.geometry.coordinates);

const G = Object.fromEntries(ALVOS.map((a) => [a.geoid, achados[a.geoid].g]));
// 1 · quem fica dentro de quem
const refs = {
  "Juneau (NE, cidades-ne)": [ponto("cidades-ne", "Juneau"), "02110"],
  "Cascade Point (OSM, cascade-point)": [ponto("cascade-point"), "02110"],
  "Haines (OSM, cidade-haines-osm)": [ponto("cidade-haines-osm"), "02100"],
  "Skagway (NE, cidades-ne)": [ponto("cidades-ne", "Skagway"), "02230"],
  "Sitka (NE, cidades-ne)": [ponto("cidades-ne", "Sitka"), null],
  "Whitehorse (NE, cidades-ne)": [ponto("cidades-ne", "Whitehorse"), null],
};
const conf = Object.fromEntries(Object.entries(refs).map(([k, [pt, esp]]) => {
  const em = ALVOS.filter((a) => dentro(pt, G[a.geoid])).map((a) => a.geoid);
  return [k, { em: em.length ? em : null, esperado: esp, ok: esp ? em.length === 1 && em[0] === esp : em.length === 0 }];
}));
// 2 · a costa contra o OSM (as estradas da margem, traçadas sobre imagem; o OSM é a camada vetorial da própria base MapTiler)
function costa(s, geoid, filtro = () => true) {
  const pts = linha(s).filter(filtro), g = G[geoid];
  const fora = pts.filter((p) => !dentro(p, g)).map((p) => distBorda(p, g));
  const ord = fora.slice().sort((a, b) => a - b);
  return { vertices: pts.length, fora: fora.length, pct_fora: +((100 * fora.length) / pts.length).toFixed(1),
    fora_mediana_m: ord.length ? Math.round(ord[ord.length >> 1]) : 0, fora_p90_m: ord.length ? Math.round(ord[Math.floor(ord.length * 0.9)]) : 0, fora_max_m: ord.length ? Math.round(ord.at(-1)) : 0 };
}
const medCosta = {
  "estrada-juneau-cascade (OSM) × Juneau": costa("estrada-juneau-cascade", "02110"),
  "estrada-juneau-thane (OSM) × Juneau": costa("estrada-juneau-thane", "02110"),
  "haines-highway (OSM), lat < 59,40 (antes de Dalton Cache) × Haines": costa("haines-highway", "02100", (p) => p[1] < 59.40),
  "klondike-highway (OSM), lat < 59,58 (antes de White Pass) × Skagway": costa("klondike-highway", "02230", (p) => p[1] < 59.58),
};
// a balsa, do outro lado: vértice da rota no mar que cai DENTRO de um território = água pintada como terra
const balsa = linha("rota-balsa-lynn-canal-osm");
const balsaTerra = balsa.map((p) => { const g = ALVOS.find((a) => dentro(p, G[a.geoid])); return g ? distBorda(p, G[g.geoid]) : null; }).filter((d) => d !== null);
const longe = balsaTerra.filter((d) => d > 300);
const medBalsa = { vertices: balsa.length, dentro_de_territorio: balsaTerra.length, dentro_a_mais_de_300m_da_borda: longe.length, max_m: balsaTerra.length ? Math.round(Math.max(...balsaTerra)) : 0,
  nota: "os vértices junto aos terminais (Auke Bay, Haines, Skagway) ficam na borda por natureza; o que pesa é o vértice no meio do canal" };
const dCascade = Math.round(distBorda(ponto("cascade-point"), G["02110"]));

// ---------- simplificação e saída ----------
const r5 = (c) => JSON.parse(JSON.stringify(c, (k, v) => (typeof v === "number" ? +v.toFixed(5) : v)));
const saidas = [];
for (const a of ALVOS) {
  const { r, g } = achados[a.geoid];
  const bruto = { type: "FeatureCollection", features: [{ type: "Feature", properties: {}, geometry: g }] };
  const simp = recortarBbox(bruto, { bbox: [-180, -90, 180, 90], tol: TOL }).fc ?? recortarBbox(bruto, { bbox: [-180, -90, 180, 90], tol: TOL });
  const gs = (simp.features || simp)[0].geometry;
  // desvio máximo: vértice do bruto até a borda simplificada
  let desvio = 0; const w = (c) => { if (typeof c[0] === "number") { if (!dentro(c, gs) || true) { const d = distBorda(c, gs); if (d > desvio) desvio = d; } } else c.forEach(w); };
  w(g.coordinates);
  const fc = r5({ type: "FeatureCollection", properties: { fonte: "U.S. Census Bureau — Cartographic Boundary Files 2025, cb_2025_us_county_500k (counties 1:500,000)", arquivo_fonte: URL_ZIP,
      pagina: URL_PAG, datum_da_fonte: "NAD83 (EPSG:4269), graus; sem reprojeção (diferença para o WGS84 de ~1–2 m no Sudeste do Alasca)", sha256_zip: SHA, obtido_em: hoje, licenca: LIC,
      simplificacao: `Douglas–Peucker da pré-v1 (recortarBbox), tol ${TOL}°; desvio máximo medido ${Math.round(desvio)} m` },
    features: [{ type: "Feature", properties: {
      name: a.oficial, name_census: r.NAMELSAD, name_pt: a.rotulo, rotulo: a.rotulo, basename: r.NAME, papel: "territorio",
      nota_rotulo: "rótulo de tela decidido pelo redator-de-tela (textos-tela.json, rotulos_dado da s42): o nome de base, em caixa alta. name_pt leva o texto de tela em inglês de propósito (roupa do pesquisa-geo §4).",
      GEOID: r.GEOID, COUNTYNS: r.COUNTYNS, LSAD: r.LSAD, ALAND_m2: +r.ALAND, AWATER_m2: +r.AWATER,
      vertices_bruto: vert(g), vertices: vert(gs), desvio_simplificacao_m: Math.round(desvio), license: "Domínio público (U.S. Census Bureau)" },
      geometry: gs }] });
  const v = validarFC(fc);
  saidas.push({ a, fc, v, kb: Math.round(JSON.stringify(fc).length / 1024), aneis: gs.coordinates.length, vb: vert(g), vs: vert(gs), desvio: Math.round(desvio) });
}

const okDentro = Object.values(conf).every((c) => c.ok);
console.log(JSON.stringify({ zip_sha256: SHA, registros: nReg,
  territorios: saidas.map((s) => ({ slug: s.a.slug, GEOID: s.a.geoid, nome: s.fc.features[0].properties.name_census, features: s.v.features, poligonos: s.aneis, bbox: s.v.bbox,
    vertices_bruto: s.vb, vertices: s.vs, desvio_simplificacao_m: s.desvio, kb: s.kb })),
  dentro_fora: conf, costa_contra_osm: medCosta, cascade_point_ate_a_costa_m: dCascade, balsa_lynn_canal: medBalsa, confere: okDentro }, null, 1));
if (!okDentro) { console.error("✗ a conferência de dentro/fora falhou: nada gravado"); process.exit(1); }

if (process.argv.includes("--gravar")) {
  for (const s of saidas) {
    const g = gravarGeo({ slug: s.a.slug, fc: s.fc, proj: "juneau", cena: ["s42"], origem: {
      fonte: `U.S. Census Bureau — Cartographic Boundary Files 2025, counties 500K (cb_2025_us_county_500k), GEOID ${s.a.geoid} (${s.a.oficial})`, licenca: LIC,
      url: URL_ZIP, exige_credito: false,
      derivado_por: `out/juneau/_pesquisa/geo-census-sudeste.mjs --gravar (zip sha256 ${SHA.slice(0, 12)}…; Douglas–Peucker tol ${TOL}°, desvio máximo ${s.desvio} m)` } });
    console.error(`✓ ${s.a.slug}\n${relatarGravacao(g)}`);
  }
}
