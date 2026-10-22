// ═════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// CÓPIA DO GUIA DE MAPAS — portao-margens.mjs
// De onde veio: ferramentas/portao-margens.mjs (versão 2) de um canal que usa a Régie (a pré-v1, commit 7ab9543 do
// motor, com o molde em scripts/ e o npm do molde: playwright-core e sharp). Lá, quem constrói a cena roda antes de
// entregar desde 14/10/2026, e ela foi provada contra as cenas de um vídeo inteiro (as que tinham reprovado reprovam, as
// aprovadas passam) e contra o clipe 4K renderizado (a borda da pílula a ±1–3 px).
// O que mudou nesta cópia:
//   - os limites: na origem, só do marca/tokens.css do canal; aqui, também da linha de comando (--palco, --margem-x,
//     --margem-topo, --faixa-credito-y, --credito-x, --credito-x-fim, --canto), que ganha do arquivo, e --tokens=<css>
//     para outro arquivo. Limite faltando sai 2 (uso errado), nunca com o número de outro canal;
//   - o nome da credencial falsa que a cena de mapa recebe: --credencial=<NOME> (padrão MAPTILER_KEY, o do perfil
//     maptiler do motor);
//   - o REGIE_MOTOR é obrigatório (sem ele, sai 2), sem caminho cravado;
//   - os textos da régua dizem os números do SEU canal, não a página da marca da origem;
//   - os comentários sem caminho, vídeo nem lugar do canal de origem. A medida é a mesma, linha por linha.
// O que NÃO foi provado fora daquele canal: aqui se conferiu, nesta máquina, que a cópia dá o mesmo veredito e os mesmos
// itens que a original em cenas do canal de origem, com os mesmos limites passados pela linha de comando (com e sem
// mapa). A prova inteira da origem (o portao-margens-provar.mjs, presa às cenas daquele canal) não veio. Em outro canal,
// rode primeiro numa cena que você sabe certa e numa que você sabe errada.
// ═════════════════════════════════════════════════════════════════════════════════════════════════════════════════
//
// portao-margens — a área segura do canal, medida na tela, sob a câmera, do começo ao fim da cena: a margem das laterais
// e do topo, a faixa do crédito (abaixo dela, só crédito, que começa em x = credito-x e termina até credito-x-fim) e o
// canto reservado (um quadrado no canto inferior direito: a marca-d'água do YouTube), para todo texto, pílula, cartão,
// foto, borda de papel e fita. Quem constrói a cena (o editor-de-arte e o mapista) roda antes de entregar e conserta até
// sair 0; quem julga (o qc-visual) lê a saída como lê os portões, sem remedir no olho.
//
// Uso (da raiz do canal, com o REGIE_MOTOR=<motor> no mesmo comando):
//   node ferramentas/portao-margens.mjs <html|pasta|out/<proj>…> [--so=s07,s15] [--passo=0.1] [--json] [--registro=<arquivo.jsonl>|--sem-registro]
//        [--tokens=<css>] [--palco=3840x2160] [--margem-x=<px>] [--margem-topo=<px>] [--faixa-credito-y=<px>]
//        [--credito-x=<px>] [--credito-x-fim=<px>] [--canto=<px>] [--credencial=<NOME>]
//   Pasta: as .html dela (sem as _*.html); out/<proj>: as de graphics/. No PowerShell, o mesmo comando
//   ($env:REGIE_MOTOR='<motor>'; node ferramentas/portao-margens.mjs …).
//   --so        só estas cenas (pelo nome, sem .html).
//   --passo     o passo das amostras, em segundos (padrão 0,1; o último quadro, duração − 1/30 s, sempre entra).
//   --json      uma linha JSON por cena, no lugar do texto.
//   --registro  onde gravar uma linha por cena (padrão: out/<proj>/_tmp/portao-margens.jsonl, quando a cena mora em
//               out/<proj>/graphics/; fora de out/, só com --registro). --sem-registro não grava nada.
//   Os limites (em px, no palco da cena): do tokens.css do canal (padrão marca/tokens.css; outro com --tokens=), pelos
//   nomes --palco-largura, --palco-altura, --safe-x, --safe-y, --faixa-credito-y, --credito-x, --credito-x-fim e
//   --canto-reservado; ou da linha de comando, que ganha do arquivo:
//     --palco=<L>x<A>       o palco (o 4k-native do motor é 3840x2160);
//     --margem-x            a margem das laterais;            --margem-topo     a margem do topo;
//     --faixa-credito-y     abaixo deste y, só crédito;       --credito-x       o crédito começa em x ≥ este;
//     --credito-x-fim       o crédito termina até este x;     --canto           o lado do quadrado reservado no canto
//                                                                               inferior direito.
//   Exemplo, os valores do canal de origem (GOSTO dele, não regra): --palco=3840x2160 --margem-x=200 --margem-topo=160
//   --faixa-credito-y=1880 --credito-x=200 --credito-x-fim=1720 --canto=400.
// Saída: 0 = mediu e passou · 1 = mediu e reprovou (em alguma cena) · 2 = NÃO MEDIDO (em alguma cena, e nenhuma
// reprovou) ou uso errado. A reprovação ganha do NÃO MEDIDO no código; a saída lista as duas.
//
// A cena de mapa se mede pelo HTML, como a sem mapa, SEM pedir tile nenhum e SEM a pré-carga das chaves (com ela, o
// portão se recusa, exit 2):
//   - a cena recebe uma chave falsa ("sem-chave-portao-margens", com o nome do --credencial), só para a base de mapa
//     criar o mapa;
//   - todo pedido http(s) da página é respondido aqui, sem sair do PC: o tile de satélite e o de relevo com um ladrilho
//     cinza feito na hora; o resto é cortado. E o Chrome sobe com o DNS desligado (--host-resolver-rules), para nada
//     escapar nem por engano. A saída conta os pedidos respondidos e cortados (`rede`), e nenhum vai à rede;
//   - a câmera, o map.project() e tudo o que a cena posiciona por eles são os mesmos do render, porque não dependem do
//     satélite. O que se mede é DOM (pílula, rótulo, cartão, guia de texto), não pixel de mapa.
//   - MENOS na cena com RELEVO 3D (a que pede tile de terreno): o relevo daqui é plano (0 m), e o map.project() com relevo
//     depende da altitude do ponto. Medido na origem contra o clipe 4K: a pílula de um rio ao nível do mar no mesmo
//     lugar, a 0–1 px; a de um nome sobre a montanha 15 a 19 px mais alta no clipe. Por isso a cena com relevo sai NÃO
//     MEDIDO, com o que se mediu como indício (itens_indicativos), e a margem dela se confere no clipe de prova.
//   - Não mede o que é camada do MapLibre (o canvas: território, linha, rota): fica com o olho.
//   - Mapa que não assentou (o __aguardarMapa não respondeu em 8 s) ou que declarou erro (window.__erroCena) é NÃO MEDIDO.
//   - Por que não o clipe 4K: a medida por cor no clipe achou pílula onde havia satélite claro. O HTML com o mapa sem
//     satélite dá a caixa exata, de graça.
//
// O que conta:
//   - texto: a caixa do texto próprio de cada elemento (Range), recortada pelos ancestrais com overflow ou clip-path;
//   - caixa: elemento com fundo, borda ou imagem de fundo, e <img>, <video> e <canvas> (a pílula, o cartão, a moldura, a
//     foto). Elemento de tela cheia (≥ 90 % da largura ou da altura do palco) é base ou textura, e fica de fora (o texto
//     dele conta); o PAPEL de tela cheia (o documento mais alto que o quadro, que rola) também fica de fora da medida, mas
//     entra na passagem (abaixo);
//   - papel: classe papel, pagina ou folha, ou data-qc-margem="papel": conta no topo e nas laterais; na faixa do
//     crédito, só o texto dele conta (a borda de papel sem texto que desce um pouco na faixa não conta);
//   - fita: classe com "fita": conta como o elemento;
//   - crédito: data-qc-papel="credito" no elemento ou num ancestral, ou caixa cujo texto visível é todo de crédito (a
//     caixa que só agrupa os créditos): pode descer abaixo da faixa, começa em x ≥ credito-x e termina até credito-x-fim.
//   - "no ar": opacidade acumulada (o produto até a raiz) ≥ 0,5, display e visibility visíveis, caixa ≥ 2 × 2 px, e
//     alguma parte dentro do quadro. Tudo na tela, sob a câmera (o getBoundingClientRect é a envolvente dos 4 cantos
//     transformados: já inclui câmera, giro e rotação).
//   - Sem tolerância: só se arredonda o meio pixel.
// O que não conta:
//   - a sombra (classe ou id com "sombra" ou "shadow", ou data-qc-margem="sombra");
//   - a PASSAGEM: o objeto (papel, foto, fita, <img>/<video>/<canvas>, o que contém um deles, ou
//     data-qc-margem="objeto") enquanto se move a mais de 60 px/s num trecho de movimento que (a) cruza a borda do
//     quadro (entra de fora ou sai para fora) ou (b) começa na primeira aparição dele ou termina na saída (o pouso de
//     uma foto que entra, a fita que cola e a que sai com a folha). O texto e a pílula de dentro do objeto seguem o
//     objeto (também os do papel de tela cheia que rola; o #cam e o grupo que só contém uma <img> não são objeto, e a
//     câmera rápida não isenta nada). A pílula e o rótulo soltos nunca estão de passagem: o rótulo preso a um ponto que
//     a câmera leva para fora tem de sair (esmaecer) antes de cruzar a margem. Quando o objeto desacelera abaixo de
//     60 px/s, ele já conta: o fim do pouso, o assentamento que passa do ponto e volta, a câmera que leva o objeto
//     parado para fora da margem.
// Aviso, que não reprova (o código de saída não muda): o crédito com 3 linhas ou mais, e o crédito cuja última linha
// tem uma palavra só.
//
// O que NÃO é dela (está noutro portão do molde, que continua rodando):
//   - texto cortado pela borda do QUADRO: o qc-fora-do-quadro (no qc-cena). Aqui ele aparece como fora da margem;
//   - tamanho da letra e do crédito: qc-tamanho; texto sobre texto: check-overlap; contagem: qc-carga;
//   - contraste do crédito: qc-rodape-contraste (e, em cena de mapa, o rodape do portao-mapa.mjs);
//   - o que fica com o olho: palavra de folha escaneada lavada pela fita ou cortada pelo recorte (é pixel da imagem,
//     não DOM), texto que entra antes da voz, tempo no ar, geometria e satélite, o que é camada do MapLibre, e o
//     pseudo-elemento (::before/::after) que sai da caixa do dono: ele não está no DOM, e conta só a caixa do dono.
//   - a amostra é a cada 0,1 s (3 quadros): um excesso que dure 1 ou 2 quadros entre duas amostras pode passar.
// Não edita a cena: nenhum atributo nem elemento é posto no DOM.
import { existsSync, readFileSync, readdirSync, statSync, appendFileSync, mkdirSync } from "node:fs";
import { resolve, join, basename, dirname, sep } from "node:path";
import { pathToFileURL } from "node:url";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";

