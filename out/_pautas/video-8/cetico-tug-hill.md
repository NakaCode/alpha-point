# Cético: `tug-hill` (a neve do lago Ontário no planalto de Tug Hill), 18/11/2026

**Veredito: DERRUBADO para o vídeo 8 (fica de reserva para abril a setembro de 2027). Nota: 4,5 / 10.**

A régua é a nova, a do Lucas (18/11/2026, no chat da Sala): "Eu preciso arriscar em algo mesmo que já exista... Desde que não seja
atual"; "Algo chamativo, não necessariamente que vá ganhar em pesquisa, mas em curiosidade".

**A pauta é boa, e é atual.** Os fatos se seguram na fonte primária. A medida nossa é forte, melhor que a da 3ª rodada:
- entre as 779 estações dos EUA com normal de neve "padrão" (24 anos ou mais), a de Tug Hill é a **2ª**. Só o cume do Mount Washington
  (6.267 pés) neva mais;
- entre as 4.490 estações dos 48 estados contíguos abaixo de 3.000 pés, é a **1ª**.

**O que derruba é a régua do "atual"** (§2):
1. **Um viral no ângulo, há 12 dias.** "Why Buffalo Gets 8 Feet of Snow and Chicago Doesn't?" (Mapsody, 2,6 mil inscritos, **206 mil
   views**, 06/11/2026) explica a mesma coisa: o lago, o vento e o lugar de Nova York que fica soterrado. O enxame de IA já está atrás.
2. **O título de trabalho é quase o mesmo do viral**, no molde "Why [lugar de Nova York] Gets [N] Feet of Snow".
3. **A estação vira notícia na semana do lançamento.** Nas 6 últimas temporadas, a 1ª tempestade de neve de lago da NWS Buffalo veio entre
   2 e 29 de novembro, e Tug Hill foi o alvo em 2022, 2023 e 2024 (49, 46,2 e 65,9 polegadas). Em 2026 ela ainda não veio. Um vídeo de
   dezembro sai dentro dela.
4. **E o lago mudou de nome nos EUA.** O decreto de 27/08/2026 chama o Ontário de "Lake America", e a NWS Buffalo já usa o nome novo nos
   boletins (17/11/2026). Toda legenda do vídeo vira posição numa briga viva entre os EUA e o Canadá (K4).

A 3ª rodada achou a onda "limpa", porque a busca dela tinha "Tug Hill" no texto e não pegou o viral, que não cita o lugar.

**Como reserva**, fora do inverno e com a onda medida de novo, ela volta a uns 6,5 (§7).

Lido entre ~01:15 e ~01:45 de 18/11/2026 (hora de Brasília). Os scripts, as respostas e as saídas estão em
`out/_pautas/video-8/_trabalho/cetico-tug-hill/`:
- `vidiq.tsv`: as 6 chamadas (30 créditos, no teto) e o que importa em cada uma; `vidiq/01-onda-lake-effect.json`, a resposta grande;
- `watch.jsonl`: as 14 páginas `/watch` lidas, pelo `../yt_meta.py`;
- `normal_csv.py`: as normais de uma estação, com a bandeira de completude;
- `ranking_neve.py`, `ranking-neve.csv` e `ranking-neve-saida.txt`: o ranking das 5.749 estações dos EUA;
- `ranking_recortes.py` e `ranking-recortes-saida.txt`: os recortes por altitude, o Alasca e o transecto;
- `ranking_padrao.py` e `ranking-padrao-saida.txt`: só as estações de completude padrão;
- `fetch_lago.py` e `fetch-lago-saida.txt`: quanto lago o vento atravessa, por direção;
- `doc-normais.txt` e `montague-1997-texto.txt`: o texto extraído dos dois PDFs da NOAA (`pdf_texto.py`);
- `nws-buf-afd.html` e `nws-buf-nsh.html`: dois boletins da NWS Buffalo de 17/11/2026, um deles com "Lake America";
- `commons.py` e `commons-saida.txt`: as categorias do Commons (API, um pedido por vez, User-Agent do canal).

