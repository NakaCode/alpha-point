# O juiz dos três planos · Zona do Canal (vídeo 3)

Lido em 14/10/2026: `plano-cidade.json`, `plano-linha.json` e `plano-quem.json` inteiros, contra `pautas/zona-do-canal/fundamento.md` (inteiro, inclusive "O que não se diz", os riscos, "O que ficou aberto" e a seção "Nomes e regras de pauta", que vence o texto acima dela) e `fundamento.json` (por id, com Python), a pauta `pautas/2026-10-09-video-3-americanos.md`, `marca/voz.md`, `marca/embalagem.md` §1–§2, `marca/cta.md` §1–§3 (e §5–§7), `marca/identidade.md` §5 ("Mais mapa, quando a fala pede"), o ofício do roteirista da pré-v1 (OFICIO, CONTRATO, SPEC), o roteiro de Los Angeles (narrador e editor), o `plano-final.json` e o `juiz.md` de Los Angeles (o formato), o item 2 do cético do estudo (os quatro campos novos e a nota da dobradiça) e o `gate.mjs` inteiro. O plano final está em `plano-final.json`.

**O artefato vence o relato.** Os três ganchos foram rodados no `gate.mjs` em cópia (scratchpad, 14/10/2026), e os números abaixo são os do portão, não os dos relatos. Os três batem com o que cada planejador disse:

| | A cidade | A linha | Quem era americano |
|---|---|---|---|
| palavras até a assinatura | 164 | 166 | 157 |
| "But" na palavra | 46 | 48 | 38 |
| frases / média / maior | 10 / 16,4 / 29 | 11 / 15,1 / 21 | 11 / 14,3 / 27 |
| alertas (fora as taxas) | nenhum | `sovereign` (a citação) | `citizens` (a categoria do Census) |
| autoplágio | vazio | vazio | vazio |

Os ids de evidência: os 343 da linha e os 310 do quem existem todos no `fundamento.json`. Dos 218 da cidade, 183 existem como `id`; os outros 35 são os códigos das regras de pauta (R01–R15, I01–I18, N01–N19), que no JSON ficam em `regras_de_pauta[].item` com o rótulo inteiro ("I03 · 'Balboa, ao pé de Balboa Heights'…"): existem, só não são `id`. Nenhum plano cita evidência inexistente.

As decisões da Sala (14/10/2026) estão aplicadas nos três: T06 na forma da Sala com o ajuste I03 ("hillside"; o quem a põe em p1 e abre o gancho com "a town inside Panama"); T10 (a cidade e a linha contam só por Balboa; o quem põe o número de 1970 só na tela, com os 8.569); T03 na forma literal; McCain fora; o presente, nada (os três deixam a linha de R05 pronta e não incluída).

## As notas (1 a 10)

| Critério | A cidade | A linha | Quem era americano |
|---|---|---|---|
| O gancho (os cinco tempos, o título nas 3 primeiras frases, a pergunta que prende) | 7,5 | 7,0 | 8,5 |
| A espinha (cada parte paga uma promessa e empurra para a próxima) | 8,0 | 7,5 | 8,5 |
| A fidelidade ao dossiê (nada além do que ele sustenta; as atribuições; as decisões da Sala) | 8,5 | 8,0 | 8,0 |
| O espaço (fala espacial vai a mapa, sem forçar) | 8,0 | 8,5 | 8,0 |
| O ritmo para ~11 minutos de voz | 7,5 | 7,5 | 8,0 |
| A presença (documento, citação ou morador de época, numa hora e num lugar) | 8,0 | 8,0 | 8,5 |
| O fecho (paga o gancho) | 8,0 | 8,0 | 9,0 |
| **Soma** | **55,5** | **54,5** | **58,5** |

**Vencedor: quem era americano.** Com três enxertos da cidade (a forma da Sala na 1ª frase do gancho, a volta à cidade abaixo da encosta no fecho, o que o morador via como face concreta da lei) e três da linha (os tratados falando com as próprias palavras no fecho, a loja que fechou a quem morava fora, as setas nas duas direções no mapa de 1930), mais a frase da inscrição de reserva da cidade e a pergunta de comentário da cidade como alternativa.

## O porquê, critério a critério

### O gancho

