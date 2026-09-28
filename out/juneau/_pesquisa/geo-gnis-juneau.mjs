#!/usr/bin/env node
// PONTOS DO GNIS (USGS) PARA O RESEARCH DO JUNEAU (pesquisa-geo, 27/09/2026).
//
// O GNIS (Geographic Names Information System) é o registro federal dos nomes geográficos dos EUA, do USGS com
// o U.S. Board on Geographic Names. Obra federal: domínio público (17 U.S.C. §105); o metadado do arquivo diz
// "Use constraints: None. Acknowledgment of the U.S. Geological Survey would be appreciated". Sem crédito na tela
// (identidade.md §7); a procedência fica aqui e na pauta-geo.json.
//
// Cada lugar é UM ponto: o "primary point" que o GNIS dá à feição (num rio, a foz; numa baía ou num canal, um
// ponto de referência para o nome). Não é contorno, não é eixo, não é limite: serve para ancorar o rótulo ou o
// anel. O que cada item NÃO é está nas propriedades (campo nao_e).
//
//   taku-inlet-gnis      Taku Inlet (Bay)        s44   rótulo do braço de mar (o contorno não existe em fonte aberta)
//   lynn-canal-gnis      Lynn Canal (Channel)    s44, s48, s50   rótulo do fiorde (o eixo não existe em fonte aberta)
//   echo-cove-gnis       Echo Cove (Bay, Juneau) s50   onde a Alternativa 2B começava
//   katzehin-river-gnis  Katzehin River (Stream) s50   a foz do rio; o terminal "2 mi ao norte" NÃO é este ponto
//   larson-lake-gnis     Larson Lake (Lake)      s15   o lago que deu nome ao local de 1976; a cidade ficaria na margem
//                                                      oeste dele (folheto de 1976, p. 49); NÃO é o local
//   mount-yenlo-gnis     Mount Yenlo (Summit)    s15   o CUME do monte que deu nome ao local; o local ficava nas encostas
//                                                      ao sul dele (folheto de 1976, p. 50); NÃO é o local
//
// Fonte: https://prd-tnm.s3.amazonaws.com/StagedProducts/GeographicNames/DomesticNames/DomesticNames_AK_Text.zip
// (Last-Modified 28/08/2026, baixado em 27/09/2026), aberto em out/juneau/_tmp/geo-fontes/gnis-ak/.
// Para refazer do zero:
//   curl -o out/juneau/_tmp/geo-fontes/DomesticNames_AK_Text.zip <a URL acima>
//   unzip -o out/juneau/_tmp/geo-fontes/DomesticNames_AK_Text.zip -d out/juneau/_tmp/geo-fontes/gnis-ak
// O arquivo muda a cada edição do GNIS: se o sha256 não bater com o abaixo, o script diz e para; confira as
// linhas escolhidas e atualize o sha256 conscientemente.
//
// Uso (de dentro de C:/projetos/alpha-point):
//   node out/juneau/_pesquisa/geo-gnis-juneau.mjs            (só confere e imprime)
//   node out/juneau/_pesquisa/geo-gnis-juneau.mjs --gravar   (confere e grava)
//   node out/juneau/_pesquisa/geo-gnis-juneau.mjs --gravar --so=larson-lake-gnis,mount-yenlo-gnis   (grava só esses)
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const { gravarGeo, relatarGravacao, validarFC } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");

const GRAVAR = process.argv.includes("--gravar");
const ZIP_URL = "https://prd-tnm.s3.amazonaws.com/StagedProducts/GeographicNames/DomesticNames/DomesticNames_AK_Text.zip";
const ZIP_SHA = "c84f0192f870003016dc88c2d243f2a7f1e4aba8a3d77472cec3f5d46b463eba";   // medido em 27/09/2026
const TXT = "out/juneau/_tmp/geo-fontes/gnis-ak/Text/DomesticNames_AK.txt";
const TXT_SHA = "4ff9df033d78734d31b02773cf605b852fb5c815e0aebb977d8a911d9b761bd9";   // medido em 27/09/2026
const LIC = "Domínio público (USGS GNIS, obra federal — 17 U.S.C. §105); metadado: \"Use constraints: None. Acknowledgment of the U.S. Geological Survey would be appreciated\"";
const hoje = new Date().toISOString().slice(0, 10);

