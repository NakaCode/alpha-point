# Laudo de fatos, delta da pesquisa: `peru-agua` (vídeo 4)

**Gravado pelo setor Texto e fatos** na tarefa `peru-agua-texto-1`, em 22/10/2026. O `verificador-de-fatos` não tem `Write`, e por isso
devolveu o laudo, que o setor gravou aqui sem mudar uma letra (conferido por sha256 do texto de cada lote).
- **Os dois lotes**, em Opus (`claude-opus-5-5` em todas as linhas do transcript), com 0 imagens:
  - **lote A:** s01–s27, ids `PA…`;
  - **lote B:** s28–s53 mais as gerais, ids `PB…`.
- **As entradas:** as 6 pautas, os `_dados/`, o `conferencia-midia.json`, os relatos `pesquisa-1` e `-2`, o `roteiro-narrador.md` e o
  `fatos.laudo.md` do roteiro (PASS 263/263), que só se citou.
- **O `conferencia-midia.json` mudou durante a checagem.** A pesquisa-3 o regravou (`0b544ca0…`, 04:05) e aprovou o reuso da foto de Caral
  na s51 b1, com "Photo from 2022". Os lotes podem ter lido a versão de antes. O aviso da s51 vai ao redator pelo veredito novo.

## A soma

| lote | cobertura | DIVERGE | NÃO ACHEI | REFUTADA | NÃO FOI CHECADO | citados do roteiro | veredito |
|---|---|---|---|---|---|---|---|
| A (s01–s27) | 45 de 45 | 2 (PA043, PA044) | 3 (PA022, PA029, PA039) | 1 (PA021: "Piura alagada", forma que não está na tela) | 0 | 100 | RESSALVA |
| B (s28–s53, gerais) | 70 de 76 | 4 (PB014, PB025, PB026, PB055) | 1 (PB009) | 0 | 6 (PB017, PB038, PB041, PB043, PB054, PB065) | 128 | RESSALVA |
| **total** | **115 de 121** | 6 | 4 | 1 | 6 | 228 | **RESSALVA** |

- **Divergência da voz:** nenhuma, nos dois lotes. Nada a regravar.
- **A REFUTADA (PA021)** é de uma forma que a tela não tem. Se "Piura flooded" entrar, o lote A vira FAIL.

COBERTURA: 115 de 121 (6 NÃO FOI CHECADO, por recusa de robô ou pela regra do gob.pe)
VEREDITO: RESSALVA

---

# Lote A (s01–s27), como o verificador devolveu

COBERTURA: 45 de 45. A lista foi derivada à mão, porque o canal não tem extrator para a pesquisa. Ela saiu da leitura integral, cena a cena (s01 a s27), destas entradas:
- os `_grafias`, `needs.dados` e `needs.geo` (rótulos) do `espelho.json`;
- os `texto_para_tela`, `legenda`, `valores` e `conversoes` de `out/peru-agua/_dados/<cena>.json`;
- o texto de s10, s12 e s27 em `pauta-documentos`;
- o card da s26 em `pauta-pessoas`;
- o `lugar_na_origem` e o `data_na_origem` dos `aprovado` de s06, s13, s16, s18, s22, s25, s26 e s27 no `conferencia-midia.json`;
- as perguntas da tarefa (pesquisa-1, pergunta 10; pesquisa-2, s16).

O que o laudo do roteiro (`fatos.laudo.md`, PASS 263/263) já confirmou está só citado pelo id e fica fora do 45.

# Laudo de fatos: delta da pesquisa, lote A (s01–s27), `peru-agua`

- **Data-base da verificação:** 22/10/2026.
- **Tarefa:** `peru-agua-texto-1`, passo `screen_text`, lote A.
- **Imagens abertas:** 0. Os rótulos de foto foram julgados pelos metadados do veredito e pela origem lida em texto.
- **NOTA: 8/10.** Os números da pesquisa batem com as fontes. Há três tipos de defeito acionável:
  - dois rótulos do espelho dizem mais que a fonte (PA043, PA044);
  - duas citações traduzidas iriam entre aspas sem aviso de tradução (PA014, PA024);
  - a estação de Vilca ficou com o lado da divisória não conferido na origem (PA030).

## Tabela

