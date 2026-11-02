# Laudo · verificador de fatos (independente, da Sala de controle) · conferência final (depois da rodada 1) · big-sur

Revisão julgada: `daa92ea6d0c4` · data-base 2026-11-02

> Troca da Sala depois deste laudo (02/11/2026): a VF14, aplicada palavra por palavra na f186 ("Together, the Los Angeles and San Francisco metro areas hold more than 17 million people."). O laudo julgou `dbf3aa915b13`; nenhuma outra frase mudou, e a tabela leva a frase nova.

VEREDITO: RESSALVA

COBERTURA: 248 de 250

Das 250 linhas da tabela, 248 têm veredito "confirmada". As outras duas são 1 "corrigir" (VF14, novo) e 1 "nao_conferida" (VF12, que vem da rodada 1 e depende da imagem). As linhas cobrem as afirmações checáveis de 176 das 185 frases do texto falado de `dbf3aa915b13`. As outras 9 não afirmam nada checável e estão declaradas uma a uma abaixo. O texto foi CHECADO POR INTEIRO: as frases que mudaram foram relidas contra a cópia, e o resto foi conferido pelo diff, igual ao que a rodada 1 verificou.

NOTA: 9.0/10. A rodada 1 resolveu 12 dos 13 achados de fatos: 11 pela lista, e o VF13 pelo corte do P01. A fala nova de gente (P03, Kirk Gafill) confere com a nota da Caltrans, palavra por palavra no sentido. Sobra um defeito novo, pequeno, que nasceu do próprio corte do VF13: a última frase dá "Los Angeles and San Francisco" sem "metro areas". Fica aberto, pelo desenho do pedido, o VF12, que depende da imagem. Nenhum número dito está errado.

- **O que foi julgado:** o texto falado inteiro de `roteiros/big-sur/roteiro-narrador.md`, sha256 do texto falado `dbf3aa915b13b5a88931fe6317b7307af6b7c3f58a2cd768ca66e4f6fb858fee` (o arquivo inteiro: `d1e2f37de77314093432d0b19dd1ba4ec346c0d6fb449a245a17852fb601387b`).
  - `node roteiros/big-sur/_ferramentas/gate.mjs`, rodado primeiro: 2.378 palavras, 34 parágrafos e 191 frases pela regex (185 reais, porque o "U.S." parte três). Média de 12,5 palavras por frase, a maior com 23. O gancho tem 141 palavras, com o "But" na palavra 19. PASSA, com 0 problemas e 4 alertas. São os mesmos 4 da rodada 1, julgados de novo como fato, e todos passam:
    - o "nobody" do gancho é uma negação;
    - o "never" da assinatura: a costa nunca encheu;
    - o "first" de 1965 é letra do plano, atribuída;
    - a 1ª frase sem número é questão de voz.
- **Como se conferiu:**
  - O diff entre `roteiros/big-sur/_trabalho/roteiro-r1.antes.md` (`c00a9cce37c4`, o texto que a rodada 1 julgou) e o roteiro de hoje mostra 21 parágrafos mexidos.
  - Desses, 19 vêm da lista. São os 23 itens L01 a L23, conferidos contra o `aplicado-r1.md`.
  - Os outros 2 vêm dos pedidos (`pedidos-r1-feito.md`): P01 no 34 e P03 no 26.
  - Fora dessas frases, os parágrafos são idênticos ao texto da rodada 1. Por isso, as 203 linhas da tabela da rodada 1 cuja frase continua igual foram reaproveitadas sem mudança: a frase, o trecho e o veredito, com o `id_r1` de cada uma.
  - 49 linhas da rodada 1 caíram, porque eram de frases que mudaram ou saíram.
  - Cada frase mudada ou nova recebeu linhas novas (47), com o trecho relido na cópia.
