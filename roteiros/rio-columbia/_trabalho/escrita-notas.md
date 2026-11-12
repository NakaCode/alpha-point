# Notas de escrita r1 · rio-columbia (vídeo 7)

O que o roteiro r1 (`roteiros/rio-columbia/roteiro-narrador.md`, sha256 do texto falado pelo portão `7a691f44b99d…`, **2.667 palavras**)
escolheu, e por quê. Escrito em 12/11/2026 (a escrita começou em 11/11, perto da meia-noite) pelo roteirista, um agente da Sala (Fable 5.2),
sobre `_trabalho/briefing.md`, a pauta v2 aprovada (`pautas/2026-11-09-video-7-rio-columbia.md`, §3, §4, §5, §7 e §8), as releituras
(`pautas/rio-columbia/_trabalho/fatos-c.md`), o teste dos leitores a frio e `_trabalho/gate-notas.md`. Nenhum fato novo entrou e nada foi
pesquisado na web. Para conferir a letra, reli cópias locais que a base já tinha (`midia/rio-columbia/fontes/`): o relatório do Congresso
(CRS), a página "About" do governo da Colúmbia Britânica, o FAQ do Grand Coulee, o "Case in Brief" de Desautel, o verbete de Vanport e o
slide 7 da BC Hydro; e rodei a conta da base (`pautas/rio-columbia/_trabalho/scripts/a_calc_fracoes.py`), só leitura. Nada aqui passou pelo
verificador, pela bancada nem pelo Lucas. Não houve commit, e só estes dois arquivos foram escritos no canal.

**A medida do portão** (`node roteiros/rio-columbia/_ferramentas/gate.mjs`, exit 0, PASSA): 2.667 palavras · **14,9 min de fala a 179
palavras/min** (15:05 com as pausas entre parágrafos; 15:25 com a cauda de 20 s) · 44 pedidos à voz · 185 frases pela regex · média de 14,4
palavras por frase (teto 18) · a maior com 32 (teto 34) · **o gancho com 169 palavras até a assinatura** (56,6 s; teto 170), **o "But" na
palavra 48** (teto 50) e a pergunta na 8ª frase, a última antes da assinatura (aos ~45 s) · **a inscrição no parágrafo 19, começando em
6:08,5, a 39,9 % do vídeo** de 15:24,7 (a janela vai de 5:23,7 a 9:14,8), na fronteira entre o ato 2 e o ato 3 · **46 números falados**
(5 no gancho; o alerta é acima de 50) · 0 problemas, 9 alertas (§3) · todas as taxas abaixo do teto · autoplágio vazio · sem alerta de
fecho. O "não se diz" do Columbia não disparou nenhuma vez no texto final.

**Por parte** (contadas com o `contar()` do portão; entre parênteses, o alvo do briefing):

| Parte | Palavras | Alvo | Números | Começa em |
|---|---:|---:|---:|---|
| gancho | 168 (o portão conta 169: parte o "37.6") | ~200 no briefing; o teto de 170 do portão vence | 5 | 0:00 |
| ato 1 · o rio que nasce ao norte | 440 | ~435 | 5 | 0:58 |
| ato 2 · a cheia e o acordo | 478 | ~455 | 8 | 3:26 |
| *(antes da inscrição)* | *1.086* | *1.050 a 1.150* | | |
| a inscrição | 16 | 16 | 0 | 6:08 |
| ato 3 · o gatilho e a torneira | 767 | ~620 | 14 | 6:14 |
| ato 4 · o que havia no espaço | 251 | ~290 | 4 | 10:34 |
| ato 5 · o que cada lado põe na balança | 388 | ~480 | 9 | 11:59 |
| fecho | 159 | ~150 | 1 | 14:11 |
| **total** | **2.667** | 2.550 a 2.680 | **46** | 15:05 de fala |

