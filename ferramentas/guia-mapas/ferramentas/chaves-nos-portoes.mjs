// ═════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// CÓPIA DO GUIA DE MAPAS — chaves-nos-portoes.mjs
// De onde veio: ferramentas/chaves-nos-portoes.mjs de um canal que usa a Régie (a pré-v1, commit 7ab9543 do motor, com o
// molde em scripts/ e o npm do molde: playwright-core e sharp). Lá, toda rodada de portões em vídeo com cena de mapa
// (perfil maptiler) roda com ela desde 03–04/10/2026, em três vídeos, e passou por três céticos.
// O que mudou nesta cópia:
//   - o motor sai só do REGIE_MOTOR (PERFIS_URL), sem caminho cravado; sem ele, a cena de mapa sai NÃO MEDIDO e o
//     `conferir` sai 2;
//   - os símbolos (regie-guia-mapas.*) e as variáveis de ambiente (REGIE_PORTOES_RODADA, REGIE_PORTOES_RAIZ) sem o
//     nome do canal. Esta cópia conversa só com a cópia do portao-mapa.mjs desta mesma pasta, nunca com a original;
//   - o fuso em duas constantes (FUSO e DESLOCAMENTO, perto de horaLocal), com o Brasil por padrão;
//   - os comentários sem caminho, vídeo nem lugar do canal de origem. A lógica é a mesma, linha por linha.
// O que ela pede (senão, NÃO MEDIDO ou SEM PROVA, nunca verde):
//   - morar em <canal>/ferramentas/, junto do portao-mapa.mjs e do cdp-sem-compressao.mjs desta pasta: o `conferir`
//     confere as pré-cargas pelo caminho relativo à raiz (ferramentas/…) e o sha256 do ferramentas/portao-mapa.mjs;
//   - o molde da pré-v1 7ab9543 em scripts/, sem edição (o sha256 do qc-video-avanca está cravado em VIDEO_AVANCA);
//   - o perfil `maptiler`: a contagem só olha pedidos a maptiler.com. Com outra base, toda cena de mapa sai NÃO MEDIDO
//     ("nenhum tile 2xx"). Para o perfil `aberto` ou `vetorial`, isto fica para o motor;
//   - a chave MAPTILER_KEY no arquivo de chaves da máquina, lida pelo src/lib/chaves.mjs do motor (nunca no HTML).
// O que se conferiu desta cópia (22/10/2026, sem pedir tile): a sintaxe; a carga como pré-carga, junto do
// cdp-sem-compressao; o `conferir`, sobre os registros reais de um vídeo do canal de origem, deu a mesma saída da
// original, linha por linha (só o nome do fuso no texto mudou); e, como pré-carga do portao-mapa desta pasta, as mesmas
// medidas da original em duas cenas SEM mapa.
// O que NÃO foi provado: nenhuma cena DE MAPA passou por esta cópia (pede tiles pagos). Faça a 1ª rodada numa cena só,
// rode o `conferir` e leia a saída antes de confiar. Só Windows foi medido; caminho com acento ou espaço, não.
// Cada rodada com ela PEDE TILES À MAPTILER (é o objetivo): anote o contador antes e depois.
//
// O texto abaixo desta caixa é o do canal de origem, com os caminhos, os nomes de vídeo e os nomes de lugar trocados
// por genéricos (<canal> = a pasta do seu canal; <motor> = a pasta da pré-v1 da Régie). Onde ele diz "o canal", leia
// "o canal de origem"; as datas e os "céticos" são a história de como a ferramenta foi provada lá.
// ═════════════════════════════════════════════════════════════════════════════════════════════════════════════════
// A chave da base de mapa no Chrome dos portões, do mesmo jeito que o render a dá à cena; e o NÃO MEDIDO quando o
// portão mede uma cena de mapa que não pintou.
//
// Uso (pré-carga; os portões, o molde e o motor não mudam):
//   Git Bash:    REGIE_MOTOR=<motor> node --import=file:///<canal>/ferramentas/chaves-nos-portoes.mjs scripts/qc-cena.mjs out/<proj> --conc=3
//   PowerShell:  $env:REGIE_MOTOR='<motor>'; node --import=file:///<canal>/ferramentas/chaves-nos-portoes.mjs scripts/qc-cena.mjs out/<proj> --conc=3
//   (no Windows, as URLs levam a letra do disco: file:///C:/caminho/do/canal/ferramentas/chaves-nos-portoes.mjs)
//   O mesmo --import=… vale na frente de qualquer portão avulso (shot, qc-video-avanca…) e do ferramentas/portao-mapa.mjs,
//   que mede o til e o rodapé de cena de mapa com o rAF vivo (o qc-rodape-contraste e o _audit-til do molde não medem).
//   O NODE_OPTIONS não se põe à mão: a pré-carga se acrescenta ao NODE_OPTIONS do PRÓPRIO processo, e os filhos que
//   ele dispara (os portões que o qc-cena roda com execFile, sem env) a herdam; a janela do terminal não muda. Se
//   alguém puser $env:NODE_OPTIONS numa janela do PowerShell, ele vale para todo node que rodar depois nela: tire com
//   Remove-Item Env:NODE_OPTIONS. Nunca no NODE_OPTIONS fixo da máquina. Com o `cdp-sem-compressao.mjs` junto: um
//   --import para cada.
//
// Depois de toda rodada de portões em vídeo com cena de mapa (é o que pega a pré-carga esquecida, que nada aqui
// dentro consegue pegar, porque aí este arquivo nem roda):
//   node ferramentas/chaves-nos-portoes.mjs conferir out/<proj> --desde="AAAA-MM-DD hh:mm:ss" [--so=s03,s05] [--rodada=<id>]   (hora local do começo, no FUSO do topo)
//   Em toda parte, só prova a linha cujo processo rodou com as pré-cargas do canal e nenhuma outra (o campo
//   `pre_cargas`: ferramentas/chaves-nos-portoes.mjs, e a ferramentas/cdp-sem-compressao.mjs se houver), e cujos tiles
//   2xx vieram de um servidor (≥ 1 com o endereço dele, e nenhum sem: o tile que um page.route respondeu não tem). A de
//   um gancho de prova (que responde ou segura a MapTiler aqui, ou dá a chave a uma cópia) é SEM PROVA, por um ou pelo
//   outro, e a linha de antes do 3º cético (04/10), que não grava os campos, também.
//   A. Por cena de mapa (só as do --so, se houver), a rodada do qc-cena desde --desde (a mais recente, ou a do
//      --rodada): que portão dela deixou linha no out/<proj>/_tmp/maptiler-portoes.jsonl com a chave, NÃO MEDIDO,
//      SEM PROVA ou FALTA. Só conta linha de processo que o qc-cena disparou (a `rodada` e a `raiz` da linha): a de um
//      portão rodado à mão, avulso, não cobre portão de rodada nenhuma. E a reprovação medida não se apaga: a saída 1
//      de um portão que mediu só esta cena, com este HTML, desde --desde, em qualquer rodada
//      (out/<proj>/_tmp/portoes-saidas.jsonl), continua na linha e no resumo, mesmo com um verde depois.
//   C. Os portões que rodam à parte em cena de mapa: o til e o rodapé do ferramentas/portao-mapa.mjs
//      (out/<proj>/_tmp/portao-mapa.jsonl) e, na cena que pode ter vídeo (<video> ou createElement("video") no HTML,
//      um teste largo de propósito, que casa até comentário), o qc-video-avanca, com o sha1 do HTML de hoje, desde
//      --desde (sem --desde, de qualquer hora).
//      - A linha do portao-mapa só prova com: a versão 5 no rodapé (a 4 não media o crédito declarado fora da faixa,
//        a letra por linha nem o crédito em flex ou grid) e a 3 em diante no til (o til não mudou desde a 3); no
//        rodapé, também: o `portao_sha256` da linha igual ao sha256 do ferramentas/portao-mapa.mjs de hoje (a linha
//        de outro código, mesmo dizendo versão 5, não prova), as fotos das três famílias (folhas, com_filhos,
//        por_linha) somando as da linha, a lista dos créditos declarados (não vazia, se o HTML declara um), todo
//        crédito declarado que apareceu com linha medida, e nenhum crédito declarado sem medida no verde, e a conta das
//        raízes de sombra fechadas e das molduras (a rodada 3 da versão 5), e a dos nós de texto sem caixa (a rodada 4);
//        e, desde a rodada 4 da versão 5, o verde "sem crédito de rodapé" em cena cujo HTML declara um crédito é SEM
//        PROVA (o crédito da MapTiler fica na tela o mapa inteiro: o verde sem crédito quer dizer que a medida não o
//        achou, como o recorte que o apagava no x01, x02 e x02c do cético da rodada 3); e, desde a rodada 5, o verde com
//        nó de texto com tinta e sem caixa de área positiva (`nos_sem_caixa` > 0) é SEM PROVA (a tinta dele existe e a
//        medida não sabe onde ela cai: o W a -10em do p4b1b do cético v5.1 caía sobre a linha medida e saía verde; o
//        portão da rodada 5 já põe o crédito em volta como NÃO MEDIDO, e esta é a rede); as pré-cargas
//        do canal; o mapa (mapa, mapa_no_fonte e
//        eh_mapa); o load da página (carregou); a pré-carga, a chave, ≥ 1 tile 2xx; sem erro (cena, MapLibre,
//        MapTiler, __aguardarMapa); o veredito da pré-carga sem NÃO MEDIDO, com tile de servidor e nenhum sem, com o
//        mapa e a chave na página e as fotos
//        que ela contou iguais às da medida (o rodapé tira uma por amostra com crédito; o til, nenhuma); as fotos e o
//        pior fechando com as amostras; os instantes do molde e, no mínimo, os do passo até o último deles; o passo
//        ≤ 0,5; o piso 3 (rodapé); a marca de hoje (hash_marca) e a régua do molde de hoje. Senão é SEM PROVA, e diz
//        por quê. Vale a reprovação (veredito 1) válida que houver: um verde depois não a desfaz. No rodapé, também a
//        reprovação de uma linha da versão 3 ou 4 do mesmo HTML, válida em tudo menos na versão: as famílias dela (as
//        folhas e o crédito com filhos) continuam na 5, com o mesmo achador e a mesma régua.
//      - O vídeo: a linha da pré-carga (com a chave, o mapa, tile 2xx, relida, sem NÃO MEDIDO) e a linha da saída do
//        MESMO processo (pid, processo e rodada), com o veredito que o qc-video-avanca imprimiu para a cena, lido pela
//        pré-carga (só com o arquivo do portão de sha256 5b258511…, o VIDEO_AVANCA). "✓" é medido, se a saída do
//        processo concorda (0, ou 1/2 que outra cena dele explica); "sem <video> na cena — nada a medir" é N/A, não
//        conta como problema e nunca se diz medido; "⛔ TODOS PARADOS" é reprovação; ERRO, a cena fora da saída, a
//        saída ausente e a saída de antes do 3º cético são NÃO MEDIDO.
//   B. Os carimbos do _portao.json: verde de cena de mapa (sem prova), carimbo vencido, portão sem linha da pré-carga
//      do canal na rodada do carimbo, e indefinido; o til-glifo indefinido fica coberto só pela linha do portao-mapa com o hash
//      e o hash_marca do carimbo, veredito 0 ou 1, e as mesmas provas de C. A rodada do carimbo é a que começou antes
//      do `em` dele e terminou perto dele (o registro do fim da rodada, que o processo de cima grava ao sair, em
//      portoes-saidas.jsonl); sem esse registro (rodada de antes de 04/10, ou morta por sinal), a janela antiga de
//      20 min antes do `em`.
//   NÃO MEDIDO, FALTA, SEM A CHAVE, SEM PROVA, carimbo vencido, sem carimbo, indefinido e verde sem prova contam como
//   problema: sai 0 só sem nenhum; senão, 2. Reprovação medida (veredito 1, `falhas` do carimbo, saída 1) não é
//   problema desta conta: ela se mostra, numa lista própria no fim, e quem a julga é o portão. Sem --desde, as partes
//   C e B (a A pede a rodada desde uma hora).
//
// Por quê (03/10/2026): os portões abrem a cena pelo playwright-core (scripts/lib/chrome.mjs › lancarChrome) e
// nunca põem window.__chaves. A base de mapa da pré-v1 (src/mapa/moldes/mapa-base.html, ~linha 179) para antes de
// criar o mapa ("a base 'maptiler' precisa da chave MAPTILER_KEY, que o render da Régie injeta na hora"), e o
// __renderAt fica o stub vazio: todo portão de cena de mapa mediu uma página parada
// (medido com uma sonda no canal de origem). O render dá a chave assim
// (<motor>/src/ferramentas/renderizar.mjs, no commit 7ab9543, linhas 28, 310, 441 e 606): chavesParaCena(out/<proj>)
// (src/mapa/perfis.mjs, a credencial do perfil que o preparar-cena gravou em _media/_vendor/perfil-mapa.json, lida
// pelo src/lib/chaves.mjs) e o script Object.defineProperty(window,"__chaves",…) antes de qualquer script da página.
// E o cético da 5b (03/10) mostrou que a chave sozinha não basta: o qc-rodape-contraste e o _audit-til trocam o
// requestAnimationFrame por um que não roda (addInitScript), e sem ele o MapLibre nunca pinta nem pede tile; o
// qc-rodape-contraste deu "✓ 12.12:1" na s03 medindo o fundo vazio. O segundo cético (03/10) mostrou a falha aberta
// DEPOIS do DOMContentLoaded: a MapTiler que recusa a chave (401/403), o limite do plano (429), o servidor fora do ar
// e o PC sem rede só aparecem quando o tile volta, e o shot da s03 saía 0 sobre a faixa vermelha de erro
// (medido no canal de origem). E o cético do portao-mapa (04/10) mostrou as falhas
// abertas que sobravam: a foto com tile ainda em curso, o reload, o setContent, o require() CommonJS, o contexto
// persistente e o navegador conectado, e o rAF trocado depois do DOMContentLoaded (consertados abaixo). E o 3º cético
// (04/10) mostrou que o `conferir` dizia "vídeo: medido com o mapa" do qc-video-avanca que saiu 2, que não deixou a
// saída, ou que disse "sem <video> na cena — nada a medir" (a s03 cria o <video> fora do documento); e que a linha
// verde de um gancho de prova (tiles cinza respondidos aqui) passava como prova. Daí a `saida_lida` e as `pre_cargas`.
//
// Como:
//   1. A chave. Um gancho de carga (module.registerHooks) espera o playwright-core ser carregado, pelo import (o
//      index.mjs) OU pelo require() CommonJS (o index.js, a que se acrescenta, só na memória, uma linha que entrega o
//      module.exports a esta pré-carga logo depois de ele carregar; o arquivo do node_modules não muda). Os dois
//      caminhos dão no mesmo objeto, e ele se embrulha uma vez: o chromium.launch, o launchPersistentContext, o
//      connectOverCDP e o connect. No Node sem registerHooks, a pré-carga carrega já o playwright-core do canal (a
//      reserva). Em cada navegador lançado, o newContext (que o browser.newPage também usa) põe, antes de devolver o
//      contexto, o MESMO script do render, com as chaves de chavesParaCena de cada vídeo de out/ com perfil de mapa
//      com credencial. O script confere na página: só define window.__chaves em
//      file:///<canal>/out/<proj>/graphics/<cena>.html, aberta no topo da aba (não num iframe) e sem
//      opener (não num pop-up de outra página), e só com as chaves daquele <proj>. Em qualquer outra página
//      (about:blank, http, data:, outra pasta, iframe, pop-up) não define nada. O contexto persistente
//      (launchPersistentContext) e o do navegador conectado (connectOverCDP, connect) NÃO recebem a chave (podem ser
//      um perfil de verdade, logado): eles só se vigiam, e a cena de mapa aberta neles sai NÃO MEDIDO (sem_chave).
//   2. A conferência, em dois tempos. Toda página file:// cujo HTML tem a régua de mapa do canal (a de
//      scripts/lib/qc-cena-gates.mjs) se confere no DOMContentLoaded, numa leitura que só devolve sim ou não e o
//      NOME da credencial: se ela é mapa de verdade (window.__REGIE_MAPA ou maplibregl, ou o __erroCena), se o
//      requestAnimationFrame ainda é o do navegador, se a credencial que o perfil pede está na página, e se a cena
//      parou no __erroCena. E se RELÊ no fechamento (o page.close, o page.goto, o reload, o goBack e o goForward antes
//      de levarem a página a outro documento, o setContent, o close do contexto e o do navegador esperam até 2 s por
//      ela): o window.__erroCena e o window.__errosMapa de agora, que a base de mapa preenche quando um tile volta com
//      erro, depois do DOMContentLoaded, e de novo se o rAF é o do navegador. O fechar também espera a leitura do
//      DOMContentLoaded (até 2 s). Um segundo DOMContentLoaded na mesma página (a página abriu outro documento sem
//      passar por esses métodos: location.reload, um clique, frame.goto) fecha a conta do documento de antes, que
//      fica sem releitura (NÃO MEDIDO, nao_relida), e abre a do novo, que se confere de novo.
//   3. A conta de cada página, à MapTiler: pedidos; respostas por classe (2xx, 3xx, ≥ 400 com o código); tiles com
//      resposta 2xx (o caminho /z/x/y.ext); falhas de rede ('requestfailed', com o texto do Chrome); e cancelados
//      (net::ERR_ABORTED: o MapLibre cancela o tile que a câmera deixou para trás, e o Chrome cancela o que está
//      em curso quando a página fecha; cancelado não é servido nem é falha). SÓ A RESPOSTA 2xx CONTA COMO SERVIDA.
//      De cada tile 2xx, se a resposta traz o endereço de um servidor (response.serverAddr()): a que um page.route
//      respondeu (route.fulfill) não traz, a da rede e a do cache do Chrome trazem, e o loopback (127.x, ::1) não conta
//      como servidor. Isso só se conta (a saída do portão não muda: as sondas de custo zero respondem o tile aqui), e o
//      `conferir` recusa a linha sem tile de servidor ou com tile sem servidor.
//      E, a cada page.screenshot de cena de mapa, quantos pedidos estavam em curso (sem resposta, sem falha e sem
//      cancelamento) naquele instante: "com a chave e ≥ 1 tile 2xx" prova que a chave funcionou, não que o mapa
//      estava inteiro na foto.
//   4. O NÃO MEDIDO, numa cena de mapa: o rAF trocado (no DOMContentLoaded ou depois, relido no fechamento); sem a
//      chave (fora da pasta do canal, sem a chave no arquivo da máquina, sem o leitor de perfis da pré-v1, iframe,
//      contexto persistente ou navegador conectado); o __erroCena no DOMContentLoaded ou no fechamento; o
//      __errosMapa > 0 no fechamento; alguma resposta da MapTiler ≥ 400 ou alguma falha de rede (mesmo que o tile
//      tenha vindo depois, numa nova tentativa: a falha fecha); nenhum tile com resposta 2xx (a página não recebeu o
//      mapa: o portão mediu a cena sem a base); a foto tirada com pedido à MapTiler em curso (mapa_incompleto); e a
//      página que a pré-carga não conseguiu conferir ou reler. E, no processo inteiro: a página de mapa aberta por
//      setContent, e qualquer página que a pré-carga não vigia como cena e que parou no erro da chave. Na saída
//      do processo, uma linha "NÃO MEDIDO — <cena> (<portão>): <motivo>" no stderr, e a saída 0 vira 2. A saída 1
//      vira 2 quando nenhuma outra cena do processo foi medida (um portão por cena, como o qc-cena roda); com outra
//      cena medida, o 1 fica, e as linhas dizem quais cenas não valem. Falha ao pôr a chave num contexto (o
//      addInitScript) lança no newContext e também troca a saída por 2, seja qual for o tratamento do portão (o shot
//      pega o erro e sairia 1). Saída 2 ou maior fica como está. No _audit-til, que o qc-cena roda em lote, cada
//      cena NÃO MEDIDA ganha também a linha "<arquivo>\tERRO\t\t…" no stdout, a do protocolo dele: o qc-cena deixa
//      o til dela sem veredito e mantém o das outras.
//   5. A linha. Uma por página aberta em out/<proj>/_tmp/maptiler-portoes.jsonl (fora do git), da pasta da cena: as
//      cenas de mapa sempre (com 0 pedidos também, para o `conferir`), as outras só com pedido. Só números e sim ou
//      não: a URL leva a chave e nunca se grava. Os campos: aberta/aberta_utc, hora_inicio/hora_fim dos pedidos
//      (null sem pedido), processo, pid, rodada e raiz (o processo de cima, que o pôs no ambiente
//      REGIE_PORTOES_RODADA e REGIE_PORTOES_RAIZ; os filhos herdam), pre_cargas (as pré-cargas do
//      processo, só os nomes: o caminho dentro do canal, "fora do canal: <arquivo>" ou o especificador do pacote; do
//      process.execArgv e do NODE_OPTIONS, com --import, --require/-r e --loader), cena, hash (sha1 do HTML, 12, o do
//      carimbo), mapa, chave, relida, pedidos_maptiler, respostas_maptiler (todas as que chegaram, de qualquer
//      classe), respostas_2xx, tiles_2xx, tiles_2xx_servidor e tiles_2xx_sem_servidor (e, quando houver,
//      tiles_2xx_servidor_nao_lido: a leitura que não voltou antes de a página fechar), cancelados, em_curso_no_fechamento, e, quando houver, capturas,
//      capturas_com_pedido_em_curso e em_curso_max_na_captura, documento_trocado, respostas_erro ({código: n}),
//      falhas ({texto do Chrome: n}), erro_cena, erros_mapa, nao_medido (o motivo) e nao_medido_tipo (raf, sem_chave,
//      erro_cena, erros_mapa, maptiler_recusou, sem_tile_2xx, mapa_incompleto, nao_relida, nao_conferida). Carga,
//      para o out/<proj>/_pesquisa/maptiler-gasto.md, é a linha com pedido.
//   6. A saída. Ao sair, cada processo que abriu cena de mapa grava em out/<proj>/_tmp/portoes-saidas.jsonl uma linha
//      `tipo: "saida"` (processo, pid, rodada, raiz, pre_cargas, a saída do portão e a final, quantas cenas o processo
//      abriu, e as de mapa com o hash e o NÃO MEDIDO de cada uma; no qc-video-avanca, também `saida_lida`: o sha256
//      do arquivo do portão e o veredito que ele imprimiu para cada cena, avanca, parado, sem_video ou erro, lido do
//      stdout dele, que passa sem mudar); e o processo de cima grava `tipo: "rodada"` (o começo e o fim
//      da rodada, e a saída), nos projetos que ele recebeu na linha de comando ou abriu. O `conferir` lê as duas: a
//      saída 1 de um portão que mediu uma cena só é a reprovação dela, e o fim da rodada acha a rodada de um carimbo.
//
// Limites:
//   - o `conferir` aceita a medida do ferramentas/portao-mapa.mjs e herda os limites escritos no topo dele. Os dois que o
//     3º cético da versão 5 deixou, por decisão de 05/10: (P6) a amostragem: o portão mede de 0,5 em 0,5 s e nos
//     instantes do molde, e a cena feita para pintar o crédito legível só nesses instantes sai verde, aqui e na versão 4
//     (x10); e (P7) o <q> no crédito declarado, cujas aspas são texto gerado e deixam o crédito legível NÃO MEDIDO (x15:
//     escreva as aspas no texto), e o letter-spacing na medida "só dela", que mede também o vão entre as letras (x05). E
//     os do nó sem caixa (rodada 5): fora do crédito declarado ele não se conta, e o nó sem tinta só sai da conta com
//     prova pela geometria. Nenhuma cena do canal cai neles;
//   - o contraste de rodapé e o _audit-til do molde, em cena de mapa, ficam NÃO MEDIDO (o rAF trocado): a medida é a
//     do ferramentas/portao-mapa.mjs, a mesma régua com o rAF vivo e o mapa carregado. Com esta pré-carga, nenhuma
//     cena de mapa sai ok:true no qc-cena (o til fica em indefinidos); o `conferir` aceita o til do portao-mapa;
//   - o rAF se confere no DOMContentLoaded e de novo no fechamento: o portão que o trocasse depois do DOMContentLoaded
//     e o devolvesse antes de fechar passaria (nenhum portão do canal faz isso);
//   - a releitura no fechamento cobre o page.close, o page.goto, o reload, o goBack, o goForward, o setContent, o
//     close do contexto e o do navegador. A página que navega por outro caminho (location.reload, um clique,
//     frame.goto), ou o processo que sai com o navegador aberto, perde a releitura, e a cena de mapa sai NÃO MEDIDO
//     (nao_relida): falha fechada. O goBack ou goForward que só troca o #hash fecha a conta da cena antes da hora, e
//     ela sai NÃO MEDIDO (nao_conferida): falha fechada;
//   - "em curso na foto" vale só para o page.screenshot: o locator.screenshot e o elementHandle.screenshot não se
//     contam (nenhum portão do canal os usa em cena de mapa). E pedido em curso é o pedido sem resposta: a resposta
//     conta quando chegam os cabeçalhos, e o corpo do tile ainda pode estar chegando;
//   - cena de mapa medida por portão que fecha a página antes de chegar o primeiro tile (o qc-credito-fantasma não
//     espera o mapa: na rodada portoes-5b-r3 a s21 fechou com 16 pedidos e 0 respostas) sai NÃO MEDIDO
//     (sem_tile_2xx). É a regra: sem tile, o portão não mediu a cena com o mapa. Rode de novo;
//   - um 5xx ou um 429 que a cena venceu na nova tentativa também sai NÃO MEDIDO (falha fechada). Já o tempo esgotado
//     dentro da cena (ela aborta o próprio fetch, e o Chrome diz net::ERR_ABORTED) conta como cancelado; se a cena
//     desistir, o __erroCena dela pega na releitura. Pela mesma razão, um route.abort('aborted') de teste conta como
//     cancelado, não como falha;
//   - só o chromium do playwright-core (o firefox e o webkit não se embrulham; nenhum portão os usa). Na reserva sem
//     registerHooks, só o playwright-core do canal (o node_modules da raiz). O render, o quadro.mjs e a captura-png falam CDP
//     direto e já põem a chave sozinhos;
//   - portão morto por SIGKILL (o teto do qc-cena) não passa pela saída: perde a linha do jsonl, a da saída e a troca
//     da saída (o qc-cena já trata o teto como indefinido). O processo de cima morto assim perde o registro do fim da
//     rodada, e o `conferir` B cai na janela antiga de 20 min para ela;
//   - o qc-tamanho, que o qc-cena roda em lote e lê como JSON até o fim da saída, não lê o JSON quando esta pré-carga
//     escreve no stderr: o tamanho do lote inteiro fica indefinido (falha fechada) sempre que uma cena do lote sai
//     NÃO MEDIDO por aqui (sem a chave, a MapTiler recusou, nenhum tile 2xx…);
//   - o valor da chave vai ao Chrome pelo pipe do playwright, como no render vai pelo CDP. Não rode com
//     DEBUG=pw:protocol nem com trace do playwright ligado: os dois gravam o script, e o script leva a chave. Toda
//     saída desta pré-carga passa por um filtro que troca o valor por <chave>, e o portao-mapa usa o mesmo filtro;
//   - a contagem conta por página, na cena que ela abriu por último;
//   - as `pre_cargas` são só as da linha de comando e do NODE_OPTIONS: um gancho que o próprio portão registre por
//     código (module.register) não aparece nelas, e elas não distinguem o arquivo do canal de uma versão antiga dele
//     (o `conferir` confere o nome). O tile que esse gancho responder por page.route sai sem servidor e é pego pela
//     outra regra; o que ele mandar a outro servidor de verdade (route.continue com outra URL, fora do loopback), não.
//     Nenhum portão do canal faz nada disso;
//   - "tile com servidor" separa o route.fulfill (sem servidor) e o loopback; um proxy de verdade no caminho (nenhum
//     nesta máquina) daria o endereço do proxy;
//   - a `saida_lida` do qc-video-avanca lê as linhas que ele imprime ("✓", "⛔ TODOS PARADOS", "sem <video> na cena —
//     nada a medir" e ERRO), presas ao sha256 do arquivo dele (VIDEO_AVANCA): o molde mudou, o `conferir` diz NÃO
//     MEDIDO até alguém reler o portão e atualizar o sha256. Duas cenas de mesmo nome no mesmo processo também.

