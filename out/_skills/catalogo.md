# Catálogo de skills do Alpha Point (proposta, 08/10/2026)

> Resposta ao pedido do Lucas de 08/10/2026 ("agente + skill"). Junta os três levantamentos desta pasta: `etapas.md`
> (as etapas e os procedimentos), `aprendizados.md` (os 78 itens do `APRENDIZADOS.md` e os tropeços) e `formato.md`
> (a documentação oficial e as skills públicas). Os números de consumo saem de `out/_modelos/consumo.csv` e
> `out/_modelos/peso.md`.
>
> **É só proposta.** Ninguém criou skill, editou agente, roupa, marca, `CLAUDE.md` nem motor. Nada se gastou, nada se
> baixou e nada se instalou. Cada skill só nasce com o ok do Lucas para a onda dela (seção 4).

---


> **As decisões do Lucas (08/10/2026, 22:1x de Brasília), às quatro perguntas do chat:**
> - "Como fica o desenho das skills?": **"66, lições dentro (Recomendado)"**. A opção dizia: "Uma skill por etapa ou ferramenta, e cada
>   lição de erro dentro da skill da etapa dela, num arquivo de lições. Só vira skill própria o erro com gatilho próprio."
> - "Quando começamos a criar as skills?": **"Tudo depois do vídeo 2"**. Nada se cria antes de o vídeo 2 ser entregue; depois, começa
>   pela Onda 0.
> - "As skills que gastam ou baixam (narração, caça nos bancos, Epidemic, vidIQ): como o Claude as usa?": **"Sozinho, nas regras de
>   hoje (Recomendado)"**: dentro do teto de créditos por vídeo, da lista com o "sim" dele no chat antes de baixar e do gasto registrado.
> - "Qual o nome da skill de roteiro?": **"gerar-roteiro-geografia (Recomendado)"**.
> As outras perguntas da seção 7 (de 4 a 12) ficam para a Onda 2, quando forem usadas.

## Em uma página

- **O que é uma skill aqui.** É uma pasta com um arquivo `SKILL.md`. Ele começa pelo **nome** e por uma **descrição**
  de quando usar, e depois traz as etapas numeradas, as regras e o que nunca fazer. O Claude lê só o nome e a
  descrição de todas. Quando um pedido bate com uma delas, ele abre aquela inteira e segue as etapas.
- **Quantas.** São **66 skills** no catálogo, em cinco grupos:
  - 24 etapas da linha;
  - 16 de ferramentas e serviços (ElevenLabs, MapTiler, Epidemic, Discord, Telegram, Premiere, bancos, vidIQ, render);
  - 13 de revisão e qualidade;
  - 5 de problemas práticos;
  - 8 de operação do canal.

  As cerca de 110 lições de erro ficam **dentro** delas, num arquivo `licoes.md` por skill, e não como entradas
  soltas. Assim todo aprendizado vira skill (própria ou dentro da skill da etapa), e o catálogo não estoura.
- **Por que não "milhares" soltas.** O nome de cada skill entra em toda conversa. As descrições cabem num orçamento
  de 1 % da memória do modelo, e quando ele estoura, a descrição das menos usadas some. Com ela some justamente o que
  faz o Claude achar a skill pelo pedido (seção 1.8). Milhares funcionam como acervo guardado. Para o dia a dia, o
  certo são algumas dezenas, uma por etapa, com as lições dentro.
- **O `CLAUDE.md` encolhe.** Hoje ele tem 126 KB, 1.412 linhas e uns 40 mil tokens, e vai inteiro para toda sessão e
  para todo agente. Depois da Onda 2, fica com **30 a 40 KB**: as regras, as decisões do Lucas na forma curta e os
  ponteiros para as skills. O procedimento sai para as skills (seção 3).
- **A economia.** Cada agente lançado começa com uns 25 mil tokens a menos e os relê a cada volta. São cerca de
  **1 milhão de tokens a menos por agente**, quase tudo releitura barata. No ritmo do vídeo 2, de 100 a 160 agentes
  por dia, dá **por volta de 2 pontos do limite semanal por dia de trabalho**. É uma estimativa, e a conta está na
  seção 6.
- **O custo de criar.** Vai de 20 a 40 pontos do semanal nas três ondas juntas (seção 6). Se paga em 2 a 4 semanas
  de produção.
- **A ordem.**
  - **Onda 0:** a skill que transforma erro em skill, e três provas sem custo.
  - **Onda 1:** o que o vídeo 2 usa nesta semana (consertos de cena, portões de mapa, revisão de espectador, linha do
    tempo, render, mapa, trilha e pacote do Premiere). Ela **só cria**: não mexe no `CLAUDE.md` com o vídeo correndo.
  - **Onda 2:** entre o vídeo 2 e o vídeo 3. Pauta, roteiro, voz e caça, mais o corte do `CLAUDE.md`.
  - **Onda 3:** o resto, à medida que o vídeo 3 chega a cada passo.
- **Skills da internet.** Valem como texto para ler e reescrever, nunca para instalar como vêm. As que servem são da
  ElevenLabs, da MapLibre e da Mapbox, o `humanizer`, o `writing-skills` e o `skill-creator` (seção 5). Para roteiro
  de YouTube, checagem de fatos, ffmpeg e MapTiler, não há skill pública confiável: essas se escrevem do próprio
  canal.
- **Perguntas para o Lucas.** São dez, todas na seção 7. A primeira é o nome da skill de roteiro.
- [cético] **A revisão cética** (08/10, `cetico.md` nesta pasta) corrigiu este catálogo onde está marcado "[cético]": descrições que casariam com o pedido errado ou que afrouxavam uma regra, números do formato sem fonte, a conta do teste de disparo, a lista de quem roda o quê, e duas lacunas (seção 2.9). Acrescentou o "Pare se" mínimo por grupo (seção 2.10).

---

## 1 · As convenções do canal para skills

### 1.1 Onde mora e como se chama

- **Pasta:** `.claude/skills/<nome>/SKILL.md`, dentro do canal. A skill pessoal (`~/.claude/skills/`) vence a do
  projeto quando os nomes coincidem, então nunca se dá a uma skill do canal o nome de uma pessoal.
- **Nome:** em português, kebab-case (palavras com hífen), **sem acento nem cedilha**. O padrão só aceita `a-z`,
  `0-9` e hífen, até 64 caracteres, e o nome é **igual ao da pasta**: `conferir-narracao`, nunca `conferir-narração`.
  - A skill de etapa começa por um verbo: `gerar-narracao-elevenlabs`, `montar-espelho`.
  - A skill de problema leva o sintoma: `site-recusou-robo-nao-contornar`, `achado-em-massa-suspeite-da-regua`.
  - Quando o serviço importa, ele entra no nome: `-elevenlabs`, `-maptiler`, `-epidemic`.
- **Nomes que ficam como estão:** `cacar-no-chrome` não muda, mesmo com a caça no Brave, porque trocar o nome
  mudaria o comando. A descrição dela diz "pelo navegador do Lucas".

### 1.2 O começo do arquivo: nome e descrição (como o Lucas pediu)

Todo `SKILL.md` abre com este bloco. Os dois primeiros campos são obrigatórios, e o resto, só quando servir:

```yaml
---
name: gerar-narracao-elevenlabs
description: >-
  Gera ou refaz a narração de um vídeo do canal pela API da ElevenLabs, um pedido por parágrafo, e a confere.
  Use quando pedirem "narra o vídeo", "refaz o parágrafo 12" ou "gera a voz". Não use no Juneau nem para
  trocar a voz.
argument-hint: "<proj> [--refazer=N]"
metadata:
  versao: "1"
  atualizada: "2026-10-08"
  origem: "canal; CLAUDE.md, seção da narração, item 4"
---
```

