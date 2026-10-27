# Lista fechada · rodada 3 · atlantico-fundo

Revisão julgada: `b064eb75cb8c`

> O doutor de roteiro, 26/10/2026, à noite. Esta lista é **só a decisão do Lucas** (no chat da Sala, ~23:5x, depois de ler
> `b064eb75cb8c`). A pergunta: "Depois de ler o roteiro: o que faço com o trecho do Atlântico Sul, que o ouvinte achou longo?" A
> resposta: "Enxugar o Atlântico Sul (Recomendado)". A opção dizia: "Ficam a outra candidata, a resposta (ela é uns 370 pés mais
> rasa) e a linha de 60°S, que defendem o título. Saem a Argentina, a história do nome Meteor e os nomes Factorian e Limiting. Uns
> 30 s a menos, no limite do piso de 1.950 palavras. Depois, mais uma revisão curta."
>
> Lidos inteiros: o ofício e o contrato do doutor (`C:/projetos/regie-v1/crafts/doutor-de-roteiro/`), o item 1 de
> `out/_analises/estudo-roteiro/cetico.md`, o topo do `ferramentas/aplicar-lista.mjs` e do `_ferramentas/gate.mjs`, os laudos
> `qc-roteiro/roteiro-r2b`, `clareza-r2b`, `locucao-r2b` e `escuta-fria-r2b` (que julgaram `432dcb4041d4`) e `fatos-r3` (que julgou
> `b064eb75cb8c`: PASS, 289 de 289, nenhum achado), o roteiro, o `roteiro-editor.md`, a `pronuncia.md` e, no dossiê
> (`pautas/atlantico-fundo/fundamento.json`), F02, F73–F76, F79–F83 e F85, N14, N15, N20, N21 e N48. Sem rede.
>
> A lista que o aplicador lê é `lista-r3.json`, montada por `pautas/atlantico-fundo/_trabalho/scripts/lista-r3-montar.py` (os trechos
> longos do editor e da folha saem dos próprios arquivos, por âncora). Os pedidos ao escritor, `pedidos-r3.json`, vão vazios. Nada
> foi aplicado ao roteiro, ao editor nem à folha.

## O resultado

- **6 trocas, L75–L80** (a numeração continua a da r2c, L74), todas em p7: quatro CORTAR (a decisão do Lucas), um REORDENAR (a ponta
  sul da fossa, que fica porque passa a servir à linha de 60°S) e um DO-DOSSIE (a emenda do piso, sem fato, número nem nome novos).
- **0 pedidos ao escritor** (`pedidos-r3.json`, `itens: []`).
- **O texto:** `b064eb75cb8c` → `286ff3abf7c7`. **2.030 → 1.956 palavras** (−74: os cortes tiram 94, a emenda põe 20; ≈ 11:02 →
  ≈ 10:38 de fala, uns 24 s a menos), 6 acima do piso e 194 abaixo do teto. 29 → 28 parágrafos (o 3º e o 4º de p7 viram um); 160 →
  154 frases; média 12,7 → 12,8; maior frase 28. p7 passa de 311 a 237 palavras (o orçamento do plano é 300).
- **`node ferramentas/aplicar-lista.mjs atlantico-fundo --lista=roteiros/atlantico-fundo/_trabalho/lista-r3.json --seco`: exit 0
  (SECO_OK).** 6 itens, 4 diferenças, nenhuma frase sem item, 0 recusas, 0 avisos, 0 pendentes. As provas: (a) aspas 3 → 3; (b)
  numerais 110 → 104, o saldo de cada item igual ao declarado (L76: "2021", "30"; L77: "one", de "for one"; L78: "2019", "20",
  "half", de "the other half"; o "one" e o "half" são palavras que o contador lê como numeral, não números do texto); (c) parágrafos,
  3 mudados, cada um com o seu "de"; (d) REDIZER, nenhum item. Os 37 pares do editor casam uma vez cada. O gate do aplicador: antes
  PASSA (2.030), depois PASSA (1.956), o mesmo sha da cópia.
