#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/roteiro/conferir-cortes.mjs (linhas 1-286, commit 4afda12).
// O que mudou: nada — só este cabeçalho.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
/**
 * conferir-cortes.mjs — o gate determinístico do `doutor-de-roteiro`.
 *
 * ═══ POR QUE EXISTE ════════════════════════════════════════════════════════════════════════════
 * O laudo de cortes é lido por uma pessoa que decide com base nele SEM reabrir o vídeo — é essa a
 * economia que o agente entrega. Só que a coisa mais fácil de um modelo errar num laudo desses é
 * justamente a que a leitura humana NÃO pega: o **timecode**. Um intervalo plausível, com um texto
 * plausível ao lado, apontando para outro lugar do vídeo. Quem lê vê uma citação que existe e um
 * horário que parece certo, aprova, e o corte cai na fala errada — que é exatamente a explicação que
 * o ofício jurou não cortar.
 *
 * Este script não julga mérito nenhum. Ele confere o que é aritmética e casamento de texto:
 *
 *   1. o intervalo existe dentro da duração da transcrição;
 *   2. o texto citado É o que está naquele intervalo (fragmentos em ordem, tolerante a "…");
 *   3. nenhum span se sobrepõe a outro (corte sobreposto conta o ganho duas vezes);
 *   4. a soma dos ganhos bate com o total declarado, e a fração com a duração;
 *   5. a EMENDA cita palavras que de fato ficam de cada lado da junção;
 *   6. classe válida e campos obrigatórios presentes.
 *
 * O item 5 é o que mais pega: uma emenda escrita "de cabeça" — plausível, bem escrita, e que não
 * corresponde às palavras que sobram — passa por qualquer revisão humana e é a prova que o laudo
 * inteiro oferece. Se a emenda não bate, o corte não foi conferido nem pelo próprio autor.
 *
 * Uso:
 *   node scripts/roteiro/conferir-cortes.mjs <cortes.json> <transcricao> [--fps=30] [-v]
 *
 * Transcrição aceita: SMPTE em blocos (`HH:MM:SS:FF - HH:MM:SS:FF` + linhas de texto), SRT,
 * ou um `words-final.json` (palavra a palavra — a de melhor precisão).
 *
 * Exit 0 = tudo confere · 1 = há achados · 2 = uso/arquivo inválido.
 * Custo: zero inferência.
 */
import { readFileSync, existsSync } from "node:fs";

const args = process.argv.slice(2);
const VERBOSE = args.includes("-v") || args.includes("--verbose");
const FPS = +((args.find((a) => a.startsWith("--fps=")) || "").split("=")[1] || 30);
const [fCortes, fTrans] = args.filter((a) => !a.startsWith("-"));

if (!fCortes || !fTrans) {
  console.error("uso: conferir-cortes.mjs <cortes.json> <transcricao> [--fps=30] [-v]");
  process.exit(2);
}
for (const f of [fCortes, fTrans]) {
  if (!existsSync(f)) { console.error(`✗ não existe: ${f}`); process.exit(2); }
}

/**
 * As duas famílias do OFÍCIO §4. A família B (ritmo) nasceu do laudo reprovado de 13/ago/2026, em
 * que 4 de 5 cortes eram frases de 2 a 8 s: com só as classes de repetição, o ofício **não tinha
 * como** achar bloco lento, porque nenhuma pergunta dele era sobre tempo.
 */
const FAMILIA_A = ["samba", "terceira-volta", "recapitulacao", "preambulo", "digressao", "explicacao-excedente", "enfeite"];
const FAMILIA_B = ["bloco-arrastado", "setup-longo", "enumeracao-exaustiva", "caminho-longo", "descida-de-detalhe"];
const CLASSES = new Set([...FAMILIA_A, ...FAMILIA_B]);

// ── Leitura da transcrição ─────────────────────────────────────────────────────────────────────
/**
 * Devolve blocos {ini, fim, texto} em segundos. Três formatos, um só formato de saída — assim o
 * resto do script não sabe (nem precisa saber) de onde o texto veio.
 *
 * ⚠️ O SMPTE traz FRAMES no último campo, não centésimos: `00:07:25:23` são 23 frames. Ler isso
 * como decimal desloca até ~1 s por borda, e um segundo é meia frase falada.
 */