| id | cena | afirmação (tela) | veredito | o que a fonte diz (trecho literal) | fonte |
|---|---|---|---|---|---|
| PA001 | s02 | AMAZON SIDE · 33.3% (gente, 2012) | CONFIRMADA | Cuadro 2.3: "Amazonas 957,82 74,53 10 018 789 33,32 1 895 226 97,91" (as três linhas somam 62,53 + 33,32 + 4,15 = 100,00) | `midia/peru-agua/fontes/documento/ana-pnrh-1416.txt`, PDF p. 38 |
| PA002 | s02 | "ANA, NATIONAL WATER RESOURCES PLAN (PNRH) · 2012 DATA" | CONFIRMADA | "SITUACIÓN ACTUAL (2012)"; "Como año base se consideró el 2012". O pé do Cuadro 2.3 diz "datos propios (2013) y de la ANA (2009)": "2012 data" é o ano-base do diagnóstico, não o ano de cada coluna | idem, p. 33–34 e 38 |
| PA003 | s02, s05, s06, s18 | Os rótulos PACIFIC SIDE / AMAZON SIDE / LAKE TITICACA BASIN sobre os polígonos do HydroBASINS | CONFIRMADA | Recalculei a área pela esfera autálica: 282.072 / 964.527 / 48.537 km². A ANA dá 278.483 / 957.822 / 48.910 (diferenças de −0,8 % a +1,3 %). O teste de ponto dá Lima, Matucana, Vilca, Piura, Tacna, Caral e Cantalloc no Pacífico; Satipo e Jauja no Atlântico; Puno no Titicaca | `out/peru-agua/_media/geo/vertente-*.json`; Cuadro 2.1 |
| PA004 | s06 | PACIFIC 21.7% · AMAZON 74.5% · TITICACA 3.8% (e as sq mi) | CONFIRMADA | Cuadro 2.1: "Pacífico 278 483 21,67 / Amazonas 957 822 74,53 / Titicaca 48 910 3,81". A conta 278.483 ÷ 2,58999 dá 107.523 sq mi; 957.822 dá 369.818; 48.910 dá 18.884 | ana-pnrh-1416.txt, p. 34 |
| PA005 | s06 | A miniatura "Puno · Lake Titicaca", foto de 2015, sem aviso de ano | CONFIRMADA | lugar_na_origem: "View of Puno and the Titicaca lake, Peru"; título "Vista de Puno y el Titicaca, Perú, 2015-08-01". A fala é atemporal, então não pede aviso | https://commons.wikimedia.org/wiki/File:Vista_de_Puno_y_el_Titicaca,_Per%C3%BA,_2015-08-01,_DD_63.JPG |
| PA006 | s07 | LESS THAN 70 MI (de Lima à divisória), com a medida de 59,5 mi | CONFIRMADA | Refiz a conta: de Campo de Marte (−77,043167; −12,070528) à divisória, amostrada a cada 50 m, dá **95,77 km = 59,51 mi**, no ponto (−76,349; −11,541). Do ponto de Lima do NE dá 58,97 mi. A precisão é ±~0,5 mi (HydroBASINS ~500 m e simplificação ≤ 330 m). F036 (66,92 mi até a estação de Marcapomacocha, do outro lado) também sustenta | `_media/geo/divisoria-continental-peru.json`, `pontos-fontes.json`; script em `C:/Users/zangp/AppData/Local/Temp/claude/vf-peru-A/geo.py` |
| PA007 | s07 | LIMA REGION (sobre o polígono do departamento) | CONFIRMADA, com nota | O polígono é "Lima Department (Lima Region + Lima Province)"; 2,15° da divisória correm dentro dele. A "Región Lima" do governo regional exclui a Província de Lima, mas a divisória cai na parte que é das duas | `_media/geo/departamento-lima.json`; F033 |
| PA008 | s08 | RÍMAC · ABOUT 90 MI LONG (145 km) · ANA, 2014 | CONFIRMADA | "Longitud de Río principal 145 km. aproximadamente"; 145 ÷ 1,609344 = 90,1 | `fontes/documento/ana-2014-primer-monitoreo-rimac.txt`, l. 298–299 |
| PA009 | s08 | A legenda "From its source at the divide to the Pacific" | CONFIRMADA (pela geometria, não pela ANA) | A ponta alta do Rímac no OSM (relation/4637139) fica a 0,8 km da divisória. O OSM mede 139,2 km; a tela usa o número da ANA | `_media/geo/rio-rimac.json`; `geo2.py` |
| PA010 | s09 | LORETO · ABOUT 6 PEOPLE PER SQ MI (2.4 per km²) (2017) · HARVARD GROWTH LAB (2023) | CONFIRMADA | INEI: "Loreto (2,4 hab./km2)"; 2,4 × 2,58999 = 6,2. HKS: "April 2023, Paper: … it is the largest department in Peru … Iquitos can only be reached by air or river" | `fontes/documento/inei-2017-lib1539-cap01.txt` l. 1899; `fontes/gente/hks-growthlab-loreto-remoteness.txt` l. 86 |
| PA011 | s10 | A folha do PNRH: TABLE 2.3, P. 38, grifo em "21,67" | CONFIRMADA | "CUADRO 2.3. Distribución de los recursos hídricos en el territorio peruano" tem **três linhas, Pacífico, Amazonas e Titicaca, mais TOTAL**. A página impressa é a 38, e a do PDF também. A voz ("the two sides in a single table") não trai a fonte: os dois lados estão na tabela (F046, F047). Mas a tela não pode mostrar a tabela com duas linhas | ana-pnrh-1416.txt, l. 2000–2040 |
| PA012 | s11 | WATER PER PERSON · 1,816 / 189,167 m³/yr · ABOUT 100× (≈ 480,000 vs. ≈ 50 MILLION GAL) | CONFIRMADA | "1 815,61" e "189 167,18" (Cuadro 2.3). × 264,172 dá 479.633 e 49.972.690 gal; a razão é 104,2 | idem; F049, F050 |
| PA013 | s12 | A folha recriada da Política de 2009 da ANA, com "paradójicamente" | CONFIRMADA (letra a letra) | "el 1.8% restante se encuentra en la vertiente del Pacífico, en donde paradójicamente se concentra el 65% de la población que produce el 80.4% del PBI." A frase inteira leva **65 %** (ANA 2009) para a tela, perto do **62.5 % (2012)** da s02 | `fontes/documento/ana-2009-politica-estrategia-1073.txt` l. 916–922 |
| PA014 | s13 | "THE MAIN CAUSE OF THE ARIDITY OF THE PERUVIAN COAST" · SENAMHI, 2021 | CONFIRMADA (a tradução é fiel), mas falta o aviso de tradução | "el Anticiclón con su subsidencia asociada … es el causante principal de la aridez de la Costa peruana"; "Primera edición: Agosto de 2021" | `fontes/mecanismo/senamhi-2021-climas-del-peru.txt` l. 57, 826–832 |
| PA015 | s13 | Os rótulos SOUTH PACIFIC HIGH e HUMBOLDT CURRENT | CONFIRMADA | O SENAMHI fala do anticiclone do Pacífico Sul ("Su centro anticiclónico…") e de "la corriente de Humboldt". A corrente é esquema declarado, sem geometria | idem l. 805–822; F053 |
| PA016 | s13 | MODIS de 2018: "Peru's Pacific coast", junho de 2018 | CONFIRMADA | "Clouds banking along Peru Coastline"; "Date Acquired: 6/20/2018" (24/06 é a data de publicação); "Peru's Pacific Coast"; crédito Jeff Schmaltz, MODIS Land Rapid Response Team, NASA GSFC | https://modis.gsfc.nasa.gov/gallery/individual.php?db_date=2018-06-24 |
| PA017 | s13 | MODIS de 2015: a costa do Peru, junho de 2015 | CONFIRMADA | "Date Acquired: 6/7/2015" (o 18/06 do nome do arquivo é a publicação); "the coast of Peru is a very cloudy place" | https://modis.gsfc.nasa.gov/gallery/individual.php?db_date=2015-06-18 |
| PA018 | s16 | A anomalia da NOAA, MAR–AUG 1997; o rótulo "EL NIÑO" | CONFIRMADA | "Sea surface temperature anomalies from March to August 1997 showing evolution of major El Nino"; autor NOAA; domínio público | https://commons.wikimedia.org/wiki/File:Sea_surface_temperature_anomalies_from_March_to_August_1997_showing_evolution_of_major_El_Nino_(2268-446).jpg |
| PA019 | s16 | "JUNE 1998" (o Landsat do plano 2) | CONFIRMADA | "datetime": "1998-06-03T15:11:49.477081Z"; "platform": "landsat-5"; WRS 011/064 | https://planetarycomputer.microsoft.com/api/stac/v1/collections/landsat-c2-l2/items/LT05_L2SP_011064_19980603_02_T1 |
| PA020 | s16 | "Piura" só como ponto, sobre a imagem de 1998 | CONFIRMADA | O ponto de Piura do NE (−80,630; −5,210) cai dentro do recorte (−81,35 a −80,20; −6,75 a −4,83) | `_media/geo/cidades-peru-ne.json`; procedência em `_media/base/s16/` |
| PA021 | s16 | "Piura alagada" / "Piura flooded" como legenda da imagem | **REFUTADA como legenda desta imagem** (a forma não está na tela hoje) | O veredito do conferente: "nenhuma água num raio de 5 km da cidade, medido e visto a 100 %". Não remedi: 0 imagens. Que Piura sofreu enchente no 1º semestre de 1998 é outro fato, que não foi checado aqui e que a imagem de junho não mostra | `out/peru-agua/_pesquisa/conferencia-midia.json` (s16, Landsat) |
| PA022 | s16 | O tamanho ou o nome da lagoa (145 km; 978 km²; "La Niña") | NÃO ACHEI | Os 145 km são da Wikipedia ("a temporary lake some 145 km (90 mi) long filling the Bayóvar Depression"), que cita Suplee, National Geographic, 1999. Não li esse texto; só a cópia arquivada existiria, e ela não se usa. Os 978 km² são medida do canal, numa cena cortada na borda leste, e podem incluir água permanente. O nome "La Niña" aparece só como crença local, num blog da St Andrews | https://en.wikipedia.org/wiki/Sechura_Desert ; https://elninophenomenon.wp.st-andrews.ac.uk/el-nino-phenomenon-stories-from-the-desert-of-sechura-and-la-nina-lagoon/ |
| PA023 | s16 | "EL NIÑO 1997–98" | CONFIRMADA (como o nome do evento e do evento das enchentes de 1998 no deserto de Sechura) | NOAA PMEL: "Two of the largest El Niño events on record occurred in 1982-1983 and in 1997-1998". SENAMHI 2021: "Durante los eventos extremos de El Niño en los años 1983 y 1998, las lluvias intensas e inundaciones en la Costa fueron destructivas". Block, Bendix e Richter: "After the occurrence of EN-phenomena in 1983 and 1998 the Sechura Desert and its surrounding area in northern Peru … are known as areas with most severe floods". O limite: **não** prova que toda a água da cena é enchente | `fontes/mecanismo/noaa-pmel-what-is-el-nino.txt`; senamhi-2021 l. 4108–4111; https://www.archiv.geographie.uni-erlangen.de/wp-content/uploads/ninoperu.pdf ; https://meetings.copernicus.org/www.cosis.net/abstracts/EGU05/02049/EGU05-J-02049.pdf |
| PA024 | s17 | "ONE OF THE LARGEST CITIES IN THE WORLD LOCATED IN A DESERT" — SENAMHI, entre aspas, em inglês | CONFIRMADA (a tradução é fiel), mas falta o aviso de tradução | "Lima, capital del país, es una de las ciudades más grandes del mundo ubicada en un desierto, donde al año solo precipita 8 mm en forma de lloviznas" | senamhi-2021 l. 3276–3279; F069 |
| PA025 | s18 | SATIPO · 79 in (2,013 mm) · WMO/SENAMHI, 1991–2020 · EAST OF THE ANDES; a legenda "1,893 ft (577 m)" | CONFIRMADA | "81201,11\|13\|29\|S,74\|36\|31\|W,577"; "Sum … 2013". 2013 ÷ 25,4 = 79,25 in; 577 m = 1.893 ft. **Os 577 m são da estação**, a uns 3,5 km da cidade. A estação fica no lado atlântico (PA003) | `fontes/mecanismo/wmo-normals-9120/Satipo_81201.csv` |
| PA026 | s18 | A miniatura "Satipo", foto de 2018, sem aviso de ano | CONFIRMADA | lugar_na_origem: "An aerial photo of Satipo City taken from the perspective of the local radio station"; data 2018-03-24 | https://commons.wikimedia.org/wiki/File:Satipo_Aerial.jpg |
| PA027 | s19 | MATUCANA 12 in (312 mm), OMM 1991–2020, 7,930 ft (2,417 m) | CONFIRMADA | "74402,11\|50\|21\|S,76\|22\|41\|W,2417"; "Sum … 311.6". De dezembro a março somam 261,3 mm (83,9 %), o que sustenta o "DEC–MAR" (F078) | `wmo-normals-9120/Matucana_74402.csv` |
| PA028 | s19 | VILCA 38 in (963 mm), SENAMHI, normal de 1981–2010 | CONFIRMADA | "se ubica la estación meteorológica de Vilca (Figura N° 3.14), donde las lluvias anuales bordean los 963 mm". 963 ÷ 25,4 = 37,9. As normais do documento são 1981–2010 (l. 96, 1140) | senamhi-2021 l. 3319–3322 |
| PA029 | s19 | Vilca a "~12,570 ft (3,832 m)" (a legenda do `_dados`) | NÃO ACHEI na origem aberta | O SENAMHI 2021 diz só "sobre los 3 800 m s. n. m.". O 3.832 aparece no `pautas/peru-agua/fundamento.json` e no resumo de busca de um boletim do SENAMHI em cdn.www.gob.pe, que não abri (gob.pe recusa robô) | senamhi-2021 l. 3319; o resumo da busca citado em "Para a Sala" |
| PA030 | s19 | O ponto "Vilca", só como povoado | CONFIRMADA como povoado do lado do Pacífico | O node/2651665845 do OSM, "Vilca" (−75,8267; −12,1147), cai na vertente do Pacífico (PA003). **Mas** o SENAMHI põe a estação numa zona que cobre "la cuenca alta del río Cañete [Pacífico] y la cuenca del río Pachacayo [Mantaro, Atlântico]". Que a estação está no povoado vem só do resumo de busca (−12,1146; −75,8262; ~53 m dele), sem a origem aberta. A tela nunca deve dizer "Vilca District": o distrito com esse nome fica em Huancavelica, outro lugar | `_media/geo/pontos-osm.json`; senamhi-2021 l. 3312–3320 |
| PA031 | s21 | ABOUT 27,000 SQ MI (71,000 km²) · MINAM, 2019; a legenda "Mapped natural desert only…" | CONFIRMADA | "DESIERTO COSTERO … 7,107,338.20 … 5.49" (71.073 km²); "no se consideran los espacios ya transformados, como las zonas agrícolas, urbanas, mineras"; "Primera edición, noviembre de 2019" | `fontes/documento/minam-2019-mapa-nacional-ecosistemas.txt` l. 29, 258–261, 302–310; F083, F084 |
| PA032 | s22 | CARAL · c. 3000–1800 BC · UNESCO | CONFIRMADA | "the development of the site can be located in time between the years 3000 to 1800 B.C." | `fontes/gente/unesco-1269-caral.txt` l. 231 |
| PA033 | s22 | ABOUT 90 MI **NORTH** OF LIMA (a direção) | CONFIRMADA | O rumo de Campo de Marte a Caral é 338° (NNO, no limite de N); a distância é 87,65 mi (F091) | `geo.py` |
| PA034 | s22 | As fotos "Pirámide Mayor, Caral", de 2022, sem aviso | CONFIRMADA | Os títulos: "Vista frontal de la imponente Pirámide Mayor de la Ciudad Sagrada de Caral" e "Pirámide Mayor - Caral". O GPS da frontal cai em Lima (é o do iPad), mas o rótulo vem do título | `conferencia-midia.json` (s22) |
| PA035 | s24 | "Moche Valley", "Chicama Valley", a seta do canal | CONFIRMADA | "The Moche and Chicama rivers once supplied an intricate irrigation system via an approximately 80 kilometre long canal" | `fontes/gente/unesco-366-chanchan.txt` l. 239; F099, F100 |
| PA036 | s25 | LASAPONARA & MASINI, 2012; "Cantalloc, Nazca" nas fotos de 2015 e no ponto | CONFIRMADA | "DOI 10.1007/978-90-481-8801-7_12, © Springer … 2012"; "puquios, some of which are still [used]"; "Cantalloc subterranean aqueducts, Nazca, Peru"; no OSM, "Acueductos de Cantayoq" | `fontes/gente/lasaponara-masini-puquios-cap12.txt` l. 22, 37; `conferencia-midia.json` (s25) |
| PA037 | s26 | "Painting, 1835" | CONFIRMADA | POP: "Millésime de création : 1835"; "copie d'après un original conservé au château de Beauregard"; MV 3168 | https://www.pop.culture.gouv.fr/notice/joconde/000PE006202 |
| PA038 | s26 | O cargo no card: "Spanish conquistador" | CONFIRMADA | UNESCO: "founded by Spanish conqueror Francisco Pizarro in January 1535". Cobo: "Gobernador Francisco Pizarro" (nov. 1534) e "El Comendador don Francisco Pizarro, Adelantado, Capitan General y Gobernador en estas provincias de la Nueva Castilla" (jan. 1535) | `fontes/gente/unesco-500-lima.txt` l. 235; `cobo-1639-…_djvu.txt` l. 2397, 2601–2602 |
| PA039 | s26 | O ano de nascimento de Pizarro no card (a POP dá "1475" no título da obra) | NÃO ACHEI uma fonte independente | A POP diz "FRANCOIS PIZARRE (1475-1541)", mas o ano é título de obra de 1835, não registro. A Britannica recusou robô (403) | POP; https://www.britannica.com/biography/Francisco-Pizarro (403) |
| PA040 | s26, s27 | "LATE 1534" / "NOV. 1534" (o 1534 é correção do editor de 1882) | CONFIRMADA (pela prova documental) | Abaixo, o raciocínio | Cobo l. 2391, 2410–2412; F111; UNESCO 500 |
| PA041 | s26 | O ponto "Jauja" (no alto, do lado amazônico) | CONFIRMADA | O ponto do NE e o do OSM (node/5326264643) caem no Atlântico (PA003) | `cidades-peru-ne.json`, `pontos-osm.json` |
| PA042 | s27 | "BERNABÉ COBO, 1639 (1882 ED.)" e "JAUJA TOWN COUNCIL, NOV. 1534 · IN BERNABÉ COBO (1639; 1882 ED.)" | CONFIRMADA | A folha de rosto: "LIMA, Imprenta Liberal … MAYO, 1882", ed. M. González de la Rosa. A nota 13: "la Historia del P. Cobo lleva la fecha de 1639 en la portada y en la dedicataria". O auto: "En la ciudad Jauja á 28 dias del mes de Noviembre de 1534" | Cobo l. 167–190, 1992, 2391 |
| PA043 | s04 | O rótulo "upper Mantaro basin" sobre a `bacia-mantaro` (está nos `needs.geo` da s04) | **DIVERGE** (periférica) | O polígono é a bacia **inteira**: "34.534 km² (a ANA dá 34.550 ao Mantaro)". Recalculei: 34.669 km². O rótulo da camada passou a "Mantaro basin" na pesquisa-2, mas o espelho da s04 ainda diz "upper" | `pauta-geo.md`; `_media/geo/bacia-mantaro.json` |
| PA044 | s04 | "STORAGE FOR LIMA (2007)" (nas `_grafias`); as conversões em galões | **DIVERGE** (periférica, leve) | A lâmina diz "CAPACIDAD TOTAL DE ALMACENAMIENTO 282 MMC; 157 MM3 (Marcapomacocha); 77; 48". O que se mede é **capacidade**. As contas: 282 hm³ = 74,5 bi gal; 157 = 41,5 bi gal; 157 + 77 + 48 = 282 | `fontes/mecanismo/jica-sedapal-2007-lamina.txt` p. 3 |
| PA045 | s03 | A legenda "Census count = people counted (censada)" | CONFIRMADA | INEI 2025: "PERÚ: POBLACIÓN TOTAL, CENSADA Y TASA DE OMISIÓN"; "Población censada" | `fontes/documento/inei-2026-censo2025-presentacion-resultados.txt` l. 70–73; F015–F017 |

