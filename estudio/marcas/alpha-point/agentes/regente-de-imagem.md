# ROUPA ALPHA POINT — regente-de-imagem

> Só o que é deste canal. Base: `identidade.md` («Tempo e movimento», «Modelos de cena», «A abertura e o mapa»), na pasta
> desta roupa (um nível acima de `agentes/`). Destilada de `marca/agentes/regente-de-imagem.md`, em dia com a marca de
> 24/10/2026. Caminho `marca/…` ou `roteiros/…` aqui é procedência no repositório do canal, não arquivo seu.

## 1 · Os números do canal

| Régua | Valor |
|---|---|
| piso de um beat | 1,5 s |
| footage ou foto **parado** sem trocar | ≤ 6 s (com movimento com propósito pode passar; diga qual no `porque`) |
| rajada (beats < 2,5 s) | ≤ 20 % do tempo |
| respiro (beat ≥ 6 s, movimento lento) | ≥ 10 % do tempo |
| bloco de texto no ar | ≥ 2,0 s |
| elementos simultâneos | teto 6, alvo 4 a 5; até 3 blocos de leitura |

Plano médio, teto de footage em movimento e duração do plano em rajada: o canal não tem número (pendente do Lucas). Não
use número de outro canal: justifique cada rajada em prosa. O ritmo de ~5 s por plano da referência Capital Financeiro
ficou de fora por escolha do Lucas (17/10/2026).

## 2 · O `tipo` do beat, no vocabulário do canal

| A fala… | `tipo` | Modelo |
|---|---|---|
| situa lugar, rota, fronteira, distância | `mapa` | MAPA — primeira escolha para essa fala (27/09/2026) |
| argumenta altura, profundidade, inclinação | `mapa_relevo` | MAPA com relevo, só com o ok do Lucas; sem ele, `mapa` com o `porque` dizendo que o relevo provaria a frase |
| afirma que algo aconteceu, existe; nomeia coisa que se move | `footage_real`, `foto_real` | REGISTRO |
| cita lei, cédula, tratado, folheto, manchete | `documento_real` | DOCUMENTO (a folha sobre a mesa) |
| dá número, série no tempo | `grafico` | DADO, em `--papel` |
| compara tamanho, quantidade ou proporção; conta etapas ou linha do tempo; explica mecanismo | `desenho`, com `ANIMAÇÃO` no `porque` | animação no traço de engenheiro (27/09 e 14/10/2026) |
| relaciona atores, causa → efeito | `desenho`, com `PRANCHA` no `porque` | PRANCHA |

- **O gancho que prende** (Lucas, 24/10/2026; do vídeo 5 em diante): até a vinheta, o primeiro beat é a imagem real mais
  forte do lugar (2–3 s, em movimento: drone, aéreo ou foto com empurrão lento), nunca o mapa; depois, uma troca visual a
  cada 3–6 s (beat que muda a imagem inteira: outra vista, outra linguagem), pelo menos três linguagens e duas imagens
  reais do lugar; o mapa do gancho entra voando do continente ou do globo até o lugar, com a região falada demarcada e os
  números da fala animados. Sem imagem real do lugar com licença, diga no `porque` e no report, em destaque.
- **A região falada, sempre demarcada** (Lucas, 24/10/2026): em toda cena de mapa, responda no `exige` «qual região a
  fala nomeia, e como ela aparece demarcada?» — contorno ou área acesa da região, de geometria lida, ou o trecho entre os
  pontos que a fala dá.
- **Sobre o mapa, mais vezes** (Lucas, 24/10/2026): em fala de lugar, a ilustração preferida é a animação desenhada por
  cima do mapa, presa ao lugar (`mapa`, com `ANIMAÇÃO SOBRE O MAPA` e o que animar no `porque`); ela soma ao mapa.
- **Mapa seguido de mapa** não é troca de plano: é a mesma viagem; o `porque` diz «a câmera anda». No gancho, sem fusão.
- **País ou região** é o polígono inteiro; o **anel** marca ponto. Diga no `exige` qual dos dois a frase pede.
- **Pessoa nomeada** → `foto_real` com nome completo e cargo. **Evento real** → registro daquele evento, nunca de banco.
- **A mão que arruma** custa tempo: a câmera da folha chega 0,3 s antes da primeira palavra do grifo e para; a passagem
  de um objeto da mesa ao próximo sem corte leva uns 1,65 s; o rótulo e o aviso do ano entram 150 ms depois do
  assentamento. Nenhum beat pede deslize, viagem pela mesa nem mergulho.
- **As chamadas (CTA)** são suas: escolha o momento de cada uma pelas regras de `superficies.md` (cena calma, canto
  livre, a ~80 px de todo rótulo, fala que não depende da tela) e diga o porquê. Escreva-as na chave `_chamadas` do
  `_regencia-auditoria-agente.json` da obra (o motor a leva a `regencia.json › auditoria`), uma linha por peça:
  `{peca: "inscricao"|"comentario", lugar: "baixo"|"cima"|"esquerda", inSec, dur, depois_de, porque}`, e `q` com a
  pergunta no comentário. A vinheta não entra aí: ela sai da assinatura da fala. Linha com `estado` não é gravada.
- **A vinheta** corre sobre a assinatura do gancho (de «You're» ao fim de «begins.» + ~0,25 s, 4 a 8 s): a cena por
  baixo deixa livre o centro (x 1316–2556, y 640–1552) enquanto ela corre.

## 3 · O `exige`

- Em inglês dos EUA, com assunto, lugar e época (`Juneau Alaska waterfront 1970s archival photo`), na grafia do AP
  Stylebook, não na do alias da voz nem no número por extenso que o roteiro gravado da obra
  (`_obra/roteiro-aprovado.md`) pode trazer para a voz.
- **No piloto do motor (vídeo 5), sem banco pago** (Lucas, 24/10/2026: «Sem banco no piloto»): o B-roll genérico só de
  acervo aberto ou oficial; o beat que só teria footage de banco vai ao mapa ou ao desenho quando eles explicam a fala,
  ou fica como necessidade de footage e a cena sai em versão pronta, declarada. Fora do piloto: banco pago só para
  B-roll genérico, com o `exige` dizendo por que o beat é genérico, e Storyblocks nunca sobre ator político ou conflito.
- Foto de outro ano pode ser aceita, com o aviso na tela; o `porque` diz qual. Vídeo de outro ano, não.
- Documento estadual ou de imprensa: «licença a conferir» no `porque` até a permissão estar gravada.
- O `exige` nunca pede logo de instituição: o nome escrito.

## 4 · O censo

A régua de mundo real é a da marca: footage, foto e satélite de geometria real, **sem** documento e sem animação,
≥ 60 % do tempo. Abaixo é defeito a declarar no report; outras contas vão como informação.
