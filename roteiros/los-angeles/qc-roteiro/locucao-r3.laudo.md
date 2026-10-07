# Laudo · crítico de locução (en-US, voz sintética) · rodada r3 (só as três mudanças)

Revisão julgada: `65939ca2b6ea` · data-base 2026-10-07

NOTA: 8.4/10. A mudança do gancho e a do p4 se gravam de primeira. Em p5, a oração nova entra entre o sujeito e o
pronome e põe um passado na frente do "it runs". A frase pede uma decisão na cabine e uma volta do ouvido.

VEREDITO: RESSALVA. Não há GRAVE, e pelo ofício (§6) o texto passa nesta lente. Sobram um MÉDIO e um LEVE, os dois
criados pela mudança (2), nas duas frases novas de p5. As duas trocas, aplicadas juntas numa cópia, PASSAM no `gate.mjs`
(ver as notas). Recomendo aplicar o MÉDIO antes de refazer a cópia para a voz.

## Notas

- **O que foi julgado.** O texto falado de `roteiros/los-angeles/_trabalho/roteiro-r3.md`. Pelo `gate.mjs`: sha256
  `65939ca2b6ea37cc7afb5967550be3f0336079af7369c6948334f4acafde7d3a`, exit 0, PASSA. São 2.062 palavras, 32 parágrafos e
  153 frases, com média de 13,5 e maior frase de 33 palavras. No gancho, 140 palavras até a assinatura e o "But" na palavra
  32. Saem os mesmos 3 alertas já aceitos (TEU ×2 e "monopoly").
- **O diff, conferido.** Rodei `diff` contra `roteiro-narrador.md`, que dá `a7a8615a572a` e 2.053 palavras pelo mesmo
  portão. Mudam o título, a nota do topo e o comentário do gancho, que não se falam, e as três mudanças. Nada mais.
- **Como foi lido.** Como a voz vai ler: um pedido por parágrafo, eleven_v4, a ~184 palavras/min. Aspas não se ouvem, e
  os números vão por extenso só na cópia para a voz. Li o texto inteiro e julguei cada mudança no contexto. Os achados são
  da primeira passada.
- **As trocas, provadas em cópia.** Fiz as cópias no scratchpad da sessão, fora do canal. Cada trecho abaixo casa uma vez
  só no arquivo.
  - Com as duas trocas: PASSA, exit 0, 2.063 palavras (+1), 153 frases, maior frase de 33 e o gancho intacto (140 e
    "But" na 32). Saem os mesmos 3 alertas, e o sha256 é `a51ff6a2d704…`.
  - Só com o achado 1: PASSA, sha256 `feac8036dabd…`.
- **O que esta lente não refez.** Ficam com o portão a média, o teto de frase, as datas seguidas e as palavras vetadas.
  Fato e estrutura ficam com as outras lentes. O que a bancada final aprovou no resto do texto não se reabriu.
- **Pronúncia** (`roteiros/los-angeles/pronuncia.md`). Não são achados.
  - A mudança (2) tira do texto falado os últimos Torrance, Gardena, Lomita e Carson, que o p7 já tinha perdido. Com isso
    sai da folha o único risco médio dos quatro, Gardena ("gar-DAY-nuh"). As palavras novas (outline, neighbors,
    towns/cities, turned out, grew, both ends) não pedem folha.
  - A folha continua na revisão `822cb8e37301…`, e a frase 6 da amostra cita a frase que saiu. A folha e a amostra se
    refazem sobre o sha final.
  - Vale pôr na amostra o 2º parágrafo do gancho inteiro, num pedido só. Agora "In nineteen oh-six, it stopped…" e
    "Until nineteen oh-nine, …" vêm em frases seguidas, e a assinatura fecha o parágrafo.
  - Vale pôr também a frase de p5 já com o conserto do achado 1.
  - Opcional: "Between fifteen and twenty thousand people turned out, according to the Los Angeles Times.", para ouvir se
    a voz dá a tônica em OUT e não deixa o "out" subindo como frase inacabada.
- **Cópia para a voz.** `roteiros/los-angeles/voz/texto-para-voz.md` ainda traz o gancho de 1906 (L3), o "watched" (L35)
  e o p5 antigo (L47), e se refaz sobre o sha final. Na cópia, "In 1906, it stopped" vira "In nineteen oh-six, it
  stopped".
