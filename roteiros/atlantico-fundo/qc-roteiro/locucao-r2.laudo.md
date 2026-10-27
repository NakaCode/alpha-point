# Laudo · crítico de locução (adaptado para en-US e TTS) · rodada final

Revisão julgada: `04ae6bfbeb60` · data-base 2026-10-26

NOTA: 8/10. O roteiro se grava de primeira quase inteiro. As frases são curtas (média de 12,7 palavras, maior de 28), cada termo técnico ganha a glosa na oração em que entra, a fonte vem dita antes do número, e as siglas são só cinco (U.S., NOAA, USGS, HMS, USS), cada uma por extenso ou explicada na primeira vez. Não há achado GRAVE. Sobram cinco lugares onde o ouvido monta outra coisa que a página. O pior é um termo técnico que a rodada 1 levou para antes da glosa dele ("sounding"). Há ainda duas frases em que uma palavra muda de classe no ouvido: o "that" demonstrativo que soa como conjunção e o "point" verbo num roteiro em que "point" é substantivo umas vinte vezes. E há três homógrafos que o ouvido do motor não pega.

VEREDITO: RESSALVA. Nenhum GRAVE: pelo ofício (§6), o texto passa nesta lente. Os três MÉDIOS (A1 a A3) valem a troca antes do portão "roteiro" do motor, porque cada um custa um tropeço ao espectador e todos se consertam numa linha. Os dois LEVES (A4 e A5) são baratos e tiram riscos que a escuta automática do motor não vê. As sete trocas, aplicadas juntas numa cópia, dão PASSA no `gate.mjs` (abaixo).

## Notas

- **O que foi julgado.** O texto falado de `roteiros/atlantico-fundo/roteiro-narrador.md`, sha256 `04ae6bfbeb6048c8993ece4150945de28cb81e5a6b9a2e906c4e803a16b0438c`: 29 parágrafos, 161 frases, 2.038 palavras, média de 12,7 e maior frase de 28 palavras. O `gate.mjs` dá PASSA. O gancho chega à assinatura com 161 palavras, o "But" está na palavra 49, não há autoplágio e nenhuma taxa chega ao teto. Com `--derivados`, o `roteiro-editor.md`, a `pronuncia.md` e a escuta fria citam este sha. A origem das frases foi lida em `roteiro-editor.md`, a pronúncia em `pronuncia.md` (que cita `04ae6bfbeb60`), e o plano e o dossiê só onde uma frase pedia.
- **Como foi lido.** Como a voz vai ler: o v4 da voz do canal, pelo motor, um pedido por parágrafo, a ~184 palavras/min. Aspas, itálico, hífen e maiúscula não se ouvem, e os números vão por extenso na cópia para a voz (`voz/texto-para-voz.md`, pela `roteiro-motor.mjs converter --de=voz`). Os achados são da primeira passada. Este laudo foi gravado antes de reler o laudo da rodada 1; a comparação está no fim, feita depois.
- **O ouvido do motor não vê homógrafo.** No motor, o faster-whisper confere o que a voz disse contra o texto, e só o trecho que não casa se refaz (`pronuncia.md`, topo). Um homógrafo dito errado ("dove" como a ave, "records" como substantivo) sai na mesma grafia da transcrição, casa com o texto e passa. Por isso a A4 é achado, e não só nota para a amostra: o ouvido do Lucas é o único que pegaria, e a amostra da folha só cobre um dos três (o pedido 5).
- **O que esta lente não refez.** A média, o teto de frase, a fila de datas abrindo frases, as vetadas e as taxas são do portão, e não foram recontadas aqui. Fato e estrutura ficam com as outras lentes. Onde uma troca encosta em fato (A1, A4), o achado diz o que a lente de fatos confere.
- **Os 8 alertas do portão**, lidos de ouvido: nenhum é tropeço de voz.
  - "never" duas vezes ("It never reached the deepest point, though."; "…had never been mapped."): o ouvido não estranha.
  - "first" duas vezes: as duas com o substantivo ("The first person to reach the deepest point itself"; "the first person to reach the deepest point of the Atlantic").
  - "Milwaukee Deep" três vezes: soa como nome de lugar, e cada vez num tempo diferente (1939, 2019, 2026).
  - "still" no gancho: preso a "a 2019 study", sem soar como notícia do dia.
  - A decisão de fato de cada um é da lista da rodada 1 e da lente de fatos.
