# Laudo · crítico de locução (adaptado para en-US e TTS) · rodada 1

Revisão julgada: `4694e58092c2` · data-base 2026-10-26

NOTA: 7/10. Quase todo o roteiro se fala de primeira. A média é de 12,6 palavras por frase, e a frase curta fica guardada para as viradas. Os termos se definem na oração em que entram, e só a NOAA se diz como palavra entre as siglas. O gancho é limpo. Não há achado GRAVE. Mas em uns quinze lugares o ouvido monta outra coisa que a página. São sete os problemas:
- uma relativa reduzida que vira garden path ("a net hauled up from the trench brought back");
- pronomes cujo dono o ouvido já perdeu, dois deles abrindo um pedido novo à voz;
- dois tópicos deslocados ("Exactly how deep, the sources disagree.") que a voz v4 tende a entoar como pergunta;
- uma atribuição entalada no meio da oração;
- os possessivos de sigla ("USGS's" e o "NOAA's ship", que se ouve "Noah's ship");
- dois nomes para a mesma lista;
- a fila de números do parágrafo que paga o título.

VEREDITO: RESSALVA. Nenhum GRAVE segura o texto (ofício §6), mas a nota fica abaixo de 8 por causa dos MÉDIOS. As trocas são pontuais e cabem numa rodada. Aplicadas juntas numa cópia, passam no `aplicar-lista.mjs` e no `gate.mjs` (detalhes abaixo).

## Notas

- **O que foi julgado.** O texto falado de `roteiros/atlantico-fundo/roteiro-narrador.md`, sha256 `4694e58092c24ffe94b23e8fd1ec5ce56907d6163906f39874adc836571a594d`. São 30 parágrafos, 166 frases e 2.089 palavras, e o portão dá PASSA:
  - o gancho chega à assinatura com 159 palavras, e o "But" está na palavra 49;
  - a maior frase tem 29 palavras;
  - nenhuma taxa chega ao teto, e não há autoplágio.

  A origem de cada frase foi lida em `roteiro-editor.md`, o porquê das escolhas em `_trabalho/escrita-notas.md`, a pronúncia em `pronuncia.md` (que já cita este sha) e a forma fixada de cada fato no dossiê (`pautas/atlantico-fundo/fundamento.md`, o "Como dizer" de cada F).
- **Como foi lido.** Como a voz do motor vai ler: eleven_v4, a ~184 palavras/min, stability 0,5, um pedido por parágrafo.
  - A cada pedido a voz recomeça a entonação, e por isso o pronome que abre um parágrafo pesa mais.
  - Aspas, itálico, dois-pontos e maiúscula não se ouvem.
  - O motor lê o texto do portão tal como está, sem a cópia para a voz dos vídeos 3 e 4 (`pronuncia.md`, topo).

  Os achados são da primeira passada.
- **O que esta lente não refez.** A média, o teto de frase, a fila de datas, as palavras vetadas, as taxas e o autoplágio são do portão, e não foram recontados aqui. Fato e estrutura ficam com as outras lentes. Quando uma troca encosta em fato, o achado diz o que a lente de fatos confere.
- **Os 8 alertas do portão, pelo ouvido.** Nenhum é problema de locução:
  - o "anomaly" vem glosado na frase seguinte ("Gravity there falls further below normal than anywhere else.");
  - os três "Milwaukee Deep" estão em tempos diferentes, e o ouvido os segura;
  - os dois "never" e os dois "first" se falam limpos.
- **As trocas, provadas numa cópia.** As 19 trocas dos 10 achados abaixo foram aplicadas juntas numa cópia fora do canal, pela própria ferramenta (`ferramentas/aplicar-lista.mjs --raiz=<cópia>`).
  - **O aplicador:** SECO_OK. Cada "de" casa uma vez, as aspas e os numerais conferem (só saem o 95, o 250 e o 230, declarados), e nenhuma frase do diff ficou sem item.
  - **O `gate.mjs` sobre a cópia:** PASSA, sha `96fa56a27d0c`, com 2.067 palavras, 164 frases, média de 12,7 e maior frase de 29 palavras.
  - **O gancho fica intacto:** 159 palavras, o "But" na 49, sem autoplágio e sem nenhuma taxa no teto.
  - **Os pedidos à voz** ficam entre 44 e 103 palavras.
  - **Um alerta a mais:** o [1918-fossa], na frase de A2(c), "The earthquake behind that tsunami struck the eastern part of this trench…". É falso positivo: a frase fala do tsunami medieval, cujo terremoto foi mesmo na parte leste da fossa (F53). Quem fecha é a lente de fatos (ver A2).
