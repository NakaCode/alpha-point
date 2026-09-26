#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/antibot.mjs (linhas 1-169, commit 4afda12).
// O que mudou: o bloco `--testar` só roda quando ESTE arquivo é o script chamado (antes rodava em
// qualquer import cujo processo tivesse --testar no argv) e CASOS passou a ser exportado para o teste
// do canal; a regra e os casos medidos ficaram iguais.
// É dependência do sessao-conferir.mjs, e o teste testes/midia-canal-stock.test.mjs roda os CASOS.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// A REGRA "ISTO É UM DESAFIO ANTI-BOT?" — dona única da pergunta, com o teste ao lado.
//
//   import { pareceDesafio, pareceDesafioNaPagina } from "./antibot.mjs";
//   node scripts/stock/antibot.mjs --testar     # o gate da própria regra (custo zero)
//
// ── POR QUE UM MÓDULO (13/ago/2026) ─────────────────────────────────────────────────────────────
// A regra existia DUAS VEZES, copiada: uma no `baixar.mjs` (que para a caça e dispara o WhatsApp) e
// outra no `sessao-conferir.mjs` (que decide o código de saída do gate de sessão). Consertei a
// segunda de manhã e a primeira continuou errada a tarde inteira — que é exatamente o defeito que o
// `CLAUDE.md` já registra sobre o regex de cor: *"o hook tinha uma cópia paralela da regra, e as
// duas divergiram até o mesmo defeito passar por ambas, cada uma pelo furo que a outra não tinha."*
// *Um assunto, um dono, um lugar.*
//
// ── O FALSO POSITIVO QUE ORIGINOU ISTO, e ele custou caro ───────────────────────────────────────
// O regex antigo trazia `captcha` cru. Medido na busca REAL do Storyblocks, com a conta logada:
//
//   CASOU "captcha" — 1 elemento, visível=true, <P.text-center text-gray-700 text-sm>
//   texto: "This site is protected by reCAPTCHA."
//   resultados na grade: 48
//
// Ou seja: **48 vídeos na tela, 5.917 no contador, avatar no header** — e o caçador (a) PAROU a
// caça, (b) registrou bloqueio no estado, (c) **mandou WhatsApp para o Mateus** pedindo que ele
// largasse o que estava fazendo para resolver um desafio que não existe. O `reCAPTCHA` do rodapé é
// boilerplate: quase toda plataforma séria o carrega em página de busca e de login.
//
// Alarme falso é bug de prioridade alta porque ensina a ignorar o alarme — e este ainda gasta o
// único gate humano legítimo da casa, que é o recurso mais caro que existe aqui.
//
// ── AS DUAS REGRAS QUE A FUNÇÃO CODIFICA ────────────────────────────────────────────────────────
// 1. casa DESAFIO ATIVO ("verification required", "automated (bot) activity", "just a moment"),
//    nunca a palavra solta. E remove antes a frase-rodapé do reCAPTCHA, em inglês e em português.
// 2. `blocked` e `access denied` SÓ contam com vizinhança de bloqueio de fato ("you are blocked",
//    "your access"), porque as duas aparecem em texto legítimo de plataforma de mídia — conteúdo
//    "blocked in your region", vídeo com "access denied to this collection".
// [porte Regie] [I6] "fui chamado direto?" pela régua do motor (realpath, sem caixa no Windows)
import { ehPrincipal } from "./lib/ferramentas.mjs";

/** Rodapé jurídico do reCAPTCHA: sai do texto ANTES de qualquer decisão. */
const RODAPE_RECAPTCHA = /(protected|protegid\w*)\b[^.\n]{0,60}recaptcha[^.\n]{0,80}\.?/gi;

/**
 * Desafio de verdade: a página parou de servir o produto e está pedindo prova de humanidade.
 *
 * ⚠️ VÁRIOS DESTES TERMOS FORAM ESCRITOS OLHANDO A TELA REAL, e não devem ser podados por parecerem
 * redundantes. O `vigia-portas.mjs` — de onde vieram `unusual activity`, `access is temporarily
 * restricted`, `are you a robot`, `cf-challenge` e `prove you're human` — registra o porquê:
 * *"entraram depois de eu ver a tela real do Shutterstock bloqueado; meu regex original não a
 * pegava, e o vigia reportou 'porta aberta' sobre um bloqueio explícito. Regex de detecção escrito
 * sem ver a tela é palpite."* Esta lista é a soma de três regexes que viviam separados, cada um
 * cego para o que os outros tinham aprendido.
 */
