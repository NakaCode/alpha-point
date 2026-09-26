// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/internacional/texto-de-cena.mjs (linhas 1-156, commit 4afda12).
// O que mudou: nada no que já existia (textoVisivel, residuoPt, numerosDe, normalizar seguem byte a byte); ACRESCENTADOS no fim
// residuoEn e residuoDaOrigem, porque a origem do canal vem do canal.json e pode ser inglês (alpha-point).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// TEXTO DE CENA — o que o espectador LÊ numa cena HTML, extraído de forma determinística.
// Fonte única do "texto visível" para a estação INTERNACIONAL (docs/11-internacional.md):
// o gate `qc-idioma.mjs` e o esqueleto de glossário leem daqui, e nada mais reimplementa isto.
//
// Por que existe: o defeito nº 1 do tradutor-de-tela é texto que CONTINUOU no idioma de origem —
// ele passa em todos os gates numéricos (contrato, overlap, carga) porque nenhum deles olha
// PALAVRA. E o segundo é número que muda de valor na tradução (separador de milhar × decimal),
// que o próprio OFÍCIO chama de "o pior defeito silencioso deste ofício".
//
// O que conta como texto visível:
//   · nós de texto do HTML (fora de <style>, <script> e comentário);
//   · strings de JS que o código injeta no DOM — os rótulos que moram em array/objeto de dados,
//     a armadilha mais comum, porque não aparecem na inspeção visual do arquivo.
// O que NÃO conta (e é filtrado de propósito):
//   · comentário de código — o ofício manda NÃO traduzir comentário; acusá-lo seria alarme falso
//     (medido: os 2 arquivos en-US reais do asteroide têm pt só em comentário de JS);
//   · fragmento de CSS/transform em string ("translateY(", "px)", "rgba(…)"), seletor, id, classe,
//     URL, caminho de mídia e família tipográfica.

