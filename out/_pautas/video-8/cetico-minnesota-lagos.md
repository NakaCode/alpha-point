# Cético: `minnesota-lagos` — "Why Minnesota Has 10,000 Lakes and Texas Had to Build Its Own" (17/11/2026)

**Veredito: DERRUBADO. Nota 4,0 / 10.**

- **O ponto mais grave (K1):** as duas metades da pauta saíram no último mês, e uma delas com o nosso molde de título.
  - **"Why Minnesota Has 10,000 Lakes And Iowa Has Almost None"** (Land & Consequence, 630 inscritos, **05/11/2026**, 14:01, 783 views,
    conferido na /watch). As cinco primeiras palavras são as nossas, e o porquê também: o gelo fez os lagos de Minnesota e não os do vizinho
    do sul.
  - **"Every Big Lake in Texas Is Man-Made… Except One. Why?"** (Whereology, 146 inscritos, **19/10/2026**, 20:54, 548 views, conferido). É o
    nosso 3º ato inteiro: "the ice sheets never came this far south", o Caddo e a jangada, a seca dos anos 1950 e a corrida às represas. Nas
    fontes, o mesmo NALMS de 2012 que a pauta usa, o HydroLAKES, o limite do gelo e a Driftless Area.
  - Por cima, "Why Canada Has So Many Lakes: The HIDDEN Ice Age Reason" (Atlas Signals, **15/11/2026**) conta lagos com o HydroLAKES e compara
    com Minnesota. São três vídeos no ângulo em 30 dias, e a régua da própria estrutural derruba com três em 2026.
- **A busca não segura (K2):** "minnesota lakes" e "why does minnesota have so many lakes" ficam abaixo de 750 buscas/mês no vidIQ (EUA), menos
  de 6 % de "big sur" (13,3 mil). O Big Sur viveu da pesquisa, e aqui a pista de pesquisa é estreita e já ocupada: GeologyHub, 23 mil (2024);
  GEO GIRL, 135 mil (09/2025); Minnesota PBS.
- **O mapa não mostra o paradoxo sozinho (K3).** Medi no NHD da USGS (§4): com 10 acres ou mais, o Texas tem **mais** corpos d'água do tipo "lago"
  que Minnesota (15.225 contra 13.797), e a Flórida é mais densa que Minnesota (74,8 contra 66,9 por 1.000 km²). O NHD não separa represa de
  lago: no Texas, só 67 dos 15 mil estão como "Reservoir".
  - A linha só aparece com uma classificação de origem. Essa classificação já existe e já foi mapeada: a LAGOS-US RESERVOIR, com 137.465 lagos,
    num artigo de 2023. O portal dela recusou a leitura automática.
  - A frase "they stop along a single line" é forte demais. A Flórida (carste), as 19.300 playas do Texas, o oeste montanhoso e os till plains
    do Ohio, de Indiana e do Iowa (cobertos pelo último gelo, e com poucos lagos) não cabem nela.
- **O que a pauta tem de bom, e é nosso:** o gelo foi muito além da linha dos lagos. Chegou a Topeka e a Lawrence, no Kansas, há uns 600 mil anos,
  e não deixou lago nenhum. Os lagos seguem só o gelo **recente**. Um lago é passageiro, e essa é a geografia que nenhum dos concorrentes conta.
  O Land & Consequence chega a errar ("skipped almost all of Iowa": o gelo cobriu o Iowa, só que há muito tempo). Vira pauta só com outro
  título, e com busca fraca (§6).

Pastas: o trabalho está em `out/_pautas/video-8/_trabalho/cetico-minnesota-lagos/`:
- as buscas do vidIQ em `vidiq-buscas.tsv` (e a 3ª, inteira, em `v3-sul-sem-lagos-12m.*`) e as páginas /watch em `watch.jsonl`;
- a medida: `nhd_por_estado.py`, `nhd-por-estado.tsv`, `nhd-fcode-tx-mn.tsv`, `densidade.py` e `nhd-densidade.md`;
- o Commons: `commons_cats.py` e `commons-cats.tsv`;
- o PDF do DNR em `fontes/`.

