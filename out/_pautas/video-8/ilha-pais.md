# Vídeo 8: ilha ou país no molde "Inside [Region]'s Most [adjetivo] Island/Country" (18/11/2026)

Subagente da Sala. O pedido está em `out/_pautas/video-8/pedido-ilha-pais.md`; as regras vêm do `pedido-estrutural.md` e a régua do
`pedido-estrutural-r3.md`. **Sem vidIQ (0 crédito)**, sem navegador, sem commit. Tudo lido em 18/11/2026, entre ~02h20 e ~03h10.

O que o Lucas mandou: os três prints do Geoff ("Inside Europe's Most Complicated Island", "Inside Earth's Most Complicated Ocean Crossing",
"Inside America's Most Complicated Coastline") e **"Talvez algo sobre alguma ilha ou país"**.

## O resumo

| # | Pauta | Título no formato | Nota | Onda (desde 23/09/2026) |
|---|---|---|---|---|
| 1 | **Kiribati** | Inside the Pacific's Most Spread-Out Country (44) | **6,0** | limpa: 3 curtos de 106 a 1.189 views |
| 2 | **A Terra do Fogo** | Inside South America's Largest (And Most Divided) Island (56) | **5,5** | limpa em inglês; um longo em espanhol de 313 mil (26/08, fora da janela) |
| 3 | **Nauru** | Inside the World's Smallest Island Nation (41) | **5,5** | limpa: um curto de 1,5 mil e um longo de 14 views |
| 4 | **Timor-Leste** | Inside Asia's Youngest Country (30) | **5,0** | limpa: um curto de 25 views |
| 5 | A Gâmbia | Inside Africa's Smallest Mainland Country (41) | 4,5 | limpa; **mas a eleição presidencial é em 05/12/2026** |
| 6 | A Guiné Equatorial | Inside Africa's Only Spanish-Speaking Country (45) | 4,5 | limpa em inglês; a capital mudou em 01/2026 (notícia de 10 meses) |
| 7 | Chipre | Inside the Mediterranean's Most Divided Island (46) | 4,0 | fora da janela, mas muito coberto em 2026 (um curto de 5,0 mi em 28/06) |
| 8 | Andorra | Inside Europe's Highest Country (31) | 4,0 | limpa em vídeo; **o acordo com a UE foi assinado em 19/10/2026** |

Escala: as que ficaram de pé nos céticos tiveram 5,5 a 6,0; "na dúvida, derrube".

## Os três achados que mudam a leitura

**1. A família "fronteira e país esquisito" é a onda de agora.** Três canais de curtos varrem essa família em outubro e novembro de 2026,
um assunto por dia, com tiros de 100 mil a 2 milhões (lista em `_trabalho/ilha-pais/enxame-curtos.txt`):
- **Stalemate State** (4,6 mil inscritos): Jordânia 2,27 mi (26/10), a ponte de Kazungula 1,06 mi (23/10), Angola em dois 17 mil (27/10), o dedo da Namíbia 7,6 mil (24/10), Guantánamo;
- **Ghost Countries** (82 mil): Nova Guiné 630 mil (01/11), "Two Congos" 114 mil (14/11), Curilas 744 mil (25/04), Malvinas 573 mil, Gibraltar 124 mil;
- **GeoGlobeTales** (2,1 mi): São Martinho 1,6 mi (28/09), Chipre 5,0 mi (28/06), Gibraltar 6,7 mi (04/06), o Chile 35 mi (19/03).

**7 dos 25 caíram por um curto viral dessas últimas 8 semanas.** Os quatro do topo passaram nas listas desses três canais e na busca: nenhum curto deles.

**2. O formato "Inside" é o mais fraco do Geoff.** O relatório do canal dele (`out/_analises/geography-by-geoff/relatorio.md`, §6) mostra:
- "Inside" teve mediana de 515 mil e nenhum estouro;
- "Inside" sobre ilha teve 336 mil;
- os estouros dele têm o concreto ("Zero Resources", "Frozen Ocean", "Nobody"), não o superlativo vago.

Por isso cada pauta abaixo traz, entre as variantes, um título concreto no molde de contraste que estourou em canal pequeno nas 3 rodadas.

**3. "Most Complicated" é a assinatura do Geoff, e ele a usou 4 vezes em 12 meses:** Bornéu (14/05), a Irlanda (10/09), a Drake (17/09) e o mar de
Bering (12/11). "Inside [lugar]'s Most Complicated Island" fica quase igual ao dele. Os títulos abaixo usam outro adjetivo, verdadeiro.

## O método

- **A onda**: a busca da web (`allowed_domains: youtube.com`) achou os títulos; a página `/watch` deu a data, as views e o canal (`_trabalho/yt_meta.py`, um pedido por vez, 1,5 s; ~245 páginas).
  - Também li a aba `/videos` do Geoff e as abas `/shorts` dos três canais de curtos, uma página cada (o robots.txt do YouTube permite; `/feeds/` e `/youtubei/` não).
  - Scripts: `_trabalho/ilha-pais/yt_canal.py` e `yt_shorts.py`. As respostas cruas estão em `_trabalho/ilha-pais/onda/*.jsonl`.
- **O Geoff nos últimos 12 meses**:
  - `canal.json`: maio a outubro de 2026;
  - a página do canal: agosto a 18/11/2026;
  - as descrições de 13 vídeos, para saber o lugar de cada um.
  - Fora: Bornéu, Haiti, Irlanda, Svalbard, Faroé, Bermudas, Caimã, Liechtenstein, Colômbia, Somalilândia, as Chagos (10/11), as San Juan e a Pig War (17/11), Terra Nova e Labrador (16/07), o mar de Bering (12/11).
  - **Novembro de 2025 a abril de 2026 não foi varrido inteiro**: a busca da web não achou vídeo dele sobre os 8 lugares.
- **As medidas**: Nominatim (OSM) e OSRM de demonstração, um pedido por vez, com o User-Agent do canal; altitudes do SRTM 30 m pela API pública do OpenTopoData. As saídas estão em `_trabalho/ilha-pais/medidas-saida.txt`, `andorra-relevo-saida.txt` e `nauru-relevo-saida.txt`.
  - **Um erro meu:** o contorno de Nauru veio do Nominatim com o mar territorial, e o script pediu ~217 lotes de altitude antes de eu pará-lo. Fica dentro do limite público de 1.000 por dia, e foi desperdício. Refiz só na caixa da ilha.
