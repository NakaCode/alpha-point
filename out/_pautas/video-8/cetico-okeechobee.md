# Cético: `okeechobee` — "Why Florida Hid Its Biggest Lake Behind a 143-Mile Wall" (17/11/2026)

**Veredito: DERRUBADO. Nota 4,0 / 10.**

- **O ponto mais grave (K1):** o título e o gancho já existem. "Why Florida Built a 143-Mile Wall Around Its Biggest Lake (It's Not the
  Alligators)" (Maxime Girard, 16/10/2026, 15:08) é o nosso título com outro verbo, e a descrição dele é o nosso gancho: "you can drive
  the entire way around it without ever seeing the water". Por cima, o curto viral **"Why Florida Wrapped Lake Okeechobee in a 143-Mile
  Dike"** (MechDisk, 87,5 mil inscritos, 31/10/2026, **516.919 views**, conferido na página /watch) e o enxame: a busca "lake okeechobee
  dike" por data devolveu **50 vídeos entre 07/10 e 17/11/2026**, 46 deles sobre o dique ou o furacão de 1928 (24 longos, 22 curtos).
- **A pergunta da Sala ("pode ser do tipo da que ficou de pé?"): não.** É o tipo que caiu na 1ª rodada, com o viral e a notícia por
  trás: o curto de 517 mil, a seca de 2026 (o gênero "Florida Lowered Lake Okeechobee… Reveals Something", uma dúzia de vídeos de 13 a
  226 mil views) e o **GTA 6, que sai em 19/11/2026** com Ambrosia (a Clewiston do jogo) à beira do lago; já há curtos ligando os dois.
- As duas variantes da pauta também estão tomadas: o "you can't see it" está na descrição de dois vídeos de novembro, e o "Florida dumps
  the lake into the ocean" é o título e o enredo de "Why Florida Dumps Its Rain Into the Ocean" (Why Geography, 06/11/2026) e de um curto
  de 73 mil (Sunshine Secrets, 05/09/2026), que conta o paradoxo inteiro da pauta em 2:38.
- O "hid" é falso como intenção: o dique foi feito para segurar a água depois de 1928, não para esconder o lago. O que é verdade, e
  medimos: **a crista tapa a vista de quem está em pé a 300 m do dique em 133 de 139 pontos (96 %)**.
- O que a pauta tem de nosso é outro ângulo, e é bom: **o chão das cidades da margem sul afundou (o marco de Belle Glade perdeu ~6 pés
  de solo desde 1924), e com o lago no alto da faixa de operação (15,5 pés) a água fica 2 a 4 pés acima do chão mediano de Belle Glade,
  South Bay, Pahokee e Canal Point**, atrás de uma crista 26 a 29 pés acima delas. Não achei esse ângulo em título. Mas a espinha do
  vídeo (o lago raso, 1928, o dique, as descargas, as algas, o reservatório) seria a mesma dos ~46 vídeos do enxame.

Pastas: o trabalho em `out/_pautas/video-8/_trabalho/cetico-okeechobee/` (as buscas do vidIQ em `v1`…`v6`, `watch.jsonl`,
`dique_alturas.py`, `alturas-resumo.md`, `alturas-amostras.tsv`, `cidades_grade.py`, `cidades-grade.md`, `contar_enxame.py`,
`osm_baixar.py`, `dique.json`, `commons_cats.py` e as fontes em `fontes/`).

## 1. Os fatos

Lidos em 17/11/2026. As contas marcadas "conta nossa" usam só os números das linhas citadas.

