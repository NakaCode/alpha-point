COBERTURA: 228 de 229

# Laudo · verificador de fatos (independente, da Sala de controle) · roteiro r3 · praia-do-cassino (vídeo 6)

Revisão julgada: `8c8beff8c0b4` · data-base 2026-11-08 (leituras e medidas de hoje; as herdadas guardam a data-base do r2, 2026-11-07)

As 229 linhas de `roteiros/praia-do-cassino/qc-roteiro/fatos-tabela.json` têm veredito: 228 "confirmada" e 1 "corrigir" (o portão conta
como N só as confirmadas). Elas cobrem as afirmações checáveis de 139 das 166 frases do texto falado (a contagem é a do `gate.mjs`, e a
minha divisão dá as mesmas 166); as outras 27 não afirmam nada checável e estão declaradas uma a uma abaixo (NADA A CHECAR). **O texto foi
CHECADO POR INTEIRO**: nenhuma frase com fato ficou sem linha, nenhum item ficou NÃO FOI CHECADO, e o que recusou robô (dois dicionários,
abaixo) não sustenta item nenhum. Um item pede a troca de uma palavra.

NOTA: 9.0/10. Igual à do r2. O gancho A e a costura do ato 1 não trazem número novo errado: o 132, o "less than five" e o arco de 11 mi
fecham nas duas linhas (IBGE e OSM), medidos hoje, e as duas afirmações gerais do gancho ("Most of them wander", "the longer the coast, the
more room it has to wander") têm letra e ainda a medida nesta costa. As duas trocas da Sala passam. O que tira o ponto é uma palavra nova
que diz mais que a fonte, "the answer was short": o g1 conta o conteúdo da resposta do Guinness, não o tamanho dela.

## O que foi julgado, e como

- **O texto:** o texto falado inteiro de `roteiros/praia-do-cassino/roteiro-narrador.md`, sha256 do texto falado
  `8c8beff8c0b49499da1a2fe06d17066af02be7eff8fcc5955997ea532a37eda8` (o do pedido). `node roteiros/praia-do-cassino/_ferramentas/gate.mjs`:
  PASSA, 0 problemas, 2.450 palavras, 21 parágrafos, 166 frases, gancho de 128 palavras até a assinatura ("But" na 47), e os 3 alertas de
  sempre (a 1ª frase sem número, `[guinness-atribuido]` e `[gemini]`; os dois últimos são frases herdadas, VF018 e R2-099/R2-100,
  confirmadas).
- **O denominador, derivado por diferença** (o canal não tem extrator de afirmações): um script (`…\scratchpad\vf3\diff3.py`, sobre a
  divisão de frases do `diff.py` do r2) dividiu o r2 julgado (`9836f209d3e5`), o r2 final (`_trabalho/roteiro-r2.antes.md`, `73dbed36b793`,
  o julgado mais as duas trocas de `_trabalho/aplicado-sala-r2.md`) e o r3, e casou cada uma das 223 linhas de `fatos-tabela-r2.json` com o r3:
  - **200 linhas HERDADAS**: a frase está inteira, letra a letra, no mesmo parágrafo do r3 (os 21 parágrafos casam um a um). Veredito,
    fonte e trecho são os do laudo do r2; a `nota` de cada uma começa por "Herdada do laudo do r2", e elas trazem `"herdada": true`.
  - **23 linhas do r2 saíram**, porque a frase delas mudou: VF008, VF011 a VF015, R2-001 a R2-007 (o gancho do r2), R2-010 a R2-012,
    R2-015 a R2-019 (as três emendas do ato 1) e VF081/VF082 (a troca da Sala no ato 4).
  - **29 linhas CONFERIDAS DE NOVO** (ids `R3-001` a `R3-029`), sobre as 12 frases que mudaram ou entraram, cada uma inteira. Quando a
    afirmação é a mesma do r2, reli a fonte e o trecho contra a frase nova (a `nota` diz de qual linha veio); quando é nova, li a fonte.
  - Depois o script cobriu frase a frase: as 27 frases sem linha são as de NADA A CHECAR, lidas uma a uma.
  - **O contexto das herdadas vizinhas do que mudou**, conferido: "The website that put this beach at number one in your search" (a busca
    continua antes, no p4); "You saw the bow near the middle at the start" (o arco agora é dito aos 49 s, na 2ª frase do ato 1, e a
    remissão vem aos 404 s: vale); "You'll see how much in a minute" (111 s) fecha no "more than two-thirds" (256 s), 2,4 min depois, como
    no r2 (C33, idiomático); o "the answer you heard a minute ago" saiu com a emenda, e a resposta do Guinness agora é dita no próprio p5.
  - Limite declarado: a divisão de frases e a escolha do que é afirmação são minhas; o portão confere estrutura, não sentido.
- **As medidas, refeitas hoje** (sem rede, nas cópias de `midia/praia-do-cassino/fontes/`): o `desvio_corda.py` da pauta, sem mudança,
  sobre o shapefile do IBGE, e um `desvio_osm.py` meu (scratchpad), que carrega o `costa_ibge.py` e o `costa_osm.py` pelo caminho e mede a
  linha do OSM do mesmo jeito. A saída está em `roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r3.txt` (C34 a C37; as C01 a C24 seguem
  em `fatos-medidas.txt`, e as C25 a C33 em `fatos-medidas-r2.txt`).
- **A rede** (08/11/2026): duas páginas da en.wikipedia pela API do MediaWiki, um pedido por vez, com o User-Agent do canal ("Coastline
  paradox" e "Breakwater (structure)"), gravadas em `midia/praia-do-cassino/fontes/web/enwiki-*-api-lida-2026-11-08.{htm,txt}`, com a URL e
  o sha256 no cabeçalho. O Merriam-Webster e o Cambridge Dictionary (a definição de "breakwater") responderam **HTTP 403**: parei, não
  contornei, e nenhum item depende deles.

## As 12 frases que mudaram ou entraram, conferidas

| § | Frase do r3 | O que a sustenta | Linhas | Veredito |
|---|---|---|---|---|
| p1 | "From the air, it looks like a line someone drew." | "gently undulating" (Dillenburg et al. 2003); o traçado do IBGE passa a reta em só 2,85 % (C36). "From the air" é o ponto de vista da cena, não afirma foto | R3-001 | CONFIRMADA |
| p1 | "Two walls mark its ends, about 132 miles apart in a straight line, and the sand between them is less than five miles longer." | molhes nas duas pontas (turismo do RS); a reta 211,97 km = 131,7 mi; a praia 3,7 mi (IBGE) e 4,8 mi (OSM) acima dela | R3-002 a R3-006 | CONFIRMADA |
| p2 | "But coasts don't usually do that." | "a coastline typically has a fractal dimension" (en.wikipedia, "Coastline paradox"). O "usually" deixa espaço às exceções, que o próprio ato 1 mostra (Long Beach, Padre Island) | R3-007 | CONFIRMADA |
| p2 | "Most of them wander: into bays, out around points, past river mouths, and the longer the coast, the more room it has to wander." | "A coastline is perceived as bays alternating with promontories"; "features at all scales, from hundreds of kilometers in size"; e, nesta costa, a razão traçado/corda cresce com o trecho: 1,0007 (10 km), 1,0025 (25 km), 1,0099 (50 km), 1,0285 (212 km) (C36) | R3-008 a R3-010 | CONFIRMADA |
| p2 | "This one runs from wall to wall and barely bends." | "gently undulating"; excesso de 2,85 % | R3-011, R3-012 | CONFIRMADA |
| p2 | "The walls at either end were built by people." | o do norte, concluído em 1915 (Revista Marítima, VF055); os do sul, `man_made=breakwater` no OSM (C23) | R3-013, R3-014 | CONFIRMADA |
| p4 | "Up close, that line isn't quite a line." | o traçado passa dos dois lados da reta (de -18,2 a +4,5 km) | R3-015 | CONFIRMADA |
| p4 | "Near the middle, the beach bows out to sea by about 11 miles, in a gentle S, and that is as far from the straight line as it ever gets." | IBGE: maior afastamento 18,21 km (11,3 mi), no lado do mar, a 58 % da corda; OSM: 18,34 km (11,4 mi), no lado do mar, a 57 %. É o máximo das duas linhas inteiras: "as far as it ever gets" FECHA (C34, C35) | R3-016 a R3-018 | CONFIRMADA |
| p5 | "Then, in 2025, the Brazilian news site g1 asked Guinness about it, and the answer was short: it doesn't monitor that title." | o conteúdo, sim ("em resposta ao g1, a instituição informou que não monitora o título"); o "short", não: a letra do Guinness não vem no g1 (fatos, A.1) | R3-019 a R3-022 | 3 CONFIRMADA, 1 CORRIGIR (R3-022) |
| p5 | "That town, as it happens, has most of this beach inside its limits." (troca da Sala) | 155,95 dos 218 km da linha do IBGE (71,5 %) dentro do limite de Santa Vitória do Palmar; a frase não diz mais que isso | R3-023 | CONFIRMADA |
| p6 | "Then there's the number: 158 miles, printed on two pages of the state government's own websites, each with the words "Guinness Book" beside it." | as duas páginas do governo do RS (turismo e Cultura) com 254 km (157,8 mi) e o "Guinness Book" ao lado, como no r2 | R3-024 a R3-027 | CONFIRMADA |
| p18 | "Among what the decree protects: the beach, the dunes, and fossil sites tied to the beach." (troca da Sala) | Art. 7º, I (APA: "incluídas as dunas, a praia") e Art. 4º, II (parque: "sítios paleontológicos associados ao ambiente de praia"); o "Among" abre a lista, que era a observação do r2 | R3-028, R3-029 | CONFIRMADA |

**A aritmética do gancho fecha:** 131,7 mi arredonda para "about 132"; 135,5 − 131,7 = 3,7 mi (IBGE) e 136,5 − 131,7 = 4,8 mi (OSM), as duas
abaixo de cinco; 18,21 km = 11,3 mi e 18,34 km = 11,4 mi, as duas "about 11". O ato 2 ("the longest answer any ruler gave us was about 136.
Less than five miles", 136,3 − 131,7 = 4,6) continua coerente com o gancho.

## A pergunta da Sala: "walls", sem "stone", passa?

**Passa.** "Walls" não afirma material. O "stone" ficou só no molhe do norte ("a line of stone", VF057, Revista Marítima), e nenhuma fonte
lida diz de que são os do Chuí (o OSM os mapeia como `man_made=breakwater`, sem a tag de material; C23). Um molhe é a estrutura que a
en.wikipedia chama de breakwater, "also known in some contexts as a jetty or a mole" (lida hoje pela API), e "wall" é o nome comum dessa
obra em inglês corrente; o r2 já dizia "walls people built" (VF063, herdada, no p8). Duas observações, que não pedem troca:
- "Two walls mark its ends" conta uma parede por ponta, e está certo: a praia começa no Molhe Oeste da barra e termina no molhe brasileiro do
  par do Chuí. O p8 depois diz "another pair of breakwaters", e as duas coisas convivem.
- No vocabulário de engenharia, "vertical wall breakwater" é um tipo e o "mound" (pedra empilhada) é outro (a mesma página). Ninguém que
  ouve "wall" para um molhe vai ler isso como tipo de obra; se a tela rotular o molhe do sul, escreva "BREAKWATER", não "SEA WALL".

## ACHADOS (1 "corrigir"; nenhum REFUTADA, nenhum NÃO FOI CHECADO)

Nenhum toca a tese (a reta, os números, a régua, a física). O texto ainda não foi narrado: consertar aqui não gasta crédito.

1. **[LEVE] R3-022, p5: "…and the answer was short: it doesn't monitor that title."** A fonte sustenta o conteúdo da resposta, não o tamanho
   dela. O g1 escreve "em resposta ao g1, a instituição informou que não monitora o título", e a base da pauta registra que "a frase literal
   do Guinness não vem" (`pautas/2026-11-07-video-6-cassino-fatos.md`, A.1; g1 RS, 20/07/2025,
   https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml,
   lido pela Sala no navegador do app). É NÃO ACHEI sobre o "short", não refutação: se o Guinness disse mais e o g1 resumiu, a voz afirma o
   que não sabemos. É o mesmo padrão do "owns" do r2: a palavra em volta do fato diz mais que a fonte.
   → CONSERTO: "Then, in 2025, the Brazilian news site g1 asked Guinness about it, and the answer came back: it doesn't monitor that title."
   Ou, com o dono: "…and the answer, as g1 reports it, was that it doesn't monitor that title." → RAIZ: PONTUAL.

## Confirmadas com observação (não pedem troca)

- **R3-024 a R3-027, p6, "158 miles, printed on two pages"**: as páginas imprimem "254 km" e "mais de 254 quilômetros"; o "158 miles" é a
  conversão (157,8 mi, C01), como no r2. Na tela, a folha recriada mostra o que a página diz (254 km), e a da Cultura do RS leva a grafia
  dela: **"Guiness Book", com um n só** ("segundo dados do Guiness Book"). A voz não distingue a grafia; a tela, sim.
- **R3-007 a R3-010, p2, as afirmações gerais**: a fonte é terciária (en.wikipedia, que cita Richardson e Mandelbrot), o bastante para uma
  generalização sem número; a medida nesta costa (C36) mostra o mesmo efeito no próprio objeto do vídeo. A mesma página dá D de 1,02 à costa
  da África do Sul: há costas longas quase retas, e o "usually" e o "Most" as deixam de fora sem mentir.
- **R3-011, "barely bends", e R3-016, "bows out to sea by about 11 miles"**: não se contradizem. 18 km de afastamento numa corda de 212 km é
  uma curva larga e lenta, e o próprio ato 1 a diz logo depois ("Up close, that line isn't quite a line").
- **R3-001, "From the air"**: o ponto de vista da cena (o drone e o mapa, pauta §8); não afirma que exista uma foto aérea específica.
- **R3-013 e R3-014, p2, "The walls at either end were built by people."**: a data da obra do Chuí (1975 a 1978, pela busca do r1) não está
  na fala e não foi relida; a frase só afirma que é obra humana, e o `man_made` do OSM basta.
- **As observações do r2 que vieram com as herdadas** (VF018, a grafia "recognised"; VF071, "the only line anyone draws"; VF096/R2-037, o
  IBGE não publica um comprimento: a tela leva "Measure: Alpha Point, on IBGE (2024)"; R2-046, a régua de 30 mi = 134,2 mi se for à tela;
  R2-079, a "form" que engloba categoria e tamanho; VF186, o "Greek" fora da fala) continuam como estão em `fatos-r2.laudo.md`.

## NADA A CHECAR (27 frases, declaradas)

Perguntas, instruções de cena, transições, imagens e juízos de narrador, sem fato que uma fonte confirme ou derrube:
- p2 "The line between them is the question."; "So who drew this coast?" (a pergunta da miniatura; o ato 3 a paga, VF143);
- p3 a assinatura ("…the story of the beach that looks drawn with a ruler begins.");
- p4 "Start where most people meet the title: a search box." (enquadramento de cena, como no r2); "Try it yourself.";
- p5 "The fame does have a trail, though."; "You'll see how much in a minute." (fecha no p9, C37);
- p7 "Other beaches have found their own words."; "So let's measure this one.";
- p8 "So how long is it, really?"; "Stand on the northern wall.";
- p10 "Back to the ruler, then.";
- p11 "By that logic, the biggest number is just the most careful one."; "Let's test it.";
- p12 "So the strange thing about this beach isn't the number."; "It's the coast.";
- p13 "So what keeps a coast this long this straight?"; "Pull back, until the whole shore of Rio Grande do Sul fits on the screen.";
- p14 "Picture one place where the shore pokes out, even a little."; "Think of it as ironing."; "Every pass takes a little of the
  wrinkle out, and the sea doesn't put the iron down."; "No one drew this coast." (o "The waves did." seguinte tem linha, VF143);
- p15 "And very little comes along to spoil the work.";
- p18 "Some of what a line of sand this long, this bare, keeps is written down.";
- p21 "Go to the other wall."; "Turn around."; "No one drew this coast.".

Do r2 saíram três (o "But most coasts are a tangle of coves and points.", o "So who drew it?" e o "A shore that gentle should be easy to
measure."); entraram as duas do p2 e a assinatura nova. A generalização sobre as costas, que no r2 era NADA A CHECAR, no r3 virou afirmação
com letra (R3-007 a R3-010), porque o gancho agora a desenvolve ("into bays, out around points", "the longer the coast").

## Voláteis que ficaram na fala (data-base das leituras: 2026-11-07, herdadas; não reabertos hoje)

- **VF092, o PDL 112/2026** ("As of November 2026, the bill was waiting in a Senate committee"): na CMA desde 12/05/2026, aguardando relator
  (dados do Senado de 29/10/2026). Cresce se for designado relator ou votado; zera se for arquivado ou aprovado. Reler na véspera de publicar.
- **R2-008, a busca** ("one of the top results"): a ordem muda com o dia, o país e o buscador. Reconferir antes de gravar.
- **VF018, VF039, VF040 e R2-009, o WorldAtlas** (reescrito em 30/05/2026): pode mudar o 1º lugar, o 254, a frase do Guinness ou o método.
- **R3-024 a R3-027 (eram R2-016 a R2-019) e R2-042, o turismo do RS** (página sem data): o 254 e o "(Guinness Book)" podem sair. O VF011
  saiu com a frase do gancho do r2.
- **R2-021, o Guinness**: "the only record for a beach itself that we could find" vale para a busca de 07/11/2026.
- **R2-023 e R2-024, a placa de Long Beach**: o Roadside America não tem data; a placa pode ter sido trocada.
- **VF185 e R2-087, o Altair** ("has sat on this sand"; "within a few years the ship may be gone", a FURG em 2025): zera se o casco sumir.
- **R3-008 a R3-010, a en.wikipedia** ("Coastline paradox", lida em 08/11/2026): a página muda; o trecho está na cópia local com o sha256.

## A lista de nomes (anônimo na voz → pessoa ou órgão nomeável)

O gancho e a costura do r3 não trazem anônimo novo. "coasts" e "Most of them" são generalização, não fonte; quem a sustenta, se a Sala quiser
um dono na descrição: **Lewis Fry Richardson** (o "Richardson effect", c. 1951) e **Benoit Mandelbrot**, "How Long Is the Coast of Britain?
Statistical Self-Similarity and Fractional Dimension" (Science, 5 de maio de 1967), pela en.wikipedia (https://en.wikipedia.org/wiki/Coastline_paradox,
lida em 08/11/2026; o artigo da Science não foi lido). As do r2 continuam:
- "a local journalist" → **Willy César**, jornalista, autor de "A cidade do Rio Grande: do big bang a 2015" (pelo g1, 20/07/2025).
- "Its tourism secretary" (Santa Vitória do Palmar) → NÃO ACHEI o nome.
- "A senator from Rio Grande do Sul" → **Luis Carlos Heinze (PP/RS)**, autor do PDL 112/2026
  (https://www25.senado.leg.br/web/atividade/materias/-/materia/173030).
- "Geologists at the federal university of Rio Grande do Sul" → **Sérgio R. Dillenburg** e **Luiz J. Tomazelli** (CECO-IG-UFRGS), 2003
  (https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf), e **Luiz C. P. Clerot** et al. (https://www.aprh.pt/ZonasCosteiras2003/pdf/143.pdf).
- "the federal university in the city of Rio Grande" → **FURG**; "the state's environmental agency" → **Fepam**; "Brazil's statistics
  agency" → **IBGE**; "a national trail network" → **Rede Brasileira de Trilhas**; "the travel guide Roadside America" → **Roadside America**.
- "The website that put this beach at number one" → **WorldAtlas**, texto de **Emanuel Muyres**, 30/05/2026
  (https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html).
- "the astronauts of Gemini 12" → **James A. Lovell** e **Edwin E. Aldrin** (release 66-285, p. 2).

## Os 2 padrões mais vistos

1. **A palavra em volta do fato que cresce** (R3-022, "short"; no r2, "owns"): o fato está certo, e o adjetivo que dá ritmo à frase afirma
   uma coisa que nenhuma fonte mediu. Aparece justamente nas emendas de costura, escritas para a frase soar bem depois de um corte.
2. **A generalização que o gancho promove a fato**: no r2, "most coasts are a tangle of coves and points" era moldura; no r3, o gancho a
   desenvolve em três exemplos e numa regra ("the longer the coast, the more room"). Passou, com letra e com a medida nesta costa, mas quando
   o gancho muda, a moldura dele se confere como afirmação.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Onde gravar os laudos de fatos dos próximos vídeos (CLAUDE.md, "Os marcadores"): gravado em `roteiros/praia-do-cassino/qc-roteiro/`,
  como no r1, no r2 e no Big Sur. Os do r2 ficam em `fatos-r2.laudo.md` e `fatos-tabela-r2.json` (cópias byte a byte).

## Para a Sala ler no navegador do app

Nada bloqueia o laudo. Recusaram robô, e não foram contornados: https://www.merriam-webster.com/dictionary/breakwater (HTTP 403) e
https://dictionary.cambridge.org/dictionary/english/breakwater (HTTP 403); nenhum item depende deles. Continua de reconferência, do r2 (não
bloqueia): a página da Cultura do RS de 29/01/2016 e a da Trilha Cassino x Barra do Chuí (R3-025 e R2-038), e o nome do secretário de
Turismo de Santa Vitória, no g1.

## O portão de fatos

`node ferramentas/portao-fatos.mjs praia-do-cassino`, depois de gravar: **PASSA**, exit 0. "sha12 do texto falado: 8c8beff8c0b4 (igual ao do gate.mjs) · 21 parágrafos"; "laudo: Revisão julgada 8c8beff8c0b4 · COBERTURA 228 de 229 · VEREDITO RESSALVA"; "tabela: 228 confirmada(s) de 229". O portão confere estrutura (trecho na cópia local, número da frase no trecho, sha, cobertura), não sentido: o "short" do R3-022 passa nele como linha "corrigir", que é o que ela é.

## Apêndice: a tabela, uma linha por item (229)

`| id | § | afirmação | veredito | o que a fonte diz (trecho) | fonte / URL |`. A frase falada de cada item está em `fatos-tabela.json`.

| id | § | afirmação | veredito | o que a fonte diz (trecho) | fonte / URL |
|---|---|---|---|---|---|
| VF001 | p1 | O turismo do Estado vende a praia como 'a maior praia do mundo (Guinness Book)'. | CONFIRMADA · herdada | também conhecida como a maior praia do mundo (Guinness Book) | TUR-RS · https://www.turismo.rs.gov.br/turismo/atrativo/visualizar/4597 |
| VF002 | p1 | Rio Grande divulga 'a maior praia em extensão do mundo' (g1). | CONFIRMADA · herdada | Rio Grande hoje divulga "a maior praia em extensão do mundo começa no Cassino e termina na Barra do Chuí" | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R3-001 | p1 | Vista de cima, a costa é quase reta: "gently undulating" (Dillenburg et al. 2003); o traçado do IBGE passa a corda em só 2,85 %. | CONFIRMADA | The 625 km long barrier coast of Rio Grande do Sul is gently undulating | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R3-002 | p1 | As duas pontas são molhes (turismo do Estado). | CONFIRMADA | que inicia nos Molhes da Barra do Cassino e termina nos Molhes do Chuí | TUR-RS · https://www.turismo.rs.gov.br/turismo/atrativo/visualizar/4597 |
| R3-003 | p1 | Na ponta sul, o OSM mapeia dois molhes (man_made=breakwater) na foz do Arroio Chuí; a palavra "breakwaters" não afirma material (o VF007 do r1 sai). | CONFIRMADA | OSM maps two breakwaters: way 528148406 | C23 (OSM) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R3-004 | p1 | A reta entre as pontas: 211,97 km (131,7 mi). | CONFIRMADA | corda 211.97 km (131.7 mi); excesso 2.85 % | S1/L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R3-005 | p1 | As duas pontas (2). | CONFIRMADA | C15 counts: the two ends, the two walls = 2 (Molhes da Barra, north; Molhes da Barra do Chuí, south) | C15 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R3-006 | p1 | A praia passa a reta em 3,7 mi (IBGE) e 4,8 mi (OSM). | CONFIRMADA | C05 beach minus straight line: IBGE 3.7 mi, OSM 4.8 mi (both less than 5 mi) | C05 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R3-007 | p2 | A costa típica não fica perto da reta: "a coastline typically has a fractal dimension" (en.wikipedia, Coastline paradox). O "that" é a frase anterior (menos de 5 mi acima da reta em 132 mi). | CONFIRMADA | a coastline typically has a fractal dimension | enwiki Coastline paradox (API, 08/11/2026) · https://en.wikipedia.org/wiki/Coastline_paradox |
| R3-008 | p2 | A costa se percebe como baías alternando com pontas. | CONFIRMADA | A coastline is perceived as bays alternating with promontories. | enwiki Coastline paradox (API, 08/11/2026) · https://en.wikipedia.org/wiki/Coastline_paradox |
| R3-009 | p2 | "the longer the coast, the more room it has to wander": a costa tem feições em todas as escalas, até centenas de km; um trecho maior cabe as maiores. | CONFIRMADA | Since a landmass has features at all scales, from hundreds of kilometers in size to tiny fractions of a millimeter | enwiki Coastline paradox (API, 08/11/2026) · https://en.wikipedia.org/wiki/Coastline_paradox |
| R3-010 | p2 | Nesta costa, quanto maior o trecho, mais ele se afasta da reta: mediana traçado/corda 1,0007 (10 km), 1,0025 (25 km), 1,0099 (50 km), 1,0285 (212 km). | CONFIRMADA | C36 on this coast, the longer the stretch, the more it departs from straight | C36 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r3.txt |
| R3-011 | p2 | A costa mal se dobra: "gently undulating" (Dillenburg et al. 2003); excesso de 2,85 % sobre a corda. | CONFIRMADA | The 625 km long barrier coast of Rio Grande do Sul is gently undulating | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R3-012 | p2 | Excesso do traçado do IBGE sobre a corda: 2,85 %. | CONFIRMADA | corda 211.97 km (131.7 mi); excesso 2.85 % | desvio_corda.py (IBGE) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r3.txt |
| R3-013 | p2 | O molhe do norte foi construído (concluído em 1915). | CONFIRMADA | Em 1915, estavam concluídos os dois molhes | RMB 3º trim. 2001 · https://portaldeperiodicos.marinha.mil.br/index.php/revistamaritima/article/download/7816/7286/26973 |
| R3-014 | p2 | As do sul: o OSM mapeia os molhes do Chuí como man_made=breakwater (obra humana), sem material. | CONFIRMADA | OSM maps two breakwaters: way 528148406 | C23 (OSM) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R3-015 | p4 | O traçado passa dos dois lados da reta: um S. | CONFIRMADA | afastamento: de -18.21 a 4.54 km (os dois sinais = os dois lados da corda) | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R3-016 | p4 | Maior afastamento da corda: 18,21 km (11,3 mi), a 122,9 km da barra (58 % da corda), para o mar. | CONFIRMADA | maior afastamento da corda: 18.21 km (11.3 mi), a 122.9 km da barra | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R3-017 | p4 | Na linha do OSM, o maior afastamento é 18,34 km (11,4 mi), no lado do mar, a 57 % da corda: o "about 11" e o "as far as it ever gets" valem nas duas linhas. | CONFIRMADA | C34 OSM max distance from the straight line: 18.34 km (11.4 mi) | C34/C35 (OSM) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r3.txt |
| R3-018 | p4 | O traçado passa dos dois lados da reta: um S. | CONFIRMADA | afastamento: de -18.21 a 4.54 km (os dois sinais = os dois lados da corda) | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-008 | p4 | Na busca de 07/11/2026 o WorldAtlas é o 2º resultado (volátil). | CONFIRMADA · herdada | 2. The Longest Beaches In The World - https://worldatlas.com/articles/the-longest-beaches-in-the-world.html | busca 07/11/2026 · midia/praia-do-cassino/fontes/web/busca-web-longest-beach-2026-11-07.txt |
| R2-009 | p4 | O WorldAtlas põe a Praia do Cassino em 1º. | CONFIRMADA · herdada | 1. Praia do Cassino, Brazil - 254 km (158 mi) | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF018 | p4 | Letra do WorldAtlas. | CONFIRMADA · herdada | has been recognised by Guinness World Records since 1994 as the world's longest sea beach | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF019 | p4 | A Tarde, 13/12/2025: reconhecida pelo Guinness Book em 1994. | CONFIRMADA · herdada | Local foi oficialmente reconhecido pelo Guinness Book em 1994 | A Tarde 13/12/2025 · https://atarde.com.br/brasil/voce-sabia-o-recorde-de-maior-praia-do-mundo-e-do-brasil-1372181 |
| VF020 | p4 | Estado de Minas, 04/08/2026: o registro no Guinness. Dois anos seguidos. | CONFIRMADA · herdada | marca que rendeu ao trecho o registro no Guinness Book como a maior praia contínua do planeta | Estado de Minas 04/08/2026 · https://www.em.com.br/emfoco/2026/08/04/registrada-no-guinness-como-a-maior-praia-continua-do-mundo-254-km-de-areia-sem-obstaculo-no-extremo-sul-do-pais-com-um-cargueiro-encalhado-desde-1976/ |
| R3-019 | p5 | Em resposta ao g1, o Guinness informou que não monitora o título. | CONFIRMADA | em resposta ao g1, a instituição informou que não monitora o título | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.1) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R3-020 | p5 | Em 2025 (matéria de 20/07/2025). | CONFIRMADA | Cassino ou Hermenegildo?", g1 RS, 20/07/2025 | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R3-021 | p5 | Quem pergunta é o g1 (o portão lê "g1" como o número 1: esta linha traz o g1 no trecho). | CONFIRMADA | Adendo da Sala: a matéria do g1, lida no navegador do app | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R3-022 | p5 | "the answer was short": o g1 conta só o conteúdo da resposta ("informou que não monitora o título"), e a letra do Guinness não vem (fatos, A.1: "a frase literal do Guinness não vem"). Nenhuma fonte lida diz o tamanho da resposta. | CORRIGIR | em resposta ao g1, a instituição informou que não monitora o título | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.1) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF024 | p5 | O livro 'A cidade do Rio Grande: do big bang a 2015', do jornalista Willy César. | CONFIRMADA · herdada | do jornalista Willy César, trata o recorde como "lenda" | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.2) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF025 | p5 | Rio Grande é a cidade do porto, na ponta norte. | CONFIRMADA · herdada | extends from the breakwaters at the Rio Grande seaport south to the mouth of the Chuí Stream | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF032 | p5 | Quem conta é o g1 (matéria de 20/07/2025, lida pela Sala). | CONFIRMADA · herdada | Adendo da Sala: a matéria do g1, lida no navegador do app | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF026 | p5 | Nas edições brasileiras de 1993, 1994 e 1995. | CONFIRMADA · herdada | estava no livro dos recordes em 1993, 1994 e 1995, só nas edições que circularam no Brasil | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.2) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF027 | p5 | 'praia mais extensa do Brasil'. | CONFIRMADA · herdada | o trecho sobre a "praia mais extensa do Brasil" | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.2) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-013 | p5 | O trecho do livro dos recordes foi retirado depois da contestação de Santa Vitória do Palmar (o VF028 do r1, decidido pela Sala, que leu o g1 no navegador do app em 07/11/2026). | CONFIRMADA · herdada | Esse trecho foi retirado mais tarde após contestação do município de Santa Vitória do Palmar | g1 RS, 20/07/2025, lido pela Sala no navegador do app em 07/11/2026 (lista-r1, VF028) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-014 | p5 | A cidade que contestou é Santa Vitória do Palmar, ao sul. | CONFIRMADA · herdada | e saiu depois de uma contestação de Santa Vitória do Palmar | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.2) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R3-023 | p5 | Santa Vitória do Palmar tem a maior parte da praia dentro do seu limite: 155,95 dos 218 km da linha do IBGE (71,5 %). | CONFIRMADA | 155,95 km (96,9 mi) em Santa Vitória do Palmar, até a Barra do Chuí | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.3); S1 · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF030 | p5 | Três edições, só as brasileiras. | CONFIRMADA · herdada | estava no livro dos recordes em 1993, 1994 e 1995, só nas edições que circularam no Brasil | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.2) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF031 | p5 | Contagem e década. | CONFIRMADA · herdada | C17 counts: three editions = 3 (1993, 1994 and 1995: the mid-1990s, the 1990s) | C17 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R3-024 | p6 | Página 1, o turismo do Estado: 254 km e '(Guinness Book)'. | CONFIRMADA | a praia oceânica com 254 km de areia branca e fina que forma a maior praia contínua da América do Sul, também conhecida como a maior praia do mundo (Guinness Book) | TUR-RS · https://www.turismo.rs.gov.br/turismo/atrativo/visualizar/4597 |
| R3-025 | p6 | Página 2, a Cultura do RS (29/01/2016): 'segundo dados do Guiness Book', 'com mais de 254 quilômetros'. | CONFIRMADA | "segundo dados do Guiness Book", "com mais de 254 quilômetros" | pauta, leituras da Sala S3 · pautas/2026-11-07-video-6-cassino.md |
| R3-026 | p6 | 254 km = 157,8 mi. | CONFIRMADA | C01 state tourism 254 km = 157.8 mi, which rounds to 158 mi | C01 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R3-027 | p6 | Duas páginas. | CONFIRMADA | C16 counts: two pages of the state government = 2 | C16 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF039 | p6 | WorldAtlas: 254 km (158 mi). | CONFIRMADA · herdada | 1. Praia do Cassino, Brazil - 254 km (158 mi) | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF040 | p6 | 'the highest credibly published value for each beach'. | CONFIRMADA · herdada | The figures in the table below use the highest credibly published value for each beach. | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| R2-020 | p6 | O ouvinte conclui que a lista ordena números publicados, não medidas próprias: segue do método declarado ("the highest credibly published value"). | CONFIRMADA (L) · herdada | The figures in the table below use the highest credibly published value for each beach. | WorldAtlas 30/05/2026 · midia/praia-do-cassino/fontes/web/worldatlas-longest-beaches-lida-2026-11-07.txt |
| R2-021 | p6 | A busca no domínio do Guinness só devolveu recordes de atividade na praia; o único recorde DE UMA PRAIA achado é o da Virginia Beach (o VF042 do r1, trocado com o limite certo: "a record for a beach itself", "that we could find"). | CONFIRMADA · herdada | só devolveu recordes de atividade na praia (rally de beach tennis, toalha de praia etc.) | fatos 1.5 · pautas/2026-11-07-video-6-cassino-fatos.md |
| R2-022 | p6 | O recorde da Virginia Beach é o "Largest pleasure beach". | CONFIRMADA · herdada | Largest pleasure beach / Guinness World Records | Guinness 69237 · https://www.guinnessworldrecords.com/world-records/69237-largest-pleasure-beach |
| VF043 | p6 | Guinness: Virginia Beach, Virginia, USA. | CONFIRMADA · herdada | Virginia Beach, Virginia, USA has 45 km (28 miles) of beach front on the Atlantic | Guinness 69237 · https://www.guinnessworldrecords.com/world-records/69237-largest-pleasure-beach |
| VF044 | p6 | O nome do recorde. | CONFIRMADA · herdada | Largest pleasure beach / Guinness World Records | Guinness 69237 · https://www.guinnessworldrecords.com/world-records/69237-largest-pleasure-beach |
| VF045 | p7 | O arco, voltado ao Pacífico, diz 'World's Longest Beach.' (letra). | CONFIRMADA · herdada | Long Beach's large arch gateway leading to the Pacific Ocean is labeled "World's Longest Beach." | Roadside America 2974 · https://www.roadsideamerica.com/story/2974 |
| VF046 | p7 | Long Beach, Washington. | CONFIRMADA · herdada | World's Longest Drivable Beach, Long Beach, Washington | Roadside America 2974 · https://www.roadsideamerica.com/story/2974 |
| VF047 | p7 | 28 milhas. | CONFIRMADA · herdada | The Long Beach beach, a state park, is 28 miles in length. | Roadside America 2974 · https://www.roadsideamerica.com/story/2974 |
| VF048 | p7 | 218,00 / 45,06 km = 4,84 (IBGE); 4,88 (OSM). | CONFIRMADA · herdada | C08 Long Beach 28 mi = 45.06 km; IBGE line 218.00 km / 45.06 km = 4.84 times; OSM 4.88 times (almost 5) | C08 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-023 | p7 | A cidade usa oficialmente "World's Longest Continuous Peninsula Beach". | CONFIRMADA · herdada | Long Beach hedges officially by saying they are the "World's Longest Continuous Peninsula Beach." | Roadside America 2974 · https://www.roadsideamerica.com/story/2974 |
| R2-024 | p7 | "There are no plans to correct the entrance sign" é a voz do Roadside America, e a frase agora o diz (o VF050 do r1, trocado). | CONFIRMADA · herdada | There are no plans to correct the entrance sign. | Roadside America 2974 · https://www.roadsideamerica.com/story/2974 |
| R2-025 | p7 | O NPS diz isso da Padre Island National Seashore (o VF051 do r1, trocado: 'Padre Island's national seashore'). O 'in the world' da letra caiu: diz menos que a fonte. | CONFIRMADA · herdada | Padre Island National Seashore is the longest stretch of undeveloped barrier island in the world. | NPS pais/learn/nature · https://www.nps.gov/pais/learn/nature/index.htm |
| R2-026 | p7 | O governo de Bangladesh (PPP Authority) vende Cox's Bazar pela praia 'unbroken' e 'world's longest natural sandy sea beach'. | CONFIRMADA · herdada | The town is known for its 125 km long unbroken shore, which is believed to be world's longest natural sandy sea beach. | PPPA Bangladesh · https://pppo.gov.bd/projects-tourism-entertainment-village.php |
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
| R2-027 | p9 | A areia troca de nome no limite dos municípios (a oração do VF065 do r1 saiu). | CONFIRMADA · herdada | a praia é uma só e troca de nome nos limites dos municípios | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF066 | p9 | 'a praia é uma só'. | CONFIRMADA · herdada | a praia é uma só e troca de nome nos limites dos municípios | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF067 | p9 | Idem. | CONFIRMADA · herdada | a praia é uma só e troca de nome nos limites dos municípios | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF068 | p9 | Rio Grande: 62,05 km pelo traçado do IBGE. | CONFIRMADA · herdada | pelo traçado do IBGE: 62.05 km; em linha reta: 60.19 km | S1 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF069 | p9 | 62,05 km = 38,6 mi. | CONFIRMADA · herdada | C03 Rio Grande 62.05 km = 38.6 mi (about 39 mi) | C03 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF070 | p9 | O nome Cassino é o do trecho em Rio Grande. | CONFIRMADA · herdada | Cassino em Rio Grande; Hermenegildo e Barra do Chuí em Santa Vitória do Palmar | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF071 | p9 | A Fepam, no g1: não há critério técnico; vale o limite municipal. | CONFIRMADA · herdada | não há critério técnico ou ambiental formal sobre a divisão; vale o limite municipal | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF076 | p9 | O enquadramento é do g1 (com a Fepam dentro da matéria). | CONFIRMADA · herdada | Adendo da Sala: a matéria do g1, lida no navegador do app | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-028 | p9 | Do limite à foz do Chuí: Santa Vitória (155,95 km). | CONFIRMADA · herdada | 155,95 km (96,9 mi) em Santa Vitória do Palmar, até a Barra do Chuí | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.3); S1 · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-029 | p9 | Foi Santa Vitória que contestou. | CONFIRMADA · herdada | e saiu depois de uma contestação de Santa Vitória do Palmar | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.2) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-030 | p9 | 155,95 / 218,00 km = 71,5 %: mais de dois terços (66,7 %). | CONFIRMADA · herdada | C29 Santa Vitória do Palmar 155.95 of 218.00 km = 71.5 % of the IBGE line (more than two-thirds = 2/3 = 66.7 %; less than three-quarters) | C29 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-031 | p9 | O secretário de Turismo de Santa Vitória, no g1: "porque ela pega a extensão até a Barra do Chuí, que é de Santa Vitória do Palmar" (o "all the way down to the border" e o "that sand is theirs" parafraseiam, sem aspas). | CONFIRMADA · herdada | porque ela pega a extensão até a Barra do Chuí, que é de Santa Vitória do Palmar | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-032 | p9 | A Barra do Chuí fica na fronteira com o Uruguai. | CONFIRMADA · herdada | near the twin coastal villages of Barra do Chuí (Brazil) and Barra del Chuy (Uruguay) | en.wikipedia (API) · https://en.wikipedia.org/wiki/Chu%C3%AD_Stream |
| VF075 | p9 | Letra de Rio Grande, no g1. | CONFIRMADA · herdada | a maior praia em extensão do mundo começa no Cassino e termina na Barra do Chuí | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-033 | p9 | O ouvinte conclui que as duas falas descrevem a mesma faixa: a praia é uma só e troca de nome nos limites dos municípios (g1). | CONFIRMADA (L) · herdada | a praia é uma só e troca de nome nos limites dos municípios | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-034 | p9 | O ouvinte conclui que a disputa é pelo nome: Santa Vitória diz que a extensão é dela; Rio Grande diz que a maior praia começa no Cassino e termina na Barra do Chuí; o g1 titula a disputa por título de maior do Brasil: Cassino ou Hermenegildo. | CONFIRMADA (L) · herdada | a maior praia em extensão do mundo começa no Cassino e termina na Barra do Chuí | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.5) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-035 | p10 | As medidas com método (as réguas de 50 km e 30 mi, o IBGE, a régua de 10 m, o OSM, a trilha) ficam entre 134,1 e 138,6 mi: 4,5 mi. Os números soltos da imprensa (212, 220 km; fatos 2.2) também caem perto; o 254 não. | CONFIRMADA · herdada | trail 223 km = 138.6 mi: all within 4.5 mi of each other | C30 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-036 | p10 | Os dois municípios. | CONFIRMADA · herdada | the two municipalities = 2 (Rio Grande, Santa Vitória do Palmar) | C15 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-037 | p10 | O g1 dá a linha (218 km) ao IBGE. | CONFIRMADA · herdada | o IBGE (publicação de 2024), 218 km para as duas cidades juntas | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.3) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-038 | p10 | Rede Brasileira de Trilhas: 223 km, de molhe a molhe. | CONFIRMADA · herdada | "Distância: 223 km", dos Molhes do Cassino aos Molhes da Barra do Chuí | pauta, leituras da Sala S4 · pautas/2026-11-07-video-6-cassino.md |
| R2-039 | p10 | 223 km fica 3,27 km acima da maior linha medida (e 5 km acima do IBGE): a touch longer. | CONFIRMADA · herdada | it is 3.27 km above the OSM line (219.73 km), the longest coastline we measured | C02 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-040 | p10 | As réguas de 10 m a 50 km no OSM: 215,75 a 219,41 km (134,1 a 136,3 mi), dentro da faixa. | CONFIRMADA · herdada | régua de   1000 m:  218.00 km ( 135.5 mi; 217 passos) | L11 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-041 | p10 | Só o 254 km (157,8 mi) do turismo do Estado fica de fora: 19,2 mi acima da trilha. | CONFIRMADA · herdada | the state's 254 km = 157.8 mi sits 19.2 mi above the longest careful measurement | C31 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-042 | p10 | 254 km no turismo do Estado. | CONFIRMADA · herdada | a praia oceânica com 254 km de areia branca e fina | TUR-RS · https://www.turismo.rs.gov.br/turismo/atrativo/visualizar/4597 |
| R2-043 | p10 | = 158 mi. | CONFIRMADA · herdada | C01 state tourism 254 km = 157.8 mi, which rounds to 158 mi | C01 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF102 | p11 | O g1 explica a diferença pelo paradoxo. | CONFIRMADA · herdada | O próprio g1 explica a diferença pelo paradoxo da linha costeira | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.4) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF103 | p11 | g1. | CONFIRMADA · herdada | O próprio g1 explica a diferença pelo paradoxo da linha costeira | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.4) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF104 | p11 | A en.wikipedia. | CONFIRMADA · herdada | Due to the Coastline paradox, measuring the longest beach exactly is incredibly complicated | en.wikipedia (API) · https://en.wikipedia.org/wiki/List_of_longest_beaches |
| VF105 | p11 | O WorldAtlas. | CONFIRMADA · herdada | The Coastline Paradox: Why "Longest" Is Tricky | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| R2-044 | p11 | A definição (WorldAtlas). | CONFIRMADA · herdada | because finer-grained measurements pick up bays, inlets, and curves that coarser measurements smooth over | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| R2-045 | p11 | Princípio geral. | CONFIRMADA · herdada | The smaller the ruler, the longer the coast. | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF107 | p11 | Princípio geral. | CONFIRMADA · herdada | The smaller the ruler, the longer the coast. | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF108 | p11 | As duas réguas. | CONFIRMADA · herdada | C18 counts: the two rulers of the paradox = 2 | C18 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-046 | p11 | A régua de 30 mi (48,28 km), medida hoje no OSM (o VF110 do r1, trocado: o 134 saiu da voz e a régua tem o tamanho certo). | CONFIRMADA · herdada | C25 ruler 30 mi = 48.28 km | C25 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-047 | p11 | O método do compasso: de cada ponto, o próximo é o primeiro ponto do traçado à distância da régua, em linha reta; a régua anda a partir da marca. | CONFIRMADA · herdada | de cada ponto, o próximo é o primeiro ponto do traçado a regua_km em linha reta | costa_ibge.py (compasso) · pautas/praia-do-cassino/_trabalho/scripts/costa_ibge.py |
| R2-048 | p11 | A régua longa pula o que a costa faz entre as marcas. | CONFIRMADA · herdada | because finer-grained measurements pick up bays, inlets, and curves that coarser measurements smooth over | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| R2-049 | p11 | Régua de 30 mi: 4 passos inteiros e o resto até o Chuí (5 apoios): a handful. | CONFIRMADA · herdada | régua de  48280 m:  216.00 km ( 134.2 mi; 4 passos) | C25 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-050 | p11 | Régua de 10 m (33 pés, o tamanho de um barco): 21.940 passos (thousands); o OSM tem um nó a cada ~9 m. | CONFIRMADA · herdada | régua de     10 m:  219.41 km ( 136.3 mi; 21940 passos) | L11 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-051 | p11 | As duas respostas: 216,00 e 219,41 km, 1,58 % (com a de 50 km, 1,70 %): menos de 2 %. | CONFIRMADA · herdada | C27 the two answers = 2: 30 mi ruler 216.00 km and 10 m ruler 219.41 km, 1.58 % apart (less than 2 %) | C27 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| VF113 | p11 | De 20 m a 25 km: 217,14 a 219,10 km, dentro de 215,75 a 219,73. | CONFIRMADA · herdada | régua de   1000 m:  218.00 km ( 135.5 mi; 217 passos) | L11 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-052 | p11 | 158. | CONFIRMADA · herdada | C01 state tourism 254 km = 157.8 mi, which rounds to 158 mi | C01 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF116 | p11 | Richardson e Mandelbrot. | CONFIRMADA · herdada | first articulated by Lewis Fry Richardson in the 1950s and developed mathematically by Benoit Mandelbrot | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF117 | p11 | O traçado do IBGE muda 1 % de 50 m a 50 km. | CONFIRMADA · herdada | régua de  0.05 km:  218.05 km (4360 passos) | S2 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-053 | p12 | Reta 131,7 mi; a maior resposta de régua, 136,3 mi (10 m). | CONFIRMADA · herdada | C28 straight line 131.7 mi; longest ruler answer 136.3 mi (10 m ruler) | C28 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-054 | p12 | 136,3 - 131,7 = 4,6 mi; a linha inteira do OSM, 4,8 mi: menos de 5. | CONFIRMADA · herdada | 136.3 - 131.7 = 4.6 mi (less than 5 mi) | C28 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| VF120 | p12 | Os dois lados da reta. | CONFIRMADA · herdada | afastamento: de -18.21 a 4.54 km (os dois sinais = os dois lados da corda) | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-055 | p12 | O arco soma 4,15 km (2,6 mi, 2,0 %) à corda; o traçado, 6,03 km. | CONFIRMADA · herdada | more than the chord; the IBGE line is 6.03 km more | C20 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF122 | p12 | Janelas de 10 km: mediana 0,07 %. | CONFIRMADA · herdada | janelas de ~10 km: 21; traçado/corda de 1.0001 a 1.0230 (mediana 1.0007) | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF123 | p12 | 158 - 136,5 = 21,3 mi. | CONFIRMADA · herdada | C07 the 158 mi minus the OSM line 136.5 mi = 21.3 mi: the 20-odd extra miles | C07 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF124 | p12 | As páginas do Estado não dizem quem mediu. | CONFIRMADA · herdada | Nenhuma das duas diz quem mediu nem como. | pauta, leituras da Sala (item 3) · pautas/2026-11-07-video-6-cassino.md |
| VF125 | p13 | 625 km, 'gently undulating'. | CONFIRMADA · herdada | The 625 km long barrier coast of Rio Grande do Sul is gently undulating | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF126 | p13 | 625 km = 388,4 mi; 630 = 391,5. | CONFIRMADA · herdada | C09 RS coast 625 km (Dillenburg) = 388.4 mi; 630 km (Toldo) = 391.5 mi (about 390 mi) | C09 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF127 | p13 | 'uma pequena sinuosidade'. | CONFIRMADA · herdada | com orientação uniforme NE-SW e uma pequena sinuosidade | Toldo et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/89.pdf |
| R2-056 | p13 | uma das mais extensas barreiras costeiras do mundo. | CONFIRMADA · herdada | apresenta uma das mais extensas barreiras costeiras do mundo | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-057 | p13 | UFRGS (Universidade Federal do Rio Grande do Sul). | CONFIRMADA · herdada | Universidade Federal do Rio Grande do Sul, e-mail: ljt@via-rs.net | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF130 | p13 | A definição de barreira. | CONFIRMADA · herdada | uma barreira consiste em um corpo arenoso alongado e estreito que separa os sedimentos lagunares dos sedimentos marinhos | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF131 | p13 | Formada pela transgressão. | CONFIRMADA · herdada | desenvolveu-se como conseqüência da última grande transgressão pós-glacial | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF132 | p14 | Costa dominada pelas ondas. | CONFIRMADA · herdada | A costa do Rio Grande do Sul (RS) é dominada pela ação das ondas | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF133 | p14 | Ondulações dominantes de SE. | CONFIRMADA · herdada | ação dominante de ondulações provenientes de SE | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF134 | p14 | Ondas de 1,5 m. | CONFIRMADA · herdada | com altura significativa média de 1,5 m | Toldo et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/89.pdf |
| VF135 | p14 | Maré < 50 cm = 1,64 pé. | CONFIRMADA · herdada | C13 tide: Clerot under 50 cm = 1.64 ft; Dillenburg mean 0.5 m = 1.64 ft; Toldo mean 0.25 m = 0.82 ft (all under 2 ft) | C13 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF136 | p14 | Dominada por ondas, micromaré. | CONFIRMADA · herdada | francamente dominada por ondas e com amplitude de marés inferior a 50 cm | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| R2-058 | p14 | Ao chegar ao raso, a parte da crista em água mais rasa anda mais devagar; os raios convergem sobre os rasos (o ponto que avança mar adentro). | CONFIRMADA · herdada | converge on local shallows and shoals | en.wikipedia, Wind wave (API) · https://en.wikipedia.org/wiki/Wind_wave |
| R2-059 | p14 | A crista desacelera no raso e se curva (refração). | CONFIRMADA · herdada | with those parts of the wave in deeper water moving faster than those in shallow water | en.wikipedia, Wind wave (API) · https://en.wikipedia.org/wiki/Wind_wave |
| R2-060 | p14 | Refração sobre as projeções. | CONFIRMADA · herdada | refração de ondas as projeções costeiras tendem a concentrar a energia das ondas | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-061 | p14 | Concentram a energia e se desgastam. | CONFIRMADA · herdada | as reentrâncias tendem à dispersão dessa energia, resultando na erosão das | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF139 | p14 | O material vai às reentrâncias. | CONFIRMADA · herdada | na deposição do material erodido nas reentrâncias adjacentes | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-062 | p14 | O material erodido das projeções vai às reentrâncias adjacentes. | CONFIRMADA · herdada | na deposição do material erodido nas reentrâncias adjacentes | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF142 | p14 | A refração da crista ao chegar ao raso (o mesmo mecanismo, em pequena escala). | CONFIRMADA · herdada | As the waves slow down in shoaling water, the crests tend to realign at a decreasing angle to the depth contours. | en.wikipedia, Wind wave (API) · https://en.wikipedia.org/wiki/Wind_wave |
| VF140 | p14 | Ao sentir o fundo, a crista se realinha às curvas de nível, num ângulo cada vez menor. | CONFIRMADA · herdada | As the waves slow down in shoaling water, the crests tend to realign at a decreasing angle to the depth contours. | en.wikipedia, Wind wave (API) · https://en.wikipedia.org/wiki/Wind_wave |
| VF141 | p14 | O modelo suprime saliências. | CONFIRMADA · herdada | a ação das ondas pode suprimir as reentrâncias e saliências (projeções) da linha de costa | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF143 | p14 | A energia de onda é o principal fator da evolução da costa do RS (o título do artigo). | CONFIRMADA · herdada | O PRINCIPAL FATOR CONTROLADOR DA EVOLUÇÃO | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
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
| R2-063 | p15 | O ouvinte conclui que a praia é uma só porque a barreira não se abre entre as duas paredes (as duas descontinuidades são Rio Grande e Tramandaí). | CONFIRMADA (L) · herdada | a barreira holocênica apresenta apenas duas descontinuidades | Dillenburg et al. 2003 · midia/praia-do-cassino/fontes/texto/aprh-142-dillenburg-2003.txt |
| R2-064 | p16 | A areia da Barreira IV é policíclica (Clerot et al. 2003): retrabalhada em mais de um ciclo; o VF158/VF161 do r1, trocado. | CONFIRMADA · herdada | areias policíclicas quartzosas | Clerot et al. 2003; fatos 3.10 · midia/praia-do-cassino/fontes/web/aprh-143-clerot-2003-lida-2026-11-07.txt |
| R2-065 | p16 | A barreira é feita de areias de praia e de vento. | CONFIRMADA · herdada | essencialmente por areias praiais e eólicas | Clerot et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| R2-066 | p16 | larga (100 a 200 km), rasa. | CONFIRMADA · herdada | A plataforma continental adjacente é larga (100 a 200 km), rasa (100 a 140 m) | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-067 | p16 | 200 km = 124,3 mi. | CONFIRMADA · herdada | C11 shelf up to 200 km = 124.3 mi (up to about 120 mi) | C11 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-068 | p16 | A parte que a plataforma tem: a declividade dela comanda a forma da costa (o parágrafo seguinte). | CONFIRMADA · herdada | a costa é côncava onde a declividade da plataforma é menor e convexa onde a declividade é maior | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF162 | p16 | ~2 m em 5 ka. | CONFIRMADA · herdada | aproximadamente 2 m acima do nível atual no máximo da Última Grande Transgressão (5 ka) | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF163 | p16 | ~3 m em ~5 ka. | CONFIRMADA · herdada | do mar alcançou aproximadamente 3 m acima do nível | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF164 | p16 | 5.000 anos; 6,6 a 9,8 pés. | CONFIRMADA · herdada | C14 sea level peak 5 ka = 5,000 years ago; 2 m (Dillenburg) = 6.6 ft, 3 m (Clerot) = 9.8 ft (several feet) | C14 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF165 | p16 | A regressão em pulsos. | CONFIRMADA · herdada | a regressão se deu por pequenos pulsos | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF166 | p16 | Cordões regressivos. | CONFIRMADA · herdada | desenvolvida sob a forma de cordões litorâneos regressivos | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF167 | p16 | 8 a 14 km. | CONFIRMADA · herdada | has widths in the Cassino region varying from 8 to 14 km | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF168 | p16 | 14 km = 8,7 mi. | CONFIRMADA · herdada | C12 Cassino barrier IV up to 14 km = 8.7 mi (up to 9 mi) | C12 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF169 | p16 | Quatro sistemas; o IV é o mais jovem. | CONFIRMADA · herdada | In Rio Grande do Sul state we can identify four systems of barrier-lagoons. Barrier IV is the  youngest system | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF170 | p16 | O IV é o mais externo. | CONFIRMADA · herdada | a idade decresce no sentido do sistema mais externo (sistema laguna-barreira IV) | Clerot et al. 2003 · https://aprh.pt/ZonasCosteiras2003/pdf/143.pdf |
| VF178 | p17 | A forma da costa foi gerada no máximo transgressivo de 5 ka. | CONFIRMADA · herdada | Esta configuração da linha de costa foi gerada no máximo transgressivo de 5 ka | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-069 | p17 | Gerada no máximo transgressivo de 5 ka. | CONFIRMADA · herdada | Esta configuração da linha de costa foi gerada no máximo transgressivo de 5 ka | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-070 | p17 | Segue a declividade da plataforma. | CONFIRMADA · herdada | a costa é côncava onde a declividade da plataforma é menor e convexa onde a declividade é maior | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-071 | p17 | Côncava onde a declividade é menor. | CONFIRMADA · herdada | a costa é côncava onde a declividade da plataforma é menor e convexa onde a declividade é maior | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-072 | p17 | Convexa onde a declividade é maior. | CONFIRMADA · herdada | a costa é côncava onde a declividade da plataforma é menor e convexa onde a declividade é maior | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-073 | p17 | O arco para o mar no meio do trecho é o setor convexo de Dillenburg (Verga ao Chuí), o afastamento de 18,21 km da corda. | CONFIRMADA · herdada | De Verga ao Chuí a costa é ligeiramente convexa | Dillenburg et al. 2003 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF173 | p17 | Retrogradante no sul. | CONFIRMADA · herdada | indicando uma natureza retrogradante da barreira | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF174 | p17 | Lama e turfa no pós-praia. | CONFIRMADA · herdada | depósitos de lama lagunar e turfa afloram na zona de pós-praia | Dillenburg et al. 2003, p. 2 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| VF175 | p17 | Janelas de 10 km. | CONFIRMADA · herdada | janelas de ~10 km: 21; traçado/corda de 1.0001 a 1.0230 (mediana 1.0007) | L12 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF176 | p17 | OSM até 219,73 km. | CONFIRMADA · herdada | comprimento pelo traçado do OSM: 219.73 km (136.5 mi) | L11 refeito · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| VF177 | p17 | O modelo. | CONFIRMADA · herdada | a ação das ondas pode suprimir as reentrâncias e saliências (projeções) da linha de costa | Dillenburg et al. 2003, p. 3 · https://www.aprh.pt/ZonasCosteiras2003/pdf/142.pdf |
| R2-074 | p18 | Decreto nº 12.868, de 6 de março de 2026. | CONFIRMADA · herdada | DECRETO Nº 12.868, DE 6 DE MARÇO DE 2026 | Decreto 12.868 (Câmara, publicação original) · https://www2.camara.leg.br/legin/fed/decret/2026/decreto-12868-6-marco-2026-798788-publicacaooriginal-178381-pe.html |
| R2-075 | p18 | Cria o Parque Nacional e a APA do Albardão. | CONFIRMADA · herdada | Art. 1º Ficam criados, no Estado do Rio Grande do Sul, o Parque Nacional do Albardão | Decreto 12.868, Art. 1º · https://www2.camara.leg.br/legin/fed/decret/2026/decreto-12868-6-marco-2026-798788-publicacaooriginal-178381-pe.html |
| R2-076 | p18 | A APA começa na costa a lat -32,976, ao sul do limite municipal (-32,629): no trecho de Santa Vitória. | CONFIRMADA · herdada | APA p1 (limite da ZA do Taim): lon -52.55784, lat -32.97622; a 0.16 km do traçado do IBGE (vértice 201); ao sul do limite municipal (lat -32.6288) | decreto, Art. 6º (medido) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-077 | p18 | A APA vai à foz do Arroio Chuí, em Santa Vitória. | CONFIRMADA · herdada | APA p60 (foz do Arroio Chuí): lon -53.36937, lat -33.74436; a 0.09 km do traçado do IBGE (vértice 502); ao sul do limite municipal (lat -32.6288) | decreto, Art. 6º (medido) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R2-078 | p18 | O parque chega à areia no trecho do Albardão, em Santa Vitória. | CONFIRMADA · herdada | park point 20: lon -53.07310, lat -33.51865; 0.21 km from the IBGE line, on the land side | decreto, Art. 3º (medido) · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas.txt |
| R3-028 | p18 | Art. 7º, I (APA). | CONFIRMADA | incluídas as dunas, a praia, e a plataforma continental | Decreto 12.868, Art. 7º · https://www2.camara.leg.br/legin/fed/decret/2026/decreto-12868-6-marco-2026-798788-publicacaooriginal-178381-pe.html |
| R3-029 | p18 | Art. 4º, II (Parque). | CONFIRMADA | preservar os sítios paleontológicos associados ao ambiente de praia | Decreto 12.868, Art. 4º · https://www2.camara.leg.br/legin/fed/decret/2026/decreto-12868-6-marco-2026-798788-publicacaooriginal-178381-pe.html |
| VF083 | p18 | PDL 112/2026, do senador Luis Carlos Heinze (PP/RS). | CONFIRMADA · herdada | Autor: Senador Luis Carlos Heinze (PP/RS) | Senado, PDL 112/2026 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| VF084 | p18 | 'Susta os efeitos do Decreto nº 12.868'. | CONFIRMADA · herdada | Susta os efeitos do Decreto nº 12.868, de 6 de março de 2026 | Senado, PDL 112/2026 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| VF085 | p18 | Justificativa do PDL. | CONFIRMADA · herdada | Não se ignora a relevância ambiental do Albardão | PDL 112/2026, texto inicial, p. 3 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-079 | p18 | A forma, a categoria para a maior parte da área, a magnitude da restrição. | CONFIRMADA · herdada | A forma como o decreto foi editado, a categoria de unidade de conservação escolhida para a maior parte da área e a magnitude territorial da restrição imposta | PDL 112/2026, p. 3 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-080 | p18 | A categoria mais restritiva. | CONFIRMADA · herdada | concentrou a área principal na categoria mais restritiva | PDL 112/2026, p. 4 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-081 | p18 | A consulta pública. | CONFIRMADA · herdada | consulta pública deixou de cumprir integralmente sua finalidade legal | PDL 112/2026, p. 5 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-082 | p18 | A pesca. | CONFIRMADA · herdada | impacto direto sobre a pesca e sobre as comunidades locais | PDL 112/2026, p. 3 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-083 | p18 | A eólica no mar. | CONFIRMADA · herdada | presença de projetos de geração eólica offshore em avaliação | PDL 112/2026, p. 6 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-084 | p18 | O petróleo e gás (a Bacia de Pelotas saiu da voz). | CONFIRMADA · herdada | considerada nova fronteira exploratória de petróleo e gás no país | PDL 112/2026, p. 6 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| VF092 | p18 | Lido em 07/11/2026: na CMA desde 12/05/2026, aguardando relator (dados de 29/10/2026). Volátil. | CONFIRMADA · herdada | Último local: 12/05/2026 - Comissão de Meio Ambiente Último estado: 12/05/2026 - AGUARDANDO DESIGNAÇÃO DO RELATOR | Senado, PDL 112/2026 · https://www25.senado.leg.br/web/atividade/materias/-/materia/173030 |
| R2-085 | p19 | Duas coisas (o Altair; o sítio dos foguetes de 1966). | CONFIRMADA · herdada | C32 counts: two more things on the sand = 2 | C32 · roteiros/praia-do-cassino/qc-roteiro/fatos-medidas-r2.txt |
| R2-086 | p19 | Um navio: o cargueiro Altair. | CONFIRMADA · herdada | the wreck of the Greek freighter SS Altair (grounded in 1976) | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF185 | p19 | Desde junho de 1976 (g1). | CONFIRMADA · herdada | encalhado desde junho de 1976 | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.7) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF186 | p19 | Um cargueiro. | CONFIRMADA · herdada | the wreck of the Greek freighter SS Altair (grounded in 1976) | WorldAtlas 30/05/2026 · https://www.worldatlas.com/places/the-longest-beaches-in-the-world.html |
| VF187 | p19 | Jogado à costa de propósito. | CONFIRMADA · herdada | foi jogado à costa de propósito, numa tempestade, para não afundar de vez | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.7) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF188 | p19 | Idem. | CONFIRMADA · herdada | foi jogado à costa de propósito, numa tempestade, para não afundar de vez | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.7) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| VF190 | p19 | Quem conta é o g1. | CONFIRMADA · herdada | Adendo da Sala: a matéria do g1, lida no navegador do app | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-087 | p19 | A FURG, no g1 (2025): pode desaparecer nos próximos anos. A FURG é a universidade federal da cidade de Rio Grande. | CONFIRMADA · herdada | a FURG diz que ele pode desaparecer nos próximos anos | g1 RS, 20/07/2025, pela leitura da Sala no navegador do app (fatos, Adendo A.7) · https://g1.globo.com/rs/rio-grande-do-sul/noticia/2025/07/20/praia-que-pode-ser-vista-do-espaco-expoe-disputa-por-titulo-de-maior-do-brasil-cassino-ou-hermenegildo.ghtml |
| R2-088 | p20 | O eclipse e a data do release 66-285. | CONFIRMADA · herdada | RELEASE NO: 66-285  (November 12, 1966) | NASA Release 66-285 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-089 | p20 | the southern tip of Brazil. | CONFIRMADA · herdada | Argentina, the southern t i p of Brazil and extending into the | NASA Release 66-285, p. 2 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-090 | p20 | Totalidade às ~11:10 locais: de manhã. | CONFIRMADA · herdada | centered around the time of t o t a l i t y at about 11:lO a.m. | NASA Release 66-285, p. 5 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-091 | p20 | O release é de 6/11/1966, antes do eclipse. | CONFIRMADA · herdada | SUNDAY  N E W S  November 6, 1966 | NASA Release 66-285, p. 1 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-092 | p20 | O plano: uma praia perto de Rio Grande. | CONFIRMADA · herdada | be fired over the Atlantic from a beach site near Rio Qrande | NASA Release 66-285, p. 4 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-093 | p20 | 21 de Cassino. | CONFIRMADA · herdada | and 21 from Cassino, near Rio Grande | NASA Release 66-285, p. 2 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-094 | p20 | ~15 mi ao sul de Rio Grande, perto do Cassino. | CONFIRMADA · herdada | 15 miles south of Rio Grande, near CaS81n0 | NASA Release 66-285, p. 6 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-095 | p20 | Sobre o Atlântico, de uma praia (fly out over the ocean). | CONFIRMADA · herdada | be fired over the Atlantic from a beach site near Rio Qrande | NASA Release 66-285, p. 4 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-096 | p20 | Alta atmosfera e ionosfera. | CONFIRMADA · herdada | probe the Earth's upper atmosphere and  ionosphere | NASA Release 66-285, p. 4 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-097 | p20 | Antes, durante e depois. | CONFIRMADA · herdada | and ionosphere before, during, and after the eclipse | NASA Release 66-285, p. 5 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-098 | p20 | It is very near the path of totality (o and only one do VF205 saiu). | CONFIRMADA · herdada | It is very near the path of totality. | NASA Release 66-285, p. 6 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-099 | p20 | Gemini 12, scheduled. | CONFIRMADA · herdada | and Brazil, by the Gemini 12 astronauts and by 26scientists | NASA Release 66-285, p. 1 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
| R2-100 | p20 | Em órbita sobre a área. | CONFIRMADA · herdada | be orbiting over the  eclipse area. | NASA Release 66-285, p. 2 · https://ntrs.nasa.gov/api/citations/19660030659/downloads/19660030659.pdf |
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
