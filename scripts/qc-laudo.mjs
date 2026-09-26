#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-laudo.mjs (linhas 1-181, commit 4afda12).
// O que mudou: chama o validador por fileURLToPath + process.execPath (o .pathname quebrava no Windows e com espaço no caminho) e aceita "\" no fim do argumento; validador que não rodou é NÃO MEDIDO (exit 2), não laudo válido; laudo aprovado:true com lente <7, gate duro vivo ou sem as 14 lentes é INCOERENTE e reprova; na forma por cena, a cobertura é só daquela cena.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * qc-laudo.mjs — GATE do veredito do qc-visual.
 *
 * O `qc-visual` (binding Codex por ChatGPT OAuth) olha os frames de uma cena, julga pelas 14 lentes e grava
 * `out/<proj>/qc/<cena>.laudo.json` com `aprovado: true|false`. Esse julgamento
 * CUSTA INFERÊNCIA — e até 22/jul/2026 nenhum código o lia: havia 12 cenas com
 * veredito REPROVADO paradas no disco (7 só no senna) e nada impedia que fossem
 * pro render 4K. Julgamento pago e ignorado é pior que julgamento nenhum.
 *
 * Uso:  node scripts/qc-laudo.mjs out/<proj>          (todos os laudos do projeto)
 *       node scripts/qc-laudo.mjs out/<proj>/graphics/<cena>.html   (o laudo daquela cena)
 *
 * Exit 0 = cobertura completa e nenhum veredito reprovado
 * Exit 1 = há cena com `aprovado:false` que não foi reconciliada.
 *
 * Reconciliar = ou a cena foi corrigida e o qc-visual re-julgou, ou o laudo foi
 * marcado `"resolvido": true` com o motivo. Não se apaga laudo pra passar no gate.
 */
import { spawnSync } from "node:child_process";
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const alvo = process.argv[2];
if (!alvo) {
  console.error("uso: node scripts/qc-laudo.mjs out/<proj>  |  <cena>.html");
  process.exit(2);
}

// resolve o diretório de laudos e o filtro de cena
let projDir, filtroCena = null;
if (alvo.endsWith(".html")) {
  projDir = dirname(dirname(alvo));                  // out/<proj>/graphics/x.html → out/<proj>
  filtroCena = basename(alvo, ".html");
} else {
  // aceita `out/<proj>` e `<proj>` — a casa mistura as duas convenções (10 gates pedem o slug puro,
  // 3 pediam só o caminho), e a forma errada produzia um laudo VAZIO em vez de um erro: pior que
  // reprovar, porque "nenhuma cena julgada" passa por "nada a reprovar".
  const bruto = alvo.replace(/[\\/]+$/, "");   // [porte Régie] aceita a barra invertida do Windows
  projDir = existsSync(join(bruto, "qc")) || existsSync(join(bruto, "graphics")) ? bruto
    : existsSync(join("out", bruto)) ? join("out", bruto) : bruto;
}
const qcDir = join(projDir, "qc");

/**
 * COBERTURA — toda cena do espelho VIGENTE foi julgada?
 *
 * ⚠️ Este gate lia só os laudos que EXISTEM. Nunca perguntava se alguma cena tinha ficado de fora,
 * e por isso tinha dois furos que se leem como aprovação:
 *   · `qc/` vazio → "gate não se aplica", exit 0. **Zero QC passava no gate de QC.**
 *   · re-espelho que troca ids → os laudos velhos viram órfãos, as cenas novas nascem sem
 *     julgamento, e o gate segue verde porque só olha o que está na pasta. É a [SIS-40] aplicada
 *     ao QC: a completude tem de ser medida contra o espelho de HOJE, id a id, nunca contra o
 *     conjunto de arquivos comparado consigo mesmo.
 *
 * Medido em 27/jul no `senna`: 73 laudos no disco, espelho reescrito 9h depois pela decupagem.
 * Ali os ids seguiram compatíveis e a cobertura estava inteira (70/70) — mas foi sorte, não gate.
 *
 * ⚠️ As duas convenções de nome convivem: o laudo é gravado como `s01.laudo.json` e o espelho usa
 * `s01-abertura-nascimento-morte`. Casar por igualdade exata reprova 70 de 70 cenas julgadas —
 * eu mesmo cheguei a esse falso alarme antes de olhar os arquivos. Aceita-se id exato OU prefixo.
 */