- **Contra o quê:**
  - a pauta inteira, com "Depois do sim" e "O cético";
  - as decisões da Sala de 02/11/2026 (`pedido-base.md`);
  - o plano de 1986, pelo `pautas/big-sur/_trabalho/scripts/plano_trecho.py`;
  - as cópias de `midia/big-sur/fontes/` e de `midia/big-sur/fontes/web/`;
  - as medidas da rodada 1 (`roteiros/big-sur/qc-roteiro/fatos-medidas.txt`, M01 a M20). Nenhuma medida nova foi preciso.
- **A rede:** nenhum pedido nesta conferência. Toda frase nova se apoia em cópia que já estava no disco. A nota da Caltrans de 15/05/2026, que sustenta a fala do Kirk Gafill, foi lida na origem em 02/11/2026 (`web/caltrans-d5-news-5-15-2026-2-lida-2026-11-02.htm`). Nenhum crédito foi gasto.

## Os achados da rodada 1, um a um

| Achado r1 | Frase de antes | Como está hoje | Resolvido? |
|---|---|---|---|
| VF01 MÉDIO | "Other families, after the Pfeiffers, had given land for parks too…" | "After the Pfeiffer sale, other families gave land for parks, and the plan credits their generosity." (L13) | **Sim.** Os Pfeiffer não são mais doadores. Os Lathrop Brown "later donated" (P [1236]) e Livermore "donated" (P [1237]). |
| VF02 MÉDIO | "It sums up the change in one line. A way of life had ended." | "It sums up the change in one line: a way of life had ended, and a new era began." (L10) | **Sim.** A frase traz as duas metades da linha (P [1233]). Fica de fora só "for the beautiful country", sem mudar o sentido. |
| VF03 LEVE | "So why didn't more follow?" | "So why did so few follow?" (L02) | **Sim**, com a troca exata do laudo. |
| VF04 LEVE | "…near the southern end of the coast, they reach 5,200 feet." | "…in the southern part of the coast, they reach about 5,200 feet." (L04) | **Sim.** M14 dá 0,66 do caminho, e o "about" só afrouxa o 5.200 do plano. |
| VF05 LEVE | "…calls the water resources small and seasonal…" | "…relatively small and seasonal…" (L07) | **Sim.** |
| VF06 LEVE (datar) | "The county's answer came in 1986…" | "The county's answer took final form in 1986…" (L11) | **Sim.** A certificação é de abril de 1986 (capa; M18). |
| VF07 LEVE | "…for recreation and visitors." | "…for recreation, visitors and a few other priority uses." (L16) | **Sim.** Os veículos militares e a agricultura (P [1428]). |
| VF08 LEVE | "…started in the national forest above the coast." | "…started in the backcountry above the coast." (L17) | **Sim.** O ponto do CAL FIRE fica na serra, dentro do distrito (M10). A troca não é a do laudo ("broke out in the mountains above this coast"), mas diz o mesmo e não diz mais. |
| VF09 LEVE | "…right after the long closures…" | "…only months after the long closures…" (L18) | **Sim.** Vai de 14/01 a 08/08/2026. |
| VF10 LEVE | "…in small clusters…" | "…in rural clusters…" (L19) | **Sim.** |
| VF11 LEVE | "…the viewpoints the county's rule was written to protect." | "It's one of the viewpoints named in the county's rule." (L22) | **Sim.** O Bixby Creek Turnout é nomeado na definição do critical viewshed (P [230]), que a política-chave usa (P [226]). |
| VF12 LEVE (nao_conferida) | "Hardly a house is in sight." | igual (P02) | **Não, e é pelo desenho do pedido.** Depende da imagem: vai à regência e ao `conferente-de-midia`. A troca pronta, se a imagem mostrar casa, está no editor, em f182. |
| VF13 LEVE (nao_conferida) | "That highway runs all the way from one metro area to the other. Together, they hold more than 17 million people." | "Together, Los Angeles and San Francisco hold more than 17 million people." (P01, saída b) | **Sim, a frase sem apoio saiu.** O §301 não foi lido, e nada o substitui. Mas a frase que ficou abriu o VF14, abaixo. |

