// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-carga.mjs (linhas 1-663, commit 4afda12).
// O que mudou: só o Chrome — vem de lib/chrome.mjs (o instalado, sem caminho do Mac/Linux cravado,
// com a flag que deixa a fonte da marca carregar por file://). Os tetos (9 textos, 77 info, 0,9/s,
// janela 4, vida 0,5 s) são OFÍCIO calibrado nas 28 cenas douradas do Top10 e ficam como estão.
// Na integração da v1: o palco 4K vem da régua do render do motor (lib/abrir-cena.mjs › palcoDaCena): aspas simples e window.__native4k contam.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core (^1.60.0), carregado sob demanda por lib/chrome.mjs.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// GATE DE CARGA VISUAL — quanta informação a cena joga no espectador, e com que pressa.
// Uso: node scripts/qc-carga.mjs <html> [<html> …] [--passo=0.1] [--op=0.25] [--estreias] [--json]
//                                [--max-texto=9] [--max-info=77] [--max-entradas=13] [--min-vida=0.8]
//
// POR QUE ELE EXISTE (feedback do Mateus, 24/jul, sobre o `compilado-previsoes-jiang`):
//   "tem várias animações que ficaram MUITO rápidas, que é algo que eu NÃO gosto"
//   "tiveram várias que ficaram POLUÍDAS, com muita informação ao mesmo tempo, o espectador
//    fica cansado/sobrecarregado com muita informação, quando deveria ser o essencial"
//
// ⚰️ ELE É O DONO ÚNICO DA DENSIDADE DESDE 24/jul (ARTE-59). O gate anterior, `guard-rail.mjs`
// (teto 3), foi aposentado para `arquivo-morto/2026-07-guard-rail/` por decisão do Mateus: contava
// `.lbl,#hero` — só o que o autor LEMBROU de marcar. Regra que depende de alguém lembrar é regra
// morta, e isso foi MEDIDO: em `ascensao-anti-imigracao-europa` ele imprimiu "PICO: 3 ✓" enquanto o
// frame real tinha 26 blocos de texto e 140 elementos gráficos na tela ao mesmo tempo. E errava para
// o outro lado também, reprovando cena correta cujos "rótulos" eram legenda de eixo de gráfico.
// Aqui nada é auto-declarado: conta-se TODO elemento de informação visível, marcado ou não.
//
// O QUE É "ELEMENTO DE INFORMAÇÃO"
//   • TEXTO   — nó folha com texto de verdade (o pai que só embrulha filhos não conta duas vezes);
//   • GRÁFICO — img/svg-shape/canvas/video com área ≥ 1/2500 do palco (~0,04%). O corte de área
//     existe pra partícula, poeira, starfield e grão NÃO contarem como informação: eles são
//     textura, não conteúdo — e a doutrina PEDE que eles existam ("nada congela").
//   • O motor de mapa (maplibre) cria e destrói <canvas> de tile a cada frame. Isso é churn do
//     MOTOR, não beat de informação: a subárvore do mapa entra na conta só pelo que tem texto.
//     Sem esse filtro a métrica mede o mapa, não a cena (medido: 294 "eventos/s" que eram tiles).
//
// AS TRÊS MEDIDAS
//   1. DENSIDADE  — pico de elementos simultâneos (texto, e texto+gráfico).
//   2. RITMO      — entradas de informação por segundo (média e a PIOR janela de 1 s).
//   3. VIDA       — o menor tempo que um bloco de TEXTO fica no ar. Só texto: gráfico pode
//      piscar (faísca, flash), texto tem que dar pra LER. Contado POR ELEMENTO, não por string —
//      senão um count-up (mesmo elemento, dígito mudando) apareceria como "texto que pisca 0,1 s".
//
// DE ONDE VÊM OS TETOS (calibração empírica, 24/jul — não são números inventados).
// Medi as 28 cenas DOURADAS (`seed/examples/dourados/`, a régua que o Mateus aprovou) e as 76 do
// `compilado-previsoes-jiang` (as que ele reprovou), com a MESMA métrica. O teto de cada medida é
// o MÁXIMO observado num dourado — assim, por construção, **nenhuma cena aprovada reprova**
// (alarme falso é bug de prioridade alta), e ainda assim o gate pega metade do lote reprovado:
//
//   medida                mediana dourado   máx dourado (=TETO)   reprova do lote jiang
//   pico de TEXTOS               4                  9                   17/76  (22%)
//   pico INFO (txt+gráfico)     18                 77                    3/76  ( 4%)
//   estreias de texto/s       0,32               0,86                   36/76  (47%)
//   pior janela de 1 s           2                  4                   19/76  (25%)
//   vida mín. do texto (piso)  2,1 s              0,7 s (o menor)        1/76
//
// O teto NÃO é o alvo: a MEDIANA é. Uma cena que encosta em 9 blocos de texto está no extremo do
// que já foi aceito uma vez, não no bom. Densidade é orçamento, e o essencial cabe em 4.
//
// ⚠️ NÚMEROS ANTERIORES DESTE CABEÇALHO ESTAVAM ERRADOS, e o erro vale registrar: a 1ª calibração
// deu "12,2 entradas/s num dourado" porque a identidade do elemento vinha de um id de DOM. A cena
// de mapa RECRIA os <text> a cada frame, então todo frame parecia trazer elementos novos — a
// métrica estava medindo a técnica de desenho, não o ritmo. Com a chave por conteúdo mascarado o
// número real é ~0,3/s. Métrica contaminada mente com a mesma confiança de uma métrica boa.
import { pathToFileURL } from "node:url";
import { resolve, basename } from "node:path";
import { readFileSync } from "node:fs";
import { expandirAlvos } from "./lib/expandir-alvos.mjs";
import { SELETOR_TUDO, TAGS_GRAFICO } from "./lib/tags-texto.mjs";
import { morrerComoNaoMedido } from "./lib/nao-medido.mjs";
import { abrirCenaParaMedir, palcoDaCena } from "./lib/abrir-cena.mjs";
import { lancarChrome } from "./lib/chrome.mjs";   // [porte Régie] o Chrome instalado, pelo lançador único

// CRASH NÃO É REPROVAÇÃO — sem isto, o Chrome que não sobe sai 1 e vira "medi e reprovei".
// É o caso REAL do `el-nino` na VM sem GPU (ver `lib/nao-medido.mjs`).
morrerComoNaoMedido("qc-carga");

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(`--${n}`);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.split("=")[1] : d; };
// expandirAlvos: pasta vira a lista de .html. Sem isto, `qc-carga out/<proj>/graphics` media o
// índice de arquivos do Chrome e reprovava (exit 1) com "DENSIDADE: 57 blocos de texto
// simultâneos @0s" — os 57 eram os NOMES DOS ARQUIVOS da listagem, não texto de cena nenhuma.
const arquivos = expandirAlvos(argv.filter((a) => !a.startsWith("--")), "qc-carga");
if (!arquivos.length) { console.error("uso: qc-carga.mjs <html> [<html> …] [--max-texto=9] [--max-info=77] [--max-entradas=13] [--min-vida=0.8] [--json]"); process.exit(2); }

