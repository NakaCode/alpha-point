# Juneau: o contador da MapTiler

A regra é da `marca/identidade.md` §6, "O gasto do Juneau, liberado": o contador se anota antes e depois da
primeira cena de mapa, e o custo real vai ao Lucas antes das outras.

| quando | o que | pedidos no período de cobrança atual | quem leu |
|---|---|---|---|
| 30/09/2026 21:12 (Brasília) | antes do primeiro render de mapa (o piloto s03) | 10.689 (Analytics › Current billing period; sessões: 0) | o Lucas mandou o print do painel |
| 30/09/2026 21:37 (Brasília) | depois do 1º render da s03 (21:33–21:35, 241 quadros em 4K) | 10.689: o painel ainda não somou o render | print do Lucas |
| 30/09/2026 22:17 (Brasília) | 2º render da s03 (a divisa mais grossa e os rótulos fora das linhas; câmera 100 px mais baixa) | sem leitura: entra na de 01/10 | — |
| 30/09/2026 23:06 (Brasília) | depois dos 2 renders da s03 (21:33 e 22:17) | total 10.689, sem mudança; a barra de 30/09 diz "Static maps: 30" e "Estimate: 30.349" (total 30.379) | print do Lucas |

- **Às 23h de 30/09, o dia ainda não estava somado:** o total segue em 10.689, e a barra do dia mostra só 30 pedidos
  contados, como "Static maps". O resto é a estimativa do site. Os renders pedem tiles (`/tiles/satellite-v2/…` e
  `terrain-rgb-v2`, no perfil `maptiler` da pré-v1), e nada no canal chama a API de mapa estático. De onde vêm esses 30
  continua sem explicação, e o painel não mostra a origem. A leitura que vale é a do dia 01/10, à tarde, com o 30/09
  fechado.
- **Na leitura de 01/10, o 30/09 tem dois renders da s03.** O custo de uma cena de mapa é a diferença do dia
  dividida por 2 (os dois têm a mesma duração e quase o mesmo enquadramento).

- **Pelo gráfico do painel:** os pedidos vieram em 26/09 e 27/09, uns 5 mil por dia, só de tiles. A barra de 30/09
  é a estimativa do site (mais ou menos 30 mil), não é uso.
- O painel pode atrasar algumas horas. O "depois" se lê com folga depois do render, e de novo no dia seguinte.
- O `renderizar.mjs` da pré-v1 não guarda cópia de tiles: cada render pede tudo à MapTiler (o perfil `maptiler`, `src/mapa/perfis.mjs`). O 10.689 inalterado depois do render é atraso do painel, não render de graça. A leitura que vale é a de 01/10, com o dia 30/09 fechado.