Ficaram em `midia/_pautas/video-8/cetico-tug-hill/`, fora do git:
- o pacote das normais anuais 1991–2020 (54 MB, sha256 `0fdb8142…`);
- a documentação das normais (sha256 `5fd15ef9…`);
- o relatório da NOAA sobre Montague (2,4 MB, sha256 `1a10eca2…`).

## 1. Os fatos que seguram o paradoxo e o gancho

| # | Fato | Fonte (lida em 18/11/2026) | Veredito |
|---|---|---|---|
| F1 | **Hooker 12 NNW** (Lewis County, NY; 43,85° N, 75,72° O; 450,5 m = 1.478 pés): neve normal anual **227,7 in** (18,97 pés, 5,78 m), com 26 anos de dados e a bandeira **S**. No inverno (dez–fev), 165,9 in. Em média, 80,6 dias por ano com neve e **4,1 dias com 10 in ou mais**. | NOAA/NCEI, Normais 1991–2020, anuais/sazonais: https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00303961.csv | **CONFERE** |
| F2 | A bandeira S: "Standard - meets WMO standards for data availability for 24 or more years (missing months are filled with estimates based on surrounding stations)". | NOAA/NCEI, *Normals ANN Documentation 1991-2020*, Tabela 1: https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/doc/Normals_ANN_Documentation_1991-2020.pdf | **CONFERE**. Fecha o "a confirmar" da 3ª rodada: a normal de Hooker é completa pelo padrão da OMM. |
| F3 | As cidades: Buffalo 95,4; Syracuse 127,8; Anchorage 77,9; Fairbanks 64,6; Nome 80,8; Juneau 87,6; Chicago O'Hare 38,4; Boston 49,2; **Central Park 29,8**. Todas S. | As mesmas normais (`ranking-recortes-saida.txt`) | **CONFERE**. Hooker tem 2,92× Anchorage, 2,39× Buffalo, 5,9× Chicago e **7,6× Nova York**. |
| F4 | "Tug Hill's proximity to a large unfrozen lake, with its location **directly downwind from the longest fetch over the lake**, the significant size of the elevated area which **induces upslope flow** (Lake Ontario's elevation is 236 feet), and its higher elevation and resulting lower temperatures, all combine to produce prodigious amounts of snow". O oval elevado tem "15 mile-wide by 30-mile long", "about 25 miles due east of Lake Ontario". "Almost 600 square miles lie at or above 1,500 feet, with maximum elevations reaching 2,000 feet". | NOAA/NWS, *Special Report: Evaluation of the Reported January 11-12, 1997, Montague, New York, 77-Inch, 24-Hour Lake-Effect Snowfall*, mar/1997, p. 1: https://www.ncei.noaa.gov/monitoring-content/extremes/ncec/reports/mantague-ny-snowfall-24hour.pdf | **CONFERE**. É o porquê inteiro em uma frase do órgão oficial. |
| F5 | O recorde do estado: "a state record-setting published seasonal total of **467 inches** at the NWS cooperative station at Hooker 4N (elevation 1,680 feet) during the **1976-77** winter season". E "Average seasonal snowfalls in the area are around 250 inches". | Mesmo relatório, p. 1 | **CONFERE**. São 38,9 pés num inverno. |
| F6 | Montague, jan/1997: o observador fez 6 medições em 24 h, e a soma (77 in), feita pelo Weather Channel, passaria o recorde nacional. O comitê recomendou que "the 77-inch total not be recognized as an official climatological snowfall", e o recorde de Silver Lake (Colorado, 14–15/04/1921, 76 in) "should continue" valendo. No total da tempestade, Montague teve 95 in em 4 dias. | Mesmo relatório, p. iii–v e 1 | **CONFERE**. É o melhor caso do vídeo: o recorde que não foi. |
| F7 | Fevereiro de 2007: "Snowfall totals off Lake Ontario: **Redfield 141 inches**; Parish 121 inches; North Osceola and Mexico 106 inches", de 2 a 12 de fevereiro. "The bands never completely broke up or disappeared throughout the week". | NWS Buffalo, *Weather History, February 2*: https://www.weather.gov/buf/HistoryFEB02.html | **CONFERE** |
| F8 | "almost always in excess of 200 inches/year"; "2,100 square miles"; "winter winds blowing over some **150 miles** of Lake Ontario waters"; a subida de "250 feet in elevation at the western edge, to the 2,100 feet elevations on the eastern edge"; "Tug Hill's total population is just over 100,000, with two-thirds of those people concentrated in villages around its edge"; um miolo de floresta de "about 275 square miles" entre as áreas mais remotas de Nova York. | Tug Hill Commission (órgão do Estado de NY): https://tughill.org/tug-hill-region/ | **CONFERE**. Mas a mesma página diz que a neve é "usually described as the heaviest east of the Rockies", e isso NÃO CONFERE (F12). |
| F9 | "The Tug Hill Plateau in upstate New York typically sees over 200 inches of snow per year mainly from Lake Effect." "The direction of the wind is the most important factor of who will see the lake effect snow." | NWS Binghamton: https://www.weather.gov/bgm/wwawny | **CONFERE** |
| F10 | O lago quase não congela: a cobertura máxima anual de gelo do Ontário tem média de longo prazo de **31,4 %** (a dos Grandes Lagos juntos, 54,5 % desde 1973). | NOAA GLERL, blog, 19/01/2022: https://www.glerl.noaa.gov/blog/2022/01/19/forecasting-maximum-great-lakes-ice-cover-in-2022/ | **CONFERE**, mas a página não diz o período da média do Ontário. Para a tela, ler a série anual do GLERL. |
| F11 | Lake Ontario, comprimento de 193 mi (o número de almanaque). | EPA, *Great Lakes Facts and Figures* | **NÃO CONFERIDO**: a página da EPA (atualizada em 02/09/2026) não tem mais a tabela e lista os lagos como "Superior, Michigan, Huron, Erie and America". A nossa medida (§4) dá 216 mi entre os dois pontos mais distantes da margem. |
| F12 | "Snowiest place east of the Rockies." | As normais (`ranking-neve-saida.txt`) | **NÃO CONFERE**. O cume do Mount Washington tem 281,8 in (S, 27 anos), e o Mount Mansfield, 234,9 (P, 12 anos). A frase verdadeira está no §4. |
| F13 | "More snow than Alaska." | As normais | **NÃO CONFERE**. Valdez tem 325,3 in, e Whittier, Main Bay e Haines 40NW também passam de Hooker. **CONFERE** contra as cidades grandes: Anchorage, Fairbanks e Juneau, uma a uma. |
| F14 | O decreto: "HONORING THE AMERICAN HISTORY OF THE GREAT LAKES AND RENAMING LAKE ONTARIO AS LAKE AMERICA", de 27/08/2026. Ele manda "rename as "Lake America" the body of water currently named as Lake Ontario", e que "all Federal Government references to Lake Ontario, including on executive department and agency maps, contracts, and other documents and communications, shall reflect its renaming". | Casa Branca: https://www.whitehouse.gov/presidential-actions/2026/08/honoring-the-american-history-of-the-great-lakes-and-renaming-lake-ontario-as-lake-america/ | **CONFERE**. O Federal Register pediu verificação de robô (`unblock.federalregister.gov`) e o GovInfo deu 502: não houve contorno. |
| F15 | A NWS já usa o nome novo: "Niagara River to Hamlin Beach **along Lake America**" e "Sodus Bay to the Saint Lawrence River along Lake America", no boletim de 17/11/2026, 22h04 EST. | NWS Buffalo, previsão marítima costeira (NSH): https://forecast.weather.gov/product.php?site=BUF&issuedby=BUF&product=NSH | **CONFERE** (`nws-buf-nsh.html`) |
| F16 | Fort Drum e a 10ª Divisão de Montanha como o "uso" do inverno de Tug Hill. | — | **NÃO CONFERIDO**: não foi lido. |