- **Quem (8,5).** O único que paga as três coisas do título em 38 palavras (a cidade dentro do Panamá com o número; o tratado e polícia, tribunal e escola nas mãos dos EUA; "Until October 1, 1979."), e o "But" mais cedo dos três (palavra 38, ≈12 s): a virada do título nº 2 da pauta ("being born in Balboa didn't, by itself, make you an American"), que os três leitores a frio clicariam e o vidIQ pôs em 97. É também o único gancho que mostra **as outras cidades da Zona no mapa** (Paraíso 7 de 3.113, Rainbow City 3 de 3.688, cada uma no lugar dela), que é o que o Lucas pediu para "a Town" ("a Zona tinha várias cidades; o vídeo abre por uma e mostra as outras no mapa"); a cidade e a linha mostram a capital do outro lado, não as outras cidades. A pergunta ("So what made Balboa American, if being born there didn't?") é a melhor das três: o fato que o espectador não esperava vira a pergunta, como no molde do Geoff. Frases curtas (média 14,3). O que desconta: (a) "Under a 1903 treaty, the United States ran its police, its court and its schools" encosta no I05 (o tratado deu os poderes; a lei de 1912 e a ordem de 1914 montaram as instituições): defensável ("under" não é "because"), mas é a classe de coisa que o cético pega, e o plano final a reescreve ("answered to Washington") e deixa a troca pronta; (b) a forma da Sala para Balboa (a encosta de onde a Zona era governada) fica para p1, e o gancho perde a imagem mais forte do "a Town"; (c) "no census of the Zone published how many of its residents were citizens" é um 4º tempo um pouco burocrático, embora seja o fato que faz a pergunta.
- **Cidade (7,5).** Paga o título nas 3 frases com a forma da Sala na 1ª ("the town below Balboa Heights, the hillside the Panama Canal Zone was run from") e sem tocar na soberania; o "But" (a cidade fica dentro do Panamá, e a Zona acabou em 01/10/1979) cai na palavra 46, dentro do portão mas a 4 do teto; a 2ª frase faz dois trabalhos (o número e as instituições) em 29 palavras. O 3º tempo é a capital de 260 mil do outro lado da linha (escala e mapa), não as outras cidades da Zona. A pergunta é o título em forma de pergunta ("what made a town inside Panama American, and why did it stop in 1979?"): honesta, com as duas metades, mas chata; não tem o fato inesperado do quem (a virada da cidadania vem no 4º tempo, não é o "But"). A assinatura ("the town the canal built") é a mais concreta das três.
- **Linha (7,0).** O melhor ritmo de frase (maior 21) e a leitura mais cuidadosa do I05 (o tratado na 5ª frase, separado do censo e da polícia). Mas "it was the Zone's town" na 3ª frase é ambíguo: a Zona tinha várias cidades, e "the Zone's town" lê como "a cidade da Zona" (o risco T06, "the seat", pela porta dos fundos). O "But" (do outro lado da linha, a capital) é uma justaposição geográfica, não a contradição dos 15 s; cai na palavra 48, a 2 do teto, sem folga. "Look at the map." é imperativo de mapa e frase curta no gancho, e ecoa o molde de LA ("Now look at the city's outline", "So look at the map again"). A pergunta ("what did that line change") é a pergunta do ângulo, não a do título: quem clicou em "AMERICAN" pergunta o que a fazia americana. A assinatura tem nove palavras de tema ("the line between the Canal Zone and Panama City") e é abstrata. 166 palavras, a 4 do teto.

### A espinha

