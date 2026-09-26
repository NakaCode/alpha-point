// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/referencias-midia.mjs (linhas 1-39, commit 4afda12).
// O que mudou: nada — só este cabeçalho. Varredura linear de `_media/…` no texto da cena (a regex antiga era quadrática).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
/**
 * Referências a `_media/…` dentro do texto de uma cena, com o MESMO resultado de
 * `txt.match(/[^"'()\s]*_media\/[^"'()\s]*\.(?:mp4|mov|jpg|jpeg|png|webp)/gi)` — sem o custo dela.
 *
 * ⚠️ AQUELA REGEX É QUADRÁTICA, E CENA DE MAPA A FAZ PARAR A FROTA.
 *
 * Ela não tem âncora: numa sequência longa sem aspas, parêntese nem espaço, o motor tenta cada
 * posição de partida e, de cada uma, o `*` guloso corre até o fim da sequência e volta procurando
 * `_media/`. Medido em 11/set/2026 na `estudio-top10`: a `ormuz-s003` (HTML de 699 KB, com
 * 531.120 caracteres seguidos sem delimitador — traçado de mapa embutido) passava de 45 s SOZINHA,
 * com 98,1% dos ticks do V8 nessa RegExp; a `j14` (51.622 seguidos) levava 21 s; a `s002` (127),
 * zero. Com a varredura dentro do handoff, a procedência do `estreito-de-ormuz` estourava os
 * 15 min a cada volta da frota — e a mensagem, `spawnSync ETIMEDOUT`, se lia como "procedência
 * reprovada" e foi atribuída à carga da máquina, que estava baixa.
 *
 * Por que o resultado é o mesmo: os dois `[^"'()\s]*` impedem que um casamento atravesse um
 * delimitador, então cada trecho entre delimitadores casa no máximo UMA vez — do começo do trecho
 * até o fim da ÚLTIMA extensão de mídia que venha depois do PRIMEIRO `_media/` (os dois `*` são
 * gulosos). Tudo aqui é busca linear, sem retrocesso.
 */
const TRECHO = /[^"'()\s]+/g;
const MARCA = /_media\//i;
const TAMANHO_MARCA = "_media/".length;
const EXTENSAO = /\.(?:mp4|mov|jpg|jpeg|png|webp)/gi;

export function referenciasDeMidiaNoTexto(txt) {
  const refs = [];
  for (const [trecho] of String(txt ?? "").matchAll(TRECHO)) {
    const marca = trecho.search(MARCA);
    if (marca < 0) continue;
    let fim = -1;
    for (const ext of trecho.matchAll(EXTENSAO)) {
      if (ext.index >= marca + TAMANHO_MARCA) fim = ext.index + ext[0].length;
    }
    if (fim > 0) refs.push(trecho.slice(0, fim));
  }
  return refs;
}
