# Laudo · verificador de fatos (independente, da Sala de controle) · rodada final · peru-agua

Revisão julgada: `44ec6a38887f` · data-base 2026-10-17

COBERTURA: 253 de 253 linhas da tabela com veredito "confirmada" (afirmações checáveis em 128 das 129 frases do texto falado de `44ec6a38887f`; a 129ª é a assinatura do canal, "You're at Alpha Point…", que não afirma nada). CHECADO POR INTEIRO.

- **O que foi julgado:** o texto falado inteiro de `roteiros/peru-agua/roteiro-narrador.md`, sha256 `44ec6a38887f3f1a8a848334714e7a441224465b65aeba5b972cc11857a33cf3`. `node roteiros/peru-agua/_ferramentas/gate.mjs`: PASSA, 2.041 palavras, 27 parágrafos, 129 frases, média 15,8, maior 31, gancho 166 palavras com o "But" na 44ª, um alerta de palavra ("still" em "As of late August 2026, that tunnel still had no construction date.", datado: aceito).
- **Como a lista foi derivada: à mão.** O canal não tem extrator de afirmações. Parti o texto falado nas 129 frases do portão (a mesma regex de `frasesDe`) e li cada uma contra o dossiê e a cópia local da fonte. Não li o laudo da rodada 1 antes de gravar a tabela e os achados.
- **O diff:** entre `_trabalho/roteiro-r1.antes.md` (127 frases) e o texto de hoje (129), 30 frases saíram e 32 entraram, todas com dono: as 26 trocas de `_trabalho/aplicado-r1.md` (L01–L26, com o aplicador em `SECO_OK` e `APLICADO`) e o P01 de `_trabalho/pedidos-r1-feito.md` (o 1º parágrafo de p2, o elo do mecanismo). Fora delas, o texto é idêntico. As 32 frases novas foram verificadas por inteiro contra a cópia local; as que não mudaram foram verificadas de novo também (a tabela cobre o texto inteiro, não só o delta).
- **Contra o quê:** o dossiê (`pautas/peru-agua/fundamento.json`, com `nomes`, `regras_de_pauta`, `correcoes_pos_sintese`, os laudos `_dimensoes/*.verificado.json` e o `transversal.json`) como mapa, e a cópia local de cada fonte (`midia/peru-agua/fontes/`) como prova. Rede: não usei. Nenhum site que recusa robô foi tocado (www.gob.pe, cdn.www.gob.pe e peru21.pe ficaram de fora, como o dossiê manda).
- **Três tipos de linha:**
  - **texto (167):** trecho literal da cópia `.txt`/`.csv` da fonte, como ela está, com o OCR (o Cobo de 1639 com "Noviemb re", o PUCP com "fué" e "Se trato"). A normal de Satipo vem do `wmo_normals_9120_PRCP.csv` da OMM (a linha da estação 81201), porque a folha `Satipo_81201.csv` não tem espaços e nenhum trecho dela chega a 4 palavras.
  - **imprensa (44):** Infobae (gen-21), Gestión (lim-14, lim-10), AFP pela ENCA (gen-22), KULTURAUSTAUSCH (gen-23) e a ProActivo (lim-06, que cita a SEDAPAL); cada trecho tem até 20 palavras.
  - **medição (42):** `roteiros/peru-agua/qc-roteiro/fatos-medidas.txt`, **regravado nesta tarefa** (M01–M46). Os números M da rodada 1 não valem mais: o arquivo é outro. Cada linha diz o número dito na voz, os termos da conta e a fonte de cada termo. As contas foram refeitas em Python: haversine (raio 6.371,0088 km) para as distâncias; 157/282 = 55,7 %; 189.167,18/1.815,61 = 104,2; 7.107.338,20 ha = 27.442 mi²; 645.172/6.207.967 = 10,4 %; 10.643.581/32.706.028 = 32,5 %; 14/7,8 = 1,79; 7,8/30 = 0,26; 2.013 mm = 6,6 pés; 5.000 m = 16.404 pés; 4.445 m = 14.583 pés; 22,0 km = 13,67 mi; 80 km = 49,7 mi. As contas sem número na voz ("more than half", "mostly desert", "more than doubled", "about a quarter", "nearly twice") estão em M07, M15, M21, M32 e M35, e na afirmacao da linha de texto da frase, porque o portão só aceita linha de medição com um número que a frase diz.
- **O portão de fatos do canal** (`node ferramentas/portao-fatos.mjs peru-agua`): PASSA, sha12 igual ao do gate, 253 confirmadas de 253, nenhum problema. Todo número dito (ano do documento, "two", "three", "seven", "19", "42", "180") está num trecho confirmado da própria frase.
- **Citações aspadas:** as três da voz conferidas letra a letra: "predominantly Andean" e "mostly coastal" (tradução fiel de "predominantemente andina" e "mayoritariamente costeña", INEI 2017/2018, doc-10; a tela deve marcar que é tradução) e "There are worms in the bottom of the tank" (AFP, 20/03/2025, letra a letra). Nenhuma com reticências.

NOTA: 9.5/10 · toda afirmação da revisão `44ec6a38887f` tem fonte local conferida, as decisões da Sala estão todas na voz, e nada do que a lista-r1 e o P01 mudaram quebrou fato em volta. Não chega a 10 por três apoios que dependem de composição declarada: Tacna na fronteira com o Chile (as duas linhas de 9.2); "three things", que simplifica o SENAMHI na leitura corrigida do dossiê (mec.afi-02); e o "less than 70 miles" medido do Campo de Marte, que fica em Jesús María, a uns 3 km do centro histórico.

## O que mudou, frase a frase, e o que a mudança tocou em volta