Ficaram fora do git, em `midia/_pautas/video-8/minnesota-lagos/` (regra dos 5 MB), os PDFs da LAGOS (9,1 MB) e do Wurbs (5,7 MB) e os limites
estaduais do Census.

## 1. Os fatos

Lidos em 17/11/2026, entre ~22h10 e ~22h30 (hora de Brasília).

| # | Fato | Fonte (URL) | Veredito |
|---|---|---|---|
| F1 | Minnesota: "Number of lakes 10 acres or larger: 11,842". "Most of Minnesota's lakes formed as a result of the action of giant glaciers that shaped its surface tens of thousands of years ago." | MN DNR, "Water Ways: A Minnesota Primer and Project WET Companion", cap. 2 (PDF criado em 23/08/2010): https://files.dnr.state.mn.us/education_safety/education/project_wet/waterways/ww_2.pdf | **CONFERE.** É um host de arquivos do DNR que respondeu 200. A página do FAQ (dnr.state.mn.us) deu 403 na estrutural, e não tentei de novo. O número é de 2010. A regra de contagem (10 acres, 2,5 em área urbana) só vi em resumo de busca: NÃO CONFERIDA |
| F2 | "Most of the natural lakes are located within the limit of continental glaciation". Nas áreas sem gelo (a Driftless Area) "or in glacial terrain remnants from the earliest part of the Ice Age, such as southern Illinois, artificial impoundments, such as farm ponds and reservoirs, are abundant". No oeste de Indiana há "few natural lakes". | NALMS, LakeLine, inverno de 2012 (Brown, Luman, Shilts): https://www.nalms.org/wp-content/uploads/2018/09/32-4-7.pdf (cópia em `_trabalho/r2/`) | **CONFERE**, no âmbito dos estados dos Grandes Lagos. O próprio texto já diz que o gelo **antigo** não deixou lagos |
| F3 | O Kansas foi coberto por "at least two of the eight or nine glaciers". O segundo "reached farther into the state about 600,000 years ago" e foi "at least slightly south of Topeka and Lawrence". | Kansas Geological Survey (GeoKansas): https://geokansas.ku.edu/glaciated-region | **CONFERE.** O gelo foi bem além da linha dos lagos |
| F4 | "Caddo Lake … is the only natural lake in Texas with storage capacity of 5,000 acre-feet or greater". Uma empresa privada fez uma barragem em 1914, e o Corpo de Engenheiros (USACE) a refez em 1968–1971. O inventário do TWDB tem "188 major water supply reservoirs and 20 other major reservoirs". A maioria foi feita "during the 1940s through 1980s". Havia "35 major reservoirs in operation in 1935" e 187 em 1985. Os modelos de água do estado simulam mais de 3.400 represas, e há ~2.000 barragens de contenção de cheia do NRCS. | Wurbs, R. A. (02/2021), *Texas Water Journal* 12(1), revisado por pares, DOI 10.21423/twj.v12i1.7106: https://wrap.engr.tamu.edu/wp-content/uploads/sites/84/2021/02/RiverFlowsReservoirs.pdf | **CONFERE.** "Close to two hundred big lakes" vale: ~208 com 5.000 acre-pés ou mais |
| F5 | "Lake Caddo is one of Texas' few non-oxbow natural lakes and is the 2nd largest natural lake in the South". Barragem "constructed by the Gulf Refining Corporation near Mooringsport, Louisiana in 1914", substituída pelo Corpo de Engenheiros (obras de 07/08/1968 a 18/06/1971). | TWDB: https://www.twdb.texas.gov/surfacewater/rivers/reservoirs/caddo/index.asp | **CONFERE** |
| F6 | "Texas has only one natural lake: Caddo Lake". "196 major reservoirs". | Texas Comptroller, dados de água de 2022 (página sem data): https://comptroller.texas.gov/economy/economic-data/water/2022/surface.php | **CONFERE** que o órgão diz isso, mas **contradiz F4 e F5**. O "only one" é mito oficial: o certo é "the only big one" |
| F7 | "Approximately 19,300 playas are found in the Texas High Plains, giving us the highest density of playas in North America". Playas são "shallow, circular-shaped wetlands that are primarily filled by rainfall". | TPWD (página sem data): https://tpwd.texas.gov/landwater/land/habitats/high_plains/wetlands/playa.phtml | **CONFERE.** O Texas tem dezenas de milhares de bacias naturais rasas: "Texas has no natural lakes" é falso, e "no natural big lakes" é verdade |
| F8 | A LAGOS-US RESERVOIR classifica os 137.465 lagos de 4 ha ou mais dos 48 estados: 73.053 naturais, 61.042 represas A e 3.370 represas B. "> 46% of lakes ≥4 ha in the conterminous U.S. are reservoir lakes". O modelo NE "includes lakes that were predominantly glaciated". A Fig. 1 já mapeia natural contra represa no país inteiro. | Rodriguez et al. (2023), *Limnology and Oceanography Letters* 8(2): 267–285, doi 10.1002/lol2.10299. Manuscrito aceito: https://par.nsf.gov/servlets/purl/10465372 | **CONFERE.** O mapa "natural × represa" dos EUA já foi publicado (no meio acadêmico, não no YouTube) |
| F9 | Água interior (perene): Texas 5.616 mi², Minnesota 4.763 mi² (sem o lago Superior, 2.546), Flórida 5.027, Iowa 416, Missouri 965. | Census, State Area Measurements (limites de 2010, página revista em 16/12/2021): https://www.census.gov/geographies/reference-files/2010/geo/state-area.html | **CONFERE** o número. **NÃO CONFERIDO** se as baías do litoral do Texas entram como "inland" (a água costeira do Texas é só 401 mi²). Não serve de gancho sem isso |
| F10 | A nossa medida no NHD (§4) | NHD da USGS (domínio público), serviço National Map | **MEDIDO (preliminar)** |
| F11 | A linha do último gelo como uma linha oficial única (o mapa de limites glaciais da USGS) | pubs.usgs.gov deu 403 na estrutural. A linha do National Atlas (King e Beikman, 2005, domínio público) está no acervo de Stanford, e não a baixei. As isócronas de Dalton et al. (2020) têm shapefile | **NÃO CONFERIDO** |
| F12 | Quantos dos lagos da Flórida são naturais | Não achei fonte primária. O NHD dá 10.393 LakePond de 10 acres ou mais, com cavas de mineração e lagoas de retenção juntas | **NÃO CONFERIDO** |

