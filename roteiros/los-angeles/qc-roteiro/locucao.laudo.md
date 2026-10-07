# Laudo · crítico de locução (adaptado para en-US e TTS) · rodada 1

Revisão julgada: `822cb8e37301` · data-base 2026-10-07

NOTA: 7.5/10. O roteiro se fala bem quase inteiro (frases curtas, o termo definido numa oração, a frase curta guardada para as viradas), mas uma palavra citada inverte o sentido no ouvido, e em mais três lugares a voz não marca o que a página marca.

VEREDITO: FAIL. O achado GRAVE segura o texto (ofício §6). As trocas são pontuais e cabem numa rodada; aplicadas juntas numa cópia, o `gate.mjs` PASSA (abaixo).

## Notas

- **O que foi julgado.** O texto falado de `roteiros/los-angeles/roteiro-narrador.md` (sha256 `822cb8e37301beacc503a5820695fc79a447983299c70a3afe6fe4ad35653bfd`, 33 parágrafos, 2.139 palavras, PASSA no `gate.mjs` com os 3 alertas já aceitos) e a variante `variantes/gancho-hoje.md`, montada em cópia com o corpo igual (sha256 `9615d5050908…`, o mesmo que a variante registra). A variante não tem defeito próprio de locução: o primeiro parágrafo é o mesmo, e o segundo muda o tempo ("runs", "In 1906, it stopped") sem tropeço.
- **Como foi lido.** Como a voz vai ler: um pedido por parágrafo, eleven_v4 a ~184 palavras/min, stability 0.5, sem aspas, itálico nem maiúscula audíveis, com os números por extenso só na cópia para a voz. Os achados são da primeira passada.
- **O que esta lente não refez.** A média, o teto de frase, as datas seguidas e as palavras vetadas são do portão, e não foram recontados aqui. Fato e estrutura também ficam com as outras lentes. Onde uma troca encosta em fato, o achado diz o que a lente de fatos confere.
- **As trocas, provadas em cópia.** As 10 trocas abaixo, aplicadas juntas numa cópia fora do canal, dão no `gate.mjs`: PASSA, 2.142 palavras, maior frase 33, gancho intacto (140 palavras até a assinatura, "But" na palavra 32), os mesmos 3 alertas, e todo parágrafo entre 40 e 110 palavras (o maior, o 2º de p3, com 101).
- **Para a folha de pronúncia e a amostra** (não são achados):
  - a frase 1 da amostra é o teste certo do San Pedro: no texto, ele vem logo depois de "San Francisco and San Diego", que puxam a leitura espanhola;
  - vale pôr na amostra um placar com "to two hundred" (por exemplo, "thirteen thousand six hundred sixty-one to two hundred twenty-one"). Dito, "to two" pode embolar em "two two". Se embolar, os três placares com "to two hundred" (213 to 203, 13,661 to 221 e 726 to 227) passam a "against" na cópia para a voz;
  - vale pôr na amostra a assinatura inteira. O tema tem nove palavras, e é preciso ouvir se o "begins" fecha o arco ou cai como apêndice depois de "to its port";
  - se A9 entrar, o "Times's" sai da folha.
- **Abaixo da linha.** Não são achados nem seguram nada. Ficam ao critério do dono:
  - "an open anchorage, wide open to the southeast" (o "open" duas vezes em cinco palavras) → "an open anchorage, exposed to the southeast";
  - "that board reported: "this Board reports in favor of San Pedro."" ("reported/reports" em eco, e o "this Board" que, dito, parece apontar para a tela) → "that board reported "in favor of San Pedro."";
  - "the old Rattlesnake Island: made land." (se a voz pausar pouco nos dois-pontos, "Island made land" vira sujeito e verbo) → "the old Rattlesnake Island, and became new land.";
  - "But the thin part is less than half of that; the rest is a wide block up north." ("half" três vezes em três frases, com dois sentidos: "and a half", "less than half", "half a mile") → "But most of that is a wide block up north." (a lente de fatos confere: o bloco tem 9,96 dos 18,64 mi²);
  - "and then Wilmington's." (o possessivo solto depois da citação jurídica) → "and then the line of Wilmington.".

## ACHADOS

