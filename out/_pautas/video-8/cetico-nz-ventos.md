# Cético: `nz-ventos` (o vento de Wellington, e a capital posta no funil), 18/11/2026

**Veredito: DE PÉ COM AJUSTE. Nota: 6,0 / 10.**

O Lucas, no chat da Sala, em 18/11/2026, ~00:1x: "Talvez uma pauta sobre a Nova Zelândia, sobre os ventos fortes". E, no adendo, ~00:2x:
"Poderia ser "Por que este é o lugar com os ventos mais fortes do mundo" sem citar o local no título" (§6.1).

**O ângulo que é nosso** junta os candidatos 1 e 2 num vídeo só: por que Wellington venta tanto, e por que a Nova Zelândia pôs a capital
justamente ali.
- **A geografia explica, e se mede.**
  - A NIWA diz que o vento de oeste é "speed increased through gaps, such as the Manawatu Gorge, Cook, and Foveaux Straits".
  - Nos dados abertos da NOAA (2015–2024), o vento médio no aeroporto de Wellington é de **25,1 km/h, 1,6 vez o de Chicago**. Uma hora
    em cada três sopra forte (≥ 31 km/h).
  - **7 em cada 10 horas fortes vêm de só duas direções**, norte e sul: o funil aparece nos dados. Em Chicago, são 3 em 10.
- **A capital foi para lá de propósito, mas não por causa do vento.** Em 1863, o Parlamento pediu a capital "in a central position;
  that is to say somewhere on the shores of Cook's Straits", "for the maintenance of its unity". A rivalidade entre as partes da
  colônia ameaçava "the dismemberment of the Colony".
- **E a lista dos comissários tinha uma linha para o vento.** Três comissários das colônias australianas avaliaram cada porto, inclusive
  pela "protection from prevailing winds", e escolheram Wellington por unanimidade (NZ Gazette, 1864).
  - Ninguém usou essa linha até agora. O curto que cita a mesma página da Gazette diz "The report doesn't say why".

**O que derruba o título do adendo:**
- **"O lugar com os ventos mais fortes do mundo" é falso.**
  - A maior rajada medida é a da Barrow Island, na Austrália (408 km/h, 1996; OMM).
  - O lugar mais ventoso ao nível do mar é o cabo Denison, na Antártida (a Divisão Antártica australiana).
- **"A cidade mais ventosa da Terra" também não se segura.** Na nossa medida, Punta Arenas, no Chile, venta mais (27,6 km/h contra
  25,1). E nenhum órgão oficial faz esse ranking.
- **O que se segura:** "a capital mais ventosa das 12 que medimos" e "1,6 vez Chicago" (§4).

**O ajuste:**
1. O título nomeia o país e guarda Wellington (`marca/embalagem.md` §2), sem superlativo: **"Why New Zealand Put Its Capital in the Path
   of the Wind"**.
2. A medida vai na tela.
3. Rapidez: o enxame já está no assunto. São 6 peças em 17 dias, todas sem tração ainda (§2).

Lido entre ~00:02 e ~00:20 de 18/11/2026 (hora de Brasília). Os scripts, as respostas e as saídas estão em
`out/_pautas/video-8/_trabalho/cetico-nz-ventos/`:
- `vidiq.tsv`: as 8 chamadas (40 créditos, no teto) e as linhas que importam;
- `watch.jsonl`: as 6 páginas `/watch` lidas, pelo `../yt_meta.py`;
- `vento_isd.py`, `vento-isd-saida.txt`, `vento-isd.csv` e `vento-isd-log.txt`: o vento médio de 24 aeroportos;
- `vento_direcao.py` e `vento-direcao-saida.txt`: de onde sopra o vento;
- `geo_paralelo.py` e `geo-paralelo-saida.txt`: a terra no paralelo de Wellington e a largura do estreito;
- `commons.py` e `commons-saida.txt`: as categorias do Commons (API, um pedido por vez, User-Agent do canal);
- `pdf_texto.py`, `pdf_pagina.py` e `fontes/`: o texto extraído dos três PDFs oficiais, com o sha256 deles.

Ficaram em `midia/_pautas/video-8/cetico-nz-ventos/`, fora do git:
- os PDFs (o da NIWA é © NIWA) e a página 392 da Gazette rasterizada;
- os 240 arquivos do ISD-Lite (15 MB), em `isd/`.

## 1. Os fatos que seguram o paradoxo e o gancho