- **O portão na cópia** (`_trabalho/_tmp-lista-r3.md`, as mesmas trocas aplicadas por
  `pautas/atlantico-fundo/_trabalho/scripts/lista-r3-copia.py`, que confere também os pares do editor e da folha em memória):
  `node roteiros/atlantico-fundo/_ferramentas/gate.mjs roteiros/atlantico-fundo/_trabalho/_tmp-lista-r3.md` dá **PASSA**, exit 0, sha
  `286ff3abf7c7b32c…` (o mesmo do aplicador), 1.956 palavras, 28 parágrafos, 154 frases, média 12,8, maior 28; gancho intacto (166
  palavras até a assinatura, "But" na palavra 49, a pergunta antes da assinatura); 0 problemas; os mesmos 8 alertas de antes, todos
  decididos ("never" ×2, "first" ×2, "Milwaukee Deep" ×3, o "still" do gancho), nenhum alerta de fecho; taxas abaixo do teto
  (nenhuma em alerta); autoplágio vazio. Não há pedido pendente que mude o tamanho de parágrafo depois: a conta acima é a final.
- **Os pedidos à voz** (a contagem do portão, `medida-partes-r1.py`): p7 1º 84 → 78 (L75); 2º 107 → 74 (L76); o 3º (49) e o 4º (71)
  viram um só, com 85 (L77–L80). Os 28 ficam entre 44 e 109 (a regra é 40 a 110). Nenhum outro muda.
- **As chamadas** (`lista-r2-chamadas.py` na cópia): nenhuma muda de frase. A reserva, palavras 1.031–1.040 (≈ 5:35, 51 %); a
  inscrição, 1.085–1.095 (≈ 5:53, 54 % de ≈ 10:58 com a cauda; dentro de 35–60 %); o comentário, de ≈ 10:23 a ≈ 10:32, e a última
  frase de ≈ 10:32 a 10:38. A ponte dos peixes chega a ≈ 9:39 (era ≈ 10:03).

## p7 depois da lista (a emenda escrita)

> The Atlantic has another contender for its deepest point: the South Sandwich Trench, far to the south, where one plate dives under
> another about three inches a year. That is three to four times the pace of the plates off Puerto Rico. The islands there are a chain
> of small volcanoes, with no permanent residents. In August 2026, a Landsat satellite caught the heat of a lava lake in the crater of
> Mount Michael, one of those volcanoes.
>
> The expedition mapped this trench with its sonar in 2019. Before that, about nine-tenths of it had never been mapped. Stewart and
> Jamieson's study noted the depth most often published for its deepest point. It was deeper than the sonar's number for Puerto Rico.
> The sonar settled that. The trench's deepest point, the Meteor Deep, is about 370 feet shallower than the one off Puerto Rico. The
> expedition mapped it but didn't dive there.
>
> In 2023, the International Hydrographic Organization recognized the Southern Ocean. It begins at 60 degrees south. The trench's
> southern tip crosses the line. By that line, the Meteor Deep, well to the north, is in the Atlantic. The organization says the line
> carries no political meaning, and not every country uses it. With the line or without it, the deepest point in the Atlantic lies at
> the other end of the ocean. Off Puerto Rico, the 1964 crew's fish were waiting for a second look.

## As trocas

Minutagem pela contagem do portão a 184 palavras/min, sobre `b064eb75cb8c`, sem a vinheta (roteiro antes de gravar: a borda é a
frase, e o corte custa zero de produção). As quatro checagens de cada emenda e os três testes do ofício (§3 e §6) vão em cada item.

### L75 · CORTAR · ≈ 8:44 → 8:46 (6 palavras, ≈ 2,0 s) · decisão do Lucas; escuta-fria F01 GRAVE; clareza (considerado)

- SAI: "Both Britain and Argentina claim them."
- EMENDA: "…a chain of small volcanoes, with no permanent residents. ▸ In August 2026, a Landsat satellite caught the heat of a lava lake…"
- Checagens: fronteira de frase inteira; nenhum conectivo pendurado ("In August" é data); referência ok ("one of those volcanoes" volta
  a "a chain of small volcanoes", que fica); a borda é ponto final, com pausa.
