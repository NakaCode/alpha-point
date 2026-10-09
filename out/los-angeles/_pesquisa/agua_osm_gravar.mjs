#!/usr/bin/env node
// Grava a camada agua-osm-la (o mar e o porto do OpenStreetMap, para o tom --agua-base dos mapas do porto; identidade §6, "A água
// escura nos mapas do porto") pelo gravarGeo da pré-v1: o cache da máquina, _media/geo/agua-osm-la.json e .js (o que a cena
// carrega) e o item do pauta-geo.json. Escreve também o GeoJSON pedido, _media/geo/agua-osm-la.geojson (os mesmos bytes do .json),
// e o _PROCEDENCIA.json da pasta _media/geo, com a entrada desta camada.
// Entrada: out/los-angeles/_tmp/agua/work/agua-osm-la.geojson e resumo.json (agua_osm_construir.py).
// Uso, de dentro de C:/projetos/alpha-point:  node out/los-angeles/_pesquisa/agua_osm_gravar.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
const { gravarGeo, relatarGravacao } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const W = "out/los-angeles/_tmp/agua/work/";
const fc = JSON.parse(readFileSync(W + "agua-osm-la.geojson", "utf8"));
const r = JSON.parse(readFileSync(W + "resumo.json", "utf8"));
const sha = (s) => createHash("sha256").update(s).digest("hex");
const ZIP = { arquivo: "water-polygons-split-4326.zip", bytes: 906106868,
  sha256: "0b52c5995c461c7f3f3bd400155b7f19f6482dd6352f8dbd7587afdddc4d8c93", last_modified: "Thu, 08 Oct 2026 03:47:23 GMT",
  url: "https://osmdata.openstreetmap.de/download/water-polygons-split-4326.zip", baixado_em: "08/10/2026 17:36 (Brasília), com o sim do Lucas" };
const CENAS = ["s01", "s05", "s07", "s12", "s14", "s19", "s21", "s23", "s26", "s29", "s31", "s46", "s49", "s53", "s55"];
const fonte = "OpenStreetMap water polygons (osmdata.openstreetmap.de, water-polygons-split-4326.zip, Last-Modified 2026-10-08 03:47:23 UTC): " +
  "o mar fechado pela costa natural=coastline, recortado à caixa das câmeras do vídeo 2 (-120.40, 32.80, -116.30, 34.95); somadas as águas " +
  "do porto de Long Beach que a costa fecha (Shoreline Marina way/428829750, Rainbow Harbor way/428829751, a foz do LA River com Queensway " +
  "Bay way/30824975, natural=water, Overpass 2026-10-08 20:54Z); tirados o San Pedro Breakwater (o eixo quebra-mar-osm com folga de 15 m) e " +
  `${r.estruturas_tiradas.length} estruturas em área do OSM (man_made=breakwater/pier/groyne/lighthouse, Overpass 2026-10-08 20:46Z)`;
const licenca = "ODbL 1.0 — exige atribuição © OpenStreetMap contributors (https://osmdata.openstreetmap.de/info/license.html: dados \"Copyright " +
  "OpenStreetMap contributors\" sob a ODbL; https://www.openstreetmap.org/copyright: \"You are free to copy, distribute, transmit and adapt our " +
  "data, as long as you credit OpenStreetMap and its contributors\"; lido em 2026-10-08)";
const antes = readFileSync("out/los-angeles/_pesquisa/pauta-geo.json", "utf8");
writeFileSync(W + "pauta-geo.antes-agua.json", antes);
const g = gravarGeo({ slug: "agua-osm-la", fc, proj: "los-angeles", cena: CENAS.join(" "), origem: {
  fonte, licenca, url: "https://osmdata.openstreetmap.de/data/water-polygons.html", exige_credito: true,
  derivado_por: "out/los-angeles/_pesquisa/agua_osm_extrair.py + agua_osm_construir.py + agua_osm_gravar.mjs (08/10/2026)" } });
