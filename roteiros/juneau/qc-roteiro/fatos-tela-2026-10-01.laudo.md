<!-- Laudo do verificador-de-fatos (conversa "Juneau · verificador-de-fatos", 01/10/2026), copiado da mensagem final
dele pelo Claude central, sem mudar uma palavra: o ofício do verificador não tem Write. O laudo de 28/09 continua em
fatos-tela.laudo.md. -->

## Nota do Claude central (01/10/2026, 13:0x), sobre o F1

- **A escolha:** o conserto na arte, o recomendado pelo laudo. As feições do sítio de Willow se cortam ao trecho em volta
  do anel, e o texto `Proposed site` fica como está; o `textos-tela.json` não muda.
- **Por que é minha:** o laudo deixa a escolha ao Claude central quando as cenas não têm o ok do Lucas, e a s15 e a s24
  não têm.
- **Por que essa:** a s15 e a s24 já voltam ao render pela lente motion do qc-visual. O corte das linhas não pede render a mais.
- **Quem faz:**
  - o `pesquisa-geo`: a camada cortada e a ressalva no `pauta-geo.json`, que é o conserto da raiz;
  - o mapista: a s15, a s24 e a s21, que usa a mesma camada.
- **O passo:** o `screen_text` avança, porque a ressalva é da arte, não do texto.

COBERTURA: 410 de 410, com o denominador tirado de `out/juneau/textos-tela.json` inteiro (sha256 `98e3e7f880af6da07a724a0be7b3066931c0981a23b364721ad5ca8baa8ba5d5`, commit `c5c0dff`; a cópia de trabalho é igual ao HEAD)

NOTA: 9.0/10. Uma afirmação nova diverge da fonte: a legenda `Proposed site`, em s15 e s24, nomeia as feições que limitam o sítio de Willow, desenhadas inteiras (o Little Susitna vai até Cook Inlet), e não o sítio. Todo o resto confere, inclusive os 319 itens iguais byte a byte aos de 28/09. O meio ponto a menos que em 28/09 é esse achado.

# Laudo de fatos da tela: Juneau, passo `screen_text`, revisão de 01/10/2026

- **O que foi checado:** `out/juneau/textos-tela.json`, sha256 `98e3e7f8…a5d5`, commit `c5c0dff`.
- **A base:** o laudo de 28/09 (`roteiros/juneau/qc-roteiro/fatos-tela.laudo.md`, 351 de 351, sobre o sha `6b3174cd…`, commit `71768f6`). A cópia de antes, `out/juneau/_tmp/textos-tela-antes-2026-10-01.json`, tem esse mesmo sha.
- **Quem checou:** o `verificador-de-fatos`, na conversa "Juneau · verificador-de-fatos" (01/10/2026, Opus). Só usei duas das ferramentas do cabeçalho do ofício, Bash e Read.

**Como a lista foi derivada.** O canal não tem extrator para texto de tela. A lista saiu da estrutura do arquivo, lida com Python só para leitura, e foi completada à mão, como em 28/09:

| parte | itens |
|---|---|
| `cards_pessoa`: 13 cards × 2 textos (nome e cargo) | 26 |
| `rotulos_dado`, com as 8 reaparições marcadas com `_herdado_de` | 270 |
| `_creditos` | 80 |
| `_avisos_de_ano` | 17 |
| **textos de tela** | **393** |
| afirmações que vão à tela sem texto próprio (X01–X17), lidas à mão nas `_nota` e em `nao_vai_para_tela` | 17 |
| **total** | **410** |

- **Fora do denominador**, porque não vão à tela: `nao_vai_para_tela` (73), `glossario` (87), `_formas_de_serie` (17), `_creditos_regras`, `_avisos_regras`, `_sem_texto`, `_entradas` e `_revisao_2026_10_01` (22).
- **Os ids** seguem a posição de cada item no arquivo novo (R001–R270, K01–K80, A01–A17), como em 28/09 seguiam a do arquivo de antes. Cada linha herdada diz qual era o id dela em 28/09.

**O confronto com 28/09.** Feito com Python, só leitura. "Igual" quer dizer o objeto inteiro, com a ordem dos campos, byte a byte.

| parte | iguais | mudou só a nota ou a cobertura | mudou de cena (fusão) | novos | saíram |
|---|---|---|---|---|---|
| cards | 13 (26 textos) | 0 | 0 | 0 | 0 |
| rótulos | 201 | 14 | 6 | 49 | 0 |
| créditos | 65 | 6 | 2 | 7 | 3 |
| avisos | 12 | 0 | 0 | 5 | 0 |
| X | 15 | 0 | 1 (X13) | 1 (X17) | 0 |

- **No total:** 319 itens iguais, que herdam o veredito; 29 mudados, conferidos de novo; 62 novos, com veredito próprio.
- **Os 14 rótulos que mudaram** têm `na_tela`, `fonte`, `data` e `unidade` iguais. Só a `_nota` mudou (o tempo e o lugar no quadro). Li cada nota nova, e nenhuma muda o que a tela afirma. Duas melhoram: o `1993` e o `2003` de s44 agora ficam junto do corredor do Taku, que foi o que a Colúmbia Britânica (B.C.) recusou nesses anos.
- **Os 6 que mudaram de cena** são as fusões s42←s43 e s50←s51 e s52, com texto e fonte iguais. Nos créditos, as duas linhas de s43 (a do estudo e a da MapTiler) também foram para s42.
- **Os 3 créditos que saíram:**
  - o K62 de 28/09 (s51), juntado à linha de s50 (hoje K67);
  - o K75 e o K76, a linha do Shutterstock. Nenhum item do vídeo vem de lá. Os 51 candidatos do `conferencia-midia.json` vêm do Commons (30), da NARA (3), de jornal (3), do Envato (3), da Storyblocks (2) e de órgãos de governo, e não há arquivo do Shutterstock em `out/juneau/_media/`.
- **O resultado:**
  - 405 CONFIRMADA;
  - 3 NADA A CHECAR: R087, R268 e R270, o `$` gráfico, herdados;
  - 2 DIVERGE: R072 e R111, a legenda `Proposed site`;
  - 0 REFUTADA, 0 NÃO ACHEI e 0 NÃO FOI CHECADO.
- **CHECADO E LIMPO**, menos a legenda `Proposed site`.

**O que não se reabriu:**
- o roteiro narrado (`fatos.laudo.md`, rodada 6, PASS);
- os 319 itens iguais: herdam o veredito, com as datas do laudo de 28/09;
- os voláteis: o akleg.gov recusa robô, e eles foram conferidos em 26/09;
- a origem das fotos: o conferente a leu em 30/09, por volta das 23:45Z. O WebFetch não manda o User-Agent do canal, e o pedido manda conferir contra o veredito.

**A rede nesta checagem:** nenhuma.
- Tudo saiu das cópias locais: o folheto de 1976, o estudo de 2018, a decisão do 9º Circuito, a lista da FAA, o histórico H26 da Divisão de Eleições, os dumps do OSM e as camadas do NE e do NHD.
- O resto saiu do `conferencia-midia.json` de 01/10 (sha256 `fc52df57…`).
- Nenhum site que recusa robô foi aberto.

**O que se olhou na imagem.** Para saber o que a legenda `Proposed site` nomeia na tela, tirei 4 quadros dos MP4 já renderizados com o ffmpeg (s15 aos 3,0, 10,5 e 14,0 s; s24 aos 2,0 s). Ficaram em 1600 px, só na pasta temporária da sessão, e não houve render novo. É olhar, não portão.

**Os arquivos dos avisos.** Os 17 arquivos de `_avisos_de_ano` existem em `out/juneau/_media/foto/`. Cada um casa com um veredito `aprovado` pelo sha256 do rascunho gravado na `_PROCEDENCIA.json`. O A06 cita também a reserva 204947416, que está na mesma pasta. O `conferencia-midia.json` de 01/10 dá às fotos herdadas os mesmos créditos, lugares e datas que o laudo de 28/09 conferiu.

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
| H26 | Initiative History (Rev 08/02/2021); cópia local `midia/juneau/fontes/documento/h26.txt` | https://www.elections.alaska.gov/doc/forms/H26.pdf (web/20250920075110) |
| H29 | lista de medidas (Rev 03/10/2010) | http://www.elections.alaska.gov/doc/forms/H29.pdf (web/20100527092549) |
| P76 | Official Election Pamphlet 1976, pp. 47–48; cópia local `oep76.ocr.txt` | http://www.elections.alaska.gov/doc/oep/1976/1976-Ballot-Prop-Bond-Prop.pdf (web/20161230104844) |
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
| FS | Final SEIS e Record of Decision, 2018 (cópia local `midia/juneau/fontes/triagem/fseis.txt`) | https://dot.alaska.gov/juneauaccess/assets/2018_FSEIS_Figures/Full_Final_SEIS_-_Text_Only.pdf |
| CA9 | SEACC v. FHWA, 9º Circuito, 4/5/2011 (cópia local `ca9.txt`) | https://cdn.ca9.uscourts.gov/datastore/opinions/2011/05/04/09-35551.pdf |
| FR | 83 FR 36661 (30/7/2018) | https://www.govinfo.gov/content/pkg/FR-2018-07-30/pdf/2018-16263.pdf |
| DOR | Dept. of Revenue, ANS West Coast diário (série em `out/juneau/_dados/s54.json`) | https://tax.alaska.gov/programs/oil/dailyoil/dailyoilold.aspx |
| NE | Natural Earth (camadas em `out/juneau/_media/geo/`, `pauta-geo.json`) | https://www.naturalearthdata.com/about/terms-of-use/ |
| OSMW / OSMH / OSMT / OSMA | OSM: Willow, Haines, Taku River, Alaska Highway | https://www.openstreetmap.org/node/150916708 · /node/150921918 · /relation/16167118 · /relation/326897 |
| GTI / GLC | USGS GNIS: Taku Inlet, Lynn Canal | https://edits.nationalmap.gov/apps/gaz-domestic/public/summary/1410576 · …/1423488 |
| TIG | TIGERweb, GEOID 02170 | https://tigerweb.geo.census.gov/arcgis/rest/services/Generalized_ACS2025/State_County/MapServer/11 |
| WIK | Jesse Kiehl (lida em 28/09/2026) | https://en.wikipedia.org/wiki/Jesse_Kiehl |
| MT | crédito da MapTiler (identidade §6; `canal.json` › `mapa.perfil`) | https://www.maptiler.com/copyright/ |
| ID6 | aviso de rota aproximada | `marca/identidade.md` §6 |
| F01 | s01 p1, Gillfoto | https://commons.wikimedia.org/wiki/File:1A_Downtown_Juneau_87_19.jpg |
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
| **novas nesta revisão** | | |
| F01b | s01 p2, Gillfoto, o Capitólio em 4/3/2017 | https://commons.wikimedia.org/wiki/File:2017_Alaska_State_Capitol_gf7174.jpg |
| F01c | s01 p3, o clipe do Envato "Juneau Alaska aerial push in" (BlackBoxGuild) | https://app.envato.com/search/stock-video/3d75979c-8075-4d14-b5be-64479e0e944e |
| F04a | s04 p1, Gillfoto, a Kennicott em 30/9/2020 | https://commons.wikimedia.org/wiki/File:Alaska_Kennicott_AB_018.jpg |
| F04b | s04 p2, Gillfoto, o jato em 5/12/2018 | https://commons.wikimedia.org/wiki/File:Juneau_Landing_681.jpg |
| F14a | s14 p1, Gillfoto, a fachada em 5/9/2017 | https://commons.wikimedia.org/wiki/File:Juneau_Building_Jul2017_28.jpg |
| F14b | s14 p2, Carol M. Highsmith (LoC, LCCN 2010630417), 5/8/2008 | https://commons.wikimedia.org/wiki/File:State_Capitol,_front_elevation_detail,_Juneau,_Alaska_LCCN2010630417.tif |
| F24 | s24 p2, Jay Galvin, 31/8/2010 | https://commons.wikimedia.org/wiki/File:Alaska_State_Capitol_Building.jpg |
| F40 | s40, o clipe do Envato "aerial orbit anchorage alaska" (BlackBoxGuild) | https://app.envato.com/search/stock-video/5dd2693f-944b-496b-9f48-32de5903b639 |
| F47 | s47, Gillfoto, a LeConte em 29/4/2009 | https://commons.wikimedia.org/wiki/File:LeConte_Chilkat_Range_44.jpg |
| F51 | s50#3 (s51 p1), LCGS Russ, Eldred Rock em 15/5/2011 | https://commons.wikimedia.org/wiki/File:LynnCanal_EldredRock.jpg |
| F53 | s53, os dois clipes da Storyblocks (SBV-353117815 e SBV-353117807) | https://www.storyblocks.com/video/stock/aerial-view-of-the-trans-alaska-pipeline-system-winding-through-a-vibrant-forest-with-the-backdrop-of-distant-mountains-fairbanks-alaska-united-states-353117815 · https://www.storyblocks.com/video/stock/aerial-view-of-the-long-trans-alaska-pipeline-system-cutting-through-a-dense-forest-contrasting-against-the-natural-landscape-fairbanks-alaska-united-states-353117807 |
| FAA | FAA, CY2024 Enplanements at All Commercial Service Airports, posição 148 (cópia local `faa_cy2024.pdf`, p. 4) | https://www.faa.gov/airports/planning_capacity/passenger_allcargo_stats/passenger/arp-cy2024-commercial-service-enplanements.pdf |
| OSM7 | OSM, Alaska Route 7 (route=road; dump `osm-estrada-juneau-thane.json`) | https://www.openstreetmap.org/relation/535397 |
| OSMR | OSM: Glenn Highway, George Parks Highway (os dois sentidos), Haines Highway, Klondike Highway (×2), Alaska Route 1 e Tok Cut-Off, todos com route=road (dumps em `out/juneau/_tmp/geo-fontes/`) | https://www.openstreetmap.org/relation/16266162 · /7636966 · /7636967 · /16265497 · /8747347 · /5385974 · /326212 · /16204311 |
| OSMF | OSM: "Juneau - Haines" e "Haines - Skagway", route=ferry, operator "Alaska Marine Highway" (dump `osm-balsa-lynn-relacoes.json`) | https://www.openstreetmap.org/relation/12533329 · /12533328 |
| GEO35 | a camada `limites-sitio-willow-1976`: `pauta-geo.json`, item 35, e o cabeçalho de `out/juneau/_pesquisa/geo-sitio-willow-1976.mjs`; o Deception Creek é do USGS NHD (gnis_id 01401055) | https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/6 |
| ID6L | "A legenda das cores, no lugar do nome na linha" (Lucas, 01/10/2026) | `marca/identidade.md` §6 |