**As palavras fortes demais:**
- **"the snowiest place east of the Rockies"**: falso (F12). A frase verdadeira: "No weather station east of the Rockies gets more snow, except two
  on New England mountaintops."
- **"more snow than Alaska"**: falso (F13). A frase verdadeira: "nearly three times as much as Anchorage", ou "about as much as Anchorage,
  Fairbanks and Nome combined" (223,3 contra 227,7 in; a folga é de 2 %, então "about").
- **"19 feet a year" sobre "Tug Hill" inteiro**: é a estação mais nevada. A Commission diz "in excess of 200 inches", e a outra estação S do
  planalto, Highmarket 2W, tem 203,1. A frase verdadeira: "its snowiest official weather station averages about 19 feet a year".
- **"nearly 300 inches"**, o número que circula no YouTube, sobre Redfield: não tem normal oficial (Redfield 8N voltou vazia, Montague e
  Barnes Corners deram 404). Não vai à tela.
- **"77 inches in a day, a national record"**: o comitê da NOAA recusou (F6). O fato verdadeiro é melhor que o mito.

## 2. A colisão e a onda (vidIQ: 30 créditos, no teto)

O saldo foi de 5.061 para 5.001. As 6 chamadas marcaram 5 créditos cada; a diferença de 30 a mais é de outro uso da mesma conta no mesmo
intervalo (`vidiq.tsv`). As views são das páginas `/watch`, lidas às ~01:25.

