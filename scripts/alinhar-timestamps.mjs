// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/alinhar-timestamps.mjs (linhas 1-38, commit 4afda12).
// O que mudou: nada — só este cabeçalho. Atenção: ele arredonda para 0,01 s, não para a grade de quadro (1/30 s); quem exige a grade é o montador, e a conferência dela é da frente de render.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// ALINHA inSec/dur das cenas às FRONTEIRAS DE PALAVRA reais (words.json) → mata o desync sub-segundo (fim solto).
// O início já costuma vir cravado; o fim (dur) às vezes sobra/corta ~1-1.6s. Crava nos dois e SALVA no plano.
// Uso: node scripts/alinhar-timestamps.mjs <plano.json> <words.json> [--dry]
import { readFileSync, writeFileSync } from "node:fs";
const [planoP, wordsP, ...flags] = process.argv.slice(2);
if (!planoP || !wordsP) { console.error("uso: alinhar-timestamps.mjs <plano.json> <words.json> [--dry]"); process.exit(1); }
const dry = flags.includes("--dry");
const plano = JSON.parse(readFileSync(planoP, "utf8"));
const w = JSON.parse(readFileSync(wordsP, "utf8"));
const W = (Array.isArray(w) ? w : (w.words || [])).map((x) => ({ s: x.start ?? x.s ?? 0, e: x.end ?? x.e ?? (x.start ?? 0) + 0.3 }));
if (!W.length) { console.error("words.json vazio — nada a alinhar"); process.exit(0); }
const starts = W.map((x) => x.s), ends = W.map((x) => x.e);
const nearest = (arr, t, max) => { let b = null, bd = max; for (const v of arr) { const d = Math.abs(v - t); if (d < bd) { bd = d; b = v; } } return b; };  // null se nada dentro de max

const anim = plano.segmentos.filter((s) => s.anima).sort((a, b) => a.inSec - b.inSec);
let mudou = 0;
const curtas = [];   // cenas que ficariam <2s: reportadas, nunca "consertadas" por invasão
for (let i = 0; i < anim.length; i++) {
  const s = anim[i], nextIn = anim[i + 1]?.inSec ?? Infinity, oi = s.inSec, od = s.dur;
  const ns = nearest(starts, s.inSec, 0.6); if (ns != null) s.inSec = +ns.toFixed(2);     // início → word-start (≤0.6s)
  const ne = nearest(ends, oi + od, 2.0);                                                  // fim → word-end (≤2s)
  // ENCOSTA na próxima (end = nextIn), não `nextIn - 0.05`. O recuo de 0,05 s era zelo contra
  // invasão, mas produzia de propósito a fresta que a FIN-08 PROÍBE: "ou as cenas se encostam
  // (0 gap → o Bôco não aparece), ou a janela de apresentador é intencional e ≥2–3 s. Proibida
  // qualquer janela entre 0 e ~2 s." A ferramenta oficial de retiming violava a lei oficial de
  // timing — 0,05 s é 1,5 frame de flash do Bôco, multiplicado por toda cena do vídeo.
  let end = Math.min(ne != null ? ne : oi + od, nextIn);
  const dur = +(end - s.inSec).toFixed(2);
  // NÃO force `Math.max(2, …)`: se o espaço até a próxima cena é menor que 2 s, forçar 2 s faz a
  // cena INVADIR a seguinte — troca um defeito por outro pior, e em silêncio. Cena curta demais é
  // decisão editorial (encurtar a anterior ou fundir as duas), então aqui só se avisa.
  if (dur < 2) curtas.push(`${s.id} (${dur}s)`);
  s.dur = dur;
  if (Math.abs(s.inSec - oi) > 0.05 || Math.abs(s.dur - od) > 0.05) { mudou++; console.log(`• ${s.id.padEnd(24)} in ${oi}→${s.inSec}  ·  dur ${od}→${s.dur}  (Δfim ${(((s.inSec + s.dur) - (oi + od)) || 0).toFixed(2)}s)`); }
}
if (curtas.length) console.log(`\n⚠ ${curtas.length} cena(s) ficariam <2s — decida encurtar a anterior ou fundir, NÃO deixe invadir:\n   ${curtas.join("\n   ")}`);
console.log(`\n${mudou} cena(s) ajustada(s)${dry ? " — DRY, não salvou" : " → salvo em " + planoP}`);
if (!dry) writeFileSync(planoP, JSON.stringify(plano, null, 2));
