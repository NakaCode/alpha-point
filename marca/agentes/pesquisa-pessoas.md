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

**DECISÃO DO LUCAS PENDENTE: se o vídeo mostra o rosto das pessoas citadas, e de que fontes de retrato.**
A identidade não trata de retrato de terceiro. Até lá:
- Entra só retrato de **acervo aberto com licença** conferida arquivo a arquivo: Wikimedia Commons, NARA,
  acervos federais dos EUA (identidade.md §6; midia.md §1).
- **Retrato oficial do governo estadual, foto de jornal, perfil de LinkedIn e foto de site de empresa não
  são domínio público automático**, e o "uso editorial" do ofício (§9) não se presume neste canal.
  Registre fonte, URL e o que a origem diz sobre direitos, e devolva ao Lucas.
- Foto de banco nunca é a pessoa citada, e pessoa de banco nunca ilustra política, conflito ou assunto
  sensível (midia.md §2.2).
- Sem retrato aceito, a entrega é o pacote de dados: nome completo e cargo conforme a fonte, com a URL.

## 2 · Na tela (identidade.md §2, §3, §4.1, §4.2)

- **Nome completo e cargo, em inglês, pelo cargo e sem partido** (voz.md §2: nada que escolha lado; no
  Juneau, os políticos vão pelo cargo, sem rótulo partidário, `roteiros/juneau/roteiro-editor.md`). O
  cargo é o que a fonte diz.
- Rótulo na pílula `--rotulo` (`#0B0F14` a 88 %), texto em `--tinta`, Inter 700, **128 px** (teto 160,
  até 3 palavras), cantos de 12 px, respiro de 24 × 40 px.
- **DECISÃO DO LUCAS PENDENTE: como o card de pessoa cabe na identidade.** A identidade pede nome e cargo
  (§5) e põe o rótulo em até 3 palavras (§4.1); o contrato exige o cargo (`contratos/textos-tela.schema.json`
  › `cards_pessoa` › `o_que_e`). Nenhum citado do Juneau cabe: "Assembly member Maria Gladziszewski" tem 4.
  Proposta do verificador, ainda não aprovada: o nome no rótulo (até 3 palavras) e o cargo logo abaixo como
  legenda, 84 px, Inter 500 (o papel "eixo / legenda" de identidade.md §4.1). Você entrega nome e cargo
  separados; a forma na tela espera o Lucas.
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

A pílula `--rotulo` com nome e cargo (a forma espera a decisão do §2), sem silhueta, sem rosto genérico, com
o aviso no relatório. Quem escolhe entre ela e a troca de modo é o `montador`.

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
  for rosto, licença de retrato ou o card.