const DESAFIO = new RegExp([
  "verify (that )?you are (a )?human",
  "verification required",
  "unusual (traffic|activity)",
  "automated \\(bot\\) activity",
  "just a moment",
  "checking your browser",
  "complete the (security )?check",
  "access is temporarily restricted",
  "are you a robot",
  "prove you.re human",
  "cf-challenge",
  "acesso restrito",
  "confirme que voc[êe] (n[ãa]o )?[ée] (um )?(rob[ôo]|humano)",
  "press (and hold|& hold)",                       // slider/hold do PerimeterX & cia
  "solve (the )?(captcha|puzzle)",
  "i'?m not a robot",
  "n[ãa]o sou um rob[ôo]",
].join("|"), "i");

/** `blocked`/`denied` pedem vizinhança — sozinhos são texto de catálogo, não de bloqueio. */
const BLOQUEIO_COM_CONTEXTO = /((you|your|seu|sua)\b[^.\n]{0,40}(blocked|denied|bloquead|negad))|((access|acesso)\s+(denied|negado))|(you (have been|are) blocked)|(ip[^.\n]{0,20}(blocked|banned))/i;

/**
 * O texto desta página é um desafio anti-bot?
 * @param {string} texto  innerText da página (ou de um trecho)
 * @returns {boolean}
 */
export function pareceDesafio(texto) {
  const t = String(texto || "").replace(RODAPE_RECAPTCHA, "");
  return DESAFIO.test(t) || BLOQUEIO_COM_CONTEXTO.test(t);
}

/**
 * O TRECHO que disparou — o alarme precisa dele, e é o que separa "bloqueou" de um diagnóstico.
 * Devolve "" quando a página está saudável. Sem isto, quem lê o WhatsApp sabe que há bloqueio e não
 * sabe se é CAPTCHA de imagem, slider, restrição temporária ou suspensão — respostas diferentes.
 */
export function trechoDoDesafio(texto) {
  const t = String(texto || "").replace(RODAPE_RECAPTCHA, "");
  return (t.match(DESAFIO) || t.match(BLOQUEIO_COM_CONTEXTO) || [""])[0];
}

/**
 * A versão para Playwright — lê o texto do `body` e decide.
 *
 * ⚠️ LÊ O TEXTO, NÃO USA `locator('text=/…/')`. O locator casa QUALQUER nó, inclusive o rodapé
 * escondido no fim da página, e ainda obriga a regra a virar uma string de regex dentro de um
 * seletor — onde ela não pode ter lookahead, não pode remover boilerplate antes de decidir, e não
 * pode ser testada sem um navegador. Com o texto em mãos, a mesma função roda no teste de mesa.
 */
export async function pareceDesafioNaPagina(page) {
  return pareceDesafio(await textoDeTodosOsFrames(page));
}

/**
 * ⚠️ O DESAFIO MORA NUM IFRAME — e esta função lia só o frame principal (16/set/2026).
 *
 * O Shutterstock serve o DataDome («Verification Required · Automated (bot) activity on your network
 * (IP …)») dentro de um iframe de `geo.captcha-delivery.com`. O `body` do frame principal fica com
 * ZERO caractere e zero link, `pareceDesafio("")` dá falso, e a caça segue como se a grade só não
 * tivesse hidratado. O `sessao-conferir.mjs` aprendeu isso em 14/ago e leu os frames por conta
 * própria; a dona da regra continuou cega por mais um mês.
 *
 * Medido na `estudio-top10`, 16/set, busca «oil refinery aerial» com `--diag`: a tela era o CAPTCHA
 * (screenshot), o laudo dizia `itens casados: 0` SEM o aviso de anti-bot, e o censo de `a[href]` do
 * frame principal veio VAZIO — a página visível tem um link («Submit feedback»), logo ele não mora
 * no documento principal. O `baixar.mjs` recarregou o CAPTCHA duas vezes e a caça do motor levou
 * 807 s para morrer com «grade curada — recarregando», nome de uma causa que não era a dela.
 */
