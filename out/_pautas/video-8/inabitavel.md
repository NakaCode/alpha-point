# Vídeo 8: pautas "por que X lugar é inabitável" (17/11/2026)

**O pedido.** O Lucas, no chat da Sala, em 17/11/2026, ~22:3x, depois do pedido de "rico ou pobre": **"Ou Por que X lugar é inabitável"**. O pedido
inteiro está em `out/_pautas/video-8/pedido-inabitavel.md` (com o contexto do `pedido-estrutural.md` e as lições do `pedido-estrutural-r2.md`).

**Como foi feito, e os limites.**
- 22 lugares olhados; 20 na lista do fim, 8 desenvolvidos. O nosso jeito de entrar é o **mecanismo** (geografia ou geopolítica) com **uma medida nossa
  de dado aberto**; os lugares gastos (Centralia, Chernobyl, Varosha, Aral, Salton Sea, Fukushima) ficaram de fora.
- **Fato** é só o trecho lido na origem, com a URL, tudo lido em 17/11/2026, entre ~22h00 e ~22h30 (hora de Brasília). O resto vai **a confirmar**.
- **A concorrência:** a busca da web restrita a youtube.com (sem `/results`), 2 a 4 buscas por lugar; dos vídeos que importavam, a data, as views
  e o canal saíram da página pública `/watch`, um pedido por vez (`_trabalho/yt_meta.py`; as respostas em `_trabalho/inabitavel/lote-a.jsonl` a
  `lote-e-longo.jsonl`, 140 vídeos lidos). Views de 17/11/2026, ~22h. **Nada foi medido no vidIQ**, e a busca da web mostra o que existe, não prova o
  que não existe.
- **A régua de derrubar** (do pedido): vídeo com o mesmo mecanismo e mais de 100 mil views, ou 3 ou mais com o mesmo mecanismo em 2026. Li "o mesmo
  mecanismo" **no mesmo lugar** (o vídeo de argila rápida da Noruega não derruba o do Canadá). Onde há vídeo grande do mesmo mecanismo em outro lugar,
  ou um arquivo de época com mais de 100 mil, eu digo e pesa na nota. Dois de 2026 abaixo de 100 mil que tocam o mesmo ângulo também pesam.
- **Recusaram leitura automática, e não foram contornados** (os fatos deles ficam NÃO CONFERIDO): capitol.hawaii.gov (403), pubs.usgs.gov (403),
  recovery.hawaiicounty.gov (403), ohchr.org (403), blogs.law.columbia.edu (403), corrs.com.au (403), nit.com.au (403), judgments.fedcourt.gov.au (403),
  anchorage.us.emb-japan.go.jp (403), pmc.ncbi.nlm.nih.gov (pediu reCAPTCHA; parei). A arpansa.gov.au não respondeu (tempo esgotado, duas vezes).
- **As medidas** feitas aqui: as ondas de tsunami do Havaí na base aberta da NOAA (NCEI Global Historical Tsunami Database, API
  `ngdc.noaa.gov/hazel/hazard-service/api/v1/tsunamis/runups?country=USA&area=HI`, 11 páginas, um pedido por vez, com o User-Agent do canal;
  `_trabalho/inabitavel/ncei_hilo.py`, saída em `ncei-hilo-saida.txt`, os 2.138 registros em `ncei-havai.json`), e as distâncias e frações em
  `_trabalho/inabitavel/medidas.py` (saída em `medidas-saida.txt`; as coordenadas são aproximadas e se refinam no GNIS/OSM antes do roteiro).
- As notas são duras ("na dúvida, derrube"; as melhores pautas do canal tiveram 6,5 a 7,5). **Nenhuma passa de 6.** O "inabitável" é primo da família
  mais lotada de 2026 ("Why (Almost) Nobody Lives…", `demanda.md` §3), e quase todo lugar abandonado famoso já tem vídeo grande.

---

## Os 8 desenvolvidos, pela nota

| # | Lugar (`slug`) | Título de trabalho | Car. | Mecanismo | Nota |
|---|---|---|---|---|---|
| 1 | Kahoʻolawe, Havaí (`kahoolawe`) | Why Kahoolawe Is the Hawaiian Island Nobody Can Live On | 55 | 50 anos de bombas da Marinha numa ilha que a sombra de chuva do Haleakalā já deixava seca | **6,0** |
| 2 | Hilo, Havaí (`hilo-orla`) | Why Hilo Turned Its Waterfront Into a Park | 42 | a baía em funil concentra os tsunamis do Alasca e do Chile; depois de 1960, a orla virou parque e ninguém pode morar | **5,5** |
| 3 | Maralinga, Austrália (`maralinga`) | Why Part of Australia Is Still Off-Limits After Britain's Nukes | 63 | a bomba britânica da Guerra Fria, testada no deserto mais vazio do Império, deixou plutônio no chão | **5,0** |
| 4 | Newtok, Alasca (`newtok`) | Why Alaska Had to Abandon the Village of Newtok | 47 | o permafrost que derrete e o rio que come a margem (~70 pés por ano) | **5,0** |
| 5 | Lemieux, Ontário (`lemieux`) | Why Ontario Abandoned Lemieux Before the Ground Turned to Liquid | 64 | a argila do mar de Champlain, que perdeu o sal e vira líquido quando se mexe | **4,5** |
| 6 | Saibai e Boigu, estreito de Torres (`saibai`) | Why Australia's Islands Off Papua New Guinea Are Going Under | 60 | ilhas de lama dos rios da Nova Guiné, sem terra alta, contra as marés de sizígia e o mar que sobe | **4,5** |
| 7 | Lismore, Nova Gales do Sul (`lismore`) | Why Australia Is Paying People to Leave Lismore | 47 | a cidade na planície de cheia do Wilsons River; depois da cheia recorde de 2022, a terra recomprada não pode mais ter casa | **4,0** |
| 8 | Attu, Alasca (`attu`) | Why America Never Let Anyone Go Back to Attu | 44 | a guerra levou a aldeia inteira ao Japão, e a distância fez o governo não deixá-la voltar | **4,0** |

**O que a busca de concorrência mostrou antes de tudo.**
- **O abandonado famoso está tomado, e por vídeo grande.** Picher: "The Town of Silent Poison" (Keep Curious Co., 14/06/2023, **3.026.349**). Wittenoom:
  Free Documentary (25/12/2019, **1.814.963**). Amchitka: "The 6000-Foot Underground Nuclear Bomb that Cracked an Entire Island" (Dark Footage,
  04/08/2022, **1.412.513**). Times Beach: Plainly Difficult (20/02/2021, **588.660**) e Paul McAllister (23/06/2026, 158.257). A Zone Rouge: Places
  (28/12/2023, 275.596). Montserrat: Places (21/04/2025, 318.807). Holland Island: IT'S HISTORY (11/03/2023, 304.607). As sementes do pedido caíram quase
  todas na primeira busca.
- **O que sobra é o mecanismo pouco contado em lugar que se reconhece**, sobretudo nos EUA fora do continente (o Havaí) e na Austrália: lá, os
  vídeos mais próximos são reportagem de TV local (5 a 90 mil views), não explicador de geografia.
- **O enxame já chegou à geologia do Canadá**: "The Ottawa Valley Is Hiding Something Nobody Talks About" (Unseen Canada, 5,88 mil inscritos,
  01/09/2026, **67.409**) termina em Lemieux. Por isso Lemieux caiu de 5,0 para 4,5.

---

## 1 · Kahoʻolawe, Havaí (`kahoolawe`) · **6,0**

- **Título de trabalho:** "Why Kahoolawe Is the Hawaiian Island Nobody Can Live On" (55).
  - Variantes: "Why Kahoolawe Is Still Off-Limits, 36 Years After the Bombs" (59); "The Hawaiian Island the Navy Bombed for 50 Years" (48).
  - Na tela e na descrição, o nome vai com o ʻokina (Kahoʻolawe); no título, sem ele, como as pessoas buscam.