- **A folha de pronúncia** cobre todos os nomes que a voz diz, conferido nome a nome contra o texto de agora: nenhum nome falado ficou sem linha. Das trocas abaixo, só a A4b toca uma frase da amostra (o pedido 5, "…records that in nineteen seventy…"). Se ela entrar, o pedido 5 se acerta com "reports", e a folha se refaz com o sha novo (como manda o topo dela). A A4c tira da voz o "records" do 11º parágrafo, que a folha lista entre as palavras comuns do P01. Nenhuma troca põe ou tira nome.
- **A cópia para a voz** é da Sala, mas depende do texto: o par "between 1381 and 1391" (13º parágrafo) pede a regra de anos do século XIV que o `preparar-voz` de hoje não tem (`pronuncia.md`, "O que a cópia para a voz vai trocar"). E o "U.S." da 1ª frase ("off Puerto Rico, a U.S. island, lies…") pode virar fim de frase no v4. A amostra (pedido 1) já o testa.
- **A chamada e o comentário** são só de tela (`marca/cta.md` §1 e §3). O texto não tem "here" nem "this line". A janela da inscrição vai de 35 a 60 % do vídeo, entre as palavras ~713 e ~1.223. Nela, o lugar mais calmo é a virada de p4 para p5: "To see the trench's walls, you need a camera down there." (~51 %) e a pausa de parágrafo depois dela. É troca de parte, frase curta, sem número na tela. Outra opção é "More than three million people live in Puerto Rico." (~59 %), mas essa frase vem logo antes de Vescovo, o clímax da parte, e ali a faixa disputaria a atenção. Quem escolhe é o regente.
- **As trocas, provadas numa cópia.** As sete trocas dos cinco achados abaixo, aplicadas juntas numa cópia fora do canal (`pautas/atlantico-fundo/_trabalho/scripts/locucao-trocas-copia.py`: cada "de" casa uma vez), dão no `gate.mjs`:
  - PASSA, com 2.039 palavras, 161 frases, média de 12,7 e maior frase de 28;
  - o gancho intacto: 161 palavras até a assinatura e o "But" na palavra 49. A A4a só troca "dove" por "descended", no 2º parágrafo, e não mexe em nada antes do "But";
  - nenhum autoplágio, nenhuma taxa no teto e os mesmos 8 alertas;
  - o sha da cópia, `3344375ba590…`. Na lista da Sala, cada troca pede o par dela no `roteiro-editor.md`: as linhas 74 e 254 (A4a), 315 (A1), 378 (A4b), 436 (A2), 445 (A4c), 454 (A3) e 763 (A5).
