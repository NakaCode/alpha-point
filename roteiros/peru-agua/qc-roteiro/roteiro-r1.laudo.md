# Laudo · crítico de roteiro · rodada 1

Revisão julgada: `87ea57b0abe5` · data-base 2026-10-17
(sha256 do texto falado pelo `gate.mjs`: `87ea57b0abe551676e18c3347454c08c1cdc7a8501c51b49ad650791fcd4a5a0`; o portão PASSA, 2.039
palavras, ≈11:05 a 184 palavras/min, 27 parágrafos, 127 frases, média 16,1, maior 31, gancho com 166 palavras e o "But" na palavra 44;
um alerta, o "still" de "In 2026, it still had no construction date."; taxas todas abaixo do teto; autoplágio literal vazio.)

Rubrica lida nesta sessão: o ofício da pré-v1 (`crafts/critico-de-roteiro/OFICIO.md`, `CONTRATO.md`), `marca/voz.md`, `marca/embalagem.md`
§1, §1.1 e §2, `marca/cta.md` §1–§3 e §5, as operações e as armadilhas de `out/_analises/estudo-roteiro/` (o item 1 e o item 3 do
`cetico.md`; a lista fechada de L5). Contra o quê: `roteiro-editor.md` (a lista "De onde vem cada frase", o livro-razão e o destino das
cifras existem e foram usados), `pautas/peru-agua/fundamento.md` (a tese, o gancho, os ajustes, os números de tela, as medidas, os riscos,
"O que não se diz", o transversal, "O que ficou aberto", os voláteis, o critério de pronto e as 63 regras de pauta) e o `fundamento.json`
consultado pelos ids, `_trabalho/plano-final.json` (as `ponte_entrada` e `ponte_saida`) e as decisões da Sala de 17/10/2026. Sem rede: o
spot-check foi no JSON e nas cópias locais de `midia/peru-agua/fontes/`. Não li outros laudos desta rodada; o juiz (`_trabalho/juiz.md`)
aprovou as pontes, e esta lente não defere a ele.

VEREDITO: FAIL
(REPROVADO pela escala do CONTRATO §3: três erros de fato, nenhum estrutural, cada um consertável numa ou duas frases. O pior é a
composição de trechos em p6: a revista põe Virginia Martínez Morales numa cooperativa e as 42 famílias, o caminhão que deslizou e Tula
noutra, e o roteiro as junta com um "There". Os outros dois: as 180 famílias de 1971 eram a invasão, e o reassentamento foi pensado para umas 7.000;
e a dobradiça p3 → p4 diz que a gente não estava "no lado seco da linha" e prova com a Costa do censo, que é outra régua. A espinha, o
gancho, a ordem das partes e as decisões da Sala estão certos e não se mexem.)

NOTAS: Sotaque de máquina 7,5/10 · Storytelling e retenção 7,5/10 · Voz alta 8/10 · Factual e atribuição 6/10 · Embalagem e promessa 8,5/10

**Destes 18 achados, valem 10** (os 3 graves e os 7 médios); os 8 leves são polimento, aplicáveis em lote. As 18 trocas com redação
(todas menos o PEDIR do achado 4), aplicadas juntas numa cópia fora do repositório (scratchpad), casam uma vez cada e passam no
`gate.mjs`: 2.010 palavras (≈10:55, acima do piso de 1.950), média 15,8, maior frase 31, gancho com 167 palavras e o "But" na palavra 44,
autoplágio vazio, o único alerta o "still" já datado; o maior pedido à voz fica em 110 palavras (p4, 4º parágrafo, no teto de 40–110).
Só o leve 17 encosta no gancho.

ACHADOS:

