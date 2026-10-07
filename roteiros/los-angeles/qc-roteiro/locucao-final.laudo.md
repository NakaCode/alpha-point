# Laudo · crítico de locução (adaptado para en-US e TTS) · rodada 2 (final)

Revisão julgada: `4902fe99688b` · data-base 2026-10-07

NOTA: 8.9/10. Os dez achados da rodada 1 chegaram resolvidos ao ouvido, o GRAVE inclusive. O texto se grava de primeira. Sobram dois LEVE novos, os dois criados pela própria rodada 1: um referente que perdeu a armação e dois números colados numa definição.

VEREDITO: PASS. Não há achado GRAVE nem MÉDIO (ofício §6). As duas trocas LEVE são de custo zero, e numa cópia, aplicadas juntas, o `gate.mjs` PASSA (ver as notas). Recomendo aplicá-las, mas nenhuma segura o texto.

## Notas

- **O que foi julgado.** O texto falado de `roteiros/los-angeles/roteiro-narrador.md`, com sha256 `4902fe99688bd24675424efecb0fceecf730ca4d3a0e600f42dafbdfa62efc96` pelo `gate.mjs` (exit 0, PASSA): 32 parágrafos, 2.063 palavras, 153 frases, maior frase de 33 palavras, gancho com 140 palavras até a assinatura e o "But" na palavra 32, e os 3 alertas já aceitos (TEU ×2, "monopoly"). Julguei também a variante `variantes/gancho-hoje.md`. Montei de novo a cópia com o corpo de hoje, e o portão PASSA com sha256 `019c5f927f17…`, o mesmo que `_trabalho/aplicado-r1.md` registra. A variante não tem defeito próprio de locução, nem antes nem agora.
- **Como foi lido.** Como a voz vai ler: um pedido por parágrafo, eleven_v4, a ~184 palavras/min. Aspas, itálico e maiúscula não se ouvem, e os números só vão por extenso na cópia para a voz. Li o texto inteiro, e não só as 35 frases da lista. Os achados são da primeira passada.
- **O que esta lente não refez.** Média, teto de frase, datas seguidas e palavras vetadas são do portão. Fato e estrutura são das outras lentes.
- **As trocas, provadas em cópia.** Apliquei os 2 achados abaixo numa cópia no scratchpad da sessão, fora do canal, e o `gate.mjs` deu: PASSA, exit 0, 2.064 palavras, 153 frases, maior frase 33, gancho intacto (140 palavras e o "But" na 32), os mesmos 3 alertas, sha256 `e2a113d6c3ec…`. Cada trecho casa uma vez no arquivo. A variante não é tocada por nenhum dos dois.
- **A pontuação que segura o sentido tem de chegar à cópia para a voz.** Três consertos da rodada 1 dependem de pontuação ou de palavra curta. A cópia pode tirar as aspas, mas não isto:
  - a vírgula depois de "never" em `That man, the one who wrote "never," had designed`;
  - o "his" em `what his "never" measured`;
  - o "he wrote:" em `And still he wrote:`.
  Sem a vírgula, o ouvido volta a montar "never had designed", o GRAVE da rodada 1.
- **Para a folha de pronúncia e a amostra.** Não são achados.
  - `roteiros/los-angeles/pronuncia.md` ainda está na revisão `822cb8e37301…`. A lista-r1 já dizia que a folha se refaz sobre o sha novo, e isso não foi feito.
  - Das 7 frases da amostra, 5 citam texto que saiu:
    - a 1: "about six hundred miles apart" e "wide open to the southeast";
    - a 3: "then a major: a jetty";
    - a 4: "on the last board" e "Port Los Angeles" sem o dono;
    - a 5: "by the Times's count";
    - a 7: a definição antiga de TEU.
  - Na folha, saem o "Times's" (L18) e a draga "the San Pedro" (L21). O "Corps" cai de 4 para 3.
  - Na lista de votos da cópia para a voz, saem os placares 6,612–914 e 13,661–221, o "out of 416" e "in layers: 1850, 1906, 1909".
  - O teste do "to two hundred" continua valendo, agora para dois placares: "two hundred thirteen to two hundred three" e "seven hundred twenty-six to two hundred twenty-seven". Se embolar, os dois passam a "against" na cópia.
  - Vale pôr na amostra:
    - "Wilmington voted on August fourth: one hundred seven to sixty-one.", porque o ordinal da data encosta no placar;
    - "The legal description follows the boundary line of said City of San Pedro, and then Wilmington's.", porque sem aspas audíveis é preciso ouvir se a voz lê o "said" jurídico como verbo;
    - a assinatura inteira, como na rodada 1.
  - Se A2 não for aplicado, a frase do TEU também vai à amostra.
