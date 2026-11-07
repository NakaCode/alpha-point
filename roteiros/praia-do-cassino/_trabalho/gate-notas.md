# O portão do roteiro do vídeo 6 (`praia-do-cassino`): as notas da derivação

Derivado em 07/11/2026, pelo pedido da Sala de controle, do portão do vídeo 5 (`roteiros/big-sur/_ferramentas/gate.mjs`), contra a pauta
aprovada (`pautas/2026-11-07-video-6-cassino.md`) e o teste dos leitores (`out/_pautas/video-6-2026-11-07/teste-leitores.md`).

- O portão: `roteiros/praia-do-cassino/_ferramentas/gate.mjs` (`node roteiros/praia-do-cassino/_ferramentas/gate.mjs [arquivo] [--derivados]
  [--onde]`, cwd na raiz do canal; sem arquivo, mede `roteiros/praia-do-cassino/roteiro-narrador.md`, que ainda não existe: exit 2).
- A prova: `roteiros/praia-do-cassino/_ferramentas/gate-provar.mjs`, com os casos em `out/_tmp/gate-praia-do-cassino/casos/` e a saída em
  `out/_tmp/gate-praia-do-cassino/prova-saida.md` (fora do git, como as provas dos portões de antes).
- O topo do `gate.mjs` diz o mesmo que estas notas, com o como de cada regra junto dela no código.
- O `ferramentas/portao-fatos.mjs` e o `ferramentas/aplicar-lista.mjs` acham o portão em `roteiros/<proj>/_ferramentas/gate.mjs` e o
  rodam com o caminho do roteiro: a leitura do texto falado (`paragrafosDe`) e a forma do sha ficam as do molde. A prova roda o
  `portao-fatos` numa raiz de teste e confere que o sha cruza (`gate.igual = true`).

## O que saiu (as regras só de Big Sur)

- O título dele nas 3 primeiras frases ("Wyoming" e a marca da Califórnia, que reprovavam; "empty", em alerta).
- A 1ª frase com "Big Sur" (reprovava).
- O `NAO_SE_DIZ` dele inteiro (14 ids: o zero, o "nobody lives", a cidade de Big Sur, as milhas com o 1.500, as duas maiores, o
  superlativo sem dono, a única estrada, a estrada fechada, as mansões, o mais rígido, o clima, o fogo, o terceiro maior e os anos 1880),
  com as constantes que só ele usava (`MIL_E_QUINHENTOS`, `MILHAS_DA_COSTA`, `ANOS_1880`, `NAO_CRESCEU`, `ESTRADA_FECHADA`, `BIG_SUR_TEM`).