## O que a rodada mudou, além dos achados de fatos (conferido frase a frase)

- **L01, gancho:** "Monterey County's 1986 plan for this coast, the rulebook for building on it, calls the climate mild." O aposto confere: o plano diz de si "it will provide development standards to guide the actions of all State and local agencies" (P [45]). O 1986 e o "mild" (P [65]) ficam como na rodada 1.
- **L03, p1:** "The census district and the plan don't cover the same ground." Confere: Carmel fica fora do distrito, e o sul também (Mud Creek e Cone Peak no San Ardo CCD; M10), mas os dois ficam dentro da costa do plano.
- **L05, L08 e L15:** "the plan adds", "the plan notes" e "the plan says" foram cortados. O fato é o mesmo:
  - os penhascos e as praias (P [54], [56]) continuam atribuídos pela frase anterior ("in the words of the county's plan");
  - o Forest Service fica como na rodada 1 (P [2880]);
  - a frase de "moved, redesigned" (P [238], [239], [246]) vem colada à citação do plano.
- **L06, p2:** "Highway 1 is the basic route into the area." perdeu a atribuição, e o presente passa a ser do narrador. Confere com o plano (P [1291]) e continua verdadeiro em 2026, porque a outra estrada é a Nacimiento-Fergusson, pela serra. "In 1986, the plan counted just one other road from inland" confere com P [1293].
- **L09, p3:** "Two of them are called Paul's Slide and Regent's Slide." Os dois nomes vêm da Caltrans (nota de 14/01/2026).
- **L12, p6:** "By then, much of this coast was already public land, the plan says." É mais fraco que "Approximately half of the Big Sur coastal zone is in public ownership" (P [1514]) e cabe nele.
- **L14, p6:** "One of them is the turnout beside the bridge at Bixby Creek." Confere com P [230].
- **L20, p8:** os trabalhadores de 1986 morando no carro saíram. Não há nada a conferir, e a régua de 1986 deixa de ficar colada à ACS de 2020–2024.
- **L21, p8:** "Many come for the view the 1986 plan set out to protect." É mais fraco que o "They" de antes (P [1297], P [226]).
- **L23, p9:** "In its 1986 plan, the county wrote that whatever came next should stay out of this view." Confere com P [226] e a capa.
- **P03, p7 (f146a e f146b do editor):** "Kirk Gafill owns the Nepenthe restaurant in Big Sur. In May 2026, in a Caltrans release, he said his business, his staff and the community were recovering from those years." **Confirmada. A condição do pedido está cumprida, e as duas frases podem ficar.** A nota "Tourism on Big Sur is Surging Since Reopening of Highway 1" é da Caltrans: Distrito 5, contato da Caltrans, publicada em 15/05/2026 (M20). Ela traz, entre aspas, "The robust and sustained increase in visitation is allowing our business, employees, and larger community to recover rapidly from the three-year closure", com a atribuição "said Kirk Gafill, owner of Nepenthe restaurant in Big Sur".
  - A paráfrase não diz mais que a fala: "staff" está por "employees", "the community" por "larger community", e "were recovering from those years" pela recuperação "from the three-year closure".
  - "Those years" aponta os "almost three years" de f142, que são o mesmo fechamento.
  - O "45 percent" ficou fora da voz, como a Sala quer: nenhum número de visitantes de hoje.
  - O presente "owns" é o da fonte, de maio de 2026, e a frase seguinte data a fala. Entra nos voláteis, abaixo.

## ACHADOS

São 1 achado novo, LEVE, e 1 aberto da rodada 1, LEVE. Nenhum é GRAVE. Nenhum número dito está errado. As operações são as da lista fechada do `ferramentas/aplicar-lista.mjs`.

