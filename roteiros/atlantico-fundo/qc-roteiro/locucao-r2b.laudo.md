# Laudo · crítico de locução (adaptado para en-US e TTS) · bancada final da rodada 2

Revisão julgada: `432dcb4041d4` · data-base 2026-10-26

NOTA: 8/10. O roteiro se grava de primeira quase inteiro: frases curtas (média de 12,7), um número por frase, os termos definidos numa oração na primeira vez, as siglas apresentadas antes de virar sigla, as atribuições antes do fato, e os três homógrafos da rodada anterior fora da voz. Sobram três lugares, dois deles no mesmo parágrafo de p3: uma palavra que o texto acabou de definir como outra coisa ("slab"), um "point" verbo que ainda se ouve como substantivo, e um intervalo de tempo ("eight years earlier") que se apoia num ano que a própria fonte de 1936 contradiz.

VEREDITO: RESSALVA. Nenhum achado GRAVE: pelo ofício (§6), o texto passa nesta lente. Os dois MÉDIOS valem a troca antes do portão "roteiro" do motor: o A1 é de fato (vai à lente de fatos), o A2 custa ao ouvinte o pouso da pergunta "Why is the trench so deep?". As três trocas, aplicadas juntas numa cópia, dão PASSA no `gate.mjs` (abaixo).

## Notas

