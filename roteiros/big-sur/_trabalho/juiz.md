# O juiz dos dois planos — vídeo 5 (`big-sur`)

> 02/11/2026. O juiz é um subagente da Sala de controle. A decisão de escrever com este plano é da Sala, e o "sim" ao roteiro é do Lucas.
> O plano final está em `roteiros/big-sur/_trabalho/plano-final.json`, no formato dos planos e no do plano final do vídeo 4, com o esqueleto
> medido dentro.

## O que o juiz leu

- **Os dois planos, inteiros:** `plano-vazio.json` ("o vazio medido") e `plano-estrada.json` ("a estrada"). Também li o esqueleto do "a
  estrada", que ficou no scratchpad do planejador.
- **O dossiê:** a pauta aprovada (`pautas/2026-11-01-video-5-big-sur.md`), inteira: o §1, o §3, o §4 com o grau e o "Na fala" de cada
  fato, o §5, o §6, o §7, o §8, "Depois do sim" (DS1–DS5) e "O cético" (K1–K7).
- **As cópias locais das fontes** (`midia/big-sur/fontes/`).
  - Cada trecho do plano de 1986 que o plano final usa foi conferido na cópia `bigsur-lup-1986-govinfo.htm` pelo `plano_trecho.py`. O
    plano final cita o índice da frase como P [n].
  - Entre os trechos conferidos: o mirante de Bixby Creek na definição do "critical viewshed" (P [230]), o teste da visão (P [264]), o
    "Dr. John Roberts" (P [1227]–[1228]), a estrada Nacimiento–Fergusson (P [1293]), o "less than a day's drive" (P [1294]), os 95 % de
    viagens de recreação (P [1300]), as casas "scattered along Highway 1" (P [1493]), a falta de casa para quem trabalhava na costa
    (P [1547]–[1548]) e a posse do Forest Service (P [2880]).
  - As leituras da Sala de 02/11 (`leituras-sala-2026-11-02.md`): o CAL FIRE, a Caltrans e a ACS.
- **O resto:** o teste dos leitores a frio; a marca (`voz.md`, `embalagem.md` §1, §1.1 e §2, `cta.md` §1–§3 e §5–§7, `identidade.md` §5);
  `sala/do-video-5-em-diante.md`; o ofício do roteirista da pré-v1; o plano final e o juiz do vídeo 4 (o formato).
- **O portão** (`roteiros/big-sur/_ferramentas/gate.mjs`): li o topo e as listas (NAO_SE_DIZ, ALERTA_BS, ALERTA). A prova
  (`gate-provar.mjs`) saiu 0 antes de qualquer medida.

## Os ganchos, medidos no portão

Cada gancho foi copiado do plano para um arquivo à parte, em `out/_tmp/gate-big-sur/` (`juiz-gancho-vazio.md`, `juiz-gancho-estrada.md`
e `juiz-gancho-final.md`), e rodado no `gate.mjs`. Isolado, todo gancho reprova só pelo total de palavras, porque é um trecho, e estoura
as taxas por mil palavras, porque tem 13 frases em ~134 palavras. Nada disso conta. O que conta:

| Plano | Palavras até a assinatura | "But" na palavra | "Why?" (texto / voz) | Pergunta do gancho (a última antes da assinatura) | Alertas que contam | Autoplágio |
|---|---|---|---|---|---|---|
| o vazio medido | 134 | 19 | 35 / 36 | "So why didn't more follow?" | "nobody", "never" (assinatura), 1ª frase sem número | nenhum |
| a estrada | 134 | 19 | 35 / 36 | "Why?" | "nobody", 1ª frase sem número | nenhum |
| **o plano final** | **134** | **19** | **35 / 36** | "So why didn't more follow?" | "nobody", "never" (assinatura), 1ª frase sem número | nenhum |

- **As três primeiras frases e o "Why?" são iguais nos dois planos, palavra por palavra:** o gancho A da pauta, com o "But" na frase da
  surpresa e "Their metro areas" no lugar de "Those two metro areas".
- **O "Why?":** cai na palavra 36 da voz se a cópia para a voz escrever "fifteen hundred": 14,4 s a 150 palavras/min. Com "one thousand
  five hundred", cai na 38, a 15,2 s. A troca de Big Sur tem de ser "fifteen hundred".
- **Uma correção a um relato:** o "a estrada" dizia o "But" na palavra 20, e o portão o põe na 19.
- **Os dois esqueletos, remedidos pelo juiz, passam e batem com os relatos:**

