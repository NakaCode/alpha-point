# Vídeo 8, a 3ª rodada de pautas: curiosidade primeiro, nada atual (18/11/2026)

Subagente da Sala. O pedido está em `out/_pautas/video-8/pedido-estrutural-r3.md`. As regras vêm do `pedido-estrutural.md`, menos o vidIQ, que aqui teve teto de 120 créditos.

A régua é a nova, a do Lucas:
- "Eu preciso arriscar em algo mesmo que já exista... Desde que não seja atual";
- "Algo chamativo, não necessariamente que vá ganhar em pesquisa, mas em curiosidade";
- "Encontre novos".

## O resumo

| # | Pauta | Título de trabalho | Nota | Onda (desde 23/09/2026) |
|---|---|---|---|---|
| 1 | O Yukon e a costa que ficou americana | Why Canada Can't Reach a Sea Just 26 Miles Away (47) | **6,5** | 1 curto no ângulo do rio (1.441 views); o panhandle **não medido** |
| 2 | Tug Hill, a neve do lago Ontário | Why This Corner of New York Gets 19 Feet of Snow a Year (55) | **6,0** | limpa: só um documentário que cita o lugar |
| 3 | Machias Seal, o farol com faroleiros | Why Canada Pays Two People to Live on a Rock the U.S. Claims (60) | **6,0** | 2 longos pequenos (590 e 154 views); limite da regra |
| 4 | O Atlântico mais salgado | Why Every Ton of the Atlantic Holds 2 More Pounds of Salt (57) | **5,5** | limpa: um curto de 5 s e um quiz |
| 5 | A neblina do Grand Banks | Why One Corner of Newfoundland Has Fog 206 Days a Year (54) | **5,5** | 1 longo minúsculo; o vídeo da Hibernia (278 mil), tangencial |
| 6 | Hector, a tempestade das 15h | The Thunderstorm That Shows Up at 3 PM Almost Every Day (55) | 5,5 (cai na leitura literal) | 5 curtos minúsculos e 1 longo de 14 views |
| 7 | O Murray–Darling | The River That Starts Near Brisbane and Ends Near Adelaide (58) | 5,0 | limpa no ângulo; o conceito estourou com o Níger (547 mil) |
| 8 | Turnagain Arm, a onda diária | Why a Wave Runs Up This Alaskan Inlet Almost Every Day (54) | 5,0 | 1 longo e 1 curto, o longo com a nossa comparação |
| 9 | Papua-Nova Guiné e as línguas | Why Valleys a Few Miles Apart Speak Different Languages (55) | 4,5 (cai na leitura literal) | ~25 curtos, 2 títulos quase iguais |
| 10 | Maracaibo, o lago dos raios | Why Lightning Strikes One Lake Almost Every Night (49) | 4,0 (cai na leitura literal) | ~25 curtos, 2 longos, 2 títulos quase iguais |

Escala: as duas que ficaram de pé no cético da 1ª rodada (o Grand Canyon e Banff) tiveram 6,0. "Na dúvida, derrube" vale aqui também.

## Os créditos do vidIQ

- **5.186 → 5.061: 125 créditos, 25 chamadas de `vidiq_youtube_search`.**
  - **Passei 5 créditos do teto de 120.** Foi erro de conta meu: a 25ª chamada não devia ter sido feita.
  - O registro das 25 está em `out/_pautas/video-8/_trabalho/r3/vidiq.tsv`.
- Como as chamadas se dividiram:
  - 19 buscas de onda, com `publishedAfter` 2026-09-23;
  - 6 buscas de título, sem data: Okinotorishima, Yukon, Atlântico, Tug Hill, EUA–Canadá e Hector.
- **Sem a busca de título no vidIQ:** o Grand Banks, o Murray–Darling, Turnagain, a PNG e Maracaibo.
  - Neles, o título foi checado só pela web e está marcado "título não medido no vidIQ".
  - O panhandle do Alasca, que é o ato 2 do Yukon, também ficou sem medida.

## O método, e o achado que muda a leitura da regra

**O que eu fiz:**
1. Gerei 38 candidatos (lista inteira no fim).
2. Fiz uma triagem de graça: busca na web e a leitura de `/watch` pelo `yt_meta.py`, uma página a cada 1,5 s.
3. Levei ao vidIQ os 19 que passaram.
4. Desenvolvi os 10 melhores.

**O achado:** quase todo superlativo de almanaque já tem dezenas de curtos feitos com IA desde 23/09/2026, com poucas centenas de views cada, além de longos minúsculos de canais de IA (10 a 600 views). Lido ao pé da letra, o "3 ou mais vídeos no ângulo nas últimas 8 semanas" derruba quase tudo.

**As duas leituras da regra, e a decisão que é da Sala:**
- **Literal:** qualquer 3 vídeos no ângulo derrubam. Nessa leitura caem Hector, PNG e Maracaibo, e Machias fica no limite.
- **Ruído** (a que proponho):
  - derrubam um longo (4 min ou mais) no ângulo com 10 mil views ou mais, 3 ou mais longos no ângulo, um curto com 100 mil views ou mais, ou uma notícia quente;
  - curtos pequenos são ruído e só baixam a nota;
  - os céticos da 1ª rodada derrubaram também por longos minúsculos (Tahoe tinha 6 longos abaixo de 240 views). A leitura do ruído afrouxaria esse critério.
- **Meu top 5 foi escolhido para ficar de pé nas duas leituras.** Por isso Hector, que tem a melhor curiosidade da lista, ficou em 6º.

**As fontes:**
- Todos os fatos abaixo foram lidos na origem em 18/11/2026, salvo marcação contrária.
- Recusaram leitura e ficaram NÃO CONFERIDO (site recusou): britannica.com, MDBA, BOM, Ethnologue, NAVCEN (Ice Patrol), CBC, Bangor Daily News, geographical.co.uk e Smithsonian.
- Não houve contorno.
- O CIA World Factbook foi descontinuado: a página da PNG hoje é um aviso de despedida.

---

## 1. O Yukon e a costa que ficou americana: nota 6,5

- **Título:** "Why Canada Can't Reach a Sea Just 26 Miles Away" (47).
  - Variantes: "The 1903 Line That Cut Canada's Gold Off From the Sea" (53) e "Why the Yukon River Starts 26 Miles From the Pacific" (52).
  - A segunda variante encosta no curto da Where We Settle; use só se o ângulo for outro.
  - O "26" depende da medida refeita (veja "A medida nossa").
- **O chamariz:** o Canadá tem três costas. Mesmo assim, ali, o mar a 26 milhas é de outro país, e quem vê quer ver isso no mapa.
- **O paradoxo:**
  - Os lagos onde nasce o Yukon ficam a umas 26 milhas do mar em Dyea, no Alasca.
  - A água, o ouro e os 7 mil barcos de 1898 fizeram quase 2 mil milhas até o mar de Bering.
  - A faixa de costa entre eles é americana desde o laudo de 1903, que um juiz britânico desempatou a favor dos EUA.
