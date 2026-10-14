# Laudo · crítico de locução (adaptado para en-US e TTS) · rodada 1

Revisão julgada: `6917e62a2155` · data-base 2026-10-14

NOTA: 7/10. Na maior parte, o roteiro se fala de primeira: as frases são curtas, a frase curta fica guardada para as viradas, as citações vêm com o dono dito na voz e as guardas de número já estão no texto. Mas a primeira frase do vídeo, dita, pode prender o "where" à cidade, que é justamente o que a Sala proibiu (T06). Em mais nove lugares, o ouvido monta uma coisa diferente da que a página mostra.

VEREDITO: FAIL. O achado GRAVE segura o texto (ofício §6). As trocas são pontuais e cabem numa rodada. Aplicadas juntas numa cópia, o `gate.mjs` dá PASSA (detalhes abaixo).

## Notas

- **O que foi julgado.** O texto falado de `roteiros/zona-do-canal/roteiro-narrador.md`: sha256 `6917e62a2155b91ef7b654397975b18fb78d86419d441948ccd0187ec6a58635`, 29 parágrafos, 145 frases, 2.097 palavras, PASSA no `gate.mjs`, sem autoplágio e sem nenhuma taxa no teto. A origem de cada frase foi lida em `roteiro-editor.md`, e a pronúncia na folha `pronuncia.md` (que já cita este sha).
- **Como foi lido.** Do jeito que a voz vai ler: um pedido por parágrafo, eleven_v4 a ~184 palavras/min, stability 0,5. Aspas, itálico, hífen e maiúscula não se ouvem, e os números só vão por extenso na cópia para a voz. Os achados são da primeira passada.
- **O que esta lente não refez.** A média, o teto de frase, a fila de datas, as palavras vetadas e as taxas são do portão, e não foram recontadas aqui. Fato e estrutura ficam com as outras lentes. Quando uma troca encosta em fato, o achado diz o que a lente de fatos tem de conferir.
- **Os 22 alertas de palavra do portão** (`citizens`, `citizenship`, `white`, `sovereign`, `segregat`), julgados pelo ouvido. Na voz as aspas somem, então só vale a atribuição dita.
  - Os 4 "sovereign" estão presos a "Its third article gave…", "The same country held… every power it would have", "In 1903, those were the powers…" e "the new treaty called Panama". Na voz, nenhum soa como juízo do narrador.
  - Os 2 "white"/"colored" vêm depois de "It lists" e de "the Zone's report listed": atribuídos. O "segregation" está dentro da fala atribuída ao governador.
  - Os "citizens" são a palavra da lei ou do censo.
  - Pelo ouvido, todos ficam. A troca A6 mantém a atribuição do "segregation" ("he said").
- **As trocas, provadas numa cópia.** As 14 trocas dos 10 achados abaixo, aplicadas juntas numa cópia fora do canal, dão no `gate.mjs`:
  - PASSA, com 2.096 palavras, 150 frases, média 14,0 e maior frase de 32 palavras;
  - o gancho com 168 palavras até a assinatura (o teto é 170, então sobram 2) e o "But" na palavra 49;
  - nenhum autoplágio e nenhuma taxa no teto;
  - os mesmos 22 alertas de palavra;
  - todo parágrafo entre 43 e 107 palavras.
  - Na troca A7, "who had been born" virou "born": sem isso, a frase ia a 35 palavras e reprovava.
- **Para a folha de pronúncia e a amostra** (não são achados):
  - se A4 entrar, Ancón, Pedro Miguel e Red Tank saem da voz e vão para o mapa. Ancón era um dos riscos "Alto" da folha. O item 2 da amostra passa a ser só "Gatún and Cristóbal had both." mais o "La Boca", e a folha se refaz com o sha novo;
  - se A8 entrar, "the cities of Panama" sai da voz. "Panama City" já está na folha;
  - "commy" fica: o "the commissary" que vem logo depois resolve o "commie" que o ouvido americano escuta. A folha já manda nunca grafar "commie".