export async function textoDeTodosOsFrames(page, max = 4000) {
  const frames = typeof page.frames === "function" ? page.frames() : [page];
  const textos = await Promise.all(frames.map((f) =>
    f.evaluate((m) => document.body?.innerText?.slice(0, m) || "", max).catch(() => "")));
  return textos.filter(Boolean).join("\n").slice(0, max * 2);
}

// ── O GATE DA PRÓPRIA REGRA ─────────────────────────────────────────────────────────────────────
// Todos os casos abaixo são TEXTO REAL medido no disco desta casa, com a data. Regra sem verificação
// automática é regra morta — e esta em especial, porque os dois lados do erro doem: falso positivo
// para a produção e acorda o Mateus; falso negativo deixa a caça bater no muro em silêncio.
export const CASOS = [
  // ✓ páginas SAUDÁVEIS — nenhuma pode acusar
  [false, "storyblocks busca logada (13/ago, 48 itens na grade)", "5,917 results found for ocean waves aerial\nFilters\nSort By: Most Relevant\nMedia Type\nThis site is protected by reCAPTCHA."],
  [false, "storyblocks login legítimo (12/ago)", "Log in to Storyblocks\nEmail\nPassword\nLogin\nThis site is protected by reCAPTCHA.\nForgot Password?"],
  [false, "envato login legítimo (12/ago)", "Entre na Envato App\nContinue com o Google\nNome de usuário ou E-mail\nSenha\nInicie a sessão"],
  [false, "rodapé em PT-BR", "Faça login\nEste site é protegido por reCAPTCHA e a Política de Privacidade do Google se aplica."],
  [false, "página de conta servida", "Meus downloads\nHistórico de downloads\nVocê baixou 42 itens este mês"],
  [false, "catálogo com 'blocked' legítimo", "This content is blocked in some regions. Editorial use only.\n120 results"],
  [false, "coleção com 'access' legítimo", "Premium access collection — upgrade to view all 4K assets"],
  // ⛔ desafios DE VERDADE — nenhum pode passar
  [true, "shutterstock 12/ago 22:37 (o real, com o IP)", "Verification Required\nAutomated (bot) activity on your network (IP 177.22.174.240) has triggered this check."],
  [true, "cloudflare", "Just a moment...\nChecking your browser before accessing the site."],
  [true, "verify human", "Please verify you are human to continue."],
  [true, "tráfego incomum", "We have detected unusual traffic from your computer network."],
  [true, "acesso negado de verdade", "Access Denied. You do not have permission to access this resource."],
  [true, "você foi bloqueado", "You have been blocked from accessing this site."],
  [true, "hold do PerimeterX", "Press and hold to confirm you are human"],
  [true, "não sou um robô", "Confirme que você não é um robô para continuar"],
  [true, "acesso restrito PT", "Acesso restrito — detectamos atividade automatizada"],
  // os que vieram do vigia-portas, escritos olhando a tela real do Shutterstock bloqueado (07/ago)
  [true, "restrição temporária (vigia, 07/ago)", "Your access is temporarily restricted due to unusual activity"],
  [true, "are you a robot", "Are you a robot? Please complete the challenge below."],
];

// [porte Regie] só quando este arquivo é o chamado — ver o cabeçalho.
const ehEste = ehPrincipal(import.meta.url);
if (ehEste && process.argv.includes("--testar")) {
  let erros = 0;
  for (const [esperado, nome, txt] of CASOS) {
    const r = pareceDesafio(txt);
    if (r !== esperado) { erros++; console.log(`✗ ERRO  ${nome.padEnd(46)} deu ${r}, esperado ${esperado}`); }
    else console.log(`✓  ${nome.padEnd(46)} ${esperado ? "desafio" : "saudável"}`);
  }
  const bons = CASOS.filter(([e]) => !e).length, ruins = CASOS.length - bons;
  console.log(`\n${erros ? `⛔ ${erros} erro(s) em ${CASOS.length}` : `✓ ${CASOS.length}/${CASOS.length} — pega os ${ruins} desafios reais, ignora as ${bons} páginas saudáveis`}`);
  process.exit(erros ? 1 : 0);
}
