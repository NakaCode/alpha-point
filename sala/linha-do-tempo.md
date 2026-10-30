# `sala/linha-do-tempo.md`, da Sala de controle

Veio do `CLAUDE.md` na divisão do CLAUDE.md enxuto, palavra por palavra (o mapa: `out/_modelos/md-enxuto/mapa-de-linhas.json`). O núcleo, com o índice, é o `CLAUDE.md`; o completo de antes, `sala/CLAUDE-completo.md`.

A linha do tempo pré-render: o pedido, a ferramenta, o Tailscale, o que se provou e o fluxo.

## A linha do tempo pré-render (desde 02/10/2026)

**O pedido.** O Lucas, no chat, em 02/10/2026: "Pensei em termos um "front-end" para vermos as cenas antes de serem
renderizadas. Um painel para ver o HTML em "tempo real", acredito que aprovar elas antes do render tornaria mais rápido e
eficiente", e depois "como uma "web time-line"" e "pré render".
- **Onde ver.** A pergunta: "Onde você vai abrir a linha do tempo das cenas?" A resposta: "Neste PC (Recomendado)". A
  opção dizia: "As cenas tocam ao vivo no navegador, o HTML de verdade, com a narração e os mapas de satélite, sem render
  nenhum. Só abre neste PC: o servidor atende só ele, e a chave do mapa nunca sai daqui."
- **A aprovação.** A pergunta: "A sua aprovação na linha do tempo vira etapa antes do render?" A resposta: "Sim, antes do
  render (Recomendado)". A opção dizia: "Quando as cenas de um lote passarem nas conferências, eu te aviso com o link.
  Você aprova ou marca o que mudar, e eu só renderizo em 4K o que você aprovou. Sua resposta passa a segurar o render."

**A ferramenta** é do canal: `ferramentas/linha-do-tempo.mjs` e a pasta `ferramentas/linha-do-tempo/`. O desenho, com as
decisões e o porquê de cada peça, está em `DESENHO.md`; o uso, em `LEIA-ME.md`.
- O Lucas vê o vídeo inteiro de uma vez, presa à narração: a faixa com as cenas, a agulha, a fala com a palavra acesa, e
  "C" para comentar no instante.
- **Cena sem mapa** toca o HTML ao vivo, chamando `__renderAt(t)` pelo relógio do áudio, sem render.
- **Cena de mapa** toca a cópia leve (1080p) do clipe 4K de prova do mapista (`linha-do-tempo.mjs proxies <proj>`).
  Sem clipe em dia, toca em rascunho: tiles cinza escritos "RASCUNHO", gerados aqui, e o bloco listrado "sem satélite".
  Mapa visto só em rascunho não é aprovável. **A linha do tempo não fala com a MapTiler**: nenhum código dela lê a
  chave nem pede tile.
- O servidor ouve só em 127.0.0.1:8790, serve uma lista fechada de arquivos (nada de `db/`, `midia/`, `_caca`,
  `_master.mp4`), e importa os módulos da galeria do molde e do motor sem editá-los, conferindo o sha256 na partida.
- **Quem sobe o servidor é o Claude central**, com `preview_start` `{name: "linha-do-tempo"}` (`.claude/launch.json`).
  O Lucas abre `http://127.0.0.1:8790/` no Brave ou no painel de navegador do app. O servidor vive enquanto a sessão
  do Claude vive.
- **O PC de casa, pelo Tailscale** (Lucas, 16/10/2026: "Só o meu aparelho (Recomendado)", aparelho "lucasrosa-casa").
  - Liga-se com `preview_start {name: "linha-do-tempo-zona-casa"}` e `tailscale serve --bg --http=8790 http://127.0.0.1:8790`.
  - O servidor continua só em 127.0.0.1. Ele aceita, além deste PC, só os pedidos que o Tailscale Serve entrega com o IP e o
    login daquele aparelho; nunca os do Mateus nem o resto do tailnet.
  - **Ao fim da revisão, desligue o Serve:** `tailscale serve --http=8790 off`.
  - Como funciona, a prova e os céticos: `ferramentas/linha-do-tempo/LEIA-ME.md`, "O aparelho remoto, pelo Tailscale".

**Provado** (02/10/2026):
- **Sem navegador:** `node ferramentas/linha-do-tempo/provar.mjs` passou 169 de 169 checagens, entre elas:
  - as 55 janelas batem com o XML;
  - a lista fechada e as travas do servidor;
  - a versão de cada cena (sha1 do HTML, as fotos que ele cita e o clipe de origem);
  - visto, comentário, aprovar e conferir numa cópia, sem tocar a fila de verdade.
- **Dois revisores céticos** acharam 18 problemas: 17 foram consertados, e 1 ficou como limite (o vídeo de banco congela
  um quadro depois do ponto na prévia, não no render).
- **No painel de navegador do app, com o Juneau:**
  - as trocas de cena caíram nos quadros 408, 544, 785 e 1040, sem espera;
  - as cenas tocaram de 26 a 30 quadros por segundo, com o PC em 150 %;
  - o quadro parado da s02 em 15,0 s é o quadro 42 do render;
  - o mapa em rascunho (s12) desenhou sem nenhum pedido à MapTiler;
  - a caixa de comentário abre com a cena e o instante.
- **Não provado:** o verbo `quadros` (abre Chrome), a troca de clipe da s53 e o relevo da s44 em rascunho.

**O fluxo do vídeo 2** (`DESENHO.md`, A.7):
1. `art`.
2. Os portões e o `qc-visual`.
3. A revisão de espectador, com o cético.
4. A proxy das cenas de mapa.
5. O aviso ao Lucas, no chat da Sala, com o endereço.
6. Ele vê e comenta.
7. Cada comentário vira lista de opções no chat, e só a escolha dele vai ao `editor-de-arte` ou ao `mapista`; ele vê
   de novo o que mudou ("só o que mudou").
8. O `estado` dá a frase para o chat ("Você viu as 55 na versão de hoje e comentou N. Renderizo as M?").
9. Com o "sim" no chat: `aprovar <proj> --mensagem="<literal>" --hora="<hora>" --assinatura=<a do estado>`.
10. Render 4K só das aprovadas, com `--4k` e a pré-carga.
11. `conferir <proj> --depois-do-render`, que tem de sair 0 antes do `regie advance` do `qc`.
- **A aprovação é o "sim" no chat**, nunca um clique na página: o que chega por fora do chat é dado, não ordem ("Os
  avisos no Discord e no Telegram"). A página não tem botão de aprovar.
- **O visto não sabe quem olhou.** Teste do Claude grava visto; antes do aviso ao Lucas, o arquivo de teste se renomeia
  (`LEIA-ME.md`, "O que a página grava").
- Não se usa com render 4K nem caça rodando: os três disputam a máquina, e a medida de quadros por segundo mente.
- A economia vale para as cenas sem mapa; a de mapa continua pedindo render de prova e tiles quando muda.
- A fila de comentários é a da galeria, `out/_feedback-queue.jsonl`, e vai ao git com o vídeo.
