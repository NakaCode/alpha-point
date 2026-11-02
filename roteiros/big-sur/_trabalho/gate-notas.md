# O portão do roteiro do vídeo 5 (`big-sur`): as notas da derivação

Derivado em 02/11/2026, pelo pedido da Sala de controle, do portão do vídeo 4 (`roteiros/atlantico-fundo/_ferramentas/gate.mjs`, que no
topo se chama "vídeo 5" pela numeração de antes de 27/10/2026).

- O portão: `roteiros/big-sur/_ferramentas/gate.mjs` (`node roteiros/big-sur/_ferramentas/gate.mjs [arquivo] [--derivados] [--onde]`,
  cwd na raiz do canal; sem arquivo, mede `roteiros/big-sur/roteiro-narrador.md`, que ainda não existe: exit 2).
- A prova: `roteiros/big-sur/_ferramentas/gate-provar.mjs`, com os casos em `out/_tmp/gate-big-sur/casos/` e a saída em
  `out/_tmp/gate-big-sur/prova-saida.md` (fora do git).
- O topo do `gate.mjs` diz o mesmo que estas notas, com o como de cada regra junto dela no código.

## O que saiu (as regras só do Atlântico)

- Os dois títulos dele nas 3 primeiras frases: "deepest", "Atlantic", o 83 com milhas, "Puerto Rico" ou "island" (reprovavam) e a marca dos
  EUA (alerta).
- A 1ª frase com "Puerto Rico" ou "island" (reprovava) e sem "Puerto Rico" (alerta).
- O `NAO_SE_DIZ` dele inteiro (o Oceano Austral, o primeiro no fundo, os 80 anos, o Everest, as Sandwich do Sul, a Marianas no Atlântico,
  os 4 milhões, o 21 de dezembro, o 83 de San Juan, as Bermudas, as espécies, o Meteor Deep, o peixe de 8.336 m, 1918, o "vem aí", o
  mistério e os oito das bancadas), com as constantes que só ele usava.
- O `ALERTA_V5` dele inteiro (1918 com a fossa, os 200 peixes, as duas medidas, o mais fundo da Terra, o número antigo, o Archimède, os
  mortos de 1918, o "mediu errado", a Costa Leste, o peixe mais fundo, a soberania das Sandwich), com `MEDIDA` e `ATRIBUI_PEIXE`.
- Da lista de palavras em `ALERTA`: os nomes "Milwaukee Deep" e "Brownson Deep" e o tom de prateleira só do Atlântico ("anomaly",
  "megaquake"). A prova confere que eles não alertam mais.
- A lista dele do que nenhum padrão pega.

## O que entrou

**O título** ("Why This Stretch of California Is as Empty as Wyoming"; pauta §2 e §8; `embalagem.md` §2), nas 3 primeiras frases (as das
taxas, sem aspas de abertura):
- REPROVA sem "Wyoming";
- REPROVA sem "California", "Los Angeles" ou "San Francisco";
- ALERTA sem "empty".

**A primeira frase** (`voz.md` §1, "Os números da fala"; a imagem de abertura é a ponte de Bixby, pauta §6):
- REPROVA sem "Big Sur";
- ALERTA sem número (algarismo, ou por extenso de "two" a "billion"; "one of" não conta), porque a regra aceita "um número ou uma imagem".

**O "não se diz" de Big Sur** (`NAO_SE_DIZ`; pauta §5, "Depois do sim", o cético e as decisões da Sala), cada um REPROVA com o porquê e a
fonte na mensagem:

