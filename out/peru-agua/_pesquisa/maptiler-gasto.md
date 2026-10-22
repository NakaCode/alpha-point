# O gasto da MapTiler no vídeo 4 (peru-agua)

A liberação: Lucas, 21/10/2026, 23:1x, no chat da Sala: "Sim e pode usar relevo quando necessário" (`marca/identidade.md` §6;
`roteiros/peru-agua/decisoes-lucas.md`). O contador se anota antes e depois de cada render de mapa e de cada rodada de portão com a
pré-carga (`ferramentas/chaves-nos-portoes.mjs`), como no vídeo 3 (`out/zona-do-canal/_pesquisa/maptiler-gasto.md`). A prova da
ilustração sobre o mapa de 19/10 (2.767 pedidos contados) fica no contador dela, em `out/prova-mapa-ilustrado/_pesquisa/maptiler-gasto.md`.

| Quando (Brasília) | Rodada | Pedidos | Notas |
|---|---|---|---|
| 22/10/2026 05:38 | antes · peru-agua-arte-1 (Arte), leva 1 | — | o `_tmp/maptiler-portoes.jsonl` ainda não existe (0 linhas); nenhuma cena em `graphics/` |
| 22/10/2026 07:01 | depois · peru-agua-arte-1 (Arte), as 9 peças (M1–M6, EO, EF2; o EF1 não tem mapa) | 23.096 | a soma de `pedidos_maptiler` das 226 linhas do `_tmp/maptiler-portoes.jsonl` (portões com a pré-carga): s06 4.838, s13 2.035, s16 757, s18 448, s21 788, s26 2.367, s28 578, s30 2.201, s34 1.083, s36 608, s39 1.450, s41 1.317, s45 384, s51 2.861, s52 1.381. **Não contados:** os 15 renders 4K de prova e as execuções do `quadro.mjs`/`shot.mjs`/sonda de relevo de cada peça (as horas estão nos relatos `_tmp/setores/arte-1/<lote>.md`). O M1 relata 4 quadros da s06 tirados por engano sobre o HTML sem a mudança. Relevo em s06, s26 e s39. |
| 22/10/2026 07:19 | antes · peru-agua-arte-2 (Arte), o conserto de RITMO da s51 | — | o `_tmp/maptiler-portoes.jsonl` com 226 linhas |
| 22/10/2026 07:31 | depois · peru-agua-arte-2 (Arte), o conserto de RITMO da s51 | 1.033 | as 9 linhas novas do `_tmp/maptiler-portoes.jsonl` (227–235, só s51: o `qc-cena` 633, o `til` 200 e o `rodape` 200). **Não contado:** o render 4K de prova (07:22–07:30). Sem relevo. |