| # | Fato | Fonte (URL) | Veredito |
|---|---|---|---|
| F1 | "With a surface area of 730 square miles, it is the largest lake in the southeastern United States"; "an average depth of only 9 feet". | SFWMD: https://www.sfwmd.gov/our-work/lake-okeechobee | CONFERE |
| F2 | "The Herbert Hoover Dike is a 143-mile earthen dam that surrounds Lake Okeechobee", e, no mesmo texto, "surrounds **nearly** the entire lake"; nos anos 1920, "flooding from hurricanes killed thousands"; 68 milhas de dique nos anos 1930; reforma desde 2005, abaixo da estimativa de US$ 1,8 bilhão, "substantial completion" celebrada em **25/01/2023** (os últimos 130 pés, "early 2023"). | Corpo de Engenheiros, Jacksonville, no DVIDS (25/01/2023): https://www.dvidshub.net/news/437213/usace-celebrates-completion-herbert-hoover-dike-restoration-project | CONFERE. A página do próprio Corpo (saj.usace.army.mil/HHD) deu **403**: não contornei |
| F3 | 16/09/1928: o vento "piled the water up at the south end of the lake, ultimately topping the levee", um "hastily built muck levee" de "4-5 foot"; "at least 2,500" mortos (a NWS listava 1.836); Pahokee, Canal Point, Chosen, Belle Glade e South Bay; em 1926, a água do lago varreu Moore Haven e matou "over 100 people"; o dique de hoje "is nearly 30 feet high". | NWS Miami: https://www.weather.gov/mfl/okeechobee | CONFERE |
| F4 | "Lake Okeechobee historically overflowed its natural banks, sending a sheet flow of water south through the expansive Everglades"; depois de 1928, o governo federal autorizou o dique "in 1930"; em sete anos, "67 miles of dikes along the southern shore" (o DVIDS diz 68); hoje o Corpo busca **12,5 a 15,5 pés NGVD**; "The lake's water level can rise up to **six times faster** than water can be discharged". | SFWMD, ficha "Lake Okeechobee Coastal Releases": https://www.sfwmd.gov/sites/default/files/documents/jtf_lakeo_releases.pdf (sem data; fala do dique "nearly 80-year-old", logo dos anos 2010) | CONFERE |
| F5 | Ordem executiva 18-191 (09/07/2018): as algas "stemming from the Army Corps of Engineers decision to discharge water from Lake Okeechobee" no Caloosahatchee, no St. Lucie e no Indian River Lagoon; **estado de emergência em 7 condados** (Glades, Hendry, Lee, Martin, Okeechobee, Palm Beach, St. Lucie). | Governo da Flórida, cópia do SFWMD: https://www.sfwmd.gov/sites/default/files/documents/EO-18-191.pdf | CONFERE. A emergência de 2016 (EO 16-155): NÃO CONFERIDA, não li |
| F6 | O reservatório da EAA: "240,000 acre-feet", 10.500 acres, mais 6.500 acres de área de tratamento; a obra antecipada "from 2034 to 2029"; para reduzir as descargas "to the Caloosahatchee and St. Lucie estuaries". | SFWMD: https://www.sfwmd.gov/our-work/cerp-project-planning/eaa-reservoir | CONFERE |
| F7 | **O chão afundou:** o marco de concreto de 9 pés cravado na rocha em 1924 no centro de pesquisa da UF em Belle Glade, com o solo rente ao topo; perda de 48 polegadas de 1924 a 1967, 23 de 1968 a 2009 e 2,5 de 2010 a 2019 (**~73,5 polegadas, ~6,1 pés**, conta nossa); na EAA inteira, ~6,5 pés (Aich et al. 2013). Causa: a drenagem e a decomposição do solo orgânico. O próprio texto avisa que o marco "may not be typical". | UF/IFAS EDIS SL 311 (Bhadha, Wright, Snyder; 2009, revisto em 03/2020): https://ask.ifas.ufl.edu/publication/SS523/pdf | CONFERE. O capítulo da USGS (Circular 1182, pubs.usgs.gov) e a página da revista (journals.flvc.org) deram **403**: NÃO CONFERIDOS |
| F8 | **A medida nossa (§4):** a crista do dique tem mediana de 36,0 pés NAVD88; fica 21,2 pés (mediana; quartis 16,8 e 24,9) acima do chão a 300 m para fora; tapa a vista de quem está em pé ali em 96 % dos pontos. Com o lago a 15,5 pés NGVD, a água fica acima do chão mediano de Belle Glade (+3,1 pés), Canal Point (+4,3), Pahokee (+2,7) e South Bay (+2,0); com o lago a 12,5, só de Belle Glade (+0,1) e Canal Point (+1,3). | 3DEP 1 m da USGS (getSamples, domínio público); a linha do dique do OSM (ODbL); o Gazetteer 2024 do Census; NGVD29 → NAVD88 = −0,377 m pelo VERTCON 3.0 da NGS (NCAT, centro do lago) | CONFERE (medido; limites no §4) |
| F9 | O dique "surrounds" o lago: há uma abertura em Fisheating Creek, onde o dique entra pela terra acompanhando o riacho. | Só resumo de busca e enciclopédia; a página do Corpo deu 403; a cópia arquivada dela (UNT) não vale como fonte pelo CLAUDE.md | NÃO CONFERIDO. O DVIDS (F2) basta para dizer "nearly the entire lake" |
| F10 | O nível do lago hoje e a série histórica. | O CWMS do Corpo (cwms-data.usace.army.mil) tem a série, mas o robots.txt veta `/cwms-data/catalog/` e `/cwms-data/timeseries/`; fiz **2 pedidos ao catálogo antes de ler o robots.txt** (não usei o que veio e não pedi a série). O DBHYDRO do SFWMD não abri | NÃO CONFERIDO |

