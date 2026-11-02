# Laudo · crítico de roteiro, com a lente de subtração · big-sur (vídeo 5) · rodada 1

Revisão julgada: `c00a9cce37c4` · data-base 2026-11-02
(sha256 do texto falado pelo `gate.mjs`: `c00a9cce37c4b89a738e92fa37bcf261ff96ce39d3105ba26722e8326b1c1277`. O portão PASSA: 2.396
palavras, ≈13:01 a 184 palavras/min e ≈15:28 a 155, 34 parágrafos, 193 frases pelo contador principal (187 de verdade), média 12,4, maior
23. O gancho tem 134 palavras até a assinatura, o "But" na palavra 19 e o "Why?" na 35. Nenhum problema, 4 alertas ("nobody", "never",
"first" e a 1ª frase sem número), taxas todas abaixo do teto e autoplágio vazio.)

Rubrica lida nesta sessão:
- os ofícios da pré-v1: `crafts/critico-de-roteiro/OFICIO.md`, `CONTRATO.md` e `SPEC.md`, e `crafts/doutor-de-roteiro/OFICIO.md` (a régua de
  densidade, as famílias A e B, o sagrado, a emenda);
- `marca/voz.md` §1 ("Os números da fala" e "Como ele fecha") e §2;
- `marca/embalagem.md` §1, §1.1 e §2, e `marca/cta.md` §1–§3 e §5;
- `sala/do-video-5-em-diante.md`;
- o topo do `gate.mjs` (o NAO_SE_DIZ, o ALERTA_BS e o que ele deixa ao verificador) e o topo do `ferramentas/aplicar-lista.mjs` (a lista
  fechada);
- a régua das operações: `out/_analises/estudo-roteiro/L5-regie-nova.md`, `L2-agentes-critica.md` e o item 1 do `cetico.md`.

Contra o quê:
- `roteiro-editor.md` (a espinha, o livro-razão, o destino das cifras, "De onde vem cada frase" e "Para a bancada", todos usados);
- a pauta aprovada, inteira: §1, §4, §5, §6, §8, "Depois do sim" (DS1–DS5) e "O cético" (K1–K7);
- `_trabalho/plano-final.json` (as pontes, os `cortes`, o `destino_das_cifras`, os `riscos` e o `verificador_confere`);
- `_trabalho/juiz.md` e `_trabalho/escrita-notas.md`.

Sem rede. O spot-check foi nas cópias locais de `midia/big-sur/fontes/`: o plano de 1986, pelo `plano_trecho.py`, e as leituras da Sala
de 02/11. Não li os outros laudos desta rodada.

Quando a fonte diz menos, esta lente não defere ao juiz nem ao roteirista. É o caso dos achados 1, 2, 3, 4 e 5. Cada um tem a forma mais
fraca, ou a forma da fonte, já escrita.

VEREDITO: RESSALVA
(APROVADO COM RESSALVAS pela escala do CONTRATO §3. Não há número errado, padrão de veto duro, frase do "não se diz" de Big Sur nem
decisão da Sala quebrada. O gancho, a espinha em três camadas, a régua do distrito e o fecho no mirante estão de pé, e nenhum achado é
estrutural.

Os achados de fato são de grau e de forma, e cada um se conserta numa frase:
- a "one line" do plano cortada ao meio. O plano diz que um modo de vida acabou e uma era começou, e a voz deixa só o epitáfio;
- o "too" de f116, que faz de John Pfeiffer um doador. O próprio texto disse "sold" uma parte antes;
- a definição de "wilderness" sem fonte no dossiê. O próprio plano tem a frase que a sustenta;
- os trabalhadores de 1986 morando no carro, colados às casas de temporada de 2020–2024. A montagem conclui o que nenhuma fonte diz de
  hoje;
- o "In 1986, the county wrote" do fecho. O condado escreveu e aprovou o plano em 1981–1985, e 1986 é o ano da certificação.

O ponto mais perto de erro de fato é o "too", que o texto desmente uma parte antes. Nenhum desses vai a GRAVE.)

NOTAS: Sotaque de máquina 7/10 · Storytelling e retenção 8/10 · Voz alta 8/10 · Factual e atribuição 7/10 · Embalagem e promessa 9/10

**Destes 16 achados (19 trocas), valem 8:** os médios 1 a 8. Os oito leves são polimento, aplicáveis em lote. Nenhum é PEDIR.

As 19 trocas foram aplicadas juntas numa cópia fora do repositório, e cada uma casa uma vez. A lista de prova está em
`C:\Users\zangp\AppData\Local\Temp\claude\C--projetos-alpha-point\b375663d-aa56-4ef7-91a0-2424b9ea0483\scratchpad\critico-r1\lista-achados.json`,
com os ids da prova, não os deste laudo.
- O `node ferramentas/aplicar-lista.mjs big-sur --seco` (com `--raiz` na cópia) sai SECO_OK. Passam as aspas, os numerais declarados
  item a item (o achado 4 declara a saída de "1986" e o 6, a de "half") e o "nenhuma frase do diff sem item". O texto falado vai de
  `c00a9cce37c4` a `37dd21299d42`.
- O `gate.mjs` PASSA sobre a cópia, com 2.335 palavras (−61; ≈12:41 a 184, ≈15:04 a 155), 190 frases, média 12,3 e maior 23. O gancho
  fica intacto (134, "But" na 19). Os 4 alertas são os mesmos, sem nenhum novo, as taxas ficam abaixo do teto e o autoplágio, vazio.
- Os pedidos à voz ficam entre 40 e 105 palavras, fora o 1º do gancho, com 35 de propósito. O 3º parágrafo de p1 fica com 40, no piso.
- A inscrição (fim de p4) passa a ≈46 % do vídeo nos dois ritmos. O comentário (f180–f181) não muda.
- O que nenhum item toca: o gancho, a assinatura, as pontes do plano e as frases das duas chamadas.

ACHADOS:

1. [MÉDIO · Factual (citação cortada; a atribuição diz menos que a linha) · DA-FONTE] `A way of life had ended.`
   → A frase anterior promete a linha inteira: "It sums up the change in one line." A linha do plano é "A way of life had ended, and a new
   era began for the beautiful country." (P [1233]–[1234], cópia local). A voz corta a segunda metade, e o balanço do plano (um fim E um
   começo) vira um epitáfio, logo depois dos colonos furiosos.
   → É a "citação cortada" da lista de armadilhas. A segunda metade é justamente a ponte para "The new road put the coast within easy
   reach.", a frase seguinte.
   → "for the beautiful country" fica fora de propósito: para quem ouve em qualquer país, "country" se ouve como "nação". O sentido da
   linha não muda sem ele. A folha recriada (regência) pode mostrar a linha inteira.
   → TROCA: `A way of life had ended, and a new era began.` (+5)
   → RAIZ: CITAÇÃO CORTADA