1. [GRAVE · locucao / aspas que a voz não marca (ofício §3.3)] "The man who wrote "never" had designed the jetty, backed the breakwater, and would sit on the first board that picked San Pedro." → A voz não lê aspas. Dita, a frase fica "the man who wrote never had designed the jetty", e "never had designed" é advérbio com verbo: o ouvido entende que ele NUNCA desenhou o molhe, o contrário do que a frase diz. É justo a frase que sustenta T06, a de que o "never" não foi engano bobo. O terceiro membro ("and would sit on the first board") também cai sob o "never" que o ouvido montou. Um apresentador humano pararia aqui para decidir como dizer a palavra entre aspas, o que reprova pelo critério do §6. A vírgula depois de "never" fecha a palavra citada antes do verbo. "That man" evita um terceiro "Mendell" no mesmo pedido. → CONSERTO: "That man, the one who wrote "never," had designed the jetty, backed the breakwater, and would sit on the first board that picked San Pedro." (Se o dono preferir o nome: "Mendell, who wrote "never," had designed the jetty, backed the breakwater, and would sit on the first board that picked San Pedro.") → RAIZ: INSTRUÇÃO. Falta em `marca/voz.md` §1, "Como ele explica", a regra para dizer uma palavra como palavra. Proposta: "a palavra citada como palavra fecha com vírgula ou leva 'his'/'the word' antes, e nunca vem colada a um verbo".

2. [MÉDIO · locucao / nome que o ouvido confunde com outro lugar (ofício §3.3)] "In 1891, the Southern Pacific began a pier there, at Port Los Angeles, by the account of Charles Willard, a Chamber of Commerce man on San Pedro's side." → Na página, a maiúscula mostra que Port Los Angeles é o nome do píer da ferrovia em Santa Monica. Dito, soa como "the Port of Los Angeles", o porto de San Pedro de que o vídeo fala desde o gancho e que p7 nomeia ("the Port of Los Angeles handled…"). O ouvinte entende que a ferrovia construiu no Porto de Los Angeles, na baía errada. Dois parágrafos depois, "Willard's side called Port Los Angeles a "monopoly harbor"" chega ao ouvido como o lado de San Pedro chamando o próprio porto de San Pedro de porto de monopólio. Isso inverte quem acusou quem, justo no trecho em que cada acusação tem dono (T16). A frase do píer ainda tem 28 palavras, com a credencial de Willard entalada no fim. → CONSERTO, três trocas no mesmo trecho:
   - (a) "In 1891, the Southern Pacific began a pier there, at a spot it called Port Los Angeles. That is the account of Charles Willard, a Chamber of Commerce man on San Pedro's side.";
   - (b) "The federal board of 1897 measured it at" → "The federal board of 1897 measured the pier at" (com a frase nova no meio, o "it" ficaria preso a "account");
   - (c) "Willard's side called Port Los Angeles a "monopoly harbor"" → "Willard's side called Santa Monica a "monopoly harbor"".

   A lente de fatos confere que o nome era do Southern Pacific ("it called"). → RAIZ: PONTUAL.

3. [MÉDIO · locucao / aspas que a voz não marca (ofício §3.3)] "So that is what "never" measured: not the bay, the estuary." → Sem aspas audíveis, "that is what never measured" soa como frase quebrada, com o advérbio no lugar do sujeito. E é a frase que diz ao espectador o que o "never" mediu, a chave de p2. O possessivo obriga a ler "never" como substantivo e não muda o ritmo. → CONSERTO: "So that is what his "never" measured: not the bay, the estuary." → RAIZ: INSTRUÇÃO (a mesma de 1).

4. [MÉDIO · locucao / citação que soa como fala do narrador (ofício §3.3)] "And still: "It is a small estuary and can never be made a harbor for deep-water ships."" → Os dois-pontos e as aspas são o único sinal de que a frase é do Mendell. Dito, sai "And still, it is a small estuary and can never be made a harbor for deep-water ships": o narrador, no presente, afirma que o estuário nunca será porto, o contrário da tese do vídeo. O verbo de atribuição colado na citação resolve, e "still" passa a querer dizer "mesmo assim, ele escreveu". → CONSERTO: "And still he wrote: "It is a small estuary and can never be made a harbor for deep-water ships."" → RAIZ: PONTUAL (da mesma família de 1 e 3).

5. [MÉDIO · fôlego / apostos empilhados sem verbo (ofício §3.1 e §3.2)] "In July 1871, the Army approved a plan by Mendell, then a major: a jetty, a wall of timber and rock, more than a mile long, from Rattlesnake Island to Deadman's Island." → A frase tem 32 palavras, uns 10,5 s. Depois de "then a major" vêm, em fila, quatro pedaços sem verbo ("a jetty", "a wall of timber and rock", "more than a mile long", "from … to …"): aposto dentro de aposto, a marca da compressão. Se a voz pausar pouco nos dois-pontos, "then a major: a jetty" ainda pode soar como "a major jetty". Um ponto e um "It was" dão espinha à definição, sem cortar nada. → CONSERTO: "In July 1871, the Army approved a plan by Mendell, then a major. It was a jetty, a wall of timber and rock more than a mile long, from Rattlesnake Island to Deadman's Island." → RAIZ: PONTUAL.

