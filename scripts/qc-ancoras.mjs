#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-ancoras.mjs (linhas 1-127, commit 4afda12).
// O que mudou: a resolução do projeto (out\<proj> do Windows e pasta absoluta) e a leitura dos JSON (BOM do Bloco de Notas;
// arquivo quebrado é NÃO MEDIDO, exit 2 — antes virava "sem espelho", ou pior, fazia o gate cair no relógio seguinte). A precedência de relógio FINAL → LIMPO → BRUTO
// ficou a da origem de propósito: é lei ([SIS-125]) e, no faceless, só existe words.json — a lista cai nele sozinha. O
// wordsDoEspelho (lib/words-do-espelho.mjs) decide por MEDIDA, não por precedência: trocar seria mudar a régua, não portar.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
/**
 * qc-ancoras.mjs — o word-lock medido por CONTA, não por julgamento.
 *
 * ══ POR QUE EXISTE ══
 *
 * A `ROUPA-CENA` manda que *"cada elemento entra no tempo EXATO da palavra que o ancora"*, e até
 * 21/ago/2026 isso vivia só como instrução ao agente: o artefato não registrava a intenção, então
 * nenhum gate conseguia medi-la. A lente `wordlock` do QC visual carregava sozinha 15% da fila de
 * correção (62 de 403 achados pendentes, medidos em 20/ago) — e o instante certo sempre esteve no
 * `words.json`. O que faltava era a cena DIZER a qual palavra cada elemento responde.
 *
 * ⚠️ AUSÊNCIA DE ÂNCORA NÃO REPROVA, E ISSO É DELIBERADO. Nenhuma das ~400 cenas do disco declara
 * `data-ancora` hoje. Um gate que reprovasse por ausência acusaria tudo no primeiro dia e seria
 * desligado na primeira semana — é a lição da [ARTE-77] e a mesma régua do `qc-spec-agentes`, que
 * abriu com 5 de 44 e não reprovou. Débito declarado é decisão; o que este gate reprova é âncora
 * que MENTE: declarada e fora do tempo, ou apontando para uma fala que não existe na janela.
 *
 * Uso: node scripts/qc-ancoras.mjs <proj> [--json] [--so=<regex>] [--duro]
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { conferirAncoras, lerAncoras } from "./lib/ancoras-cena.mjs";
import { lerJsonOuNaoMedi } from "./lib/modos.mjs";

const RAIZ = fileURLToPath(new URL("..", import.meta.url));
const argv = process.argv.slice(2);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.split("=").slice(1).join("=") : d; };
const PROJ = argv.find((a) => !a.startsWith("--"));
const JSON_SAIDA = argv.includes("--json");
const DURO = argv.includes("--duro");
const SO = opt("so", "");
if (!PROJ) { console.error("uso: qc-ancoras.mjs <proj> [--json] [--so=<regex>] [--duro]"); process.exit(2); }

// [porte Régie] aceita <proj>, out/<proj> com / ou \ (o estúdio só testava "out/") e a pasta do projeto.
const D = (() => {
  const limpo = PROJ.replace(/[\\/]+$/, "");
  if (isAbsolute(limpo)) return limpo;
  if (/^out[\\/]/.test(limpo)) return join(RAIZ, limpo);
  if (existsSync(limpo) && statSync(limpo).isDirectory()) return resolve(limpo);
  return join(RAIZ, "out", limpo);
})();
// [porte Régie] ausente → null; com BOM → lido; QUEBRADO → NÃO MEDI (2). O `catch { return null }` de antes tratava o arquivo
// quebrado como ausente: o espelho com BOM virava "sem espelho", e um words-final.json quebrado fazia o gate medir no BRUTO.
const lerJson = (p) => lerJsonOuNaoMedi(p, "qc-ancoras");
const espelho = lerJson(join(D, "espelho.json"));
/**
 * ── O RELÓGIO CERTO, E DITO EM VOZ ALTA ────────────────────────────────────────�
 *
 * Esta linha era `words.json || words-final.json` — a precedência INVERTIDA. O bruto quase sempre
 * existe, então o final nunca era lido, e o gate comparava a âncora do espelho (relógio FINAL,
 * padrão desde 06/ago) contra a fala em tempo BRUTO, pré-corte. Os dois divergem pela soma de tudo
 * que a decupagem tirou, então TODA âncora do projeto caía fora da janela.
 *
 * Medido no `tunel-trem-bala-japao` em 02/set/2026: 206 âncoras acusadas, incluindo cenas que já
 * estavam corretas antes de qualquer conserto.
 *
 * Não é a primeira vez, e a segunda medição tem OUTRO sintoma — o que mostra que a causa é a
 * precedência, não um projeto específico. Em 22/ago/2026 o `piramide-porta-secreta` foi
 * RE-DECUPADO: o `words.json` era de 15/ago e o `words-final.json` de 21/ago. A janela da `s82`
 * (inSec 806,97) caía sobre a fala da `s64` — "saem dois canos estreitos…", a 259 s de distância —
 * e cinco cenas com âncora CERTA foram acusadas. Ali a divergência vinha da re-decupagem; no túnel,
 * do corte. Mesma linha, duas origens.
 *
 * Alarme falso em massa não é ruído inofensivo: ou alguém passa a noite consertando cena boa, ou
 * aprende a ignorar o gate — e aí ele para de proteger justamente quando acerta.
 *
 * A precedência agora é a mesma que o espelho usa: FINAL → LIMPO → BRUTO ([SIS-125]).
 *
 * E o gate passa a CARIMBAR de qual relógio falou. Três gates erraram hoje pelo mesmo motivo, e
 * nenhum dizia em que relógio estava medindo — o `qc-fala-repetida` citou @406,4s no relógio limpo
 * para uma frase que está em @269,3s no da entrega, e quem foi procurar não achou nada e concluiu
 * que o gate delirava. Alerta sem unidade obriga quem lê a adivinhar a régua.
 */
