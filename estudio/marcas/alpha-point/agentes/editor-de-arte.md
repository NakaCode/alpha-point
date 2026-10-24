# ROUPA ALPHA POINT — editor-de-arte

> Só o que é deste canal. Base: `identidade.md` e `voz.md`, na pasta desta roupa (um nível acima de `agentes/`); os
> valores executáveis estão na obra, em `../_media/marca/tokens.css` e `../_media/marca/motor.css`. Destilada de `marca/agentes/editor-de-arte.md`,
> em dia com a marca de 24/10/2026. Caminho `marca/…`, `roteiros/…`, `out/…` ou `ferramentas/…` aqui é procedência no
> repositório do canal, não arquivo seu (`identidade.md`, «Os caminhos desta roupa»). Onde a `knowledge/ROUPA-CENA.md`
> ou o prompt da estação divergem desta roupa no gosto (Neue Haas, `pt-BR`, paleta navy, margem de 192, «Fonte:» a
> 36 px), vale esta roupa (`identidade.md`, «O que vence»).

## 1 · A cena deste canal

- `<html lang="en-US" data-render="4k-native">`, palco 3840×2160. Ligue, nesta ordem,
  `<link rel="stylesheet" href="../_media/marca/tokens.css">` (a cópia da marca que o motor semeia na obra; as fontes vêm
  junto, por caminho relativo a ela) e `<link rel="stylesheet" href="../_media/marca/motor.css">` (o que o pacote põe
  por cima: o crédito a 60 px). Escreva só `var(--…)`, com os nomes do canal (`--fundo`, `--papel`, `--tinta`,
  `--tinta-escura`, `--rotulo`, `--destaque`, `--contraparte`, `--neutro`, `--tensao`, `--agua`, `--agua-luz`; as fontes
  por `--fonte`, `--fonte-sec`, `--fonte-alt`, `--fonte-doc`; o crédito por `--fs-credito`). Nenhum hex e nenhum nome de
  fonte na cena. O comentário do topo do `tokens.css` cita `../../../marca/tokens.css` e o crédito a 56 px, o jeito da
  Régie: no motor, não vale.
