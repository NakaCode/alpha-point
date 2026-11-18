# Cético: `death-valley` ("Why America's Lowest Point Is 85 Miles From Its Highest"), 17/11/2026

**Veredito: DERRUBADO. Nota: 3,0 / 10.**

Os fatos se seguram, mas não há nada a disputar no ângulo:
- **O ângulo é a curiosidade mais copiada do enxame agora.** Em 2026 saíram 20 curtos com "85 miles" no título, 17 deles
  desde 01/10 e 6 nos últimos 7 dias, um deles hoje. Há também:
  - um título quase igual ao de trabalho, "Why America's Lowest and Highest Points Are 85 Miles Apart", de 06/11/2026;
  - vídeos longos do mesmo ângulo em canais de 48,1 mil e 19,7 mil inscritos;
  - uma lista de 312 mil views que abre com o fato.
- **Nenhum dos 20 curtos passou de 1,6 mil views.** O fato está gasto e já não puxa.
- **A medida candidata já foi mostrada por 4 canais em 3 semanas.** É o perfil de altitude Whitney → Badwater, tirado de um
  DEM aberto, que aparece até no mesmo DEM do USGS.
- **O título de trabalho é falso como está escrito.** O ponto mais alto da América é o Denali; o Whitney é o mais alto dos 48
  estados contíguos.

**O ângulo livre do mesmo lugar** (§7): "Why Death Valley Is Deeper Than the Grand Canyon". O vale não foi cavado: o bloco caiu
entre falhas. O chão que se vê, a −282 ft, está sobre mais de 11 mil pés de entulho. A sombra de chuva explica por que ele não é
um lago. Tem prova de interesse: um curto de 164 mil views, de 03/10/2026, conta que o vale "afundou". Nenhum título junta o
Death Valley e o Grand Canyon. Mas o enxame está em cima da geologia do Death Valley neste mês, e um documentário da HISTORY
(3,7 mi de views) ocupa a busca. **Nota provisória: 5,0**, abaixo da régua das melhores pautas do canal (6,5 a 7,5). É reserva,
não pauta de pé.

Lido entre ~21:30 e ~21:50 de 17/11/2026. Os scripts, as respostas e as saídas estão em
`out/_pautas/video-8/_trabalho/cetico-death-valley/`:
- `gnis.py`: os pontos do GNIS e as distâncias pela geodésica;
- `perfil.py` e `perfil.tsv`: o perfil Whitney → Badwater no 3DEP;
- `corte_vale.py`: o corte Telescope Peak → Badwater → Dantes View;
- `abaixo_do_mar.py`: a área e o volume abaixo do nível do mar;
- `subida_por_passo.py`: a subida acumulada, conforme o passo;
- `rotas_commons.py`: as rotas do OSRM e a contagem do Commons;
- `vidiq.tsv`: as 7 chamadas;
- `watch.jsonl`: as 9 páginas `/watch` lidas.

O raster do 3DEP (5,0 MB, sha256 `87ae4425…0fafa`) foi movido para `midia/_pautas/video-8/cetico-death-valley/`, fora do git.

## 1. Os fatos que seguram o paradoxo e o gancho

