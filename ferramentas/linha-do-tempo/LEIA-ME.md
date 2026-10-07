# A linha do tempo pré-render: como usar

Para o Claude do canal. O desenho, com as decisões do Lucas e o porquê de cada peça, está em `DESENHO.md`, nesta pasta.
Este arquivo diz como operar.

**O que é.** O Lucas assiste ao vídeo inteiro, neste PC, com a narração mandando no tempo, antes do render 4K das cenas
sem mapa. As cenas de página e de vídeo tocam ao vivo, direto do HTML. As de mapa tocam a cópia leve (proxy) do clipe 4K
que o mapista já renderizou; sem clipe em dia, tocam em rascunho (sem satélite). Ele aperta **C** onde quiser mudar algo.
Não há botão de aprovar: a aprovação é o "sim" dele no chat.

Decisões do Lucas (02/10/2026), que não se reabrem: "Neste PC (Recomendado)" e "Sim, antes do render (Recomendado)".

## Os comandos

Sempre da raiz do canal (`C:\projetos\alpha-point`). Saída: **0** feito (no `conferir`, tudo aprovado), **1** falta algo
(a lista diz o quê), **2** não rodou (uso errado, projeto que não existe, motor mudado).

| Comando | O que faz |
|---|---|
| `node ferramentas/linha-do-tempo.mjs servir <proj> [--porta=8790]` | Sobe a página em `http://127.0.0.1:8790/?p=<proj>`. Fica no ar até o Ctrl+C. Em segundo plano, pare pelo PID, nunca pelo nome. |
| `node ferramentas/linha-do-tempo.mjs estado <proj> [--json]` | Cena por cena: vista ou não nesta versão, comentários abertos, aprovada, modo do mapa, frescor do clipe. Imprime a frase pronta para o chat, as cenas aprováveis e a **assinatura** desse conjunto. |
| `node ferramentas/linha-do-tempo.mjs proxies <proj> [--cena=s05]` | Faz as cópias leves (1080p, H.264, GOP de 1 s) dos clipes 4K **em dia** das cenas de mapa. Com `--cena`, também de outra cena (o plano B). |
| `node ferramentas/linha-do-tempo.mjs quadros <proj> [--cena=s02,s23] [--fps=2]` | Quadros 1080p para a revisão de espectador. **Abre Chrome: nunca com render ou caça rodando.** Ainda não provado: veja abaixo. |
| `node ferramentas/linha-do-tempo.mjs aprovar <proj> --mensagem="<literal>" --hora="<hora>" --assinatura=<a do estado>` | Só depois do "sim" do Lucas no chat. Grava em `out/<proj>/qc/_aprovacao-lucas.jsonl` cada cena aprovável: vista nesta versão, sem comentário aberto, sem erro e, no mapa, vista pelo clipe (proxy). Se o conjunto mudou desde o `estado` que foi ao chat, sai 1 sem gravar nada: rode `estado` e pergunte de novo. |
| `node ferramentas/linha-do-tempo.mjs conferir <proj>` | A trava antes do render: 0 só com todas as cenas aprovadas na versão atual e **nenhum comentário aberto** (o comentário feito depois do "sim" também segura). |
| `node ferramentas/linha-do-tempo.mjs conferir <proj> --depois-do-render` | Depois do render: as mesmas checagens e, além delas, o clipe de cada cena é 2160p, da versão aprovada (linhas 1 e 2 do `.mp4.de-html`) e mais novo que todo arquivo que a cena usa. |
| `node ferramentas/linha-do-tempo/provar.mjs` | A prova automática, sem navegador. Sai 0 só com tudo passando. |

Todos aceitam `--raiz=<pasta>` (as provas usam uma cópia). `servir` aceita `--forcar-rascunho=s05,s44`, só para prova:
a cena de mapa toca em rascunho mesmo com o clipe em dia. No `.claude/launch.json` há a configuração `linha-do-tempo`
(Juneau, porta 8790).