**Contra o que se conferiram os itens F.** Os itens F (lugar, crédito e ano) se conferiram contra o veredito do conferente em `out/juneau/_pesquisa/conferencia-midia.json` (01/10/2026, sha256 `fc52df57…`). Para as fotos novas, ele registra a leitura da origem em 30/09/2026, por volta das 23:45Z. A chave SS (a linha do Shutterstock) saiu desta tabela junto com o K75 e o K76 de 28/09.

## Tabela de vereditos

| id | afirmação (tela) | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| C01n | s05 `FRANK W. HARRIS` | CONFIRMADA · herdada de C01n | "—Frank W. Harris, Chairman / Capital Access Committee, Inc." (p. 90) | P82 |
| C01c | s05 `Chairman, Capital Access Committee (1982)` | CONFIRMADA · herdada de C01c | idem; o ", Inc." sai (AP) | P82 |
| C02n | s25 `FRANK W. HARRIS` | CONFIRMADA · herdada de C02n | idem | P82 |
| C02c | s25 `Chairman, Capital Access Committee (1982)` | CONFIRMADA · herdada de C02c | idem | P82 |
| C03n | s25 `JIM CLARK` | CONFIRMADA · herdada de C03n | "—Jim Clark, Chairman / Alaska Committee" (p. 90) | P82 |
| C03c | s25 `Chairman, Alaska Committee (1982)` | CONFIRMADA · herdada de C03c | idem | P82 |
| C04n | s26 `LEE STOOPS` | CONFIRMADA · herdada de C04n | "Enter Lee Stoops, then an aide for state Sen. John Sackett." | ADN |
| C04c | s26 `Legislative aide (1982)` | CONFIRMADA · herdada de C04c | idem; carreira: "legislative aide" | ADN |
| C05n | s27 `LEE STOOPS` (herdado) | CONFIRMADA · herdada de C05n | idem | ADN |
| C05c | s27 `Legislative aide (1982)` (herdado) | CONFIRMADA · herdada de C05c | idem | ADN |
| C06n | s31 `LEE STOOPS` | CONFIRMADA · herdada de C06n | idem | ADN |
| C06c | s31 `Legislative aide (1982)` | CONFIRMADA · herdada de C06c | idem | ADN |
| C07n | s31 `DAVID REAMER` | CONFIRMADA · herdada de C07n | "By David Reamer / Histories of Alaska" | ADN |
| C07c | s31 `Columnist, Anchorage Daily News` | CONFIRMADA · herdada de C07c | "a continuing weekly series on Alaska history by local historian David Reamer" (coluna semanal) | ADN |
| C08n | s31 `DAVE DITTMAN` | CONFIRMADA · herdada de C08n | "Dittman Research founder Dave Dittman" | ADN |
| C08c | s31 `Pollster, Dittman Research (1982)` | CONFIRMADA · herdada de C08c | fundador do instituto que fez a pesquisa de set./1982 | ADN |
| C09n | s31 `BRIAN RAE` | CONFIRMADA · herdada de C09n | "by Brian N. Rae"; "Brian Rae is a labor economist…" | TR90 |
| C09c | s31 `Labor economist, Alaska Department of Labor` | CONFIRMADA · herdada de C09c | "a labor economist employed with the Research & Analysis Section, … Alaska Department of Labor" | TR90 |
| C10n | s41 `JESSE KIEHL` | CONFIRMADA · herdada de C10n | "Juneau Democratic Sen. Jesse Kiehl" | KT25 |
| C10c | s41 `Alaska state senator, Juneau` | CONFIRMADA · herdada de C10c | KTOO 2025; senador em exercício, distrito B, eleito em 2018 e 2024 | KT25, WIK |
| C11n | s48 `TONY KNOWLES` | CONFIRMADA · herdada de C11n | "In January 2000, Governor Tony Knowles announced…" | CA9 |
| C11c | s48 `Governor of Alaska` | CONFIRMADA · herdada de C11c | idem | CA9 |
| C12n | s55 `BILL WALKER` | CONFIRMADA · herdada de C12n | "On December 15, 2016, Governor Bill Walker of Alaska announced…" (§1.1) | FS |
| C12c | s55 `Governor of Alaska` | CONFIRMADA · herdada de C12c | idem | FS |
| C13n | s57 `MARIA GLADZISZEWSKI` | CONFIRMADA · herdada de C13n | "So did Assembly member Maria Gladziszewski." | KT17 |
| C13c | s57 `Assembly member, City and Borough of Juneau (2017)` | CONFIRMADA · herdada de C13c | cargo em jan./2017 (KTOO); o nome da prefeitura é decisão do Lucas de 28/09 | KT17, CBJ2 |
| R001 | s01 `AUG. 27, 1974` | CONFIRMADA · herdada de R001 | "Primary Election / August 27, 1974" | B74 |
| R002 | s01 carimbo `YES` | CONFIRMADA · herdada de R002 | Initiative #1 aprovada (FOR 46,659) | B74 |
| R003 | s01 `57% · 46,659 to 35,683` | CONFIRMADA · herdada de R003 | 46,659/82,342 = 56.66 % dos votos dados à pergunta (nunca "of Alaska voters": 55.2 % dos 84,585) | B74 |
| R004 | s01 `Juneau, Alaska` | CONFIRMADA · herdada de R004 | "at the center of downtown Juneau, Alaska" | F01 |
| R005 | s01 p2 `Alaska State Capitol` | CONFIRMADA · nova | lugar_na_origem "Alaska State Capitol Building, Fourth St, Juneau, Alaska." (veredito aprovado de 01/10) | F01b |
| R006 | s01 p3 `Juneau, Alaska` (clipe do Envato) | CONFIRMADA · nova | lugar_na_origem "Juneau Alaska aerial push in" | F01c |
| R007 | s02 `BALLOT MEASURE NO. 8` | CONFIRMADA · herdada de R005 | "BALLOT MEASURE NO. 8 (cont.)" (pp. 89–90) | P82 |
| R008 | s02 "Considering the cost… (estimated to total $" (literal) | CONFIRMADA · herdada de R006 | p. 88, letra a letra até o cifrão | P82 |
| R009 | s03 `Juneau` | CONFIRMADA · herdada de R007 | ponto do NE | NE |
| R010 | s03 `UNITED STATES` | CONFIRMADA · herdada de R008 | NE admin 0 | NE |
| R011 | s03 `CANADA` | CONFIRMADA · herdada de R009 | NE admin 0 | NE |
| R012 | s03 `ABOUT 43 MILES` | CONFIRMADA · herdada de R010; só a _nota mudou (entra em 'miles') | "extends approximately 43 miles to the north where Glacier Highway terminates at Cascade Point" (p. 1-8); régua do OSM com 41.9 mi, declarada | FS |
| R013 | s03 `Cascade Point` | CONFIRMADA · herdada de R011 | idem | FS |
| R014 | s03 legenda `Border` | CONFIRMADA · nova | a linha é a divisa EUA–Canadá do NE admin 0; a palavra é a da identidade §6 ("A fronteira é 'Border'") | NE, ID6L |
| R015 | s03 legenda `Roads` | CONFIRMADA · nova | a malha do continente, NE ne_10m_roads | NE |
| R016 | s03 legenda `Juneau’s roads` | CONFIRMADA · nova | OSM relation/535397 "Alaska Route 7" (route=road), do centro a Cascade Point; a voz: "Its roads run about forty-three miles north" | OSM7, FS |
| R017 | s04 p1 `Stephens Passage` | CONFIRMADA · nova | lugar_na_origem "…heading to Auke Bay, Stephens Passage, Southeast Alaska."; o veredito limita o rótulo a Stephens Passage ou Southeast Alaska; grafia do FS ("Icy Strait, Lynn Canal, Stephens Passage, Frederick Sound") | F04a, FS |
| R018 | s04 p2 `Juneau International Airport` | CONFIRMADA · nova | lugar_na_origem "Commercial jet landing at Juneau Airport"; FAA, posição 148: "JNU Juneau Juneau International" (o mesmo lugar, pelo nome oficial) | F04b, FAA |
| R019 | s05 `(1982)` | CONFIRMADA · herdada de R012 | assinatura do folheto de 1982 | P82 |
| R020 | s05 “is so expensive …” | CONFIRMADA · herdada de R013 | "…is so expensive and time consuming that…" (reticências = "and time consuming") | P82 |
| R021 | s05 “that few ordinary citizens are able to go there.” | CONFIRMADA · herdada de R014 | literal, p. 90 | P82 |
| R022 | s06 `Juneau, Alaska` (p1) | CONFIRMADA · herdada de R015 | "Juneau, Alaska harbor and the Gastineau Channel looking NW" | F06a |
| R023 | s06 `1880` | CONFIRMADA · herdada de R016 | "A day after the discovery–October 4, 1880–the miners wrote a 'Code of Local Laws'" | CBJ |
| R024 | s06 `Juneau, Alaska` (p2) | CONFIRMADA · herdada de R017 | "Juneau City"; "harbor at Juneau, Alaska" | F06b |
| R025 | s07 `1900` | CONFIRMADA · herdada de R018 | lei de 6/6/1900 | S00 |
| R026 | s07 "The temporary seat of government … at Juneau." (literal) | CONFIRMADA · herdada de R019 | Sec. 1, letra a letra | S00 |
| R027 | s07 `Sitka, Alaska` | CONFIRMADA · herdada de R020 | lugar_na_origem "Sitka, Alaska" | F07 |
| R028 | s07 `Sitka` | CONFIRMADA · herdada de R021 | ponto do NE | NE |
| R029 | s07 `Juneau` | CONFIRMADA · herdada de R022 | ponto do NE | NE |
| R030 | s07 `1906` | CONFIRMADA · herdada de R023 | "on September 8 moved the executive office to Juneau" | G06 |
| R031 | s07 `1912` | CONFIRMADA · herdada de R024 | lei de 24/8/1912 | S12 |
| R032 | s07 "That the capital of the Territory of Alaska…" (literal) | CONFIRMADA · herdada de R025 | Sec. 2, letra a letra; grifo = trecho que a voz cita | S12 |
| R033 | s08 `1914` | CONFIRMADA · herdada de R026 | "…spawned the city of Anchorage in 1914." (PDF p. 11) | POP |
| R034 | s08 `Ladd Field` | CONFIRMADA · herdada de R027 | "on the line in front of Operations at Ladd Field" | F09b |
| R035 | s08 `Anchorage` | CONFIRMADA · herdada de R028 | ponto do NE | NE |
| R036 | s08 `Fairbanks` | CONFIRMADA · herdada de R029 | ponto do NE | NE |
| R037 | s08 `BRITISH COLUMBIA` | CONFIRMADA · herdada de R030 | "Fort St. John Sector, ALCAN Highway, north of Charlie Lake" (na Colúmbia Britânica; o rótulo é mais largo que a origem) | F10 |
| R038 | s08 `CANADA` | CONFIRMADA · herdada de R031 | NE admin 0 | NE |
| R039 | s08 `ROUGHLY 15%` | CONFIRMADA · herdada de R032 | "about 15 percent of the population in 1940" (PDF p. 14) | POP |
| R040 | s08 `1940` | CONFIRMADA · herdada de R033 | idem | POP |
| R041 | s08 `1960` | CONFIRMADA · herdada de R034 | "By 1960, … more than half of Alaska's population" | POP |
| R042 | s08 (s10 p2) legenda `Border` | CONFIRMADA · nova | NE admin 0 | NE, ID6L |
| R043 | s08 (s10 p2) legenda `Roads` | CONFIRMADA · nova | OSM "Alaska Highway" (relation/326897), "Alaska Route 1" (/326212) e "Tok Cut-Off" (/16204311), route=road; NE ne_10m_roads | OSMA, OSMR, NE |
| R044 | s11 `1960` | CONFIRMADA · herdada de R035 | primária de 9/8/1960 | B60 |
| R045 | s11 `NO` | CONFIRMADA · herdada de R036 | rejeitada | B60 |
| R046 | s11 `23,972 to 18,865` | CONFIRMADA · herdada de R037 | "TOTAL 18,865 23,972" (FOR/AGAINST); o H26 dá o mesmo | B60, H26 |
| R047 | s11 `1962` | CONFIRMADA · herdada de R038 | geral de 6/11/1962 | B62 |
| R048 | s11 `NO` | CONFIRMADA · herdada de R039 | rejeitada | B62 |
| R049 | s11 `32,325 to 26,542` | CONFIRMADA · herdada de R040 | "STATEWIDE TOTALS 60,084 26,542 32,325" (Yes/No); o 26,452 do H26 não fecha com as parciais | B62 |
| R050 | s11 `AUGUST 1974` | CONFIRMADA · herdada de R041 | 27/8/1974 | B74 |
| R051 | s11 `YES` | CONFIRMADA · herdada de R042 | aprovada | B74 |
| R052 | s11 `46,659 to 35,683` | CONFIRMADA · herdada de R043 | p. 48 | B74 |
| R053 | s12 `80% YES` | CONFIRMADA · herdada de R044 | distritos 7–12: 27,064 × 6,781 = 79.96 % (somas refeitas na imagem) | B74 |
| R054 | s12 `SOUTHEAST` | CONFIRMADA · herdada de R045 | distritos 1–4 sob "SOUTHEASTERN" | B74 |
| R055 | s12 `ABOUT 94% NO` | CONFIRMADA · herdada de R046 | distritos 1–4: 948 × 15,371 = 94.19 % não | B74 |
| R056 | s12 `NEARLY EVEN` | CONFIRMADA · herdada de R047; só a _nota mudou (sai em 14,067) | distrito 20: 5,381 × 5,243 = 50.65 % | B74 |
| R057 | s12 `30 MILES` | CONFIRMADA · herdada de R048; só a _nota mudou (entra com os círculos fechados) | "none of which may be within a radius of 30 miles of the City of Anchorage or Fairbanks" | P76 |
| R058 | s12 `ALASKA SUPREME COURT · 1974` | CONFIRMADA · herdada de R049 | decisão de 15/11/1974 | BOU |
| R059 | s12 "We therefore hold that the exclusion…" (literal) | CONFIRMADA · herdada de R050 | letra a letra | BOU |
| R060 | s12 `ATTORNEY GENERAL OPINION · 1993` | CONFIRMADA · herdada de R051 | 24/8/1993, "Charles E. Cole / Attorney General" | AG |
| R061 | s12 "Applying this test, the court upheld the initiative…" (literal) | CONFIRMADA · herdada de R052 | p. 4, letra a letra | AG |
| R062 | s12 legenda `Border` | CONFIRMADA · nova | NE admin 0 | NE |
| R063 | s12 legenda `Excluded zone` | CONFIRMADA · nova | "…none of which may be within a radius of 30 miles of the City of Anchorage or Fairbanks" (p. 47); Boucher: "the exclusion of Anchorage and Fairbanks"; os raios são os do 30 MILES | P76, BOU |
| R064 | s14 p1 `Alaska State Capitol` | CONFIRMADA · nova | "The Alaska State Capitol with new brick and stone siding" | F14a |
| R065 | s14 p2 `Alaska State Capitol` | CONFIRMADA · nova | "State Capitol, front elevation detail, Juneau, Alaska"; "Located in the state capital of Juneau on Main Street" | F14b |
| R066 | s15 `56,219` | CONFIRMADA · herdada de R053 | "Willow 56,219" | B76 |
| R067 | s15 `33,170` | CONFIRMADA · herdada de R054 | "Larson Lake 33,170" | B76 |
| R068 | s15 `16,169` | CONFIRMADA · herdada de R055 | "Mount Yenlo 16,169" | B76 |
| R069 | s15 `Willow` | CONFIRMADA · herdada de R056 | OSM node/150916708 | OSMW |
| R070 | s15 `MAT-SU VALLEY` | CONFIRMADA · herdada de R057 | polígono do Matanuska-Susitna Borough; o termo é o da voz (obs. O2) | TIG |
| R071 | s15 `ABOUT 70 MILES` | CONFIRMADA · herdada de R058; só a _nota mudou (entra em 'miles') | "approximately 70 road miles north of Anchorage" (p. 48); régua sobre a estrada real, 68.2 mi | P76 |
| R072 | s15 legenda `Proposed site` | DIVERGE · nova | p. 48: "The site is generally bounded by Willow Creek to the north, the Little Susitna River to the south and the Alaska Railroad to the west", e a cidade ficaria "adjacent to the Deception Creek". A linha nomeada são as 4 feições inteiras, com o Little Susitna até Cook Inlet; quem a fez escreveu "NÃO são o local" (achado F1) | P76, GEO35 |
| R073 | s15 legenda `Roads` | CONFIRMADA · nova | OSM "Glenn Highway" (relation/16266162) e "George Parks Highway" (/7636966, /7636967), route=road | OSMR |
| R074 | s16 `Fairbanks, Alaska` (p1) | CONFIRMADA · herdada de R059 | "DOWNTOWN FAIRBANKS, VIEW SOUTHWEST…" | F16a |
| R075 | s16 `Fairbanks, Alaska` (p2) | CONFIRMADA · herdada de R060 | "United States, Alaska, Fairbanks…" | F16b |
| R076 | s16 `EARLY 1977` | CONFIRMADA · herdada de R061 | "organized in Fairbanks in early 1977" (p. 49) | P78 |
| R077 | s16 `FRANK` | CONFIRMADA · herdada de R062 | "the FRANK (…) Committee" | P78 |
| R078 | s16 `Frustrated, Responsible Alaskans Needing Knowledge` | CONFIRMADA · herdada de R063 | "(Frustrated, Responsible Alaskans Needing Knowledge)" | P78 |
| R079 | s17 `STATE MONEY` | CONFIRMADA · herdada de R064 | "the expenditure of state money … only after…" (p. 48) | P78 |
| R080 | s17 carimbo `APPROVED` | CONFIRMADA · herdada de R065 | "…have approved a general obligation bond proposition" | P78 |
| R081 | s17 `BONDS` | CONFIRMADA · herdada de R066 | idem | P78 |
| R082 | s17 `THROUGH 1992` | CONFIRMADA · herdada de R067 | "…through the year 1992" | P78 |
| R083 | s17 `BOND` | CONFIRMADA · herdada de R068 | "general obligation bond"; a definição é a da voz, já aprovada | P78 |
| R084 | s18 `STATEMENT AGAINST BALLOT PROPOSITION NO. 3 · 1978` | CONFIRMADA · herdada de R069 | título literal, p. 49 | P78 |
| R085 | s18 “Its true purpose is to prohibit the move to Willow” | CONFIRMADA · herdada de R070 | "Its true purpose is to prohibit the move to Willow which the voters have authorized." (Frank Harris, pró-mudança) | P78 |
| R086 | s19 `NOVEMBER 1978` | CONFIRMADA · herdada de R071 | "VOTE / TUESDAY, NOVEMBER 7, 1978" | P78, B78 |
| R087 | s19 `$` (linha vazia) | NADA A CHECAR · herdada de R072 | motivo gráfico; o valor entra com R091 e R092 | — |
| R088 | s19 `FULL BONDABLE COSTS OF RELOCATING CAPITAL` | CONFIRMADA · herdada de R073 | p. 48, literal | P78 |
| R089 | s19 `Initiative No. 6` | CONFIRMADA · herdada de R074 | p. 48; p. 49: "Initiative No. 6 was developed by the FRANK … Committee" | P78 |
| R090 | s19 `CAPITAL CONSTRUCTION COSTS OF THE NEW ALASKA CAPITAL` | CONFIRMADA · herdada de R075 | p. 63, literal | P78 |
| R091 | s19 "Shall the State of Alaska issue … $966,000,000…" (literal) | CONFIRMADA · herdada de R076 | "BALLOT QUESTION", p. 63, letra a letra | P78 |
| R092 | s19 `UP TO $966 MILLION` | CONFIRMADA · herdada de R077 | "not more than $966,000,000" | P78 |
| R093 | s20 `INITIATIVE NO. 6` | CONFIRMADA · herdada de R078 | linha da iniciativa (p. 48); boletim "BALLOT PROPOSITION #3" | P78, B78 |
| R094 | s20 `BONDS` | CONFIRMADA · herdada de R079 | "Bonds Yes / Bonds No" | P78 |
| R095 | s20 `YES` | CONFIRMADA · herdada de R080 | FRANK aprovada | B78 |
| R096 | s20 `69,414 to 55,253` | CONFIRMADA · herdada de R081 | totais da p. 50; o H26 dá o mesmo | B78, H26 |
| R097 | s20 `NEARLY 56%` | CONFIRMADA · herdada de R082 | 55.68 % | B78 |
| R098 | s20 `NO` | CONFIRMADA · herdada de R083 | títulos rejeitados | B78 |
| R099 | s20 `88,783 to 31,491` | CONFIRMADA · herdada de R084 | "NEW STATE CAPITAL CONSTRUCTION BOND" YES 31491, NO 88783 (p. 62) | B78 |
| R100 | s21 `Willow` | CONFIRMADA · nova | OSM node/150916708, o mesmo ponto de R069 | OSMW |
| R101 | s22 `1981` | CONFIRMADA · herdada de R085 | "The FRANK Initiative was amended by the Legislature in 1981" (p. 89) | P82 |
| R102 | s23 `BALLOT MEASURE NO. 8 · NOVEMBER 1982` | CONFIRMADA · herdada de R086 | "(As it will appear on the November 2, 1982 General Election Ballot)" | P82 |
| R103 | s23 "Considering the cost… at Willow?" (literal) | CONFIRMADA · herdada de R087 | p. 88, letra a letra | P82 |
| R104 | s23 `ABOUT $2.8 BILLION` | CONFIRMADA · herdada de R088 | "$2,843,147,000" | P82 |
| R105 | s23 `THROUGH 1994` | CONFIRMADA · herdada de R089 | "…relocation completion date of 1994" | P82 |
| R106 | s23 `NEARLY $590 MILLION` | CONFIRMADA · herdada de R090 | "Indemnification of Juneau residents under AS 44.08 $589,323,000" | P82 |
| R107 | s23 `Juneau, Alaska` | CONFIRMADA · herdada de R091 | "Small plane flight over Juneau, Southeast Alaska." | F23 |
| R108 | s24 `WINNER-TAKE-ALL` | CONFIRMADA · herdada de R092; só a _nota mudou (agora sobre o mapa do p1) | "If a majority votes YES, the State may spend… If a majority votes NO, laws and initiatives … are repealed." | P82 |
| R109 | s24 p2 `Alaska State Capitol` | CONFIRMADA · nova | lugar_na_origem "Juneau. Alaska State Capitol Building." | F24 |
| R110 | s24 p1 `Willow` | CONFIRMADA · nova | OSM node/150916708 | OSMW |
| R111 | s24 p1 legenda `Proposed site` | DIVERGE · nova | idem s15: a linha nomeada são as feições que limitam o sítio, inteiras, e não o sítio (achado F1) | P76, GEO35 |
| R112 | s24 p1 legenda `Roads` | CONFIRMADA · nova | idem s15 (Glenn e Parks, OSM) | OSMR |
| R113 | s25 “inflated” | CONFIRMADA · herdada de R093 | "the unrealistic, inflated estimates shown on the ballot measure" (Harris) | P82 |
| R114 | s25 `BONDS` | CONFIRMADA · herdada de R094 | cédula de 1978 | P78 |
| R115 | s25 `NO` | CONFIRMADA · herdada de R095 | 88,783 × 31,491; Clark: "the voters turned down a $966,000,000 bond issue" | B78, P82 |
| R116 | s26 `ACCESS ANNIE` | CONFIRMADA · herdada de R096 | "Access Annie was the mascot of … the Capital Access Committee" | ADN |
| R117 | s26 `Capital Access Committee` | CONFIRMADA · herdada de R097 | idem | ADN |
| R118 | s26 `FOOTBALL FANNIE` | CONFIRMADA · herdada de R098 | "Football Fannie was the mascot of the NFL Access Committee" | ADN |
| R119 | s26 `NFL Access Committee` | CONFIRMADA · herdada de R099 | idem | ADN |
| R120 | s27 `ACCESS ANNIE` (herdado) | CONFIRMADA · herdada de R100 | idem R116 | ADN |
| R121 | s27 `Capital Access Committee` (herdado) | CONFIRMADA · herdada de R101 | idem | ADN |
| R122 | s27 `FOOTBALL FANNIE` (herdado) | CONFIRMADA · herdada de R102 | idem R118 | ADN |
| R123 | s27 `NFL Access Committee` (herdado) | CONFIRMADA · herdada de R103 | idem | ADN |
| R124 | s27 `2026 · Anchorage Daily News · David Reamer` | CONFIRMADA · herdada de R104 | "Published: February 9, 2026"; entrevista de 2/2/2026 | ADN |
| R125 | s27 “make fun of the whole process and the amount of money” | CONFIRMADA · herdada de R105 | "…decided to just make fun of the whole process and the amount of money they wanted to spend…" | ADN |
| R126 | s28 `28` | CONFIRMADA · herdada de R106 | "all 28 NFL teams" | ADN |
| R127 | s28 `$800 MILLION` | CONFIRMADA · herdada de R107 | "…28 NFL Teams and 3 stadiums would only cost $800 million" (1º anúncio, 8/10/1982) | ADN |
| R128 | s29 `Dittman Research · late September` | CONFIRMADA · herdada de R108 | "In late September 1982, Dittman Research of Anchorage conducted a statewide poll" | ADN |
| R129 | s29 `52% to 45%` | CONFIRMADA · herdada de R109 | "52% … in favor of the move versus 45% opposed" (527 entrevistados) | ADN |
| R130 | s29 `NOVEMBER 1982` | CONFIRMADA · herdada de R110 | 2/11/1982 | B82 |
| R131 | s29 `NO` | CONFIRMADA · herdada de R111 | rejeitada | B82 |
| R132 | s29 `102,083 to 91,049` | CONFIRMADA · herdada de R112 | total da p. 47: YES 91049, NO 102083; os 27 totais de distrito (pp. 41–47, lidos em 28/09) somam exatamente isso (obs. O1 de 28/09) | B82 |
| R133 | s30 "may the State of Alaska spend… ($2,843,147,000)" (literal) | CONFIRMADA · herdada de R113 | p. 88 | P82 |
| R134 | s31 `the satire` | CONFIRMADA · herdada de R114 | Stoops: "…no way anyone could ever tell me that, that Football Fannie did not determine that election" | ADN |
| R135 | s31 `one factor, at least` | CONFIRMADA · herdada de R115 | "At the very least, the NFL Access Committee was a factor…" | ADN |
| R136 | s31 `not that heavily` | CONFIRMADA · herdada de R116 | "He also did not believe the price tag was a sufficiently relevant factor in the outcome" | ADN |
| R137 | s31 `ALASKA ECONOMIC TRENDS · 1990` | CONFIRMADA · herdada de R117 | "Alaska Economic Trends June 1990" | TR90 |
| R138 | s31 “finally persuaded voters to reject the plans” | CONFIRMADA · herdada de R118 | "The prohibitive expense of the capital move finally persuaded voters to reject the plans…" (p. 2) | TR90 |
| R139 | s31 `OPPONENTS` | CONFIRMADA · herdada de R119 | "Collectively, the anti-move groups spent over a million dollars" | ADN |
| R140 | s32 "If a majority votes NO, laws and initiatives…" (literal) | CONFIRMADA · herdada de R120 | p. 88 | P82 |
| R141 | s32 `LEGISLATIVE AFFAIRS AGENCY SUMMARY` | CONFIRMADA · herdada de R121 | p. 89 | P82 |
| R142 | s32 "If the ballot proposition is rejected … Relocation Indemnification Act." (literal) | CONFIRMADA · herdada de R122 | p. 89, letra a letra | P82 |
| R143 | s32 `YES` (riscado) | CONFIRMADA · herdada de R123 | "the Capital Relocation Initiative" (1974) está entre as leis revogadas pelo não | P82 |
| R144 | s33 `1994` | CONFIRMADA · nova | "11/08/1994 · 93MCAP · Relating to Changing the Capital to Wasilla · 96,398 · 116,277"; a Ballot Measure No. 3 do folheto de 1994 | H26, P94, B94 |
| R145 | s33 `NO PRICE ON THE BALLOT` | CONFIRMADA · herdada de R124; só a _nota mudou (agora sobre o mapa) | a cédula da No. 3 não traz custo (B-24) | P94 |
| R146 | s33 `Wasilla` | CONFIRMADA · herdada de R125; só a _nota mudou (entra no 1º 'Wasilla') | ponto do NE | NE |
| R147 | s33 `Juneau` | CONFIRMADA · herdada de R126; só a _nota mudou (tempo) | ponto do NE | NE |
| R148 | s33 legenda `Roads` | CONFIRMADA · nova | a Parks Highway (OSM) e a malha do Alasca (NE ne_10m_roads, só EUA) | OSMR, NE |
| R149 | s33 legenda `Border` | CONFIRMADA · nova | NE admin 0 | NE |
| R150 | s33 legenda `Juneau’s roads` | CONFIRMADA · nova | OSM relation/535397 | OSM7 |
| R151 | s34 `1982 · ABOUT $2.8 BILLION` | CONFIRMADA · herdada de R127 | "Twelve years ago, the Capital Site Planning Commission estimated that it would cost $2,843,000,000" | P94, P82 |
| R152 | s34 “This time, no price tag is attached.” | CONFIRMADA · herdada de R128 | literal (B-24) | P94 |
| R153 | s35 `Wasilla, Alaska` | CONFIRMADA · herdada de R129 | "Wasilla Lake, Wasilla, Alaska" | F35 |
| R154 | s35 `NEARLY 55% NO` | CONFIRMADA · herdada de R130 | "No 116,277 54.7%" | B94 |
| R155 | s35 `CHANGE OF CAPITAL TO WASILLA` | CONFIRMADA · herdada de R131 | título da Ballot Measure No. 3 | P94 |
| R156 | s35 `$` (vazio) | CONFIRMADA · herdada de R132 | a cédula de 1994 não trazia custo | P94 |
| R157 | s35 `NO` | CONFIRMADA · herdada de R133 | rejeitada | B94 |
| R158 | s35 `RIGHT TO KNOW, VOTE - MOVE COSTS` | CONFIRMADA · herdada de R134 | título da Ballot Measure No. 5 (B-27) | P94 |
| R159 | s35 `YES` | CONFIRMADA · herdada de R135 | "Yes 159,781 77.4%" | B94 |
| R160 | s35 `159,781 to 46,665` | CONFIRMADA · herdada de R136 | idem; H26, 93COST, 11/08/1994 | B94, H26 |
| R161 | s36 `AS 44.06.055` | CONFIRMADA · herdada de R137 | seção vigente | AS |
| R162 | s36 "State money may be expended … twelve-year period following such approval." (literal) | CONFIRMADA · herdada de R138 | letra a letra; os dois grifos são literais | AS |
| R163 | s36 `STILL LAW` | CONFIRMADA (volátil, 26/09/2026) · herdada de R139 | vigente no BASIS, conferido no navegador do app | AS, VOL |
| R164 | s36 `AS OF SEPTEMBER 2026` | CONFIRMADA (volátil, 26/09/2026) · herdada de R140 | idem | AS, VOL |
| R165 | s37 `Alaska House chamber` | CONFIRMADA · herdada de R141 | "Chamber of the Alaskan House of Representatives" | F37a |
| R166 | s37 `Alaska Senate chamber` | CONFIRMADA · herdada de R142 | "…huddling in the Senate chamber…" | F37b |
| R167 | s38 `social` | CONFIRMADA · herdada de R143 | "the social, economic, and environmental costs" | AS |
| R168 | s38 `economic` | CONFIRMADA · herdada de R144 | idem | AS |
| R169 | s38 `environmental` | CONFIRMADA · herdada de R145 | idem | AS |
| R170 | s39 `2002` | CONFIRMADA · herdada de R146 | Measure No. 2, 5/11/2002 | B02 |
| R171 | s39 `NO` | CONFIRMADA · herdada de R147 | rejeitada | B02 |
| R172 | s39 `153,127 to 74,650` | CONFIRMADA · herdada de R148 | "YES 74650 32.77% NO 153127 67.23%" | B02 |
| R173 | s39 `MAT-SU VALLEY` | CONFIRMADA · herdada de R149 | as sessões iriam "to the Matanuska-Susitna (Mat-Su) Borough"; o polígono é o do borough (obs. O2) | P02, TIG |
| R174 | s39 `ABOUT 2-TO-1` | CONFIRMADA · herdada de R150 | 2.05 para 1 | B02 |
| R175 | s40 `HOUSE BILL NO. 3 · 2025` | CONFIRMADA · herdada de R151 | "HOUSE BILL NO. 3 … Introduced: 1/22/25" | HB3 |
| R176 | s40 “An Act relating to convening the legislature in Anchorage; …” | CONFIRMADA · herdada de R152 | início literal do título | HB3 |
| R177 | s40 `* Sec. 16. AS 44.06.050, 44.06.055, and 44.06.060 are repealed.` | CONFIRMADA · herdada de R153 | letra a letra | HB3 |
| R178 | s40 `AS OF SEPTEMBER 2026` | CONFIRMADA (volátil, 26/09/2026) · herdada de R154 | status "(H) CRA" desde 22/1/2025 | HB3S, VOL |
| R179 | s40 `Anchorage, Alaska` (clipe do Envato) | CONFIRMADA · nova | lugar_na_origem "An aerial shot captures the cityscape of Anchorage, Alaska…" | F40 |
| R180 | s41 “It’s a little bit like a zombie movie.” | CONFIRMADA · herdada de R155 | letra a letra | KT25 |
| R181 | s42#3 (s43) `JUNEAU ACCESS IMPROVEMENTS PROJECT · 2018` | CONFIRMADA · herdada de R156; fusão s43 → s42; texto e fonte iguais | Final SEIS aprovado em 18/6/2018 | FS |
| R182 | s42#3 (s43) "These restrictions also contribute … the state’s capital." (literal) | CONFIRMADA · herdada de R157; fusão s43 → s42; texto e fonte iguais | cap. 1, letra a letra; os grifos são literais | FS |
| R183 | s42 `Juneau` | CONFIRMADA · nova | ponto do NE, o mesmo de R009 | NE |
| R184 | s42 legenda `Juneau’s roads` | CONFIRMADA · nova | OSM relation/535397 | OSM7 |
| R185 | s42 (s43 p1) legenda `Border` | CONFIRMADA · nova | NE admin 0 | NE |
| R186 | s44 `BRITISH COLUMBIA` | CONFIRMADA · herdada de R158 | NE admin 1, CA-BC | NE |
| R187 | s44 `Taku River` | CONFIRMADA · herdada de R159 | "Taku River" | OSMT |
| R188 | s44 `Taku Inlet` | CONFIRMADA · herdada de R160 | GNIS "Taku Inlet" (Bay) | GTI |
| R189 | s44 `Approximate route` | CONFIRMADA · herdada de R161 | o tracejado é esquema de rota não construída | ID6 |
| R190 | s44 `Lynn Canal` | CONFIRMADA · herdada de R162; só a _nota mudou (fica no mergulho do b6) | GNIS "Lynn Canal" (Channel) | GLC |
| R191 | s44 `1993` | CONFIRMADA · herdada de R163; só a _nota mudou (ao lado do corredor do Taku, o que a B.C. recusou) | "In 1993, the B.C. Minister of Transportation was contacted … B.C. indicated it did not support pursuit of this alternative." | FS |
| R192 | s44 `2003` | CONFIRMADA · herdada de R164; idem ao 1993 | "The October 2, 2003, response indicated that B.C. is not interested…" | FS |
| R193 | s44 `Haines` | CONFIRMADA · herdada de R165 | OSM node/150921918 | OSMH |
| R194 | s44 `Skagway` | CONFIRMADA · herdada de R166 | ponto do NE | NE |
| R195 | s44 `CANADA` | CONFIRMADA · herdada de R167 | NE admin 0 | NE |
| R196 | s44 `Alaska Highway` | CONFIRMADA · herdada de R168; só a _nota mudou (tempo) | "Alaska Highway" | OSMA |
| R197 | s44 legenda `Border` | CONFIRMADA · nova | NE admin 0 | NE |
| R198 | s44 legenda `Juneau’s roads` | CONFIRMADA · nova | OSM relation/535397 | OSM7 |
| R199 | s44 legenda `Proposed road` | CONFIRMADA · nova | §1.2.2: "only two corridors are available for a highway or rail connection…: Lynn Canal and the Taku River Valley"; §2.2.1: "This alternative would construct a 118-mile-long highway from the end of Thane Road in Juneau…"; nenhuma das duas foi construída | FS |
| R200 | s44 legenda `Roads` | CONFIRMADA · nova | OSM "Haines Highway" (/16265497), "Klondike Highway" (/8747347, /5385974) e "Alaska Highway" (/326897), route=road | OSMR, OSMA |
| R201 | s47 `Lynn Canal` | CONFIRMADA · nova | lugar_na_origem "m/v LeConte and the Chilkat Range, Lynn Canal - Southeast Alaska."; grafia do GNIS | F47, GLC |
| R202 | s48 `JANUARY 2000` | CONFIRMADA · herdada de R169 | "In January 2000, Governor Tony Knowles announced…" | CA9 |
| R203 | s48 `Lynn Canal` | CONFIRMADA · herdada de R170 | GNIS | GLC |
| R204 | s48 `Approximate route` | CONFIRMADA · herdada de R171 | esquema | ID6 |
| R205 | s48 legenda `Border` | CONFIRMADA · nova | NE admin 0 | NE |
| R206 | s48 legenda `Juneau’s roads` | CONFIRMADA · nova | OSM relation/535397 | OSM7 |
| R207 | s48 legenda `Proposed road` | CONFIRMADA · nova | "…calling for the construction of a highway along the eastern side of Lynn Canal to a new ferry terminal…" | CA9 |
| R208 | s49 `OCTOBER 2000` | CONFIRMADA · herdada de R172 | "In October 2000, Juneau voters were split on an advisory ballot question…" | FS |
| R209 | s49 `Juneau, Alaska` | CONFIRMADA · herdada de R173 | "Juneau, Alaska with Mount Roberts behind." | F49 |
| R210 | s49 `FERRY 5,840 · ROAD 5,761` | CONFIRMADA · herdada de R174 | "…5,840 choosing enhanced ferry service and 5,761 choosing a road" (o estudo cita o FEIS de 2006) | FS |
| R211 | s50 `2006` | CONFIRMADA · herdada de R175 | "In April 2006, FHWA issued a Record of Decision … selected Alternative 2B" | FS |
| R212 | s50 `Lynn Canal` | CONFIRMADA · herdada de R176; só a _nota mudou (tempo) | GNIS | GLC |
| R213 | s50 `Approximate route` | CONFIRMADA · herdada de R177 | esquema | ID6 |
| R214 | s50#3 (s51) `41 AVALANCHE PATHS` | CONFIRMADA · herdada de R178; fusão s51 → s50; texto e fonte iguais | "…Alternative 2B crosses 41 avalanche paths" | FS |
| R215 | s50#4 (s51) `ABOUT $680 MILLION` | CONFIRMADA · herdada de R179; fusão s51 → s50; texto e fonte iguais | "approximately $680.2 million" | FS |
| R216 | s50#5 (s52) `2009` | CONFIRMADA · herdada de R180; fusão s52 → s50; texto e fonte iguais | "On February 13, 2009, the District Court vacated FHWA's ROD" | FS, CA9 |
| R217 | s50#5 (s52) `Upheld on appeal, 2011` | CONFIRMADA · herdada de R181; fusão s52 → s50; texto e fonte iguais | "…and we affirm." / "AFFIRMED." (Filed May 4, 2011) | CA9 |
| R218 | s50#3 (s51 p1) `Lynn Canal` (a foto) | CONFIRMADA · nova | lugar_na_origem "Eldred Rock Light in Lynn Canal, showing a few of the numerous avalanche chutes on the shores of the Lynn Canal" | F51, GLC |
| R219 | s50#6 `Juneau` | CONFIRMADA · nova | ponto do NE | NE |
| R220 | s50#6 `Haines` | CONFIRMADA · nova | OSM node/150921918 | OSMH |
| R221 | s50#6 `Skagway` | CONFIRMADA · nova | ponto do NE | NE |
| R222 | s50 legenda `Border` | CONFIRMADA · nova | NE admin 0 | NE |
| R223 | s50 legenda `Juneau’s roads` | CONFIRMADA · nova | OSM relation/535397 | OSM7 |
| R224 | s50 legenda `Proposed road` | CONFIRMADA · nova | "Alternative 2B consists of a new 50.8-mile-long highway from the end of Glacier Highway at Echo Cove to a point north of the Katzehin River delta" | FS |
| R225 | s50#2 legenda `Ferry` | CONFIRMADA · nova | 2B: "A new ferry terminal would be constructed at the end of the new highway, with shuttle ferry service to both Skagway and Haines from the new terminal." | FS |
| R226 | s50#4 (s51 p2) legenda `Ferry` | CONFIRMADA · nova | idem | FS |
| R227 | s50#6 (s52 p2) legenda `Ferry` | CONFIRMADA · nova | OSM "Juneau - Haines" (relation/12533329) e "Haines - Skagway" (/12533328), route=ferry, operator "Alaska Marine Highway" | OSMF |
| R228 | s53 `2005–2014` | CONFIRMADA · herdada de R182 | "between 2005 and 2014, oil revenues averaged 90 percent of Alaska's unrestricted general fund revenues" | FS |
| R229 | s53 `ABOUT 90%` | CONFIRMADA · herdada de R183 | idem | FS |
| R230 | s53 `of the state’s unrestricted general fund revenue` | CONFIRMADA · herdada de R184 | idem | FS |
| R231 | s53 `Trans-Alaska Pipeline` (clipes da Storyblocks) | CONFIRMADA · nova | lugar_na_origem "Aerial view of the Trans-Alaska Pipeline System…, Fairbanks, Alaska"; FS p. 2-44: "shipped through the Trans-Alaska Pipeline" | F53, FS |
| R232 | s54 `2013` | CONFIRMADA · herdada de R185 | máximo de US$ 116.26 em 12/02/2013; FS: "more than $116 per barrel in February 2013" | DOR, FS |
| R233 | s54 `EARLY 2016` | CONFIRMADA · herdada de R186 | mínimo de US$ 26.23 em 20/01/2016; FS: "just over $26 … January 2016" | DOR, FS |
| R234 | s54 `Daily oil price` | CONFIRMADA · herdada de R187 | série diária "ANS West Coast" do Department of Revenue | DOR |
| R235 | s55 `DECEMBER 2016` | CONFIRMADA · herdada de R188 | 15/12/2016 | FS |
| R236 | s55 `NO ACTION` | CONFIRMADA · herdada de R189 | "Alternative 1 – No Action" | FS |
| R237 | s55 `keep the ferries` | CONFIRMADA · herdada de R190 | "No Action includes a continuation of mainline ferry service in Lynn Canal" (ROD) | FS |
| R238 | s55 `build no road` | CONFIRMADA · herdada de R191 | No Action: sem construção | FS |
| R239 | s56 `Juneau Assembly` | CONFIRMADA · herdada de R192 | "Juneau Assembly members take up the Juneau Access Road resolution…" | F56 |
| R240 | s56 `JANUARY 2017` | CONFIRMADA · herdada de R193 | votação de segunda-feira, 23/1/2017 | KT17 |
| R241 | s57 `Skagway` | CONFIRMADA · herdada de R194 | ponto do NE | NE |
| R242 | s57 `Haines` | CONFIRMADA · herdada de R195 | ponto do OSM | OSMH |
| R243 | s57 `Approximate route` | CONFIRMADA · herdada de R196 | esquema | ID6 |
| R244 | s58 `JUNE 2018` | CONFIRMADA · herdada de R197 | "Final SEIS and Record of Decision (ROD), issued on June 18, 2018" | FR |
| R245 | s58 `RECORD OF DECISION · 2018` | CONFIRMADA · herdada de R198 | idem | FS, FR |
| R246 | s58 `II. Basis for Decision` | CONFIRMADA · herdada de R199 | ROD, p. 2 | FS |
| R247 | s58 `… In summary, DOT&PF and FHWA find the following:` | CONFIRMADA · herdada de R200 | ROD, p. 3, literal | FS |
| R248 | s58 "• Declining oil prices have caused the need for cuts to State budgets." | CONFIRMADA · herdada de R201 | letra a letra | FS |
| R249 | s58 "• Declining revenues, particularly General Fund revenues…" | CONFIRMADA · herdada de R202 | letra a letra | FS |
| R250 | s58 "• Controversy on the JAI Project is high among the public…" | CONFIRMADA · herdada de R203 | letra a letra | FS |
| R251 | s59 `Juneau` | CONFIRMADA · herdada de R204 | ponto do NE | NE |
| R252 | s59 `Cascade Point` | CONFIRMADA · herdada de R205 | p. 1-8 | FS |
| R253 | s59 `ABOUT 43 MILES` | CONFIRMADA · herdada de R206; só a _nota mudou (entra em 'miles') | p. 1-8 | FS |
| R254 | s59 legenda `Juneau’s roads` | CONFIRMADA · nova | OSM relation/535397 | OSM7 |
| R255 | s59 legenda `Border` | CONFIRMADA · nova | NE admin 0 | NE |
| R256 | s60 `YES` | CONFIRMADA · herdada de R207 | 1974 | B74 |
| R257 | s60 `1974` | CONFIRMADA · herdada de R208 | 27/8/1974 | B74 |
| R258 | s60 `WHETHER TO MOVE` | CONFIRMADA · herdada de R209 | 1974: "Relocating and Constructing A New Capital", sem preço | B74 |
| R259 | s60 `HOW MUCH` | CONFIRMADA · herdada de R210 | 1978: títulos de até $966 milhões; 1982: "$2,843,147,000" | P78, P82 |
| R260 | s60 `1978 · UP TO $966 MILLION` | CONFIRMADA · herdada de R211 | p. 63 | P78 |
| R261 | s60 `1982 · ABOUT $2.8 BILLION` | CONFIRMADA · herdada de R212 | p. 88 | P82 |
| R262 | s60 `NO` (×2) | CONFIRMADA · herdada de R213 | 88,783 × 31,491; 102,083 × 91,049 | B78, B82 |
| R263 | s61 `SINCE 1994` | CONFIRMADA · herdada de R214 | 93COST aprovada em 8/11/1994; o texto da No. 5 é o dos atuais AS 44.06.050–.060 | H26, P94, AS |
| R264 | s61 `AS OF SEPTEMBER 2026` | CONFIRMADA (volátil, 26/09/2026) · herdada de R215 | vigência de AS 44.06.055 | AS, VOL |
| R265 | s61 `AS 44.06.055` (herdado) | CONFIRMADA · herdada de R216 | idem R161 | AS |
| R266 | s61 literal de AS 44.06.055 (herdado) | CONFIRMADA · herdada de R217 | idem R162 | AS |
| R267 | s62 `YES` | CONFIRMADA · herdada de R218 | o sim de 1974 | B74 |
| R268 | s62 `$` | NADA A CHECAR · herdada de R219 | motivo gráfico | — |
| R269 | s63 `YES` (herdado) | CONFIRMADA · herdada de R220 | idem | B74 |
| R270 | s63 `$` (herdado) | NADA A CHECAR · herdada de R221 | motivo gráfico | — |
| K01 | s01 `Gillfoto / Wikimedia Commons · CC BY-SA 4.0` | CONFIRMADA · herdada de K01; cobre agora p1 e p2: os dois vereditos dão o mesmo crédito; o clipe do p3 (Envato) vai sem crédito (identidade §7) | Gillfoto (Own work), CC BY-SA 4.0, nos dois vereditos (p1 e p2) | F01, F01b |
| K02 | s01 `Source: Alaska Division of Elections, 1974` | CONFIRMADA · herdada de K02 | boletim de 1974 | B74 |
| K03 | s02 `Source: Alaska Division of Elections, 1982` | CONFIRMADA · herdada de K03 | folheto de 1982 | P82 |
| K04 | s03 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K04 | base MapTiler e geometria do OSM; linha prescrita | MT |
| K05 | s03 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA · herdada de K05 | o estudo de 2018 (forma de `midia.md` §7.1) | FS |
| K06 | s04 `Gillfoto / Wikimedia Commons · CC BY-SA 4.0` (p1 e p2) | CONFIRMADA · nova | credito_na_tela dos dois vereditos; CC BY-SA 4.0 lida na página do Commons | F04a, F04b |
| K07 | s05 `Source: Alaska Division of Elections, 1982` | CONFIRMADA · herdada de K06 | p. 90 | P82 |
| K08 | s05 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K07 | inset de satélite | MT |
| K09 | s06 `Source: City and Borough of Juneau` | CONFIRMADA · herdada de K08 | página sem data (exceção declarada) | CBJ |
| K10 | s07 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K09 | mapa | MT |
| K11 | s08 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K10 | satélite e rodovias do OSM | MT |
| K12 | s08 `Source: Alaska Department of Labor and Workforce Development, 2013` | CONFIRMADA · herdada de K11 | "Alaska Department of Labor and Workforce Development, April 2013" | POP |
| K13 | s11 `Source: Alaska Division of Elections, 1960–1974` | CONFIRMADA · herdada de K12 | três boletins | B60, B62, B74 |
| K14 | s12 `Source: Alaska Division of Elections, 1974` | CONFIRMADA · herdada de K13 | boletim de 1974 | B74 |
| K15 | s12 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K14 | satélite | MT |
| K16 | s12 `Source: Alaska Supreme Court, 1974` | CONFIRMADA · herdada de K15 | Boucher v. Engstrom | BOU |
| K17 | s12 `Source: Alaska Department of Law, 1993` | CONFIRMADA · herdada de K16 | o parecer | AG |
| K18 | s14 `Gillfoto / Wikimedia Commons · CC BY-SA 4.0` (só o p1) | CONFIRMADA · nova | veredito do p1; o p2 (Highsmith, Library of Congress, PD-Highsmith) vai sem crédito, pelo veredito e pela identidade §7 | F14a, F14b |
| K19 | s15 `Source: Alaska Division of Elections, 1976` | CONFIRMADA · herdada de K17 | placar e folheto de 1976 | B76, P76 |
| K20 | s15 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K18 | satélite e Willow do OSM | MT |
| K21 | s16 `Dennis Cowals / National Archives` | CONFIRMADA · herdada de K19 | DOCUMERICA, NARA 550551 (exceção do `midia.md` §7.3) | F16a |
| K22 | s16 `Piergiuliano Chesi / Wikimedia Commons · CC BY 3.0` | CONFIRMADA · herdada de K20 | CC BY 3.0 Unported | F16b |
| K23 | s16 `Source: Alaska Division of Elections, 1978` | CONFIRMADA · herdada de K21 | folheto de 1978, p. 49 | P78 |
| K24 | s17 `Source: Alaska Division of Elections, 1978` | CONFIRMADA · herdada de K22 | p. 48 | P78 |
| K25 | s18 `Source: Alaska Division of Elections, 1978` | CONFIRMADA · herdada de K23 | p. 49 | P78 |
| K26 | s19 `Source: Alaska Division of Elections, 1978` | CONFIRMADA · herdada de K24 | pp. 48 e 63 | P78 |
| K27 | s20 `Source: Alaska Division of Elections, 1978` | CONFIRMADA · herdada de K25 | boletim de 1978 | B78 |
| K28 | s21 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · nova | s21 virou mapa na base MapTiler, com Willow do OSM; linha prescrita | MT |
| K29 | s22 `State of Alaska / Alaska State Library` | CONFIRMADA · herdada de K26 | autor "State of Alaska", Alaska's Digital Archives (`midia.md` §7.5) | F22 |
| K30 | s22 `Source: Alaska Division of Elections, 1982` | CONFIRMADA · herdada de K27 | p. 89 (1981) | P82 |
| K31 | s23 `Source: Alaska Division of Elections, 1982` | CONFIRMADA · herdada de K28 | p. 88 | P82 |
| K32 | s23 `Gillfoto / Wikimedia Commons · CC BY-SA 4.0` | CONFIRMADA · herdada de K29 | CC BY-SA 4.0 | F23 |
| K33 | s24 `© MapTiler © OpenStreetMap contributors` (p1) | CONFIRMADA · nova | mapa de Willow | MT |
| K34 | s24 `Jay Galvin / Wikimedia Commons · CC BY 2.0` (p2) | CONFIRMADA · nova | "Creative Commons Attribution 2.0 Generic" (veredito) | F24 |
| K35 | s25 `Source: Alaska Division of Elections, 1982` | CONFIRMADA · herdada de K30 | p. 90 | P82 |
| K36 | s26 `Source: Anchorage Daily News, 2026` | CONFIRMADA · herdada de K31 | a coluna | ADN |
| K37 | s27 `Source: Anchorage Daily News, 2026` | CONFIRMADA · herdada de K32 | a coluna | ADN |
| K38 | s28 `Source: Anchorage Daily News, 2026` | CONFIRMADA · herdada de K33 | a coluna | ADN |
| K39 | s28 `Dave Gelotte / Alaska State Museum` | CONFIRMADA · herdada de K34 | byline Dave Gelotte; "(Provided by Alaska State Museum)", ASM 97-20-1 | F28 |
| K40 | s29 `Source: Anchorage Daily News, 2026; Alaska Division of Elections, 1982` | CONFIRMADA · herdada de K35 | pesquisa (ADN) e resultado (boletim) | ADN, B82 |
| K41 | s30 `Source: Alaska Division of Elections, 1982` | CONFIRMADA · herdada de K36 | p. 88 | P82 |
| K42 | s31 `Source: Anchorage Daily News, 2026` | CONFIRMADA · herdada de K37 | a coluna | ADN |
| K43 | s31 `Source: Alaska Department of Labor, 1990` | CONFIRMADA · herdada de K38 | Trends de junho de 1990 | TR90 |
| K44 | s32 `Source: Alaska Division of Elections, 1982` | CONFIRMADA · herdada de K39 | pp. 88–89 | P82 |
| K45 | s33 `Source: Alaska Division of Elections, 1994` | CONFIRMADA · herdada de K40; cobre agora também o 1994 (o H26 e o folheto de 1994 são da Divisão) | folheto de 1994; o H26 (o 1994) | P94, H26 |
| K46 | s33 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K41; cobre a cena toda (s33 virou mapa) | mapa | MT |
| K47 | s34 `Source: Alaska Division of Elections, 1994` | CONFIRMADA · herdada de K42 | B-24 | P94 |
| K48 | s35 `Murray Foubister / Wikimedia Commons · CC BY-SA 2.0` | CONFIRMADA · herdada de K43 | CC BY-SA 2.0 Generic | F35 |
| K49 | s35 `Source: Alaska Division of Elections, 1994` | CONFIRMADA · herdada de K44 | resultado e folheto | B94, P94 |
| K50 | s36 `Source: Alaska State Legislature, 2026` | CONFIRMADA · herdada de K45 | texto vigente, lido em 2026 | AS |
| K51 | s37 `Ifly6 / Wikimedia Commons · CC BY-SA 4.0` | CONFIRMADA · herdada de K46 | CC BY-SA 4.0 | F37a |
| K52 | s37 `James Brooks / Wikimedia Commons · CC BY 2.0` | CONFIRMADA · herdada de K47 | CC BY 2.0 | F37b |
| K53 | s38 `Source: Alaska State Legislature, 2026` | CONFIRMADA · herdada de K48 | AS 44.06.050–.060 | AS |
| K54 | s39 `Source: Alaska Division of Elections, 2002` | CONFIRMADA · herdada de K49 | resultado de 2002 | B02 |
| K55 | s39 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K50 | mapa | MT |
| K56 | s40 `Source: Alaska State Legislature, 2026` | CONFIRMADA · herdada de K51 | o PDF servido é a impressão da 2ª sessão; status lido em 2026 | HB3, HB3S |
| K57 | s41 `Source: KTOO, 2025` | CONFIRMADA · herdada de K52 | a matéria de 13/6/2025 | KT25 |
| K58 | s42 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA · herdada de K53; fusão s43 → s42 (a folha do estudo, s43 p2) | cap. 1 | FS |
| K59 | s42 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K54; fusão s43 → s42; cobre agora o arquivo inteiro | mapa | MT |
| K60 | s44 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K55 | relevo, satélite e OSM | MT |
| K61 | s44 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA · herdada de K56 | corredores, 1993 e 2003 | FS |
| K62 | s47 `Gillfoto / Wikimedia Commons · CC BY-SA 4.0` | CONFIRMADA · nova | credito_na_tela do veredito | F47 |
| K63 | s48 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K57 | mapa | MT |
| K64 | s49 `Gillfoto / Wikimedia Commons · CC BY-SA 4.0` | CONFIRMADA · herdada de K58 | CC BY-SA 4.0 | F49 |
| K65 | s49 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA · herdada de K59 | p. 1-7 | FS |
| K66 | s50 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K60; cobre o arquivo inteiro (s50, s51 p2 e s52) | mapa | MT |
| K67 | s50 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA · herdada de K61; cobre agora 41 AVALANCHE PATHS e ABOUT $680 MILLION e junta o K62 de 28/09 (s51); os dois vêm do FS | ROD de 2006, 2B; "Alternative 2B crosses 41 avalanche paths"; "approximately $680.2 million" | FS |
| K68 | s50#3 `LCGS Russ / Wikimedia Commons · CC BY-SA 3.0` | CONFIRMADA · nova | "Creative Commons Attribution-ShareAlike 3.0 Unported" (veredito) | F51 |
| K69 | s53 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA · herdada de K63 | §2.5.1 | FS |
| K70 | s54 `Source: Alaska Department of Revenue, 2013–2016` | CONFIRMADA · herdada de K64 | série de 1/2/2013 a 29/1/2016 | DOR |
| K71 | s55 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA · herdada de K65 | §1.1 | FS |
| K72 | s56 `Michael Penn / Juneau Empire` | CONFIRMADA · herdada de K66 | crédito da origem (`midia.md` §7.5) | F56 |
| K73 | s56 `Source: KTOO, 2017` | CONFIRMADA · herdada de K67 | "Juneau Assembly votes 6-3 to support the road" | KT17 |
| K74 | s57 `Source: KTOO, 2017` | CONFIRMADA · herdada de K68 | o cargo de jan./2017 | KT17 |
| K75 | s57 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K69 | inset | MT |
| K76 | s58 `Source: Federal Highway Administration, 2018` | CONFIRMADA · herdada de K70 | o aviso da FHWA (forma do `midia.md` §7.1) | FR |
| K77 | s59 `© MapTiler © OpenStreetMap contributors` | CONFIRMADA · herdada de K71; cobre a cena toda (o p1 virou mapa) | mapa | MT |
| K78 | s59 `Source: Alaska DOT&PF and FHWA, 2018` | CONFIRMADA · herdada de K72 | p. 1-8 | FS |
| K79 | s60 `Source: Alaska Division of Elections, 1974–1982` | CONFIRMADA · herdada de K73 | boletins e folhetos de 1974, 1978 e 1982 | B74, B78, B82 |
| K80 | s61 `Source: Alaska State Legislature, 2026; Alaska Division of Elections, 1994` | CONFIRMADA · herdada de K74 | lei vigente; voto de 1994 | AS, H26 |
| A01 | s01 `Photo from circa 1987` | CONFIRMADA · herdada de A01 | data_na_origem "Circa 1987"; aviso_de_ano true | F01 |
| A02 | s01 p2 `Photo from 2017` | CONFIRMADA · nova | data_na_origem "4 March 2017, 14:25:26"; aviso_de_ano true (a fala marca o tempo: "Half a century later") | F01b |
| A03 | s06 `Photo from circa 1899` | CONFIRMADA · herdada de A02 | "Circa 1899" | F06a |
| A04 | s06 `Photo from 1887` | CONFIRMADA · herdada de A03 | "1887" | F06b |
| A05 | s08 `Photo from 1915` | CONFIRMADA · herdada de A04 | "1 July 1915" | F09a |
| A06 | s08 `Photo from 1943` | CONFIRMADA · herdada de A05 | "9 July 43" | F09b |
| A07 | s14 p1 `Photo from 2017` | CONFIRMADA · nova | "5 September 2017, 12:24:53"; aviso_de_ano true | F14a |
| A08 | s14 p2 `Photo from 2008` | CONFIRMADA · nova | "Taken on 5 August 2008, 19:00 (according to Exif data)"; aviso_de_ano true | F14b |
| A09 | s16 `Photo from 1973` | CONFIRMADA · herdada de A06 | "August 1973" | F16a |
| A10 | s16 `Photo from 1972` | CONFIRMADA · herdada de A07 | "1972-08" | F16b |
| A11 | s22 `Photo from 1967–1968` | CONFIRMADA · herdada de A08 | "1967/1968" | F22 |
| A12 | s23 `Photo from circa 1993` | CONFIRMADA · herdada de A09 | "Circa 1993" | F23 |
| A13 | s24 p2 `Photo from 2010` | CONFIRMADA · nova | "31 August 2010, 20:52"; aviso_de_ano true | F24 |
| A14 | s35 `Photo from 2010` | CONFIRMADA · herdada de A10 | "6 June 2010" | F35 |
| A15 | s49 `Photo from 1997` | CONFIRMADA · herdada de A11 | "21 April 1997" | F49 |
| A16 | s50#3 (s51 p1) `Photo from 2011` | CONFIRMADA · nova | "15 May 2011"; aviso_de_ano true | F51 |
| A17 | s57 `Photo from 2020` | CONFIRMADA · herdada de A12 | "2020" (retrato publicado em 14/12/2020) | CBJ2 |
| X01 | s08 pictograma: 15 de 100 (1940), depois mais da metade (1960) | CONFIRMADA · herdada de X01 | "about 15 percent … 1940"; "more than half" em 1960 | POP |
| X02 | s08 as rodovias Alaska e Glenn ligando Anchorage ao continente | CONFIRMADA · herdada de X02 | "The Alaska Highway, built in 1942 … the Glenn Highway, which linked Anchorage to the national road system" (PDF p. 13) | POP |
| X03 | s12 as barras regionais (79.96 / 94.19 / 50.65 %) | CONFIRMADA · herdada de X03 | somas refeitas na p. 48 | B74 |
| X04 | s15 os três placares nos três locais | CONFIRMADA · herdada de X04 | "on the west side of Larson Lake"; "southerly foothills of Mt. Yenlo"; o sítio de Willow | P76 |
| X05 | s15 a seta curta, 5 milhas a leste da vila | CONFIRMADA · herdada de X05 | "The town of Willow is five miles to the west of the site" | P76 |
| X06 | s20 as barras 88,783 × 31,491 (2.82 : 1) | CONFIRMADA · herdada de X06 | p. 62 | B78 |
| X07 | s28 a balança: US$ 800 milhões contra 2.84 bilhões (28 %) | CONFIRMADA · herdada de X07 | "only about one-fourth of the amount proposed…" | ADN |
| X08 | s29 as barras do resultado (52.86 % não) | CONFIRMADA · herdada de X08 | soma dos 27 distritos | B82 |
| X09 | s31 a pilha de fichas dos opositores | CONFIRMADA · herdada de X09 | "spent over a million dollars" | ADN |
| X10 | s35 o carimbo YES maior que o NO (77.4 %) | CONFIRMADA · herdada de X10 | "Yes 159,781 77.4%" | B94 |
| X11 | s44 o Yukon aceso onde as estradas de Haines e Skagway chegam à Alaska Highway | CONFIRMADA · herdada de X11 | "…Alaska Highway at Haines Junction, Yukon Territory … near Whitehorse, Yukon Territory" | FS |
| X12 | s49 o ponteiro da balança em 79 votos | CONFIRMADA · herdada de X12 | 5,840 − 5,761 = 79 | FS |
| X13 | s50#5 (s52) o grifo na página original do 9º Circuito | CONFIRMADA · herdada de X13; a página do 9º Circuito passou de s52 p1 para s50#5, com o mesmo literal grifado | "The district court vacated the FHWA’s Record of Decision (“ROD”)" (p. 4), literal | CA9 |
| X14 | s54 a linha diária de 748 pontos e o colchete em quartos | CONFIRMADA · herdada de X14 | de 116.26 a 26.23: queda de 77.44 % (mais de três quartos) | DOR, FS |
| X15 | s56 seis círculos cheios de nove | CONFIRMADA · herdada de X15 | "voted 6-3 to pass the resolution" | KT17 |
| X16 | s58 o grifo na página original do Federal Register | CONFIRMADA · herdada de X16 | "The selected alternative was the No Action Alternative." | FR |
| X17 | s47 a faixa tracejada sobre a água da foto da LeConte: a balsa é a rodovia | CONFIRMADA · acrescentada (em 28/09 a mesma faixa ia sobre o footage e não entrou como X) | "AMHS is the National Highway System link to Juneau, Haines, and Skagway." (cópia local, linha 466); a voz (A22) está CONFIRMADA no fatos.laudo | FS |

