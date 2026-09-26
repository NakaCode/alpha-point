<!-- Roupa do Alpha Point para o pesquisa-pessoas. Escrita em 26/09/2026, na instalação dos especialistas da
     pré-v1 da Régie. Molde de formato: template/marca/agentes/pesquisa-pessoas.md da pré-v1 (commit 7ab9543),
     que é a roupa do Canal Top10 — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do canal:
     marca/identidade.md, marca/voz.md, marca/midia.md, marca/tokens.css, marca/pronuncias.md, canal.json,
     CLAUDE.md, roteiros/<proj>/… Onde o canal ainda não decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE" e o
     que se faz até lá. -->

# ROUPA ALPHA POINT — pesquisa-pessoas

> Só o que é do canal. O ofício (identificar a pessoa exata, hierarquia de fontes, verificação por visão,
> recorte, nunca fabricar rosto) está em `.claude/agents/pesquisa-pessoas.md` e não se discute aqui.
> Marca ativa: `marca/identidade.md`, `marca/voz.md`, `marca/midia.md`.

## 0 · O canal, em uma tela (vale para todo especialista)

- **Faceless.** Ninguém fala para a câmera no papel de narrador, e nenhuma pessoa gerada por IA aparece
  como real (identidade.md §0, §5). O master é a narração sobre tela preta 3840×2160, e 100 % do tempo é
  coberto por cena. Discurso ou entrevista de uma fonte real é REGISTRO, com rótulo de nome completo e
  cargo (identidade.md §5). Há um relógio só, `out/<proj>/words.json`.