- **O que foi julgado.** O texto falado de `roteiros/atlantico-fundo/roteiro-narrador.md`: sha256 `432dcb4041d4f0e31fab934bdd956370fca43cffcefe3d17e537b2af01f3dfb5`, 29 parágrafos, 160 frases, 2.026 palavras (≈ 11:01 a 184 palavras/min), média de 12,7 e maior frase de 28. O `gate.mjs` dá PASSA, sem problema, sem autoplágio e com todas as taxas abaixo do teto; o gancho tem 166 palavras até a assinatura e o "But" na palavra 49. A origem das frases foi lida em `roteiro-editor.md` (que cita `432dcb4041d4`); a pronúncia, em `pronuncia.md` (que cita `432dcb4041d4`); o dossiê, em `pautas/atlantico-fundo/fundamento.md`.
- **Como foi lido.** Como a voz do motor vai ler: um pedido por parágrafo, `eleven_v4` a ~184 palavras/min. Aspas, itálico, hífen e maiúscula não se ouvem, e os números só vão por extenso na cópia para a voz (`voz/texto-para-voz.md`, que a conversão para o motor lê; a folha de pronúncia, "O que a cópia para a voz vai trocar"). Os pedidos vão de 44 a 109 palavras (a regra é 40 a 110); os mais longos são o 2º do gancho (109) e o 2º de p7 (107), e os dois se leem sem frase acima de 27 palavras. **Os achados são da primeira passada, e este laudo foi gravado antes de ler o laudo `locucao-r2.laudo.md`.**
- **O que esta lente não refez.** A média, o teto de frase, a fila de datas, as vetadas, as taxas e o "não se diz" são do portão, e não foram recontados aqui. Fato e estrutura ficam com as outras lentes; o A1 é de fato porque é defeito real, e diz o que a lente de fatos confere.
- **Os alertas do portão**, na lente da voz: o "still" do gancho está no passado, preso a "a 2019 study" ("still had the Atlantic…"), e não soa como notícia do dia; os dois "never", os dois "first" e os três "Milwaukee Deep" se dizem sem tropeço. Todos já decididos na lista r2 ("Os alertas do portão").
- **O `--derivados`.** O `roteiro-editor.md` e a `pronuncia.md` citam `432dcb4041d4`. Os cinco laudos `-r2` (`clareza-r2`, `escuta-fria-r2`, `fatos-r2`, `locucao-r2`, `roteiro-r2`) citam `04ae6bfbeb60`, e o portão os confere (só tira da conta os que terminam em `-r1.laudo.md` ou `-antigo.laudo.md`): com `--derivados`, o portão sai 1 por eles até a Sala os renomear ou o portão os tirar da conta. Este laudo cita `432dcb4041d4`.
- **A folha de pronúncia** cobre todos os nomes que a voz diz (conferido nome a nome contra o texto de agora: os da tabela, os de risco baixo e os "Lidos sem folha"); nenhum nome falado sem linha. Nenhuma troca abaixo põe ou tira nome. O A1 muda uma frase que está, literal, no pedido 3 da amostra ("The trench itself had been found eight years earlier…"): se a troca entrar, a amostra se acerta com o sha novo (a folha se refaz de qualquer jeito). O A2 e o A3 são do 11º parágrafo, que a amostra não toca.
- **A chamada e o comentário** são só de tela (`marca/cta.md` §1 a §3). A inscrição fica na pausa depois de "Soon after, a problem with the robot cut this one short." (≈ 52 %), e a reserva, "They think quakes like that come thousands of years apart.", fecha p4: as duas são frases curtas, sem nada que a tela tenha de cobrir. O comentário entra sobre as três frases do fecho, curtas e sem "here" nem "this line". Nenhuma troca abaixo mexe nelas.
- **As trocas, provadas numa cópia.** As três trocas, aplicadas juntas numa cópia fora do canal (no scratchpad da sessão), dão no `gate.mjs`: PASSA, exit 0, 2.026 palavras (saldo 0: +1 no A1, 0 no A2, −1 no A3), 160 frases, média 12,7, maior 28; o gancho intacto (166 palavras, "But" na 49); os mesmos 8 alertas; autoplágio vazio.
- **Abaixo da linha** (não são achados nem seguram nada; ficam a critério de quem escreve):
  - p4, "Its tsunami ran as high as 20 feet up Puerto Rico's west coast.": "up … coast" é também "costa acima". O "as high as" segura a leitura de altura. Já ficou abaixo da linha nas rodadas anteriores; fica.
  - p4, "The USGS says those walls show many old underwater landslides, and that the risk of a tsunami set off by a landslide like those appears to be high.": 28 palavras, com o verbo ("appears") chegando depois de um sujeito de 13. Lê-se num fôlego, com as vírgulas no lugar. Já ficou abaixo da linha; fica.
  - p8, "spread about as thickly as the fish the crew had reported": "spread about" é também o verbo frasal ("espalhados por aí"), e o ouvido pode perder o hedge. A densidade continua a mesma nas duas leituras, e a forma é a do F38/L64. Se alguém mexer na frase, "spread roughly as thickly" guarda o hedge.
  - p3, "It ends about 13,000 feet below the surface.": "below sea level" seria o paralelo exato da frase anterior e da fonte (a cota −4.000 m). "The surface" se entende como a do mar; a escolha está registrada no editor (o "below it" do plano era ambíguo).
  - o gancho, "The first person to reach the deepest point itself got there only in December 2018.": por um instante, "the deepest point itself got there" soa como oração; o "there" a desfaz. Já decidido; fica.
  - p7, "reached the bottom there in 2019, and that's where the odd name comes from": o "where" logo depois de "there" puxa a leitura de lugar; "Limiting Factor" → "Factorian" a desfaz.
  - as aspas de "the "fish" of 1964" não se ouvem; a frase funciona sem elas ("concluded that the fish of 1964 were sea cucumbers"). Já decidido.
  - "the 1964 crew" (4 vezes, desde a r2) e "the 1964 crew's fish": na cópia, "the nineteen sixty-four crew", que se ouve como ano. A folha já pede a conferência de ouvido.

## ACHADOS