- **O gancho** (44 palavras): "Lake Lindeman, in northern British Columbia, sits about 26 miles from salt water, yet its water never goes there. It travels almost 2,000 miles through Canada and Alaska to reach the Bering Sea. And the short way to the ocean was closed in 1903."
- **Os fatos:**
  1. "stretches for 1,979 river miles" até "its mouth at the Bering Sea". NPS, Yukon-Charley Rivers, https://www.nps.gov/yuch/what-is-yukon-charley-rivers.htm.
  2. A trilha de Chilkoot:
     - "a 33 mile route stretching from the ghost town of Dyea, Alaska to Lake Bennett, British Columbia";
     - em 1898, "Lake Bennett remained frozen until May 29th";
     - depois, "the entire flotilla of over 7000 boats was in motion".
     - NPS, Klondike Gold Rush, https://www.nps.gov/klgo/learn/historyculture/historic-chilkoot-trail.htm.
  3. A disputa da fronteira:
     - "Canada wanted a direct route from the Klondike gold fields to the Pacific fjords, whereas the US wanted to maintain control of the intervening territory";
     - o tribunal tinha 3 americanos, 2 canadenses e Lord Alverstone, e "Alverstone supported the American claim";
     - a decisão saiu em 20/10/1903.
     - The Canadian Encyclopedia, https://thecanadianencyclopedia.ca/article/alaska-boundary-dispute.
  4. O rio Slims, que mudou de oceano:
     - "an abrupt drop over four days from May 26 to 29, 2016";
     - a água foi para o Kaskawulsh, "flowing south toward the Gulf of Alaska";
     - "For the last 300 years, Slims River flowed out to the Bering Sea".
     - University of Washington, 17/04/2017, https://www.washington.edu/news/2017/04/17/retreating-yukon-glacier-caused-a-river-to-disappear/.
  5. Britannica sobre o Yukon: NÃO CONFERIDO (site recusou).
- **A medida nossa:**
  - Feita: pelos centróides do Nominatim (OSM, um pedido por segundo, com o User-Agent do canal), o lago Lindeman fica a 42,3 km de Dyea Point (26,3 mi), e o lago Bennett a 65,8 km de Skagway (40,9 mi). Saída em `_trabalho/r3/geo-nominatim-saida.txt`.
  - **A refazer antes do título:**
    - a menor distância entre a margem do lago (polígono do OSM) e a linha de costa da Taiya Inlet;
    - o curto da Where We Settle mede 20,1 km (12,5 mi) pelo HydroRIVERS, do ponto de nascente;
    - o número do título segue a nossa medida, seja 26 ou um número menor.
- **Os atos:**
  1. O mapa e a corrida do ouro: os lagos a um passo do mar e os 7 mil barcos no Bennett em 29/05/1898.
  2. Por que a costa é americana: o tratado russo-britânico de 1825, a compra de 1867 e o tribunal de 1903, com Alverstone e a rota do Canadá por portos americanos.
  3. A divisa d'água é frágil: o Slims mudou de oceano em 4 dias em 2016. O fecho é o presente datado em Skagway.
- **A miniatura:**
  - Relevo amarelo do noroeste da Colúmbia Britânica e do Yukon.
  - A faixa do panhandle do Alasca em vermelho; os lagos e o Yukon em ciano.
  - Uma seta branca curta do lago ao mar com "26 MI" e uma seta longa ao longo do rio, rumo ao Bering.
  - Caixa preta: "26 MILES".
- **A onda:**
  - Where We Settle, curto "Why This River Flows 3,000 km to Reach an Ocean 20 km Away", 09/11/2026, 1.441 views, 28 inscritos. É o ângulo do rio; o nosso é o da fronteira.
  - TheGeoWhys, curto do Slims, 14/10/2026, 977 views.
  - Antes da janela: Terrain logic, "The Yukon River That Switched Oceans in Four Days", 24/08/2026, 142 views.
  - O conceito "o rio que foge do mar" estourou com outro rio: Cartogram Earth, "The River That Runs Away From the Sea" (o Níger), 12/10/2026, 547 mil.
  - Antigos grandes do Yukon: nenhum apareceu.
- **Os riscos:**
  - A onda do panhandle e da disputa de 1903 não foi medida no vidIQ, porque o orçamento acabou. É o primeiro "a confirmar".
  - O conceito do rio está quente por causa do Níger; o título e a miniatura têm de ser da fronteira.
  - O 1903 é ferida canadense: a voz atribui e não arbitra.
  - O material é bom: fotos de domínio público da corrida do ouro (Chilkoot, Hegg; licença de cada uma a conferir).

## 2. Tug Hill, a neve do lago Ontário: nota 6,0

- **Título:** "Why This Corner of New York Gets 19 Feet of Snow a Year" (55).
  - Variantes: "Why Part of New York Gets More Snow Than Alaska's Biggest City" (62) e "The Plateau That Turns Lake Ontario Into Snow" (45).
- **O chamariz:** Nova York, e 19 pés de neve por ano num planalto que quase ninguém conhece pelo nome. É quase o triplo de Anchorage.
- **O paradoxo:** um planalto baixo, de 250 a 2.100 pés, recebe mais neve que as cidades do Alasca, porque fica no fim de 150 milhas de lago aberto.
- **O gancho** (38 palavras): "On the Tug Hill Plateau in upstate New York, one weather station averages about 228 inches of snow a year. That's nearly three times Anchorage, Alaska, and more than double Buffalo. And the hill that catches it is barely 2,000 feet high."
- **Os fatos:**
  1. Do Tug Hill Commission, https://tughill.org/tug-hill-region/:
     - "almost always in excess of 200 inches/year";
     - "2,100 square miles";
     - "winter winds blowing over some 150 miles of Lake Ontario waters";
     - "the rise from 250 feet in elevation at the western edge, to the 2,100 feet elevations on the eastern edge";
     - "Tug Hill's total population is just over 100,000".
  2. "The Tug Hill Plateau in upstate New York typically sees over 200 inches of snow per year mainly from Lake Effect". NWS Binghamton, https://www.weather.gov/bgm/wwawny.
  3. As normais da NOAA de 1991–2020 (veja "A medida nossa"), https://www.ncei.noaa.gov/data/normals-annualseasonal/1991-2020/access/USC00303961.csv e as estações abaixo.
  4. A confirmar: o recorde de Montague (neve em 24 h, janeiro de 1997) e o lago Ontário que raramente congela (NOAA GLERL). Não foram lidos.
