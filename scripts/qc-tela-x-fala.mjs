#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-tela-x-fala.mjs (linhas 1-125, commit 4afda12).
// O que mudou: o idioma vem de canal.json (idiomas.origem) e, em inglês, os ordinais são first/third × 1st/3rd; origem sem
// dicionário de ordinais (es, fr, de…) é NÃO MEDIDO (exit 2) — antes caía no português em silêncio e dava verde; canal.json ilegível
// também é 2; sem transcrição é 2 (era 1, "reprovei"); o clipe da cena é graphics/<id>.mp4 (Régie) ou <id>-4k.mp4 (estúdio); ffprobe
// por executavelFf (stock/lib/ferramentas.mjs, sob demanda); BOM no espelho; o projeto é achado também na raiz do canal. Continua
// medindo só onde há _reaproveitamento.json (arte nova sobre voz velha); sem ele, exit 2 (NÃO MEDI).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * qc-tela-x-fala.mjs — acusa a TELA DESMENTINDO O APRESENTADOR.
 *
 * O CASO QUE O CRIOU (25/jul, `compilado-previsoes-jiang`): a narração diz, em 3618,4s, *"o Brasil
 * tem a **terceira** maior reserva mundial de terras raras"*. A cena desenhada por cima mostrava
 * **"2º"** — porque o dado mudou (USGS MCS 2025 → 2026) entre a gravação e a montagem. O espectador
 * ouve uma coisa e lê outra, no mesmo segundo. Passou por TODOS os gates: a cena está tecnicamente
 * perfeita, os dados estão certos e atualizados. O defeito não está na cena — está na RELAÇÃO entre
 * a cena nova e a voz antiga.
 *
 * ⚠️ POR QUE ISTO É ESTRUTURAL NUM COMPILADO, e não azar: reaproveitamento monta arte NOVA sobre
 * narração VELHA. Todo número que envelheceu no intervalo — ranking, população, recorde, preço,
 * "o maior do mundo" — vira uma contradição em potencial. Quanto melhor a pesquisa da arte (dado
 * fresco!), MAIOR a chance de desmentir o apresentador. O acerto de uma estação vira o erro do
 * conjunto.
 *
 * O QUE ELE MEDE: ordinais. São a classe em que a contradição é gritante para o espectador
 * ("terceira" × "2º") e inequívoca para a máquina — sem o ruído de comparar qualquer número com
 * qualquer número. Não pretende cobrir tudo: pretende pegar a família que já mordeu.
 *
 * O CONSERTO, quando acusa, quase nunca é mudar o número: é **não afirmar posição**. Escrever o
 * valor velho põe dado morto na tela; escrever o novo desmente a voz. Mostrar a grandeza (11 Mt) e
 * deixar a proporção contar a posição é verdadeiro nas duas versões.
 *
 * Uso: node scripts/qc-tela-x-fala.mjs <proj> [--json]
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, basename, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { wordsDoEspelho, janelaTxt } from "./lib/words-do-espelho.mjs";
import { idiomaDeOrigem, lerJsonOuNaoMedi, naoMedi, ferramentasOuNaoMedi } from "./lib/modos.mjs";

const RAIZ = fileURLToPath(new URL("..", import.meta.url));   // [porte Régie]
// [porte Régie] o idioma em que o canal FALA (canal.json → idiomas.origem). O estúdio só falava português;
// a Régie já tem canal em inglês (alpha-point), onde "third" e "3rd" são o par que se contradiz.
// Só há dicionário de ordinais para pt e en. Outra origem NÃO MEDE: cair no português dava "✓ nenhum ordinal
// contradiz" num canal em espanhol — "tercero" não casa com "terceir" e a tela "3º" casa com o regex pt —, um
// verde sem medida (revisão v1). canal.json ilegível também é NÃO MEDI (I5), nunca "pt-BR" chutado.
const IDIOMA = idiomaDeOrigem("qc-tela-x-fala");
const INGLES = /^en\b/i.test(IDIOMA);
if (!INGLES && !/^pt\b/i.test(IDIOMA))
  naoMedi("qc-tela-x-fala", `o canal fala ${IDIOMA} (canal.json → idiomas.origem) e este gate só conhece os ordinais de pt e en — ` +
    "confira à mão que a tela não afirma posição (1º/2º…) diferente da que a narração diz.");