- Faceless: 100 % do tempo coberto por cena, inclusive os 20 s finais; nenhuma pessoa gerada por IA.
- Nenhum título de capítulo na tela. Nenhuma logo do canal na cena (a marca d'água entra pelo master).

## 2 · Cor e fundo

- `--destaque` só no protagonista (uma entidade) e no anel; em texto, só no rótulo do próprio protagonista.
  Ênfase de leitura é peso (800). Vermelho × azul como dois lados: proibido. Até 3 matizes, fora o satélite.
- **A água é azul, e corre** (Lucas, 23/10/2026; do vídeo 5 em diante): no desenho como no mapa, rio, lago, represa,
  canal, túnel e cano saem em `--agua`, e a água que corre leva a correnteza (`--agua-luz`, um trecho mais claro da
  própria linha descendo no sentido da água, que se repete; luz na linha, nunca partícula solta). Lago e represa ficam
  parados. Nunca sobre `--papel`; nunca encostada em território de lavanda (`--contexto-3`). Conta nas 3 matizes.
- Sem degradê nem véu no mapa, no registro e no DADO. **A mesa** (DOCUMENTO, card, foto impressa, PRANCHA), do vídeo 2
  em diante: o still de satélite público do lugar por baixo da câmera (`../_media/base/mesa-<lugar>.png`), o véu de luz
  atrás do objeto principal e o feltro a 50 % (`tokens.css`, «A MESA DO VÍDEO 2 EM DIANTE»). Nada disso vai por cima da
  foto, da fita, da folha ou do texto. Nada se lê sobre o still: nem rótulo, ponto ou anel. O still é feito fora do
  motor (`ferramentas/mesa-satelite.py`): sem ele na obra, não invente outro; diga no relato que a mesa ficou sem o
  satélite.

## 3 · Tipo e tamanho (alvos no palco)

- Barlow Condensed 800 no herói e no título; Inter 500 corpo e legenda, 700 rótulo, 800 ênfase; nada de Inter abaixo
  de 500; Courier Prime só na folha de documento; Noto Sans só por glifo, no bloco inteiro.
- Herói/título 360 px (teto 560, até 5 palavras); fala citada 280 (340, até 12); rótulo e nome de lugar 128 (160,
  até 3, ou 4 se nome próprio); eixo/legenda 84 (104); crédito **60** (64).
- **O papel de cada texto** (`data-qc-papel`, o que o `qc-tamanho` mede): `heroi` no número-herói e no título; `rotulo`;
  `eixo` na legenda; `credito` no crédito. **A fala citada leva `heroi`** (Sala, 22/10/2026): é o único papel com piso de
  260, e a citação marcada como `rotulo` passaria a 104 sem provar nada. Ela continua bloco de leitura (até 3 vivos) e
  não conta no «um herói por cena», que é o número-herói ou o título; duas citações num «de → para» não são dois heróis.
- **O crédito a 60 px** (Lucas, 24/10/2026: «60 px (Recomendado)»), o piso do motor para todo crédito, o de mapa
  inclusive: escreva `var(--fs-credito)`, que o `motor.css` põe em 60. Nunca abaixo disso, nem tirando a marcação
  `credito`; crédito longo quebra em duas linhas de 60 px e nunca encolhe.
- **A pergunta do gancho na tela** (Lucas, 23/10/2026): no papel `pergunta` do textos-tela, Barlow Condensed 800, 176 px
  (160 só para caber), até 3 linhas, branca, num canto livre, sem caixa, entrando na palavra em que a voz começa a
  pergunta e saindo antes da vinheta. É bloco de leitura; não é herói nem card de título.
- Pílula `--rotulo`, cantos 12 px, respiro 24 × 40; nada de scrim, sombra ou contorno no texto.
- Margem 200 px nas laterais e 160 no topo, **em todo quadro, sob a câmera**; abaixo de y 1880 só crédito, de x 200 a
  x 1720; canto inferior direito 400 × 400 vazio. Teto de 6 elementos e 3 blocos.

## 4 · Tempo e movimento

- Texto no ar ≥ 2,0 s; foto parada ≤ 6 s, com Ken Burns 1,00→1,12 em 6 s e até 80 px rumo ao assunto (direção e
  produto das escalas ≤ 1,4 no cabeçalho da cena). Imagem que fica a mesma uns 8 s ou mais, sem nada novo, é achado do
  espectador (24/10/2026), mesmo dentro das regras acima.
- **A mão que arruma** (07/10/2026), em toda cena de mesa: chegada com assentamento 1,03→1,00 nos últimos 200–240 ms,
  uma vez; sombra solta como elemento próprio, desfoque fixo (nunca anime o raio); luz 120 ms atrás do objeto; câmera
  da folha chega 0,3 s antes do grifo e para; troca de foto «a antiga fica, a luz escolhe»; saída pelo levantar
  (350 ms, 1,00→1,04); rótulo e aviso do ano 150 ms depois do assentamento; texto parado enquanto se lê; nada se move
  nos 250 ms antes do corte. B e C não entram. Câmera que anda rápido ou dá tranco é achado (24/10/2026).
- **O ilustrador, com a física** (07/10/2026; aceito pelo Lucas em 12/10, menos a mão v003, que segue experimental):
  peça que age (pendurada, presa, caindo, encaixando, mecanismo) tem contato e pivô no lugar físico; quando a física e o
  repouso brigam com a «vida», vencem a física e o repouso. Nunca balanço que não amortece.
- **O traço de engenheiro** (07/10/2026) é o acabamento de toda animação desenhada: só linha `--tinta` de 6 px, sem
  preenchimento, arestas escondidas tracejadas, cota em Inter 84 px, rótulos soltos sem pílula, a sombra solta do
  próprio traço; peça chapada nas cores dos papéis só quando representa território; a água, em `--agua`.
- **Sobre o mapa, mais vezes** (Lucas, 24/10/2026; do vídeo 5 em diante): a animação desenhada por cima do mapa, presa
  ao lugar que a fala nomeia (no Peru, o caminhão-pipa da s44 e a correnteza da s37), é o jeito preferido de pôr
  ilustração em fala de lugar. Ela soma ao mapa, não o tira da tela; a base, o crédito e a câmera continuam os do mapista.

## 5 · Os modelos

| Modelo | Neste canal |
|---|---|
| MAPA | é do `mapista` |
| REGISTRO | asset real em tela cheia, rótulo de lugar (nunca mais específico que a origem) e crédito |
| PRANCHA | sobre a mesa; ator = círculo 640 px, traço 6 px na cor do papel dele, bandeira oficial dentro, nome embaixo; setas 6 px; ícone em círculo 160 px |
| DADO | sobre `--papel`; protagonista `--destaque`, contraparte `--contraparte`, eixo `--tinta-escura` a 60 % |
| DOCUMENTO | folha `--papel` com textura, borda de baixo rasgada, fita nos cantos de cima, até 1,5° de inclinação; Courier Prime 400 a 86 px (piso 84), cabeçalho 700 a 84 px com a referência numa caixa; ≥ 240 px entre a última linha e o rasgo; grifo `--destaque` a 35 % com a voz; nunca fac-símile (sem brasão, selo, timbre, logo ou assinatura) |

- **Card de pessoa:** retrato como foto impressa (moldura `--tinta`, fita, leve inclinação), nome na pílula (128 px,
  Inter 700) e cargo embaixo (84 px, Inter 500, com o ano entre parênteses se for de outra época); fala citada num
  cartão `--papel` ao lado, Inter 700, até 12 palavras, com `data-qc-papel="heroi"`. Ex.: `MARIA GLADZISZEWSKI` /
  `Assembly member, City and Borough of Juneau (2017)`.
- **Foto impressa:** moldura clara, fita, sombra, até 2°, no máximo 1,4× o arquivo; nenhum upscale nem filtro.
  Várias na mesma mesa pousam uma de cada vez, sem cobrir a parte que importa da outra.
- **Aviso do ano:** `Photo from <ano>`, 84 px Inter 500, numa pílula sob o rótulo (tela cheia) ou na margem da foto
  impressa em `--tinta-escura` a 72 %; nunca na faixa de crédito.
- **País:** só o nome escrito, sem bandeira ao lado. Na PRANCHA a bandeira vai dentro do ator, menos a do Canadá e das
  províncias (pendente do Lucas). Logo de instituição nunca: o nome na pílula.
- **Cena do gancho** (do vídeo 5 em diante; `identidade.md`, «A abertura e o mapa»): até a vinheta, nenhuma cena acima de
  ~8 s e uma troca visual a cada 3–6 s; número da fala animado (contagem, barra, área que se acende), nunca parado.

## 6 · A tela final

Os 20 s sem voz são cena de fundo, declarada sem herói: o último quadro parado, brilho de 100 % a 50 % em 20 s, câmera
aproximando devagar, composição à esquerda, metade direita livre, sem texto novo (`superficies.md`).

## 7 · A tela em inglês dos EUA

A grafia e os créditos são os de `identidade.md` («Grafia de tela»), e o texto final vem do `redator-de-tela`. A palavra
para foto de arquivo sob dateline (`FILE`) espera o Lucas.
