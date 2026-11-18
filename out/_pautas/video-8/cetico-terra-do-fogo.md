# Cético: `terra-do-fogo` ("Inside South America's Largest (And Most Divided) Island"), 18/11/2026

**Veredito: DERRUBADO. Nota: 4,0 / 10** (a pauta é das boas, e a hora é a pior: fica como reserva, a testar de novo em março ou abril de 2027).

O pedido é o `pedido-cetico.md`, com a régua nova do Lucas no lugar da régua de colisão (18/11/2026: vídeo antigo não derruba; derrubam a onda do
momento, que é um viral de 100 mil ou mais ou uma notícia quente sobre o ângulo nos últimos 2 meses, ou 3 longos com público nas últimas 8 semanas,
e o título igual ou quase igual em 12 meses; curto com menos de 2 mil views é ruído; a curiosidade vale mais que a busca). vidIQ até 40 créditos
("Os dois (Recomendado)").

**Em seis linhas:**
- **O gancho exato estourou em espanhol há 15 dias.** "Argentina está partida en dos: para ir a Ushuaia toca cruzar Chile" (Planeta Wow, 11,9 mil
  inscritos, 03/11/2026, **866 mil**). Em volta: a ilha "partida con una raya recta" (174 mil, 11/10), "De Argentina a Argentina… pasando por Chile"
  (92 mil, 03/11), "pasar por Chile para ir de Santa Cruz a Ushuaia" (90 mil, 15/10, canal de 408 inscritos), a Patagônia de 1881 (365 mil, 23/10)
  e o Beagle de 1978 (286 mil, 01/11). **E a cópia em inglês começou nesta semana** (Map Secrets, 15/11; WhyDisBorder, 17/11) (§2).
- **A notícia está quente, e no próprio corredor:** Chile × Argentina no estreito de Magalhães desde agosto, e a crise do navio Danstar
  (Punta Arenas–Malvinas) em outubro e novembro, ainda em curso: o navio chegou a Punta Arenas em 15/11 e zarpa em dezembro. No debate chileno, já
  se propôs barrar os caminhões argentinos que cruzam o estreito, que são a nossa estrada (§2).
- **Os fatos de fundo conferem na origem:** o tratado de 1881 (o meridiano de 68°34′, o estreito neutralizado), o erro da carta de FitzRoy e a linha
  que seguiu o cabo (o memorial de Barros Arana, 1895), o tratado de 1984, que crava **68°36′38,5″** no Beagle e obriga **piloto chileno** no navio
  argentino que vai a Ushuaia pelos canais, e o governo argentino, que manda entrar no Chile (§1).
- **A medida nossa, refeita sem o OSRM** (um Dijkstra próprio sobre o OSM): Río Gallegos–Ushuaia tem 588,7 km (365,8 mi), e **223,8 km (139,1 mi,
  38 %) ficam no Chile**, com uma balsa de 4,69 km. Na ilha, o Chile tem **56 %** da terra (Natural Earth) e só **~4 %** da gente (§4).
- **O potencial é real, e é por isso que o enxame chegou primeiro.** "tierra del fuego" tem ~11,3 mil buscas por mês (concorrência 30) e "ushuaia",
  ~34,9 mil (+58 %); o longo em inglês não existe. O paradoxo cabe no mapa. Os 13 a 16 min se sustentam (§3).
- **O ponto mais grave (K1):** o ângulo é a onda do momento em espanhol, com um viral de 866 mil no gancho exato há duas semanas, e já pinga em
  inglês. A notícia (K2) deve ter o pico em dezembro, quando o vídeo sairia, com as Malvinas no meio.

Lido entre ~03:04 e ~03:30 de 18/11/2026 (hora de Brasília). Os scripts, as respostas e as saídas estão em
`out/_pautas/video-8/_trabalho/cetico-terra-do-fogo/`:
- `vidiq-bruto/` (as 5 respostas do `vidiq_youtube_search`, em JSON), `vidiq-b2.txt` … `vidiq-b6.txt` (uma linha por vídeo, pelo `vidiq_ler.py`) e
  `vidiq.tsv` (as 6 chamadas e o gasto);
