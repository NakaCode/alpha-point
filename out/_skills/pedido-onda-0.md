# Pedido da Sala: a Onda 0 das skills do canal · 18/11/2026, ~16:0x

**Quem:** um agente Opus, esforço xhigh, despachado pela Sala de controle.

## Por que agora

O plano das skills (`out/_skills/catalogo.md`, de 08/10/2026, com o cético em `out/_skills/cetico.md`) nunca começou: só existe a `cacar-no-chrome`.
Em 17/11/2026 o Lucas decidiu "Os dois, após a cota (Recomendado)": o portão de movimento e **a Onda 0 das skills, com as lições de julgamento dentro
das skills das etapas** (o registro: o catálogo, "A retomada (17/11/2026)", no fim). Em 18/11/2026, ~15:5x, ele mandou adiantar o trabalho antes da
virada das 23h. O portão de movimento roda ao mesmo tempo, com outro agente (não mexa nos arquivos dele: `ferramentas/portao-movimento*.mjs` e
`out/_tmp/portao-movimento/`).

## O que fazer

Leia o catálogo inteiro (as convenções da seção 1, a seção 2.7 e a 2.10, a seção 4, "Onda 0", e "A retomada"), o `out/_skills/cetico.md`, o
`out/_skills/aprendizados.md` (a classificação dos itens) e a `cacar-no-chrome` (`.claude/skills/cacar-no-chrome/`), que é a única skill do canal hoje.

1. **A skill `registrar-aprendizado-como-skill`** (`.claude/skills/registrar-aprendizado-como-skill/SKILL.md`, com o `gatilhos.md` ao lado), pela
   seção 1.5 do catálogo e pela forma da seção 1.3 (o que trava primeiro; "Pare se"; as etapas; a saída; o que ela não faz; as decisões do Lucas que ela
   segue; as lições). Nome e descrição pela seção 1.2, sem os campos que a seção 1.2 proíbe sem o ok do Lucas (`allowed-tools`, `` !`comando` ``,
   `hooks`, `model`/`effort` com `context: fork`, `fork` sem `agent`).
2. **O `ferramentas/skills-conferir.mjs`**, a conferência de forma da seção 1.7 (o nome igual ao da pasta, só `a-z`, `0-9` e hífen, até 64 caracteres;
   os campos do começo; o tamanho; o "Pare se"; o que mais a 1.7 pedir), com uma prova que reprova uma skill malformada e passa as boas.
3. **As três provas da Onda 0** (seção 4), com uma skill de mentira (um arquivo que manda dizer uma palavra combinada, criado só para a prova e
   **apagado no fim**): a) ela vale na mesma sessão?; b) o que um subagente vê?; c) o caminho "a skill roda dentro do especialista" (`context: fork` com
   `agent: qc-visual` e uma tarefa só de leitura) funciona, e com que modelo? Faça as que der daqui; **as que só a conversa principal da Sala pode fazer,
   deixe prontas** (o que rodar e o que conferir no registro) e diga quais são.
4. **As lições de julgamento do vídeo 7**: dos 23 achados mantidos nas revisões de espectador (`out/rio-columbia/_tmp/espectador-r1/mantidos.json` e
   `-r2/mantidos.json`), os ~6 que nenhum script mede (o portão de movimento pega o resto). Registre cada um **pelo procedimento da skill nova** (as quatro
   linhas; o destino, pela ordem da seção 1.5), no `licoes.md` da skill da etapa a que ele pertence, pelo nome que o catálogo dá (seção 2.1). Se essa
   skill da etapa ainda não existe, crie-a **mínima**: o nome e a descrição do catálogo, o "Pare se" do grupo (seção 2.10), as etapas como ponteiro para a
   roupa do especialista (sem copiar a roupa) e o `licoes.md`. Passe o `skills-conferir` em todas.
5. **O teste de disparo de mesa** (`gatilhos.md`, seção 1.7 e o cético): a lista de pedidos que devem e que não devem acordar cada skill nova.

## As regras

- **Não use `SendMessage` nem `send_message`.** Não commite nem dê push (só a Sala commita). Não use rede, navegador (nenhuma ferramenta
  `mcp__claude-in-chrome__*` nem `mcp__Claude_Browser__*`), vidIQ nem crédito.
- **Não edite** o `CLAUDE.md`, os arquivos de `sala/`, o `setores/REGIMENTO.md`, as roupas (`marca/agentes/`), os especialistas (`.claude/agents/`), o
  `.claude/settings.json` nem a `cacar-no-chrome`. O que eles devem ganhar (a linha "Skills do meu passo" das roupas, o `Skill: <nome>` no fim dos itens do
  `APRENDIZADOS.md`, o registro das skills) vai no relato, e a Sala aplica depois do cético dela.
- A trava do Python vale: script sempre num arquivo, `python -X utf8 -B <arquivo>.py`; nunca `python -`, heredoc ou pipe para o Python.
- Escreva só em `.claude/skills/` (as skills novas, e a de mentira só durante a prova), em `ferramentas/skills-conferir*.mjs` e em `out/_skills/onda-0/`.
- Grave o resultado no disco antes de responder. **O relato** (`out/_skills/onda-0/RELATO.md`, e um resumo curto em português na resposta): as skills
  criadas e o tamanho de cada uma; o `skills-conferir` e a prova dele; as três provas (o que deu e o que ficou para a Sala); as lições registradas, com o
  destino de cada uma; o que as roupas, o `CLAUDE.md` e o `APRENDIZADOS.md` devem ganhar.