- **A medida nossa** (feita; normais anuais de neve, `ANN-SNOW-NORMAL`; saída em `_trabalho/r3/neve-normais-saida.txt`):

  | Estação | Neve anual (1991–2020) |
  |---|---|
  | Hooker 12 NNW, Tug Hill | 227,7 in |
  | Highmarket 2W, Tug Hill | 203,1 in |
  | Syracuse | 127,8 in |
  | Buffalo | 95,4 in |
  | Anchorage | 77,9 in |
  | Boston | 49,2 in |
  | Chicago O'Hare | 38,4 in |

  - Denver, Redfield 8N e Osceola voltaram vazias; Montague e Barnes Corners deram 404.
  - A fazer: o comprimento do lago ao longo do vento de oeste, pelo polígono do Natural Earth.
- **Os atos:**
  1. O número e o mapa: 19 pés contra as cidades, e os vilarejos do planalto.
  2. O mecanismo: o ar frio do Canadá, 150 milhas de lago aberto, o eixo longo do lago apontado para o planalto e a subida de 250 para 2.100 pés.
  3. Viver ali: 100 mil pessoas nas bordas, o miolo quase vazio. Há a ligação possível com Fort Drum e o treino de inverno do Exército (a confirmar).
- **A miniatura:**
  - O lago Ontário em azul, com uma faixa ciano marcando as 150 milhas do vento.
  - O planalto de Tug Hill em vermelho; setas brancas grossas do oeste, sobre o lago, até a mancha vermelha.
  - Caixa preta: "19 FT".
- **A onda:**
  - Na janela, só o documentário dos amish (01/11/2026, 1.127 views) cita Tug Hill.
  - Neve de lago em geral: StoryBook, curto "Why Does Buffalo Get Buried in Snow Every Year?", 16/11/2026, 1,1 mil.
  - Antigos: Adventure Racing (2024, 4,8 mil) e Weather Channel (2014, 34 mil).
- **Os riscos:**
  - É sazonal: uma tempestade de neve de lago em dezembro pode virar notícia quente na semana do lançamento. Isso ajuda a busca, mas pesa na regra.
  - O superlativo "snowiest place east of the Rockies" não entra: o monte Washington provavelmente neva mais, e a conta não foi feita.
  - A completude da normal de Hooker não foi conferida.
  - A imagem: NASA Worldview (MODIS) mostra as faixas de neve do lago, em domínio público; foto do lugar no Commons e na NWS.
  - Falta geopolítica: é geografia pura.

## 3. Machias Seal, o farol com faroleiros: nota 6,0

- **Título:** "Why Canada Pays Two People to Live on a Rock the U.S. Claims" (60).
  - Variantes: "The Island the U.S. and Canada Never Settled" (44) e "Why a Lighthouse Still Has Keepers on This Disputed Rock" (56).
  - Cuidado: o molde "Why X Pays Y…" repete o do vídeo 7.
- **O chamariz:** dois aliados quase sem briga, uma ilha de 20 acres com papagaios-do-mar e um farol automático que ainda tem faroleiros, para marcar posse.
- **O paradoxo:**
  - O farol é automático, mas o Canadá mantém dois faroleiros em turnos de 4 semanas, porque a presença é o argumento.
  - Os EUA reivindicam a ilha pelo tratado de 1783.
  - A Corte de Haia traçou a fronteira marítima em 1984 e parou antes da ilha.
- **O gancho** (41 palavras): "Machias Seal Island is about 20 acres of rock between Maine and New Brunswick. Its lighthouse runs automatically, yet two Canadian keepers still live there in four-week shifts. And the United States says the island has been American since 1783."
- **Os fatos:**
  1. Da WNYC (The Takeaway, 29/07/2015), https://www.wnyc.org/story/last-land-dispute-between-us-and-canada/:
     - "two people who live on Machias Seal Island — they are Canadian lighthouse keepers", em "28-day shifts";
     - "They are there strictly to maintain Canada's sovereignty claim";
     - "More than 50 percent of their fishing area is in this so called 'gray zone'".
  2. Da Global News (08/12/2025), https://globalnews.ca/news/11568499/machias-seal-island-new-brunswick-sovereignty-united-states/:
     - o senador Jim Quinn, de New Brunswick, contra um site de passeios do Maine que põe a ilha "on the Maine coast": "unacceptable in this day and age";
     - os faroleiros "can check ID" pela alfândega.
  3. Da Corte Internacional de Justiça, caso 67, https://www.icj-cij.org/case/67:
     - Special Agreement notificado em 25/11/1981; sentença em 12/10/1984;
     - "It rejected the delimitation lines proposed by the Parties", com uma linha em três segmentos.
  4. Da Wikipedia (fonte secundária; a origem fica a confirmar), https://en.wikipedia.org/wiki/Machias_Seal_Island:
     - 8 ha (20 acres);
     - 8,6 milhas náuticas de Cutler e 10 de Grand Manan;
     - farol de 1832;
     - "all lighthouses in the Maritimes except for the station on Machias Seal Island are unstaffed";
     - os custos são pagos pela Global Affairs Canada "for sovereignty purposes";
     - o tratado de 1783 ("all islands within 20 leagues").
  5. A frase do Departamento de Estado ("since 1783"): a Bangor Daily News (2018) e a CBC recusaram, NÃO CONFERIDO (site recusou). Ler na origem do Departamento de Estado.
- **A medida nossa:**
  - Feita: pelos centróides do Nominatim, 19,0 km (11,8 mi) até Cutler. Os 32,2 km até Grand Manan são centróide de ilha grande e não servem.
  - A fazer:
    - a distância à costa mais próxima, pela linha de costa do OSM;
    - a área da zona cinzenta: o polígono entre a linha reivindicada pelos EUA (NOAA Office of Coast Survey, Maritime Limits and Boundaries, dado aberto) e a do Canadá.
- **Os atos:**
  1. A rocha, o farol, os faroleiros e as aves.
  2. Por que dois aliados nunca fecharam: a letra de 1783, o farol britânico de 1832 e Haia em 1984 parando antes.
  3. A zona cinzenta hoje: lagosteiros dos dois países nas mesmas águas e a briga do site de passeios em 2025.
- **A miniatura:**
  - O golfo do Maine.
  - A zona cinzenta hachurada em vermelho, com um círculo vermelho na ilha minúscula.
  - A linha de Haia em ciano, terminando antes da ilha; uma seta branca na ilha.
  - Caixa preta: "WHOSE ROCK?".
- **A onda:**
  - Saur Facto, 11:02, 29/10/2026, 590 views.
  - MapTales World, "The US and Canada Still Can't Agree Where Their Border Is", 4:27, 13/11/2026, 154 views. Não usar esse título.
  - Um curto de notícia com IA sobre o mapa do Trump, de setembro de 2026; o dia exato, dentro ou fora da janela, a confirmar.
  - Um relatório da Canada West Foundation, agosto de 2026.
  - Antigos: nada grande no vidIQ; na web, a WNYC (2015), um post de 2014 e o filme "Lobster War" (Duke).
