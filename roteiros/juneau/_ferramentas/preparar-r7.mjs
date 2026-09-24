// Gate determinístico da rodada 7 (o tom de conversa), igual ao da r6 e com a regra das datas em fila
// (marca/voz.md §1: no máximo duas frases seguidas abrindo com data). Carimba tudo com o sha256 da narração.
//   node preparar-r7.mjs [r7-secoes.json]      (de dentro de midia/juneau/roteiro/_execucao)
import fs from "node:fs";
import crypto from "node:crypto";
const secs = JSON.parse(fs.readFileSync(process.argv[2] || "r7-secoes.json", "utf8"));
const PROMESSA = "The answer comes down to one line that showed up on later ballots: the price.";
const nar = secs.map((s) => s.paragrafos.join("\n\n")).join("\n\n");
const sha = crypto.createHash("sha256").update(nar).digest("hex");
const palavras = (t) => t.split(/\s+/).filter(Boolean).length;
const frases = (t) => t.replace(/\s*\n+\s*/g, " ").split(/(?<=[.!?]["”’)]?)\s+(?=["“‘(]?[A-Z0-9$])/).filter((f) => f.trim());
const BANIDOS = [/\bshocking\b/i, /\binsane\b/i, /\bcrazy\b/i, /you won'?t believe/i, /mind-?blowing/i, /\bbreaking\b/i, /just happened/i, /\bthis week\b/i, /\byesterday\b/i, /\brecently\b/i, /experts say/i, /reports suggest/i, /some people believe/i, /sources claim/i, /\bregime\b/i, /\bour (enemies|allies|country|state)\b/i, /\bwe need to\b/i, /\bevil\b/i, /\bis about to\b/i, /willow project/i, /\bthe only (u\.s\. |us |american )?state capital\b/i, /only state (on the planet|in the (country|nation|union))/i, /\bnearly \$?10 billion|\$9\.5 billion|\$4\.8 billion/i, /\b91,249\b|\b26,452\b/, /\bnon-?binding\b|\badvisory (vote|question)\b/i, /\bFrank Harris\b/];
const duros = [];
const n = palavras(nar), fs_ = frases(nar), media = n / fs_.length;
if (n < 1600 || n > 1850) duros.push(`total ${n}`);
if (media > 18) duros.push(`média ${media.toFixed(1)}`);
for (const rx of BANIDOS) { const m = nar.match(rx); if (m) duros.push(`vetado: ${m[0]}`); }
for (const m of nar.matchAll(/\bFrank\b(?! (committee|initiative))/g)) duros.push(`"Frank" solto: ${nar.slice(Math.max(0, m.index - 40), m.index + 40)}`);
const iw = nar.search(/\bWillow\b/); const j = nar.slice(Math.max(0, iw - 250), iw + 250);
if (!/town of Willow/i.test(j) || !/Mat-Su/i.test(j)) duros.push("Willow sem 'town of Willow' e 'Mat-Su'");
if (!nar.includes(PROMESSA)) duros.push("promessa ausente");
const naoLit = secs.flatMap((s) => s.claim_usages.filter((u) => !s.paragrafos.join("\n\n").includes(u.excerpt)).map((u) => u.excerpt));
if (naoLit.length) duros.push(`${naoLit.length} excerpts não literais`);
const L = JSON.parse(fs.readFileSync("ledger.json", "utf8")); const ids = new Set(L.claims.map((c) => c.id));
const inex = [...new Set(secs.flatMap((s) => s.claim_usages.flatMap((u) => u.evidence_ids)))].filter((i) => !ids.has(i));
if (inex.length) duros.push(`ids inexistentes: ${inex.join(", ")}`);
const DATA = /^(In|On|By|Since|From|Until|Through|Back in) (early |late |mid-)?((January|February|March|April|May|June|July|August|September|October|November|December) (d{1,2}, )?)?(1[89]dd|20dd)/;
let fila = 0;
for (const f of fs_) { fila = DATA.test(f.trim()) ? fila + 1 : 0; if (fila === 3) duros.push(`três frases seguidas abrindo com data, até: ${f.slice(0, 60)}`); }

const classes = [["numero", /\d|\b(hundred|thousand|million|billion|percent|half|twice|dozen|one|two|three|four|five|six|seven|eight|nine|ten|twelve|fifteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)\b/i], ["data", /\b(1[89]\d\d|20\d\d)\b|\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/], ["citacao", /["“”]/], ["atribuicao", /\b(according to|said|says|wrote|writes|called|calls|told|argued|argues|estimated|put it|summed)\b/i], ["superlativo", /\b(only|largest|biggest|first|last|most|least|never|every|all|longest|oldest|no other)\b/i], ["causal", /\b(because|so that|which is why|that's why|led to|caused|as a result|thanks to|due to|meant that)\b/i]];
const lista = []; let i = 0;
for (const s of secs) for (const f of frases(s.paragrafos.join(" "))) { const cl = classes.filter(([, rx]) => rx.test(f)).map(([c]) => c); if (cl.length) lista.push(`f-${String(++i).padStart(3, "0")} [${s.id}; ${cl.join(",")}] ${f}`); }
const dossie = secs.map((s) => `## ${s.id} · ${s.titulo_estrutural}\n` + s.claim_usages.map((u) => `- "${u.excerpt}" ← ${u.evidence_ids.join(", ")}`).join("\n")).join("\n\n");
fs.writeFileSync("r7-narracao.txt", `sha256: ${sha}\n\n${nar}\n`);
fs.writeFileSync("r7-lista.txt", `sha256: ${sha} · ${lista.length} itens derivados por regex (número, data, citação, atribuição, superlativo, causal)\n\n${lista.join("\n")}\n`);
fs.writeFileSync("r7-dossie.txt", `sha256: ${sha}\n\n${dossie}\n`);
console.log(`sha ${sha.slice(0, 12)} · ${n} palavras · ${fs_.length} frases · média ${media.toFixed(1)} · ${lista.length} itens na lista`);
console.log(duros.length ? `GATE DURO: ${duros.join(" | ")}` : "gate: ✓ nenhum problema duro");
