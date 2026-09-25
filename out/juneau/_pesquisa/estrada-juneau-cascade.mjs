// A estrada de Juneau até Cascade Point, do OpenStreetMap: como o traçado foi montado (25/09/2026).
//
// O geo-osm-rota da pré-v1 costura os ways de uma relation pelas pontas. A Alaska Route 7
// (relation/535397) tem, em Juneau, pista dupla (Egan Drive) e a rotatória DeHart's: costurada pelas
// pontas, saiu com 21 órfãos e parou no meio do caminho. Aqui, os ways da relation dentro da janela de
// Juneau viram um grafo (vértice = coordenada, porque o OSM liga ways por nó compartilhado), e o caminho
// mais curto vai do ponto do centro de Juneau (Natural Earth) até a ponta norte da Glacier Highway. Esse
// caminho entra no geo-osm-rota como um way só, e ele grava com procedência e licença ODbL.
//
//   node out/juneau/_pesquisa/estrada-juneau-cascade.mjs <saida-dump.json>     (cwd = raiz do canal; usa a rede)
//        [--dump=<resposta-overpass.json>]   refaz a partir de uma resposta já baixada, sem rede
//   node C:/projetos/regie-v1/src/geo/geo-osm-rota.mjs juneau --in=<saida-dump.json> \
//        --nome="Glacier Highway (Alaska Route 7)" --pt="Estrada de Juneau até Cascade Point" --slug=estrada-juneau-cascade --tol=0
//
// Resultado de 25/09/2026: 1.505 vértices, 67,48 km (41,9 milhas), Marine Way → Egan Drive → Glacier Highway
// → DeHart's Traffic Circle → Glacier Highway; ponta norte 58.700137, -134.937863 (o Cascade Point de
// ponto-fim-da-estrada.mjs). O Overpass deu 504 duas vezes antes de responder: espaçar e tentar de novo é o
// uso normal; recusa (403, 429 persistente, captcha) não se contorna.
import { readFileSync, writeFileSync } from "node:fs";

const SAIDA = process.argv.slice(2).find((a) => !a.startsWith("--"));
const LOCAL = process.argv.find((a) => a.startsWith("--dump="))?.slice(7);   // resposta do Overpass já baixada: refaz sem rede
if (!SAIDA) { console.error("uso: node estrada-juneau-cascade.mjs <saida-dump.json> [--dump=<resposta-overpass.json>]"); process.exit(2); }
const contato = JSON.parse(readFileSync("canal.json", "utf8")).contato;
const CONSULTA = '[out:json][timeout:90];rel(535397);way(r)(58.25,-135.1,58.9,-134.3);out geom tags;';
let j;
if (LOCAL) j = JSON.parse(readFileSync(LOCAL, "utf8"));
else {
  const r = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST", headers: { "User-Agent": `regie alpha-point (${contato})`, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ data: CONSULTA }).toString(),
  });
  if (!r.ok) { console.error(`Overpass HTTP ${r.status}: tente de novo mais tarde (504 é sobrecarga; 403/429 é recusa, e recusa não se contorna)`); process.exit(1); }
  j = await r.json();
}
const ways = j.elements.filter((e) => e.type === "way" && e.geometry);

const k = (p) => `${p.lon.toFixed(7)},${p.lat.toFixed(7)}`;
const rad = (x) => (x * Math.PI) / 180;
const hav = (a, b) => { const dl = rad(b.lat - a.lat), dg = rad(b.lon - a.lon); const h = Math.sin(dl / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dg / 2) ** 2; return 2 * 6371.0088 * Math.asin(Math.sqrt(h)); };
const pts = new Map(), adj = new Map();
const liga = (a, b, d, nome) => { if (!adj.has(a)) adj.set(a, []); adj.get(a).push([b, d, nome]); };
for (const w of ways) for (let i = 1; i < w.geometry.length; i++) {
  const p = w.geometry[i], q = w.geometry[i - 1]; pts.set(k(p), p); pts.set(k(q), q);
  const d = hav(p, q); liga(k(p), k(q), d, w.tags.name); liga(k(q), k(p), d, w.tags.name);
}
// início: o vértice mais perto do ponto de Juneau do Natural Earth (cidades-ne); fim: o vértice mais ao norte
const cid = JSON.parse(readFileSync("out/juneau/_media/geo/cidades-ne.json", "utf8")).features.find((f) => f.properties.name === "Juneau");
const J = { lon: cid.geometry.coordinates[0], lat: cid.geometry.coordinates[1] };
let ini = null, dIni = Infinity; for (const [c, p] of pts) { const d = hav(p, J); if (d < dIni) { dIni = d; ini = c; } }
let fim = null, latMax = -90; for (const [c, p] of pts) if (p.lat > latMax) { latMax = p.lat; fim = c; }
const dist = new Map([[ini, 0]]), prev = new Map(), vistos = new Set();
for (;;) {
  let u = null, du = Infinity; for (const [n, d] of dist) if (!vistos.has(n) && d < du) { du = d; u = n; }
  if (u === null || u === fim) break; vistos.add(u);
  for (const [v, d, nome] of adj.get(u) || []) { const nd = du + d; if (nd < (dist.get(v) ?? Infinity)) { dist.set(v, nd); prev.set(v, [u, nome]); } }
}
if (!dist.has(fim)) { console.error("o fim da estrada não se liga ao centro de Juneau nesta janela: confira a relation"); process.exit(1); }
const caminho = [], trechos = []; let c = fim;
while (c) { caminho.unshift(pts.get(c)); const pv = prev.get(c); if (pv) { if (trechos[0] !== pv[1]) trechos.unshift(pv[1]); c = pv[0]; } else c = null; }
writeFileSync(SAIDA, JSON.stringify({ version: 0.6, generator: "alpha-point estrada-juneau-cascade.mjs (caminho mais curto na relation/535397)", osm3s: j.osm3s,
  elements: [{ type: "way", id: 0, tags: { name: "Glacier Highway (Alaska Route 7)" }, geometry: caminho }] }));
const km = dist.get(fim);
console.log(`${caminho.length} vértices · ${km.toFixed(2)} km (${(km / 1.609344).toFixed(1)} milhas) · ${trechos.join(" → ")} · fim ${pts.get(fim).lat}, ${pts.get(fim).lon}`);