- **Quem (8,5).** A espinha é a própria pergunta: quatro réguas escritas, na ordem (a lei, p1; a folha, p2; a residência, p3; o nascimento, p4), a régua que troca de nome sem trocar de lugar (p5), a mesma pergunta no mastro (p6) e o fim (p7). Cada parte entrega uma resposta parcial, nomeada no "o_que_o_espectador_entende", e o fecho responde literalmente. As pontes são as melhores dos três planos ("So before anyone was born in Balboa, the plan for it already had two words in it: 'gold' and 'silver'." → "Those two words were payrolls."; "So what was a child born in Balboa, in the eyes of U.S. law?" → "The answer is one sentence of law, and it was written in 1937."). Desconta: p1 é densa (280 palavras, 6 beats: tratado, Art. III, lei de 1912, ordem de 1914, a terra, Balboa planejada); o censo de 1912 por cidadania (p2, beat 3) é carga de tela sem função na espinha; o desvio das bases em p3 é justificado por T10 mas acrescenta um cartão.
- **Cidade (8,0).** A volta mais completa: a cidade vista (p1), o papel que a fez (p2), o governo (p3), quem podia morar (p4), as duas folhas (p5), a bandeira (p6), o fim (p7) e de volta à cidade (p8), em anel. A resposta em "três coisas de papel" é limpa. Desconta: p1 ("o que o morador via", item por item: polícia, tribunal, escola, correio, armazém, casa) arrisca virar inventário sem dúvida que o puxe (o ofício: "evidência entra no ponto em que resolve uma dúvida"); p5 (320 palavras, 8 beats, 8 datas) é a parte mais pesada dos três planos e o próprio planejador a marca; a cronologia dá uma volta (p4 termina em 1939; p5 recomeça em 1914).
- **Linha (7,5).** A espinha é um objeto que os primários nomeiam, e p4 ("crossing the line on an ordinary day") é a ideia mais interativa dos três planos: o espectador atravessa a linha com a voz e conta o que muda. Mas o "dia comum" junta regras de 1904, 1939, 1955, 1956, 1962 e 1965 sem um ano (o planejador o admite), e traz curiosidades (os selos a 40 %, o aluguel em balboas) que não pagam a pergunta do título; p6 (300 palavras) inclui as conclusões da comissão de juristas sobre a força ("seems to have been justified", "somewhat in excess"), que os outros dois planos deixam fora com razão (num vídeo de 11 minutos, abrem o julgamento de 1964 sem espaço para as duas versões); p7 fica com 175 palavras; e "the line" em quase toda frase vira cacoete (o plano se defende variando o sujeito).

### A fidelidade ao dossiê

- **Cidade (8,5).** As atribuições mais rigorosas: cada palavra de soberania com dono e ano, a leitura racial com o Departamento de Estado (1946), o governador só na forma de R04, a NARA só na contagem, a CIJ só no "not proved". Os 232 ids resolvem. Desconta: a figura do fecho ("never the ground. It was…") pode ser lida como veredito de soberania (o plano oferece a troca); a ponte p1→p2 ("All of that rested on one piece of paper") é a que mais encosta no I05; a capital com 260.465 é T2 (atribuída, "Panama's 1960 census"); e "strip" como palavra da faixa é a palavra de LA (não forma sequência de 6, mas é o eco).
- **Linha (8,0).** A mais forte no vocabulário de soberania (os tratados falam, 1903 e 1977, e o narrador não arbitra). Desconta: "the Zone's town" (ambíguo, T06); "The line had held." (ponte p6→p7) é veredito do narrador: o documento sustenta que o Exército ficou dentro dos limites, não que "a linha segurou"; "the line went with it" e "gone from the map" em 01/10/1979 passam por cima dos 30 meses (R08, T24), embora a voz os diga na mesma fala; o "dia comum" de p4 é anacronismo em potencial; e as conclusões da CIJ sobre a força entram.
- **Quem (8,0).** "Under a 1903 treaty, the United States ran its police…" (I05, acima); "So the ground could be run as American" (ponte p4→p5) encosta no I01; a 1ª menção de Balboa sem a forma da Sala. O resto é cuidadoso: T10 na forma exata de I12 (os três números no mesmo cartão), "payroll" antes de "gold roll", o 'silver roll' sempre com o ano, as palavras de época fora até de citação onde dá ("natives of the Tropics" não entra), e o 8 U.S.C. § 1403 lido com "at the time of the birth". Os 310 ids resolvem.

### O espaço