| # | Fato | Fonte (lida em 18/11/2026) | Veredito |
|---|---|---|---|
| F1 | O vento médio (média dos 10 min antes de cada hora, 1981–2010): **Wellington Aero 25,8 km/h**; Baring Head 36,1; Paraparaumu 16,2; Wallaceville, no vale do Hutt, 9,1. No alto do Mt Kaukau (425 m + torre de 122 m), "a very high (44 km/hr) average wind speed". | NIWA, *The climate and weather of Wellington*, 2ª ed. (Chappell 2014, Science and Technology Series 65), Tabela 1 e p. 14: https://webstatic.niwa.co.nz/library/NIWAsts65.pdf | **CONFERE**. A nossa medida (§4) dá 25,1 km/h em 2015–2024. |
| F2 | As rajadas: em Wellington Aero, **166 dias por ano com rajada acima de 63 km/h** e 24 acima de 96 km/h. "Spring is generally the windiest season." | NIWA, Tabela 4 e p. 15 | **CONFERE**. Os "178 dias" de um post da MetService (citado na busca) ficaram **NÃO CONFERIDOS**: o blog mudou de endereço, e o link manda para uma página genérica. |
| F3 | O funil: "Winds are often deflected by the ranges, and speed is increased through gaps, such as the Manawatu Gorge, Cook, and Foveaux Straits." "Wellington's proximity to Cook Strait leads to high frequency of strong winds." | NIWA, p. 6 e p. 14 (a numeração impressa) | **CONFERE**. Mas o **"the only gap" do pedido NÃO CONFERE**: a própria NIWA cita três brechas (K4). |
| F4 | O vento que entorta: "the permanent eastward lean of much of the larger vegetation on exposed hillslopes and ridge-tops". | NIWA, p. 14 | **CONFERE**. |
| F5 | O vento de oeste e o mar aberto: "The predominant wind flow over the country is westerly"; "The nearest land mass is the continent of Australia, some 1600 km to the northwest." No paralelo de Wellington (41,29° S), indo para oeste, **a única terra antes da Patagônia é a Tasmânia**, a 2.214 km. Depois dela, são 17.550 km de mar, até o Río Negro, na Argentina, a 20.066 km. | NIWA, p. 6; a nossa conta sobre o Natural Earth 10m (`geo-paralelo-saida.txt`) | **CONFERE COM AJUSTE**. "No land in the way for thousands of km" é falso ao pé da letra: a Tasmânia está no caminho. A frase verdadeira está em §6. |
| F6 | Os recordes do lugar: **Hawkins Hill, 248 km/h** (6/11/1959 e 4/7/1962), "the highest recorded in the North Island (and only 2 km/hr off the highest recorded wind speed in New Zealand)". Kelburn, 198 km/h, e o aeroporto, 187 km/h, ambos em 10/04/1968. | NIWA, Tabela 5 e p. 16 | **CONFERE** |
| F7 | O Wahine: "the worst storm in New Zealand's history"; "the winds were the strongest yet to be recorded in any built-up area in New Zealand"; "The interisland ferry Wahine sank in Wellington Harbour during the storm, with the loss of 51 lives. Three other people died in Wellington." | NIWA, p. 21 | **CONFERE**. Os 53 da "official count" (que o Deadwater Chronicles cita) ficaram **NÃO CONFERIDOS**: o nzhistory.govt.nz deu 403. |
| F8 | A capital. Em 25 e 30/11/1863, as duas Casas pediram ao governador a capital "in a central position; that is to say somewhere on the shores of Cook's Straits", por ser "imperatively necessary for the good government of the whole Colony, and for the maintenance of its unity". A demora alimentava "feelings of rivalry and jealousy between different parts of the Colony", que ameaçavam "at no distant period, the dismemberment of the Colony". | *New Zealand Gazette*, 1864, nº 40, p. 391, no arquivo da biblioteca da Victoria University of Wellington: https://library.victoria.ac.nz/databases/nzgazettearchive/pubs/gazettes/1864/1864%20ISSUE%20040.pdf | **CONFERE**. É geopolítica de verdade: a capital foi deslocada para segurar a colônia inteira. |
| F9 | Os comissários: Joseph Docker (Nova Gales do Sul), Sir Francis Murphy (Victoria) e Ronald Campbell Gunn (indicado pelo governador da Tasmânia), confirmados por Grey em 29/07/1864. **O 2º critério da lista: "character of the Harbor; the approaches; depth of water; nature of anchorage ground; protection from prevailing winds; rise and fall of tides; currents".** O 1º: "The central position of the site". O relatório, de Nelson, 3/10/1864: "unanimous conclusion that WELLINGTON, IN PORT NICHOLSON, is the site upon the shores of Cook's Strait which presents the greatest advantages". | NZ Gazette 1864, nº 40, p. 391–392 (o OCR embaralhou o critério; li a página rasterizada, `gazette-p392.png`) | **CONFERE**. Eram colônias, não "a Austrália", que só se federou em 1901 (K6). |
| F10 | O Parlamento sentou em Wellington pela primeira vez em 26/07/1865. | NZHistory (403) e Te Ara (403) | **NÃO CONFERIDO**: os dois sites do Ministério da Cultura recusaram a leitura. A data só veio no resumo da busca. |
| F11 | "Ilha Sul separatista, por causa do ouro" como motivo da mudança. | — | **NÃO CONFERIDO** na fonte primária. A Gazette fala de "rivalry and jealousy between different parts" e de "dismemberment", sem nomear a Ilha Sul. Ler no navegador do app (Te Ara, NZHistory) antes de dizer na tela. |
| F12 | Os recordes do mundo: **"Maximum gust 113.2 m/s (253 mph; 220 kt)", 10/04/1996, Barrow Island, Austrália.** No hemisfério norte, 103,3 m/s (231 mph), 12/04/1934, no Mt. Washington. | OMM, *Records of Weather and Climate Extremes* (tabela de 31/07/2025): https://wmo.int/sites/default/files/2025-07/Table_Records_25Jul2025.pdf | **CONFERE**. Derruba o título do adendo (§6.1). |
| F13 | O lugar mais ventoso ao nível do mar: o cabo Denison, na baía Commonwealth (Antártida), com "an annual average daily maximum wind speed of 71 km per hour (the windiest place on earth at sea level)". | Divisão Antártica Australiana, Mawson's Huts, *Cape Denison landscape*: https://mawsonshuts.antarctica.gov.au/national-heritage/the-physical-remains/cape-denison-landscape/ | **CONFERE** |
| F14 | "Wellington is the windiest city in the world." | Nenhum órgão faz esse ranking. A NIWA o diz só na descrição de um curto de 2017 ("explains why Wellington is the windiest city in the world"), sem número. | **NÃO CONFERE** como "city on Earth": Punta Arenas venta mais na nossa medida (§4). **CONFERE** como "the windiest of the 12 national capitals we measured" e "1.6× Chicago". |
| F15 | O estreito de Cook tem ~22 km na parte mais estreita. | Te Ara (403) | **NÃO CONFERIDO** na fonte. A nossa conta, na costa generalizada do Natural Earth 10m, dá 19,5 km (do cabo Terawhiti à ilha Arapaoa). Na tela: "about 20 km (12 mi)", até a LINZ ser lida. |
| F16 | As licenças das medidas: o Global Wind Atlas é "Creative Commons Attribution 4.0"; os dados da NOAA no NODD "are open to the public and can be used as desired", com pedido de atribuição e sem sugerir endosso. | World Bank Data Catalog, GWA: https://datacatalog.worldbank.org/search/dataset/0038957/global-wind-atlas; AWS Open Data, NOAA ISD: https://registry.opendata.aws/noaa-isd/ | **CONFERE** |

