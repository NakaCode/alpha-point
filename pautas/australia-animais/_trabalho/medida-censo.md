# A medida do Censo do vídeo 8 (`australia-animais`) · 18/11/2026, ~16:1x

**Quem:** agente Opus da Sala (o pedido: `pedido-medida-censo.md`). **O que é:** a medida principal do vídeo (pauta v2, §10.1, item 8; §11, item 4; o K3):
quanta gente vive no Channel Country (a biorregião IBRA 7.1 CHC, onde vive a taipan-do-interior), contra a gente e a densidade dos três estados onde a
cobra-marrom-oriental se acha "over most of" (Queensland Museum), e a escala da Grande Sydney. **Os scripts:** `scripts/c_censo_*.py`. **Os dados:**
`midia/australia-animais/fontes/c/censo/` (fora do git), com o sha256 de cada um no fim. **Os números da máquina:** `censo/medida-censo.json` e
`censo/mb-chc.csv` (cada mesh block que toca o CHC).

## 1 · A resposta curta

| O quê | O número | Na fala |
|---|---|---|
| **A área do Channel Country** | 304.094,4 km² (IBRA: 30.409.436,976 ha; a minha Albers à mão dá o mesmo até a 4ª casa) = **117.411 mi²** | "about 117,000 square miles" |
| **A gente** (moradores habituais, Censo 2021, por mesh block, centroide dentro) | **1.020** (812 domicílios, em 29 mesh blocks com gente) | "about a thousand people" |
| A mesma, ponderada pela área dos blocos da divisa | 1.032 | — |
| A mesma, com as duas vilas que ficam a menos de 2 km do lado de fora (Thargomindah e Stonehenge) | 1.224 | — |
| Os extremos (só os blocos inteiros dentro / todo bloco que toca) | 491 / 1.732 | — |
| **A densidade** | 0,0087 por mi² = **1 pessoa a cada 115 mi²** (114 ponderado; 96 com as vilas da beira) | "about one person for every hundred square miles" |
| **Os três estados** (NSW + Vic + Qld; Censo 2021, QuickStats) | **19.731.792** pessoas em 2.758.465 km² (1.065.049 mi²) = 7,15/km² = **18,5/mi²** | "almost 20 million people" |
| Os mesmos, na estimativa mais nova do ABS (ERP, 31/03/2026, publicada em 17/09/2026) | 21.563.800 = 20,2/mi² | só como estimativa, com a data |
| **A razão das densidades** (três estados ÷ CHC) | **2.133×** (centroide); 2.108× (área); 1.777× (com as vilas da beira); extremos 1.256× e 4.430× | "more than a thousand times as many people per square mile" (seguro); "roughly two thousand times" (o central) |
| **A Grande Sydney** (GCCSA 1GSYD; Censo 2021) | **5.231.147** pessoas em 12.368,7 km² (**4.776 mi²**) = 423/km² = **1.095/mi²** | "about 5.2 million people" |
| A Grande Sydney contra o CHC | área 24,6× menor; gente 5.129× maior (extremos 3.020× e 10.654×) | "a twenty-fifth of the area, thousands of times the people" |
| **A parte da Austrália** | o CHC é **3,96 %** da terra (7.688.095 km²) e tem **1 em 24.924** australianos (25.422.789; de 1 em 14.678 a 1 em 51.778 nos extremos) | "about 4 percent of Australia's land"; "fewer than one in ten thousand Australians" |

## 2 · As contas

- **Área:** 30.409.436,976 ha ÷ 100 = 304.094,37 km²; ÷ 2,58999 = 117.411 mi².
- **Gente:** a soma da coluna `Person` (moradores habituais) do "Mesh Block Counts, 2021" nos 49 mesh blocks cujo centroide (de área, na Albers) cai dentro do
  polígono: 1.020. Por estado: Queensland 726, New South Wales 160, South Australia 134, Northern Territory 0. Por categoria do bloco: Primary Production 758
  (26 blocos), Residential 237 (4), Other 16 (1), Parkland 5 (5), Commercial 4 (1).
- **Densidade:** 1.020 ÷ 117.411 mi² = 0,00869/mi²; 117.411 ÷ 1.020 = 115 mi² por pessoa (298 km²).
- **Três estados:** 8.072.163 (NSW) + 6.503.491 (Vic) + 5.156.138 (Qld) = 19.731.792; área 800.797,7 + 227.496,2 + 1.730.171,2 = 2.758.465 km² =
  1.065.049 mi²; 19.731.792 ÷ 1.065.049 = 18,53/mi².
