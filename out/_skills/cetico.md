# O cético do catálogo de skills (08/10/2026)

> Revisão do `catalogo.md` desta pasta, com `etapas.md`, `aprendizados.md` e `formato.md` como base, contra o `CLAUDE.md`,
> o `APRENDIZADOS.md`, os agentes de `.claude/agents/`, o `consumo.csv` e a documentação pública. Só leitura, fora desta
> pasta. Nada se criou em `.claude/skills/`, nos agentes, nas roupas, na marca, no `CLAUDE.md` nem no motor. Nada se
> baixou, instalou, gastou ou commitou, e nenhum serviço pago foi chamado. Na web: três páginas públicas, um pedido por vez
> (code.claude.com/docs/en/skills, /sub-agents e os `SKILL.md` do obra/superpowers e do elevenlabs/skills no
> raw.githubusercontent.com). O arquivo de chaves não foi lido.
>
> As correções feitas no `catalogo.md` estão marcadas com **[cético]** (42 marcas). Este arquivo diz o que achei e por quê.

## 0 · Em dez linhas

1. **Descrição que afrouxava regra:** a da `escolher-voz-elevenlabs` mandava agir em "ficou lida" (troca de voz é do Lucas);
   a `base-e-gasto-maptiler` "decidia" a base; a `atualizar-motor` obedecia a aviso do Mateus; a `copiar-do-molde-byte-a-byte`
   não pedia o Lucas; a `cacar-no-chrome` perdeu "no chat" e "a lista existir não basta". Corrigidas.
2. **Descrição que casaria com o pedido errado:** "gera a voz" (25 × 26), "consertar uma cena de mapa" (30 × 48), "acervo
   aberto" (12 × 34), portões (44 × 45), e a `contexto-do-canal`, que casa com todo pedido e repete o `CLAUDE.md`.
3. **O "Pare se" não tinha lista**: o molde dizia "as regras de segurança desta etapa" sem dizer quais. Acrescentei o mínimo
   por grupo (seção 2.10 do catálogo), com a música fora de IA, que não aparecia em nenhuma descrição.
4. **Campos do formato que afrouxam regra** e o catálogo não barrava: `allowed-tools`, a injeção `` !`cmd` ``, `hooks`,
   `model` numa skill com `agent:` (passaria por cima do modelo do especialista), e `fork` sem `agent:` (herda o navegador).
5. **O teste de disparo pelo `skill-creator` é caro e talvez nem rode aqui:** os scripts abrem até ~360 `claude -p` por
   skill, na raiz do canal. O catálogo o dava como risco "baixo" e não o contava no custo.
6. **A caça dividida em fases escaparia do sha256**: o catálogo tirava o sha256 do `CLAUDE.md`. Corrigido: o vigente fica,
   por manifesto da pasta, e a lista fechada de ferramentas fica no topo do `SKILL.md`.
7. **Números sem fonte ou errados**: "mediu" (é um caso só), "~10 KB" (escolha do canal), "cabem" (não medido; pode não
   caber nos agentes em Sonnet), "mil skills = 60 a 80 mil tokens" (errado), "1.247 agentes" (são ~1.364).
8. **Quem roda o quê**: faltavam 9 skills na lista "só do central"; o `pesquisa-imagens` perdeu o §1 da caça (o formato da
   lista que ele escreve) e o `qc-visual` perdeu o `ilustrar-com-fisica`, que o `etapas.md` dava.
9. **Lacunas**: troca e conferência de chave (feita à mão cinco vezes), entrega no Drive (`drive-preparar`) e os agentes do
   próprio central (modelo e esforço, decididos em 08/10). Propostas na seção 2.9, fora da contagem de 66.
10. **Aprendizados**: os 78 itens estão todos cobertos (skill, lição ou regra do motor). Só um intervalo estava errado
    (17.16–17.23 incluía o 17.18, do motor, e o 17.19, do render), e o S60, passo 4, "regra de segurança fica no
    `CLAUDE.md`", tinha sumido do procedimento da seção 1.5.

---

