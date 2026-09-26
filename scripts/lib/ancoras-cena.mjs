// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/ancoras-cena.mjs (linhas 1-153, commit 4afda12).
// O que mudou: nada — só este cabeçalho. O contrato data-ancora/data-entra vale para narração sintética igual à gravada.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * O contrato de ÂNCORA de cena: cada elemento diz qual palavra da narração o traz à tela.
 *
 * ══ POR QUE EXISTE ══
 *
 * A `ROUPA-CENA` manda, desde sempre, que *"cada elemento entra no tempo EXATO da palavra que o
 * ancora"*. Isso vivia só como INSTRUÇÃO AO AGENTE — o artefato não registrava nada. Consequência
 * medida em 20/ago/2026 sobre os 100 achados pendentes de `wordlock` e `fonte`: a lente `wordlock`
 * é 15% da fila de correção e **nenhum gate determinístico consegue medi-la**, porque para saber se
 * "a lâmina entra em 'ferramentas'" é preciso saber QUAL elemento é a lâmina — e nada no HTML diz.
 * Sobrou julgamento de modelo para o que é, na maior parte, uma conta: o instante certo está no
 * `words.json`.
 *
 * ⚠️ A DECLARAÇÃO E O COMPORTAMENTO TÊM DE SER A MESMA COISA. Um atributo que apenas *descreve* o
 * que o script faz vira mentira na primeira edição — é a doença que esta casa já conhece pela
 * `biblia-visual.json` (a `ROUPA-CENA` obriga toda cena a lê-la, nenhum agente a escreve, e como a
 * instrução diz "se existir", a ausência nunca deu erro). Por isso o contrato aqui é **o script da
 * cena LER `data-entra`** para agendar a animação: corrigir o atributo corrige a cena, e não existe
 * estado em que um diga uma coisa e a tela mostre outra.
 *
 * O CONTRATO, por elemento:
 *   data-ancora="<palavra ou trecho da narração>"   ← o que traz o elemento à tela
 *   data-entra="<segundos, tempo LOCAL da cena>"    ← quando ele entra, e é isto que o script usa
 */

const NUM = /^-?\d+(?:\.\d+)?$/;

/** Normaliza para comparar palavra falada com palavra declarada, sem tropeçar em acento ou caixa. */
export function normalizarPalavra(valor) {
  return String(valor || "")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

/** As palavras da narração dentro da janela da cena, com o tempo LOCAL de cada uma. */
export function palavrasDaJanela(words, { inSec, dur }) {
  const lista = Array.isArray(words) ? words : (words?.words || []);
  const ini = Number(inSec), fim = Number(inSec) + Number(dur);
  if (!Number.isFinite(ini) || !Number.isFinite(fim)) throw new Error("janela da cena inválida");
  return lista
    .map((p) => ({ texto: p.word ?? p.w ?? p.text ?? "", start: Number(p.start ?? p.s) }))
    .filter((p) => Number.isFinite(p.start) && p.start >= ini - 0.05 && p.start < fim)
    .map((p) => ({ ...p, local: +(p.start - ini).toFixed(3) }));
}

/**
 * Onde, no tempo local, começa o trecho declarado. Casa por SEQUÊNCIA de palavras, para uma âncora
 * de duas ou três palavras ("parte da gente") valer tanto quanto uma. Devolve `null` quando o
 * trecho não aparece na janela — que é um defeito de verdade: a cena diz responder a uma fala que
 * não está lá.
 *
 * ⚠️ A COMPARAÇÃO É POR STRING JUNTA, NÃO TOKEN A TOKEN (corrigido em 29/ago/2026).
 * `normalizarPalavra` troca tudo que não é [a-z0-9] por espaço, então UMA palavra da narração pode
 * normalizar para VÁRIOS tokens: «3,8» → "3 8", «check-in» → "check in", «1.500» → "1 500". A
 * versão anterior quebrava a âncora em tokens e exigia que cada um fosse uma palavra distinta do
 * `words.json` — casamento que, para esses casos, é impossível por construção: a narração tem uma
 * palavra só. O gate então dizia «"3,8" NÃO existe na fala desta cena» sobre uma fala em que "3,8"
 * está, cravado, em 3.56 s.
 * Medido no `dias-mais-curtos` antes do conserto: os 3 únicos "fora-da-fala" do projeto eram os 3
 * casos deste formato — `s60` («0,9»), `s73` («check-in») e `s92` («3,8»). Nenhum era defeito de
 * cena; todos eram o mesmo ponto cego.
 * *Isto é pior que um falso negativo: o veredito "a fala não existe" manda o próximo agente
 * TROCAR a âncora certa por uma que case — e aí o atributo passa a mentir sobre qual palavra move
 * o elemento, que é exatamente o que o contrato existe para impedir.* Juntar os dois lados com um
 * espaço é o mesmo casamento de antes para toda âncora de palavras simples, e passa a alcançar as
 * compostas; nunca casa MENOS que a versão anterior.
 */
export function instanteDaAncora(palavras, ancora) {
  const alvo = normalizarPalavra(ancora);
  if (!alvo) return null;
  const normalizadas = palavras.map((p) => normalizarPalavra(p.texto));
  for (let i = 0; i < normalizadas.length; i++) {
    if (!normalizadas[i]) continue;
    let acc = "";
    for (let k = i; k < normalizadas.length; k++) {
      if (!normalizadas[k]) continue;
      acc = acc ? `${acc} ${normalizadas[k]}` : normalizadas[k];
      if (acc === alvo) return palavras[i].local;
      if (acc.length >= alvo.length) break;   // já passou do tamanho: não há como voltar a casar
    }
  }
  return null;
}

/** Os elementos da cena que declaram âncora, na ordem em que aparecem no HTML. */
export function lerAncoras(html) {
  const achados = [];
  const abertura = /<([a-zA-Z][a-zA-Z0-9]*)\b([^>]*\bdata-ancora\s*=\s*(?:"[^"]*"|'[^']*')[^>]*)>/g;
  let m;
  while ((m = abertura.exec(html))) {
    const atributos = m[2];
    const ancora = /\bdata-ancora\s*=\s*(?:"([^"]*)"|'([^']*)')/.exec(atributos);
    const entra = /\bdata-entra\s*=\s*(?:"([^"]*)"|'([^']*)')/.exec(atributos);
    const id = /\bid\s*=\s*(?:"([^"]*)"|'([^']*)')/.exec(atributos);
    const bruto = entra ? (entra[1] ?? entra[2]) : null;
    achados.push({
      tag: m[1],
      id: id ? (id[1] ?? id[2]) : null,
      ancora: (ancora[1] ?? ancora[2] ?? "").trim(),
      entra: bruto != null && NUM.test(bruto.trim()) ? Number(bruto.trim()) : null,
      entraBruto: bruto,
      inicio: m.index,
      fim: m.index + m[0].length,
    });
  }
  return achados;
}

