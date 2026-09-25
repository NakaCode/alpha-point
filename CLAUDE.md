# Alpha Point — canal da Régie

**Você está na pasta de um canal**, não no motor. O motor — o framework que criou
este canal — está em `C:\projetos\regie`, no repositório `top10-company/regie`. Esse caminho é
de quando o canal nasceu: se ele não existir mais, pergunte à pessoa onde está o clone do
regie antes de rodar qualquer comando, e atualize `motor.caminho` no `canal.json`.

## Quem está do outro lado

Lucas Rosa, o dono deste canal. Pode não ser pessoa técnica: trate git, banco e linha
de comando como coisas que você opera POR ela, explicando em português claro o que
está fazendo. Não devolva comando para ela digitar — rode e conte o que aconteceu.

## O que você pode, e o que não pode

- **Pode e deve:** criar e editar qualquer coisa nesta pasta — roteiros, prompts,
  scripts, anotações, ferramentas do nicho — e commitar e dar push no repositório
  DESTE canal. O canal cresce com o que vocês constroem aqui; esse é o ponto.
- **Não pode:** alterar o motor. Nada em `C:\projetos\regie` é para editar nem commitar: ele é
  mantido por Lucas e Mateus e compartilhado por todos os canais.
- Se algo que você construiu serviria a QUALQUER canal, registre em `APRENDIZADOS.md`
  — o problema, o que resolveu, por que serviria a outros — e diga à pessoa que vale
  avisar o Lucas. A régua: "se eu montasse um canal de culinária amanhã, isso
  continuaria verdadeiro?"

## Como rodar o motor

```
node C:\projetos\regie\bin\regie <verbo>
```

Sempre de dentro desta pasta: o banco é `db/canal.db`, relativo ao diretório atual.
Verbos: `doctor` (confere tudo, sem custo), `graph` (a linha), `open <slug> [título]`
(começa um vídeo), `queue` (o que está parado, e há quanto tempo),
`advance <slug> [gatilho]` (move pela linha), `drive-preparar <slug>` (liga as entregas).

No Windows, se `npm` responder que "npm.ps1 não pode ser carregado", use `npm.cmd`.
Não altere a política de execução do PowerShell da pessoa para contornar isso.

## Versão do motor, e como atualizar

Este canal nasceu com a Régie antes da primeira versão marcada (commit `ffb3ec0`) e foi
atualizado para a **v0.1.0** em 23/09/2026, com `regie init`. A versão instalada agora:
`node C:\projetos\regie\bin\regie version`.

O motor é clonado numa VERSÃO marcada, não na ponta do desenvolvimento — o que Lucas e
Mateus mudarem no meio do caminho não cai no trabalho da pessoa. Quando eles avisarem de
versão nova (por exemplo v0.2.0), faça por ela:

```
git -C C:\projetos\regie fetch --tags
git -C C:\projetos\regie checkout v0.2.0
```

Depois, dentro desta pasta: `node C:\projetos\regie\bin\regie init` (atualiza a linha de produção no banco
sem perder produção nem histórico) e `node C:\projetos\regie\bin\regie doctor`. Nunca atualize no meio de uma
entrega sem avisar a pessoa.

## O que a Régie faz — e o que ainda não faz

A linha começa num vídeo **já editado** (o passo `ingest` transcreve o master) e
entrega a camada visual como XML de 5 camadas. Não gera vídeo do zero. E não há
automação que rode os passos sozinha: quem faz o trabalho de cada passo é você,
junto com a pessoa; a Régie guarda estado, ordem e histórico. Não prometa mais que isso.

**Na v0.1.0, as estações determinísticas continuam vazias** (a pré-v1 tem código para elas: veja "Peças da pré-v1 em uso"). `ingest` (transcrever), `render`
(Chrome + ffmpeg) e `finalize` (o XML de 5 camadas) não têm ofício nem código. Transcrição, render e
XML são trabalho que o canal faz aqui, até o motor os ter (`APRENDIZADOS.md` item 9). E nada na Régie
produz o master. O deste canal nasce assim:

