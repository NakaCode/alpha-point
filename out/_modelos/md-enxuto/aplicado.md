# O CLAUDE.md enxuto, aplicado (30/10/2026)

**A decisão.** O Lucas, no chat da Sala, em 30/10/2026, à pergunta "O CLAUDE.md enxuto: qual divisão vale no teste?": "Núcleo de
22 mil (Recomendado)". A opção dizia: "Guarda palavra por palavra toda regra que os agentes usam, e o resto vai para os arquivos da
Sala. Economiza uns 9 % do total. Entra junto a regra dos 5 minutos: nenhum agente fica parado mais de 5 minutos esperando um
comando."

A divisão foi aplicada exatamente como está nesta pasta (`proposta.md`, `CLAUDE-nucleo-rascunho.md`, `mapa-de-linhas.json`,
`montar-rascunho.py`, `conferir-divisao.py`, `cetico.md`). Sem commit: o commit, o `segredos.mjs --staged` e os dois push são da Sala.
A `proposta.md` fica como estava, como registro da proposta ("É proposta: nada mudou" era verdade quando ela foi escrita).

## O que se fez, passo a passo

1. **A versão.** O `CLAUDE.md` de antes tinha o sha256 `7dd31ffc7ad07b03d9134d1ec051bf7e6107c900ef271a6efb01e9c4fc4a69c5`, o mesmo do
   `SHA256_ESPERADO` do `montar-rascunho.py` (o do commit `a508701`). O `conferir-divisao.py`, rodado antes de mexer em nada, saiu 0.
2. **A cópia completa.** `sala/CLAUDE-completo.md` é o `CLAUDE.md` de antes copiado byte a byte (`cp -p`; `cmp` igual; o mesmo sha256).
3. **Os arquivos de `sala/`.** `conferir-divisao.py --previa=<pasta da área temporária desta sessão>` montou os 14 arquivos pelo mapa
   (saída 0), e eles foram copiados como saíram para `sala/`. A cópia completa da prévia também bateu byte a byte com o `CLAUDE.md` de
   antes, e o núcleo da prévia, com o `CLAUDE-nucleo-rascunho.md`.
4. **O núcleo.** O `CLAUDE.md` passou a ser o `CLAUDE-nucleo-rascunho.md`, com duas linhas a mais no fim da nota do topo (texto exato
   em `aplicacao/nucleo-nota.md`):
   > O CLAUDE.md enxuto está em teste desde 30/10/2026 (Lucas, no chat da Sala, à pergunta "O CLAUDE.md enxuto: qual divisão vale no
   > teste?": "Núcleo de 22 mil (Recomendado)"), e a volta é copiar `sala/CLAUDE-completo.md` de volta para o `CLAUDE.md`, decisão do Lucas.
5. **O regimento e as roupas.**
   - `setores/REGIMENTO.md`, a linha do topo ("Se este arquivo e o `CLAUDE.md` divergirem…", o passo 6 da proposta): passa a dizer que,
     desde 30/10/2026, o `CLAUDE.md` é o núcleo, e que o que a seção "Os setores" tinha e não ficou no núcleo está, palavra por palavra,
     em `sala/setores.md`; o setor lê as duas do disco, e as duas valem ali como o `CLAUDE.md`. A mensagem de abertura que o Lucas
     digitou nos setores não mudou (ela cita a seção "Os setores", que continua no núcleo).
   - `setores/REGIMENTO.md`, a regra dos 5 minutos: uma linha no "O pedido à peça" e a subseção nova "A regra dos 5 minutos (desde
     30/10/2026)", em "Quem faz o trabalho", com a pergunta, a resposta e a opção literais. A regra: "nenhum agente fica parado mais de 5
     minutos esperando um comando; o que é longo roda fora dele, pela Sala ou pelo setor, antes ou depois". Diz o porquê (a memória
     curta de 5 minutos; na medida de 29/10, 38 % do custo das regravações veio dessas esperas), o que é longo (o render 4K de prova que
     passe de 5 minutos, os portões de várias cenas de uma vez), que a peça não roda o comando longo (grava, põe o comando no relato e
     termina) e que o setor o roda antes ou depois e devolve a saída como defeito. Marcada como regra que aperta.
   - As roupas das três peças que esperam comandos longos, no §0 de cada uma, com a mesma citação e a data: `marca/agentes/editor-de-arte.md`
     e `marca/agentes/mapista.md` (o render de prova e os portões em lote saem dela; o portão de uma cena continua com ela, cena a cena)
     e `marca/agentes/qc-visual.md` (não renderiza, não roda de novo os portões da Sala; o portão que roda é de uma cena só; o que
     passaria de 5 minutos deixa a cena "não julgada" pelo que faltou).
   - Nenhuma outra roupa roda render ou portões: o `redator-de-tela` deixa o quadro à sessão central, a `pesquisa-imagens` só cita o
     `renderizar.mjs`, e o `montador` só cita o `ingest-local.py`. O `conferente-de-midia` (`.claude/agents/`) tira quadros com o ffmpeg,
     que é curto, e ficou como estava.
