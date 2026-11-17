# Miniatura A do vídeo 7 (`rio-columbia`): "$37.6M A YEAR"

17/11/2026, para o Test & Compare, com o título "Why the U.S. Pays Canada to Keep Part of a Lake Empty". É a miniatura 1 da pauta
(`pautas/2026-11-09-video-7-rio-columbia.md` §8), a que o Lucas aprovou em 09/11 e a que ganhou nos quatro leitores (7,0 contra 6,0).
Foi feita por `base-A.py`, sem rede, numa passada e dois ajustes. A base é a única baixada nesta tarefa, liberada pela Sala.

## A composição

- **A base** é o Blue Marble da NASA com relevo sombreado e batimetria. O quadro vai de 132,3° O a 109,1° O e de 44,5° N a 53,07° N
  (23,2° de largura, 16:9 em Mercator, 978 m por px do palco).
- **A parte canadense da bacia** está em `--destaque` a 66 %, com o relevo por baixo, contorno `--tinta` de 9 px e sombra por fora. Ela
  ocupa 7 % da imagem, e o topo dela fica a 35 px da borda de cima.
- **A fronteira** é o paralelo 49 em terra, tracejado em `--tinta`. "CANADA" e "U.S." (Barlow Condensed 800, 96 px, só o nome, sem
  bandeira) ficam dos dois lados dela, a leste da bacia.
- **O Arrow, vazio:** o contorno do lago, tracejado em `--agua-luz` com halo escuro, sem água dentro. É o "desenhado vazio" da pauta,
  na escala do mapa.
- **O anel** (224 px, traço de 38 px, `--destaque`, contorno escuro de 5 px) fica no eixo do lago, no Lower Arrow (49,575° N), com a
  barragem Keenleyside dentro.
  - O lugar foi medido. A borda da bacia passa a menos de 136 px (o raio do anel por fora) do lago em toda latitude: a bacia do Fraser
    chega a uns 30 km a oeste do Upper Arrow.
  - O script procura, ao longo do eixo do lago, o ponto mais longe da borda. Ali a borda fica a 97 px do centro, mais que o raio de
    dentro do anel (93 px): ela não entra no miolo e passa sob o traço. Embaixo, o traço encosta na fronteira.
- **O rio**, em `--agua` (10 px) com halo escuro de 30 px, desce da barragem Keenleyside a Portland: 1.574 px no palco. Portland tem o
  ponto branco de 34 px e a pílula "PORTLAND" (`--tinta`, letra `--tinta-escura`, como as cidades da A2 do Big Sur).
- **O texto** fica no alto à esquerda, sobre o Pacífico: "$37.6M" em `--destaque` e "A YEAR" em `--tinta`, Barlow Condensed 800 a 330 px,
  com brilho escuro atrás. A maiúscula tem 231 px (15 px no 168).
- **A linha do K9**, "Starting value, indexed to inflation", fica logo abaixo, em Inter 600 a 58 px (28 px na 1280).
  `MINI_K9=0 python -X utf8 -B roteiros/rio-columbia/miniatura/base-A.py` a tira, se o Lucas preferir sem ela.
- **A seta curva branca** (634 px) vai do número ao anel.
- **O canto da duração** (320 × 320 embaixo à direita) está livre: alfa máximo das peças 0.

## A fonte e a licença de cada camada

