# Juneau: o contador da MapTiler

A regra é da `marca/identidade.md` §6, "O gasto do Juneau, liberado": o contador se anota antes e depois da
primeira cena de mapa, e o custo real vai ao Lucas antes das outras.

| quando | o que | pedidos no período de cobrança atual | quem leu |
|---|---|---|---|
| 30/09/2026 21:12 (Brasília) | antes do primeiro render de mapa (o piloto s03) | 10.689 (Analytics › Current billing period; sessões: 0) | o Lucas mandou o print do painel |
| 30/09/2026 21:37 (Brasília) | depois do 1º render da s03 (21:33–21:35, 241 quadros em 4K) | 10.689: o painel ainda não somou o render | print do Lucas |
| 30/09/2026 22:17 (Brasília) | 2º render da s03 (a divisa mais grossa e os rótulos fora das linhas; câmera 100 px mais baixa) | sem leitura: entra na de 01/10 | — |
| 30/09/2026 23:06 (Brasília) | depois dos 2 renders da s03 (21:33 e 22:17) | total 10.689, sem mudança; a barra de 30/09 diz "Static maps: 30" e "Estimate: 30.349" (total 30.379) | print do Lucas |
| 01/10/2026 00:00 (Brasília) | 3º render da s03 (a opção D: estradas em `--rede-cor` e o ROADS), 00:00:43–00:03:11 = 03:00–03:03 UTC de 01/10 | sem leitura | — |
| 01/10/2026 00:36 (Brasília) | 4º render da s03 (a legenda das cores no lugar do ROADS), 00:36:26–00:38:14 = 03:36–03:38 UTC de 01/10 | sem leitura | — |

- **Às 23h de 30/09, o dia ainda não estava somado:** o total segue em 10.689, e a barra do dia mostra só 30 pedidos
  contados, como "Static maps". O resto é a estimativa do site. Os renders pedem tiles (`/tiles/satellite-v2/…` e
  `terrain-rgb-v2`, no perfil `maptiler` da pré-v1), e nada no canal chama a API de mapa estático. De onde vêm esses 30
  continua sem explicação, e o painel não mostra a origem. A leitura que vale é a do dia 01/10, à tarde, com o 30/09
  fechado.
- **O dia do painel pode ser o UTC.** Os dois renders da s03 foram às 21:33 e às 22:17 de Brasília, que já são 00:33 e
  01:17 UTC de **01/10**. Se o gráfico conta pelo UTC (o painel não diz), os renders caem na barra de 01/10, e não na
  de 30/09. Isso explicaria os só 30 pedidos de 30/09. Nesse caso, a leitura que fecha a conta é a de 02/10, com o
  01/10 inteiro, e todo render até 21:00 de Brasília de 01/10 entra na mesma barra. Por isso cada render se anota
  aqui com a hora, e a divisão é pelo número de renders da barra.
- **Na leitura de 01/10, o 30/09 tem dois renders da s03.** O custo de uma cena de mapa é a diferença do dia
  dividida por 2 (os dois têm a mesma duração e quase o mesmo enquadramento).

- **Pelo gráfico do painel:** os pedidos vieram em 26/09 e 27/09, uns 5 mil por dia, só de tiles. A barra de 30/09
  é a estimativa do site (mais ou menos 30 mil), não é uso.
- O painel pode atrasar algumas horas. O "depois" se lê com folga depois do render, e de novo no dia seguinte.
- O `renderizar.mjs` da pré-v1 não guarda cópia de tiles: cada render pede tudo à MapTiler (o perfil `maptiler`, `src/mapa/perfis.mjs`). O 10.689 inalterado depois do render é atraso do painel, não render de graça. A leitura que vale é a de 01/10, com o dia 30/09 fechado.

## 01/10/2026, 02:2x — o custo fecha depois

O Lucas liberou as outras cenas de mapa sem esperar o custo da primeira: "Na verdade pode seguir o uso do maptiler,
podemos fechar o custo outra hora. Preciso de resultados o quanto antes" (identidade §6, "O gasto do Juneau,
liberado"). O contador continua anotado a cada render, aqui, e a conta vai a ele quando o painel a mostrar.

## 01/10/2026, 05:0x — o inset da s05, montado pelo editor-de-arte

A s05 tem um inset de mapa (MapTiler satellite-v2, zoom 7,4, câmera parada). O `editor-de-arte` tirou 2 capturas
de conferência com o `quadro.mjs`, cerca de 20 tiles cada, segundo o relato dele (`out/juneau/_tmp/art/lote1-relato.md`).
O render da s05 carregará os tiles mais uma vez. Daqui em diante, cada cena com mapa tem no máximo uma captura de
conferência antes do render.

## 01/10/2026, 06:5x–07:1x — os renders de mapa do art (Claude central)

Todos com `renderizar.mjs --4k` e a pré-carga `ferramentas/cdp-sem-compressao.mjs` (`APRENDIZADOS.md`, item 57), um
por vez, antes do laudo de fatos (o Lucas pediu resultado o quanto antes e liberou o custo; se o laudo mudar um texto,
a cena se refaz). Horas de Brasília (UTC −3: todos caem em 01/10 UTC). O painel não foi lido: a conta vai ao Lucas
quando ele mostrar.

| cena | início | fim | resultado |
|---|---|---|---|
| s03 (5º render: o apóstrofo curvo) | 06:51:19 | 06:52:50 | 2160p |
| s05 (o inset do editor) | 06:52:50 | 06:54:52 | 2160p |
| s07 | 06:54:52 | 06:58:05 | falhou no quadro 335: os tiles não chegaram em 90 s (os tiles até ali foram pedidos) |
| s08 | 06:58:05 | 06:59:52 | falhou no quadro 42, pelo mesmo motivo |
| s12 | 06:59:52 | 07:04:25 | 2160p |
| s15 | 07:04:26 | 07:07:23 | 2160p |
| s21 | 07:07:23 | 07:07:58 | 2160p |
| s33 | 07:07:58 | 07:10:31 | 2160p |
| s08 (2ª vez) | 07:10:48 | 07:12:34 | falhou de novo no quadro 42 |
| s07 (2ª vez) | 07:12:34 | 07:15:49 | falhou de novo no quadro 335 |
| s24 | 07:15:49 | 07:17:02 | 2160p |

- **Por que a s07 e a s08 caem** (diagnóstico do Claude central, 07:2x, com duas aberturas da cena fora do render: a
  s08 em t = 1,4 e a s07 em t = 11,1667, umas poucas dezenas de tiles cada): no quadro que cai, os tiles estão todos
  carregados, mas em dois níveis vizinhos (na s08, 24 do nível 7 e 5 do nível 8, no zoom 7,493). O `nivelUnico()` do
  molde exige um nível só e espera até o teto. Não é a rede: repetir o render paga os tiles de novo e cai no mesmo
  quadro. O conserto foi ao mapista: aceitar dois níveis vizinhos quando nenhum tile está carregando.
