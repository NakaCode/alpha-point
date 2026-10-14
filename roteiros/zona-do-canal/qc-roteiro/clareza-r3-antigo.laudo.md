# Laudo · crítico de clareza · conferência da rodada 2

Revisão julgada: `d98d50f9c55c` · data-base 2026-10-14

VEREDITO: RESSALVA

NOTA: 8.3/10

Conferi o sha: `node roteiros/zona-do-canal/_ferramentas/gate.mjs` saiu PASSA e imprimiu
`d98d50f9c55c95fb2e2522baf3b29564beaa8759a701e37357559d20e5193871`. São 2.150 palavras (o teto exato), 28 parágrafos, 154
frases, média 14, maior frase 32; gancho com 166 palavras até a assinatura, "But" na palavra 49. Nenhum problema; taxas abaixo
do teto; autoplágio vazio. Os 22 alertas de palavra (`citizens` ×12, `citizenship` ×3, `sovereign` ×4, `white` ×2,
`segregat` ×1) não são tropeço de entendimento: cada "citizen" está em citação, em regra de lei ou no par "citizen of the
United States or of Panama"; o "sovereign" é sempre o do tratado, entre aspas e datado.

Pelo critério do ofício (8+ sem GRAVE) o texto passa nesta lente. A ressalva é um MÉDIO, no fim de p4, onde o gancho é pago,
e um LEVE. As mudanças da lista-r2 e do P01 não quebraram ponte nem referente: conferi cada uma (abaixo, "O que mudou").

## A janela de abertura

- **Uma dívida, aberta dentro da janela:** "But being born in Balboa didn't, by itself, make you an American." (palavra 49) e,
  antes da assinatura, a pergunta-fio: "So what made Balboa American, if being born there didn't?" É uma pergunta só, e é a que
  o fecho responde, ponto por ponto, com a mesma expressão ("by itself", "never enough").
- **O gancho avança?** Sim. O 2º parágrafo descreve a Zona (a faixa de dez milhas), mas a descrição serve à pergunta:
  Paraíso e Rainbow City dão o contraste com Balboa, e a ressalva do censo ("It counted where they were born") é o que torna a
  pergunta honesta. Não vira índice nem dado institucional solto.
- **O espectador sai com uma pergunta, não com um sumário.** Sim.
- **O peso:** são 9 números em ~54 s (1960, 3,139, 1903, October 1 1979, 7, 3,113, 3, 3,688, 1920–1970). O ouvido leva "about
  half", "seven" e "three"; os totais de 3 mil viram escala. Não é nó, e a tela os carrega; fica no destino das cifras, não
  como achado.

Nenhum achado na janela.

## ACHADOS

### C01 · MÉDIO · p4, 3º parágrafo (o 18º) · REDIZER

**Trecho:** "For the thousand or so residents of Balboa born in the Zone, the rule was the same: they were citizens if a parent had been
one at the time of the birth. So the law that ran the ground left citizenship to the parents."