**Os 5 mais próximos do ângulo:**

| # | Título | Canal | Inscritos | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|---|
| 1 | Why Buffalo Gets 8 Feet of Snow and Chicago Doesn't? | Mapsody | 2,62 mil | **206.418** | 06/11/2026 | 1:39 | **Sim: é o viral do ângulo.** "The answer isn't the cold. It's the lake, and the wind… The wind decides where it lands". O título é o molde do nosso. |
| 2 | Why Buffalo Gets Buried in Snow: Lake-Effect Explained | MapShift America | 21 | 112 | 31/10/2026 | 0:50 | No ângulo, minúsculo, e **cita Tug Hill**: "Buffalo averages about 95 inches a year; Tug Hill gets more than 200". |
| 3 | Danau Ini Bikin Salju 2 Meter… | Tahu Bareng | 7,09 mil | 38.470 | 31/10/2026 | 1:12 | O conceito em indonésio (a neve de lago dos EUA contra o lago Vitória). Mostra que o conceito já viaja. |
| 4 | Lake Effect Snow Explained: How Marquette Averages 199 Inches | Skyecast Weather | 19 | 20 | 29/10/2026 | 6:58 | O ângulo em longo, com IA e as normais. Ruído. |
| 5 | Why Does Buffalo Get So Much Snow? Lake Effect Explained in 60 Seconds | One Day In | 18 | 29 | 11/11/2026 | 0:57 | O ângulo, com as normais da NOAA. Ruído. |

**A notícia de neve em Nova York, nas últimas semanas:**
- "UPSTATE NEW YORK BURIED by SURPRISE SNOWSTORM — 18,000 LOSE POWER" (Global Weather Network, 71,1 mil inscritos, 17/11/2026, **154 mil**
  views, 15:03). É neve sinótica no condado de Otsego, não de lago, mas o capítulo 10:56 é "First Lake Effect Snow of the Season".
- "FEET of Snow Everywhere! Buffalo NY Historic Lake Effect Snow Compilation!" (Buffalo Weather, 11/11/2026, 41,6 mil, 1h23).
- Lives de neve de lago em Michigan e Indiana (13 e 14/11, de 25 a 70 mil cada).

**O calendário da NWS Buffalo** (o arquivo de tempestades, as tempestades A e B de cada temporada):

| Temporada | 1ª tempestade | Máximo do lago Ontário |
|---|---|---|
| 2020–21 | 2–3/11/2020 | 13,0 in (Constableville) |
| 2021–22 | 28–29/11/2021 | (B, 6–7/12: 9,0 in, Pulaski) |
| 2022–23 | 17–20/11/2022 | 49 in (W. Carthage) |
| 2023–24 | 27–29/11/2023 | **46,2 in (Highmarket 2W)** |
| 2024–25 | 29/11–02/12/2024 | **65,9 in (3 SW Copenhagen); 65,5 in (Worth)** |
| 2025–26 | 26–29/11/2025 | 12,0 in (Montague) |
| 2026–27 | **ainda não houve** (o `a.txt` de 2026-2027 dá 404 em 18/11) | — |

Fonte: https://www.weather.gov/source/buf/lakeEffectArchive/<temporada>/a.txt (e `b.txt`).

