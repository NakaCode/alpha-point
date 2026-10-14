# Laudo · crítico de locução (adaptado para en-US e TTS) · rodada final

Revisão julgada: `4c93f1712cf2` · data-base 2026-10-14

NOTA: 8/10. O texto se grava de primeira quase inteiro (frase média de 14,2 palavras, a frase curta guardada para as viradas, toda citação com o dono dito na voz), mas em quatro lugares o ouvido amarra a frase ao tempo ou ao sujeito errado, e em três a compressão deixa a frase sem espinha ou com o sujeito empurrado para o fim.

VEREDITO: RESSALVA. Nenhum achado GRAVE (ofício §6), mas os sete MÉDIOS mudam o que o espectador entende ou obrigam a voz a decidir como se lê. As dez trocas, aplicadas juntas numa cópia fora do canal, dão no `gate.mjs` PASSA (abaixo).

## Notas

- **O que foi julgado.** O texto falado de `roteiros/zona-do-canal/roteiro-narrador.md`, sha256 `4c93f1712cf2740389d980922c5223386cd739bf33077af169835204a5dd5b3d`: 28 parágrafos, 152 frases, 2.148 palavras (o teto do portão é 2.150), média de 14,2, maior frase com 33, PASSA, gancho com 166 palavras até a assinatura e o "But" na palavra 49, sem autoplágio.
- **Como foi lido.** Como a voz vai ler: um pedido por parágrafo, eleven_v4 a ~184 palavras/min, stability 0,5, sem aspas, itálico nem maiúscula audíveis, com os números e as datas por extenso só na cópia para a voz (pronuncia.md, "O que a cópia para a voz vai trocar"). Os achados são da primeira passada.
- **O que esta lente não refez.** Média, teto de frase, datas seguidas, palavras vetadas e taxas são do portão. Fato e estrutura são das outras lentes. Quando uma troca encosta em fato, o achado diz o que a lente de fatos confere.
- **Os 21 alertas do portão, decididos por esta lente.** Nenhum pede troca de locução:
  - `citizen(s)`/`citizenship` (14): todos são a palavra da lei, do relatório ou da regra, ditos com o dono na voz ("in the report's words", "Under that law", "the manual adds"). Nenhum põe "citizens" no lugar de "born in the United States";
  - `white`/`colored` (2): os dois vêm com "the Zone's 1920 report lists" e "the Zone's report listed". A voz não marca as aspas, mas o verbo de atribuição sim;
  - `sovereign` (4): três são a frase do tratado com o dono dito ("Its third article", "The treaties said the rest in their own words", "the new treaty called Panama"). O quarto, "The same country held, inside that Zone, every power it would have "if it were the sovereign."", sai na voz do narrador, mas sem o "as" vetado e logo depois de o tratado ter sido citado com o dono. Fica;
  - `segregat` (1): dentro do "he said" do governador.
  - Com as trocas, o portão alerta mais um `citizen` e um `citizenship`, nos achados 3 e 6. São a palavra da lei, no mesmo sentido do p4.
- **As decisões da Sala, conferidas no texto.** Balboa sai como "the town below Balboa Heights, the hillside the Panama Canal Zone was run from" (gancho) e "the town at the foot of Balboa Heights, the hillside the Canal Zone was run from" (p1). "Hillside" no lugar de "hill" diz o mesmo. Nada de "seat of government". A Zona inteira vai sem número na voz ("More than half… and the count took in the bases along with the towns"), com os soldados na frase de antes. 1964 vai na forma da Sala, palavra por palavra. Não há McCain. O presente é uma linha, sem adjetivo ("Today, the Panama Canal Authority gives its address as the Administration Building, in Balboa."), na forma do `como_dizer` do dossiê, com o dono na voz. Ela não tem data: a Sala pediu "com data", e o dossiê manda "reconferir na véspera". Isso é da lente de fatos e da Sala, não de locução.
- **A folha de pronúncia** está carimbada com `4c93f1712cf2` e cobre todo nome que a voz diz. Nenhum nome ficou fora dela. A troca 1 põe mais um "1937" na voz, e a folha já lista esse ano. A troca 7 reordena frases dentro do 26º parágrafo e não tira nome de lugar nenhum. As posições da folha continuam valendo.
- **As trocas, provadas em cópia.** As 10 trocas abaixo, aplicadas juntas numa cópia fora do canal, dão no `gate.mjs`: PASSA, 2.149 palavras, 28 parágrafos, 154 frases, média de 14,0, maior frase com 32, gancho intacto (166 palavras até a assinatura, "But" na palavra 49), sem autoplágio, nenhuma taxa em alerta e 23 alertas de palavra (os 21 de hoje e mais os 2 da nota acima). O teto de 2.150 palavras está a duas. Cada troca foi medida sozinha no portão: o achado 5 põe três palavras e o 3 põe duas; o 6 tira duas, e o 7 e o 10 tiram uma cada; os outros cinco não mudam a conta. Quem aplicar o 5 ou o 3 sem os cortes passa do teto, e confere o total no portão.
- **Abaixo da linha.** Não são achados e não seguram nada. Ficam com o dono:
  - "Contractors, a few licensed businesses, church, charity, school and science workers, and everyone's household servants." O "church" solto se ouve primeiro como lugar, e o ouvido só reparte a fila em "workers". Se a amostra embolar: "church and charity workers, school and science workers".
  - "From now on, that is the line." Dito, o "From now on" pode soar como "a partir de 1914" ou como "daqui em diante, no vídeo". Os dois sentidos dão no mesmo, e o mapa resolve.
  - "the Zone's" volta 19 vezes, e "the Zone's own", 3. Elas se espalham pelo texto, quase nunca duas na mesma frase, e na voz não viram fôrma. Não é tique.

