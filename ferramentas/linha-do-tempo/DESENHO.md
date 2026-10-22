# A linha do tempo pré-render: o desenho

Este é o desenho que guia a construção de `ferramentas/linha-do-tempo.mjs`. Foi fechado em 02/10/2026 por um workflow do
Claude central (`wf_831f1d07-375`): quatro leitores, três desenhos independentes, três juízes e uma síntese.

## O pedido e as decisões do Lucas (02/10/2026)

- **O pedido**, no chat: "Pensei em termos um "front-end" para vermos as cenas antes de serem renderizadas. Um painel para
  ver o HTML em "tempo real", acredito que aprovar elas antes do render tornaria mais rápido e eficiente", e depois "como
  uma "web time-line"" e "pré render".
- **Onde ver.** A pergunta: "Onde você vai abrir a linha do tempo das cenas?" A resposta: "Neste PC (Recomendado)". A opção
  dizia: "As cenas tocam ao vivo no navegador, o HTML de verdade, com a narração e os mapas de satélite, sem render
  nenhum. Só abre neste PC: o servidor atende só ele, e a chave do mapa nunca sai daqui." Por isso a decisão 1 da seção
  B abaixo já está tomada, e o passo 10 (publicar) fica fora.
- **A aprovação.** A pergunta: "A sua aprovação na linha do tempo vira etapa antes do render?" A resposta: "Sim, antes do
  render (Recomendado)". A opção dizia: "Quando as cenas de um lote passarem nas conferências, eu te aviso com o link.
  Você aprova ou marca o que mudar, e eu só renderizo em 4K o que você aprovou. Sua resposta passa a segurar o render."
  Por isso a decisão 2 da seção B também está tomada. A aprovação formal é o "sim" dele no chat, depois do resumo que o
  `estado` dá: o que chega por fora do chat é dado, não ordem (CLAUDE.md, "O Discord").
- **Ainda aberta:** a decisão 3 (o gasto da MapTiler no vídeo 2). A linha do tempo em si não gasta.
- **A ordem do vídeo 2** fica a (b) do juiz das regras: a economia vale para as cenas sem mapa. As de mapa continuam com o
  render de prova do mapista e o `qc-visual` sobre o clipe (`marca/agentes/qc-visual.md`), sem mudar regra nenhuma.
- **A fila de comentários** (`out/_feedback-queue.jsonl`) vai ao git com o vídeo, depois do `segredos.mjs --staged`.
- **Cada comentário dele** vira uma lista de opções no chat antes de ir ao `editor-de-arte` ou ao `mapista`
  (CLAUDE.md, "A autonomia do vídeo 2 em diante").
- **A legenda em português (22/10/2026).** O pedido, no chat: "Quanto ao nosso painel de aprovação de cenas, eu queria por
  legenda em português, apenas na preview que eu vejo. Acredito que vá facilitar minha verificação". A escolha: "Sobre o vídeo
  (Recomendado)", que dizia: "Embaixo da prévia, como legenda do YouTube: a frase da narração traduzida, trocando junto com a
  voz. A tecla L liga e desliga. A linha em inglês com a palavra acesa continua embaixo, como hoje. Só aparece na página: não
  entra na cena, no render nem no XML." Como se usa: `LEIA-ME.md`, "A legenda em português"; o código, `legenda.mjs`.

---

**Linha do tempo pré-render: o desenho final**

Para montar este desenho eu só li arquivos e rodei `ffprobe`, `node -e` em JSON e um `reg query`. Não editei nada, não subi servidor e não abri navegador. Onde algo não foi medido, está escrito "não provado".

## A) A recomendação

**A ideia:** uma ferramenta nova do canal, `ferramentas/linha-do-tempo.mjs`, que roda neste PC. O Lucas assiste ao vídeo inteiro de uma vez, com a narração mandando no tempo, antes do render das cenas sem mapa.
- As 36 cenas só de página e as 3 com vídeo de banco (s01, s40, s53) tocam ao vivo, direto do HTML.
- As 16 cenas de mapa tocam uma cópia leve do clipe 4K que o mapista já renderiza no passo `art`, como prova (`marca/agentes/mapista.md:231-235`). É isso que o `qc-visual` já exige: "Nunca aprove cena de mapa sem quadro" (`marca/agentes/qc-visual.md:70-76`).
- Assim o mapa aparece com o satélite de verdade, a chave nunca chega ao navegador e assistir não pede tiles à MapTiler.