const buf = readFileSync(TXT);
const sha = createHash("sha256").update(buf).digest("hex");
if (sha !== TXT_SHA) { console.error(`✗ ${TXT}: sha256 ${sha.slice(0, 12)}… não é o medido (${TXT_SHA.slice(0, 12)}…). Confira as linhas e atualize.`); process.exit(1); }
const linhas = buf.toString("utf8").replace(/^\uFEFF/, "").split(/\r?\n/).filter(Boolean);
const cab = linhas[0].split("|");
const registros = linhas.slice(1).map((l) => Object.fromEntries(l.split("|").map((v, i) => [cab[i], v])));

// o que tem de bater em cada linha (id, nome, classe, condado/borough) + o que o ponto NÃO é
const LUGARES = [
  { slug: "taku-inlet-gnis", id: "1410576", nome: "Taku Inlet", classe: "Bay", condado: "Juneau", cena: "s44",
    papel: "ponto-de-rotulo", nao_e: "não é o contorno do braço de mar: nem o GNIS, nem o OSM (só um nó natural=bay, node/369142505), nem o Natural Earth (ne_10m_geography_marine_polys) têm o polígono com o nome" },
  { slug: "lynn-canal-gnis", id: "1423488", nome: "Lynn Canal", classe: "Channel", condado: "Juneau", cena: ["s44", "s48", "s50"],
    papel: "ponto-de-rotulo", nao_e: "não é o eixo nem o contorno do fiorde: o GNIS dá um ponto; o OSM não tem feição com esse nome na consulta de 27/09/2026; o Natural Earth não o tem" },
  { slug: "echo-cove-gnis", id: "1421647", nome: "Echo Cove", classe: "Bay", condado: "Juneau", cena: "s50",
    papel: "ponto", nao_e: "é a enseada (Bay), não um ponto da Alternativa 2B desenhado por alguém; há outra Echo Cove no GNIS, em Sitka (1421646), fora daqui" },
  { slug: "katzehin-river-gnis", id: "1422993", nome: "Katzehin River", classe: "Stream", condado: "Haines", cena: "s50",
    papel: "foz", nao_e: "não é o terminal de balsa da Alternativa 2B: a fonte diz só \"a new ferry terminal 2 miles north of the Katzehin River\", sem coordenada; o ponto é a FOZ do rio (primary point do GNIS para curso d'água)" },
  // Larson Lake e Mount Yenlo: o nao_e e o local_1976 foram reescritos em 27/09/2026, depois do verificador, com o que
  // o folheto oficial de 1976 diz de cada local (doc-16 do dossiê, p. 49 e 50, lidas na imagem). A primeira versão
  // dizia que a posição dos locais "não está no dossiê": estava no folheto em disco.
  { slug: "larson-lake-gnis", id: "1405221", nome: "Larson Lake", classe: "Lake", condado: "Matanuska-Susitna", cena: "s15",
    papel: "ponto", nao_e: "não é o local da capital de 1976 chamado Larson Lake: é o lago que dá nome a ele. O folheto oficial de 1976 (doc-16, p. 49 = PDF p. 3) põe o local 5 mi a leste de Talkeetna, nas encostas oeste dos Talkeetna Mountains, e a cidade na margem oeste deste lago: o ponto do lago serve de âncora, mas a cidade ficaria na margem oeste dele, e o contorno do local só existe no mapa da p. 49 (figura do Estado, midia.md §7.1). É o único Larson Lake no GNIS do Alasca",
    local_1976: { pagina: "p. 49 impressa = PDF p. 3",
      o_que_diz: "o local fica a cerca de 120 milhas de estrada ao norte de Anchorage (283 ao sul de Fairbanks) e 5 mi a leste de Talkeetna, nas encostas oeste dos Talkeetna Mountains; é limitado pelo braço norte do Montana Creek ao sul, pelos Talkeetna Mountains ao norte e a leste e pelo Susitna River a oeste; a cidade ficaria na margem oeste do Larson Lake",
      trechos_citados: ["5 miles east of Talkeetna", "A capital city would be located on the west side of Larson Lake"],
      limites: ["1407187", "1410595", "1416406"],
      mapa: "a mesma página tem o mapa LARSON LAKE SITE, com o contorno do local e a área de desenvolvimento junto do lago: figura do Estado, só vai à tela com permissão clara (midia.md §7.1), a cargo do pesquisa-documentos" } },
  { slug: "mount-yenlo-gnis", id: "1412337", nome: "Mount Yenlo", classe: "Summit", condado: "Matanuska-Susitna", cena: "s15",
    papel: "ponto", nao_e: "não é o local da capital de 1976 chamado Mt. Yenlo: é o CUME do monte que dá nome a ele. O folheto oficial de 1976 (doc-16, p. 50 = PDF p. 4) põe o local nas encostas ao sul do monte, limitado pelas Yenlo Hills ao norte, pelo rio Yentna ao sul e a oeste e pelo Lake Creek a leste. O GNIS põe as Yenlo Hills (1412336) a 6 m do cume: um anel aqui fica no limite norte do local, não dentro dele. É o único Mount Yenlo no GNIS do Alasca",
    local_1976: { pagina: "p. 50 impressa = PDF p. 4",
      o_que_diz: "o local fica no oeste do vale do Susitna, a cerca de 110 milhas de estrada projetadas ao norte de Anchorage (340 ao sul de Fairbanks), nas encostas ao sul do Mt. Yenlo; é limitado pelas Yenlo Hills ao norte, pelo rio Yentna ao sul e a oeste e pelo Lake Creek a leste; não tinha estrada nem ferrovia (uma estrada nova de cerca de 50 mi o ligaria à rodovia Anchorage–Fairbanks)",
      trechos_citados: ["located in the southerly foothills of Mt. Yenlo", "bounded by the Yenlo Hills to the north, the Yentna River to the south and west and Lake Creek to the east"],
      limites: ["1412336", "1412339", "1405178"],
      mapa: "a mesma página tem o mapa MT. YENLO SITE, com o contorno do local e a área de desenvolvimento: figura do Estado, só vai à tela com permissão clara (midia.md §7.1), a cargo do pesquisa-documentos" } },
];
const FOLHETO_1976 = "Official Election Pamphlet 1976 (State of Alaska), Ballot Measure: Capital Site Selection, material do Capital Site Selection Committee — doc-16 do dossiê (fundamento.json); https://www.elections.alaska.gov/doc/oep/1976/1976-Ballot-Prop-Bond-Prop.pdf, lido pela cópia http://web.archive.org/web/20161230104844id_/https://www.elections.alaska.gov/doc/oep/1976/1976-Ballot-Prop-Bond-Prop.pdf (captura de 30/12/2016); arquivo local midia/juneau/fontes/documento/verif/oep76.pdf, páginas lidas na imagem em 27/09/2026";
const SO = (process.argv.find((a) => a.startsWith("--so=")) || "").slice(5).split(",").filter(Boolean);

