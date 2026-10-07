# Lista fechada de mudanças · rodada 1 · los-angeles (vídeo 2)

> Escrita em 07/10/2026 pelo doutor de roteiro (Fable 5.1) sobre os quatro laudos de `roteiros/los-angeles/qc-roteiro/`
> (crítico de roteiro FAIL · clareza RESSALVA 7,8 · locução FAIL 7,5 · fatos RESSALVA 8,7), todos sobre a revisão
> `822cb8e37301` (2.139 palavras, PASSA). A lista legível por máquina é `lista-r1.json` (os mesmos 35 itens, com o
> `de`, o `para` e o saldo de palavras medido pela régua do `gate.mjs`). **O roteiro não foi tocado.**
>
> A lição do vídeo 1 (`APRENDIZADOS.md`, item 13): "reescreva tudo" regride; o que funcionou foi uma lista fechada, com
> os conflitos entre lentes resolvidos antes, aplicada cirurgicamente. É isto.

## A regra, e o que ela deu

- Entram **todos os GRAVE** (3: crítico 1 e 2, locução A1) e **todos os de fatos** (7: A1 a A7).
- **MÉDIO entra se a troca é segura** (o fato não muda, ou foi conferido na cópia local; o `de` casa uma vez; nenhum
  NÃO TOCAR de outra lente sai ferido no que ele protege).
- **LEVE só se não custa nada** (sem palavra nova que peça checagem, sem perda de fato, sem NÃO TOCAR contra).
- Cada `de` casa **uma vez** em `roteiros/los-angeles/roteiro-narrador.md` (texto com fim de linha LF; o arquivo já é
  LF). Nenhum item toca `variantes/gancho-hoje.md`: nenhuma lente pediu troca no gancho, e o gancho é NÃO TOCAR das
  quatro.
- **35 itens**, de 2.139 para **2.063 palavras** (−76; ≈11:13 a 184 palavras/min). O crítico das 28 trocas dele sozinho
  chegava a 2.028, a clareza a 2.115, a locução a 2.142: a lista fica no meio porque devolve três coisas que as lentes
  pediram de volta (a dúvida de Mendell, +11; a glosa de Port Los Angeles, +11; a glosa de Hood, +4).

**O portão, na cópia inteira** (`node roteiros/los-angeles/_ferramentas/gate.mjs roteiros/los-angeles/_trabalho/_tmp-lista.md`):
**PASSA**, exit 0 · 2.063 palavras · 11,21 min · 32 parágrafos · 153 frases · média 13,5 · maior frase 33 · gancho com
140 palavras até a assinatura e o "But" na palavra 32 · os mesmos 3 alertas já aceitos (TEU ×2, "monopoly" ×1) ·
sha256 do texto falado **`4902fe99688bd24675424efecb0fceecf730ca4d3a0e600f42dafbdfa62efc96`**.

**Com a variante do gancho de hoje** (`_tmp-lista-variante.md`, o mesmo corpo com os dois parágrafos do gancho trocados):
**PASSA**, os mesmos números, sha256 `019c5f927f17e5e8967388e58301dca7c59718497d8b583fa654bde3741db087`. As duas cópias
diferem só no 2º parágrafo do gancho.

**Pedidos à voz:** os 32 parágrafos ficam entre 40 e 107 palavras (o original ia de 40 a 100; a regra é 40 a 110 por
pedido, `escrita-notas.md`, item 8). Dois itens mexem na fronteira de parágrafo sem mudar palavra: o L12 parte o parágrafo
do píer (que passava a 113) antes de "A later federal report", e o L16 junta o fecho de p3 (que caía a 34) ao parágrafo
anterior. A pausa entre pedidos é de 0,07 s e não se ouve.

**Prova de cirurgia:** o `diff` da cópia contra o roteiro mostra só os parágrafos dos itens; o gancho, p1 (fora os dois
trechos), p5 (fora os três) e o fecho de p7 (fora uma palavra) ficam iguais. Sem espaço duplo nem espaço antes de
pontuação onde uma frase saiu.

## Os itens, na ordem do texto

Formato: **id · parte · lentes · saldo** → `de` ⇒ `para`, e o porquê. "fatos" quer dizer que entrou por regra.

