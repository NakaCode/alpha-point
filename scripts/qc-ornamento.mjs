// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-ornamento.mjs (linhas 1-63, commit 4afda12).
// O que mudou: nada — só este cabeçalho. Módulo de definição, sem execução; os gates que o usam (qc-tamanho, check-overlap) precisam de navegador e NÃO vieram nesta versão.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// A REGRA DO ORNAMENTO TIPOGRÁFICO — fonte ÚNICA, lida pelo `qc-tamanho.mjs` e pelo
// `check-overlap.mjs`. Aqui mora a DEFINIÇÃO (quais glifos, qual limiar); a aplicação é de cada
// gate, porque eles fazem coisas diferentes com a mesma informação (§ "quem usa o quê").
//
// ── O PROBLEMA ───────────────────────────────────────────────────────────────
// Ornamento tipográfico é o glifo que existe para DECORAR, não para ser lido: a aspa gigante do
// template de citação, o travessão que separa dois blocos, o bullet de uma lista. Ele engana os
// dois gates por motivos opostos:
//   • no gate de TAMANHO ele é o MAIOR texto do palco e vira "texto-herói" — o gate fica verde
//     medindo a aspa enquanto a fala real roda a metade do piso;
//   • no gate de COLISÃO o bbox dele é muito maior que a tinta que desenha (line-height < 1 numa
//     letra de 500px) e ele acusa sobreposição que ninguém vê.
//
// ── POR QUE NÃO BASTA O `data-qc-ornamento` ──────────────────────────────────
// O atributo existe e continua valendo — declaração do autor vence tudo. Mas regra que depende de
// alguém LEMBRAR é regra morta, e o disco prova: das 8 cenas do acervo com aspa decorativa
// isolada, **1** tinha o atributo (o exemplar `seed/examples/citacao/citacao-pessoa.html`, escrito
// junto com o atributo) e **7 não tinham**. A pior delas está viva:
// `out/ia-fisica/graphics/s60-fundamentalmente-novo.html` — a aspa `“` mede 150px e a fala que o
// espectador lê mede 64px, num palco cujo piso de herói é 130px.
//
// ── O CRITÉRIO (e por que ele é ESTREITO de propósito) ───────────────────────
// A tentação era "texto sem letra e sem dígito = ornamento". MEDIDO contra as 583 cenas do disco:
// isso classificaria 54 elementos, e a maioria é CONTEÚDO — `$` de 145px é o herói de
// `cobrar-duas-vezes`, `%`, `×`, `≈`, `✓`, `★`, `?` carregam significado. Demovê-los elegeria como
// herói um rótulo pequeno e reprovaria cena boa: alarme falso num gate que bloqueia, que é o pior
// defeito que um gate pode ter.
// Então a regra é SEMÂNTICA e curta: **aspa isolada nunca é o texto que se lê** (uma aspa sozinha
// não é uma palavra, em nenhum contexto), e **divisor isolado também não** (travessão, barra,
// bullet, reticências). Fora dessa lista, o glifo é conteúdo — e se um dia um deles for de fato
// decorativo, o autor declara `data-qc-ornamento` e o gate obedece.
//
// ── PONTO CEGO CONHECIDO (medido, não esquecido) ─────────────────────────────
// A marca-d'água NUMÉRICA (um "03" gigante a 8% de alfa atrás do título) tem letra/dígito e passa
// por conteúdo. Dois motivos para não criar regra: (1) a cadeia de `opacity` < 0,55 já a derruba
// hoje, e (2) desenhada por alfa DA COR ela escaparia — mas MEDIDO nas 583 cenas, existem 5
// elementos com alfa de cor < 0,5 e nenhum é marca-d'água (são rótulos de 22–58px). Regra sem caso
// real é alarme falso esperando acontecer; se aparecer, o sinal a usar é o alfa efetivo da cor.

// Aspas de todas as famílias (retas, curvas, angulares, ornamentais CJK, primos/minutos).
export const RE_ASPA_ISOLADA =
  "^[\\u0022\\u0027\\u2018\\u2019\\u201A\\u201B\\u201C\\u201D\\u201E\\u201F" +
  "\\u00AB\\u00BB\\u2039\\u203A\\u275B-\\u275E\\u301D-\\u301F\\uFF02\\uFF07" +
  "\\u2032-\\u2037\\u3003]+$";

// Divisores: travessões, barras, bullets, blocos de régua, reticências.
export const RE_DIVISOR_ISOLADO =
  "^[\\u2010-\\u2015\\u2212\\u2500-\\u257F\\u007C\\u002F\\u005C\\u00B7" +
  "\\u2022\\u2023\\u25AA\\u25CF\\u2589-\\u258F\\u2026]+$";

// QUEM USA O QUÊ — e por que não é igual nos dois gates.
//  • `qc-tamanho`  usa ASPA + DIVISOR: nenhum dos dois tem dever de legibilidade, e nenhum dos
//    dois pode ser eleito texto-herói.
//  • `check-overlap` usa só ASPA: ali o motivo de excluir é o BBOX INFLADO do glifo gigante, que é
//    o caso medido e documentado no exemplar de citação. Divisor costuma ser fino e do tamanho da
//    tinta — tirá-lo da checagem esconderia "texto por cima da linha divisória", que É defeito.
export const PARA_TAMANHO = { aspa: RE_ASPA_ISOLADA, divisor: RE_DIVISOR_ISOLADO };
export const PARA_OVERLAP = { aspa: RE_ASPA_ISOLADA };

// O classificador roda DENTRO da página (`page.evaluate`), onde este módulo não existe — por isso
// o que atravessa a fronteira são as REGEX EM TEXTO, e cada gate remonta o predicado em 3 linhas
// a partir delas. A definição continua tendo um dono só: este arquivo.
export const FONTE_UNICA = "scripts/qc-ornamento.mjs";