- `watch.jsonl`: as 11 páginas `/watch` lidas pelo `../yt_meta.py`, um pedido por vez;
- `osm_baixar.py` (Overpass, um pedido por vez, User-Agent do canal), `rota_osm.py` (o grafo e o Dijkstra), `rota-osm-saida.txt` e as duas rotas em
  GeoJSON (`rota-rio-gallegos-ushuaia-osm-principais.geojson` e `-todas.geojson`); `rota_depurar.py`, `rota_depurar2.py` e `osm_furo.py` acharam um
  furo (a 1ª caixa cortava a RN3 em Tolhuin; refeita com leste em -66,90);
- `area_ilha.py` e `area-ilha-saida.txt` (a área por país; roda com `python -P -X utf8 -B`, porque lê a `shapely`);
- `pdf_texto.py` e `fontes/` (o texto dos 5 PDFs lidos, com o sha256 no topo de cada `.txt`);
- `commons.py`, `commons2.py` e as saídas (o Commons, pela API, um pedido por vez, User-Agent do canal).

Ficaram em `midia/_pautas/video-8/cetico-terra-do-fogo/`, fora do git: os 5 PDFs (o tratado de 1881, os 2 da Memoria Chilena, o censo do IPIEC e o
tratado de 1984) e os dados crus do OSM (`osm/`, ~10 MB). Recusaram, sem contorno: a DIFROL (Chile; Cloudflare, 403). O site da TABSA é um
aplicativo em JavaScript, sem texto para ler (NÃO CONFERIDO).

## 1. Os fatos