| Item | Frase de hoje | Conferido em |
|---|---|---|
| L23 (p1) | "A small part of the south drains into Lake Titicaca instead." | PNRH Cuadro 2.1 (Titicaca 3,81 % do território); INEA ("extremo surandino del altiplano peruano") |
| L04 (p1) | Loreto "is also one of its most thinly populated" | INEI 2017 (2,4 hab./km², só Madre de Dios abaixo); HKS ("the largest department in Peru") |
| L15, L16 (p2) | sai a 2ª atribuição ao SENAMHI; "three things keep the sea unusually cold…" | SENAMHI 2021 (Humboldt, afloramientos, nubes bajas; "anómalamente baja"); a hierarquia fica em 5.5 ("el causante principal") |
| P01 (p2) | "The cold sea chills the air above it, and the sinking air settles on top as a lid of warmer air." / "Under that lid, the moisture cannot rise to build a rain cloud." | SENAMHI 2021 ("estabiliza y enfría a la masa de aire"; "limitan el ascenso del aire para formar nubes productoras de lluvias"); Garreaud 2009 ("The subsidence also maintains an inversion layer") |
| L06 (p2) | "…and the cold water slows or stops rising." / "…heavy rain and floods, mostly in the north." | SENAMHI 2021 ("disminución o desaparición de los afloramientos"; "principalmente en el extremo norte de la Costa") |
| L05 (p2) | "mostly high up, and most of it from December to March" | ANA 2009 ("verano austral sobre la vertiente occidental"; "alrededor del 80%… de diciembre a marzo") |
| L17 (p2) | sai o cinturão de deserto com o Atacama ("more than 2,000 miles") | corte; o 9.2 termina em Tacna, na fronteira |
| L09 (p3) | "their valleys run as strips of green across the desert" | ANA 2009 ("originan los distintos valles costeños, separados entre sí por grandes planicies desérticas"); SENAMHI 2021 ("franja desértica… interrumpida por valles") |
| L22, L08 (p3) | Chan Chan "which UNESCO describes as…"; "once watered the land around it" | UNESCO 366 ("the largest earthen city of pre-Columbian America"; "sustaining the region around Chan Chan") |
| L21 (p3) | "a 2012 study reports that… puquios carry water to some fields." / "They are commonly attributed to the Nazca culture." | Lasaponara & Masini 2012 ("some of which are still used today"; "Middle Nasca") |
| L03 (p3) | "It did not put most of its people on the coast." | INEI 2026 (1940: Costa 28,3 %) |
| L25 (p4) | "…the region the census calls the coast, which covers only part of the dry side." | INEI (a Costa "se eleva hasta los 2000 mts"); a divisória corre mais alto (SENAMHI) |
| L24 (p4) | "The coast overtook the highlands as the most populous census region between 1961 and 1972." | INEI 2026 (1961: 39,0 × 52,3; 1972: 46,1 × 44,0) |
| L26 (p4) | "The political violence of the 1980s and '90s pushed many more." | CVR t. 6 (1980–2000, "medio millón") |
| L10 (p4) | "In 2022, the Lima region, with Callao, produced more than 40 percent…" | INEI lib1940 (41,9 %, "Lima incluye la Provincia Constitucional del Callao", 2022E/) |
| L11 (p4) | "The city drew newcomers: in 1993, almost four in ten…" | CVR t. 4 (38,8 %, censo de 1993) |
| L02 (p4) | "In 1971, 180 families took over a plot of land, and more followed." / "The government set out to resettle about 7,000 families…" | PUCP (Pamplona, 1971; "180 familias"; "alrededor de 7,000 familias"; "un extenso arenal") |
| L12 (p4) | "Census figures cited by Peru's truth commission put about one in four… by 1981." / "Peruvians call them barriadas." | CVR t. 4 (a tabela do INEI 1996: 1'171,800 de 4'608,010 = 25,5 %; "barriadas") |
| L19 (p5) | sai a estação de Marcapomacocha "about 65 miles" | corte; o "less than 70 miles" do p1 continua medido (M09) |
| L07 (p5) | "In remarks reported in 2024, Rómulo Cárhuaz… told its press office…" | Infobae 06/09/2024 ("entrevista realizada por el área de Comunicaciones de Sedapal") |
| L14 (p6) | "She said she washed clothes once a week, or every two weeks…" | AFP 20/03/2025 |
| L13 (p6) | "AFP reported that those deliveries were free." | AFP ("Blue tanker trucks bring water for free once a week") |
| L01 (p6) | as cinco frases de Puente Piedra: "described two cooperatives in a January 2024 report"; Virginia "could pipe water from a tank to her front door"; "The other had 42 families…"; "slid down the slope there"; "A resident, Tula Tinoco Espinoza…" | KULTURAUSTAUSCH 26/01/2024 (Siempre Unidos de Villa Verde e Los Condes; "now I can at least pipe the water to my front door"; "42 families"; "lorry drivers have avoided the steepest parts of Los Condes") |
| L18, L20 (p7) | sai o túnel do norte; "As of late August 2026, that tunnel still had no construction date." | Gestión 30/08/2026 ("la oportunidad de la convocatoria de la Fase 2 del proyecto") |

(Os itens que o aplicador marcou sem diferença no texto falado mexeram só no editor ou na pronúncia; nenhuma frase do diff fica sem dono.)

O que as trocas tocaram em volta: o corte do Marcapomacocha (L19) não deixou órfão o "less than 70 miles" (a medida vai do Campo de Marte à estação, que fica do lado atlântico: a reta cruza a divisória, M09); o corte do túnel do norte (L20) não deixou o "only one way through" de p7 sem chão (ele fala da água que Lima guarda, e a SEDAPAL e a Defensoría o dizem: "único medio", "un solo túnel"); o P01 manteve a hierarquia da R14 (o anticiclone primeiro, a cordilheira como ajuda em 8.1).

## As decisões da Sala (17/10/2026), conferidas na voz

- **"more than three in five Peruvians", nunca "two in three" nem "two-thirds":** 1.5, "In 2012, by the national water plan's figures, more than three in five did." 62,53 % (PNRH, Cuadro 2.3). Nem "two in three" nem "two-thirds" aparecem. Cumprida.
- **"about 2 percent" e "more than 97 percent", com uma fonte só (o PNRH) no gancho:** 1.2 e 1.3, os dois do mesmo Cuadro 2.3 (97,91 % e 1,76 %); a fonte é nomeada em 1.5 ("the national water plan's figures"). Cumprida.
- **O túnel:** 2.4 e 18.4, "more than half of the water Lima stores for the dry season" (157 ÷ 282 = 55,7 %, a lâmina da SEDAPAL de 2007; 18.4 diz "By its 2007 figures"); 2.5 e 26.6, "early 1960s"; 20.1, "between 1958 and 1962… in service since 1963"; 20.2, "Peru's weather service says it was built first to power a hydroelectric plant" (atribuído ao SENAMHI 2016). O "60 %" não aparece. Cumprida.
- **O PIB:** 16.2, "In 2022… more than 40 percent… by the statistics institute's estimate" (INEI, 41,9 %, 2022E/). O 80,4 % não aparece. Cumprida.
- **A mina Ariana fica fora:** nenhuma menção. Cumprida.
- **O presente só onde precisa, datado:** ver a varredura abaixo. Cumprida.

## O "O que não se diz", conferido

Nada do que o dossiê veda está na voz: nenhum "two-thirds", nenhum "60 %" do túnel, nenhum 80,4 % do PIB, nenhuma Ariana, nenhum cinturão de deserto com o Atacama, nenhum número da estação de Marcapomacocha, nenhum túnel do norte, nenhuma "contagem" de 2012 (1.5 diz "figures": é projeção), nenhuma origem nasca dada como certa (11.5, "commonly attributed"), nenhum número ao lado do "paradox" da ANA (5.4, sem o 65 %; R05 e R23).

## As armadilhas de fato, uma a uma