function conferirCobertura() {
  const ep = join(projDir, "espelho.json");
  /* ⚠️ [SIS-92] Sem espelho NÃO É "nada a cobrir" — é NÃO MEDIDO. Devolver `null` aqui desarmava a
   * cobertura inteira e entregava o veredito ao escape lá embaixo, que absolve. Foi o que aconteceu
   * no QC do `mamute-de-volta` (05/ago) ao chamar o gate com o slug em vez do caminho: `projDir`
   * apontava para uma pasta inexistente, e o gate cujo lema é "cena não julgada não é cena
   * aprovada" respondeu "gate não se aplica" com exit 0 — enquanto 40 laudos reais existiam em
   * `out/mamute-de-volta/qc/`. Projeto que não dá para abrir é erro de chamada, não aprovação. */
  if (!existsSync(ep)) return { erro: `sem espelho.json em ${projDir}` };
  let segs;
  try {
    const j = JSON.parse(readFileSync(ep, "utf8"));
    /* ⚠️ FUNDIDA NÃO É CENA NÃO JULGADA — ela não existe como arquivo, logo não há o que julgar.
     * O filtro canônico é o do `scripts/cenas-reais.mjs`: fora apresentador (`anima:false`) E fora
     * `_mergedInto` (o run que virou plano-sequência dentro da cena-mãe). Sem a segunda metade,
     * este gate cobrava laudo da `c31` do `orcas-nao-matam` — que por design mora no `c30.html` —
     * e travava a cobertura em "2 de 29 nunca julgadas" com o QC completo. É o MESMO falso
     * positivo que o contador da fila deu em 31/jul; quem cita `_mergedInto` costuma copiar o
     * filtro pela metade. */
    const fundida = (s) => !!(s._mergedInto || s.mergedInto);
    segs = (j.segmentos || j.cenas || j.scenes || (Array.isArray(j) ? j : []))
      .filter(s => s.anima !== false && s.id && !fundida(s));
  } catch { return { erro: `espelho.json ilegível em ${projDir}` }; }
  if (!segs.length) return { erro: `espelho.json sem cena de arte em ${projDir}` };
  // [porte Régie] Na forma por cena (`…/graphics/<cena>.html`) a cobertura é SÓ daquela cena: o
  // qc-visual julga uma por vez, e cobrar o espelho inteiro reprovava cada cena pelas irmãs ainda
  // não julgadas — o agente aprendia a ignorar o exit 1. Cena que não está no espelho é erro de
  // chamada (NÃO MEDIDO), nunca "nada a cobrir".
  if (filtroCena) {
    const pref = (String(filtroCena).match(/^s\d+/) || [])[0];
    const exata = segs.filter((s) => s.id === filtroCena);
    segs = exata.length ? exata : segs.filter((s) => pref && (String(s.id).match(/^s\d+/) || [])[0] === pref);
    if (!segs.length) return { erro: `a cena "${filtroCena}" não está no espelho vigente de ${projDir}` };
  }
  const laudos = existsSync(qcDir) ? readdirSync(qcDir).filter(f => f.endsWith(".laudo.json")).map(f => f.replace(".laudo.json", "")) : [];
  const exatos = new Set(laudos);
  const prefixos = new Set(laudos.map(l => (String(l).match(/^s\d+/) || [])[0]).filter(Boolean));
  const semLaudo = segs.filter(s => !exatos.has(s.id) && !prefixos.has((String(s.id).match(/^s\d+/) || [])[0]));
  return { total: segs.length, julgadas: segs.length - semLaudo.length, semLaudo };
}

const cob = conferirCobertura();
if (cob?.erro) {
  console.error(`✗ ${cob.erro} — NÃO MEDIDO (não é aprovação).`);
  console.error(`  Este gate recebe o CAMINHO do projeto, não o slug: node scripts/qc-laudo.mjs out/<proj>`);
  process.exit(2);
}
if (cob && cob.semLaudo.length) {
  console.error(`✗ COBERTURA DE QC INCOMPLETA — ${cob.semLaudo.length} de ${cob.total} cena(s) do espelho vigente nunca foram julgadas:`);
  for (const s of cob.semLaudo.slice(0, 12)) console.error(`    · ${s.id}`);
  if (cob.semLaudo.length > 12) console.error(`    … +${cob.semLaudo.length - 12}`);
  console.error(`  Cena não julgada não é cena aprovada. Rode o qc-visual nelas antes de seguir.`);
  console.error(`  (Se o espelho foi refeito, os laudos antigos podem ter virado órfãos — confira os ids.)`);
  process.exit(1);
}

