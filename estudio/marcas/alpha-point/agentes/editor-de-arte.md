# ROUPA ALPHA POINT — editor-de-arte

> Só o que é deste canal. Base: `estudio/marcas/alpha-point/identidade.md` e `voz.md`; os valores executáveis estão em
> `marca/tokens.css`. Destilada de `marca/agentes/editor-de-arte.md`.

## 1 · A cena deste canal

- `<html lang="en-US" data-render="4k-native">`, palco 3840×2160. Ligue `marca/tokens.css` e escreva só `var(--…)`,
  com os nomes do canal (`--fundo`, `--papel`, `--tinta`, `--tinta-escura`, `--rotulo`, `--destaque`, `--contraparte`,
  `--neutro`, `--tensao`). Nenhum hex e nenhum nome de fonte na cena.
- Faceless: 100 % do tempo coberto por cena, inclusive os 20 s finais; nenhuma pessoa gerada por IA.
- Nenhum título de capítulo na tela. Nenhuma logo do canal na cena (a marca d'água entra pelo XML).

## 2 · Cor e fundo

- `--destaque` só no protagonista (uma entidade) e no anel; em texto, só no rótulo do próprio protagonista.
  Ênfase de leitura é peso (800). Vermelho × azul como dois lados: proibido. Até 3 matizes, fora o satélite.
- Sem degradê nem véu no mapa, no registro e no DADO. **A mesa** (DOCUMENTO, card, foto impressa, PRANCHA), do vídeo 2
  em diante: o still de satélite público do lugar por baixo da câmera, o véu de luz atrás do objeto principal e o
  feltro a 50 % (`tokens.css`, «A MESA DO VÍDEO 2 EM DIANTE»). Nada disso vai por cima da foto, da fita, da folha ou do
  texto. Nada se lê sobre o still: nem rótulo, ponto ou anel.

## 3 · Tipo e tamanho (alvos no palco)

- Barlow Condensed 800 no herói e no título; Inter 500 corpo e legenda, 700 rótulo, 800 ênfase; nada de Inter abaixo
  de 500; Courier Prime só na folha de documento; Noto Sans só por glifo, no bloco inteiro.
- Herói/título 360 px (teto 560, até 5 palavras); fala citada 280 (340, até 12); rótulo e nome de lugar 128 (160,
  até 3, ou 4 se nome próprio); eixo/legenda 84 (104); crédito **56** (64).
- **O crédito a 56 px** (Lucas, 07/10/2026) fica abaixo do piso de ofício de 72 px no crédito que não é de mapa: não
  suba o crédito para passar, nem tire a marcação de papel de crédito; diga no relato que a única reprovação é essa.
  (Conflito aberto: `LEIA.md`.)
- Pílula `--rotulo`, cantos 12 px, respiro 24 × 40; nada de scrim, sombra ou contorno no texto.
- Margem 200 px nas laterais e 160 no topo, **em todo quadro, sob a câmera**; abaixo de y 1880 só crédito, de x 200 a
  x 1720; canto inferior direito 400 × 400 vazio. Teto de 6 elementos e 3 blocos.

## 4 · Tempo e movimento

- Texto no ar ≥ 2,0 s; foto parada ≤ 6 s, com Ken Burns 1,00→1,12 em 6 s e até 80 px rumo ao assunto (direção e
  produto das escalas ≤ 1,4 no cabeçalho da cena).
- **A mão que arruma** (07/10/2026), em toda cena de mesa: chegada com assentamento 1,03→1,00 nos últimos 200–240 ms,
  uma vez; sombra solta como elemento próprio, desfoque fixo (nunca anime o raio); luz 120 ms atrás do objeto; câmera
  da folha chega 0,3 s antes do grifo e para; troca de foto «a antiga fica, a luz escolhe»; saída pelo levantar
  (350 ms, 1,00→1,04); rótulo e aviso do ano 150 ms depois do assentamento; texto parado enquanto se lê; nada se move
  nos 250 ms antes do corte. B e C não entram.
- **O ilustrador, com a física** (07/10/2026): peça que age (pendurada, presa, caindo, encaixando, mecanismo) tem
  contato e pivô no lugar físico; quando a física e o repouso brigam com a «vida», vencem a física e o repouso. Nunca
  balanço que não amortece. A marca vence o pacote `ilustracao/`.
- **O traço de engenheiro** (07/10/2026) é o acabamento de toda animação desenhada: só linha `--tinta` de 6 px, sem
  preenchimento, arestas escondidas tracejadas, cota em Inter 84 px, rótulos soltos sem pílula, a sombra solta do
  próprio traço; peça chapada nas cores dos papéis só quando representa território.

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
  cartão `--papel` ao lado, Inter 700, até 12 palavras. Ex.: `MARIA GLADZISZEWSKI` / `Assembly member, City and
  Borough of Juneau (2017)`.
- **Foto impressa:** moldura clara, fita, sombra, até 2°, no máximo 1,4× o arquivo; nenhum upscale nem filtro.
  Várias na mesma mesa pousam uma de cada vez, sem cobrir a parte que importa da outra.
- **Aviso do ano:** `Photo from <ano>`, 84 px Inter 500, numa pílula sob o rótulo (tela cheia) ou na margem da foto
  impressa em `--tinta-escura` a 72 %; nunca na faixa de crédito.
- **País:** só o nome escrito, sem bandeira ao lado. Na PRANCHA a bandeira vai dentro do ator, menos a do Canadá e das
  províncias (pendente do Lucas). Logo de instituição nunca: o nome na pílula.

## 6 · A tela final

Os 20 s sem voz são cena de fundo, declarada sem herói: o último quadro parado, brilho de 100 % a 50 % em 20 s, câmera
aproximando devagar, composição à esquerda, metade direita livre, sem texto novo (`superficies.md`).

## 7 · A tela em inglês dos EUA

A grafia e os créditos são os de `identidade.md` («Grafia de tela»), e o texto final vem do `redator-de-tela`. A palavra
para foto de arquivo sob dateline (`FILE`) espera o Lucas.
