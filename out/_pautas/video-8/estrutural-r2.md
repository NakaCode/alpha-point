# Vídeo 8: o gerador estrutural, 2ª rodada (17/11/2026)

**O pedido.** `out/_pautas/video-8/pedido-estrutural-r2.md` (lido inteiro, com o `pedido-estrutural.md` e o `estrutural.md` da 1ª rodada). A
lição da 1ª rodada: quatro dos cinco melhores caíram porque um curto viral ou uma notícia tinha chegado antes; ficou de pé só a Arizona Strip, uma
**esquisitice de geografia de um lugar famoso, que se vê no mapa, sem notícia nem curto viral por trás**. Esta rodada procura só esse tipo.

**Como foi feito, e os limites.**
- 30 candidatos. Cada um passou pela busca da web restrita a youtube.com, com 2 a 4 frases do ângulo. Dos vídeos que importavam, li a data, as views
  e o canal na página pública `/watch`, um pedido por vez, pelo `out/_pautas/video-8/_trabalho/yt_meta.py` da 1ª rodada (respostas brutas em
  `_trabalho/r2/lote-a.jsonl` a `lote-j.jsonl`). Os números são de 17/11/2026, entre ~21h40 e ~22h05.
- A régua do pedido: caiu quem tem **vídeo com o mesmo ângulo e mais de 50 mil views**, ou **3 ou mais vídeos no ângulo em 2026**, ou curto viral /
  notícia quente sobre o ângulo nos últimos 3 meses. Onde a decisão foi de julgamento (ângulo vizinho), digo.
- **Nada foi medido no vidIQ.** A busca da web mostra o que existe, não prova o que não existe. As "buscas prováveis" são palpite meu.
- **Fato** é só o trecho lido na origem, com a URL, tudo em 17/11/2026 (hora de Brasília). O resto vai **a confirmar**.
- **Recusaram leitura automática, e não foram contornados** (os fatos deles ficam NÃO CONFERIDO): michigan.gov (DNR e EGLE, 403),
  dnr.state.mn.us (403), seagrant.umn.edu (403), supreme.justia.com (403, duas URLs; li as mesmas decisões no LII de Cornell), pubs.usgs.gov (403),
  sanparks.org (403). Não responderam ou falharam: epic2-clone.awi.de (tempo esgotado; li o mesmo texto da IHO no VLIZ), prh.noaa.gov (DNS),
  project.geo.msu.edu (certificado vencido), e um PDF do hawaii.edu veio vazio.
- Os PDFs lidos (PyMuPDF, `_trabalho/pdf_grep.py`) estão em `_trabalho/r2/`. O PDF do Isle Royale (6,8 MB) foi para
  `midia/_pautas/video-8/isro-foundation.pdf` (fora do git), pela regra dos 5 MB.
- As notas são duras (as melhores pautas do canal tiveram 6,5 a 7,5; a Arizona Strip ficou em 6,0 no cético). Nenhuma passa de 6,5.

**O que a busca mostrou antes de tudo.**
- **O "molde da cidade que não faz sentido" já pegou as cidades grandes.** Atlanta ("Why Atlanta Makes No Sense as a U.S. City", GeoLogic, 24/06/2026,
  126.470), Seattle (44.681, 02/09/2026), Denver (dois títulos do mesmo molde). Cidade grande com uma esquisitice de relevo é terreno ocupado.
- **"We Drained X" e "Sitting on the Most Valuable Land" estão varrendo os lugares famosos.** O Long Island, que parecia livre pelo lado das morainas,
  caiu para um vídeo de 27/09/2026 com 176.420 views cuja descrição abre exatamente com a moraina. Os Grandes Lagos tiveram "We Drained All Five Great
  Lakes" em 02/11/2026 (118.002).
- **O que sobra livre é o que só aparece no mapa, não na foto**: uma divisa que não acompanha o rio, uma ilha do lado errado, um pico de onde a água
  vai para três mares, lagos que param numa linha. São ângulos que o curto viral não pegou, porque precisam de mapa para fazer sentido.

---

## Os 10 desenvolvidos, pela nota

| # | Lugar (`slug`) | Título de trabalho | Car. | Nota |
|---|---|---|---|---|
| 1 | Os lagos naturais e a linha do gelo (`linha-dos-lagos`) | Why Minnesota Has 10,000 Lakes and Texas Had to Build Its Own | 61 | **6,5** |
| 2 | O Mississippi e as divisas que ficaram para trás (`mississippi-divisas`) | Why the Mississippi River No Longer Matches Its State Lines | 59 | **6,5** |
| 3 | Isle Royale (`isle-royale`) | Why Michigan Owns an Island 14 Miles From Canada | 48 | **6,0** |
| 4 | O pico dos três mares, Glacier (`triplo-divisor`) | Why One Peak in Glacier National Park Drains to Three Oceans | 60 | **6,0** |
| 5 | White Sands e o campo de mísseis (`white-sands`) | Why White Sands Sits Inside a Missile Range | 43 | **5,5** |
| 6 | Michigan-Huron, um lago só (`michigan-huron`) | Why Lake Michigan and Lake Huron Are Actually One Lake | 54 | **5,5** |
| 7 | As dunas do lago Michigan (`dunas-michigan`) | Why Lake Michigan's Biggest Dunes Are All on One Side | 53 | **5,5** |
| 8 | As Thousand Islands (`mil-ilhas`) | Why the U.S.-Canada Border Zigzags Through the Thousand Islands | 63 | **5,5** |
| 9 | O deserto do Okanagan (`okanagan`) | Why Canada Has a Desert (and It Grows Wine) | 43 | **5,0** |
| 10 | A chuva do Havaí (`havai-chuva`) | Why Hawaii Gets 404 Inches of Rain in One Place and 8 in Another | 64 | **4,5** |

Os caracteres foram contados por `_trabalho/r2/titulos_r2.py`.

---

## 1 · Os lagos naturais e a linha do gelo (`linha-dos-lagos`) · **6,5**

- **Título de trabalho:** "Why Minnesota Has 10,000 Lakes and Texas Had to Build Its Own" (61).
  - Variantes: "Why America's Natural Lakes Stop at One Line" (44); "Why Texas Has Hundreds of Lakes but Almost No Natural Ones" (58).
- **O paradoxo:** os EUA têm dezenas de milhares de lagos naturais, mas no mapa eles param numa linha que atravessa o país (a borda do último manto de
  gelo); ao sul dela, o Texas, com quase 200 grandes lagos, teve de construir quase todos.
- **O gancho:** "Minnesota has more than ten thousand natural lakes. Texas has close to two hundred big lakes, and almost every one was built by
  people. On a map of America's natural lakes, they stop along a single line, so why there?" (42 palavras; o "close to two hundred" é a confirmar)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "Most of the natural lakes are located within the limit of continental glaciation and have a natural history seated in the Ice Age." Lakeline
     (NALMS), inverno de 2012, "Great Lakes States' Lakes: An Ice Age Legacy" (Brown, Luman e Shilts):
     https://www.nalms.org/wp-content/uploads/2018/09/32-4-7.pdf (o mesmo texto cita a Driftless Area, a parte do Wisconsin que o gelo não cobriu,
     como exceção sem lagos).
  2. O TWDB, a agência de água do Texas: "Lake Caddo is one of Texas' few non-oxbow natural lakes"; o nível foi alterado por "a dam constructed by
     the Gulf Refining Corporation near Mooringsport, Louisiana in 1914". https://www.twdb.texas.gov/surfacewater/rivers/reservoirs/caddo/index.asp
  3. O TPWD (parques do Texas): "The raft disrupted river flow and water spilled into Louisiana's Cypress Valley, forming a lake around 1800"; "The
     Great Raft consisted of uprooted trees piled in the river for over 80 miles"; Shreve a removeu de 1832 a 1839; a barragem de hoje é de 1971.
     https://tpwd.texas.gov/state-parks/caddo-lake/history
  4. A Brazos River Authority (inverno de 2009): "Texas was not blessed with a wealth of natural lakes"; "Only one, Caddo in East Texas, was naturally
     created with a dam added in the early 20th century." https://brazos.org/About-Us/News/News-Room/Resource-Library/Flood-Control-vs-Water-Supply-vs-Recreation
  - **A confirmar:** os 11.842 lagos de 10 acres ou mais de Minnesota (a página do DNR recusou, 403; o número veio do resumo da busca); os ~188
    reservatórios grandes do Texas (só fonte secundária); o "only one" é um **mito parcial** (o TWDB diz "few non-oxbow": há meandros abandonados,
    as resacas do vale do Rio Grande e as playas das High Plains), e o roteiro tem de dizer isso.