- **O mecanismo:** depois de Pearl Harbor, a Marinha fez da ilha um alvo de bombas por meio século; e a ilha já era a mais seca do arquipélago, na
  sombra de chuva do Haleakalā, com o solo levado por cabras e vento: a bomba e a geografia se somam para ninguém voltar a morar.
- **O gancho:** "In 1953, America promised to hand this Hawaiian island back in a condition suitable for habitation. Congress later set aside $400
  million to do it. Today only one acre in ten is cleared deep enough to dig, and nobody lives there. What went wrong?" (44 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "After the attack on Pearl Harbor, the U.S. declares martial law, leading to the use of Kahoʻolawe as a bombing range." (1941); em 1953, a
     transferência à Marinha vem com a cláusula de devolver a ilha "in a condition suitable for habitation when no longer needed by the military";
     em 1990, "President George Bush Sr. orders a stop to the bombing of Kahoʻolawe"; em 1993, o Congresso "authorizes $400 million for ordnance
     removal"; em 1994, "The U.S. Navy conveys the deed of ownership of Kahoʻolawe to the State of Hawaiʻi." KIRC, History:
     https://kahoolawe.hawaii.gov/history.shtml
  2. A limpeza, no fim (2004): "approximately 75% of the island is surface-cleared of unexploded ordnance"; desses, 10% (2.647 acres) também até 4 pés
     de fundo; os outros 25% (6.692 acres) "is not cleared and remains unsafe for unescorted access". Mesma página.
  3. As cabras chegaram a ~50 mil (1941–1988), e o pastoreio "causes severe environmental damage and substantial soil loss". Mesma página.
  4. "Access is permitted only with authorization from KIRC for specific purposes such as restoration, education, and culture." "Unexploded
     ordnance hazards remain throughout the Kahoʻolawe Island Reserve", nas áreas limpas, nas não limpas e no mar em volta. KIRC, FAQ:
     https://www.kahoolawe.hawaii.gov/faq.shtml
  5. A sombra de chuva: o Haleakalā "blocks Kaho`olawe from the moisture-bearing tradewinds"; "between six and ten feet of soil has blown away or
     washed into the sea"; as nascentes "are extinct and the wells brackish"; "most of the rain that falls runs directly off into the ocean."
     Environment Hawaiʻi, vol. 13, n. 9, março de 2003: https://environment-hawaii.org/will-water-return-to-kahoolawe-maui-forests-hold-tantalizing-clues-2/
  - **A confirmar:** a área da ilha (a Wikipedia dá 44,97 mi²; os números da KIRC implicam ~41,6 mi²) e a chuva anual (a busca dá "menos de 20 a 26
    polegadas"; o relatório da USGS, WRI 89-4209, recusou, 403); os usos permitidos pela lei estadual (HRS cap. 6K; o site do Legislativo recusou,
    403); a ilha ser hoje a única das oito principais sem morador.
- **A medida nossa** (dado: KIRC; Rainfall Atlas of Hawaiʻi, grade aberta; Landsat; conta minha):
  - Dos ~26.600 acres implícitos, só **2.647 (4,1 mi²) estão limpos até 4 pés**: dá para cavar com segurança em **1 acre de cada 10**. Os 6.692 acres
    nunca limpos são **10,5 mi², 46 % da área de terra de Manhattan**.
  - A sombra de chuva, medida: a chuva média anual sobre Kahoʻolawe contra a do Puʻu Kukui (Maui Oeste), a **24 milhas** dali, pela grade do Rainfall
    Atlas (a conta a fazer; o vídeo dá "X vezes menos chuva").
  - No Landsat: a área de solo nu (o "hardpan" vermelho) em 1990 e hoje, para medir o que a restauração devolveu.
- **Os 3 atos** (~14 min):
  1. A geografia: a ilha baixa atrás do Haleakalā, a chuva que não chega, as cabras do rancho e o vento que levou de 6 a 10 pés de solo.
  2. A geopolítica: Pearl Harbor, a lei marcial, 50 anos de bombas, a promessa de 1953, os protestos havaianos e a parada de 1990.
  3. O hoje: os US$ 400 milhões, o 1 acre em 10, a reserva onde só se entra com autorização, a água que ainda não volta.
- **A miniatura:** Maui, Lānaʻi e o Haleakalā em relevo amarelo; **Kahoʻolawe em vermelho**; **em ciano**, a faixa de mar de 2 milhas da reserva
  (fechada); uma seta branca grossa do cume do Haleakalā à ilha (a nuvem que não passa). Na caixa preta, **"UNLIVABLE"** (a B: "STILL OFF-LIMITS").
- **As buscas prováveis** (não medido no vidIQ): "kahoolawe", "kahoolawe island", "kahoolawe bombing", "why is kahoolawe uninhabited", "hawaii island
  bombed by the navy". Não usar "forbidden island": é o apelido de Niʻihau, e a busca leva para lá.
- **A concorrência** (os 3 mais próximos):
  - "Reclaiming Kahoolawe - History of Bombing" (Hawaii News Now, 231 mil inscritos, 27/02/2018, **17.096**, 5:54);
  - "13 Things I Learned at Kahoolawe" (pinkyshow, 01/08/2009, **14.264**, 7:06);
  - "Why is Kaho'olawe uninhabited?" (Kai Kanani Sailing, curto, 08/07/2023, **2.759**).
  - Nenhum explicador longo; nenhum em 2026. O "Why Nobody Lives on the Island Where America Nuked Its Own Fleet" (Battle Ensign, 13/10/2026,
    91.396) é Bikini, não Kahoʻolawe. **Fica de pé.**
- **Os riscos:** é lugar sagrado havaiano (Kanaloa), e a luta para parar as bombas tem mártires (dois ativistas se perderam no mar em 1977): o vídeo
  usa os nomes havaianos, cita a KIRC e a Protect Kahoʻolawe ʻOhana, mostra a restauração e nunca chama a ilha de "terra arrasada". Imagem: acervo da
  Marinha e da NARA (domínio público), fotos da KIRC (licença a ler), Landsat. A busca pelo nome é menor que a de um lugar famoso; o "Hawaiian" no
  título segura a porta da recomendação.
- **A nota: 6,0.** É inabitável de verdade, o porquê junta geopolítica (a guerra) e geografia (a sombra de chuva), a medida é nossa (1 acre em 10;
  a chuva) e ninguém fez o explicador. Não sobe mais porque a busca por "kahoolawe" é pequena e os dados da chuva ainda não foram lidos.

## 2 · A orla de Hilo, Havaí (`hilo-orla`) · **5,5**

- **Título de trabalho:** "Why Hilo Turned Its Waterfront Into a Park" (42).
  - Variantes: "Why Nobody Is Allowed to Live on Hilo's Waterfront" (50); "Why Hilo Is Hawaii's Tsunami Trap" (33).
- **O mecanismo:** a baía de Hilo, aberta para o norte e o leste, recebe e aumenta as ondas que vêm do Alasca e do Chile; depois de 1946 e de 1960, a
  cidade trocou o bairro da orla por um cinturão de parques onde ninguém pode morar.
