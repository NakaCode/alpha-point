#!/usr/bin/env node
// 2ª rodada da geometria do vídeo 2 (los-angeles), passo research, 07/10/2026. Grava pelo gravarGeo da pré-v1 (cache da
// máquina, out/los-angeles/_media/geo/<slug>.json e .js, e o item em out/los-angeles/_pesquisa/pauta-geo.json) o que o
// geo_la_rodada2.py montou em out/los-angeles/_tmp/geo-final-2/, e acrescenta os campos do canal. Não toca nos 17 itens da 1ª.
// Uso, de dentro de C:/projetos/alpha-point:  node out/los-angeles/_pesquisa/geo_la_gravar2.mjs
import { readFileSync, writeFileSync } from "node:fs";
const { gravarGeo, relatarGravacao } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const DIR = "out/los-angeles/_tmp/geo-final-2";
const origem = JSON.parse(readFileSync(`${DIR}/_origem.json`, "utf8"));
for (const [slug, o] of Object.entries(origem)) {
  const fc = JSON.parse(readFileSync(`${DIR}/${slug}.json`, "utf8"));
  const g = gravarGeo({ slug, fc, proj: "los-angeles", cena: o.cena ?? null, origem: {
    fonte: o.fonte, licenca: o.licenca, url: o.url, exige_credito: false,
    derivado_por: "out/los-angeles/_pesquisa/geo_la_rodada2.py + geo_la_gravar2.mjs (07/10/2026, 2ª rodada)" } });
  console.error(`✓ ${slug}\n${relatarGravacao(g)}`);
}
const arq = "out/los-angeles/_pesquisa/pauta-geo.json";
const pauta = JSON.parse(readFileSync(arq, "utf8"));
for (const it of pauta.itens) {
  const slug = it.arquivo.replace(/^_media\/geo\//, "").replace(/\.json$/, "");
  const o = origem[slug]; if (!o) continue;
  Object.assign(it, { sha256_fonte: o.sha256_fonte, datum: o.datum, simplificacao: o.simplificacao, incerteza: o.incerteza,
    licenca_lida_em: "2026-10-07", na_tela: o.na_tela, rodada: 2 });
}
pauta.nota = "Vídeo 2 (los-angeles). 1ª rodada: adiantamento da pesquisa-geo (07/10/2026), 17 itens. 2ª rodada: passo research (07/10/2026), 7 itens, as camadas que o espelho pedia (_despacho_research.pesquisa_geo). Nenhum item vem da camada do condado de Los Angeles (sem licença aberta confirmada) nem do OpenStreetMap. Resumo e comparações: pauta-geo.md.";
writeFileSync(arq, JSON.stringify(pauta, null, 2) + "\n");
console.error(`pauta: ${pauta.itens.length} itens`);