| Camada | De onde vem | Licença e crédito |
|---|---|---|
| a base | `out/rio-columbia/_media/base/bluemarble-bacia-relevo.png` (4800 × 3039, sha256 `a544f577…`): NASA Blue Marble, camada `BlueMarble_ShadedRelief_Bathymetry`, pelo WMS da GIBS (`https://gibs.earthdata.nasa.gov/wms/epsg3857/best/wms.cgi`), EPSG:3857, de 134° O a 106° O e de 43,5° N a 55° N, baixada em 17/11/2026 num pedido só, com o User-Agent do canal. A URL inteira, a janela e o pedido estão no `.png.json` ao lado | domínio público (NASA). A documentação da GIBS ("Data Use Guidance and Acknowledgements", lida em 17/11/2026) pede o reconhecimento: "We acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth Science Data and Information System (ESDIS)." O robots.txt da GIBS deu 404 (nenhuma regra). As cópias estão em `out/rio-columbia/_tmp/miniatura/gibs/` |
| a parte canadense da bacia | `_media/geo/bacia-columbia-canada.json` (USGS Watershed Boundary Dataset, região 17, ∩ o lado canadense da fronteira) | domínio público (USGS) |
| a fronteira | `_media/geo/fronteira-canada-eua.json` (U.S. Census Bureau, Cartographic Boundary Files 2025) | domínio público (Census) |
| o rio | `_media/geo/rio-columbia.json` (OSM, relation/2183775), cortado do vértice mais perto da barragem (271 m; o ponto é `barragem-keenleyside.json`, OSM) ao vértice mais perto de Portland (10 km: o rio passa ao norte do ponto da cidade) | ODbL (© OpenStreetMap contributors). O crédito vai na descrição do vídeo, com openstreetmap.org/copyright (decisão da Sala, 17/11/2026) |
| o lago | `_media/geo/lago-arrow.json` (OSM, relation/2198542 e relation/2198541) | ODbL, com o mesmo crédito na descrição |
| Portland | `_media/geo/portland-or.json` (Natural Earth 1:10m) | domínio público |
| as letras | `marca/fontes/` (Barlow Condensed 800 e Inter) | SIL OFL |
| as cores | `marca/tokens.css` | da marca |

Não entra MapTiler, nada desenhado à mão nem por IA, e o script não faz nenhum pedido de rede.

## Onde foge da receita, e por quê

- **A base é mais clara que no vídeo** (luminância média final de 91), como manda a receita da miniatura (`embalagem.md` §3).
- **O herói tem 330 px**, como o da B e os do Big Sur.
- **O anel encosta na fronteira.** Nenhum lugar do lago deixa a borda da bacia fora do traço, e este é o que deixa o miolo limpo.

## Os ajustes

1. **Na 1ª passada**, o anel ficava no centro da caixa do lago e engolia o recorte da bacia do Fraser: a borda branca entrava no anel,
   que parecia marcar a borda. E o topo da bacia encostava na borda de cima (7 px). **Ajuste 1:** o quadro foi para 23,2° a partir de
   44,5° N, o contorno do lago engrossou, e o anel passou a buscar o ponto mais longe da borda. A medida foi pelos vértices, e a
   fronteira (uma reta com poucos vértices) escapou dela: o anel caiu sobre a fronteira.
2. **Ajuste 2:** a distância passou a ser por segmento, e o anel foi para o Lower Arrow (97 px de folga).

## O que vi nos três tamanhos

- **1280:**
  - "$37.6M A YEAR" e a linha do K9 leem;
  - a seta leva ao anel, e no anel se vê o lago tracejado e a barragem;
  - o rio desce até Portland, e "CANADA", "U.S." e "PORTLAND" leem;
  - o canto está livre.
- **320:**
  - o número, "A YEAR", a bacia laranja, o anel, a seta, o rio e "PORTLAND" leem;
  - "CANADA" e "U.S." leem pequenos;
  - a linha do K9 vira um traço cinza.
- **168:**
  - "$37.6M A YEAR" lê inteiro;
  - a bacia laranja e o anel (17 px) leem;
  - o rio, as pílulas e o K9 somem (o K9 podia sumir).

## O que ficou fraco

- **O risco da pauta continua:** dinheiro sozinho pode ler como escândalo. O K9 ajuda a 1280, mas não a 320 nem a 168.
- **O lago "vazio" só lê na 1280.** Na escala da bacia, o Arrow é um fio, e o tracejado dele não diz "vazio" no feed. O "empty" fica
  com o título.
- **O anel e a bacia têm a mesma cor.** O contorno escuro do anel os separa, mas a 168 o anel fica menos forte que na B.
- **O anel encosta na fronteira**, embaixo (ver acima).