**L01 · p1 · crítico 9 · −5**
`were San Francisco and San Diego, about six hundred miles apart.` ⇒ `were San Francisco and San Diego.`
O 600 é a conta de Mendell (p. 2122, cópia local), mas a linha reta entre as cidades dá uns 460 milhas e, na voz, o número
soa como fato do narrador. O "in between" da frase seguinte se apoia nos dois nomes. Na tela, só como "~600 MILES (MENDELL, 1886)".

**L02 · p1 · fatos A7 + locução (abaixo da linha) · +1**
`was an open anchorage, wide open to the southeast, where the winter storms came from.` ⇒ `was an open anchorage, exposed to the southeast and south, where the winter storms came from.`
Senate Doc. 18, p. 5: "entirely exposed to the southeast", e os mares mais pesados vêm do sul e sudoeste; o dossiê recomenda
"southeast and south". "Exposed" é a palavra da fonte e tira o "open … open" em cinco palavras.

**L03 · p1 · crítico 2 (GRAVE) + locução A10 · −3**
`in a bay that wrecked ships and an estuary a rowboat could barely cross.` ⇒ `in a bay that wrecked ships, and in a shallow estuary.`
Com menos de dois pés na barra, um bote a remo passa: a figura afirma o que não é verdade (só lanchões cruzavam, na maré
cheia), na frase-resumo de p1. "A shallow estuary" retoma o gancho; a medida está no medidor da tela. A vírgula e o "in"
repetido impedem o ouvido de ler "a bay that wrecked ships and an estuary" como um objeto só.

**L04 · p2 · locução A5 · +2**
`…a plan by Mendell, then a major: a jetty, a wall of timber and rock, more than a mile long, from Rattlesnake Island to Deadman's Island.` ⇒ `…a plan by Mendell, then a major. It was a jetty, a wall of timber and rock more than a mile long, from Rattlesnake Island to Deadman's Island.`
Quatro apostos sem verbo em fila ("a major: a jetty" pode soar "a major jetty"). Um ponto e um "It was", sem cortar nada.

**L05 · p2 · crítico 11 + clareza C8 · +1** (conflito com a locução, abaixo)
`Then came the letter.` ⇒ `In between came the letter.`
"Then" logo depois de "By 1888" data a carta depois de 1888; ela é de 1886. "In between" é verdade e faz a mesma quebra da
fila de datas que o portão pedia.

**L06 · p2 · clareza C8 · 0**
`signed a preliminary examination in San Francisco. … twelve to fourteen feet, the depth of water a ship needs.` ⇒ `signed a report in San Francisco. … twelve to fourteen feet, meaning they sat that deep in the water.`
"Preliminary examination" soa como exame médico (o nome do documento fica na folha da tela); "the depth of water a ship
needs", colado a "twelve to fourteen feet", sugere que todo navio precisa disso. A troca define "drawing" de verdade.

**L07 · p2 · locução A4 · +2**
`And still: "It is a small estuary` ⇒ `And still he wrote: "It is a small estuary`
Dito, "And still, it is a small estuary and can never be made a harbor" vira o narrador afirmando o contrário da tese.

**L08 · p2 · locução A3 · +1** (conflito com crítico e clareza, abaixo)
`So that is what "never" measured: not the bay, the estuary.` ⇒ `So that is what his "never" measured: not the bay, the estuary.`
Sem aspas audíveis, "that is what never measured" é frase quebrada. "His" obriga o ouvido a ler "never" como substantivo.

**L09 · p2 · crítico 8 · +11**
`San Pedro Bay, Mendell wrote, was "worthy of improvement," and he asked for a survey.` ⇒ `San Pedro Bay, Mendell wrote, was "worthy of improvement," though he questioned whether an artificial harbor there was worth it, and he asked for a survey.`
A mesma carta diz, três parágrafos antes: "It may be a question whether or not it is advisable to expend a considerable sum
in building an artificial harbor at San Pedro, when there is now a fine natural harbor at San Diego, 90 miles distant"
(conferido em `midia/los-angeles/fontes/documento/arce1888-pp2110-2128.txt`, linhas 730–732). O fundamento manda não
esconder isso (T06); a nota de escrita 4 registra o corte por orçamento. Mendell duvidou, pediu o levantamento, endossou o
quebra-mar e escolheu San Pedro: é o personagem inteiro.

