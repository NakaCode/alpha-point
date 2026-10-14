# Laudo · crítico de locução (adaptado para en-US e TTS) · conferência da rodada 2

Revisão julgada: `d98d50f9c55c` · data-base 2026-10-14

NOTA: 9/10. A lista da rodada 2 e o P01 resolveram os dez achados da bancada final. O texto de hoje se grava de primeira quase inteiro. Sobram três pontos: um tropeço novo de sintaxe que a troca L14 criou (MÉDIO) e dois referentes que o ouvido pode prender ao lugar errado (LEVES). Um deles é novo e vem do P01.

VEREDITO: RESSALVA. Não há achado GRAVE (ofício §6). O MÉDIO custa uma palavra e tira da voz uma frase que, ouvida, parece terminar antes do fim. As três trocas, aplicadas juntas numa cópia fora do canal, dão no `gate.mjs` PASSA, com 2.149 palavras (abaixo).

## Notas

- **O que foi julgado.** O texto falado de `roteiros/zona-do-canal/roteiro-narrador.md`, sha256 `d98d50f9c55c95fb2e2522baf3b29564beaa8759a701e37357559d20e5193871`. Pelo `gate.mjs`: 28 parágrafos, 154 frases, 2.150 palavras (o teto exato), média de 14, maior frase com 32. O veredito é PASSA, o gancho tem 166 palavras até a assinatura, o "But" vem na palavra 49, não há autoplágio e nenhuma taxa está em alerta.
- **Como foi lido.** Como a voz vai ler: um pedido por parágrafo, eleven_v4 a ~184 palavras/min, stability 0,5. Aspas, itálico e maiúscula não se ouvem, e os números e as datas vão por extenso só na cópia para a voz (`pronuncia.md`, "O que a cópia para a voz vai trocar"). O texto inteiro foi lido de novo, e os 15 trechos que mudaram desde `4c93f1712cf2` foram lidos com o que vem antes e depois deles: L01 a L17 da `lista-r2` e o P01. Os achados são os da primeira passada.
- **O que esta lente não refez.** A média, o teto de frase, a fila de datas que se conta, as palavras vetadas e as taxas são do portão. Fato e estrutura são das outras lentes. Quando uma troca encosta em fato, o achado diz o que a lente de fatos confere.
- **Os 22 alertas do portão, decididos por esta lente.** Nenhum pede troca de locução:
  - `citizens` (12) e `citizenship` (3): todos falam da lei, do tratado ou do relatório ("in the report's words", "the manual says", "under that law", o tratado de 1955). Nenhum põe "citizens" no lugar de "born in the United States", nem diz isso de um grupo de pessoas na voz do narrador. O `citizenship` novo da L09 ("left citizenship to the parents") é a regra da lei de 1937, dita no p4;
  - `white` (2): os dois vêm com o relatório como sujeito ("It lists", "the Zone's report listed");
  - `sovereign` (4): os quatro estão como a bancada final os deixou, três com o tratado como dono e um no p4, logo depois da citação;
  - `segregat` (1): dentro do "he said" do governador.
- **As decisões da Sala, conferidas no texto de hoje.**
  - Balboa: "the town below Balboa Heights, the hillside…" no gancho e "the town at the foot of Balboa Heights…" no p1. Nada de "seat of government".
  - A Zona inteira vai sem número na voz, com os soldados na frase de antes. A frase de 1940 sobre as áreas militares saiu (L17), e "Many of the others inside the line were soldiers." agora puxa direto o censo de 1970 e "the count took in the bases along with the towns". A ponte se mantém.
  - 1964 está na forma da Sala. Não há McCain.
  - O presente é uma linha, com data, dono e nenhum adjetivo: "The Panama Canal Authority, in 2026, gives its address…" (L03).
- **A folha de pronúncia** já está carimbada com `d98d50f9c55c` e cobre todo nome que a voz diz. As três trocas abaixo não põem nome nem sigla na voz. "U.S." rates continua dito duas vezes (agora "on "U.S." rates" no p3), "1979" já está nos anos da cópia, e nenhum parágrafo muda de número.
- **As trocas, provadas em cópia.** As três trocas abaixo foram aplicadas juntas numa cópia fora do canal. No `gate.mjs`, a cópia dá PASSA:
  - 2.149 palavras, 154 frases, média de 14, maior frase com 32;
  - o gancho intacto (166 palavras até a assinatura, "But" na palavra 49);
  - nenhum problema, nenhuma taxa em alerta, os mesmos 22 alertas de palavra e nenhum autoplágio.

  O texto de hoje está no teto de 2.150. O achado 1 tira uma palavra, e os outros dois não mudam a conta. Toda troca que puser palavra precisa de um corte do mesmo tamanho.