1. pauta;
2. pesquisa com fontes;
3. roteiro em inglês (`marca/voz.md`);
4. narração: ElevenLabs, modelo eleven_v3 (decidido pelo Lucas em 24/09/2026; `canal.json` › `narracao`).
   - **A voz** (escolhida pelo Lucas em 24/09/2026): "Alpha Point - Narrator (conversational)",
     `iAc9oLyb1zcwD4O3ZTBv`. É um Remix de Voz, com força baixa, da "Alpha Point - Narrator (anchor, mid-30s)"
     (`OjaLccTyGvBFh7nx0y4s`). Essa, por sua vez, foi desenhada a partir da The Trusted News Anchor. O Remix
     manteve o timbre e trocou a leitura de âncora por conversa. Como cada uma foi feita: `marca/vozes.html`.
   - **Como se gera** (decidido pelo Lucas em 24/09 depois de ouvir testes): eleven_v3, estabilidade "Criativo";
     cada bloco numa linha só, sem quebras; blocos de seções inteiras de até 5.000 caracteres
     (`preparar-voz.mjs`). Com quebras de linha e "Natural", as pausas soaram "programadas". O Multilingual v2
     soou mais "lido". Em "Criativo" o v3 pode pular ou trocar palavra: confira cada bloco pela transcrição.
     **Achado de 25/09:** acima de ~2.000 caracteres, o v3 pode parar antes do fim do texto, sem erro nenhum, e
     numa fronteira de frase, que soa como final natural. Das 6 gerações de 24/09, 5 cortaram
     (`out/juneau/_pesquisa/narracao-conferencia.md`). Nenhuma geração é aceita sem a conferência palavra a
     palavra: `transcrever-local.py`, depois `comparar-narracao.py`, e `conferir-trechos.py` para os pontos
     suspeitos. Todos estão em `out/juneau/_pesquisa/`.
   - A conta compartilhada da ElevenLabs serve a vários canais. O Lucas entra nela pelo navegador do app, e o
     Claude opera o site com ele vendo; nunca digite a senha dele.
   - O arquivo de chaves da API está em `C:\Users\zangp\.regie\chaves.env` desde 25/09/2026. Foi copiado, sem
     abrir os valores, de um arquivo que o Lucas deixou na Área de Trabalho. Tem ElevenLabs, MapTiler e as
     chaves dos acervos (NARA, Smithsonian, DVIDS, Europeana, Pexels, Pixabay). A da ElevenLabs foi testada sem
     gasto: `narrar.mjs --vozes` lista as duas vozes do canal. Nunca imprima nem leia os valores; para saber de
     onde vem uma chave, use `onde()` de `src/lib/chaves.mjs` da pré-v1.
   - Gastar crédito pede o ok do Lucas. Gasto em 24/09, conferido no saldo: 2.433 nas amostras e na escolha
     da voz; 15.564 na narração do texto aprovado (o bloco 1 com quebras de linha, o teste sem quebras e os 3
     blocos em "Criativo"); 709 no teste do v2; 1.498 na prova do tom de conversa (teste com a voz anterior e o
     Remix); 11.028 na narração do texto aprovado com a voz em conversa (3 blocos em "Criativo", 2 versões de
     cada; o saldo foi de 3.088.067 a 3.077.039). Total de 31.232. A narração inteira pede um ok próprio;
   - O navegador do app corta downloads grandes em uns 1,8 MB: o MP3 de um bloco chegou com 112 s de 4 min
     29 s. Para baixar a narração, use outro caminho (o Lucas baixa no navegador dele, ou a API).
5. master = a narração sobre tela preta 3840×2160 (`marca/identidade.md` §5).

Transcrição local disponível nesta máquina: `faster-whisper` (modelo large-v3, `word_timestamps=True`,
`language="en"`). Editor: Premiere Pro.

