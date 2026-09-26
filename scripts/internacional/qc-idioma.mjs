#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/internacional/qc-idioma.mjs (linhas 1-220, commit 4afda12).
// O que mudou: o idioma de ORIGEM vem do canal.json (idiomas.origem; o estúdio assumia pt-BR) e o resíduo procurado na tela é o
// dessa origem (pt ou en; outra origem = NÃO MEDIDO, alerta); saiu o dublagem-agent do Top10 (~/www/dublagem-agent: job, cópia da
// narração, tabela de palavras/s e o alerta de teto que dependia dela) e o process.chdir; o validador é chamado por process.execPath
// e caminho absoluto; os dois contratos (traducao-narracao, glossario-idioma) vieram byte a byte para contratos/, e contrato
// ausente no canal é NÃO MEDIDO (exit 2), nunca PASS; ids da narração traduzida têm de ser 0..N sem buraco nem repetição (o que
// o contrato descreve e o schema não expressa); canal.json ilegível é NÃO MEDIDO; as dicas apontam os agentes, não o
// `top10 internacional`.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// GATE D11 — a tela traduzida × a narração traduzida (estação INTERNACIONAL, docs/11-internacional.md).
//
// O buraco que este gate fecha (achado D11, 22/jul): se o TTS falha, `dublar.mjs` morre ANTES de
// copiar `translations/<lang>.json` para a produção; o [tradutor-de-tela] abre a pasta, conclui
// "não há glossário" e traduz solto. Narração e tela então usam palavras diferentes para o mesmo
// conceito — e o espectador vê o vídeo se contradizer. NENHUM gate olhava isso: qc-contrato,
// qc-carga, check-overlap e _audit-til medem geometria e sintaxe, nunca PALAVRA.
//
//   node scripts/internacional/qc-idioma.mjs <proj> --lang <lang> [--json]
//
// REPROVA (exit 1):
//   · narração traduzida ausente enquanto há tela traduzida  ← o D11 na veia
//   · translations/<lang>.json fora do contrato, ou fora de paridade com o segments.json pt
//   · glossário ausente/pendente havendo tela traduzida (sem ele nada é confrontável)
//   · termo do glossário que a narração traduzida não usa
//   · cena traduzida que NÃO usa o termo do glossário que a original usava  ← a divergência
//   · resíduo de português no texto visível da cena traduzida
//   · cena "traduzida" com texto visível IDÊNTICO ao original (não foi traduzida)
//   · número que sumiu ou mudou de valor entre a cena original e a traduzida (dado alterado)
// ALERTA (exit 0): frases acima do teto de palavras do idioma; cobertura parcial de cenas.
// [porte Régie] NÃO MEDIDO (exit 2, se nada reprovou): contrato da estação ausente no canal (nada é validado sem ele).
//
// Custo: zero inferência. Só lê arquivo, conta e compara.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { textoVisivel, residuoDaOrigem, numerosDe, normalizar } from "./texto-de-cena.mjs";
import { idiomaDeOrigem, lerJsonDoDisco } from "../lib/modos.mjs";

const ROOT = fileURLToPath(new URL("../..", import.meta.url));
/* [porte Régie] SEM process.chdir e SEM o dublagem-agent.
 *   · O estúdio mudava o diretório corrente para a raiz do repo; aqui todo caminho é montado a partir da
 *     raiz do CANAL (ROOT), e o projeto também pode vir como pasta absoluta.
 *   · `~/www/dublagem-agent` (DUB_ROOT) era a infra de dublagem do Top10 — o job, a tabela de palavras por
 *     segundo (config/languages.json) e a cópia da narração traduzida. Não existe na Régie: a narração
 *     traduzida mora só em `out/<proj>/dub/translations/<lang>.json`, gravada pelo tradutor-de-narracao,
 *     e o teto de palavras por segundo saiu junto (era ALERTA, e a tabela era do dublagem-agent). */
// [porte Régie] a língua em que o canal FALA vem do canal.json (idiomas.origem). O estúdio assumia pt-BR;
// a Régie já tem canal em inglês. É ela quem decide qual resíduo procurar na tela traduzida.
// canal.json ilegível é NÃO MEDIDO (I5) — chutar pt-BR trocaria o resíduo procurado em silêncio.
const ORIGEM = idiomaDeOrigem("qc-idioma");

const args = process.argv.slice(2);
const JSON_OUT = args.includes("--json");
const flag = (k, d = null) => { const i = args.indexOf(`--${k}`); return i === -1 ? d : (args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true); };
const proj = args.find((a) => !a.startsWith("--"));
const lang = String(flag("lang") || "");
if (!proj || !lang) { console.error("uso: node scripts/internacional/qc-idioma.mjs <proj> --lang <lang> [--json]"); process.exit(2); }

