# A Onda 0 das skills · relato · 18/11/2026, 16:0x–16:3x; as trocas do cético, ~16:4x–17:0x

**Depois do cético** (`cetico.md`, APROVA COM TROCAS, 24 trocas): o §11 diz, troca a troca, o que se fez. Os §1, §2, §4, §5,
§7 e §8 já estão com os números e os textos de depois das trocas, e o §7 é o texto final para a Sala aplicar.

Pedido: `out/_skills/pedido-onda-0.md`. Feito por um agente geral da Sala (Opus, xhigh). Nada se commitou nem se deu push. Nada de
rede, navegador, vidIQ, crédito ou MapTiler. Não editei o `CLAUDE.md`, `sala/`, o regimento, as roupas, os especialistas, o
`.claude/settings.json` nem a `cacar-no-chrome`, nem os arquivos do portão de movimento. Escrevi só em `.claude/skills/`,
`ferramentas/skills-conferir*.mjs` e nesta pasta. A skill de mentira foi apagada no fim; a cópia dela está em `prova/`, fora de
`.claude/skills/`, para a Sala refazer as provas.

## Em dez linhas

1. **Quatro skills novas**, todas com `licoes.md` e `gatilhos.md`. A `registrar-aprendizado-como-skill` é a da Onda 0. As outras
   três são mínimas e nasceram para receber as lições do vídeo 7: `gerar-mapa-animado-maptiler`, `editar-cena-html` e
   `escrever-textos-de-tela`. Junto, o `.claude/skills/INDICE.md`.
2. **O `ferramentas/skills-conferir.mjs`** confere a forma de toda skill (nome, descrição, campos, corpo, "Pare se", gatilhos,
   lições e índice). Resultado em `.claude/skills/`: sai 0, com as 4 novas passando e a `cacar-no-chrome` como legado.
3. **A prova dele** (`ferramentas/skills-conferir-provar.mjs`): 78 de 78 casos certos, depois do cético. São 59 skills
   malformadas, cada uma reprovada pelo código certo, mais a boa, o fork com as exceções, o `paths`, o índice, o legado e a
   linha de comando. As skills de verdade do canal se conferem à parte, fora da conta (C20).
4. **Prova a), a skill na mesma sessão: vale.** Ela é avisada em ~10–20 s, nesta sessão, no portão de movimento e na conversa
   principal da Sala, sem reiniciar. Antes do aviso, a chamada sai "Unknown skill". O "só numa sessão nova" de `sala/caca.md`
   está velho.
5. **Prova b), o que o subagente vê.** O agente geral vê a lista de skills (testado nas profundidades 1 e 2, em Opus e em
   Sonnet), e as 7 skills do canal ficaram com a descrição. O especialista não tem a ferramenta `Skill` nem a lista, mas lê a
   skill pelo caminho que o pedido dá e a segue (o `mapista`, provado). A lista já corta a descrição de 33 a 40 skills de fora
   do canal.
6. **Prova c), a skill dentro do especialista: funciona.** O `context: fork` com `agent: qc-visual` rodou como `qc-visual`, no
   modelo do frontmatter dele (Sonnet 5.5) e em primeiro plano (`background: false`), sem a ferramenta `Skill`. Funcionar
   não é decidir: o uso é do Lucas (§7.5), e o `skills-conferir` reprova o campo sem a exceção dele.
7. **As lições do vídeo 7:** dos 23 achados mantidos, 13 se medem (o portão de movimento) e 10 são de julgamento (ESP-3,
   ESP-4, ESP-7, ESP-8, ESP-11, ESP-12, ESP-16, ESP-17, ESP-18 e R2-3; o cético, C3, corrigiu a primeira conta, de 6).
   Viraram 9 lições: 7 na `gerar-mapa-animado-maptiler`, 1 na `editar-cena-html` e 1 na `escrever-textos-de-tela`. Os
   consertos de cada uma foram conferidos nas cenas de hoje.
8. **O teste de disparo de mesa**, com leitores em Sonnet às cegas, deu 29 de 30. Os dois erros viraram descrição nova, e as
   rodadas seguintes deram 14 de 14 nos pedidos dessas skills. Depois do cético, a rodada 4, com a lista que a conversa vê de
   verdade (as skills de fora do canal inclusive), deu 33 de 33.
9. **Achados de passagem:**
   - o sha256 da `cacar-no-chrome` registrado em `sala/caca.md` está velho;
   - a `marca/voz.md` §1 ainda diverge do `canal.json`;
   - o `mapista` apontou 4 defeitos na skill dele, já corrigidos, e uma linha velha na roupa dele.
10. **Fica para a Sala:** a prova b) pela roupa (a a) e a c) a Sala refez, §10); o que as roupas, o regimento, o `CLAUDE.md`,
    `sala/caca.md` e o `APRENDIZADOS.md` devem ganhar (a seção 7, com as trocas do cético); as perguntas ao Lucas (§7.5); o
    commit. O que se fez com cada troca do cético está no §11.

---

## 1 · As skills criadas, e o tamanho de cada uma (depois das trocas do cético, versão 2)

| Skill | SKILL.md | Linhas | Pasta (com `licoes.md` e `gatilhos.md`) | Descrição | Lições | Quem usa |
|---|---|---|---|---|---|---|
| `registrar-aprendizado-como-skill` | 12,2 KB | 131 | 21,7 KB | 309 car. | 8 | a Sala; setor e peça escrevem as quatro linhas no relato |
| `gerar-mapa-animado-maptiler` (mínima) | 7,2 KB | 91 | 19,3 KB | 296 car. | 7 | `mapista`; `editor-de-arte` em cena de mapa |
| `editar-cena-html` (mínima) | 5,8 KB | 80 | 9,8 KB | 340 car. | 1 | `editor-de-arte` |
| `escrever-textos-de-tela` (mínima) | 4,7 KB | 65 | 8,1 KB | 306 car. | 1 | `redator-de-tela` |
| `.claude/skills/INDICE.md` | 1,5 KB | | | | | o Lucas e as roupas |

- **A `registrar-aprendizado-como-skill`** segue a forma do catálogo §1.3:
  - no topo, "Acima desta skill", "Quem roda", "Custo" e um "Pare se" com 6 itens: a regra de segurança, a configuração e os
    campos que pedem o ok do Lucas, a skill que iria direto a `.claude/skills/` sem o rascunho, o motor e o apoio, o dado
    pessoal na mensagem literal, e o setor, a peça ou o subagente sem pedido, que só escrevem no relato;
  - as etapas são 11 e seguem o §1.5, com o c' do cético de 08/10: as quatro linhas e a origem; a skill da etapa em que o
    erro nasceu; o destino na ordem a, b, c, c' e d; o rascunho em `out/_skills/rascunhos/<nome>/`; a lição; o
    `APRENDIZADOS.md` terminando em `Skill: <nome>`; o teste de disparo de mesa com a lista real; o cético antes de valer; o
    `grep` da regra antiga; o registro no relato; e quando a skill nova vale;
  - depois vêm a saída, o que ela não faz e as decisões, por ponteiro;
  - o `licoes.md` tem 8 lições do próprio registro: o c' que se perdeu (cético §7), a decisão copiada (item 46, com a voz
    ainda divergente), a regra escrita que não bastou (vídeo 7), o "Unknown skill" antes do aviso, a injeção citada (abaixo),
    e três erros da própria Onda 0 que o cético achou: a skill que valeu antes do cético, a lição que mandou a um portão que
    não existe, e a skill de etapa que acorda no setor;
  - o nome e a descrição seguem o §1.2: até 350 caracteres, sem data, com o "quando não usar", e sem `allowed-tools`, `hooks`,
    injeção, `model`/`effort` nem `fork`.
- **As três mínimas** seguem o pedido:
  - o nome e a descrição do catálogo, com as correções do cético; a descrição foi ajustada depois pelo teste de disparo (§6);
  - o "Pare se" do grupo do §2.10: gasto e chave da MapTiler, ferramenta da pré-v1, a web, a regra da cena (só mídia com
    `aprovado`) e a grafia que não vem da cópia da voz;
  - a linha "**Se você não é a peça:**" diz ao setor que carregou a skill por engano que não siga as etapas e despache a peça
    com o caminho (C1);
  - as etapas são ponteiros para as seções da roupa, sem copiá-la;
  - nas duas de cena, a etapa final manda conferir cada lição nos quadros que a peça já tira para provar a cena (o
    `ferramentas/folhas-cena.py`) e nos instantes que a lição aponta, nunca nas folhas a 0,5 s da revisão de espectador; sem
    clipe, a linha da lição diz por que não foi olhada (C4). Na de textos, contra a lista de textos e o espelho;
  - no conserto, a skill vale para o "Pare se", os portões e as lições; o pedido diz o que mudar (C10).