**L10 · p2 · locução A1 (GRAVE) · +2** (conflito com a clareza, abaixo)
`The man who wrote "never" had designed the jetty, backed the breakwater, and would sit on the first board that picked San Pedro.` ⇒ `That man, the one who wrote "never," had designed the jetty, backed the breakwater, and would sit on the first board that picked San Pedro.`
Dita, a frase era "the man who wrote never had designed the jetty": o ouvido monta "never had designed", o contrário, na
frase que sustenta T06. A vírgula depois de "never" fecha a palavra citada antes do verbo. "That man" evita um terceiro
"Mendell" no mesmo pedido.

**L11 · p2 · crítico 4 + locução A7b · −41**
`So the map now has two waters on it, and both of them still had to be made: an estuary with a ceiling on it, and an open bay that needed a wall. And a wall needs a decision about where.` (o parágrafo inteiro, com a linha em branco) ⇒ (nada)
Só recapitulação: as duas águas foram ditas nas frases anteriores; é o terceiro fecho "So … map" em quatro minutos e colide
com a abertura de p3 13 s depois ("the map has … on it" duas vezes). Pelos três testes do ofício: não é a única vez, não é
degrau, e p3 abre em "Now the map has a choice on it: two bays." sem dívida. p2 volta ao orçamento (321 → 280) e passa a
terminar num fato. Resolve também o A7(b) da locução: o andaime repetido some, e a troca que ela propunha para a abertura
de p3 ("That decision came down to two bays…") perderia o antecedente.

**L12 · p3 · clareza C2 + locução A2a/A2b + crítico 20 · +11**
`In 1891, the Southern Pacific began a pier there, at Port Los Angeles, by the account of Charles Willard, a Chamber of Commerce man on San Pedro's side. The federal board of 1897 measured it at more than three quarters of a mile,` ⇒ `In 1891, the Southern Pacific began a pier there, by the account of Charles Willard, a Chamber of Commerce man on San Pedro's side. The spot was called Port Los Angeles. Despite the name, it is not today's port.` ¶ `A later federal report measured the pier at more than three quarters of a mile,`
Dito, "Port Los Angeles" é o Porto de Los Angeles de hoje, o do título, na baía perdedora: clareza e locução ouviram o
mesmo. A frase do píer perde um nome e a glosa vem em frase própria (a forma da clareza). Com a glosa no meio, o "it" da
medida ficaria preso a "port": "the pier" (locução A2b). "A later federal report" no lugar de "the federal board of 1897"
porque a junta de 1897 era citada antes de existir na narração (crítico 13 e 20); a medida é do Senate Doc. 18. Não se
afirma quem deu o nome (a locução sugeria "a spot it called"): "was called" é o que o dossiê sustenta. O ¶ é a linha em
branco que parte o parágrafo em dois pedidos à voz (48 e 65 palavras): com a glosa e o L13 ele passava de 110.

**L13 · p3 · crítico 14 + clareza C5 + locução A8 · +4**
`"would go to the wall."` ⇒ `"would go to the wall." That meant going broke.`
Três lentes: no vídeo inteiro "the wall" é o quebra-mar, e a expressão de Hood (falir) chega ao ouvido como ir parar no
quebra-mar; no inglês de hoje "go to the wall for" quer dizer o contrário. A glosa vai em frase nova (a de Hood tem 33
palavras, teto 34). A citação e o frete ficam: a locução só os cortava para caber a glosa dentro da mesma frase.

**L14 · p3 · fatos A5 + crítico 21 + clareza C1 · 0**
`They called it the Free Harbor Fight.` ⇒ `It's remembered as the Free Harbor Fight.`
"They" abrindo o parágrafo logo depois de "The second board…" dá o nome à junta. E "Free Harbor Fight" é o nome dos
historiadores (Deverell, 1991); Willard escreveu "The Free Harbor Contest". "Remembered as" diz o que a fonte sustenta.