| Plano | sha12 do texto falado | Palavras | Frases | Média | Maior | Alertas | Autoplágio |
|---|---|---|---|---|---|---|---|
| o vazio medido | `77131c69660d` | 2.330 | 191 | 12,2 | 23 | 6 | nenhum |
| a estrada | `683744c95168` | 2.337 | 181 | 12,9 | 28 | 2 | nenhum |

## As notas

| Critério | o vazio medido | a estrada |
|---|---|---|
| O gancho (cinco tempos, o título nas 3 primeiras frases, a pergunta antes de ~15 s) | **8,5** | 7,5 |
| A espinha (cada parte paga uma promessa e empurra a próxima) | 7,5 | **8,5** |
| A fidelidade à pauta (o que ela sustenta, as atribuições, as decisões da Sala) | **8,0** | 7,0 |
| O espaço (o mapa, o distrito demarcado, a animação sobre o mapa) | 8,5 | **9,0** |
| O ritmo calmo para 13 a 15 min | **8,0** | 7,5 |
| A presença | 8,0 | 8,0 |
| Os avisos dos leitores | **9,0** | 8,5 |
| O fecho | 7,0 | **9,0** |
| **Soma** | **64,5** | **65,0** |

### O porquê de cada nota

#### O gancho

- **Os tempos 1 a 3 são iguais nos dois.** O que decide é o 4º tempo, a segunda virada, e a assinatura.
- **O "vazio":** o fato inesperado (quase mil pessoas nos anos 1880) vira a pergunta do vídeo, "So why didn't more follow?", como o molde
  do Geoff manda. Depois vem "The mountains are only part of it", que já responde ao aviso dos leitores. A resposta anunciada tem a
  estrada, a regra e as casas vazias, e cada uma se paga num ato.
- **O "a estrada"** tem duas frases muito boas: "Their goods left by boat." e "What they lacked was a road that stayed open all year.".
  Mas tem três problemas:
  - a virada não vira pergunta: a única pergunta é o "Why?";
  - a resposta anunciada é quase só a estrada, e o hook não fala das casas vazias;
  - a assinatura, "the story of this coast and its road", faz da estrada o tema do vídeo. É o assunto de todos os concorrentes de 2026,
    e a pauta §9 diz que a estrada é "um dos três porquês, nunca o assunto". O "keeps falling", no presente, também passa perto de
    previsão.
- **Um defeito do "vazio", consertado no final:** a regra no presente ("a rule about what can be built in sight of it").

#### A espinha

- **O "a estrada" tem a cadeia causal mais limpa:** sem estrada, depois a obra, a estrada que traz visitantes, o plano que raciona a
  estrada, a regra da vista, a estrada que cai, as casas e o fogo. Cada ponte sai da anterior.
- **O "vazio" segue o contrato da pauta §3** (a física, a história e o hoje), mas tem três defeitos:
  - o p1 é longo e meta ("Every number we give for the census district is about the outline on this map, and nothing wider");
  - p6 abre num salto de volta a 1934, logo depois da pergunta dos anos 1980;
  - o fecho muda de assunto: dos carros para os nomes no mapa.
- O detalhe está na nota da dobradiça, abaixo.

#### A fidelidade à pauta

Os dois respeitam a maior parte das decisões da Sala. Os desvios:

- **O "vazio"** tem desvios pequenos e de frase, todos consertáveis sem mexer na estrutura:
  - "There's plenty of it running in the wet months" (a pauta §4.2 diz: nunca "plenty of water");
  - a regra no presente, no gancho;
  - "They're scattered along the ridges…", dito de 2020 sem fonte (a fonte é de 1986);
  - "the main pockets of homes and shops", que estica o plano (P [1537]), com Gorda, que fica fora do distrito;
  - o O4, de 1976, com "second home": uma terceira régua, e o portão alerta [veraneio];
  - "for the leather trade" e "run by the federal government", que não estão no plano;
  - o CAL FIRE sem nome na voz.
- **O "a estrada"** tem dois desvios contra decisões explícitas:
  - o fogo com números na voz: "nearly 40 square miles", uma conta dele, e "Three firefighters were injured". A Sala quer o fogo em
    palavras;
  - a estrada como espinha e como tema da assinatura, contra a pauta §9.
- **O "a estrada" também tem riscos menores:**
  - os bombeiros de Carmel Hill "slow to arrive" em 1986, ditos logo antes do fogo de 2026: a montagem sugere uma resposta lenta em
    2026, o que nenhuma fonte diz, e pesa no tom;
  - a definição do Coastal Act e o "for tanning leather", fora do dossiê;
  - "Very few of them were for sale or for rent", sobre margens maiores que as estimativas (ele mesmo marcou).