- **2012 é projeção, não censo:** 1.5 diz "by the national water plan's figures". Certo.
- **A Costa do censo não é o lado do Pacífico inteiro:** 14.2 diz "which covers only part of the dry side" (a Costa vai até uns 2.000 m; INEI). Certo.
- **"overtook… as the most populous census region between 1961 and 1972":** em 1972 a Costa (46,1) passou a Sierra (44,0) sem maioria; a maioria vem em 1993 (52,4), e 14.5 o diz. Certo.
- **O túnel foi feito primeiro para energia:** atribuído (20.2), com o "also to firm up the river" da mesma fonte; Huinco em 1964 (tabela 3-2 do SENAMHI 2016). Certo.
- **"releases run from May 1 to November 30" (21.3) e "Every May 1" (27.1):** a fala de Cárhuaz em 2024 (Infobae), atribuída em 21.3; o presente habitual de 27.1 se apoia nela. Certo; volátil.
- **Os 700.000 sem rede são de Lima e do Callao, num estudo da Sunass divulgado em 03/2026:** 22.1 data ("In figures reported in March 2026"). O "almost all" (94,7 %) e o "about six times" são dos 16 distritos periurbanos do estudo, e 22.2 diz "In the districts it studied". Certo.
- **"An official at the utility" (23.4):** a AFP diz "who works for the city's water utility Sedapal"; "official" é leitura justa para quem fala pela empresa à agência. Mantido.
- **"three large reservoirs" (21.4):** fala de Cárhuaz em 2024, atribuída ("he said"). Uma delas (Huascacocha) estava parada em 09/2024; a voz não a nomeia. Certo.
- **Tacna "at the border with Chile" (9.2):** o MINAM 2018 lista o deserto costeiro de Piura a Tacna; o INEA diz que a costa vai "desde la frontera con Ecuador hasta la frontera con Chile". Tacna é o departamento da fronteira com o Chile; nenhuma cópia o diz com essas palavras sobre Tacna, e a composição está declarada.
- **"the oldest center of civilization in the Americas" (10.2)** e **"the largest earthen city of the Americas before Columbus" (11.2):** atribuídos à UNESCO. Certo.
- **Os puquios "carry water to some fields" (11.4):** o estudo diz "some of which are still used today", e o presente vem datado por "a 2012 study reports". Certo.
- **Jauja, 1534 (12.1–12.3):** o auto do cabildo de 28/11/1534 no Cobo; "the Spanish settlers… agreed" lê "que les parecia que el pueblo principal se hiciese á la mar"; as razões (frio, neve, o caminho, os indígenas carregados que morreram) estão no auto. Certo.
- **Pachacamac, 06/01/1535 (12.4, 12.5):** "partly because it had a very good port nearby" (uma das razões da ordem) e "en comedio de tierra donde los dichos indios puedan servir con poco trabajo". Certo.

## A varredura "estado do mundo" (still / today / now / remains / continues e o presente)

- 2.3 "it is home to more than ten million": censo de 2025 (INEI 2026), o mais recente; não pede data na voz.
- 2.4 e 18.4 "more than half… sits in lakes on the other side": 18.4 com "By its 2007 figures"; a Defensoría (2025) ainda dá ao Mantaro mais de 60 % das reservas, e o presente do gancho se sustenta.
- 2.5, 21.1, 25.1 "a single tunnel", "the only way", "only one way through": SEDAPAL 2021 (ProActivo) e Defensoría 2025; sem 2º túnel em 30/08/2026 (Gestión). Sustenta.
- 11.4 "carry water to some fields": datado por "a 2012 study reports".
- 21.4 "The utility regulates 19 lakes and three large reservoirs, he said": 2024, atribuído.
- 25.3 "Lima has been planning a second tunnel since the 1990s": estudo definitivo de 1996 (SENAMHI 2016) e a Fase 2 ainda sem convocatória em 2026 (Gestión). Sustenta.
- 25.4 "As of late August 2026, that tunnel still had no construction date.": o único "still", datado (Gestión, 30/08/2026). O alerta do gate é aceito.
- 27.1 "Every May 1, the utility starts letting out its high lakes": o calendário de 2024. Presente habitual; volátil.
- 27.3 "From May to November, part of its capital's water comes from the other one.": ProActivo e Defensoría (estiagem de maio a novembro; a reserva de Marcapomacocha). Sustenta.
- O presente do mecanismo (p2) é clima normal (SENAMHI; normais da OMM 1991–2020), não estado do mundo.

## ACHADOS

Nenhum achado novo. Nenhuma afirmação DIVERGE nem é REFUTADA; nenhuma linha fora de "confirmada".

Observações que não são defeito de fato (para quem cuida da tela, não para a voz):
- 15.2: as aspas são tradução do espanhol do INEI; a tela, se as mostrar, marca "(translation)" ou mostra o original.
- 9.2: Tacna na fronteira com o Chile, por composição declarada (acima).
- 6.2: "three things" simplifica o SENAMHI (o agente da ressurgência são os alísios), na leitura que a correção mec.afi-02 do dossiê já endossa.
- 9.1: "for lack of storage" verte "por la escasa regulación de las aguas superficiales"; justo.

## As frases sem afirmação checável (NADA A CHECAR, declarado)

Só uma: 2.7, "You're at Alpha Point, and this is where the story of Peru's water divide begins." (a assinatura do canal). As duas perguntas retóricas (2.6 e 26.1, a mesma frase) levam linha: pressupõem que a maioria mora no lado seco, e isso está apoiado.

## LISTA DE NOMES (anônimo → pessoa nomeável)

- Francisco Pizarro (12.1, 12.4, 13.1): Cobo 1639 e UNESCO 500.
- Rómulo Cárhuaz (21.3): Infobae 2024, analista de Manejo de Cuencas da SEDAPAL.
- Catalina Naupa, 59 (23.1): AFP, 20/03/2025.
- Virginia Martínez Morales, 30 (24.2), e Tula Tinoco Espinoza (24.5): KULTURAUSTAUSCH, 26/01/2024 (a reportagem de Elizabeth Salazar Vega).
- "An official at the utility" (23.4): a AFP o nomeia; a voz não precisa do nome.

## VOLÁTEIS na fala (reconferir na véspera da gravação)

- O 2º túnel (25.4): Gestión 30/08/2026, sem data de obra.
- Os mais de 700.000 sem rede e os 94,7 % por caminhão (22.1, 22.2): Sunass, divulgado em 25/03/2026.
- "a single tunnel" / "the only way" / "only one way through" (2.5, 21.1, 25.1) e "more than half… stores" (2.4, 18.4).
- Lima com o Callao acima de dez milhões (2.3): censo de 2025.
- O calendário de descarga, de 1º de maio a 30 de novembro (21.3, 27.1, 27.3).

## DECISÃO DO LUCAS / DA SALA PENDENTE que tocou esta checagem

Nenhuma.

## PADRÕES

- Ano de relatório e número dito sempre num trecho da própria frase (o que o portão de fatos pede); cada conta derivada, uma linha de medição.
- Imprensa sempre atribuída e datada na voz (Infobae 2024, Sunass pela Gestión 03/2026, AFP 03/2025, a revista alemã 01/2024, Gestión 08/2026).

## A tabela (uma linha por afirmação)

A tabela inteira, com o trecho literal de cada linha, está em `roteiros/peru-agua/qc-roteiro/fatos-tabela.json` (253 linhas, F001–F253, todas "confirmada"). Resumo por frase:

