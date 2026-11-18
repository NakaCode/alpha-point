# O cético da Onda 0 das skills · 18/11/2026, ~16:3x–17:0x

Pedido: o da Sala, nesta conversa (o cético que o catálogo §4 pede antes de uma skill valer). Feito por um agente geral da Sala
(Opus). Só leitura, fora deste arquivo: nada se editou nas skills, no `skills-conferir`, nas roupas, no `CLAUDE.md`, em `sala/`
nem no regimento. Nada de rede, navegador, vidIQ, crédito, `SendMessage`/`send_message` ou ferramenta `Skill`. Um script de casos
de borda rodou numa pasta temporária do sistema, fora do canal, e foi apagado.

**O que li:** o pedido e o relato da Onda 0 (com o §10 que a Sala acrescentou às 16:3x), o catálogo (§1, §2.1, §2.2, §2.7, §2.10,
§3.4, §4, "A retomada"), o cético de 08/10, as quatro skills (`SKILL.md`, `licoes.md`, `gatilhos.md`) e o `INDICE.md`, o
`skills-conferir.mjs` e a prova dele, os dois `mantidos.json` do vídeo 7 (os 23 achados, campo a campo), o `setores/REGIMENTO.md`
inteiro, a identidade §4.3, §4.4, §5 e §6 (os trechos que as lições citam), as roupas do `mapista` (inteira), do `editor-de-arte` e do
`redator-de-tela` (os trechos citados), o ofício do `redator-de-tela` §2, o cabeçalho do `ferramentas/portao-movimento.mjs` (16:33,
em curso), os do `check-overlap`, do `qc-tamanho` e do `ferramentas/folhas-cena.py`, o `sala/caca.md` (o sha256 e a linha 71), o
`sala/autonomia-e-espectador.md` (as folhas) e o material do teste de mesa (`disparo-mesa/`).

**O que rodei:** `node ferramentas/skills-conferir.mjs` (sai 0: 4 passam, a caça como legado, o índice bate) e a prova (73 de 73,
sai 0). Às 16:29, com as duas skills de mentira recolocadas pela Sala, a conferência saiu 1 e a prova deu 72 de 73 (C20). E 9 casos de
borda contra o `conferir` (C6 e C7).

**Pergunta 5 (as skills de mentira):** estão fora de `.claude/skills/` desde 16:30 (só em `out/_skills/onda-0/prova/`, com os
mesmos bytes). Nenhum campo proibido pelo §1.2 nas quatro skills: só `name`, `description`, `argument-hint` e `metadata`.

---

## Veredito: APROVA COM TROCAS

As quatro skills são boas no que fazem, e o trabalho é cuidadoso:
- a forma do §1.3 está certa;
- os ponteiros para as seções das roupas conferem (menos o §10 do mapista, C13);
- o "Pare se" de cada uma tem as regras do grupo;
- os consertos que as lições citam existem nas cenas de hoje (s19, s28, s30, s41, s42, s53, s55, s57, s58 e s61, e o [430] do
  `textos-tela.json`);
- o `skills-conferir` é sólido e a prova dele é larga.

Mas há quatro defeitos GRAVES, e eles vêm antes de as roupas apontarem para as skills e do primeiro despacho de `screen_text` ou de
`art` do vídeo 8:
- **C1:** as skills acordam nos setores, que não podem usar a ferramenta `Skill`, e nada nelas diz ao setor o que fazer;
- **C2:** a registrar cria a skill direto em `.claude/skills/`, onde ela vale em segundos em toda conversa, sem o cético que o
  catálogo exige antes;
- **C3:** a classificação dos 23 achados deixa três sem portão e sem lição, e a L5 manda deixar o tamanho a um portão que não existe;
- **C4:** a etapa 7 das skills de cena manda a peça fazer as folhas da revisão de espectador, a cada 0,5 s, que são da Sala e custam
  caro.

Todas se resolvem com troca de texto, sem refazer nada. As skills podem ficar onde estão enquanto a Sala aplica as GRAVES: hoje o
vídeo 8 está no roteiro, e nenhum setor recebe tarefa de cena.

**A conta:** 4 GRAVES, 8 MÉDIAS e 12 LEVES.

---

## As trocas

### C1 · GRAVE · As skills acordam nos setores, que não podem usar a ferramenta `Skill`

**Onde:**
- os quatro `SKILL.md`, a linha "Quem roda";
- o "Pare se" da `registrar-aprendizado-como-skill`, item 5;
- o relato §7, que não propõe nada para o `setores/REGIMENTO.md`.

**O trecho:**
- REGIMENTO, "As ferramentas do setor": "Nenhum conector (Drive, Docs), nem vidIQ, `Artifact`, agendamento, notificação, `Workflow`
  ou skill.";
- REGIMENTO, "Quem faz o trabalho": "O setor não faz o trabalho da peça ele mesmo.";
- REGIMENTO, "O que nunca sai da Sala": nem o setor nem a peça "escrevem em: `CLAUDE.md`, `APRENDIZADOS.md`, a memória; `setores/`,
  `marca/`, `ferramentas/`, `scripts/`, `.claude/`, `db/`";
- nas skills de cena, "**Quem roda:** quem faz a cena de mapa: o `mapista`…" e "Leia a roupa `marca/agentes/mapista.md` inteira";
- na registrar: "você é setor ou subagente e o pedido não diz que grava aqui: escreva as quatro linhas no relato e pare."

**Por quê:**
- A prova a) mostrou a lista de skills chegando, em 15 a 30 s, a toda conversa aberta no canal que se conferiu. Os setores rodam
  na mesma pasta (REGIMENTO: `git rev-parse --show-toplevel` = `C:/projetos/alpha-point`).
