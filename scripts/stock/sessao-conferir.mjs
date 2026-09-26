#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/sessao-conferir.mjs (linhas 1-219, commit 4afda12).
// O que mudou:
//   · perfil do canal fora do repositório (%USERPROFILE%\.regie\chrome-stock\<canal>, ver
//     lib/perfil-stock.mjs) e Chrome INSTALADO (STOCK_CHROME, CHROME_PATH ou acharChrome do motor —
//     o estúdio cravava /usr/bin/google-chrome);
//   · saiu o túnel (exigirTunelNaNuvem/proxyPlaywright): o PC do canal já é a ponta residencial —
//     o furo que o cabeçalho descreve (conferir sessão saindo de IP de datacenter) não existe aqui;
//   · o auto-xvfb continua, mas só no Linux sem tela (a WSL de quem desenvolve); no Windows há tela;
//   · só confere as plataformas em que o canal TEM conta: as que o setup-login registrou em
//     <perfil>.plataformas.json, ou as nomeadas na linha de comando (o estúdio conferia as quatro do
//     roster do Top10, e um canal com uma conta só sairia "deslogado" nas outras três);
//   · a lente de DOM do vigia-portas (sessao-veredito.mjs: avatar = vida, botão de entrar = morte)
//     entra como REFORÇO impresso ao lado — o código de saída continua sendo o da página só-de-conta;
//   · os screenshots vão para <perfil>-debug (mostram nome/e-mail da conta: fora do repositório);
//   · recusa rodar com o perfil em uso (trava do setup-login/chrome-daemon, ou Chrome aberto à mão);
//   · o veredito por página virou função pura (vereditoDaConta) testada sem navegador.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: playwright-core.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// CONFERIR SESSÃO DE STOCK — o teste DURO, o único que não mente.
//
// POR QUE EXISTE. A doutrina sempre disse que a prova de sessão é a **página só-de-conta** (ela
// redireciona para `/login` quando a sessão morreu), mas não havia script que a rodasse. Sobrava o
// `_probe-login.mjs`, que procura link de login *visível* — e o banner de cookies o encobre, então
// ele devolve `LOGADO(provável)` de graça. Probe genérico erra para o lado perigoso: o de dizer que
// a porta abriu.
//
// Sem teste barato, o impedimento passa a ser HERDADO POR ESCRITO. Medido em 07/ago/2026: o
// `especies-humanas` atravessou TRÊS estações de QC (05, 06 e 07/ago) parado nos mesmos 25 arquivos
// Pexels, com o briefing repetindo *"a VM está deslogada das contas — roda no Mac, exige VNC do
// Mateus"*. Ninguém tinha testado. Rodar isto levou ~90 s e devolveu LOGADO nas duas plataformas
// que importavam, com o plano ilimitado do Shutterstock ativo.
//
// ⚠️ A OUTRA ARMADILHA, que este script evita de propósito: **contagem de resultado não prova
// sessão**. As plataformas servem busca a visitante anônimo (Storyblocks 48 itens, Shutterstock 20,
// Motion Array 120), o contador bate, parece sessão viva, e só o download morre.
//
// ⚠️ TIMEOUT NÃO É VEREDITO. Sob máquina saturada isto estoura sem medir — e "não mediu" lido como
// "deslogado" manda a produção para o contorno errado (foi por essa porta que o Pexels entrou).
// [porte Regie] No PC do canal, a máquina saturada costuma ser o RENDER rodando ao mesmo tempo
// (REND-07): espere ele terminar antes de medir.
//
// ⚠️⚠️ ESTE SCRIPT SAÍA PELO IP DO DATACENTER — o furo mais caro que ele já teve (medido e
// consertado 12/ago/2026). [porte Regie: o trecho sobre o túnel/tunel.mjs foi omitido — infra do Top10,
// não portada; a lição que sobra é esta:] o risco declarado pela casa nunca foi levar 403: é a plataforma ver
// assinatura ilimitada saindo de datacenter e SUSPENDER A CONTA. [porte Regie] No PC do canal não
// há datacenter no caminho; o risco que sobra é a MESMA conta logada em PCs de pessoas diferentes
// (IPs diferentes) — ver o aviso no setup-login.mjs.
//
// uso: node scripts/stock/sessao-conferir.mjs [plataforma ...]   ← DE DENTRO DA PASTA DO CANAL
// saída: 0 = todas logadas · 1 = alguma deslogada · 2 = alguma não mediu (ou nada a medir)
import { existsSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";
import { importarDoMotor } from "../lib/motor.mjs";
import { ehPrincipal } from "./lib/ferramentas.mjs";
import { pareceDesafio } from "./antibot.mjs";
import { sinaisDe, vereditoSessao } from "./sessao-veredito.mjs";
import {
  PLATAFORMAS, chromeDoStock, lerPlataformasDoPerfil, pastaDeDebug, perfilAbertoPorOutroChrome, perfilDoCanal, travarPerfil,
} from "./lib/perfil-stock.mjs";

// Página só-de-conta de cada plataforma — nunca uma busca. [porte Regie] as URLs moram em
// lib/perfil-stock.mjs (PLATAFORMAS.<p>.conta), com a nota de lente cega ao lado.
// ⚠️ EXCEÇÃO MEDIDA (12/ago/2026, mamute-de-volta): o Envato tem DOIS domínios com sessões
//    SEPARADAS. `www.envato.com/account/downloads/` serviu ("✓ LOGADO") no mesmo minuto em que
//    `app.envato.com/search` — o domínio onde o `baixar.mjs` realmente caça — redirigiu para
//    `account.envato.com/pt-BR/sign_in`, devolvendo 0/3 em duas buscas seguidas. Medir a conta
//    aqui produzia um LOGADO falso que manda a sessão gastar caça numa porta fechada.
//    Por isso o alvo do Envato é o domínio da BUSCA. O veredito continua sendo o DESTINO da
//    navegação (redirect → deslogado), nunca a contagem de resultados.
// ⚠️ O ALVO DO STORYBLOCKS ESTAVA NUMA ROTA QUE NÃO EXISTE (14/ago/2026, `nilo-nao-secou`).
//    `/member/downloads` devolve "Page Not Found" **com a sessão logada** — a rota real do
//    histórico é `/member/download-history`.
// ⛔⛔ DUAS DESTAS QUATRO LENTES ESTÃO CEGAS HOJE, E UMA CEGOU DO JEITO MAIS TRAIÇOEIRO
//    (medido em 14/set/2026, nas duas pontas do mesmo dia).
//
//    · shutterstock → **HTTP 404** em `/account/downloads`. Testei SEIS rotas de conta: **todas
//      404**, servidas com a casca completa do site e SEM redirect para login. É **ROTA MORTA, NÃO
//      SESSÃO MORTA** — no mesmo minuto a busca mostrava avatar no header e o plano "Unlimited".
//
//    · storyblocks → **HTTP 202 com CORPO VAZIO**. Pela manhã esta MESMA URL **redirigia para
//      `/login`** com a sessão caída, que é prova dura de deslogado. Depois que o Mateus logou, ela
//      passou a servir 202 vazio. **A prova negativa desta lente parou de funcionar exatamente quando
//      a sessão voltou.**
//
// ⚠️ **A RÉGUA QUE SAI DAQUI, e é maior que estas duas plataformas:** *uma lente que só produz
//    sinal no estado RUIM não pode ser distinguida de uma lente QUEBRADA — porque o estado bom e a
//    avaria produzem o mesmo silêncio.* É a versão de detecção do "verde por ausência". Quem
//    reconstruir isto vai ver 202 com corpo vazio e concluir que está tudo bem; **não está — está
//    sem medir**, e é por isso que o rodapé conta "não mediu" à parte e o exit 2 existe.
//
// ✅ O QUE COBRE OS DOIS CASOS HOJE é a lente de DOM do `vigia-portas` (`sessao-veredito.mjs`):
//    avatar = prova de VIDA (nenhuma destas plataformas serve avatar a visitante anônimo), botão de
//    entrar = prova de MORTE, e sem prova dos dois lados o veredito é `indeterminada` e NÃO acusa.
//    ⚠️ Mas ela é REFORÇO, não prova dura — depende de seletor de header, que muda quando a
//    plataforma quiser. [porte Regie] Por isso ela é IMPRESSA ao lado e não muda o código de saída.
//
// 🔧 O conserto de raiz, para quem for pegar: a prova de sessão tem de ser **dado do utilizador que
//    a plataforma não serve a anônimo** (nome da conta, saldo de downloads, id do plano), obtido de
//    uma resposta com CORPO — nunca um código de status sozinho, e nunca a ausência de um redirect.

/**
 * [porte Regie] O veredito de UMA página só-de-conta — puro, com a mesma ordem do estúdio.
 * @returns {{veredito: "deslogado"|"nao_mediu"|"logado", motivo: string}}
 */
export function vereditoDaConta({ url, status, textos }) {
  // O veredito é o DESTINO, não o conteúdo: sessão morta não serve página de conta.
  const foiPraLogin = /login|signin|sign_in|sign-in|accounts?\.|\/auth/i.test(url || "");
  /**
   * ⚠️ O DESAFIO MORA NUM IFRAME, E LER SÓ O FRAME PRINCIPAL DEVOLVIA "✓ LOGADO" (14/ago/2026,
   * `nilo-nao-secou`). Medido 4× no Shutterstock: HTTP **403** em `/account/downloads`, com o
   * DataDome servindo *"Verification Required · Slide right to secure your access · Automated
   * (bot) activity on your network"* dentro de `geo.captcha-delivery.com`. O frame principal
   * ficava com `document.body.innerText` de **zero caractere**, `pareceDesafio("")` dava falso, a
   * URL não redirigia para login — e o `else` final imprimia LOGADO, com **exit 0**.
   * Por isso agora: (1) o texto vem de TODOS os frames; (2) o STATUS HTTP tem voz — 403/429 numa
   * página de conta nunca é "logado", qualquer que seja o texto; (3) corpo principal VAZIO é
   * alarme, não silêncio. Na dúvida o veredito é "não mediu", que é honesto e acionável.
   */
  /* ⚠️ NÃO BASTA OLHAR 403/429 (medido ao vivo em 14/ago): o Shutterstock respondeu **404** em
   * `/account/downloads` e o gate voltou a imprimir "✓ LOGADO". Página SÓ-DE-CONTA que responde
   * 4xx/5xx não serviu — qualquer que seja o código e qualquer que seja o texto. */
  const st = Number(status) || 0;
  const lista = Array.isArray(textos) ? textos : [];
  const txt = lista.filter(Boolean).join("\n").slice(0, 2000);
  const corpoVazio = !String(lista[0] || "").trim();
  /**
   * ⚠️ O LOGIN TEM PRECEDÊNCIA sobre o texto (12/ago/2026). Se a navegação terminou numa URL de
   * login, a sessão morreu — ponto; nenhum texto de página revoga isso. Desafio servido DENTRO da
   * tela de login pede de quem lê a mesma ação (abrir o portão e resolver), e "deslogado" é o
   * veredito acionável dos dois.
   *
   * ⚠️ E a pergunta "isto é um desafio?" NÃO se responde aqui: ela mora em `antibot.mjs`, com
   * teste próprio, porque a mesma regra vale no `baixar.mjs`.
   */
  if (foiPraLogin) return { veredito: "deslogado", motivo: "redirigiu para login" };
  if (pareceDesafio(txt)) return { veredito: "nao_mediu", motivo: "BLOQUEIO/CAPTCHA" };
  if (st >= 400) return { veredito: "nao_mediu", motivo: `NAO SERVIU (HTTP ${st})` };
  if (corpoVazio) return { veredito: "nao_mediu", motivo: `CORPO VAZIO (HTTP ${st})` };
  return { veredito: "logado", motivo: `a pagina de conta serviu (HTTP ${st})` };
}

/** [porte Regie] quais plataformas conferir: as pedidas, senão as registradas no perfil. */
export function plataformasAConferir(pedidas, registradas) {
  const lista = (pedidas.length ? pedidas : registradas).map((s) => s.toLowerCase());
  return {
    medir: lista.filter((p) => PLATAFORMAS[p]?.conta),
    semLente: lista.filter((p) => PLATAFORMAS[p] && !PLATAFORMAS[p].conta),
    desconhecidas: lista.filter((p) => !PLATAFORMAS[p]),
  };
}

export async function principal(argv = process.argv.slice(2), { raiz = process.cwd(), env = process.env, log = console.log } = {}) {
  const PERFIL = perfilDoCanal({ raiz, env });
  if (!existsSync(PERFIL)) {
    console.error(`x nao ha perfil de stock deste canal em ${PERFIL}. Primeiro: node scripts/stock/setup-login.mjs <plataforma>`);
    return 2;
  }
  const { medir, semLente, desconhecidas } = plataformasAConferir(argv.filter((a) => !a.startsWith("--")), lerPlataformasDoPerfil(PERFIL));
  if (desconhecidas.length) { console.error(`x nao conheco: ${desconhecidas.join(", ")}. Conhecidas: ${Object.keys(PLATAFORMAS).join(" | ")}`); return 2; }
  for (const p of semLente) log(`${p.padEnd(13)} - sem pagina de conta medida: nao se julga (musica).`);
  if (!medir.length) { console.error("x nenhuma plataforma com pagina de conta para conferir (rode o setup-login com as plataformas do canal)."); return 2; }

  // ⛔ AUTO-XVFB (15/ago/2026) — PORTADO DO `baixar.mjs`, e a ausência dele aqui custou um vídeo.
  // [porte Regie: o caso medido do `uruguai-despovoado` na VM foi omitido — infra do Top10.]
  // *Gate que erra para o lado do "impossível" é pior que gate nenhum.*
  // [porte Regie] só no Linux sem tela (a WSL de quem desenvolve); no Windows sempre há tela.
  if (process.platform === "linux" && !env.DISPLAY && !env.STOCK_XVFB) {
    log("sem $DISPLAY — auto-embrulhando em xvfb-run (tela virtual 1440x900)");
    const r = spawnSync("xvfb-run", ["-a", "--server-args=-screen 0 1440x900x24", process.execPath, ...process.argv.slice(1)],
      { stdio: "inherit", env: { ...env, STOCK_XVFB: "1" } });
    if (r.error?.code === "ENOENT") { console.error("x sem $DISPLAY nesta maquina e sem xvfb-run instalado — rode sob xvfb-run (sudo apt-get install -y xvfb)."); return 2; }
    return r.status ?? 1;
  }

  let chromium;
  try { ({ chromium } = await import("playwright-core")); }
  catch { console.error("x falta o playwright-core neste canal. Na pasta do canal, rode:  npm.cmd install"); return 2; }
  // [porte Regie] o perfil só aceita um Chrome: com outro processo nele, medir seria dirigir a janela alheia
  const trava = travarPerfil(PERFIL, "sessao-conferir");
  if (!trava.ok || perfilAbertoPorOutroChrome(PERFIL)) {
    if (trava.ok) trava.liberar();
    console.error(`x o perfil esta em uso (${trava.ok ? "um Chrome ja esta aberto com ele" : trava.motivo}) — nao mediu. Feche e repita.`);
    return 2;
  }
  process.on("exit", () => trava.liberar());   // [porte Regie] Ctrl+C no meio não deixa o perfil preso
  const CHROME = await chromeDoStock({ env, importarDoMotor });
  const SHOTS = pastaDeDebug(PERFIL);
  mkdirSync(SHOTS, { recursive: true });

  let deslogadas = 0, naoMediu = 0;
  let ctx = null;
  try {
    ctx = await chromium.launchPersistentContext(PERFIL, {
      executablePath: CHROME, headless: false, viewport: { width: 1440, height: 900 },
      args: ["--disable-blink-features=AutomationControlled", "--window-size=1440,900"],
    });
    for (const nome of medir) {
      const url = PLATAFORMAS[nome].conta;
      const p = await ctx.newPage();
      try {
        const resp = await p.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
        await p.waitForTimeout(4000);
        const textos = await Promise.all(p.frames().map((f) =>
          f.evaluate(() => document.body ? document.body.innerText.slice(0, 600) : "").catch(() => "")));
        const v = vereditoDaConta({ url: p.url(), status: resp ? resp.status() : 0, textos });
        // [porte Regie] a lente de DOM, como REFORÇO impresso — não muda o código de saída
        const s = sinaisDe(nome);
        const conta = async (sel) => (sel ? await p.locator(sel).count().catch(() => 0) : 0);
        const dom = vereditoSessao({ vivo: (await conta(s.vivo)) > 0, morto: (await conta(s.morto)) > 0 });
        const cega = PLATAFORMAS[nome].lenteCega ? `  [lente de conta cega: ${PLATAFORMAS[nome].lenteCega}]` : "";
        const marca = v.veredito === "deslogado" ? "x DESLOGADO" : v.veredito === "nao_mediu" ? "! NAO MEDIU" : "ok LOGADO";
        log(`${nome.padEnd(13)} ${marca} — ${v.motivo} | reforco de DOM: ${dom}${cega}  ${p.url().slice(0, 100)}`);
        if (v.veredito === "deslogado") deslogadas++;
        else if (v.veredito === "nao_mediu") naoMediu++;
        await p.screenshot({ path: join(SHOTS, `conta-${nome}.png`) }).catch(() => {});
      } catch (e) {
        log(`${nome.padEnd(13)} ! ERRO/TIMEOUT — nao mediu: ${String(e.message).slice(0, 80)}`);
        naoMediu++;
      }
      await p.close().catch(() => {});
    }
  } finally {
    await ctx?.close().catch(() => {});
    trava.liberar();
  }

  log(`\nscreenshots em ${SHOTS} (conta-*.png) — OLHE antes de concluir (o avatar no header e o sinal).`);
  if (naoMediu) log(`! ${naoMediu} nao mediu(ram) — isso NAO e "deslogado". Confira se ha render rodando e repita.`);
  // Relogin: node scripts/stock/setup-login.mjs <plataforma>, com o dono do canal logando à mão.
  if (deslogadas) log(`Relogin (o dono do canal, a mao): node scripts/stock/setup-login.mjs <plataforma>`);
  return naoMediu ? 2 : deslogadas ? 1 : 0;
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 2; }
}