**As palavras fortes demais:**
- **"the windiest city in the world"**: falso contra Punta Arenas (F14). A frase verdadeira: "the windiest capital city we measured", ou
  "its wind averages about 60 percent faster than Chicago's".
- **"the only gap in the mountains"**: falso, porque a NIWA cita três (F3). A frase verdadeira: "the strait is the gap between the North
  Island's ranges and the South Island's, and the capital sits at its mouth".
- **"no land in the way for thousands of kilometers"**: a Tasmânia está no caminho (F5). A frase verdadeira: "Follow Wellington's line of
  latitude west, and the only land before South America is Tasmania."
- **"Australians picked the capital"**: eram três colônias, 37 anos antes da federação (F9).
- **"They chose the windiest place on purpose"**: falso. Escolheram o centro, pela unidade (F8). O vento estava na lista como abrigo do
  porto (F9), e o porto de Port Nicholson é abrigado. O paradoxo é esse, e deve ser dito assim.

## 2. A colisão (vidIQ: 40 créditos, no teto)

O saldo foi de 5.226 para 5.186. Foram seis buscas no YouTube e duas de palavra-chave (`vidiq.tsv`). As views são das páginas `/watch`,
lidas às ~00:10.

**Os 5 mais próximos do ângulo:**

| # | Título | Canal | Inscritos | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|---|
| 1 | The Windiest Capital on Earth | City Chronicles | 83,1 mil | 68 | 15/11/2026 | 9:50 | **No título, com qualquer versão "windiest capital".** O conteúdo é guia de cidade (Te Papa, Weta, bondinho), com uma linha sobre o funil ("Cook Strait funnels the Roaring Forties") e "average wind speed is about 27 km/h". Não conta o porquê da capital. |
| 2 | What Happened in This Strait Still Haunts New Zealand | Deadwater Chronicles | 4 | 50 | 12/11/2026 | 27:21 | **No candidato 3 (o Wahine), inteiro**, com o capítulo "Where the Wind Has No Brakes" (os Roaring Forties e o funil do estreito). |
| 3 | Why is Wellington New Zealand's capital, not Auckland? | Beautiful New Zealand | 211 | 6 | 12/11/2026 | 2:54 | **Na metade da capital, com a mesma fonte** (a Gazette de 1864, p. 392). O curto dele, "Who picked New Zealand's capital?" (17/11, 667 views), diz "The report doesn't say why". Não viu a linha do vento. |
| 4 | Why is Wellington often called the windiest city on Earth? | Lay of the Land | 720 | 1.517 | 01/11/2026 | 1:07 | **No porquê do vento**, em curto. |
| 5 | This City's Geography Is a Challenge. People Love It Anyway. | Urban Atlas | 215 mil | **117.869** | 15/10/2026 | 2:48 | **É o estouro que puxou o enxame**: a geografia de Wellington, um mês antes das peças de 1 a 4. |

