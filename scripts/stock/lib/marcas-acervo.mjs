// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/marcas-acervo.mjs (linhas 1-57, commit 4afda12).
// O que mudou: entrou MARCAS_VETADAS_SEM_EXCECAO (Reuters) e a união com as marcas vetadas pelo
// canal (marca/midia.json, campo marcas_vetadas — o mesmo que o motor lê em src/midia/canal.mjs).
// As cinco vetadas do estúdio continuam vetadas: a Régie herda o veto, o canal só pode ACRESCENTAR.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * MARCAS DE ACERVO ABERTO — a fonte ÚNICA das listas que VETAM ou LIBERAM banco de mídia gratuito.
 *
 * ── POR QUE ESTE ARQUIVO EXISTE (14/set/2026) ────────────────────────────────────────────────────
 * A mesma lista vivia COPIADA em quatro lugares que executam: `qc-procedencia.mjs` (o gate duro),
 * `procedencia-declarar.mjs`, o `despachante.mjs` 24/7 e o `observatorio.mjs`. No dia em que o dono
 * mudou a regra, mudar só o gate faria o anfíbio chinês real passar no QC e continuar travado pelo
 * despachante — que tinha a SUA cópia e marcava o arquivo como «sujo». *Quatro cópias da mesma
 * regra divergem; e divergem exatamente no dia em que a regra muda.*
 *
 * ── A REGRA VIGENTE ([PESQ-126], Mateus, 14/set/2026) ────────────────────────────────────────────
 * *«Pexels/Pixabay podem SIM, e devem ser consultados, como uma fonte adicional de candidatos de
 * footages. O que eu não quero que usem de lá são footages genéricos.»*
 *
 * **A régua deixou de ser a FONTE e passou a ser a ESPECIFICIDADE.** Um anfíbio chinês real no Pexels
 * serve; um anfíbio russo no Shutterstock não serve. O defeito de 29/jul nunca foi a plataforma: foi
 * imagem genérica sob afirmação específica.
 *
 * ⚠️ **ESTE ARQUIVO NÃO JULGA ESPECIFICIDADE, e nenhum gate que o importa julga.** «A coisa na
 * imagem é a coisa nomeada?» é julgamento editorial e mora na lente de cobertura/factual do
 * `qc-visual`. O que o código garante é que a ORIGEM está declarada. Prometer no gate o que ele não
 * mede é produzir um verde que não quer dizer nada.
 */

/**
 * VETADAS — a marca não usa, com ou sem procedência. O dono falou de Pexels e Pixabay; destes cinco
 * ele NÃO falou, então continuam fora. *Liberar o que não foi liberado é afrouxar por arrasto.*
 */
export const MARCAS_VETADAS = Object.freeze(["coverr", "unsplash", "videvo", "mixkit", "freepik"]);

/**
 * LIBERADAS com licença aberta — permitidas como fonte de candidatos, com `_PROCEDENCIA.json`
 * declarado como qualquer acervo.
 *
 * ⚠️ **NÃO são «fonte com atribuição obrigatória».** Conferido no documento em 14/set/2026:
 *   · Pexels License — *"Attribution is not required. Giving credit to the photographer or Pexels is
 *     not necessary but always appreciated."*
 *   · Pixabay Content License — *"Use Content without having to attribute the author (although giving
 *     credit is always appreciated by our community!)"*
 * Tratá-las como Vecteezy (crédito obrigatório) poria na tela um crédito que a licença dispensa — e
 * crédito supérfluo é reprovação na lente `fonte` ([ARTE-41]).
 *
 * As restrições que as licenças IMPÕEM, e que o QC visual precisa conhecer: pessoa identificável não
 * pode aparecer de forma ofensiva ou em má luz; não se usa como marca registrada; e a do Pixabay
 * proíbe uso *"in a misleading or deceptive way"* — que é, literalmente, a régua da especificidade.
 */
export const MARCAS_LIBERADAS = Object.freeze(["pexels", "pixabay"]);