- **Abaixo da linha.** Não são achados e não seguram nada. Ficam a critério de quem escreve:
  - **o gancho, 2º parágrafo:** "In 2019, … It saw none of those fish. The first person to reach the deepest point itself got there only in December 2018." O "only" é contra 1964 (54 anos depois de gente descer na fossa), mas chega logo depois de 2019, e por um instante 2018 soa como "antes" e não como "tarde". São três anos parecidos em quatro frases (2019, 2018, 2019), fora de ordem. A rodada 1 pôs a frase no NÃO TOCAR (o texto do plano) e mandou ouvi-la na amostra; continua assim. Se a amostra mostrar o tropeço, a proposta é (REDIZER, sem numeral novo): "…the deepest point itself didn't get there until December 2018." O "first" fica;
  - **p4, 1º parágrafo:** "The USGS says those walls show many old underwater landslides, and that the risk of a tsunami set off by a landslide like those appears to be high." É a frase mais longa do roteiro (28), com dois complementos de "says" e um sujeito de 12 palavras antes de "appears". A ressalva ("appears to be high") chega no fim do fôlego. Proposta (REDIZER): "…underwater landslides. It says the risk of a tsunami set off by a landslide like those appears to be high.";
  - **p4, 1º parágrafo:** "Its tsunami ran as high as 20 feet up Puerto Rico's west coast." Dito, "up … coast" é também "costa acima" (ao longo da costa). O "as high as" salva a altura. Proposta (REDIZER): "…as high as 20 feet on Puerto Rico's west coast.";
  - **p4, 2º parágrafo:** "a 2025 study dated the tsunami that left them to sometime between 1381 and 1391": o "to" fica cinco palavras depois do "dated", e "left them to" se ouve por um instante como um verbo só. O ouvido se acerta em "sometime", e o par de anos a amostra confere (pedido 8);
  - **p8, 2º parágrafo:** "the "fish" of 1964". As aspas não se ouvem, e dito fica "the fish of 1964 were sea cucumbers". O contexto (a frase anterior e a seguinte) dá o sentido. Fica;
  - **p5, 3º parágrafo:** "Give or take about 16 feet." O fragmento é curto e mede o que veio antes (ofício §3.1): é legítimo. O "about" depois de "give or take" é ressalva dobrada, mas é a do dossiê (±5 m = 16,4 ft). Fica;
  - **"the sonar"** é sujeito umas dez vezes, e "the <lugar> the sonar <found/mapped>" volta quatro vezes. É o protagonista de p3 e p6, e não andaime dêitico (ofício §3.6). Fica;
  - **"no fish lives much deeper"** (o fecho): "lives" é homógrafo (LIVZ, verbo; LYVZ, plural de *life*), mas o contexto de verbo é forte. Se a Sala gerar a amostra, vale pôr a 1ª frase do 29º parágrafo nela.

## ACHADOS

1. [MÉDIO · REDIZER · o termo técnico antes da glosa (ofício §3.3; voz §1, "todo termo técnico é definido na primeira vez que aparece")] "At the time, no sounding was known to have brought back a sample and a temperature from that deep." → "Sounding" (medida de profundidade com o peso no arame) entra aqui sem glosa, e a glosa só vem na frase seguinte, noutro parágrafo: "Its sounding there, the depth it measured,…". Dito, "no sounding was known to have brought back" se ouve como gerúndio de *sound* ("nada que soasse"), e quem não conhece o termo náutico perde a frase do recorde. A palavra entrou na rodada 1 (L04, DA-FONTE, a palavra do relatório de 1883) sem a troca conferir que a glosa ficava depois. → CONSERTO: "At the time, no ship was known to have brought back a sample and a temperature from that deep." O recorde continua o da amostra e da temperatura juntas, e "at the time" continua datando. A glosa do 5º parágrafo passa a ser a primeira vez do termo, como a voz §1 pede. A lente de fatos confere que "no ship" diz o mesmo que "no record is known of any sounding" (S11, l. 3516–3518): as sondagens de que o relatório fala são feitas de navio. → RAIZ: INSTRUÇÃO. A régua da lista (DA-FONTE que traz a palavra da fonte) não manda conferir se o termo técnico novo entra antes da glosa dele no roteiro.

2. [MÉDIO · REDIZER · o "that" demonstrativo que soa como conjunção (ofício §3.3)] "The agency says that points to an active force pulling down on the area." → Dito, "says that" é quase sempre "diz que". O ouvido espera uma oração ("says that [something]…"), recebe "points to" sem sujeito e tem de voltar para ler o "that" como demonstrativo ("isso aponta"). A voz não marca a diferença com acento. É a frase que pousa a pergunta da parte ("Why is the trench so deep?"). Ela entrou na rodada 1 (L10). → CONSERTO: "The agency says this points to an active force pulling down on the area." O número de palavras é o mesmo, e a fonte continua dita (S27: "which indicates the presence of an active downward force"). → RAIZ: PONTUAL.

3. [MÉDIO · REORDENAR · o verbo que soa como o substantivo do vídeo (ofício §3.3)] "Rotated blocks of rock under the trench point to a sinking floor." → "Point" é substantivo umas vinte vezes no roteiro ("the deepest point", "that point"), e aqui é verbo logo depois de "the trench". Dito, "under the trench point" se ouve como nome de lugar ("o ponto da fossa"), e "to a sinking floor" fica sem verbo. O "Rotated" no começo da frase ainda pode soar como verbo de uma oração sem sujeito. É a frase que dá a causa logo antes de "That is why the trench is so deep.". Ela entrou com o P01. → CONSERTO: "Under the trench, rotated blocks of rock point to a sinking floor." São as mesmas palavras. O "point to" fica, com o eco do "points to" da gravidade que o editor quis. → RAIZ: PONTUAL.