2. [MÉDIO · Factual (implicatura que o próprio texto desmente) · ESTREITAR] `Other families, after the Pfeiffers, had given land for parks too, and the plan credits their generosity.`
   → O "too" diz que os Pfeiffer também deram terra. O plano diz que John Pfeiffer **vendeu** 706 acres ao Estado em 1934 (P [1235]), e o
   roteiro disse "sold" um minuto antes (f103). Quem lembra ouve a contradição.
   → Os outros, sim, doaram ou puseram em fideicomisso: os Lathrop Brown, Elizabeth Livermore e Francis Molera (P [1236]–[1239]). O plano
   credita "these pioneering families" (P [1240]). "After" se apoia no "initiated by John Pfeiffer in 1934" (P [1235]).
   → É o 4º corte do plano. Se a Sala preferir cortar já, o saldo é −17 (é o S7 da subtração, abaixo). Com a troca, a frase fica certa e
   guarda as famílias.
   → TROCA: `After the Pfeiffer sale, other families gave land for parks, and the plan credits their generosity.` (−1)
   → RAIZ: PONTUAL

3. [MÉDIO · Factual (definição que não está em fonte; a fonte está no plano) · DA-FONTE] `A wilderness area is land set aside to stay wild, without roads or new buildings.`
   → A definição é verdadeira pela lei (o Wilderness Act), mas não está no dossiê. O editor a marcou como SEM APOIO, e a "forma fraca"
   proposta ("The plan describes trails and backpacking camps there, not homes.") põe um "not homes" que P [2228] também não diz.
   → O próprio plano tem a frase: "Land uses permitted in the Ventana Wilderness portion of the National Forest are limited to
   backcountry recreation." (P [1641]). E também "Hiking trails are scattered throughout the Ventana Wilderness and the National Forest
   backcountry." (P [1576]). Com as duas, a frase seguinte, "People can hike there, but they can't move in.", passa a ter apoio inteiro.
   Ela deixa de ser SEM APOIO e não muda.
   → O termo continua definido na 1ª vez, pelo que se pode fazer nele (voz §1).
   → TROCA: `In the wilderness, the plan limits land use to backcountry recreation.` (−4)
   → RAIZ: O DOSSIÊ SEM O TRECHO QUE O PLANO TINHA

4. [MÉDIO · Factual (conclusão por justaposição; frase do período errado) · CORTAR] `The same 1986 plan described a serious housing shortage for the people who worked on this coast, especially in the visitor business. Some, it said, had camped out, lived in cars, or moved in with friends.`
   → No mesmo pedido à voz vêm as casas vazias "for seasonal, recreational or occasional use" (ACS 2020–2024), as "homes people keep, but
   don't live in" e logo depois, sem transição, os trabalhadores de 1986 acampando e dormindo no carro.
   → O ouvido conclui duas coisas que nenhuma fonte lida diz:
   - que é assim hoje;
   - que as casas de temporada tiram o teto de quem trabalha.
   → O plano de 1986 punha as duas coisas juntas, mas na régua dele (1976, 17 % de segunda casa, P [1539]). O O4 saiu do roteiro
   justamente por ser uma terceira régua.
   → É o mesmo tipo de montagem que o juiz cortou no plano "a estrada" (os bombeiros lentos de 1986 colados ao fogo de 2026,
   `plano-final.json` › `o_que_fica_fora`). E pesa no tom que a pauta §3 pede: "sem julgar quem mora lá".
   → O "1986" está na frase, mas a cadência do parágrafo (2020 → 2020–2024 → Califórnia → 1986) é de continuidade, não de volta no tempo.
   O corte fecha o parágrafo em "…only about a third of the empty ones." (68 palavras).
   → TROCA: cortar as duas frases (−36; `numerais_removidos: ["1986"]`). Se a Sala quiser o rosto dos trabalhadores, ele só volta noutro
   lugar com a régua de 1986 inteira, nunca ao lado de um número de hoje.
   → RAIZ: JUSTAPOSIÇÃO DE PERÍODOS

5. [MÉDIO · Factual (ano derivado, no fecho) · ESTREITAR] `In 1986, the county wrote that whatever came next should stay out of this view.`
   → A capa do plano (P [3]–[7], cópia local) diz "Adopted by the Monterey County Planning Commission 2/11/81", "Board of Supervisors
   11/5/85" e "Certification Acknowledged by the California Coastal commission on April …, 1986".
   → O condado escreveu e aprovou o texto entre 1981 e 1985. 1986 é o ano da certificação do Estado e o ano do documento.
   → "In 1986, the county wrote" põe um ato do condado num ano derivado, na frase que fecha a resposta.
   → A troca deixa o 1986 como nome do plano, que é como a Sala o fixou ("the county's 1986 plan").
   → Os outros "1986" ficam:
   - "The county's answer came in 1986" (a ponte de entrada de p6) se lê como a resposta que entra em vigor com a certificação;
   - "In 1986, it estimated nearly three million visitors a year" tem o plano como sujeito e é o que o documento de 1986 diz. O ano exato
     da estimativa ("At present", num texto aprovado pela comissão em 1981) não é sabido. Vai ao verificador como sinal, não como troca.
   → TROCA: `In its 1986 plan, the county wrote that whatever came next should stay out of this view.` (+2)
   → RAIZ: O ANO DO DOCUMENTO DITO COMO O ANO DO ATO

6. [MÉDIO · ESCALA (duas "metades" que o ouvido não separa; termo sem definição) · ENFRAQUECER] `By then, about half of the coastal zone was public land, the plan says.`
   → p3 (≈3:14) diz que "About half of the land in the county's plan" é floresta nacional e área selvagem, e que "State parks take up
   more of the land". O ouvinte soma: público é mais da metade. p6 (≈7:51) diz que "about half of the coastal zone was public land". Ao
   ouvido, é uma contradição.
   → Na fonte não é: são dois denominadores. O de p3 é a área do plano, 150.000 acres (P [79]); o de p6 é a zona costeira (P [1514]).
   → Mas "coastal zone" aparece uma vez só, sem definição (voz §1: todo termo técnico se define na 1ª vez), e quem ouve não tem como
   saber que é outro território.
   → A troca tira o número que colide e guarda o fato, com a régua do plano ("this coast"). O "≈ HALF THE COASTAL ZONE PUBLIC · 1986"
   continua na tela, com o crédito.
   → TROCA: `By then, much of this coast was already public land, the plan says.` (−1; `numerais_removidos: ["half"]`)
   → RAIZ: ESCALA (O MESMO NÚMERO PARA DUAS COISAS)