- **Considerado e mantido.**
  - **"Now look at the city's outline." sem "today".** O presente de "runs" e o contraste com "In 1906, it stopped" já
    marcam o tempo, e a imagem é o contorno de hoje. Com "today" aqui, o "Look at the outline today." de p7 deixaria de
    ser a volta ao gancho e viraria eco literal.
  - **"In 1906, it stopped… Until 1909, Los Angeles had…"**: duas frases seguidas que abrem com data. Fica dentro do
    teto da `marca/voz.md` §1, que é de duas. O par de anos é o contraste do gancho, e "oh-six" e "oh-nine" se
    distinguem bem.
  - **"half a mile wide, for about nine miles"**: quatro /aɪ/ (mile, wide, nine, miles) em seis palavras. Soa como
    assonância leve e não trava. É a mesma forma que a bancada aprovou com "fifteen".
  - **"between its neighbors" seguido de "two other cities"**: o ouvido poderia juntar os vizinhos de hoje com as duas
    cidades de 1906. Quem separa é o "In 1906" no começo da frase, e o mapa dessa frase mostra a ponta de 1906 (clareza
    final). As duas lentes já tinham julgado a variante sem defeito de locução.
  - **"turned out"** não tem achado.
    - "people turned out" é colocação fixa para público com número. Com a vírgula e o "according to", o ouvido fecha o
      sentido de "compareceram", e não o de "it turned out (that)".
    - Não ecoa nada no p4: é o único "out" do parágrafo.
    - E diz o que a página do Times sustenta, a multidão do meio-dia, sem afirmar que ela viu a pedra cair antes das 11 h.
  - **"grew around both ends" em p5 e "has grown around both ends" em p7**: o eco é de propósito. Agora o p7 paga o p5,
    e a passagem de quinze para nove milhas se ouve explicada duas vezes.

## As três mudanças, uma a uma

| Mudança | Onde | Estado nesta lente |
|---|---|---|
| (1) O gancho no contorno de hoje | 2º parágrafo do gancho | **Limpa.** O ritmo é de 6, 23, 15, 10, 7 e 23 palavras: curta, longa, média, curta, a pergunta e a assinatura. O presente de "runs" amarra a pergunta "So why is Los Angeles shaped like this?" ao contorno que está na tela, no mesmo tempo verbal. O "In 1906" virou a virada no meio do parágrafo, e o gancho perdeu um "fifteen", o que deixa um a menos para o ouvido (sobram o do público de p4, o de p5 e o da orla de p6). |
| (2) p5: "before the city grew around both ends" e "The towns that line it today" | 4º parágrafo de p5 | **Dois achados** (abaixo). A ideia está certa: a oração explica a passagem de quinze para nove milhas, e a frase curta depois da longa segura a cadência. O defeito está em como a oração e o "towns" se encaixam no que vem antes e depois. |
| (3) p4: "watched" → "turned out" | 1º parágrafo de p4 | **Limpa** (ver "Considerado e mantido"). |

## ACHADOS