- **Recusaram** (403 ou verificação de robô) e ficaram NÃO CONFERIDO, sem contorno:
  - timeanddate, Anglican News, Monash, SPREP e UNFICYP;
  - a PCA, o press.un.org, o resumo em PDF da CIJ e Refworld;
  - o DFAT, por tempo esgotado.
  - O scan de 1889 da Oregon Digital deu erro de certificado. Britannica não foi tentada (recusa robô).
  - O CIA World Factbook acabou: a página arquivada é a despedida.

---

## 1. Kiribati: nota 6,0

- **Título:** "Inside the Pacific's Most Spread-Out Country" (44).
  - Variantes: "The Country Wider Than America With the Land of New York City" (61), no molde do contraste, e "Why This Country Moved the International Date Line" (50).
  - O superlativo é defensável pela nossa medida: de Banaba a Caroline são 4.565 km. A Micronésia (FSM) tem ~2.835 km e as Marshall ~1.280 km (coordenadas aproximadas, a refazer pelo OSM).
- **O chamariz:** um país com a terra de Nova York espalhada num oceano mais largo que os Estados Unidos, que dobrou a linha da data para não viver em dois dias.
- **O gancho** (38 palavras): "Kiribati has about as much land as New York City. Yet its islands stretch wider than the continental United States. And until 1995, its capital and its largest island were not even living on the same day."
- **Os fatos** (lidos em 18/11/2026):
  1. A mudança de data: "Phoenix Islands, Kiribati changed its time zone UTC-11:00 to UTC+13:00" e "Line Islands (Kiritimati), Kiribati changed its time zone UTC-10:00 to UTC+14:00", em 31/12/1994; Tarawa ficou em UTC+12.
     - WorldTimeZone, https://mail.worldtimezone.com/international-date-line-1995-2011.html.
     - A página da timeanddate recusou (403): NÃO CONFERIDO.
  2. A China e Kanton:
     - Pequim "announced plans to rebuild a World War II U.S. military airstrip" em Kanton, e "The airstrip has not been built";
     - os EUA prometeram reformar o cais de Kanton;
     - "Kiribati switched ties from Taiwan to Beijing in 2019";
     - Kiritimati fica "1,340 miles south of Honolulu".
     - Reuters, via NBC News, 23/02/2024, https://www.nbcnews.com/news/world/chinese-police-are-working-in-kiribati-rcna140149.
  3. A terra em Fiji: Kiribati comprou 2.210 ha (Natoavatu Estate, Vanua Levu). O presidente Anote Tong chamou a compra de investimento.
     - RNZ, 04/08/2014, https://www.rnz.co.nz/international/pacific-news/251280/kiribati-president-says-fiji-land-investment-for-future.
     - A Anglican News recusou (403).
  4. Banaba:
     - a mineração de fosfato foi de 1900 a 1979, ~21 milhões de toneladas;
     - "The majority of the population was relocated to Rabi in December 1945";
     - em Rabi, os banabanos têm cidadania fijiana.
     - Brookings (Jane McAdam), 15/03/2013, https://www.brookings.edu/articles/relocation-across-borders-a-prescient-warning-in-the-pacific.
  5. A área de terra (811 km²), a ZEE (~3,4 a 3,5 mi km²) e as 33 ilhas: **a confirmar na origem** (NSO de Kiribati ou SPC). A Britannica recusa e o Factbook acabou.
- **A medida nossa** (feita; coordenadas do Nominatim e distância de círculo máximo; `medidas-saida.txt`):
  - de Banaba a Caroline são **4.565 km (2.836 mi)**. Os EUA contíguos, de West Quoddy Head a Cape Alava, têm 2.693 mi, e Nova York–Los Angeles, 2.445 mi;
  - a terra é **811 km² = 313 mi²**. A terra de Nova York tem ~300 mi² (o número da cidade está a confirmar no Census);
  - de Tarawa a Kiritimati são **2.041 mi**; de Kiritimati a Honolulu, 1.335 mi.
  - **A fazer:** a rota aérea real de Tarawa a Kiritimati, que, pelo que se diz, passa por Fiji (2.041 mi direto contra ~3.545 mi via Suva). A confirmar nos horários da Fiji Airways e da Air Kiribati.
- **Os atos (14 a 15 min):**
  1. O mapa impossível: 33 ilhas, a terra de Nova York num mar mais largo que os EUA. Tarawa e Kiritimati viviam em dias diferentes até 31/12/1994, e veio o "dente" da linha da data.
  2. Como um império juntou isso: as Gilbert britânicas, o guano das Line e das Phoenix e Kanton na 2ª Guerra. Os testes nucleares britânicos em Kiritimati (1957–58) ficam a confirmar. Banaba foi minerada até 1979, e os banabanos são hoje cidadãos de Fiji.
  3. Hoje: o mar que sobe e a terra comprada em Fiji (2014); a pista de Kanton que a China quer refazer, a 1.340 mi de Honolulu, e o cais que os EUA prometeram.
- **A miniatura** (molde do Geoff):
  - o Pacífico azul; as três ZEE de Kiribati pintadas de vermelho, e as ilhas em pontos brancos;
  - o contorno dos EUA contíguos em branco translúcido, na mesma escala, sobre elas;
  - a seta branca grossa de Tarawa a Kiritimati;
  - caixa amarela "WIDER THAN USA".
- **A onda:**
  - em 8 semanas: "This Country Lives in All 4 Hemispheres?" (Rulebreak Atlas, 09/09, 106 views); "Kiribati is the only country on Earth that lies in all four hemispheres" (Geo Earth Tales, 22/09, 1.189); "Kiribati moved the date line" (Geo Minute, 05/09, 146);
  - nenhum vídeo nas abas dos três canais de curtos;
  - um longo de 2026 de 171 views.
- **Os antigos grandes:**
  - "Kiribati: a drowning paradise in the South Pacific" (DW Documentary, 08/11/2017, 13,6 mi);
  - viagem: "Traveling to World's Remotest Country: KIRIBATI" (Travel with AK, 16/08/2025, 1,66 mi) e "I Visited the World's Most Remote Country: Kiribati" (Tsubasa Films, 24/08/2026, 429 mil).
  - A curiosidade está provada. Nosso ângulo (a largura e a data) não é o deles (o mar que sobe e a viagem).
- **Os riscos:**
  - "the only country in all four hemispheres" é falso ao pé da letra: França, EUA e Reino Unido também estão nos quatro, pelos territórios. A fala certa é "the only country whose islands straddle both the equator and the 180th meridian";
  - China e Taiwan (a troca de 2019 e a emenda constitucional discutida em 2026): fatos datados, sem lado;
  - o "país que afunda" é clichê saturado: fica no ato 3, nunca no gancho;
  - as imagens: NASA e ISS (Kiritimati), a Marinha dos EUA (Kanton na 2ª Guerra), Commons. As fotos do MOD britânico ficam a confirmar.

