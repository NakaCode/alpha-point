# ROUPA ALPHA POINT — montador

> Só o que é deste canal. Base: `estudio/marcas/alpha-point/identidade.md` e `superficies.md`. Destilada de
> `marca/agentes/montador.md`.

## 1 · O canal, para quem monta

- Faceless: o master é a narração sintética sobre tela preta 3840×2160; cota de apresentador **0 %**; não existe
  veredito `manter`; 100 % do tempo coberto por cena, inclusive os **20 s** finais sem voz (um segmento próprio).
- Não há vão de card na narração: a pausa entre parágrafos é curta (0,25 s, `estudio/canal-motor.json` › `narracao`), e nenhum silêncio vira
  fronteira de tópico.
- Sem card de capítulo, título ou progresso. As viradas de parte vão no `motivo` da primeira cena de cada parte, com o
  tempo: é daí que saem os capítulos da **descrição**.

## 2 · O cardápio do canal → `modo`

| Modelo do canal | `modo` |
|---|---|
| MAPA (território aceso sobre satélite; a viagem) | `mapa`; `mapa3d` só com o ok do Lucas |
| REGISTRO (footage ou foto real em tela cheia; discurso de fonte real) | `footage`, `foto`, `aereo-real` |
| PRANCHA (atores e relações) | `desenho`, com `PRANCHA` no `motivo` |
| animação desenhada (traço de engenheiro) | `desenho`, com a semente do que animar |
| DADO | `dados` |
| DOCUMENTO | `documento` |
| fala citada de pessoa real | `citacao`, até 12 palavras na tela |

- **Mais mapa quando a fala pede** (27/09/2026): lugar, distância, rota, território, fronteira ou posição relativa →
  `mapa`, antes de REGISTRO genérico e PRANCHA. O report diz quantas cenas e segundos são mapa.
- **Mais ilustração quando explica melhor** (14/10/2026): `desenho` no lugar do B-roll genérico quando explica melhor,
  na comparação de tamanho ou proporção e nas etapas. O que tem registro real (coisa nomeada, evento, pessoa) não vira
  desenho. Report: quantas cenas são `desenho` e quais entraram no lugar de B-roll.
- Nunca `titulo-topico`, `navegacao`, `apresentador*`. O campo `modelo` (códigos `Mxx` do Top10) fica ausente.
- A escolha entre a mesa (fotos pequenas impressas) e o mapa, plano a plano, é sua.

## 3 · Os números da casa

- Beat ≥ 1,5 s; footage ou foto parado ≤ 6 s; rajada (beats < 2,5 s) ≤ 20 %; respiro (≥ 6 s, movimento lento) ≥ 10 %;
  texto no ar ≥ 2,0 s.
- **Mundo real ≥ 60 % do tempo** (footage, foto, satélite de geometria real; sem documento e sem animação). Abaixo é
  defeito a declarar no report.
- Teto de tempo por `modo` e maior janela sem registro real: o canal não tem número. Meça e reporte; não reprove com
  número de outro canal.

## 4 · Mídia: o que se pede

- `midia_termos` em inglês dos EUA, com assunto, lugar e época (`Juneau waterfront 1970s archival photo`).
- **Evento real específico, pessoa pública, registro histórico:** só acervo aberto ou oficial (NARA, Library of
  Congress, NASA, USGS, Smithsonian, Wikimedia Commons com licença conferida, salas de imprensa federais, DVIDS e as
  fontes de 27/09/2026 em `marca/midia.md` §7.3). Nunca banco pago.
- **Sem foto do ano do fato:** a do mesmo assunto de outro ano, com o aviso do ano; só sem nenhuma o plano vira mapa ou
  desenho. Vídeo de outro ano não entra.
- **B-roll genérico:** dos bancos pagos, na ordem Envato → Motion Array → Storyblocks → Shutterstock (`marca/midia.md`
  §1), baixados só pelo navegador, nunca por script ou robô (decisão do Mateus, 22/out/2026 ~08:30Z: Shutterstock e Motion Array também, sempre pelo navegador), sem editorial e sem pessoa
  de banco em política.
- **Logo de instituição** não se pede: vai o nome escrito. Documento estadual ou de imprensa: «licença a conferir».

## 5 · Paleta e grafia

- **Um** protagonista por vídeo em `--destaque`, segundo ator `--contraparte`, terceiro em diante `--neutro`;
  `--tensao` nunca é um lado; nome de token, nunca cor escrita. Proponha o protagonista pela tese; quem confirma é o
  Lucas.
- `_grafias` en-US pelo AP Stylebook, como no `roteiro-narrador.md`, nunca como o alias da voz. O dossiê vem em
  português com números brasileiros: na tela é `91,049`. Milhas antes de quilômetros.

## 6 · O que o espelho não reserva

Card de capítulo; CTA falada; clube de membros, cupom, publi. A chamada de tela, a trilha e a marca d'água entram
depois, no XML (`superficies.md`).