- **Linha (8,5).** A linha é espacial por natureza, e o plano faz o mapa como mecanismo (as setas nas duas direções: gente para dentro de dia, o tratado e a loja para fora com os anos). p7 não tem mapa, e o plano o diz. Desconta meio ponto porque é o plano que mais depende da geometria que o canal não tem (a linha de 1914 marco a marco; a avenida só no trecho do Instituto em 1964).
- **Cidade (8,0).** Mapa onde a fala é espacial (a faixa com a capital recortada, a linha de 1914, Balboa × La Boca, os 60 % de fora, o mapa de 1960, a escola e a avenida, a Zona esmaecendo) e folha onde não é. O mapa das três áreas do sítio de 1914 (p3) é detalhe de planta que o espectador não precisa; o das cidades da obra que sumiram (p4) é bonito mas não responde o que fazia a cidade americana.
- **Quem (8,0).** A faixa com as duas cidades recortadas, os clubes de 1920 de um lado e do outro, os 60 % de fora, as bases, o censo de 1960 no mapa, o trecho da linha diante do Instituto; p4 (a lei) sem mapa, declarado. Os dois anéis das divisões do tribunal (p1) são o único mapa forçado dos três planos, e o próprio plano o reduz a marcar onde ficavam.

### O ritmo para ~11 minutos

- **Quem (8,0).** 7 partes de 230 a 300 palavras, 2.027 no total (≈11:01 + 20 s), e uma só parte sem mapa. As mais pesadas são p1 (280, 6 beats) e p2 (300). A inscrição cai em ≈5:20 (48 %) sobre uma frase curta de três tempos; o comentário sobre três frases leves no fim.
- **Cidade (7,5).** 2.044 palavras em 8 partes; p5 com 320 palavras e 8 datas (1914, 1920, 1930, 1940, 1946, 1948, 1955, 1960) é a parte que em voz alta vira ladainha (voz §1); p8 com 140 é um fecho curto, bom para a chamada.
- **Linha (7,5).** 2.060 palavras em 8 partes; p6 com 300 (as bandeiras de 1960–63, 07/01, 09/01, o telefonema das 20h51, os mortos, a ONU, os juristas) é densa; p7 com 175 é fina; p4 empilha regras datadas.

### A presença

- **Quem (8,5).** A lista mais rica e mais bem posta: os planejadores de 1914 ('the permanent gold site at Balboa'); os 50 empregados 'paid in gold' e os escriturários 'in silver' entrando juntos no prédio em obras, 'amidst the sawing, hammering' (um dia e um lugar); o professor das escolas 'white' e o das 'colored' na p. 247 de 1920; Hines e Mehaffey em 1946; os Knapp; os estudantes de 07 e 09/01/1964; o memorando de Vance ('not abandoning them') lido como "quem era americano visto do último dia"; Mondale; o expediente da Review. Quatro lacunas declaradas, inclusive "nenhum morador nomeado de Balboa em 1960: o plano não cria uma família".
- **Cidade (8,0).** Knapp, a entrada de 1914, Hines/Mehaffey, os estudantes, Vance, a Review de 1979 e a foto de 1980. Lacunas declaradas (o lado 'silver', as bandeiras de 30/09).
- **Linha (8,0).** Hay e Bunau-Varilla assinando, o relatório de 1930 como presença de quem dormia do outro lado ("a voz desse lado não existe em fonte lida": a lacuna dita pelo documento), os estudantes, O'Meara na hora, Mondale, a Review, Knapp.

### O fecho

- **Quem (9,0).** Paga a pergunta literalmente, em cadência: "A treaty… A law… A second treaty… And a payroll…", e a regra que não mudou ("That rule is still on the books", o § 1403 na edição 2024 do U.S. Code). A coda ("The town stayed where it was. The Zone that made it American did not.") é a mais limpa, sem número e sem "here", e já medida sem autoplágio.
- **Cidade (8,0).** As três coisas de papel e a volta à cidade abaixo da encosta, com a bandeira do Panamá diante do prédio (Review de 1980): o anel fecha. Perde pela antítese "never the ground" (figura que o cético pode ler como veredito) e por anunciar menos que o quem.
- **Linha (8,0).** A ideia mais elegante para a soberania (os tratados nas próprias palavras: 1903, "if it were the sovereign"; 1977, "territorial sovereign"), que o plano final toma. Perde por ser longo (≈120 palavras), por repetir a pergunta ("So what did the line change?") e por "gone from the map" (ver fidelidade).

## A nota da dobradiça

Em cada passagem de uma parte para a próxima: "o que o roteiro acabou de estabelecer sustenta isto?"

