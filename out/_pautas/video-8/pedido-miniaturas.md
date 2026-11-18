# Pedido: o esboço da miniatura de cada finalista do vídeo 8 (17/11/2026)

Você é um subagente da Sala de controle do canal Alpha Point (raiz: `C:\projetos\alpha-point`). A mensagem que despachou você diz QUAIS pautas
(o `slug`, o título, a palavra da caixa, o que fica vermelho e ciano, o recorte do mapa e onde está o laudo do cético de cada uma).

## Por quê

O Lucas vai escolher o vídeo 8 entre 3 finalistas. Ele julga muito pela miniatura: achou "muito fracas" as primeiras do vídeo 7 e mandou 4 prints de
referência (`out/rio-columbia/_tmp/miniatura/referencias/ref-1.jpg` a `ref-4.jpg`; olhe as quatro). As do vídeo 7 refeitas nesse estilo, que ele
aprovou e subiu, estão em `roteiros/rio-columbia/miniatura/miniatura-A-1280.jpg` e `-B-1280.jpg`. Um esboço de cada finalista, no mesmo nível, deixa
a escolha mais fácil e mostra se o paradoxo se vê no mapa.

## O estilo (o das referências, não o laranja do canal)

O mapa é o protagonista: a terra em relevo sombreado amarelo-dourado, a água em azul saturado, o assunto em vermelho com o relevo por baixo e
contorno branco fino, um destaque secundário em ciano, uma ou duas palavras numa caixa preta (texto vermelho ou branco, Inter Black), setas brancas
grossas e curvas. Pouco texto, leitura em 168 px de largura. As cores e as funções prontas estão em `roteiros/rio-columbia/miniatura/mapa.py`
(VERMELHO, AMARELO, AZUL, CIANO, a caixa de texto, a seta, o relevo); leia `mapa.py`, `base-A.py`, `base-B.py`, `A-RELATO.md` e `B-RELATO.md`.

## Como fazer

- Generalize o `mapa.py` numa cópia em `out/_pautas/video-8/miniaturas/` (não edite os arquivos do vídeo 7): o recorte (bbox), as bases e as camadas
  passam a ser parâmetros. Um script por finalista (`<slug>.py`), da raiz do canal.
- **As bases** (nada desenhado à mão nem por IA): o relevo ASTER GDEM em cinza e a Blue Marble com batimetria, pela NASA GIBS (os scripts do vídeo 7:
  `out/rio-columbia/_tmp/miniatura/gibs-baixar-relevo.py` e `gibs-baixar.py`), **um pedido por vez, com o User-Agent do canal**
  (`canal.json` › `contato`); a terra, os estados e os lagos do Natural Earth 1:10m (o cache `~/.regie/geo/natural-earth`); fronteiras do U.S. Census
  (TIGER/cartographic boundary, arquivo aberto); rios, lagos e canais do OSM pela API Overpass (um pedido por vez, User-Agent do canal; se recusar,
  pare e use o Natural Earth); terra pública do PAD-US (USGS), se a pauta pedir. **Nada da MapTiler** (gasta crédito).
- Grave as bases em `out/_pautas/video-8/miniaturas/_bases/` com um `.json` ao lado (a URL, a data, o sha256, a licença lida na origem).
- **A saída de cada finalista:** `out/_pautas/video-8/miniaturas/<slug>-1280.jpg` (1280 × 720) e a de 2560, mais as prévias a 320 e 168 px.
- **A folha de comparação:** `out/_pautas/video-8/miniaturas/folha.png`, as 3 lado a lado em 1280 e embaixo em 320 e 168, com o título de cada uma
  embaixo, como o espectador vê no YouTube (título em branco sobre fundo escuro, 2 linhas no máximo).
- Confira cada uma a olho em 1280, 320 e 168 px: o assunto vermelho ocupa uma parte grande da imagem (no vídeo 7, 31 %), a palavra se lê em 168 px, nada
  importante no canto de baixo à direita (a duração do YouTube cobre). Se uma ficar abaixo das referências, refaça antes de entregar.
- Um `RELATO.md` em `out/_pautas/video-8/miniaturas/`: o que cada uma mostra, as bases e as licenças, o que ficou fraco.

## Regras (todas valem)

- Sem navegador (nenhuma ferramenta `mcp__Claude_Browser__*` nem `mcp__claude-in-chrome__*`); não use `SendMessage` nem `send_message`; sem commit, sem
  `regie`, sem crédito pago (MapTiler, ElevenLabs, vidIQ).
- Site que recusa leitura automática (403, captcha, verificação de robô) não se contorna: nem por `curl`, nem por outro cliente, nem trocando cabeçalho.
- Python sempre num arquivo (`python -X utf8 -B <arquivo>.py`), nunca pela entrada.
- É esboço para a escolha do Lucas: se a pauta for aprovada, a miniatura final se refaz depois, com o roteiro.

Ao terminar, responda à Sala com os caminhos (as 3 miniaturas e a folha), uma linha por miniatura (o que se vê) e o que ficou fraco.