**Sem data, por views:**
- "Tug Hill" é motoneve e limpa-neve: o filme "Plowing Tug Hill" de 1939 (263 mil, postado em 2012), Todd Gross (2013, 72 mil) e Jacob Cronk
  (12/2025, 49 mil). **Nenhum explicador.**
- "Lake effect snow explained" é de TV, curto e antigo: CNN (2014, 175 mil), Weather Channel (2016, 128 mil). O único explicador de geografia
  com público é o do Japão (Casual Earth, 2022, 69 mil).
- O superlativo da neve é chamativo de verdade: "I Car Camped in the World's Snowiest Town" (Tonio Guajardo, 31/01/2026, 5,08 mi) e Fairbanks
  (From Here to There, 01/2026, 1,19 mi). "15 Snowiest Towns in New York" (World Side, 24/11/2025, 7,5 mil, 18 min) já tem Redfield e os 141 in.

**O lago com nome novo também é onda** (achado desta leitura):
- USA TODAY, "Canada's reaction to Trump renamed Lake Ontario 'Lake America'" (28/08/2026, 603 mil);
- EmperorTigerstar, "New Change in the Map - 39: The US Renames Lake Ontario" (29/08, 140 mil);
- Canada Uncovered By K, "Lake Ontario Is Hiding Something Nobody Talks About" (04/09, 45 mil, 14:28);
- Paul McAllister, "How America Killed a Lake And Renamed It After" (09/09, 3,7 mil, 39 min).
- Ficam fora das 8 semanas, mas a NWS trocou o nome nos boletins só no começo de novembro.

**Pela régua nova:**
- **Derruba:** o viral do ângulo (Mapsody, 206 mil, 12 dias). E o título de trabalho é quase igual ao dele.
- **Não derruba, mas pesa:** os antigos grandes (CNN, Weather Channel, "Plowing Tug Hill"), que não são o nosso ângulo, e os curtos
  minúsculos de IA, que são ruído.
- **Não há 3 longos com público no ângulo nas 8 semanas.** O longo bem feito sobre Tug Hill ainda não existe.

## 3. O potencial real, pela régua

| # | Critério | `tug-hill` |
|---|---|---|
| 1 | O nome é buscado | **NÃO MEDIDO**: o teto de 30 créditos acabou nas buscas de colisão. "Tug Hill" no YouTube é público de motoneve, não de geografia. O título leva "New York", que é buscado. A régua nova põe a curiosidade na frente. |
| 2 | Prova recente de interesse | **Sim, forte, e é o problema**: o Mapsody (206 mil em 12 dias, canal de 2,6 mil), o Tonio (5 mi, a cidade mais nevada do mundo) e a neve de Nova York no noticiário desta semana. |
| 3 | O vídeo longo bem feito não existe | **Sim**: não há explicador de Tug Hill. O do conceito é de TV, curto, de 2014 a 2016. Mas o enxame de IA já fez 5 peças minúsculas desde 29/10, uma citando Tug Hill. |
| 4 | O paradoxo em 3 frases, visível no mapa | **Sim**: o lago comprido apontado para um planalto baixo, as setas do vento correndo pelo comprimento do lago e a mancha vermelha no fim. |
| 5 | A geografia explica o porquê | **Sim, inteira**: o vento ao longo do eixo do lago, a água que quase não congela e a subida de 236 para 2.000 pés (F4, F10). |
| 6 | Uma medida nossa, de dado aberto | **Sim, forte** (§4): o 2º lugar entre as 779 estações padrão dos EUA, o 1º entre as 4.490 baixas dos 48 estados e o vento que atravessa 180 mi de lago. |

- **O enxame chega rápido:** já chegou ao conceito (5 peças de IA em 3 semanas, mais a cópia indonésia). O próximo passo dele é o longo.
- **13 a 16 min, em 3 atos, sem linguiça:**
  1. **O número.** 19 pés na estação mais nevada; o 2º lugar do país entre as estações padrão, atrás só de um cume de 6.267 pés; o inverno de
     1976–77, com 467 in; e Montague, os 77 in que a NOAA recusou (o observador, o Weather Channel somando, o comitê, Silver Lake).
  2. **A máquina.** O ar do Ártico, um lago que quase nunca congela (31 % de gelo máximo, em média), o eixo comprido do lago e o vento de
     260° que atravessa 180 mi de água, a subida do planalto e a sombra de neve: 12 milhas a leste, Lowville tem pouco mais da metade.
  3. **Viver ali.** 100 mil pessoas na borda e o miolo vazio; os limpa-neves de 1939 a 2025; os 141 in de Redfield em 2007.
  - Dá para 13 a 16 min com folga. O ato 1 tem a melhor história do pacote (o recorde que não foi).

