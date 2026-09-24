# MARCA — embalagem (título e miniatura)

> Como o Alpha Point escreve título e monta miniatura. Nasceu do primeiro vídeo (Juneau, 24/09/2026), quando o
> dono pediu títulos "mais como as referências". O caso completo está em `roteiros/juneau/embalagem.md`.

## 1 · Os moldes das referências

Medido em 24/09/2026 na página de vídeos de cada canal: os últimos 30, com views. Views mudam; o molde fica.
Para remedir, releia a página pública do canal. Se ela recusar leitura automática, pare (`CLAUDE.md`).

**Geography Effect** é a referência mais próxima: público dos EUA, geografia com dinheiro.

| Molde | Exemplos que renderam |
|---|---|
| **Dois tempos**, "Fato. Virada." | "Saudi Arabia Planned to Spend $500 Billion on NEOM. It's Already Failing." (239 mil) · "The Netherlands Doesn't Have Much Land. It's Still the World's #2 Food Exporter." (158 mil) |
| **Why + lugar + paradoxo concreto** | "Why California Can't Shut Down Slab City" (598 mil) · "Why the Best Farmland on Earth Made Argentina Poor" (356 mil) · "Why Ontario's Richest Ground Has No Road to It" |
| **The Real Reason…** | "The Real Reason Russia Sold Alaska and Instantly Regretted It" (358 mil). Só serve se a razão for uma e estiver provada |
| **Dinheiro no título** | "Why Build a $265 Billion Microchip Fortress In the Arizona Desert?" (330 mil) |

Os que falharam (1 mil a 5 mil) são vagos: "Ohio Has More Secrets Than Any State".

**Big Systems**: pergunta curta, lugar famoso, fala de gente. "How Did Tokyo Become The Largest City On
Earth?" (5,7 mi) · "Why Is There No Bridge to Sicily?" (3,8 mi) · "How Geography Made California Ridiculously OP".

**Capital Financeiro** (canal brasileiro; vale o molde, não a letra): o parêntese que descarta o óbvio.
"Why does everyone leave Alaska (it's not just because of the cold)?" (426 mil).

**MirAtlas60**: listas numeradas. O canal **não** herda esse molde (`identidade.md` §1: nada de contagem nem de
"fato absurdo").

**O que as quatro têm em comum:**
- no título, um lugar que o americano conhece;
- um paradoxo concreto, que se entende em 2 segundos;
- nenhum jargão;
- de 35 a 65 caracteres;
- a família "no road / no bridge" rende nos três canais.

## 2 · Regras de título (aprendidas no Juneau)

- **O título é contrato: o núcleo se paga nas 3 primeiras frases da narração.** Um molde que rende nas
  referências não serve se o vídeo só paga a promessa no minuto 8. Foi o caso de "no road" no Juneau.
- **Data absoluta no título quando o fato é histórico.** Sem data, "Alaska Voted to…" soa como notícia desta
  semana; os leitores a frio leram assim.
- **Uma causa só, nunca, se o vídeo diz que a causa é disputada.** "The Real Reason…" e "Why X said no" caem aqui.
- **Palavra de dois sentidos ao lado de dinheiro engana.** "New Capital" com "Price" e "$2.8 billion" foi
  lido como investimento.
- **Expressão feita com sentido próprio engana.** "Survive a vote" sugere que a votação fracassou.
- **Estimativa não é custo.** Número contestado vai com a palavra que diz o que ele é ("estimate"), ou fica fora.
- **Termo que colide na busca fica fora.** No Juneau, "Willow" traz só vídeos do projeto de petróleo.

## 3 · A miniatura

**A receita**, das referências: mapa de satélite, **o anel da marca** no ponto, uma seta curva saindo do texto
e caindo no anel, e uma pílula com 1 a 3 palavras. A pílula completa o título, nunca o repete
("RIGHT HERE?", "NO ROADS?", "WHY HERE?").

**Os valores**, no palco de 2560×1440 (o dobro do envio de 1280×720; entre parênteses, no envio):

| Peça | Valor |
|---|---|
| base | satélite de domínio público (Landsat/USGS, NASA). Filtro `brightness(.9) saturate(1) contrast(1.05)` e vinheta até 35% de preto nas bordas |
| anel | 224 px de diâmetro, traço de 38 px (112/19), `--destaque`, contorno escuro fino de 5 px por dentro e por fora, sombra difusa. Sem pulso |
| pílula-herói | Barlow Condensed 800, 300 px (150), CAIXA ALTA, tracking `-0.01em`, fundo `--rotulo`, texto `--tinta`, cantos de 24 px (12) |
| nome de lugar | Inter 700, 96 px (48), caixa normal, mesma pílula; ponto branco de 34 px sobre o lugar |
| seta | `--tinta`, traço de 34 px (17), pontas redondas, sombra; comprimento de pelo menos 400 px no palco |
| canto inferior direito | livre, uns 320×320 px no palco (160×160 no envio): é onde o YouTube põe a duração |

**Onde a miniatura foge da regra do vídeo, e por quê:**
- **Base mais clara** que os 65/70 de `identidade.md` §6. A miniatura disputa o feed escuro do YouTube
  (#0f0f0f); com 65/70, a primeira versão ficou com luminância média de 60/255 e virou mancha. O contraste do
  texto vem da pílula, não do escurecimento.
- **Anel maior** que os 56/10 px do vídeo. Na lateral "a seguir" (168×94), o anel do vídeo some. Limite de cima:
  o anel não pode cobrir outro lugar que o leitor confundiria com o ponto (no Juneau, a vila de Willow).
- **Herói maior** que o alvo do vídeo; margens de 200/160 px e canto de 400×400 não valem: o canto reservado é o
  da duração.

**O que não foge:** os papéis de cor (`--destaque` só no protagonista e no anel), nada de vermelho contra azul,
sem emoji, a geografia conferida contra coordenadas e a regra de imagem de `midia.md`.

**Conferência antes de mostrar ao dono:**
1. Renderizar em 1280×720, 320×180 e 168×94 e olhar os três tamanhos.
2. Uma banca com quatro lentes: tamanho pequeno, geografia e fatos, marca, e leitura a frio com o título embaixo.

A fonte da primeira miniatura é `roteiros/juneau/miniatura/miniatura.html`. Ela é renderizada com o Chrome em
modo headless: `--window-size=2560,1440 --virtual-time-budget=10000 --screenshot=…`.

## 4 · O processo

1. Os moldes das referências (§1), remedidos se tiverem mais de uns três meses.
2. Um redator por molde, cada um com 6 pares de título e miniatura, e com a frase do roteiro que paga cada promessa.
3. Um júri de quatro lentes: clique, promessa e marca, busca e clareza, estilo das referências.
4. Os 5 finalistas passam por um refutador de fatos cada um e por três leitores americanos a frio (idades,
   regiões e hábitos diferentes).
5. O dono escolhe. Depois vem a miniatura e a banca da miniatura (§3).
