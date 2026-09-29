<!-- Roupa do Alpha Point para o mapista. Escrita em 26/09/2026, na instalação dos especialistas da pré-v1 da
     Régie. Agente: .claude/agents/mapista.md (projeção do commit 7ab9543 da pré-v1, Source-SHA256 6fb04f6384…).
     Molde de formato: template/marca/agentes/mapista.md da pré-v1, que é a roupa do Canal Top10 — nenhum valor
     dele foi copiado. Cada valor abaixo cita a fonte do canal: marca/identidade.md, marca/tokens.css,
     marca/midia.md, canal.json, CLAUDE.md, APRENDIZADOS.md, roteiros/<proj>/… e, para a licença de mapa, o
     docs/CREDITO-DE-MAPA.md da pré-v1. Onde o canal ainda não decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE"
     e o que se faz até lá. Se o Source-SHA256 do agente mudar, releia esta roupa contra o ofício novo. -->

# ROUPA ALPHA POINT — mapista

> Só o que é do canal. O ofício (geometria real, território inteiro, base única com DEM irmão, 2D ou 3D pelo
> argumento da frase, corte de perfil, linha só de GeoJSON, vizinho só com fronteira terrestre conferida) está
> em `.claude/agents/mapista.md` e não se discute aqui. Marca ativa: `marca/identidade.md` (§1 a âncora, §6 a
> base e o crédito), `marca/voz.md`, `marca/midia.md` e `marca/tokens.css`.

## 0 · O canal, e onde ele roda

- **Faceless** (identidade.md §0 e §5): a tela é mapa, registro real, prancha ou dado; o master é a narração
  sobre tela preta 3840×2160, e o relógio é um só, `out/<proj>/words.json` (não há `words-final`, `_cortes`
  nem apresentador). Os últimos 20 s não têm voz: são da tela final do YouTube (`canal.json` ›
  `narracao.cauda_tela_final_s`). **Sem título de capítulo na tela** (CLAUDE.md; Lucas, 26/09/2026).