| # | Fato | Fonte (lida em 18/11/2026) | Veredito |
|---|---|---|---|
| F1 | **O tratado de 1881** (assinado em Buenos Aires em 23/07/1881, com a mediação dos ministros dos EUA): no continente, ao norte do estreito, a linha vai de Punta Dúngeness a Monte Dinero e Monte Aymond, e daí ao paralelo 52 (art. 2). Na ilha, "una línea que, partiendo del punto denominado Cabo del Espíritu Santo […] coincidiendo con el meridiano occidental de Greenwich, sesenta y ocho grados treinta y cuatro minutos hasta tocar en el canal Beagle"; o lado ocidental fica com o Chile, e o oriental com a Argentina, e as ilhas ao sul do Beagle até o Cabo de Hornos ficam com o Chile (art. 3). "El Estrecho de Magallanes queda neutralizado a perpetuidad" (art. 5). | Lei argentina 1116 (11/10/1881), PDF do CONICET: https://www.conicet.gov.ar/wp-content/uploads/Ley-N%C2%BA-1116-Tratado.pdf (`fontes/ley1116-tratado-1881.txt`) | **CONFERE.** O protocolo agradece aos "Ministros de los Estados Unidos" (Thomas A. Osborn): um gancho americano para o ato 2. |
| F2 | **A linha não está no 68°34′.** O meridiano do texto veio das cartas do Almirantado de FitzRoy, que punham o cabo em 68°34′; os levantamentos depois mostraram o cabo "un poco al occidente de aquel meridiano". Seguir a longitude teria deslocado a linha para leste e aumentado o lado chileno; o perito chileno seguiu o cabo, e o protocolo de 1893 (art. 4) mandou começar no cabo, na colina do meio, "en la dirección del meridiano". | Memorial de Diego Barros Arana (1895), na compilação da Memoria Chilena, Biblioteca Nacional do Chile: https://www.memoriachilena.gob.cl/archivos2/pdfs/MC0007617.pdf, pp. 7–8 e 60 (`fontes/MC0007617.txt`). Um livro da mesma coleção dá a linha em "68°36′": https://www.memoriachilena.gob.cl/archivos2/pdfs/MC0018362.pdf, p. 4 | **CONFERE** (a fonte é a versão chilena; a argentina não foi lida). **A medida nossa** (§4): os 30 marcos "I-" no OSM ficam a **2,6–2,7 km a oeste** do 68°34′. A faixa entre o texto e o terreno tem ~670 km² (~260 mi²): uma conta nossa, aproximada. |
| F3 | **O tratado de 1984** (Paz e Amizade, assinado no Vaticano em 29/11/1984, com o agradecimento a João Paulo II): na boca oriental do estreito, a fronteira é a reta entre o marco de Dungeness e o "Marker I on Cabo del Espiritu Santo" (art. 10); a Argentina garante a navegação de todas as bandeiras "through its jurisdictional waters to and from the Strait of Magellan". **O navio argentino que vai do estreito a Ushuaia pelos canais chilenos leva piloto chileno** até o meridiano **68°36′38,5″ W**, no Beagle (anexo 2, arts. 1 e 2). | ONU, DOALOS (Delimitation Treaties Infobase): https://www.un.org/depts/los/LEGISLATIONANDTREATIES/PDFFILES/TREATIES/CHL-ARG1984PF.PDF (`fontes/tratado-1984-un.txt`) | **CONFERE.** O 68°36′38,5″ que o gerador deixou "a confirmar" está no tratado, e o art. 10 é a cláusula que o caso Danstar põe à prova hoje (§2). O OSM põe os marcos em ~68°36′22″ (WGS84); a diferença de ~16″ (~300 m) deve ser de datum: **não medido**. |
| F4 | **O Beagle quase virou guerra:** a disputa "had escalated to the brink of armed conflict in 1978"; o tratado de 29/11/1984 foi mediado pela Santa Sé, com João Paulo II. | Vatican News, 25/11/2024: https://www.vaticannews.va/en/pope/news/2024-11/pope-dialogue-prevented-war-between-chile-and-argentina.print.html | **CONFERE.** O laudo de 1977, a Operação Soberania (22/12/1978) e o plebiscito argentino de 1984 ficaram **NÃO CONFERIDOS** na origem (não buscados). |
| F5 | **Por terra, é preciso entrar no Chile:** desde o sul de Santa Cruz, "es necesario ingresar a Chile para cruzar en transbordador el estrecho de Magallanes", pela Primeira ou pela Segunda Angostura, e reentrar pelo paso San Sebastián; **Río Gallegos–Ushuaia, 593 km**. Os dois passos: Integración Austral (Río Gallegos–Punta Arenas) e San Sebastián (San Sebastián–Porvenir), das 08h às 22h. | Governo argentino: https://www.argentina.gob.ar/tierradelfuego/llegar; https://www.argentina.gob.ar/interior/centros-de-frontera/integracion-austral; https://www.argentina.gob.ar/interior/centros-de-frontera/san-sebastian | **CONFERE.** **"Quatro aduanas" NÃO CONFERE como está:** as páginas não dizem se o controle é integrado. No OSM, Integración Austral é um complexo só (do lado chileno da linha) e San Sebastián são dois, a ~13 km um do outro. A frase segura é "**two border crossings**". |
| F6 | **A balsa:** a linha da balsa de Punta Delgada no OSM mede **4,69 km**, com o operador "Austral Broom" e a duração de 20 min (etiquetas do OSM). Operam ali a TABSA e a Naviera Tierra del Fuego, ambas chilenas. Em 2019, foram 8.343 travessias, com 211.096 veículos e 784.863 pessoas, segundo a Capitanía de Punta Delgada. | OSM (via 49793837, `rota-osm-saida.txt`); a Capitanía citada pelo MundoMarítimo, 05/02/2020: https://mundomaritimo.cl/noticias/region-de-magallanes-chile-cerca-de-785-mil-personas-y-211-mil-vehiculos-usaron-cruce-maritimo-de-primera-angostura-en-2019 | **CONFERE** a medida do OSM. Os números de 2019 **CONFEREM só na imprensa**: o boletim da Capitanía não foi lido. Os 20 min e os horários da TABSA ficaram **NÃO CONFERIDOS** (o site é um aplicativo sem texto). "4,5 km" vira "**under 3 miles**". |
| F7 | **A província que inclui as Malvinas no papel:** a Lei 23.775 (26/04/1990) fez província o "Territorio Nacional de la Tierra del Fuego, Antártida e Islas del Atlántico Sur". O parágrafo da Lei 26.552 (B.O. 11/12/2009) diz que ela compreende a parte oriental da Isla Grande, a ilha dos Estados, "las islas Malvinas", as Geórgias do Sul, as Sandwich do Sul e a Antártida entre 25° e 74° W. | Governo argentino, normativa: https://www.argentina.gob.ar/normativa/nacional/norma-176/actualizacion | **CONFERE.** Na tela, só o fato da lei, sem lado. |
| F8 | **A gente da ilha:** o censo de 2022 (resultados definitivos) dá à província **185.732** pessoas: Río Grande 99.241, Ushuaia 80.371, Tolhuin 6.039 e Antártida e Ilhas, 81. O lado chileno (Porvenir 6.809, Primavera 431, Timaukel 157, censo de 2024) soma **7.397**. | IPIEC, o instituto de estatística da província: https://ipiec.tierradelfuego.gob.ar/wp-content/uploads/2024/01/CNPHyV-Censo-Nacional-de-Poblacion-Hogares-y-Viviendas-Tierra-del-Fuego.pdf, p. 6 (`fontes/ipiec-censo2022-tdf.txt`); o Chile, pela tabela da BioBioChile (04/04/2025) que cita o INE | **CONFERE** o lado argentino. **Os 190.641 do gerador são o número provisório**; o definitivo é 185.732. O lado chileno ficou **NÃO CONFERIDO** na origem (o INE não foi lido). As comunas chilenas incluem algumas ilhas menores, e a soma é aproximada. |
| F9 | **A maior ilha da América do Sul e a divisão da terra:** a medida nossa (Natural Earth 10m) dá à Isla Grande **46.905 km² (18.110 mi²)**: **Chile 56,4 %, Argentina 43,6 %**. | Medida nossa (§4), `area-ilha-saida.txt` | **CONFERE** como medida (a costa de 1:10M erra alguns por cento; a cifra que circula é ~48 mil km²). Marajó (~40 mil km²) não foi lida na origem: "largest" fica **CONFERE com ressalva**. **"Seis de cada diez"** para o Chile, dos curtos em espanhol, **exagera**: são ~56 %. **"Most divided" não tem fato**: é opinião, e há pelo menos outra ilha partilhada no continente (Martín García e Timoteo Domínguez, no Prata, entre a Argentina e o Uruguai, pelo título de um curto de 12/10/2026; **NÃO CONFERIDO**). |
| F10 | **Ushuaia e Puerto Williams:** desde 2019 o INE do Chile conta Puerto Williams como cidade, e ela "desplaza" Ushuaia como a mais austral. | BioBioChile, 30/05/2019 (lida pelo gerador) | **CONFERE na imprensa.** Na fala: "**Argentina's southernmost city**", nunca "the world's". |
| F11 | **O Hito 1, em 2024:** o posto de vigilância que a Marinha argentina inaugurou em abril de 2024 junto ao Cabo Espíritu Santo, no começo da reta, ficou com painéis solares ~3 m do lado chileno; o Chile protestou, e a Argentina admitiu o erro e os retirou em junho de 2024. | Imprensa (Meganoticias, 17/06/2024; CNN Chile, 17/06/2024; resumo da busca) | **NÃO CONFERIDO** na origem (o comunicado oficial não foi achado). Fato bom para o ato 3, fora da janela da onda. |