7. [MÉDIO · Sotaque de máquina (promessa de espera; autoplágio de molde) · CORTAR + REDIZER] o narrador gerindo a memória do ouvinte
   → "Keep both outlines in mind" é o molde de "Keep those fish in mind.", que está no roteiro do vídeo 4
   (`roteiros/atlantico-fundo/roteiro-narrador.md`, p2). O teste do OFÍCIO §4.1 dá positivo: dá para reconhecer de que roteiro veio a
   estrutura. "will matter later in this story" é anúncio de importância antes da entrega.
   → As duas fazem o que a fala seguinte já faz:
   - a régua dos dois contornos está dita em f28–f29 e volta em f72 ("That count is for the whole coast in the plan, not just the census
     district.", que fica). O corte é o 2º de p1 no próprio plano, com a condição de f72 continuar, e f72 continua;
   - os dois deslizamentos se pagam em p7 sem aviso.
   → Fica o único lembrete que paga uma promessa do gancho: "The weather itself, remember, is mild."
   → TROCA (p1): `Keep both outlines in mind, because they don't describe the same ground.` → cortar (−12). Fica a emenda "…from Carmel
   down to the next county. ▸ To see why the census number is so low, start with the ground itself." (a ponte de saída, intacta; o
   parágrafo fica com 40).
   → TROCA (p3): `Two of them, Paul's Slide and Regent's Slide, will matter later in this story.` → `Two of them are called Paul's Slide and Regent's Slide.` (−4; nenhum nome nem número novo)
   → RAIZ: METRÔNOMO (A FALA QUE ANUNCIA A FALA)

8. [MÉDIO · Voz alta + sotaque (a atribuição como metrônomo) · CORTAR, três etiquetas] `the plan adds` · `Forest Service, the plan notes` · `the plan says, it had`
   → 45 das 187 frases citam o plano de 1986, e 13 com a etiqueta em parêntese (", the plan says,", ", the plan notes,", ", it says,").
   → Onde o compasso fica audível:
   - em p2, ≈2:04–2:57 a 184 (≈2:27–3:30 a 155): oito das 19 frases, cinco delas em sete frases (f35–f41);
   - em p6, ≈7:47–9:22 (≈9:14–11:07): treze das 24 frases.
   → A ponte de entrada de p6 ("in the plan this video keeps quoting", sagrada) brinca com isso, e a brincadeira não desfaz a cadência.
   → A cura não é tirar a atribuição. É tirar a etiqueta onde o parágrafo já disse de quem é e o fato não se contesta:
   - as falésias e as praias, depois de "in the words of the county's plan";
   - a floresta nacional federal, que é definição. O achado 3 põe ali uma atribuição nova, e esta compensa;
   - o "mover, redesenhar ou não construir", logo depois de "in the plan's own words".
   → Ficam todas as atribuições que a Sala exige: 1880, 1937 e os 8 milhões, a metade pública, os colonos furiosos e os engarrafamentos.
   → TROCA: `Much of the coast is bounded by sheer cliffs, the plan adds, and beaches are few.` → `Much of the coast is bounded by sheer cliffs, and beaches are few.` (−3)
   → TROCA: `It's federal land, owned by the U.S. Forest Service, the plan notes.` → `It's federal land, owned by the U.S. Forest Service.` (−3)
   → TROCA: `If a new building would show, the plan says, it had to be moved` → `If a new building would show, it had to be moved` (−3)
   → RAIZ: METRÔNOMO

9. [LEVE · Factual (a posição; o número arredondado sem o hedge) · ESTREITAR] `At Cone Peak, near the southern end of the coast, they reach 5,200 feet.`
   → O L1 põe o Cone Peak no distrito de San Ardo, logo ao sul da divisa, que chega ao mar a 35,99 N. A costa do plano vai até ~35,79 N.
   → A voz diz "near the southern end" do pico, de Mud Creek (a poucas milhas do fim) e, com "Toward the southern end", de Alder
   Creek: três "fim" para pontos a distâncias bem diferentes dele. O pico fica no terço sul, não no fim.
   → Os 5.200 pés são o arredondamento do plano ("reaching an elevation of 5,200 feet", P [53]). Os mapas dão um pouco menos ao pico
   (5.155 pés, de memória: o `mapista` mede, pauta §11, item 6). A voz §1 quer o número falado com o hedge.
   → TROCA: `At Cone Peak, in the southern part of the coast, they reach about 5,200 feet.` (+1)

10. [LEVE · Sotaque (andaime repetido 3×) · REDIZER] `One of them is the turnout at Bixby Creek, beside the bridge from the start of this video.`
    → "The bridge at the start of this video" (p4), "beside the bridge from the start of this video" (p6) e "to look at the bridge from
    the start of this video" (p9, ponte de entrada, sagrada). Com "the plan this video keeps quoting", são quatro "this video".
    → Na 2ª vez, a ponte já é conhecida: p5 acabou de dizer "the bridge at Bixby Creek". A 3ª (p9) fica, porque é o retorno.
    → TROCA: `One of them is the turnout beside the bridge at Bixby Creek.` (−6; nenhum nome novo)

11. [LEVE · Factual (a paráfrase diz mais que o trecho) · ENFRAQUECER] `a wildfire started in the national forest above the coast`
    → A página do CAL FIRE (leituras da Sala, §1) dá "Agency Having Jurisdiction: Los Padres National Forest" e "Location: Southeast of
    Loma Vista [36.224857,-121.72983]". Ela não diz onde o fogo começou, e o ponto contra o limite da floresta não foi lido (PAD-US, pauta
    §11, item 7).
    → "backcountry" é a palavra do próprio plano para a serra da floresta (P [1576]) e evita repetir "mountains", que vem na frase
    seguinte.
    → TROCA: `a wildfire started in the backcountry above the coast` (−1)

12. [LEVE · Factual (a duração comprimida) · ESTREITAR] `the fire came right after the long closures`
    → A estrada reabriu em 14/01/2026 (L5), e o fogo começou em 08/08/2026 (DS2): uns sete meses. "Right after" pesa a mão. "Only months
    after" diz o mesmo com a medida e guarda o tom que a Sala pediu.
    → TROCA: `the fire came only months after the long closures` (+1)

13. [LEVE · Factual (o 85 % não é só recreação e visitantes) · ESTREITAR] `capacity for recreation and visitors.`
    → P [1428] reserva os 85 % "to serve recreational travel, service trips to public and private recreation and visitor-serving
    facilities, use by military vehicles, and coastal-dependent agriculture", e a reserva vem "To comply to Coastal Act policies". A parte
    só dos visitantes não é dada.
    → O "So" fica: P [1341] liga a procura acima da capacidade ao limite do desenvolvimento.
    → TROCA: `capacity for visitors and a few other uses.` (+1)