## Peças da pré-v1 em uso (desde 25/09/2026)

A pré-v1 da Régie (`1.0.0-rc.1`, sem tag) tem código para as estações que a v0.1.0 deixa vazias. O motor do
canal **continua a v0.1.0** (os verbos do banco, `init`, `advance`…). A pré-v1 está clonada à parte, só para
leitura, em `C:\projetos\regie-v1`, no commit `7ab9543` (branch `v1`). Não edite, não dê pull nem checkout
nesse clone até o Juneau ser entregue: se ele mudar, as ferramentas mudam no meio do vídeo.

**Decisão do Lucas (25/09/2026):** se o motor já resolve um passo, usamos a peça dele e aposentamos a caseira. Só
não se usa quando algo concreto impede (não roda no Windows, falta chave, contraria uma decisão dele), e aí se diz o
bloqueio e o que o destrava.

Em uso:
- **`out/<slug>/`** é a pasta de produção de cada vídeo, no layout da pré-v1. `roteiros/` e `midia/` ficam onde
  estão. O `.gitignore` tem o bloco de binários da pré-v1: áudio, vídeo, mídia baixada e quadros de `out/` não
  sobem.
- **Antes de cada commit:** `node C:\projetos\regie-v1\template\scripts\segredos.mjs --staged` (0 = limpo,
  1 = achou, 2 = não rodou). Achou, não commite.
- **Conferir a máquina:** `node C:\projetos\regie-v1\bin\regie doctor`, de dentro do canal (só lê). Em 25/09
  deu PASS, com 9 de 13 chaves, depois que o `chaves.env` chegou. **Não siga** duas sugestões que ele imprime: `regie atualizar --aplicar` é a
  migração inteira, e `autonomia instalar --aplicar` mexe nas configurações do Claude do Lucas.
- Para importar um módulo do clone no Windows, use URL `file:///C:/projetos/regie-v1/...` (ou `pathToFileURL`):
  caminho absoluto puro dá `ERR_UNSUPPORTED_ESM_URL_SCHEME`.

As próximas, na ordem do Juneau, com o que falta a cada uma:
1. **Baixar a narração pelo histórico da ElevenLabs** (`GET /v1/history?voice_id=…`, depois
   `GET /v1/history/{id}/audio`), com o leitor de chaves da pré-v1 (`src/lib/chaves.mjs`). A pré-v1 não baixa do
   histórico: o script é do canal. A chave está e funciona (25/09). O histórico da voz tem as 6 gerações de
   24/09, duas por bloco. Os blocos se reconhecem pela contagem de caracteres: 3.827 às 18:24, 3.735 às 18:26 e
   3.466 às 18:28, no horário de Brasília. O texto não vem na listagem. **Baixadas e conferidas em 25/09**
   (`out/juneau/_pesquisa/narracao-historico.mjs --baixar`, com o ok do Lucas). Só a **1b** está completa. As
   duas do bloco 2 e as duas do bloco 3 param antes do fim, e esses blocos precisam ser gerados de novo. Isso
   gasta crédito e pede o ok do Lucas. O quadro está em `narracao-conferencia.md`.
2. **`narracao.wav` e master preto sintético** pelo gerador da pré-v1 (`garantirMasterSintetico`, com carimbo).
3. **Conferência palavra a palavra e `words.json`** no contrato da pré-v1, com o faster-whisper local.
   Normalize os números antes de comparar. O Scribe da pré-v1 fica de fora: é pago, e o local faz o mesmo.
4. **Plano de cenas em `espelho.json`**, o contrato da pré-v1. Feche os tempos à mão: o `alinhar-timestamps`
   deixa vãos e sobreposições no faceless. Nunca o rode sem `--dry`.
5. **Mídia de acervo aberto** com `buscar-midia` (Commons, NASA, NARA; licença e procedência gravadas). O contato é `contato.naka@hotmail.com`
   (`canal.json` › `contato`, decidido pelo Lucas em 25/09). O `_commons-baixar` não tem trava de licença: confira cada uma.
