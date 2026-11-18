# Cético: `mississippi-divisas` ("Why the Mississippi River No Longer Matches Its State Lines"), 17/11/2026

**Veredito: DERRUBADO. Nota: 4,5 / 10.**

O paradoxo é verdadeiro e se vê no mapa. A medida nossa existe e é boa (§4): sobre o mapa do Censo, **78 pedaços de 10 estados**
(de 25 acres ou mais) ficam do outro lado do leito de hoje. Somam **454 mi² de terra**, mais que a cidade de Nova York, e têm **79
moradores**. Mas a pauta cai pela régua (3) e pelo enxame, não pelo fato:
- **o gancho já foi ao ar com público.** "Why the Mississippi River Is Not What You Think" (Fact Atlas, 27,9 mil inscritos, 15/10/2026,
  **156.723 views**, 18:33) abre a descrição com o nosso paradoxo ("Dozens of pieces of Arkansas sit on the wrong side of the
  Mississippi River … Illinois's first capital now sits west of the river") e tem um capítulo inteiro sobre isso ("Stranded States").
  E o "10 Really Weird State Borders" do Geography By Geoff (25/03/2025, **949.687**) tem "The Mississippi River's exclaves" como
  item 5. Os dois ocupam a busca "mississippi river" + divisa;
- **o enxame já chegou, não está chegando.** De 01/09 a 17/11/2026, saíram pelo menos 9 vídeos longos de canais minúsculos sobre o
  ângulo: o mecanismo inteiro (acreção × avulsão), Kaskaskia ou Carter Lake. Dois deles saíram no domingo, 15/11. Vieram também mais
  de 20 curtos sobre Kaskaskia, o Kentucky Bend e Carter Lake (o do Map Origins, de 13/11, a 226 views por hora);
- **as caudas longas estão tomadas**: a busca "kaskaskia illinois" devolve 30 vídeos, e 8 deles são curtos de 17/10 a 16/11.

O que sobra nosso é a conta do rio inteiro e o papel dos cortes do Exército nos anos 1930. Isso dá um bom segmento ou um curto,
não o vídeo 8. Se a Sala quiser manter assim mesmo, o caminho está no fim (§6 e K1).

Lido entre ~22h05 e ~22h45 de 17/11/2026 (hora de Brasília). Os scripts, as respostas do vidIQ e as saídas estão em
`out/_pautas/video-8/_trabalho/cetico-mississippi-divisas/`; os dados brutos grandes (os polígonos dos estados, a linha do rio, as
faces e dois PDFs) em `midia/_pautas/video-8/cetico-mississippi-divisas/` (fora do git, 11 MB).

## 1. Os fatos que seguram o paradoxo e o gancho

| # | Fato | Fonte (lida em 17/11/2026) | Veredito |
|---|---|---|---|
| F1 | O tratado de 1783 põe a fronteira "along the middle of the said river Mississippi until it shall intersect the northernmost part of the thirty-first degree of north latitude" (art. 2), e a navegação "shall forever remain free and open" (art. 8). | Tratado de Paris, Avalon Project (Yale): https://avalon.law.yale.edu/18th_century/paris.asp | **CONFERE** |
| F2 | O rio é divisa de 10 estados (9 pares: MN-WI, IA-WI, IA-IL, MO-IL, MO-KY, MO-TN, AR-TN, AR-MS, LA-MS). | Medido nos polígonos do Censo 2020 (TIGERweb, camada 80): os 9 pares têm linha comum, e todas correm pelo rio (de 110,6 km, MO-TN, a 1.016 km, LA-MS; os totais contam também os trechos fora do Mississippi, como o St. Croix e o Pearl; `medir_pedacos.py`). A página "River Facts" da NPS (nps.gov/miss/riverfacts.htm) **não** diz o número de estados. | **CONFERE** pelo dado. Para a tela, "forms part of the border of ten states". |
| F3 | A divisa entre Iowa e Illinois é "the middle of the main navigable channel of the Mississippi river", e não o meio do rio, por "equality in the right of navigation". | *Iowa v. Illinois*, 147 U.S. 1 (03/01/1893), LII: https://www.law.cornell.edu/supremecourt/text/147/1 | **CONFERE** |
| F4 | A regra: na acreção, "Accretion, no matter to which side it adds ground, leaves the boundary still the center of the channel"; na avulsão, "Avulsion has no effect on boundary, but leaves it in the center of the old channel". O caso: em 1877 o Missouri, "above Omaha", "suddenly cut through the neck of the bow", e a linha "became a fixed and unvarying boundary". | *Nebraska v. Iowa*, 143 U.S. 359 (29/02/1892), LII: https://www.law.cornell.edu/supremecourt/text/143/359 | **CONFERE**. É o rio Missouri, não o Mississippi, e a decisão não nomeia Carter Lake. |
| F5 | No Mississippi: em 07/03/1876 o rio, "suddenly and with great violence, within about thirty hours", abriu o Centennial Cut-Off; a velha volta tinha "fifteen to twenty miles"; a terra separada do Tennessee se chama "Centennial Island"; a divisa "remains in the middle of the old channel". | *Arkansas v. Tennessee*, 246 U.S. 158 (04/03/1918), LII: https://www.law.cornell.edu/supremecourt/text/246/158 | **CONFERE** |
| F6 | Kaskaskia: em 1881, "an avulsionary breakthrough made eastward, over a distance of some 400-500 feet, across into the bed of the Kaskaskia River"; o canal velho "remained running stream until 1907". O decreto de 22/06/1970 confirma "Kaskaskia Island" e "Beaver Island" para Illinois, e "Cottonwoods" e "Roth Island" para o Missouri. | Relatório do Special Master (Harvey M. Johnsen), *Illinois v. Missouri*, No. 18 Original, protocolado em 02/03/1970: https://www.supremecourt.gov/pdfs/recordsandbriefs/1000248374/1000248374_009.pdf (cópia em `midia/…/scotus-1000248374_009.pdf`, sha256 `e62625cc…5fae1bef`); o decreto, 399 U.S. 146, LII: https://www.law.cornell.edu/supremecourt/text/399/146 | **CONFERE**. Ressalva: o "the river moved overnight" do enxame é exagero; o próprio relatório fala do rompimento de 1881 e de "the continued cutting of a resulting bank for a number of years thereafter". |
| F7 | A vila de Kaskaskia tem **21 moradores** (Censo 2020); o distrito (Kaskaskia precinct, condado de Randolph) tem 31 moradores e 23,9 mi² de terra. | TIGERweb Census 2020, camadas 26 e 20 (`censo_kaskaskia.py`, `censo_lugares.py`, `censo-lugares.json`) | **CONFERE** |
| F8 | O Kentucky Bend: o marco 1859 diz "Kentucky claimed land to the westernmost middle of Mississippi River-to this bend" e que a disputa durou "until the Cox-Peebles survey, 1858-59". O CCD Kentucky Bend tem **9 moradores** (2020), 17,45 mi² de terra e 9,43 mi² de água (os "27 mi²" que circulam somam a água). | Kentucky Historical Society, marco 1859: https://history.ky.gov/markers/madrid-bend; TIGERweb 2020, camada 20 | **CONFERE**. **É outro mecanismo** (§4): o pedaço fica do mesmo lado do rio que o resto do Kentucky; quem o isola é a linha reta KY-TN cruzando um laço duplo, não um rio que pulou. Na nossa conta ele dá zero, porque ali o rio e a divisa coincidem. O ano da linha (1819) não foi lido na primária. |
| F9 | Wolf Island: ilha de ~15.000 acres "about twenty miles below the mouth of the Ohio"; o Missouri perdeu ("the State of Missouri has no just claim"), porque o canal principal corria a oeste dela até 1820 e depois virou para leste; "the channel which the river abandoned remains, as before, the boundary". | *Missouri v. Kentucky*, 78 U.S. 395 (dez. 1870), LII: https://www.law.cornell.edu/supremecourt/text/78/395 | **CONFERE** (pela leitura do resumo da página; a data exata da decisão não está nela). Na nossa conta, é o maior pedaço do Kentucky (§4). |
| F10 | **O corte feito pelo homem também congela a divisa**: o Giles Bend Cutoff, dos anos 1930, "captured the main flow", e "The cutoff, being man-made and effectuating a channel change, obviously, was avulsive." | *Louisiana v. Mississippi*, 466 U.S. 96 (02/04/1984), LII: https://www.law.cornell.edu/supremecourt/text/466/96 | **CONFERE**. É o fato que mais muda o vídeo: parte dos pedaços foi deixada pelos cortes do Corpo de Engenheiros, não pela natureza. |
| F11 | A briga continua no século XX: Luna Bar "was formed by accretion" e ficou com o Mississippi (1974); em 1985, a divisa em Walnut Bend segue "the dead thalweg of the Mississippi River as it existed when the River's flow ceased" (o corte de Bordeaux Chute, "in or about 1874" a "1883", chamado de "avulsive"). | *Mississippi v. Arkansas*, 415 U.S. 289 (26/02/1974), LII: https://www.law.cornell.edu/supremecourt/text/415/289; *Arkansas v. Mississippi*, 471 U.S. 377 (29/04/1985), LII: https://www.law.cornell.edu/supremecourt/text/471/377 | **CONFERE** |
| F12 | Os cortes do Corpo de Engenheiros: de 14 a 16 cortes entre 1929 e 1942 (o programa aprovado em 1932), que encurtaram o baixo Mississippi em 132, 150, 152 ou 170 milhas, conforme a fonte e o trecho. | Só por resumos da busca (ASCE, ENR, folhetos da MVD). As duas páginas de história do Corpo (mvk.usace.army.mil/About/History e mvd.usace.army.mil/…/MRC/History) deram **403**, e não foram contornadas. | **NÃO CONFERIDO**: os números divergem. A Sala lê no navegador do app. |
| F13 | Os mapas de Harold Fisk (1944, para a Mississippi River Commission) são de domínio público. | The Public Domain Review (secundária, lida pelo gerador). A ficha do USGS NGMDB (ngmdb.usgs.gov/Prodesc/proddesc_70640.htm) deu **403**, e não foi contornada; o PDF da LSU passou de 10 MB e não foi lido. | **NÃO CONFERIDO** na primária. |
| F14 | O mapa do Censo não é a lei: "The boundary information in the TIGER/Line Shapefiles is for statistical data collection and tabulation purposes only … not legal land descriptions." | Census, TIGER/Line 2026 Technical Documentation, cap. 1: https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2026/TGRSHP2026_TechDoc_Ch1.pdf | **CONFERE**. Vale para a nossa medida (K3). |
| F15 | Davis Island (o maior pedaço da conta, §4): o corte de 1867 fez da Davis Bend uma ilha; ela é quase toda do condado de Warren (MS), e o xerife chega a ela de barco ou pela Louisiana. | Só pela busca (Vicksburg Post, Wikipedia). | **NÃO CONFERIDO** na primária. O pedaço existe no dado (§4). |

**A palavra forte demais:**
- "**No Longer** Matches" é verdade, mas o gancho do gerador ("in place after place, the state line wanders off into the fields")
  é a frase exata; o "whole pieces of one state sit across the river" também. Nenhuma das duas exagera.
- O enxame diz que o Kentucky Bend existe "because the Mississippi River slowly changed course over time" (Geo Fact Explorer,
  31/01/2026, 10,8 mil): é falso (F8). O vídeo não pode pôr o Kentucky Bend no mesmo saco.
- "Overnight" (Kaskaskia) é exagero; "in about thirty hours" (Centennial, 1876) é o caso que a Suprema Corte descreveu assim.

## 2. A colisão (vidIQ, 30 créditos)

Saldo antes 5.316, depois 5.286: foram 1 `keyword_research` e 5 `youtube_search`, 5 créditos cada (`vidiq-gasto.tsv`). As respostas
estão em `v1-…` a `v5-….tsv` (e os JSON de três delas). Datas e views dos 6 mais próximos relidos na página pública `/watch`, um
pedido por vez (`watch.jsonl`).

| # | Título | Canal (inscritos) | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|
| 1 | Why the Mississippi River Is Not What You Think | Fact Atlas (27,9 mil) | **156.723** | 15/10/2026 | 18:33 | **Sim, no gancho.** A descrição abre com os pedaços do Arkansas do lado errado e com Kaskaskia; capítulo "Stranded States" ("How sudden river jumps created bizarre anomalies like the Kentucky Bend and Kaskaskia"). Outlier de 6,45x. Ocupa "mississippi river". |
| 2 | 10 Really Weird State Borders And Why They Exist | Geography By Geoff (1,13 mi) | **949.687** | 25/03/2025 | 16:27 | **No ângulo, como item** (5º de 10: "The Mississippi River's exclaves"). O 1º por views em "mississippi river state border". |
| 3 | The Bizarre Geography of The Mississippi River \| 4K | Hidden on Earth (12,4 mil) | 9.724 | 21/09/2026 | 14:54 | Como item (1 de 30: "stranded a town on the wrong side of a state line"). |
| 4 | When a Moving River Does—and Doesn't—Move the Border | Atlas Friction (6) | 85 | 03/09/2026 | 13:07 | **No ângulo inteiro** (acreção, erosão e avulsão; Carter Lake; Kaskaskia; "Modern GIS brings these anomalies into sharper…"). Canal sem público. |
| 5 | The River That Moves America's Border | Drawn Earth (0) | 1 | 15/11/2026 | 8:00 | **No ângulo inteiro** (as duas regras; Centennial Island e *Arkansas v. Tennessee*; *Nebraska v. Iowa*; Kaskaskia). Publicado anteontem. |

Os outros do ângulo, todos de 2026:
- **longos**:
  - "The River Moved. Kaskaskia, Illinois Paid for It." (Bare Earth Atlas, 66 inscritos, 27/09, 142, 15:49): usa o TIGERweb, o NHD e o
    lidar do USGS, o nosso método;
  - "Why Iowa Has a Town You Can Only Drive to Through Nebraska" (o mesmo canal, 08/10, 72, 16:35);
  - "Mississippi: The River That Keeps Changing Course" (The Shape of Why, 13, 05/10, 98, 12:43): com os mapas de Fisk;
  - "The Illinois Town on the Wrong Side of the Mississippi | Kaskaskia" (America Off the Atlas, 1, 15/11, 3, 15:49);
  - "Why Nobody Wants to Live in Kaskaskia, Illinois" (American Past, 75, 06/09, 201, 30:58);
  - "Carter Lake: The Iowa City Trapped Inside Nebraska" (UPB Media, 20/10, 8:25) e "The Iowa City You Can Only Reach Through
    Nebraska" (Terrain Decides, 01/09, 5:21);
  - como capítulo: "Why Kentucky Is the Most Important State Nobody Talks About" (The Invisible Map, 13,9 mil, 09/09, **102.324**: "the
    Frozen 1792 Border" e o Kentucky Bend);
- **curtos**:
  - Kaskaskia, 8 de 17/10 a 16/11 (de 727 a 2.366 views; "This Illinois Town Is On The Wrong Side Of The Mississippi" duas vezes, em
    17/10 e 09/11);
  - o Kentucky Bend, 6 de 13/10 a 17/11 (o do Geo Solved, 49.155; o do Map Origins, 26.286 em 4 dias);
  - Carter Lake, 9 de jul. a nov.;
  - "Why Does This U.S. Border Follow a River?" (15/09, 1.150).

**O que ocupa a busca pelo nome**: "mississippi river" por views traz o FactSpark (902 mil, 2022), o Geoff (950 mil e 795 mil) e o
Fact Atlas (157 mil). O "Why the US Gov Reshapes the Mississippi River" (Half as Interesting, 2023, **1,07 mi**) ocupa o lado da
engenharia.

**Conclusão**:
- O título de trabalho não é igual a nenhum, e nenhum título traz "state lines" com "Mississippi". Na forma, o risco é baixo.
- No ângulo e no gancho, o risco é **alto**: um vídeo de 157 mil views, de um mês atrás, abre com a nossa frase, e o ângulo saiu em
  pelo menos 9 vídeos longos em 11 semanas.
- A régua (3), "o vídeo longo bem feito ainda não existe, ou está com canal minúsculo", falha pela metade: existem os minúsculos (9)
  e o de canal médio que estourou (o Fact Atlas).

## 3. O potencial real, pela régua

1. **A busca**:
   - "mississippi river" tem ≈ **60.950** buscas/mês, com concorrência 55 (vidIQ, 17/11/2026; mercados: EUA 20 %, ET 15 %, IN 10 %).
     É 4,6 vezes o "big sur" (13,3 mil, 40), mas com mais disputa;
   - a intenção é larga (fatos, cruzeiro, notícia, geologia), e o pedaço dela que procura "border" ou "wrong side" já cai no Geoff e no
     Fact Atlas;
   - "kaskaskia", "kentucky bend" e "carter lake" não foram medidas (o teto acabou), mas cada uma tem dezenas de vídeos de 2026.

   O caminho da pesquisa, que deu certo no Big Sur, é improvável aqui.
2. **A prova de interesse existe, e é exatamente o problema**: o Fact Atlas (157 mil, 6,45x), o Kentucky Bend em curtos de 26 a 49 mil, o
   capítulo do The Invisible Map (102 mil). O interesse está provado porque outros já colheram.
3. **O lugar vago no vídeo longo**: só para a **contagem do rio inteiro**. Ninguém mostrou quantos pedaços existem e quanto somam. O
   Fact Atlas diz "dozens of pieces of Arkansas" sem número; os outros contam um caso (Kaskaskia, Carter Lake, Centennial).
4. **O paradoxo em 3 frases, e no mapa**: forte. O rio é a divisa de dez estados; desenhe a divisa sobre o rio de hoje e aparecem
   78 pedaços do lado errado, maiores que Nova York somados; e o rio não devolve a terra, porque a lei congela a linha quando ele
   pula.
5. **A geografia explica o porquê**: em parte. A física (meandros, cortes de laço, Fisk) explica de onde vêm os pedaços; a regra que os
   mantém é jurídica (F4). Os cortes do Exército nos anos 1930 (F10) são o elo bom entre as duas metades, e o enxame ainda não o usou.
6. **A medida nossa**: sim (§4).

- **O enxame**: já está no ângulo, e não esfria. Kaskaskia teve um longo em 27/09, oito curtos de 17/10 a 16/11 e outro longo em 15/11;
  o Kentucky Bend, seis curtos em cinco semanas; o mecanismo inteiro, dois longos no mesmo domingo (15/11). Em 3 ou 4 semanas de
  produção, conte com mais 2 a 4 longos e uma dúzia de curtos.
- **Os 13 a 16 minutos**: o assunto sustenta sem linguiça, e é rico até demais:
  1. o mapa: a contagem, o maior pedaço (Davis Island), Kaskaskia, Wolf Island, os campos do Arkansas e do Mississippi que
     se alternam entre Greenville e Natchez;
  2. o porquê: os meandros e os mapas de Fisk; a linha de 1783 "along the middle"; o talvegue (1893); a acreção e a avulsão (1892);
     o Centennial Cut-Off em 30 horas (1876, decidido em 1918); Kaskaskia em 1881; o Kentucky Bend como a exceção que não é do rio;
  3. o Exército endireita o rio nos anos 1930, cada corte é "obviously avulsive" (1984), as linhas ficam nas voltas mortas, e os
     processos seguem até 1985; hoje, os diques e os revestimentos seguram o rio, e os pedaços ficam para sempre.

  O problema não é encher: é que 2/3 disso já foram ditos em 2026.

## 4. A nossa versão: a medida (conta preliminar, feita)

**O método** (scripts em `_trabalho/cetico-mississippi-divisas/`):
1. **As divisas**: os polígonos dos 10 estados do Censo 2020, em resolução cheia (TIGERweb, camada 80; `baixar_estados.py`; o
   `teste_resolucao.py` mostrou que pedir com generalização de 3 m tirava 3/4 dos vértices, e não se usou). Dos 9 pares que o rio
   separa, tira-se a linha comum.
2. **O leito de hoje**: a linha do canal principal no OSM (relação 1756854, papel `main_stream`, dados de 18/11/2026 01:17 UTC;
   `osm_rio.py`). Ela tem duas falhas pequenas (as eclusas 3 e 8), fechadas no script.
3. **As faces**: as duas linhas juntas viram polígonos (`medir_pedacos.py`). Cada face fechada entre a divisa e o rio é território de
   um estado do outro lado do rio de hoje. São 1.571 faces; 135 têm 0,5 km² ou mais, e somam 1.634 km² de terra e água.
4. **A terra e a gente**: para cada face de 0,5 km² ou mais, os blocos do Censo 2020 do estado dono, cujo ponto interno cai na face
   (`medir_blocos.py`, 137 pedidos, um por vez). Somam-se a terra (AREALAND), a gente (POP100) e as moradias (HU100).
5. **Presa ou ilha**: nos 20 maiores, 15 pontos ao longo do trecho de divisa (fora do rio) vão ao Censo, e se lê se caem em bloco de
   terra ou de água (`linha_na_terra.py`).

**O número** (`medida-resumo.md`, `medida.json`):

| Corte (terra do pedaço) | Pedaços | Terra | Moradores (2020) | Moradias |
|---|---|---|---|---|
| ≥ 0,1 km² (~25 acres) | **78** | 1.176 km² = **454 mi²** | **79** | 74 |
| ≥ 1 km² | 63 | 1.169 km² = 451 mi² | 74 | 66 |
| ≥ 1 mi² | 52 | 1.152 km² = 445 mi² | 44 | 34 |
| ≥ 10 km² | 34 | 1.052 km² = 406 mi² | 44 | 34 |

- **454 mi² é mais terra que a cidade de Nova York** (300,5 mi² de terra no Censo 2020; `censo_comparar.py`), e quase ninguém mora
  nela: 79 pessoas em 78 pedaços.
- **Todos os 10 estados têm pelo menos um pedaço do lado errado**, mas o miolo fica entre Memphis e o fim da divisa LA-MS (31° N):
  Mississippi, Arkansas, Tennessee e Louisiana somam 389 dos 454 mi² (86 %).

| Estado (dono) | Pedaços ≥ 25 acres | Terra (mi²) | Moradores |
|---|---|---|---|
| Mississippi | 19 | 168,2 | 0 |
| Arkansas | 13 | 89,8 | 0 |
| Tennessee | 9 | 76,6 | 13 |
| Louisiana | 10 | 54,1 | 0 |
| Illinois | 6 | 31,0 | 31 |
| Kentucky | 2 | 18,9 | 0 |
| Missouri | 8 | 10,9 | 0 |
| Iowa | 5 | 2,9 | 0 |
| Minnesota | 3 | 0,8 | 5 |
| Wisconsin | 3 | 0,7 | 30 |

**Os 10 maiores**, com o condado do ponto interno, e o que a linha faz nos 15 pontos:
1. **Mississippi, condado de Warren: 49,2 mi²** (32,18 N, 91,08 W), sem moradores. Pela posição e pelo condado, deve ser a área de
   Davis Island (F15, não conferido). Linha mista: 7 pontos em terra e 8 na água.
2. **Illinois, condado de Randolph: 23,9 mi², 31 moradores.** É Kaskaskia. A conta bate exatamente com o "Kaskaskia precinct" do
   Censo (61.961.353 m² de terra e 31 pessoas): o método achou a ilha sozinho. A linha está presa à margem de lá (12 de 15 em terra).
3. Tennessee, condado de Tipton: 23,3 mi², 13 moradores (a área de Reverie, que a busca dá como do Tennessee a oeste do rio; não
   foi conferida). Presa.
4. Louisiana, paróquia de East Carroll: 22,8 mi², a leste do rio. Presa (15 de 15).
5. Mississippi, condado de Issaquena: 17,9 mi². Presa.
6. Arkansas, condado de Chicot: 16,1 mi². Presa.
7. Arkansas, condado de Desha: 16,1 mi². Presa.
8. Arkansas, condado de Lee: 16,0 mi². Mista.
9. Tennessee, condado de Tipton: 15,8 mi². Presa.
10. Mississippi, condado de Adams: 15,2 mi². Presa.

Também: o 13º é o Kentucky, condado de Hickman, com 12,3 mi² (36,71 N, 89,17 W). É Wolf Island (F9), e a linha corre na água (10 de
15), num braço do rio. Dos 20 maiores, 13 estão presos à outra margem, 5 são mistos e 2 ficam além de um braço d'água
(`linha-na-terra.tsv`).

**O Kentucky Bend dá zero na conta, e está certo**: ali o rio e a divisa coincidem. O pedaço está do mesmo lado do rio que o resto
do Kentucky, e o isolamento vem da linha KY-TN que cruza um laço duplo (F8). Não é um pedaço "do lado errado".

**Contra o que o enxame diz**: o Fact Atlas abre com "Dozens of pieces of Arkansas sit on the wrong side of the Mississippi River,
reachable by land only through Tennessee". Pela nossa conta, o Arkansas tem 13 pedaços de 25 acres ou mais. Só 2 ficam no trecho do
Tennessee (ao norte de 35° N, com 8,8 km²); os outros 11 (86,4 mi²) encostam no estado do Mississippi. É um ponto a nosso favor, mas
não sustenta um vídeo.

**Os limites:**
- **A linha do Censo não é a linha da lei** (F14). Na tela, "on the Census Bureau's map of state lines"; nunca "legally".
- **A linha do OSM é o meio do rio, não o talvegue** (o canal de navegação, F3). Ela tem nós a cada ~390 m (mediana), e por isso
  sobram 1.400 lascas finas. Os pedaços pequenos dependem do corte; os grandes, não.
- **As faces de 0,25 a 0,5 km² não foram aos blocos** (por tempo); somam no máximo 21 km² de face.
- **No alto rio** (MN, WI e IA: 11 pedaços, 4,4 mi²), muitos pedaços são ilhas e remansos das piscinas das eclusas, não terra presa à
  outra margem. Entre eles, os 30 moradores do Wisconsin, numa ilha em La Crosse (43,81 N), não conferida.
- **"Presa ou ilha"** usou 15 pontos e o bloco do Censo; uma linha que corre na margem de um lago conta como terra.
- **Falta a conta que faria o vídeo**: quanto dos 454 mi² veio dos cortes do Corpo de Engenheiros de 1929 a 1942 (F10, F12), e
  quanto veio dos cortes naturais (1867, 1876, 1881). Ela pede a lista dos cortes com as posições (os relatórios do Corpo, que deram
  403) e meia hora de script.

## 5. O material

- **Mapa com geometria real**: as divisas do TIGERweb (estados, condados, CCDs e blocos), o canal do OSM ("© OpenStreetMap
  contributors"), o NHD do USGS para as águas, e os 3DEP/lidar do USGS para os leitos mortos. É mapa de sobra.
- **Os mapas de Fisk (1944)**, de domínio público pela Public Domain Review (a primária, NÃO CONFERIDA, F13). O enxame já os usou (The
  Shape of Why, 05/10).
- **Satélite aberto**: Landsat e Sentinel-2 (os leitos mortos e os lagos em ferradura se veem bem), NAIP (USDA, domínio público) nos
  pedaços grandes, e a NASA Earth Observatory tem cenas das cheias do Mississippi.
- **Foto e vídeo de acervo livre** (contagem da API do Commons, um pedido): "Reverie, Tennessee" tem 44 arquivos; "Old River Control
  Structure", 19; "Kaskaskia, Illinois", 12; "Kentucky Bend", 7; "Oxbow lakes of the Mississippi River", 6 (e 6 subcategorias). Wolf
  Island, Centennial Island e Davis Bend não têm categoria. Há mais na NARA (cheias e cortes do Corpo), no HABS (Kaskaskia) e na NOAA.
  É o bastante, com os mapas no centro, e de gente nos pedaços quase não há o que mostrar (§4: quase ninguém mora neles).

## 6. O título e o gancho que eu defendo (se a Sala mantiver a pauta)

- **Título: "Why 78 Pieces of States Are Stuck Across the Mississippi"** (56 caracteres).
  - Ele leva o nome buscado e um número que ninguém deu.
  - Foge do clichê do enxame ("Wrong Side", "The River Moved", "The Border Didn't").
  - Não foi buscado à parte no vidIQ (o teto acabou).
  - O número depende do corte (≥ 25 acres) e do mapa do Censo, e a descrição diz isso.
- **Alternativas**:
  1. "Why the Mississippi River No Longer Matches Its State Lines" (59): o do gerador, único na forma, mas genérico;
  2. "How the Army Froze the Mississippi's State Lines in Place" (57): só se a conta dos cortes (§4, o último limite) mostrar que eles
     deixaram boa parte dos 454 mi². É o único ângulo que o enxame não usou.
- **O gancho** (42 palavras): "The Mississippi River forms the border of ten states. Lay those borders over the river as it runs today,
  and they don't match: seventy-eight pieces of states sit on the wrong side of the water. Together, they're bigger than New York City."
- **A miniatura**:
  - o trecho de Greenville a Vicksburg, onde os pedaços se alternam (MS, AR e LA), em relevo amarelo;
  - o rio em azul;
  - **os pedaços do lado errado em vermelho**;
  - a divisa do Censo em branco tracejado, descolando da água;
  - **o maior (o de Warren, 49 mi², provavelmente Davis Island) num anel ciano**;
  - uma seta branca grossa do pedaço até o estado dono, do outro lado da água;
  - na caixa preta, **"78 PIECES"**; na B, **"WRONG STATE"**.
  - Sem o Kentucky Bend (é outro mecanismo) e sem Kaskaskia (fica longe do trecho, e é a imagem que o enxame gastou).

## 7. Os pontos

- **K1 · GRAVE: a colisão no gancho e o enxame já instalado.**
  - "Why the Mississippi River Is Not What You Think" (Fact Atlas, 15/10/2026, 156.723 views, 6,45x) abre a descrição com o nosso
    paradoxo e tem um capítulo dele.
  - O Geoff (949.687) tem "The Mississippi River's exclaves" entre os 10.
  - De 01/09 a 17/11/2026, saíram pelo menos 9 longos sobre o ângulo (o mecanismo, Kaskaskia ou Carter Lake; dois em 15/11) e mais de 20
    curtos sobre Kaskaskia, o Kentucky Bend e Carter Lake.

  É o caso do Atlântico, e pior: lá o problema foi o título; aqui é o ângulo, com um vídeo de público ocupando a busca. O que sobra
  nosso (a conta do rio inteiro e os cortes do Exército) não muda a miniatura que o espectador já viu nem a frase que ele já ouviu.
  **Caminho, se a Sala insistir:**
  - o vídeo vira "o Exército congelou as divisas", com a conta dos cortes feita antes de decidir (§4);
  - título e miniatura com o número;
  - nada de Kaskaskia nem de Kentucky Bend na embalagem.

  Mesmo assim, eu não poria isto como vídeo 8.
- **K2 · MÉDIO: a busca.** "mississippi river" tem ≈ 60.950 buscas/mês, mas com concorrência 55, e o pedaço "divisa" já cai no Geoff e
  no Fact Atlas. As caudas ("kaskaskia", "kentucky bend", "carter lake") têm dezenas de vídeos de 2026. O caminho da pesquisa do Big Sur é
  improvável.
- **K3 · MÉDIO: a medida vem de um mapa estatístico.**
  - O Censo diz que as linhas do TIGER "are not legal land descriptions" (F14), e a linha do rio é o meio do OSM, não o talvegue.
  - O 78 vale com o corte de 25 acres; com 1 mi², são 52.
  - Na tela: "on the Census Bureau's map", e o método na descrição. Antes do roteiro, conferir os 10 maiores contra as cartas do USGS ou
    os mapas de divisa dos estados.
- **K4 · MÉDIO: o porquê é metade tribunal.** A física explica a origem dos pedaços; a permanência é jurídica (F4, F5, F10, F11). Sem a
  conta dos cortes do Exército, o ato 2 vira aula de direito, e é a parte que o enxame já fez.
- **K5 · MÉDIO: não há gente.** São 79 moradores em 78 pedaços, e 31 deles em Kaskaskia, que está gasta.
  - A frase do gerador ("as fazendas que pagam imposto a um estado e votam do outro lado") não tem eleitor: 0 morador nos pedaços do
    MS, AR e LA.
  - O imposto não foi conferido.
  - O lado humano fica nos casos históricos (Davis Bend, Wolf Island).
- **K6 · MÉDIO: o Kentucky Bend é outro mecanismo**, e o enxame o vende como "o rio mudou" (F8). Ele fica fora da conta, da miniatura e
  do título. Se entrar, entra como a exceção: a linha reta que cruzou um laço duplo.
- **K7 · LEVE: o "dozens of pieces of Arkansas … only through Tennessee" do Fact Atlas está errado duas vezes.** São 13 pedaços de 25
  acres ou mais, e 11 deles encostam no Mississippi, não no Tennessee. Dá uma frase de correção, não um vídeo.
- **K8 · LEVE: três fontes primárias barradas ou não lidas.** Os cortes do Corpo (as duas páginas de usace.army.mil deram 403; F12), a
  ficha de Fisk no USGS (403; F13) e Davis Island (só jornal e Wikipedia; F15). Ficam para o navegador do app.
- **K9 · LEVE: o alto rio é ruído.** Os 11 pedaços de MN, WI e IA (4,4 mi²) são em boa parte ilhas e remansos das eclusas, e os 30
  moradores do Wisconsin estão numa ilha de La Crosse, não conferida. Separar na conta final.