14. [LEVE · Factual (o "relatively" que caiu) · DA-FONTE] `calls the water resources small and seasonal`
    → P [188]: "The relatively small seasonal water resources". Sem o "relatively", "calls … small" diz mais que o plano.
    → TROCA: `calls the water resources relatively small and seasonal` (+1)

15. [LEVE · Factual (o adjetivo que não está no trecho) · DA-FONTE] `in small clusters`
    → P [1493]: "in rural residential clusters in areas where development has historically been concentrated" (o vale do Big Sur e Palo
    Colorado Canyon estão entre essas áreas, P [1513]). O "small" é do roteiro.
    → TROCA: `in rural clusters` (0)

16. [LEVE · Factual (afirmação sobre um grupo de hoje, com o trecho de 1986) · ENFRAQUECER] `They come for the view the 1986 plan set out to protect.`
    → O grupo e o fato estão juntos no mesmo trecho, mas o trecho é de 1986 e fala de parte dos visitantes: "Visitors from other states and
    foreign countries who are attracted to Big Sur's scenic beauty" (P [1297]). No presente e com "They", a frase fala de todos os
    visitantes de 2026.
    → "Then they drive on." e "The census doesn't count them" seguem com o mesmo referente.
    → TROCA: `Many come for the view the 1986 plan set out to protect.` (0)


RISCO DE ABANDONO:
- **≈0:44–1:49 a 184 (≈0:52–2:10 a 155), p1.** O gancho perguntou duas vezes ("Why?" e "So why didn't more follow?"), e o que vem são
  213 palavras de régua antes da primeira resposta: o que é um distrito, por onde ele vai, 2020, 250 mi², seis por milha quadrada, o
  Wyoming, o Alasca, a Califórnia 40 vezes mais cheia e o contorno de 70 milhas.
  - São oito números em ~65 s, no trecho em que o espectador decide ficar.
  - O que segura é o mapa (o polígono aceso, a régua dos três quadrados) e o fato de a régua pagar o título.
  - O aviso dos leitores a frio pede esse trecho, e os degraus dele não se cortam. O achado 7 tira o que não é degrau.