- **O gancho:** "Twice in fourteen years, waves born thousands of miles away wiped out the same Hawaiian waterfront. After the second time, Hilo did
  something almost no American city has done: it stopped people from living there. Why does Hilo keep getting hit?" (41 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "A previous tsunami had struck Hilo in 1946, killing 159 people and destroying the bayfront." Em 1960, "The water washed through the entire
     downtown area, killing 61 people". Hilo é a "tsunami capital" do país "due to the shape of its bay that magnifies the height of tsunamis."
     Hawaiʻi Sea Grant (Josh McDaniel): https://seagrant.soest.hawaii.edu/like-the-whole-ocean-was-coming-at-you/
  2. Depois de 1960, "Hilo launched the even more ambitious Project Kaiko‘o", um "oceanside greenbelt buffer zone of lagoons, gardens, and recreational
     facilities" para absorver os próximos tsunamis; "The park was completed in 1965 and named the Wailoa River State Recreation Area." Mesma página.
  3. Shinmachi foi reconstruído no mesmo lugar depois de 1946; depois de 1960, "Shinmachi was never rebuilt"; "much of Hilo’s bayfront is now
     grass-filled park space." Hawaii Magazine (Vanessa Sim, 25/11/2009): https://www.hawaiimagazine.com/blogs/hawaii_today/2009/11/25/tsunami_Hilo_Big_Island_Hawaii
  4. O parque estadual tem 131,9 acres. DLNR: https://dlnr.hawaii.gov/dsp/parks/hawaii/wailoa-river-state-recreation-area/
  5. A medida, abaixo: na base da NOAA, Hilo soma 177 das 300 mortes por tsunami registradas no Havaí.
  - **NÃO CONFERIDO (site recusou):** a portaria do condado que proibiu reconstruir na área inundada (1960) e a Hawaii Redevelopment Agency; o
    documento do condado deu 403. A Wikipedia dá a portaria e a agência como de 31/05/1960. **É o fato que sustenta o "ninguém pode morar"**.
  - **A confirmar:** o mecanismo da baía por fonte primária (USGS ou NOAA, com a batimetria); a evacuação de Hilo no tsunami de Kamchatka de
    30/07/2025 (o gancho de agora).
- **A medida nossa** (dado: NOAA NCEI Global Historical Tsunami Database, 2.138 registros do Havaí; conta minha, `ncei_hilo.py`):
  - **Hilo tem 177 das 300 mortes por tsunami registradas no Havaí (59 %)**; das que vieram de tsunami distante, 177 de 244 (**73 %**). Honolulu:
    **zero**.
  - Anos com onda de 3 m ou mais: **Hilo, 10** (1837, 1841, 1868, 1877, 1923, 1946, 1952, 1957, 1960, 1964); **Honolulu, 2** (1946 e 1960).
  - As distâncias: o epicentro de 1946 (Unimak) fica a **2.326 milhas** de Hilo; o de 1960 (Chile), a **6.640 milhas**.
  - Ressalva: os registros da NCEI são de quem mediu e anotou, e alguns se repetem por ponto; o vídeo fala em "registros", não em "ondas".
- **Os 3 atos** (~14 min):
  1. A geografia: o Pacífico cercado de falhas, a ilha no meio, a baía de Hilo virada para o Alasca e para o Chile, e a onda que cresce no funil.
  2. A história: 1° de abril de 1946, a sirene de 1948, 22–23 de maio de 1960, Shinmachi que não voltou.
  3. A decisão: o Kaikoʻo, o cinturão de parques, a orla sem casas, e o alerta de 2025.
- **A miniatura:** a Ilha Grande em relevo amarelo; **a faixa de parques da orla em vermelho**; **em ciano**, a baía; duas setas brancas grossas
  chegando de longe, uma do norte ("ALASKA") e uma do sul ("CHILE"). Na caixa preta, **"NO HOMES"** (a B: "TSUNAMI TRAP"; a C: "UNLIVABLE").
- **As buscas prováveis** (não medido no vidIQ): "hilo tsunami", "hilo hawaii", "1960 tsunami hawaii", "1946 tsunami", "tsunami capital", "why is
  hilo bayfront empty". O título cobre "hilo".
- **A concorrência** (os 3 mais próximos):
  - "Shinmachi: Stronger Than a Tsunami" (PBS Hawaiʻi, 101 mil inscritos, 01/04/2021, **49.355**, 56:48), o bairro que não voltou;
  - "May 25, 1960: Tsunami devastation in Hawaii" (CBS, 11/03/2011, **115.506**, 11:00), cinejornal de época, não explicador;
  - "America’s Deadliest Tsunami Was Born in Alaska | Hilo 1946" (Vanished Worlds, 10/10/2026, **3.289**, 45:49).
  - O "Tsunami in Hilo Bay - February, 2010" (MaximHawaii, 247.837) é filmagem de outro evento. Nenhum explicador da orla vazia. **Fica de pé**,
    com o cinejornal acima de 100 mil anotado (arquivo de época não é concorrente de explicador, mas prova que a procura existe).
- **Os riscos:** o "ninguém pode morar" depende da portaria (NÃO CONFERIDO); a comunidade nipo-americana de Shinmachi e as 61 mortes pedem tom de
  memória, não de espetáculo. Imagem: farta e livre (NOAA, USGS, cinejornais de domínio público a conferir, Landsat). Não é "inabitável" num sentido
  dramático: é uma faixa de cidade, e o título tem de dizer "waterfront".
- **A nota: 5,5.** Lugar que se busca, o mecanismo é geografia pura e se vê no mapa, a medida da NOAA é nossa e forte (59 % das mortes; Honolulu zero).
  Fica abaixo de Kahoʻolawe porque o fato da lei não foi lido e porque o "inabitável" é de uma faixa, não de um lugar inteiro.

## 3 · Maralinga, Austrália (`maralinga`) · **5,0**

- **Título de trabalho:** "Why Part of Australia Is Still Off-Limits After Britain's Nukes" (63).
  - Variantes: "Why Nobody Can Live at Maralinga, Where Britain Tested Nukes" (60); "Why Britain Nuked the Australian Outback" (40).
- **O mecanismo:** a geopolítica da Guerra Fria (a Inglaterra precisava de uma bomba própria e de um deserto vazio) espalhou plutônio num chão
  seco onde o vento e o tempo não o levam; um pedaço da terra devolvida aos donos tradicionais continua sem moradia permanente.
- **O gancho:** "In the 1950s, Britain set off seven atomic bombs in the Australian desert, almost ten thousand miles from London. The land was cleaned up
  twice and handed back. Yet part of it is still not safe to live on. Why there, and why still?" (44 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. Maralinga foi usada "for nuclear weapons development tests between 1952 and 1963"; "In May 1955, Maralinga became a permanent test site."
     A Royal Commission (relatório de 1985) "found that significant radiological hazards remained at many of the Maralinga test sites."
     SBS, Backgrounder (05/11/2014): https://www.sbs.com.au/news/backgrounder-why-was-maralinga-used-for-secret-nuclear-tests
  2. Na mesma: "Three sites, Taranaki, TM100/101 (TMs), and Wewak remained highly contaminated with plutonium 40 years later"; "a $108-million
     rehabilitation project was successfully implemented between 1995 and 2000" (depois da Operation Brumby, de 1967); e "a 412 square kilometre area
     is not available for permanent habitation."
  3. Os testes maiores: "four in September/October 1956, and a final three in September/October 1957"; em março de 2000 o lugar foi declarado
     "'clean' and fully habitable", com a exceção de "120 square kilometres at Taranaki that can be traversed but is not safe for occupation".
     SA History Hub: https://sahistoryhub.history.sa.gov.au/?p=30591
  4. A devolução final das terras aos Maralinga Tjarutja, "the traditional owners of these lands", em 18/12/2009. Discurso da ministra Jenny Macklin:
     https://formerministers.dss.gov.au/14327/handback-of-the-former-maralinga-nuclear-test-site-to-the-maralinga-tjarutja/
  - **Conflito a resolver:** a zona sem moradia permanente tem **120 km²** (SA History Hub) ou **412 km²** (SBS)? A ARPANSA, que diz o limite oficial,
    não respondeu (duas vezes). Os 22,2 kg de plutônio espalhados pelos ensaios Vixen B vêm de um artigo da PMC que pediu reCAPTCHA (NÃO CONFERIDO).
  - **A confirmar:** a remoção dos Anangu para Yalata; a cerimônia de 2014 (os 1.782 km² da Section 400, segundo a SBS, ainda não lido na origem).