/**
 * Confere cada âncora contra a fala medida.
 *
 * `tolerancia` existe porque a fronteira de uma palavra não é um instante exato — o Scribe marca o
 * começo do fonema, e um elemento que entra 120 ms antes ou depois lê como sincronizado na tela.
 */
export function conferirAncoras(html, { words, inSec, dur, tolerancia = 0.25 } = {}) {
  const palavras = palavrasDaJanela(words, { inSec, dur });
  return lerAncoras(html).map((a) => {
    const esperado = instanteDaAncora(palavras, a.ancora);
    if (esperado == null) {
      return { ...a, esperado: null, veredito: "ancora-fora-da-fala", desvio: null };
    }
    if (a.entra == null) {
      return { ...a, esperado, veredito: "sem-data-entra", desvio: null };
    }
    const desvio = +(a.entra - esperado).toFixed(3);
    return { ...a, esperado, desvio, veredito: Math.abs(desvio) <= tolerancia ? "ok" : "fora-do-tempo" };
  });
}

/**
 * Reescreve `data-entra` para o instante da palavra declarada. É a parte que deixa de ser
 * julgamento: o instante certo está no `words.json`, e reposicionar um número é conta.
 * Só toca no que está `fora-do-tempo` ou `sem-data-entra`; âncora que não existe na fala é defeito
 * editorial e continua indo para o modelo.
 */
export function corrigirAncoras(html, conferencia) {
  const alvos = conferencia
    .filter((c) => c.veredito === "fora-do-tempo" || c.veredito === "sem-data-entra")
    .sort((a, b) => b.inicio - a.inicio);
  let saida = html;
  const aplicados = [];
  for (const alvo of alvos) {
    const trecho = saida.slice(alvo.inicio, alvo.fim);
    const valor = alvo.esperado.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
    const novo = /\bdata-entra\s*=/.test(trecho)
      ? trecho.replace(/\bdata-entra\s*=\s*(?:"[^"]*"|'[^']*')/, `data-entra="${valor}"`)
      : trecho.replace(/\s*>$/, ` data-entra="${valor}">`);
    if (novo === trecho) continue;
    saida = saida.slice(0, alvo.inicio) + novo + saida.slice(alvo.fim);
    aplicados.push({ id: alvo.id, ancora: alvo.ancora, de: alvo.entra, para: Number(valor) });
  }
  return { html: saida, aplicados };
}