// [porte Régie] <proj>, out/<proj> (/ ou \) ou a pasta do projeto, sempre a partir da raiz do canal.
const projDir = (() => {
  const limpo = proj.replace(/[\\/]+$/, "");
  if (path.isAbsolute(limpo)) return limpo;
  if (/^out[\\/]/.test(limpo)) return path.join(ROOT, limpo);
  return path.join(ROOT, "out", limpo);
})();
if (String(lang).slice(0, 2).toLowerCase() === ORIGEM.slice(0, 2).toLowerCase()) {
  console.error(`✗ --lang ${lang} é o idioma de ORIGEM do canal (${ORIGEM}, canal.json) — não há tradução a conferir`);
  process.exit(2);
}
if (!fs.existsSync(projDir)) { console.error(`✗ projeto não existe: ${projDir}`); process.exit(2); }

const erros = [], alertas = [], naoMedidos = [];   // [porte Régie] a terceira conta: o que não deu para medir
const erro = (o, msg, detalhe = "") => erros.push({ onde: o, msg, detalhe });
const alerta = (o, msg, detalhe = "") => alertas.push({ onde: o, msg, detalhe });
const naoMedido = (o, msg, detalhe = "") => naoMedidos.push({ onde: o, msg, detalhe });
// [porte Régie] BOM do Bloco de Notas fora; quebrado continua null AQUI porque o validador do contrato, que roda antes, já o reprova
const lerJson = (p) => { try { return lerJsonDoDisco(p); } catch { return null; } };

const gDir = path.join(projDir, "graphics");
const gLang = path.join(projDir, `graphics-${lang}`);
const trPath = path.join(projDir, "dub", "translations", `${lang}.json`);
const glosPath = path.join(projDir, "dub", `glossario-${lang}.json`);
// [porte Régie] o original é o do idioma de ORIGEM do canal (o nome `segPt` ficou: é o lado "de partida").
const segPt = ["dub/segments.json", `dub/translations/${ORIGEM}.json`, "dub/translations/pt-BR.json"]
  .map((r) => path.join(projDir, r)).find(fs.existsSync)
  || path.join(projDir, "dub", "segments.json");

// [porte Régie] o validador do canal, chamado pelo Node que está rodando (não "node" do PATH) e por caminho
// absoluto — o estúdio dependia do chdir. Contrato que o canal não tem é NÃO MEDIDO (exit 2), nunca "fora" e nunca PASS:
// até a v1 os dois schemas não tinham vindo, o gate os rebaixava a alerta e aprovava `{"texto":"…"}` (nem é lista) —
// uma tradução fora do esqueleto de tempo seguia para o TTS com o verde "o que o espectador OUVE bate com o que LÊ".
const validar = (tipo, arquivo) => {
  const schema = path.join(ROOT, "contratos", `${tipo}.schema.json`);
  if (!fs.existsSync(schema)) return { naoValidado: `contratos/${tipo}.schema.json não existe neste canal` };
  const v = spawnSync(process.execPath, [path.join(ROOT, "scripts", "validar-contrato.mjs"), tipo, arquivo, "--estrito"],
    { encoding: "utf8", cwd: ROOT, windowsHide: true });
  return { status: v.status, saida: (v.stdout || "").trim() };
};

const cenasOrig = fs.existsSync(gDir) ? fs.readdirSync(gDir).filter((f) => f.endsWith(".html")) : [];
const cenasLang = fs.existsSync(gLang) ? fs.readdirSync(gLang).filter((f) => f.endsWith(".html")) : [];

// ── 1 · A NARRAÇÃO TRADUZIDA EXISTE? (o gatilho exato do D11) ────────────────────────────────
if (!fs.existsSync(trPath)) {
  // [porte Régie] sem job do dublagem-agent para onde apontar: quem grava este arquivo é o tradutor-de-narracao.
  const dica = `o agente [tradutor-de-narracao] grava a narração traduzida em ${path.join("out", path.basename(projDir), "dub", "translations", `${lang}.json`)}, frase a frase, com o mesmo esqueleto de tempo de dub/segments.json`;
  erro(trPath, `narração traduzida AUSENTE${cenasLang.length ? " e a tela já foi traduzida (D11: tela traduzida sem glossário)" : ""}`, dica);
}