| Linha | § | Afirmação | Veredito | Fonte | Classe |
|---|---|---|---|---|---|
| F001 | 1 | A divisória de águas pelos Andes reparte o território do Peru em regiões hidrográficas (Pacífico, Amazonas e Titicaca), agrupadas pela 'línea divisoria mayor de las aguas'. | confirmada | doc-03 | texto |
| F002 | 1 | Os rios do lado do Pacífico nascem na alta cordilheira Ocidental dos Andes: a linha corre pelos Andes. | confirmada | mec-01 | texto |
| F003 | 1 | A região hidrográfica do Amazonas tem 74,53 % do território e 97,91 % da água (PNRH, Cuadro 2.3). | confirmada | doc-03 | texto |
| F004 | 1 | 74,53 % = cerca de três quartos; 97,91 % = mais de 97 %. | confirmada | medicao | medicao |
| F005 | 1 | 97,91 % é mais de 97 %. | confirmada | medicao | medicao |
| F006 | 1 | A região hidrográfica do Pacífico tem 1,76 % da água (PNRH, Cuadro 2.3). | confirmada | doc-03 | texto |
| F007 | 1 | 1,76 % arredonda para cerca de 2 %. | confirmada | medicao | medicao |
| F008 | 1 | A maioria dos peruanos mora no lado do Pacífico: 62,53 % em 2012 (PNRH); no presente, o piso é a Costa do censo de 2025 (58,7 %), toda no lado do Pacífico. | confirmada | doc-03 | texto |
| F009 | 1 | O piso de hoje: a Costa do INEI (por distrito) com 58,7 % da população censada em 2025. | confirmada | doc-14 | texto |
| F010 | 1 | O número é a projeção do INEI para 2012 que o PNRH distribuiu por AAA ('figures', não 'count'; R01). | confirmada | doc-03 | texto |
| F011 | 1 | 62,53 % é mais de três em cinco. | confirmada | medicao | medicao |
| F012 | 2 | O desierto costero (MINAM 2019) ocupa uns 65 % da área natural da região costeira (conta do canal; o mapa exclui cidades e lavouras). | confirmada | doc-20 | texto |
| F013 | 2 | Lima recebe 8 mm de chuva por ano (SENAMHI, Campo de Marte, normal do documento 1981–2010). | confirmada | mec-01 | texto |
| F014 | 2 | 8 mm = 0,315 pol. = cerca de um terço de polegada. | confirmada | medicao | medicao |
| F015 | 2 | Província de Lima 9.600.724 e Callao 1.042.857 censados em 2025. | confirmada | doc-14 | texto |
| F016 | 2 | Callao 1.042.857 em 2025. | confirmada | doc-14 | texto |
| F017 | 2 | 10.643.581 = mais de dez milhões. | confirmada | medicao | medicao |
| F018 | 2 | O Callao é o porto vizinho de Lima ('el vecino puerto'). | confirmada | gen-19 | texto |
| F019 | 2 | Na lâmina da SEDAPAL (2007), a capacidade de armazenamento para Lima é 282 MMC, 157 deles na bacia de Marcapomacocha, desenhada sob 'VERTIENTES DEL ATLANTICO' (lagoas). | confirmada | mec-19 | texto |
| F020 | 2 | O lado: as 4 lagoas e a represa Antacoto sob 'VERTIENTES DEL ATLANTICO'. | confirmada | mec-19 | texto |
| F021 | 2 | O presente se sustenta: em 2025 a Defensoría ainda dá ao Mantaro mais de 60 % das reservas (medida que conta o Huascacocha parado; sem ele, ~56 %). | confirmada | lim-01 | texto |
| F022 | 2 | A água guardada do lado do Atlântico só cruza por um túnel ('único medio de trasvase', SEDAPAL 2021, pela ProActivo). | confirmada | lim-06 | imprensa |
| F023 | 2 | A Defensoría (2025) repete: 'un solo túnel trasandino'. | confirmada | lim-01 | texto |
| F024 | 2 | A 1ª etapa, com o túnel, foi feita entre 1958 e 1962 (SENAMHI 2016, adaptado da SEDAPAL). | confirmada | lim-02 | texto |
| F025 | 2 | 1958–1962 e 1963 = começo dos anos 1960. | confirmada | medicao | medicao |
| F026 | 2 | A pergunta pressupõe que a maioria mora no lado seco (ver 1.4): 62,53 % em 2012. | confirmada | doc-03 | texto |
| F027 | 3 | A linha é a divisória continental ('divortium acuarium o línea divisoria mayor de las aguas'), que forma as três vertentes. | confirmada | mec-11 | texto |
| F028 | 3 | Os rios do lado ocidental descem ao Pacífico. | confirmada | mec-01 | texto |
| F029 | 3 | Os rios do lado oriental drenam ao Atlântico pelo Amazonas. | confirmada | mec-01 | texto |
| F030 | 3 | A terceira região, a do Titicaca, tem 3,81 % do território e fica no sudeste. | confirmada | doc-03 | texto |
| F031 | 3 | O Titicaca fica no extremo sul andino (INEA). | confirmada | doc-07 | texto |
| F032 | 3 | A divisória corre pela cordilheira Ocidental (os rios do Pacífico nascem nela). | confirmada | mec-01 | texto |
| F033 | 3 | Dentro do departamento de Lima: a maioria das geleiras vai ao Pacífico e 2 % ao Atlântico (Mantaro). | confirmada | mec-09 | texto |
| F034 | 3 | ... e 2 % ao Atlântico. | confirmada | mec-09 | texto |
| F035 | 3 | Campo de Marte (ponto de Lima do SENAMHI). | confirmada | mec-03 | texto |
| F036 | 3 | A reta até a estação de Marcapomacocha (lado atlântico) mede 66,92 mi e cruza a divisória: menos de 70 milhas. | confirmada | medicao | medicao |
| F037 | 4 | O lado do Pacífico tem 62 bacias de rios curtos, de forte pendente, que descem ao mar ('dozens'). | confirmada | mec-01 | texto |
| F038 | 4 | Rios curtos, de forte pendente (ANA 2009). | confirmada | mec-11 | texto |
| F039 | 4 | O Rímac é um dos principais rios que desembocam no Pacífico. | confirmada | mec-11 | texto |
| F040 | 4 | ... a lista inclui o Rímac. | confirmada | mec-11 | texto |
| F041 | 4 | Os rios do lado atlântico são mais longos e caudalosos e drenam pelo Amazonas. | confirmada | mec-01 | texto |
| F042 | 4 | Loreto é o maior departamento do Peru (Harvard Growth Lab). | confirmada | gen-18 | texto |
| F043 | 4 | Loreto tem uma das menores densidades (2,4 hab./km², 2017). | confirmada | gen-01 | texto |
| F044 | 4 | Atribuído: 'Iquitos can only be reached by air or river' (HKS, 2023). | confirmada | gen-18 | texto |
| F045 | 4 | Iquitos é a capital de Loreto. | confirmada | gen-18 | texto |
| F046 | 5 | O PNRH dá território, gente e água por região hidrográfica num quadro só (Cuadro 2.3). | confirmada | doc-03 | texto |
| F047 | 5 | Dois lados: o do Pacífico e o do Amazonas (as linhas do Cuadro 2.3). | confirmada | medicao | medicao |
| F048 | 5 | O Pacífico tem 21,67 % do território: menos de um quarto. | confirmada | doc-03 | texto |
| F049 | 5 | Água por habitante: 1.815,61 m³/ano no Pacífico contra 189.167,18 no Amazonas. | confirmada | doc-03 | texto |
| F050 | 5 | 189.167,18 ÷ 1.815,61 = 104,2: cerca de cem vezes. | confirmada | medicao | medicao |
| F051 | 5 | A ANA chama o arranjo de paradoxal ('paradójicamente'), sem número ao lado (R05, R23). | confirmada | doc-01 | texto |
| F052 | 5 | Para o SENAMHI, o anticiclone sobre o Pacífico é 'el causante principal de la aridez de la Costa peruana'. | confirmada | mec-01 | texto |
| F053 | 6 | O anticiclone do Pacífico Sul é um sistema de alta pressão permanente sobre o oceano, que cria subsidência. | confirmada | mec-01 | texto |
| F054 | 6 | ... e ele cria subsidência (o ar desce). | confirmada | mec-01 | texto |
| F055 | 6 | A corrente de Humboldt, os afloramentos (ressurgência) e a capa de nuvens baixas mantêm o mar anomalamente frio para a latitude (com os alísios como agente: mec.afi-02 corrigido). | confirmada | mec-01 | texto |
| F056 | 6 | ... 'anómalamente baja, en relación a su media latitudinal'. | confirmada | mec-01 | texto |
| F057 | 6 | Três coisas no mar. | confirmada | medicao | medicao |
| F058 | 6 | O mar frio esfria o ar que circula sobre ele. | confirmada | mec-01 | texto |
| F059 | 6 | A subsidência mantém a camada de inversão (o ar mais quente por cima). | confirmada | mec-05 | texto |
| F060 | 6 | O mar frio, a subsidência e a inversão limitam a subida do ar para formar nuvens de chuva. | confirmada | mec-01 | texto |
| F061 | 6 | Formam-se nevoeiros e nuvens baixas (estratos) e garoa, não chuva. | confirmada | mec-01 | texto |
| F062 | 6 | Nevoeiros e neblinas costeiras. | confirmada | mec-01 | texto |
| F063 | 7 | O sistema se vê quando enfraquece: no El Niño o anticiclone se debilita. | confirmada | mec-01 | texto |
| F064 | 7 | No El Niño, os alísios se debilitam e os afloramentos diminuem ou desaparecem. | confirmada | mec-01 | texto |
| F065 | 7 | A água quente substitui a fria sobretudo no extremo norte; a TSM sobe até 10 °C, com chuvas intensas e inundações. | confirmada | mec-01 | texto |
| F066 | 7 | ... 'generándose lluvias intensas e inundaciones'. | confirmada | mec-01 | texto |
| F067 | 7 | 8 mm por ano, 'en forma de lloviznas' (normal). | confirmada | mec-01 | texto |
| F068 | 7 | 8 mm = cerca de um terço de polegada. | confirmada | medicao | medicao |
| F069 | 7 | Citação atribuída, letra a letra em espanhol: 'una de las ciudades más grandes del mundo ubicada en un desierto'. | confirmada | mec-01 | texto |
| F070 | 8 | A cordilheira contribui ('contribuyendo') para a aridez da costa. | confirmada | mec-01 | texto |
| F071 | 8 | Até uns 5.000 m, as cordilheiras do centro e do sul bloqueiam o ar úmido amazônico. | confirmada | mec-01 | texto |
| F072 | 8 | 5.000 m = 16.404 pés: cerca de 16.000. | confirmada | medicao | medicao |
| F073 | 8 | As vertentes favorecem as nuvens de chuva orográfica. | confirmada | mec-01 | texto |
| F074 | 8 | Satipo: 2.013 mm por ano (normal OMM 1991–2020), a leste dos Andes (R58). | confirmada | mec-02 | texto |
| F075 | 8 | Total anual 2.013,00 mm. | confirmada | mec-02 | texto |
| F076 | 8 | 2.013 mm = 6,6 pés: mais de seis pés. | confirmada | medicao | medicao |
| F077 | 8 | A chuva do lado do Pacífico cai no verão austral sobre a vertente ocidental (no alto). | confirmada | mec-11 | texto |
| F078 | 8 | Uns 80 % da chuva da bacia úmida do Pacífico caem de dezembro a março. | confirmada | mec-11 | texto |
| F079 | 8 | Essa chuva dá nascimento a rios pequenos de regime torrencial. | confirmada | mec-11 | texto |
| F080 | 8 | Os rios do Pacífico são 'prácticamente secos en invierno' (SINIA; o Lavado mostra que não todos: 'some'). | confirmada | mec-13 | texto |
| F081 | 9 | ANA 2009: na bacia úmida do Pacífico, cerca de 50 % (17.542 MMC) da cheia volta direto ao mar pela escassa regulação. | confirmada | mec-11 | texto |
| F082 | 9 | O documento é de 2009 (24/04/2009). | confirmada | mec-11 | texto |
| F083 | 9 | Desierto costero: 7.107.338,20 ha (MINAM 2019). | confirmada | doc-20 | texto |
| F084 | 9 | 7.107.338,20 ha = 27.442 mi²: cerca de 27.000. | confirmada | medicao | medicao |
| F085 | 9 | Distribuição do deserto costeiro: de Piura a Tacna (MINAM 2018). | confirmada | doc-19 | texto |
| F086 | 9 | A costa vai da fronteira do Equador à do Chile; Tacna, o último departamento da lista, é o da fronteira com o Chile (composição declarada: nenhuma cópia diz a vizinhança com essas palavras). | confirmada | doc-07 | texto |
| F087 | 9 | Caral tem 5.000 anos e fica num terraço de deserto (UNESCO). | confirmada | gen-11 | texto |
| F088 | 9 | 5000-year-old = cerca de 5.000 anos. | confirmada | medicao | medicao |
| F089 | 10 | Caral fica num terraço de deserto sobre o vale verde do Supe. | confirmada | gen-11 | texto |
| F090 | 10 | Coordenada da UNESCO: S10 53 30 W77 31 17. | confirmada | gen-11 | texto |
| F091 | 10 | Campo de Marte → Caral = 87,65 mi em linha reta: cerca de 90. | confirmada | medicao | medicao |
| F092 | 10 | Atribuído à UNESCO: 'the oldest centre of civilization in the Americas'. | confirmada | gen-11 | texto |
| F093 | 10 | As chuvas da vertiente ocidental dão rios torrenciais que originam os vales costeiros, separados por planícies desérticas. | confirmada | mec-11 | texto |
| F094 | 10 | A faixa desértica é interrompida por vales de rios da cordilheira Ocidental. | confirmada | mec-01 | texto |
| F095 | 11 | No vale do Moche, o território árido foi feito cultivável ao longo dos séculos por canais e irrigação. | confirmada | gen-16 | texto |
| F096 | 11 | O território descrito é o da costa norte, entre os vales do Moche e do Chicama. | confirmada | gen-16 | texto |
| F097 | 11 | Chan Chan, capital chimú, no vale do Moche; para a UNESCO, 'the largest earthen city of pre-Columbian America'. | confirmada | gen-12 | texto |
| F098 | 11 | Capital do reino Chimu, no vale do Moche. | confirmada | gen-12 | texto |
| F099 | 11 | Um canal de uns 80 km sustentava a região em volta de Chan Chan (no passado). | confirmada | gen-12 | texto |
| F100 | 11 | 80 km = 49,7 mi: cerca de 50. | confirmada | medicao | medicao |
| F101 | 11 | Estudo de 2012 (Springer): puquios, aquedutos subterrâneos do vale do Nasca, alguns ainda em uso. | confirmada | gen-15 | texto |
| F102 | 11 | O estudo é de 2012. | confirmada | gen-15 | texto |
| F103 | 11 | A origem é atribuída ao período nasca (Middle Nasca), pela arqueologia citada; a datação é contestada (R54: 'commonly attributed'). | confirmada | gen-15 | texto |
| F104 | 12 | Auto do cabildo de Jauja de 28/11/1534 (Cobo). | confirmada | gen-19 | texto |
| F105 | 12 | Os vizinhos opinam que o povoado principal vá ao mar (o auto começa pela opinião de Pizarro: R15, R27). | confirmada | gen-19 | texto |
| F106 | 12 | Os motivos: terra fria, de muita neve, a 40 léguas do mar, caminho despovoado. | confirmada | gen-19 | texto |
| F107 | 12 | ... 40 léguas do mar e o caminho muito despovoado. | confirmada | gen-19 | texto |
| F108 | 12 | Muitos indígenas carregados com mantimentos morreram por isso. | confirmada | gen-19 | texto |
| F109 | 12 | ... carregados com mantimentos para os vizinhos. | confirmada | gen-19 | texto |
| F110 | 12 | Ordem de Pizarro em Pachacamac, 06/01/1535: o sítio 'por estar como está junto á él muy buen puerto' (uma das razões: 'partly'). | confirmada | gen-19 | texto |
| F111 | 12 | Data: 6 de janeiro de 1535. | confirmada | gen-19 | texto |
| F112 | 12 | A mesma ordem: 'está en comedio de tierra donde los dichos indios puedan servir con poco trabajo'. | confirmada | gen-19 | texto |
| F113 | 13 | Lima foi fundada por Pizarro em janeiro de 1535, no vale do Rímac (UNESCO). | confirmada | gen-14 | texto |
| F114 | 13 | O porto do Callao, vizinho de Lima (Cobo). | confirmada | gen-19 | texto |
| F115 | 13 | UNESCO: até meados do século XVIII, capital e cidade mais importante dos domínios espanhóis na América do Sul. | confirmada | gen-14 | texto |
| F116 | 13 | Meados do séc. XVIII = mid-1700s. | confirmada | medicao | medicao |
| F117 | 13 | Lima fica no lado do Pacífico (o Rímac é rio do Pacífico). | confirmada | mec-11 | texto |
| F118 | 13 | Em 1940 a Sierra tinha 65,0 % da população; a Costa, 28,3 %. | confirmada | doc-10 | texto |
| F119 | 14 | Censo de 1940: Sierra 65,0 %, a maioria. | confirmada | doc-14 | texto |
| F120 | 14 | Os censos começam em 1940. | confirmada | doc-14 | texto |
| F121 | 14 | Costa 28,3 % em 1940. | confirmada | doc-14 | texto |
| F122 | 14 | 28,3 % < três em dez. | confirmada | medicao | medicao |
| F123 | 14 | A Costa do censo vai só até os contrafortes (até 2.000 m, na página antiga do censo de 1993): parte do lado seco. | confirmada | gen-04 | texto |
| F124 | 14 | A série censo a censo: Costa 28,3 · 39,0 · 46,1 · 49,8 · 52,4 · 54,6 · 58,0 · 58,7. | confirmada | doc-14 | texto |
| F125 | 14 | 1961: Costa 39,0, Sierra 52,3; 1972: Costa 46,1, Sierra 44,0 (passou a maior, sem maioria). | confirmada | doc-14 | texto |
| F126 | 14 | Anos dos censos. | confirmada | doc-14 | texto |
| F127 | 14 | 1993: Costa 52,4 %, mais da metade. | confirmada | doc-14 | texto |
| F128 | 14 | Ano do censo. | confirmada | doc-14 | texto |
| F129 | 14 | 2025: Costa 58,7 %. | confirmada | doc-14 | texto |
| F130 | 14 | 58,7 % = quase seis em dez. | confirmada | medicao | medicao |
| F131 | 14 | Ano do censo. | confirmada | doc-14 | texto |
| F132 | 15 | Movimentos migratórios para a Selva ('selvatización', INEI 1995). | confirmada | gen-03 | texto |
| F133 | 15 | Citação atribuída ao INEI (2017/2018), tradução fiel: 'de ser predominantemente andina ha pasado a ser mayoritariamente costeña'. | confirmada | doc-10 | texto |
| F134 | 15 | INEI 1995: a escassez de terras de cultivo (com o deterioro agrário e a violência) explica a vontade de emigrar da serra. | confirmada | gen-03 | texto |
| F135 | 15 | INEI 1995: a Costa, principal receptor dos fluxos migratórios andinos. | confirmada | gen-03 | texto |
| F136 | 15 | O estudo é de setembro de 1995. | confirmada | gen-03 | texto |
| F137 | 15 | A violência de 1980–2000 levou ao deslocamento de ~meio milhão (CVR); as rotas incluem Lima. | confirmada | gen-08 | texto |
| F138 | 15 | 1980–2000 = os anos 1980 e '90. | confirmada | medicao | medicao |
| F139 | 15 | CVR: 'alrededor de medio millón de personas abandonaron sus localidades'. | confirmada | gen-08 | texto |
| F140 | 15 | Muitos migraram para Lima fugindo da violência. | confirmada | gen-08 | texto |
| F141 | 15 | Medio millón = meio milhão. | confirmada | medicao | medicao |
| F142 | 16 | 1940: Lima Metropolitana 645.172 (INEI 1995), de 6.207.967. | confirmada | gen-03 | texto |
| F143 | 16 | Lima Metropolitana compreende a província de Lima e a do Callao. | confirmada | gen-04 | texto |
| F144 | 16 | 645.172 = cerca de 650.000 (e o ano 1940). | confirmada | medicao | medicao |
| F145 | 16 | 2025: 10.643.581 = mais de dez milhões e meio. | confirmada | medicao | medicao |
| F146 | 16 | 645.172 ÷ 6.207.967 = 10,4 %: cerca de um em dez. | confirmada | medicao | medicao |
| F147 | 16 | 32,5 % em 2025: cerca de um terço. | confirmada | medicao | medicao |
| F148 | 16 | Ano do censo de 2025 (provincias). | confirmada | doc-14 | texto |
| F149 | 16 | 2022: o departamento de Lima teve a maior participação no PIB, 41,9 % (a preços correntes; 2022 é estimativa, '2022E/'). | confirmada | doc-17 | texto |
| F150 | 16 | O ano e a estimativa. | confirmada | doc-17 | texto |
| F151 | 16 | Lima inclui o Callao no documento. | confirmada | doc-17 | texto |
| F152 | 16 | 41,9 % = mais de 40 %. | confirmada | medicao | medicao |
| F153 | 17 | Censo de 1993: 38,8 % da população metropolitana era de origem migrante (CVR). | confirmada | gen-07 | texto |
| F154 | 17 | 38,8 % = quase quatro em dez. | confirmada | medicao | medicao |
| F155 | 17 | A população imigrante organiza invasões de terras na periferia e constrói moradias precárias. | confirmada | gen-07 | texto |
| F156 | 17 | 1971: invasões de terrenos em Pamplona. | confirmada | gen-17 | texto |
| F157 | 17 | 180 famílias iniciaram a primeira 'oleada' da invasão. | confirmada | gen-17 | texto |
| F158 | 17 | Tratou-se de reassentar umas 7.000 famílias num areal ao sul de Lima (OCR: 'semi-de- cértico' = semi-desértico). | confirmada | gen-17 | texto |
| F159 | 17 | A zona da reubicação: um extenso areal ao sul de Lima. | confirmada | gen-17 | texto |
| F160 | 17 | O pueblo joven Villa El Salvador nasceu em maio de 1971. | confirmada | gen-17 | texto |
| F161 | 17 | 1981: 1'171,800 de 4'608,010 nos pueblos jóvenes = 25,5 % (INEI 1996, na tabela da CVR). | confirmada | gen-07 | texto |
| F162 | 17 | Fonte da tabela: INEI, Lima Metropolitana, perfil sociodemográfico, 1996. | confirmada | gen-07 | texto |
| F163 | 17 | 25,5 % = cerca de um em quatro. | confirmada | medicao | medicao |
| F164 | 17 | Os assentamentos se chamam barriadas. | confirmada | gen-07 | texto |
| F165 | 17 | O Rímac fica baixo de maio a novembro (7 meses). | confirmada | lim-01 | texto |
| F166 | 17 | Maio a novembro = sete meses. | confirmada | medicao | medicao |
| F167 | 18 | Cheia de dezembro a abril, ~30 m³/s (Defensoría 2025). | confirmada | lim-01 | texto |
| F168 | 18 | Estiagem de maio a novembro: 7,8 m³/s (Defensoría 2025). | confirmada | lim-01 | texto |
| F169 | 18 | A SEDAPAL capta, armazena e conduz a água das lagoas altoandinas. | confirmada | lim-06 | imprensa |
| F170 | 18 | A reserva é para uso nos meses de estiagem (maio a novembro). | confirmada | lim-06 | imprensa |
| F171 | 18 | Lâmina da SEDAPAL de 2007: 157 de 282 MMC na bacia de Marcapomacocha (lado atlântico). | confirmada | mec-19 | texto |
| F172 | 18 | O arquivo é de 2007 (o gráfico vizinho: 'A Febrero 2007'). | confirmada | mec-19 | texto |
| F173 | 19 | As lagoas do Marca I ficam acima de 4.500 m; a represa Antacoto a 4.445 m. | confirmada | lim-01 | texto |
| F174 | 19 | Antacoto, 4.445 msnm (SEDAPAL 2007). | confirmada | mec-19 | texto |
| F175 | 19 | 4.445–4.500 m = 14.583–14.764 pés: quase 15.000. | confirmada | medicao | medicao |
| F176 | 19 | A bacia do Mantaro é da vertente do Atlântico, ou amazônica. | confirmada | lim-01 | texto |
| F177 | 19 | A parte alta do Mantaro. | confirmada | lim-02 | texto |
| F178 | 19 | Canal Marcapomacocha–Cuevas de 11,9 km e túnel Cuevas–Milloc de 10,1 km (JICA, 2002). | confirmada | lim-05 | texto |
| F179 | 19 | 22,0 km = 13,67 mi: cerca de 14. | confirmada | medicao | medicao |
| F180 | 19 | A água chega à cabeceira do Santa Eulalia, afluente do Rímac, na vertente do Pacífico. | confirmada | lim-05 | texto |
| F181 | 19 | A captação no Rímac: as bocatomas de La Atarjea. | confirmada | lim-01 | texto |
| F182 | 19 | La Atarjea faz 70 % da produção: a planta principal. | confirmada | lim-01 | texto |
| F183 | 19 | Capacidade do canal e do túnel: 14 m³/s (contra 7,8 m³/s do Rímac na estiagem). | confirmada | lim-05 | texto |
| F184 | 20 | 1ª etapa, com o túnel, entre 1958 e 1962 (SENAMHI 2016). | confirmada | lim-02 | texto |
| F185 | 20 | O Marca I entrou em operação em 1963 (Defensoría 2025). | confirmada | lim-01 | texto |
| F186 | 20 | Atribuído ao SENAMHI: a finalidade foi cobrir a demanda elétrica (Huinco), 'además de afianzar el caudal de río Rímac' (R09). | confirmada | lim-02 | texto |
| F187 | 20 | ... a segunda finalidade. | confirmada | lim-02 | texto |
| F188 | 20 | Huinco: ano de início 1964 (SENAMHI 2016, tabela 3-2). | confirmada | lim-02 | texto |
| F189 | 21 | A SEDAPAL: o túnel é o único meio de trasvase da água armazenada nas lagoas do Atlântico (2021, pela ProActivo). | confirmada | lim-06 | imprensa |
| F190 | 21 | Chillón, Lurín e Rímac dão água a Lima e Callao. | confirmada | lim-01 | texto |
| F191 | 21 | 442 poços. | confirmada | lim-01 | texto |
| F192 | 21 | Dois outros rios: o Chillón e o Lurín. | confirmada | medicao | medicao |
| F193 | 21 | Infobae (atualizada em 06/09/2024): Rómulo Cárhuaz, analista de Manejo de Cuencas da SEDAPAL. | confirmada | gen-21 | imprensa |
| F194 | 21 | ... numa entrevista feita pela área de Comunicações da SEDAPAL. | confirmada | gen-21 | imprensa |
| F195 | 21 | Período de descarga: de 1º de maio a 30 de novembro. | confirmada | gen-21 | imprensa |
| F196 | 21 | Data da página. | confirmada | gen-21 | imprensa |
| F197 | 21 | 19 lagoas reguladas e três grandes represas (fala de Cárhuaz). | confirmada | gen-21 | imprensa |
| F198 | 21 | 'tres grandes represas' = three large reservoirs. | confirmada | medicao | medicao |
| F199 | 21 | O túnel transvasa a água ao Rímac. | confirmada | lim-06 | imprensa |
| F200 | 21 | Mais de 700 mil pessoas sem conexão à rede em Lima e Callao (Sunass, pela Gestión, 03/2026). | confirmada | lim-14 | imprensa |
| F201 | 22 | Sunass, pela Gestión: mais de 700 mil pessoas sem conexão em Lima e Callao. | confirmada | lim-14 | imprensa |
| F202 | 22 | Estudo da Sunass (o regulador), divulgado em 25/03/2026. | confirmada | lim-14 | imprensa |
| F203 | 22 | 700 mil = 700.000. | confirmada | medicao | medicao |
| F204 | 22 | Nos 16 distritos periurbanos estudados, 94,7 % dos lares sem conexão se abasteciam por caminhão-pipa (2025). | confirmada | lim-14 | imprensa |
| F205 | 22 | O estudo em 16 distritos periurbanos. | confirmada | lim-14 | imprensa |
| F206 | 22 | Pagam 6 vezes mais que os conectados ('about six times', R17). | confirmada | lim-14 | imprensa |
| F207 | 23 | AFP, 20/03/2025: Catalina Naupa, 59 anos, moradora de San Juan de Miraflores, ao sul da cidade, onde a água chega por caminhão. | confirmada | gen-22 | imprensa |
| F208 | 23 | Caminhões-pipa levam água a partes de San Juan de Miraflores, ao sul. | confirmada | gen-22 | imprensa |
| F209 | 23 | Data do despacho. | confirmada | gen-22 | imprensa |
| F210 | 23 | Citação letra a letra. | confirmada | gen-22 | imprensa |
| F211 | 23 | Ela lava roupa uma vez por semana ou a cada duas, para poupar água. | confirmada | gen-22 | imprensa |
| F212 | 23 | Nicolas Reyes, que trabalha na SEDAPAL: um metro cúbico (260 galões) por família por semana. | confirmada | gen-22 | imprensa |
| F213 | 23 | ... às partes do distrito sem rede. | confirmada | gen-22 | imprensa |
| F214 | 23 | Os caminhões levam a água de graça. | confirmada | gen-22 | imprensa |
| F215 | 24 | KULTURAUSTAUSCH (revista do ifa, alemã), 26/01/2024: duas cooperativas em Puente Piedra, ao norte de Lima. | confirmada | gen-23 | imprensa |
| F216 | 24 | Data da reportagem. | confirmada | gen-23 | imprensa |
| F217 | 24 | A revista é alemã (o ifa e o 'German debate'). | confirmada | gen-23 | imprensa |
| F218 | 24 | Duas cooperativas: Siempre Unidos de Villa Verde e Los Condes. | confirmada | gen-23 | imprensa |
| F219 | 24 | ... e Los Condes. | confirmada | gen-23 | imprensa |
| F220 | 24 | Duas cooperativas. | confirmada | medicao | medicao |
| F221 | 24 | Virginia Martínez Morales, 30 anos, três filhos, canaliza a água até a porta. | confirmada | gen-23 | imprensa |
| F222 | 24 | ... 'now I can at least pipe the water to my front door'. | confirmada | gen-23 | imprensa |
| F223 | 24 | Los Condes: 42 famílias, sem água, esgoto nem eletricidade. | confirmada | gen-23 | imprensa |
| F224 | 24 | Um caminhão-pipa deslizou e levou três casas; desde então os motoristas evitam as partes mais íngremes de Los Condes. | confirmada | gen-23 | imprensa |
| F225 | 24 | ... os motoristas evitam as partes mais íngremes. | confirmada | gen-23 | imprensa |
| F226 | 24 | Tula Tinoco Espinoza agora carrega baldes. | confirmada | gen-23 | imprensa |
| F227 | 24 | A maioria veio das regiões andinas em busca de trabalho melhor. | confirmada | gen-23 | imprensa |
| F228 | 25 | A água guardada do outro lado só cruza pelo túnel ('único medio'). | confirmada | lim-06 | imprensa |
| F229 | 25 | Defensoría (2025), citando a SEDAPAL 2019: depender de um só túnel, com potencial risco de colapso em sismos de alta intensidade. | confirmada | lim-01 | texto |
| F230 | 25 | SEDAPAL 2019 é o Plano Mestre Otimizado da empresa. | confirmada | lim-01 | texto |
| F231 | 25 | A edição é de fevereiro de 2025. | confirmada | lim-01 | texto |
| F232 | 25 | O estudo definitivo do novo túnel foi feito em 1996 (SENAMHI 2016). | confirmada | lim-02 | texto |
| F233 | 25 | 1996 = desde os anos 1990. | confirmada | medicao | medicao |
| F234 | 25 | Gestión, 30/08/2026: o túnel de 10 km está na Fase 2. | confirmada | lim-10 | imprensa |
| F235 | 25 | A convocatória da Fase 2 depende do planejamento: sem data. | confirmada | lim-10 | imprensa |
| F236 | 25 | Data da matéria. | confirmada | lim-10 | imprensa |
| F237 | 25 | 30/08/2026 = fim de agosto de 2026. | confirmada | medicao | medicao |
| F238 | 26 | A maioria mora no lado seco (ver 1.4). | confirmada | doc-03 | texto |
| F239 | 26 | O lado seco tem menos de 2 % da água. | confirmada | doc-03 | texto |
| F240 | 26 | Caral, há 5.000 anos, num terraço sobre o vale do Supe. | confirmada | gen-11 | texto |
| F241 | 26 | 5.000 anos. | confirmada | medicao | medicao |
| F242 | 26 | 1535: a capital junto a um muy buen puerto (Cobo). | confirmada | gen-19 | texto |
| F243 | 26 | ... 'muy buen puerto'. | confirmada | gen-19 | texto |
| F244 | 26 | No século XX, a Costa foi de 28 % a 52 % (1940–1993): a descida da serra, com a Costa como principal receptor. | confirmada | gen-03 | texto |
| F245 | 26 | Século XX. | confirmada | medicao | medicao |
| F246 | 26 | Canais nos vales (Moche, Chan Chan). | confirmada | gen-16 | texto |
| F247 | 26 | O túnel desde o começo dos anos 1960. | confirmada | lim-02 | texto |
| F248 | 26 | Começo dos anos 1960. | confirmada | medicao | medicao |
| F249 | 26 | Na borda da cidade, por caminhão. | confirmada | gen-22 | imprensa |
| F250 | 27 | A descarga vai de 1º de maio a 30 de novembro (Cárhuaz). | confirmada | gen-21 | imprensa |
| F251 | 27 | A água guardada do lado atlântico cruza ao Rímac pelo túnel. | confirmada | lim-06 | imprensa |
| F252 | 27 | O Peru mora no lado seco (62,53 % em 2012; a Costa com 58,7 % em 2025). | confirmada | doc-14 | texto |
| F253 | 27 | De maio a novembro, a reserva do outro lado é usada. | confirmada | lim-06 | imprensa |

