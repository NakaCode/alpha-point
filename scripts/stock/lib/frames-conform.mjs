// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/frames-conform.mjs (linhas 1-67, commit 4afda12).
// O que mudou: nada no código. Mora em scripts/stock/lib/ porque o único cliente no canal é o normalizar-footage.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// O VEREDITO DE FRAMES DO MODO `conform` — separado do normalizador porque a regra é de JULGAMENTO,
// não de I/O, e julgamento se prova com número em vez de com um arquivo de 4K.
//
// ⚠️ `nb_frames` é DECLARAÇÃO; `nb_read_frames` é MEDIÇÃO — e confundir as duas fez a ferramenta
// responder com confiança à pergunta errada [SIS-457, 11/set/2026]. Dois `.mov` de acervo derrubaram
// o render de SETE cenas: um deles declarava 297 frames no contêiner e decodificava 257, truncado na
// ORIGEM. A conversão entregava os 257 que existiam — tudo o que era possível entregar — e o
// normalizador a acusava de "perdeu frame", porque comparava o que saiu contra o que o contêiner
// AFIRMAVA ter entrado. O que faltava nunca existiu no arquivo.
//
// A ordem aqui é deliberada e é o que mantém o custo de pé: `-count_frames` DECODIFICA o arquivo
// inteiro, e pagar isso em todo footage 4K de todo lote é caro. Então o declarado decide o caso
// comum (metadado honesto, custo zero), e a medição só entra quando o declarado ACUSA — para
// separar "a conversão perdeu frame" de "o arquivo já vinha curto". Medir só o suspeito é o que
// permite endurecer sem encarecer.
//
// E a detecção de perda REAL não afrouxa: absolver exige que a medição dos DOIS lados feche. Se o
// ffprobe não conseguir medir a origem (devolve 0), o veredito continua sendo reprovação — dúvida
// não vira passe livre.

/** Quantos frames o `conform` promete na saída: o passo>1 é o descarte de 60→30 (1 a cada 2). */
export function esperadosNoConform(frames, passo = 1) {
  return passo > 1 ? Math.ceil(frames / passo) : frames;
}

/**
 * @param {object} p
 * @param {number} p.origDeclarado   `nb_frames` do arquivo de entrada (o que o contêiner AFIRMA)
 * @param {number} p.saidaDeclarado  `nb_frames` do arquivo convertido
 * @param {number} [p.passo]         1, ou a razão arredondada quando o footage é mais rápido
 * @param {() => {orig:number, saida:number}} p.medir  medição real (`-count_frames`) dos dois lados,
 *        chamada NO MÁXIMO uma vez e só quando o declarado não fecha
 * @returns {{ok:boolean, truncadoNaOrigem?:boolean, declarado?:number, medido?:number,
 *            frames?:number, motivo?:string}}
 */
export function julgarFramesConform({ origDeclarado, saidaDeclarado, passo = 1, medir }) {
  // Origem que não declara frames nunca teve régua: o chamador já tratava isso como "não sei", e
  // inventar uma régua aqui reprovaria arquivo bom (MOV e WebM costumam omitir `nb_frames`).
  if (!(origDeclarado > 0)) return { ok: true };

  const esperado = esperadosNoConform(origDeclarado, passo);
  if (Math.abs(saidaDeclarado - esperado) <= 1) return { ok: true };

  const m = medir();
  const medidoOrig = Number(m?.orig) || 0;
  const medidoSaida = Number(m?.saida) || 0;
  const esperadoMedido = esperadosNoConform(medidoOrig, passo);

  if (medidoOrig > 0 && Math.abs(medidoSaida - esperadoMedido) <= 1) {
    return {
      ok: true,
      truncadoNaOrigem: medidoOrig < origDeclarado,
      declarado: origDeclarado,
      medido: medidoOrig,
      frames: medidoSaida,
    };
  }

  return {
    ok: false,
    motivo: medidoOrig > 0
      ? `perdeu frame: ${medidoSaida} de ${esperadoMedido} esperados `
        + `(origem decodifica ${medidoOrig}, declara ${origDeclarado}, passo ${passo})`
      : `perdeu frame: ${saidaDeclarado} de ${esperado} esperados `
        + `(orig ${origDeclarado}, passo ${passo}; a medição da origem falhou, então não absolvo)`,
  };
}