- **`description`**, o campo que faz a skill ser achada:
  - o que ela faz, numa frase;
  - quando usar, com **as palavras que o Lucas ou o erro usariam** ("ficou lida", "o recolher saiu 3", "a conexão
    com o navegador caiu");
  - quando não usar, se há uma skill vizinha que se confunde com ela.
  - Até **~350 caracteres**. O padrão aceita 1.024, mas a lista corta acima de 1.536 e o orçamento é dividido entre
    todas.
  - **Sem datas, sem histórico e sem resumo das etapas.** Um autor de skills públicas relata que, quando a descrição
    resume o fluxo, o agente segue o resumo e pula o corpo (`formato.md` §1.10). [cético] Não é medida: o texto dele
    ("Testing revealed…") traz um caso só, sem número de rodadas. Vale como cautela, não como prova.
  - [cético] O `skill-creator` da Anthropic manda o contrário: descrição "um pouco insistente" (*pushy*), porque o
    Claude tende a não usar skill. No canal, isso só vale para skill sem efeito colateral: nas que gastam, baixam,
    publicam ou mexem no navegador do Lucas, a descrição diz "só quando o Lucas pedir no chat" e nunca se força.
- **`metadata`** guarda a versão, a data da última mudança e a origem. No caso de skill adaptada da internet, ele
  guarda também o repositório, o commit e a licença. É aqui que passa a morar o histórico de versões que hoje enche o
  `CLAUDE.md` (4,7 KB só de sha256 da caça).
- **`argument-hint`** é a dica do argumento (`<proj>`) quando o Lucas digita `/nome`.
- **Campos que dependem de decisão do Lucas** (seção 7):
  - `disable-model-invocation: true`: a skill só roda quando ele digita `/nome`, e o Claude não a usa sozinho. Serve
    às que gastam ou baixam;
  - `context: fork` com `agent: <especialista>`: a skill roda dentro de um especialista. Ainda não foi provado no
    canal (Onda 0).
- **Campo que não se usa:** nenhum inventado. Campo com nome errado é ignorado sem aviso.
- [cético] **Campos que afrouxariam uma regra do canal, e que nenhuma skill usa sem o ok do Lucas:**
  - `allowed-tools`: libera ferramenta sem pedir permissão no turno da skill. Na `cacar-no-chrome`, nunca (a lista
    fechada da extensão continua sendo regra de texto e, se ele quiser, de `permissions.deny`);
  - `` !`comando` `` no corpo (injeção de contexto): roda sozinho a cada uso, antes de o Claude ler a skill. Nunca com
    comando que gasta, baixa, avança a Régie ou toca o arquivo de chaves; só leitura barata (`regie queue`, `git status`);
  - `hooks` no frontmatter: valem da skill até o fim da sessão. É configuração, e é dele (pergunta 7);
  - `model` ou `effort` numa skill com `context: fork` + `agent: <especialista>`: passariam por cima do modelo do
    frontmatter do especialista, contra a decisão de 26/09 ("os que vierem com fable devem continuar como fable…");
  - `context: fork` sem `agent:` (cai no `general-purpose`): o subagente herda as ferramentas de MCP, inclusive as do
    navegador do Lucas e as do painel do app, que subagente nunca usa. Toda skill com `fork` declara o `agent`.

### 1.3 O corpo: a forma de toda skill

O corpo tem menos de 500 linhas, e o ideal é até ~10 KB. **O que trava vem primeiro**, porque depois de uma
compactação da conversa só os primeiros ~5 mil tokens de cada skill voltam.

[cético] Os "menos de 500 linhas" e os "5.000 tokens" são da documentação; os "~10 KB" são escolha do canal, sem fonte.
A documentação diz também que as skills repostas depois da compactação dividem **25.000 tokens no total**: numa sessão
longa do Claude central, com muitas skills usadas, as mais antigas podem voltar sem nada. Por isso o "Pare se" vem no
topo, e a skill da etapa se chama de novo depois de cada compactação.

```markdown
# <Título curto>

**Acima desta skill:** CLAUDE.md, canal.json › <bloco>, marca/<arquivo>.md §<n>. Se divergirem, pare e avise o Lucas.
**Quem roda:** o Claude central | o especialista <id> | qualquer um.
**Custo:** <o que gasta, quanto, e quem liberou> (só nas que gastam).

## Pare se
- 3 a 6 linhas: as regras de segurança que valem nesta etapa, repetidas aqui de propósito.

## Antes de começar
- o que ler, o que conferir no disco.

## Etapas
1. <ação>, com o comando exato. **Feito quando:** <o arquivo ou a saída que prova>.
2. …

## Saída
- os arquivos que ficam, onde se registra, quem se avisa.

## O que esta skill NÃO faz
- os limites, e para qual skill ir.

## Decisões do Lucas que ela segue
- ponteiro para a seção da marca ou do canal.json, com a data. A frase dele só se transcreve onde ela é a própria
  regra (ex.: "sem títulos de capítulo na tela").

## Lições (leia quando a etapa pedir)
- licoes.md: os erros desta etapa, uma linha cada.
```

Três cuidados:
- **Valor de configuração se lê do `canal.json` na hora**, nunca se copia em prosa. Voz, modelo, estabilidade,
  pausa, cauda e perfil do mapa ficam lá. A cópia em prosa já divergiu: a `marca/voz.md` §1 ainda diz `eleven_v3` e
  a voz antiga, e o `canal.json` está no v4 com a voz calma (o item 46 do `APRENDIZADOS.md`, de novo).
- **Decisão do Lucas mora num lugar só** (a marca, o `canal.json` ou o `CLAUDE.md`). A skill aponta para ela e não a
  repete.
- **Medida e conferência vão em script, não em prosa.** Do script só a saída entra na conversa.

### 1.4 Os arquivos ao lado do `SKILL.md`

| Arquivo | O que tem | Quando se lê |
|---|---|---|
| `licoes.md` | os erros desta etapa, uma linha cada: **sintoma → causa → o que fazer → item do `APRENDIZADOS.md`** | quando a etapa manda, ou quando algo dá errado |
| `gatilhos.md` | 3 frases que **devem** levar à skill e 2 vizinhas que **não** devem | ao criar ou mudar a descrição (o teste de disparo) |
| `references/` | o detalhe longo, as decisões com a frase do Lucas e o histórico (`historico.md`) | só quando a etapa pede |
| `scripts/` | o que hoje se copia de um vídeo para o outro, agora com o `<proj>` como argumento | roda; não se lê |

**Os scripts saem das pastas de vídeo.** Hoje o vídeo 2 chama scripts que moram em `out/juneau/_pesquisa/`
(`ingest-local.py`, `tratar-narracao.py`, `gerar-master.mjs`, `conferir-*.py`), e o `gate.mjs`, o `preparar-voz.mjs`
e o `pagina-decisoes.py` foram copiados do Juneau com o nome do vídeo dentro. Ao entrar numa skill, cada um ganha o
`<proj>` por argumento e passa por uma prova: o mesmo resultado que o original sobre o vídeo 2. O original fica até
o vídeo 3 passar.

### 1.5 Como uma skill nasce de um erro ("todo aprendizado vira skill")

A skill `registrar-aprendizado-como-skill` faz isto, e é a primeira a ser criada. No mesmo dia em que o erro é
resolvido:

1. **Escrever o erro em quatro linhas:** o sintoma (com a mensagem literal), a causa medida, o que resolveu e como
   evitar.
2. **Procurar a skill da etapa** pela descrição. Quase sempre ela existe.
3. **Escolher o destino, nesta ordem:**
   - **a) Lição na skill da etapa:** uma linha no `licoes.md` e, se a lição muda um passo, o passo muda junto. Esse
     é o caso mais comum.
   - **b) Skill própria de problema:** quando o erro tem um **gatilho próprio**, uma mensagem ou um sintoma que
     aparece fora da etapa. Exemplo: "55 de 55 cenas reprovaram com a mesma mensagem" vale em portão, em varredura e
     em revisão.
   - **c) Trava automática:** um portão (script que sai diferente de 0) ou um hook, quando o erro **não pode
     acontecer nunca**. A documentação oficial diz que regra que tem de valer sempre não fica só em skill, porque a
     skill pode não ser lida. Hook mexe em configuração, e é com o ok do Lucas.
   - [cético] **c') Regra de segurança:** se o erro tocou numa regra de segurança do canal (download sem o "sim",
     site que recusa robô, chave, música em IA, motor, navegador do Lucas, gasto acima do teto), a regra fica **também**
     no `CLAUDE.md`, nunca só na skill (o `etapas.md` S60, passo 4, já dizia; a primeira versão deste catálogo perdeu).
   - **d) Aviso ao motor:** se um canal de culinária também sofreria o erro, o problema é do motor. Vai ao
     `APRENDIZADOS.md` e ao Lucas e ao Mateus, além da lição aqui.
4. **No `APRENDIZADOS.md`**, o item continua guardando a história e passa a terminar com `Skill: <nome>`. A skill não
   repete a história.
5. **Se a descrição mudou, refazer o teste de disparo** (`gatilhos.md`).
6. **Postar no `#aprendizados`**, como hoje.
7. **Se a regra existia em outro lugar**, procurar (`grep`) a frase antiga em `.claude/skills/`, `marca/agentes/` e
   `CLAUDE.md`, e só então dar por registrada.

Assim, **todo aprendizado de erro termina numa skill**, e o catálogo fica no tamanho que o orçamento aguenta. A
classificação dos 78 itens já está feita em `aprendizados.md` §5: quais viram lição, quais viram skill e quais são
regra do motor.

### 1.6 Como os especialistas usam as skills ("agente + skill")

Os 15 especialistas do motor **não têm a ferramenta de skills** e não se editam (são cópia do motor, com sha256).
Por isso não "veem" o catálogo sozinhos. Há três caminhos, e nenhum mexe no motor:

1. **A roupa aponta (o principal, funciona hoje).** Cada roupa `marca/agentes/<id>.md` ganha no topo uma seção
   **"Skills do meu passo"**, de 3 a 8 linhas, com o nome, quando usar e o caminho de cada `SKILL.md`. O especialista
   já lê a roupa e lê o arquivo com `Read`. A roupa do `editor-de-arte` já faz isso com a skill do ilustrador (linha
   212).
2. **O despacho repete.** O pedido do Claude central diz: "Skills do seu passo: leia `.claude/skills/<a>/SKILL.md`
   antes de começar e siga as etapas. ~~Elas valem mais que a sua memória do ofício.~~ [cético] Se a skill contradizer
   o `CLAUDE.md`, a marca, a sua roupa ou uma regra dura do seu ofício, pare e diga no relato: a skill não passa por
   cima de nenhum deles. Se uma etapa disser 'Pare se', pare e diga no relato." A skill `despachar-especialista`
   monta esse pedido. (A frase riscada daria a uma skill com erro mais força que a regra que ela devia seguir.)
3. **A skill roda dentro do especialista** (`context: fork` com `agent: <id>`). É o "agente + skill" literal, sem
   editar o agente. **Ainda não foi provado.** A Onda 0 faz uma prova sem custo antes de alguém apostar nele.

Mais três pontos:
- O `conferente-de-midia` é do canal e se edita aqui. Ele pode ganhar o campo `skills:`, que já carrega as skills
  dele no começo.
- O Claude central e os agentes gerais dos workflows veem o catálogo e usam as skills direto.
- A tabela de quem lê o quê fica na seção 2.7.

### 1.7 Versão, registro e índice

- **A versão** fica no `metadata` (`versao`, `atualizada`), e o histórico, em `references/historico.md`. O git
  guarda o resto, e não há sha256 de skill no `CLAUDE.md`. A exceção é a caça, que é regra de segurança: o
  `CLAUDE.md` guarda uma linha só, "se a skill e esta seção divergirem, pare e avise o Lucas".
- [cético] **Na caça, a linha do `CLAUDE.md` guarda também o sha256 vigente** (só o de hoje; o histórico sai). Sem ele,
  uma mudança na skill que ninguém registrou não se percebe. E, com a caça dividida em `fases/*.md` (seção 2.8), o
  sha256 do `SKILL.md` sozinho não cobre as fases: vale o sha256 de um manifesto da pasta inteira (cada arquivo e o
  seu sha256), conferido no §0 de cada caça. O mesmo para qualquer skill que guarde regra de segurança em arquivo ao lado.
- **O índice:** `.claude/skills/INDICE.md`, uma linha por skill, com o nome, o grupo, a onda, quem usa, a versão e a
  data. Ele é para o Lucas e para as roupas. **Não entra no `CLAUDE.md`**: um índice de 66 linhas lá voltaria a
  carregar uns 8 KB em todo agente.
- **Uma conferência automática**, pequena, na Onda 0 (`ferramentas/skills-conferir.mjs`). Ela confere:
  - nome igual à pasta, só `a-z`, `0-9` e hífen;
  - descrição presente e com até 350 caracteres;
  - `gatilhos.md` presente;
  - o índice batendo com as pastas.
- **Skill vinda da internet** registra no `metadata` o repositório, o commit e a licença, e no `historico.md` o que
  se mudou.
- **Quando a skill nova passa a valer.** O `CLAUDE.md` diz que só numa sessão nova do app. A documentação de hoje
  diz que vale na mesma sessão, menos quando a pasta `skills` não existia ao abrir. A Onda 0 confere. Até lá, vale o
  `CLAUDE.md`.

### 1.8 O tamanho do catálogo (por que 66, e não milhares)

- O nome de cada skill vai para a lista **em toda volta de toda conversa** que tem a ferramenta de skills: o Claude
  central e os agentes gerais dos workflows, que são 1.247 dos 1.709 agentes medidos. [cético] No `consumo.csv` de
  hoje (1.712 linhas) são 1.247 `workflow-subagent` **mais 117 `general-purpose`**, ~1.364.
- As descrições cabem num orçamento de **1 % da ~~memória do modelo~~ janela de contexto do modelo** [cético: é o termo
  da página]. Quando ele estoura, a Claude Code tira primeiro a descrição das skills menos usadas.
- **A conta para o canal:**
  - 66 descrições de ~250 caracteres dão uns 16 mil caracteres, ou ~5 mil tokens: ~~cabem~~ [cético] **não medido**.
    A página diz que o orçamento é de caracteres e escala a 1 % da janela, sem dizer a conversão. Numa janela de 200
    mil tokens, ele pode ser de ~8 mil caracteres, menos que as 66 sozinhas. O central roda numa janela maior (o pico
    medido passa de 560 mil tokens), mas os agentes do central em Sonnet (decisão de 08/10) podem rodar numa de 200 mil
    e ver o catálogo sem descrição. A Onda 0 mede com `/context` (linha Skills) e `/doctor`, no central e num agente
    em Sonnet;
  - a sessão já lista umas 70 skills que não são do canal (Vercel, Supabase, Higgsfield, `anthropic-skills`), que
    disputam o mesmo espaço; várias passam de 600 caracteres cada;
  - mil skills seriam ~~de 60 a 80 mil tokens só de lista~~ [cético] uns 5 a 15 mil tokens só de nomes (`formato.md`
    §1.5), mais as descrições até o teto do orçamento; o resto perde a descrição e vira nome solto. O problema de mil
    não é o tamanho: é que quase todas ficariam impossíveis de achar pelo pedido.
