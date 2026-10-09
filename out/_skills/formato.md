# Skills: o formato e o que já existe

> Levantamento de 08/10/2026, às 18:1x de Brasília, para o pedido do Lucas do mesmo dia ("agente + skill"). Só leitura:
> nada se criou em `.claude/skills/`, `.claude/agents/`, `marca/`, `CLAUDE.md` nem no motor, e nada se baixou nem se
> instalou. Fontes: a documentação pública da Anthropic e do padrão Agent Skills, lida em 08/10/2026, e os
> repositórios públicos do GitHub, lidos pela API do GitHub (`gh api`, um pedido por vez, só metadados e o texto
> dos `SKILL.md`).
>
> As citações literais são curtas; o resto é paráfrase com a seção da página. Os números (1 %, 1.536, 500 linhas,
> 5.000 tokens) são os das páginas.

## 0 · Em dez linhas

1. Skill é uma pasta `.claude/skills/<nome>/SKILL.md` com frontmatter (`name`, `description`) e etapas; arquivos de
   apoio (`references/`, `scripts/`) só entram quando a skill pede.
2. Até o uso, só o nome e a descrição ficam no contexto. Usada, a skill entra inteira e fica na conversa.
3. **"Milhares" tem custo.** Os nomes vão todos para a lista, toda vez. As descrições cabem num orçamento de **1 % da
   janela de contexto**: passou dele, caem as descrições das skills menos usadas, e com elas as palavras que fazem a
   skill ser achada. Para chegar a milhares, a maioria tem de ficar com só o nome (`skillOverrides: "name-only"`) ou
   desligada.
4. A sessão deste canal já lista umas 70 skills que não são do canal: plugins Vercel e Supabase, `anthropic-skills:*`
   e 9 skills pessoais Higgsfield em `~/.claude/skills/`. Elas disputam o mesmo orçamento.
5. **Os 16 especialistas não têm a ferramenta `Skill`.** O `tools` deles não a lista, e os 15 do motor não se editam.
   Três caminhos para eles usarem uma skill: a roupa aponta o `SKILL.md` (já se faz no `editor-de-arte` com o
   `ilustracao-narrativa`); a skill roda **dentro** do especialista com `context: fork` + `agent: <id>`; ou o
   despacho manda ler o arquivo.
6. Com `context: fork` + `agent: <especialista>`, quem roda a skill é o especialista, sem editar o arquivo dele. É o
   "agente + skill" do Lucas, mas ainda sem prova no canal.
7. A `cacar-no-chrome` tem o essencial: frontmatter, origem com sha256, seções numeradas, condições de parada e
   relato. Fora do padrão estão o tamanho (862 linhas, uns 12.400 palavras, contra 500 linhas e menos de 5 mil
   tokens), a descrição (986 caracteres que resumem o processo e contam histórico) e a falta de
   `disable-model-invocation`, `metadata`, `references/` e checklist.
8. Depois de uma compactação, a Claude Code devolve só os **primeiros 5.000 tokens** de cada skill usada. Numa caça
   longa, isso deixaria de fora quase tudo depois do §0 da `cacar-no-chrome`.
9. Há skills públicas boas para adaptar, todas para ler e reescrever, nunca para instalar como vêm:
   - ElevenLabs (MIT): o exemplo oficial usa *request stitching* no `eleven_v4`, e o `narrar.mjs` da pré-v1 só o
     manda no `multilingual_v2`;
   - MapLibre e Mapbox (MIT): terreno, cartografia e fontes de tile;
   - `humanizer` (MIT), para o roteiro;
   - `superpowers/writing-skills` (MIT), para o método de escrever skill;
   - `skill-creator` (Apache 2.0), já disponível nesta sessão.

   O OpenMontage (139 skills de vídeo) é AGPL-3.0: só para ideias.
10. "Todo aprendizado vira skill" tem um limite documentado. A regra que tem de valer sempre vai para **hook**, e
    narrativa de um erro único não é skill. Proposta: o aprendizado vira etapa ou "Pare se" numa skill que já
    existe; skill nova só quando há técnica reusável com gatilho próprio (§3.4).

---

## 1 · Como as skills funcionam hoje (documentação oficial)

Páginas lidas:
- Claude Code, Skills: https://code.claude.com/docs/en/skills
- Claude Code, Subagents: https://code.claude.com/docs/en/sub-agents
- Claude Code, Memory: https://code.claude.com/docs/en/memory
- Agent Skills, overview e best practices: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview e
  `/best-practices` (servidas também em docs.claude.com)
- O padrão aberto: https://agentskills.io/specification

A Claude Code segue o padrão aberto Agent Skills e acrescenta coisas dela (controle de quem invoca, execução em
subagente, injeção de contexto) (code.claude.com/docs/en/skills, início da página).

**A versão desta máquina.** O `claude --version` responde **2.1.220**. A documentação de hoje descreve recursos mais
novos, cada um com a versão mínima: `/skill-doctor` pede 2.1.252, e a sincronização de skills do claude.ai no terminal,
2.1.273. O app desktop pode trazer uma versão própria, e o que vale para ele se confere na primeira skill nova.

### 1.1 · Onde ficam

Tabela "Where skills live" (code.claude.com/docs/en/skills):