**O paradoxo é verdadeiro?** Nas duas pontas, sim: Minnesota tem 11.842 lagos de 10 acres ou mais, quase todos feitos pelo gelo, e dos ~200
grandes lagos do Texas a natureza fez um, que tem barragem desde 1914. **No meio, não.** "On a map of America's natural lakes, they stop along a
single line" é forte demais:
- a Flórida tem milhares de lagos de carste, abaixo de qualquer linha de gelo;
- o Texas tem 19.300 playas e lagos de meandro abandonado;
- o oeste tem lagos de montanha e de falha (Tahoe, Crater Lake);
- dentro da linha, os till plains do Ohio, de Indiana, de Illinois e do Iowa, cobertos pelo último gelo, têm poucos lagos (§4);
- e o gelo de antes passou da linha e não deixou lago (F2, F3).

**As frases verdadeiras:**
- "Minnesota has 11,842 lakes of ten acres or more, almost all made by glaciers. Of Texas's roughly two hundred big lakes, nature made one."
- "The Ice Age glaciers reached Kansas and southern Illinois too. They just left so long ago that their lakes are gone."

## 2. A colisão

vidIQ, 6 chamadas (2 `keyword_research` e 4 `youtube_search`, 5 créditos cada: **30 créditos**). As linhas estão em
`_trabalho/cetico-minnesota-lagos/vidiq-buscas.tsv`, e 5 páginas /watch foram lidas, uma por vez, em `watch.jsonl`. As views são da hora da busca
(17/11/2026, ~22h10).