6. **Geometria real dos mapas**: Natural Earth offline, pela pré-v1. **Feito em 25/09**: EUA e Canadá inteiros e
   os recortes `panhandle-juneau`, `alasca-e-vizinhos` e `matsu-anchorage` em `out/juneau/_media/geo/` (fora do git;
   refaz-se com os comandos da procedência), registrados em `out/juneau/_pesquisa/pauta-geo.json`. Conferência:
   `out/juneau/geo-previa.html`. **Rios e cidades, também em 25/09**:
   - rios e lagos do Natural Earth (`rios-*`, `lagos-*`), em domínio público;
   - o **Taku** do OpenStreetMap (`rio-taku-osm`, relation/16167118), porque o NE 1:10M não tem Taku, Chilkat,
     Knik nem Matanuska;
   - pontos de cidade reais: `cidades-ne` (Juneau, Sitka, Skagway, Whitehorse, Anchorage, Wasilla e Fairbanks,
     do NE) e, do OSM, Willow e Haines. Todos caem em terra. Use o ponto do NE para Juneau: o aproximado antigo
     caía na água.

   **Tudo que vem do OSM (Taku, Willow, Haines, a estrada e Cascade Point) põe "© OpenStreetMap contributors" na
   tela da cena e a URL openstreetmap.org/copyright na descrição.** O Taku foi refeito pelo caminho certo em 25/09,
   quando o Overpass voltou: `geo-osm-rota.mjs juneau --osm=relation/16167118 --slug=rio-taku-osm --tol=0`
   (83,60 km, 0 órfãos).

   **A estrada e Cascade Point** (o Lucas escolheu em 25/09 "Pela estrada no OSM"):
   - `estrada-juneau-cascade`: a Alaska Route 7 (relation/535397) do centro de Juneau até a ponta norte da Glacier
     Highway, 67,48 km (41,9 milhas; o roteiro diz "about 43 miles", e fica). O `geo-osm-rota` sozinho costurou
     com 21 órfãos (pista dupla e rotatória); `out/juneau/_pesquisa/estrada-juneau-cascade.mjs` monta o caminho
     e o entrega a ele (os dois comandos estão no topo do script; `--dump=` refaz sem rede).
   - `cascade-point`: a ponta norte dessa estrada, 58.700137, -134.937863, gravada por
     `out/juneau/_pesquisa/ponto-fim-da-estrada.mjs --gravar`. O nome vem do roteiro: nem NE nem OSM têm o lugar.
     No NE 1:10M o ponto cai na água, a 236 m da costa simplificada (310 vértices da estrada também); sobre o
     satélite fica certo. Se a cena pintar a terra com o polígono do NE, declare o deslocamento.

   Outros cuidados:
   - as 9 Aleutas além de 180° ficam fora do recorte do Alasca;
   - não use `--nome` no `geo-recorte-bbox`: grava o mesmo nome em todos os países;
   - camada sem `name` no topo (a de rios) não herda a licença: passe `--fonte`, `--licenca` e `--fonte-url`.

   O ponto do NE é gravado por `out/juneau/_pesquisa/cidades-ne.mjs`, com a procedência da pré-v1.