**Também perto:**
- "Why Did Australians Help Pick New Zealand's Capital?" (History World Atlas, 49 inscritos, 15/11, 1.215 views, curto);
- "The Windiest Airport on Earth" (Signal & Terrain, 20 inscritos, 12/11, curto: "where the Cook Strait funnels the Roaring Forties");
- "10 Weird Facts About Wellington, New Zealand" (imperatur, 350 mil inscritos, 28/08/2026, 143.579 views, 11:42), com o capítulo "Why
  Wellington became New Zealand's capital";
- "Why is Wellington So Windy?" (NIWA, 2017, 7.788 views, 22 s): o órgão oficial, num curto.

**Sem data, por views** ("windiest city in the world"):
- o primeiro lugar é da BBC sobre o Mt. Washington ("The windiest place on planet Earth", 2014, 16,9 mi);
- depois vêm os vlogs de viagem indianos com "Windiest City" no título: Passenger Paramvir (1,53 mi, 2024), yatri doctor (333 mil),
  Indian Backpacker (265 mil, 07/2026), Uma Telugu (243 mil), Navdeep Brar (217 mil, 07/2026);
- e "Top 10 Windiest Cities in the World" (Our Kite Life, 2020, 40 mil, 9:41), com Punta Arenas e Río Gallegos na lista.

**O longo explicador bem feito sobre "por que venta" e "por que a capital está no vento" não existe.** O que existe em 2026 tem de 6 a
1.517 views. Mas o enxame está em cima:
- **são 6 peças em 17 dias** (de 01/11 a 17/11), contando as de 1 a 4, o History World Atlas e o Signal & Terrain;
- um canal de 83 mil já usou o título "windiest capital";
- e ontem saiu o maior estouro do assunto: "New Zealand Is About to Have a VERY Strange Summer..." (Neil Duncan, **416 inscritos, 69.623
  views em ~1 dia**, 20:41), que "follow[s] the westerly wind across New Zealand", com o nor'wester sobre os Alpes. É prova de interesse e
  também a isca do próximo enxame (K7).

## 3. O potencial real, pela régua

