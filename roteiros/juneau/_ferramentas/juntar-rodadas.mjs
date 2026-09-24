// Junta as rodadas 1–3 (primeiro workflow) e a rodada 4 (revisão cirúrgica) no formato que o
// montar-roteiro.mjs lê. Registra sobre qual texto cada lente julgou, porque o conserto factual
// da rodada 4 pode mudar frases depois que crítico, clareza e locução julgaram.
//   node juntar-rodadas.mjs <r1-3.json> <r4.output> <saida.json>
import fs from "node:fs";
import crypto from "node:crypto";

const [, , A, B, SAI] = process.argv;
const R1 = JSON.parse(fs.readFileSync(A, "utf8")).result;
const R4b = JSON.parse(fs.readFileSync(B, "utf8"));
const R4 = R4b.result ?? R4b;
const rev3 = JSON.parse(fs.readFileSync("rev3.json", "utf8"));
const nar = (secs) => secs.map((s) => s.paragrafos.join("\n\n")).join("\n\n");
const sha = (secs) => crypto.createHash("sha256").update(nar(secs)).digest("hex");
const mapaV = (v) => ({ APROVADO: "PASS", "APROVADO COM RESSALVAS": "RESSALVA", REPROVADO: "FAIL" }[v] || v);

const b = R4.bancada;
const fatos = R4.fatos_final ?? b.fatos;
const vs = { roteiro: b.crit ? mapaV(b.crit.veredito) : "NAO_RODOU", clareza: b.clar?.veredito ?? "NAO_RODOU", fatos: fatos?.veredito ?? "NAO_RODOU", locucao: b.loc?.veredito ?? "NAO_RODOU" };
const todos = Object.values(vs);
const geral = todos.includes("FAIL") || todos.includes("NAO_RODOU") ? "FAIL" : todos.includes("RESSALVA") ? "RESSALVA" : "PASS";
const mudouDepois = sha(R4.secoes_bancada) !== sha(R4.secoes_finais);

const rodada4 = {
  bancada: { rodada: 4, crit: b.crit, clar: b.clar, fatos, loc: b.loc, consolidado: { vs, geral } },
  secoes: R4.secoes_finais,
  lint: R4.lint_final,
  respostas: [...R4.revisao.respostas, ...(R4.conserto_fatos?.respostas ?? [])],
};
const junto = {
  plano: rev3.plano,
  juiz: R1.juiz,
  secoes_finais: R4.secoes_finais,
  lint_final: R4.lint_final,
  rodadas: [...R1.rodadas, rodada4],
  pronuncia: R4.pronuncia,
  sobre_o_julgamento: {
    sha_julgado_por_roteiro_clareza_locucao: sha(R4.secoes_bancada),
    sha_julgado_pelo_verificador: sha(R4.fatos_final ? R4.secoes_finais : R4.secoes_bancada),
    sha_final: sha(R4.secoes_finais),
    conserto_factual_depois_da_bancada: mudouDepois,
    lista_fechada_rodada4: rev3.lista_fechada,
    recusados_rodada4: rev3.recusados,
    fatos_antes_do_conserto: R4.fatos_final && b.fatos ? { veredito: b.fatos.veredito, nota: b.fatos.nota } : null,
  },
};
fs.writeFileSync(SAI, JSON.stringify({ result: junto }, null, 1));
console.log(`rodada 4: ${JSON.stringify(vs)} → ${geral} · conserto factual depois da bancada: ${mudouDepois}`);