- **O desempate** nas quatro: a skill nunca vence o `CLAUDE.md`, o regimento, a marca, a roupa nem o ofício; se divergir,
  pare e diga, e até a resposta vale a regra mais restritiva (C5). O `mapista` já tinha apontado que a primeira versão punha a
  roupa acima do `CLAUDE.md`, e a segunda punha uma ordem fixa.

## 2 · O `skills-conferir` e a prova dele

`node ferramentas/skills-conferir.mjs` confere todas as pastas e o índice. Com `<pasta>`, confere só ela, sem o índice; há
também `--estrito` e `--json`. Sai 0 (passou), 1 (reprovou) ou 2 (não rodou). Cada item tem um código:

- **F**: o bloco do começo existe e se lê. O valor sem aspas com ": " ou " #" reprova, porque quebra o YAML de verdade.
- **N**: o nome
  - é igual ao da pasta;
  - usa só `a-z`, `0-9` e hífen, até 64 caracteres, sem hífen no começo, no fim ou dobrado;
  - não é reservado;
  - não colide com uma skill pessoal em `~/.claude/skills/`, que passaria por cima da do canal.
- **D**: a descrição
  - existe;
  - diz "Use…";
  - não tem data;
  - cabe em 350 caracteres somada ao `when_to_use` (cético §2).
- **C**: os campos
  - nenhum inventado;
  - `allowed-tools` e `hooks` pedem o ok do Lucas;
  - o `fork` precisa de `agent:` que seja especialista de `.claude/agents/` (os agentes embutidos herdam o MCP do navegador);
  - `disable-model-invocation: true` e `context: fork` com `agent` dependem de decisão do Lucas (catálogo §1.2, perguntas 3 e
    6) e reprovam com C7 sem a exceção dele (cético, C7);
  - o `paths` dá aviso: ele acordaria a skill pelo arquivo tocado, por fora da descrição e do teste de mesa;
  - nada de `model` nem `effort` numa skill com `fork`;
  - os booleanos são booleanos;
  - o `metadata` traz `versao` e `atualizada` (AAAA-MM-DD).
- **B**: o corpo
  - nenhuma injeção de comando em lugar nenhum do corpo: nem citada dentro de código em linha, nem num bloco cercado, nem
    num bloco aberto com a crase e o ponto de exclamação (antes do cético, o bloco cercado com crases passava; C6);
  - menos de 500 linhas (com aviso acima de 10 KB);
  - as partes do §1.3 presentes;
  - "Acima desta skill" e "Quem roda" antes do "Pare se";
  - o "Pare se" com 3 a 6 itens, antes das etapas e terminando nos primeiros 12 mil caracteres (a reposição da compactação
    traz ~5 mil tokens; a 3,2 caracteres por token, cético §4);
  - todo arquivo da pasta que o corpo cita existe.
- **G**: o `gatilhos.md` tem 3 ou mais pedidos que devem acordar a skill e 2 ou mais vizinhos que não devem, com a seta.
- **L**: cada lição do `licoes.md` tem Sintoma, Causa, O que resolveu, Como evitar e Origem.
- **I**: o `INDICE.md` bate com as pastas, e a versão e a data são as do `metadata`.

**O legado.** A `cacar-no-chrome` falha em 13 itens: a descrição de 967 caracteres com data, 870 linhas, nenhuma das partes
da forma. A reorganização dela é da Onda 2 (catálogo §2.8). Por isso ela sai como "legado" e não reprova, mas só enquanto o
sha256 do `SKILL.md` for o registrado no script (`639be90c…`). Se o arquivo mudar, a isenção vence e o item X1 manda conferir
a mudança. Com `--estrito`, ela reprova sempre. O registro oficial do sha, no `sala/caca.md`, ainda é o velho (`52e563bb…`):
o §7.3 propõe a linha nova e a troca do script para ler o sha de lá (C8, só texto).

**As exceções do Lucas** ficam num mapa no topo do script (`EXCECOES`), com a data e a mensagem literal dele, na forma
`"<código>:<campo>"` (por exemplo `"C7:context"`) ou `"B1"`. Hoje está vazio. O `conferirSkill` aceita `excecoes` como
parâmetro, para a prova poder injetá-las.

**A prova** (`node ferramentas/skills-conferir-provar.mjs`) deu **78 de 78** e sai 0:
- 59 malformadas, cada uma pelo código certo (as 4 novas do cético: a injeção num bloco cercado, o bloco aberto com a crase e
  o ponto de exclamação, o `disable-model-invocation: true` e o `fork` com especialista sem a exceção);
- a boa sem nenhum item; a boa com `context: fork`, `agent: qc-visual` e `disable-model-invocation: true`, que passa só com
  as duas exceções do Lucas (a exceção de um campo não cobre o outro: com uma só, reprova com C7); a boa com `paths`, que
  passa com aviso;
- 7 casos do índice;
- 3 do legado: passa com o sha certo, reprova com um byte a mais, reprova com `--estrito`;
- 5 da linha de comando: sai 0, 1 e 2, e o `--json` funciona.
- As skills de verdade do canal se conferem à parte e se imprimem como "estado do canal (não conta na prova)": às 16:29, com
  as skills de mentira da Sala na pasta, esse caso tinha derrubado a prova sem defeito na ferramenta (C20).

Tudo roda numa pasta temporária do sistema, apagada no fim.

**O que ele já pegou.** Na primeira versão da `registrar-aprendizado-como-skill`, eu tinha citado a sintaxe da injeção de
comando no "Pare se", entre crases duplas, e o B1 reprovou. Não se sabe se a Claude Code a rodaria dentro de código, então a
linha passou a descrever a injeção em palavras. Virou a lição L5 da skill.

**O que ele não confere** (é julgamento, fica com o teste de disparo e com o cético):
- se a descrição casa com o pedido;
- se a skill de gasto diz "só quando o Lucas pedir";
- se o "Pare se" tem as regras certas do grupo;
- se o ponteiro para a roupa aponta a seção certa.

## 3 · As três provas

Os registros estão na pasta da sessão da Sala: `C:/Users/zangp/.claude/projects/C--projetos-alpha-point/911444be-821e-4e95-9758-51af1762428b/`.
Os subagentes ficam em `subagents/agent-<id>.jsonl`, e o `.meta.json` ao lado traz o `agentType`, o `model` e o `spawnDepth`.
Nas transcrições, a lista de skills é o anexo `"type":"skill_listing"`, com o `skillCount`, os `names` e o `content`.

### a) A skill vale na mesma sessão?

**Sim, sem reiniciar** (a versão do app nos registros é 2.1.326; o `claude --version` da linha de comando ainda diz 2.1.220).
- 16:10:2x: gravei `.claude/skills/prova-onda-0-palavra/SKILL.md` e `prova-onda-0-fork/SKILL.md`. A chamada imediata deu
  "Unknown skill: prova-onda-0-palavra".
- 16:10:38: o aviso de lista chegou a esta sessão (`skill_listing`, `isInitial: false`, as 2 skills). A chamada seguinte
  carregou a skill, e a resposta foi a palavra combinada, TAMANDUA-CARTOGRAFO-41. A pasta `.claude/skills/` já existia antes,
  com a caça.
- **O aviso chegou a todas as conversas abertas no canal:**
  - ao agente do portão de movimento (`agent-a756393c…`, 16:10:42);
  - à **conversa principal da Sala** (`911444be-….jsonl`, 16:16:04, na volta seguinte dela, com as 5 skills novas da hora,
    as duas de mentira inclusive).
  - Cada mudança de descrição foi avisada de novo, em segundos.
- **Ao apagar:**
  - nenhum aviso de remoção chegou;
  - chamar de novo a skill já usada devolveu "already loaded above; instructions unchanged": o texto fica na conversa,
    como a documentação diz (`formato.md` §1.3);
  - a Sala viu as duas de mentira no aviso de 16:16. Se tentar chamá-las agora, deve receber "Unknown skill" (não provado).
