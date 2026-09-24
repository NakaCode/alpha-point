// Rodada 6: junta o que já existia (junto-final.json) com as decisões do dono e a bancada que julgou
// o texto final exato, no formato do montar-roteiro.mjs.
//   node juntar-r6.mjs <saida-do-workflow-r6> <saida.json>
import fs from "node:fs";
import crypto from "node:crypto";

const [, , ENT, SAI] = process.argv;
const W = JSON.parse(fs.readFileSync(ENT, "utf8"));
const B = W.result ?? W;
const J = JSON.parse(fs.readFileSync("junto-final.json", "utf8")).result;
const secs = JSON.parse(fs.readFileSync("r6-secoes.json", "utf8"));
const T6 = JSON.parse(fs.readFileSync("r6-trocas.json", "utf8"));
const tab5 = JSON.parse(fs.readFileSync("r5-tabela.json", "utf8"));
const apr = JSON.parse(fs.readFileSync("../pend/aprovacao.json", "utf8"));
const nar = (s) => s.map((x) => x.paragrafos.join("\n\n")).join("\n\n");
const sha = crypto.createHash("sha256").update(nar(secs)).digest("hex");
const palavras = (t) => t.split(/\s+/).filter(Boolean).length;
const frases = (t) => t.replace(/\s*\n+\s*/g, " ").split(/(?<=[.!?]["”’)]?)\s+(?=["“‘(]?[A-Z0-9$])/).filter((f) => f.trim());
const lint = (() => { const t = nar(secs), n = palavras(t), f = frases(t); return { duros: [], avisos: [], metricas: { palavras: n, frases: f.length, media: +(n / f.length).toFixed(1), minutos_a_155: +(n / 155).toFixed(1) } }; })();
const mapaV = (v) => ({ APROVADO: "PASS", "APROVADO COM RESSALVAS": "RESSALVA", REPROVADO: "FAIL" }[v] || v);

for (const [lente, x] of [["roteiro", B.crit], ["clareza", B.clar], ["locucao", B.loc]]) if (!x || !sha.startsWith(String(x.sha).slice(0, 12))) throw new Error(`${lente} declarou ${x?.sha}, o texto é ${sha.slice(0, 12)}`);
if (!sha.startsWith(String(B.fatos.sha_final).slice(0, 12))) throw new Error(`fatos reverificou ${B.fatos.sha_final}`);

// plano: decisões e partes conferidas contra o texto final
const plano = structuredClone(J.plano);
for (const d of B.plano.decisoes) { const alvo = plano.decisoes_editoriais[d.indice]; if (!alvo) throw new Error(`decisão ${d.indice} não existe`); alvo.status = d.status_novo; alvo.motivo = `${alvo.motivo} [Conferido no texto final ${sha.slice(0, 12)}: ${d.nota}]`; }
for (const p of B.plano.partes) { const alvo = plano.partes.find((x) => x.id === p.id); if (!alvo) throw new Error(`parte ${p.id} não existe`); alvo.entende_ao_fim = p.entende_ao_fim_novo; }

// tabela de auditoria: as linhas das frases trocadas ou retiradas passam a mostrar o texto final
const upd = new Map(B.fatos.linhas_atualizadas.map((l) => [l.id, l]));
const tabela = tab5.map((row) => { const u = upd.get(row.id); return u ? { ...row, afirmacao: u.afirmacao_nova, veredito: u.veredito, fonte_diz: `[rodada 6] ${u.fonte_diz}`, url: u.url } : row; });
const faltam = [...upd.keys()].filter((id) => !tab5.some((r) => r.id === id));
if (faltam.length) throw new Error(`linhas atualizadas sem par na tabela: ${faltam.join(", ")}`);
const ult5 = J.rodadas.at(-1).bancada;
const rever = { sha_anterior: B.fatos.sha_anterior, sha_final: sha, prova: B.fatos.prova, veredito: B.fatos.veredito, vereditos: B.fatos.vereditos.map((v) => ({ id: v.id, veredito: v.veredito, fonte: `"${v.frase}" — ${v.fonte}`, arquivo_ou_url: v.arquivo_ou_url })), referencias_soltas: B.fatos.referencias_soltas };
const fatos = { ...ult5.fatos, tabela, veredito: B.fatos.veredito, data_base: "2026-09-24", achados: B.fatos.achados, padroes: [], reverificacao_final: rever,
  cobertura: { ...ult5.fatos.cobertura, como: `${ult5.fatos.cobertura.como} Rodada 6: ${B.fatos.vereditos.length} frases novas reverificadas sobre ${sha.slice(0, 12)}, com prova de alcance; ${upd.size} linhas da tabela atualizadas.` } };

const vs = { roteiro: mapaV(B.crit.veredito), clareza: B.clar.veredito, fatos: B.fatos.veredito, locucao: B.loc.veredito };
const geral = Object.values(vs).includes("FAIL") ? "FAIL" : Object.values(vs).includes("RESSALVA") ? "RESSALVA" : "PASS";
const r6 = { bancada: { rodada: 6, crit: B.crit, clar: B.clar, fatos, loc: B.loc, consolidado: { vs, geral } }, secoes: secs, lint,
  respostas: T6.trocas.map((t) => ({ origem: `dono, página de decisões (${t.item}: ${t.opcao})`, citacao: t.de.trim(), acao: "aplicado", motivo: `${t.id}: → "${t.para.trim()}"` })) };

const junto = {
  plano, juiz: J.juiz, secoes_finais: secs, lint_final: lint, rodadas: [...J.rodadas, r6], pronuncia: J.pronuncia, data_base: "2026-09-24",
  fontes_fora_do_ledger: B.plano.fontes_fora_do_ledger,
  aprovacao_do_dono: { ...apr, pagina: "https://claude.ai/artifact/A2EpT2r7XmhVT6wzgeCkwb", aplicada_em: sha },
  sobre_o_julgamento: {
    sha_final: sha,
    sha_por_lente: { roteiro: sha, clareza: sha, locucao: sha, fatos: sha },
    nota: `As quatro lentes julgaram o texto final ${sha.slice(0, 12)}. Crítico, clareza e locução leram o texto inteiro; o verificador de fatos reverificou as ${B.fatos.vereditos.length} frases que mudaram desde ${B.fatos.sha_anterior.slice(0, 12)} (a lista inteira de 132 itens foi julgada naquela revisão), com prova de que as outras são idênticas byte a byte. As mudanças da rodada 6 são as decisões do dono na página de decisões (${apr.em}).`,
    trocas_finais: [...J.sobre_o_julgamento.trocas_finais, ...T6.trocas.map((t) => ({ id: t.id, origem: `dono (${t.item}: ${t.opcao})`, de: t.de, para: t.para }))],
    sairam_da_voz_rodada6: T6.sairam_da_voz,
    lista_fechada_rodada4: J.sobre_o_julgamento.lista_fechada_rodada4, recusados_rodada4: J.sobre_o_julgamento.recusados_rodada4,
  },
};
fs.writeFileSync(SAI, JSON.stringify({ result: junto }, null, 1));
console.log(`rodada 6: ${JSON.stringify(vs)} → ${geral} · sha ${sha.slice(0, 12)} · ${lint.metricas.palavras} palavras · decisões atualizadas ${B.plano.decisoes.length} · partes ${B.plano.partes.length} · linhas da tabela ${upd.size}`);