- **O ajuste possível**, que é configuração e pede o ok do Lucas: deixar as que não são do canal só com o nome
  (`"name-only"`) ou desligadas.

---

## 2 · O catálogo

**As colunas:**
- **Nome** é o da pasta.
- **Descrição** é o texto que vai no `SKILL.md`, já no tamanho certo.
- **De onde vem:** `S..` é o número em `etapas.md`; `N`, `R`, `G`, `M`, `T`, `F` e `X` são os códigos de
  `aprendizados.md`; os números soltos são os itens do `APRENDIZADOS.md`.
- **Onda** é a da seção 4.

As sobreposições entre os dois levantamentos já estão juntas: cada linha aqui é uma skill só, e a lição dela vem
junto. Os nomes seguem o pedido do Lucas onde ele deu um: `gerar-narracao-elevenlabs` e
`gerar-mapa-animado-maptiler`. Na skill de roteiro, o nome é pergunta (seção 7).

### 2.1 Etapas da linha (24)

Da pauta à publicação, na ordem do vídeo. As de voz, mapa, trilha e XML estão na 2.2, e as de revisão, na 2.3.

| # | Nome | Descrição | De onde vem | Onda |
|---|---|---|---|---|
| 1 | `escolher-pauta` | Gera candidatos a tema, junta os repetidos, confere fontes e gancho, derruba o fraco com um cético e entrega a lista para o Lucas escolher. Use quando ele pedir o próximo vídeo, um tema novo ou sugestões de pauta. | S01; método de `pautas/2026-10-07-video-2.md` | 2 |
| 2 | `pesquisar-dossie-de-pauta` | Monta o dossiê de fatos do tema escolhido, uma dimensão por pesquisador, cada uma com um cético, e um crítico que cruza as dimensões. Use quando o tema está escolhido e falta a pesquisa com fontes. | S03 + T2; itens 12, 66 | 2 |
| 3 | `gerar-roteiro-geografia` (ou `gerar-roteiro-curiosidades`: seção 7) | Escreve o roteiro de narração do Alpha Point (geografia e geopolítica, inglês dos EUA, canal sem rosto) a partir do dossiê: plano, orçamento de palavras, gancho em cinco tempos, partes e o gate. Use quando pedirem o roteiro de um vídeo ou uma versão nova dele. | S04; item 13; `marca/voz.md`, `embalagem.md` | 2 |
| 4 | `pagina-de-decisoes-para-o-dono` | Monta uma página com a troca exata de cada item que o Lucas precisa decidir (roteiro, título, voz) e aplica só o que ele responder no chat. Use quando houver muitas decisões de texto de uma vez. | S06 + T4; item 14 | 2 |
| 5 | `titulo-e-miniatura` | Propõe título e miniatura pelos moldes das referências, com júri, leitores americanos a frio e a miniatura conferida em três tamanhos. Use quando faltar título ou miniatura, ou quando pedirem "como as referências". | S07 + T5; item 15; `embalagem.md` | 2 |
| 6 | `preparar-texto-para-voz` | Gera a cópia do roteiro para a voz (números e datas por extenso, pronúncias) e prova que desfazer as trocas devolve o texto aprovado. Use depois que o roteiro foi aprovado e antes de narrar. | S08 + N8; itens 13.3, 36.2 | 2 |
| 7 | `relogio-de-palavras` | Cria o `words.json` (o tempo de cada palavra) sem o Scribe pago: o alinhamento da ElevenLabs preso ao som e conferido pelo Whisper local. Use depois da narração tratada, ou para refazer o relógio. | S14 + N7; itens 29, 37 | 2 |
| 8 | `gerar-master` | Gera o master do vídeo: tela preta 3840×2160 com a narração tratada e a cauda de 20 s. Use depois que o Lucas aprovou a escuta da narração. | S15 | 2 |
| 9 | `abrir-video-na-linha` | Escolhe o nome curto do vídeo, abre na Régie e prepara as pastas e a `linha.md`. Use ao começar um vídeo novo, ou se `regie open` criou um vídeo errado (como "--help"). [cético] Tirar um registro errado do banco é com cópia de segurança antes e dito ao Lucas. | S16 + F3; itens 33, 17.33 | 2 |
| 10 | `avancar-passo-da-linha` | Confere no disco o que o passo tinha de entregar, roda os portões dele, pede o cético e só então avança na Régie. Use quando um passo parece pronto ("pode avançar", `regie advance`). | S17 + F3; item 10 | 2 |
| 11 | `montar-espelho` | Monta o plano de cenas (`espelho.json`) a partir do relógio de palavras, com os tempos fechados à mão na grade de 30 quadros. Use no passo `mirror` ou para refazer o espelho. | S18; itens 17.8, 36.3 | 3 |
| 12 | `pesquisar-imagens-e-b-roll` | Acha foto e vídeo reais para cada cena, primeiro no acervo aberto; o que só existe em banco pago vira lista de caça (sem abrir banco). Use no passo de pesquisa de imagens. [cético] Duplica a 34 no "acervo aberto": esta fica com o **plano** (o que cada cena pede, de onde, e a lista de caça no formato do §1 da `cacar-no-chrome`); a mecânica do `buscar-midia` e do `entregar` é só da 34. A descrição diz "para buscar e entregar, `pesquisar-midia-acervo-aberto`". | S19 | 3 |
| 13 | `pesquisar-pessoas-e-logos` | Acha o retrato livre de quem a cena cita, ou decide o card de nome e cargo; com instituição, só o nome escrito quando não há logo permitida. Use quando a cena cita uma pessoa ou instituição. | S20 | 3 |
| 14 | `pesquisar-documentos-e-dados` | Acha o documento original, confere a permissão de mostrar a página e confere o número contra a fonte, no formato de tela dos EUA. Use quando a cena mostra um documento, uma página antiga ou um número. | S21 | 3 |
| 15 | `gerar-geometria-de-mapa` | Produz a geometria real de um mapa (país, recorte, rio, rota, ponto, linha antiga) com licença e procedência. Use quando a cena precisa de forma real, ou quando o recorte sai com o nome errado, a rota sai com "órfãos", o Overpass dá 504 ou a linha antiga desloca sobre o satélite. | S22 + G2 a G5; itens 17.16, 17.17, 17.20–17.23, 55, 77 [cético: 17.18 é do motor e 17.19 é do render] | 3 |
| 16 | `dirigir-arte` | Define o arco visual, o ritmo e a variedade entre as cenas (mesa, mapa, ilustração) e a conta de mundo real, antes de qualquer cena. Use no passo `art_direction`. | S27 | 3 |
| 17 | `reger-imagem` | Divide cada cena em planos e escolhe o que cobre cada um e o que se busca. Use no passo `conducting`. | S28 | 3 |
| 18 | `escrever-textos-de-tela` | Escreve rótulo, número e legenda em inglês dos EUA, no formato do canal, sem repetir a fala nem passar a precisão que a voz arredondou. Use quando uma cena precisa de texto na tela. | S29 | 3 |
| 19 | `escrever-credito-na-tela` | Decide, pela licença, se a peça leva crédito, como, em que tamanho e o que vai para a descrição. Use ao pôr crédito em qualquer cena, ou ao preencher `licenca` e `credito_na_tela`. | S36 + M12; itens 36.13, 42 | 3 |
| 20 | `editar-cena-html` | Cria uma cena HTML 4K do canal: o contrato da cena, as cores por papel, o tipo, as margens sob a câmera, o movimento e o que validar nesta máquina. Use para fazer uma cena nova (para consertar, `consertar-cena`). | S31 + R8; itens 53, 58, 59, 76 | 3 |
| 21 | `ilustrar-com-fisica` | Aplica o núcleo `ilustracao/` com a física a um objeto que se mexe (etiqueta, placa, fio, mão) e confere o contato e o balanço contra o tempo de leitura. Use quando a cena tem objeto ilustrado que age. | S34 + R9; item 75 | 3 |
| 22 | `montar-mesa-de-satelite` | Monta o fundo "mesa de satélite": imagem pública escurecida e desfocada, com a exposição e o contraste do crédito medidos. Use quando a cena pede a mesa de satélite. | S35 | 3 |
| 23 | `gerar-chamadas-cta` | Grava as peças de chamada (inscrição e pedido de comentário) com fundo transparente, mede e registra o momento e a pergunta. Use quando o vídeo precisa das chamadas. | S47; `marca/cta.md` §8 | 3 |
| 24 | `montar-descricao-youtube` | Monta a descrição do YouTube com capítulos, créditos de mapa, mídia e trilha, a pergunta do comentário e os links de licença. Use quando o vídeo está pronto para publicar. [cético] Capítulos só do `espelho.json` › `_capitulos`: nunca pelo vidIQ (`vidiq_generate_video_chapters`, `vidiq_video_upload`) nem por outra IA com o vídeo mixado, que leva a música do Epidemic. | S49 | 3 |

### 2.2 Ferramentas e serviços (16)

