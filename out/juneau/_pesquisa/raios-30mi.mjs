#!/usr/bin/env node
// OS RAIOS DE 30 MILHAS DE ANCHORAGE E FAIRBANKS (s12) — medição, não desenho (pesquisa-geo, 27/09/2026).
//
// A lei de 1974 vetava local "within a radius of 30 miles of the City of Anchorage or Fairbanks" (fundamento.json,
// doc-16; na tela, o resumo oficial "at least 30 miles from Anchorage and Fairbanks"). O círculo aqui é a
// geodésica de 30 milhas terrestres (48,28032 km) em volta do PONTO de cada cidade no Natural Earth
// (cidades-ne.json), calculada pela fórmula direta de Vincenty no elipsoide WGS84, em 360 azimutes (um por grau).
//
// O que ele NÃO é: a linha legal. A lei mede a partir da "City of Anchorage/Fairbanks", e os limites dessas
// cidades em 1974 não estão em geometria nenhuma do canal; o ponto do NE é um ponto da cidade, não o limite dela.
// O círculo mostra a regra em escala, e a cena não o apresenta como a divisa oficial.
//
// Uso (de dentro de C:/projetos/alpha-point):
//   node out/juneau/_pesquisa/raios-30mi.mjs            (só confere e imprime)
//   node out/juneau/_pesquisa/raios-30mi.mjs --gravar   (confere e grava)
import { readFileSync } from "node:fs";

const { gravarGeo, relatarGravacao, validarFC } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");

const MILHA_M = 1609.344, RAIO_MI = 30, RAIO_M = RAIO_MI * MILHA_M;
const rad = Math.PI / 180;