// ---------- conferência de lugar ----------
const km = ([aLon, aLat], [bLon, bLat]) => {
  const R = 6371.0088, r = Math.PI / 180, dLat = (bLat - aLat) * r, dLon = (bLon - aLon) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(aLat * r) * Math.cos(bLat * r) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};
const polys = (g) => (g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : []);
const dentroAnel = ([x, y], anel) => { let d = false; for (let i = 0, j = anel.length - 1; i < anel.length; j = i++) { const [xi, yi] = anel[i], [xj, yj] = anel[j]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) d = !d; } return d; };
const dentro = (p, g) => polys(g).some((poly) => dentroAnel(p, poly[0]) && !poly.slice(1).some((h) => dentroAnel(p, h)));
const ler = (s) => JSON.parse(readFileSync(`out/juneau/_media/geo/${s}.json`, "utf8"));
const TERRA = ler("panhandle-juneau");
const naTerraNE = (p) => TERRA.features.some((f) => dentro(p, f.geometry));
const ESTRADA = ler("estrada-juneau-cascade").features[0].geometry.coordinates;   // de Juneau (início) a Cascade Point (fim)
const CASCADE = ler("cascade-point").features[0].geometry.coordinates;
const JUNEAU = ler("cidades-ne").features.find((f) => f.properties.rotulo === "Juneau").geometry.coordinates;
const HAINES = ler("cidade-haines-osm").features.find((f) => f.geometry.type === "Point").geometry.coordinates;
const SKAGWAY = ler("cidades-ne").features.find((f) => f.properties.rotulo === "Skagway").geometry.coordinates;
const MATSU = JSON.parse(readFileSync("out/juneau/_tmp/geo-fontes/tigerweb-acs2025-counties500k-02170.json", "utf8")).features[0].geometry;   // geo-tiger-matsu.mjs
const WILLOW = ler("cidade-willow-osm").features.find((f) => f.geometry.type === "Point").geometry.coordinates;
const TAKU_FOZ = ler("rio-taku-osm").features[0].geometry.coordinates.at(-1);   // a ponta_b, a foz (-133.964, 58.470); a ponta_a é rio acima
/** distância pela estrada, do vértice mais perto de p até o fim (Cascade Point) */
function milhasAteOFimDaEstrada(p) {
  let iMin = 0, dMin = Infinity; ESTRADA.forEach((q, i) => { const d = km(p, q); if (d < dMin) { dMin = d; iMin = i; } });
  let s = 0; for (let i = iMin + 1; i < ESTRADA.length; i++) s += km(ESTRADA[i - 1], ESTRADA[i]);
  return { da_estrada_km: +dMin.toFixed(2), ate_cascade_point_pela_estrada_mi: +(s / 1.609344).toFixed(2) };
}