- **As chamadas.**
  - **A inscrição** continua na pausa depois de "Soon after, a problem with the robot cut this one short." Com as trocas, ela começa por volta da palavra 1.077 de 2.067, uns 51 % do vídeo com a cauda: dentro da janela de 35 a 60 %. A frase é calma, sem "here" nem "this line", e o parágrafo seguinte abre com data, sem pronome pendurado.
  - **O comentário** continua sobre as duas primeiras frases do último parágrafo. A6(d) muda só a forma da primeira, com o mesmo número de palavras.
- **Para a folha de pronúncia e a amostra** (não são achados):
  - com qualquer troca, a folha se refaz com o sha novo;
  - se A6 entrar, somem o "USGS's" (o pedido 6 da amostra) e três dos "NOAA's", e a contagem de NOAA cai de 6 para 5;
  - **os números vão em algarismo à voz do motor**, sem a cópia que os escrevia por extenso. Na amostra, ouvir como o v4 lê:
    - "1,500 feet" e "1,200 feet" ("fifteen hundred" é a forma corrente; "one thousand five hundred" soa lido);
    - o par "between 1381 and 1391" (o risco é "one thousand three hundred…", ou o par lido como quantidade);
    - "magnitude 7.1", "Seabed 2030" e "by 2030";
    - o ordinal de "December 19, 2018" e de "January 27, 1883".

    Se errar, a forma por extenso entra no texto do portão pela `roteiro-motor.mjs converter --de=voz`, como a folha descreve para os aliases;
  - "a U.S. island," na 1ª frase: conferir que o ponto de "U.S." não vira pausa de fim de frase. É a frase que mais pesa no vídeo.
- **Abaixo da linha.** Não são achados e não seguram nada. Ficam a critério de quem escreve.
  - **3º parágrafo, a 1ª frase depois da vinheta:** "On January 27, 1883, a steamer called the Blake, from the U.S. Coast and Geodetic Survey, lowered a weighted wire…". São 28 palavras, e o verbo chega na 17ª, depois da data e do órgão de quatro palavras. Proposta (REORDENAR): "On January 27, 1883, a steamer called the Blake lowered a weighted wire into the sea north of Puerto Rico. It belonged to the U.S. Coast and Geodetic Survey.". A lente de fatos confere o "belonged to".
  - **5º:** "…by the British research ship HMS Challenger, under Captain Nares, far to the east." No fim, "far to the east" se prende ao capitão. Proposta (REORDENAR): "The trench itself had been found eight years earlier, far to the east, by the British research ship HMS Challenger under Captain Nares.".
  - **9º:** "multibeam sonar, a ship's sonar that maps the seafloor in a wide strip". Dito, "sonar, a ship's sonar" soa como a voz se repetindo, logo depois de "mapped". É a forma do F12 e fica, se a lente de fatos a preferir. Proposta: "with multibeam sonar, which maps the seafloor in a wide strip under a ship.".
  - **12º, a 1ª frase (28 palavras):** "says" tem dois complementos, e em "a landslide like those appears" o ouvido ouve "those appears", como erro de concordância. Proposta: partir em "The USGS says those walls show many old underwater landslides. It says the risk of a tsunami set off by a landslide like those appears to be high.". É a forma do F45 com "It says".
  - **12º:** "Its tsunami ran as high as 20 feet up Puerto Rico's west coast." Dito, "20 feet up … coast" pode ser "20 pés costa acima", ao longo dela. Proposta: "Its tsunami reached as high as 20 feet on Puerto Rico's west coast.". A lente de fatos confere que "reached" segura o *run-up*.
  - **13º:** em "dated the tsunami that left them to sometime between 1381 and 1391", o ouvido prende "left them to" por um instante. Se a amostra tropeçar, PEDIR ao escritor uma forma que dê ao tsunami um verbo próprio. Sem número nem nome novo.
  - **14º:** "That quake wasn't behind the deadly tsunami of 1918, either." O "either" pede uma negação logo antes, e a negação de 1918 ("It wasn't in the trench.") ficou 10 frases atrás. Proposta: CORTAR ", either".
  - **14º e 15º:** "far from its deepest point" e "a long way from its deepest point", em frases quase seguidas, soam como a voz se repetindo. As duas seguram a regra N24 e o F68, e a estrutura decide.
  - **18º:** "He made the trip alone…" e "The trip down took…" repetem "trip". Proposta: "The descent took about two and a half hours.".
  - **19º, outra fila de números:** 2019, 28,700, 1939, 1,200, 2003, 2011 e 28,000, em 73 palavras. O "more than 28,000" logo depois do "28,700" soa como um terceiro número, menor, e embaça o ponto. A frase de 2011 é o 2º corte do plano. A estrutura decide se CORTAR.
  - **20º e 21º:** "In their check", "their study found", "Their study also put" e "Their study came out" são a mesma fôrma em uns 40 s (ofício §3.6). Vale variar uma ("The two scientists also put the deepest point somewhere else.").
  - **21º:** "Working from public data from eight older surveys": "from … from". Proposta: "Using public data from eight older surveys, it placed…".
  - **23º (30 palavras):** dois-pontos e uma oração com "where" numa frase só. Proposta: "…the South Sandwich Trench, far to the south. There, one plate dives under another about three inches a year.". A taxa vai junto do "three to four times" da frase seguinte.
  - **28º:** "the French had counted" vem duas vezes em frases seguidas. Proposta: "It found sea cucumbers instead, about as many.". A lente de fatos confere.
  - **29º:** "the "fish" of 1964". A voz não marca as aspas, mas o "concluded" segura o sentido. Fica.
  - **O gancho, só para a escuta:** a ordem 1964 → 2019 → dezembro de 2018 faz o ouvido voltar um ano, e só o "itself" marca que "the exact same spot" não era o ponto mais fundo. É o texto do plano, palavra por palavra, e fica (NÃO TOCAR). Vale ouvir na amostra se o "itself" sai com peso.

