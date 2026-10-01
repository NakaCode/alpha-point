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
