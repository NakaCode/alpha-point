# `sala/motor-e-git.md`, da Sala de controle

Veio do `CLAUDE.md` na divisão do CLAUDE.md enxuto, palavra por palavra (o mapa: `out/_modelos/md-enxuto/mapa-de-linhas.json`). O núcleo, com o índice, é o `CLAUDE.md`; o completo de antes, `sala/CLAUDE-completo.md`.

A `main` sempre em dia e a cópia `pessoal`; como rodar e atualizar a Régie; a decisão de usar a peça do motor; o `segredos.mjs` e o `doctor` da pré-v1; o XML do Premiere (item 8).


## O que você pode, e o que não pode (do CLAUDE.md)

- **A `main` do GitHub sempre em dia** (Lucas, 16/10/2026: "preciso que você SEMPRE deixe a Main do repositório atualizada.
  Isso significa que você pode e deve usar todas as ferramentas do Git em relaçao aos commits, merges, e todo o resto, pra
  manter a MAIN sempre atualizada").
  - O repositório é `top10-company/alpha-point`, privado. O `gh` 2.92 está instalado, com o login do Lucas.
  - Depois de cada commit, `git push origin main`.
  - **A cópia na conta do Lucas** (28/10/2026). O Lucas pediu "uma cópia do meu repositório na minha conta (fora da
    organiza[ção])". À pergunta "Ela fica sempre em dia ou é só a cópia de hoje?", ele respondeu "Sempre em dia (Recomendado)".
    - A cópia é `NakaCode/alpha-point`, privada. É um repositório independente, não um fork: o fork de um repositório privado
      é apagado se a organização tira o acesso. Ela está no remote `pessoal`.
    - Depois de cada `git push origin main`, rode `git push pessoal main`.
    - Ela só recebe: nunca se puxa dela nem se faz merge dela.
    - Se ela recusar o push porque a história divergiu, pare e avise o Lucas. Nunca force push.
  - Se a `main` de lá andou: `git fetch` e merge na `main` daqui, resolvendo o conflito, e depois o push. Nunca force push,
    nem reescrever o histórico que já subiu.
  - Em 16/10, a `main` estava 44 commits à frente do GitHub e subiu inteira, depois de conferida (nenhuma chave, nenhum
    endereço do Tailscale).

## Como rodar o motor

```
node C:\projetos\regie\bin\regie <verbo>
```

Sempre de dentro desta pasta: o banco é `db/canal.db`, relativo ao diretório atual.
Verbos: `doctor` (confere tudo, sem custo), `graph` (a linha), `open <slug> [título]`
(começa um vídeo), `queue` (o que está parado, e há quanto tempo),
`advance <slug> [gatilho]` (move pela linha), `drive-preparar <slug>` (liga as entregas).

## Versão do motor, e como atualizar

Este canal nasceu com a Régie antes da primeira versão marcada (commit `ffb3ec0`) e foi
atualizado para a **v0.1.0** em 23/09/2026, com `regie init`. A versão instalada agora:
`node C:\projetos\regie\bin\regie version`.

O motor é clonado numa VERSÃO marcada, não na ponta do desenvolvimento — o que Lucas e
Mateus mudarem no meio do caminho não cai no trabalho da pessoa. Quando eles avisarem de
versão nova (por exemplo v0.2.0), faça por ela:

```
git -C C:\projetos\regie fetch --tags
git -C C:\projetos\regie checkout v0.2.0
```

Depois, dentro desta pasta: `node C:\projetos\regie\bin\regie init` (atualiza a linha de produção no banco
sem perder produção nem histórico) e `node C:\projetos\regie\bin\regie doctor`. Nunca atualize no meio de uma
entrega sem avisar a pessoa.


## Peças da pré-v1 em uso (desde 25/09/2026) (do CLAUDE.md)

**Decisão do Lucas (25/09/2026):** se o motor já resolve um passo, usamos a peça dele e aposentamos a caseira. Só
não se usa quando algo concreto impede (não roda no Windows, falta chave, contraria uma decisão dele), e aí se diz o
bloqueio e o que o destrava.

- **Antes de cada commit:** `node C:\projetos\regie-v1\template\scripts\segredos.mjs --staged` (0 = limpo,
  1 = achou, 2 = não rodou). Achou, não commite.
- **Conferir a máquina:** `node C:\projetos\regie-v1\bin\regie doctor`, de dentro do canal (só lê). Em 25/09
  deu PASS, com 9 de 13 chaves, depois que o `chaves.env` chegou. **Não siga** duas sugestões que ele imprime: `regie atualizar --aplicar` é a
  migração inteira, e `autonomia instalar --aplicar` mexe nas configurações do Claude do Lucas.
8. **XML do Premiere** pelo `finalizar.mjs`, primeiro com `--sem-trilha`. Será a primeira abertura real dele no
   Windows.
Fora, por ora: `regie atualizar` (até sair a tag); rotinas agendadas; o CI `canal.yml` (o push da `main` entrou em 16/10: "O que você pode");
`gerar-imagem`; `marca gerar` (o `marca.json` da pré-v1 não comporta a paleta por papéis do canal). A caça nos
bancos pagos saiu desta lista em 26/09/2026, por decisão do Lucas ("Caça nos bancos pagos", abaixo). O
levantamento inteiro, com arquivo e linha de cada coisa, está em `midia/_motor/pre-v1-levantamento-2026-09-25.json`,
só nesta máquina.
