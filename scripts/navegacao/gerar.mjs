#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/navegacao/gerar.mjs (linhas 1-99, commit 4afda12).
// O que mudou:
//   · o corpo virou funções exportadas (lerAssuntos, calcularInsercoes, preencherTemplate, gerar) com o
//     main no fim, para o teste chamar sem subprocesso; a matemática do relógio é a mesma, linha a linha;
//   · o idioma do card vem do canal.json (idiomas.origem): lang do HTML e os rótulos "você está em" /
//     "a seguir" — o estúdio só falava português, e um canal da Régie pode falar inglês;
//   · a marca: o template liga ../../../marca/tokens.css; se o canal ainda não tem esse arquivo, o card
//     aponta para os tokens neutros do motor (src/cena/marca-padrao/tokens.css) e o gerador AVISA;
//   · o dado injetado no <script> escapa "<" (um rótulo com "</script>" quebrava a página);
//   · JSON lido tolera BOM (Bloco de Notas do Windows) e CRLF; caminhos por path.join/relative, nunca "/".
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ⚠ INOPERANTE NA v1 — as duas pontas faltam, e isto está declarado no de_para do porte:
//   · a ENTRADA (out/<proj>/_reaproveitamento.json no formato de compilado: novo_ate_seg, trechos) era
//     gerada pelo agente curador-de-acervo, que NÃO foi portado (template/.claude/agents/ORIGEM.json);
//   · a SAÍDA vai para out/<proj>/_overlays-branding.json, como no estúdio, mas o xml-premiere do motor
//     (src/finalize/xml-premiere.mjs) só cita esse arquivo em comentário — sem leitor, o card é gerado e
//     não entra na timeline. O preenchedor dos moldes compilado-* (scripts/compilado/) também não veio.
//   · "fui chamado direto?" usa o ehPrincipal de lib/motor.mjs (caminho real, sem caixa no Windows).
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * gerar.mjs — o gerador dos cards de NAVEGAÇÃO/PROGRESSO ("onde você está").
 *
 * O designer-de-navegacao desenha o TEMPLATE (card-progresso.html) com um relógio que aceita um
 * valor 0..1 por assunto. ESTE gerador é a matemática determinística: lê o plano de assuntos
 * (_reaproveitamento.json), calcula o estado de cada relógio em cada ponto de inserção, preenche o
 * template e registra o card na V4 (sem-bg) pra finalização. O designer não coloca card à mão.
 *
 * A matemática (contrato com o designer):
 *   relogio(a,t) = 0                          se t <  a.ini   (não começou)
 *                  (t-a.ini)/(a.fim-a.ini)    se em curso     (fração passada)
 *                  1                          se t >= a.fim   (terminou)
 *
 * Uso:  node scripts/navegacao/gerar.mjs <proj> [--seco] [--por-assunto=2]
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { ehPrincipal } from "../lib/motor.mjs";

export const RAIZ = fileURLToPath(new URL("../..", import.meta.url));

// [porte Regie] BOM (U+FEFF) no começo quebra o JSON.parse; o Bloco de Notas antigo grava com ele.
const lerJson = (arq) => JSON.parse(readFileSync(arq, "utf8").replace(/^﻿/, ""));

// ── a matemática do relógio ──────────────────────────────────────────────────
export const relogio = (a, t) => t < a.ini ? 0 : t >= a.fim ? 1 : (t - a.ini) / (a.fim - a.ini);

// ── capitalização de frase formal: 1ª letra maiúscula (defensivo, idempotente) ──
// o rótulo é um título; nunca 100% minúsculo (feedback do Mateus, 23/jul). Só a 1ª letra —
// preserva nomes próprios que o curador já escreveu maiúsculos no meio ("Sistema Solar").
export const capFrase = s => { const t = String(s || "").trim(); return t ? t[0].toUpperCase() + t.slice(1) : t; };

// ── assuntos: do _reaproveitamento.json (curador-de-acervo) ──────────────────
export function lerAssuntos(plano) {
  // cada trecho reaproveitado é um "assunto" com janela na timeline. O conteúdo NOVO é o assunto 0.
  const assuntos = [];
  let cursor = 0;
  // assunto 0 = o conteúdo novo (até onde o filler começa), se declarado
  if (plano.novo_ate_seg != null) { assuntos.push({ rotulo: plano.novo_rotulo || "o vídeo principal", ini: 0, fim: plano.novo_ate_seg }); cursor = plano.novo_ate_seg; }
  for (const t of (plano.trechos || [])) {
    const dur = (t.out_sec ?? 0) - (t.in_sec ?? 0);
    assuntos.push({ rotulo: t.assunto || t.fonte_titulo || "assunto", ini: cursor, fim: cursor + dur, fonte: t.fonte_youtube_id });
    cursor += dur;
  }
  return assuntos;
}