| # | Critério | `nz-ventos` |
|---|---|---|
| 1 | O nome é buscado | **Pelo país, sim:** "new zealand" tem 246.470 buscas/mês (volume 80, concorrência 58), mas os mercados do topo são o Vietnã (21 %), a Índia (12 %) e Bangladesh (7 %), o que é busca de imigração e viagem. **Pelo ângulo, não:** "windiest city in the world" fica abaixo de 750/mês (volume 0, concorrência 40). "wellington" não foi medido. |
| 2 | Prova recente de interesse | **Sim, forte.** O Urban Atlas teve 118 mil em outubro, com a geografia de Wellington. O Neil Duncan, 69,6 mil em um dia, com o vento de oeste da Nova Zelândia. O Drop A Pin, 1,67 mi em junho de 2026 com "What's the southernmost capital in the world?". Os curtos do vendaval de 21/10/2025 em Wellington tiveram 343 mil (Stuff), 288 mil (7NEWS) e 92 mil (FOX 9). |
| 3 | O vídeo longo bem feito não existe | **Ainda não existe**, mas o lugar está sendo ocupado agora, por canais minúsculos (§2). |
| 4 | O paradoxo em 3 frases, visível no mapa | **Sim**: a cordilheira de ponta a ponta, a brecha de ~20 km, as setas do vento se espremendo e a capital vermelha na boca do funil. |
| 5 | A geografia explica o porquê | **Sim, inteira**: o vento de oeste, as serras em NE–SW, as brechas, o funil (F3–F5). E a capital é geopolítica escrita na Gazette (F8). |
| 6 | Uma medida nossa, de dado aberto | **Sim** (§4): o ranking de 24 aeroportos, as duas direções do funil e a linha da Tasmânia. Os números soltos ("27 km/h", "beats Chicago") já circulam nos curtos. A comparação medida e o funil nos dados, não. |

- **O enxame:** já chegou, sem tração, em 17 dias, puxado pelo estouro do Urban Atlas (15/10). Pela régua da busca anterior, o próximo
  passo dele é o explicador longo. Se a pauta for, tem de ir logo.
- **13 a 16 min, em 3 atos, sem linguiça:**
  1. **O vento.** Como é, os números medidos, o Wahine e os recordes, e onde ficam de verdade os recordes do mundo (Barrow, Denison),
     contado com honestidade.
  2. **O porquê.** O paralelo com só a Tasmânia no caminho, as serras e as três brechas, o funil de ~20 km, as duas direções e as
     árvores inclinadas.
  3. **A capital.** A Auckland de 1841, a rivalidade, as resoluções de 1863, os três comissários e a linha do vento na lista, Port
     Nicholson e 1865. Fecha com o que isso custa hoje: o aeroporto, o estreito como dobradiça do país, as balsas e o cabo.
  - O material sustenta os três atos; o Wahine é um segmento, não o vídeo (o Deadwater já fez o vídeo dele).

## 4. A nossa versão: a medida (conta preliminar, feita)

**O vento médio a 10 m, 24 aeroportos, NOAA ISD-Lite, 2015–2024** (`vento-isd-saida.txt`). Os dados são horários, com a calmaria
contada como 0. A "média equilibrada" é a média das 24 médias de cada hora do dia: ela corrige a estação que reporta mais de dia, e
deu igual em todas.

| Aeroporto | km/h | mph | Horas ≥ 31 km/h | Horas ≥ 50 km/h | Cobertura |
|---|---|---|---|---|---|
| Punta Arenas (Chile) | **27,6** | 17,2 | 36,3 % | 10,37 % | 88 % |
| **Wellington** | **25,1** | 15,6 | **34,4 %** | **3,39 %** | 99 % |
| St. John's (Terra Nova) | 24,8 | 15,4 | 29,3 % | 4,41 % | 99 % |
| Río Gallegos (Argentina) | 22,7 | 14,1 | 26,5 % | 5,74 % | 88 % |
| Dodge City (Kansas) | 20,0 | 12,4 | 15,6 % | 1,01 % | 100 % |
| Dublin | 18,5 | 11,5 | 10,1 % | 0,56 % | 99 % |
| Nova York JFK | 18,2 | 11,3 | 11,2 % | 0,45 % | 100 % |
| Reykjavik | 17,6 | 10,9 | 13,9 % | 1,74 % | 99 % |
| Auckland | 16,5 | 10,3 | 9,5 % | 0,31 % | 99 % |
| **Chicago O'Hare** | **15,5** | 9,6 | 4,8 % | 0,09 % | 100 % |
| Christchurch | 14,2 | 8,8 | 5,9 % | 0,11 % | 99 % |
| Washington Reagan | 13,5 | 8,4 | 3,2 % | 0,05 % | 100 % |
| Canberra | 13,2 | 8,2 | 5,1 % | 0,04 % | 99 % |