**A cidade**
- gancho → p1 ("Begin in the town itself"): sim; o gancho estabeleceu a cidade.
- p1 → p2 ("All of that rested on one piece of paper, signed before the town existed."): sim, com um cuidado: p1 estabeleceu polícia, tribunal e escola, que vêm da lei de 1912 e da ordem de 1914, e a ponte os faz "repousar" no tratado; "rested on" não é "created", mas é a ponte mais perto do I05. A ponte seguinte (p2 → p3, "A treaty can grant powers. Somebody still has to build a government with them.") conserta.
- p2 → p3: sim.
- p3 → p4 ("A government needs people to govern, and the Zone chose its people by rule."): sim.
- p4 → p5 ("Service got you a house. It did not decide which house, or which school." → "That was decided on the day the town was planned."): sim, mas custa uma volta de 1939 a 1914 e, depois, oito datas.
- p5 → p6 ("The last fight was over which flag flew above them."): sim; "the last fight" é moldura do narrador (houve outras), leve.
- p6 → p7 ("Thirteen years later, a new treaty would open with that date"): sim (I16).
- p7 → p8 ("The Zone was gone. The town was not."): sim.

**A linha**
- gancho → p1 ("Start with the line itself. It was drawn in Washington"): sim.
- p1 → p2: sim.
- p2 → p3 ("Who got to live in those towns was the next thing the line decided."): sim.
- p3 → p4 ("Now cross the line on an ordinary day, and count what changes."): **falta o dia.** p3 terminou em 1948; p4 começa pela Review de 1979, volta ao Art. VII de 1903 e aos selos de 1904, passa por 1939, 1955, 1956 e 1965. O espectador não sabe em que década atravessa. O que falta é um ano na ponte, ou uma parte que ande em ordem.
- p4 → p5 ("In 1960, the census counted who lived on the Zone's side of it, town by town."): sim.
- p5 → p6 ("What it could not do was make anyone an American. The next fight on the line was over a flag."): sim; "the next fight" supõe uma anterior que o vídeo não contou (a greve de 1920 está fora), leve.
- p6 → p7 ("The line had held. What changed next was the treaty behind it."): **falta o fato que sustente "held".** O FRUS sustenta "We will not move out of the Canal Zone boundaries" (o Exército ficou dentro); "a linha segurou" é veredito. A segunda metade (o tratado por trás dela) está estabelecida desde p1.
- p7 → p8 ("And on October 1, 1979, the new treaty took effect."): sim.

**Quem era americano**
- gancho → p1 ("The first rule was written in Washington, fifteen days after Panama broke from Colombia."): sim; o gancho perguntou o que fazia Balboa americana, e p1 dá a primeira régua.
- p1 → p2 ("the plan for it already had two words in it: 'gold' and 'silver'." → "Those two words were payrolls."): sim, pelo relatório de 1914 lido em p1. A melhor dobradiça dos três planos.
- p2 → p3 ("So the Zone sorted its people by payroll, not by passport. The next rule decided who could live inside the line at all."): sim; "the line" tem a 1ª menção em p2 (quem morava fora, em Panamá e Colón). No plano final, a linha de 1914 entra já em p1, para "inside the line" ter chão.
- p3 → p4 ("So what was a child born in Balboa, in the eyes of U.S. law?" → "The answer is one sentence of law, and it was written in 1937."): sim, pelos 1.041 nascidos na Zona sem cidadania registrada (p3, beat 5).
- p4 → p5 ("So the ground could be run as American and leave the child to the parents' papers. … And in 1946, Washington asked the Zone why."): sim no conteúdo; **falta cuidado na forma**: "run as American" encosta no I01 (o plano final diz "the law that ran the ground left the child to the parents' papers"), e "Washington asked the Zone why" comprime (a instrução de 21/02/1946 foi à embaixada; o embaixador escreveu ao governador; o plano final diz "asked about it").
- p5 → p6 ("The payroll had lost its names. The line had not. And the next fight over the line was about a flag."): sim, pela loja de 1956 e pelas duas redes de escola e de moradia (p5); "the next fight", o mesmo leve da linha.
- p6 → p7 ("The 1977 treaty opens 'in the spirit of the Joint Declaration of April 3, 1964' … That treaty is where the Zone ends."): sim (I16, o preâmbulo lido no disco).
- p7 → fim: a coda sustenta o que p7 estabeleceu (o que acabou e o que continuou).