**O ato 3 saiu 147 palavras acima do alvo, e o ato 5, 92 abaixo.** O ato 3 ficou com tudo o que o briefing pôs nele: o palpite do seguro,
o gatilho em três tempos, a lei, a garantia, a escala do dinheiro (as duas estimativas que a Sala aceitou subir do ato 5), a pergunta da
CBC, a medida com os dois denominadores, o ano do rio antes e depois, e quem decide. São 12 pedidos à voz, de 30 a 101 palavras, com ar
entre eles. O ato 5 perdeu a conta de 40 a 150 milhões para o ato 3 e a linha do tempo para a tela. O ato 4 ficou com 251: os fatos da
pauta estão todos, e não inventei cena para encher. **Se a Sala quiser o ato 3 menor**, os cortes que não derrubam nada, em ordem: o
parágrafo do antes e depois ("You've seen what that does…", 74 palavras; a pauta o pede, e os leitores gostaram das duas frases); as
duas frases "Beside the American figure… Beside the Canadian one…" (16); e a frase da unidade ("A flood on this river is measured…", 22),
se a tela disser "cubic feet per second".

## 1 · As escolhas, e por quê

**O gancho** (169 palavras, 5 números, uma pergunta). Ficam as frases 1 e 2 do gancho A no conteúdo, com três mudanças:
- "Every year, before the spring snowmelt" no lugar de "Every spring, before the floods" (o Dale ouviu enchente todo ano);
- "on the Columbia River" entra na frase 1, para o rio já estar apresentado quando o "But" chega;
- a data desce para a frase 2 ("starting with the 2025 flood season, the United States pays Canada…"): o "Every year" fica colado à data
  absoluta, e o "But" cabe na palavra 48. O verbo é "pays", nunca "has paid".

O 2º tempo é o mapa em palavras, com o 15 dito uma vez e "through": "But only about 15 percent of the land that drains into the Columbia
lies in Canada. Even so, a much bigger share of the river's water comes down through British Columbia." Sem "basin" (a palavra entra no
ato 1, definida), sem estação, sem 39, sem The Dalles e sem os anos. Depois o acordo e o relógio ("part of a deal that runs out after the
spring of 2027, unless the two countries agree on something new"; a pausa desde março de 2025), a virada ("And the strange part", sem
"Here's", que dispara a taxa) com o tratado apresentado como promessa ("a treaty between them already promises Canada's help in a big
flood, if the United States asks") e a pergunta, uma vez, mais curta que a do contrato: "So why pay for empty space, when the United
States can already call on Canada in a flood?". Nada diz por que se paga. **O que não coube no teto de 170:** a aposição "a lake behind a
dam", o "1964" do tratado (fica o "September 1964" do ato 2) e "é lá que estão os lugares de guardar uma cheia" (foi para o ato 1, na boca
da BC Hydro).

**O fio.** O espectador segue a água e o dinheiro: "Put your finger on the map where the Columbia River begins", "Keep your finger moving"
(ato 1); "Then follow the money, because it runs the other way. Water comes down, and money goes up." (ato 2); "Stand on the shore of the
Arrow Lakes in late winter" (ato 4). Os três palpites dele são ditos em voz alta: "A number like that makes you wonder who holds the tap.
Hold that thought; we'll measure it." (ato 1, pago no ato 3); "Maybe you've already decided what the payment is. It's insurance." (ato 3);
"When you hear that the United States pays, it's fair to ask who that is." (ato 5).

**As passagens entre atos** são a água ou o dinheiro chegando, sem "So…?" em cada abertura: "And in 1948, it did." → "That spring, the
river came up over its banks"; a inscrição; "That room came from somewhere."; "So that is the room, and what it cost."; "It starts with
snow." São 4 perguntas no texto inteiro (a do gancho, uma no ato 1, uma no ato 2 e "Certainty about what, exactly?" no ato 3).