## ACHADOS

1. [MÉDIO · referência de tempo que o ouvido amarra errado (ofício §3.3) · DATAR] "Until then, the State Department's manual says, a child born in the Zone fell under the general rule for births abroad." → O parágrafo de antes termina em "February 26, 1904, the day the 1903 treaty took effect". O último tempo que o ouvido guardou é 1904, e "Until then" vira "até 1904". O "then" certo é 1937, a lei. Com o tempo errado, a frase seguinte ("a condition the 1937 law dropped, from 1904 on") vira um nó, justo no parágrafo que explica a virada do título. → CONSERTO: "Until 1937, the State Department's manual says, a child born in the Zone fell under the general rule for births abroad." (0 palavras) → RAIZ: PONTUAL.

2. [MÉDIO · ordem que o ouvido lê como cronologia (ofício §3.3) · REORDENAR] "The Canal Zone and its government ceased to exist." → No 26º parágrafo, a frase vem depois de "ran the canal until the end of 1999". Sem data, o ouvido a prende ao último tempo dito e entende que a Zona acabou em 1999. Isso contraria o "Until 1979" do título no parágrafo que o paga. O fato é de 1º de outubro de 1979 (8 FAM 302.4-2, "ceased to exist on that date"). Pôr "That day" na frente não resolve: depois de 1999, "that day" seria o último dia de 1999. A ordem resolve sem palavra nova. O fim vem primeiro, depois a reação do dia e, por último, o que continuou. O "is not abandoning them" passa a puxar o "For thirty months more… still covered the canal's American employees", e o "called it" de Mondale continua preso ao fim da Zona. → CONSERTO, o 26º parágrafo inteiro, com as mesmas frases noutra ordem: "The Canal Zone and its government ceased to exist. At Albrook Air Force Base, Vice President Mondale called it "a proud day" for both peoples. In August, the Secretary of State had written to him that the visit should reassure the American canal employees that the United States "is not abandoning them." For thirty months more, American police and courts still covered the canal's American employees, the military and their families, in certain areas. The Zone's schools passed to the Department of Defense, and an American agency, the Panama Canal Commission, ran the canal until the end of 1999." (0 palavras) → RAIZ: PONTUAL.

3. [MÉDIO · frase que contradiz o que o ouvido acabou de ouvir (ofício §1, "o ouvido confunde") · REDIZER] "The rule about being born there never changed." → Seis minutos antes, o espectador ouviu que a regra mudou: "a condition the 1937 law dropped, from 1904 on". Dita no fecho, a frase soa como contradição, e o fecho é o lugar em que ele monta a resposta. O sentido certo é o de p4, com o mesmo escopo: nascer ali, por si só, nunca bastou. A forma ecoa a do gancho ("make you") e a do p4 ("didn't, by itself, make you a citizen"), e o ouvido reconhece a volta. → CONSERTO: "Being born there, by itself, never made you a citizen." (+2 palavras no portão; ele alerta o `citizen`, a palavra da lei, como no p4) → RAIZ: PONTUAL.