/** o ponto primário do GNIS (num curso d'água, a foz) ou a nascente, pelo feature_id */
function pontoGnis(id, qual = "primario") {
  const r = registros.find((x) => x.feature_id === id);
  if (!r) throw new Error(`GNIS ${id}: não está no arquivo`);
  const [lat, lon] = qual === "nascente" ? [+r.source_lat_dec, +r.source_long_dec] : [+r.prim_lat_dec, +r.prim_long_dec];
  if (!lat || !lon) throw new Error(`GNIS ${id}: sem ponto ${qual}`);
  return [+lon.toFixed(6), +lat.toFixed(6)];
}
/** as feições que o folheto dá como limite de um local: o registro do GNIS em resumo (ponto, não geometria) */
function resumoGnis(id) {
  const r = registros.find((x) => x.feature_id === id);
  if (!r || r.state_name !== "Alaska" || r.county_name !== "Matanuska-Susitna") throw new Error(`GNIS ${id}: esperava uma feição do Mat-Su`);
  const nasc = +r.source_lat_dec && +r.source_long_dec ? pontoGnis(id, "nascente") : null;
  return { gnis_id: id, name: r.feature_name, feature_class: r.feature_class, map_name: r.map_name,
    [r.feature_class === "Stream" ? "foz" : "ponto_primario"]: pontoGnis(id), ...(nasc ? { nascente: nasc } : {}),
    gnis_url: `https://edits.nationalmap.gov/apps/gaz-domestic/public/summary/${id}` };
}