- **Razão:** 18,53 ÷ 0,00869 = 2.133. Tirando dos três estados a parte deles que é Channel Country (área e gente), a razão sobe a 2.326× (a conta no json).
- **Gente, três estados contra o CHC:** 19.731.792 ÷ 1.020 = 19.345× (é a razão das **pessoas**, não da densidade; não confundir as duas).
- **Grande Sydney:** 5.231.147 ÷ (12.368,7 ÷ 2,58999) = 1.095/mi²; 304.094 ÷ 12.368,7 = 24,6; 5.231.147 ÷ 1.020 = 5.129.
- **Parte da Austrália:** 304.094 ÷ 7.688.095 (a soma das áreas `AREASQKM21` dos estados e territórios do ABS) = 3,96 %; 25.422.789 (a coluna "Australia, 2021"
  do QuickStats, homens 12.545.154 + mulheres 12.877.635) ÷ 1.020 = 24.924.
- **ERP 2026:** 8.670,1 + 7.154,2 + 5.739,5 mil = 21.563.800; ÷ 1.065.049 mi² = 20,2/mi². Não há ERP por biorregião: a razão fica no Censo 2021 dos dois lados.

## 3 · O método

1. **O polígono.** `roteiros/australia-animais/miniatura/_bases/ibra7-channel-country.geojson` (IBRA 7.1, região CHC, DCCEEW), sha256 conferido
   (`815fc5b5…c9683`) antes de cada uso. Só leitura.
2. **A área, sem pyproj.** A Albers de área igual da Austrália (a "Australian Albers" do ABS e do DCCEEW: paralelos 18° S e 36° S, meridiano 132° E, GRS80) escrita
   à mão pelas fórmulas de Snyder (USGS PP 1395), em `c_censo_geo.py`. Conferida três vezes:
   - um quadrado de 0,05° contra a área elipsoidal exata, em três latitudes: diferença de 2,6 × 10⁻⁶ %;
   - o polígono do CHC contra os HECTARES do IBRA: **0,0000 %** (o desenhista tinha medido 304.677 km² numa sinusoidal simples, +0,19 %);
   - os 166 mesh blocks de 1 km² ou mais contra o `AREA_ALBERS_SQKM` do ABS: mediana 0,0000 %, máximo 0,0037 %; e NSW, Vic e Qld contra o `AREASQKM21`: 0,0000 %.
3. **Os mesh blocks** (a unidade mais fina do Censo). O serviço oficial do ABS (`geo.abs.gov.au`, `ASGS2021/MB/MapServer/0`), com filtro espacial pelo retângulo
   do polígono (135,70 a 143,86° E; 30,66 a 21,51° S), sem baixar o país: o servidor contou **316** blocos, e vieram os 316 (sem corte de transferência). A união
   deles cobre o CHC inteiro (o CHC fora da união: **0,000 km²**): nenhum bloco que toca o CHC ficou de fora.
4. **A gente de cada bloco.** O "Census of Population and Housing: Mesh Block Counts, 2021" do ABS (xlsx de 14,45 MB, publicado em 28/06/2022): `Person` é
   **"Persons Usually Resident: This is the count of people where they usually live, which may or may not be where they were on Census Night"**. Todos os 316
   blocos têm contagem. **Por que os moradores habituais:** é a gente que *vive* lá, que é o que a frase diz. O lugar da contagem (quem estava lá na noite de
   10/08/2021: turistas, viajantes, gente de escala nos campos de gás e nas estâncias) não sai por mesh block, e mediria outra coisa; não foi medido.
5. **O centroide.** O centroide de área de cada bloco, calculado na Albers (não em graus), dentro ou fora do polígono. É a medida.
6. **A sensibilidade.** A fração da área de cada bloco dentro do CHC, para a ponderação e os extremos (§4).
7. **As localidades.** As SAL 2021 (as localidades oficiais do ABS, o mesmo serviço, o mesmo retângulo, 91 delas): cada bloco vai à SAL com que mais se sobrepõe. A
   **vila** de cada SAL são os blocos com gente e menos de 50 km² (no sertão, o bloco da vila de Birdsville é "Primary Production", de 37 km², e o de Bedourie, de
   26 km²; os blocos de estância têm milhares de km²). Para cada vila: o centroide ponderado pela gente, dentro ou fora, e a distância geodésica até a divisa.