- **O `words.json` tem a grafia da cópia para a voz**, não a do roteiro: aliases de pronúncia e números por
  extenso (no Juneau, `Kay-too` = KTOO, `Keel` = Kiehl, `Mat-Sue` = Mat-Su, `N F L` = NFL, `Gladyshevsky` =
  Gladziszewski, `nineteen seventy-four` = 1974, `nine hundred sixty-six million dollars` = $966 million). A
  lista de cada vídeo é `roteiros/<proj>/voz/trocas.md`. Entidade, grafia de tela, número de tela e termo de
  busca saem de `roteiros/<proj>/roteiro-narrador.md`; do `words.json` sai o tempo, e uma âncora se procura
  nele na grafia da voz (`KTOO` não está lá; `Kay-too`, sim). O que a voz disse diferente do texto está em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo`. Como ele se faz: CLAUDE.md, "Peças da pré-v1 em
  uso", item 3.
- **Tudo roda no PC do Lucas, no Windows, com a GPU dele**: não há máquina de render remota. `<motor>` é a
  pré-v1 (CLAUDE.md, "Os especialistas"), **nunca** o `motor.caminho` do `canal.json` (a v0.1.0). O
  `maprender.mjs`, o `render.webgl.4k`, o `tools/map-renderer` e o `tools/terrain-renderer` do ofício não
  existem: o render é `<motor>/src/ferramentas/renderizar.mjs`.
- **Portões**: `node scripts/<portão>.mjs`, com `REGIE_MOTOR` na mesma linha (CLAUDE.md, "Os especialistas").
  Sem npm (DECISÃO DO LUCAS PENDENTE), os portões de navegador saem **NÃO MEDIDO** (a lista está no CLAUDE.md,
  "Os especialistas"). Diga o nome de cada um; não simule.
- **Nunca rode** `narrar.mjs` nem `transcrever.mjs` (gastam crédito da ElevenLabs e refazem o relógio).
- **Tela e pedido de mídia em inglês dos EUA** (`canal.json` › `idiomas.origem`), AP Stylebook (§4). O id de
  um arquivo de geometria (`panhandle-juneau`, `alasca-e-vizinhos`) é vocabulário de máquina e fica como está,
  como as chaves de JSON, os enums e os `data-qc-*` (CLAUDE.md, "O vídeo fala inglês").
- **Cena HTML**: `<html lang="en-US" data-render="4k-native">`. O `pt-BR` do contrato do agente (§4) e do molde
  não vale.

## 1 · O gasto na MapTiler — leia antes de qualquer quadro

A base do canal cobra **por pedido de mapa**, e render pede muitos (identidade.md §6). Todo quadro
(`quadro.mjs`), todo render (`renderizar.mjs`) e toda sonda de DEM de uma cena MapTiler é pedido pago.

**No Juneau, o gasto está liberado** (Lucas, 28/09/2026; identidade.md §6, "O gasto do Juneau, liberado"), com
o relevo (`terrain-rgb-v2`, câmera 3D) só em s44, o campo de gelo. Você pode preparar e escrever a cena. Antes
do **primeiro** quadro, render ou sonda de mapa do vídeo, pare e devolva ao Claude central: ele anota o contador
do painel da MapTiler antes e depois dessa primeira cena, e o custo real vai ao Lucas antes das outras. Se o
custo projetado for muito maior que o do plano, o render para até a resposta dele.

Nos próximos vídeos, o gasto e o relevo pedem um ok próprio (DECISÃO DO LUCAS PENDENTE). Até ele, antes do
primeiro quadro, render ou sonda, pare e devolva ao Claude central, que pergunta ao Lucas:
- que cenas;
- quantos segundos;
- se liga o DEM (3D ou corte de perfil).

O número de pedidos por render não foi medido nesta máquina: diga isso, não invente. Com o ok, o contador do
painel da MapTiler se anota antes e depois (identidade.md §6: "olhe o painel no primeiro mês").

O render só é pulado, sem pedido, quando o carimbo (`graphics/<id>.mp4.de-html`) confere com o HTML **e** com a
resolução: todo render leva `--4k`, inclusive o de prova. Um render sem `--4k` sai em 1080p e obriga a
renderizar de novo, pagando de novo (CLAUDE.md, "Os especialistas", tropeços). **Nunca** `--forcar` sem
necessidade.

## 2 · A base: MapTiler, uma só

- **MapTiler satellite-v2 + terrain-rgb-v2** (`canal.json` › `mapa.perfil: "maptiler"`, Lucas, 26/09/2026:
  "será o maptiler"). A conta é do Lucas, no plano Flex, que cobre vídeo até 100 mil inscritos (identidade.md §6).
  O Landsat da cena de teste foi só teste (CLAUDE.md, item 7).
- A cena nasce de `node <motor>/src/mapa/preparar-cena.mjs <proj> --molde=<id>`. Ele copia o molde
  `<motor>/src/mapa/moldes/mapa-base.html`, o MapLibre, a câmera e o perfil sem chave para
  `out/<proj>/_media/_vendor/`, e grava `out/<proj>/_creditos-mapa.md`. Nunca sobrescreve uma cena. Ele mora
  em `src/mapa/`, não em `src/ferramentas/`.
- Nunca `--perfil=` diferente nem `--trocar-base`: trocar a base é decisão do Lucas.
- **A chave** da MapTiler nunca se escreve, se lê nem se imprime: só o leitor de chaves da pré-v1 a lê
  (CLAUDE.md, "Peças da pré-v1", item 7, e "Os especialistas", `<tile-source>`).
- **Não há base de emergência declarada.** Se a MapTiler cair (403 ou 429 no terminal), é bloqueio, com a saída
  colada no report. Outra base só entra depois de a licença ser lida e registrada na identidade.md §6. Esri
  não: vídeo monetizado exige licença escrita da Esri (`<motor>/docs/CREDITO-DE-MAPA.md` §0).
- **Bases aceitas desde 27/09/2026** (Lucas, 4ª rodada; identidade.md §6, "Bases, geometria e dados aceitos em
  27/09/2026"):
  - o Google Earth Timelapse (vídeo 4K da Terra mudando desde 1984) e o Google Earth Studio (voos 3D), cada um
    com o crédito do Google na tela como a §6 manda. O satélite do Google não se repinta com a paleta do canal,
    e o Earth Studio pede conta Google e acesso por formulário, que é trabalho do Lucas;
  - o relevo do Copernicus DEM, do USGS 3DEP, do GEBCO e do ETOPO;
  - o satélite do Worldview/GIBS, do NAIP, do GOES, do Himawari e do Copernicus Browser.

  No Juneau, a base continua a MapTiler.
- DECISÃO DO LUCAS PENDENTE: a política de base dos próximos vídeos. A identidade aceita várias bases por escala
  (Blue Marble, Landsat, Sentinel-2, MapTiler e, desde 27/09/2026, as do item acima; §6), e o ofício pede uma
  por vídeo. No Juneau é só MapTiler.

## 3 · A base na tela: tratamento e cores (identidade.md §1, §2 e §6; tokens.css)

- **Satélite escurecido**: brilho a 65 %, saturação a 70 %, na pintura da camada (`raster-brightness-max: 0.65`,
  `raster-saturation: -0.3`), como em `out/prova-mapa/graphics/landsat-juneau.html`. Sem véu, scrim ou vinheta
  por cima (`--degrade: none`): o ofício tem razão em que escurecimento empilhado dá quadro quase preto.
- DECISÃO DO LUCAS PENDENTE: os 65 % contra o piso de ~0,90 do ofício (§9). Eles só foram vistos sobre Landsat,
  nunca sobre MapTiler. Até ele decidir, use 65 %, e diga no report se algum rótulo ou relevo ficou ilegível.
- **Território protagonista**: preenchimento `--territorio-cor` (`--destaque` a 85 %, para o relevo
  transparecer) e contorno `--tinta` de 6 px. O segundo ator em `--contraparte`, do terceiro em diante
  `--neutro`, conflito ou risco em `--tensao` (**nunca** a cor de um lado). Vermelho contra azul como dois
  lados é proibido. No máximo 3 matizes, fora a base.
- **Demais fronteiras**: branco a 35 %, 3 px (`--fronteira-cor`, `--fronteira-espessura`), sobre um contorno
  escuro de `#0B0F14` a 45 %, 7 px (`--fronteira-contorno-cor`, `--fronteira-contorno-espessura`). O contorno
  entrou por pedido do Lucas em 25/09/2026: sem ele, a divisa sumia sobre o campo de gelo.
