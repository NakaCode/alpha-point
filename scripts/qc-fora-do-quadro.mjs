#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-fora-do-quadro.mjs (linhas 1-469, commit 4afda12).
// O que mudou: o Chrome vem de lib/chrome.mjs (o instalado, achado pelo motor — Chrome ou Edge no
// Windows — com as flags do render; o estúdio cravava /usr/bin/google-chrome ou o caminho do Mac); a
// cena abre por lib/abrir-cena.mjs (a espera de mapa que este gate tinha escrita à mão é a mesma que
// os irmãos usam); o palco vem da régua do render do motor (aspas simples e window.__native4k contam
// — o estúdio perguntava por [data-render="4k-native"] no DOM e não via o segundo), e o viewport
// NASCE no tamanho do palco; a pasta vira lista por lib/expandir-alvos.mjs; página que não abriu de
// vez, sem texto nenhum, é NÃO MEDIDO (a trava do verde vazio de lib/abrir-cena.mjs); e o ✓ diz
// quantos textos mediu. As réguas (margem 4 px, saída 0,3 s, as quatro peneiras, o piso de amostras)
// são as do estúdio.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core
// (^1.60.0), carregado sob demanda por lib/chrome.mjs.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * qc-fora-do-quadro.mjs — acusa TEXTO CORTADO PELA BORDA da tela.
 *
 * O CASO QUE O CRIOU (25/jul, `golfo-dependencia-dessalinizacao`): os rótulos BAHREIN, OMÃ e
 * EMIRADOS estavam com a base cortada pela borda inferior **desde o primeiro frame**. Ninguém viu
 * porque nenhum gate olhava para isso: `check-overlap` compara elementos ENTRE SI, `qc-tamanho`
 * mede altura de fonte, `qc-carga` conta blocos — e todos os três simplesmente IGNORAM o que está
 * fora do viewport, em vez de reclamar. O defeito só apareceu quando um humano olhou um frame.
 *
 * ⚠️ A CAUSA QUASE SEMPRE É MOVIMENTO, e é isso que o torna traiçoeiro: a cena é composta parada,
 * fica perfeita, e então ganha um push-in (`scale` com `transform-origin` deslocado). Cada frame do
 * zoom empurra o conteúdo para fora, e o que estava a 40px da margem sai do quadro no meio da
 * animação. Conferir só o frame 0 não pega — por isso este gate VARRE a duração inteira.
 *
 * O QUE É DEFEITO E O QUE NÃO É: sair inteiro do quadro pode ser saída deliberada (o elemento se
 * despede). O que nunca é deliberado é ficar **parcialmente** cortado — meia palavra visível, base
 * das letras comida pela margem. Por isso o gate acusa a INTERSECÇÃO PARCIAL e ignora quem está
 * 100% fora.
 *
 * Uso: node scripts/qc-fora-do-quadro.mjs <html|pasta> [<html> …] [--passo=0.2] [--margem=4] [--json]
 * Exit: 0 = medi e nada cortado · 1 = medi e há texto cortado/perdido · 2 = NÃO MEDI
 */
import { resolve, basename } from "node:path";
import { readFileSync } from "node:fs";
import { SELETOR_TEXTO } from "./lib/tags-texto.mjs";
import { morrerComoNaoMedido } from "./lib/nao-medido.mjs";
import { lancarChrome } from "./lib/chrome.mjs";                       // [porte Régie] o lançador único
import { abrirCenaParaMedir, palcoDaCena } from "./lib/abrir-cena.mjs"; // [porte Régie] a abertura e o palco únicos
import { expandirAlvos } from "./lib/expandir-alvos.mjs";              // [porte Régie] a extração deste mesmo código

// CRASH NÃO É REPROVAÇÃO — o Chrome que não sobe sairia 1, o código de "medi e reprovei".
morrerComoNaoMedido("qc-fora-do-quadro");

const argv = process.argv.slice(2);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.split("=")[1] : d; };
const JSON_OUT = argv.includes("--json");
/**
 * TOLERÂNCIA — calibrada contra falso positivo, que é bug de prioridade alta.
 *
 * `margem`: 4 px de palco (0,1% de 3840). Abaixo disso é antialiasing e arredondamento de layout,
 * não letra cortada — e um gate que grita por 1 px ensina a ser ignorado.
 *
 * `saida`: os últimos 0,3 s são a DESPEDIDA da cena. Medido em `china-japao-angulo-morto`: o gate
 * acusou "CHINA cortado, esq 333px, desde 12s" numa cena de 12,3 s — era o flare de saída tomando
 * a tela enquanto os rótulos deslizam para fora. Saída deliberada não é defeito.
 */
