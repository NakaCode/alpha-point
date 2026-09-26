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
   - **A voz** (escolhida pelo Lucas em 26/09/2026, "a B é a melhor"): "Alpha Point - Narrator (conversational,
     calm)", `829pig94w9GefZ9jJQYl`. É um Remix calmo, feito pela API (`out/juneau/_pesquisa/remix-ritmo.mjs`, força
     0,3), da voz de conversa de 24/09 ("Alpha Point - Narrator (conversational)", `iAc9oLyb1zcwD4O3ZTBv`), que por
     sua vez é um Remix da âncora desenhada ("Alpha Point - Narrator (anchor, mid-30s)", `OjaLccTyGvBFh7nx0y4s`). A de
     conversa falava a ~200 palavras/min, e nenhum ajuste a desacelerava: velocidade, "Natural" e `[slowly]` o v3
     ignora. O ritmo vem da voz. A calma fez 171 no Juneau, e o Lucas preferiu assim a esticar (26/09). Fichas de
     cada voz: `marca/vozes.html`.
   - **Como se gera** (decidido pelo Lucas em 25–26/09): **pela API**, com
     `node C:\projetos\regie-v1\src\ferramentas\narrar.mjs <proj>`, **um pedido por parágrafo**. O roteiro fica em
     `out/<proj>/roteiro.md`, com parágrafos separados por linha em branco. Voz, modelo e ajustes vêm de
     `canal.json` › `narracao`: eleven_v3, `stability: 0` (o "Criativo" do site), `pausa_paragrafo_s: 0.07`.
     - A pausa: os trechos da API já trazem uns 0,06 s de silêncio no começo, e o que se ouve entre parágrafos fica
       nos ~0,14 s de uma leitura contínua. Com 0,2 a pausa dobrava, e foi isso que o Lucas mais ouviu como "outra
       voz" (teste às cegas de 26/09).
     - Pelo site, não: acima de ~2.000 caracteres o v3 pode parar antes do fim do texto, sem erro nenhum e numa
       fronteira de frase, o que soa como final natural (5 das 6 gerações longas de 24/09 cortaram).
     - O v3 não tem "request stitching": cada pedido é uma leitura nova.
     - O Multilingual v2 soou mais "lido" (24/09).
     - Rode primeiro o `--simular`, que mostra o custo sem gastar.
     - Em "Criativo", o v3 pode pular ou trocar palavra. Nenhuma geração é aceita sem conferir:
       `out/juneau/_pesquisa/conferir-paragrafos.py <proj>` transcreve e compara parágrafo por parágrafo, e
       `conferir-trechos.py` confere os pontos suspeitos em recorte curto.
     - Parágrafo com erro se refaz sozinho: `narrar.mjs <proj> --refazer=N`.
     - **Depois de qualquer rodada do narrar**, rode `python out/juneau/_pesquisa/tratar-narracao.py <proj>`. O narrar
       não esmaece as pontas dos trechos (estalo no fim de 14 dos 36 parágrafos do Juneau), e remonta a
       `narracao.wav` do zero a cada rodada. O script esmaece as pontas sem mudar tempos, registra o que fez em
       `narracao.json` › `tratamento_canal` e se recusa a tratar duas vezes. Por último, acrescenta a **cauda da tela
       final**: `canal.json` › `narracao.cauda_tela_final_s` (20 s, decidido pelo Lucas em 26/09) de silêncio depois
       da última frase, para os elementos finais do YouTube não cobrirem a narração. O `gerar-master.mjs` recusa
       narração cuja cauda não bate com o `canal.json`.
     - **Sem títulos de capítulo na tela** (Lucas, 26/09): os capítulos vão só na descrição do YouTube. Não ponha
       linha de card no `roteiro.md`.
     - A API pode cortar o último som de um parágrafo (o "-y" de "ferry" no Juneau), e o Whisper escreve a palavra
       mesmo assim, por expectativa. Desconfie de última palavra com probabilidade baixa (< 0,8).
     - O histórico inteiro está em `out/juneau/_pesquisa/narracao-conferencia.md`.
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
     cada; o saldo foi de 3.088.067 a 3.077.039). Total de 31.232. Em 25/09, com o ok do Lucas, 4.553 para
     refazer os blocos 2 e 3 pela API: 4.324 nos 23 parágrafos e 229 no parágrafo 8 refeito. Os recibos batem
     com o contador da conta. A narração inteira pede um ok próprio. **Em 26/09 o Lucas liberou o gasto para chegar
     ao cenário ideal do Juneau** ("Não tem problema gastar crédito a troco de chegarmos no cenário ideal"): testes
     e a narração inteira pela API. Ainda assim, diga o que vai gastar antes de cada rodada. Gasto em 26/09: 2.673 no
     teste de velocidade, 2.781 em 3 rodadas de Remix, 1.083 no teste da voz calma escolhida, 6.621 na narração
     inteira do Juneau e 173 no parágrafo 32 refeito: 13.331 no dia (`narracao-conferencia.md`);
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
   duas do bloco 2 e as duas do bloco 3 param antes do fim. **Os blocos 2 e 3 foram refeitos pela API em 25/09**
   (`out/juneau-voz/`, 23 parágrafos, todos completos). `out/juneau/_pesquisa/montar-narracao.py` junta a 1b com
   eles: `out/juneau/_narracao/narracao-completa.wav`, com 9:14. Na conferência do arquivo inteiro, 99,0 % das
   palavras batem com o texto aprovado, e nenhuma foi pulada. **O Lucas ouviu em 25/09: a voz muda em 3:09.** Pelo
   diagnóstico e pelo teste às cegas, o que pesava era a pausa entre parágrafos dobrada. Em 26/09, a narração foi
   remontada sem gasto com a pausa da 1b (9:11); o Lucas achou a troca "perceptível, mas nada muito incômodo".
   A voz corria a 200 palavras/min. **Tudo isso foi superado em 26/09:** a narração inteira foi refeita pela API com
   a voz calma, em `out/juneau/narracao.wav` (10:46, 171 palavras/min, os 36 parágrafos de um jeito só, tratada
   por `tratar-narracao.py`). Verificação final: 100 % das palavras; o parágrafo 32 foi refeito porque a API cortou
   o "-y" de "ferry". **O Lucas aprovou em 26/09** ("pode seguir com o master"). As gerações antigas (1b, `out/juneau-voz/`,
   `narracao-completa.wav`) ficam como histórico. Tudo em `narracao-conferencia.md`.