### A.1 O que o Lucas vê e faz
- **A tela:**
  - em cima, o palco 16:9;
  - embaixo, uma faixa de 0 a 11:06 com os 55 blocos, cada um com a largura da sua duração;
  - a agulha;
  - a fala com a palavra do momento acesa (`out/<proj>/words.json`).
- **Quatro estados por bloco:**
  - cinza: não vista nesta versão;
  - verde: vista nesta versão;
  - laranja: tem comentário aberto;
  - listrado: mapa sem satélite (rascunho).
  
  Um ponto marca "nova versão para ver". O filtro "só o que mudou" mostra as que precisam de olho de novo.
- **O que ele faz:**
  - ▶ toca tudo;
  - clicar na faixa leva a qualquer ponto;
  - **C**, ou o botão "Comentar aqui", pausa e abre a caixa já com a cena e o instante;
  - embaixo aparecem as respostas do Claude a cada comentário.
- **Não há botão "Aprovar".** A aprovação é uma frase no chat (B, decisão 2). Os números técnicos (quadros por segundo, deriva) vão para um arquivo que o Claude lê, não para a tela dele.

### A.2 Os arquivos
Tudo fica em `ferramentas/`, porque `scripts/` é do molde e "Nada disso se edita" (`CLAUDE.md:303`).
- **`ferramentas/linha-do-tempo.mjs`**, a linha de comando, com estes verbos:
  - `servir <proj> [--porta=8790]`;
  - `estado <proj> [--json]`;
  - `proxies <proj>`;
  - `quadros <proj> [--cena=] [--fps=2]`;
  - `aprovar <proj> --mensagem= --hora=`;
  - `conferir <proj> [--depois-do-render]`.
- **`ferramentas/linha-do-tempo/linha.mjs`**, a lista de cenas:
  - usa o `planejarJanelas` do motor (`regie-v1/src/ferramentas/montar-previa.mjs:48`), importado por `file:///`. Ele tira os `_mergedInto` e põe cada cena de `round(inSec×30)` até o início da seguinte;
  - no Juneau dá 55 cenas. Conferi: 61 segmentos, com s09 e s10 fundidas na s08, s13 na s12, s43 na s42, e s51 e s52 na s50. A s09 órfã fica fora;
  - o resultado bate com os 55 `clipitem` de `out/juneau/juneau-POS.xml` (s01 0–408 … s63 19382–19982; conferido);
  - a versão de cada cena é o sha1 dos bytes do HTML, o mesmo do carimbo do render (`regie-v1/src/ferramentas/renderizar.mjs:120`). A ele se juntam o tamanho e a data de cada arquivo local que a cena de fato carregou: a página os lê de `performance.getEntriesByType("resource")` no iframe. Assim, trocar uma foto sem mexer no HTML também derruba o "visto".
- **`ferramentas/linha-do-tempo/servidor.mjs`**: rotas e segurança (A.3).
- **`ferramentas/linha-do-tempo/mapa.mjs`**, duas coisas:
  - os proxies: o ffmpeg tira do clipe 4K uma cópia em 1080p, H.264 com GOP normal e `+faststart`, em `out/<proj>/_tmp/linha-do-tempo/proxies/<id>-<sha1:8>.mp4`. Só sai cópia de clipe com carimbo em dia, pelo `carimboConfere(…, sha1, "2160p")` (`renderizar.mjs:132`);
  - o rascunho de mapa (A.5).
- **`ferramentas/linha-do-tempo/pagina.html|js|css`**, sem npm: o relógio, os dois iframes e a interface.
- **Onde se grava:**
  - `out/<proj>/_tmp/linha-do-tempo/{vistos,medidas}.jsonl`, fora do git (`.gitignore:38`);
  - `out/<proj>/qc/_aprovacao-lucas.jsonl`, que vai ao git.