const MARGEM = +opt("margem", "4");
const SAIDA = +opt("saida", "0.3");
/* ⚠️ PASTA COMO ARGUMENTO DAVA VERDE FALSO (01/ago/2026, achado na estação ARTE do `especies-humanas`).
   Este gate recebe uma LISTA DE HTMLs. Quem passava a pasta — `qc-fora-do-quadro.mjs out/<proj>/graphics`,
   que é como se chama todo gate irmão — fazia o Chrome abrir a LISTAGEM DE DIRETÓRIO do `file://`. Aquela
   página não tem texto de cena nenhum, então o gate varria zero elementos e imprimia
   "✓ nada cortado, nada invisível" com a mesma confiança de uma aprovação real. Medido no mesmo minuto:
   a pasta dizia PASS enquanto `s31` sozinho acusava DOIS textos cortados ("AMBN · M273V" sangrando 199px
   à direita, "IVPP · ACADEMIA CHINESA DE CIÊNCIA" 218px à esquerda).
   Entrada que o programa não entende tem de ABRIR ou RECUSAR — nunca medir outra coisa e chamar de PASS. */
// [porte Régie] o código acima virou lib/expandir-alvos.mjs (o cabeçalho dela diz que foi extraído
// DESTE gate); aqui ele volta a ser chamado de lá, em vez de ser a cópia.
const arquivos = expandirAlvos(argv.filter((a) => !a.startsWith("--")), "qc-fora-do-quadro");
if (!arquivos.length) { console.error("uso: qc-fora-do-quadro.mjs <html|pasta> [<html> …] [--passo=0.2] [--margem=4] [--json]"); process.exit(2); }

/**
 * CENAS PESADAS PRECISAM CONSEGUIR TROCAR CUSTO POR GRANULARIDADE. O `qc-cena`
 * já aceitava `--passo=0.5` e recomendava essa re-medição no próprio relatório,
 * mas este gate mantinha 0,2 s fixo. Assim, justamente o gate que estourava o
 * teto repetia a mesma quantidade de amostras e voltava a não medir. A opção é
 * explícita e o padrão rigoroso continua 0,2 s.
 */
const PASSO = +opt("passo", "0.2");
if (!Number.isFinite(PASSO) || PASSO <= 0 || PASSO > 1) {
  console.error(`✗ --passo precisa estar entre 0 e 1 s (recebi ${JSON.stringify(opt("passo", ""))})`);
  process.exit(2);
}
const laudos = [];
// mesmo Chrome dos outros gates: o `playwright-core` não traz navegador embutido (REND: sem isto,
// o gate morre com "Executable doesn't exist" em vez de medir)
// [porte Régie] o caminho cravado de Linux/Mac saiu: lib/chrome.mjs acha o Chrome (ou o Edge) do
// Windows pelo motor, e CHROME_PATH que aponta para o nada é NÃO MEDIDO com o conserto (exit 2).
const browser = await lancarChrome();