4. [MÉDIO · atribuição que o ouvido troca de dono (ofício §3.3; marca/voz.md §1, "cada ator nos próprios termos, e atribuído") · REORDENAR] "Panama had insisted on that, a State Department memo says, calling the old access unfair competition with its economy." → Dito, o particípio "calling" se prende ao sujeito mais próximo, o memorando. O ouvido entende que o Departamento de Estado chamou o acesso de concorrência desleal, e a fonte diz que foi o governo do Panamá ("at the insistence of the Government of Panama which argued…"). Com a fonte na frente e o Panamá como sujeito da oração que o "calling" segue, a acusação volta para o dono, e o "its economy" fica preso ao Panamá. → CONSERTO: "A State Department memo says Panama had insisted on that, calling the old access unfair competition with its economy." (0 palavras) → RAIZ: PONTUAL.

5. [MÉDIO · fragmento sem espinha por compressão (ofício §3.1) · REDIZER] "and skilled craftsmen, recruited largely from the United States, in gold." → A segunda metade da frase corta o verbo ("had been paid") e põe seis palavras de credencial entre o sujeito e o "in gold". Quando o "in gold" chega, o ouvido já soltou o "paid in silver coin" de antes, e a frase fecha num sintagma solto. É a frase que dá o nome às duas folhas, a chave de p2. → CONSERTO: "and skilled craftsmen, recruited largely from the United States, had been paid in gold." (+3 palavras) → RAIZ: PONTUAL.

6. [MÉDIO · frase que o espectador não entende (ofício §1; §3.7, a frase que funciona no papel) · REDIZER] "So the law that ran the ground left the child to the parents' papers." → São duas metáforas em fila ("the law that ran the ground", "left the child to the parents' papers"), e nem lida a frase diz logo o que quer. Dita, "the law that ran the ground" não tem dono (o tratado? a lei de 1912? a de 1937?), e "papers" pode ser documento, jornal ou trabalho escolar. É a ponte que leva o p4 ao p5, e o ouvido precisa sair dela com a ideia inteira: a lei americana mandava no chão, mas a cidadania vinha dos pais. O "ran the ground" (a forma do juiz, I01) fica. → CONSERTO: "So American law ran the ground, but citizenship came from the parents." (−2 palavras; o portão alerta o `citizenship`) → RAIZ: PONTUAL.

7. [MÉDIO · fôlego, sujeito empurrado para o fim (ofício §3.2) · REORDENAR] "In the Panama Canal Review, the Zone's own magazine, in its issue dated the day the Zone ended, they wrote that everyone "lived in rented quarters" and shopped at the "commy," the commissary." → É a maior frase do roteiro (33 palavras, uns 11 s). São 18 palavras de onde e quando, com dois apostos, antes do sujeito "they". O ouvido chega ao "they wrote" sem saber quem escreve nem o quê, e ainda tem duas citações e uma glosa pela frente. Com sujeito e verbo na frente, a frase se lê num arco só, e os dois-pontos dão à citação a pausa que as aspas não dão. → CONSERTO: "They wrote in the Panama Canal Review, the Zone's own magazine, in its issue dated the day the Zone ended: everyone "lived in rented quarters" and shopped at the "commy," the commissary." (−1 palavra; só com ela, a maior frase do roteiro cai de 33 para 32) → RAIZ: PONTUAL.

8. [MÉDIO · construção de página, verbo separado do objeto (ofício §3.2) · REDIZER] "In 1955, a new treaty promised, and a 1958 law set, the same base pay for the same job, whether the employee was a citizen of the United States or of Panama." → "promised, and a 1958 law set, the same base pay" deixa dois verbos esperando um objeto que só chega depois da oração do meio. Dita, a fala tem de segurar a entonação suspensa duas vezes. Uma voz sintética, num pedido por parágrafo, tende a fechar o arco em "promised", e aí "and a 1958 law set" soa como frase sem objeto. A cadeia de datas também aperta: 1948, 1950, 1955 e 1958 caem em três frases seguidas. Separar dá a cada data o seu verbo. → CONSERTO: "In 1955, a new treaty promised the same base pay for the same job, whether the employee was a citizen of the United States or of Panama. A 1958 law set it." (0 palavras) → RAIZ: PONTUAL.

9. [LEVE · fronteira de oração que a voz não marca (ofício §3.2) · REDIZER, só pontuação] "and under a 1903 treaty its police, courts and schools answered to Washington." → Sem vírgula, a voz v4 lê "treaty its police" de um fôlego, e isso pode soar como "treaty's police". É a segunda frase do vídeo, a que diz o que fazia a cidade americana. A troca é só de vírgula e não muda nenhuma palavra do gancho do plano. → CONSERTO: "and, under a 1903 treaty, its police, courts and schools answered to Washington." (0 palavras) → RAIZ: PONTUAL.