| # | Fato | Fonte (lida em 17/11/2026) | Veredito |
|---|---|---|---|
| F1 | "Badwater Basin is the lowest point in North America at 282 ft (86 m) below sea level." As salinas cobrem "nearly 200 square miles". | NPS, Badwater Basin: https://www.nps.gov/places/badwater-basin.htm | **CONFERE**. O 3DEP a ~100 m dá −279 ft no ponto mais baixo (36,2413 N; 116,8428 W): a média da célula suaviza o fundo. |
| F2 | O Mount Whitney tem 14.505 ft (4.421 m), no NAVD88, e é "the tallest mountain in the 'lower 48' states". A ficha do NGS, GT1811 (WHITNEY), dá 4.421,1 m (14.505 ft) no NAVD 88; o valor antigo, no NGVD 29 (1986), é de 14.498 ft, "superseded". O condado na ficha é "CA/INYO". | NPS, Sequoia & Kings Canyon: https://www.nps.gov/seki/planyourvisit/whitney.htm; NGS: https://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox=GT1811 | **CONFERE**. A tabela do USGS (https://www.usgs.gov/educational-resources/highest-and-lowest-elevations) e o artigo da NPS sobre os pontos altos ainda dão **14.494 ft**: usar 14.505, com o NGS. |
| F3 | A distância de "about 85 miles". A NPS diz que o Whitney "happens to be within 85 miles of the lowest place in North America, the Badwater Basin". | NPS, Natural High Points of States: https://www.nps.gov/articles/000/state-high-points.htm. A nossa conta pela geodésica (WGS84) usa o cume do NGS e o ponto do GNIS 255963 (Badwater Basin, 36,25023 N; 116,82590 W) | **CONFERE**: dá **84,8 mi** (136,4 km). Até a parada de Badwater, a placa e o estacionamento (GNIS 1656428), são **88,3 mi**. O "85" vale até o ponto do GNIS, que fica no meio da salina, cerca de 3,6 mi a oeste da placa. |
| F4 | De carro: **134,0 mi** (3h16) da parada de Badwater ao Whitney Portal, e 122,7 mi até Lone Pine. A corrida Badwater 135 tem "135 miles (217km)" até o Whitney Portal, "8,300’", com "14,600’ (4450m) of cumulative vertical ascent". | OSRM (servidor de demonstração, dados do OSM), 2 pedidos; AdventureCORPS: https://www.badwater.com/event/badwater-135/ | **CONFERE**, mais ou menos. A própria página da corrida diz 280’ e 282’ para Badwater, e 8.300’ e 8.360’ para o Portal. O curto da Map Reasons diz "146 miles apart by road", e não sei de onde ele tirou. |
| F5 | O Telescope Peak, no Panamint, "at 11,049 ft (3,368 m), this peak is over two miles (3.2 km) above you". E: "Nowhere else in America can you see such a dramatic vertical relief over such a close distance." | NPS, Badwater Basin (a mesma página de F1) | **CONFERE**. Pela nossa conta, o Telescope fica a 15,7 mi do ponto do GNIS. A frase da NPS sobre o relevo trata do Telescope sobre Badwater, não do Whitney. |
| F6 | **Por que tão perto, o vale.** O chão "has been steadily slipping downward, subsiding along the fault". "The basin continues to subside and the mountains rise ever higher." "Beneath Badwater lies more than 11,000 feet of accumulated sediment and salts." Há "fresh fault scarps exposed near Badwater". | NPS, Death Valley, Geology: https://www.nps.gov/deva/learn/nature/geology.htm | **CONFERE** |
| F7 | **O Basin and Range.** A crosta da província foi "stretched up to 100% of its original width", "thinned and cracked, creating large faults", com um "alternating pattern of ranges and valleys". | NPS, Basin and Range Province: https://www.nps.gov/articles/basinrange.htm | **CONFERE** |
| F8 | **O bloco da Sierra.** "an asymmetric mountain range with a long, gentle western slope and a short, steep eastern escarpment": um bloco "bounded on its east side by a fault system", "uplifted and tilted westward". | NPS, Yosemite, Geology: https://home.nps.gov/yose/learn/nature/geology.htm | **CONFERE** |
| F9 | **A sombra de chuva e o calor.** "Four major mountain ranges lie between Death Valley and the ocean." "Average rainfall is less than 2 inches (5 cm)." O vale é "a long, narrow basin 282 feet (86 m) below sea level, yet is walled by high, steep mountain ranges". O recorde: "134°F (57°C) … at Furnace Creek on July 10, 1913". | NPS, Death Valley, Weather and Climate: https://www.nps.gov/deva/learn/nature/weather-and-climate.htm | **CONFERE**. A página não fala da Sierra pelo nome: "four ranges" é o número da NPS. |
| F10 | O Grand Canyon tem "Average, 1 mile (1.6 km)" de profundidade. A North Rim está a 8.000 ft, e Phantom Ranch, no rio, a 2.400 ft. | NPS, Grand Canyon, Park Statistics: https://www.nps.gov/grca/learn/management/statistics.htm | **CONFERE** (é para o ângulo de §7) |
| F11 | "Nearly 550 square miles" do parque ficam abaixo do nível do mar. | Só em fontes secundárias (LiveScience, New World Encyclopedia), pela busca; não achei a frase na NPS | **NÃO CONFERIDO** na fonte primária, e **a nossa medida não bate**: o 3DEP dá **285 mi²** (§4). |
| F12 | A tabela "Elevations and Distances in the United States", do USGS. | https://pubs.usgs.gov/gip/Elevations-Distances/elvadist.html | **NÃO CONFERIDO**: deu **403**, e não foi contornado. A outra tabela do USGS (F2) foi lida no lugar dela. |
| F13 | As fontes de Furnace Creek vêm de água que caiu em Nevada (fluxo entre bacias, pelo aquífero de carbonato). | Só pela busca: USGS WRI 98-4114; Belcher et al., 2009; Anderson et al., 2006, que contesta | **NÃO CONFERIDO**, e é **disputado** na literatura: não vai à tela como fato fechado. |