| s57 (o inset do editor, 2 capturas de conferência pelo `quadro.mjs`) | ~08:0x | — | a 1ª sem quadro (a espera de nível único travou depois de um `jumpTo`), a 2ª saiu; as duas pediram tiles |
| capturas de conferência do mapista, lote 3 (uma por cena, `quadro.mjs`) | s42 07:20, s44 08:39 (com relevo), s48 08:49, s50 09:51, s59 09:57 | — | mais 10 tiles de DEM z9 (terrain-rgb-v2) às 07:24, para medir o relevo da s44 |
| s05 (2º render: a correção das margens; o inset de mapa) | 09:06:40 | 09:08:53 | 2160p |
| s39 | 10:00:43 | 10:02:44 | 2160p |
| s44 (o relevo 3D: satellite-v2 + terrain-rgb-v2; será refeita com a Thane Road) | 10:02:44 | 10:09:44 | 2160p, MP4 de 731 MB |
| s48 | 10:09:45 | 10:12:03 | 2160p |
| s59 | 10:12:03 | 10:13:38 | 2160p |
| s57 (1 captura reduzida de conferência pelo editor, com a tracejada da s50) | ~10:2x | — | — |
| s57 (o inset do editor) | 10:23:37 | 10:25:34 | 2160p |
| s39 (2º render: a faixa da lei dentro da margem) | 10:25:46 | 10:27:54 | 2160p |
| s42 | 10:27:55 | 10:34:13 | 2160p |
| s44 (2º render: o anel na margem e a Thane Road; com o relevo) | 10:37:51 | 10:44:19 | 2160p |
| s50 (1º render: a câmera do b6 e a página dentro da margem) | 10:44:19 | 10:48:20 | 2160p |
| s12 (2º render: os créditos em sequência, as fitas na margem e a folha de 1993 no lugar) | 10:52:11 | 10:56:46 | 2160p |
| s07 (3ª vez, com o nivelUnico consertado e as fitas na margem) | 10:56:46 | 11:00:50 | 2160p |
| s08 (3ª vez) | — | — | não começou às 11:00: o disco ficou com 2,9 GB, e o render guarda os quadros em JPEG antes de juntar |
| s08 (3ª vez, depois de o Lucas liberar o disco) | 12:02:57 | 12:07:00 | 2160p |
| s07 (4ª vez: o recorte da foto de Sitka sem a borda do scan) | 12:10:51 | 12:14:43 | 2160p |
| s05 (3 capturas de conferência do editor pelo `quadro.mjs`, a rodada 6: duas antes do conserto, uma depois) | ~12:1x | — | as três pediram tiles do inset |
| s42 (2º render: a pílula do Juneau fora do canto) | 12:14:52 | 12:19:10 | 2160p |
| s44 (3º render: a Thane Road, a divisa larga, o Taku sem fantasma; com o relevo) | 12:19:10 | 12:25:22 | 2160p |
| s50 (2º render: as pílulas pela caixa real, o giro de 20° no b6, a divisa larga) | 12:25:23 | 12:29:23 | 2160p |
| s05 (3º render: o cartão da fala assentando no lugar; o inset de mapa) | 12:30:47 | 12:32:53 | 2160p |
| s57 (2 cargas do editor na rodada 7: o qc-cena e uma captura) | antes das 12:55 | — | o inset |
| s57 (3º render: o tronco espera os ramos) | 12:55:06 | 12:56:57 | 2160p |
| s59 e s48 (4 cargas do mapista na correção 2: o qc-cena da s59 às 13:04, da s48 às 13:05 e das duas às 13:12) | 13:04 | 13:12 | qc-cena |
| s59 (2º render: o recuo cruza os níveis com o CENA.niveis; pede os níveis 12 a 9) | 13:14:16 | 13:15:44 | 2160p |
| s48 (2º render: a pílula Lynn Canal sobre o ponto do GNIS) | 13:15:44 | 13:17:57 | 2160p |
| s44, s15, s21 e s24 (8 cargas do mapista na correção 3: 4 aberturas da s44 para medir, às 13:26, 13:29, 13:30 e 13:32, e o qc-cena das 4 cenas) | 13:26 | ~13:35 | medida e qc-cena |
| s42 (1 carga do mapista: o qc-cena depois do CENA.niveis) | ~13:41 | — | qc-cena |
| s12 e s48 (2 cargas do mapista na correção 4: o qc-cena das duas, com a deriva) | ~13:50 | — | qc-cena |
| s15 (2º render: a câmera anda; a camada cortada do sítio) | 13:52:18 | 13:55:37 | 2160p |
| s21 (2º render: a camada cortada do sítio) | 13:55:37 | 13:56:15 | 2160p |
| s24 (2º render: o p1 com push-in; a camada cortada do sítio) | 13:56:15 | 13:57:35 | 2160p |
| s44 (4º render: o CENA.lodDegraus, a nitidez das laterais com o relevo) | 13:57:35 | 14:04:29 | 2160p |
| s42 (3º render: o CENA.niveis na troca de nível do quadro 131→132) | 14:04:41 | 14:10:10 | 2160p |
| s12 (render com a deriva da correção 4) | 14:10:23 | 14:15:29 | 2160p |
| s48 (render com a deriva da correção 4) | 14:15:29 | 14:17:47 | 2160p |
| s44 (20 cargas do mapista na correção 5: as linhas sobre o relevo, freeRtt, nível único com teto 11; o palco pede 94–150 tiles por quadro, antes ~34) | ~14:40–15:39 | — | qc-cena e capturas |
| s44 (5º render: as linhas sobre o relevo da correção 5, freeRtt, nível único com teto 11, fusões) | 15:40:55 | 15:49:50 | 2160p |
| s12, s42 e s48 (8 cargas do mapista na correção 6: moving true, a dupla atualização no __aguardarMapa, o nível 9 da s42) | ~15:50–16:01 | — | qc-cena e capturas |
| s12 (render da correção 6: a base lisa) | 16:04:09 | 16:09:09 | 2160p |
| s48 (render da correção 6: a base lisa) | 16:09:09 | 16:11:38 | 2160p |
| s42 (render da correção 6: o clarão do q132, o nível 9 do recuo, a base lisa) | 16:11:38 | 16:16:57 | 2160p |
| s03, s15, s21, s24, s39 e s50 (12 cargas do mapista na correção 7, lote A: a base lisa e a dupla atualização) | ~16:20–16:35 | — | medidas e qc-cena |
| s03 (render da correção 7, lote A: a base lisa) | 16:18:18 | 16:20:20 | 2160p |
| s15 (render da correção 7, lote A) | 16:20:20 | 16:24:07 | 2160p |
| s21 (render da correção 7, lote A) | 16:24:07 | 16:24:49 | 2160p |
| s24 (render da correção 7, lote A) | 16:24:50 | 16:26:31 | 2160p |
| s39 (render da correção 7, lote A) | 16:26:31 | 16:29:05 | 2160p |
| s50 (render da correção 7, lote A) | 16:29:05 | 16:34:31 | 2160p |
| s07, s08, s33 e s59 (12 cargas do mapista na correção 7, lote B: a base lisa, a dupla atualização, a fusão do degrau de foco, o diagnóstico da trava da s33) | ~16:35–16:45 | — | medidas e qc-cena |
| s07 (render da correção 7, lote B: a base lisa, a fusão do degrau de foco) | 16:35:29 | 16:40:56 | 2160p |
| s08 (render da correção 7, lote B) | 16:40:57 | 16:46:23 | 2160p |
| s33 (render da correção 7, lote B) | 16:46:23 | 16:49:52 | 2160p |
| s59 (render da correção 7, lote B: a base lisa) | 16:49:52 | 16:51:34 | 2160p |
| s44 (correção 7: 6 páginas com tile e 22 tiles baixados à parte pelo mapista, para achar a emenda do nível 11 no Lynn Canal) | ~16:50–17:15 | — | medidas e qc-cena |
| s44 (6º render: correção 7, o nível 10 no mergulho, as fusões do mapa plano, a base lisa) | 16:59:37 | 17:09:37 | 2160p |
| s42 (render da correção 7: a espera com o furo consertado, a lombada no zoom 10) | 17:25:28 | 17:31:40 | 2160p |
| s42, s33 e s59 (11 cargas do mapista na correção 7, seção 6: s42 3, s33 5, s59 3) | ~17:15–17:45 | — | medidas e qc-cena |
| s33 (render da correção 7, seção 6: a fase de 0,5 px no zoom 10) | 17:35:55 | 17:39:16 | 2160p |
| s59 (render da correção 7, seção 6: a fase de 0,5 px no zoom 13) | 17:39:16 | 17:41:00 | 2160p |
| s03, s15, s50 e s33 (15 cargas do mapista na correção 8, 2 delas na comparação do texto liso com a câmera parada: a troca que sobe, o patamar em 8,5, o texto liso, a estrada fora da faixa do crédito; 6 delas do qc-cena) | ~18:00–18:55 | — | medidas e qc-cena |
| s12, s21, s24, s39, s48, s42, s44, s07, s08, s59 e mais uma (22 cargas do qc-visual no lote 4: o `qc-rodape-contraste` e o `qc-video-avanca`, 2 por cena; os quadros vieram dos MP4) | ~18:10–18:42 | — | portões do qc |
| s03 (render da correção 8: a troca que sobe com o nível 8 preso, o texto liso) | 18:54:59 | 18:56:52 | 2160p |
| s15 (render da correção 8: o texto liso, o estilo sem transição, a espera da s44) | 18:56:52 | 19:00:39 | 2160p |
| s50 (render da correção 8: o patamar em 8,5 com saída pelo tempo) | 19:00:40 | 19:05:48 | 2160p |
| s33 (render da correção 8: as fusões da entrada, a estrada e o distrito fora da faixa do crédito) | 19:05:48 | 19:08:56 | 2160p |
| s44 e s48 (6 cargas do mapista na correção 9, o texto liso: s48 1, s44 2 com 299 quadros, qc-cena 3) | ~19:10–19:30 | — | medidas e qc-cena |
| s48 (render da correção 9: o texto liso no Lynn Canal, o estilo sem transição, a espera da s44) | 19:31:42 | 19:34:38 | 2160p |
| s44 (7º render: correção 9, o texto liso nos dez rótulos presos ao chão) | 19:34:38 | 19:43:01 | 2160p |
| s05 (9 fotos de maquete pelo `quadro.mjs`, para a revisão do Lucas no Premiere: 6 na 1ª rodada e 3 na 2ª; cópias em `_tmp/prop-s05-*.html`, nada renderizado) | ~23:55 de 01/10 a ~01:00 de 02/10 | — | maquete |
| s05 (render da revisão do Lucas, rodada 1) | 11:34:17 | 11:36:25 | 2160p |
| s05 (portões da revisão do Lucas, rodada 1: o qc-cena pulou a s05 pelo carimbo válido do HTML atual, e a carga do mapa foi a do qc-rodape-contraste) | 11:52:02 | — | qc-rodape-contraste |
| s39 (revisão de espectador: a faixa da lei saiu; 1 qc-cena, até 6 cargas do mapa pelos portões que abrem a página com rede: contrato, carga, colisão, tamanho, til, fora do quadro; o crédito-fantasma roda sem rede; nada renderizado) | 14:07:50 | 14:07:54 | qc-cena |
| s05 (comentários velhos da revisão do Lucas, 02/10: só comentário mudou no HTML, nenhum código; 1 qc-cena nas 4 cenas, até 6 cargas do mapa pelos portões que abrem a s05 com rede: contrato, carga, colisão, tamanho, til, fora do quadro; o crédito-fantasma roda sem rede; nada renderizado) | 14:10:31 | 14:10:43 | qc-cena |
| s39 (render da revisão do Lucas, 2ª leva) | 14:13:31 | 14:15:44 | 2160p |
| s05 (render da revisão do Lucas, 2ª leva) | 14:16:41 | 14:18:48 | 2160p |
| s39 e s05 (portões da revisão, 2ª leva: o qc-cena pulou as 5 cenas pelo carimbo válido do HTML atual, nenhuma carga; 1 carga do mapa em cada pelo qc-rodape-contraste, s39 às 14:23:42 e s05 às 14:23:46; nada renderizado) | 14:23:42 | 14:23:48 | qc-rodape-contraste |
| s39 (revisão de espectador, 2: o push-in de 1,00 a 1,05 preso ao carimbo, de 2,4 s ao corte; 3 fotos com tile pelo `quadro.mjs` em 2,4, 7,6 e 10,39 s, 3 cargas; 2 `probe-elemento` sem carga de mapa, a cena para na falta da chave; nada renderizado) | 16:02:10 | 16:02:19 | quadro.mjs |
| s39 (revisão de espectador, 2: 1 qc-cena, até 6 cargas do mapa pelos portões que abrem a página com rede: contrato, carga, colisão, tamanho, til, fora do quadro; o crédito-fantasma roda sem rede; nada renderizado) | 16:02:38 | 16:02:42 | qc-cena |
| s39 (render da revisão, push-in) | 16:06:05 | 16:08:12 | 2160p |
| s12 (revisão de espectador, 4: o cabeçalho do papel sem o espaço reservado do ano, o Southeast apagado sob o papel; 4 fotos com tile pelo `quadro.mjs` em 17,6, 19,3, 21,6 e 22,3 s, 4 cargas; 1 qc-cena, até 6 cargas do mapa pelos portões que abrem a página com rede: contrato, carga, colisão, tamanho, til, fora do quadro; o crédito-fantasma roda sem rede; nada renderizado) | 18:45:53 | 18:46:51 | quadro.mjs e qc-cena |
| s05 (revisão de espectador, 4, editor-de-arte: o cartão da fala nasce com a 1ª parte e cresce com a 2ª; 5 fotos com tile pelo `quadro.mjs` em 6,8, 8,5, 9,5, 9,8 e 11,5 s, 5 cargas, 18:58:02–18:58:12; 1 qc-cena nas 4 cenas da leva (s36, s11, s34 e s05; só a s05 tem mapa), até 6 cargas do mapa pelos portões que abrem a página com rede: contrato, carga, colisão, tamanho, til, fora do quadro; o crédito-fantasma roda sem rede; 18:58:58–18:59:09; nada renderizado) | 18:58:02 | 18:59:09 | quadro.mjs e qc-cena |
| s08 (revisão de espectador, 4, editor-de-arte: a pílula do crédito da fonte abraça o texto; 4 fotos com tile pelo `quadro.mjs`, em 3,5 s às 19:06:53, em 18,5 s às 19:07:17, uma cópia de diagnóstico `_diag-s08.html` em 18,5 s às 19:10:0x (apagada) e a cena corrigida em 18,5 s às 19:11:08, 4 cargas; 1 qc-cena nas 11 cenas da leva, até 6 cargas do mapa pelos portões que abrem a s08 com rede: contrato, carga, colisão, tamanho, til, fora do quadro; o crédito-fantasma roda sem rede; as outras 10 cenas não têm mapa; a medida das pílulas de todas as cenas foi com a rede abortada, sem carga; nada renderizado) | 19:06:53 | 19:12:38 | quadros e qc-cena |
| s05 (render da revisão, 4ª leva) | 19:23:16 | 19:25:14 | 2160p |
| s08 (render da revisão, 4ª leva) | 19:33:21 | 19:37:56 | 2160p |
| s12 (render da revisão, 4ª leva) | 19:48:37 | 19:53:02 | 2160p |
| s05, s08 e s12 (portões da revisão, rodada 7: o qc-cena pulou as 3 pelo carimbo válido do HTML atual, nenhuma carga; 1 carga do mapa em cada pelo `qc-rodape-contraste`, s05 às 19:55:17, s08 às 19:55:27 e s12 às 19:55:42, e 1 em cada pelo `qc-video-avanca`, s05 às 19:56:34, s08 às 19:57:10 e s12 às 19:58:01; 6 cargas; nada renderizado) | 19:55:17 | 19:58:08 | qc-rodape-contraste e qc-video-avanca |
| s01 (5ª leva, mapista: o voo de abertura; 11 fotos com tile pelo `quadro.mjs`: 3 às 02:48:16–02:48:35, 2 às 02:49:32, 2 no teste do nível 12 às 02:50:09, 2 no teste do nível 12 numa cópia `_diag-s01.html` às 02:50:26 e 2 no teste do nível 10 na cópia às 02:50:55, a cópia apagada; as outras medidas da leva foram no laboratório sem tile, `_tmp/art/mov5/lab.mjs`, com todo pedido à MapTiler respondido por um tile falso, nenhuma carga) | 02:48:16 | 02:50:55 | quadro.mjs |
| s01, s05, s07, s08, s12, s15, s24, s33, s39, s42, s44, s48, s50, s57 e s59 (5ª leva, mapista: 1 qc-cena nas 15, até 6 cargas do mapa por cena pelos portões que abrem a página com rede; nada renderizado) | 03:23:30 | 03:24:19 | qc-cena |
| s01 (render da 5ª leva: o voo de abertura com relevo) | 03:24:30 | 03:30:06 | 2160p |
| s05 (render da 5ª leva: a aproximação do inset) | 03:30:06 | 03:32:23 | 2160p |
| s07 (render da 5ª leva: a aproximação do fim) | 03:32:24 | 03:36:49 | 2160p |
| s08 (render da 5ª leva, 1º: a câmera que nunca para) | 03:36:50 | 03:41:21 | 2160p |
| s12 (render da 5ª leva: a deriva) | 03:41:21 | 03:45:47 | 2160p |
| s15 (render da 5ª leva: os nomes, a miniatura de Willow e a câmera) | 03:45:47 | 03:49:08 | 2160p |
| s24 (render da 5ª leva: a deriva) | 03:49:08 | 03:50:29 | 2160p |
| s33 (render da 5ª leva: as duas aproximações) | 03:50:29 | 03:53:20 | 2160p |
| s39 (render da 5ª leva: o push-in) | 03:53:20 | 03:55:25 | 2160p |
| s42 (render da 5ª leva: a aproximação do p2) | 03:55:26 | 04:00:22 | 2160p |
| s44 (render da 5ª leva: as rampas e o V3b) | 04:00:22 | 04:08:22 | 2160p |
| s48 (render da 5ª leva: a deriva) | 04:08:22 | 04:10:53 | 2160p |
| s50 (render da 5ª leva: a aproximação de 0 a 20,5) | 04:10:53 | 04:15:31 | 2160p |
| s57 (render da 5ª leva: a aproximação do inset) | 04:15:31 | 04:17:34 | 2160p |
| s59 (render da 5ª leva: o b1 andando) | 04:17:34 | 04:19:06 | 2160p |
| s08 (5ª leva: 2º qc-cena, só a s08, depois de a medida mostrar o fim ainda parado; até 6 cargas; nada renderizado) | 04:21:51 | 04:21:56 | qc-cena |
| s08 (render da 5ª leva, 2º: a aproximação do fim mais forte) | 04:22:07 | 04:26:38 | 2160p |
| s08 (5ª leva: 3º qc-cena, só a s08, depois de o cabeçalho ganhar os números novos; até 6 cargas; nada renderizado) | 04:27:53 | 04:27:58 | qc-cena |
| s08 (render da 5ª leva, 3º: o mesmo código do 2º, com o cabeçalho certo; o carimbo é o sha1 do HTML) | 04:27:58 | 04:32:29 | 2160p |
| s01, s05, s07, s08, s12, s15, s24, s33, s39, s42, s44, s48, s50, s57 e s59 (portões da revisão, rodada 8: o qc-cena pulou as 21 cenas da leva pelo carimbo válido do HTML atual, nenhuma carga; o `qc-rodape-contraste` e o `qc-video-avanca` abriram as 15 de mapa, uma por vez, às 04:35:46–04:36:17 e 04:38:19–04:40:08; uma sonda sem custo, com todo pedido à MapTiler abortado e contado, `_tmp/art/sonda-r8-sem-chave.mjs`, 04:40:55–04:41:22, mostrou que, abertas como os portões abrem, sem a chave, as 15 param no erro "precisa da chave MAPTILER_KEY" antes de criar o mapa: 0 pedidos à MapTiler; nada renderizado) | 04:35:46 | 04:41:22 | qc-rodape-contraste, qc-video-avanca e sonda: 0 cargas |
| s03 (03/10, 5b, a chave nos portões: sonda `_tmp/art/sonda-5b-com-chave.mjs --sem-rede-maptiler` com a pré-carga `ferramentas/chaves-nos-portoes.mjs`, todo pedido à MapTiler abortado e contado: 96 pela porta do newContext e 32 pela do newPage, 0 respostas; e a mesma sonda sem a chave no arquivo da máquina, 3 vezes entre 14:35:45 e 14:36:18: 0 pedidos; nada renderizado) | 14:34:54 | 14:36:18 | sondas: 0 cargas |
| s03 (03/10, 5b: a sonda com rede, porta do newContext, `__ready`, `__prepararCaptura` e `__aguardarMapa` em 0, 4,017 e 7,984 s; 138 pedidos, 138 respostas 200; nada renderizado) | 14:35:25 | 14:35:28 | sonda: 1 carga |
| s03 (03/10, 5b: a mesma sonda, porta do newPage, com a MapTiler abortada: 32 pedidos, 0 respostas) | 14:35:29 | 14:35:30 | sonda: 0 cargas |
| s03 (03/10, 5b: `qc-cena --forcar` com a pré-carga pelo NODE_OPTIONS, `qc-tamanho`: 49 pedidos, 33 respostas; nada renderizado) | 14:36:26 | 14:36:28 | qc-cena: 1 carga |
| s03 (03/10, 5b: o mesmo qc-cena, `qc-contrato`: 33 pedidos, 20 respostas) | 14:36:29 | 14:36:29 | qc-cena: 1 carga |
| s03 (03/10, 5b: o mesmo qc-cena, `check-overlap`: 33 pedidos, 33 respostas) | 14:36:29 | 14:36:30 | qc-cena: 1 carga |
| s03 (03/10, 5b: o mesmo qc-cena, `qc-carga` no lote: 93 pedidos, 81 respostas) | 14:36:29 | 14:36:31 | qc-cena: 1 carga |
| s03 (03/10, 5b: o mesmo qc-cena, `qc-fora-do-quadro`: 60 pedidos, 44 respostas) | 14:36:31 | 14:36:32 | qc-cena: 1 carga |
| s03 (03/10, 5b: o mesmo qc-cena, `qc-credito-fantasma`: 33 pedidos, 31 respostas) | 14:36:32 | 14:36:32 | qc-cena: 1 carga |
| s03 (03/10, 5b: o mesmo qc-cena, `qc-carga` re-medido sozinho, porque reprovou no lote: 93 pedidos, 93 respostas) | 14:36:33 | 14:36:35 | qc-cena: 1 carga |
| s03 (03/10, 5b: `qc-carga` avulso com a pré-carga, para o detalhe da reprovação: 93 pedidos, 88 respostas; e o mesmo portão sem a pré-carga, às 14:37:0x, para comparar: 0 pedidos) | 14:36:57 | 14:36:59 | qc-carga: 1 carga |
| s03 (03/10, o cético da 5b: `shot.mjs out/juneau/graphics/s03.html 6` com a pré-carga `ferramentas/chaves-nos-portoes.mjs` pelo NODE_OPTIONS, comparado com o quadro do render em 6 s; 121 pedidos, 121 respostas, contados pela pré-carga no `_tmp/maptiler-portoes.jsonl`; nada renderizado) | 14:46:25 | 14:46:39 | shot: 1 carga |
| s03 (03/10, o cético da 5b: o mesmo shot sem a pré-carga, como base: a cena parou no erro "precisa da chave MAPTILER_KEY" antes de criar o mapa, 0 pedidos) | 14:47:29 | 14:47:48 | shot: 0 cargas |
| s03 (03/10, o cético da 5b: `qc-rodape-contraste` com a pré-carga, e a sonda `_tmp/art/cetico-raf-morto.mjs` que abre a cena como ele, com o rAF morto: o mapa é criado com a chave, mas nunca pinta e nunca pede tile; 0 pedidos, contados pela sonda e pela pré-carga) | 14:48:31 | 14:49:04 | qc-rodape-contraste e sonda: 0 cargas |
| s03 (03/10, o conserto do cético da 5b, provas sem custo com a pré-carga nova `ferramentas/chaves-nos-portoes.mjs`: o `shot` da s03 sem o leitor de perfis da pré-v1, sem a chave no arquivo da máquina e numa cópia fora da pasta do canal (duas vezes), parados antes de criar o mapa; o `shot` da s02 com o `addInitScript` falhando, o iframe e a s02 com e sem a pré-carga, cenas sem mapa; e o `qc-rodape-contraste`, o `_audit-til` e a sonda `_tmp/art/cetico-raf-morto.mjs` na s03 com a chave, mas com o rAF trocado: o mapa não pede tile; 0 pedidos, contados pela pré-carga no `_tmp/maptiler-portoes.jsonl`; nada renderizado) | 15:10:01 | 15:11:56 | shot, qc-rodape-contraste, _audit-til e sondas: 0 cargas |
| s03 (03/10, conserto do cético: a sonda `_tmp/art/sonda-5b-com-chave.mjs` com rede, porta do newContext, `__ready`, `__prepararCaptura` e `__aguardarMapa` em 0, 4,017 e 7,984 s; 138 pedidos, 138 respostas 200; nada renderizado) | 15:12:09 | 15:12:11 | sonda: 1 carga |
| s03 (03/10, conserto do cético: a mesma sonda, porta do newPage, com a MapTiler abortada: 32 pedidos, 0 respostas) | 15:12:11 | 15:12:13 | sonda: 0 cargas |
| s03 (03/10, conserto do cético: `qc-cena --forcar` com a pré-carga só pelo `--import` do pai, `qc-tamanho`: 49 pedidos, 33 respostas; o `_audit-til` da mesma rodada saiu NÃO MEDIDO, 0 pedidos; nada renderizado) | 15:12:21 | 15:12:23 | qc-cena: 1 carga |
| s03 (03/10, conserto do cético: o mesmo qc-cena, `qc-contrato`: 33 pedidos, 30 respostas) | 15:12:24 | 15:12:24 | qc-cena: 1 carga |
| s03 (03/10, conserto do cético: o mesmo qc-cena, `check-overlap`: 33 pedidos, 33 respostas) | 15:12:24 | 15:12:25 | qc-cena: 1 carga |
| s03 (03/10, conserto do cético: o mesmo qc-cena, `qc-carga` no lote: 93 pedidos, 93 respostas) | 15:12:24 | 15:12:26 | qc-cena: 1 carga |
| s03 (03/10, conserto do cético: o mesmo qc-cena, `qc-credito-fantasma`: 33 pedidos, 19 respostas) | 15:12:26 | 15:12:27 | qc-cena: 1 carga |
| s03 (03/10, conserto do cético: o mesmo qc-cena, `qc-fora-do-quadro`: 63 pedidos, 61 respostas) | 15:12:26 | 15:12:27 | qc-cena: 1 carga |
| s03 (03/10, conserto do cético: o mesmo qc-cena, `qc-carga` re-medido sozinho, porque reprovou no lote: 93 pedidos, 93 respostas) | 15:12:28 | 15:12:30 | qc-cena: 1 carga |
| s03 (03/10, conserto do cético: as provas sem custo repetidas com a versão final da pré-carga, `qc-rodape-contraste`, `_audit-til`, `shot` sem a chave, iframe e a propagação aos filhos; 0 pedidos) | 15:13:22 | 15:13:45 | 0 cargas |
| s03 (03/10, a reconferência do conserto do cético: `shot.mjs out/juneau/graphics/s03.html 6` com a pré-carga `ferramentas/chaves-nos-portoes.mjs` pelo NODE_OPTIONS, sob o vigia `_tmp/art/cetico-vigia.mjs`, comparado com o quadro do render em 6 s; 121 pedidos, 121 respostas, contados pela pré-carga no `_tmp/maptiler-portoes.jsonl`; nada renderizado) | 15:25:56 | 15:26:10 | shot: 1 carga |
| s03, s21 e s02 (03/10, a reconferência, provas sem custo: `qc-rodape-contraste` e `_audit-til` com a chave e o rAF trocado; o `shot` da s03 sem a chave no arquivo da máquina, sem o leitor de perfis, na reserva sem registerHooks e em três cópias fora da pasta do canal; o `qc-cena` numa cópia fora do canal; o `shot` e o `_audit-til` da s02 com o `addInitScript` falhando; o iframe e o pop-up com a s02; a s02 com e sem a pré-carga; 0 pedidos, contados pela pré-carga; nada renderizado) | 15:20:22 | 15:27:30 | qc-rodape-contraste, _audit-til, shot, qc-cena e sondas: 0 cargas |
| s03 (03/10, a reconferência: o `shot` da s03 com a pré-carga e uma chave recusada simulada, toda requisição à MapTiler interceptada AQUI e respondida com 401 pela sonda `_tmp/art/recheck/tiles-recusados*.mjs`, três vezes; o `_tmp/maptiler-portoes.jsonl` registra 48, 44 e 44 "pedidos", mas nenhum saiu da máquina; e o `_audit-til` com caminho absoluto, rAF trocado, 0 pedidos; nada renderizado) | 15:28:46 | 15:31:00 | shot e _audit-til: 0 cargas |
| s01, s07, s08, s15, s42 e s57 (03/10, 5ª leva B, mapista: `qc-cena` nas 6, sem a pré-carga das chaves; as cenas de mapa abrem sem a chave e param antes de criar o mapa, como na rodada 8: 0 pedidos esperados, não contados) | 15:56:19 | 15:56:41 | qc-cena: 0 cargas (as 6 passaram; portões de mapa NÃO MEDIDO na página parada) |
| s42 (03/10, 5b: render 4K que a guarda nova da cena barrou antes do 1º quadro, "terrHaines sai do território"; o mapa chegou a abrir com a chave; pedidos não contados) | 15:57:05 | 15:57:07 | render: até 1 carga, nada gravado |
| s42 (03/10, 5b: 4 rodadas da sonda sem custo `_tmp/art/rev5b/diag-nomes.mjs`, chave falsa e todo pedido à MapTiler abortado: 16 por rodada, 0 respostas) | 15:57:55 | 16:00:40 | sondas: 0 cargas |
| s42 (03/10, 5b: render 4K, carimbo f8d2001e… 2160p) | 16:01:15 | 16:06:20 | render: 1 carga |
| s15 (03/10, 5b: render 4K, carimbo 0ba9a857… 2160p) | 16:06:55 | 16:10:21 | render: 1 carga |
| s57 (03/10, 5b: render 4K, carimbo d299fe43… 2160p) | 16:10:21 | 16:12:24 | render: 1 carga |
| s01 (03/10, 5b: render 4K, relevo terrain-rgb-v2, carimbo bd0315b1… 2160p) | 16:12:55 | 16:18:52 | render: 1 carga |
| s07 (03/10, 5b: render 4K, carimbo 5aa6dbb5… 2160p) | 16:18:53 | 16:24:06 | render: 1 carga |
| s08 (03/10, 5b: render 4K, carimbo 09b55a8d… 2160p) | 16:24:06 | 16:28:58 | render: 1 carga |
| s42 (03/10, 5b: `qc-cena` na s42 nova; as outras 5 puladas pelo carimbo válido; sem a chave, 0 pedidos esperados) | 16:29:30 | 16:29:35 | qc-cena: 0 cargas |
| s01, s03, s05, s07, s08, s12, s15, s21, s24, s33, s39, s42, s44, s48, s50, s57, s59 e s18 (03/10, rodada portoes-5b-r1: `qc-cena --conc=3 --forcar` nas 18 com a pré-carga `ferramentas/chaves-nos-portoes.mjs` pelo NODE_OPTIONS; nas 17 de mapa, `qc-tamanho` 18 cargas (s42 re-medida sozinha), `qc-contrato` 17, `check-overlap` 19 (s07 e s12 re-medidas), `qc-carga` 25 (8 re-medidas), `qc-fora-do-quadro` 17 e `qc-credito-fantasma` 17: 9.994 pedidos, 9.048 respostas; o `_audit-til` saiu NÃO MEDIDO (rAF trocado), 0 pedidos; contados pela pré-carga em `_tmp/maptiler-portoes.jsonl`; log `_tmp/art/portoes-5b-r1.log`; nada renderizado) | 16:32:11 | 16:38:19 | qc-cena: 113 cargas |
| s01 a s59 da mesma lista (03/10, portoes-5b-r1, diagnóstico: `_audit-til` sozinho nas 18 com a pré-carga, rAF trocado; a s05 deu "Target crashed" e o processo parou até o `timeout` de 10 min; 0 pedidos) e s18 (`qc-cena --forcar` sozinha, cena sem mapa, 0 pedidos) | 16:39:15 | 16:49:40 | _audit-til e qc-cena: 0 cargas |
| as 17 de mapa e s18 (03/10, portoes-5b-r1, passo 2: `qc-rodape-contraste` e `qc-video-avanca` uma cena por vez com a pré-carga; o rodapé com o rAF trocado, 0 pedidos, NÃO MEDIDO nas 17, e a s05 e a s57 paradas pelo `timeout` de 5 min; o `qc-video-avanca` com o mapa vivo: 1.742 pedidos, 1.741 respostas; logs em `_tmp/art/portoes-5b-r1-avulsos/`) | 16:49:55 | 17:02:41 | qc-video-avanca: 17 cargas; qc-rodape-contraste: 0 cargas |
| s03, s05, s07, s12, s42, s44, s50 e s59 (03/10, portoes-5b-r1, o detalhe das reprovações: `qc-carga` avulso nas 8, `check-overlap` na s07 e na s12 e `qc-tamanho` na s42, com a pré-carga: 1.487 pedidos, 1.354 respostas; logs em `_tmp/art/portoes-5b-r1-detalhe/`) | 17:03:17 | 17:03:53 | qc-carga, check-overlap e qc-tamanho: 11 cargas |
| as 17 de mapa (03/10, portoes-5b-r1: a sonda sem custo `_tmp/art/sonda-5b-r1-mapa.mjs` com a pré-carga, pelas portas do newContext e do newPage, todo pedido à MapTiler abortado e contado: 1.028 pedidos, 0 respostas; nada saiu da máquina) | 17:04:18 | 17:05:10 | sonda: 0 cargas |
| s07, s12, s42, s50 e s05 (03/10, 5ª leva B, portões volta 1, mapista: a sonda sem custo `_tmp/art/seco-5b.mjs`, 13 rodadas, com uma credencial FALSA e todo pedido à MapTiler respondido AQUI por um PNG cinza gerado na máquina (nada saiu); e 2 rodadas da sonda `_tmp/art/rev5b/diag-nomes.mjs` na s42, chave falsa e pedidos abortados, 16 por rodada, 0 respostas) | 18:13:xx | 18:30:30 | sondas: 0 cargas |
| s05, s07, s12, s42 e s50 (03/10, 5b portões volta 1, mapista: `qc-cena --conc=3` nas 5, sem a pré-carga das chaves; as cenas de mapa param antes de criar o mapa, 0 pedidos esperados, não contados; as 5 passaram; os portões de mapa NÃO MEDIDO na página parada; log `_tmp/art/qc-cena-5b-portoes1-mapista.log`) | 18:30:3x | 18:30:57 | qc-cena: 0 cargas |
| s05 (03/10, 5b portões volta 1, mapista: render 4K com a pré-carga cdp-sem-compressao, carimbo 858b7db0… 2160p) | 18:31:26 | 18:33:45 | render: 1 carga |
| s07 (03/10, 5b portões volta 1, mapista: render 4K, carimbo c610cf3c… 2160p) | 18:33:45 | 18:38:09 | render: 1 carga |
| s12 (03/10, 5b portões volta 1, mapista: render 4K, carimbo fde2c5e1… 2160p) | 18:38:09 | 18:42:36 | render: 1 carga |
| s42 (03/10, 5b portões volta 1, mapista: render 4K, carimbo da5ffb72… 2160p) | 18:42:36 | 18:47:21 | render: 1 carga |
| s50 (03/10, 5b portões volta 1, mapista: render 4K, carimbo 70ffe905… 2160p) | 18:47:21 | 18:51:59 | render: 1 carga |
| s01, s03, s05, s07, s08, s12, s15, s21, s24, s33, s39, s42, s44, s48, s50, s57 e s59 (03/10, rodada portoes-5b-r2: `qc-cena --conc=3 --forcar` nas 17 de mapa, com a pré-carga `ferramentas/chaves-nos-portoes.mjs` pelo NODE_OPTIONS; `qc-tamanho` 17 cargas, `qc-contrato` 17, `check-overlap` 17, `qc-carga` 25 (as 8 reprovadas re-medidas sozinhas), `qc-fora-do-quadro` 17 e `qc-credito-fantasma` 17: 9.773 pedidos, 8.922 respostas; o `_audit-til` saiu NÃO MEDIDO (rAF trocado; o lote morreu no teto depois da s03), 0 pedidos; contados pela pré-carga em `_tmp/maptiler-portoes.jsonl`; log `_tmp/art/portoes-5b-r2.log`; nada renderizado) | 18:54:13 | 19:00:05 | qc-cena: 110 cargas |
| as mesmas 17 (03/10, portoes-5b-r2, passo 2: `qc-rodape-contraste` e `qc-video-avanca` uma cena por vez com a pré-carga; o rodapé com o rAF trocado, 0 pedidos, NÃO MEDIDO nas 17, e a s05 e a s57 paradas pelo `timeout` de 5 min; o `qc-video-avanca` com o mapa vivo: 1.739 pedidos, 1.739 respostas; logs em `_tmp/art/portoes-5b-r2-avulsos/`) | 19:00:20 | 19:13:12 | qc-video-avanca: 17 cargas; qc-rodape-contraste: 0 cargas |
| s03, s05, s07, s12, s42, s44, s50 e s59 (03/10, portoes-5b-r2, o detalhe das reprovações: `qc-carga` avulso nas 8, com a pré-carga: 1.242 pedidos, 1.115 respostas; logs em `_tmp/art/portoes-5b-r2-detalhe/`) | 19:13:37 | 19:14:04 | qc-carga: 8 cargas |
| as mesmas 17 (03/10, portoes-5b-r2, sondas sem custo com a pré-carga: `_tmp/art/sonda-5b-r2-mapa.mjs`, portas do newContext e do newPage, todo pedido à MapTiler abortado, 1.028 pedidos, 0 respostas; e `_tmp/art/sonda-5b-r2-relogio.mjs`, todo pedido à MapTiler respondido AQUI com um PNG cinza gerado na máquina (o método do `seco-5b.mjs`), 1.121 pedidos que o jsonl conta como "respostas", mas nenhum saiu da máquina; nada renderizado) | 19:14:36 | 19:16:51 | sondas: 0 cargas |
| s07 (03/10, 5b portões volta 2, mapista: a sonda sem custo `_tmp/art/seco-5b.mjs`, 1 rodada de 12,2 a 14,8 s, credencial FALSA e todo pedido à MapTiler respondido AQUI por um PNG cinza gerado na máquina, 150 pedidos, nada saiu; depois `qc-cena`, `qc-carga`, `qc-hex` e `qc-src-existe` na s07 sem a pré-carga das chaves: o mapa para antes de nascer, 0 pedidos esperados, não contados; log `_tmp/art/qc-cena-5b-portoes2-mapista.log`) | 19:5x | 20:01:44 | sonda e portões: 0 cargas |
| s07 (03/10, 5b portões volta 2, mapista: render 4K com a pré-carga cdp-sem-compressao, carimbo e9570625… 2160p; log `_tmp/art/render-s07-5b-portoes2.log`) | 20:01:48 | 20:06:12 | render: 1 carga |
| s01, s03, s05, s07, s08, s12, s15, s21, s24, s33, s39, s42, s44, s48, s50, s57 e s59 (03/10, rodada portoes-5b-r3: `qc-cena --conc=3 --forcar` nas 17 de mapa, com a pré-carga `ferramentas/chaves-nos-portoes.mjs` pelo NODE_OPTIONS; `qc-tamanho` 17 cargas, `qc-contrato` 17, `check-overlap` 17, `qc-carga` 25 (as 8 reprovadas re-medidas sozinhas), `qc-fora-do-quadro` 17 e `qc-credito-fantasma` 17: 9.573 pedidos, 8.566 respostas; o `_audit-til` saiu NÃO MEDIDO (rAF trocado; o lote só deixou linha da s01 e da s03), 0 pedidos; contados pela pré-carga em `_tmp/maptiler-portoes.jsonl`; log `_tmp/art/portoes-5b-r3.log`; nada renderizado) | 20:07:49 | 20:13:40 | qc-cena: 110 cargas |
| as mesmas 17 (03/10, portoes-5b-r3, passo 2: `qc-rodape-contraste` e `qc-video-avanca` uma cena por vez com a pré-carga; o rodapé com o rAF trocado, 0 pedidos, NÃO MEDIDO nas 17, e a s05 e a s57 paradas pelo `timeout` de 5 min; o `qc-video-avanca` com o mapa vivo: 1.748 pedidos, 1.743 respostas; logs em `_tmp/art/portoes-5b-r3-avulsos/`) | 20:14:10 | 20:26:55 | qc-video-avanca: 17 cargas; qc-rodape-contraste: 0 cargas |
| s03, s05, s07, s12, s42, s44, s50 e s59 (03/10, portoes-5b-r3, o detalhe das reprovações: `qc-carga` avulso nas 8, com a pré-carga: 1.256 pedidos, 1.140 respostas; logs em `_tmp/art/portoes-5b-r3-detalhe/`) | 20:27:10 | 20:27:38 | qc-carga: 8 cargas |
| as mesmas 17 (03/10, portoes-5b-r3, sondas sem custo com a pré-carga: `_tmp/art/sonda-5b-r3-mapa.mjs`, portas do newContext e do newPage, todo pedido à MapTiler abortado, 1.028 pedidos, 0 respostas; e `_tmp/art/sonda-5b-r3-relogio.mjs`, todo pedido à MapTiler respondido AQUI com um PNG cinza gerado na máquina (o método do `seco-5b.mjs`), 1.099 pedidos que o jsonl conta como "respostas", mas nenhum saiu da máquina; nada renderizado) | 20:27:48 | 20:28:55 | sondas: 0 cargas |
| s03 (04/10, portao-mapa e a pré-carga sem falha aberta: as provas sem custo. O `shot` da s03 com as sondas do cético `recheck/tiles-recusados*.mjs` (401 respondido aqui, com 0, 300 e 1500 ms) e com `_tmp/art/portao-mapa/p-maptiler.mjs` (cinza, 503 uma vez, abortar uma vez, abortar, offline, erro tardio, `__errosMapa` tardio), o `qc-contrato` com o tile segurado e a sonda `p-sai-sem-fechar.mjs`: todo pedido respondido ou segurado AQUI, nada saiu da máquina; e o `qc-rodape-contraste`, o `_audit-til`, o shot sem a chave e sem o leitor de perfis, com 0 pedidos) | 15:16:28 | 15:20:55 | sondas: 0 cargas |
| s03 (04/10, a reserva sem `registerHooks` do cético, `recheck/sem-registerhooks.mjs`, com a chave: o `shot` em 6 s; 121 pedidos, 121 respostas 2xx) | 15:20:58 | 15:21:10 | shot: 1 carga |
| s03 e s21 (04/10, `ferramentas/portao-mapa.mjs rodape`, passo 0,5 s: 138 e 28 pedidos, todos 2xx) | 15:28:33 | 15:28:45 | portao-mapa: 2 cargas |
| s03 e s21 (04/10, `portao-mapa til`, 1ª versão, que abortava o vídeo da cena de mapa: a s03 parou no erro do clipe aéreo, NÃO MEDIDO, 66 pedidos e 51 respostas; a s21, 28 e 28) | 15:28:57 | 15:28:58 | portao-mapa: 2 cargas |
| s03 e s21 (04/10, `portao-mapa til`, com o vídeo carregado na cena de mapa: 138 e 28 pedidos, todos 2xx) | 15:29:35 | 15:29:39 | portao-mapa: 2 cargas |
| cópia `_tmp/portao-mapa-prova/s03-credito-claro.html` (04/10, `portao-mapa rodape`, a câmera parada sobre o campo de gelo, z11: 45 pedidos, todos 2xx) | 15:29:53 | 15:29:54 | portao-mapa: 1 carga |
| a mesma cópia (04/10, o `qc-rodape-contraste` do molde com e sem a pré-carga, rAF trocado: 0 pedidos esperados, não contados, porque a cópia fica fora de `graphics/` e a pré-carga não grava linha dela; e o `shot` em 4,5 s, com o mapa: pedidos não contados, pela mesma razão, e a medida da mesma câmera parada pediu 45) | 15:30:05 | 15:30:28 | shot: 1 carga |
| cópia `_tmp/portao-mapa-prova/s03-til-agudo.html` (04/10, `portao-mapa til`: 138 pedidos, todos 2xx; e o `_audit-til` do molde na cópia, rAF trocado, 0 pedidos esperados, não contados) | 15:30:40 | 15:30:53 | portao-mapa: 1 carga |
| s03 e s21 (04/10, `qc-cena --conc=3 --forcar` com a pré-carga nova, rodada `qc-cena.mjs@20261004153118-39348`: 586 pedidos, 494 respostas, todas 2xx; o `qc-carga` da s03 e o `qc-credito-fantasma` da s21 re-medidos sozinhos pelo desempate; o `_audit-til` NÃO MEDIDO, 0 pedidos; contados em `_tmp/maptiler-portoes.jsonl`) | 15:31:19 | 15:31:33 | qc-cena: 14 cargas |
| s21 (04/10, `portao-mapa rodape` sem a pré-carga: a cena parou no erro da chave, 0 pedidos) | 15:33:5x | 15:34:00 | portao-mapa: 0 cargas |
| as 39 cenas sem mapa e a cópia `_tmp/cetico-pm/s03-sem-vendor.html` (04/10, cético do portao-mapa: `qc-rodape-contraste` e `_audit-til` do molde contra `portao-mapa rodape` e `til`, e a cópia da s03 sem `_vendor/maplibre-gl.js` e `perfil-mapa.js`, que não cria o mapa: 0 pedidos, contados nas linhas de `_tmp/portao-mapa.jsonl`) | 15:44:3x | 15:50:11 | portao-mapa: 0 cargas |
| cópia `_tmp/portao-mapa-prova/s03-credito-claro.html` (04/10, cético: `portao-mapa rodape` de novo, com a pré-carga e a `chave-na-copia.mjs`: 45 pedidos, todos 2xx) | 15:51:21 | 15:51:22 | portao-mapa: 1 carga |
| cópia `_tmp/portao-mapa-prova/s03-til-agudo.html` (04/10, cético: `portao-mapa til` de novo: 138 pedidos, todos 2xx) | 15:51:44 | 15:51:46 | portao-mapa: 1 carga |
| s03 e a cópia `_tmp/cetico-pm/s03-sem-vendor.html` (04/10, os consertos do 2º cético do portao-mapa, provas sem custo: `portao-mapa` na cópia sem `_vendor`, que não cria o mapa, com e sem a pré-carga, 0 pedidos; as sondas `_tmp/art/portao-mapa/cetico2/sonda-preload.mjs` e `sonda-cjs.cjs` na s03 (reload, reload pela página, rAF trocado depois, setContent, foto com tile em curso e o controle, contexto persistente, connectOverCDP, connect e o require() CommonJS), com todo pedido à MapTiler respondido ou segurado AQUI por um PNG cinza gerado na máquina, e nos três últimos sem a chave, 0 pedidos; e o `portao-mapa rodape` da s03 com todo tile segurado por `p-maptiler.mjs` (P_MODO=segurar), 48 pedidos que nunca saíram da máquina) | 16:18:39 | 16:24:3x | sondas: 0 cargas |
| s03 e s21 (04/10, o `portao-mapa` consertado depois do 2º cético, versão 2 da linha: `rodape --json` e `til`, com `--so=s03,s21`: 138 e 28 pedidos em cada portão, todos 2xx; contados em `_tmp/portao-mapa.jsonl`) | 16:33:26 | 16:33:48 | portao-mapa: 4 cargas |
| cópias `_tmp/portao-mapa-prova/s03-credito-claro.html` e `s03-til-agudo.html` (04/10, o mesmo `portao-mapa`, com a `chave-na-copia.mjs`: 45 e 138 pedidos, todos 2xx) | 16:33:57 | 16:34:12 | portao-mapa: 2 cargas |
| s03 (04/10, 2º cético: o `shot` em 6 s, para ver que a regra nova da foto com tile em curso não acusa à toa, 121 pedidos, 121 2xx; e o `qc-video-avanca`, que o `conferir` passou a cobrar na cena de mapa com vídeo, 93 pedidos, 93 2xx; contados em `_tmp/maptiler-portoes.jsonl`) | 16:34:22 | 16:34:46 | shot: 1 carga; qc-video-avanca: 1 carga |
| s03 e s21 (04/10, `qc-cena --conc=3 --forcar` com a pré-carga consertada, rodada `qc-cena.mjs@20261004163523-40356`: 558 pedidos, 483 respostas, todas 2xx; o `qc-carga` da s03 re-medido pelo desempate; o `_audit-til` NÃO MEDIDO, 0 pedidos; contados em `_tmp/maptiler-portoes.jsonl`) | 16:35:25 | 16:35:37 | qc-cena: 13 cargas |
| s03, a cópia `_tmp/cetico-pm/s03-sem-vendor.html` e as cópias `_tmp/portao-mapa-prova/c3-s03-controle.html` e `c3-s03-pendente.html` (04/10, 3º cético do portao-mapa e da pré-carga, provas sem custo: `portao-mapa` na cópia sem `_vendor`, com e sem a pré-carga, 0 pedidos; `portao-mapa rodape` e `til` nas cópias c3 com a `chave-na-copia.mjs` e todo pedido à MapTiler respondido (PNG cinza) ou segurado AQUI pelo gancho de prova do cético (`gancho-c3.mjs`, no scratchpad, que contou 48, 49, 138 e 34 pedidos roteados, iguais aos que o portão contou) ou pelo `p-maptiler.mjs` (P_MODO=segurar, 48); as sondas `cetico2/sonda-preload.mjs` (9 modos) e `sonda-cjs.cjs` na s03, com todo pedido respondido ou segurado AQUI, 257 pedidos no `_tmp/maptiler-portoes.jsonl`, e nos modos persistente, cdp e connect sem a chave, 0 pedidos; nada renderizado) | 16:47:29 | 16:56:5x | sondas e portao-mapa: 0 cargas |
| cópias `_tmp/portao-mapa-prova/c3-s03-controle.html` e `c3-s03-pendente.html` (04/10, 3º cético: `portao-mapa rodape --json` nas duas e numa cena sintética do scratchpad, com a `chave-na-copia.mjs` e o gancho de prova `gancho-c3.mjs`: 172 pedidos, todos respondidos (PNG cinza) ou segurados AQUI, nenhum saiu da máquina) | 16:59:57 | 17:00:18 | portao-mapa: 0 cargas |
| s03 e s21 (04/10, 3º cético: o `portao-mapa` de novo com as duas ferramentas na versão final (a pré-carga mudou às 16:35:15, depois das medidas das 16:33), `rodape` e `til` com `--so=s03,s21`: 138 e 28 pedidos em cada portão, todos 2xx; e o `qc-video-avanca` na s03 com a pré-carga, 93 pedidos, 93 2xx (o portão disse "sem <video> na cena — nada a medir"); contados em `_tmp/portao-mapa.jsonl` e `_tmp/maptiler-portoes.jsonl`) | 17:01:47 | 17:02:18 | portao-mapa: 4 cargas; qc-video-avanca: 1 carga |
| s01 (04/10, 3º cético: o `qc-video-avanca` com a pré-carga final, na cena de mapa que tem um `<video>` de verdade no documento: 289 pedidos, 289 2xx; contados em `_tmp/maptiler-portoes.jsonl`) | 17:03:07 | 17:03:14 | qc-video-avanca: 1 carga |
| s03 e s21 (04/10, conserto do 3º cético, 1ª rodada, com a pré-carga já gravando as pré-cargas do processo e o veredito do qc-video-avanca, mas ainda sem contar de onde vinha cada tile; superada pela 2ª, às 17:28: `qc-cena --conc=3 --forcar`, rodada `qc-cena.mjs@20261004172218-35280`, 556 pedidos, 470 respostas, todas 2xx; o `qc-carga` da s03 re-medido pelo desempate; o `_audit-til` NÃO MEDIDO, 0 pedidos; contados em `_tmp/maptiler-portoes.jsonl`) | 17:22:18 | 17:22:32 | qc-cena: 13 cargas |
| s03 e s21 (04/10, a mesma 1ª rodada: `portao-mapa rodape --json` e `til`, versão 3 da linha, `--so=s03,s21`: 138 e 28 pedidos em cada portão, todos 2xx) | 17:22:43 | 17:23:06 | portao-mapa: 4 cargas |
| s03 e s01 (04/10, a mesma 1ª rodada: `qc-video-avanca`, uma cena por processo, com a pré-carga: 93 pedidos e 93 2xx na s03, que disse "sem <video> na cena — nada a medir"; 297 pedidos e 294 2xx na s01, "✓") | 17:23:14 | 17:23:29 | qc-video-avanca: 2 cargas |
| cópia `_tmp/portao-mapa-prova/c3-s03-controle.html` (04/10, conserto do 3º cético: `portao-mapa rodape --json` com a `chave-na-copia.mjs` e o gancho do cético `gancho-c3.mjs`, que respondeu AQUI os 138 pedidos com um PNG cinza; a linha nova diz as duas pré-cargas de prova e 138 tiles sem o endereço de um servidor; nada saiu da máquina) | 17:27:53 | 17:27:53 | portao-mapa: 0 cargas |
| s03 e s21 (04/10, conserto do 3º cético, 2ª rodada, com as duas ferramentas na versão final, sha256 `fa0df122…` e `ba431db0…`: `qc-cena --conc=3 --forcar`, rodada `qc-cena.mjs@20261004172803-41400`, 582 pedidos, 496 respostas, todas 2xx e todas com o endereço de um servidor; o `qc-carga` da s03 e o `qc-credito-fantasma` da s21 re-medidos pelo desempate; o `_audit-til` NÃO MEDIDO, 0 pedidos; contados em `_tmp/maptiler-portoes.jsonl`) | 17:28:03 | 17:28:18 | qc-cena: 14 cargas |
| s03 e s21 (04/10, a mesma 2ª rodada: `portao-mapa rodape --json` e `til`, `--so=s03,s21`: 138 e 28 pedidos em cada portão, todos 2xx, de servidor) | 17:28:19 | 17:28:41 | portao-mapa: 4 cargas |
| s03 e s01 (04/10, a mesma 2ª rodada: `qc-video-avanca`, uma cena por processo: 93 pedidos e 93 2xx na s03, "sem <video> na cena — nada a medir"; 296 pedidos e 296 2xx na s01, "✓"; todos de servidor) | 17:28:42 | 17:28:56 | qc-video-avanca: 2 cargas |
| as 39 cenas sem mapa (04/10, conserto do 3º cético: `portao-mapa rodape --json`, para comparar a regra nova do "no ar" com o molde e com a versão 2; 0 pedidos) | 17:33:55 | 17:38:36 | portao-mapa: 0 cargas |
| s03 (04/10, conserto do 3º cético, regressões sem custo: as sondas `cetico2/sonda-preload.mjs` (9 modos) e `sonda-cjs.cjs`, que respondem ou seguram AQUI todo pedido à MapTiler por um `ctx.route` delas: 257 pedidos, 241 respostas, nenhuma com o endereço de um servidor; nos modos persistente, cdp e connect, sem a chave, 0 pedidos) | 17:39:12 | 17:40:10 | sondas: 0 cargas |
| cópia `_tmp/portao-mapa-prova/c3-s03-pendente.html` (04/10, conserto do 3º cético: `portao-mapa rodape` com a `chave-na-copia.mjs` e o `gancho-c3.mjs`, 34 pedidos respondidos (33) ou segurados (1) AQUI; a regra dos 3 s parou a cena em 2,81 s, NÃO MEDIDO; nada saiu da máquina) | 17:40:28 | 17:40:35 | portao-mapa: 0 cargas |
| cópias `_tmp/portao-mapa-prova/c3-s03-controle.html` e `c3-s03-pendente.html`, a cópia `_tmp/cetico-pm/s03-sem-vendor.html` e cenas sintéticas sem mapa no rascunho (04/10, 4º olhar, a reconferência do conserto do 3º cético, provas sem custo: `portao-mapa rodape` e `til` e `qc-video-avanca` nas cópias c3 com a `chave-na-copia.mjs` e o gancho `gancho-c3.mjs`, que respondeu (PNG cinza) ou segurou AQUI 403 pedidos (138 + 138 + 93 + 34), e mais 172 no lote misto `--json`; `P_MODO=segurar` do `p-maptiler.mjs` no til e no rodapé, 48 + 48 pedidos segurados, 0 respostas; a cópia sem `_vendor`, com e sem a pré-carga, 0 pedidos; o rodapé do molde, da versão 2 (cópia no rascunho) e da versão 3 nas 11 cenas sintéticas, 0 pedidos; nada saiu da máquina, nada renderizado) | 17:57:51 | 18:07:39 | portao-mapa, qc-video-avanca e molde: 0 cargas |
| s15, s42, s50 e s57 (04/10, mapista, 5ª leva C: ensaios a seco `_tmp/art/seco-5b.mjs` e `_tmp/art/rev5c/pip-s15.mjs`, com a credencial falsa e todo pedido à MapTiler respondido AQUI por um PNG cinza gerado na máquina; nada saiu da máquina) | 18:22:xx | 19:10:xx | sondas: 0 cargas |
| s01, s12, s15, s42, s50 e s57 (04/10, mapista, 5ª leva C: `qc-cena --conc=3 --forcar` com a pré-carga `chaves-nos-portoes.mjs`, rodada `qc-cena.mjs@20261004183229-39984`: 4.078 pedidos, 3.793 respostas 2xx; contados em `_tmp/maptiler-portoes.jsonl`) | 18:32:29 | 18:36:39 | qc-cena: 39 cargas |
| s01 (04/10, mapista, 5ª leva C: render 4K com a pré-carga, carimbo d9b6ebce… 2160p) | 18:36:56 | 18:42:28 | render: 1 |
| s12 (04/10, mapista, 5ª leva C: render 4K, carimbo 5a729182… 2160p) | 18:42:34 | 18:47:06 | render: 1 |
| s15 (04/10, mapista, 5ª leva C: render 4K, carimbo 7d428d7a… 2160p) | 18:47:13 | 18:50:39 | render: 1 |
| s42 (04/10, mapista, 5ª leva C: render 4K, carimbo 84dd97a6… 2160p) | 18:50:44 | 18:55:37 | render: 1 |
| s50 (04/10, mapista, 5ª leva C: render 4K, carimbo c041a79a… 2160p) | 18:55:42 | 19:00:27 | render: 1 |
| s57 (04/10, mapista, 5ª leva C: render 4K da 1ª versão do inset, carimbo a8022b93…; superado: a régua ainda via o inset parado na coluna) | 19:00:35 | 19:02:41 | render: 1 |
| s57 (04/10, mapista, 5ª leva C: `qc-cena --forcar` da 2ª versão, rodada `qc-cena.mjs@20261004190331-36584`: 177 pedidos, 114 2xx) | 19:03:31 | 19:06:37 | qc-cena: 6 cargas |
| s57 (04/10, mapista, 5ª leva C: render 4K da 2ª versão, carimbo f69c8f2e…; superado: a faixa de cima do inset ainda media parada de 0 a 3,5 s) | 19:06:44 | 19:08:50 | render: 1 |
| s57 (04/10, mapista, 5ª leva C: `qc-cena --forcar` da versão final, rodada `qc-cena.mjs@20261004190950-37268`: 180 pedidos, 118 2xx) | 19:09:50 | 19:12:55 | qc-cena: 6 cargas |
| s57 (04/10, mapista, 5ª leva C: render 4K da versão final, carimbo cd4a4d50… 2160p) | 19:12:56 | 19:15:05 | render: 1 |
| s01, s03, s05, s07, s08, s12, s15, s21, s24, s33, s39, s42, s44, s48, s50, s57 e s59, mais a s35 e a s60 sem mapa (04/10, rodada portoes-5c, passo 1: `qc-cena --conc=3 --forcar` nas 19, com a pré-carga `ferramentas/chaves-nos-portoes.mjs` pelo `--import`, rodada `qc-cena.mjs@20261004191908-40048`; `qc-tamanho` 17 cargas, `qc-contrato` 17, `check-overlap` 17, `qc-carga` 25 (as 8 reprovadas re-medidas sozinhas pelo desempate), `qc-fora-do-quadro` 17 e `qc-credito-fantasma` 17: 9.907 pedidos, 8.724 respostas 2xx, todas com o endereço de um servidor; o `_audit-til` NÃO MEDIDO (rAF trocado; o lote só deixou linha da s01 e da s03 e morreu no teto), 0 pedidos; contados em `_tmp/maptiler-portoes.jsonl`; log `_tmp/art/portoes-5c.log`; nada renderizado) | 19:19:08 | 19:25:19 | qc-cena: 110 cargas |
| as mesmas 17 de mapa (04/10, portoes-5c, passo 2: `ferramentas/portao-mapa.mjs til` e `rodape --json`, uma cena por processo, com a pré-carga: 5.474 pedidos, 5.467 2xx, todos de servidor (7 cancelados no til da s01); contados em `_tmp/portao-mapa.jsonl` e `_tmp/maptiler-portoes.jsonl`; logs em `_tmp/art/portoes-5c/`) | 19:25:27 | 19:32:41 | portao-mapa: 34 cargas |
| s01 (04/10, portoes-5c, passo 4: `qc-video-avanca` com a pré-carga, "✓": 289 pedidos, 289 2xx, de servidor) | 19:32:45 | 19:32:53 | qc-video-avanca: 1 carga |
| s03, s05, s07, s12, s42, s44, s50 e s59 (04/10, portoes-5c, o detalhe das reprovações: `qc-carga` avulso nas 8, com a pré-carga: 1.273 pedidos, 1.133 2xx, de servidor; logs em `_tmp/art/portoes-5c/`) | 19:32:59 | 19:33:32 | qc-carga: 8 cargas |
| s03 (04/10, portoes-5c: `qc-video-avanca` com a pré-carga, que o `conferir` cobra na cena de mapa com `createElement("video")`; "sem <video> na cena — nada a medir": 93 pedidos, 93 2xx, de servidor) | 19:34:05 | 19:34:13 | qc-video-avanca: 1 carga |
| s35 e s60, sem mapa (04/10, portoes-5c: `qc-rodape-contraste` do molde, `_audit-til` do molde sozinho, `portao-mapa rodape` para comparar e o `probe-elemento` da s60 no crédito, e o `qc-cena --forcar` só das duas, que refez o carimbo com o til medido; 0 pedidos) | 19:32:41 | 19:36:55 | 0 cargas |
| as 17 de mapa (04/10, `portao-mapa` versão 4, o crédito com filhos no rodapé: `rodape --json`, uma cena por processo, com a pré-carga `ferramentas/chaves-nos-portoes.mjs`, para provar que o que ele já media continua igual: 2.720 pedidos, 2.720 2xx, todos de servidor; contados em `_tmp/portao-mapa.jsonl`; logs em `_tmp/art/rodape-filhos/logs/`) | 22:05:27 | 22:10:34 | portao-mapa: 17 cargas |
| s42 (04/10, `portao-mapa` versão 4: a cópia da versão 3 e a versão 4 no mesmo HTML, uma depois da outra, porque a s42 mudou durante a rodada acima: 311 + 311 pedidos, todos 2xx e de servidor; contados em `_tmp/portao-mapa-v3-copia.jsonl` e `_tmp/portao-mapa.jsonl`) | 22:11:51 | 22:12:44 | portao-mapa: 2 cargas |
| s24 e s50 (04/10, `portao-mapa` versão 4 final, uma foto por parte do crédito com filhos: `rodape --json`, uma cena por processo, com a pré-carga: 77 + 92 pedidos, todos 2xx e de servidor) | 22:20:08 | 22:20:43 | portao-mapa: 2 cargas |
| as 39 sem mapa (duas rodadas), s31, s34 e s35 pela cópia da versão 3, as sondas de geometria e de recorte e as cópias plantadas `_tmp/rodape-filhos-prova/s62-*.html` com a versão 4, o molde e a cópia da versão 3 (04/10, `portao-mapa` versão 4; 0 pedidos) | 21:59:42 | 22:21:40 | 0 cargas |
| s34 e s35, sem mapa (04/10, `portao-mapa` versão 4: três vezes a cópia da versão 3 e a versão 4, uma depois da outra, para separar a variação de uma rodada para outra; 0 pedidos) | 22:23:0x | 22:24:59 | 0 cargas |
| s42 e s44 (04/10, mapista, 5ª leva D, as cores de contexto: `qc-cena --conc=3 --forcar` com a pré-carga `chaves-nos-portoes.mjs`, rodada `qc-cena.mjs@20261004221554-34012`: 2.706 pedidos, contados em `_tmp/maptiler-portoes.jsonl`; log `_tmp/art/rev5d/qc-cena-s42-s44.log`) | 22:15:54 | 22:16:35 | qc-cena: 14 cargas |
| s42 e s44 (04/10, mapista, 5ª leva D: `portao-mapa til` e `rodape`, com a pré-carga: 1.478 pedidos, 1.478 2xx) | 22:16:43 | 22:18:17 | portao-mapa: 4 cargas |
| s42 (04/10, mapista, 5ª leva D: render 4K, carimbo 2cc9fa01… 2160p) | 22:18:26 | 22:23:19 | render: 1 |
| s44 (04/10, mapista, 5ª leva D: render 4K com o relevo, carimbo c734965b… 2160p) | 22:23:42 | 22:31:19 | render: 1 |
| s50 (04/10, mapista, 5ª leva D: as sondas sem custo de `_tmp/art/rev5d/diag-s50.mjs`, ~20 aberturas da cena com todo pedido à MapTiler abortado, 16 por abertura, nenhum servido) | 22:05 | 23:16 | 0 cargas servidas |
| s50 (04/10, mapista, 5ª leva D: `qc-cena --forcar` com a pré-carga, rodada `qc-cena.mjs@20261004231813-39120`, 536 pedidos; `portao-mapa til` e `rodape`, 168; `qc-carga` avulso com a pré-carga para o detalhe, 83) | 23:18:13 | 23:19:13 | qc-cena: 7 cargas; portao-mapa: 2; qc-carga: 1 |
| s50 (04/10, mapista, 5ª leva D: render 4K da 1ª versão, carimbo d84eed3e…; superado: a legenda saía cortada pela borda da página na aproximação) | 23:19:26 | 23:24:01 | render: 1 |
| s50 (04/10, mapista, 5ª leva D: `qc-cena --forcar` da versão final, rodada `qc-cena.mjs@20261004232449-37996`, 542 pedidos; `portao-mapa til` e `rodape`, 168) | 23:24:49 | 23:25:31 | qc-cena: 7 cargas; portao-mapa: 2 |
| s50 (04/10, mapista, 5ª leva D: render 4K da versão final, carimbo cf649900… 2160p) | 23:25:44 | 23:30:19 | render: 1 |
| as 56 cenas de `graphics/` (as 55 do XML e a s09, que não está nele), na marca de hoje (o `marca/tokens.css` de 04/10, 20:46), 17 delas de mapa (04/10, rodada portoes-5d, passo 1: `qc-cena --conc=3 --forcar` com a pré-carga `ferramentas/chaves-nos-portoes.mjs` pelo `--import`, rodada `qc-cena.mjs@20261004234737-19552`; nas 17 de mapa, `qc-tamanho` 17 cargas, `qc-contrato` 17, `check-overlap` 17, `qc-carga` 25 (as 8 reprovadas re-medidas sozinhas pelo desempate), `qc-fora-do-quadro` 17 e `qc-credito-fantasma` 17: 10.084 pedidos, 9.064 respostas 2xx, todas com o endereço de um servidor; o `_audit-til` NÃO MEDIDO (rAF trocado; o lote das 56 morreu sem o rodapé), 0 pedidos; contados em `_tmp/maptiler-portoes.jsonl`; log `_tmp/art/portoes-5d.log`; nada renderizado) | 23:47:37 (04/10) | 23:57:58 (04/10) | qc-cena: 110 cargas |
| as mesmas 17 de mapa (portoes-5d, passo 2: `ferramentas/portao-mapa.mjs til` num processo só, `--so=` as 17, com a pré-carga: 2.746 pedidos, 2.746 2xx, todos de servidor (3 cancelados no til da s01); contados em `_tmp/portao-mapa.jsonl` e `_tmp/maptiler-portoes.jsonl`; log `_tmp/art/portoes-5d/pm-til-mapa.log`) | 23:58:18 (04/10) | 00:00:11 (05/10) | portao-mapa: 17 cargas |
| as mesmas 17 (05/10, portoes-5d, passo 2: `portao-mapa rodape --json` num processo só, com a pré-carga: 2.712 pedidos, 2.712 2xx, todos de servidor; log `_tmp/art/portoes-5d/pm-rodape-mapa.log`) | 00:00:11 | 00:04:58 | portao-mapa: 17 cargas |
| s35, s55, s60, s62 e s63, sem mapa (05/10, portoes-5d, passo 2: `portao-mapa rodape --json`, o crédito composto), e as 38 sem mapa do XML (passo 3: `qc-rodape-contraste` do molde, uma por processo; 0 pedidos) | 00:04:58 | 00:07:20 | 0 cargas |
| s01 e s03 (05/10, portoes-5d, passo 4: `qc-video-avanca` com a pré-carga, uma cena por processo: 296 pedidos e 292 2xx na s01, "✓"; 93 e 93 na s03, "sem <video> na cena — nada a medir"; todos de servidor; e a s40 e a s53, sem mapa, 0 pedidos) | 00:07:20 | 00:07:51 | qc-video-avanca: 2 cargas |
| s03, s05, s07, s12, s42, s44, s50 e s59 (05/10, portoes-5d, o detalhe das reprovações: `qc-carga` avulso nas 8, com a pré-carga: 1.236 pedidos, 1.102 2xx, todos de servidor; logs em `_tmp/art/portoes-5d/`) | 00:08:53 | 00:09:22 | qc-carga: 8 cargas |
| sem mapa (05/10, portoes-5d, os complementos: `qc-carga` avulso na s16, s49 e s58; `qc-fora-do-quadro` na s23 (duas vezes, a 2ª com `--json`) e na s32; `portao-mapa rodape` na s11, s29, s58 e s61; e `qc-cena --conc=3 --forcar` só nas 38 sem mapa, para o til do molde; 0 pedidos) | 00:09:22 | 00:12:57 | 0 cargas |
| s50 (05/10, triagem portoes-5d, sondas sem custo: `_tmp/triagem-portoes-5d/estreias-seco.mjs` (a do 5b-v2, para dizer quem estreia) e `_tmp/triagem-portoes-5d/rodape-por-no.mjs caixas` (as caixas dos créditos da foto; 2 aberturas, a 1ª com o rAF morto não montou o mapa e fez 0 pedidos), com a credencial FALSA e todo pedido à MapTiler respondido AQUI por um PNG cinza gerado na máquina: 77 + 77 pedidos, nada saiu; o contraste foi medido no quadro do clipe 4K com o ffmpeg. As 8 sem mapa (s11, s29, s35, s58, s60, s61, s62 e s63) abertas no `rodape-por-no.mjs vivo`, todo pedido externo abortado: 0 pedidos) | 00:23 | 00:28 | 0 cargas servidas |
| as 21 cenas da 5ª leva (15 de mapa: s01, s05, s07, s08, s12, s15, s24, s33, s39, s42, s44, s48, s50, s57, s59) e as 55 do XML (as 17 de mapa no créditos.mjs) (05/10, verificação independente da 5ª leva, só leitura: sondas sem custo em scratchpad (`estreias.mjs`, `creditos.mjs`, cópias da `estreias-seco.mjs` da triagem 5d), com a credencial FALSA e todo pedido à MapTiler respondido AQUI por um PNG cinza gerado na máquina, o resto externo abortado; nada saiu; mais `parados.py` e `parado-recorte.py` sobre os clipes 4K com o ffmpeg) | 02:33 | 02:47 | 0 cargas servidas |
| s42 e s50 (05/10, mapista, 5ª leva E: sondas sem custo `_tmp/art/rev5e/sonda.mjs` e `_tmp/art/rev5d/diag-s50.mjs`, ~12 aberturas da s08, s42 e s50 com a credencial FALSA e todo pedido à MapTiler abortado e contado, 16 a 32 por abertura, nenhum servido; a busca de câmera da s50, `_tmp/art/rev5e/busca-cam.mjs`, é conta pura, sem navegador) | 02:55 | 03:31 | 0 cargas servidas |
| s08, s42 e s44 (05/10, mapista, 5ª leva E: `qc-cena --conc=3 --forcar` com a pré-carga `chaves-nos-portoes.mjs`, rodada `qc-cena.mjs@20261005033250-24984`: 3.298 pedidos, 2.940 2xx, todos de servidor; contados em `_tmp/maptiler-portoes.jsonl`; log `_tmp/art/rev5e/qc-cena-1.log`) | 03:32:51 | 03:33:37 | qc-cena: 20 cargas |
| s08, s42 e s44 (05/10, mapista, 5ª leva E: `portao-mapa til` e `rodape`, com a pré-carga: 2.100 pedidos, 2.100 2xx, de servidor) | 03:33:44 | 03:35:49 | portao-mapa: 6 cargas |
| s50 (05/10, mapista, 5ª leva E: `qc-cena --forcar` com a pré-carga, rodada `qc-cena.mjs@20261005033821-21648`, 642 pedidos, 634 2xx; `portao-mapa til` e `rodape`, 212 pedidos, 212 2xx) | 03:38:22 | 03:38:51 | qc-cena: 7 cargas; portao-mapa: 2 |
| s08 (05/10, mapista, 5ª leva E: render 4K, carimbo f74466c2… 2160p) | 03:39:16 | 03:43:58 | render: 1 |
| s42 (05/10, mapista, 5ª leva E: render 4K, carimbo b73cc840… 2160p) | 03:44:03 | 03:48:59 | render: 1 |
| s44 (05/10, mapista, 5ª leva E: render 4K com o relevo, carimbo 5db19fc8…; superado: o 60° N saía como um fio claro entre a BC e o Yukon) | 03:49:04 | 03:56:47 | render: 1 |
| s50 (05/10, mapista, 5ª leva E: render 4K, carimbo 44abfdca… 2160p) | 03:56:51 | 04:01:45 | render: 1 |
| s44 (05/10, mapista, 5ª leva E, a costura: `qc-cena --forcar` com a pré-carga, rodada `qc-cena.mjs@20261005040255-35712`, 1.418 pedidos, 1.295 2xx; `portao-mapa til` e `rodape`, 856 pedidos, 856 2xx) | 04:02:56 | 04:04:07 | qc-cena: 7 cargas; portao-mapa: 2 |
| s44 (05/10, mapista, 5ª leva E: render 4K da versão final com o relevo, carimbo 1a379651… 2160p) | 04:04:15 | 04:12:13 | render: 1 |
| s08 (05/10, mapista, 5ª leva E2, a malha de "the continent's roads": sonda sem custo `_tmp/art/rev5e/sonda.mjs` com `_tmp/art/rev5e2/q-raio.js` e `q-malha.js`, 4 aberturas com a credencial FALSA e todo pedido à MapTiler abortado e contado, 32 por abertura, nenhum servido) | 04:2x | 04:40:41 | 0 cargas servidas |
| s08 (05/10, mapista, 5ª leva E2: `qc-cena --conc=3 --forcar` com a pré-carga `chaves-nos-portoes.mjs`, rodada `qc-cena.mjs@20261005044045-39072`: 647 pedidos, 543 2xx, todos de servidor; log `_tmp/art/rev5e2/qc-cena.log`) | 04:40:45 | 04:40:54 | qc-cena: 7 cargas |
| s08 (05/10, mapista, 5ª leva E2: `portao-mapa til` e `rodape`, com a pré-carga: 622 pedidos, 622 2xx, de servidor) | 04:41:04 | 04:41:36 | portao-mapa: 2 cargas |
| s08 (05/10, mapista, 5ª leva E2: render 4K, carimbo 4e45a636… 2160p) | 04:41:43 | 04:46:23 | render: 1 |
| s42 (05/10, mapista, 5ª leva E3, a BC e o vão de Juneau: sonda sem custo `_tmp/art/rev5e/sonda.mjs` com os scripts de `_tmp/art/rev5e3/` (q-diag, q-grade, q-grade-bc, q-gradej, q-gradej2, q-gradej3, q-j, q-perfil, q-pilula, q-pilula2, q-final), 12 aberturas com a credencial FALSA e todo pedido à MapTiler abortado e contado, 32 por abertura, nenhum servido) | 05:1x | 05:40 | 0 cargas servidas |
| s42 (05/10, mapista, 5ª leva E3: `qc-cena --conc=3 --forcar` com a pré-carga `chaves-nos-portoes.mjs`, rodada `qc-cena.mjs@20261005054055-27164`: 1.125 pedidos, 988 2xx, todos de servidor; contados em `_tmp/maptiler-portoes.jsonl`; log `_tmp/art/rev5e3/qc-cena.log`) | 05:40:55 | 05:41:18 | qc-cena: 8 cargas |
| s42 (05/10, mapista, 5ª leva E3: `portao-mapa til` e `rodape`, com a pré-carga: 622 pedidos, 622 2xx, de servidor) | 05:41:21 | 05:42:01 | portao-mapa: 2 cargas |
| s42 (05/10, mapista, 5ª leva E3: render 4K, carimbo b2a3bd7f… 2160p) | 05:42:18 | 05:47:13 | render: 1 |
| s42 (05/10, mapista, 5ª leva E4, o JUNEAU no voo: sonda sem custo `_tmp/art/rev5e/sonda.mjs` com os scripts de `_tmp/art/rev5e4/` (q-grade, q-grade2, q-grade3, q-diag), 5 aberturas completas (e 1 interrompida) com a credencial FALSA e todo pedido à MapTiler abortado e contado, 32 por abertura, nenhum servido; sem portão nem render: a cena não mudou) | 06:1x | 06:32 | 0 cargas servidas |
| s42 (05/10, mapista, 5ª leva E5, o JUNEAU no voo: sonda sem custo `_tmp/art/rev5e/sonda.mjs` com `_tmp/art/rev5e5/q-ab.js` (as saídas A e B) e `q-depois.js` (a cena editada), 2 aberturas com a credencial FALSA e todo pedido à MapTiler abortado e contado, 32 por abertura, nenhum servido) | 06:5x | 06:59 | 0 cargas servidas |
| s42 (05/10, mapista, 5ª leva E5: `qc-cena --conc=3 --forcar` com a pré-carga `chaves-nos-portoes.mjs`, rodada `qc-cena.mjs@20261005070014-28456`: 1.155 pedidos, 1.006 2xx, todos de servidor; contados em `_tmp/maptiler-portoes.jsonl`; log `_tmp/art/rev5e5/qc-cena.log`) | 07:00:14 | 07:00:36 | qc-cena: 8 cargas |
| s42 (05/10, mapista, 5ª leva E5: `portao-mapa til` e `rodape`, com a pré-carga: 622 pedidos, 622 2xx, de servidor) | 07:00:47 | 07:01:26 | portao-mapa: 2 cargas |
| s42 (05/10, mapista, 5ª leva E5: render 4K, carimbo 7ee642d4… 2160p) | 07:01:33 | 07:06:32 | render: 1 |
| as 56 cenas de `graphics/` (as 55 do XML e a s09), 17 delas de mapa (05/10, rodada final portoes-5e, passo 1: `qc-cena --conc=3 --forcar` com a pré-carga `ferramentas/chaves-nos-portoes.mjs` pelo `--import`, rodada `qc-cena.mjs@20261005100655-33852`; nas 17 de mapa, `qc-tamanho` 17 cargas, `qc-contrato` 18 (a s01 de novo sozinha: no lote saiu NÃO MEDIDO sem tile 2xx), `check-overlap` 17, `qc-carga` 25 (as 8 reprovadas re-medidas sozinhas pelo desempate), `qc-fora-do-quadro` 17 e `qc-credito-fantasma` 18 (a s39 de novo sozinha, pelo mesmo motivo): 9.627 pedidos, 8.543 respostas 2xx, todas com o endereço de um servidor; o `_audit-til` abriu a s01 e a s03 com o rAF trocado, 0 pedidos, e o lote das 56 morreu sem o rodapé, como na 5d; contados em `_tmp/maptiler-portoes.jsonl`; log `_tmp/art/portoes-5e/qc-cena.log`; nada renderizado) | 10:06:55 | 10:17:03 | qc-cena: 112 cargas (e 2 aberturas sem pedido) |
| as 39 sem mapa (05/10, portoes-5e: `qc-cena --conc=3 --forcar` só nelas, com a pré-carga, rodada `qc-cena.mjs@20261005101730-25224`, para o til do molde; 0 pedidos; log `_tmp/art/portoes-5e/qc-cena-39-sem-mapa.log`) | 10:17:29 | 10:19:33 | 0 cargas |
| as 56, 17 de mapa (05/10, portoes-5e, passo 2: `ferramentas/portao-mapa.mjs rodape out/juneau` (versão 5, 416a90d7…) num processo só, com a pré-carga, rodada `portao-mapa.mjs@20261005102004-9012`: 2.734 pedidos, 2.734 2xx, todos de servidor; as 39 sem mapa, 0 pedidos; log `_tmp/art/portoes-5e/pm-rodape-56.log`) | 10:20:04 | 10:33:56 | portao-mapa: 17 cargas |
| as 17 de mapa (05/10, portoes-5e, passo 2: `portao-mapa til --so=` as 17, num processo só, com a pré-carga, rodada `portao-mapa.mjs@20261005103356-7708`: 2.768 pedidos, 2.761 2xx, todos de servidor, 7 cancelados na s01; log `_tmp/art/portoes-5e/pm-til-17.log`) | 10:33:56 | 10:35:53 | portao-mapa: 17 cargas |
| s01 e s03 (05/10, portoes-5e, passo 3: `qc-video-avanca` com a pré-carga, uma cena por processo: 296 pedidos e 296 2xx na s01, "✓"; 93 e 93 na s03, "sem <video> na cena — nada a medir"; todos de servidor; e a s40 e a s53, sem mapa, 0 pedidos) | 10:36:09 | 10:36:40 | qc-video-avanca: 2 cargas |
| s03, s05, s07, s12, s42, s44, s50 e s59 (05/10, portoes-5e, o detalhe das reprovações: `qc-carga` avulso nas 8, com a pré-carga: 1.241 pedidos, 1.134 2xx, todos de servidor; e, sem mapa, o `qc-carga` na s16, s49 e s58 e o `qc-fora-do-quadro` na s23 (duas vezes, a 2ª com `--json`) e na s32, 0 pedidos; logs em `_tmp/art/portoes-5e/`) | 10:36:40 | 10:37:14 | qc-carga: 8 cargas |
| s01, s08 e s39 (05/10, triagem portoes-5e, só leitura: quadros dos clipes 4K de hoje pelo ffmpeg, `_tmp/triagem-portoes-5e/q.py`, e os logs da rodada; nenhuma cena aberta, nenhum portão rodado, nenhuma chave lida) | 10:4x | 10:5x | 0 cargas |
| s01, s08 e s39 (05/10, cético da triagem portoes-5e, só leitura: todos os quadros dos clipes 4K de hoje pelo ffmpeg, `_tmp/triagem-portoes-5e/cetico/buracos-todos.py` e `buracos.py`, e os logs da rodada; nenhuma cena aberta, nenhum portão rodado, nenhuma chave lida) | 10:5x | 11:0x | 0 cargas |
| as 56, 17 de mapa (05/10, verificação independente da 5ª leva, só leitura: sonda sem custo do verificador no Chrome do canal, sem render, com chave falsa; todo pedido à MapTiler interceptado e respondido nesta máquina com tile falso, nenhum enviado: 112 no 1º teste e 66 no teste da s42, abortados ou servidos aqui, e 1.108 na passada das 56, 11:22:12–11:23:54; nenhuma outra rede) | 11:1x | 11:23:54 | 0 cargas |
| s12 e s59 (05/10, mapista, 6ª vista: ensaios sem custo, `_tmp/art/seco-5b.mjs` (s12, 8 variantes da câmera) e `_tmp/art/rev6/divisa-s59.mjs` (s59), com a credencial FALSA e todo pedido à MapTiler respondido nesta máquina com tile cinza; e `_tmp/art/rev5e/sonda.mjs` com `_tmp/art/rev6/q-cam.js` (s12 e a cópia de antes), todo pedido abortado; nenhum enviado) | 12:4x | 13:02 | 0 cargas servidas |
| s12 e s59 (05/10, mapista, 6ª vista: `qc-carga` avulso de cada uma, com a pré-carga `chaves-nos-portoes.mjs`: rodadas `qc-carga.mjs@20261005130259-33836` (s12, 96 pedidos, 95 2xx) e `qc-carga.mjs@20261005130303-39316` (s59, 140 pedidos, 92 2xx), todos de servidor; logs `_tmp/art/rev6/<id>-qc-carga.log`) | 13:02:59 | 13:03:05 | qc-carga: 2 cargas |
| s12 (05/10, mapista, 6ª vista: render 4K, carimbo 177d654a… 2160p) | 13:03:11 | 13:07:36 | render: 1 |
| s59 (05/10, mapista, 6ª vista: render 4K, carimbo 1839327e… 2160p) | 13:08:14 | 13:09:54 | render: 1 |
| s12 e s59 (05/10, mapista, 6ª vista: `qc-cena --conc=2 --forcar` com a pré-carga, rodada `qc-cena.mjs@20261005131014-20500`: 15 aberturas (a carga da s12 re-medida sozinha pelo desempate), 1.016 pedidos, 873 2xx, todos de servidor; log `_tmp/art/rev6/qc-cena.log`) | 13:10:14 | 13:10:33 | qc-cena: 15 cargas |
| s12 e s59 (05/10, mapista, 6ª vista: `portao-mapa til` e `rodape`, com a pré-carga, rodadas `portao-mapa.mjs@20261005131038-16696` (385 pedidos, 385 2xx) e `portao-mapa.mjs@20261005131048-31792` (359 pedidos, 359 2xx), todos de servidor; logs `_tmp/art/rev6/portao-mapa-*.log`) | 13:10:38 | 13:11:30 | portao-mapa: 4 cargas |
