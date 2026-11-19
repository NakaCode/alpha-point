// portao-movimento — o MOVIMENTO da cena, medido no tempo dela, a cada 0,1 s, do primeiro ao último quadro: o mapa parado, a
// câmera brusca e a viagem curta, o "·" que a quebra deixa na ponta da linha e o campo em branco esperando o texto.
// Movimento não aparece em quadro parado: as peças conferiam a cena em quadros, e no vídeo 7 dos 23 achados mantidos nas duas
// revisões de espectador 9 eram de movimento e 4 de "·" (out/_skills/catalogo.md, "A retomada (17/11/2026)"; o Lucas: "Os dois,
// após a cota (Recomendado)"). O mapista e o editor-de-arte rodam antes de entregar e consertam até sair 0; o qc-visual lê a saída.
//
// Uso (da raiz do canal; o REGIE_MOTOR, se faltar, vira C:/projetos/regie-v1):
//   node ferramentas/portao-movimento.mjs <html|pasta|out/<proj>…> [--so=s07,s15] [--passo=0.1] [--json] [--registro=<arq.jsonl>|--sem-registro]
//     [--aceitos=<arq.json>]
//   Pasta: as .html dela (sem as _*.html); out/<proj>: as de graphics/. No PowerShell, o mesmo comando.
//   --so        só estas cenas (pelo nome, sem .html).
//   --passo     o passo das amostras, em segundos (padrão 0,1; o último quadro, duração − 1/30 s, sempre entra). A viagem de
//               câmera se mede de novo a 1/30 s (o quadro do render), só a câmera.
//   --json      uma linha JSON por cena, no lugar do texto.
//   --registro  onde gravar uma linha por cena (padrão: out/<proj>/_tmp/portao-movimento.jsonl, quando a cena mora em
//               out/<proj>/graphics/; fora de out/, só com --registro). --sem-registro não grava nada.
//   --aceitos   um JSON da Sala com os desvios que ELA aceitou: [{"cena":"s46","tipo":"mapa-parado","de":0,"ate":5.5,"porque":"…"}].
//               O item que cai inteiro num desvio aceito sai como "aceito" (não reprova) e continua listado. Sem o arquivo, nada é
//               aceito: o portão não sabe das decisões, e quem as conhece é a Sala.
//               v2 (o cético, K3): a entrada pode trazer o "sha1" do HTML; com ele, só vale para aquela versão da cena (a de outro sha1
//               não vale e sai como nota). Ele leva só o desvio que a Sala aceitou na arte, por escrito, com a decisão; a limitação do
//               portão segue a exceção do Lucas (out/<proj>/qc/_excecoes-portao.json), como a de qualquer portão.
// Saída: 0 = mediu e passou · 1 = mediu e reprovou (em alguma cena) · 2 = NÃO MEDIDO (em alguma cena, e nenhuma reprovou) ou uso
// errado. A reprovação ganha do NÃO MEDIDO no código; a saída lista as duas. O aviso não muda o código. O __renderAt da cena que não
// volta em 30 s sai NÃO MEDIDO (v2, K16), em vez de pendurar o portão.
// Tempo: a cena de mapa leva de 1,3 a 4 s por segundo de cena (a curta, a com relevo 3D e a de muitas viagens, mais; uma de 60 s, até
// ~2,5 min); a de mesa, ~0,1. Mais de uma cena de mapa num comando passa de 5 minutos: o lote é do setor ou da Sala, nunca da peça.
//
// v2 (18/11/2026): as trocas do cético (out/_tmp/portao-movimento/cetico.md), medidas na prova e em 22 cenas de borda: o traço
// com pathLength conta (K1); o campo em branco vê foto em background-image, desenho, barras e canvas (K2); o aceito com sha1 (K3);
// o "·" numa fila flex, num inline-block ou num <tspan> (K4); a viagem em Hermite, linear e seno (K5); o recuo dentro de um arco
// (K6); o recuo rápido vira aviso (K7); o mapa na tela pela ordem em que a tela pinta (K8); o "•" de lista (K13); a palavra que
// ainda não entrou (K14); o __renderAt sem volta (K16); o vídeo que não carregou (K21). A linha do registro diz a versao.
//
// A cena de mapa se mede SEM pedir tile nenhum à MapTiler e SEM a pré-carga das chaves (com ela, o portão se recusa), pela mesma
// prisão de rede do ferramentas/portao-margens.mjs (importada dele, não copiada): a chave falsa, os tiles respondidos aqui com um
// ladrilho cinza, o resto cortado, e o Chrome com o DNS desligado. A câmera (map.getZoom/getCenter/getBearing/getPitch, depois do
// __renderAt) e o map.project() são os do render, porque não dependem do satélite (provado no portao-margens, parte E).
//
// O QUE MEDE (os limites, de onde vieram e o que muda se a Sala os apertar ou afrouxar estão no RELATO da prova,
// out/_tmp/portao-movimento/RELATO.md; aqui, o resumo):
//  1. MAPA PARADO (reprova): com o mapa do MapLibre na tela (visível em pelo menos metade de 15 pontos do quadro; v2, K8: pela ordem
//     em que a tela pinta, o document.elementsFromPoint, com o z-index valendo; o que cobre é a foto, o vídeo ou o fundo opaco a 90 %,
//     nunca o canvas; o mapa pequeno, que não chega a metade dos pontos, fica com o olho do qc-visual), um trecho de mais de 2,0 s (identidade §5, "Mapa nunca fica parado": "os mapas que ficam parados mais de 2 s ganham uma
//     aproximação suave e contínua") em que nada conta:
//     - a câmera conta quando o mapa anda na tela a 12 px/s ou mais (o fluxo: o maior deslocamento, entre duas amostras, de 9 pontos
//       do chão, nos cantos, no meio das bordas e no centro do quadro 4K). 12 px/s fica entre os mapas que os revisores MANTIVERAM
//       como parados (a aproximação de +0,004/s e as derivas: até 9 px/s, medido) e os que DERRUBARAM porque a câmera andava (14 a
//       21 px/s, medido; a s35, de 17 a 10 px/s, passa pelo que entra a cada 2,6 s). A "aproximação suave e contínua" que passa é a
//       que se vê: os consertos do vídeo 7 andam 21 a 40 px/s;
//     - conta tudo o que entra, sai, se move, cresce, muda de cor ou de texto na tela: a opacidade de um elemento que muda 0,05 ou
//       mais em 0,1 s; a caixa que anda ou cresce a 12 px/s ou mais; a cor que muda 24/255 ou mais; o traço que se desenha (com
//       pathLength, nas unidades dele: v2, K1); a
//       camada do MapLibre que muda (setPaintProperty, setLayoutProperty, setFilter, setData, setFeatureState: a opacidade em
//       0,05, a largura em 15 %, o resto em qualquer mudança); o <video> que anda (só com quadro, readyState ≥ 2: v2, K21);
//     - NÃO conta a luz de corrente que corre parada na linha (só o stroke-dashoffset muda: os revisores mantiveram a s48 e a s19
//       com ela correndo, "no celular não se lê como movimento") nem o que é menor que 16 px.
//  2. CÂMERA BRUSCA E VIAGEM CURTA: a viagem é cada pico do fluxo de 600 px/s ou mais (a deriva e o empurrão lento ficam abaixo de
//     ~150 px/s; a viagem mais lenta dos achados, a s63, chega a 3.190). Ela se mede de novo a 1/30 s, só a câmera:
//     - VIAGEM CURTA (reprova): a duração da viagem, pela régua da marca (identidade §4.4: "Viagem de mapa: 1,5–3 s, easing
//       cúbico de entrada e saída"), abaixo de 1,45 s. A duração é o NÚCLEO (o tempo em que o fluxo passa de 10 % do pico)
//       dividido por 0,684, a fração do núcleo no cúbico de entrada e saída: é a duração do cúbico da marca que anda depressa
//       pelo mesmo tempo. Medida nas viagens cúbicas do vídeo 7 com até 0,02 s de erro (a s57 de 1,3 s: 1,30; a de 1,7 s: 1,70;
//       a s38 e a s07 de 1,5 s: 1,48 e 1,50). Os 0,05 s abaixo de 1,5 são a folga da medida. v2 (K5): a duração é a MENOR de duas
//       réguas, o núcleo ÷ 0,684 e, quando nenhuma ponta foi cortada, a partida-à-chegada (o fluxo passa de 2 % do pico) ÷ 0,859 (a
//       fração dela no cúbico 4u³): o Hermite das cenas do canal (3u² − 2u³), o linear e o seno curtos reprovam, e a viagem de
//       Hermite sai perto da duração de verdade. O que fica: o Hermite de 1,25 a 1,5 s passa (a régua não sabe a curva);
//     - RECUO RÁPIDO (AVISO desde a v2, K7; na v1, reprovava): o zoom para FORA (o recuo) acima de 4,75 níveis por segundo, medido da
//       partida à chegada (v2, K6: o recuo dentro de um arco, que recua e mergulha, também). A marca não tem número para a velocidade
//       da câmera, e os achados se contradizem (o M1, s13 da r1, 5,09 níveis/s, "o movimento mais rápido da cena", mantido; o D29,
//       s61, 6,25, derrubado): só aviso, por decisão do Lucas (18/11/2026, "Só aviso (Recomendado)"; CLAUDE.md, "Os portões medem"). O MERGULHO (zoom para dentro) não reprova: os revisores
//       derrubaram mergulhos de até 9,2 níveis/s (a s07 do gancho; a s38, 7,7, na r1) porque o destino está na tela desde o começo;
//     - PARTIDA SEM VISTA (reprova): a viagem que começa menos de 0,25 s depois de o mapa aparecer por corte seco dentro da cena
//       (a s38 da r2: "o espectador nunca chega a ler o Arrow inteiro"; o conserto deu 0,91 s de vista, medido por este portão). Os 0,25 s são o repouso
//       que a marca já pede na ponta de um corte (identidade §4.4, "250 ms de repouso"). O corte é o que cobria o mapa sumir de uma
//       vez; a foto que encolhe sobre o mapa (a s13) não é corte;
//     - avisos, que não reprovam (nenhum achado mantido os sustenta): a chegada a menos de 0,25 s de um corte; o mergulho acima de
//       9,5 níveis/s, o deslocamento do centro acima de 5.600 px/s e o giro acima de 45°/s (acima do mais rápido das 57 cenas do
//       vídeo 7 aprovado: 9,2, 5.061 e 40,2); a viagem que começa no primeiro quarto de segundo da cena (confira a emenda).
//  3. O "·" NA QUEBRA (reprova; redator-de-tela §3, a regra da quebra: "nenhuma linha de texto começa nem termina com '·'", também
//     a quebra que a largura faz na cena): todo "·" ou "•" visível (opacidade ≥ 0,5) que é o primeiro ou o último caractere da sua
//     linha na tela, pela caixa de cada caractere (Range). Vale para o texto HTML; no <text> do SVG, a linha é o <text> (ou o
//     <tspan> que abre linha, com x, y ou dy). v2: o item de uma fila flex ou grid e o inline-block não são linha à parte (K4); a
//     palavra que ainda não entrou (opacidade < 0,5) não é vizinha, e o "·" pendurado antes dela reprova (K14); o "•" que abre o
//     texto do seu elemento é o marcador de lista e só reprova no fim da linha (K13; o "•" num <span> só dele, no meio de uma
//     linha, passa como marcador se a quebra o puser no começo: a regra da quebra é do "·").
//  4. O CAMPO EM BRANCO (reprova; identidade §5, "A regra que fica": "campo em branco esperando a voz não vai à tela"): a caixa
//     (fundo opaco a 60 %, de 160 × 80 px ou mais, que não é de tela cheia) no ar (≥ 0,5), assentada (andando a menos de 60 px/s,
//     o limiar de movimento do portao-margens) e sem texto nem foto dentro por 0,5 s ou mais, e que DEPOIS ganha texto na cena: o
//     cartão que pousa vazio esperando o cabeçalho (a s45 da r1). Os 0,5 s são os 150 ms depois do assentamento mais os 300 ms da
//     entrada que a marca dá ao rótulo (identidade §4.4), arredondados. v2 (K2): é conteúdo, além do texto, o que cobre a caixa com
//     pelo menos 2 % da área dela e é foto, vídeo ou canvas, foto em background-image (não o grão de papel em data:image/svg, e até
//     95 % da área), desenho SVG (até 90 %) ou peça opaca a 60 % (até 60 %): o cartão com a foto ou as barras, e o número que entra
//     na palavra, não é campo em branco.
//
// O QUE NÃO É DELE (fica noutro portão ou com o olho):
//  - a sobreposição de texto sobre texto: check-overlap (no qc-cena). A pílula que cobre um anel ou um traço do mapa (a s57 da r1)
//    não é texto sobre texto, e nenhum portão a mede: fica com o qc-visual;
//  - o tamanho da letra: qc-tamanho. O tamanho de foto e de símbolo (a cédula da s28/s30, a miniatura da s53) não tem número na
//    marca: fica com o qc-visual (o RELATO propõe a regra);
//  - a margem: portao-margens; o texto no ar e a carga: qc-carga e o textos-tela;
//  - o desenho no <canvas> 2D (o rio e a correnteza das cenas de canvas): o portão não separa a correnteza de um traço novo, e o
//    canvas não conta como movimento. A cena de canvas pode sair com um trecho parado que o rio sendo traçado preencheria: o item
//    diz "há canvas 2D na cena", e a peça confere;
//  - o que é pixel do satélite, a emenda do mosaico, o tom da base, o sentido do que se move (o "bloco sem nome", a cédula que não
//    se lê como dinheiro) e o sincronismo com a voz: o qc-visual e o espectador;
//  - a amostra é a cada 0,1 s: uma mudança que dure menos de 0,1 s pode passar, e um trecho parado se mede com ±0,1 s;
//  - (v2, K21) o traço revelado por clip-path ou mask (a caixa e o traço não mudam); o segundo mapa da cena (só o window.map se
//    mede); a chegada que para seco (a régua mede a duração, não a curva); a viagem com o mapa coberto em mais da metade (não entra
//    nos picos); o mapa pequeno, em menos de metade do quadro (K8); o teto de 6 s da foto ou do footage parado e o Ken Burns dentro
//    da moldura (identidade §4.3): ficam com o qc-visual.
// Relevo 3D: a câmera é a mesma (vem da cena), e o fluxo se mede sobre o relevo plano do portão; a cena não sai NÃO MEDIDO por isso.
//
// Origem: o molde é o ferramentas/portao-margens.mjs (v2, 14/10/2026): abrir a cena, a prisão de rede, o passo, a saída e o
// registro. As medidas são novas (18/11/2026), calibradas nos achados mantidos e derrubados das duas revisões de espectador do
// vídeo 7 (out/rio-columbia/_tmp/espectador-r1 e -r2), na versão da cena que os revisores viram; a prova é o
// ferramentas/portao-movimento-provar.mjs. Não edita a cena. Só na página do portão, os métodos do mapa ganham um registro (embrulho)
// e entra um <style id="__pvPE"> que liga o pointer-events (v2, K8: o elementsFromPoint pula o que tem pointer-events: none, como
// as camadas das cenas do canal); nenhum dos dois muda o layout nem a pintura.
import { existsSync, readFileSync, readdirSync, statSync, appendFileSync, mkdirSync } from "node:fs";
import { resolve, join, basename, dirname, sep } from "node:path";
import { pathToFileURL } from "node:url";
import { createHash } from "node:crypto";
import { ladrilhos, prenderRede } from "./portao-margens.mjs";