7. **Cenas 4K**: RIG, `quadro.mjs` e `renderizar.mjs --4k`. As fontes estão em `marca/fontes/`
   (Inter, Barlow Condensed e Noto Sans, do google/fonts com licença e sha256; o teste de glifos da §3 passou).
   O `marca/tokens.css` está feito (25/09): as cores, fontes, alvos e pisos da identidade, e os nomes que a
   pré-v1 lê como apelidos. Provado nesta máquina: a cena `out/prova-marca/graphics/prova-marca.html` saiu em
   3840×2160 pelo `renderizar.mjs --4k`, com as fontes certas. Para trocar a cor do protagonista numa cena, passe
   `RIG.paleta({destaque: "#…"})`, **nunca** `{acento}`: o `--acento` segue o `--destaque`, não o contrário.
   **Base de satélite pela MapTiler** (o Lucas avisou em 25/09 que a chave vem): perfil `maptiler` da pré-v1
   (satellite-v2 + terrain-rgb-v2), com a chave `MAPTILER_KEY` em `C:\Users\zangp\.regie\chaves.env` (o
   `.env` do canal também é lido e fica fora do git, mas a casa dela é o arquivo da máquina). **A chave chegou e
   funciona** (25/09: um pedido de teste ao satellite-v2 respondeu 200). A licença está registrada em
   `marca/identidade.md` §6: a conta é do Lucas, no plano Flex, que vale até 100 mil inscritos. O crédito
   `© MapTiler © OpenStreetMap contributors` fica na tela durante todo o mapa, mais a linha na descrição. O plano
   cobra por pedido de mapa, e render pede muitos: olhe o painel da MapTiler no primeiro mês. Para usá-la numa
   produção, `canal.json` › `mapa.perfil: "maptiler"`, o que é a escolha da base do vídeo inteiro, e decisão do
   Lucas.
   **Base Landsat, testada em 25/09** (o Lucas pediu o teste com Landsat): `out/prova-mapa/graphics/landsat-juneau.html`
   é a frase 10 do roteiro sobre Landsat 8 e 9 de 23–24/03/2024 (USGS, domínio público, sem crédito na tela), baixado
   do Planetary Computer sem conta por `out/prova-mapa/_pesquisa/base-landsat.py`. A cena lê a base do canal
   (`window.__BASE_CANAL`) no lugar do perfil da pré-v1, e tirou o véu escuro do molde (a identidade não tem
   degradê). Saiu em 4K pelo `renderizar.mjs` (210 quadros em 114 s) e passou por revisão contra a marca.
   Cuidados:
   - o `quadro.mjs` não fotografa cena de satélite nesta máquina (PNG acima de ~4 MB derruba a conexão com o
     Chrome; `APRENDIZADOS.md` item 17, achado 27): renderize e tire o quadro do MP4 com o ffmpeg;
   - depois de qualquer `preparar-cena prova-mapa`, rode o `base-landsat.py` de novo: ele regrava o
     `_creditos-mapa.md`, que a pré-v1 escreveria com o crédito da EOX;
   - não há data de verão limpa nessa janela: as limpas são de março e abril, com neve até perto do mar. A de
     06/08/2024 saiu enevoada a 30 m;
   - a divisa em branco a 35 % (§6) quase some sobre o campo de gelo. Se deve ganhar contorno, é decisão do Lucas.
   Qual base o Juneau usa de verdade (Landsat ou MapTiler) também é decisão dele.
8. **XML do Premiere** pelo `finalizar.mjs`, primeiro com `--sem-trilha`. Será a primeira abertura real dele no
   Windows.
9. Do vídeo 2 em diante, **narração pela API** com `narrar.mjs` (mesma voz, modelo, estabilidade e blocos).

Fora, por ora: `regie atualizar` (até sair a tag); rotinas agendadas; git autônomo e o CI `canal.yml`; caça
automatizada em bancos pagos (os termos proíbem robô); `gerar-imagem`; `marca gerar` (o `marca.json` da pré-v1
não comporta a paleta por papéis do canal). O levantamento inteiro, com arquivo e linha de cada coisa, está em
`midia/_motor/pre-v1-levantamento-2026-09-25.json`, só nesta máquina.

## A marca

`marca/identidade.md` (cor, tipo, alvos, cenas), `marca/voz.md` (o narrador e o que ele
nunca diz) e `marca/midia.md` (de onde vem cada imagem e o que as licenças deixam fazer).
Todo passo que pede "a marca ativa" lê os três. `marca/prancha.html` é a conferência visual.
`marca/pronuncias.md` é a folha permanente de pronúncias do canal: a folha de cada vídeo começa dela.
`marca/embalagem.md` é como o canal faz título e miniatura: os moldes das referências, as regras e a receita da miniatura.

