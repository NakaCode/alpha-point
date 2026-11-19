// Gera os pontos de terra (lon, lat) de uma grade, para os banners de pontos (D, E e F; 19/11/2026).
// A terra é o Natural Earth 1:110m (países; domínio público), lido só para leitura do acervo da pré-v1.
// Uso: node terra-pontos.mjs <esfera|grade> <passo_graus> <lonMin> <lonMax> <latMin> <latMax> <saida.js> <variavel>
//   esfera: espaçamento igual sobre a esfera (o passo de longitude cresce com a latitude), para o globo e o horizonte;
//   grade: passos iguais de longitude e latitude, para o mapa plano.
import { readFileSync, writeFileSync } from "node:fs";

const [modo, passo, lonMin, lonMax, latMin, latMax, saida, nome] = process.argv.slice(2);
if (!nome || !["esfera", "grade"].includes(modo)) {
  console.error("uso: node terra-pontos.mjs <esfera|grade> <passo> <lonMin> <lonMax> <latMin> <latMax> <saida.js> <variavel>");
  process.exit(2);
}
const geo = JSON.parse(readFileSync("C:/projetos/regie-v1/acervo/geojson/ne110m-admin0-countries.json", "utf8"));
const polys = [];
for (const f of geo.features) {
  const g = f.geometry;
  if (!g) continue;
  const lista = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : [];
  for (const p of lista) {
    let a = 180, b = -180, c = 90, d = -90;
    for (const [x, y] of p[0]) { if (x < a) a = x; if (x > b) b = x; if (y < c) c = y; if (y > d) d = y; }
    polys.push({ aneis: p, caixa: [a, b, c, d] });
  }
}
function dentro(x, y, anel) {
  let d = false;
  for (let i = 0, j = anel.length - 1; i < anel.length; j = i++) {
    const [xi, yi] = anel[i], [xj, yj] = anel[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) d = !d;
  }
  return d;
}
function terra(x, y) {
  for (const p of polys) {
    const [a, b, c, d] = p.caixa;
    if (x < a || x > b || y < c || y > d) continue;
    if (!dentro(x, y, p.aneis[0])) continue;
    let buraco = false;
    for (let k = 1; k < p.aneis.length; k++) if (dentro(x, y, p.aneis[k])) { buraco = true; break; }
    if (!buraco) return true;
  }
  return false;
}
const P = Number(passo), L0 = Number(lonMin), L1 = Number(lonMax), F0 = Number(latMin), F1 = Number(latMax);
const pts = [];
for (let lat = F0; lat <= F1 + 1e-9; lat += P) {
  const pl = modo === "esfera" ? P / Math.max(0.12, Math.cos((lat * Math.PI) / 180)) : P;
  // a grade de cada linha começa meio passo deslocada nas linhas ímpares (o desenho de colmeia fica mais limpo)
  const linha = Math.round((lat - F0) / P);
  const desloca = modo === "esfera" && linha % 2 ? pl / 2 : 0;
  for (let lon = L0 + desloca; lon <= L1 + 1e-9; lon += pl) {
    // o teste usa a longitude em −180…180; o ponto guarda a da grade (pode passar de ±180), para o mapa plano não ter costura
    const x = lon > 180 ? lon - 360 : lon < -180 ? lon + 360 : lon;
    if (terra(x, lat)) pts.push([+lon.toFixed(3), +lat.toFixed(3)]);
  }
}
writeFileSync(saida, `window.${nome} = ${JSON.stringify(pts)};\n`);
console.log(`ok ${pts.length} pontos -> ${saida}`);