## ACHADOS

1. [MÉDIO · REDIZER · relativa reduzida que vira garden path (ofício §3.1 e §3.3)] "records that in 1970 a net hauled up from the trench brought back a small cusk-eel." → Dito, "a net hauled up from the trench" se ouve como oração inteira: a rede *puxou para cima*. O "brought back" chega como um segundo verbo sem sujeito, e o ouvinte tem de voltar e reler o que não pode reler. É o parágrafo mais longo do roteiro (105 palavras), e o tropeço cai na primeira frase dele. → CONSERTO: "records that in 1970 a net brought back a small cusk-eel from the trench." O mesmo fato (a rede, a fossa, a enguia), com uma palavra a menos. → RAIZ: PONTUAL.

2. [MÉDIO · REDIZER · o pronome cujo dono o ouvido perdeu (ofício §3.3)] Quatro frases. Duas abrem um pedido novo à voz, e a entonação recomeça justamente ali:
   - (a) 4º parágrafo: "It came back up with a sample of the seafloor" → o dono é "the wire", duas frases e uma pausa de parágrafo atrás, e os nomes mais perto são "the deepest point" e "the sonar". → CONSERTO: "The wire came back up with a sample of the seafloor";
   - (b) 11º: "On the trench's walls, its maps showed something else." → colado a "the trench's walls", o "its" se ouve como da fossa, e os mapas são do USGS. → CONSERTO: "On the trench's walls, the agency's maps showed something else." ("the agency" é o USGS, como no início do mesmo parágrafo);
   - (c) 14º, a abertura do pedido: "The earthquake behind it struck" → o dono é "the tsunami", três frases e uma pausa de parágrafo atrás. A última coisa dita foi "the coral died in summer or fall". → CONSERTO: "The earthquake behind that tsunami struck". Dispara o alerta [1918-fossa] do portão, que é falso positivo: o terremoto do tsunami medieval foi mesmo na parte leste da fossa (F53, S17), e a frase não tem 1918. "That wave" não dispararia, mas daria ao mesmo objeto um nome novo, o mesmo defeito de A8;
   - (d) 14º: "call it the only known sign" → aqui há três "it" seguidos com dois donos (o tsunami, o terremoto, e de novo?). Dito, "call it" pega o último, o terremoto, e a frase vira "o terremoto é o único sinal de que este trecho pode fazer isso": circular. → CONSERTO: "call those boulders the only known sign". O "can do that" do F55 fica. A lente de fatos confere: o F55 diz que o sinal é o tsunami, e os blocos são o registro físico dele (S17). A outra saída, "call that tsunami", dispararia outro [1918-fossa].

   → RAIZ: (a) e (c), INSTRUÇÃO. Falta à voz §1, ou à roupa de quem escreve, a regra "o parágrafo é um pedido à voz: não abre com pronome cujo dono está no parágrafo anterior". (b) e (d), PONTUAL.

