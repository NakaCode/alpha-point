# Laudo · verificador de fatos · textos de tela do Juneau

Objeto: `out/juneau/textos-tela.json`, sha256 `6b3174cd01a8d4440ba9c8df0913c5cb42ef5ab1dffc04874082b74ab4942343` (commit `71768f6`).
Quem: o `verificador-de-fatos`, na conversa "Juneau · verificador-de-fatos" (28/09/2026, Opus), só com as ferramentas do
cabeçalho dele (Bash, Read, WebSearch, WebFetch). Gravado pelo Claude central, sem edição, a partir da última mensagem da conversa.
O Claude central conferiu a tabela: 351 linhas, uma por item do denominador (26 C, 221 R, 76 K, 12 A, 16 X), cada uma com veredito.
Achados aplicados pelo Claude central: O1 (a nota do boletim de 1982 no `roteiro-editor.md`, f-052) e O3 (a frase da MapTiler, na
roupa do verificador e em outras seis roupas que diziam o mesmo).

---

COBERTURA: 351 de 351, com o denominador derivado de `out/juneau/textos-tela.json` inteiro (sha256 `6b3174cd01a8d4440ba9c8df0913c5cb42ef5ab1dffc04874082b74ab4942343`, commit `71768f6`)

NOTA: 9.5/10. Nenhuma afirmação de tela diverge da fonte. O meio ponto que falta é o que depende de data: os quatro voláteis, conferidos em 26/09, e os créditos, os lugares e os anos das fotos, lidos na origem em 27/09. Tudo isso se reconfere na véspera de publicar.

# Laudo de fatos da tela: Juneau, passo `screen_text`

**Como a lista foi derivada.** O canal não tem extrator para texto de tela. A lista saiu da estrutura do arquivo, lida com Python só para leitura, e foi completada à mão:

| parte | itens |
|---|---|
| `cards_pessoa`: 13 cards × 2 textos (nome e cargo) | 26 |
| `rotulos_dado`, com as 8 reaparições marcadas com `_herdado_de` | 221 |
| `_creditos` | 76 |
| `_avisos_de_ano` | 12 |
| **textos de tela** | **335** |
| afirmações que vão à tela sem texto próprio, lidas à mão nas `_nota` e em `nao_vai_para_tela`: número desenhado ou grifo sobre página original (X01–X16) | 16 |
| **total** | **351** |

- Ficam fora do denominador porque não vão à tela: `nao_vai_para_tela` (76), `glossario` (82, usado para conferir grafia), `_formas_de_serie`, `_creditos_regras`, `_avisos_regras` e `_sem_texto`.
- Resultado: **348 CONFIRMADA**, **3 NADA A CHECAR** (motivo gráfico sem afirmação: R072, R219 e R221), 0 DIVERGE, 0 REFUTADA, 0 NÃO ACHEI e 0 NÃO FOI CHECADO.
- **CHECADO E LIMPO.**

**O que não se reabriu:**
- o roteiro narrado (`fatos.laudo.md`, rodada 6, PASS);
- as decisões do Lucas de 28/09: o card de s57 e o crédito do Shutterstock;
- as três conferências de forma (`_tmp/textos-tela-conferencia-r1…r3.md`), que não foram usadas como placar.

**A rede nesta checagem:**
- 2 buscas (WebSearch): o mandato de Kiehl e o HB 3;
- 1 leitura da Wikipedia (Jesse Kiehl);
- 1 leitura do ADN de 27/05/2026, que caiu por ECONNRESET e não se repetiu. Nenhum item depende dela;
- nenhum site que recusa robô foi aberto: akleg.gov e elections.alaska.gov só pelas cópias locais e arquivadas.

**O boletim de 1982.** Para conferir o placar da Ballot Measure No. 8, as pp. 41–47 do boletim foram recortadas em imagem, só na pasta temporária da sessão, e apagadas em seguida.

## Fontes

A coluna URL da tabela usa estas chaves. As cópias `web.archive.org` são de página oficial do Estado do Alasca (CLAUDE.md, "A cópia arquivada…").