- **O `words.json` tem a grafia da cópia para a voz**, não a do roteiro: aliases de pronúncia e números por
  extenso (no Juneau, `Kay-too` = KTOO, `Keel` = Kiehl, `Mat-Sue` = Mat-Su, `N F L` = NFL, `Gladyshevsky` =
  Gladziszewski, `nineteen seventy-four` = 1974, `nine hundred sixty-six million dollars` = $966 million). A
  lista de cada vídeo é `roteiros/<proj>/voz/trocas.md`. Entidade, grafia de tela, número de tela e termo de
  busca saem de `roteiros/<proj>/roteiro-narrador.md`; do `words.json` sai o tempo, e uma âncora se procura
  nele na grafia da voz (`KTOO` não está lá; `Kay-too`, sim). O que a voz disse diferente do texto está em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo`. Como ele se faz: CLAUDE.md, "Peças da pré-v1 em
  uso", item 3.
- **Idioma.** Tela e busca em **inglês dos EUA** (`canal.json › idiomas.origem`). Relatório e notas, em
  português.
- **Formato de tela** (identidade.md §7): `2,700`, `$2.8 billion`, `ALMOST 3,000×`, `28.0×`,
  `22.2 ft (6.76 m)`, `MAY 1, 1994` (em caixa normal, `March 3, 2024`). ⚠️ Os exemplos do ofício estão no
  formato brasileiro (`QUASE 3.000×`, `28,0×`, `R$ 2 bi`, `1º DE MAIO DE 1994`, cargos em português,
  "Nova Iorque"): **não se copiam**.
- **Vocabulário de máquina não se traduz:** chaves de JSON (`quem`, `funcao`, `credito_na_tela`,
  `validado_por_visao`…), enums, `data-qc-*`, `NÃO MEDIDO` (CLAUDE.md, "O vídeo fala inglês").
- **Cena HTML**, se alguma entrega sua virar uma: `<html lang="en-US" data-render="4k-native">`, ligando
  `marca/tokens.css`; na primeira, confira um quadro 3840×2160 com o conteúdo preenchendo o quadro
  (CLAUDE.md). Neste canal, a cena é do `editor-de-arte` (§2).
- **`<motor>` nesta roupa é a pré-v1 da Régie**, clonada só para leitura (CLAUDE.md, "Peças da pré-v1 em
  uso"), e **não** o `motor.caminho` do `canal.json` (a v0.1.0). Script de `scripts/` que importa do motor
  pede `REGIE_MOTOR=<motor>` na mesma chamada; `MOTOR_SEM_ARQUIVO` ou "atualize o motor" quer dizer só que
  faltou a variável. Nunca mexa no motor nem no `canal.json` por causa disso.
- **Gate que pede `sharp` ou `playwright-core` sai NÃO MEDIDO**, com o nome: o `npm install` não foi
  autorizado pelo Lucas. Não simule gate.
- **Nunca** rode `narrar.mjs` nem `transcrever.mjs`: gastam crédito da ElevenLabs e refazem o relógio
  (CLAUDE.md).
- **Site que recusa leitura automática** (403, 405, captcha, verificação de robô, página "Just a
  moment…", pedido de login): pare nele. Não tente de novo por `curl`, por outro programa, trocando o
  User-Agent nem qualquer outro cabeçalho. Diga no relatório a URL e o que ela respondeu; o Claude central
  confere no navegador do app, com o Lucas vendo (CLAUDE.md, "A marca"; APRENDIZADOS.md, item 14). A
  política de robô do LinkedIn, de jornais e de sites de empresa não foi conferida pelo canal. A cópia
  arquivada (web.archive.org e afins) de um site que recusou robô também não se usa: DECISÃO DO LUCAS
  PENDENTE se vale como cópia ou conta como contorno (CLAUDE.md, "A marca"). Até lá, o item fica NÃO
  CONFERIDO.
- **Quem decide é o Lucas Rosa** (`canal.json › owner`). As leis `[PESQ-NN]` (`seed/regras/PESQ.md`)
  vieram do Top10: valem como ofício; onde falam de dono, card, cor, fonte tipográfica ou exemplo, vale
  esta roupa.

## 1 · Se a pessoa aparece, e de onde vem o retrato

**Decisão do Lucas (26/09/2026; midia.md §7.2): segue o ofício** (§3, §8 e §9 de
`.claude/agents/pesquisa-pessoas.md`).
- O rosto vem de **fonte autorizada**, a que responde pela foto: site oficial do órgão ou do Legislativo,
  com o retrato oficial; página institucional. Pessoa histórica: arquivo público, museu, Wikimedia Commons
  com licença conferida.
- **Retrato oficial publicado pelo próprio governo ou instituição** entra como **uso editorial**, só para
  ilustrar a citação daquela pessoa: sem crédito na tela, e com fonte, URL, licença ou uso e arquivo
  registrados na pauta (ofício §9).
- **Agência de notícias** (o fallback 5 do ofício §3) e foto de jornal, **como retrato da pessoa citada**,
  só com licença conferida (midia.md §7.2). A regra que deixa entrar foto de jornal e de agência citando a
  fonte (midia.md §7.5) não vale para o retrato de pessoa citada. A assinatura Reuters é do Top10 e não
  serve a este canal.
- **Rosto gerado ou alterado por IA, nunca**; upscale generativo também não (ofício §6, §8).
- Foto de banco nunca é a pessoa citada, e pessoa de banco nunca ilustra política, conflito ou assunto
  sensível (midia.md §2.2).
- Sem foto em fonte autorizada, o card sai só com nome e cargo (§6), com a caça registrada: consultas e
  resultados (ofício §8).

## 2 · Na tela (identidade.md §2, §3, §4.1, §4.2)

- **Nome completo e cargo, em inglês, pelo cargo e sem partido** (voz.md §2: nada que escolha lado; no
  Juneau, os políticos vão pelo cargo, sem rótulo partidário, `roteiros/juneau/roteiro-editor.md`). O
  cargo é o que a fonte diz.
- Rótulo na pílula `--rotulo` (`#0B0F14` a 88 %), texto em `--tinta`, Inter 700, **128 px** (teto 160,
  até 3 palavras), cantos de 12 px, respiro de 24 × 40 px.
- **O card de pessoa** (Lucas, 26/09/2026; identidade.md §5): o nome no rótulo (a pílula acima, até 3
  palavras) e o cargo numa linha menor logo abaixo, no papel "eixo / legenda", 84 px, Inter 500. Exemplo
  aprovado: `MARIA GLADZISZEWSKI` em cima e `Assembly member, City of Juneau` embaixo. O contrato continua
  pedindo o cargo (`contratos/textos-tela.schema.json` › `cards_pessoa` › `o_que_e`). Você entrega nome e
  cargo separados, como a fonte os escreve.
- O nome não vai em `--destaque`: a cor é do protagonista do vídeo, e em texto só no rótulo dele
  (identidade.md §2).
- **Fala citada** em Inter, **280 px** (teto 340, até 12 palavras). Fala mais longa não encolhe: corta em
  blocos ou vai para outra cena.
