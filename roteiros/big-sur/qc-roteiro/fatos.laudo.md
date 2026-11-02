# Laudo · verificador de fatos (independente, da Sala de controle) · reescrita r2, conferência da r2b · big-sur

Revisão julgada: `50c2c56aaefc` · data-base 2026-11-02

COBERTURA: 231 de 232

As 232 linhas de `roteiros/big-sur/qc-roteiro/fatos-tabela.json` têm veredito: 231 "confirmada" e 1 "nao_conferida" (VF12, que vem do r1
e depende da imagem). Nenhuma linha "corrigir": as duas da rodada anterior (VF-R2-01 e VF-R2-02) estão resolvidas no texto. As linhas
cobrem as afirmações checáveis de 147 das 163 frases do texto falado; as outras 16 não afirmam nada checável e estão declaradas uma a uma
abaixo (NADA A CHECAR). O texto foi CHECADO POR INTEIRO: nenhuma frase com fato ficou sem linha.

NOTA: 9.5/10. A lista r2 não pôs fato, número, nome, data nem aspas novos (o aplicador provou: 82 numerais antes e depois, 0 aspas antes
e depois), e as duas frases que o laudo anterior mandou consertar estão consertadas: o "took decades to build" saiu do gancho e o "by the
turn of the century" voltou a "around", como o plano diz. Nenhuma das 18 diferenças diz mais que a fonte. Fica só a VF12, aberta pelo
desenho do pedido. A nota sobe de 9.0 para 9.5: não houve regressão.

## O que foi julgado, e como

- **O texto:** o texto falado inteiro de `roteiros/big-sur/roteiro-narrador.md`, sha256 do texto falado
  `50c2c56aaefce05924e9075fd6fd64a0f8b5d832f87cea2d5c525014106983ae` (o arquivo inteiro: `b0b7234a45a3006dc5cd0b9df9a87a004c94cc0dec3a4717f8cde02355907926`).
  - `node roteiros/big-sur/_ferramentas/gate.mjs`: PASSA, exit 0, 0 problemas. 2.260 palavras, 35 parágrafos, 169 frases pela regex do
    portão (163 pela minha divisão, com o "U.S." protegido), média 13,4 palavras por frase, a maior com 32. O gancho tem 158 palavras até a
    assinatura, com o "But" na palavra 19. Os 4 alertas, julgados como fato (o tom é da Sala):
    - "nobody" ("And it isn't that nobody came."): é negação, e a frase seguinte dá o número com o dono. Passa.
    - "never" (a assinatura): a costa nunca encheu. Passa.
    - "first" ("…designated California's first official scenic highway…"): letra do plano, "Designated in 1965 as the first State scenic
      Highway in California" (P [1291]). Passa.
    - a 1ª frase sem número: voz, não fato.
- **O que mudou desde o texto julgado antes (`4f827c30b9f8`), pelo diff.** Recalculei os dois textos falados (a cópia
  `_trabalho/roteiro-r2b.antes.md` dá `4f827c30b9f8`, o texto julgado no laudo anterior; o `roteiro-narrador.md` dá `50c2c56aaefc`) e
  comparei parágrafo a parágrafo e frase a frase, por script (`…\scratchpad\vf-r2b\diff.mjs`):
  - 35 parágrafos nos dois; **18 parágrafos são idênticos byte a byte** e 17 mudaram.
  - Nos 17, as frases que saem e entram são **exatamente as 18 diferenças** que o aplicador registrou (`_trabalho/aplicado-r2b.md` §5),
    e nada mais: as outras frases desses parágrafos ficam iguais e na mesma ordem. O `diff -u` do arquivo (§5 do mesmo registro) mostra
    as mesmas linhas.
  - Nenhum número, data, nome próprio ou aspas entrou ou saiu fora do que as frases abaixo mostram (prova (b) do aplicador: 82 e 82;
    prova (a): 0 e 0).
- **A tabela:** 38 linhas da tabela anterior casavam com frases que mudaram. 33 ganharam a frase nova, com o trecho relido na cópia e a
  afirmação reescrita para a forma nova (`origem`: "r2b, frase mudou de forma; trecho relido"). 5 saíram, porque a frase delas saiu sem
  deixar afirmação: R015 (o "took decades", VF-R2-01), R062, R063 e R064 (o "Not the weather" e o clima ameno, que já estão em R007, R008,
  R059 e R060) e R190 (os bombeiros feridos). As outras 199 linhas ficaram como estavam, porque a frase delas está inteira no texto de hoje.
  Os ids não se renumeram. A tabela anterior ficou em `…\scratchpad\vf-r2b\fatos-tabela.antes-r2b.json`; a atualização é o script
  `…\scratchpad\vf-r2b\atualizar-tabela.mjs`.
