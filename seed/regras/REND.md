> **[porte Regie]** Origem: `top10-estudio/seed/regras/REND.md`, commit `4afda12` (17/09/2026), FILTRADO em 23/09/2026.
> **Medido:** o estúdio tem 130 leis REND. **92 valem num PC local** e vieram com o texto intacto;
> **38 são infra do Top10** (VM, bucket, Mac, launchd/systemd, cascata de contas, frota, fila, cota, despacho 24/7)
> e **0 só existem com apresentador filmado**. As cortadas estão no APÊNDICE, por ID, com o motivo: se um agente citar
> uma lei que não está aqui, ela está lá — não a invente, e não aplique a infra que ela descreve.
> Critério: contagem de termos de infra no título e no corpo da lei, e revisão lei a lei nos casos de fronteira
> (3 decididas na revisão). Lei que usa infra só como EXEMPLO de uma lição de ofício ficou.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> Comandos de shell citados (`pgrep`, `setsid`, `| tail`, `grep -c`) são Linux/macOS; no Windows vale o princípio.
> Onde o texto diz «o Mateus decide», leia «o dono do canal decide». Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador.
> E-mails de conta e caminhos pessoais do Top10 viraram `<e-mail>` e `<usuário>`.

# REND — render, frota e encode

> Leis vigentes deste domínio. **A de número MAIOR vence** quando duas se cruzarem.
> Citação legada (número solto, sem prefixo) → `seed/DE-PARA-LEIS.md`.
> ⚠️ Leia TAMBÉM `SIS.md` — são as regras transversais que valem em todo ofício.

---

**REND-01.** COR SEM BANDING/BLOQUINHOS (lei do Mateus, 05/jul — qualidade final no Premiere): gradiente ESCURO comprimido
   vira "bloquinhos pretos" (banding/macroblocking) e mata a qualidade. Regras: (a) manter o render 4K em
   10-bit yuv420p10le crf≤14 bt709 (JÁ é o padrão do render-one.sh — não regredir pra 8-bit/crf alto);
   (b) em cena com gradiente escuro dominante, adicionar GRÃO/DITHER sutil (noise ~1-2% animado) — quebra o
   banding na fonte; (c) encode-youtube com bitrate alto (o YouTube re-comprime; entregar gordo);
   (d) QA visual: olhar as áreas escuras dos frames procurando degraus/blocos antes de entregar.

**REND-03.** BLOCO/RETÂNGULO ESCURO EM CENA LONGA = CORRUPÇÃO DE GPU DO CHROME, NÃO BUG DE ENCODE/TIMING (lei do Mateus,
   07/jul — origem: `escudo-do-mundo/graphics/dipolo-11-graus-500-km`, o MESMO vídeo onde já se tinha tentado
   (e falhado) consertar bugs de frame pelo menos uma vez antes — o fix anterior (all-intra/keyint=1) atacava
   "blocos ao pausar" no PLAYER, um mecanismo DIFERENTE; o retângulo escuro que aparecia DURANTE a reprodução
   normal continuou intocado porque a causa real nunca tinha sido testada):
   • **Confirmado A/B nos 942 frames reais**: rodar a MESMA sequência de `__renderAt` com Chrome headless
     normal reproduz o retângulo (mesma posição/timing do vídeo já renderizado); rodando com `--disable-gpu`
     (força rasterização por software) o retângulo SOME em TODOS os frames onde aparecia. Confirmado também
     que NÃO é bug de screenshot/Playwright: o Mateus gravou a JANELA NORMAL do Chrome (sem headless, sem
     Playwright) com OBS e viu o MESMO artefato ao vivo — a GPU já está desenhando errado antes de qualquer
     ferramenta capturar.
   • **Mecanismo**: cenas com muitos elementos SVG animando por centenas de frames seguidos — em especial
     `filter` (blur/glow/drop-shadow) em grupos que recebem `transform` dinâmico via JS a cada frame — colocam
     pressão demais no compositor de GPU do Chrome; a textura de uma camada filtrada fica com cache
     desatualizado/corrompido e aparece como um retângulo mais escuro, sempre correlacionado com o elemento
     animado (aqui: `heroAng` e `c500`, ambos `filter="url(#fDrop)"` + `setAttribute('transform',...)` a cada
     frame — o MESMO padrão que um comentário no próprio HTML já tinha identificado e corrigido para outro
     elemento, a nebulosa com blur, sem generalizar a lição pros outros dois lugares).
   • **NÃO é acumulativo pelo tempo de vida do elemento** — rodar só o trecho isolado onde o elemento aparece
     (ex.: 270 frames cobrindo a entrada/saída inteira) NÃO reproduz o bug; só a sequência completa desde o
     frame 0 reproduz. Teste de reprodução tem que rodar a cena INTEIRA, nunca só uma janela do meio.
   • **Fix na RAIZ**: `render/capturar.mjs` agora lança o Chrome com `--disable-gpu` por padrão, EXCETO quando
     o HTML contém `"maplibre"` (cenas de mapa do mapista PRECISAM de GPU pra WebGL) — detecção automática
     lendo o arquivo antes do `chromium.launch`. Não depende de nenhum agente lembrar de passar flag nenhuma.
   • **QC pós-render (blackdetect) NÃO pega esse bug** — os thresholds (`pic_th=0.99/pix_th=0.04` no
     `render-one.sh`) só disparam em preto de TELA CHEIA; um retângulo parcial mais escuro passa batido. Pra
     achar esse tipo de artefato, inspecionar frames extraídos visualmente, não confiar só no QA automático.
   • Editor-de-arte: evite `filter` SVG em elementos que também recebem `transform` mutável por frame quando
     der pra evitar (sombra "fake" sem filtro, ou filtro só em elemento ESTÁTICO) — reduz a pressão de GPU
     mesmo com o `--disable-gpu` de rede de segurança. Ver `.claude/agents/editor-de-arte.md` §"Filtro + transform".

