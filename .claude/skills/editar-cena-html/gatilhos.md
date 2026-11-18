# Gatilhos: editar-cena-html

O teste de disparo de mesa (catálogo §1.4 e §1.7; cético §5): pedidos que **devem** levar a esta skill e pedidos vizinhos
que **não devem**, com a skill para onde vão. Refaça o teste quando a descrição mudar.

## Devem acordar
- "Faz a cena s12: a página do tratado sobre a mesa, com o grifo na data."
- "Cria o card de pessoa do governador, com o cargo embaixo do nome."
- "Monta a cena do gráfico de mortes por animal, com as barras entrando na voz."
- "Monta em HTML a cena da tabela com as mortes por estado."

## Não devem acordar
- "Faz o mapa da bacia com a câmera recuando até o Pacífico." → `gerar-mapa-animado-maptiler`
- "A s42 voltou da revisão com a troca de luz atrasada. Conserta." → `consertar-cena`
- "Escreve o rótulo e a legenda da s12." → `escrever-textos-de-tela`
- "Põe o crédito da foto do Commons na s53: CC BY, como vai?" → `escrever-credito-na-tela`
- "Faz a miniatura do vídeo 8 com a cobra." → `titulo-e-miniatura` (catálogo; o cético da Onda 0, C9)

## O resultado do teste de mesa
- 18/11/2026, rodada 1 (um leitor em Sonnet, às cegas, 30 pedidos; `out/_skills/onda-0/disparo-mesa/`): devem 3/3; não devem 4/4.
- Rodada 2 (outro leitor, 14 pedidos): "Cria o card de pessoa do governador" foi para `pesquisar-pessoas-e-logos`, cuja descrição no catálogo diz "decide o card de nome e cargo" (devem 2/3). A descrição daqui passou a dizer "card de pessoa".
- Rodada 3 (outro leitor, 7 pedidos, a descrição nova): devem 3/3; não devem 4/4. O card ainda tem `pesquisar-pessoas-e-logos` em segundo: quando essa skill nascer, a descrição dela diz que a cena do card é desta.
- Rodada 4 (18/11/2026, depois do cético da Onda 0, C9; a lista real, com as skills de fora do canal, o pedido novo da tabela em HTML e o vizinho da miniatura; 33 pedidos): devem 4/4; não devem 5/5. O gráfico de mortes teve o `dataviz` em segundo; a tabela em HTML não foi ao `frontend-design`.
