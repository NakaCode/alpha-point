# Pedido da Sala: o r2 do roteiro do vídeo 8 (`australia-animais`) · 18/11/2026

**Quem:** um agente Fable, esforço xhigh, despachado pela Sala de controle (a escrita e as reescritas são em Fable: `sala/modelos-e-esforco.md`,
"O roteiro").
**O que entrega:** `roteiros/australia-animais/roteiro-narrador.md` (o r2, gravado por cima do r1) e `roteiros/australia-animais/_trabalho/escrita-notas-r2.md`.

## O que fazer

Aplique a lista da Sala, `roteiros/australia-animais/_trabalho/lista-r1.md`, **mudando o mínimo**: cada item aceito das partes A (fatos) e B (o
ouvinte), e nada além. O r1 está guardado em `_trabalho/roteiro-r1.antes.md` (sha12 do texto falado `18ece98b33ef`). Para o contexto de cada item,
leia os dois laudos: `qc-roteiro/fatos-r1.laudo.md` (o verificador de fatos) e `qc-roteiro/ouvinte-r1.laudo.md` (o ouvinte a frio).

- Onde a lista dá "por exemplo", a forma é sua; o fato é o da lista.
- Onde ela diz "à escolha", escolha e diga nas notas por quê.
- Onde um item da lista e o portão brigarem, vale o portão, e você diz nas notas o que fez.
- As notas do r1 (`_trabalho/escrita-notas.md`) dizem por que cada escolha do r1 foi feita: não desfaça uma escolha que a lista não mandou desfazer.

## As regras do texto

- **Nenhum fato novo.** Os números novos na voz são só os que a lista pede. A base de fatos é a do r1 (a pauta v2, `pautas/australia-animais/_trabalho/fatos-a.md`,
  `fatos-b.md`, `fatos-c.md`, `medida-censo.md` e o registro `pautas/2026-11-18-video-8-australia.md`): o que não está lá nem na lista não entra.
- **A voz do r1 fica.** O ouvinte a achou de conversa, não engessada; o que o Lucas quer da voz está no pedido do r1 (`_trabalho/pedido-escrita.md`, "O que o
  Lucas quer da voz"), e vale igual: nenhum humor perto das mortes; a fonte uma vez, sem "according to" em série; frases de tamanho variado; a calma pelo
  espaço entre as ideias.
- **O portão em 0:** `node roteiros/australia-animais/_ferramentas/gate.mjs` (cwd na raiz do canal) até sair 0, sem problemas. Os alertas não reprovam:
  decida cada alerta novo nas notas.
- **A faixa:** 2.600 a 2.780 palavras faladas (o portão aceita 2.500 a 2.800).
- **A nota `>` do topo** vira a do r2: o r2 de 18/11/2026, sobre a lista da Sala, e o que continua valendo da nota do r1.

## As notas (`_trabalho/escrita-notas-r2.md`)

No molde de `roteiros/rio-columbia/_trabalho/escrita-notas-r2.md`: uma linha por item da lista (o que fez, com a frase nova; ou por que não fez); a medida do
portão (palavras, minutos, sha12, a inscrição e o percentual); os alertas novos, um a um; e, à parte, **as frases novas ou mudadas que tocam em fato**, cada
uma com a fonte da base, para o verificador conferir o diff.

## As regras

- **Não use `SendMessage` nem `send_message`.** Não commite nem dê push. Não use rede, navegador (nenhuma ferramenta `mcp__claude-in-chrome__*` nem
  `mcp__Claude_Browser__*`), vidIQ nem crédito. A trava do Python vale (script só em arquivo, `python -X utf8 -B`; nunca `python -`, heredoc ou pipe).
- Escreva só os dois arquivos acima (e rascunhos seus em `out/_tmp/escrita-australia-animais/r2/`, fora do git).
- Grave antes de responder. **O relato** (curto, em português): as palavras e os minutos (pelo portão), o sha12 do texto falado, a inscrição (parágrafo e
  percentual), os itens que você não aplicou e por quê, e o gancho inteiro em texto puro, se ele mudou.