- **DECISÃO DO LUCAS PENDENTE: o molde da cena de citação.** O canal não tem modelo de citação, e o molde
  `seed/examples/citacao/citacao-pessoa.html` é do Top10: `lang="pt-BR"`, aspa numa fonte que não é do
  canal, brilho radial. A identidade pede só Inter, Barlow Condensed e Noto Sans (§3), no máximo 3 matizes
  por cena (§2) e nenhum degradê (`marca/tokens.css`). Até lá, entregue foto tratada e dados; a cena é do
  `editor-de-arte`.
- O canto inferior direito de 400 × 400 px fica livre (marca-d'água do YouTube), e não há logo do canal
  na cena (identidade.md §4.2). O rosto também não cai ali nem na faixa abaixo de y = 1880.
- Foto parada: Ken Burns de 1,00 a 1,12 em 6 s, linear, e no máximo 6 s parada (identidade.md §4.3,
  §4.4).

## 3 · Crédito (identidade.md §7)

- `credito_na_tela` em inglês: `<author> / <archive> · <license>`, em 76 px na faixa de crédito. Ex.:
  `Jane Doe / Wikimedia Commons · CC BY-SA 4.0`.
- Domínio público (NARA e outros acervos federais) vai sem crédito na tela; o registro na pauta continua
  obrigatório.
- Retrato oficial em uso editorial (§1) também vai sem crédito na tela, com o registro na pauta (midia.md
  §7.2).

## 4 · Grafia do nome

- Conforme a fonte. Confira em `roteiros/<proj>/pronuncia.md` e `marca/pronuncias.md`.
- ⚠️ A coluna "alias" dessas folhas é grafia **para a voz** (ex.: `Gladyshevsky` para Maria
  Gladziszewski, `Keel` para Jesse Kiehl), e a transcrição também erra nome. Na tela vai a grafia real.

## 5 · Tamanho e tratamento da foto

- O upscale não-generativo que o ofício pede (`image.upscale.classic`) é NÃO MEDIDO aqui (CLAUDE.md, tropeços
  do apoio). Foto pequena vai com a medida no relatório, sem ampliar; upscale generativo nunca.
- A medida da foto sai do `ffprobe`, e o relatório diz "medido por ffprobe" (`identify` e `medir-imagem`:
  CLAUDE.md, "Os especialistas").

## 6 · Sem foto

O card só com nome e cargo, na forma do §2 (o nome no rótulo, o cargo na legenda), sem silhueta, sem rosto
genérico, com o aviso no relatório. Quem escolhe entre ele e a troca de modo é o `montador`.

## 7 · Decisões do Lucas que tocam o ofício

- **Sem título de capítulo na tela**; capítulo só na descrição (CLAUDE.md).
- **Os últimos 20 s não têm voz**: são da tela final do YouTube (`canal.json › narracao.cauda_tela_final_s`).
  Nenhum card de pessoa ali.
- **Mapa = MapTiler** (`canal.json › mapa.perfil`), com `© MapTiler © OpenStreetMap contributors` na tela
  durante todo o mapa (identidade.md §6): não é seu, e o gasto espera o ok do Lucas.
- **Banco pago** serve só a B-roll genérico, baixado pelo Lucas (midia.md §1, §2.3): para pessoa citada não
  serve em caso nenhum (§1; midia.md §2.2).

## 8 · Os portões, e a quem devolver

```
node scripts/validar-contrato.mjs pauta-pesquisa out/<proj>/_pesquisa/pauta-pessoas.json
REGIE_MOTOR=<motor> node scripts/qc-procedencia.mjs <proj>
```

- Os portões de navegador saem NÃO MEDIDO sem npm (a lista está no CLAUDE.md, "Os especialistas"). O `qc-procedencia` e o
  `scripts/procedencia-reconciliar.mjs` pedem `REGIE_MOTOR`. Rascunho vai em `out/<proj>/_tmp/`.
- Não há ledger de insumos nem seção "A ESCADA" neste canal. A devolução é a **última linha da sua
  resposta**: a cena, o degrau em que você parou e quem decide agora — `montador` (o que entra e onde),
  `regente-de-imagem` (o que a frase exige da tela), `diretor-de-arte` (se mexe no arco) e o Lucas, quando
  um retrato ou um card fugir da regra do §1 ou do §2.