**"Hid" e "you can't see it" são verdade?**
- **"Hid": não, como intenção.** O dique foi autorizado em 1930 para segurar o lago depois de 1928 (F3, F4). Ninguém escondeu o lago:
  ele sumiu da vista como efeito. A frase verdadeira: **"Walk up to Lake Okeechobee from almost anywhere, and all you see is a grass
  wall."**
- **"You can't see it from the towns": verdade, e medida (F8).** Da rua, a 300 m do dique, a crista passa o olho de quem está em pé em
  133 de 139 pontos; os 6 que não passam ficam em eclusas, na boca do Kissimmee e no trecho em que o dique segue o riacho perto de Moore
  Haven. Mas para as cidades a 3–5 km do dique (Belle Glade, Okeechobee) a frase é trivial: de lá não se veria um lago de 9 pés de
  qualquer jeito. E dá para ver o lago, sim: em cima do dique (a trilha LOST, ~110 milhas pela própria descrição de um vídeo) e nas
  marinas que passam por cima ou por eclusas.
- **"143-mile wall that surrounds the lake":** "nearly" (F2). A palavra "wall" é licença: é um aterro de terra, com uma parede enterrada
  dentro dele (o "cutoff wall" de 56 milhas que os vídeos de novembro já contam).

## 2. A colisão

vidIQ, 6 buscas (`vidiq_youtube_search`, 30 créditos), as linhas em `_trabalho/cetico-okeechobee/` (`v1` a `v6`; `v3` e `v5` voltaram
inteiras na conversa e estão resumidas em `v3-v5-relevantes.tsv`); 6 páginas /watch conferidas (`watch.jsonl`). Views da hora da busca
(17/11/2026, ~21h).

**Os 5 mais próximos:**

| Título | Canal | Inscritos | Views | Data | Duração |
|---|---|---|---|---|---|
| **Why Florida Built a 143-Mile Wall Around Its Biggest Lake (It's Not the Alligators)** (conferido na /watch; a descrição tem o nosso gancho) | Maxime Girard | 4 | 90 | 16/10/2026 | 15:08 |
| **Why Florida Wrapped Lake Okeechobee in a 143-Mile Dike** (conferido na /watch) | MechDisk | 87,5 mil | **516.919** | 31/10/2026 | 2:39 (curto) |
| Why Florida Trapped a 730-Square-Mile Lake Behind Dirt (a descrição: o lago "up to thirty feet above surrounding farming towns", exagero; F8) | Built Uncovered | 16 mil | 190 | 24/10/2026 | 9:59 |
| Why Florida Dumps Its Rain Into the Ocean (a nossa variante 3; o dique, as descargas para os lados, 2018, a EAA, o reservatório) | Why Geography | 1,61 mil | 237 | 06/11/2026 | 11:40 |
| Why Lake Okeechobee Has a 143-Mile Wall Around It (a descrição: "From most roads around the lake, you can't even see the water") | Fishing Spots USA | 36 | 1.275 | 08/11/2026 | 0:38 |

Outros do mesmo ângulo, de 2026: "Untitled Video" (Sunshine Secrets, 14,5 mil inscritos, 05/09, **73.287**; o paradoxo inteiro da pauta:
o lago transbordava para o sul, 1926 e 1928, o dique, a água para leste e oeste, 2018, a reforma, o reservatório); "America Spent $1.5
Billion So the Wall Around Lake Okeechobee Wouldn't Fail. It's Still Made of Mud." (Held Together, 09/10, 19:02, 182); "They Couldn't
Drain the Lake. So They Built a Wall Inside the Dike" (Machinery Vault, 29/09, 16:21, 3.744); "Florida Wrapped a Lake in a 143-Mile
Wall. #Shorts" (Amir Was There, 13/11); "Florida Cut a Wall Inside a 143-Mile Dike" (The Big Takeaway, 16/11, 1.149); "Lake Okeechobee's
90-Year-Old Dike Is LEAKING" (Olivia Weather News, 03/11, 17:00); "Lake Okeechobee's 143-Mile Dike Is FAILING" (US Weather Alert, 28/06,
22:05, 8.420); "GTA 6 Ambrosia: the wall around Florida's biggest lake" (Paused Game, 31/10, curto).

