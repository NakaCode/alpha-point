// Junta rodadas 1–3, a 4 e a verificação final no formato do montar-roteiro.mjs, com o sha que
// cada lente julgou. Crítico e fatos julgaram o texto final; clareza e locução, a rodada 4.
//   node juntar-final.mjs <final.output> <saida.json>
import fs from "node:fs";
import crypto from "node:crypto";

const [, , FIN, SAI] = process.argv;
const R1 = JSON.parse(fs.readFileSync("workflow-result.json", "utf8")).result;
const R4 = JSON.parse(fs.readFileSync("r4-result.json", "utf8")).result;
const RF = JSON.parse(fs.readFileSync(FIN, "utf8")).result;
const rev3 = JSON.parse(fs.readFileSync("rev3.json", "utf8"));
const secs = JSON.parse(fs.readFileSync("r5-secoes.json", "utf8"));
const secsCrit = JSON.parse(fs.readFileSync("r4-final-secoes.antes-r5.json", "utf8"));
const rever = JSON.parse(fs.readFileSync("reverificacao-r5.json", "utf8"));
const trocas = [...JSON.parse(fs.readFileSync("r4-final-trocas.json", "utf8")), ...JSON.parse(fs.readFileSync("r5-trocas.json", "utf8"))];
const nar = (s) => s.map((x) => x.paragrafos.join("\n\n")).join("\n\n");
const sha = (s) => crypto.createHash("sha256").update(nar(s)).digest("hex");
const mapaV = (v) => ({ APROVADO: "PASS", "APROVADO COM RESSALVAS": "RESSALVA", REPROVADO: "FAIL" }[v] || v);
const palavras = (t) => t.split(/\s+/).filter(Boolean).length;
const frases = (t) => t.replace(/\s*\n+\s*/g, " ").split(/(?<=[.!?]["”’)]?)\s+(?=["“‘(]?[A-Z0-9$])/).filter((f) => f.trim());
const lintDe = (s) => { const t = nar(s), n = palavras(t), f = frases(t); return { duros: [], avisos: [], metricas: { palavras: n, frases: f.length, media: +(n / f.length).toFixed(1), minutos_a_155: +(n / 155).toFixed(1) } }; };

const shaFinal = sha(secs);
if (rever.sha_final !== shaFinal) throw new Error(`a reverificação é de ${rever.sha_final.slice(0, 12)}, o final é ${shaFinal.slice(0, 12)}`);
if (rever.sha_anterior !== sha(secsCrit)) throw new Error("a revisão anterior não bate com a reverificada");
if (RF.crit.sha && !sha(secsCrit).startsWith(RF.crit.sha.slice(0, 12))) throw new Error("o crítico julgou outro texto");

// rodada 4, como foi (sobre o texto da bancada 4, com o verificador depois do conserto factual)
const b4 = R4.bancada;
const f4 = R4.fatos_final ?? b4.fatos;
const vs4 = { roteiro: mapaV(b4.crit.veredito), clareza: b4.clar.veredito, fatos: f4.veredito, locucao: b4.loc.veredito };
const geral = (vs) => { const t = Object.values(vs); return t.includes("FAIL") ? "FAIL" : t.includes("RESSALVA") ? "RESSALVA" : "PASS"; };
const r4 = { bancada: { rodada: 4, crit: b4.crit, clar: b4.clar, fatos: f4, loc: b4.loc, consolidado: { vs: vs4, geral: geral(vs4) } }, secoes: R4.secoes_finais, lint: R4.lint_final, respostas: [...R4.revisao.respostas, ...(R4.conserto_fatos?.respostas ?? [])] };
// verificação final: crítico e fatos novos; clareza e locução da rodada 4
const vsF = { roteiro: mapaV(RF.crit.veredito), clareza: b4.clar.veredito, fatos: rever.veredito, locucao: b4.loc.veredito };
// a tabela de 132 itens é da revisão anterior: as linhas das 4 frases trocadas passam a mostrar a
// frase nova e o veredito da reverificação, com a marca de onde veio
const r5 = JSON.parse(fs.readFileSync("r5-trocas.json", "utf8"));
const tabela = RF.fatos.tabela.map((row) => {
  const t = r5.find((x) => row.afirmacao.includes(x.de) || x.de.includes(row.afirmacao.replace(/^"|"$/g, "")));
  if (!t) return row;
  const v = rever.vereditos.find((x) => x.id === t.id);
  return { ...row, afirmacao: row.afirmacao.includes(t.de) ? row.afirmacao.split(t.de).join(t.para) : t.para, veredito: v.veredito, fonte_diz: `[reverificado na revisão final, troca ${t.id}] ${v.fonte}. Antes: ${row.veredito} — ${row.fonte_diz}`, url: v.arquivo_ou_url };
});
const trocadas = tabela.filter((r, i) => r !== RF.fatos.tabela[i]).length;
if (trocadas < 2) throw new Error(`só ${trocadas} linhas da tabela casaram com as trocas finais`);
console.log(`linhas da tabela atualizadas pela reverificação: ${trocadas}`);
const fatosF = { ...RF.fatos, tabela, veredito: rever.veredito, data_base: "2026-09-23", nomes: RF.fatos.nomes ?? [], padroes: [], achados: RF.fatos.achados.map((a) => ({ ...a, conserto: `${a.conserto} [aplicado na revisão final e reverificado]` })), reverificacao_final: rever };
const rF = { bancada: { rodada: "final", crit: RF.crit, clar: b4.clar, fatos: fatosF, loc: b4.loc, consolidado: { vs: vsF, geral: geral(vsF) } }, secoes: secs, lint: lintDe(secs), respostas: trocas.map((t) => ({ origem: t.origem, citacao: t.de.trim(), acao: "aplicado", motivo: `${t.id}: → "${t.para.trim() || "(cortado)"}"` })) };

const junto = {
  plano: rev3.plano, juiz: R1.juiz, secoes_finais: secs, lint_final: lintDe(secs),
  rodadas: [...R1.rodadas, r4, rF], pronuncia: R4.pronuncia,
  sobre_o_julgamento: {
    sha_final: shaFinal,
    sha_por_lente: { roteiro: sha(secsCrit), fatos: shaFinal, clareza: sha(R4.secoes_bancada), locucao: sha(R4.secoes_bancada) },
    nota: "O verificador de fatos julgou o texto final: a lista inteira (132 itens) sobre a revisão anterior e, depois, as 4 trocas finais com prova de que nada mais mudou. O crítico de roteiro julgou a revisão anterior às 4 trocas finais (uma delas proposta por ele). Clareza e locução julgaram a rodada 4; depois dela vieram o conserto factual (2 frases), 8 ajustes pontuais e as 4 trocas finais, todos com a redação proposta pelos próprios revisores. Ver trocas_finais.",
    trocas_finais: trocas, lista_fechada_rodada4: rev3.lista_fechada, recusados_rodada4: rev3.recusados,
  },
};
fs.writeFileSync(SAI, JSON.stringify({ result: junto }, null, 1));
console.log(`final: ${JSON.stringify(vsF)} → ${geral(vsF)} · sha ${shaFinal.slice(0, 12)}`);