## 1 · Duplicatas e sobreposições

| Par | O problema | O que fiz |
|---|---|---|
| `pesquisar-imagens-e-b-roll` (12) × `pesquisar-midia-acervo-aberto` (34) | as duas "acham foto e vídeo de acervo aberto"; o pedido "busca foto no Commons" casa com as duas | separei na descrição da 12: ela é o plano por cena e a lista de caça; a mecânica do `buscar-midia`/`entregar` é da 34 |
| `rodar-portoes-de-cena` (44) × `portoes-em-cena-de-mapa` (45) | do vídeo 2 em diante todo vídeo tem mapa; as duas casam com "roda os portões" | a 44 aponta a 45. Alternativa: juntar as duas, com o mapa como etapa (a decidir na Onda 1) |
| `gerar-mapa-animado-maptiler` (30) × `consertar-cena` (48) | "fazer ou consertar uma cena de mapa" | tirei o "consertar" da 30 |
| `escolher-voz-elevenlabs` (25) × `gerar-narracao-elevenlabs` (26) | "gera a voz" casa com as duas | tirei da 26 e devolvi o "não use no Juneau nem para trocar a voz" do exemplo da seção 1.2 |
| `triar-reprovacao-de-portao` (46) × `achado-em-massa-suspeite-da-regua` (56) × `cetico-com-escopo` (52) | as três nascem do R4/R5 (itens 63, 65, 76); a 2.6 do catálogo diz que o R5 ficou nas duas | não mexi: a 56 tem gatilho próprio (varredura e revisão, não só portão). Fica o aviso: o `gatilhos.md` das três tem de trazer as outras duas como "não deve levar" |
| `contexto-do-canal` (59) × o `CLAUDE.md` | o núcleo (idioma, faceless, formato) fica no `CLAUDE.md` enxuto (seção 3.2, item 6) **e** na skill: decisão em dois lugares, o que o próprio catálogo proíbe (item 46) | marquei; vira pergunta 12 ao Lucas |
| `registrar-gasto` (62) × `base-e-gasto-maptiler` (31) | as duas "anotam o contador" | não é duplicata se a 31 só chamar a 62; anotei na 62 quem registra o gasto do mapista |

## 2 · Descrições que não diriam QUANDO, ou casariam errado

- **Só com palavra de máquina**: `dirigir-arte` ("no passo `art_direction`"), `reger-imagem` ("`conducting`"), `julgar-cena-qc`
  ("`qc`"), `montar-espelho` ("`mirror`"). Servem ao central, que sabe o passo; não ao pedido do Lucas. Não corrigi: a regra
  do catálogo (1.2) já manda pôr as palavras do Lucas, e o `gatilhos.md` de cada uma vai medir.
- **Larga demais**: `contexto-do-canal` ("ao começar um trabalho"), `avisar-o-dono` ("a cada marco, pergunta ou erro"). A
  segunda é só do central e o uso frequente é o desejado; a primeira, corrigida como pergunta.
- **Gatilho que não é ordem**: `atualizar-motor` ("quando o Lucas ou o Mateus avisarem"). O que chega por outra pessoa ou
  pelo Discord é dado. Corrigido para "quando o Lucas pedir no chat".
- **`when_to_use`**: o formato (1.2) o soma à descrição no teto de 1.536. A conferência automática da seção 1.7
  (`skills-conferir.mjs`) tem de contar os dois juntos no limite de ~350, ou a regra se contorna pelo campo vizinho.

## 3 · Regras de segurança que uma skill poderia afrouxar