## 2. A Terra do Fogo: nota 5,5

- **Título:** "Inside South America's Largest (And Most Divided) Island" (56). É o molde do Geoff "Most Important (And Isolated)".
  - "Largest" é verdadeiro: a Isla Grande é a maior ilha da América do Sul (a área, ~48 mil km², a confirmar na origem).
  - Variantes: "Why Argentines Drive Through Chile to Reach Their Own Island" (60), no contraste, e "The Island Where Argentina Needs a Chilean Ferry" (48).
- **O chamariz:** para ir de carro da Argentina a Ushuaia, a "cidade do fim do mundo", o argentino roda 135 milhas no Chile, pega uma balsa chilena e passa por quatro aduanas.
- **O gancho** (40 palavras): "Ushuaia is Argentina's city at the end of the world. Yet to drive there from the rest of Argentina, you enter Chile, cross a Chilean strait on a Chilean ferry, and pass four border posts. And the line that forces it is perfectly straight."
- **Os fatos:**
  1. O tratado de 1881, art. 3:
     - "En la tierra del Fuego se trazará una línea que, partiendo del punto denominado Cabo del Espíritu Santo […] coincidiendo con el meridiano occidental de Greenwich, sesenta y ocho grados treinta y cuatro minutos hasta tocar en el canal Beagle. La Tierra del Fuego dividida de esta manera será Chilena en la parte Occidental y Argentina en la parte Oriental";
     - as ilhas ao sul do Beagle até o Cabo de Hornos ficam com o Chile;
     - o art. 5 diz: "El Estrecho de Magallanes queda neutralizado a perpetuidad";
     - assinado em 23/07/1881.
     - Lei argentina 1116, PDF do CONICET, https://www.conicet.gov.ar/wp-content/uploads/Ley-N%C2%BA-1116-Tratado.pdf. O texto foi extraído do PDF.
  2. O Beagle: a disputa "escalated to the brink of armed conflict in 1978"; o Tratado de Paz e Amizade é de 29/11/1984, com a mediação de João Paulo II.
     - Vatican News, 25/11/2024, https://www.vaticannews.va/en/pope/news/2024-11/pope-dialogue-prevented-war-between-chile-and-argentina.print.html.
  3. O paso San Sebastián "Conecta el paraje argentino de San Sebastián con la localidad chilena de Porvenir" e funciona das 08h às 22h.
     - Governo argentino, https://www.argentina.gob.ar/interior/centros-de-frontera/san-sebastian.
  4. A cidade mais austral:
     - desde março de 2019, o INE do Chile conta como cidade a capital provincial, e Puerto Williams "desplaza a su vecina argentina Ushuaia como la más austral del mundo" (La Nación, citado);
     - Ushuaia tem mais de 60 mil habitantes.
     - BioBioChile, 30/05/2019, https://www.biobiochile.cl/noticias/nacional/region-de-magallanes/2019/05/30/argentinos-admiten-derrota-reconocen-a-puerto-williams-como-la-ciudad-mas-austral-del-mundo.shtml.
  5. **A confirmar:**
     - a travessia de 4,5 km entre Punta Delgada e Bahía Azul (Primera Angostura);
     - a província "Tierra del Fuego, Antártida e Islas del Atlántico Sur" e os 190.641 habitantes do censo de 2022 (pelo INDEC, não por jornal);
     - o meridiano demarcado de hoje (68°36′38″), diferente do 68°34′ do texto.
- **A medida nossa** (feita; OSRM pelas aduanas):
  - de Río Gallegos a Ushuaia são **589 km (366 mi), 8,5 h**;
  - **217 km (135 mi, 37 %)** são no Chile, de Monte Aymond a San Sebastián, com a balsa;
  - 75 km e 296 km são na Argentina.
- **Os atos:**
  1. A estrada impossível: 135 das 366 milhas no Chile, a balsa na Primera Angostura, quatro aduanas.
  2. Por quê: o tratado de 1881 (a Argentina fica com a Patagônia, o Chile com o estreito, neutralizado para sempre, e a ilha cortada por um meridiano) e o Beagle, que quase virou guerra em 1978 e foi resolvido pelo papa em 1984.
  3. Hoje: Ushuaia contra Puerto Williams pela "mais austral" (2019; Boric reabriu em 07/2025) e a província que no papel inclui as Malvinas e a Antártida.
- **A miniatura:**
  - relevo amarelo do extremo sul e o mar azul;
  - a metade argentina da Isla Grande em vermelho, a chilena em amarelo-palha, e a linha reta branca;
  - a seta branca grossa de Río Gallegos a Ushuaia, fazendo a curva pelo Chile;
  - caixa preta "THROUGH CHILE".
- **A onda:**
  - em inglês, nada em 8 semanas. O mais perto é "Chile vs Argentina: The Border Dispute That Nearly Caused War" (Geographic Enigma, 29/08, 2,6 mil, curto);
  - em espanhol, um longo de 313 mil (En Stock, 26/08/2026, 61 min, o estreito);
  - nenhum dos três canais de curtos fez a ilha; a GeoGlobeTales fez a forma do Chile (35 mi, 19/03) e as Malvinas.
- **Os antigos grandes:** "¿Por qué Tierra del Fuego está dividida entre Argentina y Chile?" (Chris Torres, 06/06/2025, 10 mi, curto em espanhol) e "Why Tierra del Fuego Is Split in Two?" (Geo Bytes, 09/08/2025, 252 mil, curto). A curiosidade está provada em curto; em longo de inglês, o campo está vazio.
- **Os riscos:**
  - o Geoff fez a Drake (17/09, 1,5 mi), com os capítulos "The Shetland Dispute" e "Gateway Economies", que tocam a região sem a divisão da ilha. A Drake está na gaveta do canal: é vizinha, não é a mesma;
  - as Malvinas: só o fato da província, sem lado;
  - a balsa e os horários mudam: a fala é datada;
  - as imagens: Landsat, Commons, os governos (licença a confirmar).

## 3. Nauru: nota 5,5

- **Título:** "Inside the World's Smallest Island Nation" (41). Nauru tem 21 km²; Tuvalu, ~26 km² (a confirmar). O Factbook a chamava de menor república independente.
  - Variantes: "The Country That Dug Up 80% of Itself" (37) e "Why Nauru Lives on the Edge of Its Own Island" (45).
  - **Evitar** "Richest Country… Lost": é o título do Economics Explained (5,3 mi).
