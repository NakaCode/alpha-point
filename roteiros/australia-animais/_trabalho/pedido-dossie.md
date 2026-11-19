# Pedido: o dossiê do roteiro do vídeo 8 (`australia-animais`) (18/11/2026, ~21:3x)

Você é um subagente da Sala de controle do canal Alpha Point, no papel do editor que escreve o dossiê do roteiro. A pasta de trabalho é
a raiz do canal, `C:\projetos\alpha-point`, e todo comando roda com o cwd nela. O `CLAUDE.md` da raiz é o núcleo das regras do canal:
leia-o primeiro. Escreva em português; as citações da fala e da tela ficam em inglês, como vão ao vídeo.

## A tarefa

Escrever `roteiros/australia-animais/roteiro-editor.md`, o dossiê do roteiro aprovado, que a linha usa do `mirror` à `qc` (o `montador`,
o `regente-de-imagem`, o `redator-de-tela`, o `editor-de-arte`, o `mapista`, o `qc-visual`): cada frase do texto falado, o que ela
afirma, a fonte (os Ids da tabela de fatos), o que vai à tela (com a grafia e o crédito), o desenho sugerido, e as seções para a Sala.

**O molde é o dossiê do vídeo 7**, `roteiros/rio-columbia/roteiro-editor.md` (190 KB): leia o cabeçalho (até "A espinha"), as seções do
começo ("A espinha", "Livro-razão da promessa", "As partes", "As chamadas (CTA)", "O destino das cifras", "Os créditos da tela",
"Decisões de escrita"), um ou dois blocos de "De onde vem cada frase" (o formato de cada frase) e "Para a Sala, antes da regência" com
as subseções. Não precisa lê-lo inteiro: é a forma, não o conteúdo. Siga a mesma ordem de seções.

## O que entra (tudo está no disco; nada se pesquisa de novo)

- **O texto aprovado:** `roteiros/australia-animais/roteiro-narrador.md`, sha12 do texto falado **`bfd94a54b442`**
  (`node roteiros/australia-animais/_ferramentas/gate.mjs`: 2.711 palavras, 15,15 min, 60 parágrafos, 204 frases, o gancho em 152
  palavras, a inscrição falada no parágrafo 30). A nota `>` do topo do roteiro conta o que a Sala mudou no fim. A tradução de leitura é
  `roteiro-narrador-pt-BR.md` (para entender, não é fonte).
- **A aprovação:** `roteiros/australia-animais/decisoes-lucas.md` (o sim do Lucas, ~21:2x: "Pode seguir (Recomendado)", e as decisões
  de antes, da pauta e do título).
- **Os fatos:** `qc-roteiro/fatos.laudo.md` + `qc-roteiro/fatos-tabela.json` ("Revisão julgada `bfd94a54b442`", 244 de 244, PASS, nota
  9), com "O que vai à tela" (o do r2 e o do r1, em `fatos-r1.laudo.md`), "Os voláteis", "O que ficou sem leitura", "A lista de nomes" e
  "NADA A CHECAR"; as medidas em `fatos-medidas-r2.txt` e `fatos-medidas.txt`. O ouvinte a frio do r1: `qc-roteiro/ouvinte-r1.laudo.md`.
- **A lista da Sala:** `roteiros/australia-animais/_trabalho/lista-r1.md`, sobretudo a parte **D, "Para a tela"** (vai ao
  `redator-de-tela` e ao `regente-de-imagem`; por exemplo, o 32 do W56 do ABS, se for à tela com os 154, vai como "MARINE ANIMALS 32",
  nunca "SHARKS"). As notas do escritor: `_trabalho/escrita-notas.md` e `escrita-notas-r2.md`. O briefing: `_trabalho/briefing.md`.
- **A pauta aprovada e a base de fatos:** `pautas/2026-11-18-video-8-australia-pauta.md` (a v2, com o K de cada decisão),
  `pautas/2026-11-18-video-8-australia-fatos.md` e o registro `pautas/2026-11-18-video-8-australia.md` (os títulos do Test & Compare e
  o que o gancho promete).
- **A marca:** `marca/identidade.md` (§7, o formato de número na tela; §5 e §6, as cenas e o aviso de ano), `marca/voz.md`,
  `marca/midia.md` (de onde vem cada imagem), `marca/cta.md` (a inscrição no meio e o pedido de comentário no fim). Leia o trecho que a
  seção pede, não a marca inteira.