- **Os 27 trechos novos do plano que o "a estrada" listou estão na cópia local.** Conferi os que o plano final usa.

#### O espaço

- **O "a estrada"** traz o melhor programa visual:
  - os mirantes que a regra nomeia acendendo, com o anel em Bixby Creek Turnout;
  - o perfil da encosta com a estrada como prateleira, que volta três vezes;
  - a faixa de capacidade em 100 casas;
  - as setas das metrópoles "a menos de um dia de carro";
  - Mud Creek e Ragged Point marcados fora do distrito.
  - Perde meio ponto pelo "círculo declarado ≈ 40 SQ MI" do fogo: uma área desenhada sem geometria lida.
- **O "vazio"** tem a régua desenhada (os três quadrados), o polígono a cada número do distrito, a costa do plano em tracejado próprio,
  os barcos sobre o mapa e o cone de visão.
- **O plano final leva os dois.**

#### O ritmo calmo

- **O "vazio":** média 12,2, a maior frase com 23 e o fogo sem número. Mas as perguntas estão a 0,11 do teto (são 5), e os "So" são 7.
- **O "a estrada":** média 12,9, a maior frase com 28. O p6 e o p8 são densos de número e de data. O p8, por exemplo, tem August 2026,
  August 8, 2026, 40 sq mi, August 11, three firefighters, late October e November 1, 2026. O p4 tem quase 300 palavras de política
  de estrada.

#### A presença

Os dois usam a mesma gente documentada: os colonos com nome, Notley, Manchester, os guias, Doctor John Roberts, os presos, os colonos
furiosos, os trabalhadores de 1986, Shawn Harrison, as equipes da Caltrans, os bombeiros e os aviões-tanque. Empate.

#### Os avisos dos leitores

- **O "vazio" cumpre os três com sobra:**
  - o distrito dito e demarcado;
  - a virada além de "montanha", que é a régua: "depends on what you count";
  - os turistas em cinco partes.
- **O "a estrada"** tem o fio dos turistas mais forte e diz o distrito em menos palavras. Mas a resposta dele além de "montanha" é "a
  estrada", e corre o risco de soar como os vídeos da estrada.

#### O fecho

- **O do "a estrada" é o melhor do par:**
  - o mirante de Bixby Creek está na lista do plano de 1986, e a imagem de abertura é um dos lugares que a regra protege;
  - "Hardly a house is in sight. Part of that is the mountains, and part of it was a choice." diz a resposta numa cena, sem lista e sem
    repetir a pergunta;
  - as duas cifras do gancho voltam espelhadas.
- **O do "vazio"** é um passeio pelos nomes, com uma frase mole ("In between, the road winds past ridges, canyons, forest and parks").
  A última frase paga o título, mas a resposta não está na cena.

## O vencedor: "o vazio medido", com enxertos do "a estrada"

A soma dá meio ponto ao "a estrada", e o vencedor é o "vazio". O porquê:

- **As notas em que o "a estrada" perde são de estrutura e de desobediência:**
  - o fogo com número, contra a decisão da Sala;
  - a estrada como assunto e como tema da assinatura, contra a pauta §9;
  - a física comprimida, contra o contrato da pauta §3 (a serra e a metade pública ficam espalhadas entre p1, p5 e p6);
  - o gancho sem a segunda pergunta.
  - Para consertar isso, seria preciso refazer o gancho e as partes p1 a p6 dele. Isso não é enxerto, é outro plano.
- **As notas em que o "vazio" perde são de acabamento:** o p1 meta, duas dobradiças e o fecho. As peças do "a estrada" consertam cada
  uma:
  - a abertura do p1 ("The census doesn't count a town called Big Sur");
  - a venda de Pfeiffer no meio da obra, que conserta a dobradiça p5 → p6;
  - a frase do tom depois do fogo, que conserta p7 → p8;
  - o mirante de Bixby Creek, plantado em p6 e pago no fecho, que conserta p8 → p9 e o fecho.
- **O resultado:** o plano final fica com o contrato e a régua do "vazio" e com o fecho e a maior parte do programa visual do "a
  estrada".

## A nota da dobradiça

A pergunta de cada passagem: o que o roteiro acabou de estabelecer sustenta isto?

### o vazio medido