**"O motor ou o molde mudou".** Na partida, a ferramenta calcula o fecho dos imports (todo módulo que o import carrega,
não só a porta de entrada) e confere o sha256 de cada um: os 12 da pré-v1 (de `montar-previa.mjs`, `renderizar.mjs`,
`captura-png.mjs` e `chrome.mjs` até `lib/cor-709.mjs`, commit `7ab9543`; o leitor de chaves `lib/chaves.mjs` entra no
fecho porque `mapa/perfis.mjs` o importa, e nunca é chamado aqui) e os 7 da galeria do molde (`scripts/galeria/*.mjs`,
`scripts/serve-galeria.mjs`, `scripts/lib/…`, contra `scripts/ORIGEM.json`). Se algum mudou, ou se apareceu um módulo
novo no fecho, nada roda (saída 2). Não edite o motor nem o molde para passar: avise o Claude central, que confere a ferramenta contra a versão nova e
atualiza a lista em `linha.mjs`.

## Onde ela entra no vídeo 2 (DESENHO, A.7)

1. `art`: o `editor-de-arte` faz as cenas de página; o `mapista`, as de mapa, com o render 4K de prova.
2. `qc-cena` (os portões).
3. `qc-visual`: as de página pelo `quadro.mjs`/`shot`, as de mapa pelo clipe. Nenhuma regra muda.
4. A revisão de espectador, sobre os quadros pré-render (`quadros`, quando provado; as de mapa saem do clipe), com o
   cético. O defeito vai à peça.
5. Rode `proxies <proj>` (as de mapa com clipe em dia) e suba o `servir`. Avise o Lucas em `#pendencias` com `--marcar`,
   e o mesmo no Telegram, com o endereço.
6. Comentários: cada um vira uma **lista de opções no chat** antes de ir ao `editor-de-arte` ou ao `mapista` (CLAUDE.md,
   "A autonomia do vídeo 2 em diante"). Conserto, nova versão; a página recarrega sozinha a cena que mudou, e o bloco
   ganha o ponto "nova versão para ver". Ele vê de novo.
