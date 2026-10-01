# Juneau — o que a linha leva para art_direction, conducting e screen_text (01/10/2026)

Juntado pelo Claude central a partir de três fontes:
- o relato do `mapista` sobre a regra "Estrada não se confunde com fronteira" (identidade §6, Lucas, 30/09/2026);
- o relato do `montador` na revisão do espelho depois da caça 2 e da 6ª passada do acervo aberto;
- o piloto (s03 e s09 aprovadas).

Cada item diz quem o pega. Nada aqui é decisão nova: as decisões estão na marca, com a data e a fala do Lucas.

## As referências do piloto
- **Mapa:** a s03, com a divisa de 5 px a 70 % sobre 12 px, rótulos fora das linhas, a malha em `--rede-cor` e a
  legenda das cores no canto de cima (Border, Roads, Juneau's roads, cada item com a sua linha; identidade §6,
  "A legenda das cores", Lucas, 01/10/2026). O ROADS saiu.
- **Mesa:** a s09, feltro sob a luz, com a textura por baixo de tudo (identidade §5; `marca/tokens.css`, "A MESA").

## A regra das linhas nas outras cenas (levantamento do mapista, sem edição)

**s03, nos documentos:**
- `diretor-de-arte`: a técnica da s03 no conceito ainda diz `--neutro`. Falta pôr a legenda das cores e a régua em
  4,465. Toda cena de mapa com mais de um tipo de linha (s44, s50…) reserva um elemento do teto para a legenda.
- `regente`: o ABOUT 43 MILES passa de 3,567 s ("about") para 4,465 s ("miles"), e a linha da fonte vai junto.
- `redator-de-tela`: a legenda da s03 entra no `textos-tela` ("Border", "Roads", "Juneau's roads", nos tempos
  que o mapista gravar na `s03.html`). A grafia é dele.

**Estradas que vão a `--rede-cor`:**
- s10: o traço Glenn, Glennallen–Tok e Alaska Highway (hoje `--tinta` a 70 %, uma linha branca) e a rede. A legenda
  entra se a cena tiver mais de um tipo de linha.
- s15: a estrada Anchorage–Willow. O traço fino das feições do sítio e a seta curta também não podem ser brancos nem
  cinza.
- s44: a Haines Highway, a Klondike Highway e a Alaska Highway, trecho do Yukon.
- s33: já está em `--contraparte`. Só falta escrever `--rede-cor` no conceito.

**Rótulo de linha que entra antes da linha:**
- s15: ABOUT 70 MILES entra em "about" (155,467 s), antes de a estrada começar (155,78 s).
- s59: ABOUT 43 MILES entra em "about", antes de a estrada se refazer (612,97 s). Use a âncora da s03 (meio da
  estrada, dx −130).
- s44: o rótulo da Alaska Highway entra com o começo da linha. Confira também o do Taku River.
- s12 e s13: o 30 MILES entra com o traço, e deve esperar os círculos.

**Decisões pendentes, do `diretor-de-arte` (e do Lucas, se a marca não responder):**
- s12 e s13: os raios de 30 milhas estão em `--tinta` a 35 % tracejado, que parece fronteira disputada. A marca não diz
  a cor de um raio.
- s44: os corredores tracejados não têm cor escrita, e não podem ser brancos nem cinza.
- s48 e s50: a estrada tracejada da margem leste vai em `--destaque` se for a de Juneau que continua, ou em
  `--rede-cor` se não for.
- s50: o pontilhado da balsa é um tipo novo de linha e entra na legenda ("Ferry", grafia do redator). O inset da s57
  segue a s50.

## A revisão do espelho (montador, 01/10)
- 8 planos trocaram vídeo por foto (s01 p2, s04 p1 e p2, s14 p1 e p2, s24 p2, s47 p1, s51 p1). Só a s04 p2 vai impressa
  sobre a mesa; as outras vão em tela cheia.
- 10 lacunas viraram mapa (s21, s24 p1, s33 p1 e p2, s42, s43 p1, s44 p5, s51 p2, s52 p2, s59 p1).
- **Os mapas:** os arquivos de cena com mapa passaram de 12 para 17, e seriam 13 com as duas fusões possíveis (s42+s43+s44
  e s50+s51+s52), que ficam para o `diretor-de-arte`. A s21 pode repetir o último quadro da s15.
- **s40, CONFLITO para o `regente`:** o clipe de Anchorage tem 9,833 s e a cena pede 13,334 s. O clipe roda nos planos
  1 e 2, até 427,3 s, e o plano 3 vai para a folha do HB 3, com a troca em "As of September". Sem laço, sem câmera
  lenta e sem quadro congelado.
- **s47:** a foto fica 6,4 s, acima do teto de 6 s de foto parada, e pede o movimento lento.
- **O maior trecho sem foto nem vídeo real** subiu de 49,9 s para 76,5 s (de 422,7 a 499,2 s).
- **Pedido ao `pesquisa-geo`:** a rota da balsa estadual no Lynn Canal (Auke Bay → Haines → Skagway), do
  OpenStreetMap, para a s52 p2. Sem ela, o plano fica só com os pontos e o rótulo da água.
- **Notas para a arte:**
  - s40: nenhum zoom no alto das torres;
  - s28: a bandeirinha da direita sai do quadro se o corte da cúpula terminar antes de x ≈ 4550;
  - s43 p2, s44 p1 e s59 p2: a câmera "Juneau–estrada–anel" da s03, em lat 58.7560.

## Custo
- O render de mapa custa pedidos na MapTiler, e o custo de uma cena sai da leitura do painel de 02/10
  (`maptiler-gasto.md`). A pergunta do montador ao Lucas, se o gasto liberado em 28/09 cobre as 5 cenas de mapa
  novas, vai com esse número.