### A.3 Rotas e segurança
- **O servidor:** é próprio, escuta só em `127.0.0.1:8790` (a galeria usa a 8777) e serve um projeto por vez.
- **As rotas:**
  - `GET /` é a página. Ela leva um token aleatório da sessão;
  - `GET /api/linha`: as cenas, os quadros, a versão, o tipo (dom, vídeo ou mapa) e o modo do mapa (proxy ou rascunho);
  - `GET /api/versao`: a página pergunta a cada 2 s. Pela data e pelo tamanho, o sha1 só se recalcula no arquivo que mudou. A cena atual ou a próxima se recarrega sozinha;
  - `GET /api/comentarios`: a fila do projeto, com as notas do Claude;
  - `POST /api/comentar`;
  - `POST /api/visto`;
  - `POST /api/medida`;
  - `GET /mapa/{base|dem}/{z}/{x}/{y}`: o tile de rascunho.
- **Travas copiadas da galeria:**
  - o Host tem de ser `127.0.0.1:<porta>` ou `localhost:<porta>`, senão 421 (`scripts/serve-galeria.mjs:168-171`);
  - no POST, o `Origin` é conferido (403) e o corpo tem de ser `application/json` (415) (`:181-185`);
  - qualquer outro método recebe 405 (`:199`);
  - o corpo vai até 64 KB (`:69`) e o texto até 4.000 caracteres (`scripts/galeria/fila.mjs:44`);
  - o POST exige ainda o token da sessão.
- **Lista fechada do que se serve.** É conferida depois do `resolverNoCanal` (`scripts/galeria/caminho.mjs:79`, que já resolve o `realpath` e aplica a regra do ponto) e comparada **em minúsculas**, porque o NTFS não distingue maiúsculas. A lista:
  - `out/<p>/graphics/<id>.html`, só as cenas da lista;
  - `out/<p>/_media/{_vendor,geo,foto,footage,documento,pessoa}/**`, que é tudo o que os 56 HTML citam (conferi com grep). Ficam de fora `_caca` e `_master.mp4`;
  - `out/<p>/narracao.wav` e `out/<p>/words.json`;
  - os proxies;
  - `marca/tokens.css` e `marca/fontes/**`.
  
  O resto recebe 404. Isso fecha a brecha da galeria, que entrega `db/` e `midia/` a qualquer GET local.
- **A cena sai byte a byte como está no disco.** Nada se injeta no HTML. A única resposta trocada é `_media/_vendor/perfil-mapa.js`, no rascunho.
- **Cache:**
  - mídia, fontes, `_vendor` e `geo` vão com ETag e `private, max-age=3600`;
  - HTML e as rotas `/api` vão com `no-store`.
  
  A galeria manda `no-store` para tudo que não é mídia, e o maplibre de 800 KB volta a cada cena.
- **Mídia por Range (206):** o servidor copia o `servirRange` e a tabela MIME (`serve-galeria.mjs:71-78, 93-125`), porque não são exportados.
- **Na partida, ele confere o motor:** compara o sha256 dos módulos importados com o `sha256_aqui` de `scripts/ORIGEM.json`. Se o motor mudou, ele para e diz.

### A.4 O relógio: como a cena toca presa à narração
- **O mestre é o `<audio>` da `narracao.wav`.** O tempo segue o `performance.now()` a partir de uma âncora, refeita quando a diferença para `audio.currentTime` passa de 50 ms.
- **A cada quadro da tela (rAF):**
  - `F = floor(t×30)`;
  - uma busca binária acha a cena;
  - `t_cena = (F − iniF)/30`.
  
  É a mesma amostragem `i/30` do render (`renderizar.mjs:487`).
- **Dois iframes que se revezam:** a cena atual e a próxima, que se prepara com `opacity:0`. Na troca, a antiga vira `about:blank`. Nunca há mais de 2 contextos WebGL; o estúdio travou com até 12 iframes.
  - Se a próxima não ficou pronta no quadro da troca, a narração espera, com o aviso "carregando a próxima cena".
  - Pular para um ponto prepara aquela cena antes de tocar.
