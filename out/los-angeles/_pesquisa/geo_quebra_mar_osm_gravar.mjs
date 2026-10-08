#!/usr/bin/env node
// Grava a camada quebra-mar-osm (o San Pedro Breakwater de hoje, eixo derivado do OSM) pelo gravarGeo da pré-v1 e completa o item
// da pauta com os campos do canal. Entrada: out/los-angeles/_tmp/geo-quebra-mar/resultado.json (geo_quebra_mar_osm.py).
// Uso, de dentro de C:/projetos/alpha-point:  node out/los-angeles/_pesquisa/geo_quebra_mar_osm_gravar.mjs
import { readFileSync, writeFileSync } from "node:fs";
const { gravarGeo, relatarGravacao } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const r = JSON.parse(readFileSync("out/los-angeles/_tmp/geo-quebra-mar/resultado.json", "utf8"));
const r6 = (p) => [+p[0].toFixed(6), +p[1].toFixed(6)];
const fc = { type: "FeatureCollection", features: [{ type: "Feature", properties: {
  name: "San Pedro Breakwater (completed 1912; OpenStreetMap, today)", name_pt: "San Pedro Breakwater", rotulo: "BREAKWATER", papel: "obra",
  osm: "way/524838430 + way/1312790328 (man_made=breakwater), coastline way/41645427 + way/448064329, lighthouse way/1312710274",
  raiz: r6(r.raiz_ini), ponta_do_aterro: r6(r.juncao), farol: r6(r.farol),
  m_total: Math.round(r.L), ft_total: Math.round(r.L / 0.3048), m_no_mar: Math.round(r.La), ft_no_mar: Math.round(r.La / 0.3048),
  src: "OpenStreetMap via Overpass API — ODbL 1.0, exige atribuição © OpenStreetMap contributors" },
  geometry: { type: "LineString", coordinates: r.linha.map(r6) } }] };
const fonte = "OpenStreetMap via Overpass API (08/10/2026): eixo do San Pedro Breakwater derivado pela pesquisa-geo — no mar, a média das duas margens do polígono way/1312790328 (man_made=breakwater), da ponta do aterro de Cabrillo Beach ao farol Los Angeles Light / Angels Gate (way/1312710274); na raiz, o meio entre as margens do aterro (coastline way/41645427 ao norte e way/448064329 ao sul), até onde ele encontra a terra";
const g = gravarGeo({ slug: "quebra-mar-osm", fc, proj: "los-angeles", cena: "s29", origem: {
  fonte, licenca: "ODbL 1.0 — exige atribuição © OpenStreetMap contributors (https://www.openstreetmap.org/copyright: \"You are free to copy, distribute, transmit and adapt our data, as long as you credit OpenStreetMap and its contributors\", lido em 2026-10-08)",
  url: "https://www.openstreetmap.org/way/1312790328", exige_credito: true,
  derivado_por: "out/los-angeles/_pesquisa/geo_quebra_mar_osm.py + geo_quebra_mar_osm_gravar.mjs (08/10/2026)" } });
console.error(`✓ quebra-mar-osm\n${relatarGravacao(g)}`);
const arq = "out/los-angeles/_pesquisa/pauta-geo.json";
const pauta = JSON.parse(readFileSync(arq, "utf8"));
const it = pauta.itens.find((x) => x.arquivo === "_media/geo/quebra-mar-osm.json");
Object.assign(it, {
  sha256_fonte: "42e621a35c908b7f5a8f5ee4a705b9aa8d5419c6bcb70a2ab2304c82bc36d638",
  datum: "WGS84 (OSM)",
  simplificacao: "Douglas-Peucker a 1 m sobre o eixo de 406 pontos: 34 vértices",
  incerteza: "eixo de polígono traçado no OSM sobre imagem (versão 1 dos ways, 02/09/2024); conferido contra fonte independente: a margem da água do TIGER 2025 (agua-porto-hoje-tiger) fica a 1–13 m do eixo no trecho leste (meia largura do muro, ~17 m), e o farol do OSM cai a 2 m da coordenada da Wikipedia (33.70857, -118.25160). Incerteza declarada: ±10 m no trecho no mar; ±20 m na raiz sobre o aterro (o eixo ali é o meio do aterro de hoje, sobre o muro enterrado)",
  comprimento: `${Math.round(r.L)} m = ${Math.round(r.L / 0.3048)} ft da terra de hoje ao farol (${Math.round(r.La)} m = ${Math.round(r.La / 0.3048)} ft no mar, da ponta do aterro ao farol)`,
  deslocamento_vs_usgs1923: "a linha de 1923 corre ao norte da de hoje: 53–59 m (mediana 58) no trecho reto leste; 9–47 m na curva e na raiz (mediana 29); no farol, o fim da linha de 1923 fica a 81 m do farol de hoje, e o ponto do farol de 1923 (pontos-historicos-usgs) a 48 m",
  licenca_lida_em: "2026-10-08",
  na_tela: "© OpenStreetMap contributors na tela da cena (o crédito da MapTiler já o leva); openstreetmap.org/copyright na descrição" });
pauta.nota += " 3ª rodada (08/10/2026, pedido do qc na s29): quebra-mar-osm, o San Pedro Breakwater de hoje pelo OSM; a camada quebra-mar-usgs1923 fica como está. Relato: geo-quebra-mar-relato.md.";
writeFileSync(arq, JSON.stringify(pauta, null, 2) + "\n");
console.error(`pauta: ${pauta.itens.length} itens`);