- **Para a cópia para a voz** (pontuação, nenhuma palavra muda):
  - "in March 1871 Congress put" → "in March eighteen seventy-one, Congress put", para a voz não ler "seventy-one Congress" como um nome só;
  - "they answered San Pedro" → "they answered: San Pedro", para não soar "responderam a San Pedro".
  Os dois trechos já estavam na revisão anterior.
- **Para a lente de fatos (não é achado de locução).** O L16 pôs o porto de águas profundas "more than twenty miles from the Plaza" (5:41). O ouvido ouve a mesma baía a "nineteen miles away" em p4 (6:43) e "a city nineteen miles from that harbor" na coda (10:53). A lente de fatos já aceitou o 19 da coda como "o porto inteiro" (F152, "Não peço troca"). Registro só que quem presta atenção ouve duas distâncias. O mapa, mostrando Wilmington e o porto externo, desfaz isso.
- **Considerado e mantido.**
  - **"worthy of improvement," though he questioned whether an artificial harbor there was worth it.** O eco worthy/worth é o sentido da frase (merecia a obra, mas a conta talvez não fechasse), e a voz o leva.
  - **"Now" e "Look at"**, cinco vezes cada. Já estavam na revisão anterior. É o andaime da persona que abre o mapa na mesa, e cai a uma vez a cada dois minutos.
- **Abaixo da linha**, os mesmos da rodada 1, que a lista não aplicou. Não são achados e ficam a critério do dono:
  - "that board reported: "this Board reports in favor of San Pedro."";
  - "the old Rattlesnake Island: made land.";
  - "and then Wilmington's.".

## Os achados da rodada 1, um a um

| Rodada 1 | Gravidade | Como está hoje | Estado |
|---|---|---|---|
| A1 · "The man who wrote "never" had designed…" | GRAVE | "That man, the one who wrote "never," had designed the jetty, backed the breakwater, and would sit on the first board that picked San Pedro." (L10) | **Resolvido.** A vírgula fecha a palavra citada antes do verbo. |
| A2 · Port Los Angeles soando como o porto de hoje | MÉDIO | "The spot was called Port Los Angeles. Despite the name, it is not today's port." (L12), "A later federal report measured the pier" (L12) e "the railroad's Port Los Angeles" (L15) | **Resolvido**, com outra forma: a glosa em frase própria e o dono no nome. O nome fica, porque a acusação de Willard era mesmo sobre Port Los Angeles. |
| A3 · "So that is what "never" measured" | MÉDIO | "So that is what his "never" measured: not the bay, the estuary." (L08) | **Resolvido.** |
| A4 · "And still: "It is a small estuary…"" | MÉDIO | "And still he wrote: "It is a small estuary…"" (L07) | **Resolvido.** A citação tem dono, e o narrador não a afirma. |
| A5 · os apostos empilhados do molhe | MÉDIO | "…then a major. It was a jetty, a wall of timber and rock more than a mile long, from Rattlesnake Island to Deadman's Island." (L04) | **Resolvido.** |
| A6 · cinco números na cauda da apuração de 1906 | MÉDIO | "In the territory, the margin was six votes on election night, and ten in the official count: 213 to 203." (L23) | **Resolvido.** A frase caiu de 32 para 20 palavras, sem o "out of 416" e sem o decalque "votes of margin". |
| A7 · as pontes que se repetem nas costuras | LEVE | (a) a ponte de p3 virou "That gap is what the strip of 1906 would cross." (L17); (b) o parágrafo das "two waters" saiu (L11); (c) "And the thread is still there." saiu (L31) e "still about half a mile wide" perdeu o "still" (L32) | **Resolvido.** O "still run thin" ficou por decisão da lista. Hoje são três "still" nos últimos 90 s, e a coda recupera o peso. Mas o (a) e o (b) tiraram a armação de "The wall": ver o achado A1 abaixo. |
| A8 · "would go to the wall" | LEVE | "…"would go to the wall." That meant going broke." (L13) | **Resolvido.** A glosa veio em frase própria, e o frete ficou. |
| A9 · "by the Times's count" e "got leave" | LEVE | "according to the Los Angeles Times" (L18) e "the Army got approval" (L19) | **Resolvido.** |
| A10 · "a bay that wrecked ships and an estuary…" | LEVE | "in a bay that wrecked ships, and in a shallow estuary." (L03) | **Resolvido.** |
| Abaixo da linha · "wide open" | — | "exposed to the southeast and south" (L02) | Aplicado. |
| Abaixo da linha · "half" três vezes | — | "more than eighteen square miles" (L24) | Aplicado em parte. Sobram dois "half" em duas frases, o que basta. |
| Abaixo da linha · "this Board reports", "made land", "Wilmington's" | — | Iguais. | Não aplicados. Continuam abaixo da linha. |