const PASSO = parseFloat(opt("passo", "0.1"));
const OP = parseFloat(opt("op", "0.25"));
const JSON_OUT = flag("json");
// Tetos = máximo observado nos dourados (ver cabeçalho). `max-entradas` arredonda 0,86 → 0,9 e
// `min-vida` desce de 0,7 (a menor vida num dourado) → 0,5: a folga é de propósito, pra o gate
// nunca reprovar por arredondamento de amostragem.
const MAX_TEXTO = parseInt(opt("max-texto", "9"), 10);
const MAX_INFO = parseInt(opt("max-info", "77"), 10);
const MAX_ENTRADAS = parseFloat(opt("max-entradas", "0.9"));
const MAX_JANELA = parseInt(opt("max-janela", "4"), 10);
const MIN_VIDA = parseFloat(opt("min-vida", "0.5"));

const browser = await lancarChrome();   // [porte Régie] falha aqui = NÃO MEDIDO (morrerComoNaoMedido acima)
const laudos = [];

for (const arq of arquivos) {
  let VW = 1920, VH = 1080, src = "";
  try { src = readFileSync(resolve(arq), "utf8"); } catch (e) {}
  // [porte Régie] 4K pela régua do render do motor (aspas simples e __native4k contam) — lib/abrir-cena.mjs
  ({ w: VW, h: VH } = await palcoDaCena(src));
  const ctx = await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  /**
   * ⚠️ OS DOIS ERROS SÃO CLASSES DIFERENTES, E MISTURÁ-LOS ERA METADE DO DEFEITO (05/ago/2026).
   *
   * `pageerror` é o JS da cena estourando — a página está VIVA e eu a MEDI: é veredito de conteúdo.
   * `LOAD` é a página não ter carregado — aí eu não medi nada, e dizer "reprovou" seria mentir do
   * outro lado. Antes os dois caíam no mesmo array `erros`, que era guardado, impresso e **nunca
   * julgado**: o veredito olhava só os tetos de densidade/ritmo/vida.
   *
   * A consequência é aritmética e perversa: **página morta tem zero elementos, logo zero falhas de
   * teto — quanto mais quebrada a cena, mais "limpa" ela mede.** Medido com cena cujo `<script>`
   * morre na 1ª linha (4K totalmente vazio): este gate imprimia `⚠ PAGEERROR: SyntaxError…` e **na
   * linha seguinte** `✓ dentro dos tetos`, exit 0. O caminho do LOAD era pior ainda: um HTML
   * inexistente devolvia `⚠ PAGEERROR: LOAD:…ERR_FILE_NOT_FOUND` + `✓ dentro dos tetos` e ainda
   * contava "3 textos", que eram o texto da página de erro do Chrome.
   *
   * Isto é o gêmeo exato do bug que o `check-overlap.mjs:18-20` documenta ter consertado ("verde por
   * não ter visto nada"). E promover `pageerror` a veredito não gera alarme falso: pela régua de
   * calibração deste próprio arquivo, as 28 cenas douradas medem `erros: []` — 28 de 28.
   */
  const errosJS = [], errosLoad = [];
  page.on("pageerror", (e) => errosJS.push(String(e).replace(/\s+/g, " ").slice(0, 120)));
  await page.addInitScript(() => { window.__PREVIEW = false; window.__QCID = 0; try { HTMLMediaElement.prototype.play = () => Promise.resolve(); } catch (e) {} });
  try {
    /**
     * ⚠ MESMO CONSERTO DO `qc-tamanho.mjs` — cena de mapa nunca chega a `load`, e desistir de medir
     * por isso é o gate genérico aplicado ao objeto errado. O palco do mapista fica puxando tile do
     * MapTiler enquanto a página viver; `load` não chega, o `goto` estoura os 30 s, e o gate devolve
     * NÃO MEDIDO — que no portão tem o mesmo peso de uma falha e **não libera render**.
     *
     * Medido em 11/set/2026 (`terremotos-america-do-sul/t-s125`): `consertar-cenas` fechou
     * `1 pronto · 1 regrediu`, e a "regressão" era este timeout numa cena que um agente pago
     * acabara de consertar. **É a FAMÍLIA que precisa do conserto, não o item que o aviso denunciou**
     * ([SIS-429]): `qc-tamanho` e `qc-carga` faziam a mesma navegação e morriam do mesmo jeito.
     *
     * Passados os 30 s o DOM está parseado há muito tempo — o que falta é rede de tile, e a espera
     * de mapa logo abaixo (`__aguardarMapa`, teto de 8 s) é exatamente quem cuida disso. O timeout
     * deixa de ser veredito e vira condição registrada.
     *
     * ⛔ Sem afrouxar nada: este gate já promove `pageerror` a veredito, e o `errosLoad` abaixo
     * continua valendo. Navegação incompleta que também não produza medição nenhuma segue caindo no
     * `catch` de fora, como sempre.
     */
    /**
     * ⬆️ O BLOCO ACIMA DESCREVE O CONSERTO DA ONDA 2, E ELE CONTINUA VALENDO — só deixou de morar
     * aqui. A navegação + a espera do mapa saíram para `lib/abrir-cena.mjs`, porque esta mesma
     * sequência estava escrita TRÊS vezes (aqui, no `qc-fora-do-quadro.mjs:115` e nos probes), com
     * tetos e ordens ligeiramente diferentes — e regra copiada diverge até o mesmo defeito passar
     * por todas as cópias, cada uma pelo furo que a outra não tem.
     *
     * ⏱️ E o caminho ficou mais BARATO, que é o ponto desta onda: em cena de mapa não se tenta mais
     * o `load` para depois cair no fallback. Tentar custava os 30 s inteiros do `goto` em TODA cena
     * de mapa, e são esses 30 s por gate que estouram o `QC_TIMEOUT_MS` de 3 min e devolvem o
     * `NÃO MEDIDO` pela outra porta. A `t-s125` só fechou o portão, em 11/set, com
     * `QC_TIMEOUT_MS=900000`. **Dar mais paciência ao relógio não é o conserto.**
     */
    const aberta = await abrirCenaParaMedir(page, arq, { pausaMs: 0, textoDoArquivo: src || null });
    if (!aberta.navegouCompleto && !aberta.ehMapa) await page.waitForTimeout(1200);
  } catch (e) { errosLoad.push(String(e).replace(/\s+/g, " ").slice(0, 100)); }
  const DUR = await page.evaluate(() => (window.__duracao && isFinite(window.__duracao)) ? window.__duracao : 10).catch(() => 10);

  /**
   * ══ O MOTOR DE ANIMAÇÃO PODE ESTAR MORTO, E O LAÇO NÃO SABIA (05/ago/2026) ══
   *
   * Este `for` anuncia que varre a duração inteira. A chamada que faz o tempo andar vive dentro de um
   * `try { … } catch (e) {}` VAZIO e SEM CONTADOR: um `__renderAt` que lança em toda chamada é
   * engolido, o laço continua, o DOM nunca muda, e as N amostras são **todas o mesmo instante**.
   *
   * Sonda no laço exato, com cena dourada real: motor VIVO → 0/221 chamadas lançaram, **138 estados
   * distintos de DOM**; motor MORTO → 221/221 lançaram, **1 estado distinto**, 221 amostras idênticas
   * à de t=0. E o `pageerror` acima não salva: exceção capturada dentro do `page.evaluate` não vira
   * `pageerror`, então não há sequer o sinal fraco.
   *
   * ⚠️ TIRAR O `try/catch` SERIA PIOR, e isso foi medido: o verde falso não vem dele (vem do
   * `.catch(() => null)` externo), e sem ele se perde a leitura do quadro 0 — o defeito fundador do
   * `qc-fora-do-quadro`. O conserto certo é **contar as amostras válidas e impor um piso**: zero
   * amostras válidas, ou menos que o piso, é *indefinido* — nunca `✓`.
   *
   * O piso é metade das amostras esperadas, de propósito folgado: a falha real é binária (a mesma
   * função chamada com t diferente lança sempre ou nunca — 0/221 contra 221/221), então metade
   * separa os dois mundos com margem enorme e não morde cena em que um único quadro tropeça.
   * Cena SEM `__renderAt` (estática) não entra nessa conta: nada lança, tudo é válido.
   */
  const amostras = [];
  let esperadas = 0, motorFalhou = 0, motorErro = null;
  for (let t = 0; t <= DUR + 1e-6; t += PASSO) {
    esperadas++;
    const s = await page.evaluate(async ({ tt, op, vw, vh, seletor, tagsGrafico }) => {
      // AWAIT obrigatório: em cena com <video>, __renderAt é ASYNC (espera o seek de cada clipe
      // antes de desenhar). Sem await, o DOM amostrado fica DEFASADO do t pedido e as métricas
      // saem embaralhadas — medido em s25-anac-falha-motor: "2021"=0,4s no laudo com 6,4s reais
      // no ar, e 7 "entradas" @28,2s que eram flicker de amostragem, não estreias.
      let motorOk = true, motorMsg = null;
      try { if (window.__renderAt) await window.__renderAt(tt); } catch (e) { motorOk = false; motorMsg = String(e && e.message || e).slice(0, 100); }
      const eff = (el) => { let o = 1, n = el; while (n && n.nodeType === 1) { const s = getComputedStyle(n); if (s.display === "none" || s.visibility === "hidden") return 0; o *= parseFloat(s.opacity || "1"); n = n.parentElement; } return o; };
      // CHAVE DE IDENTIDADE DO TEXTO — nem id de DOM, nem string crua.
      // • id de DOM não serve: a cena de mapa RECRIA os <text> a cada frame (o `__renderAt`
      //   limpa o grupo e redesenha). Com id de DOM todo frame vira "elemento novo" e a métrica
      //   mede a técnica de desenho, não o ritmo — foi assim que 8 cenas de mapa apareceram com
      //   "texto no ar 0,1 s" e ~90 entradas/s, que era artefato, não defeito.
      // • string crua não serve: um count-up muda de dígito a cada frame e viraria um texto novo
      //   por frame. Mascarar os dígitos resolve os dois: "44 Mt" e "43 Mt" são o MESMO bloco.
      // Máscara: TODO número vira um "#" só — inclusive separador e casas decimais. Um count-up
      // que passa de "44" para "4.375" tem de continuar sendo o MESMO bloco; mascarar dígito a
      // dígito não bastava (as duas viravam chaves diferentes, "##" e "#.###", e o count-up
      // reaparecia como texto piscando — falso-positivo pego num dourado, `fisica-reentrada`).
      // • px EXATO de font-size não serve — TERCEIRA PORTA DA MESMA FAMÍLIA (22/ago, [ARTE-302]).
      //   O tamanho entra na chave para separar HIERARQUIA (o mesmo "2024" como herói de 400px e
      //   como rótulo de 60px são dois blocos). Mas rótulo que ESCALA junto com a câmera muda de px
      //   a cada frame, e com px exato cada frame virava um bloco novo: a `s30` do `viagem-no-tempo`
      //   tem UM "600 m" no ar por 11,9 s ininterruptos (opacidade nunca zera, provado por sonda) e
      //   o gate leu 19 chaves — reportando "17 blocos abaixo de 0,5 s" e "11 entradas na janela de
      //   1 s @12,4 s", que são exatamente os 19 valores de px da varredura 150→104 e os 11 do
      //   trecho mais rápido dela. O frame em 12,8 s mostra UM rótulo.
      // A banda LOGARÍTMICA resolve os dois lados: absorve a animação de escala (150 e 104 caem na
      // mesma oitava) e continua separando hierarquia de verdade (104 vs 400 = bandas 7 e 9).
      // Medir por px era medir a técnica de desenho, não a carga — como no mapa e no count-up.
      const banda = (fs) => Math.round(Math.log2(Math.max(1, fs)));
      const chaveTexto = (txt, fs) => "T|" + txt.replace(/[\d]+([.,][\d]+)*/g, "#") + "|b" + banda(fs);
      const id = (el) => { let v = el.getAttribute("data-qc-carga-id"); if (!v) { v = String(++window.__QCID); el.setAttribute("data-qc-carga-id", v); } return v; };
      const AREA_MIN = (vw * vh) / 2500;
      const noMapa = (el) => !!(el.closest && el.closest(".maplibregl-map,.mapboxgl-map,#map,#mapa"));
      // `grupos` serve às DUAS réguas de agrupamento (rolagem l.~262 e letra-no-rolo l.~311).
      // ⚠️ Ficou sem declaração da escrita da régua (08/ago) até 11/ago/2026: qualquer cena com
      // `data-qc-rolagem` fazia o evaluate INTEIRO lançar ReferenceError nas N amostras, o
      // `.catch(() => null)` externo engolia, e o laudo saía "0/N amostras — motor de animação
      // morto" SEM o sufixo `__renderAt lança "…"` — o motor estava vivo; morta estava a medição.
      // (Achado pela s46 do dentro-do-sol, cujo shot.mjs rendia normal enquanto este gate dava 0/25.)
      const textos = [], graficos = [], grupos = []; let ornamentos = 0;
      // ⚠️ A LISTA DE TAGS NÃO MORA MAIS AQUI — `scripts/lib/tags-texto.mjs` é o dono único.
      // Ela estava copiada em dois gates e eles divergiram: consertei `b,strong,i,em` neste e o
      // `qc-pais-bandeira` seguiu cego no mesmo dia. O mecanismo da cegueira é traiçoeiro — um pai
      // com filho `<b>` é descartado como "embrulho" (a regra anti-dupla-contagem) e o `<b>` nunca
      // é visitado, então **texto em ênfase dentro de linha mista sumia das duas pontas**. Medido:
      // 3 blocos contados numa tela com 5; com `<small>` incluído, 11 numa tela com 14.
      for (const el of document.querySelectorAll(seletor)) {
        if (eff(el) <= op) continue;
        let r; try { r = el.getBoundingClientRect(); } catch (e) { continue; }
        if (r.width < 3 || r.height < 3 || r.right < 0 || r.left > vw || r.bottom < 0 || r.top > vh) continue;
        const txt = (el.innerText || el.textContent || "").trim().replace(/\s+/g, " ");
        const embrulho = Array.from(el.children).some((c) => (c.textContent || "").trim().length > 0);

        /**
         * PSEUDO-ELEMENTO É TEXTO NA TELA E NÃO ESTÁ NO DOM (achado do editor-de-arte, 25/jul).
         *
         * `content: "MAIS CARO"` num `::after` desenha uma palavra que o espectador lê, mas
         * `innerText` não a conhece — ela não é nó do documento. Terceira variante do MESMO defeito
         * que já custou dois consertos hoje (`b/strong` invisíveis, depois `small`): o gate media
         * menos do que a tela mostra, e as cenas passavam parecendo mais leves do que são.
         *
         * Custa duas chamadas de `getComputedStyle` por elemento — barato perto de medir errado.
         * A `content` vem entre aspas na CSSOM; `none`/`normal`/vazio significam "não desenha nada",
         * e um `content` de imagem (url/gradient) não é texto e fica de fora.
         */
        for (const pseudo of ["::before", "::after"]) {
          let c; try { c = getComputedStyle(el, pseudo).content; } catch (e) { continue; }
          if (!c || c === "none" || c === "normal" || c === '""' || c === "''") continue;
          if (/^(url|linear-gradient|image|-webkit)/i.test(c)) continue;   // imagem, não texto
          const t2 = c.replace(/^["']|["']$/g, "").trim().replace(/\s+/g, " ");
          if (!t2 || t2.length > 200) continue;
          const fs2 = parseFloat(getComputedStyle(el, pseudo).fontSize) || 0;
          textos.push({ k: chaveTexto(t2, fs2), txt: t2.slice(0, 40) });
        }

        if (txt && !embrulho && txt.length < 200) {
          const fs = parseFloat(getComputedStyle(el).fontSize) || 0;

          /**
           * JANELA DE ROLAGEM — o QUARTO disfarce do mesmo bloco (07/ago/2026, `s49-2-milhoes-libras`
           * do `o-acre`). Os outros três (count-up, palavra em `<span>`, typewriter) já estão logo
           * abaixo; este entrou pela porta que eles deixaram aberta.
           *
           * Um odômetro é uma janela com `overflow:hidden` e os dez dígitos empilhados girando por
           * `transform`. A `chaveTexto` é baseada em CONTEÚDO — tem de ser, porque a cena de mapa
           * recria os nós a cada frame —, e o conteúdo agregado do rolo MUDA a cada amostra conforme
           * ele gira. Resultado: cada giro é lido como um bloco de texto estreando e morrendo.
           *
           * O laudo se contradizia igual ao caso do typewriter, e é a contradição que prova:
           *   densidade: 7 textos simultâneos (teto 9)      ← o palco está calmo
           *   ritmo:     1.94 entradas/s (teto 0.9)         ← ~40 estreias… das mesmas 7 casas
           *   vida:      menor texto no ar 0.1s (piso 0.5)  ← "£ 0 1 . 0 1 7 8 …"=0,1s
           *
           * A peneira do typewriter não alcança: ela exige que um texto seja PREFIXO ESTRITO do
           * outro, e a sequência de um rolo é permutação, não prefixo.
           *
           * Não é escapatória automática — a cena DECLARA `data-qc-rolagem` no contêiner da janela,
           * exatamente como já fazia para o `check-overlap` e o `qc-fora-do-quadro`, que ganharam
           * esta mesma régua hoje. Este era o terceiro gate da família e o único que ainda não a
           * conhecia; s49 declarava a marca e continuava reprovada só aqui.
           *
           * A chave passa a ser a IDENTIDADE do instrumento, não o que ele mostra: um odômetro é UM
           * bloco de leitura (o espectador lê um número), estável do começo ao fim. Agrupa pelos
           * IRMÃOS declarados — as casas de um mesmo número vivem lado a lado sob o mesmo pai —,
           * senão 7 casas contariam 7 estreias no mesmo instante e a pior janela de 1 s reprovaria
           * de novo, pelo motivo errado.
           */
          const rol = el.closest("[data-qc-rolagem]");
          if (rol) {
            const grupo = rol.parentElement || rol;
            let idx = grupos.indexOf(grupo);
            if (idx < 0) { grupos.push(grupo); idx = grupos.length - 1; }
            textos.push({ k: "rolagem|" + idx, txt: txt.slice(0, 40), rolagem: true });
            continue;
          }

          /**
           * LETRA SOLTA NÃO É BLOCO DE TEXTO — e contar assim é SUPERMEDIR (25/jul).
           *
           * Animar palavra letra a letra é técnica normal: cada caractere vira um `<span>` para
           * poder entrar/sair sozinho. O gate lia cada `<span>` como um bloco e reportava "9 blocos
           * de texto estreando no mesmo segundo" numa cena em que a tela mostra **uma palavra**.
           * Foi assim que `s13-antigos-nao-pensavam` apareceu com janela 9: eram as 9 letras de
           * "GAY"+"HÉTERO", não 9 informações.
           *
           * ⚠️ É o defeito ESPELHO dos três pontos cegos consertados hoje (`b/strong`, `small`,
           * pseudo-elementos): lá o gate media a MENOS, aqui media a MAIS. Os dois enganam igual —
           * um deixa passar caos, o outro manda refazer cena que estava certa, e o segundo custa
           * inferência, que é o recurso caro.
           *
           * O TESTE: folha com 1–2 caracteres cujo PAI é um aglomerado de folhas curtas
           * (≥3 irmãos assim) é letra de uma palavra. Conta como o PAI — uma vez só, com o texto
           * inteiro. Palavra de uma letra solta ("A", "E") não vira falso-negativo porque exige os
           * irmãos: uma letra sozinha continua sendo um bloco.
           */
          const semEspaco = txt.replace(/\s/g, "");
          if (semEspaco.length <= 2 && el.parentElement) {
            const irmaos = Array.from(el.parentElement.children);
            const curtos = irmaos.filter((c) => {
              const t = (c.textContent || "").replace(/\s/g, "");
              return t.length > 0 && t.length <= 2;
            });
            if (curtos.length >= 3) {
              // a palavra inteira, contada uma vez: usa o pai como chave
              const pai = el.parentElement;
              /**
               * ⚠️ …E O PAI PODE CONTER O ROLO. A régua de `data-qc-rolagem` acima isenta quem está
               * DENTRO da janela; esta peneira entra pelo lado de fora e desfaz a isenção.
               *
               * No `s49` o "£" e os dois "." são folhas de 1 caractere irmãs dos `.slot` do
               * odômetro. Elas disparam a regra da letra solta, que sobe para o pai (`#heroRow`) e
               * usa o texto INTEIRO dele como chave — e o texto inteiro inclui os dez dígitos
               * empilhados de cada casa, que giram: "£ 0 1 . 0 1 7 8 7 8 . 9 0 1 2 3 4" numa amostra,
               * outra permutação na seguinte. A chave voltava a ser instável pela porta dos fundos,
               * e o gate seguia reprovando a cena depois de a isenção existir.
               *
               * Se o agregado contém uma janela de rolagem, quem manda é a identidade do pai.
               */
              if (pai.querySelector("[data-qc-rolagem]")) {
                let idx = grupos.indexOf(pai);
                if (idx < 0) { grupos.push(pai); idx = grupos.length - 1; }
                textos.push({ k: "rolagem|" + idx, txt: (pai.getAttribute("data-qc-rolagem") || "instrumento de rolagem").slice(0, 40), rolagem: true });
                continue;
              }
              const inteiro = (pai.innerText || pai.textContent || "").trim().replace(/\s+/g, " ");
              if (inteiro && inteiro.length < 200) {
                textos.push({ k: chaveTexto(inteiro, fs), txt: inteiro.slice(0, 40), porLetra: true });
              }
              continue;
            }
          }

          textos.push({ k: chaveTexto(txt, fs), txt: txt.slice(0, 40) });
          continue;
        }
        if (noMapa(el)) continue;  // tile do motor de mapa: churn, não informação
        /**
         * ORNAMENTO DECLARADO SAI DA DENSIDADE (08/ago/2026).
         *
         * `data-qc-ornamento` já era honrado pelo `check-overlap` e pelo `qc-tamanho`, e a regra
         * única (`scripts/qc-ornamento.mjs`) diz em voz alta que **declaração do autor vence
         * tudo**. Este gate era o terceiro irmão e não lia o atributo — então punia justamente
         * quem seguiu a régua.
         *
         * Medido em `s90-preco-do-estrago` (ceuta): uma balança com DOIS rótulos na tela inteira
         * reprovou por "97 elementos de informação @11s (teto 77)". Os 97 eram as moedas e os
         * círculos das duas pilhas — e o autor JÁ tinha declarado
         * `<g id="moedas" data-qc-ornamento="pilhas de moedas identicas: o preço como grandeza
         * unica, nao N informacoes">`. Uma pilha de moedas idênticas é UM objeto para quem
         * assiste, não 26 informações; a densidade que este gate existe para medir é carga
         * COGNITIVA, e ela não cresce com a repetição do mesmo elemento.
         *
         * Herda pelo ancestral, porque o autor declara no GRUPO e as moedas nascem por script
         * dentro dele. Não é escapatória silenciosa: o total isento é contado e reportado.
         */
        if (el.closest && el.closest("[data-qc-ornamento]")) { ornamentos++; continue; }
        const tag = el.tagName.toLowerCase();
        /**
         * TRAMA NÃO É INFORMAÇÃO — a mesma forma repetida N vezes conta como UMA (07/ago/2026).
         *
         * `s24-multidao-brasileira`: a metáfora é uma MARÉ de pictogramas de gente enchendo a tela.
         * São ~82 cópias do MESMO ícone (cabeça+tronco), em duas cores, e o gate contou 82
         * "elementos de informação simultâneos" contra um teto de 77 — reprovando por 5 uma cena
         * que o espectador lê como uma frase só: *muita gente*. A tela tinha 3 blocos de texto,
         * ritmo 0.35/s e vida 1.6s: todo o resto do laudo dizia que ela estava calma.
         *
         * O gate mede DENSIDADE porque tela cheia de coisa distinta cansa. Repetição idêntica é o
         * oposto disso — é textura, e textura se lê de uma vez.
         *
         * Segue a convenção que o `check-overlap` já usa (`data-qc-ornamento`): a cena DECLARA, a
         * isenção vale para o elemento e seus descendentes, e vale só para o GRÁFICO — texto dentro
         * de um ornamento continua contando como texto, senão a marca viraria anistia geral. O total
         * isento é impresso no laudo: régua que esconde o que dispensou é régua que mente.
         */
        if (el.closest("[data-qc-ornamento]")) { if (r.width * r.height >= AREA_MIN) ornamentos++; continue; }
        if (tagsGrafico.includes(tag) && r.width * r.height >= AREA_MIN) graficos.push(id(el));
      }
      /**
       * Uma palavra animada letra a letra empurra a MESMA chave (a do pai) uma vez por letra.
       * Sem deduplicar, o conserto acima não conserta nada: 9 letras continuariam contando 9.
       * Deduplicar por chave é seguro para o resto porque a chave já embute texto + tamanho —
       * dois blocos distintos com o mesmo texto E o mesmo corpo são, para o espectador, um só.
       */
      const porChave = new Map();
      for (const t of textos) if (!porChave.has(t.k)) porChave.set(t.k, t);
      return { textos: [...porChave.values()], graficos, ornamentos, motorOk, motorMsg };
    }, { tt: t, op: OP, vw: VW, vh: VH, seletor: SELETOR_TUDO, tagsGrafico: TAGS_GRAFICO }).catch(() => null);
    if (s) {
      amostras.push({ t: +t.toFixed(2), ...s });
      if (s.motorOk === false) { motorFalhou++; motorErro ||= s.motorMsg; }
    }
  }
  const validas = amostras.length - motorFalhou;
  const PISO_AMOSTRAS = Math.max(1, Math.ceil(esperadas * 0.5));
  await ctx.close();

  /**
   * TYPEWRITER NUM NÓ SÓ — o TERCEIRO disfarce do mesmo bloco de texto (03/ago, `energia-escura/c07`).
   *
   * As duas primeiras variantes já estavam tratadas lá em cima: o count-up (máscara de dígito) e a
   * palavra animada em `<span>` por letra (conta pelo pai). Falta a mais comum de todas — a etiqueta
   * datilografada por `el.textContent = FULL.slice(0,k)`, que troca o texto do MESMO nó a cada tecla.
   * `chaveTexto` é baseada em CONTEÚDO (tem de ser: a cena de mapa recria os nós a cada frame), então
   * "EN", "ENERG", "ENERGIA ESC" viram três blocos diferentes, cada um vivendo um passo de amostragem.
   *
   * O laudo que isso produzia se contradizia sozinho, e é essa contradição que prova o defeito:
   *   densidade: 1 texto simultâneo (teto 9)   ← nunca há mais de UM bloco na tela
   *   ritmo:     6 entradas na janela de 1 s   ← seis blocos novos entrando… num palco de um só
   *   vida:      13 blocos abaixo de 0,5 s     ← "EN"=0,1s, "ENERG"=0,1s, "ENERGIA ESC"=0,1s
   * Não há como 6 blocos estrearem num segundo se jamais existe mais de 1 ao mesmo tempo.
   *
   * ⚠️ E A MÁSCARA DE DÍGITO NÃO COBRE O COUNT-UP QUE TERMINA EM PALAVRA (medido 10/ago, `s108` do
   * `quao-fundo-terra`). A contagem `Math.round(v)+' km'` que no fim vira `'QUASE 4 km'` mascara para
   * DUAS chaves — "# km" e "QUASE # km" —, então o trecho numérico morre quando o qualificador entra:
   *   vida:      menor texto no ar 0.2s (piso 0.5)  ← "3 km"=0,2s
   * É o mesmo elemento, o mesmo número, e o cabeçalho deste gate promete desde sempre que count-up
   * não reprova por vida. A promessa valia só enquanto o texto era dígito puro. Por isso (1) aceita
   * PREFIXO **ou SUFIXO**: a datilografia cresce pela direita ("EN"→"ENERG"), o count-up qualificado
   * cresce pela esquerda ("# km"→"QUASE # km"), e as condições (2) e (3) seguem sendo o que impede a
   * anistia geral. *Métrica que reprova o gesto que ela mesma declara isento manda reescrever arte sã.*
   *
   * A UNIFICAÇÃO É CONSERVADORA — três condições juntas, e é a conjunção que impede afrouxar o gate:
   *   1. mesmo corpo de fonte e o texto de A é prefixo ou sufixo ESTRITO do de B;
   *   2. A e B NUNCA aparecem no mesmo frame (typewriter jamais mostra "EN" e o nome inteiro juntos —
   *      dois blocos de verdade que por acaso se prefixam coexistem, e continuam separados);
   *   3. B estreia CONTIGUAMENTE ao fim de A (≤1 passo) — a assinatura de tecla seguindo tecla, que
   *      separa a datilografia de dois textos parecidos em momentos distintos da cena.
   * Sem (2) e (3) isto seria uma anistia para qualquer texto que comece igual. Com elas, só a
   * datilografia passa.
   *
   * ⚠️ O separador de `par()` é `U+0001` e NÃO um byte NUL. A cópia da VM usava `"\0"`, o que faz o
   * `grep` tratar este arquivo inteiro como binário e responder VAZIO a toda busca — a busca passa a
   * mentir por omissão neste arquivo. `U+0001` tem a mesma propriedade útil (não aparece em texto de
   * cena) sem cegar a ferramenta.
   */
  {
    const parseK = (k) => { const i = k.lastIndexOf("|"); return { txt: k.slice(2, i), fs: k.slice(i + 1) }; };
    const primeira = new Map(), ultima = new Map();
    for (let i = 0; i < amostras.length; i++) {
      for (const k of new Set(amostras[i].textos.map((x) => x.k))) {
        if (!primeira.has(k)) primeira.set(k, i);
        ultima.set(k, i);
      }
    }
    const par = (a, b) => (a < b ? a + "\u0001" + b : b + "\u0001" + a);
    const coexiste = new Set();
    for (const a of amostras) {
      const ks = [...new Set(a.textos.map((x) => x.k))];
      for (let i = 0; i < ks.length; i++) for (let j = i + 1; j < ks.length; j++) coexiste.add(par(ks[i], ks[j]));
    }
    const info = [...primeira.keys()].map((k) => ({ k, ...parseK(k) })).sort((a, b) => a.txt.length - b.txt.length);
    const pai = new Map();
    for (const a of info) {
      let alvo = null;
      for (const b of info) {
        if (b.k === a.k || b.fs !== a.fs) continue;
        if (b.txt.length <= a.txt.length || !(b.txt.startsWith(a.txt) || b.txt.endsWith(a.txt))) continue;
        if (coexiste.has(par(a.k, b.k))) continue;
        if (primeira.get(b.k) - ultima.get(a.k) > 1) continue;      // não é tecla seguinte
        if (!alvo || b.txt.length < alvo.txt.length) alvo = b;      // o próximo estado, não o final
      }
      if (alvo) pai.set(a.k, alvo.k);
    }
    if (pai.size) {
      const raiz = (k) => { let v = k, n = 0; while (pai.has(v) && n++ < 500) v = pai.get(v); return v; };
      const memo = new Map();
      for (const a of amostras) for (const x of a.textos) {
        if (!memo.has(x.k)) memo.set(x.k, raiz(x.k));
        const r = memo.get(x.k);
        if (r !== x.k) { x.k = r; x.txt = parseK(r).txt.slice(0, 40); }
      }
      // a dedupe por chave feita no browser é anterior à unificação: refaz por frame.
      for (const a of amostras) {
        const vistos = new Set();
        a.textos = a.textos.filter((x) => (vistos.has(x.k) ? false : (vistos.add(x.k), true)));
      }
    }
  }

  // densidade
  let picoTexto = 0, picoTextoT = 0, picoTextoLista = [], picoInfo = 0, picoInfoT = 0, picoOrn = 0;
  for (const a of amostras) {
    if (a.textos.length > picoTexto) { picoTexto = a.textos.length; picoTextoT = a.t; picoTextoLista = a.textos.map((x) => x.txt); }
    const n = a.textos.length + a.graficos.length;
    if (n > picoInfo) { picoInfo = n; picoInfoT = a.t; }
    if ((a.ornamentos || 0) > picoOrn) picoOrn = a.ornamentos;
  }
  // RITMO — estreias de BLOCO DE TEXTO por segundo.
  // Só texto, de propósito: é o que o espectador tem de LER, e é a única classe cuja identidade
  // sobrevive à cena que redesenha tudo a cada frame (ver `chaveTexto`). Gráfico recriado por
  // frame mediria a técnica de desenho, não o ritmo. A carga dos gráficos entra pela DENSIDADE,
  // que é contagem por frame e não depende de identidade nenhuma.
  const chaves = (a) => new Set(a.textos.map((x) => x.k));
  let entradas = 0; const porT = []; const estreias = [];
  for (let i = 1; i < amostras.length; i++) {
    const ant = chaves(amostras[i - 1]), cur = chaves(amostras[i]);
    let e = 0;
    for (const k of cur) if (!ant.has(k)) {
      e++;
      // ⚠️ QUEM estreia, não só QUANTOS — a informação que obrigava a copiar este gate.
      //
      // O laudo dava o PICO e o ritmo, nunca a lista, e a doutrina de auto-QA resolvia isso
      // mandando o agente *"copiar o gate para `scripts/.probe-carga.mjs` (tem de ser dentro de
      // scripts/, senão ../lib/ e node_modules não resolvem), acrescentar um laço que imprime as
      // estreias, rodar, consertar, apagar o probe"*. O último passo depende de alguém lembrar, e
      // é o que sempre falha: em 13/ago/2026 achei um `scripts/.probe-carga-s30.mjs` (1.529 B)
      // largado na `estudio-render` desde 09/ago. O `.gitignore` desta casa carrega a lista dos
      // irmãos dele — `_diag-mapa-tmp.mjs`, `_probe-s71-tmp.mjs`, `_tst-mapista-tmp.mjs`,
      // `_tmp-mmt-loteB.sh` — e o comentário certo já estava escrito lá: *"aposentar o mesmo
      // padrão duas vezes é sinal de que o defeito não está no arquivo"*.
      //
      // O defeito estava AQUI: o laço já sabia quem estreava e jogava fora. Três linhas depois,
      // ninguém mais precisa copiar gate nenhum. *Quando a receita manda duplicar a ferramenta e
      // editá-la, a ferramenta é que está faltando uma flag.*
      const q = (amostras[i].textos.find((x) => x.k === k) || {});
      estreias.push({ t: amostras[i].t, txt: (q.txt || "").trim().slice(0, 70) });
    }
    entradas += e; if (e) porT.push({ t: amostras[i].t, e });
  }
  const entPorSeg = +(entradas / Math.max(DUR, 0.1)).toFixed(2);
  let piorJanela = 0, piorT = 0;
  for (const a of amostras) { const s = porT.filter((x) => x.t > a.t && x.t <= a.t + 1).reduce((z, x) => z + x.e, 0); if (s > piorJanela) { piorJanela = s; piorT = a.t; } }
  // vida do TEXTO (por elemento, não por string — count-up é um elemento só)
  const vida = {};
  for (const a of amostras) for (const x of a.textos) { if (!vida[x.k]) vida[x.k] = { n: 0, txt: x.txt }; vida[x.k].n++; }
  const vidas = Object.values(vida).map((v) => ({ txt: v.txt, s: +(v.n * PASSO).toFixed(1) })).sort((a, b) => a.s - b.s);
  const piscando = vidas.filter((v) => v.s < MIN_VIDA);

  const falhas = [];
  // PAGEERROR PRIMEIRO — é o veredito que explica todos os outros números. Sem ele na frente, o
  // operador vai investigar densidade numa cena cujo script está morto.
  if (errosJS.length) falhas.push(`PAGEERROR: a cena tem erro de JS — ${errosJS[0]}${errosJS.length > 1 ? ` (+${errosJS.length - 1})` : ""}`);
  if (picoTexto > MAX_TEXTO) falhas.push(`DENSIDADE: ${picoTexto} blocos de texto simultâneos @${picoTextoT}s (teto ${MAX_TEXTO})`);
  if (picoInfo > MAX_INFO) falhas.push(`DENSIDADE: ${picoInfo} elementos de informação simultâneos @${picoInfoT}s (teto ${MAX_INFO})`);
  /**
   * ⚠️ A MÉDIA DE ENTRADAS NÃO GOVERNA CENA CURTA — E ISSO REPROVAVA TODO CARD DE TÍTULO (31/jul).
   *
   * `entPorSeg = entradas / duração`. Num card de título a conta degenera: as entradas são o próprio
   * conteúdo do card estabelecendo-se uma única vez, e dividir por uma duração curta mede BREVIDADE,
   * não pressa. Medido em 4 cards reprovados de 2 projetos — todos com densidade, info, rajada e vida
   * DENTRO dos tetos, falhando só na média:
   *
   *   card                          dur     textos   média      pior 1 s
   *   orcas/t02                     3,0 s      4     1,33/s ✗   4/4 ✓
   *   paises-baixos/titulo-02       2,3 s      4     1,76/s ✗   3/4 ✓
   *   paises-baixos/titulo-03       3,4 s      4     1,18/s ✗   3/4 ✓
   *   paises-baixos/titulo-04       2,6 s      4     1,52/s ✗   3/4 ✓
   *
   * O teto de 0,9/s foi cravado por `dourados/M01/titulo-5.html` — que é um card de título com os
   * MESMOS 4 blocos e passa com **0,81/s porque dura 4,9 s**. Ou seja: a régua foi calibrada no card
   * mais LONGO do conjunto dourado e exclui todos os mais curtos. Com os 4 blocos que um card precisa
   * (kicker + 2 linhas + crédito), a média só cai abaixo de 0,9 acima de **4,44 s** — e card de título
   * é de 2 a 4 s por desenho (M26/ARTE-34). **Encurtar o card, que é a decisão editorial certa, era o
   * que o fazia reprovar.** Não há como o autor consertar: é aritmética, não arte.
   *
   * A rajada continua governando, e é ela que protege de verdade contra despejo de informação — a
   * janela de 1 s não se dilui com a duração. Abaixo do piso a média é MEDIDA e MOSTRADA (a dívida não
   * se esconde), só não reprova.
   *
   * O piso é 4,5 s: logo acima do ponto onde a aritmética deixa de condenar o card mínimo, e abaixo de
   * qualquer cena explicativa, que é o objeto para o qual a média foi calibrada.
   */
  const DUR_MIN_MEDIA = +opt("dur-min-media", "4.5");
  if (entPorSeg > MAX_ENTRADAS && DUR >= DUR_MIN_MEDIA) falhas.push(`RITMO: ${entPorSeg} entradas/s (teto ${MAX_ENTRADAS})`);
  if (piorJanela > MAX_JANELA) falhas.push(`RITMO: ${piorJanela} entradas na janela de 1 s @${piorT}s (teto ${MAX_JANELA})`);
  if (piscando.length) falhas.push(`VIDA: ${piscando.length} bloco(s) de texto abaixo de ${MIN_VIDA}s — ${piscando.slice(0, 4).map((v) => JSON.stringify(v.txt) + "=" + v.s + "s").join(", ")}`);

  /**
   * DOIS NÍVEIS PARA A VIDA DO TEXTO — e a razão está medida, não arbitrada.
   *
   * O ofício (`ROUPA-CENA.md`, ARTE-55) exige **≥1,5 s** por bloco: *"tem várias animações que ficaram
   * MUITO rápidas, que é algo que eu NÃO gosto"*. O gate reprovava só abaixo de **0,5 s** — três vezes
   * mais frouxo que a doutrina. Regra sem verificação é regra morta, e um agente pegou isso na prática.
   *
   * ⚠️ MAS SUBIR O PISO PARA 1,5 s SERIA ALARME FALSO EM MASSA. Medido nas 25 cenas DOURADAS (as que o
   * Mateus aprovou): **8 delas — 32% — têm algum bloco abaixo de 1,5 s**, três abaixo de 1 s. A mediana
   * dourada é 2,1 s. Ou seja: o piso do ofício descreve o RITMO GERAL da cena, não proíbe que um único
   * elemento (um dígito que troca, um flash de confirmação) apareça rápido. Reprovar por isso condenaria
   * um terço da própria régua.
   *
   * Então: **0,5 s reprova** (o bloco piscou, ninguém leu) e **1,5 s avisa** (a doutrina pede mais fôlego,
   * olhe se é deliberado). Mesma estrutura do `qc-poluicao`: o teto do gate pega o desastre, a mediana
   * dourada aponta o alvo — e confundir os dois é o que fez cenas passarem no gate e serem reprovadas
   * pelo Mateus olhando.
   */
  const VIDA_OFICIO = 1.5;
  const curtos = vidas.filter((v) => v.s < VIDA_OFICIO && v.s >= MIN_VIDA);
  const avisos = [];
  if (curtos.length) avisos.push(`VIDA: ${curtos.length} bloco(s) entre ${MIN_VIDA}s e ${VIDA_OFICIO}s (o ofício pede ≥${VIDA_OFICIO}s) — ${curtos.slice(0, 3).map((v) => JSON.stringify(v.txt) + "=" + v.s + "s").join(", ")}`);

  /**
   * O TERCEIRO ESTADO — "não consegui medir" não é "passou" nem "reprovou".
   *
   * A página que não CARREGOU e o motor de animação MORTO caem aqui, e não em `falhas`: nos dois casos
   * eu não vi a cena, e chamar isso de reprovação seria mentir do outro lado (o gate ficaria acusando
   * cena boa quando a máquina engasga). Quem lê o exit distingue: **1 = medi e reprovei · 2 = não
   * medi**. O `qc-cena.mjs` trata 2 como indefinido — e indefinido invalida o carimbo do portão, então
   * não vira liberação de render.
   */
  const naoMedido = errosLoad.length
    ? `a página não carregou — ${errosLoad[0]}`
    : validas < PISO_AMOSTRAS
      ? `motor de animação morto: só ${validas} de ${esperadas} amostras válidas (piso ${PISO_AMOSTRAS})${motorErro ? ` — __renderAt lança "${motorErro}"` : ""}`
      : null;

  const laudo = { arq: basename(arq), dur: +DUR.toFixed(1), palco: VW, picoTexto, picoTextoT, picoInfo, picoInfoT, ornamentosIsentos: picoOrn, entPorSeg, piorJanela, piorT, vidaMin: vidas.length ? vidas[0].s : null, piscando: piscando.length, falhas, avisos, errosJS, errosLoad, amostras: amostras.length, esperadas, validas, naoMedido };
  laudos.push(laudo);
  if (!JSON_OUT) {
    console.log(`\nCARGA · ${laudo.arq} · ${laudo.dur}s · palco ${VW}`);
    console.log(`  densidade: ${picoTexto} textos @${picoTextoT}s (teto ${MAX_TEXTO}) · ${picoInfo} info @${picoInfoT}s (teto ${MAX_INFO})`);
    // Isenção declarada nunca é silenciosa: quem lê o laudo tem de saber o que saiu da conta.
    if (picoOrn) console.log(`  ornamento: ${picoOrn} elemento(s) FORA da densidade por data-qc-ornamento declarado`);
    // A média MEDIDA aparece sempre; quando a cena é curta demais para ela significar algo, o
    // relatório diz que não está julgando — dívida escondida é pior que dívida perdoada em voz alta.
    const mediaVale = DUR >= DUR_MIN_MEDIA;
    console.log(`  ritmo:     ${entPorSeg} entradas/s (teto ${MAX_ENTRADAS}${mediaVale ? "" : ` · NÃO julgado: cena de ${DUR.toFixed(1)}s, abaixo de ${DUR_MIN_MEDIA}s a média mede brevidade, não pressa`}) · pior 1s = ${piorJanela} @${piorT}s (teto ${MAX_JANELA})`);
    console.log(`  vida:      menor texto no ar ${laudo.vidaMin}s (piso ${MIN_VIDA})`);
    if (picoTexto > MAX_TEXTO) console.log(`  no pico:   ${picoTextoLista.slice(0, 16).join(" | ")}`);
    // `--estreias`: quem entra e quando. Substitui a cópia hackeada do gate que a receita de
    // auto-QA mandava fazer — e que ficava para trás (`scripts/.probe-carga-s30.mjs`, achado
    // largado na `estudio-render`). Fora de `--json` para não mudar o contrato de quem já consome.
    if (flag("estreias")) {
      console.log(`  estreias:  ${estreias.length} entrada(s) de texto, na ordem em que o espectador as recebe`);
      for (const e of estreias) console.log(`     @${String(e.t).padStart(5)}s  ${e.txt}`);
    }
    console.log(`  amostras:  ${validas}/${esperadas} válidas (piso ${PISO_AMOSTRAS})`);
    if (avisos.length) console.log(avisos.map((a) => "  ▲ " + a).join("\n"));
    // NÃO MEDIDO vem antes e SOZINHO: imprimir os tetos junto sugeriria que os números significam algo.
    if (naoMedido) console.log(`  ⚠ NÃO MEDIDO — ${naoMedido}`);
    else console.log(falhas.length ? falhas.map((f) => "  ✗ " + f).join("\n") : "  ✓ dentro dos tetos");
  }
}
await browser.close();
if (JSON_OUT) console.log(JSON.stringify(laudos, null, 1));
// 1 = medi e reprovei (a régua da casa) · 2 = NÃO MEDI · 0 = medi e passou.
// Reprovação medida tem precedência: ela é acionável agora; o não-medido pede outra passada.
process.exit(laudos.some((l) => l.falhas.length && !l.naoMedido) ? 1 : laudos.some((l) => l.naoMedido) ? 2 : 0);
