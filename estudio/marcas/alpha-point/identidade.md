# MARCA ALPHA POINT — identidade

> A roupa do canal **Alpha Point** (geografia e geopolítica, en-US, faceless, narração sintética). Índice destilado de
> `marca/identidade.md` e `marca/tokens.css` do repositório do canal, em dia com a marca de **24/10/2026**. Valor atual +
> data da decisão do Lucas (dono do canal).
>
> **Os caminhos desta roupa.** `marca/…`, `roteiros/…`, `out/…`, `ferramentas/…`, `canal.json` e `CLAUDE.md` dizem de
> onde veio cada regra, no repositório do canal: não estão na sua pasta e você não os abre. A regra está escrita aqui.
> O que a cena liga mora na OBRA, em `../_media/marca/` (o motor o semeia antes da primeira etapa:
> `canal-motor.json` › `obra_semente`). Os outros arquivos da roupa (`voz.md`, `superficies.md`, `agentes/*.md`) estão na
> mesma pasta que este.

## O que vence

A cena é do Alpha Point. Onde a `knowledge/ROUPA-CENA.md` do motor, o prompt da estação ou um exemplo do Top10 divergem
desta roupa no que é **gosto e marca**, vale esta roupa: `lang="en-US"` (não `pt-BR`); as famílias desta página (não a
Neue Haas); a paleta por papéis abaixo (não a paleta navy da casa); a margem de 200 px nas laterais e 160 no topo; o
crédito `Source: …` em Inter a 60 px (não o «Fonte: …» de 36). O que é **contrato e portão** do motor (`__renderAt`,
`__duracao`, `data-qc-papel`, os tetos de carga, a mídia por caminho relativo) continua do motor.

## Onde mora cada coisa

| O que | Onde |
|---|---|
| Todos os tokens (cor, tamanho, movimento, a mesa) | na obra: `../_media/marca/tokens.css` (de uma cena em `graphics/`) — a cópia byte a byte de `marca/tokens.css` de 24/10/2026 |
| O que o motor põe por cima da marca (hoje, só o crédito a 60 px) | na obra: `../_media/marca/motor.css`, ligado **depois** do `tokens.css` |
| Fontes, com licença e procedência | na obra: `../_media/marca/fontes/<família>/` (`OFL.txt`, `ORIGEM.json`); o `tokens.css` as carrega sozinho, por caminho relativo |
| O still da mesa (satélite público do lugar) | na obra: `../_media/base/mesa-<lugar>.png`, quando existe. Quem o faz é a ferramenta do canal (`ferramentas/mesa-satelite.py`), fora do motor: sem ele na obra, diga no relato que a mesa ficou sem o satélite |
| Logo «A agulha», marca d'água, vinheta, chamadas (CTA) | não são da cena: o master as põe (`canal-motor.json` › `master.logo` e `master.pecas_da_obra`) |
| Pranchas de conferência, mídia e licenças, piso de ofício | procedência no repositório do canal (`marca/prancha*.html`, `marca/midia.md`, `marca/_neutra/`): as regras estão nesta roupa |

Toda cena do motor liga os dois, nesta ordem (o segundo vence o primeiro):

```html
<link rel="stylesheet" href="../_media/marca/tokens.css">
<link rel="stylesheet" href="../_media/marca/motor.css">
```

O comentário do topo do `tokens.css` cita o caminho da Régie (`../../../marca/tokens.css`) e o crédito a 56 px: no motor,
nenhum dos dois vale.

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
| `--agua` | `#AFD8F6` | **a água** — rio, lago, represa, canal, túnel, cano —, cor de TIPO, em mapa e desenho (23/10) |
| `--agua-luz` | `#EAF5FD` | a luz da correnteza, quase branca, que desce pela linha da água que corre (23/10) |
| `--agua-base` | `#00050c` | a água escura do porto sobre o satélite tratado, onde o mosaico mostra emendas (09/10) |

Vermelho × azul como dois lados: proibido (cor de partido nos EUA). Máximo 3 matizes por cena, fora o satélite.
Destaque em texto de leitura é peso, não cor. Sem degradê (`--degrade: none`), exceto a luz da mesa (§5).
Contraste medido: `marca/identidade.md` §2 (o `--neutro`, a água) e §5 (a mesa).

**A água é azul, e corre** (Lucas, 23/10/2026: «Nos próximos toda água deve ser azul e com fluxo»; do vídeo 5 em diante):
- a água tem cor de TIPO, não de lado: rio, lago, represa, canal, túnel e cano saem em `--agua` em todo mapa e desenho,
  mesmo quando o território em volta é o protagonista ou a contraparte;
