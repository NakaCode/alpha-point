# Cético: `arizona-strip` ("Why the Grand Canyon Splits Arizona in Two"), 17/11/2026

**Veredito: DE PÉ COM AJUSTE. Nota: 6,0 / 10.**

O paradoxo é verdadeiro e cabe no mapa. Mas a medida candidata, do jeito que foi escrita, é falsa: Colorado City tem tribunal
próprio, e Fredonia chega à sede do condado sem sair do Arizona. Quem cruza Utah e Nevada é a estrada mais rápida de Colorado City
até a sede do condado, Kingman. Fora isso:
- a brecha é menos limpa do que o `demanda.md` diz: em 2026 já saiu um vídeo longo com o mesmo ângulo, e um capítulo de lista que
  estourou já diz a frase do fórum;
- a busca ("grand canyon") é grande, mas disputada (concorrência 70).

Ajustes que seguram a pauta:
- trocar o título;
- usar a frase verdadeira da medida (abaixo);
- ler na origem as tentativas de Utah (K4);
- dar ao tema de Colorado City um tratamento curto e firme (K5).

Lido entre ~20:55 e ~22:00 de 17/11/2026. Os scripts, as respostas brutas e os arquivos baixados estão em
`out/_pautas/video-8/_trabalho/cetico-arizona-strip/`:
- `lugares.py`: os lugares do Censo nos dois CCDs;
- `rotas.py` e `rotas-resumo.tsv`: as rotas;
- `fluxos.py` e `fluxos-saida.txt`: o deslocamento para o trabalho;
- `vidiq.tsv`: as 6 buscas;
- `baixado/`: os PDFs das leis e o xlsx do Censo, com o sha256 do xlsx abaixo.

## 1. Os fatos que seguram o paradoxo e o gancho

