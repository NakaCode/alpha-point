// Rodada 6: as trocas que o dono aprovou na página de decisões (24/09/2026), aplicadas verbatim
// sobre r5-secoes.json (sha 4192202703a8). Cada troca casa exatamente uma vez. Excerpts que a
// troca mexeu são refeitos: se o excerpt continha o trecho trocado, a troca vale dentro dele;
// se o excerpt estava dentro do trecho trocado, o MANUAL diz o novo excerpt (ou null = a
// afirmação saiu da voz e vai para a tela). Saída: r6-secoes.json, r6-trocas.json.
import fs from "node:fs";
import crypto from "node:crypto";
import { ITENS } from "../pend/itens.mjs";

const ESCOLHAS = JSON.parse(fs.readFileSync("../pend/aprovacao.json", "utf8")).escolhas;
const secs = JSON.parse(fs.readFileSync("r5-secoes.json", "utf8"));
const nar = (s) => s.map((x) => x.paragrafos.join("\n\n")).join("\n\n");
const sha = (s) => crypto.createHash("sha256").update(nar(s)).digest("hex");
if (!sha(secs).startsWith("4192202703a8")) throw new Error(`r5 não é 4192202703a8: ${sha(secs).slice(0, 12)}`);

const MANUAL = JSON.parse(fs.existsSync("r6-manual.json") ? fs.readFileSync("r6-manual.json", "utf8") : "{}");
const trocas = [];
for (const it of ITENS) {
  const op = it.opcoes.find((o) => o.id === ESCOLHAS[it.id]);
  if (!op) throw new Error(`${it.id}: sem escolha`);
  (op.trocas || []).forEach((t, k) => trocas.push({ id: `D-${it.id}${op.trocas.length > 1 ? "-" + (k + 1) : ""}`, item: it.id, opcao: op.id, de: t.de, para: t.para }));
}

const pendentes = [], saiu = [];
for (const t of trocas) {
  const alvo = secs.filter((s) => s.paragrafos.join("\n\n").includes(t.de));
  const n = secs.reduce((a, s) => a + s.paragrafos.join("\n\n").split(t.de).length - 1, 0);
  if (n !== 1) throw new Error(`${t.id}: casou ${n} vezes`);
  const s = alvo[0];
  s.paragrafos = s.paragrafos.join("\n\n").split(t.de).join(t.para).split("\n\n");
  const texto = s.paragrafos.join("\n\n");
  s.claim_usages = s.claim_usages.flatMap((u) => {
    if (texto.includes(u.excerpt)) return [u];
    if (u.excerpt.includes(t.de)) return [{ ...u, excerpt: u.excerpt.split(t.de).join(t.para) }];
    if (u.excerpt in MANUAL) { const nv = MANUAL[u.excerpt]; if (nv === null) { saiu.push({ troca: t.id, excerpt: u.excerpt, evidence_ids: u.evidence_ids }); return []; } if (!texto.includes(nv.excerpt)) { pendentes.push({ troca: t.id, secao: s.id, excerpt: u.excerpt, evidence_ids: u.evidence_ids }); return [u]; } return [{ ...u, excerpt: nv.excerpt, evidence_ids: [...new Set([...u.evidence_ids, ...(nv.mais_ids || [])])] }]; }
    pendentes.push({ troca: t.id, secao: s.id, excerpt: u.excerpt, evidence_ids: u.evidence_ids });
    return [u];
  });
  t.secao = s.id;
}
const naoLit = secs.flatMap((s) => s.claim_usages.filter((u) => !s.paragrafos.join("\n\n").includes(u.excerpt)).map((u) => ({ secao: s.id, excerpt: u.excerpt })));
if (pendentes.length || naoLit.length) {
  console.log("PENDENTES (preencha r6-manual.json: excerpt antigo → novo excerpt literal, ou null):");
  console.log(JSON.stringify([...pendentes, ...naoLit.filter((x) => !pendentes.some((p) => p.excerpt === x.excerpt))], null, 1));
  process.exit(1);
}
fs.writeFileSync("r6-secoes.json", JSON.stringify(secs, null, 1));
fs.writeFileSync("r6-trocas.json", JSON.stringify({ aprovacao: "2026-09-24T16:12:17.237Z", revisao_aprovada: "4192202703a8", trocas, sairam_da_voz: saiu }, null, 1));
const palavras = nar(secs).split(/\s+/).filter(Boolean).length;
console.log(`trocas ${trocas.length} · excerpts que saíram da voz ${saiu.length} · palavras ${palavras} · sha ${sha(secs).slice(0, 12)}`);
