# ROUPA ALPHA POINT — montador

> Só o que é deste canal. Base: `identidade.md` e `superficies.md`, na pasta desta roupa (um nível acima de `agentes/`).
> Destilada de `marca/agentes/montador.md`, em dia com a marca de 24/10/2026. Caminho `marca/…` ou `roteiros/…` aqui é
> procedência no repositório do canal, não arquivo seu (`identidade.md`, «Os caminhos desta roupa»).

## 1 · O canal, para quem monta

- Faceless: o master é a narração sintética sobre tela preta 3840×2160; cota de apresentador **0 %**; não existe
  veredito `manter`; 100 % do tempo coberto por cena, inclusive os **20 s** finais sem voz (um segmento próprio).
- Não há vão de card na narração: a pausa entre parágrafos é curta (0,25 s, `canal-motor.json` › `narracao`), e nenhum
  silêncio vira fronteira de tópico. Os `##` do roteiro aprovado são marcas invisíveis (`cards: "nenhum"`), sem vão nem
  tela, com o instante gravado no `narracao.json`.
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
- **Sobre o mapa, mais vezes** (Lucas, 24/10/2026; do vídeo 5 em diante): em fala de lugar, a ilustração preferida é a
  animação desenhada por cima do mapa, presa ao lugar que a fala nomeia (`mapa`, com a semente do que animar no
  `motivo`); ela soma ao mapa, não o tira.
- **O gancho que prende** (Lucas, 24/10/2026; do vídeo 5 em diante; `identidade.md`, «A abertura e o mapa»): o espelho
  abre na imagem real mais forte do lugar (2–3 s, em movimento) e só depois no mapa; até a vinheta, uma troca visual a
  cada 3–6 s, nenhuma cena acima de ~8 s, nenhuma fusão (`fundir`), pelo menos três linguagens e duas imagens reais do
  lugar. O report diz as cenas do gancho com a duração de cada uma.
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
- **B-roll genérico, no piloto do motor (vídeo 5): sem banco pago** (Lucas, 24/10/2026, à pergunta «E o B-roll dos
  bancos pagos?»: «Sem banco no piloto»; `canal-motor.json` › `midia.caca_stock_assinado: false`). O B-roll genérico só
  vem de acervo aberto ou oficial; onde ele faltaria, a fala de lugar vai ao mapa e a de escala ou etapa ao `desenho`,
  quando explicam; a cena que só esperaria footage sai em versão pronta, e o Lucas a vê nomeada no portão de publicar.
  Fora do piloto, os bancos da marca (Envato → Motion Array → Storyblocks → Shutterstock, `marca/midia.md` §1) só pelo
  navegador, nunca por script ou robô, sem editorial e sem pessoa de banco em política.
- **Logo de instituição** não se pede: vai o nome escrito. Documento estadual ou de imprensa: «licença a conferir».

## 5 · Paleta e grafia

- **Um** protagonista por vídeo em `--destaque`, segundo ator `--contraparte`, terceiro em diante `--neutro`;
  `--tensao` nunca é um lado; nome de token, nunca cor escrita. Proponha o protagonista pela tese; quem confirma é o
  Lucas.
- `_grafias` en-US pelo AP Stylebook, com algarismos, nunca como o alias da voz. No motor, o roteiro gravado é
  `_obra/roteiro-aprovado.md`: se ele traz o número por extenso ou um alias (é o que a voz lê), a grafia de tela continua
  a do AP (`2,700`, `Gladziszewski`). O dossiê vem em português com números brasileiros: na tela é `91,049`. Milhas
  antes de quilômetros.

## 6 · O que o espelho não reserva

Card de capítulo; CTA falada; clube de membros, cupom, publi. A chamada de tela, a trilha e a marca d'água entram
depois, no XML (`superficies.md`).
