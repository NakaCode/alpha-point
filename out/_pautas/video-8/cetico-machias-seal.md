# Cético: `machias-seal` (a ilha Machias Seal, o farol com faroleiros e a zona cinzenta), 18/11/2026

**Veredito: DERRUBADO. Nota: 3,0 / 10.**

A régua é a nova do Lucas, que ele escreveu no chat da Sala em 18/11/2026:
- "Eu preciso arriscar em algo mesmo que já exista... Desde que não seja atual";
- "Algo chamativo, não necessariamente que vá ganhar em pesquisa, mas em curiosidade".

Por essa régua, vídeo antigo, mesmo grande, não derruba. Derrubam a onda do momento e o título igual ou quase igual dos últimos 12 meses. Esta pauta cai nas duas.

**Por que cai:**
1. **O título de trabalho já está no ar, quase palavra por palavra, três vezes em 10 dias.** "Why Canada Pays Two People to Live on a Rock
   the U.S. Claims" encontra:
   - "Canada pays 2 people to live on this rock so the US can't take it" (Drawn Lines, 13/11);
   - "Canada Pays Two People to Live on This Rock. Just So the US Can't Have It." (MapTales World, 11/11);
   - "Canada Pays 2 People to Live on This Rock. The US Wants It" (Odd Atlas, 08/11);
   - e o longo "Canada Keeps Two People on This Rock. The US Says It's Maine." (The Price of the Map, 08/11, 9:40).
   - O chamariz da pauta, o faroleiro pago para marcar posse, é o gancho do próprio enxame.
2. **A onda é agora, e está crescendo.**
   - A página das 50 peças mais novas sobre a ilha só volta até 02/10/2026: são ~46 peças sobre a disputa em 8 semanas, e **8 delas
     longas**.
   - Foram 5 peças entre 13 e 17/11.
   - O gatilho foi o mapa que Trump postou em 07/09/2026, com o Canadá dentro dos EUA. A Newsweek de 08/09 cita a ilha nominalmente.
3. **O ângulo inteiro já foi feito, com as nossas fontes primárias.** O longo da The Price of the Map (08/11) conta:
   - a carta de 1621, o artigo 2 de 1783 e a decisão de Ghent de 1817;
   - o ponto A de Haia, o registro da Parks Canada e a zona cinzenta.
   - Os antigos grandes ocupam o resto: o Half as Interesting (2018, 997 mil), a The Atlantic (2018, 102 mil, 16 min) e o Off the Cuff
     (2022, 219 mil, 25 min, a lagosta).

**O que a pauta tem de bom, e não salva:**
- Os fatos centrais se seguram na fonte primária:
  - o governo do Canadá diz, com essas palavras, que mantém faroleiros em Machias Seal "for sovereignty reasons", a única exceção entre
    os 51 faróis com gente;
  - o Departamento de Estado lista a ilha como disputada (2023);
  - a linha de Haia começa a 23,5 milhas da ilha (a nossa conta).
- A medida é nossa: a zona cinzenta da lei do Maine mede **734 km² (283 mi², 214 milhas náuticas quadradas)**. Isso explica a briga de
  números da imprensa: os 210 do Maine e os 277 dos jornais são a mesma área, em unidades diferentes.
- Mas o "700 km²" e o "277 square miles" já estão nos curtos.
- A busca pelo nome é mínima: "machias seal island" fica abaixo de 750 buscas/mês.

Lido entre ~01:16 e ~01:30 de 18/11/2026 (hora de Brasília, pelo `date` do Git Bash). Os scripts, as respostas e as saídas estão em
`out/_pautas/video-8/_trabalho/cetico-machias-seal/`:
- `vidiq.tsv`: as 5 chamadas (25 créditos, abaixo do teto de 30), com as linhas que importam. A maior resposta está em `vidiq/`;
- `vq.py`: lê o JSON do vidIQ;
- `watch.jsonl`: as 8 páginas `/watch` lidas pelo `../yt_meta.py`, uma a cada 1,5 s;
- `area_zona_cinzenta.py` e `area-zona-cinzenta-saida.txt`: a área da zona cinzenta;
- `geo_e_commons.py` e `geo-commons-saida.txt`: as distâncias pelo Nominatim (OSM) e as categorias do Commons. API, um pedido por vez,
  com o User-Agent do canal;