## 4. A nossa versão: a medida (conta preliminar, feita)

**As normais de neve 1991–2020 da NOAA, as 5.749 estações dos EUA** (o pacote inteiro; `ranking-neve-saida.txt`,
`ranking-recortes-saida.txt` e `ranking-padrao-saida.txt`).

| Recorte | Estações | Hooker 12 NNW (Tug Hill) |
|---|---|---|
| Todas | 5.749 | **15º**. As 14 acima ficam em montanhas (Crater Lake, Alta, Soda Springs, Climax, Mt Washington, Mt Mansfield…) ou no Alasca (Valdez, Whittier, Main Bay, Haines 40NW) |
| Só completude padrão (S, 24 anos ou mais) | 779 | **2º**, atrás só do Mount Washington (281,8 in, 6.267 pés). **Highmarket 2W, também em Tug Hill, é a 5ª** |
| 48 estados, abaixo de 3.000 pés | 4.490 | **1º** (o 2º, Sherman, no cinturão do lago Erie, tem 224,5 in, P) |
| 48 estados, acima de Hooker | 10 | a mais baixa delas, Holden Village (WA), fica a 3.218 pés, mais que o dobro da altitude de Hooker |
| Alasca | 82 | só 4 nevam mais |
| A leste do meridiano 90° O | — | 3º, atrás de dois cumes da Nova Inglaterra (Mt Washington e Mt Mansfield) |

**O vento e o comprimento do lago** (`fetch-lago-saida.txt`; polígono do Natural Earth 1:10m, domínio público):
- O eixo comprido do Ontário aponta para 68°/248°, ou seja, para o canto nordeste: Tug Hill e Watertown.
- **O vento que vem de 260° atravessa ~180 mi (289 km) de lago antes de chegar a Hooker.** O de 230° não atravessa lago nenhum: vem por terra.
  É a "longest fetch" do relatório da NOAA (F4), medida.

**A sombra de neve:** do lago para o leste, na mesma faixa de vento:

| Estação | Altitude | Neve |
|---|---|---|
| Oswego, na margem | 324 pés | 140,1 in |
| Camden | 580 pés | 151,3 in |
| **Hooker 12 NNW, no planalto** | **1.478 pés** | **227,7 in** |
| Highmarket 2W | 1.804 pés | 203,1 in |
| **Lowville, no vale do Black River, ~12 mi a leste** | 863 pés | **127,0 in** |

- O ar sobe, descarrega no planalto e desce seco para o vale.

**As frases para a tela:**
- "Of 4,490 weather stations in the Lower 48 below 3,000 feet, this one gets the most snow."
- "Only one station with a full official record gets more: the summit of Mount Washington."
- "Nearly 3× Anchorage. 7.6× Central Park."

**Limites:**
- São normais de estação. Os pontos mais nevados do planalto (Redfield, Montague, North Osceola) não têm normal oficial: o número real do
  miolo pode ser maior, mas não se prova (K6).
- A normal de Hooker cobre 26 de 30 anos, e é S pelo padrão da OMM.
- A completude P (4.970 das 5.749 estações) é provisória: por isso o recorte "padrão" é o mais firme.

## 5. O material

- **Mapa com geometria real:**
  - o Natural Earth (domínio público) dá o lago, os estados e a fronteira;
  - o relevo amarelo vem do mesmo caminho do vídeo 7 (o ASTER GDEM pela GIBS);
  - o relatório da NOAA de 1997 traz o mapa de altitude de Tug Hill (obra do governo dos EUA; a foto da capa é "courtesy of Cleve Lansing" e
    não entra).