process.env.REGIE_MOTOR ||= "C:/projetos/regie-v1";
export const VERSAO = 2;
const NAO_MEDIDO = 2;
const RAIZ = process.cwd();
const TETO_MAPA_MS = 8000;

// Os limites (o RELATO diz de onde vem cada um e o que muda se a Sala o mexer).
export const LIM = {
  W: 3840, H: 2160,
  V_PARADO: 12,          // px/s no quadro 4K: abaixo disto a câmera está parada (mantidos ≤ 9; derrubados por câmera ≥ 14)
  T_PARADO: 2.0,         // s: identidade §5, "Mapa nunca fica parado"
  OP_EVENTO: 0.05,       // mudança de opacidade por amostra que conta (0,5/s: o rótulo de 300 ms muda 0,33 por amostra)
  OP_VISIVEL: 0.1,       // abaixo disto o elemento não está na tela
  TAM_MIN: 16,           // px: o elemento menor que isto (no maior lado) não conta
  COR_MIN: 24,           // em 255: a mudança de cor que conta
  F_VIAGEM: 600,         // px/s: o pico de fluxo que faz uma viagem (deriva ≤ ~150; a viagem mais lenta dos achados: 3.190)
  NUCLEO: 0.10,          // o núcleo da viagem: o fluxo acima de 10 % do pico
  ONSET: 0.02,           // a partida e a chegada da viagem: o fluxo passa de 2 % do pico
  FRACAO_CUBICO: 0.684,  // a fração do núcleo (10 %) no cúbico de entrada e saída: 1 − 2·√(0,1/4)
  FRACAO_ONSET: 0.859,   // a fração da partida à chegada (fluxo ≥ 2 % do pico) no cúbico 4u³: 1 − 2·√(0,02·3/12); vale para a viagem sem ponta cortada
  VIAGEM_MIN: 1.45,      // s: a viagem da marca (1,5 s), menos 0,05 s da forma da curva
  RECUO_MAX: 4.75,       // níveis/s: o meio entre o recuo derrubado mais rápido (s22, 4,4) e o mantido (s13 da r1, 5,1); o consertado: 3,5
  VISTA_MIN: 0.25,       // s: a vista no ar entre o corte e a viagem (identidade §4.4, os 250 ms de repouso na ponta do corte)
  MERGULHO_AVISO: 9.5,   // níveis/s: acima do mais rápido do vídeo 7 aprovado (a s07 do gancho, 9,2)
  PAN_AVISO: 5600,       // px/s no centro do quadro: acima do mais rápido do vídeo 7 aprovado (a s51, 5.061)
  GIRO_AVISO: 45,        // °/s: acima do mais rápido do vídeo 7 aprovado (a s13, 40,2, antes da foto em tela cheia)
  CAMPO_MIN: 0.5,        // s: o campo em branco assentado (150 ms + 300 ms da entrada do rótulo, identidade §4.4)
  CAMPO_MOV: 60,         // px/s: o limiar de movimento do portao-margens (a caixa "assentada")
  OP_TEXTO: 0.5,         // a opacidade do texto que se lê (a mesma do portao-margens)
  FINO: 1 / 30,          // s: o passo da medida fina da viagem (o quadro do render)
};