## Achados

**A aritmética interna fecha.** Não há REFUTADA, e todas as citações conferem letra a letra. Há um DIVERGE, em duas linhas.

### [MÉDIO] F1: a legenda `Proposed site` nomeia as feições que limitam o sítio, e não o sítio (R072 em s15; R111 em s24 p1)

**O que a tela mostra.**
- A legenda põe uma amostra de linha fina verde-água e, ao lado, a palavra `Proposed site`.
- A linha é a camada `limites-sitio-willow-1976`: Willow Creek, o Little Susitna River, o Deception Creek e a Alaska Railroad, desenhados inteiros.
- A `s15.html` junta as quatro numa MultiLineString sem corte (linhas 349–356). O Little Susitna desce da serra até Cook Inlet (488 km, somando os braços), e o Willow Creek tem 199 km com os braços.

**O que a fonte diz.**
- O folheto de 1976, p. 48: "The site is generally bounded by Willow Creek to the north, the Little Susitna River to the south and the Alaska Railroad to the west".
- A cidade ficaria "adjacent to the Deception Creek". O texto não dá o limite leste.
- Quem fez a camada escreveu, no cabeçalho de `geo-sitio-willow-1976.mjs`: "NÃO são o local: o limite leste do local só existe no mapa da p. 48 … nada aqui fecha um polígono".