- **Satélite aberto** (Commons, licenças a ler uma a uma): "Heavy Lake-Effect Snow in Western New York (MODIS)", "Lake Effect Snow Around the
  Great Lakes (MODIS 2025-11-11)", "Great Lakes Lake Effect Snow 2022-11-18 1615Z", "Lake Erie, Lake Ontario, and the Finger Lakes (MODIS
  2017-01-13)". A busca "lake effect snow Lake Ontario MODIS" acha 62 arquivos, e "Satellite pictures of Lake Ontario" tem 38.
- **Acervo livre no Commons:**
  - "Lake effect snow" tem 202 arquivos; "Snow in New York (state)", 50 e 49 subcategorias;
  - Fort Drum tem 796 (Exército, a ler);
  - Lewis County, 61.
  - **O lugar em si é ralo:** "Tug Hill Plateau" tem 1 arquivo, Montague 1 e Redfield 1.
- **Arquivo:** o filme "Plowing Tug Hill" (1939, Walter Motor Truck e Frink, 263 mil views no YouTube) seria ouro. A licença não foi lida: um
  filme promocional de 1939 pode ter caído em domínio público por falta de renovação, mas isso se confere antes.
- **Dá para 13 a 16 min:** sim, com o banco pago para a neve na rua, o limpa-neve e a motoneve (B-roll genérico, pela caça).

## 6. O título e o gancho que eu defendo (para a reserva)

