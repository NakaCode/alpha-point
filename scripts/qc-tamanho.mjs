// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-tamanho.mjs (linhas 1-467, commit 4afda12).
// O que mudou: os pisos deixaram de ser só constantes do código e passam a ser o MAIOR entre o
// ofício (260/104/72/72 no palco 3840, que ficam) e os --piso-* de marca/tokens.css (a marca sobe,
// nunca desce); o palco de reserva deixou de ser 1920 e é o da marca (--palco-largura, 3840 na
// neutra) — abrir em 1920 era o que fazia cena sem largura no body medir METADE dos pisos; o laudo
// diz de onde veio a marca. O Chrome vem de lib/chrome.mjs.
// Na integração da v1: o palco declarado vem da régua do render do motor (aspas simples e __native4k contam); espelho.json/_reaproveitamento.json lidos sem BOM.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: playwright-core (^1.60.0), carregado sob demanda por lib/chrome.mjs.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// GATE DE TAMANHO DE TEXTO — o piso de legibilidade, medido no palco real (REND-15).
// Uso: node scripts/qc-tamanho.mjs <html> [<html> …] [--passo=0.4] [--op=0.55]
//                                  [--heroi | --sem-heroi] [--estrito] [--json]
//
// POR QUE ELE EXISTE. A doutrina mandava rodar `FONT_MIN_HERO=260` — um comando que ninguém
// conseguia executar: a variável só vivia no `archive/` e num `qa-final.mjs` que lê artefato da
// era-2. Lei prescrita sem runner é lei morta. Este é o runner.
//
// O QUE ELE MEDE DE DIFERENTE. O gate antigo olhava o MAIOR texto do palco, e isso não prova
// nada: numa cena de citação o maior é a ASPA DECORATIVA (560px) e a fala real passava a 132px —
// METADE do piso — com o gate verde. Aqui o ornamento sai da conta e o herói passa a ser o maior
// texto QUE É TEXTO DE VERDADE.
//
// E O ORNAMENTO NÃO DEPENDE MAIS DE ALGUÉM LEMBRAR DE MARCAR. O `data-qc-ornamento` continua
// valendo (declaração vence tudo), mas ele sozinho era regra morta: das 8 cenas do disco com aspa
// decorativa isolada, 1 tinha o atributo e 7 não. O critério automático mora em
// `scripts/qc-ornamento.mjs` — leia lá o porquê de ele ser ESTREITO (aspa e divisor isolados, não
// "qualquer símbolo"): a versão larga demovia o `$` de 145px que É o herói de uma cena real.
//
// PISOS (REND-15): declarados em 4K e derivados pro palco medido — nunca o contrário.
//   herói/título 260 · rótulo 104 · eixo/legenda 72 · crédito 72   (3840 de largura)
// Cena legado de 1920 recebe a metade (130 · 52 · 36 · 36) e só ao AUDITAR o que já existe:
// autorar novo em 1920 é defeito, e isso quem acusa é o contrato, não este gate.
//
// PAPEL DE CADA TEXTO. O que não dá pra medir é a INTENÇÃO. Então:
//   • `data-qc-papel="heroi|rotulo|eixo|credito"` → piso daquele papel (declaração vence tudo);
//   • `data-qc-credito="mapa"` (nele ou num ancestral; papel crédito ou nenhum) → piso do CRÉDITO DE
//     MAPA, 40 px no 4K (docs/CREDITO-DE-MAPA.md §6.2/§6.4), no lugar do piso geral de crédito (72);
//   • `data-qc-ornamento`                        → fora da conta (contado e reportado);
//   • o resto                                    → piso de LEGIBILIDADE (o menor piso do palco).
// E o HERÓI: o maior texto não-ornamento tem que alcançar o piso de herói. Essa cobrança só faz
// sentido em cena que TEM texto-herói — tríptico de footage com 3 legendas não tem, e cobrar
// dele era o falso-positivo que aposentou o gate anterior. Quando o HTML mora em
// `out/<proj>/graphics/<id>.html`, o `modo` sai do espelho e decide sozinho; sem espelho, cobra
// (o lado seguro pra um gate), e `--sem-heroi` desliga na mão.
import { pathToFileURL } from "node:url";
import { resolve, dirname, basename, join } from "node:path";
import { readFileSync, existsSync } from "node:fs";
import { expandirAlvos } from "./lib/expandir-alvos.mjs";
import { PARA_TAMANHO } from "./qc-ornamento.mjs";
import { morrerComoNaoMedido } from "./lib/nao-medido.mjs";
import { abrirCenaParaMedir, palcoDaCena } from "./lib/abrir-cena.mjs";
import { lerJsonSemBom } from "./lib/qc-cena-gates.mjs";
import { lancarChrome } from "./lib/chrome.mjs";
import { lerMarca, pisosEfetivos, pisoCreditoMapa, PISOS_OFICIO_4K } from "./lib/marca-tokens.mjs";