import modulo from "node:module";
import { createHash } from "node:crypto";
import { appendFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeSync } from "node:fs";
import { basename, dirname, extname, isAbsolute, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const NOME = "chaves-nos-portoes";
// onde este arquivo mora e de onde o `conferir` lê as linhas do portao-mapa (a bancada da versão 5 troca só estas duas)
const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const JSONL_PORTAO_MAPA_DE = (pasta) => join(pasta, "_tmp", "portao-mapa.jsonl");
const ARQ_PORTAO_MAPA = join(RAIZ, "ferramentas", "portao-mapa.mjs");
// O mesmo módulo que o renderizar.mjs usa (import { chavesParaCena } from "../mapa/perfis.mjs").
// Nesta cópia, o motor vem só do REGIE_MOTOR, sem padrão cravado: sem ele, o import falha, nenhuma cena ganha a chave e a
// cena de mapa sai NÃO MEDIDO (sem_chave), o que é falha fechada.
const PERFIS_URL = process.env.REGIE_MOTOR ? pathToFileURL(join(process.env.REGIE_MOTOR, "src", "mapa", "perfis.mjs")).href : "regie-motor-ausente:/defina-REGIE_MOTOR";
const ENTRADA_PW = /\/node_modules\/playwright-core\/index\.mjs$/i;
// a entrada CommonJS (require("playwright-core")), que o index.mjs também importa: a ela se acrescenta, só na memória,
// a linha que entrega o module.exports a esta pré-carga logo depois de ele carregar
const ENTRADA_PW_CJS = /\/node_modules\/playwright-core\/index\.js$/i;
const SIM_INSTALAR = Symbol.for("regie-guia-mapas.chaves-nos-portoes.instalar");
const SIM_SEM_CHAVE = Symbol.for("regie-guia-mapas.chaves-nos-portoes.semChave");
const SIM_PAGINAS = Symbol.for("regie-guia-mapas.chaves-nos-portoes.paginas");
const APENDICE_CJS = '\n;try{const f=globalThis[Symbol.for("regie-guia-mapas.chaves-nos-portoes.instalar")];if(typeof f==="function")f(module.exports)}catch(e){}\n';
const MAPTILER = /^https?:\/\/(?:[^/?#@]+\.)?maptiler\.com(?::\d+)?(?:[/?#]|$)/i;
// O tile: .../{z}/{x}/{y}.ext no caminho (o perfil da pré-v1: /tiles/satellite-v2/{z}/{x}/{y}.jpg e
// /tiles/terrain-rgb-v2/{z}/{x}/{y}.webp). O TileJSON, o estilo e a fonte não contam como tile.
const TILE_NO_CAMINHO = /\/\d+\/\d+\/\d+(?:@\d+x)?\.[a-z0-9]+$/i;
const ehTile = (u) => { try { return TILE_NO_CAMINHO.test(new URL(u).pathname); } catch { return false; } };
// O Chrome diz net::ERR_ABORTED do pedido que a página cancelou (o AbortController do MapLibre) e do que estava em
// curso quando ela fechou: não foi servido, e não é falha do servidor nem da rede.
const CANCELADO = /^net::ERR_ABORTED\b/i;
// A régua de cena de mapa do canal (scripts/lib/qc-cena-gates.mjs › detectarGatesOpcionaisQcCena). Aqui ela só
// escolhe que página se confere: quem diz se a página é mapa de verdade é a própria página (SONDA_DA_PAGINA).
const MAPA_NO_FONTE = /maptiler|mapbox|maplibre|__aguardarMapa/i;
// A cena que carrega a base de mapa da pré-v1: a régua do `conferir`, que não abre a página.
const BASE_DE_MAPA_NO_FONTE = /_vendor\/(?:perfil-mapa|maplibre-gl)\.js/;
const CENA_EM_QUALQUER_PASTA = /\/out\/([a-z0-9][a-z0-9_-]*)\/graphics\/([a-z0-9][a-z0-9._-]*)\.html$/i;
const NAO_MEDIDO = 2;
const TETO_CONFERENCIA_MS = 2000;
const TETO_RELEITURA_MS = 2000;
const UM_DIA_DE_PORTAO_MS = 20 * 60_000;   // o teto mais longo do qc-cena (tetoPara): a janela antiga do carimbo
// a rodada de um carimbo, pelo registro do fim dela: terminou entre 5 s antes do `em` e isto depois (o qc-cena grava
// o carimbo e ainda roda o qc-clipe-repetido antes de sair)
const FIM_DEPOIS_DO_CARIMBO_MS = 10 * 60_000;
const ARQ_SAIDAS = "portoes-saidas.jsonl";
// A rodada: o processo de cima (o primeiro a carregar a pré-carga) se marca no ambiente, e os filhos herdam.
const ENV_RODADA = "REGIE_PORTOES_RODADA";
const ENV_RAIZ = "REGIE_PORTOES_RAIZ";
// As pré-cargas que provam medida: as do canal, com esta entre elas. Cada linha (a da página, a da saída, a do
// portao-mapa) leva as pré-cargas do PROCESSO (só os nomes, do process.execArgv e do NODE_OPTIONS: --import,
// --require/-r, --loader); o `conferir` recusa a linha com qualquer outra. Um gancho de prova (que responde ou segura a
// MapTiler aqui, ou dá a chave a uma cópia) deixa linha verde com tile 2xx que nunca veio da MapTiler (3º cético, 04/10).
const PRE_CARGAS_DO_CANAL = ["ferramentas/chaves-nos-portoes.mjs", "ferramentas/cdp-sem-compressao.mjs"];
const SIM_PRE_CARGAS = Symbol.for("regie-guia-mapas.chaves-nos-portoes.preCargas");
// O veredito de cada cena do qc-video-avanca, lido da saída dele (o código de saída sozinho não separa o "✓" do
// "sem <video> na cena — nada a medir", que também sai 0). A leitura é presa a ESTE arquivo do molde: com outro
// sha256, o `conferir` não aceita o que ela leu (3º cético, 04/10).
const VIDEO_AVANCA = { processo: "qc-video-avanca.mjs", arquivo: "scripts/qc-video-avanca.mjs", sha256: "5b258511cb0318922bb120d013abeac044d987e5ca6618f8ecb6658ebe1605e6" };

// Toda saída passa por aqui: a chave nunca vai ao stderr, ao stdout nem a arquivo, nem dentro da mensagem de um erro alheio.
let valores = [];
const semChave = (s) => { let t = String(s); for (const v of valores) if (v) t = t.split(v).join("<chave>"); return t.replace(/([?&]key=)[^&\s"'#]+/gi, "$1<chave>"); };
function escrever(fd, s) {
  const t = semChave(s);
  const fluxo = fd === 1 ? process.stdout : process.stderr;
  // no terminal, o stream (acento certo no console do Windows); em pipe e arquivo, a escrita síncrona, que sobrevive
  // ao process.exit logo depois
  if (fluxo?.isTTY) { try { fluxo.write(t); return; } catch {} }
  try { writeSync(fd, t); } catch { try { fluxo.write(t); } catch {} }
}
const aviso = (m) => escrever(2, `${NOME}: ${m}\n`);
const codigo = (e) => e?.code || e?.name || "erro";

const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// "/C:/<pasta do canal>" — o caminho da URL file:// da raiz do canal. Na origem, o caminho não tinha acento nem espaço;
// com eles, a régua abaixo não foi provada: ponha o canal num caminho sem acento nem espaço.
const RAIZ_URL_PATH = pathToFileURL(RAIZ).pathname.replace(/\/+$/, "");
const RE_CENA_SRC = `^${escRe(RAIZ_URL_PATH)}/out/([a-z0-9][a-z0-9_-]*)/graphics/([a-z0-9][a-z0-9._-]*)\\.html$`;
const reCena = new RegExp(RE_CENA_SRC, "i");
function cenaDoCanal(u) {
  try {
    const x = new URL(u);
    if (x.protocol !== "file:" || x.host !== "") return null;
    const m = reCena.exec(x.pathname);
    return m ? { proj: m[1].toLowerCase(), cena: m[2] } : null;
  } catch { return null; }
}
// O fuso das horas gravadas e do --desde do `conferir`. O canal de origem fica no Brasil (America/Sao_Paulo, sem horário
// de verão desde 2019: -03:00). Em outro fuso, troque as DUAS constantes juntas, uma vez, ao instalar, e nunca no meio
// de um vídeo: as linhas já gravadas levam o fuso de antes. A mesma troca vale no portao-mapa.mjs.
const FUSO = "America/Sao_Paulo";
const DESLOCAMENTO = "-03:00";
const horaLocal = (d) => {
  try { return d.toLocaleString("sv-SE", { timeZone: FUSO }); } catch { return d.toISOString(); }
};
const sha1_12 = (buf) => createHash("sha1").update(buf).digest("hex").slice(0, 12);
const somar = (o) => Object.values(o || {}).reduce((s, n) => s + n, 0);
const resumir = (o) => Object.entries(o || {}).map(([k, n]) => `${k} × ${n}`).join(", ");

// ── as pré-cargas do processo: só os nomes (o caminho dentro do canal, ou o nome do arquivo de fora) ─────────────
// O NODE_OPTIONS separa por espaço e aceita aspas duplas, como o Node.
function tokensDoNodeOptions(s) {
  const out = []; let cur = "", aspas = false, tem = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "\\" && aspas && i + 1 < s.length) { cur += s[++i]; tem = true; continue; }
    if (c === '"') { aspas = !aspas; tem = true; continue; }
    if (!aspas && /\s/.test(c)) { if (tem) { out.push(cur); cur = ""; tem = false; } continue; }
    cur += c; tem = true;
  }
  if (tem) out.push(cur);
  return out;
}
function especificadoresDePreCarga(args) {
  const out = [];
  for (let i = 0; i < args.length; i++) {
    const a = String(args[i]);
    const m = /^(?:--import|--require|--loader|--experimental-loader)=([\s\S]*)$/.exec(a);
    if (m) out.push(m[1]);
    else if (/^(?:--import|--require|-r|--loader|--experimental-loader)$/.test(a) && i + 1 < args.length) out.push(String(args[++i]));
  }
  return out;
}
function nomeDaPreCarga(esp) {
  let arq = null;
  try {
    if (/^file:/i.test(esp)) arq = fileURLToPath(esp);
    else if (/^(?:[a-z]:[\\/]|[\\/]|\.{1,2}[\\/])/i.test(esp)) arq = resolve(esp);
  } catch { }
  if (!arq) return `pacote ou especificador: ${esp}`;
  const rel = relative(RAIZ, arq).split("\\").join("/");
  return !rel || rel.startsWith("..") || isAbsolute(rel) ? `fora do canal: ${basename(arq)}` : rel;
}
const PRE_CARGAS = (() => {
  try {
    const esp = [...especificadoresDePreCarga(process.execArgv), ...especificadoresDePreCarga(tokensDoNodeOptions(process.env.NODE_OPTIONS || ""))];
    return [...new Set(esp.map(nomeDaPreCarga))];
  } catch { return null; }
})();
// por que os tiles de uma linha (da pré-carga, ou o veredito dela na linha do portao-mapa) não provam a MapTiler: o
// tile 2xx sem o endereço de um servidor foi respondido por um page.route (gancho de prova), não veio da rede
function problemaDoServidor(servidor, semServidor) {
  if (!(Number.isInteger(servidor) && Number.isInteger(semServidor))) return "a linha não traz de onde vieram os tiles (linha de antes do 3º cético, 04/10)";
  if (semServidor > 0) return `${semServidor} tile(s) 2xx sem o endereço de um servidor: respondidos por page.route (gancho de prova), não pela MapTiler`;
  if (!(servidor > 0)) return "nenhum tile 2xx com o endereço de um servidor";
  return null;
}
// por que as pré-cargas de uma linha não provam medida (null = provam)
function problemaDasPreCargas(lista) {
  if (!Array.isArray(lista)) return "a linha não traz as pré-cargas do processo (linha de antes do 3º cético, 04/10)";
  const estranhas = lista.filter((n) => !PRE_CARGAS_DO_CANAL.includes(n));
  if (estranhas.length) return `o processo rodou com pré-carga que não é do canal (${estranhas.join(", ")}): gancho de prova, que responde ou segura a MapTiler aqui ou dá a chave a uma cópia`;
  if (!lista.includes(PRE_CARGAS_DO_CANAL[0])) return "o processo rodou sem a pré-carga da chave";
  return null;
}

// ── a saída do qc-video-avanca, lida linha a linha (o veredito de cada cena; a saída passa sem mudar) ──────────
const PROCESSO = basename(process.argv[1] || "?");
const leituraDoVideo = { ligada: false, sha256: null, porCena: {}, repetidas: new Set(), resto: "" };
function lerLinhaDoVideo(linha) {
  const t = String(linha).replace(/\r$/, "");
  let m, v = null;
  if ((m = /^·\s+(\S+)\s+sem <video> na cena — nada a medir\s*$/.exec(t))) v = "sem_video";
  else if ((m = /^✓\s+(\S+)\s+t=/.exec(t))) v = "avanca";
  else if ((m = /^⛔ TODOS PARADOS\s+(\S+)\s+t=/.exec(t))) v = "parado";
  else if ((m = /^ERRO\s+(\S+?):\s/.exec(t))) v = "erro";
  if (!v) return;
  if (Object.prototype.hasOwnProperty.call(leituraDoVideo.porCena, m[1])) leituraDoVideo.repetidas.add(m[1]);
  leituraDoVideo.porCena[m[1]] = v;
}
function lerSaidaDoVideo() {
  if (PROCESSO.toLowerCase() !== VIDEO_AVANCA.processo) return;
  leituraDoVideo.ligada = true;
  try { leituraDoVideo.sha256 = createHash("sha256").update(readFileSync(resolve(process.argv[1]))).digest("hex"); } catch { }
  const orig = process.stdout.write;
  process.stdout.write = function escritaLida(chunk, ...resto) {
    try {
      leituraDoVideo.resto += typeof chunk === "string" ? chunk : Buffer.from(chunk).toString("utf8");
      let i;
      while ((i = leituraDoVideo.resto.indexOf("\n")) >= 0) { lerLinhaDoVideo(leituraDoVideo.resto.slice(0, i)); leituraDoVideo.resto = leituraDoVideo.resto.slice(i + 1); }
    } catch { }
    return orig.call(this, chunk, ...resto);
  };
}

// ── as chaves de cada vídeo, como o render as pega: chavesParaCena(out/<proj>) ───────────────────────────────
const estado = { porProj: {}, faltas: {}, faltaGeral: null, script: null };
let prontas = null;   // Promise<estado>, uma vez por processo, no primeiro launch
function prepararChaves() {
  if (prontas) return prontas;
  prontas = (async () => {
    let chavesParaCena;
    try { ({ chavesParaCena } = await import(PERFIS_URL)); }
    catch (e) { estado.faltaGeral = `não carreguei o leitor de perfis da pré-v1 (${codigo(e)})`; return estado; }
    const pastaOut = join(RAIZ, "out");
    let projs = [];
    try { projs = readdirSync(pastaOut, { withFileTypes: true }).filter((d) => d.isDirectory() && /^[a-z0-9][a-z0-9_-]*$/i.test(d.name)).map((d) => d.name); }
    catch { /* sem out/: nada a fazer */ }
    for (const proj of projs) {
      if (!existsSync(join(pastaOut, proj, "_media", "_vendor", "perfil-mapa.json"))) continue;
      let ch;
      try { ch = chavesParaCena(join(pastaOut, proj)); }
      catch (e) {
        // A mensagem do SEM_CHAVE só diz o nome e o arquivo (a chave falta); outro erro sai só com o código.
        estado.faltas[proj.toLowerCase()] = e?.code === "SEM_CHAVE"
          ? String(e.message).split("\n")[0].replace(/\.+$/, "")
          : `não li o perfil de mapa de out/${proj} (${codigo(e)})`;
        continue;
      }
      if (!ch || !Object.keys(ch).length) continue;   // perfil sem credencial: a cena não pede chave
      estado.porProj[proj.toLowerCase()] = ch;
      for (const v of Object.values(ch)) if (typeof v === "string" && v) valores.push(v);
    }
    if (!Object.keys(estado.porProj).length) return estado;
    // O script do render (renderizar.mjs › scriptChaves), dentro da guarda. Nenhum nome global fica.
    estado.script =
      "(function(){try{" +
      "if(window.top!==window||window.opener)return;" +
      `var M=${JSON.stringify(estado.porProj)};` +
      "if(location.protocol!==\"file:\"||location.host!==\"\")return;" +
      `var m=new RegExp(${JSON.stringify(RE_CENA_SRC)},"i").exec(location.pathname);` +
      "if(!m)return;var p=m[1].toLowerCase();" +
      "if(!Object.prototype.hasOwnProperty.call(M,p))return;" +
      "var c=M[p];" +
      "Object.defineProperty(window,\"__chaves\",{value:Object.freeze(c),enumerable:false,writable:false,configurable:false});" +
      "}catch(e){}})();";
    return estado;
  })();
  return prontas;
}

// ── a conferência de cada página aberta ───────────────────────────────────────────────────────────────────────
// Roda na página (playwright › page.evaluate). Devolve só sim/não, o nome da credencial e o começo do __erroCena,
// que é texto da base de mapa (nunca a chave): nada de valor sai daqui.
function SONDA_DA_PAGINA() {
  const nativa = (f) => {
    try { return typeof f === "function" && /\{\s*\[native code\]\s*\}\s*$/.test(Function.prototype.toString.call(f)); }
    catch (e) { return false; }
  };
  const P = window.__REGIE_MAPA;
  const cred = P && typeof P.credencial === "string" ? P.credencial : "";
  let temChave = false;
  try { temChave = !!(cred && window.__chaves && typeof window.__chaves[cred] === "string" && window.__chaves[cred].length > 0); } catch (e) { }
  const erro = String(window.__erroCena || "");
  return {
    mapa: !!P || typeof window.maplibregl !== "undefined",
    raf_nativo: nativa(window.requestAnimationFrame),
    credencial: cred,
    chave_na_pagina: temChave,
    erro: erro.slice(0, 160),
    erro_de_chave: /precisa da chave/i.test(erro),
  };
}
// A releitura no fechamento: o erro que a base de mapa declara quando um tile volta com erro, depois do
// DOMContentLoaded (mapa-base.html › map.on("error") e barrarTileComErro); e o rAF de novo (o portão que o trocasse
// depois do DOMContentLoaded passava pela conferência do começo).
function SONDA_NO_FECHAMENTO() {
  let raf = false;
  try { raf = typeof window.requestAnimationFrame === "function" && /\{\s*\[native code\]\s*\}\s*$/.test(Function.prototype.toString.call(window.requestAnimationFrame)); } catch (e) { }
  return {
    erro: String(window.__erroCena || "").slice(0, 160),
    erros_mapa: Number(window.__errosMapa) || 0,
    raf_nativo: raf,
  };
}

const registros = [];             // uma entrada por página de cena aberta neste processo
const porPagina = new WeakMap();  // página → o registro da cena que ela abriu por último
const conferencias = new Set();   // leituras em curso
const geral = [];                 // NÃO MEDIDO do processo inteiro (sem vigia, falha ao pôr a chave, setContent…)
const naoMedirProcesso = (m) => { if (!geral.includes(m)) geral.push(m); };
// os contextos que NÃO recebem a chave (o persistente e os do navegador conectado): só se vigiam
const contextosSemChave = new WeakSet();
const contextosVigiados = new WeakSet();
// o pedido em curso é o que ainda não teve resposta nem falha (nem cancelamento): conta-se por pedido, no registro que
// contou o pedido (a resposta e a falha vão ao mesmo registro), e não por subtração
const emCursoDe = (r) => r.pendentes.size;
const registroDoPedido = new WeakMap();   // pedido → o registro que o contou
// De onde veio cada tile 2xx: o endereço do servidor que o Chrome guarda com a resposta (response.serverAddr()). A
// resposta que um page.route/ctx.route respondeu (route.fulfill: o gancho de prova, o tile cinza) não tem servidor; a
// que veio da rede, e a que veio do cache do Chrome, têm (provado em 04/10 num servidor local). O endereço de loopback
// (127.x, ::1) não é a MapTiler. Só se conta: o `conferir` recusa a linha sem tile de servidor ou com tile sem servidor,
// e a saída do portão não muda (as sondas de custo zero provam os portões com o tile respondido aqui).
const LOOPBACK = /^(?:127\.|::1$|::ffff:127\.|0\.0\.0\.0$|localhost$)/i;
const leiturasDeServidor = new Set();
function lerServidor(r, res) {
  let p;
  try { p = Promise.resolve(res.serverAddr()); } catch { r.servidorNaoLido++; return; }
  const q = p.then(
    (sa) => { if (r.finalizado) return; const ip = String(sa?.ipAddress || "").replace(/^\[|\]$/g, ""); if (ip && !LOOPBACK.test(ip)) r.tilesServidor++; else r.tilesSemServidor++; },
    () => { if (!r.finalizado) r.servidorNaoLido++; },
  ).finally(() => { r.lendoServidor.delete(q); leiturasDeServidor.delete(q); });
  r.lendoServidor.add(q); leiturasDeServidor.add(q);
}
async function esperarServidor(r) {
  if (!r || !r.lendoServidor.size) return;
  let relogio;
  await Promise.race([Promise.allSettled([...r.lendoServidor]), new Promise((res) => { relogio = setTimeout(res, TETO_CONFERENCIA_MS); })]);
  clearTimeout(relogio);
}

function novoRegistro(url, ctx) {
  let arquivo;
  try { const u = new URL(url); if (u.protocol !== "file:" || u.host !== "") return null; arquivo = fileURLToPath(u); }
  catch { return null; }
  if (!/\.html?$/i.test(arquivo)) return null;
  let bruto = null;
  try { bruto = readFileSync(arquivo); } catch { /* o portão diz que não abriu */ }
  const fonte = bruto ? bruto.toString("utf8") : "";
  const qualquer = CENA_EM_QUALQUER_PASTA.exec(arquivo.replace(/\\/g, "/"));
  const mapaNoFonte = MAPA_NO_FONTE.test(fonte);
  if (!qualquer && !mapaNoFonte) return null;
  const r = {
    ctx, arquivo,
    cena: qualquer ? qualquer[2] : basename(arquivo, extname(arquivo)),
    proj: qualquer ? qualquer[1].toLowerCase() : null,
    pastaProj: qualquer ? dirname(dirname(arquivo)) : null,
    doCanal: !!cenaDoCanal(url), semChavePorDesenho: contextosSemChave.has(ctx),
    mapaNoFonte, hash: bruto ? sha1_12(bruto) : null,
    aberta: new Date(), inicio: null, fim: null,
    pedidos: 0, respostas: 0, respostas2xx: 0, tiles2xx: 0, erros: {}, falhas: {}, cancelados: 0, pendentes: new Set(),
    tilesServidor: 0, tilesSemServidor: 0, servidorNaoLido: 0, lendoServidor: new Set(),
    capturas: 0, capturasComPedido: 0, emCursoMax: 0, emCursoNoFechamento: null, documentoTrocado: false,
    conferindo: false, conferencia: null, erroDeChaveNoConsole: false,
    final: null, releitura: null, falhaReleitura: null,
    mapa: null, chave: null, naoMedido: null, tipo: null, finalizado: false,
  };
  registros.push(r);
  return r;
}

function conferir(pagina, r) {
  r.conferindo = true;
  const p = pagina.evaluate(SONDA_DA_PAGINA).then((c) => { r.conferencia = c; }, () => { /* fechou ou navegou: sem conferência */ });
  conferencias.add(p);
  p.then(() => conferencias.delete(p));
}

async function esperarConferencias() {
  if (!conferencias.size && !leiturasDeServidor.size) return;
  let relogio;
  await Promise.race([
    Promise.allSettled([...conferencias, ...leiturasDeServidor]),
    new Promise((res) => { relogio = setTimeout(res, TETO_CONFERENCIA_MS); }),
  ]);
  clearTimeout(relogio);
}

// A releitura da página antes de ela fechar ou navegar. Uma vez por registro; nunca lança.
function relerPagina(pagina) {
  let r = null;
  try { r = porPagina.get(pagina); } catch {}
  if (!r || !r.mapaNoFonte || r.finalizado) return Promise.resolve();
  if (r.releitura) return r.releitura;
  let fechada = false;
  try { fechada = pagina.isClosed(); } catch {}
  if (fechada) return Promise.resolve();
  let leitura;
  try { leitura = pagina.evaluate(SONDA_NO_FECHAMENTO); }
  catch (e) { r.falhaReleitura = `a leitura não começou (${codigo(e)})`; return Promise.resolve(); }
  leitura.catch(() => {});
  let relogio;
  r.releitura = Promise.race([
    leitura.then((v) => { r.final = v; }, (e) => { r.falhaReleitura ??= `a leitura falhou (${codigo(e)})`; }),
    new Promise((res) => { relogio = setTimeout(() => { r.falhaReleitura ??= `a leitura não voltou em ${TETO_RELEITURA_MS / 1000} s`; res(); }, TETO_RELEITURA_MS); }),
  ]).finally(() => clearTimeout(relogio));
  return r.releitura;
}
const relerTodas = (paginas) => Promise.allSettled(paginas.map((p) => relerPagina(p)));

function motivoSemChave(r, cred) {
  let porque;
  if (r.semChavePorDesenho) porque = "o contexto é persistente (launchPersistentContext) ou de um navegador conectado (connectOverCDP, connect), e a pré-carga não dá a chave a ele: pode ser um perfil de verdade";
  else if (!r.doCanal) porque = `a cena está fora de ${RAIZ.replace(/\\/g, "/")}/out/<proj>/graphics/ (uma cópia ou uma worktree), e a pré-carga só dá a chave às cenas do canal`;
  else if (estado.faltaGeral) porque = estado.faltaGeral;
  else if (r.proj && estado.faltas[r.proj]) porque = estado.faltas[r.proj];
  else if (r.proj && !estado.porProj[r.proj]) porque = `out/${r.proj} não tem perfil de mapa com credencial que a pré-carga tenha lido`;
  else porque = "a página não estava no topo da aba, ou o script da chave não rodou nela";
  return `a cena de mapa abriu sem a chave ${cred || "da base de mapa"} (${porque}); parada no erro da chave, ela não cria o mapa`;
}

function naoMedir(r, tipo, motivo) { r.tipo = tipo; r.naoMedido = motivo; }
function decidir(r) {
  const c = r.conferencia, f = r.final;
  if (c) { r.mapa = !!(c.mapa || c.erro); r.chave = !!c.chave_na_pagina; }
  if (f?.erro && r.mapaNoFonte) r.mapa = true;
  if (r.erroDeChaveNoConsole) { r.mapa = true; return naoMedir(r, "sem_chave", motivoSemChave(r, c?.credencial)); }
  if (!r.mapaNoFonte) return;
  if (!c) return naoMedir(r, "nao_conferida", "a pré-carga não conseguiu conferir a página (ela fechou ou navegou antes da leitura)");
  if (!r.mapa) return;
  if (!c.raf_nativo) return naoMedir(r, "raf", "o portão trocou o requestAnimationFrame da página antes de ela abrir; sem ele o MapLibre não pinta nem pede tile, e o que o portão mediu foi o fundo sem o mapa");
  if (f && f.raf_nativo === false) return naoMedir(r, "raf", "o requestAnimationFrame da página deixou de ser o do navegador depois do DOMContentLoaded (relido no fechamento); sem ele o MapLibre para de pintar, e o que o portão mediu depois disso foi o mapa parado");
  if (c.erro_de_chave || (c.credencial && !c.chave_na_pagina)) return naoMedir(r, "sem_chave", motivoSemChave(r, c.credencial));
  if (c.erro) return naoMedir(r, "erro_cena", `a cena de mapa parou antes de criar o mapa ("${c.erro}")`);
  if (f?.erro) return naoMedir(r, "erro_cena", `a cena de mapa declarou erro depois de abrir (window.__erroCena, relido no fechamento: "${f.erro}"); o que o portão mediu foi a cena com a faixa de erro, sem o mapa inteiro`);
  if (f?.erros_mapa > 0) return naoMedir(r, "erros_mapa", `o MapLibre acusou ${f.erros_mapa} erro(s) na cena (window.__errosMapa, relido no fechamento)`);
  const nErros = somar(r.erros), nFalhas = somar(r.falhas);
  if (nErros || nFalhas) {
    const partes = [];
    if (nErros) partes.push(`${nErros} resposta(s) de erro (HTTP ${resumir(r.erros)})`);
    if (nFalhas) partes.push(`${nFalhas} falha(s) de rede (${resumir(r.falhas)})`);
    return naoMedir(r, "maptiler_recusou", `a MapTiler não serviu o mapa: ${partes.join(" e ")}, em ${r.pedidos} pedido(s); só a resposta 2xx conta como servida, e um tile que falhou deixa a cena sem o mapa inteiro`);
  }
  if (!r.tiles2xx) return naoMedir(r, "sem_tile_2xx", `nenhum tile da MapTiler chegou com resposta 2xx (${r.pedidos} pedido(s), ${r.respostas} resposta(s), ${r.cancelados} cancelado(s)): o portão mediu a cena sem a base de mapa`);
  if (r.capturasComPedido) return naoMedir(r, "mapa_incompleto", `o portão fotografou a cena ${r.capturasComPedido} de ${r.capturas} vez(es) com pedido(s) à MapTiler ainda em curso (até ${r.emCursoMax}): o mapa podia não estar inteiro na foto; "com a chave e tile 2xx" prova que a chave funcionou, não que o quadro medido tinha o mapa`);
  if (!f) return naoMedir(r, "nao_relida", `a pré-carga não conseguiu reler a página no fechamento (${r.falhaReleitura || (r.documentoTrocado ? "a página abriu outro documento da mesma cena (location.reload, um clique ou frame.goto) antes da releitura" : "ela fechou ou navegou por um caminho que a pré-carga não vigia")}): o erro que um tile pode ter deixado depois do DOMContentLoaded não foi visto`);
}

function gravar(r) {
  if (!r.pastaProj || !(r.pedidos || r.mapa || r.naoMedido)) return;
  const linha = {
    aberta: horaLocal(r.aberta), aberta_utc: r.aberta.toISOString(),
    hora_inicio: r.inicio ? horaLocal(r.inicio) : null, hora_fim: r.fim ? horaLocal(r.fim) : null,
    fuso: FUSO, processo: basename(process.argv[1] || "?"), pid: process.pid,
    rodada: process.env[ENV_RODADA] || null, raiz: process.env[ENV_RAIZ] || null, pre_cargas: PRE_CARGAS,
    cena: r.cena, hash: r.hash, mapa: r.mapa, chave: r.chave, relida: !!r.final,
    pedidos_maptiler: r.pedidos, respostas_maptiler: r.respostas,
    respostas_2xx: r.respostas2xx, tiles_2xx: r.tiles2xx, tiles_2xx_servidor: r.tilesServidor, tiles_2xx_sem_servidor: r.tilesSemServidor,
    ...(r.servidorNaoLido ? { tiles_2xx_servidor_nao_lido: r.servidorNaoLido } : {}),
    cancelados: r.cancelados,
    em_curso_no_fechamento: r.emCursoNoFechamento,
    ...(r.capturas ? { capturas: r.capturas, capturas_com_pedido_em_curso: r.capturasComPedido, em_curso_max_na_captura: r.emCursoMax } : {}),
    ...(r.documentoTrocado ? { documento_trocado: true } : {}),
    ...(r.semChavePorDesenho ? { contexto_sem_chave: true } : {}),
    ...(somar(r.erros) ? { respostas_erro: r.erros } : {}),
    ...(somar(r.falhas) ? { falhas: r.falhas } : {}),
    ...(r.final?.erro ? { erro_cena: r.final.erro } : r.conferencia?.erro ? { erro_cena: r.conferencia.erro } : {}),
    ...(r.final?.erros_mapa ? { erros_mapa: r.final.erros_mapa } : {}),
    ...(r.naoMedido ? { nao_medido: r.naoMedido, nao_medido_tipo: r.tipo } : {}),
  };
  try {
    const pasta = join(r.pastaProj, "_tmp");
    mkdirSync(pasta, { recursive: true });
    appendFileSync(join(pasta, "maptiler-portoes.jsonl"), semChave(JSON.stringify(linha)) + "\n");
  } catch (e) { aviso(`não gravei a linha de ${r.cena} (${codigo(e)}): ${r.pedidos} pedidos à MapTiler`); }
}

function finalizar(r) {
  if (r.finalizado) return;
  r.finalizado = true;
  r.emCursoNoFechamento = emCursoDe(r);
  // a leitura do servidor que não voltou até aqui fica "não lida" (a que voltar depois não muda a linha)
  r.servidorNaoLido += r.lendoServidor.size;
  decidir(r);
  gravar(r);
}

function vigiar(ctx) {
  if (!ctx || contextosVigiados.has(ctx)) return;
  contextosVigiados.add(ctx);
  let atual = null;
  const mesmoArquivo = (r, url) => { try { return fileURLToPath(new URL(url)).toLowerCase() === r.arquivo.toLowerCase(); } catch { return false; } };
  const abrir = (pagina, url) => {
    const antes = porPagina.get(pagina);
    // a navegação dentro do mesmo documento (um #hash) não abre outra cena
    if (antes && !antes.finalizado && mesmoArquivo(antes, url)) return;
    // a página saiu da cena (para outra cena ou para qualquer outra página): a conta dela fecha aqui
    if (antes) { finalizar(antes); porPagina.delete(pagina); }
    const r = novoRegistro(url, ctx);
    if (!r) return;
    porPagina.set(pagina, r);
    atual = r;
  };
  const ligarPagina = (pagina) => {
    try {
      pagina.on("framenavigated", (f) => { try { if (f === pagina.mainFrame()) abrir(pagina, f.url()); } catch {} });
      pagina.on("domcontentloaded", () => {
        try {
          let r = porPagina.get(pagina);
          if (r && r.conferindo) {
            // um segundo DOMContentLoaded no mesmo registro: a página abriu outro documento da mesma cena sem passar
            // pelos métodos vigiados (location.reload, um clique, frame.goto). O de antes fecha sem releitura (fica
            // NÃO MEDIDO se for de mapa), e o novo se confere de novo
            r.documentoTrocado = true;
            const velho = r;
            r = novoRegistro(pagina.url(), ctx);
            // os pedidos em curso no registro de antes já são do documento novo (os do documento de antes o Chrome
            // cancela ao navegar): passam para o registro novo, com a conta deles
            if (r) for (const req of [...velho.pendentes]) { velho.pendentes.delete(req); velho.pedidos--; r.pedidos++; r.pendentes.add(req); registroDoPedido.set(req, r); }
            finalizar(velho); porPagina.delete(pagina);
            if (r) { porPagina.set(pagina, r); atual = r; }
          }
          if (r && r.mapaNoFonte && !r.conferindo) conferir(pagina, r);
        } catch {}
      });
      pagina.on("close", () => { const r = porPagina.get(pagina); if (r) finalizar(r); });
      // a releitura antes de fechar a página e antes de levá-la a outro documento (o goto, o reload, o goBack e o
      // goForward abrem um documento novo, mesmo que seja a mesma cena: a conta da que está aberta fecha antes)
      const fecharPagina = pagina.close;
      if (typeof fecharPagina === "function") pagina.close = async function closeComReleitura(...a) { await relerPagina(pagina); await esperarServidor(porPagina.get(pagina)); return fecharPagina.apply(this, a); };
      const antesDeNavegar = async () => {
        await relerPagina(pagina);
        const r = porPagina.get(pagina);
        if (r) { finalizar(r); porPagina.delete(pagina); }
      };
      for (const nome of ["goto", "reload", "goBack", "goForward"]) {
        const orig = pagina[nome];
        if (typeof orig === "function") pagina[nome] = async function navegarComReleitura(...a) { await antesDeNavegar(); return orig.apply(this, a); };
      }
      // o setContent põe o HTML numa página sem arquivo (about:blank): a pré-carga não dá a chave a ela nem a confere.
      // Página de mapa aberta assim é NÃO MEDIDO do processo
      const conteudo = pagina.setContent;
      if (typeof conteudo === "function") pagina.setContent = async function setContentVigiado(html, ...resto) {
        await antesDeNavegar();
        if (MAPA_NO_FONTE.test(String(html ?? ""))) naoMedirProcesso("o portão abriu uma página de mapa por setContent (sem arquivo): a pré-carga não dá a chave fora de out/<proj>/graphics/ nem confere a página");
        return conteudo.call(this, html, ...resto);
      };
      // a foto da cena de mapa: quantos pedidos à MapTiler estavam em curso na hora (o mapa podia não estar inteiro)
      const foto = pagina.screenshot;
      if (typeof foto === "function") pagina.screenshot = async function screenshotVigiado(...a) {
        const r = porPagina.get(pagina);
        if (r && r.mapaNoFonte && !r.finalizado) {
          const n = emCursoDe(r);
          r.capturas++;
          if (n > 0) { r.capturasComPedido++; r.emCursoMax = Math.max(r.emCursoMax, n); }
        }
        return foto.apply(this, a);
      };
    } catch { naoMedirProcesso("a pré-carga não conseguiu vigiar uma página do Chrome"); }
  };
  const doPedido = (req) => { try { return porPagina.get(req.frame().page()) || atual; } catch { return atual; } };
  try {
    for (const p of ctx.pages()) ligarPagina(p);
    ctx.on("page", ligarPagina);
    ctx.on("request", (req) => {
      try {
        if (!MAPTILER.test(req.url())) return;
        const r = doPedido(req); if (!r) return;
        const agora = new Date();
        r.pedidos++; r.inicio ??= agora; r.fim = agora;
        r.pendentes.add(req); registroDoPedido.set(req, r);
      } catch {}
    });
    // a resposta é o que chegou do servidor (o que a MapTiler conta); só a 2xx conta como servida. Pedido abortado
    // por page.route não tem resposta; o que um route.fulfill responde aqui conta como resposta (é o que a página vê).
    ctx.on("response", (res) => {
      try {
        const u = res.url();
        if (!MAPTILER.test(u)) return;
        const req = res.request();
        const r = registroDoPedido.get(req) || doPedido(req); if (!r) return;
        r.pendentes.delete(req);
        r.respostas++; r.fim = new Date();
        const st = res.status();
        if (st >= 200 && st < 300) { r.respostas2xx++; if (ehTile(u)) { r.tiles2xx++; lerServidor(r, res); } }
        else if (st >= 400) r.erros[st] = (r.erros[st] || 0) + 1;
      } catch {}
    });
    ctx.on("requestfailed", (req) => {
      try {
        if (!MAPTILER.test(req.url())) return;
        const r = registroDoPedido.get(req) || doPedido(req); if (!r) return;
        r.pendentes.delete(req);
        const texto = String(req.failure()?.errorText || "sem descrição").slice(0, 60);
        if (CANCELADO.test(texto)) r.cancelados++;
        else r.falhas[texto] = (r.falhas[texto] || 0) + 1;
        r.fim = new Date();
      } catch {}
    });
    // a base de mapa escreve "[cena de mapa] … precisa da chave …" no console quando para sem ela (mapa-base.html › falhar)
    ctx.on("console", (msg) => {
      try {
        if (msg.type() !== "error" || !/^\[cena de mapa\][\s\S]*precisa da chave/i.test(msg.text())) return;
        let pg = null; try { pg = msg.page(); } catch {}
        const r = pg ? porPagina.get(pg) : null;
        if (r) r.erroDeChaveNoConsole = true;
        // a página que parou no erro da chave e que a pré-carga não vigia como cena (setContent, http, data:, um
        // arquivo que não é .html): não há registro dela, e o processo inteiro sai NÃO MEDIDO
        else naoMedirProcesso("uma página que a pré-carga não vigia como cena (setContent, http, data: ou arquivo que não é .html) parou no erro da chave da base de mapa");
      } catch {}
    });
    ctx.on("close", () => { for (const r of registros) if (r.ctx === ctx) finalizar(r); });
    const fechar = ctx.close;
    if (typeof fechar === "function") ctx.close = async function closeComConferencia(...a) {
      let paginas = []; try { paginas = ctx.pages(); } catch {}
      await relerTodas(paginas);
      await esperarConferencias();
      return fechar.apply(this, a);
    };
  } catch { naoMedirProcesso("a pré-carga não conseguiu vigiar um contexto do Chrome"); }
}

// ── o embrulho do chromium.launch, do newContext e do close ───────────────────────────────────────────────────
async function prepararNavegador(navegador, { comChave = true } = {}) {
  const ch = await prepararChaves();
  const novoContexto = navegador?.newContext;
  if (typeof novoContexto !== "function") { naoMedirProcesso("este playwright-core não tem browser.newContext, e a pré-carga não pôs a chave nem conferiu as cenas"); return; }
  navegador.newContext = async function newContextComChaves(...args) {
    const ctx = await novoContexto.apply(this, args);
    // o navegador conectado (connectOverCDP, connect) pode ser um perfil de verdade: os contextos dele não recebem a
    // chave, só se vigiam
    if (!comChave) contextosSemChave.add(ctx);
    else if (ch.script) {
      try { await ctx.addInitScript(ch.script); }
      catch (e) {
        try { await ctx.close(); } catch {}
        naoMedirProcesso(`a pré-carga não conseguiu pôr a chave da base de mapa num contexto do Chrome (${codigo(e)})`);
        throw new Error(`${NOME}: não consegui pôr a chave da base de mapa no contexto do Chrome (${codigo(e)}). Sem ela o portão mediria uma cena de mapa parada: NÃO MEDIDO, e a saída deste processo vira 2.`);
      }
    }
    vigiar(ctx);
    return ctx;
  };
  // os contextos que o navegador já tem (o padrão do navegador conectado): vigiados, sem a chave
  try { for (const c of (typeof navegador.contexts === "function" ? navegador.contexts() : [])) { contextosSemChave.add(c); vigiar(c); } } catch {}
  const fechar = navegador.close;
  if (typeof fechar === "function") navegador.close = async function closeComConferencia(...a) {
    const paginas = [];
    try { for (const c of navegador.contexts()) paginas.push(...c.pages()); } catch {}
    await relerTodas(paginas);
    await esperarConferencias();
    return fechar.apply(this, a);
  };
}

const embrulhados = new WeakSet();
function instalar(pw) {
  const chromium = pw?.chromium;
  if (!chromium || typeof chromium.launch !== "function") { naoMedirProcesso("o playwright-core não expôs chromium.launch, e a pré-carga não pôs a chave nem conferiu as cenas"); return; }
  if (embrulhados.has(chromium)) return;
  embrulhados.add(chromium);
  const lancar = chromium.launch;
  chromium.launch = async function launchComChaves(...args) {
    const navegador = await lancar.apply(this, args);
    await prepararNavegador(navegador);
    return navegador;
  };
  // o contexto persistente (um perfil em disco, que pode ser o de uma pessoa, logado): sem a chave, só vigiado; a
  // cena de mapa aberta nele sai NÃO MEDIDO (sem_chave)
  const persistente = chromium.launchPersistentContext;
  if (typeof persistente === "function") chromium.launchPersistentContext = async function launchPersistentContextVigiado(...args) {
    const ctx = await persistente.apply(this, args);
    await prepararChaves();   // os valores, para o filtro da saída
    contextosSemChave.add(ctx);
    vigiar(ctx);
    return ctx;
  };
  // o navegador conectado: os contextos dele, os que já existem e os novos, sem a chave e vigiados
  for (const nome of ["connectOverCDP", "connect"]) {
    const orig = chromium[nome];
    if (typeof orig === "function") chromium[nome] = async function conectarVigiado(...args) {
      const navegador = await orig.apply(this, args);
      await prepararNavegador(navegador, { comChave: false });
      return navegador;
    };
  }
}

// para o portao-mapa: o veredito de cada página que a pré-carga vigiou neste contexto (chame depois do ctx.close)
function paginasDoContexto(ctx) {
  return registros.filter((r) => r.ctx === ctx).map((r) => {
    finalizar(r);
    return { arquivo: r.arquivo, cena: r.cena, hash: r.hash, mapa: !!r.mapa, chave: r.chave, capturas: r.capturas, naoMedido: r.naoMedido, tipo: r.tipo,
      tilesServidor: r.tilesServidor, tilesSemServidor: r.tilesSemServidor, servidorNaoLido: r.servidorNaoLido };
  });
}

// ── a saída: o NÃO MEDIDO vira código ─────────────────────────────────────────────────────────────────────────
function argumentoDaCena(r) {
  // o _audit-til escreve o arquivo como recebeu (o qc-cena passa o caminho absoluto; uma pasta vira pasta\cena.html)
  const alvo = r.arquivo.toLowerCase();
  for (const a of process.argv.slice(2)) {
    if (a.startsWith("--")) continue;
    try { if (resolve(a).toLowerCase() === alvo) return a; } catch {}
    try { if (statSync(a).isDirectory() && resolve(join(a, basename(r.arquivo))).toLowerCase() === alvo) return join(a, basename(r.arquivo)); } catch {}
  }
  return r.arquivo;
}

// out/<proj> de um argumento da linha de comando (a pasta do vídeo, ou um arquivo dentro dela)
function projetoDoCaminho(a) {
  try {
    const rel = relative(join(RAIZ, "out"), resolve(a));
    if (!rel || rel.startsWith("..") || isAbsolute(rel)) return null;
    const proj = rel.split(/[\\/]/)[0];
    if (!/^[a-z0-9][a-z0-9_-]*$/i.test(proj)) return null;
    const p = join(RAIZ, "out", proj);
    return existsSync(join(p, "graphics")) ? p : null;
  } catch { return null; }
}

// A linha da saída deste processo (e, no processo de cima, a da rodada) em out/<proj>/_tmp/portoes-saidas.jsonl
function gravarSaidas(antes, depois) {
  const agora = new Date();
  const base = {
    quando: horaLocal(agora), quando_utc: agora.toISOString(), fuso: FUSO,
    processo: basename(process.argv[1] || "?"), pid: process.pid,
    rodada: process.env[ENV_RODADA] || null, raiz: process.env[ENV_RAIZ] || null, pre_cargas: PRE_CARGAS,
    saida_portao: antes, saida: depois,
  };
  // o qc-video-avanca: o veredito que ele imprimiu para cada cena, e o sha256 do arquivo dele (o `conferir` só aceita
  // a leitura com o portão que ela sabe ler)
  if (leituraDoVideo.ligada) {
    if (leituraDoVideo.resto) { lerLinhaDoVideo(leituraDoVideo.resto); leituraDoVideo.resto = ""; }
    base.saida_lida = { portao_sha256: leituraDoVideo.sha256, veredito_por_cena: { ...leituraDoVideo.porCena }, repetidas: [...leituraDoVideo.repetidas] };
  }
  const escreverEm = (pasta, linha) => {
    try {
      mkdirSync(join(pasta, "_tmp"), { recursive: true });
      appendFileSync(join(pasta, "_tmp", ARQ_SAIDAS), semChave(JSON.stringify(linha)) + "\n");
    } catch (e) { aviso(`não gravei a linha da saída em ${pasta} (${codigo(e)})`); }
  };
  // quantas cenas este processo abriu (de mapa ou não): com uma só, a saída 1 do portão é a reprovação dela
  const cenasDoProcesso = new Set(registros.filter((r) => r.pastaProj).map((r) => `${r.pastaProj.toLowerCase()}|${r.cena}|${r.hash}`)).size;
  const porPasta = new Map();
  for (const r of registros) {
    if (!r.pastaProj || !r.mapaNoFonte) continue;
    const k0 = r.pastaProj.toLowerCase();
    const g = porPasta.get(k0) || porPasta.set(k0, { pasta: r.pastaProj, cenas: new Map() }).get(k0);
    const k = `${r.cena}|${r.hash}`;
    const ja = g.cenas.get(k);
    g.cenas.set(k, { cena: r.cena, hash: r.hash, mapa: !!(ja?.mapa || r.mapa), nao_medido_tipo: ja?.nao_medido_tipo || r.tipo || null });
  }
  for (const { pasta, cenas } of porPasta.values()) {
    escreverEm(pasta, { tipo: "saida", ...base, cenas_no_processo: cenasDoProcesso, ...(geral.length ? { nao_medido_processo: geral.slice(0, 3) } : {}), cenas: [...cenas.values()] });
  }
  if (SOU_RAIZ) {
    const pastas = new Map();
    for (const r of registros) if (r.pastaProj) pastas.set(r.pastaProj.toLowerCase(), r.pastaProj);
    for (const a of process.argv.slice(2)) { if (a.startsWith("--")) continue; const p = projetoDoCaminho(a); if (p) pastas.set(p.toLowerCase(), p); }
    for (const pasta of pastas.values()) {
      escreverEm(pasta, { tipo: "rodada", ...base, inicio: horaLocal(INICIO_RAIZ), inicio_utc: INICIO_RAIZ.toISOString(), fim: base.quando, fim_utc: base.quando_utc });
    }
  }
}

function aoSair(codigoDeSaida) {
  for (const r of registros) finalizar(r);
  const nm = registros.filter((r) => r.naoMedido);
  // o gancho de prova não muda a saída (é com ele que se provam os portões), mas a linha deste processo não prova medida
  const estranhas = problemaDasPreCargas(PRE_CARGAS);
  if (estranhas && registros.some((r) => r.mapaNoFonte)) aviso(`as linhas deste processo não provam medida para o conferir: ${estranhas}.`);
  const antes = codigoDeSaida ?? 0;
  let depois = antes;
  if (nm.length || geral.length) {
    const portao = basename(process.argv[1] || "?");
    if (/^_audit-til\.mjs$/i.test(portao)) for (const r of nm) escrever(1, `${argumentoDaCena(r)}\tERRO\t\tNÃO MEDIDO (${NOME}): ${r.naoMedido}\n`);
    for (const m of geral) aviso(`NÃO MEDIDO — ${portao}: ${m}.`);
    for (const r of nm) aviso(`NÃO MEDIDO — ${r.cena} (${portao}): ${r.naoMedido}. O que este portão disse desta cena não vale como aprovação nem como reprovação.`);
    const outraMedida = !geral.length && registros.some((r) => !r.naoMedido);
    depois = antes === 0 || (antes === 1 && !outraMedida) ? NAO_MEDIDO : antes;
    if (depois !== antes) { process.exitCode = depois; aviso(`a saída deste processo passou de ${antes} para ${depois} (NÃO MEDIDO).`); }
    else if (antes === 1) aviso("a saída 1 fica: outra cena deste processo foi medida; a reprovação dela vale, e as cenas acima continuam NÃO MEDIDAS.");
  }
  gravarSaidas(antes, depois);
}

// ── o gancho: o playwright-core só se carrega quando o processo o importa ─────────────────────────────────────
let SOU_RAIZ = false, INICIO_RAIZ = null;
function propagar() {
  // os filhos que o processo dispara sem env (o qc-cena e os portões dele) herdam a pré-carga e a rodada; a janela não muda
  const eu = import.meta.url;
  const atual = process.env.NODE_OPTIONS || "";
  if (!atual.includes(eu)) process.env.NODE_OPTIONS = `${atual ? `${atual} ` : ""}--import=${eu}`;
  if (!process.env[ENV_RODADA]) {
    const raiz = basename(process.argv[1] || "?");
    INICIO_RAIZ = new Date();
    SOU_RAIZ = true;
    process.env[ENV_RODADA] = `${raiz}@${horaLocal(INICIO_RAIZ).replace(/\D/g, "")}-${process.pid}`;
    process.env[ENV_RAIZ] = raiz;
  }
}

function ligar() {
  process.on("exit", aoSair);
  if (typeof modulo.registerHooks === "function") {
    try {
      modulo.registerHooks({
        load(url, context, nextLoad) {
          if (ENTRADA_PW.test(url)) {
            try { instalar(modulo.createRequire(fileURLToPath(url))("./index.js")); }
            catch (e) { naoMedirProcesso(`a pré-carga não conseguiu embrulhar o playwright-core (${codigo(e)})`); }
          }
          const carregado = nextLoad(url, context);
          // o require("playwright-core") CommonJS não passa pelo index.mjs: ao index.js se acrescenta, na memória, a
          // linha que entrega o module.exports a instalar() logo depois de ele carregar
          if (ENTRADA_PW_CJS.test(url)) {
            try {
              const fonte = carregado.source == null ? readFileSync(fileURLToPath(url), "utf8") : String(carregado.source);
              return { ...carregado, format: carregado.format || "commonjs", source: fonte + APENDICE_CJS };
            } catch (e) { naoMedirProcesso(`a pré-carga não conseguiu ligar o playwright-core carregado por require (${codigo(e)})`); }
          }
          return carregado;
        },
      });
      return;
    } catch { /* cai na reserva */ }
  }
  // A reserva (Node sem module.registerHooks): o playwright-core do canal, já, pelo mesmo arquivo que os portões importam.
  let entrada;
  try { entrada = import.meta.resolve("playwright-core"); } catch { return; }   // sem ele, o portão sai NÃO MEDIDO sozinho
  try { instalar(modulo.createRequire(fileURLToPath(entrada))("./index.js")); }
  catch (e) { naoMedirProcesso(`a pré-carga não conseguiu carregar o playwright-core na reserva (${codigo(e)})`); }
}

// ── o `conferir`: depois da rodada, o que o jsonl, o portao-mapa.jsonl, as saídas e o _portao.json provam ──────
function lerJsonl(arq) {
  let txt = ""; try { txt = readFileSync(arq, "utf8"); } catch { return []; }
  const out = [];
  for (const l of txt.split(/\r?\n/)) { if (!l.trim()) continue; try { out.push(JSON.parse(l)); } catch {} }
  return out;
}
const instante = (l) => {
  if (l.aberta_utc) return Date.parse(l.aberta_utc);
  if (l.quando_utc) return Date.parse(l.quando_utc);
  const h = l.aberta || l.hora_inicio || l.quando;
  return h ? Date.parse(`${String(h).replace(" ", "T")}${DESLOCAMENTO}`) : NaN;
};
// o tipo do NÃO MEDIDO; as linhas de antes de 04/10 só têm o motivo
const tipoNm = (l) => l.nao_medido_tipo || (/requestAnimationFrame/.test(l.nao_medido) ? "raf" : /sem a chave/.test(l.nao_medido) ? "sem_chave" : /parou/.test(l.nao_medido) ? "erro_cena" : "nao_conferida");
const NOME_TIPO = {
  raf: "rAF trocado pelo portão", sem_chave: "sem a chave", erro_cena: "a cena declarou erro", erros_mapa: "o MapLibre acusou erro",
  maptiler_recusou: "a MapTiler recusou ou falhou", sem_tile_2xx: "nenhum tile 2xx", mapa_incompleto: "foto com pedido à MapTiler em curso",
  nao_relida: "não relida no fechamento", nao_conferida: "não conferida",
};
const daQcCena = (l) => l.raiz === "qc-cena.mjs" && typeof l.rodada === "string" && !!l.rodada;
// a rodada que fica: a pedida, ou a de linha mais recente
function escolherRodada(linhas, pedida) {
  const por = new Map();
  for (const l of linhas) { const g = por.get(l.rodada) || por.set(l.rodada, []).get(l.rodada); g.push(l); }
  if (pedida) return por.has(pedida) ? { id: pedida, linhas: por.get(pedida) } : null;
  let melhor = null;
  for (const [id, ls] of por) { const fim = Math.max(...ls.map(instante)); if (!melhor || fim > melhor.fim) melhor = { id, linhas: ls, fim }; }
  return melhor;
}
// o começo de uma rodada pelo id dela (processo@AAAAMMDDhhmmss-pid, hora local, no FUSO do topo deste arquivo)
const inicioDoId = (id) => {
  const m = /@(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})-/.exec(String(id || ""));
  return m ? Date.parse(`${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}${DESLOCAMENTO}`) : NaN;
};
const sha256Arq = (arq) => { try { return createHash("sha256").update(readFileSync(arq)).digest("hex"); } catch { return null; } };
const horaDe = (l) => (l && (l.quando || l.aberta)) || "?";
const maisRecente = (xs) => [...xs].sort((a, b) => instante(b) - instante(a))[0] || null;
// o que a medida do portao-mapa tem de trazer para provar (as regras da linha 2 do portao-mapa)
const PASSO_MAXIMO = 0.5, PISO_DO_MOLDE = 3;
// a versão da linha do portao-mapa que prova, por portão: a 3 grava as pré-cargas do processo, as fotos e o "no ar" do
// patamar, e o til não mudou desde ela; no rodapé, só a 5, que mede o crédito declarado onde estiver, a letra por linha
// de cada nó de texto e o crédito em flex ou grid (a 4 não via a pílula de duas linhas da s08, deixava a letra apagada
// passar pela caixa unida e não media o crédito em flex: o cético da parte D, 05/10)
const VERSAO_PORTAO_MAPA = { til: 3, rodape: 5 };
// (versão 5) o HTML que declara um crédito (o papel do molde: começa com crédito ou termina com fonte). Desde a rodada 3,
// como a página o lê: o valor do atributo com aspas duplas, simples ou sem aspas e as entidades decodificadas
// ("nota fonte", "cr&eacute;dito"), e o papel posto por script (dataset.qcPapel = "…", setAttribute("data-qc-papel", "…"))
const PAPEL_DE_CREDITO = /^cr[ée]dito|fonte$/i;
const ENTIDADES = { eacute: "é", Eacute: "É", amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: "\u00a0" };
const desentidade = (v) => String(v).replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);?/gi, (m, e) => {
  try { return e[0] === "#" ? String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : (ENTIDADES[e] ?? m); } catch { return m; }
});
const declaraCreditoNoFonte = (fonte) => {
  for (const m of fonte.matchAll(/data-qc-papel\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/gi)) if (PAPEL_DE_CREDITO.test(desentidade(m[1] ?? m[2] ?? m[3]))) return true;
  for (const m of fonte.matchAll(/(?:qcPapel|data-qc-papel)["'`]?\s*\]?\s*[=,:]\s*(["'`])((?:(?!\1)[^\\]|\\.)*)\1/g)) if (PAPEL_DE_CREDITO.test(desentidade(m[2]))) return true;
  return false;
};
const REGUA_DO_MOLDE = { til: "scripts/_audit-til.mjs", rodape: "scripts/qc-rodape-contraste.mjs" };

async function conferirRodada(args) {
  if (!process.env.REGIE_MOTOR) { console.error("falta REGIE_MOTOR=<motor> no mesmo comando (a pasta da pré-v1 da Régie)"); process.exitCode = 2; return; }
  const alvo = args.find((a) => !a.startsWith("--"));
  const desdeTxt = (args.find((a) => a.startsWith("--desde=")) || "").slice(8);
  const rodadaPedida = (args.find((a) => a.startsWith("--rodada=")) || "").slice(9) || null;
  const so = new Set((args.find((a) => a.startsWith("--so=")) || "").slice(5).split(",").map((x) => x.trim().replace(/\.html$/i, "")).filter(Boolean));
  if (!alvo) {
    console.error("uso: node ferramentas/chaves-nos-portoes.mjs conferir out/<proj> [--desde=\"AAAA-MM-DD hh:mm:ss\"] [--so=s03,s05] [--rodada=<id>]   (hora local, no FUSO do topo deste arquivo)");
    process.exitCode = 2; return;
  }
  const pasta = [resolve(alvo), join(RAIZ, alvo), join(RAIZ, "out", alvo)].find((p) => existsSync(join(p, "graphics")));
  if (!pasta) { console.error(`não achei ${alvo}/graphics`); process.exitCode = 2; return; }
  const desde = desdeTxt ? Date.parse(`${desdeTxt.trim().replace(" ", "T")}${DESLOCAMENTO}`) : null;
  if (desdeTxt && !Number.isFinite(desde)) { console.error(`--desde inválido: ${desdeTxt} (use "AAAA-MM-DD hh:mm:ss", hora local, no FUSO do topo deste arquivo)`); process.exitCode = 2; return; }
  const desdeOk = (l) => desde == null || instante(l) >= desde;
  const { SCRIPTS_GATES_QC_CENA, NOMES_GATES_QC_CENA, chavesGatesEsperadosQcCena } = await import(pathToFileURL(join(RAIZ, "scripts", "lib", "qc-cena-gates.mjs")).href);
  // a marca de hoje (o hash_marca que o qc-cena e o portao-mapa gravam): a marca importa o motor, como no portao-mapa
  let hashMarca = null, faltaMarca = null;
  try {
    const { lerMarca, hashDependenciasMarca } = await import(pathToFileURL(join(RAIZ, "scripts", "lib", "marca-tokens.mjs")).href);
    hashMarca = hashDependenciasMarca(lerMarca());
  } catch (e) { faltaMarca = `não calculei o hash da marca de hoje (${codigo(e)})`; }
  const reguaHoje = Object.fromEntries(Object.entries(REGUA_DO_MOLDE).map(([k, a]) => [k, sha256Arq(join(RAIZ, a))]));
  // (versão 5) o código do portao-mapa de hoje: a linha do rodapé só prova se foi medida por ele
  const portaoHoje = sha256Arq(ARQ_PORTAO_MAPA);
  const credNoFonte = new Map();
  const linhas = lerJsonl(join(pasta, "_tmp", "maptiler-portoes.jsonl"));
  const medidasMapa = lerJsonl(JSONL_PORTAO_MAPA_DE(pasta));
  const saidas = lerJsonl(join(pasta, "_tmp", ARQ_SAIDAS));
  const rodadasRegistradas = new Map();
  for (const s of saidas) if (s.tipo === "rodada" && s.rodada) rodadasRegistradas.set(s.rodada, s);
  let portao = {};
  try { portao = JSON.parse(readFileSync(join(pasta, "_portao.json"), "utf8").replace(/^\uFEFF/, "")); } catch {}
  const g = join(pasta, "graphics");
  const cenas = [];
  for (const f of readdirSync(g).filter((x) => x.endsWith(".html") && !x.startsWith("_")).sort()) {
    const bruto = readFileSync(join(g, f));
    const fonte = bruto.toString("utf8");
    if (!BASE_DE_MAPA_NO_FONTE.test(fonte) || (so.size && !so.has(basename(f, ".html")))) continue;
    const gates = chavesGatesEsperadosQcCena(fonte, { existe: (s) => existsSync(join(RAIZ, s)) })
      .filter((k) => k !== "src")   // o src-existe não abre o Chrome
      .map((k) => ({ chave: k, processo: basename(SCRIPTS_GATES_QC_CENA[k].script) }));
    const sha1 = createHash("sha1").update(bruto).digest("hex");
    // a cena que pode ter vídeo: o teste é largo de propósito (casa também <video> em comentário e o vídeo que a cena
    // cria fora do documento, como a s03); quem diz se havia vídeo a medir é o próprio qc-video-avanca (N/A)
    cenas.push({ f, cena: basename(f, ".html"), sha1, hash: sha1.slice(0, 12), gates, temVideo: /<video\b|createElement\(\s*["']video["']\s*\)/i.test(fonte) });
    credNoFonte.set(basename(f, ".html"), declaraCreditoNoFonte(fonte));
  }
  console.log(`${basename(pasta)}: ${cenas.length} cena(s) que carregam a base de mapa${so.size ? ` (só as do --so=${[...so].join(",")})` : ""}: ${cenas.map((c) => c.cena).join(", ") || "nenhuma"}`);
  if (faltaMarca) console.log(`  ⚠ ${faltaMarca}: nenhuma medida do portao-mapa se aceita sem ela.`);
  const problemas = [], reprovacoes = [];
  const problema = (cena, o_que) => problemas.push(`${cena}: ${o_que}`);
  const reprovou = (cena, o_que) => reprovacoes.push(`${cena}: ${o_que}`);

  // por que uma linha do portao-mapa com veredito 0 ou 1 NÃO prova a medida com o mapa (vazio = prova)
  const semProva = (l, pm, { semVersao = false } = {}) => {
    const m = [];
    const vmin = VERSAO_PORTAO_MAPA[pm];
    if (!semVersao && !(l.versao >= vmin)) m.push(pm === "rodape" && l.versao >= VERSAO_PORTAO_MAPA.til
      ? `linha de antes da versão 5 do rodapé (versão ${l.versao}): não media o crédito declarado fora da faixa, a letra por linha de cada nó de texto nem o crédito em flex ou grid`
      : `linha de antes do conserto do 3º cético de 04/10 (versão ${l.versao ?? "?"}, não ${vmin})`);
    const pcs = problemaDasPreCargas(l.pre_cargas);
    if (pcs) m.push(pcs);
    if (l.mapa !== true) m.push("a página não tinha o mapa (mapa:false)");
    if (l.mapa_no_fonte !== true) m.push("o HTML não carregava a base");
    if (l.eh_mapa !== true) m.push("a medida não tratou a cena como de mapa (eh_mapa)");
    if (l.carregou !== true) m.push("a página não chegou ao load (carregou)");
    if (l.pre_carga !== true) m.push("sem a pré-carga");
    if (l.chave !== true) m.push("sem a chave");
    if (!(l.maptiler?.tiles_2xx > 0)) m.push("nenhum tile 2xx");
    if (somar(l.maptiler?.respostas_erro) || somar(l.maptiler?.falhas)) m.push("a MapTiler respondeu erro ou falhou");
    if (l.erro_cena) m.push("a cena declarou erro");
    if (l.erros_mapa > 0) m.push("o MapLibre acusou erro");
    if (l.aguardar_mapa?.estourou?.length) m.push("o __aguardarMapa estourou");
    if (l.nao_medido) m.push("NÃO MEDIDO");
    const pc = l.pre_carga_veredito;
    if (!pc || pc.erro || !(pc.paginas > 0) || pc.nao_medido) m.push(`a pré-carga não aceitou a página${pc?.nao_medido_tipo ? ` (${pc.nao_medido_tipo})` : ""}`);
    if (pc && pc.mapa !== true) m.push("a pré-carga não viu o mapa na página");
    const srv = pc ? problemaDoServidor(pc.tiles_2xx_servidor, pc.tiles_2xx_sem_servidor) : null;
    if (srv) m.push(srv);
    if (pc && pc.chave !== true) m.push("a pré-carga não viu a chave na página");
    // as fotos: as que a medida tirou (o rodapé, uma por amostra com crédito no ar; o til, nenhuma) são as que a
    // pré-carga contou, e fecham com as amostras
    const v = l.valores || {};
    const fotos = pm === "rodape" ? v.fotos : 0;
    if (pm === "rodape" && !(Number.isInteger(v.fotos) && Number.isInteger(v.com_credito) && Number.isInteger(v.fotos_sem_medida) &&
      v.fotos === v.com_credito + v.fotos_sem_medida && !(v.com_credito === 0 && v.pior))) m.push("as fotos do rodapé não fecham com as amostras com crédito e o pior");
    // (rodada 4) o verde "sem crédito de rodapé" em cena cujo HTML declara um crédito: a medida não achou o crédito que a
    // cena põe na tela (o crédito da MapTiler fica nela o mapa inteiro). É a rede de segurança do achador: o recorte que o
    // apagava (o container-type, o overflow-clip-margin) saía verde assim, e o conferir confiava no instantes_visto
    if (pm === "rodape" && l.veredito === 0 && !v.pior && credNoFonte.get(l.cena)) m.push(`verde "${String(v.erro || l.veredito_txt || "sem crédito de rodapé").slice(0, 40)}", e o HTML declara um crédito: a medida não achou o crédito que a cena põe na tela`);
    // (versão 5) as três famílias do rodapé (as folhas do molde, o crédito com filhos e o crédito por linha) somam as fotos
    if (pm === "rodape" && l.versao >= VERSAO_PORTAO_MAPA.rodape) {
      const fam = [v.folhas, v.com_filhos, v.por_linha];
      const inteiras = fam.every((x) => x && ["fotos", "com_credito", "fotos_sem_medida"].every((k) => Number.isInteger(x[k])));
      if (!inteiras || ["fotos", "com_credito", "fotos_sem_medida"].some((k) => fam.reduce((s, x) => s + x[k], 0) !== v[k])) m.push("as fotos das três famílias do rodapé (folhas, com_filhos, por_linha) não somam as da linha");
      // o código que mediu: o de hoje (o cético da rodada 1: a linha de um código intermediário também dizia versão 5)
      if (!portaoHoje) m.push(`não li o ${ARQ_PORTAO_MAPA.split("\\").join("/")}`);
      else if (l.portao_sha256 !== portaoHoje) m.push(`medida com outro código do portao-mapa (portao_sha256 ${String(l.portao_sha256 || "ausente").slice(0, 8)}…, e o de hoje é ${portaoHoje.slice(0, 8)}…)`);
      // os créditos declarados: a lista (não vazia, se o HTML declara um), a linha medida de todo declarado que apareceu,
      // e nenhum declarado sem medida no verde
      const pl = v.por_linha || {};
      const decs = Array.isArray(pl.declarados) ? pl.declarados : null;
      if (!decs || !Array.isArray(pl.linhas) || !Array.isArray(pl.raizes)) m.push("a linha não traz os créditos declarados, as linhas e as raízes do crédito por linha");
      else {
        if (credNoFonte.get(l.cena) && !decs.length) m.push("o HTML declara um crédito, e a linha não lista nenhum");
        if (decs.some((d) => !(Number.isInteger(d.instantes_visto) && Number.isInteger(d.linhas_medidas)))) m.push("crédito declarado sem a conta dos instantes e das linhas medidas");
        // (rodada 3) a conta das raízes de sombra fechadas (pelo CDP) e das molduras: a linha que não as traz não as olhou
        if (!Number.isInteger(pl.sombras_fechadas) || !Array.isArray(pl.molduras)) m.push("a linha não traz a conta das raízes de sombra fechadas e das molduras");
        // (rodada 4) a conta dos nós de texto com tinta e sem caixa de área positiva, e as linhas que a tinta deles tocou
        if (!Number.isInteger(pl.nos_sem_caixa) || !Array.isArray(pl.linhas_com_tinta_sem_caixa)) m.push("a linha não traz a conta dos nós de texto sem caixa de área positiva");
        // no verde (a reprovação medida vale mesmo citando um crédito sem medida: ela continua reprovação)
        if (l.veredito === 0) {
          const vistosSemLinha = decs.filter((d) => d.instantes_visto > 0 && !(d.linhas_medidas > 0));
          if (vistosSemLinha.length) m.push(`verde com crédito declarado que apareceu sem linha medida (${vistosSemLinha.map((d) => d.declarado).slice(0, 3).join(", ")})`);
          if (decs.some((d) => d.instantes_visto > 0) && !(pl.com_credito > 0)) m.push("verde com crédito declarado visto e nenhuma foto do crédito por linha com medida");
          if ((v.declarados_sem_medida || []).length) m.push("verde com crédito declarado sem medida");
          if ((pl.molduras || []).length) m.push("verde com moldura de crédito declarado ou sem leitura");
          if ((pl.linhas_com_tinta_sem_caixa || []).length) m.push("verde com linha medida sob a tinta de um nó de texto sem caixa");
          // (rodada 5) o nó com tinta e sem caixa de área positiva em crédito declarado, toque ele ou não uma linha medida:
          // a tinta existe, e a zona que diz onde ela cai é só uma estimativa (o letter-spacing negativo a leva tão longe
          // quanto quiser: o p4b1b e o p4b1c do cético v5.1 saíam verdes com a conta em 12 e nenhuma linha citada)
          if (pl.nos_sem_caixa > 0) m.push(`verde com ${pl.nos_sem_caixa} nó(s) de texto com tinta e sem caixa de área positiva em crédito declarado: a medida não sabe onde a tinta deles cai`);
        }
      }
    }
    if (pc && pc.capturas !== fotos) m.push(`a pré-carga contou ${pc.capturas ?? "?"} foto(s) da cena, e a medida diz ${fotos ?? "?"}`);
    // os instantes: os do molde inteiros e, no mínimo, os do passo de 0 até o último deles
    const inst = l.instantes, nMolde = pm === "rodape" ? 4 : 5;
    if (!inst || !Array.isArray(inst.molde) || inst.molde.length !== nMolde || inst.molde.some((t) => typeof t !== "number" || !Number.isFinite(t))) m.push("a linha não traz os instantes do molde");
    else if (typeof l.passo === "number" && l.passo > 0) {
      const minimo = Math.floor(Math.max(...inst.molde) / l.passo + 1e-9) + 1;
      if (!(inst.n >= minimo) || v.amostras !== inst.n) m.push(`${inst.n ?? "?"} instante(s) (amostras: ${v.amostras ?? "?"}), menos que os ${minimo} do passo até o último instante do molde`);
    }
    if (!(typeof l.passo === "number" && l.passo <= PASSO_MAXIMO)) m.push(`passo ${l.passo ?? "?"} s, acima de ${PASSO_MAXIMO}`);
    if (pm === "rodape" && v.piso !== PISO_DO_MOLDE) m.push(`piso ${v.piso ?? "?"}, não ${PISO_DO_MOLDE}`);
    if (!hashMarca) m.push(faltaMarca); else if (l.hash_marca !== hashMarca) m.push("medida com outra marca (hash_marca)");
    if (!reguaHoje[pm]) m.push("não li a régua do molde"); else if (l.regua_molde?.sha256 !== reguaHoje[pm]) m.push("medida com outra régua do molde");
    return m;
  };
  // a medida do portao-mapa de uma cena e portão. A reprovação válida vale mesmo com um verde depois (o rodapé de
  // cena de mapa varia com os tiles e o tempo: rodar de novo até passar não apaga a reprovação)
  const avaliarMapa = (cena, pm, casa) => {
    const ls = medidasMapa.filter((l) => l.cena === cena && l.portao === pm && casa(l));
    const comVeredito = ls.filter((l) => l.veredito === 0 || l.veredito === 1);
    const validas = comVeredito.filter((l) => !semProva(l, pm).length);
    // (rodada 3) no rodapé, a reprovação de uma linha da versão 3 ou 4 do mesmo HTML, válida em tudo menos na versão,
    // continua valendo: as famílias dela (as folhas e o crédito com filhos) continuam na 5, iguais
    const antigas = pm === "rodape" ? comVeredito.filter((l) => l.veredito === 1 && l.versao >= VERSAO_PORTAO_MAPA.til &&
      l.versao < VERSAO_PORTAO_MAPA.rodape && !semProva(l, pm, { semVersao: true }).length) : [];
    const reprov = [...validas.filter((l) => l.veredito === 1), ...antigas];
    if (reprov.length) {
      const l = maisRecente(reprov);
      return { estado: "reprovou", linha: l, n: reprov.length, verdes: validas.filter((v) => v.veredito === 0).length };
    }
    const verde = maisRecente(validas.filter((l) => l.veredito === 0));
    if (verde) return { estado: "passou", linha: verde, nmDepois: ls.filter((x) => x.veredito !== 0 && x.veredito !== 1 && instante(x) > instante(verde)).length };
    const invalida = maisRecente(comVeredito);
    if (invalida) return { estado: "sem_prova", linha: invalida, motivos: semProva(invalida, pm) };
    const nm = maisRecente(ls.filter((l) => l.veredito !== 0 && l.veredito !== 1));
    if (nm) return { estado: "nao_medido", linha: nm };
    return { estado: "falta" };
  };
  // (rodada 3) a versão da linha que reprovou, quando não é a de hoje (a reprovação de uma versão anterior vale)
  const pm_versao = (l) => (l.portao === "rodape" && l.versao < VERSAO_PORTAO_MAPA.rodape ? `, da versão ${l.versao}` : "");
  const descrever = (av) => {
    const l = av.linha;
    if (av.estado === "passou") return `passou (veredito 0, ${l.maptiler?.tiles_2xx ?? "?"} tiles 2xx, em ${horaDe(l)})${av.nmDepois ? ` (${av.nmDepois} NÃO MEDIDO depois, que não a desfaz)` : ""}`;
    if (av.estado === "reprovou") return `REPROVOU (veredito 1${pm_versao(l)} em ${horaDe(l)}: ${String(l.veredito_txt || "").slice(0, 100)})${av.n > 1 ? `, em ${av.n} medidas` : ""}${av.verdes ? `; ${av.verdes} medida(s) verde(s) com este HTML, que não a desfazem` : ""}`;
    if (av.estado === "sem_prova") return `SEM PROVA (veredito ${l.veredito} em ${horaDe(l)}, mas: ${av.motivos.join("; ")})`;
    if (av.estado === "nao_medido") return `NÃO MEDIDO (${String(l.nao_medido || l.veredito_txt || "").slice(0, 100)})`;
    return "FALTA";
  };
  // a saída 1 de um portão que mediu só esta cena, com este HTML: a reprovação dela, que um verde depois não apaga
  const reprovacoesDaSaida = (c, processo) => saidas.filter((s) => s.tipo === "saida" && s.processo === processo && desdeOk(s) && !problemaDasPreCargas(s.pre_cargas) &&
    s.saida_portao === 1 && s.cenas_no_processo === 1 && !s.nao_medido_processo && Array.isArray(s.cenas) && s.cenas.length === 1 &&
    s.cenas[0].cena === c.cena && s.cenas[0].hash === c.hash && !s.cenas[0].nao_medido_tipo).sort((a, b) => instante(b) - instante(a));
  const descreverReprovacoes = (rep) => `REPROVOU (saída 1 de um processo que mediu só esta cena) em ${rep.length} medida(s)${desde != null ? ` desde ${desdeTxt}` : ""}, a última em ${horaDe(rep[0])}${daQcCena(rep[0]) ? ` [${rep[0].rodada}]` : " (avulsa)"}`;
  // o qc-video-avanca de uma cena de mapa: cada linha da pré-carga, com a saída do mesmo processo (pid, processo e
  // rodada; gravada ao sair, até 30 min depois da página). Vale a reprovação válida que houver; senão o "✓" mais
  // recente; senão o N/A mais recente; senão o mais recente do resto (NÃO MEDIDO ou SEM PROVA)
  const avaliarVideo = (c) => {
    const ls = linhas.filter((l) => l.cena === c.cena && l.hash === c.hash && l.processo === VIDEO_AVANCA.processo && desdeOk(l));
    if (!ls.length) return { estado: "falta", txt: "FALTA" };
    const julgar = (l) => {
      if (l.nao_medido) return { estado: "nao_medido", porque: `a pré-carga: ${NOME_TIPO[tipoNm(l)] || tipoNm(l)}` };
      const pcs = problemaDasPreCargas(l.pre_cargas) || problemaDoServidor(l.tiles_2xx_servidor, l.tiles_2xx_sem_servidor);
      if (pcs) return { estado: "sem_prova", porque: pcs };
      if (!(l.chave === true && l.mapa === true && l.tiles_2xx > 0 && l.relida === true)) return { estado: "sem_prova", porque: "sem a chave, sem o mapa, sem tile 2xx ou não relida" };
      const s = saidas.find((x) => x.tipo === "saida" && x.processo === l.processo && x.pid === l.pid && x.rodada === l.rodada &&
        instante(x) >= instante(l) - 5_000 && instante(x) - instante(l) <= 30 * 60_000);
      if (!s) return { estado: "nao_medido", porque: "a saída do processo não ficou registrada (ele morreu antes de sair, ou a linha é de outro processo)" };
      const pcs2 = problemaDasPreCargas(s.pre_cargas);
      if (pcs2) return { estado: "sem_prova", porque: pcs2 };
      const lida = s.saida_lida;
      if (!lida || typeof lida !== "object" || !lida.veredito_por_cena) return { estado: "nao_medido", porque: "a saída do processo não traz o veredito por cena (linha de antes do 3º cético, 04/10)" };
      if (lida.portao_sha256 !== VIDEO_AVANCA.sha256) return { estado: "nao_medido", porque: `o qc-video-avanca que rodou (sha256 ${String(lida.portao_sha256 || "?").slice(0, 8)}…) não é o que a pré-carga sabe ler (${VIDEO_AVANCA.sha256.slice(0, 8)}…): releia o portão e atualize o VIDEO_AVANCA` };
      if ((lida.repetidas || []).includes(c.cena)) return { estado: "nao_medido", porque: "o processo mediu duas cenas com este nome, e a saída não diz qual é qual" };
      const v = lida.veredito_por_cena[c.cena];
      const sp = s.saida_portao;
      const outras = Object.entries(lida.veredito_por_cena).filter(([k]) => k !== c.cena).map(([, x]) => x);
      if (v === "parado") return { estado: "reprovou", porque: `"⛔ TODOS PARADOS" (o processo saiu ${sp})` };
      if (v === "erro") return { estado: "nao_medido", porque: `o portão disse ERRO na cena (o processo saiu ${sp})` };
      if (v === "avanca" || v === "sem_video") {
        // a saída do portão tem de concordar: 0, ou 1/2 que outra cena do mesmo processo explica
        const explica = sp === 0 || (sp === 1 && outras.includes("parado")) || (sp === 2 && outras.includes("erro"));
        if (!explica) return { estado: "nao_medido", porque: `o portão disse "${v === "avanca" ? "✓" : "sem <video>"}" da cena, mas o processo saiu ${sp ?? "sem código"}, e nenhuma outra cena dele explica a saída` };
        return v === "avanca"
          ? { estado: "passou", porque: `"✓", o vídeo avança (o processo saiu ${sp})` }
          : { estado: "sem_video", porque: "o portão não achou <video> no documento (\"sem <video> na cena — nada a medir\"): não havia vídeo a medir" };
      }
      return { estado: "nao_medido", porque: `a saída do portão não citou a cena (o processo saiu ${sp ?? "sem código"})` };
    };
    const js = ls.map((l) => ({ l, ...julgar(l) })).sort((a, b) => instante(b.l) - instante(a.l));
    const rep = js.filter((j) => j.estado === "reprovou");
    const j = rep[0] || js.find((x) => x.estado === "passou") || js.find((x) => x.estado === "sem_video") || js[0];
    const quando = `em ${horaDe(j.l)}`;
    if (j.estado === "reprovou") return { ...j, txt: `REPROVOU (${j.porque}, ${quando})${rep.length > 1 ? `, em ${rep.length} medidas` : ""}` };
    if (j.estado === "passou") return { ...j, txt: `medido com o mapa: ${j.porque} (${j.l.tiles_2xx} tiles 2xx, ${quando})` };
    if (j.estado === "sem_video") return { ...j, txt: `N/A, ${j.porque} (a cena aberta com o mapa: ${j.l.tiles_2xx} tiles 2xx, ${quando})` };
    if (j.estado === "sem_prova") return { ...j, txt: `SEM PROVA (${j.porque}, ${quando})` };
    return { ...j, txt: `NÃO MEDIDO (${j.porque}, ${quando})` };
  };

  if (desde != null) {
    console.log(`\nA. A rodada do qc-cena desde ${desdeTxt} (${FUSO})${rodadaPedida ? `, a ${rodadaPedida}` : " (a mais recente de cada cena)"}, por portão que abre o Chrome. Só linha de processo que o qc-cena disparou; a reprovação medida de qualquer rodada desde --desde fica:`);
    for (const c of cenas) {
      const daCena = linhas.filter((l) => l.cena === c.cena && l.hash === c.hash && instante(l) >= desde);
      const doQc = daCena.filter(daQcCena);
      const avulsas = daCena.length - doQc.length;
      const rod = escolherRodada(doQc, rodadaPedida);
      const partes = [];
      for (const gt of c.gates) {
        if (gt.chave === "til") { partes.push("til: a medida é a do portao-mapa, em C"); continue; }
        const rep = reprovacoesDaSaida(c, gt.processo);
        const nota = rep.length ? `; ${descreverReprovacoes(rep)}` : "";
        if (rep.length) reprovou(c.cena, `${gt.chave}: ${descreverReprovacoes(rep)}`);
        if (!rod) { partes.push(`${gt.chave}: FALTA${nota}`); problema(c.cena, `${gt.chave} sem linha de rodada do qc-cena`); continue; }
        const ls = rod.linhas.filter((l) => l.processo === gt.processo).sort((a, b) => instante(a) - instante(b));
        if (!ls.length) { partes.push(`${gt.chave}: FALTA${nota}`); problema(c.cena, `${gt.chave} sem linha na rodada ${rod.id}`); continue; }
        // o qc-cena re-mede sozinho o veredito suspeito do lote (o desempate) e crava o da re-medida: vale a última
        // linha da rodada para a MEDIDA; a reprovação de qualquer medida fica (nota)
        const ult = ls[ls.length - 1];
        const antes = ls.length > 1 ? `; ${ls.length - 1} medida(s) antes, na mesma rodada${ls.slice(0, -1).some((l) => l.nao_medido) ? ", com NÃO MEDIDO" : ""}` : "";
        if (ult.nao_medido) {
          const tipo = tipoNm(ult);
          partes.push(`${gt.chave}: NÃO MEDIDO (${NOME_TIPO[tipo] || tipo}${antes})${nota}`); problema(c.cena, `${gt.chave} NÃO MEDIDO (${NOME_TIPO[tipo] || tipo})`); continue;
        }
        const pcs = problemaDasPreCargas(ult.pre_cargas) || problemaDoServidor(ult.tiles_2xx_servidor, ult.tiles_2xx_sem_servidor);
        if (pcs) { partes.push(`${gt.chave}: SEM PROVA (${pcs})${nota}`); problema(c.cena, `${gt.chave} SEM PROVA: ${pcs}`); continue; }
        if (ult.chave !== true) { partes.push(`${gt.chave}: SEM A CHAVE${nota}`); problema(c.cena, `${gt.chave} sem a chave`); continue; }
        partes.push(`${gt.chave}: com a chave (${ult.pedidos_maptiler || 0} pedidos, ${ult.tiles_2xx ?? "?"} tiles 2xx${antes})${nota}`);
      }
      console.log(`  ${c.cena}  ${rod ? `[${rod.id}] ` : ""}${partes.join(" · ")}${avulsas ? `  (${avulsas} linha[s] avulsa[s] ou de antes da rodada marcada, ignoradas)` : ""}`);
    }
    console.log("  (FALTA: o portão não deixou linha de rodada do qc-cena com o hash atual do HTML; rodou sem a pré-carga, rodou avulso, ou não rodou.)");
  } else {
    console.log("\nA. Sem --desde, a parte A (a rodada do qc-cena desde uma hora) não roda: a B confere a rodada do carimbo.");
  }

  console.log(`\nC. Os portões que rodam à parte em cena de mapa: o til e o rodapé do portao-mapa (_tmp/portao-mapa.jsonl) e, na cena que pode ter vídeo (<video> ou createElement("video") no HTML), o qc-video-avanca (a linha da pré-carga e a saída do processo, com o veredito dele para a cena: "✓", N/A, "⛔" ou ERRO), com o sha1 do HTML de hoje, ${desde != null ? `desde ${desdeTxt}` : "de qualquer hora (sem --desde)"}:`);
  for (const c of cenas) {
    const partes = [];
    for (const pm of ["til", "rodape"]) {
      const av = avaliarMapa(c.cena, pm, (x) => x.sha1 === c.sha1 && desdeOk(x));
      partes.push(`${pm}: ${descrever(av)}`);
      if (av.estado === "reprovou") reprovou(c.cena, `${pm} (portao-mapa): ${descrever(av)}`);
      else if (av.estado === "sem_prova") problema(c.cena, `${pm} (portao-mapa) SEM PROVA: ${av.motivos.join("; ")}`);
      else if (av.estado === "nao_medido") problema(c.cena, `${pm} (portao-mapa) NÃO MEDIDO`);
      else if (av.estado === "falta") problema(c.cena, `${pm} (portao-mapa) sem medida${desde != null ? ` desde ${desdeTxt}` : ""}`);
    }
    if (c.temVideo) {
      // o qc-video-avanca roda fora do qc-cena. A prova é a linha da pré-carga (com a chave, o mapa, tile 2xx, relida,
      // sem NÃO MEDIDO e com as pré-cargas do canal) E a linha da saída do MESMO processo, com o veredito que o portão
      // imprimiu para a cena (lido pela pré-carga): "✓" é medido; "sem <video> na cena — nada a medir" é N/A, nunca
      // "medido"; "⛔ TODOS PARADOS" é reprovação; ERRO, a saída sem a cena e a saída ausente são NÃO MEDIDO
      const av = avaliarVideo(c);
      partes.push(`vídeo: ${av.txt}`);
      if (av.estado === "reprovou") reprovou(c.cena, `vídeo (qc-video-avanca): ${av.txt}`);
      else if (av.estado === "falta") problema(c.cena, `vídeo (qc-video-avanca) sem medida com a pré-carga${desde != null ? ` desde ${desdeTxt}` : ""}`);
      else if (av.estado === "nao_medido") problema(c.cena, `vídeo (qc-video-avanca) NÃO MEDIDO: ${av.porque}`);
      else if (av.estado === "sem_prova") problema(c.cena, `vídeo (qc-video-avanca) SEM PROVA: ${av.porque}`);
    }
    console.log(`  ${c.cena}  ${partes.join(" · ")}`);
  }

  // a rodada que escreveu o carimbo: a que começou antes do `em` e terminou perto dele (o registro do fim da rodada);
  // sem o registro (rodada de antes de 04/10, ou morta por sinal), a janela antiga de 20 min antes do `em`
  const rodadaDoCarimbo = (c, k) => {
    const em = Date.parse(k.em);
    if (!Number.isFinite(em)) return null;
    const porRodada = new Map();
    for (const l of linhas) if (l.cena === c.cena && l.hash === k.hash && daQcCena(l)) (porRodada.get(l.rodada) || porRodada.set(l.rodada, []).get(l.rodada)).push(l);
    const candidatas = [];
    for (const [id, ls] of porRodada) {
      const reg = rodadasRegistradas.get(id);
      const ini = Number.isFinite(Date.parse(reg?.inicio_utc)) ? Date.parse(reg.inicio_utc) : Number.isFinite(inicioDoId(id)) ? inicioDoId(id) : Math.min(...ls.map(instante));
      if (!(ini <= em + 60_000)) continue;
      if (reg) {
        const fim = Date.parse(reg.fim_utc || reg.quando_utc);
        if (fim >= em - 5_000 && fim <= em + FIM_DEPOIS_DO_CARIMBO_MS) candidatas.push({ id, linhas: ls, ini, como: `a rodada terminou às ${reg.fim || reg.quando}` });
      } else {
        const dentro = ls.filter((l) => instante(l) <= em + 60_000 && instante(l) >= em - UM_DIA_DE_PORTAO_MS);
        if (dentro.length) candidatas.push({ id, linhas: dentro, ini, como: "sem o registro do fim da rodada: pela janela de 20 min antes do carimbo" });
      }
    }
    return candidatas.sort((a, b) => b.ini - a.ini)[0] || null;
  };

  console.log("\nB. Os carimbos das cenas de mapa no _portao.json:");
  for (const c of cenas) {
    const k = portao[c.f];
    if (!k) { console.log(`  ${c.cena}  sem carimbo`); problema(c.cena, "sem carimbo"); continue; }
    const vencido = k.hash !== c.hash;
    if (vencido) problema(c.cena, "carimbo vencido (de outro HTML)");
    const rod = rodadaDoCarimbo(c, k);
    const semTil = c.gates.filter((gt) => gt.chave !== "til");
    // só a linha com as pré-cargas do canal cobre o portão (a de um gancho de prova, não)
    const cobertos = rod ? semTil.filter((gt) => rod.linhas.some((l) => l.processo === gt.processo && !problemaDasPreCargas(l.pre_cargas) && !problemaDoServidor(l.tiles_2xx_servidor, l.tiles_2xx_sem_servidor))) : [];
    const faltam = semTil.filter((gt) => !cobertos.includes(gt));
    const prova = rod ? `rodada ${rod.id} (${rod.como}): ${cobertos.length} de ${semTil.length} portões (fora o til) com linha da pré-carga` : "nenhuma rodada do qc-cena com a pré-carga que tenha escrito este carimbo";
    const notas = [];
    if (faltam.length) { notas.push(`sem linha da pré-carga do canal (com as pré-cargas do processo registradas): ${faltam.map((gt) => gt.chave).join(", ")}`); problema(c.cena, `carimbo sem prova da pré-carga em ${faltam.map((gt) => gt.chave).join(", ")}`); }
    for (const nome of k.indefinidos || []) {
      if (nome === NOMES_GATES_QC_CENA.til) {
        const av = avaliarMapa(c.cena, "til", (x) => typeof x.sha1 === "string" && x.sha1.startsWith(k.hash) && x.hash_marca === k.hash_marca);
        if (av.estado === "passou" || av.estado === "reprovou") { notas.push(`til-glifo indefinido no qc-cena, coberto pelo portao-mapa: ${descrever(av)}`); continue; }
        notas.push(`til-glifo indefinido, sem medida do portao-mapa que prove, com este hash e esta marca: ${descrever(av)}`); problema(c.cena, "til-glifo indefinido sem o portao-mapa"); continue;
      }
      notas.push(`${nome} indefinido`); problema(c.cena, `${nome} indefinido no carimbo`);
    }
    if (k.ok) {
      problema(c.cena, "ok:true sem prova");
      console.log(`  ${c.cena}  ok:true SEM PROVA${vencido ? " (carimbo de outro HTML: vencido)" : ""} (${prova}; em ${k.em}): ` +
        (rod ? "a rodada teve a pré-carga, mas o til de cena de mapa sai NÃO MEDIDO com ela, e este verde não fecha" : "o carimbo é de rodada sem a pré-carga, que mediu a página parada no erro da chave") +
        ". Vale como NÃO MEDIDO; re-meça com o qc-cena --forcar e a pré-carga.");
      continue;
    }
    if ((k.falhas || []).length) reprovou(c.cena, `carimbo com falhas [${k.falhas.join(", ")}] (em ${k.em})`);
    console.log(`  ${c.cena}  ok:false${vencido ? " (carimbo de outro HTML: vencido)" : ""}: falhas [${(k.falhas || []).join(", ")}], indefinidos [${(k.indefinidos || []).join(", ")}] (${prova}; em ${k.em})` +
      (notas.length ? `\n        ${notas.join("\n        ")}` : ""));
  }
  if (reprovacoes.length) {
    console.log(`\nReprovações medidas (${reprovacoes.length}; não entram na conta da saída, e quem as julga é o portão):`);
    for (const p of reprovacoes.slice(0, 40)) console.log(`  - ${p}`);
    if (reprovacoes.length > 40) console.log(`  … e mais ${reprovacoes.length - 40}`);
  }
  if (problemas.length) {
    console.log(`\n${problemas.length} ponto(s) sem prova de medida com o mapa (NÃO MEDIDO, FALTA, SEM PROVA, indefinido, vencido, verde sem prova): saída 2.`);
    for (const p of problemas.slice(0, 40)) console.log(`  - ${p}`);
    if (problemas.length > 40) console.log(`  … e mais ${problemas.length - 40}`);
  } else console.log(`\nNada sem prova: todo portão de toda cena de mapa acima foi medido com o mapa${reprovacoes.length ? " (as reprovações medidas estão na lista acima)" : ""}.`);
  process.exitCode = problemas.length ? NAO_MEDIDO : 0;
}

// ── a entrada ─────────────────────────────────────────────────────────────────────────────────────────────────
const SOU_O_PROGRAMA = (() => {
  try { return !!process.argv[1] && resolve(process.argv[1]).toLowerCase() === fileURLToPath(import.meta.url).toLowerCase(); }
  catch { return false; }
})();
const MARCA = Symbol.for("regie-guia-mapas.chaves-nos-portoes");

if (SOU_O_PROGRAMA) {
  const [verbo, ...resto] = process.argv.slice(2);
  if (verbo === "conferir") await conferirRodada(resto);
  else { console.error("uso: node ferramentas/chaves-nos-portoes.mjs conferir out/<proj> [--desde=\"AAAA-MM-DD hh:mm:ss\"] [--so=s03,s05] [--rodada=<id>]  (a pré-carga se usa com --import=…; ver o topo)"); process.exitCode = 2; }
} else if (!globalThis[MARCA]) {
  // uma instância por processo, mesmo que a pré-carga entre duas vezes por URLs grafadas de outro jeito
  Object.defineProperty(globalThis, MARCA, { value: true });
  // o que se expõe: a quem carrega o playwright-core por require (a linha acrescentada ao index.js), e ao portao-mapa
  // (o filtro da chave e o veredito de cada página)
  Object.defineProperty(globalThis, SIM_INSTALAR, { value: (pw) => { try { instalar(pw); } catch (e) { naoMedirProcesso(`a pré-carga não conseguiu embrulhar o playwright-core (${codigo(e)})`); } } });
  Object.defineProperty(globalThis, SIM_SEM_CHAVE, { value: semChave });
  Object.defineProperty(globalThis, SIM_PAGINAS, { value: paginasDoContexto });
  Object.defineProperty(globalThis, SIM_PRE_CARGAS, { value: Object.freeze(Array.isArray(PRE_CARGAS) ? [...PRE_CARGAS] : []) });
  propagar();
  ligar();
  lerSaidaDoVideo();
}
