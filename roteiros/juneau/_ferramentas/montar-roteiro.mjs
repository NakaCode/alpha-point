// Monta as projeções do roteiro a partir do resultado do workflow (trabalho de "runtime" do
// CONTRATO do roteirista-narracao): a narração aparece uma vez, nas partes; o resto é derivado.
//   node montar-roteiro.mjs <tasks/<id>.output> <pasta de saída>
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const [, , ENT, SAI] = process.argv;
const AQUI = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const bruto = JSON.parse(fs.readFileSync(ENT, "utf8"));
const R = bruto.result ?? bruto;
const L = JSON.parse(fs.readFileSync(path.join(AQUI, "ledger.json"), "utf8"));
const claim = new Map(L.claims.map((c) => [c.id, c]));

const secs = R.secoes_finais;
const narr = secs.map((s) => s.paragrafos.join("\n\n")).join("\n\n");
const hash = crypto.createHash("sha256").update(narr).digest("hex");
const ult = R.rodadas.at(-1).bancada;
const pal = narr.split(/\s+/).filter(Boolean).length;

// ids usados que não existem no ledger: conferência que o workflow não podia fazer
const usados = [...new Set(secs.flatMap((s) => s.claim_usages.flatMap((u) => u.evidence_ids)))];
const inexistentes = usados.filter((id) => !claim.has(id));
const naoLiterais = secs.flatMap((s) => s.claim_usages.filter((u) => !s.paragrafos.join("\n\n").includes(u.excerpt)).map((u) => `${s.id}: ${u.excerpt}`));

const placarFatos = ult.fatos ? ult.fatos.tabela.reduce((a, t) => ((a[t.veredito] = (a[t.veredito] ?? 0) + 1), a), {}) : null;
const manifesto = {
  project_id: L.project_id,
  tema: L.tema,
  revisao: { sha256_narracao: hash, palavras: pal, minutos_a_155_ppm: +(pal / 155).toFixed(1) },
  titulo_trabalho_en: R.plano.titulo_trabalho_en,
  aviso_embalagem: "Título de trabalho, não de vitrine: a embalagem é do curador-titulos-thumbs.",
  plano: R.plano,
  juiz: R.juiz,
  secoes: secs.map(({ _gate, ...s }) => s),
  gate_final: R.lint_final,
  conferencia_pos_workflow: { ids_inexistentes: inexistentes, excerpts_nao_literais: naoLiterais },
  bancada_final: { rodada: ult.rodada, vereditos: ult.consolidado.vs, geral: ult.consolidado.geral, julgada_sobre_sha256: R.sobre_o_julgamento?.sha_por_lente ?? hash },
  sobre_o_julgamento: R.sobre_o_julgamento ?? null,
  auditoria: ult.fatos ? { cobertura: ult.fatos.cobertura, placar: placarFatos, tabela: ult.fatos.tabela } : null,
  historico: R.rodadas.map((r) => ({ rodada: r.bancada.rodada, vereditos: r.bancada.consolidado.vs, geral: r.bancada.consolidado.geral, palavras: r.lint.metricas.palavras, respostas: r.respostas ?? null })),
  derivado_de: ["pautas/juneau/fundamento.json"],
};

const out = SAI;
fs.mkdirSync(path.join(out, "qc-roteiro"), { recursive: true });
fs.writeFileSync(path.join(out, "roteiro.json"), JSON.stringify(manifesto, null, 2) + "\n");

// --- a narração pura -------------------------------------------------------------------------
const N = [];
N.push(`# ${R.plano.titulo_trabalho_en}`, "");
N.push(`> Narração pura, en-US. ${pal} palavras (≈ ${manifesto.revisao.minutos_a_155_ppm} min a 155 palavras/min). Revisão \`${hash.slice(0, 12)}\`.`);
N.push(`> Gerado do \`roteiro.json\`; não edite aqui. As marcas \`<!-- pN -->\` separam as partes e não são lidas.`, "");
for (const s of secs) { N.push(`<!-- ${s.id} · ${s.titulo_estrutural} -->`, "", ...s.paragrafos.flatMap((p) => [p, ""])); }
fs.writeFileSync(path.join(out, "roteiro-narrador.md"), N.join("\n"));