**A medida do ato 1, com ar.** Duas estações, com "gauge" definido numa oração; The Dalles apresentado ("a place on the river in Oregon
where the United States government measures it"); a conta dita como do canal ("We lined the two records up, year against year… That's our
own calculation, from the two governments' data"). Um número só na voz, o 39. **Escrevi "87 years", não 88** (§5, item 1). A "dúzia de
milhas" virou "a short way north of the border", para poupar um número. A leitura "o Canadá tem a torneira" fecha na frase seguinte, com
a BC Hydro apresentada, e em "One country has the need. The other has the room."

**1948, em gente.** Vanport sem número próprio: o dique de aterro de ferrovia, o domingo à tarde (sem a hora) e "within an hour, by the US
Geological Survey's account, the town was completely destroyed". Os números são da cheia inteira, com o dono na frase anterior: "at least
51 people dead, and tens of thousands out of their homes". O "tens of thousands" cobre os 30.000 das agências e os 38.500 da Cruz Vermelha
(no mesmo relatório do USGS), e poupa um número.

**O acordo e o dinheiro (ato 2).** O tratado sem "1961" (fica "It took effect in September 1964", com o encontro na fronteira). Libby pelo
nome, "its lake" no lugar de Koocanusa, sem ano de conclusão, com a meia frase do Protocolo. Os 64,4 milhões "in lump sums, as each dam
came into service" (nunca "in 1964"), a metade do dano esperado, "most of the money was for one lake, Arrow", e a ideia de que o
pagamento por espaço é tão velho quanto o tratado. A parte do Canadá em eletricidade, a venda dos primeiros 30 anos pela Colúmbia
Britânica e "So American money helped build Canada's dams". **O fecho do ato diz "the bargain", não "the deal"**: "the deal" é só o acordo
temporário, do gancho ao fecho. Depois vem a frase calma (os quatro lagos no mapa), para a inscrição não colar na frase-chave.

**O ato 3, na ordem que a Sala aceitou.** Abre pelo palpite do seguro e o quebra com a virada do gancho, datada: em setembro de 2024
acabaram os anos pagos, "The promise didn't", e "on call" se define aí. O centro vem num parágrafo só dele: "And the treaty doesn't say
how big a flood that is. No number, no line on a gauge." Os três tempos: (1) os dois números dos estudos, com a unidade por extenso uma
vez e o dono pelo nome inteiro só aqui ("That's how the US Congressional Research Service describes those studies"); (2) o rio medido,
como conta do canal ("So we looked at the river itself"), com "British Columbia's line" e "the gap" no lugar de repetir os números; (3) a
lei de janeiro de 2025, com a citação numa frase só dela. Depois a garantia ("The lake drops every winter anyway…"), a escala do dinheiro
com as duas estimativas lado a lado e o que cada uma faz do pagamento, e a pergunta do gancho paga sem ser refeita: "So yes, the United
States can call on Canada in a flood. It pays so the room is already there, call or no call. What the United States is buying is
certainty." A segunda metade responde "certeza de quê": a pergunta da CBC, a fala direta do ministro (o cargo e "That March", sem o
nome), os dez anos de aviso, a medida com os dois denominadores juntos, o ano do rio antes e depois ("The water wasn't taken away. It was
moved", o único "wasn't X, it was Y" do texto), quem decide (a BC Hydro) e o calendário, em afirmativa.

**O ato 4.** Sem humor, sem suspense, sem adjetivo do narrador, cada dono na frase: o governo da Colúmbia Britânica (os ~2.300, as
comunidades, a consulta, com as palavras dele entre aspas); o Grand Coulee, de 1941, "long before the treaty dams", e só "the upper
Columbia"; a Suprema Corte do Canadá (1956, com "the Arrow Lakes Band", e o julgamento de depois, com "the Lakes Tribe"). O 1956 não se
liga às barragens. O ato termina na Corte, e a pausa é a troca de ato.

**O ato 5.** O que cada lado cedeu (o corte de 37 % com o Departamento de Estado numa oração que pode cair; o pagamento por ano), a faixa
da BC Hydro, a conta americana de 2012 com a contestação na frase seguinte e a posição do Canadá logo depois, quem paga (o governo
federal, pelo espaço; as três empresas, em duas frases que podem cair), o acordo de princípio ("It has not been finalized"), a pausa com
quem a anunciou, a delegação com as três Primeiras Nações, o estado mais novo lido (agosto de 2026) e o relógio. A voz fica com quatro
datas (2012, setembro de 2026, março de 2025, agosto de 2026) e o prazo (2027, duas vezes).

**O fecho** é uma volta do ano do lago, no tempo: a neve parada no fim do inverno e o lago no ponto mais baixo; o degelo que enche o
espaço, e a parte da cheia que não chega a Portland; o presente datado ("For now, the United States pays for the room in between. And the
spring of 2027 is as far as this deal can reach."). Sem imperativo, sem recapitular, sem refrão, sem a pergunta do gancho e sem lista; um
número.

**A fonte na voz.** O Serviço de Pesquisa do Congresso pelo nome uma vez (ato 3), e depois "that congressional report" (ato 5); o USGS
uma vez (ato 2); a BC Hydro três vezes, cada uma como dona de uma afirmação diferente (a descrição do rio, "did not turn over control", o
valor da parte do Canadá); o governo da Colúmbia Britânica, o Departamento de Estado, a CBC News, a Canadian Geographic e a Suprema Corte,
uma vez cada. "By X's count" aparece duas vezes ("by the treaty's own count", "by the State Department's count"). Nenhum "according to".

**Os nomes.** Um nome para cada coisa até o fim: "the treaty", "the deal" (o temporário), "the payment" (o espaço), "Canada's share" (a
energia), "on call", "the bargain" (a troca de 1964), e "room", "space" e "empty" em todas as partes. Na voz: Arrow, British Columbia,
Columbia Lake, The Dalles, Trail, Vanport, Portland, Libby, Grand Coulee, Edgewood, Burton, Renata, Sinixt, "the Arrow Lakes Band", "the
Lakes Tribe", BC Hydro, CBC News. Na tela: Keenleyside ("the dam that holds back Arrow"), Kinbasket ("a lake", "another of the treaty's
lakes"), Mica, Mica Creek ("a town"), Duncan, Koocanusa ("its lake"), Birchbank ("the Canadian gauge"), Kootenay, Fauquier, o ministro Dix,
as três empresas e as três Primeiras Nações.

**A frase de tamanho variado.** Pela regex do portão: 7 frases de até 4 palavras, 44 de 5 a 8, 50 de 9 a 14, 36 de 15 a 20, 37 de 21 a
27 e 11 de 28 a 32. As curtas estão nas viradas ("It's insurance.", "The promise didn't.", "Renata no longer exists.", "It starts with
snow."). Nenhum travessão, nenhum "Here's", um "But" (o do gancho).

## 2 · As chamadas (`marca/voz.md` §3; `marca/cta.md` §1 e §6), pela conta do portão

- **A inscrição falada está no parágrafo 19**, um parágrafo só dela, entre a marca `<!-- inscrição falada… -->` e a do ato 3:
  **"If you're enjoying the trip downriver, subscribe to Alpha Point. Back to that empty space, then."** A frase tem 10 palavras, e a
  volta, 6. Começa em **6:08,5, a 39,9 %** de 15:24,7 (as 1.086 palavras antes ÷ 179 × 60, mais 0,25 s × 18 trocas de parágrafo).
  - A frase logo antes é a calma ("On the map, it comes to four lakes in the mountains…"), sem aspas e sem número-herói; a frase-chave do
    ato ("For 60 years, that was the bargain…") fica uma frase atrás.
  - "Back to …, then." não dispara o alerta do presente.
  - **A margem:** 2,9 pontos acima do alerta de 37 % e 4,9 acima do piso de 35 %. Cada ~28 palavras que passem de depois para antes da
    inscrição valem 1 ponto.
- **O comentário, só de tela.** A pergunta do briefing, medida com `node marca/cta/pecas/_perguntas.mjs --q="…"` (abriu o Chrome sem
  janela nesta máquina e não gravou nada):
  - **"Where does your nearest river begin?"**: corpo 176, 2 linhas ("Where does your nearest / river begin?"), 6 s, **com aviso**: a
    quebra parte um sintagma ("nearest / river"), porque nenhuma outra cabe; confere-se no quadro, ou força-se outra com `|`;
  - a reserva, **"Which river would you follow to its source?"**: corpo 176, 2 linhas ("Which river would you follow / to its source?"),
    6,5 s, sem aviso;
  - uma variante da primeira, "Where does the river nearest you begin?": corpo 176, 2 linhas ("Where does the river nearest / you
    begin?"), 6 s, sem aviso.
  - **Onde entraria:** sobre o 2º parágrafo do fecho, na frase "Through May and June, the creeks fill, the river rises, and the lake
    climbs back up its shore until the bare ground is gone." (de ~14:34 a ~14:42), saindo antes de "Part of a flood that would have
    reached Portland…" e ~24 s antes da cauda (15:04,7). O último fato novo é o relógio, no fim do ato 5 (até ~14:11); o fecho encena e
    termina no presente datado, que não deve ficar debaixo da peça. O último parágrafo tem 12 s e é a frase de 2027: ali não cabe.
  - Quem fecha a pergunta é o `redator-de-tela`, e o momento, o `regente-de-imagem`.

## 3 · Os alertas do portão, um a um

O laudo sai PASSA com 9 alertas:

- **`first`, "British Columbia sold the first 30 years of that share up front…", aceito.** É a forma segura da pauta (§4.2 e §5: "the
  first 30 years", no lugar de "30 years starting in 1964"). O autor do portão previu este alerta.
- **`first`, duas vezes em "First Nations", aceito.** É nome próprio (a consulta, nas palavras do governo da Colúmbia Britânica; a
  delegação, pela nota da Global Affairs Canada). Falso positivo.
- **`today`, dentro da citação "by today's standards", aceito.** São as palavras do governo da Colúmbia Britânica, lidas na cópia local.
- **`now`, "For now, the United States pays for the room in between.", aceito.** É o presente datado que o briefing pede no fecho ("por
  ora"), com 2027 na frase seguinte. Se a Sala quiser zero, "For the time being" diz o mesmo.
- **A 1ª frase sem número, aceito.** A regra aceita "um número ou uma imagem": a imagem é o lago esvaziado de propósito, e o número (2025
  e 37.6) vem na 2ª frase. O gancho A aprovado também abria sem número.
- **`[estudo-bc]`, aceito.** Os "40 to 150 million" estão no ato 3, ao lado dos "4 and 34 million" (o ponto que a Sala aceitou), como
  "British Columbia's estimate is…", sem data. A data do estudo da BC continua sem leitura (pauta §11, item 2).
- **`[cbc]`, aceito.** A voz só diz "In 2025": a data exata dos dois vídeos continua a ler (pauta §11, item 5). O alerta dispara em toda
  menção, por desenho.
- **`[puds]`, aceito.** As três empresas (†) estão em duas frases que saem sem derrubar o parágrafo; o valor ficou na tela.

Perto do teto, sem alerta: `abre_and` 3,02 (8×; teto 3,92), `abre_so` 3,02 (8×; teto 3,92), `frases_curtas` 2,64 (7×; teto 3,92),
`perguntas` 1,51 (4×; teto 2,27), `imperativo_mapa` 0,75 (2×), `antitese` 0,38 (1×). `abre_but`, `heres` e travessões, zero.

Alertas e reprovações de rodadas anteriores que saíram do texto: o gancho com 171 palavras (hoje 169); 52 números (hoje 46: saíram cinco
"60 years" repetidos e o "2021"); `abre_and` 12× e `frases_curtas` 11×; `[gatilho-sem-crs]` (o dono passou para logo depois dos
números); `last` duas vezes ("Since the last of them was finished" virou "With all of them in place"; "the last flood season this deal
can cover" virou "can cover up to three flood seasons, and the spring of 2027 is the third"); `first` em "The first ideas" (virou "The
early ideas") e em "Beside the first"; `now` em "By now"; e uma reprovação de `duas-contas` evitada antes de rodar (a contestação ficou
na frase logo depois da conta de 2012, que tem 31 palavras).

## 4 · O que faltou de fato, e como se escreveu sem

- **O gatilho na fonte primária:** "When the treaty came up for review, the two sides worked from different numbers… That's how the US
  Congressional Research Service describes those studies." O 600 mil é sempre "British Columbia's line". "The treaty doesn't say" no
  lugar de "never says": diz o mesmo e não dispara o alerta universal.
- **Se os EUA pagaram os anos 2 e 3:** "pays", "the law… authorizes", "can cover up to three flood seasons". Nunca "has paid".
- **Os voláteis** (relê-se antes da gravação): "Their talks have been paused since March 2025" (gancho); "As of August 2026, the magazine
  Canadian Geographic reported that the talks had not resumed"; "unless Congress extends it. Bills in both chambers would."; "nothing
  we've read says either side has given it" (o aviso de saída); "The treaty itself remains in force".
- **O dono dos 37 %:** "by the State Department's count", numa oração que cai sem derrubar a frase.
- **As três empresas (†):** duas frases que caem juntas; sem o valor, sem "2024".
- **O diagrama de Arrow:** "part of", "3.6 million acre-feet of room a year"; nunca metade, pés nem fração do lago.
- **O salmão:** só "the upper Columbia"; nada sobre cabeceiras nem sobre chegar ao Canadá.
- **Antes de 1938:** "Before the big storage dams", com "on both sides of the border" no ato 3.
- **O desvio canadense:** sem número e sem ano; o dono (o CRS) ficou para a tela (§5, item 4).
- **Libby:** sem ano. **Vanport:** sem número próprio e sem a hora.
- **A data do estudo da BC e a dos vídeos da CBC:** fora da voz ("British Columbia's estimate is"; "In 2025").
- **O dano em dólar de uma cheia hoje, o custo do espaço para o Canadá e quantas vezes a chamada teria sido precisa:** nenhuma fonte lida
  dá, e a voz não diz. A cheia tem escala em gente (1948).

## 5 · As frases em que tive dúvida (para o verificador de fatos e o ouvinte a frio)

Em ordem do que eu olharia primeiro.

1. **"We lined the two records up, year against year, for the 87 years they share."** A pauta e o briefing dizem 88. Rodei a conta da
   base: `Birchbank/The Dalles 1938-2024 n=87 … = 39.3 %`. Os 88 são os anos completos de Birchbank sozinha (1938–2025); os anos casados
   com The Dalles são 87. Escrevi 87. Se a Sala preferir não cravar, "for nearly 90 years" vale nas duas leituras. A tela ("88 YEARS OF
   GAUGES", pauta §8) precisa seguir a decisão.
2. **"BC Hydro puts it at between 110 and 400 million dollars a year."** O slide diz "$110 - $400 million per year", sem moeda; na mesma
   página, o pagamento vem como "USD $37.6M". Pode ser dólar canadense. A voz diz "dollars", como a pauta; a tela não deve pôr "US$" sem
   leitura.
3. **"The American agencies that run the treaty once estimated that a call on Canada would cost between 4 and 34 million dollars per
   request."** É novo na voz. Na cópia local do CRS: "the U.S. Entity has previously estimated costs of between $4 million and $34
   million per request for called-upon flood control, but has not projected the same level of losses to U.S. generating capacity". E a
   frase seguinte, "British Columbia's estimate is that relying on those calls would cost the United States 40 to 150 million dollars a
   year in lost power" ("for power production alone, called-upon operations would result in $40 million to $150 million per year in lost
   benefits to the United States").
4. **"Beside the American figure, the yearly payment looks steep. Beside the Canadian one, it looks cheap."** É leitura do canal, e
   compara um custo por pedido com um por ano. Responde ao "comparado com quê?" dos leitores. Pode sair sem derrubar o parágrafo.
5. **"Canada answered with a plan to divert much of the upper Columbia for its own use."** Sem dono na voz: o briefing guarda o nome do
   CRS para o ato 3, uma vez por fonte. Se o verificador quiser dono aqui, cabe "by a later account written for the US Congress".
6. **"Across the whole flood, the same report counts at least 51 people dead, and tens of thousands out of their homes."** O relatório do
   USGS de 1949 (p. 13): pelo menos 51 mortos; 38.500 desabrigados, pela Cruz Vermelha. E, no mesmo parágrafo, "It broke on a Sunday
   afternoon" (16h15 de domingo, 30/05, no USGS) e "a town on the edge of Portland, Oregon" (o verbete: "outside Portland city limits").
7. **"As the paid years ended, each side gave something up. Canada agreed to a smaller share of the power: a cut of 37 percent…"** O
   corte vale desde 01/08/2024, seis semanas antes de 16/09/2024, pelas medidas interinas; "agreed" é minha palavra para a troca de
   notas. E "The United States agreed to pay by the year for room it used to have paid up."
8. **"Canada's share is power, and part of that bill falls on utilities along the river. Three of them, in Washington State, stopped
   paying their part and went to court, and in September 2026 they settled with the federal government."** Tudo † (APPA e The Star, não
   relidas).
9. **"The temporary deal can cover up to three flood seasons, and the spring of 2027 is the third."** A nota diplomática diz "up to three
   consecutive operating years"; a conta dos anos (de agosto a julho: as cheias de 2025, 2026 e 2027) é da pauta.
10. **"For one thing, leaving takes ten years' written notice, and nothing we've read says either side has given it."** Liga os dez anos
    à fala do ministro: a Canadian Press escreve "with a 10-year termination provision, he notes that…". O "neither side had given it" do
    CRS é de dezembro de 2024; a frase diz ausência de registro, não prova.
11. **"CBC News asked whether ending this treaty could help Canada fight back."** Paráfrase do título "Could ending a water treaty help
    Canada fight U.S. tariffs?"; os vídeos não foram vistos. E "That March, British Columbia's energy minister addressed the idea": a
    fala foi numa sessão do governo, não em resposta à CBC, e por isso "addressed", não "answered".
12. **"It pays for reserving 3.6 million acre-feet of room a year behind the dam that holds back Arrow."** e a citação "operations that
    the Government of Canada may not be obligated to provide" (a lei: "for reserving and operating 3,600,000 acre-feet of pre-planned
    flood storage per operating year at Hugh Keenleyside Dam, including operations that…"). "That gap is where the law comes in" liga a
    lei à diferença dos dois números: a ligação é da pauta ("So in January 2025…"), não da lei.
13. **"What the United States pays for is a guarantee: that much room, every year of the deal, whatever the treaty does or doesn't
    require."**, **"It pays so the room is already there, call or no call."** e **"What the United States is buying is certainty."** São
    a leitura do canal sobre a lei. A última é a frase que a pauta deixou para o Lucas decidir.
14. **"From 1879 to 1967, the yearly peak at The Dalles passed British Columbia's line in 40 of 89 years. On the old river, that was no
    rare flood."** e **"six springs have peaked in the gap: high enough for the American range, too low for British Columbia's line"**.
    "British Columbia's line" é o 600 mil dos estudos, nunca do tratado. A ressalva das médias diárias de 1974 a 2008 fica na tela.
15. **"American planners projected that Canadian storage would come into play once the river's peak landed somewhere between 450,000 and
    650,000."** O teto de 650 mil ficou na voz: a faixa conta como um número só, e "a range that starts at 450,000" soava torto.
16. **"With all of them in place, the river's busiest month carries only about twice its quietest, and the total for the year has barely
    changed."** A conta de Birchbank de 1974 a 2025 (2,1 vezes; a média, −1,2 %).
17. **"There's a wide strip of bare ground between the lake and the trees. By summer, the water will cover it. That strip is the room,
    seen from the ground."** Imagem, sem fonte. A faixa exposta é o rebaixamento inteiro do lago, que é maior que os 3,6 milhões de
    acre-pés pagos. Pode sair, e o ato perde 27 palavras.
18. **"Some, like Edgewood and Burton, were relocated."** e **"a town went under with it"** (Mica Creek). A fonte dá Edgewood, Fauquier e
    Burton; tirei Fauquier pela pronúncia.
19. **"The Arrow Lakes lie in the traditional territory of the Sinixt."** e **"the Lakes Tribe, a successor group of the Sinixt based in
    Washington State"**. Vêm do "Case in Brief" da Corte (cópia local), que a pauta não cita palavra por palavra: o alce foi morto "in the
    Arrow Lakes region", "within this territory"; "the Lakes Tribe… is a successor group of the Sinixt people"; "lives on reserve in
    Washington State". "Writing decades later" está no lugar de "in 2021".
20. **"Grand Coulee Dam, built by the United States far downstream…"**: "far downstream" é meu (a pesca de Kettle Falls ficava a ~100
    milhas acima da barragem).
21. **"That bend is underwater these days: it lies beneath a lake, behind one of the dams in this story."** e "a long hairpin". A base:
    "Formerly the 'Big Bend' area… drowned under the pondage".
22. **"what lands on it in winter is snow"**, **"For months, the snow just sits there"** e, no fecho, **"the mountains above the Arrow
    Lakes are holding a large part of the year's water"**. Generalizam "mountainous with much snow" (BC Hydro) e os ~60 % de maio a
    julho. "Through May and June" e "the creeks fill" são cena.
23. **"Part of a flood that would have reached Portland stays up in the valley instead…"**: a ideia do fecho da pauta.
24. **"BC Hydro, the power company that runs Canada's side of the treaty"**: é a Entidade Canadense.
25. **"a treaty between them already promises Canada's help in a big flood, if the United States asks"** (gancho) e **"Under the treaty,
    Canada has to help in a big flood whenever the United States asks, and the United States covers what that help costs."**
26. **"most of the money was for one lake, Arrow"** (52,1 dos 64,4 milhões) e **"that money, with the flood payment, helped build the
    three dams"**.
27. **"You may know its American end: this is the largest hydropower-producing river system in the United States."** A frase do CRS.

**Para o ouvinte a frio**, onde eu desconfio do texto:
- o ato 3 tem 4 min 20 s; o parágrafo do gatilho traz três números seguidos (450 mil, 650 mil e 600 mil), e o do preço, dois pares;
- "British Columbia's line" e "the gap" dependem de o ouvinte ter guardado o 600 mil;
- "the bargain" (1964) e "the deal" (o temporário) são dois nomes: se soarem como a mesma coisa, o ato 3 embaralha;
- o último parágrafo do ato 1 abre a frio ("Before the big storage dams…"), sem ponte;
- "Hold that thought; we'll measure it." promete a medida para 6 minutos depois.

**Fora da regra, para a Sala saber:** no começo, antes de adotar o script em arquivo, rodei um `python -X utf8 -B -c "…"` (a trava deixa
o `-c` passar) para ler uma cópia local; dali em diante, todo Python foi de arquivo, na pasta de rascunho da sessão, fora do canal.