| Passagem | Sustenta? | Por quê |
|---|---|---|
| gancho → p1 | sim | "So why didn't more follow?" pede o porquê, e o p1 abre na régua ("Start with what the census actually measured"). Adia a resposta ~220 palavras, mas o aviso dos leitores pede o distrito claro antes. |
| p1 → p2 | sim | "start with the ground itself" → "So what makes this ground so hard to live on?" |
| p2 → p3 | sim | "who owns the land, and what happened on it" → a metade pública. O "what happened" se paga em p4–p5. |
| p3 → p4 | sim | "people made a living on this coast" → "So how did they do it?" |
| p4 → p5 | sim | "A road you could count on in every season was decades away" → a ideia de Roberts. |
| p5 → p6 | em parte | "a harder question for the county, about how much of this coast should be built on at all" → "Protection had started even before the highway was finished. In 1934…". Volta 50 anos logo depois da pergunta dos anos 1980, e a resposta só chega na 6ª frase. |
| p6 → p7 | sim | "keeping that road open at all" → "when its road breaks?". Paga a planta de p3. |
| p7 → p8 | em parte | "Through all of it, there were homes on this coast. The question is who was living in them.": logo depois do fogo, soa como dúvida sobre quem acabou de passar por ele (o tom que a Sala pediu). |
| p8 → p9 | em parte | Da régua dos carros aos nomes no mapa ("On a map of this coast, the original homesteaders are easy to find"): o fecho volta a p4 em vez de sair de p8. |

### a estrada

| Passagem | Sustenta? | Por quê |
|---|---|---|
| gancho → p1 | sim | O "Why?" e a estrada anunciada → "The census doesn't count a town called Big Sur": a régua primeiro, curta. |
| p1 → p2 | sim | "faced the other way, out to sea" → do que viviam, pelo mar. A figura se paga na 2ª frase. |
| p2 → p3 | sim | "Turning that idea into a road took nearly two decades" → "work began in 1919". |
| p3 → p4 | sim | "The question was who it would bring" → "Mostly, it brought visitors." |
| p4 → p5 | sim | "A second rule decided where" → "That second rule was about the view." |
| p5 → p6 | em parte | "That road, though, runs across ground that moves" → p6 abre na lista de limites do plano (água, acesso…), e a terra que anda só chega na 6ª frase. |
| p6 → p7 | sim | "occasional full closures" → "Within months, the visitors were back." |
| p7 → p8 | sim | "some people own a house on this coast and don't live in it" → "In August 2026, the road closed again, for a different reason" (de volta ao fio da estrada). |
| p8 → p9 | sim | A estrada reaberta → o mirante de Bixby Creek. |

### o plano final

| Passagem | Sustenta? | Por quê |
|---|---|---|
| gancho → p1 | sim | O gancho deixou "the census district around this bridge" e o "Why?". O p1 diz o que é o distrito e onde fica antes da resposta. |
| p1 → p2 | sim | "start with the ground itself" → "So what makes this ground so hard to live on?" |
| p2 → p3 | sim | "who owns the land" → a metade federal. O "what happened on it" se paga em p4–p5. |
| p3 → p4 | sim | "people made a living on this coast" → "They ranched…", sem a pergunta que o "vazio" punha ali. |
| p4 → p5 | sim | "A road you could count on in every season" → "a scenic highway, open all year". |
| p5 → p6 | sim, consertada | A venda de Pfeiffer (1934) foi para p5, na ordem do tempo, e p6 abre direto na resposta: "The county's answer came in 1986, in the plan this video keeps quoting." |
| p6 → p7 | sim | "keeping that road open at all" → "when its road breaks?". Paga a planta de p3. |
| p7 → p8 | sim, consertada | "For the people who live along this road, the fire came right after the long closures of the slides." e a estrada reaberta → "The census counted the homes along this road, too." |
| p8 → p9 | sim, consertada | "Count the cars on Highway 1" → "drivers pull into the turnout": os carros viram os motoristas no mirante que p6 plantou. |

## Os enxertos e os consertos

A lista completa está em `plano-final.json`, no campo "enxertos", e em "de_onde_veio" e "dobradica" de cada parte. O principal:

**Do "a estrada":**

- **p1:** a abertura "The census doesn't count a town called Big Sur. It counts a district…" e o "that year" na frase do Wyoming.
- **p2:** as falésias e as praias poucas, e a chuva de inverno e o verão seco nas palavras do plano.
- **p3:** Mud Creek "outside the census district", dito na voz.
- **p4:** "the one thing holding back tourism on the south coast" (P [1226]) e Manchester sem números.
- **p5:** o "soon after" no lugar do 1921; os riachos e a travessia de Bixby Creek; a venda de Pfeiffer no meio da obra; "the Bay Area and
  Los Angeles were less than a day's drive away".