| chave | fonte | URL |
|---|---|---|
| B60 | Div. of Elections, Official Returns, primária de 9/8/1960, p. 9 | https://www.elections.alaska.gov/Core/Archive/60PRIM/60prim.pdf (web/20230413092030) |
| B62 | idem, geral de 6/11/1962, p. 41 | https://www.elections.alaska.gov/Core/Archive/62GENR/62genr.pdf (web/20230415072740) |
| B74 | idem, primária de 27/8/1974, p. 48 | https://www.elections.alaska.gov/Core/Archive/74PRIM/74prim.pdf (web/20230413124151) |
| B76 | idem, geral de 2/11/1976, p. viii | https://www.elections.alaska.gov/Core/Archive/76GENR/76genr.pdf (web/20170102052855) |
| B78 | idem, geral de 7/11/1978, pp. 50 e 62 | https://www.elections.alaska.gov/Core/Archive/78GENR/78genr.pdf (web/20161230084012) |
| B82 | idem, geral de 2/11/1982, pp. 41–47 | https://www.elections.alaska.gov/Core/Archive/82GENR/82genr.pdf (web/20161231052618) |
| B94 | resultado oficial de 8/11/1994 | https://www.elections.alaska.gov/Core/Archive/94GENR/result94.htm (web/20161230083819) |
| B02 | resultado oficial de 5/11/2002 | https://www.elections.alaska.gov/Core/Archive/02GENR/data/results.htm (web/20161230091138) |
| H26 | Initiative History (Rev 08/02/2021) | https://www.elections.alaska.gov/doc/forms/H26.pdf (web/20250920075110) |
| H29 | lista de medidas (Rev 03/10/2010) | http://www.elections.alaska.gov/doc/forms/H29.pdf (web/20100527092549) |
| P76 | Official Election Pamphlet 1976 | http://www.elections.alaska.gov/doc/oep/1976/1976-Ballot-Prop-Bond-Prop.pdf (web/20161230104844) |
| P78 | OEP 1978 | http://www.elections.alaska.gov/doc/oep/1978/1978-Ballot-Prop-Bond-Prop.pdf (web/20161230104800) |
| P82 | OEP 1982, Ballot Measure No. 8 | http://www.elections.alaska.gov/doc/oep/1982/1982-Bonding-Prop-Ballot-Measures.pdf (web/20170218020400) |
| P94 | OEP 1994, Ballot Measures No. 3 e No. 5 | http://www.elections.alaska.gov/doc/oep/1994/1994-Ballot-Measures.pdf (web/20161230104042) |
| P02 | OEP 2002 | http://www.elections.alaska.gov/doc/oep/2002/2002_oep_reg_1.pdf (web/20161230095704) |
| S00 | 31 Stat. 321 (6/6/1900) | https://www.govinfo.gov/content/pkg/STATUTE-31/pdf/STATUTE-31-Pg321.pdf |
| S12 | 37 Stat. 512 (24/8/1912) | https://www.govinfo.gov/content/pkg/STATUTE-37/pdf/STATUTE-37-Pg512.pdf |
| G06 | Report of the Governor of Alaska, 1906, p. 3 | https://archive.org/details/annualreportsofd19062unit |
| CBJ | City and Borough of Juneau, History of Juneau | https://juneau.org/community-development/history-of-juneau |
| POP | AKDOLWD, A History of Alaska Population Settlement (abril de 2013) | https://live.laborstats.alaska.gov/pop/estimates/pub/pophistory.pdf |
| BOU | Boucher v. Engstrom, 528 P.2d 456 (15/11/1974) | https://static.case.law/p2d/528/cases/0456-01.json |
| AG | Alaska Dept. of Law, parecer de 24/8/1993 | https://law.alaska.gov/pdf/opinions/opinions_1993/93-040_663940113.pdf |
| ADN | Reamer, ADN, 9/2/2026 | https://www.adn.com/alaska-life/2026/02/08/one-mans-pork-is-another-mans-pigskin-the-1982-question-of-whether-alaska-should-move-the-capital-or-buy-the-nfl/ |
| TR90 | Alaska Economic Trends, junho de 1990 | https://laborstats.alaska.gov/trends/jun90art1.pdf |
| AS | AS 44.06 (cópia local; vigência vista no navegador do app em 26/09) | https://www.akleg.gov/basis/statutes.asp?media=print&secStart=44.06.010&secEnd=44.06.990 |
| HB3 | HB 3, versão A | https://www.akleg.gov/PDF/34/Bills/HB0003A.PDF |
| HB3S | BASIS, status do HB 3 (navegador do app, 26/09/2026) | https://www.akleg.gov/basis/Bill/Detail/34?Root=HB%20%20%203 |
| VOL | registro dos voláteis | `roteiros/juneau/volateis-conferidos.md` |
| KT25 | KTOO, Larson, 13/6/2025 | https://www.ktoo.org/2025/06/13/why-is-the-state-capital-juneau-and-not-anchorage/ |
| KT17 | KTOO/CoastAlaska, 24/1/2017 (cópia local; a URL deu 403 em 27/09) | https://www.ktoo.org/2017/01/24/juneau-assembly-votes-6-3-support-road/ |
| FS | Final SEIS e Record of Decision, 2018 | https://dot.alaska.gov/juneauaccess/assets/2018_FSEIS_Figures/Full_Final_SEIS_-_Text_Only.pdf |
| CA9 | SEACC v. FHWA, 9º Circuito, 4/5/2011 | https://cdn.ca9.uscourts.gov/datastore/opinions/2011/05/04/09-35551.pdf |
| FR | 83 FR 36661 (30/7/2018) | https://www.govinfo.gov/content/pkg/FR-2018-07-30/pdf/2018-16263.pdf |
| DOR | Dept. of Revenue, ANS West Coast diário (série em `out/juneau/_dados/s54.json`, lida pelo Claude central no navegador do app em 28/09) | https://tax.alaska.gov/programs/oil/dailyoil/dailyoilold.aspx |
| NE | Natural Earth (camadas em `out/juneau/_media/geo/`, `pauta-geo.json`) | https://www.naturalearthdata.com/about/terms-of-use/ |
| OSMW / OSMH / OSMT / OSMA | OSM: Willow, Haines, Taku River, Alaska Highway | https://www.openstreetmap.org/node/150916708 · /node/150921918 · /relation/16167118 · /relation/326897 |
| GTI / GLC | USGS GNIS: Taku Inlet, Lynn Canal | https://edits.nationalmap.gov/apps/gaz-domestic/public/summary/1410576 · …/1423488 |
| TIG | TIGERweb, GEOID 02170 | https://tigerweb.geo.census.gov/arcgis/rest/services/Generalized_ACS2025/State_County/MapServer/11 |
| WIK | Jesse Kiehl (lida em 28/09/2026) | https://en.wikipedia.org/wiki/Jesse_Kiehl |
| MT | crédito da MapTiler (identidade §6; `canal.json` › `mapa.perfil`) | https://www.maptiler.com/copyright/ |
| SS | linha do Shutterstock (`midia.md` §3.4) | https://www.shutterstock.com/help/en/articles/10617106-do-i-need-to-credit-shutterstock-the-artist-when-i-use-images-or-footage |
| ID6 | aviso de rota aproximada | `marca/identidade.md` §6 |
| F01 | s01, Gillfoto | https://commons.wikimedia.org/wiki/File:1A_Downtown_Juneau_87_19.jpg |
| F06a | s06 p1, Pillsbury & Cleveland | https://commons.wikimedia.org/wiki/File:Juneau,_Alaska_harbor_and_the_Gastineau_Channel_looking_NW,_ca._1899_-_DPLA_-_e2c51ab2f9629dcfbff1fb1922ffb416.jpg |
| F06b | s06 p2, Partridge | https://commons.wikimedia.org/wiki/File:Juneau_City_in_Alaska_US_by_Partridge_1887.jpg |
| F07 | s07 p2, Case & Draper | https://commons.wikimedia.org/wiki/File:Sitka,_Alaska_LCCN2004672324.jpg |
| F09a | s09 p1, Pyatt | https://commons.wikimedia.org/wiki/File:Anchorage_Alaska_1_July_1915.jpg |
| F09b | s09 p2, NARA | https://catalog.archives.gov/id/204947418 |
| F10 | s10 p1, USACE | https://commons.wikimedia.org/wiki/File:Alaska_Highway_corduroy_road_by_95th_near_Charlie_Lake_-_USACE-p15141coll5-18983.jpeg |
| F16a | s16 p1, DOCUMERICA | https://commons.wikimedia.org/wiki/File:DOWNTOWN_FAIRBANKS,_VIEW_SOUTHWEST._THE_CHENA_RIVER_FLOWS_THROUGH_THE_CENTER_OF_TOWN._THE_PIPELINE_WILL_CROSS_THE..._-_NARA_-_550551.jpg |
| F16b | s16 p2, Chesi | https://commons.wikimedia.org/wiki/File:Alaska_Railroad_north_terminus_1972_01.jpg |
| F22 | s22, State of Alaska | https://commons.wikimedia.org/wiki/File:5TH_ALASKA_STATE_LEGISLATURE.jpg |
| F23 | s23 p4, Gillfoto | https://commons.wikimedia.org/wiki/File:1993_Juneau_below_gf301.jpg |
| F28 | s28 p3, Gelotte / ASM | a mesma URL do ADN |
| F35 | s35 p1, Foubister | https://commons.wikimedia.org/wiki/File:Wasilla_lake.jpg |
| F37a | s37 p1, Ifly6 | https://commons.wikimedia.org/wiki/File:Alaska_State_Capitol,_House_of_Representatives_chamber_2024-08-15.jpg |
| F37b | s37 p2, Brooks | https://commons.wikimedia.org/wiki/File:Alaska_Senate_deliberations.jpg |
| F49 | s49, Gillfoto | https://commons.wikimedia.org/wiki/File:Juneau_HP_97_417.jpg |
| F56 | s56, Juneau Empire | https://www.juneauempire.com/news/after-marathon-meeting-assembly-delays-decision-on-downtown-camping-ordinance/ |
| CBJ2 | s57, retrato de 2020 | https://juneau.org/maria-gladziszewski-2020 |

Os itens F (lugar, crédito, ano) se conferiram contra o veredito do conferente em `out/juneau/_pesquisa/conferencia-midia.json`, que registra a leitura da origem em 27/09/2026. Não se reabriram hoje: a API do Commons pede o User-Agent do canal, e o WebFetch não o manda.

## Tabela de vereditos