- **A medida nossa** (dados: ARPANSA, quando responder; ABS, Census 2021; Natural Earth; conta minha):
  - A zona: 120 km² = **46 mi² (2 Manhattans)**; 412 km² = **159 mi² (7 Manhattans)**. O vídeo dá um número só, o da ARPANSA.
  - A distância: Maralinga fica a **9.583 milhas de Londres** e a **525 milhas de Adelaide**: a bomba de um país testada do outro lado do mundo.
  - O vazio que atraiu a bomba: a população do Maralinga Tjarutja (a área de governo local do ABS) por milha quadrada, contra a da Inglaterra.
- **Os 3 atos** (~15 min):
  1. A geopolítica: a Inglaterra fora da bomba americana, Monte Bello e Emu Field, a escolha de Maralinga pela ferrovia e pelo vazio.
  2. A física e a geografia: 1956–57, a "névoa negra" sobre os Anangu, os ensaios menores que espalharam plutônio, o chão seco que não lava.
  3. O hoje: a Royal Commission, as duas limpezas, a devolução e o pedaço onde ainda não se pode morar.
- **A miniatura:** a Austrália em relevo amarelo, o recorte de Maralinga ampliado num círculo; **a zona restrita em vermelho**; **em ciano**, a linha
  da Trans-Australian Railway (o porquê de lá); uma seta branca grossa saindo da borda esquerda ("FROM LONDON"). Na caixa preta, **"UNLIVABLE"** (a B:
  "BRITAIN'S BOMBS").
- **As buscas prováveis** (não medido no vidIQ): "maralinga", "maralinga nuclear tests", "british nuclear tests in australia", "operation buffalo",
  "emu field". O título cobre "australia" e "britain"; "maralinga" vai na variante 1 e na descrição.
- **A concorrência** (os 3 mais próximos):
  - "Maralinga Mystery" (Alan Parkinson, 207 inscritos, 01/06/2016, **32.869**, 12:26);
  - "Maralinga Nuclear Test - 1957" (British Movietone, 05/10/2018, **69.116**, 2:21), cinejornal de época;
  - "Maralinga: How Britain Tested Nuclear Weapons in the Outback" (Iron Minds, 20,3 mil inscritos, 18/08/2026, **1.927**, 21:12).
  - Um só em 2026, nenhum acima de 100 mil. **Fica de pé.** (A série de TV "Operation Buffalo", de 2020, é ficção e puxa busca.)
- **Os riscos:** tema sensível duplo, os Anangu (Maralinga Tjarutja, o povo Spinifex) e os veteranos: o vídeo cita os donos tradicionais pelo nome,
  usa as palavras deles ("puyu", a névoa negra) com a fonte, não mostra rosto sem permissão e não usa "wasteland". Os números do plutônio e da zona
  ainda não foram lidos na origem. A palavra "nukes" no título pede que o vídeo explique que os ensaios menores não foram explosões nucleares.
  Imagem: arquivo britânico e australiano (licença a ler; o Movietone não é livre), Landsat, mapas.
- **A nota: 5,0.** A Austrália que o Lucas pediu, a geopolítica que o canal quase não fez, o mecanismo claro e a concorrência pequena. Não sobe pelo
  conflito do número central, pela busca concentrada na Austrália e pelo cuidado que o tema pede.

## 4 · Newtok, Alasca (`newtok`) · **5,0**

- **Título de trabalho:** "Why Alaska Had to Abandon the Village of Newtok" (47).
  - Variantes: "The Alaska Village That Had to Move 9 Miles to Survive" (54); "Why the Ground Under Newtok, Alaska, Washed Away" (48).
- **O mecanismo:** a aldeia yup'ik foi construída sobre permafrost, na margem de um rio do delta do Yukon-Kuskokwim; o gelo do chão derreteu e o rio
  levou a margem, uns 70 pés por ano, até não haver onde morar.
- **O gancho:** "For years, this Alaska village lost about seventy feet of ground a year. In 2024, it shut off its power and water, and the last
  families left. Newtok is a ghost town now. What is eating the ground under Alaska's villages?" (41 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "Newtok had to move because the permafrost under the community was deteriorating"; a margem do Ninglick perdia "about 70 feet of land washed
     away each year"; em agosto de 2024, "the Newtok Village Council voted to evacuate the last of Newtok's residents"; "The community had become too
     dangerous"; o lugar novo fica num morro a 9 milhas. KYUK (Emily Schwing, 09/06/2025):
     https://www.kyuk.org/public-safety/2025-06-09/although-everyone-has-moved-newtoks-relocation-is-far-from-over
  2. Na mesma: Newtok é "basically a ghost town today"; um relatório de 1984 já dizia: "Relocating Newtok would likely be less expensive than
     trying to hold back the Ninglick River."
  3. "In August, the Newtok Village Council voted unanimously to shut down all critical infrastructure"; não há eletricidade, "the water plant is no
     longer operating"; a mudança envolve "nearly 400 people"; "Severe coastal erosion has swallowed hundreds of feet of land in recent years."
     Alaska Public Media (Emily Schwing, 03/12/2024): https://alaskapublic.org/2024/12/03/newtok-shuts-down-its-critical-infrastructure
  4. O vizinho que ainda espera: Kivalina fica "at the tip of an eight-mile barrier reef about 80 miles north of the Arctic Circle"; 440 moradores em
     2018; votou em 1992 por mudar; o Corpo de Engenheiros (USACE) recusou os dois lugares que a aldeia escolheu; a mudança custaria US$ 95–125
     milhões (estimativas recentes: US$ 100–400 milhões). NOAA Climate.gov, Climate Resilience Toolkit:
     https://toolkit.climate.gov/case-study/relocating-village-kivalina-alaska-due-coastal-erosion
  - **A confirmar:** quantas aldeias do Alasca estão na lista de mudança (o relatório do GAO); se Newtok foi a primeira dos EUA a mudar inteira (a busca
    não sustenta o "first"); a situação de Shishmaref.
- **A medida nossa** (dados: Landsat e as imagens do USGS desde os anos 1980; Census 2020; conta minha):
  - A linha da margem do Ninglick em cada década, traçada no Landsat: quantos pés o rio andou, e quantos anos faltavam para chegar à escola.
  - A distância Newtok–Mertarvik: **9 milhas** (15 km), e a altura do morro novo contra a da aldeia (no modelo de elevação aberto do Alasca, ArcticDEM).
- **Os 3 atos** (~14 min):
  1. A geografia: o delta plano, o permafrost, o rio que muda de lugar, o mar de Bering sem gelo para segurar as tempestades.
  2. A história: a aldeia posta ali nos anos 1950, os votos para mudar, o relatório de 1984, o dinheiro que não vinha.
  3. O hoje: 2024, a luz e a água desligadas, Mertarvik, e Kivalina e Shishmaref na fila.
- **A miniatura:** o delta em relevo amarelo, cheio de lagos azuis; **Newtok em vermelho**, com a margem comida; **Mertarvik em ciano**, na ilha
  Nelson; uma seta branca grossa do vermelho ao ciano com "9 MI". Na caixa preta, **"ABANDONED"** (a B: "UNLIVABLE").
- **As buscas prováveis** (não medido no vidIQ): "newtok alaska", "mertarvik", "alaska village relocation", "alaska permafrost thaw", "kivalina",
  "climate refugees alaska".