- **A preparação é a do render** (`renderizar.mjs:452-475`):
  - injetar no iframe `*{will-change:auto!important}`;
  - carregar as 5 faces do `marca/tokens.css:38-56` (Marca, MarcaSec, MarcaAlt, MarcaDoc 400 e MarcaDoc 700) com `document.fonts.load`;
  - `fonts.ready`;
  - `__ready`;
  - `__fotosProntas`, `__videoPronto` e `__logoPronta`, com teto de 12 s;
  - `await __prepararCaptura()`;
  - conferir `__erroCena`, `__fontesFaltando` e as faces com status `error`. Qualquer problema vira um bloco vermelho e uma linha nas medidas.
- **`__PREVIEW` fica indefinido** e o `SCRIPT_PREVIEW` da galeria não entra. Com isso:
  - as cenas de mapa não ligam o laço próprio, porque o teste é `=== true` (`out/juneau/graphics/s05.html:751`);
  - o `RIG.seekTo` volta a posicionar o vídeo (o mesmo RIG, copiado dentro de cada cena, em `s01.html:211-216`).
- **Cenas de página (36):** a página chama `__renderAt(t_cena)` a cada rAF, sempre com o t mais novo e sem fila. Ela mede o tempo de cada chamada.
- **Cenas de vídeo (s01, s40, s53):** a página troca, por fora e no iframe (é a mesma origem), o setter de `HTMLMediaElement.prototype.currentTime`. A galeria faz o mesmo em `scripts/galeria/paginas.mjs:225`.
  - Com o vídeo tocando e o alvo a até 2 quadros do quadro real, o setter não faz seek e dispara um `seeked` sintético. A Promise do `seekTo` resolve (`s01.html:216`), e o vídeo segue por `play()` (mudo).
  - Se a diferença for maior, faz o seek de verdade e volta a tocar.
  - Se o alvo para, o vídeo pausa:
    - a s01 congela antes do `corte2` e no quadro 339 (`s01.html:378-380`);
    - a s40 congela no quadro 294 (`s40.html:395-396`);
    - na s53, o clipe que a cena deixa de posicionar pausa (`s53.html:266-268`).
  - Vídeo parado, como o quadro aéreo da s03, passa direto.
- **Na pausa, o quadro exato:** `await __renderAt(t)`, `requestVideoFrameCallback` com teto de 400 ms, `fonts.ready` e 2 rAF, como o `quadroJS` (`renderizar.mjs:339-346`). É o mesmo t e o mesmo estado do render, não os mesmos pixels (D).
- **Plano B por cena,** se a medida mostrar engasgo:
  - toca o proxy do clipe, se houver clipe em dia;
  - senão, "posiciona só na pausa", com aviso.

### A.5 Mapas e MapTiler
- **Com clipe 4K em dia:** a página toca o proxy num `<video>`, com `play()` e ressincronia quando a deriva passa de 1 quadro. É o satélite real e o relevo real (a s44 inclusive), sem gasto novo.
- **Sem clipe em dia** (o intervalo entre um conserto do mapista e o render de prova dele), a cena toca **em rascunho**:
  - o servidor responde, no lugar do arquivo, um `perfil-mapa.js` com o `perfil-mapa.json` real e só `base.tiles` e `dem.tiles` trocados por `/mapa/...`. Também define `window.__chaves={MAPTILER_KEY:"rascunho"}`, um marcador, não a chave;
  - funciona porque o perfil carrega em `s05.html:134`, antes do script da cena em `:342`. A cena só testa se a chave existe (`:427-432`) e manda toda URL `http(s)` pelo fetch dela (`:475`, `:553-562`);
  - os tiles vêm de `sharp` (já em `node_modules`): um JPEG cinza com grade e "RASCUNHO z/x/y", para a câmera aparecer andando, e um DEM WebP sem perda com RGB 1/134/160, que é 0 m no `mapbox`;
  - os dois passam no `defeitoDaImagem` (`s05.html:488-504`): o JPEG fecha com FF D9, e o WebP tem o tamanho declarado;
  - o bloco fica listrado e diz "mapa sem satélite". A s44 diz também "relevo plano: anel e rótulos fora do lugar", porque `map.project` usa o relevo (`s44.html:71, 1153-1181`).
