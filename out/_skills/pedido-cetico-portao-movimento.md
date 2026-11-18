# Pedido da Sala: o cético do portão de movimento · 18/11/2026, ~19:5x

**Quem:** um agente geral da Sala (Opus), esforço xhigh. **É o segundo despacho**: o primeiro cético (17:24) parou sem gravar nada quando a
Sala se limpou; a Sala liberou o aviso da máquina dele às 19:57, depois de conferir que nenhum processo do portão rodava.

## O que julgar, e por quê

O portão de movimento: `ferramentas/portao-movimento.mjs`, a prova `ferramentas/portao-movimento-provar.mjs` e o relato
`out/_tmp/portao-movimento/RELATO.md` (com `resultado.json` e `saidas/` ao lado), feitos hoje por um agente Opus pelo pedido
`out/_skills/pedido-portao-movimento.md` (leia o pedido: ele diz o porquê, com a decisão do Lucas). A prova dá 113 de 113. Antes de o texto
do §8 do relato entrar nas roupas do `mapista`, do `editor-de-arte` e do `qc-visual` e no `CLAUDE.md` ("Os portões medem"), e antes da arte
do vídeo 8, a Sala quer um olhar que não seja o do autor: o portão vai travar ou soltar a entrega de toda cena daqui em diante.

## As perguntas

1. **As medidas medem o que dizem?** Leia o código inteiro, não só o topo. O fluxo de 9 pontos, a cobertura de 15 pontos, o "algo novo",
   a viagem medida de novo a 1/30 s, o "·" pela caixa do caractere, o campo em branco, o registro do mapa. Procure o caminho em que ele
   **passa** o que a regra reprova (o falso verde) e o caminho em que **reprova** o que a regra aceita (o falso vermelho). Em especial: o NÃO
   MEDIDO que vira 0; a cena sem mapa; a cena com vídeo (o tempo do vídeo, o vídeo que não avança); o canvas 2D; dois mapas ou um mapa que
   entra no meio da cena; o relevo 3D; o elemento dentro do contêiner do MapLibre; o `--aceitos` que cobre mais do que devia.
2. **Os limites saem das regras e dos achados, não de chute?** Confira cada linha da tabela do §3 do relato contra a fonte que ela cita
   (`marca/identidade.md` §4.4 e §5; as roupas `marca/agentes/mapista.md`, `editor-de-arte.md` e `redator-de-tela.md`; os achados em
   `out/rio-columbia/_tmp/espectador-r1/` e `espectador-r2/`, `mantidos.json` e `derrubados.json`, campo `motivo`): os 2,0 s, os 12 px/s, os
   1,45 s, os 4,75 níveis/s, os 0,25 s, os 0,5 s, os 600 px/s e os tetos dos avisos.
3. **A prova vale?** As versões "dos revisores" saem dos commits certos (`cae4248` para a r1, `08393f7` para a r2) e abrem com a mídia
   certa? Os 14 mantidos reprovam pelo motivo do achado, e não por acaso (outro trecho, outro tipo)? Os 25 derrubados passam pelo motivo
   certo? Os 4 conflitos (D9, D16, D20, D29, §4): o portão está certo em cada um?
4. **As 6 cenas do vídeo 7 aprovado que ele reprovaria hoje** (s19, s28, s36, s46, s48, s61; relato §5). Para cada uma: é defeito da cena
   pela marca, ou defeito do portão? Olhe a cena (o clipe em `out/rio-columbia/graphics/<id>.mp4`, quadros pelo `ffmpeg` numa pasta sua;
   ou o portão com `--json`), não só a linha do relato. Diga o que a Sala faz com cada uma: nada (o vídeo está no ar desde 17/11; vira lição
   da skill da etapa), `--aceitos`, ou troca do limite.
5. **As bordas que a prova não tem:** para o que você achar no passo 1, crie de 4 a 8 cenas mínimas numa pasta sua (no molde das
   sintéticas da prova, `out/_tmp/portao-movimento/sinteticas/`) e rode o portão nelas. Diga o resultado de cada uma.