export const VERSAO = 2;   // v2 da origem: o papel de tela cheia entra na passagem; relevo 3D é NÃO MEDIDO; o canto pelo quadrilátero do girado
const NAO_MEDIDO = 2;
const RAIZ = process.cwd();
export const CHAVE_FALSA = "sem-chave-portao-margens";
const LIMIAR_MOV = 60;   // px/s: acima disto o objeto está em movimento (a câmera do RIG anda uns 4 px/s na margem)
const TOL = 0.5;         // meio pixel de arredondamento, e nada mais
const TETO_MAPA_MS = 8000;

function uso(msg) {
  console.error(`portao-margens: ${msg}`);
  console.error("uso: node ferramentas/portao-margens.mjs <html|pasta|out/<proj>…> [--so=s07,s15] [--passo=0.1] [--json] [--registro=<arquivo.jsonl>|--sem-registro] [--tokens=<css>] [--palco=<L>x<A>] [--margem-x=] [--margem-topo=] [--faixa-credito-y=] [--credito-x=] [--credito-x-fim=] [--canto=] [--credencial=<NOME>]  (o REGIE_MOTOR=<motor> no mesmo comando; o topo do arquivo diz como)");
  process.exit(NAO_MEDIDO);
}

// ── a marca: os limites do tokens.css (e, nesta cópia, da linha de comando) ───────────────────────────────────────────────────────────────────────────────
export function limitesDaMarca(css) {
  const px = (nome) => { const m = css.match(new RegExp(`--${nome}\\s*:\\s*(-?[\\d.]+)px`)); return m ? Number(m[1]) : null; };
  const L = { W: px("palco-largura"), H: px("palco-altura"), SX: px("safe-x"), SY: px("safe-y"), FY: px("faixa-credito-y"),
    CX: px("credito-x"), CXF: px("credito-x-fim"), CANTO: px("canto-reservado") };
  const faltam = Object.entries(L).filter(([, v]) => v == null).map(([k]) => k);
  return { L, faltam };
}