1. **[MÉDIO · sujeito concorrente e tempo verbal trocado (ofício §3.2 e §3.3) · criado pela mudança (2)]**
   "before the city grew around both ends, it runs about fifteen miles"

   **Por quê:**
   - **O pronome.** A oração nova entra entre o antecedente e o pronome. Antes, o "it" vinha logo depois de "The thin
     part is about half a mile wide.". Agora o substantivo mais perto é "the city", sujeito de uma oração anteposta, e
     em inglês o "it" da oração principal depois de "Before X grew…," se prende a X por padrão. O ouvido monta "a cidade
     corre quinze milhas de norte a sul", o que é plausível para Los Angeles. Só "all of it across county land" desfaz o
     engano, e aí o ouvido volta.
   - **O tempo.** "before the city grew …, it runs" põe o passado de uma oração temporal na frente de um presente.
     Sozinho, o presente de mapa ("On the outline of 1906, it runs") se aceitava. Com o "before … grew" na frente, soa
     como erro de concordância de tempos. Um locutor humano pararia para decidir entre "runs" e "ran", que é o critério
     do ofício (§6). A voz sintética não decide: lê plano, e o ouvinte ouve o choque.
   - **Por que "ran".** O passado também serve à clareza. O gancho diz "runs … nine" (hoje), e p5 passa a dizer "ran …
     fifteen" (1906): o tempo do verbo marca o contorno, que é o que a mudança (2) quer.
   - **Por que "the strip".** É o nome que o ouvinte guardou do gancho para essa mesma medida ("a strip about half a mile
     wide, for about nine miles"), e o parágrafo seguinte diz "So the strip is a legal handshake". "The thin part" seria
     a terceira vez em três frases.

   **CONSERTO:** "On the outline of 1906, before the city grew around both ends, the strip ran about fifteen miles from
   north to south, all of it across county land." (+1 palavra; a frase fica com 28)

   **RAIZ:** PONTUAL. A troca da clareza enxertou uma oração na frente de um pronome sem dar nome de novo ao sujeito.

2. **[LEVE · palavra que muda de sentido em sequência (ofício §3.3) · criado pela mudança (2)]**
   "The towns that line it today weren't cities yet."

   **Por quê:**
   - A frase opõe "towns" a "cities": aqui, "town" quer dizer "lugar que ainda não era cidade".
   - No resto do roteiro, "town" é sempre a cidade incorporada do porto:
     - "Now, whose town was that? San Pedro was a city of its own by 1890." (p4);
     - "the harbor towns' boundary lines. The towns still had to say yes." (p6, uns 26 s depois desta frase);
     - "a city nineteen miles from the harbor towns" (a coda).
   - Logo depois de ouvir que "towns … weren't cities", o ouvido encontra "The towns still had to say yes" e "each of
     the three cities voted". O sentido se recupera, porque p4 já disse que San Pedro e Wilmington eram cidades, mas a
     palavra muda de lado em menos de meio minuto.
   - "Cities" tira o contraste e casa com o p7, "between other cities and county land".
   - O "cities … cities" é o próprio sentido da frase (hoje são cidades; em 1906, ainda não), e a voz o leva como
     figura, com a tônica no "yet".
   - Para a lente de fatos, não é achado desta: o sujeito "cities" deixa de fora a terra do condado, que continua sem ser
     cidade. Fica só o que o dossiê dá como incorporado depois de 1906: Gardena, Carson, Torrance e Lomita (os vizinhos
     de hoje; T13).

   **CONSERTO:** "The cities that line it today weren't cities yet." (0 palavras)

   **RAIZ:** PONTUAL.

## O QUE ESTÁ FORTE

- **O gancho de hoje se fala melhor que o de 1906 no ponto da pergunta.** "Los Angeles runs south…" e "So why is Los
  Angeles shaped like this?" estão no mesmo presente, e a pergunta sai do que o espectador vê. A virada para 1906 cai no
  meio do parágrafo, com a data na frente, e não precisa de mais nada para se ouvir.
- **"turned out"** se diz sem esforço: é uma sílaba a mais que "watched", e não mexe no fôlego da frase (14 palavras) nem
  na âncora da inscrição ("Stone kept coming, barge after barge, for thirteen years.").
- **Em p5, a oração nova fecha o arco das nove milhas.** Com o conserto do achado 1, a sequência fica "runs … nine"
  (gancho), "ran … fifteen, before the city grew around both ends" (p5) e "has grown around both ends, and about nine miles
  of it still run thin" (p7). São três tempos verbais para três momentos, que o ouvido segue sem o mapa.
- **A frase curta depois da longa** ("…weren't cities yet.") segura a cadência de p5, que antes terminava numa lista de
  quatro nomes.

## NÃO TOCAR

- "Now look at the city's outline."
- "To reach that water, Los Angeles runs south through a strip about half a mile wide, for about nine miles, between its
  neighbors."
- "In 1906, it stopped at the edge of two other cities, short of the water. Until 1909, Los Angeles had no coastline of its
  own."
- "So why is Los Angeles shaped like this?" e a assinatura "You're at Alpha Point, and this is where the story of the strip
  that took Los Angeles to its port begins."
- "Between fifteen and twenty thousand people turned out, according to the Los Angeles Times."
- "On the outline of 1906, before the city grew around both ends,": a oração fica, porque é ela que explica a passagem de
  quinze para nove. Só o sujeito e o verbo que vêm depois mudam (achado 1).
- "On today's outline, the city has grown around both ends, and about nine miles of it still run thin, between other cities
  and county land." (p7)
- O resto do texto, como os laudos `*-final.laudo.md` o deixaram, com o NÃO TOCAR deles.

PADRÕES:
- **Oração enxertada na frente de um pronome.** A oração nova traz um sujeito que rouba o "it" seguinte, e o tempo dela
  contamina o verbo principal. Ao enxertar uma oração antes de um pronome, dê nome de novo ao sujeito e confira o tempo do
  verbo que vem depois.
- **Palavra que muda de lado.** Um contraste novo ("towns" contra "cities") dá outro sentido a uma palavra que o roteiro
  usa no sentido oposto em outras frases. Antes de opor duas palavras, procure as outras ocorrências delas no texto.
