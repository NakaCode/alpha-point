# Laudo · verificador de fatos (independente, da Sala de controle) · roteiro r2 · praia-do-cassino (vídeo 6)

Revisão julgada: `9836f209d3e5` · data-base 2026-11-07 (leituras de ~20:35 a ~21:15 de Brasília)

COBERTURA: 222 de 223

As 223 linhas de `roteiros/praia-do-cassino/qc-roteiro/fatos-tabela.json` têm veredito: 222 "confirmada" e 1 "corrigir" (o portão conta
como N só as confirmadas). Elas cobrem as afirmações checáveis de 138 das 166 frases do texto falado (a contagem de frases é a do
`gate.mjs`, e a minha divisão dá as mesmas 166); as outras 28 não afirmam nada checável e estão declaradas uma a uma abaixo (NADA A
CHECAR). **O texto foi CHECADO POR INTEIRO**: nenhuma frase com fato ficou sem linha, nenhum item ficou NÃO ACHEI e nada foi recusado por
robô. Um item pede a troca de uma frase.

NOTA: 9.0/10. Subiu de 8,5 (r1). As nove trocas da lista estão aplicadas com o limite certo, nenhum número dito está errado, e as contas
novas do escritor fecham, refeitas nas cópias locais (a régua de 30 mi, que a pauta não tinha, foi medida hoje: 216,00 km, 134,2 mi, 4
passos). O que tira o ponto é uma palavra que diz mais que a fonte, "owns" (a praia marítima é bem da União; o município a tem no seu
território), e uma frase herdada que fecha em três itens a lista do que o decreto protege.

## O que foi julgado, e como

- **O texto:** o texto falado inteiro de `roteiros/praia-do-cassino/roteiro-narrador.md`, sha256 do texto falado
  `9836f209d3e51732b3cf375b897f4e4b9ee1a322a274c5d6dc5711a9c074fc7f` (o do pedido; o arquivo inteiro, com cabeçalho e marcas, dá
  `fee531f2d711…`). `node roteiros/praia-do-cassino/_ferramentas/gate.mjs`: 0 problemas, 3 alertas (a 1ª frase sem número,
  `[guinness-atribuido]` e `[gemini]`; os dois últimos conferidos como fato: VF018 e R2-099/R2-100, confirmadas). 2.422 palavras (o
  `wc` do arquivo inteiro dá 2.650, com o cabeçalho), 21 parágrafos, 166 frases.
- **O denominador, derivado à mão e por diferença** (o canal não tem extrator de afirmações): um script
  (`…\scratchpad\vf2\diff.py`) dividiu o r1 (`_trabalho/roteiro-r1.antes.md`, texto falado `e77cf10d671c`, o que o laudo do r1 julgou) e
  o r2 em parágrafos e frases pela regra do `gate.mjs` e casou cada linha da tabela do r1 (`fatos-tabela-r1.json`) com o r2:
  - **123 linhas HERDADAS** (79 frases): a frase do r1 está inteira, letra a letra, num parágrafo do r2. O veredito, a fonte e o trecho
    são os do r1; só o número do parágrafo mudou (o r2 tem 21 parágrafos, o r1 tinha 22), e a `nota` de cada uma diz "Herdada do r1". A
    VF041 casava só como pedaço ("A ranking of…" dentro de "It's a ranking of…") e foi conferida de novo (R2-020).
  - **100 linhas CONFERIDAS DE NOVO** (59 frases, ids `R2-001` a `R2-100`): toda frase que mudou ou entrou, inteira. Quando a afirmação
    é a mesma do r1, reli a fonte e o trecho do r1 contra a frase nova (a `nota` diz de qual linha veio); quando é nova, li a fonte.
  - Depois o mesmo script cobriu frase a frase: as 28 frases sem linha são as de NADA A CHECAR, lidas uma a uma.
  - Limite declarado: a divisão de frases e a escolha do que é afirmação são minhas; o portão confere estrutura, não sentido. A herança
    supõe que a frase igual afirma o mesmo no lugar novo: conferi o contexto das que mudaram de vizinhança (o decreto e o senador, que
    saíram do ato 2 para o ato 4, e o "Back to the ruler, then.", que agora volta da divisa dos municípios).
- **As medidas, refeitas** (sem rede, nas cópias de `midia/praia-do-cassino/fontes/`): o `costa_osm.py` da pauta, sem mudar o código, com
  a régua de 30 mi (48,28 km) que o r2 diz (`…\scratchpad\vf2\regua30.py`), e as contas novas do r2. A saída está em
  `roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt` (C25 a C33; as C01 a C24 continuam em `fatos-medidas.txt`).
- **A rede** (07/11/2026): uma busca (`site:guinnessworldrecords.com "longest beach"`, para o VF042) e a Constituição Federal no Planalto
  (art. 20, IV, para o achado 1). Nada recusou por robô; nada foi contornado. O g1 não abre para as ferramentas: para o VF028 vale a
  letra que a Sala copiou na lista da rodada (`_trabalho/lista-r1.md`), lida por ela no navegador do app hoje.

## As nove trocas da lista (parte A), conferidas

| Item | O limite da lista | No r2 | Linha |
|---|---|---|---|
| VF007 | nada de "stone" para as duas pontas | "Breakwaters mark its two ends, about 132 miles apart in a straight line." O "stone" ficou só no molhe do norte ("a line of stone", VF057, Revista Marítima); os do Chuí são `man_made=breakwater` no OSM, sem material | R2-001 a R2-004 |
| VF028 | o trecho foi retirado depois da contestação | "And it was dropped later, after the town to the south objected." Bate com a letra lida pela Sala: "Esse trecho foi retirado mais tarde após contestação do município de Santa Vitória do Palmar" | R2-013, R2-014 |
| VF158, VF161 | não dizer de onde vem a areia | "The sand is old sand instead, worked over by the sea again and again." ("areias policíclicas", "areias praiais e eólicas", Clerot et al. 2003). O "comes from the seafloor" e o "shuffling" saíram | R2-064, R2-065 |
| VF050 | o "no plans" é do Roadside America | "…and the travel guide Roadside America says there are no plans to correct the sign." | R2-024 |
| VF051 | a National Seashore, não a ilha | "In Texas, Padre Island's national seashore is the longest stretch of undeveloped barrier island, says the National Park Service" (o "in the world" caiu: diz menos que a letra) | R2-025 |
| VF110 | a régua do tamanho certo | "Take a ruler 30 miles long." Medida hoje: 216,00 km (134,2 mi), 4 passos; o 134 saiu da voz | R2-046, R2-049 |
| VF042 | "a record for a beach itself" | "the only record for a beach itself that we could find on its own website is a different one." A busca de hoje só devolve recordes de atividade ("Longest beach tennis rally", "Longest beach rugby try") | R2-021 |
| VF205 | tirar "and only one" | "The release gives one reason for the place: the beach sat very near the path of the total eclipse." | R2-098 |
| VF065 | tirar a oração | "Walk south along the water, and after a while the sand changes its name." | R2-027 |

**As nove estão trocadas com o limite certo**, e nenhuma reintroduz o defeito com outras palavras.

## As contas e os juízos novos do escritor (`_trabalho/escrita-notas-r2.md`, §6), refeitos

1. **"more than two-thirds of the sand"**: 155,95 / 218,00 = 71,5 % (2/3 = 66,7 %). FECHA, no piso (C29; R2-030).
2. **"a handful of steps"** com a régua de 30 mi: o escritor dividiu (134,1 / 30 ≈ 4,5); o compasso do `costa_ibge.py`, rodado hoje com
   48,28 km, dá 4 passos inteiros e o resto até o Chuí (216,00 km, 134,2 mi). FECHA (C25; R2-049). **"thousands of steps"** com a régua
   do tamanho de um barco (10 m, 33 pés): 21.940 passos (o escritor estimou ~22.000). FECHA (C26; R2-050).
3. **"the two answers land less than two percent apart"**: 30 mi contra 10 m, 216,00 e 219,41 km, 1,58 % (com a de 50 km, 1,70 %).
   FECHA (C27; R2-051). **"the longest answer any ruler gave us was about 136"**: 136,3 mi (10 m). **"Less than five miles"**: 136,3 −
   131,7 = 4,6 mi; com a linha inteira do OSM, 136,5 − 131,7 = 4,8. FECHA (C28; R2-053, R2-054).
4. **"Every careful measurement we found lands within a few miles of every other"**: das réguas de 50 km (134,1 mi) e 30 mi (134,2) ao
   IBGE (135,5), à régua de 10 m (136,3), ao OSM (136,5) e à trilha (138,6): 4,5 mi. FECHA (C30; R2-035). Os números soltos da imprensa,
   sem método (212 e 220 km, base 2.2), caem perto da faixa. **"Only one number sits out on its own"**: o 254 km (157,8 mi) do turismo do
   Estado, 19,2 mi acima da trilha (C31; R2-041). **"the route is a touch longer"**: 223 km contra 219,73 (OSM) e 218,00 (IBGE) (R2-039).
5. **"Same sand, in other words. The argument is over the name on it."**: juízo do narrador, em linha L (R2-033, R2-034), sobre as duas
   falas atribuídas (o secretário de Santa Vitória e o Rio Grande, g1, A.5) e a frase do g1 "a praia é uma só e troca de nome nos limites
   dos municípios". Passa: segue das fontes, e o próprio g1 põe a disputa no nome ("Cassino ou Hermenegildo?").