- **Abaixo da linha.** Não são achados nem seguram nada. Ficam a critério de quem escreve:
  - p1, "From now on, that is the line." Dito, o "now" é o do narrador, e o ouvido pode tomá-lo pelo de 1914 ("a partir dali"). Na mesma frase anterior, "a boundary convention" soa como uma reunião (convention), e "monument by monument" como estátuas. Proposta: "In September 1914, a boundary treaty fixed "…," marker by marker. That is the line the rest of this story keeps coming back to." A lente de fatos confere se a convenção de 1914 se pode dizer "treaty";
  - p3, "In 1979 they wrote, in the Panama Canal Review, the Zone's own magazine, that everyone…": dois apostos entre o verbo e o "that". Proposta: "In 1979 they wrote in the Zone's own magazine, the Panama Canal Review. Everyone, they said, "lived in rented quarters" and shopped at the "commy," the commissary.";
  - p3, "The census recorded only where they were born, not whether they were citizens." Uns 15 s antes, "counted birthplaces, not citizens" disse o mesmo, e o gancho e p4 ("The census never asked.") repetem a ideia. Três vezes em p3 e p4 soa como a voz se repetindo. Proposta: CORTAR esta, porque "So what was a child born in Balboa…?" segue sem ela;
  - p2, "and skilled craftsmen, recruited largely from the United States, in gold.": o verbo fica subentendido, e o aposto no meio o faz o ouvido perdê-lo antes do "in gold". Proposta: "…common laborers had been paid in silver coin, and skilled craftsmen in gold. The craftsmen were recruited largely from the United States.";
  - p7, "The Canal Zone and its government ceased to exist." vem depois dos 30 meses e de 1999, e o ouvido data o fim por eles. REORDENAR: pôr a frase logo depois de "Panama took back full jurisdiction over the former Zone.";
  - p5, "Panama had insisted on that, a State Department memo says, calling the old access unfair competition with its economy.": o "calling" fica preso ao "memo". Proposta: "A State Department memo says Panama had insisted on that, calling the old access unfair competition with its economy.";
  - gancho, "And from 1920 to 1970, no census of the Zone published how many of its residents were citizens. It counted where they were born.": o "It" não tem a quem voltar ("no census"). Proposta: "Each one counted where they were born.";
  - "The Zone's <ano> report <verbo>" e "its own" voltam umas 10 e 9 vezes. Dito, o molde da fonte começa a soar como formulário (ofício §3.6). Nenhuma ocorrência sozinha é defeito: a atribuição na voz é regra da marca. Vale variar duas ou três (por exemplo, "That year's report…", "The same report…");
  - p7, "and an American agency, the Panama Canal Commission, ran the canal": "ran" duas vezes na mesma frase ("The transition ran thirty months");
  - fora desta lente, mas ouvido aqui:
    - o "Today" da coda não traz data absoluta (voz §2; a Sala pediu "data e fonte" na linha do presente);
    - "the Administration Building, in Balboa", dito depois de p1 ("up on Balboa Heights"), soa como contradição. O "gives its address as" segura a atribuição, e a lente de fatos confere;
    - "hill" (a forma da Sala) e "hillside" convivem, e a lente de fatos escolhe uma.

## ACHADOS

1. [GRAVE · REDIZER · referente que o ouvido prende ao nome errado (ofício §3.3)] "This is Balboa, the town below Balboa Heights, where the Panama Canal Zone was run from." → Dito, o "where" pode voltar à cabeça do aposto, "the town", e não a "Balboa Heights". O ouvinte então entende que Balboa, a cidade, era de onde se governava a Zona, que é a forma que a Sala vetou (T06: nunca "the seat of government"), e isso na primeira frase do vídeo. O "where … from" ainda dobra a preposição. Em p1, o mesmo nó volta: "That is the town you saw first" vem logo depois de "a new building up on Balboa Heights", e o "That" se prende ao morro antes de a frase corrigir. Balboa é dito três vezes, e Heights duas, em duas frases. → CONSERTO, duas trocas:
   - (a) gancho: "This is Balboa, the town below Balboa Heights, the hill the Panama Canal Zone was run from." (uma palavra a mais no gancho; "Panama" continua na 1ª frase);
   - (b) p1, as duas frases "In 1914 the administration moved into a new building up on Balboa Heights. That is the town you saw first: Balboa, the town at the foot of Balboa Heights, the hillside the Canal Zone was run from." → "In 1914 the administration moved into a new building up on Balboa Heights, the hill the Canal Zone was run from. Balboa, the town you saw first, sits at its foot."

   A lente de fatos confere o presente ("sits"), que a coda já sustenta ("The town stayed where it was"). → RAIZ: INSTRUÇÃO. A forma de T06 que a Sala mandou dizer é segura ("Balboa, the town at the foot of Balboa Heights, the hill…"). O que falta na regra é "o 'where' e o 'that' nunca seguem o par Balboa / Balboa Heights; o morro se nomeia por aposto".

