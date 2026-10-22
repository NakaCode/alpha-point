// ═════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// CÓPIA DO GUIA DE MAPAS — cdp-sem-compressao.mjs
// De onde veio: ferramentas/cdp-sem-compressao.mjs de um canal que usa a Régie (a pré-v1, commit 7ab9543 do motor).
// Lá, todo render 4K e todo quadro.mjs rodam com ela desde 01/10/2026.
// O que mudou: só este comentário (os caminhos viraram <canal> e <motor>, e saiu a referência às notas do canal). O
// código é o mesmo, linha por linha. Não tem nada de mapa nem de marca: serve a toda cena 4K pesada (satélite, foto).
// O que NÃO foi provado fora daquele canal: só se mediu no Windows 11, com o Node 24 e o Chrome do render. Em outro
// Node (o 22) ou em outro sistema não se mediu; se o Node não tiver o dispatcher global do undici, ela avisa no stderr
// e não troca nada (o render segue como sem ela). Lugar: <canal>/ferramentas/.
//
// O texto abaixo desta caixa é o do canal de origem, com os caminhos, os nomes de vídeo e os nomes de lugar trocados
// por genéricos (<canal> = a pasta do seu canal; <motor> = a pasta da pré-v1 da Régie). Onde ele diz "o canal", leia
// "o canal de origem"; as datas e os "céticos" são a história de como a ferramenta foi provada lá.
// ═════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// O WebSocket do Node sem a compressão permessage-deflate, para falar com o Chrome do render.
//
// Uso (pré-carga, antes da ferramenta da pré-v1; o motor não muda):
//   node --import file:///<canal>/ferramentas/cdp-sem-compressao.mjs \
//        <motor>/src/ferramentas/renderizar.mjs <proj> --cena=<id> --4k
//   (no Windows, a URL leva a letra do disco: file:///C:/caminho/do/canal/ferramentas/cdp-sem-compressao.mjs)
//
// Por quê: o WebSocket embutido do Node 24 (undici) sempre oferece a compressão
// permessage-deflate, e o Chrome a aceita. Ao descomprimir, o undici derruba a conexão quando a mensagem passa
// de 4 MB (kDefaultMaxDecompressedSize, fixo, sem opção). O quadro 4K em JPEG 95 de uma foto cheia de detalhe
// passa disso em base64, e o render caía com "a conexão com o navegador caiu" (duas cenas de foto em tela cheia,
// medidas em 01/10/2026).
// Sem a oferta, o Chrome manda a mensagem sem compressão, e aí o undici não tem esse teto (8 MB passaram).
//
// Como: o WebSocket global vira uma subclasse que passa ao undici um dispatcher próprio, que só tira o
// cabeçalho Sec-WebSocket-Extensions do pedido de abertura e entrega o resto ao dispatcher global do Node.
// O resto do Node (fetch, http) não muda. Sem o dispatcher global, nada se troca e o aviso vai ao stderr.

const CHAVE = Symbol.for("undici.globalDispatcher.1");

// O Node só cria o dispatcher global no primeiro fetch: um pedido a uma porta local fechada o cria, sem rede.
if (!globalThis[CHAVE]) { try { await fetch("http://127.0.0.1:1/"); } catch {} }
const base = globalThis[CHAVE];

const ehExtensoes = (nome) => String(nome).toLowerCase() === "sec-websocket-extensions";
function semExtensoes(h) {
  if (!h) return h;
  if (Array.isArray(h)) {
    if (h.length && Array.isArray(h[0])) return h.filter(([n]) => !ehExtensoes(n));
    const plano = [];
    for (let i = 0; i < h.length; i += 2) if (!ehExtensoes(h[i])) plano.push(h[i], h[i + 1]);
    return plano;
  }
  if (typeof h[Symbol.iterator] === "function") return [...h].filter(([n]) => !ehExtensoes(n));
  return Object.fromEntries(Object.entries(h).filter(([n]) => !ehExtensoes(n)));
}

if (base && typeof base.dispatch === "function" && typeof globalThis.WebSocket === "function") {
  const dispatcher = { dispatch: (opts, handler) => base.dispatch({ ...opts, headers: semExtensoes(opts.headers) }, handler) };
  const Original = globalThis.WebSocket;
  globalThis.WebSocket = class WebSocketSemCompressao extends Original {
    constructor(url, protocolos) { super(url, { protocols: protocolos ?? [], dispatcher }); }
  };
} else {
  console.error("cdp-sem-compressao: o dispatcher global do Node não apareceu; o WebSocket segue o original (com compressão)");
}