**A1** · [MÉDIO] · ENFRAQUECER · p1, 5º parágrafo
- Trecho: "had been found eight years earlier"
- Problema: o intervalo se apoia em 1875 (F22, C11; S12, o IHR de 1936: "On 26th March 1875, H.M.S. Challenger…", e "obtained eight years previously by the Challenger"; S07 e S02 repetem 1875). Mas o próprio IHR de 1936 diz que o navio estava "cruising between St. Thomas, Virgin Islands and the Bermudas", o trecho do começo da expedição de 1873–76 (a travessia de St. Thomas às Bermudas é de março de 1873); em março de 1875 o Challenger estava no Pacífico ocidental (a sondagem do Challenger Deep, de 23/03/1875, é a data mais conhecida da expedição). O 26 de março cabe em 1873, não em 1875, e o intervalo até 27/01/1883 seria de uns dez anos, não oito. **Não conferido em cópia do disco**: o *Narrative* da expedição ("Challenger during the Years 1873–76", nas referências de Stewart & Jamieson 2019, l. 1485 da cópia) não está nas cópias locais, e as duas fontes modernas (S02 e o resumo da Endeavour 2020, S07) têm Jamieson como autor e podem repetir o ano de 1936. Se o ano for 1873, a voz diz oito onde são dez, e a tela mostra 1875 três vezes (no editor: o alfinete "1875 · HMS CHALLENGER", a tela "23,250 FT · 3,875 FATHOMS · 1875" e o marcador "1875 · 23,250 FT").
- Troca: "had been found about a decade earlier"
- "About a decade" vale para os oito anos das fontes do disco e para os dez do *Narrative*: nenhum número, data ou nome novo na voz; +1 palavra. Se a Sala preferir não ancorar o tempo, CORTAR: "had been found earlier". A lente de fatos confere o ano; a tela (os três "1875" do editor), o F22 e o C11 do dossiê vão a ela e à Sala, não a esta lente.
- RAIZ: PONTUAL (um ano de 1936 repetido por duas fontes modernas).

**A2** · [MÉDIO] · REDIZER · p3, 11º parágrafo
- Trecho: "a tilted slab of limestone starts"
- Problema: uns 30 s antes, o 10º parágrafo definiu "slabs" como as placas ("Earth's outer shell is made of giant slabs called plates.") e disse "with only a little of one sinking under the other". Ouvido em seguida, "a tilted slab" é a placa afundando inclinada: o ouvinte monta uma placa que começa acima do nível do mar e termina 13.000 pés abaixo, e a prova do USGS (uma plataforma que já foi plana e hoje está inclinada, isto é, o movimento vertical que a frase seguinte nomeia) se perde. É a mesma palavra para duas coisas no parágrafo que pousa o "Why is the trench so deep?", e o ouvinte a frio perdeu justamente a laje (EF-05). "Platform" é a palavra da fonte ("a tilted carbonate platform", S28) e a alternativa que o próprio F44 dá ("a tilted platform of carbonate rock"), e já diz ao ouvido que a camada foi plana; "tilted" e "that tilt" fazem o resto.
- Troca: "a tilted platform of limestone starts"
- Saldo 0 palavra. A ESCALA: a linha da frase no editor (`roteiro-editor.md`, a da L11) e o F44 › `como_dizer` dizem "slab"; a ilustração ("a laje") e as telas não mudam. A frase das placas ("giant slabs called plates") fica (decisão (b) da Sala).
- RAIZ: PONTUAL. O tipo serve à régua do roteirista: palavra que o texto definiu como termo não volta, logo depois, nomeando outra coisa.

