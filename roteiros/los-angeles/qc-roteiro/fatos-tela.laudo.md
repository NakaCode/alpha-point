# Laudo · verificador de fatos · textos de tela · los-angeles

Objeto: `out/los-angeles/textos-tela.json` (sha1 `ca26439056cc`), do redator-de-tela, 07/10/2026. Gravado pela sessão central a partir da resposta do verificador (ele não tem `Write`), sem edição.

COBERTURA: 534 de 534. Montei a lista à mão, com um script de leitura que não gravou nada no canal: os 359 textos de `_textos_por_cena` (T001 a T359, na ordem do arquivo), os 54 do glossário (G01 a G54), os 6 `cards_pessoa` (C1 a C6), os 81 `rotulos_dado` (D01 a D81), os 30 de `nao_vai_para_tela` (N01 a N30) e mais 4 afirmações que a tela faz pelo desenho e que nenhum campo de texto mostra (X01 a X04). Ficaram fora do denominador `_regras_de_serie` (8) e `_rotulos_acima_de_3_palavras` (6): são instruções ao editor e repetem afirmações que já estão na lista.

NOTA: 9.3/10. Quase toda a tela se sustenta no primário ou herda veredito de laudo anterior. Há um DIVERGE periférico: o contorno de Wilmington de 1909 aparece como a cidade de dezembro de 1905. Há também uma data de píer que só tem fonte de parte, e quatro voláteis sem marca.

Data-base: 07/10/2026, 20:48 (Brasília). Objeto: `out/los-angeles/textos-tela.json`, sha1 `ca26439056cc`. Herança: `fatos-final` → `fatos-r2` → `fatos-r3` → `fatos-r3-final`. Os ids F, N, R2, P5, R3 e R3A citados abaixo são os desses laudos.

---

## 1 · Respostas ao pedido (as 14 afirmações novas e as 2 mudanças do redator)

| # | afirmação | veredito |
|---|---|---|
| 1 | Willard, "Secretary, Los Angeles Chamber of Commerce (1891)" | **CONFIRMADA.** O guia da Huntington diz que ele se tornou secretário da Câmara de Comércio de Los Angeles em 1891. |
| 2 | "William Hood", "Chief engineer, Southern Pacific (1892)" | **CONFIRMADA, e pelo primário federal.** O H. Ex. Doc. 41 diz "Mr. William Hood, chief engineer of the company" e lista "Letter from William Hood, chief engineer Southern Pacific Company". Willard (1899, p. 61) traz "Wm. Hood, the chief engineer of the Southern Pacific". |
| 3 | "George H. Mendell", "Colonel, U.S. Army Corps of Engineers (1886)" | **CONFIRMADA.** O Cullum's Register dá "Colonel, Corps of Engineers, Sep. 16, 1886". Na carta de 08/11/1886 ele já era coronel efetivo, não por brevê. O "Maj." de 1871 também fecha: "Major, Corps of Engineers, Aug. 15, 1864". |
| 4 | Dana, "Sailor on the brig Pilgrim (1835)", e Morgan como membro da junta de 1897 | **CONFIRMADAS.** No `dana.txt`: l. 572, "brig Pilgrim"; l. 3642 a 3737, San Pedro; l. 4093, "On board the Pilgrim". No SD18: "BOARD FOR LOCATING A DEEP-WATER HARBOR IN SOUTHERN CALIFORNIA" e "MINORITY REPORT OF MR. RICHARD PRICE MORGAN". |
| 5 | 213–203 atribuído ao Times de 20/11 | **O redator está certo.** O Times de 20/11/1906 (Parte II, p. 2) imprime, nítido: "Of these, 213 are for annexation and 203 are against." O de 21/11 imprime "218", borrado, e 218 − 203 não dá a maioria de 10 que ele mesmo publica. O "Para a tela" de `fatos-final` (NOV. 21) estava impreciso e fica corrigido por esta linha. |
| 6 | "13,661–221 · AUG. 4" | **CONFIRMADA (herda N35).** Times de 05/08/1909: "In Los Angeles—For consolidation, 13,661; against consolidation, 221". Esse voto foi sobre Wilmington. A tela, como a voz, não diz que um só voto cobriu as duas fusões. |
| 7 | "AUG. 13, 1909" com "Long Beach annexation takes effect" | **CONFIRMADA (herda F127).** LB0005 e a camada 21: votação em 30/07/1909, vigência em 13/08/1909. |
| 8 | "1909 → 1912" com "a coast before the wall was done" | **CONFIRMADA (herda N37).** |
| 9 | "$2.9 MILLION CEILING" | **CONFIRMADA.** 29 Stat. 213: "at a cost not exceeding in the aggregate two million nine hundred thousand dollars". É o teto dos contratos do porto escolhido. |
| 10 | "Municipal Corporations Act, California" (s35) | **CONFIRMADA como descrição.** O título oficial impresso na p. 93 é "An Act to provide for the organization, incorporation, and government of municipal corporations" [Approved March 13, 1883]. A forma curta não está na página. O uso corrente aparece em resultados de busca, mas as duas páginas de origem responderam 403 e ficaram sem conferir (§7). |
| 11 | "search for a site, 1890" (s17) | **CONFIRMADA (herda F047).** 26 Stat. 426 (19/09/1890) manda a junta examinar a costa "with a view to determining the best location for a deep-water harbor". |
| 12 | "ABOUT 14 FT (1892)" | **CONFIRMADA.** H. Ex. Doc. 41, p. 4: "minimum depth of about 14 feet at mean low water"; o relatório do ano fiscal de 1892, p. 2626: "at the entrance of fully 14 feet". |
| 12 | "3,300 FT · GAP 1,000 FT · 2,500 FT" | **CONFIRMADA na imagem da p. 2124.** O OCR local lê "2,100 feet", mas é erro de OCR: a imagem `arce1888-p2124-arms.png` diz "2,500 feet long". |
| 13 | As linhas de fonte dos documentos | **Todas CONFIRMADAS.** H. Ex. Doc. 41 foi encaminhado ao Congresso em 6 e 7/12/1892, então "1892" está certo. SD18 é de 1897. Os estatutos da Califórnia são de 1883, 1889 e 1909. O vol. 29 das Statutes at Large é de 1896. |
| 14 | s33 com o contorno de Wilmington de 1909 como a cidade de 1905 | **DIVERGE.** O LA0008 registra "Also the following territory annexed to the City of Wilmington by an election held November 4, 1907": o Lote 3 de Terminal Island. O polígono `wilmington-1909-hamlin` inclui esse lote, que não era de Wilmington em dezembro de 1905. A regência pedia o polígono "declarado"; o `textos-tela.json` não traz declaração nenhuma (achado A1). |
| — | s16 com 3 pontos | **O redator está certo.** 26 Stat. 426 cria "a board of three engineer officers" (Mendell, Gillespie e Benyaurd, F048). Os cinco pontos da regência estariam errados. |
| — | O teto de Mendell sempre "18 OR 20 FT AT HIGH WATER" | **O redator está certo.** O texto é literal: "If 18 or 20 feet at high water can be obtained" (p. 2123). Sem o qualificador, o medidor (legendado "at low tide") afirmaria um teto em maré baixa que a fonte não dá. |

## 2 · A tabela