As buscas:
- s1: "why does minnesota have so many lakes", por relevância, sem data;
- s2: "why texas has only one natural lake", por views, sem data;
- s3: o ângulo inteiro ("why the south has no natural lakes glaciers ice age line map"), por relevância, nos últimos 12 meses. Só trouxe ruído:
  Sundaland, Missoula, Doggerland;
- s4: "Why Minnesota Has 10,000 Lakes", por views, nos últimos 12 meses.

**Os 5 mais próximos:**

| Título | Canal | Inscritos | Views | Data | Duração |
|---|---|---|---|---|---|
| **Why Minnesota Has 10,000 Lakes And Iowa Has Almost None** (conferido na /watch: "The answer starts with the last Ice Age… the glaciers that carved thousands of lakes across Minnesota and skipped almost all of Iowa") | Land & Consequence | 630 | 783 | **05/11/2026** | 14:01 |
| **Every Big Lake in Texas Is Man-Made… Except One. Why?** (conferido na /watch: "the ice sheets never came this far south, the rivers drain everything to the Gulf, and the sun takes the rest"; nas fontes, o NALMS de 2012, o HydroLAKES, as playas, o limite do gelo e a Driftless "schematic") | Whereology | 146 | 548 | **19/10/2026** | 20:54 |
| The Science Behind Minnesota's 10,000 Lakes (só Minnesota: kettles, o último máximo glacial) | GeologyHub | 402 mil | 23.287 | 26/07/2024 | 4:10 |
| How Agates Form, Why Minnesota Lakes Have So Many, & Where To Look For Them! (conferido; nota de estouro do vidIQ 9,1x) | GEO GIRL | 144 mil | 134.987 | 07/09/2025 | 8:53 |
| Minnesota's Lakes Are Hiding Something Nobody Talks About (lista de 50 fatos, "closer to 14,000"; conferido; estouro de 0,5x, ou seja, abaixo do normal do canal) | Across The Globe | 309 mil | 166.184 | 27/05/2026 | 36:11 |

Outros que pesam:
- "Why Canada Has So Many Lakes: The HIDDEN Ice Age Reason" (Atlas Signals, 5 inscritos, 15/11/2026, 7:56, 20 views; conferido): a mesma conta
  que a nossa medida (HydroLAKES), comparando com Minnesota;
- "Why 'Nobody' Lives In Northern And Western Minnesota" (Geography By Geoff, 1,13 mi inscritos, 11/12/2023, **3,32 mi** views): Minnesota e os
  seus 11 mil lagos, pelo lado da população;
- "Wisconsin Is America's Strangest Midwest State" (GeoLogic, 10/01/2026, 379.850) e "Why Minnesota Feels Like a Completely Different Country"
  (GeoLogic, 14/01/2026, 8.209), com o gelo e os lagos dentro;