**VF14 [LEVE] · P34 (p9) · ESTREITAR · novo, nascido do corte do VF13**
- **A frase:** "Together, Los Angeles and San Francisco hold more than 17 million people."
- **O problema: a régua trocada.**
  - Os mais de 17 milhões são das duas regiões metropolitanas: 17.474.482 em 2025 e 17.958.344 na base de 2020 (M09).
  - Na forma de antes, o "they" apontava "one metro area to the other". O corte tirou essa ponte, e a frase passou a dizer só os nomes. Dito sem "metro areas", o número se ouve das duas cidades, e as cidades nem se aproximam dele.
  - O gancho diz certo ("Their metro areas hold more than 17 million people."). A decisão da Sala põe os nomes com o número, mas o objeto do número continua sendo as regiões metropolitanas oficiais.
- **TROCA:** "Together, the Los Angeles and San Francisco metro areas hold more than 17 million people." São +3 palavras. O número e os nomes não mudam, e "In between, …" segue igual.
- **RAIZ:** PONTUAL. **Fonte:** as estimativas do Census Bureau (`co-est2025-alldata.csv`, M09).

**VF12 [LEVE] · P34 (p9) · PEDIR (veredito: nao_conferida) · aberto, da rodada 1 (P02)**
- **A frase:** "Hardly a house is in sight."
- **O problema:** nenhuma fonte descreve a vista do mirante, e o plano lista Bixby Canyon entre as áreas residenciais (P [1536], [1712]). A frase só é verdadeira se a imagem sob ela não mostrar casa.
- **TROCA:** é o pedido à regência e ao `conferente-de-midia`: a vista a partir do Bixby Creek Turnout, sem casa à vista. Se a imagem escolhida mostrar casa, entra "From this turnout, the slopes look almost untouched." (ENFRAQUECER), que também depende da imagem.
- **RAIZ:** PONTUAL.

## Confirmadas com observação (não pedem troca)

As observações da rodada 1 sobre frases que não mudaram continuam valendo, e as linhas delas estão na tabela:
- f2 ("hold", a safra 2025);
- f25 e f26 (o Wyoming na base de 2020);
- f53 e f54 (a Wilderness Act, 16 U.S.C. 1131(c) e 1133(c), em `web/govinfo-uscode-2023-title16-chap23-wilderness-lida-2026-11-02.htm`: a definição está na lei, e a forma fraca do editor não é preciso);
- f62, f74, f94, f112, f137, f144, f164, f176 e f181;
- as frases "In 1986, it estimated…" (os "at present" do plano foram escritos entre 1981 e 1985; pela decisão da Sala, ficam com o ano do plano).

## A varredura "estado do mundo"

Toda frase no presente, ou que diz que algo continua, foi conferida:
- **"Kirk Gafill owns…"** (novo): confirmada na fonte de 15/05/2026 e datada pela frase seguinte.
- **"Highway 1 is the basic route…"** (agora sem atribuição): confirmada, porque não muda no prazo do vídeo.
- **"By mid-October, it was almost fully contained"**: datada. O CAL FIRE dá 97 % em 14, 16 e 18/10.
- **"By November 2026, the road was open from end to end again, with one-way traffic at a few work zones"**: datada e confirmada. A Caltrans, "as of Sunday, November 1st, 2026 at 10:40 PM", lista só mão única (Mud Creek, de Point Sur a Big Sur, e a ponte de Rocky Creek), sem fechamento.
- O resto do presente (o clima, a floresta federal, os visitantes, a estrada como via de acesso) não muda no prazo do vídeo.
- Nenhuma frase diz que a regra de 1986 vale hoje: não há "still", "today", "now" nem "since 1986" sobre a regra (P04 não entrou).

## As decisões da Sala, conferidas no texto de hoje