2. **`narracao.wav` e master preto sintético** pelo gerador da pré-v1 (`garantirMasterSintetico`, com carimbo).
   **Feito em 26/09:** `out/juneau/_pesquisa/gerar-master.mjs juneau` chama o gerador direto (o finalizar só o chama
   no fim), em 3840×2160 e 30 fps: `out/juneau/_media/_master.mp4`, com −14,1 LUFS e o carimbo da narração tratada. O script
   recusa narração sem `tratamento_canal`. Refeito no mesmo dia com a cauda da tela final: 11:06 (10:46 de fala e
   20 s de silêncio); a fala ficou idêntica, amostra por amostra. **O Juneau foi aberto na linha da Régie em 26/09**
   (`regie open juneau "Alaska Voted for a New Capital in 1974. It Was Never Built."`, no passo `ingest`).
   Cuidado: a v0.1.0 não tem `--help` nos verbos; `regie open --help` abre um vídeo chamado "--help". Aconteceu,
   e o registro foi removido do banco com cópia de segurança em `db/antes-de-tirar-help-*.canal.db`.
3. **Conferência palavra a palavra e `words.json`** no contrato da pré-v1, sem o Scribe (é pago):
   `python out/juneau/_pesquisa/ingest-local.py <proj>`. **Feito para o Juneau em 26/09** (laudo aprovado em
   `out/juneau/transcricao.json`, sem commit). O relógio é híbrido:
   - as palavras são as do texto aprovado, na grafia da **cópia para a voz** (aliases e números por extenso;
     `roteiros/<proj>/voz/trocas.md`): entidade e grafia de tela saem do `roteiro-narrador.md`, não do `words.json`;
   - o tempo vem do alinhamento por caractere que a ElevenLabs guarda no histórico
     (`out/juneau/_pesquisa/alinhamento-elevenlabs.mjs`, só GET, sem gasto, com cache), preso ao som nas pausas;
   - o faster-whisper local (large-v3, `language="en"`, só do cache local, sem rede) é o ouvido: confere o que a voz
     disse, decide a fronteira das pausas sem pontuação e mede a cobertura. Normaliza os números antes de comparar.

   O que a voz disse diferente do texto fica em `transcricao.json` › `alinhamento.conteudo`. `--aceitar=N` só aceita
   o que o laudo anterior do mesmo áudio mostrava pendente, depois de ouvir. Os 8 aceites do Juneau foram julgados
   pelo Whisper em recorte curto, sem escuta humana. No laudo, `aceitos` tem o sentido da pré-v1 (trechos com a
   cobertura aceita; no Juneau, nenhum) e `aceites` guarda cada item aceito.

   **Juneau, verificado em 26/09** (três verificadores: som, contrato e código): 52 fronteiras de pausa julgadas pelo
   som, todas certas; erro mediano de 0,03 s no miolo das frases (p90 0,075 s); nenhuma palavra em pausa nem na cauda;
   `mapa-limpo --conferir` passa. **Limites do script, para os próximos vídeos** (o relógio do Juneau não os tem, mas
   os portões não os pegariam):
   - uma pausa de 0,15 s ou mais DENTRO de uma palavra ainda pode passar como fronteira (o recorte curto larga o
     pedaço da palavra). Em teste com silêncio posto dentro de 4 palavras, 2 passaram;
   - repetição da voz ("I decided I decided") passa por tudo: o Whisper limpa a repetição. Só o ouvido humano pega;
     por isso a escuta do Lucas antes do master continua obrigatória;
   - a concordância com o Whisper tolera 1,0 s entre âncoras, e o consumidor tolera 0,25 s.
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
   - a divisa em branco a 35 % quase sumia sobre o campo de gelo. O Lucas pediu o contorno escuro por baixo
     (25/09), e ele virou regra da §6 (`--fronteira-contorno-*` no `marca/tokens.css`).
   **A base do Juneau é a MapTiler** (o Lucas decidiu em 26/09: "será o maptiler"): `canal.json` › `mapa.perfil:
   "maptiler"`, que o `preparar-cena` lê. O Landsat fica como teste. Toda cena de mapa leva o crédito
   `© MapTiler © OpenStreetMap contributors` na tela, mais a linha na descrição.