| id | afirmação (tela) | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| C01n | s05 `FRANK W. HARRIS` | CONFIRMADA | "—Frank W. Harris, Chairman / Capital Access Committee, Inc." (p. 90) | P82 |
| C01c | s05 `Chairman, Capital Access Committee (1982)` | CONFIRMADA | idem; o ", Inc." sai (AP) | P82 |
| C02n | s25 `FRANK W. HARRIS` | CONFIRMADA | idem | P82 |
| C02c | s25 `Chairman, Capital Access Committee (1982)` | CONFIRMADA | idem | P82 |
| C03n | s25 `JIM CLARK` | CONFIRMADA | "—Jim Clark, Chairman / Alaska Committee" (p. 90) | P82 |
| C03c | s25 `Chairman, Alaska Committee (1982)` | CONFIRMADA | idem | P82 |
| C04n | s26 `LEE STOOPS` | CONFIRMADA | "Enter Lee Stoops, then an aide for state Sen. John Sackett." | ADN |
| C04c | s26 `Legislative aide (1982)` | CONFIRMADA | idem; carreira: "legislative aide" | ADN |
| C05n | s27 `LEE STOOPS` (herdado) | CONFIRMADA | idem | ADN |
| C05c | s27 `Legislative aide (1982)` (herdado) | CONFIRMADA | idem | ADN |
| C06n | s31 `LEE STOOPS` | CONFIRMADA | idem | ADN |
| C06c | s31 `Legislative aide (1982)` | CONFIRMADA | idem | ADN |
| C07n | s31 `DAVID REAMER` | CONFIRMADA | "By David Reamer / Histories of Alaska" | ADN |
| C07c | s31 `Columnist, Anchorage Daily News` | CONFIRMADA | "a continuing weekly series on Alaska history by local historian David Reamer" (coluna semanal) | ADN |
| C08n | s31 `DAVE DITTMAN` | CONFIRMADA | "Dittman Research founder Dave Dittman" | ADN |
| C08c | s31 `Pollster, Dittman Research (1982)` | CONFIRMADA | fundador do instituto que fez a pesquisa de set./1982 | ADN |
| C09n | s31 `BRIAN RAE` | CONFIRMADA | "by Brian N. Rae"; "Brian Rae is a labor economist…" | TR90 |
| C09c | s31 `Labor economist, Alaska Department of Labor` | CONFIRMADA | "a labor economist employed with the Research & Analysis Section, … Alaska Department of Labor" | TR90 |
| C10n | s41 `JESSE KIEHL` | CONFIRMADA | "Juneau Democratic Sen. Jesse Kiehl" | KT25 |
| C10c | s41 `Alaska state senator, Juneau` | CONFIRMADA | KTOO 2025; senador em exercício, distrito B, eleito em 2018 e 2024 | KT25, WIK |
| C11n | s48 `TONY KNOWLES` | CONFIRMADA | "In January 2000, Governor Tony Knowles announced…" | CA9 |
| C11c | s48 `Governor of Alaska` | CONFIRMADA | idem | CA9 |
| C12n | s55 `BILL WALKER` | CONFIRMADA | "On December 15, 2016, Governor Bill Walker of Alaska announced…" (§1.1) | FS |
| C12c | s55 `Governor of Alaska` | CONFIRMADA | idem | FS |
| C13n | s57 `MARIA GLADZISZEWSKI` | CONFIRMADA | "So did Assembly member Maria Gladziszewski." | KT17 |
| C13c | s57 `Assembly member, City and Borough of Juneau (2017)` | CONFIRMADA | cargo em jan./2017 (KTOO); o nome da prefeitura é decisão do Lucas de 28/09 | KT17, CBJ2 |
| R001 | s01 `AUG. 27, 1974` | CONFIRMADA | "Primary Election / August 27, 1974" | B74 |
| R002 | s01 carimbo `YES` | CONFIRMADA | Initiative #1 aprovada (FOR 46,659) | B74 |
| R003 | s01 `57% · 46,659 to 35,683` | CONFIRMADA | 46,659/82,342 = 56.66 % dos votos dados à pergunta (nunca "of Alaska voters": 55.2 % dos 84,585) | B74 |
| R004 | s01 `Juneau, Alaska` | CONFIRMADA | "at the center of downtown Juneau, Alaska" | F01 |
| R005 | s02 `BALLOT MEASURE NO. 8` | CONFIRMADA | "BALLOT MEASURE NO. 8 (cont.)" (pp. 89–90) | P82 |
| R006 | s02 "Considering the cost… (estimated to total $" (literal) | CONFIRMADA | p. 88, letra a letra até o cifrão | P82 |
| R007 | s03 `Juneau` | CONFIRMADA | ponto do NE | NE |
| R008 | s03 `UNITED STATES` | CONFIRMADA | NE admin 0 | NE |
| R009 | s03 `CANADA` | CONFIRMADA | NE admin 0 | NE |
| R010 | s03 `ABOUT 43 MILES` | CONFIRMADA | "extends approximately 43 miles to the north where Glacier Highway terminates at Cascade Point" (p. 1-8); régua do OSM com 41.9 mi, declarada | FS |
| R011 | s03 `Cascade Point` | CONFIRMADA | idem | FS |
| R012 | s05 `(1982)` | CONFIRMADA | assinatura do folheto de 1982 | P82 |
| R013 | s05 “is so expensive …” | CONFIRMADA | "…is so expensive and time consuming that…" (reticências = "and time consuming") | P82 |
| R014 | s05 “that few ordinary citizens are able to go there.” | CONFIRMADA | literal, p. 90 | P82 |
| R015 | s06 `Juneau, Alaska` (p1) | CONFIRMADA | "Juneau, Alaska harbor and the Gastineau Channel looking NW" | F06a |
| R016 | s06 `1880` | CONFIRMADA | "A day after the discovery–October 4, 1880–the miners wrote a 'Code of Local Laws'" | CBJ |
| R017 | s06 `Juneau, Alaska` (p2) | CONFIRMADA | "Juneau City"; "harbor at Juneau, Alaska" | F06b |
| R018 | s07 `1900` | CONFIRMADA | lei de 6/6/1900 | S00 |
| R019 | s07 "The temporary seat of government … at Juneau." (literal) | CONFIRMADA | Sec. 1, letra a letra | S00 |
| R020 | s07 `Sitka, Alaska` | CONFIRMADA | lugar_na_origem "Sitka, Alaska" | F07 |
| R021 | s07 `Sitka` | CONFIRMADA | ponto do NE | NE |
| R022 | s07 `Juneau` | CONFIRMADA | ponto do NE | NE |
| R023 | s07 `1906` | CONFIRMADA | "on September 8 moved the executive office to Juneau" | G06 |
| R024 | s07 `1912` | CONFIRMADA | lei de 24/8/1912 | S12 |
| R025 | s07 "That the capital of the Territory of Alaska…" (literal) | CONFIRMADA | Sec. 2, letra a letra; grifo = trecho que a voz cita | S12 |
| R026 | s08 `1914` | CONFIRMADA | "…spawned the city of Anchorage in 1914." (PDF p. 11) | POP |
| R027 | s08 `Ladd Field` | CONFIRMADA | "on the line in front of Operations at Ladd Field" | F09b |
| R028 | s08 `Anchorage` | CONFIRMADA | ponto do NE | NE |
| R029 | s08 `Fairbanks` | CONFIRMADA | ponto do NE | NE |
| R030 | s08 `BRITISH COLUMBIA` | CONFIRMADA | "Fort St. John Sector, ALCAN Highway, north of Charlie Lake" (na Colúmbia Britânica; o rótulo é mais largo que a origem) | F10 |
| R031 | s08 `CANADA` | CONFIRMADA | NE admin 0 | NE |
| R032 | s08 `ROUGHLY 15%` | CONFIRMADA | "about 15 percent of the population in 1940" (PDF p. 14) | POP |
| R033 | s08 `1940` | CONFIRMADA | idem | POP |
| R034 | s08 `1960` | CONFIRMADA | "By 1960, … more than half of Alaska's population" | POP |
| R035 | s11 `1960` | CONFIRMADA | primária de 9/8/1960 | B60 |
| R036 | s11 `NO` | CONFIRMADA | rejeitada | B60 |
| R037 | s11 `23,972 to 18,865` | CONFIRMADA | "TOTAL 18,865 23,972" (FOR/AGAINST); o H26 dá o mesmo | B60, H26 |
| R038 | s11 `1962` | CONFIRMADA | geral de 6/11/1962 | B62 |
| R039 | s11 `NO` | CONFIRMADA | rejeitada | B62 |
| R040 | s11 `32,325 to 26,542` | CONFIRMADA | "STATEWIDE TOTALS 60,084 26,542 32,325" (Yes/No); o 26,452 do H26 não fecha com as parciais | B62 |
| R041 | s11 `AUGUST 1974` | CONFIRMADA | 27/8/1974 | B74 |
| R042 | s11 `YES` | CONFIRMADA | aprovada | B74 |
| R043 | s11 `46,659 to 35,683` | CONFIRMADA | p. 48 | B74 |
| R044 | s12 `80% YES` | CONFIRMADA | distritos 7–12: 27,064 × 6,781 = 79.96 % (somas refeitas na imagem) | B74 |
| R045 | s12 `SOUTHEAST` | CONFIRMADA | distritos 1–4 sob "SOUTHEASTERN" | B74 |
| R046 | s12 `ABOUT 94% NO` | CONFIRMADA | distritos 1–4: 948 × 15,371 = 94.19 % não | B74 |
| R047 | s12 `NEARLY EVEN` | CONFIRMADA | distrito 20: 5,381 × 5,243 = 50.65 % | B74 |
| R048 | s12 `30 MILES` | CONFIRMADA | "none of which may be within a radius of 30 miles of the City of Anchorage or Fairbanks" | P76 |
| R049 | s12 `ALASKA SUPREME COURT · 1974` | CONFIRMADA | decisão de 15/11/1974 | BOU |
| R050 | s12 "We therefore hold that the exclusion…" (literal) | CONFIRMADA | letra a letra | BOU |
| R051 | s12 `ATTORNEY GENERAL OPINION · 1993` | CONFIRMADA | 24/8/1993, "Charles E. Cole / Attorney General" | AG |
| R052 | s12 "Applying this test, the court upheld the initiative…" (literal) | CONFIRMADA | p. 4, letra a letra | AG |
| R053 | s15 `56,219` | CONFIRMADA | "Willow 56,219" | B76 |
| R054 | s15 `33,170` | CONFIRMADA | "Larson Lake 33,170" | B76 |
| R055 | s15 `16,169` | CONFIRMADA | "Mount Yenlo 16,169" | B76 |
| R056 | s15 `Willow` | CONFIRMADA | OSM node/150916708 | OSMW |
| R057 | s15 `MAT-SU VALLEY` | CONFIRMADA | polígono do Matanuska-Susitna Borough; o termo é o da voz (obs. O2) | TIG |
| R058 | s15 `ABOUT 70 MILES` | CONFIRMADA | "approximately 70 road miles north of Anchorage" (p. 48); régua sobre a estrada real, 68.2 mi | P76 |
| R059 | s16 `Fairbanks, Alaska` (p1) | CONFIRMADA | "DOWNTOWN FAIRBANKS, VIEW SOUTHWEST…" | F16a |
| R060 | s16 `Fairbanks, Alaska` (p2) | CONFIRMADA | "United States, Alaska, Fairbanks…" | F16b |
| R061 | s16 `EARLY 1977` | CONFIRMADA | "organized in Fairbanks in early 1977" (p. 49) | P78 |
| R062 | s16 `FRANK` | CONFIRMADA | "the FRANK (…) Committee" | P78 |
| R063 | s16 `Frustrated, Responsible Alaskans Needing Knowledge` | CONFIRMADA | "(Frustrated, Responsible Alaskans Needing Knowledge)" | P78 |
| R064 | s17 `STATE MONEY` | CONFIRMADA | "the expenditure of state money … only after…" (p. 48) | P78 |
| R065 | s17 carimbo `APPROVED` | CONFIRMADA | "…have approved a general obligation bond proposition" | P78 |
| R066 | s17 `BONDS` | CONFIRMADA | idem | P78 |
| R067 | s17 `THROUGH 1992` | CONFIRMADA | "…through the year 1992" | P78 |
| R068 | s17 `BOND` | CONFIRMADA | "general obligation bond"; a definição é a da voz, já aprovada | P78 |
| R069 | s18 `STATEMENT AGAINST BALLOT PROPOSITION NO. 3 · 1978` | CONFIRMADA | título literal, p. 49 | P78 |
| R070 | s18 “Its true purpose is to prohibit the move to Willow” | CONFIRMADA | "Its true purpose is to prohibit the move to Willow which the voters have authorized." (Frank Harris, pró-mudança) | P78 |
| R071 | s19 `NOVEMBER 1978` | CONFIRMADA | "VOTE / TUESDAY, NOVEMBER 7, 1978" | P78, B78 |
| R072 | s19 `$` (linha vazia) | NADA A CHECAR | motivo gráfico; o valor entra com R076 e R077 | — |
| R073 | s19 `FULL BONDABLE COSTS OF RELOCATING CAPITAL` | CONFIRMADA | p. 48, literal | P78 |
| R074 | s19 `Initiative No. 6` | CONFIRMADA | p. 48; p. 49: "Initiative No. 6 was developed by the FRANK … Committee" | P78 |
| R075 | s19 `CAPITAL CONSTRUCTION COSTS OF THE NEW ALASKA CAPITAL` | CONFIRMADA | p. 63, literal | P78 |
| R076 | s19 "Shall the State of Alaska issue … $966,000,000…" (literal) | CONFIRMADA | "BALLOT QUESTION", p. 63, letra a letra | P78 |
| R077 | s19 `UP TO $966 MILLION` | CONFIRMADA | "not more than $966,000,000" | P78 |
| R078 | s20 `INITIATIVE NO. 6` | CONFIRMADA | linha da iniciativa (p. 48); boletim "BALLOT PROPOSITION #3" | P78, B78 |
| R079 | s20 `BONDS` | CONFIRMADA | "Bonds Yes / Bonds No" | P78 |
| R080 | s20 `YES` | CONFIRMADA | FRANK aprovada | B78 |
| R081 | s20 `69,414 to 55,253` | CONFIRMADA | totais da p. 50; o H26 dá o mesmo | B78, H26 |
| R082 | s20 `NEARLY 56%` | CONFIRMADA | 55.68 % | B78 |
| R083 | s20 `NO` | CONFIRMADA | títulos rejeitados | B78 |
| R084 | s20 `88,783 to 31,491` | CONFIRMADA | "NEW STATE CAPITAL CONSTRUCTION BOND" YES 31491, NO 88783 (p. 62) | B78 |
| R085 | s22 `1981` | CONFIRMADA | "The FRANK Initiative was amended by the Legislature in 1981" (p. 89) | P82 |
| R086 | s23 `BALLOT MEASURE NO. 8 · NOVEMBER 1982` | CONFIRMADA | "(As it will appear on the November 2, 1982 General Election Ballot)" | P82 |
| R087 | s23 "Considering the cost… at Willow?" (literal) | CONFIRMADA | p. 88, letra a letra | P82 |
| R088 | s23 `ABOUT $2.8 BILLION` | CONFIRMADA | "$2,843,147,000" | P82 |
| R089 | s23 `THROUGH 1994` | CONFIRMADA | "…relocation completion date of 1994" | P82 |
| R090 | s23 `NEARLY $590 MILLION` | CONFIRMADA | "Indemnification of Juneau residents under AS 44.08 $589,323,000" | P82 |
| R091 | s23 `Juneau, Alaska` | CONFIRMADA | "Small plane flight over Juneau, Southeast Alaska." | F23 |
| R092 | s24 `WINNER-TAKE-ALL` | CONFIRMADA | "If a majority votes YES, the State may spend… If a majority votes NO, laws and initiatives … are repealed." | P82 |
| R093 | s25 “inflated” | CONFIRMADA | "the unrealistic, inflated estimates shown on the ballot measure" (Harris) | P82 |
| R094 | s25 `BONDS` | CONFIRMADA | cédula de 1978 | P78 |
| R095 | s25 `NO` | CONFIRMADA | 88,783 × 31,491; Clark: "the voters turned down a $966,000,000 bond issue" | B78, P82 |
| R096 | s26 `ACCESS ANNIE` | CONFIRMADA | "Access Annie was the mascot of … the Capital Access Committee" | ADN |
| R097 | s26 `Capital Access Committee` | CONFIRMADA | idem | ADN |
| R098 | s26 `FOOTBALL FANNIE` | CONFIRMADA | "Football Fannie was the mascot of the NFL Access Committee" | ADN |
| R099 | s26 `NFL Access Committee` | CONFIRMADA | idem | ADN |
| R100 | s27 `ACCESS ANNIE` (herdado) | CONFIRMADA | idem R096 | ADN |
| R101 | s27 `Capital Access Committee` (herdado) | CONFIRMADA | idem | ADN |
| R102 | s27 `FOOTBALL FANNIE` (herdado) | CONFIRMADA | idem R098 | ADN |
| R103 | s27 `NFL Access Committee` (herdado) | CONFIRMADA | idem | ADN |
| R104 | s27 `2026 · Anchorage Daily News · David Reamer` | CONFIRMADA | "Published: February 9, 2026"; entrevista de 2/2/2026 | ADN |
| R105 | s27 “make fun of the whole process and the amount of money” | CONFIRMADA | "…decided to just make fun of the whole process and the amount of money they wanted to spend…" | ADN |
| R106 | s28 `28` | CONFIRMADA | "all 28 NFL teams" | ADN |
| R107 | s28 `$800 MILLION` | CONFIRMADA | "…28 NFL Teams and 3 stadiums would only cost $800 million" (1º anúncio, 8/10/1982) | ADN |
| R108 | s29 `Dittman Research · late September` | CONFIRMADA | "In late September 1982, Dittman Research of Anchorage conducted a statewide poll" | ADN |
| R109 | s29 `52% to 45%` | CONFIRMADA | "52% … in favor of the move versus 45% opposed" (527 entrevistados) | ADN |
| R110 | s29 `NOVEMBER 1982` | CONFIRMADA | 2/11/1982 | B82 |
| R111 | s29 `NO` | CONFIRMADA | rejeitada | B82 |
| R112 | s29 `102,083 to 91,049` | CONFIRMADA | total da p. 47: YES 91049, NO 102083; os 27 totais de distrito (pp. 41–47, lidos hoje) somam exatamente isso (obs. O1) | B82 |
| R113 | s30 "may the State of Alaska spend… ($2,843,147,000)" (literal) | CONFIRMADA | p. 88 | P82 |
| R114 | s31 `the satire` | CONFIRMADA | Stoops: "…no way anyone could ever tell me that, that Football Fannie did not determine that election" | ADN |
| R115 | s31 `one factor, at least` | CONFIRMADA | "At the very least, the NFL Access Committee was a factor…" | ADN |
| R116 | s31 `not that heavily` | CONFIRMADA | "He also did not believe the price tag was a sufficiently relevant factor in the outcome" | ADN |
| R117 | s31 `ALASKA ECONOMIC TRENDS · 1990` | CONFIRMADA | "Alaska Economic Trends June 1990" | TR90 |
| R118 | s31 “finally persuaded voters to reject the plans” | CONFIRMADA | "The prohibitive expense of the capital move finally persuaded voters to reject the plans…" (p. 2) | TR90 |
| R119 | s31 `OPPONENTS` | CONFIRMADA | "Collectively, the anti-move groups spent over a million dollars" | ADN |
| R120 | s32 "If a majority votes NO, laws and initiatives…" (literal) | CONFIRMADA | p. 88 | P82 |
| R121 | s32 `LEGISLATIVE AFFAIRS AGENCY SUMMARY` | CONFIRMADA | p. 89 | P82 |
| R122 | s32 "If the ballot proposition is rejected … Relocation Indemnification Act." (literal) | CONFIRMADA | p. 89, letra a letra | P82 |
| R123 | s32 `YES` (riscado) | CONFIRMADA | "the Capital Relocation Initiative" (1974) está entre as leis revogadas pelo não | P82 |
| R124 | s33 `NO PRICE ON THE BALLOT` | CONFIRMADA | a cédula da No. 3 não traz custo (B-24) | P94 |
| R125 | s33 `Wasilla` | CONFIRMADA | ponto do NE | NE |
| R126 | s33 `Juneau` | CONFIRMADA | ponto do NE | NE |
| R127 | s34 `1982 · ABOUT $2.8 BILLION` | CONFIRMADA | "Twelve years ago, the Capital Site Planning Commission estimated that it would cost $2,843,000,000" | P94, P82 |
| R128 | s34 “This time, no price tag is attached.” | CONFIRMADA | literal (B-24) | P94 |
| R129 | s35 `Wasilla, Alaska` | CONFIRMADA | "Wasilla Lake, Wasilla, Alaska" | F35 |
| R130 | s35 `NEARLY 55% NO` | CONFIRMADA | "No 116,277 54.7%" | B94 |
| R131 | s35 `CHANGE OF CAPITAL TO WASILLA` | CONFIRMADA | título da Ballot Measure No. 3 | P94 |
| R132 | s35 `$` (vazio) | CONFIRMADA | a cédula de 1994 não trazia custo | P94 |
| R133 | s35 `NO` | CONFIRMADA | rejeitada | B94 |
| R134 | s35 `RIGHT TO KNOW, VOTE - MOVE COSTS` | CONFIRMADA | título da Ballot Measure No. 5 (B-27) | P94 |
| R135 | s35 `YES` | CONFIRMADA | "Yes 159,781 77.4%" | B94 |
| R136 | s35 `159,781 to 46,665` | CONFIRMADA | idem; H26, 93COST, 11/08/1994 | B94, H26 |
| R137 | s36 `AS 44.06.055` | CONFIRMADA | seção vigente | AS |
| R138 | s36 "State money may be expended … twelve-year period following such approval." (literal) | CONFIRMADA | letra a letra; os dois grifos são literais | AS |
| R139 | s36 `STILL LAW` | CONFIRMADA (volátil, 26/09/2026) | vigente no BASIS, conferido no navegador do app | AS, VOL |
| R140 | s36 `AS OF SEPTEMBER 2026` | CONFIRMADA (volátil, 26/09/2026) | idem | AS, VOL |
| R141 | s37 `Alaska House chamber` | CONFIRMADA | "Chamber of the Alaskan House of Representatives" | F37a |
| R142 | s37 `Alaska Senate chamber` | CONFIRMADA | "…huddling in the Senate chamber…" | F37b |
| R143 | s38 `social` | CONFIRMADA | "the social, economic, and environmental costs" | AS |
| R144 | s38 `economic` | CONFIRMADA | idem | AS |
| R145 | s38 `environmental` | CONFIRMADA | idem | AS |
| R146 | s39 `2002` | CONFIRMADA | Measure No. 2, 5/11/2002 | B02 |
| R147 | s39 `NO` | CONFIRMADA | rejeitada | B02 |
| R148 | s39 `153,127 to 74,650` | CONFIRMADA | "YES 74650 32.77% NO 153127 67.23%" | B02 |
| R149 | s39 `MAT-SU VALLEY` | CONFIRMADA | as sessões iriam "to the Matanuska-Susitna (Mat-Su) Borough"; o polígono é o do borough (obs. O2) | P02, TIG |
| R150 | s39 `ABOUT 2-TO-1` | CONFIRMADA | 2.05 para 1 | B02 |
| R151 | s40 `HOUSE BILL NO. 3 · 2025` | CONFIRMADA | "HOUSE BILL NO. 3 … Introduced: 1/22/25" | HB3 |
| R152 | s40 “An Act relating to convening the legislature in Anchorage; …” | CONFIRMADA | início literal do título | HB3 |
| R153 | s40 `* Sec. 16. AS 44.06.050, 44.06.055, and 44.06.060 are repealed.` | CONFIRMADA | letra a letra | HB3 |
| R154 | s40 `AS OF SEPTEMBER 2026` | CONFIRMADA (volátil, 26/09/2026) | status "(H) CRA" desde 22/1/2025 | HB3S, VOL |
| R155 | s41 “It’s a little bit like a zombie movie.” | CONFIRMADA | letra a letra | KT25 |
| R156 | s43 `JUNEAU ACCESS IMPROVEMENTS PROJECT · 2018` | CONFIRMADA | Final SEIS aprovado em 18/6/2018 | FS |
| R157 | s43 "These restrictions also contribute … the state’s capital." (literal) | CONFIRMADA | cap. 1, letra a letra; os grifos são literais | FS |
| R158 | s44 `BRITISH COLUMBIA` | CONFIRMADA | NE admin 1, CA-BC | NE |
| R159 | s44 `Taku River` | CONFIRMADA | "Taku River" | OSMT |
| R160 | s44 `Taku Inlet` | CONFIRMADA | GNIS "Taku Inlet" (Bay) | GTI |
| R161 | s44 `Approximate route` | CONFIRMADA | o tracejado é esquema de rota não construída | ID6 |
| R162 | s44 `Lynn Canal` | CONFIRMADA | GNIS "Lynn Canal" (Channel) | GLC |
| R163 | s44 `1993` | CONFIRMADA | "In 1993, the B.C. Minister of Transportation was contacted … B.C. indicated it did not support pursuit of this alternative." | FS |
| R164 | s44 `2003` | CONFIRMADA | "The October 2, 2003, response indicated that B.C. is not interested…" | FS |
| R165 | s44 `Haines` | CONFIRMADA | OSM node/150921918 | OSMH |
| R166 | s44 `Skagway` | CONFIRMADA | ponto do NE | NE |
| R167 | s44 `CANADA` | CONFIRMADA | NE admin 0 | NE |
| R168 | s44 `Alaska Highway` | CONFIRMADA | "Alaska Highway" | OSMA |
| R169 | s48 `JANUARY 2000` | CONFIRMADA | "In January 2000, Governor Tony Knowles announced…" | CA9 |
| R170 | s48 `Lynn Canal` | CONFIRMADA | GNIS | GLC |
| R171 | s48 `Approximate route` | CONFIRMADA | esquema | ID6 |
| R172 | s49 `OCTOBER 2000` | CONFIRMADA | "In October 2000, Juneau voters were split on an advisory ballot question…" | FS |
| R173 | s49 `Juneau, Alaska` | CONFIRMADA | "Juneau, Alaska with Mount Roberts behind." | F49 |
| R174 | s49 `FERRY 5,840 · ROAD 5,761` | CONFIRMADA | "…5,840 choosing enhanced ferry service and 5,761 choosing a road" (o estudo cita o FEIS de 2006) | FS |
| R175 | s50 `2006` | CONFIRMADA | "In April 2006, FHWA issued a Record of Decision … selected Alternative 2B" | FS |
| R176 | s50 `Lynn Canal` | CONFIRMADA | GNIS | GLC |
| R177 | s50 `Approximate route` | CONFIRMADA | esquema | ID6 |
| R178 | s51 `41 AVALANCHE PATHS` | CONFIRMADA | "…Alternative 2B crosses 41 avalanche paths" | FS |
| R179 | s51 `ABOUT $680 MILLION` | CONFIRMADA | "approximately $680.2 million" | FS |
| R180 | s52 `2009` | CONFIRMADA | "On February 13, 2009, the District Court vacated FHWA's ROD" | FS, CA9 |
| R181 | s52 `Upheld on appeal, 2011` | CONFIRMADA | "…and we affirm." / "AFFIRMED." (Filed May 4, 2011) | CA9 |
| R182 | s53 `2005–2014` | CONFIRMADA | "between 2005 and 2014, oil revenues averaged 90 percent of Alaska's unrestricted general fund revenues" | FS |
| R183 | s53 `ABOUT 90%` | CONFIRMADA | idem | FS |
| R184 | s53 `of the state’s unrestricted general fund revenue` | CONFIRMADA | idem | FS |
| R185 | s54 `2013` | CONFIRMADA | máximo de US$ 116.26 em 12/02/2013; FS: "more than $116 per barrel in February 2013" | DOR, FS |
| R186 | s54 `EARLY 2016` | CONFIRMADA | mínimo de US$ 26.23 em 20/01/2016; FS: "just over $26 … January 2016" | DOR, FS |
| R187 | s54 `Daily oil price` | CONFIRMADA | série diária "ANS West Coast" do Department of Revenue | DOR |
| R188 | s55 `DECEMBER 2016` | CONFIRMADA | 15/12/2016 | FS |
| R189 | s55 `NO ACTION` | CONFIRMADA | "Alternative 1 – No Action" | FS |
| R190 | s55 `keep the ferries` | CONFIRMADA | "No Action includes a continuation of mainline ferry service in Lynn Canal" (ROD) | FS |
| R191 | s55 `build no road` | CONFIRMADA | No Action: sem construção | FS |
| R192 | s56 `Juneau Assembly` | CONFIRMADA | "Juneau Assembly members take up the Juneau Access Road resolution…" | F56 |
| R193 | s56 `JANUARY 2017` | CONFIRMADA | votação de segunda-feira, 23/1/2017 | KT17 |
| R194 | s57 `Skagway` | CONFIRMADA | ponto do NE | NE |
| R195 | s57 `Haines` | CONFIRMADA | ponto do OSM | OSMH |
| R196 | s57 `Approximate route` | CONFIRMADA | esquema | ID6 |
| R197 | s58 `JUNE 2018` | CONFIRMADA | "Final SEIS and Record of Decision (ROD), issued on June 18, 2018" | FR |
| R198 | s58 `RECORD OF DECISION · 2018` | CONFIRMADA | idem | FS, FR |
| R199 | s58 `II. Basis for Decision` | CONFIRMADA | ROD, p. 2 | FS |
| R200 | s58 `… In summary, DOT&PF and FHWA find the following:` | CONFIRMADA | ROD, p. 3, literal | FS |
| R201 | s58 "• Declining oil prices have caused the need for cuts to State budgets." | CONFIRMADA | letra a letra | FS |
| R202 | s58 "• Declining revenues, particularly General Fund revenues…" | CONFIRMADA | letra a letra | FS |
| R203 | s58 "• Controversy on the JAI Project is high among the public…" | CONFIRMADA | letra a letra | FS |
| R204 | s59 `Juneau` | CONFIRMADA | ponto do NE | NE |
| R205 | s59 `Cascade Point` | CONFIRMADA | p. 1-8 | FS |
| R206 | s59 `ABOUT 43 MILES` | CONFIRMADA | p. 1-8 | FS |
| R207 | s60 `YES` | CONFIRMADA | 1974 | B74 |
| R208 | s60 `1974` | CONFIRMADA | 27/8/1974 | B74 |
| R209 | s60 `WHETHER TO MOVE` | CONFIRMADA | 1974: "Relocating and Constructing A New Capital", sem preço | B74 |
| R210 | s60 `HOW MUCH` | CONFIRMADA | 1978: títulos de até $966 milhões; 1982: "$2,843,147,000" | P78, P82 |
| R211 | s60 `1978 · UP TO $966 MILLION` | CONFIRMADA | p. 63 | P78 |
| R212 | s60 `1982 · ABOUT $2.8 BILLION` | CONFIRMADA | p. 88 | P82 |
| R213 | s60 `NO` (×2) | CONFIRMADA | 88,783 × 31,491; 102,083 × 91,049 | B78, B82 |
| R214 | s61 `SINCE 1994` | CONFIRMADA | 93COST aprovada em 8/11/1994; o texto da No. 5 é o dos atuais AS 44.06.050–.060 | H26, P94, AS |
| R215 | s61 `AS OF SEPTEMBER 2026` | CONFIRMADA (volátil, 26/09/2026) | vigência de AS 44.06.055 | AS, VOL |
| R216 | s61 `AS 44.06.055` (herdado) | CONFIRMADA | idem R137 | AS |
| R217 | s61 literal de AS 44.06.055 (herdado) | CONFIRMADA | idem R138 | AS |
| R218 | s62 `YES` | CONFIRMADA | o sim de 1974 | B74 |
| R219 | s62 `$` | NADA A CHECAR | motivo gráfico | — |
| R220 | s63 `YES` (herdado) | CONFIRMADA | idem | B74 |
| R221 | s63 `$` (herdado) | NADA A CHECAR | motivo gráfico | — |
| K01 | s01 `Gillfoto / Wikimedia Commons · CC BY-SA 4.0` | CONFIRMADA | Gillfoto (Own work), CC BY-SA 4.0 | F01 |
| K02 | s01 `Source: Alaska Division of Elections, 1974` | CONFIRMADA | boletim de 1974 | B74 |
| K03 | s02 `Source: Alaska Division of Elections, 1982` | CONFIRMADA | folheto de 1982 | P82 |
| K04 | s03 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | base MapTiler e geometria do OSM; linha prescrita | MT |
| K05 | s03 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA | o estudo de 2018 (forma de `midia.md` §7.1) | FS |
| K06 | s05 `Source: Alaska Division of Elections, 1982` | CONFIRMADA | p. 90 | P82 |
| K07 | s05 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | inset de satélite | MT |
| K08 | s06 `Source: City and Borough of Juneau` | CONFIRMADA | página sem data (exceção declarada) | CBJ |
| K09 | s07 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | mapa | MT |
| K10 | s08 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | satélite e rodovias do OSM | MT |
| K11 | s08 `Source: Alaska Department of Labor and Workforce Development, 2013` | CONFIRMADA | "Alaska Department of Labor and Workforce Development, April 2013" | POP |
| K12 | s11 `Source: Alaska Division of Elections, 1960–1974` | CONFIRMADA | três boletins | B60, B62, B74 |
| K13 | s12 `Source: Alaska Division of Elections, 1974` | CONFIRMADA | boletim de 1974 | B74 |
| K14 | s12 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | satélite | MT |
| K15 | s12 `Source: Alaska Supreme Court, 1974` | CONFIRMADA | Boucher v. Engstrom | BOU |
| K16 | s12 `Source: Alaska Department of Law, 1993` | CONFIRMADA | o parecer | AG |
| K17 | s15 `Source: Alaska Division of Elections, 1976` | CONFIRMADA | placar e folheto de 1976 | B76, P76 |
| K18 | s15 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | satélite e Willow do OSM | MT |
| K19 | s16 `Dennis Cowals / National Archives` | CONFIRMADA | DOCUMERICA, NARA 550551 (exceção do `midia.md` §7.3) | F16a |
| K20 | s16 `Piergiuliano Chesi / Wikimedia Commons · CC BY 3.0` | CONFIRMADA | CC BY 3.0 Unported | F16b |
| K21 | s16 `Source: Alaska Division of Elections, 1978` | CONFIRMADA | folheto de 1978, p. 49 | P78 |
| K22 | s17 `Source: Alaska Division of Elections, 1978` | CONFIRMADA | p. 48 | P78 |
| K23 | s18 `Source: Alaska Division of Elections, 1978` | CONFIRMADA | p. 49 | P78 |
| K24 | s19 `Source: Alaska Division of Elections, 1978` | CONFIRMADA | pp. 48 e 63 | P78 |
| K25 | s20 `Source: Alaska Division of Elections, 1978` | CONFIRMADA | boletim de 1978 | B78 |
| K26 | s22 `State of Alaska / Alaska State Library` | CONFIRMADA | autor "State of Alaska", Alaska's Digital Archives (`midia.md` §7.5) | F22 |
| K27 | s22 `Source: Alaska Division of Elections, 1982` | CONFIRMADA | p. 89 (1981) | P82 |
| K28 | s23 `Source: Alaska Division of Elections, 1982` | CONFIRMADA | p. 88 | P82 |
| K29 | s23 `Gillfoto / Wikimedia Commons · CC BY-SA 4.0` | CONFIRMADA | CC BY-SA 4.0 | F23 |
| K30 | s25 `Source: Alaska Division of Elections, 1982` | CONFIRMADA | p. 90 | P82 |
| K31 | s26 `Source: Anchorage Daily News, 2026` | CONFIRMADA | a coluna | ADN |
| K32 | s27 `Source: Anchorage Daily News, 2026` | CONFIRMADA | a coluna | ADN |
| K33 | s28 `Source: Anchorage Daily News, 2026` | CONFIRMADA | a coluna | ADN |
| K34 | s28 `Dave Gelotte / Alaska State Museum` | CONFIRMADA | byline Dave Gelotte; "(Provided by Alaska State Museum)", ASM 97-20-1 | F28 |
| K35 | s29 `Source: Anchorage Daily News, 2026; Alaska Division of Elections, 1982` | CONFIRMADA | pesquisa (ADN) e resultado (boletim) | ADN, B82 |
| K36 | s30 `Source: Alaska Division of Elections, 1982` | CONFIRMADA | p. 88 | P82 |
| K37 | s31 `Source: Anchorage Daily News, 2026` | CONFIRMADA | a coluna | ADN |
| K38 | s31 `Source: Alaska Department of Labor, 1990` | CONFIRMADA | Trends de junho de 1990 | TR90 |
| K39 | s32 `Source: Alaska Division of Elections, 1982` | CONFIRMADA | pp. 88–89 | P82 |
| K40 | s33 `Source: Alaska Division of Elections, 1994` | CONFIRMADA | folheto de 1994 | P94 |
| K41 | s33 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | mapa | MT |
| K42 | s34 `Source: Alaska Division of Elections, 1994` | CONFIRMADA | B-24 | P94 |
| K43 | s35 `Murray Foubister / Wikimedia Commons · CC BY-SA 2.0` | CONFIRMADA | CC BY-SA 2.0 Generic | F35 |
| K44 | s35 `Source: Alaska Division of Elections, 1994` | CONFIRMADA | resultado e folheto | B94, P94 |
| K45 | s36 `Source: Alaska State Legislature, 2026` | CONFIRMADA | texto vigente, lido em 2026 | AS |
| K46 | s37 `Ifly6 / Wikimedia Commons · CC BY-SA 4.0` | CONFIRMADA | CC BY-SA 4.0 | F37a |
| K47 | s37 `James Brooks / Wikimedia Commons · CC BY 2.0` | CONFIRMADA | CC BY 2.0 | F37b |
| K48 | s38 `Source: Alaska State Legislature, 2026` | CONFIRMADA | AS 44.06.050–.060 | AS |
| K49 | s39 `Source: Alaska Division of Elections, 2002` | CONFIRMADA | resultado de 2002 | B02 |
| K50 | s39 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | mapa | MT |
| K51 | s40 `Source: Alaska State Legislature, 2026` | CONFIRMADA | o PDF servido é a impressão da 2ª sessão; status lido em 2026 | HB3, HB3S |
| K52 | s41 `Source: KTOO, 2025` | CONFIRMADA | a matéria de 13/6/2025 | KT25 |
| K53 | s43 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA | cap. 1 | FS |
| K54 | s43 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | mapa | MT |
| K55 | s44 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | relevo, satélite e OSM | MT |
| K56 | s44 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA | corredores, 1993 e 2003 | FS |
| K57 | s48 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | mapa | MT |
| K58 | s49 `Gillfoto / Wikimedia Commons · CC BY-SA 4.0` | CONFIRMADA | CC BY-SA 4.0 | F49 |
| K59 | s49 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA | p. 1-7 | FS |
| K60 | s50 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | mapa | MT |
| K61 | s50 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA | ROD de 2006, 2B | FS |
| K62 | s51 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA | 41 corredores e US$ 680.2 milhões | FS |
| K63 | s53 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA | §2.5.1 | FS |
| K64 | s54 `Source: Alaska Department of Revenue, 2013–2016` | CONFIRMADA | série de 1/2/2013 a 29/1/2016 | DOR |
| K65 | s55 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA | §1.1 | FS |
| K66 | s56 `Michael Penn / Juneau Empire` | CONFIRMADA | crédito da origem (`midia.md` §7.5) | F56 |
| K67 | s56 `Source: KTOO, 2017` | CONFIRMADA | "Juneau Assembly votes 6-3 to support the road" | KT17 |
| K68 | s57 `Source: KTOO, 2017` | CONFIRMADA | o cargo de jan./2017 | KT17 |
| K69 | s57 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | inset | MT |
| K70 | s58 `Source: Federal Highway Administration, 2018` | CONFIRMADA | o aviso da FHWA (forma do `midia.md` §7.1) | FR |
| K71 | s59 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA | mapa | MT |
| K72 | s59 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA | p. 1-8 | FS |
| K73 | s60 `Source: Alaska Division of Elections, 1974–1982` | CONFIRMADA | boletins e folhetos de 1974, 1978 e 1982 | B74, B78, B82 |
| K74 | s61 `Source: Alaska State Legislature, 2026; Alaska Division of Elections, 1994` | CONFIRMADA | lei vigente; voto de 1994 | AS, H26 |
| K75 | s62 `Image(s) and/or video used under license from Shutterstock.com` | CONFIRMADA (condicional) | texto que o Shutterstock pede em vídeo; só vai se houver item de lá (hoje, nenhum caçado) | SS |
| K76 | s63 a mesma linha (herdado) | CONFIRMADA (condicional) | idem | SS |
| A01 | s01 `Photo from circa 1987` | CONFIRMADA | data_na_origem "Circa 1987"; aviso_de_ano true | F01 |
| A02 | s06 `Photo from circa 1899` | CONFIRMADA | "Circa 1899" | F06a |
| A03 | s06 `Photo from 1887` | CONFIRMADA | "1887" | F06b |
| A04 | s08 `Photo from 1915` | CONFIRMADA | "1 July 1915" | F09a |
| A05 | s08 `Photo from 1943` | CONFIRMADA | "9 July 43" | F09b |
| A06 | s16 `Photo from 1973` | CONFIRMADA | "August 1973" | F16a |
| A07 | s16 `Photo from 1972` | CONFIRMADA | "1972-08" | F16b |
| A08 | s22 `Photo from 1967–1968` | CONFIRMADA | "1967/1968" | F22 |
| A09 | s23 `Photo from circa 1993` | CONFIRMADA | "Circa 1993" | F23 |
| A10 | s35 `Photo from 2010` | CONFIRMADA | "6 June 2010" | F35 |
| A11 | s49 `Photo from 1997` | CONFIRMADA | "21 April 1997" | F49 |
| A12 | s57 `Photo from 2020` | CONFIRMADA | "2020" (retrato publicado em 14/12/2020) | CBJ2 |
| X01 | s08 pictograma: 15 de 100 (1940), depois mais da metade (1960) | CONFIRMADA | "about 15 percent … 1940"; "more than half" em 1960 | POP |
| X02 | s08 as rodovias Alaska e Glenn ligando Anchorage ao continente | CONFIRMADA | "The Alaska Highway, built in 1942 … the Glenn Highway, which linked Anchorage to the national road system" (PDF p. 13) | POP |
| X03 | s12 as barras regionais (79.96 / 94.19 / 50.65 %) | CONFIRMADA | somas refeitas na p. 48 | B74 |
| X04 | s15 os três placares nos três locais | CONFIRMADA | "on the west side of Larson Lake"; "southerly foothills of Mt. Yenlo"; o sítio de Willow | P76 |
| X05 | s15 a seta curta, 5 milhas a leste da vila | CONFIRMADA | "The town of Willow is five miles to the west of the site" | P76 |
| X06 | s20 as barras 88,783 × 31,491 (2.82 : 1) | CONFIRMADA | p. 62 | B78 |
| X07 | s28 a balança: US$ 800 milhões contra 2.84 bilhões (28 %) | CONFIRMADA | "only about one-fourth of the amount proposed…" | ADN |
| X08 | s29 as barras do resultado (52.86 % não) | CONFIRMADA | soma dos 27 distritos | B82 |
| X09 | s31 a pilha de fichas dos opositores | CONFIRMADA | "spent over a million dollars" | ADN |
| X10 | s35 o carimbo YES maior que o NO (77.4 %) | CONFIRMADA | "Yes 159,781 77.4%" | B94 |
| X11 | s44 o Yukon aceso onde as estradas de Haines e Skagway chegam à Alaska Highway | CONFIRMADA | "…Alaska Highway at Haines Junction, Yukon Territory … near Whitehorse, Yukon Territory" | FS |
| X12 | s49 o ponteiro da balança em 79 votos | CONFIRMADA | 5,840 − 5,761 = 79 | FS |
| X13 | s52 o grifo na página original do 9º Circuito | CONFIRMADA | "The district court vacated the FHWA’s Record of Decision (“ROD”)" (p. 4), literal | CA9 |
| X14 | s54 a linha diária de 748 pontos e o colchete em quartos | CONFIRMADA | de 116.26 a 26.23: queda de 77.44 % (mais de três quartos) | DOR, FS |
| X15 | s56 seis círculos cheios de nove | CONFIRMADA | "voted 6-3 to pass the resolution" | KT17 |
| X16 | s58 o grifo na página original do Federal Register | CONFIRMADA | "The selected alternative was the No Action Alternative." | FR |