**L15 · p3 · fatos A2 + crítico 13 + clareza C1 + locução A2c · +4**
`Willard's side called Port Los Angeles a "monopoly harbor"; the one dissenter on the last board would write that San Pedro "would probably eventuate in a serious monopoly."` ⇒ `Willard's side called the railroad's Port Los Angeles a "monopoly harbor"; the one dissenter on a later board would write that spending at San Pedro "would probably eventuate in a serious monopoly."`
(1) Fatos: Morgan escreveu "this great expenditure would probably eventuate in a serious monopoly"; o sujeito é o gasto,
não a cidade. (2) "The last board", dito logo depois de "chose San Pedro unanimously", é a junta unânime no ouvido, e a
terceira só nasce 20 s depois: "a later board" desfaz a contradição; o "in 1897" que a clareza acrescentava fica de fora
(p3 já tem datas demais, e o parágrafo seguinte data a junta de imediato). (3) A locução queria "Santa Monica" no lugar de
"Port Los Angeles"; a acusação de Willard era sobre Port Los Angeles mesmo (`exp.A26`), por isso o nome fica e ganha o
dono, "the railroad's", que prende o referente ao píer e casa com "the railroad's pier" do fecho. 32 palavras (teto 34).
As duas acusações continuam com dono; "This video doesn't settle that. The board didn't either." não muda.

**L16 · p3 · fatos A1 + clareza C9 · −4** (conflito com a clareza, abaixo)
`filed his minority report two weeks later.` ¶ `So put the deep-water harbor on the map: about nineteen miles from the Plaza, in a bay seven miles from the other one.` ⇒ `filed his minority report two weeks later. So put the deep-water harbor on the map: in San Pedro Bay, more than twenty miles from the Plaza.`
As 19 milhas vão da Plaza a Wilmington; o porto de águas profundas que as juntas escolheram fica sob Point Fermin, a 24,4
milhas (fatos A1). A clareza tira "in a bay seven miles from the other one" (número novo com dono vago numa frase de
resumo; as sete milhas, confirmadas, ficam na régua do mapa) e nomeia a baía. A linha em branco que sai junta o fecho de
p3 ao parágrafo anterior (62 + 34 = 96 palavras, um pedido): sozinho ele caía abaixo do piso de 40.

**L17 · p3 · crítico 3 + locução A7a · −2**
`First the wall. Then the question of whose town it was in.` ⇒ `That gap is what the strip of 1906 would cross.`
A âncora do título some da voz de 0:46 a 7:03; "the strip of 1906" a traz de volta pelo nome, e "that gap" retoma a
distância e o "not in Los Angeles" que acabaram de ser ditos. A ponte antiga era o índice lido em voz alta, e p4 a repetia:
a locução queria apagar "The wall came first." por isso; com a ponte trocada, p4 abre como está.

**L18 · p4 · crítico 15 + locução A9 · +2**
`by the Times's count.` ⇒ `according to the Los Angeles Times.`
Primeira menção do jornal: "the Times" sozinho é o New York Times para o americano, e a atribuição (T16) chegava com o dono
errado; "Times's count" embola as sibilantes na voz.

**L19 · p4 · crítico 28 + locução A9 · 0**
`the Army got leave to extend the wall` ⇒ `the Army got approval to extend the wall`
"The Army got leave" começa como "o Exército saiu de licença".

**L20 · p4 · crítico 12 · −5**
`Then the second tool arrived, where the tide had stopped.` ⇒ `Then the second tool arrived.`
Referência órfã: o limite da vazante saiu da voz por orçamento, e a oração soa como um lugar. "The dredge did what the tide
could not." já entrega a ideia.

**L21 · p4 · clareza C10 · −4**
`a federal dredge named the San Pedro went to work` ⇒ `a federal dredge went to work`
Uma terceira San Pedro (a baía, a cidade, a draga) num trecho em que o ouvido já segura dois nomes de ilha. O nome da draga
pode ir ao rótulo da cena.

**L22 · p4 · clareza C10 + crítico 25 · −17** (conflito crítico × clareza, abaixo)
` The Corps of Engineers counts the breakwater as completed in 1912: just over two miles of rock.` ⇒ (nada)
O 1912 era dito duas vezes (aqui e em p6). Sai daqui: a frase estava dentro do parágrafo da draga, o maior deserto de
retenção do vídeo (53–59 %), e fala da outra ferramenta; o parágrafo passa a fechar em "The dredge did what the tide could
not.", que as lentes protegem. O "just over two miles of rock" e a atribuição ao Corpo (que os fatos protegem) vão para
p6, no L30.

