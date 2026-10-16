# Zona do Canal (vídeo 3): o contador da MapTiler

A regra é a do `CLAUDE.md` ("Os marcadores", `<tile-source>`): no vídeo 3, o gasto está liberado (Lucas, 15/10/2026, 01:41 de
Brasília, no chat da Sala: "Pode usar o Maptiler"), **sem relevo 3D**, que não foi perguntado: cena com relevo pede o ok dele
antes. Cada render e cada rodada de portão com a pré-carga `ferramentas/chaves-nos-portoes.mjs` se anota aqui, com a hora de
Brasília, e a conta vai ao Lucas quando o painel a mostrar. Como no Juneau e em Los Angeles, o painel atrasa algumas horas e pode
contar o dia pelo UTC.

| quando (Brasília) | o que | pedidos (portão: o que a pré-carga contou; render: sem contagem local) | painel |
|---|---|---|---|
| 15/10, 07:26 | Arte, `zona-do-canal-arte-1`, lote de mapa 1 (mapista: s06+s11, s16/s17+s20, s25+s28), **antes**: nenhum portão com a pré-carga nem render de mapa ainda neste vídeo (`_tmp/maptiler-portoes.jsonl` não existe) | 0 | |
| 15/10, 07:30–08:18 | Arte, `zona-do-canal-arte-1`, lote de mapa 1, **depois** (anotado às 08:21): portões com a pré-carga (`qc-cena` e `portao-mapa til`/`rodape`, somados do `_tmp/maptiler-portoes.jsonl`): s06 830 (08:03–08:04), s11 844 (08:03–08:04), s16 712 (08:07–08:08), s20 378 (08:07–08:08), s25 377 (07:51–07:52), s28 1.027 (07:51–07:52) | 4.168 | |
| 15/10, 07:42–08:18 | Arte, lote de mapa 1: 8 renders 4K de prova (s06 e s11 duas vezes cada, a 1ª refeita, pelo M1; s16, s20 pelo M2; s25, s28 pelo M3) e 4 quadros do `quadro.mjs` (s25 1, s28 3, pelo M3) | não contados (o render e o `quadro.mjs` não imprimem) | |
| 15/10, 08:21 | Arte, lote de mapa 2 (mapista: s34+s46, s48/s49+s51, s53+s60/s61), **antes**: `_tmp/maptiler-portoes.jsonl` com 50 linhas, 4.168 pedidos | — | |
| 15/10, 08:21–09:15 | Arte, `zona-do-canal-arte-1`, lote de mapa 2, **depois** (anotado às 09:17): portões com a pré-carga, somados do `_tmp/maptiler-portoes.jsonl` desde 08:21: s34 1.304 (08:36–08:37), s46 1.197 (08:36–08:49), s48 3.120 (08:49–08:55), s51 672 (08:49–08:56), s53 630 (08:41–08:43), s60 2.654 (08:41–08:43); mais rodadas que as peças marcaram "não contados" (M4: `qc-cena` s34 às 08:36:17; M5: `qc-cena` s48 e s51 às 08:49; M6: duas rodadas às 08:41:26 e 08:42:03 e um `qc-carga` avulso) | 9.577 | |
| 15/10, 08:39–09:15 | Arte, lote de mapa 2: 7 renders 4K de prova (s34 e s46 pelo M4, três, um descartado; s48 e s51 pelo M5; s53 e s60 pelo M6) e 6 quadros do `quadro.mjs` (M6, 08:40) | não contados (o render e o `quadro.mjs` não imprimem) | |
| 09:17 | Arte, `zona-do-canal-arte-1`: soma das duas rodadas de mapa pelos portões, 4.168 + 9.577 | 13.745 | |
| 15/10, 10:28 | Arte, `zona-do-canal-arte-2` (a série dos mapas: s16, s20, s25, s28, s34, s46, s51, s53), **antes**: `_tmp/maptiler-portoes.jsonl` com 153 linhas, 13745 pedidos no total do vídeo | — | |
| 15/10, 10:33–10:50 | Arte, `zona-do-canal-arte-2`, **depois**: portões com a pré-carga, somados do `_tmp/maptiler-portoes.jsonl` desde 10:28: s20 378, s28 1.023, s34 1.556 (duas rodadas), s46 558; mais 5 renders 4K de prova (s20, s28, s46, e s34 duas vezes, a 1ª superada), não contados | 3.515 | |
| 15/10, 10:54 | Arte, `zona-do-canal-arte-3` (s06, s11, s48/s49, s60/s61: a faixa e a água novas), **antes**: `_tmp/maptiler-portoes.jsonl` com 193 linhas | — | |
| 15/10, 10:59–11:25 | Arte, `zona-do-canal-arte-3`, **depois**: portões com a pré-carga, somados do `_tmp/maptiler-portoes.jsonl` desde 10:54: s06 833, s11 2.667, s48 2.206, s60 1.200; mais os renders 4K de prova (s06 2 e s11 3 pelo Ma; s48 e s60 pelo Mb), não contados | 6.906 | |
| 15/10, 14:05 | Arte, `zona-do-canal-arte-5` (consertos s11, s16, s20, s48/s49, s53; cenas novas s01/s02, s08/s09, s19, s65, s67/s68; bandeiras na s49), **antes**: `_tmp/maptiler-portoes.jsonl` com 246 linhas | | |
| 15/10, 14:07–15:2x | Arte, `zona-do-canal-arte-5`, **depois**: portões com a pré-carga, somados do `_tmp/maptiler-portoes.jsonl` (linhas 247–342): s11 1.062, s16 730, s20 406, s48 4.886, s01 1.905, s19 581, s67 615, s08 1.287, s65 632; mais 10 renders 4K de prova (s11; s16, s20; s48 ×2; s01, s19, s67, com 6 quadros; s08, s65, com um check-overlap), não contados | 12.104 | |
| 15/10, 15:31 | Arte, `zona-do-canal-arte-5` (complemento: a câmera da s16), **antes**: `_tmp/maptiler-portoes.jsonl` com 342 linhas | | |
| 15/10, 15:31–15:4x | Arte, `zona-do-canal-arte-5` (complemento), **depois**: nenhum pedido (a s16 não mudou; o jsonl continua com 342 linhas); o quadro da s67 para a prévia do comentário saiu do clipe, pelo ffmpeg | 0 | |
| 15/10, 15:42 | Arte, `zona-do-canal-arte-6` (o crédito da s08; as bandeiras da s48), **antes**: `_tmp/maptiler-portoes.jsonl` com 342 linhas | | |
| 15/10, 15:43–16:0x | Arte, `zona-do-canal-arte-6`, **depois**: portões com a pré-carga, somados do `_tmp/maptiler-portoes.jsonl` (linhas 343–369): s08 851, s48 5.008; mais 2 renders 4K de prova (s08, s48) e um check-overlap da s48, não contados | 5.859 | |
| 15/10, 16:59 | Arte, `zona-do-canal-arte-7` (s19→s20, as etiquetas de camada, s65, s28, s11), **antes**: `_tmp/maptiler-portoes.jsonl` com 369 linhas | | |
| 15/10, 17:00–17:4x | Arte, `zona-do-canal-arte-7`, **depois**: portões com a pré-carga, somados do `_tmp/maptiler-portoes.jsonl` (linhas 370–452): s01 1.266, s08 920, s11 1.105, s20 929, s28 1.024, s34 794, s46 558, s48 2.616, s65 920; mais 9 renders 4K de prova e os probe-elemento com a pré-carga, não contados | 10.132 | |
| 15/10, 17:49 | Arte, `zona-do-canal-arte-7` (complemento: a etiqueta de payroll da s65), **antes**: `_tmp/maptiler-portoes.jsonl` com 452 linhas | | |
| 15/10, 17:50–18:00 | Arte, `zona-do-canal-arte-7` (complemento), **depois**: portões da s65 com a pré-carga (linhas 453–466): 937; mais o render 4K de prova da s65, não contado | 937 | |
| 15/10, 18:02 | Arte, `zona-do-canal-arte-8` (os dados partidos s01, s08, s34, s46, s48; a água em s25, s34, s46, s51, s53), **antes**: `_tmp/maptiler-portoes.jsonl` com 466 linhas | | |
| 15/10, 18:03–18:2x | Arte, `zona-do-canal-arte-8`, **depois**: portões com a pré-carga, somados do `_tmp/maptiler-portoes.jsonl` (linhas 467–536): s01 1.199, s08 821, s25 373, s34 794, s46 801, s48 3.567, s51 392, s53 315; mais 6 renders 4K de prova (s01, s08, s25, s34, s51, s53), não contados. A s46 e a s48 ficaram sem render (RITMO, à Sala) | 8.262 | |
| 15/10, 21:41 | Arte, `zona-do-canal-arte-9` (s46, s48: os tempos da triagem do RITMO), **antes**: `_tmp/maptiler-portoes.jsonl` com 536 linhas | | |
| 15/10, 21:42–22:0x | Arte, `zona-do-canal-arte-9`, **depois**: portões com a pré-carga, somados do `_tmp/maptiler-portoes.jsonl` (linhas 537–556): s46 720, s48 3.003; mais 2 renders 4K de prova (s46, s48) e o qc-carga --estreias avulso da s48, não contados | 3.723 | |
| 15/10, 23:14 | Sala, render 4K de prova da s06 e da s60 com `--forcar` (o clipe era mais velho que o `_media/_vendor/perfil-mapa.js` de 14:41, e a linha do tempo não o aceita), **antes** | | |
| 15/10, 23:22 | Sala, render 4K de prova da s06 e da s60, **depois**: 2 renders 4K com a pré-carga cdp-sem-compressao, não contados (o render não registra os pedidos de tile) | | |
| 15/10, 23:37 | Arte, `zona-do-canal-arte-10` (s11, s16, s46, s48: a revisão de espectador), **antes**: `_tmp/maptiler-portoes.jsonl` com 556 linhas | | |
| 15/10 23:38 – 16/10 00:0x | Arte, `zona-do-canal-arte-10`, **depois**: portões com a pré-carga, somados do `_tmp/maptiler-portoes.jsonl` (linhas 557–599): s11 2.345, s16 711, s46 639, s48 2.599; mais 6 renders 4K de prova (s11 ×3, s16, s46, s48), não contados | 6.294 | |
| 16/10, 00:06 | Arte, `zona-do-canal-arte-10` (complemento: s28, s34, s67), **antes**: `_tmp/maptiler-portoes.jsonl` com 599 linhas | | |
| 16/10, 00:07–00:2x | Arte, `zona-do-canal-arte-10` (complemento), **depois**: portões com a pré-carga (linhas 600–625): s28 1.006, s34 905, s67 701; mais 3 renders 4K de prova, não contados | 2.612 | |
| 16/10, 00:25 | Arte, `zona-do-canal-arte-11` (s34: o 1,041 em three thousand), **antes**: `_tmp/maptiler-portoes.jsonl` com 625 linhas | | |
| 16/10, 00:26–00:3x | Arte, `zona-do-canal-arte-11`, **depois**: portões da s34 com a pré-carga (linhas 626–635): 965; mais o render 4K de prova e dois portões avulsos, não contados | 965 | |
| 16/10, 00:38 | Arte, `zona-do-canal-arte-12` (s34: o cartão de 1960 em More), **antes**: `_tmp/maptiler-portoes.jsonl` com 635 linhas | | |
| 16/10, 00:39–00:47 | Arte, `zona-do-canal-arte-12`, **depois**: portões da s34 com a pré-carga (linhas 636–645): 965; mais o qc-carga, o qc-tamanho avulso e o render 4K, não contados | 965 | |