## Comparação com a rodada anterior (lida só depois de gravados a tabela e os achados acima)

O laudo da rodada 1 (`fatos-r1.laudo.md`, sobre `87ea57b0abe5`) deu RESSALVA, com 199 de 210 linhas confirmadas e nove achados. Os nove estão resolvidos no texto de `44ec6a38887f`, e eu os tinha conferido de novo, sem ler o laudo antigo, como confirmados:

- **A01 (MÉDIO, Loreto "least populated"):** resolvido por L04, "one of its most thinly populated" (2,4 hab./km², INEI 2017).
- **A02 (MÉDIO, 180 famílias "moved" pelo governo):** resolvido por L02: as 180 famílias invadem, "more followed", e o governo trata de reassentar "about 7,000 families" (PUCP).
- **A03 (MÉDIO, Puente Piedra: as duas cooperativas misturadas, a data):** resolvido por L01: "described two cooperatives in a January 2024 report"; Virginia na primeira, as 42 famílias na outra.
- **A04 (LEVE, "only high up"):** resolvido por L05, "mostly high up, and most of it from December to March".
- **A05 (LEVE, El Niño "stops rising", sem o norte):** resolvido por L06, "slows or stops rising" e "mostly in the north".
- **A06 (LEVE, "said in a 2024 interview"):** resolvido por L07, "In remarks reported in 2024… told its press office".
- **A07 (LEVE, o canal "supplied it"):** resolvido por L08, "once watered the land around it".
- **A08 (LEVE, "each one leaves a strip of green"):** resolvido por L09, "their valleys run as strips of green".
- **A09 (LEVE, opcional, "Lima and Callao alone… two-fifths"):** resolvido por L10, "the Lima region, with Callao, produced more than 40 percent".
- **Os dois "datar" e os voláteis:** "In 2026, it still had no construction date." virou "As of late August 2026…" (L18); o túnel do norte, volátil na rodada 1, saiu da voz (L20).

Diferenças de método, declaradas: a rodada 1 deu NADA A CHECAR a cinco frases; aqui só a assinatura fica sem linha, porque as duas perguntas retóricas, a ponte "You can see the system by what happens when it weakens." (7.1) e "The water makes it across the line." (21.5) levam linha com o fato que pressupõem. O `fatos-medidas.txt` da rodada 1 foi regravado: os números M de lá não casam com os de agora. Nada que a rodada 1 confirmou virou defeito aqui.

VEREDITO: PASS