## ACHADOS

1. [LEVE · referente que perdeu a armação (ofício §3.3) · novo, criado pelos itens L11 e L17 da rodada 1] "The wall came first." → Na revisão anterior, esta abertura de p4 vinha armada: "an open bay that needed a wall. And a wall needs a decision about where." e "First the wall." A rodada 1 tirou as duas frases, e com razão. Hoje, "The wall came first." (≈5:48) fica longe do que o explica:
   - o último "wall" com sentido de quebra-mar foi "a wall out in the bay" (≈3:36), 2 min antes;
   - p2 também chama o molhe de 1871 de "a wall of timber and rock";
   - o último "wall" que o ouvido guardou é o de Hood (≈4:36), "would go to the wall. That meant going broke.".

   O espectador fica uns 10 s sem saber qual parede é, até "the first barge of rock". O nome já definido em p2 devolve o referente e mantém a batida curta de quatro palavras, que a clareza elogiou como ponte. Com o nome aqui, o "extend the wall" (≈6:12) e o "before the wall was done" de p6 voltam a ter a quem se prender. → CONSERTO: "The breakwater came first." → RAIZ: PONTUAL. O padrão é o do Juneau: a troca se conferiu contra a frase que substitui, não contra a vizinha que se apoiava nela. Ver os PADRÕES.

2. [LEVE · número colado em número (ofício §3.4) · novo, criado pelo item L34 da rodada 1] "A TEU is the space of one twenty-foot container; a forty-foot box counts as two." → A definição nova está certa e resolve o MÉDIO da clareza. Mas "one twenty-foot" põe dois numerais seguidos. É o lugar em que um locutor humano pararia para decidir: tônica no "one" e micro-pausa. A voz sintética não decide. Dito plano, "one twenty-foot container" pode soar "one-twenty-foot", um contêiner de 120 pés, justo na frase que define a sigla. O "forty-foot … two" da segunda metade conserta a conta, mas só depois, e numa definição. "A single" mantém o sentido e tira o número da frente. → CONSERTO: "A TEU is the space of a single twenty-foot container; a forty-foot box counts as two." (+1 palavra) → RAIZ: PONTUAL.

## O QUE ESTÁ FORTE

- **Os consertos da rodada 1 entraram limpos no ouvido.** Nenhuma frase trocada criou fôlego curto, cauda empilhada ou fragmento sem espinha. As 35 trocas, lidas em voz alta, juntam-se ao texto como se sempre tivessem estado lá. Os dois LEVE acima vêm da vizinhança das trocas, não das trocas em si.
- **O arco do "never" se ouve inteiro, sem aspas**, porque a palavra citada tem armação audível nas três vezes:
  - "wrote that it "can never be made…"" no gancho;
  - "And still he wrote:";
  - "his "never"" e "the one who wrote "never,"".

  A dúvida de Mendell (L09) entra sem quebrar a frase.