- **Fronteira disputada**: linha tracejada e rótulo `DISPUTED`. Mostra a linha de controle de fato e nunca
  adota a reivindicação de um lado.
- As cores das camadas vêm de `marca/tokens.css`, lidas pela função `tok()` do exemplar
  `out/prova-mapa/graphics/landsat-juneau.html`. Nenhum hex cravado fora do fallback de `tok()`.
- **O ponto é o ANEL**, a assinatura do canal: 56 px, traço de 10 px em `--destaque`, pulso de escala 1 → 1,8 e
  opacidade 1 → 0 em 1,2 s, duas vezes, e para (identidade.md §4.4). Ele sai em `--destaque` mesmo quando o ponto
  não é o protagonista. Nada de pino. País e região são sempre o polígono inteiro.

## 4 · Rótulos (identidade.md §3, §4.1 e §7)

- **Pílula** `--rotulo`, cantos de 12 px, respiro de 24 × 40 px, texto `--tinta` em Inter 700, 128 px (teto de
  160 px: nome de lugar é rótulo, nunca herói). No máximo 3 palavras. Troque o chip do molde por ela.
- País e região em CAIXA ALTA, `+0.04em`. Cidade, rio e estreito em caixa normal, tracking 0.
- Grafia do AP Stylebook: `British Columbia`, `Yukon`, `Lynn Canal`, `Taku River`. Número e distância no
  formato da identidade.md §7: imperial primeiro (`about 43 miles`), métrico só entre parênteses quando a fonte
  é métrica.