## O que veio de cada plano para o `plano-final.json`

**Do quem (a base):** a espinha e as 7 partes (a lei → a folha → a residência → o nascimento → a régua troca de nome → a bandeira → o fim), a pergunta ("So what made Balboa American, if being born there didn't?"), o "But" da cidadania como 2º tempo, as outras cidades da Zona no 3º tempo do gancho, o 4º tempo (o censo contou onde cada um nasceu), a assinatura ("who was American in the Canal Zone"), todas as pontes, o cartão de 1970 com os 8.569 (T10, opção 1), a decomposição de Balboa (1.041 nascidos na própria Zona), p4 inteira (a lei lida sobre a página), p5 inteira (1946, 1948, 1955, os dois pares de escolas, o censo de 1960 no mapa), p6, o fecho em cadência de regras, "That rule is still on the books", a inscrição ("The job came first. Then the house. Then the family."), a pergunta do comentário ("Would you have moved to the Canal Zone in 1960?") e a coda.

**Da cidade:**
1. a forma da Sala na 1ª frase do gancho: "This is Balboa, the town below Balboa Heights, where the Panama Canal Zone was run from" (a variante de I03), no lugar de "Balboa, a town inside Panama"; o número passa à 2ª frase;
2. "its police, courts and schools answered to Washington" como o que a fazia americana na 2ª frase, sem "the United States ran" (o I05 fica mais longe), com "under a 1903 treaty" e a troca pronta se o cético objetar;
3. o que o morador via, como face concreta da lei: a polícia com o selo da Zona no braço (Review de 1979, p. 25), o tribunal "next door, in the town of Ancón" desde 1916, o correio com selos próprios, o 'commy' dos Knapp: uma linha em p1 e uma em p3, nunca inventário;
4. a volta à cidade no fecho: a bandeira do Panamá no lugar de honra diante do prédio (Review de 1980; Art. VII do tratado) e "the town stayed where it was, below the hillside" (p7, coda);
5. a frase da inscrição de reserva: "Nobody lived in the Zone just because they wanted to." (depois da lista de 1939, p3), no lugar de "The list was short.";
6. a pergunta de comentário "Where else has one country run a town inside another?" como alternativa;
7. a ordem de corte se passar de 2.150 e o cuidado da fila de datas em cada parte.

**Da linha:**
1. os tratados nas próprias palavras no fecho de p7: "In 1903, 'if it were the sovereign'. In 1977, 'territorial sovereign'." (uma citação por cartão, R07), logo depois das quatro regras, sem o narrador arbitrar;
2. a loja: o tratado de 1936 (em vigor em 1939) limitou a venda a empregados e militares; pelo de 1955, a partir de 31/12/1956 os empregados não americanos que moravam no Panamá perderam o acesso, por exigência do Panamá (memorando do FRUS, atribuído): beat firme em p5, não opcional ("a linha entre dentro e fora endureceu quando a linha do salário afrouxou");
3. as setas nas duas direções no mapa de 1930 (gente para dentro de dia; a loja para fora, com o ano);
4. a linha de 1914 ("the permanent boundary line between the City of Panama and the Canal Zone", marco a marco) dita em p1, para "inside the line" ter chão em p3;
5. a regra de p8 da linha para a coda: pelo menos 6 s de fala calma ou pausa para a chamada de comentário (a lição do vídeo 2).

## O que ficou de fora de cada plano, e por quê