- A própria ferramenta `Skill` manda chamá-la primeiro quando o pedido casa. O setor Arte que receber "[Sala → Arte] … faz a s19"
  vê a `gerar-mapa-animado-maptiler` casando com o pedido. Se a chamar, quebra a lista fechada.
- Carregada a skill, nada diz ao setor para despachar a peça. Ela diz "Leia a roupa inteira" e dá as etapas da cena.
- O item 5 da registrar deixa um pedido autorizar o setor a gravar em `.claude/skills/`. O regimento diz "nunca", e afrouxar regra
  do regimento só vale "confirmada pelo Lucas no chat do setor".
- A trava do setor é escrita, não técnica (REGIMENTO, "Por que a trava é escrita"). Ela depende de o texto não se contradizer.

**Texto novo:**

a) Nas três skills de etapa, logo depois de "**Quem roda:**":
> **Se você não é a peça:** a Sala e o setor não fazem esta etapa. O setor não usa a ferramenta `Skill` (`setores/REGIMENTO.md`,
> "As ferramentas do setor"). Se esta skill carregou numa conversa de setor, não siga as etapas: despache a peça e ponha no pedido o
> caminho `.claude/skills/<nome>/SKILL.md`.

b) Na registrar, "Quem roda" (a segunda frase) e o item 5 do "Pare se":
> Setor, especialista ou subagente que achar o erro escreve as quatro linhas (etapa 1) no relato dele, e a Sala registra. Só grava
> aqui o subagente da Sala, com um pedido que diga onde. O setor e a peça nunca gravam aqui (`setores/REGIMENTO.md`, "O que nunca
> sai da Sala").

> - você é setor ou peça, ou subagente sem um pedido que diga onde gravar: escreva as quatro linhas no relato e pare.

c) Proposta para o `setores/REGIMENTO.md`. Ela aperta e esclarece, e vale quando a Sala manda reler.
- Em "As ferramentas do setor", depois de "…`Workflow` ou skill.":
  > As skills do canal (`.claude/skills/`) aparecem na lista desta conversa, mas o setor não usa a ferramenta `Skill`. Quando o
  > pedido da Sala nomeia uma skill, o setor põe no pedido à peça o caminho do `SKILL.md` e o do `licoes.md`, e a peça os lê com
  > `Read`. Se uma skill carregar por engano, o setor não segue as etapas dela: despacha a peça e diz no relato.
- Em "O pedido à peça", um item:
  > as skills do passo, pelo caminho, quando o pedido da Sala as nomeia;

d) Pergunta ao Lucas, opcional e de configuração (catálogo §1.2: "dependem de decisão do Lucas"). A pergunta: "Tiro as três
skills de etapa da lista do Claude (`disable-model-invocation: true`)?"
- As peças as leem pelo caminho e nem veem a lista (prova b).
- Fora da lista, elas não acordam na Sala nem nos setores, e liberam espaço no orçamento da lista.
- A `registrar-aprendizado-como-skill` fica na lista: a Sala a usa.

### C2 · GRAVE · A registrar faz a skill valer antes do cético

**Onde:** `registrar-aprendizado-como-skill/SKILL.md`, as etapas 4, 7 e 10, e a Saída.

**O trecho:**
- etapa 4: "Se a skill da etapa não existe no disco, crie-a mínima: a pasta com o nome do catálogo; …";
- nenhuma etapa de cético.

**Por quê:**
- O catálogo §4 diz: "Cada skill nasce com o `gatilhos.md` e passa por um cético antes de valer."
- A prova a) (relato §3 e §10) mostrou que gravar em `.claude/skills/` já é "valer": em 15 a 30 s, a skill está na lista de toda
  conversa aberta, setores inclusive.
