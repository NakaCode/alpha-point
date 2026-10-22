# Levantamento: o que o canal Alpha Point acrescentou ao método de mapa, além do motor

Feito em 22/10/2026, só por leitura, para o guia de mapas (`ferramentas/guia-mapas/`). Nada do motor, de `scripts/`, de
`marca/` nem de `.claude/agents/` foi editado. Nenhuma chave foi lida: só os nomes delas (`MAPTILER_KEY`).

**Lido:** `CLAUDE.md` ("Peças da pré-v1 em uso", itens 6 e 7; "Os especialistas", `<tile-source>`; "Os portões medem";
"Tropeços conhecidos do apoio"; o que fala de MapTiler e do `maptiler-gasto.md`); `marca/identidade.md` §4.2 e §6;
`marca/agentes/mapista.md` (a roupa); `marca/tokens.css` (os tokens de mapa); o topo de `ferramentas/cdp-sem-compressao.mjs`,
`chaves-nos-portoes.mjs`, `portao-mapa.mjs`, `portao-margens.mjs` e `portao-margens-provar.mjs`; os itens 17, 36, 41, 46,
53 a 59, 64, 65, 66, 67, 76, 77, 78, 87 e 88 do `APRENDIZADOS.md`; o topo dos scripts de geometria do canal
(`out/juneau/_pesquisa/`, `out/los-angeles/_pesquisa/agua_*`, `out/prova-mapa/_pesquisa/base-landsat.py`,
`out/peru-agua/_pesquisa/geo_*`) e de `ferramentas/mesa-satelite.py`; os `maptiler-gasto.md` do vídeo 3 e do 4.

**Como ler:** a parte A é o MÉTODO em ferramenta (cada peça com o que resolve, por que serve a qualquer canal, o comando,
o que depende deste canal e o que viraria parâmetro). A parte B é o MÉTODO em regra (fontes, licenças, créditos,
conferências, tropeços). A parte C é o GOSTO do Alpha Point, que outro canal troca. A parte D é a fronteira entre os dois.
A parte E são divergências achadas na leitura. A F é o que já está registrado como "vale levar ao motor".

A régua de separação é a do `CLAUDE.md`: "se eu montasse um canal de culinária amanhã, isso continuaria verdadeiro?".
Sim → método. Não, ou só com outro valor → gosto.

---

## A. MÉTODO em ferramenta

### A.1 `ferramentas/cdp-sem-compressao.mjs` — o render 4K não cai em quadro grande

- **Resolve:** o `renderizar.mjs` (e o `quadro.mjs`) da pré-v1 caía com "a conexão com o navegador caiu" em quadro 4K cheio
  de detalhe (satélite, foto em tela cheia). Causa medida: o WebSocket embutido do Node 24 (undici) oferece
  `permessage-deflate`, o Chrome aceita, e o undici derruba a conexão ao descomprimir mensagem acima de 4 MB
  (`kDefaultMaxDecompressedSize`, fixo). O JPEG 95 4K em base64 passa disso (APRENDIZADOS 57; e o achado 27 do item 17, o PNG
  do `quadro.mjs`).
- **Como:** pré-carga do Node que troca o `WebSocket` global por uma subclasse com um dispatcher que só tira o cabeçalho
  `Sec-WebSocket-Extensions` do pedido de abertura. Nada mais do Node muda; a qualidade continua 95.
- **Por que serve a qualquer canal:** todo canal que renderiza 4K com satélite ou foto numa máquina com Node 24 bate no
  teto, e a mensagem do motor culpa o Chrome. Não tem nada de mapa nem de marca dentro.
- **Comando:**
  `node --import file:///C:/projetos/alpha-point/ferramentas/cdp-sem-compressao.mjs C:/projetos/regie-v1/src/ferramentas/renderizar.mjs <proj> --cena=<id> --4k`
  (o mesmo `--import` na frente do `quadro.mjs`; com a pré-carga das chaves junto, um `--import` para cada).
- **Depende do canal:** nada no código. Só o caminho do `--import` no comando.
- **Viraria parâmetro:** nada. No motor, o conserto certo é o `chrome.mjs` abrir o WebSocket sem compressão (ou pedir o
  quadro em pedaços); aí a pré-carga some.
- **Limite:** sem o dispatcher global do Node, não troca nada e avisa no stderr.

### A.2 `ferramentas/chaves-nos-portoes.mjs` — o portão mede o mapa que o render mostra

- **Resolve:** os portões do molde abrem a cena pelo `playwright-core` sem `window.__chaves`. A base de mapa da pré-v1
  (`src/mapa/moldes/mapa-base.html`) para antes de criar o mapa sem a chave, e o portão mede uma página parada, sem
  satélite, e dá verde (APRENDIZADOS 64: o rodapé da s03 deu "✓ 12.12:1" sobre o fundo vazio). E o `_audit-til` e o
  `qc-rodape-contraste` trocam o `requestAnimationFrame` por um que não roda, então nem com a chave o MapLibre pinta.