- "Texas Has Exactly One Great Natural Lake…" (The Texas Unknown, 08/09/2026, curto, 2.169) e mais 4 curtos do "only natural lake" em 2026;
- "Is there only one natural lake in Texas?" (Dallas Morning News, 2018);
- "You won't believe which state actually has the most lakes" (Map Tales TV, 14/10/2026, curto, 1.306: "Maryland… the only state with zero
  natural lakes");
- uma reportagem da WPR, achada na busca da web e não lida, que daria o Texas como o estado com mais lagos. A trivia "o Texas tem mais lagos que
  Minnesota" já circula.

**Os 12 meses, por views ("Why Minnesota Has 10,000 Lakes"):** quase tudo é curto de quiz ("Land of 10,000 Lakes?", de 1 a 12 mil views) e lista
(Across The Globe, 166 mil; About The United States, 8,7 mil; Dark Waters, "Why The Land of 10,000", 3,8 mil).

**Colide?** Sim:
- no título: o molde "Why Minnesota Has 10,000 Lakes And [vizinho] …", de 12 dias atrás;
- no 3º ato inteiro: o Whereology, há 29 dias;
- no método da medida: o HydroLAKES do Atlas Signals, há 2 dias.

Os dois longos que colidem são de canais minúsculos e não andaram (783 e 548 views). Isso diz que o ângulo não puxou, não que está livre. Pela
lição do Atlântico, um título quase igual em inglês em 12 meses é risco de primeira linha. O que **não** achei em título nenhum: o gelo antigo que
foi até o Kansas e não deixou lago (§6).

## 3. O potencial, pela régua

| Régua | Leitura | Nota |
|---|---|---|
| 1. O nome é buscado | "minnesota lakes": abaixo de 750/mês, concorrência 20, overall 32 (vidIQ, EUA). "why does minnesota have so many lakes": abaixo de 750/mês. "texas lakes": não medido, por falta de crédito no teto. "Minnesota" e "Texas" são enormes, mas a frase do assunto é pequena | **Não** |
| 2. Prova recente de interesse | GEO GIRL, 135 mil (09/2025, fora dos 12 meses, 9,1x num canal de 144 mil, e o tema é ágata). A lista de 166 mil (05/2026) ficou abaixo do normal do canal. Os dois longos de canal pequeno no ângulo (11/2026 e 10/2026) não passaram de 800 views | **Fraca** |
| 3. O longo bem feito ainda não existe | A linha nacional, não existe. As duas metades, sim, em canais minúsculos, e a ciência de Minnesota no GeologyHub | **Parcial** |
| 4. O paradoxo em 3 frases e no mapa | Em 3 frases, sim. No mapa, só com uma classificação natural × represa e com as exceções escondidas (K3) | **Parcial** |
| 5. A geografia explica o porquê | Sim, inteira: o gelo cava e represa, os rios drenam, os lagos envelhecem e somem | **Sim** |
| 6. Uma medida nossa | Possível, mas o mapa natural × represa já foi publicado (F8), e o enxame já conta lagos com o HydroLAKES | **Parcial** |

**O enxame:** já chegou, e pelas duas pontas: o Texas em 19/10, Minnesota e o Iowa em 05/11, o Canadá em 15/11. Em 2026 também saíram 5 curtos do
"only natural lake in Texas" e uma dúzia de quizzes "Land of 10,000 Lakes".

**Sustenta 13 a 16 min calmos?** Sim, sobra assunto:
- os kettles, as morainas e o lago Agassiz;
- a Driftless Area;
- as potholes drenadas pela lavoura no Iowa;
- os dois gelos, o recente e o antigo do Kansas e do sul de Illinois;
- a Flórida como exceção de carste;
- as playas;
- a jangada do Red River e o Caddo;
- a seca de 1950–57 e a corrida às represas (35 grandes em 1935, 187 em 1985).

O problema não é encher: o 3º ato já existe em 20 minutos no Whereology, e o 1º no GeologyHub e no Land & Consequence.

## 4. A nossa medida

**É possível com dado aberto, mas a conta limpa não é rápida. Fiz uma preliminar, que mostra o defeito do mapa ingênuo.**

**O que fiz.** `nhd_por_estado.py` consulta a camada "Waterbody – Small Scale" do NHD (resolução média, 1:100k), no serviço da USGS National Map.
- É só estatística, sem baixar geometria: um pedido por estado, um por vez, com o User-Agent do canal.
- Conta os corpos d'água de 10 acres ou mais que tocam o contorno do estado (Census, 1:20M, 2024), agrupados pelo tipo do NHD.
- Nebraska, Louisiana e Arkansas deram tempo esgotado (504), duas vezes no caso de Nebraska, e ficaram de fora.

| Estado | Terra (mil km²) | LakePond | Reservoir | LakePond por 1.000 km² |
|---|---|---|---|---|
| Minnesota | 206 | 13.797 | 194 | **66,9** |
| Dakota do Norte | 179 | 12.039 | 87 | 67,4 |
| Wisconsin | 140 | 6.263 | 30 | 44,6 |
| Michigan | 147 | 6.507 | 91 | 44,4 |
| Indiana | 93 | 1.897 | 29 | 20,4 |
| Illinois | 144 | 2.715 | 78 | 18,9 |
| Ohio | 106 | 1.377 | 15 | 13,0 |
| Iowa | 145 | 1.271 | 62 | 8,8 |
| Missouri | 178 | 2.238 | 137 | 12,6 |
| Kansas | 212 | 2.112 | 41 | 10,0 |
| Oklahoma | 178 | 2.736 | 42 | 15,4 |
| **Texas** | 677 | **15.225** | **67** | **22,5** |
| **Flórida** | 139 | 10.393 | 103 | **74,8** |

**Perenes contra intermitentes**, em Minnesota e no Texas (`nhd-fcode-tx-mn.tsv`, pelo código FCODE do NHD):
- Minnesota tem **13.604** perenes (66,0 por 1.000 km²) e 182 intermitentes;
- o Texas tem **9.256** perenes (13,7 por 1.000 km²), **5.969** intermitentes (playas e tanques de gado, muito provavelmente) e 88 marcados como
  Playa.
- O número de manchete possível: **Minnesota tem 4,8 vezes mais lagos perenes por km² que o Texas.** Mas a conta do Texas soma represas,
  açudes e tanques.

**O que a medida mostra:**
1. **O NHD não separa represa de lago.** No Texas, 67 de 15.292 estão como "Reservoir", e no Missouri, que quase não tem lago natural, 2.238 estão
   como "LakePond". Um mapa feito direto do NHD pinta o Texas de azul (mais "lagos" que Minnesota, em número) e a Flórida mais azul que Minnesota.
   **A miniatura "os lagos param aqui" não sai do NHD.**
2. **Dentro do gelo, a densidade varia 5 a 7 vezes.** Minnesota, a Dakota do Norte (as potholes), o Wisconsin e o Michigan ficam entre 44 e 67;
   o Ohio, o Iowa, Illinois e Indiana, cobertos em boa parte pelo último gelo, ficam entre 9 e 20, abaixo do Texas. A "linha" no mapa não é a borda
   do gelo: é a borda do relevo jovem e acidentado e do escudo raspado, mais o que a lavoura drenou.
3. **A conta limpa** (natural × represa, ao norte e ao sul do último gelo) precisa de duas peças:
   - a LAGOS-US RESERVOIR (F8, CC BY 4.0). Não consegui os dados: o portal do EDI tem `Disallow: /` no robots.txt, a API PASTA respondeu "not
     authorized" ao acesso público (403; parei ali), e o Zenodo (registro 5584528) tem um zip de 285 MB do código, sem garantia de trazer a
     classificação;
   - o polígono do último gelo: as isócronas de Dalton et al. (2020) ou as linhas do National Atlas (F11).

   É trabalho de uma tarde, no research, não de cético.

## 5. O material

- **Mapa com geometria real:** sim.
  - O NHD (domínio público), a LAGOS-US (CC BY 4.0, se os dados vierem), as linhas glaciais do National Atlas (domínio público) e as isócronas
    de Dalton et al. (2020; licença a conferir).
  - As represas do Texas pelo inventário do TWDB, o relevo do 3DEP para os kettles e as morainas, e o Natural Earth.
- **Satélite aberto:** Landsat e Sentinel-2 dos lagos de Minnesota (a região de Brainerd, as Boundary Waters), das playas do Llano Estacado
  (redondas, na lavoura) e do Caddo.
- **Foto e vídeo de acervo livre**, contados pela API do Commons com 1 pedido (`commons-cats.tsv`):

  | Categoria | Arquivos | Subcategorias |
  |---|---|---|
  | Lakes of Minnesota | 223 | 19 |
  | Boundary Waters Canoe Area Wilderness | 65 | 13 |
  | Caddo Lake | 20 | 2 |
  | Great Raft | 42 | 0 |
  | Reservoirs in Texas | 73 | 58 |
  | Lake Travis | 45 | 4 |
  | Lake Texoma | 30 | 3 |
  | Driftless Area | 28 | 4 |
  | Moraines | 85 | 18 |
  | Glacial erratics in Minnesota | 23 | 1 |

  O Corpo de Engenheiros (DVIDS) tem as barragens.
- **Dado:** o TWDB (os níveis das represas), o Census (a água interior) e o KGS (o gelo no Kansas).

Dá para 13 a 16 min sem esticar.

## 6. O título e o gancho que eu defendo (se a Sala quiser salvar a pauta)

O título de trabalho está queimado pelo molde do Land & Consequence (05/11), e o lado do Texas pelo Whereology (19/10). O que sobra de nosso é o
**gelo antigo que não deixou lagos**: os lagos são passageiros, e só o gelo recente ainda tem os seus.

- **Título:** **Why the Ice Age Left Lakes in Minnesota but Not Missouri** (56 caracteres). Não achei título parecido.
  - Na régua 1, fica fraco: "minnesota lakes" está abaixo de 750/mês, e "missouri" não foi medido.
  - O fato do Missouri (o gelo antigo cobriu o norte do estado, e quase não há lago natural lá) é **a confirmar**: só li a parte do Kansas (F3) e
    a do sul de Illinois (F2).
- **Alternativa 1:** **Why the Ice Reached Kansas City but Left No Lakes** (49). O gelo de ~600 mil anos chegou a Topeka e a Lawrence (F3), e
  Kansas City é o nome buscado mais forte da linha antiga.
- **Alternativa 2:** **Why America's Lakes Stop Where the Last Ice Sheet Stopped** (57). Só vale com a conta da LAGOS e com a Flórida dita como
  exceção.
- **Gancho** (38 palavras, sem dar a resposta): "Minnesota has nearly twelve thousand lakes. Missouri, just to the south, has hardly any that nature made, yet
  Ice Age glaciers covered parts of both. So why did the ice leave lakes in one and not the other?"
- **Miniatura** (no estilo das referências):
  - o meio-oeste em relevo amarelo;
  - **em ciano**, os lagos naturais, densos em Minnesota;
  - **em vermelho**, a faixa que o gelo antigo cobriu e onde não há lago (o norte do Missouri, o sul do Iowa, o nordeste do Kansas), com a borda
    do último gelo em linha branca;
  - na caixa preta, **"ICE WAS HERE"**, com uma seta branca grossa para o vermelho (a B: **"NO LAKES"**).
- **Para o título de trabalho**, se a Sala insistir: "STOPS HERE" mente para quem conhece a Flórida (K3).

## 7. Os K

- **K1 — GRAVE. A colisão, nas duas metades e no método, em 30 dias.**
  - "Why Minnesota Has 10,000 Lakes And Iowa Has Almost None" (05/11/2026): mesmo molde, mesmas cinco primeiras palavras, mesmo porquê.
  - "Every Big Lake in Texas Is Man-Made… Except One. Why?" (19/10/2026): o 3º ato inteiro, com o limite do gelo e o NALMS.
  - "Why Canada Has So Many Lakes" (15/11/2026): a conta com o HydroLAKES.
  - Três no ângulo em 2026: a régua da estrutural derruba.
- **K2 — GRAVE. A busca não segura.** "minnesota lakes" e "why does minnesota have so many lakes" ficam abaixo de 750/mês (vidIQ, EUA), menos de
  6 % do "big sur". O pouco que há já está com GeologyHub (2024), GEO GIRL (2025) e Minnesota PBS. A régua 1 falha, e o Big Sur viveu dela.
- **K3 — GRAVE. O mapa não mostra a linha sem um classificador, e a linha não é uma só.**
  - No NHD, o Texas tem mais "lagos" de 10 acres que Minnesota (15.225 contra 13.797), e a Flórida é mais densa que Minnesota.
  - Dentro do último gelo, o Ohio e o Iowa ficam abaixo do Texas em lagos por km².
  - O gelo antigo foi até o Kansas sem deixar lago.
  - A frase "they stop along a single line" e a miniatura "STOPS HERE" exageram. O mapa que a sustentaria (natural × represa) já foi publicado
    (LAGOS-US RESERVOIR, 2023), e os dados dele não vieram (EDI: robots.txt e 403).
- **K4 — MÉDIO. O "only one" e o "built its own".**
  - O Comptroller diz "only one natural lake", o TWDB diz "one of Texas' few non-oxbow natural lakes", e o Wurbs diz o "only natural lake … with
    storage capacity of 5,000 acre-feet or greater".
  - O Texas tem 19.300 playas (TPWD), e o Caddo tem barragem desde 1914.
  - A frase verdadeira: "of Texas's roughly two hundred big lakes, nature made one."
- **K5 — MÉDIO. "The ice stopped at a line" é falso como dito.** O gelo passou da linha dos lagos (Kansas há ~600 mil anos, F3; o sul de
  Illinois, F2). O gancho tem de dizer "the last ice sheet". Este K é também a melhor geografia da pauta (§6).
- **K6 — LEVE. Lago de novo.** O vídeo 7 (o Arrow, "a lake kept empty") saiu hoje. O 8 sobre lagos repete o objeto, não o esqueleto.
- **K7 — LEVE. Pendências de fonte.**
  - O FAQ do DNR (403 na estrutural; li o PDF de 2010 de outro host do DNR, que respondeu 200: a Sala julga se isso basta);
  - o limite glacial da USGS (pubs.usgs.gov, 403);
  - a contagem natural da Flórida e o Missouri sem lago natural (NÃO CONFERIDOS);
  - o "inland water" do Census para as baías do Texas.

## 8. Créditos e limites

- **vidIQ:** 2 `keyword_research` e 4 `youtube_search`, de 5 créditos cada: **30 créditos**. O saldo foi de 5.351, antes, a 5.316, depois. A
  diferença maior vem de outros agentes rodando ao mesmo tempo.
- **Lido:**
  - 5 páginas /watch, uma por vez;
  - as páginas do TWDB (2), do Comptroller, do TPWD, do Census, do KGS e da NSF-PAR;
  - 3 PDFs, com o texto pelo PyMuPDF: o DNR, o Wurbs e a LAGOS;
  - o NALMS, já baixado na estrutural;
  - o serviço do NHD: 2 leituras de esquema e 21 consultas de estatística, uma por vez (5 com tempo esgotado);
  - os limites estaduais do Census (1 arquivo) e a API do Commons (1 pedido).
- **Recusaram, e não contornei:**
  - o portal do EDI (`Disallow: /` no robots.txt; não abri);
  - a API PASTA do EDI ("not authorized" para o acesso público, 5 pedidos; parei);
  - o PDF do Illinois State Geological Survey, que estourou o tempo e foi apagado sem leitura.
- **Um tropeço meu:** 1 pedido a `zenodo.org/api/records/5584528` no mesmo comando que leu o robots.txt do Zenodo, que veta `/api` (e libera
  `/api/records/*/files`). Usei só o título, a licença e o tamanho do arquivo, apaguei a resposta e não pedi mais nada lá.
- Nenhum navegador, nenhum crédito pago além do vidIQ, nenhum commit. Nada acima de 5 MB ficou em `out/`.
