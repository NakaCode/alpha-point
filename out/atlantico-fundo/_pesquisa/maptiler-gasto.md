# O gasto da MapTiler no vídeo 4 (atlantico-fundo)

A liberação: Lucas, 24/10/2026, 18:5x, no chat da Sala, à pergunta "O vídeo 5 é quase todo mar: o fundo vem da GEBCO (grátis). Posso
usar o MapTiler na costa e na superfície, como no Peru?": "Sim, como no Peru (Recomendado)". O vídeo era o 5 na numeração antiga; é o 4
desde 27/10 (`CLAUDE.md`, "A numeração dos vídeos"). Valem as cenas de mapa e o relevo 3D onde a cena precisa dele, sem pergunta por cena
(`CLAUDE.md`, "Peças da pré-v1 em uso", item 7). Na regência (`regencia.json` `085cc0cb…`), o único relevo é o beat 6 da mãe s63, os
~2,8 s finais do run s63–s65; a s37, a s02 e a s50 ficam planas (decisão da Sala, 29/10/2026, na `atlantico-fundo-direcao-2`).

O contador se anota antes e depois de cada render de mapa e de cada rodada de portão com a pré-carga
(`ferramentas/chaves-nos-portoes.mjs`), como no vídeo 3 (`out/peru-agua/_pesquisa/maptiler-gasto.md`). Em lote de peças, quem anota é o
setor, uma vez antes e uma vez depois do lote (`setores/REGIMENTO.md`, "A máquina e os arquivos únicos").

| Quando (Brasília) | Rodada | Pedidos | Notas |
|---|---|---|---|
| 29/10/2026 05:42 | antes da leva A da `atlantico-fundo-arte-1` (M1 s02/s04/s07, M2 s13/s15/s18, M3 s20/s23/s25; editores sem mapa) | — | Arte. O `_tmp/maptiler-portoes.jsonl` ainda não existe (0 linhas). Os renders 4K de prova e os quadros não se contam aqui. |
| 29/10/2026 07:26 | depois da `atlantico-fundo-arte-1` (16 cenas de mapa: s02, s04, s07, s13, s15, s18, s20, s23, s25, s28, s37, s39 com s40 e s41, s42, s53, s70 e s74; as levas A e B e os consertos da s07) | **19.475** | Arte. As 297 linhas do `_tmp/maptiler-portoes.jsonl` (o arquivo nasceu nesta tarefa), de 05:42 a 07:17. Por cena: s02 3.211, s04 1.694, s07 1.512, s13 378, s15 700, s18 532, s20 952, s23 930, s25 1.865, s28 1.082, s37 1.754 (nisto, uns 60 pedidos de terreno por carga, do sombreado 2D da ilha), s39 774, s42 464, s53 578, s70 1.801, s74 1.248. **Não contados:** os renders 4K de prova, pelo menos um por cena de mapa e mais nos consertos (o renderizador não imprime os pedidos) e os quadros e sondas das peças. Nenhuma cena com relevo 3D. |
| 29/10/2026 07:27 | antes do conserto 2 da s28 (`atlantico-fundo-arte-1`, M4) | — | Arte. O `_tmp/maptiler-portoes.jsonl` com 297 linhas. |
| 29/10/2026 07:33 | depois do conserto 2 da s28 (`atlantico-fundo-arte-1`, M4) | **594** | Arte. As linhas 298 a 307 do `_tmp/maptiler-portoes.jsonl`. O render 4K de prova da s28 não foi contado. **Total da tarefa nos portões: 20.069.** |
| 29/10/2026 07:43 | antes da `atlantico-fundo-arte-2` (13 cenas de mapa: s05, s09, s30/s31, s33, s35, s45, s47/s48, s50, s55, s57, s60/s61, s63/s64/s65 com relevo só no fim, s67/s68) | — | Arte. O `_tmp/maptiler-portoes.jsonl` tem 307 linhas. |
| 29/10/2026 09:24 | parcial da `atlantico-fundo-arte-2`, antes da caça (s05, s09, s30/s31, s33, s35, s45, s60/s61, s63/s64/s65 com relevo no fim, s67/s68) | **13466** | Arte. As linhas 308 a 474 do `_tmp/maptiler-portoes.jsonl`. Os renders 4K de prova e as sondas não foram contados. Faltam s47/s48, s50, s55 e s57, depois da caça. |
| 29/10/2026 12:45 | antes da leva B da `atlantico-fundo-arte-2` (s47/s48, s50, s55, s57), depois da caça | — | Arte. O `_tmp/maptiler-portoes.jsonl` tem 474 linhas. |
| 29/10/2026 13:45 | depois da `atlantico-fundo-arte-2` (a leva B: s47/s48, s50, s55, s57) | **4.831** | Arte. As linhas 475 a 535 do `_tmp/maptiler-portoes.jsonl`. **Total da arte-2 nos portões: 18.297** (as linhas 308 a 535; 13.466 antes da caça e 4.831 depois). Os renders 4K de prova e as sondas não foram contados. O relevo 3D ficou só no fim da s63. |
| 29/10/2026 17:50 | antes da `atlantico-fundo-arte-4` (o lote de consertos; 20 cenas de mapa: s02, s04, s05, s07, s13, s15, s18, s30, s37, s39, s42, s45, s47, s50, s53, s55, s60, s63 com relevo só no fim, s67, s74) | — | Arte. O `_tmp/maptiler-portoes.jsonl` tem 535 linhas. |
| 29/10/2026 18:52 | depois da `atlantico-fundo-arte-4` (o lote de consertos; 20 cenas de mapa, a s60 com a texto-6) | **18.628** | Arte. As linhas 536 a 745 do `_tmp/maptiler-portoes.jsonl`. Os renders 4K de prova (22, com 2 a mais: a s05 pelo 2º conserto e a s45 pela grade da s46) e os `quadro.mjs` não foram contados. O relevo 3D ficou só no fim da s63. |
| 29/10/2026 19:59 | antes da `atlantico-fundo-arte-5` (7 cenas de mapa: s13, s18, s47, s63 com relevo só no fim, e s55, s60, s67 depois da texto-7) | — | Arte. O `_tmp/maptiler-portoes.jsonl` tem 745 linhas. |
| 29/10/2026 20:45 | depois da `atlantico-fundo-arte-5` (7 cenas de mapa: s13, s18, s47, s63 com relevo só no fim, s55, s60, s67) | **6.843** | Arte. As linhas 746 a 814 do `_tmp/maptiler-portoes.jsonl`. Os 7 renders 4K de prova (um por cena) e os `quadro.mjs` não foram contados. O relevo 3D ficou só no fim da s63. |