- **Os riscos:**
  - A relação EUA–Canadá está na política de 2025–2026; a voz não toma lado.
  - Na leitura literal, os 2 longos mais o curto de setembro podem somar 3.
  - Os fatos mais fortes ainda vêm da Wikipedia.
  - A ilha é pequena: os 13–16 min pedem a família das disputas (o mar de Beaufort, a Dixon Entrance), sem virar o vídeo da MapTales.

## 4. O Atlântico mais salgado: nota 5,5

- **Título:** "Why Every Ton of the Atlantic Holds 2 More Pounds of Salt" (57).
  - Variantes: "Why the Atlantic's Rain Falls on the Pacific" (44) e "Why the Atlantic Is Saltier Than the Pacific" (44).
  - A segunda variante é quase igual a curtos de 31/10/2025 e 29/03/2026; não usar como principal.
- **O chamariz:** todo mundo acha que o mar é igual. O mapa de sal da NASA pinta o Atlântico mais forte, e a explicação passa por cima da América Central.
- **O paradoxo:**
  - Os dois oceanos se ligam pelo Sul, mas a superfície do Atlântico tem uns 1,1 g/kg a mais de sal (a nossa conta).
  - O Atlântico perde água doce para o ar, e parte do vapor chove do outro lado do istmo.
  - O peso de cada causa ainda se discute.
- **O gancho** (43 palavras): "On NASA's salt map, the Atlantic glows saltier than the Pacific. Across the surface, the gap works out to about two extra pounds of salt in every ton of seawater. Yet the two oceans are connected, and scientists still debate which cause matters most."
- **Os fatos:**
  1. "the Atlantic Ocean is saltier than the Pacific and Indian Oceans"; o Aquarius foi lançado em 10/06/2011. NASA Earth Observatory, "A Measure of Salt", https://science.nasa.gov/earth/earth-observatory/a-measure-of-salt-78250/.
  2. "a large fraction of the moisture that's evaporated from the subtropical Atlantic precipitates in the equatorial eastern Pacific … thereby sustaining a steady-state interbasin salinity difference". Hansi Singh (University of Washington), resumo Krell/CSGF 2015, https://krellinst.org/csgf/conf/2015/abstracts/singh2011.
  3. O WOA23 da NOAA NCEI (a medida nossa, abaixo).
  4. Não lidos na origem, a confirmar: o estudo de trajetórias que diz que o fluxo pela América Central "not dominant" (visto em resumo de busca; URL a recuperar); Schmittner et al. 2011 (J. Climate 24), sobre as Rochosas e os Andes, com o PDF fora do ar (DNS); Yang et al. 2023 (Nature Communications), que contesta o papel das Rochosas.
- **A medida nossa** (feita; WOA23, salinidade de superfície anual em grade de 1°, média por área ponderada por cos(lat), máscara de bacias do WOA; saída em `_trabalho/r3/sal-woa-saida.txt`):
  - o Atlântico tem 35,67 e o Pacífico 34,59: diferença de **1,08 g/kg**, cerca de 1,08 kg (2,4 lb) por tonelada métrica;
  - na faixa de 40°S a 40°N, 36,04 contra 34,80;
  - os códigos de bacia 53 e 56 (médias de 10,35 e 32,28) não foram identificados; pelo valor, devem ser o Cáspio e o golfo de Bengala, a conferir no manual. Não entram nas contas do Atlântico e do Pacífico.
  - Os brutos estão em `midia/_pautas/video-8/r3/`, fora do git.
- **Os atos:**
  1. O mapa de sal (Aquarius) e o nosso número.
  2. Para onde vai a água: a evaporação subtropical, os alísios cruzando a América Central e as sombras de chuva das montanhas, cada teoria com o nome de quem a defende.
  3. Por que importa: a água salgada afunda no norte. Um parágrafo, datado e sem previsão.
- **A miniatura:**
  - As Américas no centro; o Atlântico em vermelho e o Pacífico em ciano.
  - Setas brancas grossas cruzando a América Central do Atlântico para o Pacífico.
  - Caixa preta: "SALTIER".
- **A onda:**
  - Na janela, só um curto de 5 s e um quiz.
  - Título, sem data: curtos pequenos de título quase igual (393 views em 19/02/2025; 02/03/2024; 31/10/2025; 29/03/2026) e o webinar da US CLIVAR (2016).
  - Os curtos "Atlantic and Pacific don't mix" (35 mi) são outro ângulo.
- **Os riscos:**
  - É abstrato: não tem um "lugar" para mostrar.
  - O vídeo 4 (`atlantico-fundo`) não andou.
  - O ato 3 encosta na AMOC, que vive no noticiário: fica curto.
  - O mecanismo é disputado, então o título nunca diz a causa.
  - A imagem é boa: os mapas da NASA estão em domínio público.

## 5. A neblina do Grand Banks: nota 5,5

- **Título:** "Why One Corner of Newfoundland Has Fog 206 Days a Year" (54).
  - Variantes: "Where Two Ocean Currents Make a Wall of Fog" (43) e "Why the Sea Where the Titanic Sank Is So Foggy" (46).
  - Cuidado com a terceira variante: o Titanic afundou numa noite limpa. Serve de virada, nunca de promessa.
- **O chamariz:** 206 dias de neblina por ano, mais da metade do ano sem horizonte. O mesmo mar levou o iceberg ao Titanic e foi o maior banco de bacalhau do mundo.
- **O paradoxo:** o encontro de águas que fez do Grand Banks um dos mares mais ricos (bacalhau, petróleo) é o mesmo que o faz um dos mais perigosos (neblina, icebergs).
- **O gancho** (37 palavras): "Argentia, Newfoundland, averages about 206 days of fog a year, the most of any place in Canada. Offshore lies a shallow sea about the size of Colorado. And that same water once fed one of the world's great cod fisheries."
- **Os fatos:**
  1. Da The Canadian Encyclopedia, "Grand Banks" (editada em 04/03/2015), https://www.thecanadianencyclopedia.ca/en/article/grand-banks:
     - "282 500 km2" (cerca de 109 mil sq mi; o Colorado tem 104 mil);
     - "Water depths over the banks are generally less than 100 m".
  2. Do mesmo verbete:
     - "Warm air masses moving from the Gulf Stream over the colder Labrador current water produce heavy FOG, especially in spring";
     - "ICEBERGS, carried along the edge of the banks by the Labrador current".
  3. Do mesmo verbete: "In 1992 the collapse of COD stocks led to the imposition of a moratorium on fishing cod"; Hibernia produz desde novembro de 1997.
  4. "Argentia, Newfoundland, has the most fog of any place in Canada, with an average of 206 days per year"; St. John's tem 126, Halifax 74 e Vancouver 62. The Canadian Encyclopedia, "Fog", https://www.thecanadianencyclopedia.ca/en/article/fog.
  5. A International Ice Patrol (NAVCEN): NÃO CONFERIDO (site recusou).
  6. "O lugar mais nebuloso da Terra" (Guinness) só aparece em fonte secundária e é contestado pelo Mount Washington Observatory: não usar.
