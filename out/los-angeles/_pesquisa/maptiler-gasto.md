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

## Lote M3 (s42, s44, s46, s48, s49, s53, s55), 07/10/2026

| quando (Brasília) | o que | pedidos |
|---|---|---|
| 22:15–22:38 | quadros de prova com o `quadro.mjs` | não contados |
| 22:31:12–22:43 | portões com a pré-carga: 3 rodadas do `qc-cena`, `portao-mapa til` e `rodape` | 8.235 (`_tmp/maptiler-portoes.jsonl`) |
| 22:43:56–23:19:29 | 7 renders 4K de prova (s42, s44, s46, s48, s49, s53, s55), um de cada vez | não contados |

## Lote M1 (s01, s05, s07, s10, s12, s14, s17, s19), 07/10/2026

| quando (Brasília) | o que | pedidos |
|---|---|---|
| ~22:0x | `preparar-cena` das 8 | não contados |
| 22:15–22:36 | quadros de prova com o `quadro.mjs` | não contados |
| 22:36:48–22:44:19 | portões com a pré-carga (`qc-cena`, `portao-mapa til` e `rodape`, `qc-video-avanca` na s01, e a s01 de novo) | por cena no `til` e no `rodape`: s01 195, s05 378, s07 65, s10 117, s12 45, s14 53, s17 49, s19 208/201, e a s01 refeita 195/195; o `qc-cena` em `out/los-angeles/_tmp/art/lote-m1/portoes/conferir-final.log` e no `_tmp/maptiler-portoes.jsonl` |
| 22:44:30–23:23:50 | 8 renders 4K de prova, um de cada vez | não contados |

## Lote M2 (s21, s23, s26, s29, s31, s33, s37, s40), 07/10/2026

| quando (Brasília) | o que | pedidos |
|---|---|---|
| 22:04 | `preparar-cena` das 8 | não contados |
| 22:12–22:36 | quadros de prova com o `quadro.mjs` | não contados |
| 22:36–22:45 | portões com a pré-carga (duas rodadas do `qc-cena`, `portao-mapa til` e `rodape`, dois `check-overlap` avulsos) | 9.593 (`portao-mapa til` 1.002 e `rodape` 952; o resto no `_tmp/maptiler-portoes.jsonl`) |
| 22:45–23:20 | 8 renders 4K de prova, um de cada vez | não contados |

## A passada oficial do Claude central nas 24 cenas de mapa, 07/10/2026

| quando (Brasília) | o que | pedidos |
|---|---|---|
| 23:32–23:46 | `qc-cena` (conc=3, `--forcar`, as 11 reprovações remedidas sozinhas), `portao-mapa til` e `rodape` nas 24, e o `qc-video-avanca` da s01, todos com a pré-carga | 17.962 (`qc-carga` 2.949, `qc-fora-do-quadro` 2.559, `qc-tamanho` 2.294, `check-overlap` 1.567, `qc-contrato` 1.204, `qc-credito-fantasma` 848, `portao-mapa` 6.409, `qc-video-avanca` 132; do `_tmp/maptiler-portoes.jsonl`) |
| 23:47–23:53 | render 4K de prova da s03 de novo (`--forcar`): o `perfil-mapa.js` foi regravado às 22:04 pelo `preparar-cena` do lote M2, depois do render das 21:55, e a linha do tempo dava o clipe como atrasado. O HTML é o mesmo (sha1 `27a3fd46…`, 2160p) | não contados (o render não passa pela pré-carga das chaves) |

## Os consertos do lote Q3 (mapista M1: s05, s07, s12, s14), 08/10/2026

| quando (Brasília) | o que | pedidos |
|---|---|---|
| 00:03:31–00:03:42 | 6 quadros de prova | não contados |
| 00:03:54–00:06:37 | `qc-cena --forcar`, `portao-mapa til` e `rodape` nas quatro, com a pré-carga | 2.893 (`portao-mapa` 1.082; do `_tmp/maptiler-portoes.jsonl`) |
| 00:06:42–00:30:30 | 4 renders 4K de prova, um de cada vez | não contados |

## Os consertos dos lotes Q4 e Q5 (mapistas M2 e M3: s21, s23, s29, s48), 08/10/2026

| quando (Brasília) | o que | pedidos |
|---|---|---|
| 01:19–01:26 | quadros de medida pelo `quadro.mjs` (M2) | não contados |
| 01:23:44–01:24:44 | portões de s21 e s23, com a pré-carga | 904 |
| 01:24:54–01:31:37 | renders 4K de prova de s21 e s23 | não contados |
| 01:31:09–01:31 | portões da s48, com a pré-carga | 1.176 (`qc-cena` 720, `portao-mapa` 456) |
| 01:32:03–01:36:38 | render 4K de prova da s48 | não contado |
| 01:32:50–01:33:18 | portões da s29, com a pré-carga | 887 |
| 01:33:26–01:36:35 | render 4K de prova da s29 | não contado |