- **Custo da linha do tempo na MapTiler: zero.** Não existe código que fale com `api.maptiler.com` nem que leia `chaves.env`. O satélite ao vivo por repasse fica fora (D).
- **O gasto que continua** é o de antes: o render de prova do mapista e o `qc-cena`, que "conta como render" (`CLAUDE.md:524`). Para o vídeo 2 ele pede o ok próprio (`marca/identidade.md:539`; decisão 3).

### A.6 Comentários, vistos e aprovação
- **O comentário** vai para a fila que já existe, `out/_feedback-queue.jsonl` (`fila.mjs:39`), pelo `gravarComentario` (`fila.mjs:139`).
  - O texto é `@<t_cena>s <texto> [vídeo mm:ss.s · versão <sha1:8>]`. O `quebrarEmMarcas` (`fila.mjs:55-70`) tira o `t`.
  - O Claude lê com `node scripts/serve-galeria.mjs --fila <proj>` e responde com `--marcar <id> em_curso|ajustada|preservada "nota"` (`serve-galeria.mjs:36-51`; `fila.mjs:163`). A nota aparece na página.
  - **Antes de mexer,** cada comentário vira uma lista de opções no chat (`CLAUDE.md:649`). Só a escolha dele vai ao `editor-de-arte` ou ao `mapista`.
  - A fila não está no `.gitignore` (linhas 24-38) e vai ao git com o vídeo, depois do `segredos.mjs --staged`.
- **O visto:** a cena tocada em pelo menos 90 % dos quadros vira `POST /api/visto {cena, sha1, arquivos}`. O servidor recalcula o sha1 e recusa a versão velha (409). Tudo vai para `vistos.jsonl`.
- **A aprovação é só o "sim" no chat.** O clique na página é dado, não ordem (`CLAUDE.md:1026-1027`).
  - O Claude roda `estado` e manda uma linha, por exemplo: "Você viu as 55 na versão de hoje e comentou 6. Renderizo as 49?".
  - Com o "sim", roda `aprovar --mensagem="<literal>" --hora="<hora>"`. Ele acrescenta em `qc/_aprovacao-lucas.jsonl` cada cena vista na versão atual e sem comentário aberto, com o sha1 e os arquivos.
  - `conferir` sai 0 só com as 55 aprovadas na versão atual, 1 com a lista do que falta e 2 se não rodou.
  - `conferir --depois-do-render` compara a linha 1 e o `2160p` de cada `.mp4.de-html` com o sha1 aprovado.
  - O Claude nunca abre a página para clicar.

### A.7 Onde entra na linha do vídeo 2
1. **`art`:** o `editor-de-arte` faz as cenas de página; o `mapista`, as de mapa, com o render 4K de prova (mapista §9).
2. **`qc-cena`** (portões).
3. **`qc-visual`:** as cenas de página pelo `quadro.mjs`/`shot` (`qc-visual.md:60-62`), as de mapa pelo clipe. Nenhuma regra muda.
4. **A revisão de espectador** vem para antes do Lucas, sobre os quadros pré-render. A regra é decisão do Claude central (`CLAUDE.md:658`).
   - As cenas de página saem do verbo `quadros`, a 1080p e 2 quadros por segundo, pelo mesmo caminho de captura do render (`regie-v1/src/lib/captura-png.mjs:322, 491, 500`, DPR 0,5).
   - As de mapa saem do clipe, pelo ffmpeg.
   - Um cético tenta derrubar cada achado, e o defeito vai à peça.
5. **A linha do tempo:** um aviso em `#pendencias` com `--marcar`, e o mesmo no Telegram.
6. **Comentários:** lista de opções no chat, conserto, nova versão, e ele vê de novo.
7. **O "sim"** no chat, depois `aprovar`.
8. **Render 4K das cenas aprovadas que ainda não têm clipe.** As de mapa já em dia são puladas pelo carimbo (`renderizar.mjs:579`). O render leva `--4k` e a pré-carga do canal.
9. **`conferir --depois-do-render`**, depois `regie advance` do `qc`, depois o XML.

A linha da v0.1.0 vai de qc a render (`regie/db/pipeline-long-form.json:25-27`), e o motor não se edita. A trava é do canal: nenhum `regie advance` do `qc` sem `conferir` sair 0 (se ele escolher a trava, B2).