- **Não provado daqui:** a chamada vinda da própria conversa principal. A lista chegou a ela, mas só a Sala pode chamar. (A
  Sala a provou às 16:29: §10.)

### b) O que o subagente vê?

| Quem | A lista de skills | A ferramenta `Skill` | Registro |
|---|---|---|---|
| Agente geral, profundidade 1, Opus (este) | sim: 92 skills, ~30 mil caracteres; 59 com descrição, 33 só com o nome (24 `vercel:*`, 5 `superpowers:*`, `caveman`, `supabase-postgres…`, `init`, `security-review`); a `cacar-no-chrome` com os 986 caracteres | sim | `agent-a556c268…` |
| Conversa principal da Sala | igual: 92, 59 e 33, ~30 mil caracteres | sim | `911444be-….jsonl`, 15:47 |
| Agente geral, profundidade 2, Sonnet (o leitor do teste de mesa) | sim: 98 skills, ~30 mil caracteres; 58 com descrição e 40 só com o nome. **As 7 do canal com descrição**, as 4 novas inclusive | sim | `agent-a6bf358d…` |
| Especialista no `fork` (`qc-visual`) | não | não (Bash, Edit, Glob, Grep, Read, Write e o `advisor`) | `agent-a7b25bd1…` |
| Especialista despachado (`mapista`, Opus, pelo frontmatter) | não (nenhum `skill_listing` na transcrição) | não | `agent-a2de2e87…` |

- **O especialista acha a skill pelo caminho que o despacho dá: sim.** O `mapista` recebeu o texto do catálogo §1.6, caminho
  2 ("Skills do seu passo: leia `.claude/skills/gerar-mapa-animado-maptiler/SKILL.md`… Se a skill contradisser… pare e
  diga"), e fez isto:
  - leu o `SKILL.md`, depois a roupa (porque a skill mandou), o `licoes.md`, o `gatilhos.md` e a identidade;
  - parou corretamente num "Pare se" (sem o ok de tiles, só leitura);
  - pôs cada lição numa seção da roupa: L1, L4 e L5 nenhuma seção cobre; L2 e L3 só em parte;
  - achou 4 defeitos na skill, já corrigidos: a linha do crédito do OSM, que parecia pedir um crédito duplicado (roupa §5:
    "não repita"); o ponteiro do `portao-margens` para o §1, quando é o §9; o `qc-cena`, o `qc-hex`, o `qc-src-existe` e a
    regra dos 5 minutos, que faltavam; e o desempate que punha a roupa acima do `CLAUDE.md`;
  - leu a skill de mentira pelo caminho e deu a palavra.
- **O especialista acha a skill pela roupa?** **NÃO PROVADO**, porque pede a roupa editada, e editar roupa não é deste
  pedido. O que se sabe:
  - o ofício manda ler a roupa ("Leia-a também: `marca/agentes/<id>.md`", no fim do arquivo);
  - neste despacho, o `mapista` só a leu depois da skill, e porque a skill mandou.
- **O orçamento da lista** (catálogo §1.8, "não medido") ficou medido pelo registro: são ~30 mil caracteres, nos dois
  modelos e nas duas profundidades. Já hoje, 33 a 40 skills de plugins de fora do canal perdem a descrição. As do canal não
  perderam (eram 5 a 7). Com as 66 do catálogo, a disputa aumenta. Pôr os plugins de fora em `name-only` ou `off` é a
  pergunta 4 do catálogo, ao Lucas (configuração).

### c) A skill roda dentro do especialista?

**Sim, e no modelo do especialista.** A `prova-onda-0-fork` tinha `context: fork`, `agent: qc-visual` e `background: false`,
sem `model` nem `effort`. Chamei-a com a ferramenta `Skill`, às 16:10:48.
- O registro (`agent-a7b25bd160af8fc44.meta.json`): `"agentType":"qc-visual"`, `"spawnDepth":2`,
  `"requestShape":"foreground"`.
- As mensagens dele saíram em `claude-sonnet-5-5`, o `model: sonnet` do frontmatter do `qc-visual`, e não no Opus de quem
  chamou. O único "opus" da transcrição é o da ferramenta `advisor`, que é adiada.
- A resposta: `slug = alpha-point`, "Sonnet 5.5, subagente qc-visual", "não tenho a ferramenta Skill nem vejo lista de
  skills", PEIXE-BOI-MERIDIANO-73.
- O texto da skill chegou como o pedido dele: o `fork` funciona como "a skill é a tarefa".
- **Não medido:** se o `effort: high` do frontmatter valeu (o `.meta.json` do fork não o registra). Chamado da
  conversa principal, na profundidade 1, vale o mesmo (a Sala o provou às 16:30: §10).
- **Provado não é decidido:** usar o `fork` com especialista continua decisão do Lucas (catálogo §1.2, pergunta 6; cético,
  C7; §7.5).

### O que fica para a conversa principal da Sala

A skill de mentira está em `out/_skills/onda-0/prova/` (as duas pastas, os mesmos bytes que foram usados). Cada prova a seguir
leva poucos minutos e não gasta crédito. No fim de cada uma, apague as pastas copiadas de `.claude/skills/`.

1. **a) na conversa principal:**
   - copie `out/_skills/onda-0/prova/prova-onda-0-palavra/` para `.claude/skills/`;
   - espere o aviso de lista (dez a vinte segundos);
   - chame a ferramenta `Skill` com `prova-onda-0-palavra`. Tem de responder TAMANDUA-CARTOGRAFO-41;
   - no registro, o `911444be-….jsonl` mostra o `skill_listing` com `isInitial: false`, e a resposta logo depois.
2. **c) na profundidade 1:**
   - copie `prova-onda-0-fork/` e chame a skill da conversa principal;
   - no registro, o `subagents/agent-<novo>.meta.json` tem de mostrar `agentType: qc-visual` e `spawnDepth: 1`, e as
     mensagens da transcrição, `claude-sonnet-5-5`.
   - Se quiser saber do esforço: o `qc-visual` tem `effort: high` no frontmatter, e o registro não o mostra. Fica não medido.
3. **b) pela roupa**, depois que a Sala puser a linha "Skills do meu passo" numa roupa (a do `mapista`, §7.1 abaixo):
   - despache o `mapista` com uma tarefa só de leitura que **não cite skill nenhuma**, por exemplo "diga quais skills do seu
     passo existem e as lições delas, sem fazer cena";
   - no registro, a transcrição tem de mostrar o `Read` de `marca/agentes/mapista.md` e, depois, o de
     `.claude/skills/gerar-mapa-animado-maptiler/SKILL.md`, sem o pedido citar a skill;
   - se ele não ler a roupa antes, o caminho 1 do catálogo §1.6 não basta, e vale o caminho 2 (o despacho repete o caminho).
4. **(opcional, do Lucas)** `/context` na conversa principal, para a linha Skills: confirma os ~30 mil caracteres medidos
   pelo registro.

## 4 · As lições do vídeo 7: a classificação dos 23 achados (refeita com o cético, C3)

ESP-n é o n-ésimo achado mantido da r1 (os consertos-1 usam essa numeração nas cenas). R2-n é o da r2 (os consertos-2).

| Classe | Achados | Quem pega |
|---|---|---|
| movimento (mapa parado mais de 2 s, câmera brusca, viagem abaixo de 1,5 s) | ESP-1 s13 · ESP-5 s36 · ESP-10 s48 · ESP-13 s55 · R2-1 s18 · R2-2 s19 · R2-4 s38 · R2-5 s57 (8) | o portão de movimento |
| "·" na quebra | ESP-2 s19 · ESP-6 s37 · ESP-14 s55 · ESP-15 s55 (4) | o portão de movimento e a regra da quebra |
| campo em branco esperando a voz | ESP-9 s45 (1) | o portão de movimento (item 4 do cabeçalho dele) |
| **julgamento** | **ESP-3 s28 · ESP-4 s30 · ESP-7 s41 · ESP-8 s42 · ESP-11 s53 · ESP-12 s55 · ESP-16 s57 · ESP-17 s58 · ESP-18 s61 · R2-3 s19 (10)** | **lições** |

