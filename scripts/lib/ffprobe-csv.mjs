// A leitura do CSV do ffprobe (`-of csv=p=0`) — um dono só, com um gêmeo byte a byte no canal
// (template/scripts/lib/ffprobe-csv.mjs; testes/ffprobe-csv.test.mjs prova que são iguais).
//
// Por que existe: o ffprobe acrescenta um campo VAZIO no fim de cada linha de stream ou de frame
// quando o arquivo traz side data (a seção aninhada sai como mais uma coluna). Medido em 23/09/2026
// com um clipe do render feito no Chrome do Windows, no ffprobe 8.0.1 (Windows) e no 7.0.2 (Linux):
// `stream=nb_frames` sai "6," e não "6"; `stream=width,height` sai "1920,1080,"; `frame=pict_type`
// sai "I," em toda linha. `format=duration` não muda (a seção format não tem side data). É o ARQUIVO
// que decide, não a versão: o mesmo código lia "6" nos clipes sem side data. Number("6,") é NaN — e
// o render no Windows reprovava TODA cena com "o clipe saiu com NaN quadros".
//
// A regra: quem pergunta N campos lê só os N primeiros de cada linha. O que vier depois é da seção
// aninhada que o ffprobe decidiu imprimir, nunca da pergunta.

/**
 * As linhas do CSV, cada uma com só os `n` campos pedidos (sem espaço nas pontas). Linha vazia sai.
 * @param {string} texto a saída do ffprobe
 * @param {number} [n=1] quantos campos a pergunta pediu
 * @returns {string[][]}
 */
export function linhasCsv(texto, n = 1) {
  return String(texto ?? "").split(/\r?\n/)
    .filter((l) => l.trim() !== "")
    .map((l) => l.split(",").slice(0, n).map((c) => c.trim()));
}

/** O primeiro campo da primeira linha: a resposta de uma pergunta de um campo só. "" quando não veio nada. */
export function valorCsv(texto) {
  return linhasCsv(texto, 1)[0]?.[0] ?? "";
}