10. [LEVE · fôlego (ofício §3.2) · REDIZER] "The 1912 act also let the president declare every acre of the Zone necessary to the canal, and by June 1915 almost four thousand privately owned houses had been destroyed or removed." → São 32 palavras, e com os anos por extenso na cópia ficam umas 35 (uns 11,5 s). É uma das três maiores frases, com dois sujeitos e duas datas. O ponto dá fôlego e deixa a vírgula para a data. A ordem de causa continua no ouvido, e a troca também paga parte do teto de palavras das outras. → CONSERTO: "The 1912 act also let the president declare every acre of the Zone necessary to the canal. By June 1915, almost four thousand privately owned houses had been destroyed or removed." (−1 palavra) → RAIZ: PONTUAL.

## O QUE ESTÁ FORTE

- **O gancho se fala de primeira.** "Until October 1, 1979." é a elipse curta que fecha o arco, como o ofício pede. O "But" vem curto, a pergunta vem antes da assinatura, e as três contagens (Balboa, Paraíso, Rainbow City) entram cada uma numa frase, com o lugar antes do número.
- **A citação sempre com dono na voz,** e por isso as aspas que a voz não marca não viram fala do narrador:
  - "in the report's words";
  - "as a State Department bulletin put it";
  - "he said" e "he added", nas palavras do governador;
  - "the manual adds" e "it says";
  - "Its own 1940 report explains the names".
- **A frase curta só nas viradas, sem rajada:**
  - "The job came first. Then the house. Then the family.";
  - "The payroll had lost its names. The line had not.";
  - "Other counts differ.";
  - "The test was service, not citizenship.".
- **As pontes que o ouvido carrega:**
  - "Those two words were payrolls.";
  - "The question of who belonged had moved from the payroll to the flagpole.";
  - "That treaty is where the Zone ends.".
- **A glosa colada ao termo:** "the commissary, the Zone's own store"; "the "commy," the commissary" (a glosa desarma o "commie" logo que a palavra sai); "an American agency, the Panama Canal Commission"; "a plaza of Zone ground in Panama City".
- **As guardas de voz que o roteirista já pôs:**
  - os números pequenos por extenso no texto ("ten miles", "fifteen days", "seventy-five years", "thirty months", "four thousand");
  - "68 to 32" com "the Senate approved", que a voz não lê como placar;
  - "signed in 1936, in force from 1939" de um fôlego;
  - nenhuma sigla para soletrar além de "U.S.".
- **A resposta em cadência** ("A treaty, which… A law, which… A second treaty, which… And a payroll, which…"): a fôrma repetida é de propósito. Ela responde a pergunta do gancho dita de novo, e cada elo tem o nome do documento na frente.
- **O fecho:** "The town stayed where it was, below the hillside. The Zone that made it American did not." A elipse fecha o arco, e o "did not" cai no tempo forte.

## NÃO TOCAR

- O primeiro parágrafo do gancho, palavra por palavra (o `gancho.texto` do plano), fora a vírgula do achado 9: "This is Balboa, the town below Balboa Heights, the hillside the Panama Canal Zone was run from." "Until October 1, 1979." "But being born in Balboa didn't, by itself, make you an American."
- "So what made Balboa American, if being born there didn't? You're at Alpha Point, and this is where the story of who was American in the Canal Zone begins.": a forma que o portão confere. A pergunta volta no p7, e é de propósito.
- "The town you saw first is Balboa, the town at the foot of Balboa Heights, the hillside the Canal Zone was run from.": a forma da Sala para T06. São quatro "Balboa" em duas frases, mas é justo a frase que separa a cidade do morro.
- "Four U.S. soldiers and 24 Panamanians were killed, according to the U.S. National Archives. Other counts differ.": a forma da Sala para T03.
- "The test was service, not citizenship." e "Nobody lived in the Zone just because they wanted to."
- "For citizenship law, it says, the Zone "was never considered part of the United States."": o "it says" é o que segura a frase na voz.
- "The job came first. Then the house. Then the family."
- "The payroll had lost its names. The line had not. And the next fight over the line was about a flag."
- "The question of who belonged had moved from the payroll to the flagpole."
- A resposta em cadência do 27º parágrafo, fora a última frase (achado 3).
- "The treaties said the rest in their own words." e os dois tratados lado a lado ("if it were the sovereign", "territorial sovereign").
- "The town stayed where it was, below the hillside. The Zone that made it American did not."