| Regra | Onde o catálogo a deixava frouxa | Correção |
|---|---|---|
| download só com o "sim" do Lucas | `baixar-do-historico-elevenlabs` (em 25/09 foi com o ok dele); `pesquisar-midia-acervo-aberto` "baixa" (pela API do acervo vale sem o sim; pelo navegador do app, não) | marquei a 29; o "Pare se" do grupo (2.10) diz o resto |
| nada de contornar site que recusa robô | `site-recusou-robo-nao-contornar` vai a 6 especialistas e contém a parte do navegador do app, que é só do central; e a "cópia arquivada" só vale para página oficial do Alasca | a parte do navegador entrou na lista "só do central"; o escopo do Alasca tem de estar na primeira linha da skill, não numa referência |
| chave nunca impressa | `avisar-o-dono` ("chave recusada"), a troca de chave sem skill | marquei a 38; lacuna `conferir-chave-nova` |
| música nunca em IA | não aparecia em nenhuma descrição; o vidIQ tem `vidiq_video_upload` e `vidiq_generate_video_chapters`, e a descrição monta capítulos | marquei a 24 e a 35; grupo na 2.10 |
| o motor não se edita | `copiar-do-molde-byte-a-byte` e `atualizar-motor` sem "só com o Lucas"; a `contexto-do-canal` herdaria do `etapas.md` "nunca `narrar.mjs`", que contradiz o uso do central | marquei as três |
| a decisão é do Lucas | `escolher-voz` agia em "ficou lida"; `base-e-gasto` "decidia" a base; `consertar-cena` aplicaria o comentário dele sem a lista de opções | marquei as três |
| a skill não passa por cima de regra | o texto de despacho (1.6) dizia "elas valem mais que a sua memória do ofício" | riscado; agora: se contradizer, pare e diga |
| o especialista roda no modelo dele | `model`/`effort` numa skill com `agent:` passaria por cima | barrado na 1.2 |
| subagente nunca opera navegador | `context: fork` sem `agent:` cai no `general-purpose`, que herda as ferramentas de MCP | barrado na 1.2 |
| a caça conferida | sha256 só do `SKILL.md`, saindo do `CLAUDE.md`, com as fases em arquivos ao lado | o vigente fica, por manifesto; a lista de ferramentas no topo |

## 4 · Afirmações sobre o formato

Conferidas na página (code.claude.com/docs/en/skills e /sub-agents, lidas hoje):
- 1.536 caracteres de descrição + `when_to_use`; 1 % da janela de contexto; queda das menos usadas; `skillListingBudgetFraction`,
  `SLASH_COMMAND_TOOL_CHAR_BUDGET`, `skillListingMaxDescChars`, `skillOverrides` com `name-only`: **confere**.
- Compactação: os primeiros 5.000 tokens de cada skill, **25.000 no total** (o catálogo não dizia o total; acrescentei).
- Pessoal vence projeto; nomes reservados `synced` e `anthropic-skills`; detecção ao vivo, menos pasta nova (`/reload-skills`):
  **confere**. O "só em sessão nova" do `CLAUDE.md` diverge da página; a prova da Onda 0 continua certa.
- `disable-model-invocation` tira a descrição da lista e impede o pré-carregamento em subagente; `context: fork` aceita agente
  de `.claude/agents/`; `background` padrão `true` (pede 2.1.218); `/skill-doctor` pede 2.1.252; `/nome` no meio da frase só
  autoriza: **confere**. A máquina tem 2.1.220 (`claude --version`).
- "Regra que tem de valer sempre vai para hook" (Troubleshooting): **confere**.
- O campo `skills:` do agente pré-carrega o texto inteiro, e sem `Skill` no `tools` o subagente não invoca skill: **confere**
  (/sub-agents). Os 16 agentes do canal não têm `Skill` no `tools`: **confere** no disco. A roupa do `editor-de-arte`, linha
  212, já aponta um `SKILL.md`: **confere**.
- Há um campo `omitClaudeMd` para agente, que o catálogo não cita. Não serve aos 15 (não se editam) e o conferente precisa do
  `CLAUDE.md`; fica como registro.
- `claude plugin validate .claude/skills` (valida o frontmatter) pede a 2.1.233: aqui não roda, o que justifica o
  `skills-conferir.mjs` do canal.