## Achados

**Nenhum achado muda a tela.** Não há DIVERGE nem REFUTADA. Todas as citações conferem letra a letra, e a aritmética interna fecha: 79 votos, 2.05 : 1, 55.68 %, 54.7 %, 77.44 %, 28 %.

- **[LEVE] O1: a checagem do placar de 1982 não está no dossiê.** A Divisão de Eleições publica dois números para o sim da Ballot Measure No. 8. A lista-resumo H29 e o ADN dão 91,249. O boletim por distrito dá 91,049, e os 27 totais de distrito somam exatamente 91,049 e 102,083. A tela está certa.
  - CONSERTO: nenhum na tela. No `roteiros/juneau/roteiro-editor.md`, na linha f-052, acrescentar: "Os 27 totais de distrito do boletim (pp. 41–47) somam 91,049 sim e 102,083 não; o 91,249 do H29 e do ADN não fecha com o boletim."
  - RAIZ: PONTUAL.
- **[LEVE] O3: a roupa do verificador está desatualizada.** O `marca/agentes/verificador-de-fatos.md` §0 ainda diz que "o gasto de pedidos na MapTiler ainda não foi liberado". O CLAUDE.md registra a liberação de 28/09 para o Juneau. Não afeta a tela.
  - CONSERTO: trocar a frase por "No Juneau, o gasto está liberado, com o relevo 3D só em s44 (Lucas, 28/09/2026; identidade §6); o contador se anota antes e depois da primeira cena de mapa."
  - RAIZ: INSTRUÇÃO.

