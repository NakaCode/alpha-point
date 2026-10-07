#!/usr/bin/env node
// Regrava pelo gravarGeo da pré-v1 só as camadas de Hamlin que a correção do sudeste (hamlin_sudeste.py, 07/10/2026) mudou, a partir do que
// o geo_la_construir.py montou em out/los-angeles/_tmp/geo-final/. Não toca nos outros itens da pauta. As versões de antes estão em
// out/los-angeles/_tmp/pesquisa-geo/*-antes-gcp1923.json. Uso, de dentro de C:/projetos/alpha-point:
//   node out/los-angeles/_pesquisa/geo_la_gravar_gcp1923.mjs
import { readFileSync, writeFileSync } from "node:fs";
const { gravarGeo, relatarGravacao } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const DIR = "out/los-angeles/_tmp/geo-final";
const MUDARAM = ["la-1906-hamlin", "faixa-1906-hamlin", "wilmington-1909-hamlin", "san-pedro-1909-divisa-hamlin", "la-1909-hamlin"];
const origem = JSON.parse(readFileSync(`${DIR}/_origem.json`, "utf8"));
const arq = "out/los-angeles/_pesquisa/pauta-geo.json";
const nota = JSON.parse(readFileSync(arq, "utf8")).nota;
for (const slug of MUDARAM) {
  const o = origem[slug];
  const fc = JSON.parse(readFileSync(`${DIR}/${slug}.json`, "utf8"));
  const g = gravarGeo({ slug, fc, proj: "los-angeles", cena: o.cena ?? null, origem: {
    fonte: o.fonte, licenca: o.licenca, url: o.url, exige_credito: false,
    derivado_por: "out/los-angeles/_pesquisa/geo_la_construir.py (com hamlin_sudeste.py) + geo_la_gravar_gcp1923.mjs (07/10/2026, correção do sudeste)" } });
  console.error(`✓ ${slug}\n${relatarGravacao(g)}`);
}
const pauta = JSON.parse(readFileSync(arq, "utf8"));
for (const it of pauta.itens) {
  const slug = it.arquivo.replace(/^_media\/geo\//, "").replace(/\.json$/, "");
  if (!MUDARAM.includes(slug)) continue;
  const o = origem[slug];
  Object.assign(it, { sha256_fonte: o.sha256_fonte, pagina: o.pagina ?? undefined, datum: o.datum, simplificacao: o.simplificacao, incerteza: o.incerteza,
    licenca_lida_em: "2026-10-07", na_tela: "domínio público: sem crédito obrigatório; nada vem do OSM nem da camada do condado",
    corrigido: "2026-10-07: georreferência do sudeste corrigida com pontos de 1923 (hamlin_sudeste.py); a versão de antes está em _tmp/pesquisa-geo/" + slug + "-antes-gcp1923.json" });
}
pauta.nota = nota + " Correção do sudeste de Hamlin (07/10/2026): la-1906, faixa-1906, wilmington-1909, san-pedro-1909-divisa e la-1909 regravadas; la-1850 e la-1899 não mudaram.";
writeFileSync(arq, JSON.stringify(pauta, null, 2) + "\n");
console.error(`pauta: ${pauta.itens.length} itens`);