function uso(msg) {
  console.error(`portao-movimento: ${msg}`);
  console.error("uso: node ferramentas/portao-movimento.mjs <html|pasta|out/<proj>…> [--so=s07,s15] [--passo=0.1] [--json] [--registro=<arquivo.jsonl>|--sem-registro] [--aceitos=<arquivo.json>]");
  process.exit(NAO_MEDIDO);
}

// ── o registro dos métodos do mapa (só na página do portão) ──────────────────────────────────────────────────────────────
export function instrumentarMapa() {
  const m = window.map;
  if (!m || typeof m.getZoom !== "function" || m.__pvInstr) return !!(m && m.__pvInstr);
  m.__pvInstr = true; window.__pvLog = [];
  const sig = (v) => { try { const s = typeof v === "string" ? v : JSON.stringify(v); if (s == null) return "∅"; if (s.length <= 120) return s;
    let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return "#" + s.length + ":" + h; } catch (e) { return "?"; } };
  const embrulha = (obj, fn, chave) => {
    const orig = obj[fn]; if (typeof orig !== "function") return;
    obj[fn] = function (...a) { try { window.__pvLog.push(chave(a)); } catch (e) {} return orig.apply(this, a); };
  };
  embrulha(m, "setPaintProperty", (a) => ["pintura", String(a[0]), String(a[1]), sig(a[2])]);
  embrulha(m, "setLayoutProperty", (a) => ["leiaute", String(a[0]), String(a[1]), sig(a[2])]);
  embrulha(m, "setFilter", (a) => ["filtro", String(a[0]), "", sig(a[1])]);
  embrulha(m, "setFeatureState", (a) => ["estado", sig(a[0]), "", sig(a[1])]);
  embrulha(m, "removeFeatureState", (a) => ["estado", sig(a[0]), "", "removido"]);
  embrulha(m, "addLayer", (a) => ["camada+", String(a[0] && a[0].id), "", "1"]);
  embrulha(m, "removeLayer", (a) => ["camada-", String(a[0]), "", "1"]);
  try {
    const fontes = (m.style && (m.style.sourceCaches || m.style._sourceCaches)) || {};
    for (const id of Object.keys(fontes)) {
      const f = m.getSource(id);
      if (f && typeof f.setData === "function") embrulha(f, "setData", (a) => ["dados", id, "", sig(a[0])]);
    }
  } catch (e) {}
  return true;
}