**REND-04.** `<video>`/`<img>` COM PATH ABSOLUTO DO MAC RENDERIZADO NO WINDOWS = MÍDIA AUSENTE SILENCIOSA (lei do Mateus,
   07/jul — origem: `asteroide-data-marcada`, 8 cenas com footage/foto real "sumido" no 4K entregue):
   • **Sintoma**: `_render-paralelo.sh` manda a cena pro Windows, o `_render-win.cmd` roda sem erro, o mp4 volta
     pro Mac via scp, o log diz "✓ ok" — e mesmo assim a mídia (vídeo OU foto) nunca aparece no render, fica
     fundo preto/painel vazio. `shot.mjs` no MESMO html no Mac mostra a mídia perfeita — ou seja, o HTML está
     certo, só o RENDER no Windows falha, e falha CALADO (sem exit code de erro, sem log de warning).
   • **Causa**: o HTML referencia a mídia por path ABSOLUTO Unix (`src="/Users/<usuário>/www/.../` _media/
     ...")`, escrito pelo editor-de-arte por padrão. Esse path não existe no Windows (`C:\Users\Mateus\...`);
     o Chrome do Windows tenta carregar e falha silenciosamente (o elemento fica com `naturalWidth=0`/vídeo sem
     frame, mas os gates `__fotosProntas`/`__videoPronto` acabam liberando a captura do mesmo jeito).
   • **QC pós-render (blackdetect) só pega ÀS VEZES**: se a mídia cobre a tela toda (footage full-bleed), pega.
     Se é um painel pequeno (foto de citação/documento), o resto da cena (navy/gradiente) mascara — precisa
     comparar `shot.mjs` (verdade) vs frame extraído do mp4 renderizado no mesmo timestamp pra confirmar.
   • **Fix imediato**: antes de mandar QUALQUER cena com `_media/` pro Windows, `grep -oE 'src="/Users/[^"]*"'
     <html>` — se achar algo, force essa cena específica pro Mac (`_render-paralelo.sh --only <id> --mac-only`).
     NUNCA confie no "log de sucesso" do `_render-win.cmd` sozinho pra cena com mídia real — confirme com
     blackdetect + 1 frame real extraído do mp4.
   • **Fix de raiz (pendente, não feito ainda)**: editor-de-arte deveria escrever path RELATIVO
     (`../_media/...`, resolvido a partir de `graphics/`) em vez de absoluto — eliminaria a exceção inteira e
     deixaria qualquer cena com mídia real 100% portável entre Mac/Windows. Até isso ser feito, `_render-
     paralelo.sh` poderia detectar `src="/Users/` automaticamente e nunca escalar essa cena pro Windows sozinho
     (hoje depende do agente lembrar de checar).

**REND-05.** CENA COM `<img>` DEVE IMPLEMENTAR `window.__fotosProntas` — SENÃO O RENDER CAPTURA ANTES DAS IMAGENS
   (lei do Mateus, 09/jul — origem: bedmachine-morlighem renderizou no Windows SEM os 6 slides e SEM a foto do
   Mathieu = fundo navy vazio; o HTML ao vivo mostrava tudo). O `render/capturar.mjs` ESPERA a promise
   `window.__fotosProntas` antes do 1º frame. Cena com `<img>` (foto, slideshow, footage-still, citação) que NÃO
   a implementa: no Mac (rápido/cache) até funciona por sorte, mas no Windows / render lento a captura pega a tela
   ANTES das imagens carregarem = imagem AUSENTE, e falha CALADA (o log diz "sucesso", o .mov sai sem a foto).
   • Padrão OBRIGATÓRIO no fim do script, antes do `__renderAt(0)`:
     `window.__fotosProntas = Promise.all([].slice.call(document.images).map(function(im){ return (im.complete&&im.naturalWidth>0)?Promise.resolve():new Promise(function(r){im.addEventListener('load',r);im.addEventListener('error',r)}); }));`
   • Vale pra QUALQUER cena com `<img>`. Vídeo de fundo já tem `__videoPronto`; imagem estática usa `__fotosProntas`.
   • Sintoma no render final: cena com foto/slideshow sai com fundo vazio/navy (SÓ os textos). Detectar: extrair um
     frame do .mov (`ffmpeg -ss <t>`) e comparar com o `shot.mjs` do HTML ao vivo — se o HTML tem a imagem e o .mov
     não, é isto. Conserto = adicionar `__fotosProntas` + re-renderizar (NÃO é bug de encode nem de path).
   • Fluxo-raiz: montador marca o evento no espelho como needs.media com o REGISTRO ESPECÍFICO (não descrição vaga);
     pesquisa-imagens sourceia o arquivo real; editor-de-arte integra o REAL como protagonista tela cheia, e o
     desenho vira só camada de dado/rótulo por cima (nunca o inverso).

**REND-06.** MASTER BAIXADO DO YOUTUBE TEM QUE SER H.264+AAC — "MELHOR QUALIDADE" DO YT É AV1+OPUS E O PREMIERE NÃO ABRE
   (compilado-01, 09/jul — os 3 masters do acervo abriram como "mídia danificada" no Premiere do Mateus).
   • Sintoma: Premiere reporta o .mp4 como danificado/unsupported, mas ffprobe mostra arquivo ÍNTEGRO. Causa: o
     yt-dlp com `-f "bv*+ba/b"` escolhe o melhor stream = AV1 (vídeo) + Opus (áudio); o Premiere não decodifica
     NENHUM dos dois. "Danificado" ≠ corrompido: é CODEC não-editorial.
   • Fix na raiz (acervo/baixar-canal.mjs): `-f "bv*[vcodec^=avc1]+ba[acodec^=mp4a]/bv*[vcodec^=avc1]+ba/bv*+ba/b"`
     — avc1+aac primeiro (1080p do canal sempre tem); o fallback raro exige transcode antes de editar.
   • Legado já baixado em AV1: transcodificar `libx264 -crf 16 -pix_fmt yuv420p + aac 320k`, swap por RENAME no
     mesmo path do XML (original vira .bak até confirmar no Premiere). Gate: duração out = in (±0.2s).
   • Efeito colateral irmão (src/transcribe.mjs): `-c:a copy` de Opus pra .m4a FALHA mas o ffmpeg deixa o arquivo
     0-BYTE criado → o check de retomada achava "pronto" e nunca regenerava. Fix: fresco() exige size>0 + o catch
     apaga o resto 0-byte. REGRA GERAL: arquivo de mídia com 0 bytes NUNCA conta como artefato pronto.

**REND-07.** CAÇA DE FOOTAGE (pesquisa-imagens / Playwright HEADED) NÃO RODA CONCORRENTE COM RENDER 4K (descoberta minha, 10/jul).
   O agente pesquisa-imagens abre Chrome HEADED (janela visível, perfil logado, anti-bot nos stocks). Isso COLIDE com
   o Chrome HEADLESS do render 4K: os dois disputam window-server (SkyLight/universalaccessd) + CPU → o load explodiu
   de ~4 pra 95, a captura sufocou e o render travou numa cena por ~17min. A lei conc=1 do render vale pra CHROME, não
   só pra ffmpeg.
   • REGRA: com um render 4K rodando, em paralelo só disparar agentes LEVES (pesquisa-dados / pesquisa-documentos /
     pesquisa-pessoas = WebSearch/WebFetch, sem Chrome headed). A caça de footage (pesquisa-imagens) e qualquer
     automação Playwright (stock/baixar.mjs) roda ANTES ou DEPOIS do render, NUNCA durante.
   • Ao matar o agente, os Chrome órfãos do Playwright (perfil `playwright_chromiumdev_profile` em /var/folders) NÃO
     morrem sozinhos — limpar por PID (`ps aux|grep 'Google Chrome'|grep playwright_chromiumdev|awk '{print $2}'|xargs
     kill -9`), preservando os `--headless` (esses são do render).
   • Diagnóstico de sobrecarga: `sysctl -n vm.loadavg` + `ps aux|sort -nrk3|head` — se universalaccessd/SkyLight estão
     no topo, é excesso de JANELAS Chrome (headed), não CPU de encode.
   • ESTENDIDO (10/jul, 2ª crise): NÃO é só a caça-imagens. O **editor-de-arte (Fable)** numa fase pesada
     (transcode de footage via ffmpeg + upscale Real-ESRGAN + shots de validação) TAMBÉM não coexiste com render
     4K — os dois martelam Chrome/ffmpeg LOCAL e o load explodiu pra 98 quando o render do eua-china iniciou junto
     com a arte do heranca (matar só o render → load caiu pra 14; o Fable sozinho é leve). Com Windows offline =
     1 máquina, SERIALIZAR: arte (Fable) OU render 4K, nunca os dois juntos. Ordem: terminar as artes dos novos →
     depois os renders em sequência. O custo a preservar é a INFERÊNCIA (Fable, cara) — se precisar
     escolher quem morre numa colisão, mata-se o RENDER, nunca o agente no meio do trabalho: o agente perde inferência PAGA, o render perde tempo de máquina. ⚠️ Mas re-disparar NÃO é "de graça" — hoje é VM sob demanda por hora ([REND-95], 09/ago/2026).
   • Exceção observada: Fable numa fase LEVE (só edição de HTML + shots esparsos, sem transcode/upscale) tolerou
     rodar durante um render (foi o caso do lago durante o ponto-nemo). O gatilho da crise é a fase de
     transcode/upscale EM MASSA coincidir com a captura do render. Na dúvida, serializar.

**REND-08.** **QUALIDADE PRIMEIRO — NUNCA REBAIXAR RESOLUÇÃO CALADO (feedback Mateus 11/jul, compilado-economia).**
   O público consome primordialmente em TV: 4K é o piso de QUALQUER coisa publicável. Regras:
   • Download de vídeo do canal (YouTube) = SEMPRE o melhor stream real (4K = VP9/AV1) e, se o codec
     não for editável no Premiere, transcodificar LOCAL pra h264 4K (h264_videotoolbox no Mac, ~32 Mbps;
     fallback libx264). "avc1 direto do YouTube" = teto 1080p — proibido como default de fonte de edição.
   • Tradeoff de qualidade (codec × resolução × tamanho) NUNCA se decide em silêncio: ou segue o padrão
     qualidade-máxima, ou AVISA o Mateus com a troca explícita antes.
   • Ordem de preferência de fonte: master original (HDs/videos-editor/acervo) > YouTube 4K transcodificado
     > qualquer coisa abaixo (só com aval explícito).
   (Origem: compilado montado com fontes avc1-1080 sem avisar; o certo era 4K com transcode automático.)

**REND-09.** MÍDIA LOCAL QUEBRADA NO RENDER = ABORTAR BARULHENTO + `_assets/` TAMBÉM VAI PRO WINDOWS (Mateus, 12/jul, eua-china):
   O `gancho-cupula-2026` saiu no 4K com a FOTO de Tucídides FALTANDO — no lugar dela, o quadradinho de "imagem
   quebrada". A foto (`graphics/_assets/tucidides-alpha.png`) EXISTIA e o `shot.mjs` no Mac a mostrava perfeita →
   o HTML estava certo, o RENDER é que falhou. DUAS raízes, dois fixes (defense in depth):
   • **`_render-paralelo.sh` não copiava `_assets/` pro Windows**: ele descobre as mídias grepando `_media/` no HTML
     e faz scp — mas cenas têm DOIS espaços de path: `_media/…` (relativo à RAIZ, o HTML usa `../_media`) E
     `_assets/…` (relativo à pasta `graphics/`, imagens locais da cena). Só `_media/` era sincronizado → no Windows a
     `_assets/foto.png` não existia e a `<img>` dava `error`. **Fix**: o loop de push agora trata os dois grupos
     (base `out/$PROJ` pro _media, base `out/$PROJ/graphics` pro _assets). Generaliza a REND-04 (que só via `_media`
     com path absoluto) — QUALQUER asset local relativo tem que viajar junto.
   • **`capturar.mjs` capturava mídia quebrada CALADO**: o gancho de prontidão `__fotosProntas` trata `img.onerror`
     como `ok()` (pra não travar 15s se um asset some), então uma img que FALHOU passava e o render saía com o
     quadrado quebrado. O `pageerror` do Playwright NÃO pega isso (erro de recurso ≠ exceção de JS). **Fix**: novo
     GATE DE MÍDIA REAL logo após `__prepararCaptura` — varre `<img>`/`<video>` com `src` (ignora `data:`/vazio) e
     ABORTA (`exit 4`, wrapper para) se algum tem `!complete || naturalWidth===0` (img) ou `readyState===0` (vídeo).
     Melhor falhar barulhento que entregar cena com foto/vídeo quebrado. Pega o bug em QUALQUER causa (Windows sem
     asset, arquivo movido/arquivado, path errado) — não depende de olhar frame a frame.
   • **Lição de processo**: "render ok" (log de sucesso, mp4 gerado) NÃO garante mídia presente — o Windows falha
     calado (REND-04). Cena com foto/footage: comparar `shot.mjs` (verdade no Mac) vs frame do mp4, ou confiar no
     novo gate. Fix imediato do gancho: re-render no Mac (onde a foto carrega).

**REND-11.** HiDPI-CANVAS: TODO <canvas> 2d NASCE EM BACKING STORE 2× — SENÃO O RENDER 4K SAI BORRADO (o Mateus, 20/jul,
   apontou a pixelização e questionou o palco 1920×1080: "não é isso que deixa as renders com pixelação?").
   ⚠️ **SUPERADA em PARTE pela REND-13 (21/jul): a cláusula "NÃO mudar o palco pra 4K" está REVOGADA — cena NOVA
   nasce em viewport 3840 nativo e não precisa de truque nenhum de HiDPI.** Esta lei vale hoje só (a) pra cena
   LEGADO em coords 1920 e (b) como a REDE DE SEGURANÇA que o `render-one.sh` roda. O DIAGNÓSTICO abaixo continua
   correto e é a razão de o nativo ter sido adotado.
   DIAGNÓSTICO com prova visual (teste sintético + cena real): o palco 1920×1080 + `deviceScaleFactor:2` do
   capturar.mjs dá 4K NATIVO pra texto/SVG/CSS/`<img>` grande/footage 4K (esses estão nítidos). MAS o `<canvas>`
   NÃO herda o deviceScaleFactor — backing store 1080p → o Chrome faz UPSCALE bilinear 2× ao compor em 4K =
   BORRÃO em tudo desenhado no canvas (partículas, lume, gráficos, órbitas). Afeta ~123 cenas. FIX de raiz
   (NÃO mudar o palco pra 4K — quebraria as ~500 cenas em coords 1080p): promover o canvas a backing store 2× +
   `ctx.scale(2,2)`, mantendo o CSS em 1080p — o código de desenho da cena NEM MUDA (segue em coords 1080p).
   Implementado como `scripts/hidpi-canvas.mjs` (monkey-patch de `getContext('2d')`, guard `isConnected` p/ não
   tocar buffers offscreen) injetado no `<head>`. RODA AUTOMÁTICO no `render-one.sh` antes de capturar
   (idempotente, à prova de editor esquecer). ESCOPO: do presente pro futuro — as cenas JÁ entregues/postadas
   ficam como estão (NUNCA re-renderizar o que está pronto; o Mateus corrigiu: "em algum momento falei de
   refazer as já feitas? não... mudar do ponto atual pro futuro"). Meu erro anterior: tratei o SINTOMA (grain/
   dither anti-banding) quando a causa era o canvas upscalado. editor-de-arte.md e ROUPA-CENA endurecidos.
   ATUALIZAÇÃO (Mateus, 20/jul, enfático — bloco realocado da ex-lei 117-técnica/ARTE-44, onde estava anexado
   à lei errada): o fix NÃO pode ser só runtime (band-aid que 'vai continuar' se o render mudar) — tem que ser
   CRAVADO no HTML, permanente e standalone. `scripts/hidpi-bake.mjs` faz o BAKE:
   `<canvas width=1920 h=1080>` → `width=3840 height=2160 style=width:1920px;height:1080px data-hidpi=1` + um
   head-script que dá `setTransform(2,0,0,2,0,0)` só nos canvas data-hidpi (cobre TODAS as formas de obter o ctx,
   inclusive ternário `cv?cv.getContext('2d'):null`). O arquivo abre 4K sozinho em qualquer navegador. O
   editor-de-arte agora NASCE escrevendo canvas nativo 4K (backing dobrado + setTransform). render-one.sh roda
   hidpi-bake como REDE DE SEGURANÇA (idempotente), não como fix principal. hidpi-canvas.mjs (runtime) aposentado.
   ⚠ Na cena 4K-NATIVA (REND-13) o bake é PULADO — o canvas já nasce 3840×2160 sem `setTransform`.

**REND-13.** VIEWPORT 3840 NATIVO É O PADRÃO DAQUI PRA FRENTE — CENA NOVA AUTORADA EM 4K, SEM deviceScaleFactor (o
   Mateus, 21/jul: "quero que o VIEWPORT seja 3840 nativo... dane-se as 500 cenas já geradas, mudar daqui pra
   frente"). Contexto: o pipeline antigo era viewport 1920 × DPR 2 (densidade Retina → saída 3840). O A/B na unha
   (mesma arte, os 2 caminhos, ambos 3840×2160) provou que pra TEXTO/SVG/CSS o resultado é pixel-IDÊNTICO (corpo
   de texto e SVG deram diff 0; headline/13px diferem só ~4-6% por POSIÇÃO sub-pixel, não nitidez) — o único
   ganho real do nativo é o CANVAS, que passa a nascer 4K sem o truque hidpi (ctx.scale). Decisão do Mateus mesmo
   assim: nativo. IMPLEMENTADO em `render/capturar.mjs`: cena que declara `data-render="4k-native"` no `<html>`
   (ou `window.__native4k=true`) → viewport 3840×2160 DPR 1 (nativo puro); cena LEGADO sem a marca → 1920×DPR2
   IDÊNTICO ao de sempre (retrocompat protege as ~500 antigas + sessões paralelas). AUTORIA da cena 4K-nativa:
   stage/palco 3840×2160, TODAS as coords/fontes em 4K (o dobro do que era em 1920 — font 128 em vez de 64,
   arc(1920,1080) em vez de 960,540), `<canvas>` com buffer = tamanho de exibição em 4K SEM ctx.scale (a REND-11
   vira desnecessária no nativo). Preview nativo = viewport 3840 × DPR 0.5 (saída 1920 rápida). Vídeos JÁ feitos
   em 1920 (avioes-pequenos incluso) ficam como estão — o A/B provou que são visualmente idênticos ao nativo.
   Pendente: portar ROUPA-CENA/editor-de-arte/mapista/infografico pro sistema de coords 3840 (agentes autoram 4K).

**REND-15.** 4K É PISO DE OFÍCIO, EM QUALQUER CANAL DE QUALQUER EMPRESA — NÃO EXISTE ENTREGA HD (o Mateus,
   22/jul, ao decidir o palco default do agente sem marca: *"toda e qualquer empresa (que será geralmente de
   canais no YouTube = criação de vídeos) deve ser em 4K sempre, ou seja, 3840×2160 pra qualquer coisa — esqueça
   o HD, HD não faz parte da minha filosofia, e eu nunca economizaria pra colocar HD no lugar de 4K"*).
   CONSEQUÊNCIA NA DOUTRINA: os pisos de texto são declarados EM 4K (herói/título 260 · rótulo 104 · eixo 72 ·
   crédito 72) e param de ser derivados de 1080p pela fórmula `piso_1080 × (largura/1920)`. A fórmula tomava o HD
   como referência — invertia a filosofia e, aplicada errado, aprovava texto com METADE do tamanho. O legado 1920
   vira o caso derivado (metade dos números), e só ao AUDITAR cena que já existe; autorar novo em 1920 é DEFEITO.
   ESCOPO: vale na marca NEUTRA (`marcas/_neutra/identidade.md`), não na do Top 10 — é ofício, não gosto do canal,
   e é o que o `cerebro` leva junto ao ser instalado noutra empresa. Quem monta o pipeline DECLARA
   `palco: {largura: 3840, altura: 2160}` a todo agente que desenha; sem declaração, o agente assume 3840 — nunca
   menos. Se a máquina não dá conta, renderiza mais DEVAGAR, nunca MENOR.
   ⚠ O que NÃO muda: cena LEGADO segue capturando viewport 1920 × DPR 2, e a saída final continua 4K nos dois
   caminhos — as ~500 cenas antigas não regridem. E o `scale=1920:1080` do `render-one.sh` é do branch PREVIEW,
   verificado em 22/jul; nenhum caminho de ENTREGA produz HD.

> ⚰️ **BLOCO SUPERADO NO OBJETO (jul/2026):** a `estudio-l4` NÃO EXISTE MAIS (sumiu da nuvem sem deixar
> disco). As leis 16–24 ficam pelo PRINCÍPIO (lock por vida, guardião externo, resgatar log antes do
> delete, sob-demanda desliga) — transferível para a próxima máquina GPU; o objeto morreu.

**REND-26.** O GARGALO DO RENDER ERA **COMPRIMIR PNG**, NÃO RASTERIZAR NEM GPU — JPEG q100 CORTA A CAPTURA EM
   **13,6×** (24/jul; pergunta do Mateus: *"a GPU faz diferença afinal?"*). **A MEDIÇÃO**, mesma cena, 201 frames
   4K, mesmos 8 workers:

   | fase | antes | depois | |
   |---|---|---|---|
   | captura (Chrome → frame) | PNG lossless **191 s** | JPEG q100 **14 s** | 13,6× |
   | encode (ffmpeg → mp4) | x264 `slow` **42 s** | x264 `medium` **12 s** | 3,5× |
   | **cena inteira, comando real** | **233 s** | **37 s** | **6,3×** |

   **A GPU NÃO É O CAMINHO, e isso foi medido nos dois sentidos.** Ligar a GPU do Chrome fora de WebGL fez a
   captura passar de **191 s para 413 s** — 2,2× MAIS LENTA: em headless, cada screenshot exige *readback* dos
   pixels da GPU para a CPU, e isso custa mais do que rasterizar direto na RAM. O comentário que vivia no
   `capturar.mjs` — *"o caminho de velocidade é GPU no Chrome"* — era hipótese nunca medida, e estava errada.
   Pelo mesmo motivo, **VM com GPU não resolve lentidão de render**: o trabalho é CPU, e a placa só entraria no
   encode, que depois deste conserto são 12 s de 37.
   **A QUALIDADE FOI MEDIDA, NÃO ASSUMIDA:** JPEG q100 × PNG = **PSNR 58,3 dB · SSIM 0,9985**, uniforme em todos
   os frames (acima de 45 dB é imperceptível), e a inspeção visual ampliada no navy escuro não mostra banding nem
   blocking. **O argumento que encerra a discussão:** o `x264 crf 14` da SAÍDA introduz mais perda (**46 dB**) do
   que o JPEG q100 da ENTRADA (**58 dB**) — guardar o frame lossless para jogá-lo num encode que perde mais era
   pagar 13× em tempo por uma precisão que o passo seguinte descartava.
   ⚠️ **POR QUE O PNG LEVOU O CRÉDITO ERRADO:** a "pixelização nos escuros" que o motivou vinha do JPEG **q90 no
   palco 1920×DPR2**; o palco virou 4K nativo (REND-13) na mesma época, e a melhora foi creditada ao formato do
   frame em vez do canvas. Duas variáveis trocadas juntas ⇒ a causa fica ambígua, e o custo do palpite errado
   rodou por semanas. **Ao trocar duas coisas de uma vez, meça uma de cada vez antes de concluir.**
   **PRESET `medium` NO ALL-INTRA:** com `keyint=1` cada frame é independente, e as ferramentas caras do preset
   lento servem sobretudo à predição ENTRE quadros — que aqui não existe. `slow` cobrava 4× o tempo por ~9% de
   taxa. **Escapes:** `RENDER_FMT=png` volta ao lossless numa cena que exija; `RENDER_GPU=1|0` força a GPU para
   bancada. **Como verificar:** `node scripts/bench-render.mjs <cena.html>` mede captura × encode e compara
   formatos com PSNR/SSIM — nunca conclua por intuição num pipeline de duas fases sem saber qual delas manda.

**REND-27.** WORKER QUE TERMINA O TRABALHO E NÃO MORRE TRAVA O LOTE EM SILÊNCIO — E O VEREDITO É O TRABALHO NO
   DISCO, NUNCA O CÓDIGO DE SAÍDA (24/jul, achado ao renderizar o `compilado-previsoes-jiang`). **O que
   aconteceu:** em `acordo-de-plaza-1985` os 8 shards gravaram seus 39 frames — **312/312 no disco** — imprimiram
   "frames prontos", e **5 continuaram vivos a 0% de CPU**, presos dentro do `browser.close()` do Playwright. O
   driver espera todos os filhos saírem, então o lote ficou **11+ min parado sem escrever nada e sem erro**. É
   morto-silencioso da pior espécie: tem cara de trabalho. **Conserto em duas camadas, porque uma só não basta:**
   **(a) CAUSA** — fechar o browser é boa educação, não requisito: os frames já estão gravados e o SO recolhe o
   Chrome quando o processo morre, então o worker dá 5 s ao `close()` e sai de qualquer jeito (`Promise.race` +
   `process.exit(0)`). Esperar para sempre por uma limpeza opcional É o defeito. **(b) REDE** — um watchdog no
   driver mata shard parado, porque a causa pode voltar por outro caminho (um handle novo do Playwright, um
   socket que não fecha) e o sintoma seria idêntico.
   ⚠️ **O ERRO QUE EU MESMO COMETI CONSERTANDO, e que vale mais que o conserto:** a primeira versão do watchdog
   deduzia a meta de frames lendo `__duracao` do HTML — só que a cena escreve `window.__duracao=DUR`, uma
   VARIÁVEL, o regex voltou 0, e o veredito `total && n >= total` passou a **reprovar capturas PERFEITAS**.
   **5 cenas com todos os frames no disco foram dadas como falha.** A rede de segurança virou a fonte do dano.
   **A regra que fica:** para julgar se um trabalho terminou, meça o ARTEFATO, não uma meta adivinhada nem o
   exit code — aqui, "a sequência `f00000…fN` não tem buraco" prova a captura completa sem depender de ler nada
   do HTML, e ainda aceita o shard que o watchdog matou depois de ele ter entregue tudo. **Corolário:** todo
   watchdog precisa de um teste de "matar agora perde trabalho?" — se não tiver, ele destrói exatamente o que
   veio proteger. **Como verificar:** rodar uma cena e conferir `✓ frame-parallel: N frames (sequência íntegra)`.

**REND-28.** JPEG É **FULL RANGE** E VÍDEO É **LIMITED** — TROCAR O FORMATO DO FRAME MUDA A FAIXA DE COR EM
   SILÊNCIO (24/jul, regressão que EU introduzi ao aplicar a REND-26 e pesquei na auditoria pós-lote). **O que
   aconteceu:** com a captura em PNG a saída era `yuv420p/tv`; ao trocar para JPEG virou **`yuvj420p/pc`** sem
   nenhum aviso, porque o ffmpeg herda a faixa do arquivo de entrada. Medido no mesmo frame: por JPEG **Y de 8 a
   255**, por PNG **Y de 19 a 243**. **Por que importa:** (a) as 74 cenas novas ficaram `pc` e a única antiga
   `tv` — no vídeo montado isso é **salto de contraste na emenda**, o defeito aparecendo exatamente onde ninguém
   olha; (b) `pc` num arquivo marcado bt709 faz player e YouTube reinterpretarem os pretos, que é o primo do
   problema que a REND-01 já tratava. **O CONSERTO:** converter de verdade, não só reetiquetar —
   `scale=in_range=full:out_range=limited` no filtro **e** `-color_range tv` na saída. Sem o `scale`, muda-se a
   etiqueta e não os pixels, que é pior que não fazer nada: o arquivo passa a mentir sobre si mesmo.
   **A LIÇÃO, que vale além da cor:** ao trocar um formato intermediário por outro "equivalente", os METADADOS
   implícitos viajam junto — faixa de cor, matriz, primárias, alfa, profundidade. A REND-26 mediu PSNR/SSIM e
   deu 58 dB: a IMAGEM estava certa e a INTERPRETAÇÃO dela não, e nenhuma métrica de pixel a pixel pegaria isso,
   porque as duas comparadas tinham o mesmo defeito. **Corolário:** depois de trocar formato, audite os metadados
   do artefato, não só o conteúdo. **Como verificar:**
   `ffprobe -v error -select_streams v:0 -show_entries stream=pix_fmt,color_range -of csv=p=0 <mp4>` — tem de
   voltar `yuv420p,tv` em TODAS as cenas do projeto, sem uma única divergente.

**REND-29.** LOOP QUE LÊ LISTA E CHAMA ffmpeg PRECISA DE **FD 3 + `</dev/null`** — SENÃO O ffmpeg COME O STDIN E
   CORRÓI OS NOMES (24/jul; a regra já existia no `CLAUDE.md` do projeto e eu não a apliquei ao escrever os
   scripts de lote). **O sintoma não parece o que é:** o render "falhava" em cenas aleatórias com ENOENT, e o
   caminho no erro vinha MUTILADO — `nvidia-5-trilhoes` chegava como **`ia-5-trilhoes`**, `out/compilado…` como
   **`t/compilado…`**. Não é path errado nem arquivo faltando: o `ffmpeg` dentro do `render-one.sh` lê o stdin
   herdado, e esse stdin é o MESMO descritor de onde o `while read` está consumindo a lista — ele devora os
   primeiros bytes da linha seguinte. **A forma correta, e é o par que resolve:** ler a lista por um descritor
   próprio (`while read -r id <&3; do … done 3< lista.txt`) **e** fechar o stdin de quem é chamado
   (`comando </dev/null`). Um sem o outro não basta: sem o FD 3 o loop divide o descritor com o filho; sem o
   `</dev/null` o filho ainda encontra um stdin para consumir.
   ⚠️ **A LIÇÃO CARA NÃO É O BUG, É COMO EU O TRATEI.** Vi o sintoma primeiro na VM, diagnostiquei como "path
   relativo sendo mutilado" e **contornei com caminhos absolutos**. O contorno funcionou — e por isso escondeu a
   causa. Quando o mesmo defeito reapareceu no Mac com outra roupa (nome de cena em vez de diretório), a causa
   comum ficou óbvia. **Contorno que funciona é o disfarce mais eficiente de uma causa não encontrada:** se dois
   sintomas diferentes têm a mesma forma (aqui: "sumiram caracteres do início"), pare e procure a causa única
   antes de contornar o segundo. **Como verificar:** rode o lote e confira que nenhum log cita um nome que não
   existe na lista — nome corroído é sempre stdin comido, nunca coincidência.

**REND-30.** PARALELISMO SÓ ACELERA ONDE HÁ RECURSO OCIOSO — E O `x264` JÁ SATURA A MÁQUINA SOZINHO (24/jul,
   medido ao montar o `compilado-previsoes-jiang`). **O que eu previ e o que aconteceu:** afirmei que montar o
   composto em blocos paralelos cairia de ~55 min para ~20. Medi:

   | arranjo | ritmo | 61,9 min levariam |
   |---|---|---|
   | corrida única (1 ffmpeg) | 1,13× | 55 min |
   | 3 blocos em paralelo | **0,51×** | **121 min** |
   | 1 bloco por vez | 1,00× | ~65 min |

   **Três blocos juntos foram 2× MAIS LENTOS que um só.** A causa é simples e eu deveria ter previsto: o `x264`
   já distribui o encode por todas as threads, então rodar três instâncias apenas fatia a MESMA CPU — e ainda
   paga overhead, porque cada bloco reabre e redecodifica os overlays que o cruzam. **A regra:** antes de
   paralelizar, pergunte *o que está ocioso?* Se a resposta for "nada", paralelismo é só troca de contexto e
   perda. Onde ele paga é **entre MÁQUINAS** (recurso genuinamente novo), não entre processos de uma máquina que
   já está a 100%.
   ⚠️ **MAS O BLOCO CONTINUA CERTO — pelo outro motivo.** A corrida única morreu aos 20:16 de 61:48 sem mensagem
   nenhuma, deixando 3,5 GB ilegíveis: um filtergraph de 115 overlays encadeados é frágil, e falhar no minuto 20
   custa os 20 minutos. Em blocos SEQUENCIAIS o custo é o mesmo (~65 min contra 55), e em troca vêm retomada,
   isolamento da falha e — o que abre a porta — **blocos independentes que OUTRAS máquinas podem montar**.
   Separar "por que blocos" (robustez) de "por que paralelo" (velocidade) é o que evita justificar um com o
   outro. **Onde cortar:** nunca a cada N minutos cegamente — o corte no meio de um card de 8 s partiria o
   overlay entre dois encodes e a emenda apareceria. `compor-blocos.mjs` calcula os intervalos ocupados por
   overlay/fade e corta onde a tela está livre; sem folga perto do alvo, o bloco cresce.
   **Como verificar:** meça o ritmo (×tempo real) de UM bloco antes de escolher o paralelismo do lote.

**REND-31.** NÃO JULGUE ARQUIVO EM CONSTRUÇÃO — E "PAROU DE CRESCER" **NÃO** É PROVA DE QUE ACABOU (24/jul;
   errei isto DUAS vezes na mesma noite). **Caso 1:** li o `_corte-base-4k.mp4` no instante em que ele apareceu
   e o `ffprobe` deu *"moov atom not found"* — anunciei corrupção de um arquivo que estava perfeito. **Caso 2:**
   o QC do composto rodou no meio da escrita e emitiu **6 falhas** — duração 0, sem áudio, sem codec — num
   arquivo que segundos depois passou em tudo. Um laudo desses, lido por alguém com pressa, joga fora uma hora e
   meia de encode. **Por que a proteção óbvia falha:** eu já esperava o tamanho estabilizar, e não bastou —
   `-movflags +faststart` faz uma SEGUNDA passada movendo o índice (`moov`) para o começo do arquivo, e nessa
   janela o tamanho está parado e o arquivo, ilegível. Tamanho estável é sintoma, não prova. **A regra:** antes
   de medir um artefato, verifique que **ninguém está escrevendo nele** — nenhum processo produtor vivo. É o
   mesmo princípio da REND-27 (medir o trabalho, não o relógio) aplicado à leitura em vez da escrita.
   **Corolário que vale para todo gate:** um verificador que roda cedo demais não é inofensivo — ele **fabrica**
   defeitos, e defeito fabricado custa mais caro que defeito não encontrado, porque manda refazer o que estava
   pronto. **Como verificar:** `pgrep -f ffmpeg` tem de voltar vazio antes do gate abrir o arquivo
   (`qc-composto.mjs` recusa rodar com produtor vivo, salvo `--agora`).

**REND-32.** ⚰️ **SUPERADA pela REND-40 no MECANISMO** (o princípio — "cena que declara duração não leva
   padding" — continua; o que caiu foi o grep no fonte como forma de descobrir a declaração). **Entrada
   restaurada do histórico em 31/jul/2026:** esta lei nasceu em 25/jul como comentário no `render-one.sh`
   (commit `5d7acee`) e NUNCA teve corpo neste arquivo — o número era citado pelo código e pela REND-40
   apontando para o vazio, violando a doutrina "a antiga fica, marcada". O texto abaixo é o do commit de
   origem, na íntegra:
   *"O PADDING SÓ VALE PARA CENA QUE NÃO DECLARA DURAÇÃO (REND-32). O `MINF=300` nasceu como piso de
   segurança para cena antiga sem contrato; aplicado a cena que DECLARA `__duracao`, ele clona o último
   frame até 10 s e produz o 'travamento' — 31 das 75 cenas deste compilado saíram assim, uma delas com
   7,5 s congelados de 10. A flag `--nopad` existia para evitar isso e dependia de alguém lembrar; regra
   que depende de lembrar é regra morta. Agora a própria cena decide: se ela diz quanto dura, é isso que
   vale, e o piso não se aplica."* (25/jul/2026, `compilado-previsoes-jiang`.)

**REND-34.** O `render-one.sh` REPORTAVA SUCESSO SEM PRODUZIR ARQUIVO — TODO O QA VIVIA DENTRO DE
   `if [ -f "$OUT" ]` **SEM `else`** (25/jul, medido). Quando o ffmpeg falhava e não escrevia nada, o bloco
   inteiro era pulado: sem aviso, sem erro, **exit 0**. Um lote de 7 cenas imprimiu *"7 ok · nenhuma falha"*
   tendo produzido **zero** mp4. Só peguei porque fui conferir o **carimbo de tempo de cada arquivo** e vi que
   todos eram de execuções antigas — o relatório do próprio script não servia de prova.
   **Isto é a família dos MORTOS-SILENCIOSOS**, e a regra que a mata é uma só: *ausência de resultado é falha a
   investigar, nunca sucesso silencioso*. Rodou e não produziu = falhou. As reprovações do QA (duração
   inválida, frame preto) também só IMPRIMIAM e devolviam 0 — quem chamava em laço não tinha como saber.
   Agora: sem arquivo → mensagem + `exit 1`; QA reprovado → `exit 1`.
   **O GATILHO, que vale como aviso de uso:** o 2º argumento é o CAMINHO DE SAÍDA (`OUT="${2:-…}"`). Escrever
   `./render-one.sh cena.html --final` faz a flag virar o nome do arquivo, e o ffmpeg a lê como opção
   (*"Unrecognized option '-final'"*). Como essa escrita é natural e o parser já captou a flag, o script agora
   **ignora um `$2` que comece com `--`** em vez de transformá-lo em lixo.
   **A LIÇÃO GERAL:** ao verificar trabalho em lote, **não confie no contador do laço** — ele mede chamadas que
   retornaram, não trabalho feito. A prova é o artefato: existe, tem o carimbo DESTA execução, e tem a duração
   esperada. **Como verificar:** `stat -f%Sm <saida>` bate com a hora de agora, e `./render-one.sh` devolve ≠0
   quando não produz.

**REND-35.** MAPA SEM BASE RENDERIZA UM **BURACO**, E TODO O PIPELINE DIZ QUE ESTÁ ÓTIMO (25/jul, medido).
   A chave do MapTiler morreu (**HTTP 403**) e as cenas de mapa do `compilado-previsoes-jiang` renderizaram
   **sem satélite e sem costa**. O `estreito-ormuz` saiu com fundo navy vazio, uma seta dourada solta no escuro
   e os rótulos IRÃ/OMÃ flutuando — o espectador não vê o estreito, vê uma seta no nada. Medido em
   `taiwan-bloqueio-naval`: **61 requisições 403, zero sucessos**.
   **E TUDO REPORTOU ✓:** o `render-one.sh` deu sucesso, o QA pós-render não achou frame preto (o navy da marca
   **não é preto** — o `pix_th` foi calibrado justamente para não dar falso-positivo nele), `qc-carga`,
   `qc-contrato` e `check-overlap` passaram. A cena está tecnicamente impecável e visualmente **oca**.
   **POR QUE NENHUM GATE PEGAVA:** todos medem o **DOM** — elementos, textos, colisões, tamanhos. O mapa não é
   DOM: é um `canvas` alimentado por **rede**. Quando a rede falha, o canvas fica vazio e o DOM continua
   perfeito. Medir o documento nunca vai provar que a imagem chegou.
   **A PROVA É A REDE**, e é o que `qc-mapa-vivo.mjs` faz: escuta as respostas enquanto a cena roda e reprova
   quando qualquer requisição de tile/estilo falha. **Rode-o ANTES do render em lote** — renderizar 23 cenas de
   mapa com a chave morta é queimar horas para produzir buracos que passam em todos os outros gates.
   ⚠️ **Renovar a chave é PASSO HUMANO** (conta MapTiler). O agente prepara tudo e para na porta.
   **Como verificar:** `node scripts/qc-mapa-vivo.mjs out/<proj>/graphics/*.html` · teste rápido da chave:
   `curl -s -o /dev/null -w "%{http_code}" "https://api.maptiler.com/maps/satellite-v2/style.json?key=$MAPTILER_KEY"`

**REND-37.** NÃO RENDERIZE CENA COM A MONTAGEM RODANDO — O FFMPEG LÊ O MP4 PELA METADE (26/jul, medido).
   A montagem do `compilado-previsoes-jiang` fez **12 blocos em ~50 min** e o **13º falhou**: *"moov atom not
   found · Error opening input"*. A causa não foi a montagem: eu havia renderizado `tokens-credito-estatal`
   às 20:48, **com o `compor-blocos` já em curso desde 20:49**. Quando o bloco 11 chegou naquela cena, o mp4
   ainda estava sendo escrito — sem `moov atom`, ilegível.
   **POR QUE ISSO É TRAIÇOEIRO:** o render reportou ✓ e o QA passou (o arquivo *ficou* íntegro depois). Quem
   viu o defeito foi a montagem, **50 minutos depois**, e o custo não é o clipe — é o bloco inteiro que
   precisa refazer. O mesmo mecanismo já me enganou na direção oposta: declarei um corte-base corrompido
   lendo-o meio segundo antes de o ffmpeg fechar o arquivo. **Arquivo em escrita mente nos dois sentidos.**
   **A REGRA:** montagem e render de cena do MESMO projeto não coexistem. Antes de disparar `compor-blocos`,
   confira que nenhum render está em curso; e enquanto ele roda, **não renderize cena daquele projeto** —
   nem "só uma que faltou". Se faltou cena, espere a montagem acabar (ela é retomável: bloco pronto é pulado).
   **COMO CAÇAR quando já aconteceu:** o erro aponta `in#N`, que é inútil. O caminho é varrer os clipes e
   achar o ilegível:
   `for f in *-4k.mp4; do ffprobe -v error -show_entries format=duration -of csv=p=0 "$f" >/dev/null 2>&1 || echo "✗ $f"; done`
   Um arquivo de 76 apareceu — em 3 segundos de varredura contra 50 minutos de montagem perdida.

### REND-38 · Cena nova entra NO CORTE do original, nunca no meio do plano dele
**O que o Mateus viu (26/jul):** *"tiveram várias cenas dos vídeos originais que vazaram poucos
segundos antes ou depois de entrar/acabar as nossas cenas… em 0:17 aparece a foto do Jiang do vídeo
original, e menos de 1 seg depois aparece nossa cena… 0:29 vaza um frame de um professor no quadro"*.
**Medido, e bate exatamente:** os cortes REAIS da base estavam em 16,973 e 28,951; nossas cenas
entravam em 17,2 (0,227 s = **7 frames** do Jiang antigo no ar) e saíam em 28,90 (0,051 s = ~1,5
frame do professor). Em compilado isso é o defeito mais visível que existe: o espectador vê o vídeo
ANTIGO piscar e lê como erro de edição — que é o que é.
**A CAUSA É A RÉGUA, não o render nem a montagem.** O plano posiciona a cena por
`substitui_timecode`, escrito pelo montador como `"0:25–0:29"` — minuto:segundo, arredondado, lido do
roteiro. Vídeo editado não corta em segundo inteiro. Entre o número redondo e o corte real sobram
frames do plano antigo.
**A regra:** o posicionamento de cena nova em compilado se ancora no **corte MEDIDO** da base
(`scdet`), nunca no timecode do plano. `scripts/compilado/encaixar-nos-cortes.mjs` faz o encaixe.
**O atalho que resolve as duas pontas de uma vez:** os cortes da base já distam entre si praticamente
a duração do clipe (25,348→28,951 = 3,603 s para um clipe de 3,60 s). Encaixar o **início** acerta
também o fim — sem re-render, sem tocar no HTML. Onde sobrar (clipe mais curto que o buraco), tapa-se
com `tpad=stop_mode=clone`: congelar 8 frames de uma cena que já parou é invisível; 8 frames do
vídeo ANTIGO não são.
**⚠️ Janela curta (0,6 s).** Corte distante não é "o corte desta cena" — é outro plano, e puxar a
cena para lá desalinha a narração. Fora da janela o script não mexe **e diz que não mexeu**.
**Como verificar:** `node scripts/compilado/encaixar-nos-cortes.mjs <proj>` tem de devolver
`0 cena(s) fora do corte`.

### REND-39 · Retomada se ancora no CARIMBO do conteúdo, nunca na duração do artefato
**O defeito, medido em 26/jul:** `compor-blocos.mjs` pulava bloco pronto quando o arquivo existia e a
duração batia (±0,5 s). Mas a duração de um bloco vem dos **cortes do vídeo-base**, e esses não mudam
quando o CONTEÚDO muda. Re-renderize uma cena, mova-a no plano, troque um card: a duração continua a
mesma e o bloco VELHO é reaproveitado. O composto sai com carimbo de hoje e conteúdo de ontem.
**Não era hipótese.** Os 13 blocos do Jiang eram de 25/jul 21:16–21:59; o `_reaproveitamento.json`
mudou às 23:44 (encaixe da [REND-38], que remexeu 8 cenas). Remontar ali teria devolvido o composto
**pré-encaixe** — desfazendo em silêncio o conserto que a REND-38 existe para fazer. E o caso
seguinte era pior: 70 cenas consertadas e re-renderizadas entrariam num composto que não mostraria
**nenhuma** delas, sem uma linha de erro.
**A REGRA:** toda retomada carimba o **hash de tudo que decide o artefato** e só pula quando o
carimbo bate. Em `compor-blocos` o carimbo cobre a fatia do base, cada overlay que cai no bloco
(arquivo + **identidade em disco** + posição + duração + offset + velocidade), os fades e os
parâmetros de encode. É o mesmo desenho do `_portao.json` das cenas, ancorado no hash do HTML.
**Identidade é `tamanho:mtime`, não hash do conteúdo:** hashear 12 GB de vídeo a cada montagem
custaria mais que refazer o bloco, e re-render sempre muda os dois.
**O carimbo nasce DEPOIS do artefato prestar** — carimbar antes marcaria como pronto o bloco que o
ffmpeg abandonou no meio. E bloco que falha **perde** o carimbo, senão a rodada seguinte o pula.
**A generalização, que vale fora daqui:** duração, tamanho e existência são propriedades do
CONTINENTE; retomada precisa de uma propriedade do CONTEÚDO. Retomada que confere o continente é a
[SIS-29] com outra roupa — o gerador que lê a própria saída e conclui que está pronto.
**Como verificar:** apague `out/<proj>/_blocos/_carimbo.json` e rode `compor-blocos` — todos os
blocos têm de ser refeitos (`↻ bloco N REFEITO`). Rode de novo sem mexer em nada: todos pulados.

### REND-40 · Duração declarada se PERGUNTA À PÁGINA, nunca se procura no código-fonte
**Supera a [REND-32] no MECANISMO** (o princípio dela — "cena que declara duração não leva padding" —
continua valendo; o que caiu é *como* se descobre que ela declara).
**O defeito, medido em 26/jul:** a REND-32 desliga o piso de padding quando acha a duração no HTML,
e procura com `grep -oE '__duracao[[:space:]]*=[[:space:]]*[0-9.]+'`. A cena escreve
`window.__duracao=D`, com **D uma variável** — o regex volta vazio, a cena é tratada como "não
declara" e leva o piso de 10 s assim mesmo. **A lei estava escrita, o gate estava no código, e o
defeito continuava vivo.**
**O tamanho:** 27 das 76 cenas do compilado do Jiang com **10,000 s exatos**; a
`nvidia-recorde-historico` declara **6,9 s** e o mp4 tinha **10,0 s** — 3,1 s de último frame clonado.
E o estrago não parava no travamento: cena inflada estoura o buraco dela e **engole a seguinte** —
4 sobreposições, de 2,8 s a 5,0 s (ver [REND-41]).
**A ironia que é a lição:** `render/capturar-paralelo.mjs` já tinha caído nessa e **documentado** —
*"a cena escreve `window.__duracao=DUR` (uma VARIÁVEL), o regex voltou 0"*, 170 linhas acima. O mesmo
engano foi reintroduzido noutro arquivo, porque a lição morava num comentário e não num mecanismo.
**A REGRA:** o valor que o navegador AVALIOU é o fato; o texto do arquivo é palpite. `capturar.mjs`
grava `window.__duracao` em `<FRAMES_DIR>/_duracao.txt` e o `render-one.sh` lê **esse arquivo**. As
greps ficam só como último recurso, para captura anterior a este conserto.
**A generalização:** ler propriedade dinâmica com expressão de texto sobre o fonte é adivinhação com
cara de medição — funciona no exemplo que o autor tinha na frente e falha calado no resto. Fato
gerado vence fato escrito.
**Como verificar:** `ffprobe` numa cena que declara <10 s tem de devolver a duração DELA, não 10.
Medido no conserto: `guerra-num-conteiner` 10,000 s → **6,600 s** (198 frames a 30 fps), QA sem preto.

### REND-41 · A emenda entre cenas tem portão próprio — e sobreposição é pior que vão
**Duas doenças na mesma junta, e a segunda ninguém tinha medido.** **VÃO:** a próxima cena entra
depois que a anterior acabou e o master aparece na fresta — o que o Mateus viu em 25/jul (*"que entre
as cenas não fique um espaço vazio… por menos de 1 seg"*). **SOBREPOSIÇÃO:** a próxima entra ANTES de
a anterior acabar; como os overlays são encadeados, a de cima cobre a de baixo e o **fim da cena
anterior nunca é visto**.
**Por que a sobreposição é a pior das duas:** o vão mostra o que não devia por 0,3 s e é visível a
olho nu. A sobreposição **esconde** o que devia por segundos e **não deixa rastro** — o vídeo não tem
buraco, não tem frame preto, não tem erro em log nenhum. Só falta conteúdo que ninguém sabe que
existia. No Jiang eram 4, de 2,8 s a 5,0 s, todas filhas da [REND-40].
**Por que o `qc-composto` não pegava:** ele amostra frame no PONTO de cada cena, e o defeito vive
ENTRE os pontos. Nenhuma amostragem por cena cai na emenda.
**AS FAIXAS.** ≤0,4 s: o `compor-blocos` **costura** sozinho, antecipando a próxima (material que já
existe; 10 frames de word-lock é desprezível). 0,4–1,5 s: **REPROVA** — grande demais para costurar,
pequeno demais para ser intenção. ≥1,5 s: **passa**, pode ser volta deliberada ao vídeo original, e
reprovar seria alarme falso — que ensina a ignorar o portão. Sobreposição: **reprova sempre**.
**A trava mora no código:** `scripts/compilado/qc-vaos.mjs` é chamado pelo `compor-blocos` ANTES de
montar (`--ignorar-vaos` força e assume o defeito). Conferir custa segundos de `ffprobe`; descobrir
depois custa a remontagem inteira.
**Como verificar:** `node scripts/compilado/qc-vaos.mjs <proj>` tem de sair `✓ PASS`.

### REND-42 · Dois limites que dimensionam a MESMA máquina têm de se conhecer
**Refina a [REND-33]** (o lock virou slots) e a [REND-14] (o render virou frame-parallel). Cada uma
está certa sozinha; o defeito nasce da COMBINAÇÃO delas, que ninguém tinha somado.
**Medido em 26/jul, no Mac de 12 núcleos:** `RENDER_SLOTS` = `nproc/4` = **3** renders simultâneos, e
cada render abre `RENDER_WORKERS` = `min(nproc,8)` = **8** processos → **24 processos em 12 núcleos**,
2× de sobrecarga. E sobrecarga é a causa documentada do frame preto na [REND-07]. Ou seja: **a
combinação PADRÃO das duas defesas reproduzia o defeito que cada uma existe para evitar** — e
silenciosamente, porque o sintoma (frame preto ocasional) parece ruído.
**Por que passou:** a REND-33 dimensionou os slots como `nproc/4` justificando *"cada render já usa
vários núcleos em shards"* — uma estimativa de ~4. Mas a REND-14, escrita antes e noutro arquivo,
tinha fixado o número real em **8**. Duas leis certas, escritas com meses de diferença, cada uma
supondo o valor da outra. Nenhuma estava errada; o que faltava era a multiplicação.
**A REGRA:** quando dois limites dividem o mesmo recurso, o segundo **deriva** do primeiro em vez de
supor. Aqui: `RENDER_WORKERS = nproc / RENDER_SLOTS` (teto 8, piso 1), calculado no `render-one.sh`
depois de o slot estar decidido, e **só quando o operador não fixou o valor à mão** — quem passa o
número manda. Provado: `⚙ 3 slot(s) × 4 worker(s) = 12 de 12 núcleos`, cena rendendo em 4 shards em
vez de 8, saída 3840×2160 e duração igual à declarada.
**A generalização, que vale fora de render:** limite calculado a partir de uma SUPOSIÇÃO sobre outro
limite é bug latente. Se a conta do teto A cita o comportamento de B, então A tem de LER B, não
estimá-lo — senão a verdade fica em dois lugares e eles divergem no dia em que um dos dois muda.
**Como verificar:** o `render-one.sh` imprime `⚙ N slot(s) × W worker(s) = N×W de <núcleos>`, e o
produto nunca pode passar dos núcleos da máquina.

### REND-43 · Ausência não tem direito de passar por decisão editorial
**Fecha a família de [REND-39], [REND-40] e da retomada do conserto** — o quarto caso da mesma
doença, em 26/jul: *o gate confere o que EXISTE em vez do que DEVERIA existir.*
**O caminho da falha, no `scripts/compilado/qc-vaos.mjs`:** a cena sem `-4k.mp4` era pulada com um
`continue` e ia para uma lista `semRender` que **só imprimia um aviso**. Some da timeline; o buraco
que ela deixa entre as vizinhas vira um vão GRANDE; e vão ≥1,5 s é classificado como *"respiro
editorial deliberado"*. A soma que decidia o veredito era `sobrepostos + visiveis` — `semRender` não
entrava. **Resultado: PASS verde com cena faltando no composto.**
**Medido:** escondi um clipe dos 76 do `compilado-previsoes-jiang` e rodei o gate. Antes do conserto:
`✓ PASS` com um "⚠ 1 sem render" perdido no meio do relatório. Depois: `✗ REPROVADO · 1 cena(s) SEM
RENDER`, com o nome da cena e o comando de conserto.
**Por que passou tanto tempo:** as duas situações são indistinguíveis pelo lado de fora — um vão
grande na timeline tem exatamente a mesma forma, venha ele de uma escolha de montagem ou de um render
que falhou. O gate precisava da informação que só ele tinha (*esta cena estava planejada*) e a estava
jogando fora antes de decidir.
**A generalização:** **respiro é decisão de quem monta; ausência é acidente de quem renderizou.** Um
gate que trata as duas igual está medindo o artefato em vez do plano. Sempre que um verificador
descartar um item por não encontrá-lo, esse descarte é um ACHADO, nunca um filtro — o item que sumiu
é justamente o que se está tentando pegar.
**Como verificar:** `node scripts/compilado/qc-vaos.mjs <proj>` — o veredito soma
`sobrepostos + visiveis + semRender`, e cada cena sem clipe sai nomeada na reprovação.

### REND-44 · Matar o pai não mata a árvore — e procurar pelo nome do pai não vê os filhos
**Dois erros que se escondem um ao outro, medidos em 26/jul.** A árvore de um render é
`render-one.sh` → `render/capturar-paralelo.mjs` → N × `render/capturar.mjs` (um por shard).
**Primeiro erro — a matança:** `pkill -P $pid` alcança só os filhos DIRETOS. Matei o laço três
vezes ao longo do dia e, ao conferir, achei **9 processos `capturar.mjs` vivos com PPID 1** — de
três execuções distintas, o mais velho com **46 minutos**, todos ainda batendo na API de tiles e
competindo com o render legítimo que rodava ao lado.
**Segundo erro, o que realmente engana — a conferência:** eu reportei "✓ zero órfãos" e acreditei.
Tinha procurado por `capturar-paralelo`, que é o nome do **pai**; os sobreviventes se chamam
`capturar`. O prefixo casava com o processo errado, o resultado veio vazio, e vazio parecia prova.
**Consequência que quase virou conclusão errada:** com 8 órfãos consumindo tiles, eu rodei um teste
de "1 worker contra 4 shards" para decidir se a lentidão era contenção — e o teste estava
contaminado desde o começo. Órfão invisível envenena a medição seguinte, não só a máquina.
**A regra:** ao matar um processo que gera subprocessos, mire o **padrão da unidade de trabalho**
(aqui, `render/capturar.*<id>.html`), que pega pai e netos numa tacada — nunca o nome de um
executável só, e nunca um prefixo amplo como `capturar`, que varreria as outras cenas e as outras
sessões da mesma máquina. E **confira com o mesmo padrão que matou**: conferência que usa um padrão
mais estreito que o alvo devolve vazio por construção.
**A generalização:** *ausência de resultado numa busca só é prova se a busca podia encontrar.*
Antes de ler um `pgrep`/`grep`/`ls` vazio como "limpo", verifique que o padrão casaria com o caso
positivo — de preferência rodando-o uma vez CONTRA o alvo ainda vivo.
**Como verificar:** `pgrep -f "render/capturar.*<id>\.html" | wc -l` antes e depois. Provado no
lote: **5 → 0**, pai e shards, sem tocar em render de outra cena.

### REND-45 · Default que só conhece uma plataforma transforma "onde rodar" em armadilha silenciosa

**Medido em 26/jul/2026.** `render/capturar.mjs:22` era
`const CHROME = process.env.CHROME_PATH || "/Applications/Google Chrome.app/…"`. Na VM Linux, quem
disparasse o render **sem exportar `CHROME_PATH`** ganhava um Chrome que nem sobe
(`Failed to launch chromium because executable doesn't exist at /Applications/…`) — e a VM tinha
`/usr/bin/google-chrome` instalado o tempo todo. Foi o que aconteceu com a corrente do
`compilado-previsoes-jiang`: **8 cenas deram `✗ FALHOU`**, entre elas as **6 que agentes Fable
tinham acabado de consertar**, e o trabalho de arte não virou clipe.
**O agravante, que é o de sempre:** o laço renderizou as 69 cenas que já tinham clipe, pulou todas
por retomada, e fechou com `=== RENDER 4K: (69 arquivos) === ✓ nenhuma cena barrada.` **Um resumo
verdadeiro sobre o portão, lido como se fosse sobre o render.** Quem olhasse só o rodapé concluiria
"acabou".
**O que torna isto uma armadilha e não um bug comum:** funcionava em toda chamada que passava por
um wrapper que exporta a variável. Só quebra na chamada nova — a corrente automática, o agente que
dispara na mão, a sessão de outra máquina. Ou seja, **quebra exatamente quando ninguém está
olhando**, e a mensagem de erro fica enterrada num log de shard.
**A regra:** default de caminho de executável **detecta a plataforma**; `process.env.X ||
(process.platform === "linux" ? … : …)`. `CHROME_PATH` continua valendo como override explícito, mas
deixa de ser **obrigação de quem chama**. Conserto que depende de alguém lembrar de exportar uma
variável é conserto morto (núcleo §9).
**O sintoma de doença mais ampla:** `capturar-screencast.mjs` e `check-overlap.mjs` **já tinham** a
detecção de plataforma. A correção existia e nunca foi propagada — a mesma metade-de-conserto-por-
branch que o comentário do `RENDER_CLOUD` no próprio `capturar.mjs` já documentava. Ao consertar um
default de ambiente, **grep o repositório inteiro pelo literal** e conserte todos de uma vez:
`grep -rn 'Applications/Google Chrome' --include='*.mjs' .`
**Consertados nesta rodada:** `render/capturar.mjs`, `render/capturar-alpha.mjs`,
`scripts/maprender.mjs`. **Ainda com o literal** (utilitários de bancada, rodam só no Mac):
`scripts/_audit-til.mjs`, `_shot-tl.mjs`, `_teste-video.mjs`, `_tmp-acende-por-parte.mjs`,
`_tmp-partes-no-quadro.mjs` — se algum for chamado na VM, cai no mesmo buraco.
**Como verificar:** na máquina alvo, `node -e 'console.log(process.platform)'` e depois renderizar
UMA cena de verdade conferindo o mp4 (`✓ QA ok, sem frame preto`). Provado: `adiz-senkaku` saiu com
312 frames / 10,40 s / 257 MB em 3m10s na `estudio-top10`, onde antes falhava em segundos.
**⚠️ Nota de leitura de log:** `grep` neste repositório precisa de **`-a`**. Vários arquivos
(`scripts/finalizar-youtube.mjs`, `seed/aprendizado.md`) são classificados como `data` pelo `file`
por causa de bytes altos, e o `grep` sem `-a` devolve **vazio sem erro** — mais uma busca que não
podia encontrar (REND-44).

---

**REND-47.** ⚠️⚠️ **FOOTAGE QUE O RENDER LÊ TEM DE SER ALL-INTRA. GOP normal faz o vídeo TRAVAR na
tela, e nenhum gate anterior pegava.** (27/jul/2026 — o Mateus reportou CINCO vezes até eu achar.)

**O mecanismo:** o render é frame a frame — para cada instante faz `video.currentTime = t` e captura.
Footage com GOP normal (`I B B B P B B B P …`) tem **um** keyframe no começo e depois só frames
DEPENDENTES, incluindo **B-frames**, que são codificados fora da ordem de exibição. Para entregar um
frame do meio dessa cadeia, o Chrome decodifica desde o keyframe anterior — e sob seek repetido a
entrega fica **imprecisa**. Na tela: *"a imagem fica indo e voltando, repetindo o mesmo frame passado
e o próximo"*.

**A prova que fechou o caso** (e é o método a repetir quando o suspeito for o formato): gerei o
footage original no **mesmo formato e taxa do clipe** (4K, 166 Mbps) porém **all-intra**, e **sem
passar pelo render**. Ele rodou 100% no QuickTime — o que eliminou de uma vez formato, taxa, codec e
reprodução. Convertido o footage para all-intra e re-renderizado: *"resolveu, o vídeo tá 100%, não
travou mais"*.

**Custo:** o arquivo fica ~2× maior (84 → 161 Mbps, medido). É insumo intermediário, sai do disco
depois da entrega, e a alternativa é o vídeo tremendo para milhões de pessoas.
`keyint=1:min-keyint=1:scenecut=0:bframes=0` — **nunca remover "para economizar espaço"**.

**Onde vive:** `scripts/normalizar-footage.mjs` já grava assim; o gate
`scripts/qc-footage-seekavel.mjs <proj>` reprova o que não estiver, e `--corrigir` conserta.

### ⚠️ A LIÇÃO DE MÉTODO, que vale mais que a lei

Passei por **seis medições erradas** antes de achar: hash exato, hash com tolerância, comparação por
região, cadência (tamanho do avanço), oscilação (direção do avanço) e casamento de frames. **Todas
mediam o ARQUIVO DE SAÍDA.** O defeito estava na ENTRADA, numa propriedade que nenhuma delas olhava
— a estrutura de keyframes.

Três coisas que só o dono viu, e que devolveram o rumo toda vez:
- *"indo e voltando"* → medir DIREÇÃO (frame N contra N−2), não tamanho. Deu 24,1% de frames
  voltando, e levou ao conserto do `requestVideoFrameCallback` — o primeiro dos dois defeitos
  empilhados descritos no fim desta lei. (Não é lei à parte: o rótulo informal "REND-46-bis" que
  esta frase usava foi normalizado em 31/jul/2026 — número não se cria em nota.)
- *"o footage original roda liso"* → a fonte está boa, o problema nasce no caminho.
- *"o teste de formato tá 100%"* → eliminou formato/taxa/codec numa tacada.

**Quando a medição diz "limpo" e o dono continua vendo o defeito, a medição está olhando para o
lugar errado — não o dono.** Mude o QUE se mede antes de mudar o quanto.

⚠️ **Dois defeitos empilhados, ambos reais:** o `requestVideoFrameCallback` (frame apresentado ≠
frame posicionado) zerou a OSCILAÇÃO de 24,1% para 0%; o all-intra matou o TRAVAMENTO. Consertar um
sem o outro não resolve — e foi por isso que o conserto parcial pareceu fracasso.

---

### REND-49 · A régua de resolução é o que a FONTE oferece, e o par baixar+transcodificar é indivisível

Estende [REND-08], que dizia "4K é o piso". Dois refinamentos que vieram do caso de 28/jul/2026
(dois vídeos do canal baixados em 1080p com 4K disponível) e de uma correção do Mateus no mesmo dia:

**1 · A régua é relativa, não absoluta.** *"Sempre 4K, nunca 1080p — exceto que não haja de fato 4K."*
Trava de número fixo (`if altura < 2160: reprova`) grita à toa em vídeo antigo que só existe em 1080,
e alarme falso ensina a ignorar o alarme. O certo é perguntar à plataforma o que ela publica
(`yt-dlp --dump-json` → alturas disponíveis), pegar o máximo dessa lista, e conferir que o arquivo
no disco bate com ele. 1080p passa quando 1080p é o teto real da fonte.

**2 · Na resolução máxima ainda há escolha, e o padrão da ferramenta erra.** O YouTube publica o mesmo
master em VP9 e AV1. O `bv*+ba/b` do yt-dlp prefere AV1 por ser mais eficiente — e traz **metade dos
bits**: medido em 2160p30, 3.706k de AV1 contra 7.335k de VP9; em 2160p60, 9.963k contra 21.356k. Para
arquivo que ainda vai ser recortado, emendado ou ter o fps mudado, cada re-encode só subtrai: parte-se
do que tem mais bits. Ordenar explicitamente resolve — `-S res,vbr` (resolução primeiro, taxa depois).

**3 · O Premiere não abre VP9.** Então baixar o melhor stream e transcodificar para H.264 é **um passo
só**, nunca dois opcionais. Quem faz a metade da tarefa descobre que o arquivo não abre e "resolve"
pedindo `avc1` ao YouTube — que é o teto de 1080p, exatamente o rebaixe que esta lei existe para
impedir. A qualidade se preserva na TAXA (derivar da entrada: ~1,5× o bitrate real, piso de 32 Mbps em
4K), não no codec.

**O caminho único:** `scripts/lib/baixar-video.mjs` — módulo e CLI. Baixa no topo da fonte, mede o que
veio, compara com o ofertado e transcodifica para edição. Escrever `yt-dlp` na mão é o que produziu o
erro ([SIS-47]).

---

### REND-50 · O render divide os frames entre workers, e a cena não acompanha os saltos

O Mateus achou pedaços inteiros faltando num clipe do `planetas-algodao-doce` (30/jul/2026): em
t=5,833s a **metade inferior do planeta**, os dois pratos da balança e o mostrador não estavam no
frame. Ele descreveu como *"pixels quebrados, oscilando"* — e a palavra oscilando era a pista, mas
não pelo motivo que parecia.

**O HTML está certo.** Renderizar o mesmo instante com `shot.mjs` devolve a cena intacta, sempre. O
defeito nasce na CAPTURA, depois de todos os gates terem passado — por isso nenhum deles o pega:
todos julgam o HTML.

**A causa:** `render-one.sh` chama `capturar-paralelo.mjs`, que divide os frames entre **8 workers**
(`--shard=w/W`). O worker 0 renderiza os frames 0, 8, 16, 24… **saltando de 8 em 8**. A cena não
acompanha saltos desse tamanho e o Chrome fotografa o quadro pela metade.

Medido, avançando 30 frames na mesma página até t=9,333s, contra a página aberta do zero:

| espera entre os avanços | divergência |
|---|---|
| nenhuma | 24,03% |
| 100 ms | **0,00%** |

E medido por quantos passos bastam para sujar: **1 passo = limpo (0,96%), 5 passos = sujo (10,14%)**,
saturando em ~26% a partir de 60.

**O que NÃO resolve** (todas testadas, todas custaram render):

| tentativa | pior frame contra o HTML |
|---|---|
| `--disable-gpu` (o fix de 07/jul) | 13,35% — estava ATIVO e o defeito veio assim mesmo |
| GPU ligada | 18,77% — não resolveu, só MOVEU os buracos de instante |
| GPU + 350 ms de espera | 17,83% |
| `--disable-partial-raster` + `--disable-checker-imaging` | ~18% |
| **serial (`RENDER_WORKERS=1`)** | **4,46%** — resolve 95%, mas sobra |
| **`render/capturar-isolado.mjs`** (página nova por frame) | **0 frames piscando, bloco máximo 24** |

**A saída:** `render/capturar-isolado.mjs` abre uma página nova para CADA frame — é o que o `shot.mjs`
faz, e ele acertou em 100% das comparações do dia. Custa **9,5×** o render normal (9min31s contra
~1min numa cena de 11 s).

**Não é o caminho padrão.** O fluxo que fica:
1. render normal (rápido, paralelo);
2. `node scripts/qc-tiles-faltando.mjs out/<proj>/graphics --frames=12` — compara o clipe PRONTO com o
   HTML que o gerou (nenhum gate de cena faz isso);
3. só o que reprovar volta pelo motor isolado — e desde 05/ago **quem monta é o `render-one.sh`**:

```bash
RENDER_CAPTURA=isolado bash render-one.sh <cena.html> <cena>-4k.mp4 branca --final
```

⚠️ **Chamar o `capturar-isolado.mjs` direto não entrega mais um mp4** — ele virou capturador puro
(só frames), porque havia DUAS montagens e a dele não punha logo, padding, faixa de cor, all-intra
nem áudio. Cena reparada por ele saía **sem a marca do canal**, com exit 0. O `branca` na 3ª posição
não é decoração: é a logo, e omiti-la já rendeu clipe sem marca.

No `planetas`, 1 cena de 56 precisou. O custo alto pago onde há defeito é irrelevante; pago no lote
inteiro seria meio dia de máquina.

**Por que só ESSA cena:** a `s01-hook-balanca` tem um `clipPath` SVG recortando um `<circle r="1250">`
em palco 4K — a composição mais cara do projeto. Cena de linha e texto não sofre.

---

### REND-51 · Ao caçar um defeito de render, confirme QUAL arquivo o pipeline executa

Passei horas de 30/jul editando `render/capturar.mjs` — flags de GPU, espera de 350 ms,
`--disable-partial-raster` — e o `render-one.sh` chama **`render/capturar-paralelo.mjs`**, um driver
que spawna workers. Parte dos consertos nunca chegou ao caminho executado, e eu lia a **variação
natural do defeito** como se fosse efeito das minhas mudanças. Anunciei "resolvido" duas vezes; nas
duas o Mateus teve de me corrigir depois de assistir ao vídeo.

**O sinal que denunciava e eu não li:** o defeito **MIGRAVA de instante** a cada tentativa — 6,3s →
5,8s → 8,6s → 9,9s — em vez de diminuir. Defeito que muda de lugar quando você mexe em algo que não é
a causa está te dizendo que você mexeu em algo que não é a causa. Diminuir é sinal de que você achou;
migrar é ruído.

**Três regras:**

1. **Antes de editar, siga a cadeia de execução até o fim** — `grep -n "node \|exec\|spawn" <script>`.
   O arquivo com o nome mais óbvio raramente é o que roda.
2. **Depois de editar, PROVE que o seu código rodou** antes de medir o efeito: um `console.log` com
   marca, ou uma env que muda o comportamento de forma visível. Medir sem essa prova é ler ruído.
3. **Amostra pequena não fecha diagnóstico.** Declarei a GPU como solução medindo 4 instantes de um
   vídeo de 331 frames; os 4 caíram limpos por acaso. A varredura densa mostrou 15–19% de divergência
   em outros. Quando o artefato é intermitente, ou se varre tudo, ou não se conclui nada.

---

### REND-52 · Render que TERMINA não prova footage seekável — o defeito da [REND-47] não trava o render, só a tela

**O caso (`senna`, 28/jul → 03/ago/2026).** O diário da estação de render de 28/jul dispensou o gate
com esta frase, escrita por mim: *"footage_seekavel: não re-rodado — render já concluído prova
footage seekável (senão teria travado)"*. Em 03/ago rodei o gate: **16 de 21 reprovavam**, e **6 dos
reprovados eram lidos por 7 cenas já renderizadas** (s24, s34, s35, s36, s39, s54, s55). Os clipes
existiam, tinham tamanho normal, passaram nos gates determinísticos, no `qc-visual` 9 lentes e no
`blackdetect` — e teriam ido para a entrega **tremendo na tela**, que é exatamente o defeito que o
Mateus levou cinco relatos para me fazer achar.

**O erro de raciocínio, que é o que interessa:** "travar" tem dois sujeitos possíveis, e eu troquei
um pelo outro. O footage com B-frames faz **a imagem** travar; **o processo** de render conclui
normalmente, no tempo normal, com código de saída 0. Inferir o estado da ENTRADA a partir do sucesso
da SAÍDA só vale quando a entrada ruim faria a saída falhar — e aqui ela não faz. É a mesma família
da lição de método da [REND-47]: seis medições erradas, todas olhando o arquivo de saída.

**A regra:** o gate `qc-footage-seekavel.mjs` é **barato e não-inferível**. Rode-o mesmo com o
projeto 100% renderizado, e principalmente aí — porque um render completo é justamente a situação em
que se sente autorizado a pular. Nenhum gate por-cena enxerga a estrutura de keyframes da entrada;
só ele. E se ele reprovar depois do render, o conserto é footage → re-render **só das cenas que
leem aquele arquivo**, não do lote.

**Ao consertar, duas coisas que mordem:**
1. **Corrija só o footage REFERENCIADO por um HTML de cena.** No `senna`, 10 dos 16 reprovados eram
   órfãos (`_media/yt/*`, `_media/cenas/*/midia.mp4` — insumo de pesquisa que nenhuma cena consome).
   Convertê-los para all-intra inflaria o disco em ~1 GB sem tocar em um frame da entrega. O mapa
   sai de `grep -ohE '_media/[^"'"'"'()]*\.(mp4|mov|webm)' graphics/*.html`, não do nome da pasta —
   no `senna` a pasta `spa92-comas-resgate` guardava lado a lado os três takes bons e um `midia.mp4`
   ruim que ninguém lia.
2. **`_render-4k-loop.sh` decide re-render por mtime do HTML.** Consertar o footage não mexe no HTML,
   então o loop pula a cena dizendo "já pronto". Tire o clipe do caminho (mover para `_bkp-*`, nunca
   apagar) antes de disparar, ou o conserto não acontece e o log diz que está tudo certo.

### REND-53 · Falha dentro de subshell não sobe — o loop de render dizia "✓" com cena faltando (03/ago/2026)

> 🔀 **Nasceu como REND-50 e foi renumerada em 03/ago** (SIS-62): o número já era da lei do worker que
> divide frames, citada em `docs/registro/PIPELINE-REVISAO-2026-07-30.md`. Quem estava no remoto ficou com o ID.

**O defeito.** `scripts/_render-4k-loop.sh` renderiza cada cena dentro de `( … ) &`. Quando o render
falhava, ele imprimia `✗ <id> FALHOU` **e nada mais acontecia**: variável incrementada em subshell
não sobe para o pai — o bash dá ao subshell uma cópia. O resumo final contava só `REPROVADAS`, que
são as barradas no PORTÃO, e anunciava `✓ nenhuma cena barrada` com **exit 0**.

**Medido no `nilo-nao-secou`:** log com `✗ 18-footage FALHOU` e `✗ 22-mapa3d FALHOU`, exit 0, e o
despachante avançou a estação como concluída — **28 clipes para 30 HTMLs**, sem uma linha de alarme.
O vídeo ficou dois dias "esperando render" com o loop jurando que tinha terminado. Foi preciso rodar
o loop em primeiro plano e ler o log inteiro para ver as duas linhas.

**A ironia que ensina.** Três linhas acima do teste quebrado já estava escrito:
*"⚠ NÃO ANUNCIAR COMPLETO COM CENA BARRADA. Um resumo que só conta o que deu certo é o
morto-silencioso clássico"*. A lição estava certa e aplicada **a metade do problema** — barrada no
portão contava, falha de render não. Consertar um caso da família e deixar o irmão é como não ter
consertado: o sintoma é idêntico para quem lê.

**As duas regras.** (1) Em shell, o canal que atravessa subshell é o **disco** — uma linha por falha
num arquivo temporário, contada no fim. Não existe contador compartilhado de graça. (2) O veredito
final não se apoia em contador nenhum: compare **ARTEFATO com ESPERADO** (clipes × HTMLs de cena). Um
número que ninguém incrementou parece zero, e zero parece sucesso.

**Onde mais isto mora:** todo laço `for … ( … ) &` que acumula estado, e todo resumo que conclui
"pronto" a partir do que registrou em vez do que existe no disco.

### REND-59 · Não desabilitar a GPU não é usar a GPU — a L4 rodava em swiftshader (03/ago/2026)

> 🔀 **Nasceu como REND-53 e foi renumerada para REND-59 em 03/ago** (SIS-62): duas sessões paralelas destilaram no mesmo número no mesmo dia. A REND-53 que **já estava no remoto** ficou com ele; esta, que só existia local, andou para o próximo livre. Citação antiga a "REND-53" que descreva o conteúdo abaixo aponta para cá.

**O que aconteceu.** A `estudio-mapas` (g2-standard-8 com **NVIDIA L4 de 24 GB**) foi ligada para
renderizar uma cena de mapa que na VM sem GPU levava ~70 min. Rodou. E rodou **exatamente igual**:

```
Chrome:      --use-angle=swiftshader
nvidia-smi:  No running processes found        ← a placa 100% ociosa
```

A máquina cara fazendo, por software, o mesmo que a barata.

**Por que passou despercebido.** O `capturar.mjs` já não passava `--disable-gpu` — desde a [REND-40]
a GPU é "ligada por padrão". Mas *ligada por padrão* ali significava apenas **não desligada**: o
Chrome headless em Linux, sem um backend pedido explicitamente, **escolhe o emulador sozinho**.
Ausência de proibição não é permissão de uso.

⚠️ **E o erro de verificação que quase encerrou o assunto:** eu havia "provado" a GPU rodando um
Chrome à mão com `--use-gl=angle --use-angle=vulkan` e lendo o renderer — `ANGLE (NVIDIA, Vulkan
1.4.312 (NVIDIA L4))`. Verdade, e irrelevante: **testei as MINHAS flags, não as do renderizador.**
Provar que a máquina *consegue* usar a GPU não prova que o *programa* a usa. A pergunta certa não é
"a GPU funciona aqui?" e sim "o processo que está rodando agora aparece em `nvidia-smi`?".

**A régua** (`render/capturar.mjs`): quando `nvidia-smi -L` acha placa, o Chrome recebe
`--use-gl=angle --use-angle=vulkan --enable-features=Vulkan`. Sem placa (Mac, VM comum), nada muda —
essas flags lá quebrariam a inicialização, e cena que não abre é pior que cena lenta.

**A medição depois** — mesma cena, mesma máquina, só as flags:

| | GPU | memória de vídeo |
|---|---|---|
| antes | **0%** · "no running processes" | 0 MiB |
| depois | **56%** | **6.400 MiB** em 3 processos |

**A suspeita que isto levanta, e não está fechada:** a `estudio-l4` antiga foi aposentada com o
diagnóstico *"sem GPU o mapa não rodava"*. Ela **tinha** GPU. É plausível que nunca a tenha usado, e
que o veredito tenha condenado a máquina pelo defeito do software. Não dá para confirmar — a
instância não existe mais —, mas serve de aviso: **antes de aposentar hardware por baixo desempenho,
prove que o programa estava usando o hardware.**

**A forma geral:** *configuração que "não impede" não é configuração que "faz".* Todo recurso caro —
GPU, cache, índice, aceleração — precisa de uma verificação que mostre o recurso EM USO por aquele
processo, não uma que mostre que ele existe.

### REND-60 · Existir e ser recente não é estar bom — o clipe de 458 MB sem `moov` (03/ago/2026)

> 🔀 **Nasceu como REND-54 e foi renumerada para REND-60 em 03/ago** (SIS-62): duas sessões paralelas destilaram no mesmo número no mesmo dia. A REND-54 que **já estava no remoto** ficou com ele; esta, que só existia local, andou para o próximo livre. Citação antiga a "REND-54" que descreva o conteúdo abaixo aponta para cá.

**O que aconteceu.** O render do `uruguai-despovoado` registrou
`⏱ s44-colonia-sacramento ESTOUROU O TETO (1800s) — investigue, não re-dispare no escuro`. O loop
matou a captura, como deve. Ficaram no disco **458 MB que o ffprobe recusa**: `moov atom not found` —
o índice do MP4 só é escrito no fim, e a captura morreu antes.

**Por que passaria como pronto.** A [REND-39] ensinou o loop a comparar TEMPO: *"pronto é o clipe
mais novo que a cena"*. O corrompido tinha **14:15** contra **06:02** do HTML — mais novo. Na passada
seguinte o loop diria `• já pronto` e pularia. O composto levaria 458 MB de lixo ilegível, e nenhuma
contagem denunciaria, porque o arquivo EXISTE e é RECENTE.

A REND-39 consertou "clipe velho passa por bom". Faltava o outro lado: **clipe novo e quebrado
também passa**.

**A causa da cena ser lenta:** o HTML tem 5 ocorrências de `maplibre` — é cena de MAPA, renderizada
por software numa VM sem GPU. É o caso que a [REND-53] mede: com a placa, o mesmo trabalho anda ~7×
mais rápido. Cena de mapa na `estudio-top10` é candidata natural a estourar o teto.

**A régua** (`scripts/qc-clipe-legivel.mjs`, ligado em `render.md` e `finalizacao.md`): o clipe abre,
tem duração > 0, e **há pacote de vídeo no último segundo** — um mp4 pode abrir e estar truncado no
fim. Custa ~40 ms por clipe. Medido no acervo: **1 quebrado em 297**.

⚠️ **Duas armadilhas que este gate cobrou de mim ao nascer:**
1. **O `-ss` do ffprobe recusa ponto flutuante longo.** `String(d - 0.4)` vira `15.799999999999999` e
   o ffprobe responde `Failed to set value … for option 'ss'` — o que marcou **71 de 71 clipes do
   `senna` como ilegíveis**, todos com a mesma mensagem. *Todas as linhas falhando igual é sinal do
   MEDIDOR.* Use `-read_intervals "<t>%+#N"`, que não sofre disso.
2. **`renameSync` falha com `EXDEV` entre filesystems.** O clipe vive em `/dados` e o `arquivo-morto/`
   do repo no home: arquivar de um para o outro não move nada e o laudo continua acusando. O quebrado
   vai para `_clipes-ilegiveis/` **ao lado do original**, no mesmo disco.

### REND-56 · Os frames vão para a RAM, e o caminho viaja ABSOLUTO — symlink o código apaga (03/ago/2026)

Uma cena 4K de 55 s gera ~1.650 JPGs de 4 MB — **6,6 GB escritos e lidos** só para o ffmpeg juntá-los
num mp4 de 300 MB. Com dois renders em paralelo no `/dados` (pd-standard, HDD), é isso que satura o
disco: não os arquivos finais. Os PNGs/JPGs são **descartados no fim** (o `trap` sempre apagou), então
nunca precisaram tocar disco nenhum. `/dev/shm` é tmpfs — RAM apresentada como sistema de arquivos —
e a VM tem 48 GB livres ali.

**A regra:** se `/dev/shm` tem folga (`df` decide, não a esperança — o piso é 20 GB), os frames
intermediários nascem lá. Sem folga, caem no disco: ficar sem espaço no meio da captura perde a cena,
e lento é melhor que perdido.

**E o caminho viaja ABSOLUTO, porque a versão por symlink não funcionou.** A primeira tentativa
mantinha `FRAMES_DIR` relativo e mudava só o destino com `ln -sfn`, para "não precisar tocar em nenhum
`.mjs`". O código já fazia algo incompatível com isso: o driver
(`render/capturar-paralelo.mjs`) abre com `rmSync(FRAMES, {recursive:true, force:true})` seguido de
`mkdirSync` — **ele apaga o symlink recém-criado e põe um diretório real no disco no lugar.**

Medido na VM com dois renders vivos: `/dev/shm` em **0% de uso** e os diretórios lá **vazios**,
enquanto 6 GB de frames se acumulavam no HDD. O recurso estava escrito, instalado, comentado — e não
existia. Nenhum gate percebeu, porque o render terminava normalmente; só ficava lento.

O conserto são duas palavras: `FRAMES_DIR` passa a ser absoluto, e os **cinco** capturadores
(`capturar`, `-paralelo`, `-screencast`, `-isolado`, `-alpha`) usam `resolve(cwd, FRAMES_DIR)` no
lugar de `join(cwd, FRAMES_DIR)`. `join("/a/b", "/dev/shm/x")` devolve `/a/b/dev/shm/x` — concatena;
`resolve` respeita o absoluto e devolve `/dev/shm/x`.

> **A lei:** *atalho que evita mexer no código só é atalho enquanto o código não faz nada contra ele.*
> Indireção (symlink, alias, montagem) é invisível para quem apaga e recria — e "não precisei mudar
> nada" costuma ser o sinal de que ninguém verificou se a mudança pegou. **Depois de ligar um caminho
> novo, meça o destino:** aqui bastavam `df /dev/shm` e `ls` no diretório para ver os dois vazios.

**Higiene que veio junto:** o `trap EXIT` limpa, mas render morto por `kill -9` deixa o diretório para
trás. Achados 7,1 GB em três órfãos (um de 5,8 GB). A varredura é segura porque o nome carrega o PID
(`frames-<cena>-4k-<pid>`): **PID vivo é intocável, PID morto é lixo** — nenhuma heurística de idade.

### REND-61 · Gate que coleta os elementos UMA vez mede a tela que já não existe (04/ago/2026)

> 🔀 **Nasceu como REND-60 e foi renumerada para REND-61 em 04/ago** (SIS-62): duas sessões paralelas — Mac e VM — destilaram no mesmo número no mesmo dia, e nenhuma estava no remoto. O desempate foi a ordem de chegada; esta veio depois. Citação antiga a "REND-60" que descreva o conteúdo abaixo aponta para cá.

O `qc-tamanho.mjs` juntava os candidatos a texto **antes** do laço de tempo e depois percorria os
frames medindo aquela lista. Funciona para cena estática. Para cena de **mapa**, mente inteira: o rig
do mapista **reconstrói o overlay a cada `__renderAt`**, então os nós coletados em t=0 saem do
documento e viram órfãos — `getBoundingClientRect` devolve 0×0 —, enquanto os nós novos, os que o
espectador de fato lê, nunca entram na conta. E em t=0 muitas cenas de mapa ainda não têm texto
nenhum: o gate media **o vazio** e dava verde.

Resultado: **verde falso em toda cena de mapa da casa**, desde sempre, num gate que existe justamente
para proteger legibilidade. Depois do conserto, a mesma cena (`s51b-vinte-e-um-conselhos-de-agua`)
mede `herói 430px ≥ 260` — havia texto lá o tempo todo.

O conserto é recoletar a cada frame, e ele traz uma consequência que precisa vir junto: **a chave do
acumulador deixa de ser o NÓ e passa a ser o TEXTO**. Com recoleta, o mesmo rótulo é um elemento novo
a cada quadro; indexar por nó transformaria um rótulo em dezenas de "elementos" distintos, cada um
medido no instante em que apareceu.

> **A lei:** *em cena animada, o DOM é um filme, não uma foto.* Todo gate que percorre o tempo tem de
> recoletar o que existe **naquele** frame — quem guarda referência de nó está medindo uma tela que já
> foi substituída. E quando se recoleta, a identidade do que se mede passa a ser o conteúdo, não o
> objeto.

**O agravante que torna isto uma dívida rastreável:** o `check-overlap.mjs` **já tinha corrigido** o
mesmo defeito, e o comentário dele diz por quê ("a recoleta muda o set"). O `qc-tamanho` ficou para
trás. *Quando dois gates olham a mesma tela, o conserto de um é dívida do outro* — vale varrer os
irmãos assim que um deles descobre algo.

### REND-62 · O teto de tempo matou 7 renders — estava calibrado numa máquina que não existe (04/ago/2026)

O `_render-4k-loop.sh` aborta qualquer render que passe de **1800 s**. O comentário ao lado justifica:
*"é a média medida (REND-25), então 1800 s dá 9× de folga para a mais pesada"*. Só que a **[REND-25]
   mediu uma instância histórica de 4 vCPUs, já aposentada** (o `CLAUDE.md` registra a troca de topologia).

Nesta VM, sem GPU, o ritmo medido em 04/ago é **0,38 frame/s**. Uma cena de mil frames precisa de
~2.600 s: era **morta pelo próprio teto** aos 1800 s, sempre perto do fim. Contagem do dia: `s08`
(1.043f), `s09` (1.265f), `s29` (2.000f), `s15` ×3, `s79` do uruguai ×3 — **sete mortes, todas em
cena longa, todas em pontos diferentes**, porque o que variava era a velocidade, não a cena.

Persegui duas hipóteses erradas antes de achar esta, e as duas pareciam boas:
· **CDN externo** — as cenas que morriam carregavam `maplibre-gl` do unpkg. Troquei as 47 por cópia
  local. **Não mudou nada.** A correlação existia porque cena de mapa é longa, não porque usa rede.
· **Falta de memória** — medi na hora da morte: **50 GB livres de 62**. Nunca foi disso.

O que faltava era medir a coisa certa: eu contava **frames**, e a decisão do teto é sobre **tempo**.
Só quando pus `etimes` ao lado da contagem o padrão apareceu de imediato.

> **A lei:** *limite calibrado noutra máquina vira armadilha na atual.* Todo teto absoluto — segundos,
> MB, slots — carrega junto a máquina onde foi medido. Quando o hardware muda, ele não avisa: continua
> disparando, agora contra trabalho sadio, e o log diz "estourou o teto" como se a culpa fosse da cena.

**Conserto (aplicado):** o teto passa a ser **proporcional ao tamanho do trabalho** —
`frames ÷ 0,20 f/s + 300 s`, com piso nos 1800 s antigos. Só aumenta, nunca reduz, e segue matando
render pendurado, que é a razão de existir. Provado no ato: a `s25-mapa-bolivia` (mapa 3D, a
linguagem mais lenta do catálogo) **fechou com 261 MB** — a primeira cena longa a terminar no dia.

Irmã da [SIS-95]: lá, dois limites certos somavam permissão; aqui, um limite certo envelheceu com a
máquina. *Todo número absoluto na doutrina precisa dizer em que hardware foi medido — senão ninguém
sabe quando ele expira.*

## REND-63 — o gerador de master corta por keyframe e acumula erro; 4 projetos travaram por isso

**04/ago/2026, medido no `uruguai-despovoado` com o master RECÉM-REGERADO do bruto correto:**

```
bruto ............... 1487,3 s
cortes removem ...... 256,4 s  (22 cortes)
master DEVERIA ter .. 1230,9 s
master TEM .......... 1234,0 s
divergência ......... +3,2 s   (tolerância ±1 s)
```

Regerar não conserta — **o defeito nasce no `master-decupado.mjs`**. São ~0,15 s de sobra por corte,
distribuídos em 22 cortes: a assinatura de quem corta alinhando ao **keyframe mais próximo** em vez
de cortar no frame exato. Com poucos cortes passa na tolerância; a partir de ~10 cortes, estoura.

**Por que isso é caro:** o gate só roda na FINALIZAÇÃO, depois de todas as cenas renderizadas.
Quatro projetos bateram nele hoje (`oceano-700km`, `nilo-nao-secou`, `uruguai-despovoado`,
`especies-humanas`) — todos com 100% do render pago antes de descobrir. E o conserto sugerido pela
própria mensagem ("regere o master") **não resolve**, o que faz o operador rodar 20 min de ffmpeg
para chegar ao mesmo FAIL. Eu rodei duas vezes antes de medir.

**O conserto de raiz:** cortar com precisão de frame — reencodar o segmento de borda, ou usar
`-ss`/`-to` com `-accurate_seek` antes do input e sem `-c copy` nas fronteiras. E **o gate tem de
migrar para o começo**: comparar `soma(cortes)` com a duração que o master TERIA é uma conta de
milissegundos, que pode rodar assim que o `_cortes.json` existir, muito antes de gastar render.

**Regra geral:** verificação barata que só roda no fim transforma erro de centavos em prejuízo de
horas. O lugar de um gate é o ponto mais cedo em que ele consegue reprovar.

### REND-64
**A guarda de prontidão da mídia escala com a carga da cena — cena de muitos planos afoga um timeout fixo.**

Origem: 04/ago/2026, `paises-baixos-mar`. O Mateus pediu mais planos por cena ([ARTE-106]) e as cenas
passaram a carregar 4, 5, 6 vídeos 4K de uma vez. O `__videoPronto` de todas tinha **timeout fixo de
9 s**, herdado de quando a cena tinha um clipe só. Resultado medido: a `s01` (5 vídeos, **1,16 GB**)
morreu com `page.screenshot: Timeout 30000ms exceeded`, e a `s34b` (4 vídeos, 1,38 GB) logo atrás.
Corrigida a guarda para 30 s, a mesma `s01` capturou em **5,1 s**.

> **A lei:** *o timeout de prontidão é função do que a cena carrega, não uma constante.* Régua que
> vale: **≥4 clipes ou >600 MB → 30 s; 2–3 clipes → 20 s; clipe único → 9 s basta.** Sob concorrência
> de render o gargalo vira o disco, e 9 s não dão nem para o primeiro clipe decodificar.

**O que torna o defeito perigoso é o silêncio.** Quando a guarda estoura, a promessa resolve mesmo
assim e a captura segue **sem o vídeo** — a cena sai com o fallback desenhado e **gate verde**. Foi
pego duas vezes no mesmo dia: aqui, e por outro agente em `s22/t=2,6`, que viu o fallback no frame e
subiu a guarda para 25 s. Cena que sai sem a mídia que a define não é "cena com defeito": é cena
errada com aparência de pronta.

**A família:** é o mesmo padrão da [ARTE-113] (a órbita nova revelou a borda do mapa) — **lei nova
cria defeito novo, e só o artefato renderizado denuncia.** Quando uma regra muda o que a cena carrega
ou como a câmera se move, o que era folga vira aperto. Medir o HTML não basta; tem de medir o clipe.

**Onde se conserta:** o `editor-de-arte` dimensiona a guarda pela contagem de clipes ao escrever a
cena, e o `qc-cena` passa a reprovar guarda menor que a régua acima quando a cena tem 2+ vídeos.

### REND-65
**O carimbo de retomada vê o HTML e é cego para a MÍDIA — "já pronto (hash confere)" pode ser mentira.**

Origem: 04/ago/2026, `paises-baixos-mar`. O `render-one.sh` grava `<clipe>.de-html` com o sha1 do HTML
que o gerou, e o `_render-4k-loop.sh` pula a cena quando confere. Isso resolve *"o HTML mudou"* — e
não enxerga o caso oposto: **HTML igual, mídia trocada**. Um footage reencodado (fps, all-intra), uma
foto substituída, um clipe recortado: nada disso mexe no HTML.

Medido: a caça reencodou **27 clipes** para 30 fps all-intra depois que **4 cenas já tinham
renderizado** (`s34b`, `s37`, `s43`, `s53b`). As quatro carregavam o material antigo — hash em dia,
gate verde, e o log dizendo *"já pronto (hash confere)"*. Nenhum humano teria motivo para desconfiar.

> **A lei:** *"pronto" é ser mais novo que TUDO que alimenta a cena* — o HTML **e** cada arquivo de
> mídia que ela referencia. Retomada continua valendo (artefato pronto é ativo pago e não se refaz à
> toa), mas a comparação é contra o insumo inteiro, não contra metade dele.

**A família:** é irmã da [REND-64] (a cena sai sem o vídeo e o gate fica verde) e da mesma linhagem do
`words.json` que descrevia um master que não existia mais ([SIS-100]). O padrão: **artefato que existe,
é recente, e descreve um mundo que mudou** — e todo gate que compara só uma das pontas o declara são.

**O gate:** `node scripts/qc-clipe-vs-midia.mjs out/<proj>` compara o mtime do clipe com o de cada
`src` que o HTML referencia. Roda em segundos e deve ser chamado **antes de montar**, junto com o
`qc-clipe-repetido`. Para re-renderizar, apague o `-4k.mp4` **e** o `.de-html` — senão o loop os pula.

**Onde se conserta de vez:** o carimbo passa a guardar também o hash das mídias referenciadas, e aí a
comparação vira uma só. Enquanto isso não existir, o gate acima é a rede.

<!-- ═══ LEIS VINDAS DA VM `estudio-top10`, fundidas em 2026-08-05 ═══
     Elas foram destiladas lá, em paralelo, e nunca chegaram ao git. As que colidiam em número
     com uma lei diferente daqui foram RENUMERADAS (cada uma diz de onde veio, logo abaixo do
     título). As que caíam em número livre entraram com o ID original. Nada foi descartado. -->

### REND-67 · Consertar o `.sh` que está RODANDO mata o loop em execução — o bash lê o script por OFFSET DE BYTE

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `REND-67` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso (`nilo-nao-secou`, 03/ago/2026).** O loop de render subiu às 04:38. Às 04:54 outra sessão
editou o `_render-4k-loop.sh` para consertar o canal de falhas da [REND-66] — um conserto correto, que
cresceu o arquivo de 8.549 para 10.744 bytes. O loop em execução morreu assim:

```
line 131: iável: command not found
line 142: [: : integer expression expected
line 144: : No such file or directory
line 145: syntax error near unexpected token `)'
```

**Por que:** o bash não carrega o script na memória — ele lê sob demanda, guardando um **offset de
byte**. Ao voltar para buscar a próxima linha, o offset antigo agora aponta para o meio do arquivo
NOVO, e o interpretador retoma no meio de uma palavra. O `iável:` é o rabo de "variável", partida ao
meio por um comentário em PT-BR que o conserto inseriu acima. O script não tem defeito nenhum:
`bash -n` passa nas duas versões, antes e depois.

**O que isso custou:** o loop caiu levando junto o `✗ 45-footage FALHOU` — uma falha **espúria**, de
cena cujo clipe existe e está íntegro. Quem lesse o log iria re-renderizar uma cena sadia e procurar
defeito onde não havia. Diagnóstico envenenado é pior que log vazio.

**A regra:** antes de editar qualquer `scripts/*.sh`, **verifique se ele está em execução**
(`pgrep -af "[_]nome-do-script\.sh"`). Se estiver, há duas saídas honestas — esperar o loop fechar, ou
editar uma **CÓPIA** e trocar por `mv` (rename é atômico e o processo em voo segue lendo o inode
antigo até terminar). Editar no lugar é a única que perde trabalho. Vale para `.sh`; script Node/Python
é lido inteiro na carga e não sofre disso.

**O sintoma que identifica esta classe:** erro de sintaxe ou "command not found" com **pedaço de
palavra** (`iável`, `ção`, `endo`) num script que roda há semanas sem falhar. Não procure o bug no
script — procure quem o salvou nos últimos minutos (`stat -c '%y' <script>` contra a hora de início do
processo).

---
### REND-69 · Re-render de cena PRONTA destrói o clipe antes de saber se consegue refazê-lo

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `REND-69` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso (`nilo-nao-secou`, cena `22-mapa3d`, 03/ago/2026).** Às 10:14 o clipe existia e estava
**perfeito**: 1.306.734.481 bytes, duração 55,434 s contra contrato de 55,43 s, `blackdetect` limpo, e o
frame a 80% com a geometria toda no lugar — relevo 3D da Etiópia, traçado do Nilo Azul, bandeira,
nuvens de monção. O extrator de QC registrou tudo isso no log. Às 19:02, quando a estação de render foi
retomada, o arquivo **não existia em lugar nenhum do disco** — nem em `arquivo-morto/`, nem no bucket.

Entre um instante e outro, dois renders da **mesma cena já pronta** foram disparados
(`_render-22-refire.log`, 4 workers, e `_render-22-w8.log`, 8 workers). Os dois falharam. E ao falhar
não deixaram o clipe velho intacto: deixaram **nada**.

**A causa:** o `render-one.sh` escreve no caminho de destino. Um render que começa já compromete o
arquivo que estava lá; se ele morre no meio — teto, vigia, Chrome caído — o artefato anterior se foi
junto. A retomada de graça do `_render-4k-loop.sh` (cena com clipe é pulada) protege contra
re-render **acidental**, mas não contra o deliberado.

**Por que isso escapa:** a doutrina de custo diz *"artefato pronto é ativo pago, nunca re-renderizar
para conferir"* — e a leitura natural é que re-renderizar apenas **gasta** tempo à toa. Não é isso: ela
**arrisca o ativo**. O clipe de 1,3 GB não foi desperdiçado, foi *destruído*, e com ele as ~50 min de
captura que o produziram. O verbo certo não é "gastar de novo", é "apostar o que já está pago".

**A regra:** antes de re-renderizar qualquer cena que **já tenha clipe**, mova o clipe para fora do
alcance primeiro. Se o novo render vencer, o antigo se apaga depois; se perder, o vídeo continua
inteiro.

```bash
mv "$D/$id-4k.mp4" "$D/$id-4k.mp4.bkp"     # ANTES de disparar
# render …  → venceu: rm o .bkp · falhou: mv de volta
```

**O sintoma que identifica esta classe:** contagem de clipes que **diminui** entre duas leituras da
mesma pasta, sem ninguém ter apagado nada de propósito. O laudo de QC antigo é a prova de que o
artefato existiu — leia `_qc-*.log` e `diario.jsonl` antes de concluir "a cena nunca renderizou".
Preserve o frame de prova (`cp` do PNG de QC) assim que suspeitar: ele é o que distingue *"a arte está
quebrada"* de *"a captura se perdeu"*, e as duas hipóteses levam a consertos opostos.
### REND-70 · Rota especial que depende de alguém LEMBRAR é rota que não existe (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `REND-70` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso (`uruguai-despovoado`).** O estúdio tinha, inteira e funcionando, a rota de render alpha:
`render-alpha.sh` → `render/capturar-alpha.mjs` (PNG com `omitBackground`) → ProRes 4444
`yuva444p10le`. Escrita, comentada, testada. E as duas cenas que precisavam dela — `s40-cta-inscrever`
e `s91-cta-final`, que declaram `html,body{background:transparent}` e cujo cabeçalho **manda em voz
alta** *"render via capturar-alpha/ProRes4444"* — saíram em H.264 e viraram 44,3 s de tela branca por
cima do apresentador ([FIN-111]).

Ninguém desobedeceu. O `_render-4k-loop.sh` renderizava `"$D"/*.html` com um único comando para todas
as cenas: a rota alpha só seria usada se um humano notasse aquela cena no meio de 58 e a rodasse à mão.
**O defeito não estava no código que existia — estava na ausência de quem o chamasse.** Custou três
estações: o render entregou, o QC por cena aprovou (nenhum gate olha o canal alpha) e só a
FINALIZAÇÃO, três paradas adiante, viu o branco.

**A causa.** Rota especial acionada por memória humana tem taxa de acerto que decai com o tamanho do
lote. Em 5 cenas alguém lembra; em 58, não. E o esquecimento é **silencioso**: produz um arquivo com
nome certo, data certa e que abre — a contagem de artefatos aprova.

**A regra.** Quem decide a rota é o ARTEFATO, não a memória de quem dispara. O laço agora lê o próprio
HTML (`html,body{…background:transparent}`, ancorado — `background: transparent` solto casaria com
qualquer elemento interno e mandaria cena normal para o `.mov`, onde a montagem não a procura) e roteia
sozinho, com o clipe saindo `-4k.mov` em vez de `-4k.mp4`. O mesmo vale rio abaixo: o
`xml-premiere-5camadas.mjs` decide a camada pelo `pix_fmt` do arquivo (`yuva`/`argb` = selo → V3), não
pelo nome.

**Como reconhecer a classe.** Toda vez que a documentação disser *"para o caso X, use o comando Y"* e
o caso X for detectável a partir do arquivo, essa frase é um **bug esperando o lote crescer**. Ou o
detector entra no código, ou a rota morre de desuso — e morre produzindo artefato de aparência normal.
### REND-72 · "ESTOUROU O TETO" é o rótulo que o loop dá a QUALQUER morte por sinal — inclusive à própria sessão morrendo (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `REND-72` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso (`nilo-nao-secou`, 22-mapa3d).** O `_render-22-serial.log` terminava em
`⏱ 22-mapa3d ESTOUROU O TETO (21600s)`. O teto era de 6 h e o loop tinha sido disparado **cinco
minutos antes** — a mensagem era aritmeticamente impossível, e mesmo assim foi lida por duas
sessões como "a cena é pesada demais, precisa de GPU".

**A mecânica.** O laço decide assim (`scripts/_render-4k-loop.sh`):

    elif [ "$rc" -ge 128 ]; then echo "⏱ $id ESTOUROU O TETO (${RENDER_TETO_S:-1800}s)"

`rc ≥ 128` não quer dizer "o cão de guarda mordeu": quer dizer **morto por sinal**, qualquer um.
SIGHUP=129, SIGKILL=137, SIGTERM=143. O cão do teto é só uma das origens possíveis — as outras são o
OOM killer, um `pkill` de outra sessão e, a mais comum aqui, **o grupo de processos indo embora junto
com a sessão headless que o criou**. O horário do log é a prova barata: comparar o mtime do log com o
disparo desmente o rótulo em dois segundos.

**Por que custa caro.** O rótulo errado aponta para a conclusão errada — "cena pesada" — e a
conclusão errada custa infra: quase liguei uma VM com GPU (`estudio-mapas`, g2-standard-8 + L4) para
uma cena que esta mesma máquina, sem GPU, já tinha renderizado com sucesso em ~1 h.

**A regra.** Antes de aceitar "estourou o teto", faça a conta: `mtime do log − hora do disparo ≥
RENDER_TETO_S`? Se não fecha, o render foi **morto**, e a pergunta certa é *por quem*. Diagnóstico que
não fecha na aritmética não é diagnóstico, é rótulo.

**Conserto pendente** (não aplicado: havia um loop do `uruguai-despovoado` executando este mesmo
`.sh`, e editá-lo o mataria — [REND-67]): o subshell do cão deve deixar um arquivo-sentinela ao
morder, e a mensagem de teto só sair quando a sentinela existir. Sem isso o loop segue confessando
um crime que não cometeu.
### REND-74 · Conserto commitado pode ser APAGADO por quem consertou outra coisa no mesmo arquivo (04/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `REND-74` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** O commit `0e9646f` (03/ago, 20:46) ensinou o `_render-4k-loop.sh` a reconhecer cena
**alpha** e mandá-la pela rota ProRes 4444 — o conserto do [FIN-111], que nasceu de 44,3 s de tela
branca cobrindo o Bôco no `uruguai-despovoado`. Às **01:54 do dia seguinte**, outra sessão escreveu
no mesmo laço o carimbo de hash (`<clipe>.de-html`, o conserto do "mtime mente"). Ela partiu de uma
cópia do arquivo **anterior ao commit** e salvou por cima.

Resultado medido 12 horas depois, na estação de trilha:

    git show HEAD:scripts/_render-4k-loop.sh | grep -c -i alpha   →  12
    grep -c -i alpha scripts/_render-4k-loop.sh                   →   0

O conserto estava **no HEAD e fora da árvore**. Sem conflito, sem aviso, sem falha: o laço rodaria
liso e devolveria os dois CTAs em H.264 de novo — o mesmo defeito, três estações à frente, depois
de gastar render e finalização. A árvore do repo principal vive com dezenas de arquivos modificados
por sessões concorrentes, então `git status` mostrando ` M` no arquivo não chama atenção nenhuma.

**A regra.** Antes de escrever num arquivo compartilhado do motor 24/7, **compare a cópia de onde
você partiu com o HEAD** — e depois de escrever, confira que o que já estava lá continua lá:

    git diff <arquivo> | grep '^-' | grep -iE '<marca do conserto que existia>'

Linha removida que você não pretendia remover é regressão, não ruído do diff. Quando dois consertos
tocam o mesmo laço, eles quase sempre **convivem** (aqui: a rota decide QUAL artefato, o hash decide
SE ele ainda serve) — a integração é somar, não escolher.

**Cheiro.** Diff que remove mais do que você escreveu. Este removeu 36 linhas para inserir 22, e o
número estava à vista em `git diff --stat` o tempo todo.

**Nota de rastreio:** o comentário do carimbo de hash se cita como "REND-72", mas esse ID já era do
teto de render ([REND-72], 03/ago) e a lei do hash nunca foi destilada. ID tomado por duas coisas é
o mesmo descuido de origem — a cópia velha não tinha o ID novo para consultar.
### REND-75 · Antes de disparar o render, procure o loop que já está de pé — e não creia no `_render.log` (04/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `REND-75` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** A estação de render do `uruguai-despovoado` chegou com a ordem literal *"dispare
`setsid nohup bash scripts/_render-4k-loop.sh …`"* e a nota de fila *"FALTAM 3 CLIPES"*. As duas
coisas estavam desatualizadas, e obedecer a qualquer uma teria custado trabalho:

1. **Faltava 1 clipe, não 3.** Os dois CTAs alpha (`s40`, `s91`) já tinham saído em `.mov` pela rota
   restaurada — 23:12 e 03:46 — e abrem no `ffprobe`. Contar `*-4k.mp4` sem contar `*-4k.mov` é o
   que produz a nota errada: cena alpha é cena renderizada, e some da conta feita só com `mp4`.
2. **Já havia um loop vivo**, disparado 32 min antes por outra sessão: `ppid=1`, `sid` próprio, de
   pé desde 04:22, renderizando `s61` naquele instante. Disparar o segundo teria posto duas capturas
   da MESMA cena numa VM que já estava a **0,0% de idle** (`RENDER_SLOTS = nproc/4 = 4`, e dois
   projetos — `uruguai` e `especies-humanas` — ocupando 8 shards de Chrome 4K).
3. **O `_render.log` do projeto mentia por omissão.** Ele estava congelado em 03:46, do ciclo
   anterior, terminando em `✗ s79 FALHOU` / `✗ s80 FALHOU`. O loop vivo não escrevia nele: escrevia
   em `/dados/out/_despacho/uruguai-render-ciclo.log`, onde as mesmas cenas apareciam como `↻` em
   andamento. Quem lesse o `_render.log` concluiria que o render tinha morrido deixando falhas.

**A regra.** Render é a única estação cujo trabalho pode já estar acontecendo quando você chega.
Antes de disparar, três comandos:

    pgrep -af "[_]render-4k-loop.sh <proj>"   # o .sh é obrigatório; 3 linhas com o MESMO sid = 1 loop
    ls -l /proc/<pid>/fd/1                    # ONDE ele loga de verdade — não presuma _render.log
    ls -l /proc/<pid>/cwd                     # de qual árvore ele roda (worktree = código velho)

Achou loop vivo com `sid` próprio? **Não dispare.** Ele já pula por hash o que está pronto e barra
no portão o que reprova; o seu só duplicaria cena. O `cwd` é o que revela a armadilha silenciosa:
aqui o loop rodava do repo **principal** e tinha os dois consertos ([REND-72] hash + [REND-74]
rota alpha), enquanto o worktree da sessão só tinha um dos dois.

**Corolário sobre a contagem.** Um clipe por HTML se confere com `ls *-4k.mp4 *-4k.mov`, nunca só
com `mp4` — e "falta clipe" se decide pelo par (existe? o hash do carimbo confere?), não pela nota
que veio na fila. A nota descreve o mundo de quando foi escrita; o disco descreve o de agora.

**Cheiro.** Nota de fila e disco discordando no número. Quando discordarem, o disco ganha — e a
discordância em si é o aviso de que outra sessão mexeu no projeto depois da nota.

---
### REND-76 · Rode os gates de ELEGIBILIDADE antes dos de PREPARO — normalizar mídia condenada é transcodificar lixo (04/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `REND-76` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso, e o erro é meu.** Estação de QC do `o-acre-o-estado-que-o`. Rodei os gates leves em bloco e
tratei dois achados como paralelos, quando eram sequenciais:
- `qc-procedencia` REPROVOU: 3 arquivos de banco gratuito vetado pela marca, no ar em 2 cenas.
- `qc-footage-seekavel` REPROVOU: 0 de 6 `.mp4` seekáveis — o render trava sem `--corrigir`.

Disparei o `--corrigir` na hora, porque "CPU é livre". **Dois dos seis arquivos eram justamente os
proibidos.** O transcode all-intra rodou 18 minutos no maior deles, inflou os dois de 293 MB para
**2,3 GB**, e no fim a estação de pesquisa os substituiu e mandou para `arquivo-morto/`. Transcodei,
com capricho, material que já estava condenado quando comecei — e ainda segurei a fila: o único
processo serial da normalização gastou o primeiro terço do tempo no arquivo mais pesado da lista,
que era um dos descartados.

**A regra é de ORDEM, não de esforço.** Os gates da casa se dividem em dois tipos, e a ordem entre
eles não é indiferente:
- **ELEGIBILIDADE** — *este arquivo tem direito de estar aqui?* (`qc-procedencia`, licença,
  autoria, `qc-repeticao`). Respondem SIM/NÃO sobre a existência da mídia.
- **PREPARO** — *este arquivo está pronto para a máquina?* (`qc-footage-seekavel --corrigir`,
  normalização de fps, proxies, upscale). Gastam CPU e disco **sobre um arquivo que vai ficar**.

**Elegibilidade primeiro, sempre.** Preparo é caro e é sobre o futuro do arquivo; rodá-lo antes de
saber se o arquivo tem futuro é apostar. E a assimetria decide: rodar preparo tarde custa uma espera;
rodar cedo em material condenado custa a espera **e** o trabalho **e** o disco — e ainda cria o risco
de o arquivo inflado sobreviver no `arquivo-morto` porque ninguém lembra que ele engordou 8×.

**Prático.** (1) Quando um gate de elegibilidade estiver vermelho, **não dispare preparo antes de
resolvê-lo** — nem "enquanto isso", nem "só nos outros", a menos que a ferramenta aceite lista de
exclusão (a nossa não aceita: `qc-footage-seekavel` só recebe o projeto). (2) Ao arquivar mídia
vetada **depois** de tê-la normalizado, registre o tamanho no `LEIA.md`: 2,3 GB de lixo com nome de
arquivo bom é candidato a voltar. (3) Terminada a troca, **re-rode o preparo** — os substitutos
chegam crus.

---
### REND-77 · O carimbo `.de-html` prova que o HTML não mudou — e é cego para a mídia que mudou por baixo dele (05/ago/2026, QC do `especies-humanas`)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `REND-77` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O que o carimbo faz.** Desde a [REND-72] o `render-one.sh` grava `<clipe>-4k.mp4.de-html` com o sha1 do
HTML que gerou o clipe, e o `_render-4k-loop.sh` decide por ele:

```bash
if [ "$_hnow" = "$(cat "$_carimbo")" ]; then echo "• $id já pronto (hash confere)"; continue; fi
```

Funcionou perfeitamente hoje: consertei o Ç de duas cenas, o hash do HTML mudou, e as duas ficaram
elegíveis a re-render sem eu precisar tocar em nada.

**Onde ele não enxerga.** O `especies-humanas` tem 8 cenas com footage Pexels que a pesquisa vai
substituir. Essa troca acontece **no sistema de arquivos, sob o mesmo `src`**: `_media/footage/x.mp4` sai
e outro entra com o mesmo nome. O HTML não muda **uma letra** — o hash é idêntico, o carimbo confere, e o
loop anuncia *"já pronto (hash confere)"* sobre um clipe que tem o arquivo VETADO cozido dentro dos
pixels. O gate de procedência lê o HTML e o `_media`, vê o arquivo novo e dá PASS; o clipe que vai ao ar
continua com o velho. **Os dois concordam e os dois estão certos — e o vídeo sai errado.**

**A raiz.** O carimbo responde *"o HTML mudou?"* e está sendo lido como *"o clipe está atualizado?"*. São
perguntas diferentes desde que o HTML tem dependências externas. O clipe é função de `(HTML, mídia
referenciada, fontes, geometria)` e o carimbo cobre só a primeira parcela.

**A regra.** (1) Trocou mídia sob o mesmo nome de arquivo? **Apague o `-4k.mp4` das cenas afetadas** — é o
único sinal que qualquer caminho de render respeita (o `.de-html` não pega, o `-nt` do mtime não pega
porque quem ficou mais novo foi a MÍDIA, não o HTML). (2) Regra geral para quem troca insumo: se a
mudança não passou pelo arquivo que o carimbo mede, o carimbo mente por omissão — invalide o artefato à
mão. (3) Conserto de fundo, quando alguém for mexer no `render-one.sh`: o carimbo deveria somar ao sha1 do
HTML os hashes dos `src` locais que ele referencia.

---

## REND-79 · `-ss` com `-c copy` DESSINCRONIZA a amostra, e o defeito parece ser do arquivo (06/ago/2026)

**O que aconteceu:** entreguei ao Mateus uma prova de sincronia com 8 trechos do mux do `ceuta`,
extraídos com `-ss <t> -i <arq> -c copy`. Ele revisou e achou o que nenhuma medição tinha achado:
*"a parte cinco começou a ficar dessincronizado, pouco menos de um segundo talvez, mas de uma forma
bem mais perceptível do que o minuto um"*.

**O arquivo estava certo. A amostra é que nasceu torta.** Com `-c copy`, o ffmpeg não pode cortar o
vídeo num ponto arbitrário — ele começa no **keyframe anterior** ao `-ss`. O áudio, que não tem
keyframe, começa no ponto **exato**. A diferença entre os dois vira dessincronia **introduzida pela
extração**, proporcional à distância até o keyframe: num bruto 4K de câmera, até ~1 s.

Pior: o erro **varia de amostra para amostra**, porque depende de onde o keyframe caiu. Foi por isso
que a quinta estava visivelmente pior que a primeira — e foi exatamente esse padrão que me fez
suspeitar do arquivo em vez da ferramenta.

**A lei:** *amostra tirada com `-c copy` não serve para julgar sincronia.* Ela serve para julgar
qualidade de imagem, bitrate, artefato de compressão — tudo que não depende do alinhamento com o
áudio. Para sincronia, o corte tem de ser preciso nos dois streams.

**O idioma correto, e ele tem duas partes porque nenhuma sozinha resolve:**

```bash
ffmpeg -ss $((T-15)) -i <arq> -ss 15 -t 12 -c:v libx264 … saida.mp4
#         └── seek rápido por keyframe        └── decodifica só os últimos 15s, com precisão
```

`-ss` **antes** do `-i` é rápido (salta pelo índice) e impreciso. `-ss` **depois** é preciso e
**O(t)** — sozinho, para um ponto aos 35 min, decodifica 35 min de 4K, e a primeira tentativa desta
prova passou 8 minutos sem terminar. Juntos: exato, em segundos.

**O que este episódio custou, e onde ele quase levou:** eu ia refazer um mux de 63 GB (mais de uma
hora de máquina) para corrigir um defeito que não existia no mux. O que impediu foi medir antes de
consertar — o `sync-deriva.mjs` mostrou drift real de **50 ms em 36 min**, muito abaixo do que ele
tinha visto, e um erro que a medição não explica é sinal de que a MEDIÇÃO está olhando o objeto
errado.

### REND-91 · NA ESTAÇÃO DE RENDER, REPROVAÇÃO DE GATE SE RE-MEDE ISOLADA ANTES DE VIRAR BLOQUEIO DE ARTE (07/ago/2026)

*(era `REND-80` na VM, número que já era da lei do preto do estúdio no encode — renumerada para
`REND-91`. O cabeçalho saiu do estilo negrito antigo porque o §2ac do `doctor` só enxerga `#{2,4}`, e
foi essa cegueira que deixou a colisão passar. Ponte: `seed/DE-PARA-LEIS.md`.)*

O `qc-cena.mjs` já re-mede sozinha cada reprovação suspeita e anuncia *"todas as N reprovações se
confirmaram isoladas — são defeito de verdade"*. **Esse desempate não é árbitro**: ele roda com a
máquina no mesmo estado que produziu o falso positivo.

**Medido** (07/ago/2026, `o-acre-o-estado-que-o`): com load 71 em 16 vCPUs o desempate confirmou 14
reprovações em 8 cenas, e duas sessões seguidas da estação RENDER leram isso como veredito,
declararam bloqueio de ARTE e **não renderizaram nada**. Re-medindo uma cena por vez com `--conc=1`,
`s08-tratado-ayacucho` passou limpa sem que uma linha fosse tocada. Das 8, **6 não eram defeito de
arte** — 1 era só carga da máquina, 3 eram fonte abaixo do piso (conserto de uma linha), 1 era um
vazamento de 12px e 1 era trama contada como informação.

**A regra.** Antes de devolver um vídeo à arte por gate duro: `node scripts/qc-cena.mjs <cena>.html
--conc=1`, **uma de cada vez**. Só o que reprovar aí é defeito. E leia o achado antes de escalar — 43
acusações de `fora-do-quadro` podem ser um único defeito de 12px que desarma a peneira de trânsito
(ARTE-139), e "82 elementos de informação" podem ser 78 cópias do mesmo ícone (ARTE-140). Contar
achados mede o barulho, não o defeito.

---

### REND-92 · O `normalizar-footage.mjs` FOI CONSERTADO — e o defeito que faltava era o que APROVAVA, não o que reprovava (07/ago/2026)

*(era `REND-81` na VM, número que já era da lei "a GPU não acelera o master" — renumerada para
`REND-92`. O cabeçalho saiu do estilo negrito antigo pela mesma razão da [REND-91]. Ponte:
`seed/DE-PARA-LEIS.md`.)*

A [REND-78] descreveu, no mesmo dia, o `setpts` sem `-r` a partir de um caso de **25 fps**, onde a
falha **reprova**: o arquivo sai em 25/1, a verificação cobra 30 e o script converte 0 de 3. Falha
barulhenta — alguém percebe.

Em **29,97 (30000/1001) a MESMA falha aprova**, e essa é a perigosa. Medido no `orcas-nao-matam`: o
script disse `✓ convertido`, e o arquivo saiu com `r_frame_rate`, `avg_frame_rate`, `nb_frames`,
`time_base` e `duration` **idênticos ao original** — só o all-intra pegou. 51 MB viraram 231 MB de
reencode e o NTSC que a [REND-47] existe para matar continuou lá, agora **com carimbo verde por
cima**. É o pior dos dois mundos: paga-se o custo da conversão e herda-se o defeito mais a confiança
de que ele foi resolvido.

**A causa das duas faces é uma só: DUAS RÉGUAS DIFERENTES para a mesma grandeza.** A detecção foi
endurecida em 05/ago para igualdade exata (`30/1` passa, `30000/1001` não), mas a verificação da
saída ficou com a tolerância de 0,5% — a mesma que o comentário do próprio arquivo chama de "o
buraco". Com réguas diferentes o script se contradiz em silêncio: detecta 29,97 como ERRADO,
converte, e aceita 29,97 como CERTO. E como a detecção continua acusando, a rodada seguinte
reconverte o mesmo arquivo, de novo com sucesso, para sempre.

**Terceiro defeito, que ninguém tinha visto e que é o único irreversível:** nesse laço, o
`renameSync(x.f, destino)` move o arquivo de `_media` por cima do que já está em `_fps-original`. Na
segunda rodada isso troca o **original verdadeiro** por um reencode — e `_fps-original` é a única
cópia que sobra depois que a produção limpa o disco.

**Os três consertos entraram** em `scripts/normalizar-footage.mjs`: (a) `-r ${FPS}` no ffmpeg; (b) a
verificação da saída passou a usar a régua exata da detecção (com o escape `--tolerar-ntsc`); (c) a
duração esperada agora é calculada pelo modo — `conform` conserva FRAMES, não segundos, e cobrar
duração original dele reprovaria justamente a conversão bem-feita de 25→30, que encolhe 17%.
Provado ponta a ponta num fixture `30000/1001` com B-frames: saiu `30/1` exato, all-intra, 60 frames
preservados; e uma re-rodada com `--forcar` deixou o original guardado com o **mesmo md5**.

**O contorno manual da [REND-78] não é mais necessário** — chame o script.

**A regra que sobrevive ao caso:** *quando uma ferramenta mede a MESMA grandeza na entrada e na
saída, as duas réguas têm de ser a mesma linha de código.* Endurecer só a detecção não deixa a
ferramenta mais rigorosa: deixa-a capaz de aprovar exatamente aquilo que ela acabou de condenar. E
verificação que não distingue "não mudou nada" de "mudou certo" — comparar contra o alvo sem
comparar contra a ENTRADA — assina sucesso em cima de trabalho que não aconteceu.
## REND-80 — o preto do estúdio vai a ZERO no encode, ou o YouTube o transforma em blocos (06/ago/2026)

**O que aconteceu:** o Mateus reportou: *"de vez em quando eu noto que o vídeo do apresentador (o
preto dele) fica pixelado depois no YouTube, tipo com blocos pretos sobre o preto"*.

A hipótese óbvia — ruído de sensor no fundo — **foi medida e está errada**. O master sai limpo daqui:
desvio-padrão 1,17 no canto de fundo puro, sem granulação.

**A causa real é mais sutil, e por isso ninguém a via.** O fundo usa **9 níveis distintos**, com 89%
dos pixels concentrados em apenas dois: 5 e 6. O YouTube recomprime, olha uma área escura enorme e
quase uniforme, conclui que é barata e aloca pouquíssimos bits — e a diferença de **um único nível**
entre 5 e 6 vira um mosaico visível. O olho é impiedoso com variação em preto grande; é o mesmo
motivo pelo qual banding aparece em céu noturno e não em textura.

**O conserto é uma tabela, e entra no passe que já existe:**
```
lutyuv=y='if(lt(val,12),0,val)'      → fundo passa de 9 níveis para 2 (99,8% em zero absoluto)
```

Medido no mesmo trecho de 20 s do `ceuta`:

| | antes | depois |
|---|---|---|
| níveis distintos no fundo | 9 | **2** |
| bitrate | 17,3 Mbps | **12,0 Mbps** (−31%) |
| pixels do apresentador tocados | — | **10 de 638 mil** (0,0016%) |

*Onde tudo é o mesmo valor não existe fronteira para blocar.* E os 31% de bits que deixam de ser
gastos codificando lixo invisível vão para o rosto — que é onde o teto do YouTube decide se a pele
fica limpa.

**O LIMIAR É 12 E O NÚMERO NÃO É ARBITRÁRIO:** o fundo tem pico 11; a sombra da roupa começa acima
disso. Conferido raw contra raw, **sem encode no meio** — a primeira medição comparou dois arquivos
já re-comprimidos e acusou 32 mil pixels tocados, que eram artefato da compressão, não do filtro.
*Comparar dois arquivos comprimidos mede a compressão, não a mudança.*

**BÔNUS QUE NINGUÉM PROCURAVA:** com o fundo em zero, o apresentador **já é uma máscara**. Compor
`blend=lighten` sobre qualquer arte faz o fundo passar — sem matting, sem GPU, ~30 s para o vídeo
inteiro contra ~15 h de RVM. Provado com barras de LED laterais.
⚠️ O limite é exato: `lighten` = `max(a,b)`, então arte que cruza o CORPO o **atravessa** (a camisa
escura fica translúcida). Serve a fundo lateral, halo e luz de parede; não serve a cenário virtual.

### REND-81 · a GPU não acelera o master — o gargalo é decode e seek, não compressão (06/ago/2026)

**O que aconteceu:** o Mateus perguntou se a VM de GPU (`estudio-mapas`, L4) não aceleraria o
re-encode do master decupado. A hipótese é razoável — NVENC costuma ser muito mais rápido que
libx264. Medido no mesmo arquivo, na mesma máquina, mudando só o encoder:

| | tempo (60 s de 4K) | tamanho | × tempo real |
|---|---|---|---|
| libx264 `-crf 18 -preset veryfast` | 110 s | 384,4 MB | 0,55× |
| h264_nvenc `-qp 18 -preset p4` | **112 s** | **551,1 MB** | 0,54× |
| h264_nvenc **+ `-hwaccel cuda`** | **73 s** | 551,1 MB | 0,82× |

**Duas descobertas, e a segunda é a que ensina.**

**1 · Sem decode em GPU, a GPU não serve para nada.** Os dois primeiros números são idênticos porque
o gargalo estava na DECODIFICAÇÃO da entrada, feita em CPU nos dois casos — 4K all-intra a 55 Mbps é
caro de decodificar. A `nvidia-smi` mostrava `utilization.encoder = 0%` enquanto o "encode em GPU"
rodava. *Trocar o encoder sem trocar o decoder move o trabalho para o mesmo lugar onde ele já estava.*

**2 · Mesmo com tudo em GPU, o ganho é 1,5× e custa 43% de tamanho.** Isso é pouco para NVENC, e a
razão é a mesma que faz `preset slow` não valer aqui ([REND-80]): o master é **all-intra**. O
hardware da NVIDIA é otimizado para estimativa de movimento em long-GOP — sem quadros P e B, ele
perde a vantagem e mantém a desvantagem de sempre, que é gastar mais bits pelo mesmo QP.

**E o gargalo do caso REAL nem aparece neste teste.** O master de produção não lê um arquivo de 401
MB: ele faz **39 seeks num bruto de 59,3 GB**. Na `estudio-top10` (pd-balanced) isso leva 29min56 para
1513 s de vídeo — 0,84× tempo real, praticamente o mesmo que o NVENC entregou aqui com o insumo já
mastigado. *O que custa não é comprimir: é achar o quadro.*

**O disco decide mais que a GPU.** A `estudio-mapas` tem **pd-standard** (magnético, 200 GB → ~24 MB/s
de escrita sustentada). O download do bruto rodou 52 min e chegou a 29 de 59,3 GB — 9,5 MB/s, com a
rede ociosa. Foi abortado: o teste teria medido o disco, não a GPU.

**Erro de método que custou 8m24 de upload:** mandei o BRUTO de 59,3 GB quando a pergunta era sobre
o encoder, e para isso bastava um trecho de 60 s (401 MB). O Mateus apontou na hora: *"por que você
decidiu mandar o bruto pra outra VM e não o master de 10,5 GB?"*. *Teste de componente se faz com o
menor insumo que ainda exerce o componente.*

**A regra prática:** antes de mover trabalho para uma máquina com acelerador, **prove qual etapa é o
gargalo** — decode, seek, disco ou compressão. Cada uma mora num lugar diferente, e acelerador só
resolve a última. Aqui o veredito é não: a GPU não entra na linha de encode, e a `estudio-mapas`
continua sob demanda, só para lote de mapa.

### REND-82 · prazo de verificação escala com o volume — teto fixo mata portão sadio (07/ago/2026)

**De onde veio:** 07/ago/2026, madrugada. O render do `mamute-de-volta` (81 cenas) estava havia mais
de uma hora sem produzir um único clipe, com o log preso em *"portão: conferindo os gates das cenas"*.

**A causa é um laço vicioso, e cada elo dele parece razoável sozinho:**

1. o render sobe o load da máquina (o `ffmpeg` sozinho chega a 775% de CPU);
2. o portão (`qc-cena.mjs`) calcula a concorrência **na partida**, a partir do load:
   `livres = floor(nucleos − carga)` — com 16 núcleos e carga 38, isso dá **CONC = 1**;
3. o portão roda **8 gates por cena, cada um subindo Chrome**: num projeto de 81 cenas são **648
   execuções**, agora em série;
4. o cão de guarda do laço externo mata aos **900 s fixos**;
5. o render segue com o `_portao.json` **anterior**, e a passada seguinte repete tudo.

**A lei:** *prazo de verificação escala com o VOLUME verificado.* Um teto fixo é um teto calibrado
para o projeto que existia quando ele foi escrito — e a partir do primeiro projeto maior ele passa a
matar trabalho sadio, com um laudo que se lê como defeito de quem foi morto.

O prazo agora é `900 + 12 s × nº de cenas`, com teto de 90 min: 28 cenas → 20 min, 81 → 31 min,
148 → 44 min.

⚠️ **O agravante que torna isto caro:** ao ser morto, o portão não deixa o carimbo novo — e o render
**segue com o anterior**. Ou seja, o teto curto não atrasa o render: ele o faz gastar máquina sobre
uma aprovação velha, que é exatamente o que o portão existe para impedir.

⚠️ **E o segundo laço, mais sutil:** a carga que faz a concorrência cair a 1 é criada pelo próprio
render que espera o portão. Quanto mais o estúdio produz, mais devagar ele verifica — e a
verificação foi desenhada supondo uma máquina ociosa.

### REND-83 · verificação que deriva concorrência da carga fica refém de quem a chamou (07/ago/2026)

**De onde veio:** 07/ago/2026, madrugada, depois de a [REND-82] ter tratado o SINTOMA. O prazo do
portão passou a escalar com o volume, e mesmo assim o `mamute-de-volta` gastou **1635 s sem
terminar** de verificar 81 cenas. Fui atrás do porquê.

O `qc-cena.mjs` calcula a concorrência **no instante da partida**, a partir da carga da máquina:

```js
const livres = Math.max(1, Math.floor(nucleos - carga));   // 16 − 38 → 1
```

E quem o chama é o **loop de render**. Ou seja: a carga que ele mede é a do encode que acabou de
rodar — o próprio trabalho que ele existe para autorizar. Com load 38 numa máquina de 16 núcleos,
`CONC = 1`, e as **648 execuções de Chrome** (81 cenas × 8 gates) viram uma fila indiana.

**A lei:** *verificação que deriva a própria concorrência da carga da máquina fica refém de quem a
chamou.* Quando o chamador É a carga, o cálculo se volta contra ele — e o efeito é perverso: quanto
mais o estúdio produz, mais devagar ele verifica.

O conserto é passar a concorrência **explícita** de quem conhece o contexto:

```bash
node scripts/qc-cena.mjs "out/$PROJ" --conc="${QC_CONC:-6}"
```

6 de 16 núcleos é conservador de propósito — deixa 10 para o encode ao lado — e ainda é **6× o que
o cálculo automático entregava sob carga**.

⚠️ **A auto-regulação não está errada; o lugar dela é que estava.** Medir a máquina e recuar é
exatamente o que se quer de um agente que DISPUTA recursos com outros. O que não funciona é medir a
carga que você mesmo vai substituir: o render está esperando o portão, então os núcleos que o encode
ocupava estão prestes a ficar livres. *Quem mede para se conter precisa saber se a carga que vê é
concorrente ou é a sua própria fila.*

### REND-84 · verificador que recebe LOTE precisa de teto do lote, não da peça (07/ago/2026)

**De onde veio:** 07/ago/2026. O `orcas-nao-matam` estava havia horas a **1 clipe** de fechar, e o
carimbo do portão explicava por quê — mas não do jeito que parecia:

```
13 verdes · 1 com FALHA REAL · 14 só "indefinido" (não medido)
gates que faltaram: tamanho ×14 · fora-do-quadro ×5 · colisão ×4 · carga ×4
```

**O gate `tamanho` faltou nas catorze.** Rodado isolado numa cena, o mesmo gate devolve `exit 0` em
segundos, com JSON completo. Ele não estava quebrado.

**A causa:** três dos oito gates recebem o **lote inteiro** numa única chamada
(`run("qc-tamanho.mjs", [...htmls])`), enquanto os outros rodam por cena. O teto do `execFile` era
**fixo em 3 min por chamada**. Num projeto grande a chamada estoura — e como ela cobre todas as
cenas, **o lote inteiro vira `indefinido` de uma vez**.

**A lei:** *quando um verificador recebe LOTE, o teto dele é do lote, não da peça.* Teto por chamada
com carga por lote é uma bomba de tempo: funciona no projeto pequeno em que foi calibrado e falha
quando o vídeo cresce — sem mudar nada no código nem no conteúdo.

⚠️ **E o sintoma culpa a vítima:** o laudo diz "não medi", o render se recusa a gastar em cena
`ok:false`, e o projeto fica irrenderizável **por ter crescido**. Prova disso: **13 das 14 cenas já
tinham clipe** — renderizadas quando o projeto era menor e o gate ainda cabia no relógio.

⚠️ **Onde mais procurar este defeito:** qualquer lugar que combine (a) uma chamada que processa N
itens e (b) um limite escrito em segundos. O prazo do portão de render tinha exatamente isto
([REND-82]) e a concorrência dele também ([REND-83]) — três instâncias do mesmo erro na mesma noite,
em três arquivos diferentes.

### REND-85 · O desempate de lote tem de cobrir o gate que NÃO MEDIU, não só o que reprovou (07/ago/2026)

O `qc-cena.mjs` mede em lote (um Chrome para todas as cenas) e tem um **desempate**: toda reprovação
é re-medida SOZINHA antes de virar veredito, porque lote saturado reprova cena boa. O desempate
existia desde 31/jul e funcionava — para metade dos casos.

A condição era `laudo[gate] && !laudo[gate].ok`: exigia que o gate **tivesse veredito**. Um gate que
não produziu veredito nenhum ficava de fora. Só que **"não mediu" é a forma mais GRAVE de saturação,
não a mais leve** — o Chrome compartilhado não deu conta e nem chegou a um número. O desempate
cobria o sintoma brando e ignorava o agudo.

Isso ficou inofensivo enquanto medição ausente não barrava nada. **Desde 05/ago ela barra** (a régua
do Mac venceu, com medição): `ok` passou a exigir veredito em todos os gates esperados. A partir
daí, lote saturado produz `ok:false` em cascata **sem que uma única cena tenha defeito**.

Medido em 07/ago/2026 no `mamute-de-volta`, com o portão já corrigido e rodando em blocos: das 10
primeiras cenas, **10 reprovaram e apenas 1 tinha falha real** (uma colisão). O que barrou as outras
nove foi `tamanho` **indefinido em 10 de 10** — e rodado sozinho, na mesma máquina, no mesmo minuto,
o `qc-tamanho` mede a cena inteira sem uma falha. *O gate estava certo, a cena estava certa, e o
veredito era não.*

**Agora o indefinido entra pela mesma porta da reprovação.** É o mesmo remédio para a mesma doença —
medir sem vizinho — e ele já estava escrito ali, atendendo metade dos pacientes.

⚠️ A lição que se generaliza: **ao endurecer uma régua ("ausência de medição agora reprova"), varra
quem já tratava a medição ausente como caso menor.** O endurecimento não cria o buraco; ele arma um
buraco que estava lá, inofensivo, e que ninguém revisita porque o código não mudou.

### REND-87 · Insumo de render inclui o que os GATES leem, não só o que a cena exibe (07/ago/2026)

Ao levar um projeto para outra máquina renderizar, a lista de arquivos não é "o que aparece na tela".
Os gates que decidem se a cena pode virar clipe **leem metadados**, e sem eles julgam errado — no
lado seguro, que é reprovar.

Medido em 07/ago/2026, na máquina de render dedicada: **8 de 15 cenas reprovando** em `tamanho`,
todas cards de título. A MESMA cena, o MESMO arquivo:

| máquina | veredito |
|---|---|
| `estudio-top10` | `✓ TAMANHOS ok` |
| `estudio-mapas` | `✗ [heroi] "Um arco e flecha" → 212px < 260` |

Descartei a hipótese da fonte medindo o que o Chrome de fato usa nas duas — **idêntico**: mesmos
212px, mesma Neue Haas. A diferença era o **`espelho.json`**, que eu não copiei. O `qc-tamanho` lê o
`modo` da cena para decidir se cobra TEXTO-HERÓI; modos de imagem (`footage`, `foto`, `mapa`) não
têm herói. **Sem espelho ele cai no lado seguro e cobra sempre** — e card de título é `footage`.

*Um arquivo de 40 KB reprovando 8 cenas boas, e o sintoma ("todas as cenas de título falhando")
apontava para arte, não para insumo.*

**O que vai junto com os HTMLs e a mídia:** `espelho.json` (modo da cena, o mais crítico) ·
`_cortes.json` · `words.json` · `conceito-visual.json`. São arquivos pequenos e vários gates os
consultam — o custo de levar é zero e o de esquecer é um lote inteiro barrado.

⚠️ Isto é irmão do [SIS-144] (gates copiados sem `scripts/lib/`): as duas vezes o que faltava era
**invisível na tela** e **decisivo no julgamento**. A pergunta ao adotar máquina não é "a cena
renderiza?", é **"o gate consegue julgar a cena?"**.

### REND-88 · A régua de progresso de um render é CPU, não arquivo em `/tmp` (medido 07/ago/2026)

⚠️ **Esta lei nasceu errada e está corrigida aqui — a versão original afirmava que cena de mapa não
renderiza sob carga alta. Eu não tinha essa medição; tinha um contador quebrado.**

Ao renderizar a `c28` do `orcas` (mapa, 39 s, 1.170 frames), contei o progresso com:

    find /tmp -path '*c28*' -name '*.png' | wc -l

O número travou em 143 e não se moveu por 40 minutos. Concluí "captura travada", matei os 8 shards,
esperei a carga cair, re-disparei — e o contador marcou **143 de novo, no primeiro minuto**.

Aí a coincidência denunciou o defeito: os arquivos eram de **4 e 5 de agosto** — `/tmp/c28-34.5.png`,
`/tmp/qcorc/IRMA-c28-22.png`, `/tmp/fim-c28.png`, sobras de `shot.mjs` e de gates antigos. O glob
`*c28*` os pegava, e a captura em curso escrevia em outro lugar. **O contador nunca mediu o render.**

A primeira tentativa provavelmente estava progredindo normalmente quando a matei. Custou ~40 minutos.

**A régua certa, em ordem de confiança:**
1. **CPU acumulada dos processos de captura**, duas leituras com segundos de intervalo
   (`cut -d' ' -f14 /proc/<pid>/stat`). Crescendo = trabalhando. É o mesmo teste da [SIS-138] para
   sessão headless, e vale igual para render.
2. **`shard N: X/Y frames`** no log do `render-one.sh` — mas ele só imprime a cada 30 frames, então
   silêncio por um minuto não é sintoma.
3. O clipe final aparecendo em `graphics/`.

*`/tmp` é lixeira compartilhada e guarda dias de sobras. Contar arquivo por padrão de NOME ali mede o
histórico, não o presente — é o mesmo erro do `pgrep -f` casando o prompt das sessões ([SIS-139]),
com outra roupa: padrão largo demais responde com confiança sobre a coisa errada.*

**O que segue valendo sobre carga**, porque foi medido de verdade: matar as 8 capturas devolveu a
carga de 150 para 105, e 8 Chromes 4K numa máquina saturada disputam entre si. Paralelismo só ajuda
enquanto há recurso ocioso. Mas isso é economia de máquina — não era a causa do "travamento", porque
travamento não houve.

### REND-89 · Cena de mapa 4K derruba o Chrome do shard — e o sintoma NÃO é travamento (08/ago/2026)

A `c28` do `orcas` (mapa 2D, 39 s, 1.170 frames) morreu em 608 frames com:

    page.evaluate: Target page, context or browser has been closed   (capturar.mjs:305)
    ✗ frame-parallel: 608 frames de 1170, sequência INCOMPLETA — shard 0 saiu com código 1

**Não foi memória da máquina** (62 GB total, 11 em uso, 50 disponíveis, zero OOM no dmesg) e **não
foi a faxina** — ela rodou às 00:44 e 00:54, e a falha foi às **00:34:30**, antes das duas. Foi o
processo do Chrome fechando sozinho: mapa 4K em WebGL por software, centenas de frames, e a aba cai.

**O que isto ensina sobre diagnóstico:** ao ver um render de mapa parado, há três estados diferentes
e cada um pede coisa distinta —

| estado | como distinguir | o que fazer |
|---|---|---|
| **pesado** | CPU dos shards CRESCENDO, log avança devagar | esperar ([REND-48]) |
| **travado** | CPU parada em vários shards, log congelado | esperar o watchdog; ele só mata com frames no disco |
| **morto** | processo SUMIU e o log tem `Target page… closed` | **re-disparar** |

Passei a noite tratando os três como o mesmo, e matei a mesma cena três vezes por leitura errada
(ver [REND-88], que corrige a lei que escrevi sobre isso). **A pergunta que separa os três é uma só:
o processo ainda existe?** Se sumiu, não é lentidão nem travamento — é falha, e insistir em esperar
não traz o clipe.

*Ao re-disparar, escolha a JANELA:* com carga 149 os shards não avançavam; com carga 14 e 50 GB
livres, quatro workers pegaram ritmo na hora. Render de mapa é o trabalho mais sensível à carga que
esta casa tem — e o mais caro de reiniciar.

---

### REND-93 · Cortar de uma faixa que ainda não começou não dá erro — e o `-shortest` apara o resto em silêncio (08/ago/2026)

O piloto `rosto-da-formiga` saiu com **891 s** onde a aritmética pedia 902 s. Os 50 segmentos
intermediários somavam **902,067 s** — o valor certo. O defeito estava na junção, e a causa é uma
propriedade do ffmpeg que ninguém tinha escrito aqui:

**A faixa de mic do `source-sincronizada.mp4` começa em 28,809 s do container** (o vídeo começa em
0,066). O primeiro keep era `[17,8 → 50,62]`. Pedir áudio de um trecho que a faixa **ainda não
cobre** não é erro para o ffmpeg: ele devolve só o que existe. Medido:

    s00.ts  = 32,833333 s        (vídeo, correto)
    s00.wav = 21,811    s        (áudio, curto)
    50,62 − 28,809 = 21,811      ← exato

Como vídeo e áudio são concatenados por caminhos independentes, **aquele segmento curto deslocou o
áudio de todos os 39 seguintes**, e o `-shortest` do mux final aparou o vídeo pela ponta curta. A
duração errada foi só o sintoma; o defeito real era o áudio fora de fase do começo ao fim.

**Por que nenhum gate pegava:** os `.ts` estavam certos, o concat de vídeo (muxado sem `-shortest`)
deu **27062 frames = 902,067 s**, intacto. Cada peça isolada passava. E a verificação que existia
media **tamanho > 1 KB** — que não distingue 21 s de 33 s.

**As regras que ficam:**
1. **Toda extração por segmento prova que áudio e vídeo saíram do mesmo comprimento.** Comparar as
   duas durações por segmento custa um `ffprobe` e é a única coisa que separa "cortou" de "cortou
   inteiro".
2. **`-shortest` nunca é seguro sem um gate antes dele.** Ele existe para aparar diferença — então
   transforma qualquer defeito de comprimento numa saída plausível e silenciosa. Meça a trilha
   concatenada ANTES do mux.
3. **Faixa que começa em offset > 0 é o caso normal em dual-system**, não exceção. O conserto no
   `master-decupado.mjs` recompõe o silêncio na FRENTE (`aresample=first_pts=0`) — é lá que o buraco
   está — e fecha atrás com `apad=whole_dur`.

⚠️ **A raiz está a MONTANTE e continua aberta:** quem extrai o `audio.wav` para o Scribe descarta o
offset do container, então a transcrição nasce no relógio da faixa de mic e o decupador decide os
cortes sobre ele. *Transcrição feita de um extrato herda o relógio do extrato, não o do arquivo.* E
**deslocar a lista inteira não muda a duração de nada** — nenhum gate de duração pega. A varredura
de 08/ago achou 1 projeto assim (`galaxia-arco-flecha`, 3,25 s); ver `HANDOFF.md` §3b para o método,
que é ler o `maxFim` do `_cortes.json` e ver a qual relógio ele encosta.

**REND-48.** **`.__norm.mp4` NÃO É NOME PARA REFERENCIAR — O NORMALIZADOR SUBSTITUI O ORIGINAL, E A SEGUNDA PASSAGEM APAGA O QUE VOCÊ APONTOU.**

`scripts/normalizar-footage.mjs` **não** deixa um `<nome>.__norm.mp4` ao lado do bruto. Ele grava o
convertido **com o nome original** e move o bruto para `_media/_fps-original/<cena>/`. O `.__norm.mp4`
é arquivo de **passagem**, que existe só entre o `ffmpeg` terminar e o script renomear.

**Medido no `quao-fundo-terra` (09/ago/2026, estação de arte).** Duas cenas de card apontavam para
`s27-broca-atacando-parede-de-rocha.__norm.mp4` e `s49-lava-incandescente-fagradalsfjall.__norm.mp4`
— nomes que existiam no disco quando o `editor-de-arte` as escreveu, porque uma passagem anterior do
normalizador tinha sido interrompida antes do renomeio. Rodar o script de novo consolidou os dois
arquivos no nome canônico e **apagou os `.__norm`**. As duas cenas ficaram com `<video>` órfão.

**E o defeito não acusa em lugar nenhum:** o HTML segue válido, o `qc-contrato` passa, o
`check-overlap` passa, o `qc-carga` passa — e a cena simplesmente renderiza **sem o footage**. Só o
frame denuncia, e só se alguém olhar o tamanho: um PNG 4K com mídia dá 6–12 MB; sem ela, 42 KB.

**A régua, em duas metades:**
1. **Quem escreve cena** aponta sempre o **nome canônico** (`<nome>.mp4`), nunca um `.__norm`. Se o
   único arquivo em 30 fps no disco é um `.__norm`, isso é sinal de normalização interrompida:
   consolide primeiro, referencie depois.
2. **Quem roda o normalizador** varre as referências depois — os HTMLs já escritos apontam para nomes
   que a passagem pode ter movido:
   ```bash
   for h in out/<proj>/graphics/*.html; do
     for ref in $(grep -oE "[A-Za-z0-9_.-]+\.(mp4|mov)" "$h" | sort -u); do
       find out/<proj>/_media -name "$ref" -not -path "*_fps-original*" | grep -q . \
         || echo "✗ $(basename $h) → $ref"
     done
   done
   ```
   Transições de branding (`assets/branding/*.mov`) e menções em comentário aparecem como falso
   positivo — confira antes de "consertar" o que não está quebrado.

**E o normalizador decide só por FPS**, então um arquivo já em 30 fps mas **long-GOP** ele **pula em
silêncio** — que é o caso exato que a [REND-47] existe para evitar. Medido no mesmo dia: o
`s04-broca-tricone-close-em-rocha.mp4` tinha **2 keyframes em 60 frames** contra 60/60 dos irmãos, e
passou intocado. Detectar é uma linha:
`ffprobe -v error -select_streams v:0 -show_frames -read_intervals "%+#60" -show_entries frame=key_frame -of csv=p=0 <arq> | grep -c '^1'` — tem de voltar **60**.

**Duas falhas do script têm a mesma causa e vale saber:** arquivo com um terceiro stream de **dados
de codec `unknown`** quebra o mapeamento automático (`Error initializing output stream 0:0`) ou faz o
container herdar a duração do áudio em vez do vídeo (um conform de 25→30 que deveria dar 10,03 s saiu
com 12,01 s). A saída é restringir o mapeamento: `-map 0:v:0 -an -sn -dn`.
### REND-97 · O loop mandava a causa da falha para `/dev/null` — e depois mandava você reproduzi-la à mão (09/ago/2026)

O `_render-4k-loop.sh` classificava o fim de cada render em duas gavetas: `rc>=128` virava
"ESTOUROU O TETO", **qualquer outro rc virava `✗ <cena> FALHOU`** — três palavras. A saída do
`render-one.sh` ia para `>/dev/null 2>&1`, então o *porquê* era produzido e descartado no mesmo
instante. E o resumo fechava sugerindo: *"Rode uma delas à mão para ver o erro"*.

**Custou duas passadas inteiras no `especies-humanas`.** A `s09` (mapa WebGL, 80,8 s, a cena mais
cara do lote) registrou `✗ FALHOU` às 06:40 e de novo às 07:53. Re-disparada à mão com log
dedicado, a causa apareceu na **primeira linha**:

```
⚖ carga 37.37 em 16 núcleos → teto de render baixado de 4 para 2 (SIS-95)
⏳ 2 slot(s) de render ocupados — esperando vaga…
```

Era **contenção de máquina** — a VM estava em load 151 com ~130 chromes de outras estações do motor
24/7 —, não defeito de cena. Um `tail -3` teria bastado.

**O dano não é o tempo de diagnóstico, é para onde o silêncio empurra a suspeita.** Sem causa
visível, "FALHOU" numa cena específica se lê como problema DAQUELA cena, e o reflexo é reabrir a
arte — inferência paga — para consertar um problema de agendamento. O log guardava a informação que
inocentava a cena e a apagava.

**Conserto (duas linhas, no repo principal):** a saída de cada render vai para
`out/<proj>/_render-erros/<id>.log`, o `✗ FALHOU` imprime `rc=` e as 3 primeiras linhas do log,
e o arquivo é apagado quando a cena fecha bem — some sozinho no caso feliz, sobra exatamente onde
alguém vai procurar no caso triste.

⚠️ **No mesmo trecho, a mensagem do teto mentia o número:** imprimia `${RENDER_TETO_S:-1800}`,
mas quem corta é `$_teto`, **proporcional** desde a [REND-62]. Sem a variável de ambiente setada —
o caso normal — ela anunciava *1800 s* para um render cortado aos *12.420 s*. Quem lesse iria
investigar por que uma cena de 80 s não cabe em 30 min, quando ela não coubera em 3h27.

⚠️ **E a chamada à mão que o próprio loop recomenda perde o teto:** o teto proporcional mora no
LOOP, não no `render-one.sh`. Quem segue a sugestão do resumo renderiza **sem limite nenhum** —
render travado não morre nunca, porque o processo continua vivo e só para de produzir frame. Nesta
passada isso foi coberto com um vigia desacoplado (`_vigia-s09.sh`: teto absoluto + morte por 30
min sem frame novo), mas a lacuna é do script.

*Três defeitos, um só formato: a mensagem de erro que não carrega o que foi medido. Log que
classifica sem citar manda investigar de novo o que já foi observado — e o segundo observador paga
mais caro, porque chega sem o estado que produziu a falha.*

### REND-98 · A retomada valia por CENA e parava aí — o FRAME era terra sem lei, e a cena cara sangrava por ele (09/ago/2026)

A doutrina do estúdio é explícita e está em todo lugar: *"artefato pronto é ativo pago; retomada é
de graça; nunca regerar para conferir"*. Ela vale por **cena** — `_render-4k-loop.sh` pula quem já
tem clipe, e o carimbo `.de-html` até resolve o caso difícil (refinamento pós-render). Um nível
abaixo, nada disso existia: o **frame**, que também é artefato pago, era descartado sem cerimônia.

**O caso que pagou.** `s09-denisovanoshobbitseluzon` do `especies-humanas`: cena de mapa, 80,8 s,
**2424 frames**. Três tentativas em 09/ago — 06:40, 07:53 e 08:47. A terceira chegou a **1846 de
2424 (76%)** e morreu porque **um** `page.screenshot` estourou os 30 s sob a carga das outras
estações; os outros 7 shards caíram atrás. Os 1846 frames foram apagados, e a tentativa seguinte
recomeçou do frame 0. Três vezes, ~38 min de render jogados fora por vez.

**Eram TRÊS pontos independentes conspirando**, e consertar um só não adiantaria nada:

1. `render-one.sh` batizava o diretório com `-$$` (o PID do shell): duas tentativas da mesma cena
   **nunca olhavam para a mesma pasta**. Retomar era impossível antes mesmo de alguém apagar algo.
2. `render-one.sh:189` — `trap 'rm -rf "$FRAMES_DIR"' EXIT`. Apagava na saída **sempre**, inclusive
   na falha. O comentário ao lado declarava a premissa em voz alta (*"os PNGs são descartados no
   fim, o trap sempre apagou"*), e ela é verdadeira só no SUCESSO: aí o mp4 existe e os frames são
   intermediários. Na falha, são a única coisa que sobrou de pé.
3. `capturar-paralelo.mjs` abria com `rmSync(FRAMES)` incondicional, e o worker não perguntava se o
   frame já existia antes de gastá-lo de novo.

**O conserto, nos três, com as duas guardas que ele exige.** Nome de diretório estável (a
concorrência que o `$$` cobria virou dono declarado em `_dono.pid`: dono vivo → diretório privado
sem retomada; dono morto → é justamente o caso que se quer herdar). O trap passa a apagar só depois
que o mp4 existe e tem tamanho — *a fronteira não é "no fim", é "o artefato seguinte já existe?"*.
E o driver só limpa quando os frames são de **outro HTML**, comparado pelo mesmo sha1 de 12 dígitos
do `.de-html` (REND-59): mesmo HTML é retomada; HTML diferente **tem** de limpar, porque aproveitar
metade de cada versão monta uma cena híbrida — defeito grave e invisível, já que a sequência fica
sem buraco e nenhum gate compara frame com frame.

⚠️ **Pular "arquivo que existe" seria pior que o defeito.** Processo morto no meio da escrita deixa
JPEG **truncado**: existe, tem tamanho, e é lixo — e pulá-lo gravaria o lixo no 4K sem que contagem
nenhuma denunciasse. Por isso `render/frames-retomada.mjs` pergunta pelo **marcador de fim do
formato** (JPEG fecha em `FFD9`, PNG no chunk `IEND`), nunca pelo tamanho; frame sem selo é apagado
e volta para a fila.

⚠️ **E preservar frames é preservar RAM.** `/dev/shm` é tmpfs: a cena que falha deixa ~7 GB parados
na memória, e empilhar isso reproduz exatamente a pressão que derrubou os Chromes da `s09`. Por isso
o mesmo conserto varre `frames-*` sem dono vivo há mais de 6 h. *Conserto que resolve um desperdício
criando outro não é conserto.*

**Medido de ponta a ponta** antes de valer: cena de 149 frames morta aos 47, re-disparada — `♻
retomada: 47 frame(s) da tentativa anterior servem`, os 4 shards herdaram ~12 cada e capturaram o
resto, `149/149 (sequência íntegra)`, QA ok, diretório limpo no sucesso. Frames de duas capturas
diferentes no mesmo mp4 são seguros por construção: `__renderAt(t)` é determinístico e independente
— é o mesmo princípio que já deixa 8 processos escreverem no mesmo diretório.

*Numa máquina compartilhada, a falha transitória não é exceção — é o regime. O que decide o custo
dela não é evitá-la, é onde o trabalho para quando ela chega. E toda régua de "não regerar o que
está pago" tem um nível abaixo do qual ela deixou de ser aplicada; vale perguntar qual é, porque é
lá que o trabalho caro escoa sem aparecer em contagem nenhuma.*

---

## [REND-99] "O carimbo não mudou" tem DOIS significados opostos — e o loop lia só o pior

**09/ago/2026, estação RENDER do `especies-humanas`.** O `_render-4k-loop.sh` detectava o sucesso da
medição do portão pelo **cksum do `_portao.json` MUDAR**. Quando todas as cenas do bloco já têm
carimbo válido, o `qc-cena.mjs` as pula, nada é escrito, e o arquivo **não muda** — que é o
comportamento CERTO. O código lia esse silêncio como falha e anunciava, para os **cinco** blocos:

```
⚠ bloco até N/25 não deixou carimbo (estourou 1050s?) — a próxima rodada re-mede estas
```

As duas afirmações eram falsas. Não estourou: os blocos levaram **0s e 1s**. E não havia o que
re-medir: as 25 cenas estavam carimbadas e válidas. **Alarme falso sobre o lote inteiro, no gate
mais crítico da casa** — e mentira que se lê como trabalho pendente custa a passada seguinte.

É a mesma família da [REND-97] e dos dois erros que o comentário logo acima já registrava: *deduzir
o estado do artefato a partir de um sinal indireto*. Só que aqui o sinal não é indireto — é
**ambíguo**: um único bit ("mudou?") carregando duas causas de sinais opostos.

**O conserto é o RELÓGIO, que desempata onde o cksum é mudo:** estouro chega no prazo; lote já
medido volta na hora. `_t0` antes do bloco, `_dt` depois, e três vias em vez de duas —

| cksum | rc | tempo | leitura |
|---|---|---|---|
| mudou | — | — | `⛏ medido e CARIMBADO` |
| igual | 0 | < prazo/10+30 | `✓ nada a medir — já tinham carimbo VÁLIDO` |
| igual | ≠0 **ou** lento | — | `⚠ não deixou carimbo (Xs de Ys)` ← o alarme, agora **real** |

O `rc=0` entra junto porque bloco morto pelo cão volta com sinal (≥128): tempo **e** código de saída
concordando é o que separa "voltou rápido porque não havia trabalho" de "voltou rápido porque
quebrou". E o prazo virou dado da mensagem (`Xs de Ys`) em vez de suposição com interrogação —
`estourou 1050s?` era o próprio código admitindo que não sabia.

**Medido na primeira execução real**, cinco minutos depois de aplicado: os mesmos cinco blocos que
gritavam estouro agora imprimem `✓ nada a medir — as cenas já tinham carimbo VÁLIDO (0s)`, e o
render seguiu direto para a única cena pendente.

⚠️ **A janela para consertar isto é estreita, e por isso a passada anterior não o fez:** o bash lê o
script **sob demanda**, então editar o arquivo com o loop em execução desloca os offsets das linhas
ainda não lidas e pode quebrar a corrida em curso. Conserto no `_render-4k-loop.sh` se aplica com o
loop **morto** — que é exatamente o instante em que a estação chega e tem pressa de disparar. *Vale
gastar os dois minutos: é a única hora em que o conserto é seguro, e a próxima passada vai encontrar
o mesmo alarme se ninguém usar a janela.*

*Quando um teste responde "não" a duas perguntas diferentes, ele não está medindo nenhuma das duas.
A saída não é um teste mais esperto — é uma segunda dimensão (aqui, o tempo) que só uma das causas
consegue imitar.*


---

### REND-100 · Dois consertos corretos se anulam quando ambos escrevem no mesmo lugar

**09/ago/2026, `ceuta-travessia-em-massa`.** O lote terminou em **118 de 124** e o log dizia
"sucesso". As seis ausentes não eram defeito de arte: **cinco morriam antes do primeiro frame** —
os quatro cards de título e a cartela do clube de membros.

```
page.evaluate: TypeError: window.__fotosProntas.then is not a function
✗ frame-parallel: 0 frames, sequência INCOMPLETA — shard 0 saiu com código 1
```

Dois mecanismos, cada um certo por si, brigando pelo mesmo objeto:

| quem | o que faz | por quê |
|---|---|---|
| `capturar.mjs` (REND-05) | aguarda a Promise e **troca o gancho por `true`** | senão o `waitForFunction`, que testa `!== false`, passa reto: Promise é objeto truthy |
| o snippet da cena | `__prepararCaptura` faz `window.__fotosProntas.then(…)` | é o padrão antigo, e encadear na promessa é o certo |

Seis linhas separam um do outro. Quando o segundo roda, o primeiro já substituiu a promessa por um
booleano — e `true.then` não existe.

**Nenhum dos dois estava errado. Errado era o TIPO com que um devolvia o objeto para o outro.**
`Promise.resolve(true)` satisfaz as duas leituras: é truthy (o `waitForFunction` segue passando) e
tem `.then` (a cena encadeia). Conferido antes de trocar: `grep` por `=== true` nesses ganchos volta
vazio em `render/` e `scripts/`, e são **6 cenas no acervo inteiro** nesse padrão.

**A régua:** *quando um conserto NORMALIZA um valor compartilhado, ele precisa saber quem mais lê
aquele valor — e devolver algo que sirva a todos.* Normalizar é conveniente para quem escreve e
invisível para quem lê depois. Antes de simplificar um tipo, `grep` pelo nome do símbolo: quem
aparece na lista é quem você vai quebrar.

⚠️ **E o defeito se disfarçou de "lote quase pronto":** 118 de 124 lê-se como *faltam seis cenas*,
não como *cinco cenas não conseguem nem começar*. O contador não distingue "ainda não renderizei" de
"tentei e explodi", e é por isso que a contagem sozinha nunca fecha um lote — [[SIS-243]].


---

### REND-101 · Gate que presume na dúvida está certo — desde que DIGA que presumiu

**09/ago/2026, `ceuta` na `estudio-render`.** Duas cenas de MAPA barradas no portão por piso de
texto-herói:

```
s03-mapa-ceuta    "58 MIL" → 246px < 260   (5% abaixo)
s10-mapa-fnideq   "CEUTA"  → 146px < 260   (44% abaixo)
```

O `s10` não renderizou por causa disso, e o lote fechou em "118 de 124". Mapa **não tem herói** — o
`MODO_COM_HEROI` do gate lista só `dados`, `infografico` e `citacao`. Ele cobrou porque não sabia o
modo: o projeto tinha sido baixado para a máquina de render só com `graphics/` e `_media/`, sem
`espelho.json`, e `modoDaCena()` devolveu null. A regra é `modo ? MODO_COM_HEROI.has(modo) : true` —
**na dúvida, cobra**, que é o lado certo para um gate.

Copiado o espelho para a mesma máquina, os dois passam na hora. *O defeito nunca esteve na arte.*

**A régua:** *presumir na dúvida é correto; presumir em silêncio não é.* Uma reprova por ignorância
é indistinguível de uma reprova por defeito quando o laudo não diz qual das duas é — e quem lê
"246px < 260" conclui que a arte está pequena e vai **mexer no HTML**, que é o conserto errado para
um problema de insumo. Um número que veio de uma suposição tem de carregar a suposição junto.

**Conserto:** quando cobra herói sem saber o modo, o gate emite o aviso — *"não achei o modo desta
cena (sem espelho.json ao lado de graphics/) — cobrei herói por precaução; se for mapa/footage,
traga o espelho e re-meça ANTES de mexer no HTML"*. A reprova continua (o lado seguro não muda), mas
agora ela vem com o rótulo do que é.

⚠️ **O comentário da linha 98 já contava esta história**, para o compilado que não tem espelho, e o
conserto de lá foi uma ponte para o `_reaproveitamento.json`. O que ninguém previu foi o caso mais
banal: **o espelho existe e está em outra máquina.** *Insumo de contexto viaja pior que artefato —
ninguém sente falta dele até um gate julgar sem ele.*

### REND-102 · A ferramenta media METADE do requisito e declarava sucesso (09/ago/2026, `fatos-a380`)

A [REND-47] pede **duas** coisas do footage: **30 fps exatos** e **all-intra**. O
`normalizar-footage.mjs` decidia o que converter olhando **só o fps**:

```js
if (!FORCAR && (exato || ntscOk)) { jaOk++; continue; }   // ← e o all-intra?
```

Arquivo que já nascia em `30/1` caía nesse `continue` e nunca era convertido — ainda que fosse
`IPBBP…`. E é o **B-frame** que faz o render travar: para entregar um frame do meio de uma cadeia
dependente o Chrome decodifica desde o keyframe anterior, e sob seek repetido a entrega fica
imprecisa. É o defeito que o Mateus descreveu cinco vezes.

Medido neste vídeo: a normalização converteu **22 arquivos, 0 falhas**, imprimiu o rodapé de sucesso
— e o `qc-footage-seekavel` continuou reprovando **4**: `s46-aereo-pista-taxi-cruzamento`,
`s46-aereo-widebody-manobrando`, `card-t1-a380-perfil-lateral-dois-decks` e
`card-t2-cabine-cheia-de-passageiros`, todos `BIP` **e todos já em 30 fps**. Eles nunca apareceram na
lista do `--dry`: para a ferramenta não existiam.

**O modo de falha é pior que o arquivo que escapa.** Num projeto cujo footage já estivesse todo em
30 fps, o script imprimiria `✓ nada a fazer — todo footage já está na taxa alvo` e sairia **0**,
dando por resolvido um vídeo que trava inteiro. A frase é verdadeira e a conclusão é falsa: a taxa
alvo era metade do requisito. E os dois gates discordavam em silêncio — um dizia "nada a fazer", o
outro reprovava os mesmos arquivos, e ninguém cruzava os dois.

Consertado: o filtro passou a ler `pict_type` com **a mesma medida do gate** (um assunto, uma
medida — critérios diferentes fariam duas ferramentas discordarem sobre o mesmo arquivo), a fila
marca quem entra `← fps ok, entra por B-frames`, e o rodapé de "nada a fazer" agora diz
`em 30 fps E all-intra`. Depois do conserto a ferramenta enxergou exatamente os 4 que o gate
acusava.

> **A regra:** quando uma lei tem duas condições, a ferramenta que a cumpre tem de medir as duas —
> e o rodapé de sucesso tem de nomear o que foi medido. *"Já está na taxa alvo" não é sinônimo de
> "está bom"; é sinônimo de "eu só olhei a taxa".*

### REND-104 · Quanto MELHOR o arquivo, mais limpo ele passa: ProRes atravessa os dois filtros da REND-47 e a cena renderiza PRETA (11/ago/2026, `mamute-de-volta`)

O `normalizar-footage.mjs` cobrava dois requisitos — fps exato (REND-47) e all-intra (REND-102) — e
declarava `já ok` para quem passasse nos dois. Faltava o terceiro, que é o mais grave: **o navegador
headless do render tem de CONSEGUIR DECODIFICAR o arquivo.**

O Chrome não abre **ProRes**, HEVC/H.265 nem 10-bit/4:2:2. Medido neste projeto: três clipes
assinados do Shutterstock foram baixados em ProRes e as cenas `s102`, `s104` (dois takes) e
`card-03` renderizavam **sem imagem nenhuma**.

**A ironia é o mecanismo:** ProRes é formato de masterização — é all-intra por construção e costuma
vir em fps exato. Ou seja, **quanto melhor o arquivo, mais limpo ele passava pelos dois filtros
anteriores.** Qualidade de origem não é compatibilidade de destino, e um filtro que só mede
degradação não vê o arquivo bom demais.

E nenhum outro gate cobre: o `qc-procedencia` julga a FONTE, não o codec; o `qc-carga` mede tinta na
tela e uma cena preta pode passar por "cena escura". O `shot.mjs` era o único que sabia — imprime
`ok-COM-MIDIA-FALTANDO`, com o comentário no código dizendo *"quem só lê `ok` tem de tropeçar"* —,
mas **ninguém cobrava esse aviso**. Sinal que existe e não é lido por nenhum gate é sinal que não
existe.

Sem conversão, o defeito só apareceria **depois** do render 4K: três clipes pretos, mídia paga no
disco, cena vazia, e a hora barata de trocar já passada.

**A régua: codec decodificável é requisito de entrada, medido junto com fps e all-intra.** Um
`ffprobe` por arquivo, e a resposta é binária.

*Consertado no ato:* `normalizar-footage.mjs` ganhou `indecodificavel()` — lista branca
`h264|vp8|vp9|av1`, mais a checagem de `pix_fmt` (h264 que não seja `yuv420p`/`yuvj420p` também
entra na fila). Arquivo assim vai para a fila **mesmo com fps e GOP perfeitos**, e o relatório o
marca com o motivo escrito: *"o Chrome NÃO decodifica — a cena renderiza PRETA"*. Como no `allIntra`,
`ffprobe` que não lê **não** vira defeito: converter por dúvida custa uma hora de CPU por engano.

⚠️ **Ao converter, arquivo por arquivo — nunca o projeto inteiro.** O modo `conform` joga clipe de
50 fps no ramo `setpts` e o transforma em **câmera lenta de 0,6×**: decisão de arte disfarçada de
normalização. Neste projeto há dois clipes de 50/1 em uso (`yala-mata-fechada`, em `s114` **e**
`s40`, e `yala-capim-seco`) — normalizar o lote inteiro os arruinaria em silêncio.

---

---

## [REND-105] Cena de run fundido não tem HTML — e o grep pelo nome dela mente

No mesmo lote: o espelho tinha **164 segmentos** e a pasta **124 HTMLs**. Tirando os 25 `apresentador`
(que são o master do Bôco, sem arte), sobravam **15 cenas de modo de arte sem HTML** — o que parece
arte faltando e não é: são **filhas de run fundido**, cobertas pelo clipe da irmã, que roda por cima
da janela delas.

O jeito óbvio de conferir — grepar o nome da filha dentro dos HTMLs, procurando quem a declara — deu
**falso negativo em 6 das 15**: `s02`, `s04`, `s05`, `s06`, `s15` e `s66` não eram citadas por HTML
nenhum, e estavam perfeitamente cobertas. O cabeçalho que declara a fusão é prosa escrita por um
agente, e prosa nem sempre nomeia todo mundo que engole.

Quem decide é o **relógio**. Monte a linha do tempo com a duração REAL de cada clipe (`ffprobe`, não o
`dur` do espelho) e teste se a janela `[inSec, inSec+dur]` da filha cai dentro da de uma irmã. Assim
as 15 fecharam: `s02` sob `s01`, `s04/s05/s06` sob `s03`, `s15` sob `s14`, `s66` sob `s65`, `s51` sob
`s50`, `s63` sob `s64`, `s86` sob `s85`, `s119` sob `s120`, `s126` sob `s125`, `s140` e `s141` sob
`s139`, `s148` sob `s147`, `s157` sob `s156`.

Note que `s63` é coberta por `s64` e `s119` por `s120` — **a irmã tem número MAIOR**. Quem procurar a
cobertura só na cena anterior também erra.

> **A regra:** cobertura de cena se prova no tempo, nunca no texto. *Um cabeçalho descreve a intenção
> de quem escreveu; a duração do clipe descreve o que vai ao ar.*


---


## [REND-106] Caçar "tela preta" numa marca navy acusa a própria paleta

Item 5 da estação de render manda passar `blackdetect` por amostragem no lote. Fiz isso em 10/ago/2026
no `ceuta` medindo **luminância média** em 5 pontos de cada um dos 124 clipes. Deu **3 suspeitos**, e os
**três eram sãos**:

- `s101-tres-passos` só no ponto de **10%** — a cena constrói por acúmulo e naquele instante apenas o
  título `SEQUÊNCIA REGISTRADA / NÃO CAUSA PROVADA` tinha entrado. Os outros 4 pontos: 14 a 16.
- `s139-700-menores` nos pontos de 70% e 90% — é a fila de **700 menores** desenhada em ícones de ~1 px
  sobre navy, mais fronteira tracejada, bandeiras e crédito. Num downscale para 32×18 o traço fino
  desaparece na média e sobra o fundo.
- `s162-clube-membros` quase inteiro — é **ALPHA**. Medir RGB de um `.mov` com canal alpha lê o fundo
  transparente como **preto**, e por cima disso os primeiros 5,4 s da cena são vazios **de propósito**
  (o quadro é do apresentador; ver [REND-104]).

O fundo da casa é navy quase preto. Uma régua de "está escuro demais" calibrada para tela preta de
defeito **acusa a estética da marca** — e o custo não é o falso positivo em si, é o que ele convida a
fazer: re-renderizar clipe são, ou pior, alguém "clarear" uma cena que estava certa.

> **A regra:** meça por **fração de pixels pretos** (o que o `blackdetect` faz), nunca por média — e
> **OLHE o frame antes de reprovar**. A métrica diz onde olhar; ela não dá o veredito. E **nunca**
> amostre clipe alpha por luminância: para ele, preto é o normal.

## [REND-107] Censo de render que só procura `-4k.mp4` dá cena ALPHA por FALTANDO

> ⚠️ **RESTAURADA em 11/ago/2026, e ela é do lote que NENHUM GATE PODIA ACHAR.** Foi apagada pelo
> commit `d5a9837` junto com outras 24, mas — ao contrário daquelas — o número `REND-104` foi
> **reocupado no mesmo dia** por uma lei nova. Sem vaga no arquivo, não havia buraco para procurar,
> e a varredura que recuperou as outras passou direto por esta. *Apagamento que não deixa vaga é
> invisível para quem procura vaga.* Ela só apareceu quando a busca deixou de perguntar "que número
> sumiu?" e passou a perguntar **"que TEXTO sumiu?"**. Nasceu como `REND-104`; volta como
> `REND-107`, porque o número antigo tem dono legítimo. Recuperada de `fdd5cd2` (10/Ago 10:12).


Medido em 10/ago/2026 no `ceuta-travessia-em-massa`: **124 HTMLs contra 123 `-4k.mp4`**. A conta
apontava uma pendência — `s162-clube-membros` — e a instrução da estação manda levantar "as cenas sem
`-4k.mp4` correspondente". Seguida ao pé da letra, ela mandaria renderizar de novo um artefato que
estava **pronto havia 16 horas**: 114 MB de ProRes 4444 `yuva444p12le`, 12,60 s, 378 frames.

A cena não estava faltando: ela é **ALPHA**. Card de CTA/navegação (FIN-03) roda
`html,body{background:transparent}`, é capturado pela rota `capturar-alpha` e vai na **V4 por cima do
apresentador** — o artefato correto dele é `-4k.mov`, não `-4k.mp4`. O formato diferente É a entrega,
não um desvio a corrigir.

O dano de acreditar na conta tem dois lados, e o segundo é pior: re-renderizar queima artefato pago,
mas **reportar bloqueio que não existe** faz uma estação inteira parar por nada — e a estação de render
é a que menos tem margem para parar, porque quem despacha o veredito é o artefato.

> **A regra:** aceite `-4k.mp4` **OU** `-4k.mov` como artefato de cena. E antes de declarar pendência
> por contagem, ABRA o HTML da cena que sobrou: o gatilho `render via capturar-alpha` mora nas 40
> primeiras linhas, e é ele que o `_render-4k-loop.sh` procura — sem ele a cena sai pela rota OPACA e
> vira **tela branca sobre o apresentador**. *Contagem que não conhece os formatos da casa não mede
> pendência; mede a própria ignorância.*

---

## [REND-110] Teto EXTERNO menor que a soma dos INTERNOS não protege nada — só garante que ninguém termine

**Medido em 12/ago/2026, no `mamute-de-volta`.** Nove cenas ficaram três passadas sem render, com o
portão marcando `falhas: []` e `indefinidos: [carga, colisão, fora-do-quadro, tamanho,
crédito-fantasma]` — **não medido, nunca reprovado**. A passada anterior aplicou a cura documentada
(re-medir a cena SOZINHA) e recebeu `rc=124` em 6 de 7. O log leu isso como *"o gate trava"*, e a
estação foi redespachada para tentar de novo, igual.

O `rc=124` não era do gate. Era do `timeout` de fora:

```bash
QC_TIMEOUT_MS=300000 timeout 900 node scripts/qc-cena.mjs "$html" --forcar --conc=1 --passo=0.5
#                ↑ 300 s por gate INTERNO      ↑ 900 s para a SOMA de ~4 gates em série
```

O `qc-cena` roda os gates por-cena **em série**, cada um com o seu próprio teto. Quatro gates a
300 s são 1200 s de orçamento interno dentro de uma cerca externa de 900 s: a passada era morta no
meio **sempre**, em qualquer máquina, com qualquer cena. Nenhum carimbo era gravado, o render se
recusava (com razão) a gastar sobre medição inexistente, e o ciclo recomeçava.

**A régua:** quando um processo tem relógio próprio por etapa, o teto de fora tem de ser **maior que
a soma dos de dentro** — nunca um número redondo escolhido à parte. Se você não sabe quantas etapas
são, o teto externo não é proteção, é sorteio.

⚠️ **E o diagnóstico do gate nomeava o órgão errado, o que escondeu a causa por três passadas.** Com
o passo padrão (0,1 s), o `qc-carga` numa cena de 2,3 GB de all-intra 4K em três `<video>` colhia
44 de 143 amostras e concluía **"motor de animação morto"**. O motor estava vivo: `shot.mjs` na
mesma cena devolveu frame íntegro em **17 s**. Cada sonda seeka os três vídeos, e a 0,1 s são 143
sondas. Com `--passo=0.5`: **29/29 amostras válidas, ✓ dentro dos tetos, 256 s.** *Quando um gate
lento acusa o órgão errado, o custo não é a medição perdida — é toda a caça de defeito que ele manda
fazer no lugar errado.*

⚠️ **Nem todo gate tem remédio de sensibilidade — para alguns só existe relógio.** O runner repassa
`--passo` a `carga` (nomeada) e `overlap` (posicional), e **a mais ninguém**. Medidos isolados na
mesma cena: `qc-fora-do-quadro` **590 s ✓** e `qc-credito-fantasma` **652 s ✓**, contra o teto padrão
de **180 s**. Esses dois estouravam em toda cena de footage 4K pesado, sem exceção — era **o mesmo
gate falhando nove vezes, não nove cenas com defeito**. Antes de tratar `indefinido` como propriedade
da cena, cronometre o gate sozinho: se o número bate no teto, o problema é o teto.

## [REND-111] `-ss t` não entrega o frame de `t` — e 0,3 ms de arredondamento reprova o clipe inteiro

**Medido em 12/ago/2026, no `mamute-de-volta`.** O `qc-tiles-faltando` — o gate que existe desde
30/jul, roda em segundos e nunca tinha sido chamado por ninguém — foi finalmente rodado no lote de
80 clipes e começou a acusar `✗ DEFEITO` em cena de footage: `s01-hook-promessa` com **20,88%** de
área divergente, `s05-quem-era` com 11,06%, `s08-mapa-estepe` com 24,15%.

Nenhuma delas tinha defeito. O clipe estava intacto — **deslocado de um frame na comparação**.

O gate alinha a amostra ao frame de propósito (`Math.round(bruto * FPS) / FPS`, com um comentário
explicando que t fora do múltiplo de 1/30 dá falso positivo). Aí entregava esse tempo ao ffmpeg
assim:

```js
execFileSync("ffmpeg", ["-ss", t.toFixed(3), "-i", clipe, ...])   // t = 0,166667 → "0.167"
```

A 30 fps o frame 5 vive em **0,166667 s**. O `toFixed(3)` escreve **`0.167`** — 0,33 ms DEPOIS dele.
E o `-ss` do ffmpeg não entrega "o frame de t": entrega **o primeiro frame com PTS ≥ ss**, ou seja o
frame 6. O `shot.mjs`, que desenha no tempo exato, desenhava o 5. *Um terço de milissegundo virava
um frame inteiro de desalinhamento, em metade das amostras* — as que o arredondamento decimal joga
para cima.

**Por que só reprovava footage:** a diferença que 1 frame produz é a diferença que a CENA tem entre
frames vizinhos. Em desenho é quase nada. Em drone sobre neve, medido nesta mesma cena, dois shots
consecutivos do PRÓPRIO HTML diferem em **20,51%** — acima do corte de 8%. O gate estava medindo a
velocidade do footage e chamando de tile não pintado.

**A prova de que o clipe estava são** (e o método para qualquer suspeita deste gate): o frame do
clipe pedido em 0,17 casou com o shot de **0,200** em `area=0,00% · blocos=0` — idêntico. Nenhum
offset vizinho chegava perto. Quando o alvo certo dá zero absoluto, o que se mediu antes era o alvo
errado.

**A cura** (aplicada em `scripts/qc-tiles-faltando.mjs`): pedir ao ffmpeg **meio frame antes** do
alvo — `-ss (t − 0,5/fps)` —, e mandar ao `shot.mjs` o tempo com 6 casas. Assim o primeiro PTS ≥ ss
é sempre o frame que se quer, qualquer que seja o arredondamento. Depois do conserto a mesma cena lê
`✓ limpo (pior 0% em 3/3 amostras)`.

⚠️ **A régua do diagnóstico:** diferença de 20% espalhada por **540 de 540 linhas** é a imagem
INTEIRA divergindo, e tile não pintado é *localizado* — um retângulo, com o resto igual. Antes de
mandar re-renderizar por causa deste gate, olhe a distribuição: se todas as linhas e quase todas as
colunas acusam, não é buraco na rasterização, é desalinhamento entre as duas fotos que você comparou.

⚠️ E o gate herdou a lição do próprio arquivo: *capacidade órfã não é capacidade*. Ele passou 13 dias
sem chamador — tempo em que este falso positivo estrutural existiu sem ninguém descobrir, porque
ninguém o rodava. O primeiro uso de um gate parado é também o primeiro teste dele.

⚠️ **E o mesmo gate tem uma SEGUNDA fonte de falso positivo, de natureza oposta: em cena de MAPA
quem está incompleto é a REFERÊNCIA.** Medido no mesmo dia, na `s08-mapa-estepe`: o gate acusou
24,15% em 2 de 3 amostras, e o frame do CLIPE tinha tudo — satélite, polígono da estepe do UMG,
contorno do gelo, a rota pela Beríngia, rótulos e créditos —, enquanto o SHOT do mesmo instante
trazia o **satélite pelado**, sem geometria nenhuma. Não é falta de tempo: repetido com
`SHOT_MAPA_MS=35000`, deu os mesmos 24,15%. O render espera a geometria por um caminho que o
`shot.mjs` não reproduz (os layers entram no `load` do mapa, que não dispara quando algum tile
falha — o próprio `shot.mjs` documenta isso três vezes).

Aqui o veredito de reprovação foi desarmado no código: cena de mapa que daria `✗ DEFEITO` sai
`⚠ MAPA (indeterminado)` e conta como NÃO MEDIDO. Reprovar mandaria re-renderizar clipe são — o
desperdício que o gate existe para evitar; e `✓ limpo` seria mentira, porque sobre essa cena ele não
sabe. Cena de mapa que sai limpa continua limpa: a isenção só desarma a reprovação.

**A regra geral, que vale para qualquer gate comparativo:** quando o artefato julgado e a referência
são produzidos por caminhos diferentes, *a diferença entre eles não prova nada sobre o artefato até
você saber qual dos dois é o incompleto*. Olhe os dois — e note que a resposta pode ser a referência.
Nas duas vezes deste dia foi: no footage, a referência estava um frame adiantada; no mapa, ela estava
vazia.

---

### REND-114 · "já compatível" que mediu dois eixos de quatro — o instalador de footage aprovava o arquivo que trava a tela (13/ago/2026)

Em `especies-humanas`, cena n110.

`scripts/stock/_instalar-lote.mjs` é a porta por onde todo footage de stock entra numa produção. Ele
media `codec === "h264" && pix === "yuv420p"` e, passando nisso, copiava o arquivo direto imprimindo:

```
· cópia direta (já compatível: h264/yuv420p)
```

O arquivo instalado tinha **`has_b_frames=2` e 25 fps** — os dois eixos que a [REND-47] existe para
proibir, e que ele não olhou. B-frame sob seek quadro a quadro é exatamente o defeito que o Mateus
reportou cinco vezes: *"a imagem fica indo e voltando"*.

**Os DOIS ramos erravam, e o segundo é o mais traiçoeiro:** o ramo `else`, que já reencodava com
ffmpeg, chamava `libx264` **sem `keyint=1`/`bframes=0`** — ou seja, *fabricava* B-frames num arquivo
que acabara de passar pelo transcodificador para ficar compatível. Um script cujo propósito
declarado é "garante compatibilidade com o motor de render" produzia incompatibilidade nova.

**Por que ninguém viu:** o conserto existe (`normalizar-footage.mjs`) e roda por fora, quando alguém
lembra. O instalador nunca o mencionou. Entre "instalei" e "renderizei" não havia nenhuma frase
dizendo que faltava um passo — e a que havia dizia o contrário: *já compatível*.

**A regra:** mensagem de compatibilidade só pode citar os eixos que a comparação realmente cobre. Se
o requisito tem quatro eixos (codec · pix_fmt · **taxa** · **all-intra**), ou a checagem tem os
quatro, ou a mensagem nomeia os dois que ela viu. *"Compatível" sem qualificador é lido como
"pronto para render" — e quem lê isso não vai medir de novo.* Mesma família da [SIS-329] (o `✓` do
handler de fechamento que afirma sobre o encerramento, não sobre o trabalho).

**Conserto aplicado no CÓDIGO** (13/ago): `probe()` passou a ler `has_b_frames` e a taxa em número;
nasceu `REND47(p)`; o ramo de cópia direta só copia quem passa nos quatro eixos e imprime o que
mediu (`medido: h264/yuv420p · 30.00 fps · all-intra`); quem tem codec certo e taxa/GOP errados cai
num ramo novo que reencoda; os dois ramos de ffmpeg ganharam `-vf fps=30` e
`-x264-params keyint=1:min-keyint=1:scenecut=0:bframes=0`; e o veredito final é medido **no arquivo
de destino**, com o comando do conserto impresso quando falha.

**O que o instalador NÃO decide, de propósito:** o *modo* de conversão de taxa. O padrão do
`normalizar-footage.mjs` é `conform`, que conserva os frames e **muda a duração** — num footage de
multidão caminhando isso entrega a cena 20% acelerada, defeito que nenhum gate pega porque o arquivo
fica tecnicamente perfeito. Por isso o instalador usa `fps=30` (modo simples, preserva a velocidade
real) e, no ramo que recusa, manda `--modo=simples` explicitamente. *Escolher entre acelerar a
imagem e repetir um quadro é decisão editorial; um instalador não deve tomá-la em silêncio.*

---

### REND-116 · O pré-gate do revisor herdava `--passo=0.1` e travava 13 min numa cena — o revisor morre antes de julgar UMA (13/ago/2026, estação QC do `dentro-do-sol`, agente-raiz: `revisar-no-lugar-do-mateus.mjs`)

O `qc-carga` amostra a cena de `passo` em `passo` segundos; o padrão é **0,1**. Em cena com footage
4K cada amostra decodifica quadro de vídeo, e a conta explode. A casa **já sabia** disso — está na
memória `qc-carga-mapa-timeout` e o `qc-cena` até aprendeu a repassar a flag. O buraco era um degrau
acima: **quem chamava o `qc-cena` nunca passava `--passo`**, e o pré-gate herdava o 0,1.

Medido no `dentro-do-sol`, duas passadas seguidas:

| passada | o que aconteceu |
|---|---|
| 4 | **66 min** no pré-gate, revisor morto sem UM julgamento; diário registra "não re-julguei por visão" nas 14 cenas |
| 6 | **13 min dentro de UMA cena** (`s140-ultrassom-de-bebe`), com 20 processos de gate na máquina |
| 6, à mão com `--passo=0.5` | **8 cenas em ~5 min · 8/8 PASS** |

**O dano não é a espera — é a desistência.** Duas sessões seguidas concluíram que o revisor era
inviável e mandaram o vídeo adiante sem o último olho, que é justamente o gate que substituiu a
revisão humana do Mateus.

**A regra:** *quem CHAMA um gate carrega a responsabilidade pelas flags de medição dele.* Repassar a
capacidade (o `qc-cena` entender `--passo`) não serve de nada enquanto o chamador não a usa — e o
sintoma não é erro, é lentidão, que se lê como "a máquina está cheia" em vez de "a flag está errada".

---

### REND-117 · Matar processo que não produziu artefato NÃO é perder trabalho — o teste é o artefato, não o relógio (13/ago/2026, estação QC do `dentro-do-sol`)

A [REND-116] só foi consertada porque a sessão matou o revisor aos 12 min. A passada 4, diante do
mesmo sintoma, **esperou 66 min** — e a hesitação tem causa: a casa ensina (com razão) que artefato
de LLM pronto é ativo pago e não se joga fora.

**Mas a régua é o ARTEFATO, não o tempo decorrido.** Antes de matar, conte o que já saiu:

```
find out/<proj>/_revisao-shots -name "*.png" -mmin -20 | wc -l   → 0 frames
wc -l < out/<proj>/_revisor-*.log                                → 1 linha
```

Zero frames e uma linha de log significam **zero inferência paga**: o processo estava no
determinístico, que é luz e se refaz. Matar ali custou nada e comprou 3 horas.

O erro simétrico é igualmente caro: matar um driver que já entregou 46 HTMLs porque "está demorando".
*Meça o que ele produziu; o relógio não sabe a diferença entre trabalho e espera.*

### REND-118 · A LISTA DE CLASSES DE MÍDIA NÃO SE ADIVINHA — EXTRAIA-A DO HTML QUE CONSOME O INSUMO (13/ago/2026)

Quando um script precisa saber quais pastas de mídia baixar, existe a tentação de escrever a lista:
`footage foto documento geo drone logo pessoa trilha`. Ela parece completa, cabe numa linha, e o
comentário ao lado ("cada uma é declarada de propósito") soa como rigor. **É adivinhação com cara de
contrato** — e erra em silêncio, porque quem escolhe o nome da pasta é quem baixou a mídia, meses
antes, em outro projeto.

**MEDIDO em 13/ago/2026**, comparando a lista de oito nomes do `lote-render.sh` com o que os HTMLs
de fato carregam:

| projeto | referências | fora da lista | as classes reais |
|---|---|---|---|
| `dentro-do-sol` | 58 | **48** | arquivos soltos na **RAIZ** de `_media/`, sem subpasta nenhuma |
| `fatos-a380` | 78 | 15 | `logos/` (não `logo`), `documentos/` (não `documento`) |
| `cerebro-quando-sonha` | 50 | 15 | `pessoas/`, `logos/` |
| `quasares-primordiais` | 72 | 1 | `flags/` |

Singular e plural convivem, há classes que ninguém previu (`flags/`), há aninhamento por cena
(`_media/footage/s57/`), e há projeto em que **a maioria da mídia não mora em subpasta alguma**.
Nenhuma lista escrita à mão sobrevive a isso. O efeito prático é o render abortar cena a cena com
"MÍDIA QUEBRADA" depois de a máquina já estar ligada e paga — que era exatamente o defeito que a
lista tinha sido escrita para consertar, repetido um degrau adiante.

**A lei:** *não adivinhe a forma do insumo — pergunte ao artefato que o consome.* O HTML diz quais
arquivos a cena carrega; extraia a lista dele e baixe exatamente aquilo. Assim cobre raiz, qualquer
nome de classe, qualquer aninhamento, e continua sem tocar no que ninguém referencia — que é como se
evita arrastar o `_master-decupado.mp4` (6–10 GB) e o `_fps-original/` (3 GB) junto ([SIS-361]).
De quebra, o que não veio passa a ter **nome e contagem** antes do render, em vez de virar erro
cena a cena depois.

**A calibragem que torna isto utilizável, e ela custou um falso positivo:** os HTMLs trazem linhas
de procedência em prosa, como `Mídia: ../_media/footage/s57/*.mp4 (Shutterstock assinatura…)`. Um
extrator ingênuo transforma isso em "arquivo que falta no bucket" — alarme falso, que nesta casa é
bug de prioridade alta. Caminho com `*` ou `?` é prosa, não arquivo: filtre. Já menção dentro de
JavaScript (`is("ESPANHA","../_media/logos/bandeira-espanha-moldura.svg")`) é referência **de
verdade** e tem de entrar — medido no `fatos-a380`, onde 15 de 15 ausências eram reais e 3 delas só
apareciam em JS. *Um extrator amplo demais custa download desnecessário, que é barato; um estreito
demais custa render abortado, que não é.*

### REND-119 · FONTE SE ESCOLHE PELA MEDIÇÃO, NUNCA PELO NOME — E A DURAÇÃO PEGA O QUE TAXA E RESOLUÇÃO DEIXAM PASSAR (14/ago/2026)

Arquivo chamado `master.mp4` não é necessariamente um master. O nome é escolhido por quem grava, e
sobrevive intacto a qualquer perda de qualidade que aconteça depois — então casar por nome é confiar
numa etiqueta que ninguém verifica.

**MEDIDO em 14/ago/2026**, comparando a MESMA obra (`new-york`, YouTube `o1rvn05nKdo`) pelas duas
fontes que o bucket oferece:

| | `videos-editor/new-york.mp4` | `acervo-top10/…/master.mp4` |
|---|---|---|
| tamanho | **11,88 GB** | 0,93 GB |
| codec | H.264 | **AV1** (reencode) |
| taxa | **75,9 Mbps** | **6,0 Mbps** |
| duração | **1338,88 s** | **1299,45 s** |
| cadência | 30000/1001 | 30/1 |

São **12,6× de taxa**. O segundo é o download do YouTube guardado com nome de master — e o codec
(AV1), a cadência redonda e a taxa denunciam o reencode. Existem **31** arquivos assim no acervo.

**E há um detalhe que só a medição revela: o do acervo é 39,4 s MAIS CURTO.** Não é apenas magro, é
**incompleto** — quem montar um compilado a partir dele perde conteúdo, não só definição. Esse
segundo defeito não aparece em nenhuma inspeção por nome, tamanho ou resolução: os dois se anunciam
como 3840×2160.

**A lei:** *fonte se escolhe pelo que a MEDIÇÃO diz, nunca pelo nome do arquivo.* Antes de usar algo
como origem de uma montagem, rode `ffprobe` e olhe taxa, codec **e duração** — a duração é a que pega
o caso que os outros dois deixam passar. E quando existirem duas candidatas, prefira a de primeira
geração: reencode não se desfaz.

**O corolário, que é onde isto vira dinheiro:** os 9 compostos finais do editor estão em
`videos-editor/`, são fonte de primeira geração, e em 14/ago **nenhum código vivo os usava** — zero
menções em todo o `scripts/`. O casamento correto é `youtube_id → slug`, derivado do registro de
entregas (7 dos 9 casam; os 2 restantes são anteriores ao registro). *Ter a fonte boa e não usá-la é
indistinguível de não a ter — e a régua da casa é qualidade máxima, sempre.*

### REND-120 · O render dividia a máquina pelas vagas que EXISTEM, não pelos renders que RODAM — e ficava com metade dos núcleos (14/ago/2026, pergunta do Mateus sobre renderizar várias cenas juntas)

A [REND-42] fez `RENDER_WORKERS = nproc / RENDER_SLOTS` para matar a sobrecarga que causa frame
preto, e estava certa. Mas `RENDER_SLOTS` responde *"quantos renders CABEM nesta máquina"*, não
*"quantos estão rodando AGORA"* — e a linha de produção renderiza em SÉRIE
(`_render-4k-loop.sh <proj> 1`), então a segunda vaga quase nunca nasce.

**Medido na `estudio-render` (g2-standard-8), com o lote do `fatos-a380` rodando exatamente assim:**

    ⚙  2 slot(s) × 4 worker(s) = 8 de 8 núcleos
    ⚡ frame-parallel: 4 workers (8 vCPU no nó)

São **4 dos 8 núcleos**. E repare que a primeira linha anuncia `8 de 8` — o PRODUTO, verdade só se as
duas vagas estivessem cheias. *O log tranquilizava quem o lia com o número que não estava em uso.*

**O paradoxo que fechou o diagnóstico:** sob carga ≥3×/núcleo a [SIS-95] baixa o teto para 1 vaga, e
a conta vira `8/1` = **8 workers**. Ou seja, a defesa contra máquina cheia DOBRAVA o paralelismo de
quem entrasse nela — o inverso do que ela existe para fazer.

**A MEDIÇÃO** (3 rodadas de ordem rotacionada, aquecimento descartado, frames na RAM, duas cenas
reais completas em cada braço; variação entre rodadas < 4%):

| mediana de 3 rodadas | `estudio-render-2` t2d · 8 núcleos FÍSICOS | `estudio-render` g2 · 4 físicos + HT + L4 |
|---|---|---|
| hoje (4 workers, em série) | 211 s | 271 s |
| **8 workers, em série** | **119 s · 1,77×** | **154 s · 1,76×** |
| 2 cenas JUNTAS, 4 workers cada | 143 s · 1,48× | 237 s · 1,14× |

*(t2d: 210/211/211 · 116/120/119 · 143/143/144 — g2: 270/272/271 · 154/150/171 · 237/242/231.)*

**A resposta à pergunta que originou isto — "e se renderizássemos várias cenas juntas?"** Juntar
cenas GANHA sobre o padrão de hoje, mas PERDE para simplesmente dar a máquina inteira a uma cena de
cada vez, nas duas arquiteturas. O motivo é que o paralelismo já existe por FRAME ([REND-14]): a
máquina já sabe usar todos os núcleos numa cena só, e repartir apenas troca de dono os mesmos
núcleos, pagando warm-up de Chrome em dobro. **As duas coisas não se somam — disputam o mesmo
recurso.**

⚠️ **A curva de escalabilidade MENTE se os frames forem para o disco.** O primeiro `bench-render`
mediu 4→8 workers em disco e deu só **1,28×**, o que quase me fez concluir que a captura satura em 4
e que juntar cenas seria a saída. Com os frames na RAM — que é o que a produção faz ([REND-56]) — o
mesmo salto dá **1,77×**. *O I/O mascarava o ganho de CPU e apontava para a arquitetura errada.*

**O CONSERTO** (`render-one.sh`): o divisor passa a ser quantos renders estão de fato na máquina — o
lock já materializa cada um como um diretório de slot —, limitado pelo teto de vagas. Com 1 render
ativo: 8 workers = 8 de 8 núcleos. Com 2: 4 cada = 8 de 8. **O produto nunca passa dos núcleos, então
a proteção da [REND-42] continua inteira.**

⚠️ **TRÊS armadilhas no próprio conserto, e a terceira só apareceu na MÁQUINA REAL.** As duas
primeiras o teste de mesa pegou: `ls` com glob **aborta o comando inteiro no zsh** quando não casa
nada, e `find` **sem `-mindepth 1`** devolve também o próprio diretório de busca, inflando a contagem
em 1. A terceira atravessou todo o teste de mesa e caiu na primeira execução de verdade:

> **contar diretório não é contar render.** Render morto por SIGKILL não roda o `trap` e **deixa o
> slot para trás**; o laço de aquisição só recupera slot órfão quando TENTA ocupá-lo, então um órfão
> no `slot2` sobrevive intacto enquanto o render novo pega o `slot1` livre. Medido na `estudio-render`:
> `slot1 pid=303568 VIVO · slot2 pid=303280 MORTO`, e a conta anunciou `2 render(s) ativo(s)` → 4
> workers. **O conserto reproduzia o defeito que veio consertar.** A correção é perguntar pelo DONO
> (`ps -p`), nunca pelo rastro — a mesma régua da [REND-58], onde CPU é a prova de vida.

*Teste de mesa prova a aritmética; só a máquina prova o mundo. Os três furos são do mesmo tipo —
contar o que PARECE estar lá em vez do que ESTÁ — e o mais caro deles era invisível fora de produção.*

**A GENERALIZAÇÃO, que vale fora do render:** a [REND-42] ensinou que um limite não deve SUPOR o
valor de outro. Esta acrescenta a metade que faltava: **capacidade se divide pelo que está EM USO,
nunca pelo que está PROVISIONADO.** Dividir pelo teto protege contra a sobrecarga e cria ociosidade
silenciosa — que não dá erro, não aparece em log, e só se enxerga contando o que de fato roda.

**Como verificar:** o `render-one.sh` imprime `⚙ N render(s) ativo(s) de M vaga(s) × W worker(s) =
N×W de <núcleos>`, e a linha seguinte do driver (`⚡ frame-parallel: W workers`) tem de mostrar o
MESMO W. Quando os dois números divergem, quem manda é o do driver — foi essa divergência que
escondeu o defeito por semanas.

---

### REND-121 · O detector de mídia quebrada conhecia `<img>` e não `<image>` — e o ícone quebrado foi ao 4K

🔀 **Nasceu como `REND-119` e foi renumerada em 14/ago/2026** ([SIS-62]): outra sessão commitou uma
`REND-119` às 04:02 e esta às 07:13, no mesmo dia. Quem chegou primeiro fica com o número.

O Mateus abriu o `fatos-a380` no Premiere e viu, no meio da fuselagem do avião da cena `s19`, o
**ícone de imagem quebrada do Chrome** — renderizado em 4K, aprovado pelo portão, entregue no XML.

A cena usa os logos assim:

```html
<image id="lgAirbus" href="../_media/logos/airbus-branco.svg" x="250" y="-56" .../>
```

O detector do `capturar.mjs` varria `querySelectorAll("img")` e `querySelectorAll("video")`.
**`<image>` é outra tag** — vive dentro de `<svg>`, não tem `complete` nem `naturalWidth`, e o
seletor `"img"` jamais a alcança. Os arquivos existiam e eram SVGs válidos; eles só não estavam na
máquina no instante do render, e nada acusou.

**O sintoma é o pior tipo:** não houve erro, não houve aviso, o exit code foi zero e o clipe tem a
duração e o tamanho certos. O defeito é *visual* e só aparece para quem olha o vídeo.

A prova nova é geométrica, não de propriedade: um `href` que falhou desenha com
`getBoundingClientRect()` de largura zero.

**A régua que isto deixa:** ao escrever um gate que varre o DOM, a pergunta não é *"cobri a tag que
eu uso?"* — é *"quantas tags fazem esta coisa?"*. Imagem em página web tem pelo menos três formas
(`<img>`, `<image>` de SVG, `background-image` em CSS), e um detector que conhece uma delas
**reporta cobertura inteira sobre um terço dos casos**.

⚠️ Varredura em 14/ago/2026: apenas **6 cenas em todo o parque** usam `<image>` — 2 no `fatos-a380`
(as afetadas) e 4 no `uruguai-despovoado`, todas com a mídia presente e ainda não renderizadas. O
raro é exatamente o que passa despercebido: um caso a cada duas centenas de cenas não aparece em
amostragem, só em produção.

*Detector cego para uma variante da coisa que ele procura não é um detector fraco: é um detector
que mente sobre o que examinou.* Ver [[SIS-358]], [[SIS-372]].

### REND-122 · Arquivo com cabeça e sem corpo: o QA lia o header e o clipe estava truncado (14/ago/2026)

O Mateus abriu o `cerebro-quando-sonha` no Premiere e foi apontando cena a cena: *"a s46 ficou com
menos de 1 segundo renderizado"*, *"s64 também tá com problema"*, *"s65 também"*, *"s67 tá travado"*.
Eu procurei layout, procurei duração — e o defeito era outro, em **sete** clipes 4K entregues:

```
cena   frames no header   frames REALMENTE legíveis
s64          1366                    1
s65           593                  148
s44           103                   65
+ s48, s54, s57, s67
```

**O header estava íntegro e o corpo não.** `ffprobe` respondia "1366 frames, 45,53s" com convicção,
porque lê metadado; o decoder morria no primeiro frame.

**A causa, medida no log de auditoria da nuvem:** três pedidos de `stop` na VM de render dentro da
mesma janela em que os clipes foram escritos (12/ago 06:53, 07:04:01 e 07:04:23 — e os corrompidos
carimbados às 07:01, 07:02, 07:03, 07:04:06 e 07:04:13, dois deles ENTRE os dois últimos stops).
O `ffmpeg` foi morto no meio da escrita: gravou o cabeçalho, nunca terminou o corpo. O render rodava
**sem a reserva `render-l4/_segure-a-gpu` puxada**, e o vigia desliga máquina sem RESERVA — não
máquina sem carga.

**O que deixou passar, e é o coração da lei:** o QA do `render-one.sh` já decodificava o clipe
inteiro — o `blackdetect` não funciona de outro jeito — e jogava a saída num
`grep -c "black_start"`. Tudo que o decoder gritava pelo caminho ia junto para o lixo.
*O teste custava zero e estava sendo feito; só o resultado era descartado.*

**Conserto:** a saída do `ffmpeg` passa a ser lida inteira, e `error while decoding` / `Invalid NAL`
/ `missing picture` / `bytestream` reprovam com o motivo e a causa provável. Provado nos dois
sentidos: reprova a `s64` com 4.098 erros de decoder e aprova a `s18` boa. E o laço de re-render
ganhou a mesma trava antes de subir — **corrupção não viaja para o bucket**.

⚠️ **A regra que generaliza:** *metadado não é conteúdo.* Todo teste que pergunta ao cabeçalho —
duração, contagem de frames, taxa, resolução — descreve o que o arquivo **promete**, não o que ele
tem. Quando o custo de decodificar já foi pago por outra razão, ler o resultado é obrigatório.

⚠️ E o vizinho, que apareceu na mesma investigação e é independente: em **22 cenas** o
`var DUR` do HTML foi trocado do valor **BRUTO** pelo `cleanDur`, contra o que o cabeçalho de cada
arquivo manda citando a [ARTE-97]. Na `s64` o comentário na MESMA LINHA dizia `/* BRUTO (ARTE-97) */`
com o valor limpo ao lado (21.10 onde o cabeçalho declarava 45.520). Como o render lê
`window.__duracao`, o clipe nasce mais curto que a janela que o espelho reservou — 24,43s a menos na
`s64`, 9,0s na `s46`. *Regra escrita duas vezes no mesmo arquivo e implementada ao contrário nas duas.*

### REND-123 · Worker por núcleo é conta errada quando o gargalo é ESPERA, não CPU (14/ago/2026)

O Mateus perguntou *"por que 34 minutos para a s64?"* — e a pergunta valia mais que a resposta que
eu ia dar. Fui medir a máquina no meio do render:

```
load 1,20 em 8 vCPUs   ·   CPU 97,7% OCIOSA   ·   19,5 GB de RAM livres
os 4 workers da cena:  0,8% de CPU cada
46 Chromes somando:    67,3%  (menos de UM núcleo)
```

**A máquina não estava trabalhando. Estava fazendo fila.** Numa cena com vídeo de fundo, cada frame
manda `currentTime = f(t)` em cada footage e o worker **dorme até o Chrome responder `seeked`**. Na
`s64`, com três vídeos, deu ~2,5 s por frame — quase nada disso é processamento.

O `render-one.sh` dimensiona por núcleos (`slots × workers ≤ nproc`, [REND-14] emendada), regra que
nasceu certa: oversubscrição de CPU é a causa documentada do frame preto ([REND-07]). Só que ela
mede o recurso ERRADO quando o worker está bloqueado em I/O — aí "um worker por núcleo" significa
**um lugar na fila por núcleo**, e a máquina inteira espera junto.

**Medido, na mesma cena e retomando os mesmos frames:**

```
RENDER_WORKERS=4  (padrão, = núcleos)    24 frames/min   →  34 min restantes
RENDER_WORKERS=16 (4× os núcleos)        94 frames/min   →   6 min restantes
```

**Quase 4×, sem trocar de máquina.** A CPU saiu de 97,7% ociosa para 58,7%, com 23,9% de iowait —
o gargalo mudou de "espera vazia" para disco, que é onde ele deve estar.

**A regra:** antes de aceitar o tempo de um render como custo, **olhe a CPU**. Se ela está ociosa
com os workers vivos, o número de workers está dimensionado pelo recurso errado — suba
`RENDER_WORKERS` acima dos núcleos até a ociosidade sumir. O teto por núcleo continua valendo para
cena de DESENHO puro, onde o worker de fato calcula.

⚠️ **E o teste é grátis por causa da retomada** ([REND-63]): os frames já escritos ficam no disco,
então parar e recomeçar com outra configuração não perde nada. *Medir a alternativa custou 45
segundos e economizou 28 minutos.*

### REND-125 · O gate espera `load`, e cena de mapa nunca chega lá — a cena consertada foi carimbada como REGRESSÃO porque o gate não conseguiu abrir o arquivo (11/set/2026, `terremotos-america-do-sul/t-s125`, agente-raiz `scripts/qc-tamanho.mjs` + `scripts/qc-carga.mjs`)

O `goto` do Playwright espera `load` por padrão. O palco do mapista fica puxando tile do MapTiler e
terreno **enquanto a página viver** — então `load` não chega, o `goto` estoura os 30 s e o gate
devolve `⚠ NÃO MEDIDO`. No portão, NÃO MEDIDO tem o mesmo peso de uma falha e **não libera render**.

Sob máquina carregada isso deixa de ser exceção e vira regra. O custo medido:

```
⚠ t-s125 — [tamanho] ERRO: page.goto: Timeout 30000ms exceeded.
1 pronto · 1 regrediu
⚠ 1 cena(s) NÃO fecharam — reveja antes de renderizar
```

**Uma cena que um agente pago acabara de consertar foi contabilizada como RETROCESSO** porque o gate
não abriu o arquivo. O trabalho existia e o placar dizia o contrário.

**Navegação que não "termina" não é navegação que falhou.** Passados 30 s o DOM está parseado há
muito tempo; o que falta é rede de tile, que a medição de texto não usa — e o `qc-carga` já tem a
espera certa para mapa logo abaixo (`__aguardarMapa`, teto de 8 s). O timeout deixou de ser veredito
e virou condição registrada: segue-se para `domcontentloaded` e mede-se.

⛔ **Com trava, senão isto abre a porta do verde vazio:** navegação que não chegou a `load` **mais**
medição sem nenhum bloco de texto volta a ser `NÃO MEDIDO`, nunca `✓ ok`. Página que não abriu e
página sem texto se parecem no resultado, e a régua é falhar fechado quando não dá para distinguir.

✅ Medido nas duas direções, na mesma máquina e no mesmo minuto:

```
ANTES  qc-tamanho t-s125 (mapa)    → ⚠ NÃO MEDIDO: page.goto: Timeout 30000ms exceeded
DEPOIS qc-tamanho t-s125 (mapa)    → ✓ TAMANHOS ok (palco 3840×2160 · modo mapa)
DEPOIS qc-tamanho t-s016 (desenho) → ✓ TAMANHOS ok   ← cena comum não regrediu
```

⚠️ **É conserto de FAMÍLIA, não do item que o aviso denunciou** ([SIS-429]). O alarme falava só de
`tamanho`; medindo, o `qc-carga.mjs:121` fazia a MESMA navegação e morria do mesmo jeito — era ele o
`indefinidos: ["carga"]` que sobrou no portão depois de o `tamanho` cair. Os dois foram consertados
juntos. O `qc-rodape-contraste.mjs:118` usa o mesmo `waitUntil: "load"` e é o próximo da fila.

⚠️ **E o corolário sobre QUANDO mexer em gate:** eu tinha decidido NÃO tocar nisto, e escrevi o
motivo — *"não conseguiria rodar o gate para provar que a mudança funciona, e alterar sem medir um
gate de que 140 cenas dependem é pior que o problema conhecido"*. Isso estava certo enquanto a
máquina recusava captura. Quando ela abriu e a regressão aconteceu na minha frente, a prova ficou
possível e a decisão mudou. **A regra nunca foi "não mexer em gate"; é "não mexer sem medir" — e as
duas direções da medição, a que conserta e a que prova que nada mais quebrou.**

### REND-126 · O teto de espera de vídeo do `shot.mjs` era FIXO em 4 s — e numa cena de muitos 4K a máquina carregada vira "defeito da cena" no laudo (11/set/2026, `terremotos-america-do-sul/t-s063`, agente-raiz `scripts/shot.mjs`)

Antes de capturar, o `shot.mjs` espera todo `<video>` chegar a `readyState >= 2` — com um
`Promise.race` contra **4000 ms cravados**. Numa cena com SEIS clipes 4K no mesmo palco (um deles a
341 Mbps), sob load 32, esses 4 s não bastam. O que sai é:

```
⚠ t-s063   captura-falhou   215s
   shot.mjs falhou: ⚠️ MÍDIA NÃO CARREGOU (1) — ESTE FRAME ESTÁ INCOMPLETO
```

…e o `julgar-cenas` devolve a cena **sem laudo novo**, do mesmo jeito que devolveria se o arquivo
estivesse corrompido. Duas passadas seguidas caíram assim.

⛔ **Fui conferir se era arquivo ruim — e não era.** Os oito clipes da pasta, medidos um a um:
h264 · 3840×2160 · yuv420p · nenhum ProRes · nenhum truncado. O que falhou foi o Chrome não terminar
de decodificar dentro do teto.

✅ **O COMPORTAMENTO continua o mesmo, e ele é o certo:** o script se RECUSA a medir um frame
incompleto, que é o oposto do verde vazio. O que mudou é só poder ALARGAR o teto quando se sabe que
a cena é pesada — `SHOT_VIDEO_MS`, na mesma convenção que o `SHOT_MAPA_MS` deste arquivo já usava
duas dúzias de linhas acima. **Default idêntico ao anterior: nada muda para quem não define a
variável.**

Medido nas duas direções:

```
t-s133 (desenho, sem vídeo) · default 4000 ms  → ok   (cena leve não regrediu)
t-s063 (6× 4K, 341 Mbps)    · default 4000 ms  → ⚠ MÍDIA NÃO CARREGOU, 2 vezes
t-s063 (6× 4K, 341 Mbps)    · SHOT_VIDEO_MS=25000 → ok, e o frame mostra os painéis reais
```

⚠️ **É a TERCEIRA vez no mesmo dia que um teto de tempo cravado se disfarça de defeito de conteúdo**
— o `page.goto` dos gates ([REND-125]), o `QC_TIMEOUT_MS` por gate do `qc-cena`, e agora a espera de
vídeo do `shot`. **O padrão é sempre o mesmo: o número foi calibrado numa máquina vazia, e a
mensagem de erro fala do ARTEFATO em vez de falar do RELÓGIO.** Antes de tratar `captura-falhou`,
`NÃO MEDIDO` ou `regrediu` como trabalho malfeito, pergunte quanto tempo o gate teve e quanto a
máquina estava fazendo.
---

### REND-127 · A sonda de conferência NÃO é o caminho de produção — a legenda que some no master sai perfeita em toda medição feita por fora (15/set/2026, `predios` P4 vertical, agente-raiz: o executor de render dos pedaços, `executor-p4*.mjs` / `tools/pack`)

> ⛔ **Leia a [REND-128] ANTES desta.** O conserto que esta lei descreve foi «provado» por uma
> medição que não podia falhar — o texto novo queimado POR CIMA do texto velho, e a caixa medida
> sobre a união dos dois. A Holding pediu que esse aviso ficasse no topo justamente aqui, porque
> é o erro que mais se repete nesta casa em roupas diferentes, e porque quem vier consertar
> legenda vai chegar por esta lei primeiro.

O master da Parte 4 tinha **205 quadros com cue ativo e sem glifo, de 3.364 quadros com legenda** —
e não eram pontinhos espalhados: eram **faixas contíguas** (s59 nos quadros 1458–1553 e s60 nos
2067–2135), **~3,8 s seguidos sem legenda dentro de uma cena**. O re-render anterior da mesma parte
tinha 181. A Parte 2, que já está no ar, tem **0**.

⛔ **O que essa noite custou, e é a lei: TODO caminho que a casa tinha para CONFERIR a legenda
mostrava a legenda certa.** O `sonda-legenda.mjs`, o `executor --sonda` pedindo exatamente os
quadros acusados, e o `executor --sonda` sequencial de 0 a 70 — nos três, **a legenda nunca sai
vazia**. No modo `--render`, o mesmo executor, no mesmo HTML, com os mesmos dados, a legenda some
**nos mesmos quadros, de forma reprodutível**.

**Não reproduzir num caminho diferente do de produção não é evidência de nada.** A sonda compartilha
o Chrome, o HTML e o CSS com a produção — e é justamente por parecer o mesmo caminho que ela engana:
o que ela NÃO compartilha é o laço que produz o artefato entregue. Uma verificação que não passa pela
porta por onde o defeito entra é um verde por ausência, e ele é indistinguível de um conserto.

⚰️ **Fica REVOGADO o diagnóstico anterior de «corrida de pintura»** (a hipótese de que a máquina
carregada não terminava de pintar o texto antes do `screenshot`). Ela foi derrubada por medição, não
por argumento: a **s59 sozinha, com a máquina livre, devolveu os MESMOS 91 quadros mudos**. O defeito
é determinístico e independente de carga, de relógio, dos dados e da fonte — três coisas que a
hipótese da corrida exigia que variassem.

✅ **A régua de aceitação, dada pela Holding e que vale para toda legenda queimada:**
**zero quadro com cue ativo e sem glifo, medido com a MESMA ferramenta e o MESMO limiar que achou os
205, e medido no MASTER — nunca numa sonda.** O detector é
`crop=360:90:900:2380,signalstats,YMAX` com limiar 95 (separa o glifo — branco 255, laranja da marca
com luma 122 — da tarja navy vazia, que fica entre 16 e 35).

**O conserto que passou nessa régua não foi «esperar mais»: foi tirar o glifo do Chrome.** A tarja
continua sendo desenhada pelo DOM (canto arredondado, largura calculada do cue) e **só o texto passa
a ser queimado por libass no encode de cada pedaço** — no pedaço, e não na montagem, que é
`-c:v copy` e pagaria uma geração de H.264 a mais. Conferido contra um quadro bom: Δ topo 0 px,
Δ base +2 px, Δ centro horizontal 0 px.

⚠️ **A regra transportável, para qualquer ofício desta casa:** quando o artefato entregue tem um
defeito que a ferramenta de conferência não enxerga, **a primeira suspeita é a ferramenta, não o
artefato** — e o conserto é instrumentar o caminho de produção, nunca insistir na sonda. Medir o que
sai é a única medição que responde à pergunta que o dono faz.

---

### REND-128 · A prova que eu montei não podia falhar — e por isso não provava nada (15/set/2026, `predios` P4 vertical, agente-raiz: eu, ao desenhar a verificação do conserto da [REND-127])

O conserto proposto foi queimar o glifo com libass por cima da tarja do DOM. Para provar que o texto
queimado caía no mesmo lugar do texto do Chrome, medi a **caixa dos pixels claros** na calha da
legenda, num arquivo onde a legenda queimada tinha sido sobreposta ao master — **que já tinha o texto
do Chrome**. Deu Δ topo 0 px, Δ base +2 px, Δ centro 0 px, e eu declarei em voz alta que o conserto
casava.

⛔ **Aquele número era a UNIÃO dos dois textos.** Uma união idêntica não distingue «os dois são
iguais» de «o queimado cabe inteiro dentro do original» — e era o segundo caso: o texto queimado
tinha **914 px de largura contra 1125 do original**, porque o `.ass` pedia a fonte pelo *fullname*
da face (`NeueHaasDisplay-Mediu`) em vez da família, e o fontconfig devolvia **DejaVu Sans**. Pedir
a família («Neue Haas Grotesk Display Pro») devolve a **Light**. E um alias de fontconfig que faz o
`fc-match` acertar a Medium **não muda o desenho**: thin, light, demibold e black renderizaram
exatamente os mesmos 914×101 px — o libass não estava usando aquela seleção.

✅ **A medição que presta compara o ALVO contra a REFERÊNCIA em arquivos separados, e traz controle.**
Diferença média da calha da legenda entre o master novo e o aprovado, em quadros que o Chrome pintou
bem: **43,8** (42 mil pixels de 210 mil acima do limiar). Os dois controles que dão sentido ao
número: pedaço copiado byte a byte → **0,000**; a mesma faixa **fora** da legenda, no mesmo pedaço
re-renderizado → **0,6 a 0,95**. Sem esses dois, 43,8 não quer dizer nada; com eles, quer dizer tudo.

⚠️ **A régua, e ela vale para qualquer verificação:** antes de rodar a prova, pergunte **o que ela
mostraria se o conserto estivesse errado**. Se a resposta for «o mesmo número», não é prova — é
cerimônia. Sobrepor o novo ao velho e medir o conjunto é o caso mais fácil de cair, porque parece
mais rigoroso que comparar dois arquivos, e é o único que não pode reprovar.

---

### REND-129 · `will-change` promove camada, a camada não é rasterizada, e o que some é o TEXTO — o retângulo sai, o glifo não (15/set/2026, `predios` P4 vertical s59 e s60, agente-raiz `render/capturar.mjs` e os gêmeos `capturar-alpha` / `capturar-isolado`)

A legenda da Parte 4 sumia em faixas contínuas de segundos, sempre nos mesmos quadros, só em duas
das treze cenas. A tarja — um retângulo sólido — era desenhada; o texto dentro dela, não.

**A causa é a promoção de camada.** As duas cenas pedem camada própria com `will-change` sobre mídia
de 3840 px **com `filter`**: a s59 em 5 elementos, a s60 em 12. Neutralizar a promoção antes de
capturar matou o defeito: **91 → 0 na s59, 114 → 0 na s60, os 205 → 0**, nos dois sentidos.

⚠️ **Mas NÃO há preditor estrutural, e a primeira versão desta lei dizia que havia.** Com dois pontos
parecia haver correlação com a contagem de camadas promovidas. Medindo as TREZE cenas da parte, cai:

```
  cena                  will-change   promovidas   quadros sem glifo
  s01 abre-no-burj           5             5             0     ← tantas quanto a s59
  s62 660-metros             6             5             0     ← MAIS que a s59
  s59 subir-por-etapas       5             3            91  →  0
  s60 kone-fita             13             9           114  →  0
  as outras nove           0–4           0–3             0
```

**A s01 tem tantas camadas promovidas quanto a s59 e está limpa.** Olhando um HTML, ninguém sabe
dizer se aquela cena vai quebrar. O que está provado é o CAMINHO CAUSAL — tirar a promoção mata o
defeito —, não um critério para achar as próximas. *Correlação tirada de dois pontos não é
correlação; é a reta que passa por quaisquer dois pontos.*

⚠️ E duas caracterizações caíram junto: **a legenda NÃO está promovida** (o `overlay-r2.css` não tem
um único `will-change` — a vítima é uma camada não promovida) e **os elementos promovidos da s59 SE
MOVEM**, o `__renderAt` toca em todos. Qualquer peneira do tipo «promoção em elemento estático»
excluiria justamente os dois únicos positivos conhecidos.

⛔ **Consequência prática, e ela custa dinheiro:** um censo estrutural que conte `will-change` +
`filter` + texto **não responde** «este lote de cenas está livre?». Um zero desse censo é prova de
que aquele critério não achou nada, não de segurança. Diante de um lote a renderizar, **ligar o
conserto é mais barato que provar que o lote está livre** — ele não custa render e melhora 1,1% a
nitidez, enquanto provar exigiria renderizar cada cena nas duas versões.

`will-change` **não muda aparência: é DICA de composição.** Diz ao Chrome «prepare uma camada
própria, que eu vou animar isto». Numa página interativa troca pintura por memória e vale a pena;
**numa captura determinística quadro a quadro não há rolagem nem animação para otimizar** — a dica só
cobra a memória, e quando a conta aperta o que deixa de ser rasterizado é o texto.

⚰️ **Duas explicações foram REVOGADAS por medição, não por argumento:**
1. **Corrida de pintura.** O executor já esperava duas batidas reais de `requestAnimationFrame` antes
   do `screenshot`, e os 205 continuavam. A mesma cena sozinha, com a máquina livre, devolveu os
   **mesmos 91 quadros**.
2. **Queimar o texto por fora com libass.** Resolve os quadros mudos e **troca a tipografia**: o
   `.ass` pede a fonte pelo *fullname* da face e o fontconfig devolve DejaVu; pedir a família devolve
   a Light; e um alias que faz o `fc-match` acertar a Medium **não muda o desenho** — thin, light,
   demibold e black renderizaram os mesmos 914×101 px contra 1125×116 do original. Ver [REND-128].

✅ **O conserto mora no CAPTURADOR, não na arte** — `*,*::before,*::after{will-change:auto}` injetado
antes de renderizar. Nos três capturadores, não em um só: conserto aplicado num gêmeo e não no outro
é pior que conserto ausente, porque a doutrina passa a jurar que o defeito morreu.

**O que custa, medido nos dois lados:**

```
  tempo do mesmo trabalho        141 s  →  138 s      (não custa render)
  cena FORA da legenda, s59      média 0,856 · máx 1,93 · nenhum quadro acima do ruído
  cena FORA da legenda, s60      média 1,896 · máx 16,37 · 228 de 450 quadros acima
  nitidez na região que mudou    3,867  →  3,909       (+1,1%, mais borda em 282 de 455 quadros)
```

⚠️ **A s60 MUDA de aparência, e é preciso dizer isso em voz alta** em vez de repetir que a dica «não
muda nada»: sem camada promovida o elemento é rasterizado no tamanho final a cada quadro, em vez de
escalado a partir do bitmap da camada. A diferença mora nos 60% de baixo do quadro e vai no sentido
de **mais nítido**. Quem entregar uma parte consertada por aqui avisa o QC de visão, senão a mudança
vira achado novo na mesa dele.

⚠️ **O defeito ACUMULA com os quadros já capturados na sessão** — a mesma janela renderizada a partir
do quadro 57 devolveu **27** quadros mudos onde a cena inteira devolve 91. Consequência prática, e
ela morde qualquer um que for conferir: **sonda curta subestima**. Para procurar este defeito num
clipe, rode o detector no clipe INTEIRO.

⚠️ **Mesma família do caso de 30/jul de 2026** (os «pedaços faltando» por rasterização parcial,
documentado em `render/capturar.mjs`): o Chrome decidindo não redesenhar região de cena 4K, com o
defeito MIGRANDO a cada tentativa de esperar mais. Lá a cura foi desligar a rasterização parcial;
aqui é não deixar a cena pedir camada que não precisa. **A linhagem de conserto é a que esta casa já
escolheu.**

#### A lente que media o máximo era cega ao parcial — e o gate novo mede PRESENÇA

⛔ A auditoria de legenda media o **brilho máximo** de uma janela dentro da tarja. **Um único pedaço
de texto desenhado já a satisfaz.** Comparando a calha quadro a quadro contra um master bom — com os
11 pedaços copiados byte a byte dando **0,000 exato**, controle embutido — o master aprovado tinha:

```
  quadros com a legenda defeituosa, medidos por comparação   364
  quadros que a lente do brilho máximo via                   205
  quadros SEM legenda nenhuma (nem tarja) que ela APROVOU       6
```

Os 6 passaram porque, sem tarja, a **cena clara por trás** entregava o brilho. *Lente que mede o
máximo é cega ao parcial, e lente que mede brilho é cega à ausência sobre fundo claro.*

⛔ **E a janela também não se herda de uma parte para outra.** Rodar na Parte 5 o detector
calibrado para a Parte 4 devolveu **1.066 quadros mudos, e nenhum era real**: a legenda da P5 vive
em **y≈3060 — 80% da altura, dentro da faixa que a interface do Reels cobre** —, e a janela da P4
lia a CENA. O que denunciou foi um sinal de uma linha: **o brilho médio DENTRO das deixas ficou
ABAIXO do de fora delas** (134,1 contra 159,2), quando numa parte sã ele fica muito acima (229,6
contra 122,0). Onde a legenda está, esses dois números são muito diferentes; onde ela não está,
são a mesma coisa. **Sem essa checagem o gate ficaria calado justamente na parte cuja legenda está
no lugar errado — que é o defeito mais caro dos dois, porque a rede cobre o texto e o master
parece perfeito.**

✅ O gate vigente é `achadosDaLegenda` em `scripts/verticais/qc-master.mjs`: mede a **fração** de
pixel de glifo e a de pixel de chapa dentro da caixa que a régua da marca declara, e reprova em três
formas — sem glifo, **sem chapa**, e parcial (glifo muito abaixo do que o tamanho do texto da deixa
prevê). **Os pisos saem da mediana da PRÓPRIA parte**, nunca cravados: cada série tem seu corpo de
fonte e seu contraste, e limiar cravado numa parte é alarme falso na seguinte. Os testes têm o caso
que a lente velha aprovava, e os dois mutantes (lente cega à chapa, piso cravado) reprovam.

### REND-130 · A cena de 1 quadro: o recorte na fronteira do trecho come a cena, e o HTML certo não deixa nenhum QC de cena ver (16/set/2026, `predios` P6 vertical, agente-raiz `scripts/verticais/relogio.mjs` · `mapearCenas`)

O master da **P6 r3** de Prédios tinha a cena `s92-card-4-o-teto-de-verdade` com **1 quadro**: entrava
no 278 da parte e saía no 279. O quadro que sobrou **nem desenhava o card** — mostrava o fim da cena
anterior. O QC independente extraiu os quadros 274–284 e o card não aparecia em nenhum. **Nenhum QC de
cena pegaria isso: o HTML estava certo.** Duração é propriedade da PEÇA, não da cena.

⛔ **O mecanismo é o recorte, e ele é silencioso por construção.** `mapearCenas` recorta cada cena do
espelho na fronteira do trecho (`a = max(s.q0, t.fonteInicioQuadro)`, `b = min(s.q1, t.fonteFimQuadro)`)
e grava `cenaQuadros: b − a` sem piso. Uma cena de 90 quadros que atravessa um corte interno logo depois
do primeiro quadro vira um pedaço de 1. O contrato do relógio aceitava `cenaQuadros: minimum 1`, e o
QC de master da frota (`qc-master-executor.mjs`, `lerPlano`) só exigia fim > início. **Três lugares
olhavam o segmento, e os três o davam por válido.**

✅ **O gate mora em dois níveis, porque eles pegam coisas diferentes:**
1. **No plano, antes do render** — `auditarDuracaoCenas` em `relogio.mjs`, chamado logo depois de
   `mapearCenas` e antes de cortar voz e trilha: pedaço abaixo de **`DURACAO_MINIMA_CENA_QUADROS` (15
   quadros, 0,5 s)** para a estação e diz se foi **recorte de fronteira** ou **cena que já nasce curta**
   (o conserto é diferente em cada caso). O laudo vai no relógio (`duracaoMinima`).
2. **Na peça montada** — `plan.min_scene_frames` no QC de master: medido SEMPRE, e reprovado quando a
   política pede (`{ metric: "plan.min_scene_frames", op: "gte", expected: 15 }`). Pega o master que vem
   de fora do motor da casa, que é exatamente como a P6 chegou. ⚠️ **A política é do chamador**
   (`request.quality_policy`): sem o critério, a métrica aparece no manifesto e não reprova.

📏 **O limiar é medido — e o primeiro número que escrevi estava num universo pequeno demais.** Eu tinha
medido 2 séries (menor cena legítima 87 q). O **censo de 16/set/2026** rodou este gate, a partir do commit
do PR, sobre os planos vivos da esteira: **11 séries, 70 partes**, com os 64 relógios já gravados
conferindo com o recálculo. Achou **6 partes com pedaço degenerado** — 1, 1, 1, 2, 3 e 3 quadros
(petróleo p3/p11, viagem-no-tempo p1/p3/p5, orcas p6), um deles um **card de 2 quadros**, o mesmo defeito
da s92 —, e o menor pedaço que passa tem **28 quadros** (ucrania p1), depois 36 (nilo p2). 15 fica 5×
acima do maior degenerado e 1,9× abaixo do menor que passa. ⚠️ **Os 28 e 36 não foram julgados por
visão**: são os menores que passam, não «os menores legítimos». Se uma série precisar de pedaço menor, a
saída é a rampa, não baixar o número.

⚠️ **O gate morde relógio NOVO ou REFEITO.** A estação V2 do condutor (`relogio.conferir`) dá por pronta a
parte que já tem `parte-N.json` com voz e legenda, sem olhar `duracaoMinima`: as 6 partes do censo passam
pela retomada e só param quando o relógio delas for refeito. **Os pedaços degenerados delas já estão nas
peças** — o gate impede o próximo, não conserta o que já foi montado.

🛟 **A rampa é dado, não flag:** `plano.partes[].cenasCurtasAceitas = [{ cena, motivo }]`. Declarado
com motivo, passa e fica registrado; **sem motivo, reprova** (aceitar sem dizer por quê não é decisão);
declarado e não usado, é apontado. Flag de linha de comando não serviria: o condutor não a repassa, e a
parte reprovaria de novo na rodada seguinte.

⚠️ **E a decisão editorial não é do gate.** Na P6 o card NÃO voltou: a série anuncia o tema na primeira
cena de cada parte (P5 s70, P7 s113, **P6 s91 «Quando subir deixa de valer?»**), e nenhuma irmã tem
cartela numerada. Se o pedaço for resíduo aceito, ele entra na rampa com esse motivo — o gate só impede
que ele passe **calado**.

**Prova:** `scripts/testes/verticais-relogio-duracao-minima.test.mjs` (11 testes, com a geometria real
278→279 e o relógio rodado como CLI) e três casos em `qc-master-executor.test.mjs`. **Oito mutantes
morrem**, entre eles o que tira a chamada de `principal()` — sem ele a suíte ficaria verde com o gate
desligado.

---

## APÊNDICE [porte Regie] — as 38 leis REND que NÃO vieram

Motivo `infra`: a lei é sobre a operação do Top10 (máquinas, bucket, cascata de contas, fila e despacho 24/7), que não existe
num canal local. Motivo `apresentador`: só existe com apresentador filmado; este canal é faceless.
`termos` são os termos de infra que o contador achou no corpo; `como` diz se a decisão foi do contador ou da revisão.

| ID | motivo | como | termos | título no estúdio |
|---|---|---|---|---|
| REND-02 | infra | automático | mac, ssh, vm | ⚠️ Revista 31/jul/2026: "sempre Mac+Windows" era o parque DAQUELA época. A regra viva: paralelo |
| REND-10 | infra | automático | frota, spot, mac, vm, fila, vms | RENDER DE LOTE = FROTA SPOT VM É A 1ª OPÇÃO, SEMPRE (o Mateus cobrou com raiva, 18/jul: "por que a Spot VM |
| REND-12 | infra | automático | frota, spot, mac, vm, vms, bucket | FROTA SPOT MORRE = CAPACIDADE DO TIPO DE MÁQUINA NA ZONA, NÃO O STARTUP (o Mateus, 21/jul: "você TEM que |
| REND-14 | infra | automático | frota, spot, mac, vm, bucket, gcloud | FROTA V2 — VELOCIDADE + MÁXIMO DE NÓS EFICIENTE (o Mateus, 21/jul: "máximo de nós, mais EFICIENTE possível"; |
| REND-16 | infra | revisão | vm | TRANSCRIÇÃO PESADA (WhisperX) EXIGE GPU (L4), NUNCA e2/CPU — QUE TRAVA POR SWAP (compilado |
| REND-17 | infra | automático | vm, gcloud, estudio-top10, timer | ⚠️ VM COM GPU É SOB DEMANDA: LIGA → USA → DESLIGA NA MESMA SESSÃO. NUNCA fica ligada ociosa |
| REND-18 | infra | automático | vm, mac, frota, spot, gcp, vms | ⚠️ PARCIALMENTE SUPERADA PELA [REND-25] — o ponto *"o lote 4K vai para a L4"* caiu por |
| REND-19 | infra | automático | vm, lease, frota, despach, pool, mac | VM SOB DEMANDA TEM DONO E LEASE EXPLÍCITOS — `finally` sozinho não impede duas sessões de |
| REND-20 | infra | automático | 24/7, vm, bucket, driver | SEM VAGA DE L4 NA ZONA FIXA = CAÇAR EM OUTRA ZONA US, NÃO DEIXAR 24/7 NEM PARAR (Mateus perguntou |
| REND-21 | infra | automático | bucket, pool, fila, mac, esteira | RESGATE O LOG ANTES DE ENCERRAR A MÁQUINA. Em falha, log, inventário e marcador do lote |
| REND-22 | infra | automático | vm, gcs, rsync | VM DE RENDER SEM IP EXTERNO RENDERIZA TUDO — MENOS O QUE PRECISA DA INTERNET, E ESSE TRAVA SEM |
| REND-23 | infra | automático | vm, gcp | LOCK DE VM SE MEDE POR VIDA, NUNCA SÓ POR IDADE — TTL SOZINHO PRODUZ O FALSO-OCUPADO (24/jul, |
| REND-24 | infra | automático | vm, vigia, timer, bucket, gcp | A REDE DE SEGURANÇA DA GPU TEM DE SER EXTERNA A QUEM ELA PROTEGE — `finally` NÃO SALVA DE |
| REND-25 | infra | automático | mac, vm, frota, spot, gcp, headless | ⚠️ Esta lei generalizou de UMA máquina (a L4 de 4 vCPUs, morta). O método certo de decidir onde |
| REND-33 | infra | automático | macos, vm | O LOCK DE RENDER É DE SLOTS, NÃO BINÁRIO — E MEDIA A IDADE COM SINTAXE DE macOS, ENTÃO NUNCA |
| REND-36 | infra | automático | rsync, bucket, gcloud | `rsync` DO BUCKET SOBRESCREVE O RENDER LOCAL MAIS NOVO — E O TIMEOUT DEIXA LIXO `.gstmp` |
| REND-46 | infra | automático | vm, mac, vms, headless, driver, estudio-top10 | ⚠️ A REND-25 GENERALIZOU DE UMA MÁQUINA SÓ, E EU REPETI O ERRO. "A NUVEM PERDE" NUNCA FOI |
| REND-103 | infra | automático | bucket, mac, vm, rsync, gcloud, macos | Antes de dividir render entre máquinas, compare o TAMANHO do insumo dos dois lados |
| REND-54 | infra | automático | vm, bucket, mac, despach, timer, fila | A VM produz, o BUCKET guarda — vídeo finalizado devolve o disco sozinho (03/ago/2026) |
| REND-55 | infra | automático | estação, headless, fila, despach | Nome de projeto não identifica processo, e artefato não diz que o VÍDEO acabou (03/ago/2026) |
| REND-57 | infra | automático | fila, vm, vigia, pool, ssh | `RENDER_SLOTS` é botão da MÁQUINA — fixá-lo por processo trava o render (03/ago/2026) |
| REND-58 | infra | automático | vigia, vm, fila, journalctl | O vigia de shard matava quem só esperava a vez — CPU é a prova de vida (03/ago/2026) |
| REND-66 | infra | automático | vm, estudio-top10, fila, estação, estações, 24/7 | O teto de 1800 s é um relógio CEGO calibrado em máquina vazia — sob contenção ele mata render SADIO e o sintoma se disfarça de defeito |
| REND-68 | infra | automático | vigia, vm, estudio-top10 | O vigia de shard mata durante o WARM-UP, quando matar custa TUDO — cena pesada não é cena travada |
| REND-71 | infra | automático | fila, vm, estudio-top10, estação, despach, estações | Render pode chegar com a ARTE ainda de pé — cruze a fila de conserto antes de gastar (03/ago/2026) |
| REND-73 | infra | automático | bucket, vm, estudio-top10, gs://, gcloud, rsync | Clipe que sumiu do disco pode estar VIVO no bucket — procure antes de gastar horas refazendo (03/ago/2026) |
| REND-78 | infra | automático | vm, estudio-top10, mac, cota, estação | `normalizar-footage.mjs` está INOPERANTE no ffmpeg 4.4.2 da VM — e a falha se disfarça de rigor. |
| REND-86 | infra | automático | vm, painel, mac | O portão de render não convive com sessão de agente — e a conta prova (07/ago/2026) |
| REND-90 | infra | automático | mac, bucket, gs://, vms, gcp, vm | A conta do render inclui o preço de trazer o insumo — e é ele que tira o Mac da jogada (08/ago/2026) |
| REND-94 | infra | automático | estação, fila, vm | Gate que NÃO TERMINA não tem régua — e o teto que escala com a carga faz a máquina OCIOSA ser o pior caso (09/ago/2026) |
| REND-95 | infra | automático | mac, vm, fila, cota | "Render é luz" morreu quando o render saiu do Mac — hoje é VM por hora, e é fila (09/ago/2026) |
| REND-96 | infra | automático | mac, vm, cascata, scp, timer | A `estudio-render` não é repositório git — e estava com 9 de 12 peças velhas (09/ago/2026) |
| REND-108 | infra | automático | headless, estudio-top10, vm, estação, fila, despach | A máquina de render recebe pacote FECHADO — o carimbo de verificação viaja com ele, ou a verificação é paga duas vezes |
| REND-109 | infra | automático | estudio-top10, pool, vm, vms, despach | Máquina emprestada de outro ofício não tem as peças do seu — e a falta aparece como "FALHOU", sem dizer o quê |
| REND-112 | infra | automático | vm, despach, bucket, timer, estudio-top10, vms | Doutrina instalada em UMA máquina protege UMA máquina — e o resto descobre sozinho (12/ago/2026) |
| REND-113 | infra | automático | estação, estudio-top10, bucket, rsync | enquanto uma estação ESCREVE nos artefatos, nenhuma outra máquina os consome — não é sincronizar antes, é esperar terminar (13/ago/2026) |
| REND-115 | infra | automático | bucket, fila, vm, estudio-top10, 24/7, esteira | falha colhida com a máquina SATURADA não descreve a cena — e virou uma terceira rota de render em três horas (13/ago/2026) |
| REND-124 | infra | automático | estação, bucket, gcloud | O DESEMPATE POR MTIME NÃO É NEUTRO DEPOIS DE UM DOWNLOAD — ELE APROVA SEMPRE (14/ago/2026, estação RENDER do `energia-escura`) |