**13 se medem, e 10 são julgamento.** A primeira versão deste relato dava 17 e 6, e mandava a portões que não os medem o tamanho
da cédula (ESP-3 e ESP-4), a foto de 1938 (ESP-11) e a pílula sobre o anel de Rock Island (ESP-16):
- o cabeçalho do `ferramentas/portao-movimento.mjs`, em "O QUE NÃO É DELE", deixa com o `qc-visual` a pílula sobre um anel ou um
  traço do mapa e o tamanho de foto e de símbolo;
- o `check-overlap` compara só texto com texto, e o `qc-tamanho` é só de letra.

A ESP-12 (o cabo sem nome, "parado" por 4 s) continua julgamento: o defeito é a peça sem sentido, não a câmera.

**As lições registradas**, pela `registrar-aprendizado-como-skill`, cada uma com as quatro linhas e a origem. Todas têm o
destino a) (lição na skill da etapa em que o erro nasceu), porque nenhum script as mede. O conserto de cada uma foi conferido
nas cenas de hoje.

| Lição | Achado | Skill de destino | Conserto conferido em |
|---|---|---|---|
| L1 · O par antes/depois não mostra o que a voz afirma | ESP-7 (s41) | `gerar-mapa-animado-maptiler` | `s41.html` (consertos-1, ESP-7) |
| L2 · Peça nova na tela sem nome enquanto a voz fala de outra coisa (a peça que volta conta como nova) | ESP-12 (s55) | `gerar-mapa-animado-maptiler` | `s55.html` (ESP-12 e ESP-13) |
| L3 · A tela tira a cor do lugar que a voz nomeia (o peso visual segue o sujeito; textura só onde se separa no 1080p) | R2-3 (s19) | `gerar-mapa-animado-maptiler` | `s19.html` (consertos-2, R2-3) |
| L4 · A imagem que encolhe com a câmera na troca mostra a borda (a sem moldura; a miniatura com moldura some inteira) | ESP-18 (s61) | `gerar-mapa-animado-maptiler` | `s61.html` (ESP-18, `mask-image`) |
| L5 · O símbolo que carrega a frase não se lê como o que é (a forma e o tamanho: a cédula a 60 × 32 px no 1080p) | ESP-3 e ESP-4 (s28, s30) | `gerar-mapa-animado-maptiler` | `s28.html` e `s30.html` (a cédula a 120 × 64 no 4K, com o "$") |
| L6 · A pílula sobre o mapa cobre o marcador ou o rio que a voz conta | ESP-16 (s57) | `gerar-mapa-animado-maptiler` | `s57.html` (consertos-1, ESP-16: o aviso [369] crescendo para a esquerda, sobre a mata) |
| L7 · A única foto da frase entra pequena demais para se ler no celular | ESP-11 (s53) | `gerar-mapa-animado-maptiler` | `s53.html` (consertos-1, ESP-11: 720 × 456 no 4K) |
| L1 · A troca de destaque chega no fim da frase, e o segundo estado quase não se vê | ESP-8 (s42) | `editar-cena-html` | `s42.html` (ESP-8, a troca em "Canadian") |
| L1 · A peça que volta de outra cena volta sem o rótulo que a identificava | ESP-17 (s58) | `escrever-textos-de-tela` | `textos-tela.json` [430] e `s58.html` (ESP-17) |

- **Por que estas skills:** a skill de destino é a da etapa em que o erro nasceu, não a da revisão que o achou. A s55 foi
  feita pelo `editor-de-arte`, mas é cena de mapa, e a skill é por etapa, não por agente. A ESP-17 nasceu na lista de textos
  da s58 (o `mantidos.json` dá o destino `redator-de-tela`); a introdução do `licoes.md` da `editar-cena-html` aponta para
  ela e para a L2 do mapa, porque a s58 é cena do editor (C24).
- **A ESP-16 era regra que existia e não foi lida:** a identidade §6, "Nenhum rótulo sobre a divisa", estende a regra à malha,
  à estrada e à rota, e a roupa do `mapista` §3 a repete. A L6 aponta para ela e nomeia o rio e o anel.
- **O tamanho é julgamento até a marca ter um número e um portão o medir** (L5 e L7). As introduções dos `licoes.md` do mapa e
  da cena dizem o que fica com o portão de movimento, o que fica com os portões de cena e o que nenhum portão mede.
- **O destino d), o motor:** o antes e depois, o destaque na palavra, a peça que volta com o nome e o peso no sujeito da frase
  valeriam para um canal de culinária. Por isso a §7.4 propõe um item ao `APRENDIZADOS.md`.
- **O destino c'):** nenhuma toca regra de segurança.
- **Os erros da própria Onda 0** viraram três lições da `registrar-aprendizado-como-skill`: L6 (a skill valeu antes do cético,
  C2), L7 (a lição mandou a um portão que não existe, C3) e L8 (a skill de etapa acorda na conversa do setor, C1).
- **Para a Sala (C3g):** quando o relato do portão de movimento chegar, confira o escopo final dele. Se ele passar a medir o
  tamanho de foto e de símbolo (o cabeçalho diz que "o RELATO propõe a regra"), a L5 e a L7 passam a apontá-lo; se a regra de
  tamanho entrar na marca, ela é decisão do Lucas.

## 5 · O teste de disparo de mesa

Está em `out/_skills/onda-0/disparo-mesa/`. O `preparar.mjs` monta as descrições e os pedidos dos `gatilhos.md`, embaralhados e
sem as respostas, e grava o gabarito fora da pasta (`--gabarito=`). Cada leitor foi um agente geral em Sonnet, às cegas, que só
leu os dois arquivos; o gabarito, as respostas e os resultados das rodadas anteriores ficaram fora da pasta enquanto ele lia. O
`pontuar.mjs` conta assim:
- o pedido que **deve** acordar a skill acerta se o leitor escolheu a skill;
- o que **não deve** acerta se ele escolheu outra; o vizinho previsto é informação a mais.

As rodadas 1 a 3 usaram as 66 do catálogo §2 (sem as notas [cético], com a descrição de verdade das que existem). O cético
apontou (C9) que essa lista não é a que a conversa vê: faltavam as ~90 skills de fora do canal, e 61 das 66 ainda não existem.
A rodada 4 usou a lista real (`preparar.mjs --lista-real=<transcrição>`): o último anexo `skill_listing` completo da conversa
principal da Sala, com os avisos depois dele, 96 skills, 33 só com o nome, como na lista de verdade; as do canal com a descrição
de hoje; e, numa seção à parte, as 61 do catálogo que ainda não existem.

| Rodada | Pedidos | Certos | O que errou, e o que mudou |
|---|---|---|---|
| 1 (as 4 skills) | 30 | 29 | "Põe o rótulo na cena e confere a margem" foi para a `escrever-textos-de-tela`, que dizia "quando uma cena precisa de texto na tela". A descrição passou a dizer "as palavras", "quando falta o texto de uma cena" e "pôr o texto na cena é editar-cena-html". E "Roda o portão de margens" foi para a `medir-margens-da-cena` em vez da `rodar-portoes-de-cena`: não é erro (não acordou a skill sob teste), e o vizinho previsto mudou |
| 2 (textos e cena) | 14 | 13 | "Cria o card de pessoa" foi para a `pesquisar-pessoas-e-logos` (no catálogo, "decide o card de nome e cargo"). A `editar-cena-html` passou a dizer "card de pessoa" |
| 3 (cena) | 7 | 7 | — |
| 4 (as 4 skills, a lista real; depois do cético) | 33 | 33 | — |

**Os vizinhos de fora do canal, na rodada 4** (os pedidos que o cético pediu, C9c):
- "Monta a cena do gráfico de mortes por animal, com as barras entrando na voz" → `editar-cena-html`, com o `dataviz` **em
  segundo**;
- "Monta em HTML a cena da tabela com as mortes por estado" (pedido novo, deve acordar a `editar-cena-html`) → acertou, sem o
  `frontend-design` nem em segundo;
- "Monta a animação do rio subindo até as barragens, sobre o satélite" → `gerar-mapa-animado-maptiler`, sem o
  `higgsfield-generate` nem em segundo (o segundo foi a `montar-mesa-de-satelite`, do catálogo);
- "Desenha o mapa da Austrália em vermelho para a miniatura" e "Faz a miniatura do vídeo 8 com a cobra" (vizinhos novos das
  duas skills de cena) → `titulo-e-miniatura`, do catálogo.