// ── o que se coleta em cada instante, dentro da página ─────────────────────────────────────────────────────────────
// completo = false: só a câmera e a visibilidade do mapa (a medida fina da viagem). Não põe nada no DOM: o id de cada elemento
// fica num WeakMap da página, e os pontos de chão da amostra anterior, num objeto da página (um por "vaga": a medida geral e a fina).
export function coletarMov({ W, H, completo, vaga }) {
  const S = (window.__pvS ||= { ids: new WeakMap(), n: 0 });
  const idDe = (el) => { let v = S.ids.get(el); if (v == null) { v = ++S.n; S.ids.set(el, v); } return v; };
  const clsDe = (el) => (typeof el.className === "string" ? el.className : (el.className && el.className.baseVal) || "");
  const nomeDe = (el) => el.id ? "#" + el.id : el.tagName.toLowerCase() + (clsDe(el).trim() ? "." + clsDe(el).trim().split(/\s+/).slice(0, 2).join(".") : "");
  const csC = new Map(); const cs = (el) => { let v = csC.get(el); if (!v) { v = getComputedStyle(el); csC.set(el, v); } return v; };
  const opC = new Map();
  const opac = (el) => { if (!el || el.nodeType !== 1 || el === document.documentElement) return 1; if (opC.has(el)) return opC.get(el);
    const s = cs(el); const v = (s.display === "none" ? 0 : +s.opacity) * opac(el.parentElement); opC.set(el, v); return v; };
  const rgba = (cor) => { if (!cor || cor === "none" || cor === "transparent") return null; const m = String(cor).match(/rgba?\(([^)]+)\)/); if (!m) return null;
    const p = m[1].split(/[ ,/]+/).filter(Boolean).map(parseFloat); return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1]; };
  const alfa = (cor) => { const c = rgba(cor); return c ? c[3] : 0; };
  const corta = (a, b) => { const x = Math.max(a.x, b.x), y = Math.max(a.y, b.y), x2 = Math.min(a.x2, b.x2), y2 = Math.min(a.y2, b.y2); return x2 > x && y2 > y ? { x, y, x2, y2 } : null; };
  const clipC = new Map();
  const clipDe = (el) => {
    if (!el || el === document.body || el === document.documentElement) return null;
    if (clipC.has(el)) return clipC.get(el);
    let c = clipDe(el.parentElement); const s = cs(el);
    if (s.overflowX !== "visible" || s.overflowY !== "visible" || (s.clipPath && s.clipPath !== "none")) {
      const r = el.getBoundingClientRect(); const box = { x: r.left, y: r.top, x2: r.right, y2: r.bottom };
      c = c ? (corta(c, box) || { x: 0, y: 0, x2: 0, y2: 0 }) : box;
    }
    clipC.set(el, c); return c;
  };
  const m = window.map && typeof window.map.getZoom === "function" ? window.map : null;
  const mapEl = m ? m.getContainer() : null;
  const out = { cam: null, vis: null, oc: null };
  // 1. a câmera: o fluxo é o deslocamento, desde a amostra anterior desta vaga, do chão que estava sob 9 pontos do quadro
  if (m) {
    const R = mapEl.getBoundingClientRect(), sc = (R.width / (mapEl.offsetWidth || R.width)) || 1;
    const pitch = m.getPitch(), c = m.getCenter();
    const ys = pitch > 55 ? [0.3, 0.6, 0.97] : [0.03, 0.5, 0.97];
    const P = []; for (const fy of ys) for (const fx of [0.02, 0.5, 0.98]) P.push([fx * W, fy * H]);
    const V = (S["v_" + vaga] ||= {});
    let fluxo = null;
    if (V.ll) fluxo = V.ll.map((ll, k) => { if (!ll) return null; try { const q = m.project(ll); return Math.hypot(R.left + q.x * sc - V.P[k][0], R.top + q.y * sc - V.P[k][1]); } catch (e) { return null; } });
    V.P = P; V.ll = P.map(([x, y]) => { try { const ll = m.unproject([(x - R.left) / sc, (y - R.top) / sc]); return [ll.lng, ll.lat]; } catch (e) { return null; } });
    out.cam = { z: m.getZoom(), b: m.getBearing(), p: pitch, lng: c.lng, lat: c.lat, fluxo, op: opac(mapEl) };
  }
  // 2. os elementos (e, entre eles, o que pode cobrir o mapa)
  const els = [], oclusores = [];
  const todos = document.body.querySelectorAll("*");
  const textos = [], midias = [];
  for (const el of todos) {
    const tag = el.tagName;
    if (/^(SCRIPT|STYLE|TEMPLATE|NOSCRIPT|LINK|META|DEFS|CLIPPATH|MASK|LINEARGRADIENT|RADIALGRADIENT|STOP|PATTERN|FILTER|TITLE|DESC)$/i.test(tag)) continue;
    if (mapEl && mapEl !== el && mapEl.contains(el)) continue;
    const s = cs(el);
    if (s.display === "none" || s.visibility !== "visible") continue;
    const op = opac(el);
    if (op < 0.02) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 1 && r.height < 1) continue;
    if (r.right <= 0 || r.bottom <= 0 || r.left >= W || r.top >= H) continue;
    const c = clipDe(el.parentElement);
    const b = c ? corta({ x: r.left, y: r.top, x2: r.right, y2: r.bottom }, c) : { x: r.left, y: r.top, x2: r.right, y2: r.bottom };
    if (!b) continue;
    const ehSvg = el instanceof SVGElement, geom = ehSvg && /^(path|line|polyline|polygon|rect|circle|ellipse|text|tspan|use|image)$/i.test(tag);
    const midia = /^(IMG|VIDEO|CANVAS)$/.test(tag);
    const proprio = [...el.childNodes].filter((n) => n.nodeType === 3 && n.textContent.trim()).map((n) => n.textContent.trim()).join(" ").replace(/\s+/g, " ");
    const fundo = !ehSvg && (alfa(s.backgroundColor) > 0.04 || s.backgroundImage !== "none" ||
      ["Top", "Right", "Bottom", "Left"].some((l) => parseFloat(s["border" + l + "Width"]) > 0 && s["border" + l + "Style"] !== "none" && alfa(s["border" + l + "Color"]) > 0.04));
    const cheia = (b.x2 - b.x) >= 0.9 * W && (b.y2 - b.y) >= 0.9 * H;
    // o que cobre o mapa: opaco (foto, vídeo, fundo ≥ 0,9) e depois do mapa no documento
    if (mapEl && el !== mapEl && !el.contains(mapEl) && op >= 0.9 && ((/^(IMG|VIDEO)$/.test(tag)) || (!ehSvg && alfa(s.backgroundColor) >= 0.9)) &&
        (mapEl.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING)) oclusores.push({ i: idDe(el), b, a: (b.x2 - b.x) * (b.y2 - b.y) });
    if (!completo) continue;
    if (!(proprio || midia || geom || fundo || el === mapEl)) continue;
    const rec = { i: idDe(el), o: +op.toFixed(3), b: [+b.x.toFixed(1), +b.y.toFixed(1), +b.x2.toFixed(1), +b.y2.toFixed(1)] };
    rec.k = el === mapEl ? "mapa" : proprio ? "texto" : midia ? "midia" : geom ? "svg" : "caixa";
    rec.n = nomeDe(el);
    if (proprio) rec.t = proprio.slice(0, 60);
    if (cheia) rec.cheia = 1;
    if (ehSvg) {
      const pintura = rgba(s.fill) && s.fill !== "none" ? s.fill : s.stroke;
      const cor = rgba(pintura); if (cor) { const fo = +(s.fill !== "none" ? s.fillOpacity : s.strokeOpacity); if (isFinite(fo)) cor[3] *= fo; rec.c = cor.map((v) => +(+v).toFixed(3)); }
      if (s.stroke && s.stroke !== "none") rec.sw = +parseFloat(s.strokeWidth || "0").toFixed(2);
      if (s.strokeDasharray && s.strokeDasharray !== "none" && typeof el.getTotalLength === "function") {
        try { const a0 = parseFloat(String(s.strokeDasharray).split(/[ ,]+/)[0]); const pl = parseFloat(el.getAttribute("pathLength")); const len = pl > 0 ? pl : el.getTotalLength(); rec.d = [+(parseFloat(s.strokeDashoffset) || 0).toFixed(1), a0, +len.toFixed(1)]; } catch (e) {}
      }
    } else {
      const cor = rgba(alfa(s.backgroundColor) > 0.04 ? s.backgroundColor : s.color); if (cor) rec.c = cor.map((v) => +(+v).toFixed(3));
      if (rec.k === "caixa") { rec.fa = +alfa(s.backgroundColor).toFixed(2); if (/url\(/.test(s.backgroundImage) && !/url\(\s*["']?data:image\/svg/.test(s.backgroundImage)) rec.bi = 1; }
    }
    if (s.filter && s.filter !== "none") rec.f = (s.filter.match(/-?[\d.]+/g) || []).map(Number);
    if (tag === "IMG") rec.src = (el.currentSrc || el.src || "").slice(-80);
    // v2 (K21): o vídeo só anda na tela se tem quadro (readyState ≥ 2); o que não carregou é uma caixa parada, e não conta
    if (tag === "VIDEO") { rec.src = (el.currentSrc || el.src || "").slice(-80); if (el.readyState >= 2) rec.vt = +el.currentTime.toFixed(3); }
    if (/(sombra|shadow|luz|glow|brilho|halo)/i.test(clsDe(el) + " " + (el.id || ""))) rec.amb = 1;
    els.push(rec);
    if (proprio && op >= 0.5) textos.push(rec);
    if ((/^(IMG|VIDEO|CANVAS)$/.test(tag) || (geom && !proprio) || rec.bi || rec.k === "caixa") && op >= 0.5 && !cheia && !rec.amb) midias.push(rec);
  }
  // 3. o mapa na tela: 15 pontos; cada um coberto pelo maior oclusor que o contém
  if (m) {
    const opM = opac(mapEl), stM = cs(mapEl);
    let ok = 0, n = 0; const conta = new Map();
    for (const fy of [0.1, 0.3, 0.5, 0.7, 0.9]) for (const fx of [0.1, 0.5, 0.9]) {
      n++; const x = fx * W, y = fy * H;
      if (opM < 0.5 || stM.visibility !== "visible") continue;
      if (!document.getElementById("__pvPE")) { const st = document.createElement("style"); st.id = "__pvPE"; st.textContent = "*{pointer-events:auto!important}"; document.head.appendChild(st); }
      let vis = false, oc = null;
      for (const el of document.elementsFromPoint(x, y)) {
        if (el === mapEl || mapEl.contains(el)) { vis = true; break; }
        if (el.contains(mapEl)) continue;
        if (opac(el) >= 0.9 && (/^(IMG|VIDEO)$/.test(el.tagName) || (!(el instanceof SVGElement) && alfa(cs(el).backgroundColor) >= 0.9))) { oc = el; break; }
      }
      if (vis) ok++; else if (oc) conta.set(idDe(oc), (conta.get(idDe(oc)) || 0) + 1);
    }
    out.vis = +(ok / n).toFixed(3);
    out.oc = [...conta.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
    out.ocs = oclusores.map((o) => o.i);
  }
  if (!completo) return out;
  out.els = els;
  // 4. o "·" e o "•" na ponta da linha
  const pontos = [];
  const ehBloco = (el) => { const d = cs(el).display; if (/^(inline|contents|inline-block|inline-flex|inline-grid)$/.test(d)) return false;
    const pd = el.parentElement ? cs(el.parentElement).display : ""; return !/(flex|grid)$/.test(pd); };
  const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: (n) => /[·•]/.test(n.textContent) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT });
  const rectDe = (no, k) => { const rg = document.createRange(); rg.setStart(no, k); rg.setEnd(no, k + 1); const q = [...rg.getClientRects()].find((q) => q.width > 0.5 && q.height > 0.5); return q || null; };
  const mesmaLinha = (a, b) => { const ov = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top); return ov >= 0.5 * Math.min(a.height, b.height); };
  let no;
  while ((no = tw.nextNode())) {
    const pai = no.parentElement; if (!pai || (mapEl && mapEl.contains(pai))) continue;
    const op = opac(pai); if (op < 0.5 || cs(pai).visibility !== "visible") continue;
    if (pai instanceof SVGElement) {   // no SVG, a linha é o <text>/<tspan> dono do texto
      let lin = pai; while (lin.parentElement && /^tspan$/i.test(lin.tagName) && !["x", "y", "dy"].some((a) => lin.hasAttribute(a))) lin = lin.parentElement;
      const tx = lin.textContent.replace(/\s+/g, " ").trim();
      const ini = /^·/.test(tx), fim = /[·•]$/.test(tx);   // v2 (K13): o "•" que abre a linha é o marcador de lista; só o "·" conta no começo
      if (ini || fim) pontos.push({ i: idDe(lin), n: nomeDe(pai), o: +op.toFixed(3), ch: ini ? tx[0] : tx[tx.length - 1], pos: ini && fim ? "sozinho" : ini ? "inicio" : "fim", linha: tx.slice(0, 50) });
      continue;
    }
    let bloco = pai; while (bloco && bloco !== document.body && !ehBloco(bloco)) bloco = bloco.parentElement;
    const nos = []; const tw2 = document.createTreeWalker(bloco || document.body, NodeFilter.SHOW_TEXT); let x; while ((x = tw2.nextNode())) nos.push(x);
    const iNo = nos.indexOf(no);
    // o caractere visível vizinho (antes/depois), saltando espaços e o que não tem caixa
    const vizinho = (iN, k, passo) => {
      for (let a = iN, kk = k; a >= 0 && a < nos.length; a += passo, kk = null) {
        // v2 (K14): a palavra que ainda não entrou (opacidade acumulada < 0,5, ou escondida) não é vizinha: o "·" fica pendurado na tela
        const pe = nos[a].parentElement; if (a !== iN && pe && (opac(pe) < 0.5 || cs(pe).visibility !== "visible")) continue;
        const tx = nos[a].textContent; let j = kk == null ? (passo < 0 ? tx.length - 1 : 0) : kk;
        for (; j >= 0 && j < tx.length; j += passo) { if (/\s/.test(tx[j])) continue; const q = rectDe(nos[a], j); if (q) return q; }
      }
      return null;
    };
    const tx = no.textContent;
    for (let k = 0; k < tx.length; k++) {
      if (!/[·•]/.test(tx[k])) continue;
      const q = rectDe(no, k); if (!q) continue;
      if (q.right <= 0 || q.bottom <= 0 || q.left >= W || q.top >= H) continue;
      const ant = vizinho(iNo, k - 1, -1), dep = vizinho(iNo, k + 1, 1);
      let ini = !ant || !mesmaLinha(ant, q); const fim = !dep || !mesmaLinha(q, dep);
      // v2 (K13): o "•" que abre o texto do elemento é o marcador de lista, não o separador da regra da quebra (redator-de-tela §3)
      if (tx[k] === "•" && ini && !fim && !/\S/.test(tx.slice(0, k)) && !nos.slice(0, iNo).some((y) => pai.contains(y) && /\S/.test(y.textContent))) ini = false;
      if (ini || fim) pontos.push({ i: idDe(pai), n: nomeDe(pai), o: +op.toFixed(3), ch: tx[k], pos: ini && fim ? "sozinho" : ini ? "inicio" : "fim",
        linha: tx.slice(Math.max(0, k - 30), k + 20).replace(/\s+/g, " ").trim(), x: Math.round(q.left), y: Math.round(q.top) });
    }
  }
  out.pontos = pontos;
  // 5. os campos: a caixa opaca (≥ 0,6), não de tela cheia, de 160 × 80 ou mais, e se há texto ou foto (o centro) dentro dela
  const campos = [];
  for (const e of els) {
    if (e.k !== "caixa" || e.cheia || e.amb || !(e.fa >= 0.6) || e.o < 0.5) continue;
    const [x, y, x2, y2] = e.b; if (x2 - x < 160 || y2 - y < 80) continue;
    if (x2 - x >= 0.9 * W || y2 - y >= 0.9 * H) continue;
    const dentro = (r) => { const cx = (r.b[0] + r.b[2]) / 2, cy = (r.b[1] + r.b[3]) / 2; return r !== e && cx >= x && cx <= x2 && cy >= y && cy <= y2; };
    const cobre = (r) => { const ix = Math.min(r.b[2], x2) - Math.max(r.b[0], x), iy = Math.min(r.b[3], y2) - Math.max(r.b[1], y); return ix > 0 && iy > 0 && ix * iy >= 0.5 * (r.b[2] - r.b[0]) * (r.b[3] - r.b[1]); };
    const aE = (x2 - x) * (y2 - y), aR = (r) => (r.b[2] - r.b[0]) * (r.b[3] - r.b[1]);
    const conteudo = (r) => r !== e && cobre(r) && aR(r) >= 0.02 * aE && (r.k === "midia" || (r.bi && aR(r) <= 0.95 * aE) || (r.k === "svg" && aR(r) <= 0.9 * aE) || (r.k === "caixa" && r.fa >= 0.6 && aR(r) <= 0.6 * aE));
    campos.push({ i: e.i, n: e.n, b: e.b, o: e.o, tx: textos.some(dentro) ? 1 : 0, md: midias.some(conteudo) ? 1 : 0 });
  }
  out.campos = campos;
  // 6. o registro do mapa desde a amostra anterior
  out.log = window.__pvLog ? window.__pvLog.splice(0) : [];
  // 7. há canvas 2D fora do mapa, visível?
  out.canvas2d = [...document.querySelectorAll("canvas")].some((cv) => (!mapEl || !mapEl.contains(cv)) && opac(cv) >= 0.1 && cs(cv).visibility === "visible" && cv.width > 100);
  return out;
}

// ── a análise ────────────────────────────────────────────────────────────────────────────────────────────────────────
const maxAbs = (a) => a.reduce((m, v) => Math.max(m, Math.abs(v)), 0);
const r2 = (v) => Math.round(v * 100) / 100;

// o que conta entre duas amostras (a anterior e a atual): a lista de eventos, cada um [tipo, nome]
export function eventosEntre(a, b, dt, L = LIM, estado = new Map()) {
  const ev = [];
  const ea = new Map((a.els || []).map((e) => [e.i, e])), eb = new Map((b.els || []).map((e) => [e.i, e]));
  const ids = new Set([...ea.keys(), ...eb.keys()]);
  for (const id of ids) {
    const ra = ea.get(id), rb = eb.get(id), r = rb || ra;
    if (r.k === "mapa") { if (Math.abs((rb ? rb.o : 0) - (ra ? ra.o : 0)) >= L.OP_EVENTO) ev.push(["mapa", r.n]); continue; }
    const oa = ra ? ra.o : 0, ob = rb ? rb.o : 0;
    if (Math.max(oa, ob) < L.OP_VISIVEL) continue;
    const w = r.b[2] - r.b[0], h = r.b[3] - r.b[1];
    if (Math.max(w, h) < L.TAM_MIN) continue;
    if (Math.abs(ob - oa) >= L.OP_EVENTO) { ev.push([ob > oa ? "entra" : "sai", r.n + (r.t ? ` “${r.t.slice(0, 24)}”` : "")]); continue; }
    if (!ra || !rb) continue;
    const d = Math.max(...ra.b.map((v, k) => Math.abs(v - rb.b[k])));
    if (d / dt >= L.V_PARADO && !rb.cheia) { ev.push(["move", r.n + (r.t ? ` “${r.t.slice(0, 24)}”` : "")]); continue; }
    if ((ra.t || "") !== (rb.t || "")) { ev.push(["texto", r.n]); continue; }
    if (ra.c && rb.c && (Math.max(Math.abs(ra.c[0] - rb.c[0]), Math.abs(ra.c[1] - rb.c[1]), Math.abs(ra.c[2] - rb.c[2])) >= L.COR_MIN || Math.abs(ra.c[3] - rb.c[3]) >= 0.1)) { ev.push(["cor", r.n]); continue; }
    if (ra.sw != null && rb.sw != null && Math.abs(ra.sw - rb.sw) >= Math.max(1, 0.15 * ra.sw)) { ev.push(["traço", r.n]); continue; }
    if (ra.d && rb.d && rb.d[1] >= 0.5 * rb.d[2] && rb.d[2] > 0 && Math.abs(ra.d[0] - rb.d[0]) >= 0.01 * rb.d[2]) { ev.push(["desenha", r.n]); continue; }
    if ((ra.f || rb.f) && maxAbs((rb.f || []).map((v, k) => v - ((ra.f || [])[k] ?? v))) >= 0.05) { ev.push(["filtro", r.n]); continue; }
    if ((ra.src || "") !== (rb.src || "")) { ev.push(["troca", r.n]); continue; }
    if (rb.vt != null && ra.vt != null && Math.abs(rb.vt - ra.vt) > 0.01) { ev.push(["vídeo", r.n]); continue; }
  }
  for (const [tipo, alvo, prop, v] of b.log || []) {
    const k = tipo + "|" + alvo + "|" + prop, antes = estado.get(k); estado.set(k, v);
    if (antes === v) continue;
    const na = Number(antes), nv = Number(v);
    if (antes !== undefined && isFinite(na) && isFinite(nv)) {
      const lim = /opacity/.test(prop) ? 0.05 : /width|radius|blur|size/.test(prop) ? Math.max(0.5, 0.15 * Math.abs(na)) : Math.max(1e-6, 0.05 * Math.abs(na));
      if (Math.abs(nv - na) < lim) continue;
    }
    ev.push(["camada", `${tipo} ${alvo}${prop ? " " + prop : ""}`]);
  }
  return ev;
}

// a câmera entre duas amostras
function cinema(a, b, dt) {
  if (!a.cam || !b.cam || !b.cam.fluxo) return null;
  const f = b.cam.fluxo.filter((v) => v != null);
  let db = b.cam.b - a.cam.b; while (db > 180) db -= 360; while (db < -180) db += 360;
  return { fluxo: f.length ? Math.max(...f) / dt : 0, centro: (b.cam.fluxo[4] ?? 0) / dt, vz: (b.cam.z - a.cam.z) / dt, giro: Math.abs(db) / dt };
}

// os trechos parados: o mapa na tela e nada contando, por mais de T_PARADO
export function trechosParados(A, L = LIM) {
  const estado = new Map(); const marca = [];
  for (const [tipo, alvo, prop, v] of (A[0] && A[0].log) || []) estado.set(tipo + "|" + alvo + "|" + prop, v);   // o estado do mapa no 1º quadro
  for (let i = 1; i < A.length; i++) {
    const a = A[i - 1], b = A[i], dt = b.t - a.t;
    const ev = eventosEntre(a, b, dt, L, estado);
    const c = cinema(a, b, dt);
    const mapa = a.vis != null && b.vis != null && a.vis >= 0.5 && b.vis >= 0.5 && c;
    marca.push({ t0: a.t, t1: b.t, mapa: !!mapa, fluxo: c ? c.fluxo : null, ev });
  }
  const trechos = [];
  for (let i = 0; i < marca.length; ) {
    const parado = (m) => m.mapa && m.fluxo < L.V_PARADO && !m.ev.length;
    if (!parado(marca[i])) { i++; continue; }
    let j = i; while (j + 1 < marca.length && parado(marca[j + 1])) j++;
    const t0 = marca[i].t0, t1 = marca[j].t1;
    const antes = [...marca.slice(0, i)].reverse().find((m) => m.ev.length || (m.mapa && m.fluxo >= L.V_PARADO));
    const depois = marca.slice(j + 1).find((m) => m.ev.length || (m.mapa && m.fluxo >= L.V_PARADO));
    const descreve = (m) => !m ? null : m.ev.length ? `${m.ev[0][0]} ${m.ev[0][1]} @${r2(m.t1)}s` : `a câmera a ${Math.round(m.fluxo)} px/s @${r2(m.t1)}s`;
    trechos.push({ t0: r2(t0), t1: r2(t1), dur: r2(t1 - t0), fluxo_max: Math.round(Math.max(...marca.slice(i, j + 1).map((m) => m.fluxo))), antes: descreve(antes), depois: descreve(depois) });
    i = j + 1;
  }
  return { trechos, marca };
}

// as viagens: os picos de fluxo ≥ F_VIAGEM, com o núcleo (fluxo ≥ 10 % do pico); devolve [{i0, i1, pico}] em índices de intervalo
export function picosDeViagem(serie, L = LIM) {
  // serie: [{t0, t1, fluxo|null}]
  const usados = new Array(serie.length).fill(false), out = [];
  const ordem = serie.map((s, i) => [s.fluxo ?? 0, i]).filter(([f]) => f >= L.F_VIAGEM).sort((a, b) => b[0] - a[0]);
  for (const [pico, i] of ordem) {
    if (usados[i]) continue;
    let i0 = i, i1 = i;
    // a viagem inteira (até 2 % do pico, como a partida e a chegada): as caudas não viram viagens à parte
    const cauda = Math.max(L.V_PARADO, L.ONSET * pico);
    while (i0 - 1 >= 0 && (serie[i0 - 1].fluxo ?? 0) >= cauda && !usados[i0 - 1]) i0--;
    while (i1 + 1 < serie.length && (serie[i1 + 1].fluxo ?? 0) >= cauda && !usados[i1 + 1]) i1++;
    for (let k = i0; k <= i1; k++) usados[k] = true;
    out.push({ i0, i1, pico });
  }
  return out.sort((a, b) => a.i0 - b.i0);
}

// o núcleo, com o cruzamento dos 10 % interpolado entre os meios dos intervalos
export function nucleo(fino, L = LIM) {
  // fino: [{t0, t1, fluxo, vz, centro, giro}] (só os intervalos com o mapa na tela)
  let ip = -1, pico = 0; fino.forEach((s, i) => { if (s.fluxo > pico) { pico = s.fluxo; ip = i; } });
  if (ip < 0) return null;
  const lim = L.NUCLEO * pico, meio = (s) => (s.t0 + s.t1) / 2;
  let a = ip; while (a - 1 >= 0 && fino[a - 1].fluxo >= lim && fino[a].t0 - fino[a - 1].t1 < 1e-6) a--;
  let z = ip; while (z + 1 < fino.length && fino[z + 1].fluxo >= lim && fino[z + 1].t0 - fino[z].t1 < 1e-6) z++;
  const truncIni = a === 0 || fino[a].t0 - fino[a - 1].t1 > 1e-6, truncFim = z === fino.length - 1 || fino[z + 1].t0 - fino[z].t1 > 1e-6;
  const cruza = (s1, s2, l = lim) => { const f1 = s1.fluxo, f2 = s2.fluxo; const u = f2 === f1 ? 0.5 : (l - f1) / (f2 - f1); return meio(s1) + Math.min(1, Math.max(0, u)) * (meio(s2) - meio(s1)); };
  const ini = truncIni ? fino[a].t0 : cruza(fino[a - 1], fino[a]);
  const fim = truncFim ? fino[z].t1 : cruza(fino[z], fino[z + 1]);
  const trecho = fino.slice(a, z + 1);
  const vz = trecho.reduce((m, s) => Math.abs(s.vz) > Math.abs(m) ? s.vz : m, 0);
  // a partida e a chegada: onde o fluxo passa de 2 % do pico (e da câmera parada), andando do núcleo para fora; a deriva lenta que
  // vem antes ou depois (o empurrão da s57, a aproximação da s38 consertada) fica abaixo disso e não se soma à viagem
  const lim2 = Math.max(L.V_PARADO, L.ONSET * pico);
  let pa = a; while (pa - 1 >= 0 && fino[pa - 1].fluxo >= lim2 && fino[pa].t0 - fino[pa - 1].t1 < 1e-6) pa--;
  let pz = z; while (pz + 1 < fino.length && fino[pz + 1].fluxo >= lim2 && fino[pz + 1].t0 - fino[pz].t1 < 1e-6) pz++;
  const partidaCortada = pa === 0 || fino[pa].t0 - fino[pa - 1].t1 > 1e-6, chegadaCortada = pz === fino.length - 1 || fino[pz + 1].t0 - fino[pz].t1 > 1e-6;
  const partida = partidaCortada ? fino[pa].t0 : cruza(fino[pa - 1], fino[pa], lim2);
  const chegada = chegadaCortada ? fino[pz].t1 : cruza(fino[pz], fino[pz + 1], lim2);
  const todo = fino.slice(pa, pz + 1), vzMin = Math.min(0, ...todo.map((s) => s.vz)), vzMax = Math.max(0, ...todo.map((s) => s.vz));
  return { ini, fim, dur: fim - ini, pico, ip, a, z, truncIni, truncFim, vz, vzMin, vzMax, partida, chegada, partidaCortada, chegadaCortada,
    centro: Math.max(...trecho.map((s) => s.centro)), giro: Math.max(...trecho.map((s) => s.giro)),
    dz: (trecho.length ? fino[z].z1 - fino[a].z0 : 0) };
}

// o corte: o que cobria o mapa sumiu de uma vez (não encolheu nem esmaeceu aos poucos)
function corteEntre(a, b) {
  if (a.vis == null || b.vis == null) return null;
  if (a.vis < 0.5 && b.vis >= 0.5) {   // o mapa aparece
    const oc = a.oc; if (oc == null) return { tipo: "aparece", corte: !!(a.cam && b.cam && a.cam.op < 0.1 && b.cam.op >= 0.9) };
    const rb = (b.els || []).find((e) => e.i === oc);
    const sumiu = !rb || rb.o < 0.5;   // de ≥ 0,9 a < 0,5 numa amostra; a fusão mais lenta (a troca de 500 ms da s61) não é corte
    const ra = (a.els || []).find((e) => e.i === oc);
    const area = (r) => r ? (r.b[2] - r.b[0]) * (r.b[3] - r.b[1]) : 0;
    const encolheu = rb && ra && area(rb) < 0.97 * area(ra);
    return { tipo: "aparece", corte: !!sumiu && !encolheu, oc };
  }
  if (a.vis >= 0.5 && b.vis < 0.5) {   // o mapa some
    const oc = b.oc; if (oc == null) return { tipo: "some", corte: !!(a.cam && b.cam && a.cam.op >= 0.9 && b.cam.op < 0.1) };
    const ra = (a.els || []).find((e) => e.i === oc);
    return { tipo: "some", corte: !ra || ra.o < 0.5, oc };
  }
  return null;
}

// ── uma cena ──────────────────────────────────────────────────────────────────────────────────────────────────────
export async function medirCena(b, html, L0, opts, libs) {
  const L = opts.lim || LIM;
  const texto = readFileSync(html, "utf8");
  const sha1 = createHash("sha1").update(texto).digest("hex");
  const cena = basename(html).replace(/\.html$/i, "");
  const base = { cena, arquivo: html, sha1, versao: VERSAO, passo: opts.passo };
  const { w, h } = await libs.palcoDaCena(texto);
  if (w !== L.W || h !== L.H) return { ...base, veredito: NAO_MEDIDO, motivo: `o palco da cena é ${w} × ${h}, e a marca é ${L.W} × ${L.H} (falta data-render="4k-native"?)` };
  const ctx = await b.newContext({ viewport: { width: w, height: h } });
  const rede = { respondidos: 0, cortados: 0, urls: new Set() };
  await prenderRede(ctx, L0, rede);
  const p = await ctx.newPage();
  const erros = []; p.on("pageerror", (e) => erros.push(String(e.message).slice(0, 140)));
  const inicio = Date.now();
  try {
    let ab;
    try { ab = await libs.abrirCenaParaMedir(p, html, { textoDoArquivo: texto, timeoutLoadMs: 60000 }); }
    catch (e) { return { ...base, veredito: NAO_MEDIDO, motivo: "a cena não abriu: " + String(e.message).split("\n")[0].slice(0, 140) }; }
    const ok = await p.waitForFunction(() => typeof window.__renderAt === "function" && window.__duracao > 0, null, { timeout: 30000 }).then(() => true, () => false);
    if (!ok) return { ...base, veredito: NAO_MEDIDO, motivo: "a cena não expõe __renderAt e __duracao" };
    if (ab.ehMapa && !ab.mapaAssentou) return { ...base, eh_mapa: true, veredito: NAO_MEDIDO, motivo: "o mapa não assentou (o __aguardarMapa não respondeu em 8 s)", rede: { respondidos: rede.respondidos, cortados: rede.cortados } };
    const temMapa = await p.evaluate(instrumentarMapa);
    await p.evaluate((fn) => { window.__pvColetar = (0, eval)("(" + fn + ")"); }, coletarMov.toString());
    const dur = await p.evaluate(() => window.__duracao);
    const ts = []; for (let t = 0; t < dur - 1e-6; t += opts.passo) ts.push(+t.toFixed(3)); ts.push(+(dur - 1 / 30).toFixed(3));
    const ir = async (t, completo, vaga) => p.evaluate(async ({ t, teto, W, H, completo, vaga }) => {
      await Promise.race([window.__renderAt(t), new Promise((_, r) => setTimeout(() => r(new Error("o __renderAt não voltou em 30 s")), 30000))]);
      if (typeof window.__aguardarMapa === "function") await Promise.race([window.__aguardarMapa(), new Promise((r) => setTimeout(r, teto))]);
      return window.__pvColetar({ W, H, completo, vaga });
    }, { t, teto: TETO_MAPA_MS, W: w, H: h, completo, vaga });
    const A = [];
    for (const t of ts) A.push({ t, ...(await ir(t, true, "g")) });
    const erroCena = await p.evaluate(() => String(window.__erroCena || "")).catch(() => "");
    const redeOut = () => ({ respondidos: rede.respondidos, cortados: rede.cortados, relevo: rede.relevo || 0, pedidos: [...rede.urls].slice(0, 6) });
    if (erroCena) return { ...base, eh_mapa: ab.ehMapa, veredito: NAO_MEDIDO, motivo: "a cena declarou erro (window.__erroCena): " + erroCena.slice(0, 140), rede: redeOut() };
    const itens = [], avisos = [], notas = [];
    // 1. o mapa parado
    const { trechos, marca } = trechosParados(A, L);
    const canvas2d = A.some((x) => x.canvas2d);
    for (const tr of trechos) if (tr.dur > L.T_PARADO + 1e-6) itens.push({ tipo: "mapa-parado", t0: tr.t0, t1: tr.t1, v: tr.dur, lim: L.T_PARADO, sinal: "≤",
      regra: "identidade §5, \"Mapa nunca fica parado\" (mais de 2 s ganha aproximação que se veja)",
      detalhe: `a câmera a no máximo ${tr.fluxo_max} px/s (conta a partir de ${L.V_PARADO}) e nada novo na tela; antes: ${tr.antes || "o começo"}; depois: ${tr.depois || "o fim"}${canvas2d ? "; há canvas 2D na cena (o que se desenha nele não conta: confira)" : ""}` });
    // 2. as viagens
    const viagens = [];
    if (temMapa && ab.ehMapa) {
      const serie = marca.map((m) => ({ t0: m.t0, t1: m.t1, fluxo: m.mapa ? m.fluxo : null }));
      // o instante do corte, a 1/30 s, entre duas amostras gerais: o 1º quadro em que o mapa está (aparece) ou deixou de estar (some)
      const instanteDoCorte = async (i, tipo) => {
        for (let t = A[i - 1].t + L.FINO; t < A[i].t - 1e-6; t += L.FINO) {
          const x = await ir(+t.toFixed(4), false, "c");
          if (tipo === "aparece" ? x.vis >= 0.5 : x.vis < 0.5) return t;
        }
        return A[i].t;
      };
      for (const pk of picosDeViagem(serie, L)) {
        // a medida fina, só a câmera e o mapa na tela, a 1/30 s, de 0,6 s antes a 0,6 s depois do núcleo
        const ta = Math.max(0, serie[pk.i0].t0 - 0.6), tb = Math.min(dur - 1 / 30, serie[pk.i1].t1 + 0.6);
        const F = [];
        for (let t = ta; t <= tb + 1e-6; t += L.FINO) F.push({ t: +t.toFixed(4), ...(await ir(+t.toFixed(4), false, "f" + pk.i0)) });
        const fino = [];
        for (let k = 1; k < F.length; k++) {
          const a = F[k - 1], c = F[k], dt = c.t - a.t, ci = cinema(a, c, dt);
          if (!ci || !(a.vis >= 0.5 && c.vis >= 0.5)) continue;
          fino.push({ t0: a.t, t1: c.t, ...ci, z0: a.cam.z, z1: c.cam.z });
        }
        const nu = nucleo(fino, L); if (!nu || nu.pico < L.F_VIAGEM) continue;
        if (viagens.some((v) => Math.min(v.nucleo[1], nu.fim) - Math.max(v.nucleo[0], nu.ini) > 0)) continue;   // a mesma viagem, achada de novo
        const nominal = Math.min(nu.dur / L.FRACAO_CUBICO, nu.partidaCortada || nu.chegadaCortada ? Infinity : (nu.chegada - nu.partida) / L.FRACAO_ONSET), partida = nu.partida, chegada = nu.chegada;
        const v = { t0: r2(partida), t1: r2(chegada), nucleo: [r2(nu.ini), r2(nu.fim)], duracao: r2(nominal), pico_fluxo: Math.round(nu.pico), pico_zoom: r2(nu.vz),
          sentido: nu.vz < -0.05 ? "recuo" : nu.vz > 0.05 ? "mergulho" : "lateral", pico_centro: Math.round(nu.centro), pico_giro: r2(nu.giro), truncada: nu.truncIni || nu.truncFim };
        // o corte antes (o último "aparece" antes da partida, sem "some" no meio) e depois (o 1º "some" depois da chegada)
        let iAntes = -1; for (let i = 1; i < A.length && A[i - 1].t < partida - 1e-6; i++) { const c = corteEntre(A[i - 1], A[i]); if (c && c.tipo === "aparece") iAntes = i; if (c && c.tipo === "some") iAntes = -1; }
        if (iAntes > 0) {
          const c = corteEntre(A[iAntes - 1], A[iAntes]), tc = await instanteDoCorte(iAntes, "aparece");
          v.corte_antes = { t: r2(tc), corte: c.corte }; v.vista_antes = r2(partida - tc);
        } else v.vista_antes = null;
        let iDepois = -1; for (let i = 1; i < A.length; i++) { if (A[i].t <= chegada + 1e-6) continue; const c = corteEntre(A[i - 1], A[i]); if (c && c.tipo === "some") { iDepois = i; break; } if (c && c.tipo === "aparece") break; }
        if (iDepois > 0) { const c = corteEntre(A[iDepois - 1], A[iDepois]), tc = await instanteDoCorte(iDepois, "some"); v.corte_depois = { t: r2(tc), corte: c.corte }; v.vista_depois = r2(tc - chegada); }
        viagens.push(v);
        const onde = `${v.sentido}, ${v.t0}–${v.t1} s, ${Math.abs(nu.dz).toFixed(2)} níveis de zoom, pico ${v.pico_zoom} níveis/s e ${v.pico_fluxo} px/s`;
        if (!v.truncada && nominal < L.VIAGEM_MIN) itens.push({ tipo: "viagem-curta", t0: v.t0, t1: v.t1, v: v.duracao, lim: L.VIAGEM_MIN, sinal: "≥",
          regra: "identidade §4.4, \"Viagem de mapa: 1,5–3 s, easing cúbico de entrada e saída\"", detalhe: `${onde}; o núcleo (fluxo ≥ 10 % do pico) dura ${r2(nu.dur)} s` });
        // v2 (o cético, K7, e o Lucas, 18/11/2026: "Só aviso (Recomendado)"): o recuo rápido é AVISO, não reprovação. A marca não tem número para a
        // velocidade da câmera, e os achados se contradizem (o M1, s13, 5,09 níveis/s, mantido; o D29, s61, 6,25, derrubado).
        if (nu.vzMin < -L.RECUO_MAX) avisos.push({ tipo: "recuo-brusco", t: v.t0, v: r2(-nu.vzMin), lim: L.RECUO_MAX,
          detalhe: `${onde}; a régua de ${L.RECUO_MAX} níveis/s vem do achado da s13 do vídeo 7 (mantido a 5,09), não da marca, e a s61 (6,25) foi derrubada: só aviso, por decisão do Lucas (18/11/2026)` });
        if (v.corte_antes && v.corte_antes.corte && v.vista_antes < L.VISTA_MIN) itens.push({ tipo: "partida-sem-vista", t0: v.corte_antes.t, t1: v.t0, v: v.vista_antes, lim: L.VISTA_MIN, sinal: "≥",
          regra: "a s38 da r2 (o voo logo depois do corte); identidade §4.4, os 250 ms de repouso na ponta do corte", detalhe: `o mapa aparece por corte em ${v.corte_antes.t} s e a viagem parte em ${v.t0} s (${onde})` });
        if (v.corte_depois && v.corte_depois.corte && v.vista_depois < L.VISTA_MIN) avisos.push({ tipo: "chegada-sem-vista", t: v.t1, v: v.vista_depois, lim: L.VISTA_MIN, detalhe: `a viagem pousa em ${v.t1} s e o corte vem em ${v.corte_depois.t} s (${onde})` });
        if (nu.vzMax > L.MERGULHO_AVISO) avisos.push({ tipo: "mergulho-rapido", t: v.t0, v: r2(nu.vzMax), lim: L.MERGULHO_AVISO, detalhe: onde });
        if (nu.centro > L.PAN_AVISO) avisos.push({ tipo: "deslocamento-rapido", t: v.t0, v: v.pico_centro, lim: L.PAN_AVISO, detalhe: onde });
        if (nu.giro > L.GIRO_AVISO) avisos.push({ tipo: "giro-rapido", t: v.t0, v: v.pico_giro, lim: L.GIRO_AVISO, detalhe: onde });
        if (partida < 0.25) avisos.push({ tipo: "viagem-na-emenda", t: v.t0, v: v.t0, detalhe: `a viagem começa no 1º quarto de segundo (${onde}): confira a emenda com a cena anterior` });
      }
    } else if (ab.ehMapa) notas.push("cena de mapa sem window.map: a câmera não se mediu (o mapa parado e a viagem ficam NÃO MEDIDO)");
    // 3. o "·" na quebra
    const pts = new Map();
    for (const x of A) for (const q of x.pontos || []) {
      if (q.o < L.OP_TEXTO) continue;
      const k = q.i + "|" + q.pos + "|" + q.linha; const g = pts.get(k);
      if (!g) pts.set(k, { ...q, t0: x.t, t1: x.t, n: 1, nome: q.n }); else { g.t1 = x.t; g.n++; }
    }
    for (const g of pts.values()) itens.push({ tipo: "ponto-na-quebra", t0: g.t0, t1: g.t1, v: g.pos, lim: "no meio da linha", sinal: "",
      regra: "redator-de-tela §3, a regra da quebra (\"nenhuma linha de texto começa nem termina com '·'\")", detalhe: `“${g.ch}” no ${g.pos === "fim" ? "fim" : g.pos === "inicio" ? "começo" : "começo e no fim"} da linha, em ${g.nome}: “…${g.linha}…” (${g.n} amostra(s))` });
    // 4. o campo em branco
    const camp = new Map();
    A.forEach((x, k) => { for (const c of x.campos || []) { if (!camp.has(c.i)) camp.set(c.i, []); camp.get(c.i).push({ k, t: x.t, ...c }); } });
    for (const [, seq] of camp) {
      if (!seq.some((s) => s.tx || s.md)) continue;   // a caixa que nunca ganha texto nem foto não é campo (a régua, a moldura)
      const corridas = []; let cur = null;
      for (let j = 0; j < seq.length; j++) {
        const s = seq[j], ant = seq[j - 1], contiguo = ant && ant.k === s.k - 1;
        const vel = contiguo ? Math.max(...s.b.map((v, q) => Math.abs(v - ant.b[q]))) / (s.t - ant.t) : Infinity;
        const branco = !s.tx && !s.md && s.o >= 0.5 && vel < L.CAMPO_MOV;
        if (branco && cur && contiguo) { cur.j1 = j; continue; }
        if (cur) { corridas.push(cur); cur = null; }
        if (branco) cur = { j0: j, j1: j };
      }
      if (cur) corridas.push(cur);
      for (const c of corridas) {
        const t0 = seq[c.j0].t, t1 = seq[c.j1].t + opts.passo;
        const depois = seq.slice(c.j1 + 1).find((x) => x.tx || x.md);
        if (!depois || t1 - t0 < L.CAMPO_MIN - 1e-6) continue;
        itens.push({ tipo: "campo-em-branco", t0: r2(t0), t1: r2(t1), v: r2(t1 - t0), lim: L.CAMPO_MIN, sinal: "<",
          regra: "identidade §5, \"A regra que fica\" (campo em branco esperando a voz não vai à tela); §4.4, o texto 150 ms depois do assentamento",
          detalhe: `${seq[c.j0].n} (${Math.round(seq[c.j0].b[2] - seq[c.j0].b[0])} × ${Math.round(seq[c.j0].b[3] - seq[c.j0].b[1])} px) no ar, assentado e sem texto de ${r2(t0)} a ${r2(t1)} s; o texto entra em ${depois.t} s` });
      }
    }
    // os desvios aceitos pela Sala
    for (const it of itens) {
      const ac = (opts.aceitos || []).find((a) => a.cena === cena && a.tipo === it.tipo && (!a.sha1 || a.sha1 === sha1) && it.t0 >= a.de - 0.05 && it.t1 <= a.ate + 0.05);
      if (!ac && (opts.aceitos || []).some((a) => a.cena === cena && a.tipo === it.tipo && a.sha1 && a.sha1 !== sha1)) notas.push("aceito de " + it.tipo + " de outra versão da cena (outro sha1): não vale");
      if (ac) it.aceito = ac.porque || "desvio aceito pela Sala";
    }
    const reprova = itens.filter((it) => !it.aceito);
    itens.sort((a, b) => a.t0 - b.t0);
    const res = { ...base, eh_mapa: ab.ehMapa, mapa_medido: !!temMapa, duracao: dur, amostras: ts.length, veredito: reprova.length ? 1 : 0, itens, avisos, viagens,
      trechos_quietos: trechos.filter((t) => t.dur > 1).map((t) => [t.t0, t.t1]), canvas2d, notas, rede: redeOut(), erros: erros.slice(0, 5), segundos: Math.round((Date.now() - inicio) / 100) / 10 };
    if (!reprova.length && ab.ehMapa && !temMapa) { res.veredito = NAO_MEDIDO; res.motivo = notas[0]; }
    if (rede.relevo) notas.push(`a cena usa relevo 3D (${rede.relevo} pedidos de terreno respondidos com relevo plano): a câmera é a da cena; o fluxo se mede sobre o relevo plano`);
    return res;
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
  return m ? join(m[1], "_tmp", "portao-movimento.jsonl") : null;
}

function linhaTexto(r) {
  const n = `${r.cena}.html`;
  if (r.veredito === NAO_MEDIDO) return `? ${n}: NÃO MEDIDO — ${r.motivo}`;
  const vs = (r.viagens || []).length;
  const cab = `${r.veredito ? "✗" : "✓"} ${n}  (${r.amostras} amostras de ${r.passo} s em ${r.segundos} s${r.eh_mapa ? `; mapa sem satélite, ${r.rede.respondidos} pedidos respondidos aqui e ${r.rede.cortados} cortados, nenhum à rede; ${vs} viagem(ns) de câmera` : ""})`;
  const lin = [cab];
  for (const a of r.itens || []) lin.push(`    ${a.aceito ? "(aceito) " : ""}${a.tipo} ${a.v}${a.sinal ? ` (limite ${a.sinal} ${a.lim})` : ""} de ${a.t0} a ${a.t1} s · ${a.detalhe} · ${a.regra}${a.aceito ? ` · aceito: ${a.aceito}` : ""}`);
  for (const a of r.avisos || []) lin.push(`    aviso ${a.tipo}: ${a.detalhe}${a.lim != null ? ` (${a.v}; limite ${a.lim})` : ""}`);
  for (const nt of r.notas || []) lin.push(`    nota: ${nt}`);
  if (r.erros?.length) lin.push(`    erros de JS da cena: ${r.erros.slice(0, 3).join(" | ")}`);
  return lin.join("\n");
}

async function main() {
  const argv = process.argv.slice(2);
  const opt = (n) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : null; };
  const passo = Number(opt("passo") ?? 0.1);
  if (!(passo > 0 && passo <= 0.2)) uso("--passo tem de ficar entre 0 e 0,2 s (o trecho parado se mede com ± um passo)");
  const so = opt("so") ? opt("so").split(",").map((s) => s.trim()).filter(Boolean) : null;
  const json = argv.includes("--json"), semReg = argv.includes("--sem-registro"), regArg = opt("registro"), acArg = opt("aceitos");
  const desconhecidos = argv.filter((a) => a.startsWith("--") && !/^--(passo|so|registro|aceitos)=/.test(a) && !["--json", "--sem-registro"].includes(a));
  if (desconhecidos.length) uso(`opção desconhecida: ${desconhecidos.join(" ")}`);
  if ([...process.execArgv, process.env.NODE_OPTIONS || ""].join(" ").includes("chaves-nos-portoes")) uso("rode SEM a pré-carga das chaves: este portão não pede tile, e a chave não entra na página");
  const alvos = argv.filter((a) => !a.startsWith("--"));
  if (!alvos.length) uso("falta a cena");
  if (!existsSync(join(RAIZ, "scripts", "lib", "chrome.mjs"))) uso("rode da raiz do canal (falta scripts/lib/chrome.mjs)");
  let aceitos = [];
  if (acArg) { try { aceitos = JSON.parse(readFileSync(resolve(acArg), "utf8")); if (!Array.isArray(aceitos)) throw new Error("não é uma lista"); } catch (e) { uso(`--aceitos ilegível: ${e.message}`); } }
  const cenas = listarCenas(alvos, so);
  const lib = (f) => import(pathToFileURL(join(RAIZ, "scripts", "lib", f)).href);
  const { morrerComoNaoMedido } = await lib("nao-medido.mjs");
  morrerComoNaoMedido("portao-movimento");
  const { lancarChrome } = await lib("chrome.mjs");
  const { palcoDaCena, abrirCenaParaMedir } = await lib("abrir-cena.mjs");
  const L0 = await ladrilhos();
  const b = await lancarChrome({ chromiumSandbox: false, args: ["--host-resolver-rules=MAP * ~NOTFOUND"] });
  const opts = { passo, aceitos };
  const res = [];
  try {
    for (const html of cenas) {
      let r;
      try { r = await medirCena(b, html, L0, opts, { palcoDaCena, abrirCenaParaMedir }); }
      catch (e) { r = { cena: basename(html, ".html"), arquivo: html, versao: VERSAO, veredito: NAO_MEDIDO, motivo: "a medida quebrou: " + String(e.message).split("\n")[0].slice(0, 160) }; }
      r.quando = new Date().toISOString();
      res.push(r);
      console.log(json ? JSON.stringify(r) : linhaTexto(r));
      const reg = semReg ? null : regArg ? resolve(regArg) : registroPadrao(html);
      if (reg) { mkdirSync(dirname(reg), { recursive: true }); appendFileSync(reg, JSON.stringify(r) + "\n"); }
    }
  } finally { await b.close().catch(() => {}); }
  const rep = res.filter((r) => r.veredito === 1).length, nm = res.filter((r) => r.veredito === NAO_MEDIDO).length;
  if (!json) console.log(`portao-movimento v${VERSAO}: ${res.length} cena(s), ${res.length - rep - nm} passaram, ${rep} reprovaram, ${nm} NÃO MEDIDO.`);
  process.exit(rep ? 1 : nm ? NAO_MEDIDO : 0);
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) await main();