**Observações, sem conserto:**
- **O2.** `MAT-SU VALLEY` (s15 e s39) está sobre o polígono do Matanuska-Susitna Borough, que é maior que o vale. O folheto de 2002 fala em "Matanuska-Susitna (Mat-Su) Borough". "Mat-Su Valley" é o termo da voz e o uso corrente. Trocar por `MAT-SU BOROUGH` afastaria a tela da voz sem ganho. Recomendo manter.
- **O4.** Em s08, `1914` (a fundação de Anchorage) e `Photo from 1915` ficam na mesma foto. Os dois estão certos, mas o `1914` pode ser lido como a data da foto. É leitura, não fato: fica para o redator-de-tela e o qc-visual.
- **O5.** O card de Kiehl não é volátil antes de janeiro de 2029: o mandato é da eleição de 2024.

## Lista de nomes (quem está por trás de cada coisa sem nome na tela)

- `OPPONENTS` (s31): os grupos contra a mudança que Reamer nomeia. Alaska Committee (presidente, Jim Clark); FRANK; Fairbanks Against Relocation Expenditures (FARE); Anchorage Rejects the Move (ARM). Fonte: ADN.
- A fala de s18 ("their statement"): Frank Harris, Chairman, Taxpayers Capital Relocation Committee, 1978, p. 49 (P78). Não vai à tela, por decisão do roteiro.
- `ATTORNEY GENERAL OPINION · 1993`: Charles E. Cole, Attorney General, na carta de 24/8/1993 ao vice-governador John B. "Jack" Coghill (AG).
- `ALASKA SUPREME COURT · 1974`: opinião do Chief Justice Rabinowitz (BOU).
- `Upheld on appeal, 2011`:
  - a opinião é da juíza Mary M. Schroeder, com voto vencido de Diarmuid F. O'Scannlain;
  - a anulação de 2009 é do juiz distrital John W. Sedwick (CA9).