| Onde | Caminho | Vale para |
|---|---|---|
| Pessoal | `~/.claude/skills/<nome>/SKILL.md` | todos os projetos desta máquina |
| Projeto | `.claude/skills/<nome>/SKILL.md` | sessões neste repositório (é onde está a `cacar-no-chrome`) |
| Aninhada | `<subpasta>/.claude/skills/<nome>/SKILL.md` | sessões abertas nela ou abaixo; uma sessão acima a carrega quando trabalha em arquivos de lá |
| Plugin | `<plugin>/skills/<nome>/SKILL.md` | onde o plugin está ligado, como `/plugin:nome` |
| Empresa | pasta de configurações gerenciadas | todos da organização |
| claude.ai | as skills da conta | Cowork, nuvem e terminal logado na conta |

- Mesmo nome em dois lugares: empresa vence pessoal, e pessoal vence projeto. Uma skill pessoal chamada `x` passa
  por cima da `x` do canal ("Resolve skills that share a name").
- Nomes reservados: `synced` e `anthropic-skills`.
- A pasta pode ser um link simbólico.
- `.claude/commands/<x>.md` é o formato antigo. Ainda funciona, mas não tem arquivos de apoio.

### 1.2 · O frontmatter

Fonte: "Frontmatter reference" (code.claude.com/docs/en/skills) e a especificação (agentskills.io/specification).
Todos os campos são opcionais na Claude Code; o padrão aberto exige `name` e `description`. Campo com nome errado é
ignorado sem erro: a grafia, com hífen, tem de bater com a tabela.

| Campo | O que faz | Padrão aberto? | Uso provável no canal |
|---|---|---|---|
| `name` | nome do comando `/nome`; sem ele, vale o nome da pasta. Pelo padrão: até 64 caracteres, só `a-z`, `0-9` e hífen, sem hífen no começo, no fim ou dobrado, e **igual ao nome da pasta** | sim | sempre, igual à pasta |
| `description` | o que a skill faz e quando usar; é o que o Claude lê para decidir. Padrão: até 1.024 caracteres. Na lista da Claude Code, `description` + `when_to_use` cortam em **1.536** | sim | sempre (§1.10) |
| `when_to_use` | gatilhos e exemplos de pedido, somados à descrição na lista | não (Claude Code) | frases do Lucas que devem acionar |
| `disable-model-invocation: true` | o Claude não a invoca sozinho: só `/nome`. A **descrição sai da lista** (não gasta orçamento) e a skill **não pode ser pré-carregada** em subagente | não | skills que gastam ou baixam (caça, narração acima do teto, download do Epidemic) |
| `user-invocable: false` | some do menu `/`; só o Claude a usa | não | conhecimento de fundo |
| `allowed-tools` | ferramentas liberadas sem pedir permissão **no turno** em que a skill é chamada; vale até a próxima mensagem | experimental no padrão | pouco: no canal, as permissões já são amplas |
| `disallowed-tools` | tira ferramentas do Claude enquanto a skill está ativa; também vale só até a próxima mensagem | não | não serve como trava durável (§3.2, d) |
| `model`, `effort` | modelo e esforço do turno; com `context: fork`, os do subagente | não | roteiro em Fable, por exemplo |
| `context: fork` + `agent: <tipo>` | roda a skill num subagente novo, do tipo dado (`general-purpose`, `Explore`, `Plan` ou **um de `.claude/agents/`**), com o texto da skill como pedido | não | §2.2 |
| `background` | com `fork`, `false` espera o resultado no mesmo turno (pede 2.1.218; esta máquina tem 2.1.220) | não | `false` quando o passo seguinte depende do resultado |
| `hooks` | hooks que valem do uso da skill até o fim da sessão | não | regra que não pode falhar (§3.4) |
| `paths` | globs que limitam quando a skill entra | não | ex.: só com arquivos de `out/*/graphics/` |
| `shell` | `bash` (padrão) ou `powershell`, para os comandos injetados | não | — |
| `arguments`, `argument-hint` | argumentos nomeados (`$proj`) e dica no menu | não | `/narrar-elevenlabs los-angeles` |
| `license`, `compatibility` (até 500 caracteres), `metadata` (mapa livre) | aceitos, sem efeito na Claude Code | sim | `metadata` para a origem, a versão e o sha256 que hoje moram no CLAUDE.md |