- **Como (o topo do arquivo, partes 1 a 6):**
  1. gancho de carga (`module.registerHooks`) no `playwright-core` (ESM e CJS); em cada `newContext`, o MESMO script do
     render (`chavesParaCena` de `src/mapa/perfis.mjs` da pré-v1), que só define `window.__chaves` numa cena
     `file:///<raiz>/out/<proj>/graphics/<cena>.html`, no topo da aba, sem opener; contexto persistente e navegador
     conectado não recebem a chave (podem ser perfil logado);
  2. confere no `DOMContentLoaded` e relê no fechamento: mapa de verdade, rAF do navegador, credencial na página,
     `__erroCena`, `__errosMapa`;
  3. conta, por página, os pedidos à MapTiler, as respostas por classe, os tiles 2xx (com e sem endereço de servidor) e
     os pedidos em curso na hora de cada foto;
  4. NÃO MEDIDO (saída 2) quando o mapa não pintou: rAF trocado, sem chave, erro da cena, resposta ≥ 400 ou falha de rede
     (mesmo vencida numa nova tentativa), nenhum tile 2xx, foto com tile em curso, página não relida;
  5. uma linha por página em `out/<proj>/_tmp/maptiler-portoes.jsonl` (só números e sim/não: a URL leva a chave e nunca se
     grava) — é a fonte do `maptiler-gasto.md`;
  6. a saída de cada processo e o começo/fim de cada rodada em `out/<proj>/_tmp/portoes-saidas.jsonl`.
  E o verbo `conferir`, que, depois da rodada, prova pelo registro que cada portão de cada cena de mapa rodou com a chave e
  com as pré-cargas do canal e nenhuma outra, e lê também as linhas do `portao-mapa` (versão 5 no rodapé, `portao_sha256`
  igual ao de hoje) e do `qc-video-avanca`. Sai 0 só sem nenhum problema; reprovação medida aparece numa lista à parte e
  não se apaga com um verde depois.
- **Por que serve a qualquer canal:** todo canal com cena de mapa da pré-v1 e os portões do molde recebe hoje verde sobre
  um mapa vazio. A lição geral (APRENDIZADOS 64): "portão que abre página com recurso de fora tem de provar que o recurso
  chegou antes de dar veredito; sem a prova, NÃO MEDIDO, nunca verde".
- **Comandos:**
  - Git Bash: `REGIE_MOTOR=C:/projetos/regie-v1 node --import=file:///C:/projetos/alpha-point/ferramentas/chaves-nos-portoes.mjs scripts/qc-cena.mjs out/<proj> --conc=3 [--forcar]`
  - PowerShell: `$env:REGIE_MOTOR='C:\projetos\regie-v1'; node --import=file:///C:/projetos/alpha-point/ferramentas/chaves-nos-portoes.mjs scripts/qc-cena.mjs out/<proj> --conc=3`
  - o mesmo `--import` na frente de qualquer portão avulso e do `portao-mapa.mjs`;
  - depois da rodada: `node ferramentas/chaves-nos-portoes.mjs conferir out/<proj> --desde="AAAA-MM-DD hh:mm:ss" [--so=s03,s05] [--rodada=<id>]` (hora de Brasília do começo).
  - Nunca no `NODE_OPTIONS` fixo da máquina; a pré-carga se acrescenta ao `NODE_OPTIONS` do próprio processo para os filhos.
- **Depende do canal:**
  - `PERFIS_URL = file:///C:/projetos/regie-v1/src/mapa/perfis.mjs` (o leitor de perfil e de chave da pré-v1) e o
    `REGIE_MOTOR` padrão;
  - a raiz do canal sai do lugar do próprio arquivo (`RAIZ`), e a cena só ganha chave dentro de `<raiz>/out/<proj>/graphics/`
    — portável se o layout `out/<proj>/graphics/` for o do motor;
  - os nomes `ALPHA_POINT_PORTOES_RODADA`/`_RAIZ` e os `Symbol.for("alpha-point.…")`;
  - o sha256 do `qc-video-avanca` do molde (`VIDEO_AVANCA`, `5b258511…`) e a régua de "cena de mapa"
    (`maptiler|mapbox|maplibre|__aguardarMapa`, a de `scripts/lib/qc-cena-gates.mjs`);
  - o host da MapTiler (`maptiler.com`) e o formato do tile (`/{z}/{x}/{y}.ext`) na contagem.
- **Viraria parâmetro:** o caminho do motor (só pelo `REGIE_MOTOR`, sem padrão cravado), o prefixo das variáveis e dos
  símbolos (o nome do canal), o padrão de host da base (para um perfil que não seja MapTiler), e a pasta do jsonl. O
  melhor destino é o motor: a chave nos portões, o rAF vivo em cena de mapa (APRENDIZADOS 64, "vale avisar").
- **Limites escritos no topo (os que importam a outro canal):** amostragem de 0,5 s herdada do `portao-mapa` (uma cena
  feita para enganar nos instantes passa); `<q>` no crédito sai NÃO MEDIDO (escrever as aspas no texto); o `qc-tamanho` do
  lote fica indefinido quando uma cena do lote sai NÃO MEDIDO por aqui; nunca rodar com `DEBUG=pw:protocol` nem trace do
  playwright (gravariam o script com a chave); só chromium; portão morto por SIGKILL perde a linha.
- **Prova:** três céticos em 03–04/10 (falhas abertas consertadas antes de valer); relatos e logs em
  `out/juneau/_tmp/art/` (`chaves-nos-portoes-relato.md`, `chaves-*.log`). Não há `-provar.mjs` próprio.

### A.3 `ferramentas/portao-mapa.mjs` — o til e o contraste do crédito em cena de mapa, com o mapa pintado

- **Resolve:** o `_audit-til` e o `qc-rodape-contraste` do molde não medem cena de mapa (rAF parado; com a pré-carga, saem
  NÃO MEDIDO). Este portão aplica a MESMA régua do molde com o rAF vivo, o mapa carregado e a chave pela pré-carga. E acha
  o crédito que o molde não acha: com filhos inline (o ano num `<span>`: no Juneau, 7 cenas saíam "sem crédito"), fora da
  faixa, em flex/grid, linha a linha (a letra apagada que a caixa unida escondia).
- **Como:** a régua do molde copiada e presa pelo sha256 do arquivo do molde (`REGUA_MOLDE`: `_audit-til.mjs` `0bc31ea8…`,
  `qc-rodape-contraste.mjs` `d3152d3d…`); se o molde mudar, sai 2 sem medir. Amostra de 0,5 em 0,5 s MAIS os instantes do
  molde; o pior de três conjuntos "no ar" (o do molde, o do molde em todas as amostras, o patamar), então nunca aprova o
  que o molde reprova. Rodapé na versão 5 (por linha), que o `conferir` exige.