// CRASH NÃO É REPROVAÇÃO — o Chrome que não sobe sairia 1, o código de "medi e reprovei".
// (O erro POR ARQUIVO tem a sua própria porta, no fim deste arquivo, e sai pelo mesmo 2.)
morrerComoNaoMedido("qc-tamanho");

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(`--${n}`);
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.split("=")[1] : d; };
// expandirAlvos: pasta vira a lista de .html. Sem isto, `qc-tamanho out/<proj>/graphics` mandava a
// PASTA pro Chrome e media o índice de arquivos dele: reprovava (exit 1) o texto-herói
// "Index of /home/…" e cuspia 344 avisos que eram os NOMES DOS ARQUIVOS — com 0 das 74 cenas
// medidas. Falso positivo em gate não é ruído inofensivo: ensina a ignorar o gate.
const arquivos = expandirAlvos(argv.filter((a) => !a.startsWith("--")), "qc-tamanho");
if (!arquivos.length) { console.error("uso: qc-tamanho.mjs <html> [<html> …] [--sem-heroi] [--estrito] [--json]"); process.exit(2); }

const PASSO = parseFloat(opt("passo", "0.4"));
const OP_MIN = parseFloat(opt("op", "0.55"));
const JSON_OUT = flag("json");
const ESTRITO = flag("estrito");

// Pisos EM 4K (REND-15). O palco medido deriva os seus: piso × (largura/3840).
// [porte Régie] Os números do ofício moram em lib/marca-tokens.mjs (PISOS_OFICIO_4K, os mesmos
// 260/104/72/72), e a marca do canal pode SUBIR qualquer um deles por --piso-<papel> no tokens.css.
// Descer, não: pisosEfetivos() fica com o maior. A marca é lida uma vez, aqui.
const MARCA = lerMarca();
if (MARCA.aviso && !JSON_OUT) console.log(`  ⓘ marca: ${MARCA.aviso}`);
// Modos que TÊM texto-herói. Os de fora (footage, foto, mapa, desenho, apresentador…) vivem de
// imagem e rótulo — a própria doutrina do revisor já dizia "cenas de conceito/desenho/foto têm
// rótulos menores e está OK".
//
// `cinematico` FICOU DE FORA, e isso foi MEDIDO, não achado: o modo cobre duas coisas opostas —
// o card de título de tipografia gigante (senna s01 973px · s05 308px · avioes s05-titulo-1 280px)
// E a cena de footage/ilustração com legenda de nome (odisseia s06 "PÁRIS · príncipe de Troia" a
// 56px, heranca caminho-regras a 84px). Cobrando herói dele, 3 das 4 reprovas do modo na amostra
// legado eram cena de legenda que herói nenhum tem — 12% de alarme falso num gate que bloqueia.
// Card de título que QUEIRA a cobrança declara `data-qc-papel="heroi"` e é cobrado na hora.
//
// `documento` saiu pelo mesmo motivo, também medido: a cena é FAC-SÍMILE — reproduz a tipografia
// do papel real (capa de artigo, edital), e ali a letra miúda é o conteúdo, não o defeito. Cobrando
// herói dela, 2 de 3 reprovavam (s02-estudo-publicado 70px · edital-chamado 72px) por não terem
// manchete que documento nenhum tem. A letra miúda desses fac-símiles segue aparecendo como AVISO
// de legibilidade, que é o peso certo pra ela.
//
// Sobra o que a doutrina já cobrava e aguentou o teste (dados/infográfico) mais `citacao`, que é o
// caso desta reforma: no exemplar, a fala é AUTORADA a 260 — o piso de herói é a regra da cena.
const MODO_COM_HEROI = new Set(["dados", "infografico", "citacao"]);

// ── modo do espelho: out/<proj>/graphics/<id>.html → segmentos[].modo ─────────
// Prefere `espelho.json`; `plano-roteirista.json` é o nome LEGADO da era-2 (só 7 projetos ainda
// o têm, e 4 deles já têm os dois).
function modoDaCena(html) {
  try {
    const g = dirname(resolve(html));
    if (basename(g) !== "graphics") return null;
    const dir = dirname(g);
    const id = basename(html, ".html");
    const pf = ["espelho.json", "plano-roteirista.json"].map((n) => join(dir, n)).find(existsSync);
    if (pf) {
      // [porte Régie] sem o BOM que o PowerShell 5.1 grava com -Encoding utf8 (o JSON.parse morria calado)
      const segs = lerJsonSemBom(pf).segmentos || [];
      const m = segs.find((s) => s.id === id)?.modo;
      if (m) return m;
    }
    // COMPILADO temático: não tem `espelho.json` — o registro das cenas novas vive em
    // `_reaproveitamento.json → cenas_novas[]` (slug + modo). Sem esta ponte, `modoDaCena` devolvia
    // null, o gate caía no lado seguro e COBRAVA texto-herói de cena de MAPA (que por definição não
    // tem herói): toda cena do projeto precisava de `--sem-heroi` na mão, e flag na mão vira regra
    // esquecida. Os 16 mapas deste compilado reprovavam por um defeito que não é deles.
    const reap = join(dir, "_reaproveitamento.json");
    if (existsSync(reap)) {
      const novas = lerJsonSemBom(reap).cenas_novas || [];
      return novas.find((c) => c.slug === id)?.modo || null;
    }
    return null;
  } catch { return null; }
}