- **Como a lista foi derivada: à mão, por leitura integral**, como na rodada anterior (o canal não tem extrator para o big-sur). As 163
  frases de hoje, divididas em ". ", "? " ou "! " antes de maiúscula e com o "U.S." protegido, foram contadas por script
  (`…\scratchpad\vf-r2b\cobertura.mjs`): 147 têm linha na tabela, e as 16 sem linha são as da lista NADA A CHECAR, abaixo.
- **Contra o quê:** o plano de 1986, pela cópia `midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm` e o
  `pautas/big-sur/_trabalho/scripts/plano_trecho.py` (P [65]–[71], [185]–[190], [226]–[232], [1290]–[1302], [1478]–[1488], relidos hoje);
  as medidas `fatos-medidas.txt` (M01–M20) e `fatos-medidas-r2.txt` (M21); as cópias da Caltrans e do USGS já no disco.
- **A rede:** nenhum pedido. Toda frase nova se apoia em cópia que já estava no disco. Nenhum crédito foi gasto.

## As frases que mudaram, uma a uma

Cada frase nova foi lida contra o trecho da linha dela. A pergunta, em todas: a forma nova diz mais que a fonte?

**As duas trocas de fatos**

- **VF-R2-01 · gancho, p3 · RESOLVIDO (por outro caminho).** Era "A road that took decades to build, and keeps giving way, is another.", e
  o conserto pedido era "nearly two decades to build". A lista (L03) fez outra coisa: a frase virou "Part of the answer is what you'd
  expect: mountains, and a road that keeps giving way.", **sem duração nenhuma**. A hipérbole saiu, e não sobrou número para medir. O
  "keeps giving way" continua confirmado (R016 Paul's Slide 2023–2024, R017 Mud Creek 2017, R018 o aviso da Caltrans de 14/01/2026), e
  "mountains" com P [70] (R014). A duração da obra fica só no p17, que não mudou: "Work on the coast highway began in 1919, according to
  the Federal Highway Administration, and it took nearly two decades." (M21: de 1919 a 27/06/1937, 18 anos, 1,8 década; a FHWA conta
  "nineteen years", 1,9 década). A R015 saiu da tabela.
- **VF-R2-02 · p16 · RESOLVIDO (a troca literal).** "Even so, around the turn of the century, visitors could already come by stagecoach
  from Monterey to camp in the redwoods." O plano: "Around the turn of the century, limited recreational use of the coast began to take
  place. The Big Sur Valley could be reached by stage from Monterey and camping in the redwood groves grew in popularity" (P [1485]–[1486]).
  O "already" fica relativo à estrada perigosa da frase anterior, sem pôr data antes de 1900. R106 passa de "corrigir" a "confirmada"; R107
  segue confirmada.

**As do ouvinte (e a L17, da observação deste laudo)**

- **p2 · "It isn't a harsh climate."** (L01; R007) Confirmada. O plano: "The climate in Big Sur is mild" (P [65]); o clima não está entre os
  limites (P [71]). "Not harsh" não diz mais que "mild". É, aliás, mais justo que o "It isn't the weather" de antes, que soava contra a
  chuva e o fogo da lista do próprio plano.
- **p2 · "So why didn't it fill up?"** (L02; R013) Confirmada como pressuposto: quase mil nos anos 1880 (P [1481]) e 1.474 no distrito em
  2020, 5,86 por mi² (M01, M02). "Didn't fill up" não diz que a população parou nem caiu.
- **p3 · "Part of the answer is what you'd expect: mountains, and a road that keeps giving way."** (L03; R014, R016–R018) Confirmada. Acima.
- **p3 · "The rest is less obvious."** NADA A CHECAR (ponte).
- **p3 · "There's a rule in that plan about building anything you could see from the road."** (L03; R019) Confirmada. Saiu só o "also" (P [226]).
- **p4 · "Let's start with the district's number, because it's easy to hear it wrong."** (L04) NADA A CHECAR. O "district's" é verdadeiro: o
  1.474 é do distrito (M01).