| # | Fato | Fonte (lida em 17/11/2026) | Veredito |
|---|---|---|---|
| F1 | As bordas do cânion ficam, em média, a 10 milhas uma da outra ("The average distance across the canyon is only 10 miles"). De carro, entre a South Rim Village e a North Rim Village, são "about 212 miles" e "about 4 1/2 hours". | NPS, Grand Canyon, Directions: https://www.nps.gov/grca/planyourvisit/directions.htm | **CONFERE**. A nossa rota dá 212,2 mi, e a linha reta entre os dois hotéis, 10,8 mi. |
| F2 | O cânion tem "278 river miles (447 km)". A largura mínima é de 600 ft (em Marble Canyon), a média de 10 mi e a máxima de 18 mi. | NPS, Park Statistics: https://www.nps.gov/grca/learn/management/statistics.htm | **CONFERE**. A NPS diz 278 nessa página, e os vídeos do enxame dizem 277: usar 278, com a fonte. |
| F3 | A Navajo Bridge original abriu ao tráfego em 12/01/1929, e a nova em 02/05/1995. As duas "represent one of only seven land crossings of the Colorado River for 750 miles". Depois que a balsa de Lees Ferry afundou, em 1928, "People had to travel 800 miles … around the canyon". | NPS, Glen Canyon, Navajo Bridge: https://www.nps.gov/glca/learn/historyculture/navajobridge.htm | **CONFERE** |
| F4 | A Strip, pelos dois CCDs do Censo 2020 cujo limite segue o rio (Kaibab Plateau, em Coconino, e North Mohave, em Mohave), tem **9.955 moradores** (1.938 + 8.017) e **7.851 mi² de terra** (2.791,1 + 5.060,1), mais 21,5 mi² de água. É 6,9 % da terra do Arizona (113.655,5 mi²) e 0,14 % da gente (7.151.502). | Census, TIGERweb `tigerWMS_Census2020`, camada 20 (County Subdivisions), campos `POP100` e `AREALAND` (resposta em `_trabalho/cetico-arizona-strip/ccd2020.json`) | **CONFERE**, com uma ressalva: a Strip não é uma unidade do Censo. O limite dos dois CCDs vai até o rio, e o recorte bate com os lugares: Meadview, ao sul do lago Mead, cai no CCD de Kingman. A Wikipedia usa a mesma soma, com o Censo de 2000 (8.095 moradores, 7.878 mi² ao todo). |
| F5 | Os lugares do Censo 2020 na Strip, por condado: Mohave tem 7.844 nos lugares nomeados; Coconino, 1.704. A lista está abaixo da tabela. | TIGERweb 2020, camadas 26 e 28, ponto no polígono (`lugares.py`) | **CONFERE** |
| F6 | A Strip é maior em terra que Nova Jersey (7.355,0 mi², com 9.288.994 moradores): 6,7 % maior, com 1/933 da gente. Do outro lado da divisa, Hildale (UT) tem 1.127, Kanab (UT) 4.683 e St. George (UT) 95.342. Kingman tem 32.689, e Flagstaff 76.831. | TIGERweb 2020, camada 80 (estados) e camada 26 | **CONFERE**. Massachusetts (7.801,0 mi²) fica a 50 mi² da Strip: não usar a comparação, que o "Adventures of Shadow" já fez. |
| F7 | **A frase da pauta** ("para chegar ao próprio fórum, atravessam dois outros estados"). Mohave tem o **North Canyon Justice Court em Colorado City** (2100 S Hwy 389). O Superior Court de Mohave fica em Kingman (415 E Spring St). | Mohave County Courts: https://www.mohavecourts.com/court-departments/justice-courts/north-canyon-justice-court e https://www.mohavecourts.az.gov/court-departments/justice-courts | **NÃO CONFERE**. Colorado City tem tribunal (de pequenas causas, trânsito, contravenção). O que fica do outro lado é a sede do condado e o Superior Court. Para Fredonia (Coconino), a sede, Flagstaff, se alcança sem sair do Arizona. Para Beaver Dam e Littlefield, o desvio passa só por Nevada. Ver §4 para a frase verdadeira. |
| F8 | O Território de Utah, pela lei de 09/09/1850 (cap. LI, 9 Stat. 453), é "bounded … on the south by the thirty-seventh parallel of north latitude". É a divisa de hoje, traçada 19 anos antes da descida de Powell (1869). | Statutes at Large, v. 9, p. 453 (govinfo: https://www.govinfo.gov/link/statute/9/453; PDF em `baixado/statute-9-453.pdf`) | **CONFERE** a lei. O ano de Powell (1869) não foi relido hoje (é conhecido, e a NPS o traz). |
| F9 | Pela lei de 05/05/1866 (cap. LXXIII, 14 Stat. 43), Nevada ganha o que fica "west of the thirty-seventh degree of longitude west from Washington" e ao oeste do "river Colorado of the West". É o lado oeste da Strip. Em 1867, a assembleia do Território do Arizona pediu a revogação (H. Misc. Doc. 23, Serial 1302). | Statutes at Large, v. 14, p. 43 (https://www.govinfo.gov/link/statute/14/43; `baixado/statute-14-43.pdf`); a revogação, pelo catálogo da UW-Madison: https://search.library.wisc.edu/catalog/9995588753602122 | **CONFERE** a lei. O pedido de revogação foi conferido só pelo catálogo. |
| F10 | **As tentativas de Utah**: um memorial da assembleia do Território de Utah, de 1865, pede a anexação "of a portion of the Territory of Arizona lying north and west of Colorado River", e a busca o dá como H. Misc. Doc. 53, Serial 1232. O governador Heber Wells (1896–1905) nomeou os comissários R. C. Lund e E. D. Woolley para negociar a anexação com o Arizona, e o governador do Arizona se opôs. Um artigo do Salt Lake Tribune de 23/01/1910 se chama "About the Arizona Strip; Should Belong to Utah". | Só pelos resumos da busca. O catálogo da TAMU deu **403**; o Utah Digital Newspapers deu **418** à leitura automática; a Utah History Encyclopedia (uen.org) não respondeu (conexão recusada); a página do Washington County Historical Society tem o certificado quebrado. Nada disso foi contornado. | **NÃO CONFERIDO** na origem. Há três tentativas com pista de data (1865; 1896–1905; 1910), mas nenhuma lida. Isto segura o ato 2 (K4). |
| F11 | O escritório do BLM que cuida da Strip fica em Utah: "4001 East Aviator Drive, St. George, UT". O distrito tem "more than 2.7 million acres of remote public lands", "north of the Grand Canyon and south of the Utah state line". | BLM, Arizona Strip District Office: https://www.blm.gov/office/arizona-strip-district-office | **CONFERE** |
| F12 | O trabalho mora em Utah: de Mohave, 1.092 ± 489 trabalhadores vão ao condado de Washington (UT) e 175 ± 83 ao de Kane (UT); de Coconino, 416 ± 116 vão a Kane. | Census, ACS 2016–2020, Commuting Flows, table1.xlsx: https://www2.census.gov/programs-surveys/demo/tables/metro-micro/2020/commuting-flows-2020/table1.xlsx (sha256 `1dbf52be…7317ee`) | **CONFERE** o número. A leitura de que "quase todos são da Strip" é inferência pela distância (Kingman fica a 4 h de St. George), não medida. Os 416 de Coconino misturam Fredonia e Page. |

Os lugares do Censo 2020 (F5):
- **Mohave**: Colorado City 2.478, Centennial Park 1.578, Beaver Dam 1.552, Scenic 1.321, Cane Beds 466, Littlefield 256, Kaibab 140 e
  Moccasin 53. Somam 7.844.
- **Coconino**: Fredonia 1.323 e Greenehaven 381. Somam 1.704; o resto mora fora de lugar nomeado (Jacob Lake, Marble Canyon, North Rim).

**A palavra forte demais:**
- **"Splits Arizona in Two"** dá a ideia de metades. O pedaço cortado é 6,9 % da terra e 0,14 % da gente. É verdade que o cânion
  divide o estado em duas partes, mas o título promete mais do que o mapa mostra.
- **"to reach their own courthouse"** é falso (F7).
- **"the only road"** também é falso: são duas pontes na ponta leste (a Navajo Bridge e a da barragem Glen Canyon, em Page), e a
  NPS fala em "seven land crossings … for 750 miles".

## 2. A colisão (vidIQ, 30 créditos)

Foram 6 buscas; todas estão em `_trabalho/cetico-arizona-strip/vidiq.tsv`. Os 5 vídeos mais próximos:

| # | Título | Canal (inscritos) | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|
| 1 | Why the Grand Canyon Cut Off This Part of Arizona | Futbolencia, "The Fifty States" (0) | 9 | 19/08/2026 | 16:28 | **Sim, no ângulo e na forma do título** ("Why the Grand Canyon [verbo] … Arizona"). Canal sem público, e o `/watch` foi lido. |
| 2 | 13 Weirdest and Most Isolated Towns in Arizona | Arizona Revealed (3,4 mil) | 27.855 | 09/11/2026 | 33:33 | **No gancho.** Um capítulo vende "the Arizona Strip towns, where the trip to your own county courthouse leaves the state". Estouro de 14,8x; o `/watch` foi lido. |
| 3 | The Part of Arizona Arizona Can't Reach (short) | History Mapped (575) | 1.636 | 07/11/2026 | 1:39 | No ângulo, em short. |
| 4 | Why NOBODY Lives in the ARIZONA STRIP | GeoStates (104) | 999 | 29/11/2025 | 8:18 | No lugar, pelo molde "Why Nobody Lives". |
| 5 | Why Arizona Gave Up on Lees Ferry, the Crossing That Still Divides the Colorado River | Hank's Roads (26) | 131 | 25/10/2026 | 20:09 | Na travessia (a volta de 800 milhas, a Navajo Bridge). |

- **Os vizinhos de título**:
  - "What's Under Arizona?", da Bedrock Files (6 inscritos, 436 views, 28/10/2026), tem um capítulo "Two Arizonas", mas sobre geologia;
  - "The Civil War Almost Split Arizona Into Two States" é um short de 14/11/2026, com 146 views.

  "Splits Arizona in Two" fica entre os dois.
- **O que ocupa a busca pelo nome**: off-road, pecuária e caça.
  - Matt's Off Road Recovery (2,2 mi de inscritos) tem 4 vídeos de 1,4 a 3,2 mi de views na Strip, um deles de 24/12/2025.
  - Broncs and Donks tem 3,0 mi e 2,7 mi.
  - "Deer kills Deer on Arizona Strip" tem 3,3 mi.

  Antes de 2025, nenhum explicativo de geografia aparece nas 20 primeiras por relevância.
- **Conclusão**:
  - Não há título igual de canal com público. O título de trabalho colide na forma com o nº 1, que é minúsculo, e encosta no "Two
    Arizonas". O risco é baixo-médio e se evita trocando o título.
  - O ângulo já foi tocado 3 vezes em 3 meses (ago., 07/11 e 09/11). A "brecha limpa" do `demanda.md` não é limpa: está vaga de
    vídeo longo **bom**, não de vídeo.

## 3. O potencial real, pela régua

1. **A busca**:
   - "grand canyon" tem ≈ 90,9 mil buscas/mês, com concorrência 70 (o Big Sur tinha 13,3 mil, com 40); "arizona strip" fica abaixo
     de 750 (27), e "arizona", em ≈ 166 mil;
   - o nome é dos mais buscados do país, mas a intenção é de viagem e de geologia, e a disputa é maior que a do Big Sur;
   - o título precisa levar "Grand Canyon" e "Arizona" (os números são do `demanda.md`).
2. **A prova de interesse é parcial.**
   - O estouro recente (o Arizona Revealed, de 27,9 mil e 14,8x, em 09/11) é uma lista de cidades isoladas, e a Strip é 1 dos 13
     itens.
   - O short do ângulo fez 1,6 mil, e a viagem (o P8, de 198 mil) é de 2025.
   - Não há short viral do ângulo, ao contrário do Tahoe e de Chicago.
3. **O lugar vago no vídeo longo existe.** Os longos do ângulo têm 9 e 999 views.
4. **O paradoxo em 3 frases, e no mapa**: forte. Duas bordas a 10 milhas que ficam a 212 de carro; uma cidade do Arizona cuja estrada
   mais rápida até a sede do condado passa por Utah e Nevada; um pedaço do estado maior que Nova Jersey, com menos de 10 mil
   pessoas.
5. **A geografia explica o porquê**: sim.
   - O cânion é a barreira.
   - As duas retas foram traçadas em Washington: o paralelo 37, em 1850, e o meridiano de Nevada, em 1866. As duas vieram antes de
     Powell (1869).
   - A Strip foi povoada a partir de Utah: Lees Ferry, Pipe Spring.
6. **A medida nossa**: sim (§4). A frase do fórum já foi dita (de forma inexata) pelo Arizona Revealed; o número, ninguém mostrou.

- **O enxame**: o Grand Canyon está na mira dos canais minúsculos agora. São pelo menos 8 vídeos longos de outubro e novembro de 2026,
  de canais de 6 a 4.300 inscritos, vários com voz de IA. Do short ao capítulo foram 2 dias (07/11 e 09/11). Se o vídeo levar 3 ou 4
  semanas, conte com mais 1 a 3 sobre o ângulo.
- **Os 13 a 16 minutos**: dão para encher em 3 atos sem linguiça, se o ato 2 tiver as tentativas de Utah lidas na origem:
  1. o paradoxo: as bordas, a estrada, os 9.955;
  2. o porquê: as duas retas de Washington, os pioneiros de Utah, Lees Ferry e a balsa que afundou em 1928, a ponte de 1929, Utah
     pedindo a Strip e o Arizona dizendo não;
  3. o hoje: o BLM em St. George, os trabalhadores que vão a Utah, os monumentos de 2000 e de 2023, Colorado City e Hildale numa
     cidade só.

  Sem o ato 2 lido, o vídeo fica com 10 a 11 min.

## 4. A nossa versão: a medida (conta preliminar, feita)

**As rotas.** Saem do OSRM, com os dados do OpenStreetMap, lidos em 17/11/2026 pelo `rotas.py`. Os estados de cada trecho vêm dos
polígonos do Censo 2020.

| De → até | Milhas | Tempo | Por onde passa | Linha reta |
|---|---|---|---|---|
| Colorado City → Kingman (a sede de Mohave), a mais rápida | **260,6** | 5h09 | Utah > Arizona (I-15) > Nevada > Arizona: ~48 mi em Utah e ~111 em Nevada, **~60 % fora do estado** | 138 |
| Colorado City → Kingman, só pelo Arizona (pela Navajo Bridge e por Flagstaff) | **374,6** | 7h29 | Arizona | 138 |
| Colorado City → St. George (UT) | 43,3 | 1h01 | Utah | 34 |
| Colorado City → Phoenix | 368,2 | 7h19 | Arizona (pela Navajo Bridge) | 250 |
| Fredonia → Flagstaff (a sede de Coconino) | 194,3 | 4h11 | Arizona (pela Navajo Bridge) | 130 |
| Fredonia → Kanab (UT) | 7,1 | 0h11 | Utah | 7 |
| Beaver Dam → Kingman | 190,6 | 3h43 | Nevada (~111 mi) | 118 |
| North Rim → South Rim | 212,2 | 4h57 | Arizona | 10,8 |

**A frase verdadeira, para a tela**: "From Colorado City, the fastest road to the county seat, Kingman, is 261 miles, and about 160
of them are in Utah and Nevada. Staying inside Arizona takes 375." O pedaço que cruza dois estados vale para Colorado City e os
vizinhos dela (Centennial Park, Cane Beds), cerca de 4.500 pessoas. Para Beaver Dam, Littlefield e Scenic (3.100 pessoas), o desvio
cruza só Nevada.

**O pedaço do estado**: 7.851 mi² de terra (mais que Nova Jersey), com 9.955 pessoas, ou 1,3 por mi² (Nova Jersey tem 1.263).

**O trabalho em Utah**: ~1.270 ± 500 trabalhadores de Mohave trabalham em Utah (ACS 2016–2020). Falta o denominador, os trabalhadores
da Strip: é a tabela B08007 dos lugares ou dos CCDs. A API do Censo agora pede chave e devolveu `missing_key`; dá para ler pelo
data.census.gov, no navegador da Sala.

**Os limites:**
- o servidor de demonstração do OSRM é para "reasonable, non-commercial use-cases". Foram 10 pedidos, um por vez. Os números
  vão ser conferidos de outro jeito antes da tela (um mapa no navegador da Sala, ou as milhas da ADOT e da UDOT);
- a geometria é simplificada, e a soma por estado (254 mi) fica abaixo da distância roteada (260,6 mi): por isso "about 160".

## 5. O material

- **Mapa com geometria real**:
  - o rio e o cânion (NHD/USGS, Natural Earth, OSM);
  - as divisas: a camada de estados do TIGERweb, o paralelo 37 e o meridiano de 1866;
  - os dois CCDs do Censo;
  - as rotas (OSM: crédito "© OpenStreetMap contributors").
  É mapa de sobra para levar metade do vídeo.
- **Satélite aberto**: Landsat e Sentinel; a NASA Earth Observatory tem várias cenas do Grand Canyon e do lago Mead; o relevo é o
  SRTM/ASTER (como na miniatura do Columbia).
- **Foto e vídeo de acervo livre**:
  - NPS: as fotos e o B-roll do Grand Canyon, que são de domínio público e que o Backroads Atlas usou; a Navajo Bridge e Lees Ferry
    (Glen Canyon);
  - BLM: o Arizona Strip, a Parashant e a Vermilion Cliffs;
  - Commons (contagem da API, um pedido por vez): a categoria "Arizona Strip" tem 18 arquivos e 20 subcategorias; Colorado City, 13;
    Fredonia, 18; Pipe Spring, 27; Vermilion Cliffs, 249;
  - a foto histórica da ponte de 1929 e da balsa de Lees Ferry ainda é a procurar (NPS, NARA).
  - É o bastante para 13 a 16 min, com os mapas no centro. Das cidades há pouca foto, e de Colorado City não se usa foto de gente
    identificável (K5).
- **Pistas do "agora"** (NÃO CONFERIDAS):
  - a enchente de 29/08/2026, que fechou a trilha North Kaibab e as pontes de pedestre do fundo do cânion (pela descrição do
    Backroads Atlas);
  - o desvio da Zion–Mt. Carmel por Colorado City, "a partir de meados de 2026" (12 News, 2024).

## 6. O título e o gancho que eu defendo

- **Título: "Why Arizona Didn't Stop at the Grand Canyon"** (43 caracteres). É único nas 6 buscas, leva os dois nomes buscados,
  promete o porquê (as retas de Washington contra a barreira natural) e não exagera.
- **Alternativas**:
  1. "Why Arizona Ends on the Wrong Side of the Grand Canyon" (54);
  2. "The Arizona Town Whose County Seat Is Through Utah and Nevada" (60). Este é verdadeiro para Colorado City, pela rota mais
     rápida; não leva "Grand Canyon", então vai na descrição.

  Nenhuma das três foi buscada à parte no vidIQ (o teto acabou).
- **O gancho** (38 palavras): "The North Rim and the South Rim of the Grand Canyon are about ten miles apart. By road, it's 212.
  And from one Arizona town, the fastest way to its own county seat runs through Utah and Nevada."
- **A miniatura**:
  - relevo amarelo e água azul;
  - **a Strip em vermelho** (os dois CCDs);
  - **o cânion e o rio em ciano**, como a muralha;
  - uma seta branca grossa saindo de Colorado City, subindo por Utah, descendo por Nevada e voltando ao Arizona, em Kingman;
  - na caixa preta, **"WRONG SIDE"**; na B, **"261 MILES"**, sobre a volta.

## 7. Os pontos

- **K1 · GRAVE (corrigível):**
  - a medida candidata, como está escrita, é falsa: Colorado City tem tribunal (o North Canyon Justice Court), e Fredonia chega à
    sede, Flagstaff, sem sair do Arizona;
  - e o slogan "the trip to your own county courthouse leaves the state" já foi dito há 8 dias, num vídeo de 27,9 mil views.

  A versão verdadeira e nossa é a de §4 (261 mi, ~160 em Utah e Nevada, contra 375 só pelo Arizona). Ela não pode virar "every
  town" nem "courthouse".
- **K2 · MÉDIO**: o título de trabalho colide na forma com "Why the Grand Canyon Cut Off This Part of Arizona" (20/08/2026), encosta
  no "Two Arizonas" e exagera com o "in Two" (6,9 % da terra). Trocar.
- **K3 · MÉDIO**: a prova de interesse no ângulo é indireta (a lista de 27,9 mil e o short de 1,6 mil), e a busca pelo nome grande
  é disputada (concorrência 70, contra 40 no Big Sur). O caminho da pesquisa, que deu certo no Big Sur, é menos provável aqui.
- **K4 · MÉDIO**: as tentativas de Utah (1865; a comissão de Wells, de 1896–1905; 1910) estão NÃO CONFERIDAS na origem: 403, 418,
  site fora do ar. Sem elas, o ato 2 encolhe. A Sala lê no navegador do app: o Utah Digital Newspapers, o Serial Set (H. Misc.
  Doc. 53, Serial 1232) e a Utah History Encyclopedia.
- **K5 · MÉDIO**: quase metade da Strip (Colorado City, Centennial Park e Cane Beds, ~4.500 pessoas) é a comunidade de Short Creek.
  Nela estão a FLDS, a batida de 1953 e o processo federal de 2017. O tema puxa o vídeo para o true crime e para anúncio limitado.
  Regra proposta:
  - uma ou duas frases de história, com fonte primária;
  - nenhuma foto de gente identificável;
  - nada disso na miniatura nem no título;
  - Hildale e Colorado City como "uma cidade cortada pela divisa", o que é geografia.
- **K6 · MÉDIO**: o enxame já está no Grand Canyon (8 ou mais longos em out. e nov. de 2026) e tocou no ângulo 3 vezes em 3 meses.
  Cada semana de produção é uma chance de alguém fazer a versão boa antes.
- **K7 · LEVE**: as rotas vêm do servidor de demonstração do OSRM, que é para uso não comercial. Reconfirmar as milhas de outro jeito
  antes da tela.
- **K8 · LEVE**: a NPS dá 278 milhas ao cânion, e o enxame diz 277. Usar a da fonte.
- **K9 · LEVE**: há pouca foto de acervo das cidades da Strip. O vídeo depende dos mapas, o que combina com o canal.