- **≈4:57–5:37 a 184 (≈5:52–6:39 a 155), p4, 2º e 3º parágrafos.** Nove nomes próprios em ~70 s (os Pfeiffer, Charlie Bixby, Jim
  Anderson, os Post, Notley's Landing, Alder Creek, Manchester…), e o fio ("por que não vieram mais") vira crônica da costa.
  - Não é bloco lento pela conta (é o 3º mais denso, contando o gancho). É carga de nome.
  - Os dois primeiros cortes da subtração (S1 e S2: Manchester e os Post, −58, ≈22 s a 155) são exatamente esse trecho.
- **≈7:47–9:22 a 184 (≈9:14–11:07 a 155), p6.** O conteúdo é o centro do vídeo e prende (o teste da visão "in any direction, for any
  amount of time, at any season" é a melhor frase do roteiro), mas a cadência das atribuições ao plano chega ao pico: 13 das 24 frases. O
  achado 8 alivia.
- **A duração.** A 155 palavras/min o texto julgado dá 15:28 de fala (≈15:48 com a cauda). Com os achados, 15:04 (≈15:24). A subtração,
  abaixo, foi feita para isso.

METRÔNOMO (o efeito, não a contagem; o portão já conta):
- De p1 a p6, as seis partes fecham numa frase que anuncia a seguinte:
  - "start with the ground itself";
  - "The other reasons have more to do with who owns the land…";
  - "Even so, … people made a living on this coast";
  - "A road you could count on in every season was decades away";
  - "More visitors raised a harder question…";
  - "In the 2020s, the trouble was keeping that road open at all".
- Duas dessas saídas vêm coladas a uma pergunta que abre a parte seguinte: "start with the ground itself" → "So what makes this ground so
  hard to live on?", e "keeping that road open at all" → "So what happens to a coast like this when its road breaks?". É a mesma
  dobradiça dita duas vezes.
- **O molde fica audível na saída de p2 (≈3:08 a 184, ≈3:44 a 155):** "The other reasons have more to do with who owns the land, and what
  happened on it." é sumário puro (doutor, classe 4).
- p7 e p8 já fecham em prosa, e isso conta.
- As duas que devem acabar em prosa comum, numa rodada futura, são a saída de p2 (p2 fecharia em "That's one reason the census district
  holds so few people per square mile.") e a de p6 (fecharia em "…and who the road was for."; a pergunta de p7 faz a ponte sozinha).
- **As duas são pontes do plano (sagradas nesta lista, cético, item 1): fica a nomeação para a Sala, sem troca nesta rodada.** As outras
  quatro são estruturais:
  - a de p1 vira o vídeo da régua para a resposta;
  - a de p3 dá o antecedente de "They ranched";
  - a de p4 é a frase da inscrição;
  - a de p5 dá o "question" de que "The county's answer" precisa.

A ESCALA (o mesmo fato igual em todo lugar; vale de índice de ideias):
- "fewer than 1,500": o gancho (f3) e a última frase (f187), as duas com "the census district around this bridge". Iguais.
- "more than 17 million": f2 e f186, "Their metro areas hold" e "Together, they hold". Iguais, com a safra 2025 (17.474.482) e a base de
  2020 (17.958.344) acima de 17 milhões (L2). Em f109 vêm sem número ("less than a day's drive").
- "as empty as Wyoming" (f3, f175) e "about six people per square mile" (f24), com "that year" em f25. Coerentes (5,86 contra 5,94/mi²,
  2020 com 2020).
- "nearly a thousand", f8 e f71, as duas atribuídas ao plano e ditas "along this coast". f72 diz a régua.
- "about half": p3 e p6. É o achado 6.
- "near the southern end" ×3 (o Cone Peak, Mud Creek, Alder Creek): o achado 9.
- "the bridge (at/from) the start of this video" ×3 e "this video" ×4: o achado 10.
- "nearly fifty streams" (f44) e "dozens of streams" (f94): a mesma conta em palavras. Coerentes.
- "the homes along this road" (f158, ponte de entrada de p8). O censo conta as 887 casas do distrito inteiro, inclusive as das ravinas e
  das cristas, e "along this road" é largo. Aceito: a frase seguinte ancora no distrito ("the census district had a little under 900 of
  them"), e a ponte é do plano.
- O fogo: "hundreds of homes, businesses and other buildings" (661, DS2), "Firefighters were hurt" (3) e "almost fully contained" (97 %).
  O vocabulário está calibrado para o tamanho, sem "devastating", sem "destroyed" e sem "vazio" dito de quem passou por ele.
- O plano de 1986 com quatro nomes ("Monterey County's 1986 plan", "the county's plan", "the plan", "the same 1986 plan"): uma coisa só, e
  o ouvido acompanha.
- Os visitantes: o turismo que a estrada segurava (p4); os visitantes de diligência e os guias; "less than a day's drive", 1965 e o
  tráfego de verão (p5); os quase três milhões de 1986 e a estrada guardada para eles (p6); "came back" em 2026 (p8); os motoristas no
  mirante (p9). É o aviso dos leitores cumprido sem número de hoje.

VARREDURA "ESTADO DO MUNDO" (toda frase no presente, ou que diz que algo continua):
- Gancho:
  - "Their metro areas hold more than 17 million people": confirmada na safra 2025 (L2);
  - "It isn't the weather" e "calls the climate mild": o presente do documento, e o clima não muda de régua;
  - "a road that has closed again and again": confirmada até o fogo de 2026;
  - "the homes that often sit empty": confirmada pela ACS 2020–2024 (DS4), que o corpo data.
- p1:
  - "The census doesn't count a town called Big Sur" e "It counts a district": o censo de 2020 (C3, L1). Confirmadas;
  - "the most recent census": o de 2020, confirmada em novembro de 2026;
  - "The county's plan … draws", "It covers": o presente do documento.
- p2:
  - "Behind the coast rise…", "Much of the coast is bounded…", "Nearly fifty separate streams run…": geografia;
  - "Highway 1, the plan says, is the basic route": vale em 1986 e hoje;
  - "the census district holds so few people": a régua de 2020, dita em p1.
- p3:
  - "About half of the land in the county's plan lies inside…": datada pela régua do plano. A área federal pode ter crescido desde
    1986, e a frase diz "in the county's plan";
  - "It's federal land": confirmada;
  - "People can hike there, but they can't move in": confirmada com P [1641], pelo achado 3;
  - "State parks take up more of the land", "Homes have to fit on what's left": presente genérico, de acordo com o plano;
  - "Mud Creek lies…, outside the census district": confirmada (L1);
  - "Caltrans … has names…": confirmada (L5).
- p4: "carries Bixby's name": confirmada. P [1203] tem os nomes dos colonos nos acidentes; que o "Bixby" da ponte e do riacho é Charlie
  Bixby é a leitura da pauta §4.3, e não há fonte contra.
- p5: "One of those crossings is the bridge at Bixby Creek": confirmada.
- p6: a regra toda no passado, sem "still", "today", "now" nem "since 1986". O presente fica com "The plan calls…" e "It even names…",
  presente do documento.
- p7:
  - "By mid-October, it was almost fully contained": datada; confirmada até 20/10/2026 (97 %, DS2). Relê-se antes da publicação;
  - "By November 2026, the road was open from end to end again, with one-way traffic at a few work zones": datada; confirmada pela
    Caltrans "as of Sunday, November 1st, 2026 at 08:31 PM" (três mãos únicas, nenhum fechamento total, DS3) e pelo CAL FIRE ("The
    highway is fully reopened"). As mãos únicas acabam em 13/11, 30/11 e 31/12/2026: se a publicação passar de 13/11, "a few" continua
    valendo com duas. Relê-se.
- p8:
  - "The Census Bureau also runs an ongoing survey": confirmada;
  - "homes like that make up only about a third": a ACS 2020–2024, datada pela frase anterior;
  - "They come for the view": o achado 16;
  - "Then they drive on" e "The census doesn't count them": genéricas, certas;
  - "it's as empty as Wyoming" (f175): a régua de 2020 já dita;
  - "many of them are kept by people who live somewhere else": a ACS (DS4), datada.
- p9:
  - "drivers pull into the turnout": confirmada (a estrada aberta, DS3);
  - "Hardly a house is in sight": depende da imagem. A troca pronta do plano, se a imagem mostrar casa, é "From this turnout, the slopes
    look almost untouched.";
  - "That highway runs all the way from one metro area to the other": geografia, e a linha do OSM que a tela mostra, com o crédito, é a
    prova. Sinal ao verificador, não achado;
  - "Together, they hold more than 17 million people": a safra 2025.

SPOT-CHECK (cópias locais, sem rede):
- O plano de 1986 (`bigsur-lup-1986-govinfo.htm`, pelo `plano_trecho.py`), relidos hoje:
  - [51], [53], [54], [56], [58], [65], [66], [69]–[71], [79], [80], [186]–[189];
  - [226]–[248], [264], [270]–[278];
  - [1203]–[1240], [1291]–[1302], [1340]–[1342], [1426]–[1429], [1478]–[1494], [1512]–[1526], [1536]–[1549];
  - [1576], [1641], [1853], [2226]–[2229], [2880].
  - Confirmam a maior parte do texto. CORRIGEM a voz em quatro pontos: a linha cortada (achado 1); o "too" (achado 2); a definição, que
    tinha fonte no plano (achado 3); e o "relatively" e o "rural" (achados 14 e 15).
  - A capa, [3]–[7] (2/11/81, 11/5/85 e abril de 1986), CORRIGE o ano do fecho (achado 5).
  - [1428] dá o 85 % (achado 13), e [1514] contra [79] e [80] dá as duas metades (achado 6).
- As leituras da Sala de 02/11 (`leituras-sala-2026-11-02.md`):
  - o CAL FIRE confirma "08/08/2026", "25,352 Acres", "97% Contained" até 20/10, "661 Structures Threatened · Residential, Commercial and
    Other", "3 Confirmed Firefighter Injuries", os aviões-tanque "from throughout the State" e "CHP - Monterey has lifted the Highway 1
    closure". A jurisdição e o ponto CORRIGEM a origem (achado 11);
  - a Caltrans (estradas, 01/11/2026 20:31) confirma f157;
  - a Caltrans (14/01/2026) confirma os "4,600 steel bars" de f143 e o "$82.6 million";
  - a ACS (B25004) confirma 265 ± 94 de 285 ± 95 (93 %), o condado de Monterey com 54 % e a Califórnia com 33 %.
- As contas do editor, conferidas contra o C1, o C2, o C3 e o L2 da pauta: o Alasca com 1,28/mi², o Wyoming com 5,94 e Montana com 7,45
  ("only Alaska" vale contra o distrito e contra o Wyoming); 253,7 / 5,86 = 43× ("more than 40 times"); 345 / 887 = 38,9 % ("almost four
  in ten").

DECISÕES SOBRE OS ALERTAS DO PORTÃO E OS SINAIS DO EDITOR:
- **Os alertas.**
  - "nobody", aceito: é negação ("it isn't that nobody came"), e o número vem com o dono na frase seguinte.
  - "never", aceito: "the coast that never filled up" é o tema e é honesto.
  - "first", aceito: P [1291] ("the first State scenic Highway in California"), atribuído.
  - A 1ª frase sem número, aceita: é a imagem (a ponte, dentro do distrito), e o número vem na 2ª e na 3ª, na ordem que a crítica do
    Lucas ao Mar Negro pede.
- **"So why didn't more follow?" (f9), aceita.** "More" é comparativo. A pauta §5 manda pôr os quase mil e o 1.474 na mesma cena, cada um
  com o dono, e o próprio p1 dá a escala (a Califórnia 40 vezes mais cheia). A troca pronta ("So why didn't more people move in?") tem a
  mesma pressuposição e não ganha nada.
- **O que o editor deixou para a bancada:**
  - SEM APOIO: f53 e f54 (achado 3), f116 (achado 2) e f148 (achado 11). f185 fica, porque é geografia e a linha do OSM na tela a
    mostra.
  - A CONFERIR: f74 e f180 ficam (P [1203] e a pauta §4.3). f94 fica: é lógica, e uma estrada na costa cruza cada riacho que chega ao
    mar. f153 e f157 são voláteis datados e se releem. f176 fica: "live somewhere else" é o sentido de casa vaga, sem morador habitual.
    f181 fica, porque fala da estrada inteira (FHWA). f182 depende da imagem.
  - LEVES: f34 (achado 9), f45 (achado 14), f132 (achado 13), f156 (achado 12) e f160 (achado 15). f179 fica: "the viewpoints the
    county's rule was written to protect" se entende como a vista deles.
- **Sugestão fora da rubrica, não achado:** "were not allowed to scar that view either" (f124) usa figura onde o plano diz "damage or
  intrude upon" (P [241]). Pelo teste de remoção, "damage" não perde nada. Fica a gosto do roteirista.
- **Sinal ao verificador:** "In 1986, it estimated nearly three million visitors a year." O "At present" do plano está num texto aprovado
  pela comissão em 1981 (achado 5).

O QUE ESTÁ FORTE:
- **O gancho põe o normal antes da surpresa e paga o título nas três primeiras frases.**
  - Big Sur entre Los Angeles e San Francisco, as duas regiões com mais de 17 milhões e, no "But" da palavra 19, o distrito em volta da
    ponte com menos de 1.500, "as empty as Wyoming". O "Why?" vem na palavra 35.
  - A segunda virada (não é o clima; não é que ninguém veio) vira a pergunta.
  - A resposta anunciada tem quatro peças, e cada uma se paga numa parte. O livro-razão do editor fecha linha por linha.
- **A régua e a cadeia referencial.**
  - Todo número do distrito diz "the census district", e todo número do plano diz "this coast" ou "the whole coast in the plan". Mud
    Creek é dito "outside the census district", e os anos 1880 trazem a régua na voz (f72).
  - O tríptico de p8 ("Count the people… Count the homes… Count the cars…") transforma o primeiro aviso dos leitores (o distrito claro) e
    o segundo (a virada além de "montanha") no pagamento do vídeo. É a única tríade anafórica que merece o lugar, e por isso a recapitulação
    "Steep ground, slipping ground, public ground…" de p3 é o 3º corte da subtração.
- **O fecho é uma cena com um documento dentro.**
  - O mirante de Bixby Creek, nomeado pelo plano (P [230]), é plantado em p6 e pago em p9. "Part of that is the mountains, and part of it
    was a choice." dá a resposta sem lista e sem repetir a pergunta.
  - As duas cifras do gancho voltam espelhadas.
  - Conferido contra os cinco fechos anteriores, o molde é outro: sem "So", sem lista e sem o par curto aforístico.
- O fogo de 2026 entra com dono (CAL FIRE e Caltrans), em palavras, no tom de quem fala de gente que acabou de passar por ele. A frase do
  tom ("For the people who live along this road…") faz a dobradiça p7 → p8.

NÃO TOCAR:
- **O gancho inteiro**, palavra por palavra: as três primeiras frases e o título nelas, o "But" na palavra 19, o "Why?", "It isn't the
  weather.", "And it isn't that nobody came.", "So why didn't more follow?", "The mountains are only part of it.", a frase da estrada e da
  regra, "And then there are the homes that often sit empty." e a assinatura ("…the story of the coast that never filled up begins.").
- **As pontes do plano, como estão no texto:**
  - p1: "The census doesn't count a town called Big Sur." → "To see why the census number is so low, start with the ground itself.";
  - p2: "So what makes this ground so hard to live on?" → "The other reasons have more to do with who owns the land, and what happened
    on it.";
  - p3: "About half of the land in the county's plan lies inside the Los Padres National Forest and the Ventana Wilderness." → "Even so,
    long before the highway, people made a living on this coast.";
  - p4: "They ranched, mostly to feed their own families." → "A road you could count on in every season was decades away.";
  - p5: "The idea of a scenic highway, open all year, came from Doctor John Roberts, the founder of the city of Seaside." → "More visitors
    raised a harder question for the county, about how much of this coast should be built on at all.";
  - p6: "The county's answer came in 1986, in the plan this video keeps quoting." → "In the 2020s, the trouble was keeping that road open
    at all.";
  - p7: "So what happens to a coast like this when its road breaks?" → "By November 2026, the road was open from end to end again, with
    one-way traffic at a few work zones.";
  - p8: "The census counted the homes along this road, too." → "Count the cars on Highway 1, and you find a road the county was already
    rationing in 1986.";
  - p9: "Back at Bixby Creek, drivers pull into the turnout to look at the bridge from the start of this video."
  - A nomeação do METRÔNOMO (as saídas de p2 e de p6) vai à Sala.
- **As chamadas:** a inscrição, na pausa depois de "Some locals earned extra money guiding hunters and fishermen from the cities.", sobre
  "A road you could count on in every season was decades away.". O comentário, sobre "The creek below carries a homesteader's name. Above
  it runs a road that prisoners helped cut into the cliffs.".
- **p1:**
  - "It counts a district, one of the areas the Census Bureau draws inside a county to report its numbers." (o termo definido);
  - "Behind the shore, it climbs into the mountains." (o degrau dos 250 mi²);
  - "Spread its people evenly across all of it. You get about six people per square mile. Wyoming had about the same that year.";
  - "Among U.S. states, only Alaska had fewer people for its size." (conferida);
  - "California, the most populous of them, was more than 40 times as crowded.".
- **p2:** "The weather itself, remember, is mild." (o único lembrete; paga o gancho).
- **p4:** "That count is for the whole coast in the plan, not just the census district." (com o achado 7, é a régua dita na voz).
- **p5:**
  - "Work on the coast highway began in 1919, according to the Federal Highway Administration.";
  - os presos com a medida ("Part of the labor came from prisoners." a "…their sentences were reduced.");
  - "In 1934, while the road was being built, John Pfeiffer sold land to the state for a park.".
- **p6:**
  - o teste da visão ("The test, in the plan's own words, was normal, unaided vision, in any direction, for any amount of time, at any
    season.");
  - "Out of sight of the road, new homes were possible, with conditions.";
  - "All the new homes together could use no more than 15 percent of it.";
  - "The rule didn't empty this coast. The coast was thinly settled long before 1986.".
- **p7:**
  - as datas dos deslizamentos e "For almost three years, you couldn't drive this coast from end to end.";
  - "Even then, it warned drivers to expect occasional full closures while crews cleared debris." (a honestidade do hoje);
  - "Firefighters were hurt fighting it.";
  - "For weeks, Caltrans kept parts of Highway 1 inside the census district closed.";
  - a frase do tom, com as duas palavras do achado 12.
- **p8:** "Empty, on census day, doesn't have to mean abandoned." e o tríptico inteiro.
- **p9:** tudo, fora a troca do achado 5. "Hardly a house is in sight." fica, se a imagem não mostrar casa.

---

SUBTRAÇÃO (lente do doutor de roteiro; não entra na lista desta rodada)

Para quando o teste às cegas do ritmo pedir texto mais curto: a 155 palavras/min, o texto julgado dá 15:28 de fala. Oito cortes, em ordem
de preferência, com **−124 palavras (≈40 s a 184, ≈48 s a 155)**. Todos foram medidos numa cópia fora do repositório, pelo
`aplicar-lista.mjs` e pelo `gate.mjs`:
- **Sobre o texto julgado (`c00a9cce37c4`):** os oito juntos dão 2.272 palavras, ≈12:21 a 184 e ≈14:40 a 155 (≈15:00 com a cauda). O
  portão PASSA, com 33 parágrafos (o S2 junta dois), 183 frases, média 12,4, o gancho igual, os mesmos 4 alertas e nenhum autoplágio. O
  sha12 do texto falado fica `b944109ad12a`.
- **Sobre o texto com os achados desta rodada (`37dd21299d42`, 2.335 palavras):** só os quatro primeiros cabem acima do piso de 2.250 do
  portão. Eles dão 2.257 palavras, ≈14:34 a 155 (≈14:54 com a cauda), e o portão PASSA (sha12 `59c449fb24a7`). Os oito juntos dão 2.212,
  e o portão REPROVA pela faixa. A partir do 5º, a Sala baixa o piso junto com a decisão do ritmo.
- **Se a Sala não aplicar o achado 4** (os trabalhadores de 1986), ele vira o 1º corte da subtração (−36), e cabem mais dois.

As minutagens são as do texto julgado, pela posição da palavra no `contar()` do portão, a 184 / a 155, fala sem a vinheta. O texto ainda
não foi gravado, e cada corte aqui custa zero.

**O sagrado, marcado antes de cortar e não tocado:**
- o gancho inteiro, o título nas três primeiras frases, o "But" e a pergunta antes dele, e a assinatura;
- as pontes de entrada e de saída de cada parte, as frases das duas chamadas e o tríptico de p8;
- a primeira ocorrência de cada explicação;
- os pagamentos do livro-razão: o clima em f47, a régua em f72, o fogo da lista em f147, os deslizamentos em p7 e o mirante em p6 e em p9.

**O mapa de blocos** (as informações novas contadas por frase, sobre o tempo a 155):

| Bloco | Tempo a 155 | Informações novas | Por minuto | E se saísse inteiro? |
|---|---|---:|---:|---|
| gancho | 0:52 | 10 | 11,5 | sagrado |
| p1 · a régua | 1:22 | 14 | 10,2 | perde o distrito e o Wyoming medido: o aviso dos leitores |
| p2 · a serra | 1:36 | 13 | 8,1 | perde a física (o porquê do "mountains") |
| p3 · terra pública e que anda | 1:27 | 14 | 9,7 | perde a metade federal e Mud Creek |
| p4 · por mar | 1:57 | 22 | 11,3 | perde os anos 1880 pagos e a estrada que não havia |
| p5 · a estrada | 2:01 | 21 | 10,4 | perde a obra, os presos e o "a way of life" |
| p6 · a regra | 2:04 | 23 | 11,1 | perde a resposta central |
| p7 · os fechamentos e o fogo | 1:37 | 19 | 11,8 | perde o hoje |
| p8 · casas e visitantes | 1:43 | 15 | 8,7 | perde a virada da régua |
| p9 · o mirante | 0:49 | 4 | 4,9 | fecho (o retorno é o produto) |

- Nenhum bloco se arrasta: a mediana é ~10,3 por minuto.
- O rodapé é p2, p8 e p3, e eles caem por frases de anúncio e de recapitulação. p8 cai também pelo tríptico, que é pagamento, e por isso
  fica.
- p9 é o fecho, e no fecho a volta é o produto.
- **Não há corte de bloco inteiro. A gordura é de detalhe (p4) e de anúncio (p2 e p3), e vale ~48 s a 155.**
- O único corte estrutural (família B) é o par S1 + S2 em p4. Os outros seis são micro-cortes limpos (frase inteira, em pausa) e entram
  porque há um estrutural na lista (o piso do OFÍCIO §7).

**S1 · p4 · B-12 descida de detalhe + B-10 enumeração · −38**
- IN → OUT: 5:24 → 5:37 a 184 / 6:25 → 6:39 a 155.
- Sai: `Toward the southern end, gold turned up near Alder Creek. A boomtown called Manchester grew on the creek, with stores, saloons, a dance hall and a hotel. By 1895, the plan says, the boom had begun to fade.`
- Redação nova: nada (`numerais_removidos: ["1895"]`).
- Emenda: `…Around one of them, Notley's Landing, a thriving village sprang up. ▸ [¶] Over land, there was a road of sorts.`
- Testes:
  - única vez: o ouro já está em "They mined limestone and gold.";
  - degrau: não é; Manchester não volta;
  - dívida: nenhuma.
- Checagens:
  - fronteira: frase inteira;
  - conectivo pendurado: nenhum;
  - referência órfã: nenhuma;
  - respiração: fim de parágrafo.
- O 3º parágrafo de p4 fica com 64.
- É o 2º corte do plano. É o trecho mais vivo do bloco (os saloons), e por isso o laudo o declara. Mas é o que mais pesa na carga de nomes
  do sag.

**S2 · p4 · B-12 descida de detalhe · −20**
- IN → OUT: 4:57 → 5:03 / 5:52 → 6:00.
- Sai: `Big Sur's original post office and its second schoolhouse were built on the ranch of another homesteading family, the Posts.`
- O 2º parágrafo de p4 ficaria com 28 palavras, abaixo do piso de 40 dos pedidos à voz. Por isso ele se junta ao 1º, que fica com 91.
- Redação nova: o "de" `not just the census district.\n\nSome of the original homesteaders … the Posts.` vira `not just the census district. Some of the original homesteaders left their names on the map: the Pfeiffers, Charlie Bixby, Jim Anderson. The bridge at the start of this video carries Bixby's name.` (`numerais_removidos: ["second"]`).
- Emenda: `…The bridge at the start of this video carries Bixby's name. ▸ [¶] There was no highway.`
- Testes: única vez (os Post não voltam), degrau (não é), dívida (nenhuma).
- Checagens: fronteira de frase, nenhum conectivo pendurado, nenhuma referência órfã, e a respiração no fim de parágrafo.
- É o 1º corte do plano.

**S3 · p3 · A-3 recapitulação · −10**
- IN → OUT: 4:20 → 4:23 / 5:08 → 5:12.
- Sai: `Steep ground, slipping ground, public ground, and not much water.`
- Redação nova: nada.
- Emenda (com o achado 7): `…Two of them are called Paul's Slide and Regent's Slide. ▸ Even so, long before the highway, people made a living on this coast.`
- Os quatro itens foram ditos entre 1:56 e 4:15, e são conceitos simples ainda vivos. A tríade anafórica ("X ground" ×3) antecipa e gasta
  o molde do tríptico de p8, que é o pagamento.
- Testes: não é única vez, não é degrau. Dívida: o "Even so" da ponte fica apoiado nos deslizamentos e na terra que anda. Fica um pouco
  mais leve, mas não fica órfão.
- Checagens: fronteira de frase, conectivo ("Even so") com antecedente, nenhuma referência órfã; a respiração é a mesma do parágrafo.

**S4 · p2 · A-4 preâmbulo · −10**
- IN → OUT: 2:38 → 2:42 / 3:08 → 3:12.
- Sai: `Then there's water, which sounds like the odd one out.`
- Redação nova: nada (`numerais_removidos: ["one"]`).
- Emenda: `…crossed a military reservation. ▸ [¶] Nearly fifty separate streams run down these mountains, according to the plan.`
- A frase só sinaliza o item seguinte da lista (a água já está em f38), no bloco mais lento do corpo. É o 1º corte do plano em p2.
- Testes: não é única vez, não é degrau, sem dívida ("Yet it calls the water resources…" diz o tema).
- Checagens: fronteira de parágrafo, nenhum conectivo pendurado, nenhuma referência órfã, respiração em fim de parágrafo.
- O 3º parágrafo de p2 fica com 48.

**S5 · p5 · B-12 · −10**
- IN → OUT: 6:17 → 6:20 / 7:27 → 7:31.
- Sai: `California voters approved more state money for it soon after.`
- Emenda: `…according to the Federal Highway Administration. ▸ Along the route, dozens of streams had cut deep canyons to the sea…`
- O dinheiro da obra não volta. É o 3º corte do plano.
- Testes: única vez, mas não é explicação; não é degrau; sem dívida.
- Checagens: fronteira de frase, nenhum conectivo nem referência órfã, respiração em fim de frase.

**S6 · p7 · B-12 · −10**
- IN → OUT: 10:20 → 10:23 / 12:16 → 12:20.
- Sai: `Air tankers from across California flew missions over the ridges.`
- Emenda: `…and it spread through these mountains. ▸ CAL FIRE, the state's fire agency, listed hundreds of homes, businesses and other buildings as threatened.`
- O fogo já tem dono, tamanho e gente. É o 5º corte do plano.
- Testes: não é degrau, sem dívida. Checagens: fronteira de frase, sem conectivo nem referência órfã.

**S7 · p6 · B-12 / A-5 digressão · −16 (−17 no texto sem o achado 2)**
- IN → OUT: 7:56 → 8:01 / 9:25 → 9:31.
- Sai, com o achado 2: `After the Pfeiffer sale, other families gave land for parks, and the plan credits their generosity.` Sem o achado 2, o texto julgado:
  `Other families, after the Pfeiffers, had given land for parks too, and the plan credits their generosity.`
- Emenda: `…public land, the plan says. ▸ The plan's basic rule was about what you can see.`
- As doações não pagam nada adiante: os parques têm nome em p3. É o 4º corte do plano.
- Testes: única vez, mas não é explicação; não é degrau; sem dívida.
- Checagens: fronteira de frase, sem conectivo nem referência órfã.

**S8 · p3 · B-12 · −9**
- IN → OUT: 4:00 → 4:03 / 4:45 → 4:48.
- Sai: `The agency was tracking how the slide kept changing.`
- Emenda: `…flew a drone over the slide. ▸ In his video, the road simply disappears under a new slope of earth and rock.` ("his" continua com
  Shawn Harrison).
- É o 1º corte do plano em p3, e a reserva da inscrição, que já estava fora da janela de 35 % (editor, "As chamadas").
- Testes: não é degrau, sem dívida. Checagens: fronteira de frase, sem conectivo, sem referência órfã.

**O saldo, acumulado:**
- sobre o texto julgado (2.396): S1 2.358 · S2 2.338 · S3 2.328 · S4 2.318 · S5 2.308 · S6 2.298 · S7 2.281 · S8 2.272;
- sobre o texto com os achados (2.335): S1 2.297 · S2 2.277 · S3 2.267 · S4 2.257 · S5 2.247 (abaixo do piso).

**Quase cortei (ficam, com o motivo):**
- "The census doesn't count them, because this isn't where they live." (p8, o 1º corte do plano ali): é a única frase que diz que o censo
  conta só quem mora, e é o degrau do tríptico.
- "Behind the shore, it climbs into the mountains." (p1): é o degrau dos 250 mi² (sem a serra, o ouvinte imagina uma faixa de praia).
- "Among U.S. states, only Alaska had fewer people for its size." (p1): dá a escala do Wyoming, e o "of them" de f27 depende dela.
- "Even then, it warned drivers to expect occasional full closures…" (p7): a honestidade do hoje.
- "Firefighters were hurt fighting it." (p7): o rosto do fogo.
- A glosa "the earthmoving that reshapes a slope" (p6): a definição na 1ª vez (voz §1).
- "Back in 1986, the county's plan had found homes like these…" (p8): separa dois números (a regra "um número por frase").
- As saídas de p2 e p6 (METRÔNOMO): são pontes do plano.

**Suspeitas achadas de graça (não são corte):** as do laudo acima (achados 1 a 16). Nenhuma diferença entre o texto e a cópia para a voz
foi conferida, porque a `voz/trocas.md` ainda não existe. O "fifteen hundred" do gancho é obrigatório nela (`escrita-notas.md` §3).