| # | Nome | Descrição | De onde vem | Onda |
|---|---|---|---|---|
| | **ElevenLabs** | | | |
| 25 | `escolher-voz-elevenlabs` | Escolhe, refaz ou testa a voz do narrador (audição pública, Voice Design, Remix, teste às cegas) dentro do crédito. Use quando a voz "ficou lida", muda de tom, vai expirar ou quando um vídeo novo pede teste de voz. [cético] Trocar a voz é decisão do Lucas: a queixa "ficou lida" dispara o diagnóstico sem gasto e uma pergunta a ele, nunca Voice Design ou Remix por conta própria. O site da ElevenLabs só com ele vendo, sem digitar senha. | S09 + N5 + N4; item 16 | 2 |
| 26 | `gerar-narracao-elevenlabs` | Gera ou refaz a narração pela API, um pedido por parágrafo, com o custo simulado antes e o gasto registrado. Use quando pedirem "narra o vídeo" ou "refaz o parágrafo N". [cético] Saiu o "gera a voz", que casaria também com a 25, e volta o "Não use no Juneau nem para trocar a voz" do exemplo da seção 1.2. Só o Claude central: o `narrar.mjs` está em "Não se rodam" para os especialistas, e a skill resolve essa aparente contradição do `CLAUDE.md` dizendo quem roda. | S10; itens 17.28, 17.34 | 2 |
| 27 | `conferir-narracao` | Transcreve cada parágrafo com o Whisper local e compara palavra a palavra com o roteiro, olhando de perto o fim de cada um. Use depois de narrar ou refazer, ou quando suspeitar de corte, palavra trocada ou repetida. | S11 + N1 + N3; itens 17.15, 17.29, 17.32, 74 | 2 |
| 28 | `tratar-narracao` | Esmaece as pontas dos trechos, limita o pico e acrescenta os 20 s da tela final, sem mudar nenhum tempo. Use depois de qualquer rodada do narrar, ou quando há estalo no fim de um parágrafo ou a emenda soa como "outra voz". | S12 + N2; itens 17.30, 17.31, 17.34 | 2 |
| 29 | `baixar-do-historico-elevenlabs` | Recupera uma narração já paga pelo histórico da conta, sem gerar de novo. Use se ela foi gerada pelo site, ou se o navegador do app entregou o MP3 cortado. [cético] Em 25/09 a baixa foi "com o ok do Lucas": a skill pede o mesmo até ele dizer outra coisa. | S13 + N6; itens 17.14, 37 | 3 |
| | **MapTiler** | | | |
| 30 | `gerar-mapa-animado-maptiler` | Cria uma cena de mapa animado sobre a base MapTiler: geometria conferida, tratamento da base, linhas, rótulos, câmera, crédito e a prova sem desperdiçar pedido pago. Use para fazer uma cena de mapa. [cético] Saiu o "ou consertar", que casa também com a 48: lista de defeitos vai à `consertar-cena`, que manda ler esta. | S32; itens 17.25, 36.10, 54, 56 | 1 |
| 31 | `base-e-gasto-maptiler` | Aplica e controla a base de mapa que o Lucas decidiu para o vídeo (MapTiler, relevo 3D, prova de cor sobre Landsat sem pagar) e anota o contador de pedidos. Use antes de render ou portão de mapa, ou para testar cor e contraste sem gastar. [cético] Era "Decide e controla": a base (`canal.json` › `mapa.perfil`) e o relevo 3D são decisão do Lucas, por vídeo. | S33 + G1; itens 17.24, 17.26, 56 | 1 |
| | **Render (Chrome)** | | | |
| 32 | `renderizar-cena-4k` | Renderiza a cena ou tira o quadro em 4K, sempre com `--4k` e a pré-carga do canal, e confere o carimbo `2160p`. Use para renderizar, ou quando aparecer "a conexão com o navegador caiu" ou "WebSocket 1006". | S44 + R1; itens 57, 17.19, 17.27, 36.1 | 1 |
| | **Bancos pagos e acervos** | | | |
| 33 | `cacar-no-chrome` (já existe; reorganizada) | Caça B-roll nos bancos pagos pelo navegador do Lucas, da lista de caça ao arquivo instalado, com a lista de aprovação no chat. Use só quando o Lucas pedir a caça no chat; a lista de caça existir não basta; nunca por conta própria nem por subagente. [cético] Voltaram "no chat" e "a lista existir não basta", que a descrição de hoje tem e o `CLAUDE.md` exige. | S26 + M1 a M9; itens 39, 40, 48, 50–52, 68–73 | 2 |
| 34 | `pesquisar-midia-acervo-aberto` | Busca e baixa foto e vídeo de acervo aberto (Commons, NASA, NARA, Smithsonian) com licença e procedência, e entrega à mão o que o `entregar` recusa. Use na pesquisa de mídia livre, ou quando o `entregar` sai 3 ("sem selo"). | S23 + M11 + M13; itens 41, 42, 17.9 | 2 |
| | **vidIQ** | | | |
| 35 | `medir-concorrencia-vidiq` | Mede quem já fez o tema no YouTube com o vidIQ, dentro de um teto de créditos que o Lucas aprovou. Use antes de escrever o roteiro, ou quando pedirem "quem já fez esse tema". [cético] O teto se pede a cada vídeo (o "até 100" de 07/10 era do vídeo 2), e só a busca e o saldo se usam: o vidIQ tem ferramentas que geram roteiro, voz, música e sobem vídeo, e nenhuma entra aqui. | S02 | 2 |
| | **Epidemic Sound** | | | |
| 36 | `escolher-trilha-epidemic` | Monta a lista de músicas do vídeo no Epidemic (faixa, artista, duração e trecho), confere a lista contra o servidor e leva ao chat. Use quando o vídeo chega à trilha. | S45 | 1 |
| 37 | `baixar-trilha-epidemic` | Baixa só as linhas que o "sim" do Lucas cobriu, uma por vez, e instala no acervo da trilha com a licença da assinatura. Use depois que ele aprovou a lista no chat. | S46 | 1 |
| | **Discord e Telegram** | | | |
| 38 | `avisar-o-dono` | Avisa o Lucas fora do chat: status e aprendizados no Discord; o que espera por ele, o erro que segura o vídeo e o limite atingido também no Telegram. Use a cada marco, pergunta ou erro, ou se a chave do bot for recusada (401/403). [cético] Chave recusada: a nova entra pelo Lucas no Bloco de Notas, nunca pelo chat nem pelo Claude, e o valor nunca se lê nem se imprime. | S54 + F5; itens 44, 45 | 2 |
| 39 | `publicar-guia-discord` | Mantém a versão para amigos do sistema de avisos (ferramenta, guia e página) sem nada do canal. Use quando o Lucas quiser repassar o guia, ou quando a ferramenta do canal mudar algo que serve a qualquer projeto. | S55 | 3 |
| | **Premiere** | | | |
| 40 | `entregar-xml-premiere` | Gera o XML do Premiere, confere, monta o pacote para outro computador (com o aviso do volume da trilha) e entrega com o LEIA-ME. Use no passo `finalize`, ou quando as mídias aparecem offline noutro computador. | S48 + R12; item 60 | 1 |

### 2.3 Revisão e qualidade (13)

| # | Nome | Descrição | De onde vem | Onda |
|---|---|---|---|---|
| 41 | `rodar-bancada-do-roteiro` | Quatro lentes (fatos, clareza, locução e crítico) julgam o mesmo texto, e os achados viram uma lista fechada de trocas, nunca uma reescrita. Use depois de escrever ou mudar um roteiro, ou quando as lentes se contradizem. | S05 + T1; item 13 | 2 |
| 42 | `verificar-fatos-do-video` | Dá veredito a toda afirmação checável da voz e da tela, por cobertura e não por amostra, e marca o que muda para reconferir. Use quando há roteiro, texto de tela ou dossiê a conferir. | S30; item 36.9 | 3 |
| 43 | `conferir-midia` | O conferente julga cada mídia contra a frase que a cena cobre (contexto, licença, técnica, repetição), e só o aprovado vai à cena. Use quando chega mídia nova, ou antes de uma cena citar um arquivo. | S24; itens 38, 73 | 2 |
| 44 | `rodar-portoes-de-cena` | Roda os portões de uma cena ou do vídeo, com o alvo certo de cada um e o `REGIE_MOTOR`, e lê o resultado. Use para rodar portões, ou quando um script sai com "uso:", "não encontrado", pilha de ENOENT ou `MOTOR_SEM_ARQUIVO`. [cético] Em vídeo com cena de mapa (todo vídeo, do 2 em diante), comece pela 45: as duas se sobrepõem, e a descrição de cada uma aponta a outra. | S37 + R3; itens 36.7, 36.11, 17.18 | 1 |
| 45 | `portoes-em-cena-de-mapa` | Roda os portões em vídeo com mapa: a pré-carga que dá a chave, o `portao-mapa` do til e do rodapé, e o `conferir` que prova que cada portão rodou com o mapa pintado. Use em vídeo com cena de mapa, ou quando um portão passou sem o satélite carregado. | S38 + R2; itens 64, 11 | 1 |
| 46 | `triar-reprovacao-de-portao` | Separa o que é declarar, defeito ou limitação, e leva ao Lucas só a limitação, cena por cena, com o trecho. Use quando um portão reprova e a causa não parece estar na cena. | S39 + R5; itens 63, 65 | 1 |
| 47 | `medir-margens-da-cena` | Mede a cada 0,25 s a caixa de todo texto e pílula contra as margens, para pegar o que a câmera leva para fora da área segura. Use antes do `qc-visual` em cena com câmera que anda, ou quando algo sai cortado no meio do movimento. | S40 + R7; itens 58, 78 | 1 |
| 48 | `consertar-cena` | Aplica uma lista de defeitos a cenas prontas sem criar defeito ao lado: lista do que divide a área, medida no navegador, reconferência da cena inteira e cético por achado. Use quando o espectador, o `qc-visual` ou o Lucas devolvem consertos. [cético] O comentário do Lucas vira primeiro uma lista de opções no chat (`CLAUDE.md`, linha do tempo, passo 7; "os ajustes depois da revisão dele continuam indo como lista de opções"): só a escolha dele vira conserto. | nova: R6 + o fluxo de conserto de `etapas.md` S31 e S42; item 59 | 1 |
| 49 | `julgar-cena-qc` | Julga a cena pronta por lente, sobre quadros reais e com os números da marca; julga e não conserta. Use no passo `qc`. | S41 | 3 |
| 50 | `revisar-espectador` | Um revisor que não leu o cabeçalho vê os quadros a cada 0,5 s com a fala ao lado e pergunta só o que um espectador perguntaria; um cético tenta derrubar cada achado. Use antes de o Lucas ver o vídeo. | S42 + R10; item 61 | 1 |
| 51 | `aprovar-na-linha-do-tempo` | Sobe a linha do tempo local, avisa o Lucas com o link, transforma comentário em lista de opções e só libera o render do que ele aprovou no chat. Use quando um lote passou nas conferências. | S43 + R11; item 62 | 1 |
| 52 | `cetico-com-escopo` | Monta o pedido a um cético com o que conta como defeito e até onde ele vai, para evitar rodadas infinitas de "mais um caso". Use ao pedir que alguém ataque um portão, uma medida, um conserto ou uma lista de trocas. | R5; itens 65, 13 | 1 |
| 53 | `checar-antes-de-publicar` | Na véspera: reconfere os fatos que mudam, a licença de tudo no vídeo, a trilha e os limites de plano, e entrega a lista ao Lucas, que publica. Use antes de publicar. | S50 + T3; item 36.9 | 3 |

### 2.4 Problemas práticos (5)

As skills de problema com gatilho próprio, que aparece em qualquer etapa. Os outros cerca de 40 problemas de
`aprendizados.md` estão na descrição e no `licoes.md` da skill da etapa onde acontecem. O "render caiu" está na
`renderizar-cena-4k`, o "recolher saiu 3" na `cacar-no-chrome` e o "ficou lida" na `escolher-voz-elevenlabs`.

| # | Nome | Descrição | De onde vem | Onda |
|---|---|---|---|---|
| 54 | `site-recusou-robo-nao-contornar` | O que fazer, e o que nunca fazer, quando um site devolve 403, captcha, verificação de robô ou pede login; e como ler página oficial do Alasca pela cópia arquivada. Use nesses casos, e antes de dar rede a um subagente. | S25 + M10; itens 14, 48, 66, 67 | 2 |
| 55 | `armadilhas-do-windows` | Os erros de Node, npm, caminho e hora desta máquina e a saída de cada um, sem mexer na configuração. Use ao ver "npm.ps1 não pode ser carregado", `ERR_UNSUPPORTED_ESM_URL_SCHEME`, hora errada com `TZ=`, ou ferramenta ausente (jq, turf, pdftoppm). | S57 + F1 + F2; itens 3, 17.11, 17.12, 43 | 1 |
| 56 | `achado-em-massa-suspeite-da-regua` | Antes de consertar: quando quase todas as cenas reprovam com a mesma mensagem, a régua ou a leitura do portão é a primeira suspeita. Use quando um portão ou uma varredura acusa o mesmo defeito em dezenas de cenas. | R4; itens 76, 63, 54.1 | 1 |
| 57 | `retomar-apos-troca-de-conta` | Confere a extensão, as conversas e o estado no disco antes de tocar em qualquer coisa. Use ao retomar depois de trocar a conta do Claude, bater no limite de uso ou reiniciar no meio de um vídeo. | S59 + T9; item 49 | 3 |
| 58 | `copiar-do-molde-byte-a-byte` | Copia arquivos do molde ou de um pacote para o canal mantendo o sha256 da origem válido também num clone. Use ao trazer versão nova de algo que veio do motor ou do pacote do ilustrador. [cético] Só com o pedido do Lucas: o apoio e o `ilustracao/` "não se editam", e nada de `pull` nem `checkout` no clone `C:/projetos/regie-v1`. Só o Claude central. | F4; item 35 | 3 |

