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
