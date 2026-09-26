// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/rascunho-de-caca.mjs (linhas 1-57, commit 4afda12).
// O que mudou: nada no código. Mora em scripts/stock/lib/ (e não em scripts/lib/) porque só a camada de mídia do canal o importa (qc-procedencia).
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * rascunho-de-caca.mjs — a pergunta "esta pasta é RASCUNHO de caça, ou é acervo?".
 *
 * ══ POR QUE EXISTE, E POR QUE É UMA FUNÇÃO E NÃO UMA LINHA ══
 *
 * A pasta de rascunho tem **DUAS GRAFIAS**, e cada leitor do disco adivinhou uma:
 *
 *   · `_media/_caca/<hash-da-necessidade>/`  — a estação de insumos, que isola cada necessidade
 *   · `_media/_caca-<id-da-cena>/`           — o agente de caça, que nomeia pela cena
 *
 * O `rascunhoDe` de `pesquisar-fotos-cenas.mjs` já tinha topado nisto em 22/ago/2026, do lado de
 * QUEM CONTA: procurava `_caca-s48` e a caça criara `_caca-s48-gado-selvagem`, então 42 downloads
 * reais viraram `✗ 0 arquivo(s)` no relatório, com um teto de 100/dia em jogo. O comentário que
 * ficou lá vale para cá inteiro: *"aceitar as duas é mais barato — e mais honesto — que decretar a
 * certa e sair renomeando pasta de trabalho alheia."*
 *
 * Do lado de QUEM LÊ o disco o preço é maior, porque o rascunho guarda o que a caça REJEITOU.
 * Medido em 11/set/2026 no `petroleo-foz-do-amazonas`: `scripts/_brief-arte.mjs` pulava `_caca`
 * (conserto de 11/set, de manhã) e **não** pulava `_caca-s014`. O brief da `s014-amostra-de-fluido`
 * — foto real de amostra de fluido de poço em laboratório — listava sob `## MÍDIA REAL NO DISCO`
 * três fotos descartadas do Envato: um casal num restaurante rústico, uma mulher com skate à
 * beira-mar e alguém saltando diante de um muro rachado. E o dano não parou na lista: com "mídia
 * no disco", o brief **deixou de declarar o ⛔ BLOQUEADA por falta de mídia**, que é a única coisa
 * que segura a cena. A próxima passada de `desenhar-cenas` desenharia a amostra de fluido em cima
 * do casal — inferência paga produzindo uma cena que mente.
 *
 * A régua, em uma frase: **o que a estação COPIA para `_media/<tipo>/<cena>/` é entrega; o que
 * fica em `_caca*` é rascunho** — e a adoção é o ato que promove (é ela que escreve o
 * `_PROCEDENCIA.json`).
 *
 * ⚠️ O mesmo rascunho engana um SEGUNDO gate, e ali esta função ainda NÃO está ligada:
 * `qc-procedencia.mjs` conta os arquivos de `_caca*` como acervo SEM PROCEDÊNCIA e reprova o
 * projeto por causa deles (medido no mesmo dia: 32 arquivos em 9 pastas, todas de caça). Não
 * bloqueia render — o `medirProcedencia` do handoff é escopado pela partição —, mas é alarme falso
 * em gate duro, e alarme falso ensina a ignorar o gate. Ligá-lo lá é decisão de quem for integrar:
 * a variante simples esconderia um arquivo que estivesse em `_caca*` **e** fosse citado por um HTML
 * de cena, e essa condição precisa ser medida antes, não suposta.
 */

/**
 * @param {string} nome  nome da PASTA (não o caminho)
 * @returns {boolean}    true quando ela é rascunho de caça, em qualquer das duas grafias
 */
export function ehPastaDeRascunhoDeCaca(nome) {
  return /^_caca(-|$)/.test(String(nome ?? ""));
}

/**
 * O mesmo, para um caminho RELATIVO a `_media` — porque o rascunho da estação de insumos mora
 * fundo (`_caca/<hash>/_preview/_debug/grade.png`) e quem classifica arquivo vê o caminho, não a
 * pasta. Qualquer segmento basta.
 *
 * @param {string} rel  caminho relativo, com `/` como separador
 */
export function ehCaminhoDeRascunhoDeCaca(rel) {
  return String(rel ?? "").split("/").some(ehPastaDeRascunhoDeCaca);
}