8. **XML do Premiere** pelo `finalizar.mjs`, primeiro com `--sem-trilha`. Será a primeira abertura real dele no
   Windows.
9. Do vídeo 2 em diante, **narração pela API** com `narrar.mjs` (mesma voz, modelo, estabilidade e blocos).

Fora, por ora: `regie atualizar` (até sair a tag); rotinas agendadas; git autônomo e o CI `canal.yml`; caça
automatizada em bancos pagos (os termos proíbem robô); `gerar-imagem`; `marca gerar` (o `marca.json` da pré-v1
não comporta a paleta por papéis do canal). O levantamento inteiro, com arquivo e linha de cada coisa, está em
`midia/_motor/pre-v1-levantamento-2026-09-25.json`, só nesta máquina.

## Os especialistas (desde 26/09/2026)

O Lucas mandou instalar 15 especialistas da pré-v1. Eles estão em `.claude/agents/<id>.md` e o apoio que mandam
rodar e ler está em `scripts/`, `contratos/`, `knowledge/`, `seed/`, `regua/`, `infra/`, `templates-cena/`
(com o `_rig.js`), `assets/`, `src/agent/` e `marca/_neutra/`. Tudo foi copiado byte a byte do molde da
pré-v1 (commit `7ab9543`), com o sha256 conferido. Os `ORIGEM.json` (na raiz, em `scripts/`, `contratos/` e
`regua/`) guardam a procedência, e o `.gitattributes` guarda `assets/` sem conversão de fim de linha, para o
sha256 valer também num clone. **Nada disso se edita**: a próxima versão do motor passaria por cima, e o sha256
deixaria de provar a origem. O gosto do canal vai na roupa. O `package.json` do molde não veio, porque o npm
não está autorizado.