O furacão de 1928 como assunto: "2,500 Dead and Nobody Counted Them | FLORIDA 1928" (The Unfilmed, 979 inscritos, 13/09/2026, 25:44,
**74.519**: o longo que estourou em canal pequeno) e, depois dele, ao menos 10 longos e 8 curtos de 17/10 a 17/11 (Disaster Clock, Earth
Fury, Forgottenia, Stiklo History, ALBI Florida, HeartLand Files, High Water Mark, Sky Catalog, US zone, American Storm Record…).

**O enxame, contado** (`contar_enxame.py` sobre a busca `v2`, "lake okeechobee dike" por data, 12 meses): os 50 resultados vão de
**07/10 a 17/11/2026**; 46 são do dique ou de 1928 (24 longos e 22 curtos). A sequência: o curto de 73 mil (05/09) e o longo de 74,5 mil
(13/09) → longos do dique em 29/09, 09/10, 16/10, 24/10 → o curto de 517 mil (31/10) → em novembro, mais de um vídeo por dia.

Sem data, o que ocupa a busca de "lake okeechobee" é pesca (dos 12 mais vistos, 9 são de pesca ou torneio, de 312 mil a 733 mil views, e
1 é de travessia de barco) e dois longos bem feitos sobre a água: "Battle Over Lake Okeechobee: The Liquid Heart of the Florida Everglades" (South Florida PBS, 121 mil
inscritos, 07/10/2024, 27:13, **415.252**) e "Toxic Lake: The Untold Story of Lake Okeechobee" (The Weather Channel, 08/12/2016, 10:56,
**520.191**).

**Colide?** Sim, no título (o de trabalho e as duas variantes), no gancho e no paradoxo. O que sobra livre é o ângulo da medida (o lago
acima das cidades do sul; §4, §6): não achei em título nenhum das ~200 linhas lidas; está só, exagerado, na descrição da Built Uncovered.

## 3. O potencial, pela régua

| Régua | Leitura | Nota |
|---|---|---|
| 1. O nome é buscado | "lake okeechobee" ≈ 9,8 mil/mês (concorrência 37, +76,2 %; a Sala, 17/11). Mas a intenção é de pesca: dos 12 vídeos mais vistos com o nome, 9 são de pesca | Média: o volume é 74 % do de Big Sur, a intenção é outra |
| 2. Prova recente de interesse | Sim, forte: 516.919 (curto do dique, 31/10), 74.519 (longo de 1928 em canal de 979 inscritos, 13/09), 73.287 (curto da água, 05/09), e o gênero "lowering reveals" (13 a 226 mil) | Sim |
| 3. O longo bem feito ainda não existe | Na água, existe (PBS, 415 mil, 2024); em 1928, The Unfilmed (74,5 mil); no dique, só minúsculos (90 a 3,7 mil), mas são ~24 longos em 41 dias | Não |
| 4. O paradoxo em 3 frases e no mapa | Sim. O melhor mapa é o corte: o lago, a crista, a cidade abaixo do lago | Sim |
| 5. A geografia explica o porquê | Sim: o lago raso que transbordava para o sul; o solo orgânico que afundou ~6 pés depois de drenado; a planície sem desnível, que obriga a bombear e a soltar a água para os lados | Sim |
| 6. Uma medida nossa | Sim (§4): a crista contra o chão, o lago contra as cidades | Sim |