**PA040, a prova do 1534.**
- A página de 1882 imprime "Noviembre de 1534". A nota 3 diz: "El MS. que poseemos dice 1539; pero indudablemente es error del copista, pues la verdadera fecha es 1534, menos de dos meses antes de la fundacion de Lima".
- O 1539 é impossível. A ordem de Pizarro, "fecho en Pachacamac á 6 de Enero de 1535" (F111), já responde ao pedido: "los vecinos … de la ciudad de Jauja me pidieron". E Lima foi fundada em janeiro de 1535 (UNESCO).
- O mês de novembro se apoia só na cópia. O editor corrigiu apenas o ano.

## Achados acionáveis

1. **[MÉDIO] PA030, s19: o lado da estação de Vilca não foi conferido na origem.**
   - **O problema:** o SENAMHI descreve a zona da estação como "cuenca alta del río Cañete y la cuenca del río Pachacayo". O Cañete corre para o Pacífico e o Pachacayo para o Atlântico. A cena põe Vilca como ponto "do lado do Pacífico" sobre o povoado do OSM.
   - **O conserto:** o ponto se chama só "Vilca", sem distrito e sem altitude exata. Se não houver altitude, "VILCA 38 in (963 mm)". Se a cena quiser altitude, "ABOVE 12,400 ft (3,800 m)". A Sala confere a coordenada da estação no navegador do app (abaixo).
   - **RAIZ:** PONTUAL. O "alto Cañete" do dossiê é inferência.
2. **[MÉDIO] PA014 e PA024, s13 e s17: tradução entre aspas sem aviso.**
   - **O conserto:** `"THE MAIN CAUSE OF THE ARIDITY OF THE PERUVIAN COAST" — SENAMHI, 2021 (translated from Spanish)` e `"ONE OF THE LARGEST CITIES IN THE WORLD LOCATED IN A DESERT" — SENAMHI (translated from Spanish)`. A outra saída é a frase em espanhol, letra a letra, com a tradução fora das aspas.
   - **RAIZ:** INSTRUÇÃO. A s32 já usa "(channel's translation)"; a forma tem de ser uma só no vídeo.
3. **[LEVE] PA043, s04: o rótulo "upper".**
   - **O conserto:** o rótulo `Mantaro basin` sobre o polígono inteiro, ou nenhum rótulo de bacia na s04 (a voz da s04 não fala em Mantaro).
   - **RAIZ:** PONTUAL. O espelho não pegou a troca de rótulo da pesquisa-2.
4. **[LEVE] PA044, s04: falta "CAPACITY".**
   - **O conserto:** `STORAGE CAPACITY FOR LIMA (2007) · MORE THAN HALF ON THE AMAZON SIDE (157 OF 282 MILLION m³)`. Em imperial: `41.5 OF 74.5 BILLION GAL`.
   - **RAIZ:** PONTUAL.
5. **[LEVE] PA013, s12: os 65 % ao lado dos 62.5 %.**
   - **O problema:** a frase inteira da ANA de 2009 põe "65 %" na tela, seis cenas depois dos "62.5 % (2012)" da s02. Os dois números estão certos, cada um na sua fonte, mas o espectador vê dois números para a mesma coisa.
   - **O conserto:** mostrar o trecho com reticências, `…el 1.8% restante se encuentra en la vertiente del Pacífico, en donde paradójicamente se concentra…`, com o grifo em "paradójicamente". A outra saída é deixar a frase inteira com `ANA, 2009` bem visível.
   - **RAIZ:** PONTUAL.
6. **[LEVE] PA011, s10: a tabela tem três linhas.**
   - **O conserto:** a folha recriada traz as três linhas e o TOTAL do Cuadro 2.3, com o título literal "CUADRO 2.3. Distribución de los recursos hídricos en el territorio peruano". O grifo vai em "Pacífico … 21,67", e o Amazonas pode vir aceso. O Titicaca pode ficar esmaecido, mas fica.
   - **Nunca:** uma tabela de duas linhas, nem um "TWO SIDES" que some menos de 100 %.
   - **RAIZ:** PONTUAL.

## Para o redator-de-tela

- **s01, s05:** `CONTINENTAL DIVIDE` e `PERU` (F001, F027). O lugar dos aéreos sai da caça; nada conferido aqui.
- **s02:** como está (`74.5%`, `97.9%`, `1.8%`, `62.5% OF THE PEOPLE (2012)`). Pode entrar `33.3%` no lado amazônico, e o crédito `ANA, NATIONAL WATER RESOURCES PLAN (PNRH) · 2012 DATA`.
- **s03:** `LIMA 9.6 M + CALLAO 1.0 M = 10.6 M · INEI, 2025 CENSUS` e `0.3 in (8 mm)`, ok.
- **s04:** `STORAGE CAPACITY FOR LIMA (2007)`, nunca sem "CAPACITY". `Mantaro basin`, nunca "upper" sobre o polígono inteiro. A razão é "more than half". Nunca 60 nem 62 %.
- **s06:** `PACIFIC 21.7% · AMAZON 74.5% · TITICACA 3.8%`. A miniatura do lago: `Lake Titicaca (Puno)`, sem aviso de ano.
- **s07:**
  - `LESS THAN 70 MI`. Não pôr "59.5 MI": é medida do canal sobre o HydroBASINS, não número de fonte.
  - `LIMA REGION`, ok.
  - O alvo da sobreposição ainda não existe e pede fonte e veredito antes.
- **s08:** `RÍMAC · ABOUT 90 MI LONG (145 km) · ANA, 2014`.
- **s09:** `LORETO · ABOUT 6 PEOPLE PER SQ MI (2.4 per km²) (2017)` e `HARVARD GROWTH LAB`.
- **s10:** as três linhas (achado 6). A pílula em en-US: `21.7% OF THE LAND`.
- **s11:** só a razão (`ABOUT 100×`) ou `≈ 480,000 GAL vs. ≈ 50 MILLION GAL (1,816 vs. 189,167 m³)`.
- **s12:** `"PARADÓJICAMENTE" (PARADOXICALLY) · ANA, 2009`. O trecho como no achado 5.
- **s13:**
  - `SOUTH PACIFIC HIGH` e `HUMBOLDT CURRENT`. A citação, com o aviso de tradução.
  - A data da foto MODIS, se for à tela, é `JUNE 2018` ou `JUNE 20, 2018`, nunca "June 24". Na reserva, `JUNE 2015` ou `JUNE 7, 2015`, nunca "June 18". Nenhuma delas pede aviso de ano.
- **s16:**
  - **Pode dizer:** `JUNE 1998` na imagem de satélite; `Piura` só no ponto da cidade; `EL NIÑO 1997–98` como nome do evento (na sequência, ou junto da anomalia da NOAA, `MAR–AUG 1997`).
  - **Não pode dizer:**
    - "Piura flooded" ou qualquer ligação da cidade com a água (PA021);
    - o tamanho ou o nome da lagoa (PA022);
    - "FLOODWATER" sobre a água: a cena não prova que toda a água é enchente;
    - "Sechura" como rótulo: a origem só dá coordenadas, e nenhuma camada geo com procedência nomeia o lugar.
- **s17:** `0.3 in (8 mm) A YEAR · SENAMHI, CLIMAS DEL PERÚ (1981–2010 DATA)`. A citação, com o aviso de tradução.
- **s18:**
  - `≈16,000 FT (5,000 m)` vai junto do ar, não da crista.
  - `SATIPO · 79 in (2,013 mm) · WMO/SENAMHI, 1991–2020`.
  - Altitude, se entrar, é "station, 1,893 ft (577 m)".
  - `EASTERN SLOPES` e `ANDES` são esquema declarado.
- **s19:**
  - `LIMA 0.3 in (8 mm) · SENAMHI 1981–2010` e `MATUCANA 12 in (312 mm) · WMO 1991–2020`.
  - `VILCA 38 in (963 mm) · SENAMHI 1981–2010`.
  - `DEC–MAR`, ok.
  - Nunca "Vilca District", nem "3,832 m".
- **s20:** `ABOUT HALF BACK TO THE SEA · ANA, 2009` (F081, F082).
- **s21:** `COASTAL DESERT · ABOUT 27,000 SQ MI (71,000 km²) · Source: MINAM (Peru), 2019`, mais `Piura`, `Tacna` e `CHILE`. A legenda da área natural, se entrar, cabe. Nenhum contorno.
- **s22:** `CARAL · c. 3000–1800 BC · UNESCO` e `ABOUT 90 MI NORTH OF LIMA`. As fotos: `Pirámide Mayor, Caral`.
- **s24:** `Moche Valley`, `Chicama Valley`, `CHAN CHAN`, `Chimú`, `CANAL ABOUT 50 MI (80 km) · UNESCO`. A seta é esquemática e declarada.
- **s25:** `PUQUIOS · NAZCA · LASAPONARA & MASINI, 2012`. As fotos: `Cantalloc, Nazca`.
- **s26:**
  - O card: `FRANCISCO PIZARRO · Spanish conquistador · Painting, 1835`. Uma alternativa fiel ao documento é `Governor of New Castile`.
  - **Sem ano de nascimento** (PA039).
  - `LATE 1534` e `Jauja`.
