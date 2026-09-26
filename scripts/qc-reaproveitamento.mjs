#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-reaproveitamento.mjs (linhas 1-130, commit 4afda12).
// O que mudou: o argumento aceita "out/<proj>" e "\" (o contrato do reaproveitador manda rodar com out/<proj>, e o original montava out/out/<proj>).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
//
// O REAPROVEITAMENTO FECHA? — as quatro regras que o schema não consegue cobrar.
//
//   node scripts/qc-reaproveitamento.mjs <proj>
//
// O `contratos/reaproveitamento.schema.json` valida a FORMA de cada veredito. Ele não valida as
// relações — e é nelas que este artefato erra, porque o validador da casa é caseiro e não suporta
// condicional (`if/then`), nem sabe olhar o espelho vigente.
//
// As quatro:
//   1. A SOMA FECHA — toda cena antiga tem exatamente um veredito. Cena esquecida some do vídeo
//      sem ninguém decidir que ela devia sair.
//   2. READAPTA TEM A LISTA DO QUE MUDA — sem ela é um "redesenha" disfarçado, e o executor refaz
//      do zero exatamente a arte que o reaproveitamento existia para poupar.
//   3. NENHUM `id_novo` REPETIDO — duas cenas antigas não podem virar a mesma nova; uma delas
//      sobrescreveria a outra na renomeação, em silêncio.
//   4. TODO `id_novo` EXISTE no espelho vigente — apontar para cena inexistente produz HTML órfão,
//      que é o defeito da [SIS-40]: o gate de arte conta "N prontas" e o vídeo sai sem elas.
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const RAIZ = join(import.meta.dirname, "..");
const proj = process.argv[2];
if (!proj) { console.error("uso: node scripts/qc-reaproveitamento.mjs <proj>"); process.exit(2); }

// [porte Régie] o reaproveitador-de-cenas manda rodar com `<workspace>/out/<proj>` → `out/<proj>`, e o
// original montava out/out/<proj> e saía 2 em toda execução. Mesma normalização dos irmãos (qc-janela…).
const projN = proj.replace(/\\/g, "/").replace(/\/+$/, "").replace(/^out\//, "");
const P = join(RAIZ, "out", projN);
// ⚠️ SLUG QUE NÃO EXISTE NÃO É "NADA A CONFERIR" — é a pergunta errada, e responder "ok" a ela é
// como o gate aprova o que nunca olhou. Achado no primeiro teste com fixture (07/ago): rodado com
// um caminho fora de `out/`, o gate disse "nada a conferir" e saiu 0. Projeto sem re-espelho não
// tem o arquivo e passar É correto; projeto que não existe é erro de chamada e tem de doer.
if (!existsSync(P)) {
  console.error(`✗ ${proj}: não existe em out/. Confira o slug — este gate resolve o caminho a partir da raiz do repo.`);
  process.exit(2);
}
const fr = join(P, "reaproveitamento-cenas.json");
if (!existsSync(fr)) {
  console.log(`— ${proj}: sem reaproveitamento-cenas.json (nada a conferir — o projeto não foi re-espelhado).`);
  process.exit(0);
}

const r = JSON.parse(readFileSync(fr, "utf8"));
const vereditos = r.vereditos || [];
const achados = [];

// ── 1 · a soma fecha ──────────────────────────────────────────────────────────
const conta = { reusa: 0, readapta: 0, descarta: 0 };
for (const v of vereditos) conta[v.veredito] = (conta[v.veredito] || 0) + 1;
const soma = conta.reusa + conta.readapta + conta.descarta;
if (r.cenas_antigas != null && soma !== r.cenas_antigas) {
  achados.push({
    grave: true,
    o_que: `a soma NÃO fecha: ${soma} veredito(s) para ${r.cenas_antigas} cena(s) antiga(s)`,
    porque: "cena sem veredito some do vídeo sem ninguém ter decidido que ela devia sair",
  });
}

// ── 2 · readapta sem a lista do que muda ──────────────────────────────────────
for (const v of vereditos.filter((x) => x.veredito === "readapta")) {
  if (!Array.isArray(v.muda) || !v.muda.length) {
    achados.push({
      grave: true,
      o_que: `${v.id_antigo}: READAPTA sem a lista do que muda`,
      porque: "sem a lista o executor não sabe o que ajustar e refaz do zero — some o ganho inteiro",
    });
  }
}

// ── 3 · id_novo repetido ──────────────────────────────────────────────────────
const destinos = new Map();
for (const v of vereditos) {
  if (!v.id_novo) continue;
  destinos.set(v.id_novo, [...(destinos.get(v.id_novo) || []), v.id_antigo]);
}
for (const [novo, antigos] of destinos) {
  if (antigos.length > 1) {
    achados.push({
      grave: true,
      o_que: `duas cenas antigas apontam para "${novo}": ${antigos.join(" e ")}`,
      porque: "na renomeação uma sobrescreve a outra, em silêncio",
    });
  }
}

// ── 4 · id_novo que não existe no espelho vigente ─────────────────────────────
const fe = join(P, "espelho.json");
let idsVigentes = null;
if (existsSync(fe)) {
  const e = JSON.parse(readFileSync(fe, "utf8"));
  idsVigentes = new Set((e.segmentos || e.cenas || []).filter((s) => !s._mergedInto).map((s) => s.id));
}
if (idsVigentes) {
  for (const [novo, antigos] of destinos) {
    if (!idsVigentes.has(novo)) {
      achados.push({
        grave: true,
        o_que: `"${novo}" (destino de ${antigos[0]}) não existe no espelho vigente`,
        porque: "vira HTML órfão — o gate de arte o conta como pronto e o vídeo sai sem ele [SIS-40]",
      });
    }
  }
  // cena vigente que ninguém reivindicou nem declarou como nova
  const reivindicadas = new Set([...destinos.keys()]);
  const declaradasNovas = new Set((r.cenas_novas_sem_origem || []).map((c) => c.id));
  const orfas = [...idsVigentes].filter((id) => !reivindicadas.has(id) && !declaradasNovas.has(id));
  if (orfas.length) {
    achados.push({
      grave: false,
      o_que: `${orfas.length} cena(s) do plano vigente sem decisão: ${orfas.slice(0, 5).join(", ")}${orfas.length > 5 ? "…" : ""}`,
      porque: "ou herdam de alguma antiga, ou são novas e precisam estar em cenas_novas_sem_origem",
    });
  }
}

console.log(`\n══ REAPROVEITAMENTO · ${proj} ══\n`);
console.log(`  ${conta.reusa} reusa · ${conta.readapta} readapta · ${conta.descarta} descarta = ${soma} de ${r.cenas_antigas ?? "?"} cena(s) antiga(s)`);
console.log(`  ${(r.cenas_novas_sem_origem || []).length} cena(s) nova(s) declarada(s)\n`);

if (!achados.length) {
  console.log("  ✓ PASS — a soma fecha, todo readapta diz o que muda, nenhum destino repetido ou inexistente.\n");
  process.exit(0);
}
for (const a of achados) {
  console.log(`  ${a.grave ? "✗" : "▲"} ${a.o_que}`);
  console.log(`      ${a.porque}`);
}
const graves = achados.filter((a) => a.grave).length;
console.log(`\n  ${graves ? "✗ REPROVADO" : "▲ só alertas"} — ${graves} grave(s), ${achados.length - graves} alerta(s)\n`);
process.exit(graves ? 1 : 0);