console.error(`✓ agua-osm-la\n${relatarGravacao(g)}`);
// o GeoJSON pedido: os mesmos bytes do .json da produção
const json = readFileSync("out/los-angeles/_media/geo/agua-osm-la.json", "utf8");
writeFileSync("out/los-angeles/_media/geo/agua-osm-la.geojson", json);
const shaJson = sha(json);
if (shaJson !== g.sha256) throw new Error("o .json gravado não bate com o sha do gravarGeo");
const shaJs = sha(readFileSync("out/los-angeles/_media/geo/agua-osm-la.js", "utf8"));
const nv = (c) => (typeof c[0] === "number" ? 1 : c.reduce((a, x) => a + nv(x), 0));
const vertices = nv(fc.features[0].geometry.coordinates);
const enc = JSON.parse(readFileSync("out/los-angeles/_tmp/agua/encaixe/medidas.json", "utf8"));
const encM = JSON.parse(readFileSync("out/los-angeles/_tmp/agua/encaixe/medidas-muros.json", "utf8"));
const comum = {
  camada: "agua-osm-la", papel: "a água da base (tom --agua-base #061416, opaco, logo acima do satélite e abaixo de tudo o que a cena desenha)",
  fonte: { provedor: "OpenStreetMap (osmdata.openstreetmap.de, water polygons; Overpass API)", pagina_url: "https://osmdata.openstreetmap.de/data/water-polygons.html",
    download_url: ZIP.url, licenca: "ODbL 1.0", credito_na_tela: "© OpenStreetMap contributors (já na linha © MapTiler © OpenStreetMap contributors)" },
  url: ZIP.url, licenca: "ODbL 1.0 — © OpenStreetMap contributors", arquivo_fonte: ZIP,
  overpass: { estruturas: r.overpass_base, aguas_internas: r.overpass_aguas_base, endpoint: "https://overpass-api.de/api/interpreter",
    user_agent: "alpha-point-canal (contato.naka@hotmail.com)" },
  recorte: { caixa_lonlat: r.caixa, porque: "a união dos quadros de todas as cenas de mapa do vídeo 2 a 30 fps, com o giro, e os da s05 com zoom >= 9,5; folga mínima de 10,4 km (s05, t = 27,9 s) — agua_caixa_conferir.mjs" },
  quebra_mar_san_pedro: { geometria: "_media/geo/quebra-mar-osm.json (eixo do way/1312790328)", folga_m: 15, buraco_m2: r.muro_m2_tirado },
  estruturas_tiradas: r.estruturas_tiradas.length, aguas_do_porto_somadas: r.aguas_do_porto_somadas.map((x) => x.osm),
  simplificacao: `Douglas-Peucker com topologia a 1,2 m em metros locais; deslocamento máximo medido ${r.desloc_max_m} m (p99,9 ${r.desloc_p999_m} m), ${r.vertices_antes} → ${r.vertices_depois} vértices`,
  feicoes: fc.features.length, poligonos: r.poligonos, buracos: r.buracos, vertices,
  derivado_por: "out/los-angeles/_pesquisa/agua_osm_extrair.py, agua_osm_construir.py, agua_osm_gravar.mjs", registrado: "2026-10-08", por: "pesquisa-geo" };