const RE_COMENT_BLOCO = /\/\*[\s\S]*?\*\//g;
const RE_COMENT_LINHA = /(^|[^:'"`\\])\/\/[^\n]*/g;

const ENTIDADES = {
  nbsp: " ", amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", times: "×", middot: "·",
  hellip: "…", mdash: "—", ndash: "–", deg: "°", laquo: "«", raquo: "»", euro: "€", pound: "£",
  szlig: "ß", oslash: "ø", aelig: "æ", iquest: "¿", iexcl: "¡", ordm: "º", ordf: "ª", plusmn: "±",
};
// &Ccedil; &Atilde; &Ocirc; … — a forma com que as cenas da casa escrevem acento. Sem isto o
// texto extraído chega como "DESTRUI&Ccedil;&Atilde;O" e nenhuma comparação de termo funciona.
const DIACRITICOS = { acute: "́", grave: "̀", circ: "̂", tilde: "̃", uml: "̈", cedil: "̧", ring: "̊" };

/** Decodifica as entidades HTML que a casa usa nas cenas (numéricas + nomeadas + acentuadas). */
export function decodificar(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&([A-Za-z])(acute|grave|circ|tilde|uml|cedil|ring);/g, (m, l, d) => (l + DIACRITICOS[d]).normalize("NFC"))
    .replace(/&([a-z]+);/gi, (m, n) => ENTIDADES[n.toLowerCase()] ?? m);
}

/** Um literal de string de JS é rótulo de tela ou é código? Só o rótulo interessa. */
function pareceRotulo(s) {
  const t = s.trim();
  if (t.length < 2) return false;
  if (!/[A-Za-zÀ-ÿ]/.test(t)) return false;                       // sem letra = não é rótulo
  if (/^[#.]?[\w-]+$/.test(t)) return false;                      // seletor, id, classe, chave
  if (/^(https?:|data:|\.{0,2}\/)/i.test(t)) return false;        // URL / caminho de mídia
  if (/[(){};]/.test(t)) return false;                            // fragmento de CSS/transform/código
  if (/^-?\d[\d.,%\s]*(px|em|rem|vh|vw|deg|s|ms)?$/i.test(t)) return false;  // valor CSS puro
  if (/(^|,)\s*(sans-serif|serif|monospace)\s*$/i.test(t)) return false;     // família tipográfica
  if (/^[a-z-]+:\s*[^ ]+$/i.test(t)) return false;                // "propriedade: valor"
  return true;
}

/**
 * Texto visível de uma cena.
 * @returns {{texto:string, trechos:string[]}} `trechos` = um por nó/rótulo, na ordem do documento.
 */
export function textoVisivel(html) {
  let h = html.replace(/<!--[\s\S]*?-->/g, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
  const scripts = [...h.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]).join("\n");
  h = h.replace(/<script[\s\S]*?<\/script>/gi, " ");

  const trechos = [];
  for (const bruto of h.replace(/<[^>]+>/g, "\n").split("\n")) {
    const t = decodificar(bruto).replace(/\s+/g, " ").trim();
    if (t && /[A-Za-zÀ-ÿ0-9]/.test(t)) trechos.push(t);
  }
  const js = scripts.replace(RE_COMENT_BLOCO, " ").replace(RE_COMENT_LINHA, "$1 ");
  for (const m of js.matchAll(/(['"`])((?:\\.|(?!\1)[^\\\n])*)\1/g)) {
    const t = decodificar(m[2]).replace(/\s+/g, " ").trim();
    if (pareceRotulo(t)) trechos.push(t);
  }
  return { texto: trechos.join("\n"), trechos };
}

/** minúscula sem acento — a forma de comparação de termo entre cena e narração. */
export function normalizar(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

// Palavras funcionais do PT e COM QUAIS idiomas-alvo cada uma colide. Um gate de idioma que dá
// alarme falso é pior que gate nenhum — ensina a ignorá-lo justo quando ele acerta. Por isso a
// palavra só entra na busca do idioma que ela NÃO tem: "cada/sobre/antes/este/vez/mundo" existem
// em espanhol, "mais/onde/dos" existem em francês, "do/no/as/a" existem em inglês, "das/dem" em
// alemão. Fora da tabela ficam as ambíguas demais em qualquer caso ("são" abre "São Paulo",
// legítimo em todo idioma; "dia" é "Dia"=slide em alemão).
const COLISOES = {
  // pt-only entre os 4 alvos (nenhuma colisão): valem sempre
  "não": "", "nao": "", "até": "", "ate": "", "aqui": "", "pra": "", "uma": "", "umas": "",
  "quando": "", "isso": "", "isto": "", "aquilo": "", "apenas": "", "ainda": "", "pelo": "",
  "pela": "", "pelos": "", "pelas": "", "também": "", "tambem": "", "depois": "", "aquele": "",
  "aquela": "", "aqueles": "", "aquelas": "", "nesta": "", "neste": "", "nessa": "", "nesse": "",
  "foi": "", "estão": "", "estao": "", "pode": "", "podem": "", "fazer": "", "mesmo": "",
  "mesma": "", "muito": "", "muita": "", "muitos": "", "muitas": "", "além": "", "alem": "",
  "através": "", "atraves": "", "assim": "", "ele": "", "ela": "", "eles": "", "elas": "",
  "seus": "", "suas": "", "dele": "", "dela": "", "quase": "", "coisa": "", "hoje": "",
  "então": "", "entao": "", "maior": "", "melhor": "", "pior": "", "três": "", "enquanto": "",
  "embora": "", "milhões": "", "bilhões": "", "anos": "", "mil": "de",
  // colidem só com espanhol
  "cada": "es", "sobre": "es", "antes": "es", "porque": "es", "este": "es", "esta": "es",
  "está": "es", "vez": "es", "mundo": "es", "nunca": "es", "como": "es", "para": "es",
  "cerca": "es", "dentro": "es", "menor": "es", "todos": "es", "todas": "es", "entre": "es|fr",
  // colidem só com francês
  "mais": "fr", "onde": "fr", "dos": "fr|es",
  // colidem só com inglês
  "do": "en", "no": "en", "os": "en", "com": "en", "tem": "en",
  // colidem só com alemão
  "das": "de", "de": "de|es|fr", "da": "de|es", "em": "de|fr", "por": "es", "na": "de",
};
// Morfologia que só o português tem entre os 4 alvos — o sinal mais decisivo de todos.
const PT_MORFOLOGIA = /\b[a-zà-ÿ]{2,}(ção|ções|ão|ões|õe|nhã|lhã)\b/gi;

const cacheRe = new Map();
function reDoIdioma(lang) {
  const cod = String(lang || "").slice(0, 2).toLowerCase();
  if (!cacheRe.has(cod)) {
    const palavras = Object.entries(COLISOES)
      .filter(([, colide]) => !colide.split("|").filter(Boolean).includes(cod))
      .map(([p]) => p);
    cacheRe.set(cod, new RegExp(`\\b(${palavras.join("|")})\\b`, "gi"));
  }
  return cacheRe.get(cod);
}

/**
 * Palavras/terminações portuguesas achadas num texto que deveria estar no idioma-alvo.
 * @param {string} lang locale-alvo (`en-US`, `de-DE`…) — define quais palavras são seguras de acusar.
 */
export function residuoPt(texto, lang = "") {
  const achados = [...(texto.match(reDoIdioma(lang)) || []), ...(texto.match(PT_MORFOLOGIA) || [])];
  return [...new Set(achados.map((s) => s.toLowerCase()))];
}

/**
 * Valores numéricos de um texto, normalizados para NÚMERO — o dado não muda de idioma, só o
 * formato: "1.500.000" (pt/de) · "1,500,000" (en) · "1 500 000" (fr) são o MESMO valor.
 * Regra do separador: `.`/`,` seguido de exatamente 3 dígitos e não seguido de dígito é milhar;
 * qualquer outro é decimal. Espaço fino/nbsp entre dígitos é milhar (convenção fr).
 */
export function numerosDe(texto) {
  const t = texto.replace(/(\d)[    ](?=\d{3}\b)/g, "$1");
  const achados = [];
  for (const m of t.matchAll(/\d+(?:[.,]\d+)*/g)) {
    let s = m[0];
    // separadores de milhar: ponto/vírgula + 3 dígitos que não continuam em dígito
    s = s.replace(/([.,])(\d{3})(?!\d)/g, (mm, sep, tres, idx, all) => {
      const resto = all.slice(idx + mm.length);
      return /^[.,]\d/.test(resto) || idx + mm.length === all.length || /^\D/.test(resto) ? tres : mm;
    });
    // sobrou um separador → é decimal
    const v = Number(s.replace(",", "."));
    if (Number.isFinite(v)) achados.push(v);
  }
  return achados;
}

/* ── [porte Régie] O RESÍDUO É DO IDIOMA DE ORIGEM, NÃO SEMPRE DO PORTUGUÊS ─────────────────────────
 *
 * No estúdio a origem era sempre pt-BR, e `residuoPt` bastava. Na Régie a origem vem do canal.json
 * (`idiomas.origem`) e já existe canal que FALA inglês (alpha-point): numa localização en → pt-BR, o
 * defeito nº 1 do tradutor-de-tela é texto que ficou em INGLÊS na cena "traduzida".
 *
 * A lista inglesa segue a regra da de cima: só palavra funcional que NÃO colide com o idioma-alvo. As
 * escolhidas não existem em pt/es/de; "the" colide com o francês "thé" (o \b do JS não vê o acento como
 * letra) e por isso não é cobrada quando o alvo é fr. Morfologia ficou de fora de propósito: "-ing" e
 * "-tion" vivem em empréstimo corrente no português ("streaming", "marketing") e no francês ("nation").
 * Alarme falso ensina a ignorar o gate.
 */
const COLISOES_EN = {
  "the": "fr", "and": "", "with": "", "which": "", "from": "", "this": "", "that": "", "these": "",
  "those": "", "would": "", "could": "", "should": "", "their": "", "there": "", "been": "", "were": "",
  "about": "", "into": "", "only": "", "because": "", "through": "", "between": "", "while": "", "than": "",
  "isn't": "", "aren't": "", "doesn't": "", "didn't": "", "won't": "",
};
const cacheReEn = new Map();
function reEnDoIdioma(lang) {
  const cod = String(lang || "").slice(0, 2).toLowerCase();
  if (!cacheReEn.has(cod)) {
    const palavras = Object.entries(COLISOES_EN)
      .filter(([, colide]) => !colide.split("|").filter(Boolean).includes(cod))
      .map(([p]) => p.replace(/'/g, "['’]"));
    cacheReEn.set(cod, new RegExp(`\\b(${palavras.join("|")})\\b`, "gi"));
  }
  return cacheReEn.get(cod);
}

/** Palavras inglesas achadas num texto que deveria estar no idioma-alvo. */
export function residuoEn(texto, lang = "") {
  return [...new Set((texto.match(reEnDoIdioma(lang)) || []).map((s) => s.toLowerCase()))];
}

/**
 * O resíduo do idioma de ORIGEM do canal no texto do idioma-alvo.
 * @returns {string[]|null} `null` = não sei medir essa origem (NÃO MEDIDO, nunca "limpo").
 */
export function residuoDaOrigem(texto, origem = "pt-BR", lang = "") {
  const o = String(origem || "").slice(0, 2).toLowerCase();
  if (o === "pt") return residuoPt(texto, lang);
  if (o === "en") return residuoEn(texto, lang);
  return null;
}