// --- o dossiê do editor --------------------------------------------------------------------------
const E = [];
const esc = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
E.push(`# Dossiê do roteiro · ${L.project_id}`, "");
E.push(`> Gerado do \`roteiro.json\` por script. Revisão \`${hash.slice(0, 12)}\` · ${pal} palavras · bancada ${ult.rodada}: **${ult.consolidado.geral}** (${Object.entries(ult.consolidado.vs).map(([k, v]) => `${k} ${v}`).join(" · ")}).`, "");
E.push("## A espinha", "", `- **Pergunta:** ${R.plano.pergunta_en}`, `- **Tese:** ${R.plano.tese}`, `- **Promessa:** ${R.plano.promessa} — na fala: "${R.plano.promessa_en_literal}"`, `- **Payoff:** ${R.plano.payoff}`, "");
if (R.aprovacao_do_dono) {
  const a = R.aprovacao_do_dono;
  E.push("## Aprovação do dono", "", `- **${a.aprovado ? "Aprovado" : "Não aprovado"}** por Lucas Rosa em ${a.em}, sobre a revisão \`${a.revisao}\`, na página de decisões <${a.pagina}>. As trocas aceitas geraram a revisão \`${String(a.aplicada_em).slice(0, 12)}\`, que as quatro lentes julgaram depois.`, ...Object.entries(a.escolhas).map(([k, v]) => `- ${k}: ${v}`), "");
}
E.push("### Livro-razão da promessa", "", ...R.plano.livro_razao_promessa.map((l) => `- ${l.promessa} → paga em ${l.paga_em}`), "");
E.push("### Partes", "", "| Parte | Função | Orçamento | Palavras | O que o espectador entende ao fim |", "|---|---|---|---|---|");
for (const p of R.plano.partes) { const s = secs.find((x) => x.id === p.id); E.push(`| ${p.id} · ${esc(p.titulo_estrutural)} | ${p.funcao} | ${p.orcamento_palavras} | ${s ? s.paragrafos.join(" ").split(/\s+/).filter(Boolean).length : "—"} | ${esc(p.entende_ao_fim)} |`); }
E.push("", "### Decisões editoriais", "", ...R.plano.decisoes_editoriais.map((d) => `- **${d.status}:** ${d.decisao} — ${d.motivo}`), "");
E.push("### Como o plano foi escolhido", "", ...R.juiz.avaliacoes.map((a) => `- **${a.angulo}** (${a.nota}/10): forte — ${a.forte}; fraco — ${a.fraco}`), `- **Base:** ${R.juiz.base}`, ...R.juiz.enxertos.map((x) => `- enxerto: ${x}`), "");
E.push("## De onde vem cada frase", "");
for (const s of secs) {
  E.push(`### ${s.id} · ${s.titulo_estrutural}`, "");
  for (const u of s.claim_usages) {
    E.push(`- "${u.excerpt}"`);
    for (const id of u.evidence_ids) { const c = claim.get(id); const f = c && L.fontes[c.fonte]; E.push(c ? `  - \`${id}\` [${c.status}; ${c.tier}] ${c.afirmacao} — ${f.veiculo}, ${f.data} — <${f.url}>` : `  - \`${id}\` ⛔ NÃO EXISTE NO LEDGER`); }
  }
  E.push("");
}
if (R.fontes_fora_do_ledger?.length) {
  E.push("### Frases com fonte fora do ledger", "", ...R.fontes_fora_do_ledger.map((f) => `- ${f.secao}: "${f.excerpt}" — ${f.fonte} <${f.url}>`), "");
}
if (ult.fatos) {
  E.push("## Lista de auditoria (verificador de fatos, última rodada)", "", `Cobertura: **${ult.fatos.cobertura.n} de ${ult.fatos.cobertura.m}** — ${ult.fatos.cobertura.como}`, "", `Placar: ${Object.entries(placarFatos).map(([k, v]) => `${v} ${k}`).join(" · ")}`, "", "| id | afirmação | veredito | o que a fonte diz | URL |", "|---|---|---|---|---|");
  for (const t of ult.fatos.tabela) E.push(`| ${t.id}${t.de_tese ? " ★" : ""} | ${esc(t.afirmacao)} | ${t.veredito} | ${esc(t.fonte_diz)} | ${esc(t.url)} |`);
  E.push("", "★ = sustenta a tese.", "");
}
E.push("## Voláteis: reconferir antes de gravar", "", ...L.volateis.map((v) => `- ${v.item}${v.valor_hoje ? ` (em ${v.conferido_em ?? "23/09/2026"}: ${v.valor_hoje})` : ""}`), "");
E.push("## Conferências automáticas", "", `- Gate final: ${R.lint_final.duros.length ? R.lint_final.duros.map((d) => `⛔ ${d}`).join("; ") : "✓ nenhum problema duro"}`, `- Métricas: ${JSON.stringify(R.lint_final.metricas)}`, ...R.lint_final.avisos.map((a) => `- aviso: ${a}`), `- Ids inexistentes no ledger: ${inexistentes.length ? inexistentes.join(", ") : "nenhum"}`, `- Excerpts que não aparecem literalmente na fala: ${naoLiterais.length ? naoLiterais.join(" | ") : "nenhum"}`, "");
fs.writeFileSync(path.join(out, "roteiro-editor.md"), E.join("\n"));