Chaves das URLs:
- [ARCE] https://www.govinfo.gov/content/pkg/SERIALSET-02631_00_00-002-0001-0002/pdf/SERIALSET-02631_00_00-002-0001-0002.pdf
- [HED41] https://www.govinfo.gov/content/pkg/SERIALSET-03103_00_00-035-0041-0000/pdf/SERIALSET-03103_00_00-035-0041-0000.pdf
- [SD18] https://www.govinfo.gov/content/pkg/SERIALSET-03560_00_00-001-0018-0000/pdf/SERIALSET-03560_00_00-001-0018-0000.pdf
- [S29] https://www.govinfo.gov/content/pkg/STATUTE-29/pdf/STATUTE-29-Pg202.pdf
- [S16] https://www.govinfo.gov/content/pkg/STATUTE-16/pdf/STATUTE-16-Pg538.pdf
- [S26] https://www.govinfo.gov/content/pkg/STATUTE-26/pdf/STATUTE-26-Pg426-2.pdf
- [CA83] https://clerk.assembly.ca.gov/sites/clerk.assembly.ca.gov/files/archive/Statutes/1883/1883Code.pdf
- [CA89] https://clerk.assembly.ca.gov/sites/clerk.assembly.ca.gov/files/archive/Statutes/1889/1889.PDF
- [CA09] https://clerk.assembly.ca.gov/sites/clerk.assembly.ca.gov/files/archive/Statutes/1907_09/1909.pdf
- [T99] https://archive.org/details/sim_los-angeles-times_the-los-angeles-times_1899-04-27
- [T13], [T20], [T21], [T0905], [T0913]: a mesma URL, terminando em `_1906-11-13`, `_1906-11-20`, `_1906-11-21`, `_1909-08-05` e `_1909-08-13`
- [WIL] https://archive.org/details/freeharborcontes00willrich
- [WILC] https://commons.wikimedia.org/wiki/File:The_free_harbor_contest_at_Los_Angeles_-_an_account_of_the_long_fight_waged_by_the_people_of_Southern_California_to_secure_a_harbor_located_at_a_point_open_to_competition_(IA_freeharborcontes00willrich).pdf
- [OAC] https://oac.cdlib.org/findaid/ark:/13030/c8b56s8q/
- [CUL] https://penelope.uchicago.edu/Thayer/E/Gazetteer/Places/America/United_States/Army/USMA/Cullums_Register/1538*.html
- [DANA] https://www.gutenberg.org/ebooks/2055
- [DANAC] https://commons.wikimedia.org/wiki/File:Two_years_before_the_mast;_a_personal_narrative_(IA_twoyearsbeforema00dana_7).pdf
- [LA7], [LA8], [LB5]: https://pwgis.blob.core.windows.net/smpm/SMPM_AnnexationCity/LA0007.pdf, depois LA0008.pdf e LB0005.pdf
- [L21] https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/21 · [L19] a mesma, terminando em …/19
- [TIG] https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html
- [HAM] https://www.loc.gov/item/2006627663/
- [PF24] https://kentico.portoflosangeles.org/getmedia/50998557-64e2-46ad-aa43-6a7a6a505b23/2024-facts-figures
- [PTEU] https://www.portoflosangeles.org/Business/statistics/Container-Statistics/Historical-TEU-Statistics-2024
- [PFF] https://www.portoflosangeles.org/business/statistics/facts-and-figures
- [P13] https://kentico.portoflosangeles.org/getmedia/359eb49c-ffe4-422b-80a6-9943703640f8/02_21_13_Item_10_Transmittal_1
- [ARMY] https://www.army.mil/article/294312
- [R02] https://archive.org/details/micro_IA40386009_0264
- [R92] https://archive.org/details/annualreportsec20unkngoog
- [R92b] https://archive.org/details/annualreportchi01commgoog
- [R05] https://archive.org/details/annualreportswa104deptgoog
- [BOC] https://archive.org/details/cu31924092558596
- [P21] https://archive.org/details/losangelesgreats00losa
- [MT] https://www.maptiler.com/copyright/ (e `marca/identidade.md` §6)
- [USGS] as folhas de 1896, 1903 e 1923 citadas em `out/los-angeles/_pesquisa/pauta-geo.json`
- Mídia: [M01] https://motionarray.com/stock-video/los-angeles-downtown-aerial-fly-drone-2212473/ · [M04] https://commons.wikimedia.org/wiki/File:Los_Angeles_MET_DP152257.jpg · [M05] https://commons.wikimedia.org/wiki/File:Carleton_Watkins_(American_-_The_Plaza,_Los_Angeles_-_Google_Art_Project.jpg · [M06] https://commons.wikimedia.org/wiki/File:Richard_H_Dana_Jr_1842.jpg · [M09a] https://commons.wikimedia.org/wiki/File:Wilmington-1870.jpg · [M09b] https://commons.wikimedia.org/wiki/File:Birds_eye_view_of_Los_Angeles,_California._LOC_75693093.jpg · [M11a] https://commons.wikimedia.org/wiki/File:View_of_Dead_Man%27s_Island_in_San_Pedro_Bay_looking_south,_ca.1910_(CHS-13019).jpg · [M11b] https://commons.wikimedia.org/wiki/File:Deadman%27s_Island_in_the_entrance_to_San_Pedro_Harbor,_California,_ca.1903_(CHS-1244).jpg · [M18a] https://commons.wikimedia.org/wiki/File:Santa_Monica_Canyon_and_Long_Wharf_of_Port_of_Los_Angeles,_ca.1900_(CHS-842).jpg · [M18b] https://commons.wikimedia.org/wiki/File:Longest_Wharf_in_the_World,_Santa_Monica,_Calif_(NYPL_b12647398-62319).tiff · [M27a] https://commons.wikimedia.org/wiki/File:Free_Harbor_Jubilee_poster,_Los_Angeles_%26_San_Pedro,_California,_1899.jpg · [M27b] https://commons.wikimedia.org/wiki/File:William_McKinley,_half-length_portrait,_seated_at_desk,_facing_right_LCCN91783827.jpg · [M33] https://commons.wikimedia.org/wiki/File:San_Pedro_harbor_(CHS.J3206).jpg · [M47a] https://commons.wikimedia.org/wiki/File:Dredging_in_the_Los_Angeles_Harbor_at_Wilmington_(CHS-2407).jpg · [M47b] https://catalog.archives.gov/id/45708899 · [M49] https://commons.wikimedia.org/wiki/File:LAD_11_Binder1_011_-_USACE-p15141coll5-18159.jpeg · [M54] https://app.envato.com/search/stock-video/90e9da08-dc29-4d50-ac1b-9ecb8764f099 · os vereditos estão em `out/los-angeles/_pesquisa/conferencia-midia.json`

Para o crédito "© MapTiler © OpenStreetMap contributors", o veredito é sempre o mesmo: CONFIRMADA, o crédito obrigatório da base de mapa, `marca/identidade.md` §6. A fonte é [MT].