**A3** · [LEVE] · REDIZER · p3, 11º parágrafo
- Trecho: "rotated blocks of rock point to a sinking floor"
- Problema: a L51 tirou "under the trench point", mas o verbo "point" continua logo depois de um substantivo: "of rock point" se ouve também como um lugar ("Rock Point"), num roteiro em que "point" é substantivo umas vinte vezes ("the deepest point"). Com blocos girados, "point to" ainda tem a leitura literal (os blocos apontam para o fundo). E o 10º parágrafo, uns 30 s antes, acabou de dizer "this points to an active force". "Indicate" é o verbo da fonte (S28, l. 25: "rotated blocks of the NOAM plate that indicate trench subsidence"), não tem leitura de substantivo e não repete o "points to".
- Troca: "rotated blocks of rock indicate a sinking floor"
- −1 palavra. O pouso seguinte ("That, the agency suggests, is why the trench is so deep.") fica como está.
- O editor quis o eco (a linha da frase: "'point to' é o 'indicate', o mesmo verbo da gravidade no parágrafo anterior"); a troca o desfaz em troca do ouvido. Se a Sala preferir o eco, a frase fica, e o risco vai à amostra da folha (que hoje não tem o 11º parágrafo).
- RAIZ: PONTUAL.

Os 2 padrões mais vistos: (1) **a palavra que muda de papel** pouco depois de o ouvido aprendê-la: "slab" definido como placa e reusado para a laje (A2); "point" substantivo vinte vezes e verbo uma (A3). (2) **o número que se apoia numa fonte só, repetida** pelas outras: o 1875 do IHR de 1936 (A1).

## O QUE ESTÁ FORTE

- **O gancho se fala de primeira.** "About 83 miles off Puerto Rico, a U.S. island, lies the deepest point in the Atlantic Ocean." dá o lugar, o número e os dois títulos numa frase; o Everest vira imagem ("its top 1,500 feet would stick out of the water"); o "But" cai na palavra 49; a pergunta dupla é curta. O "dove" saiu ("descended"), e a tripulação vai sem nacionalidade sem perder o batiscafo francês.
- **As siglas e os termos na primeira vez.** "NOAA, the U.S. ocean and weather agency"; "the U.S. Geological Survey" por extenso antes de "the USGS", e "the agency" alivia a sigla; "Its sounding there, the depth it measured,"; "multibeam sonar, a ship's sonar that maps the seafloor in a wide strip"; "a French bathyscaphe, a deep-diving craft"; "A cusk-eel is a fish shaped like an eel"; "the exclusive economic zone, a band of sea where the U.S. controls the resources"; "Seabed 2030, the project to map the whole ocean floor by 2030".
- **Os homógrafos fora.** "dove", "agency, records" e "that tilt records" saíram na r2; "says this points to" não deixa mais o "that" ambíguo. Nenhum homógrafo novo entrou.
- **Os números um por frase**, arredondados e com o hedge ("more than five miles", "about 27,500 feet", "give or take about 16 feet", "within about 7 feet"); as medidas em fila (pés, milhas) nunca dividem uma frase, e os pares que o v4 pode ler como quantidade ("between 1381 and 1391", "In 2002 and 2003", "the 1964 crew") estão na folha.
- **A frase curta nas viradas**, sem rajada: "A sound could give a number. It couldn't show anyone what was down there.", "Keep those fish in mind.", "Neither could map the floor.", "The sonar settled that.", "One of the five was Vescovo."
- **As atribuições antes do fato**: "According to the USGS", "By the agency's reconstruction", "By the expedition's survey", "By NOAA's estimate", e o pouso "That, the agency suggests, is why the trench is so deep.", cujas vírgulas a voz respeita como parêntese.
- **O mesmo referente para a tripulação de 1964** em todo o texto ("its crew", "the 1964 crew's fish", "that crew", "the 1964 crew", "the crew") e para os autores de 2019 (apresentados uma vez, retomados pelos sobrenomes).
- **O fecho**: três frases curtas, que terminam num lugar ("sits right at that edge"), sem repetir a pergunta nem responder em lista.

## NÃO TOCAR