**O enxame:** já chegou, e não em dias: em semanas seguidas, desde setembro (o 1928 fez 98 anos em 16/09/2026), e acelerou depois do
curto de 517 mil (31/10). Com o GTA 6 saindo em 19/11, o lago e Clewiston vão aparecer para milhões de jogadores, e o enxame já faz curtos
"GTA 6 vs real" sobre os dois. Até publicarmos (2 a 3 semanas), haverá mais.

**Sustenta 13 a 16 min calmos?** Sim, sobra assunto: o lago raso e o lençol para o sul; 1926 e 1928; o dique de 1930 e o de 143 milhas;
o solo que afundou; o lago acima das cidades; as descargas para leste e oeste e as algas de 2016 e 2018; a reforma de 2005–2023 e a parede
enterrada; o reservatório de 2029; a seca e o fogo no fundo do lago em 2026. Mas, tirando o solo e a medida, é a espinha que o enxame já
contou capítulo a capítulo (as descrições de Why Geography, Sunshine Secrets, The Big Takeaway e MechDisk têm todas as peças).

## 4. A nossa medida

**Possível com dado aberto, e feita (preliminar):** `dique_alturas.py` e `cidades_grade.py`, em `_trabalho/cetico-okeechobee/`.

- A linha do dique: as 60 vias "Herbert Hoover Dike" do OSM (184 km; o resto das 143 milhas, no noroeste, tem outros nomes, L-48, L-49…);
  uma amostra a cada 2 km (139 pontos). Em cada uma, a crista é o ponto mais alto num corte de −40 a +40 m; o chão é o 3DEP a 300 m e a
  1.000 m para fora do lago. 27 lotes de até 100 pontos no `getSamples` do 3DEP (1 m, NAVD88), com as cidades, um por vez.
- **A crista:** mediana 36,0 pés NAVD88 (≈ 37,2 NGVD). **Acima do chão a 300 m: mediana 21,2 pés** (quartis 16,8 e 24,9; máximo 33,5).
  A NWS diz "nearly 30 feet high", e o enxame repete "35 feet tall": é o máximo, não o comum.
- **A vista:** a crista passa o olho (chão + 1,7 m) em **133 de 139 pontos (96 %)**.
- **O lago contra o chão:** com o lago no alto da faixa de operação (15,5 pés NGVD), o chão a 300 m do dique fica abaixo da água em
  **43 % dos pontos**; no baixo da faixa (12,5), em 21 %.
- **As cidades** (mediana de uma grade de 7 × 7 pontos, ~900 m de lado, em volta do ponto interno do Census):

| Lugar | Chão (pés NAVD88) | Lago a 12,5 / 15,5 pés NGVD acima do chão | Crista mais perto, acima do chão |
|---|---|---|---|
| Belle Glade | 11,1 | +0,1 / **+3,1** | 28,5 |
| Canal Point | 9,9 | +1,3 / **+4,3** | 27,4 |
| Pahokee | 11,5 | −0,3 / **+2,7** | 25,8 |
| South Bay | 12,2 | −1,0 / **+2,0** | 28,6 |
| Moore Haven | 13,4 | −2,1 / +0,9 | 21,8 |
| Buckhead Ridge | 14,1 | −2,8 / +0,2 | 17,8 |
| Clewiston | 16,7 | −5,5 / −2,5 | 16,7 |
| Okeechobee | 27,8 | −16,5 / −13,5 | 10,6 |

- O número de manchete: **na margem sul, com o lago no alto da faixa, a água fica 2 a 4 pés acima das ruas de Belle Glade, South Bay,
  Pahokee e Canal Point, e a crista 26 a 29 pés acima delas.** A geografia explica: o marco de Belle Glade perdeu ~6 pés de solo desde
  1924 (F7).