- **A medida nossa** (a fazer):
  - horas com visibilidade abaixo de 1 km por mês, no NOAA ISD (global-hourly, aberto e sem conta), para St. John's, Argentia, Gander, Halifax, Vancouver e São Francisco: o nosso ranking de neblina;
  - o salto de temperatura através da frente, pelo WOA23 de temperatura.
- **Os atos:**
  1. A neblina: Argentia, St. John's e o mapa do banco raso.
  2. As duas águas: a corrente do Labrador, o ar do Golfo e a neblina de advecção; os icebergs na mesma corrente e o Titanic (1912).
  3. A riqueza: o bacalhau e a moratória de 1992; o petróleo, sem pôr a Hibernia na miniatura.
- **A miniatura:**
  - Terra Nova e o desenho do banco raso em vermelho.
  - A corrente do Labrador como seta ciano descendo; o ar quente do sul como seta branca.
  - Caixa preta: "206 DAYS".
- **A onda:**
  - Uma explicação de 3 min da corrente do Labrador (27/10/2026, 84 views).
  - O vídeo da plataforma Hibernia (14/11/2026, 278.640 views): tangencial, mas deixa quente o ângulo "plataforma contra iceberg".
  - Título sem data: não medido no vidIQ.
- **Os riscos:**
  - O superlativo é fraco: fica a neblina de Argentia, que é canadense.
  - O Titanic é gasto.
  - Imagem de neblina é genérica.
  - O Canadá teve 70 e 4 impressões em temas de fora dos EUA; Terra Nova é Canadá.

---

## 6. Hector, a tempestade das 15h: nota 5,5 (cai na leitura literal)

- **Título:** "The Thunderstorm That Shows Up at 3 PM Almost Every Day" (55).
  - Variantes: "Why This Island Gets the Same Storm Every Afternoon" (51) e "Why Australia's Sky Runs on a Timetable" (39).
- **O chamariz:** o tempo é o símbolo do imprevisível, e aqui há uma tempestade com nome e hora marcada. É a melhor curiosidade da lista.
- **O paradoxo:** uma tempestade de até ~20 km (12 mi) de altura nasce quase toda tarde de setembro a dezembro sobre as ilhas Tiwi, ao norte de Darwin. As brisas do mar, vindas de vários lados, se chocam no meio das ilhas.
- **O gancho** (38 palavras): "Almost every afternoon from September to December, a thunderstorm rises over the Tiwi Islands, north of Darwin, Australia. It often arrives around 3 p.m., and its top can reach about 12 miles up. Locals call it Hector."
- **Os fatos:**
  1. Da The Weather Network (Caroline Floyd, 19/11/2019, atualizada em 30/11/2024), https://www.theweathernetwork.com/en/news/weather/forecasts/why-australias-hector-the-convector-is-one-of-the-most-studied-storms-on-earth:
     - "Each afternoon between September and December, right about 3 p.m.";
     - "as high as 20 km".
  2. Do mesmo artigo, atribuindo ao BOM: "afternoon sea breezes rush onshore and collide above the 'pyramid's point'".
  3. A Morning Glory, de Roger Smith (LMU Munique, 06/02/2015), https://www.meteo.physik.uni-muenchen.de/~roger/AustralianProjects/TheMorningGlory/TheMorningGlory.html:
     - "from early September to about mid-November";
     - "1 or 2 km in width", "100 km or more long", base de "100 or 200 m";
     - velocidade de "10-15 m s⁻¹";
     - "The collision of the east- and west-coast sea-breezes" sobre Cape York.
  4. O BOM, direto: não lido. As campanhas MCTEX (1995) e TWP-ICE (2006): a confirmar.
- **A medida nossa:** o ciclo do dia dos raios sobre as Tiwi, pela climatologia LIS/OTD (NASA GHRC). Ela pede conta Earthdata, que é gratuita, mas abrir conta é decisão do Lucas. Sem ela, não há medida boa.
- **Os atos:**
  1. A hora marcada: Hector e as ilhas Tiwi.
  2. Por quê: o formato das ilhas, as brisas que convergem e a estação de transição; por que a monção a desliga.
  3. A mesma máquina em outro lugar: a Morning Glory sobre Cape York e Burketown, o céu de relógio do norte da Austrália.
- **A miniatura:** as ilhas Tiwi em vermelho; setas brancas convergindo de todos os lados; Darwin e a costa em ciano. Caixa preta: "3 PM".
- **A onda:**
  - Hector: 5 curtos minúsculos e um longo, Pretty Weird Science, 4:33, 06/11/2026, 14 views.
  - Morning Glory: ~28 curtos (o maior com ~2,4 mil) e 2 longos minúsculos (9:59 em 16/11; 4:56 em 22/10).
  - Antigos: ABC News Australia (2018, 12,7 mil); The Observable, 8:44 (09/06/2026, 991; o título exato a confirmar); um clipe de 2011 (16,7 mil).
- **Os riscos:**
  - Na leitura literal, os 5 curtos derrubam Hector, e a Morning Glory cai sozinha.
  - É física, sem geopolítica.
  - A imagem: radar e satélite do BOM e da JMA com licença a confirmar.
  - Os fatos são quase todos secundários.

## 7. O Murray–Darling: nota 5,0

- **Título:** "The River That Starts Near Brisbane and Ends Near Adelaide" (58).
  - Variantes: "Australia's Longest River System Starts 77 Miles From the Pacific" (65) e "Why Australia's Biggest River Turns Its Back on the Coast" (57).
- **O chamariz:** começa nos morros atrás da Gold Coast e chega ao mar perto de Adelaide, a 933 mi em linha reta (a nossa conta).
- **O paradoxo:** o sistema fluvial mais longo da Austrália nasce a umas 77 mi do Pacífico e corre 3.672 km para o outro lado do continente, porque a Grande Cordilheira Divisória fica colada à costa leste.
- **O gancho** (44 palavras): "The Murray–Darling, Australia's longest river system, begins in hills about 77 miles from the Pacific beaches of the Gold Coast. Its water then runs more than 2,000 miles the other way. It reaches the sea near Adelaide, about 930 miles from where it started."
- **Os fatos:**
  1. Da Geoscience Australia, "Longest rivers" (atualizada em 04/11/2026), https://www.ga.gov.au/scientific-topics/national-location-information/landforms/longest-rivers:
     - o sistema mede 3.672 km, "longest continuous river system";
     - em trechos: Condamine/Balonne/Culgoa, 1.195 km; o Darling, 1.545 km; o Murray abaixo da junção, 828 km.
  2. Da mesma página: o Murray tem 2.508 km, "Australia's longest single river"; o Darling, com os afluentes, 2.740 km.
  3. A nascente do Condamine "in the Border Ranges near Killarney" (folheto do BOM) e as páginas da MDBA: NÃO CONFERIDO (site recusou).
