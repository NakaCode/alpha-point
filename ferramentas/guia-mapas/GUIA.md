# Guia de mapas para um canal da Régie

Este guia ensina um canal que já usa a Régie a fazer **cenas de mapa de satélite de verdade, em 4K**, com a geometria
tirada de fontes reais (fronteira, rio, estrada, cidade), o crédito certo na tela e na descrição, e uma conferência que
**mede** a cena antes e depois do render, em vez de confiar no olho.

Ele veio de um canal que fez assim em quatro vídeos. O que está aqui é o **método**: o que serve a qualquer canal. O
**gosto** daquele canal (cores, tamanhos, tratamento da imagem) aparece só como exemplo, marcado como exemplo.

**Quem lê:** você, dono do canal (a primeira parte é sua, sem termo técnico), e o seu Claude (a partir de "Para o seu
Claude").

---

## A primeira parte é com você

### O que você vai ter

- Um mapa que é foto de satélite de verdade, com o relevo quando a cena pede, filmado por uma "câmera" que voa sobre ele.
- Por cima, só o que é real: a fronteira, o rio, a estrada e a cidade vêm de bases públicas, com a licença registrada.
  Nada é desenhado à mão.
- O crédito que a licença exige, na tela e na descrição do vídeo, escrito sozinho a partir do que a cena usa.
- Uma conferência medida: o texto fora da área segura, o crédito ilegível sobre a neve, o mapa que não carregou. Ela
  reprova ou diz "NÃO MEDIDO". Nunca dá verde sobre uma tela vazia.

### O que você precisa

- O seu canal na Régie com a **pré-v1** do motor (a que tem a pasta `src/mapa/`), com o molde instalado (as pastas
  `scripts/` e `contratos/` e o `package.json` do molde). O seu Claude confere isso no primeiro passo dele.
- **Uma conta sua na MapTiler** (maptiler.com), num **plano pago**. O plano gratuito é só para uso não comercial, e um
  canal monetizado é comercial. Na leitura feita em 2026, o plano Flex cobria vídeo em canal com até **100 mil
  inscritos**; acima disso, a MapTiler pede uma licença própria. Releia os termos antes de assinar (Termos Cloud, §5,
  "Limited Videos").
- A conta tem de ser **sua**: não use a chave de outra pessoa nem de outra empresa. A licença acompanha a conta.

### Passo a passo

1. **Crie a conta e assine o plano** na MapTiler. O pagamento é seu, no site deles. O Claude não preenche cartão nem
   senha.
2. **Crie uma chave de API** no painel da MapTiler (a seção de chaves, *API keys*) e copie. **Não cole a chave no chat
   do Claude.**
3. **Diga ao seu Claude: "copiei a chave da MapTiler".** Ele abre o arquivo de chaves no Bloco de Notas (ou no editor
   de texto do seu computador). Você escreve `MAPTILER_KEY=` e cola a chave logo depois, sem espaço. Salva e fecha.
4. **Diga ao Claude se pode gastar.** Cada render de mapa e cada rodada de conferência pedem pedaços de mapa (os
   *tiles*) à MapTiler, e o plano cobra por pedido. O Claude anota o contador antes e depois de cada rodada (abaixo,
   "O gasto"). Dê o ok por vídeo, dizendo se as cenas com relevo 3D estão incluídas.
5. **Olhe o painel da MapTiler no primeiro mês**, para saber quanto um vídeo custa. O painel atrasa algumas horas.

---

## Para o seu Claude

Claude: a pessoa que te mandou este guia quer cenas de mapa no canal dela, pela Régie. Leia o guia inteiro antes do
primeiro passo, e siga isto.

### As regras

- **A chave nunca aparece no chat, no git, no HTML, num log nem na saída de comando.** Nunca abra nem imprima o arquivo
  de chaves: quem o edita é a pessoa, no editor de texto. Para saber se a chave está lá, use só o `onde()` do motor
  (abaixo), que diz de onde ela vem sem mostrar o valor.
- **Gastar tile pede o ok da pessoa, por vídeo**, e o gasto se anota antes e depois de cada render e de cada rodada de
  portão com a pré-carga ("O gasto", abaixo).
- **Site que recusa robô não se contorna**: nem por outro programa, nem trocando cabeçalho, nem tentando de novo. O
  arquivo que só abre no navegador, quem baixa é a pessoa, e você confere o sha256 depois. Antes do primeiro pedido a
  um servidor, leia o `robots.txt` do servidor DO ARQUIVO (não só o das páginas), num comando separado.
- **Geometria real, nunca desenhada à mão.** Tudo o que vai ao mapa vem de uma fonte com licença registrada.
- **Nada deste guia muda o motor.** As cópias de ferramenta desta pasta vão para a pasta do canal; o motor e o molde
  não se editam.
- "NÃO MEDIDO" é resposta, não falha a esconder. Portão que não rodou não vira verde, e olhar um quadro é olhar, não é
  portão.

### Os marcadores

- `<canal>` é a pasta do canal da pessoa. Todo comando roda **de dentro dela**: o motor lê `canal.json`,
  `marca/tokens.css` e `out/<proj>/` a partir do diretório atual.
- `<motor>` é a pasta da pré-v1 da Régie (o clone do motor, no commit `7ab9543` da branch `v1`, ou a versão que a pessoa
  usar; o que este guia diz foi medido nesse commit).
- `<proj>` é o vídeo, com a produção em `out/<proj>/`.
- `%USERPROFILE%` é a pasta do usuário no Windows (no macOS e no Linux, `~`).
- Nas URLs de `--import`, o Windows leva a letra do disco: `file:///C:/caminho/do/canal/ferramentas/…`.

### Passo 0: o que o canal tem

Confira, sem mudar nada:

- `node <motor>/bin/regie version`, e que existem `<motor>/src/mapa/perfis.mjs`, `<motor>/src/mapa/preparar-cena.mjs`,
  `<motor>/src/ferramentas/renderizar.mjs` e `<motor>/src/geo/`. Se não existem, o canal está só na v0.1.0, e este
  guia não se aplica: diga à pessoa.
- No canal: `scripts/qc-cena.mjs`, `scripts/lib/chrome.mjs`, `scripts/_audit-til.mjs`,
  `scripts/qc-rodape-contraste.mjs`, `node_modules/playwright-core` e `node_modules/sharp`. Sem o `node_modules`, rode
  `npm install` (no Windows, se o PowerShell recusar o `npm.ps1`, use `npm.cmd`; não mude a política de execução da
  pessoa). O `playwright-core` usa o Chrome que já está no PC e não baixa navegador.
- Chrome, `ffmpeg` e `ffprobe` instalados; Node 22.13 ou mais novo (o que se mediu foi o Node 24).
- `canal.json` › `contato`: as ferramentas de geometria mandam esse contato no User-Agent de todo pedido (o OSM exige
  que o programa diga quem é) e **param sem ele**. É o contato público do canal, escolhido pela pessoa.

### O que o motor já tem, e como ligar

**A base de mapa** vem de um *perfil* (`<motor>/src/mapa/perfis.json`). São três:

| Perfil | Base | Relevo | Chave | Crédito na tela |
|---|---|---|---|---|
| `aberto` (o padrão) | EOX Sentinel-2 cloudless **2016** | AWS Terrain Tiles | nenhuma | a frase da EOX |
| `vetorial` | OpenFreeMap (mapa desenhado) | nenhum | nenhuma | `© OpenMapTiles · Data from OpenStreetMap` |
| `maptiler` | MapTiler `satellite-v2`, até zoom 20 | MapTiler `terrain-rgb-v2` | `MAPTILER_KEY` | `© MapTiler © OpenStreetMap contributors` |

Este guia é sobre o `maptiler`. Para ligar: `canal.json` › `"mapa": { "perfil": "maptiler" }`. É **uma base por
vídeo**: o `preparar-cena` recusa outra, e trocar a base de uma produção que já tem mapa pede `--trocar-base` e render
de novo das cenas que ele listar. A escolha da base é da pessoa.

**A chave.** O motor lê `MAPTILER_KEY` nesta ordem (`<motor>/src/lib/chaves.mjs`): a variável de ambiente; o arquivo
da máquina, `%USERPROFILE%\.regie\chaves.env` (outro caminho, pela variável `REGIE_CHAVES`); o `.env` da pasta do canal.
A casa dela é o arquivo da máquina, fora de qualquer repositório.

- Quando a pessoa disser que copiou a chave: crie a pasta `%USERPROFILE%\.regie` e o arquivo `chaves.env`, vazio se não
  existir, e abra-o no editor dela (Windows: `notepad "%USERPROFILE%\.regie\chaves.env"`; macOS: `open -e`; Linux:
  `xdg-open`). **Não leia o arquivo.** O leitor do motor aceita UTF-8 com ou sem BOM e o UTF-16 que o Bloco de Notas às
  vezes grava.
- Para conferir, sem ver o valor:
  `node -e "import('file:///<motor>/src/lib/chaves.mjs').then(m=>console.log(m.onde('MAPTILER_KEY')))"`
  sai `maquina`, `ambiente`, `canal` ou `null`.
- Ponha `.env` no `.gitignore` do canal, se ainda não estiver.
- **Como a chave chega à cena:** o render e o `quadro.mjs` a injetam no Chrome, antes de qualquer script da página,
  como `window.__chaves`. A cena troca o marcador `{chave}` da URL na memória. Por isso a cena de mapa MapTiler **não
  abre à mão** no navegador (mostra uma faixa vermelha pedindo a chave), e os portões do molde precisam da pré-carga
  `chaves-nos-portoes.mjs` (abaixo).

**O crédito.** O motor monta o crédito sozinho, a partir do perfil e da geometria que a cena carrega:

- na tela, a frase do perfil, mais `© OpenStreetMap contributors` se alguma geometria vem do OSM (e a base ainda não
  diz OpenStreetMap), mais `Geometria: <fonte> (<licença>)` para outra geometria que exija crédito. Natural Earth não
  põe linha;
- na descrição, `out/<proj>/_creditos-mapa.md`, que o `preparar-cena` gera e regenera (não se edita à mão). No perfil
  `maptiler`, o bloco sai assim (o texto vem de `perfis.json` › `atribuicao.descricao`, mais uma linha por geometria que
  exija crédito e não seja do OSM):

  ```text
  Créditos de mapa:
  Mapas: © MapTiler (https://www.maptiler.com/copyright/) · © OpenStreetMap contributors — dados sob a Open Database License (https://www.openstreetmap.org/copyright)
  ```

**O que o motor não tem** (e o que este guia põe no lugar): o tirador de quadro de mapa (`maprender.mjs`, que o ofício
do mapista cita) e os portões de mapa que `<motor>/docs/MAPAS.md` e a roupa neutra do mapista no molde citam
(`qc-mapa-movimento`, `qc-mapa-borda`, `qc-base-unica`, `qc-rotulo-territorio`, `mapa-vivo`) não existem na pré-v1; o que eles mediriam fica com o olho, dito como "olhado, portão não veio". A chave nos
portões do molde e o render sem queda em quadro grande, sim: as ferramentas desta pasta.

Leitura do motor, antes da primeira cena: `<motor>/docs/MAPAS.md` e `<motor>/docs/CREDITO-DE-MAPA.md`; e o ofício do
`mapista` e do `pesquisa-geo` (em `.claude/agents/` do canal, se a pessoa instalou os especialistas do molde).

### As ferramentas desta pasta

Copie as quatro de `ferramentas/` deste guia para `<canal>/ferramentas/`, **as quatro juntas e com estes nomes**: a
pré-carga e o `portao-mapa` conferem um ao outro pelo caminho relativo à raiz do canal e pelo sha256. Cada uma tem no
topo uma caixa que diz de onde veio, o que mudou e o que não foi provado fora do canal de origem.

| Arquivo | O que resolve | Pede tile? |
|---|---|---|
| `cdp-sem-compressao.mjs` | Pré-carga do render e do `quadro.mjs`. Sem ela, no Node 24, o render cai com "a conexão com o navegador caiu" quando um quadro 4K passa de 4 MB (satélite, foto cheia de detalhe). O Chrome não tem culpa: o WebSocket do Node derruba a mensagem comprimida grande. Ela só tira a oferta de compressão da conexão com o Chrome. | não (o render pede) |
| `chaves-nos-portoes.mjs` | Pré-carga dos portões. Os portões do molde abrem a cena sem a chave: a cena de mapa para antes de criar o mapa, e o portão mede uma página parada e dá verde. Ela dá a chave à cena do mesmo jeito que o render, conta os pedidos à MapTiler e diz NÃO MEDIDO quando o mapa não pintou. O verbo `conferir` prova, depois da rodada, que cada portão de cada cena de mapa rodou com a chave. | sim |
| `portao-mapa.mjs` | O til e o contraste do crédito (`til` e `rodape`), com a mesma régua do molde, mas com o mapa pintado. Os do molde trocam o `requestAnimationFrame` por um que não roda, e o mapa nunca pinta: em cena de mapa, eles saem NÃO MEDIDO com a pré-carga, e a medida passa a ser esta. O `rodape` acha também o crédito com filhos (o ano num `<span>`), que o do molde não vê. | sim, na cena de mapa |
| `portao-margens.mjs` | A área segura medida na tela, sob a câmera, a cada 0,1 s, do começo ao fim: margem, faixa do crédito, fim do crédito e o canto reservado. Na cena de mapa, sem pedir tile nenhum: responde os tiles no próprio PC com um ladrilho cinza, e a câmera e as posições são as do render. | não |

O que elas pedem, além do Passo 0:

- **o molde da pré-v1 sem edição** em `scripts/`: o `portao-mapa` copia a régua do `_audit-til` e do
  `qc-rodape-contraste` e a prende ao sha256 deles; com outro molde, sai 2 sem medir (falha fechada, de propósito);
- **o perfil `maptiler`**: a contagem só olha pedidos a `maptiler.com`. Com outra base, toda cena de mapa sai NÃO MEDIDO.
  Para os perfis `aberto` e `vetorial`, fica para o motor;
- **o `REGIE_MOTOR=<motor>` no mesmo comando** (sem caminho cravado nas cópias: sem ele, saem 2 ou NÃO MEDIDO);
- **os limites da área segura** do canal, no `marca/tokens.css` (`--palco-largura`, `--palco-altura`, `--safe-x`,
  `--safe-y`, `--faixa-credito-y`, `--credito-x`, `--credito-x-fim`, `--canto-reservado`, em px) ou pela linha de
  comando (o topo de cada arquivo diz como). Sem eles, `portao-margens` e o `rodape` saem 2: nunca usam o número de
  outro canal. **Quem decide os números é a pessoa** (é gosto: abaixo, os do canal de origem como exemplo);
- **o fuso**: as horas que a pré-carga grava e o `--desde` do `conferir` estão no fuso do Brasil
  (`America/Sao_Paulo`, `-03:00`). Em outro fuso, troque as constantes `FUSO` e `DESLOCAMENTO` no
  `chaves-nos-portoes.mjs` e `FUSO` no `portao-mapa.mjs`, uma vez, ao instalar.

O que foi conferido destas cópias, nesta máquina, sem pedir tile: a sintaxe das quatro; o `portao-margens` deu o mesmo
veredito, a mesma contagem e os mesmos itens que o original em três cenas (uma sem mapa e duas de mapa, uma delas com
relevo), com os limites
passados pela linha de comando, e reprovou com a mensagem certa quando a margem foi apertada; o `conferir` da pré-carga
deu, sobre os registros reais de um vídeo, a mesma saída do original, linha por linha (só o nome do fuso no texto muda);
o `portao-mapa` (`til` e `rodape`) deu as mesmas medidas que o original em duas cenas sem mapa, com a faixa do crédito
vinda do `tokens.css` e da linha de comando. **Nenhuma cena de mapa passou pela pré-carga das chaves nem pelo
`portao-mapa` destas cópias** (pediria tile pago; o `portao-margens`, que não pede tile, é o único que mediu cena de
mapa): faça a primeira rodada numa cena só e leia o `conferir`.

### As fontes, com licença e crédito

Licença muda. **Antes do primeiro uso de uma fonte num vídeo, releia a página de termos na origem** e compare com o que
está aqui (lido entre setembro e outubro de 2026). Registre cada camada em `out/<proj>/_pesquisa/pauta-geo.json` (as
ferramentas `geo-*` do motor fazem isso): fonte, URL, licença, data, sha256, cena e se exige crédito. O recorte e o
derivado herdam a licença da entrada.

**Usadas pelo canal de origem:**

| Fonte | O que dá | Licença | Na tela | Na descrição | Como se obtém |
|---|---|---|---|---|---|
| **MapTiler** (`satellite-v2`, `terrain-rgb-v2`) | satélite e relevo em tiles | Termos Cloud, plano pago (Flex: vídeo até 100 mil inscritos) | `© MapTiler © OpenStreetMap contributors`, **o tempo todo em que o mapa aparece** | a linha do `_creditos-mapa.md` | o perfil `maptiler`, com a chave da pessoa |
| **OpenStreetMap** (Overpass, Nominatim, osmdata) | rio pequeno, estrada, túnel, bairro, ponto, a água do mar | ODbL 1.0 | `© OpenStreetMap contributors` (já vai na linha da MapTiler) | `openstreetmap.org/copyright` | `geo-osm-rota`, `geo-osm-area`, `geo-lugar-osm`; os *water polygons* em `osmdata.openstreetmap.de` |
| **Natural Earth** | países inteiros, estados, costa, rios e lagos grandes, cidades em ponto | domínio público | nada | opcional: "Made with Natural Earth." | o acervo do motor e `obter-natural-earth.mjs` (commit e sha256 fixados) |
| **Landsat** (USGS), pelo Microsoft Planetary Computer | satélite de data escolhida, 30 m | domínio público | nada | a linha da USGS com o ID da cena | API de dados do Planetary Computer, sem conta (os termos do serviço não foram conferidos: a página só abre com JavaScript) |
| **HydroBASINS / HydroSHEDS v1** (WWF) | bacias e vertentes | licença própria da WWF (uso comercial permitido, com ressalvas: guardar registros, rescisão a critério dela) | nada | o "Exhibit B" inteiro da documentação | **só pela pessoa, no navegador**: o servidor de download (`data.hydrosheds.org`) proíbe robô no `robots.txt` |
| **Copernicus DEM** GLO-30/90 | relevo do mundo (inclui prédio e árvore) | licença livre Copernicus | nada | a frase fixa de DLR/Airbus e o aviso de responsabilidade | AWS Open Data, sem conta |
| **USGS 3DEP** | relevo dos EUA | sem restrição | nada | "Credit: U.S. Geological Survey" | `elevation.nationalmap.gov` |
| **US Census TIGER** | limites, costa e água dos EUA | domínio público | nada | "Source: U.S. Census Bureau, TIGER/Line Shapefiles <ano>" | `www2.census.gov` |
| **USGS topoView / GNIS** | folha topográfica antiga; nome oficial de lugar | domínio público | nada | crédito ao USGS | TNM Access API, sem chave |
| **Mapa antigo em domínio público** | contorno histórico traçado | domínio público **provado na origem** | nada | o crédito que a coleção pede | Wikimedia Commons pela API (User-Agent com contato, um pedido por vez); NARA pela API v2 |

**Aceitas na leitura de licença, não usadas ainda:** HydroSHEDS v2 (CC BY 4.0, com a citação de Lehner et al. 2022);
GEBCO (domínio público, com a citação; não serve para navegação); ETOPO 2022 da NOAA (CC0, com a citação); NASA Blue
Marble (domínio público); Copernicus Sentinel-2 (crédito obrigatório `Contains modified Copernicus Sentinel data <ano>`);
NASA GIBS/Worldview (sem as camadas de rótulo, borda e estrada, que são de terceiros); NAIP, GOES, Himawari;
geoBoundaries (só o gbOpen, com a licença de cada limite); Statistics Canada e NRCan (com a frase de cada um);
LSIB do Departamento de Estado dos EUA; Marine Regions (CC BY); NOAA cartas históricas (o servidor proíbe robô: só no
navegador); Google Earth Timelapse (CC BY 4.0, crédito na tela) e Google Earth Studio (crédito na tela a cena inteira,
com a conta da pessoa).

**Não servem:** Esri World Imagery (proíbe uso comercial sem permissão escrita); Mapbox (vídeo só com direito comprado);
**EOX cloudless de 2018 a 2025** (CC BY-NC-SA, não comercial; só a de 2016 é livre, e é a do perfil `aberto`); GADM, UN
SALB e Eurostat GISCO (não comerciais). Qualquer outra base só entra depois de a licença ser lida e registrada.

**Cuidados de fonte, medidos:**

- O Natural Earth 1:10M **não tem rio regional**: rio pequeno vem do OSM. A costa dele é simplificada: um ponto real
  pode cair na água (medido: 236 m). Declare o deslocamento, nunca apague o ponto original.
- O OSM costura **uma relation só** no `geo-osm-rota`, pelas pontas: pista dupla e rotatória deixam "órfãos", que ele
  só avisa e grava assim mesmo. Rota em várias relations, ou com órfãos, pede montar o caminho (de A até B pelo grafo
  dos *ways*) antes de entregar ao `geo-osm-rota --in=<dump> --tol=0`.
- O Overpass responde 504 sob carga: espere uns 2 minutos e repita uma vez, um pedido por vez, 10 s ou mais entre eles.
  Consulta `around` com linha longa dá 504; com `(bbox)(around:…)` responde. 403, 429 persistente ou captcha: pare.
- O ponto do OSM é o centro do contorno de HOJE: para lugar histórico, declare o aproximado. Limite administrativo do
  OSM pode divergir do oficial: meça e declare.
- Lugar que nenhuma base nomeia: o ponto sai da geometria real (a ponta da estrada, por exemplo), e o nome vem do
  roteiro, com a origem do nome declarada.
- Mapa antigo como geometria: só domínio público provado, georreferenciado por pontos de controle independentes, com a
  incerteza **medida e declarada**; a câmera nunca chega mais perto do que a incerteza sustenta. A folha topográfica
  antiga pode errar 50 a 250 m mesmo com a georreferência oficial: confira cada folha num ponto fixo de hoje.
- Rota nunca construída: tracejada, tirada do TEXTO da fonte, com "rota aproximada" na tela todo o tempo da linha.
  Fronteira disputada: tracejada, o rótulo de disputa, a linha de controle de fato, nunca a reivindicação de um lado.
- Bandeira de país tem dono: alguns países protegem a deles contra uso comercial, até educativo. Escrever o nome do país
  é o caminho seguro.
- Linha derivada de relevo por critério (crista, divisor) só entra se critérios independentes concordam: no canal de
  origem, três critérios deram três linhas, e a linha foi rejeitada.

### Um vídeo, passo a passo

**1. A geometria (`pesquisa-geo`).** Cada camada pela ferramenta `geo-*` do motor, de dentro do canal. Elas gravam o
cache da máquina (`%USERPROFILE%\.regie\geo\`), a produção (`out/<proj>/_media/geo/<slug>.json` e `.js`) e, por último,
o item da `pauta-geo.json`. Sem fonte e licença, não gravam nada.

```
node <motor>/src/geo/geo-pais-completo.mjs <proj> --a3=<ISO3> [--cena=<id>]
node <motor>/src/geo/obter-natural-earth.mjs ne_10m_rivers_lake_centerlines
node <motor>/src/geo/geo-recorte-bbox.mjs <proj> --in=<camada|slug> --bbox=lonMin,latMin,lonMax,latMax --slug=<saida> [--fonte= --licenca= --fonte-url=]
node <motor>/src/geo/geo-osm-rota.mjs <proj> --osm=relation/<id> [--slug=] [--tol=0]
node <motor>/src/geo/geo-osm-area.mjs <proj> --osm=relation/<id> [--slug=]
node <motor>/src/geo/geo-lugar-osm.mjs <proj> --q="<busca>" --ref=lon,lat [--raio=60] [--so-ponto]
node <motor>/src/geo/catalogo.mjs [--busca=<texto>] | usar <proj> <slug> [--cena=<id>]
```

- `geo-recorte-bbox`: **nunca `--nome`** (grava o mesmo nome em TODAS as features); camada sem `name` no topo (a de rios)
  não herda a licença: passe `--fonte`, `--licenca` e `--fonte-url`. O corte em 180° não é tratado.
- `geo-lugar-osm`: o `--ref` é obrigatório, e o resultado a mais de `--raio` km do ponto aborta (trava contra lugar de
  mesmo nome).
- O mapa-múndi do acervo (`ne110m`) descarta ilhas: não use em zoom de país.

**2. As peças da cena.**

```
node <motor>/src/mapa/preparar-cena.mjs <proj> [--molde=<id-da-cena>]
```

Copia o MapLibre 4.7.1, a câmera e o perfil (sem chave) para `out/<proj>/_media/_vendor/`, embrulha cada geometria,
gera o `_creditos-mapa.md` e, com `--molde`, cria `out/<proj>/graphics/<id>.html` a partir do molde de mapa (nunca
sobrescreve cena que existe). Se uma peça que as cenas carregam mudou, ele lista as cenas e pede render com `--forcar`:
o carimbo do render guarda só o sha1 do HTML.

**3. A cena (o `mapista`).** Edita só o bloco `CENA` do molde: `duracao`, `viewports` (pontos de passagem da câmera),
`bearingLoop`, `territorio`, `chips`, `fotoRegiao`. E, do molde para o canal:

- `<html lang="…">` na língua do vídeo (o molde vem `pt-BR`), com `data-render="4k-native"` literal;
- `var DUR = <número>;` escrito como número: o portão `qc-janela` só lê número literal, não `CENA.duracao`;
- **o MapLibre não lê `var(--…)`**: a cena lê as cores do `tokens.css` por
  `getComputedStyle(document.documentElement).getPropertyValue("--…")` e passa o valor ao mapa. Nenhum hex cravado fora
  do valor de reserva;
- o crédito do molde vem cravado (46 px, em x = 154): ajuste ao tamanho e ao lugar do canal, lidos dos tokens;
- `pausa: true` num viewport **não faz nada** (limite da câmera do motor): para segurar a imagem, a cena calcula o
  trecho parado;
- a cena maptiler não abre à mão: a prévia é o render de prova.

**4. A margem, sem gastar.** Até sair 0, antes de qualquer render:

```
REGIE_MOTOR=<motor> node ferramentas/portao-margens.mjs out/<proj> [--so=<id>,<id>]
```

(PowerShell: `$env:REGIE_MOTOR='<motor>'; node ferramentas/portao-margens.mjs out/<proj>`.) Sai 0, 1 (reprovou, com o
item, o instante e o limite) ou 2 (NÃO MEDIDO). **Sem a pré-carga das chaves** (com ela, se recusa). A cena com relevo
3D sai 2 por desenho: o relevo dele é plano, e uma pílula sobre a montanha fica até 19 px fora do lugar do render; a
margem dela se confere no clipe de prova.

**5. Os portões, com a pré-carga das chaves.** Anote o contador antes ("O gasto"). Git Bash:

```
REGIE_MOTOR=<motor> node --import=file:///<canal>/ferramentas/chaves-nos-portoes.mjs scripts/qc-cena.mjs out/<proj> --conc=3 --forcar
REGIE_MOTOR=<motor> node --import=file:///<canal>/ferramentas/chaves-nos-portoes.mjs ferramentas/portao-mapa.mjs til out/<proj> --so=<cenas de mapa>
REGIE_MOTOR=<motor> node --import=file:///<canal>/ferramentas/chaves-nos-portoes.mjs ferramentas/portao-mapa.mjs rodape out/<proj>
REGIE_MOTOR=<motor> node ferramentas/chaves-nos-portoes.mjs conferir out/<proj> --desde="AAAA-MM-DD hh:mm:ss"
```

PowerShell: `$env:REGIE_MOTOR='<motor>'; node --import=file:///<canal>/ferramentas/chaves-nos-portoes.mjs …`, na mesma
chamada.

- o `--forcar` do `qc-cena`: sem ele, o `qc-cena` pula a cena que já tem carimbo válido no `out/<proj>/_portao.json`,
  inclusive o verde de uma rodada sem a pré-carga (a página parada), e o `conferir` a dá como FALTA ou SEM PROVA. Ele
  re-mede tudo o que recebe: para gastar menos tile, passe só os HTML das cenas da rodada no lugar de `out/<proj>`
  (`scripts/qc-cena.mjs out/<proj>/graphics/<id>.html … --forcar`);
- o `--desde` é a hora do começo da rodada, no fuso da constante `FUSO`;
- o `rodape` roda em todas as cenas, com e sem mapa: é a medida do contraste do crédito que o `qc-visual` lê;
- o `conferir` sai 0 só sem nenhum problema (NÃO MEDIDO, FALTA, SEM A CHAVE, SEM PROVA, carimbo vencido). A reprovação
  medida aparece numa lista à parte e não se apaga com um verde depois;
- com a pré-carga, o `_audit-til` e o `qc-rodape-contraste` do molde saem NÃO MEDIDO em cena de mapa: é esperado (a
  medida é a do `portao-mapa`);
- **nunca** ponha a pré-carga no `NODE_OPTIONS` fixo da máquina; ela se passa aos portões filhos sozinha. Nunca rode com
  `DEBUG=pw:protocol` nem com o *trace* do playwright: os dois gravariam o script que leva a chave;
- anote o contador depois. A pré-carga grava uma linha por página em `out/<proj>/_tmp/maptiler-portoes.jsonl`, só com
  números (a URL leva a chave e nunca se grava): a soma de `pedidos_maptiler` das linhas novas é o gasto da rodada.

**6. O render 4K.**

```
node --import file:///<canal>/ferramentas/cdp-sem-compressao.mjs <motor>/src/ferramentas/renderizar.mjs <proj> --cena=<id>[,<id>] --4k
```

- **sempre `--4k`**: sem ele, a cena 4K sai em 1080p, e o carimbo (`out/<proj>/graphics/<id>.mp4.de-html`, duas linhas: o
  sha1 do HTML e a resolução) guarda isso. O clipe só vale se o carimbo termina em `2160p`. Render de novo é tile pago de
  novo;
- o render com carimbo igual é pulado. Não use `--forcar` sem necessidade; use quando mudou algo que a cena carrega
  (perfil, vendor, geometria, `tokens.css`, foto), que o carimbo não vê;
- códigos de saída: 0 ok · 1 infraestrutura (sem Chrome, ffmpeg ou chave) · 2 contrato da cena quebrado · 3 erro de JS
  ou `__erroCena` · 4 mídia ou fonte que não carregou;
- não renderize com outra tarefa pesada no PC (outro render, uma busca no navegador): a cena de mapa 4K esmaga a
  máquina e o render trava.

**7. O quadro, para olhar.**

```
node --import file:///<canal>/ferramentas/cdp-sem-compressao.mjs <motor>/src/ferramentas/quadro.mjs out/<proj>/graphics/<id>.html <saida.png> --t=<s>
```

A chave só chega se o HTML mora numa pasta chamada `graphics`. Cada quadro novo pede tile. Do clipe já renderizado sai
de graça: `ffmpeg -ss <s> -i out/<proj>/graphics/<id>.mp4 -frames:v 1 <saida.png>`. Olhe no meio e no fim de cada
movimento, não só no primeiro quadro.

**8. A descrição.** Leve o `out/<proj>/_creditos-mapa.md` à descrição do vídeo, mais as linhas das fontes que pedem
crédito na descrição (tabela acima).

### As regras da tela do mapa

**Método (vale para qualquer canal):**

1. **Sem véu sobre o mapa.** O molde traz um degradê escuro (`#scrim`) em cima e embaixo: tire. O satélite é a prova do
   lugar; véu, vinheta e degradê escondem o que a base mostra e mudam o fundo sobre o qual o crédito se mede. Se o canal
   quiser a imagem mais escura ou sem cor, o ajuste vai nas propriedades da camada raster do MapLibre
   (`raster-brightness-max`, `raster-saturation`, `raster-contrast`), igual em todo o vídeo e declarado.
2. **O crédito inteiro no 1º quadro em que o mapa aparece, até o último**, sem a entrada em fade dos outros créditos,
   fora da câmera (não se move com o mapa), legível em qualquer tela. A licença da MapTiler exige a tela; a descrição ou
   os créditos finais sozinhos não bastam. O plano pago dispensa o logo, não o crédito.
3. **Marque o crédito no próprio elemento da linha do mapa**: `data-qc-papel="credito" data-qc-credito="mapa"`. Marcado
   num contêiner comum, a linha de outro crédito herda a marca de mapa e o portão mede com a régua errada (verde falso,
   medido).
4. **Geometria real, nunca à mão.** Faltou geometria: volta para a pesquisa e se diz o bloqueio. Linha desenhada sobre a
   base real é uma afirmação sobre o lugar.
5. **A área segura medida sob a câmera**, em todo instante, antes do render (`portao-margens`). O que nasce rente à
   margem sai dela no zoom da câmera. O conserto cria o defeito ao lado: reconfira também perto do lugar mexido, e meça
   a pílula no DOM depois de `document.fonts.ready`, não por conta.
6. **Cada tipo de linha se distingue sem conhecer o lugar** (fronteira, estrada, rota, rio), com legenda ou o nome na
   primeira vez; o rótulo de uma linha só entra com a linha na tela. Nenhum rótulo sobre a linha.
7. **Toda linha precisa de contraste sobre a base mais clara do vídeo**: linha clara some sobre neve e gelo (medido:
   1,5:1). Um contorno escuro por baixo resolve. Linha dentro de um território da mesma cor some se o preenchimento é
   forte.
8. **Território sem nome não leva tinta**; a cor de cada território é a mesma no vídeo inteiro.
9. **Território do passado nunca sobre base que mostra o presente** sem dizer; relevo 3D só quando a frase argumenta com
   a altura, nunca enfeite.
10. **A emenda do mosaico de satélite na água** (borda reta clara no mar) se esconde com a água real: os *water polygons*
    do OSM, recortados ao lugar e pintados opacos logo acima do satélite, com o encaixe medido contra o clipe já
    renderizado. Nunca inventando costa.

**Gosto do canal de origem (exemplo, não regra; o seu canal decide os dele):**

- a base com brilho máximo 0,92, saturação 0 e contraste +0,25; a água escura num azul quase preto;
- uma cor de destaque para o protagonista (território a 85 %, ou 40 % com contexto pintado), uma contraparte a 35 % e
  até três cores de contexto a 25 %; no máximo três matizes; nada de vermelho contra azul como dois lados; cinza nunca
  em linha de mapa;
- fronteira em branco a 70 %, 5 px, sobre contorno escuro a 60 %, 12 px;
- rótulo em pílula escura a 88 %, cantos de 12 px, letra de 128 px, até três palavras; país em caixa alta, cidade e rio
  em caixa normal; um anel que pulsa duas vezes no lugar de pino;
- crédito de 56 px, sobre pílula escura, de x 200 até antes de x 1720, abaixo de y 1880; longo quebra em duas linhas e
  nunca encolhe;
- área segura: margem de 200 px nas laterais e 160 no topo, canto de 400 × 400 px reservado no inferior direito (a
  marca-d'água do YouTube), até 6 elementos ao mesmo tempo;
- viagem de câmera de 1,5 a 3 s; mapa seguido de mapa é uma viagem só; rótulo entra em 300 ms.

### O gasto da MapTiler

A MapTiler cobra **por pedido de tile**, e não há cache entre um render e outro: cada render, cada quadro, cada render de
prova e cada rodada de portão com a pré-carga pedem tiles. Uma rodada de portões numa só cena de mapa pode pedir de
centenas a alguns milhares de tiles; com relevo, mais que o dobro.

- **Um ok da pessoa por vídeo**, com o escopo (que cenas; se o relevo 3D entra). Cite esse ok no topo do registro.
- **O registro**: `out/<proj>/_pesquisa/maptiler-gasto.md`, com uma linha **antes** e uma **depois** de cada render de
  mapa e de cada rodada de portão com a pré-carga:

  ```
  # Gasto da MapTiler — <proj>
  Liberação: <a mensagem da pessoa, com a data>

  | quando | rodada | pedidos | notas |
  |---|---|---|---|
  | <data hora> | antes do render s06 | — | contador do painel: <n> |
  | <data hora> | portões s06, s13 | <soma de pedidos_maptiler das linhas novas> | |
  ```

  O render 4K não tem contagem local: fica "não contado", e o painel da MapTiler dá o total (ele atrasa horas e pode
  contar o dia em UTC).
- **O que não gasta:** o `portao-margens` (sem tile); o render pulado pelo carimbo; o quadro tirado do MP4 pelo ffmpeg;
  a medida de encaixe da água sobre o clipe já feito; a prova de cor sobre uma base pública (Landsat), com a legenda de
  que não é a base do vídeo.
- **A ordem, do mais barato ao mais caro:** margens (grátis) → portões com a pré-carga → render de prova → render final.
- Limite atingido no plano: pare e avise a pessoa. Nunca troque de conta nem de chave para passar do limite.

### Tropeços medidos (Windows 11, Node 24, a pré-v1 no commit `7ab9543`)

- Render ou `quadro.mjs` sem `cdp-sem-compressao.mjs` cai em quadro acima de 4 MB: "a conexão com o navegador caiu". Não
  é o Chrome; repita com a pré-carga.
- Render sem `--4k` grava 1080p e o carimbo guarda: render de novo, tile de novo.
- Portão de cena de mapa sem `chaves-nos-portoes.mjs` mede a página vazia e dá verde. Com ela, os dois portões do molde
  que param o `requestAnimationFrame` saem NÃO MEDIDO: a medida é o `portao-mapa`.
- Saída "uso:", "não encontrado", `ENOENT` ou "atualize o motor para a versão que o canal.json declara"
  (`MOTOR_SEM_ARQUIVO`) é uso errado (o alvo errado, ou faltou `REGIE_MOTOR`), não reprovação nem NÃO MEDIDO: repita
  certo. Nunca mexa no motor nem no `canal.json` por causa dessa mensagem.
- Os portões do molde querem alvos diferentes: `qc-cena` quer `out/<proj>` ou os HTML; `qc-src-existe` quer `out/<proj>`
  ou o HTML (com o `<proj>` solto, quebra com pilha); `qc-hex`, `qc-contrato` e `qc-fora-do-quadro` querem
  `out/<proj>/graphics` ou o HTML; `shot` e `probe-elemento` querem `<html> <t>`; `check-overlap`, `qc-carga`,
  `qc-tamanho`, `qc-pais-bandeira` e `qc-video-avanca` querem o HTML da cena; a maioria dos outros, o `<proj>`.
- O `qc-pais-bandeira` do molde só reconhece nome de país em português.
- O `perfis.json` da pré-v1 ainda escreve "2016 & 2017" no crédito da EOX: só a de 2016 tem licença livre.
- Com uma base que não é perfil do motor (por exemplo, Landsat como imagem), o `_creditos-mapa.md` sai com o crédito da
  EOX e tem de ser regravado depois de todo `preparar-cena`.
- Nunca `--disable-gpu` no Chrome: a rasterização por software cortava pedaços da cena. Log com SwiftShader ou llvmpipe
  quer dizer render lento, não errado: vai ao relato.
- `import()` de caminho absoluto no Windows precisa de `file:///` (senão, `ERR_UNSUPPORTED_ESM_URL_SCHEME`).
- Textura de fundo num `::after` pinta por cima da cena: luz e grão vão como primeira camada.
- O relevo da MapTiler e a câmera 3D funcionam, mas o `portao-margens` não os mede (NÃO MEDIDO por desenho).
- Portão que reprova muitas cenas com a mesma mensagem é, primeiro, suspeita de leitura: prove o fato numa cena antes de
  mandar consertar todas. E o papel declarado (`data-qc-papel`) tem de casar com o que o elemento é: o portão mede o que
  se declara.

### O que não fazer

- Não contornar site que recusa robô (403, 429, captcha, Cloudflare, "unusual traffic"), nem com outro programa, nem
  trocando cabeçalho, nem tentando de novo. Pare naquele servidor e avise.
- Não pôr a chave no HTML, no `canal.json`, no git, no chat, num log ou num nome de arquivo. Não imprimir o arquivo de
  chaves.
- Não usar a chave nem a conta de outra pessoa ou empresa.
- Não desenhar geometria à mão, nem decalcar rota de figura sem permissão.
- Não usar base que a tabela "Não servem" lista, nem EOX de outro ano que 2016.
- Não esconder nem encolher o crédito do mapa, nem deixá-lo só na descrição.
- Não renderizar sem `--4k`, nem com `--forcar` à toa.
- Não pôr a pré-carga no `NODE_OPTIONS` fixo da máquina, nem rodar portão com `DEBUG=pw:protocol`.
- Não matar navegador por nome (`taskkill /IM chrome.exe`): derruba o Chrome da pessoa junto com o do render.
- Não editar o motor, o molde (`scripts/`, `contratos/`) nem as ferramentas desta pasta para "fazer passar": portão que
  reprova uma regra que a marca do canal não tem vai à pessoa, cena por cena, e a exceção fica presa ao sha1 do HTML.
- Não pular o "NÃO MEDIDO": ele quer dizer que ninguém sabe se a cena está certa.

### O que ficou de fora, e por quê (fica para o motor)

Estas peças existem no canal de origem, mas presas demais aos vídeos dele para virar cópia genérica segura. O que elas
fazem é método; o código fica para o motor (o canal de origem já registrou cada uma como "vale levar ao motor").

- **A prova do `portao-margens`** (`portao-margens-provar.mjs`): sintéticos por regra, a rede presa e, sobretudo, as
  cenas de um vídeo do canal de origem que tinham reprovado (têm de reprovar) e as aprovadas (têm de passar). Sem essas
  cenas, ela não prova nada noutro canal. No seu: guarde uma cena que você sabe certa e uma que sabe errada, e rode as
  duas a cada mudança de ferramenta.
- **Ponto de cidade do Natural Earth com procedência** (escolhido pelo identificador do NE, testado terra ou água contra
  o polígono do NE, com o deslocamento declarado quando cai na água): o motor baixa a camada, mas não grava ponto. Um
  `geo-pontos-ne` no motor.
- **Rota do OSM "de A até B"** (o caminho mais curto pelo grafo dos *ways* de uma relation, para pista dupla e
  rotatória) e **rota em várias relations** (balsa, trilha, rodovia por estado): modos que faltam ao `geo-osm-rota`.
- **A água escura** (os *water polygons* do OSM recortados, com quebra-mar e píer tirados, simplificados com topologia,
  e a medida do encaixe da costa contra o clipe já renderizado, sem pedir tile).
- **Vertentes e divisor de águas** de uma fonte só (HydroBASINS, seguindo cada bacia até a foz, recortado pelo contorno
  do país, com a divisória feita das arestas compartilhadas).
- **Base de Landsat** pelo Planetary Computer, sem conta, como imagem do MapLibre: satélite de data escolhida, sem chave
  e sem crédito na tela, e a base da **prova de cor sem pagar**. Não cabe nos perfis do motor: pede um perfil "imagem
  local", e o `_creditos-mapa.md` que o conheça.
- **O fundo de satélite das cenas sem mapa** (imagem pública escurecida, com a guarda de contraste do crédito): o
  tratamento é gosto do canal de origem.
- **O cliente de rede do pesquisador** (User-Agent com contato, um pedido por vez, espera mínima, log de cada pedido, e
  parada sem repetir em 403, 418, 429, 504 ou captcha): a regra está neste guia; o código é do canal de origem.
- **No motor, além disso:** a chave nos portões e o `requestAnimationFrame` vivo em cena de mapa (o que a pré-carga e o
  `portao-mapa` fazem por fora); o WebSocket do render sem compressão (o que o `cdp-sem-compressao` faz por fora); o
  molde de mapa lendo o tratamento e o crédito dos tokens, sem hex cravado; `var DUR` como número no molde; a pré-carga
  para os perfis `aberto` e `vetorial`; o `geo-recorte-bbox` sem `--nome` em todas as features e herdando a licença de
  camada sem `name`; o crédito da EOX corrigido para 2016.

### Quando terminar

Escreva no `CLAUDE.md` do canal uma seção curta: a base escolhida e quem a escolheu; onde a chave mora (só o caminho do
arquivo, nunca o valor); o ok de gasto de cada vídeo; os comandos dos passos 4 a 7 com os caminhos deste canal; e os
números da área segura que a pessoa decidiu. Diga à pessoa o que custou o primeiro vídeo, quando o painel da MapTiler
mostrar.