**A palavra forte demais:**
- **"America's Lowest Point Is 85 Miles From Its Highest"** é **falso**. O ponto mais alto da América (dos EUA e da América do
  Norte) é o Denali, no Alasca. O Whitney é o mais alto dos 48 contíguos (F2), e o Badwater é o mais baixo da América do Norte
  (F1). A frase verdadeira: "North America's lowest point is about 85 miles from the highest peak in the lower 48."
- **"85 miles"** vale até o ponto do GNIS, no meio da salina. Até a placa de Badwater, onde todo mundo tira a foto, são 88.

## 2. A colisão (vidIQ: 35 créditos, 5 ACIMA do meu teto de 30)

Foram 7 chamadas, todas em `_trabalho/cetico-death-valley/vidiq.tsv`: 5 buscas no YouTube e 2 pesquisas de palavra-chave. O
saldo foi de 5.496 a 5.401, uma diferença que inclui os outros céticos que rodavam ao mesmo tempo. **Passei do teto em 5
créditos** (K8). Os 5 vídeos mais próximos:

| # | Título | Canal (inscritos) | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|
| 1 | Why America's Lowest and Highest Points Are 85 Miles Apart | Mike (7) | 76 | 06/11/2026 | 0:48 | **Sim, no título**: é o de trabalho com outras palavras. O `/watch` foi lido. |
| 2 | How California Secretly Hides Death Valley and Mount Whitney Just 85 Miles Apart | GeoMap Unveiled (48,1 mil) | 1.086 | 27/03/2026 | 8:57 | **Sim, no ângulo, em vídeo longo**: tem um capítulo "How tectonic forces and Basin & Range geology shaped this landscape". O `/watch` foi lido. |
| 3 | Why Is Death Valley Next to Mount Whitney? | Rihla (8) | 35 | 25/10/2026 | 4:02 | **Sim, no ângulo e na medida.** Tem o perfil Whitney → Badwater no Copernicus DEM, o "summit-to-rock" (> 25 mil pés), o GPS da Sierra subindo e o terremoto de 1872. O `/watch` foi lido. |
| 4 | Southern California Has the Highest and Lowest Points in America. 25 Facts. | MapReels (19,7 mil) | 795 | 22/09/2026 | 14:49 | **No gancho**: abre ("85 Miles, Top to Bottom") e fecha ("1. 85 Miles Apart") com o fato. O `/watch` foi lido. |
| 5 | California Is Hiding Something Nobody Talks About | Below The Map (8,1 mil) | 312.175 | 06/10/2026 | 24:42 | **No gancho**: o item #30 é "The highest and the lowest", e o #24, "The valley that's sinking". O `/watch` foi lido. |

**O enxame de curtos com "85 miles" no título.** São 20 em 2026: 1 em março, 1 em abril, 1 em agosto e 17 de 01/10 a 17/11.
Todos têm de 10 a 1.605 views:
- **De 01/10 a 17/11**:
  - Our World (1.605, 15/11);
  - Maps Unpacked (1.360, 11/11);
  - The Why Atlas (1.289, 08/11);
  - GeoVista (1.262, 08/10);
  - DVxMRT (1.079, 16/11, 15,9 mil inscritos);
  - America Remapped (1.061, 22/10);
  - Map Margins (894, 12/11, "profile: USGS 3DEP");
  - TheMapExplains (687, 07/11, a sombra de chuva);
  - I Didn't Know But Did U? (634, 10/11);
  - Why Maps Lie (319, 30/10, "real elevation profile … at true scale");
  - Map Tangent (242, 29/10);
  - Mapcast World (141, 15/11);
  - Turns Out America (123, 23/10);
  - Mike (76, 06/11);
  - Drawn to Scale (76, 08/11);
  - Terra Logic (47, 07/11);
  - daily fun facts (24, **hoje**, 17/11, 21:26 UTC).