**Quem entra em que passo** da linha (`regie graph`):
- `mirror`: `montador` (`words.json` + `roteiros/<proj>/roteiro-narrador.md` → `espelho.json`);
- `research`: `pesquisa-imagens`, `-documentos`, `-dados`, `-geo`, `-pessoas`, `-logos`
  (`out/<proj>/_pesquisa/pauta-<tipo>.json`);
- `art_direction`: `diretor-de-arte` (`conceito-visual.json`);
- `conducting`: `regente-de-imagem` (`regencia.json`);
- `screen_text`: `redator-de-tela` (`textos-tela.json`). Junto dele, o `verificador-de-fatos` dá veredito a toda
  afirmação que vai à tela ou que a pesquisa trouxe;
- `art`: `editor-de-arte` (as cenas HTML) e `mapista` (as cenas de mapa);
- `qc`: `qc-visual` (`qc/<cena>.laudo.json`). Ele julga, não conserta;
- `designer-de-navegacao`: não tem trabalho no Juneau. Card de capítulo, título de tópico e sumário não vão à
  tela (o Lucas decidiu em 26/09 que os capítulos ficam só na descrição).

**Como se despacha:** quem despacha é o Claude central, um passo por vez, e o pedido diz o `<proj>` e o passo.
O artefato vence o relato: antes de `regie advance`, confira no disco o arquivo que o especialista diz ter
gravado. Portão ausente do disco, ou que sai com exit 2 chamado com o alvo certo ("Os scripts do canal",
abaixo), é **NÃO MEDIDO**, com o nome do portão. Nunca é simulado nem "medido no olho": olhar um quadro
(`quadro.mjs`, ou o render e o ffmpeg) é olhar, não é portão.

**Os modelos** estão no frontmatter, e **cada especialista roda no modelo com que vem do motor** (decisão do
Lucas, 26/09/2026: "os que vierem com fable devem continuar como fable, os que vierem opus como opus"). Não passe
outro modelo no despacho:
- `diretor-de-arte` e `editor-de-arte` usam `fable` (o plano do Lucas é o Max);
- `qc-visual` usa `sonnet`;
- os outros usam `opus`.