8. **Os estados e a Grande Sydney.** As áreas dos shapefiles do ABS em `_bases/` (`STE_2021`, `GCCSA_2021`; sha256 conferidos); a gente, do QuickStats 2021 de cada
   um ("People", tabela por lugar de residência habitual): é o número oficial publicado. A soma dos mesh blocks de cada estado fica ao lado, só para mostrar o
   ajuste do ABS (§5).

## 4 · A sensibilidade

| Variante | Pessoas | mi² por pessoa | Razão contra os 3 estados | Contra a Grande Sydney (densidade) | 1 em N australianos |
|---|---:|---:|---:|---:|---:|
| **Centroide (a medida)** | **1.020** | **115** | **2.133×** | 126.090× | 24.924 |
| Ponderado pela área | 1.032 | 114 | 2.108× | 124.661× | 24.642 |
| Centroide + as vilas a < 2 km do lado de fora | 1.224 | 96 | 1.777× | 105.075× | 20.770 |
| Só os blocos inteiros dentro (fração ≥ 0,999) | 491 | 239 | 4.430× | 261.939× | 51.778 |
| Todo bloco que toca (fração > 0,001) | 1.732 | 68 | 1.256× | 74.256× | 14.678 |

- **Os blocos que cortam a divisa:** 56, dos quais 42 com gente (1.241 pessoas neles). O centroide põe cada um inteiro de um lado; a ponderação pela área dá
  quase o mesmo total (1.032 contra 1.020), porque os erros se compensam. Os maiores (`mb-chc.csv` tem todos):
  - `70028141000` (NT, SAL Anatye, 45.031 km²): 105 pessoas, 41 % dentro, centroide **fora**; a vila dele fica 4,6 km fora;
  - `40215318800` (SA, SAL Gidgealpa, 33.132 km²): 100 pessoas, 73 domicílios, 88 % dentro, centroide **dentro**; é o maior bloco da conta, e não se sabe onde, nele, a
    gente mora;
  - `11205337400` (NSW, Milparinka, 7.601 km²): 60, 52 %, dentro; `30562610000` (Qld, Opalton, 16.074 km²): 59, 69 %, dentro; `11205319100` (NSW, Packsaddle):
    60, 33 %, fora.
- **A divisa do IBRA tem exatidão "Less than two kilometres in most areas of Australia" ("accurate to at least 1:250,000")** (os metadados, `ibra7-metadados.xml`).
  Duas vilas ficam dentro dessa faixa, do lado de fora: **Thargomindah** (191 pessoas na vila, 0,4 km fora; a divisa corta dois blocos residenciais dela, com 22 % e
  6 % da área dentro) e **Stonehenge** (13, 0,9 km fora). Nenhuma vila de dentro fica a menos de 2 km da divisa. Com as duas, 1.224: é a linha 3 da tabela.
- **O ajuste do ABS.** O xlsx diz, em cada tabela: "Cells in this table have been randomly adjusted to avoid the release of confidential data." A soma dos
  blocos fica abaixo do QuickStats em NSW (−2.251, −0,03 %), em Vic (−536) e em Qld (−281). Nos 29 blocos com gente do CHC, o tamanho do ajuste não foi medido
  (o ABS não o publica bloco a bloco); "about a thousand" o absorve.
- **A faixa honesta para a fala:** de ~1.000 a ~1.200 pessoas (as três variantes centrais) e de 96 a 115 mi² por pessoa. Os extremos (491 e 1.732) supõem que toda a
  gente de um bloco da divisa mora do lado errado, o que as vilas desmentem.

## 5 · As localidades

**Dentro (as seis vilas):** 424 das 1.020 pessoas (42 %); as outras 596 estão nos blocos grandes (quase todos de categoria "Primary Production").

| Vila (SAL) | Estado | Gente na vila | A SAL dentro do CHC | Distância da divisa |
|---|---|---:|---:|---:|
| Jundah | Qld | 100 | 119 | 7,7 km dentro |
| Bedourie | Qld | 84 | 132 | 34,7 km dentro |
| Birdsville | Qld | 78 | 110 | 11,0 km dentro |
| Windorah | Qld | 76 | 108 | 24,5 km dentro |
| Tibooburra | NSW | 66 | 97 | 39,3 km dentro |
| Innamincka | SA | 20 | 20 | 5,7 km dentro |