As descrições da skill de mapa e da de cena ganharam ", a miniatura, titulo-e-miniatura" no fim (296 e 340 caracteres), e a da
de textos, a frase nova do C16 (306). O resultado de cada skill está no fim do `gatilhos.md` dela. Para o catálogo: quando a
`pesquisar-pessoas-e-logos` nascer, a descrição dela tem de dizer que a cena do card é da `editar-cena-html`, porque o leitor da
rodada 3 ainda a deu em segundo. O `dataviz` em segundo é o motivo concreto da pergunta 4 ao Lucas (§7.5).

## 6 · O que custou

- os agentes da prova: o `qc-visual` no `fork` (Sonnet, ~57 mil tokens gravados de contexto), o `mapista` (Opus, ~86 mil);
- os 4 leitores do teste de mesa (Sonnet; os três primeiros com ~105 a 110 mil tokens de contexto cada, quase tudo a carga
  inicial; o da rodada 4, com a lista maior, não anotei à parte);
- o cético da Sala (Opus), e este agente.

Nada de crédito, MapTiler, rede ou navegador.

## 7 · O que as roupas, o regimento, o `CLAUDE.md`, `sala/` e o `APRENDIZADOS.md` devem ganhar (a Sala aplica)

Os textos abaixo já têm as trocas do cético (C1, C4, C5, C8, C10, C22 e C23). Nenhum deles foi aplicado: estes arquivos não
são deste pedido. Antes de as roupas apontarem para as skills, as GRAVES estão resolvidas nas próprias skills (§11).

### 7.1 As roupas: "Skills do meu passo" (catálogo §1.6, caminho 1)

A seção vai no topo de cada roupa, logo depois do cabeçalho.

- **`marca/agentes/mapista.md`:**
  > ## Skills do meu passo
  > - `gerar-mapa-animado-maptiler` (`.claude/skills/gerar-mapa-animado-maptiler/SKILL.md`): toda cena de mapa, nova ou
  >   consertada. Leia o `SKILL.md` e o `licoes.md` antes de começar; antes de entregar, uma linha por lição no relato: o
  >   instante olhado nos quadros da prova, ou o porquê de não ter olhado. Se a skill divergir desta roupa, do ofício, da
  >   marca, do regimento (quando você roda num setor) ou do `CLAUDE.md`, pare e diga no relato; até a resposta, vale a mais
  >   restritiva.
- **`marca/agentes/editor-de-arte.md`:**
  > ## Skills do meu passo
  > - `editar-cena-html` (`.claude/skills/editar-cena-html/SKILL.md`): toda cena que não é de mapa, nova ou consertada.
  > - `gerar-mapa-animado-maptiler` (`.claude/skills/gerar-mapa-animado-maptiler/SKILL.md`): quando te passam uma cena de
  >   mapa. Da roupa do `mapista`, leia os §1, §3, §5, §6 e §7 (o gasto, a base na tela, o crédito, a câmera e o espaço),
  >   não ela inteira (a skill diz).
  > - Leia o `SKILL.md` e o `licoes.md` de cada uma antes de começar; antes de entregar, uma linha por lição no relato: o
  >   instante olhado nos quadros da prova, ou o porquê de não ter olhado. Se a skill divergir desta roupa, do ofício, da
  >   marca, do regimento (quando você roda num setor) ou do `CLAUDE.md`, pare e diga no relato; até a resposta, vale a mais
  >   restritiva.
- **`marca/agentes/redator-de-tela.md`:**
  > ## Skills do meu passo
  > - `escrever-textos-de-tela` (`.claude/skills/escrever-textos-de-tela/SKILL.md`): todo `textos-tela.json`, e todo texto
  >   que te devolvem para mudar. Leia o `SKILL.md` e o `licoes.md` antes de começar; antes de entregar, uma linha por lição
  >   no relato, conferida contra a lista de textos de cada cena e o espelho. Se a skill divergir desta roupa, do ofício, da
  >   marca, do regimento (quando você roda num setor) ou do `CLAUDE.md`, pare e diga no relato; até a resposta, vale a mais
  >   restritiva.
- **`marca/agentes/qc-visual.md`**, uma linha no §5 ("O que reprova neste canal em particular"). O catálogo §2.7 não dá essas
  skills ao `qc-visual`, mas as lições são exatamente o que ele julga; a pergunta de pôr a linha é da Sala:
  > As lições de julgamento de `.claude/skills/{gerar-mapa-animado-maptiler,editar-cena-html,escrever-textos-de-tela}/licoes.md`
  > são o que a revisão de espectador achou e nenhum portão mede. Confira cada uma nos quadros do seu orçamento (§2.1), sem
  > quadro a mais. A que pede quadro fora dele (a troca quadro a quadro da L4 do mapa) vai ao laudo como "não olhada".
- **No despacho, até a roupa ganhar a linha** (catálogo §1.6, caminho 2, provado com o `mapista`, §3 b), o pedido diz:
  > Skills do seu passo: leia `.claude/skills/<nome>/SKILL.md` e o `licoes.md` ao lado antes de começar; antes de entregar,
  > uma linha por lição no relato (o instante olhado nos quadros da prova, ou o porquê de não ter olhado). Se a skill divergir
  > da roupa, do ofício, da marca, do regimento ou do `CLAUDE.md`, pare e diga; até a resposta, vale a mais restritiva.
- **Duas linhas velhas na roupa do `mapista`** (achadas pelo `mapista` e pelo cético, C5; a Sala confere):
  - o §0 (linha 49) ainda diz que o portão "abre o mapa e pede tiles". O `CLAUDE.md` corrigiu isso em 04/10: sem a pré-carga
    `ferramentas/chaves-nos-portoes.mjs`, o portão mede uma página parada e não pede tile;
  - o §6 (linha 240) ainda diz "DECISÃO DO LUCAS PENDENTE: norte para cima, sem giro […] ou órbita contínua", e a
    identidade §5, "Mapa nunca fica parado", já registra a resposta do Lucas para o mapa parado (a aproximação suave e
    contínua). A Sala confere se a parte do norte para cima continua pendente.

### 7.2 O `setores/REGIMENTO.md` (C1c)

A proposta aperta e esclarece; não afrouxa nada. Vale quando a Sala manda os setores relerem ("Entre um vídeo e outro").

- Em "As ferramentas do setor (lista fechada)", logo depois de "Nenhum conector (Drive, Docs), nem vidIQ, `Artifact`,
  agendamento, notificação, `Workflow` ou skill.":
  > As skills do canal (`.claude/skills/`) aparecem na lista desta conversa, em segundos depois de gravadas, mas o setor não usa
  > a ferramenta `Skill`. Quando o pedido da Sala nomeia uma skill, o setor põe no pedido à peça o caminho do `SKILL.md` e o do
  > `licoes.md`, e a peça os lê com `Read`. Se uma skill carregar por engano, o setor não segue as etapas dela: despacha a peça
  > e diz no relato.
- Em "Quem faz o trabalho", na lista de "**O pedido à peça** … Diz também:", um item depois do "`chrome liberado`":
  > - as skills do passo, pelo caminho (`.claude/skills/<nome>/SKILL.md` e o `licoes.md` ao lado), quando o pedido da Sala as
  >   nomeia, e uma linha por lição no relato;

As três skills de etapa já dizem isso ao setor (a linha "**Se você não é a peça:**", C1a), e a registrar já diz que setor e peça
só escrevem as quatro linhas no relato (C1b). O regimento é o que o setor lê inteiro; a skill só chega a ele por engano.

### 7.3 O `CLAUDE.md` e `sala/`

- **No núcleo**, perto de "Os especialistas", uma linha que todo agente lê:
  > **As skills do canal** (desde 18/11/2026, Onda 0): `.claude/skills/<nome>/SKILL.md`, com o índice em
  > `.claude/skills/INDICE.md`. A forma se confere com `node ferramentas/skills-conferir.mjs` (sai 0); a prova é o
  > `skills-conferir-provar.mjs`. Skill nova, ou descrição ou passo novo, nasce em `out/_skills/rascunhos/<nome>/` e só vai a
  > `.claude/skills/` depois do cético: o que está lá vale em segundos em toda conversa aberta. Uma skill nunca passa por cima
  > deste arquivo, do regimento, da marca, da roupa nem do ofício: se divergir, pare e avise; até a resposta, vale a regra mais
  > restritiva. O especialista não tem a ferramenta `Skill`: lê a skill pelo caminho que a roupa ou o pedido dá. O setor não
  > usa a ferramenta `Skill`: repassa o caminho à peça (`setores/REGIMENTO.md`). Todo erro resolvido vai à
  > `registrar-aprendizado-como-skill`, pela Sala; setor e peça escrevem as quatro linhas no relato.