| id | O que reprova |
|---|---|
| `zero-pessoas` | "zero people" (e "zero residents/inhabitants/population/humans") |
| `ninguem-mora` | "nobody lives", "no one lives" sem "almost" na frase |
| `cidade-big-sur` | "town/city/village of Big Sur", "population of Big Sur", "Big Sur's population" |
| `milhas-com-1500` | "70/90/seventy/ninety miles" (ou "-mile") na mesma frase que "1,500", "1,474", "fifteen/fourteen hundred" ou "a thousand five/four hundred" |
| `duas-maiores` | "two largest", "two biggest", "largest/biggest metro(politan)", "biggest cities" |
| `superlativo-sem-dono` | "emptiest coast(line)", "most photographed", "most famous" |
| `unica-estrada` | "the/its/their only road", "the only way in" |
| `estrada-fechada` | "road/highway/Highway 1/route is (now/still/again…) closed", "remains closed", "still closed" |
| `mansoes` | "billionaire(s)", "mansion(s)" |
| `mais-rigido` | "strictest", "toughest" |
| `clima` | "perfect weather/climate", "never gets (too) cold/hot/chilly" |
| `fogo-destruiu` | "destroy/destroyed/destroys/destroying" numa frase com fire, wildfire, blaze, home, house, building, structure ou cabin, com ou sem negação ("No houses were destroyed" também afirma o que a página do CAL FIRE não mostra) |
| `terceiro-maior` | "third-largest", "third largest", "third-biggest" |
| `anos-1880` | "same as (in) the 1880s", "hasn't/has not grown" (fora "grown back"), "fewer … than (in) the 1880s", e "as many as today" ou "the same as today" na frase dos 1880s |

**Os alertas de Big Sur** (`ALERTA_BS`; nunca reprovam):

| id | O que alerta |
|---|---|
| `presos` | "built (entirely…) by (San Quentin) prisoners/convicts/inmates", "prisoners/convicts/inmates built" |
| `proibido-construir` | "can't/cannot build", "building is/was banned/forbidden/prohibited/illegal", "banned from building", "nobody can build", "illegal to build" |
| `esselen` | "Esselen" |
| `falha` | "earthquake", "quake", "fault line", "San Andreas" |
| `cone-peak` | "Cone Peak" numa frase com "district" |
| `regra-hoje` | "still", "today", "now", "currently" ou "since 1986" numa frase com "plan" ou "rule" |
| `veraneio` | "vacation/second/holiday/weekend home(s)" |
| `visitantes` | "million(s) (of) visitors/tourists", "million people visit/come/drive/stop/pass" sem "1986" na frase |
| `big-sur-tem` | "Big Sur has/had/is home to/was home to/counts/counted" seguido, em até 40 letras, de um número de gente (o número no fim da oração, ou antes de people/residents/inhabitants/locals/souls) |
| `1500-sem-distrito` (a mais) | o 1.500 sem "district" na frase nem na anterior |
| `wyoming-ano` (a mais) | "Wyoming" numa frase com um ano de 2010 a 2029 que não 2020, "6.06" ou "588,753" |