for (const arq of arquivos) {
  const full = resolve(arq);
  // [porte Régie] O PALCO ANTES DE ABRIR, pela régua do render do motor. O estúdio abria em 1920 e
  // perguntava ao DOM por [data-render="4k-native"] — que não vê `window.__native4k = true`, e a cena
  // declarada assim era medida em 1920 com o palco 4K transbordando (tudo "cortado").
  let textoDoArquivo = null;
  try { textoDoArquivo = readFileSync(full, "utf8"); } catch { /* inexistente: a abertura abaixo falha com o nome */ }
  const PALCO = await palcoDaCena(textoDoArquivo ?? "");
  const ctx = await browser.newContext({ viewport: { width: PALCO.w, height: PALCO.h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  /**
   * ⚠️ ESTE GATE NÃO OUVIA `pageerror` — e página morta mede ✓ (05/ago/2026).
   *
   * Sem elementos no palco não há nada para cortar, então quanto mais quebrada a cena, mais "limpa"
   * ela media. Medido com cena cujo `<script>` morre na 1ª linha (4K totalmente vazio): este gate
   * respondia `✓ nada cortado, nada invisível`, exit 0 — a mesma saída, byte a byte, de uma aprovação
   * genuína. E o `.catch(() => {})` do `goto` fazia HTML que nem carrega chegar aqui em silêncio.
   *
   * As duas classes são diferentes e agora saem por portas diferentes: **erro de JS reprova** (a
   * página está viva e eu a medi), **falha de carregamento é NÃO MEDIDO** (não vi nada).
   */
  const errosJS = [], errosLoad = [];
  page.on("pageerror", (e) => errosJS.push(String(e).replace(/\s+/g, " ").slice(0, 120)));
  // [porte Régie] a abertura é a de lib/abrir-cena.mjs (a mesma dos irmãos): cena de mapa não gasta
  // os 30 s de um `load` que nunca chega, e a espera do mapa (abaixo) passa a ser a dela.
  let aberta = { ehMapa: false, navegouCompleto: false, mapaAssentou: false };
  if (textoDoArquivo === null) errosLoad.push(`não consegui ler ${full}`);
  else aberta = await abrirCenaParaMedir(page, full, { textoDoArquivo })
    .catch((e) => { errosLoad.push(String(e).replace(/\s+/g, " ").slice(0, 100)); return aberta; });
  /**
   * ⚠ ESPERAR O MAPA ASSENTAR ANTES DE MEDIR — faltava aqui, como faltava no `qc-carga`
   * (medido 08/ago/2026; o `check-overlap` já fazia). [ARTE-150]
   *
   * Este gate existe porque "conferir só o frame 0 não pega" o texto que a CÂMERA empurra para
   * fora. Em cena de mapa, medir antes de o mapa assentar é conferir o frame 0 de novo, com outro
   * nome: a câmera está no estado inicial e o overlay inteiro é projetado na posição errada.
   * Media-se uma cena que não vai ao ar — e o erro vai nas duas direções, inventando corte que
   * não existe e escondendo o que existe.
   *
   * Cena sem mapa cai no `Promise.resolve()` e nada muda. Teto de 8 s para não pendurar o gate.
   */
  // [porte Régie] cena de mapa: lib/abrir-cena.mjs já chamou __prepararCaptura e esperou o mapa
  // assentar (com o mesmo teto de 8 s); cena comum recebe o __prepararCaptura aqui, como no estúdio.
  if (!aberta.ehMapa) await page.evaluate(() => window.__prepararCaptura && window.__prepararCaptura()).catch(() => {});
  if (!aberta.ehMapa) await page.evaluate(() => (window.__ready ? Promise.race([window.__ready, new Promise(r => setTimeout(r, 8000))]) : Promise.resolve())).catch(() => {});

  // o palco pode ser 4K nativo (3840×2160) ou legado (1920×1080) — perguntar, não presumir
  // ⚠️ O VIEWPORT TEM DE ACOMPANHAR O PALCO. A cena 4K-nativa centraliza o #stage no BODY
  // (top:50%/left:50%) contando com um viewport 3840×2160; aberta em 1920×1080 ela transborda
  // pra esquerda/topo e TUDO naquela metade vira "cortado"/"nunca entra" — falso alarme puro.
  // Medido em s25-anac-falha-motor: "Fonte … esq 660px" = exatamente o offset de abrir palco
  // 4K em viewport 1080p; nos frames reais o texto está impecável.
  // [porte Régie] por isso o contexto já NASCE no palco (acima), em vez de trocar o viewport depois.
  const VW = PALCO.w, VH = PALCO.h;
  const DUR = await page.evaluate(() => (window.__duracao && isFinite(window.__duracao)) ? window.__duracao : 10).catch(() => 10);

  const cortados = new Map();
  /**
   * ══ AS AMOSTRAS SE CONTAM — senão o gate varre a duração inteira do MESMO quadro (05/ago/2026) ══
   *
   * O `try { … } catch (e) {}` da linha de baixo é VAZIO e não contava nada. Um `__renderAt` que lança
   * em toda chamada é engolido: o laço anda, o DOM nunca muda, e as N amostras são todas o instante
   * zero. Reproduzido na mesma cena, com e sem motor: com o motor VIVO o gate reprova legitimamente
   * por dois textos cortados nascidos de movimento (`"MESOSFERA" dir 65px desde 1.4s`) — a família
   * exata que ele existe para pegar; com o motor MORTO os dois defeitos somem e ele imprime
   * `✓ nada cortado`. O carimbo saiu `ok:false / falhas:["fora-do-quadro"]` para a versão SADIA e
   * `ok:true / falhas:[]` para a quebrada: **o conteúdo com o motor morto era liberado ao render, e o
   * sadio barrado.**
   *
   * E o caminho é alcançável sem nada exótico: este gate e o `qc-carga` são os **dois únicos gates de
   * cena que não chamam `__prepararCaptura()`** — basta o padrão documentado no CLAUDE.md (rig de mapa
   * cujo `__renderAt` depende do estado que o `__prepararCaptura` monta) para o motor morrer só aqui.
   *
   * ⚠️ O `try/catch` FICA. Medido: tirá-lo não muda o veredito (o verde falso vem do `.catch()`
   * externo lá embaixo) e ainda PIORA a medição, porque é ele que preserva a leitura do quadro 0 — o
   * defeito fundador deste gate. O conserto é contar e impor piso, não remover a proteção.
   */
  let esperadas = 0, motorFalhou = 0, colhidas = 0, motorErro = null, textosVistos = 0;
  const foraSempre = {}, entrouAlgumaVez = new Set(), foraOnde = {}, dentroEm = {}, coubeNoClip = new Set();
  const inteiroEm = {};   // txt → primeiro instante em que apareceu INTEIRO no quadro
  for (let t = 0; t <= DUR - SAIDA + 1e-6; t += PASSO) {
    esperadas++;
    const achados = await page.evaluate(async ({ tt, vw, vh, m, seletor }) => {
      // AWAIT obrigatório: __renderAt de cena com <video> é ASYNC (espera o seek antes de
      // desenhar); sem await, os rects saem de um frame DEFASADO do t pedido.
      let motorOk = true, motorMsg = null;
      try { if (window.__renderAt) await window.__renderAt(tt); } catch (e) { motorOk = false; motorMsg = String(e && e.message || e).slice(0, 100); }
      const eff = (el) => { let o = 1, n = el; while (n && n.nodeType === 1) { const s = getComputedStyle(n); if (s.display === "none" || s.visibility === "hidden") return 0; o *= parseFloat(s.opacity || "1"); n = n.parentElement; } return o; };
      const out = [], nuncaVisto = [], vistoAlgumaVez = [], foraPos = [], inteiroNoClip = [], inteiroNaTela = [];
      for (const el of document.querySelectorAll(seletor)) {
        /**
         * ⚠️ O PISO DE OPACIDADE CEGAVA O GATE PARA UM DEFEITO REAL — e foi o revisor por visão
         * que provou, não eu.
         *
         * O piso 0,15 existe por bom motivo: texto desbotado a caminho de sumir não é conteúdo, e
         * medi-lo daria alarme em toda transição. Mas medido em 26/jul, `ataque-agua-bahrein`: a
         * linha "O Ministério do Interior confirmou o ataque" está a **opacidade 0,016** e com a
         * base em 1449 contra 1440 do cartão que a recorta — **9 px estourando**, meia letra
         * comida. O frame renderizado mostra o texto em cinza fantasma, legível o bastante para o
         * espectador ver que ALGO está cortado ali. O gate deu verde porque nunca chegou a medir.
         *
         * A distinção certa não é "quão visível está", é **o que se está perguntando**: para contar
         * carga de leitura, desbotado não conta; para detectar RECORTE, um elemento meio-desenhado
         * é justamente o sintoma (entrada que não completou, ou caixa apertada demais). Então o
         * piso alto vale para a régua de borda-de-tela, e um piso mínimo para a de contêiner.
         */
        const opac = eff(el);
        if (opac <= 0.008) continue;                       // realmente invisível: nem o render mostra
        const soContainer = opac <= 0.15;                  // desbotado: só vale para recorte de caixa
        // só texto PRÓPRIO: um container gigante pode legitimamente exceder o palco
        const proprio = Array.from(el.childNodes).filter((n) => n.nodeType === 3)
          .map((n) => n.textContent).join(" ").trim();
        if (!proprio) continue;
        /**
         * MEDIR O TEXTO, NÃO A CAIXA — o gate estreou com falso positivo por não fazer isso.
         *
         * `getBoundingClientRect()` do elemento devolve a caixa do BLOCO. Um `<div>` centralizado
         * com largura de 100% do palco tem a caixa encostando (ou passando) das duas margens,
         * enquanto o texto dentro dele está confortavelmente no meio da tela. Medido em
         * `nber-instituto-credencial`: o gate acusou "esq 157px · dir 167px" numa cena em que
         * "O ÁRBITRO OFICIAL / DAS RECESSÕES" está inteiro, centralizado e impecável — eu ia
         * mandar um agente consertar o que não estava quebrado.
         *
         * `Range.getBoundingClientRect()` sobre o conteúdo devolve a extensão REAL das letras
         * desenhadas. É a diferença entre "a caixa passa da margem" e "a palavra está cortada".
         */
        let r;
        try {
          const rg = document.createRange();
          rg.selectNodeContents(el);
          r = rg.getBoundingClientRect();
          if (!r || (!r.width && !r.height)) r = el.getBoundingClientRect();
        } catch (e) { try { r = el.getBoundingClientRect(); } catch (e2) { continue; } }
        if (!r || r.width < 3 || r.height < 3) continue;
        /**
         * ⚠️ 100% FORA NÃO É SEMPRE SAÍDA DELIBERADA — e este ponto cego eu mesmo criei hoje.
         *
         * A primeira versão pulava tudo que estivesse inteiramente fora, raciocinando "o elemento se
         * despede". Aí um editor-de-arte achou, em `odessa-porto`, dois cards de dado desenhados em
         * **y=3300 num palco de 2160**: a cena NUNCA mostrou o número que ela existe para mostrar, e o
         * meu gate ficou verde. Elemento que **sai** do quadro é coreografia; elemento que **nunca
         * entra** é conteúdo perdido — e é pior, porque não há nem o rastro de meia palavra na borda.
         *
         * A distinção é temporal, não geométrica: registramos quem está totalmente fora AGORA e, ao
         * final da varredura, acusamos quem esteve fora em **todos** os instantes.
         */
        const foraTotal = r.right <= 0 || r.left >= vw || r.bottom <= 0 || r.top >= vh;
        if (foraTotal) {
          // ⚠️ 100% fora + PARADO não é trânsito: registro a posição para o laço de fora decidir.
          // Ver o bloco "PARADO FORA" no fim do arquivo — sem isto, texto mal posicionado que entra
          // em algum momento escapa de TODAS as três classificações.
          nuncaVisto.push(proprio.slice(0, 34));
          foraPos.push(proprio.slice(0, 34));
          continue;
        }
        vistoAlgumaVez.push(proprio.slice(0, 34));
        /**
         * ⚠️ A BORDA QUE CORTA NEM SEMPRE É A DA TELA — foi o revisor autônomo que me mostrou isso.
         *
         * Medido em 26/jul, `ataque-agua-bahrein`: *"a linha de apoio do clipping nasce CORTADA ao
         * meio pela borda inferior do CARTÃO — só a metade superior das letras aparece"*. O gate deu
         * verde, e com razão pela régua que tinha: o texto estava confortavelmente dentro do
         * viewport. Quem o decepava era o próprio contêiner, com `overflow:hidden`.
         *
         * Um cartão que recorta o texto que ele deveria conter é o mesmo defeito da margem da tela —
         * meia palavra visível, base das letras comida. Então o recorte se mede contra o ANCESTRAL
         * que recorta, quando existe, além do palco.
         *
         * O revisor por visão pegou 21 achados desta família enquanto o gate determinístico via
         * zero. Cada classe que sobe para o gate é inferência que deixa de ser paga para sempre.
         */
        /**
         * ⚠️ ODÔMETRO: o dígito fora da janela é o mecanismo, não conteúdo perdido (07/ago/2026).
         *
         * A peneira do `coubeNoClip` cobre a máscara de REVELAÇÃO (o texto entra e cabe inteiro em
         * algum instante). O contador de rolagem é outro caso: os dez dígitos ficam empilhados e
         * cada um passa pela janela — a maior parte do tempo estão fora dela, de propósito.
         * Medido no `s49-2-milhoes-libras` do `o-acre`: **43 "0" acusados de cortados pelo
         * contêiner**, numa cena impecável.
         *
         * A cena declara `data-qc-rolagem` no contêiner da janela, e a isenção vale só para os
         * descendentes dele — o resto da cena continua sendo medido contra a borda da tela e contra
         * qualquer outro contêiner que recorte.
         */
        let emRolagem = false;
        for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
          if (!n.hasAttribute("data-qc-rolagem")) continue;
          // guarda: no palco/body a declaração desligaria o gate inteiro — não vale
          const id = (n.id || "").toLowerCase();
          if (id === "palco" || id === "stage" || n === document.documentElement) break;
          emRolagem = true; break;
        }
        let clip = null;
        if (!emRolagem) for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
          const cs = getComputedStyle(n);
          if (/hidden|clip|auto|scroll/.test(cs.overflow + cs.overflowX + cs.overflowY)) { clip = n.getBoundingClientRect(); break; }
        }
        if (clip && clip.width > 8 && clip.height > 8) {
          const ladosC = [];
          if (r.left   < clip.left   - m) ladosC.push(`esq ${Math.round(clip.left - r.left)}px`);
          if (r.top    < clip.top    - m) ladosC.push(`topo ${Math.round(clip.top - r.top)}px`);
          if (r.right  > clip.right  + m) ladosC.push(`dir ${Math.round(r.right - clip.right)}px`);
          if (r.bottom > clip.bottom + m) ladosC.push(`baixo ${Math.round(r.bottom - clip.bottom)}px`);
          // só acusa se o texto AINDA aparece parcialmente: sumir inteiro dentro do contêiner é
          // rolagem/coreografia, meia letra é defeito
          const parcial = r.right > clip.left && r.left < clip.right && r.bottom > clip.top && r.top < clip.bottom;
          if (ladosC.length && parcial) out.push({ txt: proprio.slice(0, 34), lados: `pelo contêiner: ${ladosC.join(" · ")}` });
          // ⚠️ Ver a peneira 4 no laço de fora: o instante em que o texto cabe INTEIRO no contêiner
          // é a prova de que a máscara é de revelação, não caixa apertada.
          if (!ladosC.length) inteiroNoClip.push(proprio.slice(0, 34));
        }
        const lados = [];
        if (soContainer) { continue; }   // desbotado não entra na régua de borda-de-tela
        /**
         * ⚠️ SAÍDA LATERAL DECLARADA — a timeline que percorre o tempo (07/ago/2026).
         *
         * O `data-qc-rolagem` acima isenta o corte pelo CONTÊINER (odômetro). Há um segundo
         * mecanismo, sem contêiner nenhum: a faixa que ROLA e empurra os itens antigos para fora
         * **pela borda da tela**. Medido no `s52-timeline-1904-1962` do `o-acre`: uma linha do tempo
         * de 1904→1962 acusada com **20 textos cortados**, numa cena impecável — `"1904" esq 47px`
         * aos 3,8 s, `627px` aos 4,6 s, e some.
         *
         * ⚠️ Tentei resolver isso por REGRA automática (absolver quem esteve inteiro e depois cortou)
         * e **revertí**: ela não distingue "saiu e sumiu" de "desceu 32 px e FICOU cortado", que é o
         * defeito que criou este gate. A declaração é o caminho seguro — quem escreve assume.
         *
         * **A guarda que impede a escapatória:** declarar no `#palco`/`body` NÃO vale. Isentar a cena
         * inteira seria desligar o gate com uma linha, e a isenção existe para um ELEMENTO que rola,
         * não para o quadro todo.
         */
        if (emRolagem) continue;
        if (r.left   < -m)       lados.push(`esq ${Math.round(-r.left)}px`);
        if (r.top    < -m)       lados.push(`topo ${Math.round(-r.top)}px`);
        if (r.right  > vw + m)   lados.push(`dir ${Math.round(r.right - vw)}px`);
        if (r.bottom > vh + m)   lados.push(`baixo ${Math.round(r.bottom - vh)}px`);
        if (lados.length) out.push({ txt: proprio.slice(0, 34), lados: lados.join(" · ") });
        // ⚠️ O IRMÃO DO `inteiroNoClip`, para a BORDA DA TELA (07/ago/2026). Registra o instante em
        // que o texto esteve INTEIRO no quadro — é o que distingue "saindo" de "nasceu decepado".
        else inteiroNaTela.push({ txt: proprio.slice(0, 34), t: tt });
      }
      return { out, nuncaVisto, vistoAlgumaVez, foraPos, inteiroNoClip, inteiroNaTela, motorOk, motorMsg,
        textos: vistoAlgumaVez.length + foraPos.length };
    }, { tt: t, vw: VW, vh: VH, m: MARGEM, seletor: SELETOR_TEXTO })
      // ⚠️ o `null` marca "esta amostra não existiu"; devolver o objeto vazio de antes fazia a amostra
      // perdida contar como "olhei e não achei nada" — a mentira em uma linha.
      .catch(() => null);
    if (!achados) continue;
    colhidas++;
    textosVistos = Math.max(textosVistos, achados.textos || 0);
    if (achados.motorOk === false) { motorFalhou++; motorErro ||= achados.motorMsg; }
    for (const s of (achados.inteiroNoClip || [])) coubeNoClip.add(s);
    for (const x of (achados.inteiroNaTela || [])) if (inteiroEm[x.txt] == null) inteiroEm[x.txt] = x.t;
    for (const s of (achados.nuncaVisto || [])) (foraSempre[s] = (foraSempre[s] || 0) + 1);
    for (const s of (achados.vistoAlgumaVez || [])) entrouAlgumaVez.add(s);
    for (const txt of (achados.foraPos || [])) (foraOnde[txt] = foraOnde[txt] || []).push(+t.toFixed(2));
    for (const s2 of (achados.vistoAlgumaVez || [])) (dentroEm[s2] = dentroEm[s2] || []).push(+t.toFixed(2));
    for (const a of (achados.out || [])) {
      const k = a.txt + "|" + a.lados;
      if (!cortados.has(k)) cortados.set(k, { ...a, t0: +t.toFixed(2), n: 0 });
      cortados.get(k).n++;
    }
  }
  await ctx.close();

  /**
   * ⚠️ DUAS PENEIRAS CONTRA FALSO POSITIVO, ambas nascidas de acusação errada minha em 26/jul.
   * Falso alarme é bug de prioridade alta: um gate que grita em cena impecável ensina a ignorá-lo.
   *
   * 1 · **SÓ NO ÚLTIMO INSTANTE = SAÍDA.** `china-japao-angulo-morto`: "CHINA cortado, esq 333px,
   *     desde 12s" numa cena de 12,3 s. A tolerância `SAIDA` já existia para isso, mas errava por
   *     UMA amostra — o laço parava exatamente em 12,0. Aparecer num único instante, e logo no
   *     último, é a despedida da cena, não defeito. A regra passa a ser temporal (quantas amostras),
   *     não um número mágico maior.
   *
   * 2 · **QUEM SAIU INTEIRO ESTAVA EM TRÂNSITO.** `sp500-aposentadoria-global`: "S&P 500 cortado,
   *     esq 679px". Olhei o frame: é um TRAVELLING horizontal — a câmera corre pela linha do tempo e
   *     os itens saem pela esquerda de propósito. Cortar pela borda enquanto ATRAVESSA é o gesto;
   *     ficar cortado é o defeito. Distinção medida, não opinada: se o mesmo texto aparece em algum
   *     instante 100% fora do quadro, ele estava viajando — e a acusação de corte parcial cai.
   *     O caso que criou este gate (rótulos com a base comida pela margem, parados) não some: eles
   *     nunca saem inteiros, então continuam acusados.
   *
   * 4 · **MÁSCARA DE REVELAÇÃO NÃO É CAIXA APERTADA** (03/ago, `paises-baixos-mar` s01 — a ABERTURA
   *     do vídeo). O gate acusou 4 textos e barrou a cena no `_portao.json`; olhando os frames, os
   *     quatro estavam impecáveis. Duas famílias, o mesmo buraco:
   *       · o título "VIVER ABAIXO DO MAR" mora num `#tituloClip` de `overflow:hidden` e SOBE para
   *         dentro dele (top 1000→630 entre 15,3 s e 16,35 s). O gate mediu no meio da subida
   *         ("baixo 213px", "baixo 41px") — que é exatamente o gesto, não o defeito;
   *       · "+8" e "+4" são números de uma FITA DE ALTÍMETRO, que por definição rola atrás de uma
   *         janela recortada. Cortes de 18 e 29 px, com o número perfeitamente legível no frame.
   *
   *     A peneira 2 não pegava nenhum dos dois porque ela pergunta se o texto saiu do PALCO — e
   *     texto recortado por contêiner nunca sai do palco, ele fica ali, mascarado. Faltava o mesmo
   *     raciocínio aplicado à régua do contêiner: **se em algum instante o texto coube INTEIRO
   *     dentro do contêiner que o recorta, a máscara é de revelação (ou o instrumento está rolando)
   *     e o corte era trânsito.** O defeito que criou esta régua (`ataque-agua-bahrein`: a linha de
   *     apoio nasce decepada pelo cartão e assim permanece) continua acusado — ela nunca cabe.
   */
  const transitou = new Set(Object.keys(foraSempre));
  const lista = [...cortados.values()]
    .filter((c) => !(c.n <= 1 && c.t0 >= DUR - SAIDA - PASSO - 1e-6))   // só na despedida
    /**
     * ⚠️ TRANSITAR EXIGE TER ESTADO DENTRO — a peneira 2 absolvia quem NUNCA coube (11/ago/2026).
     *
     * `transitou` pergunta só se o texto chegou a ficar 100% fora em algum instante. Isso basta
     * para o travelling que ela nasceu para absolver (o item atravessa e sai), mas absolve também
     * o oposto exato: o texto que nasce decepado pela borda, fica assim a cena inteira e no último
     * segundo é empurrado de vez para fora. Sair não prova trânsito; sair DEPOIS de ter estado
     * inteiro é que prova.
     *
     * Medido no `clinopiroxenio-onde-existe` do `planeta-em-meteorito`: os dois créditos de rodapé
     * moravam DENTRO do `#cam` em `top:2078`. Com o zoom-base 1,022 da câmera já nascem com a base
     * comida (bottom 2194 num palco de 2160) e, no push-in final (1,0994), saem inteiros — o que
     * fazia esta linha perdoar retroativamente os 14,5s de crédito cortado. A cena passava com
     * `72/72 amostras` enquanto a atribuição CC BY-SA estava ilegível na tela.
     *
     * O irmão desta prova já existia e nunca tinha sido consultado: o `inteiroEm` é gravado desde
     * 07/ago com o comentário "é o que distingue 'saindo' de 'nasceu decepado'" — computado a cada
     * amostra e lido por ninguém. A peneira 4 (contêiner) sempre exigiu a condição simétrica
     * (`coubeNoClip`); a da borda de tela só tinha metade.
     */
    .filter((c) => !(transitou.has(c.txt) && inteiroEm[c.txt] != null))  // atravessou o quadro DE VERDADE
    .filter((c) => !(String(c.lados).startsWith("pelo contêiner") && coubeNoClip.has(c.txt)))
    .sort((a, b) => a.t0 - b.t0);
  // nunca entrou no quadro em NENHUM instante: conteúdo perdido, não coreografia de saída
  const invisiveis = Object.keys(foraSempre).filter((s) => !entrouAlgumaVez.has(s));
  /**
   * 3 · NASCEU FORA — o ponto cego que a exceção de trânsito abriu (26/jul).
   *
   * A regra 2 acima derruba a acusação de corte para todo texto que em algum instante esteve 100%
   * fora ("estava viajando"). Um `editor-de-arte` provou que isso esconde um defeito pior. Em
   * `s41-excursao-pista`, o chip tinha `left:1548` num palco de 3840 e ia até **4087px**: a placa
   * lia **"2021 — 20"** durante os 2 s em que fica PARADA. O "2024" estava 100% fora, então (a) não
   * era "cortado" — estava inteiro fora; (b) não era "invisível" — ele entra depois, quando o chip
   * voa. Escapava das três classificações, e o gate dava verde numa cena com meia placa perdida.
   *
   * A distinção não é geométrica nem de duração, é de ORDEM: quem **sai** do quadro está fora DEPOIS
   * de ter aparecido (despedida, legítimo). Quem **nasce** fora está fora ANTES de aparecer — e
   * enquanto isso o espectador vê o vizinho cortado, sem entender por quê.
   *
   * O limiar de 1 s existe contra falso positivo: entrada que começa deslizando de fora do quadro é
   * gesto comum e dura frações de segundo.
   */
  const nasceuFora = Object.keys(foraOnde).filter((s) => {
    const dentro = dentroEm[s];
    if (!dentro || !dentro.length) return false;              // nunca entrou → já é `invisiveis`
    const primeiroFora = Math.min(...foraOnde[s]);
    const primeiroDentro = Math.min(...dentro);
    return primeiroFora < primeiroDentro - 1.0;               // fora por >1s ANTES de existir na tela
  });
  // O TERCEIRO ESTADO (ver os dois blocos acima): página que não carregou ou motor morto = NÃO MEDIDO.
  // Piso folgado — metade das amostras esperadas — porque a falha real é binária (0/221 contra 221/221).
  const validas = colhidas - motorFalhou;
  const PISO_AMOSTRAS = Math.max(1, Math.ceil(esperadas * 0.5));
  // [porte Régie] a trava do verde vazio (lib/abrir-cena.mjs): página que não fechou a navegação e
  // não mostrou texto nenhum não se distingue de página que não abriu — é NÃO MEDIDO, nunca ✓.
  const abriuComCerteza = aberta.navegouCompleto || aberta.mapaAssentou;
  const naoMedido = errosLoad.length
    ? `a página não carregou — ${errosLoad[0]}`
    : validas < PISO_AMOSTRAS
      ? `motor de animação morto: só ${validas} de ${esperadas} amostras válidas (piso ${PISO_AMOSTRAS})${motorErro ? ` — __renderAt lança "${motorErro}"` : ""}`
      : !abriuComCerteza && !textosVistos
        ? "a navegação não fechou e nenhum texto apareceu — não dá para separar cena sem texto de cena que não abriu"
        : null;
  laudos.push({ arq: basename(arq), palco: VW, dur: DUR, cortados: lista, invisiveis, nasceuFora, errosJS, errosLoad, esperadas, validas, textos: textosVistos, naoMedido });
  if (!JSON_OUT) {
    if (naoMedido) console.log(`⚠ ${basename(arq)} · NÃO MEDIDO — ${naoMedido}`);
    if (errosJS.length) console.log(`✗ ${basename(arq)} · a cena tem erro de JS — ${errosJS[0]}${errosJS.length > 1 ? ` (+${errosJS.length - 1})` : ""}`);
    if (invisiveis.length) {
      console.log(`✗ ${basename(arq)} · ${invisiveis.length} texto(s) NUNCA entram no quadro — conteúdo perdido:`);
      for (const s of invisiveis.slice(0, 8)) console.log(`    "${s}"`);
    }
    if (lista.length) {
      console.log(`✗ ${basename(arq)} · palco ${VW} · ${lista.length} texto(s) cortado(s) pela borda:`);
      for (const c of lista) console.log(`    "${c.txt}"  ${c.lados}  (desde ${c.t0}s)`);
    }
    if (nasceuFora.length) {
      console.log(`✗ ${basename(arq)} · ${nasceuFora.length} texto(s) NASCEM fora do quadro (>1s antes de aparecer) — o vizinho fica cortado e ninguém entende por quê:`);
      for (const s of nasceuFora.slice(0, 8)) console.log(`    "${s}"`);
    }
    if (!lista.length && !invisiveis.length && !nasceuFora.length && !naoMedido && !errosJS.length)
      // [porte Régie] o verde diz quanto viu: "nada cortado" sobre ZERO texto é verdade vazia
      console.log(`✓ ${basename(arq)} — nada cortado, nada invisível (${textosVistos} texto(s) · ${validas}/${esperadas} amostras)`);
  }
}
await browser.close();

if (JSON_OUT) { console.log(JSON.stringify(laudos, null, 1)); }
else {
  const ruins = laudos.filter((l) => l.cortados.length);
  if (ruins.length) {
    console.log(`\n  ${ruins.length}/${laudos.length} cena(s) com texto cortado.`);
    console.log(`  A causa costuma ser MOVIMENTO: um push-in empurra para fora o que estava perto da margem.`);
    console.log(`  Conferir só o frame 0 não pega — por isso este gate varre a duração inteira.`);
    // [porte Régie] o conserto, no lugar de quem lê: o probe-elemento diz a caixa de um id num instante
    console.log(`  Para ver a caixa de um texto num instante: node scripts/probe-elemento.mjs <html> <t> --ids=<id>\n`);
  }
}
// 1 = medi e reprovei · 2 = NÃO MEDI · 0 = medi e passou. Reprovação medida tem precedência: ela é
// acionável agora, enquanto o não-medido só pede outra passada.
const reprova = (l) => !l.naoMedido && (l.cortados.length || (l.invisiveis && l.invisiveis.length)
  || (l.nasceuFora && l.nasceuFora.length) || (l.errosJS && l.errosJS.length));
process.exitCode = laudos.some(reprova) ? 1 : laudos.some((l) => l.naoMedido) ? 2 : 0;