// ── 2 · CONTRATO + PARIDADE COM O ORIGINAL pt ────────────────────────────────────────────────
let trad = null;
if (fs.existsSync(trPath)) {
  const v = validar("traducao-narracao", trPath);   // [porte Régie]
  if (v.naoValidado) naoMedido(trPath, "contrato traducao-narracao NÃO VALIDADO", v.naoValidado);   // [porte Régie]
  else if (v.status !== 0) erro(trPath, "fora do contrato traducao-narracao", v.saida.split(/\r?\n/).slice(0, 4).join(" · "));
  trad = lerJson(trPath);
  // [porte Régie] o contrato DESCREVE "id sequencial de 0 a N, SEM buraco nem repetição" e o schema não o expressa (não há
  // palavra-chave para isso): é a chave que casa original × tradução, e sem o original no disco ninguém mais a confere.
  if (Array.isArray(trad)) {
    const fora = trad.map((f, i) => (f?.id === i ? null : `posição ${i}: id ${JSON.stringify(f?.id)}`)).filter(Boolean);
    if (fora.length) erro(trPath, `ids da narração traduzida fora da sequência 0..${trad.length - 1} (buraco ou repetição)`, fora.slice(0, 5).join(" · "));
  }
  const pt = fs.existsSync(segPt) ? lerJson(segPt) : null;
  if (Array.isArray(trad) && Array.isArray(pt)) {
    if (trad.length !== pt.length)
      erro(trPath, `contagem de frases diverge do original: ${trad.length} × ${pt.length} em ${segPt}`,
        "frase perdida = frase que some do vídeo; frase repetida = eco");
    else {
      const fora = [];
      for (let i = 0; i < pt.length; i++) {
        for (const c of ["id", "type", "start", "end", "durationSec"])
          if (pt[i][c] !== trad[i][c]) { fora.push(`id ${pt[i].id}: ${c} ${pt[i][c]} → ${trad[i][c]}`); break; }
        if (pt[i].type === "silence" && (trad[i].text || "").trim()) fora.push(`id ${pt[i].id}: silêncio ganhou texto`);
      }
      if (fora.length) erro(trPath, `${fora.length} frase(s) com esqueleto de tempo alterado`, fora.slice(0, 5).join(" · "));
    }
  } else if (!fs.existsSync(segPt)) {
    alerta(segPt, `original ${ORIGEM} (dub/segments.json) não está na produção — paridade não verificável`,   // [porte Régie]
      "o tradutor-de-narracao parte da lista de frases original; sem ela, não há esqueleto de tempo contra que comparar");
  }

  // [porte Régie] o ALERTA de teto de palavras por segundo saiu: a tabela (config/languages.json) era do
  // dublagem-agent do Top10, que não existe aqui. O encaixe no tempo é conferido ouvindo a voz sintetizada.
}

// ── 3 · O GLOSSÁRIO — sem ele não há confronto possível ──────────────────────────────────────
let glos = null;
if (cenasLang.length) {
  if (!fs.existsSync(glosPath)) {
    erro(glosPath, "glossário do idioma AUSENTE com tela já traduzida — narração×tela não é confrontável (D11)",
      // [porte Régie] o gerador de esqueleto do estúdio (`top10 internacional … glossario`) não veio
      `o [tradutor-de-tela] grava ${path.join("dub", `glossario-${lang}.json`)} (contrato glossario-idioma): um termo por conceito, \`pt\` = o termo no idioma de ORIGEM, \`alvo\` = o do idioma-alvo`);
  } else {
    const v = validar("glossario-idioma", glosPath);   // [porte Régie]
    if (v.naoValidado) naoMedido(glosPath, "contrato glossario-idioma NÃO VALIDADO", v.naoValidado);   // [porte Régie]
    else if (v.status !== 0) erro(glosPath, "fora do contrato glossario-idioma", v.saida.split(/\r?\n/).slice(0, 4).join(" · "));
    glos = lerJson(glosPath);
  }
}