- **A medida nossa** (dado aberto, conta a fazer):
  - O NHD do USGS (National Hydrography Dataset): os corpos d'água de tipo LakePond (390) contra Reservoir (436), de 10 acres ou mais, por estado.
  - Sobre ele, o limite do último gelo (o mapa de limites glaciais do USGS) e a conta: **a fração dos lagos naturais dos 48 estados que fica ao norte
    da linha** (o NALMS diz "most"; espero acima de 80 %), e a razão natural/reservatório em Minnesota e no Texas.
  - O mapa que nasce daí é a miniatura e o fio do vídeo: os pontinhos azuis param na linha.
- **Os 3 atos** (~14 min):
  1. O mapa: os lagos param numa linha; Minnesota de um lado, o Texas do outro; a Driftless Area, o buraco sem lagos no meio do gelo.
  2. O porquê: o gelo que cavou bacias, as morainas que represaram, os blocos de gelo que viraram lagos (kettles); ao sul, os rios que drenam tudo.
  3. O Texas: o único lago grande feito pela natureza (por uma jangada de troncos de 80 milhas), a corrida às represas no século XX e o estado que
     vive de lagos construídos.
- **A miniatura:** os EUA em relevo amarelo; os lagos naturais como pontos ciano, densos no norte; a linha do gelo em vermelho grossa; o Texas com
  contorno branco e quase vazio; na caixa preta, "STOPS HERE" (a B: "10,000 vs 1").
- **As buscas prováveis** (não medido no vidIQ): "why does minnesota have so many lakes", "natural lakes in texas", "texas only natural lake",
  "caddo lake", "why are there no natural lakes in the south", "land of 10,000 lakes".
- **A concorrência** (os 3 mais próximos):
  1. "The Science Behind Minnesota's 10,000 Lakes" (GeologyHub, 402 mil inscritos, 26/07/2024, **23.287**, 4:10): só Minnesota, sem a linha.
  2. "Minnesota's Lakes Are Hiding Something Nobody Talks About" (Across The Globe, 309 mil, 27/05/2026, **166.184**, 36:11): lista de 50 fatos dos
     lagos de Minnesota; o ângulo é outro (fatos soltos), mas o tema "lagos de Minnesota" já rendeu em 2026.
  3. "Texas' Only Natural Lake Has a WILD History" (Two Chicks With Hiking Sticks, 18/06/2026, 377, 28:26) e o curto "Texas' Only Natural Lake?"
     (Explaining Our Past, 04/03/2026, 995): o lado do Texas, como viagem e curiosidade.
  - Nenhum com a linha que corta o país. Em 2026, 3 vídeos tocam em pedaços do tema (dois do Texas, um de Minnesota), nenhum no ângulo inteiro.
- **Os riscos:** o mito do "único lago natural" (tem de ser desmontado com cuidado); a lista de 166 mil de maio puxa a busca "minnesota lakes"; o
  vídeo depende de um mapa nacional bem feito (o NHD é grande); a palavra "built" tem de valer para os grandes, não para todo lago.
- **A nota: 6,5.** O mapa é o paradoxo, os dois nomes são muito buscados, a medida é nossa e nunca foi mostrada assim. Não sobe porque metade do tema
  (Minnesota) já tem vídeo e lista em 2026.

## 2 · O Mississippi e as divisas que ficaram para trás (`mississippi-divisas`) · **6,5**

- **Título de trabalho:** "Why the Mississippi River No Longer Matches Its State Lines" (59).
  - Variantes: "Why the Mississippi River Left Pieces of States Behind" (54); "Why Some States Own Land on the Wrong Side of the Mississippi" (61).
- **O paradoxo:** o rio é a divisa de dez estados, mas a linha oficial muitas vezes corre longe da água, pelo meio de plantações, e pedaços de um estado
  ficam do outro lado do rio, porque a lei segue o rio quando ele anda devagar e para de segui-lo quando ele pula.
- **O gancho:** "The Mississippi River is supposed to be the line between ten states. Yet in place after place, the state line wanders off into the
  fields, and whole pieces of one state sit across the river from it. How did that happen?" (43 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. *Arkansas v. Tennessee* (04/03/1918): a divisa é "the middle of the main channel of navigation as it existed at the Treaty of Peace" (1783);
     com mudança gradual, "the boundary follows the varying course of the stream"; com a mudança súbita (o Centennial Cut-Off de 1876), a divisa
     "remained in the middle of the former main channel of navigation". LII/Cornell: https://www.law.cornell.edu/supremecourt/text/246/158
  2. *Nebraska v. Iowa* (29/02/1892), no Missouri: "The boundary, therefore, between Iowa and Nebraska is a varying line"; a mudança de 1877 "does not
     come within the law of accretion, but of that of avulsion", e a linha "became a fixed and unvarying boundary". https://www.law.cornell.edu/supremecourt/text/143/359
  3. O marco histórico 1859 do Kentucky (Madrid Bend): "Kentucky claimed land to the westernmost middle of Mississippi River-to this bend";
     "Kentucky and Tennessee disagreed over boundary line until the Cox-Peebles survey, 1858-59, brought compromise"; "Neck joining bend to Tenn.,
     once three miles wide, is now less than one mile across." https://history.ky.gov/markers/madrid-bend
  4. Os mapas de Harold Fisk (1944), do Corpo de Engenheiros: o curso de 1944 "is represented by a mighty blank", cruzado pelos cursos de 1880, 1820 e
     1765; obra do governo ("PD GOV"). The Public Domain Review, 21/07/2020: https://publicdomainreview.org/collection/maps-of-the-lower-mississippi-harold-fisk/
  - **A confirmar:** a área do Kentucky Bend (~27 mi², pelos resumos); os exemplos de hoje (pedaços do Arkansas a leste do rio e do Tennessee ou do
    Mississippi a oeste); Carter Lake, Iowa, do lado de Nebraska (é o caso de 1877, mas não li a página da cidade).
- **A medida nossa:** as divisas do Census (TIGER/Line 2025) contra o canal de hoje do NHD, ao longo do rio inteiro: **quantos pedaços de terra ficam
  do "lado errado", e quantas milhas quadradas por estado**. Ninguém mostrou esse total. Por cima, os cursos de 1765, 1820 e 1880 de Fisk, para ver
  de onde veio cada pedaço.
- **Os 3 atos:**
  1. A física: o rio que serpenteia, corta os próprios laços e muda de leito (os mapas de Fisk).
  2. A lei: a divisa de 1783 no meio do canal, a regra da mudança lenta e a do pulo, os processos na Suprema Corte, o Kentucky Bend.
  3. O hoje: o mapa dos pedaços, as fazendas que pagam imposto a um estado e votam do outro lado, e o rio preso por diques desde o século XX.
