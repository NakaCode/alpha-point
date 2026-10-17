# Laudo · crítico de roteiro · rodada final

Revisão julgada: `44ec6a38887f` · data-base 2026-10-17
(sha256 do texto falado pelo `gate.mjs`: `44ec6a38887f3f1a8a848334714e7a441224465b65aeba5b972cc11857a33cf3`; o portão PASSA, 2.041
palavras, ≈11:05 a 184 palavras/min, 27 parágrafos, 129 frases, média 15,8, maior 31, gancho com 166 palavras e o "But" na palavra
44; um alerta de palavra, o "still" de p7; taxas todas abaixo do teto; autoplágio literal vazio contra Juneau, Los Angeles e Zona do
Canal.)

Rubrica lida nesta sessão: o ofício da pré-v1 (`crafts/critico-de-roteiro/OFICIO.md`, `CONTRATO.md`, `SPEC.md`), `marca/voz.md`,
`marca/embalagem.md` §1, §1.1 e §2, `marca/cta.md` §1–§3, as operações e o item 1 de `out/_analises/estudo-roteiro/cetico.md`.
Contra o quê: `roteiro-editor.md` (a lista "De onde vem cada frase", o livro-razão e o destino das cifras existem e foram usados),
`pautas/peru-agua/fundamento.md` inteiro (com "O que não se diz", o transversal, os riscos, o que ficou aberto, os voláteis e o
critério de pronto), o `fundamento.json` consultado pelos ids e as regras de pauta (R01, R14, R19, R40, R54), `_trabalho/plano-final.json`
(as `ponte_saida`, a tese e os riscos), as decisões da Sala de 17/10/2026 e os fechos dos três roteiros anteriores. Sem rede: o
spot-check foi no JSON e nas cópias locais de `midia/peru-agua/fontes/`. O texto inteiro foi lido como audiência antes das lentes. O
laudo da rodada 1 só foi aberto depois de este ser gravado (comparação no fim).

VEREDITO: RESSALVA
(APROVADO COM RESSALVAS pela escala do CONTRATO §3. Nenhum achado estrutural, nenhum veto duro, nenhuma regra da Sala quebrada. O
pior é uma imprecisão que estreita a fonte (o El Niño "mostly in the north", que o SENAMHI dá para o norte E o centro, onde fica
Lima) e uma contradição de palavra no mesmo bloco ("drizzle, not rain" contra "rain, almost all of it drizzle"). Os sete se consertam
com uma troca cada.)

NOTAS: Sotaque de máquina 8/10 · Storytelling e retenção 8/10 · Voz alta 8.5/10 · Factual e atribuição 8.5/10 · Embalagem e promessa 9/10

**Destes 7 achados, valem 3** (os médios: 1, 2 e 3). Os 4 leves são polimento, aplicáveis em lote. O texto entrou em retorno
decrescente: depois desta lista, mexer custa mais do que rende (ofício §3.1). As 7 trocas, aplicadas juntas numa cópia fora do
repositório (scratchpad), casam uma vez cada e passam no `gate.mjs`: 2.028 palavras (≈11:02, acima do piso de 1.950), 128 frases,
média 15,8, maior 31, gancho intacto (166 palavras, "But" na palavra 44), o mesmo alerta do "still", autoplágio vazio. Nenhuma troca
encosta no gancho, na resposta de p7 nem na coda.

ACHADOS:

1. [MÉDIO · Factual (a fonte diz mais que a voz; ESCALA) · CORRIGIR] `The sea warms, and the desert coast gets heavy rain and floods, mostly in the north.`
   → O SENAMHI (`mec-01`, Climas del Perú 2021, a cópia local `senamhi-2021-climas-del-peru.txt`, l. 1048–1060): nos fortes eventos El
   Niño, o clima da costa muda "de templado y desértico a cálido y lluvioso … principalmente en la Costa norte y central". A voz
   corta o centro, que é onde fica Lima, a cidade do vídeo: o ouvinte conclui que Lima escapa, e o próprio dossiê registra os 3,6 mm
   de março de 2023 em Lima (`evt-24`). `mec.afi-22` não dá o recorte; o trecho que dá é este. Nenhum número novo.
   → TROCA: `The sea warms, and the desert coast gets heavy rain and floods, mostly in the north and the center.`
   → RAIZ: PONTUAL

