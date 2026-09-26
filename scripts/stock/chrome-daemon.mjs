#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/chrome-daemon.mjs (linhas 1-41, commit 4afda12).
// O que mudou: perfil do canal fora do repositório (lib/perfil-stock.mjs) e Chrome INSTALADO
// estável (STOCK_CHROME, CHROME_PATH ou o acharChrome do motor — o estúdio caía no Chrome BETA do
// Mac, que o próprio setup-login documenta crashar no download); a ocultação por osascript
// (Cmd+H, só macOS) saiu — no Windows a janela fica fora da tela pela posição, e STOCK_VISIVEL=1 a
// traz de volta; a trava do perfil (<perfil>.trava) impede o daemon de subir em cima de uma sessão
// de login; Ctrl+C fecha o contexto (grava o perfil) antes de sair.
// ⚠️ O cliente dele no estúdio era o baixar.mjs (connectOverCDP :9377), que NÃO veio nesta leva.
// Hoje ele serve ao tecnico-stock para calibrar seletor à mão, conectando pelo CDP.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: playwright-core.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// CHROME-DAEMON DO STOCK — mantém UM Chrome headed vivo; as corridas conectam nele via CDP
// (connectOverCDP 127.0.0.1:9377) em vez de relançar o app a cada busca — era o relançamento que
// fazia a janela piscar/roubar foco na tela do Mateus dezenas de vezes por caça (19/jul/2026).
// Headed de verdade (Cloudflare ok), fora da tela.
//   Subir:    node scripts/stock/chrome-daemon.mjs   (segura o perfil enquanto vive)
//   Derrubar: Ctrl+C na janela dele (fecha o Chrome e grava o perfil). [porte Regie] NUNCA
//             `taskkill /IM chrome.exe`: derruba o render e o Chrome pessoal do dono junto.
//   STOCK_VISIVEL=1 = mantém a janela na tela (calibração do tecnico-stock).
//
// ⚠️ [porte Regie] A PORTA CDP É A CHAVE DA CASA. Qualquer programa deste PC que alcance
// 127.0.0.1:9377 comanda o Chrome LOGADO nas contas do canal — lê cookies, baixa, compra. O Chrome
// só escuta no 127.0.0.1 (nunca exponha a porta na rede) e o daemon só deve viver enquanto alguém
// estiver calibrando.
import { importarDoMotor } from "../lib/motor.mjs";
import { ehPrincipal } from "./lib/ferramentas.mjs";
import { chromeDoStock, perfilAbertoPorOutroChrome, perfilDoCanal, travarPerfil } from "./lib/perfil-stock.mjs";

/** Os argumentos do Chrome — puros, para o teste afirmar sobre eles. */
export function argsDoDaemon({ porta = 9377, visivel = false } = {}) {
  return ["--disable-blink-features=AutomationControlled", `--remote-debugging-port=${porta}`,
    // [porte Regie] endereço explícito: o CDP nunca sai do próprio PC
    "--remote-debugging-address=127.0.0.1",
    ...(visivel ? [] : ["--window-position=-3200,-3200"]), "--window-size=1440,900",
    // janela OCULTA continua renderizando (senão Cloudflare/players congelam com o app escondido)
    "--disable-backgrounding-occluded-windows", "--disable-renderer-backgrounding", "--disable-background-timer-throttling"];
}

export async function principal(argv = process.argv.slice(2), { raiz = process.cwd(), env = process.env, log = console.log } = {}) {
  let chromium;
  try { ({ chromium } = await import("playwright-core")); }
  catch { console.error("x falta o playwright-core neste canal. Na pasta do canal, rode:  npm.cmd install"); return 2; }
  const PERFIL = perfilDoCanal({ raiz, env });
  const CHROME = await chromeDoStock({ env, importarDoMotor });
  const PORTA = +(env.STOCK_CDP_PORT || 9377);
  const trava = travarPerfil(PERFIL, `chrome-daemon CDP ${PORTA}`);
  if (!trava.ok || perfilAbertoPorOutroChrome(PERFIL)) {
    if (trava.ok) trava.liberar();
    console.error(`x o perfil esta em uso (${trava.ok ? "um Chrome ja esta aberto com ele" : trava.motivo}) — o daemon nao subiu.`);
    return 2;
  }
  // [porte Regie] a trava sai em QUALQUER saída — inclusive Ctrl+C antes do Chrome terminar de subir
  process.on("exit", () => trava.liberar());
  process.on("SIGINT", () => process.exit(130));
  const ctx = await chromium.launchPersistentContext(PERFIL, {
    executablePath: CHROME, headless: false, chromiumSandbox: true, viewport: { width: 1440, height: 900 },
    acceptDownloads: true,
    args: argsDoDaemon({ porta: PORTA, visivel: Boolean(env.STOCK_VISIVEL) }),
  });
  const encerrar = async () => {
    await Promise.race([ctx.close().catch(() => {}), new Promise((r) => setTimeout(r, 8000))]);
    trava.liberar();
    process.exit(0);
  };
  process.removeAllListeners("SIGINT");
  process.on("SIGINT", encerrar);
  process.on("SIGTERM", encerrar);
  ctx.on("close", () => { trava.liberar(); process.exit(0); });
  log(`chrome-daemon do stock NO AR — CDP 127.0.0.1:${PORTA} | perfil ${PERFIL} | fora da tela=${!env.STOCK_VISIVEL}`);
  await new Promise(() => {});   // vive até Ctrl+C
  return 0;
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 1; }
}