- **Em `sala/caca.md`, linha 71** (e em `sala/CLAUDE-completo.md`, linha 1294, o arquivo de volta): "Skill nova ou mudada só
  carrega numa sessão nova do app" está velho (provas a, §3 e §10). O texto novo:
  > A skill nova ou mudada vale na mesma sessão, uns 15 a 30 s depois de gravada, quando chega o aviso de lista (prova da Onda
  > 0, 18/11/2026); antes dele, a chamada sai "Unknown skill". A já usada na conversa fica com o texto de quando foi usada:
  > depois de mudá-la, chame-a numa conversa nova ou peça para relê-la.
  - O "agente novo só carrega numa sessão nova" (`sala/especialistas.md`, linhas 16 e 96) não foi testado: é de agente, não de
    skill.
- **O sha256 da caça está velho** (C8). O `sala/caca.md`, linhas 19–20, registra `52e563bb…` (22/10/2026). A
  `cacar-no-chrome` mudou em 05/11/2026, no commit `0bfb744` ("Vídeo 5 (big-sur): o screen_text fechado…"): ganhou 4 linhas,
  sobre os itens `"estado": "sem lugar na regência"` e `"fora_da_lista_do_lucas"`, e hoje é
  `639be90c92aedf14f1025663f554a0c2e7c9b8628b02b15d0f948468ab5bbe7e`. A regra da seção diz "Se mudar, registre o sha256 novo
  nesta linha", e "se a skill e esta seção divergirem, pare e avise o Lucas". A Sala confere as 4 linhas e, se estão certas,
  troca o começo da linha 19–20 por:
  > A skill `.claude/skills/cacar-no-chrome/SKILL.md` é a **cópia adaptada do canal**, com sha256
  > `639be90c92aedf14f1025663f554a0c2e7c9b8628b02b15d0f948468ab5bbe7e` em 05/11/2026 (commit `0bfb744`: o item sem lugar na
  > regência e o fora da lista do Lucas; conferido pela Sala em <data>). Antes, `52e563bb…`, em 22/10/2026, às 14:5x, quando
  > o 4K MOV (ProRes) da Storyblocks passou a entrar […o resto como está].
- **O `skills-conferir` lendo o sha do `sala/caca.md`** (C8, texto; não implementado). Hoje o script guarda o sha da caça
  numa constante (`LEGADO`), com o `639be90c…`: passa um estado que o registro oficial ainda não reconhece, e na próxima
  mudança a Sala teria de atualizar os dois lugares (a L2 da registrar, item 46). A troca proposta:
  - o `conferir` lê o sha vigente do `sala/caca.md`: o primeiro hexadecimal de 64 caracteres depois de "com sha256", no
    parágrafo "O método";
  - compara com o do arquivo; se divergirem, o X1 diz "a skill e o `sala/caca.md` divergem: pare e avise o Lucas", e sai 1;
  - a prova ganha dois casos (o sha do `sala/caca.md` igual passa; diferente reprova com X1), com um `sala/caca.md` de
    mentira na pasta temporária.
  Não implementei porque, com o registro velho, o conferir sairia 1 até a Sala trocar a linha 19–20, e o pedido era o
  conferir em 0. Depois da troca, são umas 15 linhas e dois casos: vai num pedido curto.

### 7.4 O `APRENDIZADOS.md` (C23)

A numeração é da Sala, ao aplicar: o portão de movimento, que roda em paralelo, pode propor itens também. Hoje o último é o
103. Abaixo, "item A" e "item B".

- **Item 46** ("A decisão do dono copiada em várias roupas envelhece em todas de uma vez"): acrescentar no fim
  `Skill: registrar-aprendizado-como-skill (L2)`. E uma **pendência a corrigir** (pela Sala ou pelo Lucas), não só um
  registro: a `marca/voz.md` §1 (linhas 13–14) ainda diz `eleven_v3` e a voz `iAc9oLyb1zcwD4O3ZTBv`, e o `canal.json` ›
  `narracao` está no `eleven_v4` com a `829pig94w9GefZ9jJQYl` (conferido hoje).
- **Item A, as skills na mesma sessão, a lista que corta e o rascunho.** Serve a qualquer canal: é como a Claude Code trata
  as skills.
  > ### A. A skill nova vale na mesma sessão e em toda conversa aberta, a lista de skills já corta descrições, e o `fork` roda no modelo do agente
  > - **O que aconteceu** (18/11/2026, a Onda 0 das skills): a skill gravada em `.claude/skills/` foi avisada em ~15–30 s a
  >   todas as conversas abertas no canal, a principal da Sala e os subagentes inclusive, sem reiniciar; antes do aviso, a
  >   chamada dá "Unknown skill". A lista de skills tem ~30 mil caracteres, e 33 a 40 das ~95 skills (todas de plugins de fora
  >   do canal) já aparecem só com o nome. A skill com `context: fork` e `agent: qc-visual` rodou como `qc-visual`, no modelo
  >   do frontmatter dele. O especialista não vê a lista nem tem a ferramenta `Skill`, mas lê a skill pelo caminho que o
  >   pedido dá.
  > - **O que isso quer dizer:** gravar em `.claude/skills/` já é "valer". As quatro skills da Onda 0 valeram uns 20 minutos
  >   antes do cético, e a skill de etapa chegou às conversas dos setores, que não podem usá-la.
  > - **Como evitar:** skill nova, ou descrição ou passo novo, nasce num rascunho fora de `.claude/skills/`
  >   (`out/_skills/rascunhos/<nome>/`) e só vai para lá depois do cético; esperar o aviso antes de chamar a skill nova; a skill
  >   de prova precisa de uma descrição que não case com pedido nenhum, e de vida curta; manter as descrições do canal curtas, e
  >   a lista enxuta.
  > - **Por que serve a outros canais:** todo canal da Régie com skills cai no mesmo orçamento e na mesma pressa, e o caminho
  >   "a skill pelo caminho, dentro do especialista" serve a todos sem editar o especialista. Vale avisar o Lucas, para ver com
  >   o Mateus.
  > - Skill: `registrar-aprendizado-como-skill` (L4, L6 e L8).
- **Item B, as lições de julgamento da revisão de espectador** (destino d, §4). As quatro linhas de cada lição já estão nos
  `licoes.md`; o item guarda a história curta:
  > ### B. Dez dos 23 achados da revisão de espectador do vídeo 7 nenhum portão mede
  > - **O que aconteceu** (13 a 18/11/2026): as duas rodadas da revisão de espectador do vídeo 7 mantiveram 23 achados. 13 se
  >   medem (8 de movimento, 4 do "·" na quebra e o campo em branco da s45), e o portão de movimento os cobre. Os outros 10 são
  >   julgamento: o par antes e depois que não mostra o que a voz diz, a troca de destaque no fim da frase, a peça sem nome, a
  >   peça que volta sem o rótulo, o peso visual fora do sujeito da frase, a borda da imagem que encolhe, a pílula sobre o
  >   marcador e o rio, e o tamanho da cédula e da foto de 1938 (a marca não tem número para foto e símbolo, e o `qc-tamanho` é
  >   só de letra).
  > - **Como evitar:** cada uma virou lição na skill da etapa em que nasceu; a peça confere cada lição antes de entregar, nos
  >   quadros da prova, e escreve uma linha por lição no relato. Uma lição nunca manda a um portão sem ler o cabeçalho dele.
  > - **Por que serve a outros canais:** o antes e depois, o destaque na palavra, a peça que volta com o nome, o peso no
  >   sujeito da frase e a foto grande o bastante valem para qualquer canal sem rosto, de geografia ou de culinária.
  > - Skill: `gerar-mapa-animado-maptiler` (L1–L7); `editar-cena-html` (L1); `escrever-textos-de-tela` (L1).

### 7.5 Perguntas que ficam para o Lucas (nenhuma é urgente)