const b = await lancarChrome();
const laudos = [];

for (const file of arquivos) {
  // [porte Régie] Abre no palco da MARCA (3840×2160 na neutra), não em 1920: cena que não declara
  // largura no body herda a do viewport, e em 1920 os pisos saíam pela metade (o caso n003 abaixo).
  const p = await b.newPage({ viewport: { width: MARCA.palco.w, height: MARCA.palco.h }, deviceScaleFactor: 1 });
  p.setDefaultTimeout(30000);
  // ⚠️ `pageerror` É VEREDITO (05/ago/2026). Cena com o script morto não tem texto nenhum no palco, e
  // um gate que só mede tamanho de texto responde `✓ TAMANHOS ok` sobre um 4K totalmente vazio —
  // medido, exit 0. O sinal já estava a uma linha de distância e ninguém o escutava.
  const errosJS = [];
  p.on("pageerror", (e) => errosJS.push(String(e).replace(/\s+/g, " ").slice(0, 120)));
  try {
    /**
     * ⚠️ CENA DE MAPA NUNCA CHEGA A `load`, E O GATE DESISTIA DE MEDIR POR CAUSA DISSO.
     *
     * O `goto` do Playwright espera `load` por padrão, e o palco do mapista fica puxando tile do
     * MapTiler e terreno enquanto a página viver — então `load` não chega, o `goto` estoura os 30 s e
     * o gate devolve `⚠ NÃO MEDIDO`. Isso **não é defeito da cena**: é o gate genérico aplicado ao
     * objeto errado, e sob a máquina carregada ele vira regra, não exceção.
     *
     * Medido em 11/set/2026 no `terremotos-america-do-sul`: `qc-tamanho t-s125` (mapa) →
     * `page.goto: Timeout 30000ms exceeded`; e o `consertar-cenas` da mesma cena fechou
     * **`1 pronto · 1 regrediu`** pelo MESMO erro — ou seja, uma cena consertada por um agente pago
     * foi carimbada como regressão porque o gate não conseguiu abrir o arquivo. A onda 1 já tinha
     * nomeado o problema e não o consertado; ele voltou no dia seguinte e custou a cena de novo.
     *
     * **Navegação que não "termina" não é navegação que falhou.** Passados os 30 s, o DOM está
     * parseado há muito tempo — o que falta é rede de tile, que esta medição não usa. Então o
     * timeout deixa de ser veredito e vira condição registrada: segue-se para `domcontentloaded` e
     * mede-se normalmente.
     *
     * ⛔ COM UMA TRAVA, porque senão isto abriria a porta do verde vazio: quando a navegação NÃO
     * chegou a `load`, uma medição que não encontra **nenhum** bloco de texto volta a ser
     * `NÃO MEDIDO` em vez de `✓ ok`. Página que não abriu e página sem texto se parecem no
     * resultado, e a régua da casa é falhar fechado quando não dá para distinguir.
     *
     * ───────────────────────────────────────────────────────────────────────────────────────────
     * ⬆️ TUDO ACIMA CONTINUA VALENDO. O que mudou na ONDA 3 são duas coisas, e a segunda é a que
     * importa de verdade:
     *
     * 1. ⏱️ Em cena de MAPA não se tenta mais o `load` para depois cair no fallback — vai-se
     *    direto a `domcontentloaded`. Tentar custava os 30 s do `goto` em toda cena de mapa, e são
     *    esses 30 s por gate que estouram o `QC_TIMEOUT_MS` de 3 min e devolvem o `NÃO MEDIDO` pela
     *    outra porta. A `t-s125` só fechou o portão em 11/set com `QC_TIMEOUT_MS=900000`.
     *    **Dar mais paciência ao relógio nunca foi o conserto.**
     *
     * 2. ⛔ E ESTE GATE MEDIA A CENA DE MAPA NO ESTADO ERRADO — o defeito calado, que o timeout
     *    escondia. Ele nunca chamou `__prepararCaptura()` nem esperou `map.once('idle')`: quando a
     *    navegação caía no fallback e a medição seguia, media-se com a câmera na posição INICIAL e
     *    o auto-loop correndo, isto é, uma cena que não vai ao ar. Os rótulos posicionados por
     *    `map.project()` colapsam perto do mesmo ponto e vários nem projetam — e daí sai tanto
     *    falso negativo (texto pequeno que não foi medido) quanto falso positivo. É a MESMA
     *    [ARTE-150] que o `qc-fora-do-quadro` e o `qc-carga` já tinham consertado cada um por sua
     *    conta, em 08/ago, e que ficou de fora aqui porque ninguém compara gate com gate.
     *
     * O caminho agora é UM só, em `lib/abrir-cena.mjs`, e cena COMUM não muda de comportamento.
     */
    const aberta = await abrirCenaParaMedir(p, file);
    /**
     * ⚠️ A TRAVA DO VERDE VAZIO PRECISOU DE UM SEGUNDO SINAL, E ESTE É O DETALHE QUE FARIA O
     * CONSERTO NASCER QUEBRADO.
     *
     * Antes, `navegouCompleto === false` só acontecia por acidente (timeout), então era um bom
     * proxy de "não sei se a página abriu". Agora TODA cena de mapa passa por `domcontentloaded`
     * de propósito — se o proxy continuasse sozinho, toda cena de mapa SEM texto viraria
     * `NÃO MEDIDO`, e o gate passaria a reprovar por construção exatamente o objeto que este
     * conserto existe para medir.
     *
     * O segundo sinal é `mapaAssentou`: `__aguardarMapa()` respondeu, logo a página abriu, o
     * motor está vivo e a câmera está no lugar em que a cena vai ao ar. É prova POSITIVA de
     * abertura — melhor que o `load`, que em cena de mapa nunca chega.
     */
    const abriuComCerteza = aberta.navegouCompleto || aberta.mapaAssentou;

    // ── PALCO: a cena manda, não o 1920 histórico (mesma medição do check-overlap) ──
    // ⚠️ E ela se lê na DECLARAÇÃO, não no DOM (19/ago/2026). O `|| document.body`
    // anterior acertava por acidente — só quando o CSS declara largura no body.
    // Medido no `especies-humanas`: 121 de 122 declaram `body{width:3840px}`; a
    // `n003-gente-de-outra-especie` não, e este gate mediu 1920×2160, derivou pisos
    // pela metade (130/52/36 em vez de 260/104/72) e imprimiu `✓ TAMANHOS ok` sobre
    // um crédito de 38px — metade do piso real de 72. Verde vazio (OFÍCIO §4).
    // `data-render="4k-native"` no <html> é o contrato da casa e a mesma leitura do
    // `qc-carga`, que por isso acertava onde este gate errava.
    // [porte Régie] a declaração pela régua do RENDER do motor (aspas simples e __native4k=true contam)
    let texto4k = ""; try { texto4k = readFileSync(resolve(file), "utf8"); } catch { /* abriu acima, ou já falhou */ }
    const declarado = await palcoDaCena(texto4k);
    const palco = declarado.nativo ? { w: declarado.w, h: declarado.h } : await p.evaluate(() => {
      if (document.documentElement.getAttribute("data-render") === "4k-native") {
        return { w: 3840, h: 2160 };
      }
      const s = document.getElementById("stage") || document.getElementById("palco") || document.body;
      const r = s.getBoundingClientRect();
      return { w: Math.round(r.width) || 0, h: Math.round(r.height) || 0 };
    });
    // [porte Régie] reserva = palco da marca (era 1920×1080 cravado)
    if (!palco.w || !palco.h) { palco.w = MARCA.palco.w; palco.h = MARCA.palco.h; }
    if (palco.w !== MARCA.palco.w || palco.h !== MARCA.palco.h) await p.setViewportSize({ width: palco.w, height: palco.h });
    const k = palco.w / 3840;
    const pisos = pisosEfetivos(MARCA, palco.w);
    const PISO_LEGIB = Math.min(...Object.values(pisos));
    // [porte Régie] o crédito de mapa tem piso próprio (lib/marca-tokens.mjs › PISO_CREDITO_MAPA_4K).
    // Entra DEPOIS do PISO_LEGIB de propósito: o texto sem papel segue no menor piso do ofício (72), e
    // não nos 40 que só o crédito de mapa declarado ganha.
    pisos["credito-mapa"] = pisoCreditoMapa(palco.w);

    await p.evaluate(() => window.__prepararCaptura && window.__prepararCaptura());
    const DUR = await p.evaluate(() => window.__duracao || 18);

    const medido = await p.evaluate(async ({ PASSO, OP_MIN, DUR, ORN }) => {
      const stage = document.getElementById("stage") || document.body;
      /**
       * ⚠️ RECOLETA A CADA FRAME — SENÃO TODA CENA DE MAPA PASSA EM BRANCO (04/ago/2026).
       *
       * Coletar os candidatos UMA vez, antes do laço de tempo, funciona para cena estática e mente
       * para cena de mapa: o rig do mapista **reconstrói o overlay a cada `__renderAt`**, então os
       * nós coletados em t=0 viram órfãos (fora do documento, `getBoundingClientRect` 0×0) e os nós
       * novos — os que o espectador de fato lê — nunca entram na medição. Em t=0 muitas cenas de mapa
       * ainda não têm texto nenhum, então o gate media o vazio e dava **verde falso em toda cena de
       * mapa da casa**.
       *
       * O `check-overlap` já tinha corrigido isto do mesmo jeito (ver o comentário dele sobre "a
       * recoleta muda o set"); este gate ficou para trás. *Quando dois gates olham a mesma tela, o
       * conserto de um é dívida do outro.*
       */
      const coletar = () => [...stage.querySelectorAll("*")].filter((el) => {
        const tag = el.tagName.toLowerCase();
        if (tag === "text" || tag === "tspan") return (el.textContent || "").trim().length > 0;
        return [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 0);
      });
      const all = [...stage.querySelectorAll("*")];
      let cands = coletar();
      const rotulo = (el) => (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 44);
      // [porte Régie] O PAPEL: o declarado em data-qc-papel; o CRÉDITO DE MAPA (data-qc-credito="mapa",
      // nele ou num ancestral — a pílula pode ter <span> dentro) vira o papel "credito-mapa", com piso
      // próprio de 40 px (docs/CREDITO-DE-MAPA.md §6.4). Só quando o papel é crédito ou nenhum: a marca
      // de mapa não rebaixa um herói ou um rótulo que alguém marcou por engano.
      const papelDe = (el) => {
        const p = el.getAttribute("data-qc-papel") || "";
        if ((p === "" || p === "credito") && el.closest('[data-qc-credito="mapa"]')) return "credito-mapa";
        return p;
      };
      // ORNAMENTO: declarado OU reconhecido pela regra única de `scripts/qc-ornamento.mjs` (as
      // regex chegam em texto porque este bloco roda dentro da página). O motivo vai junto no
      // relatório — ornamento que some sem dizer por que é escapatória silenciosa.
      const reAspa = new RegExp(ORN.aspa, "u"), reDiv = new RegExp(ORN.divisor, "u");
      const motivoOrn = (el) => {
        if (el.hasAttribute("data-qc-ornamento")) return "declarado";
        const t = (el.textContent || "").trim();
        if (!t) return null;
        if (reAspa.test(t)) return "aspa isolada";
        if (reDiv.test(t)) return "divisor isolado";
        return null;
      };
      const ornamentos = cands.filter((el) => motivoOrn(el)).map((el) => `${rotulo(el)} (${motivoOrn(el)})`);
      cands = cands.filter((el) => !motivoOrn(el));

      const opEf = (el) => { let o = 1, e = el; while (e && e !== document.body) { const s = getComputedStyle(e); if (s.display === "none" || s.visibility === "hidden") return 0; o *= parseFloat(s.opacity || "1"); e = e.parentElement; } return o; };

      // TAMANHO EFETIVO NA TELA ≠ font-size do CSS. Dois multiplicadores mudam o que o
      // espectador vê, e ignorar qualquer um deles inverte o veredito:
      //
      //  1. `transform: scale()` — texto de 260px dentro de um scale(.5) chega com 130.
      //  2. `zoom` — É O MECANISMO DA CENA 4K-NATIVA. A cena é AUTORADA em 1920 CSS e a folha
      //     `<style id="nat4k">html{zoom:2}</style>` dobra tudo pro palco de 3840. E aqui mora a
      //     pegadinha que reprovou cena boa na 1ª versão deste gate: no Chrome moderno o rect vem
      //     ZOOMADO (stage mede 3840) mas `getComputedStyle().fontSize` vem SEM zoom (140px). Ler
      //     só o fontSize e comparar com o piso de 4K acusa 46% abaixo um título que está a 280px,
      //     ACIMA do piso. Medido: s05-titulo-1 → fs=140px · rect/offset=2 · efetivo 280 ≥ 260.
      //
      // A escala do <text> do SVG NÃO passa por aqui: lá a razão bbox→tela já embute zoom e
      // transform de uma vez (user space do viewBox não é pixel de tela).
      const escalaDe = (el) => {
        let sc = 1, e = el;
        while (e) {
          const cs = getComputedStyle(e);
          const t = cs.transform;
          if (t && t !== "none") {
            const n = (t.match(/-?[\d.e+-]+/g) || []).map(Number);
            // hypot da coluna da matriz = escala real mesmo com rotação junto
            if (t.startsWith("matrix3d") && n.length >= 16) sc *= Math.hypot(n[4], n[5], n[6]);
            else if (n.length >= 4) sc *= Math.hypot(n[1], n[3]);
          }
          const z = parseFloat(cs.zoom || "1");
          if (!isNaN(z) && z > 0) sc *= z;          // `zoom` é o próprio da tag: acumula subindo
          e = e.parentElement;                      // sobe até <html> inclusive
        }
        return sc || 1;
      };
      const pxEf = (el) => {
        let fs = parseFloat(getComputedStyle(el).fontSize) || 0;
        /**
         * ⚠️ `::first-line` SOBRESCREVE O TAMANHO E O GATE NÃO VIA (achado em 26/jul, no
         * `terras-raras-ranking`). O elemento declarava `font-size:280px` e um
         * `#n::first-line{font-size:130px}` — com UMA linha de conteúdo, a primeira linha É o texto
         * inteiro, então o número desenhava a **130px, menor que o rótulo ao lado**, invertendo a
         * hierarquia da tese. Reproduzi num arquivo de 2 linhas: o gate respondia "✓ TAMANHOS ok".
         *
         * `getComputedStyle(el)` devolve o tamanho do ELEMENTO, não o da linha renderizada. O
         * pseudo-elemento tem de ser consultado à parte — e quando ele é MENOR, é ele que manda no que
         * o espectador lê. Fico com o menor dos dois: o piso protege legibilidade, e legibilidade se
         * mede pelo glifo que aparece, não pelo que a folha de estilo pretendia.
         */
        try {
          const fl = parseFloat(getComputedStyle(el, "::first-line").fontSize);
          if (Number.isFinite(fl) && fl > 0 && fl < fs) fs = fl;
        } catch { /* pseudo-elemento indisponível neste engine */ }
        let sc = escalaDe(el);
        if (el.ownerSVGElement && el.getBBox) {
          try { const bb = el.getBBox(), rc = el.getBoundingClientRect(); if (bb.height > 0.5 && rc.height > 0.5) sc = rc.height / bb.height; } catch { /* bbox indisponível */ }
        }
        return fs * sc;
      };

      // Cada elemento vale pelo seu MAIOR tamanho enquanto esteve VISÍVEL: texto que entra
      // crescendo não pode ser reprovado pelo frame em que ainda era pequeno.
      // A chave é o TEXTO, não o nó: numa cena de mapa o mesmo rótulo é um elemento novo a cada
      // frame, e indexar por nó contaria cada aparição como um elemento diferente.
      const porEl = new Map();
      for (let t = 0; t <= DUR + 0.001; t += PASSO) {
        if (window.__renderAt) await window.__renderAt(t);
        // recoleta: o que existe AGORA na tela (ver o comentário da coleta acima)
        cands = coletar().filter((el) => !motivoOrn(el));
        for (const el of cands) {
          if (opEf(el) < OP_MIN) continue;
          const rc = el.getBoundingClientRect();
          if (rc.width < 2 || rc.height < 2) continue;
          const v = pxEf(el);
          // chave pelo TEXTO + papel: com recoleta, o mesmo rótulo é um NÓ novo a cada frame, e
          // indexar por nó transformaria um rótulo em dezenas de "elementos" distintos.
          const k = rotulo(el) + "\u0000" + papelDe(el);
          const cur = porEl.get(k);
          if (!cur || v > cur.px) porEl.set(k, { px: v, tx: rotulo(el), papel: papelDe(el) || null });
        }
      }
      return { textos: [...porEl.values()].map((x) => ({ ...x, px: Math.round(x.px) })).sort((a, c) => c.px - a.px), ornamentos };
    }, { PASSO, OP_MIN, DUR, ORN: PARA_TAMANHO });

    // ── VEREDITO ────────────────────────────────────────────────────────────────
    const { textos, ornamentos } = medido;
    // ⛔ A TRAVA DO VERDE VAZIO (ver o bloco da abertura, acima): sem prova de que a página abriu,
    // medir ZERO não pode virar `✓ ok`. Página que não abriu e página sem texto dão o mesmo
    // resultado aqui, e o único jeito honesto de tratar o empate é falhar fechado.
    // A prova de abertura é `load` OU o mapa ter assentado — em cena de mapa só existe a segunda.
    if (!abriuComCerteza && !textos.length && !ornamentos.length) {
      throw new Error("sem prova de que a página abriu (`load` não chegou e o mapa não assentou) E nenhum texto foi medido — não dá para distinguir cena vazia de página que não abriu");
    }
    const modo = modoDaCena(file);
    const declaraHeroi = textos.some((t) => t.papel === "heroi");
    /**
     * ⚠️ A CENA PRECISA PODER DIZER "EU NÃO TENHO HERÓI" — e até 07/ago/2026 não podia.
     *
     * `--sem-heroi` existia só como flag de linha de comando, o que não serve: quem chama o gate em
     * lote (o `qc-cena.mjs`, o portão do render) passa a mesma flag para todas as cenas ou para
     * nenhuma. Uma cena legítima sem herói ficava sem saída — e flag na mão vira regra que ninguém
     * aplica, exatamente o que o comentário da linha 98 já dizia sobre o caso oposto.
     *
     * Medido no `s24-multidao-brasileira` do `o-acre`: a cena tem TRÊS textos — dois chips de
     * legenda (`BRASILEIROS`, `BOLIVIANOS`, 128px) e o crédito. A informação dela é a **maré de
     * pontos** que representa as pessoas; não existe número grande porque não há número a dar. O
     * gate, em modo `dados`, elegia o maior texto como herói e cobrava piso 260 — reprovando uma
     * cena correta, e a reprovação barrava o render.
     *
     * O motivo é OBRIGATÓRIO (`data-qc-sem-heroi="…"`, 12+ caracteres), e é isso que separa a
     * declaração honesta da escapatória: quem escreve "a informação está no gráfico, não em cifra"
     * assumiu a decisão; quem não consegue escrever o motivo provavelmente está fugindo do piso.
     */
    const semHeroiDeclarado = await p.evaluate(() => {
      const el = document.querySelector("[data-qc-sem-heroi]");
      const m = el?.getAttribute("data-qc-sem-heroi")?.trim() || "";
      return m.length >= 12 ? m : null;
    });
    if (semHeroiDeclarado) console.log(`  ⓘ ${basename(file)}: cena declara não ter herói — "${semHeroiDeclarado}"`);
    const cobraHeroi = flag("heroi") || (!flag("sem-heroi") && !semHeroiDeclarado && (declaraHeroi || (modo ? MODO_COM_HEROI.has(modo) : true)));

    const falhas = [], avisos = [];
    /**
     * ⚠️ QUANDO O GATE NÃO SABE O MODO, ELE PRESUME — E A PRESUNÇÃO TEM DE FALAR (09/ago/2026).
     *
     * O `: true` acima é o lado seguro, e está certo: na dúvida, cobrar. O que faltava era DIZER que
     * houve dúvida. Medido no `ceuta`, na `estudio-render`: o projeto tinha sido baixado só com
     * `graphics/` e `_media/` — sem `espelho.json` —, então `modoDaCena` devolveu null e o gate
     * cobrou piso de herói de **duas cenas de MAPA**, que por definição não têm herói.
     *
     *     s03-mapa-ceuta   "58 MIL" → 246px < 260   (5% abaixo)
     *     s10-mapa-fnideq  "CEUTA"  → 146px < 260   (44% abaixo)
     *
     * O `s10` ficou barrado no portão e **não renderizou**; o lote fechou "118 de 124". Copiado o
     * espelho para a mesma máquina, os dois passam na hora — o defeito nunca esteve na arte.
     *
     * *A reprova por ignorância é indistinguível da reprova por defeito quando o laudo não diz qual
     * é.* Quem lê "246px < 260" conclui que a arte está pequena e vai mexer no HTML — que é o
     * conserto errado para um problema de insumo. O comentário da linha 98 já contava esta mesma
     * história para o compilado sem espelho; o que ele não previu foi o espelho existir e estar em
     * OUTRA MÁQUINA.
     */
    if (cobraHeroi && !modo && !declaraHeroi && !flag("heroi")) {
      avisos.push({ tipo: "modo-desconhecido", px: null, piso: null,
        msg: `não achei o modo desta cena (sem espelho.json ao lado de graphics/) — cobrei herói por precaução. ` +
             `Se for cena de mapa/footage, traga o espelho para esta máquina e re-meça ANTES de mexer no HTML` });
    }
    const maior = textos[0] || null;
    // primeiro item de propósito: explica todos os outros números da cena
    if (errosJS.length) falhas.push({ tipo: "pageerror", msg: `a cena tem erro de JS — ${errosJS[0]}${errosJS.length > 1 ? ` (+${errosJS.length - 1})` : ""}`, px: null, piso: null });

    // Cena SEM texto nenhum não tem tamanho de texto pra julgar: `s04-teaser-maquina` é footage
    // full-bleed com HUD em canvas e ZERO font-size no arquivo — reprová-la por "não alcançou o
    // piso de herói" é o gate cobrando de quem não jogou. Quem cobra cena muda é outro gate.
    const semTexto = textos.length === 0;
    if (cobraHeroi && !semTexto && maior.px < pisos.heroi)
      falhas.push({ tipo: "heroi", msg: `texto-herói "${maior.tx}"`, px: maior.px, piso: pisos.heroi });
    for (const t of textos) {
      const piso = t.papel && pisos[t.papel] ? pisos[t.papel] : PISO_LEGIB;
      if (t.px >= piso) continue;
      const item = { tipo: t.papel || "legibilidade", msg: `"${t.tx}"`, px: t.px, piso };
      // Piso de legibilidade sem papel declarado é ADVERTÊNCIA por default: o acervo real tem
      // crédito de foto a 40–58px e um gate que reprova 500 cenas antigas de uma vez vira ruído,
      // e ruído em gate ensina a ignorar gate. `--estrito` transforma em reprovação.
      (t.papel || ESTRITO ? falhas : avisos).push(item);
    }

    const quanto = (f) => `${f.px}px < ${f.piso} (${f.piso ? Math.round((1 - f.px / f.piso) * 100) : 0}% abaixo)`;
    // [porte Régie] o laudo diz de onde vieram os pisos — ofício puro, ou ofício + marca que subiu algum
    const subiu = Object.keys(PISOS_OFICIO_4K).filter((r) => (MARCA.pisos[r] ?? 0) > PISOS_OFICIO_4K[r]);
    const deOnde = `marca: ${MARCA.origem}${subiu.length ? ` (subiu ${subiu.join("/")})` : ""}`;
    const ctx = `palco ${palco.w}×${palco.h}` + (k !== 1 ? ` · pisos ${pisos.heroi}/${pisos.rotulo}/${pisos.eixo} (escalados de 4K)` : ` · pisos ${pisos.heroi}/${pisos.rotulo}/${pisos.eixo}`) + ` · ${deOnde}`;
    laudos.push({ file, palco, modo, cobraHeroi, maior: maior?.px ?? null, pisos, marca: { origem: MARCA.origem, arquivo: MARCA.arquivo }, falhas, avisos, ornamentos });

    if (!JSON_OUT) {
      if (ornamentos.length) console.log(`  ⊘ ${ornamentos.length} ornamento(s) fora da conta: ${ornamentos.map((s) => `"${s}"`).join(", ")}`);
      if (!falhas.length) {
        const heroiTxt = semTexto ? "sem texto no palco" : cobraHeroi ? `${maior.px}px ≥ ${pisos.heroi}` : "não cobrado";
        console.log(`✓ TAMANHOS ok em ${file} (${ctx} · modo ${modo || "?"} · herói ${heroiTxt}${avisos.length ? ` · ${avisos.length} aviso(s)` : ""})`);
      } else {
        console.log(`✗ ${falhas.length} reprovação(ões) em ${file} (${ctx} · modo ${modo || "?"}):`);
        // falha sem piso (pageerror) não tem "quanto abaixo" — inventar 0px<0 seria ruído
        for (const f of falhas) console.log(`  • [${f.tipo}] ${f.msg}${f.piso == null ? "" : ` → ${quanto(f)}`}`);
      }
      for (const a of avisos.slice(0, 6)) console.log(`  ▲ [aviso] ${a.msg} → ${quanto(a)}`);
      if (avisos.length > 6) console.log(`  ▲ … e mais ${avisos.length - 6} aviso(s) de legibilidade`);
    }
  } catch (e) {
    laudos.push({ file, erro: (e.message || String(e)).replace(/\s+/g, " ").slice(0, 140) });
    if (!JSON_OUT) console.log(`⚠ NÃO MEDIDO — ${file}: ${(e.message || "").replace(/\s+/g, " ").slice(0, 140)}`);
  }
  await p.close();
}
await b.close();