- Pelo procedimento, toda skill nova ou descrição mudada vale antes do teste de mesa e antes de qualquer cético.
- A própria Onda 0 é o exemplo: as quatro skills valem desde ~16:1x, e este cético começou ~16:3x.
- Uma skill mínima nascida de um erro, fora da ordem das ondas, também nasce sem que o Lucas saiba (catálogo, linha 9: "Cada skill
  só nasce com o ok do Lucas para a onda dela").

**Texto novo** (a etapa 4, o começo, e uma etapa nova entre a 7 e a 8):

> 4. **Se a skill da etapa não existe no disco, monte-a mínima num rascunho, fora de `.claude/skills/`:**
>    `out/_skills/rascunho/<nome>/`. O que está em `.claude/skills/` vale em segundos em toda conversa aberta, setores inclusive
>    (prova da Onda 0). [o resto da etapa como está]
>    **Feito quando:** `node ferramentas/skills-conferir.mjs out/_skills/rascunho/<nome>` sai 0.

> 7b. **O cético, antes de valer** (catálogo §4):
>    - Um agente que não escreveu a skill lê o rascunho contra o `CLAUDE.md`, o regimento, a marca, a roupa e o ofício do
>      especialista.
>    - Ele usa as perguntas do `out/_skills/onda-0/cetico.md`: o pedido errado, a regra afrouxada, a lição mal resumida, o que
>      piora o trabalho de quem segue a skill ao pé da letra.
>    - Só depois das trocas dele a pasta vai para `.claude/skills/<nome>/` e a linha entra no `INDICE.md`.
>    - Mudar a descrição ou um passo de uma skill que já vale segue o mesmo caminho: rascunho, teste de mesa, cético, troca.
>    - A lição que só acrescenta um bloco ao `licoes.md`, sem mudar passo nem descrição, vai direto.
>    - Skill nova fora da ordem das ondas ganha uma linha ao Lucas no chat, ao registrar.
>    **Feito quando:** o laudo do cético está ao lado do rascunho, e as GRAVES dele, resolvidas.

### C3 · GRAVE · Três achados ficaram sem portão e sem lição, e a L5 manda o tamanho a um portão que não existe

**Onde:**
- o relato §4 (a tabela);
- `gerar-mapa-animado-maptiler/licoes.md`, a introdução e a L5;
- `editar-cena-html/licoes.md`, a introdução;
- `registrar-aprendizado-como-skill/licoes.md`, a L3;
- a proposta do item 105 do `APRENDIZADOS.md` (relato §7.3).

**O trecho:**
- relato §4: "tamanho, sobreposição, começo vazio | ESP-3 s28 · ESP-4 s30 · ESP-9 s45 · ESP-11 s53 · ESP-16 s57 (5) | o portão de
  movimento (se medir o tamanho e o começo vazio) e o `check-overlap` (a sobreposição)";
- L5: "O tamanho mínimo é medida (fica com o portão); a forma é julgamento";
- as introduções dos `licoes.md`: "o tamanho e a sobreposição, com os portões de cena".

**Por quê:**
- O cabeçalho do `ferramentas/portao-movimento.mjs` (16:33), em "O QUE NÃO É DELE", diz duas coisas:
  - "A pílula que cobre um anel ou um traço do mapa (a s57 da r1) não é texto sobre texto, e nenhum portão a mede: fica com o
    qc-visual";
  - "O tamanho de foto e de símbolo (a cédula da s28/s30, a miniatura da s53) não tem número na marca: fica com o qc-visual".
- O `check-overlap` compara só "elementos de texto VISÍVEIS".
- O `qc-tamanho` é "GATE DE TAMANHO DE TEXTO".
- A s57 já tinha passado pelos portões de cena quando a revisão achou a ESP-16.
- Resultado: a ESP-11 (a foto de 1938 a 180 × 114 px no 1080p), a ESP-16 (a pílula sobre o anel de Rock Island e o rio) e o tamanho
  da ESP-3 e da ESP-4 (a cédula a 22 × 12 px) não têm nem portão nem lição.
- A L5, seguida ao pé da letra, deixa a próxima cédula de 22 × 12 px passar de novo, porque "o tamanho é do portão".
- A conta certa:
  - 13 se medem: 8 de movimento, 4 de "·" e o campo em branco da s45 (ESP-9), que o portão de movimento mede (item 4 do
    cabeçalho);
  - 10 são julgamento: os 6 de hoje, mais a ESP-3, a ESP-4, a ESP-11 e a ESP-16.
- A ESP-16 é também regra que existia e não foi lida: a identidade §6, "Nenhum rótulo sobre a divisa", diz "O que vale para a
  divisa vale para as outras linhas do mapa (a malha, a estrada, a rota): a pílula não fica sobre elas", e a roupa do `mapista` §3 a
  repete. O rio é linha; o anel, não.

**Texto novo:**

a) L5, "Como evitar" (a frase do meio):
> O tamanho também é julgamento, até a marca ter um número e um portão o medir. Hoje nenhum mede: o `qc-tamanho` é só de letra, e o
> `portao-movimento.mjs` deixa foto e símbolo com o `qc-visual`. No quadro de 1080p, o símbolo que carrega a frase não fica menor que
> o que se leu depois do conserto (a cédula a 60 × 32 px no 1080p, 120 × 64 no 4K). Pergunte: "sem o som, isto é dinheiro?".

E na Origem: "Destino a): a forma e o tamanho".

b) Lição nova na `gerar-mapa-animado-maptiler`, a L6:

> ### L6 · A pílula sobre o mapa cobre o marcador ou o rio que a voz conta
> - **Sintoma:** "A pílula 'Photo from 2009' da miniatura de Rocky Reach cobre o 3º marcador de barragem (Rock Island) e o trecho do
>   rio logo abaixo do 2º; com a foto na tela só 4 anéis se veem, e o 5º surge do nada quando ela sai" (s57, 8,5–14 s).
> - **Causa:** a pílula ia de x ~1165 a ~1515 e de y ~458 a ~518 no 1080p, por cima do anel de Rock Island (~1482, 479). Ela estava
>   presa à miniatura, e ninguém conferiu o que ela cobria com a câmera andando. O `check-overlap` só compara texto com texto.
> - **O que resolveu:** consertos-1 (ESP-16, `out/rio-columbia/graphics/s57.html`): o aviso [369] com a borda direita na da
>   miniatura, crescendo para a esquerda sobre a mata, fora do rio e do anel.
> - **Como evitar:** a regra já existe para as linhas (identidade §6, "Nenhum rótulo sobre a divisa": a pílula não fica sobre a
>   divisa, a malha, a estrada nem a rota; roupa §3). Ela vale também para o rio e para o anel. Nenhuma pílula, aviso do ano ou
>   miniatura cobre um marcador ou um trecho que a voz conta, em nenhum instante do movimento. Nenhum portão mede peça do mapa sob
>   texto: confira nos quadros da prova.
> - **Origem:** `out/rio-columbia/_tmp/espectador-r1/mantidos.json` (s57, t 8,5, ESP-16); vídeo 7, revisão de 13/11/2026, conserto
>   de 16/11/2026. Destino a): regra que existia e não foi lida, e o anel, que ela não nomeava.

c) Lição nova na `gerar-mapa-animado-maptiler`, a L7:

