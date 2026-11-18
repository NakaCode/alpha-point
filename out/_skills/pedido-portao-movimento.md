# Pedido da Sala: o portão de movimento · 18/11/2026, ~16:0x

**Quem:** um agente Opus, esforço xhigh, despachado pela Sala de controle.

## Por que agora

Em 17/11/2026 o Lucas perguntou como reduzir os erros da primeira execução. A Sala contou os 23 achados mantidos nas duas revisões de espectador do
vídeo 7 (`out/rio-columbia/_tmp/espectador-r1/mantidos.json` e `out/rio-columbia/_tmp/espectador-r2/mantidos.json`, com os derrubados ao lado em
`derrubados.json`): uns 17 mensuráveis por script, dos quais 9 de movimento (mapa parado mais de 2 s ou câmera brusca; viagem abaixo de 1,5 s), 4 de
"·" solto na quebra de linha e 4 de tamanho, sobreposição ou começo vazio. A regra escrita já existia (`marca/identidade.md` §4.4 e §5) e não bastou: as
peças conferem a cena em quadro parado, e movimento não aparece em quadro parado. A pergunta ao Lucas: "Faço um portão de movimento que o mapista e o
editor rodam antes de entregar…?" A resposta: "Os dois, após a cota (Recomendado)" (o registro: `out/_skills/catalogo.md`, "A retomada (17/11/2026)").
**Em 18/11/2026, ~15:5x, o Lucas mandou adiantar o pesado antes da virada das 23h** ("Vamos avançar tudo que é "pesado" antes das 23:00 para
utilizarmos o máximo da cota antes do reset"): por isso começa agora.

## O que fazer

Escreva `ferramentas/portao-movimento.mjs` e a prova `ferramentas/portao-movimento-provar.mjs`, **no molde de `ferramentas/portao-margens.mjs`**
(leia o topo dele inteiro e a prova dele, `ferramentas/portao-margens-provar.mjs`): o mesmo jeito de abrir a cena no Chrome do PC pelo
`playwright-core`, de andar no tempo da cena a cada 0,1 s, de tratar a cena de mapa **sem pedir tile nenhum à MapTiler** (a chave falsa, os pedidos
respondidos no próprio PC com um ladrilho cinza, o resto cortado, o DNS do Chrome desligado) e de dar a saída (0 passou, 1 reprovou, 2 NÃO MEDIDO ou uso
errado; `--so=`, `--passo=`, `--json`, `--registro=`, com o registro padrão em `out/<proj>/_tmp/portao-movimento.jsonl`).

**O que ele mede, cena a cena** (leia as regras em `marca/identidade.md` §4.3, §4.4 e §5, nas roupas `marca/agentes/mapista.md` e
`marca/agentes/editor-de-arte.md`, e o que cada achado mantido diz no campo `motivo`, que traz as contas dos revisores):
1. **o mapa parado**: a câmera do mapa (centro, zoom, giro e inclinação, lidos do mapa a cada amostra) sem mudar por mais de 2 s, sem outro movimento
   que conte na tela (defina o que conta, a partir das regras e dos achados);
2. **a câmera brusca**: a velocidade de zoom (níveis por segundo), de deslocamento (na tela) e de giro acima do limite que as regras e os achados
   sustentem, e a viagem de câmera abaixo de 1,5 s;
3. **o "·" na quebra**: um separador "·" (ou "•") que a quebra de linha deixa no começo ou no fim de uma linha renderizada;
4. **(se couber sem duplicar outro portão)** o começo vazio e o tamanho; a sobreposição já é do `check-overlap` e do `qc-cena` (não duplique: diga o
   que ficou com eles).

Os limites saem das regras e dos achados, não de chute: diga de onde veio cada número, e o que muda se a Sala o apertar ou afrouxar.

**A prova:** os achados MANTIDOS de movimento, de "·" e de começo vazio das duas revisões têm de reprovar **na versão da cena que os revisores viram**
(tire-a do histórico do git, pelo commit do lote, para `out/_tmp/portao-movimento/casos/`, sem mexer nas cenas de `out/rio-columbia/graphics/`); os
DERRUBADOS do mesmo tipo têm de passar; e as cenas consertadas depois (as de hoje em `out/rio-columbia/graphics/`) passam onde o conserto valeu. Diga
quantos de quantos, caso a caso, e os que o portão não pega (com o porquê).

## As regras

- **Não use `SendMessage` nem `send_message`.** Não commite nem dê push (só a Sala commita). Não use rede (a cena de mapa se mede sem tile), navegador do
  app nem do Lucas (nenhuma ferramenta `mcp__claude-in-chrome__*` nem `mcp__Claude_Browser__*`; o Chrome que o `playwright-core` abre é o do portão),
  vidIQ nem crédito. **Nada da MapTiler.**
- **A máquina:** antes de abrir o Chrome, leia `setores/REGIMENTO.md`, "A máquina e os arquivos únicos", e marque `out/_maquina/chrome.json`
  (`{"estado":"ocupado","quem":"Sala (agente do portão de movimento)","tarefa":"portao-movimento: a prova","desde":"<hora>"}`), relendo para conferir
  o `quem`; ao terminar, regrave como `livre`. Se ele estiver `ocupado` por outro, espere e confira de novo a cada poucos minutos. **Nunca mate navegador
  por nome** (`taskkill /IM chrome.exe` derruba o Chrome do Lucas).
- Não edite o molde (`ferramentas/portao-margens*.mjs`), as cenas do vídeo 7, as roupas, o `CLAUDE.md` nem o regimento: o texto que as roupas e o
  `CLAUDE.md` ganham ("Os portões medem") vai no seu relato, e a Sala o aplica.
- `REGIE_MOTOR=C:/projetos/regie-v1` na mesma chamada, se o portão importar do motor (como o de margens). A trava do Python vale: script sempre num arquivo,
  `python -X utf8 -B <arquivo>.py`; nunca `python -`, heredoc ou pipe para o Python.
- Escreva só em `ferramentas/portao-movimento.mjs`, `ferramentas/portao-movimento-provar.mjs`, `out/_tmp/portao-movimento/` (casos, saídas, o
  `RELATO.md`) e `out/_maquina/chrome.json` (só o aviso).
- Grave o resultado no disco antes de responder. **O relato** (`out/_tmp/portao-movimento/RELATO.md`, e um resumo curto em português na resposta): o
  que mede e com que limites (e de onde vieram); a prova, caso a caso; o tempo por cena; o que não pega; o texto proposto para as roupas do mapista, do
  editor-de-arte e do qc-visual e para o `CLAUDE.md`.