## Os tempos

Ainda não há narração nem relógio de palavras (a narração sai esta noite; o `words.json`, depois da escuta do Lucas). Os tempos do
dossiê são **estimados**: pela contagem de palavras de cada frase, à taxa que o `gate.mjs` usa para os 15,15 min (2.711 palavras), a
partir de 0:00. Diga no cabeçalho de onde vêm e que serão refeitos pelo `words.json` depois do `ingest` (como o vídeo 7 fez na 2ª rodada
do dossiê dele). Parta o texto em frases com um script (o do vídeo 7, `out/rio-columbia/_tmp/dossie/frases-r1.mjs`, parte o roteiro em
frases pela regra do verificador e casa a tabela; adapte-o em `out/australia-animais/_tmp/dossie/`). As frases têm de casar uma a uma
com as linhas da tabela de fatos: toda frase cobre as linhas dela, nenhuma linha fica solta, e as frases de "NADA A CHECAR" dizem isso.
Se algo não casar, pare nele e diga por quê; não estime o casamento.

## O que o dossiê precisa dizer, além do molde

- **O destino de cada número** (voz, tela ou os dois), com a grafia de tela de `marca/identidade.md` §7 e o crédito, pelas regras de
  tela do laudo e da lista (parte D). Toda regra de tela "nunca X" vai na frase que ela toca.
- **As chamadas:** a inscrição falada do parágrafo 30 ("If you've followed the venom this far, subscribe to Alpha Point. The other
  snake is next.") e o pedido de comentário, pela regra de `marca/cta.md`.
- **"Para a Sala, antes da regência":** o que já se decidiu (registro curto, com a data e a fala, de `decisoes-lucas.md`), o que continua
  aberto, com o dono (por exemplo: a MapTiler deste vídeo pede o ok do Lucas antes da primeira cena de mapa, `sala/mapas-e-maptiler.md`;
  a caça só se o Lucas pedir), o que falta ler antes da arte (os "sem leitura" do laudo), os voláteis (data-base 18/11/2026) e "A escuta
  e a pronúncia".
- **A pronúncia:** outro agente está escrevendo agora, em paralelo, `roteiros/australia-animais/pronuncia.md` e a cópia para a voz
  (`voz/`). Não os leia como fonte (estão mudando): em "A escuta e a pronúncia", aponte o caminho deles e diga que a escuta do Lucas
  vem da narração desta noite.

## O fim

- A linha `Revisão do roteiro: \`bfd94a54b442\`` no topo (o `gate.mjs --derivados` confere o carimbo).
- `node roteiros/australia-animais/_ferramentas/gate.mjs --derivados` tem de sair 0 (PASSA) no que é seu: se ele reprovar só por um
  derivado que o outro agente ainda está escrevendo (`voz/`, `pronuncia.md`, `out/australia-animais/roteiro.md`), diga isso; o seu, o
  `roteiro-editor.md`, tem de citar o sha certo. Grave a saída em `out/australia-animais/_tmp/dossie/gate-derivados.txt`.
- Um relato curto em `out/australia-animais/_tmp/dossie/relato.md`: quantas frases, como os tempos foram estimados, a contagem de linhas
  da tabela por frase (nenhuma solta), o que ficou aberto para a Sala, e o sha256 do dossiê.
- Termine com um resumo de poucas linhas: o sha256, a saída do portão e o que ficou aberto.

## O que você não faz

- Não edita o roteiro aprovado (`roteiro-narrador.md`), a tradução, a cópia para a voz, a folha de pronúncia, os laudos, a tabela de
  fatos, as pautas, a marca, nem nada de `rio-columbia/` (é só o molde).
- Nada se pesquisa na web, e nenhum fato novo entra: o dossiê só reflete o que está no disco. Se a tela pedir um dado que a tabela não
  tem, ele vai a "O que falta ler antes da arte", com o dono.
- Não faz commit nem `regie`. Não usa `SendMessage` nem `send_message`, nem ferramenta de navegador (`mcp__claude-in-chrome__*` ou
  `mcp__Claude_Browser__*`). Não chama a ElevenLabs nem a MapTiler.
- Python: o script num arquivo, rodado com `python -X utf8 -B <arquivo>.py`. A trava do canal recusa `python -`, heredoc e pipe.
- Se algo não casar ou faltar, pare naquele ponto e diga; não invente nem estime.