// ── pontos de inserção: porAssunto por assunto, distribuídos dentro da janela ─
export function calcularInsercoes(assuntos, porAssunto = 2) {
  const insercoes = [];
  for (const [i, a] of assuntos.entries()) {
    const span = a.fim - a.ini;
    for (let k = 1; k <= porAssunto; k++) {
      const t = a.ini + span * (k / (porAssunto + 1));   // ex.: 2 por assunto → 1/3 e 2/3
      // o card mostra o assunto ATUAL e o PRÓXIMO (se houver)
      const mostrar = [assuntos[i], assuntos[i + 1]].filter(Boolean)
        .map(x => ({ rotulo: capFrase(x.rotulo), relogio: +relogio(x, t).toFixed(3), atual: x === a }));
      insercoes.push({ t: +t.toFixed(1), assuntoAtual: i, mostrar });
    }
  }
  return insercoes;
}

// [porte Regie] os rótulos do card no idioma do canal. Idioma fora da tabela cai no português e avisa.
export const TEXTOS = {
  pt: { atual: "você está em", proximo: "a seguir" },
  en: { atual: "you are here", proximo: "up next" },
  es: { atual: "estás en", proximo: "a continuación" },
};
export function idiomaDoCanal(raiz = RAIZ) {
  const arq = join(raiz, "canal.json");
  let lang = "pt-BR";
  try { lang = lerJson(arq)?.idiomas?.origem || lang; } catch { /* sem canal.json: fica o padrão */ }
  const base = String(lang).slice(0, 2).toLowerCase();
  return { lang, textos: TEXTOS[base] || TEXTOS.pt, conhecido: Boolean(TEXTOS[base]) };
}

// [porte Regie] onde estão os tokens de marca: os do canal; senão, os neutros do motor (e avisa).
export async function hrefDosTokens(raiz = RAIZ) {
  if (existsSync(join(raiz, "marca", "tokens.css"))) return { href: "../../../marca/tokens.css", aviso: null };
  try {
    const { caminhoDoMotor } = await import(pathToFileURL(join(raiz, "scripts", "lib", "motor.mjs")).href);
    const neutro = join(caminhoDoMotor(), "src", "cena", "marca-padrao", "tokens.css");
    if (existsSync(neutro)) return { href: pathToFileURL(neutro).href, aviso: "marca/tokens.css não existe neste canal: o card usa os tokens NEUTROS do motor (a marca ainda não foi decidida?)" };
  } catch { /* sem motor: cai no aviso abaixo */ }
  return { href: "../../../marca/tokens.css", aviso: "marca/tokens.css não existe e o motor não foi achado: o card vai sair na fonte e nas cores de reserva do navegador" };
}

// ── preenche o template (o designer desenha; nós preenchemos) ─────────────────
export function preencherTemplate(base, mostrar, { lang = "pt-BR", textos = TEXTOS.pt, hrefTokens = "../../../marca/tokens.css" } = {}) {
  // [porte Regie] "<" escapado: um rótulo com "</script>" fecharia o script no meio do dado
  const seguro = (v) => JSON.stringify(v).replace(/</g, "\\u003c");
  return base
    .replace("/*__NAV__*/", () => `window.__NAV=${seguro(mostrar)};window.__NAV_TEXTO=${seguro(textos)};`)
    .replace('lang="pt-BR"', () => `lang="${String(lang).replace(/[^A-Za-z0-9-]/g, "")}"`)
    .replace('href="../../../marca/tokens.css"', () => `href="${hrefTokens}"`);
}