// ── o que se coleta em cada instante, dentro da página ─────────────────────────────────────────────────────────────
// Devolve os itens no ar (texto, caixa, papel, fita), com a caixa recortada pelos ancestrais, e a caixa de cada OBJETO
// (para a passagem), mesmo fora do quadro. Não põe nada no DOM: o id de cada elemento fica num WeakMap da página.
export function coletar({ W, H, OP }) {
  if (!window.__pmId) { window.__pmId = new WeakMap(); window.__pmN = 0; window.__pmObj = new WeakMap(); }
  const idDe = (el) => { let v = window.__pmId.get(el); if (v == null) { v = ++window.__pmN; window.__pmId.set(el, v); } return v; };
  const clsDe = (el) => (typeof el.className === "string" ? el.className : (el.className && el.className.baseVal) || "");
  const nomeDe = (el) => el.id ? "#" + el.id : el.tagName.toLowerCase() + (clsDe(el).trim() ? "." + clsDe(el).trim().split(/\s+/).slice(0, 3).join(".") : "");
  const decl = (el) => (el.getAttribute && el.getAttribute("data-qc-margem")) || "";
  const csC = new Map(); const cs = (el) => { let v = csC.get(el); if (!v) { v = getComputedStyle(el); csC.set(el, v); } return v; };
  const opC = new Map();
  const opac = (el) => { if (!el || el === document.documentElement || el.nodeType !== 1) return 1; if (opC.has(el)) return opC.get(el);
    const v = (+cs(el).opacity) * opac(el.parentElement); opC.set(el, v); return v; };
  const ehSombra = (el) => decl(el) === "sombra" || /sombra|shadow/i.test(clsDe(el) + " " + (el.id || ""));
  const ehPapel = (el) => decl(el) === "papel" || /(^|\s)(papel|pagina|folha)(\s|$)/i.test(clsDe(el));
  const ehFita = (el) => /fita/i.test(clsDe(el));
  const ehObjeto = (el) => {
    let v = window.__pmObj.get(el);
    if (v == null) { v = decl(el) === "objeto" || ehPapel(el) || ehFita(el) || /^(IMG|VIDEO|CANVAS)$/.test(el.tagName) || !!el.querySelector("img,video,canvas"); window.__pmObj.set(el, v); }
    return v;
  };
  const clipC = new Map();
  const corta = (a, b) => { const x = Math.max(a.x, b.x), y = Math.max(a.y, b.y), x2 = Math.min(a.x2, b.x2), y2 = Math.min(a.y2, b.y2); return x2 > x && y2 > y ? { x, y, x2, y2 } : null; };
  const clipDe = (el) => { // o recorte dos ancestrais (overflow ≠ visible, clip-path): null = sem recorte
    if (!el || el === document.body || el === document.documentElement) return null;
    if (clipC.has(el)) return clipC.get(el);
    let c = clipDe(el.parentElement);
    const s = cs(el);
    const r = el.getBoundingClientRect();
    // o recorte de tela cheia (o palco com overflow hidden) é o próprio quadro: não se aplica, para a medida dizer quanto
    // o texto passa da borda (−111, e não 0); o que fica inteiro fora do quadro já não conta (julgar)
    const palco = r.width >= 0.9 * W && r.height >= 0.9 * H;
    if (!palco && (s.overflowX !== "visible" || s.overflowY !== "visible" || (s.clipPath && s.clipPath !== "none"))) {
      const box = { x: r.left, y: r.top, x2: r.right, y2: r.bottom };
      c = c ? (corta(c, box) || { x: 0, y: 0, x2: 0, y2: 0 }) : box;
    }
    clipC.set(el, c); return c;
  };
  const recorte = (el, b) => { const c = clipDe(el.parentElement); return c ? corta(b, c) : b; };
  // o quadrilátero de verdade do elemento girado (o getBoundingClientRect é a envolvente, e no CANTO, que é um teste em
  // duas dimensões, a envolvente de uma foto girada entra no quadrado sem a foto entrar: medido na origem, 14/10/2026). Giro e escala somados da cadeia de transform/rotate/scale; o centro é o da envolvente. Se a envolvente dos
  // 4 cantos calculados não bate com a do navegador a 2 px (skew, escala desigual, 3D), devolve null e vale a envolvente.
  const quadDe = (el, r) => {
    if (!(el instanceof HTMLElement)) return null;
    let ang = 0, sc = 1;
    for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
      const st = cs(n);
      if (st.transform && st.transform !== "none") { const m = st.transform.match(/matrix(?:3d)?\(([^)]+)\)/); if (!m) return null; const v = m[1].split(",").map(Number); ang += Math.atan2(v[1], v[0]); sc *= Math.hypot(v[0], v[1]); }
      if (st.rotate && st.rotate !== "none") { const m = st.rotate.match(/^(-?[\d.]+)deg$/); if (!m) return null; ang += (+m[1]) * Math.PI / 180; }
      if (st.scale && st.scale !== "none") { const q = st.scale.split(/\s+/).map(Number); if (q.length > 1 && Math.abs(q[0] - q[1]) > 1e-6) return null; sc *= q[0]; }
    }
    if (Math.abs(Math.sin(ang)) < 1e-4) return null;
    const w = el.offsetWidth * sc / 2, h = el.offsetHeight * sc / 2, cx = (r.left + r.right) / 2, cy = (r.top + r.bottom) / 2, c = Math.cos(ang), s = Math.sin(ang);
    const q = [[-w, -h], [w, -h], [w, h], [-w, h]].map(([x, y]) => [cx + x * c - y * s, cy + x * s + y * c]);
    const xs = q.map((p) => p[0]), ys = q.map((p) => p[1]);
    if (Math.abs(Math.min(...xs) - r.left) > 2 || Math.abs(Math.max(...xs) - r.right) > 2 || Math.abs(Math.min(...ys) - r.top) > 2 || Math.abs(Math.max(...ys) - r.bottom) > 2) return null;
    return q;
  };
  const alfa = (cor) => { if (!cor || cor === "transparent") return 0; const m = cor.match(/rgba?\(([^)]+)\)/); if (!m) return 1; const p = m[1].split(/[ ,/]+/).filter(Boolean); return p.length > 3 ? parseFloat(p[3]) : 1; };
  const itens = [], objs = [];
  for (const el of document.body.querySelectorAll("*")) {
    const tag = el.tagName;
    if (/^(SCRIPT|STYLE|TEMPLATE|NOSCRIPT|LINK|META)$/.test(tag)) continue;
    if (el.closest(".maplibregl-control-container,.maplibregl-ctrl,.maplibregl-canvas-container")) continue;
    const s = cs(el);
    if (s.display === "none" || s.visibility !== "visible") continue;
    if (el.closest("[data-qc-margem='sombra']") || ehSombra(el)) continue;
    let anc = el.parentElement, sombraAnc = false;
    while (anc && anc !== document.body) { if (ehSombra(anc)) { sombraAnc = true; break; } anc = anc.parentElement; }
    if (sombraAnc) continue;
    const op = opac(el);
    if (op < OP) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    const eb = { x: r.left, y: r.top, x2: r.right, y2: r.bottom };
    const id = idDe(el);
    const ancObj = []; for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) if (ehObjeto(p)) ancObj.push(idDe(p));
    const cheia = r.width >= 0.9 * W || r.height >= 0.9 * H;
    // o objeto de tela cheia não se mede (é base), mas o PAPEL de tela cheia (o documento mais alto que o quadro, que rola:
    // medido na origem) entra na passagem: o texto dele que sai pelo alto durante o rolo segue o papel.
    // O #cam e o grupo que só CONTÉM uma <img> não entram: a câmera rápida não isenta a pílula.
    const obj = cheia ? (decl(el) === "objeto" || ehPapel(el)) : ehObjeto(el);
    if (obj) objs.push({ id, b: eb });
    const cred = !!el.closest('[data-qc-papel="credito"]');
    // o texto próprio
    const nos = [...el.childNodes].filter((c) => c.nodeType === 3 && c.textContent.trim());
    if (nos.length) {
      let x = Infinity, y = Infinity, x2 = -Infinity, y2 = -Infinity, linhas = [];
      for (const tn of nos) {
        const rg = document.createRange(); rg.selectNodeContents(tn);
        for (const q of rg.getClientRects()) { if (q.width < 1 || q.height < 1) continue; x = Math.min(x, q.left); y = Math.min(y, q.top); x2 = Math.max(x2, q.right); y2 = Math.max(y2, q.bottom); }
      }
      if (x === Infinity && el instanceof SVGElement) { x = r.left; y = r.top; x2 = r.right; y2 = r.bottom; }
      if (x < Infinity) {
        const b = recorte(el, { x, y, x2, y2 });
        const item = { id: id + ":t", el: id, nome: nomeDe(el), k: "texto", cred, papel: false, obj: obj ? id : null, anc: ancObj, b,
          s: nos.map((c) => c.textContent.trim()).join(" ").replace(/\s+/g, " ").slice(0, 40) };
        itens.push(item);
      }
    }
    // a caixa
    if (!cheia) {
      const temFundo = alfa(s.backgroundColor) > 0.04 || s.backgroundImage !== "none" ||
        ["Top", "Right", "Bottom", "Left"].some((l) => parseFloat(s["border" + l + "Width"]) > 0 && s["border" + l + "Style"] !== "none" && alfa(s["border" + l + "Color"]) > 0.04);
      const midia = /^(IMG|VIDEO|CANVAS)$/.test(tag);
      if (temFundo || midia) {
        // a caixa que só agrupa crédito: todo texto visível dela é de crédito
        let credG = cred;
        if (!credG && el.querySelector('[data-qc-papel="credito"]')) {
          const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let n, alheio = false;
          while ((n = w.nextNode())) { if (n.textContent.trim() && !n.parentElement.closest('[data-qc-papel="credito"]')) { alheio = true; break; } }
          credG = !alheio;
        }
        // a impressão da página (a <img> do scan dentro do papel) é o papel: a borda dela sem texto pode descer na faixa
        let naPagina = false; if (midia) for (let q = el.parentElement; q && q !== document.body; q = q.parentElement) if (ehPapel(q)) { naPagina = true; break; }
        const k = ehFita(el) ? "fita" : (ehPapel(el) || naPagina) ? "papel" : "caixa";
        const bR = recorte(el, eb), semRecorte = bR && bR.x === eb.x && bR.y === eb.y && bR.x2 === eb.x2 && bR.y2 === eb.y2;
        itens.push({ id: String(id), el: id, nome: nomeDe(el), k, cred: credG, papel: k === "papel", obj: obj ? id : null, anc: ancObj, b: bR, q: semRecorte ? quadDe(el, r) : null, s: "" });
      }
    }
  }
  // as linhas de cada crédito declarado (para o aviso da quebra)
  const creditos = [];
  for (const el of document.querySelectorAll('[data-qc-papel="credito"]')) {
    if (el.parentElement && el.parentElement.closest('[data-qc-papel="credito"]')) continue;
    if (opac(el) < OP || cs(el).display === "none") continue;
    const txt = (el.innerText || el.textContent || "").trim(); if (!txt) continue;
    const rg = document.createRange(); rg.selectNodeContents(el);
    const tops = [...rg.getClientRects()].filter((q) => q.width >= 1 && q.height >= 1).map((q) => Math.round(q.top));
    const linhasY = [...new Set(tops)].sort((a, b) => a - b).filter((v, i, a) => i === 0 || v - a[i - 1] > 8);
    // a última linha, pelas palavras cuja caixa começa na última linha
    let ultima = "";
    if (linhasY.length > 1) {
      const yl = linhasY[linhasY.length - 1];
      const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let n; const pal = [];
      while ((n = w.nextNode())) {
        const re = /\S+/g; let m;
        while ((m = re.exec(n.textContent))) { const r2 = document.createRange(); r2.setStart(n, m.index); r2.setEnd(n, m.index + m[0].length); const q = r2.getClientRects()[0]; if (q && Math.abs(Math.round(q.top) - yl) <= 8) pal.push(m[0]); }
      }
      ultima = pal.join(" ");
    }
    creditos.push({ el: idDe(el), nome: nomeDe(el), linhas: linhasY.length, ultima, s: txt.replace(/\s+/g, " ").slice(0, 60) });
  }
  return { itens, objs, creditos };
}