/** Vincenty (1975), problema direto no WGS84: do ponto (lon, lat), azimute az (graus), distância s (m). */
export function vincentyDireto(lon1, lat1, az, s) {
  const a = 6378137, f = 1 / 298.257223563, b = a * (1 - f);
  const a1 = az * rad, sinA1 = Math.sin(a1), cosA1 = Math.cos(a1);
  const tanU1 = (1 - f) * Math.tan(lat1 * rad), cosU1 = 1 / Math.sqrt(1 + tanU1 * tanU1), sinU1 = tanU1 * cosU1;
  const s1 = Math.atan2(tanU1, cosA1);
  const sinA = cosU1 * sinA1, cos2A = 1 - sinA * sinA;
  const u2 = (cos2A * (a * a - b * b)) / (b * b);
  const A = 1 + (u2 / 16384) * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)));
  const B = (u2 / 1024) * (256 + u2 * (-128 + u2 * (74 - 47 * u2)));
  let sig = s / (b * A), sigAnt, cos2Sm, sinS, cosS, it = 0;
  do {
    cos2Sm = Math.cos(2 * s1 + sig); sinS = Math.sin(sig); cosS = Math.cos(sig);
    const dS = B * sinS * (cos2Sm + (B / 4) * (cosS * (-1 + 2 * cos2Sm * cos2Sm) - (B / 6) * cos2Sm * (-3 + 4 * sinS * sinS) * (-3 + 4 * cos2Sm * cos2Sm)));
    sigAnt = sig; sig = s / (b * A) + dS;
  } while (Math.abs(sig - sigAnt) > 1e-12 && ++it < 200);
  cos2Sm = Math.cos(2 * s1 + sig); sinS = Math.sin(sig); cosS = Math.cos(sig);
  const x = sinU1 * sinS - cosU1 * cosS * cosA1;
  const lat2 = Math.atan2(sinU1 * cosS + cosU1 * sinS * cosA1, (1 - f) * Math.sqrt(sinA * sinA + x * x));
  const lam = Math.atan2(sinS * sinA1, cosU1 * cosS - sinU1 * sinS * cosA1);
  const C = (f / 16) * cos2A * (4 + f * (4 - 3 * cos2A));
  const L = lam - (1 - C) * f * sinA * (sig + C * sinS * (cos2Sm + C * cosS * (-1 + 2 * cos2Sm * cos2Sm)));
  return [lon1 + L / rad, lat2 / rad];
}
/** Vincenty, problema inverso no WGS84: a distância (m) entre dois pontos. Serve só para conferir o direto. */
function vincentyInverso(lon1,lat1,lon2,lat2){
  const a=6378137,f=1/298.257223563,b=a*(1-f);
  const L=(lon2-lon1)*rad;
  const U1=Math.atan((1-f)*Math.tan(lat1*rad)),U2=Math.atan((1-f)*Math.tan(lat2*rad));
  const sinU1=Math.sin(U1),cosU1=Math.cos(U1),sinU2=Math.sin(U2),cosU2=Math.cos(U2);
  let lam=L,lamAnt,it=0,sinS,cosS,sig,sinA,cos2A,cos2Sm;
  do{const sinL=Math.sin(lam),cosL=Math.cos(lam);
    sinS=Math.sqrt((cosU2*sinL)**2+(cosU1*sinU2-sinU1*cosU2*cosL)**2);
    cosS=sinU1*sinU2+cosU1*cosU2*cosL; sig=Math.atan2(sinS,cosS);
    sinA=cosU1*cosU2*sinL/sinS; cos2A=1-sinA*sinA; cos2Sm=cosS-2*sinU1*sinU2/cos2A;
    const C=f/16*cos2A*(4+f*(4-3*cos2A)); lamAnt=lam;
    lam=L+(1-C)*f*sinA*(sig+C*sinS*(cos2Sm+C*cosS*(-1+2*cos2Sm*cos2Sm)));
  }while(Math.abs(lam-lamAnt)>1e-12&&++it<200);
  const u2=cos2A*(a*a-b*b)/(b*b);
  const A=1+u2/16384*(4096+u2*(-768+u2*(320-175*u2))),B=u2/1024*(256+u2*(-128+u2*(74-47*u2)));
  const dS=B*sinS*(cos2Sm+B/4*(cosS*(-1+2*cos2Sm*cos2Sm)-B/6*cos2Sm*(-3+4*sinS*sinS)*(-3+4*cos2Sm*cos2Sm)));
  return b*A*(sig-dS);
}
const hav = ([aLon, aLat], [bLon, bLat]) => {
  const R = 6371.0088, dLat = (bLat - aLat) * rad, dLon = (bLon - aLon) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(aLat * rad) * Math.cos(bLat * rad) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const ler = (s) => JSON.parse(readFileSync(`out/juneau/_media/geo/${s}.json`, "utf8"));
const CID = ler("cidades-ne");
const ponto = (n) => { const f = CID.features.find((x) => x.properties.rotulo === n); return { p: f.geometry.coordinates, ne_id: f.properties.ne_id }; };
// para a conferência: as FEIÇÕES que dão nome aos locais de 1976 (não os locais, que não têm coordenada em fonte
// aberta) caem fora dos dois raios. Correção de 27/09/2026, depois do verificador: a primeira versão chamava estes
// pontos de "lugares de 1976" e a vila de Willow de "Willow"; o local de Willow ficava 5 mi a leste da vila, e a
// borda sul dele, no Little Susitna, chega mais perto de Anchorage (TRAVESSIA, abaixo). O folheto de 1976 (doc-16,
// p. 48–50) é a fonte de cada "o local fica…".
const WILLOW = ler("cidade-willow-osm").features.find((x) => x.geometry.type === "Point").geometry.coordinates;
const FORA = {
  "Willow, a vila (OSM; o local ficava 5 mi a leste dela, p. 48)": WILLOW,
  "Larson Lake, o lago (GNIS 1405221; a cidade ficaria na margem oeste dele, p. 49)": [-149.89006, 62.33744],
  "Mount Yenlo, o cume (GNIS 1412337; o local ficava nas encostas ao sul, p. 50)": [-151.27121, 62.148221],
};
// a travessia do Little Susitna pela ferrovia: onde se encontram os limites sul e oeste que o texto da p. 48 dá ao
// local de Willow ("generally bounded"); o ponto vem de limites-sitio-willow-1976.json (OSM). Não é o canto exato do
// local (o mapa da p. 48 o desenha em degraus, a leste de Houston). É só informação: não entra na trava.
const TRAVESSIA = ler("limites-sitio-willow-1976").features.find((f) => f.properties.rotulo === "Alaska Railroad").properties.conferencia.travessia_little_susitna;

const hoje = new Date().toISOString().slice(0, 10);
const saidas = [];
for (const [slug, nome] of [["raio-30mi-anchorage", "Anchorage"], ["raio-30mi-fairbanks", "Fairbanks"]]) {
  const { p, ne_id } = ponto(nome);
  const anel = [];
  for (let az = 0; az < 360; az++) anel.push(vincentyDireto(p[0], p[1], az, RAIO_M).map((v) => +v.toFixed(6)));
  anel.push(anel[0]);
  const inv = anel.map((q) => vincentyInverso(p[0], p[1], q[0], q[1]));
  const conf = { vincenty_inverso_min_m: +Math.min(...inv).toFixed(2), vincenty_inverso_max_m: +Math.max(...inv).toFixed(2), esperado_m: RAIO_M,
    nota: "a distância de cada vértice ao centro, medida de volta pelo Vincenty inverso (os vértices estão arredondados a 6 casas, ~0,1 m)",
    feicoes_de_1976_a_distancia_mi: Object.fromEntries(Object.entries(FORA).map(([k, q]) => [k, +(hav(p, q) / 1.609344).toFixed(1)])),
    travessia_little_susitna_ferrovia_a_distancia_mi: { ponto: TRAVESSIA, mi: +(hav(p, TRAVESSIA) / 1.609344).toFixed(1),
      o_que_e: "onde a ferrovia cruza o Little Susitna, o encontro dos limites sul e oeste que o folheto de 1976 (p. 48) dá ao local de Willow (\"generally bounded\"); ponto de limites-sitio-willow-1976.json (OSM). Não é o canto exato do local",
      nota: "a lei mede a partir da \"City of Anchorage\", não de um ponto: um lugar a menos de 30 mi do ponto do NE não prova nada sobre a lei" } };
  const fc = { type: "FeatureCollection", properties: { fonte: "medição sobre o ponto do Natural Earth (ne_10m_populated_places_simple, via cidades-ne.json)", obtido_em: hoje },
    features: [{ type: "Feature", properties: {
      rotulo: "", papel: "raio", centro: nome, centro_lonlat: p, centro_ne_id: ne_id, raio_mi: RAIO_MI, raio_m: RAIO_M,
      metodo: "Vincenty direto, elipsoide WGS84, 360 azimutes (1°), fechado no primeiro vértice",
      nao_e: "não é a divisa legal: a lei de 1974 mede \"within a radius of 30 miles of the City of Anchorage or Fairbanks\" (doc-16), e os limites de 1974 dessas cidades não estão em geometria nenhuma do canal; o centro é o ponto da cidade no NE",
      conferencia: conf, license: "Domínio público (derivado do Natural Earth)" },
      geometry: { type: "Polygon", coordinates: [anel] } }] };
  validarFC(fc);
  saidas.push({ slug, fc });
  console.log(JSON.stringify({ slug, centro: p, vertices: anel.length, conferencia: conf }, null, 1));
  const fora = Object.values(conf.feicoes_de_1976_a_distancia_mi).every((mi) => mi > RAIO_MI);
  if (Math.abs(conf.vincenty_inverso_min_m - RAIO_M) > 1 || Math.abs(conf.vincenty_inverso_max_m - RAIO_M) > 1 || !fora) { console.error(`✗ ${slug}: conferência falhou`); process.exit(1); }
}

if (process.argv.includes("--gravar")) {
  for (const { slug, fc } of saidas) {
    const g = gravarGeo({ slug, fc, proj: "juneau", cena: "s12", origem: {
      fonte: "Medição do canal sobre o ponto do Natural Earth (ne_10m_populated_places_simple)", licenca: "Domínio público (derivado do Natural Earth) — sem crédito obrigatório",
      url: "https://www.naturalearthdata.com/about/terms-of-use/", exige_credito: false,
      derivado_por: "out/juneau/_pesquisa/raios-30mi.mjs --gravar (Vincenty direto, WGS84, 30 mi = 48.28032 km, 360 azimutes, centro em cidades-ne.json)" } });
    console.error(`✓ ${slug}\n${relatarGravacao(g)}`);
  }
}