- a água que corre mostra a correnteza: um trecho mais claro da própria linha (`--agua-luz`) desce no sentido da água e
  se repete, mais lento no rio baixo e mais rápido no cheio. É luz na linha, não partícula solta. Lago e represa ficam
  parados; o que muda neles é o nível;
- limites medidos: não serve sobre o `--papel`; fica a 9,4 da lavanda (`--contexto-3`) em deuteranopia, abaixo do
  limiar de 10 — não ponha água encostada em território de lavanda. O pior par aceito é com o `--contraparte` (12,5);
- o mar não é «água» desta regra: segue a cena (o satélite, ou a cor que a cena der);
- o azul da água conta nas 3 matizes da cena.

## Tipografia (§3; todas SIL OFL 1.1, Google Fonts, commit `23e54b51`)

| Uso | Família | Na cena | Peso |
|---|---|---|---|
| número-herói, título de bloco, CTA, pergunta do gancho, nome do canal | Barlow Condensed | `var(--fonte-sec)` | 800 |
| rótulo, legenda, eixo, crédito, fala citada | Inter | `var(--fonte)` | 500 · 700 rótulo · 800 ênfase |
| glifo que falte, escrita não latina (bloco inteiro) | Noto Sans | `var(--fonte-alt)` | mesmos |
| só a folha de documento | Courier Prime | `var(--fonte-doc)` | 400 · 700 (27/09) |

Na cena, as variáveis do `tokens.css` (`--fonte*`, `--fs-*`, as cores), nunca o nome da face nem um hex. País/região em CAIXA ALTA, `+0.04em`;
cidade, rio, estreito em caixa normal. `tabular-nums` em eixo e tabela.

## Alvos no palco 3840×2160 (§4.1; o piso é ofício)

| Papel | Alvo | Teto | Máx. palavras | `data-qc-papel` |
|---|---|---|---|---|
| número-herói / título | 360 | 560 | 5 | `heroi` |
| fala citada | 280 (piso 260) | 340 | 12 | `heroi` (22/10; abaixo) |
| rótulo (inclui nome de lugar e nome do card) | 128 | 160 | 3 (4 se nome próprio, 07/10) | `rotulo` |
| eixo / legenda (inclui cargo, aviso do ano, cota) | 84 | 104 | — | `eixo` |
| crédito / fonte | **60** (Lucas, 24/10: «60 px (Recomendado)»; o piso do motor) | 64 | — | `credito` |
| pergunta da CTA e pergunta do gancho | 176 (160 só p/ caber) | 176 | 3 linhas | — |

- **A fala citada leva `data-qc-papel="heroi"`** (22/10/2026): o `qc-tamanho` só conhece `heroi|rotulo|eixo|credito`, e o
  `heroi` é o único papel com piso de 260. Marcada como `rotulo`, a citação passa a 104 px e o verde não prova nada. Ela
  continua **bloco de leitura** (até 3 vivos) e não conta no «um herói por cena», que é o número-herói ou o título; duas
  citações num «de → para» não são dois heróis.
- **A pergunta do gancho na tela** (Lucas, 23/10/2026, «A pergunta inteira, discreta»; do vídeo 4 em diante): a pergunta
  central do gancho, a que a voz faz antes da assinatura, entra inteira (ou quase; a forma é do redator), no papel
  `pergunta` do textos-tela, na letra da pergunta da chamada (Barlow Condensed 800, 176 px, até 3 linhas), branca, num
  canto livre, sem caixa, na palavra em que a pergunta começa, saindo antes da vinheta. É bloco de leitura; não é herói
  nem card de título.
- Pílula: cantos 12 px, respiro 24 × 40 px. Margens: 200 px laterais, 160 px topo, em todo quadro, sob a câmera.
- **O crédito a 60 px no motor** (Lucas, 24/10/2026, à pergunta «O crédito de fonte na tela: o motor exige hoje no mínimo
  60 px, e você tinha decidido 56 px (07/10). Qual fica?»: «60 px (Recomendado)»). Vale para todo crédito de cena do
  motor, o de mapa inclusive; o `motor.css` o põe em `--fs-credito` e `--piso-credito`. Os vídeos 1 a 4 ficam como
  saíram (76 no Juneau, 56 do vídeo 2 ao 4).