// ── a passagem: o objeto que entra de fora do quadro ou sai para fora dele, enquanto se move ───────────────────────
export function passagens(amostras, W, H, LIM = LIMIAR_MOV) {
  // amostras: [{t, objs: Map id → caixa}] → Map id → Set(índices de amostra em passagem)
  const ids = new Set(); for (const a of amostras) for (const id of a.objs.keys()) ids.add(id);
  const cruza = (b) => b.x < 0 || b.y < 0 || b.x2 > W || b.y2 > H;
  const res = new Map();
  for (const id of ids) {
    const n = amostras.length, mov = new Array(n).fill(false);
    const vel = (i, j) => { const a = amostras[i].objs.get(id), b = amostras[j].objs.get(id); if (!a || !b) return 0;
      const dt = Math.abs(amostras[j].t - amostras[i].t) || 1e-6; return Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y), Math.abs(a.x2 - b.x2), Math.abs(a.y2 - b.y2)) / dt; };
    for (let i = 0; i < n; i++) {
      if (!amostras[i].objs.has(id)) continue;
      mov[i] = (i > 0 && vel(i - 1, i) > LIM) || (i < n - 1 && vel(i, i + 1) > LIM);
    }
    const set = new Set();
    for (let i = 0; i < n; ) {
      if (!mov[i]) { i++; continue; }
      let j = i; while (j + 1 < n && mov[j + 1]) j++;
      // o trecho de movimento [i, j] é passagem se (a) cruza a borda do quadro no trecho (ou na amostra de cada lado): entra de fora ou sai para fora;
      // (b) o trecho começa na primeira aparição do objeto (a entrada, o pouso da "mão que arruma") ou termina na
      //     saída dele (na amostra seguinte ele já não está no ar)
      let passa = (i === 0 || !amostras[i - 1].objs.has(id)) || (j < n - 1 && !amostras[j + 1].objs.has(id));
      for (let k = Math.max(0, i - 1); !passa && k <= Math.min(n - 1, j + 1); k++) { const b = amostras[k].objs.get(id); if (b && cruza(b)) passa = true; }
      // o trecho inteiro é passagem; quando o objeto desacelera abaixo do limiar (o fim da entrada, o pico de um
      // assentamento que passa do ponto e volta), a amostra já não está em movimento e conta
      if (passa) for (let k = i; k <= j; k++) set.add(k);
      i = j + 1;
    }
    if (set.size) res.set(id, set);
  }
  return res;
}