> ### L7 · A única foto da frase entra pequena demais para se ler no celular
> - **Sintoma:** "A miniatura da pesca de salmão de 1938 (Kettle Falls), única imagem da frase do salmão, entra no alto à direita
>   com uns 180 × 114 px no 1080p, menor que o próprio aviso 'Photo from 1938'" (s53, 32–34,2 s).
> - **Causa:** 360 × 228 px no 4K. A identidade §5, "Nome de lugar com a foto", fala de uma "moldura pequena", sem número, e a
>   miniatura de nome de lugar foi usada como a imagem que carrega a frase.
> - **O que resolveu:** consertos-1 (ESP-11, `s53.html`): 720 × 456 no 4K, presa às quedas, crescendo sobre a mata vazia, com o
>   aviso logo abaixo.
> - **Como evitar:** a foto que é a única imagem do que a voz diz não é miniatura de nome de lugar. No 1080p, a pessoa e o objeto
>   dela se reconhecem (no vídeo 7, 360 × 228 px no 1080p bastou, e 180 × 114 não), e o aviso do ano nunca é maior que a foto. Até a
>   marca ter um número, é julgamento.
> - **Origem:** `out/rio-columbia/_tmp/espectador-r1/mantidos.json` (s53, t 32, ESP-11); vídeo 7, revisão de 13/11/2026, conserto
>   de 16/11/2026. Destino a): nenhum portão mede tamanho de foto.

d) As introduções dos dois `licoes.md`:
> O mapa parado, a câmera brusca, a viagem curta, o "·" na quebra e o campo em branco ficam com o portão de movimento; a
> sobreposição de texto sobre texto e o tamanho da letra, com os portões de cena. O tamanho de foto e de símbolo e a pílula sobre
> uma peça do mapa nenhum portão mede: são lições.

e) Registrar, L3, no Sintoma: troque "uns 17 eram mensuráveis por script" por:
> 13 se medem (o portão de movimento: 8 de movimento, 4 de "·" e o campo em branco da s45); os outros 10 são julgamento, inclusive
> o tamanho de foto e de símbolo e a pílula sobre o anel, que nenhum portão mede.

f) O relato §4 e o item 105 passam a dizer o mesmo, com a skill de destino "`gerar-mapa-animado-maptiler` (L1–L7)".

g) Quando o relato do portão de movimento chegar, a Sala confere o escopo final dele:
- se ele passar a medir o tamanho (o cabeçalho diz que "o RELATO propõe a regra"), a L5 e a L7 passam a apontar o portão;
- se a regra de tamanho entrar na marca, ela é decisão do Lucas.

### C4 · GRAVE · A etapa 7 manda a peça fazer as folhas da revisão de espectador, a cada 0,5 s

**Onde:**
- `gerar-mapa-animado-maptiler/SKILL.md`, a etapa 7;
- `editar-cena-html/SKILL.md`, a etapa 7;
- as linhas propostas para as roupas no relato §7.1 ("antes de entregar, uma linha por lição"), inclusive a do `qc-visual`.

**O trecho:** "confira cada lição do `licoes.md` nos quadros da cena (as folhas a cada 0,5 s, em 1080p, com a fala ao lado; o
celular é a régua)".

**Por quê:**
- As folhas a cada 0,5 s com a fala embaixo são as da revisão de espectador. O `ferramentas/folhas-espectador.py` as faz a partir
  dos quadros da linha do tempo, e as duas coisas são da Sala:
  - REGIMENTO: "A revisão de espectador fica na Sala";
  - REGIMENTO: a linha do tempo "nunca sai da Sala".
- A ferramenta da peça é o `ferramentas/folhas-cena.py` (cabeçalho: "o editor-de-arte e o mapista, para ver o próprio trabalho").
  Ela tira um quadro por beat e um a cada 4 s, e só do clipe 4K com o carimbo, que na cena de mapa pede tiles. Render de mais de 5
  minutos não roda dentro da peça (a regra dos 5 minutos).
- Ao pé da letra, a conta pesa:
  - a s19, de 43 s, dá 86 quadros a 0,5 s, umas 22 folhas por cena;
  - no vídeo 2, lotes de 21 a 56 folhas fizeram 80 % das imagens serem reabertas, e as regravações custaram US$ 751
    (`sala/autonomia-e-espectador.md`, M10);
  - é por isso que o `qc-visual` tem o teto de 25 imagens.
- Sem o ok de tiles, ou com render longo, a peça não tem quadro nenhum, e a skill não diz o que fazer.

**Texto novo** (a etapa 7, nas duas skills; no `editar-cena-html`, "roupa §11" no lugar de "roupa §9"):

> 7. **Antes de entregar, as lições:** confira cada lição do `licoes.md` em dois lugares:
>    - nos quadros que você já tira para provar a cena: `python -X utf8 -B ferramentas/folhas-cena.py <proj> <id>`, do clipe 4K
>      com o carimbo `2160p` (roupa §9);
>    - nos instantes que cada lição aponta: o cruzamento do par, a troca de destaque, a entrada da peça que volta, e a troca de
>      imagem da L4, quadro a quadro a 30 fps, com o `ffmpeg -nostdin`.
>
>    Não faça folhas a cada 0,5 s: elas são da revisão de espectador, da Sala. Sem clipe (sem o ok de tiles, ou com render de mais
>    de 5 minutos), escreva no relato "L<n>: não conferida nos quadros" e o porquê; a Sala a confere depois do render.
>    **Feito quando:** o relato traz a saída de cada portão e uma linha por lição, com o instante olhado ou o porquê de não ter
>    olhado.

Nas linhas das roupas (relato §7.1), troque "uma linha por lição no relato" por:
> uma linha por lição no relato: o instante olhado nos quadros da prova, ou o porquê de não ter olhado.

Na linha do `qc-visual`, troque "confira cada uma nos quadros" por:
> confira cada uma nos quadros do seu orçamento (§2.1), sem quadro a mais. A que pede quadro fora dele (a troca quadro a quadro da
> L4) vai ao laudo como "não olhada".

### C5 · MÉDIA · O desempate põe uma ordem em vez de "a mais restritiva vence", e esquece o regimento

**Onde:**
- os quatro `SKILL.md`, a linha "Acima desta skill";
- as propostas do relato §7.1 (as roupas) e §7.2 (o `CLAUDE.md`).

