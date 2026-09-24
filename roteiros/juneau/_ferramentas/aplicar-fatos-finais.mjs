// Os consertos prontos da verificação final (fatos + crítico), aplicados verbatim. Cada troca
// casa exatamente uma vez; os excerpts acompanham. Saída: r5-secoes.json e r5-trocas.json.
import fs from "node:fs";
const secs = JSON.parse(fs.readFileSync("r4-final-secoes.json", "utf8"));
const TROCAS = [
  { id: "F1", origem: "fatos f-070 (NÃO ACHEI) + crítico final 1", de: "The rule names the legislature because it could move on its own, even with the capital still in Juneau.", para: "The rule covers the legislature too: lawmakers could move their sessions even with the capital still in Juneau." },
  { id: "F2", origem: "fatos A17 (DIVERGE; 42 U.S.C. § 4332(2)(C), conferido pelo verificador na Cornell LII)", de: "Before a major project built with federal money, federal law requires an environmental impact statement, a study of what the project would change.", para: "When a federal project could significantly change the environment, federal law requires an environmental impact statement, a study of what the project would change." },
  { id: "F3", origem: "fatos f-071 (a lei prevê, não descreve um fato em curso)", de: "A nine-member commission tallies the costs, including social, economic and environmental ones.", para: "The law calls for a nine-member commission to tally the costs, including social, economic and environmental ones." },
  { id: "F4", origem: "fatos (atribuição: a declaração contrária no folheto de 1994)", de: "\"This time,\" they wrote, \"no price tag is attached.\"", para: "\"This time,\" the statement against it said, \"no price tag is attached.\"" },
];
const log = [];
for (const t of TROCAS) {
  let n = 0;
  for (const s of secs) {
    s.paragrafos = s.paragrafos.map((p) => { n += p.split(t.de).length - 1; return p.split(t.de).join(t.para); });
    s.claim_usages = s.claim_usages.map((u) => (u.excerpt.includes(t.de) ? { ...u, excerpt: u.excerpt.split(t.de).join(t.para) } : u));
    // excerpt que era só um pedaço da frase trocada deixa de casar: refaz pela frase nova
    const texto = s.paragrafos.join("\n\n");
    s.claim_usages = s.claim_usages.map((u) => (texto.includes(u.excerpt) ? u : t.de.includes(u.excerpt) ? { ...u, excerpt: t.para } : u));
  }
  if (n !== 1) throw new Error(`${t.id}: casou ${n} vezes`);
  log.push({ ...t, casou: n });
}
const naoLit = secs.flatMap((s) => s.claim_usages.filter((u) => !s.paragrafos.join("\n\n").includes(u.excerpt)).map((u) => u.excerpt));
if (naoLit.length) throw new Error(`excerpts não literais: ${naoLit.join(" | ")}`);
fs.writeFileSync("r5-secoes.json", JSON.stringify(secs, null, 1));
fs.writeFileSync("r5-trocas.json", JSON.stringify(log, null, 1));
console.log(`trocas ${log.length}/4 · palavras ${secs.map((s) => s.paragrafos.join(" ")).join(" ").split(/\s+/).filter(Boolean).length}`);