// ── 4 · CENA A CENA ──────────────────────────────────────────────────────────────────────────
const textoDe = (p) => textoVisivel(fs.readFileSync(p, "utf8"));
let residuoNaoMedido = false;   // [porte Régie]
const textos = new Map();                                   // cena → {orig, trad} (texto visível)
for (const f of cenasLang) {
  const alvo = path.join(gLang, f), orig = path.join(gDir, f);
  const tAlvo = textoDe(alvo);
  if (!fs.existsSync(orig)) {
    erro(alvo, "cena traduzida SEM original correspondente em graphics/", `renomeou? a original é a verdade do vídeo ${ORIGEM}`);   // [porte Régie]
    continue;
  }
  const tOrig = textoDe(orig);
  textos.set(f, { orig: tOrig, trad: tAlvo });

  // (a) não foi traduzida: o texto visível é IDÊNTICO ao da original
  const palavras = (tOrig.texto.match(/[A-Za-zÀ-ÿ]{3,}/g) || []).length;
  if (palavras >= 2 && tOrig.texto.trim() === tAlvo.texto.trim())
    erro(alvo, "texto visível IDÊNTICO ao da original — a cena não foi traduzida", `${palavras} palavra(s) na tela`);

  // (b) resíduo do idioma de ORIGEM (passa em todos os gates numéricos e reprova no ar)
  // [porte Régie] a origem vem do canal.json; origem sem lista de resíduo é NÃO MEDIDA, dita uma vez só.
  const res = residuoDaOrigem(tAlvo.texto, ORIGEM, lang);
  if (res === null) residuoNaoMedido = true;
  else if (res.length) erro(alvo, `resíduo do idioma de origem (${ORIGEM}) no texto visível: ${res.join(", ")}`, "comentário de código é isento; isto é o que o espectador LÊ");

  // (c) o dado não muda de idioma — só o formato
  const nOrig = numerosDe(tOrig.texto), nTrad = numerosDe(tAlvo.texto);
  const conta = (arr) => arr.reduce((m, v) => m.set(v, (m.get(v) || 0) + 1), new Map());
  const cO = conta(nOrig), cT = conta(nTrad);
  const sumiram = [...cO].filter(([v, n]) => (cT.get(v) || 0) < n).map(([v]) => v);
  const surgiram = [...cT].filter(([v, n]) => (cO.get(v) || 0) < n).map(([v]) => v);
  if (sumiram.length)
    erro(alvo, `número da tela sumiu ou mudou de valor: ${sumiram.join(", ")}`,
      "separador de milhar × decimal troca de papel entre idiomas — errar isso muda o dado por um fator de mil");
  if (surgiram.length)
    alerta(alvo, `número que a original não tinha: ${surgiram.join(", ")}`, "confirme se é formatação local e não dado novo");
}

// ── 5 · A CONFRONTAÇÃO: o termo que se OUVE é o termo que se LÊ ──────────────────────────────
if (glos && Array.isArray(glos.termos)) {
  if (glos.lang && glos.lang !== lang) erro(glosPath, `glossário é de "${glos.lang}", não de "${lang}"`, "");
  const narr = normalizar(Array.isArray(trad) ? trad.map((s) => s.text || "").join("\n") : "");
  const pendentes = glos.termos.filter((t) => !String(t.alvo || "").trim());
  if (pendentes.length)
    erro(glosPath, `${pendentes.length} termo(s) do glossário sem \`alvo\` preenchido`,
      `${pendentes.slice(0, 8).map((t) => t.pt).join(", ")} — glossário pela metade não confronta nada`);

  for (const t of glos.termos) {
    const alvo = String(t.alvo || "").trim();
    if (!alvo) continue;
    const variantes = (t.variantes || []).map(normalizar).filter(Boolean);
    if (narr && ![normalizar(alvo), ...variantes].some((f) => narr.includes(f)))
      erro(glosPath, `termo "${t.pt}" → "${alvo}" NÃO aparece na narração traduzida`,
        "ou o termo da tela é outro que o da voz, ou o glossário está desatualizado — os dois são divergência");

    // divergência DECLARADA: a tela pode usar outra palavra, com motivo escrito — e o gate passa
    // a cobrar essa palavra em TODAS as cenas (a consistência continua de pé).
    const div = t.telaDiverge && String(t.telaDiverge.termo || "").trim();
    if (t.telaDiverge && !String(t.telaDiverge.motivo || "").trim())
      erro(glosPath, `"${t.pt}": telaDiverge sem motivo escrito`, "divergir sem justificativa é justamente o acidente que o glossário veio matar");
    if (div) alerta(glosPath, `"${t.pt}": a tela diz "${div}" e a voz diz "${alvo}" (divergência DECLARADA)`, t.telaDiverge.motivo);
    const formas = [div || alvo, ...variantes].map(normalizar).filter(Boolean);

    // as cenas cuja ORIGINAL usa o termo pt: a traduzida tem que usar o termo esperado
    const ptNorm = normalizar(String(t.pt || ""));
    if (!ptNorm) continue;
    const divergentes = [];
    for (const [cena, { orig, trad: tt }] of textos) {
      if (!normalizar(orig.texto).includes(ptNorm)) continue;
      if (!formas.some((f) => normalizar(tt.texto).includes(f))) divergentes.push(cena);
    }
    if (divergentes.length)
      erro(glosPath, `"${t.pt}" → "${formas[0]}": ${divergentes.length} cena(s) traduzida(s) não usam o termo da narração`,
        `${divergentes.slice(0, 6).join(", ")} — flexão vai em \`variantes\`; forma curta obrigatória vai em \`telaDiverge\` COM motivo; sinônimo à toa se corrige na cena`);
  }
}