// quanto o quadrilátero (convexo) entra no retângulo: a menor sobreposição entre os eixos de separação (0 = não toca)
export function penetracao(q, R) {
  const rect = [[R.x, R.y], [R.x2, R.y], [R.x2, R.y2], [R.x, R.y2]];
  const eixos = [[1, 0], [0, 1]];
  for (let i = 0; i < 2; i++) { const [a, b] = [q[i], q[i + 1]]; const nx = -(b[1] - a[1]), ny = b[0] - a[0], L = Math.hypot(nx, ny) || 1; eixos.push([nx / L, ny / L]); }
  let pen = Infinity;
  for (const [ex, ey] of eixos) {
    const pa = q.map((p) => p[0] * ex + p[1] * ey), pb = rect.map((p) => p[0] * ex + p[1] * ey);
    const ov = Math.min(Math.max(...pa), Math.max(...pb)) - Math.max(Math.min(...pa), Math.min(...pb));
    if (ov <= 0) return 0;
    pen = Math.min(pen, ov);
  }
  return pen;
}

// ── a régua: cada item, em cada instante, contra os limites ────────────────────────────────────────────────────────
export function julgar(amostras, L, opts = {}) {
  const W = L.W, H = L.H;
  const pas = passagens(amostras, W, H, opts.limiarMov ?? LIMIAR_MOV);
  const emPassagem = (it, i) => [it.obj, ...(it.anc || [])].some((id) => id != null && pas.get(id)?.has(i));
  const fora = new Map(); const medidos = new Set(); let isentas = 0;
  const canto = { x: W - L.CANTO, y: H - L.CANTO, x2: W, y2: H };
  const REGRA = "a área segura do canal";
  for (let i = 0; i < amostras.length; i++) {
    const { t, itens } = amostras[i];
    for (const it of itens) {
      const b = it.b; if (!b) continue;
      if (b.x2 <= 0 || b.y2 <= 0 || b.x >= W || b.y >= H) continue;   // fora do quadro inteiro: não está na tela
      medidos.add(it.id);
      const prob = [];
      if (b.y < L.SY - TOL) prob.push(["topo", b.y, L.SY, "≥", REGRA + `, margem de ${L.SY} px no topo`]);
      if (b.x < (it.cred ? L.CX : L.SX) - TOL) prob.push(["esquerda", b.x, it.cred ? L.CX : L.SX, "≥", REGRA + (it.cred ? `, o crédito começa em x = ${L.CX}` : `, margem de ${L.SX} px nas laterais`)]);
      if (it.cred) { if (b.x2 > L.CXF + TOL) prob.push(["fim-do-credito", b.x2, L.CXF, "≤", REGRA + `, o crédito termina até x = ${L.CXF} (longo quebra em duas linhas)`]); }
      else {
        if (b.x2 > W - L.SX + TOL) prob.push(["direita", b.x2, W - L.SX, "≤", REGRA + `, margem de ${L.SX} px nas laterais`]);
        if (!it.papel && b.y2 > L.FY + TOL) prob.push(["faixa-do-credito", b.y2, L.FY, "≤", REGRA + `, abaixo de y = ${L.FY} só crédito`]);
        if (!it.papel && it.k !== "fita") { const pen = it.q ? penetracao(it.q, canto) : Math.min(b.x2 - canto.x, b.y2 - canto.y);
          if (pen > TOL) prob.push(["canto", pen, 0, "≤", REGRA + `, canto reservado de ${L.CANTO} × ${L.CANTO} px (marca-d'água do YouTube)`]); }
      }
      if (!prob.length) continue;
      if (emPassagem(it, i)) { isentas++; continue; }
      for (const [lado, v, lim, sinal, regra] of prob) {
        const k = it.id + "|" + lado, pior = fora.get(k);
        const pioria = !pior || (sinal === "≥" ? v < pior.v : v > pior.v);
        if (!pior) fora.set(k, { lado, v, lim, sinal, regra, t, t0: t, t1: t, n: 1, nome: it.nome, k: it.k, s: it.s, cred: it.cred });
        else { pior.n++; pior.t1 = t; if (pioria) { pior.v = v; pior.t = t; } }
      }
    }
  }
  const itens = [...fora.values()].sort((a, b) => a.t0 - b.t0).map((a) => ({ ...a, v: Math.round(a.v) }));
  return { itens, medidos: medidos.size, isentas_passagem: isentas, objetos_em_passagem: pas.size };
}