// --- os laudos da última rodada, no formato de cada CONTRATO ---------------------------------------
const achadosTxt = (as) => as.map((a, i) => `${i + 1}. [${a.gravidade}${a.lente ? ` · ${a.lente}` : ""}] "${a.citacao}"${a.porque ? ` → ${a.porque}` : ""} → CONSERTO: ${a.conserto}${a.raiz ? ` → RAIZ: ${a.raiz}` : ""}`).join("\n");
const SJ = R.sobre_o_julgamento;
const julgada = (lente) => (SJ?.sha_por_lente ? SJ.sha_por_lente[lente] : SJ ? (lente === "fatos" ? SJ.sha_julgado_pelo_verificador : SJ.sha_julgado_por_roteiro_clareza_locucao) : hash);
const cab = (nome, lente) => {
  const j = julgada(lente);
  const aviso = j !== hash ? `\n> ⚠️ Esta lente julgou a revisão \`${j.slice(0, 12)}\`, anterior à final \`${hash.slice(0, 12)}\`. ${SJ?.nota ?? ""} As trocas, uma a uma, estão em \`roteiro.json\` → \`sobre_o_julgamento.trocas_finais\`.\n` : "";
  return `# Laudo · ${nome} · rodada ${ult.rodada}\n\nRevisão julgada: \`${j.slice(0, 12)}\` · data-base ${R.data_base ?? "2026-09-23"}\n${aviso}`;
};
if (ult.crit) fs.writeFileSync(path.join(out, "qc-roteiro", "roteiro.laudo.md"), [cab("crítico de roteiro", "roteiro"), `VEREDITO: ${ult.crit.veredito}`, `NOTAS: ${ult.crit.notas.map((n) => `${n.lente} ${n.nota}/10`).join(" · ")}`, "", "ACHADOS:", achadosTxt(ult.crit.achados) || "(nenhum)", "", `RISCO DE ABANDONO: ${ult.crit.risco_abandono}`, "", "O QUE ESTÁ FORTE:", ...ult.crit.forte.map((f) => `- ${f}`), "", "NÃO TOCAR:", ...ult.crit.nao_tocar.map((f) => `- ${f}`), "", "SPOT-CHECK:", ...ult.crit.spot_check.map((s) => `- ${s.afirmacao}: ${s.resultado} (${s.url})`), ""].join("\n"));
if (ult.clar) fs.writeFileSync(path.join(out, "qc-roteiro", "clareza.laudo.md"), [cab("crítico de clareza", "clareza"), `NOTA: ${ult.clar.nota}/10`, "", `JANELA DE ABERTURA: ${ult.clar.janela_abertura}`, "", "ACHADOS:", achadosTxt(ult.clar.achados) || "(nenhum)", "", "MAPA DE RETENÇÃO:", ...ult.clar.mapa_retencao.map((m) => `- ${m.posicao_pct} %: ${m.regancho}`), `- maior deserto: ${ult.clar.maior_deserto}`, "", `CENSO DE PRESENÇA: ${ult.clar.censo_presenca.falas} falas; a primeira a ${ult.clar.censo_presenca.palavras_ate_primeira} palavras; ${ult.clar.censo_presenca.beat_humano}`, "", "DESTINO DAS CIFRAS:", `- ficam: ${ult.clar.destino_cifras.ficam.join("; ")}`, `- imagem ou comparação: ${ult.clar.destino_cifras.imagem_comparacao.join("; ")}`, `- tela: ${ult.clar.destino_cifras.tela.join("; ")}`, `- corte: ${ult.clar.destino_cifras.corte.join("; ")}`, "", `O QUE O LEIGO GANHOU: ${ult.clar.ganho_em_uma_frase}`, "", `PADRÕES: ${ult.clar.padroes.join(" · ")}`, "", `VEREDITO: ${ult.clar.veredito}`, ""].join("\n"));
if (ult.fatos) fs.writeFileSync(path.join(out, "qc-roteiro", "fatos.laudo.md"), [cab("verificador de fatos", "fatos"), `COBERTURA: ${ult.fatos.cobertura.n} de ${ult.fatos.cobertura.m} — ${ult.fatos.cobertura.como.replace(/^COBERTURA: \d+ de \d+\.\s*/, "")}`, `NOTA: ${ult.fatos.nota}/10 · data-base ${ult.fatos.data_base}`, ...(ult.fatos.reverificacao_final ? ["", `REVERIFICAÇÃO DA REVISÃO FINAL (${ult.fatos.reverificacao_final.sha_final.slice(0, 12)}): ${ult.fatos.reverificacao_final.veredito}. A lista inteira foi julgada sobre ${ult.fatos.reverificacao_final.sha_anterior.slice(0, 12)}; depois, só ${ult.fatos.reverificacao_final.vereditos.length} frases mudaram (${ult.fatos.reverificacao_final.prova}), e cada uma foi reconferida:`, ...ult.fatos.reverificacao_final.vereditos.map((v) => `- ${v.id}: ${v.veredito} — ${v.fonte} (${v.arquivo_ou_url})`)] : []), "", "A tabela completa está no `roteiro-editor.md`, seção 'Lista de auditoria'.", "", "ACHADOS:", achadosTxt(ult.fatos.achados) || "(nenhum)", "", "LISTA DE NOMES:", ...(ult.fatos.nomes.length ? ult.fatos.nomes.map((n) => `- ${n.anonimo} → ${n.pessoa}, ${n.credencial} (${n.url})`) : ["- nenhuma fonte anônima"]), "", `PADRÕES: ${ult.fatos.padroes.join(" · ")}`, "", `VEREDITO: ${ult.fatos.veredito}`, ""].join("\n"));
if (ult.loc) fs.writeFileSync(path.join(out, "qc-roteiro", "locucao.laudo.md"), [cab("crítico de locução (adaptado para en-US e TTS)", "locucao"), `NOTA: ${ult.loc.nota}/10`, "", "ACHADOS:", achadosTxt(ult.loc.achados) || "(nenhum)", "", `PADRÕES: ${ult.loc.padroes.join(" · ")}`, "", `VEREDITO: ${ult.loc.veredito}`, ""].join("\n"));
const H = ["# Histórico da bancada", "", "| Rodada | Roteiro | Clareza | Fatos | Locução | Geral | Palavras |", "|---|---|---|---|---|---|---|"];
for (const h of manifesto.historico) H.push(`| ${h.rodada} | ${h.vereditos.roteiro} | ${h.vereditos.clareza} | ${h.vereditos.fatos} | ${h.vereditos.locucao} | ${h.geral} | ${h.palavras} |`);
for (const h of manifesto.historico.filter((x) => x.respostas)) { H.push("", `## Respostas do roteirista depois da rodada ${h.rodada}`, "", ...h.respostas.map((r) => `- [${r.acao}] ${r.origem}: "${esc(r.citacao).slice(0, 140)}" — ${r.motivo}`)); }
fs.writeFileSync(path.join(out, "qc-roteiro", "historico.md"), H.join("\n") + "\n");