- `RECORD OF DECISION · 2018` e `JUNE 2018`: Sandra A. Garcia-Aline, FHWA Alaska Division Administrator, que assina o aviso de 23/7/2018 (FR).
- `ABOUT 90%` (s53): o estudo cita "Knapp, G. 2015. 'An Introduction to Alaska Fiscal Facts and Choices.' Institute of Social and Economic Research, University of Alaska Anchorage" (FS, referências).
- `HOUSE BILL NO. 3`: o deputado G. Nelson, autor principal desde 13/02/2026, e os coautores (HB3, VOL).
- `Daily oil price`: estimativa diária ANS West Coast do Alaska Department of Revenue, Tax Division (DOR).
- `FERRY 5,840 · ROAD 5,761`: a consulta de Juneau de outubro de 2000, citada pelo estudo a partir do FEIS de 2006. O resultado municipal original não foi aberto, e a nota do arquivo já declara isso.

## Voláteis

**`STILL LAW` e `AS OF SEPTEMBER 2026` em s36 e s61 (AS 44.06.055 vigente).**
- Conferidos no navegador do app em 26/09/2026 (`volateis-conferidos.md`). Hoje não se reabriram: akleg.gov recusa robô.
- O que muda o fato: o HB 3 aprovado, que revogaria a lei a partir de 1/1/2027, ou uma proposta nova na 35ª Legislatura.