- Explicação: não é a única vez de nada que o vídeo usa depois (a soberania não volta); não é degrau (a frase do vulcão não depende
  dela); dívida nenhuma. Sai com ela a tela SOUTH SANDWICH ISLANDS · CLAIMED BY BOTH THE UK AND ARGENTINA; se o mapa rotular as ilhas,
  só o nome, sem bandeira e sem dono (N15).

### L76 · CORTAR · ≈ 9:17 → 9:28 (33 palavras, ≈ 10,8 s) · decisão do Lucas; escuta-fria F01; clareza (o maior deserto)

- SAI: "The name Meteor Deep is old, taken from a German research ship. Since 2021, that name has officially marked the spot the sonar
  found, about 30 miles from where older sources put it."
- EMENDA: "…is about 370 feet shallower than the one off Puerto Rico. The expedition mapped it but didn't dive there. ▸ [¶] In 2023, the
  International Hydrographic Organization recognized the Southern Ocean."
- Checagens: duas frases inteiras, no fim do parágrafo; nada pendurado; o "Meteor Deep" continua apresentado ("The trench's deepest
  point, the Meteor Deep") antes de voltar em "By that line, the Meteor Deep…"; a borda é fim de pedido à voz.
- Explicação: a história do nome é a única vez dela, e a decisão do Lucas a tira; nada adiante depende dela (o nome fica como nome do
  ponto). Saem "2021" e as ~30 mi (que só serviam ao nome). A nota de mapa (o ponto antigo acendendo e apagando) sai com ela.

### L77 · CORTAR · ≈ 9:43 (4 palavras, ≈ 1,3 s) · decisão do Lucas; escuta-fria F01; clareza (considerado); roteiro (risco 9:27–10:06)

- SAI: "Argentina, for one, disagrees."
- EMENDA: "…and not every country uses it. ▸ With the line or without it, the deepest point in the Atlantic lies…" (com a L80)
- Checagens: frase inteira; nada pendurado; a ressalva de que nem todo país usa a linha fica inteira na frase de antes (F82,
  atribuída à organização); pausa de ponto final.
- Explicação: não é degrau (a ressalva geral basta para o que vem depois); some também a leitura que a clareza apontou (a Argentina
  colada a "no political meaning", ouvida como objeção política ou pelas ilhas).

### L78 · CORTAR · ≈ 9:46 → 10:03 (51 palavras, ≈ 16,6 s) · decisão do Lucas; escuta-fria F01; roteiro (risco 9:27–10:06); clareza (o maior deserto)

- SAI: "Just south of the line lies the deepest point of the Southern Ocean, the Factorian Deep. The expedition's sub, the Limiting Factor,
  reached the bottom there in 2019, and that's where the odd name comes from. Its neighbor, about 20 miles away, got the other half of
  the name: Limiting Deep."
- EMENDA (passo intermediário, antes da L79): "…The trench's southern tip crosses the line. ▸ Off Puerto Rico, the 1964 crew's fish were
  waiting for a second look."
- Checagens: três frases inteiras, que só se explicam juntas ("there", "the odd name", "Its neighbor", "the other half"), por isso um
  item só; nenhum pronome fica sem antecedente; a ponte que segue abre com lugar, sem conectivo.
- Explicação: os nomes Factorian e Limiting são a única vez deles, e a decisão do Lucas os tira; nada depois os usa. **A dívida que o
  corte cria, conferida:** a ponte de p6 ("The expedition also took its sonar, and its sub, to the other end of the Atlantic.") era
  paga também pelo mergulho no Factorian. Ela fica paga pelo sonar ("The expedition mapped this trench with its sonar in 2019") e pelo
  submersível que esteve lá e não mergulhou no Meteor ("The expedition mapped it but didn't dive there."), e o submersível volta em p8
  ("the same sub"). A ponte de p6 é do plano e fica como está (esta lista só mexe em p7); a dívida é leve e vai à Sala ("À Sala").
  Saem "2019", as ~20 mi e, no editor, as telas 7,432 ± 13 M · FACTORIAN DEEP e ≈ 20 MI · LIMITING DEEP, os anéis e a ilustração do
  nome partido.

### L79 · REORDENAR · a ponta sul da fossa, de ≈ 9:44 para ≈ 9:20 da cópia (0 palavras) · a tarefa (a frase da ponta); escuta-fria F01; o pedido à voz

- SAI de depois de "…and not every country uses it." e ENTRA logo depois de "It begins at 60 degrees south.": "The trench's southern tip
  crosses the line."
- O antigo 4º parágrafo de p7, que depois da L78 ficaria só com a ponta e a ponte (19 palavras, abaixo dos 40 de um pedido à voz), se
  junta ao 3º. O "de" atravessa a linha em branco, como a L39 da r1.
- **A frase da ponta fica, e por quê.** A tarefa dizia: fica se servir à ponte ou à linha de 60°S; sai se ficar órfã sem o Factorian.
  No lugar dela, entre a ressalva dos países e a ponte, ela ficaria órfã: era a preparação do Factorian, e sem ele não leva a nada (a
  escuta fria a teria cortado). Duas frases acima, ela serve à linha: é o degrau entre "It begins at 60 degrees south." e "By that
  line, the Meteor Deep, well to the north, is in the Atlantic." A linha corta esta fossa, e por isso importa de que lado o Meteor
  fica. Sem ela, o bloco da linha chega sem dizer por que a fossa do sul tem a ver com o Oceano Austral, que é o "não se liga a nada"
  da escuta fria. É também a frase que o mapa já pedia (a fossa cruzando a linha de 60°S). Já conferida (F73, F83; fatos-r3 a deu
  como confirmada), ela segura 7 palavras do piso sem texto novo.
- EMENDA: "It begins at 60 degrees south. ▸ The trench's southern tip crosses the line. ▸ By that line, the Meteor Deep, well to the north,
  is in the Atlantic."
- Checagens: frases inteiras; "the line" aparece pela primeira vez como palavra aqui ("60 degrees south" é a linha), e "By that line"
  passa a ter o antecedente literal; "The trench's" é a Fossa das Sandwich do Sul, o assunto de p7 inteira; pausas de ponto final.
- Explicação: nenhuma informação sai ou entra; a ordem passa a ser a da escada (a linha, a fossa cruzando, o Meteor ao norte).

### L80 · DO-DOSSIE · a emenda do piso, ≈ 9:32 da cópia (+20 palavras, ≈ 6,5 s) · o portão (piso de 1.950); a tarefa; escuta-fria F01

- ENTRA, entre "…and not every country uses it." e a ponte: "With the line or without it, the deepest point in the Atlantic lies at
  the other end of the ocean."
- **Por que existe.** Os quatro cortes do Lucas tiram 94 palavras: 2.030 → 1.936, abaixo do piso do portão (1.950). Com a ponta
  mantida (L79) o texto continua em 1.936; a lista devolve só o mínimo, uma frase, e fica em 1.956 (6 acima do piso). A primeira
  forma medida, "Either way, the deepest point in the Atlantic lies at the other end of the ocean." (15 palavras), deixava 1.952, duas
  palavras acima do piso; a de 20 diz o mesmo com o "porquê" à vista ("with the line or without it" responde a "not every country uses
  it"), e é a que o ouvido a frio entende sem voltar.
- **O que ela diz, e de onde.** Nada que o texto e o dossiê já não digam: o ponto mais fundo do Atlântico é o de Porto Rico (F02; a
  1ª frase do vídeo), o Meteor é uns 370 pés mais raso (F74; dito duas frases antes), pela linha ele é Atlântico (F83; dito na frase
  de antes) e nem todo país usa a linha (F82; dito na frase de antes). "With the line or without it" junta os dois casos: pela linha,
  o Meteor é Atlântico e mais raso; sem ela (o limite britânico de 1953, a 55°S, poria o Meteor no Oceano Austral, F83; para a
  Argentina, a fossa inteira seria Atlântico, e o Factorian, 7.432 m, F79, também é mais raso), Porto Rico continua o mais fundo. "The
  other end of the ocean" é o "the other end of the Atlantic" da ponte de p6, dito de volta. Sem número, data, nome, grupo ou citação.
- **Por que DO-DOSSIE e não REDIZER:** a frase é nova no lugar (não reescreve um "de"); a afirmação é a do dossiê (F02 com F74, F79,
  F82 e F83). É a única frase que o verificador de fatos ainda não viu: vai à "revisão curta" que a opção do Lucas previa ("À Sala").
- EMENDA: "…The organization says the line carries no political meaning, and not every country uses it. ▸ With the line or without it,
  the deepest point in the Atlantic lies at the other end of the ocean. ▸ Off Puerto Rico, the 1964 crew's fish were waiting for a
  second look."
- Checagens: "With the line or without it" responde à frase de antes ("not every country uses it"); o "it" é a linha, dita quatro
  vezes no parágrafo; a ponte segue sem conectivo e com o lugar ("the other end of the ocean" → "Off Puerto Rico"), e lê melhor que
  antes: o ouvido volta ao norte em dois passos, e não de um salto vindo do Factorian. A frase não toca o portão: nenhum "still",
  "here", "this line", nenhuma regra do "não se diz" ([sandwich-mais-funda] não casa: a frase não compara as duas fossas), 20
  palavras, sem número.
- Teste do fio: ela não repete a pergunta do gancho nem a 1ª frase palavra por palavra; reafirma o título no fim da camada da "outra
  candidata", que é o pagamento dessa camada (OFÍCIO §5, "o pagamento de uma promessa"). O fecho do vídeo ("The deepest point in the
  Atlantic, about 83 miles off Puerto Rico, sits right at that edge.") fica a cerca de 1 min dela (palavras 1.757 e 1.940 da cópia) e
  diz o lugar com o número; esta não diz número nem nome.

## O piso, em conta

| | palavras (contar do portão) |
|---|---|
| `b064eb75cb8c` | 2.030 |
| L75 | −6 |
| L76 | −33 |
| L77 | −4 |
| L78 | −51 |
| só os cortes | **1.936** (abaixo do piso) |
| L79 (a ponta muda de lugar) | 0 (cortá-la daria 1.929) |
| L80 (a emenda) | +20 |
| **`286ff3abf7c7`** | **1.956** |

## A ESCALA

- **O roteiro:** os nomes que saem (Britain, Argentina, German, Factorian, Limiting Deep, o 2º Limiting Factor) não aparecem em
  nenhum outro lugar da voz (conferido pelo `pronuncia-contar.py` na cópia: 0 cada; o Limiting Factor fica 1, em p5). O Meteor Deep
  passa de 3 a 2 menções, as duas depois de apresentado. O "Southern Ocean" fica 1 ("recognized the Southern Ocean"). "Atlantic" passa
  de 11 a 12 (a emenda). Os números que saem (2021, 30, 2019 do Factorian, 20) não tinham outro referente no texto.
- **O editor** (37 pares, todos casando uma vez na prova do aplicador): as frases que saem riscadas em "De onde vem cada frase", com a
  marca "saiu da voz na r3, lista-r3 L.."; as notas de tela, mapa e ilustração delas apagadas (a tela da reivindicação, o ponto antigo
  do Meteor, as telas e os anéis do Factorian e do Limiting Deep, a ilustração do nome partido); a frase da ponta mudada de lugar, com
  a nota nova de mapa; a linha da emenda L80, com as fontes e o mapa (o globo de ponta a ponta, os dois anéis); a ponte com a nota de
  que vem depois da emenda; "Só na tela", "Narradas uma vez" e "Cortadas" postos em dia; a espinha (sem o Factorian), o livro-razão (a
  ponte de p6 paga pelo sonar e pelo submersível que não mergulhou), a linha do "five oceans" (que não paga mais o Factorian); "As
  partes": as colunas "Palavras" e "Tempo" de todas as partes medidas em `286ff3abf7c7` (as de antes eram da rodada 2), o texto de p7 e
  o parágrafo "Depois da lista r3"; as chamadas (as posições e o "Onde NÃO" de p7, agora um parágrafo só); o cabeçalho (a lista r3), o
  carimbo `286ff3abf7c7` e "A medida do portão".
- **A folha de pronúncia** (29 pares em `pronuncia_pares`, no topo da `lista-r3.json`; o aplicador não lê a folha, e cada "de" foi
  conferido para casar uma vez pelo `lista-r3-copia.py`): o carimbo; o cabeçalho e o parágrafo "O que a lista r3 mudou nesta folha";
  os parágrafos de p7 e p8 renumerados (p7 = 23º a 25º; p8 = 26º a 28º) em NOAA, Vescovo, Puerto Rico, snailfish, cusk-eel e na
  cópia para a voz (1964, 1970, 83 miles, 200, 27,500, a 2020 paper, the 1964 crew); a linha do Factorian descida para a reserva;
  Meteor 3 → 2; Britain, Argentina, German, Limiting Deep e o 2º Limiting Factor fora dos "Lidos sem folha"; 30 miles e 20 miles fora
  da cópia para a voz; o Factorian fora da pergunta ao Lucas e da lista da folha permanente; e o pedido 13 da amostra sem a frase do
  Factorian (2.570 → 2.481 caracteres; uns 890 a 1.190 créditos; o `pronuncia-amostra-conferir-r2.py` dá 14 de 14 contra a cópia).

## Os conflitos

1. **A decisão do Lucas contra o NÃO TOCAR do roteiro-r2b e da clareza-r2b.** As duas lentes guardavam "o bloco da linha de 60°S na
   forma decidida, com 'Argentina, for one, disagrees.', e o Factorian e o Limiting Deep" (e a clareza, o "odd name"). Elas se
   apoiavam na decisão 6 da Sala (p7 fica); a resposta do Lucas, depois de ler o texto, é posterior e é dele. Vence o Lucas, e só no
   que ele nomeou: o resto do bloco fica palavra por palavra.
2. **A escuta fria (F01) contra a decisão do Lucas.** O ouvinte a frio pedia cortar também a lava, os "no permanent residents" e o
   parágrafo da organização. O Lucas os manteve (a lava é a imagem real da parte; a linha de 60°S defende o título). Ficam.
3. **A subtração contra o piso.** O ofício do doutor é só cortar; o portão reprova abaixo de 1.950. Venceu o piso com o mínimo: a
   frase da ponta mantida (já conferida, 7 palavras) e uma emenda de 20 palavras feita do que o texto e o dossiê já dizem. Nenhum
   número, nome ou fato novo.
4. **A ponta sul da fossa.** Cortá-la (a leitura da escuta fria) deixaria o bloco de 60°S sem o degrau que o liga à fossa; deixá-la no
   lugar a faria órfã. Ela sobe duas frases (L79).
5. **A ponte de p6 contra o corte do Factorian** (OFÍCIO §3, o teste da dívida). A ponte é do plano e fica fora do alcance desta lista
   (só p7); a dívida que sobra é leve e está conferida em L78.

## O que ficou de fora, e por quê

A tarefa limita esta lista à decisão do Lucas. Tudo o que os laudos pedem fora de p7 fica fora, mesmo o que seria seguro:

- **roteiro-r2b:** os achados 1 a 5 já entraram na lista r2b (L67–L73); as notas (o "No one knows…", a dose de atribuição ao USGS, a
  dose de "crew", os três "mapped" do 2º parágrafo de p7, que ficam como estão) e os riscos de abandono de p1 (≈ 1:31–1:47) e p3
  (≈ 4:02–4:27) não são desta decisão. O risco de p7 (≈ 9:27–10:06) é o que esta lista trata.
- **clareza-r2b:** A1 e A2 já entraram na r2b; os "Considerados" (a gravidade e a força para baixo, "That summer", "the sonar's spot",
  o "Soon after", o 27.300 e o 27.500, p8 com "that crew") ficam; o da Argentina se resolve pela L77. O maior deserto (82,8–91,2 %)
  encolhe: a ponte dos peixes vem ≈ 24 s mais cedo, e o trecho entre "The sonar settled that." e a ponte cai de 170 para 102 palavras
  (palavras 1.681 → 1.851 antes; 1.675 → 1.777 na cópia).
- **locucao-r2b:** A1 a A3 já entraram (L69/L74, L70, L72); o "abaixo da linha" fica com quem escreve.
- **escuta-fria-r2b:** a F01 entra só no que o Lucas decidiu. F02 a F17 (a física da fossa, a República Dominicana, a pergunta do
  gancho, o tsunami, o robô, os números, a lista oficial, "o sonar", os nomes, as atribuições, o título 2, o gancho denso, Vescovo, os
  tropeços, os três milhões e o fecho) ficam fora: tocam o gancho, p1 a p6 ou p8, e várias já foram decididas nas rodadas 1 e 2 ou
  pela Sala. A F04 (a) melhora de graça: o peixe volta ≈ 24 s antes.
- **fatos-r3:** PASS, nenhum achado. A O10 (a nota de "HMS Challenger" na lista de nomes do dossiê, "A expedição de 1875") é do
  dossiê, não da voz: vai à Sala.

## Quase cortei (a contenção)

- **"The trench's southern tip crosses the line."**: ficaria órfã no lugar; subiu (L79).
- **"The organization says the line carries no political meaning, and not every country uses it."**: está no "ficam" do Lucas, e é a
  única ressalva de países que sobra depois da L77.
- **"The islands there are a chain of small volcanoes, with no permanent residents."** e **o lago de lava do Mount Michael**: a escuta
  fria os cortaria; o Lucas os manteve (a imagem real da parte).
- **"The expedition mapped it but didn't dive there."**: depois da L78, é a única frase de p7 com o submersível, e paga a ponte de p6.

## Os pedidos

Nenhum. A emenda do piso foi escrita aqui porque a tarefa a manda devolver na lista ("uma emenda curta… com o que o texto e o dossiê
já dizem"); nenhum parágrafo pede reescrita. `pedidos-r3.json` vai com `itens: []`.

## À Sala (não é desta lista)

- **A revisão curta** que a opção do Lucas previa. A única frase nova é a L80: o verificador de fatos a confere (F02, F74, F79, F82,
  F83; a conta do "with the line or without it" está na L80), e o resto do diff é corte e mudança de lugar de frases já conferidas.
  Na tabela de fatos (`qc-roteiro/fatos-tabela.json`), a F248 (a ponta) e a F255–F256 (a ponte) passam do 26º ao 25º parágrafo; as
  linhas das frases que saem (F219, F234–F239, F247 e F249–F254) deixam de ter frase; e a nota da F211 ("no Factorian, ao sul de 60°S,
  como p7 diz", a linha da ponte de p6) deixa de valer para p7: o fato continua certo, mas p7 não o diz mais.
- **A ponte de p6** ("…and its sub, to the other end of the Atlantic."): sem o Factorian, ela é paga pelo "didn't dive there" de p7 e
  pelo "the same sub" de p8. Se a revisão curta achar que o submersível promete mais do que p7 entrega, o conserto é em p6 (fora
  desta lista).
- **A O10 do fatos-r3** (a nota de "HMS Challenger" no dossiê).
- **O que o Lucas decide sobre a outra candidata na tela:** sem a fala, as telas do Factorian e do Limiting Deep saíram do editor; se
  ele quiser o anel do Factorian só no mapa, é decisão de tela, não de voz.

## O que a aplicação deixa por fazer (não é desta lista)

- **A folha de pronúncia:** o aplicador não a lê. Os 29 pares de `pronuncia_pares` se aplicam na ordem (cada "de" casa uma vez, pela
  prova do `lista-r3-copia.py`); depois, a contagem gravada (`pronuncia-contar.py` → `pronuncia-contagem-r3.json`) e a conferência da
  amostra (`pronuncia-amostra-conferir-r2.py`, que dá 14 de 14 contra a cópia). A cópia de antes da folha (`_trabalho/pronuncia-r3.antes.md`)
  sai de `git show HEAD:roteiros/atlantico-fundo/pronuncia.md`, como na r2.
- **Os carimbos:** o editor e a folha passam a citar `286ff3abf7c7` pelos próprios pares (o carimbo, "A medida do portão", "As partes"
  e as chamadas já vêm medidos na cópia). O `gate.mjs --derivados` confere depois de aplicar.
- **A cópia de prova** `_trabalho/_tmp-lista-r3.md` é a prova desta lista (o mesmo sha do aplicador); pode sair depois da aplicação.
- **A conversão para o motor** (`node ferramentas/roteiro-motor.mjs converter atlantico-fundo`) roda sobre o texto aplicado, depois do
  "sim" do Lucas.