### 2.5 Operação do canal (8)

| # | Nome | Descrição | De onde vem | Onda |
|---|---|---|---|---|
| 59 | `contexto-do-canal` | O núcleo que todo trabalho no canal precisa: sem rosto, um relógio só, fala e tela em inglês dos EUA e notas em português, formato de tela, cauda de 20 s, mapa e o que nunca se roda. Use ao começar um trabalho ou ao despachar alguém, ou quando um agente copiou formato brasileiro. [cético] "Ao começar um trabalho" casa com todo pedido, e o núcleo já vai em toda sessão pelo `CLAUDE.md` (que mantém o idioma, seção 3.2). Proposta: um arquivo de referência que as roupas apontam (o §0 comum), não uma skill no catálogo; se ficar skill, `user-invocable: false` e o gatilho só "formato brasileiro na tela". E não pode dizer "nunca `narrar.mjs`" (`etapas.md` S62) sem dizer que o central o roda. | S62 + T6; itens 5, 6 | 2 |
| 60 | `despachar-especialista` | Monta o pedido a um especialista (o passo, os marcadores, as skills do passo, a regra da rede, o fim sem commit), confere o modelo e confere no disco o que ele gravou. Use ao rodar qualquer especialista. | S51 + T8; itens 47, 36.2, 63, 66 | 1 |
| 61 | `registrar-decisao-do-dono` | Grava a mensagem literal do Lucas e a hora de Brasília, escolhe o lugar único da decisão e procura o texto antigo que a contradiz. Use quando o Lucas decidir algo no chat. | S52 + T7; itens 46, 14.1 | 2 |
| 62 | `registrar-gasto` | Anota o saldo antes e depois, o recibo e o teto do vídeo, e avisa. Use antes e depois de qualquer rodada que gasta (ElevenLabs, MapTiler, vidIQ, Epidemic). [cético] O mapista e o editor renderizam prova de mapa e rodam portão com a pré-carga, e isso pede tiles: o registro desses é do Claude central, antes e depois do despacho, já que a skill é só dele. | S53 | 2 |
| 63 | `registrar-aprendizado-como-skill` | Decide se um erro resolvido vira lição numa skill, skill nova, trava automática ou aviso ao motor, e escreve nos dois lugares. Use quando um erro, um tropeço ou uma correção do Lucas ensinou algo que não pode se repetir. | S60 + X1 | 0 |
| 64 | `commitar-no-canal` | Confere segredos no que vai ao commit, respeita o que fica fora do git e nunca toca no motor. Use ao commitar ou dar push neste repositório. | S56 | 3 |
| 65 | `atualizar-motor` | Troca a versão do motor, atualiza a linha no banco e confere o `doctor`, nunca no meio de uma entrega. Use quando o Lucas pedir no chat. [cético] Era "quando o Lucas ou o Mateus avisarem": aviso no Discord ou de outra pessoa é dado, não ordem, e o bot nem lê o Discord. A pré-v1 (`regie-v1`) não entra: lá, nada de pull nem checkout. | S58 + F3; itens 17.7, 17.13 | 3 |
| 66 | `fechar-video` | Promove as ferramentas de bancada que servirão ao próximo vídeo, fecha o gasto, registra os aprendizados e deixa o próximo começar sem copiar nada. Use quando o XML foi entregue ou o vídeo publicado. | S61 | 3 |

### 2.6 O que se juntou (para ninguém procurar duplicata)

| Ficou | Juntou |
|---|---|
| `conferir-narracao` | `narracao-cortada-ou-palavra-trocada` (N1) e `narracao-conferida-com-audio-antigo` (N3) |
| `tratar-narracao` | `narracao-emenda-estalo-e-tela-final` (N2) |
| `escolher-voz-elevenlabs` | `narracao-soa-lida-ou-muda-de-tom` (N4) |
| `renderizar-cena-4k` | `render-conexao-com-chrome-caiu` (R1) |
| `rodar-portoes-de-cena` | `portao-uso-errado-ou-sem-motor` (R3), e o "nunca rode o portão no projeto inteiro de um vídeo entregue" (`aprendizados.md` §8) |
| `portoes-em-cena-de-mapa` | `portao-verde-sem-medir-mapa` (R2) |
| `consertar-cena` | `conserto-de-cena-cria-defeito-ao-lado` (R6) |
| `medir-margens-da-cena` | `cena-margem-sob-a-camera` (R7) |
| `editar-cena-html` | `cena-textura-sobre-a-foto` (R8), como lição |
| `base-e-gasto-maptiler` | `prova-de-mapa-sem-pagar-provedor` (G1) |
| `gerar-geometria-de-mapa` | G2 a G5, como lições com `references/` próprias |
| `cacar-no-chrome` | M1 a M9, como fases e lições (seção 2.8) |
| `pesquisar-midia-acervo-aberto` | M11 e M13 |
| `escrever-credito-na-tela` | `credito-na-tela-vs-licenca` (M12) |
| `armadilhas-do-windows` | `hora-de-brasilia-no-windows` (F1) e F2 |
| `abrir-video-na-linha`, `avancar-passo-da-linha`, `atualizar-motor` | `regie-v0-sem-help-e-sem-desfazer` (F3), repartida |
| `contexto-do-canal` | `adaptar-oficio-pt-br-para-video-en-us` (T6) |
| `avisar-o-dono` | F5 |
| `triar-reprovacao-de-portao` | o escopo do conserto e a triagem (R5 fica também como skill própria, `cetico-com-escopo`) |

### 2.7 Quem lê o quê ("Skills do meu passo" de cada roupa)

| Especialista (modelo) | Skills do passo |
|---|---|
| `montador` (opus) | `contexto-do-canal`, `montar-espelho`, `relogio-de-palavras` (só para entender o `words.json`) |
| `pesquisa-imagens` (opus) | `contexto-do-canal`, `pesquisar-imagens-e-b-roll`, `pesquisar-midia-acervo-aberto`, `site-recusou-robo-nao-contornar`; [cético] e **só o §1 (a entrada) da `cacar-no-chrome`**, que é o formato da `lista-de-caca.json` que ele escreve (`CLAUDE.md`, "Quem faz o quê"; o `etapas.md` §5 já o dava). Na caça dividida, a entrada fica num arquivo próprio, sem as fases do navegador |
| `pesquisa-pessoas`, `pesquisa-logos` (opus) | `contexto-do-canal`, `pesquisar-pessoas-e-logos`, `pesquisar-midia-acervo-aberto`, `site-recusou-robo-nao-contornar` |
| `pesquisa-documentos`, `pesquisa-dados` (opus) | `contexto-do-canal`, `pesquisar-documentos-e-dados`, `escrever-credito-na-tela`, `site-recusou-robo-nao-contornar` |
| `pesquisa-geo` (opus) | `contexto-do-canal`, `gerar-geometria-de-mapa`, `site-recusou-robo-nao-contornar` |
| `conferente-de-midia` (opus, do canal) | `contexto-do-canal`, `conferir-midia`; pode ganhar o campo `skills:` |
| `diretor-de-arte` (fable) | `contexto-do-canal`, `dirigir-arte`, `base-e-gasto-maptiler`, `montar-mesa-de-satelite` |
| `regente-de-imagem` (opus) | `contexto-do-canal`, `reger-imagem`, `base-e-gasto-maptiler` |
| `redator-de-tela` (opus) | `contexto-do-canal`, `escrever-textos-de-tela`, `escrever-credito-na-tela` |
| `verificador-de-fatos` (opus) | `contexto-do-canal`, `verificar-fatos-do-video`, `site-recusou-robo-nao-contornar` |
| `editor-de-arte` (fable) | `contexto-do-canal`, `editar-cena-html`, `consertar-cena`, `ilustrar-com-fisica`, `montar-mesa-de-satelite`, `escrever-credito-na-tela`, `medir-margens-da-cena`, `renderizar-cena-4k` |
| `mapista` (opus) | `contexto-do-canal`, `gerar-mapa-animado-maptiler`, `base-e-gasto-maptiler`, `consertar-cena`, `escrever-credito-na-tela`, `portoes-em-cena-de-mapa`, `medir-margens-da-cena`, `renderizar-cena-4k` |
| `qc-visual` (sonnet) | `contexto-do-canal`, `julgar-cena-qc`, `rodar-portoes-de-cena` (só a leitura do resultado), `triar-reprovacao-de-portao` (a exceção do Lucas) [cético: só a leitura do `_excecoes-portao.json`; a triagem e a ida ao Lucas são do central]; [cético] `ilustrar-com-fisica` (ele julga a construção do ilustrador pela roupa, §5; o `etapas.md` §5 já o dava) |
| `designer-de-navegacao` | nenhuma (não tem trabalho no canal) |
| **Claude central** | todas, pelo catálogo |

**Só o Claude central roda** as que gastam crédito, mexem em chave, abrem o navegador do Lucas ou dependem de
decisão dele:
- a voz e o relógio: `gerar-narracao-elevenlabs`, `escolher-voz-elevenlabs`, `conferir-narracao`, `tratar-narracao`,
  `baixar-do-historico-elevenlabs`, `relogio-de-palavras`, `gerar-master`;
- a caça e a mídia comprada: `cacar-no-chrome`, `medir-concorrencia-vidiq`, as duas do Epidemic;
- os avisos: `avisar-o-dono`, `publicar-guia-discord`;
- a linha e a entrega: `abrir-video-na-linha`, `avancar-passo-da-linha`, `aprovar-na-linha-do-tempo`,
  `entregar-xml-premiere`;
- a operação: `registrar-*`, `commitar-no-canal`, `atualizar-motor`, `despachar-especialista`.

[cético] **Faltavam na lista acima**, pelo `etapas.md` §5 ("só do central") e pelo `CLAUDE.md`: `revisar-espectador`, `gerar-chamadas-cta`, `montar-descricao-youtube`, `checar-antes-de-publicar`, `fechar-video`, `retomar-apos-troca-de-conta`, `copiar-do-molde-byte-a-byte`, `medir-concorrencia-vidiq` (já estava), a parte "navegador do app" da `site-recusou-robo-nao-contornar` e a triagem da `triar-reprovacao-de-portao` (a ida ao Lucas). E há uma divergência a decidir: o `etapas.md` põe `portoes-em-cena-de-mapa` como só do central, e este catálogo a dá ao `mapista`. O `CLAUDE.md` permite ("Quem roda os portões é o Claude central (e o editor-de-arte e o mapista antes de entregar)"), mas cada rodada com a pré-carga pede tiles: fica com o mapista, e o central registra o gasto antes e depois do despacho (`registrar-gasto`).