- ⚠️ **Os exemplos do ofício e do molde estão em português ou no formato brasileiro e não se copiam**:
  `lang="pt-BR"`, `aprox.`, `AMAZÔNIA`, vírgula decimal (`−6,1 m`). Aqui seria
  `20 ft (6.1 m) BELOW SEA LEVEL`.
- **País no mapa: o nome escrito, sem bandeira** (Lucas, 27/09/2026; identidade.md §6, "País no mapa"). Nenhuma
  bandeira no mapa, nem a dos EUA, embora o ofício (§9) a peça: vale a decisão do Lucas. O nome vai no mesmo
  container do território, para não descolar com a câmera.
- O `qc-pais-bandeira` não se usa: ele cobra a bandeira ao lado do nome e não lê nome em inglês (CLAUDE.md, "Os
  especialistas", tropeços).
- **Rota que nunca foi construída** (Lucas, 27/09/2026; identidade.md §6, "Rota que nunca foi construída"): linha
  tracejada pelo texto da fonte, a partir do ponto de partida real, com o aviso `Approximate route` na tela todo o
  tempo da linha; nunca decalcada de figura sem permissão. No Juneau: s48, s50 e os corredores de s44.

## 5 · Crédito na tela e na descrição (identidade.md §6 e §7)

- **Na tela**: `© MapTiler © OpenStreetMap contributors`, do primeiro ao último quadro em que o mapa aparece. O
  plano pago dispensa o logo, não o crédito. Descrição ou créditos finais sozinhos não bastam
  (`<motor>/docs/CREDITO-DE-MAPA.md` §0).
- **Onde e como**: 76 px, Inter 500, texto `--sec` sobre pílula `--rotulo`, cantos `--cantos`. Começa em
  x = 200, termina antes de x = 1720, dentro da faixa abaixo de y = 1880. Crédito longo quebra em duas linhas e
  nunca encolhe. Marque `data-qc-papel="credito" data-qc-credito="mapa"`. O molde põe 46 px em x = 154: troque
  como no exemplar (APRENDIZADOS.md item 17, achado 25).
- **Geometria do OpenStreetMap** (no Juneau: o Taku, Willow, Haines, a estrada e Cascade Point) já está coberta
  pelo `© OpenStreetMap contributors` da linha da MapTiler: não repita. Numa cena sem MapTiler, ela leva a
  linha sozinha (CLAUDE.md, item 6).
- Natural Earth é domínio público: nada na tela. Crédito supérfluo reprova (identidade.md §7).
- A regra de "zero crédito de mapa na tela" do Top10 (ARTE-104, em `seed/regras/ARTE.md` e na roupa do molde)
  **não vale** aqui: o contrato da MapTiler exige o crédito na tela.
- **Na descrição**: a linha da identidade.md §6, `Mapas: © MapTiler (https://www.maptiler.com/copyright/) ·
  © OpenStreetMap contributors — Open Database License (https://www.openstreetmap.org/copyright)`. Confira que o
  `out/<proj>/_creditos-mapa.md` gravado pelo `preparar-cena` diz o mesmo, e entregue a linha no report.
- Geometria histórica CC BY-SA leva crédito e a legenda de contorno aproximado (ofício §8). DECISÃO DO LUCAS
  PENDENTE: a palavra em inglês dessa legenda. No Juneau não há geometria histórica.

## 6 · Câmera e modo (identidade.md §1 e §4.4)

- O vídeo **viaja por dentro do mapa**: da escala do mundo ao estreito, do estreito à foto do porto, e de volta
  ao mapa.
- **Mapa seguido de mapa é UMA viagem** (`fundir: true`), nunca um corte. Corte seco só na troca de regime (mapa
  → registro).
- Cada viagem dura **1,5 a 3 s**, com easing cúbico de entrada e saída.
- Rótulo entra em 300 ms (opacidade + 24 px de subida, ease-out). Território preenche em 500 ms.
- 2D ou 3D se decide pelo critério do ofício (§5), não por padrão de canal. O "3D por padrão" do Top10 (ARTE-43)
  não vale aqui.
- DECISÃO DO LUCAS PENDENTE: norte para cima, sem giro (o mapa de briefing da âncora, como na cena de teste), ou
  órbita contínua (ofício §6b). Até ele decidir, siga o ofício: deslocamento contínuo do primeiro ao último
  quadro. Sem órbita, só quando outro movimento carrega o quadro o tempo todo (a estrada se desenhando, o
  território preenchendo).
- **3D com DEM** quando a frase argumenta com a vertical (ofício §5b). No Juneau, o relevo está liberado só em
  s44, o campo de gelo (§1). As "steep mountains" do Lynn Canal (`roteiros/juneau/roteiro-narrador.md`, linha
  70) e os "41 avalanche paths" (linha 76) também argumentam com a vertical, mas o relevo fora de s44 não foi
  liberado: proponha a cena em 3D e espere o ok do Lucas, pelo Claude central.

## 7 · Espaço (identidade.md §4.2)

- Margem de 200 px nas laterais e 160 px no topo. O canto inferior direito, 400 × 400 px, fica vazio (marca-d'água
  do YouTube). Nenhuma logo do canal.
- **Teto de 6 elementos simultâneos; alvo de 4 a 5.** Contam texto e gráfico (rótulo, anel, território aceso,
  seta, rota). A base de satélite e o crédito não contam.
- Texto no ar ≥ 2,0 s (identidade.md §4.3). O ofício pede ~1,8 s; a marca sobe.

## 8 · O molde e o exemplar

- Parta do molde que o `preparar-cena` copia e edite só o bloco `CENA` e o CSS de marca.
- O que o canal muda nele já está feito em `out/prova-mapa/graphics/landsat-juneau.html`; leia-o inteiro antes:
  - `lang="en-US"`;
  - o link do `marca/tokens.css`;
  - a pílula de rótulo;
  - o crédito de 76 px em x = 200;
  - o tratamento de 65 % e 70 %;
  - o contorno escuro da fronteira;
  - o anel.
- **Não copie a base dele**: o `baseCanal` e o `window.__BASE_CANAL` são o Landsat do teste. A base do vídeo vem
  do perfil `maptiler`.
- Guia do molde: `<motor>/docs/MAPAS.md`.

## 9 · Provar a cena nesta máquina (só depois do ok do §1)

- Cena de satélite se prova pelo render, não pelo `quadro.mjs` (por quê: CLAUDE.md, "Peças da pré-v1", item 7):
  `node <motor>/src/ferramentas/renderizar.mjs <proj> --cena=<id> --4k`. Confira que o
  `graphics/<id>.mp4.de-html` termina em `2160p`. Os quadros saem do MP4:
  `ffmpeg -ss <t> -i out/<proj>/graphics/<id>.mp4 -frames:v 1 out/<proj>/_tmp/<id>@<t>.png`.
- Sem npm, não há portão de navegador. Os do Top10 para mapa não vieram (`qc-mapa-movimento`, `qc-mapa-borda`,
  `qc-rotulo-territorio`, `qc-base-unica`, `qc-chave-mapa`). O que eles mediriam, você olha nos quadros e diz
  "olhado, portão não rodou".
- Rodam sem npm: `node scripts/qc-hex.mjs out/<proj>/graphics/<id>.html` e
  `node scripts/qc-src-existe.mjs out/<proj>/graphics/<id>.html`.

## 10 · Rede, geometria e a regra anti-robô

- Geometria real vem de `out/<proj>/_media/geo/`, registrada em `out/<proj>/_pesquisa/pauta-geo.json`. O
  `preparar-cena` recusa arquivo sem fonte e licença lá. O catálogo da máquina:
  `node <motor>/src/geo/catalogo.mjs --busca=<termo>`.
- Faltou geometria: peça à `pesquisa-geo` e reporte bloqueio. Nunca desenhe.
- **Site que recusa leitura automática** (403, captcha, verificação de robô) não se contorna por meio nenhum:
  - nem `curl`;
  - nem outro cliente;
  - nem cabeçalho trocado;
  - nem o navegador headless que o ofício (§8) sugere para Library of Congress, David Rumsey e Gallica.

  Pare, diga no report, e o Claude central confere no navegador do app com o Lucas vendo (CLAUDE.md, "A
  marca"). Resposta de carga (429, 504 do Overpass) se respeita esperando, nunca trocando de cliente ou de
  endereço.
- A cópia pública arquivada (web.archive.org) de **página oficial do Estado do Alasca** que recusou robô
  **vale como fonte** do que a página dizia na data da captura (Lucas, 27/09/2026; CLAUDE.md, "A marca"):
  registre a URL da cópia, a original e a data da captura, e o crédito na tela é o do órgão, nunca o arquivo.
  Ler essa cópia não é contorno. Ela não prova licença nem permissão de uso, que se leem na origem de hoje. A
  cópia arquivada de outro site (Library of Congress, David Rumsey, Gallica, jornal) não foi perguntada ao
  Lucas e não se usa. O que a cópia não resolve vai ao navegador do app.
- Mídia que não é mapa (foto do lugar, cartografia histórica como imagem) segue `marca/midia.md`:
  - evento real e registro histórico, só de acervo aberto ou oficial, com a licença conferida arquivo a
    arquivo (§1);
  - figura, mapa ou traçado de documento do governo do Estado do Alasca ou de imprensa só vai à tela com
    permissão de uso clara (domínio público comprovado, licença aberta ou autorização escrita), conferida e
    gravada na procedência (Lucas, 26/09/2026; midia.md §7.1). Sem ela, não entra nem se redesenha: bloqueio
    reportado. A recriação que a decisão manda é do texto citado, e é do `editor-de-arte`; o esquema de rota
    que nunca foi construída, o canal aceita (identidade.md §6, "Rota que nunca foi construída");
  - foto do lugar vinda do governo do Alasca ou de jornal entra com a fonte creditada na tela (Lucas,
    26/09/2026; midia.md §7.5), e o vídeo do governo do Alasca também; vídeo de jornal, só com licença
    conferida (Lucas, 27/09/2026; midia.md §7.5). Logo de instituição nenhuma vai ao mapa: o nome escrito
    (midia.md §7.6);
  - B-roll genérico de banco pago não é seu: vem da caça no Chrome do Lucas, que ele aprova item
    por item (midia.md §1, §2.3, §8), e você não abre o site de banco.

## 11 · O que já está decidido no Juneau (CLAUDE.md, "Peças da pré-v1", item 6)

- A conferência visual da geometria é `out/juneau/geo-previa.html`.
- **Juneau** usa o ponto do Natural Earth (`cidades-ne`). O ponto aproximado antigo caía na água.
- **O Taku** vem do OSM (`rio-taku-osm`, relation/16167118). Willow e Haines também vêm do OSM.
- **A estrada** é `estrada-juneau-cascade`: a Alaska Route 7 (relation/535397), com 67,48 km (41,9 milhas) até
  a ponta norte da Glacier Highway. O roteiro diz "about 43 miles", e fica. Na tela, não ponha um número que
  contradiga a voz: texto de tela é do `redator-de-tela`.
- **Cascade Point** está em 58.700137, −134.937863. No Natural Earth 1:10M o ponto cai na água, a 236 m da costa
  simplificada. Se a cena pintar a terra com o polígono do NE, declare o deslocamento.
- As 9 ilhas Aleutas além de 180° ficam fora do recorte do Alasca.