## ACHADOS

1. [MÉDIO · frase que o ouvido fecha antes da hora (ofício §3.2, fôlego; §3.4, sigla que pede decisão na cabine) · REDIZER] "The Zone's 1950 report says its employees paid at "U.S." rates had to be assigned family quarters before their families got permission to come at all." → Este trecho entrou pela L14. Depois de "says", o "its employees paid at U.S. rates" se ouve como oração inteira: "os empregados pagavam com tarifas americanas". Só no "had to be assigned" o ouvido descobre que "paid" era particípio, e tem de reler. Na voz pesa mais: o ponto de "U.S." e as aspas antes de "rates" podem baixar a entonação ali (a própria `pronuncia.md` marca esse risco na linha "U.S." rates), e o resto da frase sai como se fosse outra. → CONSERTO: "The Zone's 1950 report says its employees on "U.S." rates had to be assigned family quarters before their families got permission to come at all." (−1 palavra.) "On U.S. rates" diz o mesmo que "paid at U.S. rates" (a folha de pagamento), sem o particípio, e combina com "into "U.S." rates and "local" rates" do p5 e do fecho. A lente de fatos confere se aceita "on" no lugar da forma literal do relatório (`mec-12`, "employees paid at U.S. rates"). → RAIZ: PONTUAL.

2. [LEVE · referência de tempo que o ouvido amarra errado (ofício §3.3) · DATAR] "That day, seventy-five years after the United States took possession of the canal works, Panama took back full jurisdiction over the former Zone." → Este referente o P01 deslocou. Antes, "That day" vinha logo depois de "It took effect on October 1, 1979, …". Agora vem depois de uma frase de 23 palavras no presente do documento ("Its first article "terminates and supersedes" the 1903 treaty, which had granted the band "in perpetuity"…"). O último tempo que o ouvido guardou é 1903, e o mais forte é "in perpetuity". O "seventy-five years after" desfaz a dúvida logo depois, mas a frase que paga o "Until 1979" do título começa com um referente que é preciso caçar. Reordenar não resolve. Com a frase do Art. I depois desta, o "Its" se prenderia a "the former Zone". Com ela antes de "It took effect", o "It" se prenderia ao tratado de 1903. → CONSERTO: "In 1979, seventy-five years after the United States took possession of the canal works, Panama took back full jurisdiction over the former Zone." (0 palavras.) A fila de datas não passa de duas: a frase de antes abre com "Its", e a de antes dela, com "It". Se o orçamento abrir, "On that October 1," (+2) guarda o dia exato. → RAIZ: PONTUAL.

3. [LEVE · fórmula que o ouvido abre como outra construção (ofício §3.3, o que só confunde falado) · REDIZER] "Granting that soon, he added, would wreck the canal and railroad organizations." → Dito, "Granting that…" é a abertura concessiva comum do inglês ("granting that X is true"), e o ouvido espera uma oração depois dela. Vem "soon", vem o inciso "he added", e só no "would wreck" se percebe que "Granting" era o sujeito. A frase está na voz do governador e é a resposta dele a um pedido de 1946, numa fala atribuída que precisa sair limpa. → CONSERTO: "Granting it soon, he added, would wreck the canal and railroad organizations." (0 palavras; "it" é "the complete abolition of any segregation", a frase de antes.) → RAIZ: PONTUAL.

## Abaixo da linha

Não são achados e não seguram nada. Ficam com o dono:

- "By then everyone was paid in dollars, …" (p2): o ouvido acabou de ouvir "during construction", e o "then" certo é o de 1940, o do relatório. O mais-que-perfeito ("had been paid") ancora 1940, e por isso fica. "By 1940," puxaria três frases seguidas abertas com data (as duas primeiras do parágrafo seguinte), e a forma sem data custa umas três palavras que o teto não tem.
- "a condition the 1937 law dropped, back to 1904." (p4, L05): dito sem a vírgula, "dropped back" pode soar como o verbo frasal "ficar para trás". Na amostra, conferir se a voz faz a pausa. Se não fizer: "removed, back to 1904" (0 palavras).
- "which had granted the band "in perpetuity" to build, run and protect the canal" (p7, P01): no p1, o mesmo verbo vinha com o recebedor na frente ("granted the United States … a band"). Aqui, "the band" está no lugar do recebedor. O ouvido já sabe o que é a faixa e não se perde. Pôr "the United States" custa duas palavras.
- "From now on, that is the line." e a fila "church, charity, school and science workers": como a bancada final deixou.

