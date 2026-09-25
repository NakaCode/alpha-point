#!/usr/bin/env node
// PONTOS DE CIDADE DO NATURAL EARTH para os mapas de Juneau — e a conferência terra/água.
//
// Por que existe: a pré-v1 (C:/projetos/regie-v1, commit 7ab9543) baixa a camada
// ne_10m_populated_places_simple (obter-natural-earth.mjs), mas nenhuma ferramenta dela grava PONTOS
// do NE numa produção: o geo-recorte-bbox só recorta polígonos e linhas (Point é ignorado) e o
// geo-grande-circulo só lê pontos. Este script escolhe as cidades pelo ne_id (conferindo nome, país e
// estado), confere cada ponto contra os polígonos do NE 1:10M já recortados para Juneau e grava pelo
// gravarGeo da própria pré-v1 (cache da máquina + out/juneau/_media/geo/cidades-ne.{json,js} + pauta).
//
// Uso (de dentro de C:/projetos/alpha-point):
//   node out/juneau/_pesquisa/cidades-ne.mjs            (só confere e imprime a tabela)
//   node out/juneau/_pesquisa/cidades-ne.mjs --gravar   (confere e grava)
//
// Nada aqui inventa coordenada: o ponto é o do NE. Quando o ponto cai na água do polígono desenhado,
// o script calcula o ponto de terra mais próximo e o registra como DESLOCAMENTO DECLARADO, ao lado da
// coordenada original, que não é apagada.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const COMUM = "file:///C:/projetos/regie-v1/src/geo/comum.mjs";
const NE = "file:///C:/projetos/regie-v1/src/geo/obter-natural-earth.mjs";
const { gravarGeo, relatarGravacao } = await import(COMUM);
const { CAMADAS, COMMIT_NE, urlCamada } = await import(NE);

const CAMADA = "ne_10m_populated_places_simple";
const arqCamada = join(homedir(), ".regie", "geo", "natural-earth", `${CAMADA}.geojson`);
const buf = readFileSync(arqCamada);
const shaCamada = createHash("sha256").update(buf).digest("hex");
if (shaCamada !== CAMADAS[CAMADA].sha256) throw new Error(`sha256 da camada não bate (${shaCamada})`);
const camada = JSON.parse(buf.toString("utf8"));

// Os lugares: ne_id + o que TEM de bater (nome, país, estado). Aproximada = a que as cenas usavam antes.
const LUGARES = [
  { rotulo: "Juneau", ne_id: 1159150555, adm1: "Alaska", aprox: [-134.42, 58.30], janelas: ["panhandle-juneau", "alasca-e-vizinhos"] },
  { rotulo: "Sitka", ne_id: 1159149319, adm1: "Alaska", aprox: null, janelas: ["panhandle-juneau", "alasca-e-vizinhos"] },
  { rotulo: "Skagway", ne_id: 1159147511, adm1: "Alaska", aprox: [-135.31, 59.46], janelas: ["panhandle-juneau", "alasca-e-vizinhos"] },
  { rotulo: "Whitehorse", ne_id: 1159151053, adm1: "Yukon", aprox: null, janelas: ["panhandle-juneau", "alasca-e-vizinhos"] },
  { rotulo: "Anchorage", ne_id: 1159151249, adm1: "Alaska", aprox: [-149.90, 61.22], janelas: ["matsu-anchorage", "alasca-e-vizinhos"] },
  { rotulo: "Wasilla", ne_id: 1159134063, adm1: "Alaska", aprox: [-149.44, 61.58], janelas: ["matsu-anchorage", "alasca-e-vizinhos"] },
  { rotulo: "Fairbanks", ne_id: 1159150557, adm1: "Alaska", aprox: [-147.72, 64.84], janelas: ["alasca-e-vizinhos"] },
];
const CAMPOS = ["ne_id", "name", "adm0name", "adm1name", "featurecla", "scalerank", "pop_max", "latitude", "longitude", "geometry.coordinates"];