6. **"the way a line of marchers wheels around a corner"**: imagem da refração; a física está na letra ("those parts of the wave in deeper
   water moving faster than those in shallow water", en.wikipedia, "Wind wave"; R2-059). **"The sea isn't so much taking that sand away
   as moving it over"**: é a "deposição do material erodido nas reentrâncias adjacentes" de Dillenburg (R2-062). **"Think of it as
   ironing"**: imagem, NADA A CHECAR.
7. **"on the southern town's stretch of this coast"**: a APA começa na costa a lat −32,976, ao sul do limite municipal (−32,629), e vai à
   foz do Chuí; o parque chega à areia no trecho do Albardão (R2-076 a R2-078). Passa.
8. **Padre Island sem "in the world"**: diz menos que a letra do NPS. Passa (R2-025).
9. **"fly out over the ocean"**: "be fired over the Atlantic from a beach site near Rio Qrande" (OCR), com "were to". Passa (R2-095).
10. **"a minute ago" e "in a minute"** (remissões que o ouvinte mede no relógio): a 179/min, a resposta do Guinness termina aos 37 s e o
    "the answer you heard a minute ago" vem aos 72 s (35 s depois); o "You'll see how much in a minute" vem aos 101 s e o "more than
    two-thirds" aos 247 s (2,4 min depois). São idiomáticos ("in a minute" = em breve) e passam (C33).

## A tabela, por item

A tabela inteira, uma linha por item (223), é `fatos-tabela.json` (campos `id`, `paragrafo`, `frase`, `afirmacao`, `veredito`,
`fonte_id`, `arquivo_local`, `trecho`, `classe`, `url`, `nota`; as herdadas trazem `"herdada": true`). Resumo por parágrafo:

| § | linhas | herdadas | de novo | vereditos |
|---|---|---|---|---|
| p1 gancho | 8 | 3 (VF001, VF002, VF008) | 5 (R2-001 a R2-005) | 8 confirmada |
| p2 | 7 | 5 (VF011 a VF015) | 2 (R2-006, R2-007) | 7 confirmada |
| p4 | 5 | 3 (VF018 a VF020) | 2 (R2-008, R2-009) | 5 confirmada |
| p5 | 13 | 7 (VF024 a VF027, VF030 a VF032) | 6 (R2-010 a R2-015) | 12 confirmada, 1 corrigir (R2-015) |
| p6 | 11 | 4 (VF039, VF040, VF043, VF044) | 7 (R2-016 a R2-022) | 11 confirmada |
| p7 | 9 | 5 (VF045 a VF048, VF053) | 4 (R2-023 a R2-026) | 9 confirmada |
| p8 | 10 | 10 (VF054 a VF063) | 0 | 10 confirmada |
| p9 | 16 | 8 (VF066 a VF071, VF075, VF076) | 8 (R2-027 a R2-034) | 16 confirmada |
| p10 | 9 | 0 | 9 (R2-035 a R2-043) | 9 confirmada |
| p11 | 18 | 9 (VF102 a VF105, VF107, VF108, VF113, VF116, VF117) | 9 (R2-044 a R2-052) | 18 confirmada |
| p12 | 7 | 4 (VF120, VF122 a VF124) | 3 (R2-053 a R2-055) | 7 confirmada |
| p13 | 7 | 5 (VF125 a VF127, VF130, VF131) | 2 (R2-056, R2-057) | 7 confirmada |
| p14 | 15 | 10 (VF132 a VF136, VF139 a VF143) | 5 (R2-058 a R2-062) | 15 confirmada |
| p15 | 13 | 12 (VF144 a VF155) | 1 (R2-063) | 13 confirmada |
| p16 | 14 | 9 (VF162 a VF170) | 5 (R2-064 a R2-068) | 14 confirmada |
| p17 | 11 | 6 (VF173 a VF178) | 5 (R2-069 a R2-073) | 11 confirmada |
| p18 | 17 | 6 (VF081 a VF085, VF092) | 11 (R2-074 a R2-084) | 17 confirmada |
| p19 | 8 | 5 (VF185 a VF188, VF190) | 3 (R2-085 a R2-087) | 8 confirmada |
| p20 | 15 | 2 (VF209, VF210) | 13 (R2-088 a R2-100) | 15 confirmada |
| p21 fecho | 10 | 10 (VF212 a VF221) | 0 | 10 confirmada |

## ACHADOS (1 "corrigir"; nenhum REFUTADA, nenhum NÃO ACHEI)

Nenhum toca a tese (a reta, os números, a régua, a física). O texto ainda não foi narrado: consertar aqui não gasta crédito.

1. **[LEVE] R2-015, p5: "That town, as it happens, owns most of this beach."** DIVERGE na palavra. Santa Vitória do Palmar tem 155,95
   dos 218 km da linha do IBGE (71,5 %) **dentro do seu limite** (g1, A.3), mas não é dona da areia: a praia marítima é bem da União
   (Constituição Federal, art. 20, IV: "as praias marítimas"; https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm, lida
   hoje). É a correção que um espectador brasileiro escreve no primeiro comentário. O r1 tinha a mesma palavra ("because that town owns
   most of this beach", VF029), e o laudo dele a deixou passar; a frase mudou, e a conferi inteira.
   → CONSERTO: "That town, as it happens, has most of this beach inside its limits." → RAIZ: PONTUAL. O "belongs to Santa Vitória do
   Palmar" do p9 passa (é o uso comum para território), e o "that sand is theirs" é a paráfrase atribuída ao secretário ("que é de Santa
   Vitória do Palmar", g1).

## Confirmadas com observação (não pedem troca)

- **VF081 e VF082, herdadas, p18: "The decree names what it protects: the beach, the dunes, and fossil sites tied to the beach."** A
  frase é a mesma do r1 e herda o veredito: as três estão na letra (Art. 7º, I, da APA: "incluídas as dunas, a praia"; Art. 4º, II, do
  parque: "preservar os sítios paleontológicos associados ao ambiente de praia"). Mas os dois-pontos fecham a lista, e o primeiro
  objetivo do parque, que tem cerca de 1.004.480 ha e é quase todo mar, é outro: "a preservação dos habitats e da biodiversidade
  associada aos ambientes costeiros e de plataforma continental" (Art. 4º, I). No r1 a frase convivia com outra que dizia "among what it
  protects"; no r2 ela está sozinha. Se a Sala quiser fechar a porta (opcional): "Among what the decree protects: the beach, the dunes,
  and fossil sites tied to the beach."
- **R2-002, os molhes do Chuí**: o OSM os mapeia como `man_made=breakwater` (vias 528148406 e 637283556), sem material; "Breakwaters"
  não afirma material. O "walls people built" (VF063, herdada) segue de pé (obra de 1975 a 1978, pela busca do r1).
- **R2-046, a régua de 30 mi**: não estava na pauta (que tinha a de 50 km = 31 mi); medi hoje. Se a régua for à tela, o número dela é
  134,2 mi ("about 134"), não o 134,1 da de 50 km.
- **R2-049, "By the time the ruler touches the breakwater at the Chuí"**: no compasso, o último passo é o resto (a distância do último
  ponto ao fim), não uma régua inteira. A imagem passa.
- **R2-064, "worked over by the sea again and again"**: "policíclica" é areia retrabalhada em mais de um ciclo; o "by the sea" lê junto
  o "areias praiais e eólicas" da mesma fonte (Clerot et al. 2003). Passa, e não diz mais de onde vem a areia.
- **R2-073, "That bow is the 'almost' in the title."**: o arco para o mar no meio do trecho é o setor 5 de Dillenburg ("De Verga ao Chuí
  a costa é ligeiramente convexa"), e o Cassino fica no setor 4 ("O setor costeiro entre Estreito e Verga é côncavo"): as frases do p17
  ("curves in" onde a plataforma é suave, "curves out" onde é mais inclinada) batem com os dois.
- **R2-079, "His objection is to the form of it: the most restrictive category … and a restriction that size."**: o PDL lista três coisas
  ("A forma como o decreto foi editado, a categoria de unidade de conservação escolhida para a maior parte da área e a magnitude
  territorial da restrição imposta"); a frase põe a categoria e o tamanho dentro da "form". É paráfrase sem aspas e passa (a consulta,
  que é a "forma como foi editado", vem na frase seguinte).
- **R2-025 e R2-026**: as páginas novas do NPS dizem "one of the longest" (observação do r1); o "is marketed as" de Cox's Bazar segue o
  "believed to be" da autoridade de Bangladesh.
- **As observações do r1 que vieram com as herdadas** (VF013 e R2-010, o Guinness ao g1 sem a letra da resposta; VF018, a grafia
  "recognised"; VF071, "the only line anyone draws"; VF096/R2-037, o IBGE não publica um comprimento: a tela leva "Measure: Alpha Point,
  on IBGE (2024)"; VF186, o "Greek" fora da fala) continuam como estão no laudo do r1 (`fatos-r1.laudo.md`).

## NADA A CHECAR (28 frases, declaradas)

Perguntas, instruções de cena, transições, imagens e juízos de narrador, sem fato que uma fonte confirme ou derrube:
- p1 "But most coasts are a tangle of coves and points." (a generalização que arma o contraste; sem número nem lugar); "So who drew it?";
- p2 "A shore that gentle should be easy to measure." (juízo; a medida vem no ato 2);
- p3 a assinatura;
- p4 "Start where most people meet the title: a search box." (enquadramento de cena; ninguém mediu onde "most people" encontram o
  título, e a frase não o dá como dado); "Try it yourself.";
- p5 "The fame does have a trail, though."; "You'll see how much in a minute." (a remissão fecha no p9; C33);
- p7 "Other beaches have found their own words."; "So let's measure this one.";
- p8 "So how long is it, really?"; "Stand on the northern wall.";
- p10 "Back to the ruler, then.";
- p11 "By that logic, the biggest number is just the most careful one."; "Let's test it.";
- p12 "So the strange thing about this beach isn't the number."; "It's the coast.";
- p13 "So what keeps a coast this long this straight?"; "Pull back, until the whole shore of Rio Grande do Sul fits on the screen.";
- p14 "Picture one place where the shore pokes out, even a little."; "Think of it as ironing."; "Every pass takes a little of the
  wrinkle out, and the sea doesn't put the iron down." (a imagem do mecanismo conferido em VF136, VF141, R2-060 e R2-061); "No one drew
  this coast." (o "The waves did." seguinte tem linha, VF143);
- p15 "And very little comes along to spoil the work." (as frases seguintes têm linha);
- p18 "Some of what a line of sand this long, this bare, keeps is written down." (transição; o "written down" se paga no decreto e no PDL);
- p21 "Go to the other wall."; "Turn around."; "No one drew this coast.".

## Voláteis que ficaram na fala (data-base 2026-11-07)

- **VF092, o PDL 112/2026** ("As of November 2026, the bill was waiting in a Senate committee"), herdada: na CMA desde 12/05/2026,
  aguardando relator (dados do Senado de 29/10/2026). Cresce se for designado relator ou votado; zera se for arquivado ou aprovado. Reler
  na véspera de publicar; o decreto vale enquanto o PDL não for aprovado nas duas Casas.
- **R2-008, a busca** ("one of the top results"): a ordem muda com o dia, o país e o buscador. Reconferir antes de gravar.
- **VF018, VF039, VF040 e R2-009, o WorldAtlas** (reescrito em 30/05/2026): pode mudar o 1º lugar, o 254, a frase do Guinness ou o método.
- **VF011, R2-016 e R2-042, o turismo do RS** (página sem data): o 254 e o "(Guinness Book)" podem sair.
- **R2-021, o Guinness**: "the only record for a beach itself that we could find" vale para a busca de 07/11/2026.
- **R2-023 e R2-024, a placa de Long Beach**: o Roadside America não tem data; a placa pode ter sido trocada.
- **VF185 e R2-087, o Altair** ("has sat on this sand"; "within a few years the ship may be gone", a FURG em 2025): zera se o casco sumir.

## A lista de nomes (anônimo na voz → pessoa ou órgão nomeável)

- "a local journalist" → **Willy César**, jornalista, autor de "A cidade do Rio Grande: do big bang a 2015" (pelo g1, 20/07/2025; o
  livro não foi lido). É a pesquisa dele que o g1 cita para o trecho "retirado mais tarde" (VF028).
- "Its tourism secretary" (Santa Vitória do Palmar) → NÃO ACHEI o nome (nem a base nem a lista da Sala o trazem).
- "A senator from Rio Grande do Sul" → **Luis Carlos Heinze (PP/RS)**, autor do PDL 112/2026
  (https://www25.senado.leg.br/web/atividade/materias/-/materia/173030).
- "Geologists at the federal university of Rio Grande do Sul" → **Sérgio R. Dillenburg** e **Luiz J. Tomazelli** (CECO-IG-UFRGS), 2003
  (https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf), e **Luiz C. P. Clerot** et al. (https://www.aprh.pt/ZonasCosteiras2003/pdf/143.pdf).
- "the federal university in the city of Rio Grande" → **FURG** (Universidade Federal do Rio Grande); o g1 (resumo) não dá o pesquisador.
- "the state's environmental agency" → **Fepam**; "Brazil's statistics agency" → **IBGE** (Municípios Defrontantes com o Mar, 2024);
  "a national trail network" → **Rede Brasileira de Trilhas**; "the travel guide Roadside America" → **Roadside America** (página 2974,
  sem autor nem data).
- "The website that put this beach at number one" → **WorldAtlas**, texto de **Emanuel Muyres**, 30/05/2026
  (https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html).
- "the astronauts of Gemini 12" → **James A. Lovell** e **Edwin E. Aldrin** (release 66-285, p. 2). A comissão brasileira (CNAE,
  **Fernando de Mendonça**) saiu da voz no r2.

## Os 2 padrões mais vistos

1. **A palavra em volta do número que cresce** (R2-015, "owns"; e, herdada, a lista fechada do decreto): o número está certo (155,95 de
   218 km; as três coisas estão na letra), mas o verbo ou a pontuação dizem mais que a fonte. É o padrão do r1 (o guia que virou a
   cidade, a seashore que virou a ilha), agora uma vez só.
2. **A conta nova feita por divisão, não pela ferramenta** (o "handful" saiu de 134,1 / 30; a régua de 30 mi não existia na pauta): desta
   vez a medida de verdade confirmou a conta (4 passos, 1,58 %), mas a régua que a voz diz tem de ser a que se mediu. Quando o texto
   troca uma régua ou um recorte, o número se mede de novo, não se deriva.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Onde gravar os laudos de fatos dos próximos vídeos (CLAUDE.md, "Os marcadores"): gravado em `roteiros/praia-do-cassino/qc-roteiro/`,
  como no r1 e no Big Sur.

## Para a Sala ler no navegador do app

Nada foi recusado por robô e nada bloqueia o laudo. Fica de reconferência (não bloqueia): a página da Cultura do RS de 29/01/2016 e a da
Trilha Cassino x Barra do Chuí (R2-017 e R2-038), lidas pela Sala em 07/11 e não reabertas aqui; e, de passagem, o nome do secretário de
Turismo de Santa Vitória, no g1.

## O portão de fatos

`node ferramentas/portao-fatos.mjs praia-do-cassino`, depois de gravar: **PASSA**, exit 0. "sha12 do texto falado: 9836f209d3e5 (igual
ao do gate.mjs) · 21 parágrafos"; "laudo: Revisão julgada 9836f209d3e5 · COBERTURA 222 de 223 · VEREDITO RESSALVA"; "tabela: 222
confirmada(s) de 223". O tropeço do r1 continua contornado do mesmo jeito: o portão lê "g1" como o número 1, e a frase nova que nomeia o
g1 ("Then, in 2025, the Brazilian news site g1 asked Guinness about it…") ganhou a linha com o trecho do Adendo que nomeia o g1 (R2-012).

## Apêndice: a tabela, uma linha por item (223)

`| id | § | afirmação | veredito | o que a fonte diz (trecho) | fonte / URL |`. A frase falada de cada item está em `fatos-tabela.json`.

| id | § | afirmação | veredito | o que a fonte diz (trecho) | fonte / URL |
|---|---|---|---|---|---|
| R2-001 | p1 | As duas pontas são molhes (turismo do Estado). | CONFIRMADA | que inicia nos Molhes da Barra do Cassino e termina nos Molhes do Chuí | TUR-RS · https://www.turismo.rs.gov.br/turismo/atrativo/visualizar/4597 |
| R2-002 | p1 | Na ponta sul, o OSM mapeia dois molhes (man_made=breakwater) na foz do Arroio Chuí; a palavra "breakwaters" não afirma material (o VF007 do r1 sai). | CONFIRMADA | OSM maps two breakwaters: way 528148406 | C23 (OSM) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-003 | p1 | A reta entre as pontas: 211,97 km (131,7 mi). | CONFIRMADA | corda 211.97 km (131.7 mi); excesso 2.85 % | S1/L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-004 | p1 | As duas pontas (2). | CONFIRMADA | C15 counts: the two ends, the two walls = 2 (Molhes da Barra, north; Molhes da Barra do Chuí, south) | C15 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-005 | p1 | A costa é quase reta: "gently undulating" (Dillenburg et al. 2003); o traçado do IBGE passa a corda em só 2,85 %. | CONFIRMADA | The 625 km long barrier coast of Rio Grande do Sul is gently undulating | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF001 | p1 | O turismo do Estado vende a praia como 'a maior praia do mundo (Guinness Book)'. | CONFIRMADA · herdada | também conhecida como a maior praia do mundo (Guinness Book) | TUR-RS · https://www.turismo.rs.gov.br/turismo/atrativo/visualizar/4597 |
| VF002 | p1 | Rio Grande divulga 'a maior praia em extensão do mundo' (g1). | CONFIRMADA · herdada | Rio Grande hoje divulga "a maior praia em extensão do mundo começa no Cassino e termina na Barra do Chuí" | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF008 | p1 | A praia passa a reta em 3,7 mi (IBGE) e 4,8 mi (OSM). | CONFIRMADA · herdada | C05 beach minus straight line: IBGE 3.7 mi, OSM 4.8 mi (both less than 5 mi) | C05 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-006 | p2 | Maior afastamento da corda: 18,21 km (11,3 mi), a 122,9 km da barra (58 % da corda), para o mar. | CONFIRMADA | maior afastamento da corda: 18.21 km (11.3 mi), a 122.9 km da barra | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-007 | p2 | O traçado passa dos dois lados da reta: um S. | CONFIRMADA | afastamento: de -18.21 a 4.54 km (os dois sinais = os dois lados da corda) | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF011 | p2 | Turismo do Estado: 254 km, ao lado de '(Guinness Book)'. | CONFIRMADA · herdada | a praia oceânica com 254 km de areia branca e fina que forma a maior praia contínua da América do Sul, também conhecida como a maior praia do mundo (Guinness Book) | TUR-RS · https://www.turismo.rs.gov.br/turismo/atrativo/visualizar/4597 |
| VF012 | p2 | 254 km = 157,8 mi. | CONFIRMADA · herdada | C01 state tourism 254 km = 157.8 mi, which rounds to 158 mi | C01 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF013 | p2 | Em resposta ao g1, o Guinness informou que não monitora o título. | CONFIRMADA · herdada | em resposta ao g1, a instituição informou que não monitora o título | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.1) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF014 | p2 | A matéria é de 20/07/2025. | CONFIRMADA · herdada | Cassino ou Hermenegildo?", g1 RS, 20/07/2025 | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF015 | p2 | A premissa (o 158 não cabe): a linha do OSM, com nó a cada 9 m, dá 219,73 km (136,5 mi). | CONFIRMADA · herdada | comprimento pelo traçado do OSM: 219.73 km (136.5 mi) | L11 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-008 | p4 | Na busca de 07/11/2026 o WorldAtlas é o 2º resultado (volátil). | CONFIRMADA | 2. The Longest Beaches In The World - https://worldatlas.com/articles/the-longest-beaches-in-the-world.html | busca 07/11/2026 · midia/praia-do-cassino/fontes/web/busca-web-longest-beach-2026-11-07.txt |
| R2-009 | p4 | O WorldAtlas põe a Praia do Cassino em 1º. | CONFIRMADA | 1. Praia do Cassino, Brazil - 254 km (158 mi) | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF018 | p4 | Letra do WorldAtlas. | CONFIRMADA · herdada | has been recognised by Guinness World Records since 1994 as the world's longest sea beach | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF019 | p4 | A Tarde, 13/12/2025: reconhecida pelo Guinness Book em 1994. | CONFIRMADA · herdada | Local foi oficialmente reconhecido pelo Guinness Book em 1994 | A Tarde 13/12/2025 · https://atarde.com.br/brasil/voce-sabia-o-recorde-de-maior-praia-do-mundo-e-do-brasil-1372181 |
| VF020 | p4 | Estado de Minas, 04/08/2026: o registro no Guinness. Dois anos seguidos. | CONFIRMADA · herdada | marca que rendeu ao trecho o registro no Guinness Book como a maior praia contínua do planeta | Estado de Minas 04/08/2026 · https://www.em.com.br/emfoco/2026/08/04/registrada-no-guinness-como-a-maior-praia-continua-do-mundo-254-km-de-areia-sem-obstaculo-no-extremo-sul-do-pais-com-um-cargueiro-encalhado-desde-1976/ |
| R2-010 | p5 | O Guinness respondeu ao g1 (a resposta, "não monitora o título", é a do gancho). | CONFIRMADA | em resposta ao g1, a instituição informou que não monitora o título | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.1) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-011 | p5 | Em 2025 (matéria de 20/07/2025). | CONFIRMADA | Cassino ou Hermenegildo?", g1 RS, 20/07/2025 | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-012 | p5 | Quem pergunta é o g1 (o portão lê "g1" como o número 1: esta linha traz o g1 no trecho). | CONFIRMADA | Adendo da Sala: a matéria do g1, lida no navegador do app | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-013 | p5 | O trecho do livro dos recordes foi retirado depois da contestação de Santa Vitória do Palmar (o VF028 do r1, decidido pela Sala, que leu o g1 no navegador do app em 07/11/2026). | CONFIRMADA | Esse trecho foi retirado mais tarde após contestação do município de Santa Vitória do Palmar | g1 RS, 20/07/2025, lido pela Sala no navegador do app em 07/11/2026 (lista-r1, VF028) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-014 | p5 | A cidade que contestou é Santa Vitória do Palmar, ao sul. | CONFIRMADA | e saiu depois de uma contestação de Santa Vitória do Palmar | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.2) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-015 | p5 | "owns most of this beach": Santa Vitória tem 155,95 dos 218 km (71,5 %) DENTRO DO SEU LIMITE; mas a praia marítima é bem da União (Constituição, art. 20, IV: "as praias marítimas"). O município não é dono da areia: tem a maior parte dela no seu território. | CORRIGIR | 155,95 km (96,9 mi) em Santa Vitória do Palmar, até a Barra do Chuí | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.3); S1 · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF024 | p5 | O livro 'A cidade do Rio Grande: do big bang a 2015', do jornalista Willy César. | CONFIRMADA · herdada | do jornalista Willy César, trata o recorde como "lenda" | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.2) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF025 | p5 | Rio Grande é a cidade do porto, na ponta norte. | CONFIRMADA · herdada | extends from the breakwaters at the Rio Grande seaport south to the mouth of the Chuí Stream | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF026 | p5 | Nas edições brasileiras de 1993, 1994 e 1995. | CONFIRMADA · herdada | estava no livro dos recordes em 1993, 1994 e 1995, só nas edições que circularam no Brasil | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.2) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF027 | p5 | 'praia mais extensa do Brasil'. | CONFIRMADA · herdada | o trecho sobre a "praia mais extensa do Brasil" | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.2) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF030 | p5 | Três edições, só as brasileiras. | CONFIRMADA · herdada | estava no livro dos recordes em 1993, 1994 e 1995, só nas edições que circularam no Brasil | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.2) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF031 | p5 | Contagem e década. | CONFIRMADA · herdada | C17 counts: three editions = 3 (1993, 1994 and 1995: the mid-1990s, the 1990s) | C17 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF032 | p5 | Quem conta é o g1 (matéria de 20/07/2025, lida pela Sala). | CONFIRMADA · herdada | Adendo da Sala: a matéria do g1, lida no navegador do app | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-016 | p6 | Página 1, o turismo do Estado: 254 km e '(Guinness Book)'. | CONFIRMADA | a praia oceânica com 254 km de areia branca e fina que forma a maior praia contínua da América do Sul, também conhecida como a maior praia do mundo (Guinness Book) | TUR-RS · https://www.turismo.rs.gov.br/turismo/atrativo/visualizar/4597 |
| R2-017 | p6 | Página 2, a Cultura do RS (29/01/2016): 'segundo dados do Guiness Book', 'com mais de 254 quilômetros'. | CONFIRMADA | "segundo dados do Guiness Book", "com mais de 254 quilômetros" | pauta, leituras da Sala S3 · pautas/2026-11-07-video-6-cassino.md |
| R2-018 | p6 | 254 km = 157,8 mi. | CONFIRMADA | C01 state tourism 254 km = 157.8 mi, which rounds to 158 mi | C01 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-019 | p6 | Duas páginas. | CONFIRMADA | C16 counts: two pages of the state government = 2 | C16 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-020 | p6 | O ouvinte conclui que a lista ordena números publicados, não medidas próprias: segue do método declarado ("the highest credibly published value"). | CONFIRMADA (L) | The figures in the table below use the highest credibly published value for each beach. | WorldAtlas 30/05/2026 · midia/praia-do-cassino/fontes/web/worldatlas-longest-beaches-lida-2026-11-07.txt |
| R2-021 | p6 | A busca no domínio do Guinness só devolveu recordes de atividade na praia; o único recorde DE UMA PRAIA achado é o da Virginia Beach (o VF042 do r1, trocado com o limite certo: "a record for a beach itself", "that we could find"). | CONFIRMADA | só devolveu recordes de atividade na praia (rally de beach tennis, toalha de praia etc.) | fatos 1.5 · pautas/2026-11-07-video-6-cassino-fatos.md |
| R2-022 | p6 | O recorde da Virginia Beach é o "Largest pleasure beach". | CONFIRMADA | Largest pleasure beach / Guinness World Records | Guinness 69237 · https://www.guinnessworldrecords.com/world-records/69237-largest-pleasure-beach |
| VF039 | p6 | WorldAtlas: 254 km (158 mi). | CONFIRMADA · herdada | 1. Praia do Cassino, Brazil - 254 km (158 mi) | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF040 | p6 | 'the highest credibly published value for each beach'. | CONFIRMADA · herdada | The figures in the table below use the highest credibly published value for each beach. | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF043 | p6 | Guinness: Virginia Beach, Virginia, USA. | CONFIRMADA · herdada | Virginia Beach, Virginia, USA has 45 km (28 miles) of beach front on the Atlantic | Guinness 69237 · https://www.guinnessworldrecords.com/world-records/69237-largest-pleasure-beach |
| VF044 | p6 | O nome do recorde. | CONFIRMADA · herdada | Largest pleasure beach / Guinness World Records | Guinness 69237 · https://www.guinnessworldrecords.com/world-records/69237-largest-pleasure-beach |
| R2-023 | p7 | A cidade usa oficialmente "World's Longest Continuous Peninsula Beach". | CONFIRMADA | Long Beach hedges officially by saying they are the "World's Longest Continuous Peninsula Beach." | Roadside America 2974 · https://www.roadsideamerica.com/story/2974 |
| R2-024 | p7 | "There are no plans to correct the entrance sign" é a voz do Roadside America, e a frase agora o diz (o VF050 do r1, trocado). | CONFIRMADA | There are no plans to correct the entrance sign. | Roadside America 2974 · https://www.roadsideamerica.com/story/2974 |
| R2-025 | p7 | O NPS diz isso da Padre Island National Seashore (o VF051 do r1, trocado: 'Padre Island's national seashore'). O 'in the world' da letra caiu: diz menos que a fonte. | CONFIRMADA | Padre Island National Seashore is the longest stretch of undeveloped barrier island in the world. | NPS pais/learn/nature · https://www.nps.gov/pais/learn/nature/index.htm |
| R2-026 | p7 | O governo de Bangladesh (PPP Authority) vende Cox's Bazar pela praia 'unbroken' e 'world's longest natural sandy sea beach'. | CONFIRMADA | The town is known for its 125 km long unbroken shore, which is believed to be world's longest natural sandy sea beach. | PPPA Bangladesh · https://pppo.gov.bd/projects-tourism-entertainment-village.php |
| VF045 | p7 | O arco, voltado ao Pacífico, diz 'World's Longest Beach.' (letra). | CONFIRMADA · herdada | Long Beach's large arch gateway leading to the Pacific Ocean is labeled "World's Longest Beach." | Roadside America 2974 · https://www.roadsideamerica.com/story/2974 |
| VF046 | p7 | Long Beach, Washington. | CONFIRMADA · herdada | World's Longest Drivable Beach, Long Beach, Washington | Roadside America 2974 · https://www.roadsideamerica.com/story/2974 |
| VF047 | p7 | 28 milhas. | CONFIRMADA · herdada | The Long Beach beach, a state park, is 28 miles in length. | Roadside America 2974 · https://www.roadsideamerica.com/story/2974 |
| VF048 | p7 | 218,00 / 45,06 km = 4,84 (IBGE); 4,88 (OSM). | CONFIRMADA · herdada | C08 Long Beach 28 mi = 45.06 km; IBGE line 218.00 km / 45.06 km = 4.84 times; OSM 4.88 times (almost 5) | C08 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF053 | p7 | O ouvinte conclui que cada título é um superlativo de comprimento; o 'largest pleasure beach' do Guinness também se mede em km de frente de praia. | CONFIRMADA (L) · herdada | Virginia Beach, Virginia, USA has 45 km (28 miles) of beach front on the Atlantic | Guinness 69237 · midia/praia-do-cassino/fontes/web/guinness-largest-pleasure-beach-lida-2026-11-07.txt |
| VF054 | p8 | Os molhes do porto do Rio Grande. | CONFIRMADA · herdada | extends from the breakwaters at the Rio Grande seaport south to the mouth of the Chuí Stream | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF055 | p8 | Concluídos em 1915 (obra em curso em 1912). | CONFIRMADA · herdada | Em 1915, estavam concluídos os dois molhes | RMB 3º trim. 2001 · https://portaldeperiodicos.marinha.mil.br/index.php/revistamaritima/article/download/7816/7286/26973 |
| VF056 | p8 | 'in the 1910s'. | CONFIRMADA · herdada | C19 the northern breakwaters: works under way in January 1912, finished in 1915 (Revista Marítima Brasileira, 3rd quarter 2001): built in the 1910s | C19 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF057 | p8 | Molhes de pedra, ~4 km cada, mar adentro. | CONFIRMADA · herdada | Os dois molhes, com cerca de 4 quilômetros cada um | RMB 3º trim. 2001 · https://portaldeperiodicos.marinha.mil.br/index.php/revistamaritima/article/download/7816/7286/26973 |
| VF058 | p8 | Em Rio Grande fica o canal da Lagoa dos Patos. | CONFIRMADA · herdada | situam-se em Rio Grande, onde localiza-se o canal da laguna dos Patos | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF059 | p8 | A praia inicia nos Molhes da Barra. | CONFIRMADA · herdada | que inicia nos Molhes da Barra do Cassino e termina nos Molhes do Chuí | TUR-RS · https://www.turismo.rs.gov.br/turismo/atrativo/visualizar/4597 |
| VF060 | p8 | Na foz do Arroio Chuí, o OSM mapeia dois molhes (um par). | CONFIRMADA · herdada | OSM maps two breakwaters: way 528148406 | C23 (OSM) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF061 | p8 | Da barra para o Chuí, 214 graus (sudoeste). | CONFIRMADA · herdada | rumo da corda (da barra para o Chuí): 214.0 graus | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF062 | p8 | Riacho curto na fronteira Brasil-Uruguai. | CONFIRMADA · herdada | is a short stream on the Brazil–Uruguay border | en.wikipedia (API) · https://en.wikipedia.org/wiki/Chu%C3%AD_Stream |
| VF063 | p8 | Inicia e termina em molhes (turismo do Estado). | CONFIRMADA · herdada | que inicia nos Molhes da Barra do Cassino e termina nos Molhes do Chuí | TUR-RS · https://www.turismo.rs.gov.br/turismo/atrativo/visualizar/4597 |
| R2-027 | p9 | A areia troca de nome no limite dos municípios (a oração do VF065 do r1 saiu). | CONFIRMADA | a praia é uma só e troca de nome nos limites dos municípios | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-028 | p9 | Do limite à foz do Chuí: Santa Vitória (155,95 km). | CONFIRMADA | 155,95 km (96,9 mi) em Santa Vitória do Palmar, até a Barra do Chuí | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.3); S1 · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-029 | p9 | Foi Santa Vitória que contestou. | CONFIRMADA | e saiu depois de uma contestação de Santa Vitória do Palmar | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.2) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-030 | p9 | 155,95 / 218,00 km = 71,5 %: mais de dois terços (66,7 %). | CONFIRMADA | C29 Santa Vitória do Palmar 155.95 of 218.00 km = 71.5 % of the IBGE line (more than two-thirds = 2/3 = 66.7 %; less than three-quarters) | C29 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-031 | p9 | O secretário de Turismo de Santa Vitória, no g1: "porque ela pega a extensão até a Barra do Chuí, que é de Santa Vitória do Palmar" (o "all the way down to the border" e o "that sand is theirs" parafraseiam, sem aspas). | CONFIRMADA | porque ela pega a extensão até a Barra do Chuí, que é de Santa Vitória do Palmar | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-032 | p9 | A Barra do Chuí fica na fronteira com o Uruguai. | CONFIRMADA | near the twin coastal villages of Barra do Chuí (Brazil) and Barra del Chuy (Uruguay) | en.wikipedia (API) · https://en.wikipedia.org/wiki/Chu%C3%AD_Stream |
| R2-033 | p9 | O ouvinte conclui que as duas falas descrevem a mesma faixa: a praia é uma só e troca de nome nos limites dos municípios (g1). | CONFIRMADA (L) | a praia é uma só e troca de nome nos limites dos municípios | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-034 | p9 | O ouvinte conclui que a disputa é pelo nome: Santa Vitória diz que a extensão é dela; Rio Grande diz que a maior praia começa no Cassino e termina na Barra do Chuí; o g1 titula a disputa por título de maior do Brasil: Cassino ou Hermenegildo. | CONFIRMADA (L) | a maior praia em extensão do mundo começa no Cassino e termina na Barra do Chuí | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF066 | p9 | 'a praia é uma só'. | CONFIRMADA · herdada | a praia é uma só e troca de nome nos limites dos municípios | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF067 | p9 | Idem. | CONFIRMADA · herdada | a praia é uma só e troca de nome nos limites dos municípios | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF068 | p9 | Rio Grande: 62,05 km pelo traçado do IBGE. | CONFIRMADA · herdada | pelo traçado do IBGE: 62.05 km; em linha reta: 60.19 km | S1 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF069 | p9 | 62,05 km = 38,6 mi. | CONFIRMADA · herdada | C03 Rio Grande 62.05 km = 38.6 mi (about 39 mi) | C03 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF070 | p9 | O nome Cassino é o do trecho em Rio Grande. | CONFIRMADA · herdada | Cassino em Rio Grande; Hermenegildo e Barra do Chuí em Santa Vitória do Palmar | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF071 | p9 | A Fepam, no g1: não há critério técnico; vale o limite municipal. | CONFIRMADA · herdada | não há critério técnico ou ambiental formal sobre a divisão; vale o limite municipal | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF075 | p9 | Letra de Rio Grande, no g1. | CONFIRMADA · herdada | a maior praia em extensão do mundo começa no Cassino e termina na Barra do Chuí | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF076 | p9 | O enquadramento é do g1 (com a Fepam dentro da matéria). | CONFIRMADA · herdada | Adendo da Sala: a matéria do g1, lida no navegador do app | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-035 | p10 | As medidas com método (as réguas de 50 km e 30 mi, o IBGE, a régua de 10 m, o OSM, a trilha) ficam entre 134,1 e 138,6 mi: 4,5 mi. Os números soltos da imprensa (212, 220 km; fatos 2.2) também caem perto; o 254 não. | CONFIRMADA | trail 223 km = 138.6 mi: all within 4.5 mi of each other | C30 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-036 | p10 | Os dois municípios. | CONFIRMADA | the two municipalities = 2 (Rio Grande, Santa Vitória do Palmar) | C15 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-037 | p10 | O g1 dá a linha (218 km) ao IBGE. | CONFIRMADA | o IBGE (publicação de 2024), 218 km para as duas cidades juntas | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.3) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-038 | p10 | Rede Brasileira de Trilhas: 223 km, de molhe a molhe. | CONFIRMADA | "Distância: 223 km", dos Molhes do Cassino aos Molhes da Barra do Chuí | pauta, leituras da Sala S4 · pautas/2026-11-07-video-6-cassino.md |
| R2-039 | p10 | 223 km fica 3,27 km acima da maior linha medida (e 5 km acima do IBGE): a touch longer. | CONFIRMADA | it is 3.27 km above the OSM line (219.73 km), the longest coastline we measured | C02 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-040 | p10 | As réguas de 10 m a 50 km no OSM: 215,75 a 219,41 km (134,1 a 136,3 mi), dentro da faixa. | CONFIRMADA | régua de   1000 m:  218.00 km ( 135.5 mi; 217 passos) | L11 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-041 | p10 | Só o 254 km (157,8 mi) do turismo do Estado fica de fora: 19,2 mi acima da trilha. | CONFIRMADA | the state's 254 km = 157.8 mi sits 19.2 mi above the longest careful measurement | C31 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-042 | p10 | 254 km no turismo do Estado. | CONFIRMADA | a praia oceânica com 254 km de areia branca e fina | TUR-RS · https://www.turismo.rs.gov.br/turismo/atrativo/visualizar/4597 |
| R2-043 | p10 | = 158 mi. | CONFIRMADA | C01 state tourism 254 km = 157.8 mi, which rounds to 158 mi | C01 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-044 | p11 | A definição (WorldAtlas). | CONFIRMADA | because finer-grained measurements pick up bays, inlets, and curves that coarser measurements smooth over | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| R2-045 | p11 | Princípio geral. | CONFIRMADA | The smaller the ruler, the longer the coast. | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| R2-046 | p11 | A régua de 30 mi (48,28 km), medida hoje no OSM (o VF110 do r1, trocado: o 134 saiu da voz e a régua tem o tamanho certo). | CONFIRMADA | C25 ruler 30 mi = 48.28 km | C25 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-047 | p11 | O método do compasso: de cada ponto, o próximo é o primeiro ponto do traçado à distância da régua, em linha reta; a régua anda a partir da marca. | CONFIRMADA | de cada ponto, o próximo é o primeiro ponto do traçado a regua_km em linha reta | costa_ibge.py (compasso) · pautas/praia-do-cassino/_trabalho/scripts/costa_ibge.py |
| R2-048 | p11 | A régua longa pula o que a costa faz entre as marcas. | CONFIRMADA | because finer-grained measurements pick up bays, inlets, and curves that coarser measurements smooth over | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| R2-049 | p11 | Régua de 30 mi: 4 passos inteiros e o resto até o Chuí (5 apoios): a handful. | CONFIRMADA | régua de  48280 m:  216.00 km ( 134.2 mi; 4 passos) | C25 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-050 | p11 | Régua de 10 m (33 pés, o tamanho de um barco): 21.940 passos (thousands); o OSM tem um nó a cada ~9 m. | CONFIRMADA | régua de     10 m:  219.41 km ( 136.3 mi; 21940 passos) | L11 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-051 | p11 | As duas respostas: 216,00 e 219,41 km, 1,58 % (com a de 50 km, 1,70 %): menos de 2 %. | CONFIRMADA | C27 the two answers = 2: 30 mi ruler 216.00 km and 10 m ruler 219.41 km, 1.58 % apart (less than 2 %) | C27 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-052 | p11 | 158. | CONFIRMADA | C01 state tourism 254 km = 157.8 mi, which rounds to 158 mi | C01 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF102 | p11 | O g1 explica a diferença pelo paradoxo. | CONFIRMADA · herdada | O próprio g1 explica a diferença pelo paradoxo da linha costeira | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.4) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF103 | p11 | g1. | CONFIRMADA · herdada | O próprio g1 explica a diferença pelo paradoxo da linha costeira | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.4) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF104 | p11 | A en.wikipedia. | CONFIRMADA · herdada | Due to the Coastline paradox, measuring the longest beach exactly is incredibly complicated | en.wikipedia (API) · https://en.wikipedia.org/wiki/List_of_longest_beaches |
| VF105 | p11 | O WorldAtlas. | CONFIRMADA · herdada | The Coastline Paradox: Why "Longest" Is Tricky | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF107 | p11 | Princípio geral. | CONFIRMADA · herdada | The smaller the ruler, the longer the coast. | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF108 | p11 | As duas réguas. | CONFIRMADA · herdada | C18 counts: the two rulers of the paradox = 2 | C18 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF113 | p11 | De 20 m a 25 km: 217,14 a 219,10 km, dentro de 215,75 a 219,73. | CONFIRMADA · herdada | régua de   1000 m:  218.00 km ( 135.5 mi; 217 passos) | L11 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF116 | p11 | Richardson e Mandelbrot. | CONFIRMADA · herdada | first articulated by Lewis Fry Richardson in the 1950s and developed mathematically by Benoit Mandelbrot | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF117 | p11 | O traçado do IBGE muda 1 % de 50 m a 50 km. | CONFIRMADA · herdada | régua de  0.05 km:  218.05 km (4360 passos) | S2 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-053 | p12 | Reta 131,7 mi; a maior resposta de régua, 136,3 mi (10 m). | CONFIRMADA | C28 straight line 131.7 mi; longest ruler answer 136.3 mi (10 m ruler) | C28 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-054 | p12 | 136,3 - 131,7 = 4,6 mi; a linha inteira do OSM, 4,8 mi: menos de 5. | CONFIRMADA | 136.3 - 131.7 = 4.6 mi (less than 5 mi) | C28 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-055 | p12 | O arco soma 4,15 km (2,6 mi, 2,0 %) à corda; o traçado, 6,03 km. | CONFIRMADA | more than the chord; the IBGE line is 6.03 km more | C20 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF120 | p12 | Os dois lados da reta. | CONFIRMADA · herdada | afastamento: de -18.21 a 4.54 km (os dois sinais = os dois lados da corda) | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF122 | p12 | Janelas de 10 km: mediana 0,07 %. | CONFIRMADA · herdada | janelas de ~10 km: 21; traçado/corda de 1.0001 a 1.0230 (mediana 1.0007) | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF123 | p12 | 158 - 136,5 = 21,3 mi. | CONFIRMADA · herdada | C07 the 158 mi minus the OSM line 136.5 mi = 21.3 mi: the 20-odd extra miles | C07 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF124 | p12 | As páginas do Estado não dizem quem mediu. | CONFIRMADA · herdada | Nenhuma das duas diz quem mediu nem como. | pauta, leituras da Sala (item 3) · pautas/2026-11-07-video-6-cassino.md |
| R2-056 | p13 | uma das mais extensas barreiras costeiras do mundo. | CONFIRMADA | apresenta uma das mais extensas barreiras costeiras do mundo | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-057 | p13 | UFRGS (Universidade Federal do Rio Grande do Sul). | CONFIRMADA | Universidade Federal do Rio Grande do Sul, e-mail: ljt@via-rs.net | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF125 | p13 | 625 km, 'gently undulating'. | CONFIRMADA · herdada | The 625 km long barrier coast of Rio Grande do Sul is gently undulating | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF126 | p13 | 625 km = 388,4 mi; 630 = 391,5. | CONFIRMADA · herdada | C09 RS coast 625 km (Dillenburg) = 388.4 mi; 630 km (Toldo) = 391.5 mi (about 390 mi) | C09 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF127 | p13 | 'uma pequena sinuosidade'. | CONFIRMADA · herdada | com orientação uniforme NE-SW e uma pequena sinuosidade | Toldo et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/89.pdf |
| VF130 | p13 | A definição de barreira. | CONFIRMADA · herdada | uma barreira consiste em um corpo arenoso alongado e estreito que separa os sedimentos lagunares dos sedimentos marinhos | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF131 | p13 | Formada pela transgressão. | CONFIRMADA · herdada | desenvolveu-se como conseqüência da última grande transgressão pós-glacial | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| R2-058 | p14 | Ao chegar ao raso, a parte da crista em água mais rasa anda mais devagar; os raios convergem sobre os rasos (o ponto que avança mar adentro). | CONFIRMADA | converge on local shallows and shoals | en.wikipedia, Wind wave (API) · https://en.wikipedia.org/wiki/Wind_wave |
| R2-059 | p14 | A crista desacelera no raso e se curva (refração). | CONFIRMADA | with those parts of the wave in deeper water moving faster than those in shallow water | en.wikipedia, Wind wave (API) · https://en.wikipedia.org/wiki/Wind_wave |
| R2-060 | p14 | Refração sobre as projeções. | CONFIRMADA | refração de ondas as projeções costeiras tendem a concentrar a energia das ondas | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-061 | p14 | Concentram a energia e se desgastam. | CONFIRMADA | as reentrâncias tendem à dispersão dessa energia, resultando na erosão das | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-062 | p14 | O material erodido das projeções vai às reentrâncias adjacentes. | CONFIRMADA | na deposição do material erodido nas reentrâncias adjacentes | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF132 | p14 | Costa dominada pelas ondas. | CONFIRMADA · herdada | A costa do Rio Grande do Sul (RS) é dominada pela ação das ondas | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF133 | p14 | Ondulações dominantes de SE. | CONFIRMADA · herdada | ação dominante de ondulações provenientes de SE | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF134 | p14 | Ondas de 1,5 m. | CONFIRMADA · herdada | com altura significativa média de 1,5 m | Toldo et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/89.pdf |
| VF135 | p14 | Maré < 50 cm = 1,64 pé. | CONFIRMADA · herdada | C13 tide: Clerot under 50 cm = 1.64 ft; Dillenburg mean 0.5 m = 1.64 ft; Toldo mean 0.25 m = 0.82 ft (all under 2 ft) | C13 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF136 | p14 | Dominada por ondas, micromaré. | CONFIRMADA · herdada | francamente dominada por ondas e com amplitude de marés inferior a 50 cm | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF139 | p14 | O material vai às reentrâncias. | CONFIRMADA · herdada | na deposição do material erodido nas reentrâncias adjacentes | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF140 | p14 | Ao sentir o fundo, a crista se realinha às curvas de nível, num ângulo cada vez menor. | CONFIRMADA · herdada | As the waves slow down in shoaling water, the crests tend to realign at a decreasing angle to the depth contours. | en.wikipedia, Wind wave (API) · https://en.wikipedia.org/wiki/Wind_wave |
| VF141 | p14 | O modelo suprime saliências. | CONFIRMADA · herdada | a ação das ondas pode suprimir as reentrâncias e saliências (projeções) da linha de costa | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF142 | p14 | A refração da crista ao chegar ao raso (o mesmo mecanismo, em pequena escala). | CONFIRMADA · herdada | As the waves slow down in shoaling water, the crests tend to realign at a decreasing angle to the depth contours. | en.wikipedia, Wind wave (API) · https://en.wikipedia.org/wiki/Wind_wave |
| VF143 | p14 | A energia de onda é o principal fator da evolução da costa do RS (o título do artigo). | CONFIRMADA · herdada | O PRINCIPAL FATOR CONTROLADOR DA EVOLUÇÃO | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-063 | p15 | O ouvinte conclui que a praia é uma só porque a barreira não se abre entre as duas paredes (as duas descontinuidades são Rio Grande e Tramandaí). | CONFIRMADA (L) | a barreira holocênica apresenta apenas duas descontinuidades | Dillenburg et al. 2003 · midia/praia-do-cassino/fontes/texto/aprh-142-dillenburg-2003.txt |
| VF144 | p15 | 'muito pouca areia do continente'. | CONFIRMADA · herdada | recebe muito pouca areia do continente | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF145 | p15 | 13.750 km2. | CONFIRMADA · herdada | a Lagoa dos Patos e a Lagoa Mirim, que se estendem por uma área de 13.750 km2 | Toldo et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/89.pdf |
| VF146 | p15 | = 5.309 mi2. | CONFIRMADA · herdada | C10 Lagoa dos Patos + Lagoa Mirim 13,750 km2 = 5,309 mi2 (more than 5,000 mi2) | C10 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF147 | p15 | Duas. | CONFIRMADA · herdada | two lagoons = 2 (Patos and Mirim) | C17 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF148 | p15 | Toldo. | CONFIRMADA · herdada | toda carga de tração transportada pelos rios é retida nas lagunas | Toldo et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/89.pdf |
| VF149 | p15 | Dillenburg. | CONFIRMADA · herdada | é depositada no interior de lagoas e lagunas | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF150 | p15 | 'apenas duas descontinuidades'. | CONFIRMADA · herdada | a barreira holocênica apresenta apenas duas descontinuidades | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF151 | p15 | Duas. | CONFIRMADA · herdada | two openings in the barrier = 2 (Rio Grande and Tramandaí) | C17 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF152 | p15 | Rio Grande. | CONFIRMADA · herdada | situam-se em Rio Grande, onde localiza-se o canal da laguna dos Patos | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF153 | p15 | A água doce mantém abertos. | CONFIRMADA · herdada | A contínua e grande descarga de água doce mantém permanentemente abertos estes dois canais | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF154 | p15 | Tramandaí. | CONFIRMADA · herdada | e em Tramandaí, onde ocorre a desembocadura do canal da laguna de Tramandaí | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF155 | p15 | O ouvinte conclui que entre as duas paredes a barreira não se abre: as duas descontinuidades são Rio Grande e Tramandaí. Conta sobre a fonte, com o dono ('by that count'). | CONFIRMADA (L) · herdada | a barreira holocênica apresenta apenas duas descontinuidades | Dillenburg et al. 2003 · midia/praia-do-cassino/fontes/texto/aprh-142-dillenburg-2003.txt |
| R2-064 | p16 | A areia da Barreira IV é policíclica (Clerot et al. 2003): retrabalhada em mais de um ciclo; o VF158/VF161 do r1, trocado. | CONFIRMADA | areias policíclicas quartzosas | Clerot et al. 2003; fatos 3.10 · midia/praia-do-cassino/fontes/web/aprh-143-clerot-2003-lida-2026-11-07.txt |
| R2-065 | p16 | A barreira é feita de areias de praia e de vento. | CONFIRMADA | essencialmente por areias praiais e eólicas | Clerot et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| R2-066 | p16 | larga (100 a 200 km), rasa. | CONFIRMADA | A plataforma continental adjacente é larga (100 a 200 km), rasa (100 a 140 m) | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-067 | p16 | 200 km = 124,3 mi. | CONFIRMADA | C11 shelf up to 200 km = 124.3 mi (up to about 120 mi) | C11 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-068 | p16 | A parte que a plataforma tem: a declividade dela comanda a forma da costa (o parágrafo seguinte). | CONFIRMADA | a costa é côncava onde a declividade da plataforma é menor e convexa onde a declividade é maior | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF162 | p16 | ~2 m em 5 ka. | CONFIRMADA · herdada | aproximadamente 2 m acima do nível atual no máximo da Última Grande Transgressão (5 ka) | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF163 | p16 | ~3 m em ~5 ka. | CONFIRMADA · herdada | do mar alcançou aproximadamente 3 m acima do nível | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF164 | p16 | 5.000 anos; 6,6 a 9,8 pés. | CONFIRMADA · herdada | C14 sea level peak 5 ka = 5,000 years ago; 2 m (Dillenburg) = 6.6 ft, 3 m (Clerot) = 9.8 ft (several feet) | C14 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF165 | p16 | A regressão em pulsos. | CONFIRMADA · herdada | a regressão se deu por pequenos pulsos | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF166 | p16 | Cordões regressivos. | CONFIRMADA · herdada | desenvolvida sob a forma de cordões litorâneos regressivos | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF167 | p16 | 8 a 14 km. | CONFIRMADA · herdada | has widths in the Cassino region varying from 8 to 14 km | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF168 | p16 | 14 km = 8,7 mi. | CONFIRMADA · herdada | C12 Cassino barrier IV up to 14 km = 8.7 mi (up to 9 mi) | C12 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF169 | p16 | Quatro sistemas; o IV é o mais jovem. | CONFIRMADA · herdada | In Rio Grande do Sul state we can identify four systems of barrier-lagoons. Barrier IV is the  youngest system | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF170 | p16 | O IV é o mais externo. | CONFIRMADA · herdada | a idade decresce no sentido do sistema mais externo (sistema laguna-barreira IV) | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| R2-069 | p17 | Gerada no máximo transgressivo de 5 ka. | CONFIRMADA | Esta configuração da linha de costa foi gerada no máximo transgressivo de 5 ka | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-070 | p17 | Segue a declividade da plataforma. | CONFIRMADA | a costa é côncava onde a declividade da plataforma é menor e convexa onde a declividade é maior | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-071 | p17 | Côncava onde a declividade é menor. | CONFIRMADA | a costa é côncava onde a declividade da plataforma é menor e convexa onde a declividade é maior | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-072 | p17 | Convexa onde a declividade é maior. | CONFIRMADA | a costa é côncava onde a declividade da plataforma é menor e convexa onde a declividade é maior | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-073 | p17 | O arco para o mar no meio do trecho é o setor convexo de Dillenburg (Verga ao Chuí), o afastamento de 18,21 km da corda. | CONFIRMADA | De Verga ao Chuí a costa é ligeiramente convexa | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF173 | p17 | Retrogradante no sul. | CONFIRMADA · herdada | indicando uma natureza retrogradante da barreira | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF174 | p17 | Lama e turfa no pós-praia. | CONFIRMADA · herdada | depósitos de lama lagunar e turfa afloram na zona de pós-praia | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF175 | p17 | Janelas de 10 km. | CONFIRMADA · herdada | janelas de ~10 km: 21; traçado/corda de 1.0001 a 1.0230 (mediana 1.0007) | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF176 | p17 | OSM até 219,73 km. | CONFIRMADA · herdada | comprimento pelo traçado do OSM: 219.73 km (136.5 mi) | L11 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF177 | p17 | O modelo. | CONFIRMADA · herdada | a ação das ondas pode suprimir as reentrâncias e saliências (projeções) da linha de costa | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF178 | p17 | A forma da costa foi gerada no máximo transgressivo de 5 ka. | CONFIRMADA · herdada | Esta configuração da linha de costa foi gerada no máximo transgressivo de 5 ka | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-074 | p18 | Decreto nº 12.868, de 6 de março de 2026. | CONFIRMADA | DECRETO Nº 12.868, DE 6 DE MARÇO DE 2026 | Decreto 12.868 (Câmara, publicação original) · https://www2.camara.leg.br/legin/fed/decret/2026/decreto-12868-6-marco-2026-798788-publicacaooriginal-178381-pe.html |
| R2-075 | p18 | Cria o Parque Nacional e a APA do Albardão. | CONFIRMADA | Art. 1º Ficam criados, no Estado do Rio Grande do Sul, o Parque Nacional do Albardão | Decreto 12.868, Art. 1º · https://www2.camara.leg.br/legin/fed/decret/2026/decreto-12868-6-marco-2026-798788-publicacaooriginal-178381-pe.html |
| R2-076 | p18 | A APA começa na costa a lat -32,976, ao sul do limite municipal (-32,629): no trecho de Santa Vitória. | CONFIRMADA | APA p1 (limite da ZA do Taim): lon -52.55784, lat -32.97622; a 0.16 km do traçado do IBGE (vértice 201); ao sul do limite municipal (lat -32.6288) | decreto, Art. 6º (medido) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-077 | p18 | A APA vai à foz do Arroio Chuí, em Santa Vitória. | CONFIRMADA | APA p60 (foz do Arroio Chuí): lon -53.36937, lat -33.74436; a 0.09 km do traçado do IBGE (vértice 502); ao sul do limite municipal (lat -32.6288) | decreto, Art. 6º (medido) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-078 | p18 | O parque chega à areia no trecho do Albardão, em Santa Vitória. | CONFIRMADA | park point 20: lon -53.07310, lat -33.51865; 0.21 km from the IBGE line, on the land side | decreto, Art. 3º (medido) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-079 | p18 | A forma, a categoria para a maior parte da área, a magnitude da restrição. | CONFIRMADA | A forma como o decreto foi editado, a categoria de unidade de conservação escolhida para a maior parte da área e a magnitude territorial da restrição imposta | PDL 112/2026, p. 3 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-080 | p18 | A categoria mais restritiva. | CONFIRMADA | concentrou a área principal na categoria mais restritiva | PDL 112/2026, p. 4 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-081 | p18 | A consulta pública. | CONFIRMADA | consulta pública deixou de cumprir integralmente sua finalidade legal | PDL 112/2026, p. 5 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-082 | p18 | A pesca. | CONFIRMADA | impacto direto sobre a pesca e sobre as comunidades locais | PDL 112/2026, p. 3 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-083 | p18 | A eólica no mar. | CONFIRMADA | presença de projetos de geração eólica offshore em avaliação | PDL 112/2026, p. 6 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-084 | p18 | O petróleo e gás (a Bacia de Pelotas saiu da voz). | CONFIRMADA | considerada nova fronteira exploratória de petróleo e gás no país | PDL 112/2026, p. 6 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| VF081 | p18 | Art. 7º, I (APA). | CONFIRMADA · herdada | incluídas as dunas, a praia, e a plataforma continental | Decreto 12.868, Art. 7º · https://www2.camara.leg.br/legin/fed/decret/2026/decreto-12868-6-marco-2026-798788-publicacaooriginal-178381-pe.html |
| VF082 | p18 | Art. 4º, II (Parque). | CONFIRMADA · herdada | preservar os sítios paleontológicos associados ao ambiente de praia | Decreto 12.868, Art. 4º · https://www2.camara.leg.br/legin/fed/decret/2026/decreto-12868-6-marco-2026-798788-publicacaooriginal-178381-pe.html |
| VF083 | p18 | PDL 112/2026, do senador Luis Carlos Heinze (PP/RS). | CONFIRMADA · herdada | Autor: Senador Luis Carlos Heinze (PP/RS) | Senado, PDL 112/2026 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| VF084 | p18 | 'Susta os efeitos do Decreto nº 12.868'. | CONFIRMADA · herdada | Susta os efeitos do Decreto nº 12.868, de 6 de março de 2026 | Senado, PDL 112/2026 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| VF085 | p18 | Justificativa do PDL. | CONFIRMADA · herdada | Não se ignora a relevância ambiental do Albardão | PDL 112/2026, texto inicial, p. 3 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| VF092 | p18 | Lido em 07/11/2026: na CMA desde 12/05/2026, aguardando relator (dados de 29/10/2026). Volátil. | CONFIRMADA · herdada | Último local: 12/05/2026 - Comissão de Meio Ambiente Último estado: 12/05/2026 - AGUARDANDO DESIGNAÇÃO DO RELATOR | Senado, PDL 112/2026 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-085 | p19 | Duas coisas (o Altair; o sítio dos foguetes de 1966). | CONFIRMADA | C32 counts: two more things on the sand = 2 | C32 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-086 | p19 | Um navio: o cargueiro Altair. | CONFIRMADA | the wreck of the Greek freighter SS Altair (grounded in 1976) | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| R2-087 | p19 | A FURG, no g1 (2025): pode desaparecer nos próximos anos. A FURG é a universidade federal da cidade de Rio Grande. | CONFIRMADA | a FURG diz que ele pode desaparecer nos próximos anos | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.7) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF185 | p19 | Desde junho de 1976 (g1). | CONFIRMADA · herdada | encalhado desde junho de 1976 | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.7) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF186 | p19 | Um cargueiro. | CONFIRMADA · herdada | the wreck of the Greek freighter SS Altair (grounded in 1976) | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF187 | p19 | Jogado à costa de propósito. | CONFIRMADA · herdada | foi jogado à costa de propósito, numa tempestade, para não afundar de vez | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.7) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF188 | p19 | Idem. | CONFIRMADA · herdada | foi jogado à costa de propósito, numa tempestade, para não afundar de vez | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.7) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF190 | p19 | Quem conta é o g1. | CONFIRMADA · herdada | Adendo da Sala: a matéria do g1, lida no navegador do app | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-088 | p20 | O eclipse e a data do release 66-285. | CONFIRMADA | RELEASE NO: 66-285  (November 12, 1966) | NASA Release 66-285 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-089 | p20 | the southern tip of Brazil. | CONFIRMADA | Argentina, the southern t i p of Brazil and extending into the | NASA Release 66-285, p. 2 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-090 | p20 | Totalidade às ~11:10 locais: de manhã. | CONFIRMADA | centered around the time of t o t a l i t y at about 11:lO a.m. | NASA Release 66-285, p. 5 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-091 | p20 | O release é de 6/11/1966, antes do eclipse. | CONFIRMADA | SUNDAY  N E W S  November 6, 1966 | NASA Release 66-285, p. 1 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-092 | p20 | O plano: uma praia perto de Rio Grande. | CONFIRMADA | be fired over the Atlantic from a beach site near Rio Qrande | NASA Release 66-285, p. 4 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-093 | p20 | 21 de Cassino. | CONFIRMADA | and 21 from Cassino, near Rio Grande | NASA Release 66-285, p. 2 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-094 | p20 | ~15 mi ao sul de Rio Grande, perto do Cassino. | CONFIRMADA | 15 miles south of Rio Grande, near CaS81n0 | NASA Release 66-285, p. 6 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-095 | p20 | Sobre o Atlântico, de uma praia (fly out over the ocean). | CONFIRMADA | be fired over the Atlantic from a beach site near Rio Qrande | NASA Release 66-285, p. 4 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-096 | p20 | Alta atmosfera e ionosfera. | CONFIRMADA | probe the Earth's upper atmosphere and  ionosphere | NASA Release 66-285, p. 4 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-097 | p20 | Antes, durante e depois. | CONFIRMADA | and ionosphere before, during, and after the eclipse | NASA Release 66-285, p. 5 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-098 | p20 | It is very near the path of totality (o and only one do VF205 saiu). | CONFIRMADA | It is very near the path of totality. | NASA Release 66-285, p. 6 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-099 | p20 | Gemini 12, scheduled. | CONFIRMADA | and Brazil, by the Gemini 12 astronauts and by 26scientists | NASA Release 66-285, p. 1 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-100 | p20 | Em órbita sobre a área. | CONFIRMADA | be orbiting over the  eclipse area. | NASA Release 66-285, p. 2 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| VF209 | p20 | Release de antes do dia 12. | CONFIRMADA · herdada | SUNDAY  N E W S  November 6, 1966 | NASA Release 66-285, p. 1 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| VF210 | p20 | Idem (rodapé 10/31/66). | CONFIRMADA · herdada | SUNDAY  N E W S  November 6, 1966 | NASA Release 66-285, p. 1 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| VF212 | p21 | Dois molhes (OSM). | CONFIRMADA · herdada | OSM maps two breakwaters: way 528148406 | C23 (OSM) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF213 | p21 | Barra del Chuy, no Uruguai. | CONFIRMADA · herdada | near the twin coastal villages of Barra do Chuí (Brazil) and Barra del Chuy (Uruguay) | en.wikipedia (API) · https://en.wikipedia.org/wiki/Chu%C3%AD_Stream |
| VF214 | p21 | Do Chuí, 34 graus (nordeste). | CONFIRMADA · herdada | rumo da corda (da barra para o Chuí): 214.0 graus | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF215 | p21 | A lama e a turfa nos 10 km do sul. | CONFIRMADA · herdada | Entre Hermenegildo e o Chui (10 km) | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF216 | p21 | O navio a ~16 km do Cassino. | CONFIRMADA · herdada | fica a cerca de 16 km do centro do Cassino | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.7) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF217 | p21 | Horizonte a 4,65 km; a 212 km a curvatura esconde ~3.373 m. | CONFIRMADA · herdada | the curve of the earth hides everything below about 3,373 m | C21 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF218 | p21 | Até o horizonte, a praia não sai 95 m de uma reta. | CONFIRMADA · herdada | the beach strays at most 95 m from a straight line | C22 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF219 | p21 | Erosão das projeções, deposição nas reentrâncias. | CONFIRMADA · herdada | e a na deposição do material erodido nas reentrâncias adjacentes | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF220 | p21 | Duas paredes. | CONFIRMADA · herdada | C15 counts: the two ends, the two walls = 2 | C15 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF221 | p21 | A costa segue mudando: zonas de erosão e de acresção medidas por DGPS (Toldo) e a barreira que recua no sul (Dillenburg). | CONFIRMADA · herdada | Zonas de erosão e acresção e estimativas do potencial regional de deriva litorânea | Toldo et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/89.pdf |

VEREDITO: RESSALVA