- **A miniatura:** o vale em relevo amarelo; o rio em azul; a divisa oficial como linha branca grossa que se descola da água; os pedaços do "lado
  errado" em vermelho; um pedaço em anel ciano (o Kentucky Bend); na caixa preta, "WRONG SIDE" (a B: "THE RIVER MOVED").
- **As buscas prováveis** (não medido no vidIQ): "mississippi river state border", "kentucky bend", "why is part of kentucky across the river",
  "mississippi river meanders", "carter lake iowa", "harold fisk maps".
- **A concorrência:**
  1. "The Bizarre Geography of The Mississippi River | 4K" (Hidden on Earth, 12,4 mil, 21/09/2026, **9.724**, 14:54): lista de 30 fatos; um deles é
     a cidade "on the wrong side of a state line". Toca o ângulo como item.
  2. "Kentucky Bend — The Border That Shouldn't Exist" (Nextonthemap, curto, 15/10/2025, 584).
  3. "The Mississippi Curve That Left Kentucky Cut Off" (Atlas Friction, 25/03/2026, 7, 5:26).
  - Nenhum com o ângulo do rio inteiro e a medida. Em 2026, 2 vídeos tocam o tema.
- **Os riscos:** o porquê é metade lei (a doutrina da avulsão); o vídeo tem de mostrar a física primeiro. O tema do rio é perene e não tem notícia
  agora. Imagem farta (Fisk, USGS, NAIP, Landsat, domínio público).
- **A nota: 6,5.** Lugar dos mais buscados do país, um paradoxo que só o mapa mostra, uma medida que ninguém fez. Não sobe porque o "porquê" mistura
  geografia e tribunal, e o Kentucky Bend é curiosidade conhecida.

## 3 · Isle Royale (`isle-royale`) · **6,0**

- **Título de trabalho:** "Why Michigan Owns an Island 14 Miles From Canada" (48).
  - Variantes: "Why Isle Royale Belongs to Michigan, Not Minnesota or Canada" (60); "Why America Got Isle Royale From a Map With a Fake Island" (57).
- **O paradoxo:** a maior ilha do lago Superior fica a 14 milhas do Canadá e a 20 de Minnesota, mas é de Michigan, a uns 45; o tratado que a deu aos EUA
  passou a linha em volta dela e de uma ilha que não existia; e a rocha dela é a mesma do Michigan do outro lado do lago.
- **O gancho:** "Isle Royale belongs to Michigan, yet it lies fourteen miles from Canada and about forty-five from the rest of Michigan. The 1783 treaty
  that made it American drew the line around an island that never existed. So how did Michigan end up with it?" (43 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. O documento de fundação do parque (NPS, janeiro de 2016): o parque fica "within 14 miles of the Ontario (Canada) shoreline, 20 miles of Minnesota
     shoreline, and approximately 45 miles from Michigan's Upper Peninsula"; tem 571.790 acres, e "more than 75% of the total park area is
     submerged". https://www.nps.gov/isro/learn/management/upload/ISRO_Web_NotAccessible_Foundation_Document_2016.pdf (cópia em
     `midia/_pautas/video-8/`)
  2. O mesmo documento: o tratado de 1783 cedeu as pretensões coloniais sobre a ilha (os Ojibwe não foram parte); no Tratado de La Pointe, de
     04/10/1842, os Ojibwe cederam as terras "including all the islands in said lake"; o Compacto de Isle Royale, de 20/08/1844, juntou a Grand
     Portage Band. E: "Shallow pits remain throughout the island as testimony to the special purity of Isle Royale's copper deposits."
  3. O Tratado de Paris (1783), art. 2: a divisa segue "through Lake Superior northward of the Isles Royal and Phelipeaux to the Long Lake". Avalon
     (Yale): https://avalon.law.yale.edu/18th_century/paris.asp
  4. A ilha Phelipeaux: "An island named 'Phelipeaux' didn't exist"; o mapa de Mitchell, o mais usado na negociação, tinha "a distorted shape for Lake
     Superior"; a linha só fechou em 1842 (Webster-Ashburton). Northern Wilds, 30/04/2025:
     https://northernwilds.com/how-a-flawed-map-shaped-the-minnesota-ontario-border/
  5. A geologia: as camadas da ilha formam "a regional-scale syncline that extends beneath the surface of Lake Superior, reappearing on the Keweenaw
     Peninsula of Michigan"; "Native copper, found throughout the lava flows and sedimentary layers". NPS, Geodiversity Atlas (08/07/2024):
     https://www.nps.gov/articles/nps-geodiversity-atlas-isle-royale-national-park-michigan.htm
  - **A confirmar:** como a ilha entrou em Michigan (o território de Michigan e a lei de estado de 1836-1837, a mesma da troca de Toledo pela Península
    Superior); a origem da Phelipeaux no mapa de Bellin de 1744 (só fonte secundária); as distâncias variam entre páginas do NPS (10, 16, 20 milhas de
    Minnesota; 30, 45, 56 de Michigan): o vídeo usa a nossa medida.
- **A medida nossa:** a menor distância da ilha a Ontário, a Minnesota e ao Keweenaw (OSM e Natural Earth, conta minha); a linha do tratado de 1783
  desenhada sobre o mapa de Mitchell contra a de hoje; e o perfil geológico de Isle Royale ao Keweenaw (o sinclinal sob o lago), do mapa geológico do
  USGS. Pelos números do NPS, Michigan fica **3,2 vezes mais longe** que o Canadá (45 ÷ 14).
- **Os 3 atos:**
  1. O mapa: a ilha colada no Canadá e pintada de Michigan; a linha que a contorna.
  2. A história: o mapa de Mitchell, a ilha que não existia, 1783 e 1842; o cobre puro que os povos antigos já cavavam e a corrida do cobre.
  3. O porquê pela rocha: a mesma lava do Keweenaw, dobrada sob o lago; o parque, os lobos e os alces de hoje.
- **A miniatura:** o lago Superior em azul; o Canadá e Minnesota em relevo amarelo; Isle Royale em vermelho, colada na costa norte; o Keweenaw em ciano
  lá embaixo, com uma seta branca grossa ligando os dois; na caixa preta, "MICHIGAN?" (a B: "14 MILES").
- **As buscas prováveis** (não medido no vidIQ): "isle royale", "why is isle royale part of michigan", "isle royale national park", "isle phelipeaux",
  "michigan upper peninsula history".
- **A concorrência:**
  1. "History of Isle Royale" (Author Marie LaPres, 28/04/2024, 922, 7:46).
  2. "Why They've Been Watching This Island for 68 Years" (Alexis Dahl, 21/10/2026, **141.148**, 49:05): os lobos e os alces, outro ângulo, mas o
     lugar está quente agora.
  3. O cobre do lago Superior: "The Ancient Tool Found in a Michigan Copper Pit…" (TheFORBIDDEN CABINET, 17/09/2026, 11.364) e "The Copper Under Lake
     Superior Was Mined Before the Ice Age…" (Borrowed Century, 22/05/2026, 677).
  - Nenhum com o ângulo da divisa e da ilha fantasma.
- **Os riscos:** a moda da Toledo War nesta semana (2 longos e 4 curtos sobre a Península Superior, `demanda.md` §3) pode ajudar ou engolir; os
  direitos ojibwe pedem voz cuidadosa; o nome "Isle Royale" é menos buscado que os outros (o título leva "Michigan" e "Canada").
- **A nota: 6,0.** Esquisitice de mapa limpa, três camadas que se pagam (mapa, tratado, rocha) e nenhum concorrente. Não sobe pela busca menor.

## 4 · O pico dos três mares, Glacier (`triplo-divisor`) · **6,0**

- **Título de trabalho:** "Why One Peak in Glacier National Park Drains to Three Oceans" (60).
  - Variantes: "Why Rain in Montana Can End Up in Hudson Bay" (44); "Why Montana Moves a Hudson Bay River Into the Missouri" (54).