// --- a folha de pronúncia, para o passo de voz ----------------------------------------------------
if (R.pronuncia) {
  const P = ["# Folha de pronúncia", "", `> Para o passo de voz (TTS ou narrador). Revisão \`${hash.slice(0, 12)}\`. "Não confirmado" é para conferir num áudio antes de gravar.`, "", "| Termo | Como se fala | IPA | Confirmado | Fonte | Alias para o TTS |", "|---|---|---|---|---|---|"];
  for (const t of R.pronuncia.termos) P.push(`| ${esc(t.termo)} | ${esc(t.como_se_fala)} | ${esc(t.ipa)} | ${t.confirmado ? "sim" : "**não**"} | ${esc(t.fonte)} | ${esc(t.alias_tts)} |`);
  P.push("", "## O que o TTS pode ler errado", "", ...R.pronuncia.notas_tts.map((n) => `- ${n}`), "");
  fs.writeFileSync(path.join(out, "pronuncia.md"), P.join("\n"));
}
console.log(`${pal} palavras · sha ${hash.slice(0, 12)} · bancada ${ult.rodada}: ${ult.consolidado.geral} ${JSON.stringify(ult.consolidado.vs)}`);
console.log(`ids inexistentes: ${inexistentes.length} · excerpts não literais: ${naoLiterais.length} · gate duro: ${R.lint_final.duros.length}`);