**O título de trabalho cai:** "Why This Corner of New York Gets 19 Feet of Snow a Year" é o molde do viral de 06/11 ("Why Buffalo Gets 8
Feet of Snow…"), e Buffalo também fica em Nova York.

- **Título:** **"The Low Hill in New York That Out-Snows Almost All of America"** (61 caracteres).
  - É medido: a estação fica em 15º entre 5.749, e em 1º entre as 4.490 baixas dos 48 estados.
  - O paradoxo está no título: baixo e mais nevado. Nomeia o estado buscado e guarda o nome Tug Hill, sem número de pés.
- **Alternativas:**
  - "Why a Low Hill in New York Gets More Snow Than Anchorage" (56): verdadeiro, 2,92×;
  - "Why New York's Snowiest Hill Beats Alaska's Biggest Cities" (58): Anchorage, Fairbanks e Juneau.
  - **Nunca** "east of the Rockies", "than Alaska" ou "19 Feet of Snow" no título.
  - **Título não medido no vidIQ** (o teto acabou). Pela web, nada com "out-snows" ou "more snow than Anchorage" sobre Tug Hill.
- **Gancho** (3 frases, 45 palavras): "Of the 5,749 U.S. weather stations with an official snow average, only 14 get more snow than one on a low
  hill in upstate New York. The others sit on mountains or in Alaska. And that station sits less than 1,500 feet above sea level."
- **Miniatura:**
  - o norte do estado de Nova York em relevo amarelo, com o planalto aparecendo a leste do lago;
  - o lago em azul, **sem nome escrito** (K4);
  - **Tug Hill em vermelho**, no fim do lago;
  - **em ciano, a pista do vento**: a faixa de 180 mi ao longo do eixo do lago;
  - setas brancas grossas de oeste-sudoeste, correndo o lago inteiro até a mancha vermelha;
  - na caixa preta, **"19 FEET"**; a B, **"WHY HERE?"**.

## 7. Os pontos

- **K1 · GRAVE · A onda do momento: um viral no ângulo há 12 dias.**
  - "Why Buffalo Gets 8 Feet of Snow and Chicago Doesn't?" (Mapsody, 206 mil, 06/11/2026, canal de 2,6 mil) explica o mesmo mecanismo, num
    lugar do mesmo estado. Pela régua nova, um viral de 100 mil ou mais sobre o ângulo nos últimos 2 meses derruba.
  - O enxame já está no conceito: MapShift America (31/10, cita Tug Hill), Skyecast (29/10), One Day In (11/11), HackAlert (10/11) e a cópia
    indonésia (31/10, 38 mil).
  - A 3ª rodada chamou a onda de "a mais limpa das dez" porque buscou com "Tug Hill" no texto, e o viral não cita o lugar.
- **K2 · GRAVE · A pauta vira "atual" na semana do lançamento.**
  - Nas 6 últimas temporadas, a NWS Buffalo teve a 1ª tempestade de neve de lago entre 2 e 29/11, e em todas as 6 houve tempestade com neve
    do lago Ontário até 08/12.
  - Tug Hill foi o alvo em 2022 (49 in), 2023 (46,2) e 2024 (65,9).
  - Em 2026 ela ainda não veio (18/11). Um vídeo de dezembro sai no meio do noticiário de neve, o contrário do "desde que não seja atual".
- **K3 · GRAVE · O título de trabalho é quase o do viral** (o molde "Why [lugar de NY] Gets [N] Feet of Snow", 12 dias antes). Corrige-se
  com o título do §6.
- **K4 · MÉDIO · O lago tem dois nomes desde 27/08/2026.**
  - O decreto da Casa Branca (F14) renomeou o Ontário de "Lake America" para o uso federal, e a NWS Buffalo já usa o nome novo nos boletins
    (F15). O Google Maps mostra "Lake America" aos usuários dos EUA (só na busca, não lido na origem).
  - As nossas fontes de tela (NOAA, NWS) passam a dizer um nome, e o Canadá e o Estado de NY, outro. Cada legenda é uma posição numa briga
    viva entre os EUA e o Canadá. A onda dele fez 603 mil (USA TODAY) e 140 mil (EmperorTigerstar) em agosto.
  - A saída é decisão do Lucas: o lago sem nome na miniatura, e na narração "Lake Ontario — which the U.S. government has called Lake America
    since August 2026", uma vez, atribuído. Mesmo assim, os comentários vão para o nome.
- **K5 · MÉDIO · Os superlativos que circulam são falsos.**
  - "Snowiest east of the Rockies": a própria Tug Hill Commission diz "usually described as", mas o Mount Washington tem 281,8 in.
  - "More snow than Alaska": Valdez tem 325,3 in.
  - Corrige-se com a medida (§4), que é mais forte.
- **K6 · MÉDIO · O número depende de quem mede.**
  - 200+ (Commission), ~228 (a normal oficial), ~250 (NOAA, 1997) e "nearly 300" (o YouTube, sobre Redfield).
  - Os pontos mais nevados do miolo não têm normal oficial. A tela diz "its snowiest official station" e mostra as quatro fontes; isso vira
    cena, não buraco.
- **K7 · MÉDIO · A busca não foi medida.** O teto acabou nas buscas de colisão. "Tug Hill" no YouTube é público de motoneve.
- **K8 · LEVE · O lugar tem pouca foto livre** (1 arquivo em "Tug Hill Plateau"). O satélite, o relatório da NOAA, Fort Drum e o banco pago
  cobrem. A licença do filme de 1939 está a ler.
- **K9 · LEVE · Não tem geopolítica**, a não ser o nome do lago, que é atual (K4). É geografia pura, no molde da The Geo Lens.
- **K10 · LEVE · Não lidos:** Fort Drum (F16), o comprimento do lago na EPA (F11) e o período da média de gelo do GLERL (F10).

**Por que 4,5:**
- Os fatos se seguram, a geografia explica de verdade e a medida é nossa e forte. Cinco dos seis critérios passam, e o sexto (a busca) não
  foi medido.
- Sem a onda, seria uma pauta de 6,5, a melhor da 3ª rodada.
- Mas a régua do Lucas é "desde que não seja atual", e esta pauta está no centro do atual de três jeitos ao mesmo tempo:
  - um viral do mesmo ângulo, de 12 dias;
  - a estação da neve começando, com Tug Hill como alvo de costume;
  - o lago com nome em disputa.
- "Na dúvida, derrube" não precisa nem ser usado.

**Como reserva (abril a setembro de 2027):**
- Depois de 06/01/2027 o viral sai da janela de 2 meses, e fora do inverno a neve de lago não é notícia.
- Antes de voltar, re-medir:
  - a onda (lake effect, Tug Hill e o nome do lago);
  - o título do §6 no vidIQ;
  - a licença do filme de 1939.
- O risco da reserva é o contrário: a curiosidade do superlativo da neve está provada no inverno (o Tonio, 5 mi em janeiro; o Nick Johnson,
  "The 10 SNOWIEST STATES in AMERICA", 676 mil desde dezembro de 2019) e não foi medida fora dele.