- **O que a medida não diz:** com que frequência o lago fica acima dessas ruas. O limiar é ~12,3 pés NGVD para Belle Glade, ~11,1 para
  Canal Point, ~12,7 para Pahokee e ~13,4 para South Bay (conta nossa: chão + 1,24 pé). Para dizer "most of the year", falta a série
  diária do lago (DBHYDRO do SFWMD; o CWMS do Corpo está vetado no robots.txt). O lago caiu abaixo de 11 pés na seca de 2026 (só pelos
  vídeos, NÃO CONFERIDO): nessa hora, ele não fica acima de cidade nenhuma. O ponto interno do Census não é o centro histórico, e a grade
  pega ruas, quintais e canais.
- A medida da estrutural (730 mi² × 640 × 9 pés ≈ 4,2 milhões de acre-pés; o reservatório guarda 5,7 % disso) confere na aritmética.

## 5. O material

- **Mapa com geometria real:** sim. O lago (OSM, relação 1240556) e o dique (OSM, ODbL; crédito "© OpenStreetMap contributors"); o
  relevo de 1 m do 3DEP para um **corte** (o lago, a crista, a cidade abaixo do lago), que é a imagem que nenhum dos concorrentes tem
  (o The Big Takeaway diz "All visuals are 3D illustrations (schematic)").
- **Satélite aberto:** Landsat e Sentinel-2; as imagens da NASA das algas no lago (2016, 2018; a The Big Takeaway cita "NASA Earth
  Observatory, Bloom in Lake Okeechobee", não conferi a página).
- **Foto e vídeo de acervo livre:** no Commons, Lake Okeechobee 68 arquivos, Herbert Hoover Dike 29, Belle Glade 140, Clewiston 61,
  Pahokee 32, Moore Haven 94, St. Lucie Canal 119, Caloosahatchee River 34 (API do MediaWiki, 2 pedidos; a categoria do furacão de 1928
  não achei pelo nome); o Corpo no DVIDS (domínio público; as fotos da reforma); 1928: Florida Memory (licença a conferir) e o filme de
  1928 que a Why Geography lista como domínio público; o marco de Belle Glade (foto da UF/IFAS, licença a conferir).
- **Dado:** 3DEP, SFWMD (DBHYDRO, a ler), o VERTCON da NGS.

Dá para 13 a 16 min sem esticar.

## 6. O título e o gancho que eu defendo (se a Sala quiser salvar a pauta)

O título de trabalho está queimado (Maxime Girard, 16/10; MechDisk, 31/10). O único caminho é o da medida e do solo que afundou:

- **Título:** **Why Lake Okeechobee Sits Above the Towns on Its South Shore** (58 caracteres). Não achei título igual nem parecido. Vale
  com o lago acima de ~13,4 pés NGVD (as quatro cidades) e precisa da série do lago para não virar exagero (K6).
- Alternativa 1: **The Land South of Lake Okeechobee Sank Below the Lake** (53) — o solo de ~6 pés (F7) e a medida (F8).
- Alternativa 2: **Why Lake Okeechobee Is Higher Than Belle Glade's Streets** (56) — o caso mais firme (+3,1 pés com o lago a 15,5;
  100 % da grade abaixo da água), mas Belle Glade não é buscado.
- **Gancho** (45 palavras, sem a resposta): "Florida's biggest lake averages just nine feet deep. Yet when it runs high, its surface sits above the
  streets of the towns on its south shore, behind a wall of earth you can't see over. How did a lake end up higher than the towns?"
- **Miniatura:** o mapa da margem sul em relevo amarelo, o lago em azul; **em vermelho, a terra mais baixa que o lago** a 15,5 pés (o
  3DEP pintado, com Belle Glade, South Bay e Pahokee dentro); **em ciano, o anel do dique**; a palavra na caixa preta: **"BELOW"** (a B:
  **"SUNK"**); uma seta branca grossa do lago para Belle Glade. A alternativa honesta ao mapa: o corte (lago, crista, cidade) com a linha
  da água passando por cima dos telhados baixos.

## 7. Os K