- **A medida nossa:**
  - Feita, pelo Nominatim: Killarney até Point Danger, 124,2 km (77,2 mi); Killarney até Goolwa, 1.501 km (932,8 mi).
  - A fazer: o ponto de nascente pela geometria da GA ou do OSM, até a costa mais próxima.
- **Os atos:**
  1. A nascente perto do surfe.
  2. A cordilheira colada à costa e o Darling atravessando o seco.
  3. A foz perto de Adelaide e a água disputada entre os estados.
- **A miniatura:** a Austrália; o sistema fluvial em vermelho, da Gold Coast a Adelaide; o Pacífico em ciano; uma seta branca curta com "77 MI". Caixa preta: "77 MILES".
- **A onda:**
  - Limpa no ângulo.
  - Cartogram Earth, ranking de rios (14/11/2026, 48.710 views), com um capítulo do Murray–Darling.
  - O conceito estourou com o Níger (547 mil, 12/10).
  - Título: não medido no vidIQ.
- **Os riscos:**
  - É o mesmo conceito do Yukon: escolher um dos dois.
  - O interior da Austrália está saturado.
  - Os fatos da nascente foram recusados (BOM, MDBA).

## 8. Turnagain Arm, a onda diária: nota 5,0

- **Título:** "Why a Wave Runs Up This Alaskan Inlet Almost Every Day" (54).
  - Variantes: "The Wave That Travels Against the River in Alaska" (49) e "Why Anchorage Has Tides 13 Times Bigger Than Miami's" (52).
  - A segunda variante colide com o Atlas of Ambition de 12/11; não usar.
- **O chamariz:** uma onda surfável sobe um braço de mar por cinco horas e meia, quase todo dia, a meia hora de Anchorage.
- **O paradoxo:** um braço de mar estreito e raso transforma a maré de Cook Inlet, ampliada por ressonância, numa frente de água que anda contra a correnteza a 10–15 mph. O terremoto de 1964 mudou o fundo e a onda.
- **O gancho** (46 palavras): "In Turnagain Arm, near Anchorage, Alaska, a wave rolls up the inlet nearly every day, just after low tide. It can stand 6 feet tall and moves at 10 to 15 miles an hour. And it takes about five and a half hours to reach the end."
- **Os fatos:**
  1. Do NOAA National Ocean Service, "Alaska Bore Tales" (1985, revisado em abril de 2007), https://www.weather.gov/media/arh/brochures/ALASKA_BORE_TALES.pdf:
     - "The only locations in the United States where tidal bores occur regularly are Turnagain and Knik Arms";
     - Cook Inlet tem amplitude de 35 ft.
  2. Do mesmo folheto: a ressonância do Cook Inlet é "nearly equal to the daily tidal interval of 12 hours and 25 minutes".
  3. Do mesmo folheto:
     - "In Turnagain Arm, bores range in size from 1/2 foot to 6 feet high and travel at speeds between 10 and 15 mph";
     - "It takes 5 1/2 hours for the tidal bore to travel from the mouth of Turnagain Arm to the end".
  4. Do mesmo folheto: as pororocas mudaram "since the 1964 earthquake, due to the drastic change in bottom configuration".
  5. Do NOAA CO-OPS (datums, época 1983–2001):
     - Anchorage: MN 26,19 ft, GT 29,16 ft, https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations/9455920/datums.json?units=english;
     - Boston: MN 9,49 ft (estação 8443970);
     - Miami (Virginia Key): MN 2,04 ft (estação 8723214).
  6. Larry Gedney, Alaska Science Forum, 15/08/1983, https://www.gi.alaska.edu/alaska-science-forum/tidal-waves-tidal-bores-and-tsunamis: "Cook Inlet has exceptionally high tides to begin with".
- **A medida nossa:**
  - Feita: a maré média de Anchorage é 12,8 vezes a de Miami e 2,8 vezes a de Boston. É a mesma comparação do Atlas of Ambition, e por isso fica fora do título.
  - A fazer: o afunilamento do braço (largura e profundidade, OSM e NOAA) contra a velocidade da onda.
- **Os atos:**
  1. A onda e quem a surfa.
  2. A ressonância e o funil.
  3. O terremoto de 1964 e os lodaçais. Sem espetáculo de morte.
- **A miniatura:** o Cook Inlet em ciano; Turnagain Arm em vermelho; Anchorage marcada; uma seta branca subindo o braço. Caixa preta: "DAILY WAVE".
- **A onda:**
  - Atlas of Ambition, "Why the Ocean Rises 30 Feet in Alaska but Barely Moves in Florida", 14:55, 12/11/2026, 9 views.
  - Lay of the Land, curto, 13/11/2026, 1.217 views.
  - Título: não medido no vidIQ.
- **Os riscos:**
  - A nossa medida coincide com a do vídeo de 12/11.
  - É mais física que geografia.
  - Esticar para 13–16 min é difícil.
  - A filmagem de surfe tem dono; as fotos da NOAA servem.

## 9. Papua-Nova Guiné e as línguas: nota 4,5 (cai na leitura literal)

- **Título:** "Why Valleys a Few Miles Apart Speak Different Languages" (55).
  - Variantes: "Why Papua New Guinea Has a Language Every 200 Square Miles" (58; a área está a confirmar) e "The Mountains Behind 800 Languages" (34).
- **O chamariz:** vizinhos a poucas milhas não se entendem, e o mapa de relevo mostra por quê.
- **O paradoxo:** um país um pouco maior que a Califórnia tem umas 830 línguas, a maioria com menos de mil falantes.
- **O gancho** (38 palavras): "Papua New Guinea is a little bigger than California. Yet it is home to roughly 830 languages, and most have fewer than 1,000 speakers. In some valleys, the next village over speaks a language you would not understand."
- **Os fatos:**
  1. Asya Pereltsvaig, Languages of the World, 24/07/2011, https://www.languagesoftheworld.info/?p=201:
     - "830 languages", e "most … have fewer than 1,000 speakers";
     - "Papuans have inhabited this area for some 40,000 years";
     - a topografia, "the second major cause" (Foley, 1986).
  2. Ethnologue: NÃO CONFERIDO (site recusou).
  3. geographical.co.uk: NÃO CONFERIDO (site recusou).
  4. CIA World Factbook: descontinuado.
  5. A área do país: a confirmar.
