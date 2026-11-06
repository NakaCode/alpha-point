# O gasto da MapTiler no vídeo 5 (big-sur)

A liberação: Lucas, 04/11/2026, 16:0x, no chat da Sala. A pergunta: "Posso usar o MapTiler no vídeo 5 (Big Sur), como no Atlântico? A
imagem que vende o lugar é a serra caindo no mar, em relevo 3D, e o relevo 3D gasta tiles da sua conta." A resposta: "Sim, com relevo 3D
(Recomendado)". A opção dizia: "As cenas de mapa e o relevo 3D onde a cena precisar, sem perguntar cena por cena. Anoto o contador antes e
depois de cada render de mapa." (O pedido `big-sur-arte-1` da Sala, 05/11/2026.)

O contador se anota antes e depois de cada render de mapa e de cada rodada de portão com a pré-carga
(`ferramentas/chaves-nos-portoes.mjs`), como no vídeo 4 (`out/atlantico-fundo/_pesquisa/maptiler-gasto.md`). Em lote de peças, quem anota é o
setor, uma vez antes e uma vez depois do lote (`setores/REGIMENTO.md`, "A máquina e os arquivos únicos"). A conta dos portões é a soma de
`pedidos_maptiler` nas linhas novas do `out/big-sur/_tmp/maptiler-portoes.jsonl`. Os renders 4K de prova e os `quadro.mjs` não imprimem a conta:
ficam "não contados", com o número de execuções.

| Quando (Brasília) | Rodada | Pedidos | Notas |
|---|---|---|---|
| 05/11/2026 18:17 | antes da `big-sur-arte-1` (a primeira arte do vídeo: 51 cenas, das quais as de mapa são as 28 do `mapista` e as do editor com beat de mapa; relevo 3D onde a regência pede `mapa_relevo`) | — | Arte. O `_tmp/maptiler-portoes.jsonl` ainda não existe (0 linhas). |
| 05/11/2026 22:05 | depois da `big-sur-arte-1` (as 51 cenas entregues; 35 delas carregam a base de mapa) | **98.009** (portões) | Arte. É a soma de `pedidos_maptiler` nas 1.081 linhas do `_tmp/maptiler-portoes.jsonl`, todas desta tarefa (o arquivo nasceu nela), com as rodadas das peças, as do setor, as provas de nível do satélite por trecho (`prova-niveis`) e as sondas. **Não contados:** 44 renders 4K de cena de mapa pelo setor, mais 1 render tirado da fila aos 7 s (a s55 velha); os renders de prova das peças, nas cenas de mapa de até 12,0 s; e os `quadro.mjs` das peças, um número que cada relato de lote, em `out/big-sur/_tmp/setores/arte-1/<lote>.md`, dá pelas execuções. O painel da MapTiler, quem lê é a Sala. |