- **O paradoxo:** a chuva que cai num pico de Montana se divide em três e chega ao Pacífico, ao golfo do México e à baía de Hudson; e há mais de 110 anos
  os EUA tiram água de um rio que ia para a baía de Hudson e a mandam para o Missouri por um canal.
- **O gancho:** "On one peak in Glacier National Park, a single rainstorm splits three ways. Some of it reaches the Pacific, some the Gulf of Mexico,
  and some ends up in Hudson Bay. Why does rain in Montana flow toward Canada's inland sea?" (42 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "From its summit, water flows to the Missouri and Mississippi Rivers and into the Gulf of Mexico," "into the Columbia River drainage and the
     Pacific Ocean," "as well as into the Saskatchewan River and eventually Hudson Bay". NPS (atualizado em 15/08/2026):
     https://www.nps.gov/places/triple-divide-exhibit-geology-tour.htm
  2. "Worldwide, there are roughly six locations with such 'triple divides.'" NPS, Glacier, "Hydrologic Activity" (17/09/2016):
     https://www.nps.gov/glac/learn/nature/hydrologicactivity.htm
  3. O canal de St. Mary: "The 29-mile long canal", que "transports water from the Hudson Bay drainage to the Missouri River drainage"; concluído "in
     1915"; a troca da barragem de desvio deve acabar "in the fall 2028". Reclamation (atualizado em 04/11/2026): https://www.usbr.gov/gp/mtao/stmary/index.html
  4. O tratado de 1909, art. VI: os rios St. Mary e Milk "are to be treated as one stream for the purposes of irrigation and power", e "the waters
     thereof shall be apportioned equally between the two countries". FRUS 1910: https://history.state.gov/historicaldocuments/frus1910/d621
  - **A confirmar:** a altitude (8.020 pés, pelo resumo de uma página do NPS); a falha do sifão do canal em 17/06/2024 e o estado em 2026 (resumo de
    busca); se a baía de Hudson conta como "oceano" (a IHO a põe no Ártico?); o nome do golfo na tela (o NPS usa "Gulf of Mexico" numa página e "Gulf
    of America" em outra).
- **A medida nossa:** a área dos EUA que escorre para a baía de Hudson (as bacias do WBD do USGS: a região 09 e as cabeceiras do St. Mary), em milhas
  quadradas; o caminho de uma gota até cada mar (NHDPlus e HydroSHEDS), em milhas; e a água que o canal tira por ano (as vazões do USGS no canal),
  contra a metade que o tratado dá a cada país.
- **Os 3 atos:**
  1. A geografia: o pico, as três bacias, o continente que se divide em três ralos.
  2. A viagem de cada gota: o Columbia, o Missouri-Mississippi e o Saskatchewan-Nelson até a baía de Hudson.
  3. O poder: o canal de 1915 que muda a água de mar, o tratado de 1909 e a disputa de hoje sobre a metade de cada um.
- **A miniatura:** a América do Norte em relevo amarelo; as três bacias em cores (a de Hudson em vermelho, as outras em tons neutros); o pico como um
  ponto ciano com três setas brancas grossas saindo; na caixa preta, "3 OCEANS".
- **As buscas prováveis** (não medido no vidIQ): "triple divide peak", "glacier national park", "where does water go continental divide",
  "hudson bay watershed", "st mary canal".
- **A concorrência:**
  1. "Canada's Great Divide: When The Pacific, Atlantic and Arctic Collide" (TRACKS, 748 mil, 22/09/2024, **101.172**, 50:41): o divisor triplo do
     Canadá (o Columbia Icefield), documentário de viagem. Lugar outro, ideia vizinha.
  2. "MONTANA: How People Live in the Wild Heart of the Rockies" (Where on Earth, 16/08/2026, 2.680, 53:11): a descrição abre com o pico.
  3. "Triple Divide Peak Glacier National Park" (Greg Parham, 18/08/2013, 3.358) e o curto de Jeff Hyer (06/08/2025, 1.751).
- **Os riscos:** o ato 3 é tratado de água de novo (o vídeo 7 é o Columbia): manter o tratado curto ou trocar o ato; "oceans" no título exige a baía de
  Hudson como oceano; a busca pelo pico é pequena (o título leva "Glacier National Park").
- **A nota: 6,0.** O mapa mais bonito da lista e uma frase que se entende sem mapa. Não sobe pela repetição do tema da água e pelo documentário de
  101 mil com a ideia irmã.

## 5 · White Sands e o campo de mísseis (`white-sands`) · **5,5**

- **Título de trabalho:** "Why White Sands Sits Inside a Missile Range" (43).
  - Variantes: "Why White Sands Is Made of Sand That Should Dissolve" (52); "Why the Army Wanted the Land Around White Sands" (47).
- **O paradoxo:** o maior campo de dunas de gesso do mundo existe porque a bacia não tem saída para o mar; e foi esse mesmo vazio fechado, seco e plano
  que fez o Exército tomar a terra em volta, testar mísseis ali e explodir a primeira bomba atômica a 60 milhas.
- **O gancho:** "In southern New Mexico, hundreds of square miles of dunes are made of gypsum, a mineral that dissolves in rain. And the land around
  them became the place where America tests its missiles and set off its first atomic bomb. Why here?" (42 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. A bacia: o rio "eventually blocked the basin's outlet to the sea"; o lago Otero, "an ancient 1,600-square mile lake that covered much of the
     basin". NPS (22/01/2020): https://www.nps.gov/whsa/learn/geology-of-white-sands.htm
  2. O gesso, que se dissolve e recristaliza, "is crucial to the formation of the world's largest gypsum dunefield." NPS (12/09/2023):
     https://www.nps.gov/whsa/learn/gypsum.htm
  3. "White Sands Missile Range regularly conducts military tests"; a única estrada das dunas fecha "for periods of up to three hours"; fechamentos em
     12/11/2026 e 16/11/2026, das 7h às 8h, com a US-70 bloqueada. NPS (05/11/2026): https://www.nps.gov/whsa/planyourvisit/park-closures.htm
  4. "Three weeks after Pearl Harbor", a Ordem Executiva 9029 criou "the Alamogordo bombing range"; "isolation, distance, aridity, and hot temperatures"
     atraíram os militares; o Trinity, em 16/07/1945, foi "less than sixty miles northwest of monument headquarters". NPS (05/01/2023):
     https://home.nps.gov/articles/whitesandsww2.htm
  - **A confirmar:** os 275 mi² do campo de dunas (resumo de busca de páginas do NPS); a área do campo de mísseis e a fração das dunas dentro dele.
- **A medida nossa:** o polígono do campo de dunas (NPS/USGS) contra o limite do campo de mísseis (PAD-US do USGS): **a fração das dunas que fica dentro
  do terreno do Exército**; a área do antigo lago Otero contra a das dunas de hoje (1.600 mi² contra ~275: ~17 %, conta minha, a conferir); e os dias
  de fechamento por ano, das páginas de fechamento do NPS.
- **Os 3 atos:**
  1. A química do mapa: a bacia fechada, o lago que secou, o gesso que não tem para onde ir.
  2. O poder: o vazio que o Exército quis logo depois de Pearl Harbor, o Trinity, os foguetes alemães depois da guerra (a confirmar), o campo de
     mísseis.
  3. O hoje: o parque nacional (de 2019, a confirmar) cercado pelo Exército, a estrada que fecha para os testes.
- **A miniatura:** o Novo México em relevo amarelo; o campo de mísseis em vermelho, enorme; as dunas em branco brilhante dentro dele; o ponto do
  Trinity em ciano com uma seta branca; na caixa preta, "MISSILE RANGE".
- **As buscas prováveis** (não medido no vidIQ): "white sands national park", "why is white sands white", "white sands missile range", "white sands
  closed missile test", "trinity site".
- **A concorrência:**
  1. "White Sands National Park & The Birth of the Atomic Bomb" (View Master Travels, 29/03/2025, 5.426, 16:42): viagem, o ângulo vizinho.
  2. "White Sands National Park - A Most Unusual Desert" (My Science Blast, 28/12/2024, 958, 10:59): o gesso.
  3. "Archaeologists Just Found Out What the Footprints at White Sands Actually Reveal" (The Helix Report, **04/11/2026, 246.993**, 31:55): outro
     ângulo (as pegadas), mas o lugar estourou há duas semanas.
- **Os riscos:** o enxame vai atrás de White Sands depois das pegadas; o Trinity é tema muito coberto (depois do filme de 2023); a "geografia do poder"
  aqui é testes de armas, sem guerra em curso.
- **A nota: 5,5.** A melhor ponte para a geopolítica que o Lucas pediu ("a geografia explica o poder"). Cai meio ponto pelo lugar quente e pelo
  Trinity gasto.

## 6 · Michigan-Huron, um lago só (`michigan-huron`) · **5,5**

- **Título de trabalho:** "Why Lake Michigan and Lake Huron Are Actually One Lake" (54).
  - Variantes: "The World's Biggest Freshwater Lake Has Two Names" (49); "Why Lake Superior Isn't Really the Biggest Great Lake" (53).
- **O paradoxo:** o lago Superior é "o maior dos Grandes Lagos", mas o Michigan e o Huron estão no mesmo nível, ligados pelo estreito de Mackinac, e
  juntos têm 43 % mais área: o maior lago de água doce do mundo em área tem dois nomes.
- **O gancho:** "Lake Superior is supposed to be the biggest of the Great Lakes. But Lake Michigan and Lake Huron sit at the same level, joined by one
  strait, and together they're far bigger. So why does every map call them two lakes?" (40 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "The Straits of Mackinac is the connecting waterway between Lakes Michigan and Huron"; "Due to the unique flow of the Straits, the two lakes are
     considered to be one (Lake Mchigan [sic]-Huron)"; a corrente "changes direction on an average of once every 1.5 days" e pode mover "about 80,000
     cubic meters of water per second". NOAA GLERL: https://www.glerl.noaa.gov/res/straits/
  2. As áreas: Superior 31.700 mi², Michigan 22.300, Huron 23.000. EPA (atualizado em 28/08/2026): https://www.epa.gov/greatlakes/physical-features-great-lakes
  3. A altitude de referência (low water datum): Michigan 577 pés, Huron 577 pés, Superior 600. NOAA GLERL, "Great Lakes Physical Characteristics"
     (fonte: atlas da EPA de 1995): https://apps.glerl.noaa.gov/coastwatch/webdata/statistic/physical.html
  - **A confirmar:** a área do lago Vitória (para a frase "o maior do mundo"); a largura e a fundura do estreito; a briga do oleoduto Line 5 sob o
    estreito em 2026 (pode ser notícia quente).
- **A medida nossa:** 22.300 + 23.000 = **45.300 mi²**, 1,43 vez o Superior (conta minha, com a EPA); e as séries diárias de nível da NOAA para uma
  estação do Michigan e uma do Huron em 2025-2026: **a diferença média em polegadas** (espero quase zero). É o gráfico que prova o "um lago só".
- **Os 3 atos:** (1) a física: o estreito, o nível único, a corrente que vai e volta; (2) a história: os lagos glaciais que já foram um só (Algonquin,
  Nipissing), os nomes dados pelos franceses; (3) o hoje: o estreito como gargalo (a ponte de Mackinac, o oleoduto, os navios).
- **A miniatura:** os Grandes Lagos em azul sobre relevo amarelo; o Michigan e o Huron pintados juntos de vermelho; o Superior em ciano ao lado; uma
  seta branca grossa no estreito; na caixa preta, "ONE LAKE".
- **As buscas prováveis** (não medido no vidIQ): "lake michigan huron same lake", "largest freshwater lake in the world", "straits of mackinac",
  "lake michigan", "lake huron".
- **A concorrência:**
  1. "Michigan & Huron: One Lake, Two Names? The TWIN Lake SECRET! #shorts" (Hidden on Earth, 05/07/2026, **11.437**, 0:30): o mesmo ângulo, em curto,
     sem viral.
  2. "We Drained All Five Great Lakes. Here's What's on the Bottom" (Drained Atlas, **02/11/2026, 118.002**, 23:40): os Grandes Lagos quentes agora.
  3. "The Great Lakes Aren't Really Lakes. They're a Vault." (MapReels, 19/10/2026, 20.155, 15:00).
- **Os riscos:** o fato é conhecido de quem gosta do assunto (curto de julho, listas); 14 minutos pedem o ato 3 forte, e ele encosta no Line 5
  (política); os Grandes Lagos estão no enxame em outubro e novembro.
- **A nota: 5,5.** Paradoxo limpo e verificável, busca enorme. Cai pelo curto que já disse a frase e pelo enxame nos Grandes Lagos.

## 7 · As dunas do lago Michigan (`dunas-michigan`) · **5,5**

- **Título de trabalho:** "Why Lake Michigan's Biggest Dunes Are All on One Side" (53).
  - Variantes: "Why Michigan Got the Dunes and Wisconsin Got the Bluffs" (55); "Why Sleeping Bear Dunes Sits 450 Feet Above Lake Michigan" (57).
- **O paradoxo:** o mesmo lago tem, de um lado, dunas empoleiradas a até 450 pés sobre a água; do outro, a maior duna do Wisconsin mal passa de 90.
- **O gancho:** "Along Lake Michigan's eastern shore, dunes rise as high as 450 feet above the water. Across the lake in Wisconsin, the tallest barely
  reach 93. Same lake, same glaciers: why does one side get all the dunes?" (40 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. As dunas "move about 2 feet per year to the East due to the prevailing westerly winds"; "the Lake Michigan Overlook, which is approximately 450
     feet above the lakeshore". NPS, Sleeping Bear, FAQ (18/12/2025): https://www.nps.gov/slbe/faqs.htm/index.htm
  2. As dunas empoleiradas são "a relatively thin blanket of wind-blown sand resting on a thick deposit of sandy glacial debris" e "rest on a headland,
     often several hundred feet above lake level". NPS (15/12/2025): https://www.nps.gov/slbe/learn/nature/sand-dune-geology.htm
  3. As maiores dunas dos Grandes Lagos ficam nas margens leste do Michigan e do Huron e "occur where westerly onshore winds intersect sandy shorelines".
     Gorgenson et al., GSA 2017, resumo 73-14: https://studio.m-anage.com/gsa/2017AM/webprogram/Paper303904.html
  4. "These sands are transported along the shore by waves and currents, then blown inland by prevailing westerly winds"; "approximately 74,000 acres of
     dunes along 265 miles of coastline" (as áreas críticas de Michigan). EarthDate, ep. 463, 10/03/2026: https://www.earthdate.org/episodes/dynamic-dunes
  5. No Wisconsin, as dunas "only reach 93 feet above the lake at the Whitefish Dunes State Park". FOX6, 29/07/2026:
     https://www.fox6now.com/weather/wisconsin-weather-beaches-who-has-better-wisconsin-michigan.amp
  - **A confirmar:** os 275 mil acres de dunas de Michigan e "a maior coleção de dunas de água doce do mundo" (michigan.gov recusou, 403); a fração
    das dunas na margem leste (~95 %, pelo resumo de um texto da MSU com certificado vencido).
- **A medida nossa:** a área de areia (OSM `natural=sand`, ou o mapa das áreas críticas do EGLE) numa faixa de 3 milhas de cada margem: **leste contra
  oeste**, em milhas quadradas; e a rosa dos ventos da NOAA (ISD) em Muskegon e em Milwaukee: a fração das horas com vento do lago para a terra em cada
  margem.
- **Os 3 atos:** (1) a física: o gelo que deixou a areia, o vento de oeste que atravessa 70 milhas de água; (2) a história: as cidades enterradas pela
  areia, a mineração de areia para fundição, a lei das dunas; (3) o hoje: as dunas que andam 2 pés por ano e engolem casas.
- **A miniatura:** o lago em azul; a margem leste em vermelho grosso; a oeste em ciano fino; setas brancas grossas de oeste para leste atravessando o
  lago; na caixa preta, "ONE SIDE".
- **As buscas prováveis** (não medido no vidIQ): "sleeping bear dunes", "why are there sand dunes in michigan", "lake michigan dunes", "indiana dunes",
  "silver lake sand dunes".
- **A concorrência:**
  1. "Lake Michigan's 'living dunes' bury homes and parking lots" (MLive, 10/04/2026, **54.718**, 2:27): notícia das dunas que andam; o vento está lá,
     o "por que de um lado só" não.
  2. "Lovable Michigan: How are Sand Dunes Formed?" (MLive, 03/09/2021, 20.498, 2:02).
  3. "The Story Behind Michigan's Sand Dunes" (REV Club, 26/07/2023, 1.131, 4:37); e "Why Michigan is Weirder Than You Think" (Hidden on Earth,
     06/07/2026, 114.002), lista que deve citar as dunas.
- **Os riscos:** a resposta (o vento) é adivinhável; o "all on one side" exagera (as dunas de Indiana ficam no sul, e o Wisconsin tem dunas pequenas):
  o título tem de dizer "biggest"; a notícia de 54 mil em abril pegou o tema das dunas que andam.
- **A nota: 5,5.** Busca grande, mapa claro, imagem farta do NPS. Não sobe porque o porquê se adivinha.

## 8 · As Thousand Islands (`mil-ilhas`) · **5,5**

- **Título de trabalho:** "Why the U.S.-Canada Border Zigzags Through the Thousand Islands" (63).
  - Variantes: "Why the Thousand Islands Were Split Island by Island" (52); "How 1,800 Islands Were Divided Between Two Countries" (52).
- **O paradoxo:** no rio São Lourenço, a divisa entre os EUA e o Canadá não corre no meio da água: ela costura, ilha por ilha, entre mais de 1.800
  ilhas, que são os topos de uma ponte de granito entre o escudo canadense e os Adirondacks.
- **O gancho:** "Between Lake Ontario and Montreal, the St. Lawrence River holds more than eighteen hundred islands. The border between the United States
  and Canada doesn't run straight through them. It zigzags, north of one island and south of the next, so who decided?" (42 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. A decisão dos comissários do art. VI do Tratado de Ghent, Utica, 18/06/1822 (Porter e Barclay): a linha passa "North of Island No. 14, South of 15
     and 16, North of 17; South of 18, 19, 20, 21, 22, 23, 24, 25, and 28", "to the North of Well's Island", "to the South of Grand or Long Island,
     keeping near its Southern shore, and passing to the North of Carlton Island". ONU, Reports of International Arbitral Awards, v. XXVIII:
     https://www.italaw.com/sites/default/files/case-documents/riaa/RIAA-XXVIII-11/italaw19501271%20-%20Boundaries%20relating%20to%20lakes%20Ontario%2C%20Erie%20and%20Huron%20and%20Riv%20-%20Decision%2C%20June%2018%2C%201822.pdf
  2. Porter e Barclay "were able to compromise in allocating the islands in the St. Lawrence and Detroit rivers" e "reached an agreement in June 1822".
     Canada's History, Francis Carroll, 26/09/2024: https://www.canadashistory.ca/explore/environment/drawing-the-line
  3. "Granite islands speckle the St. Lawrence River in a transition zone between Canadian Shield and Adirondack Mountains." Parks Canada (22/10/2026):
     https://parks.canada.ca/pn-np/on/1000
  4. A Reserva da Biosfera do Arco de Frontenac, "officially recognized in 2002". Parks Canada (09/04/2026):
     https://parks.canada.ca/pn-np/on/1000/nature/environnement-environment/natcul5
  - **A confirmar:** as 1.864 ilhas e o critério (acima da água o ano todo, um pé quadrado, uma árvore); o "Grand or Long Island" de 1822 é a Wolfe
    Island de hoje; a "menor ponte internacional" é mito (as duas ilhas são canadenses).
- **A medida nossa:** as ilhas do OSM entre Kingston e Brockville, separadas pela linha da Comissão Internacional de Fronteiras: **quantas e quantas
  milhas quadradas de cada país**; e quantas vezes a linha de 1822 troca de lado (a contagem dos "North of" e "South of" do texto).
- **Os 3 atos:** (1) a rocha: o arco de granito que o gelo raspou e o rio afogou; (2) a linha: 1783, a guerra de 1812, os comissários de 1822 e a
  partilha ilha por ilha; (3) o hoje: as casas de veraneio de um país e do outro, a ponte e a vigilância na fronteira.
- **A miniatura:** o rio em azul; as ilhas americanas em vermelho e as canadenses em ciano; a divisa em branco grosso, em zigue-zague; na caixa preta,
  "ZIGZAG".
- **As buscas prováveis** (não medido no vidIQ): "thousand islands", "1000 islands border", "thousand islands canada or us", "boldt castle",
  "how many islands in the thousand islands".
- **A concorrência:**
  1. "We Explored New York's 1,000 Islands… You Won't Believe This Place" (Andrew & Megan, 26/08/2026, **61.037**, 59:57): viagem, sem a divisa.
  2. "Geography Facts: The real THOUSAND ISLANDS" (Justin Hikes, curto, 10/02/2025, 10.392).
  3. "We explore the cut-through (International Rift)…" (Gebo's Garage, 02/08/2025, 429).
  - Nenhum com a linha de 1822.
- **Os riscos:** a divisa é obra de comissários (lei), e a geografia explica as ilhas, não a linha; a busca é de turismo; 14 minutos pedem o ato 3
  forte. Imagem: Parks Canada, Commons e Landsat (licenças a conferir).
- **A nota: 5,5.** O texto de 1822 é ouro de tela, e o ângulo está livre. Cai porque o porquê da linha é negociação, não relevo.

## 9 · O deserto do Okanagan (`okanagan`) · **5,0**

- **Título de trabalho:** "Why Canada Has a Desert (and It Grows Wine)" (43).
  - Variantes: "Why the Okanagan Valley Is a Desert in Canada" (45); "Why Canada's Desert Is the Tip of an American One" (49).
- **O paradoxo:** o país das florestas e da neve tem, num vale da fronteira, artemísia e areia: a ponta norte do deserto da Grande Bacia, que vem de
  Nevada, e hoje é região de vinho.
- **O gancho:** "Canada is famous for forests, lakes and snow. But in one valley on the U.S. border, the hills are covered in sagebrush and sand, the
  northern tip of a dry land that stretches up from Nevada. How does Canada end up with a desert?" (45 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "The southern end of the Okanagan Valley in Canada represents the northernmost extension of the Western Great Basin of North America"; "Low annual
     precipitation, hot summers, and mild winters create a variety of semi-arid habitats". Governo da Colúmbia Britânica (1998):
     https://www.env.gov.bc.ca/okanagan/esd/atlas/special_area.html
  2. "one of the driest, hottest and most threatened ecosystems in Canada"; "the rare 'pocket desert' habitat (antelope brush)"; "the northern edge of
     the Great Basin reaches into British Columbia"; a reserva proposta de "284 square kilometres". Parks Canada, avaliação de 2011:
     https://parks.canada.ca/pn-np/cnpn-cnnp/okanagan/sommaire-summary
  - **A confirmar:** a chuva de Osoyoos (~300 mm por ano, pelos resumos; a normal oficial da ECCC não foi lida); o "only desert" (é marca de turismo;
    tecnicamente semiárido); a situação da reserva nacional em 2026; as cascavéis.
- **A medida nossa:** as normais 1991-2020 da ECCC num corte de oeste para leste (Vancouver, Hope, Princeton, Keremeos, Osoyoos): **a escada da chuva**,
  em polegadas por ano, de uma costa de floresta úmida ao vale seco em 200 milhas; e o verde do Landsat no verão, do vale às encostas.
- **Os 3 atos:** (1) as montanhas que secam o ar (Costa e Cascatas); (2) a Grande Bacia que sobe dos EUA, a vida do deserto, os syilx; (3) a irrigação,
  o vinho e o ecossistema que sumiu (menos de 40 % sobra, pelo resumo).
- **A miniatura:** a Colúmbia Britânica em relevo amarelo; a Grande Bacia em vermelho subindo dos EUA e acabando numa ponta no Okanagan; o vale em
  ciano; seta branca; na caixa preta, "DESERT?".
- **As buscas prováveis** (não medido no vidIQ): "canada desert", "osoyoos desert", "okanagan valley", "does canada have a desert", "okanagan wine".
- **A concorrência:** "Exploring the Canadian Desert (Roadtrip Vlog)" (zi8gzag, 05/07/2024, **29.042**); "The SURPRISING OKANAGAN DESERT…" (Alt
  Living, 25/02/2025, 1.380); "Canada has a DESERT!?" (Alex Kids Fun, 19/07/2021, 1.067). Só viagem.
- **Os riscos:** a resposta (sombra de chuva) é de livro escolar; o "only desert" é disputado; o nome é menos buscado fora do Canadá.
- **A nota: 5,0.** O Canadá que o Lucas pediu, e livre. A surpresa é menor do que o título promete.

## 10 · A chuva do Havaí (`havai-chuva`) · **4,5**

- **Título de trabalho:** "Why Hawaii Gets 404 Inches of Rain in One Place and 8 in Another" (64).
  - Variantes: "Why Hawaii Has a Desert and America's Wettest Spot" (50); "Why Kauai's West Side Is Dry and Its Center Is a Swamp" (54).
- **O paradoxo:** no mesmo arquipélago, a chuva vai de 8 polegadas por ano a 404, cinquenta vezes mais, a poucas dezenas de milhas.
- **O gancho:** "Near Big Bog on Maui, it rains about 404 inches a year, one of the wettest spots on Earth. On the summit of Mauna Kea, it's about 8.
  Same islands, same ocean, same trade winds: why are they so different?" (39 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "Annual means range from 204 mm (8 in) near the summit of Mauna Kea to 10,271 mm (404 in) near Big Bog on the windward slope of Haleakalā,
     Maui"; "orographic lifting of persistent east-northeast winds give rise to distinct windward-leeward rainfall gradients"; "the stabilizing effect of
     the trade wind inversion produces extremely dry zones at the summits". Giambelluca et al., BAMS, março de 2013:
     https://www.soest.hawaii.edu/MET/Hsco/publications/2013.1.pdf
  2. O Rainfall Atlas of Hawaiʻi (Univ. do Havaí): mapas da chuva média de 1978-2007, com rasters para baixar. https://rainfall.geography.hawaii.edu/
  - **A confirmar:** a chuva do monte Waiʻaleʻale (373 a 460 polegadas, conforme a fonte e o período; nenhuma lida na origem) e a de Kekaha; a
    distância entre o ponto mais úmido e o mais seco.
- **A medida nossa:** com os rasters do Atlas, por ilha: o máximo, o mínimo e a distância entre eles; a razão nacional (10.271 ÷ 204 = **50 vezes**,
  conta minha).
- **Os 3 atos:** (1) o vento alísio e a montanha; (2) o teto do alísio, que deixa os picos secos; (3) a vida de cada lado (o pântano de Alakaʻi, o cânion
  de Waimea, a água das cidades).
- **A miniatura:** as ilhas em relevo amarelo; o lado do vento em ciano, o de sotavento em vermelho; setas brancas do alísio; na caixa preta, "50×".
- **As buscas prováveis** (não medido no vidIQ): "wettest place on earth", "hawaii rain shadow", "waialeale", "kauai weather", "hawaii desert".
- **A concorrência:** "I Went to Every Different Climate on the Big Island…" (Ecotasia, 17/12/2022, 3.869); "The Reality of Living in America's Wettest
  City" (Brian Carmichael Universe, 22/06/2026, 6.425; Hilo); "Climate Extremes: Kauai's Weather Machine" (CGEEmultimedia, 15/01/2018, 2.140).
- **Os riscos:** a resposta é de livro escolar (sombra de chuva); fatos de Kauai não lidos; "a esquisitice que o mapa mostra" é um mapa de chuva, não
  de linhas. Fica como reserva fraca.
- **A nota: 4,5.**

---

## A lista inteira: 30 candidatos, em uma linha cada

Todos foram vistos em 17/11/2026, entre ~21h20 e ~22h05, pela busca da web restrita a youtube.com e, nos que importavam, pela página `/watch`.

| # | Candidato | Destino |
|---|---|---|
| 1 | Os lagos naturais param na linha do gelo (Minnesota contra o Texas) | **desenvolvido, 6,5** |
| 2 | As divisas que o Mississippi deixou para trás | **desenvolvido, 6,5** |
| 3 | Isle Royale, de Michigan, a 14 milhas do Canadá | **desenvolvido, 6,0** |
| 4 | O pico dos três mares em Glacier e o canal de St. Mary | **desenvolvido, 6,0** |
| 5 | White Sands dentro do campo de mísseis | **desenvolvido, 5,5** |
| 6 | Michigan e Huron, um lago só | **desenvolvido, 5,5** |
| 7 | As dunas do lago Michigan de um lado só | **desenvolvido, 5,5** |
| 8 | A divisa em zigue-zague nas Thousand Islands | **desenvolvido, 5,5** |
| 9 | O deserto do Okanagan, no Canadá | **desenvolvido, 5,0** |
| 10 | A chuva do Havaí, de 8 a 404 polegadas | **desenvolvido, 4,5** |
| 11 | Two Ocean Pass (Yellowstone), o riacho que vai a dois oceanos | caiu: "The Creek that Flows to Two Different Oceans..." (That Is Interesting, 19/06/2022, **1.022.444**), o mesmo ângulo |
| 12 | Os dois braços do Long Island (as morainas) | caiu: "Why Long Island Is Sitting On The Most Valuable Land In Human History" (geography, 27/09/2026, **176.420**), que abre com a moraina |
| 13 | O Crater Lake sem rio que entra nem sai | caiu: "Why Crater Lake is So Deep" (National Park Diaries, 13/06/2022, **285.198**) |
| 14 | O cânion submarino de Monterey | caiu: "Monterey Canyon: A Grand Canyon beneath the waves" (MBARI, 18/08/2020, **73.030**; clipe de 1 min, mas o mesmo ângulo) |
| 15 | As praias antigas nas montanhas de Salt Lake City (o lago Bonneville) | caiu: "Lake Bonneville's Epic Ancient History Explained" (Navajo Explorer, 20/06/2025, **91.597**) e Urban Atlas (22/12/2025, **55.294**) |
| 16 | São Francisco bebe de dentro de Yosemite (Hetch Hetchy) | caiu: "Yosemite Dam Operator Quit After 18 Years…" (Donovan Dread, **13/10/2026, 216.789**), ficção com o mesmo gancho, há 5 semanas |
| 17 | O Hells Canyon, mais fundo que o Grand Canyon | caiu: curto "America's deepest canyon isn't the Grand Canyon…" (Why It Formed, **09/11/2026, 85.199**), viral há 8 dias |
| 18 | Atlanta, a cidade grande sem rio | caiu: "Why Atlanta Makes No Sense as a U.S. City" (GeoLogic, 24/06/2026, **126.470**) |
| 19 | Seattle, que lavou os próprios morros para o mar | caiu: "Seattle Moves a Mountain…" (SeattleArchives, 2014, **128.527**) e "Why Seattle Shouldn't Exist…" (GeoLogic, 02/09/2026, 44.681) |
| 20 | A linha das quedas (Filadélfia, Baltimore, Richmond em fila) | caiu: That Is Interesting (2022, **586.662**) e Beaver Geography (2024, **171.901**) |
| 21 | Toronto e a margem do antigo lago Iroquois | caiu: "How A Forgotten Lake Shaped Canada's Largest City" (Urban Atlas, 03/02/2026, **76.562**) |
| 22 | Os lagos redondos de Orlando (o calcário da Flórida) | caiu: "Half of Florida Is Still Underwater…" (Below The Map, **08/10/2026, 396.898**) e "Orlando's SINKHOLE CRISIS…" (10/04/2026, 85.915) |
| 23 | O cabo da Boa Esperança não é a ponta da África (o cabo das Agulhas) | caiu por julgamento: "Why the Cape of Good Hope Was a Death Trap for Sailors" (20/05/2025, **672.268**) cobre o mesmo cabo e a mesma rota; o limite da IHO (20° E) foi lido |
| 24 | Boston, metade aterro | caiu por julgamento: "Boston Was Doubled in Size Using Landfill…" (Borrowed Century, 21/04/2026, 11.628), outro de 2026 no tema, e a esquisitice é de obra, não de mapa |
| 25 | Os Finger Lakes como marcas de garra | caiu por julgamento: GeologyHub (09/07/2024, 44.601) e GeoBrad (25/09/2025, 37.672) já explicam a formação |
| 26 | Por que Kansas City fica no Missouri | caiu: pelo menos 4 curtos com a mesma pergunta (views não lidas), e a resposta é de nome, não de geografia |
| 27 | A cintura de 2 milhas de Maryland (Hancock) | caiu: curtos "Why Does Maryland Look Like This?" e "Why is Maryland the Shape it is?" e listas (views não lidas) |
| 28 | Por que o Alabama quase não tem costa (o panhandle da Flórida) | caiu: "Why Isn't The Florida Panhandle Part Of Alabama?", o curto do panhandle e outros (views não lidas) |
| 29 | O rio Salt seco no meio de Phoenix | caiu: notícia quente (a cheia de 02/11/2026, vários vídeos de alerta) |
| 30 | O Havaí de 1.500 milhas | caiu: "Hawaii Is WAY Bigger Than You Think" e pelo menos 3 curtos (views não lidas) |

Olhados por alto e largados sem ler o `/watch` (o molde do enxame já estava no título): Denver longe das montanhas ("…Makes No Sense", "…Opposite"),
monte Washington ("Why So Many Die on This Small Mountain"), baía de Fundy ("…Isn't What You Think"), Cape Cod e Maine ("…Hiding Something"), a
cratera sob a baía de Chesapeake, a forma de luva de Michigan e as Ilhas de Toronto (livres no YouTube, mas a página da placa deu 404 e os fatos não
foram lidos; ficam de reserva).

---

## O meu top 5, e por quê

1. **"Why Minnesota Has 10,000 Lakes and Texas Had to Build Its Own" · 6,5.** O mapa é o paradoxo: os lagos naturais param numa linha que corta os EUA.
   Dois nomes muito buscados, a medida é nossa (o NHD contra o limite do gelo) e nunca foi mostrada como um mapa só. Vídeo mais próximo: "The Science
   Behind Minnesota's 10,000 Lakes" (GeologyHub, 26/07/2024, 23.287), só Minnesota; o perigo é a lista "Minnesota's Lakes Are Hiding Something…"
   (27/05/2026, 166.184).
2. **"Why the Mississippi River No Longer Matches Its State Lines" · 6,5.** O rio mais conhecido do país, uma esquisitice que só o mapa mostra (a linha
   que se descola da água) e o total que ninguém calculou (quantos pedaços, quantas milhas quadradas do lado errado). Vídeo mais próximo: "The Bizarre
   Geography of The Mississippi River | 4K" (Hidden on Earth, 21/09/2026, 9.724), onde é um item de 30.
3. **"Why Michigan Owns an Island 14 Miles From Canada" · 6,0.** O mapa, o tratado com a ilha que não existia e a rocha que liga a ilha ao Michigan do
   outro lado do lago. Vídeo mais próximo no ângulo: "History of Isle Royale" (Author Marie LaPres, 28/04/2024, 922); o lugar esquentou com "Why They've
   Been Watching This Island for 68 Years" (21/10/2026, 141.148, os lobos).
4. **"Why One Peak in Glacier National Park Drains to Three Oceans" · 6,0.** O mapa mais bonito da lista e um poder escondido (o canal de 1915 que muda a
   água de mar). Vídeo mais próximo: "Canada's Great Divide: When The Pacific, Atlantic and Arctic Collide" (TRACKS, 22/09/2024, 101.172), a ideia
   irmã no Canadá; no pico de Montana, só clipes de trilha (3.358 o maior).
5. **"Why White Sands Sits Inside a Missile Range" · 5,5.** A ponte mais direta para "a geografia explica o poder": a bacia sem saída fez as dunas e o
   vazio que o Exército quis. Vídeo mais próximo: "White Sands National Park & The Birth of the Atomic Bomb" (View Master Travels, 29/03/2025, 5.426);
   o lugar estourou há duas semanas com as pegadas (246.993).

## O que ficou a confirmar de mais importante

1. **A procura.** Nada foi medido no vidIQ; a busca da web não prova ausência nem dá volume. O teste de colisão de título e o volume de "minnesota
   lakes", "mississippi river border", "isle royale", "glacier national park" e "white sands" são o primeiro passo.
2. **Os lagos:** os 11.842 de Minnesota (o DNR recusou, 403) e o mito do "único lago natural do Texas" (o TWDB diz "one of Texas' few non-oxbow natural
   lakes"); a conta no NHD ainda não foi feita.
3. **O Mississippi:** quais pedaços existem hoje e quanto somam. A medida é o vídeo; sem ela, fica a lista de curiosidades que a Hidden on Earth já fez.
4. **Isle Royale:** como a ilha entrou em Michigan (a lei de estado de 1836-1837) não foi lido na origem, e a moda da Toledo War nesta semana pode ajudar
   ou engolir o tema.
5. **Glacier:** a baía de Hudson como "oceano" no título, o nome do golfo na tela, e o tratado de 1909 no ato 3, que repete o tema de água do vídeo 7.

---

## Os arquivos de trabalho

- `out/_pautas/video-8/_trabalho/yt_meta.py` e `yt_linha.py` (da 1ª rodada): a leitura das páginas `/watch`, um pedido por vez.
- `out/_pautas/video-8/_trabalho/r2/lote-a.jsonl` a `lote-j.jsonl`: as respostas brutas desta rodada.
- `out/_pautas/video-8/_trabalho/r2/titulos_r2.py`: a contagem de caracteres dos títulos.
- `out/_pautas/video-8/_trabalho/r2/*.pdf`: Lakeline (NALMS, 2012), a decisão de 1822 (RIAA), a IHO S-23 de 1953 (cópia do VLIZ) e o Rainfall Atlas
  (BAMS, 2013); o documento de fundação de Isle Royale (6,8 MB) está em `midia/_pautas/video-8/isro-foundation.pdf`, fora do git.