Sem vila, com gente dentro (pelo centroide): Gidgealpa (SA) 100, Milparinka (NSW) 63, Opalton 59, Stonehenge 47 (a estância; a vila fica fora), Durham 31,
Thargomindah 23 (a estância; a vila fica fora), Eromanga 22, Cameron Corner 19, Amaroo 17, Noccundra 16, Farrars Creek 16, Mungeranie (SA) 14, Bulloo Downs 7.

**Fora, por pouco ou perto:**

| Vila (SAL) | Gente na vila | Distância da divisa |
|---|---:|---:|
| Thargomindah (Qld) | 191 | 0,4 km fora (dentro da exatidão do IBRA) |
| Stonehenge (Qld) | 13 | 0,9 km fora (idem) |
| Anatye (NT) | 59 | 4,6 km fora |
| Winton (Qld) | 853 | 18,3 km fora |
| Eromanga (Qld) | 43 | 21,1 km fora |
| Boulia (Qld) | 214 | 34,7 km fora |
| Middleton (Qld) | 3 | 72 km fora |
| Marree (SA) | 66 | 104 km fora |

**Os nomes da pauta que não são SAL:** Betoota (nenhuma SAL com esse nome no retângulo), Moomba (idem; não sei, por esta medida, em que SAL fica, nem se está
dentro), Durham Downs (a SAL é "Durham": 31 pessoas dentro, sem vila). **Fora do retângulo, e portanto fora do CHC com certeza:** Oodnadatta, Urandangi, Mount Isa;
a vila de Quilpie (a SAL toca o retângulo, mas os blocos da vila não). Roxby Downs (3.668), Andamooka e Leigh Creek ficam a mais de 200 km.

## 6 · Os limites

- **O Censo é de 2021** (a noite de 10/08/2021). Não há contagem por biorregião depois dele. A fala diz o ano, ou o crédito de tela o carrega.
- **A divisa do IBRA não é a área de ocorrência da taipan.** É a biorregião que a ficha do governo da Austrália do Sul e a pauta nomeiam (o barro rachado das
  planícies do Cooper e do Diamantina). A taipan não ocupa o CHC inteiro e não se sabe, por esta medida, se vive fora dele.
- **O centroide** decide 56 blocos da divisa no tudo ou nada (§4); a ponderação e as vilas mostram que o total muda pouco.
- **A exatidão da divisa** (< 2 km na maior parte): Thargomindah e Stonehenge ficam na faixa.
- **O ajuste aleatório** do ABS nas contagens de mesh block (§4).
- **Os três estados são uma média de estado inteiro**, com os desertos dentro (Queensland e NSW têm interior quase vazio, e o próprio CHC é 12 % de Queensland).
  Não é "a densidade onde a marrom vive", é a densidade dos estados que o museu nomeia.
- **O museu diz "most of", não "all of", e fala da eastern brown snake** (*Pseudonaja textilis*): "Found over most of Queensland, New South Wales and Victoria."; "Found
  in all habitats except rainforest. It has adapted well to farmed, grazed and semi-urban lands." Isso não diz que a marrom não vive no Channel Country (ele é, na
  maior parte, Queensland), nem que a área dela se limita aos três estados. E as 17 mortes do ASP-20 são de "brown snakes" (o gênero), não só da oriental.
- **A Grande Sydney é a área estatística do ABS** (Greater Capital City Statistical Area), não a área de ocorrência da funnel-web. A base (`fatos-a.md`, D3) diz
  que os casos graves ficaram em NSW e no sul de Queensland; a Grande Sydney dá só a escala.
- **A ERP de 2026 é estimativa** (e muda: a próxima sai em 17/12/2026); não há ERP do CHC.
- **A correlação não é causa.** A medida mostra onde a gente mora; não prova que a marrom mata mais *porque* vive perto de gente.

## 7 · As frases seguras (EN)

**A da medida** (o modelo da pauta, §4.4):
> The Channel Country, where the inland taipan lives, covers about 117,000 square miles. At the 2021 census, about a thousand people lived there.
> *[medida: 117.411 mi²; 1.020 (1.032 a 1.224 nas variantes centrais); ABS Census 2021; IBRA 7 (DCCEEW)]*

(No presente, "About a thousand people live there.", vale com o ano no crédito de tela.)