**L23 · p5 · fatos A6 + crítico 16 + clareza C6 + locução A6 · −1**
`Inside the city it was easy: 6,612 to 914 in the official count. In the territory, the Los Angeles Times, which had campaigned for annexation, counted six votes of margin on election night, and ten in the official count: 213 to 203, out of 416.` ⇒ `The tallies come from the Los Angeles Times, which had campaigned for annexation. Inside the city it was easy, more than seven to one. In the territory, the margin was six votes on election night, and ten in the official count: 213 to 203.`
Quatro lentes no mesmo lugar. Fatos: o número da cidade só existe pela página do Times de 21/11/1906 e pedia atribuição;
posta antes, a frase cobre os três números, e "the Los Angeles Times, which had campaigned for annexation" continua literal,
como o crítico manda. Crítico e locução: "six votes of margin" é decalque; o Times não CONTOU a apuração oficial, noticiou a
do Conselho (por isso nenhum "counted"); "out of 416" é só a soma. Clareza: 6.612 a 914 vira "more than seven to one"
(6.612 ÷ 914 = 7,23; o placar vai à tela), e o parágrafo cai de sete números para quatro, com o dez fechando a passagem. A
frase da margem fica com 20 palavras (eram 32), o que dispensa a partição em duas que a locução pedia. A manchete
"Annexation by a Hair" que a clareza propunha na voz fica de fora: citação nova que os fatos não conferiram na fala, e a
folha do Times de 13/11 já vai à tela. O 213 fica (fatos: nunca "corrigir" para 218).

**L24 · p5 · crítico 22 · −2**
`The whole annexation was about eighteen and a half square miles.` ⇒ `The whole annexation was more than eighteen square miles.`
"Half" soava três vezes em três frases com três referentes. 18,64 mi² é "more than eighteen"; a tela segue com "18.64 SQ MI".

**L25 · p5 · crítico 5 · −10** (conflito com a locução, abaixo)
`So this is the answer to the shape. Not a road to the sea. A legal handshake, drawn half a mile wide, so that one city could touch two others.` ⇒ `So the strip is a legal handshake, drawn half a mile wide, so that one city could touch two others.`
Aos 8:47, com 2:51 pela frente, o narrador avisava que a pergunta do gancho estava respondida: pergunta-fio declarada
resolvida no meio manda embora o espectador apressado. A resposta chega do mesmo jeito (o aperto de mão), sem o rótulo. Sai
também a segunda de três negações da estrada; ficam "It starts with a law, not a road." (p5) e "The strip was never a road
to the sea." (p7), que o crítico marca como as que devem ficar.

**L26 · p5 · fatos A3 · +1**
`That took three more years.` ⇒ `That took almost three more years.`
De 12/11/1906 (ou 26/12) a 28/08/1909 são 2 anos e 8 a 9 meses.

**L27 · p6 · crítico 19 · +1**
`The strip had taken the city to the harbor towns' doorsteps.` ⇒ `The strip had taken the city to the harbor towns' boundary lines.`
Terceira figura para o mesmo contato (depois de "bridge" e "handshake"); o termo literal já foi plantado em p5.

**L28 · p6 · crítico 10 + clareza C3 · +2** (conflito crítico × clareza, abaixo)
`In March 1909, the legislature passed a new consolidation law, for cities "each one of which is contiguous to the other."` ⇒ `In March 1909, a new state law repeated the rule: consolidation only for cities "each one of which is contiguous to the other."`
Entre "The towns still had to say yes" e "That August, each of the three cities voted", a ordem das frases dizia ao ouvido
que a lei nova permitiu os votos, o que o dossiê deixa como lacuna; e o ouvinte perguntava por que uma lei nova se a de 1883
já bastava. "Repeated the rule" responde às duas (é o que o dossiê diz: `doc.dat-22`, "1909 repete") e mantém a citação
literal que os fatos protegem e a folha da lei na tela.