| id | afirmação | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| T001 | Los Angeles (s01) | CONFIRMADA | lugar_na_origem "Los Angeles Downtown Aerial Fly Drone" (aprovado) | [M01] |
| T002 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T003 | Port of Los Angeles | CONFIRMADA | o porto (G11) | [PF24] |
| T004 | 2000–2024 | CONFIRMADA (herda F002) | "Busiest Container Port in the Western Hemisphere (2000-2024)" | [PF24] |
| T005 | most container traffic… by the port's own count | CONFIRMADA, só como atribuição (F002) | idem | [PF24] |
| T006 | Source: Port of Los Angeles, 2024 | CONFIRMADA | cartão de 2024 | [PF24] |
| T007 | grifo "can never be made a harbor for deep-water ships" | CONFIRMADA (F003) | p. 2123, literal | [ARCE] |
| T008 | NOV. 8, 1886 | CONFIRMADA (N07) | p. 2122: "San Francisco, Cal., November 8, 1886" | [ARCE] |
| T009 | Source: Annual Report of the Chief of Engineers, U.S. Army, 1888 | CONFIRMADA | H. Ex. Doc. 1, pt. 2, 50º Congresso, 2ª sessão; a carta está nas pp. 2122–2123 | [ARCE] |
| T010 | Los Angeles (s03) | CONFIRMADA | contorno do TIGER | [TIG] |
| T011 | ABOUT HALF A MILE | CONFIRMADA (R3-02b) | 0,54 mi; volátil | [TIG] |
| T012 | ABOUT 9 MILES (TODAY) | CONFIRMADA (R3-02c) | 8,66 mi; volátil | [TIG] |
| T013 | 1906 | CONFIRMADA (R3-03a, F104) | o contorno de 1906 | [HAM][L21] |
| T014 | San Pedro | CONFIRMADA (R3-03a) | cidade em 1906 | [LA7] |
| T015 | Wilmington | CONFIRMADA (R3-03a) | cidade desde 26/12/1905 | [LA8] |
| T016 | UNTIL 1909 | CONFIRMADA (F007) | consolidações em vigor em 28/08/1909 | [L21] |
| T017 | no coastline of its own | CONFIRMADA (F007) | idem | [L21] |
| T018 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T019 | Los Angeles (s04) | CONFIRMADA | lugar_na_origem "Los Angeles" | [M04] |
| T020 | Photo from 1876 | CONFIRMADA | "1876, printed ca. 1876"; aviso_de_ano: true | [M04] |
| T021 | 1850 · ABOUT 28 SQ MI | CONFIRMADA (F011) | 28,01 mi², LA0001, 04/04/1850 | [L21][HAM] |
| T022 | The Plaza | CONFIRMADA | o cartão imprime "The Plaza, Los Angeles" | [M05] |
| T023 | Photo from about 1880 | CONFIRMADA | "about 1880" | [M05] |
| T024 | ABOUT 14 MILES | CONFIRMADA (F012) | 13,99 a 14,09 mi | [L21] |
| T025 | nearest open beach | CONFIRMADA (F012) | Plaza → Playa del Rey | [L21] |
| T026 | Wilmington | CONFIRMADA (F013) | ponto GNIS | [L21] |
| T027 | ABOUT 19 MILES | CONFIRMADA (F013, R2-04a) | 19,10 a 19,15 mi, Plaza → Wilmington | [L21] |
| T028 | CALIFORNIA | CONFIRMADA | o estado | [ARCE] |
| T029 | San Francisco | CONFIRMADA (N01) | p. 2122 | [ARCE] |
| T030 | San Diego | CONFIRMADA (N01) | p. 2122 | [ARCE] |
| T031 | deep-water harbors, per Mendell, 1886 | CONFIRMADA (N01) | "no harbor for deep-sea vessels… except… San Francisco… San Diego" | [ARCE] |
| T032 | San Pedro Bay | CONFIRMADA (N02) | | [SD18] |
| T033 | winter storms | CONFIRMADA (N02) | "The southeaster comes in the winter and spring" | [HED41] |
| T034 | Source: Los Angeles County annexation records | CONFIRMADA | os 28,01 mi² vêm da camada 21 | [L21] |
| T035 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T036 | RICHARD HENRY DANA JR. | CONFIRMADA | prancha "RICHARD H. DANA, JR., IN 1842"; é o autor do livro | [M06][DANA] |
| T037 | Sailor on the brig Pilgrim (1835) | CONFIRMADA | l. 572 "brig Pilgrim"; em San Pedro a bordo do Pilgrim (l. 3642 a 4093) | [DANA] |
| T038 | Portrait from 1842 | CONFIRMADA | Commons Date=1842; aviso_de_ano: true | [M06] |
| T039 | grifo "We all agreed… getting off hides" | CONFIRMADA | lido na imagem da p. 109 (1895), letra a letra | [DANAC] |
| T040 | Source: Dana, Two Years Before the Mast (1895 edition) | CONFIRMADA | Houghton, Mifflin, 1895 | [DANAC] |
| T041 | 2 OR 3 MILES EACH WAY | CONFIRMADA (F018) | "a distance of 2 or 3 miles" | [ARCE] |
| T042 | Approximate route | CONFIRMADA | rota sem geometria de fonte (`marca/identidade.md` §6) | [ARCE] |
| T043 | Wilmington estuary | CONFIRMADA (F019, G32) | "It is a small estuary" | [ARCE] |
| T044 | 1890s outline (schematic) | CONFIRMADA | contorno das folhas USGS de 1896, levantadas nos anos 1890 (pauta-geo) | [USGS] |
| T045 | Rattlesnake Island | CONFIRMADA (F019) | | [R92] |
| T046 | Terminal Island today | CONFIRMADA (F019) | | [R02] |
| T047 | sandbar | CONFIRMADA (F020) | | [R92] |
| T048 | LESS THAN 2 FT (BEFORE 1871) | CONFIRMADA (F020) | "less than 2 feet at the entrance… at mean low tide" | [R92] |
| T049 | at low tide | CONFIRMADA (F020) | "mean low tide" | [R92] |
| T050 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T051 | Wilmington | CONFIRMADA | "Banning's Landing in Wilmington, 1870" | [M09a] |
| T052 | Photo from 1870 | CONFIRMADA | "Taken in 1870" | [M09a] |
| T053 | Wilmington | CONFIRMADA | "Birds Eye View of WILMINGTON" | [M09b] |
| T054 | Lithograph from 1877 | CONFIRMADA | 1877, litografia (Glover, LoC) | [M09b] |
| T055 | MARCH 1871 | CONFIRMADA (F021) | lei de 03/03/1871 | [S16] |
| T056 | $200,000 | CONFIRMADA (F021) | "two hundred thousand dollars" | [S16] |
| T057 | 1850 | CONFIRMADA (F011) | | [L21] |
| T058 | ABOUT 19 MILES | CONFIRMADA (N03) | 19,10 a 19,15 | [L21] |
| T059 | San Pedro Bay | CONFIRMADA | | [SD18] |
| T060 | Wilmington estuary | CONFIRMADA | | [ARCE] |
| T061 | 1890s outline (schematic) | CONFIRMADA | como T044 | [USGS] |
| T062 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T063 | Deadman's Island | CONFIRMADA | "Dead Man's Island in San Pedro Bay"; grafia unificada (G37) | [M11a] |
| T064 | Photo from about 1910 | CONFIRMADA | "Circa 1910" | [M11a] |
| T065 | Deadman's Island | CONFIRMADA | "Deadman's Island in the entrance to San Pedro Harbor" | [M11b] |
| T066 | Photo from about 1903 | CONFIRMADA | "Circa 1903" | [M11b] |
| T067 | JULY 1871 | CONFIRMADA (N04) | "approved July 1, 1871" | [R02] |
| T068 | plan by Maj. George H. Mendell, Corps of Engineers | CONFIRMADA | "by Maj. G. H. Mendell"; Cullum: major de 1864 a 1879 | [R02][CUL] |
| T069 | MORE THAN A MILE | CONFIRMADA (N05) | 6.700 pés = 1,27 mi | [R02] |
| T070 | jetty, 1871 | CONFIRMADA (N04, N05) | o projeto de 1871 | [R02] |
| T071 | Rattlesnake Island | CONFIRMADA (N05) | | [R02] |
| T072 | Deadman's Island | CONFIRMADA (N05) | | [R02] |
| T073 | Photo from about 1910 | CONFIRMADA | "Circa 1910" | [M11a] |
| T074 | shallows closed (schematic) | CONFIRMADA (F028) | | [R02] |
| T075 | ebb tide (schematic) | CONFIRMADA (F028) | | [R02] |
| T076 | 10 FT (1881) | CONFIRMADA (F030) | | [R02] |
| T077 | 11 FT (1888) | CONFIRMADA (F031) | p. 2124: "increased… to 11 feet" | [ARCE] |
| T078 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T079 | grifo "San Francisco, Cal., November 8, 1886." | CONFIRMADA | p. 2122 (PDF 754) | [ARCE] |
| T080 | NOV. 8, 1886 | CONFIRMADA (N07) | | [ARCE] |
| T081 | Col. George H. Mendell, Corps of Engineers | CONFIRMADA | assina "Colonel, Corps of Engineers"; Cullum: coronel desde 16/09/1886 | [ARCE][CUL] |
| T082 | 12–14 FT | CONFIRMADA (N08) | "vessels of 12 to 14 feet draught" | [ARCE] |
| T083 | draft: how deep a ship sits in the water | CONFIRMADA (N08) | definição de draught | [ARCE] |
| T084 | grifo "It is a small estuary and can never…" | CONFIRMADA (N09) | p. 2123, literal | [ARCE] |
| T085 | grifo "If 18 or 20 feet at high water…" | CONFIRMADA (F036) | p. 2123, literal | [ARCE] |
| T086 | 18 OR 20 FT AT HIGH WATER | CONFIRMADA (F036) | literal | [ARCE] |
| T087 | the ceiling Mendell expected | CONFIRMADA (F036, F143) | | [ARCE] |
| T088 | Source: Annual Report…, 1888 | CONFIRMADA | | [ARCE] |
| T089 | Wilmington estuary | CONFIRMADA | | [ARCE] |
| T090 | 1890s outline (schematic) | CONFIRMADA | como T044 | [USGS] |
| T091 | San Pedro Bay | CONFIRMADA | | [SD18] |
| T092 | DEEP-WATER: AT LEAST 30 FT | CONFIRMADA (F038) | SD18 p. 4: "vessels drawing at least 30 feet" | [SD18] |
| T093 | definition of the 1897 federal board | CONFIRMADA (F038) | | [SD18] |
| T094 | 18 OR 20 FT AT HIGH WATER | CONFIRMADA (F036) | | [ARCE] |
| T095 | "worthy of improvement" | CONFIRMADA (N11) | p. 2123, literal | [ARCE] |
| T096 | Mendell, 1886 | CONFIRMADA | | [ARCE] |
| T097 | the survey he asked for | CONFIRMADA (N11) | p. 2122: "to justify a survey of the bay of San Pedro" | [ARCE] |
| T098 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T099 | FEBRUARY 1888 | CONFIRMADA (F042) | "February 13, 1888" | [ARCE] |
| T100 | survey of San Pedro Bay | CONFIRMADA | título "SURVEY OF SAN PEDRO BAY, CALIFORNIA", p. 2124 | [ARCE] |
| T101 | grifo "it is proposed to construct a breakwater, the position of which…" | CONFIRMADA | p. 2124, literal | [ARCE] |
| T102 | breakwater design, 1888 (sketch from the report's figures) | CONFIRMADA | a p. 2124 dá rumos e medidas por escrito (S 47° E; N 75° E) | [ARCE] |
| T103 | 3,300 FT · GAP 1,000 FT · 2,500 FT | CONFIRMADA | na imagem: 3,300; gap 1,000; "2,500 feet long" (o OCR lê 2,100) | [ARCE] |
| T104 | breakwater: a wall out in the bay… | CONFIRMADA (F042) | | [ARCE] |
| T105 | grifo "This project appears to be well conceived." | CONFIRMADA | p. 2126 (PDF 758) | [ARCE] |
| T106 | Source: Annual Report…, 1888 | CONFIRMADA | | [ARCE] |
| T107 | GEORGE H. MENDELL | CONFIRMADA | Cullum | [CUL] |
| T108 | Colonel, U.S. Army Corps of Engineers (1886) | CONFIRMADA | "Colonel, Corps of Engineers, Sep. 16, 1886" | [CUL][ARCE] |
| T109 | JETTY · 1871 | CONFIRMADA (N12) | | [R02] |
| T110 | BREAKWATER · 1888 | CONFIRMADA (N12, F042) | endosso | [ARCE] |
| T111 | BOARD · 1891, com 3 pontos | CONFIRMADA (F048) | "a board of three engineer officers"; relatório de 08/12/1891 | [S26][R92b] |
| T112 | Santa Monica Bay | CONFIRMADA (G34) | | [SD18] |
| T113 | San Pedro Bay | CONFIRMADA | | [SD18] |
| T114 | Los Angeles | CONFIRMADA | | [TIG] |
| T115 | search for a site, 1890 | CONFIRMADA (F047) | 26 Stat. 426, de 19/09/1890 | [S26] |
| T116 | San Pedro · 1891 | CONFIRMADA (F048) | | [R92b] |
| T117 | with Mendell on the board | CONFIRMADA (F048) | | [R92b] |
| T118 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T119 | Santa Monica | CONFIRMADA | "Santa Monica Canyon and Long Wharf…" (menos específico que a origem) | [M18a] |
| T120 | Photo from about 1900 | CONFIRMADA | "Circa 1900" | [M18a] |
| T121 | Santa Monica | CONFIRMADA | "Santa Monica, Cal." | [M18b] |
| T122 | Postcard from 1902 | CONFIRMADA | "Copyright, 1902, by Detroit Photographic Co." | [M18b] |
| T123 | CHARLES WILLARD | CONFIRMADA | folha de rosto: "CHARLES DWIGHT WILLARD" | [WILC] |
| T124 | Secretary, Los Angeles Chamber of Commerce (1891) | CONFIRMADA | secretário a partir de 1891 (Huntington) | [OAC] |
| T125 | Port Los Angeles | CONFIRMADA (N14) | | [SD18] |
| T126 | Postcard from 1902 | CONFIRMADA | | [M18b] |
| T127 | Port of Los Angeles | CONFIRMADA | | [PF24] |
| T128 | today | CONFIRMADA | | [PF24] |
| T129 | Southern Pacific pier, 1893–94 | **NÃO ACHEI** no primário (achado A2) | só Willard, que dá "1893" e "about completed… early 1894"; o dossiê manda dizer "by 1894" (mec.div-09) | [WIL] |
| T130 | 4,300 FT | CONFIRMADA (N16), com nota X02 | "The pier is 4,300 feet long" | [SD18] |
| T131 | ABOUT 33 FT | CONFIRMADA (N16) | 5½ braças = 33 pés | [SD18] |
| T132 | deep-water: 30 FT | CONFIRMADA (F038) | o limiar "at least 30" | [SD18] |
| T133 | Source: Senate Document 18, 1897 | CONFIRMADA | | [SD18] |
| T134 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T135 | grifo "Thursday, September 8, 1892—10 a. m." | CONFIRMADA | Appendix 1, p. 28 impressa | [HED41] |
| T136 | WILLIAM HOOD | CONFIRMADA | "Mr. William Hood, chief engineer of the company" | [HED41][WIL] |
| T137 | Chief engineer, Southern Pacific (1892) | CONFIRMADA | "William Hood, chief engineer Southern Pacific Company" | [HED41] |
| T138 | grifo "any company who relied wholly… would go to the wall." | CONFIRMADA | p. 58, literal (sem a vírgula, que é do panfleto da Câmara) | [HED41] |
| T139 | Source: U.S. House Executive Document 41, 1892 | CONFIRMADA | encaminhado em 6 e 7/12/1892 | [HED41] |
| T140 | UNANIMOUS | CONFIRMADA (F053) | "unanimously adopted" | [HED41] |
| T141 | five Army engineers, October 1892 | CONFIRMADA (F053) | | [HED41] |
| T142 | "two harbors where one would answer the purpose" | CONFIRMADA (F054) | literal | [HED41] |
| T143 | Board of Engineers, 1892 | CONFIRMADA | "a Board of Engineer Officers of the U.S. Army" | [HED41] |
| T144 | San Pedro · 1891 · 1892 | CONFIRMADA (F048, F053) | | [HED41] |
| T145 | Source: H. Ex. Doc. 41, 1892 | CONFIRMADA | | [HED41] |
| T146 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T147 | grifo "A HARBOR LOCATED AT A POINT OPEN TO COMPETITION" | CONFIRMADA | lido na imagem da folha de rosto | [WILC] |
| T148 | not free of charge | CONFIRMADA (F057) | | [WIL] |
| T149 | Source: Charles Willard, The Free Harbor Contest…, 1899 | CONFIRMADA | "JULY, 1899" | [WILC] |
| T150 | Port Los Angeles | CONFIRMADA | | [SD18] |
| T151 | "monopoly harbor" | CONFIRMADA (N19) | literal | [WIL] |
| T152 | Willard, 1899 | CONFIRMADA | | [WIL] |
| T153 | "would probably eventuate in a serious monopoly" | CONFIRMADA (N19) | literal | [SD18] |
| T154 | Richard Morgan, minority report, 1897 | CONFIRMADA (F065) | | [SD18] |
| T155 | Source: Willard, 1899; Senate Document 18, 1897 | CONFIRMADA | | [WIL][SD18] |
| T156 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T157 | JUNE 1896 | CONFIRMADA (F061) | 03/06/1896 | [S29] |
| T158 | Rivers and Harbors Act | CONFIRMADA (G19) | | [S29] |
| T159 | grifo "the decision of a majority of which shall be final…" | CONFIRMADA | p. 213, literal | [S29] |
| T160 | $2.9 MILLION CEILING | CONFIRMADA | "not exceeding in the aggregate two million nine hundred thousand dollars" | [S29] |
| T161 | grifo "this Board reports in favor of San Pedro" | CONFIRMADA | SD18, p. 24 (PDF 24) | [SD18] |
| T162 | MARCH 1, 1897 | CONFIRMADA (F063) | | [SD18] |
| T163 | Source: U.S. Statutes at Large, vol. 29, 1896 | CONFIRMADA | | [S29] |
| T164 | Source: Senate Document 18, 1897 | CONFIRMADA | | [SD18] |
| T165 | 4–1 | CONFIRMADA (F064) | | [SD18] |
| T166 | RICHARD MORGAN | CONFIRMADA (G05) | | [SD18] |
| T167 | minority report · MARCH 15, 1897 | CONFIRMADA (F065) | l. 2202 a 2205 | [SD18] |
| T168 | grifo "MINORITY REPORT OF MR. RICHARD PRICE MORGAN." | CONFIRMADA | literal | [SD18] |
| T169 | Source: Senate Document 18, 1897 | CONFIRMADA | | [SD18] |
| T170 | San Pedro Bay | CONFIRMADA | | [SD18] |
| T171 | 1891 · 1892 · 1897 | CONFIRMADA | | [SD18][HED41] |
| T172 | Los Angeles | CONFIRMADA | | [HAM] |
| T173 | MORE THAN 20 MILES (opcional) | CONFIRMADA (fatos-r2 §3) | 24,43 mi até Point Fermin | [L21] |
| T174 | the strip of 1906 | CONFIRMADA (N21) | | [LA7] |
| T175 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T176 | APRIL 26, 1899 | CONFIRMADA (F071) | | [T99] |
| T177 | Free Harbor Jubilee | CONFIRMADA | o cartaz | [M27a] |
| T178 | WILLIAM MCKINLEY | CONFIRMADA | | [M27b] |
| T179 | President of the United States (1899) | CONFIRMADA (F072) | "President McKinley at Washington", 1899 | [WIL] |
| T180 | Photo from 1898 | CONFIRMADA | data_na_origem 1898; aviso: true | [M27b] |
| T181 | LOS ANGELES TIMES · APRIL 27, 1899 · PAGE 10 | CONFIRMADA (nota N-1) | p. 10, "THURSDAY, APRIL 27, 1899" | [T99] |
| T182 | folha "DUMPING THE ROCK…" | CONFIRMADA | literal (imagem c27_rock1 e OCR l. 10602 a 10740) | [T99] |
| T183 | folha "…between 15,000 and 20,000." | CONFIRMADA (R3-04) | literal | [T99] |
| T184 | 15,000–20,000 | CONFIRMADA (R3-04) | | [T99] |
| T185 | estimate of the crowd, per the Los Angeles Times | CONFIRMADA (R3-04) | | [T99] |
| T186 | Source: Los Angeles Times, April 27, 1899 | CONFIRMADA | | [T99] |
| T187 | Santa Catalina Island | CONFIRMADA (F075) | | [T99] |
| T188 | Approximate route | CONFIRMADA | rota sem geometria de fonte | [T99] |
| T189 | JANUARY 1905 | CONFIRMADA (N23) | | [R05] |
| T190 | AT LEAST 9,000 FT | CONFIRMADA (N23) | | [R05] |
| T191 | 1899 → 1912 | CONFIRMADA (F077) | | [ARMY] |
| T192 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T193 | APRIL 1, 1905 | CONFIRMADA (N25) | | [R05] |
| T194 | federal dredge (schematic) | CONFIRMADA (N25) | | [R05] |
| T195 | dredged channel (schematic) | CONFIRMADA (F080) | | [R02] |
| T196 | Terminal Island | CONFIRMADA | | [R02] |
| T197 | the old Rattlesnake Island | CONFIRMADA (F080) | | [R02] |
| T198 | MADE LAND | CONFIRMADA (F080) | "deposited behind bulkhead lines" | [R02] |
| T199 | (schematic) | SEM AFIRMAÇÃO | declaração de esquema | [R02] |
| T200 | 21 FT (1906) | CONFIRMADA (F081) | | [R02] |
| T201 | ABOUT 14 FT (1892) | CONFIRMADA | "about 14 feet at mean low water" | [HED41][R92] |
| T202 | tide | CONFIRMADA (F029) | | [WIL] |
| T203 | dredge | CONFIRMADA (F082) | | [R02] |
| T204 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T205 | San Pedro | CONFIRMADA | "View of San Pedro…" | [M33] |
| T206 | Photo from about 1891–1910 | CONFIRMADA | "Between circa 1891 and circa 1910" | [M33] |
| T207 | A CITY BY 1890 | CONFIRMADA (F085) | censo de 1890 | [L21] |
| T208 | Wilmington (o rótulo) | CONFIRMADA; o contorno vai em X01 | | [LA8] |
| T209 | DECEMBER 1905 | CONFIRMADA (F086) | "incorporated… on December 26, 1905" | [LA8] |
| T210 | Los Angeles | CONFIRMADA | | [HAM] |
| T211 | ABOUT 19 MILES | CONFIRMADA (F087) | | [L21] |
| T212 | 43 SQ MI | CONFIRMADA (F089) | 43,26 | [L21] |
| T213 | the city before the strip | CONFIRMADA | | [L21] |
| T214 | San Pedro | CONFIRMADA (nota X03) | | [LA8] |
| T215 | Wilmington | CONFIRMADA; o contorno vai em X01 | | [LA8] |
| T216 | Source: Los Angeles County annexation records | CONFIRMADA | | [L21] |
| T217 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T218 | 1883 | CONFIRMADA | "[Approved March 13, 1883.]" | [CA83] |
| T219 | Municipal Corporations Act, California | CONFIRMADA como descrição do título oficial | "An Act to provide for the… government of municipal corporations" (a forma curta não está na página) | [CA83] |
| T220 | grifo "may become consolidated into one corporation" | CONFIRMADA | p. 98, na imagem | [CA83] |
| T221 | grifo "Two or more contiguous municipal corporations" | CONFIRMADA | p. 97, na imagem | [CA83] |
| T222 | contiguous: touching | CONFIRMADA (F094) | | [CA83] |
| T223 | grifo "No territory which … shall be annexed…" | CONFIRMADA | p. 360; a elisão não muda o sentido | [CA89] |
| T224 | 1889 | CONFIRMADA | "Approved March 19, 1889" | [CA89] |
| T225 | annexation law | CONFIRMADA | a lei de 1899 cobre só território desabitado e não revoga a de 1889 (Sec. 5) | [CA89] |
| T226 | Source: Statutes of California, 1883 | CONFIRMADA | | [CA83] |
| T227 | Source: Statutes of California, 1889 | CONFIRMADA | | [CA89] |
| T228 | Los Angeles | CONFIRMADA | | [HAM] |
| T229 | San Pedro | CONFIRMADA | | [LA7] |
| T230 | Wilmington | CONFIRMADA | | [LA7] |
| T231 | 1889 law | CONFIRMADA (F095) | | [CA89] |
| T232 | only if they touched | CONFIRMADA (F094) | | [CA83] |
| T233 | two shapes that don't touch | SEM AFIRMAÇÃO (F099) | | [CA83] |
| T234 | the strip | CONFIRMADA (F100) | | [LA7] |
| T235 | San Pedro | CONFIRMADA | | [LA7] |
| T236 | Wilmington | CONFIRMADA | | [LA7] |
| T237 | NOV. 12, 1906 | CONFIRMADA (F101) | | [T13] |
| T238 | THE CITY | CONFIRMADA (F101) | | [CA89] |
| T239 | TERRITORY | CONFIRMADA (F101) | | [CA89] |
| T240 | a majority needed in both | CONFIRMADA (F101) | | [CA89] |
| T241 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T242 | LOS ANGELES TIMES · NOV. 13, 1906 · PART II, PAGE 1 | CONFIRMADA (nota N-1) | Parte II, p. 1, "TUESDAY MORNING, NOVEMBER 13, 1906" | [T13] |
| T243 | folha A: "ANNEXATION BY A HAIR…" | CONFIRMADA | literal, nas imagens v-1906-11-13_manchete e _lide | [T13] |
| T244 | the Times had campaigned for annexation | CONFIRMADA (N26) | | [T13] |
| T245 | …NOV. 21, 1906 · PART II, PAGE 2 | CONFIRMADA | na imagem: "2 … II … WEDNESDAY, NOVEMBER 21" | [T21] |
| T246 | folha B: "Official Figures. […] 6612… 914… 5698." | CONFIRMADA | literal (crop21_a); 6.612 − 914 = 5.698 | [T21] |
| T247 | …NOV. 20, 1906 · PART II, PAGE 2 | CONFIRMADA | na imagem: "2 … II … TUESDAY, NOVEMBER 20" | [T20] |
| T248 | folha C: "TEN AHEAD FOR ANNEXATION…" | CONFIRMADA | literal (crop20n16_head e _b) | [T20] |
| T249 | 10 VOTES (213–203) | CONFIRMADA (N28) | 213 + 203 = 416; 213 − 203 = 10 | [T20] |
| T250 | official count, per the Los Angeles Times, Nov. 20, 1906 | CONFIRMADA | 20/11 imprime 213, nítido; 21/11 imprime "218" | [T20][T21] |
| T251 | Source: Los Angeles Times, Nov. 13–21, 1906 | CONFIRMADA | | [T13][T21] |
| T252 | DEC. 26, 1906 | CONFIRMADA (F104), com nota X04 | quadro "History" de Hamlin: "Dec. 26, 1906 · Shoestring" | [L21][HAM] |
| T253 | annexation takes effect | CONFIRMADA (F104) | | [L21] |
| T254 | the city's annexation map, 1916 | CONFIRMADA (R2-07a e b) | | [HAM] |
| T255 | 18.64 SQ MI | CONFIRMADA (P5-1) | | [HAM] |
| T256 | the whole annexation | CONFIRMADA (P5-1) | | [HAM] |
| T257 | thin part: less than half the area | CONFIRMADA (P5-2) | 46,2 % | [HAM] |
| T258 | ABOUT HALF A MILE | CONFIRMADA (P5-4) | | [HAM] |
| T259 | ABOUT 15 MILES (1906) | CONFIRMADA (R3A-01) | 14,81 mi | [HAM] |
| T260 | county land, 1906 | CONFIRMADA (R3-05c) | | [L21] |
| T261 | Torrance · 1921 | CONFIRMADA (R3-06) | TOR0001, 12/05/1921 | [L21] |
| T262 | Gardena · 1930 | CONFIRMADA (R3-06) | GAR0001, 11/09/1930 | [L21] |
| T263 | Lomita · 1964 | CONFIRMADA (R3-06) | LOM0001, 30/06/1964 | [L21] |
| T264 | Carson · 1968 | CONFIRMADA (R3-06) | CAR0001, 20/02/1968 | [L21] |
| T265 | year each became a city | CONFIRMADA | | [L21] |
| T266 | Source: Los Angeles County annexation records | CONFIRMADA | | [L21] |
| T267 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T268 | LEGAL DESCRIPTION · ANNEXATION TO THE CITY OF LOS ANGELES, 1906 · LA0007 | CONFIRMADA (cabeçalho descritivo) | o documento traz "SHOESTRING ANNEXATION"; é uma compilação do condado sem data | [LA7] |
| T269 | folha: "[…] the boundary line of said City of San Pedro […] the southerly and westerly boundary line of said City of Wilmington […]" | CONFIRMADA | literal, na imagem da p. 2 | [LA7] |
| T270 | Source: Los Angeles County Public Works, annexation record LA0007 | CONFIRMADA | | [LA7] |
| T271 | the tide line | CONFIRMADA (F112) | | [LA7] |
| T272 | ABOUT HALF A MILE | CONFIRMADA (N30) | | [HAM] |
| T273 | San Pedro | CONFIRMADA | | [LA7] |
| T274 | Wilmington | CONFIRMADA | | [LA7] |
| T275 | ALMOST 3 MORE YEARS | CONFIRMADA (N31) | 2 anos e 8 a 9 meses | [L21] |
| T276 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T277 | MARCH 1909 | CONFIRMADA (N33) | "Approved March 11, 1909" | [CA09] |
| T278 | Statutes of California, ch. 184 | CONFIRMADA | "CHAPTER 184", na imagem | [CA09] |
| T279 | grifo "each one of which is contiguous to the other" | CONFIRMADA | p. 282, na imagem | [CA09] |
| T280 | Source: Statutes of California, 1909 | CONFIRMADA | | [CA09] |
| T281 | Wilmington | CONFIRMADA | | [LA8] |
| T282 | Los Angeles | CONFIRMADA | | [HAM] |
| T283 | San Pedro | CONFIRMADA | | [LA8] |
| T284 | 107–61 · AUG. 4 | CONFIRMADA (N34) | | [T0905] |
| T285 | 13,661–221 · AUG. 4 | CONFIRMADA (N35) | 98,4 % | [T0905] |
| T286 | 726–227 · AUG. 12 | CONFIRMADA (F124) | | [T0913] |
| T287 | AUG. 28, 1909 | CONFIRMADA (F125) | | [L21] |
| T288 | 76 SQ MI | CONFIRMADA (F125) | 76,44 | [L21] |
| T289 | a coastline of its own | CONFIRMADA (F125) | | [L21] |
| T290 | Source: Los Angeles Times, Aug. 5 and 13, 1909 | CONFIRMADA | | [T0905][T0913] |
| T291 | Source: Los Angeles County annexation records | CONFIRMADA | | [L21] |
| T292 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T293 | LOS ANGELES TIMES · AUG. 13, 1909 · PART II, PAGE 1 | CONFIRMADA (nota N-1) | na imagem: "FRIDAY MORNING, AUGUST 13, 1909" | [T0913] |
| T294 | folha "SAN PEDRO ENTERS THE GREATER CITY. […] Thus Los Angeles becomes…" | CONFIRMADA | literal, nas imagens | [T0913] |
| T295 | the Times had campaigned for the strip | CONFIRMADA (F126) | | [T13] |
| T296 | Source: Los Angeles Times, Aug. 13, 1909 | CONFIRMADA | | [T0913] |
| T297 | Long Beach | CONFIRMADA | | [LB5] |
| T298 | AUG. 13, 1909 | CONFIRMADA (F127) | | [LB5][L21] |
| T299 | Long Beach annexation takes effect | CONFIRMADA (F127) | | [LB5] |
| T300 | city boundary, USGS map of 1923 | CONFIRMADA | camada divisa-la-lb-terminal-island-usgs1923 (pauta-geo) | [USGS] |
| T301 | Los Angeles | CONFIRMADA | | [HAM] |
| T302 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T303 | Wilmington | CONFIRMADA | "Los Angeles Harbor at Wilmington" | [M47a] |
| T304 | Photo from about 1912 | CONFIRMADA | "Circa 1912" | [M47a] |
| T305 | ABOUT 15,000 FT | CONFIRMADA (F130) | | [BOC] |
| T306 | undeveloped waterfront, per a 1910 federal report | CONFIRMADA (F130) | | [BOC] |
| T307 | Los Angeles Harbor Light | CONFIRMADA | "Los Angeles Harbor Lt. Sta." | [M47b] |
| T308 | Photo from 1914 | CONFIRMADA | "Jan. 26, 1914" | [M47b] |
| T309 | 1912 | CONFIRMADA (N36) | | [ARMY] |
| T310 | breakwater completed, per the Corps of Engineers | CONFIRMADA (N36) | | [ARMY] |
| T311 | JUST OVER 2 MILES | CONFIRMADA (N36) | 2,11 mi | [P21] |
| T312 | Photo from 1914 | CONFIRMADA | | [M47b] |
| T313 | 1909 → 1912 | CONFIRMADA (N37) | | [ARMY][L21] |
| T314 | a coast before the wall was done | CONFIRMADA (N37) | | [ARMY] |
| T315 | ABOUT 469 SQ MI | CONFIRMADA (F137) | 468,852; volátil | [L19] |
| T316 | Source: Los Angeles County, 2026 | CONFIRMADA | camada 19, consultada em 07/10/2026 | [L19] |
| T317 | ABOUT HALF A MILE | CONFIRMADA (N38) | volátil | [TIG] |
| T318 | ABOUT 9 MILES (TODAY) | CONFIRMADA (R2-06b) | volátil | [TIG] |
| T319 | Torrance · 1921 | CONFIRMADA (R3-06) | | [L21] |
| T320 | Gardena · 1930 | CONFIRMADA (R3-06) | | [L21] |
| T321 | Lomita · 1964 | CONFIRMADA (R3-06) | | [L21] |
| T322 | Carson · 1968 | CONFIRMADA (R3-06) | | [L21] |
| T323 | year each became a city | CONFIRMADA | | [L21] |
| T324 | Source: Los Angeles County annexation records | CONFIRMADA | | [L21] |
| T325 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T326 | Port of Los Angeles | CONFIRMADA | "Los Angeles harbor deepening" (lugar equivalente) | [M49] |
| T327 | Photo from 1982 | CONFIRMADA | "January 1982" | [M49] |
| T328 | Main Channel | CONFIRMADA (N40) | | [P13] |
| T329 | Port of Los Angeles and U.S. Army Corps of Engineers | CONFIRMADA (N40) | | [P13] |
| T330 | 45 FT | CONFIRMADA (N40) | | [P13] |
| T331 | 53 FT (2013) | CONFIRMADA (N40) | | [P13] |
| T332 | 18 OR 20 FT AT HIGH WATER | CONFIRMADA (F143) | | [ARCE] |
| T333 | the ceiling Mendell expected, 1886 | CONFIRMADA (F143) | | [ARCE] |
| T334 | 53 FT | CONFIRMADA (F144) | volátil | [PFF] |
| T335 | ABOUT 10.3 MILLION TEU | CONFIRMADA (F145) | 10.297.352 | [PTEU] |
| T336 | Port of Los Angeles · 2024 | CONFIRMADA | | [PTEU] |
| T337 | Source: Port of Los Angeles; U.S. Army Corps of Engineers, 2013 | CONFIRMADA | | [P13] |
| T338 | Source: Port of Los Angeles, 2024 | CONFIRMADA | | [PTEU] |
| T339 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T340 | 20 FT | CONFIRMADA (R2-02) | definição do TEU | [PFF] |
| T341 | 1 TEU | CONFIRMADA (R2-02) | | [PFF] |
| T342 | 40 FT | CONFIRMADA (R2-02) | | [PFF] |
| T343 | = 2 TEU | CONFIRMADA (R2-02) | | [PFF] |
| T344 | Port of Los Angeles | CONFIRMADA | | [PF24] |
| T345 | Port of Long Beach | CONFIRMADA (G13) | sem número | [PF24] |
| T346 | BUSIEST CONTAINER PORT | CONFIRMADA, só como atribuição (F147) | | [PF24] |
| T347 | in the Western Hemisphere, by the port's own count · 2000–2024 | CONFIRMADA (F147) | | [PF24] |
| T348 | city boundary | CONFIRMADA | TIGER | [TIG] |
| T349 | Source: Port of Los Angeles, 2024 | CONFIRMADA | | [PF24] |
| T350 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T351 | San Pedro | CONFIRMADA | "San Pedro Harbor Lighthouse… Los Angeles, California" | [M54] |
| T352 | 4–1 · 1897 | CONFIRMADA (F151) | | [SD18] |
| T353 | Port Los Angeles | CONFIRMADA | | [SD18] |
| T354 | ABOUT 19 MILES | CONFIRMADA (R2-04a) | | [L21] |
| T355 | ABOUT HALF A MILE | CONFIRMADA (N30) | | [HAM] |
| T356 | 53 FT | CONFIRMADA (F144) | volátil | [PFF] |
| T357 | 1850 · 1906 · 1909 | CONFIRMADA | | [HAM] |
| T358 | © MapTiler… | CONFIRMADA | crédito da base | [MT] |
| T359 | Where would you have put the harbor? | SEM AFIRMAÇÃO | pergunta | [PF24] |
| G01 | George H. Mendell | CONFIRMADA | Cullum | [CUL] |
| G02 | Richard Henry Dana Jr. | CONFIRMADA | | [M06] |
| G03 | Charles Willard | CONFIRMADA | | [OAC] |
| G04 | William Hood | CONFIRMADA | | [HED41] |
| G05 | Richard Morgan | CONFIRMADA | | [SD18] |
| G06 | William McKinley | CONFIRMADA | | [WIL] |
| G07 | U.S. Army Corps of Engineers | CONFIRMADA | | [ARMY] |
| G08 | Southern Pacific | CONFIRMADA | | [HED41] |
| G09 | Los Angeles Chamber of Commerce | CONFIRMADA | | [OAC] |
| G10 | Los Angeles Times | CONFIRMADA (nota N-1) | | [T13] |
| G11 | Port of Los Angeles | CONFIRMADA | | [PF24] |
| G12 | Port Los Angeles | CONFIRMADA | "Port Los Angeles is the name given…" | [SD18] |
| G13 | Port of Long Beach | CONFIRMADA | | [PF24] |
| G14 | Board of Engineers (1892) | CONFIRMADA | | [HED41] |
| G15 | Congress | CONFIRMADA | | [S26] |
| G16 | Free Harbor Fight | CONFIRMADA (N18) | | [WIL] |
| G17 | Free Harbor Jubilee | CONFIRMADA | | [M27a] |
| G18 | Alpha Point | NADA A CHECAR | marca do canal | — |
| G19 | Rivers and Harbors Act (1896) | CONFIRMADA | 29 Stat. 202 | [S29] |
| G20 | Municipal Corporations Act (1883) | CONFIRMADA como descrição | título e data na p. 93 | [CA83] |
| G21 | annexation law (1889) | CONFIRMADA | cap. CCXLVII, 19/03/1889 | [CA89] |
| G22 | Statutes of California, ch. 184 | CONFIRMADA | | [CA09] |
| G23 | Senate Document 18 | CONFIRMADA | 55º Congresso, 1ª sessão | [SD18] |
| G24 | House Executive Document 41 | CONFIRMADA | 52º Congresso, 2ª sessão | [HED41] |
| G25 | Annual Report of the Chief of Engineers | CONFIRMADA | Serial Set 2631 | [ARCE] |
| G26 | Two Years Before the Mast | CONFIRMADA | | [DANA] |
| G27 | The Free Harbor Contest at Los Angeles | CONFIRMADA | julho de 1899 | [WILC] |
| G28 | Los Angeles | CONFIRMADA | | [TIG] |
| G29 | San Pedro | CONFIRMADA | | [LA8] |
| G30 | San Pedro Bay | CONFIRMADA | | [SD18] |
| G31 | Wilmington | CONFIRMADA | | [LA8] |
| G32 | Wilmington estuary | CONFIRMADA | | [ARCE] |
| G33 | Santa Monica | CONFIRMADA | | [M18a] |
| G34 | Santa Monica Bay | CONFIRMADA | | [SD18] |
| G35 | Rattlesnake Island | CONFIRMADA | | [R92] |
| G36 | Terminal Island | CONFIRMADA | | [R02] |
| G37 | Deadman's Island | CONFIRMADA | | [M11b] |
| G38 | Santa Catalina Island | CONFIRMADA | | [T99] |
| G39 | Long Beach | CONFIRMADA | cidade desde 13/12/1897 (LB0001) | [L21] |
| G40 | San Francisco | CONFIRMADA | | [ARCE] |
| G41 | San Diego | CONFIRMADA | | [ARCE] |
| G42 | CALIFORNIA | CONFIRMADA | | [ARCE] |
| G43 | The Plaza | CONFIRMADA | | [M05] |
| G44 | Western Hemisphere | CONFIRMADA | | [PF24] |
| G45 | Main Channel | CONFIRMADA | | [P13] |
| G46 | Los Angeles Harbor Light | CONFIRMADA | | [M47b] |
| G47 | Torrance | CONFIRMADA | | [L21] |
| G48 | Gardena | CONFIRMADA | | [L21] |
| G49 | Lomita | CONFIRMADA | | [L21] |
| G50 | Carson | CONFIRMADA | | [L21] |
| G51 | TEU | CONFIRMADA | | [PTEU] |
| G52 | FT | SEM AFIRMAÇÃO (unidade) | | — |
| G53 | SQ MI | SEM AFIRMAÇÃO (unidade) | | — |
| G54 | MILES | SEM AFIRMAÇÃO (unidade) | | — |
| C1 | Dana · Sailor on the brig Pilgrim (1835) · Portrait from 1842 | CONFIRMADA | como T036 a T038 | [DANA][M06] |
| C2 | Mendell · Colonel, U.S. Army Corps of Engineers (1886) | CONFIRMADA | como T108 | [CUL] |
| C3 | Willard · Secretary… (1891) | CONFIRMADA | como T124 | [OAC] |
| C4 | Hood · Chief engineer, Southern Pacific (1892) | CONFIRMADA | como T137 | [HED41] |
| C5 | Morgan · Member of the 1897 harbor board; minority report, March 15, 1897; vínculo "Board for Locating a Deep-Water Harbor in Southern California" | CONFIRMADA | o nome da junta, literal (SD18, l. 109 e 2189) | [SD18] |
| C6 | McKinley · President of the United States (1899) · Photo from 1898 | CONFIRMADA | | [WIL][M27b] |
| D01 | 2000–2024 | CONFIRMADA (F002) | | [PF24] |
| D02 | ABOUT HALF A MILE (s03) | CONFIRMADA; falta a marca de volátil (A3) | | [TIG] |
| D03 | ABOUT 9 MILES (TODAY) | CONFIRMADA; falta a marca de volátil (A3) | | [TIG] |
| D04 | UNTIL 1909 | CONFIRMADA | | [L21] |
| D05 | 1850 · ABOUT 28 SQ MI | CONFIRMADA | | [L21] |
| D06 | ABOUT 14 MILES | CONFIRMADA | | [L21] |
| D07 | ABOUT 19 MILES | CONFIRMADA | | [L21] |
| D08 | 2 OR 3 MILES EACH WAY | CONFIRMADA | | [ARCE] |
| D09 | LESS THAN 2 FT (BEFORE 1871) | CONFIRMADA | | [R92] |
| D10 | $200,000 | CONFIRMADA | | [S16] |
| D11 | MARCH 1871 | CONFIRMADA | | [S16] |
| D12 | JULY 1871 | CONFIRMADA | | [R02] |
| D13 | MORE THAN A MILE | CONFIRMADA | | [R02] |
| D14 | 10 FT (1881) | CONFIRMADA | | [R02] |
| D15 | 11 FT (1888) | CONFIRMADA | | [ARCE] |
| D16 | NOV. 8, 1886 | CONFIRMADA | | [ARCE] |
| D17 | 12–14 FT | CONFIRMADA | | [ARCE] |
| D18 | 18 OR 20 FT AT HIGH WATER | CONFIRMADA | | [ARCE] |
| D19 | DEEP-WATER: AT LEAST 30 FT | CONFIRMADA | | [SD18] |
| D20 | FEBRUARY 1888 | CONFIRMADA | | [ARCE] |
| D21 | 3,300 · GAP 1,000 · 2,500 FT | CONFIRMADA (na imagem) | | [ARCE] |
| D22 | JETTY · 1871 / BREAKWATER · 1888 / BOARD · 1891, com 3 pontos | CONFIRMADA | | [S26] |
| D23 | San Pedro · 1891 | CONFIRMADA | | [R92b] |
| D24 | 4,300 FT | CONFIRMADA, com nota X02 | | [SD18] |
| D25 | ABOUT 33 FT | CONFIRMADA | | [SD18] |
| D26 | UNANIMOUS | CONFIRMADA | | [HED41] |
| D27 | San Pedro · 1891 · 1892 | CONFIRMADA | | [HED41] |
| D28 | JUNE 1896 | CONFIRMADA | | [S29] |
| D29 | $2.9 MILLION CEILING | CONFIRMADA | | [S29] |
| D30 | MARCH 1, 1897 | CONFIRMADA | | [SD18] |
| D31 | 4–1 | CONFIRMADA | | [SD18] |
| D32 | MARCH 15, 1897 | CONFIRMADA | | [SD18] |
| D33 | 1891 · 1892 · 1897 | CONFIRMADA | | [SD18] |
| D34 | MORE THAN 20 MILES | CONFIRMADA | | [L21] |
| D35 | APRIL 26, 1899 | CONFIRMADA | | [T99] |
| D36 | 15,000–20,000 | CONFIRMADA | | [T99] |
| D37 | JANUARY 1905 | CONFIRMADA | | [R05] |
| D38 | AT LEAST 9,000 FT | CONFIRMADA | | [R05] |
| D39 | 1899 → 1912 | CONFIRMADA | | [ARMY] |
| D40 | APRIL 1, 1905 | CONFIRMADA | | [R05] |
| D41 | 21 FT (1906) | CONFIRMADA | | [R02] |
| D42 | ABOUT 14 FT (1892) | CONFIRMADA | | [HED41] |
| D43 | A CITY BY 1890 | CONFIRMADA | | [L21] |
| D44 | DECEMBER 1905 | CONFIRMADA | | [LA8] |
| D45 | 43 SQ MI | CONFIRMADA | | [L21] |
| D46 | 1883 | CONFIRMADA | | [CA83] |
| D47 | 1889 | CONFIRMADA | | [CA89] |
| D48 | NOV. 12, 1906 | CONFIRMADA | | [T13] |
| D49 | 10 VOTES (213–203), Nov. 20 | CONFIRMADA | | [T20] |
| D50 | 6612 / 914 | CONFIRMADA | | [T21] |
| D51 | DEC. 26, 1906 | CONFIRMADA (X04) | | [L21] |
| D52 | 18.64 SQ MI | CONFIRMADA | | [HAM] |
| D53 | ABOUT HALF A MILE (1906) | CONFIRMADA | | [HAM] |
| D54 | ABOUT 15 MILES (1906) | CONFIRMADA | | [HAM] |
| D55 | as quatro pílulas | CONFIRMADA | | [L21] |
| D56 | ABOUT HALF A MILE | CONFIRMADA | | [HAM] |
| D57 | ALMOST 3 MORE YEARS | CONFIRMADA | | [L21] |
| D58 | MARCH 1909 | CONFIRMADA | | [CA09] |
| D59 | 107–61 · AUG. 4 | CONFIRMADA | | [T0905] |
| D60 | 13,661–221 · AUG. 4 | CONFIRMADA | | [T0905] |
| D61 | 726–227 · AUG. 12 | CONFIRMADA | | [T0913] |
| D62 | AUG. 28, 1909 | CONFIRMADA | | [L21] |
| D63 | 76 SQ MI | CONFIRMADA | | [L21] |
| D64 | AUG. 13, 1909 | CONFIRMADA | | [LB5] |
| D65 | ABOUT 15,000 FT | CONFIRMADA | | [BOC] |
| D66 | 1912 | CONFIRMADA | | [ARMY] |
| D67 | JUST OVER 2 MILES | CONFIRMADA | | [P21] |
| D68 | 1909 → 1912 | CONFIRMADA | | [ARMY] |
| D69 | ABOUT 469 SQ MI | CONFIRMADA | volátil, marcada | [L19] |
| D70 | ABOUT HALF A MILE (s48) | CONFIRMADA; falta a marca de volátil (A3) | | [TIG] |
| D71 | ABOUT 9 MILES (TODAY) (s48) | CONFIRMADA; falta a marca de volátil (A3) | | [TIG] |
| D72 | 45 FT → 53 FT (2013) | CONFIRMADA | | [P13] |
| D73 | 53 FT | CONFIRMADA | volátil, marcada | [PFF] |
| D74 | ABOUT 10.3 MILLION TEU | CONFIRMADA | | [PTEU] |
| D75 | 20 FT / 1 TEU / 40 FT / = 2 TEU | CONFIRMADA | | [PFF] |
| D76 | BUSIEST CONTAINER PORT | CONFIRMADA, só como atribuição | | [PF24] |
| D77 | 4–1 · 1897 | CONFIRMADA | | [SD18] |
| D78 | ABOUT 19 MILES | CONFIRMADA | | [L21] |
| D79 | ABOUT HALF A MILE (s55) | CONFIRMADA | | [HAM] |
| D80 | 53 FT | CONFIRMADA | volátil, marcada | [PFF] |
| D81 | 1850 / 1906 / 1909 | CONFIRMADA | | [HAM] |
| N01 | o nome de Mendell fora da s02 | CONFIRMADA: o motivo é certo | a voz do gancho não nomeia ninguém | [ARCE] |
| N02 | Homer Hamlin | CONFIRMADA | "Compiled under the direction of J.R. Prince" (R2-07c) | [HAM] |
| N03 | "Shoestring" como texto nosso | CONFIRMADA | LA0007 traz "SHOESTRING ANNEXATION"; Hamlin, "Shoestring Addition"; o Times, "shoestring strip" | [LA7][HAM][T20] |
| N04 | Walker · Rodgers · Burr · Morison | CONFIRMADA | | [SD18] |
| N05 | os engenheiros das juntas | CONFIRMADA | | [HED41][ARCE] |
| N06 | Point Fermin | CONFIRMADA | a voz não o diz | [HED41] |
| N07 | o nome da draga | CONFIRMADA | "dredge San Pedro" | [R05] |
| N08 | Angels Gate | CONFIRMADA | o lugar_na_origem é "Los Angeles Harbor Lt. Sta." | [M47b] |
| N09 | Santa Monica Pier | CONFIRMADA | | [SD18] |
| N10 | os quatro vizinhos no gancho | CONFIRMADA | | [L21] |
| N11 | a ponte 9/15 | CONFIRMADA (R3) | | [TIG] |
| N12 | "Approximate" nos contornos de Hamlin | CONFIRMADA | decisão do Lucas de 07/10/2026 (identidade §6) | [HAM] |
| N13 | Mendell como autor do quebra-mar de 1888 | CONFIRMADA | o levantamento é de Benyaurd, e Mendell o endossou na p. 2126 | [ARCE] |
| N14 | a glosa de "go to the wall" | CONFIRMADA | | [HED41] |
| N15 | as medidas de Mendell | CONFIRMADA | | [ARCE] |
| N16 | 78 FT e "the deepest" | CONFIRMADA | o Main Channel tem 53 | [PFF] |
| N17 | $370 MILLION | CONFIRMADA (editorial) | | [P13] |
| N18 | os números de Long Beach | CONFIRMADA | | [PF24] |
| N19 | a população | CONFIRMADA | | [PF24] |
| N20 | "since 2000" e "2000–2025" | CONFIRMADA (F147) | | [PF24] |
| N21 | 18 inches | CONFIRMADA | | [R92] |
| N22 | 0.79 MILES | CONFIRMADA | | [HAM] |
| N23 | 6,639–915 e o 218 | CONFIRMADA | 21/11: "canvass by the election boards gave 6639 for, and 915 against"; o "218" é borrão | [T21] |
| N24 | 61.9 SQ MI | CONFIRMADA | | [L21] |
| N25 | Guinn, 16 e 12 milhas | CONFIRMADA | | [HAM] |
| N26 | Mendell fora das juntas de 1892 e 1897 | CONFIRMADA | as listas de nomes do HED41 e do SD18 não o incluem | [HED41][SD18] |
| N27 | sem aviso do ano no cartaz | CONFIRMADA | aviso_de_ano: false | [M27a] |
| N28 | os créditos de mídia propostos | CONFIRMADA | credito_na_tela: "nenhum" em todos esses arquivos | [M04] |
| N29 | a linha do Shutterstock | CONFIRMADA | nenhum arquivo do Shutterstock no vídeo | [M01][M54] |
| N30 | sem aviso do ano em documento | CONFIRMADA | identidade §5 e §6 | — |
| X01 | s33 e s34: o polígono `wilmington-1909-hamlin` aceso em "DECEMBER 1905" como a cidade de 1905 | **DIVERGE** (achado A1) | LA0008: "Also the following territory annexed to the City of Wilmington by an election held November 4, 1907" (o Lote 3 de Terminal Island); o polígono é o de 28/08/1909 ("Ord. 18374… 6358 Ac.") | [LA8][HAM] |
| X02 | s19: o traço do píer (USGS 1903) com a cota 4,300 FT | CONFIRMADA, com nota (achado A4) | o traço mede 0,74 mi (cerca de 3.900 pés; pauta-geo); o SD18 dá 4.300 pés em 1897 | [USGS][SD18] |
| X03 | s33 e s34: a divisa de San Pedro é a de Hamlin para 1909 | CONFIRMADA, com nota | LA0008: "boundary lines of San Pedro City as established by an election held October 22, 1906"; é a linha que a faixa encontrou em novembro de 1906 | [LA8] |
| X04 | "DEC. 26, 1906" diante do LA0007 | CONFIRMADA, com nota | LA0007 diz "annexed November 16, 1906"; a camada 21 e o quadro de Hamlin dizem 26/12; o dossiê já registra a divergência (fundamento.md, l. 336) | [LA7][L21][HAM] |

**Resultado: CHECADO POR INTEIRO.**
- 515 CONFIRMADAS. Quatro delas só como atribuição: T005, T346, D76 e T004 pela forma.
- 1 DIVERGE: X01.
- 1 NÃO ACHEI: T129.
- 9 SEM AFIRMAÇÃO e 1 NADA A CHECAR: G18.
- Nenhuma REFUTADA.
- As citações aspadas e as folhas recriadas conferem letra a letra: s28, s38 (A, B e C), s41 e s45, e os grifos de s02, s06, s13, s15, s20, s22, s24, s25, s35 e s43.

**Aritmética interna:**
- 213 + 203 = 416 e 213 − 203 = 10. Com o 218, a conta não fecha.
- 6.612 − 914 = 5.698, e 6.612 / 914 = 7,23 para 1.
- 13.661 / 13.882 = 98,4 %.
- 3.300 + 1.000 + 2.500 = 6.800 pés.
- 4.300 pés = 0,81 mi; 5½ braças = 33 pés; 6.700 pés = 1,27 mi; 9.250 + 1.887 = 11.137 pés = 2,11 mi.
- De 28/08/1909 a 1912: perto de 2 anos e 10 meses.

## 3 · Os achados

**A1 · [MÉDIO] · X01 (T208, T209, T215; s33 a partir de 5,333 s e s34) · DIVERGE periférico.**
A tela acende o polígono de Wilmington de 1909 sob "DECEMBER 1905". Ele inclui o Lote 3 de Terminal Island, anexado em 04/11/1907 (LA0008). A regência pedia o polígono "declared as the 1905 town", mas nenhum texto o declara.
- **CONSERTO:** pôr a legenda `Wilmington's limits of 1909` (papel legenda) junto do polígono, do instante em que ele acende em s33 até sair em s34. Outra saída: em s33 só o ponto GNIS e a pílula "Wilmington", com o polígono entrando só na consolidação, em s44.
- **RAIZ: INSTRUÇÃO.** "Declarado" na regência não virou texto no contrato de tela. Toda camada de outro ano que o do quadro precisa de linha no `textos-tela.json`.

**A2 · [LEVE] · T129 "Southern Pacific pier, 1893–94" · NÃO ACHEI no primário.**
A data só vem de Willard, que dá duas na mesma obra, e da Wikipedia. O dossiê manda dizer "by 1894" (mec.div-09).
- **CONSERTO:** `Southern Pacific pier, finished by 1894`, ou só `Southern Pacific pier`.
- **RAIZ: PONTUAL.**

**A3 · [LEVE] · D02, D03, D70 e D71 · volátil sem marca.**
São a meia milha e as nove milhas de hoje, que valem enquanto os limites do TIGER e do condado não mudarem.
- **CONSERTO:** pôr `"_volatil": true` em D02, D03, D70 e D71, como já está em D69, D73 e D80.
- **RAIZ: PONTUAL.**

**A4 · [LEVE, para o mapista] · X02.**
A cota "4,300 FT" é o número de 1897, e o traço do píer do USGS de 1903 mede uns 3.900 pés. Uma régua de escala desenhada sobre esse traço com "4,300 FT" erraria em cerca de 9 %.
- **CONSERTO:** a cota fica presa ao píer como rótulo, com a linha `Source: Senate Document 18, 1897`, sem régua de escala sobre o traço do USGS.
- **RAIZ: PONTUAL.**

**Notas sem troca:**
- **N-1.** As folhas recriadas dizem `LOS ANGELES TIMES`, e o cabeçalho impresso era "Los Angeles Daily Times". A recriação é no visual do canal, não fac-símile, e a escolha do glossário (G10) está registrada.
- **X03.** A divisa de San Pedro na tela é a de outubro de 1906.
- **X04.** O LA0007 diz "annexed November 16, 1906". A tela fica com 26/12/1906, sustentado pela camada 21 e pelo quadro de Hamlin.
- **T219.** "Municipal Corporations Act" descreve fielmente o título oficial, embora não esteja impresso na página.

## 4 · A lista de nomes (atribuições anônimas na tela)

| quem a tela não nomeia | quem é, e o que credencia | onde |
|---|---|---|
| "per the Corps of Engineers" (T310) | USACE Los Angeles District, texto de Stephen Baack (army.mil, 31/07/2026) | [ARMY] |
| "per a 1910 federal report" (T306) | Bureau of Corporations, *Transportation by Water*, Part III, 26/09/1910 | [BOC] |
| "Board of Engineers, 1892" e "five Army engineers" (T141, T143) | os coronéis Wm. P. Craighill (presidente), H. M. Robert, P. C. Hains, C. W. Raymond e T. H. Handbury | [HED41] |
| "the 1897 federal board" (T093) | o contra-almirante John G. Walker (presidente), A. F. Rodgers, W. H. Burr, G. S. Morison e R. P. Morgan | [SD18] |
| "BOARD · 1891" (T111) | G. H. Mendell, G. L. Gillespie e W. H. H. Benyaurd | [R92b] |
| "the city's annexation map, 1916" (T254) | Homer Hamlin, City Engineer; compilado sob J. R. Prince, Chief Draftsman | [HAM] |
| "by the port's own count" (T005, T347) | Port of Los Angeles (Harbor Department), *Facts & Figures 2024* | [PF24] |

## 5 · Voláteis na tela (reconferir na véspera de publicar)

| itens | o que os faz mudar | o que os derruba |
|---|---|---|
| T011, T012, T317, T318 e D02, D03, D70, D71 (meia milha e nove milhas, hoje) | anexação ou desanexação junto da faixa | um lado da faixa anexado em toda a extensão |
| T315 e D69 (469 mi²) | a área oficial do condado (camada 19) | qualquer anexação |
| T334, T356 e D73, D80 (53 pés) | novo aprofundamento ou nova cota de projeto | o porto ou o USACE publicarem outra profundidade |
| T261 a T264 e T319 a T322 (quem margeia a faixa) | só a lista de quem encosta pode mudar | os anos são fixos |
| T004, T346 e T347 (2000–2024) | não envelhecem: são uma faixa histórica atribuída | trocar para "since 2000" sem reconferir |

Data-base: TIGER 2025, camadas 19 e 21 do condado, 07/10/2026.

## 6 · DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Onde gravar os laudos de fatos dos próximos vídeos. Até ele decidir, fica como no Juneau: `roteiros/<proj>/qc-roteiro/`.
- Os retratos de Morgan (1894) e de Mendell (USACE, sem data) estão em rascunho e esperam a decisão dele. Os cards não dependem deles.
- A licença da camada do condado: na tela só entram números e créditos dela; a geometria é TIGER e Hamlin.

## 7 · Como medi, e a rede

- **Local:** as imagens e os OCR em `midia/los-angeles/fontes/`; `pauta-documentos.json`, `pauta-geo.md` e `pauta-geo.json`; `conferencia-midia.json`; `regencia.json`; o fundamento.
- **WebFetch:**
  - OAC, o guia de Willard: respondeu 200.
  - Cullum's Register, n.º 1538, o de Mendell: respondeu 200. Os n.º 1534 e 1537, abertos para achar o número certo, também.
- **NÃO FOI CHECADO, site recusou robô:** `https://syfert.com/caselaw/case.php?id=5605697` (403) e `https://archives.calstate.edu/downloads/3r075751c` (403), ambos só para a designação "Municipal Corporations Act". O veredito de T219 e G20 se apoia no título primário, não nelas.
- Nenhuma ferramenta de navegador, nenhum arquivo gravado no canal (os dumps de leitura ficaram no scratchpad da sessão) e nenhuma cópia arquivada.

## 8 · Os 2 padrões mais vistos

1. **Camada de outro ano sem declaração.** Um desenho com a geometria de um ano diferente do quadro afirma uma fronteira que talvez não existisse (X01). O desenho também é afirmação e pede a sua linha de texto.
2. **Data de tela com fonte só de parte.** "1893–94" vem de Willard, que tinha lado na disputa, e nenhuma primária a sustenta (T129). Os números do Times e das juntas, ao contrário, fecharam todos no papel.

NOTA: 9.3/10

VEREDITO: RESSALVA

---

## Adendo da sessão central · rodadas 2 e 3 do redator (07/10/2026, 20:5x–21:0x)

O laudo acima julgou o sha1 `ca26439056cc`. O redator aplicou os quatro achados e duas decisões; o arquivo passou a
`8152375171bb` (rodada 2) e a `d9ef161097b1` (rodada 3), válido no contrato estrito (exit 0) nas duas. Os ids T001 a T359,
D01 a D81 e C1 a C6 não mudaram; os textos novos entraram no fim.

| id | o que mudou | conferido contra |
|---|---|---|
| A1 → T360 a T365 | a legenda `Wilmington's limits of 1909` em s03, s33 (até o fim do trecho que era s34), s37, s40, s42 e s55, enquanto o polígono `wilmington-1909-hamlin` está no quadro antes da consolidação; na s44 não vai (o quadro já é agosto de 1909) | X01 deste laudo: o polígono é o de 28/08/1909 ("Ord. 18374… 6358 Ac."), com o Lote 3 de Terminal Island de 04/11/1907 (LA0008). A legenda diz o ano da geometria, não o do quadro: CONFIRMADA |
| A2 → T129 | `Southern Pacific pier, finished by 1894` | o dossiê, mec.div-09 ("by 1894"): CONFIRMADA |
| A3 | `_volatil: true` em D02, D03, D70 e D71 | §5 deste laudo |
| A4 | nas `_instrucoes_para_a_arte`: a cota "4,300 FT" presa ao píer como rótulo, com a linha de fonte do SD18, nunca como régua sobre o traço do USGS de 1903 | X02 deste laudo |
| s16 e s25 | sem retrato (decisão da sessão central: o de Mendell não tem data na origem; o de Morgan passa de 1,4× de ampliação) | o texto dos cards não mudou |
| s17 e s26 | Los Angeles só como a pílula no ponto da Plaza, sem contorno: o `la-1899-antes-da-faixa-hamlin` só vale de 12/06/1899 a 26/12/1906. Camada 21 do condado, lida pela sessão central em 07/10/2026 (consulta só de atributos): LA0001 04/04/1850 (28,01), LA0002 29/08/1859 (1,2), LA0003 18/10/1895, LA0004A/B 02/04/1896, LA0005 e LA0006 12/06/1899, LA0007 26/12/1906 | nenhum texto novo; as pílulas T114 e T172 ficam |
| nomes de 4 palavras | decididos pelo Lucas (07/10/2026: "Inteiros (Recomendado)"); `marca/identidade.md` §4.1, "Nome próprio de 4 palavras" | nenhum texto mudou |

Com os achados aplicados, o que este laudo deixava em RESSALVA está resolvido. Sobra o DIVERGE de X01 só como desenho declarado,
que o `qc-visual` confere na cena.