**O que se vê nos quadros** (s15 aos 14,0 s; s24 aos 2,0 s).
- O anel laranja marca o sítio, 5 milhas a leste da vila.
- A legenda chama de "Proposed site" linhas que vão da serra até o litoral de Cook Inlet, a dezenas de quilômetros do anel.

**Por que é periférico.**
- A voz não depende disso.
- Os números de s15 estão certos: 56,219, ABOUT 70 MILES, a seta das 5 milhas e o anel.
- Mesmo assim, é a única afirmação de tela que hoje diz o que a fonte não diz, e aparece em duas cenas: 14,4 s em s15 e 4,0 s em s24.

**CONSERTO.**
- **Na arte, o recomendado.** Cortar as linhas ao trecho em volta do anel:
  - o Willow Creek e o Little Susitna, entre a travessia da ferrovia (o limite oeste) e o Deception Creek;
  - a ferrovia, como já está (entre as duas travessias);
  - o Deception Creek.

  O texto `Proposed site` fica como está. Como s15 e s24 já estão renderizadas, isso pede render novo das duas, com MapTiler (gasto liberado em 01/10).
- **Sem refazer as cenas.** Para as linhas inteiras, o texto que a fonte sustenta é `Rivers and rail around the site`. Não serve `Proposed site`, e não serve `Site boundaries`, porque o rio inteiro não é limite. A forma curta é do redator, dentro dessa regra.
- **Quem escolhe** entre os dois é o Claude central. Se as cenas já tiverem o ok do Lucas, a escolha é do Lucas.