**O que eu, leigo, senti:** "the same" como o quê? Eu acabei de ouvir, 45 segundos antes, que quem nascia na Zona era cidadão se o
pai ou a mãe fosse: os mil de Balboa nasceram na Zona, então a frase me repete a regra com outra roupa (o samba, item 6) e ainda
soa como se houvesse uma regra diferente a comparar. E "the law that ran the ground" eu não sei o que é: a lei que governava o
território? a lei do solo? Tive de voltar. É justamente o ponto em que o gancho ("being born in Balboa didn't, by itself, make you
an American") se paga para Balboa, e ele chega embaçado.

**Troca exata (as duas frases por uma; a mesma afirmação, sem número, data, nome ou grupo novo):**
"So for the thousand or so residents of Balboa born in the Zone, the answer came from their parents, not from where they were born."

- 44 → 25 palavras (−19): devolve folga ao total, que está no teto (2.150).
- O contraste "a lei do lugar × a cidadania" já está dito duas frases antes ("The same country held, inside that Zone, every
  power it would have 'if it were the sovereign.'"), e a frase seguinte ("The sorting was done elsewhere: on the payroll.")
  continua presa: "elsewhere" passa a contrastar com "their parents" e "where they were born".
- Sai um alerta de `citizens` e o de `citizenship` (L09); "abre_so" fica em 7 (sai um "So", entra um).
- Raiz: PONTUAL (a L09 trocou o fim da frase e manteve "the law that ran the ground").

### C02 · LEVE · p2, 3º parágrafo (o 9º) · REDIZER

**Trecho:** "and prints what it paid their teachers on average: in the first, $158.46 a month; in the second, $76.00."

**O que eu, leigo, senti:** os centavos, ditos em voz alta ("one hundred fifty-eight dollars and forty-six cents… seventy-six
dollars"), me fazem segurar duas cifras longas para chegar à única coisa que importa: uma é o dobro da outra. Perco a comparação
no meio da conta.

**Troca exata:** "and prints what it paid their teachers on average: in the first, about $158 a month; in the second, $76."

- Mesmos números, arredondados na voz; os centavos ($158.46 e $76.00) vão à tela. Não digo "twice" (seria cifra derivada,
  2,08×); a tela pode pôr as duas barras lado a lado e o olho faz a conta.
- +1 palavra ("about"). Com o C01, o total fica em 2.132.

**A prova das duas trocas juntas**, numa cópia fora do canal (`scratchpad/clareza-r2/roteiro-copia.md`, cada trecho casando uma vez
só): o portão sai 0, PASSA, sha `36beeec344b1`, 2.132 palavras, média 14,2, maior frase 32, gancho intacto (166, "But" na 49),
nenhuma taxa em alerta, autoplágio vazio, 20 alertas de palavra (saem o `citizens` e o `citizenship` do C01). O roteiro não foi
tocado.
- Raiz: PONTUAL.

## O que mudou desde `4c93f1712cf2`, conferido nesta lente

| Item | Onde | Leitura de clareza |
|---|---|---|
| L12 | gancho | As vírgulas em ", under a 1903 treaty," ajudam a pausa; nenhuma palavra muda. Ok. |
| L13 | p1 | Partir 1912/1915 em duas: melhor. A ligação "declarar a terra necessária → casas destruídas" continua implícita, mas lê-se. |
| L08 | p2 | "had been paid in gold" fecha o paralelo com "had been paid in silver coin". Ok. |
| L14 | p3 | "employees paid at 'U.S.' rates": o termo só é apresentado em p5 ("'U.S.' rates and 'local' rates instead"), mas em inglês ele se explica sozinho (paid at U.S. rates). Não é nó. |
| L10 | p3 | "They wrote in the Panama Canal Review…: everyone…": o sujeito vem antes, a fala chega mais cedo. Melhor. |
| L17 | p3 | Sem a frase de 1940, "Many of the others inside the line were soldiers." fica sem número na voz, e não precisa: a frase de 1970 e "the count took in the bases" carregam a ressalva da Sala. Ok. |
| L04, L05 | p4 | "Until 1937" no lugar de "Until then" tira o referente ambíguo; "back to 1904" casa com "made it reach back to February 26, 1904". Ok. |
| L09 | p4 | Ver C01: o fim mudou, a frase de antes e o "the law that ran the ground" ficaram. |
| L11 | p5 | "A 1958 law set it." "it" = a mesma base de pagamento, único candidato. Ok. |
| L15, L02 | p5 | "The store sorted its customers, too." liga ao "sorted its workers by payroll" de p2. Bom fio. |
| L07 | p5 | A atribuição na frente ("A State Department memo says…"): melhor ao ouvido. |
| L16 | p5 | "The division was still there." retoma "The division ran through the map." (p2). "the next fight" sem "over the line" ainda funciona: a carta de 1946 e a resposta do governador são a briga anterior. Ok. |
| L06 | p7 | Os 30 meses e a Commission depois de "is not abandoning them" viram a resposta à promessa de Vance. Melhor ordem que a antiga. |
| L01 | p7 | "Being born there, by itself, was never enough." fecha com as palavras do gancho ("by itself"). Bom. |
| L03 | p7 | "in 2026" no meio da frase é um pouco duro ao ouvido, mas claro; a data no lugar do "Today" é exigência de fato. Ok. |
| P01 | p7 | "Its first article 'terminates and supersedes' the 1903 treaty, which had granted the band 'in perpetuity'…": a cadeia "two treaties → the canal treaty → It → Its first article → the 1903 treaty → the band" se segue sem esforço, e a volta do "in perpetuity" paga a promessa de p1. "That day" fica a uma frase de "October 1, 1979", sem outro dia no meio: o referente se mantém. |

## O MAPA DE RETENÇÃO (posição em % das palavras)

- 0–8 %: gancho; a dívida abre em ~2 % ("But being born in Balboa…") e vira pergunta-fio em ~7 %.
- 9 %: "The first rule was written in Washington" (a 1ª parcela da resposta).
- 20 %: "the plan already had two words in it: 'gold' and 'silver.'" (re-gancho plantado) → 24 %: "Those two words were payrolls."
- 33 %: "The next rule decided who could live inside the line at all."
- 43 %: "So what was a child born in Balboa, in the eyes of American law?" (o re-gancho mais forte do miolo).
- 55 %: "And in 1946, Washington asked about it." → 59 %: a voz do governador.
- 70 %: "And the next fight was about a flag." → 76 %: os alunos de Balboa High hasteiam a bandeira.
- 84 %: "That treaty is where the Zone ends."
- 93 %: a pergunta-fio volta e é respondida; coda em "The town stayed where it was, below the hillside."

**O maior deserto:** ~25–32 % (p2, 2º e 3º parágrafos: os clubhouses, as cinco cidades, as escolas e os salários). Dura uns 40 s;
a pergunta viva ali é só "o que isso tem a ver com quem era americano?", e ela é respondida em 32–33 % ("So the Zone sorted its
workers by payroll. The next rule…"). Cada frase traz coisa nova, então não é deserto de repetição; com o C02, pesa menos.

## O CENSO DE PRESENÇA

- **Falas de gente:** Mary e Herbert Knapp (~42 %, palavra ~920, ~5:00: "lived in rented quarters", "commy"); o governador da
  Zona, em discurso indireto com citação (~59 %); Mondale, "a proud day" (~89 %); o Secretário de Estado, por carta, "is not
  abandoning them" (~90 %). O boletim do Departamento de Estado ("in defiance of the Governor's orders") e os relatórios falam,
  mas são documento, não gente.
- **Gente nomeada sem voz:** Hay e Bunau-Varilla (~10 %), Carter e Torrijos (~85 %); os alunos de Balboa High e do National
  Institute agem, não falam.
- **A primeira voz humana chega tarde** (~5:00, 42 %). É a estrutura do texto (a abertura é a cidade e o tratado, não uma
  pessoa) e não cabe consertar nesta rodada sem reescrever o gancho; fica registrada como limite da nota, não como achado.
- **A hierarquia:** em 1964, o fato humano abre (os alunos, a bandeira rasgada) e o institucional explica (a comissão de juristas,
  os Arquivos Nacionais): certo. Em p4, a lei abre e a criança de Balboa vem depois; está certo porque a pergunta que abre p4 já é
  humana ("So what was a child born in Balboa…").

## O DESTINO DAS CIFRAS

**As que merecem a memória (cinco):**
1. Balboa, 1960: **cerca de metade** nascida nos EUA (o "3,139" é escala; pode ir à tela).
2. Paraíso **7**, Rainbow City **3** (o contraste; os 3,113 e 3,688 são escala).
3. **1903 → October 1, 1979** (o começo e o fim).
4. **Ten miles wide** (a faixa; imagem no mapa).
5. **4 soldados americanos e 24 panamenhos** mortos, com a atribuição.

**Imagem ou comparação:** os salários dos professores ($158 × $76: duas barras, C02); "almost four thousand privately owned
houses" (imagem: o mapa das casas que saíram); "more than half" da Zona em 1970 (já vem como comparação, com a ressalva).

**Tela:** os centavos de 1920; 3,113 e 3,688 (os totais, na 2ª vez em p5 sobretudo); 18/11/1903; 1912 e o decreto de 1914;
1936/1939; 04/08/1937 e 26/02/1904; 1946, nov./dez. 1948, 1950, 1955, 1958, fim de 1956; jan. 1963 e 30/12/1963; 7, 9 e 10/01/1964
e 03/04/1964; 07/09/1977, abril de 1978 e 68–32; os 30 meses e 1999; 2026. Datas que a voz diz como andaime de narrativa
cronológica: não pesam como planilha, porque cada uma abre um acontecimento; a tela as fixa.

**Sai:** nada a cortar além do que o C01 e o C02 já tiram.

**O recorte casa com a tese?** Sim, com uma observação: em p5, "Now the 1960 census, town by town" usa lugar de nascimento por
cidade para dizer "The division was still there". O texto nunca diz que Paraíso era cidade "silver" (só Rainbow City, por
"Silver City"); o espectador liga pelo contraste dos números, e a frase seguinte não afirma mais do que isso. Ok.

## O QUE ESTÁ FORTE

- A pergunta-fio é uma só, aberta em 50 palavras e respondida no fecho com as palavras do gancho ("by itself", "never enough").
- A cadeia referencial: "the band", "the line" ("From now on, that is the line."), "gold"/"silver" plantados em p1 e pagos na
  1ª frase de p2, "the hillside" do gancho que volta na coda.
- As pontes entre as partes: cada uma termina dizendo o que a próxima resolve ("The next rule decided…", "So what was a child
  born in Balboa…", "And the next fight was about a flag.", "That treaty is where the Zone ends.").
- 1964 contado pela ordem humana, com a contagem atribuída e "Other counts differ."
- O P01: o "in perpetuity" volta e o fim de uma concessão perpétua fica compreensível sem lista de anos.
- O fecho reordena, não só resume: "if it were the sovereign" (1903) × "territorial sovereign" (1977) dá ao espectador a lente
  nova, e a coda volta à cidade do começo.

## NÃO TOCAR

- As três primeiras frases do gancho e a assinatura (gancho, palavra por palavra).
- "From now on, that is the line." e "Those two words were payrolls."
- "The job came first. Then the house. Then the family."
- "So what was a child born in Balboa, in the eyes of American law?"
- "Four U.S. soldiers and 24 Panamanians were killed, according to the U.S. National Archives. Other counts differ."
- O 1º parágrafo de p7 do P01 inteiro, e "That day, seventy-five years after…".
- "Being born there, by itself, was never enough." e a coda "The town stayed where it was, below the hillside. The Zone that made
  it American did not."

---

## A comparação com o laudo da bancada final (`clareza-r2-antigo.laudo.md`, lido só depois dos achados acima)

Revisão julgada lá: `4c93f1712cf2` (RESSALVA, 7,9). Aqui: `d98d50f9c55c` (a lista-r2 e o P01 aplicados).

**Resolvidos:**
- **1 (MÉDIO, "ceased to exist" depois de "until the end of 1999"): resolvido** por L06, com a minha ordem palavra por palavra.
  Lido a frio, o fim da Zona fica em 1979 e o "is not abandoning them" ganha a resposta logo depois.
- **2 (MÉDIO, "The rule about being born there never changed."): resolvido** por L01, com a minha troca ("Being born there, by
  itself, was never enough.").
- **3 (MÉDIO, "U.S.-rate" antes da explicação): resolvido** por L14, com outra redação ("employees paid at "U.S." rates"). Não usou
  o meu "the scale that took over from gold"; ainda assim, "paid at U.S. rates" se explica sozinho em inglês e não soa mais como
  nacionalidade ("U.S.-rate employees"). Hoje não tropecei.
- **4 (MÉDIO, "the line" mudando de sentido): resolvido** por L15 e L16, com as minhas trocas ("The store sorted its customers,
  too."; "The payroll had lost its old names. The division was still there. And the next fight was about a flag.").
- **5 (LEVE, o 1940 colado ao 1970): resolvido** por L17 (a frase saiu da voz; os 45,6 % vão à tela).
- **7 (LEVE, os Knapp com o sujeito na 19ª palavra): resolvido** por L10, com outra redação ("They wrote in the Panama Canal
  Review…: everyone…"); o sujeito vem primeiro.

**Em parte:**
- **8 (LEVE, as casas enterradas na lei): em parte.** L13 partiu a frase em duas, mas a lei continua antes das casas. Hoje a frase
  das casas tem frase própria e se ouve; não reapresento.

**Não aplicados, e o que faço com cada um:**
- **6 (LEVE, "In 1903, those were the powers…"):** ficou igual. Na leitura a frio de hoje não tropecei: "The treaties said the rest
  in their own words." prepara o par 1903 × 1977, e "those were the powers" se lê como "os poderes do tratado de 1903". Não
  reapresento; volta para abaixo do corte.
- **9 (LEVE, os centavos do salário):** ficou igual, e voltei a tropeçar: é o C02 de hoje, com troca mais conservadora (os mesmos
  números, arredondados, sem a razão derivada "less than half", que pediria o verificador).
- **10 (LEVE, os denominadores repetidos em p5):** ficou igual. Hoje o pus no destino das cifras (tela), não como achado: a volta ao
  censo é deliberada, e os totais na 2ª vez são peso, não nó.

**Onde mudo de posição:** no antigo, "So the law that ran the ground left the child to the parents' papers." estava no meu NÃO
TOCAR, como "a imagem que resume p4". A L09 tirou o "papers" (a imagem concreta) e deixou "the law that ran the ground" sozinho e
abstrato, colado a uma frase que repete a regra de 45 s antes. Lido a frio, tropecei nos dois: é o C01. A troca do C01 guarda o que
a imagem fazia (os pais decidem, o chão não) em palavras que se entendem na primeira passada.

**Novo nesta rodada:** só o C01, nascido da L09 (a frase de antes, "the rule was the same", já estava no texto julgado; não a vi como
samba enquanto o fim da frase seguinte trazia a imagem dos "papers"). Nada nasceu do P01: a frase nova se encadeia sem esforço.
