# Los Angeles (vídeo 2): o contador da MapTiler

A regra é da `marca/identidade.md` §6, "O gasto do vídeo 2 (Los Angeles), liberado" (Lucas, 07/10/2026, 21:0x de Brasília:
"Sim, como no Juneau (Recomendado)"). As 24 cenas de mapa seguem sem esperar o custo da primeira, sem relevo 3D. Cada render e
cada rodada de portão com a pré-carga `ferramentas/chaves-nos-portoes.mjs` se anota aqui, com a hora de Brasília, e a conta vai
ao Lucas quando o painel a mostrar. Como no Juneau (`out/juneau/_pesquisa/maptiler-gasto.md`), o painel atrasa algumas horas e
pode contar o dia pelo UTC.

| quando (Brasília) | o que | pedidos (portão: o que a pré-carga contou; render: sem contagem local) | painel |
|---|---|---|---|
| 07/10, 21:26:14–21:26:22 | s03 (piloto, mapista): 4 quadros que falharam por erro na cena (2 antes de o mapa subir; 2 num erro de cor da camada) | não contados |
| 07/10, 21:26:37–21:29:18 | s03: 11 quadros de prova com o `quadro.mjs` | não contados (o `quadro.mjs` não imprime) |
| 07/10, 21:29:32 | s03: rodada 1 do `qc-cena`, com a pré-carga | 604 |
| 07/10, 21:29:50 / 21:30:10 | s03: `portao-mapa til` / `rodape`, com a pré-carga | 223 / 230 |
| 07/10, 21:30:43–21:36:33 | s03: render 1 (826 quadros, 4K) | não contados (o render não imprime) |
| 07/10, 21:37:04 | s03: rodada 2 do `qc-cena`, com a pré-carga | 618 |
| 07/10, 21:37:1x / 21:37:3x | s03: `portao-mapa til` / `rodape`, com a pré-carga | 223 / 230 |
| 07/10, 21:37:55–21:43:43 | s03: render 2, o que vale (a pílula "Los Angeles" saía cortada no render 1) | não contados |

Portões da s03 até aqui: 2.128 pedidos (`out/los-angeles/_tmp/maptiler-portoes.jsonl`). O painel não foi lido.
| 07/10, 21:48:26–21:48:34 | s03, ajustes (San Pedro, zoom de Hamlin): 3 quadros de prova com o `quadro.mjs` | não contados |
| 07/10, 21:48:46 / 21:48:53 / 21:49:05 | s03: `qc-cena` / `portao-mapa til` / `rodape`, com a pré-carga | 653 / 225 / 235 |
| 07/10, 21:49:39–21:55:37 | s03: render 3, o que vale (carimbo `27a3fd469f95` / 2160p) | não contados |

Portões da s03 até aqui: 3.241 pedidos. O painel não foi lido.