- **Por que serve a qualquer canal:** a cegueira é do molde, não do canal: qualquer canal com mapa e os portões do molde
  mede o crédito sobre o fundo errado, e qualquer crédito com filhos sai "sem crédito".
- **Comando:**
  `node --import=file:///C:/projetos/alpha-point/ferramentas/chaves-nos-portoes.mjs ferramentas/portao-mapa.mjs <til|rodape> <html|pasta|out/<proj>> [--so=s03,s21] [--passo=0.5] [--piso=3] [--json]`
  (o `rodape` roda em todas as cenas, com e sem mapa: é a medida de contraste do crédito que o `qc-visual` lê.)
  Saída 0/1/2; uma linha por cena em `out/<proj>/_tmp/portao-mapa.jsonl`.
- **Depende do canal:**
  - `FAIXA_CREDITO = { y: 1880, x0: 200, x1: 1720, w: 3840, h: 2160, folga: 1 }` **cravado no código** (identidade §4.2);
  - o `hash_marca` do carimbo do `qc-cena` (a marca de hoje) e o caminho da pré-carga do canal;
  - o caminho do motor padrão (`C:/projetos/regie-v1`).
- **Viraria parâmetro:** a faixa do crédito, lida dos tokens como o `portao-margens` já faz (`--faixa-credito-y`,
  `--credito-x`, `--credito-x-fim`, `--palco-*`). O piso (`--piso=3`) já é parâmetro, mas o `conferir` só aceita 3.
- **Limites (topo, "Limites"):** texto claro sobre fundo muito claro mede contra o pixel mais escuro (pode ser sombra de
  relevo); a amostragem; o `<q>`; o falso positivo de crédito que entra de baixo ou por clip-path (1,00); o rótulo que o
  MapLibre desenha no canvas não é DOM e ninguém mede; cada instante novo pede tile e conta no `maptiler-gasto.md`.
- **Lição de processo que veio com ele (APRENDIZADOS 65):** cinco rodadas de cético acharam sempre mais um caso montado
  para enganar (sombra fechada, iframe, fonte de métricas zeradas) sem mudar a medida de nenhuma cena real; ~10 h de
  agentes. Regra: antes de mandar um cético atacar um portão, dizer o que conta como defeito (o que um agente do canal
  escreveria sem querer); o caso adversarial vira limite escrito.

### A.4 `ferramentas/portao-margens.mjs` (+ `portao-margens-provar.mjs`) — a área segura sob a câmera, sem gastar tile

- **Resolve:** nem os portões nem o olho pegavam o texto que a câmera leva para fora da área segura. No vídeo 2, 49 cenas
  passaram nos portões e uma varredura achou 17 casos reais (rótulo cortado na borda durante o voo, pílula na faixa do
  crédito, acima da margem do topo); 10 das 23 cenas de mapa voltaram por margem (APRENDIZADOS 58 e 78; M6).
- **Como:** mede a cada 0,1 s, do primeiro ao último quadro, na tela, sob a câmera (`getBoundingClientRect`, que já inclui
  câmera, giro e rotação; texto pelo `Range`), toda pílula, rótulo, cartão, foto, borda de papel e fita, contra a margem,
  a faixa do crédito, o fim do crédito e o canto reservado. Sem tolerância (só o meio pixel). Regras de exceção escritas:
  a sombra, a PASSAGEM do objeto que entra ou sai (> 60 px/s, cruzando a borda ou no pouso/saída), o crédito.
  **Cena de mapa sem tile e sem pré-carga:** chave falsa, todo pedido http(s) respondido no próprio PC (tile cinza feito na
  hora, o resto cortado), DNS do Chrome desligado (`--host-resolver-rules`). A câmera e o `map.project()` são os do render
  porque não dependem do satélite (provado a ±1–3 px contra o clipe 4K em 5 cenas). Com a pré-carga das chaves, recusa (2).
- **Por que serve a qualquer canal:** todo canal com câmera que anda sobre a cena (mapa, mesa, push-in) e com área segura
  para legenda e barra do player. E o truque "mapa sem satélite, câmera igual" mede posição de DOM sobre mapa pago a custo
  zero, quantas vezes for preciso, ANTES do render de prova.
- **Comando:** `node ferramentas/portao-margens.mjs <html|pasta|out/<proj>…> [--so=s07,s15] [--passo=0.1] [--json] [--registro=<arq.jsonl>|--sem-registro]`
  → `out/<proj>/_tmp/portao-margens.jsonl`. Prova: `node ferramentas/portao-margens-provar.mjs [--so=A,B,C,D,E]` (A
  sintéticas por regra; B a rede presa, inclusive num Worker; C as cenas do vídeo 2 que reprovaram, na versão de então,
  têm de reprovar; D as 48 aprovadas têm de passar; E a borda da pílula no DOM contra o quadro do clipe 4K).
- **Depende do canal:** os limites vêm todos do `marca/tokens.css` (`--palco-largura/altura`, `--safe-x`, `--safe-y`,
  `--faixa-credito-y`, `--credito-x`, `--credito-x-fim`, `--canto-reservado`) — token faltando é NÃO MEDIDO. Também: os
  nomes de classe `papel|pagina|folha|fita|sombra`, os atributos `data-qc-margem` e `data-qc-papel="credito"`, a regra de
  "texto todo de crédito"; a prova C/D/E está presa às cenas e commits do vídeo 2 (`los-angeles`). O motor padrão
  `C:/projetos/regie-v1`.
- **Viraria parâmetro:** os nomes de classe que marcam papel/fita/sombra (ou só o atributo `data-qc-margem`); o limiar da
  passagem (60 px/s); a lista de hosts e o formato dos tiles respondidos (hoje MapTiler satélite e relevo); a prova C/D/E
  vira "o banco de cenas do seu canal".