**RAIZ: INSTRUÇÃO.**
- O aviso de quem fez a camada ficou só no cabeçalho do script.
- O registro dela no `pauta-geo.json` (item 35), que é o que o conceito, a regência e o redator leem, diz só as fontes. Por isso o conceito passou a chamá-la de "o contorno fino do sítio de 1976".
- **Conserto da raiz:** o registro da camada no `pauta-geo.json` leva a ressalva: "são as feições que limitam o local, inteiras; não são o local".

### Observações, sem conserto

- **O2 (de 28/09, continua).** `MAT-SU VALLEY` (R070, R173) fica sobre o polígono do borough, que é maior que o vale. Recomendo manter.
- **O6. Fotos novas sem aviso do ano.** A s04 p1 (2020), a s04 p2 (2018) e a s47 (2009) entram sem aviso, como os vereditos mandam (`aviso_de_ano: false`): "a fala é a condição de hoje, sem marca de tempo", o mesmo precedente de s37. A s01 p2 (2017) leva aviso porque a fala marca o tempo ("Half a century later"). O critério é o mesmo nas quatro. CHECADO E LIMPO.
- **O7. Rótulo de lugar sobre clipe de banco** (s01 p3, s40 e s53). O apoio é o título que o contribuidor escreveu na página do item, que é o `lugar_na_origem` do conferente. Nenhum rótulo passa dele, e nenhum dos três nomeia lugar mais específico que a cidade ou a obra. É a origem mais fraca do vídeo, e fica registrada.
- **O8. `Stephens Passage` (s04 p1).** A origem diz "heading to Auke Bay, Stephens Passage, Southeast Alaska". O rótulo nomeia a água e deixa o destino (Auke Bay) fora, como o veredito pede.
- **O9. `Proposed road` em s44** vale para os dois corredores. O do Taku foi alternativa estudada, considerada "not reasonable" depois das recusas da B.C. (§2.2.1). "Proposed" fica certo, porque ela foi proposta e estudada, e a voz conta as recusas.
- **O10. A foto do estádio de s28 p2** (Minsk, Envato) ficou sem rótulo e sem crédito. Nada a checar na tela. Tirar o rótulo foi o certo, porque a foto não é do Alasca.
- **O11. O K75 e o K76 saíram com razão:** nenhum item vem do Shutterstock. Se uma caça futura trouxer algum, a linha volta (identidade §7).
- **Fora desta lente.** O apóstrofo reto de "Juneau's roads" na `s03.html` (linha 185) é tipografia, não fato.

