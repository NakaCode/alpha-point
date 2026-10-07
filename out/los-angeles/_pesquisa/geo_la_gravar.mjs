#!/usr/bin/env node
// Grava a geometria do vídeo 2 (los-angeles) pelo gravarGeo da pré-v1: cache da máquina, out/los-angeles/_media/geo/<slug>.json
// (e o .js da cena) e o item em out/los-angeles/_pesquisa/pauta-geo.json. Depois acrescenta ao item os campos do canal
// (sha256 da fonte, licença lida, datum, simplificação, incerteza). Entrada: o que o geo_la_construir.py montou em
// out/los-angeles/_tmp/geo-final/. Uso, de dentro de C:/projetos/alpha-point:  node out/los-angeles/_pesquisa/geo_la_gravar.mjs
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
const { gravarGeo, relatarGravacao } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const DIR = "out/los-angeles/_tmp/geo-final";
const origem = JSON.parse(readFileSync(`${DIR}/_origem.json`, "utf8"));
for (const [slug, o] of Object.entries(origem)) {
  const fc = JSON.parse(readFileSync(`${DIR}/${slug}.json`, "utf8"));
  const g = gravarGeo({ slug, fc, proj: "los-angeles", cena: o.cena ?? null, origem: {
    fonte: o.fonte, licenca: o.licenca, url: o.url, exige_credito: false,
    derivado_por: `out/los-angeles/_pesquisa/geo_la_construir.py + geo_la_gravar.mjs (07/10/2026)` } });
  console.error(`✓ ${slug}\n${relatarGravacao(g)}`);
}
// os campos do canal, no item que o gravarGeo acabou de escrever
const arq = "out/los-angeles/_pesquisa/pauta-geo.json";
const pauta = JSON.parse(readFileSync(arq, "utf8"));
for (const it of pauta.itens) {
  const slug = it.arquivo.replace(/^_media\/geo\//, "").replace(/\.json$/, "");
  const o = origem[slug]; if (!o) continue;
  Object.assign(it, { sha256_fonte: o.sha256_fonte, pagina: o.pagina ?? undefined, datum: o.datum, simplificacao: o.simplificacao, incerteza: o.incerteza,
    licenca_lida_em: "2026-10-07", na_tela: "domínio público: sem crédito obrigatório; nada vem do OSM nem da camada do condado" });
}
pauta.nota = "Vídeo 2 (los-angeles), adiantamento da pesquisa-geo a pedido do Claude central (07/10/2026), antes do passo research. Nenhum item vem da camada do condado de Los Angeles (sem licença aberta confirmada) nem do OpenStreetMap. Resumo e comparações: pauta-geo.md.";
writeFileSync(arq, JSON.stringify(pauta, null, 2) + "\n");
console.error(`pauta: ${pauta.itens.length} itens`);