if (JSON_OUT) console.log(JSON.stringify(laudos, null, 2));
/**
 * ⚠️ "ERRO AO MEDIR" NÃO É "REPROVADA" (05/ago/2026, achado nº 2 — o terceiro estado).
 *
 * O `catch` acima captura o arquivo que não deu para medir: a página não abriu, o `__renderAt` da
 * cena estourou dentro do `page.evaluate`, o Chrome engasgou. Isso entrava em `reprovadas` junto com
 * herói abaixo do piso e saía **1** — o código de "MEDI e reprovei". Quem lê (o `qc-cena.mjs`, e o
 * agente que roda o gate sozinho, como a doutrina manda) ia consertar uma cena sem defeito.
 *
 * Agora as duas classes saem por portas diferentes: **1 = medi e reprovei** (precedência, porque é
 * acionável agora) · **2 = NÃO MEDI** · **0 = medi e passou**. Onda medida deste conserto: **zero** —
 * `erro` não apareceu em nenhuma das cenas reais do acervo.
 */
const reprovadas = laudos.filter((l) => l.falhas?.length);
const naoMedidas = laudos.filter((l) => l.erro);
if (reprovadas.length) {
  if (!JSON_OUT && arquivos.length > 1)
    console.log(`\n✗ GATE DE TAMANHO: ${reprovadas.length}/${laudos.length} cena(s) reprovada(s)${naoMedidas.length ? ` · ⚠ ${naoMedidas.length} NÃO MEDIDA(S)` : ""}`);
  process.exit(1);
}
if (naoMedidas.length) {
  if (!JSON_OUT && arquivos.length > 1)
    console.log(`\n⚠ GATE DE TAMANHO: ${naoMedidas.length}/${laudos.length} cena(s) NÃO MEDIDA(S) — gate que não mediu não é gate que aprovou`);
  process.exit(2);
}
if (!JSON_OUT && arquivos.length > 1) console.log(`\n✓ GATE DE TAMANHO: ${laudos.length}/${laudos.length} cena(s) no piso`);