if (!existsSync(qcDir)) {
  console.log(`ℹ sem laudos em ${qcDir} — o qc-visual não julgou este projeto (gate não se aplica)`);
  process.exit(0);
}

/* `qc/` guarda laudos de CENA (contrato `laudo-qc`) e, desde a FIN-13, também o laudo da ESTAÇÃO de
 * finalização — que segue outro contrato (`proj`/`veredito`/`itens`) e mora ali porque o
 * `finalizar.mjs` e o `entregar.mjs` o cobram nesse caminho exato. Sem esta exclusão o gate o valida
 * contra o schema de cena e cospe 4 violações a cada rodada, em todo projeto que chegou à
 * finalização. Ruído fixo em gate ensina a ignorar gate ([ARTE-109]): três agentes de QC diferentes
 * relataram isto como "problema do projeto" na mesma sessão (03/ago), e nenhum era. */
const NAO_E_LAUDO_DE_CENA = new Set(["finalizacao"]);

const arquivos = readdirSync(qcDir)
  .filter(f => f.endsWith(".laudo.json"))
  .filter(f => !NAO_E_LAUDO_DE_CENA.has(f.replace(".laudo.json", "")))
  // [porte Régie] o laudo pode ser `s01.laudo.json` para a cena `s01-abertura` (as duas convenções
  // convivem, ver a cobertura acima): casar só pelo nome exato deixava o laudo de fora e o gate
  // respondia "nenhum laudo", exit 0, sem ter validado nada.
  .filter(f => {
    if (!filtroCena) return true;
    const nome = f.replace(".laudo.json", "");
    const pref = (String(filtroCena).match(/^s\d+/) || [])[0];
    return nome === filtroCena || (pref && nome === pref);
  });

if (!arquivos.length) {
  console.log(`ℹ nenhum laudo${filtroCena ? ` para "${filtroCena}"` : ""} em ${qcDir}`);
  process.exit(0);
}

// [porte Régie] Os 14 nomes canônicos (contratos/laudo-qc.schema.json e o CONTRATO do qc-visual §2).
// "Os 14 entram SEMPRE — laudo parcial não é laudo." O schema aceita o nome mas não exige os 14.
const LENTES = ["espaco", "factual", "wordlock", "abordagem", "acessibilidade", "poluicao", "motion",
  "fonte", "tema", "cobertura", "cadencia", "autoria", "camadas", "circulo"];

/** As falhas de UM laudo, calculadas das notas e dos gates — nunca do campo `aprovado`. */
function falhasDo(j) {
  // O laudo real usa ARRAYS: gatesDuros = ["tamanho", …] e lentes = [{lente, nota, problemas}].
  // (A primeira versão deste gate tratava como objeto e imprimia "0:6" em vez do nome da lente.)
  const falhas = [];
  const gd = j.gatesDuros;
  if (Array.isArray(gd)) falhas.push(...gd.map(g => `gate:${g}`));
  else for (const [nome, v] of Object.entries(gd || {})) if (v === false || v === "FAIL") falhas.push(`gate:${nome}`);
  const lentes = Array.isArray(j.lentes) ? j.lentes : Object.entries(j.lentes || {}).map(([lente, v]) => ({ lente, nota: typeof v === "object" ? v.nota : v }));
  for (const l of lentes) if (typeof l.nota === "number" && l.nota < 7) falhas.push(`${l.lente} ${l.nota}/10`);
  const presentes = new Set(lentes.map(l => l.lente));
  const faltam = LENTES.filter(n => !presentes.has(n));
  return { falhas, faltam };
}

const reprovadas = [];
let aprovadas = 0, resolvidas = 0, ilegiveis = 0, foraDoContrato = 0, semMotivo = 0, incoerentes = 0;