function avisosDoCredito(amostras) {
  const vistos = new Map();
  for (const { t, creditos } of amostras) for (const c of creditos || []) {
    const a = vistos.get(c.el) || { nome: c.nome, s: c.s, maxLinhas: 0, sozinha: null };
    a.maxLinhas = Math.max(a.maxLinhas, c.linhas);
    if (c.linhas > 1 && c.ultima && !/\s/.test(c.ultima) && !a.sozinha) a.sozinha = { t, palavra: c.ultima };
    vistos.set(c.el, a);
  }
  const avisos = [];
  for (const a of vistos.values()) {
    if (a.maxLinhas >= 3) avisos.push({ tipo: "credito-3-linhas", nome: a.nome, s: a.s, linhas: a.maxLinhas, regra: "aviso: o crédito longo quebra em DUAS linhas, não em três" });
    if (a.sozinha) avisos.push({ tipo: "credito-palavra-sozinha", nome: a.nome, s: a.s, palavra: a.sozinha.palavra, t: a.sozinha.t, regra: "aviso: a última linha do crédito ficou com uma palavra só (gosto da origem, não regra)" });
  }
  return avisos;
}

// ── a rede: nada sai do PC ─────────────────────────────────────────────────────────────────────────────────────────
export async function ladrilhos() {
  // o sharp do canal (node_modules da raiz), resolvido a partir da raiz: a ferramenta pode morar noutra pasta
  const sharp = createRequire(join(RAIZ, "package.json"))("sharp");
  const jpg = await sharp({ create: { width: 256, height: 256, channels: 3, background: "#3c4148" } }).jpeg({ quality: 70 }).toBuffer();
  const png = await sharp({ create: { width: 256, height: 256, channels: 3, background: "#3c4148" } }).png().toBuffer();
  // relevo plano, 0 m: terrain-rgb = −10000 + (R·65536 + G·256 + B) · 0,1 → 100000 = (1, 134, 160)
  const webp = await sharp({ create: { width: 256, height: 256, channels: 3, background: { r: 1, g: 134, b: 160 } } }).webp({ lossless: true }).toBuffer();
  return { jpg, png, webp };
}

export async function prenderRede(ctx, L0, rede, credencial = "MAPTILER_KEY") {
  await ctx.addInitScript(({ k, n }) => { window.__chaves = Object.assign({}, window.__chaves || {}, { [n]: k }); }, { k: CHAVE_FALSA, n: credencial });
  await ctx.route("**/*", async (route) => {
    const u = route.request().url();
    if (/^(file|data|blob|about|chrome):/i.test(u)) return route.continue();
    const semChave = u.replace(/([?&]key=)[^&]*/i, "$1…");
    if (/\.(jpe?g)(\?|$)/i.test(u)) { rede.respondidos++; rede.urls.add(semChave.replace(/\/\d+\/\d+\/\d+\./, "/{z}/{x}/{y}.")); return route.fulfill({ status: 200, contentType: "image/jpeg", body: L0.jpg }); }
    if (/\.png(\?|$)/i.test(u)) { rede.respondidos++; rede.urls.add(semChave.replace(/\/\d+\/\d+\/\d+\./, "/{z}/{x}/{y}.")); return route.fulfill({ status: 200, contentType: "image/png", body: L0.png }); }
    if (/terrain|[-_/]dem[-_/.]/i.test(u) || /\.webp(\?|$)/i.test(u)) rede.relevo = (rede.relevo || 0) + 1;
    if (/\.webp(\?|$)/i.test(u)) { rede.respondidos++; rede.urls.add(semChave.replace(/\/\d+\/\d+\/\d+\./, "/{z}/{x}/{y}.")); return route.fulfill({ status: 200, contentType: "image/webp", body: L0.webp }); }
    rede.cortados++; rede.urls.add("cortado: " + semChave.slice(0, 120));
    return route.abort("blockedbyclient");
  });
}