**O trecho:**
- nas três de etapa: "Se divergirem, vale o `CLAUDE.md`, depois a roupa e a marca: pare e diga no relato.";
- na registrar: "Se divergirem, vale o `CLAUDE.md`: pare e avise o Lucas.";
- na linha do `CLAUDE.md`: "Uma skill nunca passa por cima deste arquivo, da marca nem da roupa".

**Por quê:**
- Uma ordem fixa deixa a linha mais frouxa do `CLAUDE.md` vencer a mais estrita da roupa.
- Ela põe a roupa, que é derivada, antes da marca, onde mora a decisão do Lucas (catálogo §1.3: "Decisão do Lucas mora num lugar
  só").
- O regimento, que os setores leem, e o ofício ficam de fora.
- Hoje já há divergências reais:
  - a roupa do `mapista` §0 ainda diz que o `qc-cena` "abre o mapa e pede tiles", e o `CLAUDE.md` corrigiu isso em 04/10;
  - a §6 dela ainda diz "DECISÃO DO LUCAS PENDENTE", e a identidade §5 tem a resposta para o mapa parado (relato §7.1).
- O "pare" segura o pior. Falta dizer o que vale enquanto se espera.

**Texto novo** ("Acima desta skill", nas três de etapa, com o `<id>` de cada uma):
> **Acima desta skill:** o `CLAUDE.md`, o `setores/REGIMENTO.md` (quando roda num setor), a marca (`marca/…`, as seções de hoje), a
> roupa `marca/agentes/<id>.md` e o ofício `.claude/agents/<id>.md`. Se a skill divergir de qualquer um deles, pare e diga no relato;
> até a resposta, vale a regra mais restritiva, e a skill nunca vence nenhum deles.

Na registrar:
> … Se divergirem, pare e avise o Lucas; até a resposta, vale a regra mais restritiva, e a skill nunca vence o `CLAUDE.md`.

Na linha proposta para o `CLAUDE.md` (relato §7.2), troque a frase do meio e a última por:
> Uma skill nunca passa por cima deste arquivo, do regimento, da marca, da roupa nem do ofício: se divergir, pare e avise; até a
> resposta, vale a regra mais restritiva. O setor não usa a ferramenta `Skill`: repassa o caminho à peça (`setores/REGIMENTO.md`).
> Todo erro resolvido vai à `registrar-aprendizado-como-skill`, pela Sala; setor e peça escrevem as quatro linhas no relato.

Nas roupas, a frase do fim fica: "… da roupa, do ofício, da marca ou do `CLAUDE.md`, pare e diga no relato; até a resposta, vale a
mais restritiva."

### C6 · MÉDIA · O `skills-conferir` não vê a injeção dentro de bloco de código cercado

**Onde:**
- `ferramentas/skills-conferir.mjs`, linhas 293–294;
- `registrar-aprendizado-como-skill/licoes.md`, a L5;
- a prova.

**O trecho:**
- no código: `const semCodigo = corpo.replace(/```[\s\S]*?```/g, "");`;
- na L5: "descreva a injeção em palavras, nunca com o padrão escrito, nem dentro de código; o `skills-conferir` pega."

**Por quê:** testado numa pasta temporária.
- O padrão `` !`git status` `` reprova dentro de código em linha e dentro de bloco `~~~`.
- Dentro de bloco cercado com crases, **passa** (sai 0).
- Um bloco aberto com `` ```! `` (a forma de várias linhas, se esta versão a tiver; não conferido) também passa.
- A L5 diz que o conferir pega, e o próprio relato diz que não se provou se a Claude Code respeita o código. O lado seguro é
  procurar em tudo.

**Texto novo:**
```js
    // B1 lê o corpo inteiro, com o código: não se provou que a Claude Code respeita o bloco cercado (licoes.md, L5).
    if ((/!`[^`]+`/.test(corpo) || /^\s*(```|~~~)!/m.test(corpo)) && !exc["B1"]) falha("B1", "…");
```
Na prova, dois casos novos que reprovam com B1: "a injeção num bloco cercado" e "o bloco cercado aberto com ```!".

### C7 · MÉDIA · O `skills-conferir` deixa passar os campos que dependem de decisão do Lucas

**Onde:**
- `ferramentas/skills-conferir.mjs`, linha 59 (`PEDEM_OK`) e linhas 268–276;
- a prova, o caso "o fork com agent: qc-visual devia passar";
- o relato §7.4.

