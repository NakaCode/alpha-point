# MARCA ALPHA POINT — identidade

> A roupa do canal **Alpha Point** (geografia e geopolítica, en-US, faceless, narração sintética). Índice destilado de
> `marca/identidade.md` e `marca/tokens.css`; a fonte executável continua lá e é para lá que se aponta. Caminhos
> relativos à raiz do repositório do canal. Valor atual + data da decisão do Lucas (dono do canal).

## Onde mora cada coisa

| O que | Fonte executável |
|---|---|
| Todos os tokens (cor, tamanho, movimento, a mesa) | `marca/tokens.css` |
| Fontes, com licença e procedência | `marca/fontes/<família>/` (`OFL.txt`, `ORIGEM.json`) |
| Logo «A agulha» (avatar, banner, símbolo, marca d'água) | `marca/logo/agulha/` (o `README.md` diz o que vai onde) |
| Vinheta de apresentação | `marca/vinheta/vinheta.html` |
| Chamadas (CTA) com alfa: inscrição e comentário | `marca/cta/pecas/` (regra em `marca/cta.md`) |
| Pranchas de conferência (não são cena) | `marca/prancha.html`, `marca/prancha-documento-card.html`, `marca/prancha-fim.html` |
| Mídia e licenças | `marca/midia.md`, `marca/midia.json`, `marca/acervos/` |
| Piso de ofício | `marca/_neutra/identidade.md` |

## Âncora e recusas

- **Âncora:** o mapa de briefing de uma redação internacional — satélite escurecido, UM território aceso em cor sólida,
  rótulo preto de letra branca; o vídeo viaja por dentro desse mapa (identidade §1).
- **Assinatura:** o **anel** marca PONTO (estreito, porto, base); país e região são o polígono inteiro (§1).
- **Não herda:** contagem regressiva no canto, emoji como ícone, cartaz de «fato absurdo» (§1); nada de bandeira
  ao lado de nome de país, no mapa ou fora (27/09); nenhum efeito de template: glitch, flash, partículas, bounce (§4.4).

## Paleta (cor = papel, no vídeo inteiro; §2)

| Token | Valor | Papel |
|---|---|---|
| `--fundo` | `#0E1726` | mesa e prancha |
| `--painel` | `#172338` | cartão sobre `--fundo` |
| `--papel` | `#ECE8DF` | DADO; folha de documento e cartão da fala |
| `--tinta` | `#F4F1EA` | texto sobre escuro; contorno do protagonista |
| `--tinta-escura` | `#14181F` | texto sobre `--papel` |
| `--rotulo` | `#0B0F14` a 88 % | pílula de rótulo sobre mapa ou registro |
| `--destaque` | `#F5A524` | o protagonista (UMA entidade por vídeo) e o anel |
| `--contraparte` | `#2EC4B6` | o segundo ator |
| `--neutro` | `#737D8E` | terceiro ator em diante (escurecido em 25/09) |
| `--tensao` | `#E4572E` | conflito, risco, perda; nunca a cor de um lado |
| `--contexto-2` / `-3` / `-1` | `#4575EE` / `#BAACF6` / `#694C8B` | territórios de contexto, só no mapa, a 25 % (04/10) |
| `--agua-base` | `#00050c` | água escura sobre o satélite tratado (09/10) |

Vermelho × azul como dois lados: proibido (cor de partido nos EUA). Máximo 3 matizes por cena, fora o satélite.
Destaque em texto de leitura é peso, não cor. Sem degradê (`--degrade: none`), exceto a luz da mesa (§5).
Contraste medido: `marca/identidade.md` §2 (o `--neutro`) e §5 (a mesa).

## Tipografia (§3; todas SIL OFL 1.1, Google Fonts, commit `23e54b51`)

| Uso | Família | Peso |
|---|---|---|
| número-herói, título de bloco, CTA, nome do canal | Barlow Condensed | 800 |
| rótulo, legenda, eixo, crédito, fala citada | Inter | 500 · 700 rótulo · 800 ênfase |
| glifo que falte, escrita não latina (bloco inteiro) | Noto Sans | mesmos |
| só a folha de documento | Courier Prime | 400 · 700 (27/09) |

País/região em CAIXA ALTA, `+0.04em`; cidade, rio, estreito em caixa normal. `tabular-nums` em eixo e tabela.

## Alvos no palco 3840×2160 (§4.1; o piso é ofício, `marca/_neutra/`)

| Papel | Alvo | Teto | Máx. palavras |
|---|---|---|---|
| número-herói / título | 360 | 560 | 5 |
| fala citada | 280 | 340 | 12 |
| rótulo (inclui nome de lugar e nome do card) | 128 | 160 | 3 (4 se nome próprio, 07/10) |
| eixo / legenda (inclui cargo, aviso do ano, cota) | 84 | 104 | — |
| crédito / fonte | **56** (07/10; ver `LEIA.md`, conflito 1) | 64 | — |
| pergunta da CTA | 176 (160 só p/ caber) | 176 | 3 linhas |

- Pílula: cantos 12 px, respiro 24 × 40 px. Margens: 200 px laterais, 160 px topo.
- Faixa y > 1880: só crédito, de x 200 a x 1720; quebra em 2 linhas, nunca encolhe.
- Canto inferior direito 400 × 400 px: vazio (marca d'água do YouTube).
- Teto 6 elementos simultâneos (alvo 4–5); até 3 blocos de texto de leitura (28/09); um herói por cena ou nenhum.

## Tempo e movimento (§4.3–§4.4; números em `tokens.css`)

- Texto no ar ≥ 2,0 s; beat ≥ 1,5 s; foto/footage parado ≤ 6 s; rajada ≤ 20 %; respiro ≥ 10 %; mundo real ≥ 60 %.
- Mapa seguido de mapa = uma viagem de câmera (1,5–3 s, cúbica); corte seco só na troca de regime.
  Mapa nunca parado (03/10).
- Rótulo 300 ms (+24 px); território 500 ms; anel 56 px, traço 10 px, pulso 1→1,8 em 1,2 s, duas vezes, e para.
- Ken Burns 1,00→1,12 em 6 s, até 80 px rumo ao assunto; produto das escalas ≤ 1,4.
- «A mão que arruma» (movimento A, 07/10): assentamento 1,03→1,00 em 0,22 s; sombra solta; luz 120 ms atrás;
  levantar 0,35 s; câmera parada no grifo; 250 ms de repouso antes do corte. B e C recusadas.
- Animação desenhada: o **traço de engenheiro** (07/10) — linha `--tinta` 6 px sem preenchimento, cota Inter 84 px.
  Mais ilustração quando explica melhor, sem número fixo (14/10).

## Modelos de cena (§5)

MAPA (satélite) · REGISTRO (asset real em tela cheia) · PRANCHA (atores sobre `--fundo`; ator = círculo 640 px) ·
DADO (sobre `--papel`) · DOCUMENTO (folha de papel sobre a mesa, Courier Prime, rasgo, fita, grifo `--destaque` a
35 %). Card de pessoa: retrato impresso com fita, nome em rótulo, cargo em legenda. A mesa (do vídeo 2 em diante,
07/10): still de satélite público (Landsat/NASA) escurecido e desfocado, por `ferramentas/mesa-satelite.py`.
Foto < 1.600 px, ou que passaria de 1,4× em tela cheia, vai impressa sobre a mesa (27 e 29/09). Faceless:
0 % de apresentador, nenhuma pessoa gerada por IA.

## Base de mapa (§6)

- MapTiler satellite-v2 + terrain-rgb-v2 (`canal.json` › `mapa.perfil`, 26/09). Relevo 3D pede o ok do Lucas por vídeo.
- Tratamento do satélite (09/10): `raster-brightness-max 0.92`, `raster-saturation 0`, `raster-contrast 0.25`.
- Protagonista `--destaque` a 85 % (40 % com contexto), contorno `--tinta` 6 px; contraparte a 35 %.
- Fronteira: branco a 70 %, 5 px, sobre `#0B0F14` a 60 %, 12 px — única linha branca; estrada/rota em
  `--contraparte`, a protagonista em `--destaque`; legenda de cores a 84 px.
- Crédito na tela o tempo todo: `© MapTiler © OpenStreetMap contributors`. Plano Flex: vídeo só até 100 mil inscritos.
- Bases e dados aceitos (27/09) e os que não servem: identidade §6 e `marca/acervos/`.

## Grafia de tela (§7)

Inglês dos EUA, AP Stylebook. `2,700` · `$265 billion` · imperial primeiro (`22.2 ft (6.76 m)`) · datas absolutas.
Crédito `Source: <instituição>, <ano>` e `<autor> / <acervo> · <licença>`; domínio público sem crédito na tela.
Aviso do ano: `Photo from 1998`.

## Logo, marca d'água e vinheta (§8)

- **A agulha** (01/10): agulha de bússola em dois triângulos; norte em `--destaque`, sul em `--tinta`, corte de 12°.
- Marca d'água: só `--tinta`, disco `--fundo` a 65 %, **100 px** no 4K, **30 %** de opacidade, canto de cima à
  direita a 60 px das bordas, gravada no vídeo pelo XML, do fim da vinheta ao fim (09/10 e 14/10).
- Vinheta (14/10): agulha 800 px e ALPHA POINT em Barlow 800 a 280 px sobre a assinatura do gancho, 4–8 s, terminando
  na marca d'água.
- Banner: ALPHA POINT + «Geography and geopolitics, on the map.» sobre curvas de nível (09/10).