- Os dois marcados "a mais" não estavam no pedido da Sala: saem das decisões dela de 02/11/2026 ("fewer than 1,500", sempre com "the census
  district"; o Wyoming, sempre 2020 com 2020). São alertas, e a Sala pode tirá-los.
- O 1.500 seguido de unidade ("1,500 feet", "1,500-foot", "1,500 acres", "$1,500", "1,500%") não conta como gente, nem no
  `milhas-com-1500` nem no `1500-sem-distrito`. Sem isso, o "its top 1,500 feet" do Everest no roteiro do Atlântico alertava.

**A faixa e as frases** (a Sala, ritmo calmo, do vídeo 5 em diante): de 2.250 a 2.450 palavras faladas (o molde: 1.950 a 2.150); média de
no máximo 15 palavras por frase (o molde: 18, o teto da voz §1) e nenhuma acima de 30 (o molde: 34). O `WPM` de conta continua 184 (a voz
v4): os minutos do laudo são o piso até o teste às cegas da voz calma (2.250 palavras dão 12,2 min a 184 e 14,1 a 160).

**O autoplágio** ganha o roteiro do vídeo 4 (`roteiros/atlantico-fundo/roteiro-narrador.md`).

## O que ficou, sem mudança

O que é texto falado (`paragrafosDe`), o sha (a forma que o `ferramentas/portao-fatos.mjs` e o `ferramentas/aplicar-lista.mjs` cruzam; a
prova confere o cruzamento no `portao-fatos` e o mesmo sha nos dois portões), o `--derivados` (agora com `roteiros/big-sur/` no padrão),
o `--onde`, as `VETADAS` da voz, as palavras de `ALERTA` que não são do Atlântico (o universal "everyone", "nobody", "never", "first",
"last" e "always"; "mystery" e "secret"; o presente; "here" e "this line", da chamada de inscrição, `marca/cta.md` §5), as frases que abrem
com data, a assinatura uma vez com até 170 palavras, o "But" até a palavra 50, a pergunta antes da assinatura, o fecho (a pergunta do gancho
repetida e o fecho em lista, em alerta), as taxas e os `TETOS` (Juneau e Los Angeles) e a exceção da pergunta de comentário no autoplágio.

## Para quem escreve o roteiro (lido na prova)

- **O gancho A da pauta §8, como está, reprova só pelo "But":** nenhuma frase dele abre com "But", e o portão exige o "But" do gancho até
  a palavra 50. Com "But the census district around this bridge counted fewer than 1,500, as empty as Wyoming." na 3ª frase, ele passa.
  Fora isso, alerta a 1ª frase sem número (a regra aceita a imagem da ponte), o "here" de "calls the climate here mild" e o "nobody" de
  "it isn't that nobody ever came".
- O "last summer" que a Sala deu ao fogo dispara o alerta universal do "last": decide-se como conferido.
- O "now", "today" e "still" disparam o alerta do presente do molde em qualquer frase, e o `regra-hoje` a mais quando a frase fala do plano
  ou da regra.

## A prova

- `node --check` nos dois arquivos: sem erro.
- `node roteiros/big-sur/_ferramentas/gate-provar.mjs`: **exit 0, 134 de 134 checagens como o esperado** (a saída inteira, abaixo).
- O portão novo sobre o roteiro do vídeo 4 (`node roteiros/big-sur/_ferramentas/gate.mjs roteiros/atlantico-fundo/roteiro-narrador.md`):
  **exit 1, REPROVADO**, com 4 problemas: a faixa (1.954 palavras, abaixo de 2.250), "Wyoming" fora das 3 primeiras frases, a marca da
  Califórnia fora das 3 primeiras e a 1ª frase sem "Big Sur". Os alertas: "empty" fora das 3 primeiras, os do molde ("never" 2×, "first"
  2×, "still" 1×) e o `falha` 5× (o terremoto de 1918 e os tsunamis). A 1ª frase dele tem número (o 83): sem esse alerta. O sha
  (`ddd4567309e3`), as taxas, as contagens, o gancho, o autoplágio e os alertas do fecho saem iguais aos do portão do vídeo 4, que passa o
  mesmo texto (exit 0).

## O que nenhum padrão pega, ou só pega em parte (para o verificador de fatos)

- **O distrito.** O 1.500 dito da costa inteira com outras palavras ("this coast", "the whole coast", "from Carmel to San Simeon"): o
  `1500-sem-distrito` só alerta quando nem a frase nem a anterior dizem "district". As 70 ou 90 milhas numa frase vizinha da do 1.500 (a
  montagem que soma as duas): o `milhas-com-1500` olha a mesma frase. O mapa que demarca o distrito (o aviso dos leitores a frio) é da arte.
- **Big Sur como lugar com gente**, sem "the census district" e sem número ("Big Sur, a town of…", "the people of Big Sur", "the community
  of Big Sur"); "nobody calls it home"; e o "nobody lives" quando há um "almost" em outro ponto da frase ("almost a thousand came, but nobody
  lives…").
- **O número de gente com outra unidade** ("1,500 households") conta como gente; o seguido de feet, miles, acres, square, percent, dollars,
  years, degrees ou inches não.
- **Os anos 1880 contra hoje pela montagem**, sem as palavras vetadas: "nearly a thousand", atribuído ao plano de 1986 e dito da costa (a
  régua do plano), nunca do distrito. Se a montagem diz "não cresceu" sem dizer, quem decide é o verificador (o ponto fraco do gancho B).
- **As metrópoles:** "more than 17 million", pela régua das duas regiões metropolitanas oficiais (L2), pelo nome. "20 million" ou "26 million"
  sem a régua (pauta §5) e "nearly 18 million" (a base de 2020, K2) não têm padrão; "largest cities" sem o "two" passa.
- **O Wyoming** de outro ano sem o ano na frase; a contagem do censo (576.851, de memória, K7) contra a base das estimativas (576.872).
- **A estrada:** o 1919 sem a Federal Highway Administration (K6; ou "nearly two decades"); "18 years"; o 1921 e o 1928 (só da busca); os
  US$ 8 milhões do plano contra os US$ 10 milhões da FHWA (outra régua); os presos: três acampamentos, 35 centavos por dia, a pena reduzida,
  atribuídos à FHWA. "Built entirely by prisoners" só alerta (`presos`).
- **A regra de 1986:** a paráfrase dos 15 %; "about half was public land" (o 60 % fica fora); a regra dita como de hoje com outras palavras
  ("remains in force", "to this day", "continues to"); "the county bans building" sem "o que se vê da estrada".
- **O fogo:** o número na voz (a decisão é "em palavras"); "burned homes", "burned down", "lost their homes", sem "destroyed"; o Plaskett
  Fire com número; o tom de quem fala de gente que acabou de passar pelo fogo ("vazio" dito da comunidade).
- **A estrada de hoje:** "the road is open" é volátil (relê-se antes da publicação, DS3); "it will close again" como previsão (pauta §5);
  as datas e o ponto de Paul's Slide e Regent's Slide (K4).
- **As casas:** as duas réguas, cada uma com o dono (o dia do censo de 2020, quase quatro em dez vagas; a ACS de 5 anos, quase todas as
  vagas de temporada), e nenhum número com margem na voz. O `veraneio` só alerta "vacation/second home".
- **Os visitantes:** "the visitors came back" (Caltrans, 15/05/2026); o "900 percent" só como o tráfego em Ragged Point, atribuído à Visit
  California, nunca como contagem de visitantes. Não há padrão para o 900.
- **Mud Creek** "the largest landslide" (pauta §5) e o tamanho dele: não lido, sem padrão.
- **O Cone Peak** dito no distrito por pronome na frase seguinte (o `cone-peak` olha a mesma frase).
- **A estrada Nacimiento–Fergusson:** "the only road" com outras palavras ("the one road", "no other road") passa.
- **O superlativo sem dono** com outras palavras ("the emptiest place in California"): só "emptiest coast(line)", "most photographed" e
  "most famous" reprovam.
- **O clima:** "mild", atribuído ao plano; "it never rains" e afins não têm padrão.
- **A ponte de Bixby** (o ano e quem a fez, pauta §11, item 4) e **os Esselen** (o `esselen` só alerta o nome).
- **O que os leitores a frio pediram** (`out/_pautas/video-5-2026-11-01/teste-leitores.md`): a virada além de "é montanha" ou "é parque"
  (as casas que existem e ficam vazias, a regra do que se vê, a gente dos anos 1880) e os turistas no roteiro. É da bancada.

## A saída da prova

```text
# Prova do portão do vídeo 5, Big Sur (roteiros/big-sur/_ferramentas/gate.mjs)

134 de 134 checagens como o esperado.
A base: 2339 palavras, 202 frases de corpo; os casos em out/_tmp/gate-big-sur/casos/.

## A base

- OK: base: passa (0 alerta[s])
- OK: a base tem 2339 palavras (faixa 2.250–2.450), 208 frases, média 11.2 (teto 15), maior 19 (teto 30); o gancho tem 88 palavras e o "But" na palavra 28
- OK: a base não tem nenhum alerta ([])
- OK: a base não tem autoplágio com os cinco roteiros anteriores (Juneau, Los Angeles, Zona, Peru e Atlântico)
- OK: a base não dispara nenhuma taxa

## A faixa (2.250 a 2.450), a média (15) e a maior frase (30)

- OK: faixa-piso-2250: passa (0 alerta[s]) — 2.250 palavras exatas passam
- OK: faixa-2249: reprova (1) — 2.249 reprova
- OK: faixa-teto-2450: passa (0 alerta[s]) — 2.450 palavras exatas passam
- OK: faixa-2451: reprova (1) — 2.451 reprova
- OK: faixa-2150-do-molde: reprova (1) — o teto do molde (2.150) já fica abaixo do piso novo
- OK: media-acima-de-15: reprova (1) — as frases do corpo unidas em pares (~20 palavras cada)
- OK: frase-de-30: passa (0 alerta[s]) — uma frase de 30 palavras passa
- OK: frase-de-31: reprova (1) — uma frase de 31 palavras reprova
- OK: frase-de-34-do-molde: reprova (1) — o teto do molde (34) já reprova

## O título ("Why This Stretch of California Is as Empty as Wyoming") nas 3 primeiras frases

- OK: titulo-sem-wyoming: reprova (1)
- OK: titulo-wyoming-na-4a: reprova (1) — "Wyoming" na 4ª frase já não paga
- OK: titulo-sem-california: reprova (1) — sem a marca da Califórnia nas 3 primeiras (a 4ª diz "California": não conta)
- OK: titulo-so-california: passa (0 alerta[s]) — "California" sozinho paga
- OK: titulo-so-san-francisco: passa (0 alerta[s]) — "San Francisco" sozinho paga
- OK: titulo-sem-empty: passa (1 alerta[s]) — sem "empty" nas 3 primeiras (a 4ª o diz: não conta): alerta, não reprova

## A primeira frase ("Big Sur" e número)

- OK: primeira-sem-big-sur: reprova (1)
- OK: primeira-big-sur-na-2a: reprova (1) — "Big Sur" na 2ª frase não conta
- OK: primeira-sem-numero: passa (1 alerta[s]) — sem número só alerta: a regra aceita "um número ou uma imagem" (a ponte de Bixby)
- OK: primeira-numero-por-extenso: passa (0 alerta[s]) — "five thousand" por extenso conta como número
- OK: primeira-so-one: passa (1 alerta[s]) — "one of" não é número: alerta

## O "não se diz" de Big Sur (reprova)

- OK: zero-pessoas-reprova: reprova (1) — "Some videos say this coast has zero people."
- OK: ninguem-mora-reprova: reprova (1) — "Nobody lives on the ridge above the bridge."
- OK: ninguem-mora-reprova: reprova (1) — "No one lives in the canyons."
- OK: ninguem-mora-passa: passa (1 alerta[s]) — "almost" na frase: passa (o "nobody" do universal ainda alerta)
- OK: cidade-big-sur-reprova: reprova (1) — "The town of Big Sur has a gas station and a post office."
- OK: cidade-big-sur-reprova: reprova (1) — "Big Sur's population is tiny."
- OK: cidade-big-sur-reprova: reprova (1) — "The population of Big Sur would fit in one school."
- OK: cidade-big-sur-passa: passa (0 alerta[s]) — "The census district of Big Sur covers the north of the coast."
- OK: milhas-com-1500-reprova: reprova (1) — "Fewer than 1,500 people live along these 70 miles of coast."
- OK: milhas-com-1500-reprova: reprova (1) — "The census district counted fewer than 1,500 people on a seventy-mile coast."
- OK: milhas-com-1500-reprova: reprova (1) — "Ninety miles of coast hold about fifteen hundred people."
- OK: milhas-com-1500-passa: passa (0 alerta[s]) — as 70 milhas e o 1.500 em frases separadas: passa (a montagem é do verificador)
- OK: milhas-com-1500-passa: passa (0 alerta[s]) — "1,500 feet" é medida, não gente: passa
- OK: duas-maiores-reprova: reprova (1) — "Los Angeles and San Francisco are the two largest metro areas in the state."
- OK: duas-maiores-reprova: reprova (1) — "They rank among the biggest cities in the country."
- OK: duas-maiores-reprova: reprova (1) — "Los Angeles is the largest metro area on the coast."
- OK: duas-maiores-passa: passa (0 alerta[s]) — "Los Angeles and San Francisco hold more than 17 million people."
- OK: superlativo-sem-dono-reprova: reprova (1) — "Big Sur is the emptiest coast in California."
- OK: superlativo-sem-dono-reprova: reprova (1) — "Bixby Bridge is the most photographed bridge on the coast."
- OK: superlativo-sem-dono-reprova: reprova (1) — "It may be the most famous drive in the state."
- OK: unica-estrada-reprova: reprova (1) — "Highway 1 is the only road along this coast."
- OK: unica-estrada-reprova: reprova (1) — "For the ranches, the boat was the only way in."
- OK: unica-estrada-passa: passa (0 alerta[s]) — "Highway 1 is the coast road."
- OK: estrada-fechada-reprova: reprova (1) — "The road is closed at Paul's Slide."
- OK: estrada-fechada-reprova: reprova (1) — "Highway 1 remains closed south of the bridge."
- OK: estrada-fechada-reprova: reprova (1) — "Parts of the highway are still closed."
- OK: estrada-fechada-passa: passa (0 alerta[s]) — "The road was closed for almost three years."
- OK: mansoes-reprova: reprova (1) — "A billionaire bought a ranch on the ridge."
- OK: mansoes-reprova: reprova (1) — "Mansions line the cliffs."
- OK: mais-rigido-reprova: reprova (1) — "It is the strictest coastal plan in the country."
- OK: mais-rigido-reprova: reprova (1) — "The rules are among the toughest anywhere."
- OK: clima-reprova: reprova (1) — "The coast has perfect weather."
- OK: clima-reprova: reprova (1) — "It never gets cold on this coast."
- OK: fogo-destruiu-reprova: reprova (1) — "The fire destroyed dozens of homes."
- OK: fogo-destruiu-reprova: reprova (1) — "No houses were destroyed": a página não mostra destruídas, e "nenhuma" também afirma
- OK: fogo-destruiu-passa: passa (0 alerta[s]) — "destroyed" sem fogo nem casa: passa
- OK: fogo-destruiu-passa: passa (0 alerta[s]) — "The fire threatened hundreds of homes and buildings."
- OK: terceiro-maior-reprova: reprova (1) — "It was the third-largest fire in the state that year."
- OK: terceiro-maior-reprova: reprova (1) — "The Timber Fire was the third largest of the season."
- OK: anos-1880-reprova: reprova (1) — "The coast holds about the same as in the 1880s."
- OK: anos-1880-reprova: reprova (1) — "The population hasn't grown."
- OK: anos-1880-reprova: reprova (1) — "Fewer people live in the district than in the 1880s."
- OK: anos-1880-reprova: reprova (1) — "By the 1880s, nearly a thousand people lived on this coast, about as many as today."
- OK: anos-1880-passa: passa (0 alerta[s]) — "By the 1880s, nearly a thousand people lived on this coast, according to the county's 1986 plan."
- OK: anos-1880-passa: passa (0 alerta[s]) — "hasn't grown back" é a encosta, não a gente: passa
- OK: marianas-no-atlantico-passa: passa (0 alerta[s]) — a regra do vídeo 4 saiu: passa
- OK: 1918-causa-passa: passa (0 alerta[s]) — a regra do vídeo 4 saiu: passa

## Os alertas de Big Sur (nunca reprovam)

- OK: presos-alerta: passa (1 alerta[s]) — "The road was built by prisoners from San Quentin."
- OK: presos-alerta: passa (1 alerta[s]) — "Convicts built the road."
- OK: presos-passa: passa (0 alerta[s]) — com a medida: sem alerta
- OK: proibido-construir-alerta: passa (1 alerta[s]) — "On this coast, you can't build anything."
- OK: proibido-construir-alerta: passa (1 alerta[s]) — "Building is banned along the highway."
- OK: proibido-construir-passa: passa (0 alerta[s]) — a forma da Sala: sem alerta (nem [regra-hoje])
- OK: esselen-alerta: passa (1 alerta[s]) — "The Esselen lived in these mountains."
- OK: falha-alerta: passa (1 alerta[s]) — "An earthquake shook the coast."
- OK: falha-alerta: passa (1 alerta[s]) — "The San Andreas fault runs far to the east."
- OK: cone-peak-alerta: passa (1 alerta[s]) — "Cone Peak rises inside the census district."
- OK: cone-peak-passa: passa (0 alerta[s]) — "Cone Peak rises above this coast."
- OK: regra-hoje-alerta: passa (2 alerta[s]) — "That rule from the 1986 plan still holds."
- OK: regra-hoje-alerta: passa (1 alerta[s]) — "The plan has guarded the views since 1986."
- OK: veraneio-alerta: passa (1 alerta[s]) — "Many of the empty homes are vacation homes."
- OK: veraneio-alerta: passa (1 alerta[s]) — "Some are second homes for city families."
- OK: visitantes-alerta: passa (1 alerta[s]) — "About 3 million visitors drive this road every year."
- OK: visitantes-alerta: passa (1 alerta[s]) — "Millions of tourists pass the bridge."
- OK: visitantes-passa: passa (0 alerta[s]) — com "1986" na frase: sem alerta
- OK: big-sur-tem-alerta: passa (2 alerta[s]) — "Big Sur has fewer than 1,500 people."
- OK: big-sur-tem-alerta: passa (2 alerta[s]) — "Big Sur is home to fewer than 1,500 full-time residents."
- OK: big-sur-tem-passa: passa (0 alerta[s]) — número que não é de gente: sem alerta
- OK: 1500-sem-distrito-alerta: passa (1 alerta[s]) — "Fewer than 1,500 people live on this coast."
- OK: 1500-sem-distrito-passa: passa (0 alerta[s]) — "district" na frase anterior: sem alerta
- OK: 1500-sem-distrito-passa: passa (0 alerta[s]) — "1,500 feet" é medida: sem alerta
- OK: wyoming-ano-alerta: passa (1 alerta[s]) — "In 2025, Wyoming had about six people per square mile."
- OK: wyoming-ano-passa: passa (0 alerta[s]) — "In 2020, Wyoming had about six people per square mile."
- OK: palavra-everyone: passa (1 alerta[s]) — "Everyone on the crew agreed on the count."
- OK: palavra-nobody: passa (1 alerta[s]) — "Nobody on the crew questioned the count."
- OK: palavra-never: passa (1 alerta[s]) — "The crew never questioned the count."
- OK: palavra-first: passa (1 alerta[s]) — "The first count came back at dawn."
- OK: palavra-last: passa (1 alerta[s]) — "Last summer, the crew counted the posts again."
- OK: palavra-always: passa (1 alerta[s]) — "The crew always checked the count twice."
- OK: palavra-mystery: passa (1 alerta[s]) — "The empty coast is no mystery."
- OK: palavra-secret: passa (1 alerta[s]) — "The coast keeps no secret from the map."
- OK: palavra-still: passa (1 alerta[s]) — "The ranches still sell beef."
- OK: palavra-here: passa (1 alerta[s]) — "Out here, the nights are dark."
- OK: palavra-this-line: passa (1 alerta[s]) — "Follow this line to the coast."
- OK: palavras-do-atlantico-sairam: passa (0 alerta[s]) — "Milwaukee Deep", "Brownson Deep", "anomaly" e "megaquake": sem alerta (saíram)

## O gancho A da pauta §8

- OK: gancho-a-como-esta: reprova (1) — o gancho A, como está na pauta, só reprova pelo "But" (não tem frase que abra com "But"), e alerta a 1ª frase sem número, o "here" e o "nobody"
- OK: gancho-a-com-but: passa (3 alerta[s]) — com "But the census district…" na 3ª frase, passa

## O fecho (alerta; fica do molde)

- OK: fecho-repete-pergunta: passa (1 alerta[s]) — "this stretch of california so" (5 palavras da pergunta) na última frase
- OK: fecho-4-palavras: passa (0 alerta[s]) — "this stretch of california": 4 palavras da pergunta, sem alerta
- OK: fecho-pergunta-fora-das-8: passa (0 alerta[s]) — a mesma frase na 9ª antes do fim: sem alerta
- OK: fecho-em-lista: passa (2 alerta[s]) — "First…", "Then…", "Finally…" nas 3 últimas
- OK: fecho-2-da-lista: passa (1 alerta[s]) — duas aberturas de lista: sem alerta
- OK: fecho-em-lista-a-an: passa (1 alerta[s]) — "A …", "A …", "An …" entre as 8 últimas
- OK: fecho-pergunta-curta: passa (1 alerta[s]) — a pergunta do gancho com 3 palavras ("Why so empty?"): ela inteira no fim alerta

## O autoplágio compara também com o roteiro do vídeo 4

- OK: autoplagio-atlantico: passa (1 alerta[s]) — uma frase do roteiro do Atlântico

## O roteiro do vídeo 4 nos dois portões, e o sha

- OK: o portão novo reprova o roteiro do vídeo 4 só pela faixa (1954 palavras), pelo título (2) e pela primeira frase sem "Big Sur" (1): exit 1, 4 problema(s): palavras: 1954, abaixo de 2250 (a faixa do ritmo calmo, do v | "Wyoming" não aparece nas 3 primeiras frases (o título "Why  | "California", "Los Angeles" ou "San Francisco" não aparece n | a primeira frase não diz "Big Sur" (o lugar da imagem de abe
- OK: e alerta o "empty" fora das 3 primeiras (a 1ª frase dele tem número, o 83: sem esse alerta)
- OK: o portão do vídeo 4, no mesmo texto: exit 0 (PASSA)
- OK: as taxas saem iguais nos dois portões (abre_but 0, abre_and 1.03, abre_so 0.52, travessoes 0, perguntas 1.03, frases_curtas 0.52, imperativo_mapa 0, heres 0, antitese 0; 1937 palavras contadas)
- OK: o sha do roteiro do vídeo 4 é o mesmo nos dois portões (ddd4567309e3)
- OK: palavras, parágrafos, frases, média, maior frase e gancho iguais
- OK: o autoplágio é o mesmo nos dois (o novo compara também com o próprio Atlântico, que sai da conta por ser o arquivo medido): 0 trecho(s)
- OK: os alertas do fecho são os mesmos nos dois (0)
- OK: o sha de um texto com BOM, CRLF e comentário de duas linhas é o mesmo nos dois portões e o da base (aa3aa84bf33b)

## O ferramentas/portao-fatos.mjs com o portão novo

- OK: o portao-fatos roda a cópia do portão novo (numa raiz de teste) e o sha cruza: exit 1 (o piso reprova a tabela vazia, de propósito), gate.igual = true

## O arquivo padrão e as opções do molde

- OK: sem argumento, o portão procura roteiros/big-sur/roteiro-narrador.md, que ainda não existe: exit 2, "não encontrado: roteiros/big-sur/roteiro-narrador.md"
- OK: opção desconhecida: exit 2
- OK: --onde: cada taxa traz as frases (abre_so: ["So why is this stretch of California so empty?"])
- OK: --derivados: o laudo com o sha de agora passa, o roteiro-editor.md com o sha velho reprova (exit 1)
```