const RELOGIOS = [
  { arq: "words-final.json", nome: "FINAL (master decupado)" },
  { arq: "words-limpo.json", nome: "LIMPO (pós-corte)" },
  { arq: "words.json", nome: "BRUTO (pré-corte)" },
];
const relogio = RELOGIOS.map((r) => ({ ...r, dados: lerJson(join(D, r.arq)) })).find((r) => r.dados);
const words = relogio?.dados || null;
if (!espelho) { console.error(`✗ sem espelho em ${D}`); process.exit(2); }
if (!words) { console.error(`✗ sem words.json em ${D} — sem a fala medida não há o que conferir`); process.exit(2); }
if (!JSON_SAIDA) console.log(`  relógio: ${relogio.nome} · ${relogio.arq}`);

const segmentos = (espelho.segmentos || espelho.cenas || []).filter((s) => s?.id);
const filtro = SO ? new RegExp(SO) : null;
const graphics = join(D, "graphics");
const laudos = [];

for (const s of segmentos) {
  if (filtro && !filtro.test(s.id)) continue;
  const html = join(graphics, `${s.id}.html`);
  if (!existsSync(html)) continue;
  const fonte = readFileSync(html, "utf8");
  const declaradas = lerAncoras(fonte);
  if (!declaradas.length) { laudos.push({ cena: s.id, ancoras: 0, sem_contrato: true, achados: [] }); continue; }
  const dur = Number(s.dur ?? s.duracao ?? (Number(s.outSec) - Number(s.inSec)));
  const inSec = Number(s.inSec);
  if (!Number.isFinite(dur) || !Number.isFinite(inSec)) {
    laudos.push({ cena: s.id, ancoras: declaradas.length, erro: "janela da cena não determinável", achados: [] });
    continue;
  }
  const conferencia = conferirAncoras(fonte, { words, inSec, dur });
  laudos.push({
    cena: s.id,
    ancoras: conferencia.length,
    achados: conferencia.filter((c) => c.veredito !== "ok").map((c) => ({
      id: c.id, ancora: c.ancora, veredito: c.veredito, entra: c.entra, esperado: c.esperado, desvio: c.desvio,
    })),
  });
}

const comContrato = laudos.filter((l) => !l.sem_contrato && !l.erro);
const semContrato = laudos.filter((l) => l.sem_contrato).length;
const foraDoTempo = comContrato.flatMap((l) => l.achados.filter((a) => a.veredito === "fora-do-tempo").map((a) => ({ cena: l.cena, ...a })));
const foraDaFala = comContrato.flatMap((l) => l.achados.filter((a) => a.veredito === "ancora-fora-da-fala").map((a) => ({ cena: l.cena, ...a })));
const semEntra = comContrato.flatMap((l) => l.achados.filter((a) => a.veredito === "sem-data-entra").map((a) => ({ cena: l.cena, ...a })));

if (JSON_SAIDA) {
  console.log(JSON.stringify({ proj: PROJ, cenas: laudos.length, sem_contrato: semContrato, fora_do_tempo: foraDoTempo, fora_da_fala: foraDaFala, sem_entra: semEntra }, null, 1));
} else {
  const ancoradas = comContrato.length;
  console.log(`\n  ${laudos.length} cena(s) · ${ancoradas} com âncora declarada · ${semContrato} ainda sem contrato (débito, não defeito)\n`);
  for (const a of foraDoTempo) console.log(`  ✗ ${a.cena.padEnd(34)} #${String(a.id || "?").padEnd(12)} "${a.ancora}" entra em ${a.entra}s e a fala está em ${a.esperado}s (${a.desvio > 0 ? "+" : ""}${a.desvio}s)`);
  for (const a of foraDaFala) console.log(`  ⛔ ${a.cena.padEnd(34)} #${String(a.id || "?").padEnd(12)} "${a.ancora}" NÃO existe na fala desta cena`);
  for (const a of semEntra) console.log(`  ⚠ ${a.cena.padEnd(34)} #${String(a.id || "?").padEnd(12)} "${a.ancora}" sem data-entra — a âncora não governa nada`);
  if (!foraDoTempo.length && !foraDaFala.length && !semEntra.length) console.log("  ✓ nenhuma âncora declarada está fora do tempo\n");
  else console.log(`\n  ${foraDoTempo.length} fora do tempo · ${foraDaFala.length} fora da fala · ${semEntra.length} sem data-entra`);
  if (semContrato) console.log(`\n  ${semContrato} cena(s) sem \`data-ancora\`: débito conhecido do contrato novo (21/ago/2026). Ausência não reprova.\n`);
}

// Sem `--duro`, o gate MEDE e não barra: o contrato é novo e quase nenhuma cena o cumpre ainda.
if (!DURO) process.exit(0);
process.exit(foraDoTempo.length || foraDaFala.length ? 1 : 0);