/**
 * TODAS as marcas conhecidas de banco aberto, vetadas ou não. Serve a um único propósito: reconhecer
 * a oração de NÃO USO ([SIS-456]) — «Nenhuma peça veio de Pexels, Pixabay ou Coverr» é declaração de
 * conformidade qualquer que seja a situação de cada marca. Se a régua de negação usasse só as vetadas,
 * a frase deixaria de ser reconhecida como negação e o «Coverr» dentro dela voltaria a reprovar a
 * cena — reabrindo o alarme falso que a SIS-456 fechou.
 */
export const MARCAS_CONHECIDAS = Object.freeze([...MARCAS_VETADAS, ...MARCAS_LIBERADAS]);

/**
 * [porte Regie] REUTERS: VETADA E SEM EXCEÇÃO nos canais da Régie.
 *
 * A licença Reuters é do Top10 (contrato LA431), não dos canais novos. No estúdio ela era acervo
 * ASSINADO; aqui, qualquer rastro de uso dela é PROIBIDO — e o `excecao_autorizada` do
 * _PROCEDENCIA.json NÃO a libera: a exceção existe para o dono do canal assumir um risco que é dele
 * (ex.: um Pexels genérico num nicho sem acervo), e usar material de um contrato alheio não é um
 * risco que o dono do canal possa assumir por escrito.
 */
export const MARCAS_VETADAS_SEM_EXCECAO = Object.freeze(["reuters"]);

/**
 * [porte Regie] Uma marca escrita pelo dono vira um PADRÃO que casa as grafias que ela tem no mundo.
 *
 * Por que normalizar e não filtrar: a versão anterior descartava calada toda entrada fora de
 * /^[a-z0-9][a-z0-9.-]*$/ — e isso incluía QUALQUER nome com espaço. Provado na revisão v1
 * (23/09/2026): um canal que vetou "Adobe Stock" tinha `AdobeStock_55512345.jpeg` aprovado. O veto
 * escrito pelo dono virava aprovação sem aviso, enquanto o buscar-midia do motor (substring, em
 * src/midia/fontes.mjs) vetava a mesma marca: busca e gate discordavam.
 *
 * A régua: minúsculas, pedaços separados por espaço/hífen/sublinhado/ponto, cada pedaço ESCAPADO para
 * regex, e entre eles `[-_ .]?` — assim "Adobe Stock" casa AdobeStock, adobe-stock, adobe_stock e
 * "adobe stock"; "Getty Images" casa GettyImages e getty-images. Uma entrada sem letra nem número não
 * vira padrão (casaria tudo) e é DEVOLVIDA em `descartadas`, para quem chama AVISAR.
 */
export function padraoDeMarca(bruta) {
  const partes = String(bruta ?? "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .split(/[\s._-]+/).map((x) => x.replace(/[^a-z0-9]/g, "")).filter(Boolean);
  return partes.length ? partes.join("[-_ .]?") : null;
}

/**
 * [porte Regie] A lista que o gate usa num canal: as do estúdio, a Reuters, e as que o canal
 * acrescentou em marca/midia.json — como PADRÕES de regex (ver padraoDeMarca). Nunca menos que as do
 * estúdio: afrouxar o veto não é do canal. `aviso(texto)` recebe cada entrada descartada.
 */
export function marcasVetadasDoCanal(doCanal = [], { aviso = null } = {}) {
  const extra = [];
  for (const bruta of Array.isArray(doCanal) ? doCanal : []) {
    const p = padraoDeMarca(bruta);
    if (p) extra.push(p);
    else if (aviso) aviso(`marca vetada ignorada em marca/midia.json (sem letra nem numero): ${JSON.stringify(bruta)}`);
  }
  // O canal pode vetar também Pexels/Pixabay (restringir é dele); o que ele não pode é tirar do veto.
  return [...new Set([...MARCAS_VETADAS, ...MARCAS_VETADAS_SEM_EXCECAO, ...extra])];
}