Site que recusa leitura automática (403, captcha, verificação de robô) não se contorna: nem por
`curl`, nem por outro cliente, nem trocando cabeçalho. Vale para você e para todo subagente, e o
pedido a ele tem de dizer isso. Use a cópia local, ou confira pelo navegador do app com o Lucas vendo,
e pare se o site pedir verificação.

## O vídeo fala inglês; a casa fala português

A narração e o texto de tela são em **inglês dos EUA** (`canal.json` → `idiomas.origem: en-US`).
A conversa com o Lucas, as notas, os laudos e o vocabulário de máquina seguem em português.
Os ofícios foram escritos para vídeo em pt-BR, então, ao rodar os passos:

- **`ingest`**: passe o idioma ao transcritor explicitamente (`en`). Não confie em autodetecção
  num master cheio de topônimos estrangeiros.
- **Cena HTML**: `<html lang="en-US" data-render="4k-native">`. O contrato do editor-de-arte
  mostra `pt-BR`; aqui é `en-US`, e o `data-render` fica literal. Na primeira cena, capture 1 frame e
  confira que ele sai 3840×2160 **com o conteúdo preenchendo o quadro**. O caminho legado (1920 × DPR 2)
  também dá 3840×2160, mas com a cena no canto: é isso que denuncia que o capturador não reconheceu a
  marca.
- **Não traduza vocabulário de máquina**: chaves de JSON (`na_tela`, `valor_exato`…), enums,
  classes de corte, nomes de lente, `data-qc-*`, `construída`/`FALTA`/`ESCALAR`. Vai para inglês
  o que é fala, tela ou busca de mídia (`midia_termos`, `exige`). No decupador, o `motivo` de span de título leva a palavra
  "título" em português: consumidores legados a procuram por regex.
- **Os exemplos dos ofícios estão em formato brasileiro** (`QUASE 3.000×`, `28,0×`, `R$ 2 bi`,
  `6,76 m`, `1º DE MAIO DE 1994`). Não copie. O formato de tela é o de `marca/identidade.md` §7:
  `ALMOST 3,000×`, `28.0×`, `22.2 ft (6.76 m)`, `MAY 1, 1994`. Dinheiro vai em US$. Valor em reais
  é convertido pela cotação da data da fonte antes de ir à tela, nunca trocando só o símbolo.
- **Heurísticas em português viram inglês**:
  - despedida → `thanks for watching`;
  - adversativas → `but`, `yet`, `however`;
  - sintagmas que não se partem → `central bank`, `thirty-seven percent`;
  - número por extenso → `nineteen` = 19.
  "A norma de grafia de hoje" é o AP Stylebook vigente.
- **O que os ofícios citam e não existe aqui**: os scripts de gate (`qc-*`, `render/capturar.mjs`)
  e o `tradutor-de-tela`. Se o canal escrever um gate, as listas de fala que ele procura
  (despedida, mic-check, número por extenso) nascem em inglês. As chaves, enums, classes, nomes
  de lente e o "título" que ele procura no `motivo` continuam em português.

## As regras deste canal

1. **Um dono só: Lucas Rosa.** Se outra pessoa quiser produzir aqui, o caminho é passar
   o canal, não operar junto — dois operadores geram dois relatos que se contradizem.
2. **Esta pasta nunca vai para nuvem sincronizada** — Google Drive, OneDrive, iCloud,
   Dropbox, e nem Área de Trabalho ou Documentos, que o OneDrive costuma engolir. O
   banco corrompe. Só as ENTREGAS vão para o Drive.
3. **O bruto não viaja.** `midia/` fica nesta máquina.
4. **O artefato vence o relato.** Antes de dizer que algo ficou pronto, confira no
   disco. "Não sei provar" é resposta melhor do que um sim otimista.