## As trocas das camadas corrigidas e as margens (mapista M3: s44, s46, s48, s55), 08/10/2026

| quando (Brasília) | o que | pedidos |
|---|---|---|
| 01:39–01:47 | portões (`qc-cena`, `portao-mapa`), `medir-margens.mjs` e o medidor do lote, com a pré-carga | 4.125 (`qc-cena` 1.856, `portao-mapa` 1.040, `medir-margens` 983, `margens.mjs` 246) |
| 01:44:52–02:07:16 | 4 renders 4K de prova | não contados |

E a varredura das margens do Claude central nos 14 mapas estáveis (01:5x–02:1x) e no teste das s01 e s03: contada no `_tmp/maptiler-portoes.jsonl`, processo `medir-margens.mjs`.

## A janela 01:15–02:30 de 08/10/2026, inteira (os três mapistas e a varredura das margens)

26.435 pedidos contados no `_tmp/maptiler-portoes.jsonl` (portões, `probe-elemento`, `medir-margens` e o medidor do M3), somados
por cena: s05 2.980, s29 2.928, s48 2.653, s23 2.079, s31 1.895, s19 1.718, s55 1.434, s07 1.365, s26 1.364, s33 1.358, s14 1.135,
s37 1.132, s44 883, s10 776, s03 520, s01 486, s12 450, s21 424, s46 331, s53 204, s42 120, s49 77, s40 74, s17 49. Os 4.125 do
M3 acima estão dentro desta soma. Os renders 4K da janela (s05, s07, s10, s12, s14, s19, s44, s46, s48, s55) não contados. O
M2 (s23, s31 e as margens de s26, s29, s33 e s37) ainda roda: o resto dele entra na próxima linha.

## O fim do M2 e a passada final do Claude central, 08/10/2026

| quando (Brasília) | o que | pedidos |
|---|---|---|
| 02:30:27–02:30:56 | portões da s23 refeita (`qc-cena`, `portao-mapa til` e `rodape`) e `medir-margens.mjs`, com a pré-carga | 616 (`portao-mapa` 154, `medir-margens` 77, e 77 em cada um de `qc-carga`, `qc-contrato`, `qc-tamanho`, `qc-fora-do-quadro` e `check-overlap`; do `_tmp/maptiler-portoes.jsonl`) |
| depois de 02:30 | renders 4K de prova do M2 (s23, s26, s29, s31, s33, s37) | não contados |

Depois de 02:31, nenhum pedido no `_tmp/maptiler-portoes.jsonl` até 02:39: a revisão final do `qc-visual` (lotes Q10 a Q12) julga
os mapas pelos clipes 4K, sem abrir cena de mapa.

## A rodada de arte r4, 08–09/10/2026 (22:0x–00:46), com a água escura

| quando (Brasília) | o que | pedidos |
|---|---|---|
| 22:00–00:46 | portões dos mapistas e da passada do Claude central (`qc-cena`, `portao-mapa til` e `rodape`, `medir-margens`, `qc-video-avanca`), com a pré-carga, nas 23 cenas de mapa | 48.351 contados no `_tmp/maptiler-portoes.jsonl` (`portao-mapa` 14.527, `qc-carga` 10.970, `qc-fora-do-quadro` 6.430, `qc-tamanho` 5.521, `check-overlap` 3.850, `qc-contrato` 2.720, `medir-margens` 2.067, `qc-credito-fantasma` 2.002, `qc-video-avanca` 264); por cena: s01 5.735, s05 5.639, s03 4.200, s29 3.882, s07 2.830, s55 2.573, s48 2.538, s19 2.323, s10 1.987, s33 1.755, s44 1.613, s26 1.537, s37 1.469, s53 1.460, s42 1.443, s40 1.349, s49 1.250, s23 1.203, s14 1.000, s21 837, s12 765, s46 620, s17 343 |
| 22:16–00:39 | renders 4K de prova dos mapistas: M2 s12, s14 (duas vezes), s19, s21, s23 (22:16–22:42); M3 s26, s29 (o run fundido s29–s32, 34,4 s) e s33 (a 1ª da s33 caiu antes do fim); M1 s01, s03, s05, s07 e s10 (com provas antes, às 22:42 e 22:56); M4 s37, s40, s42 e s44 (23:24–23:44); M5 s46, s53, s48, s49 e s55 (duas vezes) (00:06–00:39). Horários de cada um nos relatos (`_tmp/art-r4/m*/relato.md`) | não contados (o render não imprime os pedidos) |

O painel da MapTiler continua sem leitura desde 30/09: é ele que diz o total do mês.