2. [MÉDIO · REORDENAR · aposto que soa como outro lugar, e números colados (ofício §3.2 e §3.4)] "Rainbow City, on the Atlantic side, Silver City until the early 1950s: 3 of 3,688." → Dito, "Rainbow City, on the Atlantic side, Silver City" soa como uma lista de duas cidades. Na cópia para a voz, o fim vira "the early nineteen fifties: three of three thousand six hundred eighty-eight", com o ano e a contagem grudados. Quem grava tem de decidir onde pausar (ofício §6). E o nome antigo merece uma frase só dele: é a ponte para "The payroll had lost its names." → CONSERTO: "Rainbow City, on the Atlantic side: 3 of 3,688. Until the early 1950s, it was called Silver City." → RAIZ: PONTUAL.

3. [MÉDIO · REDIZER · fragmento sem espinha, com dupla negação (ofício §3.1)] "From the end of 1956, not even to employees who were not citizens of the United States and lived in Panama." → São 20 palavras sem verbo, que pegam emprestado o "sold" da frase anterior. Elas carregam duas negações ("not even to … who were not") e uma condição dupla no fim. O ouvido perde o verbo antes de chegar a quem ficou de fora, e a regra se inverte fácil ("só para os que não eram cidadãos"?). → CONSERTO: "From the end of 1956, they stopped selling even to employees who lived in Panama and were not citizens of the United States." → RAIZ: PONTUAL.

4. [MÉDIO · REDIZER · nomes em fila, a frase que só funciona lida (ofício §3.3)] "The Zone's 1920 report lists "gold" clubhouses at Balboa, Ancón, Pedro Miguel, Gatún and Cristóbal, and "silver" clubhouses at La Boca, Red Tank, Paraíso, Gatún and Cristóbal." → São dez topônimos em ~10 s, sete deles em espanhol, e três com risco "Alto" ou "Médio" na folha (Ancón, Pedro Miguel, Gatún/Cristóbal). O que o ouvido precisa guardar se perde na fila: que Gatún e Cristóbal aparecem nas duas listas. Na página, o leitor vê a repetição; dito, ela soa como engano da voz. Os nomes vão bem no mapa. → CONSERTO: "The Zone's 1920 report lists "gold" clubhouses at Balboa and four other towns, and "silver" clubhouses at La Boca and four others. Gatún and Cristóbal had both." A lente de fatos confere: cinco de cada lado, e Gatún e Cristóbal nas duas listas. → RAIZ: PONTUAL.

5. [MÉDIO · REORDENAR · número com expressão de dois sentidos (ofício §3.4)] "and prints what it paid their teachers: $158.46 a month, on average, in the first, and $76.00 in the second." → Dito, "a month, on average, in the first" se ouve como "no primeiro mês". "The first" e "the second" só voltam às escolas para quem guardou a ordem de "white" e "colored", dita sem aspas audíveis. Os dólares ainda chegam antes de se saber de que escola são. → CONSERTO: "and prints what it paid their teachers on average: in the first, $158.46 a month; in the second, $76.00." → RAIZ: PONTUAL.

6. [MÉDIO · REDIZER · fôlego, a maior frase do texto (ofício §3.2)] "The Zone's governor answered the ambassador that its "silver" workers wanted "the complete abolition of any segregation in the Canal Zone," and that granting it soon would wreck the canal and the railroad." → São 33 palavras (uns 11 s), com dois "that" encadeados, uma citação longa no meio e um "it" que tem de voltar à "abolition" por cima da citação. É a frase mais longa do roteiro, e cai sobre o tema mais carregado. Partida, a atribuição fica dita duas vezes ("he said", "he added"), o que protege as duas metades. → CONSERTO: "The Zone's governor answered the ambassador. Its "silver" workers, he said, wanted "the complete abolition of any segregation in the Canal Zone." Granting that soon, he added, would wreck the canal and the railroad." A lente de fatos confere o "he" (o governador de 1946). → RAIZ: PONTUAL.

