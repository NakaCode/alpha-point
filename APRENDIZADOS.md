# Aprendizados — Alpha Point

O que apareceu no onboarding deste canal e pode servir ao motor. Para Lucas e Mateus decidirem;
nada aqui foi alterado no motor.

## 23/09/2026 — onboarding (motor em `ffb3ec0`)

### 1. O passo `mirror` (montador) é inalcançável na linha `long-form`
- **O problema:** nenhuma aresta chega em `mirror`; `cut_detect` vai direto para `research`
  (`db/pipeline-long-form.json`, linhas 9–11). Conferido consultando o banco semeado.
- **Por que importa:** pelas SPECs dos próprios ofícios, decupador (bruto) e montador (master já
  editado) são entradas alternativas (`crafts/decupador/SPEC.md` §3). Como a Régie começa num master
  editado, quem deveria rodar é o montador — que a SPEC chama de "o teto de tudo que vem depois".
  O teste `testes/state.test.mjs:40` fixa o caminho atual.

### 2. Dois ofícios se contradizem sobre o pedido de mídia
- `crafts/montador/CONTRATO.md` §2.1 exige `midia_termos`/`midia_necessidade` e diz que
  `needs.midia` NÃO é o pedido.
- `crafts/pesquisa-imagens/CONTRATO.md` §1b diz que esses campos "não existem mais" e usa
  `needs.midia` como sinal duro.
- Quem seguir os dois perde pedidos de mídia no meio do caminho.

### 3. `npm test` falha sem identidade do git — e o onboarding lê isso como defeito do motor
- Nesta máquina o git não tinha `user.name`/`user.email`: 44/45, com a falha em
  `testes/create.test.mjs` ("does not have any commits yet"), sem dizer que a causa é a identidade.
- O `ONBOARDING.md` diz "se não fechar, pare: o problema é do motor, não da pessoa". Aqui era da
  máquina. Configurada a identidade: 45/45.
- Sugestão: o teste passar `GIT_AUTHOR_*`/`GIT_COMMITTER_*` no ambiente isolado, ou reprovar com
  mensagem que nomeie a causa.

### 4. Menores
- `source` no `canal.json` sai com espaço quando o dono tem sobrenome: `regie://alpha-point@Lucas Rosa`.
  Vira caminho `facts/<canal>/<dono>/` na ADR 0006.
- `template/marca/identidade.md` ainda diz que quem a escreve é o `arquiteto-de-marca`, ofício que
  não existe.
- No Mac/Linux, a sugestão do gerador `--em=~/projetos/<slug>` (`bin/create-regie:134`) cria uma
  pasta literal `~` dentro do motor: o shell não expande `~` depois de `=`.
- O `doctor` de todo canal novo abre com o aviso "6 passos sem aresta 'retake'".