O especialista que precisar delas recebe o resultado, não a skill. O texto de cada uma diz "subagente não", como a
`cacar-no-chrome` já diz.

### 2.8 A `cacar-no-chrome`, em particular

A caça é a skill que existe hoje, e é a maior: 862 linhas e 75 KB, contra o padrão de menos de 500 linhas. Depois de
uma compactação da conversa, só o começo dela voltaria. Proposta, para a Onda 2:

- **Um `SKILL.md` de ~8 KB** com o que trava:
  - quando usar;
  - a ordem das fases;
  - o "Nunca";
  - o CAPTCHA;
  - os tetos;
  - a convivência com o render;
  - a lista de aprovação.
- [cético] **A lista fechada das ferramentas da extensão e as proibidas** ficam no `SKILL.md`, no topo, e não em `fases/0-prova-do-perfil.md`: é a regra que mais pesa se a fase não for lida, e a reposição depois de compactar só traz o começo do arquivo.
- **As fases em arquivos ao lado**, lidos na hora:
  - `fases/0-prova-do-perfil.md`;
  - `fases/1-fase-a.md`;
  - `fases/2-lista-de-aprovacao.md`;
  - `fases/3-fase-b-download.md`;
  - `fases/4-levar-para-a-cena.md`;
  - `fases/5-parar-e-relatar.md`.
- **As lições M1 a M9** no `licoes.md`.
- **A descrição** cai de 986 caracteres para ~300 e perde o histórico.
- **O histórico de sha256** sai do `CLAUDE.md` para o `references/historico.md`.

**Antes de apagar qualquer linha**, compara-se trecho a trecho com o `CLAUDE.md`. O que só o `CLAUDE.md` diz (as
decisões do Lucas, o Brave, as contas) fica nele ou entra na skill como "Decisões". A regra "se a skill e o
`CLAUDE.md` divergirem, pare e avise o Lucas" continua.


### 2.9 [cético] Lacunas: procedimento do `CLAUDE.md` sem skill

Achadas na conferência contra o `CLAUDE.md`. Não entram na contagem de 66 até o Lucas decidir.

| Proposta | Descrição | De onde vem | Onda |
|---|---|---|---|
| `conferir-chave-nova` | Confere, sem ler nem imprimir o valor e sem gastar, uma chave que o Lucas trocou no arquivo de chaves (ElevenLabs, Epidemic, Discord, Telegram, MapTiler): a cópia de antes guardada pelo nome, o teste sem custo de cada serviço e o `onde()` para saber de onde ela vem. Use quando o Lucas avisar que trocou uma chave, ou quando um serviço responder 401. Só o Claude central. | `CLAUDE.md`: a troca da ElevenLabs (30/09), as duas do Epidemic (05 e 06/10), a do Discord e a do Telegram; o mesmo passo feito à mão cinco vezes | 2 |
| `entregar-no-drive` (ou etapa da `entregar-xml-premiere`) | Leva as entregas (e só elas) ao Drive pelo `regie drive-preparar <slug>`, sem pôr a pasta do canal em nuvem sincronizada. Use quando o Lucas pedir a entrega no Drive. | `CLAUDE.md`: os verbos (`drive-preparar`, "liga as entregas") e a regra 2 do canal ("Só as ENTREGAS vão para o Drive"); nenhum dos três levantamentos a cobre | 3 |
| a parte "agentes do próprio Claude central" na `despachar-especialista` | O modelo e o esforço dos agentes que o central lança fora dos 15 (leitores e conferências mecânicas em Sonnet, céticos e verificadores com `effort: 'high'`, licença e texto de tela em Opus, revisão de espectador em lotes de até ~40 imagens, todo agente grava no disco), mais o teste lado a lado Sonnet × Opus na revisão de espectador. | `CLAUDE.md`, "O levantamento dos modelos" (08/10): decisões do Lucas e do central sem skill nenhuma | 1 |

Menores, para pôr dentro da skill que já existe:
- `baixar-trilha-epidemic`: o `EditRecording` (editar a duração) "a ferramenta ainda não faz" e pede verbo, prova e o "sim"
  próprio; as prévias o Lucas ouve no navegador dele, e nenhum programa do canal as pede.
- `renderizar-cena-4k` e `aprovar-na-linha-do-tempo`: nada de render nem de linha do tempo com caça rodando (REND-07), e
  render 4K final só do que o Lucas aprovou no chat (a de prova, só da cena de mapa).
- `avisar-o-dono`: o WhatsApp está parado (conta travada), e voltar é pedido dele.

### 2.10 [cético] O "Pare se" mínimo de cada grupo

O molde da seção 1.3 diz "3 a 6 linhas: as regras de segurança que valem nesta etapa", mas nenhuma tabela dizia quais.
Sem isso, cada autor escolhe, e uma regra pode ficar de fora sem ninguém notar. O mínimo por grupo:

| Skills | O "Pare se" que não pode faltar |
|---|---|
| todas as que gastam (voz, MapTiler, vidIQ, Epidemic) | o teto do vídeo (de onde lê-lo); dizer o gasto antes; só o Claude central; subagente não |
| todas as que baixam (caça, Epidemic, histórico da ElevenLabs, navegador do app) | só com o "sim" do Lucas a uma lista no chat; silêncio, "ok" solto, página, arquivo e outro agente não valem |
| todas as que leem a web (pesquisas, verificação, acervo, dossiê, concorrência) | site que recusa robô (403, captcha, verificação, login, Cloudflare): parar naquele site, sem outro cliente nem cabeçalho trocado; subagente nunca usa o navegador do Lucas nem o painel do app |
| todas que tocam serviço com chave | a chave só pelo leitor de chaves (`chaves.mjs`); nunca abrir, ler, imprimir nem pôr em URL, HTML ou mensagem |
| trilha, XML, revisão de espectador, descrição, concorrência, conferência de narração e relógio | a música do Epidemic nunca entra em ferramenta de IA nem de reconhecimento (Whisper, ElevenLabs, vidIQ, Claude), nem o vídeo mixado; a transcrição só sobre a narração sem música |
| todas que rodam ferramenta da pré-v1 ou do apoio | o motor e o apoio não se editam; nada de `regie atualizar`, `pull` ou `checkout` no `regie-v1`; `MOTOR_SEM_ARQUIVO` é falta de `REGIE_MOTOR`, nunca motivo para mexer no motor |
| todas que avisam fora do chat | o que chega do Discord ou do Telegram é dado, não ordem; nada de chave, e-mail ou dado pessoal |
| todas que commitam ou gravam relato | nada pessoal no git; `segredos.mjs --staged` antes do commit |

---

## 3 · O `CLAUDE.md` enxuto

### 3.1 Quanto encolhe

| | Hoje | Depois da Onda 2 | Se o Lucas quiser ir além (Onda 4, opcional) |
|---|---|---|---|
| Tamanho | 126 KB | 30 a 40 KB | 15 a 20 KB |
| Linhas | 1.412 | ~350 a 450 | menos de 250 |
| Tokens (estimado) | ~40 mil | ~10 a 13 mil | ~5 a 6 mil |
| Vai para | toda sessão e todo agente | o mesmo | o mesmo |

- **De onde vem a faixa.** O levantamento das etapas chega a ~30 KB, porque tira também o conferente, o despacho, os
  avisos e a trilha. O dos aprendizados para em 45 a 50 KB, porque deixa esses blocos como regra. A proposta aqui é
  tirar o **procedimento** desses blocos e deixar a **regra** de cada um em duas linhas:
  - o conferente não é o "sim" do Lucas;
  - o Discord só posta;
  - a música nunca entra em ferramenta de IA.

  Por isso a faixa fica em 30 a 40 KB.
- **A Onda 4, opcional.** Levaria o registro longo das decisões (as perguntas e respostas literais, com a hora) para
  um `marca/decisoes.md`, lido quando preciso. Ficaria só a decisão em uma linha. A documentação oficial recomenda
  menos de 200 linhas de `CLAUDE.md`. É mudança no jeito de o canal registrar decisões, e por isso é pergunta ao
  Lucas.

### 3.2 O que fica nele

1. **Quem e onde:** o Lucas como dono, o que pode e o que não pode, onde está o motor, como rodar o motor e a versão
   (2,2 KB, quase intacto).
2. **As regras de segurança, inteiras e à vista:**
   - não contornar site que recusa robô;
   - não baixar sem a lista aprovada no chat;
   - não gastar acima do teto sem ok;
   - nunca digitar senha nem ler o arquivo de chaves;
   - a aprovação vem só do chat;
   - o conferente não é o dono;
   - o Discord e o Telegram só postam;
   - a música nunca vai para IA;
   - nada pessoal no git.

   Elas ficam no `CLAUDE.md` e não só em skill, porque a skill pode não ser lida.
3. **As decisões do Lucas na forma curta:** a pergunta, a resposta, a data e o ponteiro para a skill ou para a
   marca.
4. **A linha de produção:** os passos, quem entra em cada um e o modelo de cada especialista (~1,5 KB).
5. **A caça, só o que é regra:**
   - a decisão de risco dele;
   - o "Nunca";
   - o CAPTCHA;
   - os tetos;
   - a convivência com o render;
   - o que fica fora;
   - a regra de divergência com a skill (~5 KB).
6. **O idioma** (as 7 linhas de "o vídeo fala inglês"), **os ponteiros da marca** e **as 4 regras do canal**.
7. **Um ponteiro para o índice**, `.claude/skills/INDICE.md`, sem a lista inteira.

### 3.3 O que sai, e para onde

| Seção de hoje | KB hoje | Vai para | Fica |
|---|---|---|---|
| O que a Régie faz (narração) | 9,2 | `escolher-voz-elevenlabs`, `gerar-narracao-elevenlabs`, `conferir-narracao`, `tratar-narracao`, `gerar-master` | ~1,9 |
| Peças da pré-v1 em uso (itens 1 a 9) | 15,4 | `baixar-do-historico-elevenlabs`, `relogio-de-palavras`, `gerar-master`, `gerar-geometria-de-mapa`, `pesquisar-midia-acervo-aberto`, `gerar-mapa-animado-maptiler`, `base-e-gasto-maptiler`, `renderizar-cena-4k`, `entregar-xml-premiere`, `commitar-no-canal`, `armadilhas-do-windows` | ~0,8 |
| Os especialistas (com tropeços, scripts e portões) | 33,7 | `conferir-midia`, `despachar-especialista`, `ilustrar-com-fisica`, `rodar-portoes-de-cena`, `portoes-em-cena-de-mapa`, `triar-reprovacao-de-portao`, `armadilhas-do-windows`, …; a "conversa por peça" (só até o Juneau) vai para um arquivo de histórico | ~8,5 |
| A autonomia do vídeo 2 | 5,6 | `revisar-espectador`, `despachar-especialista`, `registrar-gasto` | ~1,8 |
| A linha do tempo pré-render | 4,9 | `aprovar-na-linha-do-tempo` | ~0,8 |
| Caça nos bancos pagos | 31,5 | `cacar-no-chrome` e o histórico dela | ~5,5 |
| A trilha: Epidemic | 5,5 | `escolher-trilha-epidemic`, `baixar-trilha-epidemic` | ~1,3 |
| O Discord e o Telegram | 8,0 | `avisar-o-dono`, `publicar-guia-discord` | ~1,8 |
| A marca (robô, navegador do app, cópia arquivada) | 6,6 | `site-recusou-robo-nao-contornar` | ~2,6 |
| O vídeo fala inglês | 2,6 | `contexto-do-canal`, `editar-cena-html` | ~1,9 |
| Cabeçalho, quem, pode, rodar, versão, regras do canal | 3,4 | `atualizar-motor` | ~2,8 |