**L29 · p6 · crítico 17 + clareza C3 · +1** (conflito crítico × clareza, abaixo)
`Wilmington went first, on August 4: 107 to 61. Los Angeles, the same day, 13,661 to 221.` ⇒ `Wilmington voted on August 4: 107 to 61. Los Angeles said yes the same day, by a landslide.`
"Went first" e "the same day" se contradiziam; o 13.661 a 221 só dizia "fácil" (vai à tela); e Los Angeles votou de novo em
12/08, sobre San Pedro: a voz dava a um voto o peso das duas fusões. Os placares que provam (107–61, 726–227) ficam na voz.

**L30 · p6 · fatos A4 + clareza C10 + crítico 25 · +7** (conflito com a clareza, abaixo)
`And in 1912, the Corps of Engineers called the breakwater finished. The city had owned a coast for three years before its wall was done.` ⇒ `And in 1912, the Corps of Engineers called the breakwater finished: just over two miles of rock. The city had owned a coast for almost three years before the wall was done.`
Fatos: de 28/08/1909 ao fim do ano fiscal 1911–12 são no máximo 2 anos e 10 meses, "almost three". "Its wall" vira "the
wall" (crítico 25): o quebra-mar era federal. O "just over two miles of rock" vem de p4 (L22), com a atribuição ao Corpo.

**L31 · p6 · crítico 1 (GRAVE) + locução A7c · −32**
` Back to the outline, in layers: 1850, 1906, 1909. The strip stops being a dead end: a block, a thread, and a harbor at the bottom. And the thread is still there.` ⇒ (nada)
Figura empilhada (veto): a faixa ganhava a quinta figura em 2,5 min (bridge, handshake, doorsteps, dead end, thread);
"dead end" é vocabulário de estrada e chama de rua sem saída a faixa que o vídeo nega ser estrada; "And the thread is still
there." era ecoado duas frases depois por "And the strip is still there"; "Back to the outline" era mais um fecho de parte
que volta ao mapa. As três camadas datadas ficam na tela, sem voz. p6 passa a terminar em "before the wall was done."

**L32 · p7 · crítico 26 + locução A7c · −1**
`And the strip is still there, still about half a mile wide.` ⇒ `And the strip is still there, about half a mile wide.`
"Still" soava cinco vezes entre 10:16 e 11:38; com o L31 e este sobram três, e a coda recupera o peso. O "still run thin"
da frase seguinte fica (o crítico o protege: é o que explica ao ouvido a passagem de 15 para 9 milhas).

**L33 · p7 · crítico 24 · −2**
`The harbor at the end of it was finished by machine. The port's Main Channel is fifty-three feet deep today, dredged from forty-five to fifty-three with the Corps of Engineers by 2013.` ⇒ `The harbor at the end of it was deepened by dredges. By 2013, the port and the Corps of Engineers had taken its Main Channel from forty-five feet to fifty-three.`
"Finished by machine" era vago e impreciso (a máquina aprofundou), e "fifty-three" soava três vezes em três frases: o
número do fecho chegava gasto. Nenhum fato muda. "Mendell expected eighteen or twenty feet for the estuary. The port's Main
Channel is fifty-three." não se toca.

**L34 · p7 · clareza C4 · −1**
`A TEU is a twenty-foot container unit, a measure of volume, not a count of boxes.` ⇒ `A TEU is the space of one twenty-foot container; a forty-foot box counts as two.`
A definição não definia: o ouvido toma "twenty-foot container unit" por um contêiner, e "not a count of boxes" contradiz. A
nova é a da unidade (twenty-foot equivalent unit), numa frase só, como o crítico protege. O alerta "TEU" do portão continua
aceito; a cópia para a voz leva "T E U".

**L35 · p7 · crítico 7 · +1**
`It was the way to a harbor that didn't exist yet.` ⇒ `It was the way to a deep-water harbor that didn't exist yet.`
Blindagem do fecho: em 1906 havia porto, e o próprio roteiro o diz. O que não existia era o porto de águas profundas
(quebra-mar em 1912; nenhum cais comercial no porto externo em 1907). Pela régua de 30 pés da junta de 1897, que p2 dá, a
frase é verdadeira, e fecha o arco do "never" de Mendell, que era sobre "deep-water ships".

## Os conflitos entre lentes, e como foram decididos

