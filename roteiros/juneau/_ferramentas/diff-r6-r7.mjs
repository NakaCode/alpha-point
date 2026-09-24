// Prova de alcance: quais frases mudaram de r6 (a revisão aprovada) para r7 (o tom de conversa).
// O resto é idêntico byte a byte.   node diff-r6-r7.mjs      (de dentro de midia/juneau/roteiro/_execucao)
import fs from "node:fs";
import crypto from "node:crypto";
const nar = (f) => JSON.parse(fs.readFileSync(f, "utf8")).map((x) => x.paragrafos.join("\n\n")).join("\n\n");
const frases = (t) => t.replace(/\s*\n+\s*/g, " ").split(/(?<=[.!?]["”’)]?)\s+(?=["“‘(]?[A-Z0-9$])/).filter((f) => f.trim());
const a = nar("r6-secoes.json"), b = nar("r7-secoes.json");
const sha = (t) => crypto.createHash("sha256").update(t).digest("hex");
const A = frases(a), B = frases(b), sA = new Set(A), sB = new Set(B);
const saiu = A.filter((f) => !sB.has(f)), entrou = B.filter((f) => !sA.has(f));
const out = { sha_anterior: sha(a), sha_novo: sha(b), frases_antes: A.length, frases_depois: B.length, identicas: B.filter((f) => sA.has(f)).length, sairam: saiu, entraram: entrou };
fs.writeFileSync("r7-prova.json", JSON.stringify(out, null, 1));
console.log(`${out.sha_anterior.slice(0, 12)} → ${out.sha_novo.slice(0, 12)} · idênticas ${out.identicas}/${B.length} · saíram ${saiu.length} · entraram ${entrou.length}`);
