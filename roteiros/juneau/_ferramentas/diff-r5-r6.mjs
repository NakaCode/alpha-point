// Prova de alcance: quais frases mudaram de r5 para r6 (o resto é idêntico byte a byte).
import fs from "node:fs";
import crypto from "node:crypto";
const nar = (f) => JSON.parse(fs.readFileSync(f, "utf8")).map((x) => x.paragrafos.join("\n\n")).join("\n\n");
const frases = (t) => t.replace(/\s*\n+\s*/g, " ").split(/(?<=[.!?]["”’)]?)\s+(?=["“‘(]?[A-Z0-9$])/).filter((f) => f.trim());
const a = nar("r5-secoes.json"), b = nar("r6-secoes.json");
const sha = (t) => crypto.createHash("sha256").update(t).digest("hex");
const A = frases(a), B = frases(b), sA = new Set(A), sB = new Set(B);
const saiu = A.filter((f) => !sB.has(f)), entrou = B.filter((f) => !sA.has(f));
const rec = fs.readFileSync("../pend/dados.recomendado.txt", "utf8").replace(/\n$/, "");
const out = { sha_anterior: sha(a), sha_novo: sha(b), igual_a_pagina: rec === b, frases_antes: A.length, frases_depois: B.length, identicas: B.filter((f) => sA.has(f)).length, sairam: saiu, entraram: entrou };
fs.writeFileSync("r6-prova.json", JSON.stringify(out, null, 1));
console.log(`${out.sha_anterior.slice(0, 12)} → ${out.sha_novo.slice(0, 12)} · igual à página: ${out.igual_a_pagina} · idênticas ${out.identicas}/${B.length} · saíram ${saiu.length} · entraram ${entrou.length}`);
entrou.forEach((f) => console.log("  + " + f));