- `titulos_len.py` e `titulos-len-saida.txt`: a contagem de caracteres dos títulos;
- `pdf_texto.py` e `fontes/`: as páginas e os textos oficiais lidos (DFO, ECCC, Parks Canada, Federal Register, Avalon e o Maine DMR).

Ficaram em `midia/_pautas/video-8/cetico-machias-seal/`, fora do git:
- os dois PDFs do Maine DMR, com o sha256:
  - `maine-dmr-ch25.pdf`, `94c2a64a…72d8`;
  - `maine-dmr-ch25-mapa4.pdf`, `466b6f64…7835`;
- e as duas páginas de notícia (Newsweek e Seafoodnews).

## 1. Os fatos que seguram o paradoxo e o gancho

| # | Fato | Fonte (lida em 18/11/2026) | Veredito |
|---|---|---|---|
| F1 | "The Government of Canada continues to operate 51 staffed lighthouses across the country": 1 em New Brunswick, 27 na Colúmbia Britânica e 23 em Terra Nova e Labrador. "The government manages and maintains most of these lighthouses for operational purposes. **One exception is Machias Seal Island in the Gulf of Maine, where lightkeepers continue to staff the lighthouse for sovereignty reasons.**" | Fisheries and Oceans Canada, *Lighthouses in Canada* (modificada em 09/10/2024): https://dfo-mpo.gc.ca/otw-am/lighthouses-phares/canada-eng.html | **CONFERE**. É o fato mais forte da pauta, e está na voz do próprio governo. Também segura "o único farol com faroleiro nas Marítimas": Nova Escócia e Ilha do Príncipe Eduardo não têm nenhum. |
| F2 | "Dois faroleiros, em turnos de 28 dias" | WNYC (2015), lighthousefriends e CBC (recusou leitura na rodada 3) | **NÃO CONFERIDO** na fonte primária. O "Two People" do título se apoia em fonte secundária. |
| F3 | "Os custos são pagos pela Global Affairs Canada" | Só a Wikipedia e o lighthousefriends | **NÃO CONFERIDO**. "Canada pays" vale de qualquer modo, porque o F1 é do governo. O ministério que paga, não. |
| F4 | O farol: "The present tower and previous structures on the site have served this role **since 1832**. Originally constructed during the colonial period of New Brunswick… **the continued presence of a Canadian lighthouse established a sovereignty claim over the island**. This claim however, was disputed by the United States." A torre de hoje é de 1914. A ilha é "a remote treeless, **15-acre**, granite island". | Parks Canada, Directory of Federal Heritage Designations, FHBRO 87-125: https://www.pc.gc.ca/apps/dfhd/page_fhbro_eng.aspx?id=3156 | **CONFERE**. Uma frase dali não vai à tela: a Parks Canada diz que a posse foi "not fully recognized in law until 1925", e os EUA não reconhecem. |
| F5 | A ilha: "a tiny, treeless oceanic island rising barely 9 metres above sea level", "20 kilometres off the southwestern tip of Grand Manan", "**roughly 550 metres long and 250 metres wide**". O santuário tem 10 ha e foi criado em 1944. A terra é da DFO e o manejo, do Canadian Wildlife Service. A entrada é proibida em junho e julho, "via the existing tour operators" à parte. Os papagaios-do-mar são "well over 1000 pairs", e as tordas, ~100 pares. | Environment and Climate Change Canada, *Machias Seal Island Migratory Bird Sanctuary*: https://www.canada.ca/en/environment-climate-change/services/migratory-bird-sanctuaries/locations/machias-seal-island.html | **CONFERE**. **Os "20 acres" NÃO CONFEREM** como número firme: a Parks Canada diz 15 acres, a ECCC 10 ha (o santuário) e a Wikipedia 8 ha. Na tela: "about a third of a mile long". Os "5.000 pares" das empresas de passeio também não conferem com a ECCC. |
| F6 | A reivindicação dos EUA: "The U.S. maritime limits from points 1 to 12 in areas adjacent to Canada do not correspond to limits of the maritime zones claimed by Canada, **due to the dispute between the United States and Canada relating to the sovereignty over Machias Seal Island and North Rock**. The line defined by points 12 to 15 reflects the judgment of a chamber of the International Court of Justice". | Departamento de Estado, Public Notice 12243, *Exclusive Economic Zone and Maritime Boundaries; Notice of Limits*, 88 FR 88477 (21/12/2023): https://www.govinfo.gov/content/pkg/FR-2023-12-21/html/2023-28158.htm | **CONFERE**. **O "since 1783" como fala dos EUA NÃO CONFERE na origem.** A Bangor Daily News e a CBC recusaram. A frase só aparece de segunda mão: o Western Journal, citando o Washington Post, e a Newsweek de 08/09/2026, com "The U.S. points to post-war treaties". |
| F7 | Haia parou antes da ilha. O ponto 12 do aviso (o ponto A da Corte) fica em 44°11′12″ N, 67°16′44″ W (WGS 84). **A nossa conta: o ponto A fica a 37,9 km (23,5 mi; 20,5 milhas náuticas) do farol.** Entre o fim da fronteira terrestre e o ponto A, não há linha acordada. | O aviso de 2023 (F6), com o farol pelo Nominatim (`geo-commons-saida.txt`). **A sentença de 1984 NÃO FOI LIDA**: icj-cij.org respondeu com o desafio da Cloudflare ("Just a moment…"), e não houve contorno. | **CONFERE COM AJUSTE**. "A linha da Corte começa a 23 milhas da ilha" se segura. "As partes mandaram a Corte começar no ponto A" vem da sentença e do Special Agreement, que não foram lidos; fica para o navegador do app. |
| F8 | O tratado de 1783, art. 2: "comprehending all islands within twenty leagues of any part of the shores of the United States… **excepting such islands as now are or heretofore have been within the limits of the said province of Nova Scotia**." | Avalon Project (Yale): https://avalon.law.yale.edu/18th_century/paris.asp | **CONFERE**. A ilha está bem dentro das 20 léguas. A briga é a exceção: ela era ou não da Nova Escócia? |
| F9 | Ghent (1814, art. 4) mandou a comissão decidir só "the several Islands in the Bay of Passamaquoddy… and the Island of Grand Menan". A decisão de 24/11/1817 deu Moose, Dudley e Frederick aos EUA, e "all the other Islands" de Passamaquoddy e Grand Manan ao rei. **Machias Seal não é citada.** | Avalon: https://avalon.law.yale.edu/19th_century/ghent.asp e https://avalon.law.yale.edu/19th_century/ghentcom.asp | **CONFERE**. "Ghent resolveu a ilha" é falso. |
| F10 | A zona cinzenta na lei: "'Gray Zone' means all waters surrounding Machias Seal Island, off of Eastern Washington County, and within the following two boundaries", com 12 pontos a leste e 42 a oeste, que se encontram no ponto A. A adoção, de 2019: "approximately **210 square miles** around Machias Seal Island where there are overlapping claims of sovereignty by the United States and Canada". Foi feita a mando do Legislativo (Resolves 2019, ch. 23), com base no "US Federal Register for boundary information". | Maine DMR, Chapter 25, 25.02 D: https://www1.maine.gov/dmr/sites/maine.gov.dmr/files/inline-files/Chapter25_11052023.pdf; MAPA-4: https://www1.maine.gov/dmr/sites/maine.gov.dmr/files/docs/Chapter25_MAPA4_SOS_WEB.pdf | **CONFERE**. A fronteira leste repete os pontos 1–12 do Departamento de Estado, no datum antigo. A oeste, a regra não explica de onde vem. A área medida está em §4. O mapa da proposta (MAPA-3), em www.maine.gov, deu 403 da CloudFront por país e ficou NÃO LIDO. |
| F11 | Em 2018, a Border Patrol parou barcos canadenses na zona cinzenta. A Global Affairs: "Canada's sovereignty over the Machias Seal Island and the surrounding waters is long-standing and has a strong foundation in international law." | Imprensa de 2018 (Globe and Mail, Time, Global News), só pelo resumo da busca | **NÃO CONFERIDO** na fonte primária. Serve de contexto, não de tela. |
| F12 | Em 08/09/2026, a Newsweek, sobre o mapa que Trump postou no dia 7: "the U.S. and Canada have one long-standing dispute over sovereignty involving two small features… Machias Seal Island and nearby North Rock". Cita também um relatório da DFO de julho de 2025 que chama o caso de "Grey Zone" dispute. | Newsweek (página lida e guardada em `midia/`), https://www.newsweek.com/trumps-expanded-us-map-includes-territories-locked-in-dispute-with-canada-12415865 | **CONFERE** como notícia, e é a data do gatilho da onda (§2). Responde ao "a confirmar" da rodada 3: o curto do "mapa do Trump" é o Border Oddities, de 01/10/2026 (4.385 views), e o mapa é de 07/09. |