- **O chamariz:** um país inteiro que escavou o próprio miolo; os 10 mil moradores vivem num anel de praia, e o mar sobe.
- **O gancho** (40 palavras): "Nauru is just eight square miles. For most of a century, its middle was dug up and shipped away as fertilizer. Now almost everyone lives on a thin ring of coast, with the ocean rising on one side and a moonscape on the other."
- **Os fatos:**
  1. "21 square kilometres"; "Phosphate mining has left the island interior almost entirely barren"; "There is a fertile coastal strip, where most people live"; 10.000 habitantes (2022).
     - Commonwealth, https://thecommonwealth.org/our-member-countries/nauru.
  2. Haia: Nauru processou a Austrália em 19/05/1989 pelas terras mineradas. As partes notificaram "having reached a settlement", e a Corte registrou a desistência em 13/09/1993.
     - CIJ, http://www.icj-cij.org/node/101107.
     - O valor (A$ 107 mi) vem da busca, a confirmar no tratado de 1993.
  3. "The Republic of Nauru will no longer recognise the Republic of China [Taiwan] as a separate country", em 15/01/2024; restaram 12 aliados a Taiwan.
     - RFA, https://www.rfa.org/english/news/pacific/nauru-cuts-taiwan-ties-01152024031116.html.
     - As trocas de 2002 e 2005 ficam a confirmar.
  4. O tratado com a Austrália, de 09/12/2024:
     - "The two countries will have to agree to any engagement in Nauru's security, banking and telecommunications sectors";
     - "$100 million for Nauru's budget and $40 million for policing and security, both over five years". A AAP não diz a moeda; deve ser o dólar australiano (a confirmar).
     - AAP, https://aapnews.aap.com.au/news/australia-gains-effective-veto-over-nauru-security-pact.
     - O DFAT não respondeu.
  5. **NÃO CONFERIDO** (Monash e SPREP recusaram): os "80 %" degradados e o plano Higher Ground (2019; o master plan de 2022). A conferir no Departamento de Mudança Climática de Nauru.
- **A medida nossa** (feita, preliminar; SRTM 30 m, grade de ~223 m; `nauru-relevo-saida.txt`):
  - 449 pontos de terra, ~22 km², o que bate com os 21 km² oficiais;
  - **82 % da terra está acima de 10 m (o planalto, o "Topside"); o anel abaixo de 10 m é ~18 %**.
  - O SRTM soma a copa das árvores. **A refazer** com o Copernicus DEM ou com a mineração vista no Sentinel-2 (o pináculo de coral contra o verde), antes de ir à tela.
- **Os atos:**
  1. A ilha oca: o planalto minerado e o anel do litoral, e a medida.
  2. Quem levou o fosfato e o que sobrou: a British Phosphate Commission, a independência e a riqueza (datas a confirmar), a falência e Haia (1989–1993).
  3. A geopolítica de 21 km²: o centro de processamento da Austrália (a confirmar), Taiwan e a China (2024), o veto australiano (2024) e o plano de voltar a morar no buraco (Higher Ground).
- **A miniatura:**
  - o Pacífico com Nauru em vermelho e um recorte ampliado da ilha, com o miolo cinza esburacado e a borda verde;
  - a seta branca da ilha até a Austrália;
  - caixa amarela "DUG UP".
- **A onda:** em 8 semanas, "Nauru: The Island Bird Poop Made Rich (Then It Ran Out)" (22/10, 1,5 mil, curto) e um longo de 14 views (18/10). Nada nos três canais de curtos.
- **Os antigos grandes:** "How the World's Richest Country Lost 90% of its GDP" (Economics Explained, 24/12/2022, 5,3 mi) e ABC In-depth (17/12/2025, 15 mil, curto).
- **Os riscos:**
  - o Economics Explained cobriu a riqueza e a falência: o nosso ângulo é a geografia (a ilha oca e o anel) e a geopolítica (o veto);
  - a detenção de refugiados é tema sensível: fato datado, sem adjetivo;
  - Nauru restringe jornalistas: as imagens saem do satélite (Landsat, Sentinel) e do Commons;
  - as fontes de origem dos 80 % recusaram robô.

## 4. Timor-Leste: nota 5,0

- **Título:** "Inside Asia's Youngest Country" (30). "Asia's youngest nation" está na Al Jazeera (independência em 2002).
  - Variantes: "Why Part of East Timor Is Trapped Inside Indonesia" (50) e "Why Timor's Road Home Runs Through Indonesia" (44).
- **O chamariz:** o país mais novo da Ásia divide a ilha com a Indonésia, tem um pedaço preso do lado indonésio e brigou em Haia com a Austrália pelo mar do gás.
- **O gancho** (41 palavras): "Timor-Leste shares its island with Indonesia. One piece of the country sits on the wrong side, and the road home from it crosses Indonesia. And under the sea to the south lies the gas that sent two neighbors to court in The Hague."
- **Os fatos:**
  1. "East Timor has joined the Association of Southeast Asian Nations (ASEAN) as the bloc's 11th member state"; "Asia's youngest nation"; a independência é de 2002; o país tem 1,4 milhão de pessoas.
     - Al Jazeera, 26/10/2025, https://www.aljazeera.com/news/2025/10/26/dream-realised-east-timor-becomes-aseans-11th-member.
  2. O caso na CIJ: "Questions relating to the Seizure and Detention of Certain Documents and Data (Timor-Leste v. Australia)":
     - aberto em 17/12/2013;
     - tratava de documentos tomados por agentes australianos de um advogado de Timor, sobre a arbitragem do Tratado do Mar de Timor de 2002;
     - a desistência foi registrada em 11/06/2015.
     - CIJ, https://www.icj-cij.org/case/156.
  3. **NÃO CONFERIDO** (a PCA e o press.un.org recusaram): o tratado de fronteira marítima de 06/03/2018, assinado na ONU ao fim da primeira conciliação sob a UNCLOS, e o regime de Greater Sunrise. A fonte alternativa a ler é o comunicado do governo australiano (foreignminister.gov.au).
  4. **A confirmar na origem** (o INETL tem o "Oecusse em Números 2022"): Oecusse, ~814 km² e ~80,7 mil habitantes (censo de 15/10/2022), região administrativa especial.
  5. **A confirmar:** a partilha luso-holandesa (o tratado de 1859 e a sentença arbitral de 1914).
