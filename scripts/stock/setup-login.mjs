#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/setup-login.mjs (linhas 1-251, commit 4afda12).
// O que mudou:
//   · o perfil sai de out/_stock-perfil (DENTRO do repositório) e vai para
//     %USERPROFILE%\.regie\chrome-stock\<canal> (scripts/stock/lib/perfil-stock.mjs): é credencial
//     viva, e credencial não mora em pasta que o git vê nem que o Drive sincroniza;
//   · o Chrome é o INSTALADO no PC (STOCK_CHROME, CHROME_PATH ou o acharChrome do motor); nunca baixa
//     navegador. Sessão nasce no MESMO binário em que for usada — a regra do estúdio continua;
//   · saiu o túnel/proxy (exigirTunelNaNuvem, proxyPlaywright): o PC do canal JÁ é a ponta
//     residencial; saiu a medida de presença por VNC (ss nas portas 5901/6080): aqui a janela está
//     na tela do dono. Fica o TETO (STOCK_PORTAO_TETO_MIN, padrão 90 min);
//   · a trava do perfil era lib/trava.mjs (não veio): agora é o arquivo <perfil>.trava com o PID, e
//     também se recusa a abrir quando OUTRO Chrome (inclusive um aberto à mão) está com o perfil;
//   · SEM plataforma nomeada, lista as conhecidas e sai 2 — o estúdio abria as cinco do roster do
//     Top10, e um dono de canal com conta em uma só veria quatro telas de login que não são dele. As
//     plataformas abertas ficam registradas em <perfil>.plataformas.json (o sessao-conferir as lê);
//   · Reuters saiu inclusive "sob demanda": a licença é do Top10, os canais da Régie não a usam;
//   · playwright-core é importado dentro de principal(), com erro que ensina `npm.cmd install`.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: playwright-core.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// SETUP 1× — abre um navegador com PERFIL DEDICADO com as plataformas em abas.
// O dono do canal loga manualmente em cada uma; as sessões ficam persistidas no perfil e o agente usa
// depois sem pedir login de novo. Rodar de novo só se alguma sessão expirar.
//
//   node scripts/stock/setup-login.mjs storyblocks envato     # as plataformas em que o canal TEM conta
//   node scripts/stock/setup-login.mjs envato                 # só uma (quando só a sessão dela caducou)
//
// ⚠️ CHROME **ESTÁVEL**, NUNCA O BETA. Este arquivo abria no Beta por padrão, e o `baixar.mjs` já
// documenta (medido 03/ago/2026, reproduzido 5×) que o Beta CRASHA no início do download —
// `EXC_BREAKPOINT` no `CrBrowserMain`, e o que a produção lê é "não achei mídia". A sessão tem de
// nascer no MESMO binário em que a caça vai rodar; login num Chrome e download noutro é a receita
// para uma sessão que "existe" e não serve.
//
// ⚠️ [porte Regie] CONTA COMPARTILHADA ENTRE PCs PODE SER SUSPENSA. O estúdio montou túnel
// residencial inteiro para a mesma conta não aparecer em dois IPs (sessao-conferir.mjs, cabeçalho:
// "é a plataforma ver assinatura ilimitada saindo de datacenter e SUSPENDER A CONTA"). Logar AQUI a
// conta de outra pessoa (a do Top10, por exemplo) põe essa conta em mais um IP. Só logue a conta que
// é deste canal — a decisão de compartilhar conta é do dono da conta, não deste script.
import { mkdirSync } from "node:fs";
import { importarDoMotor } from "../lib/motor.mjs";
import { ehPrincipal } from "./lib/ferramentas.mjs";
import {
  PLATAFORMAS, chromeDoStock, gravarPlataformasDoPerfil, perfilAbertoPorOutroChrome, perfilDoCanal, travarPerfil,
} from "./lib/perfil-stock.mjs";