- Faixa y > 1880: só crédito, de x 200 a x 1720; quebra em 2 linhas, nunca encolhe.
- Canto inferior direito 400 × 400 px: vazio (marca d'água do YouTube).
- Teto 6 elementos simultâneos (alvo 4–5); até 3 blocos de texto de leitura (28/09); um herói por cena ou nenhum.

## Tempo e movimento (§4.3–§4.4; números no `tokens.css`)

- Texto no ar ≥ 2,0 s; beat ≥ 1,5 s; foto/footage parado ≤ 6 s; rajada ≤ 20 %; respiro ≥ 10 %; mundo real ≥ 60 %.
- Mapa seguido de mapa = uma viagem de câmera (1,5–3 s, cúbica); corte seco só na troca de regime.
  Mapa nunca parado (03/10).
- Rótulo 300 ms (+24 px); território 500 ms; anel 56 px, traço 10 px, pulso 1→1,8 em 1,2 s, duas vezes, e para.
- Ken Burns 1,00→1,12 em 6 s, até 80 px rumo ao assunto; produto das escalas ≤ 1,4.
- «A mão que arruma» (movimento A, 07/10): assentamento 1,03→1,00 em 0,22 s; sombra solta; luz 120 ms atrás;
  levantar 0,35 s; câmera parada no grifo; 250 ms de repouso antes do corte. B e C recusadas.
- Animação desenhada: o **traço de engenheiro** (07/10) — linha `--tinta` 6 px sem preenchimento, cota Inter 84 px,
  com a física do ilustrador (o que age tem contato e pivô no lugar físico; nada de balanço que não amortece).
  Mais ilustração quando explica melhor, sem número fixo (14/10).
- **Sobre o mapa, mais vezes** (Lucas, 24/10/2026: «agora há também animações sobre o mapa (o que é o correto e deveria
  ocorrer mais)»; do vídeo 5 em diante): a animação desenhada por cima do mapa, presa ao lugar que a fala nomeia (no
  Peru, o caminhão-pipa da s44 e a correnteza da s37), é o jeito preferido de pôr ilustração em fala de lugar, e entra
  mais vezes. Ela soma ao mapa: não o tira da tela.

## Modelos de cena (§5)

MAPA (satélite) · REGISTRO (asset real em tela cheia) · PRANCHA (atores sobre `--fundo`; ator = círculo 640 px) ·
DADO (sobre `--papel`) · DOCUMENTO (folha de papel sobre a mesa, Courier Prime, rasgo, fita, grifo `--destaque` a
35 %). Card de pessoa: retrato impresso com fita, nome em rótulo, cargo em legenda. A mesa (do vídeo 2 em diante,
07/10): still de satélite público (Landsat/NASA) escurecido e desfocado, por baixo de tudo (acima, «Onde mora cada
coisa»). Foto < 1.600 px, ou que passaria de 1,4× em tela cheia, vai impressa sobre a mesa (27 e 29/09). Faceless:
0 % de apresentador, nenhuma pessoa gerada por IA.

## A abertura e o mapa (do vídeo 5 em diante)

**O gancho que prende** (Lucas, 24/10/2026, depois de publicar o Peru: «o início dos próximos deva ser mais atrativo
visualmente, ou seja, mais interativo, com animações, imagens sobre o local e o uso do mapa»; ele marcou as quatro regras):
- **Abrir no lugar.** Os primeiros 2–3 s são a imagem real mais forte do lugar de que o vídeo trata (drone, aéreo ou
  foto), em movimento: o voo do drone, ou o empurrão lento sobre a foto. O mapa vem logo depois, nunca primeiro. Sem
  imagem real do lugar com licença, isso é falta a declarar em destaque (no canal, a Sala pergunta ao Lucas antes de
  abrir no mapa).
- **Ritmo no gancho.** Até a vinheta, uma troca visual a cada 3–6 s: troca de cena, ou um beat que muda a imagem inteira
  (outra vista, outra linguagem). Nenhuma cena do gancho passa de ~8 s, e as fusões de cena (o `fundir`) não se aplicam
  ao gancho. O gancho mistura pelo menos três linguagens (imagem real, mapa, animação ou gráfico) e mostra o lugar em
  pelo menos duas imagens reais.
- **Mapa em movimento.** O mapa do gancho entra voando do continente (ou do globo) até o lugar, com o relevo 3D onde ele
  ajuda a ler (só com o ok do Lucas do vídeo: «Base de mapa», abaixo), a região falada demarcada e os números da fala
  animados na tela (contagem, barra, área que se acende), nunca um número parado.
- **A fala começa pelo concreto** (`voz.md`, «A abertura»).
- Quem planeja: o montador (as cenas do gancho e as durações), o diretor de arte (sem fusão no gancho) e a regência (as
  imagens reais, as linguagens e os beats). Quem constrói: o editor de arte e o mapista. O `qc-visual` cobra como achado
  o gancho fora destas regras.

**A região falada, sempre demarcada** (Lucas, 24/10/2026: «SEMPRE demarcar a região que está sendo falada»; do vídeo 5 em
diante):
- quando a fala nomeia ou percorre uma região (uma costa, um deserto, uma bacia, um vale, uma faixa entre duas cidades),
  o mapa a demarca enquanto ela é dita: contorno ou área acesa da região, ou, sem polígono lido, o trecho marcado entre
  os pontos que a fala dá. O espectador não deduz a região só pelo nome;
- a demarcação sai de geometria lida, com procedência, nunca de um polígono desenhado à mão como se fosse o oficial. Sem
  fonte para o limite, marca-se o que a fala afirma (os pontos, o trecho, a direção) e se declara;
- quem planeja é a regência (em toda cena de mapa: «qual região a fala nomeia, e como ela aparece demarcada?»); quem
  constrói é o mapista; o `qc-visual` cobra a região falada sem demarcação como achado.

## Base de mapa (§6)

- MapTiler satellite-v2 + terrain-rgb-v2 (`canal.json` › `mapa.perfil`, 26/09). **Relevo 3D só com o ok do Lucas do
  vídeo**: no vídeo 3, «Plano, sem relevo» (15/10); no vídeo 4, «Sim e pode usar relevo quando necessário» (21/10), onde
  o relevo explica a cordilheira, a encosta ou o vale, nunca enfeite. **No vídeo 5, como no Peru** (Lucas, 24/10/2026,
  à pergunta «O vídeo 5 é quase todo mar: o fundo vem da GEBCO (grátis). Posso usar o MapTiler na costa e na superfície,
  como no Peru?»: «Sim, como no Peru (Recomendado)»): o MapTiler nas cenas de mapa, com relevo 3D onde a cena precisar,
  sem pergunta por cena. O fundo do mar vem da batimetria da GEBCO (domínio público); se o `terrain-rgb-v2` tem o fundo
  do mar, ainda está a conferir.
- Tratamento do satélite (09/10): `raster-brightness-max 0.92`, `raster-saturation 0`, `raster-contrast 0.25`.
- Protagonista `--destaque` a 85 % (40 % com contexto), contorno `--tinta` 6 px; contraparte a 35 %.
- Fronteira: branco a 70 %, 5 px, sobre `#0B0F14` a 60 %, 12 px — única linha branca; estrada/rota em
  `--contraparte`, a protagonista em `--destaque`; a água em `--agua` (acima); legenda de cores a 84 px.
- Crédito na tela o tempo todo: `© MapTiler © OpenStreetMap contributors`. Plano Flex: vídeo só até 100 mil inscritos.
- Bases e dados aceitos (27/09) e os que não servem: as roupas do `mapista` e do `pesquisa-geo`.

## Grafia de tela (§7)

Inglês dos EUA, AP Stylebook. `2,700` · `$265 billion` · imperial primeiro (`22.2 ft (6.76 m)`) · datas absolutas.
Crédito `Source: <instituição>, <ano>` e `<autor> / <acervo> · <licença>`; domínio público sem crédito na tela.
Aviso do ano: `Photo from 1998`. A grafia de tela é a do AP com algarismos mesmo quando o roteiro gravado da obra
(`_obra/roteiro-aprovado.md`) traz o número por extenso para a voz ler.

## Logo, marca d'água e vinheta (§8; quem os põe é o master, não a cena)

- **A agulha** (01/10): agulha de bússola em dois triângulos; norte em `--destaque`, sul em `--tinta`, corte de 12°.
- Marca d'água: só `--tinta`, disco `--fundo` a 65 %, **100 px** no 4K, **30 %** de opacidade, canto de cima à
  direita a 60 px das bordas, gravada no vídeo do fim da vinheta ao fim (09/10 e 14/10). Nenhuma logo na cena.
- Vinheta (14/10): agulha 800 px e ALPHA POINT em Barlow 800 a 280 px sobre a assinatura do gancho, 4–8 s, terminando
  na marca d'água. A cena por baixo deixa livre o centro (x 1316–2556, y 640–1552) enquanto ela corre.
- Banner: ALPHA POINT + «Geography and geopolitics, on the map.» sobre curvas de nível (09/10).