- **Limites:** não mede camada do MapLibre (canvas: território, linha, rota); não mede pseudo-elemento fora da caixa do
  dono; amostra de 0,1 s (excesso de 1–2 quadros passa); **cena com relevo 3D sai sempre NÃO MEDIDO** (o relevo daqui é
  plano: na s44 do Juneau a pílula numa montanha ficou 15–19 px mais alta no clipe) — a margem dela se confere no clipe de
  prova. Avisa, sem reprovar, crédito com 3+ linhas ou última linha de uma palavra só.

### A.5 Os scripts de geometria que o canal escreveu (método, presos a um vídeo)

Todos gravam pelo `gravarGeo` da pré-v1 (`src/geo/comum.mjs`): o cache da máquina, `out/<proj>/_media/geo/<slug>.{json,js}` e
o item do `pauta-geo.json`, com fonte, licença e procedência. O que é do canal é o caminho, a janela e o slug, cravados.

| Peça | O que resolve | Por que serve a qualquer canal | O que viraria parâmetro |
|---|---|---|---|
| `out/juneau/_pesquisa/cidades-ne.mjs [--gravar]` | Ponto de cidade do **Natural Earth** (`ne_10m_populated_places_simple`, domínio público) escolhido por `ne_id` (nome, país e estado conferidos), testado terra/água contra o polígono NE já recortado; se cai na água, registra o ponto de terra mais próximo como DESLOCAMENTO DECLARADO, sem apagar o original. A pré-v1 baixa a camada mas não grava ponto (o `geo-recorte-bbox` ignora Point). | Ponto de cidade sem crédito na tela (o caminho da pré-v1, `geo-lugar-osm`, é ODbL e põe crédito). APRENDIZADOS 17, achado 20: "um `geo-pontos-ne` no motor serviria a qualquer canal". | lista de `ne_id`, o polígono do teste terra/água, o `<proj>` |
| `out/juneau/_pesquisa/estrada-juneau-cascade.mjs <saida-dump.json> [--dump=…]` → `geo-osm-rota --in=… --tol=0` | Rota do **OSM** "de A até B": os ways de uma relation dentro da janela viram grafo (vértice = coordenada) e o caminho mais curto vai do ponto A ao B. O `geo-osm-rota` sozinho costurou pelas pontas com 21 órfãos (pista dupla, rotatória). `--dump=` refaz sem rede. | Toda rota rodoviária com pista dupla ou rotatória quebra a costura pelas pontas. Achado 23 do item 17: "um modo 'de A até B' na ferramenta". | a relation, a janela (bbox) da consulta Overpass, os pontos A e B, o `<proj>` |
| `out/juneau/_pesquisa/geo-balsa-lynn-canal.mjs` | Rota em **várias relations** com nó comum: os ways entram juntos, sem a relation no dump (o `derivarRota` só lê a 1ª relation), e a costura `--tol=0` os cola no nó comum (146,46 km, 0 órfãos). Conferência sem rede contra os nós de terminal, o GNIS e a costa do OSM. | Balsa, trilha, rodovia por estado vêm partidas no OSM (APRENDIZADOS 55: "um modo de várias relations no `geo-osm-rota`"). | os ids dos ways/relations, os pontos de conferência |
| `out/juneau/_pesquisa/ponto-fim-da-estrada.mjs [--gravar]` | Lugar que nem NE nem OSM nomeiam (Cascade Point): o ponto é a ponta da geometria real (a estrada), e o nome vem do roteiro, com a decisão registrada. Recusa se a ponta não é o último ponto. | Todo roteiro nomeia lugar que nenhuma base tem; a regra "tirar o ponto da geometria real e declarar de onde vem o nome" é geral. | o arquivo da linha, qual ponta, o nome |
| `out/los-angeles/_pesquisa/agua_osm_construir.py` + `agua_osm_gravar.mjs` + `agua_encaixe*.py` | **A água escura**: os *water polygons* do osmdata (ODbL) recortados ao lugar, com quebra-mar e píer tirados da água (Overpass `man_made`), simplificados com topologia (teto de 2 m), pintados opacos logo acima do satélite. Esconde as emendas do mosaico de satélite na água. O encaixe se mede contra o clipe 4K já renderizado (perfis perpendiculares à costa), **sem pedir nada à MapTiler**. | Todo satélite em mosaico mostra emenda na água; a técnica (camada de água do OSM + medida de encaixe nos clipes existentes) é geral. O crédito do OSM já está na linha da MapTiler. | a caixa, a folga do muro, a tolerância, o tom (o tom é gosto: `--agua-base`) |
| `out/prova-mapa/_pesquisa/base-landsat.py` | Base de **Landsat** (USGS, domínio público) pela API do Planetary Computer, sem conta, já em Web Mercator, de duas cenas escolhidas por nuvem e ângulo do sol; a cena lê `window.__BASE_CANAL` (fonte `image` do MapLibre). Para quando o recorte de Landsat sai: depois de qualquer `preparar-cena`, regrava o `_creditos-mapa.md` (que a pré-v1 escreveria com a EOX). | Satélite sem chave e sem crédito na tela não cabe nos perfis da pré-v1 (APRENDIZADOS 17, achados 24 e 26). E é a base da **prova de cor sem pagar** (APRENDIZADOS 56): pergunta de cor ou legibilidade se responde sobre Landsat, com a legenda "a base não é a do vídeo", e só a cena final vai à base paga. | a janela, as cenas/datas, o tamanho |
| `out/peru-agua/_pesquisa/geo_http.py` e `geo_overpass.py` | Cliente de rede do pesquisador: User-Agent do canal com o contato, **um pedido por vez**, espera mínima (1,5 s no GET; 10 s no Overpass), log de cada pedido; recusa (403/418/429/504/captcha) sai 3 **sem repetir**. | A etiqueta de API (Wikimedia, Overpass) e a regra anti-robô valem para todo canal; o log prova o que foi pedido. | o UA e o contato, as esperas, a pasta do log |
| `out/peru-agua/_pesquisa/geo_vertentes.py` | Vertentes e divisória continental de **uma fonte só** (HydroBASINS v1c nível 6): segue `NEXT_DOWN` até a terminal, decide a vertente pela terminal, une, recorta pelo contorno NE do país (o mesmo arquivo da cena), `coverage_simplify` com o contorno intacto (as vertentes fecham sem vão), divisória = arestas compartilhadas, área exata (Lambert de área igual). | Bacia, vertente e divisor aparecem em qualquer vídeo de geografia; "nada desenhado, uma fonte só, a mesma linha no polígono e no traço" é método. | as regras de terminal (longitudes), a tolerância, o país |
| `out/peru-agua/_pesquisa/geo_ne.py`, `geo_rios.py`, `geo_osm_camadas.py`, `geo_canal.py`, `geo_pauta.py`, `geo-gravar.mjs` | NE admin-1 e mar; rios do OSM costurados por `linemerge` e recortados pela vertente, rios do NE no outro lado; polígonos de relation do OSM por `polygonize` (outer − inner); canal/túnel pelo grafo do OSM (Dijkstra); o `pauta-geo.json` enriquecido com cena, fidelidade e crédito na tela; um gravador genérico (`geo-gravar.mjs <fc.json> <origem.json> <slug> [cena]`). | O `geo-gravar.mjs` é quase genérico (só o `proj` cravado): grava qualquer FeatureCollection derivada com procedência. | o `<proj>` (em `geo-gravar.mjs` e `geo_pauta.py`) |
| `out/peru-agua/_pesquisa/geo_crista.py` | **Tentativa rejeitada** (nada gravado): três critérios de crista sobre o Copernicus DEM deram três linhas diferentes. Fica como registro. | A lição: linha derivada de relevo por critério só entra se critérios independentes concordam. | — |
| `ferramentas/mesa-satelite.py` | Não é mapa: o still de fundo das cenas sem mapa, de satélite **público** (Landsat/NASA), escurecido e desfocado pela cadeia do token, com ganho de exposição e guarda de contraste do crédito (≥ 6:1 na faixa). Recusa entrada que pede crédito (Sentinel, MapTiler, OSM, quadro de render). | O padrão "imagem pública com procedência e guarda do crédito antes da cena" é geral; o tratamento é gosto. | a cadeia e o alvo de luma (tokens), o piso do crédito |