// ── uma cena ──────────────────────────────────────────────────────────────────────────────────────────────────────
export async function medirCena(b, html, L, L0, opts, libs) {
  const texto = readFileSync(html, "utf8");
  const sha1 = createHash("sha1").update(texto).digest("hex");
  const cena = basename(html).replace(/\.html$/i, "");
  const base = { cena, arquivo: html, sha1, marca: opts.marca, versao: VERSAO, passo: opts.passo };   // marca = sha1 do marca/tokens.css medido
  const { w, h } = await libs.palcoDaCena(texto);
  if (w !== L.W || h !== L.H) return { ...base, veredito: NAO_MEDIDO, motivo: `o palco da cena é ${w} × ${h}, e a marca é ${L.W} × ${L.H} (falta data-render="4k-native"?)` };
  const ctx = await b.newContext({ viewport: { width: w, height: h } });
  const rede = { respondidos: 0, cortados: 0, urls: new Set() };
  await prenderRede(ctx, L0, rede, opts.credencial);
  const p = await ctx.newPage();
  const erros = []; p.on("pageerror", (e) => erros.push(String(e.message).slice(0, 140)));
  try {
    let ab;
    try { ab = await libs.abrirCenaParaMedir(p, html, { textoDoArquivo: texto, timeoutLoadMs: 60000 }); }
    catch (e) { return { ...base, veredito: NAO_MEDIDO, motivo: "a cena não abriu: " + String(e.message).split("\n")[0].slice(0, 140) }; }
    const ok = await p.waitForFunction(() => typeof window.__renderAt === "function" && window.__duracao > 0, null, { timeout: 30000 }).then(() => true, () => false);
    if (!ok) return { ...base, veredito: NAO_MEDIDO, motivo: "a cena não expõe __renderAt e __duracao" };
    if (ab.ehMapa && !ab.mapaAssentou) return { ...base, eh_mapa: true, veredito: NAO_MEDIDO, motivo: "o mapa não assentou (o __aguardarMapa não respondeu em 8 s)", rede: { respondidos: rede.respondidos, cortados: rede.cortados } };
    const dur = await p.evaluate(() => window.__duracao);
    const ts = []; for (let t = 0; t < dur - 1e-6; t += opts.passo) ts.push(+t.toFixed(3)); ts.push(+(dur - 1 / 30).toFixed(3));
    const amostras = [];
    for (const t of ts) {
      await p.evaluate(async ({ t, teto }) => {
        await window.__renderAt(t);
        if (typeof window.__aguardarMapa === "function") await Promise.race([window.__aguardarMapa(), new Promise((r) => setTimeout(r, teto))]);
      }, { t, teto: TETO_MAPA_MS });
      const c = await p.evaluate(coletar, { W: w, H: h, OP: opts.opacidade });
      amostras.push({ t, itens: c.itens, objs: new Map(c.objs.map((o) => [o.id, o.b])), creditos: c.creditos });
    }
    const erroCena = await p.evaluate(() => String(window.__erroCena || "")).catch(() => "");
    const redeOut = { respondidos: rede.respondidos, cortados: rede.cortados, relevo: rede.relevo || 0, pedidos: [...rede.urls].slice(0, 6) };
    if (erroCena) return { ...base, eh_mapa: ab.ehMapa, veredito: NAO_MEDIDO, motivo: "a cena declarou erro (window.__erroCena): " + erroCena.slice(0, 140), rede: redeOut };
    const j = julgar(amostras, L, opts);
    const avisos = avisosDoCredito(amostras);
    if (!j.medidos) return { ...base, eh_mapa: ab.ehMapa, veredito: NAO_MEDIDO, motivo: "nenhum texto nem caixa medido na cena inteira", amostras: ts.length, rede: redeOut, erros };
    // Cena com RELEVO 3D (pediu tile de terreno): aqui o relevo é plano (0 m), e o map.project() da cena sobe ou desce o que
    // é preso ao mapa conforme a altitude do ponto. Medido na origem: a pílula sobre a montanha 15 a 19 px mais alta no
    // clipe que aqui; a de um rio, ao nível do mar, no mesmo lugar. Então não se certifica: NÃO MEDIDO,
    // com o que se mediu como indício (itens_indicativos), e a margem dessa cena se confere no clipe de prova.
    if (rede.relevo) return { ...base, eh_mapa: ab.ehMapa, duracao: dur, amostras: ts.length, medidos: j.medidos, veredito: NAO_MEDIDO,
      motivo: `a cena usa relevo 3D (${rede.relevo} pedidos de terreno respondidos com relevo plano): o que é preso ao mapa pode estar ~20 px fora do lugar do render; confira a margem no clipe de prova`,
      itens_indicativos: j.itens, avisos, rede: redeOut, erros };
    return { ...base, eh_mapa: ab.ehMapa, duracao: dur, amostras: ts.length, medidos: j.medidos, objetos_em_passagem: j.objetos_em_passagem,
      isentas_passagem: j.isentas_passagem, veredito: j.itens.length ? 1 : 0, itens: j.itens, avisos, rede: redeOut, erros };
  } finally { await ctx.close().catch(() => {}); }
}

function listarCenas(alvos, so) {
  const out = [];
  for (const a of alvos) {
    const abs = resolve(a);
    if (!existsSync(abs)) uso(`não encontrado: ${a}`);
    if (statSync(abs).isDirectory()) {
      const pasta = existsSync(join(abs, "graphics")) && statSync(join(abs, "graphics")).isDirectory() ? join(abs, "graphics") : abs;
      for (const f of readdirSync(pasta).sort()) if (/\.html$/i.test(f) && !f.startsWith("_")) out.push(join(pasta, f));
    } else out.push(abs);
  }
  const lista = so ? out.filter((f) => so.includes(basename(f).replace(/\.html$/i, ""))) : out;
  if (!lista.length) uso("nenhum .html para medir" + (so ? ` com --so=${so.join(",")}` : ""));
  return lista;
}

function registroPadrao(html) {
  const p = html.split(sep).join("/"); const m = p.match(/^(.*\/out\/[^/]+)\/graphics\/[^/]+\.html$/i);
  return m ? join(m[1], "_tmp", "portao-margens.jsonl") : null;
}

function linhaTexto(r) {
  const n = `${r.cena}.html`;
  if (r.veredito === NAO_MEDIDO) return [`? ${n}: NÃO MEDIDO — ${r.motivo}`, ...(r.itens_indicativos || []).map((a) => `    (indício) ${a.lado} ${a.v} (limite ${a.sinal} ${a.lim}) @${a.t}s · ${a.k} ${a.nome}${a.s ? ` “${a.s}”` : ""}`)].join(String.fromCharCode(10));
  const cab = `${r.veredito ? "✗" : "✓"} ${n}  (${r.medidos} itens medidos em ${r.amostras} amostras de ${r.passo} s${r.eh_mapa ? `; mapa sem satélite, ${r.rede.respondidos} pedidos respondidos aqui e ${r.rede.cortados} cortados, nenhum à rede` : ""}${r.isentas_passagem ? `; ${r.isentas_passagem} medidas de objeto de passagem pela borda` : ""})`;
  const lin = [cab];
  for (const a of r.itens || []) lin.push(`    ${a.lado} ${a.v} (limite ${a.sinal} ${a.lim}) @${a.t}s, ${a.n} amostra(s) de ${a.t0} a ${a.t1}s · ${a.k}${a.cred ? " de crédito" : ""} ${a.nome}${a.s ? ` “${a.s}”` : ""} · ${a.regra}`);
  for (const a of r.avisos || []) lin.push(`    aviso ${a.tipo}: ${a.nome} “${a.s}”${a.palavra ? ` (última linha: “${a.palavra}” @${a.t}s)` : ` (${a.linhas} linhas)`} · ${a.regra}`);
  if (r.erros?.length) lin.push(`    erros de JS da cena: ${r.erros.slice(0, 3).join(" | ")}`);
  return lin.join("\n");
}