**O trecho:** o catálogo §1.2: "Campos que dependem de decisão do Lucas (seção 7): `disable-model-invocation: true`…; `context:
fork` com `agent: <especialista>`".

**Por quê:**
- Testado: `context: fork` com `agent: mapista` e `disable-model-invocation: true` passam calados, e a prova exige que o `fork` com
  especialista passe.
- O relato §7.4 trata a pergunta 6 como respondida. A prova mediu que o caminho funciona; o uso continua decisão do Lucas.
- O `fork` faz do texto da skill a tarefa inteira da peça. Ele pula o despacho pelo setor ou pela Sala: o esforço, as liberações, o
  `chrome liberado`, a regra dos 5 minutos e o aviso de máquina.

**Texto novo:**
```js
if (c["disable-model-invocation"] === true && !exc["C7:disable-model-invocation"]) falha("C7", "disable-model-invocation: true depende de decisão do Lucas (catálogo §1.2, pergunta 3)");
if (c.context === "fork" && c.agent && !exc["C7:context"]) falha("C7", "context: fork com agent depende de decisão do Lucas (catálogo §1.2, pergunta 6: a prova da Onda 0 mediu que funciona, não decidiu o uso)");
```
- Na prova:
  - o "boa-fork" passa só com a exceção, e o `conferirSkill` ganha um parâmetro `excecoes` para a prova poder injetá-la;
  - um caso novo, "o fork com especialista sem a exceção", reprova com C7.
- De passagem: o campo `paths`, se faz o que o nome diz (acorda a skill pelo arquivo tocado), contorna a descrição e o teste de mesa.
  Merece ao menos um aviso (não conferido: sem rede, não li a documentação de hoje).

### C8 · MÉDIA · O sha256 da caça mora em dois lugares, e eles já divergem

**Onde:**
- `ferramentas/skills-conferir.mjs`, linhas 60–65 (`LEGADO`);
- `sala/caca.md`, linhas 19–20.

**O trecho:**
- no conferir: `sha256: "639be90c…"`;
- no `sala/caca.md`: "com sha256 `52e563bb…` em 22/10/2026", e mais abaixo, "Se mudar, registre o sha256 novo nesta linha" e "**Se a
  skill e esta seção divergirem, pare e avise o Lucas.**"

**Por quê:**
- A skill mudou em `0bfb744` (05/11, mais 4 linhas, o "Item sem lugar"), e o registro oficial ficou no `52e563bb`.
- O conferir gravou o sha de hoje como legado: passa um estado que o registro não reconhece, e nunca dará o X1 para esta mudança.
- Na próxima mudança, a Sala precisa lembrar de atualizar os dois. É o item 46 (a L2 da própria registrar): a mesma coisa copiada em
  dois lugares envelhece em um deles.

**Texto novo:**
- O `conferir` lê o sha vigente do `sala/caca.md`: o primeiro hexadecimal de 64 caracteres depois de "com sha256", no parágrafo "O
  método". Ele compara com o do arquivo, e a mensagem do X1 vira "a skill e o `sala/caca.md` divergem: pare e avise o Lucas".
- Até a Sala conferir as 4 linhas de `0bfb744` e registrar o `639be90c` no `sala/caca.md` (o relato §7.2 já propõe), o conferir sai
  1. É o estado certo.

### C9 · MÉDIA · O teste de mesa não usou a lista que a conversa vê de verdade

**Onde:**
- os quatro `gatilhos.md`;
- o relato §5;
- `registrar-aprendizado-como-skill/SKILL.md`, as etapas 2 e 7.

**O trecho:**
- `disparo-mesa/descricoes*.md`: "As descrições das skills do canal (66)";
- etapa 7: "recebe as descrições do `INDICE.md` e do catálogo";
- etapa 2: "pelas descrições do `INDICE.md` e do catálogo §2".

**Por quê:**
- O leitor viu as 66 do catálogo, como se todas existissem, e nenhuma das ~90 de fora do canal que estão na lista real (relato §3 b:
  92 skills, 59 com descrição).
- Hoje, 61 das 66 não existem. Um pedido de consertos não tem a `consertar-cena` para onde ir.
- Os vizinhos de verdade, com descrição na lista:
  - o `dataviz` ("whenever you are about to create ANY chart… HTML"), para "Monta a cena do gráfico de mortes por animal". Ele traz
    paleta própria, contra a marca §2: cor por papel, nenhum hex cravado;
  - o `frontend-design` e o `artifact-design`, para "cena HTML";
  - o `higgsfield-generate` ("make a video", "animate this photo"), para "Monta a animação do rio subindo até as barragens". Ele é
    serviço pago de fora;
  - a miniatura (o vídeo 8 está nela), para a skill de mapa e para a de cena.
- O `INDICE.md` não tem descrições.

**Texto novo:**

a) Registrar, etapa 7:
> Um agente que não escreveu a descrição (em Sonnet: é leitura) recebe a lista que a conversa vê de verdade: o anexo `skill_listing`
> mais recente da transcrição da Sala, com as skills de fora do canal. Recebe também, à parte, as descrições do catálogo §2 das que
> ainda não existem (`out/_skills/onda-0/disparo-mesa/preparar.mjs`), e os pedidos embaralhados, sem as respostas. …

b) Registrar, etapa 2: "pelos `SKILL.md` de `.claude/skills/` e pelo catálogo §2".

c) Nos `gatilhos.md`, "Não devem acordar":
- na `gerar-mapa-animado-maptiler`: "Desenha o mapa da Austrália em vermelho para a miniatura." → `titulo-e-miniatura` (catálogo);
- na `editar-cena-html`: "Faz a miniatura do vídeo 8 com a cobra." → `titulo-e-miniatura`;
- e o resultado dos pedidos de gráfico e de animação contra o `dataviz` e o `higgsfield-generate`.

As descrições podem ganhar ", a miniatura, titulo-e-miniatura" no fim. Contei: 296 caracteres na de mapa e 340 na de cena, dentro dos
350. Refazer o teste com a lista real.

d) A pergunta 4 do catálogo ao Lucas (os plugins de fora em `name-only` ou `off`) ganha um motivo concreto: o `dataviz` e o
`higgsfield-generate` disputam pedidos de cena.

### C10 · MÉDIA · No conserto, a peça para de ler as lições

**Onde:**
- `gerar-mapa-animado-maptiler/SKILL.md` e `editar-cena-html/SKILL.md`, a seção "O que esta skill NÃO faz";
- as descrições ("para consertar, consertar-cena").

**O trecho:**
- "não aplica lista de consertos (`consertar-cena`) … até lá, vale a roupa";
- "Para uma lista de consertos, consertar-cena, que manda ler esta."

**Por quê:**
- A `consertar-cena` não existe.
- As sete lições nasceram de rodadas de conserto (consertos-1 e -2), e "o conserto que cria defeito ao lado" é lição conhecida
  (catálogo, R6; item 59).
- A peça que segue a skill num conserto lê "não aplica lista de consertos" e pula a etapa 7.
- A linha proposta para a roupa do `mapista` diz "toda cena de mapa": as duas discordam.

**Texto novo** ("O que esta skill NÃO faz", o primeiro item, nas duas):
> - não decide a lista de consertos (`consertar-cena`, do catálogo, ainda não criada). Até ela existir, num conserto vale o pedido
>   para o que mudar, e esta skill para o resto: o "Pare se", a etapa 6 (os portões) e a etapa 7 (as lições), que a cena consertada
>   também passa.

A descrição fica como está, sem novo teste de mesa.

### C11 · MÉDIA · A registrar grava a mensagem literal no git sem o "nada pessoal"

**Onde:** `registrar-aprendizado-como-skill/SKILL.md`, o "Pare se" (tem 5 itens; cabe 1).

**O trecho:** etapa 1, "Sintoma: o que se viu, com a mensagem literal entre aspas"; o catálogo §2.10, "todas que commitam ou
gravam relato: nada pessoal no git".

**Por quê:**
- O `licoes.md` e o `APRENDIZADOS.md` vão ao git.
- Um erro de caça, de banco ou de PDF de licença pode trazer e-mail, nome de usuário ou ID de conta (`CLAUDE.md`, "Caça nos bancos
  pagos: a parte dos agentes").
- O `segredos.mjs --staged` está só na Saída, e pega segredo, não dado pessoal.

**Texto novo** (o 6º item do "Pare se"):
> - a mensagem literal do sintoma traz e-mail, nome de usuário, ID de conta ou outro dado pessoal (de banco, de PDF de licença, de
>   mensagem): tire-o antes de gravar. O `licoes.md` e o `APRENDIZADOS.md` vão ao git (`CLAUDE.md`, "Caça nos bancos pagos").

### C12 · MÉDIA · A regra de segurança fica esperando o fim do vídeo

**Onde:** `registrar-aprendizado-como-skill/SKILL.md`, etapa 3, c').

**O trecho:** "Mudar o `CLAUDE.md` é da Sala, entre vídeos."

**Por quê:**
- O "entre vídeos" vem do catálogo §3.4, que fala do corte grande do `CLAUDE.md`. A regra de lá é "Nunca com especialista rodando".
- O `CLAUDE.md` muda no meio de vídeo sempre (`fb1954d`, no vídeo 7).
- Ao pé da letra, uma regra de segurança aprendida no meio do vídeo espera o fim morando só numa skill. É isso que o c' existe para
  impedir (cético de 08/10, §7; a L1 desta mesma skill).

**Texto novo:**
> Mudar o `CLAUDE.md` é da Sala, no mesmo dia, sem especialista rodando (catálogo §3.4). Depois, ela manda os setores relerem
> (`setores/REGIMENTO.md`, "Entre um vídeo e outro").

### C13 · LEVE · A skill de mapa não aponta a roupa §10 (rede, geometria e o site que recusa robô)

`gerar-mapa-animado-maptiler/SKILL.md`, etapas.
- O `mapista` tem `WebFetch` e `WebSearch`, e o catálogo §2.10 dá às skills que leem a web o "Pare se" do site que recusa robô.
- O "Pare se" já tem 6 itens, e a roupa é lida inteira antes.
- Basta um ponteiro na etapa 2:
  > **A base, a geometria e a rede:** roupa §2, §3 e §10. A geometria só de `_media/geo/`, com a `pauta-geo`; se faltar, peça à
  > `pesquisa-geo`. Site que recusa robô não se contorna; 429 e 504 se esperam.

### C14 · LEVE · A L2 do mapa atribui à marca um número que é do conserto

`gerar-mapa-animado-maptiler/licoes.md`, L2.
- O texto: "nenhum trecho fica mais de ~1 s com uma peça sem sentido na tela (identidade §5, 'Espaço vazio esperando a voz
  incomoda')".
- A marca não dá número ali; os ~1 s são do conserto da ESP-13.
- Texto novo:
  > … nenhum trecho fica mais de ~1 s com uma peça sem sentido na tela (o número do conserto da ESP-13; a marca não dá número:
  > identidade §5, "Espaço vazio esperando a voz incomoda").

### C15 · LEVE · A L4 do mapa pegaria a miniatura com moldura

`gerar-mapa-animado-maptiler/licoes.md`, L4.
- O texto: "toda imagem (satélite, foto, PNG) sobre o mapa que escala com a câmera enquanto some ganha borda suave".
- A miniatura de nome de lugar tem moldura de propósito (identidade §5, "Nome de lugar com a foto": "a borda da mesma cor dela").
- Texto novo:
  > toda imagem sem moldura (satélite, PNG de base, recorte) que escala com a câmera enquanto some ganha borda suave (máscara), ou
  > some antes de a borda entrar no quadro. A miniatura com moldura (identidade §5) some inteira, sem máscara.

### C16 · LEVE · A descrição da skill de textos promete menos precisão que o ofício permite

`escrever-textos-de-tela/SKILL.md`, a descrição (e o catálogo §2.1, item 18).
- O texto: "nem passar a precisão que a voz arredondou".
- O ofício (§2, a tabela) diz que a "constante publicada com fonte própria" pode ir exata à tela. A `marca/voz.md` §1 diz: "A tela
  pode ser exata, mas preserva o hedge".
- Texto novo (306 caracteres; pede novo teste de mesa):
  > Escreve as palavras de rótulo, número e legenda em inglês dos EUA, no formato do canal, sem repetir a fala nem contradizê-la (o
  > hedge da voz fica no rótulo). Use quando falta o texto de uma cena, ou no passo screen_text. Pôr o texto na cena é
  > editar-cena-html; o crédito de mídia, escrever-credito-na-tela.

### C17 · LEVE · A busca da regra antiga não olha o regimento

Registrar, etapa 8. O regimento guarda regras (a do Python, a dos 5 minutos), e o `conferente-de-midia` é agente do canal, que se
edita aqui. Texto novo:
> … em `.claude/skills/`, `marca/agentes/`, `marca/`, `CLAUDE.md`, `sala/`, `setores/` e `.claude/agents/conferente-de-midia.md`.

### C18 · LEVE · O custo da registrar não diz o que o teste e o cético gastam

Registrar, a linha "Custo". O relato §5 mediu ~105 a 110 mil tokens por leitor. Texto novo:
> **Custo:** nenhum crédito. Cada teste de mesa custa um leitor em Sonnet (~100 mil tokens de contexto, quase tudo a carga inicial;
> relato da Onda 0, §5), e o cético, mais um agente. Nunca os scripts de avaliação do `skill-creator`…

### C19 · LEVE · A registrar não diz onde fica a correção do jeito da Sala trabalhar

Registrar, "O que esta skill NÃO faz".
- Sem a fronteira, uma correção como "fale português" ou "o tamanho das mensagens" vira skill mínima, pela etapa 4.
- Hoje, essas correções moram na memória da Sala.
- Texto novo:
  > - não substitui a memória da Sala: a correção do Lucas ao jeito da Sala conversar com ele (a língua, o tamanho da mensagem,
  >   quando perguntar) continua na memória; o que ensina uma etapa da linha vem para cá.

### C20 · LEVE · A prova do conferir depende do estado vivo de `.claude/skills/`

`ferramentas/skills-conferir-provar.mjs`, o último caso ("as skills de verdade do canal deviam sair 0").
- Às 16:29, com as skills de mentira da Sala na pasta, a prova deu 72 de 73, sem defeito na ferramenta.
- Texto novo: o caso se imprime à parte, como "estado do canal (não conta na prova)", e fica fora dos 73.

### C21 · LEVE · "Devolva à Sala", quando quem despachou foi o setor

`gerar-mapa-animado-maptiler` ("Pare se", item 4) e `editar-cena-html` (item 5).
- O regimento diz que, onde o ofício ou a roupa dizem "Claude central", "a peça devolve ao setor o que é da Sala".
- Texto novo: "não desenhe; devolva a quem te despachou (o setor ou a Sala)".

### C22 · LEVE · O `editor-de-arte` numa cena de mapa recebe uma segunda roupa inteira

`gerar-mapa-animado-maptiler/SKILL.md`, "Antes de começar": "Leia a roupa `marca/agentes/mapista.md` inteira".
- Para o editor, são 31 KB a mais, com linhas velhas (§0 e §6, C5).
- Texto novo:
  > Leia a sua roupa inteira. O `editor-de-arte` lê também, da roupa do `mapista`, os §1, §3, §5, §6 e §7 (o gasto, a base, o
  > crédito, a câmera e o espaço).
- Na linha da roupa do editor (relato §7.1), tire "(no vídeo 7, a s55)": é histórico.

### C23 · LEVE · As propostas do `APRENDIZADOS.md` (relato §7.3)

- **A numeração:** o portão de movimento, que roda em paralelo, pode propor itens também. A Sala numera ao aplicar.
- **O 104:** "Como evitar" ganha "o rascunho fora de `.claude/skills/` até o cético" (C2).
- **O 105:** muda com C3 (dez lições, com a ESP-11 e a ESP-16, e o tamanho como julgamento).
- **O item 46:** a voz (`marca/voz.md` §1 em `eleven_v3` e `iAc9oLyb…`; o `canal.json` em `eleven_v4` e `829pig94…`, que conferi)
  é pendência a corrigir pela Sala ou pelo Lucas, não só registro.

### C24 · LEVE · "A peça que volta" não chega ao `editor-de-arte`

`editar-cena-html/licoes.md`.
- A ESP-17 nasceu na lista de textos, mas a s58 é cena do editor: o cabeçalho do HTML dizia que a régua volta "como a s34 o
  deixou", e ela voltou sem a cota.
- A lição está na skill de textos (L1) e na de mapa (L2), não na de cena.
- Basta uma linha na introdução do `licoes.md`:
  > A peça que volta de outra cena volta com o rótulo que a identificava: `escrever-textos-de-tela`, L1, e
  > `gerar-mapa-animado-maptiler`, L2.

---

## O que não consegui conferir

- **A injeção dentro de bloco cercado:** se a Claude Code (2.1.326) a roda, e se a forma de várias linhas aberta com `` ```! `` existe.
  Sem rede e sem chamar `Skill`. C6 propõe o lado seguro.
- **Os setores:** se as cinco conversas receberam mesmo a lista de skills (não li as transcrições delas; a prova a) conferiu o agente
  do portão e a Sala), e se um setor chamaria a `Skill` contra o regimento (pediria um setor de verdade).
- **O portão de movimento:** o escopo final dele. Li o cabeçalho às 16:33, e o relato dele ainda não estava no disco. Se ele passar a
  medir o tamanho, a C3 muda.
- **O campo `paths`:** se existe e o que faz (C7).
- **O teste de mesa com a lista real:** não o refiz, porque custaria um leitor (C9).
- **Os números das lições contra os quadros:** conferi contra o `mantidos.json` e contra o HTML de hoje (os comentários e o código
  dos consertos), não contra os quadros (os 5 px dos lagos, os 22 × 12 px das cédulas, os 180 × 114 px da foto de 1938).
- **O que não li:**
  - os ofícios inteiros do `mapista` e do `editor-de-arte` (do ofício do `redator-de-tela`, só o §2);
  - a roupa do `qc-visual` §5, onde o relato quer pôr a linha;
  - a `cacar-no-chrome`, que não é minha.
- **O `effort` no `fork`:** continua não medido, como o relato diz.