PADRÕES:
- **O ouvido amarra ao mais próximo.** O "then" vai para a última data dita (A1), o "ceased to exist" para o último ano (A2), o "calling" para o último sujeito (A4), e o "never changed" briga com a última coisa que mudou (A3). Na página, a estrutura do parágrafo segura cada um. Dito, num pedido por parágrafo, só a vizinhança conta.
- **A compressão corta o verbo ou empurra o sujeito.** O "in gold" sem "had been paid" (A5), o "promised, and … set," sem objeto (A8) e as 18 palavras antes do "they wrote" (A7). O conserto é sempre devolver o verbo ou pôr o sujeito na frente, sem cortar conteúdo.

## Contra a rodada 1 (lido depois de gravar os achados acima)

O laudo `locucao-r1.laudo.md` julgou `6917e62a2155`. O que aconteceu com cada achado dele no texto de hoje:

- **Resolvidos, na forma proposta ou noutra que resolve:**
  - A1 (GRAVE, o "where" que prendia a sede à cidade): "the hillside the Panama Canal Zone was run from" no gancho (L01), e o "That" de p1 saiu (L04);
  - A2 (Rainbow City / Silver City): "In the 1950 census, it was called Silver City." numa frase só dela (L23);
  - A3 (o fragmento de 1956): "From the end of 1956, employees who lived in Panama… could no longer shop there." (L21);
  - A4 (a fila de dez topônimos): "at Balboa and four other towns… Gatún and Cristóbal had both." (L07);
  - A5 (o salário dos professores): a ordem proposta, letra por letra (L08);
  - A6 (o governador de 1946): três frases, com "he said" e "he added" (L17);
  - A7 ("thousand-odd"): "the thousand or so residents of Balboa born in the Zone… they were citizens" (L16);
  - A8 (a) "Panama City, the capital, and Colón" (L03) e (b) "a plaza of Zone ground in Panama City" (L24);
  - A9 (a) "the 1903 treaty" (L15) e (b) "in front of the National Institute. Four days of fighting had begun." (L25).
- **Recusados pela lista, com motivo, e que a leitura fresca de hoje também não marcou:**
  - A9 (c), "the one that restored relations": o aposto cola em "Joint Declaration", o nome mais próximo, e a frase não tropeçou na primeira passada de hoje;
  - A10, o arredondamento de 3,113 e 3,688 no gancho: hoje não tropeçou. O "Up the canal" e o "On the Atlantic side" separam as duas contagens, e a amostra da folha (item 5) é onde se ouve se "three thousand one hundred thirteen" embola com o 3,139.
- **Abaixo da linha da r1 que viraram achado hoje** (a lista não os pegou, porque não eram achados):
  - "in gold" sem verbo → A5;
  - "ceased to exist" depois de 1999 → A2. Hoje a proposta é outra: a reordenação dentro do parágrafo, porque mover só a frase deixaria o "called it" de Mondale preso a 1999;
  - o "calling" do memorando → A4, com a mesma redação;
  - a frase dos Knapp → A7. A r1 tinha "In 1979 they wrote, in the Panama Canal Review…". A redação de hoje ("In the Panama Canal Review, …, in its issue dated the day the Zone ended, they wrote…") pôs mais palavras antes do sujeito, e virou a maior frase do texto.

  Os quatro sobem de grau porque, com os GRAVE e os MÉDIOS da r1 resolvidos, são os pontos em que a voz ainda decide ou o ouvido entende outra coisa. O A2 também encosta na promessa do título.
- **Abaixo da linha da r1 que continuam abaixo da linha:**
  - "From now on, that is the line.";
  - o "the Zone's" repetido;
  - o "It counted where they were born." do gancho, que hoje não tropeçou: "no census… It counted" se fala como fala;
  - o "Today" sem data da coda, que é de fatos e da Sala (notas acima).
- **Novos de hoje, sem par na r1:**
  - A1, o "Until then": a frase já estava na r1 (e o P01 a manteve), e a r1 não a marcou. O parágrafo de antes já terminava em 1904, e a L15 (pelo A9 a da r1) ainda pôs "the 1903 treaty" ali, o que deixa o ano errado mais perto do "then";
  - A3, "never changed": a r1 tinha "and it is still on the books", e a troca L29 deixou a frase que hoje contradiz o p4;
  - A6, "the law that ran the ground… the parents' papers": a ponte do juiz, que a r1 deixou passar;
  - A8, "promised, and a 1958 law set,";
  - A9, a vírgula do gancho;
  - A10, a frase de 1912.