- **A pergunta 4 do catálogo** (configuração): os plugins de fora do canal (Vercel com 29 skills, Supabase, Superpowers,
  Higgsfield) em `name-only` ou `off`. A lista já corta descrições, e as do canal ainda não perderam a delas. O motivo
  concreto (C9d): o `dataviz` traz paleta própria, contra a marca §2 (cor por papel, nenhum hex cravado), e saiu **em segundo**
  no pedido do gráfico de cena; o `higgsfield-generate` é serviço pago de fora e casa com "animação". Na rodada 4, nenhum dos
  dois venceu.
- **"Tiro as três skills de etapa da lista do Claude (`disable-model-invocation: true`)?"** (C1d; catálogo §1.2, pergunta 3):
  - as peças as leem pelo caminho e nem veem a lista (prova b);
  - fora da lista, elas não acordam na Sala nem nos setores, e liberam espaço no orçamento da lista;
  - a `registrar-aprendizado-como-skill` fica na lista: a Sala a usa;
  - com o sim, a exceção `C7:disable-model-invocation` de cada uma entra no `EXCECOES` do `skills-conferir`, com a data e a
    mensagem literal, porque sem ela o campo reprova (C7).
- **A pergunta 6 do catálogo** (`context: fork` com `agent: <especialista>`): **a prova mediu que funciona, não decidiu o uso**
  (C7). Ele rodou como o especialista, no modelo do frontmatter, sem crédito (§3 c e §10). Usar continua decisão do Lucas: o
  `fork` faz do texto da skill a tarefa inteira da peça e pula o despacho (o esforço, as liberações, o `chrome liberado`, a
  regra dos 5 minutos e o aviso de máquina). O `skills-conferir` reprova esse campo com C7 até a exceção dele estar no script.

## 8 · Os limites

- **O cético foi feito** (`cetico.md`, APROVA COM TROCAS), e as trocas que cabem nos destinos deste pedido foram aplicadas
  (§11). As skills mudadas não passaram por um segundo cético; a rodada 4 do teste de mesa conferiu as descrições novas.
- **As skills mínimas não trazem o procedimento** (o `etapas.md` S29, S31 e S32). Elas apontam a roupa, e o procedimento
  completo entra nas ondas delas.
- **Não provado:**
  - o caminho pela roupa (b): pede a roupa editada (§7.1);
  - o `effort` no `fork`;
  - o "Unknown skill" depois de apagar uma skill que nunca foi usada;
  - se as cinco conversas dos setores receberam a lista de skills, e se um setor chamaria a `Skill` contra o regimento (pediria
    um setor de verdade);
  - se a Claude Code roda a injeção de comando escrita dentro de um bloco de código cercado, e se a forma de várias linhas
    existe nesta versão: o `skills-conferir` toma o lado seguro e a reprova em qualquer lugar do corpo (C6);
  - o que o campo `paths` faz nesta versão (sem rede, não li a documentação de hoje): o `skills-conferir` dá aviso.
- O `skills-conferir` lê um YAML simples (chave e valor, blocos `>-` e `|`, um mapa aninhado, listas), o bastante para o
  formato do canal. Um YAML exótico que a Claude Code aceita pode reprovar com F3: escreva no formato simples.
- O limite de 12 mil caracteres para o fim do "Pare se" é uma conversão estimada (3,2 caracteres por token), não uma medida
  da compactação.
- O `SKILL.md` da registrar tem 12,2 KB (o ideal do catálogo é até ~10 KB; o conferir dá aviso, não reprova). Cresceu com as
  trocas C1, C2, C9, C11, C12, C17, C18 e C19. Se a Sala quiser enxugar, a etapa 11 ("Quando vale") e as linhas de custo podem
  ir para o `licoes.md`.

## 9 · Os arquivos

- `.claude/skills/registrar-aprendizado-como-skill/` (`SKILL.md`, `licoes.md`, `gatilhos.md`)
- `.claude/skills/gerar-mapa-animado-maptiler/` (idem)
- `.claude/skills/editar-cena-html/` (idem)
- `.claude/skills/escrever-textos-de-tela/` (idem)
- `.claude/skills/INDICE.md`
- `ferramentas/skills-conferir.mjs` e `ferramentas/skills-conferir-provar.mjs`
- `out/_skills/onda-0/RELATO.md` (este) e `out/_skills/onda-0/cetico.md` (o cético da Sala)
- `out/_skills/onda-0/prova/` (a skill de mentira, as duas versões, fora de `.claude/skills/`)
- `out/_skills/onda-0/disparo-mesa/`:
  - os scripts: `preparar.mjs` (com `--lista-real`, `--so`, `--sufixo` e `--gabarito`) e `pontuar.mjs`;
  - das quatro rodadas: `descricoes[ |2|3|4].md`, `pedidos[ |2|3|4].md`, `gabarito[ |2|3|4].json`,
    `respostas[ |2|3|4].json` e `resultado[ |2|3|4].json`.
- A pasta `out/_skills/rascunhos/` não existe ainda: nasce com a primeira skill que a registrar montar (C2).

## 10 · As provas a) e c) refeitas pela conversa principal da Sala (18/11/2026, 16:29–16:30)

- **a)** A Sala recolocou as duas skills de mentira em `.claude/skills/` (cópias de `out/_skills/onda-0/prova/`) às 16:29:13. A chamada pela ferramenta `Skill`
  às ~16:29:15 e às ~16:29:22 deu "Unknown skill: prova-onda-0-palavra"; a de ~16:29:30, depois de mais duas chamadas de ferramenta, carregou a skill, e a
  Sala respondeu a palavra combinada (TAMANDUA-CARTOGRAFO-41). **A skill nova vale na mesma conversa principal, sem reiniciar**, uns 15 a 30 s depois de
  gravada (o aviso de lista chega entre uma chamada de ferramenta e outra).
- **c)** A chamada da `prova-onda-0-fork` (`context: fork`, `agent: qc-visual`) pela conversa principal rodou como `qc-visual`, no Sonnet 5.5 do frontmatter
  dele, sem a ferramenta `Skill` e sem a lista de skills (a instrução chegou como texto), e devolveu a palavra combinada (PEIXE-BOI-MERIDIANO-73) e o `slug` do
  `canal.json` (`alpha-point`).
- As duas skills de mentira foram apagadas de `.claude/skills/` às 16:30 (as cópias ficam em `out/_skills/onda-0/prova/`).
- Falta só a b) pela roupa: depois de a roupa ganhar a linha "Skills do meu passo" (o §7), despachar o `mapista` sem citar a skill e ver se ele a acha.

## 11 · As trocas do cético, uma a uma (18/11/2026, ~16:4x–17:0x)

O cético (`cetico.md`) deu **APROVA COM TROCAS**: 4 GRAVES, 8 MÉDIAS e 12 LEVES. Apliquei as que cabem nos destinos deste pedido
(`.claude/skills/`, `ferramentas/skills-conferir*.mjs` e esta pasta), com as mesmas regras. O resto está no §7, com o texto
final, para a Sala.