6. [MÉDIO · números em fila e fôlego (ofício §3.2 e §3.4)] "counted six votes of margin on election night, and ten in the official count: 213 to 203, out of 416." → A frase inteira tem 32 palavras e fecha com cinco números seguidos (six, ten, 213, 203 e 416). Na cópia para a voz, isso vira umas 15 palavras só de número ("two hundred thirteen to two hundred three, out of four hundred sixteen"). O que o ouvido precisa guardar são os dez votos, e eles chegam soterrados. "Six votes of margin" ainda é decalque de "seis votos de margem": o americano diz "a margin of six votes". Partir em duas frases dá ao placar uma frase só dele. → CONSERTO: "counted a margin of six votes on election night. The official count made it ten: 213 to 203, out of 416." → RAIZ: PONTUAL.

7. [LEVE · tique na costura das partes (ofício §3.6)] "The wall came first." → Três vezes, a ponte que fecha uma parte e a frase que abre a seguinte dizem a mesma coisa, na mesma fôrma, com só a pausa de parágrafo (~0,47 s) no meio. No ouvido, soa como a voz se repetindo:
   - (a) de p3 para p4: "First the wall. Then the question of whose town it was in." e, logo depois, "The wall came first.";
   - (b) de p2 para p3: "So the map now has two waters on it…" e, uns 15 s depois, "Now the map has a choice on it: two bays." É o mesmo andaime, "the map has … on it", duas vezes;
   - (c) de p6 para p7: "And the thread is still there." e, duas frases depois, "And the strip is still there, still about half a mile wide.", seguido de "still run thin". São quatro "still" em uns 12 s, gastos antes da coda, que vive dessa palavra ("The strip is still on the map.").

   → CONSERTO:
   - (a) apagar "The wall came first.", e p4 abre em "On April 26, 1899, San Pedro held a Free Harbor Jubilee.";
   - (b) "Now the map has a choice on it: two bays." → "That decision came down to two bays: San Pedro and Santa Monica.";
   - (c) apagar "And the thread is still there." (p6 fecha em "…and a harbor at the bottom."); "And the strip is still there, still about half a mile wide." → "And the strip is still there, about half a mile wide."; "about nine miles of it still run thin" → "about nine miles of it run thin".

   → RAIZ: INSTRUÇÃO. No `_trabalho/plano-final.json`, a ponte de fim de parte e a abertura da parte seguinte saem como peças separadas, e falta a regra "a abertura não repete a ponte".

8. [LEVE · expressão de dois sentidos (ofício §3.3)] "the railroad's chief engineer, Hood, called the choice business: anyone who relied on San Pedro alone to move freight from train to ship "would go to the wall."" → Três problemas pesam juntos numa frase de 33 palavras, a maior do texto (empatada):
   - "go to the wall" (ir à falência) cai no meio do motivo da parede. O ouvinte acabou de ouvir "a wall out in the bay", "needed a wall" e "a wall needs a decision", e logo vai ouvir "First the wall": o ouvido pega a parede literal;
   - no inglês americano de hoje, "go to the wall" também quer dizer "lutar até o fim" ("go to the wall for someone");
   - a glosa curta resolve os dois e prende o sentido de 1892. Para a frase caber no teto, sai "to move freight from train to ship", que a folha da transcrição pode mostrar. Se o dono quiser manter o frete, a glosa fica, e a frase se parte nos dois-pontos.

   → CONSERTO: "the railroad's chief engineer, Hood, called the choice business: anyone who relied on San Pedro alone "would go to the wall," that is, be ruined." (a frase inteira fica com 30 palavras) → RAIZ: PONTUAL.

9. [LEVE · referente e palavra de dois sentidos (ofício §3.3)] "Between fifteen and twenty thousand people watched, by the Times's count." → É a primeira vez que o vídeo cita "the Times", e o americano ouve "the Times" como o New York Times. A contagem fica com o dono errado, e justo com um jornal que o dossiê marca como parte (T16). O nome inteiro só chega em p5, e "Times's count" ainda é um embolado de sibilantes ("TYMZ-iz kount"). No mesmo pedido, em "the Army got leave to extend the wall", com "Army" logo antes, "leave" soa como licença de soldado antes de soar como permissão, e o ouvido só se corrige no "to extend". → CONSERTO: "Between fifteen and twenty thousand people watched, according to the Los Angeles Times." No mesmo parágrafo, "the Army got leave to extend the wall" → "the Army got approval to extend the wall". Opcional, em p5: "the Los Angeles Times, which had campaigned for annexation" → "the Times, which had campaigned for annexation", porque o nome inteiro já foi dito. → RAIZ: PONTUAL.

