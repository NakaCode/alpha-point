# Miniatura do vídeo 2, rodada 2 · 09/10/2026

**Por quê.** Nas primeiras ~4 h, a publicada ("FOR A PORT") teve 236 impressões, 0,9 % de cliques e 3 visualizações. O
Lucas: "Nossa thumbnail de Los Angeles está meio fraca". Com 236 impressões, 0,9 % são uns 2 cliques: é cedo e pouco para
cravar, mas vale testar.

**O que se mediu antes de desenhar:**
- vidIQ (`score_thumbnail`, 5 créditos): **81 de 100**. O ponto fraco é o enquadramento ("Crop tighter on the subject").
- A faixa tem ~0,9 km de largura no polígono do Census. Na publicada, isso dá ~15 px no palco de 2560, e 1 px na lateral
  de 168 × 94: o que o título pergunta ("shaped like this") some no tamanho em que o feed mostra.
- As miniaturas de mapa que estouraram em canais pequenos (Kallixa, 41× a média; Geo Data Guy, 12×) usam uma forma só,
  grande, de cor chapada e fundo calmo.
- Gasto do vidIQ nesta rodada: 15 créditos (`score_thumbnail`, uma busca e `similar_thumbnails`).

**As variantes** (`variantes-base.py` faz as bases; `miniatura-<X>.html` põe o texto; a geometria é a do Census, e a faixa
ganha só um halo claro por baixo do laranja):

| | Quadro | Base | Texto |
|---|---|---|---|
| A | a cidade inteira, de perto | terra lisa | ON PURPOSE |
| B | a faixa e o porto; o resto da cidade em laranja claro | terra lisa cinza | HALF A MILE WIDE |
| C | como a A | relevo da rodada 1 | ON PURPOSE, na caixa |
| D | como a B | relevo da rodada 1 | HALF A MILE WIDE, na caixa |

**A banca 1** (três espectadores americanos a frio, em Sonnet, sem contexto, com a ordem embaralhada; e uma lente de marca
e fatos, em Opus). Os três puseram na mesma ordem: **B > a publicada > C > A**.
- "ON PURPOSE" saiu vago para os três ("on purpose what?").
- A lente pediu: o halo da A e da C menor (r 16 → 8, para não virar "estrada", e o roteiro diz "The strip was never a road
  to the sea"); a seta da B longe do filete leste; o resto da cidade na cor da cidade, e não num cinza que passa por
  outra cidade; o mar mais claro que o feed escuro.
- Os fatos conferem: "about half a mile wide" está no roteiro em cinco lugares (0,9 km ≈ 0,56 mi no Census), e o propósito
  da faixa ("drawn half a mile wide, so that one city could touch two others") também.
- "HALF A MILE WIDE" tem 4 palavras, e a receita (`marca/embalagem.md` §3.1) diz de 1 a 3: fica como exceção de teste.

**A banca 2** (outros três espectadores a frio, com a publicada, a B e a D, depois dos consertos):
- a **D** foi a primeira de dois, e a publicada, de um;
- a B ficou atrás da D com os três: "gray background is dull", "looks like a dead map".
- Queixas que sobraram: "half a mile wide of what?" (a seta responde); a agulha no canto lida como "compass icon … useless
  noise" pelos três; e o resto da cidade parecido demais com a faixa. Por isso o resto da cidade ficou mais claro (o
  `--destaque` a 42 % com o `--tinta`).

**A recomendação para o "Test & Compare" do YouTube:** a **publicada** (controle) e a **D**
(`miniatura-D-1280.jpg`). A B só entra como terceira se o Lucas quiser: ela perdeu para a D nas duas bancas, e cada
variante a mais divide as poucas impressões de um canal novo. O YouTube escolhe pela fatia de tempo assistido, não pelo
clique.

As bancas foram simuladas por modelos, não por gente: o teste do YouTube decide. Os resultados brutos ficam em
`out/los-angeles/_tmp/miniatura-r2/` (fora do git): `banca-resultado.json`, `banca-ordens.json`, `final-ordens.json`.
