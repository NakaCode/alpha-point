#!/usr/bin/env node
// O MATANUSKA-SUSITNA BOROUGH, DO CENSUS (pesquisa-geo, 27/09/2026) — o "Mat-Su Valley" da voz, em s15, s33 e s39.
//
// Fonte: U.S. Census Bureau, TIGERweb, serviço Generalized_ACS2025/State_County, camada 11 "Counties 500K"
// ("January 1, 2025 vintage; Generalized": o limite cartográfico, recortado na linha da costa). GEOID 02170.
// Obra federal: domínio público (17 U.S.C. §105); o serviço diz só "Source: U.S. Census Bureau". Sem crédito na
// tela (identidade.md §7). O servidor devolve em WGS84 (outSR=4326) a partir do Web Mercator de origem.
//
// O recorte matsu-anchorage (Natural Earth, EUA num bbox) NÃO é o limite do borough; este é.
//
// Uso (de dentro de C:/projetos/alpha-point):
//   node out/juneau/_pesquisa/geo-tiger-matsu.mjs [--baixar] [--gravar]
//   --baixar  pede de novo ao TIGERweb (um GET, sem chave) e guarda em out/juneau/_tmp/geo-fontes/
//   sem ele, usa a resposta guardada, e para se o sha256 dela não for o medido em 27/09/2026.
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";

const { gravarGeo, relatarGravacao, validarFC } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");

const URL_Q = "https://tigerweb.geo.census.gov/arcgis/rest/services/Generalized_ACS2025/State_County/MapServer/11/query?where=GEOID%3D%2702170%27&outFields=*&outSR=4326&returnGeometry=true&f=geojson";
const URL_CAMADA = "https://tigerweb.geo.census.gov/arcgis/rest/services/Generalized_ACS2025/State_County/MapServer/11";
const ARQ = "out/juneau/_tmp/geo-fontes/tigerweb-acs2025-counties500k-02170.json";
const SHA = "fe8809af5c50cdf71d8724f50d787ca7303525c7921feff25381eb788c6df33d";   // medido em 27/09/2026
const LIC = "Domínio público (U.S. Census Bureau, TIGERweb — obra federal, 17 U.S.C. §105); o serviço diz \"Source: U.S. Census Bureau\"";
const hoje = new Date().toISOString().slice(0, 10);

if (process.argv.includes("--baixar") || !existsSync(ARQ)) {
  const contato = JSON.parse(readFileSync("canal.json", "utf8")).contato;
  const r = await fetch(URL_Q, { headers: { "User-Agent": `regie alpha-point (${contato})` } });
  if (!r.ok) { console.error(`TIGERweb HTTP ${r.status}: pare aqui (403/429/captcha é recusa e não se contorna)`); process.exit(1); }
  mkdirSync("out/juneau/_tmp/geo-fontes", { recursive: true });
  writeFileSync(ARQ, Buffer.from(await r.arrayBuffer()));
}
const buf = readFileSync(ARQ);
const sha = createHash("sha256").update(buf).digest("hex");
if (sha !== SHA) { console.error(`✗ a resposta do TIGERweb mudou (sha256 ${sha.slice(0, 12)}…, esperado ${SHA.slice(0, 12)}…). Confira a geometria e atualize o SHA conscientemente.`); process.exit(1); }
const j = JSON.parse(buf.toString("utf8"));
if (j.type !== "FeatureCollection" || j.features?.length !== 1) throw new Error("esperava 1 feature");
const f = j.features[0], p = f.properties;
if (p.GEOID !== "02170" || p.NAME !== "Matanuska-Susitna Borough") throw new Error(`veio ${p.GEOID} ${p.NAME}`);