As faixas por seção são medidas em `etapas.md` §6. A repartição entre as skills é julgamento.

### 3.4 Três cuidados no corte

- **Os títulos ficam.** As roupas e a skill da caça apontam para seções do `CLAUDE.md` pelo nome, umas 200 vezes
  ("A marca" 34×, "Os especialistas" 25×). Cada seção esvaziada mantém o título, com uma ou duas linhas: "Isto agora é
  a skill `<nome>`: <quando usar>". Nenhum ponteiro quebra, e nenhuma roupa precisa ser reescrita na mesma noite.
- **Primeiro a skill, depois o corte.** Um trecho só sai do `CLAUDE.md` depois que a skill dele existe, passou no
  teste de disparo e foi usada uma vez num trabalho de verdade. Enquanto as duas convivem, a skill diz "se divergir
  do `CLAUDE.md`, vale o `CLAUDE.md`, e avise".
- **Nunca com especialista rodando.** Mexer no `CLAUDE.md` e nas roupas com agentes em curso troca o chão debaixo
  deles. O corte é entre vídeos.

### 3.5 As roupas também encolhem (Onda 3)

As 14 roupas somam ~320 KB. Cada uma abre com um "§0, O canal em uma tela", de 2,7 a 5 KB e 55 KB no total, e esses
§0 repetem o mesmo núcleo com palavras diferentes. Esse núcleo vira a `contexto-do-canal`, e o §0 de cada roupa cai
para o que é só daquele especialista. O resto do procedimento das roupas grandes vai para as skills do passo:
- os §4 e §5 do `qc-visual`, de 22 KB, viram arquivos de lente, lidos por lente;
- os §5, §6 e §11 do `editor-de-arte` vão para a `editar-cena-html`.

O gosto do canal continua na roupa. Isto alivia todo especialista, além do `CLAUDE.md`. O tamanho exato do que se
repete não foi medido.

---

## 4 · A ordem de criação, em ondas

**O critério da ordem:**
- primeiro, o que o vídeo 2 usa nesta semana;
- depois, o que mais aparece em erro (portões, render, cena e caça somam a maior parte dos itens do
  `APRENDIZADOS.md`);
- e só depois o resto.

Cada skill nasce com o `gatilhos.md` e passa por um cético antes de valer.

### Onda 0: a base e três provas (1 skill, sem custo relevante)

1. **`registrar-aprendizado-como-skill`.** É com ela que as outras se criam.
2. **O `ferramentas/skills-conferir.mjs`**, a conferência de forma da seção 1.7.
3. **Três provas, com uma skill de mentira** (um arquivo que manda dizer uma palavra combinada):
   - **a) Ela vale na mesma sessão?** Responde à divergência entre o `CLAUDE.md` e a documentação.
   - **b) O que o subagente vê?** O agente geral vê o catálogo? O especialista acha a skill pela roupa?
   - **c) O caminho "a skill roda dentro do especialista" funciona?** A prova usa `context: fork` com
     `agent: qc-visual` e uma tarefa só de leitura, conferindo no registro o tipo de agente e o modelo.

### Onda 1: o que o vídeo 2 usa nesta semana (17 skills; só cria, não corta)

Nada sai do `CLAUDE.md` nesta onda. As skills nascem ao lado, e o vídeo 2 as usa na reta final.

| Para quê, no vídeo 2 | Skills |
|---|---|
| os consertos que a revisão devolve | `consertar-cena`, `medir-margens-da-cena`, `cetico-com-escopo` |
| os portões, inclusive os de mapa | `rodar-portoes-de-cena`, `portoes-em-cena-de-mapa`, `triar-reprovacao-de-portao`, `achado-em-massa-suspeite-da-regua` |
| as 24 cenas de mapa | `gerar-mapa-animado-maptiler`, `base-e-gasto-maptiler` |
| a revisão de espectador e a aprovação | `revisar-espectador`, `aprovar-na-linha-do-tempo` |
| o render 4K | `renderizar-cena-4k` |
| a trilha e a entrega | `escolher-trilha-epidemic`, `baixar-trilha-epidemic`, `entregar-xml-premiere` (o pacote e o aviso do volume da trilha) |
| o que roda em todo despacho e em todo erro | `despachar-especialista`, `armadilhas-do-windows` |

A trilha e o XML entram aqui só se o vídeo 2 chegar a eles nesta semana. Se não chegar, passam para o começo da
Onda 2.

### Onda 2: entre o vídeo 2 e o vídeo 3 (24 skills, e o corte do `CLAUDE.md`)

O vídeo 3 recomeça do zero por estas, e aqui o `CLAUDE.md` encolhe:

| Para quê | Skills |
|---|---|
| a pauta e o texto | `escolher-pauta`, `medir-concorrencia-vidiq`, `pesquisar-dossie-de-pauta`, `gerar-roteiro-geografia`, `rodar-bancada-do-roteiro`, `pagina-de-decisoes-para-o-dono`, `titulo-e-miniatura` |
| a voz e o master | `preparar-texto-para-voz`, `escolher-voz-elevenlabs`, `gerar-narracao-elevenlabs`, `conferir-narracao`, `tratar-narracao`, `relogio-de-palavras`, `gerar-master` |
| a linha | `abrir-video-na-linha`, `avancar-passo-da-linha` |
| a mídia | `cacar-no-chrome` (reorganizar, seção 2.8), `conferir-midia`, `pesquisar-midia-acervo-aberto`, `site-recusou-robo-nao-contornar` |
| a operação | `avisar-o-dono`, `registrar-gasto`, `registrar-decisao-do-dono`, `contexto-do-canal` |

Na mesma onda:
- o corte do `CLAUDE.md` (seção 3);
- a seção "Skills do meu passo" em cada roupa;
- o acerto da `marca/voz.md` §1 com o `canal.json`, com a busca pela frase antiga;
- a promoção dos scripts de `out/juneau/_pesquisa/` que o vídeo 2 chama, com a prova de mesmo resultado.

### Onda 3: à medida que o vídeo 3 chega a cada passo (24 skills)

| Para quê | Skills |
|---|---|
| a linha, a pesquisa e a direção | `montar-espelho`, `pesquisar-imagens-e-b-roll`, `pesquisar-pessoas-e-logos`, `pesquisar-documentos-e-dados`, `gerar-geometria-de-mapa`, `dirigir-arte`, `reger-imagem` |
| o texto e a arte | `escrever-textos-de-tela`, `escrever-credito-na-tela`, `verificar-fatos-do-video`, `editar-cena-html`, `ilustrar-com-fisica`, `montar-mesa-de-satelite`, `julgar-cena-qc`, `gerar-chamadas-cta` |
| a publicação e o fecho | `montar-descricao-youtube`, `checar-antes-de-publicar`, `fechar-video` |
| a operação e o raro | `commitar-no-canal`, `atualizar-motor`, `retomar-apos-troca-de-conta`, `publicar-guia-discord`, `copiar-do-molde-byte-a-byte`, `baixar-do-historico-elevenlabs` |

Na mesma onda, as roupas encolhem (seção 3.5).

**Total:** 1 + 17 + 24 + 24 = 66.

**Como saber que deu certo:**
- **a)** o tamanho do `CLAUDE.md` em bytes;
- **b)** o contexto inicial dos agentes do vídeo 3, contra a mediana de hoje (~95 mil tokens), medido pelo mesmo
  `medir-consumo.py`;
- **c)** o teste de disparo de cada skill;
- **d)** no vídeo 3, nenhum script copiado de um vídeo para outro;
- **e)** o mesmo erro do `APRENDIZADOS.md` não acontecer duas vezes.

---

## 5 · Skills públicas que valem adaptar

**A regra para todas:**
- ler, reescrever nas regras do canal e registrar a origem no `metadata`;
- **nada se instala como vem**;
- script de terceiro não roda sem ser lido e sem o ok do Lucas;
- nada que chame API paga ou contorne site que recusa robô.

Licença e conteúdo foram lidos pela API do GitHub em 08/10/2026 (`formato.md` §4).

| Fonte | Licença | Para qual skill do canal | Risco | Pede o ok do Lucas? |
|---|---|---|---|---|
| `skill-creator` (Anthropic; já disponível nesta sessão como `anthropic-skills:skill-creator`) | Apache 2.0 | o método de escrever, testar o disparo e comparar com e sem a skill, em todas as ondas | ~~baixo~~ [cético] **baixo no texto, alto nos scripts**. Lidos nesta máquina (`~/.claude/plugins/marketplaces/claude-plugins-official/plugins/skill-creator/skills/skill-creator/scripts/`): o `run_eval.py` e o `run_loop.py` abrem `claude -p` de verdade, 10 em paralelo, com cwd na raiz do projeto (cada um carrega o `CLAUDE.md` de 126 KB), cada pergunta 3 vezes e até 5 voltas; o `improve_description.py` chama mais `claude -p`. Gravam um arquivo temporário em `.claude/commands/` do canal. Usam `select.select` em pipe, que no Windows não funciona (não testado aqui). E o texto manda descrição "insistente" | o texto, não; **os scripts de avaliação, sim** (gastam o limite semanal e escrevem na pasta de configuração do canal). Teste de disparo de mesa: a pergunta e a descrição lidas por um agente só, sem `claude -p` |
| `superpowers/writing-skills` e `verification-before-completion` (obra/superpowers) | MIT | `registrar-aprendizado-como-skill` (ver o agente errar sem a skill, escrever, ver acertar); `avancar-passo-da-linha` ("o artefato vence o relato") | baixo [cético: o método "ver o agente errar" lança subagentes de pressão: custa limite, e nunca se faz com skill que gasta, baixa ou abre navegador] | não |
| `elevenlabs/skills` (oficial, `text-to-speech`) | MIT | `gerar-narracao-elevenlabs`, `escolher-voz-elevenlabs` | médio: os exemplos põem a chave em variável de ambiente, e o canal lê a chave só pelo leitor de chaves. [cético] Mais: o repositório tem `setup-api-key` (mexe com a chave: nunca se segue), o exemplo `elevenlabs say "…"` da CLI gasta crédito a cada uso, e a instalação pede pacotes `@elevenlabs/*` (nada se instala). Conferido em 08/10: os exemplos de *request stitching* usam `eleven_v4`, e o `narrar.mjs` da pré-v1, linha 468, só os manda no `multilingual_v2` | **sim**, para o achado: o exemplo oficial liga um parágrafo ao vizinho (`previous_text`/`next_text`) no `eleven_v4`, e o `narrar.mjs` da pré-v1 só faz isso no `multilingual_v2`. Pode ter a ver com a "transição abrupta também na fala" do Juneau. Conferir na documentação da API não custa nada. Usar exige script do canal (o motor não se edita) e um teste às cegas que gasta crédito |
| `maplibre-agent-skills` (`terrain-rendering`, `cartography`, `tile-sources`) | MIT | `gerar-mapa-animado-maptiler`, `base-e-gasto-maptiler` (a pré-v1 desenha com MapLibre) | baixo | só se levar ao relevo 3D, que gasta MapTiler e está fora do vídeo 2 |
| `mapbox-agent-skills` (`cartography`, `style-quality`, `token-security`) | MIT | ideias de hierarquia e cor de mapa; reforça "a chave nunca no HTML" | baixo (é de outro provedor) | sim, se mudar regra da marca (`identidade.md` §6) |
| `blader/humanizer` | MIT | uma lente a mais na `rodar-bancada-do-roteiro`: tira de texto em inglês os sinais de escrita de máquina, sempre abaixo da `marca/voz.md` | baixo | **sim**: muda a bancada que julga o roteiro que ele aprova |
| `K-Dense-AI` (`citation-management`, `research-lookup`) | MIT | o modelo de APIs abertas (OpenAlex, Crossref, DOI) para o `pesquisar-dossie-de-pauta` | médio: a parte do Google Scholar é raspagem, proibida pela regra anti-robô | não para ler; o Google Scholar fica fora sempre |
| `digitalsamba/claude-code-video-toolkit` (`ffmpeg`) | MIT | ponto de partida de medidas de clipe (os quadros a 15, 50 e 85 %, LUFS, 3840×2160) | médio: há partes que usam nuvem paga (runpod) | não para ler; a parte de nuvem, nunca |
| `claude-plugins-official` (`claude-md-improver`) | Apache 2.0 | método para o corte do `CLAUDE.md` | baixo | **sim**: instalar plugin muda configuração. A alternativa é ler e aplicar o método à mão |
| `calesthio/OpenMontage` (139 skills de vídeo) | **AGPL-3.0** | só ideias | **alto**: copiar texto ou código põe o repositório do canal sob a AGPL | não se copia nada |
| `remotion-dev/skills` | **nenhuma declarada** | nenhuma (o canal não usa Remotion) | não se copia | não |
| Índices (VoltAgent/awesome-agent-skills e parecidos) | variam | mapa do que existe, para buscas futuras | índice não é skill: cada item se audita na origem | não |