### A.8 O que economiza, pelos números do Juneau
- **A passada 4K inteira** leva cerca de 7.765 s. As 16 de mapa levam cerca de 3.470 s. As cenas sem mapa levam cerca de 4.295 s (1 h 12): é o que passa a esperar o sim dele.
- **Na rodada do Premiere,** 11 cenas foram refeitas (cerca de 1.611 s de render), mais o XML e o pacote para o outro computador.
  - 9 delas não são de mapa: s01, s02, s19, s23, s38, s40, s56, s62 e s63. Com a linha do tempo, sairiam antes do render.
  - A s05 e a s39 são de mapa e continuariam pedindo render, e tiles, de novo.
- **Ele vê o vídeo** logo depois do `qc-visual`, sem esperar 1 h 12 de render nem o XML.
- **Não provado:** quantos dos 56 re-renders fora de mapa do Juneau foram defeito visual, e não de ferramenta.

## B) As decisões do Lucas

**1. Onde você vai assistir à prévia?**
- **Neste PC, ao vivo (recomendado).** Você abre um endereço no navegador deste computador. O que se conserta aparece na hora, e nada sai do PC. Precisa estar sentado aqui, e não dá para usar enquanto um render ou uma caça estiver rodando.
- **Em qualquer lugar (celular ou outro computador).** Eu faço aqui um vídeo leve de cada cena e publico numa página privada do claude.ai.
  - Cada conserto leva alguns minutos para chegar.
  - As cenas sem mapa andam aos saltos (2 quadros por segundo).
  - Imagens dos vídeos de banco, inclusive os da assinatura da Top10, e das fotos saem deste PC pela primeira vez, numa página que pode ser repassada.
- **Os dois.** Ao vivo aqui, e a página para o celular quando você pedir.

**2. O render espera você?**
- **Sim: só renderizo depois do seu "sim" no chat (recomendado).** Mando uma linha do tipo "Você viu as 55 e comentou 6; renderizo as 49?". Economiza render, mas o vídeo para até você assistir.
- **Não.** Renderizo assim que a revisão interna aprova. A prévia fica pronta para quando você puder, e o que você comentar vira ajuste depois, com render de novo naquela cena.

**3. O gasto do mapa (MapTiler) no vídeo 2.** O render das cenas de mapa pede tiles pagos. A prévia em si não gasta.
- **Como no Juneau (recomendado).** Liberado, com o contador anotado antes e depois de cada render de mapa e a conta quando o painel mostrar.
- **Com teto.** Eu paro e pergunto quando o contador do vídeo passar de um número que você escolhe.
- **Cena por cena.** Pergunto antes de cada render de mapa.

## C) O plano de construção, e a prova de cada passo

Regras durante a construção e a prova: nada de caça nem render ao mesmo tempo (`CLAUDE.md:996`). O servidor sobe em segundo plano e para pelo PID, nunca pelo nome do navegador (`CLAUDE.md:998`).

1. **A lista (`linha.mjs` e `estado`).**
   - **Prova:** `estado juneau --json` dá 55 cenas, sem s09. Um script só de leitura compara os 55 inícios e fins com os 55 `clipitem` do `juneau-POS.xml`, e o sha1 de cada HTML com a linha 1 do `.mp4.de-html` correspondente.
2. **O servidor e a lista fechada.**
   - **Prova por `curl` em 127.0.0.1:**
     - recebem 404: `db/canal.db`, `midia/…`, `_media/_caca/…`, `_media/_CACA/…`, `_media/_master.mp4` e `graphics/s09.html`;
     - recebem 403 ou 404: `%2e%2e` e `%5c`;
     - Host de fora recebe 421; POST sem JSON, 415; Origin de fora, 403; OPTIONS, 405;
     - Range na `narracao.wav` responde 206 com `Content-Range`;
     - `tokens.css` sai como `text/css` e as fontes como `font/ttf`.
   - Um `grep` no código prova que não há `api.maptiler.com` nem leitura de `chaves.env`.