## O QUE ESTÁ FORTE

- **As trocas da lista-r2 se ouvem.**
  - "Until 1937" prende o tempo à lei.
  - "They wrote in the Panama Canal Review…:" põe sujeito e verbo na frente, e os dois-pontos dão a pausa que as aspas não dão.
  - "had been paid in gold" devolve a espinha à frase das duas folhas.
  - "A 1958 law set it." deixa cada verbo com o seu objeto.
  - "A State Department memo says Panama had insisted on that, calling…" põe a acusação no Panamá.
  - O 26º parágrafo agora vai do fim para o que continuou, e o "until the end of 1999" fecha o parágrafo sem parecer a data do fim da Zona.
  - "Being born there, by itself, was never enough." ecoa o gancho e o p4 e não contradiz o que veio antes.
- **A cadeia de referentes do P01 se segura**, fora o "That day" do achado 2: "two treaties" → "the canal treaty" → "It" → "Its first article" → "the 1903 treaty" → "the band". O "in perpetuity" volta com a mesma finalidade do p1 ("to build, run and protect"), e o ouvido reconhece a volta.
- **As pontes novas**: "The store sorted its customers, too." pega o fio da folha de pagamento sem "line". "The payroll had lost its old names. The division was still there. And the next fight was about a flag." mantém a frase curta só na virada, sem rajada.
- **A citação sempre com dono na voz**: "in the report's words", "as a State Department bulletin put it", "he said", "he added", "the manual adds", "it says". Por isso as aspas que a voz não marca não viram fala do narrador.
- **A glosa colada ao termo**: "the commissary, the Zone's own store"; "the "commy," the commissary"; "an American agency, the Panama Canal Commission"; "a plaza of Zone ground in Panama City".
- **A resposta em cadência** ("A treaty, which… A law, which… A second treaty, which… And a payroll, which…") responde à pergunta do gancho dita de novo, cada elo com o documento na frente. **O fecho** ("The town stayed where it was, below the hillside. The Zone that made it American did not.") põe o "did not" no tempo forte.

## NÃO TOCAR

- O primeiro parágrafo do gancho, palavra por palavra, com as vírgulas da L12: "and, under a 1903 treaty, its police, courts and schools answered to Washington." "Until October 1, 1979." "But being born in Balboa didn't, by itself, make you an American."
- "So what made Balboa American, if being born there didn't? You're at Alpha Point, and this is where the story of who was American in the Canal Zone begins." É a forma que o portão confere, e a pergunta volta no p7 de propósito.
- "Four U.S. soldiers and 24 Panamanians were killed, according to the U.S. National Archives. Other counts differ." (a forma da Sala).
- "It took effect on October 1, 1979." (frase própria, literal) e "Being born there, by itself, was never enough."

## Comparação com o laudo `locucao-r2-antigo` (`4c93f1712cf2`), feita depois de gravar os achados acima

Os dez achados da bancada final estão resolvidos no texto de hoje:

1. "Until then" → "Until 1937" (L04): resolvido.
2. A ordem do 26º parágrafo (L06): resolvido. A Zona acaba antes; os 30 meses e 1999 vêm por último.
3. "The rule about being born there never changed." → "Being born there, by itself, was never enough." (L01): resolvido, numa forma diferente da proposta. Ela ecoa o gancho e não contradiz o p4.
4. O "calling" do memorando (L07): resolvido, na forma proposta.
5. "…in gold." → "…had been paid in gold." (L08): resolvido.
6. "left the child to the parents' papers" → "left citizenship to the parents" (L09): resolvido, numa forma diferente da proposta. As duas metáforas em fila e o "papers" saíram. "The law that ran the ground" ficou, e agora se ouve, porque a segunda metade diz o que quer.
7. Os Knapp com sujeito e verbo na frente (L10): resolvido.
8. "promised, and a 1958 law set," partido em duas frases (L11): resolvido.
9. As vírgulas do gancho (L12): resolvido.
10. A frase de 1912 e 1915 partida (L13): resolvido.

O que a rodada 2 trouxe de novo para esta lente: o achado 1 (da L14) e o achado 2 (do P01). O achado 3 já estava no texto da bancada final e não foi visto então.

Os 2 padrões mais vistos: (1) a sintaxe que só se resolve no fim e que o ouvido fecha antes (o particípio de L14, o "Granting that"); (2) o "that day"/"then" que se prende ao último tempo dito, quando uma frase de documento entra entre a data e o referente.