Todas estão cumpridas:
- o 1.500 sempre com "the census district" e sem milhagem na frase;
- "about six people per square mile", com o Wyoming 2020 contra 2020;
- as metrópoles pelo nome, sem "largest" (com o VF14 para o objeto do número);
- os anos 1880 atribuídos ao plano e ditos da costa;
- 1919 com a FHWA, e 1937 e os US$ 8 milhões com o plano;
- os presos com a medida;
- a regra no passado;
- os 15 %;
- Paul's, Regent's, a reabertura e os quase US$ 83 milhões;
- o fogo em palavras, sem "destroyed" e sem número na voz, com o Plaskett só pelo nome;
- as casas em duas réguas;
- os 2,9 milhões com o ano, e "the visitors came back" sem número (o "45 percent" do Gafill ficou fora);
- nada de preço, mansões, Esselen, falha, neblina, "strictest", "emptiest" ou "the only road".

## O que a tese não diz, conferido

- nada diz que a população não cresceu: "So why did so few follow?" resolve a pressuposição;
- construir não é dito proibido;
- a estrada não é a única causa nem a única estrada;
- o fogo não destruiu casas na fala;
- nenhum visitante de hoje tem número;
- a fala do Gafill diz recuperação, não vazio.

## NADA A CHECAR (9 frases, declaradas)

São perguntas, pontes e enquadramentos, sem fato:
- p1: "Why?"
- p5: "To see why the census number is so low, start with the ground itself."
- p6: "So what makes this ground so hard to live on?"
- p7: "Take access."
- p8: "Then there's water, which sounds like the odd one out."
- p9: "The other reasons have more to do with who owns the land, and what happened on it."
- p25: "So what happens to a coast like this when its road breaks?"
- p31: "The visitors are the other side of the count."
- p32: "So how empty this coast looks depends on what you count."

## Voláteis que ficaram na fala

- **A estrada aberta, com mão única em obras:** relê-se na Caltrans (roads.dot.ca.gov) antes da publicação. As três restrições vão até 13/11, 30/11 e 31/12/2026.
- **O fogo quase contido em meados de outubro:** datado.
- **Os mais de 17 milhões:** a safra 2026 sai em 2027.
- **"Kirk Gafill owns the Nepenthe restaurant"** (novo): o presente é o de maio de 2026. Só muda se o restaurante mudar de dono antes da publicação.

## A lista de nomes

O roteiro não tem fonte anônima. Os nomes, cada um com a credencial que a fonte dá:
- Shawn Harrison (USGS, 06/11/2017);
- Doctor John Roberts (plano P [1228]; FHWA);
- John Pfeiffer (P [1235]);
- Charlie Bixby, Jim Anderson e os Pfeiffer (P [1203]);
- Bill Post (P [1218]);
- **Kirk Gafill** (novo): "owner of Nepenthe restaurant in Big Sur", na nota da Caltrans de 15/05/2026.

## O padrão desta conferência

1. **O conserto que tira a ponte da frase vizinha** (VF14): ao cortar f185, foi junto o antecedente que dava ao "they" a régua certa (as regiões metropolitanas). Quem corta uma frase confere o que a seguinte herdava dela.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Onde gravar os laudos de fatos dos próximos vídeos. Segui a tarefa: `roteiros/big-sur/qc-roteiro/`.

## Os portões, depois de gravar

- `node ferramentas/portao-fatos.mjs big-sur` (02/11/2026): `portão de fatos — big-sur: PASSA`, exit 0. O sha12 é `dbf3aa915b13`, igual ao do gate.mjs, com 34 parágrafos, COBERTURA 248 de 250 e VEREDITO RESSALVA.
  - Na primeira rodada, o portão reprovou na regra [numeros]: o "two" de "Two of them are called Paul's Slide and Regent's Slide." não estava em nenhum trecho. Voltou à tabela a linha da rodada 1 com o "two massive slides" da Caltrans, e o portão passou.
  - O portão prova que cada trecho existe na cópia. Que o trecho sustenta a frase é o que este laudo julga.
- `node roteiros/big-sur/_ferramentas/gate.mjs --derivados`: exit 0, PASSA. Os dois derivados (este laudo e o `roteiro-editor.md`) citam `dbf3aa915b13`, e não há derivado velho.

VEREDITO: RESSALVA
