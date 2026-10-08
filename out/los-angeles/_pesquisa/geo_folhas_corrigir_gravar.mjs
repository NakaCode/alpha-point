#!/usr/bin/env node
// Grava as camadas corrigidas das folhas antigas do USGS (geo_folhas_corrigir.py, 08/10/2026) pelo gravarGeo da pré-v1 e completa os itens da
// pauta com o método, a medida, o ponto fixo, a incerteza. As camadas de origem não mudam. Uso, da raiz do canal:
//   node out/los-angeles/_pesquisa/geo_folhas_corrigir_gravar.mjs
import { readFileSync, writeFileSync } from "node:fs";
const { gravarGeo, relatarGravacao } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const DIR = "out/los-angeles/_tmp/geo-corrigidas";
const LIC = "Domínio público (USGS: \"USGS-authored or produced data and information are considered to be in the U.S. Public Domain\" — https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits, lido em 2026-10-07); a referência da medida (USGS 3DEP) também é domínio público; sem crédito obrigatório";
const T = "https://prd-tnm.s3.amazonaws.com/StagedProducts/Maps/HistoricalTopo/GeoTIFF/CA/";
const DEM = "USGS 3DEP (elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer/exportImage, 08/10/2026)";
const C = {
  "long-wharf-usgs1903-corrigido": { cena: "s19",
    fonte: "USGS 1:62.500, folha \"Calabasas, Calif.\" de 1903 (item 465394): o píer de Port Los Angeles (long-wharf-usgs1903) deslocado 180 m para leste e 130 m para norte, o deslocamento da folha medido no relevo", url: `${T}CA_Calabasas_465394_1903_62500_geo.tif`,
    sha256_fonte: "b9f7442a20469768fcb6adc76d837723a5b40218b9a970f2c51fae4347204bda; dem.tif 54fd971d73746b130a7d5753de268897f8e6920f415cd19ff45f319e35e9353e",
    metodo: `curvas de 50 ft da folha contra as de hoje (${DEM}), correlação numa grade de ±350 m a cada 10 m (geo_folha_deslocamento.py relevo)`,
    ponto_fixo: "o relevo: a falésia de Pacific Palisades e os cânions de Santa Monica, Rustic e Temescal",
    medida: "a folha desenha o lugar 180 m a oeste e 130 m ao sul (222 m). 4 janelas em volta do píer: (-180,-130), (-170,-140), (-180,-130), (-230,-130); a janela oeste (-118.56 a -118.535) não fechou (pico na borda da busca) e ficou fora",
    incerteza: "±50 m: a dispersão entre janelas é de 60 m em leste e 10 m em norte, e o 2º pico da correlação fica a ~40 m do 1º com nota só 5–6 % menor (comparação fraca: a folha generaliza o relevo). Conferência independente: a raiz corrigida cai a 3 m da costa de hoje do OSM (antes, 202 m); mais ±11 m de leitura do traço" },
  "molhe-1871-usgs1896-corrigido": { cena: "s12",
    fonte: "USGS 1:62.500, folha \"San Pedro, Calif.\" de 1896 (item 298928): o molhe de Rattlesnake Island a Deadman's Island (molhe-1871-usgs1896) deslocado 200 m para leste e 185 m para norte, o deslocamento da folha medido no relevo", url: `${T}CA_San%20Pedro_298928_1896_62500_geo.tif`,
    sha256_fonte: "8ab2f51ffb2beebf1fa078048d9ae9c78ba8e4412f60a9002d72de4371b79500; dem-sp.tif 1c5fdee7226dc051355b84ca6eaaac4dcbe03b5e352bbf5f10d46f17a10e5595",
    metodo: `curvas de 50 ft da folha contra as de hoje (${DEM}), correlação numa grade de ±300 m a cada 10 m (geo_folha_deslocamento.py relevo)`,
    ponto_fixo: "o relevo dos morros de San Pedro e de Palos Verdes",
    medida: "a folha desenha o lugar 200 m a oeste e 185 m ao sul (272 m). 4 janelas de -118.35 a -118.28: (-200,-190), (-200,-190), (-170,-170), (-210,-180); mediana (-200,-185)",
    incerteza: "±50 m: dispersão de 40 m em leste e 20 m em norte entre as janelas; 2º pico a ~40 m. Conferência independente: Deadman's Island corrigida fica a 51–85 m da que a folha de 1923 desenha (antes, 247 m); mais ±11 m de leitura" },
  "pontos-historicos-usgs-corrigidos": { cena: null,
    fonte: "USGS HistoricalTopo, os 4 pontos de pontos-historicos-usgs, cada um corrigido pelo deslocamento medido da sua folha: Deadman's Island e Rattlesnake Island (San Pedro 1896: +200 m E, +185 m N), Port Los Angeles (Calabasas 1903: +180 m E, +130 m N); o farol (Wilmington 1923) trocado pela posição de hoje do mesmo farol (OSM way/1312710274)", url: `${T}CA_San%20Pedro_298928_1896_62500_geo.tif ; ${T}CA_Calabasas_465394_1903_62500_geo.tif ; https://www.openstreetmap.org/way/1312710274`,
    sha256_fonte: "8ab2f51f…9500; b9f7442a…4bda; dem.tif 54fd971d…353e; dem-sp.tif 1c5fdee7…5595; Overpass dump3.json 42e621a3…d638",
    metodo: "as medidas das camadas -corrigido(a) acima, ponto por ponto pela folha de origem; o farol de 1913 existe hoje, e a posição de hoje substitui a leitura",
    ponto_fixo: "relevo (3DEP) para as folhas de 1896 e 1903; o próprio farol, para 1923",
    medida: "Deadman's Island: 272 m (folha de 1896); Rattlesnake Island: 272 m (folha de 1896, a ~2 km a leste das janelas de relevo); Port Los Angeles: 222 m (folha de 1903); farol: 48 m (folha de 1923 contra o farol de hoje)",
    incerteza: "Deadman's ±50 m; Rattlesnake ±60 m (fora das janelas medidas, mas as 4 janelas concordam em ±20 m ao longo de 7 km); Port Los Angeles ±50 m; farol ±5 m (o OSM cai a 2 m da coordenada da Wikipedia)",
    exige_credito: true, licenca: "Três pontos do USGS (domínio público); o farol é do OpenStreetMap: ODbL 1.0, exige atribuição © OpenStreetMap contributors (lido em 2026-10-08)" },
};
for (const [slug, o] of Object.entries(C)) {
  const fc = JSON.parse(readFileSync(`${DIR}/${slug}.json`, "utf8"));
  const g = gravarGeo({ slug, fc, proj: "los-angeles", cena: o.cena, origem: { fonte: o.fonte, licenca: o.licenca || LIC, url: o.url, exige_credito: !!o.exige_credito,
    derivado_por: "out/los-angeles/_pesquisa/geo_folha_deslocamento.py + geo_folhas_corrigir.py + geo_folhas_corrigir_gravar.mjs (08/10/2026)" } });
  console.error(`✓ ${slug}\n${relatarGravacao(g)}`);
}
const arq = "out/los-angeles/_pesquisa/pauta-geo.json";
const pauta = JSON.parse(readFileSync(arq, "utf8"));
for (const it of pauta.itens) {
  const slug = it.arquivo.replace(/^_media\/geo\//, "").replace(/\.json$/, ""); const o = C[slug]; if (!o) continue;
  Object.assign(it, { sha256_fonte: o.sha256_fonte, datum: "NAD27 da folha convertido a WGS84, depois deslocado pela medida", simplificacao: "nenhuma (os vértices da camada de origem, deslocados)",
    metodo: o.metodo, ponto_fixo: o.ponto_fixo, medida: o.medida, incerteza: o.incerteza, licenca_lida_em: "2026-10-08",
    na_tela: o.exige_credito ? "o farol vem do OSM: © OpenStreetMap contributors na tela da cena que o mostrar (a linha da MapTiler já o leva); os outros pontos, domínio público" : "domínio público: sem crédito obrigatório" });
}
pauta.nota += " 4ª rodada (08/10/2026, conferência das folhas antigas do USGS): long-wharf-usgs1903-corrigido, molhe-1871-usgs1896-corrigido e pontos-historicos-usgs-corrigidos; as camadas de origem ficam como estão; a divisa de Terminal Island (1923) não foi medida no lugar e não ganhou corrigida. Relato: geo-folhas-usgs-relato.md.";
writeFileSync(arq, JSON.stringify(pauta, null, 2) + "\n");
console.error(`pauta: ${pauta.itens.length} itens`);
