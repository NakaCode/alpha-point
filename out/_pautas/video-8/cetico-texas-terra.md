# Cético: `texas-terra` — "Why Texas Got Rich From Land Nobody Wanted" (17/11/2026)

**Veredito: DERRUBADO. Nota 3,5 / 10.**

- **O ponto mais grave (K1): o enxame já fez a pauta, em outubro e novembro de 2026, e o título já tem dono.** Em 6 semanas saíram 4
  longos com o mecanismo inteiro (a anexação de 1845, a linha, Santa Rita, o fundo da universidade, a terra privada no Texas contra a
  federal no Novo México): "Why Did Texas Get Rich But New Mexico Never Did?" (21/10), "Why a Texas Desert Pumps More Oil Than Iraq"
  (23/10), "Why Texas Has So Much Oil" (23/10) e "Why Did Texas Get Rich While New Mexico Stayed Poor" (31/10, 25 min). Mais 2 longos e 1 curto sobre a
  terra federal do Texas, 5 curtos sobre a terra da universidade (um deles com **a frase do nosso título**: "How Did Texas Land Nobody
  Wanted Become $39.5 Billion?", 20/10/2026) e 6 longos genéricos "por que o Texas é rico" (3 contra o México). Todos em canais de 0 a 3.290 inscritos.
- **O paradoxo se inverte com os dados (K2).** "O Texas ficou com a terra e ficou rico; o Novo México não" não se sustenta:
  - **O Texas não é rico por morador.** A renda pessoal per capita de 2025 é US$ 73.156, 95 % da dos EUA (US$ 76.994).
  - **A terra que o Texas guardou virou terra privada.** O dinheiro do petróleo vai aos donos privados e à universidade, não ao estado.
  - **O Novo México também tem terra do estado**, dada por Washington: 13 milhões de acres de subsolo, contra os 2,1 milhões da
    universidade. Ela rendeu **US$ 3,2 bilhões no ano fiscal 2026**, quase o dobro do que a terra da universidade rendeu em 2025
    (US$ 1,72 bilhão).
  - **E Washington devolve ao Novo México metade dos royalties da terra federal.** Só esse cheque, por morador (US$ 1.296 em 2025), é
    **5,2 vezes** tudo o que o Texas cobra de imposto sobre petróleo e gás por morador (US$ 248).
  - Pelo tesouro público, quem fica com mais dinheiro do Permiano por morador é o Novo México.
- **Os "28 vezes" estão errados (K3).** Dos US$ 99,8 milhões que Washington repassou ao Texas no ano fiscal 2025, **US$ 95,5 milhões vieram do
  petróleo do Golfo** (o GOMESA), não do Permiano. Contando só a terra firme, a razão é **762 vezes** (US$ 2,76 bilhões contra US$ 3,6 milhões);
  em 2026, **733 vezes**.
- **A medida nossa existe e é nova no número (não no ângulo):** em 2025, **61,5 % do petróleo do Novo México saiu de terra federal** (494,8
  de 805,0 milhões de barris; 98 % disso em Lea e Eddy, o Permiano), contra **0,01 % no Texas** (0,3 de 2.102,6 milhões). Nenhuma
  descrição dos concorrentes traz esse número (um diz "over 40%" de terra federal no Novo México; o CRS diz 31,6 %).
- **A procura é pequena (K4):** "why is texas so rich" tem **menos de 750 buscas por mês** (concorrência 38). Os longos do enxame tiveram de 4 a
  447 views. Só os curtos andaram: o de Santa Rita tem 39,6 mil views, e "Why Texas Can Legally Split Into 5 States", 141 mil.

Pastas:
- O trabalho está em `out/_pautas/video-8/_trabalho/cetico-texas-terra/`: `vidiq-colisao.tsv`, `b1-puf.json`, `b2-federal.json`,
  `b5-titulo.json`, `watch-meta.jsonl`, `onrr_estados.py` e `onrr-estados.txt`, `medida_federal.py` e `medida-federal.txt`, `titulos.py`,
  `baixar.py`, `prod_head.py`, e `fontes/` com os PDFs da UTIMCO, do ONRR e da constituição, e as séries do FRED e da EIA.
- Os dados brutos do ONRR (4,6 MB e 1,1 MB) e a lei de 1850 (1,6 MB) estão em `midia/_pautas/video-8/cetico-texas-terra/`, fora do git.

## 1. Os fatos

Lidos em 17/11/2026 (hora de Brasília), entre ~22h40 e ~23h. "Conta nossa" usa só os números das linhas citadas.

| # | Fato | Fonte (URL) | Veredito |
|---|---|---|---|
| F1 | A resolução conjunta de **01/03/1845**: o Texas "shall also retain all the vacant and unappropriated lands lying within its limits", para pagar as dívidas da República, e cede a Washington "all public edifices, fortifications, barracks, ports and harbors". | Texas State Library and Archives: https://www.tsl.texas.gov/ref/abouttx/annexation/march1845.html | CONFERE |
| F2 | "Texas became the only state in the Union to retain control of her own public lands" (o pagamento da dívida foi a condição). | TSLAC, "Texas Annexation Questions and Answers": https://www.tsl.texas.gov/exhibits/annexation/part5/question8.html | CONFERE a frase da fonte, mas **ela exagera**. "In the Union" é forte demais: os 13 estados originais e Vermont, Kentucky, Tennessee, Maine e Virgínia Ocidental também nunca tiveram terra pública federal (conhecimento geral, não lido na origem). A frase segura: **"the only state in the West that kept its own public land"**. O CRS R42346 só dá a razão geral do Oeste (a terra federal veio de "laws requiring states to surrender claims (...) as conditions of statehood"). |
| F3 | **A lei de 09/09/1850** (9 Stat. 446, cap. 49): a fronteira passa pelo paralelo 32° N até o Rio Bravo; o Texas "cedes to the United States all her claim to territory exterior to the limits"; Washington paga "ten millions of dollars in a stock bearing five per cent". | govinfo, Statutes at Large: https://www.govinfo.gov/content/pkg/STATUTE-9/pdf/STATUTE-9-Pg446-2.pdf | CONFERE |
| F4 | **A constituição de 1876**, art. VII, seç. 15: "one million acres of the unappropriated public domain of the State", e "said lands shall be sold" (a terra foi dada para ser vendida). | Texas Legislative Council, a constituição vigente com o histórico: https://tcss.legis.texas.gov/resources/cn/pdf/cn.7.pdf | CONFERE (o texto é de 15/02/1876) |
| F5 | O milhão de 1876 substituiu as seções de ferrovia de 1858, com terra do oeste "considered less than prime for agriculture". O segundo milhão veio quando a universidade abriu, em 1883, também no oeste; essa terra "was thought to be of little commercial value". Em 1931, a renda foi dividida: dois terços para a UT, um terço para a Texas A&M. | Handbook of Texas (TSHA), "Permanent University Fund", Vivian Elizabeth Smyrl (atualizado em 09/06/2020): https://www.tshaonline.org/handbook/entries/permanent-university-fund | CONFERE. "**Nobody wanted**" é mais forte que a fonte. A frase segura: **"land thought to be of little commercial value"**. O número da lei de 1883 não está na entrada |
| F6 | O Santa Rita No. 1, "located in Section 2, Block 2, University of Texas lands in Reagan County, came in on May 28, 1923". | TSHA, "Santa Rita Oil Well": https://www.tshaonline.org/handbook/entries/santa-rita-oil-well | CONFERE |
| F7 | **O fundo (PUF), no ano fiscal encerrado em 31/08/2025:** "PUF Lands Receipts" de **US$ 1.719 milhões** (1.850 no ano anterior); retorno dos investimentos de US$ 3.628 milhões; distribuição de US$ 1.525 milhões; patrimônio final de **US$ 40.291 milhões**. | UTIMCO, relatório de 17/09/2025: https://www.utsystem.edu/sites/default/files/documents/report-state/2025/periodic-investment-report-fy-2025/202508-investment-summaries.pdf (cópia em `fontes/`) | CONFERE. O relatório de 2026 (o mesmo endereço com `2026`/`202608`) deu **404**: o "last year" de dezembro de 2026 fica NÃO CONFERIDO. **Hoje o fundo cresce mais pelo mercado (3,6 bi) que pela terra (1,7 bi)** |
| F8 | "In 1876, the Texas Constitution set aside land in West Texas"; "that land – encompassing 2.1 million acres – is leased to oil and gas companies"; "The University of Texas system gets two-thirds of the benefits of the PUF". | UT System: https://www.utsystem.edu/puf | CONFERE. "Em 19 condados" e a fatia no Permiano ficam NÃO CONFERIDO: o site da University Lands deu **404** nas páginas de apresentação. Um resumo de busca cita o Bureau of Economic Geology: as bacias de Midland e Delaware, a plataforma central e, a oeste, a bacia de Orogrande, **que não é Permiano produtor** |
| F9 | **A terra federal em 2024: Texas 1,9 %** (3.191.777 de 168.217.600 acres); **Novo México 31,6 %** (24.581.379 de 77.766.400); Nevada 79,8 %; os EUA, 27,1 %. | CRS R42346, "Federal Land Ownership: Overview and Data", versão de 14/09/2026: https://www.everycrsreport.com/files/2026-09-14_R42346_336f754f9a0a5c5e48b254e0f7164c6e30465cf2.html | CONFERE |
| F10 | **A regra dos 50 %:** das vendas, bônus, royalties e aluguéis de terra federal, "50 per centum thereof shall be paid by the Secretary of the Treasury to the State other than Alaska" (o Alasca recebe 90 %). | 30 U.S.C. § 191(a), Mineral Leasing Act (LII, Cornell): https://www.law.cornell.edu/uscode/text/30/191 | CONFERE |
| F11 | **ONRR, ano fiscal 2025:** "New Mexico $2.76 billion" (o 1º estado) e "Texas $99.83 million". O repasse inclui "offshore tracts in federal waters adjacent to states' shores". | ONRR, 24/11/2025: https://onrr.gov/press-releases/News%20Release--%20Interior%20Announces%20$14.61%20Billion%20in%20Fiscal%20year%202025%20Energy%20Revenue.pdf | CONFERE. Mas **US$ 95.539.986 do Texas vieram do GOMESA**, a partilha do petróleo do Golfo, pagos em 27/03/2025: ONRR, https://onrr.gov/press-releases/FY2025_GulfofAmericaOCS_Disbursement.pdf. Pela tabela do ONRR (§4), a terra firme deu ao Texas US$ 3,6 milhões, e o petróleo, US$ 0,10 milhão. **"28 vezes no mesmo campo" NÃO CONFERE** |
| F12 | **ONRR, ano fiscal 2026:** Novo México com "more than $5.26 billion" (o maior repasse anual a um estado) e Texas com "$131.74 million". A venda de lotes do BLM de maio de 2026, "in New Mexico and Texas", rendeu "more than $4 billion". | Interior, 28/10/2026: https://www.doi.gov/node/68191 | CONFERE (o recorde é de uma venda só, e não se repete todo ano) |
| F13 | **O Permiano**, "in western Texas and southeastern New Mexico", fez **48 %** do petróleo dos EUA em 2025: 6,6 milhões de barris por dia. | EIA, 31/03/2026: https://www.eia.gov/todayinenergy/detail.php?id=67404 | CONFERE |
| F14 | **A terra do Novo México:** o Escritório de Terras do Estado "has earned around $3.2 billion in revenue in fiscal year 2026", recorde, que "benefits New Mexico's public school, universities, and hospitals". O comissário cuida de "9 million surface acres and 13 million mineral acres". | NMSLO, 15/10/2026: https://www.nmstatelands.org/2026/10/15/state-land-office-earns-record-3-2-billion-under-commissioner-garcia-richards-leadership/ ; home: https://www.nmstatelands.org/ | CONFERE. O ano fiscal 2025 ("nearly $2.6 billion") está só no Los Alamos Daily Post: NÃO CONFERIDO na origem |
| F15 | **O fundo da terra do Novo México** (Land Grant Permanent Fund): cerca de **US$ 40,8 bilhões em 31/05/2026**, segundo um resumo de busca de uma apresentação do State Investment Council ao Legislativo. | nmlegis.gov deu **403**; o sic.state.nm.us não resolveu o DNS (duas tentativas). Nada foi contornado | NÃO CONFERIDO. **Se confirmar, é do tamanho do fundo da UT (US$ 40,3 bi)** |
| F16 | **Os impostos do Texas sobre a produção, ano fiscal 2025:** "Oil production tax revenue was $5.38 billion"; "Natural gas production tax revenue was $2.48 billion". | Controladoria do Texas, 03/09/2025: https://comptroller.texas.gov/about/media-center/news/20250903-acting-texas-comptroller-kelly-hancock-announces-state-revenue-for-fiscal-2025-august-state-sales-tax-collections-1756843079560 | CONFERE |
| F17 | **A renda pessoal per capita de 2025:** Texas US$ 73.156; Novo México US$ 62.089; EUA US$ 76.994. | BEA, pelas séries do FRED TXPCPI, NMPCPI e A792RC0A052NBEA: https://fred.stlouisfed.org/graph/fredgraph.csv?id=TXPCPI (cópias em `fontes/`) | CONFERE. **O Texas fica abaixo da média do país** |
| F18 | **O fundo das escolas do Texas** (PSF), da terra das escolas, "has grown to comprise over $60 billion in assets", "seeded with $2 million in 1854". | Texas PSF: https://texaspsf.org/ | CONFERE. O fundo da terra que o Texas guardou é **maior para as escolas que para a universidade**. Os "13 million acres" do GLO incluem o fundo do Golfo, leitos de rio e direitos só de subsolo (relatório do GLO de 2006, num resumo de busca): NÃO CONFERIDO |

**A frase verdadeira** (o que dá para dizer):

> "When Texas joined the Union in 1845, it kept its own public land, the only state in the West to do so. In 1876 and 1883, it set aside
> two million acres of West Texas for its university, land thought to be of little commercial value. In 1923, oil came in on it. Across the
> line, in New Mexico, most of the same oil comes from federal land, and Washington sends half the royalties back to the state."

O que **não** dá para dizer:
- "Texas got rich": por morador, o Texas está abaixo da média do país (F17).
- "New Mexico didn't": o tesouro do Novo México leva mais do Permiano por morador (F11, F12, F14).
- "28 times for the same field": F11.
- "land nobody wanted": F5.

## 2. A colisão

vidIQ: 1 `keyword_research` (`includeRelated: false`) e 5 `youtube_search` = **30 créditos** (o saldo foi de 5.256 para 5.226). As linhas estão em
`_trabalho/cetico-texas-terra/vidiq-colisao.tsv`, e as respostas inteiras, em `b1-puf.json`, `b2-federal.json` e `b5-titulo.json`. As buscas 3 e 4
voltaram inteiras na conversa, e as linhas delas foram copiadas à mão para o fim do TSV. Li 7 páginas `/watch`, uma por vez
(`watch-meta.jsonl`), e as views e as datas batem com o vidIQ.

**A busca:** "why is texas so rich" dá **menos de 750 buscas por mês** (o piso do vidIQ), volume 0, concorrência 38, nota geral 25, sem crescimento.
Não medi "permian basin", "university of texas oil" nem "texas", porque o teto de créditos acabou.

**O ângulo (a terra, a universidade e a linha com o Novo México): os 5 mais próximos**

| Título | Canal | Inscritos | Views | Data | Duração |
|---|---|---|---|---|---|
| Why Did Texas Get Rich While New Mexico Stayed Poor (capítulos: "The 1845 Debt Bargain & The Compromise of 1850", "The 1923 Santa Rita No. 1 Oil Gusher & The $35B University Endowment", "The Permian Basin Paradox: Private Land vs. Federal BLM Land") | GeoDossier | 0 | 22 | 31/10/2026 | 24:58 |
| Why Did Texas Get Rich But New Mexico Never Did? ("a deal no other state ever got"; "Texas kept its public lands: TSLAC"; o PUF e Santa Rita; "Who owns New Mexico today") | Borderline Cases | 0 | 14 | 21/10/2026 | 8:47 |
| How Did Texas Land Nobody Wanted Become $39.5 Billion? (curto: os 2 milhões de acres, 1876 e 1883, Santa Rita, o PUF) | SORA FAILS | 274 | 1.585 | 20/10/2026 | 1:35 |
| Why a Texas Desert Pumps More Oil Than Iraq (capítulos "Dry Land and Who Owns the Oil Underground", "Across the Line: New Mexico and Federal Land", "Santa Rita No. 1 and the University's Oil Money") | Money Has a Map | 61 | 23 | 23/10/2026 | 14:07 |
| Why Is a Texas Oil Well Named for a Saint? (curto: Santa Rita "on University of Texas land", o PUF) | Iron & Powder | 3.290 | 39.578 | 12–13/11/2026 | 0:07 |

Mais no ângulo, todos de 2026:
- "Why Texas Has So Much Oil" (The Geologist's Atlas, 14 inscritos, 23/10, 24:58, 447 views): o mar do Permiano, Ricker, Pickrell e Santa
  Rita "on University of Texas land".
- "The Permian: how worthless West Texas land became half of America's oil" (Gulf Coast Crude, Explained, 3 inscritos, 03/11, curto, 97 views):
  "In 1876 Texas handed its university two million acres of West Texas, because the land looked worthless".
- "How Did One Oil Well Make a Texas College Rich?" (How We Built America, 07/11, curto, 337 views).
- "How One 1923 Oil Gusher Made UT Austin Ultra-Rich" (Today Was Pretty Good, 21/04, curto, 467 views).
- "Santa Rita No. 1: The Well That Changed Texas Oil History" (Oil, Gas and Energy, 15/01, 5:33, 144 views).

A terra federal do Texas, em 2026:
- "Why the US Government Owns Less Than 2% of Texas" (World Oddities, 04/10, curto, 1.938 views): 1845, a dívida e 1850.
- "Why 95% of Texas Is Private Land (Unlike the Rest of the West)" (Who Owns The Map, 07/10, 8:15, 7 views).
- "Nevada Is 79.8% Federal Land. Texas Is 1.9%. Here Is the Line" (Groundlines, 27/10, 6:01, 4 views): "one sentence written in 1845".

**Os antigos que ocupam a busca:**
- "University of Texas Taps Into Big Oil" (Bloomberg Television, 23/08/2022, 13.737 views). A descrição já diz "about $6 million" por dia: o
  "US$ 4,7 milhões por dia" da pauta não é ideia nova.
- "Oil-Rich University of Texas Cashes In On Alternative Power" (Bloomberg Podcasts, 10/06/2025, 19.412 views).
- "Why was Texas divided after it joined the USA?" (History Matters, 13/08/2023, 1,80 milhão de views; o ato 1).
- "Why So Much Land In The West Is Owned By The Federal Government" (Geography By Geoff, 30/01/2023, 368.352 views).
- "A Third of America Belongs to America" (CGP Grey, 26/11/2018, 18,8 milhões de views).
- Do lado do Novo México: "Why Is America's Poorest State Suddenly Rich?" (Painting The Past, 12/08/2026, 64.770 views, contado em
  `rico-pobre.md`).

**"Why is Texas so rich", genérico, em 2026:** só o contraste com o México, em canais minúsculos:
- "Why Did Texas Get Rich But Mexico Never Did?" (Mutnan Explains, 15/10, 1.031 views);
- "Why Texas Is Richer Than Most Countries" (Watershed Maps, 13/10);
- "Why Did Texas Get Rich But Mexico Didn't?" (Rich Side of the Map, 19/10);
- "Texas Won the Geography Lottery" (Terrain Verdict, 07/11);
- "How Geography Made Texas Ridiculously OP" (Whereology, 09/11);
- "Why Is Texas So Rich? Mexico Owned It Until 1836" (Why This Side, **17/11, hoje**).

**Colide?** Sim, no ângulo e no título:
- "Land Nobody Wanted", com Texas e a universidade, está num curto de 20/10.
- "Why Did Texas Get Rich..." contra o Novo México está em 2 longos de outubro.
- O mecanismo inteiro (1845, 1850, 1876, 1923, terra privada contra terra do BLM) está nos capítulos de 3 longos.

Nenhum tem views. O enxame chegou, mas não achou o público: é o que se espera de canal novo, e também pode ser sinal de que o assunto não puxa no
longo.

## 3. O potencial real

| Régua | Aqui | Passa? |
|---|---|---|
| 1. O nome é buscado | "texas" no título carrega busca (não medi). A frase do formato, "why is texas so rich", tem **< 750/mês** (concorrência 38) | Fraco |
| 2. Prova recente de interesse | Só em curtos: Santa Rita, 39,6 mil views (12/11); "Why Texas Can Legally Split Into 5 States", 141 mil (23/10). No longo, o mais próximo é do lado do Novo México, 64,8 mil (12/08). Os longos do ângulo têm de 4 a 447 views | Fraco |
| 3. O longo do ângulo não existe, ou está com canal minúsculo | Existe 4 vezes (mais 2 sobre a terra federal), em canais de 0 a 61 inscritos, em 6 semanas: é o enxame, como na Noruega e no Niágara | Não, na prática |
| 4. Paradoxo em 3 frases e no mapa | O mapa é ótimo (a linha, o vermelho da universidade, a terra federal do outro lado). Mas o paradoxo do título se inverte com os dados (§1) | Só com a frase nova |
| 5. A geografia explica o porquê | Pouco: o porquê é lei (a cláusula de 1845, a lei de 1850, o Enabling Act do Novo México, o Mineral Leasing Act). A geografia dá a bacia e a linha | Parcial |
| 6. Uma medida nossa | Sim (§4): 61,5 % contra 0,01 %, e os 762 vezes da terra firme | Sim |

**O enxame:** já chegou, antes de nós, em 3 frentes (Texas contra Novo México, a terra da universidade e a terra federal do Texas). Até publicarmos
(2 a 3 semanas de linha), haverá mais. O gatilho provável é a soma do "Why Is America's Poorest State Suddenly Rich?" (agosto) com os curtos de
Santa Rita e da cláusula dos 5 estados (outubro e novembro).

**Sustenta 13 a 16 min calmos?** Sustenta, em 3 atos:
1. 1836-1850: a República endividada, a cláusula de 1845 e a linha de 1850.
2. 1876-1923: o deserto dado para ser vendido, o mar do Permiano e o Santa Rita.
3. Hoje: o fundo, a linha e o Novo México, com o cheque de Washington e a terra do estado.

Mas o 3º ato honesto desmonta o título: diz que o Novo México também enriqueceu com o Permiano, por outro dono. O vídeo vira "dois jeitos de ser
dono do mesmo campo", e não "por que o Texas ficou rico".

## 4. A nossa medida

**Possível com dado aberto, e feita (preliminar).** As contas estão em `medida_federal.py` e `onrr_estados.py`, com as saídas em `medida-federal.txt`
e `onrr-estados.txt`. Os dados:
- a produção em terra federal por condado (ONRR, `calendar_year_production.csv`);
- os repasses mensais aos estados (ONRR, `monthly_disbursements.csv`);
- a produção de petróleo por estado (EIA, MCRFPNM1 e MCRFPTX1, versão de 30/10/2026);
- a população de 2025 (Census, o arquivo da 1ª rodada);
- os impostos do Texas (F16).

| Medida (2025) | Novo México | Texas |
|---|---|---|
| Petróleo de terra federal / petróleo do estado | **494,8 / 805,0 mi bbl = 61,5 %** (65,9 % com as unidades mistas); 487,5 mi bbl em Lea e Eddy | **0,3 / 2.102,6 mi bbl = 0,01 %** |
| Repasse de Washington, ano fiscal 2025, total | US$ 2.755 mi | US$ 99,8 mi (US$ 95,5 mi do GOMESA, do Golfo) |
| Repasse de Washington, ano fiscal 2025, só terra firme | US$ 2.755 mi | **US$ 3,6 mi** (do petróleo: US$ 0,10 mi) → **762 vezes** |
| O mesmo, ano fiscal 2026 | US$ 5.263 mi (com a venda de lotes de maio) | US$ 131,7 mi total; **US$ 7,2 mi** em terra firme → **733 vezes** |
| Por morador | o cheque de Washington: **US$ 1.296** (2025) | todo o imposto de petróleo e gás do estado: **US$ 248** (2025) |

- **"28 vezes" vira "mais de 700 vezes"**, e a razão do Texas não é "pouco petróleo federal", é **nenhum**: o que Washington manda ao Texas é
  dinheiro do Golfo.
- **A conta que vira o título:** só o cheque de Washington ao Novo México, por morador, é 5,2 vezes tudo o que o Texas cobra de imposto sobre
  a produção de petróleo e gás por morador. E o Novo México ainda tem a terra do estado (US$ 3,2 bi no ano fiscal 2026, F14) e os impostos
  dele, que não somei.
- **Ninguém mostrou o 61,5 %.** O GeoDossier dá "over 40%" de terra federal no Novo México (o CRS diz 31,6 %), e o Money Has a Map, "about a
  third of Permian oil" do lado do Novo México. O número é novo; o ângulo, não.
- **O que a medida não diz:**
  - o ano fiscal (out–set) e o ano civil não coincidem;
  - "Mixed Exploratory" são unidades com terra federal e não federal;
  - o repasse inclui gás e bônus de leilão, não só royalty de petróleo;
  - não somei os impostos do Novo México nem a renda da terra do estado no mesmo ano.
- **O mapa da pauta** (a terra da universidade sobre o Permiano, e a fração federal de cada lado) **não foi feito**. É possível com dado
  aberto:
  - o contorno do Permiano: as bacias da EIA;
  - a terra federal: a camada de gestão de superfície do BLM ou o PAD-US da USGS;
  - a terra do estado no Novo México: o mapa de situação fundiária do NMSLO;
  - os blocos da universidade: os levantamentos originais do GLO do Texas, pela lista de concessões. NÃO VERIFICADO que eles venham marcados
    como "University Lands".

## 5. O material

- **Mapa com geometria real:** sim, tudo aberto. Os estados e a costa no Natural Earth; a linha de 1850 (o paralelo 32° N e o meridiano 103°
  W) pela própria fronteira; o Permiano pela EIA; a terra federal pelo BLM ou pelo PAD-US (domínio público); os poços pelos dados públicos da
  Railroad Commission do Texas e do OCD do Novo México (licença a conferir).
- **Satélite aberto:** a grade de plataformas de poços do Permiano aparece no Landsat, e a NASA (Earth Observatory) tem cenas da bacia. O
  recife do Permiano está em El Capitan e Guadalupe, com foto do NPS em domínio público.
- **Foto e documento:**
  - a resolução de 1845 na NARA (domínio público);
  - a lei de 1850 no Statutes at Large (govinfo);
  - mapas de 1850 no Commons;
  - o Santa Rita No. 1 no campus, no Commons (CC BY 4.0 de ZhaoFJx; CC BY-SA 4.0 de Pi3.124, citados por um concorrente);
  - as fotos de 1923 estão no Briscoe Center (UT) e no Portal to Texas History, com direitos a conferir um por um;
  - o USGS Professional Paper 215 (Guadalupe, 1948) em domínio público.
- **Dado:** o ONRR, a EIA, o CRS, a UTIMCO, o NMSLO e o Census.

Dá para 13 a 16 min sem esticar. O material não é o problema.

## 6. O título e o gancho que eu defendo (se a Sala quiser salvar a pauta)

O único jeito honesto é trocar "Texas got rich" pela terra da universidade, que é a parte surpreendente e verdadeira, e deixar Washington e o
Novo México para o 3º ato:

- **Título:** **Why Texas Gave Its University 2 Million Acres of Oil Country** (60 caracteres).
  - "Gave" é exato: a terra foi "set apart, and appropriated", F4.
  - "2 million" é a soma de 1876 e 1883, F5; hoje são 2,1 milhões, F8.
  - "Oil Country" é o que a terra virou, não o que ela era.
  - Não achei título igual. Os parecidos são curtos ("How Did Texas Land Nobody Wanted Become $39.5 Billion?", "How Did One Oil Well Make a
    Texas College Rich?").
- Alternativa 1: **New Mexico's Oil Is 62% Federal. Texas's Is Almost Zero. Why?** (61).
  - É a nossa medida (§4), com os dois nomes buscados no título.
  - O molde lembra "Nevada Is 79.8% Federal Land. Texas Is 1.9%" (Groundlines, 4 views).
  - O "62%" é a fatia do petróleo, não da terra: a narração tem de dizer "oil".
- Alternativa 2: **Why Washington Gets New Mexico's Oil Royalties but Not Texas's** (62).
  - Verdadeiro: o royalty da terra federal vai a Washington, que devolve metade, F10.
  - Fica perto dos "Why Did Texas Get Rich But New Mexico..." de outubro.
- **Gancho** (41 palavras, sem a resposta): "In 1876, Texas set aside a million acres of dry West Texas land for a university it hadn't built yet. The land
  was thought to be of little value. Across the state line, the same oil field now pays Washington first."
- **Miniatura** (o estilo das referências):
  - o Texas e o Novo México em relevo amarelo, a água em azul;
  - **em vermelho, os blocos da University Lands** no oeste do Texas;
  - **em ciano, o contorno do Permiano** atravessando a linha para o Novo México;
  - a terra federal do Novo México em hachura cinza escura, discreta, para não brigar com o vermelho;
  - uma seta branca grossa dos blocos vermelhos até Austin;
  - **na caixa preta: "$40 BILLION"**. O título já diz os 2 milhões de acres, então a caixa dá o que o título não dá.
  - Para a alternativa 1, o vermelho vira a terra federal do Novo México dentro do Permiano, e a caixa, "62% vs 0%".

Nenhum dos três salva a pauta: a história já foi contada 4 vezes em outubro (K1), a busca é pequena (K4) e o paradoxo do formato pedido ("como X
ficou rico") se inverte (K2).

## 7. Os K

- **K1 — GRAVE. O enxame já fez o ângulo, e o título já tem dono.**
  - Em 6 semanas (04/10 a 13/11/2026), 4 longos contaram o mecanismo inteiro: GeoDossier, Borderline Cases, Money Has a Map e The
    Geologist's Atlas.
  - Mais 2 longos e 1 curto sobre a terra federal do Texas, e 5 curtos sobre a terra da universidade.
  - Um curto de 20/10 usa a frase do nosso título: "How Did Texas Land Nobody Wanted Become $39.5 Billion?".
  - "Why Did Texas Get Rich ... New Mexico" está em 2 títulos de outubro.
  - O Atlântico caiu por título repetido; aqui o risco é o mesmo.
- **K2 — GRAVE. O paradoxo do título se inverte.**
  - O Texas não é rico por morador (95 % da renda per capita dos EUA, F17).
  - A terra que o Texas guardou virou terra privada: o dinheiro vai aos donos de subsolo e à universidade.
  - O Novo México tem 13 milhões de acres de subsolo do estado, que renderam US$ 3,2 bi no ano fiscal 2026 (F14), e um fundo da terra de
    ~US$ 40,8 bi (F15, NÃO CONFERIDO), do tamanho do PUF.
  - Washington devolve ao Novo México metade dos royalties federais (F10): por morador, 5,2 vezes tudo o que o Texas cobra de imposto sobre
    petróleo e gás.
  - "Why Texas got rich" (e os concorrentes "while New Mexico stayed poor") contam uma história que os números públicos não sustentam.
- **K3 — MÉDIO. Os "28 vezes" estão errados.**
  - Dos US$ 99,8 mi do Texas no ano fiscal 2025, US$ 95,5 mi são do Golfo (GOMESA).
  - Na terra firme, a razão é 762 vezes (2025) e 733 vezes (2026).
  - O Texas recebeu US$ 0,10 mi do petróleo de terra federal.
  - Se for ao ar, vai como "more than 700 times", com o "onshore" dito.
- **K4 — MÉDIO. A procura no longo não está provada.**
  - "why is texas so rich" tem menos de 750 buscas por mês.
  - Os 13 longos de 2026 do ângulo e do genérico tiveram de 3 a 1.031 views.
  - A prova de interesse está só nos curtos (39,6 mil e 141 mil) e no lado do Novo México (64,8 mil).
  - O caminho do Big Sur (um lugar muito buscado, sem dono) não existe aqui.
- **K5 — MÉDIO. A geografia explica pouco.**
  - O porquê é lei: a cláusula de 1845, a lei de 1850, o Enabling Act de 1910 (que deu terra ao Novo México) e o Mineral Leasing Act.
  - A geografia dá o cenário (o mar do Permiano, a linha), não a causa.
- **K6 — LEVE. As palavras fortes.**
  - "The only state" precisa de "in the West" (F2).
  - "Land nobody wanted" vira "land thought to be of little commercial value" (F5).
  - "The University of Texas owns" vira "set aside for the university" (a terra é do fundo; o sistema UT fica com dois terços e a A&M, com um
    terço).
  - O fundo hoje cresce mais pelo mercado que pela terra (F7).
- **K7 — LEVE. Os números se mexem.**
  - O recorde de 2026 do Novo México vem de uma venda de lotes de maio (mais de US$ 4 bi, F12), que não se repete todo ano.
  - O relatório de 2026 do PUF não está no ar (404).
  - O preço do petróleo muda tudo de um ano para o outro.