6. **O registro.** `sala/do-video-5-em-diante.md` ganhou no fim a seção "O CLAUDE.md enxuto aplicado, e a pauta da Drake (30/10/2026)"
   (texto exato em `aplicacao/sala-do-video-5-em-diante.md`), com as duas respostas do mesmo momento, literais: a da divisão ("Núcleo de
   22 mil (Recomendado)", com a opção) e a da pauta ("A pauta da Drake: como seguimos?": "Versão honesta (Recomendado)", com a opção "A
   Drake com o Magalhães contado como é: o canal ficou cheio, e o excedente foi para o sul. Eu refaço o título e o gancho, corto um terço
   dos números para o ritmo calmo e te trago a pauta para o sim.").
7. **A prova** (abaixo).

## A prova: `conferir-divisao.py --aplicado`, saída 0

O script já tinha o modo `--aplicado` (a origem é `sala/CLAUDE-completo.md`, o núcleo é o `CLAUDE.md` e os arquivos da Sala são os de
`sala/`, todos relidos do disco). A adaptação, porque a aplicação pôs duas coisas a mais que o mapa não monta:
- os acréscimos ficam declarados em `aplicacao.json`, cada um com o texto exato num arquivo de `aplicacao/` (a nota do núcleo, depois do
  texto novo `novo01`; o registro, no fim de `sala/do-video-5-em-diante.md`);
- com `--aplicado`, além das conferências de antes (a versão pelo sha256, a partição, os destinos, o núcleo linha a linha, o índice, as
  181 citações de fora e as 42 de dentro, e cada linha não vazia do completo no arquivo do destino dela, na conta certa), ele confere
  **byte a byte** que o `CLAUDE.md` é o rascunho com o acréscimo declarado, que cada arquivo de `sala/` é o que a prévia monta mais o
  acréscimo declarado no fim, e nada mais, e que não sobra arquivo em `sala/` fora do mapa. A montagem da prévia virou uma função só
  (`montar_sala`), usada para gravar a prévia e para conferir os arquivos de verdade. Imprime o sha256 de cada arquivo.

Três provas de que ele pega o erro, cada uma desfeita em seguida (o sha256 conferido depois): uma palavra trocada em `sala/avisos.md`
(saída 1, "não é a montagem do mapa"), uma palavra trocada na nota do `CLAUDE.md` (saída 1, nas duas conferências do núcleo) e um
`sala/sobra.md` vazio (saída 1, "não é arquivo do mapa"). A rodada final, às 12:35 de 30/10/2026:

```
CLAUDE.md de hoje: 1767 linhas (1657 não vazias), ~72086 tokens
blocos: 96; no núcleo, 42 blocos e 8 trechos de texto novo, mais 1 acréscimo(s) da aplicação
núcleo (o CLAUDE.md aplicado): 50202 caracteres, ~22819 tokens; das linhas de hoje, ~20877; texto novo, ~1942 (alvo da página: uns 15000)
citações conferidas: 181 de fora do CLAUDE.md, 42 de dentro (entre destinos)
acréscimos declarados: 1 no núcleo, 1 em sala/ (aplicacao.json)
OK: toda linha não vazia do CLAUDE.md de hoje tem um destino só, e o núcleo é palavra por palavra.
saida=0
```

## O tamanho

| | Caracteres | Linhas | Tokens (a 2,2 c/t) |
|---|---:|---:|---:|
| o `CLAUDE.md` de antes (`sala/CLAUDE-completo.md`) | 158.589 | 1.767 | ~72.086 |
| **o `CLAUDE.md` novo (o núcleo)** | **50.202** | **600** | **~22.819** |

O núcleo é 31,7 % do de antes: ~20.877 tokens das linhas de antes e ~1.942 de texto novo (os ~1.822 do rascunho e os ~120 da frase do
teste). A 2,0 caracteres por token (a razão que o `razao-tokens.py` mediu nas leituras), seriam ~25.100. Os 14 arquivos de `sala/` somam
~51.200 tokens das linhas de antes (a caça sozinha, ~13.220), mais os cabeçalhos e o registro novo.

## Os sha256

| Arquivo | sha256 |
|---|---|
| `CLAUDE.md` (o núcleo) | `5eadc6a5fd8e4c62eaac6ae3b91eae28863f48bd8e0d9a18f4afd0bb395499a1` |
| `sala/CLAUDE-completo.md` | `7dd31ffc7ad07b03d9134d1ec051bf7e6107c900ef271a6efb01e9c4fc4a69c5` |
| `sala/autonomia-e-espectador.md` | `bf38851bf9e039b82751e7524f023ac7ea9062c53030b9a67b10d2f2df9dc993` |
| `sala/avisos.md` | `568ce2a12dca1e891e24796938dbec81342be66606f1244b0c71057f949b94f3` |
| `sala/caca.md` | `ddd9dac19abbb4b9142819befa9fb72c70d3c00466754442407259e7b3a6683c` |
| `sala/do-video-5-em-diante.md` | `fcd1152dc8f252d07afbe0f36781b1908a1a532b8d4b7a7559d0a5eccf34fc83` |
| `sala/especialistas.md` | `27374b2aa669235828360b8e2600767af717c12056bb17f4a5c0161d115888cd` |
| `sala/fontes-e-navegador.md` | `330ed0fb8e929bdbb16d83b633ea4e94510976762323bba3b854adb5189b806e` |
| `sala/linha-do-tempo.md` | `6e15bdfa1c82b143ba038eefc15e03ed845c5a95887ad6f2b65e227d1b0b7d94` |
| `sala/mapas-e-maptiler.md` | `8e43f8d61baf3d81ad0df3be7ca22efbe1cec2851dfe2f14e4e11236137c5753` |
| `sala/modelos-e-esforco.md` | `b0478825b17dd962eddb445a7317209bdc8b37a94718e9194c2178bc5edb3721` |
| `sala/motor-e-git.md` | `97d11e70ab8a3fbefe6ca698c02bf13bec570942393bfb58864fed6bb6625264` |
| `sala/motor-sem-rosto.md` | `2426f2980778de1d32dadc0836bccac1975aab1ada47bafff341e7dff2e01a88` |
| `sala/narracao.md` | `7c3d0954f36d3df114ffa5a5186f2778fcffe83af12c98b7554a8ffc071b4fc0` |
| `sala/setores.md` | `19351e789f3c11c5bd5a2786444a7ae1ca9cc6cc8a1841c274994cd6bad35912` |
| `sala/trilha.md` | `79384f9f8fc901bd33dccfce5600b84163af83ba334420e9d19903477771aa9b` |

Os outros arquivos mexidos (os sha256 só para conferência; eles não entram na prova da divisão):

| Arquivo | sha256 |
|---|---|
| `setores/REGIMENTO.md` | `709ff438d9b3f50300b814c8fdfdbca0e1bc2d7757f881e9d6b90fd40d59c9ab` |
| `marca/agentes/editor-de-arte.md` | `b8ed8216a82d480dc316db597245d378f466d724f54565f126b95cb3df4e0081` |
| `marca/agentes/mapista.md` | `34574d5971e7619fca894b184846ca33d1fb94af686e28489d26f9d701a897b9` |
| `marca/agentes/qc-visual.md` | `5301d7377012b39510ffda65f5689f0b207743f5e03ee922b632647dfd09de3f` |
| `out/_modelos/md-enxuto/conferir-divisao.py` | `663b6da6911b4fddefb41f8c6a5b32f5595f6f43dca8f56651213bd9ee308034` |
| `out/_modelos/md-enxuto/aplicacao.json` | `48c2a95bf1aa5b4e7f986d1f0be8a990ad23ef9c554fe7383c9ad3ace418b32c` |
| `out/_modelos/md-enxuto/aplicacao/nucleo-nota.md` | `6999d8d65851c24d5ec11eb5d2b21585f1eada0c5214256d1cbe6e9691a76bdc` |
| `out/_modelos/md-enxuto/aplicacao/sala-do-video-5-em-diante.md` | `54901308b0e3dd31d48a7adf4760da619055002ec0b15a8807f49d95cfa66fa8` |

## O que fica para a Sala

- **O commit e os push:** o `segredos.mjs --staged`, o commit, `git push origin main` e `git push pessoal main` (a proposta, passo 7). A
  `sala/` não está no `.gitignore` e entra no commit.
- **Os setores relerem:** o regimento manda ("Mudou este arquivo, o `CLAUDE.md` ou `.claude/agents/`"), e a regra dos 5 minutos é regra
  que aperta: vale quando a Sala manda reler. Conversa já aberta guarda o `CLAUDE.md` antigo no contexto até reler; subagente novo já
  nasce com o núcleo.
- **O pacote do motor sem rosto envelheceu em três roupas:** `node estudio/conferir-copias.mjs` saía 0 com as roupas do HEAD e agora sai
  1, com 3 achados (o `editor-de-arte`, o `mapista` e o `qc-visual` mudaram desde a destilação registrada em
  `estudio/marcas/alpha-point/LEIA.md`). Não mexi no `estudio/`: redestilar ou registrar a mudança é decisão da Sala, e o motor do Top10
  está sem data.
- **A regra dos 5 minutos não está no núcleo**, como a proposta previa ("entra nas roupas e no regimento"): os subagentes da Sala (leitores,
  céticos, revisores) não a veem pelo `CLAUDE.md`. Se a Sala despachar um deles para algo longo, o pedido tem de levá-la.
- **A medida do teste** é a da proposta ("A medida do teste"), no lote da Drake.
