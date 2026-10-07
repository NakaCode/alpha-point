# MARCA — identidade

> Tudo aqui é gosto DESTE canal — **valores, nunca adjetivos**. Pisos de ofício (palco 4K, 260/104/72/72)
> não moram aqui: moram nos ofícios. Aqui mora quanto ACIMA do piso o Alpha Point quer, e com que cor.
>
> Escrita no onboarding (23/09/2026), a partir das respostas do dono e de quadros de dentro dos vídeos
> das referências: Geography Effect, MirAtlas60, Big Systems, Capital Financeiro.

## 0 · O canal em uma linha

Geografia e geopolítica para quem **não** acompanha geopolítica: público norte-americano, 25–60 anos.
**Faceless**: ninguém aparece falando para a câmera. A tela é sempre mapa, registro real, prancha ou dado.
Não é partidário, não é sensacionalista, não é notícia do dia, não usa fonte que não se possa verificar.

## 1 · A âncora

**O mapa de briefing de uma redação internacional**: foto de satélite em cor natural, escurecida; sobre
ela, UM território aceso numa cor sólida e um rótulo preto com letra branca. É o mapa que um editor
projeta para explicar um conflito em dois segundos, e o vídeo **viaja por dentro desse mapa**: da escala
do mundo ao estreito, do estreito à foto do porto, do porto de volta ao mapa.

O que as quatro referências têm em comum, e é isto que o canal herda:
- **base de satélite com relevo**, nunca vetor chapado (Geography Effect, MirAtlas60);
- **território = polígono inteiro preenchido**, com rótulo pequeno e branco;
- **registro real em volume**: drone, arquivo, foto de agência (Geography Effect, Capital Financeiro);
- **prancha de atores** sobre fundo escuro, com bandeiras e setas (Big Systems);
- **as cenas se encadeiam**: o mapa não corta para outro mapa, a câmera anda.

O que o canal **não** herda: número de contagem regressiva no canto, emoji desenhado como ícone,
cartaz de "fato absurdo".

**A assinatura: o ponto.** O nome é Alpha Point, e o sinal próprio do canal é o **anel** que marca o
ponto que importa: um estreito, uma base, um porto, uma usina. Especificação em §4.4. O anel marca
PONTO. País ou região é sempre o polígono inteiro, nunca anel (lei do ofício).

## 2 · Paleta

Cor com PAPEL. Uma cor = um significado, no vídeo inteiro.

| Token | Valor | Papel |
|---|---|---|
| `--fundo` | `#0E1726` | fundo de prancha (atores, fluxos, causa → efeito) e a mesa das cenas sem mapa, com o feltro e a luz (§5, "A mesa") |
| `--painel` | `#172338` | cartão sobre `--fundo` |
| `--papel` | `#ECE8DF` | fundo claro de DADO (gráfico); a folha de DOCUMENTO e o cartão da fala citada, sobre `--fundo` (§5) |
| `--tinta` | `#F4F1EA` | texto sobre escuro, contorno do território protagonista |
| `--tinta-escura` | `#14181F` | texto sobre `--papel` |
| `--rotulo` | `#0B0F14` a 88% | pílula do rótulo sobre mapa ou registro |
| `--destaque` | `#F5A524` | **o protagonista do vídeo**: o território, a série, o ponto. UMA entidade por vídeo. Única exceção: o anel (§4.4), assinatura do canal, sai em `--destaque` mesmo quando marca um ponto que não é o protagonista |
| `--contraparte` | `#2EC4B6` | o segundo ator, quando a cena compara dois |
| `--neutro` | `#737D8E` | do terceiro ator em diante: sem matiz nova, só rótulo |
| `--tensao` | `#E4572E` | zona de conflito, risco, perda. **Nunca** é a cor de um lado |
| `--contexto-2` | `#4575EE` | **azul**: território de contexto do outro lado da fronteira internacional, só no mapa, a 25 % (§6, "Os territórios do contexto") |
| `--contexto-3` | `#BAACF6` | **lavanda**: o vizinho de contexto mais importante do mesmo país, só no mapa, a 25 % (§6) |
| `--contexto-1` | `#694C8B` | **violeta**: o segundo vizinho de contexto do mesmo país, sempre com nome, só no mapa, a 25 % (§6) |

**O `--neutro` foi escurecido em 25/09/2026** (era `#8A94A6`; mesma matiz, só mais escuro). Medido com o
`contraste.mjs` da pré-v1 da Régie (daltonismo por Machado 2009, distância CIEDE2000, limiar 10): o antigo ficava a
7,8 do `--contraparte` para quem tem deuteranopia (os dois viravam a mesma cor) e a 2,5:1 sobre o `--papel`,
abaixo dos 3:1 de elemento gráfico. O novo fica a 15,8 do `--contraparte` no pior tipo de daltonismo e a
4,32:1 sobre o `--fundo`, 3,79:1 sobre o `--painel` e 3,40:1 sobre o `--papel`. Decisão do Lucas.

**As cores de contexto entraram em 04/10/2026** (Lucas: "Uma cor nova por território", e depois "Aprovo assim"; o
registro em §6, "Os territórios do contexto"). São as únicas cores da paleta que só existem no mapa: fora dele o terceiro
ator continua `--neutro`, porque a lavanda pura não passa 3:1 sobre o `--papel`, nem o violeta sobre o `--painel`.

**Regras de cor**
- **Vermelho contra azul como dois lados: proibido.** Para o público dos EUA é a cor de partido
  (republicano × democrata). Dois lados são `--destaque` × `--contraparte`.
- Máximo de **3 matizes** numa cena, fora a base de satélite.
- Destaque em texto de leitura é PESO, não cor (ofício). `--destaque` em texto só no rótulo do
  próprio protagonista.
- Bandeira é asset oficial (ofício), não fonte de paleta: não pinte território com as cores da bandeira.

## 3 · Tipografia

| Uso | Família | Peso | Licença |
|---|---|---|---|
| número-herói, título de bloco | **Barlow Condensed** | 800 | SIL Open Font License 1.1 |
| rótulo, legenda, eixo, crédito, fala citada | **Inter** | 500 corpo · 700 rótulo · 800 ênfase | SIL Open Font License 1.1 |
| alternativa declarada (glifo que falte, escrita não latina) | **Noto Sans** (e a Noto da escrita: Arabic, Hebrew, CJK…) | mesmos pesos | SIL Open Font License 1.1 |
| o texto da folha de documento (corpo e cabeçalho), e só ele | **Courier Prime** | 400 corpo · 700 cabeçalho | SIL Open Font License 1.1 |

As quatro vêm do Google Fonts. A alternativa entra no **bloco inteiro**, nunca no meio da linha (ofício).

A **Courier Prime** entrou em 27/09/2026, com a folha de documento (§5), e o Lucas autorizou o download. Ela
está em `marca/fontes/courierprime/`, com a procedência no `ORIGEM.json`: google/fonts, commit `23e54b51`. O
`provar-fonte` da pré-v1 passou nos pesos 400 e 700 (`marca/provas/fonte-courierprime.png`). Ela só escreve
dentro da folha; fora dela, nunca: a fala citada no cartão de papel do card continua em Inter.

- Números em Inter com algarismos tabulares (`font-variant-numeric: tabular-nums`) em tabela e eixo.
- Nome de país e de região: **CAIXA ALTA**, Inter 700, tracking `+0.04em`. Cidade, rio, estreito:
  caixa normal, Inter 700, tracking 0.
- Tracking negativo só no herói de 1–2 palavras em Barlow Condensed, `-0.01em`. Em texto de leitura, 0.
- Teste de glifo antes do primeiro vídeo: `Ł ő ş ğ ı ñ ã ç ệ ř ž` e caixa alta nos pesos 500, 700 e 800.

## 4 · Alvos

No palco **3840×2160**. O piso reprova (ofício); o alvo é o que a marca pede; o teto também reprova.

### 4.1 · Texto

| Papel | Piso (ofício) | **Alvo** | Teto | Máx. de palavras |
|---|---|---|---|---|
| número-herói / título | 260 | **360** | 560 | 5 |
| fala citada | 260 | **280** | 340 | 12 |
| rótulo (inclui NOME DE LUGAR) | 104 | **128** | 160 | 3 |
| eixo / legenda | 72 | **84** | 104 | — |
| crédito / fonte | 72 | **76** | 88 | — |

- Nome de lugar é rótulo, **nunca** herói (ofício): o teto de 160 px vale para ele.
- Pílula do rótulo: `--rotulo`, cantos de 12 px, respiro interno de 24 px × 40 px.
- **O nome dentro do território de contexto** (04/10/2026, com as cores de contexto) é o segundo tratamento de texto
  sobre mapa, ao lado da pílula: caixa alta, Inter 700, 104–128 px, `--tracking-lugar`, letra em `--tinta`, contorno
  de 14 px em `--rotulo` por fora da letra (`paint-order: stroke fill`) e a sombra suave (`--nome-territorio-*` nos
  tokens). Medido na s42: mediana de 14,6:1 sobre o gelo no 4K e no 1080p e de 6,1:1 no celular; o pior décimo da
  letra, sobre o gelo mais claro, fica em 2,6–3,0:1.
- Texto de relação sobre a seta de uma PRANCHA (ex.: `claims the same waters`) é **legenda**:
  84 px, Inter 500, `--tinta` a 80 %.
- **Card de pessoa** (Lucas, 26/09/2026): o nome é **rótulo** (pílula, 128 px, Inter 700, até 3 palavras) e
  o cargo é **legenda**, numa linha menor logo abaixo (84 px, Inter 500). A regra inteira está em §5.
- **Aviso do ano da foto** (Lucas, 27/09/2026): é **legenda** (84 px, Inter 500, `--tinta`). Sobre a foto, vai
  numa pílula `--rotulo`, com cantos de 12 px e respiro interno de 16 px × 28 px. Na margem da foto impressa do
  card, vai sem pílula, em `--tinta-escura` a 72 %. A regra inteira está em §6.
