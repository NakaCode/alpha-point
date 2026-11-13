# O gasto da MapTiler no vídeo 7 (rio-columbia)

A liberação: Lucas, 12/11/2026, ~07:5x, no chat da Sala. A pergunta: "Posso usar o MapTiler no vídeo 7 (rio Columbia), como no Big Sur? O
rio nasce nas montanhas com neve da Colúmbia Britânica. A abertura, o começo do rio e o fecho pedem satélite, e o relevo 3D gasta tiles da
sua conta." A resposta: "Sim, com relevo 3D (Recomendado)". A opção dizia: "As cenas de mapa e o relevo 3D onde a cena precisar, sem
perguntar cena por cena. Anoto o contador antes e depois de cada render de mapa." (`sala/mapas-e-maptiler.md`.)

O relevo 3D vai em s02 (o campo `relevo` da regência, `mapa3d` no conceito) e em s15 P2 (`mapa_relevo`): o item 65 do para-passos.

O contador se anota antes e depois de cada render de mapa e de cada rodada de portão com a pré-carga
(`ferramentas/chaves-nos-portoes.mjs`), como no vídeo 5 (`out/big-sur/_pesquisa/maptiler-gasto.md`). Neste vídeo as peças rodam como
subagentes da Sala (sem setor): quem anota é a Sala, uma vez antes e uma vez depois de cada leva. A conta dos portões é a soma de
`pedidos_maptiler` nas linhas novas do `out/rio-columbia/_tmp/maptiler-portoes.jsonl`. Os renders 4K de prova e os `quadro.mjs` não imprimem a
conta: ficam "não contados", com o número de execuções.

| Quando (Brasília) | Rodada | Pedidos | Notas |
|---|---|---|---|
| 13/11/2026 02:37 | antes da arte-1 (a 1ª leva: 47 arquivos, as cenas que não dependem da caça mais a s28; as de mapa são as do `mapista` e as do editor com beat de mapa; o relevo 3D em s15 P2) | — | Sala. O `_tmp/maptiler-portoes.jsonl` ainda não existe (0 linhas). |
| 13/11/2026 06:2x | depois da arte-1 (as 57 cenas entregues, com os consertos, e conferidas pela Sala) | **53.175** (portões) | Sala. É a soma de `pedidos_maptiler` nas 630 linhas do `_tmp/maptiler-portoes.jsonl` (o arquivo nasceu nesta leva: da 1ª, às 03:02:36, à 630ª, às 06:15:39), com as rodadas de portões das peças e as sondas delas; a conta sai de `_tmp/arte-1/maptiler-conta.mjs`. As cenas que mais pediram: s51 5.610, s26 4.628, s13 4.002, s53 3.991, s02 3.240 (com o relevo 3D). **Não contados:** os 30 renders 4K de cena de mapa pela Sala (s13, s18 ×2, s19 ×2, s22, s23, s24, s26, s28 ×2, s30, s36 ×2, s46, s51 ×3, s53 ×3, s55, s57 ×3, s58 ×2, s61 ×2 e s63; os tempos em `_tmp/arte-1/renders/tempos.txt`), os renders 4K de prova das peças nas cenas de mapa (os clipes finais de s02, s05, s06, s07, s09, s15, s35, s38, s44 e s48, e as provas de antes deles), e os `quadro.mjs` e `check-overlap` soltos das peças (cada relato em `_tmp/arte-1/` diz quantos). A conta do painel da MapTiler vai ao Lucas quando ele a mostrar. |