**A da densidade:**
> That's about one person for every hundred square miles.
> *[115, 114 e 96 mi² por pessoa nas três variantes centrais]*

**A comparação com a marrom** (com o dono do habitat, e "most of"):
> The eastern brown snake, according to the Queensland Museum, is found over most of Queensland, New South Wales and Victoria. At the 2021 census, those three
> states had almost 20 million people. Per square mile, that's more than a thousand times as many people as the Channel Country.
> *[19.731.792; 18,5/mi² contra 0,0087/mi² = 2.133×; o mínimo de todas as variantes é 1.256×]*

Se o roteiro quiser o número central: "roughly two thousand times as many people per square mile" (2.108× a 2.133×; 1.777× com as vilas da beira).

**A alternativa que não depende da marrom:**
> The Channel Country is about four percent of Australia's land. At the 2021 census, fewer than one in ten thousand Australians lived there.
> *[3,96 %; de 1 em 14.678 a 1 em 51.778 em todas as variantes; o central, 1 em ~25.000]*

**A escala da funnel-web** (só a escala; o fato dos casos graves é de `fatos-a.md`, D3):
> Greater Sydney alone had about 5.2 million people at the 2021 census, on about 4,800 square miles.

**Para a frase da marrom da pauta (§4.4):** "One lives out on these empty floodplains" troca por "One lives out on these floodplains, where about a thousand people
live, and is usually quite shy." "The other lives where people farm and build" continua sendo a leitura do museu ("farmed, grazed and semi-urban lands"), não esta medida.

## 8 · O que NÃO se pode dizer com a medida

- **"No one lives there"**, **"empty"**, **"uninhabited"**: vivem ~1.000 pessoas, em seis vilas e nas estâncias. "Nearly empty" e "almost no one" só com o número
  ao lado.
- **"About 1,000 people live in the taipan's range"**, **"the taipan's habitat"** pela biorregião: a IBRA não é a área de ocorrência.
- **"The brown snake doesn't live out here"**, **"brown snakes live only in the east"**: o museu diz "most of Queensland", e o CHC é, na maior parte, Queensland.
- **"The three states where brown snakes live"** (como se fossem os únicos) e **"where most of its range lies"**: o museu diz "found over most of" cada estado; não
  diz que a maior parte da área dela está nos três. A frase segura nomeia os estados e diz "most of".
- **"Two thousand times more people"** sem "per square mile": em pessoas, a razão é ~19.000×; em densidade, ~2.000×.
- **"1,020 people"**, **"2,133 times"** na voz: a precisão é falsa (o ajuste aleatório do ABS, o centroide, a divisa de 2 km). Na tela, "≈ 1,000".
- **"Today"**, **"now"**, **"in 2026"** com os 1.000: o número é de 2021. E **"the latest census"**: o Censo é de cinco em cinco anos e a contagem de 2026 não foi
  lida aqui; diga "the 2021 census".
- **"That's why the brown snake kills more people"**: a medida mostra onde a gente mora, não a causa ("You can guess which one kills" deixa a conta com quem assiste).
- **"Greater Sydney, where the funnel-web lives"** com a área da Grande Sydney como a da aranha.
- **Comparar a área com um estado americano** (Nevada etc.): não medido, sem fonte lida, e a pauta deixou os EUA fora (K4).
- **"Moomba"**, **"Betoota"** como vilas da conta: não são SAL; Moomba não foi localizada por esta medida.

## 9 · O crédito de tela

- Sobre o vazio (o CHC e a gente): **"Alpha Point calculation: ABS, Census 2021 (mesh block counts); IBRA 7.1 (DCCEEW)"**. As duas são CC BY 4.0; a licença do IBRA
  pede "Users must attribute the Australian Government Department of Climate Change, Energy, the Environment and Water as the data provider", e DCCEEW é a sigla
  dele (na descrição do vídeo, o nome inteiro).
- Sobre os três estados e a Grande Sydney: **"Source: ABS, Census 2021 QuickStats; ASGS 2021 boundaries (CC BY 4.0)"**; com a razão na tela, "Alpha Point
  calculation: ABS Census 2021; IBRA 7.1 (DCCEEW)".
- Se a ERP entrar: "ABS, National, state and territory population, March 2026".

## 10 · As fontes (lidas em 18/11/2026; UTC no `_pedidos.jsonl`)