- O `ALERTA_BS` dele inteiro (11 ids). A prova confere que o que o portão do vídeo 5 reprovava ou alertava ("The town of Big Sur…", "The road
  is closed…", "The fire destroyed…", "Big Sur has fewer than 1,500 people") passa aqui.
- A nota do "last summer" e a lista dele do que nenhum padrão pega.
- Das palavras de `ALERTA`, nenhuma era só de Big Sur: a lista fica inteira.

## O que entrou

**O título** ("Why the World's Longest Beach Is Almost a Straight Line"; pauta §2 e §8; `embalagem.md` §2), nas 3 primeiras frases (as das
taxas, sem aspas de abertura):
- REPROVA sem "longest beach";
- REPROVA sem "straight";
- ALERTA, decididos aqui (a Sala pode tirá-los):
  - `"longest beach"` sem "world" ("world's longest beach", "longest beach in the world"): o título diz "World's", e "Brazil's longest beach"
    não o paga. Só alerta, porque a fama tem várias formas;
  - `"straight"` sem "almost", "nearly", "barely", "hardly", "not quite" ou "longer": o "Almost" é o que mantém o título honesto (o arco de 11
    mi; Dale, nos leitores a frio: sem ele, "o título vira enganoso"). O "longer" conta porque o gancho A paga com "less than five miles
    longer", sem "almost". Só alerta, porque a nuance pode vir com outra palavra;
  - nenhum número em milhas: a condição dos três leitores é dizer cedo os números (a reta, 132 mi; a praia, menos de 5 mi a mais). Só
    alerta: o mapa está na tela, e o portão não o vê.
- ALERTA no texto inteiro: **o arco** ("11 miles" ou "eleven miles") nunca dito. A pauta diz "A fala diz isso", e é a condição dos leitores.
  O portão só vê se falta, não onde entra.

**A primeira frase** (`voz.md` §1, "Os números da fala"; a imagem de abertura é a areia reta no Cassino, pauta §6):
- REPROVA sem "Cassino";
- ALERTA sem número (o do molde: algarismo, ou por extenso de "two" a "billion"; "one of" não conta). O gancho A abre sem número.

**O "não se diz" do Cassino** (`NAO_SE_DIZ`; pauta §5, o topo, §2, §4, o cético K1 a K10, as leituras S1 a S6 e os leitores a frio). Cada
um REPROVA com o porquê e a fonte na mensagem, e a forma que a pauta dá passa (a prova confere cada uma):

| id | O que reprova | O que passa ao lado (na prova) |
|---|---|---|
| `maior-praia-fato` | "is (officially…) the world's longest beach", "the longest beach in the world" com cópula, e o aposto ", the world's longest beach", sem rótulo na frase (sold, billed, marketed, known, called, says, website, title, record, famous…) e fora de pergunta | "sold as the world's longest beach"; "The world's longest beach starts and ends at walls people built" (§4.3); a pergunta |
| `reta-perfeita` | "perfectly/completely/dead/ruler-/arrow-straight", "straight as an arrow", "straightest", e "the beach/coast/it is straight" sem ressalva; nada com negação nas 40 letras antes | "It isn't ruler-straight" (§4.3); "runs straight to the border" |
| `linha-reta-sem-almost` | "is/was/forms/'s (just…) a straight line" sem "almost", "nearly", "practically", "virtually", "close to", "roughly", "not quite" | "almost a straight line"; "132 miles apart in a straight line"; "It isn't a straight line" |
| `nunca-curva` | "never bends/curves", "no curves/bends", "not a single curve", "without a bend", "doesn't bend", sem "almost/nearly/barely" logo antes | "almost never bends"; "it barely bends" |
| `paradoxo-errado` | "paradox" com "wrong", "fails", "breaks", "false", "doesn't apply/work"; e "it doesn't work" na frase depois do paradoxo | "On this coast, it barely works" (§4.3) |
| `paradoxo-explica` | o paradoxo com verbo de causa ("explains", "accounts for", "comes from", "because of") e os números ou a praia, sem dono (g1, Wikipedia, WorldAtlas, famous, usual, says…) | "g1 says the paradox explains the gap"; o paradoxo em geral |
| `mentira` | "fake", "myth", "hoax", "fraud", "bogus", "debunk", "liar", "lied", "a lie", "made up" (fora "made up of"), "fabricated"; "the number/158/state… is wrong/false"; "exaggerates/inflated" com o Estado, o número ou o recorde | "made up of old beach ridges"; "the lagoons lie behind"; "names stretch the truth too" (O1) |
| `guinness-nega` | "Guinness" com "denies", "rejects", "refutes", "dismisses", "never", "has no record" | "told Brazil's g1 news site it doesn't monitor that title" (§4.1) |
| `guinness-confirma` | "Guinness" com "confirmed", "certified", "verified", "recognized", "awarded", "officially", "holds the record", sem dono na frase | com o dono, só o alerta `guinness-atribuido` |
| `tres-oficiais` | "three official…", "in a way, all three", "all three are right" | "two of the three numbers come from governments" |
| `cidade-139` | 139 ou 223 com "city", "city hall", "mayor", "municipal", sem trilha | "a national trail network puts its route at 139 miles" (§4.3) |
| `so-39` | "only/just/merely/actually 39" (ou 62); e 39 mi ou 62 km antes da assinatura (o gancho), mesmo com o dono (K9) | "the part inside the city of Rio Grande, the part that carries the Cassino name, is about 39 miles", no corpo (§4.3) |
| `numero-sem-dono` | "the beach/it/coast is (about) 135/136/139/158/218/219/220/223/254 miles/km" e "158 miles of sand", "a 158-mile beach", sem dono na frase (says, maps, line, ruler, IBGE, OSM, trail, website, state, we…) | "Brazil's statistics agency maps this shore at about 135 miles" (§4.3) |
| `tres-decadas` | "three decades", "thirty years", "since the 1990s/'90s/nineties", na frase da fama (Guinness, record, papers, press, called, longest…) | "for years" |
| `virginia-28` | "Virginia Beach" com 28 na frase | os 28 mi de Long Beach |
| `briga-vizinha` | "stole/stolen/steal", "feud", "jealous", "envy", "rivalry", "bad blood", "turf war", "grudge" | "contested the claim" |
| `hermenegildo-97` | "Hermenegildo" com 97, 155/156 | o farol do Albardão no meio |
| `parque-area` | hectares, acres ou milhas/km quadrados com parque, decreto, APA ou Albardão | as milhas quadradas da lagoa |
| `parque-maior` | "largest/biggest… park/protected area/reserve" | a forma da pauta §4.4 |
| `parque-juizo` | "threatened", "under attack", "at risk", "finally protected", "saved", "victory"… com parque, decreto, projeto, senador ou Senado | "the decree names the beach, the dunes and fossil sites" |
| `parque-previsao` | "will be overturned/approved…", "is going to…", "is safe", "doomed", com parque, decreto ou projeto | "nobody knows yet what the Senate will decide" |
| `parque-processo` | "suing", "sued", "lawsuit", "in court", com Santa Vitória, prefeito, cidade, parque ou projeto | — |
| `parque-praia-toda` | o parque, a APA ou o decreto "covers/protects/spans the whole/entire beach"; "the entire beach is (now) protected" | os limites do decreto |
| `pdl-sem-data` | o estado do projeto ("still waiting", "pending", "stalled", "in committee", "hasn't moved") com o projeto na frase ou na anterior, sem "as of <mês> 2026" | "As of November 2026, it was still waiting in a Senate committee" (§4.4) |
| `mare-numero` | a maré com um número de altura (polegadas, cm, m, pés), fora de "under/less than/up to" logo antes, e fora do fundo "at low tide" | "a tide of well under two feet" (§4.5) |
| `mar-alto-numero` | "the sea stood/was… N feet/meters higher" e "N meters above today" | "several feet higher" (§4.5); "4,000 feet above sea level" |
| `rios-nada` | "the rivers send/carry/bring (almost) nothing", "nothing reaches the sea" | "the rivers drop their sand in the lagoons" |
| `areia-dos-rios` | "the sand comes from the rivers", "the rivers bring sand to the beach/sea", sem negação | "doesn't come from the rivers"; "carry sand toward the coast, but drop it in the lagoons" |
| `nada-cresce` | "nothing builds/grows/juts out", "nothing builds up" | "old lagoon mud and peat poke out of the beach" (§4.5) |
| `sem-riacho` | "not a single stream/river/creek", "no streams cross…", "unbroken/uninterrupted for N miles" | "in about 390 miles, the barrier opens in only two places" (§4.5) |
| `linhas-na-areia` | "10 to 20 percent"; a linha da preamar, da baixa-mar, da água ou das dunas numa frase de medida | a linha da preamar sem medida |
| `idades` | 10.000 anos ou mais ("400,000-year-old", "a hundred and twenty thousand years", "tens of thousands of years") | o mar de 5 mil anos atrás |
| `conchas` | conchas com distância; motociclistas (ou "riders", "drivers") com medo | "shells pile up along parts of the beach" |
| `foguetes-lancados` | foguete, carga, Nike ou NASA com "launched", "lifted off", "fired", "went up"…, sem plano ("planned", "scheduled", "will", "to be", "doesn't say", "how many"…) | "NASA's release planned 21 rockets…" (§4.6); "how many rockets actually went up, the release doesn't say" |
| `gemini-viu` | "Gemini" com "watched", "saw", "observed", "photographed"…, sem "scheduled", "will", "to watch"… | "were scheduled to watch" (com o alerta `gemini`) |
| `lugar-perfeito` | "perfect/ideal/best… launch site/place", "because the beach was so long/empty", "long, straight, empty… perfect", com foguete, NASA ou eclipse | "the beach sat very near the path of the total eclipse" (§4.6) |
| `altair-tempestade` | o Altair (ou "the ship/it" depois dele) com "wrecked", "ran aground", "sank", ou a tempestade que o "threw/drove/washed", sem "on purpose", g1 ou "according" | "ran the Altair ashore on purpose, g1 reports" |
| `molhes-ano` | quebra-mar, molhe, píer ou muro com um ano e a obra ("built", "finished", "began", "went up"…) | "in the 1910s"; "since 1976, the Altair has sat between the two walls" |
| `rivais` | "Eighty Mile Beach" com comparativo ou distância; Cox's Bazar com distância ou "is the longest" sem rótulo; Padre Island com distância | "Cox's Bazar is widely marketed as…" (§4.2); a Ninety Mile do O1 |
| `visto-do-espaco` | "visible/seen from space/orbit" sem satélite, imagem ou Sentinel | a imagem do Sentinel-3 (O3) |
| `data-relativa` | "this month", "this year", "N years/decades ago" (N até 99, ou "a few", "several"), "a decade ago" | a data absoluta; "about five thousand years ago" |
| `populacao` | população, moradores ou "a town of N" do Cassino, do Rio Grande, de Santa Vitória, do Chuí, do Hermenegildo ou do Albardão, com número | "a beach district of Rio Grande" |
| `fecho-milhas-atras` | "N miles behind you" | "the whole stretch" |
| `brasil-um-so` | "Brazil says/claims/calls/measures/lists/exaggerates", "Brazilians say" | "Brazil's statistics agency says…" |

**Os alertas do Cassino** (`ALERTA_C`; nunca reprovam):

| id | O que alerta |
|---|---|
| `158-sem-turismo` | 158 ou 254 sem "state", "tourism", "website", "Rio Grande do Sul", "government" na frase (o "$158" não conta) |
| `223-sem-trilha` | 139 ou 223 sem trilha na frase (com cidade, é o `cidade-139`) |
| `albardao-sem-dono` | o Albardão, "national park" ou "protected area", com parque, sem decreto, governo, federal, 2026 ou março na frase nem na anterior (o "National Park Service" não conta) |
| `pdl-sem-dono` | projeto, PDL, Senado ou Congresso com "cancel", "overturn", "revoke"…, sem o senador na frase nem na anterior |
| `altair` | o Altair com distância; com "on purpose" sem o g1; com "may disappear" sem a FURG; com outro ano que 1976 |
| `gemini` | toda menção ao Gemini que não reprovou (até o relatório da missão ser lido) |
| `hermenegildo` | toda menção ao Hermenegildo que não reprovou (o meio é o Albardão) |
| `guinness-atribuido` (a mais) | o Guinness confirmando, com dono na frase: confira as palavras da fonte |
| `39-sem-dono` (a mais) | 39 mi ou 62 km sem "Rio Grande" na frase nem na anterior |
| `135-sem-dono` (a mais) | 135, 136, 218, 219 ou 220 com unidade, sem a linha ou quem a mede |
| `foguetes-numero` (a mais) | foguete com número, sem plano nem release |
| `razoes-do-senador` (a mais) | o senador com "says", "argues", "because", "wants"…: as razões nos termos do texto do PDL, uma vez |
| `sem-interrupcao` (a mais) | "uninterrupted", "unbroken", "continuous", "without a break" sem dono nem rótulo |
| `onda-altura` (a mais) | ondas com altura (a altura da onda fica no fundo, pauta §7) |
| `eighty-mile` (a mais) | a Eighty Mile Beach (fora da v2) |
| `fosseis` (a mais) | fósseis sem o decreto na frase nem na anterior, ou com o que são (ossos, preguiças, megafauna, espécies) |

- Os sete primeiros são os do pedido da Sala. Os marcados "a mais" saem da mesma pauta (§4, §5, §7 e "Depois do sim"), e a Sala pode
  tirá-los.

**A faixa e o ritmo:** de 2.300 a 2.500 palavras faladas (a pauta §7: ~2.400, 13,4 min); a média de até 18 palavras por frase e nenhuma
acima de 34 (os do molde). O `WPM` de conta passa a 179: a cópia para a voz do Big Sur (`roteiros/big-sur/voz/texto-para-voz.md`) tem 2.300
palavras por este portão, em 767,6 s de fala (`out/big-sur/_tmp/regente/v2_ritmo.out.txt`), 179,8/min. Os minutos do laudo contam o texto
do narrador, com os números em algarismo: a cópia para a voz tem uns 2 % a mais (Big Sur: 2.260 contra 2.300). O gancho A, por isso, tem
111 palavras aqui e 116 na pauta.

**O autoplágio** ganha o roteiro do vídeo 5 (`roteiros/big-sur/roteiro-narrador.md`).

## O que ficou, sem mudança

O que é texto falado (`paragrafosDe`), o sha (a forma que o `portao-fatos` e o `aplicar-lista` cruzam), o `--derivados` (agora com
`roteiros/praia-do-cassino/` no padrão), o `--onde`, as `VETADAS` da voz, as palavras de `ALERTA` (o universal, "mystery" e "secret", o
presente, "here" e "this line"), as frases que abrem com data, a assinatura uma vez com até 170 palavras, o "But" até a palavra 50, a pergunta
antes da assinatura, o fecho (a pergunta do gancho repetida e o fecho em lista, em alerta), as taxas e os `TETOS` e a exceção da pergunta de
comentário no autoplágio.

## Para quem escreve o roteiro (lido na prova)

- **O gancho A da pauta §8, como está, reprova só pelo "But":** o "Yet" da 6ª frase não conta. Trocar o "Yet" por "But" também não basta:
  ele cai na palavra 52 (o teto é a 50). Com **"But how does a coast end up that straight?"** na 4ª frase (palavra 36), passa. Fora isso,
  alerta só a 1ª frase sem número (a regra aceita a imagem da areia reta).
- **"breaking" é vetada** (a voz §2, de "breaking news"): "breaking waves" reprova. Escreva "the waves break" ou "breakers". O mesmo com
  "regime" ("the wave regime"): vetada.
- O "never" de "almost never wiggling" (§4.5), o "first" de "puts Cassino first" e de "catch the rivers' sand first", o "last" de "expected
  to last" e o "still" do PDL disparam o alerta universal do molde: decidem-se como conferidos.
- "None of the sources we read says who measured the 158" alerta o `158-sem-turismo`: a forma da pauta (§5) diz "who measured it". Com o
  número, decide-se como conferido.
- O gancho, o 39 e o arco: os 39 mi no gancho reprovam (`so-39`), mesmo com o dono; e o arco de 11 mi tem de estar em algum lugar da fala.

## A prova

- `node --check` nos dois arquivos: sem erro.
- `node roteiros/praia-do-cassino/_ferramentas/gate-provar.mjs`: **exit 0, 242 de 242 checagens como o esperado** (a saída inteira, abaixo).
- **O portão novo sobre o roteiro do vídeo 5** (`node roteiros/praia-do-cassino/_ferramentas/gate.mjs roteiros/big-sur/roteiro-narrador.md`):
  **exit 1, REPROVADO**, com 4 problemas: a faixa (2.260 palavras, abaixo de 2.300), "longest beach" e "straight" fora das 3 primeiras frases
  e a 1ª frase sem "Cassino". Nenhum "não se diz" e nenhum alerta do Cassino. Os alertas: o número em milhas fora das 3 primeiras, o arco
  ausente, a 1ª frase sem número e os do molde ("nobody", "never", "first"). O sha (`50c2c56aaefc`), as taxas, as contagens, o gancho (fora os
  segundos: 53 s a 179 contra 51,5 s a 184), o autoplágio e os alertas do fecho saem iguais aos do portão do vídeo 5, que passa o mesmo
  texto (exit 0).
- **A precisão, nos outros roteiros do canal** (fora da prova, rodado à mão): nos de Juneau, Zona, Peru e Atlântico, nenhum "não se diz" do
  Cassino; no de Los Angeles, dois `molhes-ano` ("In 1891, the Southern Pacific began a pier there…" e "And in 1912, the Corps of Engineers
  called the breakwater finished…"), que são a forma que este vídeo veta (um ano com a obra), e um alerta `pdl-sem-dono` no de Juneau (uma lei
  da Câmara do Alasca). Essa rodada e a das frases da pauta acharam cinco falsos positivos, já consertados e postos na prova: o fundo "ten feet at low tide" (LA), a
  altitude "4,000 feet above sea level" (Atlântico), o "$158.46" (Zona), o "sounding" de profundidade (Atlântico), e, nas frases da pauta, o
  "National Park Service" de Padre Island.
- **As frases que a pauta recomenda** (§4, coluna "Na fala"; §7; o gancho A com o "But"), juntas num texto de teste: nenhuma reprova por
  regra do Cassino. Alertam o `158-sem-turismo` (acima) e o `gemini` (como deve).

## Os limites (o que nenhum padrão pega, ou só pega em parte; para o verificador de fatos)

- **A fama como fato** sem cópula nem aposto ("Welcome to the world's longest beach", "on the world's longest beach", "the world's longest"
  sem "beach").
- **A reta** sem ressalva com outras palavras ("it runs true", "a ruler could have drawn it"); por pronome na frase seguinte; e o "cedo" dos
  leitores, que é da arte. "A straight line" dito de outra coisa ("the shortest path is a straight line") reprova o `linha-reta-sem-almost`.
  "There are no wiggles for the extra miles to hide in" passa (é a frase da pauta, §7).
- **O paradoxo** como explicação nossa sem as palavras de causa ("the paradox is at work here", "blame the ruler").
- **O 158:** que o Estado errou ou inventou, com outras palavras ("the state got it wrong", "someone added 20 miles"); "Brazilian officials say
  158" passa o `brasil-um-so`.
- **O Guinness:** o que o g1 conta do livro (1993 a 1995, as edições brasileiras, o trecho tirado depois da contestação), atribuído; "for a
  generation" no lugar de "for three decades"; o recorde de Virginia Beach com o número numa frase vizinha.
- **Os números com dono:** a régua de cada um e o "uma vez por fonte" (o 136 uma vez, a UFRGS uma vez, as razões do senador uma vez): o
  portão não conta repetição.
- **Os 39 mi:** "only" com outras palavras, e o "só no ato 2" (o portão só sabe do gancho).
- **O Albardão:** onde o parque fica na areia, com outras palavras, antes do mapa do ICMBio; o tom com outras palavras ("a win for nature",
  "red tape"); as razões do senador nos termos do PDL (só alerta); o estado do projeto, que se relê antes da publicação.
- **A física:** as médias da maré e a altura do mar de antes ditas sem número; as idades das barreiras sem número ("from the last ice age");
  os sangradouros; "nothing builds out" com outras palavras; a lama na frente do Cassino.
- **O eclipse:** "the launches went ahead" sem "rocket" nem "NASA"; o Gemini 12 que "got a view"; o laço causal com outras palavras; o ponto
  do lançamento só como "about 15 miles south of Rio Grande, near Cassino".
- **O Altair:** o "on purpose" atribuído ao g1 numa frase longe; "abandoned" ou "dumped" sem tempestade; os 16 ou 20 km.
- **Os molhes:** o ano sem a obra na frase ("the 1915 breakwaters") passa; e a regra pega qualquer quebra-mar com ano e obra.
- **O fecho** sem número: só "N miles behind you" reprova.
- **O que os leitores a frio pediram:** o "who" da miniatura pago na física ("nobody drew it: the waves did") e a "gentle S-curve". É da bancada.

## A saída da prova

```text
# Prova do portão do vídeo 6, a Praia do Cassino (roteiros/praia-do-cassino/_ferramentas/gate.mjs)

242 de 242 checagens como o esperado.
A base: 2403 palavras, 208 frases de corpo; os casos em out/_tmp/gate-praia-do-cassino/casos/.

## A base

- OK: base: passa (0 alerta[s])
- OK: a base tem 2403 palavras (faixa 2.300–2.500), 214 frases, média 11.2 (teto 18), maior 22 (teto 34); o gancho tem 82 palavras (27.5 s a 179) e o "But" na palavra 37; 13.42 min a 179
- OK: a base não tem nenhum alerta ([])
- OK: a base não tem autoplágio com os seis roteiros anteriores (Juneau, Los Angeles, Zona, Peru, Atlântico e Big Sur)
- OK: a base não dispara nenhuma taxa

## A faixa (2.300 a 2.500), a média (18) e a maior frase (34)

- OK: faixa-piso-2300: passa (0 alerta[s]) — 2.300 palavras exatas passam
- OK: faixa-2299: reprova (1) — 2.299 reprova
- OK: faixa-teto-2500: passa (0 alerta[s]) — 2.500 palavras exatas passam
- OK: faixa-2501: reprova (1) — 2.501 reprova
- OK: faixa-2250-do-big-sur: reprova (1) — o piso de Big Sur (2.250) já fica abaixo do piso novo
- OK: media-acima-de-18: reprova (1) — as frases do corpo unidas em pares (~20 palavras cada)
- OK: frase-de-34: passa (0 alerta[s]) — uma frase de 34 palavras passa
- OK: frase-de-35: reprova (1) — uma frase de 35 palavras reprova

## O título ("Why the World's Longest Beach Is Almost a Straight Line") nas 3 primeiras frases, e o arco

- OK: titulo-sem-longest-beach: reprova (1)
- OK: titulo-longest-beach-na-4a: reprova (1) — "longest beach" na 4ª frase já não paga
- OK: titulo-sem-straight: reprova (1)
- OK: titulo-straight-na-4a: reprova (1) — "straight" na 4ª frase já não paga
- OK: titulo-sem-world: passa (1 alerta[s]) — sem "world" junto do "longest beach": alerta, não reprova
- OK: titulo-longest-beach-in-the-world: passa (0 alerta[s]) — "the longest beach in the world" paga o "World's"
- OK: titulo-sem-almost: passa (1 alerta[s]) — com "straight" e sem "almost"/"longer" nas 3 primeiras: alerta (o "Almost" do título)
- OK: titulo-almost-sem-longer: passa (0 alerta[s]) — "almost" sem "longer" paga
- OK: titulo-sem-milhas: passa (1 alerta[s]) — sem número em milhas nas 3 primeiras: alerta (a condição dos leitores a frio)
- OK: titulo-milhas-por-extenso: passa (0 alerta[s]) — "a hundred thirty-two miles" por extenso conta
- OK: arco-ausente: passa (1 alerta[s]) — sem o 11 mi do arco em lugar nenhum: alerta
- OK: arco-por-extenso: passa (0 alerta[s]) — "eleven miles" por extenso conta

## A primeira frase ("Cassino" e número)

- OK: primeira-sem-cassino: reprova (1)
- OK: primeira-cassino-na-2a: reprova (1) — "Cassino" na 2ª frase não conta
- OK: primeira-sem-numero: passa (1 alerta[s]) — sem número só alerta: a regra aceita "um número ou uma imagem" (a areia reta)
- OK: primeira-numero-por-extenso: passa (0 alerta[s]) — "two" por extenso conta como número
- OK: primeira-so-one: passa (1 alerta[s]) — "one of" não é número: alerta

## O "não se diz" do Cassino (reprova)

- OK: maior-praia-fato-reprova: reprova (1) — "Praia do Cassino is the world's longest beach."
- OK: maior-praia-fato-reprova: reprova (1) — o aposto também afirma
- OK: maior-praia-fato-reprova: reprova (1) — "It is officially the longest beach in the world."
- OK: maior-praia-fato-passa: passa (0 alerta[s]) — com o rótulo ("sold as"): passa
- OK: maior-praia-fato-passa: passa (0 alerta[s]) — como sujeito, a frase da pauta §4.3: passa
- OK: maior-praia-fato-passa: passa (0 alerta[s]) — a pergunta não afirma: passa
- OK: reta-perfeita-reprova: reprova (1) — "The beach is perfectly straight."
- OK: reta-perfeita-reprova: reprova (1) — "From the air, the coast looks ruler-straight."
- OK: reta-perfeita-reprova: reprova (1) — "It is the straightest coast in the world."
- OK: reta-perfeita-reprova: reprova (1) — "is straight" sem ressalva
- OK: reta-perfeita-passa: passa (0 alerta[s]) — a negação, a frase da pauta §4.3: passa
- OK: reta-perfeita-passa: passa (0 alerta[s]) — "straight to" é direção: passa
- OK: linha-reta-sem-almost-reprova: reprova (1) — "The beach is a straight line."
- OK: linha-reta-sem-almost-reprova: reprova (1) — "Seen from a satellite, it's one long straight line."
- OK: linha-reta-sem-almost-passa: passa (0 alerta[s]) — "The beach is almost a straight line."
- OK: linha-reta-sem-almost-passa: passa (0 alerta[s]) — a distância das paredes em linha reta: passa
- OK: linha-reta-sem-almost-passa: passa (0 alerta[s]) — "It isn't a straight line."
- OK: nunca-curva-reprova: reprova (1) — "The shore never bends."
- OK: nunca-curva-reprova: reprova (1) — "There are no curves for the extra miles to hide in."
- OK: nunca-curva-reprova: reprova (1) — "It doesn't bend once between the walls."
- OK: nunca-curva-passa: passa (1 alerta[s]) — "almost never": passa (o "never" do universal ainda alerta)
- OK: nunca-curva-passa: passa (0 alerta[s]) — "It barely bends."
- OK: paradoxo-errado-reprova: reprova (1) — "The coastline paradox is wrong."
- OK: paradoxo-errado-reprova: reprova (1) — por pronome, na frase seguinte
- OK: paradoxo-errado-passa: passa (0 alerta[s]) — a forma da pauta §4.3: passa
- OK: paradoxo-explica-reprova: reprova (1) — "The coastline paradox explains the gap."
- OK: paradoxo-explica-reprova: reprova (1) — "The extra miles come from the coastline paradox."
- OK: paradoxo-explica-passa: passa (0 alerta[s]) — atribuído ao g1: passa
- OK: paradoxo-explica-passa: passa (0 alerta[s]) — o paradoxo em geral, sem os números daqui: passa
- OK: mentira-reprova: reprova (1) — "The state's 158 is fake."
- OK: mentira-reprova: reprova (1) — "The record is a myth."
- OK: mentira-reprova: reprova (1) — "Someone made up the number."
- OK: mentira-reprova: reprova (1) — "The number is simply wrong."
- OK: mentira-reprova: reprova (1) — "The state exaggerates."
- OK: mentira-passa: passa (0 alerta[s]) — "made up of": passa
- OK: mentira-passa: passa (0 alerta[s]) — "lie" de lugar: passa
- OK: mentira-passa: passa (0 alerta[s]) — o O1 da pauta, sobre um nome: passa
- OK: guinness-nega-reprova: reprova (1) — "Guinness denies the record."
- OK: guinness-nega-reprova: reprova (1) — "It was never in the Guinness book."
- OK: guinness-nega-passa: passa (0 alerta[s]) — a forma da pauta §4.1: passa
- OK: guinness-confirma-reprova: reprova (1) — "Guinness World Records confirmed the title."
- OK: guinness-confirma-reprova: reprova (1) — "The beach holds the Guinness world record."
- OK: guinness-confirma-passa: passa (1 alerta[s]) — com o dono: não reprova (alerta [guinness-atribuido], abaixo)
- OK: tres-oficiais-reprova: reprova (1) — "The beach has three official lengths."
- OK: tres-oficiais-reprova: reprova (1) — "In a way, all three are right."
- OK: tres-oficiais-passa: passa (0 alerta[s]) — "Two of the three numbers come from governments, and one from a trail."
- OK: cidade-139-reprova: reprova (1) — "The city says the beach is 139 miles long."
- OK: cidade-139-passa: passa (0 alerta[s]) — a forma da pauta §4.3: passa
- OK: so-39-reprova: reprova (1) — "The real Cassino is only 39 miles long."
- OK: so-39-no-gancho: reprova (1) — os 39 mi no gancho (antes da assinatura), mesmo com o dono: reprova (K9)
- OK: so-39-passa: passa (0 alerta[s]) — a forma da pauta §4.3, no corpo: passa
- OK: numero-sem-dono-reprova: reprova (1) — "The beach is 158 miles long."
- OK: numero-sem-dono-reprova: reprova (1) — "It runs about 135 miles from wall to wall."
- OK: numero-sem-dono-reprova: reprova (1) — "That is 254 km of white sand."
- OK: numero-sem-dono-passa: passa (0 alerta[s]) — a forma da pauta §4.3: passa
- OK: tres-decadas-reprova: reprova (1) — "Newspapers have repeated the record for three decades."
- OK: tres-decadas-reprova: reprova (1) — "Since the 1990s, newspapers have called it the longest."
- OK: tres-decadas-passa: passa (0 alerta[s]) — a forma da pauta ("for years"): passa
- OK: virginia-28-reprova: reprova (1) — "Virginia Beach holds a record for its 28 miles."
- OK: virginia-28-passa: passa (0 alerta[s]) — os 28 mi de Long Beach: passa
- OK: briga-vizinha-reprova: reprova (1) — "Santa Vitória do Palmar stole the title."
- OK: briga-vizinha-reprova: reprova (1) — "The two towns have a long feud."
- OK: briga-vizinha-passa: passa (0 alerta[s]) — "Santa Vitória do Palmar contested the claim."
- OK: hermenegildo-97-reprova: reprova (1) — "Hermenegildo and Barra do Chuí are the other 97 miles."
- OK: hermenegildo-97-passa: passa (0 alerta[s]) — o meio é o Albardão: passa
- OK: parque-area-reprova: reprova (1) — "The park covers about a million hectares."
- OK: parque-area-passa: passa (1 alerta[s]) — milhas quadradas de lagoa, sem parque: passa
- OK: parque-maior-reprova: reprova (1) — "It is the largest marine park in Brazil."
- OK: parque-maior-passa: passa (0 alerta[s]) — a forma da pauta §4.4: passa
- OK: parque-juizo-reprova: reprova (1) — "The decree finally protected the beach."
- OK: parque-juizo-reprova: reprova (1) — "The senator's bill threatens the park."
- OK: parque-juizo-passa: passa (0 alerta[s]) — nas palavras do decreto (pauta §4.4): passa
- OK: parque-previsao-reprova: reprova (1) — "The decree will be overturned."
- OK: parque-previsao-reprova: reprova (1) — "The park is safe."
- OK: parque-previsao-passa: passa (1 alerta[s]) — "Nobody knows yet what the Senate will decide."
- OK: parque-processo-reprova: reprova (1) — "Santa Vitória do Palmar is suing over the park."
- OK: parque-processo-passa: passa (0 alerta[s]) — "Santa Vitória do Palmar holds most of the sand."
- OK: parque-praia-toda-reprova: reprova (1) — "The park covers the whole beach."
- OK: parque-praia-toda-reprova: reprova (1) — "The entire beach is now protected."
- OK: parque-praia-toda-passa: passa (0 alerta[s]) — "The decree's limits mention the Mangueira lagoon and the mouth of the Chuí stream."
- OK: pdl-sem-data-reprova: reprova (1) — "The bill is still waiting in a Senate committee."
- OK: pdl-sem-data-reprova: reprova (1) — por pronome, sem a data
- OK: pdl-sem-data-passa: passa (1 alerta[s]) — a forma da pauta §4.4: passa
- OK: mare-numero-reprova: reprova (1) — "The tide rises about ten inches."
- OK: mare-numero-reprova: reprova (1) — "The tide on this coast is only one foot."
- OK: mare-numero-passa: passa (0 alerta[s]) — a forma da pauta §4.5: passa
- OK: mare-numero-passa: passa (1 alerta[s]) — o fundo "at low tide" (Los Angeles) não é a maré: passa
- OK: mar-alto-numero-reprova: reprova (1) — "Five thousand years ago, the sea stood ten feet higher."
- OK: mar-alto-numero-reprova: reprova (1) — "The sea was about two meters above today's level."
- OK: mar-alto-numero-passa: passa (1 alerta[s]) — uma altitude (o Atlântico), não o mar de antes: passa
- OK: mar-alto-numero-passa: passa (0 alerta[s]) — a forma da pauta §4.5: passa
- OK: rios-nada-reprova: reprova (1) — "The rivers send nothing to the sea."
- OK: rios-nada-passa: passa (0 alerta[s]) — "The rivers drop their sand in the lagoons behind the beach."
- OK: areia-dos-rios-reprova: reprova (1) — "The sand comes from the rivers."
- OK: areia-dos-rios-reprova: reprova (1) — "The rivers bring sand to the beach."
- OK: areia-dos-rios-passa: passa (0 alerta[s]) — a negação: passa
- OK: areia-dos-rios-passa: passa (0 alerta[s]) — "The rivers carry sand toward the coast, but drop it in the lagoons."
- OK: nada-cresce-reprova: reprova (1) — "So nothing builds out into the sea."
- OK: nada-cresce-passa: passa (0 alerta[s]) — a frase da pauta §4.5: passa
- OK: sem-riacho-reprova: reprova (1) — "Not a single stream crosses the sand."
- OK: sem-riacho-reprova: reprova (1) — "The beach runs unbroken for 135 miles."
- OK: sem-riacho-passa: passa (0 alerta[s]) — a forma da pauta §4.5: passa
- OK: linhas-na-areia-reprova: reprova (1) — "Depending on the line you pick, the length changes by 10 to 20 percent."
- OK: linhas-na-areia-reprova: reprova (1) — "Measured along the high-tide line, the beach gets longer."
- OK: linhas-na-areia-passa: passa (0 alerta[s]) — a linha da preamar sem medida: passa
- OK: idades-reprova: reprova (1) — "This is a 400,000-year-old beach."
- OK: idades-reprova: reprova (1) — "The oldest barrier formed about a hundred and twenty thousand years ago."
- OK: idades-passa: passa (0 alerta[s]) — "The newest of the four barriers is the beach you are standing on."
- OK: conchas-reprova: reprova (1) — "There are 37 miles of shells."
- OK: conchas-reprova: reprova (1) — "Motorcyclists fear that stretch."
- OK: conchas-passa: passa (0 alerta[s]) — "Shells pile up along parts of the beach."
- OK: foguetes-lancados-reprova: reprova (1) — "NASA launched 21 rockets from the beach."
- OK: foguetes-lancados-reprova: reprova (1) — "The rockets lifted off over the ocean."
- OK: foguetes-lancados-passa: passa (0 alerta[s]) — a forma da pauta §4.6 ("planned"): passa
- OK: foguetes-lancados-passa: passa (0 alerta[s]) — "How many rockets actually went up, the release doesn't say."
- OK: gemini-viu-reprova: reprova (1) — "Gemini 12's astronauts watched the eclipse from orbit."
- OK: gemini-viu-passa: passa (1 alerta[s]) — a forma da pauta ("was scheduled to watch"): não reprova (o [gemini] alerta, abaixo)
- OK: lugar-perfeito-reprova: reprova (1) — "A long, straight, empty beach was the perfect launch site."
- OK: lugar-perfeito-reprova: reprova (1) — "NASA chose the beach because the beach was so long and empty."
- OK: lugar-perfeito-passa: passa (0 alerta[s]) — a forma da pauta §4.6: passa
- OK: altair-tempestade-reprova: reprova (1) — "A storm wrecked the Altair."
- OK: altair-tempestade-reprova: reprova (1) — "The Altair ran aground in June 1976."
- OK: altair-tempestade-passa: passa (0 alerta[s]) — o "on purpose", atribuído ao g1: passa
- OK: molhes-ano-reprova: reprova (1) — "The breakwaters were finished in 1915."
- OK: molhes-ano-passa: passa (0 alerta[s]) — a forma da pauta ("in the 1910s"): passa
- OK: molhes-ano-passa: passa (0 alerta[s]) — um ano sem a obra: passa
- OK: rivais-reprova: reprova (1) — "Eighty Mile Beach is longer."
- OK: rivais-reprova: reprova (1) — "Cox's Bazar is the longest natural beach in the world."
- OK: rivais-reprova: reprova (1) — "Padre Island has 70 miles of beach."
- OK: rivais-passa: passa (0 alerta[s]) — o O1 da pauta: o nome "Ninety Mile" não é distância, e a Ninety Mile não é rival vetada: passa
- OK: rivais-passa: passa (0 alerta[s]) — a forma da pauta §4.2 ("marketed as"): passa
- OK: visto-do-espaco-reprova: reprova (1) — "The beach is visible from space."
- OK: visto-do-espaco-passa: passa (0 alerta[s]) — a imagem do Sentinel-3 (O3): passa
- OK: data-relativa-reprova: reprova (1) — "Sixty years ago this month, NASA planned a launch from this sand."
- OK: data-relativa-reprova: reprova (1) — "This year, the decree turned the dunes into a park."
- OK: data-relativa-passa: passa (0 alerta[s]) — a data absoluta: passa
- OK: populacao-reprova: reprova (1) — "Cassino has a population of 30,000."
- OK: populacao-passa: passa (0 alerta[s]) — "Cassino is a beach district of Rio Grande."
- OK: fecho-milhas-atras-reprova: reprova (1) — "There are 135 miles behind you."
- OK: fecho-milhas-atras-passa: passa (0 alerta[s]) — a forma da pauta ("the whole stretch"): passa
- OK: brasil-um-so-reprova: reprova (1) — "Brazil says the beach is 158 miles long."
- OK: brasil-um-so-passa: passa (0 alerta[s]) — "Brazil's statistics agency says about 135 miles."
- OK: cidade-big-sur-passa: passa (0 alerta[s]) — a regra do vídeo 5 saiu: passa
- OK: estrada-fechada-passa: passa (0 alerta[s]) — a regra do vídeo 5 saiu: passa
- OK: fogo-destruiu-passa: passa (0 alerta[s]) — a regra do vídeo 5 saiu: passa
- OK: big-sur-tem-passa: passa (0 alerta[s]) — o alerta do vídeo 5 saiu: passa sem alerta

## Os alertas do Cassino (nunca reprovam)

- OK: 158-sem-turismo-alerta: passa (1 alerta[s]) — "Less than two percent apart, and nowhere near 158."
- OK: 158-sem-turismo-passa: passa (0 alerta[s]) — com o turismo do Estado: sem alerta
- OK: 158-sem-turismo-passa: passa (0 alerta[s]) — dinheiro (a Zona: $158.46) não é o 158: sem alerta
- OK: 223-sem-trilha-alerta: passa (1 alerta[s]) — "Another source puts it at 139 miles."
- OK: albardao-sem-dono-alerta: passa (2 alerta[s]) — "The Albardão is now a national park."
- OK: albardao-sem-dono-passa: passa (0 alerta[s]) — a forma da pauta §4.2: o "National Park Service" não é o parque, e "longest stretch" não é "longest beach": sem alerta
- OK: pdl-sem-dono-alerta: passa (1 alerta[s]) — "A bill in the Senate would cancel the decree."
- OK: pdl-sem-dono-passa: passa (0 alerta[s]) — com o senador: sem alerta
- OK: altair-alerta: passa (1 alerta[s]) — a distância (o ponto sai do OSM)
- OK: altair-alerta: passa (1 alerta[s]) — o "may disappear" sem a FURG
- OK: altair-alerta: passa (1 alerta[s]) — o "on purpose" sem o g1
- OK: altair-passa: passa (0 alerta[s]) — a forma da pauta §4.6: sem alerta
- OK: gemini-alerta: passa (1 alerta[s]) — toda menção alerta, até o relatório da missão
- OK: hermenegildo-alerta: passa (1 alerta[s]) — "Hermenegildo is a small resort near the border."
- OK: guinness-atribuido-alerta: passa (1 alerta[s]) — "WorldAtlas says Guinness World Records has recognised it since 1994."
- OK: 39-sem-dono-alerta: passa (1 alerta[s]) — "The Cassino part is about 39 miles."
- OK: 135-sem-dono-alerta: passa (1 alerta[s]) — "That gives about 136 miles."
- OK: foguetes-numero-alerta: passa (1 alerta[s]) — "In 1966, NASA sent rockets to Cassino."
- OK: foguetes-numero-passa: passa (0 alerta[s]) — "sounding" de profundidade (o Atlântico) não é foguete: sem alerta
- OK: razoes-do-senador-alerta: passa (1 alerta[s]) — "The senator says the decree is too big."
- OK: razoes-do-senador-passa: passa (0 alerta[s]) — o pedido, sem as razões: sem alerta
- OK: sem-interrupcao-alerta: passa (1 alerta[s]) — "The sand is uninterrupted."
- OK: sem-interrupcao-passa: passa (0 alerta[s]) — com o rótulo: sem alerta
- OK: onda-altura-alerta: passa (1 alerta[s]) — "The waves average five feet."
- OK: onda-altura-passa: passa (0 alerta[s]) — a forma da pauta: sem alerta
- OK: eighty-mile-alerta: passa (1 alerta[s]) — "Eighty Mile Beach sits in Western Australia."
- OK: fosseis-alerta: passa (1 alerta[s]) — "The fossils include the bones of giant sloths."
- OK: palavra-everyone: passa (1 alerta[s]) — "Everyone on the crew agreed on the count."
- OK: palavra-nobody: passa (1 alerta[s]) — "Nobody on the crew questioned the count."
- OK: palavra-never: passa (1 alerta[s]) — "The crew never questioned the count."
- OK: palavra-first: passa (1 alerta[s]) — "The first count came back at dawn."
- OK: palavra-last: passa (1 alerta[s]) — "Last summer, the crew counted the posts again."
- OK: palavra-always: passa (1 alerta[s]) — "The crew always checked the count twice."
- OK: palavra-mystery: passa (1 alerta[s]) — "The straight coast is no mystery."
- OK: palavra-secret: passa (1 alerta[s]) — "The coast keeps no secret from the map."
- OK: palavra-still: passa (1 alerta[s]) — "The fishermen still work the surf."
- OK: palavra-here: passa (1 alerta[s]) — "Out here, the nights are dark."
- OK: palavra-this-line: passa (1 alerta[s]) — "Follow this line to the border."
- OK: vetada-breaking: reprova (1) — "breaking waves" reprova pela VETADA do molde: escreva "the waves break"

## O gancho A da pauta §8

- OK: gancho-a-como-esta: reprova (1) — o gancho A, como está na pauta, só reprova pelo "But" (o "Yet" da 6ª frase não conta) e alerta a 1ª frase sem número
- OK: o gancho A tem 111 palavras até a assinatura no texto do narrador (37.2 s a 179; a pauta §8 conta 116 na cópia para a voz, com os números por extenso) e um alerta só (1)
- OK: gancho-a-but-no-lugar-do-yet: reprova (1) — o "Yet" trocado por "But" cai na palavra 52: ainda reprova (o teto é a 50)
- OK: gancho-a-com-but: passa (1 alerta[s]) — com "But how does a coast end up that straight?" na 4ª frase (palavra 36), passa

## O fecho (alerta; fica do molde)

- OK: fecho-repete-pergunta: passa (1 alerta[s]) — "that number fit on this" (5 palavras da pergunta) na última frase
- OK: fecho-4-palavras: passa (0 alerta[s]) — "that number fit on": 4 palavras da pergunta, sem alerta
- OK: fecho-pergunta-fora-das-8: passa (0 alerta[s]) — a mesma frase na 9ª antes do fim: sem alerta
- OK: fecho-em-lista: passa (2 alerta[s]) — "First…", "Then…", "Finally…" nas 3 últimas
- OK: fecho-2-da-lista: passa (1 alerta[s]) — duas aberturas de lista: sem alerta
- OK: fecho-em-lista-a-an: passa (1 alerta[s]) — "A …", "A …", "An …" entre as 8 últimas
- OK: fecho-pergunta-curta: passa (1 alerta[s]) — a pergunta do gancho com 3 palavras ("Why so straight?"): ela inteira no fim alerta

## O autoplágio compara também com o roteiro do vídeo 5

- OK: autoplagio-big-sur: passa (1 alerta[s]) — uma frase do roteiro de Big Sur

## O roteiro do vídeo 5 nos dois portões, e o sha

- OK: o portão novo reprova o roteiro do vídeo 5 só pela faixa (2260 palavras), pelo título (2) e pela primeira frase sem "Cassino" (1), sem nenhum "não se diz" do Cassino: exit 1, 4 problema(s): palavras: 2260, abaixo de 2300 (a faixa do vídeo 6, de 13 a  | "longest beach" não aparece nas 3 primeiras frases (o título | "straight" não aparece nas 3 primeiras frases (o título "…Is | a primeira frase não diz "Cassino" (o lugar da imagem de abe
- OK: e nenhum alerta do Cassino nele (nenhum)
- OK: e alerta o número em milhas fora das 3 primeiras, o arco ausente e a 1ª frase sem número (a de Big Sur não tem número)
- OK: o portão do vídeo 5, no mesmo texto: exit 0 (PASSA)
- OK: as taxas saem iguais nos dois portões (abre_but 0, abre_and 3.57, abre_so 3.12, travessoes 0, perguntas 2.23, frases_curtas 2.68, imperativo_mapa 0, heres 0, antitese 0; 2242 palavras contadas)
- OK: o sha do roteiro do vídeo 5 é o mesmo nos dois portões (50c2c56aaefc)
- OK: palavras, parágrafos, frases, média, maior frase e gancho iguais (os segundos do gancho mudam com o WPM: 53 s a 179 contra 51.5 s a 184)
- OK: o autoplágio é o mesmo nos dois (o novo compara também com o próprio Big Sur, que sai da conta por ser o arquivo medido): 0 trecho(s)
- OK: os alertas do fecho são os mesmos nos dois (0)
- OK: o sha de um texto com BOM, CRLF e comentário de duas linhas é o mesmo nos dois portões e o da base (ead268284beb)

## O ferramentas/portao-fatos.mjs com o portão novo

- OK: o portao-fatos roda a cópia do portão novo (numa raiz de teste) e o sha cruza: exit 1 (o piso reprova a tabela vazia, de propósito), gate.igual = true

## O arquivo padrão e as opções do molde

- OK: sem argumento, o portão procura roteiros/praia-do-cassino/roteiro-narrador.md, que ainda não existe: exit 2, "não encontrado: roteiros/praia-do-cassino/roteiro-narrador.md"
- OK: opção desconhecida: exit 2
- OK: --onde: cada taxa traz as frases (abre_so: ["So why won't that number fit on this sand?"])
- OK: --derivados: o laudo com o sha de agora passa, o roteiro-editor.md com o sha velho reprova (exit 1)
```