// ---------- geometria ----------
const km = ([aLon, aLat], [bLon, bLat]) => {
  const R = 6371, r = Math.PI / 180, dLat = (bLat - aLat) * r, dLon = (bLon - aLon) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(aLat * r) * Math.cos(bLat * r) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};
const dentroAnel = ([x, y], anel) => {
  let d = false;
  for (let i = 0, j = anel.length - 1; i < anel.length; j = i++) {
    const [xi, yi] = anel[i], [xj, yj] = anel[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) d = !d;
  }
  return d;
};
const poligonos = (g) => (g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : []);
const dentroPoly = (p, poly) => dentroAnel(p, poly[0]) && !poly.slice(1).some((h) => dentroAnel(p, h));
function paisEm(p, fc) {
  for (const f of fc.features) if (poligonos(f.geometry).some((poly) => dentroPoly(p, poly))) return f.properties.ADMIN || f.properties.NAME || "terra";
  return null;
}
function lagoEm(p, fc) {
  if (!fc) return null;
  for (const f of fc.features) if (poligonos(f.geometry).some((poly) => dentroPoly(p, poly))) return f.properties.name || "lago sem nome";
  return null;
}
/** O ponto mais próximo sobre qualquer borda de polígono (em metros, projeção local equiretangular). */
function bordaMaisProxima(p, fc) {
  const [lon0, lat0] = p, kx = 111320 * Math.cos((lat0 * Math.PI) / 180), ky = 110540;
  const m = ([x, y]) => [(x - lon0) * kx, (y - lat0) * ky];
  let melhor = null;
  for (const f of fc.features) for (const poly of poligonos(f.geometry)) for (const anel of poly) {
    for (let i = 1; i < anel.length; i++) {
      const a = m(anel[i - 1]), b = m(anel[i]), dx = b[0] - a[0], dy = b[1] - a[1], L = dx * dx + dy * dy;
      let t = L ? -(a[0] * dx + a[1] * dy) / L : 0; t = Math.max(0, Math.min(1, t));
      const q = [a[0] + t * dx, a[1] + t * dy], d = Math.hypot(q[0], q[1]);
      if (!melhor || d < melhor.d) melhor = { d, q, pais: f.properties.ADMIN || f.properties.NAME };
    }
  }
  const volta = ([x, y]) => [lon0 + x / kx, lat0 + y / ky];
  return { ...melhor, ponto: volta(melhor.q), paraLonLat: volta };
}
/** Terra mais próxima: o ponto da borda, empurrado para dentro até o polígono o conter (30, 60, 100… m além da costa). */
function terraMaisProxima(p, fc) {
  const b = bordaMaisProxima(p, fc);
  const dir = [b.q[0] / b.d, b.q[1] / b.d];
  for (const alem of [30, 60, 100, 150, 250, 400]) {
    const c = b.paraLonLat([b.q[0] + dir[0] * alem, b.q[1] + dir[1] * alem]);
    if (paisEm(c, fc)) return { costa: b.ponto, deslocado: c, alem_da_costa_m: alem, distancia_m: Math.round(b.d + alem), pais: b.pais };
  }
  return null;
}
const r5 = (p) => p.map((v) => +v.toFixed(5));

// ---------- os pontos ----------
const GEO = "out/juneau/_media/geo";
const ler = (s) => { try { return JSON.parse(readFileSync(join(GEO, `${s}.json`), "utf8")); } catch { return null; } };
const JANELAS = Object.fromEntries(["panhandle-juneau", "alasca-e-vizinhos", "matsu-anchorage"].map((s) => [s, ler(s)]));
const LAGOS = { "panhandle-juneau": ler("lagos-panhandle"), "alasca-e-vizinhos": ler("lagos-alasca"), "matsu-anchorage": null };

