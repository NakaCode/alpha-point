// O WebSocket do Node sem a compressão permessage-deflate, para falar com o Chrome do render.
//
// Uso (pré-carga, antes da ferramenta da pré-v1; o motor não muda):
//   node --import file:///C:/projetos/alpha-point/ferramentas/cdp-sem-compressao.mjs \
//        C:/projetos/regie-v1/src/ferramentas/renderizar.mjs <proj> --cena=<id> --4k
//
// Por quê (APRENDIZADOS.md, item 57): o WebSocket embutido do Node 24 (undici) sempre oferece a compressão
// permessage-deflate, e o Chrome a aceita. Ao descomprimir, o undici derruba a conexão quando a mensagem passa
// de 4 MB (kDefaultMaxDecompressedSize, fixo, sem opção). O quadro 4K em JPEG 95 de uma foto cheia de detalhe
// passa disso em base64, e o render caía com "a conexão com o navegador caiu" (s01 e s22 do Juneau, 01/10/2026).
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