3. **A página, o relógio e as cenas de página.**
   - **Prova no painel de navegador do app** (`http://127.0.0.1:8790/?p=juneau`): tocar de 13 a 20 s (s01, s02, s03) e de 26 a 36 s (s04, s05).
   - Nas medidas:
     - a troca cai nos quadros 408, 544, 785 e 1040, sem quadro vazio;
     - a deriva entre o quadro mostrado e o áudio fica em até 1 quadro;
     - os quadros por segundo de cada cena ficam registrados;
     - nenhuma face com `error`.
   - **O quadro, contra o render:** com o `playwright-core` (já instalado), sem janela e em DPR 1, pausar em 15,0 s, que é a s02 no quadro 42. Fotografar o iframe e comparar (PSNR/SSIM) com o quadro 42 do `s02.mp4` tirado pelo ffmpeg. O número fica registrado; qual limiar é normal está não provado.
4. **Mapas.**
   - **Prova dos proxies:** `proxies juneau` gera 16 proxies, só de carimbo em dia. Um quadro do proxy da s05 se compara com o clipe 4K no mesmo t.
   - **Prova do rascunho:** com uma opção só de prova, `--forcar-rascunho=s05`:
     - a s05 abre sem `__erroCena`;
     - `__REGIE_MAPA.base.tiles[0]` aponta para 127.0.0.1;
     - o `read_network_requests` do painel não mostra nenhum pedido a `api.maptiler.com`;
     - a s44 em rascunho aparece com o aviso do relevo.
5. **Vídeo.**
   - **Prova:** tocar s01, s40 e s53. Pelo `requestVideoFrameCallback`, registrar o `mediaTime` contra o alvo que a cena pediu. Conferir:
     - a s01 congela no quadro 339;
     - a s53 troca de clipe no corte;
     - pausado em s01 a 8,0 s, o quadro bate com o quadro 240 do `s01.mp4`;
     - a s03 abre sem "CENA COM ERRO", o que prova que o clipe 4K original foi servido (`s03.html:369-370`).
   - Se a deriva não segurar, a cena cai no plano B, e o relato diz qual.
6. **Comentários e vistos.**
   - **Prova do comentário:** um comentário de teste em s02 aparece no `--fila juneau` com `t` 1,4. Ele se fecha com `--marcar <id> preservada "teste da ferramenta"`, porque a fila só aceita acréscimo, e a nota aparece na página.
   - **Prova da versão,** numa cópia de projeto numa pasta temporária (`--raiz=<scratch>`): mudar 1 byte do HTML, ou trocar uma foto, faz a cena voltar a "não vista".
7. **`aprovar`, `conferir` e `--depois-do-render`.**
   - **Prova** na mesma cópia: as saídas 0, 1 e 2 em cada caso. No Juneau, `conferir` sem aprovação sai 1.
8. **`quadros`** (para a revisão de espectador).
   - **Prova:** quadros de s02 e s23 a cada 0,5 s, três deles comparados com o MP4. Medir o tempo por posição. A estimativa é de uns 10 min para as cenas sem mapa: não medido.
9. **Revisão independente** por um cético que lê o código e as provas. Depois, o registro:
   - a porta e a ordem no `CLAUDE.md`;
   - um item no `APRENDIZADOS.md`, porque serve a qualquer canal, com o aviso ao Lucas;
   - uma linha em `#status`.
10. **Só se ele escolher 1b ou 1c: `publicar`.**
    - Os vídeos leves por cena: as de mapa a partir dos proxies, as de página a partir dos `quadros`.
    - A narração em AAC.
    - Os limites do Artifact: 15 MB por arquivo, 64 MB por publicação, 256 MB por versão.
    - A mesma guarda do Discord antes de publicar.
    - Comentários no banco da página, lidos pelo Claude com `ArtifactData`.

O tamanho estimado é de umas 1.300 linhas, mais ou menos 1 dia de trabalho do Claude, e mais meio dia para o passo 10. Tudo estimativa.

## D) Riscos que sobram, e o que fica fora

**Riscos:**
- **Pintar 4K ao vivo a 30 quadros por segundo não está provado.**
  - Este PC está em 150 % (`AppliedDPI` 0x90 = 144, conferido no registro), então o iframe pinta em DPR 1,5, e o render em DPR 1 (`renderizar.mjs:123-128`).
  - A cor sai direta na tela, sem o JPEG e o x264 do render.
  - O quadro parado é o mesmo t, não os mesmos pixels.