---

## B. MÉTODO em regra (fontes, licenças, créditos, conferências, tropeços)

### B.1 Fontes e licenças de geometria e base

- **Geometria real, nunca desenhada.** Vem de `out/<proj>/_media/geo/`, registrada no `pauta-geo.json` com fonte e
  licença; o `preparar-cena` recusa arquivo sem elas. Faltou geometria: pede-se à `pesquisa-geo` e se reporta bloqueio
  (roupa §10). Lugar sem nome nas bases: o ponto sai da geometria real e o nome vem do roteiro, declarado (A.5).
- **Natural Earth** (domínio público, nada na tela): fronteiras, costas, rios e lagos do 1:10M, pontos de cidade.
  Tropeços: o NE 1:10M **não tem** rios regionais (Taku, Chilkat, Knik, Matanuska) — vão do OSM; ponto do NE pode cair na
  água da costa simplificada (Cascade Point a 236 m) → declarar o deslocamento; as Aleutas além de 180° saem do recorte;
  `geo-recorte-bbox --nome` grava o mesmo nome em TODAS as features (o Canadá saiu "Sudeste do Alasca") → nunca `--nome`;
  camada sem `name` no topo (a de rios) não herda a licença → passar `--fonte`, `--licenca`, `--fonte-url`.
- **OpenStreetMap** (ODbL): rio, rota, ponto e água. "© OpenStreetMap contributors" na tela da cena (coberto pela linha da
  MapTiler quando ela está; sozinho numa cena sem MapTiler) e `openstreetmap.org/copyright` na descrição. Overpass: 504 é
  carga → esperar e repetir espaçado (um `around` com linha longa dá 504; com `(bbox)(around:…)` responde); 403/429
  persistente/captcha não se contorna; um pedido por vez. `geo-osm-rota`: só uma relation e costura pelas pontas
  (A.5). Quando o Overpass está fora, a geometria do Nominatim (`polygon_geojson`) serviu provisoriamente, registrada
  como ODbL, e se refez pelo caminho certo depois (item 17, achado 22).
- **HydroSHEDS / HydroBASINS** (licença própria; o crédito vai na descrição com o texto do Exhibit B, nada na tela):
  rios a 30 m e bacias. **O host de download (`data.hydrosheds.org`) veta robô** ("Disallow: /") — o arquivo vem pelo
  navegador do dono, e o sha256 se confere contra o que estiver no disco (APRENDIZADOS 87).
- **Mapa antigo digitalizado como geometria** (identidade §6): só domínio público provado, georreferenciado por pontos de
  controle independentes (ou pela própria fonte, como o USGS), com a incerteza **medida e declarada** no `pauta-geo`; a
  câmera nunca se aproxima além do que a incerteza sustenta; o que a folha não fecha não se fecha (linha aberta). Tropeço
  (APRENDIZADOS 77): a folha do USGS pode errar 50–250 m mesmo com a georreferência do USGS — conferir cada folha num
  ponto fixo de hoje (obra que existe, curvas de nível contra o 3DEP, grade de ruas); desconfiar de linha paralela ao que
  o satélite mostra.
- **Rota nunca construída** (identidade §6): tracejada, saída do TEXTO da fonte e do ponto de partida real, nunca decalcada
  de figura sem permissão, com `Approximate route` na tela todo o tempo da linha.
- **Fronteira disputada:** tracejada, rótulo `DISPUTED`, a linha de controle de fato, nunca a reivindicação de um lado.
- **País no mapa: nome escrito, sem bandeira** — método de licença, não gosto: o Canadian Heritage protege a bandeira (e as
  das províncias) "against unauthorized use for commercial purposes", inclusive em uso educativo.