**O paradoxo, na frase verdadeira:**
- "pass four border posts" sai: o certo é "**cross two borders**" (F5);
- "a Chilean ferry on a Chilean strait" fica: as duas empresas são chilenas, e o estreito é do Chile pelos tratados de 1881 e 1984 (F1, F3, F6);
- "135 miles in Chile" vira "**about 140 miles**" (139,1 pela rota principal; 120,8 pelos atalhos de cascalho) (§4);
- "the line is perfectly straight" fica (é um meridiano, F1), e ganha o detalhe que ninguém contou: **ela não está onde o tratado diz**, ~2,7 km a oeste (F2);
- "Most Divided" sai do título (F9).

## 2. A onda e a colisão

vidIQ: 1 `vidiq_keyword_research` e 5 `vidiq_youtube_search`, **30 créditos** (5 por chamada). O saldo foi de 4.936 a 4.866: a diferença de 70 inclui o
cético de Kiribati, que rodou em paralelo. As views abaixo são as do vidIQ, e as linhas com `/watch` foram conferidas nas páginas públicas às ~03:12.

### A régua 1: o viral de 100 mil ou mais sobre o ângulo, nos últimos 2 meses (desde 18/09/2026). **Derruba.**

| Título | Canal (inscritos) | Views | Data | Duração |
|---|---|---|---|---|
| Argentina está partida en dos: para ir a Ushuaia toca cruzar Chile (`/watch`) | Planeta Wow (11,9 mil) | **866.221** | 03/11/2026 | 2:39 |
| ¿Por qué la Patagonia es argentina y no chilena? (`/watch`; o tratado de 1881) | Más Allá del Mapa (12,2 mil) | 365.251 | 23/10/2026 | 1:22 |
| A horas de la guerra por tres islas casi vacías: Chile vs Argentina (`/watch`; o Beagle) | Ñerd (29 mil) | 285.881 | 01/11/2026 | 2:38 |
| ¿Por qué esta isla está partida con una raya recta? Tierra del Fuego (`/watch`) | La Vuelta al Mapa (5,35 mil) | 173.586 | 11/10/2026 | 0:50 |
| ¿Cómo se dividió la Patagonia entre Argentina y Chile? | GeoBitácoras (8,9 mil) | 166.389 | 18/10/2026 | 2:46 |
| ¿Cuál es la ciudad más austral del mundo? Depende de UNA palabra (Ushuaia) | Más Allá del Mapa (12,2 mil) | 103.860 | 11/10/2026 | 1:34 |
| De Argentina a Argentina… pasando por Chile (`/watch`) | Ojo al Mapa (13,3 mil) | 91.667 | 03/11/2026 | 1:20 |
| ¿Por qué hay que pasar por Chile para ir de Santa Cruz a Ushuaia? (`/watch`) | Mapas que Cuentan (408) | 90.159 | 15/10/2026 | 0:49 |

