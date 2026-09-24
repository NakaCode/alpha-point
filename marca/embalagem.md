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
"Why does everyone leave Alaska (it's not just because of the cold)?" (426 mil). **As miniaturas dele são as
favoritas do dono** (24/09/2026): "É DO BRASIL. MAS NINGUÉM PODE IR LÁ", "JAPÃO É ASSIM" e "QUE DIABOS É A
ILHA DOS HOMENS?". Os recursos delas:
- texto grande solto, sem caixa, com a virada em outra cor;
- um anel no ponto;
- uma lupa ligada ao anel por um cone, mostrando de perto uma forma que se reconhece (as ilhas, o território
  com a bandeira);
- setas curvas e caixinhas de rótulo.

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

Há duas receitas. O Juneau usou a com lupa (§3.1); a com pílula ficou de reserva.

**A receita com pílula** (Geography Effect): mapa de satélite, **o anel da marca** no ponto, uma seta curva saindo do texto
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

### 3.1 · A receita com lupa (Capital Financeiro), a escolhida para o Juneau

Fonte: `roteiros/juneau/miniatura/miniatura-lupa.html`. Palco de 2560×1440; entre parênteses, no envio de 1280.

| Peça | Valor |
|---|---|
| texto | solto, sem pílula: Barlow Condensed 800, 300 px (150), CAIXA ALTA, até 2 linhas e 1 a 3 palavras. A de cima em `--tinta`; a virada em `--destaque` (decisão do dono: "mantenha a paleta do canal"). Contraste por sombra radial escura atrás do bloco e `text-shadow` |
| anel | o mesmo da receita com pílula |
| lupa | 640 px (320), borda de 20 px em `--destaque`: é o anel ampliado. Sombra escura por fora |
| cone | as tangentes externas do anel e da lupa, calculadas, e não a olho. Traço `--tinta` de 10 px com sombra; preenchimento `--tinta` a 12 % |
| dentro da lupa | **uma forma que se reconheça**. Satélite de mato é "vazio" (o dono e a banca concordaram). No Juneau, o mapa oficial do sítio, redesenhado, sobre `--papel` (modelo DOCUMENTO): o sítio em `--destaque` a 32 % com contorno escuro grosso, a área da cidade em `--destaque` cheio e a estrela de capital. Um selo pequeno diz de onde veio ("OFFICIAL SITE MAP") |

**Regras que a lupa ensinou:**
- **O que vai dentro da lupa tem de existir em documento.** Nada de cidade, rua ou prédio desenhado. Um
  redesenho é fiel quando o traço, sobreposto ao original, cai em cima da linha dele. Guarde a sobreposição.
- **Troca de símbolo vale; troca de conteúdo, não.** O ponto do centro da cidade virou a estrela de capital,
  mas nada foi acrescentado ao mapa.
- **Número ou ano na miniatura não pode brigar com o título.** "1976" na lupa, ao lado do "1974" do título,
  pareceu erro ao leitor a frio.
- **Espessura pensada para 168 px.** Contorno fino e preenchimento claro somem; forma e oval precisam de
  contraste de valor entre si, não só de cor.
- **Mosaico de foto aérea antiga raramente serve à miniatura.** O AHAP do sítio veio com emendas e cores de
  anos diferentes. Veja a prévia antes de pedir o arquivo grande.

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
