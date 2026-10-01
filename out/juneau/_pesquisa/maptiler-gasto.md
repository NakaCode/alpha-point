# Juneau: o contador da MapTiler

A regra é da `marca/identidade.md` §6, "O gasto do Juneau, liberado": o contador se anota antes e depois da
primeira cena de mapa, e o custo real vai ao Lucas antes das outras.

| quando | o que | pedidos no período de cobrança atual | quem leu |
|---|---|---|---|
| 30/09/2026 21:12 (Brasília) | antes do primeiro render de mapa (o piloto s03) | 10.689 (Analytics › Current billing period; sessões: 0) | o Lucas mandou o print do painel |
| 30/09/2026 21:37 (Brasília) | depois do 1º render da s03 (21:33–21:35, 241 quadros em 4K) | 10.689: o painel ainda não somou o render | print do Lucas |

- **Pelo gráfico do painel:** os pedidos vieram em 26/09 e 27/09, uns 5 mil por dia, só de tiles. A barra de 30/09
  é a estimativa do site (mais ou menos 30 mil), não é uso.
- O painel pode atrasar algumas horas. O "depois" se lê com folga depois do render, e de novo no dia seguinte.
- O `renderizar.mjs` da pré-v1 não guarda cópia de tiles: cada render pede tudo à MapTiler (o perfil `maptiler`, `src/mapa/perfis.mjs`). O 10.689 inalterado depois do render é atraso do painel, não render de graça. A leitura que vale é a de 01/10, com o dia 30/09 fechado.