E mais seis curtos do mesmo ângulo, entre 5 mil e 49 mil, de 18/10 a 13/11. Um deles, "El estrecho que volvió a Enfrentar a CHILE y ARGENTINA" (GLOBOTRAMA,
49 mil, 13/11), já traz o nosso contraste da terra e da gente: "Chile tiene 6 de cada 10 partes de la isla… pero del lado argentino vive casi t[odo]".

**Em inglês, a cópia começou** (curtos; a régua chama de ruído os de menos de 2 mil, mas eles mostram o enxame chegando):
- "Why Is Argentina Cut in Two?" (Map Secrets, 376 inscritos, 15/11, 2.437);
- "You Can't Drive to the End of Argentina" (Geo NovaTales, 14/10, 1.231);
- "Why Is This Island Split by a Straight Line?" (WhyDisBorder, 17/11, 21);
- "Why Does Argentina Own This Island?" (Decodx, 12/11, 22.787, `/watch`; título em inglês e descrição em hindi, sobre o Beagle).

O ritmo é o do enxame: o viral espanhol saiu em 03/11, e as primeiras cópias em inglês, em 15/11 e 17/11.

### A régua 2: a notícia quente sobre o ângulo. **Derruba.**

- **Agosto e setembro de 2026, a polêmica do estreito:** um chefe militar argentino falou do estreito num podcast, e a Marinha argentina publicou um
  vídeo do destróier ARA *Almirante Brown* em águas chilenas. O chanceler chileno respondeu que a soberania sobre todo o estreito "se funda en los
  tratados de 1881 y 1984", e a chancelaria argentina ratificou os tratados. Houve bilateral Kast–Milei, e a esquadra chilena se mostrou no estreito
  (imprensa, 24/08 a 11/09: 24horas, Emol, The Clinic, Perfil).
- **Outubro e novembro de 2026, o Danstar:** um cargueiro chileno vai reabrir a rota Punta Arenas–Malvinas. A Argentina "evaluaría interceptar" o
  navio (Meganoticias, 28/10), e a província argentina da Terra do Fogo estuda uma lei para barrá-lo (Bio Bio, 03/11, `/watch`). No debate chileno,
  propôs-se, "por reciprocidad", impedir os caminhões da Terra do Fogo de cruzar o estreito (La Libertad, 24/10, `/watch`). O navio chegou a Punta
  Arenas em 15/11 e sai em dezembro (Meganoticias, 16/11; Perfil: 17/12).
- **Os longos com público nas últimas 8 semanas, em espanhol, sobre Chile × Argentina e o estreito** (a régua 3 também se cumpre, no ângulo vizinho):
  Bio Bio, 134 mil (11/11); SaitoWord, 143 mil (14/11); Infobae, 125 mil (29/10); Archivo Vivo, "Cómo Chile perdió la Patagonia… El Tratado de
  1881", **132 mil, 33:30** (02/10); Resurge, 78 mil (17/10).

O nosso ângulo é o corredor que virou moeda nessa briga, e o art. 10 do tratado de 1984 (F3) é a cláusula em jogo. Se o vídeo sair em dezembro, sai
no pico do Danstar, com as Malvinas no meio.

### A colisão de título (12 meses)

- "Inside South America's Largest (And Most Divided) Island": **nenhum título igual ou quase igual** nas buscas em inglês de 12 meses.
- **"…Split/Divided by a Straight Line" colide:** "Why This Island Is Divided by a Straight Line" (Geo Map Tale, 22/10/2026, 216 mil, sobre Sebatik, pelo
  `ilha-pais.md`) e "Why Is This Island Split by a Straight Line?" (17/11).