- **A medida nossa** (a fazer): as coordenadas de cada língua no Glottolog (CLDF, aberto, CC-BY) por faixa de altitude, para medir línguas por mil km² na serra e na baixada.
- **Os atos:**
  1. O número e o mapa.
  2. O tempo, a serra e os vales.
  3. O Tok Pisin e o futuro.
- **A miniatura:** o relevo da Nova Guiné; a PNG em vermelho; os pontos das línguas em ciano. Caixa preta: "830 LANGUAGES".
- **A onda:**
  - ~25 curtos: Mapsody 24.967 (25/10), Natter Nations 36.687 (25/10), Determinasi 48.640 (26/09).
  - Longos tangenciais.
  - Títulos quase iguais: "Why One Country Has So Many Languages" (17/10/2026) e "How Can One Country Speak 840 Languages?" (13/11/2026).
- **Os riscos:** curiosidade de almanaque, quente nos curtos, fatos recusados, longe dos EUA, sem geopolítica.

## 10. Maracaibo, o lago dos raios: nota 4,0 (cai na leitura literal)

- **Título:** "Why Lightning Strikes One Lake Almost Every Night" (49).
  - Variantes: "Why the World's Lightning Capital Is a Lake in Venezuela" (56) e "Why Storms Gather Over This Lake Every Night" (44).
  - O "almost every night" depende das 297 noites por ano, que não foram lidas na origem.
- **O chamariz:** a maior densidade de raios medida por satélite no planeta.
- **O paradoxo:** o lago mais elétrico do mundo fica num vale fechado por dois braços dos Andes, e as tempestades vêm de noite.
- **O gancho** (42 palavras): "Lake Maracaibo, in Venezuela, gets about 600 lightning flashes per square mile a year, the highest rate a NASA satellite found anywhere. Most of the storms come at night. And they gather over the same corner of the lake, again and again."
- **Os fatos:**
  1. "A maximum flash rate of 233 flashes per square kilometer per year has been observed at Lake Maracaibo" (cerca de 603 por sq mi). NASA Earthdata (publicada em 19/10/2018, atualizada em 27/01/2025), https://www.earthdata.nasa.gov/learn/data-in-action/locating-lightning-hotspots-earth.
  2. Da mesma página: o vale entre dois braços dos Andes, "in combination with the regional wind flow pattern", e "during the nighttime".
  3. Da mesma página: o estudo de Albrecht, Goodman, Buechler, Blakeslee e Christian (BAMS), e "24 of the first 30" pontos ficam perto de montanhas.
  4. As 297 tempestades noturnas e Kabare (205): só em resumo de busca, a confirmar. A Smithsonian recusou, NÃO CONFERIDO (site recusou).
- **A medida nossa:** a climatologia LIS/OTD de 0,1°, que também pede conta Earthdata (decisão do Lucas).
- **Os atos:**
  1. Os raios.
  2. A serra, a brisa do lago e o vento da noite.
  3. O petróleo do lago. Fica arriscado: a política da Venezuela.
- **A miniatura:** o lago em vermelho; os Andes em relevo amarelo; raios brancos. Caixa preta: "EVERY NIGHT".
- **A onda:**
  - ~25 curtos (o maior com ~1,7 mil).
  - 2 longos: Beyond the Atlas, 19 min, 04/11/2026, 17 views; The Invisible, 20 min, 08/11/2026.
  - Títulos de curtos colidindo: "The Place With the Most Lightning on Earth" (27/10) e "Lake Maracaibo: The Place With…" (30/10).
  - Antigo: Casual Earth (2022, 285 mil).
- **Os riscos:** a Venezuela no noticiário, o enxame, os fatos secundários.

---

## A lista inteira (38 candidatos, uma linha cada)

| # | Candidato | Destino | Por quê (quando) |
|---|---|---|---|
| 1 | O Yukon e a costa americana | **desenvolvido, 6,5** | veja acima |
| 2 | Tug Hill | **desenvolvido, 6,0** | veja acima |
| 3 | Machias Seal | **desenvolvido, 6,0** | veja acima |
| 4 | O Atlântico mais salgado | **desenvolvido, 5,5** | veja acima |
| 5 | A neblina do Grand Banks | **desenvolvido, 5,5** | veja acima |
| 6 | Hector (com a Morning Glory) | desenvolvido, 5,5 | cai na leitura literal |
| 7 | O Murray–Darling | desenvolvido, 5,0 | o conceito do Yukon; fatos recusados |
| 8 | Turnagain Arm | desenvolvido, 5,0 | a medida igual à do vídeo de 12/11 |
| 9 | As línguas da PNG | desenvolvido, 4,5 | ~25 curtos e 2 títulos quase iguais |
| 10 | Maracaibo | desenvolvido, 4,0 | enxame de curtos; Venezuela |
| 11 | Okinotorishima | caiu (vidIQ, 18/11) | curtos de 120 a 167 mil views em outubro e novembro; título repetido |
| 12 | As Great Sand Dunes | caiu (vidIQ) | 3 longos no ângulo e notícia da Gazette de 08/10 |
| 13 | Furacões no Atlântico Sul | caiu (vidIQ) | curto de 47 mil (14/11) e um longo de 35 mil (23/09) |
| 14 | Os terremotos de Oklahoma | caiu (vidIQ) | o título exato em 31/10, mais 2 longos |
| 15 | Java mais populosa que a Rússia | caiu (vidIQ) | curto viral de 171 mil (26/10) |
| 16 | A cratera de Sudbury | caiu (vidIQ) | 4 ou mais longos na janela |
| 17 | Os Black Hills e o dinheiro dos sioux | caiu (vidIQ) | 2 longos em 16–17/11 e curtos em cima |
| 18 | As serras de Nevada | caiu (vidIQ) | enxame da Grande Bacia; "Nevada Doubled in Width" (30/10) |
| 19 | A Morning Glory, sozinha | caiu (vidIQ) | ~28 curtos e 2 longos; entra como ato 3 de Hector |
| 20 | Kalaupapa | caiu (triagem) | curto de 58 mil em 17/10/2026 |
| 21 | A baía de Fundy | caiu (triagem) | curto de 391 mil em 17/10/2026; Canada Uncovered (18/09, 39 mil) |
| 22 | A cerca dos dingos | caiu (triagem) | 925 mil em 01/10/2026 |
| 23 | O Níger que foge do mar | caiu (triagem) | 547 mil em 12/10/2026 |
| 24 | Os lagos do Canadá | caiu (triagem) | muitos curtos |
| 25 | O Peñón de Vélez | reserva, não medido | Thornton's (24/03/2026, 290.760; dentro dos 12 meses) e um curto em 16/10 |
| 26 | Mammoth Cave | caiu (triagem) | só antigos (GeologyHub 2023, 40 mil); curiosidade média; pouca geografia |
| 27 | Manicouagan | caiu (triagem) | GeologyHub 2024 (61 mil); geologia, não geografia nem geopolítica |
| 28 | Howland e as ilhas do guano | reserva, não medido | Glore (2025, 23 mil); geopolítica boa (Guano Islands Act); onda a medir |
| 29 | Kastellorizo | caiu (triagem) | a tensão Grécia–Turquia é tema vivo; Geografyi (01/2026) |
| 30 | O canal Erie e Nova York | reserva, não medido | no formato "rico"; Mr. Louis (25/10/2026) e Paul McAllister (09/07/2026) |
| 31 | Bingham Canyon | caiu (triagem) | BBC Earth Science (2024, 369 mil); mina, pouca geografia |
| 32 | A Austrália, continente mais plano | caiu (triagem) | curtos; pouco para 13 min |
| 33 | Mawsynram | caiu (triagem) | clássico; FilterCopy (2021, 144 mil); fora do peso EUA, Canadá e Austrália |
| 34 | Alert, a vila mais ao norte | reserva, não medido | Uncovering (2021, 1,8 mi), antigo grande; onda a medir |
| 35 | O polo de inacessibilidade da América do Norte | caiu (triagem) | pouco material |
| 36 | O chinook de Spearfish | caiu (triagem) | curiosidade de um minuto, sem 13 min |
| 37 | As Horizontal Falls | caiu (triagem) | só turismo, sem porquê geográfico forte |
| 38 | O ouro de Nevada (rico) | reserva, não medido | Geology with Solomon (2024, 282 mil; 07/2026, 10 mil) |