const procArq = "out/los-angeles/_media/geo/_PROCEDENCIA.json";
const proc = existsSync(procArq) ? JSON.parse(readFileSync(procArq, "utf8")) : {};
proc["agua-osm-la.geojson"] = { ...comum, sha256: shaJson, bytes: Buffer.byteLength(json) };
proc["agua-osm-la.json"] = { ...comum, sha256: shaJson, bytes: Buffer.byteLength(json), nota: "os mesmos bytes do .geojson; é o que o gravarGeo registra" };
proc["agua-osm-la.js"] = { ...comum, sha256: shaJs, nota: "o envoltório que a cena carrega (window.__GEO / __GEO_META), com o mesmo GeoJSON" };
writeFileSync(procArq, JSON.stringify(proc, null, 2) + "\n");
// o item da pauta, com os campos do canal
const arq = "out/los-angeles/_pesquisa/pauta-geo.json";
const pauta = JSON.parse(readFileSync(arq, "utf8"));
const it = pauta.itens.find((x) => x.arquivo === "_media/geo/agua-osm-la.json");
const sp = (k) => encM[k]?.muros?.["San Pedro Breakwater (buraco: eixo quebra-mar-osm, folga 15 m)"];
Object.assign(it, {
  arquivo_geojson: "_media/geo/agua-osm-la.geojson",
  bytes: Buffer.byteLength(json), vertices, poligonos: r.poligonos, buracos: r.buracos,
  sha256_fonte: ZIP.sha256, arquivo_fonte: `${ZIP.arquivo} (${ZIP.bytes} bytes), Last-Modified ${ZIP.last_modified}, em _media/geo/_osm-agua/ (fora do git)`,
  data_do_arquivo: "2026-10-08 03:47:23 UTC (osmdata); Overpass 2026-10-08 20:46:34Z (estruturas) e 20:54:50Z (águas internas)",
  datum: "WGS84 (EPSG:4326, a variante 4326 do osmdata)",
  recorte: "caixa -120.40, 32.80, -116.30, 34.95 (lon, lat): a união de todos os quadros das 24 cenas de mapa a 30 fps, com o giro, e os da s05 com zoom >= 9,5; folga mínima de 10,4 km da borda (s05, t = 27,9 s); nas outras 23 cenas, de 46 a 98 km",
  folga: "San Pedro Breakwater: o eixo quebra-mar-osm com 15 m para cada lado (30 m). A crista clara da foto mede 6,6 a 18 m de largura (mediana por cena) e corre 1 a 4 m ao lado do eixo do OSM; o polígono do OSM (way/1312790328) tem 42 m de largura mediana, e deixaria 13 a 18 m de água crua de cada lado. Com 15 m, 93 a 98 % dos perfis têm o muro inteiro fora do tom (agua_encaixe_muros.py)",
  quebra_mares: "Middle Breakwater (way/4883616) e Long Beach Breakwater (way/4883682) já vêm como terra (natural=coastline): 0 m² na água; o San Pedro Breakwater (way/1312790328, só man_made=breakwater) vinha inteiro na água e saiu pelo eixo com a folga",
  estruturas_tiradas: `${r.estruturas_tiradas.length} áreas man_made=breakwater/pier/groyne/lighthouse que caíam na água (${r.estruturas_tiradas.reduce((a, x) => a + x.m2_na_agua, 0)} m²), lista em out/los-angeles/_tmp/agua/work/resumo.json; ${r.pier_linhas_na_agua_mantidas} píeres em linha (sem largura no OSM: vagas de marina, píeres flutuantes) ficam na água`,
  aguas_do_porto_somadas: "Long Beach Shoreline Marina (way/428829750), Rainbow Harbor (way/428829751) e a foz do LA River com Queensway Bay (way/30824975): a costa do OSM as fecha na boca, e sem elas o tom terminaria numa reta na água aberta do porto de Long Beach",
  simplificacao: `Douglas-Peucker com topologia a 1,2 m (metros locais): ${r.vertices_antes} → ${r.vertices_depois} vértices; deslocamento máximo medido da costa ${r.desloc_max_m} m, p99,9 ${r.desloc_p999_m} m`,
  incerteza: "encaixe medido contra o satélite dos clipes 4K (s29 6,0 s; s31 0 s; s53 0 s), sem tile: cais e aterros com mediana de +0,5 px (1 a 4 m); quebra-mares com o centro a 0,1 a 1,3 px (0,3 a 4,3 m); praias e costões com o tom 20 a 40 m sobre a espuma e a areia molhada (o OSM traça a maré alta); detalhe em out/los-angeles/_tmp/agua/encaixe/medidas.json e medidas-muros.json",
  s05: "a camada cobre a s05 só com zoom >= 9,5 (de 0 a ~16,0 s e de ~27,9 s ao fim); abaixo disso o mapista a apaga pelo zoom (fill-opacity de 0 em 9,5 a 1 em 10), e o mar do satélite em zoom 6,6 já está quase preto (L 1,4)",
  licenca_lida_em: "2026-10-08",
  na_tela: "© OpenStreetMap contributors já está na linha © MapTiler © OpenStreetMap contributors de todo mapa; openstreetmap.org/copyright na descrição (as duas pela linha da MapTiler); nada novo na tela" });
pauta.nota += " 4ª rodada (08/10/2026, a água escura nos mapas do porto, identidade §6): agua-osm-la, o mar e o porto dos water polygons do OSM, com o San Pedro Breakwater e as estruturas em área fora da água.";
writeFileSync(arq, JSON.stringify(pauta, null, 2) + "\n");
console.error(`pauta: ${pauta.itens.length} itens; geojson ${Buffer.byteLength(json)} bytes, ${vertices} vértices, sha256 ${shaJson}`);