- **Do quem:** "Balboa, a town inside Panama" como 1ª menção (a forma da Sala vai para a 1ª frase); "Under a 1903 treaty, the United States ran its police, its court and its schools" (reescrito; I05); o censo de 1912 por cidadania na tela (carga sem função na espinha; o I14 já está pago pelo 4º tempo do gancho); o opcional das cidades da obra no mapa de p1 (o próprio plano as põe em `o_que_fica_fora`); "So the ground could be run as American" (I01; reescrito); "The list was short." como reserva da inscrição (a frase da cidade é mais calma e não é frase curta).
- **Da cidade:** o gancho inteiro (fica a 1ª frase e a 2ª reescrita); p1 como inventário do que o morador via (vira duas linhas, em p1 e p3); p2 e p3 separadas (o quem as junta em p1, e a dobradiça "Those two words were payrolls" vale mais que a separação); a antítese do fecho ("never the ground"); o mapa das três áreas de 1914 e o das cidades da obra; a comparação com a capital de 260 mil no gancho (fica só na tela, em p1, como opção); "strip" (o plano final usa "band").
- **Da linha:** a espinha da linha (a pergunta do título é "o que a fazia americana", não "o que a linha mudava"); "it was the Zone's town"; "Look at the map." no gancho; p4 inteira como "dia comum" (o anacronismo; os selos e o aluguel); o Art. VII (o saneamento e a ordem nas duas cidades até 1939/1955: verdadeiro e interessante, mas fora da pergunta); as conclusões da CIJ sobre a força (de parte, e abrem o julgamento de 1964); "The line had held."; "the line went with it"/"gone from the map" (passa por cima dos 30 meses); as prisões de 1965; o fecho longo com a segunda pergunta.

## O gancho final (165 palavras pelo portão; "But" na palavra 48; 11 frases; média 15,0; maior 28; alerta `citizens` aceito; autoplágio vazio)

> This is Balboa, the town below Balboa Heights, where the Panama Canal Zone was run from. In 1960, about half of its 3,139 residents had been born in the United States, and under a 1903 treaty its police, courts and schools answered to Washington. Until October 1, 1979. But being born in Balboa didn't, by itself, make you an American.
>
> Balboa was one town in the Zone, a band ten miles wide that the United States ran across Panama, from the Caribbean to the Pacific. Up the canal, Paraíso had seven residents born in the United States, out of 3,113. On the Atlantic side, Rainbow City had three, out of 3,688. And from 1920 to 1970, no census of the Zone published how many of its residents were citizens. It counted where they were born. So what made Balboa American, if being born there didn't? You're at Alpha Point, and this is where the story of who was American in the Canal Zone begins.

Medido pelo `gate.mjs` em cópia (scratchpad, 14/10/2026): o único problema apontado foi o total de palavras, esperado num arquivo só com o gancho. As três coisas do título estão nas 3 primeiras frases (a cidade de verdade, com a forma da Sala; o tratado e polícia, tribunais e escolas respondendo a Washington; "Until October 1, 1979."), "Panama", "1979" e "Balboa" idem. O "But" na palavra 48 fica a 2 do teto: **nenhuma palavra a mais nas 3 primeiras frases sem tirar outra** (o primeiro corte é "This is Balboa" → "Balboa is the town", −1). O gancho tem 165 palavras, a 5 do teto de 170.

**A troca pronta, se o cético ler I05 em "under a 1903 treaty":** a 2ª frase vira "…born in the United States, and its police, courts and schools answered to Washington." (−4), e o tratado passa à frase da faixa: "Balboa was one town in the Zone, a band ten miles wide that a 1903 treaty had put in American hands, across Panama, from the Caribbean to the Pacific." (+5). O "But" cai na palavra 44 e o total fica em 166. Nos dois casos, p1 separa o tratado (os poderes) da lei de 1912 e da ordem de 1914 (as instituições), sem "because".

## O que fica aberto (não é do juiz)

- **Do Lucas:** nada novo. As decisões da Sala (T06, T10, T03, McCain, o presente) estão aplicadas; se ele quiser a linha do presente, o lugar é p7, beat 5, na forma literal de R05, e nada mais muda.
- **Do roteirista:** escrever as 7 partes nos orçamentos do plano (±30 entre vizinhas; total 1.950–2.150), passar o `gate.mjs` a cada troca e decidir por escrito cada alerta (os previstos: `citizens`/`citizenship` na lei e no Census; `white`, `segregat`, `racis` dentro de citação atribuída; `sovereign` nas duas citações dos tratados); deixar a frase curta da inscrição (p3) e as três frases leves da coda (p7) onde o plano as pede; carimbar os derivados com o sha de 12.
- **Do redator-de-tela:** a pergunta do comentário (a principal e as alternativas estão no plano), rodada no `_perguntas.mjs`.
- **Da pesquisa-geo:** a geometria da Zona e da linha de 1914 (a Convenção dá rumos e distâncias; os mapas do Census de 1940 e da CIJ de 1964 mostram a divisa): segura as cenas de mapa, não o texto.