- **O vídeo 4K só com quadros-chave a ~190–230 Mb/s ao vivo não está provado** (os clipes de banco e os de cena medidos têm de 191 a 230 Mb/s).
- **Rascunho de mapa:** sem satélite, e com o relevo plano na s44. O canvas do MapLibre passaria de 4096 px em DPR 1,5: isso é do juiz de fidelidade, não conferido.
- **O atraso de saída do áudio** não foi medido. Há um ajuste fixo, 0 por padrão.
- **A economia vale para as cenas sem mapa.** Mudar uma cena de mapa depois do comentário dele continua pedindo render e tiles.
- **Se ele escolher 1a, ele precisa estar neste PC.** Ele revisou o Juneau em outro computador (`revisao-premiere-lucas.md:3`).
- **Se o motor mudar** `fila.mjs`, `caminho.mjs` ou `montar-previa.mjs`, a ferramenta para na partida, pela conferência de sha256.

**Fica fora:**
- **O satélite ao vivo por repasse da MapTiler:** cada exibição pagaria tiles, os termos sobre repasse e cache não estão provados, e o clipe já cobre.
- **Editar na linha do tempo:** o render não lê `_edicao.json` nem `_ajustes.json` (`scripts/ORIGEM.json:525-527`).
- **Cópias leves do footage no mesmo endereço do original:** quebram a s03 (`s03.html:369-370`).
- **Abrir para a rede de casa.**
- **O `revisor-criativo`,** que não está instalado.
- **Aprovar cena por cena na página.**
- **Publicar mídia bruta.**

## E) O que já existe e se reaproveita sem editar

**Por import:**
- **`scripts/galeria/caminho.mjs`:**
  - `resolverNoCanal` (:79);
  - `nomeSeguro` (:99);
  - `dentroDe` (:66).
- **`scripts/galeria/fila.mjs`:**
  - `ARQ_FILA` (:39);
  - os status (:41-42);
  - `quebrarEmMarcas` (:55);
  - `lerFilaMemo` (:117);
  - `abertas` (:126);
  - `gravarComentario` (:139);
  - `marcarStatus` (:163).
- **`scripts/galeria/projeto.mjs`:**
  - `narracaoDoProjeto` (:114);
  - `palcoDaCena` (:134).
- **`scripts/serve-galeria.mjs`:**
  - `etagDe` (:91);
  - a linha de comando `--fila` e `--marcar` (:36-51), com que o Claude lê e responde.
- **`scripts/lib/espelho-path.mjs`:** `lerEspelho` (:27), com a raiz fixa no canal (:14).
- **Do motor, por `file:///`:**
  - `regie-v1/src/ferramentas/montar-previa.mjs`: `planejarJanelas` (:48) e `fundidasDe` (:79);
  - `renderizar.mjs`: `sha1` (:120), `quadrosDe` (:118) e `carimboConfere` (:132);
  - `regie-v1/src/lib/captura-png.mjs`: `abrirPagina` (:322), com `prontificar` (:419), `posicionar` (:491) e `fotografar` (:500);
  - `regie-v1/src/lib/chrome.mjs`: `acharChrome` (:55) e `abrirChrome` (:292).

**Copiado, por não ser exportado:**
- de `serve-galeria.mjs`:
  - a tabela MIME (:71-78);
  - `servirRange` (:93-125);
  - a trava do Host (:168-171);
  - as travas do POST (:181-185, 199);
- de `renderizar.mjs`:
  - a folha `will-change` (:298-299);
  - a sequência do `quadroJS` (:339-346).

**Usados como estão:**
- `ferramentas/cdp-sem-compressao.mjs` (a pré-carga do verbo `quadros`);
- `playwright-core` e `sharp` em `node_modules`;
- `out/<proj>/_media/_vendor/perfil-mapa.json` (só lido; ele leva o marcador `{chave}`, nunca a chave);
- os clipes `graphics/<id>.mp4` com carimbo em dia, para os proxies.