- **Antes de outubro**:
  - Stas & Nick (1.414, 21/04, de viagem);
  - Ground Truth Maps (90, 30/08);
  - Discover Global Geography (10, 01/03).

Há também os médios e longos de 2026, Nether Facts (5:00, 54 views) e Info Library (6:05, 6 views), e o curto da Map Reasons
(1.233 views, 02/10), que traz o fato na descrição ("80 miles", errado) e "Nothing carved it".

- **O que ocupa a busca pelo par**: a aventura, não a geografia. São a rota Lowest to Highest e a corrida Badwater 135:
  - thruhikers (1,09 mi de inscritos), com 2,5 mi de views num curto de 2024 e 115 mil num longo de 2025;
  - Cody Townsend, com 827 mil (2021);
  - "The Line – Badwater 135", com 380 mil (01/07/2026).
- **O único curto de geografia com o fato acima de 2 mil views** é "California's Geography is Insane", do What The Geo: 28,3 mil,
  de 31/10/2025, e é uma lista sobre a Califórnia.
- **Conclusão: colide em tudo** — no título, no ângulo, no gancho e na medida. O título e o ângulo foram feitos dezenas de vezes
  nos últimos 12 meses, e o enxame continua chegando: 6 curtos nos últimos 7 dias.

## 3. O potencial real, pela régua

1. **A busca**:
   - "death valley" tem ≈ **50,7 mil buscas/mês**, com concorrência 54 (o Big Sur tinha 13,3 mil, com 40). Mas a palavra é
     ruidosa: os mercados de topo são o Vietnã (20 %), a Nigéria (13 %) e o Paquistão (13 %);
   - nos termos que contêm "death valley", o 1º é o salmo ("valley of the shadow of death", 36 mil); depois vêm:
     - "death valley is hiding something nobody talks about" (28,8 mil);
     - "death valley national park" (19,9 mil);
     - "death valley germans" (14,8 mil);
     - "how do people live in death valley at 56°c" (12,2 mil);
     - "what scientists just found beneath death valley" (5,7 mil);
     - as pedras que andam (5 a 10 mil);
   - **nenhum termo com "lowest", "highest", "whitney" ou "85 miles" aparece entre os 27 com volume**: a curiosidade não é
     buscada;
   - "mount whitney" não foi medido, porque o teto acabou. "grand canyon" tem ≈ 90,9 mil/mês, com concorrência 70 (é do
     `demanda.md`).
2. **Prova de interesse**:
   - **no ângulo, não há**: são 20 curtos com o teto em 1,6 mil;
   - **no lugar, há**:
     - Below The Map, com 312 mil (06/10/2026);
     - After Hours Archive, "Why Death Valley Is More Dangerous Than You Think", com 178,8 mil (6,5 mil inscritos, 17/06/2026);
     - **Why It Formed, "Death Valley is not just a desert. It sank 282 feet below sea level.", com 164,2 mil** (8,7 mil
       inscritos, 03/10/2026). É o estouro que serve ao §7.
3. **O lugar vago no vídeo longo**: **não existe** para o ângulo. Já fizeram:
   - GeoMap Unveiled (48,1 mil inscritos, 8:57);
   - MapReels (19,7 mil, 14:49);
   - Rihla (4:02, com a medida);
   - Below The Map (312 mil).