3. [MÉDIO · CORTAR · fila de medidas no parágrafo que paga o título (ofício §3.4)] O 17º parágrafo é o pagamento do vídeo (o ponto mais fundo, as 83 milhas, Aguadilla) e traz sete números em 74 palavras: "twenty-seven thousand five hundred feet … sixteen feet … ninety-five percent … two hundred fifty feet … twenty twenty-one … eighty-three miles … three million". O "95 percent confidence" e a grade de "250 feet" são detalhe de método, que só funciona lido. Dito, enterram o número do fundo e as 83 milhas do título entre dois números que o ouvinte não usa. O dossiê os põe na tela: o F11 dá a margem para a voz "only if needed" e o resto para a tela. A grade é o 1º corte do plano. Duas trocas:
   - (a) "16 feet. The scientists give that margin with 95 percent confidence. They built" → CONSERTO: "16 feet. They built";
   - (b) "They built their map as a grid of squares about 250 feet across. The results" → CONSERTO: "The results".

   Ficam "Give or take about 16 feet." (a forma do F11) e "The results were published in 2021.". A tela já leva "95% CONFIDENCE", e a ilustração, a grade (`roteiro-editor.md`). O parágrafo fica com 55 palavras. → RAIZ: PONTUAL.

4. [MÉDIO · REORDENAR · a atribuição entalada entre sujeito e verbo (ofício §3.2)] "The depth most often published for its deepest point, the same 2019 study found, was deeper" → o sujeito tem 9 palavras, e o "the same 2019 study found" entra no meio. Quando o "was deeper" chega, o ouvinte já soltou o sujeito e não sabe o que era mais fundo. É a frase em que o Meteor quase passa Porto Rico, o ponto de tensão de p7. → CONSERTO: "The same 2019 study found that the depth most often published for its deepest point was deeper". A fonte vem primeiro (voz §1), e o "its" não se prende ao estudo: um estudo não tem ponto mais fundo. → RAIZ: PONTUAL.

5. [MÉDIO · REORDENAR · o tópico deslocado que a voz entoa como pergunta (ofício §3.7 e §3.3)] O mesmo andaime duas vezes em uns 30 s, em pedidos seguidos (ofício §3.6):
   - (a) 7º: "Exactly how deep, the sources disagree." → o v4 tende a subir o tom em "Exactly how deep", como pergunta, e o "the sources disagree" chega solto. Na fala corrente a frase pede "on". → CONSERTO: "The sources disagree on exactly how deep.";
   - (b) 8º: "How deep the fish was when it swam in, no one knows." → mesma subida em "How deep the fish was", e a resposta fica no fim. → CONSERTO: "No one knows how deep the fish was when it swam in."

   Em (b), a nota de escrita tirou o "though" da forma antiga ("No one knows, though, how deep…"). A troca fica sem ele, e o problema que a nota resolvia continua resolvido. Em (a), o "It never reached the deepest point, though." seguinte continua com o "It" no Archimède: "sources" é plural. → RAIZ: PONTUAL.

6. [MÉDIO · REDIZER · o possessivo de sigla (ofício §3.3 e §3.4)] Quatro possessivos de sigla. A voz tem de decidir na cabine como se diz "USGS's" (a folha de pronúncia já o marca de risco médio). E o "NOAA's", dito como palavra (NOH-uh), é "Noah's". Num vídeo de mar, isso dá "Noah's ship", "Noah's tsunami database" e, no fecho, "By Noah's estimate, no fish lives…". O público fala inglês em qualquer país, e fora dos EUA a NOAA não é nome de casa. A definição na 1ª vez ajuda, mas não desfaz a imagem do navio e do dilúvio.
   - (a) 10º: "By the USGS's measure, the trench has" → CONSERTO: "According to the USGS, the trench has";
   - (b) 12º: "NOAA's tsunami database puts it at magnitude 7.1." → CONSERTO: "NOAA puts it at magnitude 7.1 in its tsunami database.";
   - (c) 15º: "worked from NOAA's ship Okeanos Explorer," → CONSERTO: "worked from the ship Okeanos Explorer," A primeira frase do parágrafo já diz "a NOAA robot", e a tela pode levar o dono do navio;
   - (d) 30º, o fecho: "By NOAA's estimate, no fish lives" → CONSERTO: "NOAA estimates that no fish lives" (LEVE: a esta altura a sigla já se ouviu cinco vezes; mas é a frase sob a pergunta de comentário).

   → RAIZ: INSTRUÇÃO. Falta à `marca/pronuncias.md` › "Leituras que a voz costuma errar" a linha "possessivo de sigla ('USGS's', 'NOAA's'): evitar na voz; e a sigla dita como palavra não fica colada a um nome que forme outra coisa ('NOAA's ship')".