- **p5 · "It takes in roughly two-thirds of the Big Sur coast and the mountains behind it, from a few miles south of Carmel, past this bridge,
  and a long way down the shore."** (L05; R026–R029) Confirmada. Os dois terços são da costa, pela latitude (M13: 33,8 de 52,9 mi, 0,64); o
  ponto norte fica 5,0 mi ao sul de Carmel-by-the-Sea (M11); a ponte de Bixby e o Ventana Double Cone caem no distrito (M10); a terra dele
  chega à costa até 35,99 N. Observação sem troca: a frase pode ser ouvida como "dois terços da costa e da serra", e a serra não tem medida
  própria; mas a serra do distrito é a que fica atrás do mesmo trecho de costa (a mesma faixa de latitude), e a frase não fala de área.
- **p7 · sai "With that settled, let's try something."** (L06) Era NADA A CHECAR.
- **p9 · "Mostly, that means Highway 1."** (L07; R052) Confirmada. "Highway 1 along the Big Sur coast is the basic access route to the
  area" (P [1291]); o "mostly" cabe na frase seguinte (a única outra estrada de 1986, a Nacimiento-Fergusson, P [1293]). O presente
  continua verdadeiro em 2026.
- **p9 · "It isn't. The supply is relatively small and seasonal, and the animals, the plants and the people all share it."** (L08; R057,
  R058) Confirmada. "The relatively small seasonal water resources that support the present population of animals, plants and humans"
  (P [188]). O "relatively" fica. O dono saiu da voz e vai ao crédito da tela (`Source: Monterey County, Big Sur Coast Land Use Plan,
  1986`, no `roteiro-editor.md`); a água é fato físico, e o presente não envelhece no prazo do vídeo. Isso vale também para as duas frases
  seguintes, iguais às de antes ("Winters bring some of the heaviest rainfall in California." / "Summers are long and dry.", R059, R060,
  P [66]): o laudo anterior dizia que o dono delas vinha da frase "The plan calls…", que saiu; agora o dono é o mesmo crédito da tela.
- **p10 · saem "Not the weather." e "The winters are wet, the summers are dry, and the climate, in the county's own word, is mild."** (L09)
  Nenhum fato se perde: o clima ameno está no p2 (R007, R008) e as estações no p9 (R059, R060). R062–R064 saíram da tabela. A frase que
  fecha o parágrafo, "What's scarce is ground you can build on, and a way to reach it." (R065), fica logo depois da lista do plano (P [71]),
  e continua resumindo-a sem dizer mais.
- **p13 · "How did anyone make a living on this coast?"** (L10; R087, movida do p14) Confirmada como pressuposto: "Subsistence ranching,
  logging of redwoods, harvesting of tan bark, and mining of limestone and gold provided a livelihood for early residents" (P [1480]). A
  resposta é a frase que abre o p14 ("They ranched, mostly to feed their own families."), igual à de antes.
- **p14 · sai "Because people did come."** (L11) O fato dela (o sustento) passou à pergunta do p13; o "people came" segue no p2 ("nearly a
  thousand people", P [1481]) e no p14 ("By the 1880s, nearly a thousand…", R092).
- **p20 · "In 1965, this stretch was designated California's first official scenic highway, and in the 1980s, the county estimated, nearly
  all of its summer traffic was recreational."** (L13; R133–R135) Confirmada. P [1291] e P [1300] ("Recreational traffic is estimated to
  comprise 95% of all trips during the peak summer months"). "In the 1980s" é a década da estimativa (o plano foi aprovado em 05/11/1985 e
  certificado em abril de 1986, M18): mais justo que o "by the 1980s" de antes. O dono do 95 % continua na voz, como verbo.
- **p20 · "That left the county with a harder question than how to get people in: how much of this coast should be built on."** (L14;
  R136) Confirmada (ponte; P [1341], a capacidade da estrada como limite). Sem o "at all", diz menos.
- **p21 · "Everything in sight of those places got a name: the critical viewshed."** (L15; R142) Confirmada. "Critical viewshed:
  everything within sight of Highway 1 and major public viewing areas" (P [229]–[230]). No passado, como a Sala pede (a regra não se diz
  vigente); a frase não diz quando o nome nasceu, e o parágrafo já data a regra em 1986.
