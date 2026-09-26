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
| `--fundo` | `#0E1726` | fundo de prancha (atores, fluxos, causa → efeito) |
| `--painel` | `#172338` | cartão sobre `--fundo` |
| `--papel` | `#ECE8DF` | fundo claro de DADO e DOCUMENTO (gráfico, tratado, manchete) |
| `--tinta` | `#F4F1EA` | texto sobre escuro, contorno do território protagonista |
| `--tinta-escura` | `#14181F` | texto sobre `--papel` |
| `--rotulo` | `#0B0F14` a 88% | pílula do rótulo sobre mapa ou registro |
| `--destaque` | `#F5A524` | **o protagonista do vídeo**: o território, a série, o ponto. UMA entidade por vídeo. Única exceção: o anel (§4.4), assinatura do canal, sai em `--destaque` mesmo quando marca um ponto que não é o protagonista |
| `--contraparte` | `#2EC4B6` | o segundo ator, quando a cena compara dois |
| `--neutro` | `#737D8E` | do terceiro ator em diante: sem matiz nova, só rótulo |
| `--tensao` | `#E4572E` | zona de conflito, risco, perda. **Nunca** é a cor de um lado |

**O `--neutro` foi escurecido em 25/09/2026** (era `#8A94A6`; mesma matiz, só mais escuro). Medido com o
`contraste.mjs` da pré-v1 da Régie (daltonismo por Machado 2009, distância CIEDE2000, limiar 10): o antigo ficava a
7,8 do `--contraparte` para quem tem deuteranopia (os dois viravam a mesma cor) e a 2,5:1 sobre o `--papel`,
abaixo dos 3:1 de elemento gráfico. O novo fica a 15,8 do `--contraparte` no pior tipo de daltonismo e a
4,32:1 sobre o `--fundo`, 3,79:1 sobre o `--painel` e 3,40:1 sobre o `--papel`. Decisão do Lucas.

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

As três vêm do Google Fonts. A alternativa entra no **bloco inteiro**, nunca no meio da linha (ofício).

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
- Texto de relação sobre a seta de uma PRANCHA (ex.: `claims the same waters`) é **legenda**:
  84 px, Inter 500, `--tinta` a 80 %.
- **Card de pessoa** (Lucas, 26/09/2026): o nome é **rótulo** (pílula, 128 px, Inter 700, até 3 palavras) e
  o cargo é **legenda**, numa linha menor logo abaixo (84 px, Inter 500). A regra inteira está em §5.

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

## 5 · Os modelos de cena

| Modelo | O que é | Base |
|---|---|---|
| **MAPA** | território aceso sobre satélite; a viagem de câmera | satélite escurecido (§6) |
| **REGISTRO** | footage ou foto real em tela cheia, com rótulo de lugar e crédito | o próprio asset |
| **PRANCHA** | atores e relações, causa → efeito. Ator = círculo de 640 px, traço de 6 px na cor do papel dele, bandeira oficial dentro e nome embaixo. Setas e linhas de 6 px; ícone em círculo de 160 px | `--fundo` |
| **DADO** | gráfico com série do protagonista em `--destaque` e da contraparte em `--contraparte`; eixo em `--tinta-escura` a 60 % | `--papel` |
| **DOCUMENTO** | recorte de tratado, mapa histórico, manchete real; o trecho que importa grifado em `--destaque` a 35 %. Peça do Estado do Alasca ou de imprensa, só com permissão clara; sem ela, o trecho recriado no visual do canal, com o texto fiel e a fonte citada (`midia.md` §7.1) | `--papel` |

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
    `Assembly member, City of Juneau` embaixo;
  - o contrato continua pedindo o cargo, em `cards_pessoa` › `o_que_e`;
  - o nome não vai em `--destaque` (§2). O rosto, quando há, segue `midia.md` §7.2; sem foto em fonte
    autorizada, o card sai só com nome e cargo.

## 6 · Base de mapa e mídia

**Tratamento da base de satélite**: brilho a 65 %, saturação a 70 %. Contorno do protagonista em
`--tinta`, 6 px. Demais fronteiras em branco a 35 %, 3 px, sobre um contorno escuro de `#0B0F14` a 45 %,
7 px. Preenchimento do protagonista: `--destaque` a 85 %, para o relevo transparecer.

O contorno escuro entrou em 25/09/2026, por decisão do Lucas. Sem ele, a divisa sumia sobre neve e gelo: no
teste de Juneau, o contraste sobre o campo de gelo era de 1,5:1.

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

Qualquer outra base (Google Earth Studio, Mapbox, Esri) só entra **depois** de a licença ser lida e
registrada aqui.

**Fronteira disputada**: linha tracejada e rótulo `DISPUTED`. Mostra a linha de controle de fato e
nunca adota a reivindicação de um lado.

**Doutrina de mídia**:
- **Acervos abertos**: Library of Congress, National Archives (NARA), NASA, USGS, Smithsonian, Wikimedia
  Commons (licença conferida arquivo a arquivo), e as fontes federais: sala de imprensa de órgão federal dos
  EUA e DVIDS. Nenhum outro acervo gratuito: Pexels, Pixabay e os demais ficam fora (`midia.md` §7.3, Lucas,
  26/09/2026). Foto do governo do Alasca e de jornal entra citando a fonte (`midia.md` §7.5).
- **Catálogo pago**: Envato Elements, Motion Array, Storyblocks e Shutterstock. A ordem de uso, o
  que cada licença permite e como registrar cada download estão em **`midia.md`**.
- **Evento real específico** (guerra, protesto, cúpula, desastre, pessoa pública): de acervo aberto ou
  oficial, ou foto do governo do Alasca ou de jornal com a fonte na tela (`midia.md` §7.5), sempre com data e
  local conferidos na origem, e **nunca de banco pago** (`midia.md` §1).
  Imagem "ilustrativa" de outro evento ou de outro ano não entra.

## 7 · Grafia de tela

- **Inglês dos EUA.** Nome de lugar pela forma do **AP Stylebook** vigente.
- Números com vírgula de milhar: `2,700`. Dinheiro em US$: `$265 billion`. Valor em outra moeda é
  convertido pela cotação da data da fonte antes de ir à tela, nunca trocando só o símbolo.
- **Unidades imperiais primeiro**: milhas, milhas quadradas, °F. Métrico só entre parênteses, quando a
  fonte é métrica.
- Datas absolutas: `March 3, 2024`. Nunca "last week" nem "recently" na tela.
- Comparação de tamanho em escala americana, quando couber: `about the size of Texas`.
- Crédito: `Source: <instituição>, <ano>`. Crédito de mídia: `<autor> / <acervo> · <licença>`.
- **Domínio público** (NASA, Landsat/USGS, Natural Earth, NARA…): **sem crédito na tela**. O ofício
  reprova crédito supérfluo. Copernicus Sentinel não é domínio público e leva o crédito de §6.
- **Retrato oficial** de pessoa citada, em uso editorial: sem crédito na tela; a procedência fica registrada
  (`midia.md` §7.2).
- **Foto do governo do Alasca e de jornal**: crédito na tela sempre, a fonte como a origem a credita,
  `<autor> / <veículo>`, ou só o veículo ou o órgão (`midia.md` §7.5, Lucas, 26/09/2026).
- B-roll de banco pago não leva crédito na tela, **exceto Shutterstock**. Vai a linha
  `Image(s) and/or video used under license from Shutterstock.com` na faixa de crédito da última cena,
  repetida na descrição do YouTube. Em contexto editorial ou de comentário, também
  `<artista>/Shutterstock.com` na faixa de crédito da cena (`midia.md` §3.4).