**`AS OF SEPTEMBER 2026` em s40 (o HB 3 em "(H) CRA" desde 22/1/2025).**
- Conferido em 26/09/2026.
- A sessão regular de 2026 terminou em maio. A busca achou o título "More than 80% of Alaska bills failed this session", do ADN de 27/05/2026, mas a leitura da página falhou (ECONNRESET).
- O que muda o fato: uma audiência numa sessão especial. O fim da 34ª Legislatura, em janeiro de 2027, mata o projeto: dali em diante a voz do p25 pede ajuste.
- Reconferir os três na véspera de publicar.

**O card de Kiehl** (`Alaska state senator, Juneau`) é estável até janeiro de 2029, salvo renúncia (WIK, lida em 28/09/2026).

## Data-base

Checagem de **28/09/2026**. Datas de cada parte:
- voláteis: 26/09/2026, no navegador do app;
- vereditos de mídia, com a leitura da origem: 27/09/2026;
- série do DOR, lida pelo Claude central: 28/09/2026;
- mandato de Kiehl: 28/09/2026.

## DECISÃO DO LUCAS PENDENTE (as que tocaram esta checagem)

- Onde gravar os laudos dos próximos vídeos (roupa §2). Este vai para `roteiros/juneau/qc-roteiro/fatos-tela.laudo.md`, como o pedido diz.
- Se a rubrica e as leis do Top10 (`knowledge/roteiro/PESQUISA-HONESTIDADE.md`, `seed/regras/ROT.md`) valem neste canal (roupa §0).
- A caça no Shutterstock só roda com o pedido do Lucas. É ela que decide se K75, K76 e o crédito do artista vão à tela.
- A data de publicação: depois de janeiro de 2027, os voláteis de s36, s40 e s61 e a voz do p25 pedem ajuste.
- A cópia arquivada de site que não é do Estado do Alasca: a pergunta não foi feita. Nesta checagem, nenhuma foi usada.

## Os 2 padrões mais vistos

1. Onde a tela diz mais que a voz, há fonte primária na mão: as contagens de voto, 1880, 1914, Ladd Field, `BRITISH COLUMBIA` e `Taku Inlet` conferem todas.
2. Onde duas publicações oficiais divergem, o boletim por distrito vence e fecha na soma, e a tela está com ele nas duas vezes:
   - 1962: o H26 dá 26,452, e o boletim dá 26,542;
   - 1982: o H29 e o ADN dão 91,249, e o boletim dá 91,049.

VEREDITO: PASS