7. [MÉDIO · ESTREITAR · a concordância que só as aspas salvam, e dois números que o ouvido compara (ofício §3.3 e §3.4)] "U.S. waters, in that sense, means the exclusive economic zone: a band of sea up to about 230 miles out, where the U.S. controls the resources." → Dois tropeços:
   - na página, "U.S. waters" é termo e leva o verbo no singular. Dito, sem aspas nem itálico, "waters … means" soa como erro de concordância;
   - a frase anterior acabou de dizer "about 100 miles from the Dominican Republic". Ao ouvir "up to about 230 miles out", o ouvinte faz a conta (100 é menos que 230) e estranha que o ponto não caia também nas águas dominicanas. A linha entre as duas zonas é mediana, e a voz não tem como explicar isso.

   → CONSERTO: "Those U.S. waters are the exclusive economic zone, a band of sea where the U.S. controls the resources." A definição continua, com o dono e o que ele controla, e o 230 vai só à tela ("UP TO 200 NMI (230 MI)", já no `roteiro-editor.md`). São 5 palavras a menos. Se a Sala quiser a largura na voz, o caminho é tirar da voz o "about 100 miles from the Dominican Republic", e a estrutura decide. A lente de fatos confere o F14. → RAIZ: PONTUAL.

8. [MÉDIO · REDIZER · o mesmo objeto com dois nomes (ofício §3.3)] "the international list of undersea feature names no longer includes" → O gancho e o 19º parágrafo dizem "the official list of undersea features". Dito no fecho de p6, "the international list of undersea feature names" se ouve como outra lista, e o pagamento perde força: o nome saiu da mesma lista que tinha o número errado. O dossiê dá as duas formas para o mesmo *gazetteer* IHO-IOC da GEBCO (F28 e F29). → CONSERTO: "the official list of undersea features no longer includes". → RAIZ: PONTUAL. A cadeia referencial do plano cobriu "the trench", "the line" e "the deepest point", mas não a lista.

9. [LEVE · REDIZER · "along about" duas vezes, e um fragmento sem verbo (ofício §3.1 e §3.3)] Em "along about" a voz cola duas palavras curtas que na fala americana formam outra expressão ("along about noon", isto é, por volta de):
   - (a) 7º: "Some 200 of them, along about a mile of seafloor." → é também a única frase sem verbo do miolo. Mede o que veio antes, mas tem dois adjuntos. → CONSERTO: "They counted some 200 of them along roughly a mile of seafloor." O portão não alerta [200-peixes] (não há "fish" na frase, e "counted" é verbo de relato). O "counted" é o mesmo do 28º ("Where the French had counted about 200 fish");
   - (b) 13º: "along about six miles of its north shore" → CONSERTO: "along roughly six miles of its north shore".

   → RAIZ: PONTUAL.

10. [LEVE · REDIZER · compressão: o "named" cortado (ofício §3.1)] "The name Meteor Deep is old, after a German research ship." → O verbo de "named after" foi cortado para caber. Dito, "is old, after a German research ship" pode ser "velho, depois de um navio alemão", com o "after" de tempo. → CONSERTO: "The name Meteor Deep is old, taken from a German research ship." O parágrafo já tem três "it" com donos diferentes, e a troca não acrescenta outro. → RAIZ: PONTUAL.

## O QUE ESTÁ FORTE

- **A 1ª frase** paga os dois títulos e se fala de uma vez. Lugar e número vêm na frente, e a inversão ("lies the deepest point in the Atlantic Ocean") faz a frase pousar nas palavras do título.
- **A escala em imagem, sem número de profundidade a mais:** "It's more than five miles down. Stand Mount Everest on the bottom, and its top 1,500 feet would stick out of the water.".
- **O "But" curto e limpo:** "But that's the Pacific, about 9,500 miles away.".
- **As pontes em par, com espinha:**
  - "A sound could give a number. It couldn't show anyone what was down there.";
  - "A crew could see only a small patch of the trench, and a net could only bring something up. Neither could map the floor.".
- **O termo definido na oração em que entra:**
  - "a French bathyscaphe, a deep-diving craft";
  - "Its sounding there, the depth it measured,";
  - "A cusk-eel is a fish shaped like an eel";
  - "Earth's outer shell is made of giant slabs called plates.";
  - a anomalia glosada logo depois.
