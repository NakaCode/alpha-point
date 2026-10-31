# Alpha Point — canal da Régie

**Você está na pasta de um canal**, não no motor. O motor — o framework que criou
este canal — está em `C:\projetos\regie`, no repositório `top10-company/regie`. Esse caminho é
de quando o canal nasceu: se ele não existir mais, pergunte à pessoa onde está o clone do
regie antes de rodar qualquer comando, e atualize `motor.caminho` no `canal.json`.

**Este é o núcleo do `CLAUDE.md`** (o caminho 2 de "Dois caminhos para a cota", em teste do vídeo 5 em diante): toda regra
que um agente usa (especialista, setor e subagente da Sala). O resto mudou de lugar, palavra por palavra, para `sala/`, e o
índice, no fim, diz onde está cada assunto. Os arquivos de `sala/` são trabalho da Sala: um agente lê só o trecho que o pedido
ou o índice apontar, e nada ali o autoriza a fazer o trabalho da Sala. A Sala lê o arquivo do assunto antes de fazer o trabalho
dele: o commit e o push (`sala/motor-e-git.md`), a narração, a caça, a trilha, a linha do tempo, o despacho aos setores.
O CLAUDE.md enxuto está em teste desde 30/10/2026 (Lucas, no chat da Sala, à pergunta "O CLAUDE.md enxuto: qual divisão vale no
teste?": "Núcleo de 22 mil (Recomendado)"), e a volta é copiar `sala/CLAUDE-completo.md` de volta para o `CLAUDE.md`, decisão do Lucas.

## Quem está do outro lado

Lucas Rosa, o dono deste canal. Pode não ser pessoa técnica: trate git, banco e linha
de comando como coisas que você opera POR ela, explicando em português claro o que
está fazendo. Não devolva comando para ela digitar — rode e conte o que aconteceu.

## A numeração dos vídeos (desde 27/10/2026)

O Lucas, no chat da Sala, em 27/10/2026, às 14:4x: "Um adendo, vamos tratar como vídeo 4. Já que o Juneau não deve ser
contabilizado". O Juneau, arquivado sem publicar, sai da contagem:

| Vídeo | Projeto | Antes de 27/10 |
|---|---|---|
| — (arquivado) | `juneau` | 1 |
| 1 | `los-angeles` | 2 |
| 2 | `zona-do-canal` | 3 |
| 3 | `peru-agua` | 4 |
| 4 | `atlantico-fundo` | 5 |
| 5 | o Mar Negro (em pauta, desde 31/10/2026) | — |
| — (fora, em 31/10/2026) | a Passagem de Drake | 6 |

- Com o Lucas e em todo registro novo, vale a numeração nova, sempre com o projeto ao lado: "o vídeo 4 (`atlantico-fundo`)".
- **O que foi escrito antes dessa mensagem fica com a numeração antiga, e nada se renumera:** as falas do Lucas citadas, as
  regras "do vídeo N em diante", os commits e os nomes de arquivo (`pautas/2026-10-24-video-5.md`, `out/_pautas/video-4/`).
  Leia-os pela tabela: "do vídeo 3 em diante" (14/10) vale da Zona do Canal em diante, e "do vídeo 5 em diante" (24/10), do
  Atlântico em diante.

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
- O `segredos.mjs --staged` continua antes de cada commit, e nada pessoal vai ao git ("Caça nos bancos pagos").
- Só a Sala commita e dá push. Os setores e os subagentes, não.
- O arquivo de chaves da API está em `C:\Users\zangp\.regie\chaves.env` desde 25/09/2026. Foi copiado, sem
  abrir os valores, de um arquivo que o Lucas deixou na Área de Trabalho. Tem ElevenLabs, MapTiler e as
  chaves dos acervos (NARA, Smithsonian, DVIDS, Europeana, Pexels, Pixabay). A da ElevenLabs foi testada sem
  gasto: `narrar.mjs --vozes` lista as duas vozes do canal. **Em 30/09/2026 o Lucas mandou pelo chat uma chave nova da ElevenLabs**: trocada no arquivo (a anterior ficou em `chaves.env.antes-da-troca-elevenlabs-2026-09-30`, na mesma pasta) e testada sem gasto (`--vozes` lista as três vozes do canal). Nunca imprima nem leia os valores; para saber de
  onde vem uma chave, use `onde()` de `src/lib/chaves.mjs` da pré-v1.

No Windows, se `npm` responder que "npm.ps1 não pode ser carregado", use `npm.cmd`.
Não altere a política de execução do PowerShell da pessoa para contornar isso.

## O que a Régie faz — e o que ainda não faz

A linha começa num vídeo **já editado** (o passo `ingest` transcreve o master) e
entrega a camada visual como XML de 5 camadas. Não gera vídeo do zero. E não há
automação que rode os passos sozinha: quem faz o trabalho de cada passo é você,
junto com a pessoa; a Régie guarda estado, ordem e histórico. Não prometa mais que isso.

A cadeia que produz o master e a narração inteira estão em `sala/narracao.md`. Daí, para as peças:

- **Sem títulos de capítulo na tela** (Lucas, 26/09): os capítulos vão só na descrição do YouTube. Não ponha
  linha de card no `roteiro.md`.

## Peças da pré-v1 em uso (desde 25/09/2026)

A pré-v1 da Régie (`1.0.0-rc.1`, sem tag) tem código para as estações que a v0.1.0 deixa vazias. O motor do
canal **continua a v0.1.0** (os verbos do banco, `init`, `advance`…). A pré-v1 está clonada à parte, só para
leitura, em `C:\projetos\regie-v1`, no commit `7ab9543` (branch `v1`). Não edite, não dê pull nem checkout
nesse clone até o Juneau ser entregue: se ele mudar, as ferramentas mudam no meio do vídeo.

Em uso:
- **`out/<slug>/`** é a pasta de produção de cada vídeo, no layout da pré-v1. `roteiros/` e `midia/` ficam onde
  estão. O `.gitignore` tem o bloco de binários da pré-v1: áudio, vídeo, mídia baixada e quadros de `out/` não
  sobem.
- Para importar um módulo do clone no Windows, use URL `file:///C:/projetos/regie-v1/...` (ou `pathToFileURL`):
  caminho absoluto puro dá `ERR_UNSUPPORTED_ESM_URL_SCHEME`.

As próximas, na ordem do Juneau, com o que falta a cada uma:

(Os itens 1, 2, 8 e 9, e o que se fez no Juneau nos itens 6 e 7, estão em `sala/`: o índice, no fim, diz onde.)

3. **Conferência palavra a palavra e `words.json`** no contrato da pré-v1, sem o Scribe (é pago):
   `python out/juneau/_pesquisa/ingest-local.py <proj>`. **Feito para o Juneau em 26/09** (laudo aprovado em
   `out/juneau/transcricao.json`, sem commit). O relógio é híbrido:
   - as palavras são as do texto aprovado, na grafia da **cópia para a voz** (aliases e números por extenso;
     `roteiros/<proj>/voz/trocas.md`): entidade e grafia de tela saem do `roteiro-narrador.md`, não do `words.json`;
   - o tempo vem do alinhamento por caractere que a ElevenLabs guarda no histórico
     (`out/juneau/_pesquisa/alinhamento-elevenlabs.mjs`, só GET, sem gasto, com cache), preso ao som nas pausas;
4. **Plano de cenas em `espelho.json`**, o contrato da pré-v1. Feche os tempos à mão: o `alinhar-timestamps`
   deixa vãos e sobreposições no faceless. Nunca o rode sem `--dry`.
5. **Mídia de acervo aberto** com `buscar-midia` (Commons, NASA, NARA; licença e procedência gravadas). O contato é `contato.naka@hotmail.com`
   (`canal.json` › `contato`, decidido pelo Lucas em 25/09). O `_commons-baixar` não tem trava de licença: confira cada uma.

6. **Geometria real dos mapas**, pela pré-v1. O que se fez no Juneau, com os rios que o NE 1:10M não tem e a rota que o
   `geo-osm-rota` não costurou sozinho, está em `sala/mapas-e-maptiler.md`, e o detalhe desses tropeços, no `APRENDIZADOS.md`,
   item 17 (achados 22 e 23).

   **Tudo que vem do OSM (Taku, Willow, Haines, a estrada e Cascade Point) põe "© OpenStreetMap contributors" na
   tela da cena e a URL openstreetmap.org/copyright na descrição.** O Taku foi refeito pelo caminho certo em 25/09,
   quando o Overpass voltou: `geo-osm-rota.mjs juneau --osm=relation/16167118 --slug=rio-taku-osm --tol=0`
   (83,60 km, 0 órfãos).

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
   Cuidados:
   - o `quadro.mjs` sozinho não fotografa cena de satélite nesta máquina (PNG acima de ~4 MB derruba a conexão com o
     Chrome; `APRENDIZADOS.md` item 17, achado 27). A causa é o WebSocket do Node 24, e a pré-carga do canal a resolve
     (item 57; "Tropeços conhecidos do apoio"). Sem ela, renderize e tire o quadro do MP4 com o ffmpeg;

## Os especialistas (desde 26/09/2026)

O Lucas mandou instalar 15 especialistas da pré-v1. Eles estão em `.claude/agents/<id>.md` e o apoio que mandam
rodar e ler está em `scripts/`, `contratos/`, `knowledge/`, `seed/`, `regua/`, `infra/`, `templates-cena/`
(com o `_rig.js`), `assets/`, `src/agent/` e `marca/_neutra/`. Tudo foi copiado byte a byte do molde da
pré-v1 (commit `7ab9543`), com o sha256 conferido. Os `ORIGEM.json` (na raiz, em `scripts/`, `contratos/` e
`regua/`) guardam a procedência, e o `.gitattributes` guarda `assets/` sem conversão de fim de linha, para o
sha256 valer também num clone. **Nada disso se edita**: a próxima versão do motor passaria por cima, e o sha256
deixaria de provar a origem. O gosto do canal vai na roupa. O `package.json` do molde veio em 01/10/2026, quando
o Lucas autorizou o npm ("Os portões medem", abaixo), copiado byte a byte (sha256 `1428f2e4…`).

**Quem entra em que passo** da linha (`regie graph`):
- `mirror`: `montador` (`words.json` + `roteiros/<proj>/roteiro-narrador.md` → `espelho.json`);
- `research`: `pesquisa-imagens`, `-documentos`, `-dados`, `-geo`, `-pessoas`, `-logos`
  (`out/<proj>/_pesquisa/pauta-<tipo>.json`);
- em `research`, depois dos `pesquisa-*` e da Fase A da caça, em qualquer passo em que chegue mídia nova, e no
  `conducting`, quando a regência nasce, sobre os `aprovado` de janela provisória (ofício dele, §3): o
  `conferente-de-midia`, **do canal** (26/09/2026; `.claude/agents/conferente-de-midia.md`). Ele confere, contra
  a frase que cada mídia vai cobrir, os candidatos da caça antes da lista do Lucas
  (`out/<proj>/_pesquisa/conferencia-caca.json`, que a skill `cacar-no-chrome` lê) e todo arquivo de
  `out/<proj>/_media/` que uma cena vá citar (`conferencia-midia.json`), com um resumo `.md` ao lado de cada um.
  Julga contexto, licença e fonte, técnica e repetição, e dá `aprovado`, `reprovado`, `trocar` ou
  `pendente_lucas`. Não baixa, não edita cena nem espelho, e o `aprovado` dele não é o sim do Lucas.
  - **O que passa por ele** (ofício, §2): o candidato da caça; o arquivo baixado do banco, antes do
    `_instalar-lote` (skill, §3, passo 5); o rascunho do acervo aberto, entre o `baixar` e o `entregar` do
    `pesquisa-imagens` (roupa dele, §10); e o retrato, a logo e a página de documento que o `pesquisa-pessoas`,
    o `pesquisa-logos` e o `pesquisa-documentos` entregam direto em `_media/pessoa/`, `_media/logo/` e
    `_media/documento/`, no `research` ou no `art` (a bandeira que o `editor-de-arte` pede no `art` também).
    **Fora dele**: as bandeiras de `assets/flags/` (símbolo de país do molde, medido pelo `ffprobe`), a
    geometria, a base de mapa (`_media/base/`, ou a do perfil do `canal.json`), as bibliotecas do mapa em
    `_media/_vendor/` e as cenas construídas. As provas do `pesquisa-documentos` levam `-prova` no nome
    e nunca vão à tela.
  - **A regra da cena**, em qualquer passo: uma cena só cita arquivo de `out/<proj>/_media/` que tem `aprovado`
    no `conferencia-midia.json`, no veredito que casa com ele. No banco pago, casa pela URL do item (a `url` do
    `_PROCEDENCIA.json` da cena, com `mesmo_item: true`); no acervo aberto, pelo `sha256` do rascunho julgado
    (`medido.sha256` ou `medido.medido_no_download.sha256` do `_PROCEDENCIA.json`); no retrato, na logo e no
    documento, pelo `sha256` do arquivo. Com `pendente_lucas`, `reprovado`, `trocar` ou sem veredito, o arquivo
    não vai à cena. O veredito vale para a cena da frase que ele julgou: noutra cena, conferência nova ou o reuso
    declarado. E o rótulo de lugar sobre o arquivo não nomeia lugar mais específico que o `lugar_na_origem` do
    veredito (`marca/midia.md` §2.7): quem escreve o rótulo é o `redator-de-tela`, e quem o confere, o `qc-visual`.
    A foto e o retrato de outro ano que o do fato entram com o aviso do ano na tela (`marca/identidade.md` §6;
    Lucas, 27/09/2026: "Quando não houver foto do ano, mas houver foto pode utilizar com um aviso em tela"). O ano
    sai do `data_na_origem` do veredito, e a obrigação do aviso, do `aviso_de_ano`.
  - **O `pendente_lucas`** é o que a marca deixa para o Lucas pesar: footage de registro real abaixo de 4K ou na
    vertical (o B-roll genérico assim, de banco ou de acervo, se recusa, e na caça nem vira candidato), foto
    de agência, o arquivo do banco que não se pôde comparar com a prévia, e uma DECISÃO DO LUCAS PENDENTE que,
    sozinha, segure o item. Na caça, hoje nenhum candidato sai `pendente_lucas` (skill, §2.5), e o arquivo
    baixado que não se pôde comparar (`mesmo_item: null`) vai ao Lucas pela tabela da skill, §3, passo 5; fora
    dela, vira uma pergunta curta. Com a
    resposta, o Claude central despacha o conferente de novo com a mensagem literal e a hora, e ele grava a
    `excecao_lucas` e só então dá `aprovado`. O Claude central nunca passa por cima do veredito.
  - Arquivo já entregue que o conferente reprovar ou mandar trocar sai de lá por quem o entregou, nunca
    apagado: de `out/<proj>/_media/<tipo>/<cena>/` para `_media/_caca/<cena>/_retirado/`; de `_media/pessoa/`,
    `_media/logo/` e `_media/documento/` para `_media/_caca/_retirado/<pessoa|logo|documento>/`. As duas ficam
    sob `_caca`, que o `qc-procedencia` conta como rascunho, não como acervo. O `pendente_lucas` fica onde está.
    O `reprovado` só por `reconferir` que uma conferência nova aprovar (depois do navegador do app, com o Lucas
    vendo) volta de `_retirado/` ao lugar dele, por quem o entregou.
  - **Um despacho do conferente por vez em cada vídeo**: as saídas dele são arquivos únicos, sem trava. Enquanto
    ele roda, nada escreve em `out/<proj>/_media/` (nem a caça, nem uma entrega), e ele confere isso pelo sha256
    dos arquivos de `_media/`, antes e depois.
  - Ao contrário dos 15, se edita aqui e não tem roupa: a marca vai no próprio arquivo, por ponteiro para
    `marca/midia.md` e `marca/identidade.md`.
- `art_direction`: `diretor-de-arte` (`conceito-visual.json`);
- `conducting`: `regente-de-imagem` (`regencia.json`);
- `screen_text`: `redator-de-tela` (`textos-tela.json`). Junto dele, o `verificador-de-fatos` dá veredito a toda
  afirmação que vai à tela ou que a pesquisa trouxe. O rótulo de lugar sobre mídia real sai do `lugar_na_origem`
  do `conferencia-midia.json`, nunca mais específico que ele (roupa do `redator-de-tela`, §4);
- `art`: `editor-de-arte` (as cenas HTML) e `mapista` (as cenas de mapa);
- `qc`: `qc-visual` (`qc/<cena>.laudo.json`). Ele julga, não conserta;
- `designer-de-navegacao`: não tem trabalho no Juneau. Card de capítulo, título de tópico e sumário não vão à
  tela (o Lucas decidiu em 26/09 que os capítulos ficam só na descrição).

**Como se despacha:** quem despacha é o Claude central, um passo por vez, e o pedido diz o `<proj>` e o passo.
O artefato vence o relato: antes de `regie advance`, confira no disco o arquivo que o especialista diz ter
gravado. Portão ausente do disco, ou que sai com exit 2 chamado com o alvo certo ("Os scripts do canal",
abaixo), é **NÃO MEDIDO**, com o nome do portão. Nunca é simulado nem "medido no olho": olhar um quadro
(`quadro.mjs`, ou o render e o ffmpeg) é olhar, não é portão.

**O ilustrador, com a física** (desde 07/10/2026, do vídeo 2 em diante). O pacote `ilustracao-narrativa` v1.4.0 (em
`v1.4.0-ilustracao-narrativa/`, fora do git, nesta máquina) foi testado numa cópia da s34 do Juneau (`out/prova-ilustracao/`,
fora do git): o fio passou a entrar no furo, mas o balanço caiu de ±3° para 0,43° para a etiqueta parar antes da leitura. A
pergunta: "Uso o ilustrador no vídeo 2?" A resposta: "Sim, com a física (Recomendado)" (o resto em `marca/identidade.md` §4.4,
"O ilustrador, com a física").

- **Não é peça nova nem passo novo**: é método que o `editor-de-arte` aplica no `art`. O ponto de ativação é a roupa dele
  (`marca/agentes/editor-de-arte.md` §5); o `qc-visual` julga a construção pela roupa dele (§5).
- **A cópia do núcleo** está em `ilustracao/` (80 arquivos, cada um com o sha256 do manifesto do pacote; `ilustracao/ORIGEM.json`
  diz o que veio, o que ficou no pacote e como se conferiu). **Não se edita**: versão nova do pacote vem por cópia nova, conferida
  contra o `MANIFESTO.json` dela. Ficaram no pacote a vitrine, as bancadas HTML e o agente opcional `ilustrador-tecnico`, que não
  está ligado no canal.

**A roupa** de cada um é `marca/agentes/<id>.md`, escrita para este canal. Enquanto a de um especialista não
existir, vale a marca ativa sobre o piso `marca/_neutra/`, e ele diz que a roupa faltou. O `LEIA-ME.md` dessa
pasta veio do molde e foi adaptado ao canal (quem escreve, e que não há teste automático das roupas aqui).
Roupa não guarda estado de ferramenta: o que cai nesta máquina ou sai NÃO MEDIDO fica neste arquivo e no
`APRENDIZADOS.md` (itens 17 e 36), e a roupa aponta para cá.
`seed/`, `regua/` e parte de `knowledge/` são do Top10: fonte Neue Haas, hex cravado e números em
pt-BR. Servem de estrutura; cor, fonte e formato vêm de `marca/` (§7 da identidade).

**Os marcadores** vêm da tabela genérica, em `C:/projetos/regie-v1/template/.claude/agents/PLACEHOLDERS.md` (só
leitura). Onde ela diverge desta lista, vale esta:
- `<consumer-repository>` e `<workspace>` são a raiz do canal. Todo caminho é relativo, com `/`, e todo comando
  roda com cwd na raiz;
- `<proj>` = `<slug-do-projeto>` é o vídeo (hoje, `juneau`), com a produção em `out/<proj>/`;
- o texto e o dossiê **não** ficam em `out/<proj>/`, ao contrário da tabela:
  - `roteiro-<persona>.md` e `knowledge/roteiros/<proj>.md` = `roteiros/<proj>/roteiro-narrador.md`, o texto
    aprovado. O `out/<proj>/roteiro.md` é a cópia para a voz, com aliases de pronúncia e números por extenso
    (`roteiros/<proj>/voz/trocas.md`): nunca é grafia de tela nem objeto de checagem;
  - `roteiro-editor.md`, `roteiro.json` e `qc-roteiro/` = `roteiros/<proj>/…` (onde gravar o laudo de fatos dos
    próximos vídeos é decisão do Lucas; até lá, como no Juneau);
  - `pauta-fundamento.json` = `pautas/<proj>/fundamento.json`;
- `<canal>` = `alpha-point`, e `marcas/<canal>/…` é `marca/…`;
- `marcas/_neutra/` é `marca/_neutra/`, e `<registro-da-sede>` é `marca/`;
- `<lang>` = `en-US`;
- `<motor>`, para as ferramentas (`src/ferramentas`, `geo`, `mapa`, `finalize`, `lib`, `cena`), é
  `C:/projetos/regie-v1`: `node C:/projetos/regie-v1/src/ferramentas/<x>.mjs`. Não é o `motor.caminho` do
  `canal.json`;
- `<channel-cli>` é `node C:/projetos/regie/bin/regie` (v0.1.0), só para os verbos do banco, e nunca com `--help`;
- o relógio é um só, `out/<proj>/words.json`. Não existem `words-final`, `words-limpo`, `_cortes` nem
  `_master-decupado`. O master é `out/<proj>/_media/_master.mp4` sobre a `narracao.wav`, que termina em 20 s sem
  voz (o segmento `pausa`, para a tela final do YouTube);
- não se usam a pausa de card, o `knowledge/TITULOS-TOPICOS.md` nem o `templates-cena/navegacao/`;
- `/tmp/…` é `out/<proj>/_tmp/`, que fica fora do git;
- `assets/geojson/` e `assets/dados/` ficam na raiz do canal. A geometria do Juneau já está em
  `out/juneau/_media/geo/`, registrada no `pauta-geo.json`;
- `<tile-source>` e `<dem-source>` vêm do perfil `maptiler` (`canal.json` › `mapa.perfil`). A chave só se lê
  por `src/lib/chaves.mjs` da pré-v1, nunca dentro do HTML. O "mapista fora da v1" da tabela não vale aqui.
  Antes da primeira cena de mapa renderizada, avise o Lucas e anote o contador da MapTiler. No Juneau, o gasto
  está liberado, com o relevo 3D em s44 (Lucas, 28/09/2026) e em s01 (o voo de abertura, 03/10/2026; `marca/identidade.md` §6, "O gasto do Juneau,
  liberado"): o contador se anota antes e depois de cada render de mapa. Em 01/10/2026 o Lucas liberou as outras
  cenas sem esperar o custo da primeira ("pode seguir o uso do maptiler, podemos fechar o custo outra hora"): a
  conta vai a ele quando o painel a mostrar.

**Os scripts do canal** rodam de dentro do canal, sempre com o alvo que o ofício do agente dá. Sem alvo,
alguns varrem todos os projetos de `out/`. Na maioria, o alvo é o `<proj>` (`node scripts/<portão>.mjs <proj>`);
nestes, não:
- `qc-src-existe`: `out/<proj>` ou o HTML da cena. Com o `<proj>` solto, quebra com pilha e exit 1;
- `qc-hex`, `qc-contrato` e `qc-fora-do-quadro`: `out/<proj>/graphics` ou o HTML da cena;
- `shot` e `probe-elemento` (`<html> <t>`), `check-overlap`, `qc-carga`, `qc-tamanho`, `qc-pais-bandeira` e
  `qc-video-avanca`: o HTML da cena;
- `validar-contrato`: `<tipo> <arquivo.json>`; `alinhar-timestamps`: `<plano.json> <words.json> --dry`.

Saída de uso errado ("uso:", "não encontrado", "nenhum .html", pilha de `ENOENT`) não é NÃO MEDIDO nem
reprovação: repita com o alvo certo.

Os que importam do motor precisam de `REGIE_MOTOR` no mesmo comando:
- no Git Bash: `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/<portão>.mjs …`;
- no PowerShell: `$env:REGIE_MOTOR='C:\projetos\regie-v1'; node scripts/<portão>.mjs …`, na mesma chamada.

Sem ela, o script cai na v0.1.0 e diz "atualize o motor para a versão que o canal.json declara"
(`MOTOR_SEM_ARQUIVO`). Às vezes sai com exit 1 e uma pilha, o que parece reprovação. Isso quer dizer só "faltou
`REGIE_MOTOR`". Nunca mexa no motor nem no `canal.json`, e nunca rode `regie atualizar`, por causa dessa mensagem.

**Os portões medem** (desde 01/10/2026). A pergunta ao Lucas: "O qc-visual julgou as 12 primeiras cenas com nota
boa em todas as lentes (8 a 10), mas não pode aprovar nenhuma: os portões que medem cada cena no Chrome (colisão,
fora do quadro, crédito, contraste) não rodam sem o npm, e a regra deixa essa decisão com você. Como seguimos?" A
resposta: "Instalar o npm (Recomendado)". A opção dizia: "Eu instalo só duas peças, as que o molde da Régie pede:
playwright-core (usa o Chrome que já está no PC, não baixa navegador) e sharp. Os portões passam a medir cada cena
quadro a quadro, como o motor prevê. Pode achar mais defeitos (mais uma rodada de conserto) e pede tiles da MapTiler
nas cenas de mapa. Custa algumas horas a mais."

- Agora rodam, com `REGIE_MOTOR` na mesma chamada: `shot`, `probe-elemento`, `check-overlap`, `qc-carga`,
  `qc-tamanho`, `qc-contrato` (inteiro), `qc-fora-do-quadro`, `qc-credito-fantasma`, `qc-video-avanca`,
  `qc-rodape-contraste`, `_audit-til`, `medir-imagem` e o `qc-pais-bandeira` (que só lê nome de país em português).
- **O `qc-cena`** (`node scripts/qc-cena.mjs out/<proj> --conc=3`, ou os HTML de cenas) roda contrato, carga,
  colisão, tamanho, til, src-existe, fora do quadro e crédito-fantasma em toda cena, grava o carimbo em
  `out/<proj>/_portao.json` (que o XML do motor lê) e sai 0 só com todas passando. O `mapa-vivo` não veio do
  estúdio e fica fora do portão (ele avisa). O `qc-rodape-contraste` e o `qc-video-avanca` rodam à parte.
- **A margem, medida antes de entregar** (M6 da auditoria de tokens, "Medir antes de entregar"; o Lucas, 14/10/2026: "M6
  pode ser aplicada"). `node ferramentas/portao-margens.mjs out/<proj> [--so=<cenas>]` mede, na tela, sob a câmera, a cada
  0,1 s, a área segura da marca (identidade §4.2: a margem, a faixa do crédito, o crédito até x 1720 e o canto de 400 × 400)
  para todo texto, pílula, cartão, foto, borda de papel e fita, e grava uma linha por cena em
  `out/<proj>/_tmp/portao-margens.jsonl`. O `editor-de-arte` e o `mapista` rodam antes de entregar, até sair 0; o Claude
  central roda na rodada de portões; o `qc-visual` lê a saída e não remede no olho. Não está no `qc-cena` nem no
  `_portao.json` (o molde não se edita). Cena de mapa sem tile e sem a pré-carga (com ela, ele se recusa): chave falsa,
  pedidos de tile respondidos no próprio PC com um ladrilho cinza, o resto cortado, o DNS do Chrome desligado; não entra
  no `maptiler-gasto.md`. A prova: `node ferramentas/portao-margens-provar.mjs`. Não mede camada do mapa (canvas) nem a
  palavra da página escaneada sob a fita: isso fica nos quadros. A cena com relevo 3D sai NÃO MEDIDO por desenho (o relevo
  dele é plano, e a pílula presa a uma montanha muda até 19 px de lugar, medido na s44 do Juneau): a margem dela continua
  no clipe de prova, e esse 2 não segura o `aprovado` do `qc-visual`.
- **A cena de mapa nos portões, só com a pré-carga do canal** (03–04/10/2026; `APRENDIZADOS.md`, item 64). Os
  portões do molde abrem a cena sem a chave da MapTiler: a base de mapa da pré-v1 para antes de criar o mapa, e o
  portão mede uma página parada, sem satélite e sem pedir tile nenhum. (Até 04/10 esta linha dizia que o portão
  pedia tiles: estava errado.) Por isso, todo portão em vídeo com cena de mapa roda com a pré-carga
  `ferramentas/chaves-nos-portoes.mjs`, que dá a chave à cena do jeito que o render dá:
  `REGIE_MOTOR=C:/projetos/regie-v1 node --import=file:///C:/projetos/alpha-point/ferramentas/chaves-nos-portoes.mjs scripts/qc-cena.mjs out/<proj> --conc=3 --forcar`.
  - Com ela, a cena de mapa pede tiles: cada rodada conta como render no `maptiler-gasto.md`.
  - O `_audit-til` e o `qc-rodape-contraste` do molde trocam o `requestAnimationFrame` por um que não roda, e o mapa
    não pinta: em cena de mapa, a pré-carga os dá como NÃO MEDIDO. Quem mede ali o til e o contraste do crédito é
    o `ferramentas/portao-mapa.mjs` (`til` e `rodape`, com a mesma pré-carga e `--so=<cenas>`), aceito por três
    céticos (decisão do Claude central, 04/10/2026; `out/juneau/_pesquisa/revisao-premiere-lucas.md`).
  - Depois de toda rodada: `node ferramentas/chaves-nos-portoes.mjs conferir out/<proj> --desde="<hora do começo>"`.
    Ele pega a pré-carga esquecida e o verde sem prova, e sai 0 só sem nenhum problema.
  - O topo de cada arquivo diz o uso e os limites; os relatos estão em `out/juneau/_tmp/art/` (`chaves-nos-portoes-
    relato.md` e `portao-mapa-relato.md`).
  - Desde 05/10/2026, o `rodape` do `portao-mapa` está na versão 5: mede todo crédito declarado (`data-qc-papel="credito"`) linha
    a linha, inclusive o que tem o ano num `<span>`, que o `qc-rodape-contraste` do molde dá como "sem crédito". Ele roda em todas as
    cenas (`--so=` vazio), e é a medida do contraste do crédito que o `qc-visual` lê, com e sem mapa. O `conferir` só aceita a v5 no
    rodapé. Os limites e a decisão estão em `out/juneau/_tmp/art/portao-mapa-v5/RELATO.md` (§10).
- Quem roda os portões é o Claude central (e o `editor-de-arte` e o `mapista` antes de entregar). O `qc-visual` lê o
  resultado e só aprova com todas as lentes ≥ 7 e nenhum portão duro reprovado.

Não se rodam:
- `stock/_phil.mjs`, `stock/_contato.mjs` e `_capturar-pagina.mjs`, que mandam cabeçalho de navegador (a regra
  anti-robô de "A marca"). Site que recusa o User-Agent do canal para ali;
- os scripts de banco pago que não são da caça pelo Chrome: `stock/chrome-daemon`, `setup-login`,
  `sessao-conferir`, `sessao-veredito`, `antibot`, `api-oficial` e `lib/perfil-stock` (por quê: "Caça nos
  bancos pagos"). `registrar-download` e `lib/teto-shutterstock` rodam só dentro da caça. O `_instalar-lote` é a
  porta por onde todo footage de banco entra na produção (REND-114, `seed/regras/REND.md`); como aqui o footage
  de banco só chega pela caça, no canal ele também só roda dentro dela. Os três pelo Claude central, com
  `REGIE_MOTOR` na mesma chamada;
- o `narrar.mjs` e o `transcrever.mjs` da pré-v1, que gastam crédito e refazem o relógio.

O `stock/_commons-baixar` não trava licença, então confira cada uma.

**Tropeços conhecidos do apoio** (as roupas apontam para esta lista; a origem de cada um está no
`APRENDIZADOS.md`, item 36):
- `renderizar.mjs` sem `--4k` grava a cena 4k-native em 1080p, e o carimbo (`<id>.mp4.de-html`) guarda a
  resolução: um render sem `--4k` obriga a renderizar de novo e, em cena de mapa, a pagar a MapTiler de novo.
  Todo render, inclusive o de prova, leva `--4k`, e o clipe só vale se o carimbo termina em `2160p`;
- **todo render e todo `quadro.mjs` levam a pré-carga do canal** (01/10/2026; `APRENDIZADOS.md`, item 57):
  `node --import file:///C:/projetos/alpha-point/ferramentas/cdp-sem-compressao.mjs C:/projetos/regie-v1/src/ferramentas/renderizar.mjs <proj> --cena=<id> --4k`.
  Sem ela, o WebSocket do Node 24 derruba a conexão com o Chrome quando um quadro passa de 4 MB (foto cheia de
  detalhe em tela cheia, satélite), e o render sai com "a conexão com o navegador caiu (o Chrome fechou ou travou)":
  o Chrome não tem culpa, e o render se repete com a pré-carga;
- `qc-pais-bandeira` só reconhece nome de país em português (`CANADÁ`, não `CANADA`): nem com npm ele conta
  país escrito em inglês;
- `lib/erratas-gravadas.mjs` procura o laudo em `out/<proj>/qc-roteiro/entrada/`, e o deste canal está em
  `roteiros/<proj>/qc-roteiro/`: a saída dele é NÃO MEDIDO, e o laudo se lê direto;
- `decupagem/corrigir-nomes.mjs` só corrige `words-final`/`words-limpo`: aqui sai com exit 2, e o `words.json`
  nunca se corrige;
- no Git Bash, `TZ=America/Sao_Paulo date` devolve UTC sem avisar (não há base de fusos): a hora de Brasília é o
  `date` sem `TZ`, ou o `Get-Date` do PowerShell (`APRENDIZADOS.md`, item 43);
- `jq`, `turf`, `mapshaper`, `identify` e `pdftoppm` não existem nesta máquina. O PyMuPDF importa no Python,
  mas não foi testado para rasterizar PDF;
- `quadro.mjs` com satélite, `geo-recorte-bbox --nome` e `geo-osm-rota`: "Peças da pré-v1 em uso", itens 6 e 7;
- `buscar-midia` lê o `marca/midia.json` do canal (desde 26/09, com as fontes que o Lucas escolheu; `midia.md`
  §7), e tira da lista o que tem menos de 1600 px de largura (conta em `abaixo_do_minimo`). A foto de época pequena é
  exceção de caso muito específico (Lucas, 27/09/2026; identidade §5), e do vídeo 2 em diante (no Juneau, não) também preenche a
  lacuna do plano sem foto grande nem vídeo, de hoje ou de época, uma ou mais na mesma mesa (identidade §5, "A foto pequena
  preenche a lacuna"): só para elas se usa `--min-w=800`, e ela entra
  impressa sobre a mesa. A NARA só devolve
  imagem. A Library of Congress e o Internet Archive vêm desligados: a pré-v1 registra 403 do Cloudflare da LoC a
  toda consulta por script (23/09);
- a NARA, pela API oficial v2 (`catalog.archives.gov/api/v2`, com a chave do canal, como o `buscar-midia` faz), e o
  `objectUrl` que ela devolve, inclusive as leituras Range em `/medialz` para medir e baixar, são a porta que a NARA
  abre para programas: valem, apesar do `Disallow: /` do robots.txt do catálogo (decisão do Claude central, 27/09/2026).
  O endpoint interno do site (`/proxy/…`) e as páginas do catálogo fora da API, não: no Juneau, o 1º round do
  `pesquisa-imagens` usou o `/proxy/` e ele foi cortado;
- o Wikimedia Commons, pela API do MediaWiki (`/w/api.php`), é a porta que a Wikimedia abre para programas: vale,
  apesar do `Disallow: /w/` do robots.txt (decisão do Claude central, 27/09/2026, como a da NARA).
  - O robots.txt fala a quem varre páginas: "Friendly, low-speed bots are welcome viewing article pages, but not
    dynamically-generated pages please".
  - A página de etiqueta da API diz como um programa a usa: "API requests to Wikimedia wikis must include a
    meaningful User-Agent header" (mediawiki.org/wiki/API:Etiquette, lida em 27/09/2026), e pedidos "in series
    rather than in parallel".
  - O `buscar-midia`, o `_commons-cat` e o `_commons-baixar` já mandam o User-Agent com o contato do canal: o Lucas
    escolheu o contato em 25/09 para isso ("A busca de mídia de acervo (Wikimedia Commons, NASA, NARA) envia um
    contato do canal em cada pedido, como esses acervos exigem").
  - Script de pesquisador que chame a API também leva o User-Agent do canal e faz um pedido por vez.
  - O arquivo vem de `upload.wikimedia.org`, cujo robots.txt só veta `/wikipedia/commons/archive/`.
  - As páginas dinâmicas do site fora da API (`index.php`, a busca do site, o histórico), não;
- o upscale não-generativo que o `pesquisa-pessoas` pede (`image.upscale.classic`) não existe no canal nem na
  pré-v1;
- o `entregar` do `buscar-midia` só entrega linha selada de acervo livre. A foto de jornal e a do governo do Alasca
  (`marca/midia.md` §7.5) se entregam à mão, com os campos da roupa do `pesquisa-imagens` (§5) e o sha256 do rascunho
  julgado (`_media/foto/s56/`, 27/09/2026). Ele também copia a licença do Commons, sem o crédito que o canal pede à
  fonte: esse crédito viaja no veredito do conferente (s22). E o `buscar` consulta só as 3 primeiras frases de cada
  chamada, sem avisar (`APRENDIZADOS.md`, item 42);
- `src/agent/data-tools.mjs` só cobre IBGE e World Bank;
- o `catalogo` da pré-v1 lê o cache da máquina e o acervo do motor, não `assets/geojson/` (que veio vazio);
- `navegacao/gerar.mjs` está inoperante: a entrada vinha do `curador-de-acervo`, que não veio, e a saída não tem
  leitor;
- relevo (`terrain-rgb-v2`) e câmera 3D da MapTiler não têm prova registrada nesta máquina;
- as bandeiras de `assets/flags/` variam de tamanho (de 160 a 2560 px de largura): meça cada uma com o
  `ffprobe`. As do Juneau, `us.png` (320 × 168) e `ca.png` (320 × 160), são pequenas para o círculo de 640 px da
  PRANCHA.

## Os setores (desde 12/10/2026)

O protocolo dos setores (o pedido, as conversas, as provas, a trava escrita, a peça como subagente, a máquina, o fim de uma
tarefa) está em `setores/REGIMENTO.md`, que o setor lê inteiro, e em `sala/setores.md`. Para todo agente:

- **A Sala de controle** (`local_67d1fff2-0364-4802-bd15-02561f29cc02`, grupo Orquestrador) é a conversa do Claude
  central. Ela manda a tarefa ao setor, lê a conversa (`list_events`), confere o disco e roda os portões e os verificadores
  independentes.
  - Continuam só nela: commit, `regie`, caça, navegador, render 4K de entrega, XML, linha do tempo, a
    revisão de espectador e as aprovações do Lucas.
  - O gasto de crédito também continua só nela, com uma exceção: os tiles da MapTiler que a Sala liberar no pedido,
    citando o ok do Lucas daquele vídeo.
- **Só a conversa principal da Sala manda mensagem a setor.**
  - Todo pedido a subagente da Sala, em qualquer tarefa, diz que ele não usa `SendMessage` nem `send_message`.
- **A trava do Python é técnica** (desde 24/10/2026). O Lucas, à pergunta "Instalo a trava técnica do Python?": "Instalar
  (Recomendado)". A opção dizia: "Eu escrevo o verificador, testo com um comando que trava e com um que não trava, e registro
  no CLAUDE.md. Se um dia atrapalhar, tiro a linha."
  - O `.claude/settings.json` tem um hook `PreToolUse` (Bash, PowerShell e Monitor) que roda `ferramentas/trava-python.mjs`. Ele
    recusa, antes de rodar, o Python que lê o script pela entrada: `python -`, o heredoc, o here-string, o pipe para o Python, o
    `python < arquivo` e o Python sem script. A recusa volta ao agente com o jeito certo: o script num arquivo, `python -X utf8 -B
    <arquivo>.py` (`APRENDIZADOS.md`, item 89). O `-c` e o `-m` passam.
  - Ele olha também o script `.sh` que o comando grava (`cat > x.sh <<EOF`) ou roda (`bash x.sh`, `./x.sh`, lido do disco), o texto que vai a
    um shell (`bash <<EOF`, `… | bash`), `bash -c`, `eval`, `cmd /c`, `powershell -Command`, `iex` e as crases. O texto entre aspas, o
    comentário e o corpo de heredoc que vai a outro programa não contam: a mensagem de commit passa.
  - Vale para a Sala, os setores, as peças e todo subagente. Um defeito do verificador nunca segura o Bash: ele sai 0.
  - Se atrapalhar um comando legítimo, conserta-se o verificador (com o caso novo na prova); tirar o hook é decisão do Lucas.
- O regimento inteiro está em `setores/REGIMENTO.md`.

## Caça nos bancos pagos: a parte dos agentes

A caça é só da Sala (`sala/caca.md` e a skill `cacar-no-chrome`). Para os agentes:

- **Nada pessoal no git.** `out/<proj>/_pesquisa/caca-relato.md`, `candidatos-caca.json` e as saídas do
  conferente (`conferencia-caca.json`, `conferencia-midia.json` e os `.md` delas) vão para o git: neles, nunca
  e-mail, nome de usuário, ID de conta ou outro dado pessoal lido nos bancos, nos PDFs de licença ou numa
  mensagem. A conta é `lucas-rosa`, e o perfil, "Pessoal" (o Brave; "Lucas", o Chrome das caças do Juneau). O print da página do item se tira sem o topo, onde fica
  a conta (skill, §2.4).

**Quem faz o quê:**
- **`pesquisa-imagens`**: escreve `out/<proj>/_pesquisa/lista-de-caca.json` (o §1 da skill), só com B-roll
  genérico. Não abre banco.
- **O Claude central**: caça, uma caça por vez, só quando o Lucas a pede no chat (a lista existir não basta).
  **Só ele opera o navegador da caça.** Todo pedido a subagente na caça (o `pesquisa-imagens` e o `conferente-de-midia`) diz
  que ele não usa nenhuma ferramenta `mcp__claude-in-chrome__*` nem do painel de navegador do app. Na caça, o
  conferente não se despacha como agente geral: sem ele carregado, o Claude pede ao Lucas uma sessão nova.
- **`conferente-de-midia`** (`.claude/agents/conferente-de-midia.md`): julga, pelo disco, se cada candidato é fiel
  à cena e à fala que vai representar (skill, §2.5), e de novo, sobre o arquivo baixado, se ele é o item da
  prévia e continua servindo (skill, §3, passo 5). Não abre navegador nem banco, não baixa, e o aprovado dele
  não é o sim do Lucas: só decide o que vai à lista e o que pode ser instalado. Sem ele, nenhuma lista vai ao
  Lucas e nenhum arquivo de banco vai à cena.

**Convivência:**
- **Não se caça com render 4K rodando neste PC** (REND-07, `seed/regras/REND.md`). O navegador da caça e o
  Chrome do render disputam a máquina, e o render trava. A caça vai antes ou depois, nunca durante.
- **Nunca se mata navegador por nome**: `taskkill /IM chrome.exe` derruba o Chrome do Lucas e o render juntos, e
  `taskkill /IM brave.exe`, o Brave da caça.
- **O `marcar` grava em `out/<proj>/_media/_caca/`**: a primeira caça num vídeo espera a verificação em curso
  nele terminar.

## A trilha (Epidemic Sound): a parte dos agentes

A trilha é só da Sala (`sala/trilha.md`). Da licença, para todo agente:

- **a música nunca entra em ferramenta de IA nem de reconhecimento de música** ("in any third-party AI tool", "in any music recognition
  systems"): nem o Whisper, nem a ElevenLabs, nem o vidIQ, nem o Claude, com a trilha ou com o vídeo mixado. A transcrição só sobre a
  narração sem música. O termo do MCP proíbe também usar o conteúdo em análise de aprendizado de máquina e contornar o limite de uso;

## A marca

`marca/identidade.md` (cor, tipo, alvos, cenas), `marca/voz.md` (o narrador e o que ele
nunca diz) e `marca/midia.md` (de onde vem cada imagem e o que as licenças deixam fazer).
Todo passo que pede "a marca ativa" lê os três. `marca/prancha.html` é a conferência visual, e
`marca/prancha-documento-card.html` é a da folha de documento e do card de pessoa (Lucas, 27/09/2026; identidade §5),
e a do aviso do ano da foto (Lucas, 27/09/2026; identidade §6). `marca/prancha-fim.html` é a do carimbo e da tela
final do Juneau (Lucas, 28/09/2026; identidade §5, "A tela final e o carimbo do Juneau").
`marca/pronuncias.md` é a folha permanente de pronúncias do canal: a folha de cada vídeo começa dela.
`marca/embalagem.md` é como o canal faz título e miniatura: os moldes das referências, as regras e a receita da miniatura.
`marca/cta.md` é a chamada do canal (a inscrição no meio e o pedido de comentário no fim, "a faixa mínima", aprovada
pelo Lucas em 01/10/2026), do vídeo 2 em diante: as peças em `marca/cta/pecas/`, o momento, quantas vezes, a pergunta e
os comandos. O logo é "A agulha" (`marca/identidade.md` §8, `marca/logo/agulha/`). `marca/vinheta/vinheta.html` é a vinheta de
apresentação, do vídeo 3 em diante (Lucas, 14/10/2026: "Aprovo, com os 2 ajustes (Recomendado)"; identidade §8): ela entra na
assinatura do gancho, termina virando a marca d'água, e o `ferramentas/xml-chamadas.py` a põe no XML como uma chamada.
`marca/acervos/` é o levantamento de acervos livres e oficiais de 27/09/2026, com a licença de cada fonte lida na
origem. É levantamento, não regra. No mesmo dia o Lucas aprovou os quatro grupos da página e as fontes de dados e
fronteiras (`midia.md` §7.3, "A 4ª rodada", e `identidade.md` §6), e a foto da Alaska State Library citando a
fonte (`midia.md` §7.5). O que a página não mostrou não foi aprovado.

Site que recusa leitura automática (403, captcha, verificação de robô) não se contorna: nem por
`curl`, nem por outro cliente, nem trocando cabeçalho. Vale para você e para todo subagente, e o
pedido a ele tem de dizer isso. Use a cópia local, ou confira pelo navegador do app, e pare se o site pedir
verificação.

**O navegador do app, sem o Lucas acompanhando** (decisão do Lucas, 27/09/2026). Ele quis a busca nesses sites
autônoma ("Há alguma forma de deixar isso autônomo? Não quero participar nas próximas"). A pergunta: "Posso buscar
sozinho nos acervos que bloqueiam robô, pelo navegador do app, sem você acompanhando?" A resposta: "Sim, pode
(Recomendado)". A opção dizia: "Eu procuro devagar, só nas páginas necessárias, e paro em qualquer verificação de
robô. Para baixar, te mando uma lista no chat, e você responde "sim" quando puder."
- Onde este arquivo, a marca, uma roupa ou o conferente dizem "pelo navegador do app, com o Lucas vendo", vale esta
  regra: o Lucas não precisa acompanhar.
- Só o Claude central opera o navegador do app (as ferramentas `mcp__Claude_Browser__*`). Subagente, nunca.

**A cópia arquivada de página oficial do Alasca vale como fonte** (decisão do Lucas, 27/09/2026). A pergunta:
"Algumas páginas oficiais do Alasca bloqueiam leitura automática. Os resultados das eleições de 1974 a 2002 e os
folhetos oficiais foram lidos pela cópia pública do web.archive.org. Essa cópia vale como fonte?" A resposta:
"Vale, com a data (Recomendado)". A opção dizia: "A cópia é uma foto pública da página oficial. Registro a data da
cópia, e o crédito na tela continua sendo a Divisão de Eleições do Alasca."
- **O que cobre:** a cópia pública do web.archive.org de **página oficial do Estado do Alasca** que recusou robô:
  a da Divisão de Eleições (`elections.alaska.gov`), a do Legislativo (`akleg.gov`, com o BASIS) e a de outro
  órgão do Estado. Ela vale como fonte **do que a página dizia na data da captura**: o texto, o número, o nome,
  a data. A procedência ou a checagem registra a URL da cópia, a URL original e a **data da captura**, que é a do
  endereço da cópia (`web/<AAAAMMDDhhmmss>/…`). O crédito na tela é o do órgão que publicou a página (no Juneau,
  a Divisão de Eleições do Alasca), nunca o arquivo.
- **O que não cobre:**
  - **a licença e a permissão de uso** de documento (`marca/midia.md` §7.1) ou de foto e vídeo do Estado (§7.5),
    nem o "courtesy" nem o que a origem diz sobre uso. A pergunta tratou da cópia como fonte do texto, e a
    licença pode ter mudado depois da captura. Elas se leem na origem, hoje; se o site recusa robô, no navegador
    do app, com o Lucas vendo;
  - **o fato que muda** (os "Voláteis" do dossiê): continua pedindo a leitura de hoje;
  - **a cópia arquivada de outros sites**: federais (a Library of Congress, o eCFR), jornais, empresas, o
    LinkedIn, prefeituras. Não foi perguntado. Para eles vale a regra de antes: ninguém usa a cópia em checagem
    ou pesquisa, e o item fica NÃO CONFERIDO e vai ao navegador do app, com o Lucas vendo.
- **O que não muda:** a regra acima continua. Bloqueio não se contorna por outro cliente nem trocando cabeçalho.
  Ler a cópia pública arquivada da página oficial do Alasca não é contorno, por decisão do Lucas. Se o próprio
  arquivo recusar a leitura automática, vale a mesma regra: para ali. E o que o arquivo não tiver (página sem
  captura, captura sem o trecho) continua indo ao navegador do app, com o Lucas vendo.

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
- **O que os ofícios citam e não existe aqui**: o `render/capturar.mjs` (o render é o `renderizar.mjs` da
  pré-v1) e o `tradutor-de-tela`. Os portões `qc-*` vieram do molde em 26/09 (ver "Os especialistas"), com as
  listas de fala em português; as que tropeçam em texto inglês estão nos tropeços de lá. Se o canal escrever um
  gate, as listas de fala que ele procura (despedida, mic-check, número por extenso) nascem em inglês. As chaves,
  enums, classes, nomes de lente e o "título" que ele procura no `motivo` continuam em português.

## As regras deste canal

1. **Um dono só: Lucas Rosa.** Se outra pessoa quiser produzir aqui, o caminho é passar
   o canal, não operar junto — dois operadores geram dois relatos que se contradizem.
2. **Esta pasta nunca vai para nuvem sincronizada** — Google Drive, OneDrive, iCloud,
   Dropbox, e nem Área de Trabalho ou Documentos, que o OneDrive costuma engolir. O
   banco corrompe. Só as ENTREGAS vão para o Drive.
3. **O bruto não viaja.** `midia/` fica nesta máquina.
4. **O artefato vence o relato.** Antes de dizer que algo ficou pronto, confira no
   disco. "Não sei provar" é resposta melhor do que um sim otimista.

## Onde está cada assunto

"Aqui" é este núcleo; o resto está em `sala/`. Os nomes são os que as roupas, os ofícios, o regimento e as skills citam.

| Assunto | Onde |
|---|---|
| "A `main` do GitHub sempre em dia"; "Como rodar o motor"; "Versão do motor, e como atualizar"; da pré-v1, o `segredos.mjs`, o `doctor`, o item 8 e "Fora, por ora" | `sala/motor-e-git.md` |
| A cadeia do master e a narração ("Como se gera", a voz, o v4, o gasto da ElevenLabs); "Peças da pré-v1 em uso", itens 1, 2, 3 (o ouvido e os limites) e 9 | `sala/narracao.md` |
| "Peças da pré-v1 em uso", itens 6 e 7 (o Juneau, a estrada e Cascade Point, a base MapTiler, o Landsat, o crédito a 56 px; o crédito do OSM e os cuidados ficaram aqui); a MapTiler liberada em cada vídeo | `sala/mapas-e-maptiler.md` |
| O portão do `research`; o conferente como agente geral; "Uma conversa por peça"; o `package.json`; "O orçamento de imagens do `qc-visual`" e "A limitação do portão vai ao Lucas" (as regras moram nas roupas e no regimento); "Mais mapa", "Mais ilustração" e "O gancho que prende" (as regras moram em `marca/identidade.md` §5); o aceite do ilustrador | `sala/especialistas.md` |
| "Os modelos", "O esforço em extra" e "Três peças voltam ao alto" (as regras dos setores moram no regimento); "O roteiro" em Fable; "O levantamento dos modelos"; "A Sala recomeça a cada etapa"; o ultracode; "O balanço depois do vídeo 3" | `sala/modelos-e-esforco.md` |
| "A autonomia do vídeo 2 em diante"; "A revisão de espectador, antes do Lucas" | `sala/autonomia-e-espectador.md` |
| "Os setores": o pedido, as cinco conversas, as provas, a trava escrita, a peça como subagente, a máquina, o Lucas no setor, o fim de uma tarefa e o vídeo novo | `sala/setores.md` e `setores/REGIMENTO.md` |
| "Do vídeo 5 em diante: mais calmo, mais longo, e o teste dos dois caminhos" | `sala/do-video-5-em-diante.md` |
| "O motor sem rosto do Top10" | `sala/motor-sem-rosto.md` |
| "A linha do tempo pré-render" | `sala/linha-do-tempo.md` |
| "Caça nos bancos pagos" ("O navegador da caça", "Ficam de fora", os tetos; a "Convivência" ficou aqui, na parte dos agentes) | `sala/caca.md` |
| "A trilha: Epidemic Sound" | `sala/trilha.md` |
| "Os avisos no Discord e no Telegram: desligados" | `sala/avisos.md` |
| Como a Sala usa o navegador do app; as fontes do Juneau | `sala/fontes-e-navegador.md` |
| O backup dos pacotes do Premiere no Google Drive (rclone, uma subpasta numerada por vídeo) | `sala/backup-drive.md` |
| O `CLAUDE.md` completo de antes da divisão | `sala/CLAUDE-completo.md` |