7. [MÉDIO · REDIZER · palavra que dita muda de sentido, e fragmento (ofício §3.1 e §3.3)] "For the thousand-odd residents of Balboa who had been born in the Zone, the rule was the same: citizens if a parent had been one at the time of the birth." → O hífen não se ouve, e "the thousand odd residents" soa como "os mil moradores esquisitos". É um deboche involuntário, justo sobre as crianças da pergunta do vídeo. "Thousand-odd" ainda é mais britânico que americano. Depois dos dois-pontos, "citizens if…" fica sem verbo. → CONSERTO: "For the thousand or so residents of Balboa born in the Zone, the rule was the same: they were citizens if a parent had been one at the time of the birth." (32 palavras; com "who had been born", seriam 35, e o portão reprova). → RAIZ: PONTUAL.

8. [MÉDIO · REDIZER · a cidade e o país, a cidade e a Zona (ofício §3.3)] Duas frases em que o ouvido monta o lugar errado num vídeo cujo assunto é justamente onde a linha passava:
   - (a) "The cities of Panama and Colón sat inside those limits, and the same article left them out." → Dito, "the cities of Panama" é "as cidades do Panamá", o país, e "and Colón" parece um acréscimo. O resto do roteiro diz "Panama City". → CONSERTO: "Panama City and Colón sat inside those limits, and the same article left them out.";
   - (b) "First at Shaler Triangle, a square in Panama City that was Zone ground, then on the bridge over the canal and on the Administration Buildings." → O "that was Zone ground" se prende a "Panama City", e o ouvinte entende que a Cidade do Panamá era território da Zona, o contrário de p1. "Triangle, a square" soa como contradição de forma. E são 25 palavras sem verbo. → CONSERTO: "It flew first at Shaler Triangle, a plaza of Zone ground in Panama City, then on the bridge over the canal and on the Administration Buildings."

   A lente de fatos confere a forma do dossiê (`exp.dat-05`: "praça da Cidade do Panamá que era território da Zona"). → RAIZ: PONTUAL.

9. [MÉDIO · DATAR (a) e REDIZER (b, c) · referentes que o ouvido prende ao último nome dito (ofício §3.3)]
   - (a) "and made it reach back to February 26, 1904, the day the treaty took effect." → O último tratado que o ouvinte ouviu foi o de 1936, "in force from 1939" (p3). "The treaty" volta a ele, e a data de 1904 parece errada. → CONSERTO: "and made it reach back to February 26, 1904, the day the 1903 treaty took effect.";
   - (b) "By seven that evening the students had left the Zone along Fourth of July Avenue, the street beside the line in front of their school, and four days of fighting had begun." → A última escola dita foi a Balboa High School ("walked to the school"), e "their school" se prende a ela. A frase tem 32 palavras, com o aposto entalado antes do fecho. → CONSERTO: "By seven that evening the students had left the Zone along Fourth of July Avenue, the street beside the line in front of the National Institute. Four days of fighting had begun." A lente de fatos confere: `mec.afi-06` põe a avenida diante do National Institute;
   - (c) "the one that restored relations after those four days." → O "the one" pode voltar a "the 1977 treaty", o sujeito da frase. → CONSERTO: "the declaration that restored relations after those four days."

   → RAIZ: PONTUAL.

10. [LEVE · QUALIFICAR · números que soam iguais, no gancho (ofício §3.3 e §3.4)] "Paraíso had seven residents born in the United States, out of 3,113. On the Atlantic side, Rainbow City had three, out of 3,688." → Em uns 20 s, o gancho diz "three thousand one hundred thirty-nine", "three thousand one hundred thirteen" e "three thousand six hundred eighty-eight". As duas primeiras são quase homófonas, e o ouvinte se pergunta se a voz repetiu o número. O que o gancho precisa que fique é "metade, sete, três", em cidades do mesmo tamanho. O número exato volta em p5 e fica na tela. O arredondamento com o hedge é a forma da voz (§1, "O número falado arredondado"). → CONSERTO: "Paraíso had seven residents born in the United States, out of about 3,100. On the Atlantic side, Rainbow City had three, out of about 3,700." O 3,139 de Balboa fica exato, porque é a âncora do título e de p3. → RAIZ: INSTRUÇÃO. Falta à voz §1 a regra "no gancho, nunca dois números de quatro algarismos com o mesmo começo falado; o segundo vai arredondado".

