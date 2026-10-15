#!/usr/bin/env node
// Grava uma FeatureCollection já derivada (por um geo_*.py deste vídeo) pelo gravarGeo da pré-v1:
// cache da máquina + out/zona-do-canal/_media/geo/<slug>.{json,js} + pauta-geo.json.
// uso (da raiz do canal): node out/zona-do-canal/_pesquisa/geo-gravar.mjs <fc.json> <origem.json> <slug> [cena]
// origem.json = { fonte, licenca, url, exige_credito, derivado_por }
import { readFileSync } from "node:fs";
const { gravarGeo, relatarGravacao } = await import("file:///C:/projetos/regie-v1/src/geo/comum.mjs");
const [fcArq, origArq, slug, cena] = process.argv.slice(2);
const fc = JSON.parse(readFileSync(fcArq, "utf8"));
const origem = JSON.parse(readFileSync(origArq, "utf8"));
const g = gravarGeo({ slug, fc, proj: "zona-do-canal", cena: cena || null, origem });
console.log(`✓ ${slug} · ${g.features} features · bbox ${JSON.stringify(g.bbox)} · sha256 ${g.sha256.slice(0, 12)}`);
console.error(relatarGravacao(g));
