// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/tags-texto.mjs (linhas 1-38, commit 4afda12).
// O que mudou: nada — só este cabeçalho. É a lista que o qc-carga e o qc-pais-bandeira leem; sem
// ela os dois voltariam a ter cópias próprias, que é exatamente o defeito que o arquivo conta.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * tags-texto.mjs — a lista CANÔNICA de tags que podem carregar texto na tela. Um dono, um lugar.
 *
 * POR QUE ISTO É UM MÓDULO E NÃO UMA CONSTANTE EM CADA GATE (25/jul):
 * a lista morava copiada dentro do `qc-carga` e do `qc-pais-bandeira`. Consertei a do `qc-carga`
 * (faltavam `b,strong,i,em`) e a do outro ficou para trás — no mesmo dia, o `qc-pais-bandeira`
 * declarou "nenhum nome de país na tela" numa cena com **BAHREIN** escrito dentro de um `<b>`.
 * Dois gates, o mesmo ponto cego, um consertado e o outro não: exatamente o apodrecimento que a
 * regra do "um assunto, um dono, um lugar" existe para impedir. Agora quem acrescentar uma tag
 * aqui conserta os dois de uma vez — e qualquer gate futuro nasce enxergando.
 *
 * O MECANISMO DA CEGUEIRA, que é sutil e vale entender antes de mexer: os gates descartam um
 * elemento cujo filho tem texto (a regra anti-dupla-contagem, para não somar pai e filho). Se a
 * tag do filho não está na lista, ela nunca é visitada — e o texto **desaparece das duas pontas**.
 * Uma linha como `<p>Gastou <b>46,5 bi</b> em <small>2025</small></p>` era contada como UM bloco
 * quando a tela mostra três. Toda tag de ênfase/inline que faltar aqui submede a cena inteira.
 */

/** Tags que desenham texto e precisam ser VISITADAS individualmente pelos gates de tela. */
export const TAGS_TEXTO = [
  // estrutura
  "div", "span", "p", "h1", "h2", "h3", "h4", "h5", "h6",
  // ênfase e inline — a família que estava faltando e cegava a conta
  "b", "strong", "i", "em", "small", "mark", "u", "s", "sub", "sup", "abbr", "cite", "q", "time", "code", "kbd",
  // listas, tabelas e formulários (rótulo de ficha técnica mora aqui)
  "li", "dt", "dd", "td", "th", "caption", "label", "figcaption", "legend", "a", "blockquote", "pre",
  // SVG
  "text", "tspan",
];

/** Só as formas/mídias que contam como INFORMAÇÃO GRÁFICA (não texto). */
export const TAGS_GRAFICO = ["img", "image", "rect", "circle", "ellipse", "path", "polygon", "canvas", "video"];

/** Seletor pronto para `querySelectorAll` — texto apenas. */
export const SELETOR_TEXTO = TAGS_TEXTO.join(",");

/** Seletor pronto — texto + gráfico, para quem mede carga total de informação. */
export const SELETOR_TUDO = [...TAGS_TEXTO, ...TAGS_GRAFICO].join(",");