## O QUE ESTÁ FORTE

- **O gancho se fala de primeira, no essencial.** "Until October 1, 1979." fecha o primeiro tempo com uma elipse curtíssima, como o ofício pede (§3.1). O "But" é limpo e curto ("But being born in Balboa didn't, by itself, make you an American."). A pergunta volta às palavras do "But" ("if being born there didn't?") logo antes da assinatura.
- **O termo definido na oração em que entra, dito como fala:**
  - "Those two words were payrolls.";
  - "the commissary, the Zone's own store";
  - "shopped at the "commy," the commissary";
  - "a band ten miles wide, five on each side of the canal".
- **As viradas em frase curta, e não em rajada:**
  - "So the Zone sorted its people by payroll, not by passport.";
  - "The test was service, not citizenship. Nobody lived in the Zone just because they wanted to.";
  - "The job came first. Then the house. Then the family.";
  - "The payroll had lost its names. The line had not.";
  - "The census never asked.".
- **A fonte dita na voz, sempre colada à frase que ela sustenta:** "as a State Department bulletin put it", "in the report's words", "the State Department's manual says", "according to the U.S. National Archives". Nenhuma citação longa fica sem dono no ouvido.
- **O par da virada, dito lado a lado e sem juiz:** "For citizenship law, it says, the Zone "was never considered part of the United States." The same country held, inside that Zone, every power it would have "if it were the sovereign."".
- **A resposta de p7 em série, com espinha:** "A treaty, which… A law, which… A second treaty, which… And a payroll, which…". Cada membro tem verbo, e a anáfora é o desenho da resposta, não um formulário.
- **As guardas de número já no texto:** "ten miles", "fifteen days", "seventy-five years", "thirty months" e "four thousand" vão por extenso; e "more than a thousand" no lugar do 1.041.
- **A coda** fecha o arco no ouvido, sem número nem nome difícil: "The town stayed where it was, below the hillside. The Zone that made it American did not.".

## NÃO TOCAR

- "But being born in Balboa didn't, by itself, make you an American.": o "But" do gancho, na palavra 48.
- "Until October 1, 1979.": a 3ª frase, que leva o "1979" do título.
- "So what made Balboa American, if being born there didn't? You're at Alpha Point, and this is where the story of who was American in the Canal Zone begins.": a forma que o portão confere. O arco do "begins" se confere na amostra, não no texto.
- "Its third article gave the United States, inside that band, "all the rights, power and authority" it "would possess and exercise if it were the sovereign of the territory."": são 30 palavras, mas é uma ideia só, com o dono dito antes. É a citação que p4 e p7 devolvem.
- "Those two words were payrolls."
- "The test was service, not citizenship. Nobody lived in the Zone just because they wanted to."
- "The job came first. Then the house. Then the family.": a âncora da chamada de inscrição (fala curta, `marca/cta.md` §5.3).
- "shopped at the "commy," the commissary": a glosa colada é a guarda contra o "commie".
- "Four U.S. soldiers and 24 Panamanians were killed, according to the U.S. National Archives. Other counts differ.": a forma literal da Sala (T03).
- "The question of who belonged had moved from the payroll to the flagpole."
- "The payroll had lost its names. The line had not.": com A2 aplicada, o "Silver City" logo antes vira a prova do nome perdido.
- "For citizenship law, it says, the Zone "was never considered part of the United States." The same country held, inside that Zone, every power it would have "if it were the sovereign."".
- A série de p7, "A treaty, which… And a payroll, which…".
- "The town stayed where it was, below the hillside. The Zone that made it American did not.": a coda, sob a chamada de comentário.

PADRÕES:
- **O referente que o ouvido prende ao último nome dito.** "Where" e "that" depois do par Balboa / Balboa Heights, "the treaty" depois do de 1936, "their school" depois da Balboa High School, "that was Zone ground" depois de "Panama City", "the one" depois do tratado de 1977. Na página, a sintaxe resolve; dita, a voz não marca a quem a oração volta (A1, A8, A9).
- **A frase que só funciona lida.** A fila de dez topônimos, "in the first / in the second" depois de "a month", o hífen de "thousand-odd", o aposto "Silver City" no meio da lista e os números de quatro algarismos com o mesmo começo (A2, A4, A5, A7, A10).