async function main() {
  const argv = process.argv.slice(2);
  const opt = (n) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : null; };
  const passo = Number(opt("passo") ?? 0.1);
  if (!(passo > 0 && passo <= 0.5)) uso("--passo tem de ficar entre 0 e 0,5 s");
  const so = opt("so") ? opt("so").split(",").map((s) => s.trim()).filter(Boolean) : null;
  const json = argv.includes("--json"), semReg = argv.includes("--sem-registro"), regArg = opt("registro");
  const desconhecidos = argv.filter((a) => a.startsWith("--") && !/^--(passo|so|registro|tokens|palco|margem-x|margem-topo|faixa-credito-y|credito-x|credito-x-fim|canto|credencial)=/.test(a) && !["--json", "--sem-registro"].includes(a));
  if (desconhecidos.length) uso(`opção desconhecida: ${desconhecidos.join(" ")}`);
  // a pré-carga das chaves daria a chave de verdade à cena: aqui ela não serve (a cena de mapa se mede sem tile)
  if ([...process.execArgv, process.env.NODE_OPTIONS || ""].join(" ").includes("chaves-nos-portoes")) uso("rode SEM a pré-carga das chaves: este portão não pede tile, e a chave não entra na página");
  const alvos = argv.filter((a) => !a.startsWith("--"));
  if (!alvos.length) uso("falta a cena");
  if (!process.env.REGIE_MOTOR) uso("falta REGIE_MOTOR=<motor> no mesmo comando (a pasta da pré-v1 da Régie)");
  if (!existsSync(join(RAIZ, "scripts", "lib", "chrome.mjs"))) uso("rode da raiz do canal (falta scripts/lib/chrome.mjs, do molde da pré-v1)");
  const tokens = resolve(opt("tokens") ?? join(RAIZ, "marca", "tokens.css"));
  if (opt("tokens") && !existsSync(tokens)) uso(`--tokens: não encontrado: ${opt("tokens")}`);
  const tokensTxt = existsSync(tokens) ? readFileSync(tokens, "utf8") : "";
  const { L } = limitesDaMarca(tokensTxt);
  // a linha de comando ganha do tokens.css
  const palcoTxt = opt("palco");
  if (palcoTxt != null) { const m = /^(\d+)x(\d+)$/i.exec(palcoTxt); if (!m) uso("--palco é <largura>x<altura>, ex.: --palco=3840x2160"); L.W = +m[1]; L.H = +m[2]; }
  for (const [arg, k] of [["margem-x", "SX"], ["margem-topo", "SY"], ["faixa-credito-y", "FY"], ["credito-x", "CX"], ["credito-x-fim", "CXF"], ["canto", "CANTO"]]) {
    const v = opt(arg); if (v == null) continue;
    const x = Number(v); if (!Number.isFinite(x) || x < 0) uso(`--${arg} tem de ser um número de px ≥ 0`); L[k] = x;
  }
  const NOMES = { W: "--palco-largura (ou --palco=)", H: "--palco-altura (ou --palco=)", SX: "--safe-x (ou --margem-x=)", SY: "--safe-y (ou --margem-topo=)",
    FY: "--faixa-credito-y", CX: "--credito-x", CXF: "--credito-x-fim", CANTO: "--canto-reservado (ou --canto=)" };
  const faltam = Object.entries(L).filter(([, v]) => v == null).map(([k]) => NOMES[k]);
  if (faltam.length) uso(`faltam limites da área segura: ${faltam.join(", ")}. Declare no tokens.css do canal (${tokens}) ou passe pela linha de comando; o topo do arquivo diz como`);
  const cenas = listarCenas(alvos, so);
  const lib = (f) => import(pathToFileURL(join(RAIZ, "scripts", "lib", f)).href);
  const { morrerComoNaoMedido } = await lib("nao-medido.mjs");
  morrerComoNaoMedido("portao-margens");
  const { lancarChrome } = await lib("chrome.mjs");
  const { palcoDaCena, abrirCenaParaMedir } = await lib("abrir-cena.mjs");
  const L0 = await ladrilhos();
  const b = await lancarChrome({ chromiumSandbox: false, args: ["--host-resolver-rules=MAP * ~NOTFOUND"] });
  const opts = { passo, opacidade: 0.5, credencial: opt("credencial") || "MAPTILER_KEY", marca: createHash("sha1").update(tokensTxt + JSON.stringify(L)).digest("hex"), limites: { ...L } };
  const res = [];
  try {
    for (const html of cenas) {
      let r;
      try { r = await medirCena(b, html, L, L0, opts, { palcoDaCena, abrirCenaParaMedir }); }
      catch (e) { r = { cena: basename(html, ".html"), arquivo: html, versao: VERSAO, veredito: NAO_MEDIDO, motivo: "a medida quebrou: " + String(e.message).split("\n")[0].slice(0, 160) }; }
      r.quando = new Date().toISOString();
      res.push(r);
      console.log(json ? JSON.stringify(r) : linhaTexto(r));
      const reg = semReg ? null : regArg ? resolve(regArg) : registroPadrao(html);
      if (reg) { mkdirSync(dirname(reg), { recursive: true }); appendFileSync(reg, JSON.stringify(r) + "\n"); }
    }
  } finally { await b.close().catch(() => {}); }
  const rep = res.filter((r) => r.veredito === 1).length, nm = res.filter((r) => r.veredito === NAO_MEDIDO).length;
  if (!json) console.log(`portao-margens v${VERSAO}: ${res.length} cena(s), ${res.length - rep - nm} passaram, ${rep} reprovaram, ${nm} NÃO MEDIDO.`);
  process.exit(rep ? 1 : nm ? NAO_MEDIDO : 0);
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) await main();