As outras 11 (Cidade do Cabo, Copenhague, Amsterdã, Boston, San Francisco, Hobart, Ottawa, Londres, Montevidéu, Buenos Aires, Oslo) ficam
entre 11,2 e 18,5 km/h. A tabela inteira está no `vento-isd-saida.txt`.

- **Wellington contra Chicago: 1,62 vez** na média. As horas com vento médio de 50 km/h ou mais são 3,39 % contra 0,09 %: **cerca de 300
  horas por ano, contra 8.**
- **Entre as 12 capitais nacionais da amostra, Wellington é a primeira, com folga** (25,1 km/h; a segunda, Dublin, tem 18,5). Com a Cidade do Cabo, sede do Parlamento da África do Sul, também 18,5, são 13, e a ordem não muda.
- **Entre as cidades, não é a primeira.** Punta Arenas tem 27,6 km/h, e St. John's empata (24,8).
  - A estação de Punta Arenas fica no aeroporto, ~20 km ao norte da cidade, na estepe; a de Wellington, no istmo de Rongotai, dentro da
    cidade. A exposição muda a medida (K8).
  - Mesmo assim, "windiest city on Earth" não pode ir à tela.
- **O funil nos dados** (`vento-direcao-saida.txt`):
  - em Wellington, o vento vem do norte (de 345° a 15°) em 36 % das horas, e do sul (de 165° a 195°) em 17 %;
  - esses dois setores de 30° levam **71 % das horas fortes**;
  - em Chicago, os dois setores mais comuns levam 28 %; em Auckland, 53 %; em St. John's, 45 %.
  - A NIWA explica: "In the hill country, winds tend to flow along the line of valleys", e o estreito "funnel[s] the low level airstreams".
- **A linha da Tasmânia** (`geo-paralelo-saida.txt`): no paralelo de 41,29° S, a terra soma 4,3 % da volta ao mundo. Indo para oeste de
  Wellington, vêm o mar da Tasmânia (2.214 km), a Tasmânia (299 km), **17.550 km de mar** e a Patagônia.
- **A frase do gancho:** "the wind here averages about 60 percent faster than in Chicago, the 'Windy City'". **A frase do porquê:** "7
  of every 10 strong-wind hours at the airport come from just two directions".

**O que falta para a produção:**
- **O mapa do funil pelo Global Wind Atlas (CC BY 4.0).** O raster da Nova Zelândia a 10 m (v4) tem 181 MB e não foi baixado; se for,
  fica em `midia/`.
- **A varredura das ~195 capitais nacionais**, um aeroporto por capital, com o mesmo `vento_isd.py`. Só ela segura um título com
  "the world's windiest capital".

## 5. O material

- **Mapa com geometria real:**
  - o Natural Earth (domínio público) dá a costa e o paralelo;
  - a LINZ dá a costa fina e o relevo da Nova Zelândia (a licença CC BY 4.0 citada por outro canal **não foi lida**);
  - o GWA dá o campo do vento, com as brechas acesas.
  - O relevo amarelo da miniatura pode vir do mesmo caminho do vídeo 7 (o ASTER GDEM pela GIBS).
- **Satélite aberto:** no Commons, a busca "Cook Strait MODIS" acha 58 arquivos, como "New Zealand's Cook Strait (MODIS 2024-10-06)",
  da NASA, em domínio público. Há Landsat ("Turbid Waters Surround New Zealand").