4. [LEVE · REDIZER · homógrafos que o ouvido do motor não pega (ofício §3.3)] Três verbos que a voz pode ler com a pronúncia de outra classe. O Whisper do motor transcreve a mesma grafia e não manda refazer (Notas, "O ouvido do motor não vê homógrafo"):
   - (a) gancho, 2º parágrafo: "In 1964, a French crew dove into the Puerto Rico Trench and reported a crowd of fish." → "dove" (DOHV, passado de *dive*) tem a mesma grafia que *dove* (DUHV, a pomba). Está nos primeiros 25 s do vídeo, e a amostra não tem a frase. → CONSERTO: "In 1964, a French crew descended into the Puerto Rico Trench and reported a crowd of fish." O número de palavras é o mesmo, e o gancho continua com 161 palavras e o "But" na 49. É a única troca dentro do gancho, que a rodada 1 pôs inteiro no NÃO TOCAR por ser o texto do plano. Se a Sala preferir a letra do plano, a frase entra na amostra, junto do pedido 1, e o Lucas ouve;
   - (b) p2, 2º parágrafo: "NOAA, the U.S. ocean and weather agency, records that in 1970 a net brought back a small cusk-eel." → Depois da vírgula, "agency, records" pode ser lido como o composto "agency records" (REC-ords, os registros da agência). O pedido 5 da amostra testa a frase. → CONSERTO: "NOAA, the U.S. ocean and weather agency, reports that in 1970 a net brought back a small cusk-eel." O verbo tem a mesma pronúncia como substantivo, e a atribuição é a mesma. A lente de fatos confere que "reports" serve à página da NOAA (L07);
   - (c) p3, 3º parágrafo: "To the USGS, that tilt records big vertical shifts in this part of the trench and in Puerto Rico itself." → "that tilt records" se lê também como "that" + "tilt records" (REC-ords). Em p1, "a record for the Atlantic" é substantivo, e a voz tem de trocar a tônica entre os dois. → CONSERTO: "To the USGS, that tilt reflects big vertical shifts in this part of the trench and in Puerto Rico itself." "Reflects" traduz o "manifestations of" da fonte (S28, l. 57) tão bem quanto "records", e não repete o "show"/"showed" das duas frases vizinhas.

   → RAIZ: INSTRUÇÃO. Em `marca/pronuncias.md`, "Leituras que a voz costuma errar", falta a linha dos homógrafos verbo/substantivo e passado/substantivo (dove, records, lives, lead, present…). No motor, o ouvido automático não os vê, e a folha de cada vídeo deveria listá-los como lista os nomes.

5. [LEVE · REDIZER · o possessivo que se prende ao sujeito (ofício §3.3)] "The Limiting Factor reached its bottom in 2019, and that's where the odd name comes from." → Em inglês, o "its" se prende primeiro ao sujeito da própria frase: dito, "the Limiting Factor reached its bottom" é "o submersível chegou ao próprio fundo". O ouvido se acerta pelo absurdo, mas é a frase que explica o nome, e logo depois vem outro "Its" ("Its neighbor, about 20 miles away,…"). → CONSERTO: "The Limiting Factor reached the bottom there in 2019, and that's where the odd name comes from." É uma palavra a mais. O "there" volta ao Factorian Deep da frase anterior, e o "Its neighbor" seguinte fica com ele. → RAIZ: PONTUAL.

## O QUE ESTÁ FORTE

- **A 1ª frase se fala de primeira e paga os dois títulos:** o lugar, o número, a ilha dos EUA e o Atlântico, com a inversão ("…lies the deepest point in the Atlantic Ocean") deixando o título para o fim, onde o ouvido guarda. Logo depois, a medida em frase curta ("It's more than five miles down.") e a imagem com número ("its top 1,500 feet would stick out of the water").
- **O "But" do gancho é limpo** ("But that's the Pacific, about 9,500 miles away."), e a pergunta é uma frase só, falável ("So what is really down there, and how did anyone find out?").
- **A glosa na oração em que o termo entra:**
  - "a French bathyscaphe, a deep-diving craft";
  - "snailfish, a family of fish";
  - "A cusk-eel is a fish shaped like an eel";
  - "multibeam sonar, a ship's sonar that maps the seafloor in a wide strip";
  - "giant slabs called plates";
  - "the exclusive economic zone, a band of sea where the U.S. controls the resources";
  - "Seabed 2030, the project to map the whole ocean floor by 2030".
  - A exceção é a A1.
