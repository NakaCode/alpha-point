<!-- Roupa do Alpha Point para o pesquisa-geo. Escrita em 26/09/2026, na instalação dos especialistas da
     pré-v1 da Régie. Molde de formato: template/marca/agentes/pesquisa-geo.md da pré-v1 (commit 7ab9543),
     que é a roupa do Canal Top10 — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do canal:
     marca/identidade.md, marca/tokens.css, canal.json, CLAUDE.md (item 6 das peças da pré-v1), APRENDIZADOS.md.
     Onde o canal ainda não decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE" e o que se faz até lá. -->

# ROUPA ALPHA POINT — pesquisa-geo

> Só o que é do canal. O ofício (nunca desenhar geometria, validar bbox e contagem, licença por família
> de fonte, bloquear em vez de improvisar) está em `.claude/agents/pesquisa-geo.md` e não se discute
> aqui. Marca ativa: `marca/identidade.md`, `marca/voz.md`, `marca/midia.md`.

## 0 · O canal, em uma tela (vale para todo especialista)

- **Faceless.** Ninguém fala para a câmera (identidade.md §0). O master é a narração sobre tela preta
  3840×2160, e 100 % do tempo é coberto por cena (identidade.md §5). Há um relógio só,
  `out/<proj>/words.json`.