function lerTranscricao(arquivo, fps) {
  const cru = readFileSync(arquivo, "utf8");

  if (arquivo.endsWith(".json")) {
    const j = JSON.parse(cru);
    const ws = Array.isArray(j) ? j : j.words;
    if (!Array.isArray(ws)) throw new Error("JSON não parece words-final (nem lista nem .words)");
    return { blocos: ws.map((w) => ({ ini: +w.start, fim: +w.end, texto: w.w })), tipo: "palavra" };
  }

  const tc = (s) => {
    const p = s.split(":").map(Number);
    // HH:MM:SS:FF (SMPTE) ou HH:MM:SS,mmm (SRT)
    if (p.length === 4) return p[0] * 3600 + p[1] * 60 + p[2] + p[3] / fps;
    return p[0] * 3600 + p[1] * 60 + p[2];
  };

  const blocos = [];
  const linhas = cru.split(/\r?\n/);
  const RE_SMPTE = /^(\d{2}:\d{2}:\d{2}[:,]\d{2,3})\s*(?:-->|-|–)\s*(\d{2}:\d{2}:\d{2}[:,]\d{2,3})/;

  for (let i = 0; i < linhas.length; i++) {
    const m = linhas[i].trim().match(RE_SMPTE);
    if (!m) continue;
    const ini = tc(m[1].replace(",", ":"));
    const fim = tc(m[2].replace(",", ":"));
    // O texto do bloco é tudo até a próxima linha de timecode (ou o fim), menos linhas de rótulo
    // de falante e numeração de legenda — que não são fala e poluiriam o casamento de citação.
    const buf = [];
    for (let j = i + 1; j < linhas.length; j++) {
      if (RE_SMPTE.test(linhas[j].trim())) break;
      const t = linhas[j].trim();
      if (!t) continue;
      if (/^\d+$/.test(t)) continue;                       // número de legenda SRT
      if (/^(Desconhecido|Speaker ?\d*|Falante ?\d*)$/i.test(t)) continue;
      buf.push(t);
    }
    blocos.push({ ini, fim, texto: buf.join(" ") });
  }
  if (!blocos.length) throw new Error("nenhum bloco com timecode reconhecido");
  return { blocos, tipo: "bloco" };
}