- O gancho inteiro (os dois primeiros parágrafos), com a 1ª frase, o "But", a pergunta e a assinatura "You're at Alpha Point, and this is where the story of the bottom of the Atlantic begins." (decisão 5 da Sala).
- "Earth's outer shell is made of giant slabs called plates." e "A cusk-eel is a fish shaped like an eel" (decisão (b)). O A2 muda a outra "slab", não esta.
- "That, the agency suggests, is why the trench is so deep." (decisão 1).
- "Give or take about 16 feet.": o fragmento curto que mede o que veio antes (ofício §3, item 1); ele fecha o arco.
- "When he climbed out, a reporter on board heard him say: "One down!"": o "heard him say:" marca a citação que a voz não marca.
- O bloco do 60°S na ordem da L59, com as ressalvas da Sala ("By that line", "no political meaning", "not every country uses it", "Argentina, for one, disagrees.").
- "Soon after, a problem with the robot cut this one short." e "They think quakes like that come thousands of years apart.": o lugar da inscrição e a reserva.
- "Keep those fish in mind." e a ponte "Off Puerto Rico, the 1964 crew's fish were waiting for a second look." (decisão 4).
- As três frases do fecho: o comentário entra sobre elas.

## Comparação com a rodada anterior (feita depois de gravar o que está acima)

O laudo `locucao-r2.laudo.md` (sobre `04ae6bfbeb60`) foi lido só depois que os achados acima estavam gravados. A decisão de cada item está em `_trabalho/lista-r2.md` e em `_trabalho/aplicado-r2.md`.

- **Resolvidos no texto de hoje: os 5 achados da `-r2`, com os 7 itens.**
  - A1, "no sounding was known" antes da glosa: virou "no one was known to have brought back…" (L46; a lista preferiu "no one" ao "no ship" que a lente propunha, conflito 2). A 1ª vez de "sounding" é a da Challenger, com a glosa.
  - A2, "says that points": virou "says this points" (L49).
  - A3, "Rotated blocks of rock under the trench point to": reordenado, na forma proposta (L51). O nome de lugar "trench point" saiu; o resto do mesmo risco (o "point" verbo depois de "rock") é o A3 de hoje, LEVE.
  - A4 (a), "dove": virou "descended", dentro da troca da tripulação (L44). A4 (b) "records" → "reports" (L48). A4 (c) "records" → "reflects" (L50).
  - A5, "reached its bottom": virou "The expedition's sub, the Limiting Factor, reached the bottom there" (L60, junto com a clareza A8).
- **A raiz de INSTRUÇÃO da `-r2`** (a linha dos homógrafos em `marca/pronuncias.md`) não é desta lista: a marca não se edita aqui. A folha do vídeo 5 já registra os três que saíram ("Lidos sem folha").
- **O lugar da inscrição** que a `-r2` sugeria ("To see the trench's walls, you need a camera down there.") saiu com a L53, por decisão da Sala (item 3). O lugar de agora (a pausa depois de "Soon after, a problem with the robot cut this one short.") também é calmo, e a reserva fecha p4.
- **Abaixo da linha da `-r2` que continuam no texto**, e de novo abaixo da linha hoje: o gancho com 2019 e 2018 (a `-r2` propunha "didn't get there until"; hoje, o mesmo trecho pelo "itself got there"), a frase de 28 palavras do USGS, o "up … coast" e as aspas do "fish". O "Give or take about 16 feet." está hoje no NÃO TOCAR, pelo mesmo motivo da `-r2`. O "left them to", o "lives" do fecho e o "the sonar" como protagonista também continuam; esta passada não os achou como tropeço.
- **O que é novo nesta rodada:** os três achados de hoje estavam no texto que a `-r2` julgou e escaparam a ela. O A1 ("eight years earlier") está no texto desde a 1ª versão, e nenhuma lente o pegou: as fontes do disco dizem todas 1875, e a contradição só aparece lendo o IHR de 1936 contra o itinerário da expedição. O A2 ("a tilted slab", desde a 1ª versão; a L11 da r1 só trocou o "found" pela reconstrução, C27) só se ouve com a frase das placas logo antes. O A3 é o resto do A3 da `-r2`, depois da troca.