- **A medida nossa** (feita; OSRM): de Pante Macassar (Oecusse) a Dili por terra são **213 km (133 mi), 3,2 h, pelo Timor Ocidental indonésio**. A linha reta tem 157 km.
  - **A fazer:** as passagens de fronteira na rota (duas saídas e duas entradas) e o ferry pela costa.
- **Os atos:**
  1. A ilha partida e o enclave: Oecusse, onde os portugueses chegaram primeiro, ficou do lado indonésio.
  2. Por quê: a partilha luso-holandesa, o século XX sem detalhar a ocupação (1975–1999) e a independência de 2002.
  3. O mar: a fossa de Timor e o gás, o caso de Haia (2013–2015), o tratado de 2018 que levou a linha ao meio do mar (a confirmar) e a ASEAN (26/10/2025).
- **A miniatura:**
  - o relevo da ilha;
  - Timor-Leste em vermelho, com Oecusse destacado; o Timor Ocidental em amarelo; o mar de Timor em azul com Greater Sunrise em ciano;
  - a seta branca de Oecusse a Dili;
  - caixa preta "TRAPPED".
- **A onda:** "Why part of Timor-Leste is cut off by Indonesia" (VanishedBorders, 02/11, 25 views, curto). Nada nos três canais.
- **Os antigos grandes:**
  - em indonésio, sobre Oecusse: JAJAGO (28/09/2025, 634 mil) e INVOICE (03/09/2022, 1,45 mi);
  - "The Country Indonesia Tried to Erase" (General Knowledge, 27/02/2026, 134 mil);
  - ABC Four Corners (2022, 520 mil);
  - "How Australia Cheats East Timor of its Natural Gas" (Hindsight, 2023, 269 mil).
- **Os riscos:**
  - o ângulo do gás de Timor caiu na rodada de rico-pobre (ABC, 04/02/2026, 170 mil): aqui o gás é o ato 3, não o tema;
  - a ocupação de 1975–1999 tem massacre: só o necessário, datado;
  - a plateia indonésia é grande e sensível;
  - a conhecença é média.

## 5. A Gâmbia: nota 4,5

- **Título:** "Inside Africa's Smallest Mainland Country" (41).
  - O Commonwealth diz "the smallest country in West Africa". O "mainland" é defensável pela área (11,6 mil km² contra os ~17,4 mil km² de Essuatíni, a confirmar).
  - Variantes: "Why Senegal Has to Cross Another Country to Reach Itself" (56), no contraste, e "The Country That Is Just a River" (32).
  - **Evitar** "Why Does The Gambia Exist?" (2,7 mi e 935 mil).
- **O chamariz:** um país que é só as margens de um rio, enfiado no Senegal; para ir ao próprio sul, o Senegal atravessa a Gâmbia ou dá o dobro da volta.
- **O gancho** (32 palavras): "From Dakar to Ziguinchor, two cities in Senegal, the short road is 278 miles. But it runs through another country. Go around that country instead, and the drive becomes 614 miles."
- **Os fatos:**
  1. "11,600 square kilometres"; "the smallest country in West Africa"; "a mainly flat and low-lying strip of land bisected by the River Gambia"; 2,417 mi de habitantes (2022).
     - Commonwealth, https://thecommonwealth.org/our-member-countries/gambia.
  2. A ponte da Senegâmbia:
     - "942 metre long bridge", de 67.408.547 euros, financiada pelo BAD;
     - "After 40 years of waiting";
     - os corredores "from northern Senegal to Farafenni via Kerr Ayub and Ziguinchor to Yelli Tenda via Senob".
     - The Standard (Banjul), 22/01/2019, https://standard.gm/after-40yrs-senegambia-bridge-opened.
  3. **NÃO CONFERIDO** (erro de certificado na Oregon Digital): o acordo anglo-francês de Paris, de 10/08/1889, com a linha a 10 km do rio até Yarbutenda. A história do "alcance do canhão" é mito e não vai à tela.
  4. **A confirmar:** a Confederação da Senegâmbia (1982–1989).
- **A medida nossa** (feita; OSRM):
  - de Dakar a Ziguinchor **pela Gâmbia (Farafenni): 447 km (278 mi), 6,2 h**;
  - **por fora (Tambacounda, Vélingara, Kolda): 988 km (614 mi), 16,5 h**, 2,2 vezes a distância e +10 h;
  - a linha reta tem 167 mi.
- **Os atos:**
  1. O mapa: um país-rio menor que Connecticut (a confirmar) e o Senegal partido em dois, com a medida.
  2. Por quê: o rio como estrada do comércio britânico, a linha de 1889 e a confederação que não durou.
  3. A ponte de 2019 depois de 40 anos e a Casamance do outro lado.
- **A miniatura:**
  - o relevo da África Ocidental;
  - a Gâmbia em vermelho; o Senegal palha; a Casamance em ciano;
  - a seta branca de Dakar dando a volta pelo leste até Ziguinchor;
  - caixa preta "IN THE WAY".
- **A onda:** "The Country Inside Senegal That Splits Senegal in Two" (Map Mysteries, 08/11, 23 views): **o mesmo ângulo da variante**, minúsculo. Também um curto de 374 views (26/10) e Le Monde Afrique em francês (19/08, 129 mil, fora da janela).
- **Os antigos grandes:** KhAnubis (19/12/2021, 2,7 mi), History Matters (19/09/2023, 935 mil) e 2zaq (06/02/2026, 1,1 mil).
- **Os riscos:**
  - **a eleição presidencial de 05/12/2026** (Barrow busca o 3º mandato) põe o país na notícia justo no lançamento: publicar antes de dezembro ou bem depois;
  - a Casamance (conflito de baixa intensidade): datado;
  - o tema é clássico e o título tem de fugir do "exist".

## 6. A Guiné Equatorial: nota 4,5

- **Título:** "Inside Africa's Only Spanish-Speaking Country" (45). O espanhol oficial está a confirmar na Constituição.
  - Variantes: "Why This Country Just Moved Its Capital Off an Island" (53) e "The African Island That Asked Argentina for Help" (48).
