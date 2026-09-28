#!/usr/bin/env node
// CONFERE A PAUTA-GEO CONTRA O DISCO (checagens 1 a 6 do §3 do contrato do pesquisa-geo). Só lê.
//
// Para cada item de out/<proj>/_pesquisa/pauta-geo.json: o arquivo existe e abre; é FeatureCollection; a contagem
// bate com a pauta; nenhuma feature sem coordenada; todo par está em graus WGS84 (lon −180..180, lat −90..90); o bbox
// e o sha256 batem com a pauta; o .js que a cena carrega existe e traz o mesmo JSON; o peso; a licença está escrita e
// o exige_credito bate com ela (ODbL ⇒ crédito). A checagem 3 (bbox e centro contra o lugar real) é por item e está
// nos scripts que gravaram cada um; aqui o bbox sai impresso para o olho.
//
// Uso: node out/juneau/_pesquisa/conferir-pauta-geo.mjs [proj]   (padrão: juneau). Sai 1 se algum item falhar.
import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const proj = process.argv[2] || "juneau";
const pasta = join("out", proj);
const pauta = JSON.parse(readFileSync(join(pasta, "_pesquisa", "pauta-geo.json"), "utf8").replace(/^﻿/, ""));
const falhas = [], linhas = [];
const bboxDe = (fc) => { const a = [Infinity, Infinity, -Infinity, -Infinity]; const w = (c) => { if (typeof c[0] === "number") { a[0] = Math.min(a[0], c[0]); a[1] = Math.min(a[1], c[1]); a[2] = Math.max(a[2], c[0]); a[3] = Math.max(a[3], c[1]); } else c.forEach(w); }; for (const f of fc.features) w(f.geometry.coordinates); return a.map((v) => +v.toFixed(5)); };
for (const it of pauta.itens) {
  const erros = [];
  const arq = join(pasta, it.arquivo);
  if (!it.fonte || !it.arquivo || !it.licenca) erros.push("falta fonte/arquivo/licenca");
  if (!existsSync(arq)) { falhas.push(`${it.arquivo}: não existe`); continue; }
  const texto = readFileSync(arq, "utf8");
  let fc; try { fc = JSON.parse(texto); } catch (e) { falhas.push(`${it.arquivo}: não abre (${e.message})`); continue; }
  if (fc.type !== "FeatureCollection" || !Array.isArray(fc.features)) erros.push("não é FeatureCollection");
  if (fc.features.length !== it.features) erros.push(`features ${fc.features.length} ≠ pauta ${it.features}`);
  let pares = 0, fora = 0, vazias = 0; const tipos = new Set();
  for (const f of fc.features) {
    tipos.add(f.geometry?.type);
    const c = f.geometry?.coordinates;
    if (!c || !c.length) { vazias++; continue; }
    const w = (x) => { if (typeof x[0] === "number") { pares++; if (!(x[0] >= -180 && x[0] <= 180 && x[1] >= -90 && x[1] <= 90)) fora++; } else x.forEach(w); };
    w(c);
  }
  if (vazias) erros.push(`${vazias} feature(s) sem coordenada`);
  if (fora) erros.push(`${fora} par(es) fora de WGS84 lon/lat`);
  const bb = bboxDe(fc);
  if (it.bbox && JSON.stringify(bb) !== JSON.stringify(it.bbox.map((v) => +(+v).toFixed(5)))) erros.push(`bbox ${bb} ≠ pauta ${it.bbox}`);
  const sha = createHash("sha256").update(texto).digest("hex");
  if (it.sha256 && sha !== it.sha256) erros.push(`sha256 ${sha.slice(0, 12)}… ≠ pauta ${it.sha256.slice(0, 12)}…`);
  const js = arq.replace(/\.json$/, ".js");
  if (!existsSync(js)) erros.push("falta o .js da cena");
  else if (!readFileSync(js, "utf8").includes(texto)) erros.push("o .js não traz o mesmo JSON");
  const odbl = /odbl/i.test(it.licenca);
  if (odbl !== !!it.exige_credito) erros.push(`exige_credito=${it.exige_credito} com licença "${it.licenca.slice(0, 30)}…"`);
  const kb = Math.round(statSync(arq).size / 1024);
  if (kb > 2048) erros.push(`${kb} KB: pesado para uma cena`);
  linhas.push({ arquivo: it.arquivo, tipos: [...tipos].join("+"), features: fc.features.length, pares, kb, bbox: bb, credito: it.exige_credito ? "© OpenStreetMap contributors" : "—", cena: it.cena || "", ok: !erros.length });
  if (erros.length) falhas.push(`${it.arquivo}: ${erros.join("; ")}`);
}
for (const l of linhas) console.log(`${l.ok ? "✓" : "✗"} ${l.arquivo.padEnd(46)} ${l.tipos.padEnd(24)} ${String(l.features).padStart(4)} feat ${String(l.pares).padStart(6)} pares ${String(l.kb).padStart(5)} KB  [${l.bbox.join(", ")}]  ${l.credito}  ${JSON.stringify(l.cena)}`);
console.log(`\n${linhas.length} itens na pauta; ${falhas.length} com falha.`);
for (const f of falhas) console.log(`✗ ${f}`);
process.exitCode = falhas.length ? 1 : 0;