Fora da Claude Code (o claude.ai, a API de skills e o `package_skill.py`), só valem os seis campos do padrão: `name`,
`description`, `license`, `compatibility`, `metadata` e `allowed-tools` ("Using skill frontmatter outside Claude
Code"). O canal roda na Claude Code, mas é bom não depender de campo que não se use.

**No corpo** (Claude Code):
- **Substituições:** `$ARGUMENTS`, `$0`, `$nome`, `${CLAUDE_SKILL_DIR}` e `${CLAUDE_PROJECT_DIR}` (este pede 2.1.196).
- **Injeção de contexto:** `` !`comando` `` roda antes de a skill chegar ao Claude, e a saída entra no lugar do
  comando ("Inject dynamic context"). Cada comando passa pelas regras de permissão e tem 2 minutos de limite. Serve
  para pôr na skill o estado do vídeo (`regie queue`, por exemplo). Cuidado: o comando roda sozinho a cada uso.

### 1.3 · O que entra no contexto, e quando

Em três níveis (platform.claude.com/…/agent-skills/overview, "How Skills work"; agentskills.io, "Progressive
disclosure"):

| Nível | Quando | Quanto |
|---|---|---|
| 1. Nome e descrição | sempre, no começo | uns 100 tokens por skill |
| 2. O corpo do `SKILL.md` | quando a skill é usada | o recomendado é menos de 5 mil tokens |
| 3. Arquivos de apoio | só quando lidos | nada até a leitura; o script roda e só a saída entra |

O ciclo de vida ("Skill content lifecycle" e "Skill descriptions are cut short", code.claude.com/docs/en/skills):
- **Uma vez usada, a skill fica na conversa.** O arquivo não é relido nos turnos seguintes. A orientação que vale a
  tarefa inteira tem de estar escrita como regra permanente, e não como passo de uma vez só.
- **Na compactação**, a Claude Code repõe a última chamada de cada skill, mas só os **primeiros 5.000 tokens** de
  cada uma, num total de 25.000 para todas. As mais antigas podem sumir inteiras. A própria página recomenda pôr o
  mais importante no topo do `SKILL.md` e chamar a skill de novo depois de uma compactação.

### 1.4 · Arquivos de apoio, scripts e tamanho

- **Estrutura** (padrão): `SKILL.md`, mais `scripts/` (código que roda), `references/` (texto que se lê quando
  preciso) e `assets/` (moldes, fontes).
- **O `SKILL.md` diz o que cada arquivo tem e quando ler** ("Add supporting files").
- **Tamanho:** o `SKILL.md` com menos de **500 linhas**, e o detalhe em arquivos à parte. A dica está nas três
  páginas.
- **Referências a um nível só:** todo arquivo de apoio se aponta direto do `SKILL.md`. Arquivo de referência com mais
  de 100 linhas leva sumário no topo (best practices).
- **Caminhos com `/`**, nunca `\`. Ferramenta de MCP com o nome inteiro (`servidor:ferramenta`).
- **Script é executado, não lido:** só a saída gasta contexto. Por isso a medida e a conferência (ffprobe, sha256,
  `words.json`) ficam melhor em script do que em prosa.
- **Avaliações antes do texto:** a Anthropic recomenda três cenários de teste antes de escrever muito, e comparar com
  e sem a skill ("Evaluation and iteration"). O `skill-creator` automatiza isso.

### 1.5 · Centenas e milhares de skills: o orçamento da lista

O ponto que mais mexe com a ideia de "milhares de skills". Seção "Skill descriptions are cut short"
(code.claude.com/docs/en/skills):

- **A lista leva sempre todos os nomes**, mas as descrições cabem num orçamento de caracteres que **escala a 1 % da
  janela de contexto** do modelo.
- **Passou do orçamento**, a Claude Code tira as descrições, começando pelas skills **menos usadas**. As mais usadas
  ficam com o texto inteiro.
- Sem descrição, o Claude perde as palavras que casam o pedido com a skill. Na prática, uma skill pouco usada vira só
  um nome.
- **Para aumentar o orçamento:**
  - o ajuste `skillListingBudgetFraction` (`0.02` = 2 %);
  - a variável `SLASH_COMMAND_TOOL_CHAR_BUDGET`, com um número fixo de caracteres;
  - `skillOverrides` com `"name-only"` nas skills de pouca prioridade.
- O teto de 1.536 caracteres por skill se ajusta com `skillListingMaxDescChars`.
- **Para medir o custo:**
  - `/doctor` estima o custo da lista e os maiores contribuintes;
  - `/context` mostra a linha Skills já cortada;
  - `/skill-doctor` mostra o custo e o uso de cada skill e aponta as nunca usadas (pede 2.1.252);
  - com `--debug`, o log avisa quando a lista estoura.

`skillOverrides` (no `settings`) tem quatro estados por skill ("Override skill visibility from settings"):

| Valor | O Claude vê | Menu `/` |
|---|---|---|
| `"on"` (padrão) | nome e descrição | sim |
| `"name-only"` | só o nome | sim |
| `"user-invocable-only"` | nada | sim |
| `"off"` | nada | não |

**A conta para o canal** (estimativa minha, não da página): a página não diz se o 1 % é em tokens ou em caracteres.
Com uns 4 caracteres por token, ele dá algo entre ~8 mil caracteres (janela de 200 mil tokens) e ~40 mil (janela de
1 milhão). Com descrições de 200 a 300 caracteres e o custo de marcação de cada linha, cabem de algumas dezenas a
pouco mais de cem skills com descrição inteira. As cerca de 70 que a sessão já lista (Vercel, Supabase,
`anthropic-skills:*`, Higgsfield) gastam parte disso.

E os nomes não são de graça: mil nomes, de 5 a 15 tokens cada, são 5 a 15 mil tokens em **todo** turno de **toda**
sessão que tem a ferramenta `Skill`.

Conclusão: "milhares" funciona como **acervo**. A maioria em `name-only` ou `off`, e as poucas dezenas do dia a dia
com descrição inteira. Desligar o que não é do canal (os plugins Vercel e Supabase, as Higgsfield pessoais) é mudança
de configuração do Lucas: precisa do ok dele.

### 1.6 · Skills e subagentes

Fonte: code.claude.com/docs/en/sub-agents ("What loads at startup" e "Preload skills into subagents") e
/docs/en/skills ("Run skills in a subagent").

- **O subagente começa limpo.** Não vê a conversa, as skills já usadas nem os arquivos já lidos.
- **O que ele recebe:** o próprio prompt, o pedido, **todos os CLAUDE.md** (só o Explore e o Plan pulam) e o git
  status. Ou seja, os 126 KB do CLAUDE.md do canal vão para todo especialista.
- **Ele pode chamar skills pela ferramenta `Skill`**, se ela estiver no `tools` dele. Sem `Skill` no `tools` (ou com
  ela em `disallowedTools`), não chama skill nenhuma.
- **O campo `skills:` no frontmatter do agente** pré-carrega o **texto inteiro** das skills listadas, já no começo. É
  diferente da lista de nomes. Não serve para skill com `disable-model-invocation: true`. Skill que falta só gera um
  aviso no log de debug.
- **A skill com `context: fork` e `agent: <tipo>`** abre um subagente desse tipo, com a skill como pedido. O tipo pode
  ser um agente de `.claude/agents/`. Esse subagente recebe o CLAUDE.md, mas não a conversa: a skill tem de se
  bastar.
- Sem `background: false`, roda em segundo plano, com as ferramentas do segundo plano: Read, Grep, Glob, Bash,
  PowerShell, Edit, Write, WebFetch, WebSearch, `Skill`, ToolSearch, SendMessage e outras. As ferramentas de MCP ficam
  todas.
- As edições de um fork em segundo plano ficam fora dos checkpoints: o `/rewind` não as desfaz.
- Ainda na página: `context: fork` só faz sentido com uma tarefa explícita. Uma skill que só tem orientação, rodada em
  fork, devolve nada de útil.

### 1.7 · Quem pode invocar, e como travar

- **Por padrão, o Lucas e o Claude invocam qualquer skill** ("Control who invokes a skill").
- **`disable-model-invocation: true` serve para o que tem efeito colateral.** A página dá como exemplos o deploy, o
  commit e o envio de mensagem.
- **O Lucas digita `/nome` no começo da mensagem.** Escrito no meio de uma frase, o `/nome` não roda a skill: só
  autoriza o Claude a usá-la naquela resposta.
- **Pelas permissões:** `Skill` na lista de negação desliga todas as skills. `Skill(nome)` e `Skill(nome *)` liberam
  ou negam uma.
- **Regra que não pode falhar nunca vai para hook**, que roda a cada evento, siga o Claude a skill ou não
  (Troubleshooting, "Claude skipped a rule that must hold every time"). Pode ficar no frontmatter da skill (`hooks`).

### 1.8 · Quando a skill nova passa a valer

- **A documentação:** a Claude Code vigia `~/.claude/skills/`, o `.claude/skills/` do projeto e os das pastas de
  `--add-dir`, e pega o que mudou **na mesma sessão, sem reiniciar** ("Live change detection"). A exceção é uma pasta
  `skills` que não existia quando a sessão abriu: essa pede `/reload-skills`. A vigilância cobre só o texto do
  `SKILL.md`.
- **O CLAUDE.md do canal** diz "Skill nova ou mudada só carrega numa sessão nova do app". Isso pode ter sido verdade
  numa versão antiga ou ser coisa do app desktop.
- **A conferir**, sem custo, na primeira skill nova: criar e ver se `/nome` aparece na mesma sessão. Até lá, vale o
  CLAUDE.md.

### 1.9 · Segurança

Fonte: overview, "Security considerations".
- Só se usam skills de fonte confiável: as escritas aqui ou as da Anthropic.
- Skill de terceiros se audita inteira: o `SKILL.md`, os scripts, as imagens, os pedidos de rede e os arquivos que ela
  acessa.
- Skill que busca coisa em URL externa é arriscada mesmo quando a fonte é boa, porque a dependência muda.

No canal, isso quer dizer **reescrever, não instalar**. Nenhuma skill pública entra como vem: o texto útil se reescreve
nas regras do canal, e nenhum script de terceiros roda sem ser lido e sem decisão do Lucas.

### 1.10 · Como escrever a descrição

Duas fontes, com uma diferença entre elas:

- **A Anthropic** (best practices, "Writing effective descriptions"):
  - a descrição diz o que a skill faz **e** quando usar;
  - sempre em terceira pessoa, porque vai para o prompt de sistema;
  - termos concretos, que o pedido vai conter;
  - nomes no gerúndio em inglês (`processing-pdfs`).
- **O `superpowers/writing-skills`** (obra/superpowers, MIT):
  - a descrição diz **só quando** usar, começando por "Use when…";
  - **nunca resume o processo**. O autor diz ter medido que, quando a descrição resume o fluxo, o agente segue o
    resumo e pula o corpo.

**A síntese para o canal:**
- o que a skill faz, numa frase;
- quando usar, com as palavras do pedido (do Lucas, em português);
- quando **não** usar;
- sem datas, sem histórico e sem resumo das etapas.

O histórico vai para `metadata` ou para `references/HISTORICO.md`.

### 1.11 · O CLAUDE.md e as skills

A página Memory (code.claude.com/docs/en/memory):
- recomenda **menos de 200 linhas por CLAUDE.md**, porque arquivo longo gasta contexto e baixa a adesão;
- manda o que é procedimento de várias etapas, ou só vale para uma parte do trabalho, para uma skill ou para uma regra
  de `.claude/rules/` limitada por caminho.

O CLAUDE.md do canal tem **1.412 linhas e 126 KB**, carregados em toda sessão e em todo subagente (§1.6).

Boa parte dele já é procedimento de várias etapas e vira skill naturalmente:
- a narração;
- o ingest;
- o master;
- os portões;
- a linha do tempo;
- o Discord;
- o Telegram;
- o Epidemic;
- a caça.

Isso alivia todos os especialistas de uma vez. O CLAUDE.md fica com quem é o Lucas, o que pode e o que não pode, e
um índice de uma linha por skill. A mudança é grande e é decisão do Lucas.

---

## 2 · Como os especialistas, o Claude central e os agentes gerais usam uma skill

### 2.1 · O que cada um tem hoje

| Quem | Tem a ferramenta `Skill`? | Vê a lista de skills? | Observação |
|---|---|---|---|
| Claude central (esta sessão do canal) | sim | sim | invoca pelo nome, ou o Lucas digita `/nome` |
| Subagente de workflow e agente geral (`general-purpose`) | sim (herda tudo) | sim | este levantamento roda num deles e recebeu a lista |
| Os 15 especialistas da pré-v1 (`.claude/agents/<id>.md`) | **não**: o `tools` lista só Bash, Edit, Glob, Grep, Read, Write e, em alguns, WebFetch e WebSearch | não | **não se editam** (cópia do motor, com sha256) |
| `conferente-de-midia` (do canal) | não (`Read, Grep, Glob, Bash, WebFetch, Write`) | não | **se edita aqui**: pode ganhar `skills:` ou `Skill` |

### 2.2 · Três caminhos para um especialista usar uma skill (sem editar o motor)

**A. A roupa aponta o `SKILL.md`.**
- Como: `marca/agentes/<id>.md` diz quando e qual arquivo ler inteiro.
- Já se faz: `marca/agentes/editor-de-arte.md`, linha 212, manda ler
  `ilustracao/habilidades/ilustracao-narrativa/SKILL.md` antes de construir uma peça que age.
- A favor: funciona hoje, com as ferramentas que o especialista já tem (Read). Também não mexe no motor.
- Contra: não é automático. Depende de a roupa citar e de o especialista ler. A leitura gasta contexto como qualquer
  arquivo, e sem a proteção da compactação.
- Recomendação: a skill mora em `.claude/skills/<nome>/` (assim o Claude central também a acha) e a roupa aponta esse
  caminho.

**B. A skill roda dentro do especialista** (`context: fork` + `agent: <id>`).
- Como: a skill (por exemplo `/narrar-elevenlabs`, ou uma skill do passo `mirror`) declara `agent: montador`. Ao ser
  invocada, a Claude Code abre um `montador` com o texto da skill como pedido.
- O especialista entra com o prompt de sistema dele (o ofício) e o CLAUDE.md, e no modelo dele, a não ser que a skill
  diga outro `model`. Isso cumpre "cada especialista roda no modelo com que vem do motor" se a skill **não** declarar
  `model`.
- A favor: é literalmente "agente + skill", sem tocar o `.claude/agents/`.
- Contra:
  - **sem prova no canal**;
  - roda em segundo plano por padrão (`background: false` para esperar);
  - não vê a conversa;
  - não se sabe como se comporta dentro de um `Workflow` nem como fica o transcript.
- Antes de usar: uma prova sem custo (uma skill de leitura com `agent: qc-visual`, por exemplo), conferindo no
  transcript o `subagent_type` e o `"model"`.

**C. O despacho manda ler.**
- Como: o pedido do Claude central ao especialista diz "leia `.claude/skills/<nome>/SKILL.md` inteiro e siga as
  etapas".
- É o caminho A sem mudar a roupa: útil para testar uma skill antes de pôr o ponteiro na roupa.

Não serve:
- **pôr `skills:` ou `Skill` no frontmatter dos 15**: quebra o sha256 da origem, e a próxima versão do motor passaria
  por cima;
- **`skillOverrides` para dar skill ao agente**: ele só controla a visibilidade na lista.

### 2.3 · O Claude central e os agentes gerais

- **O Claude central** usa a skill direto. As do passo, ele invoca antes de despachar; as de gasto (caça, narração
  acima do teto, Epidemic), só com o pedido ou o "sim" do Lucas. Para estas, `disable-model-invocation: true` faz o
  Lucas digitar `/nome`. Isso pesa contra a autonomia que ele pediu em 02/10, e **é decisão dele**.
- **O agente geral e o subagente de workflow** veem a lista e invocam sozinhos. Daí um cuidado: uma skill que mexe no
  navegador da caça ou gasta crédito precisa barrar, no texto, o uso por subagente. É o que a `cacar-no-chrome` já faz
  no §0, item 2.

---

## 3 · A skill que o canal já tem: `.claude/skills/cacar-no-chrome/SKILL.md`

### 3.1 · O que ela ensina de forma (vale copiar)

- **O frontmatter** com `name` igual à pasta e uma `description` que diz quando usar e quando não usar ("a lista de
  caça existir não basta").
- **O bloco "Origem"** (linhas 8 a 49):
  - de onde deriva (o molde da pré-v1, o commit e o sha256);
  - onde está a cópia fiel;
  - **o que mudou do molde**, com a decisão e a frase do Lucas;
  - **o que está acima dela** (o CLAUDE.md e a `marca/midia.md`), com a regra "se divergir, pare e avise o Lucas".

  É a procedência que o canal pede de tudo.
- **O papel**, logo depois do bloco: o que faz, o que não decide e de quem é a lista.
- **As seções numeradas, na ordem do trabalho:**
  - §0, antes de começar, toda vez;
  - §1, a entrada;
  - §2, a Fase A, de 2.0 a 2.6;
  - §3, a Fase B, de 3.1 a 3.3;
  - §4, levar à cena;
  - §5, quando parar;
  - §6, o relato.

  São as "etapas" do pedido do Lucas.
- **A lista fechada de ferramentas**, com as proibidas nomeadas.
- **As condições de parada** (§5) e **a saída** (§6): o relato no disco, o que vai ao git e o que nunca vai.

### 3.2 · O que falta para o padrão novo

| # | Achado | O padrão | Proposta |
|---|---|---|---|
| a | **Tamanho:** 862 linhas e ~12.400 palavras (estimo uns 18 a 20 mil tokens) | menos de 500 linhas e de 5 mil tokens no `SKILL.md`; o detalhe em `references/` | um `SKILL.md` com as etapas e as paradas; `references/` com `ferramentas.md`, `fase-a.md`, `fase-b.md`, `licenca-pdf.md`, `zip.md`, `relato.md` e `historico.md` |
| b | **Compactação:** só os primeiros 5.000 tokens voltam depois de uma compactação | o mais importante no topo; invocar de novo depois de compactar | o topo leva as travas (§0, itens 1 a 5; o "nunca"; o §5). Pôr na skill: "depois de uma compactação, invoque de novo" |
| c | **Descrição:** 986 caracteres; resume o processo e traz histórico (Brave desde 02/10, "Profile 1" até o Juneau) | o que faz numa frase, mais quando usar; sem resumo do fluxo nem datas | algo como: "Caça B-roll genérico nos bancos pagos do canal pelo navegador do Lucas, da lista de caça ao arquivo instalado. Use só quando o Lucas pedir a caça no chat (…); nunca por iniciativa própria, nem por subagente." |
| d | **Sem `disable-model-invocation`:** a regra "só com o pedido do Lucas" mora só no texto | é o campo feito para efeito colateral | com `true`, o Claude não a invoca sozinho e a descrição sai da lista (o Lucas digita `/cacar-no-chrome <proj>`). **Decisão do Lucas** (§2.3). O `disallowed-tools` não ajuda aqui: vale só até a próxima mensagem, e a caça atravessa muitas. Para travar de verdade as proibidas (`javascript_tool`, `form_input`, `switch_browser`…), a regra de negação vai em `permissions.deny` nos settings, o que também é decisão do Lucas |
| e | **A versão e o sha256 moram no CLAUDE.md**, que muda a cada edição da skill (seção "Caça nos bancos pagos", com o histórico dos sha) | `metadata` livre no frontmatter | `metadata: {origem: "regie-v1 7ab9543 template/.claude/skills/cacar-no-chrome", molde_sha256: "8bee5aad…", versao: "…", atualizada: "2026-10-07"}`; o CLAUDE.md fica com uma linha |
| f | **O changelog no corpo:** o "O que mudou do molde" cresce a cada decisão | detalhe fora do `SKILL.md` | `references/historico.md`; no corpo, só a regra vigente |
| g | **Sem checklist para copiar** | um checklist que o Claude copia e marca, para fluxos longos | uma lista "Caça <proj> — ☐ pedido do Lucas ☐ prova do perfil ☐ contas confirmadas ☐ Fase A ☐ conferente ☐ lista no chat ☐ sim ☐ Fase B item a item ☐ relato" |
| h | **Sem avaliações** | três cenários antes de escrever, comparados com e sem a skill | cenários de mesa, sem navegador: "lista existe, Lucas não pediu" (não caçar); "CAPTCHA no Envato" (parar o banco); "recolher saiu 0 com outro clipe" (não instalar) |
| i | **O nome** diz Chrome, e o navegador é o Brave | o nome descreve a atividade | trocar o nome muda o comando. Fica, e a descrição diz "pelo navegador do Lucas" |
| j | **Caminhos com `\`** (5 ocorrências, como o exemplo de PowerShell na linha 188) | caminhos com `/` | aceitável no exemplo de PowerShell, mas o resto com `/` |

### 3.3 · Esqueleto proposto para as skills do canal

É só uma proposta: nada foi criado. Segue o padrão aberto, os campos da Claude Code que fazem diferença aqui e a forma
da `cacar-no-chrome`.

```markdown
---
name: narrar-elevenlabs            # igual à pasta; a-z, 0-9 e hífen; até 64
description: >-                    # até ~400 caracteres: o que faz + quando; sem datas nem resumo das etapas
  Gera a narração de um vídeo do canal pela API da ElevenLabs, parágrafo por parágrafo, e a confere.
  Use quando o roteiro de out/<proj>/roteiro.md estiver aprovado e o pedido for narrar, refazer um
  parágrafo ou testar voz. Não use no Juneau nem para trocar a voz sem o Lucas.
when_to_use: "narra o vídeo", "refaz o parágrafo 12", "gera a voz"   # opcional
argument-hint: "<proj> [--refazer=N]"
metadata:
  origem: "canal; procedimento do CLAUDE.md, seção 'O master deste canal', item 4"
  versao: "1"
  atualizada: "AAAA-MM-DD"
  decisoes: "references/decisoes.md"
---

# Narrar na ElevenLabs

**Acima desta skill:** CLAUDE.md, canal.json › narracao, marca/voz.md. Se divergirem, pare e avise o Lucas.
**Quem roda:** o Claude central. Subagente não.
**Custo:** até 15.000 créditos por vídeo sem pedir ok; acima, pergunte antes da rodada.

## Etapas
1. Antes: confira X, Y. Feito quando: …
2. Simule (`--simular`) e anote o custo. Feito quando: …
3. …
N. Relato em out/<proj>/_pesquisa/narracao-conferencia.md.

## Pare se
- …

## Referências (leia só quando a etapa pedir)
- references/decisoes.md: as decisões do Lucas, com a frase e a data
- references/historico.md: o que mudou e por quê
- scripts/: o que roda (e só a saída entra no contexto)
```

### 3.4 · "Todo aprendizado de um erro deve virar uma skill"

O que as fontes dizem:
- **A Claude Code:** a regra que tem de valer sempre vai para **hook** (§1.7).
- **O `superpowers/writing-skills`:** skill é técnica, padrão ou ferramenta reusável, e não a narrativa de como se
  resolveu um problema uma vez ("Skills are NOT: Narratives about how you solved a problem once").
- **A lista:** cada skill a mais custa orçamento (§1.5).

Proposta para os ~76 itens do `APRENDIZADOS.md`. Cada um vira uma destas, nesta ordem de preferência:
1. **Uma etapa ou um "Pare se" numa skill que já existe.** Exemplos:
   - o estalo nas pontas dos trechos vai para a `narrar-elevenlabs`;
   - o render sem `--4k` vai para a skill de render.
2. **Um hook ou um portão** (script que sai diferente de 0), quando o erro não pode acontecer nunca. A pré-carga
   esquecida já tem o `chaves-nos-portoes conferir`.
3. **Uma skill nova**, só quando é técnica reusável com gatilho próprio. Exemplos: "baixar do histórico da
   ElevenLabs" e "medir clipe com ffprobe contra a página".
4. **Só registro** no `APRENDIZADOS.md`, quando é contexto e não procedimento.

---

## 4 · Skills públicas no GitHub que serviriam ao canal

Lidas pela API do GitHub em 08/10/2026: os metadados do repositório (licença e data do último push) e, quando dito,
o frontmatter e o corpo do `SKILL.md`. Nada se baixou nem se instalou.

**A regra para todas:** ler, reescrever nas regras do canal e registrar a origem em `metadata`. Script de terceiros
não roda sem ser lido e sem decisão do Lucas, e nada que chame API paga ou contorne site que recusa robô.

| Repositório | Licença | O que tem de útil | Scripts? | Risco | O que adaptar |
|---|---|---|---|---|---|
| **anthropics/skills** (github.com/anthropics/skills) | Apache 2.0 na maioria; `pdf`, `docx`, `pptx` e `xlsx` são *source-available*, não abertos (o LICENSE do `pdf` remete aos termos da Anthropic) | `skill-creator` (Apache 2.0: escrever, avaliar e otimizar a descrição), `pdf`, `canvas-design`, `doc-coauthoring`, `mcp-builder`, `webapp-testing` | sim (`pdf/scripts`, `skill-creator/scripts`) | baixo (é da Anthropic) | **Já estão na sessão** como `anthropic-skills:skill-creator`, `anthropic-skills:pdf` e outras, e o `webapp-testing` como skill pessoal. Usar o `skill-creator` para escrever e testar as skills do canal; o `pdf` serve à conferência do PDF de licença (§3.2 da caça), que hoje é PyMuPDF à mão |
| **anthropics/claude-plugins-official** | Apache 2.0 | `skill-creator` (plugin), `claude-md-management/claude-md-improver`, `plugin-dev/skill-development` | sim | baixo | o `claude-md-improver` para enxugar o CLAUDE.md de 126 KB (§1.11), com a decisão do Lucas |
| **elevenlabs/skills** (oficial) | MIT | `text-to-speech` (SKILL.md + `references/`); também `speech-to-text`, `sound-effects`, `music`, `voice-isolator`, `setup-api-key`; pasta `evals/` | quase só `.md`; `setup-api-key` mexe com a chave | médio: exemplos com SDK e chave em variável de ambiente; o canal lê a chave só por `chaves.mjs` | **Achado concreto:** a skill diz que o v4 aceita só `stability` e `similarity_boost` (sem `speed`, sem SSML), o que bate com o canal ("o v4 ignora velocidade"). O exemplo de *request stitching* (`previous_text`/`next_text`) usa `model_id="eleven_v4"`, e o `narrar.mjs` da pré-v1, linha 468, só os manda no `multilingual_v2` ("a doc não os garante no v3"). Para a queixa do Juneau ("transição abrupta também na fala"), vale conferir na documentação da API, sem gasto, se o v4 aceita. Não usar: `speech-to-text` (Scribe é pago; o canal usa Whisper local), `music` e `sound-effects` (a trilha é Epidemic) |
| **maplibre/maplibre-agent-skills** | MIT (com partes da Mapbox, também MIT) | `maplibre-terrain-rendering` (hillshade, `raster-dem`, terreno 3D, câmera), `-tile-sources`, `-source-wiring`, `-fonts-glyphs`, `-cartography`, `-pmtiles-patterns`; e, sobre o método, `-skill-authoring` e `-running-evals` | os scripts e as avaliações ficam na raiz do repositório; as skills são `.md` | baixo | a pré-v1 usa MapLibre (`src/mapa/camera-mapa.js`, `moldes/mapa-base.html`). O relevo e a câmera 3D da MapTiler "não têm prova registrada nesta máquina" (CLAUDE.md, tropeços): o `terrain-rendering` é referência para a skill "mapa animado na MapTiler". O `skill-authoring` e o `running-evals` mostram skill com `status: verified` e avaliação com perguntas reais |
| **mapbox/mapbox-agent-skills** | MIT | `mapbox-cartography` (hierarquia, cor e tipografia de mapa), `-style-quality`, `-data-visualization-patterns`, `-geospatial-operations`, `-token-security` | `evals/` e `references/` por skill | baixo, mas é API da Mapbox | a lógica de cartografia e de qualidade de estilo vale para a marca (`identidade.md` §6); a `token-security` reforça "a chave nunca no HTML" |
| **K-Dense-AI/claude-scientific-skills** | MIT | `geopandas`, `geomaster` (raster, STAC, terreno), `citation-management`, `literature-review`, `research-lookup` | **sim** (`scripts/` em várias) | médio: `citation-management` usa Google Scholar pela biblioteca `scholarly`, que é raspagem, proibida pela regra anti-robô do canal; OpenAlex e Crossref são APIs abertas | a skill de pesquisa com fontes pode copiar o modelo das APIs abertas (OpenAlex, Crossref, DOI) e o frontmatter com `compatibility` e `metadata.last-reviewed`; Google Scholar fica fora |
| **obra/superpowers** | MIT | `writing-skills` (escrever skill como teste: ver o agente errar sem a skill, escrever, ver acertar), `verification-before-completion`, `systematic-debugging`, `dispatching-parallel-agents` | pouco | baixo | `writing-skills` para o método de transformar aprendizado em skill; `verification-before-completion` casa com "o artefato vence o relato" |
| **blader/humanizer** | MIT | tira de texto em inglês os sinais de escrita de IA (contraste "não X, mas Y", frase de efeito no fim, trio forçado, travessão demais, palavras-clichê), com base na página da Wikipedia "Signs of AI writing" | só `scripts/validate-package.py` (empacotamento) | baixo | entra como etapa de revisão na skill de roteiro, subordinada à `marca/voz.md` (a voz do canal vence) |
| **calesthio/OpenMontage** | **AGPL-3.0** | 139 `SKILL.md` de produção de vídeo: `ffmpeg`, `video-edit`, `video-understand`, `elevenlabs`, `text-to-speech`, `remotion`, `hyperframes-*`, `gsap-*`, `d3-viz`, `playwright-recording`, `visual-style` | sim (ferramentas de pipeline) | **alto na licença**: AGPL é copyleft, e copiar texto ou código para o repositório do canal o põe sob a AGPL. Muitas skills são cópias de outros repositórios, com origem misturada | **só ler para ideias**, sem copiar. O `ffmpeg` dele é voltado ao Remotion |
| **digitalsamba/claude-code-video-toolkit** | MIT | `ffmpeg`, `moviepy`, `elevenlabs`, `playwright-recording`, `remotion` | sim | médio: há `runpod` (nuvem paga) | o `ffmpeg` como ponto de partida de uma skill do canal ("medir e cortar mídia"), reescrita com as medidas do canal (quadros a 15, 50 e 85 %, −14 LUFS, 3840×2160, 30 fps) |
| **remotion-dev/skills** | **nenhuma declarada** (a API do GitHub não mostra licença; sem licença, todos os direitos são do autor) | as boas práticas do Remotion, legendas | sim | não copiar | o canal não usa Remotion (o render é HTML no Chrome); no máximo, ideias de legenda |
| **Índices:** VoltAgent/awesome-agent-skills (MIT, "1000+"), ComposioHQ/awesome-claude-skills e travisvn/awesome-claude-skills (sem licença declarada) | — | o mapa do que existe; o VoltAgent lista skills oficiais de equipes (Remotion, ElevenLabs, Brave Search, fal, OpenAI `transcribe` e `speech`) | — | índice não é skill; cada item se audita na origem | ponto de partida para a próxima busca |

**O que não se achou com qualidade:**
- **Roteiro de YouTube:** só registros comunitários sem curadoria (claudskills.com "youtube-script-th",
  ailabs-393/ai-labs-claude-skills `script-writer`, MIT, último push em 11/2025). Nenhum de equipe conhecida. A skill
  `/gerar-roteiro-curiosidades` se escreve do próprio canal: `marca/voz.md`, `embalagem.md`, `cta.md` e
  `pronuncias.md`, o histórico do Juneau e de Los Angeles, e o `humanizer` como revisão.
- **Checagem de fatos:** nenhuma skill pública dedicada e confiável. O `verificador-de-fatos` do motor e o modelo de
  APIs abertas do `citation-management` são a base.
- **ffmpeg:** nenhuma skill oficial do FFmpeg. As que existem são de kits de terceiros, voltadas ao Remotion.
- **MapTiler:** nenhuma skill oficial. As da MapLibre cobrem o motor de mapa que a pré-v1 usa.

---

## 5 · Perguntas que ficam para o Lucas (nenhuma foi decidida aqui)

1. **As skills de gasto:** com `disable-model-invocation: true` (ele digita `/nome`) ou com o Claude invocando sozinho
   dentro das regras de hoje (o teto de 15 mil créditos, a lista no chat)?
2. **A lista:** desligar ou deixar em `name-only` as skills que não são do canal (os plugins Vercel e Supabase, as 9
   Higgsfield pessoais) para sobrar orçamento? Isso muda `settings`, e é dele.
3. **O CLAUDE.md:** enxugar de 1.412 linhas para um núcleo e um índice de skills? Isso mexe em toda sessão e em todo
   especialista.
4. **A prova do caminho B** (§2.2): uma skill de leitura que roda dentro de um especialista, antes de apostar nele.