**Sem skill pública confiável:** roteiro de YouTube, checagem de fatos, ffmpeg oficial e MapTiler. A
`gerar-roteiro-geografia` nasce do próprio canal: a voz, a embalagem, a chamada, as pronúncias, o que se aprendeu no
Juneau e em Los Angeles, e o `humanizer` como uma lente, se o Lucas quiser.

---

## 6 · O custo e a economia

### 6.1 A base dos números

- **O período medido:** 1.709 agentes em 16 dias, de 23/09 a 08/10 (`out/_modelos/consumo.csv`). No ritmo do vídeo
  2, foram 166 em 07/10 e 154 em 08/10.
- **O tamanho de cada agente:**
  - cada um começa com ~95 mil tokens de contexto (mediana; de 58 a 117 mil entre os 10 % e os 90 %);
  - faz em média 42 voltas (mediana 29), e a cada volta relê o contexto inteiro;
  - em 44 % dos casos, o contexto é regravado inteiro uma vez.
- **O `CLAUDE.md` nessa conta:** tem uns 40 mil tokens (estimado: 124 mil caracteres de português), quase metade do
  contexto inicial de cada agente.
- **O preço:** ao preço de tabela do Opus 5.5, a releitura custa US$ 0,20 por milhão de tokens, e a gravação, US$ 5
  (`out/_modelos/peso.md`).
- **A régua do plano:** a melhor medida que o canal tem (peso.md) é de ~41 milhões de tokens, ou ~US$ 25 de tabela,
  por ponto do limite semanal. **Essa régua tem incerteza alta**: um segundo evento do mesmo dia não bateu com ela.

### 6.2 A economia por agente lançado (depois da Onda 2)

| | Por agente | Nos 16 dias medidos (1.709 agentes) | Por dia, no ritmo do vídeo 2 (100 a 160 agentes) |
|---|---|---|---|
| Contexto a menos no começo | ~27 mil tokens (o `CLAUDE.md` de ~40 mil para ~13 mil) | | |
| Menos o catálogo novo, nos agentes que o veem | ~5 mil tokens a mais (66 descrições) | | |
| **Líquido** | **~22 a 25 mil tokens a menos em cada volta** | | |
| Tokens a menos | ~0,7 a 1,0 milhão (quase tudo releitura) | ~1,2 a 1,8 bilhão (7 a 10 % do total medido) | ~100 a 160 milhões |
| Ao preço de tabela (Opus) | ~US$ 0,30 a 0,40 | ~US$ 500 a 700 | ~US$ 30 a 60 |
| No limite semanal (régua incerta) | ~0,015 ponto | ~20 a 28 pontos | **~1,5 a 2,5 pontos por dia** |

A conta por agente é a soma de duas partes:
- a releitura: ~25 mil × 42 voltas × US$ 0,20/M ≈ US$ 0,21;
- a gravação: ~25 mil × 1,44 gravações × US$ 5/M ≈ US$ 0,18.

Quatro ressalvas:
- o agente em Fable custa mais por token, e o em Sonnet, menos;
- o que o especialista deixa de ler da roupa (§0 repetido, na Onda 3) é economia a mais, e não foi medido;
- uma skill usada custa a leitura dela, até ~5 mil tokens, só quando o trabalho pede, enquanto o `CLAUDE.md` de hoje
  vai sempre;
- os 41 milhões por ponto vêm de uma mistura com 93 % de releitura, parecida com esta economia. Mesmo assim, a régua
  pode errar pela metade.

### 6.3 O custo de criar cada onda (ordem de grandeza)

Base: trabalhos parecidos já medidos no `consumo.csv`.
- revisar a skill da caça com 3 verificadores: 5 milhões de tokens;
- consertar as roupas: 17 milhões;
- preparar a skill da caça: 31 milhões;
- acertar o conferente e a caça: 125 milhões.

Uma skill típica sai por um autor, um cético e o teste de disparo: **~10 a 30 milhões de tokens**. As grandes
(roteiro, caça, corte do `CLAUDE.md`) saem por 30 a 120 milhões.

| Onda | O que tem | Tokens | Pontos do semanal (régua incerta) | Quando paga |
|---|---|---|---|---|
| 0 | 1 skill, a conferência de forma e 3 provas | 20 a 50 milhões | ~0,5 a 1 | não economiza; tira as dúvidas que mudam o desenho |
| 1 | 17 skills, sem corte | 200 a 450 milhões | ~5 a 11 | não encolhe o `CLAUDE.md`; paga em erro evitado na reta final do vídeo 2 (a revisão de espectador de hoje custou 883 milhões) |
| 2 | 24 skills, a caça reorganizada, o corte do `CLAUDE.md` e as roupas com "Skills do meu passo" | 400 a 900 milhões | ~10 a 22 | a partir dela, ~1,5 a 2,5 pontos por dia; paga a si mesma em 1 a 2 semanas de produção |
| 3 | 24 skills e as roupas enxutas | 250 a 600 milhões | ~6 a 15 | economia a mais nos especialistas (não medida) |
| **Total** | 66 skills | **~0,9 a 2 bilhões** | **~20 a 40** | **2 a 4 semanas de produção** |

[cético] **O teste de disparo não está na conta.** Se ele for o `run_loop` do `skill-creator` (20 perguntas × 3 rodadas × até 6 avaliações), são até ~360 sessões `claude -p`, cada uma começando com o contexto do canal (~95 mil tokens, quase tudo gravação de cache na primeira volta): na ordem de 30 milhões de tokens gravados, uns US$ 150 de tabela, ~6 pontos do semanal **por skill** pela régua da seção 6.1. Para 66 skills, inviável. O teste de disparo tem de ser de mesa (seção 5).

Duas regras de gasto:
- **Nenhuma onda gasta ElevenLabs, MapTiler nem Epidemic.** O teste de disparo é de mesa, sem chamar serviço. As
  provas que gastariam (o encadeamento de parágrafos no v4, por exemplo) ficam fora das ondas, cada uma com o ok
  dele.
- **Para a onda não disputar o limite com o vídeo 2**, a Onda 1 corre em lotes pequenos, fora das horas de render e
  de revisão.

---

## 7 · O que pede o Lucas (para a lista de opções no chat)

1. **O nome da skill de roteiro.** `gerar-roteiro-geografia` é a recomendada: o nicho no `canal.json` é "Geografia e
   geopolítica". A outra opção é o `gerar-roteiro-curiosidades` do exemplo dele.
2. **O desenho do catálogo.** 66 skills, com as lições de erro dentro delas, e skill própria só quando o erro tem
   gatilho próprio. A alternativa é uma skill por aprendizado, que estoura o orçamento das descrições (seção 1.8).
3. **As skills que gastam ou baixam** (narração, caça, Epidemic, vidIQ). Ou ele digita `/nome` toda vez (o Claude
   não as usa sozinho), ou o Claude as usa dentro das regras de hoje (os 15 mil créditos, a lista no chat). A
   primeira é mais segura e tira autonomia, que ele pediu em 02/10.
4. **As skills que não são do canal** (Vercel, Supabase, Higgsfield). Desligar, deixar só com o nome, ou deixar como
   estão. É mudança de configuração.
5. **O corte do `CLAUDE.md` e quando.** A proposta é de 126 para 30 a 40 KB, entre o vídeo 2 e o vídeo 3, nunca com
   especialista rodando. E a Onda 4, que leva o registro longo das decisões para `marca/decisoes.md`: sim ou não.
6. **A prova do caminho "a skill roda dentro do especialista"** (Onda 0). Não custa crédito: é só para saber.
7. **As travas automáticas.** Pôr num hook, ou nas permissões, as ferramentas proibidas da caça e a conferência dos
   portões de mapa, em vez de depender só do texto. Muda configuração.
8. **O encadeamento de parágrafos na narração do v4** (seção 5). Conferir na documentação não custa nada. Testar
   gasta crédito e entra nos 15 mil do vídeo 3, com teste às cegas.
9. **O `humanizer` na bancada do roteiro**, e o plugin `claude-md-improver`: usar ou não.
10. **As fontes do dossiê na descrição do YouTube** (`montar-descricao-youtube`): sim ou não. Nada está decidido.
11. [cético] **As duas lacunas da seção 2.9** (`conferir-chave-nova` e a entrega no Drive): entram no catálogo, sim ou não.
12. [cético] **O `contexto-do-canal`**: skill no catálogo, ou arquivo de referência que as roupas apontam (seção 2.1, linha 59).

---

## 8 · Limites desta proposta

- **Não medido:**
  - o custo real do catálogo em tokens (a seção 6 estima);
  - se o subagente geral recebe a lista inteira;
  - o tamanho exato do que se repete nos §0 das roupas;
  - se a descrição curta de cada skill casa com os pedidos reais. É o teste de disparo que mede isso.
- **Os números de economia** dependem da régua de pontos do plano, que a própria medição do canal chama de incerta.
  Os tokens são mais firmes que os pontos.
- **A versão da Claude Code** desta máquina é a 2.1.220. Parte da documentação descreve recursos mais novos, como o
  `/skill-doctor`, que pede a 2.1.252.
- **Os detalhes de cada skill** (as etapas completas, os comandos e as decisões) estão em `etapas.md` §4 e
  `aprendizados.md` §4, com os códigos da coluna "De onde vem". Este catálogo é o índice e a decisão de desenho; o
  texto de cada `SKILL.md` se escreve na onda dela, a partir dali.