const argv = process.argv.slice(2);
const proj = argv.find((a) => !a.startsWith("--"));
const JSON_OUT = argv.includes("--json");
if (!proj) { console.error("uso: node scripts/qc-tela-x-fala.mjs <proj> [--json]"); process.exit(2); }

// [porte Régie] aceita <proj>, out/<proj> com / ou \ e a pasta do projeto; o slug é procurado na raiz do canal.
const D = (() => {
  const limpo = proj.replace(/[\\/]+$/, "");
  if (isAbsolute(limpo)) return limpo;
  if (existsSync(limpo) && statSync(limpo).isDirectory()) return resolve(limpo);
  if (/^out[\\/]/.test(limpo)) return join(RAIZ, limpo);
  return existsSync(join("out", limpo)) ? join("out", limpo) : join(RAIZ, "out", limpo);
})();
/* ⚠️ A FALA A COMPARAR É A DO RELÓGIO DO ESPELHO, não a de um nome fixo. Esta linha era
 * `words.json` cravado; num projeto re-espelhado em tempo FINAL isso põe cada cena sobre outro
 * trecho da gravação e o cruzamento tela × fala julga o texto errado — [FIN-142]. Quem escolhe
 * agora é a medida. */
const espPath = join(D, "espelho.json");
const segs = existsSync(espPath)
  ? (() => { const e = lerJsonOuNaoMedi(espPath, "qc-tela-x-fala"); return e.segmentos || e.cenas || []; })()   // [porte Régie] BOM
  : [];
const relogio = wordsDoEspelho(D, segs.length ? Math.max(...segs.map((s) => (s.inSec ?? 0) + (s.dur ?? 0))) : 0);
if (!relogio.arquivo) naoMedi("qc-tela-x-fala", `sem transcrição em ${D} — não dá para comparar com a fala (words.json)`);   // [porte Régie] era exit 1
if (!relogio.cabe && segs.length) console.error(`⚠️ ${janelaTxt(relogio)} não casa com o espelho — o cruzamento pode estar sobre outro trecho`);
const palavras = relogio.words
  .map((x) => ({ t: x.start ?? x.s ?? 0, p: String(x.word || x.text || x.w || "").trim() }))
  .filter((x) => x.p);

// ORDINAIS: por extenso (como a voz diz) e em algarismo (como a tela escreve).
const PORTEXTENSO = { primeir: 1, segund: 2, terceir: 3, quart: 4, quint: 5, sext: 6, setim: 7, sétim: 7, oitav: 8, non: 9, decim: 10, décim: 10 };
// [porte Régie] os ordinais em inglês, com a mesma regra de raiz + sufixo curto (first/firstly não, "first" sim).
const EN_EXTENSO = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5, sixth: 6, seventh: 7, eighth: 8, ninth: 9, tenth: 10 };
const ordinalDaFala = (p) => {
  const s = p.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  if (INGLES) {   // [porte Régie]
    const limpo = s.replace(/[^a-z]/g, "");
    return EN_EXTENSO[limpo] ?? null;
  }
  for (const [raiz, n] of Object.entries(PORTEXTENSO)) {
    const r = raiz.normalize("NFD").replace(/[̀-ͯ]/g, "");
    if (s.startsWith(r) && s.length <= r.length + 2) return n;    // primeiro/primeira/segundo…
  }
  return null;
};

const cenas = [];
const reapPath = join(D, "_reaproveitamento.json");
if (existsSync(reapPath)) {
  const r = lerJsonOuNaoMedi(reapPath, "qc-tela-x-fala");   // [porte Régie] BOM; quebrado = NÃO MEDIDO
  for (const c of (r.cenas_novas || [])) {
    if (typeof c.substitui_plano_em !== "number") continue;
    const f = join(D, "graphics", `${c.slug}.html`);
    if (existsSync(f)) cenas.push({ slug: c.slug, ini: c.substitui_plano_em, arq: f });
  }
}
/* ⚠️ "NÃO SE APLICA" NÃO É "REPROVOU" (exit 2, nunca 1). Este gate mede a contradição entre arte NOVA
 * e narração VELHA — uma relação que só existe onde houve reaproveitamento. Num vídeo comum não há
 * `_reaproveitamento.json`, e sair 1 fazia o gate acusar TODO vídeo normal: alarme falso em 100% dos
 * casos, que é a forma mais rápida de ensinar a estação a ignorar gate. Medido em 11/ago no `o-acre`,
 * ao ligá-lo na estação de finalização — e é o mesmo defeito que o `qc-mapa-movimento` tinha na
 * cena que não é de mapa. Ausência de insumo é NÃO MEDI; quem reprova aqui é o ordinal divergente. */