- **Bases com licença lida** (identidade §6, 27/09): Blue Marble, Landsat, Sentinel-2 (crédito obrigatório
  `Contains modified Copernicus Sentinel data <ano>`), MapTiler (abaixo), Google Earth Timelapse (CC BY 4.0, versão sem
  rótulo, crédito na tela), Google Earth Studio (crédito na tela a cena inteira, sem repintar, conta e formulário do
  dono), relevo Copernicus DEM / 3DEP / GEBCO / ETOPO (SRTM e NASADEM param em 60°N), GIBS/Worldview (sem as camadas de
  rótulo e borda, que são Esri e OSM), NAIP, GOES, Himawari; geoBoundaries, TIGER, StatCan, NRCan, LSIB (servidor recusa
  robô → navegador com o sim do dono), Marine Regions. **Não servem:** GADM, UN SALB, GISCO (não comerciais), ACLED, Esri
  World Imagery, Mapbox (vídeo só com direito comprado), **EOX de 2018 a 2025** (CC BY-NC-SA; só a de 2016 é livre e é a
  que a pré-v1 usa — o `perfis.json` da pré-v1 ainda escreve "2016 & 2017"; APRENDIZADOS 41). Antes do primeiro uso num
  vídeo, a página de termos se relê.
- **Robots e portas de programa** (`CLAUDE.md`, "Tropeços"; APRENDIZADOS 66, 67, 87): ler o `robots.txt` do host de cada
  pedido (página, API, download, tiles), num comando separado, antes do primeiro pedido; a recusa vale para o servidor
  inteiro, em qualquer caminho (página, API, feed); quem pesquisa em paralelo procura nos registros dos outros agentes se
  o servidor já recusou. A API oficial (NARA v2, MediaWiki) é a porta que o acervo abre para programas, com User-Agent
  com contato e um pedido por vez.

### B.2 MapTiler: licença, crédito e gasto

- **Licença** (Termos Cloud, "Limited Videos"; `docs/CREDITO-DE-MAPA.md` da pré-v1): o plano Flex cobre vídeo só até 100
  mil inscritos; depois, licença custom. O plano pago dispensa o logo, **não o crédito**.
- **Crédito na tela:** `© MapTiler © OpenStreetMap contributors`, **inteiro no primeiro quadro em que o mapa aparece até o
  último** (sem o fade de entrada dos outros créditos), fora da câmera. Descrição ou créditos finais sozinhos não bastam.
  A regra "zero crédito de mapa na tela" do Top10 (ARTE-104) **não vale** para quem usa MapTiler.
- **Crédito na descrição:** `Mapas: © MapTiler (https://www.maptiler.com/copyright/) · © OpenStreetMap contributors — Open
  Database License (https://www.openstreetmap.org/copyright)`; conferir que o `_creditos-mapa.md` do `preparar-cena` diz o mesmo.
- **Marcação para o portão:** `data-qc-papel="credito" data-qc-credito="mapa"` **no próprio elemento da linha do mapa**
  (o portão aceita num ancestral pelo `closest`): marcado o contêiner comum, a linha da foto passa no piso do mapa (40) e
  é verde falso (medido em 07/10).
- **A chave** (`MAPTILER_KEY`) só pelo leitor de chaves da pré-v1 (`src/lib/chaves.mjs`), nunca no HTML, nunca impressa.
- **O gasto é por pedido de tile, e render pede muitos.** Método do canal:
  - um ok do dono por vídeo, com o escopo (que cenas, se há relevo 3D), registrado na identidade §6 e citado na tarefa;
  - `out/<proj>/_pesquisa/maptiler-gasto.md`: a liberação citada no topo e uma tabela "quando (Brasília) · rodada ·
    pedidos · notas", com uma linha **antes** e uma **depois** de cada render de mapa e de cada rodada de portão com a
    pré-carga; os pedidos de portão vêm da soma de `pedidos_maptiler` das linhas novas do `_tmp/maptiler-portoes.jsonl`
    (o número da linha antes e depois); o render 4K fica "não contado" (não há contagem local); o painel atrasa horas e
    pode contar o dia em UTC;
  - o que não gasta: `portao-margens` (sem tile), a prova de cor sobre Landsat, a medida de encaixe da água nos clipes já
    feitos, o render pulado pelo carimbo `graphics/<id>.mp4.de-html` (que confere o HTML e a resolução). Nunca `--forcar`
    sem necessidade. Ordem de custo: margens (grátis) → portões com pré-carga → render de prova.
  - **Ordem de grandeza medida** (Peru, 22/10): uma rodada de portões de uma cena de mapa custou de ~200 a ~4.800 pedidos
    (`qc-cena` + `til` + `rodape`; relevo ~2,4×); 9 cenas, ~23 mil pedidos numa rodada.

### B.3 Conferências (o que se mede, e em que ordem)

1. **Antes do render, sem tile:** `portao-margens` em toda cena entregue, até sair 0 (cena com relevo: 2 por desenho, a
   margem vai ao clipe de prova). `qc-hex` e `qc-src-existe` no HTML.
2. **Portões com a pré-carga das chaves** (`qc-cena`, `portao-mapa til` e `rodape`), anotando o gasto; depois, o
   `conferir --desde=…` tem de sair 0. Sem a pré-carga, portão de cena de mapa não vale (mede página vazia).
3. **Render de prova** com `--4k` e a pré-carga `cdp-sem-compressao`; o clipe só vale se o carimbo termina em `2160p`.
   Quadros saem do MP4 pelo `ffmpeg -ss <t> -i … -frames:v 1` (o `quadro.mjs` não fotografa satélite nesta máquina sem a
   pré-carga). Olhar quadro é olhar, não é portão.
4. **O que fica com o olho** (não há portão): o que é canvas do MapLibre (território, linha, rota, rótulo do mapa), a
   legibilidade das linhas ("um espectador que nunca viu o lugar sabe dizer o que é cada linha?", APRENDIZADOS 54), o
   rótulo sobre linha, o encaixe da geometria no satélite, a margem da cena com relevo. Os portões do Top10 para mapa
   (`qc-mapa-movimento`, `qc-mapa-borda`, `qc-rotulo-territorio`, `qc-base-unica`, `qc-chave-mapa`, `mapa-vivo`) não
   vieram: "olhado, portão não veio".