Sem fonte, ou além da fonte:
- "Um autor mediu" → o superpowers diz "Testing revealed…" e traz **um caso**, sem rodadas nem números. Corrigido.
- "o ideal é até ~10 KB" → escolha do canal, não da página. Marcado.
- "66 descrições… cabem" → **não medido**. A página fala em orçamento de caracteres a 1 % da janela, sem a conversão. Numa
  janela de 200 mil tokens pode dar ~8 mil caracteres, menos que as 66 sozinhas, fora as ~70 de fora do canal (várias com mais
  de 600 caracteres). O central roda numa janela maior (pico de 568 mil tokens no `consumo.csv`), mas os agentes do central
  que a decisão de 08/10 põe em Sonnet podem não ver as descrições. A medida é da Onda 0 (`/context`, `/doctor`).
- "mil skills = 60 a 80 mil tokens de lista" → errado pela própria página: as descrições param no orçamento; os nomes dão
  5 a 15 mil tokens (`formato.md` §1.5). Corrigido.
- "1.247 dos 1.709 agentes veem a lista" → o `consumo.csv` (1.712 linhas hoje) tem 1.247 `workflow-subagent` e mais 117
  `general-purpose`. Corrigido.
- "o `CLAUDE.md` tem uns 40 mil tokens" → são 126.441 bytes; em português dá mais perto de 32 a 36 mil. Não mexi (a economia
  muda pouco), mas a seção 6 é uma estimativa por cima.
- "9 skills pessoais Higgsfield" (`formato.md` §0, item 4) → em `~/.claude/skills/` são 7 Higgsfield, `frontend-design` e
  `webapp-testing`. Não muda nada no desenho.

## 5 · Skills públicas: o risco dos scripts

- **`skill-creator`** (o catálogo dizia "baixo", "não pede ok"). Li os scripts na cópia local do plugin
  (`~/.claude/plugins/marketplaces/claude-plugins-official/plugins/skill-creator/skills/skill-creator/scripts/`):
  - `run_eval.py` abre `claude -p "<pergunta>"` com cwd na raiz do projeto (cada um carrega o `CLAUDE.md` do canal), 10 em
    paralelo por padrão, e grava um `.claude/commands/<nome>-skill-<id>.md` temporário **na pasta de configuração do canal**;
  - ele mata a sessão filha no primeiro uso de ferramenta que não seja `Skill` ou `Read`, o que deve impedir efeito colateral
    (não testado);
  - `run_loop.py` repete cada pergunta 3 vezes, em até 5 voltas, e o `improve_description.py` chama mais `claude -p`;
  - usa `select.select` em pipe, que no Windows não funciona: provavelmente quebra aqui (não testado);
  - e o texto manda descrição "insistente", o oposto do que as skills que gastam precisam.
  Conta: até ~360 sessões por skill, ~30 milhões de tokens gravados, ~6 pontos do semanal por skill. **Para o canal: o texto
  serve; os scripts de avaliação, não, sem o ok do Lucas.** O teste de disparo é de mesa.
- **`elevenlabs/skills`**: conferido hoje que o *request stitching* do exemplo usa `eleven_v4` e que o v4 aceita só
  `stability` e `similarity_boost`. Riscos a mais que o catálogo não dizia: a `setup-api-key` mexe com a chave; o exemplo
  `elevenlabs say` gasta a cada uso; a instalação pede pacotes `@elevenlabs/*`. Nada disso se segue; só o achado se usa.
- **`superpowers/writing-skills`**: o método "ver o agente errar sem a skill" lança subagentes de pressão. Custa limite e nunca
  se faz com skill que gasta, baixa ou abre navegador.
- **`K-Dense-AI`**: o catálogo já barra o Google Scholar (raspagem). Não conferi o `research-lookup` por dentro: se ele chamar
  API paga de terceiros, fica fora também.
- **`maplibre`, `mapbox`, `humanizer`, `digitalsamba`, OpenMontage, `remotion-dev`**: o que o catálogo diz bate com o
  `formato.md`; não reli os repositórios (um pedido por vez, e o essencial já estava registrado).

## 6 · Procedimentos do `CLAUDE.md` sem skill (as lacunas)