- **"Why Is Argentina Cut in Two?"** (15/11) e a tradução literal do viral ("…to Reach Ushuaia You Have to Cross Chile") são quase iguais ao gancho.

### Os 5 mais próximos

| # | Título | Canal (inscritos) | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|
| 1 | Argentina está partida en dos: para ir a Ushuaia toca cruzar Chile | Planeta Wow (11,9 mil) | 866.221 | 03/11/2026 | 2:39 | **sim, no ângulo** (onda; espanhol) |
| 2 | ¿Por qué esta isla está partida con una raya recta? | La Vuelta al Mapa (5,35 mil) | 173.586 | 11/10/2026 | 0:50 | **sim, no ângulo** (onda; espanhol) |
| 3 | Why Is Argentina Cut in Two? | Map Secrets (376) | 2.437 | 15/11/2026 | 0:58 | no ângulo, em inglês (a cópia; pequeno) |
| 4 | Cómo Chile perdió la Patagonia mientras ganaba la guerra \| El Tratado de 1881 | Archivo Vivo (15,9 mil) | 132.113 | 02/10/2026 | 33:30 | o ato 2, em longo (espanhol) |
| 5 | Por Qué de CHILE a PUNTA ARENAS por Tierra Hay que Pasar por ARGENTINA (`/watch`) | Geografía Prohibida (1,06 mil) | 19.758 | 03/11/2026 | 20:40 | o espelho do nosso ângulo, em longo |

**Os antigos grandes** (não derrubam, pela régua nova): "¿Por qué Tierra del Fuego está dividida entre Argentina y Chile?" (Chris Torres, 06/06/2025,
10 mi, curto); "Why Tierra del Fuego Is Split in Two?" (Geo Bytes, 09/08/2025, 252 mil, curto, em inglês); "Kenapa Ujung Selatan Argentina (Tierra del
Fuego) Terbagi Dua dengan Chile?" (Mapsia, 09/07/2026, 729 mil, em indonésio); "¿Por qué el Estrecho de Magallanes es chileno?" (WroKeN, 29/08/2026,
1,36 mi, fora dos 2 meses por 3 semanas).

**O que o gerador não viu:** o `ilha-pais.md` diz "em inglês, nada em 8 semanas". Para o longo em inglês, vale. Mas a onda está em espanhol, e a busca
dele não a pegou.

## 3. O potencial real

| Régua | Leitura |
|---|---|
| (1) o nome é buscado | **Sim.** "tierra del fuego": ~11,3 mil por mês, concorrência 30 (Big Sur: 13,3 mil e 40); "ushuaia": ~34,9 mil, +58 %. O vidIQ não deu os países do primeiro; boa parte deve ser em espanhol. |
| (2) prova recente de interesse | **Sim, demais:** é a onda (§2). |
| (3) o longo bem feito ainda não existe | **Em inglês, não existe.** Em espanhol, há o tratado de 1881 em longo (132 mil, 02/10) e o espelho chileno (20 mil, 03/11). |
| (4) o paradoxo em 3 frases, visível no mapa | **Sim:** a estrada que sai do país para chegar ao país; a ilha cortada por uma reta; o Chile com a maior parte da terra e a Argentina com quase toda a gente. |
| (5) a geografia explica | **Sim:** o estreito é a única passagem, e o tratado de 1881 trocou a Patagônia pelo estreito; o cabo mal posto nas cartas moveu a linha. |
| (6) a medida nossa | **Sim** (§4): os 139 de 366 mi no Chile, os 56 % da terra com ~4 % da gente, a reta 2,7 km a oeste do texto. |

**O enxame:** do viral espanhol (03/11) às cópias em inglês (15/11 e 17/11), 12 a 14 dias. Quando o nosso vídeo saísse (dezembro), o inglês já teria
o seu lote de curtos, e a notícia estaria no pico.

**Os 13 a 16 min** se sustentam, em 3 atos, sem encher:
1. **A estrada:** 366 mi de Río Gallegos a Ushuaia, 139 no Chile, duas fronteiras, a balsa de menos de 3 mi que o vento fecha, e o navio argentino
   que precisa de piloto chileno para chegar a Ushuaia por mar (F3, F5, F6).
2. **O porquê:** 1881, com os ministros americanos na mesa; a Patagônia contra o estreito; a reta, o cabo e o erro da carta de FitzRoy (F1, F2); o
   Beagle, o laudo de 1977, 1978 e o papa (F4, F3).