5. **Conferir no meio e no fim de cada movimento, não só no primeiro quadro** (APRENDIZADOS 58): a câmera do RIG tem zoom
   contínuo; o que nasce rente à margem sai dela. E **o conserto cria o defeito ao lado** (APRENDIZADOS 59): a
   reconferência procura também o defeito novo perto do lugar mexido, e a largura de pílula se mede no DOM depois de
   `document.fonts.ready`, não por conta.
6. **Portão que reprova em massa com a mesma mensagem é leitura, não defeito** (APRENDIZADOS 76): prova-se o fato à parte
   antes de mandar consertar 23 cenas.
7. **Papel declarado tem de casar com o papel do portão** (APRENDIZADOS 88): o portão mede o que se declara (fala citada
   sobre o mapa → `heroi`, não `rotulo`).
8. **Limitação do portão** (a régua do molde que a marca não tem) vai ao dono cena por cena, com o trecho, e a exceção fica
   presa ao sha1 do HTML (`out/<proj>/qc/_excecoes-portao.json`).

### B.4 Tropeços conhecidos (estado de ferramenta, nesta máquina e na pré-v1 `7ab9543`)

- `renderizar.mjs` sem `--4k` grava cena `4k-native` em 1080p e o carimbo guarda isso: render de novo, e tile pago de novo.
- Render e `quadro.mjs` sem `cdp-sem-compressao` caem em quadro > 4 MB (A.1).
- Portão sem `chaves-nos-portoes` mede mapa vazio; com ela, `_audit-til` e `qc-rodape-contraste` saem NÃO MEDIDO em cena de
  mapa (a medida é o `portao-mapa`).
- O molde `mapa-base.html` escreve `var DUR = CENA.duracao`, e o `qc-janela` só lê número literal → escrever
  `var DUR = 12.3;` (APRENDIZADOS 54 e 76).
- O molde não aplica tratamento à base e tem o crédito cravado (46 px em x = 154); a cor do território vem em hex
  (`#E8B04B`). **O MapLibre não lê `var(--…)`**: a cena lê os tokens por `getComputedStyle(document.documentElement)` (a
  função `tok()` do exemplar `out/prova-mapa/graphics/landsat-juneau.html`), nenhum hex fora do fallback.
- Nunca `--disable-gpu` no Chrome (a rasterização por software cortava pedaços da cena); log com SwiftShader/llvmpipe vai
  ao relato (APRENDIZADOS 36, item 10b).
- `_creditos-mapa.md` só conhece os perfis da pré-v1: com base própria, escreve o crédito da EOX (achado 26).
- Relevo (`terrain-rgb-v2`) e câmera 3D: o `portao-margens` não os mede; a margem com relevo vai ao clipe.
- `qc-pais-bandeira` só lê país em português; e o canal não usa bandeira no mapa.
- `import()` de caminho absoluto no Windows precisa de `file:///` (`ERR_UNSUPPORTED_ESM_URL_SCHEME`).
- Os portões querem alvos diferentes (`qc-src-existe`, `qc-hex`, `qc-contrato`, `qc-fora-do-quadro`: `out/<proj>/graphics`
  ou o HTML) e precisam de `REGIE_MOTOR` na mesma chamada; "uso:", ENOENT ou `MOTOR_SEM_ARQUIVO` é uso errado, não NÃO
  MEDIDO nem reprovação.
- `jq`, `turf`, `mapshaper`, `identify` e `pdftoppm` não existem nesta máquina (os scripts de geo do canal usam Python com
  shapely e numpy).
- Textura de fundo num `::after` pinta por cima da cena (APRENDIZADOS 53): luz e grão vão como primeira camada.
- A cena de mapa de prova pode esmagar o PC: não renderizar com caça ou linha do tempo rodando.

---

## C. GOSTO do Alpha Point (outro canal troca os valores)

Tudo abaixo mora em `marca/identidade.md` §2, §4 e §6 e em `marca/tokens.css`. O guia deve tratar como **exemplo de um
canal**, com a regra de forma ("a cena lê a cor do token") como método e o valor como gosto.

- **Tratamento da base de satélite:** do vídeo 2 em diante, `"raster-brightness-max": 0.92, "raster-saturation": 0,
  "raster-contrast": 0.25` (a opção "C, vivo", 09/10); no Juneau, brilho 65 % e saturação 70 %. Sem véu, scrim nem vinheta.
- **Água escura:** `--agua-base: #00050c` (medido sobre o tratamento C); antes `#061416`.
- **Paleta por papéis no mapa:** protagonista `--destaque` `#F5A524` (território a 85 %, ou a 40 % quando há contexto
  pintado; contorno `--tinta` 6 px); contraparte `--contraparte` (território a 35 %; também a cor de estrada/rota/malha
  não protagonista, `--rede-cor`); contexto `--contexto-2` azul `#4575EE` (o outro lado da fronteira internacional),
  `--contexto-3` lavanda `#BAACF6`, `--contexto-1` violeta `#694C8B`, todos a 25 %; `--tensao` para conflito; teto de 3
  matizes; vermelho contra azul como dois lados é proibido; cinza não se usa em linha de mapa.
- **Fronteira:** branco a 70 %, 5 px, sobre contorno `#0B0F14` a 60 %, 12 px (`--fronteira-*`). Malha 11/24 px, estrada
  protagonista 14/26 px (a s03 de referência).
- **Pílula de rótulo:** `--rotulo` (`#0B0F14` a 88 %), cantos 12 px, respiro 24 × 40, Inter 700 a 128 px (teto 160), até
  3 palavras (4 em nome próprio); país em CAIXA ALTA `+0.04em`, cidade/rio em caixa normal.