**As palavras fortes demais:**
- **"two people"**: a fonte é secundária (F2). A frase verdadeira, com fonte primária: "Canada staffs 51 lighthouses. Fifty are for
  ships. One is for sovereignty."
- **"20 acres"**: não confere (F5). Na tela: "about a third of a mile long".
- **"the United States says the island has been American since 1783"** (o gancho da rodada 3): não conferido como fala dos EUA (F6).
  A frase verdadeira: "And the United States still lists it as disputed."
- **"the light runs automatically"**: não foi lido na origem. A DFO diz só que o farol tem gente "for sovereignty reasons" e não por
  operação (F1). É isso que vai à tela.
- **"Haia decidiu a fronteira e deixou a ilha de fora"**: verdadeiro no efeito, pelo aviso de 2023 (F7). O "por quê" (as partes
  escolheram o ponto A) não foi lido na sentença.

## 2. A colisão (vidIQ: 25 créditos, abaixo do teto de 30)

O saldo foi de 5.061 para 4.976. A diferença de 85 inclui outros agentes rodando ao mesmo tempo na mesma conta. As minhas chamadas
são as 5 do `vidiq.tsv`. As views e as datas abaixo são das páginas `/watch`, lidas às ~01:24.

**Os 5 mais próximos:**

| # | Título | Canal | Inscritos | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|---|
| 1 | Canada Keeps Two People on This Rock. The US Says It's Maine. | The Price of the Map | 173 | 1.879 | 08/11/2026 | 9:40 | **Sim, no título e no ângulo inteiro.** Os capítulos: "A rock with a payroll", "Six leagues", "Twenty leagues", "Grand Manan", "The light of 1832", "The grey zone", "The gap at Point A". As fontes: a sentença de 1984, Ghent de 1817, a carta de 1621 e a Parks Canada. |
| 2 | Canada pays 2 people to live on this rock so the US can't take it | Drawn Lines | 24 | 3.483 | 13/11/2026 | 0:52 | **Título quase igual ao nosso.** É curto, e sobe a ~34 views/h. |
| 3 | Canada Pays Two People to Live on This Rock. Just So the US Can't Have It. | MapTales World | 10 | 1.305 | 11/11/2026 | 0:25 | **Título quase igual.** O mesmo canal pôs um longo no dia 13/11: "The US and Canada Still Can't Agree Where Their Border Is", 4:27, 154 views (rodada 3). |
| 4 | Why This Island Might be in Canada or Might be in the US | Half as Interesting | 2,95 mi | 997.332 | 22/11/2018 | 5:30 | Antigo grande: pela régua nova, não derruba, mas ocupa a busca e o clique do assunto. |
| 5 | The Lobster Industry is PISSED about this Border Conflict | Off the Cuff | 156 mil | 219.231 | 20/07/2022 | 25:37 | Antigo grande, no ângulo da zona cinzenta e da lagosta, em longo. |

