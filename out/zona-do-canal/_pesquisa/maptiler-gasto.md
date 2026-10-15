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