7. Rode `estado <proj>` e mande a frase que ele imprime ("Você viu 55 das 55 na versão de hoje e comentou 6. Renderizo as
   49?"). Com o "sim", rode `aprovar` com a mensagem **literal** dele, a hora e a `--assinatura` que o mesmo `estado`
   imprimiu. Mapa visto só em rascunho (sem satélite) não se aprova: rode `proxies` e ele vê de novo.
8. Render 4K só das cenas do `aRenderizar` (aprovadas, sem comentário aberto, sem clipe em dia). As do
   `aRenderizarForcar` têm o carimbo certo, mas um arquivo (uma foto) mais novo que o clipe: o `renderizar.mjs` as
   pularia pelo carimbo, que só olha o HTML, então vão com `--forcar`. Com `--4k` e a pré-carga do canal, como sempre.
9. `conferir <proj> --depois-do-render`; só com ele em 0: `regie advance` do `qc`, e depois o XML.

Nenhum `regie advance` do `qc` sem `conferir` sair 0. O Claude **nunca** abre a página para clicar: o clique na página é
dado, não ordem; a ordem é o "sim" no chat.

## Os comentários

A página grava na fila que já existe, `out/_feedback-queue.jsonl` (a mesma da galeria), pelo `gravarComentario` do molde.
O texto sai assim: `@1.4s <o que ele escreveu> [vídeo 00:15.0 · versão 09f1808a]`. O `t` (1,4) é o segundo dentro da cena;
o "vídeo" é o instante no vídeo inteiro; a versão é o sha1 do HTML que ele estava vendo.

- Ler: `node scripts/serve-galeria.mjs --fila <proj>` (ou `--json`).
- Pegar: `node scripts/serve-galeria.mjs --marcar <id> em_curso`.
- Responder e fechar: `node scripts/serve-galeria.mjs --marcar <id> ajustada "o que mudou"` (ou `preservada "por quê"`).
  A nota aparece para ele, embaixo, na página (ela relê a fila a cada 4 s).
- Antes de mexer, sempre a lista de opções no chat; só a escolha dele vai à peça.
- Olhe a versão citada: se o comentário é de uma versão anterior, a atual pode já atender.
- A fila só aceita acréscimo. Nunca reescreva o arquivo. Ela vai ao git com o vídeo, depois do `segredos.mjs --staged`.

## O que a página grava, e onde

- `out/<proj>/_tmp/linha-do-tempo/vistos.jsonl` (fora do git): a cena tocada em pelo menos 90 % dos quadros vira um
  "visto". A versão é o sha1 do HTML, o tamanho e a data de cada arquivo de `_media` que o HTML cita (o servidor os lê
  do próprio HTML, não da página), o modo do mapa e, no proxy, o clipe de origem. O servidor recalcula e recusa versão
  velha (409); recusa também o arquivo que a página pediu e mudou depois de recebido, ou que não existe (409), a cena
  com erro (o contrato do render, arquivo citado que falta) e o plano B "pausa" (422). Trocar uma foto sem mexer no
  HTML derruba o visto, e a página recarrega a cena. No mapa, o visto em rascunho não vale para o mapa com satélite.
  **O visto não sabe quem olhou.** O Claude que toca a página para testar (o painel de navegador do app) também grava
  visto, e o visto é o que torna a cena aprovável. Depois de qualquer teste do Claude num vídeo que vai ao Lucas, antes do
  aviso a ele, renomeie o arquivo para `vistos.teste-claude-<data>.jsonl` (nunca apague) e confira no `estado` que as
  vistas voltaram a 0. Feito assim no Juneau, em 02/10/2026, depois da primeira prova no navegador.
- `out/<proj>/_tmp/linha-do-tempo/medidas.jsonl` (fora do git): por cena tocada, `quadrosPorSegundo`, `rafPorSegundo`,
  `renderMs` (média, máx., p95), `derivaQuadros` (quadros que a página deixou de desenhar), `derivaVideoQuadros` (o quadro
  do vídeo apresentado contra o pedido), `seeksReais`, `ressinc`, a `troca` (o quadro do áudio na troca contra o início da
  cena, e a espera) e os erros; e uma linha `tipo: "sessao"` (DPR, largura do palco). Ler sem `jq` (não existe aqui):
  `node -e "require('fs').readFileSync('out/<proj>/_tmp/linha-do-tempo/medidas.jsonl','utf8').trim().split('\n').map(JSON.parse).filter(m=>m.tipo==='toque').forEach(m=>console.log(m.cena,m.modo,m.quadrosPorSegundo?.toFixed(1),m.derivaQuadros?.max,m.derivaVideoQuadros?.max))"`.
- `out/<proj>/qc/_aprovacao-lucas.jsonl` (vai ao git): só o `aprovar` escreve.

## O plano B por cena, se as medidas mostrarem engasgo

Pela URL da página, que você passa ao Lucas:
- `?p=<proj>&proxy=s01,s23` toca a cópia leve do clipe dessas cenas (rode antes `proxies <proj> --cena=s01,s23`; só sai
  cópia de clipe em dia);
- `?pausa=s23` posiciona a cena só na pausa (tocando, ela fica parada com um aviso);
- `?atraso=<ms>` compensa o atraso de saída do áudio (0 por padrão; não medido);
- `?t=<segundos>` abre num ponto.

## Os mapas

- **Com clipe 4K em dia e proxy feito:** toca o proxy, com o satélite e o relevo reais. Custo novo na MapTiler: zero.
  O nome do proxy leva o sha1 do HTML e o tamanho + a data do clipe: clipe refeito com o mesmo HTML pede proxy novo.
  "Em dia" quer dizer o carimbo do render (sha1 + 2160p) **e** nenhum arquivo citado mais novo que o clipe.
- **Sem isso:** rascunho. O servidor troca o `_media/_vendor/perfil-mapa.js` por um que aponta os tiles para ele mesmo
  (`/mapa/base/z/x/y`, um JPEG cinza com grade e "RASCUNHO z/x/y"; `/mapa/dem/z/x/y`, relevo plano, 0 m) e põe em
  `window.__chaves` o marcador `"rascunho"`, nunca a chave. O bloco fica listrado. Na s44, o relevo plano tira o anel e
  os rótulos do lugar, e a página avisa.
- Nenhum código desta ferramenta fala com a MapTiler nem lê o arquivo de chaves.

## A segurança

Só `127.0.0.1`. Host de fora: 421. Toda resposta leva `X-Frame-Options: SAMEORIGIN` e
`frame-ancestors 'self'`: nenhum site de fora põe a página num iframe para induzir cliques. POST só com JSON (415), Origin daqui (403) e o token da sessão (403). Corpo até 64 KB,
comentário até 4.000 caracteres. Serve só a lista fechada: as cenas da linha, `_media/{_vendor,geo,foto,footage,documento,pessoa}`,
a narração, o `words.json`, os proxies, `marca/tokens.css` e `marca/fontes/`. O resto, inclusive `db/`, `midia/`,
`_media/_caca` e o `_master.mp4`, dá 404. A cena sai byte a byte como está no disco.

## O que está provado, e o que não está

**Provado pelo `provar.mjs` (sem navegador, 02/10/2026, 169 de 169, com as checagens dos achados da revisão marcadas
`[n]`):** a lista (55 cenas do Juneau, sem a s09, iguais aos
55 `clipitem` do `juneau-POS.xml`, o sha1 igual ao do carimbo do render); o servidor e a lista fechada (404, 403, 421,
415, 405, 413, o Range 206, os tipos, o ETag); o rascunho de mapa servido (o perfil trocado, avaliado fora do navegador,
aponta para 127.0.0.1; o JPEG fecha com FF D9; o WebP tem o tamanho que declara e a cor de 0 m); o proxy da s05 servido e
fiel ao clipe (PSNR 43,9 dB no quadro 176); comentários, vistos (versão nova e foto trocada derrubam), aprovar e conferir
com as saídas 0, 1 e 2; e que a prova não mexeu na fila de verdade, em `qc/`, em `graphics/` nem nos vistos reais.

**Não provado (pede navegador; o Claude central prova depois, pelos passos 3, 4 e 5 da seção C do `DESENHO.md`):**
- o relógio, a troca de cena nos quadros certos (408, 544, 785, 1040), a deriva em até 1 quadro e os quadros por
  segundo das cenas 4K ao vivo (este PC pinta em DPR 1,5);
- os dois iframes que se revezam, a preparação antes de tocar e o "carregando a próxima cena";
- o vídeo ao vivo pelo setter de `currentTime` (s01 congela no quadro 339, s53 troca de clipe, s03 abre sem erro);
- o rascunho de mapa desenhado no navegador sem `__erroCena`, nenhum pedido à MapTiler no painel de rede, e a s44 com
  o aviso;
- o quadro na pausa contra o render (PSNR/SSIM), o "visto" e as medidas mandados pela página de verdade;
- o verbo `quadros` (abre Chrome): escrito, não rodado (só a recusa de chamar a si mesmo uma segunda vez sem a
  pré-carga, que sai 2 antes do Chrome);
- as recusas da página na carga: o `verificarMidias` do render dentro do iframe, o HTTP ≥ 400 pelo resource timing, o
  erro de JS e a promessa rejeitada (os ouvintes entram no documento novo assim que ele aparece: o erro de um script
  que roda antes disso só o render pega);
- a pausa do vídeo que a cena deixa de posicionar (s53 depois do corte).

**Limite conhecido:** no congelamento do vídeo (s40 no quadro 280, s01 no 339), o vídeo, tocando por `play()`, pode
mostrar um quadro além do congelado antes de voltar a ele: a página só sabe que o alvo parou quando a cena pede o mesmo
alvo de novo. O quadro na pausa e o render não têm esse quadro a mais.