- **O chamariz:** a capital ficava numa ilha mais perto de Camarões que do próprio continente, até mudar em janeiro de 2026 para uma cidade na floresta; uma ilha a 417 milhas, depois de São Tomé, declarou independência e foi pedir ajuda em Buenos Aires.
- **O gancho** (37 palavras): "Until this year, Equatorial Guinea's capital sat on an island closer to Cameroon than to its own mainland. Another of its islands lies past a whole other country. And in 2022, that island declared itself independent."
- **Os fatos:**
  1. A capital mudou "via a presidential decree" de Malabo (Bioko) para Ciudad de la Paz, no continente, por "strategic reasons".
     - Africanews, 05/01/2026, https://www.africanews.com/2026/01/05/equatorial-guinea-relocates-capital/.
  2. Annobón:
     - o movimento "Ambo Legadu" proclamou a independência em 08/07/2022, de forma unilateral;
     - o premiê exilado Orlando Cartagena Lagar, em Buenos Aires: "No pedimos ser anexados";
     - Annobón esteve no Vice-Reino do Rio da Prata (1777); tem ~17 km² e ~5 mil pessoas.
     - Chequeado, 30/05/2025, https://chequeado.com/el-explicador/annobon-el-insolito-caso-de-la-isla-africana-que-pide-ayuda-a-su-hermana-argentina/.
  3. A CIJ julgou o mérito de "Land and Maritime Delimitation and Sovereignty over Islands (Gabon/Equatorial Guinea)" em **19/05/2025**.
     - CIJ, https://www.icj-cij.org/case/179.
     - O que decidiu (Mbanié e a convenção de Paris de 1900 contra a de Bata de 1974) está **a confirmar** no resumo, que recusou (403). A busca diz que favoreceu a Guiné Equatorial.
  4. **A confirmar:** o espanhol oficial e o estatuto de único país africano hispanófono.
- **A medida nossa** (feita; círculo máximo):
  - de Malabo a Idenau (Camarões): **57 km (35 mi)**;
  - de Malabo a Bata (o próprio continente): **230 km (143 mi)**;
  - de Malabo a Annobón: **671 km (417 mi)**;
  - de Annobón a São Tomé: 229 km;
  - de Malabo a Ciudad de la Paz: 330 km.
- **Os atos:**
  1. O país em pedaços e a capital na ilha.
  2. Por quê: Portugal cedeu Fernando Pó e Annobón à Espanha (1777–78), a ligação com Buenos Aires, a Espanha até 1968, o petróleo e Mbanié (Haia, 2025).
  3. 2026: a capital vai para a floresta, e Annobón fica rebelde.
- **A miniatura:**
  - o Golfo da Guiné; as peças do país em vermelho; Camarões amarelo;
  - duas setas brancas a partir de Malabo: "35 MI" até Camarões e "143 MI" até Bata;
  - caixa preta "WRONG SIDE".
- **A onda:** em inglês, nada em 8 semanas. "Equatorial Guinea Changed Its Capital in 2026 - Why?" (17/07, 147 views, curto).
- **Os antigos grandes:** TV5MONDE em francês (04/01/2026, 179 mil), Telenoche em espanhol sobre Annobón (28/05/2025, 187 mil), "The STRANGEST city in West Africa: Malabo" (30/01/2026, 11,6 mil) e Learning Canteen (2023, 73 mil).
- **Os riscos:**
  - a conhecença é baixa para o curioso de língua inglesa;
  - o regime de Obiang: fala neutra;
  - o pedido de Annobón à Argentina tem desmentidos;
  - quase não há imagem livre.

## 7. Chipre: nota 4,0

- **Título:** "Inside the Mediterranean's Most Divided Island" (46).
  - Variantes: "Why the U.K. Still Owns Part of an EU Island" (44) e "The Island With Four Different Authorities" (42).
  - "Europe's Last Divided Island" já está num curto de 28/10; "4 Nations" e "4 Pieces" já foram usados.
- **O chamariz:** uma ilha da União Europeia com quatro autoridades: a República, um Estado que só a Turquia reconhece, a zona-tampão da ONU e duas bases que ainda são território britânico. Numa aldeia, Pyla, tudo se encontra.
- **O gancho** (42 palavras): "Cyprus is a member of the European Union. But its government doesn't run the north, a UN line cuts through its capital, and two pieces of the island still belong to Britain. In one village, all of it meets."
- **Os fatos:**
  1. Pyla: "Pyla is inhabited by about 500 Turkish Cypriots and 850 Greek Cypriots"; "Pyla was given special status because of its mixed population"; a área vizinha tem 2 km² onde quatro reivindicações se sobrepõem.
     - Arab News, 10/09/2023, https://www.arabnews.com/node/2371046.
  2. **NÃO CONFERIDO** (Refworld recusou): a Resolução 541 do Conselho de Segurança, de 18/11/1983, que "considers the declaration … as legally invalid and calls for its withdrawal". A ler na Biblioteca Digital da ONU.
  3. **NÃO CONFERIDO** (a página da SBA não tinha o dado; o Factbook acabou): as bases de Akrotiri e Dhekelia, com ~254 km² (98 mi²), ~3 % da ilha, mantidas pelo tratado de 1960.
  4. **NÃO CONFERIDO** (a UNFICYP recusou): a zona-tampão (~180 km) e as passagens.
- **A medida nossa** (a fazer): as áreas das quatro partes pelos polígonos do OSM (Overpass) e quantas vezes a estrada de Larnaca a Famagusta troca de autoridade (a República, a SBA de Dhekelia, a zona-tampão, o norte).
- **Os atos:**
  1. O mapa das quatro autoridades e Pyla.
  2. Por quê: 1960 (a independência com as bases), 1963–64 (a Linha Verde), 1974 (a divisão, sem o detalhe da guerra), 1983 (a declaração e a 541) e 2004 (o Plano Annan e a entrada na UE).
  3. Hoje: as passagens de 2003 e as conversas sob a ONU em 2026.
- **A miniatura:**
  - Chipre com o norte em vermelho e a República em amarelo;
  - a zona-tampão numa linha branca; as bases em ciano;
  - caixa preta "4 RULERS".
- **A onda:** fora da janela, mas carregada:
  - "Why Cyprus Is Divided … Europe's Strangest Island" (GeoGlobeTales, 28/06/2026, 5,0 mi, curto);
  - DW History (17/09/2026, 304 mil, 2:23);
  - "Why Cyprus is Owned by 4 Nations (Documentary)" (Borderline History, 28/03/2026, 156 mil, 13 min): **o mesmo ângulo, em longo, há 8 meses**;
  - na janela, só "Why Cyprus Is Split Into 4 Pieces … Europe's Last Divided Island" (28/10, 1,4 mil, curto).
- **Os riscos:**
  - o ângulo já tem dono em 2026;
  - Grécia e Turquia;
  - as conversas de 2026 podem virar notícia;
  - o uso das bases no Oriente Médio é assunto quente: fica de fora.

## 8. Andorra: nota 4,0