const saidas = [], tabela = [];
for (const L of LUGARES) {
  const achados = registros.filter((r) => r.feature_id === L.id);
  if (achados.length !== 1) throw new Error(`${L.id}: ${achados.length} linhas`);
  const r = achados[0];
  if (r.feature_name !== L.nome || r.feature_class !== L.classe || r.county_name !== L.condado || r.state_name !== "Alaska")
    throw new Error(`${L.id}: esperava ${L.nome}/${L.classe}/${L.condado}, veio ${r.feature_name}/${r.feature_class}/${r.county_name}/${r.state_name}`);
  const homonimos = registros.filter((x) => x.feature_name === L.nome).map((x) => `${x.feature_id} (${x.county_name})`);
  const p = [+(+r.prim_long_dec).toFixed(6), +(+r.prim_lat_dec).toFixed(6)];
  const fonte = (+r.source_lat_dec && +r.source_long_dec) ? [+(+r.source_long_dec).toFixed(6), +(+r.source_lat_dec).toFixed(6)] : null;
  const conf = { na_terra_do_ne_1_10m: TERRA.features.length && p[0] > -138.5 && p[0] < -131 && p[1] > 56.6 && p[1] < 61 ? naTerraNE(p) : "fora do recorte panhandle-juneau" };
  if (L.slug === "echo-cove-gnis") Object.assign(conf, { a_km_de_cascade_point: +km(p, CASCADE).toFixed(2), ...milhasAteOFimDaEstrada(p),
    fonte_diz: "a 2B alargava 2,9 milhas da Glacier Highway, de Echo Cove a Cascade Point (fundamento.json, mec-01)" });
  if (L.slug === "katzehin-river-gnis") Object.assign(conf, { a_km_de_haines: +km(p, HAINES).toFixed(1), a_km_de_skagway: +km(p, SKAGWAY).toFixed(1), a_km_de_cascade_point: +km(p, CASCADE).toFixed(1), nascente_gnis: fonte });
  if (L.slug === "taku-inlet-gnis") Object.assign(conf, { a_km_de_juneau: +km(p, JUNEAU).toFixed(1), a_km_da_foz_do_rio_taku_osm: +km(p, TAKU_FOZ).toFixed(1) });
  if (L.slug === "lynn-canal-gnis") Object.assign(conf, { a_km_de_cascade_point: +km(p, CASCADE).toFixed(1), a_km_de_haines: +km(p, HAINES).toFixed(1) });
  if (L.slug === "larson-lake-gnis" || L.slug === "mount-yenlo-gnis") Object.assign(conf, { dentro_do_matsu_borough_census: dentro(p, MATSU), a_km_de_willow_osm: +km(p, WILLOW).toFixed(1) });
  if (L.slug === "larson-lake-gnis") { const T = pontoGnis("1410591"); Object.assign(conf, { a_km_de_talkeetna_gnis_1410591: +km(p, T).toFixed(1), a_mi_de_talkeetna_gnis_1410591: +(km(p, T) / 1.609344).toFixed(1),
    fonte_diz: "o local, 5 mi a leste de Talkeetna; a cidade, na margem oeste do lago (folheto de 1976, p. 49): o ponto do lago fica mais a leste que a cidade" }); }
  if (L.slug === "mount-yenlo-gnis") { const Y = pontoGnis("1412336"); Object.assign(conf, { yenlo_hills_gnis_1412336_a_m: Math.round(km(p, Y) * 1000),
    lake_creek_1405178_foz_e_nascente_a_km: [+km(p, pontoGnis("1405178")).toFixed(1), +km(p, pontoGnis("1405178", "nascente")).toFixed(1)],
    outros_lake_creek_do_matsu_a_km_no_minimo: +Math.min(...["1405169", "1405170", "1405171"].map((id) => km(p, pontoGnis(id)))).toFixed(1),
    fonte_diz: "o local, nas encostas ao sul do monte, entre as Yenlo Hills (N), o Yentna (S e O) e o Lake Creek (L) (folheto de 1976, p. 50): o cume fica no limite norte do local" }); }
  const props = {
    rotulo: L.nome, name: r.feature_name, papel: L.papel, nao_e: L.nao_e,
    ...(L.local_1976 ? { local_1976: { fonte: FOLHETO_1976, ...L.local_1976, limites: L.local_1976.limites.map(resumoGnis) } } : {}),
    gnis_id: r.feature_id, feature_class: r.feature_class, county_name: r.county_name, map_name: r.map_name,
    bgn_type: r.bgn_type || null, bgn_authority: r.bgn_authority || null, date_created: r.date_created, date_edited: r.date_edited,
    prim_lat_dms: r.prim_lat_dms, prim_long_dms: r.prim_long_dms,
    ...(fonte ? { source_point: fonte } : {}),
    homonimos_no_gnis_ak: homonimos, conferencia: conf,
    gnis_url: `https://edits.nationalmap.gov/apps/gaz-domestic/public/summary/${r.feature_id}`,
    license: "Domínio público (USGS GNIS)",
  };
  const fc = { type: "FeatureCollection", properties: { fonte: "USGS GNIS — DomesticNames_AK (Domestic Names, Alaska)", arquivo_fonte: ZIP_URL, sha256_zip: ZIP_SHA, sha256_txt: TXT_SHA, obtido_em: hoje, licenca: LIC },
    features: [{ type: "Feature", properties: props, geometry: { type: "Point", coordinates: p } }] };
  validarFC(fc);
  saidas.push({ L, fc });
  tabela.push({ slug: L.slug, ponto: p, classe: r.feature_class, condado: r.county_name, homonimos: homonimos.length, conferencia: conf });
}
console.log(JSON.stringify(tabela, null, 1));

if (GRAVAR) {
  if (SO.some((s) => !saidas.some((x) => x.L.slug === s))) { console.error(`✗ --so= com slug desconhecido: ${SO.join(",")}`); process.exit(2); }
  for (const { L, fc } of saidas) {
    if (SO.length && !SO.includes(L.slug)) continue;   // --so=a,b grava só esses (os outros ficam como estão no disco)
    const g = gravarGeo({ slug: L.slug, fc, proj: "juneau", cena: L.cena, origem: {
      fonte: `USGS GNIS — feature_id ${L.id} (${L.nome}, ${L.classe})`, licenca: LIC,
      url: `https://edits.nationalmap.gov/apps/gaz-domestic/public/summary/${L.id}`, exige_credito: false,
      derivado_por: `out/juneau/_pesquisa/geo-gnis-juneau.mjs --gravar (DomesticNames_AK.txt, sha256 ${TXT_SHA.slice(0, 12)}…, feature_id ${L.id}; zip ${ZIP_URL})` } });
    console.error(`✓ ${L.slug}\n${relatarGravacao(g)}`);
  }
}