1. **"Then came the letter." (L05).** A locução a põe em NÃO TOCAR porque ela quebra a fila de datas para o portão; o
   crítico (11) e a clareza (C8) a reprovam pela cronologia falsa. "In between came the letter." faz a mesma quebra (o gate
   não a conta como abertura com data) e diz a verdade. O que a locução protege é a função, e ela fica.
2. **"So that is what "never" measured" (L08).** Crítico e clareza protegem a frase (o arco do "never", T06); a locução a
   reprova como MÉDIO por ser frase quebrada no ouvido. O "his" mantém cada palavra que as duas citam, na mesma ordem.
3. **"The man who wrote "never" had designed…" (L10).** A clareza protege; a locução dá GRAVE (o ouvido monta "never had
   designed", o contrário). O GRAVE entra por regra, e o conteúdo que a clareza protege fica inteiro.
4. **O parágrafo das duas águas (L11) × a abertura de p3 (locução A7b).** O crítico corta o parágrafo; a locução trocava a
   abertura de p3 para não repetir o andaime dele. Com o parágrafo fora, a repetição some e a troca perderia o antecedente.
5. **"Port Los Angeles" na frase de Willard (L15).** A locução pedia "Santa Monica"; a acusação era sobre Port Los Angeles
   mesmo (`exp.A26`). Fica o nome, com o dono ("the railroad's"), e a glosa do L12 já separou os dois portos no ouvido.
6. **As 19 milhas do fecho de p3 (L16).** A clareza protege "a régua das nineteen miles, repetida de p1 a p7"; os fatos
   mostram que esta ocorrência mede a coisa errada (o porto de águas profundas fica a 24,4 milhas, não a 19). O fato vence
   o eco; a régua de 19 continua nas quatro ocorrências em que é certa (p1, p4, p7 ×2), e a tela pode mostrar a régua
   terminando em Wilmington com o porto externo além dela.
7. **A ponte de p3 (L17) × "The wall came first." (locução A7a).** A locução apagava a abertura de p4 porque repetia a ponte
   de p3; o crítico troca a ponte (e devolve a âncora do título). Com a ponte trocada, a abertura de p4 fica.
8. **O 1912 dito duas vezes (L22 e L30).** Crítico (25) e clareza (C10) viram a mesma repetição e propuseram cortes
   opostos: o crítico tirava o de p6, a clareza o de p4. Fica o de p6, onde o 1912 trabalha (a comparação com 1909), e sai o
   de p4, que estava no parágrafo da draga, o deserto de retenção do vídeo. Do 25 fica "the wall" no lugar de "its wall".
9. **A apuração de 1906 (L23).** Quatro lentes: a atribuição dos fatos, o idioma e o "reported" do crítico, a razão e a
   hierarquia da clareza; a partição da locução deixou de ser necessária (a frase caiu de 32 para 20 palavras); a manchete da
   clareza ficou de fora (citação nova, não conferida na fala).
10. **"So this is the answer to the shape. Not a road to the sea." (L25).** A locução põe o bloco inteiro em NÃO TOCAR (o
    ritmo de frases curtas na virada); a clareza protege só o aperto de mão e o re-gancho; o crítico (5) reprova o anúncio da
    resposta no meio do vídeo. Decidi pelo crítico, que é a lente da retenção: o que a clareza protege fica intacto, e o
    ritmo que a locução protege sobrevive nas duas frases curtas que seguem.
11. **A lei de 1909 (L28).** O crítico (10) a mantém dizendo que "repetiu a regra"; a clareza (C3) a cortava. Fica a do
    crítico: responde às duas perguntas, mantém a citação literal e a folha da tela.
12. **Os votos de agosto (L29).** A clareza (C3) tirava os três placares da voz ("none of the votes was close"); o crítico
    (17) tira só o de Los Angeles. Fica o do crítico: menos números, e os placares que provam continuam com dono.
13. **"three years before its wall was done" (L30).** A clareza protege a comparação; os fatos (A4) corrigem o número. A
    comparação fica, com "almost".
14. **"still run thin" (L32).** A locução (A7c) tirava o "still"; o crítico o protege. Fica. A conta dos "still" (de cinco
    para três) fecha do mesmo jeito com o L31 e o L32.

## O que ficou de fora, e por quê

- **Crítico 6** (o título nas 3 primeiras frases): não é troca de texto; é decisão do Lucas, com o título e o contorno do
  gancho (o contorno com a faixa na tela desde 0:00, ou o título 2 com a variante).
- **Crítico 18** (cortar "To merge with San Pedro and Wilmington, Los Angeles had to touch them."): LEVE contra o NÃO TOCAR
  da locução (a forma aprovada de T08, e o "touch" como espinha da tese).
- **Crítico 27** (cortar "Winning the bay was not having it."): LEVE contra o NÃO TOCAR da clareza (a virada de p4).
- **Crítico 23** ("the boundary line of said City of San Pedro"): LEVE que transformaria em paráfrase uma citação que os
  fatos protegem como literal (LA0007, p. 2); a folha está na tela, e "of said City" se reconhece como escritura.
- **Crítico 25**, o corte de p6: substituído pelo corte oposto (L22), como dito no conflito 8.
- **Clareza C3**: parcial (L28 e L29). **C6**: parcial (L23; a manchete não). **C7** (p7 sem os quatro vizinhos e sem "Long
  Beach doesn't touch it", com "the city has grown around both ends"; e a troca condicional em p5): com o gancho de 1906,
  que é o do roteiro, é LEVE e acrescenta uma afirmação nova que pede o verificador; os vizinhos são os rótulos do mapa.
  **Vira MÉDIO só se o Lucas escolher o título 2**: aí entra numa rodada própria, com a troca de p5 junto, depois da
  decisão dele. **C8, C9, C10**: entraram (L05/L06, L16, L21/L22/L30).
- **Locução A2c** ("Santa Monica"): adaptado (conflito 5). **A6** (partir a frase): desnecessário com o L23. **A7a, A7b**:
  resolvidos pelo L17 e pelo L11. **A7c** ("still run thin"): contra o NÃO TOCAR do crítico. **A9** (opcional: "the Times,
  which had campaigned…" em p5): o crítico manda manter a frase literal.
- **As notas abaixo da linha** da locução ("that board reported: this Board reports", "Rattlesnake Island: made land", "most
  of that is a wide block", "the line of Wilmington") e da clareza ("the town's central square", "Dana's ship", "nearly
  three miles of waterfront"): não são achados. A única que entrou foi "exposed to the southeast", porque coincidiu com os
  fatos A7 (L02).

## O que muda para quem segue

- **A folha de pronúncia** (`roteiros/los-angeles/pronuncia.md`): a amostra proposta cita trechos que a lista troca (a
  frase 1: "about six hundred miles apart" e "wide open to the southeast"; a 3: "then a major: a jetty"; a 4: "the one
  dissenter on the last board" e "Port Los Angeles"; a 5: "by the Times's count"; a 7: a definição de TEU). "Times's" sai da
  folha (o L18 o tira do texto). A folha se refaz sobre o sha novo depois da aplicação.
- **A cópia para a voz**: os placares 6.612–914 e 13.661–221 saem da voz (ficam na tela); "more than seven to one" e "by a
  landslide" entram. "T E U" continua.
- **O `roteiro-editor.md`**: a revisão (sha, contagens, a tabela das partes: p2 280, p3 com 7 → 6 parágrafos) e as linhas
  das frases trocadas; a tela ganha o que saiu da voz (as camadas 1850/1906/1909, o 13.661–221, o 6.612–914, o nome da
  draga, as 7 milhas entre as baías, "~600 MILES (MENDELL, 1886)").
- **Para a bancada da rodada 2**: só as 35 frases trocadas, com prova por diff de que nada mais mudou (a lição do Juneau).
  Os fatos conferem o que é novo na voz: a dúvida de Mendell (L09, já conferida na cópia local), "spending at San Pedro"
  (L15), "more than twenty miles" (L16), "more than seven to one" (L23), "more than eighteen square miles" (L24), "repeated
  the rule" (L28), "by a landslide" (L29), "almost three" (L26 e L30), "deepened by dredges" (L33), a definição de TEU
  (L34) e "deep-water harbor" (L35).
- **As cópias** `_trabalho/_tmp-lista.md` e `_tmp-lista-variante.md` são a prova desta rodada (o portão passou nelas);
  podem ser apagadas depois da aplicação, ou servir de diff.