**Também perto, todos de 2026:**
- "Canada Pays 2 People to Live on This Rock. The US Wants It" (Odd Atlas, 08/11, 33 views);
- "Canada still pays keepers for a lighthouse that runs itself" (Encyclopedia, 08/11, 459);
- "Why Canada Keeps 2 People on This Tiny Island" (The Borderlines, 25/10, 1.198);
- "Canada Still Keeps Lighthouse Keepers on an Island the US Also Claims" (Mapping Globe, 18/10, 2.196; já com "277 square miles…
  four times… Washington, D.C.");
- "Why Do Two Men Live Alone Here — Just to Hold a Claim?" (UNTOLD AMERICA, 15/11, 530);
- "The Island Both the U.S. and Canada Claim" (Border Oddities, 01/10, 4.385: "Trump's new map… Canada pays two people to live on it");
- "Why the US and Canada can't agree on this island" (UnderTheMap, 27/09, 3.445: "the 700 square kilometer 'grey zone'").

**Antigos, sem data:**
- "A Surprising U.S.-Canada Border Dispute" (The Atlantic, 2018, 102.520, 16:11);
- "Lobster War" (filme inteiro, Gravitas, 2022, 57.568);
- um curto vietnamita de 03/2026 com 352 mil;
- o BlueGrid Media de 04/08/2026, com 25.940.

**A onda das últimas 8 semanas** (desde 23/09/2026; S3 e S4 do `vidiq.tsv`):
- **~46 peças sobre a disputa.** Ficam fora 5 vídeos de aves e 2 sem relação. É quase uma por dia, e 5 saíram entre 13 e 17/11.
- **8 longos (4 min ou mais) sobre a ilha:**
  - The Price of the Map, 1.879;
  - Saur Facto, 590;
  - The Conflict Desk ("MACHIAS SEAL ISLAND CAPTURED", 19:59), 340;
  - MapTales, 154;
  - UNTOLD AMERICA, 76;
  - The Offmap, 43;
  - America Off the Map, 38;
  - History Uncovered, 10.
  - Ficam fora duas listas que citam a ilha (Noviterra e ObjectAtlas).
- **Viral, nenhum:** o maior da janela tem 4.385.
- **A notícia** é o mapa de Trump de 07/09, com a Newsweek de 08/09. Fica 10 dias fora dos 2 meses, mas foi ela que acendeu o enxame:
  antes, eram ~10 curtos em agosto.

**Pela régua nova:**
- **O título igual ou quase igual nos últimos 12 meses** se cumpre sem dúvida, com três curtos e um longo em 10 dias. Derruba o título
  de trabalho e qualquer variante com "pays / keeps two people on this rock".
- **Os 3 ou mais longos com público em 8 semanas:**
  - ao pé da letra, há 8 longos;
  - acima de 500 views, há 2;
  - a Sala decide quanto "público" pesa.
- **No espírito, "a onda do momento" se cumpre.** É o enxame copiando um tema há 10 semanas, crescendo, com o nosso gancho exato.

## 3. O potencial real, pela régua

| # | Critério | `machias-seal` |
|---|---|---|
| 1 | O nome é buscado | **Não.** "machias seal island" tem volume 0, concorrência 41 e menos de 750 buscas/mês. Os nomes vizinhos: "bay of fundy", 7.575/mês; "grand manan", 4.644; "maine", 76.892 (Vietnã 58 %). O Big Sur veio da busca pelo nome; aqui não há busca. |
| 2 | Prova recente de interesse | **Sim, mas é a do enxame:** curtos de 1 a 4 mil, o BlueGrid de agosto (25,9 mil) e o vietnamita de março (352 mil). O interesse existe e já está sendo colhido. |
| 3 | O vídeo longo bem feito não existe | **Existe.** A The Price of the Map fez o explicador de 9:40 com as fontes primárias há 10 dias. Antes dele, o Half as Interesting (5:30, 997 mil), a The Atlantic (16 min, 102 mil) e o Off the Cuff (25 min, 219 mil). |
| 4 | O paradoxo em 3 frases, visível no mapa | **Sim, e é o melhor ponto da pauta:** a linha branca de Haia começa no mar e não chega à costa, e no buraco ficam a ilha e uma mancha vermelha de 734 km². |
| 5 | A geografia explica o porquê | **Pouco.** A disputa é de papel: uma exceção de 1783 e uma carta de 1621. A geografia entra na equidistância (a ilha a 17,9 km do Maine e a 19,0 km de Grand Manan) e na pesca, mas o porquê é jurídico. |
| 6 | Uma medida nossa, de dado aberto | **Sim, mas pequena** (§4). A área da lei do Maine é nossa. O número redondo ("700 km²", "277 square miles") já circula nos curtos. |

- **O enxame:** chegou em agosto, explodiu depois de 07/09 e já tem um longo bem feito. Não há lugar vago no longo, nem no gancho.
- **13 a 16 min, em 3 atos, sem linguiça: não.**
  - O núcleo é a rocha e o farol, o papel (1621, 1783, 1817, 1832, 1984) e a zona cinzenta. Dá ~10 min, e o longo da The Price of the
    Map mostra isso, com 9:40 e 9 capítulos.
  - Para chegar a 13–16, entram a lagosta e o aquecimento do golfo do Maine ou a família de disputas EUA–Canadá (Beaufort, Dixon
    Entrance). A primeira é o território do filme "Lobster War" e do Off the Cuff; a segunda, da Newsweek de 08/09 e de muitos vídeos.

## 4. A nossa versão: a medida (conta preliminar, feita)

**A área da zona cinzenta pela definição oficial do Maine** (`area-zona-cinzenta-saida.txt`):
- **O polígono:** a fronteira leste (12 pontos) e a oeste (42 pontos) da Chapter 25, 25.02 D. As duas se encontram no fim da fronteira
  terrestre, no canal de Grand Manan, e no ponto A de 1984. Depois do ponto A, as duas seguem a mesma linha da Corte, com área zero.
- **O método:** a área na esfera autálica do WGS 84, conferida por uma projeção de área igual (Lambert) e pelo shapely. As duas dão o
  mesmo número. As linhas se tocam perto do topo, numa lasca de 0,08 km² que não muda nada.
- **O resultado:** **734 km² = 283 milhas quadradas = 214 milhas náuticas quadradas.** São 65,6 km de norte a sul e 31,9 km de leste a
  oeste. A ilha e a North Rock ficam dentro, a 3,7 e 3,2 km da borda.
- **O achado:** a briga dos números é de unidade.
  - Os "approximately 210 square miles" da própria regra do Maine batem com as **214 milhas náuticas quadradas**.
  - Os "277 square miles" da imprensa (a The Atlantic em 2018, o Lobster War, o deputado Golden em 2025; a Foreign Policy de 2012 só pela
    descrição do Mapping Globe, não lida) batem com as **283 milhas
    terrestres quadradas**.
  - Os "70" (2014) e os "110" (2008) são outras definições.
  - Ninguém nos curtos explica a diferença.
- **A comparação:** a ilha tem ~550 × 250 m (ECCC). A água que ela põe em disputa é ~7 mil vezes a área do santuário (10 ha).

**As distâncias** (`geo-commons-saida.txt`; Nominatim/OSM, um pedido por vez):
- do farol ao farol de Little River, em Cutler: 17,9 km (11,1 mi);
- ao farol de Southwest Head, em Grand Manan: 19,0 km (11,8 mi);
- ao ponto A: **37,9 km (23,5 mi)**.
- A ilha fica quase no meio entre o Maine e Grand Manan: é por isso que cada lado traça a sua equidistância e ninguém cede.
- Curiosidade a conferir: o Nominatim põe o endereço do farol em "United States". É provável que seja coisa da atribuição de endereço
  do OSM, não uma posição de ninguém. Não vai à tela sem ler.

**O que a medida não salva:** o "700 km²" (UnderTheMap, 27/09) e o "277 square miles… four times D.C." (Mapping Globe, 18/10) já estão
no ar. A nossa novidade é a origem legal do polígono e a explicação das unidades. É detalhe de roteiro, não pauta.

## 5. O material

- **Mapa com geometria real:**
  - os pontos do Departamento de Estado (2023) e o polígono da lei do Maine (ambos públicos);
  - o Natural Earth;
  - as cartas náuticas da NOAA (governo dos EUA), que mostram a ilha;
  - o relevo amarelo da miniatura, pelo mesmo caminho do vídeo 7 (o ASTER GDEM pela GIBS).
- **Satélite aberto:** Landsat e Sentinel-2 cobrem a ilha (550 m: dá para ver, pequena).
- **Acervo livre: fino.**
  - O Commons tem 26 arquivos na categoria da ilha e 5 na do farol. As fotos da Melissa McMasters (CC BY 2.0) são as mesmas que o enxame
    inteiro usa.
  - As fotos da Parks Canada e da ECCC são Crown copyright e pedem a licença lida.
  - Papagaio-do-mar em vídeo, o banco pago tem farto.
- **Documentos:** os tratados (Avalon, domínio público), o aviso do Federal Register e a regra do Maine. A sentença de 1984 está no site
  da CIJ, que recusou leitura automática.
- **Dá para 13–16 min: não sem encher.** Dá para ~10 min.

## 6. O título e o gancho que eu defendo (só se a Sala passar por cima do veredito)

- **Título:** **"The Corner of the Bay of Fundy the U.S. and Canada Never Divided"** (64 caracteres).
  - Põe o nome buscado da vizinhança, "Bay of Fundy" (7,6 mil/mês). A regra do Maine, a ECCC e a Parks Canada põem a ilha e a zona "in
    the Bay of Fundy".
  - Não usa "rock", "two people" nem "keepers", as palavras do enxame.
  - Se paga no mapa: o buraco entre a costa e o ponto A.
- **Alternativas:**
  - "Why the U.S.-Canada Sea Border Stops 23 Miles Short of This Rock" (64): é medido (§4). A The Offmap tem "A Court Drew a Border
    Around This Island" (14/11), perto, mas não igual.
  - "Canada Staffs 51 Lighthouses. Only One Is There to Hold a Border" (64): a frase é da DFO (F1), mas o tema é o do enxame.
- **Gancho** (3 frases, 45 palavras, sem dar a resposta): "In 1984, judges at The Hague drew the sea border between the United States
  and Canada. Their line starts 23 miles from one small island, and the last stretch to shore was left blank. On that island, Canada
  pays lighthouse keepers, and not for the light."
- **Miniatura:**
  - a boca da baía de Fundy em relevo amarelo, sobre o mar azul;
  - **a zona cinzenta em vermelho**, com o polígono real da lei do Maine;
  - **a ilha em ciano**, minúscula, com uma seta branca grossa;
  - a linha de 1984 em branco, nascendo no ponto A e indo para sudeste, sem chegar à costa;
  - na caixa preta, **"NO LINE"**.
  - Nunca "WHOSE ROCK?": é a cara dos curtos.

## 7. Os pontos

- **K1 · GRAVE · O título de trabalho colide.**
  - Saíram três títulos quase iguais em 10 dias: Drawn Lines (13/11, 3.483), MapTales World (11/11, 1.305) e Odd Atlas (08/11).
  - Há ainda o longo "Canada Keeps Two People on This Rock" (The Price of the Map, 08/11).
  - Pela régua nova, isso derruba o título. E o chamariz do faroleiro pago é o gancho do enxame inteiro (§2).
- **K2 · GRAVE · A onda do momento.**
  - São ~46 peças em 8 semanas, 8 delas longas, com 5 entre 13 e 17/11.
  - O gatilho foi o mapa de Trump de 07/09, que a Newsweek ligou à ilha em 08/09.
  - Não há viral, e a notícia está 10 dias fora da janela de 2 meses. Mas o critério dos longos se cumpre ao pé da letra (8), e o
    espírito ("Desde que não seja atual") também: o assunto é atual e político.
- **K3 · GRAVE · O ângulo inteiro já foi feito, com as mesmas fontes.**
  - A The Price of the Map (08/11, 9:40) conta 1621, 1783, Ghent 1817, 1832, o ponto A e a zona cinzenta, com uma lista de "coisas
    que não são bem verdade".
  - Os antigos grandes cobrem o resto: o Half as Interesting (997 mil), a The Atlantic (102 mil) e o Off the Cuff (219 mil).
  - Não sobra ângulo nosso que não seja detalhe (§4).
- **K4 · MÉDIO · Sem busca.** "machias seal island" fica abaixo de 750/mês. A pauta viveria só da curiosidade, e a curiosidade está
  sendo colhida agora por ~1 peça por dia.
- **K5 · MÉDIO · É atual e político.** O mapa de Trump (07/09/2026), a guerra comercial com o Canadá, a zona cinzenta na revisão do
  USMCA (o deputado Golden, em dezembro de 2025) e a Casa Branca dizendo em 2025 que a ilha "is U.S. territory" (BDN, não lido). A voz
  teria de andar sobre ovos, e o Lucas pediu "Desde que não seja atual".
- **K6 · MÉDIO · Três números do título e do gancho não se seguram na fonte primária.**
  - Os "two people" (F2) e a Global Affairs pagando (F3) vêm só de fontes secundárias.
  - Os "20 acres" (F5) contradizem a Parks Canada (15 acres) e a ECCC (10 ha).
  - O "since 1783" como fala dos EUA (F6) não foi conferido.
  - A sentença de 1984 não foi lida (Cloudflare).
  - O que se segura: o F1 da DFO, o F6 do Departamento de Estado, os tratados e a nossa medida.
- **K7 · MÉDIO · Não sustenta 13–16 min.** O núcleo dá ~10 min (o longo da The Price of the Map tem 9:40). O resto viria da lagosta
  (território do Lobster War e do Off the Cuff) ou da família de disputas (Newsweek e muitos vídeos).
- **K8 · LEVE · A medida é nossa, mas não é nova.**
  - 734 km² (283 mi², 214 nmi²) pela lei do Maine. Explica os 210 contra 277 da imprensa, que são unidades diferentes.
  - O "700 km²" e o "277 square miles" já estão em curtos de setembro e outubro.
- **K9 · LEVE · Acervo livre fino.** São 31 arquivos no Commons, com as mesmas fotos CC BY que o enxame usa. A sentença da CIJ e o mapa
  da proposta do Maine (MAPA-3) recusaram leitura.

**Por que 3,0:**
- os fatos centrais se seguram melhor do que na rodada 3, porque agora são da DFO, do Departamento de Estado e dos tratados;
- o mapa da miniatura é forte, e a medida é nossa;
- mas a régua nova derruba exatamente o que esta pauta tem: o título quase igual dos últimos 12 meses (três vezes, em 10 dias) e a onda
  do momento (~46 peças em 8 semanas, 8 longas, crescendo);
- o longo bem feito já existe, a busca é mínima e o assunto é atual.
"Na dúvida, derrube", e aqui não há dúvida.

**O que a faria voltar:**
- o enxame passar (medir de novo em 3 a 6 meses, com S3 do `vidiq.tsv`);
- ou um ângulo vizinho e maior, ainda não medido: o próprio caso do golfo do Maine, com a linha de Haia cortando o Georges Bank, o
  bacalhau e a vieira. Seria pauta nova, com um cético próprio.