10. [LEVE · coordenação que engana o ouvido (ofício §3.3)] "in a bay that wrecked ships and an estuary a rowboat could barely cross." → Dito, "a bay that wrecked ships and an estuary" se ouve primeiro como uma baía que destruía navios e um estuário. O ouvido só reparte a frase quando chega a "a rowboat", e essa é a frase que fecha p1. A vírgula e o "in" repetido avisam o ouvido de que começa outro lugar. → CONSERTO: "in a bay that wrecked ships, and in an estuary a rowboat could barely cross." → RAIZ: PONTUAL.

## O QUE ESTÁ FORTE

- **O gancho se fala de primeira, nos dois contornos.** O "But" cai na palavra 32, a citação do "never" fecha o primeiro pedido, e a pergunta curta vem logo antes da assinatura. No gancho, a citação é indireta ("wrote that it"), e por isso se ouve como do engenheiro.
- **A definição numa oração, no ponto em que o termo entra, dita como fala:**
  - "the ebb tide, the water draining out of the estuary";
  - "consolidate, that is, merge into one";
  - "contiguous: only if they touched";
  - "A free harbor meant one open to competition between railroads, not one free of charge.";
  - "A TEU is a twenty-foot container unit, a measure of volume, not a count of boxes.".
- **As elipses curtas que fecham o arco, como o ofício pede (§3.1):**
  - "Wilmington, where the harbor is today, is about nineteen.";
  - "By 1888, eleven.";
  - "Squeezed into one channel, it dug.";
  - "Four votes to one.";
  - "The one, Richard Morgan, filed his minority report two weeks later.".
- **A frase curta vai para as viradas, e não em rajada pelo texto:** o fecho de p5 ("So this is the answer to the shape. Not a road to the sea. A legal handshake…") e a coda.
- **As guardas de voz que o roteirista já pôs:**
  - "four votes to one", nunca "four to one";
  - "Colonel" por extenso;
  - nenhuma inicial para soletrar (Hood, Mendell);
  - "Then came the letter." quebrando a fila de datas;
  - os números pequenos já por extenso no texto.
- **A briga sem vilão se ouve sem juiz:** "This video doesn't settle that. The board didn't either."
- **Imagens que o ouvido carrega mesmo sem mapa:** "Two shapes that don't touch can't merge; a thin bridge of land makes them touch." e "The automatic barge failed, and men pushed the stone off by hand."
- **A conta do "never" se fecha na voz:** "Mendell expected eighteen or twenty feet for the estuary. The port's Main Channel is fifty-three."

## NÃO TOCAR

- "But in 1886, an Army engineer looked at the shallow estuary there and wrote that it "can never be made a harbor for deep-water ships."": o 2º tempo, nos dois contornos.
- "So why is Los Angeles shaped like this? You're at Alpha Point, and this is where the story of the strip that took Los Angeles to its port begins.": a forma que o portão confere. O arco do "begins" se confere na amostra, não no texto.
- "Four votes to one." e "four votes to one" em p7.
- "Squeezed into one channel, it dug. By 1881, the bar had ten feet at low tide. By 1888, eleven."
- "Then came the letter."
- "Stone kept coming, barge after barge, for thirteen years.": a âncora da chamada de inscrição.
- "So this is the answer to the shape. Not a road to the sea. A legal handshake, drawn half a mile wide, so that one city could touch two others. A handshake is not a merger. That took three more years."
- "To merge with San Pedro and Wilmington, Los Angeles had to touch them.": a forma aprovada de T08.
- "would probably eventuate in a serious monopoly": a palavra rara é do Morgan, e o "probably" fica na voz (fundamento).
- "Mendell expected eighteen or twenty feet for the estuary. The port's Main Channel is fifty-three."
- "The strip is still on the map. So is the water.": a coda e a âncora do comentário. É por ela que A7 tira os "still" de antes.
- O "touch" repetido de p4 a p5: é a espinha da tese. Trocá-lo por sinônimo, só para variar, enfraquece a conta que o ouvido faz.

PADRÕES:
- **O que só a página marca.** As aspas de "never", os dois-pontos de "And still:", o "this Board" lido do documento e a maiúscula que separa Port Los Angeles do porto de hoje. Dito, tudo isso vira fala do narrador ou outro lugar (A1 a A4).
- **A cauda empilhada.** A frase guarda para o fim a credencial, a medida ou o placar, em fila de apostos ou de números: o molhe de 1871, o píer de Willard, a apuração de 1906, Hood. O conserto é sempre um ponto e um sujeito novo, não um corte (A2, A5, A6 e A8).