export function conferir(p, janelas) {
  const out = {};
  for (const j of janelas) {
    const fc = JANELAS[j]; if (!fc) continue;
    const pais = paisEm(p, fc), lago = pais ? lagoEm(p, LAGOS[j]) : null;
    const reg = { resultado: pais ? (lago ? `terra, dentro do lago ${lago}` : "terra") : "água", pais };
    if (!pais) {
      const t = terraMaisProxima(p, fc);
      reg.deslocamento_declarado = t && { original: r5(p), deslocado: r5(t.deslocado), costa_mais_proxima: r5(t.costa), distancia_m: t.distancia_m,
        metodo: `ponto da costa do polígono mais próximo do original, empurrado ${t.alem_da_costa_m} m para dentro na mesma direção` };
    } else reg.distancia_ate_borda_m = Math.round(bordaMaisProxima(p, fc).d); // borda = costa, fronteira ou corte da janela
    out[j] = reg;
  }
  return out;
}

const features = [], tabela = [];
for (const L of LUGARES) {
  const f = camada.features.find((x) => x.properties.ne_id === L.ne_id);
  if (!f) throw new Error(`ne_id ${L.ne_id} (${L.rotulo}) não está na camada`);
  const P = f.properties;
  if (P.name !== L.rotulo || P.adm1name !== L.adm1) throw new Error(`ne_id ${L.ne_id}: esperava ${L.rotulo}/${L.adm1}, veio ${P.name}/${P.adm1name}`);
  const homonimos = camada.features.filter((x) => x.properties.name === L.rotulo).length;
  const geom = f.geometry.coordinates, props = [P.longitude, P.latitude];
  const difere = km(geom, props) > 0.01;
  const conf = conferir(geom, L.janelas);
  features.push({ type: "Feature", properties: {
    rotulo: L.rotulo, papel: "ponto", name: P.name, adm0name: P.adm0name, adm1name: P.adm1name, featurecla: P.featurecla,
    scalerank: P.scalerank, pop_max: P.pop_max, ne_id: P.ne_id,
    latitude_longitude_da_tabela: difere ? [P.longitude, P.latitude] : undefined,
    nota: difere ? `A geometria do NE (usada aqui) difere dos campos latitude/longitude da tabela em ${(km(geom, props) * 1000).toFixed(0)} m. A geometria é a que o NE desenha; os campos ficam registrados.` : undefined,
    distancia_da_aproximada_km: L.aprox ? +km(geom, L.aprox).toFixed(2) : undefined,
    conferencia_costa: conf, license: "Domínio público (Natural Earth)" },
    geometry: { type: "Point", coordinates: geom } });
  tabela.push({ lugar: L.rotulo, homonimos, geom, props: difere ? props : null, aprox: L.aprox && +km(geom, L.aprox).toFixed(2), conf,
    conf_props: difere ? conferir(props, L.janelas) : null });
}

const hoje = new Date().toISOString().slice(0, 10);
const fc = JSON.parse(JSON.stringify({ type: "FeatureCollection", properties: {
  fonte: `Natural Earth — ${CAMADA}`, camada: CAMADA, commit: COMMIT_NE, url_camada: urlCamada(CAMADA), sha256_camada: shaCamada,
  campos_usados: CAMPOS, escolha: "por ne_id, conferindo name, adm0name e adm1name (sem homônimo na camada)",
  poligonos_da_conferencia: "panhandle-juneau.json, alasca-e-vizinhos.json e matsu-anchorage.json (NE 1:10M admin-0) e lagos-panhandle/lagos-alasca",
  licenca: "Domínio público (Natural Earth) — sem crédito obrigatório; citável como fonte", url: "https://www.naturalearthdata.com/about/terms-of-use/",
  obtido_em: hoje }, features }));

console.log(JSON.stringify(tabela, null, 1));
if (process.argv.includes("--gravar")) {
  const g = gravarGeo({ slug: "cidades-ne", fc, proj: "juneau", origem: {
    fonte: `Natural Earth — ${CAMADA}`, licenca: "Domínio público (Natural Earth) — sem crédito obrigatório; citável como fonte",
    url: "https://www.naturalearthdata.com/about/terms-of-use/", exige_credito: false,
    derivado_por: `out/juneau/_pesquisa/cidades-ne.mjs --gravar (camada ${CAMADA}, commit ${COMMIT_NE.slice(0, 7)}, sha256 ${shaCamada.slice(0, 12)}…; ne_id ${LUGARES.map((l) => l.ne_id).join(",")})` } });
  console.error(relatarGravacao(g));
}