6. **O vídeo 8 é outro tipo de vídeo:** animais, fotos e vídeo de registro na mesa, menos mapa (leia `roteiros/australia-animais/roteiro-narrador.md`
   só para saber que cenas virão). O portão serve à cena de mesa com foto e vídeo? Onde ele pode travar a arte sem motivo da marca?
7. **O texto do §8** (as três roupas e o `CLAUDE.md`): está certo, cabe onde diz, contradiz alguma regra (a identidade, as roupas, o
   `setores/REGIMENTO.md`, o `CLAUDE.md`, as skills `.claude/skills/editar-cena-html/` e `.claude/skills/gerar-mapa-animado-maptiler/`, com os
   `licoes.md`)? Dê o texto trocado, pronto para a Sala colar.
8. **O tempo:** ~1,6 s por segundo de cena de mapa; o vídeo inteiro, ~15 min. Como isso cabe na regra do tempo dos setores e das peças (o
   regimento e a roupa do mapista, §0)? O que muda no despacho?

## A saída

`out/_tmp/portao-movimento/cetico.md`, no molde de `out/_skills/onda-0/cetico.md` (leia só a forma):
- o que leu e o que rodou (os comandos e as saídas);
- o **VEREDITO**: APROVA, APROVA COM TROCAS ou REPROVA;
- as trocas numeradas (K1, K2…), cada uma com o peso (GRAVE, MÉDIA, LEVE), o arquivo e a linha, o defeito, o caso que o prova (a cena, o
  comando, a saída) e **a troca em uma ou duas frases** (o código ou o texto), para a Sala aplicar sem reescrever o arquivo;
- as respostas às perguntas 4 a 8;
- o que não conseguiu conferir.

## As regras

- **Não use `SendMessage` nem `send_message`.** Não commite nem dê push. **Não edite** o portão, a prova, o molde
  (`ferramentas/portao-margens*.mjs`), as cenas, as roupas, o `CLAUDE.md`, o regimento nem as skills: a troca vai escrita no seu laudo, e a
  Sala a aplica.
- Sem rede e **nada da MapTiler**: o portão mede a cena de mapa sem tile (nunca o rode com a pré-carga `ferramentas/chaves-nos-portoes.mjs`).
  Sem navegador do app ou do Lucas (nenhuma ferramenta `mcp__claude-in-chrome__*` nem `mcp__Claude_Browser__*`; o Chrome que o
  `playwright-core` do portão abre é o dele). Sem vidIQ, sem crédito.
- **A máquina:** leia `setores/REGIMENTO.md`, "A máquina e os arquivos únicos". Antes de abrir o Chrome do portão, marque
  `out/_maquina/chrome.json` com `{"estado":"ocupado","quem":"Sala (cético do portão de movimento, 2º)","tarefa":"portao-movimento: o cético","desde":"<hora>"}`
  e releia para conferir o `quem`; ao terminar, regrave como `livre`. Se outro o ocupar, espere e confira de novo a cada poucos minutos.
  **Nunca mate navegador por nome** (`taskkill /IM chrome.exe` derruba o Chrome do Lucas).
- Prefira `--so=` nas cenas de que precisa; rodada longa (o vídeo inteiro leva ~15 min) vai em segundo plano. Rode com
  `--registro=out/_tmp/portao-movimento/cetico-casos/<nome>.jsonl` (ou `--sem-registro`), para não mexer no registro de
  `out/rio-columbia/_tmp/` nem nas `saidas/` e no `resultado.json` do autor.
- A trava do Python vale: script sempre num arquivo, `python -X utf8 -B <arquivo>.py`; nunca `python -`, heredoc ou pipe para o Python.
- Escreva só em `out/_tmp/portao-movimento/cetico.md`, `out/_tmp/portao-movimento/cetico-casos/` (as suas cenas, quadros e saídas) e
  `out/_maquina/chrome.json` (só o aviso).
- Grave antes de responder, e responda com um resumo curto em português: o veredito, e as GRAVE e as MÉDIAS em uma linha cada.