/**
 * ⚠️ ABRE A PÁGINA DE TRABALHO, NUNCA A HOME (corrigido 12/ago/2026).
 *
 * Este arquivo abria `https://www.shutterstock.com/` e as outras cinco homes — e **home não mostra
 * nenhum dos dois defeitos que trazem o Mateus até aqui**:
 *   • sessão caída: a home é servida igual para anônimo e para assinante; o header pode até mostrar
 *     o avatar de um cache antigo. Quem denuncia é a página de trabalho.
 *   • CAPTCHA/anti-bot: o desafio do Shutterstock aparece **na busca**, que é onde a caça bate.
 *     Medido em 12/ago às 22:37 UTC: *"Verification Required — Automated (bot) activity on your
 *     network"* na URL de busca, com a sessão LOGADA. Quem abrisse a home veria uma página limpa e
 *     concluiria que estava tudo bem.
 * Resultado prático do jeito antigo: a pessoa atravessava o VNC inteiro, olhava seis homes bonitas,
 * fechava a janela — e a caça seguinte batia na mesma parede.
 *
 * O alvo de cada uma é a URL que o `baixar.mjs` REALMENTE usa (a `url()` do config), com um termo
 * neutro. É a [PESQ-86] aplicada ao portão: *conferir a porta da frente não diz nada sobre a porta
 * de serviço, que é por onde se entrega.* No Envato isso é literal — `www.envato.com` (conta) e
 * `app.envato.com` (busca) têm sessões SEPARADAS, e logar na primeira não abre a segunda.
 * [porte Regie] As URLs moram em lib/perfil-stock.mjs (PLATAFORMAS.<p>.busca).
 */
export function alvosPedidos(nomes) {
  const SO = nomes.map((s) => s.toLowerCase()).filter(Boolean);
  const todas = Object.entries(PLATAFORMAS).map(([n, p]) => [n, p.busca]);
  const alvos = todas.filter(([n, u]) => SO.some((s) => n.includes(s) || u.includes(s)));
  return { SO, alvos, conhecidas: todas.map(([n]) => n) };
}

