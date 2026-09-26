// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/expandir-alvos.mjs (linhas 1-49, commit 4afda12).
// O que mudou: nada — só este cabeçalho. `join` e `statSync` já servem no Windows.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// EXPANSOR DE ALVOS — a pasta vira a lista de .html, ou o gate RECUSA. Nunca vira URL do Chrome.
//
// POR QUE ISTO EXISTE. Um gate que recebe `out/<proj>/graphics` e passa a string direto pro
// `page.goto()` não falha: o Chrome RENDERIZA A PASTA como o índice de arquivos dele
// ("Index of /…", "[parent directory]", "Name", "Size", "Date Modified") — e o gate mede ESSA
// página. O laudo sai completo, com palco, pisos e contagem, e é inteiramente ficção.
//
// Medido em 15/ago/2026 contra `out/especies-humanas/graphics`, que tem **74 cenas reais**:
//   qc-tamanho      exit 1  "texto-herói 'Index of /home/…' → 32px < 129"  + 344 avisos  (0 de 74 medidas)
//   qc-carga        exit 1  "DENSIDADE: 57 blocos de texto simultâneos @0s" (= os nomes de arquivo)
//   qc-mapa-canvas  exit 0  "sem #map, nada a medir"        ← APROVOU 74 cenas sem abrir nenhuma
//   qc-pais-bandeira exit 0 "nenhum nome de país na tela"   ← APROVOU 74 cenas sem abrir nenhuma
//
// Os dois últimos são a assinatura que esta casa já pagou três vezes: **zero de zero é 100%**.
// Exit 0 com "nada a medir" é indistinguível de "medi tudo e está bom" para quem lê o código de
// saída — e é assim que um portão deixa passar um lote inteiro.
//
// A CASA JÁ TINHA A SOLUÇÃO, EM DOIS LUGARES. `qc-fora-do-quadro.mjs:57-60` e `qc-hex.mjs:95-96`
// expandem a pasta corretamente há tempo. Este arquivo é a EXTRAÇÃO daquele código, não uma
// terceira invenção — e existe como lib justamente para não virar a quinta cópia: a doutrina desta
// casa registra que o hook de escrita mantinha um regex de cor paralelo ao do `qc-hex`, "e as duas
// divergiram até o mesmo defeito passar por ambas, cada uma pelo furo que a outra não tinha".
//
// CONTRATO: devolve sempre uma lista de caminhos de arquivo. Pasta sem .html não é aprovação —
// é `exit 2`, o código que esta casa reserva para "NÃO MEDI" (ver `lib/nao-medido.mjs`), que é
// diferente de 0 ("medi e passou") e de 1 ("medi e reprovei").
import { statSync, readdirSync } from "node:fs";
import { join } from "node:path";

/**
 * @param {string[]} alvos  argumentos já sem as flags `--…`
 * @param {string}   gate   nome do gate, só para a mensagem de recusa
 * @returns {string[]}      caminhos de arquivo, com as pastas expandidas em ordem
 */
export function expandirAlvos(alvos, gate = "gate") {
  return alvos.flatMap((a) => {
    let st;
    // Inexistente segue adiante de propósito: quem falha alto é o goto, com o caminho na mensagem.
    // Engolir aqui transformaria "arquivo errado" em "nada a medir", que é o defeito de cima.
    try { st = statSync(a); } catch { return [a]; }
    if (!st.isDirectory()) return [a];
    const htmls = readdirSync(a).filter((f) => f.endsWith(".html")).sort().map((f) => join(a, f));
    if (!htmls.length) {
      console.error(`✗ ${gate}: "${a}" é uma pasta e não tem nenhum .html — nada a medir.`);
      process.exit(2);
    }
    return htmls;
  });
}