## Lista de nomes (quem está por trás de cada coisa sem nome na tela)

Os textos novos não atribuem nada a anônimo. A lista de 28/09 continua valendo:

- `OPPONENTS` (s31): os grupos contra a mudança que Reamer nomeia:
  - Alaska Committee, com o presidente Jim Clark;
  - FRANK;
  - Fairbanks Against Relocation Expenditures (FARE);
  - Anchorage Rejects the Move (ARM).

  Fonte: ADN.
- A fala de s18 ("their statement"): Frank Harris, Chairman, Taxpayers Capital Relocation Committee, 1978, p. 49 (P78). Não vai à tela, por decisão do roteiro.
- `ATTORNEY GENERAL OPINION · 1993`: Charles E. Cole, Attorney General, na carta de 24/8/1993 ao vice-governador John B. "Jack" Coghill (AG).
- `ALASKA SUPREME COURT · 1974`: opinião do Chief Justice Rabinowitz (BOU).
- `Upheld on appeal, 2011` (hoje em s50#5):
  - a opinião é da juíza Mary M. Schroeder, com voto vencido de Diarmuid F. O'Scannlain;
  - a anulação de 2009 é do juiz distrital John W. Sedwick (CA9).
- `RECORD OF DECISION · 2018` e `JUNE 2018`: Sandra A. Garcia-Aline, FHWA Alaska Division Administrator, que assina o aviso de 23/7/2018 (FR).
- `ABOUT 90%` (s53): o estudo cita "Knapp, G. 2015. 'An Introduction to Alaska Fiscal Facts and Choices.' Institute of Social and Economic Research, University of Alaska Anchorage" (FS, referências).
- `HOUSE BILL NO. 3`: o deputado G. Nelson, autor principal desde 13/02/2026, e os coautores (HB3, VOL).
- `Daily oil price`: a estimativa diária ANS West Coast do Alaska Department of Revenue, Tax Division (DOR).
- `FERRY 5,840 · ROAD 5,761`: a consulta de Juneau de outubro de 2000, citada pelo estudo a partir do FEIS de 2006. O resultado municipal original não foi aberto, e a nota do arquivo declara isso.

## Voláteis

**`STILL LAW` e `AS OF SEPTEMBER 2026` em s36 e s61** (R163, R164 e R264; AS 44.06.055 vigente).
- Conferidos no navegador do app em 26/09/2026 (`volateis-conferidos.md`).
- Não se reabriram hoje, porque o akleg.gov recusa robô.
- Hoje é 01/10. "As of September 2026" continua certo como fato datado.
- O que mudaria o fato: o HB 3 aprovado, que revogaria a lei a partir de 1/1/2027, ou uma proposta nova na 35ª Legislatura.

**`AS OF SEPTEMBER 2026` em s40** (R178: o HB 3 em "(H) CRA" desde 22/1/2025).
- Conferido em 26/09/2026.
- O que mudaria o fato: uma audiência numa sessão especial.
- O fim da 34ª Legislatura, em janeiro de 2027, mata o projeto. Dali em diante, a voz do p25 pede ajuste.
- Os três voláteis se reconferem na véspera de publicar.

**O card de Kiehl** (`Alaska state senator, Juneau`) é estável até janeiro de 2029, salvo renúncia (WIK, lida em 28/09/2026).

## Data-base

Checagem de **01/10/2026**. As datas de cada parte:
- itens novos e mudados: 01/10/2026, contra as cópias locais e o `conferencia-midia.json` de 01/10 (origem das fotos novas lida em 30/09, por volta das 23:45Z);
- itens herdados, as datas do laudo de 28/09:
  - voláteis: 26/09/2026, no navegador do app;
  - vereditos de mídia: 27/09/2026, e o `conferencia-midia.json` de 01/10 dá às fotos herdadas os mesmos valores;
  - série do DOR: 28/09/2026;
  - mandato de Kiehl: 28/09/2026.

## DECISÃO DO LUCAS PENDENTE (as que tocaram esta checagem)

- Onde gravar os laudos dos próximos vídeos (roupa §2). Este vai para `roteiros/juneau/qc-roteiro/`, como o pedido diz.
- Se a rubrica e as leis do Top10 (`knowledge/roteiro/PESQUISA-HONESTIDADE.md` e `seed/regras/ROT.md`) valem neste canal (roupa §0).
- A data de publicação: depois de janeiro de 2027, os voláteis de s36, s40 e s61 e a voz do p25 pedem ajuste.
- A cópia arquivada de site que não é do Estado do Alasca: a pergunta não foi feita, e nesta checagem nenhuma foi usada.
- O conserto de F1 mexe em cenas já renderizadas (s15 e s24) e pede render novo com MapTiler (gasto liberado em 01/10). Se as cenas já tiverem o ok do Lucas, a troca é dele.

## Os 2 padrões mais vistos

1. Quase tudo o que entrou nesta revisão é legenda de mapa, e cada palavra confere com a camada que a linha desenha: NE, OSM e os textos do estudo e do 9º Circuito. A exceção é uma legenda que dá à camada um sentido que ela não tem: `Proposed site` nomeia as feições que limitam o sítio. O aviso de quem fez a camada não chegou a quem a nomeou.
2. Os rótulos, os créditos e os avisos das fotos novas seguem o veredito do conferente à risca. O aviso do ano segue um critério só, a fala com ou sem marca de tempo.

VEREDITO: RESSALVA
