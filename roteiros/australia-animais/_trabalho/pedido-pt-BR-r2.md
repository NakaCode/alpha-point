# Pedido da Sala: a tradução de leitura do r2 do vídeo 8 (`australia-animais`) · 18/11/2026

**Quem:** um agente Sonnet, esforço xhigh, despachado pela Sala de controle.
**O que entrega:** `roteiros/australia-animais/roteiro-narrador-pt-BR.md`.

## O que fazer

Traduza para o português do Brasil o texto falado de `roteiros/australia-animais/roteiro-narrador.md` (o r2, em inglês dos EUA), para o Lucas, o
dono do canal, ler e aprovar o roteiro. **Não vai à voz nem à tela**: a narração do vídeo é a em inglês.

**O molde é `roteiros/rio-columbia/roteiro-narrador-pt-BR.md`** (leia a forma dele, não o conteúdo):
- a 1ª linha: `# <o título do vídeo traduzido> (versão em português, para leitura)`;
- a linha `Revisão do roteiro: \`<sha12>\``, com o sha12 do texto falado que a Sala der no despacho (o `sha256` que
  `node roteiros/australia-animais/_ferramentas/gate.mjs` imprime na 3ª linha; confira antes e no fim);
- um bloco `>` que diz o que é (a tradução de leitura do r2, de 18/11/2026; não vai à voz nem à tela; o título original em inglês; quantos
  parágrafos, os mesmos que o portão conta; as marcas `<!-- -->` mantidas para achar o trecho no original, com o título de cada parte traduzido logo
  abaixo; as unidades; as citações);
- o texto, **um parágrafo daqui para cada parágrafo de lá**, na mesma ordem.

**As escolhas:**
- Tradução fiel e natural, no tom de conversa do original: não resuma, não explique, não acrescente nem corte nada. Onde o inglês tem um jogo de
  palavras que não passa, traduza o sentido e diga, numa nota curta no fim, o que era em inglês.
- As milhas e as milhas quadradas ficam em milhas, como no vídeo, com o equivalente métrico entre parênteses (1 mi² = 2,59 km²), arredondado como o
  original arredonda.
- As citações entre aspas ficam em inglês, com a tradução entre colchetes logo depois.
- Os nomes de bicho em português do Brasil quando houver nome corrente (a taipan-do-interior, a cobra-marrom-oriental, a vespa-do-mar, a aranha
  funnel-web, a redback, a víbora, a cascavel), e o nome em inglês entre parênteses na primeira vez, se ajudar a achar no original.
- Números no formato brasileiro (2.678; 3,5).

## As regras

- **Não use `SendMessage` nem `send_message`.** Não commite nem dê push. Não use rede, navegador (nenhuma ferramenta `mcp__claude-in-chrome__*` nem
  `mcp__Claude_Browser__*`), vidIQ nem crédito. A trava do Python vale (script só em arquivo, `python -X utf8 -B`; nunca `python -`, heredoc ou pipe).
- Não edite o roteiro. Escreva só o arquivo acima (e rascunhos em `out/_tmp/pt-BR-australia-animais/`).
- Grave antes de responder, e responda com um resumo curto em português: o sha12 conferido, quantos parágrafos, e as notas de tradução.