- **A chamada (CTA)** (Lucas, 01/10/2026; do vídeo 2 em diante). Três textos que só existem dentro dela. A regra
  inteira está em `marca/cta.md`:
  - **a pergunta da chamada**: Barlow Condensed 800, alvo **176 px**, piso 160, e nunca acima do alvo (Lucas: "176 px,
    um pouco menor"). Ela desce a 160 só para caber em 2 linhas com uma quebra boa; 3 linhas, só a 160; 1 linha, só a
    176. Até 3 linhas, sem teto de palavras nem de caracteres: o que não cabe em 3 linhas a 160, ou só cabe partindo a
    oração, a página recusa (`marca/cta.md` §7). Fica entre o teto do rótulo (160) e o piso do título (260), e é bloco
    de leitura (§4.2);
  - **a ação da chamada**: Inter 700, o texto do botão claro. "Subscribe" a 128 px (o alvo do rótulo) e "Answer in the
    comments" a 112 px (acima do piso do rótulo, 104). "Answer in the comments" tem 4 palavras, uma a mais que o
    máximo do rótulo: é a exceção;
  - **ALPHA POINT**, na faixa da inscrição, é o nome do canal, como no banner (§8): Barlow Condensed 800, 112 px.

### 4.2 · Espaço

- Margem de segurança: **200 px** nas laterais, **160 px** no topo.
- Faixa inferior, **y > 1880**: só crédito, alinhado à esquerda em x = 200 e terminando antes de
  x = 1720. Crédito mais longo quebra em duas linhas de 76 px e nunca encolhe: é o caso da linha do
  Shutterstock e da do Copernicus. O centro dessa faixa fica livre para a legenda automática do YouTube
  e para a barra do player.
- **Canto reservado**: caixa de **400 × 400 px** no canto inferior direito, sem texto nem elemento-chave.
  É onde o YouTube sobrepõe a marca-d'água do canal.
- **Teto de elementos simultâneos: 6. Alvo: 4 a 5.**
  - **Contam** texto e gráfico: rótulo, número, seta, barra, anel, território aceso, cartão (ofício do
    editor-de-arte, "Densidade é orçamento").
  - **Não contam** a base de tela cheia (satélite, footage), o crédito e a textura.
  - O círculo de ator com a bandeira e o nome embaixo é **um** cartão.
  - Cena que encosta no teto está no pior extremo, não no bom.
- **Até 3 blocos de texto vivos ao mesmo tempo**, dentro dos 6 elementos (`--max-blocos` em `tokens.css`; o teto
  da neutra, que não sobe). **Bloco é texto de leitura** (Lucas, 28/09/2026, 21:5x de Brasília): a fala citada,
  a folha de documento (uma folha é um bloco), a legenda longa em frase, o card com o cargo. Nome de lugar,
  número e rótulo de até 3 palavras não são bloco: contam só no teto de 6 elementos. A pergunta: "A marca limita
  o texto na tela a 3 blocos ao mesmo tempo, dentro do teto de 6 elementos. O que conta como um bloco?" A
  resposta: "Só texto de leitura (Recomendado)". A opção dizia: "Bloco é o que se lê como frase: a fala citada,
  a folha, a legenda longa, o card com cargo. Nome de lugar, número e rótulo de até 3 palavras contam só no teto
  de 6 elementos. O mapa da cena 44, com 5 nomes, passa. O portão do motor já trata assim: aceita até 9 rótulos,
  e a média das cenas aprovadas é 4."
- Um herói por cena, ou nenhum.

### 4.3 · Tempo e ritmo

| Medida | Valor |
|---|---|
| bloco de texto no ar | ≥ **2,0 s** (piso de ofício: ~1,5 s) |
| piso de duração de beat | **1,5 s** |
| teto de permanência de footage ou foto **parada** (sem movimento com propósito) | **6 s** |
| rajada (beats < 2,5 s) | ≤ **20 %** do tempo do vídeo |
| respiro (beat ≥ 6 s com movimento lento) | ≥ **10 %** do tempo do vídeo |
| **régua de mundo real**: tempo em registro real (footage, foto, satélite de geometria real) | ≥ **60 %** |

### 4.4 · Movimento

- **Mapa seguido de mapa é UMA viagem de câmera** (`fundir: true`), nunca um corte. Corte seco só
  na troca de regime: mapa → registro, registro → prancha.
- Viagem de mapa: **1,5–3 s**, easing cúbico de entrada e saída.
- Foto parada: Ken Burns de escala 1,00 → 1,12 em 6 s, linear.
- Rótulo entra em **300 ms** (opacidade + 24 px de subida), ease-out. Preenchimento de território:
  **500 ms**.
- **O anel (o ponto)**: círculo de **56 px** de diâmetro, traço de **10 px** em `--destaque`, e um pulso
  que vai de escala 1 → 1,8 e opacidade 1 → 0 em **1,2 s**, duas vezes, e para.
- **O movimento da chamada (CTA)** (Lucas, 01/10/2026; `marca/cta.md`). É diferente do rótulo em três pontos:
  - **a entrada**: **360 ms**, com a opacidade em curva suave (smoothstep) e **24 px** de subida em ease-out (o rótulo
    tem 300 ms em ease-out). O primeiro e o último quadro visível ficam abaixo de 5 % de opacidade, sem estalo. Na
    inscrição, o botão entra 0,12 s depois da faixa; no comentário, as linhas da pergunta entram 80 ms uma depois da
    outra, e a peça clara aos 0,40 s;
  - **a saída**, que o rótulo não define: espelhada, **400 ms**, opacidade em curva suave e 24 px de descida em
    ease-in-out, a peça clara 0,12 s antes da escura;
  - **o giro da agulha**: ao entrar, a agulha assenta no norte num giro amortecido curto. Começa a −12°, oscila e
    para em 0° exato em **0,9 s**, uma vez por chamada. Estava nas prévias que o Lucas aprovou, e fica (`marca/cta.md`
    §3).
  - O botão claro se enche de `--tinta` em **500 ms**, como o preenchimento de território, com a frente inclinada a
    12°, o corte da agulha.

## 5 · Os modelos de cena

| Modelo | O que é | Base |
|---|---|---|
| **MAPA** | território aceso sobre satélite; a viagem de câmera | satélite escurecido (§6) |
| **REGISTRO** | footage ou foto real em tela cheia, com rótulo de lugar e crédito; a foto de outro ano, com o aviso do ano (§6) | o próprio asset |
| **PRANCHA** | atores e relações, causa → efeito. Ator = círculo de 640 px, traço de 6 px na cor do papel dele, bandeira oficial dentro e nome embaixo. Setas e linhas de 6 px; ícone em círculo de 160 px | `--fundo` |
| **DADO** | gráfico com série do protagonista em `--destaque` e da contraparte em `--contraparte`; eixo em `--tinta-escura` a 60 % | `--papel` |
| **DOCUMENTO** | lei, tratado, cédula, folheto, manchete real, como **folha de papel sobre a mesa** (a regra da folha, logo abaixo); o trecho que importa grifado em `--destaque` a 35 %, passando junto com a voz. Peça do Estado do Alasca ou de imprensa, só com permissão clara; sem ela, o trecho recriado no visual do canal, com o texto fiel e a fonte citada (`midia.md` §7.1) | `--fundo` (a mesa), com a folha em `--papel` |

**A mesa: feltro sob a luz** (Lucas, 30/09/2026, 22:4x de Brasília). Ao ver a prévia da s09 do Juneau, ele disse
sobre a foto impressa: "Achei esse fundo meio sem graça, um azul 'chapado'". Viu cinco fundos lado a lado, no mesmo
quadro (`out/juneau/_tmp/piloto/mesa/prova-mesa-ladd-1080p.png` e `prova-mesa-1915-1080p.png`). A pergunta: "Qual
fundo de mesa fica valendo nas cenas sem mapa (documentos, cards e fotos impressas, cerca de metade do vídeo)? A D
(sobre o mapa) já é o que o vídeo final faz neste trecho da s09, mas não serve para documento nem card." A resposta:
"E, feltro sob a luz (Recomendado)". A opção dizia: "Material com textura visível e uma luz suave atrás da foto. É a
que mais muda o 'chapado'. O azul fica um pouco mais acinzentado. Libera o degradê na marca, que hoje é proibido."
- **O que é:** a mesa continua em `--fundo`, com duas camadas a mais:
  - **o feltro**: fibra e grão procedurais, sem arquivo de terceiros (`--mesa-feltro`);
  - **a luz**: uma poça de luz suave atrás do objeto principal (a foto, a folha, o card), que cai para um azul mais
    escuro nas bordas (`--mesa-luz-*`). O CSS está em `marca/tokens.css`, "A MESA".
- **Onde:** em toda cena sem mapa cuja base é `--fundo`: DOCUMENTO, card de pessoa, foto impressa e PRANCHA (§5,
  tabela dos modelos). A pergunta disse "as cenas sem mapa", e a PRANCHA é uma delas. O DADO continua em `--papel`.
  O MAPA e o REGISTRO em tela cheia continuam sem degradê, véu ou vinheta (§6).
- **A luz é a única exceção ao "sem degradê"** (`--degrade: none` nos tokens). Ela segue o objeto principal: o centro
  da poça fica atrás dele, e anda com ele quando ele anda.
- **As duas ficam por baixo de tudo:** da foto, da fita, da folha, do card e de todo texto. Textura ou luz por cima
  de uma foto é filtro sobre a foto, e a regra da foto impressa proíbe isso (logo abaixo). Na s09 do Juneau, a
  textura de antes estava num `::after` por cima de tudo e foi corrigida (`APRENDIZADOS.md` item 53).
- **Contraste medido na escolha** (quadro 4K da s09, pior ponto, com o fundo atrás da letra): crédito em `--sec`,
  5,3:1; aviso do ano na pílula, 12,0:1. Os dois acima do piso. O feltro clareia a mesa: a cena que puser texto
  direto sobre ela confere o contraste de novo.
- O feltro e a luz são textura e não contam como elemento (§4.2).
- **A cena de referência** é a s09 do Juneau, no render de 30/09/2026, 22:54 (carimbo `0b1ed726…`, 2160p): a foto de
  1915 impressa e a Ladd Field, com a luz atrás da foto que está na mesa. O Lucas viu a prévia com a narração e disse:
  "Sim, ficou bom".

**A folha de documento** (Lucas, 27/09/2026). Ele viu três caminhos numa página de opções e escolheu o
"Arquivo datilografado". Da versão anterior, apontou o risco de o rasgo cortar texto longo: "tenho medo da B
recortar textos longos (aparentou que pode acontecer)". A folha foi corrigida, e ele confirmou a B corrigida.
- **A folha**: `--papel` com textura de papel, levemente torta (até 1,5°), com sombra, sobre `--fundo`. A borda de
  baixo é rasgada, e a folha fica presa por fita nos cantos de cima.
- **A letra**: o texto da folha em **Courier Prime** (§3). O corpo em 400, alvo 86 px, piso 84 px (o da legenda).
  O cabeçalho em 700, 84 px, com a referência da peça (ex.: `AS 44.06.055`) numa caixa de contorno.
- **Nenhuma palavra cortada**: a folha cresce com o texto, e nunca o texto com a folha.
  - O rasgo fica só na margem em branco: pelo menos **240 px** entre a última linha e o rasgo.
  - A fita fica fora da área do texto.
  - Texto que não cabe na tela nessas medidas tem duas saídas:
    - a câmera desce pela folha junto com a voz;
    - ou a folha recua e escurece, e o trecho que a voz diz aparece ampliado ao lado, literal e com até 12
      palavras.
- **Recriação, nunca fac-símile**: sem brasão, selo, timbre, logo ou assinatura (`midia.md` §7.1 e §7.6).
- **Com permissão de uso clara**, a página real (foto ou scan) entra como a folha, com a mesma fita e sombra, sem
  redesenho.
- A textura, a fita e a sombra não contam como elemento (§4.2).
- A conferência visual da folha, do card e do aviso do ano da foto (§6) é `marca/prancha-documento-card.html`
  (abre no navegador, com as fontes de `marca/fontes/`): é montagem de referência, não cena do pipeline.

**A foto antiga pequena, impressa sobre a mesa** (Lucas, 27/09/2026). A pergunta: "Muitas fotos do ano certo (de 1880 a 1990) são pequenas para a tela 4K. Como elas entram?" A resposta: "Impressa sobre a mesa (Recomendado)". A opção dizia: "Entra como foto impressa, com borda clara, fita e sombra, como o documento e o card. Ampliada no máximo 1,4 vez e sem melhoria artificial."
Logo depois, ele completou: "A prioridade ainda deve ser fotos grandes e com qualidade, a exceção deve ser para casos MUITO específicos".
- **É exceção, para casos muito específicos.** A foto pequena só entra quando as três coisas valem juntas:
  - ela é o registro daquilo que a fala nomeia, naquele momento (o evento, a pessoa ou o lugar no ano da fala), e
    não uma vista qualquer;
  - não há foto grande e com qualidade (§6) que sirva ao plano, nem do ano do fato nem de outro ano com o aviso;
  - ela tem qualidade: nítida, sem retícula de impressão, sem compressão pesada, sem marca-d'água.
  Quem a propõe escreve por que o caso é específico, e o `conferente-de-midia` julga. Na dúvida, ela não entra.
- **Vale para** a foto de época (registro histórico) com menos de 1.600 px de largura, que nunca vai em tela
  cheia. A de 1.600 px ou mais segue o REGISTRO em tela cheia, se a enche sem passar de 1,4 vez (abaixo).
- **A foto média também vai impressa** (Lucas, 29/09/2026, 03:3x de Brasília): a de 1.600 px ou mais que, para
  encher os 3.840 px da tela, seria ampliada mais de 1,4 vez vai impressa sobre a mesa, como a pequena, e nunca é
  ampliada além de 1,4 vez. A pergunta: "Três fotos do Juneau têm entre 1.600 e 2.500 px de largura: a de 1915, a
  de Fairbanks em 1972 e a da sessão de 2017. Pela regra, foto de 1.600 px ou mais vai em tela cheia, mas para
  encher a tela 4K estas seriam ampliadas de 1,5 a 1,9 vez e ficariam menos nítidas. Como elas entram?" A
  resposta: "Impressa na mesa (Recomendado)". A opção dizia: "Como está no plano: foto impressa sobre a mesa, com
  borda, fita e sombra, ampliada no máximo 1,4 vez. Fica nítida. É a mesma lógica do retrato: foto que precisa ser
  ampliada não conta como grande. Vira regra para os próximos vídeos." No Juneau: s09, s16 e s56. Em tela cheia,
  então, só a foto que a enche sem passar de 1,4 vez (2.743 px de largura ou mais).
- **A foto pequena preenche a lacuna, uma ou mais sobre a mesa** (Lucas, 30/09/2026, 20:5x de Brasília, sem
  pergunta, depois de ouvir que 9 dos 18 itens da caça do Juneau não tinham foto nem vídeo e iriam a mapa: "Às
  imagens pequenas poderiam adotar aquele método de 'exibir em cima da mesa', uma composição com talvez mais que
  uma foto", e logo depois "pra preencher essas lacunas").
  - **Do vídeo 2 em diante.** No Juneau, as lacunas seguem para o mapa, como o `montador` já ia fazer (Lucas,
    30/09/2026, 21:0x, quando o Claude disse que mandaria a pesquisa atrás dessas fotos nas 9 lacunas do Juneau:
    "Talvez isso deva vir somente no próximo vídeo").
  - **Quando:** o plano ficou sem foto grande e sem vídeo que sirva, do ano do fato ou de outro ano (a lacuna, o
    NÃO ACHADO). Aí a foto pequena entra antes de o plano virar mapa ou desenho. O caso específico acima deixa de
    ser exigido para ela: a lacuna já é o caso. A foto grande continua em primeiro lugar.
  - **Qual foto:** a que mostra o que a fala nomeia (o lugar, a coisa, o evento), não uma vista qualquer. Tem
    qualidade (nítida, sem retícula, sem compressão pesada, sem marca-d'água), 800 px ou mais no lado maior, data
    na origem e, se é de outro ano, o aviso do ano (§6). Vale para foto de hoje e de época.
  - **Uma ou mais na mesma mesa:** várias fotos impressas do mesmo assunto do plano, lado a lado ou sobrepostas
    pelas bordas, cada uma com a moldura, a fita, a sombra e a inclinação da foto impressa. Nenhuma cobre a parte
    que importa de outra, e cada uma fica em até 1,4 vez o tamanho do arquivo. Cada uma leva o seu crédito e o seu
    rótulo de lugar, quando há. A disposição é do `diretor-de-arte` e do `editor-de-arte`. A composição ainda não
    tem prancha: a primeira cena assim vai ao Lucas como prévia antes de virar molde.
  - O `conferente-de-midia` julga cada foto. A escolha entre a mesa e o mapa, plano por plano, é do `montador`.
- **A foto impressa**: moldura clara em `--tinta`, fita, sombra e até 2° de inclinação, sobre `--fundo`, como a foto
  do card. Na tela, fica no máximo **1,4 vez** o tamanho do arquivo.
- **Nada de melhoria artificial**: nenhum upscale, clássico ou generativo, nenhum filtro e nenhum recorte que mude o
  sentido.
- O rótulo de lugar e o aviso do ano (§6), quando há, ficam sobre a mesa, fora da foto. O crédito fica na faixa de
  sempre.
- **Piso**, padrão do canal e não pergunta do Lucas: 800 px no lado maior. Abaixo disso, a foto fica pequena demais
  na tela e não entra.
- Conta na régua de mundo real como registro (§4.3).
- **Documento antigo**, pela mesma lógica: a página real, com permissão, entra como a folha só até 1,4 vez o tamanho
  dela. Acima disso, vai a recriação datilografada, que já é o caminho de quando não há permissão.
- **Documento de outra data que atesta o fato, com rótulo** (Lucas, 27/09/2026, 21:1x de Brasília).
  - A pergunta: "Cena 52: a voz fala da anulação de 2009, mas a decisão de 2009 não está em nenhum acervo aberto.
    Mostramos a página da decisão de 2011, da corte de apelação, que confirmou a de 2009, com o rótulo "upheld on
    appeal, 2011" na tela?"
  - A resposta: "Sim, com o rótulo (Recomendado)". A opção dizia: "A página real entra, e o rótulo deixa claro que é
    a confirmação de 2011."
  - O que vale: quando o documento do fato não está em acervo aberto, entra a página real de um documento de outra
    data que o atesta (no caso, a decisão que o confirmou), com um rótulo que diz o que ela é e de quando é. O rótulo
    fica na tela todo o tempo da página, no papel legenda de §4.1, como o aviso do ano da foto (§6). A grafia final
    segue o §7 e é do `redator-de-tela`. Sem o rótulo, a página não entra.
  - A pergunta tratou do s52 do Juneau. Outro caso parecido segue esta regra só se o documento atestar o mesmo fato
    que a fala diz; na dúvida, pergunta nova.
- **Vídeo de época** abaixo de 4K não foi perguntado: continua DECISÃO DO LUCAS PENDENTE.

**Animação para explicar** (Lucas, 27/09/2026: "Acredito que para os próximos vídeos a gente possa utilizar
animações para ilustrar coisas específicas"). Vale a partir do vídeo 2.
- **Mecanismo, processo ou regra**, o que não tem imagem real (como uma votação de títulos funciona, onde a
  avalanche cruza a estrada), vira animação desenhada. Quem a faz é o `editor-de-arte`.
- **Coisa concreta que a fala nomeia** (uma balsa, um lugar, uma pessoa) continua em imagem real: a animação
  compõe, mas não substitui o registro (ofício do `editor-de-arte` e do `montador`, §10).
- **Animação não conta na régua de mundo real** (§4.3). Mapa e registro cobrem o que existe; a animação, o que é
  abstrato.
- **O estilo das animações**, além da PRANCHA, ainda não está na identidade. Quando o vídeo 2 pedir, o Lucas vê
  opções numa página, como viu as do documento.

**Mais mapa, quando a fala pede** (Lucas, 27/09/2026: "Eu acredito que nos próximos devemos usar mais mapas
(mas claro que somente se o contexto permitir"). Vale a partir do vídeo 2, e o Juneau fica como está: perguntado
se valia também para ele, o Lucas respondeu "Só a partir do próximo".
- Quando a fala trata de lugar, distância, rota, território, fronteira ou de onde uma coisa fica em relação a
  outra, o **MAPA é a primeira escolha**, antes do REGISTRO genérico (B-roll de banco) e da PRANCHA.
- "Se o contexto permitir": fala que não é sobre espaço (voto, lei, dinheiro, fala citada) não vira mapa
  forçado. O que a fala pede continua mandando (ofício do montador, §6), e o registro real de um evento
  nomeado não se troca por mapa.
- Na pauta e no roteiro: se o assunto tem um ângulo espacial, ele é preferido, sem mudar o assunto por causa
  do mapa.
- O mapa sobre satélite de geometria real conta na régua de mundo real (§4.3). Cada mapa renderizado gasta da
  MapTiler (§6): o contador se acompanha com o Lucas.

**Faceless**: nenhum plano de pessoa falando para a câmera no papel de narrador, e nenhuma pessoa gerada
por IA apresentada como real.
- **Cota de apresentador: 0 %.** O montador supõe 10–15 % de rosto do apresentador; aqui não há rosto.
- **O master é a narração** sobre tela preta 3840×2160, e **100 % do tempo é coberto por cena**. Não
  existe veredito `manter`, porque não há imagem de origem a manter.
- **Pessoa real citada**: discurso ou entrevista de uma fonte real é REGISTRO, identificado por nome completo e
  cargo (ofício). O **card de pessoa** (Lucas, 26/09/2026: "Nome grande, cargo embaixo"):
  - o **nome** no papel **rótulo** de §4.1: pílula `--rotulo`, alvo 128 px (teto 160), Inter 700, **até 3
    palavras** (`--fs-rotulo` e `--peso-rotulo` em `tokens.css`);
  - o **cargo** numa linha menor logo abaixo, no papel **eixo / legenda** de §4.1: alvo 84 px (teto 104),
    Inter 500 (`--fs-eixo` e `--peso-texto`). A legenda não tem teto de palavras, e o cargo é o que a fonte diz;
  - exemplo aprovado (a caixa também é a do exemplo): `MARIA GLADZISZEWSKI` em cima e
    `Assembly member, City and Borough of Juneau` embaixo. O exemplo dizia `City of Juneau`; o nome oficial da
    prefeitura é City and Borough of Juneau, e o Lucas escolheu o oficial (28/09/2026, 19:5x de Brasília). A
    pergunta: "No card da Maria Gladziszewski (cena 57), qual cargo vai na tela?" A resposta: "City and Borough
    of Juneau (Recomendado)". A opção dizia: "O nome oficial da prefeitura, que ela usa para assinar. O exemplo
    da marca (identidade §5) muda junto. O cargo fica mais longo e quebra em duas linhas sob a foto.";
  - **o ano do cargo** (Lucas, 28/09/2026, 20:2x de Brasília): cargo de outra época leva o ano entre parênteses no
    fim quando a cena não mostra a data, e o card do exemplo também. A pergunta: "No card da Maria Gladziszewski
    (cena 57), o cargo leva o ano no fim, como os outros cards de outra época?" A resposta: "Com o ano, (2017)
    (Recomendado)". A opção dizia: "Fica "Assembly member, City and Borough of Juneau (2017)". Faz série com
    Harris, Clark, Stoops e Dittman, que levam "(1982)". Ao lado da foto vai "Photo from 2020", e sem o ano o
    cargo parece ser o de hoje." No Juneau, o card de s57 fica `Assembly member, City and Borough of Juneau
    (2017)`;
  - o contrato continua pedindo o cargo, em `cards_pessoa` › `o_que_e`;
  - o nome não vai em `--destaque` (§2). O rosto, quando há, segue `midia.md` §7.2; sem foto em fonte
    autorizada, o card sai só com nome e cargo.
- **A composição do card** (Lucas, 27/09/2026: escolheu "B · Foto e cartão de papel" na página de opções):
  - **o retrato** vem como foto impressa, com moldura clara (`--tinta`), presa com fita e levemente torta sobre
    `--fundo`. A moldura é da cena; a foto não se altera: nada de recorte que mude o sentido nem filtro no rosto;
  - **o tamanho do retrato** (Lucas, 27/09/2026). A pergunta: "No card de pessoa, a foto aparece num quadro de uns
    930 px. Um retrato que enche esse quadro sem ser ampliado conta como foto grande?" A resposta: "Sim, se enche
    sem ampliar (Recomendado)". A opção dizia: "Entram retratos oficiais comuns (1.000 a 1.500 px), nítidos no
    tamanho em que aparecem. O do senador Kiehl entra. O do Tony Knowles não entra: precisaria ser ampliado 1,6
    vez, e o card dele sai só com nome e cargo."
    - no card, o retrato é grande quando o recorte que vai ao quadro da foto (932 × 932 px na prancha) o enche sem
      ampliar, ou seja, quando o recorte tem 932 px ou mais. A régua de 1.600 px de largura (§6) é a da foto em
      tela cheia;
    - recorte que pede ampliação não é grande. Retrato de época pequeno só entra pela exceção da foto pequena ("A
      foto antiga pequena", abaixo: caso muito específico, até 1,4 vez); fora dela, o card sai só com nome e cargo;
  - **o nome e o cargo** ficam logo abaixo da foto: o nome na pílula e o cargo embaixo, quebrando na largura da
    foto. Sem retrato autorizado, os dois ficam no lugar da foto;
  - **a fala citada**, quando há, vai num cartão de papel ao lado (a mesma folha do documento, em `--papel`), em
    Inter 700 (alvo 280 px, piso 260), até 12 palavras, entrando junto com a voz;
  - o cargo não passa por baixo do cartão, e nada no card entra na faixa do crédito (§4.2);
  - **o aviso do ano**, quando o retrato é de outro ano que o do fato (§6; Lucas, 27/09/2026): `Photo from 2013`
    na margem de baixo da foto impressa, em `--tinta-escura` a 72 %, 84 px, Inter 500. A moldura tem altura para
    ele: a margem de baixo é de 190 px na prancha.

**A tela final e o carimbo do Juneau** (Lucas, 28/09/2026). Duas perguntas no mesmo dia:
- **O fundo da tela final** (11:2x de Brasília). A pergunta: "Os últimos 20 s do vídeo não têm narração: é onde o
  YouTube põe os botões de outro vídeo e de inscrição. O que fica no fundo?" A resposta: "A última cena, parada e
  escurecendo (Recomendado)". A opção dizia: "O quadro final (o YES da votação e a linha do preço vazia) para e
  escurece aos poucos, sem texto novo. Não disputa com os botões."
- **O estilo e o quanto escurece** (12:3x de Brasília), numa página com três caminhos animados
  (https://claude.ai/artifact/QDi33hvuNYC1aoV1mcybwr):
  - A pergunta: "Qual caminho para o fim do vídeo? O YES é o mesmo carimbo da abertura, então a escolha vale para
    as duas cenas." A resposta: "B, carimbo de borracha à esquerda (Recomendado)". A opção dizia: "O YES com caixa
    e tinta gasta, e a linha do preço embaixo. A direita fica livre para os botões do YouTube, e a mensagem
    continua à vista nos 20 s."
  - E: "Quanto a tela escurece nos 20 s da tela final?" A resposta: "Médio (Recomendado)". A opção dizia: "Termina
    com metade do brilho: o YES segue legível e os botões se destacam."

O que vale, em px do palco 3840×2160:
- **O carimbo** é o YES da abertura (s01) e o do fim (s62), o mesmo:
  - Barlow Condensed 800, 360 px, em `--tinta`, numa caixa de traço de 18 px em `--tinta`, com cantos de 26 px;
  - inclinado −7°, com a tinta gasta (uma máscara de ruído sobre a caixa e a letra);
  - entra batido, como carimbo: grande e transparente, bate e assenta em menos de meio segundo.
  - Na abertura, o que vai dentro e em volta da caixa (a porcentagem, a contagem) é do `diretor-de-arte` e do
    `redator-de-tela`; a caixa, a letra e a tinta são estas.
- ~~**A linha do preço** (o motivo de s02) fica logo abaixo do carimbo~~: **superada em 02/10/2026** (abaixo, "A linha
  do preço vazia sai").
- **Os preços recusados** ficam logo abaixo do carimbo, no lugar da linha do preço (Lucas, 02/10/2026):
  - duas linhas no papel legenda, com o ano e o valor, nas grafias de s60: `1978 · UP TO $966 MILLION` e
    `1982 · ABOUT $2.8 BILLION`;
  - o valor de cada uma se risca com um traço em `--destaque` quando a voz diz "price". O risco começa no início do
    valor, com folga do `·`. É um recurso novo da marca, aprovado só para este fecho;
  - o crédito `Source: Alaska Division of Elections, 1978–1982` fica na faixa de crédito, fora do escurecer.
- **Tudo na metade esquerda**, a partir de x = 330, e a direita livre para os botões do YouTube (os vídeos
  sugeridos e o botão de inscrição). Nada no canto reservado de 400 × 400 px nem na faixa do crédito (§4.2).
- **A tela final** (a cena da cauda, s63) é o último quadro de s62, parado:
  - o brilho vai de 100 % a 50 % em 20 s, linear, e nunca chega ao preto (100 % coberto, acima);
  - nenhum texto novo. Desde 03/10/2026, além do escurecer, a câmera se aproxima devagar do carimbo e dos preços nos
    20 s (Lucas, na linha do tempo: "Tela final um pouco vazia, parada"; a resposta: "Câmera lenta nos 20 s
    (Recomendado)"); a metade direita continua livre;
  - o crédito, quando há, fica fora do escurecer, legível até o fim.
- **A conferência visual** é `marca/prancha-fim.html` (abre no navegador, com as fontes de `marca/fontes/`): mostra a
  voz e os 20 s, os botões do YouTube por cima e as áreas reservadas. É montagem de referência, não cena do pipeline.
- **Nos próximos vídeos**, a tela final parada e escurecendo até metade do brilho, com a composição à esquerda, é a
  proposta; o que vai nela (o carimbo, a linha do preço) depende do motivo de cada vídeo, e o Lucas decide de novo.

**A linha do preço vazia sai** (Lucas, 02/10/2026, na revisão do Juneau no Premiere;
`out/juneau/_pesquisa/revisao-premiere-lucas.md`).
- **O que ele viu:** em s02, o grifo sobre a lacuna vazia ("aparece uma marcação que não marca texto algum"); em s23,
  o campo antes do número ("Acredito que não precise desse campo antes, deixe o número só aparecer"); no fim, "s62 e
  s63 ficaram apenas assim".
- **Na página de decisão, ele escolheu:**
  - s02: o literal termina antes do preço, e o grifo marca palavras que existem;
  - s23: a cédula com o número impresso desde o começo, e o número-herói na palavra da voz;
  - s62: os preços recusados, riscados.
  Depois, para s19: "Sim, como na s23 (Recomendado)".
- **A regra que fica:**
  - campo em branco esperando a voz não vai à tela, nem como lacuna no meio de um literal;
  - um documento recriado mostra o número que está impresso nele, e o número-herói entra na palavra da voz;
  - a linha vazia só vale quando quer dizer "sem preço": no Juneau, só na s35 ("It lost without a price tag"). E mesmo
    ali ela se lia como campo esquecido ("camo de $ vago", Lucas, 05/10/2026), e ele escolheu "Escrever no traço": a s35
    leva NOT LISTED sobre o traço, como anotação, não como texto impresso da cédula. Com isso, nenhuma linha vazia
    fica na tela do Juneau.
- **A exceção:** nas duas cédulas (s19 e s23), o número do literal aparece antes de a voz dizê-lo. É exceção do
  Lucas à regra de texto da regência ("a folha não mostra antes o número que a voz vai dizer"), só nessas duas cenas.
- **A terceira, a s36** (Lucas, 02/10/2026, 17:5x). A verificação depois da revisão achou na lei AS 44.06.055 o
  "twelve" em branco ("over the ______-year period") por 10 s, até a voz. A pergunta: "É o mesmo campo vazio que você
  tirou da s23. Como fica?" A resposta: "Twelve impresso (Recomendado)". A opção dizia: "A lei aparece inteira desde o
  começo, como as cédulas da s19 e da s23. Quando a voz diz "twelve", o grifo e a régua de 12 traços entram nele. Vira a
  3ª exceção à regra "nenhum número antes da voz"." As exceções são s19, s23 e s36, e só elas.

**As marcações do Lucas na linha do tempo** (02 e 03/10/2026, no Juneau; as marcas em `out/_feedback-queue.jsonl` e as
respostas em `out/juneau/_pesquisa/revisao-premiere-lucas.md`, "A linha do tempo"). Valem do vídeo 2 em diante, e no
Juneau onde a resposta dele diz:
- **A abertura mostra o lugar de cima.** "Sempre uma imagem aérea ou abrangente (do lugar) no início" (s01). No
  Juneau: "Vídeo aéreo ou do mapa já neste vídeo".
- **Mapa nunca fica parado.** "mapa muito parado, utilizar mais movimento de câmera (suave)" (s50); a resposta: "Em todo
  mapa parado (Recomendado)", que dizia "A s50 e os outros mapas do Juneau que ficam parados mais de 2 s ganham uma
  aproximação suave e contínua. Vira regra para os próximos vídeos."
- **Os territórios do contexto, cada um com uma cor.** "um dos territórios (talvez o principal da cena) pode sempre
  estar "marcado" com alguma cor" (s42), e depois: "Mas na verdade todos territórios que fizerem parte do contexto do
  vídeo, cada um com uma cor (com baixa opacidade) como no exemplo do print". O print (03/10/2026, de outro canal):
  - o sudoeste da África sobre satélite, com Angola e a África do Sul pintadas de um roxo translúcido, o relevo
    aparecendo por baixo;
  - o nome de cada uma em caixa alta bem espaçada, claro, dentro do território;
  - o país do assunto (a Namíbia) sem preenchimento, com a borda branca;
  - a faixa que é o assunto (a costa) em vermelho cheio;
  - uma rota tracejada no mar.
  No Juneau, vale na s42, e a cor de cada território sai dos papéis da marca (`marca/tokens.css`), nunca de hex solto.
  Logo depois, ele disse: "A imagem foi um exemplo, às cores devem seguir a paleta do canal". Em 04/10/2026 a paleta
  ganhou as cores de contexto ("Uma cor nova por território"; "Aprovo assim"): um azul e dois violetas, a única faixa
  medida que não se confunde com o laranja nem com o verde-água, também para quem é daltônico (§2 e §6). O vermelho do
  print continua fora, e a forma vem dele.
- **Nome de lugar com a foto.** "Nomes de lugar que tenham fotos seria interessante ter uma "miniatura" (a foto)
  acompanhando" (s15): o ponto de lugar no mapa ganha o nome e, quando há foto do lugar que passe pelo
  `conferente-de-midia`, uma miniatura dela junto do nome.
  O exemplo dele (03/10/2026: "E este é um exemplo de foto sobre o mapa que citei", um print de outro canal):
  - o Brasil sobre satélite, com um brilho de cor acompanhando a borda do território, por dentro;
  - o nome do lugar (SALVADOR) numa etiqueta de fundo cheio e letra escura, em caixa alta, com uma ponta que
    aponta o ponto na costa;
  - logo abaixo da etiqueta, a foto de época numa moldura pequena, com a borda da mesma cor dela, sobre o mar, sem
    cobrir o território;
  - o crédito da MapTiler no canto.
  As cores, também aqui, são as da paleta do canal: o amarelo do print não entra.
- **Mais relevo 3D e câmera viajando.** "Usar mais desses movimentos de câmera e dos mapas com relevo 3D como esse"
  (s44). O relevo pede os tiles de terreno da MapTiler: o gasto do vídeo 2 continua a decidir.
- **Espaço vazio esperando a voz incomoda** (s15, s18, s31 e s35: "Mapa parado por muito tempo sem "nada"", "Muito
  tempo sem "nada" na cena", "Muito tempo sem o "elemento principal" ou algo central", "Demora para entrar informações
  dando a sensação de "vazio""). É a mesma regra de "A regra que fica", acima, vista por ele no vídeo.

## 6 · Base de mapa e mídia

**Tratamento da base de satélite**: brilho a 65 %, saturação a 70 %. Contorno do protagonista em
`--tinta`, 6 px. Demais fronteiras em branco a 70 %, 5 px, sobre um contorno escuro de `#0B0F14` a 60 %,
12 px. Preenchimento do protagonista: `--destaque` a 85 %, para o relevo transparecer.

O contorno escuro entrou em 25/09/2026, por decisão do Lucas. Sem ele, a divisa sumia sobre neve e gelo: no
teste de Juneau, o contraste sobre o campo de gelo era de 1,5:1.

**A divisa mais grossa** (Lucas, 30/09/2026, 21:5x, no piloto da s03). Até então eram 3 px a 35 % sobre 7 px a
45 %, e no 1080p a divisa virava um fio que sumia no campo de gelo. A pergunta, com as duas lado a lado
(`out/juneau/_tmp/piloto/s03/prova-divisa-1080p.png`): "Qual espessura de divisa entre países fica valendo nos
mapas do canal? (vale para todos os mapas, não só este)". A resposta: "a proposta é melhor, mas está sobrepondo o
texto". A proposta era a de agora, 5 px a 70 % sobre 12 px a 60 %. Vale para todos os mapas do canal.
- **Nenhum rótulo sobre a divisa.** A linha não passa por baixo nem encosta em pílula, nome de país, régua ou
  crédito. Os rótulos vão sempre por cima das linhas, e quem fica no caminho de uma divisa muda de lugar: a
  divisa é geografia e não se move. O que vale para a divisa vale para as outras linhas do mapa (a malha, a
  estrada, a rota): a pílula não fica sobre elas.
- **A cena de mapa de referência** é a s03 do Juneau, no render de 30/09/2026, 22:18 (carimbo `ad0970a2…`, 2160p),
  com a divisa nova e os rótulos fora das linhas. O Lucas viu a prévia com a narração e disse: "o mapa está bom
  agora". Ela mostra o tratamento da base, a malha do continente (11 px sobre 24 px), a estrada protagonista (14 px
  sobre 26 px), o anel, as pílulas e os créditos empilhados. As outras cenas de mapa partem dela.
- **Estrada não se confunde com fronteira** (Lucas, 30/09/2026, 23:4x de Brasília). Ao rever a s03 aprovada, ele
  apontou o quadro de 0:03: "O que é estrada e o que é fronteira acabou por não ficar claro, quem não sabe não irá
  conseguir entender do que se tratam os elementos". A malha cinza e a divisa branca eram duas linhas claras com
  contorno escuro. Ele viu quatro opções desenhadas sobre o render (`out/juneau/_tmp/piloto/s03/prova-legibilidade-1080p.png`).
  A pergunta: "Como separamos estrada de fronteira nos mapas? Vale para a s03 e para os outros mapas do canal. Em
  todas as opções, o 'ABOUT 43 MILES' passa a entrar quando a estrada laranja chega ao meio, e não antes dela." A
  resposta: "D, cor e o nome ROADS (Recomendado)". A opção dizia: "Estradas do continente em verde-água e a de
  Juneau em laranja. 'ROADS' aparece no começo, junto das estradas. A fronteira fica sendo a única linha branca,
  entre UNITED STATES e CANADA."
  - **As cores das linhas:** a fronteira é a única linha branca do mapa (`--fronteira-*`), fora o contorno do
    território protagonista em `--tinta`, que também é fronteira e vem com o preenchimento. A estrada, a rota ou a
    malha que não é a protagonista vai em `--contraparte` (`--rede-cor` nos tokens), e a protagonista em
    `--destaque`. Cinza (`--neutro`) não se usa em linha de mapa, porque se confunde com a fronteira.
  - **A legenda das cores, no lugar do nome na linha** (Lucas, 01/10/2026, 00:3x de Brasília). Depois de ver o
    ROADS na s03, ele propôs: "Acho que talvez ao invés de 'ROADS' e etc, poderíamos ter um guia de o que cada cor
    representa, algo discreto". Viu três legendas desenhadas sobre o render
    (`out/juneau/_tmp/piloto/s03/prova-legenda-1080p.png`). A pergunta: "Qual legenda fica valendo nos mapas, no
    lugar do 'ROADS'?…" A resposta: "2. Mas menor". A opção 2 dizia: "A mesma caixa, mas cada item entra com a sua
    linha, e a estrada laranja ganha 'Juneau's roads'. O item laranja ficaria só 1,4 s, menos que o mínimo de 2 s
    para ler."
    - Uma caixa `--rotulo` discreta no canto de cima, dentro das margens (nunca o canto do YouTube nem a faixa de
      crédito), com uma amostra curta de cada linha (na cor, na espessura e no contorno da cena) e uma palavra ao
      lado. A grafia é do `redator-de-tela`.
    - **Cada item entra com a sua linha**, e a protagonista também ganha o seu item.
    - **O tamanho é o da proposta:** a letra no alvo do papel legenda, 84 px (`--fs-eixo`, §4.1). Logo depois do
      "Mas menor", o Lucas corrigiu: "Perdão, na verdade o tamanho está bom. Estava ampliado".
    - **Conta como um elemento** (§4.2). O quadro pode ficar com 6 contando a legenda, como na s03 aprovada (de 21,966
      a 23,4 s do master). Quando um elemento novo faria o quadro passar de 6, ela sai antes de ele entrar. Por
      escolha do Lucas, o item que entra por último pode ficar menos que os 2,0 s de texto no ar (§4.3).
    - A fronteira é tratamento da base (§6, acima) e não conta no teto, como na s03 aprovada (§4.2: a base de tela
      cheia não conta). Conta só onde a cena a desenha como assunto, e a técnica tem de dizer isso.
    - A fronteira é "Border", e os nomes dos dois países continuam um de cada lado dela.
  - **O rótulo de uma linha só entra com a linha:** o rótulo que fala de uma linha (uma distância, um nome) entra
    quando ela já está na tela, nunca antes. Na s03, o ABOUT 43 MILES passa a entrar quando a estrada chega ao meio
    (em "miles"), e não em "about".
  - **O território da contraparte, mais leve** (Lucas, 01/10/2026, 01:5x de Brasília). Nos mapas do Mat-Su do Juneau
    (a pergunta nomeou s15, s24 p1 e s33; a s39 também pinta o Mat-Su, e segue a mesma regra), o verde-água é a cor do destino proposto (Willow, Wasilla, o vale) e também a das estradas,
    e o conceito pintava o vale a 85 %, como o protagonista. Ele viu quatro versões do quadro de Willow desenhadas
    sobre satélite Landsat (`out/juneau/_tmp/prova-verde-agua/prova-verde-agua-4-opcoes.png`). A pergunta: "Nos mapas
    do Mat-Su (s15, s24 e s33), o verde-água é a cor de Willow e do vale, e também a das estradas. Na versão 1, como o
    conceito está hoje, o vale pintado a 85 % esconde as linhas do sítio. Qual versão fica valendo?" A resposta: "2,
    vale mais leve (Recomendado)". A opção dizia: "O vale passa a 35 %, e o satélite aparece por baixo. A estrada
    continua no mesmo verde-água, mais grossa e com contorno escuro. A diferença das linhas fica na espessura e na
    legenda. Só os mapas do Mat-Su mudam, e a s03 fica como foi aprovada."
    - O preenchimento do território da contraparte é `--contraparte` a **35 %** (`--territorio-contraparte-cor` nos
      tokens). O do protagonista continua a 85 %.
    - A estrada que não é a protagonista continua em `--rede-cor` (= `--contraparte`), com o contorno escuro, mesmo
      dentro do território verde-água. A linha fina do sítio e a estrada se separam pela espessura e pela legenda.
    - Do vídeo 2 em diante, o território da contraparte a 35 % é a proposta, até o Lucas decidir de novo.
  - **Os territórios do contexto** (Lucas, 04/10/2026). Ele pediu na s42 "todos territórios que fizerem parte do
    contexto do vídeo, cada um com uma cor (com baixa opacidade)", e o --neutro a 35 % sumia sobre o gelo. A pergunta:
    "s42: você pediu cada território com uma cor, na paleta do canal. Mas a paleta só tem duas cores de lado: laranja (o
    protagonista, Juneau) e verde-água (o segundo). Do terceiro em diante a marca manda cinza, e o cinza some sobre o gelo:
    Haines e a Colúmbia Britânica só aparecem pelo nome. Como fica?" A resposta: "Uma cor nova por território". As cores
    saíram do diretor-de-arte, medidas sobre o satélite real e julgadas duas vezes por dois juízes
    (`out/juneau/_tmp/prancha-territorios/`). A segunda pergunta, com o quadro da s42 antes e depois: "azul para o país
    vizinho (Colúmbia Britânica), lavanda e violeta para os vizinhos do Alasca, em baixa opacidade, e Juneau mais forte.
    [...] Mas é o tom do print da África, e a marca hoje diz que o roxo do print não entra. Aprova?" A resposta: "Aprovo
    assim (Recomendado)". E sobre a s44: "Muda junto (Recomendado)" (a Colúmbia Britânica e o Yukon em azul também lá).
    - **As cores**, todas a **25 %** e só no mapa (`--territorio-contexto-N-cor`): `--contexto-2` azul, o território do
      outro lado da fronteira internacional, e todos os estrangeiros do vídeo na mesma cor; `--contexto-3` lavanda, o
      vizinho do mesmo país mais importante do mapa (nome no quadro, área, tempo); `--contexto-1` violeta, o segundo
      vizinho do mesmo país, sempre com nome. A cor segue o território em todos os mapas do vídeo.
    - **A atribuição** sai da vizinhança de todos os mapas do vídeo e da visibilidade medida no chão de cada um, nunca
      da ordem da fala. Dois vizinhos do mesmo país que se tocam sem linha levam lavanda e violeta, e a aresta comum
      ganha a luz na borda por dentro (8 px na cor pura, só na aresta). Com mais de dois vizinhos do mesmo país num
      mapa, a cor se repete em quem não se toca ou só os nomeados levam tinta: vai ao Lucas como limite.
    - **Território sem nome no quadro não leva tinta**, e o contexto não ganha item de legenda: o nome identifica.
    - **O protagonista continua o mais saliente:** com contexto pintado, ele vai a `--destaque` a **40 %**
      (`--territorio-protagonista-com-contexto-cor`); o território aceso como herói, sem contexto, continua a 85 %.
    - **Matizes:** laranja, azul e violeta são 3, o teto da §2. Com a `--contraparte` no mapa, só uma matiz de contexto
      entra (o azul ou o violeta), e a lavanda nunca. O azul nunca vai a mapa de subdivisões dos EUA num vídeo de voto ou
      partido, nem ao quadro que tem a `--tensao`.
    - **A conta do teto de 6:** cada território pintado com o seu nome é um elemento; sem nome, o chão conta um.
    - **O que se sabe que não resolve:** para tritanopia, a lavanda some no gelo mais claro, como o cinza que ela
      substitui; por isso ela não vai a território que é só gelo. Os pares pela divisa (Haines × Colúmbia Britânica)
      ficam abaixo de 10 de ΔE em protanopia e deuteranopia, e quem os separa é a divisa branca e o nome.

**Bases aceitas** (licença conferida para uso comercial):
- escala de mundo e continente: **NASA Blue Marble**, domínio público;
- escala regional: **Landsat (USGS)**, domínio público; **Copernicus Sentinel-2**, com o crédito
  obrigatório `Contains modified Copernicus Sentinel data <ano>`;
- fronteiras e costas: **Natural Earth**, domínio público;
- escala regional e local, com relevo: **MapTiler** (satellite-v2 + terrain-rgb-v2), registrada em 25/09/2026.
  - **A conta e o plano:** a conta é do Lucas, no plano Flex (informado por ele). A chave `MAPTILER_KEY`
    fica no `chaves.env` da máquina.
  - **O limite do plano:** o Flex cobre vídeo só para canal com até 100 mil inscritos. Antes de chegar lá,
    é preciso pedir à MapTiler uma licença custom.
  - **O crédito na tela:** `© MapTiler © OpenStreetMap contributors`, durante todo o tempo em que o mapa
    aparece, salvo acordo por escrito com a MapTiler. O plano pago dispensa o logo, não o crédito. O texto
    segue §4.1 e §4.2 (76 px, faixa de crédito).
  - **O crédito na descrição:** `Mapas: © MapTiler (https://www.maptiler.com/copyright/) · © OpenStreetMap
    contributors — Open Database License (https://www.openstreetmap.org/copyright)`.
  - **As fontes:** os Termos Cloud (maptiler.com/terms/cloud/, "Limited Videos"), a página de copyright e a
    do GEOlayers. Os mantenedores da Régie as conferiram em 23/09/2026 (`docs/CREDITO-DE-MAPA.md` da pré-v1).
  - **O custo:** o plano cobra por pedido de mapa, e render pede muitos. Olhe o painel da MapTiler no
    primeiro mês.
  - **O gasto do Juneau, liberado** (Lucas, 28/09/2026, 11:2x de Brasília). A pergunta: "As cenas de mapa usam o
    satélite da MapTiler, que cobra por pedido. São 13 cenas com mapa. Posso gastar?" A resposta: "Sim, e com relevo
    3D no campo de gelo". A opção dizia: "Igual, e a cena do campo de gelo (s44) ganha relevo real. Custa mais
    pedidos e ainda não foi testado neste PC." O "igual" é a opção recomendada, "Sim, medindo na 1ª cena": "Anoto
    o contador antes e depois da primeira cena de mapa e te conto o custo real antes de fazer as outras."
    - Cobre as cenas de mapa do Juneau e o relevo (`terrain-rgb-v2`, câmera 3D) só em s44, o campo de gelo.
      Em 03/10/2026 o relevo passou também à s01, a abertura com o voo sobre Juneau, por decisão do Claude central sob
      duas falas do Lucas: "Vídeo aéreo ou do mapa já neste vídeo" (a abertura) e "Usar mais desses movimentos de câmera e
      dos mapas com relevo 3D como esse" (a marca dele na s44). O gasto do Juneau está liberado desde 01/10, e o Lucas vê a s01
      na linha do tempo antes do render final.
    - Antes do primeiro render de mapa, o contador da MapTiler se anota; depois dele, de novo. O custo real dessa
      cena vai ao Lucas, no chat, antes das outras. Se ele projetar um gasto muito maior que o do plano, o render
      para até a resposta dele.
    - **O custo fecha depois** (Lucas, 01/10/2026, 02:2x de Brasília, sem pergunta): "Na verdade pode seguir o uso
      do maptiler, podemos fechar o custo outra hora. Preciso de resultados o quanto antes". As outras cenas de mapa
      do Juneau se renderizam sem esperar o custo da primeira. O contador continua anotado a cada render
      (`out/juneau/_pesquisa/maptiler-gasto.md`), e a conta vai a ele quando o painel a mostrar.
    - Os próximos vídeos pedem um ok próprio.

Qualquer outra base (Mapbox, Esri) só entra **depois** de a licença ser lida e registrada aqui.

**Bases, geometria e dados aceitos em 27/09/2026.** Lucas, 4ª rodada: "Google Earth e relevo (Recomendado)" e,
para dados e fronteiras, "Entram (Recomendado)" (`midia.md` §7.3). As licenças lidas na origem e o texto exato de
cada crédito estão em `marca/acervos/` (relatórios 4 e 5). Antes do primeiro uso num vídeo, a página de termos se
relê.
- **Google Earth Timelapse** (CC BY 4.0): vídeo 4K da Terra mudando desde 1984.
  - A resolução é de 30 m por pixel até 2014 e 19,11 m depois: serve para cidade, rio e geleira vistos de cima,
    não para close.
  - Use a versão sem rótulo (`src`).
  - Crédito na tela: `Google Earth Timelapse (Google, Landsat, Copernicus)`; no período Sentinel, também
    `Contains modified Copernicus Sentinel data <anos>`. Na descrição, o link da licença e a indicação de
    mudança.
- **Google Earth Studio**: voos de câmera em 3D.
  - As diretrizes do Google liberam o vídeo educativo no YouTube, mesmo monetizado, sem pedir.
  - O crédito `Google Earth` e o dos provedores de imagem ficam na tela a cena inteira. Nunca se movem para os
    créditos finais, nem se cobrem ou cortam.
  - A imagem não se repinta: a paleta do canal não muda a cor do satélite do Google.
  - Nada de download em massa, e nada dele em trecho de patrocínio ou de propaganda.
  - Pede conta Google e acesso por formulário: é trabalho do Lucas, na conta dele, antes do primeiro uso.
- **Relevo**:
  - Copernicus DEM GLO-30: o mundo a 30 m, inclusive acima de 60°N, com a linha de crédito fixa da licença
    Copernicus (DLR e Airbus). Pede conta gratuita;
  - USGS 3DEP: os EUA, com o Alasca a 5 m;
  - GEBCO e ETOPO: o fundo do mar junto com a terra, com a citação que cada um pede;
  - o SRTM e o NASADEM param em 60°N: não cobrem a maior parte do Alasca nem o norte do Canadá.
- **Satélite**:
  - NASA Worldview e GIBS (domínio público), sem a camada de rótulos, que é da Esri e de outros, e sem a de
    bordas, que vem do OpenStreetMap;
  - USDA NAIP: foto aérea dos EUA de 0,3 a 1 m, sem o Alasca;
  - NOAA GOES (as Américas) e o Himawari da JMA (Ásia e Oceania);
  - o Copernicus Browser, como ferramenta da base Sentinel-2 com data escolhida.
- **Fronteiras e divisões**:
  - geoBoundaries (CC BY 4.0, com a licença de origem de cada limite): o crédito `geoBoundaries` e o da fonte
    original;
  - US Census TIGER (domínio público);
  - Statistics Canada (Open Licence) e os dados do NRCan (Open Government Licence – Canada), com a linha da
    licença de cada um;
  - LSIB, do Departamento de Estado (domínio público), mais fino que o Natural Earth. O servidor recusa robô: o
    arquivo vem pelo navegador do app, com o sim do Lucas à lista;
  - HydroSHEDS v2, os rios a 30 m (CC BY 4.0), e Marine Regions, as zonas marítimas (CC BY).

  A fronteira disputada segue a regra logo abaixo.
- **Dados para gráfico**, com o crédito de §7 na tela (`Source: <instituição>, <ano>`) e a licença na descrição:
  - Banco Mundial WDI (CC BY 4.0, conferida indicador por indicador: a página geral diz "não comercial, salvo
    indicação");
  - Our World in Data (CC BY; o dado de terceiro vale pela licença dele, e o crédito cita os dois);
  - Census, BLS, BEA e EIA (domínio público);
  - Global Carbon Project, GHSL e WorldPop (CC BY 4.0).
- **Não servem**, porque o levantamento reprovou:
  - GADM, UN SALB e Eurostat GISCO (não comerciais);
  - ACLED (uso comercial pede licença paga);
  - o Eurostat para país de fora da Europa;
  - Esri World Imagery (não comercial sem permissão) e Mapbox (vídeo só com direito comprado);
  - o satélite EOX de 2018 a 2025 (não comercial). Do EOX, só a camada de 2016 é livre, e é a que a pré-v1 usa:
    nunca trocar de ano.
- **O que não foi perguntado**: o relatório tem outras fontes marcadas "recomendo" que a página não mostrou (entre
  elas Overture, ESA WorldCover e Maddison). Não entram por esta decisão.

**Fronteira disputada**: linha tracejada e rótulo `DISPUTED`. Mostra a linha de controle de fato e
nunca adota a reivindicação de um lado.

**País no mapa: o nome escrito, sem bandeira** (Lucas, 27/09/2026). A pergunta: "O governo do Canadá diz que a
bandeira dele (e as das províncias) só se usa com autorização, mesmo em vídeo educativo. Como identificamos os
países nos mapas?" A resposta: "Só o nome escrito (Recomendado)". A opção dizia: "CANADA e UNITED STATES escritos
na letra do canal, sem bandeira nenhuma, em todos os mapas. Sem risco e sem pedir nada, como já fazemos com as
logos."
- Vale para todo mapa e para toda bandeira, a dos EUA também.
- O motivo:
  - o Canadian Heritage diz que a bandeira do Canadá "is protected by the Trademarks Act (Section 9) against
    unauthorized use for commercial purposes", e que o pedido de uso "also applies to non-commercial,
    public-facing uses, including educational or recreational" (canada.ca, lida em 27/09/2026;
    `out/juneau/_pesquisa/research-logos.md` §2);
  - as bandeiras das províncias e dos territórios têm a mesma proteção.
- Fora do mapa, o nome de país sobre outra cena não foi perguntado. Vai sem bandeira também, que é o caminho sem
  risco.
- A PRANCHA põe a bandeira oficial dentro do círculo do ator (§5), e isso não foi perguntado. A bandeira do Canadá,
  das províncias e dos territórios canadenses tem a mesma condição de uso. Até o Lucas decidir, o ator deles vai
  só com o nome. DECISÃO DO LUCAS PENDENTE.

**Rota que nunca foi construída, desenhada como esquema** (Lucas, 27/09/2026). A pergunta: "A estrada pela margem
leste do Lynn Canal nunca foi construída, e não existe traçado oficial livre para usar. Podemos desenhar uma linha
aproximada no mapa?" A resposta: "Sim, tracejada e com aviso (Recomendado)". A opção dizia: "Uma linha tracejada
pelo que o texto do estudo descreve (a margem leste, a partir do fim da estrada), com 'Approximate route' na tela.
Não copia as figuras do estudo, que são do Estado."
- A linha é tracejada e sai do texto da fonte: o que ela descreve (a margem, os pontos que nomeia) e o ponto de
  partida real (no Juneau, o fim da estrada, do OSM). Nunca se decalca figura de documento sem permissão
  (`midia.md` §7.1).
- O aviso `Approximate route`, no papel legenda de §4.1 (como o aviso do ano da foto), fica na tela todo o tempo da
  linha.
- No Juneau, vale para a estrada da margem leste, nas cenas s48 e s50 (a Alt. 2B de 2006 é essa estrada). Os
  corredores de s44 (o do Taku e o do Lynn Canal) são rotas na mesma situação e seguem a mesma forma.

**Doutrina de mídia**:
- **Acervos abertos**: Library of Congress, National Archives (NARA), NASA, USGS, Smithsonian, Wikimedia
  Commons (licença conferida arquivo a arquivo), e as fontes federais: sala de imprensa de órgão federal dos
  EUA e DVIDS. Desde 27/09/2026, também as fontes da 4ª rodada (`midia.md` §7.3): o acervo de qualquer
  órgão federal dos EUA, os mapas históricos e os outros governos que ela nomeia. Nenhum outro acervo
  gratuito: Pexels, Pixabay e os demais ficam fora (`midia.md` §7.3, Lucas, 26/09/2026). Foto do governo do
  Alasca e de jornal, e vídeo do governo do Alasca, entram citando a fonte (`midia.md` §7.5); vídeo de jornal,
  só com licença conferida (Lucas, 27/09/2026).
- **Catálogo pago**: Envato Elements, Motion Array, Storyblocks e Shutterstock. A ordem de uso, o
  que cada licença permite e como registrar cada download estão em **`midia.md`**.
- **Foto grande e com qualidade** (Lucas, 27/09/2026: "A prioridade ainda deve ser fotos grandes e com qualidade, a exceção deve ser para casos MUITO específicos"):
  - grande é 1.600 px de largura ou mais, a régua do `buscar-midia` (em tela cheia, só se a enche sem passar de 1,4
    vez; a outra vai impressa: §5, "A foto média também vai impressa"). O B-roll e o footage seguem as réguas deles
    (`midia.md`; `.claude/agents/conferente-de-midia.md` §5.3);
  - qualidade é a foto nítida no tamanho em que vai à tela, sem retícula de impressão, sem compressão pesada, sem
    marca-d'água, e que não é foto de tela nem de página impressa;
  - a borda do cartão ou da página que a origem escaneou junto sai no enquadramento, sem mudar o sentido.
- **Evento real específico** (guerra, protesto, cúpula, desastre, pessoa pública): de acervo aberto ou
  oficial, ou foto ou vídeo do governo do Alasca, ou foto de jornal, com a fonte na tela (`midia.md` §7.5), sempre com data e
  local conferidos na origem, e **nunca de banco pago** (`midia.md` §1).
  Imagem "ilustrativa" de outro evento não entra. Foto de outro ano só entra com o aviso do ano na tela (logo
  abaixo).
- **Foto de outro ano, com o aviso na tela** (Lucas, 27/09/2026: "Quando não houver foto do ano, mas houver foto
  pode utilizar com um aviso em tela"). Essa mensagem mudou a resposta que ele tinha dado mais cedo no mesmo dia
  (o último item).
  - **A ordem** (Lucas, 27/09/2026, nas duas mensagens seguintes: "A prioridade ainda não fotos com a data certa,
    mas quando não houver, ai sim entra essa exceção com a data da foto utilizada" e "A prioridade ainda deve ser fotos grandes e com qualidade, a exceção deve ser para casos MUITO específicos"):
    1. a foto grande e com qualidade do ano do fato;
    2. sem ela, a foto grande e com qualidade do mesmo assunto de outro ano, o mais perto do ano do fato, com o
       aviso da data dela;
    3. a foto pequena, impressa sobre a mesa: no caso muito específico de §5 ("A foto antiga pequena") e, do vídeo
       2 em diante (no Juneau, não), para preencher a lacuna do plano sem foto grande nem vídeo, uma ou mais na mesma mesa (§5, "A
       foto pequena preenche a lacuna");
    4. sem nenhuma, o plano vira mapa ou desenho.
  - **É exceção**: a foto de outro ano só entra depois de a busca pela foto do ano ter passado pelos acervos
    onde ela provavelmente está. Isso inclui os que recusam robô, que o Claude central vê pelo navegador do app,
    sem o Lucas precisar acompanhar (CLAUDE.md, "A marca"). O relatório da pesquisa diz onde a foto do ano foi
    procurada.
  - **O mesmo assunto**: o lugar, a pessoa, o prédio ou a coisa que a fala nomeia. A foto de outro ano de um
    evento nomeado (a votação de 1974) mostra o lugar ou a pessoa, nunca outro evento no papel daquele.
  - **O ano mais perto, e nada que contradiga a fala**: entre as fotos de outro ano que servem, vale a do ano mais
    perto do fato. O aviso declara o ano, mas não conserta uma foto que desminta a fala: a cidade de hoje numa fala
    sobre o povoado de 1900 não entra.
  - **A data vem da origem**: o ano, ou a aproximação que a origem dá (`ca. 1900`, `1990s`), lido na página de
    origem e gravado na procedência. Foto sem data na origem não entra, porque o aviso não teria o que dizer.
  - **O aviso**: `Photo from 1998` (a grafia está em §7), no papel legenda de §4.1: 84 px, Inter 500. Ele fica na
    tela durante todo o tempo da foto e fora da faixa de crédito.
    - Na foto em tela cheia (REGISTRO), vai numa pílula `--rotulo` logo abaixo do rótulo de lugar, ou no lugar
      dele, quando não há rótulo.
    - No card de pessoa, vai na margem de baixo da foto impressa (§5).
    - Não conta como elemento (§4.2), como o crédito.
  - **Peça de acervo fotografada depois, sem aviso** (Lucas, 28/09/2026, 00:4x de Brasília). A
    pergunta: "A camiseta é de 1982, mas a foto dela foi tirada no museu em 2015. Pela regra de hoje, a tela diria
    "Photo from 2015". Para foto de objeto de acervo (peça de museu), usamos o aviso do ano?" A resposta: "Sem
    aviso, como documento (Recomendado)". A opção dizia: "A peça mostrada é a de 1982; a data da foto do museu
    não muda o que se vê. O crédito continua na tela (Dave Gelotte / Alaska State Museum). Vale para peças de
    acervo nos próximos vídeos."
    - O que cobre: a foto de uma peça de acervo (objeto de museu, a própria peça do fato), tirada depois, como
      registro da peça. Ela entra como a página de documento: sem o aviso do ano, com o crédito de sempre.
    - O que não cobre: a foto de lugar, de pessoa, de prédio ou de evento, que segue o aviso do ano; e a peça
      que não é a do fato (uma igual, uma réplica), que não entra como registro.
  - **Vale para foto e para retrato**, inclusive o de pessoa citada, que continua pedindo fonte autorizada
    (`midia.md` §7.2). **Vídeo de outro ano não foi perguntado** e continua fora.
  - O aviso não substitui o crédito nem a licença: a foto segue o `midia.md` como qualquer outra.
  - **A resposta anterior, superada.** Mais cedo, na 3ª rodada, a pergunta tinha sido: "Quando não existir foto do
    ano exato (por exemplo, Juneau em 1880 ou a Suprema Corte do Alasca em 1974), pode entrar foto do mesmo lugar
    de poucos anos antes ou depois, sem o ano na tela e com a data real da foto no crédito?" A resposta foi "Não:
    sem foto do ano, vira mapa ou desenho". O que muda é o aviso na tela: a data só no crédito, que era a opção
    recusada, continua não bastando.

## 7 · Grafia de tela

- **Inglês dos EUA.** Nome de lugar pela forma do **AP Stylebook** vigente.
- Números com vírgula de milhar: `2,700`. Dinheiro em US$: `$265 billion`. Valor em outra moeda é
  convertido pela cotação da data da fonte antes de ir à tela, nunca trocando só o símbolo.
- **Unidades imperiais primeiro**: milhas, milhas quadradas, °F. Métrico só entre parênteses, quando a
  fonte é métrica.
- Datas absolutas: `March 3, 2024`. Nunca "last week" nem "recently" na tela.
- Comparação de tamanho em escala americana, quando couber: `about the size of Texas`.
- Crédito: `Source: <instituição>, <ano>`. Crédito de mídia: `<autor> / <acervo> · <licença>`.
- **Aviso do ano da foto** (§6; Lucas, 27/09/2026): `Photo from 1998`. A aproximação vai como a origem a dá, na
  forma do AP Stylebook: `Photo from the 1990s`. Nunca vai um ano que a origem não diz.
- **Domínio público** (NASA, Landsat/USGS, Natural Earth, NARA…): **sem crédito na tela**. O ofício
  reprova crédito supérfluo. Copernicus Sentinel não é domínio público e leva o crédito de §6.
- **Retrato oficial** de pessoa citada, em uso editorial: sem crédito na tela; a procedência fica registrada
  (`midia.md` §7.2).
- **Foto do governo do Alasca e de jornal**: crédito na tela sempre, a fonte como a origem a credita,
  `<autor> / <veículo>`, ou só o veículo ou o órgão (`midia.md` §7.5, Lucas, 26/09/2026). O vídeo do governo do
  Alasca, o mesmo (Lucas, 27/09/2026).
- **Página oficial do Estado do Alasca lida pela cópia arquivada** (web.archive.org): o crédito é o do órgão
  que publicou a página (no Juneau, a Divisão de Eleições do Alasca), nunca o arquivo (Lucas, 27/09/2026;
  CLAUDE.md, "A marca"). A cópia é fonte do texto, não permissão para mostrar a página (`midia.md` §7.1).
- **As fontes da 4ª rodada** (Lucas, 27/09/2026; `midia.md` §7.3 e §6):
  - órgão federal dos EUA e mapa antigo em domínio público: sem crédito na tela. O crédito que a coleção de
    mapas pede vai na descrição;
  - outros governos, em CC0 ou CC BY: o crédito de mídia na tela, `<autor> / <acervo> · <licença>`;
  - Open Government Licence – Canada (Atlas of Canada, fotos aéreas do NRCan): a linha da licença,
    `Contains information licensed under the Open Government Licence – Canada.`;
  - Google Earth, relevo, satélite, fronteiras e dados: o crédito que o §6 dá a cada um.
- B-roll de banco pago não leva crédito na tela, **exceto Shutterstock**. Vai a linha
  `Image(s) and/or video used under license from Shutterstock.com` na faixa de crédito da última cena,
  repetida na descrição do YouTube. Em contexto editorial ou de comentário, também
  `<artista>/Shutterstock.com` na faixa de crédito da cena (`midia.md` §3.4).

## 8 · O logo: a agulha

**A decisão** (Lucas, 01/10/2026). Ele pediu: "Ainda não temos logo e nem banner para o canal, como podemos proceder com
isso?", e escolheu "Eu desenho aqui". Da 1ª rodada (4 propostas), respondeu "Consegue novas versões? Não gostei muito".
Para a 2ª, escolheu os caminhos "Símbolo simples e moderno" e "Bússola e cartografia", e "Manter as da marca" nas cores.
Das 5 propostas da 2ª rodada, escolheu **"A agulha"**.

- **O símbolo:** uma agulha de bússola em pé, em dois triângulos chapados. O norte, em `--destaque`, é o A de Alpha, com
  pernas retas e o miolo cortado. O sul, em `--tinta`, completa o losango. Um corte inclinado de 12° separa as duas peças.
  A agulha aponta para o norte e para lugar nenhum: sem mostrador, rosa ou linhas que se cruzem.
- **Os arquivos** ficam em `marca/logo/agulha/`. O `README.md` de lá diz qual vai onde e como se refaz cada um.
- **As cores:** no avatar e no banner, as duas cores sobre `--fundo`. Em uma cor, `--tinta` sobre escuro e
  `--tinta-escura` sobre `--papel`.
  - A **marca d'água** do vídeo vai sem laranja: a agulha toda em `--tinta`, num disco `--fundo` a 65 %. O laranja na tela
    é do protagonista do vídeo (§2).
- **O nome no banner:** ALPHA POINT em Barlow Condensed 800, com a frase "Geography and geopolitics, on the map." em Inter
  500. A frase veio com a proposta; quando o Lucas pediu para escolher, ele respondeu sem preferência.
- **As propostas** das duas rodadas ficam em `marca/logo/propostas/` e `marca/logo/propostas-2/`, fora do git: as
  checagens têm quadros do vídeo com satélite da MapTiler e footage de banco.
