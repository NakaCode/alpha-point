# ROUPA ALPHA POINT — executor-de-molde

> Só o que é deste canal: quais moldes ele tem e como cada um se veste. Base: `estudio/marcas/alpha-point/identidade.md`
> e `voz.md`. Fontes: `marca/identidade.md` §4.1, §4.4 e §5; `marca/prancha-documento-card.html` (a régua visual, montagem
> de conferência a 1 px do 4K, não cena do pipeline). Caminhos relativos à raiz do repositório do canal.

## 1 · Os moldes deste canal (e só estes)

| `modo` | O que é no Alpha Point | Régua visual |
|---|---|---|
| `documento` | a folha de papel sobre a mesa, com grifo na voz (Lucas, 27/09/2026, «Arquivo datilografado») | `marca/prancha-documento-card.html`, «Documento» |
| `citacao` | o card de pessoa: retrato impresso, nome e cargo, e a fala num cartão de papel (Lucas, 27/09/2026, «Foto e cartão de papel») | a mesma prancha, «Card de pessoa» |

A foto impressa sobre a mesa e o aviso do ano entram dentro desses moldes, como peças deles (prancha, «Aviso do ano da foto»).

## 2 · O que o canal NÃO tem — recuse e devolva

- **Card de título de tópico, card de progresso, sumário, navegação:** os capítulos vão só na descrição (Lucas, 26/09/2026;
  `marca/agentes/designer-de-navegacao.md` §1).
- **Apresentador em tela, com ou sem informação:** o canal é faceless, cota de apresentador 0 %, nenhuma pessoa gerada por
  IA (`marca/identidade.md` §5, «Faceless»).
- **Título de compilado e abertura de compilado:** o canal não tem compilado (`marca/agentes/designer-de-navegacao.md` §1).
- **Número de contagem regressiva no canto e cartaz de «fato absurdo»:** não herdados (`marca/identidade.md` §1).

## 3 · A mesa, base dos dois moldes

Do vídeo 2 em diante (Lucas, 07/10/2026): `--fundo`, o still de satélite público do lugar, escurecido e desfocado, o véu
de luz atrás do objeto principal (`--mesa-luz-veu-centro`) e o feltro a 50 %, tudo por baixo do objeto e do texto
(`marca/tokens.css`, «A MESA DO VÍDEO 2 EM DIANTE»). Nada se lê sobre o still. O Juneau fica com o feltro sob a luz.

## 4 · DOCUMENTO (identidade §5, «A folha de documento»)

- Folha em `--papel` com textura, borda de baixo rasgada, fita nos cantos de cima, sombra, até 1,5° de inclinação.
- Letra **Courier Prime** só aqui: corpo 400, alvo 86 px (piso 84); cabeçalho 700, 84 px, com a referência da peça numa
  caixa de contorno (ex. da prancha: `Alaska Statutes AS 44.06.055`). Texto em `--tinta-escura`.
- Grifo em `--destaque` a 35 %, palavra a palavra com a voz.
- A folha cresce com o texto: ≥ 240 px de branco entre a última linha e o rasgo; a fita fora do texto; nenhuma palavra
  cortada. Texto que não cabe: a câmera desce pela folha com a voz (1,00→1,08), chega 0,3 s antes do grifo e para; ou a
  folha recua e escurece e o trecho aparece ampliado ao lado, literal, até 12 palavras.
- Recriação, nunca fac-símile: sem brasão, selo, timbre, logo ou assinatura. Página real só com permissão de uso clara,
  até 1,4× o tamanho dela, com a mesma fita e sombra.
- Campo em branco esperando a voz não vai à tela; o documento mostra o número impresso nele (02/10/2026).
- Crédito `Source: <institution>, <year>` na faixa de crédito (prancha: `Source: Alaska Statutes, AS 44.06.055`).
- Movimento A: a folha desce 420 px em 0,80 s, de −1,5° a +1,2°, e assenta (1,03→1,00) em 0,56–0,80 s; sombra solta;
  luz 120 ms atrás; sai pelo levantar (350 ms).

## 5 · CITAÇÃO = card de pessoa (identidade §4.1 e §5)

- **Retrato** como foto impressa: moldura clara `--tinta`, fita, leve inclinação (até 2°), sobre a mesa; quadro da foto de
  932 × 932 px; a foto não se altera. Sem retrato autorizado, nome e cargo ficam no lugar dele.
- **Nome** na pílula `--rotulo`, Inter 700, 128 px (teto 160), CAIXA ALTA, até 3 palavras ou 4 se nome próprio (07/10/2026).
- **Cargo** logo abaixo, legenda: Inter 500, 84 px (teto 104), como a fonte o escreve, pelo cargo e sem partido, com o ano
  entre parênteses quando é de outra época. Ex.: `MARIA GLADZISZEWSKI` / `Assembly member, City and Borough of Juneau (2017)`.
- **Fala citada** num cartão `--papel` ao lado, Inter 700, alvo 280 px (piso 260, teto 340), até 12 palavras, entrando na
  palavra da voz. Fala maior não encolhe: vai ao report. O cargo nunca passa por baixo do cartão.
- Nome fora de `--destaque`. Crédito da fala na faixa de crédito (prancha: `Source: KTOO, June 13, 2025`).
- Entradas: o nome 150 ms depois de o retrato assentar (300 ms, +24 px), o cargo 120 ms depois do nome.

## 6 · Foto impressa e aviso do ano

- Foto impressa: moldura, fita, sombra, até 2°, no máximo 1,4× o arquivo, sem upscale nem filtro.
- **Aviso do ano** quando o veredito o pede: `Photo from <ano>`, Inter 500, 84 px. No card, na margem de baixo da foto
  impressa (190 px de margem na prancha), em `--tinta-escura` a 72 %, sem pílula; em tela cheia, numa pílula `--rotulo`
  (respiro 16 × 28 px) logo abaixo do rótulo de lugar. Nunca na faixa de crédito.

## 7 · Espaço, tempo e texto

Palco 3840×2160, `<html lang="en-US" data-render="4k-native">`. Margem 200 px laterais e 160 no topo; abaixo de y 1880 só
crédito, de x 200 a x 1720, 56 px (conflito com o piso de 72: `LEIA.md`); canto inferior direito 400 × 400 vazio. Teto de
6 elementos; a folha, a fala e o card com cargo são blocos de leitura (até 3). Texto no ar ≥ 2,0 s e parado enquanto se
lê; nada se move nos 250 ms antes do corte. Grafia en-US pelo AP Stylebook (`identidade.md`).