- **Título:** "Inside Europe's Highest Country" (31). É defensável pela nossa medida (a média de 2.045 m). A comparação com a Suíça, Liechtenstein e a Armênia, pelo mesmo método, fica a fazer.
  - Variantes: "Why a Whole Country Sits Higher Than Denver" (43) e "The Country With No Airport, No Train and Two Heads of State" (60).
- **O chamariz:** um país inteiro mais alto que Denver, sem aeroporto nem trem, com dois chefes de Estado estrangeiros: o presidente da França e um bispo espanhol.
- **O gancho** (36 palavras): "The average spot in Andorra sits higher than Denver. The country has no airport and no railway. And its two heads of state are a French president and a Spanish bishop, and Andorrans elect neither."
- **Os fatos (todos a confirmar na origem; a busca só trouxe espelhos da Wikipedia e sites de turismo):**
  - os co-príncipes são o bispo de Urgell e o presidente da França, pela Constituição de 1993 (o referendo foi em 14/03/1993);
  - Andorra la Vella, a 1.023 m, é a capital mais alta da Europa;
  - não há aeroporto nem trem: o aeroporto Andorra–La Seu fica na Espanha;
  - **o acordo de associação com a UE foi assinado em 19/10/2026** (o resumo da Comissão, via Lovguiden, e o Ara). A ler no presscorner da Comissão.
- **A medida nossa** (feita; SRTM 30 m, 510 pontos dentro do contorno do OSM; `andorra-relevo-saida.txt`):
  - **média de 2.045 m (6.709 pés)**, mediana de 2.116 m e mínimo de 891 m;
  - **87 % do país acima de 1.500 m; 59 % acima de 2.000 m**;
  - Denver tem 1.609 m: a média de Andorra fica ~1.430 pés acima.
- **Os atos:**
  1. O país vertical: a medida e uma estrada para cada lado.
  2. Por quê: o pariatge de 1278 entre o bispo de Urgell e o conde de Foix, e o título de Foix que passou ao rei e depois ao presidente da França (a confirmar).
  3. Hoje: o esqui, o comércio de fronteira e o acordo com a UE de 10/2026.
- **A miniatura:**
  - o relevo dos Pirineus; Andorra em vermelho; França e Espanha em amarelo;
  - duas setas brancas, uma de Paris e uma de La Seu d'Urgell;
  - caixa preta "TWO PRINCES".
- **A onda:** nada em 8 semanas ("Exploring Europe's Highest Capital", 06/03/2026, 69 views).
- **Os antigos grandes:** History Matters (10/02/2021, 1,54 mi), VanDeGraph (2017, 279 mil), WonderWhy "Why the President of France is Prince of Andorra" (2021, 169 mil) e Passenger Paramvir (2022, 438 mil, viagem).
- **Os riscos:**
  - **o acordo com a UE de 19/10/2026 é notícia dos últimos 2 meses**: pequena e não viral, mas pela régua pesa;
  - o Liechtenstein do Geoff ("'Fake' Country", 13/10/2026, 952 mil) é vizinho de tema;
  - os co-príncipes são um tema velho e muito visto.

---

## A lista inteira (34 candidatos)

Coluna "Situação": desenvolvido, caiu (com a data e o porquê) ou reserva. As views e as datas vieram da `/watch` em 18/11/2026.

| # | Candidato | Situação |
|---|---|---|
| 1 | Kiribati | desenvolvido, 6,0 |
| 2 | A Terra do Fogo | desenvolvido, 5,5 |
| 3 | Nauru | desenvolvido, 5,5 |
| 4 | Timor-Leste e Oecusse | desenvolvido, 5,0 |
| 5 | A Gâmbia | desenvolvido, 4,5 (eleição em 05/12/2026) |
| 6 | A Guiné Equatorial | desenvolvido, 4,5 |
| 7 | Chipre | desenvolvido, 4,0 (GeoGlobeTales 5,0 mi em 28/06; Borderline History 156 mil em 28/03, mesmo ângulo) |
| 8 | Andorra | desenvolvido, 4,0 (acordo com a UE em 19/10/2026) |
| 9 | São Martinho (França e Países Baixos) | caiu: GeoGlobeTales 1,6 mi (28/09), worldatlas 55 mil (14/10), La Minute Géographie 95 mil (30/10) |
| 10 | A Malásia em duas metades (e o passaporte para Sarawak) | caiu: "Why Is Malaysia Split in Two?" (Geotcha, 31/10, 412 mil) |
| 11 | Akwesasne e Cornwall Island (EUA e Canadá) | caiu: Noel Philips, "I Flew To the American Town That's Also in Canada" (18/10, 319 mil) e o curto de 21/10 |
| 12 | A Nova Guiné partida por uma reta | caiu: Ghost Countries (01/11, 630 mil) |
| 13 | Sebatik (a fronteira que corta casas) | caiu: "Why This Island Is Divided by a Straight Line" (Geo Map Tale, 22/10, 216 mil) |
| 14 | A Jordânia e os 1965 (o litoral de Aqaba) | caiu: Stalemate State (26/10, 2,27 mi) |
| 15 | O Caprivi e Kazungula | caiu: as pontes de Kazungula (23/10, 1,06 mi; 19/10, 317 mil) e o dedo da Namíbia (24/10) |
| 16 | A Bósnia (três presidentes, Neum) | caiu: eleição geral de 04/10/2026, com Dodik |
| 17 | A Bélgica (a fronteira da língua) | caiu: "How A Roman Road Changed Belgium Forever" (26/12/2025, 879 mil, o mesmo porquê geográfico) e um curto de 204 mil (04/08) |
| 18 | Jersey e Guernsey | caiu: Geography Now, "They're Not British. They're Not Independent." (31/08/2026, 377 mil) |
| 19 | Guam | caiu: o Geoff com Diego Garcia (10/11), "America's Most Important Island Isn't Ready for War" (10/04, 153 mil); tema militar |
| 20 | Guantánamo | caiu: Borderline History (14/03, 218 mil), History Matters (30/09/2025, 2,5 mi); política |
| 21 | Gibraltar | caiu: o tratado UE–Reino Unido (07/2026, em implantação) e GeoGlobeTales 6,7 mi (04/06) |
| 22 | As Curilas | caiu: Ghost Countries (25/04, 744 mil), DW 220 mil (13/08); Rússia |
| 23 | A costa da RDC e Cabinda | caiu: "Two Congos" (14/11, 114 mil), "tiniest coastline" (04/11, 46 mil), Angola (27/10) |
| 24 | O Catar e o canal de Salwa | caiu: o Golfo em guerra com o Irã e Ormuz (`demanda.md` §3) |
| 25 | Mayotte e as Comores | reserva, 4,5: DW 395 mil (2024), Histoires Crépues 171 mil (2025, francês); conhecença baixa |
| 26 | Heligolândia (a troca por Zanzibar) | reserva, 4,0: Tom Thornton 740 mil (2025), EmperorTigerstar 126 mil (17/04/2026) |
| 27 | O vale de Fergana e os enclaves | reserva, 4,0: Places 272 mil (2025); os acordos de 2025; conhecença baixa |
| 28 | Vanuatu (o condomínio anglo-francês até 1980) | reserva, 4,0: campo vazio em inglês; conhecença baixa; história, não mapa de hoje |
| 29 | Wallis e Futuna (três reis numa coletividade francesa) | reserva, 4,0: Bruno Maltor em francês (79 mil), ARTE em alemão (93 mil) |
| 30 | As ilhas Åland | reserva, 4,0: Geo Perspective 89 mil (2023); OTAN e Rússia |
| 31 | Migingo | caiu: AFP 3,5 mi (2018) e vários de viagem; não sustenta 13 min |
| 32 | New Moore e os enclaves da Índia e de Bangladesh | caiu: o tratado do Ganges (dezembro de 2026) é notícia indiana; pouca matéria para hoje |
| 33 | As Ilhas Cook (a China e a Nova Zelândia) | caiu: notícia de 2025; conhecença baixa |
| 34 | Terra Nova (o domínio que deixou de ser país) | fora: o Geoff, "Why Everyone Ignores Canada's Eastern Edge" (16/07/2026) |