- **Port Los Angeles agora se separa do porto de hoje de ouvido**: "The spot was called Port Los Angeles. Despite the name, it is not today's port." Daí em diante, "the railroad's Port Los Angeles" já não inverte quem acusou quem.
- **A apuração de 1906 virou uma frase que se ouve**:
  - a atribuição vem antes e cobre os três números ("The tallies come from the Los Angeles Times, which had campaigned for annexation.");
  - a cidade vem em razão, sem placar ("more than seven to one");
  - a margem vem em 20 palavras, com o dez fechando.
- **A definição numa oração, dita como fala**: "drawing … meaning they sat that deep in the water", "the ebb tide, the water draining out of the estuary", "consolidate, that is, merge into one", "contiguous: only if they touched", "A free harbor meant one open to competition between railroads, not one free of charge." e "That meant going broke.".
- **As elipses curtas nas viradas** (ofício §3.1):
  - "By 1888, eleven.";
  - "Squeezed into one channel, it dug.";
  - "Four votes to one.";
  - "And not in Los Angeles.";
  - "Now the strip itself.";
  - "A handshake is not a merger."
- **A cadência de p3**, o trecho mais denso, alterna bem: frase longa, glosa curta, e o fecho do monopólio em 5 e 4 palavras.
- **A briga sem juiz se ouve sem juiz**: "This video doesn't settle that. The board didn't either."
- **A coda se paga na voz**: "Mendell expected eighteen or twenty feet for the estuary. The port's Main Channel is fifty-three." e "The strip is still on the map. So is the water.", agora com os "still" de antes gastos só o necessário.

## NÃO TOCAR

- O gancho nos dois contornos, com o 2º tempo "But in 1886, an Army engineer looked at the shallow estuary there and wrote that it "can never be made a harbor for deep-water ships."" e a assinatura "You're at Alpha Point, and this is where the story of the strip that took Los Angeles to its port begins.". O arco do "begins" se confere na amostra, não no texto.
- "That man, the one who wrote "never," had designed the jetty, backed the breakwater, and would sit on the first board that picked San Pedro.": a vírgula depois de "never" é estrutural. Vale também na cópia para a voz.
- "So that is what his "never" measured: not the bay, the estuary." e "And still he wrote:".
- "In between came the letter.": quebra a fila de datas e agora diz a verdade.
- "Squeezed into one channel, it dug. By 1881, the bar had ten feet at low tide. By 1888, eleven."
- "The spot was called Port Los Angeles. Despite the name, it is not today's port."
- "That meant going broke."
- "Four votes to one. The one, Richard Morgan, filed his minority report two weeks later."
- "would probably eventuate in a serious monopoly": a palavra rara é do Morgan, e o "probably" fica na voz.
- "The second board had said the same as the first.": a reserva da chamada de inscrição.
- "Stone kept coming, barge after barge, for thirteen years.": a âncora da chamada de inscrição. Ela continua depois de "The breakwater came first.", se A1 for aplicado.
- "To merge with San Pedro and Wilmington, Los Angeles had to touch them." e o "touch" repetido de p4 a p5: é a espinha da tese.
- "Two shapes that don't touch can't merge; a thin bridge of land makes them touch."
- "A handshake is not a merger. That took almost three more years."
- "The tallies come from the Los Angeles Times, which had campaigned for annexation. Inside the city it was easy, more than seven to one."
- "Mendell expected eighteen or twenty feet for the estuary. The port's Main Channel is fifty-three."
- "The strip is still on the map. So is the water.": a coda.

PADRÕES:
- **O corte que tira a armação deixa órfã a referência seguinte.** A rodada 1 tirou, com razão, duas pontes que repetiam ("two waters… a wall needs a decision" e "First the wall."). Mas o "The wall" de p4 se apoiava nelas (A1). É o mesmo padrão do Juneau, rodada 6: a troca se confere contra a frase que substitui, e não contra a vizinha de depois. A conferência que falta à lista fechada: ao cortar uma frase, procurar a próxima menção de cada substantivo que ela plantou.
- **Número colado em número.** Na página, "one twenty-foot" se lê sem esforço. Na voz, dois numerais seguidos pedem uma decisão de tônica que a voz sintética não toma (A2). O mesmo risco mora na cópia para a voz, quando os algarismos viram palavra: "August fourth: one hundred seven" e "two hundred thirteen to two hundred three". Por isso esses vão à amostra.