export async function principal(argv = process.argv.slice(2), { raiz = process.cwd(), env = process.env, log = console.log } = {}) {
  const { SO, alvos, conhecidas } = alvosPedidos(argv.filter((a) => !a.startsWith("--")));
  // [porte Regie] sem plataforma nomeada não abre nada: o roster é da conta de quem loga
  if (!SO.length) {
    console.error(`diga em quais plataformas este canal TEM conta: node scripts/stock/setup-login.mjs <plataforma> [outra]`);
    console.error(`conhecidas: ${conhecidas.join(" | ")}`);
    return 2;
  }
  if (!alvos.length) { console.error(`x nao conheco ${SO.join(", ")}. Conhecidas: ${conhecidas.join(" | ")}`); return 2; }

  let chromium;
  try { ({ chromium } = await import("playwright-core")); }
  catch {
    console.error("x falta o playwright-core neste canal. Na pasta do canal, rode:  npm.cmd install   (no PowerShell; npm sozinho pode ser bloqueado)");
    return 2;
  }
  const PERFIL = perfilDoCanal({ raiz, env });
  const CHROME = await chromeDoStock({ env, importarDoMotor });

  /**
   * ⚠️ ESPERAR A CAÇA, NUNCA INVADIR A JANELA DELA (12/ago/2026).
   *
   * O perfil só aceita UM Chrome por vez, e o segundo não falha com erro claro: imprime *"Opening in
   * existing browser session"* e passa a dirigir a janela do primeiro — as duas sessões atropelam-se.
   * O `baixar.mjs` já resolvia isso com esta mesma trava (o comentário longo dele explica o caso);
   * aqui faltava, e é justamente aqui que dói mais: o Mateus abre o VNC, vê a janela da CAÇA em vez
   * das abas de login, e a caça morre no meio.
   *
   * Medido hoje ao tentar conferir sessão com duas caças de `orcas-nao-matam` no ar: o conferidor
   * levou o `Opening in existing browser session` e não mediu nada.
   *
   * Esperar é o comportamento correto — a caça termina sozinha. `STOCK_PORTAO_ESPERA_MIN` afrouxa o
   * teto para quem sabe que há um lote longo rodando.
   */
  const ESPERA_MIN = +(env.STOCK_PORTAO_ESPERA_MIN || 20);
  let trava = null;
  for (let i = 0; i < Math.max(1, Math.round((ESPERA_MIN * 60) / 15)); i++) {
    const t = travarPerfil(PERFIL, "portao humano (login/CAPTCHA)");
    // [porte Regie] também o Chrome aberto À MÃO com este perfil conta como ocupado
    if (t.ok && !perfilAbertoPorOutroChrome(PERFIL)) { trava = t; break; }
    if (t.ok) t.liberar();
    const motivo = t.ok ? "um Chrome ja esta aberto com este perfil" : t.motivo;
    if (i === 0) log(`... o perfil do Chrome esta em uso — esperando liberar (${motivo}).\n    Nao invado a janela: as duas sessoes se atropelariam.`);
    await new Promise((r) => setTimeout(r, 15_000));
  }
  if (!trava) {
    console.error(`x perfil ocupado ha mais de ${ESPERA_MIN} min — o portao NAO abriu (a janela seria a de outro processo, nao a sua).`);
    console.error(`   Feche o Chrome que esta com o perfil ${PERFIL}, ou aumente STOCK_PORTAO_ESPERA_MIN.`);
    return 75;
  }
  const soltar = () => { try { trava?.liberar(); } catch { } };
  process.on("exit", soltar);

  /**
   * Preenchido logo abaixo. Fica em `let` no escopo — e não `const` junto do `launch` — porque um
   * sinal que chegue ANTES do Chrome subir encontraria a variável na zona morta temporal e
   * derrubaria o handler com ReferenceError, trocando um encerramento sujo por um pior.
   */
  let ctxRef = null;
  let encerrando = false;
  /**
   * ⚠️ O SINAL TAMBÉM TEM DE GRAVAR O PERFIL (14/set/2026).
   *
   * Estes dois handlers soltavam a trava e saíam — e mais nada. O auto-encerramento (`fechar()`,
   * lá embaixo) faz `await ctx.close()` e anuncia «O perfil foi gravado»; o caminho do SINAL não
   * fazia. **Os dois encerram o mesmo portão e só um salvava o trabalho.**
   *
   * O Playwright grava o perfil persistente ao FECHAR o contexto; matar o node mata o Chrome filho
   * junto, sem esse passo. E o que se perde é justamente o que o portão existe para produzir: o
   * humano resolveu um CAPTCHA e logou, e o login pode não chegar ao disco.
   *
   * `encerrarComSinal` é assíncrono porque `ctx.close()` é — e o `setTimeout` de 8 s existe para
   * que um Chrome travado não transforme "encerrar" em "pendurar para sempre": ele é a diferença
   * entre tentar salvar e exigir salvar.
   */
  async function encerrarComSinal(sinal, codigo) {
    if (encerrando) return;            // um segundo Ctrl+C não pode atropelar a gravação em curso
    encerrando = true;
    log(`\n${sinal} recebido — gravando o perfil antes de sair (nao aperte de novo).`);
    try {
      await Promise.race([ctxRef?.close() ?? Promise.resolve(), new Promise((r) => setTimeout(r, 8000))]);
      log(`   perfil gravado em ${PERFIL}`);
    } catch (e) {
      console.error(`   ! nao consegui fechar o contexto (${String(e?.message || e).slice(0, 90)}) — o login pode NAO ter sido gravado`);
    }
    process.exit(codigo);              // `soltar` roda no handler de "exit", que continua registrado
  }
  process.on("SIGINT", () => encerrarComSinal("SIGINT", 130));
  process.on("SIGTERM", () => encerrarComSinal("SIGTERM", 143));

  mkdirSync(PERFIL, { recursive: true });
  gravarPlataformasDoPerfil(PERFIL, alvos.map(([n]) => n));   // [porte Regie] o sessao-conferir lê daqui
  const ctx = await chromium.launchPersistentContext(PERFIL, {
    executablePath: CHROME, headless: false, chromiumSandbox: true, viewport: { width: 1440, height: 900 },
    args: ["--disable-blink-features=AutomationControlled"],
  });
  ctxRef = ctx;   // a partir daqui o encerramento por sinal consegue gravar o perfil

  log(`Perfil dedicado: ${PERFIL}`);
  log(`\n> ${alvos.length} aba(s) na PAGINA DE BUSCA de cada plataforma — e la que o defeito aparece:`);
  for (const [nome, url] of alvos) log(`   ${nome.padEnd(13)} ${url}`);
  log(`
-> Em CADA aba, uma destas tres coisas:
    - grade de videos carregou e o avatar esta no header  ->  esta tudo certo, siga
    - "Sign in"/"Entrar" no lugar do avatar               ->  faca o LOGIN aqui mesmo
    - CAPTCHA / "Verification Required"                   ->  resolva o desafio
-> Quando terminar TODAS, FECHE A JANELA.
`);
  const first = ctx.pages()[0] || await ctx.newPage();
  await first.goto(alvos[0][1]).catch(() => {});
  for (const [, url] of alvos.slice(1)) { const p = await ctx.newPage(); await p.goto(url).catch(() => {}); }

  /**
   * ⏱ O PORTÃO VENCE SOZINHO — senão ele é a trava eterna.
   *
   * Medido em 13/ago/2026, na primeira noite em que o portão existiu: um `portao.sh shutterstock`
   * ficou **33 minutos** de pé, com NINGUÉM conectado, segurando a trava do perfil do Chrome.
   * *Toda espera por pessoa precisa de prazo, ou vira bloqueio permanente disfarçado de "aguardando
   * aprovação".*
   * [porte Regie] Aqui não há VNC para medir presença: fica só o TETO (a janela aberta está na tela
   * do dono, e quem não a vê é quem saiu de perto). Fechar não perde trabalho: o perfil é gravado.
   */
  const TETO_MS = +(env.STOCK_PORTAO_TETO_MIN || 90) * 60_000;
  const timer = setTimeout(async () => {
    log(`\nPORTAO ENCERRADO SOZINHO — teto de ${TETO_MS / 60000} min atingido. O perfil foi gravado.`);
    log(`   Se voce ainda precisava dele, reabra:  node scripts/stock/setup-login.mjs ${SO.join(" ")}`);
    await ctx.close().catch(() => { });
    process.exit(0);
  }, TETO_MS);
  timer.unref?.();

  // ⚠️ NÃO ESCREVA "✓ sessões persistidas" AQUI — este handler dispara quando a JANELA FECHA, e a
  // janela fecha igual se ninguém logou em nada. A frase antiga afirmava um estado que este processo
  // não mede, e o log é lido DEPOIS, por quem decide se a porta está aberta.
  // Quem afirma sessão viva é o `sessao-conferir.mjs`, que julga pelo DESTINO DO REDIRECT da página
  // só-de-conta. Aqui só se sabe uma coisa, e é essa que se escreve: o perfil foi para o disco.
  await new Promise((ok) => ctx.on("close", ok));
  clearTimeout(timer);
  log("- navegador fechado — o perfil foi gravado.");
  log("  ISTO NAO E PROVA DE SESSAO VIVA (fechar sem logar imprime esta mesma linha).");
  log("  O veredito: node scripts/stock/sessao-conferir.mjs   # 0=logadas 1=deslogada 2=nao mediu");
  return 0;
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = e?.code === "SEM_MOTOR" || e?.code === "SEM_CHROME" ? 2 : 1; }
  // process.exit explícito: o handler de SIGINT registrado segura o loop vivo depois do return
  process.exit(process.exitCode ?? 0);
}