| Troca | Grau | Feita? | Onde, e o que mudou |
|---|---|---|---|
| C1a | GRAVE | feita | as três de etapa ganharam, logo depois de "Quem roda", a linha "**Se você não é a peça:**": o setor não usa a `Skill`; se ela carregar, não siga as etapas, despache a peça com o caminho do `SKILL.md` e do `licoes.md` |
| C1b | GRAVE | feita | registrar, "Quem roda" (só grava aqui o subagente da Sala com pedido que diga onde; setor e peça nunca) e o 6º item do "Pare se"; a lição L8 |
| C1c | GRAVE | para a Sala | o regimento não é destino deste pedido: o texto está no §7.2 |
| C1d | — | pergunta ao Lucas | §7.5 (`disable-model-invocation` nas três de etapa) |
| C2 | GRAVE | feita | registrar: o 3º item do "Pare se", a etapa 4 (o rascunho em `out/_skills/rascunhos/<nome>/`, no plural, como o pedido da Sala; o cético escreveu `rascunho`), a etapa 8 nova (o cético antes de valer; a lição que só acrescenta bloco vai direto; a skill fora da ordem das ondas ganha uma linha ao Lucas), a Saída e a lição L6. O `INDICE.md` diz o mesmo no topo |
| C3a | GRAVE | feita | `gerar-mapa-animado-maptiler`, L5: o tamanho também é julgamento; a cédula a 60 × 32 px no 1080p; a origem diz "a forma e o tamanho" |
| C3b | GRAVE | feita | L6 nova (ESP-16, s57, a pílula sobre o anel e o rio), com o texto do cético |
| C3c | GRAVE | feita | L7 nova (ESP-11, s53, a foto de 1938 pequena), com o texto do cético |
| C3d | GRAVE | feita | as introduções dos `licoes.md` do mapa e da cena: o que fica com o portão de movimento, com os portões de cena, e o que nenhum portão mede |
| C3e | GRAVE | feita | registrar, L3: "13 se medem … os outros 10 são julgamento"; e a lição L7 (a lição mandou a um portão que não existe), com a regra na etapa 3 c): "Só aponte um portão que existe e mede aquilo: leia o cabeçalho dele" |
| C3f | GRAVE | feita | §4 deste relato e o item B do §7.4, com "`gerar-mapa-animado-maptiler` (L1–L7)" |
| C3g | GRAVE | para a Sala | conferir o escopo final do portão de movimento quando o relato dele chegar (§4) |
| C4 | GRAVE | feita | a etapa 7 das duas skills de cena: o `ferramentas/folhas-cena.py` do clipe 4K com o carimbo, os instantes da lição a 30 fps com o `ffmpeg -nostdin`, nada de folhas a 0,5 s, e "não conferida nos quadros" com o porquê quando não há clipe; "roupa §9" no mapa e "§11" na cena. As linhas das roupas (§7.1), inclusive a do `qc-visual`, com o orçamento dele |
| C5 | MÉDIA | feita | "Acima desta skill" nas quatro: o `CLAUDE.md`, o regimento, a marca, a roupa e o ofício; "até a resposta, vale a regra mais restritiva". As linhas das roupas (§7.1) e a do `CLAUDE.md` (§7.3) |
| C6 | MÉDIA | feita | `skills-conferir`, B1: lê o corpo inteiro, com o código, e pega também o bloco aberto com a crase e o ponto de exclamação; dois casos novos na prova; a L5 da registrar diz o que mudou |
| C7 | MÉDIA | feita | `skills-conferir`, C7: `disable-model-invocation: true` e `context: fork` com `agent` reprovam sem a exceção do Lucas (`"C7:disable-model-invocation"`, `"C7:context"`); o `conferirSkill` aceita `excecoes`; na prova, o fork passa só com as duas exceções, e com uma só reprova; o `paths` dá aviso; o 2º item do "Pare se" da registrar nomeia os dois; o §7.5 corrige a pergunta 6 |
| C8 | MÉDIA | texto | §7.3: a linha nova do `sala/caca.md` e a troca do `conferir` para ler o sha de lá. Não implementei: com o registro velho, o conferir sairia 1 até a Sala trocar a linha, e o pedido era o conferir em 0 |
| C9a–b | MÉDIA | feitas | registrar, etapas 2 e 7: a lista real (o `skill_listing` da transcrição), com as de fora do canal, e o catálogo à parte; o `preparar.mjs` ganhou `--lista-real` |
| C9c | MÉDIA | feita | os `gatilhos.md` do mapa e da cena ganharam o vizinho da miniatura, e o da cena, a tabela em HTML; as duas descrições terminam em ", a miniatura, titulo-e-miniatura"; **rodada 4 com a lista real: 33 de 33** (§5) |
| C9d | MÉDIA | pergunta ao Lucas | §7.5, a pergunta 4 com o motivo (o `dataviz` em segundo no gráfico) |
| C10 | MÉDIA | feita | "O que esta skill NÃO faz" nas duas de cena: no conserto, o pedido diz o que mudar, e a skill vale para o resto (o "Pare se", os portões e as lições); as roupas dizem "nova ou consertada" (§7.1) |
| C11 | MÉDIA | feita | registrar, o 5º item do "Pare se" (dado pessoal na mensagem literal) e "sem dado pessoal" na etapa 1 |
| C12 | MÉDIA | feita | registrar, etapa 3 c'): "no mesmo dia, sem especialista rodando (catálogo §3.4)", e os setores releem. É texto da skill sobre o que a Sala faz; o `CLAUDE.md` não mudou |
| C13 | LEVE | feita | mapa, etapa 2: "A base, a geometria e a rede: §2, §3 e §10", a geometria só de `_media/geo/`, site que recusa robô não se contorna |
| C14 | LEVE | feita | mapa, L2: o ~1 s é do conserto da ESP-13; a marca não dá número |
| C15 | LEVE | feita | mapa, L4: só a imagem sem moldura; a miniatura com moldura some inteira |
| C16 | LEVE | feita | a descrição da de textos (306 caracteres): "sem repetir a fala nem contradizê-la (o hedge da voz fica no rótulo)"; rodada 4 |
| C17 | LEVE | feita | registrar, etapa 9: o `grep` olha também `setores/` e o `conferente-de-midia` |
| C18 | LEVE | feita | registrar, "Custo": o leitor do teste (~100 mil tokens) e o agente do cético |
| C19 | LEVE | feita | registrar, "O que esta skill NÃO faz": a correção do jeito da Sala conversar continua na memória |
| C20 | LEVE | feita | a prova imprime o estado do canal à parte ("não conta na prova"); 78 casos |
| C21 | LEVE | feita | mapa e cena, "Pare se": "devolva a quem te despachou (o setor ou a Sala)"; e o "Quem roda" das duas diz "quando lhe passam uma cena de mapa (o setor ou a Sala)" |
| C22 | LEVE | feita | mapa, "Antes de começar": a sua roupa inteira; o `editor-de-arte` lê da do `mapista` só os §1, §3, §5, §6 e §7. A linha da roupa do editor (§7.1) sem "(no vídeo 7, a s55)" |
| C23 | LEVE | para a Sala | §7.4: a numeração fica com a Sala (itens A e B), o rascunho no item A, as dez lições no B, e a voz do item 46 como pendência |
| C24 | LEVE | feita | a introdução do `licoes.md` da `editar-cena-html` aponta a peça que volta (textos L1, mapa L2) |

**A prova, depois das trocas** (18/11/2026, ~16:5x):
- `node ferramentas/skills-conferir.mjs`: **sai 0** (4 passaram, a `cacar-no-chrome` como legado com o sha `639be90c…`, 0
  reprovaram; o índice bate). Um aviso, não reprovação: o `SKILL.md` da registrar tem 12,2 KB (§8).
- `node ferramentas/skills-conferir-provar.mjs`: **78 de 78** (59 malformadas, cada uma pelo código certo; a boa, o fork com
  as exceções e o `paths`; 7 do índice; 3 do legado; 5 da linha de comando). O estado do canal, à parte: sai 0.
- O teste de mesa, rodada 4, com a lista real: **33 de 33**.

**O tamanho, depois das trocas:**

| Skill | SKILL.md | Linhas | Pasta | Descrição | Lições |
|---|---|---|---|---|---|
| `registrar-aprendizado-como-skill` | 12,2 KB | 131 | 21,7 KB | 309 car. | 8 |
| `gerar-mapa-animado-maptiler` | 7,2 KB | 91 | 19,3 KB | 296 car. | 7 |
| `editar-cena-html` | 5,8 KB | 80 | 9,8 KB | 340 car. | 1 |
| `escrever-textos-de-tela` | 4,7 KB | 65 | 8,1 KB | 306 car. | 1 |

**O que fica para a Sala:**
1. o regimento (§7.2), as roupas (§7.1, com as duas linhas velhas do `mapista`), o `CLAUDE.md` e `sala/caca.md` (§7.3, com o
   sha da caça a conferir em `0bfb744`), o `APRENDIZADOS.md` (§7.4) e a `marca/voz.md` (item 46);
2. o escopo final do portão de movimento contra a L5 e a L7 (C3g);
3. as perguntas ao Lucas (§7.5): a pergunta 4 (plugins de fora), o `disable-model-invocation` nas três de etapa e o uso do
   `fork` (a pergunta 6);
4. a prova b) pela roupa, depois de a roupa ganhar a linha (§3, "O que fica para a conversa principal da Sala", passo 3);
5. depois de registrar o sha novo da caça, o pedido curto do `conferir` lendo o sha do `sala/caca.md` (C8);
6. o commit, com o `segredos.mjs --staged` antes.