for (const f of arquivos) {
  const p = join(qcDir, f);
  let j;
  try { j = JSON.parse(readFileSync(p, "utf8")); }
  catch (e) { ilegiveis++; console.error(`  ⚠ laudo ilegível: ${f} (${e.message.slice(0, 50)})`); continue; }

  // valida contra contratos/laudo-qc.schema.json — sem isto o schema é decoração (o doctor
  // acusava "contrato-órfão"), e um laudo com campo inventado passava sem ninguém notar.
  // [porte Régie] `new URL(...).pathname` vira "/C:/Users/..." no Windows e "%20" onde há espaço
  // no caminho — o validador nunca abria, `v.status` vinha 1 e TODO laudo saía "fora do contrato".
  // fileURLToPath devolve o caminho do sistema. E process.execPath é o MESMO node que roda este
  // gate: não depende de haver um "node" no PATH do processo filho.
  const v = spawnSync(process.execPath, [fileURLToPath(new URL("validar-contrato.mjs", import.meta.url)), "laudo-qc", p], { encoding: "utf8" });
  if (v.status === 1) { console.error(`✗ ${f}: laudo fora do contrato\n${String(v.stdout || v.stderr).trim()}`); foraDoContrato++; }
  else if (v.error || v.status !== 0) {
    // [porte Régie] Só o exit 1 contava. O exit 2 (contrato desconhecido: contratos/ ausente ou
    // incompleta), o status null (o processo filho nem subiu) e o erro de spawn passavam calados, e
    // todo laudo virava "válido" sem ter sido validado. Validador que não rodou é NÃO MEDIDO.
    const motivo = v.error ? v.error.message : v.status === null ? `processo encerrado por ${v.signal}` : `exit ${v.status}`;
    console.error(`✗ NÃO MEDIDO: o validador não rodou para ${f} (${motivo}).`);
    const txt = String(v.stdout || v.stderr || "").trim();
    if (txt) console.error(txt.split("\n").slice(0, 6).map(l => `    ${l}`).join("\n"));
    console.error(`  Nenhum laudo foi aprovado. Confira se contratos/laudo-qc.schema.json existe na raiz do canal.`);
    process.exit(2);
  }

  if (j.aprovado === false) {
    // resolvido:true SEM motivo é exatamente "apagar o laudo pra passar" com outro nome
    if (j.resolvido === true && !String(j.motivo || "").trim()) {
      console.error(`✗ ${f}: resolvido:true SEM motivo — o contrato exige o porquê`); semMotivo++; continue;
    }
    if (j.resolvido === true) { resolvidas++; continue; }
    reprovadas.push({ cena: j.cena || basename(f, ".laudo.json"), falhas: falhasDo(j).falhas, arquivo: p });
    continue;
  }
  // [porte Régie] `aprovado:true` era aceito sem conferir nada. Quem escreve o laudo é um modelo, e
  // este gate é a única defesa contra o laudo incoerente: o CONTRATO do qc-visual diz "aprovado:true
  // só com TODAS as lentes ≥7 E gatesDuros vazio", e "os 14 entram sempre". As falhas se calculam
  // das notas; o campo `aprovado` não se autocertifica.
  const { falhas, faltam } = falhasDo(j);
  if (j.aprovado !== true || falhas.length || faltam.length) {
    const porque = [
      j.aprovado !== true && `aprovado=${JSON.stringify(j.aprovado)} (esperado true ou false)`,
      falhas.length && `aprovado com ${falhas.slice(0, 4).join(", ")}`,
      faltam.length && `faltam ${faltam.length} de 14 lentes (${faltam.slice(0, 4).join(", ")}${faltam.length > 4 ? ", …" : ""})`,
    ].filter(Boolean).join(" · ");
    console.error(`✗ ${f}: laudo INCOERENTE — ${porque}`);
    incoerentes++;
    continue;
  }
  aprovadas++;
}

const proj = basename(projDir);
if (!reprovadas.length) {
  const extras = [ilegiveis && `${ilegiveis} ilegível(is)`, foraDoContrato && `${foraDoContrato} fora do contrato`,
                   semMotivo && `${semMotivo} resolvido(s) sem motivo`, incoerentes && `${incoerentes} incoerente(s)`].filter(Boolean);
  if (extras.length) console.error(`✗ ${extras.join(" · ")}`);
  else console.log(`✓ laudo-qc OK — ${aprovadas} aprovada(s)${resolvidas ? `, ${resolvidas} reprovada(s) já resolvida(s)` : ""} em ${proj}`);
  process.exit(extras.length ? 1 : 0);
}

console.error(`✗ ${reprovadas.length} cena(s) com veredito REPROVADO do qc-visual em ${proj}:`);
for (const r of reprovadas) {
  console.error(`  • ${r.cena}${r.falhas.length ? `  → ${r.falhas.slice(0, 4).join(", ")}` : ""}`);
}
console.error(`\n  O qc-visual julgou e REPROVOU estas cenas. Renderizar assim gasta 4K em cena que já`);
console.error(`  se sabe ruim. Conserte e peça novo julgamento, OU marque "resolvido": true no laudo`);
console.error(`  com o motivo. Não apague o laudo pra passar no gate.`);
process.exit(1);