**O roteiro** dos próximos vídeos é escrito aqui, em **Fable 5.1** (Lucas, 26/09: "pode ser por aqui sim"), e não
no claude.ai: o navegador gasta do mesmo limite da assinatura Max (`C:/projetos/regie-v1/docs/CONTAS.md`, "Uma cota
para tudo") e não tem as fontes locais nem a bancada do canal.

Ainda não se viu o app subir um agente com `fable`. Se não subir, avise o Lucas; não edite o `.md`. Agente novo
em `.claude/agents/` só carrega numa **sessão nova** do app.

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
  Antes da primeira cena de mapa renderizada, avise o Lucas e anote o contador da MapTiler.

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

Sem `npm.cmd install`, que o Lucas ainda não autorizou, saem NÃO MEDIDO (exit 2) os portões que abrem a cena
no Chrome e os que medem imagem:
- `shot`, `probe-elemento`, `check-overlap`, `qc-carga` e `qc-tamanho`;
- `qc-contrato`, na parte que roda a cena;
- `qc-pais-bandeira`, `qc-fora-do-quadro`, `qc-credito-fantasma`, `qc-video-avanca`, `qc-rodape-contraste`,
  `_audit-til` e `medir-imagem`.

Por causa deles, o `qc-cena` não dá carimbo a nenhuma cena.

Não se rodam:
- `stock/_phil.mjs`, `stock/_contato.mjs` e `_capturar-pagina.mjs`, que mandam cabeçalho de navegador (a regra
  anti-robô de "A marca"). Site que recusa o User-Agent do canal para ali;
- os scripts de banco pago, porque a caça automatizada em banco pago está fora: `stock/setup-login`,
  `sessao-conferir`, `chrome-daemon`, `registrar-download`, `api-oficial` e `lib/teto-shutterstock`;
- o `narrar.mjs` e o `transcrever.mjs` da pré-v1, que gastam crédito e refazem o relógio.

O `stock/_commons-baixar` não trava licença, então confira cada uma.

**Tropeços conhecidos do apoio** (as roupas apontam para esta lista; a origem de cada um está no
`APRENDIZADOS.md`, item 36):
- `renderizar.mjs` sem `--4k` grava a cena 4k-native em 1080p, e o carimbo (`<id>.mp4.de-html`) guarda a
  resolução: um render sem `--4k` obriga a renderizar de novo e, em cena de mapa, a pagar a MapTiler de novo.
  Todo render, inclusive o de prova, leva `--4k`, e o clipe só vale se o carimbo termina em `2160p`;
- `qc-pais-bandeira` só reconhece nome de país em português (`CANADÁ`, não `CANADA`): nem com npm ele conta
  país escrito em inglês;
- `lib/erratas-gravadas.mjs` procura o laudo em `out/<proj>/qc-roteiro/entrada/`, e o deste canal está em
  `roteiros/<proj>/qc-roteiro/`: a saída dele é NÃO MEDIDO, e o laudo se lê direto;
- `decupagem/corrigir-nomes.mjs` só corrige `words-final`/`words-limpo`: aqui sai com exit 2, e o `words.json`
  nunca se corrige;
- `jq`, `turf`, `mapshaper`, `identify` e `pdftoppm` não existem nesta máquina. O PyMuPDF importa no Python,
  mas não foi testado para rasterizar PDF;
- `quadro.mjs` com satélite, `geo-recorte-bbox --nome` e `geo-osm-rota`: "Peças da pré-v1 em uso", itens 6 e 7;
- `buscar-midia` lê o `marca/midia.json` do canal (desde 26/09, com as fontes que o Lucas escolheu; `midia.md`
  §7), e tira da lista o que tem menos de 1600 px de largura (conta em `abaixo_do_minimo`). A NARA só devolve
  imagem. A Library of Congress e o Internet Archive vêm desligados: a pré-v1 registra 403 do Cloudflare da LoC a
  toda consulta por script (23/09);
- o upscale não-generativo que o `pesquisa-pessoas` pede (`image.upscale.classic`) não existe no canal nem na
  pré-v1;
- `src/agent/data-tools.mjs` só cobre IBGE e World Bank;
- o `catalogo` da pré-v1 lê o cache da máquina e o acervo do motor, não `assets/geojson/` (que veio vazio);
- `navegacao/gerar.mjs` está inoperante: a entrada vinha do `curador-de-acervo`, que não veio, e a saída não tem
  leitor;
- relevo (`terrain-rgb-v2`) e câmera 3D da MapTiler não têm prova registrada nesta máquina;
- as bandeiras de `assets/flags/` variam de tamanho (de 160 a 2560 px de largura): meça cada uma com o
  `ffprobe`. As do Juneau, `us.png` (320 × 168) e `ca.png` (320 × 160), são pequenas para o círculo de 640 px da
  PRANCHA.

## A marca

`marca/identidade.md` (cor, tipo, alvos, cenas), `marca/voz.md` (o narrador e o que ele
nunca diz) e `marca/midia.md` (de onde vem cada imagem e o que as licenças deixam fazer).
Todo passo que pede "a marca ativa" lê os três. `marca/prancha.html` é a conferência visual.
`marca/pronuncias.md` é a folha permanente de pronúncias do canal: a folha de cada vídeo começa dela.
`marca/embalagem.md` é como o canal faz título e miniatura: os moldes das referências, as regras e a receita da miniatura.

Site que recusa leitura automática (403, captcha, verificação de robô) não se contorna: nem por
`curl`, nem por outro cliente, nem trocando cabeçalho. Vale para você e para todo subagente, e o
pedido a ele tem de dizer isso. Use a cópia local, ou confira pelo navegador do app com o Lucas vendo,
e pare se o site pedir verificação. A cópia arquivada (web.archive.org e afins) de um site que recusou robô
vale como cópia ou conta como contorno? DECISÃO DO LUCAS PENDENTE (no Juneau, em 23/09, as eleições foram lidas
assim: `roteiros/juneau/roteiro-editor.md` › "Voláteis"). Até ele decidir, ninguém a usa em checagem ou
pesquisa nova: o item fica NÃO CONFERIDO e vai ao navegador do app.

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