1. **Troca e conferência de chave**: ElevenLabs (30/09), Epidemic (05/10 e 06/10), e o caminho para Discord e Telegram. O
   mesmo passo à mão: cópia `chaves.env.antes-…`, teste sem gasto (`--vozes`, `conferir`), nunca ler o valor, `onde()`. Proposta:
   `conferir-chave-nova`, só do central.
2. **Entrega no Drive**: o verbo `drive-preparar` ("liga as entregas") e a regra 2 ("Só as ENTREGAS vão para o Drive") não
   estão em nenhum dos três levantamentos. Proposta: skill própria ou etapa da `entregar-xml-premiere`. (Observação à parte:
   esta sessão tem como pasta adicional uma pasta dentro do OneDrive; nenhuma skill do canal deve gravar produção ali.)
3. **Os agentes do próprio central** (08/10): modelo, esforço, lotes de ~40 imagens, gravar no disco, e o teste Sonnet × Opus
   na revisão de espectador. Proposta: parte da `despachar-especialista`.
4. Menores, já postos na seção 2.9 do catálogo: o `EditRecording` que não se usa; render e linha do tempo nunca com caça
   rodando; render final só do aprovado; o WhatsApp parado.

Conferidos e cobertos (no catálogo ou no `etapas.md`, que o catálogo manda seguir): a proxy das cenas de mapa, o plano de trilha
à mão e o `trilha.mjs --conferir`, o `_excecoes-portao.json` com o sha1, o `regie-v1 doctor` sem as duas sugestões, o
`segredos.mjs`, a escuta do Lucas antes do master, o "nada de `qc-cena out/juneau`", o aviso do ano, o "mais mapa", a NARA e o
Commons pela API, o navegador do app que corta em ~1,8 MB.

## 7 · Aprendizados

Conferi os 78 itens do `APRENDIZADOS.md` contra a coluna "De onde vem" e a seção 2.6 do catálogo, e contra a tabela do
`aprendizados.md` §5. Os que não aparecem no catálogo são todos de classe "c" (motor, resolvidos ou limite): 4, 7, 17.1 a 17.6,
17.10, 17.18, 36.4 a 36.6, 36.8, 36.12. Nenhum de classe "a" ou "b" ficou sem destino. Dois acertos:
- o intervalo "17.16–17.23" da `gerar-geometria-de-mapa` levava o 17.18 (motor) e o 17.19 (render): corrigido;
- o procedimento da seção 1.5 perdeu o passo do `etapas.md` S60 ("regra de segurança vira linha do `CLAUDE.md`, nunca só
  skill"): devolvido como passo c').
- Das sugestões do `aprendizados.md` §8 (aprendizados que só moram no `CLAUDE.md`), a única que ficou só implícita é "duas
  contas de serviço: nunca imprimir chave, usar `onde()`": entrou no "Pare se" de grupo (2.10) e na lacuna 1.

## 8 · O que não mudei, e fica para quem decide

- O desenho de 66 skills com lições dentro: é a pergunta 2 do catálogo, e me parece certo.
- Juntar a 44 e a 45: deixei as duas, apontando uma para a outra.
- A `contexto-do-canal`: virou pergunta 12, em vez de eu tirá-la.
- O `CLAUDE.md` de "uns 40 mil tokens": provavelmente 32 a 36 mil; a economia da seção 6 fica um pouco menor, na mesma ordem.
- A divergência sobre os portões de mapa (só do central no `etapas.md`, também do mapista no catálogo): o `CLAUDE.md` deixa o
  mapista rodar; anotei que o gasto dele o central registra.

## 9 · Limites desta revisão

- Não abri as roupas, a `cacar-no-chrome` inteira nem os ofícios: conferi o que o catálogo diz deles pelos levantamentos e
  pelo `CLAUDE.md`.
- Não rodei nenhum script do `skill-creator`; o que digo dele vem da leitura do código.
- Não medi o orçamento da lista de skills: é medida da Onda 0.
- Não reli a documentação de boas práticas da platform.claude.com nem a especificação do agentskills.io; os pontos de lá que o
  catálogo usa (gerúndio, sumário em referência longa, três avaliações) vieram do `formato.md` e não os reconferi.