// ── Normalização e casamento ───────────────────────────────────────────────────────────────────
const norm = (s) => (s || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")   // escapes explícitos: range literal de diacrítico não sobrevive a re-encode
  .toLowerCase()
  .replace(/[^\p{L}\p{N}\s]/gu, " ")
  .replace(/\s+/g, " ")
  .trim();

/** O texto falado dentro de [ini,fim] — todo bloco que INTERSECTA a janela. */
const textoEntre = (blocos, ini, fim) =>
  blocos.filter((b) => b.fim > ini && b.ini < fim).map((b) => b.texto).join(" ");

/**
 * A citação está contida no texto real? Fragmentos separados por "…"/"..." conferidos EM ORDEM —
 * é assim que se cita um trecho longo sem transcrever o parágrafo inteiro, e é assim que se confere.
 */
function citacaoBate(citacao, real) {
  const alvo = norm(real);
  const frags = String(citacao).split(/…|\.\.\./).map(norm).filter((f) => f.length > 3);
  if (!frags.length) return { ok: false, motivo: "citação vazia ou curta demais para conferir" };
  let pos = 0;
  for (const f of frags) {
    const i = alvo.indexOf(f, pos);
    if (i < 0) return { ok: false, motivo: `não achei no intervalo: "${f.slice(0, 60)}…"` };
    pos = i + f.length;
  }
  return { ok: true };
}

// ── Programa ───────────────────────────────────────────────────────────────────────────────────
let doc, trans;
try { doc = JSON.parse(readFileSync(fCortes, "utf8")); }
catch (e) { console.error(`✗ ${fCortes} não é JSON válido: ${e.message}`); process.exit(2); }
try { trans = lerTranscricao(fTrans, FPS); }
catch (e) { console.error(`✗ ${fTrans}: ${e.message}`); process.exit(2); }

const { blocos, tipo } = trans;
const duracao = blocos[blocos.length - 1].fim;
const cortes = doc.cortes || [];
const achados = [];
const ach = (id, msg) => achados.push(`${id}: ${msg}`);

console.log(`\n📄 ${fTrans}`);
console.log(`   ${blocos.length} ${tipo === "palavra" ? "palavras" : "blocos"} · duração ${fmt(duracao)} · fps ${FPS}`);
console.log(`📋 ${fCortes}`);
console.log(`   veredito "${doc.veredito ?? "?"}" · ${cortes.length} corte(s)\n`);

if (doc.veredito === "limpo" && cortes.length) ach("doc", `veredito "limpo" com ${cortes.length} cortes na lista`);
if (doc.veredito === "cortes" && !cortes.length) ach("doc", `veredito "cortes" sem nenhum corte`);
if (!doc.indiceDeIdeias?.length) ach("doc", "sem `indiceDeIdeias` — é a prova de que a busca por repetição foi feita (CONTRATO §5.5)");

/**
 * As três travas que nasceram do laudo reprovado (OFÍCIO §4, §7.3, §7.5). Elas existem porque o
 * defeito não era o autor: era o método permitir entregar doze frases soltas e chamar isso de
 * edição. Um gate que só confere timecode deixa passar um laudo tecnicamente perfeito e inútil.
 */
if (!doc.mapaDeBlocos?.length) {
  ach("doc", "sem `mapaDeBlocos` — a medição de tempo × informação nova é o que separa julgar o vídeo de caçar frase repetida (OFÍCIO §7.3)");
} else {
  const semSaisse = doc.mapaDeBlocos.filter((b) => !b.seSaisse).length;
  if (semSaisse) ach("doc", `${semSaisse} bloco(s) sem a resposta de "e se este bloco inteiro saísse?" (OFÍCIO §4, família B)`);
}
if (cortes.length) {
  const estruturais = cortes.filter((c) => FAMILIA_B.includes(c.classe));
  if (!estruturais.length && !doc.semBlocoLento) {
    ach("doc", "nenhum corte da FAMÍLIA B (ritmo) e sem o campo `semBlocoLento` explicando por quê — laudo só de ecos foi exatamente o que já reprovou (OFÍCIO §7.5)");
  }
  const miudos = cortes.filter((c) => (c.fimSec - c.iniSec) < 10);
  if (miudos.length && !estruturais.length) {
    ach("doc", `${miudos.length} corte(s) abaixo de 10 s sem nenhum estrutural na lista — micro-corte sozinho não muda o ritmo de nada (OFÍCIO §7.5, PISO)`);
  }
}

let somaGanho = 0;
const ordenados = [...cortes].sort((a, b) => (a.iniSec ?? 0) - (b.iniSec ?? 0));

for (const c of cortes) {
  const id = c.id || "(sem id)";

  for (const campo of ["classe", "iniSec", "fimSec", "citacao", "emenda"]) {
    if (c[campo] === undefined || c[campo] === null || c[campo] === "") ach(id, `campo obrigatório ausente: \`${campo}\``);
  }
  if (c.classe && !CLASSES.has(c.classe)) ach(id, `classe inválida "${c.classe}" (válidas: ${[...CLASSES].join(", ")})`);
  for (const k of ["fronteira", "conectivo", "referencia", "respiracao"]) {
    if (!c.checagens?.[k]) ach(id, `checagem ausente: \`${k}\` (OFÍCIO §6)`);
  }
  if (!c.explicacao || c.explicacao.unicaVez === undefined) ach(id, "sem os testes de explicação (OFÍCIO §3)");
  if (c.explicacao?.unicaVez === true) ach(id, "declara `unicaVez: true` — é a única explicação de algo e NÃO pode sair (OFÍCIO §3)");
  if (c.explicacao?.degrau === true) ach(id, "declara `degrau: true` — é passo intermediário de uma explicação (OFÍCIO §3)");

  const ini = +c.iniSec, fim = +c.fimSec;
  if (!Number.isFinite(ini) || !Number.isFinite(fim)) { ach(id, "iniSec/fimSec não numéricos"); continue; }
  if (fim <= ini) ach(id, `intervalo invertido ou nulo (${fmt(ini)} → ${fmt(fim)})`);
  if (ini < 0 || fim > duracao + 0.5) ach(id, `fora da transcrição: ${fmt(ini)} → ${fmt(fim)} (vídeo tem ${fmt(duracao)})`);

  // O timecode escrito no laudo tem de ser o mesmo dos segundos — é o par que a pessoa lê e usa.
  for (const [campo, seg] of [["in", ini], ["out", fim]]) {
    if (!c[campo]) continue;
    const s = tcParaSeg(c[campo]);
    if (s !== null && Math.abs(s - seg) > 1.5) ach(id, `\`${campo}\` ${c[campo]} não corresponde a ${fmt(seg)} (${Math.abs(s - seg).toFixed(1)} s de diferença)`);
  }

  const real = textoEntre(blocos, ini, fim);
  if (!real.trim()) ach(id, `nenhuma fala no intervalo ${fmt(ini)} → ${fmt(fim)}`);
  else {
    const r = citacaoBate(c.citacao, real);
    if (!r.ok) ach(id, `citação não bate com o intervalo — ${r.motivo}`);
  }

  if (c.jaDitoEm?.tc && c.jaDitoEm?.cit) {
    const s = tcParaSeg(c.jaDitoEm.tc);
    if (s === null) ach(id, `\`jaDitoEm.tc\` ilegível: "${c.jaDitoEm.tc}"`);
    else {
      const r = citacaoBate(c.jaDitoEm.cit, textoEntre(blocos, s - 6, s + 30));
      if (!r.ok) ach(id, `\`jaDitoEm\` não confere em ${c.jaDitoEm.tc} — ${r.motivo}`);
      if (s > ini && s < fim) ach(id, "`jaDitoEm` aponta para DENTRO do próprio corte");
    }
  }

  // A emenda: "…antes ▸ depois…". O lado esquerdo tem de ficar ANTES do corte e o direito DEPOIS.
  const partes = String(c.emenda || "").split(/▸|->|→|\|/);
  if (partes.length !== 2) ach(id, "emenda sem os dois lados separados por ▸ (OFÍCIO §6)");
  else {
    const antes = textoEntre(blocos, Math.max(0, ini - 25), ini);
    const depois = textoEntre(blocos, fim, Math.min(duracao, fim + 25));
    const e = citacaoBate(partes[0], antes);
    const d = citacaoBate(partes[1], depois);
    if (!e.ok) ach(id, `emenda: lado ESQUERDO não é o que fica antes de ${fmt(ini)} — ${e.motivo}`);
    if (!d.ok) ach(id, `emenda: lado DIREITO não é o que segue depois de ${fmt(fim)} — ${d.motivo}`);
  }

  const ganho = c.ganhoSec ?? (fim - ini);
  if (Math.abs(ganho - (fim - ini)) > 0.6) ach(id, `ganhoSec ${ganho} ≠ duração do span ${(fim - ini).toFixed(1)} s`);
  somaGanho += fim - ini;

  if (VERBOSE) console.log(`   ${id} ${fmt(ini)} → ${fmt(fim)} (${(fim - ini).toFixed(1)} s) ${c.classe}`);
}

for (let i = 1; i < ordenados.length; i++) {
  const a = ordenados[i - 1], b = ordenados[i];
  if (+b.iniSec < +a.fimSec) ach(b.id || `#${i}`, `sobrepõe ${a.id} (${fmt(a.iniSec)}→${fmt(a.fimSec)}) — ganho contado duas vezes`);
}

if (doc.totalCortesSec !== undefined && Math.abs(doc.totalCortesSec - somaGanho) > 1) {
  ach("doc", `totalCortesSec ${doc.totalCortesSec} ≠ soma medida ${somaGanho.toFixed(1)} s`);
}
if (doc.duracaoSec !== undefined && Math.abs(doc.duracaoSec - duracao) > 2) {
  ach("doc", `duracaoSec ${doc.duracaoSec} ≠ duração da transcrição ${duracao.toFixed(1)} s — relógio errado? (CONTRATO §1)`);
}
if (doc.fracaoDoVideo !== undefined) {
  const f = somaGanho / duracao;
  if (Math.abs(doc.fracaoDoVideo - f) > 0.02) ach("doc", `fracaoDoVideo ${doc.fracaoDoVideo} ≠ medida ${f.toFixed(3)}`);
}

console.log(`   total proposto: ${fmt(somaGanho)} de ${fmt(duracao)} (${((somaGanho / duracao) * 100).toFixed(1)}% do vídeo)\n`);

if (achados.length) {
  console.log(`✗ ${achados.length} achado(s):\n`);
  for (const a of achados) console.log(`   • ${a}`);
  console.log("");
  process.exit(1);
}
console.log("✓ tudo confere: timecodes existem, citações batem, emendas são reais, soma fecha.\n");

function fmt(s) {
  s = Math.max(0, +s || 0);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = Math.floor(s % 60);
  return h ? `${h}:${String(m).padStart(2, "0")}:${String(x).padStart(2, "0")}` : `${m}:${String(x).padStart(2, "0")}`;
}
function tcParaSeg(t) {
  const m = String(t).trim().match(/^(?:(\d+):)?(\d{1,2}):(\d{2})(?:[:,](\d{1,3}))?$/);
  if (!m) return null;
  const [, h, mm, ss, ff] = m;
  const frac = ff === undefined ? 0 : (ff.length === 3 ? +ff / 1000 : +ff / FPS);
  return (+(h || 0)) * 3600 + (+mm) * 60 + (+ss) + frac;
}