export async function gerar(proj, { seco = false, porAssunto = 2, raiz = RAIZ, log = console.log } = {}) {
  const D = join(raiz, "out", proj);
  const planoF = join(D, "_reaproveitamento.json");
  // [porte Regie] o curador-de-acervo, que gerava este plano no estúdio, não veio para a Régie v1: diz isso,
  // e diz o formato, em vez de mandar o dono atrás de um agente que não existe.
  if (!existsSync(planoF)) throw Object.assign(new Error(
    `✗ ${planoF} não existe.\n` +
    "  No estúdio quem o gerava era o agente curador-de-acervo, que NÃO veio para a Régie v1 — este gerador está\n" +
    "  inoperante até existir um produtor. Formato esperado: {\"novo_ate_seg\": <s>, \"novo_rotulo\": \"…\",\n" +
    "  \"trechos\": [{\"assunto\": \"…\", \"in_sec\": <s>, \"out_sec\": <s>}]} (escrito à mão pelo dono, se quiser o card)."), { exitCode: 1 });
  const assuntos = lerAssuntos(lerJson(planoF));
  if (!assuntos.length) throw Object.assign(new Error("✗ nenhum assunto no plano"), { exitCode: 1 });
  const insercoes = calcularInsercoes(assuntos, porAssunto);

  const tpl = join(raiz, "templates-cena", "navegacao", "card-progresso.html");
  const temTpl = existsSync(tpl);
  const graphicsDir = join(D, "graphics");
  let escritos = 0;
  const overlaysNav = [];
  const { lang, textos, conhecido } = idiomaDoCanal(raiz);
  const { href, aviso } = await hrefDosTokens(raiz);
  if (!seco) {
    mkdirSync(graphicsDir, { recursive: true });
    const base = temTpl ? readFileSync(tpl, "utf8") : null;
    insercoes.forEach((ins, i) => {
      const id = `nav-${String(i + 1).padStart(2, "0")}`;
      if (base) {
        // injeta os dados via <script>window.__NAV=...</script> (o template lê e desenha)
        writeFileSync(join(graphicsDir, `${id}.html`), preencherTemplate(base, ins.mostrar, { lang, textos, hrefTokens: href })); escritos++;
      }
      overlaysNav.push({ id, mov: `graphics/${id}.html`, inSec: ins.t, dur: 5, semBg: true, nota: `navegação: ${ins.mostrar.map(m => `${m.rotulo} ${Math.round(m.relogio * 100)}%`).join(" · ")}` });
    });
    // registra na V4 (append ao _overlays-branding.json, sem duplicar)
    const ovF = join(D, "_overlays-branding.json");
    const ov = existsSync(ovF) ? lerJson(ovF) : [];
    const semNav = (Array.isArray(ov) ? ov : []).filter(o => !/^nav-/.test(o.id));
    writeFileSync(ovF, JSON.stringify([...semNav, ...overlaysNav].sort((a, b) => (a.inSec ?? 0) - (b.inSec ?? 0)), null, 2));
  }

  // ── relatório + PROVA da matemática ───────────────────────────────────────────
  log(`\n  ${proj}: ${assuntos.length} assunto(s), ${insercoes.length} card(s) de navegação (${porAssunto}× por assunto)`);
  for (const a of assuntos) log(`  assunto: "${a.rotulo}" [${(a.ini / 60).toFixed(1)}–${(a.fim / 60).toFixed(1)} min]`);
  log("");
  for (const ins of insercoes) log(`  card @${(ins.t / 60).toFixed(1)}min: ${ins.mostrar.map(m => `${m.atual ? "▶" : " "}${m.rotulo}=${Math.round(m.relogio * 100)}%`).join("  ·  ")}`);
  log(`\n  ${seco ? "(SECO)" : `${escritos} card(s) HTML + ${overlaysNav.length} na V4 (sem-bg)`}`);
  if (!temTpl) log(`  ⚠ template ${relative(raiz, tpl)} não existe — o designer-de-navegacao precisa desenhá-lo`);
  if (!conhecido) log(`  ⚠ idioma "${lang}" sem rótulos na tabela: o card saiu com "você está em"/"a seguir" (edite TEXTOS neste script)`);
  if (aviso && !seco) log(`  ⚠ ${aviso}`);
  return { assuntos, insercoes, escritos, overlaysNav };
}

// [porte Regie] main só quando rodado direto (o teste importa as funções). Compara o caminho REAL dos dois lados
// (junção, link, letra do disco em outra caixa): a comparação crua saía 0 sem gravar nada quando chamado por link.
if (ehPrincipal(import.meta.url)) {
  const proj = process.argv[2];
  const SECO = process.argv.includes("--seco");
  const POR_ASSUNTO = Number((process.argv.find(a => a.startsWith("--por-assunto=")) || "").split("=")[1]) || 2;
  if (!proj || proj.startsWith("--")) { console.error("uso: node scripts/navegacao/gerar.mjs <proj> [--seco] [--por-assunto=2]"); process.exit(2); }
  try {
    await gerar(proj, { seco: SECO, porAssunto: POR_ASSUNTO });
  } catch (e) {
    console.error(e.message);
    process.exit(e.exitCode || 1);
  }
}
