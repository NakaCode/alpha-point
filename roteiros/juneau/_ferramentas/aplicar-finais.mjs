// Aplica os ajustes finais da rodada 4, com a redação exata que os revisores propuseram.
// Cada troca tem de casar exatamente uma vez na fala; os excerpts dos claim_usages acompanham.
import fs from "node:fs";
const R = JSON.parse(fs.readFileSync("r4-result.json", "utf8")).result;
const secs = JSON.parse(JSON.stringify(R.secoes_finais));

const TROCAS = [
  { id: "E1", origem: "crítico de roteiro 3", de: "Voters had said yes to the idea. They had not said yes to the price. ", para: "" },
  { id: "E2", origem: "crítico de roteiro 2 (evt-28.2: o HB 3, Sec. 16, revoga AS 44.06.050–.060)", de: "proposed repealing that rule.", para: "proposed repealing the whole cost law, for the capital as well as the legislature.", evidencia: "evt-28.2" },
  { id: "E3", origem: "crítico de roteiro 4", de: " The final study concluded the state could not afford a high-cost project in Lynn Canal at that time.", para: "" },
  { id: "E4", origem: "locução + crítico de roteiro 5", de: "that no also repealed", para: "the 1982 no vote also repealed" },
  { id: "E5", origem: "crítico de roteiro 6", de: "for about a decade, oil supplied", para: "for a decade, oil supplied" },
  { id: "E6", origem: "locução", de: "oil prices fell by more than three quarters", para: "oil prices lost more than three quarters of their value" },
  { id: "E7", origem: "locução", de: "Harris, the man you heard at the start, called", para: "Harris, the committee chair quoted earlier, called" },
  { id: "E8", origem: "locução", de: "The legislature could meet somewhere else, even with the capital still in Juneau.", para: "The rule names the legislature because it could move on its own, even with the capital still in Juneau." },
];

const log = [];
for (const t of TROCAS) {
  let n = 0;
  for (const s of secs) {
    s.paragrafos = s.paragrafos.map((p) => { const c = p.split(t.de).length - 1; n += c; return p.split(t.de).join(t.para); });
    // parágrafo que ficou vazio sai; espaço duplo vira simples
    s.paragrafos = s.paragrafos.map((p) => p.replace(/ {2,}/g, " ").trim()).filter(Boolean);
    const texto = s.paragrafos.join("\n\n");
    s.claim_usages = s.claim_usages.flatMap((u) => {
      if (u.excerpt.includes(t.de.trim())) {
        const novo = u.excerpt.split(t.de.trim()).join(t.para.trim()).replace(/ {2,}/g, " ").trim();
        if (!novo) return [];
        const ids = t.evidencia && !u.evidence_ids.includes(t.evidencia) ? [...u.evidence_ids, t.evidencia] : u.evidence_ids;
        return [{ excerpt: novo, evidence_ids: ids }];
      }
      return [u];
    }).filter((u) => texto.includes(u.excerpt));
  }
  if (n !== 1) throw new Error(`${t.id}: casou ${n} vezes (esperado 1): "${t.de}"`);
  log.push({ ...t, casou: n });
}
// E2 sem claim_usage que cubra a frase nova? cria um
const alvo = "proposed repealing the whole cost law, for the capital as well as the legislature.";
for (const s of secs) if (s.paragrafos.join(" ").includes(alvo) && !s.claim_usages.some((u) => u.excerpt.includes(alvo))) s.claim_usages.push({ excerpt: alvo, evidence_ids: ["evt-28.2"] });

fs.writeFileSync("r4-final-secoes.json", JSON.stringify(secs, null, 1));
fs.writeFileSync("r4-final-trocas.json", JSON.stringify(log, null, 1));
const t = secs.map((s) => s.paragrafos.join("\n\n")).join("\n\n");
console.log(`trocas: ${log.length}/8 · palavras: ${t.split(/\s+/).filter(Boolean).length}`);
for (const k of ["that rule", "Voters had said yes", "final study concluded", "man you heard", "Frank Harris"]) console.log(`  ainda tem "${k}"? ${t.includes(k)}`);
const naoLit = secs.flatMap((s) => s.claim_usages.filter((u) => !s.paragrafos.join("\n\n").includes(u.excerpt)).map((u) => u.excerpt));
console.log(`excerpts não literais: ${naoLit.length}`);