- **O `words.json` tem a grafia da cópia para a voz**, não a do roteiro: aliases de pronúncia e números por
  extenso (no Juneau, `Kay-too` = KTOO, `Keel` = Kiehl, `Mat-Sue` = Mat-Su, `N F L` = NFL, `Gladyshevsky` =
  Gladziszewski, `nineteen seventy-four` = 1974, `nine hundred sixty-six million dollars` = $966 million). A
  lista de cada vídeo é `roteiros/<proj>/voz/trocas.md`. Entidade, grafia de tela, número de tela e termo de
  busca saem de `roteiros/<proj>/roteiro-narrador.md`; do `words.json` sai o tempo, e uma âncora se procura
  nele na grafia da voz (`KTOO` não está lá; `Kay-too`, sim). O que a voz disse diferente do texto está em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo`. Como ele se faz: CLAUDE.md, "Peças da pré-v1 em
  uso", item 3.
- **Idioma.** Tela e busca em **inglês dos EUA** (`canal.json › idiomas.origem`). Relatório e notas, em
  português.
- **Formato de tela** (identidade.md §7): `2,700`, `$2.8 billion`, `ALMOST 3,000×`, `28.0×`,
  `22.2 ft (6.76 m)`, `MAY 1, 1994`; distância em milhas primeiro. ⚠️ Os exemplos do ofício e das
  ferramentas estão no formato brasileiro e com topônimo aportuguesado (`QUASE 3.000×`, `28,0×`,
  `--pt="Estreito de Tsugaru"` no cabeçalho do `geo-osm-area`): **não se copiam**.
- **Vocabulário de máquina não se traduz:** chaves de JSON e de GeoJSON (`name_pt`, `licenca`,
  `exige_credito`…), `--pt=`, enums, `data-qc-*`, `NÃO MEDIDO` (CLAUDE.md, "O vídeo fala inglês"). O
  slug do arquivo pode ser inglês (`panhandle-juneau`, `matsu-anchorage`).
- **Cena HTML**, se alguma entrega sua virar uma: `<html lang="en-US" data-render="4k-native">`, ligando
  `marca/tokens.css` (CLAUDE.md). A cena de mapa é do `mapista`.
- **`<motor>` nesta roupa é a pré-v1 da Régie**, clonada só para leitura (CLAUDE.md, "Peças da pré-v1 em
  uso"), e **não** o `motor.caminho` do `canal.json` (a v0.1.0, que não tem `src/geo/`). As ferramentas
  de geografia são `node <motor>/src/geo/<x>.mjs`, com a pasta atual na raiz do canal. Script de
  `scripts/` que importa do motor pede `REGIE_MOTOR=<motor>` na mesma chamada; `MOTOR_SEM_ARQUIVO` ou
  "atualize o motor" quer dizer só que faltou a variável. Nunca mexa no motor nem no `canal.json`.
- **Gate que pede `sharp` ou `playwright-core` sai NÃO MEDIDO**, com o nome: o `npm install` não foi
  autorizado pelo Lucas. Gate que não está no disco, também. Não simule gate.
- **Nunca** rode `narrar.mjs` nem `transcrever.mjs`: gastam crédito da ElevenLabs e refazem o relógio
  (CLAUDE.md).
- **Site que recusa leitura automática** (403, 405, captcha, verificação de robô, página "Just a
  moment…"): pare nele. Não tente de novo por `curl`, por outro programa, trocando o User-Agent nem
  qualquer outro cabeçalho. Diga no relatório a URL e o que ela respondeu; o Claude central confere no
  navegador do app, com o Lucas vendo (CLAUDE.md, "A marca"; APRENDIZADOS.md, item 14). Se o site é
  **página oficial do Estado do Alasca**, a cópia pública arquivada (web.archive.org) dela **vale como fonte**
  do que a página dizia (Lucas, 27/09/2026; CLAUDE.md, "A marca"): leia-a antes, e registre a URL da cópia, a
  original e a data da captura; o crédito na tela é o do órgão, nunca o arquivo. Ler essa cópia não é
  contorno. Ela não prova licença nem permissão de uso, que se leem na origem de hoje. A cópia arquivada de
  outro site não foi perguntada ao Lucas e não se usa. O que a cópia não resolve vai ao navegador do app. OSM, Overpass
  e Nominatim têm política de uso: diante de 429, 504 ou verificação, espace as tentativas ou pare
  (APRENDIZADOS.md, item 17, achado 22).
- **Quem decide é o Lucas Rosa** (`canal.json › owner`). As leis `[PESQ-NN]` (`seed/regras/PESQ.md`)
  vieram do Top10: valem como ofício; onde falam de dono, base, cor ou exemplo, vale esta roupa.

## 1 · Quem consome a sua geometria

- O **`mapista`**, sobre a base **MapTiler** satellite-v2 + terrain-rgb-v2 (`canal.json › mapa.perfil`,
  decisão do Lucas em 26/09/2026; identidade.md §6). Você não escolhe base, câmera nem cor, e **não pede
  tile**: o plano cobra por pedido, e quem o pede é o mapista (no Juneau, com o gasto liberado: identidade.md §6,
  "O gasto do Juneau, liberado").
- Para quem desenha (identidade.md §6): base a 65 % de brilho e 70 % de saturação; o protagonista
  preenchido em `--destaque` a 85 %, com contorno `--tinta` de 6 px; as outras fronteiras em branco a
  35 %, 3 px, sobre um contorno escuro de 7 px.
- **Território é polígono inteiro; ponto é anel** (identidade.md §1, §4.4). País, estado ou região: entregue
  o polígono completo, nunca um ponto. Estreito, base, porto, fim de estrada: entregue o ponto real, que o
  anel vai marcar.
- **Fronteira disputada:** a linha de controle de fato, que a cena desenha tracejada com o rótulo
  `DISPUTED`. Nunca a reivindicação de um lado (identidade.md §6). Diga a fonte de cada linha.
- Fronteiras e costas: Natural Earth, domínio público (identidade.md §6).

## 2 · Onde a geometria fica neste canal

- As ferramentas da pré-v1 gravam em três lugares: o cache geo da máquina, `out/<proj>/_media/geo/<slug>.json`
  (e o `.js` que a cena carrega) e o registro em `out/<proj>/_pesquisa/pauta-geo.json`. Não em
  `assets/geojson/`, como diz o contrato do agente.
- `build-geo-manifest.mjs` e `src/agent/geo-tools.mjs` não existem neste canal nem no molde: NÃO MEDIDO. O
  que o ofício faria com `jq`, `turf` ou `mapshaper` (ausentes; CLAUDE.md, "Os especialistas", tropeços), faça
  com as derivações da pré-v1.
- A conferência do contrato (§3, item 1) roda sobre `out/<proj>/_media/geo/<slug>.json`.
- **DECISÃO DO LUCAS PENDENTE: se o canal mantém um acervo de geometria entre vídeos em
  `assets/geojson/`.** Até lá, a geometria é por vídeo, e nada se grava lá; para reusar, `catalogo usar` traz
  do cache (o que o `catalogo` lê: CLAUDE.md, tropeços do apoio).
- **Olhe antes de baixar:**
  `node <motor>/src/geo/catalogo.mjs --busca=<termo>` e `node <motor>/src/geo/catalogo.mjs usar <proj> <slug>`.
- As derivações (rode sem argumento para ver o uso): `obter-natural-earth`, `geo-pais-completo`,
  `geo-recorte-bbox`, `geo-ilha-de-pais`, `geo-lugar-osm`, `geo-osm-rota`, `geo-osm-area`,
  `geo-grande-circulo`, todas em `<motor>/src/geo/`.

## 3 · Cuidados deste canal

- **Antes de rodar uma derivação**, leia os tropeços das ferramentas de geo nesta máquina: CLAUDE.md, "Peças
  da pré-v1 em uso", item 6 (`--nome`, licença de camada sem `name`, rio que o NE 1:10M não tem, a rota
  costurada à mão), com o detalhe no APRENDIZADOS.md, item 17 (achados 16, 21, 22 e 23).
- A estrada do Juneau já está montada: `out/juneau/_pesquisa/estrada-juneau-cascade.mjs` (os dois comandos no
  topo do script).
- **Ponto de cidade:** o do Natural Earth (domínio público, sem crédito) antes do OSM (ODbL, crédito na
  tela). O canal grava o ponto do NE com `out/juneau/_pesquisa/cidades-ne.mjs`.
- Ponto sobre a costa simplificada do NE pode cair na água: Cascade Point fica a 236 m da costa do NE
  1:10M. Se a cena pintar a terra com o polígono do NE, declare o deslocamento.
- As Aleutas além de 180° ficam fora do recorte do Alasca.
- **Fontes aceitas desde 27/09/2026** (Lucas, 4ª rodada; identidade.md §6, "Bases, geometria e dados aceitos em
  27/09/2026"; as licenças e os créditos em `marca/acervos/5-dados-e-fronteiras.md`):
  - geometria: geoBoundaries, US Census TIGER, Statistics Canada, LSIB (o arquivo vem pelo navegador do app,
    com o sim do Lucas à lista, porque o servidor recusa robô), HydroSHEDS v2 e Marine Regions;
  - relevo: Copernicus DEM, USGS 3DEP (o Alasca a 5 m), GEBCO e ETOPO. O SRTM e o NASADEM param em 60°N;
  - cada uma com o crédito que a licença dela pede;
  - não servem: GADM, UN SALB e Eurostat GISCO (não comerciais).

## 4 · O rótulo (identidade.md §3, §4.1, §7)

- Nome em **inglês dos EUA, pela forma do AP Stylebook**. País e região em **CAIXA ALTA**, Inter 700,
  tracking +0.04em; cidade, rio e estreito em caixa normal, Inter 700. Nome de lugar é rótulo: 128 px,
  teto 160, até 3 palavras; nunca herói.
- O rótulo da tela vem do `redator-de-tela`, não do `name_pt`. As geometrias já gravadas no canal têm
  `name_pt` em português (medido: `out/juneau/_media/geo/eua.json` diz "Estados Unidos", e `canada.json`,
  "Canadá"). Em geometria nova, passe `--pt=` com o nome em inglês (o valor é texto de tela; a chave é da
  pré-v1) e diga no relatório.

## 5 · Crédito na tela, por licença (identidade.md §6, §7; CLAUDE.md, item 6)

- **Natural Earth:** domínio público, sem crédito.
- **OpenStreetMap** (rota, rio, área ou ponto que vem dele): `© OpenStreetMap contributors` na tela da
  cena, e `openstreetmap.org/copyright` na descrição. Diga no relatório quais cenas carregam OSM.
- **A base MapTiler** leva `© MapTiler © OpenStreetMap contributors` na tela durante todo o mapa: isso é
  do `mapista`.
- **Copernicus Sentinel**, se um dia entrar: `Contains modified Copernicus Sentinel data <ano>`.
- O crédito entra em 76 px, na faixa abaixo de y = 1880, de x = 200 até antes de x = 1720.

## 6 · Quando não há geometria real

A proposta de troca de modo do Top10 era o "desenho esquemático declarado como esquema". **O canal aceita
esquema declarado de rota que nunca foi construída** (Lucas, 27/09/2026; identidade.md §6, "Rota que nunca foi
construída"): linha tracejada pelo texto da fonte, a partir do ponto de partida real, com o aviso
`Approximate route` na tela. Você entrega o que o `mapista` precisa: o ponto de partida real (no Juneau, o fim da
estrada, do OSM), os pontos que o texto nomeia, com a geometria real de cada um, e o trecho da fonte, copiado,
de onde a linha sai. Nunca decalque figura sem permissão. Para o que não é rota, vale só o ofício: **bloqueio
reportado**,
com o que existe de mais próximo (a divisão de nível acima; a figura de um documento oficial, que vira
DOCUMENTO pelo `pesquisa-documentos`). Figura de documento do Estado do Alasca não é domínio público
automático: só vai à tela com permissão de uso clara, conferida e gravada (Lucas, 26/09/2026; midia.md §7.1).

## 7 · Decisões do Lucas que tocam o ofício

- **Sem título de capítulo na tela**; capítulo só na descrição (CLAUDE.md). Pedido de geometria para card
  de capítulo é engano: devolva ao `montador`.
- **Os últimos 20 s não têm voz**: são da tela final do YouTube (`canal.json › narracao.cauda_tela_final_s`).
- **MapTiler** decidida, crédito dela na tela; no Juneau, gasto liberado, com relevo só em s44 (§1). O Landsat foi só teste
  (CLAUDE.md).
- **Banco pago** (midia.md §1, §2) não é seu: serve só a B-roll genérico, na ordem Envato Elements → Motion
  Array → Storyblocks → Shutterstock, baixado na conta do Lucas, pela caça no Chrome dele que ele aprova item por
  item (§2.3, §8). Você nunca baixa nem abre o site de banco.
- **Documento do governo do Estado do Alasca e documento de imprensa** não estão no domínio público que a
  identidade.md §7 isenta de crédito (nos EUA, a obra federal é domínio público por lei, 17 U.S.C. §105; a
  estadual não tem essa regra geral: confira peça a peça). Figura, mapa ou traçado tirado deles só vai à tela
  com permissão de uso clara (domínio público comprovado, licença aberta ou autorização escrita), conferida
  e gravada (Lucas, 26/09/2026; midia.md §7.1). **Sem ela, não entra: bloqueio reportado** (§6). A decisão
  manda recriar o texto citado, não a figura; o esquema declarado de rota que nunca foi construída, o
  canal aceita (§6).
- **O estudo de 2018 da estrada de Juneau** (FHWA com o Alaska DOT&PF) **conta como estadual** (pesquisado a
  pedido do Lucas, 26/09/2026; midia.md §7.1, "O estudo de 2018"). Os mapas e figuras dele, feitos pela HDR
  para o DOT&PF, não entram sem autorização escrita do DOT&PF, nem o relevo de fundo, que não tem fonte. O
  traçado da Alt. 2B não se decalca (§6). O fim da estrada o canal já tem, do OSM (`estrada-juneau-cascade`).

## 8 · Os portões, e a quem devolver

```
node scripts/validar-contrato.mjs pauta-pesquisa out/<proj>/_pesquisa/pauta-geo.json
REGIE_MOTOR=<motor> node scripts/qc-procedencia.mjs <proj>
```

- O `qc-procedencia` e o `scripts/procedencia-reconciliar.mjs` pedem `REGIE_MOTOR`.
- O caminho que você grava é sempre **relativo ao projeto** (`_media/geo/<slug>.json`), nunca de máquina.
- Não há ledger de insumos nem seção "A ESCADA" neste canal. A devolução é a **última linha da sua
  resposta**: a cena, o degrau em que você parou e quem decide agora — `montador` (o que entra e onde),
  `regente-de-imagem` (o que a frase exige da tela), `diretor-de-arte` (se mexe no arco), o `mapista`
  (quem desenha) e o Lucas, quando for decisão pendente.