- **p6:** o mirante de Bixby Creek entre os lugares que a regra nomeia; as casas novas escondidas pela terra ou pelas árvores.
- **p7:** o CAL FIRE dito na voz, a frase do tom e o conserto com o número.
- **p8:** as casas de 1986 em pequenos grupos ou ao longo da estrada.
- **p9:** a cena do mirante.
- **O mapa:** o perfil da encosta e a faixa de capacidade.

**Os consertos do juiz sobre o texto do "vazio":**

- **O gancho:** a regra sem verbo no presente.
- **p1:** sai o meta do p1, e a frase "Spread its people across all of it" fica sozinha, separando dois números.
- **p2:** "That one was", porque a leitura é de 1986; sai o "plenty".
- **p3:** a posse federal pelo plano; saem os "pockets of homes"; "wasn't the end of it" no lugar de "wasn't the last time".
- **p4:** saem a pergunta "So how did they do it?" e o "leather trade"; "Around the turn of the century" no lugar de "Around 1900".
- **p5:** "Doctor John Roberts" (o título, não a profissão); sai o 1921.
- **p6:** abre na resposta de 1986, sem o "we"; o teste da visão no passado; saem as torres de transmissão; "nearly three million".
- **p8:** sai o O4; a frase de 2020 sem fonte vira a de 1986; o "room for more people" vago vira "kept by people who live somewhere
  else".
- **p9:** o fecho dos nomes dá lugar à cena do mirante, e a última frase fica.

## As decisões que ficaram com o juiz