- **K1 — GRAVE. A colisão.** O título de trabalho é quase igual ao de Maxime Girard (16/10/2026), cuja descrição é o nosso gancho; o
  curto "Why Florida Wrapped Lake Okeechobee in a 143-Mile Dike" tem 516.919 views em 17 dias; as variantes 1 e 3 também estão tomadas
  (Fishing Spots USA, 08/11; Why Geography, 06/11; Sunshine Secrets, 73 mil, 05/09). 46 vídeos do dique ou de 1928 em 41 dias.
- **K2 — GRAVE. Não é a pauta do tipo que ficou de pé.** Tem viral (517 mil) e notícia por trás (a seca e o fogo de 2026, o gênero
  "lowering reveals", os 98 anos de 1928 e o GTA 6 em 19/11, com Ambrosia/Clewiston à beira do lago). O enxame já está aqui e acelera.
- **K3 — MÉDIO. O "hid" é falso como intenção.** O dique segura a água desde 1930 por causa de 1928; o lago sumiu da vista como efeito.
  Verdade medida: a crista tapa a vista de quem está em pé a 300 m em 96 % dos pontos (§1).
- **K4 — MÉDIO. A busca do nome é de pesca, e o longo bem feito da água existe.** 9 dos 12 vídeos mais vistos com "lake okeechobee" são
  de pesca; a PBS (415 mil, 2024) e a Weather Channel (520 mil, 2016) ocupam a história da água; The Unfilmed (74,5 mil, 09/2026) ocupa
  1928.
- **K5 — MÉDIO. Repete o vídeo 7.** "Why the U.S. Pays Canada to Keep Part of a Lake Empty" saiu hoje: um lago mantido baixo de propósito,
  quem fica com a água. Aqui, o lago mantido baixo pelo dique e a água solta para os lados. Dois seguidos com o mesmo esqueleto.
- **K6 — MÉDIO. O ângulo que salvaria depende do nível.** "Above the towns" vale com o lago acima de ~12,3 a 13,4 pés NGVD; na seca de
  2026 não valia. Sem a série diária (DBHYDRO), o título fica sem a frequência, e "most of the year" não se pode dizer.
- **K7 — LEVE. "Surrounds" e "wall".** O dique cerca "nearly the entire lake" (F2); a abertura de Fisheating Creek ficou NÃO CONFERIDA.
  "Wall" é um aterro de terra (com a parede enterrada dentro). A altura: 21 pés acima do chão, na mediana, não 30 nem 35.
- **K8 — LEVE. Pendências de fonte.** saj.usace.army.mil, pubs.usgs.gov e journals.flvc.org deram 403 (não contornei); a EO 16-155
  (2016) não li; o número de mortos de 1926 é o da NWS ("over 100"), sem a fonte do NHC.

## 8. Créditos e limites

- **vidIQ:** 6 buscas de 5 créditos: **30 créditos**. Saldo antes 5.486, depois 5.391; a diferença maior vem de outros agentes rodando
  ao mesmo tempo.
- **Lido:** 3 páginas do SFWMD e 2 PDFs dele (a ficha das descargas e a EO 18-191, texto pelo PyMuPDF), o DVIDS, a NWS Miami, o EDIS
  da UF/IFAS (PDF), 6 páginas /watch (uma por vez), o Overpass do OSM (2 pedidos), o 3DEP (35 pedidos de até 100 pontos, um por vez, um deles com erro 502 e repetido),
  o Gazetteer do Census (1), a NCAT da NGS (1) e a API do Commons (2). **403, não contornados:** saj.usace.army.mil, pubs.usgs.gov,
  journals.flvc.org. **Um tropeço meu:** 2 pedidos ao catálogo do CWMS do Corpo antes de ler o robots.txt dele, que veta o catálogo e as
  séries; parei ali e não usei o que veio. Nenhum navegador, nenhum crédito pago além do vidIQ, nenhum commit.
- Os arquivos maiores em `_trabalho/cetico-okeechobee/fontes/`: a EO 18-191 (4,3 MB), o EDIS (1,5 MB) e a ficha do SFWMD (0,2 MB); nada
  acima de 5 MB.