Nenhum dos 38 está nas 14 testadas, nos laudos `cetico-*.md` nem nas três oferecidas (Arizona Strip, Banff, os ventos da Nova Zelândia). Duas encostam em coisa anterior com outro ângulo: a foz do Murray, aberta por dragas, caiu em `estrutural.md` com nota 4,5; e o estreito de Torres foi o nº 9 do `estrutural.md`, outro assunto da PNG.

## O meu top 5

1. **O Yukon, nota 6,5.**
   - "Why Canada Can't Reach a Sea Just 26 Miles Away".
   - O chamariz: o Canadá impedido de chegar a um mar que está a 26 milhas.
   - A onda: 1 curto no ângulo do rio; o panhandle não foi medido.
   - É o único com geopolítica de verdade: a corrida do ouro, o laudo de 1903 e um rio que mudou de oceano em 2016. Tem material de domínio público farto.
2. **Tug Hill, nota 6,0.**
   - "Why This Corner of New York Gets 19 Feet of Snow a Year".
   - O chamariz: 19 pés de neve num canto de Nova York, quase o triplo de Anchorage.
   - A onda: a mais limpa das dez.
   - Fica nos EUA, no molde da The Geo Lens, com a medida já feita nas normais da NOAA.
3. **Machias Seal, nota 6,0.**
   - "Why Canada Pays Two People to Live on a Rock the U.S. Claims".
   - O chamariz: faroleiros num farol automático, pagos para marcar posse.
   - A onda: 2 longos pequenos (590 e 154 views).
   - É EUA e Canadá, com geopolítica, e a melhor frase de clique; o risco é a política do momento.
4. **O Atlântico mais salgado, nota 5,5.**
   - "Why Every Ton of the Atlantic Holds 2 More Pounds of Salt".
   - O chamariz: 2 libras a mais de sal por tonelada, uma medida nossa que ninguém mostrou.
   - A onda: limpa.
   - Pesa contra o histórico do vídeo 4 e a falta de um lugar para mostrar.
5. **O Grand Banks, nota 5,5.**
   - "Why One Corner of Newfoundland Has Fog 206 Days a Year".
   - O chamariz: 206 dias de neblina, no mar do Titanic e do bacalhau.
   - A onda: quase limpa; o vídeo da Hibernia (278 mil) é tangencial.
   - O superlativo é canadense, não mundial.

Hector teria a melhor curiosidade, mas cai na leitura literal da regra. Se a Sala adotar a leitura do ruído, ele entra no lugar do Grand Banks.

## O que ficou "a confirmar" (o mais importante primeiro)

1. **Qual leitura da regra das 8 semanas vale, a literal ou a do ruído?** É decisão da Sala ou do Lucas, e decide Hector e Machias.
2. **O Yukon:**
   - medir no vidIQ a onda do panhandle e da disputa de 1903 (uma busca com data e uma sem, 10 créditos);
   - refazer os 26 mi pela geometria do OSM, da margem do lago à costa da Taiya Inlet. O número do título segue a medida.
3. **Machias:**
   - ler na origem a posição dos EUA (Departamento de Estado, "since 1783") e o custeio dos faroleiros pela Global Affairs Canada (hoje só na Wikipedia);
   - descobrir o dia do curto de setembro de 2026 sobre o mapa do Trump.
4. **Tug Hill:**
   - conferir a completude da normal de Hooker 12 NNW;
   - nunca usar "snowiest east of the Rockies";
   - vigiar notícia de neve de lago perto do lançamento.
5. **O Atlântico:** ler na origem o estudo de trajetórias, Schmittner 2011 e Yang 2023, e identificar os códigos de bacia 53 e 56 do WOA.
6. **Earthdata:** a medida de Hector e de Maracaibo pede conta gratuita na NASA, e abrir conta é decisão do Lucas.
7. **Os créditos:** gastei 125, 5 acima do teto de 120.

## Os arquivos de trabalho

Todos ficam em `out/_pautas/video-8/_trabalho/r3/`:
- `vidiq.tsv`: as 25 chamadas;
- `vidiq/*.json`: as respostas que vieram grandes;
- `vq.py`: lê os JSON do vidIQ;
- `ver_watch.py` e `watch-a.jsonl` a `watch-d.jsonl`: as leituras de `/watch`;
- `geo_nominatim.py` e `geo-nominatim-saida.txt`: as distâncias;
- `sal_woa.py` e `sal-woa-saida.txt`: o sal;
- `neve_normais.py` e `neve-normais-saida.txt`: a neve;
- `pdf_texto.py`: o texto do folheto da NOAA;
- `titulos_len.py`: a contagem de caracteres dos títulos.

Os brutos grandes (o WOA23, 4,9 MB; a máscara de bacias, 9,3 MB; a lista de estações GHCN, 11,4 MB) ficam em `midia/_pautas/video-8/r3/`, fora do git (`.gitignore`, linha 17).

Não houve commit, navegador nem `regie`, e nenhum crédito pago foi gasto.