- **As siglas:** "NOAA, the U.S. ocean and weather agency" na primeira vez, e "the U.S. Geological Survey" por extenso antes do primeiro "USGS". O IHO vai pelo nome inteiro, e o GEBCO não entra na voz.
- **A fonte dita antes do número ou da conclusão:**
  - "According to the USGS";
  - "By the agency's reconstruction";
  - "NOAA's tsunami database puts it at";
  - "Computer models put it at magnitude 8 or more";
  - "By the expedition's survey";
  - "By NOAA's estimate".
- **A conclusão com dono e limite, numa frase que se diz bem:** "It's a conclusion drawn from the count and the look, and the animals the French saw that day can't be checked again." E o fecho do parágrafo, "One of the five was Vescovo.", curto, no lugar certo.
- **A frase curta guardada para as viradas, sem rajada:**
  - "A sound could give a number. It couldn't show anyone what was down there.";
  - "Keep those fish in mind.";
  - "Neither could map the floor. That took a different kind of sonar.";
  - "That is why the trench is so deep.";
  - "The sonar settled that.".
- **As medidas:** só milhas e pés, com a ressalva na boca ("more than", "about", "nearly", "nine-tenths", "three-quarters of an inch"). Nunca duas medidas da mesma coisa na mesma frase. A disputa do Archimède vai em três frases curtas, que se ouvem como cuidado e não como dúvida.
- **As pessoas entram cada uma de um jeito:** "a Navy officer named Brownson", "under Captain Nares", "Victor Vescovo took a submersible…", "two scientists, Heather Stewart and Alan Jamieson", "a reporter on board". Não há fôrma de formulário.
- **O fecho** termina num lugar e numa borda ("sits right at that edge"), sem lista e sem repetir a pergunta. O ouvido reconhece o 27,500 do sonar no número da NOAA.

## NÃO TOCAR

- "About 83 miles off Puerto Rico, a U.S. island, lies the deepest point in the Atlantic Ocean.": a 1ª frase, que o portão confere. O risco do "U.S." fica com a amostra (pedido 1).
- "It's more than five miles down."
- "Stand Mount Everest on the bottom, and its top 1,500 feet would stick out of the water."
- "When you think "deepest ocean," you think Mariana. But that's the Pacific, about 9,500 miles away.": a forma da pauta §3, com o "But" na palavra 49 do teto de 50. Nenhuma palavra a mais antes dele.
- "So what is really down there, and how did anyone find out? You're at Alpha Point, and this is where the story of the bottom of the Atlantic begins."
- "Its sounding there, the depth it measured, came to about 23,000 feet.": com a A1, vira a primeira vez do termo, e a glosa já está nela.
- "A sound could give a number. It couldn't show anyone what was down there."
- "It went more than four miles down. The sources disagree on exactly how deep. It never reached the deepest point, though.": a forma do dossiê para a profundidade em disputa.
- "Keep those fish in mind."
- "That is why the trench is so deep.": o pouso da pergunta da parte. Com a A2 e a A3, ele fica com as duas frases que o sustentam ditas sem tropeço.
- "It wasn't in the trench."
- "The earthquake behind that wave struck the eastern part of this trench, far from its deepest point. Computer models put it at magnitude 8 or more."
- "By the expedition's survey, the deepest point of the Atlantic is about 27,500 feet down. Give or take about 16 feet."
- "More than three million people live in Puerto Rico."
- "When he climbed out, a reporter on board heard him say: "One down!""
- "In 2023, the International Hydrographic Organization recognized the Southern Ocean. It begins at 60 degrees south." e "Argentina, for one, disagrees."
- "It's a conclusion drawn from the count and the look, and the animals the French saw that day can't be checked again. One of the five was Vescovo."
- O fecho: "By NOAA's estimate, no fish lives much deeper than about 27,500 feet. The net that brought up the cusk-eel in 1970 had gone down nearly that far. The deepest point in the Atlantic, about 83 miles off Puerto Rico, sits right at that edge."