- **p24 · "In 1986, it estimated nearly three million visitors a year, and expected that to double over the next 20 to 25 years."** (L16;
  R155, R156, R158) Confirmada. "At present, an estimated 2.9 million people visit the Big Sur coast annually and demand is predicted to
  double over the next 20 to 25 years" (P [1298]).
- **p24 · "Traffic jams on Highway 1 were already a problem."** (L16; R157) Confirmada. "…the resulting traffic congestion on Highway 1"
  (P [1296]), no presente do plano. Sozinha e sem o "noted", a frase fica no passado e no tempo da frase anterior ("In 1986"): não diz nada
  do trânsito de hoje. O "already" é o do plano, que trata o congestionamento como fato presente em 1986.
- **p25 · "The rule didn't empty this coast."** (L17; R162) Confirmada. Era a observação deste laudo ("by itself" pressupunha que a regra
  ajudou a esvaziar); a forma estreita é a do r1, já confirmada, e a frase seguinte ("It was thinly settled long before 1986.") a
  sustenta (P [1523]–[1524]; P [226]). **Observação resolvida.**
- **p25 · "And then came the years when the trouble was keeping that road open."** (L18; R167) Confirmada. Sem o "at all", diz menos.
- **p26 · "Regent's kept the road shut."** (L19; R173) Confirmada. Regent's Slide (09/02/2024) só reabriu ao meio-dia de 14/01/2026
  (Caltrans). "Shut" é o mesmo fato que "cut".
- **p28 · sai "Firefighters were hurt fighting it."** (L20) Era confirmada (R190, "3 Confirmed Firefighter Injuries"); sair não deixa nada
  falso nem sem dono. O fogo segue sem número, sem "destroyed", como a Sala decidiu.
- **p35 · "Part of that is the mountains, and part of it was a choice." / "In its 1986 plan, the county wrote that whatever came next should
  stay out of this view."** (L21; R229–R232) Confirmadas. Só a quebra no dois-pontos: P [70] e P [226] ("prohibit all future public or
  private development visible from Highway 1 and major public viewing areas"), com o Bixby Creek Turnout entre os mirantes (P [230]).

## ACHADOS