- **A concorrência** (os 3 mais próximos):
  - "Permafrost thawed by climate change threatens remote villages in Alaska" (PBS NewsHour, 5,42 mi inscritos, 20/10/2025, **84.863**, 7:11);
  - "These Americans may become 'climate refugees'" (CNN, 29/03/2017, **16.925**, 6:19);
  - "KIVALINA: The Alaskan Village That Voted to Move and Still Has Nowhere to Go" (Impossible Lands, 11/08/2026, **1.132**, 19:03).
  - Em 2026, o mesmo mecanismo no Alasca: 2 longos (o de Kivalina e "Living in Kivalina", 05/11/2026, 179) e 1 curto ("The Village That Moved 9 Miles
    to Escape the River", 11/09/2026, 11). **No limite da régua** (3 contando o curto), todos abaixo de 1,2 mil. Fica de pé, com aviso.
- **Os riscos:** comunidade yup'ik que sofre ainda hoje (Mertarvik sem casas bastantes, sem banheiro com descarga): o vídeo não vende "refugiados do
  clima" como espetáculo, cita a aldeia e os jornalistas locais (KYUK) e não toma partido em política. "Climate change" no título afasta parte do
  público americano; o título fala do chão, não do clima. Imagem: livre (USACE, NOAA, Landsat); fotos de agência pedem licença.
- **A nota: 5,0.** Inabitável de verdade (todo mundo saiu em 2024), EUA, o mecanismo é geografia e se mede no Landsat. Não sobe porque o nome não é
  conhecido, porque a notícia já correu em 2024–2025 e porque o enxame de 2026 começou por Kivalina.

## 5 · Lemieux, Ontário (`lemieux`) · **4,5**

- **Título de trabalho:** "Why Ontario Abandoned Lemieux Before the Ground Turned to Liquid" (64).
  - Variantes: "The Clay Under Ottawa That Can Turn to Liquid" (45); "Why Canada Moved a Whole Town, Then Watched the Ground Vanish" (61).
- **O mecanismo:** depois do gelo, o mar de Champlain cobriu o vale do Ottawa e do São Lourenço e deixou uma argila marinha; a água doce lavou o sal
  dela, e ela ficou "sensível": parece sólida e, quando se mexe, flui.
- **O gancho:** "In 1991, the 28 homes of Lemieux, Ontario, were bought out and emptied. Two years later, the ground where the town had stood flowed
  into the river like wet cement. How did they know, and what else sits on that clay?" (41 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "Both landslides occurred in the Champlain Sea sediments (also known as Leda clays, quick clays or sensitive clays)", que podem "instantly turn
     from solid soils to liquid clay flows"; a South Nation Conservation "purchased 28 residential properties in Lemieux from willing sellers two
     years prior to the 1993 Landslide". South Nation Conservation, Potential Retrogressive Landslides:
     https://nation.on.ca/en/land-forestry/potential-retrogressive-landslides
  2. Na mesma: em 20/06/1993, "The failure involved 2.5 to 3.5 million cubic metres of sand, silt, and clay flowing into the South Nation Valley";
     "The landslide created a scar 320 m wide, 680 m in length, and 10 to 20 m deep." E em 16/05/1971, "4.5 km upstream of the hamlet of Lemieux, a
     large clay flow destroyed 28 hectares of farmland."
  3. "Landslides in Eastern Canada are primarily associated with sensitive marine (Leda) clays of the Champlain Sea basin"; há 20–45 m de argila;
     "Most modern earthflows occur along a critical 25 km stretch of the South Nation River which experiences a large landslide recurrence interval of
     20-25 years". Aylsworth et al., GSC, 57ª Conferência Canadense de Geotecnia (2004), PDF:
     https://members.cgs.ca/documents/conference2004/articles/G13.507.pdf
  4. O caso que matou: em 04/05/1971, Saint-Jean-Vianney (Quebec), "killing 31 people", "taking 41 homes"; "After the landslide, the area was declared
     unsafe for habitation"; "Saint-Jean-Vianney remains uninhabited." The Weather Network:
     https://www.theweathernetwork.com/en/news/weather/severe/this-day-in-weather-history-may-4-1971-saint-jean-vianney-landslide
  - **A confirmar:** quanto do antigo povoado a corrida de 1993 levou (Evans e Brooks, Canadian Geotechnical Journal, 1994); se as casas foram
    demolidas (um vídeo da Radio-Canada fala em "démolition du dernier bâtiment"); a argila sob Ottawa e Gatineau (o mapa de geologia de superfície
    da GSC).
- **A medida nossa** (dados: o mapa de geologia de superfície da GSC/NRCan, aberto; o Censo de 2021 da Statistics Canada por quarteirão; conta minha):
  - **Quantas pessoas moram sobre a argila do mar de Champlain** entre Ottawa e Montreal: os polígonos de "marine clay" cruzados com os quarteirões do
    Censo. O número esperado é de milhões (Ottawa, Gatineau, partes de Montreal).
  - A distância: Lemieux fica a **32 milhas do Parlamento** de Ottawa. A cicatriz de 1993, medida no modelo de elevação aberto (HRDEM do NRCan).
- **Os 3 atos** (~13 min):
  1. A geologia: o gelo, o mar de Champlain e as baleias, a argila que perdeu o sal.
  2. Os casos: Saint-Jean-Vianney (1971), o rio South Nation (1971), Lemieux comprada e esvaziada (1991) e a corrida de 1993.
  3. O hoje: a zona de risco que não se constrói, e a capital do país sobre a mesma argila.
- **A miniatura:** o vale do Ottawa e do São Lourenço em relevo amarelo; **o antigo mar de Champlain em ciano**; **a cicatriz de Lemieux em vermelho**;
  uma seta branca grossa da cicatriz até Ottawa. Na caixa preta, **"LIQUID GROUND"** (a B: "UNLIVABLE").
- **As buscas prováveis** (não medido no vidIQ): "leda clay", "quick clay", "lemieux landslide", "ottawa landslide", "champlain sea", "saint jean vianney".
- **A concorrência** (os 3 mais próximos):
  - "The Ottawa Valley Is Hiding Something Nobody Talks About" (Unseen Canada, 5,88 mil inscritos, 01/09/2026, **67.409**, 32:27): o mar de Champlain, a
    argila e **Lemieux como "the most incredible example"**;
  - "Glissement de terrain à Saint-Jean-Vianney" (Radio-Canada Info, 15/11/2018, **96.726**, 14:40), em francês;
  - "The Quick Clay Landslide at Rissa - 1978" (NGI, 22/03/2011, **1.596.255**), o mesmo mecanismo na Noruega.
  - Pela régua (lugar e mecanismo), não cai: o de 2026 tem menos de 100 mil e é um só. Mas é o mesmo clímax, de um canal do enxame, há 11 semanas.
- **Os riscos:** colisão de ângulo com o Unseen Canada (o vídeo nosso tem de abrir pela medida, as pessoas sobre a argila, não por Lemieux); o nome
  não é buscado; as 31 mortes de Saint-Jean-Vianney pedem tom de memória. Imagem: fotos da GSC (NRCan, licença aberta do governo, a ler), aéreas,
  HRDEM.
- **A nota: 4,5.** O Canadá que o Lucas pediu, a geologia mais estranha da lista e uma medida forte. Caiu de 5,0 pelo vídeo de setembro.

## 6 · Saibai e Boigu, estreito de Torres (`saibai`) · **4,5**

- **Título de trabalho:** "Why Australia's Islands Off Papua New Guinea Are Going Under" (60).
  - Variantes: "The Australian Islands Built From Papua New Guinea's Mud" (56); "Why Saibai Island Floods Every Year, 2 Miles From PNG" (53).
- **O mecanismo:** as ilhas mais ao norte da Austrália são lama que os rios da Nova Guiné (o Fly, a 60 km) jogaram sobre um recife, sem terra alta; a
  maré de sizígia entra pelas casas e o mar sobe. A fronteira (o tratado de 1978) as deixou australianas, coladas no vizinho.
- **O gancho:** "Saibai Island is part of Australia, yet Papua New Guinea's coast is about two miles away. The island is built from mud that New Guinea's
  rivers carried out to sea, and king tides now flow through its homes. Can Australia keep it?" (42 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. Saibai fica "just over three kilometres from Papua New Guinea's southern coastline"; é "Low lying and prone to severe flooding during the wet
     season"; "around 350 people" (2012). State Library of Queensland: https://www.slq.qld.gov.au/blog/life-border-saibai-island
  2. "The communities of Saibai, Boigu and Iama are all experiencing regular inundation during king tides. This problem fundamentally arises from a lack
     of suitable elevated land." Em Saibai, "Much, if not most, of sediments that make up the island are derived from the fluvial sources rather than
     from coral", com o rio Fly "some 60km to the east". AECOM para a TSRA, Inundation Management on Saibai, Boigu and Iama Islands (set. 2012), PDF:
     https://www.tsra.gov.au/__data/assets/pdf_file/0016/2491/Inundation-Managment-on-Saibai-Boigu-and-Iama-Islands.pdf
  3. O muro de US$ 24,5 milhões (australianos) de Saibai foi rompido pela maré uns seis meses depois de pronto; uma moradora de Iama: "Give us a new
     home, because this is like every year we have to move out because of the high tide." SBS NITV (31/01/2018):
     https://www.sbs.com.au/nitv/nitv-news/article/2018/01/31/place-danger-zone-torres-strait-residents-evacuate-tides-breach-new-24m-seawall
  4. Em 22–23/09/2022, o Comitê de Direitos Humanos da ONU achou que a Austrália violou os artigos 17 e 27 do Pacto com ilhéus de Boigu, Poruma, Warraber
     e Masig, e pediu medidas para "secure the communities' safe existence on their respective islands". UCC, banco de casos:
     https://www.ucc.ie/en/youthclimatejustice/caselawdatabase/billy-v-australia.html
  - **NÃO CONFERIDO (site recusou):** a decisão da ONU no site do ACNUDH (403); a sentença do caso Pabai v Commonwealth (No 2) [2025] FCA 796, de
    15/07/2025, que negou o dever de cuidado (o tribunal e três escritórios deram 403).
  - **A confirmar:** a altura máxima de Saibai (a busca dá 1,7 m) e a população de hoje (Census 2021).
- **A medida nossa** (dados: OSM e Natural Earth; o modelo de elevação aberto da Geoscience Australia; a maré da Bureau of Meteorology; conta minha):
  - A fração da área de Saibai abaixo da maré astronômica mais alta (o DEM contra a maré do porto mais próximo): "X % da ilha fica abaixo da maré".
  - As distâncias: Saibai a ~3 km da Nova Guiné, a **105 milhas do cabo York** e a **1.836 milhas de Canberra**.
- **Os 3 atos** (~13 min):
  1. A geografia: o estreito raso, a ponte de terra que afundou, as ilhas de lama do Fly contra as ilhas de pedra do sul.
  2. A geopolítica: Queensland, a independência de Papua-Nova Guiné, o tratado de 1978 que deixou as ilhas australianas.
  3. O hoje: as marés, os muros rompidos, o caso na ONU (2022) e no tribunal (2025), e a pergunta de para onde iriam.
- **A miniatura:** a costa da Nova Guiné e o cabo York em relevo amarelo; **Saibai e Boigu em vermelho**, coladas na costa de cima; **em ciano**, a
  pluma do rio Fly; a linha da fronteira em branco; uma seta branca grossa do Fly às ilhas. Na caixa preta, **"GOING UNDER"** (a B: "STILL AUSTRALIA").
- **As buscas prováveis** (não medido no vidIQ): "torres strait islands", "saibai island", "torres strait climate case", "australia papua new guinea
  border", "boigu island".
- **A concorrência** (os 3 mais próximos):
  - "Australia’s Torres Strait islands: Swallowed by the sea" (Al Jazeera English, 16/11/2022, **89.124**, 25:19);
  - "Fears remote Torres Strait islands will be underwater this century" (ABC News Australia, 26/10/2021, **8.320**, 2:15);
  - "Saibai Island sea wall completed amidst climate change concerns" (Qldaah, 15/07/2017, **5.760**, 2:03).
  - Nenhum acima de 100 mil, nenhum em 2026. **Fica de pé.**
- **Os riscos:** **ainda não é inabitável**: as pessoas moram lá, e o título não pode prometer o que não é ("Going Under" é a palavra dos próprios
  ilhéus, com fonte). Tema indígena e político (os casos na ONU e no tribunal): o vídeo conta, não advoga. Os fatos dos tribunais não foram lidos. O
  nome é pouco buscado. Imagem: escassa e com licença a ler (a conferir no Commons, na NASA e no Landsat).
- **A nota: 4,5.** O mapa é o melhor da lista (a ilha australiana colada na Nova Guiné, feita da lama dela), e a Austrália pesa. Cai porque não é
  inabitável ainda e porque os fatos dos tribunais ficaram sem leitura.

## 7 · Lismore, Nova Gales do Sul (`lismore`) · **4,0**

- **Título de trabalho:** "Why Australia Is Paying People to Leave Lismore" (47).
  - Variantes: "Why Lismore's Flood Zone Can Never Have Homes Again" (51); "Why Lismore Keeps Drowning" (26).
- **O mecanismo:** a cidade nasceu no encontro de rios numa planície de cheia; a cheia de 2022 passou o recorde em mais de 2 metros, e o governo
  passou a comprar as casas e a proibir moradia na terra comprada.
- **O gancho:** "In 2022, the river at Lismore rose more than seven feet above its old record. Since then, the government has been buying homes on the
  floodplain, and that land can never hold a house again. So why was a town built there?" (42 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "The highest flood on record in Lismore was on 28 February 2022, when the flood level reached 14.4m"; antes, "the record was held at 12.11m, with
     floods in February 1954 and March 1974"; em março de 2017, 11,6 m. Lismore é "one of the most flood-prone urban centres in Australia". Lismore City
     Council, Past floods: https://www.lismore.nsw.gov.au/Community/Natural-hazards-and-emergencies/Floods/Past-floods
  2. "While buyback land cannot be used for housing"; Lismore tem "more than 50 hectares of buyback land", em quatro bairros (Lismore Centre, North,
     South e East Lismore), em áreas de "a severe risk of future flood damage and a high risk to life and safety". NSW Reconstruction Authority
     (atualizado em 11/09/2026): https://www.nsw.gov.au/departments-and-agencies/nsw-reconstruction-authority/our-work/resilient-homes-program/home-buybacks/future-buyback-land-use
  3. "83 flood-affected properties, bought by the Government through the $880 million Resilient Homes Program" foram postas à venda para remoção;
     "Around 1600 homeowners in the flood-prone areas of the Northern Rivers may be eligible". Governo de NSW (03/10/2025):
     https://www.nsw.gov.au/ministerial-releases/lismore-buyback-homes-auction-ramps-up
  - **A confirmar:** quantas casas foram recompradas ao todo; o encontro do Wilsons River com o Leycester Creek e o dique da cidade; as mortes de 2022
    em Lismore; a leitura da Bureau of Meteorology (o recorde anterior varia de 12,11 a 12,27 m conforme a fonte).
- **A medida nossa** (dados: a régua da Bureau of Meteorology; o modelo de elevação da Geoscience Australia; o mapa da recompra; conta minha):
  - 14,4 − 12,11 = **2,29 m (7,5 pés) acima do recorde**; a área da cidade abaixo da cota de 2022 no DEM, em acres; os 50 ha de recompra contra ela.
- **Os 3 atos** (~13 min):
  1. A geografia: o vale, os rios que se juntam, a planície onde a cidade cresceu por causa do rio.
  2. A história: 1954, 1974, 2017 e 2022, e o dique que não segurou.
  3. O hoje: a recompra, as casas levadas de caminhão, a terra que não pode ter casa, os ocupantes de 2025.
- **A miniatura:** o vale do Northern Rivers em relevo amarelo; **os bairros de recompra em vermelho**; **o Wilsons River e o Leycester Creek em
  ciano**, se encontrando; uma seta branca grossa no encontro. Na caixa preta, **"NO HOMES"** (a B: "UNLIVABLE").
- **As buscas prováveis** (não medido no vidIQ): "lismore floods", "lismore flood 2022", "lismore buyback", "northern rivers floods".
- **A concorrência** (os 3 mais próximos):
  - "These squatters are living in abandoned flood-prone homes" (ABC News In-depth, 20/03/2025, **45.938**, 7:22);
  - "Buyback plan for flood-prone homes in the Northern Rivers" (News24, 27/10/2022, **2.604**, 0:43);
  - "Squatters fight to remain in buyback homes in flood-ravaged community" (sem leitura da página; da busca).
  - Só reportagem; nenhum explicador. **Fica de pé.**
- **Os riscos:** é "inabitável" por lei em parte de uma cidade viva, não um lugar vazio; trauma recente (2022) e briga política (a recompra, os
  ocupantes); fora da Austrália, o nome não diz nada. Imagem: governo de NSW e ABC (licença a ler), Sentinel e Landsat de 2022.
- **A nota: 4,0.** A Austrália, uma lei que se pode citar e um número de régua, mas um lugar pouco conhecido fora dela e um tema de notícia.

## 8 · Attu, Alasca (`attu`) · **4,0**

- **Título de trabalho:** "Why America Never Let Anyone Go Back to Attu" (44).
  - Variantes: "Why Nobody Lives on Attu, America's Westernmost Island" (54); "Why Attu, Alaska, Has Been Empty Since 2010" (43).
- **O mecanismo:** a ilha mais distante do Alasca, mais perto da Rússia que de Anchorage, entrou na guerra; o Japão levou a aldeia, e o governo
  americano julgou a volta cara demais; o último posto (da Guarda Costeira) fechou em 2010.
- **O gancho:** "In 1942, Japan took the whole village of Attu, Alaska, to a prison camp in Hokkaido. Almost half never came home. The survivors were not
  allowed to go back. Today the island is empty. Why did America let it go?" (40 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "Forty-two Attuan villagers were taken and held as prisoners in Otaru, on Hokkaido, for more than three years." "Almost half of the Attuans died,
     many from malnutrition and starvation." Na volta, "they were not allowed to go back to Attu" e "were instead taken to the village of Atka"; "Attu
     would never be permanently repopulated." O governo julgou "some of the more remote and smaller villages too costly to travel to." NPS, Aleutian
     WWII: https://www.nps.gov/aleu/learn/historyculture/attuans-wwii-experience.htm
  2. "From June 3 to 7, 1942, Japanese forces attacked Alaska's Aleutian Islands"; "On May 11, 1943, 12,500 U.S. soldiers landed"; EUA: 549 mortos e 1.148
     feridos; Japão: 2.351 mortos e 28 capturados; "the weather was responsible for more American casualties than enemy fire." NPS, Battle of Attu:
     https://www.nps.gov/articles/000/battle-of-attu.htm
  3. "When the Coast Guard decommissions the station on August 26, Alaska's westernmost island will be left uninhabited"; o LORAN, "outdated", e a
     economia de "$36 million a year". Alaska Public Media (16/08/2010): https://alaskapublic.org/2010/08/16/coast-guards-western-most-station-to-be-decomissioned
  - **A confirmar:** a população da aldeia em 1942 (as fontes dão de 40 a 45); o número de sobreviventes (24 ou 25); o motivo dado em 1945 para não
    deixá-los voltar (o site do consulado do Japão em Anchorage recusou, 403).
- **A medida nossa** (dados: GNIS, Natural Earth; conta minha):
  - Attu fica a **606 milhas de Petropavlovsk (Kamchatka)** e a **1.473 milhas de Anchorage**; a **529 milhas de Atka**, onde os sobreviventes foram
    postos; a **1.616 milhas de Otaru**, onde ficaram presos.
  - A ilha (o número da Fish and Wildlife Service, a ler) contra estados pequenos: a maior ilha sem morador dos EUA.
- **Os 3 atos** (~14 min):
  1. A geografia: o arco das Aleutas, o fim do mapa, o 180° atravessado, a neblina e o vento.
  2. A guerra: 1942, a aldeia levada ao Japão, a batalha de 1943 no frio, os que morreram em Otaru.
  3. O depois: Atka, a ilha que ninguém repovoou, o LORAN até 2010, o vazio de hoje.
- **A miniatura:** o arco das Aleutas e Kamchatka em relevo amarelo; **Attu em vermelho**, na ponta esquerda; **Atka em ciano**; uma seta branca
  grossa de Attu ao Japão e outra do Japão a Atka. Na caixa preta, **"NEVER RETURNED"** (a B: "UNLIVABLE").
- **As buscas prováveis** (não medido no vidIQ): "attu island", "battle of attu", "aleutian islands ww2", "westernmost point of the us", "attu alaska".
- **A concorrência** (os 3 mais próximos):
  - "Frozen Terror: The Forgotten WWII Battle in Alaska" (Dark Docs, 1,21 mi inscritos, 15/09/2020, **698.237**, 12:14), a batalha;
  - "Remembering the Battle of Attu" (U.S. Fish & Wildlife Service, 18/05/2018, **69.887**, 7:30);
  - "Exploring Alaska's most distant Island" (Somerset, 29/06/2024, **10.128**, 2:39).
  - **Colide em parte.** O porquê do vazio (a aldeia que não voltou) não tem vídeo; mas a guerra, que é metade do mecanismo, tem um de 698 mil. Um
    cético estrito derruba. Fica como 8º para a Sala decidir.
- **Os riscos:** o povo unangax̂ sofreu duas vezes (o cativeiro no Japão e, nas outras aldeias, a internação pelo próprio governo americano em
  1942): o vídeo nomeia, cita o NPS e não romantiza a "ilha fantasma". O tema é mais história de guerra que geografia. Imagem: farta e livre (NARA,
  Exército, FWS).
- **A nota: 4,0.** Alasca, guerra e uma pergunta que ninguém respondeu, mas a colisão com a batalha e a geografia fraca no porquê seguram.

---

## A lista inteira: 20 candidatos, em uma linha cada

Todos vistos em 17/11/2026, na busca de concorrência (a busca da web e a página `/watch`). Views de ~22h.

| # | Candidato | Mecanismo | Destino |
|---|---|---|---|
| 1 | Kahoʻolawe (HI) | bombas da Marinha + sombra de chuva | **desenvolvido, 6,0** |
| 2 | A orla de Hilo (HI) | tsunami concentrado pela baía; orla sem moradia | **desenvolvido, 5,5** |
| 3 | Maralinga (Austrália) | ensaios nucleares britânicos | **desenvolvido, 5,0** |
| 4 | Newtok (AK), com Kivalina e Shishmaref | permafrost e erosão | **desenvolvido, 5,0** |
| 5 | Lemieux (ON) e Saint-Jean-Vianney (QC) | argila do mar de Champlain | **desenvolvido, 4,5** (Unseen Canada, 01/09/2026, 67.409) |
| 6 | Saibai e Boigu (Torres) | ilhas de lama, maré e mar que sobe | **desenvolvido, 4,5** (ainda habitadas) |
| 7 | Lismore (NSW) | planície de cheia; terra recomprada sem casa | **desenvolvido, 4,0** |
| 8 | Attu (AK) | guerra e distância | **desenvolvido, 4,0** (colide em parte com Dark Docs, 2020, 698.237) |
| 9 | A Zone Rouge (França) | munição e arsênico da 1ª Guerra | caiu: "Red Zones, Northern France" (Places, 28/12/2023, 275.596) |
| 10 | Picher (OK) | minas de chumbo e zinco, solo oco | caiu: "The Town of Silent Poison" (Keep Curious Co., 14/06/2023, 3.026.349) |
| 11 | Times Beach (MO) | dioxina e a cheia do Meramec | caiu: Plainly Difficult (20/02/2021, 588.660) e Paul McAllister (23/06/2026, 158.257) |
| 12 | Wittenoom (Austrália) | amianto azul | caiu: Free Documentary (25/12/2019, 1.814.963) e Nivag (01/07/2023, 171.306) |
| 13 | A velha Valdez (AK) | o chão do delta que escorregou em 1964 | caiu: "The 1964 Tsunami in Valdez" (USGS, 26/03/2024, 237.439), um explicador do mecanismo |
| 14 | Amchitka (AK) | o teste Cannikin | caiu: Dark Footage (04/08/2022, 1.412.513) |
| 15 | O atol de Bikini | testes nucleares | caiu: Battle Ensign (13/10/2026, 91.396) e Places (23/01/2025, 72.453), e lugar gasto |
| 16 | Plymouth, Montserrat | vulcão; a capital na zona de exclusão | caiu: "The Caribbean Capital City... That is a Ghost Town" (Places, 21/04/2025, 318.807) |
| 17 | Holland Island (MD) | erosão e afundamento da baía de Chesapeake | caiu: IT'S HISTORY (11/03/2023, 304.607) |
| 18 | Isle de Jean Charles (LA) | o delta que some | caiu: a Luisiana está saturada (8 vídeos em 2026, `demanda.md` §3); CBS (2019, 41.638) |
| 19 | Cairo (IL) | a confluência e as cheias | caiu: "Why This Illinois City Built a Gate to Seal Itself Off" (IT'S HISTORY, 03/04/2026, 875.339); e não é inabitável |
| 20 | Big Diomede (Rússia, a 2,4 mi do Alasca) | a Guerra Fria tirou os moradores (1948, a confirmar) | caiu: "Examining Big Diomede Island…" (Geomargin, 14/03/2026, 49.778), o mesmo ângulo, e Little Diomede (24/09/2026, 102.437) |

Também olhados e deixados de lado (sem desenvolver): a DMZ da Coreia ("The Korean DMZ is Stranger than You Think", Places, 2025, 97.069; lugar gasto),
o Danakil (Radhika Nomllers, 2022, 158.984; e lá mora gente), Tuvalu e o tratado Falepili (não é lugar australiano; ABC 51.314 e Firstpost 56.828, e o
"Tuvalu afunda" é antigo), Diego Garcia (política em curso: o tratado do Reino Unido com Maurício e os chagossianos de volta às ilhas em 2026), Frank
Slide (AB; o lugar não é inabitável hoje), Lytton (BC; o porquê da demora é burocracia, não geografia), Banaba (pouco reconhecida) e o atol Johnston
(pouco reconhecido; não checado a fundo).

---

## O meu top 4

1. **"Why Kahoolawe Is the Hawaiian Island Nobody Can Live On" · 6,0.** Mecanismo: 50 anos de bombas da Marinha (geopolítica) numa ilha que a sombra de
   chuva do Haleakalā já deixava seca e as cabras deixaram sem solo (geografia). A medida: só 1 acre em 10 limpo para cavar. O vídeo mais próximo:
   "Reclaiming Kahoolawe - History of Bombing" (Hawaii News Now, 27/02/2018, 17.096 views).
2. **"Why Hilo Turned Its Waterfront Into a Park" · 5,5.** Mecanismo: a baía em funil concentra os tsunamis do Alasca e do Chile; depois de 1960 a
   orla virou parque. A medida: Hilo tem 177 das 300 mortes por tsunami registradas no Havaí (59 %), e Honolulu, zero (NOAA NCEI). O vídeo mais próximo:
   "Shinmachi: Stronger Than a Tsunami" (PBS Hawaiʻi, 01/04/2021, 49.355); o cinejornal da CBS de 1960 tem 115.506 (arquivo).
3. **"Why Part of Australia Is Still Off-Limits After Britain's Nukes" · 5,0.** Mecanismo: a bomba britânica da Guerra Fria, testada no deserto mais
   vazio do Império, deixou plutônio num chão seco. O vídeo mais próximo: "Maralinga Mystery" (Alan Parkinson, 01/06/2016, 32.869); em 2026, só
   "Maralinga: How Britain Tested Nuclear Weapons in the Outback" (Iron Minds, 18/08/2026, 1.927).
4. **"Why Alaska Had to Abandon the Village of Newtok" · 5,0.** Mecanismo: o permafrost que derrete e o rio que comia ~70 pés de margem por ano; em
   2024, todo mundo saiu. O vídeo mais próximo: "Permafrost thawed by climate change threatens remote villages in Alaska" (PBS NewsHour, 20/10/2025,
   84.863).

Por que nesta ordem: Kahoʻolawe é o único inabitável de verdade com as duas metades do pedido (geopolítica e geografia) e sem nenhum explicador. Hilo
tem a busca mais forte e a medida mais limpa, mas depende de um fato de lei não lido. Maralinga traz a Austrália e a geopolítica com concorrência
pequena, mas o número central diverge entre as fontes. Newtok é EUA e inabitável de verdade, mas o nome não é buscado e a notícia já correu.

## O que ficou a confirmar de mais importante

1. **Hilo:** a portaria de 1960 que proibiu reconstruir na área inundada (o documento do condado recusou, 403). Sem ela, o "ninguém pode morar" vira
   "ninguém voltou a morar". E o mecanismo da baía por fonte primária (USGS ou NOAA).
2. **Maralinga:** o tamanho da zona sem moradia permanente, 120 km² (SA History Hub) ou 412 km² (SBS). A ARPANSA, que tem o limite oficial, não
   respondeu duas vezes; e o artigo dos 22,2 kg de plutônio pediu reCAPTCHA.
3. **Kahoʻolawe:** a área da ilha e a chuva anual (o relatório da USGS recusou, 403), os usos que a lei estadual permite (o site do Legislativo
   recusou, 403) e o estado da limpeza depois de 2004.
4. **Concorrência:** nada foi medido no vidIQ, e a busca da web não prova ausência. O primeiro teste é a colisão do título dos quatro de cima, e a
   procura por "kahoolawe", "hilo tsunami", "maralinga" e "newtok" (a busca deles pode ser pequena).
5. **Saibai e Lemieux:** a sentença do caso Pabai (2025) e a decisão da ONU no site oficial (403); quanto do povoado de Lemieux a corrida de 1993 levou.

---

## Os arquivos de trabalho

Em `out/_pautas/video-8/_trabalho/inabitavel/`:
- `lote-a.jsonl` a `lote-d.jsonl` e `lote-e-longo.jsonl`: as leituras das páginas `/watch` (pelo `../yt_meta.py` e pelo
  `../cetico-banff/yt_meta_longo.py`), 140 vídeos;
- `ncei_hilo.py`, `ncei-hilo-saida.txt` e `ncei-havai.json` (1,1 MB): as ondas de tsunami do Havaí na base da NOAA; `ncei_sonda.py`: o teste do filtro
  da API (o filtro por nome de lugar não funciona; o por estado, sim);
- `medidas.py` e `medidas-saida.txt`: as distâncias e as frações;
- `titulos.py`: a contagem dos títulos (limite 65) e das palavras dos ganchos.

O PDF da AECOM para a TSRA (6,5 MB) ficou fora do canal, na pasta de resultados de ferramenta da sessão; não foi copiado para `out/`.