3. **Hoje:** o Chile com 56 % da ilha e ~4 % da gente; Ushuaia contra Puerto Williams; a província que inclui as Malvinas no papel; os painéis do
   Hito 1 (2024); o estreito de 2026 (F7 a F11).

## 4. A medida nossa (feita)

**A rota, sem o servidor de demonstração do OSRM.** O `rota_osm.py` monta o grafo das vias do OpenStreetMap (baixadas pelo Overpass, um pedido por vez)
e roda um Dijkstra próprio de menor distância, do centro de Río Gallegos ao de Ushuaia. Depois corta o caminho na fronteira do próprio OSM
(admin_level=2): na ilha, o lado da reta; no continente, o lado da linha Dungeness–Monte Aymond; a balsa conta como Chile.
- **Pela rota principal** (só trunk, primary e secondary, salvo nas ruas das duas cidades), que passa pela RN3, pela Ruta 255 CH, pela balsa de Punta
  Delgada, pela Ruta 257 CH e pela RN3 de novo: **588,7 km = 365,8 mi**. No Chile ficam **223,8 km = 139,1 mi (38,0 %)**, do km 67,2 (Monte Aymond) ao
  km 291,0 (San Sebastián). Na Argentina ficam 67,2 km antes e 297,7 km depois. A balsa tem 4,69 km.
- **Pelos atalhos de cascalho** (as Y-5xx e Y-7xx chilenas): 559,2 km, com **194,4 km (120,8 mi) no Chile**.
- **Bate com o resto:** o governo argentino dá 593 km (F5), o OSRM do gerador dava 589 km, e com as aduanas como ponto de corte o OSRM dava 217 km no
  Chile (135 mi). A diferença de ~7 km é o ponto de corte: a linha de fronteira, aqui; os postos, lá.
- **A licença:** a conta é nossa, sobre dados do OSM: na tela e na descrição vai "© OpenStreetMap contributors". O uso não comercial do OSRM de
  demonstração deixa de importar.

**A reta da ilha** (os marcos do OSM): do Hito I-I, no Cabo Espíritu Santo (52,659° S), ao Hito I-XXVI, no Beagle (54,893° S), são **248,4 km = 154,3 mi**.
Os 30 marcos "I-" ficam entre 68,5955° e 68,6093° W (média ~68°36′22″). Isso dá **2,6 a 2,7 km a oeste do 68°34′** do tratado de 1881. O tratado de
1984 dá 68°36′38,5″ no Beagle (F3).

**A terra e a gente** (`area_ilha.py`, Natural Earth 10m, projeção equivalente):
- a Isla Grande tem 46.905 km² (18.110 mi²): o Chile tem **56,4 %** (26.443 km²) e a Argentina, **43,6 %** (20.462 km²);
- a gente: ~185.650 no lado argentino (o censo de 2022, sem os 81 da Antártida) e ~7.400 no chileno (o censo de 2024, pela imprensa);
- **o Chile tem 56 % da ilha e ~4 % dos moradores**: um em cada ~25 ilhéus mora do lado chileno.

## 5. O material

- **Mapa com geometria real:** sim. A fronteira e os 30 marcos do OSM, a rota em GeoJSON (já gravada), o Natural Earth (a ilha e as províncias) e o
  relevo pela MapTiler.
- **Satélite aberto:** a ilha inteira cabe em poucas cenas Landsat ou Sentinel-2. A busca no Commons por "Tierra del Fuego Landsat" achou uma imagem
  de satélite da região ("A Gateway to Antarctica.jpg"), com a origem e a licença a conferir.
- **Commons** (pela API):
  - o estreito, com 207 arquivos e subcategorias de Punta Dungeness, Cerro Sombrero, o farol de Punta Delgada e Bahía Lomas;
  - Ushuaia, 433; o Beagle, 682; Puerto Williams, 192;
  - o conflito do Beagle: 9 arquivos e 5 subcategorias, inclusive os mapas do laudo de 1977 em SVG;
  - as categorias "Argentina-Chile border" e "Argentina-Chile border crossings".
  - **Faltam** uma categoria da balsa da Primeira Angostura e uma do paso San Sebastián: a balsa e a aduana em vídeo dependem da caça nos bancos pagos.
- **Documentos de domínio público:**
  - o tratado de 1881 e o memorial de 1895, com o protocolo de 1893 (Memoria Chilena);
  - as cartas do Almirantado de FitzRoy (a subcategoria "Maps of the Strait of Magellan", a conferir uma a uma);
  - o tratado de 1984 (ONU).
