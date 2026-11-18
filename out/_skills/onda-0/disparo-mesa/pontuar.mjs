#!/usr/bin/env node
// pontuar.mjs — confere as respostas do leitor do teste de disparo de mesa contra o gabarito.
// "Deve acordar": certo se a escolha é a skill. "Não deve acordar": certo se a escolha NÃO é a skill sob teste (o vizinho
// esperado é informação a mais: diz se o pedido foi para onde o gatilhos.md previa).
// Uso (cwd na raiz do canal): node out/_skills/onda-0/disparo-mesa/pontuar.mjs --gabarito=<arquivo.json> [--respostas=<arquivo.json>] [--saida=<arquivo.json>]
import { readFileSync, writeFileSync } from "node:fs";
const arg = (k) => process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3);
const gab = JSON.parse(readFileSync(arg("gabarito"), "utf8"));
const resp = JSON.parse(readFileSync(arg("respostas") ?? "out/_skills/onda-0/disparo-mesa/respostas.json", "utf8"));
const porId = new Map(resp.map((r) => [r.id, r]));
const linhas = [], porSkill = {};
for (const g of gab) {
  const r = porId.get(g.id) ?? { skill: "(sem resposta)" };
  const certo = g.tipo === "deve" ? r.skill === g.de : r.skill !== g.de;
  const noVizinho = g.tipo === "nao" ? r.skill === g.esperado : null;
  porSkill[g.de] ??= { deve: [0, 0], nao: [0, 0], vizinho_previsto: [0, 0] };
  const p = porSkill[g.de];
  p[g.tipo][1]++; if (certo) p[g.tipo][0]++;
  if (g.tipo === "nao") { p.vizinho_previsto[1]++; if (noVizinho) p.vizinho_previsto[0]++; }
  linhas.push({ id: g.id, skill_sob_teste: g.de, tipo: g.tipo, pedido: g.texto, esperado: g.esperado, escolhida: r.skill, segunda: r.segunda ?? null, por_que: r.por_que ?? "", certo, no_vizinho_previsto: noVizinho });
}
const total = linhas.length, certos = linhas.filter((l) => l.certo).length;
const out = { total, certos, por_skill: porSkill, linhas };
if (arg("saida")) writeFileSync(arg("saida"), JSON.stringify(out, null, 1));
console.log(`certos: ${certos} de ${total}`);
for (const [s, p] of Object.entries(porSkill)) console.log(`  ${s}: devem ${p.deve[0]}/${p.deve[1]}; não devem ${p.nao[0]}/${p.nao[1]} (no vizinho previsto ${p.vizinho_previsto[0]}/${p.vizinho_previsto[1]})`);
for (const l of linhas) if (!l.certo || l.no_vizinho_previsto === false) console.log(`  ${l.certo ? "~" : "✗"} ${l.id} [${l.skill_sob_teste}, ${l.tipo}] "${l.pedido}" → ${l.escolhida}${l.segunda ? ` (2ª: ${l.segunda})` : ""}; esperado ${l.esperado}. ${l.por_que}`);
process.exit(certos === total ? 0 : 1);