2. [MÉDIO · Voz alta + Factual (a mesma palavra com dois sentidos no mesmo bloco) · CORTAR] `It stays as fog, low cloud and drizzle, not rain.`
   → Trinta segundos depois (≈2:24 → ≈2:55), a voz diz "In a normal year, Lima gets about a third of an inch of rain, almost all of it
   drizzle", e o gancho prometeu "about a third of an inch of rain a year". Primeiro a garoa "não é chuva", depois a chuva de Lima "é
   quase toda garoa": o ouvinte tropeça justamente na cifra da memória n.º 3. O SENAMHI conta a garoa na chuva (os 8 mm de Campo de
   Marte são "en forma de lloviznas", `mec.afi-09`). O contraste que a frase quer já está na anterior ("cannot rise to build a rain
   cloud") e volta em "The dry side gets real rain too", que continua certo sem o "not rain".
   → TROCA: `It stays as fog, low cloud and drizzle.`
   → RAIZ: PONTUAL

3. [MÉDIO · Storytelling (a frase do período errado; a ponte de dois tempos) + Sotaque (carga numérica) · CORTAR] `The city drew newcomers: in 1993, almost four in ten of Lima's residents had been born somewhere else. Many of them built`
   → No 4º parágrafo de p4 (≈6:29) a linha do tempo vai de 2022 (a frase anterior) a 1993, volta a 1971 e avança a 1981. "Many of
   them" amarra as casas da borda aos residentes de 1993, e a frase seguinte dá o exemplo de 1971: o ouvido entende que os de 1993
   fizeram a invasão de Pamplona. Além disso, é a 11ª fração em ≈70 s de p4 (fewer than three in ten, more than half, nearly six in
   ten, more than doubled, half a million, 650,000, ten and a half million, one in ten, a third, 40 percent, four in ten), logo antes
   de 180, 7,000 e one in four. O 38,8 % é do `crescer` do plano, opcional; a tese não depende dele. A ligação migrante → barriada
   continua sustentada (CVR, `cvr-tomo4-1.5-lima-metropolitana.txt`, l. 222: "la migración interna dio inicio a la formación de
   barriadas precarias"). O pedido à voz cai de 105 para ~91 palavras, dentro de 40–110. Se o regente quiser o número, ele vai à
   tela com o dono, não à voz.
   → TROCA: `The city drew newcomers, and many of them built`
   → RAIZ: PONTUAL

4. [LEVE · Voz alta (referência ambígua na dobradiça p3 → p4) · REDIZER] `It did not put most of its people on the coast.`
   → O "its" vem logo depois de "Peru's capital": o possuidor mais perto é a capital, e "the capital's people on the coast" não faz
   sentido, então o ouvinte gasta meio segundo para chegar a "Peru's". É a ponte que p4 paga ("In 1940, Peru's census found most of
   them in the highlands"), e o "them" continua com antecedente. A mesma afirmação, sem número nem régua nova (a régua da Costa do
   censo vem na frase seguinte de p4, como hoje).
   → TROCA: `It did not put most Peruvians on the coast.`
   → RAIZ: PONTUAL

5. [LEVE · Voz alta (o público de qualquer país) · CORTAR] `That summer rain runs off fast, down short rivers.`
   → A frase anterior acabou de dizer "from December to March". Para quem ouve no hemisfério norte (o público é quem fala inglês em
   qualquer país, `marca/voz.md` §1), "summer" logo depois de dezembro soa como erro, e o vídeo não diz que é o verão do sul. A
   palavra não traz informação que a frase anterior não deu.
   → TROCA: `That rain runs off fast, down short rivers.`
   → RAIZ: PONTUAL

6. [LEVE · Coesão (o antecedente trocado) · REDIZER] `almost all of those homes bought water`
   → A frase anterior contou "more than 700,000 people"; "those homes" aponta para casas que a voz não nomeou. A fonte é dos lares:
   "el 94.7% de los hogares sin conexión" (`lim.num-24`, nos 16 distritos periurbanos). A troca diz o mesmo grupo da fonte, sem
   número novo.
   → TROCA: `almost all homes without a connection bought water`
   → RAIZ: PONTUAL

7. [LEVE · Voz alta (colisão de sentido) · REDIZER] `An official at the utility told the agency it brings`
   → Em p6 já passaram "Peru's water regulator" e "the utility"; "the agency" se ouve como mais um órgão do governo, e não como a AFP,
   que é agência de notícias. "Told AFP" poria a sigla três vezes em quatro frases.
   → TROCA: `An official at the utility told the news agency it brings`
   → RAIZ: PONTUAL

RISCO DE ABANDONO (a 184 palavras/min, pela contagem do portão):
- O maior fica entre ≈5:15 e 6:40 (p4): a série do censo e Lima em frações, sem pessoa desde Pizarro (≈4:50) e até a Catalina
  (≈8:55). O achado 3 tira uma fração e a volta no tempo; o resto a tela carrega (a série do INEI, os bonecos que descem). Villa El
  Salvador (≈6:35) é o resgate: o primeiro lugar com gente desde 1535.
- O segundo, entre ≈2:00 e 2:50 (p2, 1º parágrafo): o mecanismo é abstrato, sem lugar nem rosto. Não pede corte (é a explicação que
  tira o vídeo da "sombra de chuva" dos concorrentes); pede que a animação do corte do ar entre já na 1ª frase.
- O terceiro, entre ≈8:05 e 8:37 (p5, 4º parágrafo): administração da empresa (o "only way", os outros dois rios, Cárhuaz, as 19
  lagoas). O resgate é "On the hills at the city's edge, many homes are not on the network at all." e a Catalina logo depois.

VARREDURA "ESTADO DO MUNDO" (toda frase no presente ou que diz que algo continua):
- `But that is where most Peruvians live.`: CONFIRMADA no presente pela Costa do censo de 2025 (58,7 %, `doc.num-27`), que fica
  dentro do lado do Pacífico; o número da vertente vem datado na frase seguinte (2012).
- `With its port, Callao, it is home to more than ten million people.`: CONFIRMADA, censo de 2025 (10.643.581 censados, `doc.num-33`).
- `And more than half of the water Lima stores for the dry season sits in lakes on the other side of the line.`: CONFIRMADA para 2007
  (157 de 282, `mec.num-54`), e p5 a data ("By its 2007 figures"). O gancho fica sem ano na forma exata da Sala; a SEDAPAL de 2021 (62
  %, que inclui o Huascacocha, também do lado amazônico) aponta para o mesmo lado. Não é achado.
- `Its capital, Iquitos, can only be reached by air or river, as Harvard's Growth Lab puts it.`: CONFIRMADA e atribuída (Growth Lab, 04/2023,
  `gen-18`, só o resumo da página).
- `Peru's own water authority calls that a paradox.`: CONFIRMADA (ANA, 2009, repetido em 2016; `doc.afi-05`).
- `Lima gets about a third of an inch of rain a year` e `In a normal year, Lima gets…`: CONFIRMADAS (normal 1981–2010, SENAMHI).
- `the town of Satipo gets more than six feet of rain a year`: CONFIRMADA (normal 1991–2020, OMM).
- `a 2012 study reports that underground channels called puquios carry water to some fields`: DATADA pelo estudo (`gen-15`); a
  forma da R54.
- `From May to November, Peru's ombudsman reports, its natural flow falls…`: CONFIRMADA (Defensoría, 2025).
- `the system has been in service since 1963`: CONFIRMADA em 2025 (a Defensoría o descreve em operação; a SEDAPAL, em 2021, o chama de
  "único medio").
- `The utility calls the tunnel the only way…` e `The water Lima keeps on the far side of those mountains has only one way through.`:
  CONFIRMADAS (SEDAPAL, 17/02/2021; "un solo túnel trasandino", Defensoría, 2025). O Huascacocha usa o mesmo túnel: o "only" vale.
- `The city also draws on two other rivers, the Chillón and the Lurín, and on wells.`: CONFIRMADA (2023, `lim.afi-01`, `lim.num-13`).
- `the releases run from May 1 to November 30` e `Every May 1, the utility starts letting out its high lakes`: CONFIRMADAS como fala
  de Cárhuaz, reportada em 2024 e atribuída em p5; a coda é a mesma afirmação, sem número.
- `On the hills at the city's edge, many homes are not on the network at all.`: CONFIRMADA e datada no parágrafo seguinte (Sunass,
  março de 2026).
- `Lima has been planning a second tunnel since the 1990s.` / `As of late August 2026, that tunnel still had no construction date.`:
  CONFIRMADA e DATADA (estudo de 1996; Gestión, 30/08/2026, com a ProInversión). Volátil: a Sala relê na semana da gravação. O alerta
  do portão ("still") fica aceito: é estado com data, a forma da R10.
- `Peru lives on the dry side of the Andes.` / `From May to November, part of its capital's water comes from the other one.`: CONFIRMADAS
  ("part", sem fração do consumo: tr-06).
- Os presentes de documento ("UNESCO calls", "describes", "says", "Peruvians call them barriadas") são descrição, não estado do mundo.
- Fora do texto, como a Sala decidiu: El Niño de 2026–27, as represas de 2026, o Huascacocha, as Obras de Cabecera (fora a data do
  túnel) e a Ariana.

SPOT-CHECK (JSON e cópias locais, sem rede):
- O El Niño "mostly in the north": CORRIGE A VOZ (achado 1). SENAMHI 2021, l. 1048–1060: "principalmente en la Costa norte y central".
- A chuva de Lima e a garoa: os 8 mm são "en forma de lloviznas" (`mec.afi-09`): a garoa entra na chuva (achado 2).
- Loreto, o maior departamento: CONFIRMADO ("Although it is the largest department in Peru, it is one of the least populated",
  `gen.afi-26`); "most thinly populated" se paga com os 2,4 hab./km² de 2017.
- Os 180 e os 7.000 de 1971: CONFIRMADOS ("la invasión de 180 familias"; "Se trató, entonces de ubicar alrededor de 7,000 familias",
  `gen.num-19`): as 180 invadem, o governo trata de reassentar umas 7.000. A voz está certa.
- O "one in four … by 1981": CONFIRMADO (25,5 % em 1981 na tabela da CVR, INEI 1996, `gen.num-14`; também 25,5 % em 1970, por isso
  "by 1981" não erra).
- A capacidade do túnel: CONFIRMADA ("The capacity of both the Cuevas canal and the Cuevas-Milloc tunnel is 14 m3/sec", JICA 2002,
  `lim.num-03`); 14 ÷ 7,8 = 1,8, "nearly twice".
- Os indígenas carregadores de Jauja: CONFIRMADOS no auto ("por cargarlos han sido muchos de ellos muertos", `gen.afi-10`); "agreed"
  respeita a ressalva de que a ideia foi do próprio Pizarro.
- Os de Puente Piedra que vieram dos Andes: o grupo e o fato no mesmo trecho ("most have moved from the Andean regions in search of
  better work", `gen.afi-33`, Los Condes). Passa.
- A ESCALA: "more than ten million" (gancho) e "more than ten and a half million" (p4) batem com 10.643.581; "more than half of the
  water Lima stores for the dry season" igual no gancho e em p5; "about a third of an inch" igual no gancho e em p2; "about three-
  quarters" e "less than a quarter" fecham com os 3,81 % do Titicaca, que p1 nomeia; o túnel "in the early 1960s" (gancho, p7) e
  "between 1958 and 1962 … since 1963" (p5) na forma da R08.

DECISÕES SOBRE OS ALERTAS DO PORTÃO: o único alerta de palavra ("still", p7) fica: estado datado ("As of late August 2026"), volátil
marcado. O túnel está no gancho; o "2 percent" e o lado seco estão na 3ª frase; nenhuma taxa no teto; autoplágio literal vazio.

NOTA FORA DA RUBRICA DESTA RODADA (não é achado; não pede troca agora): o fecho é o 4º do canal com o mesmo esqueleto: "So" + a pergunta
do gancho repetida palavra por palavra + a resposta em lista (aqui "First, the valleys: … Then the port: … Then the people: … The water
had to be brought to them: …"). O laudo da Zona do Canal já disse que "a terceira vira molde da casa"; o portão não pega porque é
paráfrase. Quem ouve um vídeo só não percebe; quem assiste ao canal, sim. Neste vídeo a resposta é a melhor do canal (sem número novo,
cada camada paga antes), e mexer na rodada final custa mais do que rende. Vale o registro em `APRENDIZADOS.md` e uma pergunta ao Lucas
antes do roteiro do vídeo 5.

O QUE ESTÁ FORTE:
- **O gancho paga o título nas 3 primeiras frases e numa fonte só**: a linha, os Andes e o Peru na 1ª frase; o lado amazônico com
  "more than 97 percent" na 2ª; o lado seco com "about 2 percent" na 3ª; o "But" na palavra 44; e o "more than three in five" com o
  ano e o dono na forma da R01. A segunda virada (a água guardada do outro lado, um túnel só) é a decisão da Sala palavra por palavra,
  e a pergunta é a do título.
- **O mecanismo na ordem do SENAMHI, sem a "sombra de chuva" como causa**: a ponte de p1 põe a causa principal no Pacífico, o elo
  novo do P01 ("The cold sea chills the air above it, and the sinking air settles on top as a lid of warmer air.") explica de onde
  vem a tampa, "The mountains help." rebaixa a montanha, e o El Niño prova o sistema pelo avesso. É o que separa o vídeo dos
  concorrentes.
- **A resposta de p7 não traz número novo**, e cada camada foi paga antes (Caral, o "very good port", a descida do censo, o canal, o
  túnel, o caminhão); a coda devolve o título e a travessia de maio a novembro com "part", sem fração do consumo.
- **A disciplina de atribuição nas frases delicadas**: "partly because" com o "middle of the land" da mesma ordem; "built first to
  power a hydroelectric plant, and also to firm up the river Lima drinks from" com o SENAMHI; a Defensoría "citing the utility's own
  plan"; "In figures reported in March 2026"; "AFP reported that those deliveries were free"; a revista nomeada só como "a German
  magazine".

NÃO TOCAR:
- O gancho inteiro, como está, com a assinatura ("You're at Alpha Point, and this is where the story of Peru's water divide begins.").
- "more than half of the water Lima stores for the dry season" (gancho e p5) e "By its 2007 figures": a forma da Sala.
- O 1º parágrafo de p2, menos o "not rain" do achado 2: "Over the South Pacific sits…", "three things keep the sea unusually cold…",
  "The cold sea chills the air above it, and the sinking air settles on top as a lid of warmer air." e "Under that lid, the moisture
  cannot rise to build a rain cloud."
- "The mountains help." (a única frase curta do texto, no lugar da hierarquia da R14).
- "They are commonly attributed to the Nazca culture." (a forma da R54) e o "a 2012 study reports".
- p3 de "In late 1534" a "with little work.", e "Lima was founded that month, in the Rímac Valley, near the sea and the port of
  Callao." (a cama da inscrição, ≈4:58, sem número e sem "here").
- "Census figures cited by Peru's truth commission put about one in four of Lima's people in informal settlements by 1981." e
  "Peruvians call them barriadas." (só 1981 fecha, tr-04).
- "It was built between 1958 and 1962, and the system has been in service since 1963." e a frase do SENAMHI que a segue.
- A frase de Cárhuaz ("In remarks reported in 2024, … told its press office…"): é longa, mas é a forma honesta de quem entrevistou.
- p6 inteira, menos as trocas 6 e 7: as duas cooperativas separadas, a Virginia numa e a Tula na outra.
- "As of late August 2026, that tunnel still had no construction date."
- A resposta de p7 e a coda, palavra por palavra (a nota fora da rubrica, acima, é para o vídeo 5, não para este).
- As pontes do plano, todas mantidas: "Peru's weather service says the main reason the coast is so dry lies out over the Pacific.",
  "And yet people built a city on that coast about 5,000 years ago.", "That put Peru's capital on the dry side of the line." (a
  segunda frase muda só pelo achado 4), "A city that size needs water all year, and its river runs low for seven months of it.",
  "The water makes it across the line. On the hills at the city's edge, many homes are not on the network at all." e "Most of the
  families there, the magazine reported, had come down from the Andean regions in search of better work."

COMPARAÇÃO COM A RODADA 1 (`qc-roteiro/roteiro-r1.laudo.md`, aberto só depois de gravado o que está acima):
A rodada 1 julgou `87ea57b0abe5` e deu FAIL com 18 achados (3 graves). Na revisão de hoje:
- **Resolvidos (16):** 1 (Virginia e as 42 famílias em cooperativas separadas, L01), 2 (as 180 invadem e o governo reassenta umas
  7.000; o "May" saiu, L02), 3 ("there" → "on the coast", L03), 5 ("AFP reported that those deliveries were free.", L13), 6 (a 2ª
  atribuição ao SENAMHI cortada, L15), 7 (o cinturão do Atacama cortado, L17), 8 ("As of late August 2026, that tunnel…", L18), 9 ("A
  large share" → "The city drew newcomers", L11), 10 (Olmos cortado, L20), 11 ("mostly high up, and most of it from December to
  March"), 12 ("most thinly populated", L04), 13 ("the Lima region, with Callao", L10), 14 ("describes"), 15 (os puquios na ordem nova,
  L21), 16 ("She said she washed…"), 18 (a estação de Marcapomacocha cortada, L19).
- **Fora por decisão da lista (2), e que esta rodada não reabre:** o 4 (o PEDIR do fecho; conflito 1 da lista-r1, "decisão da Sala")
  e o 17 ("built" → "in service since the early 1960s" no gancho). Do 4, fica a nota fora da rubrica acima, para o vídeo 5; o 17 esta
  rodada não reabre, porque o gancho está na forma que o dossiê aceita (R08) e p5 dá as duas datas.
- **O que esta rodada acha que a rodada 1 tinha visto e a lista não fechou:** o achado 3 de hoje é a "sugestão fora da rubrica" do
  achado 9 da rodada 1 (o parágrafo anda 1993 → 1971 → 1981); o REDIZER do L11 tirou a referência órfã e deixou a volta no tempo. O
  "drizzle, not rain" (achado 2 de hoje) estava no achado 10 da rodada 1, mas como antítese, e não como a contradição com a chuva de
  Lima.
- **O que a rodada 1 criou:** o achado 4 de hoje ("most of its people on the coast", o "its" ambíguo) é resíduo da troca L03, que
  consertou a régua e deixou o possessivo. É o sinal de que a curva virou (ofício §3.1): depois desta lista, parar.
- **Novos de fato (4):** o 1 (o El Niño sem o centro), o 5 ("summer" para o público do norte), o 6 ("those homes") e o 7 ("the
  agency"). O "the agency" do 7 já estava na frase que o achado 5 da rodada 1 citou e completou: a rodada 1 não o ouviu.