**Resolvidos nesta conferência**
- **VF-R2-01 [LEVE]** ("took decades to build", p3): resolvido pela L03, que tirou a duração do gancho. A troca proposta ("nearly two
  decades") não entrou, e não precisa: a frase de hoje não diz duração.
- **VF-R2-02 [LEVE]** ("by the turn of the century", p16): resolvido pela L12, com a troca literal ("around").
- **A observação sem troca do "by itself"** (p25): resolvida pela L17.

**Novos:** nenhum. As 18 diferenças foram lidas contra o trecho, e nenhuma diz mais que a fonte.

**Aberto, do r1**

**VF12 [LEVE] · p35 · PEDIR (veredito: nao_conferida) · linha R228**
- **A frase:** "Hardly a house is in sight." (igual à de antes)
- **O problema:** nenhuma fonte descreve a vista do Bixby Creek Turnout, e o plano lista Bixby Canyon entre as áreas residenciais (P [1536]).
  A frase só é verdadeira se a imagem sob ela não mostrar casa.
- **TROCA:** é o pedido à regência e ao `conferente-de-midia`: a vista a partir do Bixby Creek Turnout, sem casa à vista. Se a imagem
  escolhida mostrar casa, entra "From this turnout, the slopes look almost untouched." (ENFRAQUECER), que também depende da imagem.
- **RAIZ:** PONTUAL.

**O outro pedido que continua com a Sala (fora da tabela, porque o texto de hoje não o diz):** A1, a fala do Kirk Gafill palavra por
palavra. A frase de hoje é a paráfrase ("he said his business, his staff and the community were recovering from those years", R181–R183,
p27, iguais às de antes). A citação da nota da Caltrans de 15/05/2026 traz "rapidly" e "three-year closure", que a paráfrase não diz: se a
Sala trocar, a frase nova passa por este laudo antes da voz.

## Confirmadas com observação (não pedem troca)

- **p5, os dois terços e a serra** (R028, R029): acima. A frase não fala de área.
- **p9, o dono da água e das estações no crédito da tela** (R057–R060): acima.
- **p24, os congestionamentos no passado** (R157): acima.
- **"That's federal land, owned by the U.S. Forest Service, and in the wilderness, the plan limits land use to backcountry recreation."**
  (R068, R069; igual) "Land uses permitted in the Ventana Wilderness portion of the National Forest are limited to backcountry recreation"
  (P [1641]). O presente "limits" é o do documento, com o dono na voz (a lista r2 deixou o dono de propósito, A6 (3)).
- **"So when a number comes from the plan, it's a number for that bigger coast, and you'll hear which is which."** (R041; igual) A promessa
  se cumpre na voz ou no crédito: os quase mil ("That's the plan's count"), a metade federal ("the land in the county's plan"), os 2,9
  milhões ("In 1986, it estimated"), o 95 % ("the county estimated"), os 15 % e os US$ 8 milhões ("The county's plan puts the cost").
  Os números do plano que perderam o dono na voz nesta rodada (o "relatively small" da água) não são números.
- **"They stop, they look, and then they drive on."** (R216, R217; igual) A cena se apoia no plano (P [1302]; os "turnouts", P [230]), de 1986.
- **"And there are the homes that do stand along this coast, and often sit empty."** (R020, R021; igual) Os números (345 de 887; 265 de 285
  de temporada) são do distrito, e o p30 diz a régua.
- **"The Pfeiffers did, and so did Charlie Bixby; the bridge at the start of this video carries his name."** (R095 a R097; igual) A mesma
  inferência declarada do r1.
- As observações do r1 sobre frases iguais continuam valendo (o "hold" dos 17 milhões, a safra 2025; o Wyoming na base de 2020; o "In
  1986, it estimated…", com os "at present" do plano escritos entre 1981 e 1985).

## As armadilhas, conferidas no texto de hoje

- **O universal:** "only Alaska" (M07), "just one other road" (1986, P [1293]), "every one of them" (os riachos; 33 pontes, FHWA), "nearly
  all of its summer traffic" (95 %), "only about a third" (33 %, M15), "the most populous" (M08). Nenhum passa do trecho. O "Mostly" do p9
  não é universal.
- **A hipérbole:** a do gancho saiu (VF-R2-01). "Rise straight out of the surf" passa (P [53]). "A road you could count on in every season
  was decades away" (p16, igual): de ~1900 a 1937, mais de três décadas; passa.
- **O ano derivado:** "nearly two decades" (M21, p17, igual); "in the 1980s" (M18, agora mais justo); "around the turn of the century" (P
  [1485], agora literal); "only months after the long closures … had ended" (14/01 a 08/08/2026).
- **O período:** 2020 (o censo) × ACS 2020–2024 × 1986 (o plano) × anos 1880 × 1919, 1934, 1937, 1965 × 2017, 2023, 2024, 2026. Cada
  número com o seu. O deslize do "by the turn of the century" foi consertado.
- **O presente que pede data:** o "Mostly, that means Highway 1" e o "The supply is relatively small and seasonal" estão no presente e
  continuam verdadeiros (estrada e água); "By mid-October, it was almost fully contained" e "By November 2026, the road was open…" estão
  datados; o "Traffic jams … were already a problem" está no passado de 1986. Nenhuma frase diz que a regra de 1986 vale hoje ("got a name",
  no passado).
- **As réguas:** o 1.500 sempre com "the census district"; os quase mil com "That's the plan's count, and it's a count for the whole
  coast"; os dois terços com "the Big Sur coast" e o "district's number" no p4; as casas em duas réguas; os 2,9 milhões "in 1986".

## As decisões da Sala, conferidas no texto de hoje

Todas continuam cumpridas: o 1.500 sempre com "the census district" e sem milhagem na frase; "about six people per square mile", 2020 com
2020; as metrópoles pelo nome, com "metro areas", sem "largest"; os anos 1880 atribuídos ao plano e ditos da costa; 1919 com a FHWA, 1937
e os US$ 8 milhões com o plano, os presos com a medida; a regra no passado, os 15 %; Paul's, Regent's, a reabertura e os quase US$ 83
milhões; o fogo em palavras, sem número, sem "destroyed", com o Plaskett só pelo nome (e, agora, sem os bombeiros feridos); as casas em
duas réguas; os 2,9 milhões com o ano e "the visitors came back" sem número; nada de preço, mansões, Esselen, falha, neblina,
"strictest", "emptiest", "the only road" nem "it hasn't grown" ("So why didn't it fill up?" não diz que parou).

## NADA A CHECAR (16 frases, declaradas)

São perguntas, pontes e o fio em segunda pessoa, sem fato:
- p1: "Why?"
- p3: "The rest is less obvious."
- p4: "Let's start with the district's number, because it's easy to hear it wrong."
- p7: "One more outline, and then we can get going."; "Say you wanted to move to this coast."; "Not visit."; "Move."; "Where would you put
  the house?"
- p8: "Picture it."
- p9: "Then you need a way in."
- p11: "And suppose you did find your patch of flat ground."
- p17: "Think about what that road had to do."
- p26: "So how long can a coast like this go without its road?"
- p30: "So go back to the house you were trying to build."
- p32: "Then there are the visitors, the other side of the count."
- p33: "So how empty this coast is depends on what you count."

Saíram desta lista, porque a frase saiu ou mudou: "With that settled, let's try something.", "Which raises a fair question.", "Why did
anyone come at all?" e a forma antiga do p4. A pergunta nova do p13 ("How did anyone make a living on this coast?") tem linha (R087), pelo
pressuposto.

## Voláteis que ficaram na fala

- **A estrada aberta, com mão única em obras** ("By November 2026, …"): relê-se na Caltrans (roads.dot.ca.gov) antes da publicação. As
  restrições lidas em 01/11 iam até 13/11, 30/11 e 31/12/2026. Um fechamento novo a torna falsa; o fim das obras não.
- **O fogo quase contido em meados de outubro:** datado.
- **Os mais de 17 milhões:** a safra 2026 sai em 2027; só a zeraria uma queda de mais de 470 mil.
- **"Kirk Gafill owns the Nepenthe restaurant":** o presente de maio de 2026; muda só se o restaurante mudar de dono.
- **"a road that keeps giving way"** (o presente habitual do gancho): confere com a série 2017–2024 e com o aviso da Caltrans; não envelhece mal.
- **"Mostly, that means Highway 1"** e **"The supply is relatively small and seasonal"**: presentes que não mudam no prazo do vídeo.

## A lista de nomes

O roteiro não tem fonte anônima. Os nomes que ficaram, com a credencial que a fonte dá: John Pfeiffer (P [1235]); Charlie Bixby e os
Pfeiffer (P [1203]); Kirk Gafill, "owner of Nepenthe restaurant in Big Sur" (Caltrans, 15/05/2026). O pesquisador do USGS ficou sem nome
na voz ("a researcher with the U.S. Geological Survey"): é Shawn Harrison, "USGS Mendenhall researcher" (USGS, a nota de Mud Creek), para o
crédito da tela, se a cena usar o vídeo dele.

## Os 2 padrões mais vistos

1. **O conserto por subtração resolve o fato junto com o ritmo** (VF-R2-01, L17): tirar a palavra que dizia demais ("decades", "by
   itself") foi mais seguro que medi-la. Quem enxuga a frase confere que o fato que sobra não muda de régua.
2. **A fonte que sai da voz leva o tempo com ela** (L08, L15, L16): quando o "the plan calls" ou o "noted" saem, o presente do documento
   vira presente do narrador. Nesta rodada, nenhum deslize: a água não muda, o viewshed foi para o passado e os congestionamentos ficaram
   presos ao "In 1986". É a coisa a olhar na próxima subtração.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Onde gravar os laudos de fatos dos próximos vídeos. Segui a tarefa: `roteiros/big-sur/qc-roteiro/`.

## Os portões, depois de gravar

- `node ferramentas/portao-fatos.mjs big-sur` (02/11/2026): `portão de fatos — big-sur: PASSA`, exit 0. O sha12 é `50c2c56aaefc`, igual ao
  do gate.mjs, com 35 parágrafos, COBERTURA 231 de 232 e VEREDITO RESSALVA. Antes do laudo novo, com a tabela já atualizada, ele só
  apontava o sha e a cobertura deste arquivo (as 38 linhas de frase velha que ele reprovava antes estavam resolvidas).
  - O portão prova que cada trecho existe na cópia. Que o trecho sustenta a frase é o que este laudo julga.
- `node roteiros/big-sur/_ferramentas/gate.mjs --derivados`: exit 0, PASSA; os dois derivados (`qc-roteiro/fatos.laudo.md` e
  `roteiro-editor.md`) citam `50c2c56aaefc`.

VEREDITO: RESSALVA
