# Lições: registrar-aprendizado-como-skill

Os erros do próprio registro de aprendizados, um bloco cada (catálogo §1.4 e §1.5). Leia quando a etapa pedir e antes de
mudar esta skill.

### L1 · O procedimento perdeu o passo da regra de segurança
- **Sintoma:** a primeira versão do catálogo (08/10/2026) dava três destinos para um erro (lição, skill própria, trava) e
  nenhum para a regra de segurança; uma regra dessas registrada só em skill pode não ser lida.
- **Causa:** a consolidação dos dois levantamentos deixou cair o passo 4 do `etapas.md` S60 ("regra de segurança vira
  linha do `CLAUDE.md`, nunca só skill").
- **O que resolveu:** o cético devolveu o passo como c') (`out/_skills/cetico.md` §7; catálogo §1.5).
- **Como evitar:** ao mudar esta skill, compare as etapas com o catálogo §1.5 e com o `etapas.md` S60, passo a passo; a
  regra de segurança fica no núcleo do `CLAUDE.md`, que todo agente lê, e não só em `sala/`, que só a Sala lê.
- **Origem:** `out/_skills/cetico.md` §7 e catálogo §1.5; 08/10/2026.

### L2 · A decisão copiada em vários lugares envelhece em todos
- **Sintoma:** a decisão de gastar na MapTiler entrou na identidade, no `CLAUDE.md` e em três roupas, e outras sete
  roupas continuaram dizendo "o gasto ainda não foi liberado". O mesmo vale hoje para a voz: a `marca/voz.md` §1 diz
  `eleven_v3` e a voz `iAc9oLyb1zcwD4O3ZTBv`, e o `canal.json` › `narracao` está no `eleven_v4` com a voz `829pig94w9GefZ9jJQYl`
  (conferido em 18/11/2026).
- **Causa:** a decisão foi transcrita em cada instrução, em vez de apontada; quem a mudou corrigiu só parte das cópias.
- **O que resolveu:** no caso da MapTiler, as sete roupas no mesmo commit e o `grep` pela frase velha antes de dar por
  registrada (`APRENDIZADOS.md`, item 46). O da voz continua aberto (catálogo §1.3).
- **Como evitar:** a lição aponta a decisão (a seção da marca, o campo do `canal.json`, com a data) e não a copia; antes de
  dar uma lição por registrada, a etapa 8 (o `grep` da frase antiga) roda sempre.
- **Origem:** `APRENDIZADOS.md`, item 46; catálogo §1.3 ("Valor de configuração se lê do `canal.json` na hora").

### L3 · A regra escrita existia e não bastou
- **Sintoma:** dos 23 achados mantidos nas revisões de espectador do vídeo 7, 13 se medem (o portão de movimento: 8 de
  movimento, 4 de "·" e o campo em branco da s45), e a regra deles já estava escrita (mapa parado mais de 2 s, viagem de
  1,5 a 3 s: identidade §4.4 e §5; o "·" na quebra: roupa do `redator-de-tela` §3; o campo em branco: identidade §5, "A
  regra que fica"). Os outros 10 são julgamento, inclusive o tamanho de foto e de símbolo e a pílula sobre o anel, que
  nenhum portão mede.
- **Causa:** as peças conferem a cena em quadro parado, e movimento não aparece em quadro parado; uma regra só em prosa
  depende de alguém lembrar dela na hora.
- **O que resolveu:** o portão de movimento (`ferramentas/portao-movimento.mjs`, pedido de 18/11/2026), que mede a cena a
  cada 0,1 s antes de entregar; os 10 de julgamento viraram lições nas skills das etapas.
- **Como evitar:** na etapa 3, o que se mede vai à trava (c) e só o julgamento fica como lição (a); a lição de julgamento
  diz a pergunta a fazer nos quadros de 1080p, não só a regra.
- **Origem:** catálogo, "A retomada (17/11/2026)"; `out/rio-columbia/_tmp/espectador-r1/` e `-r2/mantidos.json`.

### L4 · "Unknown skill" logo depois de criar a skill
- **Sintoma:** "Unknown skill: prova-onda-0-palavra", na chamada feita logo depois de gravar o `SKILL.md`.
- **Causa:** a Claude Code vigia `.claude/skills/` e só registra a skill nova quando avisa a lista (um aviso de sistema com
  o nome e a descrição), segundos depois; a chamada veio antes do aviso.
- **O que resolveu:** esperar o aviso e chamar de novo: a skill carregou na mesma sessão, sem reiniciar, num subagente e
  na conversa principal da Sala (prova da Onda 0, 15 a 30 s depois de gravada).
- **Como evitar:** depois de criar ou mudar uma skill, espere o aviso da lista antes de chamá-la; "Unknown skill" antes dele
  não é erro de forma (para a forma, o `skills-conferir`).
- **Origem:** `out/_skills/onda-0/RELATO.md`, prova a); 18/11/2026.

### L5 · A skill que só cita a injeção de comando reprova como se a usasse
- **Sintoma:** o `skills-conferir` reprovou esta skill com "[B1] o corpo tem injeção !\`comando\`", e o corpo só citava a
  sintaxe, entre crases duplas, no "Pare se".
- **Causa:** a Claude Code troca o padrão (ponto de exclamação e comando entre crases) pela saída do comando antes de o
  Claude ler a skill; não se provou se ela respeita o código entre crases, e o `skills-conferir` lê o texto cru, de
  propósito.
- **O que resolveu:** o "Pare se" passou a dizer "a injeção de comando no corpo", sem o padrão.
- **Como evitar:** numa skill, descreva a injeção em palavras, nunca com o padrão escrito, nem dentro de código (em linha
  ou bloco cercado). O `skills-conferir` lê o corpo inteiro, com o código, e pega as duas formas; antes do cético da Onda 0,
  ele pulava o bloco cercado com crases.
- **Origem:** `out/_skills/onda-0/RELATO.md`, a conferência; `out/_skills/onda-0/cetico.md`, C6; 18/11/2026.

### L6 · A skill valeu antes do cético
- **Sintoma:** as quatro skills da Onda 0 estavam na lista de toda conversa aberta no canal desde ~16:1x, e o cético delas
  começou ~16:3x; ele achou 4 defeitos graves.
- **Causa:** a etapa 4 mandava criar a skill direto em `.claude/skills/`, e gravar lá já é valer (a L4); o catálogo §4 pede
  o cético antes ("Cada skill nasce com o `gatilhos.md` e passa por um cético antes de valer").
- **O que resolveu:** a etapa 4 monta a skill num rascunho (`out/_skills/rascunhos/<nome>/`), e a etapa 8 só a move depois
  do cético; o "Pare se" diz isso.
- **Como evitar:** nada de skill nova, de descrição nova nem de passo novo direto em `.claude/skills/`; só o bloco de lição
  que não muda passo nem descrição vai direto.
- **Origem:** `out/_skills/onda-0/cetico.md`, C2; 18/11/2026.

### L7 · A lição mandou a um portão que não existe
- **Sintoma:** a L5 da `gerar-mapa-animado-maptiler` dizia "o tamanho mínimo é medida (fica com o portão)", e o relato dava a
  pílula sobre o anel da s57 ao `check-overlap`; nenhum portão mede tamanho de foto e de símbolo, e o `check-overlap` só
  compara texto com texto.
- **Causa:** a classificação seguiu o "se couber" do pedido do portão de movimento, sem ler o cabeçalho dele ("O que não é
  dele") nem o do `check-overlap` e o do `qc-tamanho`.
- **O que resolveu:** a L5 reescrita (o tamanho também é julgamento, com o número do conserto) e as lições novas L6 (a pílula
  sobre o anel) e L7 (a foto pequena demais).
- **Como evitar:** na etapa 3, c), só aponte um portão que existe e mede aquilo, pelo cabeçalho dele; o resto é lição.
- **Origem:** `out/_skills/onda-0/cetico.md`, C3; o cabeçalho de `ferramentas/portao-movimento.mjs`; 18/11/2026.

### L8 · A skill de etapa acorda na conversa do setor, que não pode usá-la
- **Sintoma:** a lista de skills chega a toda conversa aberta no canal, e um pedido "[Sala → Arte] … faz a s19" casa com a
  `gerar-mapa-animado-maptiler`; o setor não usa a ferramenta `Skill` (`setores/REGIMENTO.md`, "As ferramentas do setor") e
  não faz o trabalho da peça.
- **Causa:** a skill falava só com a peça ("Quem roda: o `mapista`"), e nada dizia ao setor o que fazer ao vê-la.
- **O que resolveu:** as skills de etapa ganharam a linha "Se você não é a peça" (despache a peça com o caminho da skill no
  pedido), e esta, a regra de que setor e peça nunca gravam aqui.
- **Como evitar:** toda skill nova de etapa nasce com essa linha (etapa 4), e o que ela pede ao setor não contraria o
  regimento; mudar o regimento é proposta à Sala.
- **Origem:** `out/_skills/onda-0/cetico.md`, C1; 18/11/2026.