- **s27:**
  - `JAUJA TOWN COUNCIL, NOV. 1534 · IN BERNABÉ COBO (1639; 1882 ED.)`. Nunca "1539".
  - "NOV. 28, 1534" só aparece como está impresso na página, com a nota 3 visível.
  - Os grifos, letra a letra: "fria y de muchas nieves"; "cuarenta leguas de la mar y el camino muy despoblado"; "por cargarlos han sido muchos de ellos muertos" (F106–F108).

## Para a Sala

**NÃO FOI CHECADO, com a URL:**
- **A coordenada e a altitude da estação Vilca.** Elas só aparecem no resumo de busca de boletins do SENAMHI em `cdn.www.gob.pe` (por exemplo https://cdn.www.gob.pe/uploads/document/file/9465136/7720867-13feb2026_mm_dz04.pdf). Não abri: gob.pe recusa robô. É para o navegador do app, e decide PA029 e PA030.
- **A data de nascimento de Pizarro:** https://www.britannica.com/biography/Francisco-Pizarro devolveu 403.
- **O artigo da Universidad de Chile sobre Jauja em 1534:** https://cuadernosdehistoria.uchile.cl/index.php/CDH/article/download/68838/71554/252863 pediu verificação de robô (Anubis). PA040 não depende dele.
- **Suplee, National Geographic, 1999:** a lagoa de 1998. Só existe pela cópia arquivada, que não se usa. PA022 fica fora da tela.

**Divergências da voz no lote A:** nenhuma. Nada a regravar.

**Pendências de insumo (não contadas no 45):**
- o alvo da sobreposição da s07, que pede fonte e veredito;
- o lugar dos clipes da caça (s01, s03, s05, s08, s09, s15, s17, s19, s20, s22, s24, s25), que se confere quando os clipes chegarem.

**Os NÃO CONFERIDOS da pesquisa no lote:**
- **s07: resolvido.** O 59,51 mi se reproduz (PA006).
- **s21:** a parte NÃO CONFERIDA era a sobreposição, que saiu da cena por decisão da Sala. Não há forma a conferir, e o número está confirmado (PA031).

**Voláteis:** nenhum no lote A. São normais climáticas, censos datados e história.

**DECISÃO DO LUCAS PENDENTE que tocou esta checagem:** a foto de agência da s16 (pergunta 1 da pesquisa-1), que não é deste laudo.

**Lista de nomes:** no lote A não há atribuição anônima. As pessoas que a pesquisa nomeou:
- Jeff Schmaltz, MODIS Land Rapid Response Team, NASA GSFC: as duas fotos MODIS (galerias da NASA acima);
- Amable-Paul Coutan, o pintor (POP);
- Bernabé Cobo, o autor (1639), e Manuel González de la Rosa, o editor de 1882;
- R. Lasaponara e N. Masini, os editores do livro da Springer de 2012.

**Os 2 padrões mais vistos:**
1. Tradução posta entre aspas como se fosse literal (s13, s17).
2. Rótulo que diz mais que a fonte ou a imagem: "upper" sobre a bacia inteira, "storage" sem "capacity", e a tentação de "Piura flooded" e do tamanho da lagoa na s16.

**Fontes da web consultadas:**
- [NASA MODIS 2018-06-24](https://modis.gsfc.nasa.gov/gallery/individual.php?db_date=2018-06-24)
- [NASA MODIS 2015-06-18](https://modis.gsfc.nasa.gov/gallery/individual.php?db_date=2015-06-18)
- [Planetary Computer, STAC LT05 1998-06-03](https://planetarycomputer.microsoft.com/api/stac/v1/collections/landsat-c2-l2/items/LT05_L2SP_011064_19980603_02_T1)
- [Commons, anomalias da NOAA de 1997](https://commons.wikimedia.org/wiki/File:Sea_surface_temperature_anomalies_from_March_to_August_1997_showing_evolution_of_major_El_Nino_(2268-446).jpg)
- [POP/Joconde 000PE006202](https://www.pop.culture.gouv.fr/notice/joconde/000PE006202)
- [Block, Bendix e Richter, El Niño 1997/98](https://www.archiv.geographie.uni-erlangen.de/wp-content/uploads/ninoperu.pdf)
- [Schneider et al., EGU 2005](https://meetings.copernicus.org/www.cosis.net/abstracts/EGU05/02049/EGU05-J-02049.pdf)
- [Wikipedia, Sechura Desert](https://en.wikipedia.org/wiki/Sechura_Desert) (só contexto)
- [St Andrews, a lagoa La Niña](https://elninophenomenon.wp.st-andrews.ac.uk/el-nino-phenomenon-stories-from-the-desert-of-sechura-and-la-nina-lagoon/) (só contexto)
- [Andina, a ata da fundação de Lima](https://andina.pe/agencia/noticia-el-acta-fundacion-lima-486-anos-historia-829835.aspx) (só como resultado de busca; lida a cópia local)
- [Britannica](https://www.britannica.com/biography/Francisco-Pizarro) (403)
- [Cuadernos de Historia, UChile](https://cuadernosdehistoria.uchile.cl/index.php/CDH/article/download/68838/71554/252863) (verificação de robô)

---

COBERTURA: 45 de 45. A lista foi derivada à mão, das entradas declaradas no topo; o detector foi a leitura integral, e nenhum item ficou sem veredito.

Citei 100 ids do laudo do roteiro, sem contá-los no 45:
- s01–s04: F001, F003–F008, F010, F011, F013–F020, F022–F025, F027;
- s06–s13: F028–F030, F033, F036–F040, F042, F042b, F043–F062;
- s14–s21: F063–F069, F071, F072, F073b, F074–F087;
- s22–s27: F088–F109.

Os 45 itens:

| veredito | quantos | ids |
|---|---|---|
| CONFIRMADA | 39 | os demais |
| DIVERGE (periférica) | 2 | PA043, PA044 |
| NÃO ACHEI | 3 | PA022, PA029, PA039 |
| REFUTADA | 1 | PA021 |

A REFUTADA é de uma forma que não está na tela, "Piura alagada". Se ela entrar, este laudo vira FAIL.

NOTA: 8/10

VEREDITO: RESSALVA

---

# Lote B (s28–s53 e gerais), como o verificador devolveu

COBERTURA: 70 de 76 itens novos com veredito. Os outros 6 estão como NÃO FOI CHECADO, porque a fonte primária fica no gob.pe ou num host com `Disallow: /`. Todos os 76 têm linha na tabela. **Situação: CHECADO PARCIALMENTE.**

# Laudo-delta de fatos · lote B (s28–s53 e gerais) · peru-agua · `screen_text` · tarefa `peru-agua-texto-1`

- **Data-base:** 22/10/2026.
- **O que foi julgado:** o que a pesquisa trouxe e pode ir à tela, nas cenas s28 a s53, mais o que nas pautas não tem cena. Os números, datas, nomes, cargos, lugares, citações, grifos de documento, créditos, os rótulos de lugar e de ano das fotos aprovadas e os rótulos das camadas de mapa.
- **Como a lista foi feita: à mão.** O canal não tem extrator. A lista saiu da leitura integral de:
  - `out/peru-agua/espelho.json`, segmentos s28 a s53: `_grafias`, `needs.dados`, `needs.geo` com `rotulo`, e `_planos`;
  - os 21 `out/peru-agua/_dados/<cena>.json` das cenas do lote;
  - as 6 pautas `.md` e as `.json` (geo, logos e pessoas, no que toca o lote);
  - `out/peru-agua/_pesquisa/conferencia-midia.json`: os 4 `aprovado` do lote (s28, s36, s40, s52);
  - os relatos `peru-agua-pesquisa-1.md` e `-2.md`, e `out/peru-agua/_tmp/verificar-research/consolidado.json` › `notas_passos_seguintes`.
- **Limite declarado da lista:**
  - as grafias que só existirão no `textos-tela.json` do redator não estão nela;
  - os rótulos de footage da caça também não: nenhum clipe tem veredito ainda.
- **O que já estava confirmado no laudo do roteiro** (`roteiros/peru-agua/qc-roteiro/fatos.laudo.md`, PASS, 263/263) foi citado pelo id e **não entrou na contagem**: são 128 ids, listados abaixo.
- **Contra o quê se conferiu:**
  - as cópias locais em `midia/peru-agua/fontes/`;
  - as páginas do Commons pelo `/wiki/File:` (3 pedidos);
  - a página do artigo na PUCP;
  - openstreetmap.org/copyright e as diretrizes da OSMF;
  - 5 buscas na web;
  - as camadas de `out/peru-agua/_media/geo/`, testadas por um script em `C:/Users/zangp/AppData/Local/Temp/claude/vf-peru-B/scripts/`.
- **O que não se tocou:** nenhum site do gob.pe, nenhum web.archive.org, nenhum navegador. Nenhuma imagem foi aberta. Nada foi gravado no canal.

**NOTA: 8/10.** Os números, citações e créditos novos do lote batem letra a letra com as cópias locais. Há 4 DIVERGE, todos em rótulo ou crédito periférico, cada um com conserto de uma linha. Há 6 fontes primárias atrás do gob.pe ou de `robots`, cujas afirmações vão à tela atribuídas a quem as publicou.

## A tabela (um item por linha)

| id | cena | afirmação (tela) | veredito | o que a fonte diz (literal) | fonte |
|---|---|---|---|---|---|
| PB001 | s28 | "BERNABÉ COBO, 1639 (1882 ED.)" | CONFIRMADA | "ta por el Padre Bernabé Cobo de la Compañia de Jesús. año de 1639"; "Lima, 1882."; "IMPRENTA LIBERAL… MAYO, 1882"; editor "M. GONZALEZ DE LA ROSA" | `midia/peru-agua/fontes/gente/cobo-1639-historia-fundacion-lima_djvu.txt` (l. 1832, 685, 1066–1069); https://commons.wikimedia.org/wiki/File:Historia_de_la_fundaci%C3%B3n_de_Lima_(IA_aja4162.0001.001.umich.edu).pdf |
| PB002 | s28 | "MUY BUEN PUERTO" sobre a baía do Callao | CONFIRMADA | A ordem: "por estar como está junto á él muy buen puerto para la carga y descarga de los navios". O cap. XXXI ("Del pueblo y puerto del Callao"): "Es este el Puerto mas principal… tan cerca de la ciudad que son dos leguas cortas". A ordem não nomeia o Callao; o próprio Cobo identifica o porto de Lima com ele. | idem, l. 2615–2616, 791, 8122–8129 |
| PB003 | s28 | "San Lorenzo Island" | CONFIRMADA | OSM: `osm_name` "Isla San Lorenzo" (relation/3285474). Cobo: "una isla medianamente alta… Hácele abrigo contra el viento Sur" ao porto | `out/peru-agua/_media/geo/ilha-san-lorenzo.json`; Cobo, l. 8169–8172 |
| PB004 | s28 | a página na tela é a p. 14 da edição de 1882, com a ordem; "JANUARY 1535" | CONFIRMADA, com ressalva de rótulo | Na p. 14: "mudar el dicho pueblo en esta provincia de Pachacamac… está en comedio de tierra donde los dichos indios puedan servir con poco trabajo". A data ("fecho en Pachacamac á 6 de Enero de 1535") está na p. 15, não na 14 | `conferencia-midia.json` (p14); Cobo, l. 2612–2651 |
| PB005 | s31 | a série das 3 regiões nos 8 censos (gráfico) | CONFIRMADA | "28.3 65.0 6.7 · 39.0 52.3 8.7 · 46.1 44.0 9.9 · 49.8 39.7 10.6 · 52.4 34.8 12.8 · 54.6 32.0 13.4 · 58.0 28.1 13.9 · 58.7 26.7 14.6". Cada censo soma 100 (1981 dá 100,1, por arredondamento). 19.185.930 ÷ 32.706.028 = 58,66 % | `documento/inei-2026-censo2025-presentacion-resultados.txt` (p. 12); https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/publicaciones/Presentacion_resultados.pdf |
| PB006 | s31 | RAINFOREST: a parcela "more than doubled" | CONFIRMADA | Selva 6.7 (1940) → 14.6 (2025) = 2,18× | idem |
| PB007 | s31 | crédito "INEI", censos 1940–2025 | CONFIRMADA | "Fuente: INEI - Censos Nacionales de Población y Vivienda 1940, 1961, 1972, 1981, 1993, 2007, 2017 y 2025." | idem |
| PB008 | s32 | "PREDOMINANTLY ANDEAN" / "MOSTLY COASTAL" | CONFIRMADA (tradução fiel); falta o aviso na grafia | "la población de ser predominantemente andina ha pasado a ser mayoritariamente costeña" (p. 18 impressa, PDF p. 8 do cap. 1). O `_dados` leva "(channel's translation)"; a `_grafias` do espelho não | `gente/inei-lib1539-cap01.pdf`; https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/cap01.pdf |
| PB009 | s32 | crédito "INEI, 2018" | NÃO ACHEI | Nenhuma cópia lida traz a data de publicação do Perfil. A nota de imprensa 108, de "25 Junio 2018", diz que com o censo "se podrá elaborar el Perfil Sociodemográfico". Um release 155-2018 aparece só no índice da busca (inei.gob.pe, não aberto). O indício forte é 2018 | `documento/inei-2018-nota-108.txt` (l. 47, 124) |
| PB010 | s33 | "(CVR), 2003" | CONFIRMADA | Andina: o 10º aniversário do informe, entregue em 28/08/2003. A busca corrobora a entrega em 28/08/2003 | https://andina.pe/ingles/noticia-con-llamado-a-justicia-y-reparacion-conmemoran-10º-aniversario-informe-cvr-472286.aspx ; https://www.realinstitutoelcano.org/analisis/la-comision-de-la-verdad-y-reconciliacion-en-peru-conclusiones-y-perspectivas/ |
| PB011 | s33 | "· ESTIMATE" | CONFIRMADA | "No existen estimados absolutamente fiables, pero la mejor aproximación permite suponer que alrededor de medio millón…" | `gente/cvr-tomo6-1.9-desplazamiento.txt` (l. 14–15) |
| PB012 | s33 | a folha da CVR, t. VI, p. 627 | CONFIRMADA | o trecho está na página de rodapé "627" (o texto já é o F139) | idem (l. 15, 44); https://www.cverdad.org.pe/ifinal/pdf/TOMO%20VI/SECCION%20CUARTA-Crimenes%20y%20violaciones%20DDHH/FINAL-AGOSTO/1.9.0%20DESPLAZAMINETO.pdf |
| PB013 | s34 | "LIMA REGION + CALLAO" no departamento (NE, sem o Callao) mais o polígono do Callao | CONFIRMADA | "Lima con 41,9%"; "Notas: a) Lima incluye la Provincia Constitucional del Callao". A camada `departamento-lima` é o departamento sem o Callao, e o Callao vai à parte, a mesma régua | `documento/inei-lib1940-parte01.txt`; `pauta-geo.md` |
| PB014 | s34 | crédito "INEI, 2025 CENSUS" para a cena que mostra também "ABOUT 650,000 (1940)" | DIVERGE (periférica) | O número de 1940 vem do censo de 1940, pela tabela do INEI de 1995 ("LIMA METROPOLITANA 645,172"), e não do censo de 2025 | `gente/inei-lib0018-cap31003-litorizacion.txt` |
| PB015 | s35 | "MEDINA GARCÍA, PUCP, 1982" | CONFIRMADA | "Debates en Sociología · Núm. 7 (1982)"; o autor é "Profesor del Departamento de CCSS. de la Pontificia Universidad Católica" | https://revistas.pucp.edu.pe/index.php/debatesensociologia/article/view/6875 ; `gente/pucp-debates-6875.txt` |
| PB016 | s35 | rótulo "Pamplona" no ponto do bairro de hoje | CONFIRMADA (o nome) | "invasiones de terrenos eriazos acaecidas en el año 1971, en la zona denominada Pamplona". O ponto do OSM (node/9733606657, `osm_name` "Pamplona") é aproximado, como a pauta declara | `pucp-debates-6875.txt` l. 27–28; `_media/geo/pontos-osm.json` |
| PB017 | s36 | os 25,5 % (1981) na fonte primária, o INEI de 1996 | NÃO FOI CHECADO: o site recusou robô (https://www.inei.gob.pe/biblioineipub/bancopub/Est/Lib0002/cap0101.htm, gob.pe, 418) | Na CVR, a tabela: "1981 4'608,010 1'171,800 25.5", "Fuente: INEI, Lima Metropolitana, perfil sociodemográfico, 1996". **Na mesma página, a prosa da CVR diz:** "Para 1981, casi un tercio de la población limeña vivía en ellos (1.5 millones)". A conta da tabela dá 25,4 % | `gente/cvr-tomo4-1.5-lima-metropolitana.txt` (l. 86–93, 116–119, 124) |
| PB018 | s36 | polígono `lima-callao-metropolitana` como régua do número | CONFIRMADA | a tabela é de "Lima Metropolitana", e "Comprende la Provincia de Lima y la Provincia del Callao" (o trecho do F143). O polígono são as duas províncias do OSM | CVR, idem; `gente/inei-lib0014-varicont.txt` |
| PB019 | s36 | o rótulo de lugar da foto | CONFIRMADA: "LIMA" ou "SOUTHERN LIMA", nunca um distrito | "Pueblo Joven, picture was taken in southern part of Lima, in 1997."; categoria "Slums in Lima" | https://commons.wikimedia.org/wiki/File:Lima_PuebloJov_4.jpg (lido em 22/10/2026) |
| PB020 | s36 | "Photo from 1997" | CONFIRMADA | Date: "April 1997" | idem |
| PB021 | s36 | "Håkan Svensson / Wikimedia Commons · CC BY 2.5" | CONFIRMADA | Author: "Håkan Svensson [Xauxa]"; "You may select the license of your choice" (GFDL, CC BY-SA 3.0, CC BY 2.5) | idem |
| PB022 | s38 | "DEC–APR ~30 m³/s"; conversões ~1,060 e ~275 cu ft/s | CONFIRMADA | "un caudal natural que alcanza los 30 m3/s en promedio… alcanza solo los 7.8 m3/s". 30 × 35,3147 = 1.059; 7,8 × 35,3147 = 275 | `agua-de-lima/defensoria-informe-defensorial-239-2025.txt` l. 4601–4602 |
| PB023 | s39 | o lado seco com 125 (77 + 48) | CONFIRMADA | "CUENCA SANTA EULALIA 77 MM3"; "48 MM3 CUENCA SAN MATEO (RIMAC)"; "282 MMC"; "157 MM3". 77 + 48 = 125 e 157 + 125 = 282 | `mecanismo/jica-sedapal-2007-lamina.txt`; https://openjicareport.jica.go.jp/pdf/11871159_02.pdf |
| PB024 | s39 | as conversões (74,5 / 41,5 / 20,3 / 12,7 bilhões de galões; 4.445 m = 14.583 ft) | CONFIRMADA (a conta) | × 264,172 gal/m³; ÷ 0,3048 m/ft | conta do verificador |
| PB025 | s39 | "ANTACOTO DAM ~14,600 FT (4,445 m)" (texto sugerido no `_dados`) | DIVERGE entre fontes (periférica) | SEDAPAL 2007: "REPRESA ANTACOTO 4,445 msnm". O MVCS, citado pela Infobae em 09/2024: "La represa Antacoto, ubicada a 4.600 m s.n.m." | lâmina, l. 32; `gente/infobae-2024-09-05-tunel-trasandino.txt` l. 46 |
| PB026 | s39 | "upper Mantaro basin" (espelho: need `bacia-alto-mantaro`) sobre o polígono `bacia-mantaro` | DIVERGE na geometria (periférica) | O texto "upper" se apoia em "PARTE ALTA DEL MANTARO" (F177). O polígono é a bacia **inteira** (34.534 km²); o `rotulo` da camada já é "Mantaro basin", mas o espelho ainda pede "upper Mantaro basin" | `_media/geo/bacia-mantaro.json` (`nota_mapista`); `espelho.json` s39 |
| PB027 | s39 / s42 / s52 | "high lakes" / "AMAZON SIDE": as lagoas ficam do lado amazônico | CONFIRMADA | Marcapomacocha, Antacoto, Marcacocha e Tucto caem dentro de `vertente-atlantico`, pelo teste de ponto em polígono | camadas `lagoas-marcapomacocha-antacoto` e `vertente-atlantico`; script `lados.py` |
| PB028 | s40 | "CANAL 7.4 MI + TUNNEL 6.3 MI"; "JICA, 2002" | CONFIRMADA | "the 11.9 km long Marcapomacocha-Cuevas canal and the 10.1 km long Cuevas-Milloc tunnel"; o catálogo dá a data "2002.1". 11,9 km = 7,39 mi; 10,1 km = 6,28 mi | `agua-de-lima/jica-11679578_27-canete-vol3-H.txt` l. 1670–1671; `jica-11679578-catalogo.txt`; https://openjicareport.jica.go.jp/617/617/617_709_11679578.html |
| PB029 | s40 | "CAPACITY 14 m³/s" contra "7.8 m³/s"; as conversões; "nearly twice" | CONFIRMADA | "14 m3/sec" (JICA); 7,8 (Defensoría). 14 ÷ 7,8 = 1,79; 494 e 275 cu ft/s | JICA l. 1676; Defensoría l. 4602 |
| PB030 | s40 | "LA ATARJEA · 70% OF PRODUCTION (2023)" | CONFIRMADA | "La producción anual referida al año 2023… Planta La Atarjea N° 1 y N° 2 70%" | Defensoría, l. 4857–4865 |
| PB031 | s40 / s43 | o túnel cruza a divisória (o anel) | CONFIRMADA | a camada "Cuevas–Milloc tunnel" vai de um ponto atlântico (Cuevas) a um ponto do Pacífico (Milloc). JICA: "to the headwaters of Rio Santa Eulalia… on the Pacific slope" (F180) | `_media/geo/tunel-transandino.json`; script `tunel.py` |
| PB032 | s40 | a foto: "Santa Eulalia River", 2021, sem aviso do ano (a fala está no presente) | CONFIRMADA | "Español: Río Santa Eulalia"; "14 August 2021 (according to Exif data)"; sem coordenada | https://commons.wikimedia.org/wiki/File:R%C3%ADo_Santa_Eulalia.jpg |
| PB033 | s40 | "Johnattan Rupire / Wikimedia Commons · CC BY-SA 4.0" | CONFIRMADA | Author: "Johnattan Rupire"; "Creative Commons Attribution-Share Alike 4.0 International" | idem |
| PB034 | s41 | a folha recriada do SENAMHI, com "[…]" | CONFIRMADA, letra a letra | "La finalidad del proyecto fue cubrir la demanda del servicio eléctrico en la ciudad de Lima, pues con el aporte… (OSINERGMING 2012), además de afianzar el caudal de río Rímac aguas abajo." (PDF p. 58) | `agua-de-lima/senamhi-2016-vulnerabilidad-chirilu-mantaro.pdf`; https://hdl.handle.net/20.500.12542/124 |
| PB035 | s41 | o ponto "Huinco" | CONFIRMADA | OSM way/864802081, start_date 1964, cai do lado do Pacífico; SENAMHI, Tabla 3-2: "Huinco… 1964" (F188) | `_media/geo/huinco.json`; script `lados.py` |
| PB036 | s42 | "THE ONLY MEANS OF TRANSFER" | CONFIRMADA (tradução fiel); falta o aviso de tradução | "El túnel transandino es el único medio de trasvase del agua almacenada en el sistema de lagunas de la cuenca del Atlántico hacia la cuenca del Pacífico" | `agua-de-lima/proactivo-sedapal-ariana-2021-02.txt` l. 29; https://proactivo.com.pe/proyecto-minero-ariana-sedapal-senala-que-juez-resolvera-demanda-ante-posible-riesgo-para-fuentes-de-agua/ |
| PB037 | s42 | "SEDAPAL, FEB. 2021" | CONFIRMADA como atribuída, pela ProActivo | "17/02/2021"; "Sedapal informa que el miércoles 17 de febrero…" | idem, l. 24, 27 |
| PB038 | s42 | a nota original da SEDAPAL de 17/02/2021 | NÃO FOI CHECADO: o site recusou robô (www.gob.pe, 418, registrado pela pesquisa) | só a ProActivo foi lida | `_dados/s42.json` › `nota` |
| PB039 | s42 | a folha recriada (o trecho em espanhol) | CONFIRMADA, letra a letra | a mesma frase de PB036. A grafia é "transandino", sem o "s" de "trasandino" que a Defensoría e a Infobae usam | ProActivo, l. 29 |
| PB040 | s42 | "3 LARGE RESERVOIRS": Antacoto, Huascacocha e Yuracmayo acesas | CONFIRMADA | "Sedapal cuenta con un total de 19 lagunas reguladas y tres grandes represas: Antacoto, Huascacocha y Yuracmayo". **Yuracmayo cai do lado do Pacífico** | `gente/infobae-2024-09-05-tunel-trasandino.txt` l. 49; script `lados.py` |
| PB041 | s42 | a fala de Cárhuaz na fonte primária (a entrevista da área de Comunicações da SEDAPAL) | NÃO FOI CHECADO: a fonte é da SEDAPAL (gob.pe, 418) | a Infobae: "durante una entrevista realizada por el área de Comunicaciones de Sedapal" (F193–F198, confirmados como atribuídos) | Infobae, l. 49; https://www.infobae.com/peru/2024/09/05/el-tunel-trasandino-que-atraviesa-la-cordillera-de-los-andes-y-conecta-dos-vertientes-lima-se-beneficio-con-esta-megaobra/ |
| PB042 | s43 | "On the hills at the city's edge, many homes are not on the network at all" (pergunta do consolidado) | CONFIRMADA | AFP: "In the bone-dry hills overlooking Lima… thousands of Peruvians who get theirs delivered by tanker truck"; "many of them live in informal settlements high above the city, in spots not reached by the water and sewer lines"; "The situation on the outskirts of Lima". Gestión: "16 distritos del ámbito periurbano" e "más de 700 mil personas" | `gente/enca-afp-lima-running-water-dream.txt` l. 35, 38, 53; `agua-de-lima/gestion-sunass-cisternas-2026.txt` l. 74, 87 |
| PB043 | s44 | o estudo da Sunass na fonte primária (os 700 mil, os 94,7 %, S/ 22,11 e S/ 3,20) | NÃO FOI CHECADO: o site recusou robô (https://www.sunass.gob.pe/ → www.gob.pe, 418) | só a Gestión foi lida (F200–F206, como atribuídos) | `fundamento.json` › `lim-33` |
| PB044 | s44 | "S/ 22.11" contra "~S/ 3.20" e a razão "ABOUT 6×" | CONFIRMADA (pela Gestión), com aviso de conta | "S/22.11 por metro cúbico… alrededor de S/3.20 por m³"; "seis veces más". A conta dá 22,11 ÷ 3,20 = **6,9**. A AFP de 2025 também diz "six times… the government says" | Gestión l. 74–75; AFP l. 54; https://gestion.pe/peru/hogares-sin-acceso-al-agua-en-lima-y-callao-pagan-6-veces-mas-que-usuarios-conectados-noticia/ |
| PB045 | s44 | "SUNASS, 2025 STUDY" | CONFIRMADA | "luego de 10 años de una primera medición efectuada en 2015"; "en 2025, esta cifra alcanza el 94.7%"; matéria de "25/03/2026" | Gestión l. 73–74, 80 |
| PB046 | s44 | "SUNASS — Peru's water and sanitation regulator" | CONFIRMADA | "Superintendencia Nacional de Servicios de Saneamiento (Sunass)" (Gestión). INEI: "cuya función es normar, regular, supervisar y fiscalizar la prestación de los servicios de saneamiento"; "Las 50 EPS reconocidas por la SUNASS… SEDAPAL". Defensoría: "el organismo regulador" | Gestión l. 74; `documento/inei-lib1140-cap03.txt` l. 77–82; Defensoría l. 3811–3813 |
| PB047 | s44 | nenhum distrito aceso nem nomeado (pergunta do consolidado) | CONFIRMADA | a fonte só diz "16 distritos del ámbito periurbano de Lima y Callao", sem a lista | Gestión l. 74 |
| PB048 | s47 | "SEDAPAL TO AFP, MARCH 2025" e o card opcional de Reyes | CONFIRMADA | "Nicolas Reyes, who works for the city's water utility Sedapal, says it brings in a cubic meter (260 gallons) of water per family per week." O nome vai sem acento e sem cargo | AFP l. 44; https://www.enca.com/opinion/poor-areas-perus-capital-running-water-dream |
| PB049 | s48 | "KULTURAUSTAUSCH (ifa)" | CONFIRMADA | "Published by ifa – Institute for Foreign Cultural Relations"; autora Elizabeth Salazar Vega, "01/26/2024" | `gente/kulturaustausch-2024-thirsty-metropolis-lima.txt` l. 144, 46; https://www.kulturaustausch.de/en/issues/issue-i-2024/translate-to-english-lima-die-durstige-metropole/ |
| PB050 | s49 | "PUENTE PIEDRA" no card de Tula Tinoco Espinoza | CONFIRMADA | "on the slopes of Puente Piedra, now known as the La Grama sector… This is where the Los Condes housing co-operative is located"; "Tula Tinoco Espinoza, who now has to carry several buckets" | idem, l. 66–67, 72 |
| PB051 | s50 | "DEPENDING ON A SINGLE TRANS-ANDEAN TUNNEL" ("dependiendo" contra "depender") | CONFIRMADA (fiel ao gerúndio); falta o aviso de tradução | "contribuye con más del 60% de las reservas de agua de la ciudad de Lima, dependiendo de un solo túnel trasandino" | Defensoría l. 4541–4542; https://www.defensoria.gob.pe/informes/informe-defensorial-n-239/ (só a cópia local) |
| PB052 | s50 | "POTENTIAL RISK OF COLLAPSE" / "IN A STRONG EARTHQUAKE" | CONFIRMADA | "con un potencial riesgo de colapso ante sismos de alta intensidad, situación que pone en riesgo la provisión de agua (SEDAPAL 2019: 9)" | Defensoría l. 4543–4544 |
| PB053 | s50 | a folha recriada da Defensoría, p. 74 | CONFIRMADA, letra a letra | o trecho está na página de cabeçalho "74" (PDF p. 75: as duas numerações da pesquisa estão certas) | `defensoria-informe-defensorial-239-2025.pdf` |
| PB054 | s50 | o plano da SEDAPAL de 2019, p. 9, na fonte | NÃO FOI CHECADO: o site recusou robô (https://www.gob.pe/institucion/sunass/informes-publicaciones/5878970-pmo-sedapal-2020, gob.pe, 418) | a bibliografia da Defensoría: "2019 Diseño de Mecanismo de Retribución… Tomo VI del Plan Maestro… 2020-2025" | Defensoría l. 9655–9659 |
| PB055 | s50 | "SECOND TUNNEL · STUDIED SINCE 1996" | DIVERGE (periférica) | "el estudio defintivo estuvo a cargo del… (SEDAPAL), el cual fue ejecutado en 1996": é o estudo definitivo feito em 1996, e não "estudado desde 1996" | `senamhi-2016…txt` l. 3919–3920 |
| PB056 | s50 | "PLANNED": de Pomacocha e Huallacocha ao rio Blanco | CONFIRMADA | "afianzamiento de las lagunas Pomacocha y Huallacocha… a la quebrada Pucullo (tributario del río Blanco)… nuevo túnel trasandino denomindado Pomacocha – río Blanco… 10 km". Gestión (30/08/2026): "Pomacocha y Huallacocha Bajo… por un túnel trasandino hasta un afluente del río Rímac". As pontas caem do lado certo | SENAMHI l. 3920–3925; `agua-de-lima/gestion-obras-cabecera-2026-08-30.txt` l. 81; script `lados.py` |
| PB057 | s50 | "AUG. 2026 · NO CONSTRUCTION DATE" (volátil) | CONFIRMADA na data-base | "la oportunidad de la convocatoria de la Fase 2… depende de la planificación… de Sedapal, y del MVCS". A busca de 22/10/2026 não achou notícia com data da Fase 2 depois de 30/08/2026. A ProInversión não foi aberta (gob.pe) | Gestión l. 99; https://gestion.pe/economia/megaproyecto-para-traer-mas-agua-para-lima-recien-se-adjudicaria-en-el-verano-2027-sus-fases-y-presupuesto-noticia/ ; https://gestion.pe/noticias/obras-de-cabecera/ |
| PB058 | s51 | "c. 3000 BC" (Caral) | CONFIRMADA | "can be located in time between the years 3000 to 1800 B.C." | `gente/unesco-1269-caral.txt` l. 231; https://whc.unesco.org/en/list/1269/ |
| PB059 | s52 | a foto: "Laguna Marcapomacocha", 2018, sem aviso do ano, do lado amazônico | CONFIRMADA | "Laguna Marcapomacocha en el departamento de Junín, Perú"; "2 September 2018"; câmera em −11.406114, −76.337250, dentro de `vertente-atlantico` | https://commons.wikimedia.org/wiki/File:Laguna_Marcapomacocha.jpg |
| PB060 | s52 | "Sichuancay / Wikimedia Commons · CC BY-SA 4.0" | CONFIRMADA | Author: "Sichuancay"; CC BY-SA 4.0 | idem |
| PB061 | geral (s30, s39, s40, s43, s49–s52) | "CONTINENTAL DIVIDE" como a linha do HydroBASINS | CONFIRMADA (como representação) | ANA: "Pacífico 278,48 · 957,82 · 48,91" (10³ km²). A diferença das vertentes da camada é de +0,90 %, +0,28 % e −1,11 % | `documento/ana-pnrh-1416.txt` l. 2004–2022; `pauta-geo.md` |
| PB062 | geral | "PACIFIC SIDE" / "AMAZON SIDE" sob os lugares nomeados | CONFIRMADA | Huinco, La Atarjea, Yuracmayo e o rio Blanco no Pacífico; as lagoas, Antacoto, Huascacocha e Pomacocha no Atlântico (a lista bate com a do pesquisa-geo) | script `lados.py` |
| PB063 | geral | "© OpenStreetMap contributors" e openstreetmap.org/copyright na descrição | CONFIRMADA | "“© OpenStreetMap contributors” or “© OpenStreetMap”"; quando o crédito vai na descrição, "the URL to openstreetmap.org/copyright must be included" | https://osmfoundation.org/wiki/Licence/Attribution_Guidelines ; https://www.openstreetmap.org/copyright |
| PB064 | geral | HydroSHEDS v1 "livre para uso comercial" | CONFIRMADA | "The HydroBASINS database is freely available for scientific, educational and commercial use." | `mecanismo/hydrosheds-hydrobasins.txt` (https://www.hydrosheds.org/products/hydrobasins) |
| PB065 | geral (descrição) | o texto literal do Exhibit B ("This product incorporates data from the HydroSHEDS version 1 database…") | NÃO FOI CHECADO: o acordo de licença fica em data.hydrosheds.org (`robots.txt`: `Disallow: /`), e nenhuma cópia local o traz | — | `pauta-geo.json` › `credito_descricao` |
| PB066 | s21 (lote A; está aqui porque a tarefa o pediu pelo nome) | "MINAM (PERU), 2019" para os ~27.000 mi² | CONFIRMADA | "Primera edición, noviembre de 2019"; "DESIERTO COSTERO 7,107,338.20" (ha) = 71.073 km² = 27.442 mi² | `documento/minam-2019-mapa-nacional-ecosistemas.txt` l. 29, 302–306 |
| PB067 | geral | "INEI" = Instituto Nacional de Estadística e Informática | CONFIRMADA | "INSTITUTO NACIONAL DE ESTADISTICA E INFORMATICA" | cópias locais do INEI |
| PB068 | geral | "SEDAPAL" | CONFIRMADA | "SERVICIO DE AGUA POTABLE Y ALCANTARILLADO DE LIMA - SEDAPAL" | Defensoría, bibliografia (l. 9651) |
| PB069 | geral | "SENAMHI" | CONFIRMADA | "SERVICIO NACIONAL DE METEOROLOGÍA E HIDROLOGÍA DEL PERÚ (2016)" | `senamhi-2016…txt` |
| PB070 | geral | "DEFENSORÍA DEL PUEBLO (PERU'S OMBUDSMAN)" | CONFIRMADA | o nome em inglês mais usado é "Ombudsman's Office of Peru" | https://en.wikipedia.org/wiki/Peruvian_ombudsman |
| PB071 | geral | "PERU'S TRUTH AND RECONCILIATION COMMISSION (CVR)" | CONFIRMADA | "Comisión de la Verdad y Reconciliación" | `gente/cvr-*.txt` |
| PB072 | geral | "UNESCO" (World Heritage Centre) | CONFIRMADA | "Historic Centre of Lima - UNESCO World Heritage Centre" | `gente/unesco-500-lima.txt` |
| PB073 | geral | "JICA" | CONFIRMADA | "Japan International Cooperation Agency" (o catálogo escreve "Intnernational", erro dele) | `jica-11679578-catalogo.txt` |
| PB074 | geral | "AFP" | CONFIRMADA | a matéria é da AFP ("by Carlos Mandujano and Lena Cloarec"; "AFP \| ERNESTO BENAVIDES") | `enca-afp-…txt` |
| PB075 | geral | "INFOBAE" | CONFIRMADA | "…megaobra - Infobae" | `infobae-…txt` l. 1 |
| PB076 | geral | "GESTIÓN" | CONFIRMADA | "… \| PERU \| GESTIÓN" | `gestion-sunass-…txt` l. 1 |

**O placar:**
- CONFIRMADA: 65.
- DIVERGE: 4 (PB014, PB025, PB026, PB055), todos periféricos.
- NÃO ACHEI: 1 (PB009).
- REFUTADA: 0.
- NÃO FOI CHECADO: 6 (PB017, PB038, PB041, PB043, PB054, PB065).

**NADA A CHECAR, declarado:**
- **s53:** o pedido de comentário não afirma fato.
- **s30:** só tem os rótulos gerais (PB061 e PB062).
- **s37 e s45:** só tem o que o laudo do roteiro já confirmou.
- **O escudo nacional** (`pauta-logos.md`, "Selos e insígnias"): não vai à tela. As normas citadas lá (Constitución art. 49, DL 11323, Ley 32251) não foram julgadas.

**Fora do lote:**
- O card de Pizarro está na **s26**: é do lote A. O cargo dele não tem veredito aqui.

## Os ids do laudo do roteiro citados (128, fora da contagem)

- **s28:** F110, F111, F112, F113, F114, F243.
- **s29:** F115, F116, F117.
- **s31:** F119, F121, F123, F124, F125, F127, F129, F129b, F130.
- **s32:** F133.
- **s33:** F134, F135, F136, F137, F138, F139, F140, F141.
- **s34:** F142, F143, F144, F145, F145b, F145c, F146, F147, F149, F150, F151, F152.
  - A conta "9.6 M + 1.0 M = 10.6 M" fecha com o F145.
- **s35:** F156, F157, F158, F158b, F159, F160.
- **s36:** F161, F162, F163, F164.
- **s37:** F165, F166.
- **s38:** F167, F168, F169, F170, F231.
- **s39:** F171, F172, F173, F174, F175, F176, F177.
- **s40:** F178, F179, F180, F181, F182, F183.
- **s41:** F184, F185, F186, F187, F188, F188b.
- **s42:** F189, F190, F192, F193, F194, F195, F196, F197, F198.
  - Dão o card "RÓMULO CÁRHUAZ · Watershed management analyst, SEDAPAL", "INFOBAE, SEPT. 2024", "MAY 1 – NOV 30" e "19 LAKES · 3 LARGE RESERVOIRS".
- **s43–s44:** F200, F201, F202, F203, F204, F204b, F205, F206.
- **s45–s46:** F207, F208, F209, F210.
  - A citação "“There are worms in the bottom of the tank.”" confere letra a letra.
- **s47:** F211, F212, F213, F214, F214b.
- **s48:** F215, F216, F218, F219, F221, F223.
- **s49:** F224, F225, F226, F227.
- **s50:** F228, F229, F230, F232, F233, F234, F235, F236, F237.
- **s51:** F240, F241, F242, F245, F247, F248.
- **s52:** F250, F251.

## Os achados, com o conserto

1. **[LEVE] PB026, s39: "upper Mantaro basin" sobre a bacia inteira.**
   - Conserto: o rótulo "upper Mantaro basin" vai só no norte, sobre as lagoas de Marcapomacocha, com a bacia sem preenchimento ou fora do quadro ao sul.
   - Se o polígono inteiro aparecer, o rótulo é "Mantaro basin".
   - O espelho ainda pede o need `bacia-alto-mantaro` com o rótulo "upper Mantaro basin".
   - RAIZ: PONTUAL.
2. **[LEVE] PB055, s50: "SECOND TUNNEL · STUDIED SINCE 1996".**
   - Conserto: "SECOND TUNNEL · DEFINITIVE STUDY, 1996".
   - O "1990s" da linha do tempo fica.
   - RAIZ: PONTUAL.
3. **[LEVE] PB025, s39: a altitude da Antacoto diverge entre fontes.**
   - Conserto: na tela, só "NEARLY 15,000 FT".
   - Se a altitude da represa for à tela, ela vai atribuída: "ANTACOTO DAM: 4,445 m (SEDAPAL, 2007)".
   - RAIZ: PONTUAL.
4. **[LEVE] PB014, s34: o crédito não cobre o número de 1940.**
   - Conserto: "Source: INEI, censuses 1940 and 2025; INEI, 2022 GDP estimate".
   - RAIZ: PONTUAL.
5. **[LEVE] PB008, PB036 e PB051: citação traduzida sem a marca de tradução.**
   - Conserto: cada uma leva a marca "(channel's translation)", ou "TRANSLATED FROM SPANISH", junto do crédito:
     - na s42: "THE ONLY MEANS OF TRANSFER";
     - na s50: "DEPENDING ON A SINGLE TRANS-ANDEAN TUNNEL";
     - na s32: a grafia do espelho, que hoje não a leva.
   - RAIZ: INSTRUÇÃO. Toda citação aspada de fonte em espanhol avisa que foi traduzida.
6. **[LEVE] PB009, s32: o ano do crédito "INEI, 2018" não foi achado numa fonte lida.**
   - Conserto: "Source: INEI, 2017 census profile", sem o ano da publicação.
   - RAIZ: PONTUAL.
7. **[LEVE] PB044, s44: a conta dos dois preços não fecha com o "6×".**
   - S/ 22,11 e S/ 3,20 não vão juntos na tela com "ABOUT 6×": a conta dá 6,9.
   - Conserto: só "ABOUT 6× THE PRICE · SUNASS".
   - RAIZ: PONTUAL.
8. **[LEVE] PB037, s42: falta dizer por onde a frase chegou.**
   - Conserto: "SEDAPAL (VIA PROACTIVO), FEB. 2021", como "SUNASS (VIA GESTIÓN)".
   - RAIZ: PONTUAL.

## A lista de nomes (anônimo → pessoa ou instituição nomeável)

- **"An official at the utility"** (s47): Nicolas Reyes, "who works for the city's water utility Sedapal". O cargo não é dado. AFP, 20/03/2025. https://www.enca.com/opinion/poor-areas-perus-capital-running-water-dream
- **"the news agency AFP"** (s46–s47): reportagem de Carlos Mandujano e Lena Cloarec, fotos de Ernesto Benavides. Mesma URL.
- **"a German magazine"** (s48–s49): KULTURAUSTAUSCH, do ifa (Institute for Foreign Cultural Relations). Reportagem de Elizabeth Salazar Vega, 26/01/2024. https://www.kulturaustausch.de/en/issues/issue-i-2024/translate-to-english-lima-die-durstige-metropole/
- **"Census figures cited by Peru's truth commission"** (s36): INEI, "Lima Metropolitana, perfil sociodemográfico", 1996, pela tabela da CVR, Tomo IV, 1.5. https://www.cverdad.org.pe/ifinal/pdf/TOMO%20IV/SECCION%20TERCERA-Los%20Escenarios%20de%20la%20Violencia/Historias%20Regionales/1.5%20REGION%20LIMA%20METROPOLITANA.pdf
- **"Peru's water regulator"** (s44): Sunass, Superintendencia Nacional de Servicios de Saneamiento, pela Gestión de 25/03/2026.

## Os 2 padrões mais vistos

1. **Citação de fonte em espanhol traduzida para a tela sem a marca de tradução** (s32 na grafia, s42 e s50). As traduções em si estão fiéis.
2. **A tela um passo mais precisa que a fonte:**
   - "upper" sobre a bacia inteira;
   - "studied since";
   - uma altitude que outra fonte oficial contradiz;
   - um crédito que cobre só um dos dois anos da cena.

## Voláteis na tela (data-base 22/10/2026)

- **s44, "MORE THAN 700,000 WITHOUT A CONNECTION" (março de 2026):**
  - cresce ou cai com um número novo da Sunass ou da SEDAPAL;
  - zera com a ligação das áreas periurbanas.
  - A tela já leva a data.
- **s50, "AUG. 2026 · NO CONSTRUCTION DATE":**
  - cai no dia em que a ProInversão, a SEDAPAL ou o MVCS derem data à Fase 2;
  - a manchete da Gestión de 30/08/2026 já fala de adjudicar a Fase 1 no verão de 2027.
  - Reconferir na véspera de publicar.
- **s42, "19 LAKES · 3 LARGE RESERVOIRS" (fala de 2024):** muda com a Marca IV ou com uma represa nova. A tela leva a data e a atribuição.
- **s39, a capacidade de 2007:** datada na tela, "(2007)". O MVCS em 2024 dá 331 hm³ só à Antacoto, número que não bate com o total de 2007 (282). É régua de outra data, e a tela não deve juntar os dois.
- **s47, as entregas grátis (AFP, 03/2025):** a atribuição e a data na tela as protegem.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Nenhuma nova.
- Nenhuma divergência da voz foi achada, e a regravação não se aplica.

## Para o redator-de-tela

- **s28:**
  - Pode: "BERNABÉ COBO, 1639 (1882 ED.)", "JANUARY 1535" como rótulo da ordem, "MUY BUEN PUERTO" sobre a baía do Callao, "San Lorenzo Island".
  - Não pode: o dia (6), nem dar a p. 14 como a página da data (a data está na p. 15).
- **s29:** pode tudo o que está nas grafias (F113–F116). O dia 18 nunca.
- **s31:**
  - Pode: a série inteira das 3 regiões, com "Source: INEI, censuses 1940–2025", e "RAINFOREST… more than doubled" (6.7 → 14.6).
  - Não pode: área de região na tela.
- **s32:** pode as duas expressões aspadas, com a marca de tradução, e "Source: INEI, 2017 census profile". O "2018" não está provado.
- **s33:**
  - Pode: "INEI, 1995"; "ABOUT 500,000 DISPLACED, 1980–2000"; "PERU'S TRUTH AND RECONCILIATION COMMISSION (CVR), 2003 · ESTIMATE"; a folha da p. 627.
- **s34:**
  - Pode: as grafias do espelho.
  - Conserto: o crédito passa a "INEI, censuses 1940 and 2025; INEI, 2022 GDP estimate".
- **s35:**
  - Pode: "1971 · 180 FAMILIES · ABOUT 7,000 FAMILIES", "Villa El Salvador", "Pamplona" (ponto aproximado, declarado), "Source: Medina García, PUCP, 1982".
  - Não pode: "Pamplona Alta".
- **s36:**
  - Pode: "1981 · ABOUT 1 IN 4", "INEI (1996), CITED BY THE CVR", *barriadas*. A foto leva "Photo from 1997", o rótulo "LIMA" ou "SOUTHERN LIMA" e o crédito "Håkan Svensson / Wikimedia Commons · CC BY 2.5".
  - Não pode: distrito nenhum (nem Villa El Salvador, nem Pamplona), "half of Lima" ou "almost a third".
- **s38:** pode "~30 m³/s" e "7.8 m³/s" (ou ~1,060 e ~275 cu ft/s, a imperial primeiro), ou só "ABOUT A QUARTER", com "DEFENSORÍA DEL PUEBLO (PERU'S OMBUDSMAN), 2025".
- **s39:**
  - Pode: "STORAGE FOR LIMA (2007)", 282 / 157 / 125 (77 + 48) milhões de m³ (ou 74.5 / 41.5 / 33.0 bilhões de galões), "NEARLY 15,000 FT", "SEDAPAL".
  - "upper Mantaro basin" só no norte, sobre as lagoas.
  - Não pode: o número da Antacoto sem atribuição.
- **s40:**
  - Pode: "CANAL 7.4 MI + TUNNEL 6.3 MI", "ABOUT 14 MI", "JICA, 2002", "CUEVAS–MILLOC TUNNEL", "Santa Eulalia River", "La Atarjea", "70% OF PRODUCTION (2023)", 14 contra 7.8 m³/s (ou 494 contra 275 cu ft/s), "NEARLY TWICE".
  - A foto: "Santa Eulalia River", sem ano, com o crédito "Johnattan Rupire / Wikimedia Commons · CC BY-SA 4.0".
- **s41:** pode "BUILT 1958–1962 (SENAMHI)", "IN SERVICE SINCE 1963 (DEFENSORÍA)", "HUINCO PLANT, 1964", e a folha do SENAMHI com "[…]", fiel.
- **s42:**
  - Pode: "THE ONLY MEANS OF TRANSFER", com a marca de tradução, e "SEDAPAL (VIA PROACTIVO), FEB. 2021"; a folha com "transandino", como está na fonte; o card de Cárhuaz; "MAY 1 – NOV 30"; "19 LAKES · 3 LARGE RESERVOIRS" (Antacoto, Huascacocha e Yuracmayo).
  - Não pode: dar as 3 represas como todas do lado amazônico (Yuracmayo é do Pacífico), nem nomear "uma das 19 lagoas".
- **s43:** só o rótulo "Lima" no aéreo. A frase da voz está confirmada.
- **s44:**
  - Pode: "MORE THAN 700,000 WITHOUT A CONNECTION · LIMA AND CALLAO · SUNASS (VIA GESTIÓN), MARCH 2026"; "TRUCKED WATER · ABOUT 6× THE PRICE"; "SUNASS, 2025 STUDY"; "SUNASS — Peru's water and sanitation regulator"; 94.7 %, se for à tela, como "OF HOMES WITHOUT A CONNECTION IN THE 16 DISTRICTS STUDIED".
  - Não pode: distrito nenhum, os dois preços junto com o "6×", nem "7×".
- **s46–s47:**
  - Pode: as grafias do espelho; o card opcional "NICOLAS REYES · SEDAPAL", sem cargo.
- **s48–s49:** pode as grafias, "LOS CONDES · 42 FAMILIES" e "PUENTE PIEDRA" nos dois cards. A área de Puente Piedra não vai à tela.
- **s50:**
  - Pode: "DEPENDING ON A SINGLE TRANS-ANDEAN TUNNEL" e "POTENTIAL RISK OF COLLAPSE", com a marca de tradução; "DEFENSORÍA DEL PUEBLO, 2025, CITING SEDAPAL (2019)"; "SECOND TUNNEL · DEFINITIVE STUDY, 1996"; "PLANNED" (Pomacocha → rio Blanco); "1990s"; "AUG. 2026 · NO CONSTRUCTION DATE".
  - Não pode: "STUDIED SINCE 1996".
- **s51:** pode "c. 3000 BC", "1535", "20TH CENTURY" e "1958–1962 · 1963".
- **s52:** a foto leva o rótulo "Laguna Marcapomacocha", sem ano, e o crédito "Sichuancay / Wikimedia Commons · CC BY-SA 4.0".
- **Geral:**
  - "© OpenStreetMap contributors" em toda cena com camada do OSM, e openstreetmap.org/copyright na descrição.
  - Os nomes das instituições, como na pauta de logos.

## Para a Sala

**NÃO FOI CHECADO** (nenhum foi tentado; todos para o navegador do app, se a Sala quiser):
- PB017: https://www.inei.gob.pe/biblioineipub/bancopub/Est/Lib0002/cap0101.htm (gob.pe, 418). O INEI de 1996, os 25,5 % de 1981.
- PB038: a nota da SEDAPAL de 17/02/2021 (www.gob.pe, 418).
- PB041: a entrevista de Rómulo Cárhuaz feita pela área de Comunicações da SEDAPAL (gob.pe, 418).
- PB043: o estudo da Sunass dos 16 distritos, https://www.sunass.gob.pe/ → www.gob.pe (418).
- PB054: o Tomo VI do Plan Maestro da SEDAPAL, https://www.gob.pe/institucion/sunass/informes-publicaciones/5878970-pmo-sedapal-2020 (gob.pe, 418).
- PB065: o acordo de licença HydroSHEDS v1 com o texto do Exhibit B (data.hydrosheds.org, `robots.txt` `Disallow: /`). Pesa no `finalize`, na descrição.
- E, em PB057: a ProInversão (proinversion.gob.pe, gob.pe).

**Divergências da voz:** nenhuma. Nada a regravar.

**Avisos, sem mudar a voz:**
- **s36:** a prosa da CVR, na mesma página da tabela, diz "Para 1981, casi un tercio de la población limeña vivía en ellos (1.5 millones)". A voz e a tela seguem a tabela atribuída ao censo (25,5 %), o que está certo. Um espectador que abra a CVR pode achar a outra frase.
- **s39:** o MVCS, pela Infobae em 2024, dá a Antacoto a 4.600 m (15.092 ft). A SEDAPAL de 2007 dá 4.445 m. "Nearly 15,000 feet" continua defensável, entre 14.583 e 15.092 ft.

**Respostas às perguntas da tarefa:**
- **"dependiendo" (s50):** a tela do espelho continua fiel.
- **A linha da Sunass:** confirmada.
- **O rótulo da s36 sem distrito:** confirmado.
- **Nenhum distrito na s44:** confirmado.
- **O MINAM de 2019:** confirmado.
- **Os NÃO CONFERIDOS da pesquisa no lote B:**
  - confirmados como atribuídos: s42 (2), s44 (2) e s50;
  - as primárias de todos eles ficam NÃO FOI CHECADO (gob.pe);
  - na s36, a primária também fica NÃO FOI CHECADO.

COBERTURA: 70 de 76. Os 6 sem veredito são NÃO FOI CHECADO, por recusa de robô ou pela regra do gob.pe; a lista foi feita à mão, como acima. Laudo CHECADO PARCIALMENTE.
Citados do laudo do roteiro: 128 ids, fora da contagem.
NOTA: 8/10
VEREDITO: RESSALVA

---

## Fecho do setor

Os dois lotes terminam em RESSALVA. O veredito do laudo é o da soma, no topo: **RESSALVA**, com cobertura de 115 de 121.

COBERTURA: 115 de 121
VEREDITO: RESSALVA