PADRÕES:
- **A palavra que o ouvido lê noutra classe.** O "that" demonstrativo que soa como conjunção (A2), o "point" verbo num roteiro em que "point" é substantivo (A3), os homógrafos dove e records (A4) e o "its" que se prende ao sujeito (A5). Na página, a sintaxe resolve. Dita, a voz não marca a classe, e no motor nem a escuta automática a vê.
- **A troca que muda a ordem em que o ouvinte aprende.** A palavra da fonte trazida por uma troca (L04) entrou um parágrafo antes da glosa dela (A1). Duas das três frases dos MÉDIOS são texto novo da rodada 1 ou do P01 (A2 e A3). A rodada de trocas precisa de uma passada de ouvido sobre as frases que ela mesma escreve.

## A rodada 1, comparada (feito depois de gravar o julgamento acima)

O laudo `qc-roteiro/locucao-r1.laudo.md` julgou `4694e58092c2` e deu 10 achados. Conferidos contra o texto de `04ae6bfbeb60`:
- **Resolvidos: 9 dos 10 inteiros, e o A6 em parte (2 dos 4 itens):**
  - A1, a rede que virava *garden path*: "records that in 1970 a net brought back a small cusk-eel" (L07; a fossa passou à frase do
    Australian Museum);
  - A2, os quatro pronomes: (a) "The wire came back up…" (L03), (b) "the agency's maps" (L12), (c) "The earthquake behind that wave"
    e (d) "call the wave the only known sign…" (L16 e L17). O "that wave" é a saída que a rodada 1 temia por dar nome novo ao mesmo
    objeto; ouvido agora, ele volta sem tropeço à frase do tsunami logo antes;
  - A3, a fila de medidas do parágrafo que paga o título: saíram os 95 % e os 250 pés (L24);
  - A4, a atribuição entalada: a frase virou duas ("The same 2019 study noted… It was deeper than…"), pelo conflito 15 da lista;
  - A5, os dois tópicos deslocados (a) e (b), na forma proposta;
  - A6 (a) "According to the USGS" (L10) e (c) "the ship Okeanos Explorer" (L20);
  - A7, "Those U.S. waters are the exclusive economic zone…", na forma proposta;
  - A8, "the official list of undersea features" no fecho de p6;
  - A9 (a) e (b), "roughly" no lugar de "about" depois de "along";
  - A10, "taken from a German research ship".
- **Não aplicados, por decisão da lista** (`_trabalho/lista-r1.md`, "Os achados que ficaram de fora"): A6 (b), "NOAA's tsunami
  database" (a troca criaria "its tsunami" em frases seguidas), e A6 (d), "By NOAA's estimate" no fecho (a forma da R32). As duas
  razões valem, e esta rodada não os reabre. O risco "Noah's" continua para a amostra: o pedido 7 da folha tem o "NOAA's tsunami
  database"; o "By NOAA's estimate" do fecho não está nela, e entra se a 1ª frase do 29º parágrafo for à amostra (Notas, "lives").
- **Abaixo da linha da rodada 1 que continuam no texto:** o *run-up* "up Puerto Rico's west coast", a frase de 28 palavras do USGS,
  o "left them to" e as aspas do "fish". Esta rodada os achou de novo na primeira passada, e de novo abaixo da linha. O par "far from
  its deepest point" e "a long way … of its deepest point" mudou de forma ("That's a long way east of its deepest point.") e não soa
  mais como repetição. O "trip" duplicado, o "from … from" e o "the French had counted" duas vezes continuam ou mudaram pouco, e
  esta rodada não os achou como tropeço.
- **O que é novo nesta rodada:** os três MÉDIOS saem de texto escrito depois da rodada 1. A A1 vem de uma troca da lista (L04), a
  A2 de outra (L10) e a A3 do P01. A A4 (c) também é do P01. A A4 (a) e (b) e a A5 estavam no texto de antes e escaparam à
  rodada 1.