1. **O fogo é "In August 2026", não "last summer".** A voz §2 vale mais que a de cima ("O vídeo precisa valer daqui a dois anos, por isso
   a data é absoluta"). Num vídeo visto em 2027, "last summer" vira outro verão. O ponto da Sala era o fogo "em palavras", sem número, e
   isso fica. O portão também alerta "last". Os dois planejadores chegaram à mesma decisão.
2. **Nenhum número do fogo na voz.**
   - A área em milhas quadradas que o "a estrada" propôs ("nearly 40 square miles", uma conta dele) sai, e a forma da Sala ("more than
     25,000 acres") também não entra.
   - A voz diz "hundreds of homes, businesses and other buildings", "Firefighters were hurt", "almost fully contained" e "For weeks".
   - Os 25.352 acres, as 661 estruturas, os 3 feridos e os 97 % vão à tela, com o crédito do CAL FIRE.
3. **O conserto de Regent's Slide entra na voz:** "The agency estimated the repair at nearly 83 million dollars." A pauta §4.4 diz "Na
   fala: sim", e a Sala o lista no "hoje". Vai arredondado, com o hedge e o dono, e a frase seguinte não tem número. O "vazio" o deixava
   só na tela.
4. **A pergunta S9 fica:** "So why didn't more follow?".
   - É pergunta, não afirmação, e a pauta §5 manda pôr os quase mil e o 1.474 na mesma cena, cada um com o dono.
   - Se o verificador ler montagem de "não cresceu", a troca pronta é "So why didn't more people move in?". O "Why?" não muda.
5. **O O4 sai** (1976, "about one home in six … because it was a second home"). Era uma terceira régua ao lado das duas da Sala, e o
   portão alertava [veraneio].
6. **"Doctor John Roberts", por extenso.**
   - É o título que o plano dá ("Dr."). "a doctor" diria a profissão, que não foi lida.
   - O ponto de "Dr." partiria a frase nas regras herdadas do portão.
7. **"nearly three million" no lugar de "about 2.9 million"** (a voz §1 manda arredondar com o hedge), sempre com 1986 na frase. Os 2,9
   milhões vão à tela.
8. **A chamada de inscrição fica no fim de p4**, a ~46 % (como no "vazio"). A de comentário vai sobre p9 b2, depois do último fato
   novo, e sai antes de "Hardly a house is in sight". A pergunta é a do "vazio": "Would you live in Big Sur, or just visit?". Se a voz
   ficar perto de 184 palavras/min e a peça não couber ali, a saída é a do vídeo 2 (a tela final, à esquerda), que volta ao Lucas.

## O que o verificador precisa conferir

A lista frase a frase está em `plano-final.json`, em "verificador_confere". Os pontos que nenhum dos dois dossiês traz pronto:

- **No p1:** "Among US states, only Alaska had fewer people for its size" reescreve o "menos denso dos 48 contíguos". Junto vai a
  contagem do censo do Wyoming (K7).
- **No p3:** a definição de "wilderness" e o "they can't move in".
- **No p4:** que a ponte e o riacho levam o nome de Charlie Bixby (a pauta §4.3 aceita, mas o plano só diz que os nomes estão em
  acidentes conhecidos).
- **No p5:** o 1919 e o 1921 da FHWA. Foram lidos pelo extrator do WebFetch, e a FHWA se relê.
- **No p6:** se a regra das casas escondidas (P [276]) vale fora do viewshed.
- **No p7:** "started in the national forest", que é a leitura da jurisdição do CAL FIRE.
- **No p8:** "kept by people who live somewhere else" e o "rationing".
- **No p9:** "Hardly a house is in sight", contra a imagem escolhida. O plano dá Bixby Canyon como área residencial (P [1712]). A troca
  pronta é "From this turnout, the slopes look almost untouched."

## O que fica aberto

- **Nenhuma lacuna segura o texto.**
- **A MapTiler** (nenhum ok vale para este vídeo) segura o relevo 3D do gancho, de p2 e de p6.
- **A caça** segura o drone 4K da ponte e a estrada ao entardecer. A foto do Commons é o plano B.
- **O PAD-US e os post miles** de Paul's e Regent's seguram os mapas de p3, p6 e p7, não a fala.
- **As fotos de época e a folha do plano** seguram as cenas de p4 a p6, pelo conferente-de-midia.
- **O que é volátil:** a estrada de novembro de 2026 (DS3) e a página do Timber Fire (DS2) se releem antes da publicação.
- **A duração:**
  - a 184 palavras/min, o vídeo dá ~13:20 com a vinheta e a cauda;
  - a 150, ~16:15, acima dos 15 min;
  - o teste às cegas do ritmo decide. Se a voz calma ficar perto de 150, a ordem de "cortar_primeiro" tira até ~100 palavras sem
    descer de 2.250.

## O esqueleto do plano final, medido

`out/_tmp/gate-big-sur/juiz-esqueleto-final.md`, fora do git, pelo `gate.mjs`:

- **O resultado:** PASSA.
- **O tamanho:** 2.379 palavras faladas, 187 frases, média de 12,7 palavras por frase, a maior com 23. Dá 12,93 min a 184
  palavras/min.
- **O gancho:** 134 palavras até a assinatura, o "But" na palavra 19.
- **O que não apareceu:** nenhum problema, nenhum autoplágio e nenhum alerta de fecho.
- **Os quatro alertas,** todos decididos no plano: o "nobody" do gancho, o "never" da assinatura, o "first" de 1965 e a 1ª frase sem
  número.
- **As taxas,** todas abaixo do teto: perguntas 1,69 (teto 2,27), "So" 2,54, "And" 1,27, frases curtas 2,12, e "But", travessões,
  "Here's", antítese e imperativo de mapa em 0.
- **O sha12 do texto falado é `2d5b55ab31fd`.** Serve só para rastrear e não é carimbo. O roteiro escrito terá outro sha, e é esse que
  os derivados citam.

| Parte | Palavras | Começa na palavra |
|---|---|---|
| gancho | 134 | 0 |
| p1 · What the census counted | 212 | 134 |
| p2 · Mountains that drop into the sea | 244 | 346 |
| p3 · Public land and moving ground | 224 | 590 |
| p4 · Nearly a thousand, by sea | 297 | 814 |
| p5 · A road cut into the cliffs | 312 | 1.111 |
| p6 · The rule about what you can see | 316 | 1.423 |
| p7 · Three years without the road, then fire | 250 | 1.739 |
| p8 · Empty homes and passing visitors | 264 | 1.989 |
| p9 · The view from Bixby Creek | 126 | 2.253 |

## O gancho final

> This is Big Sur, between Los Angeles and San Francisco. Their metro areas hold more than 17 million people. But the census district
> around this bridge counted fewer than 1,500, as empty as Wyoming. Why?
>
> It isn't the weather. Monterey County's 1986 plan for this coast calls the climate mild. And it isn't that nobody came. The same plan
> says nearly a thousand people lived along this coast by the 1880s. So why didn't more follow? The mountains are only part of it. The
> rest is a road that has closed again and again, and a rule in that plan about building in sight of it. And then there are the homes
> that often sit empty. You're at Alpha Point, and this is where the story of the coast that never filled up begins.