- **Legenda das cores:** caixa `--rotulo` discreta no canto de cima, letra 84 px (`--fs-eixo`), cada item entra com a sua
  linha; conta como 1 elemento.
- **O anel** (assinatura): 56 px, traço 10 px em `--destaque`, pulso 1 → 1,8 e opacidade 1 → 0 em 1,2 s, duas vezes. Nada
  de pino.
- **Crédito:** 56 px (76 no Juneau), Inter 500, `--sec` sobre pílula `--rotulo`, de x 200 até antes de x 1720, abaixo de
  y 1880; longo quebra em duas linhas e nunca encolhe.
- **Área segura (§4.2):** margem 200 px nas laterais e 160 no topo; canto reservado 400 × 400 no inferior direito
  (marca-d'água do YouTube); teto de 6 elementos simultâneos (alvo 4–5); até 3 blocos de texto; um herói por cena; texto
  no ar ≥ 2,0 s.
- **Movimento:** viagem de mapa de 1,5 a 3 s, cúbica; mapa seguido de mapa é uma viagem só; rótulo entra em 300 ms;
  território preenche em 500 ms.
- **Grafia:** inglês dos EUA, AP Stylebook, imperial primeiro (`about 43 miles`, métrico entre parênteses).
- **Escolhas editoriais:** "mais mapa, quando a fala pede" (lugar, rota, distância e território vão a mapa antes de B-roll;
  nunca mapa forçado); relevo 3D só quando a frase argumenta com a vertical; sem título de capítulo na tela; a s03 do
  Juneau como cena de referência.

---

## D. Onde gosto e método se encostam (o guia deve separar assim)

| Regra do canal | O núcleo de MÉTODO (vale para todos) | O valor de GOSTO (do Alpha Point) |
|---|---|---|
| "A fronteira é a única linha branca" | Tipos de linha (fronteira, estrada, rota) têm de se distinguir sem conhecer o lugar; uma legenda ou o nome na primeira vez; o rótulo de uma linha só entra com a linha na tela (APRENDIZADOS 54). | branco para fronteira, `--contraparte` para rede |
| Contorno escuro sob a divisa | Linha clara some sobre neve/gelo (1,5:1 medido): toda linha precisa de contraste sobre a base mais clara do vídeo. | `#0B0F14` a 60 %, 12 px |
| Território da contraparte a 35 % | Linha dentro de um território da mesma cor some se o preenchimento é forte (APRENDIZADOS 56). | 35 %, 85 %, 25 % |
| Nenhum rótulo sobre linha | A geografia não se move; o rótulo muda de lugar. | — (é método puro) |
| Crédito de mapa inteiro do 1º ao último quadro | Exigência da licença da MapTiler. | o tamanho e o lugar da faixa |
| Água escura do OSM | Esconder emenda de mosaico sem inventar geografia, com o encaixe medido. | o tom `--agua-base` |
| Área segura | Medir sob a câmera, em todo instante, antes do render. | 200/160/1880/1720/400 |
| Território sem nome não leva tinta | O nome identifica; cor sem nome é ruído. | — |
| Cor de contexto pela vizinhança de todos os mapas do vídeo | A cor segue o território no vídeo inteiro, decidida pela vizinhança e visibilidade medida, nunca pela ordem da fala. | azul/lavanda/violeta |

---

## E. Divergências achadas na leitura (não corrigidas: `marca/` não se edita nesta tarefa)

1. **A roupa do mapista está atrás da identidade no tratamento da base.** `marca/agentes/mapista.md` §3 manda "brilho a
   65 %, saturação a 70 %" e diz que é "DECISÃO DO LUCAS PENDENTE"; o §8 lista "o tratamento de 65 % e 70 %" como o que o
   exemplar já faz. A identidade §6 decidiu em 09/10/2026 o tratamento C (92 %, saturação 0, contraste +25 %) do vídeo 2 em
   diante. É o caso do APRENDIZADOS 46 (decisão copiada que envelhece).
2. **A roupa do mapista diz que o gasto do vídeo 3 em diante é "DECISÃO DO LUCAS PENDENTE"** (§1); o `CLAUDE.md` e a
   identidade §6 registram a liberação do vídeo 3 (15/10, sem relevo) e do 4 (21/10, com relevo quando necessário).
3. **O exemplar `out/prova-mapa/graphics/landsat-juneau.html`** que a roupa manda ler tem crédito a 76 px e o tratamento de
   65/70: serve para `tok()`, pílula, anel e contorno, não para o valor do tratamento nem o tamanho do crédito.
4. **`portao-mapa.mjs` crava a faixa do crédito** (`FAIXA_CREDITO`, 1880/200/1720) enquanto o `portao-margens.mjs` lê os
   mesmos limites do `tokens.css`. Se a marca mudar a faixa, os dois divergem.

---

## F. O que o canal já registrou como "vale levar ao motor" (mapa e render)

- a chave da base nos portões, o rAF vivo em cena de mapa e o achador de crédito com filhos (APRENDIZADOS 64);
- o WebSocket do `chrome.mjs` sem compressão, ou o quadro em pedaços (57; achado 27);
- `var DUR = <número>` no molde e o `qc-janela` lendo `CENA.duracao` (54, 76);
- o molde de mapa lendo tratamento e crédito dos tokens, e sem hex cravado (achado 25; item 36, 10a);
- um perfil de base "imagem local" (Landsat/NASA sem chave) e o `_creditos-mapa.md` que o conheça (achados 24 e 26);
- `geo-pontos-ne` (achado 20); `geo-osm-rota` "de A até B" (achado 23) e com várias relations (55); `geo-recorte-bbox`
  sem `--nome` em todas as features e herdando a licença de camada sem `name` (achados 16 e 21);
- o RIG expor a escala máxima da cena, para a margem sob a câmera (58);
- o crédito da EOX corrigido para "2016" e o motor nunca oferecer EOX de outro ano (41);
- nunca `--disable-gpu` (36, 10b).