- **Dá para 13 a 16 min:** o mapa carrega metade do vídeo, e o resto tem acervo bastante.

## 6. O título e o gancho que eu defenderia (em 2027)

- **Título:** "**Why Argentina's Road to Ushuaia Runs Through Chile**" (50 caracteres; "Ushuaia" tem ~34,9 mil buscas por mês). É o contraste concreto
  que estoura em canal pequeno. **Hoje ele é a tradução do viral de 866 mil**: por isso só depois da onda.
- **Alternativas:**
  - "**Tierra del Fuego: Chile Has the Land, Argentina Has the People**" (63): a medida nossa no título;
  - "**Inside Tierra del Fuego, South America's Largest Island**" (55): o molde do Geoff, sem o "Most Divided", que não tem fato, e sem o "Straight
    Line", que colide.
- **O gancho** (45 palavras): "Ushuaia is Argentina's southernmost city. Yet to drive there from the rest of Argentina, you leave the country, cover 140 miles
  of Chile and board a Chilean ferry. And Chile owns most of that island, but only one islander in 25 lives on its side."
- **A miniatura:**
  - o relevo amarelo da Patagônia austral e da ilha, e o mar azul;
  - **em vermelho**, a rota de Río Gallegos a Ushuaia, grossa no trecho chileno; a reta da fronteira na ilha, em branco;
  - **em ciano**, a balsa na Primeira Angostura;
  - uma seta branca grossa no trecho chileno, e a caixa preta "**THROUGH CHILE**".

## 7. Os pontos

- **K1 — GRAVE. A onda do momento, no gancho exato.** O viral de 866 mil (03/11) diz em espanhol o nosso gancho. Em volta, 174 mil, 92 mil e 90 mil
  no mesmo ângulo, e 365 mil e 286 mil no ato 2 (1881 e o Beagle), todos nos últimos 2 meses. A cópia em inglês começou em 15/11. Pela régua nova, isso
  derruba sozinho.
- **K2 — GRAVE. A notícia quente, no corredor e nas Malvinas.** Desde agosto, Chile e Argentina brigam pelo estreito. A crise do Danstar (outubro e
  novembro) está em curso, e o pico deve vir em dezembro, quando o navio zarpar e o vídeo sairia. O debate chileno já falou em barrar os caminhões que
  cruzam o estreito. O vídeo pareceria tirado da notícia, e com as Malvinas (F7) atrairia briga nos comentários.
- **K3 — MÉDIO. O gerador não viu a onda em espanhol.** "Em inglês, nada em 8 semanas" vale para o longo, e o assunto é sul-americano: a varredura
  tem de incluir o espanhol (e o português) quando o lugar é da América Latina.
- **K4 — MÉDIO. Números a corrigir no `ilha-pais.md`:**
  - "quatro aduanas" → "two border crossings" (F5);
  - "190.641" (provisório) → 185.732 (definitivo, F8);
  - "4,5 km" → a balsa tem 4,69 km no OSM, "under 3 miles" (F6);
  - "135 de 366 mi" → 139 de 366 pela rota principal (§4);
  - e, se vier dos curtos, "seis em dez" → 56 % (F9).
- **K5 — LEVE. "Most Divided" não se sustenta** como fato (F9). O "Inside" é o formato mais fraco do próprio Geoff (`ilha-pais.md`, achado 2).
- **K6 — LEVE. Títulos a evitar:** "Split/Divided by a Straight Line" colide em 12 meses (Sebatik, 216 mil), e "Cut in Two" está nos curtos de agora.
- **K7 — LEVE. O material da balsa e da aduana** não está no Commons: vai pela caça (e a caça não roda com render 4K no PC).
- **K8 — LEVE. A linha "a mais austral":** "the world's southernmost city" é disputado desde 2019, quando o INE do Chile passou a contar Puerto Williams
  como cidade (F10). Na fala, "Argentina's southernmost city".

**Para voltar à pauta:** testar de novo em **março ou abril de 2027**, com as três réguas. A onda de curtos em espanhol tem de ter esfriado, a do inglês
não pode ter um viral de 100 mil, e o Danstar e o estreito têm de ter saído da notícia. Se passar, a pauta volta perto de 6,0: o campo do longo em
inglês está vazio, a busca é boa, a medida é nossa e os fatos de fundo já conferem na origem.