- **Nenhuma sigla para a voz decidir, fora NOAA, USGS, HMS, USS e U.S.:** "the International Hydrographic Organization" por extenso, nunca GEBCO, nunca EEZ, e "the U.S. Geological Survey" inteiro na 1ª vez.
- **Os números já redondos e por extenso:** "more than five miles", "three-quarters of an inch", "nine-tenths", "two and a half hours", "more than three million", "a century", "thousands of years".
- **As viradas em frase curta, sem rajada:** "It found no fish at all.", "The sonar settled that.", "Argentina, for one, disagrees.".
- **Gente apresentada pela ação, nunca pela fôrma:**
  - "Victor Vescovo took a submersible called Limiting Factor down…";
  - "two scientists, Heather Stewart and Alan Jamieson, checked the published depths…".
- **O laço dos nomes em p7:** "Its neighbor, about 20 miles away, got the other half of the name: Limiting Deep.".
- **A série com espinha do 28º:** "similar color, similar texture, similar shape.".
- **A promessa curta que o ouvido guarda e o vídeo paga:** "Keep those fish in mind." e "Off Puerto Rico, the French crew's fish were waiting for a second look.".
- **O fecho** pousa num lugar do mapa, sem repetir a pergunta e sem lista: "The deepest point in the Atlantic, about 83 miles off Puerto Rico, sits right at that edge.".

## NÃO TOCAR

- O gancho inteiro, que é o texto do plano palavra por palavra. Em especial:
  - "About 83 miles off Puerto Rico, a U.S. island, lies the deepest point in the Atlantic Ocean.": os dois títulos e o lugar;
  - "It's more than five miles down.";
  - "Stand Mount Everest on the bottom, and its top 1,500 feet would stick out of the water.";
  - "When you think "deepest ocean," you think Mariana. But that's the Pacific, about 9,500 miles away.": a forma do contrato (pauta §3) e o "But" na 49;
  - "The first person to reach the deepest point itself got there only in December 2018.";
  - "So what is really down there, and how did anyone find out? You're at Alpha Point, and this is where the story of the bottom of the Atlantic begins.".
- "A sound could give a number. It couldn't show anyone what was down there."
- "It never reached the deepest point, though.": o F36 e a R05.
- "Keep those fish in mind."
- "Give or take about 16 feet.": a forma do F11 para a voz.
- "He was the first person to reach the deepest point of the Atlantic.": o F39 e a R15.
- "The sub's own gauges confirmed the sonar's number, within about 7 feet."
- "Soon after, a problem with the robot cut this one short.": a inscrição entra na pausa seguinte.
- "More than three million people live in Puerto Rico.": a forma da Sala.
- "That's almost exactly what the newspapers reported in 1939.": a R06 e a N23.
- "Computer models put it at magnitude 8 or more.": o F54, atribuído.
- "They think quakes like that come thousands of years apart.": a frase que segura o tom, e a reserva da inscrição.
- "In 2023, the International Hydrographic Organization recognized the Southern Ocean. It begins at 60 degrees south.": a forma da Sala.
- "Both Britain and Argentina claim them.": a N15.
- "In August 2026, a Landsat satellite caught the heat of a lava lake…" e "As of October 2026, …": os voláteis datados na própria frase. A A8 só troca o nome da lista.
- "The sonar settled that."
- "Its neighbor, about 20 miles away, got the other half of the name: Limiting Deep."
- "The deepest point in the Atlantic, about 83 miles off Puerto Rico, sits right at that edge.": o fecho.

PADRÕES:
- **A referência que o ouvido não segura.** O pronome que abre um pedido à voz, ou que muda de dono no meio da fala ("It came back up", "behind it", "call it", "its maps"). O mesmo objeto com dois nomes ("the official list" e "the international list of undersea feature names"). Na página o leitor volta; dito, o v4 recomeça a entonação a cada parágrafo, e o ouvinte não volta (A2, A8).
- **A frase que só funciona lida:**
  - a relativa reduzida que vira garden path ("a net hauled up from the trench brought back");
  - o tópico deslocado que a voz entoa como pergunta ("Exactly how deep, …");
  - a atribuição entalada ("…, the same 2019 study found, was deeper");
  - o termo que pede aspas para concordar ("U.S. waters … means");
  - o possessivo de sigla ("USGS's", "NOAA's ship") (A1, A4, A5, A6, A7).