4. **O paradoxo em 3 frases e no mapa**: cabe ("the lowest point in North America, the highest peak in the lower 48, 85
   miles apart"). Mas é curiosidade, não paradoxo: some quando se diz "a Sierra é um bloco inclinado sobre uma falha", e a
   miniatura de todos os 20 curtos é a mesma (dois pinos e uma seta "85 MILES").
5. **A geografia explica o porquê**: sim, e bem (F6 a F9).
6. **A medida nossa**: **não é mais nossa** (§4).

- **O enxame**:
  - março, abril e agosto tiveram 1 curto cada; outubro, 5; e novembro, até o dia 17, 12;
  - os canais têm de 3 a 48,1 mil inscritos, e vários declaram voz sintética;
  - o perfil do DEM, que era a nossa medida, saiu em 25/10, 30/10, 12/11 e 16/11.
- **Os 13 a 16 minutos**:
  - o ângulo tem de 4 a 9 min de substância: a Rihla fez em 4:02, e a GeoMap em 8:57;
  - para chegar a 13 ou 16 min, o vídeo vira um passeio pelo Death Valley (o calor, as pedras, o lago, o vale do Owens) e perde
    a espinha de um paradoxo só;
  - o passeio já existe, com 3,7 mi de views (HISTORY, "How the Earth Was Made", 44 min, 2021).

## 4. A nossa versão: a medida (conta preliminar, feita)

**O perfil Whitney → Badwater** (`perfil.py`; 3DEP do USGS, domínio público, pelo `getSamples`, um ponto a cada 200 m, 681
pontos e nenhum vazio):

| Na linha reta (84,6 mi pela esfera) | Milha desde o Whitney | Altitude (3DEP) |
|---|---|---|
| Cume do Whitney | 0 | 14.497 ft (o NGS dá 14.505) |
| Owens Valley, o fundo na linha | 19,8 | 3.564 ft |
| Inyo Mountains, a crista na linha | 31,9 | 7.259 ft |
| Panamint Valley, o fundo na linha | 50,3 | 1.544 ft |
| Panamint Range, a crista na linha (ao norte do Telescope) | 69,2 | 7.603 ft |
| Death Valley, o fundo na linha | 83,2 | −279 ft |

- **Na linha**: ficam 4,6 mi abaixo do nível do mar, e o desnível total é de 14.787 ft (2,8 mi), com os números da NPS e do NGS.
- **A subida acumulada, de Badwater ao Whitney pela linha, não se segura**:
  - dá 38.400 ft com passo de 200 m, 35.300 com 400 m, 30.900 com 1 km e 26.300 com 2 km (`subida_por_passo.py`);
  - não serve para a tela;
  - a rota a pé de verdade (a L2H) declara ~33 mil pés, e a corrida, 14.600 ft até o Portal (F4).
- **Por que a medida não é nossa**: o perfil, com as 3 serras e os 2 vales, é exatamente o que mostraram:
  - a Rihla, com o Copernicus DEM, em 25/10;
  - a Why Maps Lie, "stretched and then at true scale", em 30/10;
  - a Map Margins, com o USGS 3DEP, em 12/11;
  - a DVxMRT, em 16/11.

**As medidas que ainda são nossas** (para o ângulo de §7; preliminares):
- **O corte do vale** (`corte_vale.py`, 3DEP, um ponto a cada 100 m):
  - **do Telescope Peak ao fundo, 11.319 ft em 15,7 mi** (com a NPS: 11.049 + 282 = 11.331 ft, ou 2,15 mi);
  - do fundo ao Dantes View, 5.759 ft em 5,9 mi;
  - o vale tem 21,6 mi de largura de crista a crista;
  - o Grand Canyon tem 1 mi de profundidade em média, e 5.600 ft da North Rim até Phantom Ranch (F10). A parede oeste do Death
    Valley tem o dobro.
- **O buraco abaixo do nível do mar** (`abaixo_do_mar.py`, 3DEP a ~100 m, numa caixa que o recorte não toca nas bordas):
  - **285 mi² (738 km²)**, de 35,87 a 36,62 N (51 mi de norte a sul);
  - **42,8 km³ (34,7 milhões de acre-pés)** entre o chão e o nível do mar;
  - os "nearly 550 square miles" que as fontes secundárias repetem (F11) são quase o dobro. Antes da tela, é preciso conferir
    com o 3DEP a 10 m e achar a origem do 550.
- **O chão de rocha enterrado**: 11.049 + 282 + "more than 11,000" (F6) dá **≥ 22.300 ft (4,2 mi)** do cume do Telescope até a
  rocha sob Badwater.
  - É maior que a altura do Denali (20.310 ft, um número que **não li hoje**).
  - A Rihla já disse "more than 25,000 feet", mas a partir do Whitney.
  - Para ser nosso de verdade, o corte precisa da rocha desenhada pela gravimetria do USGS, a profundidade do embasamento do
    Basin and Range (Saltus e Jachens, 1995, GP-1012). **NÃO CONFERI** se a grade está aberta e onde.

## 5. O material

- **Mapa com geometria real**:
  - o 3DEP (domínio público) para o relevo, o corte e o recorte abaixo do mar;
  - os pontos do GNIS e a ficha do NGS;
  - o limite do parque (NPS Land Resources);
  - as falhas pelo USGS Quaternary Fault and Fold Database (domínio público; não baixado);
  - o Natural Earth.

  É mapa de sobra.
- **Satélite aberto**:
  - o Landsat e o Sentinel-2;
  - o relevo do ASTER GDEM pela NASA GIBS, como na miniatura do Columbia;
  - a NASA Earth Observatory tem cenas do lago temporário de 2024 em Badwater (é pista: não li).
- **Foto de acervo livre** (Commons, pela API, um pedido, com o User-Agent do canal):
  - Death Valley: 613 arquivos e 27 subcategorias;
  - Death Valley National Park: 355;
  - Badwater Basin: 175;
  - Mount Whitney: 140;
  - Owens Valley: 140;
  - Panamint Range: 49;
  - Telescope Peak: 33;
  - Lake Manly: 19;
  - a NPS tem acervo próprio de domínio público. Dá para 13 a 16 min sem esforço.

## 6. O título e o gancho que eu defendo

**Para o ângulo de trabalho, nenhum.** Toda forma de "85 miles apart" já existe, e a de trabalho é falsa (F2). Se a Sala ficar
com o lugar, o que eu defendo é o ângulo de §7:

- **Título: "Why Death Valley Is Deeper Than the Grand Canyon"** (48 caracteres).
  - Leva os dois nomes buscados ("death valley" ≈ 50,7 mil; "grand canyon" ≈ 90,9 mil).
  - Não achei na busca v4 nenhum vídeo que junte os dois.
  - É verdadeiro com os números da NPS: são 11.331 ft da crista oeste ao fundo, contra 1 mi de média no Grand Canyon.
  - **Não escrevi "Twice"**: contra os 6.093 ft de profundidade máxima que o GeologyHub dá ao Grand Canyon (fonte não
    primária), a razão é 1,86.
- **Alternativas**:
  1. "Why America's Lowest Point Isn't the Bottom of Death Valley" (59): o chão de rocha está 2 mi abaixo da salina;
  2. "Death Valley Wasn't Carved. It Fell." (36): perto do "Nothing carved it" da Map Reasons, que está só na descrição.

  Nenhuma das três foi buscada à parte no vidIQ: o teto acabou.
- **O gancho** (3 frases, 44 palavras): "The Grand Canyon is about a mile deep. From Telescope Peak down to the floor of Death Valley,
  it's more than two, and no river cut it. And the salt flat at the bottom, the lowest ground in North America, isn't really
  the bottom."
- **A miniatura**:
  - o relevo amarelo do Panamint e das Black Mountains;
  - **o chão abaixo do nível do mar em vermelho** (o recorte de 285 mi²);
  - **a linha do nível do mar em ciano**, desenhada nas paredes do vale, como se o mar estivesse ali;
  - uma barra branca grossa com a profundidade do Grand Canyon ao lado da parede de 2 mi, na mesma escala;
  - na caixa preta, **"2 MILES"**; na B, **"NO RIVER"**.
  - Risco: ela tende a corte e perfil, menos a mapa do que o Lucas pediu. Vale testar um mapa em perspectiva antes.

## 7. O ângulo livre do mesmo lugar (a reserva, nota provisória 5,0)

**A pauta**: "o Death Valley não é um cânion; é um bloco que caiu". São três atos:
1. **A ilusão**:
   - 2 mi de parede, contra 1 mi do Grand Canyon, sem rio nenhum;
   - o fundo, a −282, não é o fundo: há mais de 11 mil pés de entulho e sal (F6);
   - o buraco abaixo do mar tem 285 mi² e caberia nele 34,7 milhões de acre-pés (§4).
2. **O porquê**:
   - a crosta esticada até o dobro (F7);
   - a Sierra inclinada (F8);
   - as falhas do Black Mountains, que deixaram escarpas frescas em Badwater (F6);
   - o lago Manly, que o encheu na era do gelo;
   - as 4 serras da sombra de chuva, que hoje o deixam seco (F9).
3. **Ainda se mexe**:
   - "the basin continues to subside" (F6);
   - o terremoto de 1872 no vale do Owens, a ler na fonte;
   - o Whitney a 85 mi, como uma batida do ato, não como título.

**A régua, para a reserva:**
- **Busca**: o nome é grande ("death valley" ≈ 50,7 mil), e o "grand canyon" soma.
- **Interesse**: o curto do Why It Formed (164 mil, 03/10/2026) é exatamente este ângulo.
- **Longo vago**: há só o "Death Valley's Killer Heat Comes From a Valley That's Still Sinking", da Beneath The Trail (16
  inscritos, 223 views, 12:50, de 14/11/2026, ou seja, 3 dias atrás), e o da GeoMap (de março).
- **Medida**: dá para ser nossa (o recorte abaixo do mar, a correção do 550, o corte com a rocha enterrada).
- **Contra**:
  - o enxame está em cima da geologia do Death Valley agora: Why It Formed (03/10), Map Reasons (02/10), earthform insights (08/10),
    Rihla (25/10) e Beneath The Trail (14/11);
  - a HISTORY ocupa a busca da geologia com 3,7 mi de views;
  - a miniatura tende a corte.

  Por isso, 5,0. Ela sobe se a grade de profundidade do embasamento estiver aberta (o corte com a rocha é a imagem que ninguém
  mostrou) e se a busca por "death valley" + "grand canyon" juntos for medida.

## 8. Os pontos

- **K1 · GRAVE**: o ângulo é a curiosidade mais copiada do enxame. São 20 curtos em 2026 com "85 miles" no título, 17 desde
  01/10, 6 nos últimos 7 dias e 1 hoje. Também já existem:
  - um título quase igual ("Why America's Lowest and Highest Points Are 85 Miles Apart", 06/11/2026);
  - longos do mesmo ângulo em canais de 48,1 mil e 19,7 mil inscritos;
  - uma lista de 312 mil views que abre com o fato.

  E nenhum curto passou de 1,6 mil views: o fato está gasto.
- **K2 · GRAVE**: a medida candidata já não é nossa. O perfil Whitney → Badwater, de DEM aberto, saiu em 4 canais entre 25/10 e
  16/11, um deles com o mesmo 3DEP do USGS. Os números extras não se seguram: a subida acumulada vai de 26 mil a 38 mil pés,
  conforme o passo.
- **K3 · MÉDIO**: o título de trabalho é falso. "America's … Its Highest" é o Denali, no Alasca; o Whitney é o mais alto dos 48
  contíguos. O "85 miles" vale até o ponto do GNIS no meio da salina; até a placa de Badwater, são 88.
- **K4 · MÉDIO**: a busca do nome é grande, mas ruidosa: os mercados de topo são o Vietnã, a Nigéria e o Paquistão, e o salmo
  lidera os termos. Os termos de lugar são de molde caça-clique ("hiding something", "what scientists just found"). Ninguém
  busca a curiosidade em si.
- **K5 · MÉDIO**: o ângulo não dá 13 a 16 min sem virar um passeio pelo Death Valley, e o passeio já tem dono (HISTORY, 3,7 mi
  de views; Below The Map, 312 mil).
- **K6 · MÉDIO** (para a reserva de §7): o enxame está na geologia do Death Valley neste mês (5 vídeos de 02/10 a 14/11), e um
  curto de 164 mil já contou que o vale "afundou". Cada semana de produção é uma chance de alguém fazer o longo bom antes.
- **K7 · LEVE**: a altitude do Whitney muda conforme a fonte. Vale 14.505 ft (NAVD88, NGS e NPS SEKI), contra 14.494 na tabela
  do USGS e no artigo da NPS sobre os pontos altos. A página da Badwater 135 diz 280’ e 282’. Usar 14.505 e −282, com a fonte.
- **K8 · LEVE** (processo): **gastei 35 créditos do vidIQ, 5 acima do teto de 30**. Foram 7 chamadas de 5 créditos: contei a
  pesquisa de termos (`matching_terms`) como a 2ª de palavra-chave e não refiz a soma antes das duas últimas buscas.
- **K9 · LEVE**: ficaram NÃO CONFERIDOS:
  - a tabela "Elevations and Distances" do USGS (deu 403, sem contorno);
  - o "550 square miles" na fonte primária;
  - a origem da água de Furnace Creek, que é disputada na literatura e não vai à tela como fato.