1. [GRAVE · Factual (composição de trechos; pessoa real) · CORRIGIR] `On the city's northern edge, in Puente Piedra, a German magazine visited a cooperative of 42 families without water, sewers or electricity, in January 2024. There, Virginia Martínez Morales, 30, a mother of three, ran a hose from a tank up the hill down to her door.`
   → Na reportagem (`gen-23`, cópia local `kulturaustausch-2024-thirsty-metropolis-lima.txt`, l. 59–61 e 67), Virginia mora na
   cooperativa "Siempre Unidos de Villa Verde"; as 42 famílias sem água, esgoto nem luz são a de Los Condes (l. 67), e é lá que o
   caminhão deslizou e que Tula carrega baldes (l. 71–72). O "There" põe uma pessoa real num lugar onde a fonte não a põe (risco
   editorial 13: "não juntar cenas que sugiram o que a fonte não diz"). Duas faltas menores no mesmo par: (1) "a tank up the hill down
   to her door" é direção que a fonte não dá (ela diz que os tanques ficam onde o caminhão alcança e que Virginia "used to have to walk
   up the steep hill with canisters, but now I can at least pipe the water to my front door"); (2) "visited … in January 2024" é a data
   da edição (26/01/2024), não a da visita, que foi antes (o acidente do caminhão é "Last August"): frase do período errado. A troca
   também tira o "Another" de Tula, que ficaria sem antecedente.
   → TROCA: `On the city's northern edge, in Puente Piedra, a German magazine described two cooperatives in a January 2024 report. In one, Virginia Martínez Morales, 30, a mother of three, piped water from a tank to her front door. The other had 42 families without water, sewers or electricity.`
   → TROCA (no mesmo parágrafo): `Another resident, Tula Tinoco Espinoza, began carrying buckets.` → `A resident, Tula Tinoco Espinoza, began carrying buckets.`
   → A ponte de p6 ("Most of the families there, the magazine reported, had come down from the Andean regions in search of better
   work.") fica como está: "there" passa a ser Los Condes, que é o lugar da frase na fonte (l. 67). O card de Virginia na tela muda de
   cena se for preciso: não sobre a cooperativa das 42 famílias.
   → RAIZ: COMPOSIÇÃO

2. [GRAVE · Factual (número errado) · CORRIGIR] `In May 1971, the government moved 180 families who had taken over a plot of land to a vast, semi-desert stretch of sand south of the city.`
   → Medina García (`gen-17`, cópia local `pucp-debates-6875.pdf`, pp. 1–2): os 180 são da invasão ("la invasión de 180 familias a un
   terreno de propiedad del Estado y terrenos aledaños"); depois da repressão e da cobertura da imprensa, "se generó una movilización
   casi incontenible. Se trató, entonces de ubicar alrededor de 7,000 familias" (`gen.num-19` registra os dois números). O governo não
   "moveu 180 famílias": o reassentamento foi pensado para umas 7.000. O "a plot of land" do roteiro fica (é seguro, e a troca não põe
   "state land").
   → TROCA: `In May 1971, 180 families took over a plot of land, and more followed. The government set out to resettle about 7,000 families on a vast, semi-desert stretch of sand south of the city.`
   → RAIZ: PONTUAL

3. [GRAVE · Factual (régua trocada na dobradiça; tr-15, R12, ajuste 14) · CORRIGIR] `It did not put most of its people there.`
   → A ponte p3 → p4 do plano. "There" é "on the dry side of the line", a vertente (régua de bacia), e p4 a prova com o censo de 1940:
   "most of them in the highlands" e "fewer than three in ten … in the region the census calls the coast" (régua de distrito do INEI).
   Isso prova que a maioria não estava na Costa, não que não estivesse no lado seco: a Sierra de 1940 inclui a encosta oeste, que drena
   para o Pacífico, e a população por vertente só existe para 2012 (`doc.num-25`; "O que ficou aberto": ninguém a calculou para
   outro ano). O dossiê veta exatamente isto ("Nunca pintar a vertente com os números da Costa", ajuste 14; tr-15; R12). Pela régua da
   DOBRADIÇA, a ponte reprova mesmo com p3 e p4 certos sozinhos. A troca reescreve a ponte no mesmo lugar, sem fato novo, e casa com o
   "the region the census calls the coast" que vem duas frases depois. O resto do vídeo não tem o mesmo defeito: a resposta de p7
   ("the country came down from the mountains, to the coast") fica na régua da Costa, e a Costa de 2025 cabe dentro do lado do Pacífico.
   → TROCA: `It did not put most of its people on the coast.`
   → RAIZ: PONTE DO PLANO

4. [MÉDIO · Sotaque de máquina (autoplágio de esqueleto; anáfora empilhada) + Storytelling (fecho que recapitula) · PEDIR] `Not because that side has the water.`
   → O 2º parágrafo de p7 inteiro, de "So why do most Peruvians live on the dry side of that line?" (a 2ª ocorrência, ≈10:15) até "…and
   at the city's edge, by truck.". É o quarto fecho da casa no mesmo esqueleto: "So" + a pergunta do gancho repetida + a recapitulação
   em lista (Juneau: "So what happened to that yes vote in 1974?"; Los Angeles: "So, why is Los Angeles shaped like this?"; Zona do
   Canal: "So what made Balboa American, if being born there didn't? A treaty, which… A law, which…"). O laudo do vídeo 3 já dizia que
   o terceiro virava molde da casa; este é o quarto. O portão não pega (é paráfrase de esqueleto, e o `autoplagio` sai vazio). Por
   dentro: a negação de abertura ("Not because…") é a família da antítese que o portão não conta; depois, duas listas em série, a
   anáfora "First, the valleys: … Then the port: … Then the people: …" e o tríptico "by canal …, through a tunnel …, and …, by truck";
   e cada membro repete o que p3, p4, p5 e p6 acabaram de contar (o "about 5,000 years ago" pela 2ª vez; o "very good" porto pela 3ª;
   o "early 1960s" pela 2ª). Aos 10:15, quem ouviu os outros vídeos antecipa a lista na primeira oração.
   → O QUE FALTA (sem redação): a resposta chegar sem repetir a pergunta do gancho palavra por palavra e sem a lista em molde paralelo.
   As três camadas (vales, porto, gente) e a tese de que a água foi levada até a gente (canal, túnel, caminhão) ficam, sem número novo
   e sem dado que p3–p6 não pagaram, ditas como consequência do que p7 acabou de mostrar (o risco de um túnel só, o segundo túnel sem
   data, Olmos), e não como recapitulação. Sem "Not because" e sem "First/Then". Se a reescrita fechar em par curto, não pode ser outro
   "still"/"never" (o vício do vídeo 3). O 3º parágrafo de p7 (a coda) não entra no pedido.
   → RAIZ: MOLDE DA CASA

5. [MÉDIO · Factual (conclusão por justaposição; pessoa real) · QUALIFICAR] `An official at the utility told the agency it brings about 260 gallons of water a week to each family in the parts of the district without pipes.`
   → O parágrafo anterior acaba em "almost all of those homes bought water from tanker trucks, at about six times what connected homes
   pay" (Sunass, 16 distritos), e logo vem Catalina Naupa com a água "by truck". O ouvido conclui que ela paga seis vezes. A AFP diz o
   contrário para aquele lugar: "Blue tanker trucks bring water for free once a week, sometimes less, to parts of San Juan de Miraflores"
   (`gen-22`, cópia local `enca-afp-lima-running-water-dream.txt`, l. 39). Sem a palavra, a justaposição põe na conta de uma pessoa real
   o preço que a fonte não lhe atribui.
   → TROCA: `An official at the utility told the agency it brings about 260 gallons of water a week to each family in the parts of the district without pipes. AFP reported that those deliveries were free.`
   → RAIZ: JUSTAPOSIÇÃO

6. [MÉDIO · Sotaque de máquina (atribuição repetida) · CORTAR] `Peru's weather service calls that sinking air the main cause of the coast's dryness.`
   → Dez segundos antes, a ponte de p1 já disse "Peru's weather service says the main reason the coast is so dry lies out over the
   Pacific", e a frase de abertura de p2 mostra o que está sobre o Pacífico ("a vast high-pressure system, and under it, the air
   sinks"). A segunda atribuição repete dono e conteúdo: é a ressalva que deixa de informar (OFÍCIO §4.4, "dita uma vez"). A hierarquia
   da R14 continua no lugar: a causa principal sobre o Pacífico, o ar que desce na frase colada, e "The mountains help." depois. O corte
   é também a 1ª das oito frases "X calls Y Z" do texto (achado 14).
   → TROCA: cortar a frase.
   → RAIZ: PONTUAL

7. [MÉDIO · Storytelling (carga numérica; trivia marginal) · CORTAR] `It does not stop at the border: with Chile's Atacama, it forms a desert belt more than 2,000 miles long.`
   → O 4º parágrafo de p2 (≈3:15–3:40) empilha "about half", "about 27,000 square miles", "more than 2,000 miles" e "about 5,000 years":
   quatro números pesados num pedido à voz, no ponto em que o "por que é seco" já foi respondido e a pergunta da gente ainda espera
   (risco de abandono, abaixo). O cinturão é do `crescer`, tira a câmera do Peru para o Chile e não volta no fio. Sem ele, "…to Tacna,
   at the border with Chile." encosta direto na ponte do plano ("And yet people built a city on that coast…"). Some também uma das
   negações-contraste (achado 12).
   → TROCA: cortar a frase.
   → RAIZ: PONTUAL

8. [MÉDIO · Factual (estado do mundo; volátil) + Voz alta (referência ambígua) · DATAR] `In 2026, it still had no construction date.`
   → É o alerta do portão. Duas coisas. (1) "In 2026" no passado fala de um ano que não acabou quando o vídeo sai; a leitura é de
   30/08/2026 (`lim-10`, a Gestión com a ProInversión; `lim.afi-17`), e a Sala relê na semana da gravação. A data da leitura é a régua
   honesta (voz §2: data absoluta). (2) "it" vem logo depois de "Lima has been planning a second tunnel": o sujeito gramatical mais
   perto é Lima.
   → TROCA: `As of late August 2026, that tunnel still had no construction date.`
   → Se a Sala reler na semana da gravação e a data não tiver mudado, troca "late August 2026" pelo mês da leitura nova.
   → RAIZ: VOLÁTIL

9. [MÉDIO · Storytelling (referência órfã) · REDIZER] `A large share were newcomers: in 1993, almost four in ten of Lima's residents had been born somewhere else.`
   → O parágrafo anterior acaba em "about two-fifths of Peru's economic output". Depois da pausa, "A large share" soa como parte do PIB, e
   só no fim da frase o ouvido descobre que é gente. A troca diz a mesma coisa, sem número nem grupo novo, e mantém o "them" da frase
   seguinte ("Many of them built their own homes…") com antecedente. Fica para a reescrita, se houver: o parágrafo anda 1993 → 1971 →
   1981 (sugestão fora da rubrica: a ordem dos anos, não o fato).
   → TROCA: `Lima drew newcomers: in 1993, almost four in ten of its people had been born somewhere else.`
   → (A forma "of its residents had been born" casa 6 palavras com o roteiro da Zona do Canal no autoplágio do portão; esta não.)
   → RAIZ: PONTUAL

10. [MÉDIO · Sotaque de máquina (o reflexo da antítese) · REDIZER] `Lima's is not the only tunnel across the line. In the north, a tunnel about 12 miles long carries water from the Amazon side to farmland on the coast.`
   → A família "X, not Y" que o portão não conta (a `antitese` sai 0) aparece sem a palavra: "drizzle, not rain" (p2), "It does not stop
   at the border" (p2), "It did not put most of its people there" (p3), "many homes are not on the network at all" (p5), "Lima's is not
   the only tunnel" e "Not because that side has the water" (p7, a 20 s uma da outra). É em p7 que o molde fica audível: duas
   negações-virada em seguida, no último minuto. Teste da afirmação seca: a frase de Olmos sem o contraste diz o mesmo, e o "another"
   já diz que o de Lima não é o único. É a forma da R20 antes da revisão de 17/10, sem fato novo ("carries" é a da revisão).
   → TROCA: `In the north, another tunnel, about 12 miles long, carries water from the Amazon side to farmland on the coast.`
   → RAIZ: METRÔNOMO

11. [LEVE · Factual (universal) · QUALIFICAR] `The dry side gets real rain too, but only high up, from December to March.`
   → "Only … from December to March" é absoluto; a fonte diz "quase toda no verão (dezembro a março)" (`mec.afi-12`), e a da ANA, "alrededor
   del 80%" (`doc.num-17`, observação).
   → TROCA: `The dry side gets real rain too, but only high up, and mostly from December to March.`

12. [LEVE · Factual (a palavra que o ouvido lê de outro jeito) · REDIZER] `is also one of its least populated.`
   → A frase é do Growth Lab ("one of the least populated in the country", `gen-18`, cópia local, l. 86), mas "least populated" se ouve
   como "com menos gente", e Loreto não está entre os departamentos com menos gente; o número do dossiê é de densidade (2,4 hab./km²,
   2017, `gen.afi-26`). A troca diz o que o número mede.
   → TROCA: `is also one of its most thinly populated.`

13. [LEVE · Factual (régua trocada: departamento × cidade) · REDIZER] `In 2022, Lima and Callao alone produced`
   → Na mesma parte, "Lima and Callao" é a cidade (a província de Lima e o Callao: 650 mil → 10,6 milhões). O 41,9 % do INEI é o
   departamento de Lima com o Callao ("Lima incluye la Provincia Constitucional del Callao", `doc-17`, cópia local
   `inei-lib1940-parte01.txt`, l. 1416), que inclui as províncias fora da cidade. "The Lima region" já é, em p1, o nome do departamento.
   → TROCA: `In 2022, the Lima region and Callao together produced`

14. [LEVE · Sotaque de máquina (tique intra-roteiro) · REDIZER] `which UNESCO calls the largest earthen city`
   → "X calls Y Z" é o verbo de atribuição oito vezes entre 1:45 e 7:20 ("calls that a paradox", "calls that sinking air", "calls Lima",
   "UNESCO calls it", "which UNESCO calls", "the region the census calls", "which Peruvians call", "The utility calls"). Com o achado 6,
   ficam sete; esta troca tira a que cai colada a outra ("UNESCO calls it the oldest…" fica, porque a R42 a pede nessa forma).
   → TROCA: `which UNESCO describes as the largest earthen city`

15. [LEVE · Voz alta (aparte dentro de aparte) · REORDENAR] `In the south, near Nazca, underground channels called puquios, commonly attributed to the Nazca culture, carry water to some fields, a 2012 study reports.`
   → O sujeito fica separado do verbo por um aposto, e a atribuição chega no fim. A troca é a mesma afirmação em duas frases, com o
   dono antes do presente (a forma datada que o `escrita-notas.md`, item 5, deixou ao verificador; a R54 continua: sem "36", sem
   "ancient"). Se p3 precisar de tempo, esta continua a ser a 1ª a cortar.
   → TROCA: `In the south, near Nazca, a 2012 study reports that underground channels called puquios carry water to some fields. They are commonly attributed to the Nazca culture.`

16. [LEVE · Factual (estado do mundo; pessoa real) · DATAR] `She washes clothes once a week, or every two weeks, to save water.`
   → Presente sobre uma pessoa real, tirado de uma reportagem de março de 2025 (`gen-22`, l. 43). A frase de antes está datada ("told AFP
   in March 2025"); esta não.
   → TROCA: `She said she washed clothes once a week, or every two weeks, to save water.`

17. [LEVE · Factual (a ESCALA da data, gancho × p5) · REDIZER] `through a single tunnel, built in the early 1960s.`
   → O gancho diz "built in the early 1960s", e p5, "It was built between 1958 and 1962". A forma do gancho é aceita pelo dossiê (gancho,
   3ª coisa), mas o ouvido que chega a p5 ouve a obra começar nos anos 1950. "In service since the early 1960s" é a forma da R08, a mesma
   de p7 ("since the early 1960s"), e casa com 1963. Opcional: é a única troca que encosta no gancho (+1 palavra, 167).
   → TROCA: `through a single tunnel, in service since the early 1960s.`

18. [LEVE · Storytelling (trivia marginal; números quase iguais) · CORTAR] `A weather station there, at Marcapomacocha, sits about 65 miles from downtown Lima in a straight line.`
   → A escala já está em p1 ("less than 70 miles away"), e "65" a cinco minutos de "70" é número quase igual para a mesma ideia. A
   estação não é a boca do túnel nem as lagoas (R44), e "a weather station" faz o ouvinte perguntar por que uma estação. O 2º parágrafo
   de p5 tem quatro medidas em 74 palavras; com o corte, ficam três. É o 2º corte opcional do plano em p5.
   → TROCA: cortar a frase.


RISCO DE ABANDONO:
- **≈3:10–3:45** (p2, 3º e 4º parágrafos). O "por que é seco" está respondido por volta de 2:50 (o ar, o mar frio, a tampa, a prova
  pelo El Niño, Lima a um terço de polegada); depois vêm Satipo, a chuva do alto, a cheia que volta ao mar, o deserto em milhas
  quadradas e o cinturão até o Chile, antes de a pergunta do título (a gente) voltar em 3:44. É o pedaço que a concorrência também tem
  (Humboldt, sombra de chuva). Os achados 7 e 11 aliviam; a ponte "And yet people built a city on that coast about 5,000 years ago."
  segura a virada e fica.
- **≈7:30–8:20** (p5, 2º a 4º parágrafos): "nearly 15,000 feet", "about 65 miles", "about 14 miles", "nearly twice", 1958–1962, 1963,
  1964, 1º de maio a 30 de novembro, 19 lagoas e três represas. O achado 18 tira um. O resto é a travessia, que é o diferencial do vídeo.

VARREDURA "ESTADO DO MUNDO" (toda frase no presente, ou que diz que algo continua):
- Gancho: "most Peruvians live" (confirmada: a Costa do censo de 2025, 58,7 %, cabe no lado do Pacífico; a opção (a) do dossiê para
  o título usa o mesmo "most"), "is home to more than ten million" (confirmada: censo de 2025, 10.643.581), "more than half of the
  water Lima stores … sits" (confirmada pela R07: 2007, 2021 e 2025 passam de metade), "reaches the city through a single tunnel"
  (confirmada: SEDAPAL 2021, Defensoría 2025), "gets about a third of an inch" (normal 1981–2010), "is mostly desert" (MINAM 2019).
- p1: "can only be reached by air or river" (atribuída ao Growth Lab, abril de 2023; confirmada para a data); "calls that a paradox"
  (documento de 2009, presente de documento); "is also one of its least populated" (achado 12).
- p2: o mecanismo, as normais (1991–2020 e 1981–2010) e "Some of these rivers run dry" (1969–2004, regime físico) são presente
  geográfico; "runs back into the sea unused" vai em discurso de 2009, datada.
- p3: "sits on a desert terrace", "There stands Chan Chan" (lugar); "carry water to some fields, a 2012 study reports" (datada).
- p5: "holds back water … and lets it out" e "has been in service since 1963" (confirmadas: Defensoría 2025; Cárhuaz 2024); "The utility
  calls the tunnel the only way" (nota de 2021, repetida pela Defensoría em 2025: confirmada); "draws on two other rivers … and on
  wells" (produção de 2023); "regulates 19 lakes and three large reservoirs, he said" (datada, 2024); "many homes are not on the
  network" (confirmada e datada na frase seguinte, março de 2026).
- p6: "her water comes by truck" (discurso de 2025); "She washes clothes" (achado 16); "it brings about 260 gallons" (discurso de 2025).
- p7: "has only one way through" (confirmada, 2025); "Lima has been planning a second tunnel since the 1990s" (confirmada até
  30/08/2026; a forma da R10, que não diz "stalled since 2014"); "In 2026, it still had" (achado 8, DATAR); "carries water" (Olmos,
  em operação desde 2012–2014, `lim.afi-23`: confirmada); "Every May 1, the utility starts letting out" (Cárhuaz, 2024, já atribuída
  em p5: confirmada como o calendário dito); "Peru lives on the dry side" (como o gancho); "part of its capital's water comes from the
  other one" (confirmada, sem fração: tr-06).
- Voláteis que a Sala relê na semana da gravação e que estão na voz: os 700 mil sem conexão (Sunass pela Gestión, 03/2026) e o segundo
  túnel sem data (Gestión, 30/08/2026). El Niño de 2026–27, represas, Huascacocha e Obras de Cabecera não estão na voz: a decisão da
  Sala ("no máximo o necessário") está cumprida. A Ariana está fora; da Defensoría, só o risco do plano da própria empresa (R50).

SPOT-CHECK (JSON e cópias locais, sem rede):
- Virginia e as 42 famílias: CORRIGE A VOZ. Duas cooperativas na revista, Siempre Unidos de Villa Verde (Virginia) e Los Condes (as 42
  famílias, o caminhão, Tula) (`kulturaustausch-2024-thirsty-metropolis-lima.txt`, l. 59–72; achado 1).
- Villa El Salvador: CORRIGE A VOZ. 180 famílias na invasão; "alrededor de 7,000 familias" no reassentamento (`pucp-debates-6875.pdf`,
  pp. 1–2; achado 2).
- O PIB de 2022: CONFIRMADO o 41,9 %, com a régua de departamento: "Lima incluye la Provincia Constitucional del Callao"
  (`inei-lib1940-parte01.txt`, l. 1416; achado 13).
- A AFP em San Juan de Miraflores: CONFIRMADOS a idade, os vermes, a roupa e o metro cúbico ("a cubic meter (260 gallons)", l. 41–44); e
  o caminhão de graça da empresa (l. 39), que o roteiro não diz (achado 5).
- O Growth Lab: CONFIRMADOS "one of the least populated" e "can only be reached by air or river" (l. 86, abril de 2023).
- Os puquios: CONFIRMADO "some of which are still used today" (`gen.afi-07`); a forma datada e "commonly attributed" passam pela R54.
- A ESCALA: "more than half of the water Lima stores for the dry season" igual no gancho e em p5; "about a third of an inch" igual nas
  duas vezes; "more than ten million" (gancho) e "more than ten and a half million" (p4) com o mesmo censo; "less than 70 miles" (a
  linha) e "about 65 miles" (a estação, do outro lado dela) coerentes; "about 5,000 years" igual em p2 e p7; "May to November" e "May 1
  to November 30" coerentes; o "about a third" de Lima e o "a third of an inch" nunca no mesmo bloco (tr-10).
- As conversões: 2.013 mm ≈ 6,6 pés ("more than six feet"); 5.000 m ≈ 16.400 pés; 7.107.338 ha ≈ 27.440 mi²; 4.445 m ≈ 14.580 pés;
  22,0 km ≈ 13,7 mi; 141 km ≈ 88 mi; 80 km ≈ 50 mi; 20 km ≈ 12,4 mi; 645.172 ≈ 650 mil; 7,8 ÷ 30 ≈ um quarto; 14 ÷ 7,8 ≈ 1,8 ("nearly
  twice"): todas certas.
- A capacidade contra a vazão ("The tunnel was designed to carry nearly twice the Rímac's own natural flow in the dry season"): a
  composição de duas fontes (JICA 2002 e Defensoría 2025) é a que o tr-20 pede, com "designed to carry" (capacidade) e a estação dita.
  Não é achado.
- "Almost all of it drizzle" contra a correção de `mec.afi-09` ("all of it drizzle"): a do roteiro é mais fraca que a fonte e convive com
  o El Niño do parágrafo; fica.

DECISÕES SOBRE OS ALERTAS DO PORTÃO: o único alerta ("In 2026, it still had no construction date.") é estado datado, como o escrita-notas
diz, mas a data é a do ano corrente: o achado 8 a troca pela data da leitura. O túnel está no gancho; "2 percent" e o lado seco estão
nas três primeiras frases; taxas todas abaixo do teto; o autoplágio literal está vazio, e o de esqueleto, que o portão não vê, é o
achado 4.

O QUE ESTÁ FORTE:
- **O gancho de cinco tempos paga o título nas três primeiras frases** com uma fonte só (o PNRH): a linha nos Andes, os três quartos e
  os 97 % a leste, o lado seco com "about 2 percent" a oeste; o "But" na palavra 44 traz a gente com o ano e a forma da Sala ("In
  2012, by the national water plan's figures, more than three in five did."). A segunda virada (a reserva do outro lado e o túnel
  único) usa a frase da Sala palavra por palavra, sem fração do consumo.
- **A disciplina de régua e de dono nas partes perigosas:** o mecanismo na ordem do SENAMHI ("The mountains help."), a Costa do censo
  dita como régua na primeira vez, o "partly because" de Pizarro com o "comedio de tierra" na mesma ordem (o lado feio da escolha dito
  sem adjetivo), "built first to power a hydroelectric plant, and also to firm up the river Lima drinks from" com o SENAMHI, o risco do
  túnel na voz da Defensoría citando o plano da empresa, e a resposta da empresa à AFP na mesma cena da moradora.
- **A cadeia de pontes que leva a pergunta do título até a água**: "A city that size needs water all year, and its river runs low for
  seven months of it." e "The water makes it across the line. On the hills at the city's edge, many homes are not on the network at
  all." movem o vídeo sem anunciar nada, e a coda devolve a travessia com uma data que o espectador já conhece ("Every May 1…").

NÃO TOCAR:
- O gancho inteiro, da 1ª frase à assinatura, como está (fora a troca opcional do leve 17): "A line runs along the Andes and divides
  Peru.", "about 2 percent", "But that is where most Peruvians live.", "In 2012, by the national water plan's figures, more than three
  in five did.", "more than half of the water Lima stores for the dry season sits in lakes on the other side of the line" e a
  assinatura "You're at Alpha Point, and this is where the story of Peru's water divide begins."
- As pontes do plano que os achados mantêm: "That line is the continental divide.", "Peru's weather service says the main reason the
  coast is so dry lies out over the Pacific.", "And yet people built a city on that coast about 5,000 years ago.", "That put Peru's
  capital on the dry side of the line." (a 1ª metade da ponte de p3; a 2ª é o achado 3), "A city that size needs water all year, and
  its river runs low for seven months of it.", "The water makes it across the line. On the hills at the city's edge, many homes are not
  on the network at all.", "Most of the families there, the magazine reported, had come down from the Andean regions in search of
  better work." e "The water Lima keeps on the far side of those mountains has only one way through."
- "The mountains help." (a única frase curta, no lugar certo da hierarquia) e "In a normal year, Lima gets about a third of an inch of
  rain, almost all of it drizzle."
- A frase da inscrição, "Lima was founded that month, in the Rímac Valley, near the sea and the port of Callao.", depois da pausa de
  parágrafo, sem número e sem "here"; e a frase-chave de p3, "In January 1535, Pizarro chose a site partly because it had a very good
  port nearby.", que nunca vai sob a chamada.
- "Peru's weather service says it was built first to power a hydroelectric plant, and also to firm up the river Lima drinks from." e
  "It was built between 1958 and 1962, and the system has been in service since 1963." (R08 e R09, as decisões da Sala).
- "Lima has been planning a second tunnel since the 1990s." e "In 2025, Peru's ombudsman, citing the utility's own plan, warned that
  depending on a single tunnel is a risk in a major earthquake." (R10 e R50).
- A coda: "Every May 1, the utility starts letting out its high lakes, and the water on the Amazon side crosses the divide toward the
  Rímac. Peru lives on the dry side of the Andes. From May to November, part of its capital's water comes from the other one." Ela
  devolve o título do Lucas e a travessia sem número. (Nota para a casa, não achado: é o 4º fecho em par curto aforístico em quatro
  vídeos; aqui fica, porque paga o título, e o próximo vídeo deve fechar de outro jeito.)
- Os fins de p4 e de p6 em prosa comum, sem soco nem promessa: são as duas partes que quebram o compasso das pontes-virada (OFÍCIO §4.1,
  "taxa de acerto de 100 % é defeito"); nenhuma reescrita deve dar soco a elas.
- O presente fora (só os 700 mil de 2026 e o segundo túnel datado), a Ariana fora e o PIB do INEI de 2022 com o ano: as três decisões
  da Sala estão cumpridas.

Nota para a rodada 2 (não é achado): se o PEDIR do achado 4 voltar reescrito, o primeiro a medir é o esqueleto contra os fechos do
Juneau, de Los Angeles e da Zona do Canal, à mão (o portão só pega 6 palavras iguais). Os achados 1, 2 e 3 são os que mudam o que vai ao
ar; os médios 5 a 10 mudam o que o ouvido entende; o resto é dose. Depois desta rodada, a lista de trocas tende a criar resíduo: a
próxima deve conferir primeiro o parágrafo de Puente Piedra (achado 1) e o de 1971 (achado 2), que mudaram de forma.