| Arquivo (`midia/australia-animais/fontes/c/censo/`) | URL | Licença | Bytes | sha256 |
|---|---|---|---:|---|
| `abs-mesh-block-counts-2021.xlsx` | https://www.abs.gov.au/census/guide-census-data/mesh-block-counts/2021/Mesh%20Block%20Counts%2C%202021.xlsx | CC BY 4.0 (a página de copyright do ABS: "All material presented on this website is provided under a Creative Commons Attribution 4.0 International licence", com exceções que não tocam estes dados) | 15.147.466 | `1ab520c2ff0e07ca88729258c30ee9f7a7133df113a81bac94812582f3b540a3` |
| `abs-mesh-block-counts-2021.html` (a página do xlsx) | https://www.abs.gov.au/census/guide-census-data/mesh-block-counts/latest-release | idem | 90.519 | `97fd60748a8702d36eb10e9e81a340a6cf9f39775af2cca6866ed93a56544cf3` |
| `geo-mb2021-retangulo-chc.geojson` (os 316 mesh blocks) | https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/MB/MapServer/0/query?where=1%3D1&geometry=135.70%2C-30.66%2C143.86%2C-21.51&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outFields=*&returnGeometry=true&outSR=4326&f=geojson | CC BY 4.0 (ASGS Ed. 3: "Unless otherwise noted, content is licensed under a Creative Commons Attribution 4.0 International licence", `_bases/abs-asgs3-digital-boundary-files.html`) | 4.850.683 | `0fdd525e8100f4b9cfd98f9e18caa06b8bdf1eff018ae3c3aa1002df78877087` |
| `geo-mb2021-contagem-retangulo.json` (`{"count":316}`) | a mesma, com `returnCountOnly=true&f=json` | idem | 13 | `cb753a48e4bc9ea2c6e70e9804411ca0aa87123117a43c1913ed527107edcdec` |
| `geo-mb2021-camadas.json` (os campos da camada) | https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/MB/MapServer/layers?f=json | idem | 24.455 | `38a7378f86a2c76e534cce9de7c1eb19e41c52ce9aa022e568d165d472e90456` |
| `geo-sal2021-retangulo-chc.geojson` (as 91 SAL) | https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer/0/query (o mesmo retângulo e os mesmos parâmetros) | idem | 1.857.134 | `08400cca1be2270fe4b641e11f20906b8f57d7d47bdfabdba924b109138dba07` |
| `geo-sal2021-contagem-retangulo.json` (`{"count":91}`) | a mesma, com `returnCountOnly=true` | idem | 12 | `99f0c7aa3b9e216ab5b68c1d8b83210510bb90cf3be76c9bf5c227418494ab1a` |
| `abs-quickstats-2021-1-nsw.html` | https://www.abs.gov.au/census/find-census-data/quickstats/2021/1 | CC BY 4.0 | 195.572 | `8230c909d2383354681a6249fd4765af6dac63796b2956fd188f8cf0b979d1f8` |
| `abs-quickstats-2021-2-vic.html` | https://www.abs.gov.au/census/find-census-data/quickstats/2021/2 | idem | 194.321 | `638ce8c57d18c25f4d8af0c461536be625089516e127bae9089d50a99a8f799a` |
| `abs-quickstats-2021-3-qld.html` | https://www.abs.gov.au/census/find-census-data/quickstats/2021/3 | idem | 194.633 | `f3b6029142b9a676535410d2b4ba4ef492b1325d0c0b0507c3e912a3ea8a63a5` |
| `abs-quickstats-2021-1GSYD-gsyd.html` | https://www.abs.gov.au/census/find-census-data/quickstats/2021/1GSYD | idem | 191.461 | `18729cb3403b6aa8d4e953bd158c9aa5e5019724491752460aaa11f712017937` |
| `abs-erp-estados-ultima.html` (ERP, março de 2026) | https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/latest-release | idem | 364.228 | `d4666bba3cdd93cc0f8ff31b10b6a398db2b2827dbadd45c6da4726f681923e7` |
| `_robots-geo.abs.gov.au.txt` | https://geo.abs.gov.au/robots.txt | — | 243 | `9d1a215ffdbb0ace9be7d579709be439c80f3cdfbdf027389f37099860b83332` |
| `_robots-www.abs.gov.au.txt` | https://www.abs.gov.au/robots.txt | — | 641 | `2de3e3cc8eed16090dd838b5daa903af5cd3156212ae0ae065274cf6be12d892` |
| `_robots-data.api.abs.gov.au.txt` (anotado: `HTTP 403`) | https://data.api.abs.gov.au/robots.txt | — | — | — |