if (!cenas.length) {
  console.log(existsSync(reapPath)
    ? `⚠ NÃO MEDI — ${basename(reapPath)} existe mas nenhuma cena tem \`substitui_plano_em\` + HTML no disco.`
    : `⚠ NÃO MEDI — este vídeo não tem reaproveitamento (sem ${basename(reapPath)}), então não há arte nova sobre voz velha a conferir.`);
  process.exit(2);
}

// [porte Régie] ffprobe: FFPROBE_PATH, REGIE_FFPROBE ou o PATH (ffprobe.exe no Windows); array, sem shell.
const FF = await ferramentasOuNaoMedi("qc-tela-x-fala");   // o dono único da regra: scripts/stock/lib/ferramentas.mjs
const exe = (nome) => FF.executavelFf(nome);
const durDe = (f) => { try { return +execFileSync(exe("ffprobe"), ["-v","error","-show_entries","format=duration","-of","csv=p=0", f], { encoding: "utf8", windowsHide: true }).trim() || 0; } catch { return 0; } };   // [porte Régie]

const achados = [];
for (const c of cenas) {
  const html = readFileSync(c.arq, "utf8");
  // só o CORPO visível: comentário de cabeçalho fala de dados e daria falso-positivo em massa
  const corpo = html.replace(/<!--[\s\S]*?-->/g, "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
  // [porte Régie] em inglês a tela escreve 1st/2nd/3rd/4th…; em português, 1º/2ª.
  const naTela = [...new Set([...corpo.matchAll(INGLES ? /(?<![\d,.])([1-9]|10)\s*(?:st|nd|rd|th)\b/gi : /(?<![\d,.])([1-9]|10)\s*[ºªo°]/g)].map((m) => +m[1]))];
  if (!naTela.length) continue;

  // [porte Régie] a Régie grava graphics/<id>.mp4 (1080p por padrão); o estúdio gravava <id>-4k.mp4. Os dois valem.
  const mp4 = [`${c.slug}-4k.mp4`, `${c.slug}.mp4`, `${c.slug}-4k.mov`, `${c.slug}.mov`].map((n) => join(D, "graphics", n)).find(existsSync);
  const dur = mp4 ? durDe(mp4) || 10 : 10;
  // a fala da cena + 1,5 s antes: o word-lock costuma pôr o gráfico logo DEPOIS da palavra
  const jan = palavras.filter((p) => p.t >= c.ini - 1.5 && p.t <= c.ini + dur);
  const naFala = [...new Set(jan.map((p) => ordinalDaFala(p.p)).filter(Boolean))];
  if (!naFala.length) continue;

  const conflito = naTela.filter((n) => !naFala.includes(n));
  if (conflito.length && naFala.some((n) => !naTela.includes(n))) {
    achados.push({ slug: c.slug, em: c.ini, tela: naTela, fala: naFala,
                   trecho: jan.map((p) => p.p).join(" ").slice(0, 150) });
  }
}

if (JSON_OUT) { console.log(JSON.stringify({ proj, cenas: cenas.length, achados }, null, 1)); process.exit(achados.length ? 1 : 0); }

console.log(`\n══ TELA × FALA · ${proj} · ${cenas.length} cenas posicionadas ══\n`);
if (!achados.length) { console.log("  ✓ nenhum ordinal da tela contradiz a narração\n"); process.exit(0); }
for (const a of achados) {
  console.log(`  ✗ ${a.slug}  @${a.em.toFixed(1)}s`);
  const ord = (n) => (INGLES ? `${n}${n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th"}` : n + "º");   // [porte Régie]
  console.log(`      tela diz: ${a.tela.map(ord).join(", ")}   ·   voz diz: ${a.fala.map(ord).join(", ")}`);
  console.log(`      "…${a.trecho}…"\n`);
}
console.log(`  ${achados.length} contradição(ões) — o espectador OUVE um número e LÊ outro.`);
console.log(`  O conserto quase nunca é trocar o número: é NÃO AFIRMAR posição. O valor velho põe dado`);
console.log(`  morto na tela; o novo desmente a narração. Mostre a grandeza e deixe a proporção`);   // [porte Régie] faceless: a voz é a narração
console.log(`  contar a posição — é verdadeiro nas duas versões do dado.\n`);
process.exit(1);