- **Acervo livre no Commons:**
  - "Cook Strait" tem 99 arquivos e 16 subcategorias (balsas, o farol de Karori, as cabeças da costa);
  - "Wellington Harbour", 392; o aeroporto, 31; "Slope Point", 13 (com as árvores torcidas pelo vento sul);
  - há a subcategoria "Foehn wind in New Zealand" (o arco do nor'wester) e 7 arquivos do Wahine, com licenças não lidas;
  - os acervos do Alexander Turnbull e do Archives NZ têm fotos de 1968, a conferir uma a uma.
- **Documentos:**
  - a Gazette de 1864 é domínio público, e a página 392 se lê inteira na imagem;
  - o relatório da NIWA é © NIWA (hoje Earth Sciences New Zealand, nome que só veio na busca): os números entram com crédito, mas as
    páginas não vão à tela sem ler a licença.
- **Dá para 13 a 16 min:** sim. O que falta é imagem do vento em si (a rua, as árvores), e o banco pago cobre isso na caça.

## 6. O título e o gancho que eu defendo

### 6.1 O título do adendo do Lucas, testado

1. **A verdade.**
   - **"Por que este é o lugar com os ventos mais fortes do mundo"** é falso. A maior rajada é a da Barrow Island (408 km/h, F12). O
     lugar mais ventoso ao nível do mar é o cabo Denison (F13). Em Wellington, o recorde é de 248 km/h (F6), e o vento médio é um terço
     do de Denison.
   - **"Why This Is the Windiest City on Earth"** cai contra Punta Arenas (§4), e nenhum órgão faz o ranking (F14).
   - **"Why the World's Windiest Capital Is Here"** vale nas 12 capitais medidas, com folga. Para ir ao título, falta a varredura de
     todas (§4).
2. **A busca.**
   - "windiest city in the world" fica abaixo de 750 buscas por mês: o título sem o nome não pega busca que valha.
   - "windiest place on earth" ficou **NÃO MEDIDO**: o teto de 40 créditos já tinha acabado quando o adendo chegou. A página dessa busca
     é da BBC (16,9 mi, sobre o Mt. Washington) e de dezenas de curtos, e Wellington não pode dizer que é "o lugar" (F12, F13).
   - Sem "New Zealand" no título, a porta da busca pelo país fecha. O título viveria do clique, como o do Geoff.
3. **A colisão.**
   - **"Why this is officially the windiest city on Earth."** é praticamente o mesmo título (GLOBE Trotting ADVENTURERS, 3 mil
     inscritos, 19/06/2026, 998 views, curto).
   - Há também "The Windiest City in the World" (Gabe Cataldi, 3,38 mi de inscritos, 16/04/2026, 88.302 views), "The Windiest City on
     Earth!" (22/12/2025), "Welcome to Wellington: Earth's Windiest City" (16/09/2026), "The Windiest City On Earth Is INSANE!"
     (04/02/2026) e "The Windiest Capital on Earth" (City Chronicles, 15/11/2026, longo).
   - Sem data, "windiest place on earth" é da BBC e de curtos de 20 a 200 mil (Fact2Fact, FACTUNE, Obviously Shorts, befact em
     03/2026).
   - **Qualquer título com "windiest" colide.**

**A forma do Geoff funciona se disser algo verdadeiro e novo.** A versão que se segura nomeia o país, que o espectador conhece, e guarda
a cidade (`marca/embalagem.md` §2, "O título nomeia o que o espectador já conhece… e guarda o que o vídeo revela").

### 6.2 O que eu defendo

- **Título:** **"Why New Zealand Put Its Capital in the Path of the Wind"** (55 caracteres).
  - Nomeia o país buscado e esconde Wellington. Não usa superlativo, não colide com nada que a busca achou e se paga nas 3 primeiras
    frases.
- **Alternativas:**
  - "Why New Zealand's Capital Is Windier Than Chicago" (49): é medido (§4) e brinca com o mito da "Windy City". O "beats Chicago" já
    aparece em curtos, mas como frase solta, sem medida.
  - "Why This Country Put Its Capital in a Wind Tunnel" (49): a forma do Lucas, sem nome nenhum e verdadeira. Perde a busca pelo país.
  - Só depois da varredura das capitais: "Why the World's Windiest Capital Is Here" (40).
- **Gancho** (3 frases, 45 palavras; "prevailing winds" é a palavra da Gazette): "In 1864, three men from the Australian colonies chose New Zealand's capital, with a checklist that asked
  how each harbor was sheltered from prevailing winds. They chose a harbor where the wind now averages about 60 percent faster than
  in Chicago. They had a reason."
- **Miniatura:**
  - a Nova Zelândia em relevo amarelo, sobre o mar azul;
  - setas brancas grossas vindas do oeste, do mar da Tasmânia, se espremendo na brecha entre as ilhas;
  - **o estreito de Cook em ciano**, a brecha;
  - **Wellington em vermelho**, na boca do funil;
  - na caixa preta, **"WHY HERE?"**; a B, **"WIND GAP"**;
  - **nunca "WINDIEST"** (F12–F14).

## 7. Os pontos

- **K1 · GRAVE · O enxame já está no assunto.**
  - São 6 peças em 17 dias: o City Chronicles, o Deadwater, o Beautiful New Zealand, o Lay of the Land, o History World Atlas e o
    Signal & Terrain.
  - Uma delas tem quase o título do ângulo ("The Windiest Capital on Earth", num canal de 83 mil), e outra usa a mesma fonte primária da
    capital (a Gazette de 1864).
  - Nenhuma pegou (de 6 a 1.517 views) nem junta o vento, a capital e uma medida, mas o próximo pode juntar. É o estouro do Urban Atlas
    (118 mil, 15/10) sendo copiado. Se a pauta for, a produção começa já.
- **K2 · GRAVE · O superlativo não se segura** (o título do adendo e qualquer "windiest city").
  - O "lugar com os ventos mais fortes" é a Barrow Island ou o cabo Denison (F12, F13).
  - A "cidade mais ventosa" perde para Punta Arenas na nossa medida (§4).
  - Corrige-se no título (§6.2). Na tela vale "the windiest of the capitals we measured" e "1.6× Chicago", com a fonte (NOAA ISD).
- **K3 · MÉDIO · A busca do ângulo é pequena.**
  - "windiest city in the world" fica abaixo de 750/mês.
  - O nome buscado é "new zealand" (246 mil/mês), mas puxado por Vietnã, Índia e Bangladesh, e a busca por "Wellington" + "windiest" é
    dos vlogs de viagem indianos, de 200 mil a 1,5 mi.
  - O Big Sur veio da busca pelo nome; aqui o nome é grande demais e disputado, e o ângulo, pequeno. "wellington" não foi medido.
- **K4 · MÉDIO · "the only gap" é falso.** A NIWA cita o Manawatu Gorge, o estreito de Cook e o de Foveaux (F3). A cena do mapa mostra as
  três e diz por que a de Cook é a que importa: a capital está na boca dela.
- **K5 · MÉDIO · O vento "de oeste" chega a Wellington de norte e de sul.**
  - É a melhor cena do vídeo, mas pede cuidado: no aeroporto, 36 % das horas sopram do norte e 17 % do sul, e quase nada do oeste.
  - O roteiro tem de mostrar o vento de oeste virando norte no funil e no vale, ou o espectador atento vê a contradição. A NIWA dá a
    base (F3 e p. 14), mas o desenho exato do desvio pede o campo do GWA ou um artigo científico, que não foi lido.
- **K6 · MÉDIO · A geopolítica é real, mas modesta, e um pedaço dela não foi lido.**
  - A Gazette segura a "unidade" e o "desmembramento" (F8).
  - A Ilha Sul separatista e o ouro de Otago (F11), e a data de 26/07/1865 (F10), ficaram NÃO CONFERIDOS: NZHistory e Te Ara deram 403.
    Vão ao navegador do app antes do roteiro.
  - "Australians" é anacrônico: eram três colônias.
- **K7 · LEVE · O estouro do Neil Duncan** (69,6 mil em um dia, 416 inscritos, o vento de oeste e o El Niño de 2026) prova o interesse,
  mas vai puxar o enxame para "o vento da Nova Zelândia" nos próximos dias. Ele mesmo não colide: é a previsão do verão, não Wellington
  nem a capital.
- **K8 · LEVE · A medida tem limites.**
  - São estações de aeroporto, com exposições diferentes (Punta Arenas fora da cidade, Wellington no istmo).
  - A NOAA chama o ISD-Lite de produto para "rough climatological averages".
  - Faltaram dois anos baixados (Copenhague 2021 e Río Gallegos 2024, conexão cortada), e o ISD parou em agosto de 2025.
  - A ordem do topo não muda com nada disso. O GWA (modelo) seria a segunda medida.
- **K9 · LEVE · Os números da costa e do Wahine.** A largura do estreito (~22 km) e os 53 mortos da contagem oficial não foram lidos na
  fonte (Te Ara e NZHistory recusaram). Na tela: "about 20 km" e "51" (a NIWA), até a leitura.

**Por que 6,0:**
- os fatos se seguram, com quatro frases trocadas (§1);
- a geografia explica de verdade, e a medida é nossa e mostra o funil nos dados;
- a capital é geopolítica escrita na fonte primária, com uma linha (o vento na lista) que ninguém viu;
- cinco dos seis critérios passam, e o sexto (a busca) passa pela metade.
Fica abaixo das melhores do canal (6,5 a 7,5) por dois motivos: o enxame está circulando o assunto agora, e a palavra que mais
clicaria ("windiest") não pode ser usada. Cai para DERRUBADO se, antes da produção, sair um explicador longo que junte o vento e a
capital, ou se a Sala não puder começar logo.