**Fora pela regra, sem teste:**
- do Geoff nos últimos 12 meses: a Irlanda, Bornéu, o Haiti, Svalbard, as Faroé, as Bermudas, as Caimã, as Chagos, as San Juan, a Colômbia e Liechtenstein;
- da gaveta do canal: o Lesoto e Madagascar;
- excluídos antes: a Groenlândia, Taiwan e Kinmen, Kaliningrado;
- as Malvinas, já reserva da rodada de rico-pobre;
- por conflito em curso: o Saara Ocidental, Naquichevão, Musandam e Bir Tawil;
- testados ou derrubados antes: Kahoʻolawe, Machias Seal, as Tiwi (Hector), Okinotorishima, o Peñón e Brunei.

## O top 4

1. **Kiribati, 6,0.** "Inside the Pacific's Most Spread-Out Country".
   - O chamariz: a terra de Nova York espalhada num oceano mais largo que os EUA (2.836 contra 2.693 mi, medida nossa), e o país que dobrou a linha da data.
   - A onda: limpa (3 curtos de 106 a 1.189 views). Os antigos grandes são de viagem e de clima (13,6 mi, 1,66 mi, 429 mil), não deste ângulo.
2. **A Terra do Fogo, 5,5.** "Inside South America's Largest (And Most Divided) Island".
   - O chamariz: para ir de carro a Ushuaia, 135 das 366 milhas são no Chile, com balsa chilena e quatro aduanas (medida nossa), por causa de um meridiano de 1881.
   - A onda: limpa em inglês. Os grandes são curtos em espanhol de 2025 (10 mi, 252 mil) e um longo em espanhol de 26/08/2026.
3. **Nauru, 5,5.** "Inside the World's Smallest Island Nation".
   - O chamariz: o país que escavou o próprio miolo (82 % da terra no planalto minerado, medida preliminar), com os moradores no anel do litoral e a Austrália com veto sobre a segurança dele (2024).
   - A onda: limpa (1,5 mil e 14 views). O antigo grande é a falência no Economics Explained (2022, 5,3 mi), outro ângulo.
4. **Timor-Leste, 5,0.** "Inside Asia's Youngest Country".
   - O chamariz: um país que divide a ilha, tem um enclave cuja estrada para casa passa pela Indonésia (213 km, medida nossa) e foi a Haia contra a Austrália por causa do mar do gás.
   - A onda: limpa (25 views). Os antigos grandes são em indonésio (1,45 mi, 634 mil) e a história da ocupação (134 mil, 02/2026).

**Por que essa ordem:** Kiribati junta o superlativo verdadeiro, a medida que vira miniatura e o campo vazio. A Terra do Fogo tem o paradoxo mais
concreto (a balsa chilena) e a curiosidade provada em espanhol. Nauru tem a imagem mais forte (a ilha oca), mas a medida ainda é preliminar. Timor
fica em 4º pela conhecença menor. A Gâmbia seria a 4ª se não fosse a eleição de 05/12.

## O que ficou a confirmar de mais importante

- **Kiribati:**
  - a área de terra, a ZEE e as 33 ilhas, na origem (NSO ou SPC);
  - a rota aérea Tarawa–Kiritimati via Fiji;
  - a comparação com a FSM pelo OSM;
  - a fala dos "four hemispheres".
- **A Terra do Fogo:** a balsa de 4,5 km, o meridiano demarcado (68°36′38″) e o censo do INDEC.
- **Nauru:**
  - os "80 %" e o Higher Ground, na fonte do governo (Monash e SPREP recusaram);
  - a medida com um DEM melhor ou com o Sentinel-2;
  - a área de Tuvalu, para o "smallest".
- **Timor:**
  - o tratado de 2018 e a "first conciliation" (a PCA e a ONU recusaram; ler o comunicado australiano);
  - os números de Oecusse no INETL.
- **A Gâmbia:** o acordo de 1889 (o scan falhou) e o "mainland" contra Essuatíni.
- **A Guiné Equatorial:** o que a CIJ decidiu em 19/05/2025 (o resumo recusou).
- **Chipre e Andorra:** quase tudo na origem (a ONU, a SBA e a UNFICYP recusaram; Andorra só tinha espelhos).

## Os arquivos

- **O relatório:** `out/_pautas/video-8/ilha-pais.md`.
- **Os scripts e as saídas:** `out/_pautas/video-8/_trabalho/ilha-pais/`.
  - Os scripts: `yt_canal.py`, `yt_shorts.py`, `yt_meta_longo.py`, `medidas.py`, `andorra_relevo.py` e `nauru_ilha.py`.
  - As saídas: `medidas-saida.txt`, `andorra-relevo-saida.txt`, `nauru-relevo-saida.txt`, `geoff-canal.txt` e `enxame-curtos.txt`.
  - Os caches das rotas, das coordenadas e das altitudes.
  - Nenhum arquivo passa de 1 MB, e nada foi para `midia/`.
- **A onda, crua:** `onda/*.jsonl`, uma página `/watch` por linha.
