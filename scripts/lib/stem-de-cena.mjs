// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/stem-de-cena.mjs (linhas 1-63, commit 4afda12).
// O que mudou: nada — só este cabeçalho. O qc-clipe-repetido importa daqui o id encurtado do laudo.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * O STEM DE UM ID DE CENA — a raiz pela qual se agrupa arquivo, âncora e cesta de mídia.
 *
 * ═══ POR QUE ISTO EXISTE, E POR QUE É UM ARQUIVO COM TESTE ═══
 *
 * Esta régua já falhou TRÊS vezes, sempre do mesmo jeito: alguém presumiu uma forma de id, o parque
 * ganhou uma família nova, e a régua passou a devolver ZERO em silêncio. Cada vez o preço foi o
 * mesmo — âncora que continua dizendo `FALTA` com a mídia paga no disco, e o editor-de-arte
 * OBEDECE: recusa a cena, e o vídeo para.
 *
 *   1ª · [PESQ-83] — a lista literal de famílias envelheceu.
 *   2ª · `cardNN` — a lista foi alargada e envelheceu de novo.
 *   3ª · `estreito-de-ormuz`, 11/set/2026 — a régua presumia que o id COMEÇA pelos dígitos da
 *        família. Os ids deste vídeo são `ormuz-s001` e `ormuz-j08-exportacao-asia`; com
 *        `k.split("-")[0]` o conjunto inteiro colapsa em UM elemento, `"ormuz"`, e a família
 *        derivada vira `/^(?:ormuz)\d+/`, que não casa `ormuz-s064` nem por acidente. Medido com o
 *        disco cheio:
 *
 *            cenas: 138 · arquivos vivos em _media/: 230 · ✓ promovidas FALTA→asset: 0 · ⚠ seguem FALTA: 55
 *
 *        Zero de 230.
 *
 * A régua, sem presunção nenhuma sobre onde o número está: **o stem é o prefixo da chave até o
 * primeiro segmento que contém dígito**. A família alfabética sai do stem tirando os dígitos do fim
 * — e não de `^[a-z]+`, que parava no primeiro hífen.
 *
 * ⚠️ E ELA VIVE AQUI, NÃO COLADA NO SCRIPT. `aplicar-ancoras-pesquisa.mjs` a usa em DOIS lugares
 * (quem deriva a família e quem arquiva por cena), e na terceira recorrência as duas cópias tinham
 * de ser consertadas juntas — se uma ficasse para trás, as 138 cenas do ormuz dividiriam a MESMA
 * cesta de arquivos, que é o erro pior dos dois: colisão silenciosa. *Cego se diagnostica; mídia
 * promovida para a cena errada, não.*
 */

/**
 * O prefixo da chave até o primeiro segmento com dígito.
 *
 *   `ormuz-s001`               → `ormuz-s001`   (o id inteiro)
 *   `ormuz-j08-exportacao-asia`→ `ormuz-j08`
 *   `s004-morpho-no-amapa`     → `s004`
 *   `t-s016`                   → `t-s016`
 *   `card03-abertura`          → `card03`
 *
 * Chave sem dígito nenhum devolve o primeiro segmento — não há família a derivar, e devolver a
 * chave inteira faria um id semântico longo virar uma família só dele.
 */
export function stemDaChave(chave) {
  const segs = String(chave ?? "").split("-");
  let acc = "";
  for (const s of segs) {
    acc = acc ? `${acc}-${s}` : s;
    if (/\d/.test(s)) return acc;
  }
  return segs[0];
}

/**
 * A família alfabética do stem: os dígitos do fim saem, e o sufixo de cena desdobrada (`b`) junto.
 *
 *   `ormuz-s001` → `ormuz-s`  ·  `t-s016` → `t-s`  ·  `s004` → `s`  ·  `card03` → `card`
 */
export function familiaDoStem(stem) {
  return String(stem ?? "").replace(/\d+[a-z]?$/, "");
}
