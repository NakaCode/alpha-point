#!/usr/bin/env node
// Grava as FeatureCollections que o geo_fundo.py e o geo_superficie.py deixaram em _tmp/pesquisa-geo/fc/ pelo gravarGeo da
// pré-v1: cache da máquina + out/atlantico-fundo/_media/geo/<slug>.{json,js} + _pesquisa/pauta-geo.json (vídeo 4, 28/10/2026).
// uso (da raiz do canal): node out/atlantico-fundo/_pesquisa/geo-gravar.mjs [slug ...]   (sem slug: todos os de fc/)
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
const { gravarGeo, relatarGravacao } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const FC = "out/atlantico-fundo/_tmp/pesquisa-geo/fc";
const pedidos = process.argv.slice(2);
const slugs = pedidos.length ? pedidos : readdirSync(FC).filter((f) => f.endsWith(".origem.json")).map((f) => f.replace(/\.origem\.json$/, "")).sort();
let n = 0;
for (const slug of slugs) {
  const fc = JSON.parse(readFileSync(join(FC, `${slug}.json`), "utf8"));
  const o = JSON.parse(readFileSync(join(FC, `${slug}.origem.json`), "utf8"));
  const origem = { fonte: o.fonte, licenca: o.licenca, url: o.url, exige_credito: !!o.exige_credito, derivado_por: o.derivado_por || null };
  const g = gravarGeo({ slug, fc, proj: "atlantico-fundo", cena: null, origem });
  console.log(`✓ ${slug} · ${g.features} features · bbox ${JSON.stringify(g.bbox.map((v) => Math.round(v * 1e4) / 1e4))} · sha256 ${g.sha256.slice(0, 12)}`);
  if (g.sobrescreveu_cache) console.error(relatarGravacao(g));
  n++;
}
console.log(`${n} camadas gravadas`);
