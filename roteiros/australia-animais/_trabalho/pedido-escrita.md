# Pedido da Sala: a escrita do roteiro r1 do vídeo 8 (`australia-animais`) · 18/11/2026

**Quem:** um agente Fable, esforço xhigh, despachado pela Sala de controle (a escrita e o gancho são em Fable: `sala/modelos-e-esforco.md`, "O roteiro").
**O que entrega:** `roteiros/australia-animais/roteiro-narrador.md` (o texto do narrador, en-US) e `roteiros/australia-animais/_trabalho/escrita-notas.md`.

## O que ler

1. **O briefing** (`roteiros/australia-animais/_trabalho/briefing.md`): é o seu guia. Onde ele e a pauta divergirem, vale o briefing, e você diz nas notas.
2. **Os fatos**, que são piso, não texto: a pauta v2 (`pautas/2026-11-18-video-8-australia-pauta.md`: §3, §4 com as frases seguras e a coluna "Na fala", §5, §7,
   §8), as leituras de hoje (`pautas/australia-animais/_trabalho/fatos-c.md` e `medida-censo.md`), o registro (`pautas/2026-11-18-video-8-australia.md`, "As
   leituras da Sala") e as falas do Lucas (`roteiros/australia-animais/decisoes-lucas.md`). **Nenhum fato novo**: o que não está nesses arquivos não entra.
3. **O portão** (`roteiros/australia-animais/_ferramentas/gate.mjs`; as notas, `roteiros/australia-animais/_trabalho/gate-notas.md`, "Para quem escreve o
   roteiro").
4. **A voz**: `marca/voz.md` inteiro (§3 é a inscrição falada), `marca/cta.md` §1, §5 e §6, e o roteiro do vídeo 7 (`roteiros/rio-columbia/roteiro-narrador.md`)
   como régua de forma e de tom, nunca de frase.

## O que o Lucas quer da voz (as memórias da Sala, ditas aqui)

- Em 02/11/2026 ele achou o roteiro do Big Sur "engessado", que "não comunica bem com o público". Desde então: **voz de conversa com o espectador** (segunda
  pessoa, cena, pergunta, surpresa); **frases de tamanho variado**, e a calma pelo espaço entre as ideias, não pelo corte das frases; **a fonte na tela**, e na
  voz só o que precisa de dono, uma vez por fonte (nada de "according to" em série); **menos nomes**.
- Em 30/10/2026: a narrativa estava "MUITO acelerada", e ele quer vídeos mais longos. A voz fica no ritmo de hoje (~179 palavras/min); a calma vem do texto.
- O tom da pauta §3: curioso, de conversa, com o humor só no fato; **nenhum humor perto das mortes**; justo com a Austrália (nem "tudo lá mata você", nem "é
  tudo mito"); a hipótese dita como hipótese.

## O que entregar

- **`roteiros/australia-animais/roteiro-narrador.md`**, no formato do do vídeo 7: o título na 1ª linha (`# Australia's Deadliest Snake Isn't Its Most Venomous
  One`, o mais clicado no teste), um bloco de citação `>` com a nota do r1 (de onde vem, os três títulos do Test & Compare, que as marcas `<!-- … -->` separam as
  partes e não são lidas, e que cada parágrafo separado por linha em branco é um pedido à voz), e o texto, com uma marca `<!-- … -->` antes de cada parte (o
  gancho, cada ato, a inscrição falada, o fecho). Números como a voz os diz (o portão conta os algarismos; a cópia para a voz os escreve por extenso depois).
- **O portão em 0**: `node roteiros/australia-animais/_ferramentas/gate.mjs` (cwd na raiz do canal) até sair 0. Os alertas não reprovam: decida cada um nas
  notas (fica, e por quê; ou muda).
- **A faixa**: 2.500 a 2.800 palavras faladas (o portão conta); mire em ~2.650–2.750.
- **`roteiros/australia-animais/_trabalho/escrita-notas.md`**, no molde de `roteiros/rio-columbia/_trabalho/escrita-notas.md`: as escolhas e por quê (onde
  você se afastou do briefing ou da pauta); as chamadas (o parágrafo da inscrição e o percentual que o portão estima; a sugestão de pergunta de comentário, que
  é do `redator-de-tela`); os alertas do portão, um a um; o que faltou de fato e como se escreveu sem; **as frases em que você teve dúvida**, para o
  verificador de fatos e o ouvinte a frio.

## As regras

- **Não use `SendMessage` nem `send_message`.** Não commite nem dê push. Não use rede, navegador (nenhuma ferramenta `mcp__claude-in-chrome__*` nem
  `mcp__Claude_Browser__*`), vidIQ nem crédito. A trava do Python vale (script só em arquivo, `python -X utf8 -B`; nunca `python -`, heredoc ou pipe).
- Escreva só os dois arquivos acima (e rascunhos seus em `out/_tmp/escrita-australia-animais/`, fora do git).
- Grave antes de responder. **O relato** (curto, em português): as palavras e os minutos (pelo portão), o sha12 do texto falado (o portão o dá), a inscrição
  (parágrafo e percentual), quantos números, os alertas que ficaram, e o gancho inteiro em texto puro, para a Sala ler.