**As bases da miniatura, só lidas** (`roteiros/australia-animais/miniatura/_bases/`, sha256 conferido pelo script): `ibra7-channel-country.geojson`
(`815fc5b5…c9683`; IBRA 7.1, DCCEEW, CC BY 4.0 pelos metadados), `STE_2021_AUST_SHP_GDA2020.zip` (`d9b7f735…99a21`), `GCCSA_2021_AUST_SHP_GDA2020.zip`
(`cc48b928…518e7`), `ibra7-metadados.xml` (a licença e a exatidão), `abs-copyright.html` e `abs-asgs3-digital-boundary-files.html` (as licenças do ABS).

**Os derivados** (gravados pelos scripts, na mesma pasta): `mb-counts-2021.csv` (as 368.285 linhas de mesh block do xlsx; `696f7c57…ad5f8`), `mb-chc.csv`
(os blocos que tocam o CHC, com fração, centroide e SAL; `4a2b56f2…93992`), `medida-censo.json` (todos os números; `ed246446…a999225e3`).

## 11 · Os pedidos

**16 linhas no `_pedidos.jsonl`; 15 pedidos chegaram a um servidor, um por vez, com o User-Agent do canal; ~23,1 MB baixados (o maior, o xlsx, de 15,1 MB).**

- **`geo.abs.gov.au`: 6** (o robots.txt; os campos da camada MB; a contagem e os 316 blocos; a contagem e as 91 SAL). O robots.txt diz `Disallow: /` com
  `Allow: /arcgis/rest/services/*/MapServer/` (e `FeatureServer/`, `layers/`, `metadata/`): só pedi caminhos com `/MapServer/`. A lista de serviços
  (`/arcgis/rest/services/ASGS2021`) é vetada, e não foi pedida (o script a recusou antes).
- **`www.abs.gov.au`: 8** (o robots.txt; a página e o xlsx do Mesh Block Counts; os quatro QuickStats; a página da ERP). Nada nos caminhos vetados.
- **`data.api.abs.gov.au`: 1**, o robots.txt, que respondeu **403**. Parei ali, sem outro pedido a esse host; os números que eu buscaria nele (os totais oficiais)
  vieram do QuickStats.
- **`api.data.abs.gov.au`:** o nome não resolveu (DNS); nenhum pedido chegou.

**Um tropeço do apoio, para a Sala decidir se vai ao `APRENDIZADOS.md`:** o `urllib.robotparser` do Python lê as regras em ordem e não entende `*` no meio do
caminho; com o robots.txt do `geo.abs.gov.au` (`Disallow: /` antes dos `Allow`), ele **nega tudo**, inclusive o que o site libera. O `c_censo_baixar.py` lê o
robots.txt pela RFC 9309 (vence a regra mais longa; empate, `Allow`; `*` e `$`), e a função foi testada nos cinco casos do `geo.abs.gov.au` antes do primeiro pedido
(a lista de serviços e o `MapServer?f=json` sem barra, vetados; `MapServer/0`, `/query` e `/layers`, liberados). Serve a qualquer canal que leia robots.txt com
curinga.

## 12 · Os scripts (da raiz do canal)

- `c_censo_baixar.py <url> <nome> [--robots-so] [--head]`: o molde do `a_baixar.py`, com o robots.txt pela RFC 9309, o registro de cada pedido em `_pedidos.jsonl` e
  a parada em 403/429, captcha e página de verificação.
- `c_censo_geo.py`: a Albers à mão, a leitura do polígono e dos shapefiles (pyshp, de dentro do zip) e o leitor de xlsx sem openpyxl. Rodado sozinho, confere a
  projeção e a área do IBRA.
- `c_censo_mb_ler.py`: o xlsx do Mesh Block Counts → `mb-counts-2021.csv`, com as notas das tabelas.
- `c_censo_medida.py`: a medida inteira, sem rede → `medida-censo.json` e `mb-chc.csv`.

Todos com `python -X utf8 -B -I pautas/australia-animais/_trabalho/scripts/<script>.py`. Com `-I`, o Python não lê a pasta do script nem o site do usuário;
os scripts põem à mão a pasta dos scripts e o site do usuário (onde estão o shapely, o numpy e o pyshp), nunca a pasta dos dados.