// [porte Régie] origem sem lista de resíduo: NÃO MEDIDO (exit 2), nunca alerta com PASS. Medido na
// verificação da rodada 2 (23/09/2026): canal es-ES com a tela "traduzida" para en-US ainda em espanhol
// ("The río más largo del mundo") saía "▲ … NÃO MEDIDO" e "✓ PASS", exit 0 — um verde sobre a lente
// que nem rodou. É a mesma regra do qc-tela-x-fala: o que não se mede não vira aprovação.
if (residuoNaoMedido) naoMedido(gLang, `resíduo do idioma de origem NÃO MEDIDO — não há lista de palavras para "${ORIGEM}" (só pt e en)`,
  "a tela traduzida pode ter ficado no idioma de origem e esta lente não tem como ver; confira por leitura, cena a cena, e registre a conferência — o portão não aprova o que não mediu");

// ── 6 · COBERTURA (informativo: quem decide "pronto" é o manifesto de idioma) ─────────────────
const faltando = cenasOrig.filter((f) => !cenasLang.includes(f));
if (cenasOrig.length && faltando.length)
  alerta(gLang, `cobertura ${cenasLang.length}/${cenasOrig.length} cena(s) traduzida(s)`,
    `faltam ${faltando.length}: ${faltando.slice(0, 5).join(", ")}${faltando.length > 5 ? "…" : ""}`);

// ── RELATÓRIO ────────────────────────────────────────────────────────────────────────────────
const resumo = {
  proj, lang, origem: ORIGEM,   // [porte Régie]
  cenas: { traduzidas: cenasLang.length, originais: cenasOrig.length },
  narracao: fs.existsSync(trPath), glossario: !!glos,
  erros: erros.length, alertas: alertas.length, nao_medidos: naoMedidos.length,   // [porte Régie]
  achados: [...erros.map((e) => ({ nivel: "ERRO", ...e })), ...naoMedidos.map((n) => ({ nivel: "NAO_MEDIDO", ...n })), ...alertas.map((a) => ({ nivel: "ALERTA", ...a }))],
};
// [porte Régie] 0 passou · 1 reprovou · 2 NÃO MEDI (o que reprova manda; sem reprova, o não medido não vira PASS)
const SAIDA = erros.length ? 1 : naoMedidos.length ? 2 : 0;
if (JSON_OUT) { console.log(JSON.stringify(resumo, null, 2)); process.exit(SAIDA); }

console.log(`\n══ QC IDIOMA — ${proj} · ${ORIGEM} → ${lang} ══\n`);   // [porte Régie] a origem vem do canal.json
for (const e of erros) { console.log(`✗ ${e.onde}\n  ${e.msg}`); if (e.detalhe) console.log(`   ↳ ${e.detalhe}`); }
if (erros.length) console.log("");
for (const n of naoMedidos) { console.log(`⚠ ${n.onde}\n  ${n.msg}`); if (n.detalhe) console.log(`   ↳ ${n.detalhe}`); }   // [porte Régie]
for (const a of alertas) { console.log(`▲ ${a.onde}\n  ${a.msg}`); if (a.detalhe) console.log(`   ↳ ${a.detalhe}`); }
console.log("─".repeat(72));
console.log(`  tela ${cenasLang.length}/${cenasOrig.length} · narração ${fs.existsSync(trPath) ? "ok" : "AUSENTE"} · glossário ${glos ? `${glos.termos?.length ?? 0} termo(s)` : "AUSENTE"}`);
console.log(`  ${erros.length} ERRO(s) · ${naoMedidos.length} NÃO MEDIDO(s) · ${alertas.length} alerta(s)`);
console.log(erros.length ? "\n✗ FAIL — narração e tela podem divergir no ar.\n"
  : naoMedidos.length ? `\n⚠ NÃO MEDIDO — ${naoMedidos.length} verificação(ões) sem régua (exit 2, não é aprovação): ${naoMedidos.map((n) => n.msg.split(" — ")[0]).join("; ")}.\n`
  : "\n✓ PASS — o que o espectador OUVE bate com o que ele LÊ.\n");
process.exit(SAIDA);