// ---------- conferência: quem fica dentro e quem fica fora ----------
const polys = (g) => (g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : []);
const dentroAnel = ([x, y], anel) => { let d = false; for (let i = 0, k = anel.length - 1; i < anel.length; k = i++) { const [xi, yi] = anel[i], [xk, yk] = anel[k]; if ((yi > y) !== (yk > y) && x < ((xk - xi) * (y - yi)) / (yk - yi) + xi) d = !d; } return d; };
const dentro = (pt, g) => polys(g).some((poly) => dentroAnel(pt, poly[0]) && !poly.slice(1).some((h) => dentroAnel(pt, h)));
const ler = (s) => JSON.parse(readFileSync(`out/juneau/_media/geo/${s}.json`, "utf8"));
const cid = (n) => ler("cidades-ne").features.find((x) => x.properties.rotulo === n).geometry.coordinates;
const WILLOW = ler("cidade-willow-osm").features.find((x) => x.geometry.type === "Point").geometry.coordinates;
const refs = {
  "Willow (OSM, cidade-willow-osm)": [WILLOW, true],
  "Wasilla (NE, cidades-ne)": [cid("Wasilla"), true],
  "Palmer (NE, ne_id 1159146305)": [[-149.112692, 61.599714], true],
  "Talkeetna (NE, ne_id 1159126527)": [[-150.109427, 62.323779], true],
  "Anchorage (NE, cidades-ne)": [cid("Anchorage"), false],
  "Fairbanks (NE, cidades-ne)": [cid("Fairbanks"), false],
};
const conf = Object.fromEntries(Object.entries(refs).map(([k, [pt, esperado]]) => [k, { dentro: dentro(pt, f.geometry), esperado }]));
const ok = Object.values(conf).every((c) => c.dentro === c.esperado);
let n = 0; const w = (c) => { if (typeof c[0] === "number") n++; else c.forEach(w); }; w(f.geometry.coordinates);

const r5 = (c) => JSON.parse(JSON.stringify(c, (k, v) => (typeof v === "number" ? +v.toFixed(5) : v)));
const fc = r5({ type: "FeatureCollection", properties: { fonte: "U.S. Census Bureau — TIGERweb, Generalized_ACS2025/State_County, layer 11 (Counties 500K)", consulta: URL_Q, camada: URL_CAMADA,
  vintage: "January 1, 2025 (Generalized)", sha256_resposta: SHA, obtido_em: hoje, licenca: LIC },
  features: [{ type: "Feature", properties: {
    name: p.NAME, name_pt: "Mat-Su Valley", rotulo: "Mat-Su Valley", basename: p.BASENAME, papel: "territorio",
    nota_rotulo: "na voz e no texto aprovado, \"Mat-Su Valley\"; o nome oficial é Matanuska-Susitna Borough. name_pt leva o texto de tela em inglês de propósito (roupa do pesquisa-geo §4). O rótulo final é do redator-de-tela.",
    GEOID: p.GEOID, COUNTYNS: p.COUNTYNS, LSADC: p.LSADC, FUNCSTAT: p.FUNCSTAT, AREALAND_m2: p.AREALAND, AREAWATER_m2: p.AREAWATER,
    INTPTLAT: +p.INTPTLAT, INTPTLON: +p.INTPTLON, vertices: n, conferencia: conf, license: "Domínio público (U.S. Census Bureau)" },
    geometry: f.geometry }] });
const v = validarFC(fc);
console.log(JSON.stringify({ slug: "matsu-borough", features: v.features, bbox: v.bbox, vertices: n, kb: Math.round(JSON.stringify(fc).length / 1024), conferencia: conf, confere: ok }, null, 1));
if (!ok) { console.error("✗ a conferência de dentro/fora falhou: nada gravado"); process.exit(1); }

if (process.argv.includes("--gravar")) {
  const g = gravarGeo({ slug: "matsu-borough", fc, proj: "juneau", cena: ["s15", "s33", "s39"], origem: {
    fonte: "U.S. Census Bureau — TIGERweb Generalized_ACS2025 Counties 500K, GEOID 02170 (Matanuska-Susitna Borough)", licenca: LIC,
    url: URL_CAMADA, exige_credito: false,
    derivado_por: `out/juneau/_pesquisa/geo-tiger-matsu.mjs --gravar (resposta sha256 ${SHA.slice(0, 12)}…; sem simplificação além da do Census)` } });
  console.error(`✓ matsu-borough\n${relatarGravacao(g)}`);
}
