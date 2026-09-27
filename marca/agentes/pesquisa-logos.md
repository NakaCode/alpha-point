<!-- Roupa do Alpha Point para o pesquisa-logos. Escrita em 26/09/2026, na instalação dos especialistas da
     pré-v1 da Régie. Molde de formato: template/marca/agentes/pesquisa-logos.md da pré-v1 (commit 7ab9543),
     que é a roupa do Canal Top10 — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do canal:
     marca/identidade.md, marca/voz.md, marca/tokens.css, canal.json, CLAUDE.md, roteiros/<proj>/… Onde o
     canal ainda não decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE" e o que se faz até lá. -->

# ROUPA ALPHA POINT — pesquisa-logos

> Só o que é do canal. O ofício (nunca redesenhar logo, a versão da época da entidade, uso editorial sem
> endosso, variante monocromática do vetor original) está em `.claude/agents/pesquisa-logos.md` e não se
> discute aqui. Marca ativa: `marca/identidade.md`, `marca/voz.md`, `marca/midia.md`.

## 0 · O canal, em uma tela (vale para todo especialista)

- **Faceless.** Ninguém fala para a câmera (identidade.md §0). O master é a narração sobre tela preta
  3840×2160, e 100 % do tempo é coberto por cena (identidade.md §5). Há um relógio só,
  `out/<proj>/words.json`.
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
  formato brasileiro (`QUASE 3.000×`, `28,0×`, `R$ 2 bi`, linha explicativa em português): **não se
  copiam**.
- **Vocabulário de máquina não se traduz:** chaves de JSON, enums, `data-qc-*`, `NÃO MEDIDO`, e o nome
  do arquivo no Commons (`Flag_of_<x>.svg`) fica como está (CLAUDE.md, "O vídeo fala inglês").
- **Cena HTML**, se alguma entrega sua virar uma: `<html lang="en-US" data-render="4k-native">`, ligando
  `marca/tokens.css` (CLAUDE.md). A cena é do `editor-de-arte` ou do `mapista`.
- **`<motor>` nesta roupa é a pré-v1 da Régie**, clonada só para leitura (CLAUDE.md, "Peças da pré-v1 em
  uso"), e **não** o `motor.caminho` do `canal.json` (a v0.1.0). Script de `scripts/` que importa do motor
  (`scripts/stock/_commons-cat.mjs`, `scripts/stock/_svg-para-png.mjs`) pede `REGIE_MOTOR=<motor>` na
  mesma chamada; `MOTOR_SEM_ARQUIVO` ou "atualize o motor" quer dizer só que faltou a variável. Nunca
  mexa no motor nem no `canal.json` por causa disso.
- **Gate que pede `sharp` ou `playwright-core` sai NÃO MEDIDO**, com o nome: o `npm install` não foi
  autorizado pelo Lucas. Não simule gate.
- **Nunca** rode `narrar.mjs` nem `transcrever.mjs`: gastam crédito da ElevenLabs e refazem o relógio
  (CLAUDE.md).
- **Site que recusa leitura automática** (403, 405, captcha, verificação de robô, página "Just a
  moment…"): pare nele. Não tente de novo por `curl`, por outro programa, trocando o User-Agent nem
  qualquer outro cabeçalho. Diga no relatório a URL e o que ela respondeu; o Claude central confere no
  navegador do app, com o Lucas vendo (CLAUDE.md, "A marca"; APRENDIZADOS.md, item 14). Se o site é
  **página oficial do Estado do Alasca**, a cópia pública arquivada (web.archive.org) dela **vale como fonte**
  do que a página dizia (Lucas, 27/09/2026; CLAUDE.md, "A marca"), como o nome oficial de um órgão: registre a
  URL da cópia, a original e a data da captura. Ler essa cópia não é contorno. Ela não prova licença de
  bandeira nem de arquivo, que se lê na origem de hoje. A cópia arquivada de outro site não foi perguntada ao
  Lucas e não se usa. O que a cópia não resolve vai ao navegador do app.
- **Quem decide é o Lucas Rosa** (`canal.json › owner`). As leis `[PESQ-NN]` (`seed/regras/PESQ.md`)
  e `knowledge/MIDIA-REAL.md` vieram do Top10: valem como ofício; onde falam de dono, fundo, cor ou
  exemplo, vale esta roupa.

## 1 · O fundo em que a logo entra (identidade.md §2, §5)

O canal tem três fundos, e cada um pede uma variante:

| Modelo | Fundo | Variante |
|---|---|---|
| MAPA, REGISTRO | satélite escurecido, footage ou foto | branca |
| PRANCHA | `--fundo` `#0E1726` (cartão em `--painel` `#172338`) | branca |
| DADO, e a folha de DOCUMENTO | `--papel` `#ECE8DF`, claro (a folha fica sobre `--fundo`, identidade.md §5) | a original, ou a preta |

Quando o espelho não disser o modelo, entregue a original e a branca. A variante é a monocromática do
vetor original; recolorir não é (ofício). Desde 27/09/2026, nenhuma logo de instituição vai à cena (§4), e esta
tabela não tem uso hoje: fica para o dia em que a marca deixar entrar uma.

## 2 · Bandeira (identidade.md §1, §2, §5)

- Na PRANCHA, a bandeira oficial vai **dentro do círculo do ator**: 640 px, traço de 6 px na cor do papel
  dele, nome embaixo. Ícone, em círculo de 160 px.
- Bandeira é asset oficial, **não é fonte de paleta**: não se pinta território com as cores dela.
- **Bandeira ao lado do nome de país fora da PRANCHA** (no MAPA, sobre registro): o ofício do `mapista` e o do
  `editor-de-arte` a pedem; a identidade só a põe dentro do ator da PRANCHA (§5); a cena de teste de
  25/09/2026 pôs CANADA sem bandeira. **DECISÃO DO LUCAS PENDENTE.** Até ele decidir, vale o padrão das roupas
  do `mapista`, do `editor-de-arte` e do `qc-visual`: bandeira ao lado de todo nome de país. Por isso,
  entregue a bandeira de cada país que aparece no mapa ou na cena, mesmo sem pedido no espelho. No Juneau,
  Canadá e Estados Unidos: `assets/flags/ca.png` e `assets/flags/us.png` já existem.
- Para o círculo de 640 px, prefira o SVG oficial do Commons (`Flag_of_<x>.svg`) às PNG de `assets/flags/`
  (a medida delas: CLAUDE.md, tropeços do apoio) e, se a cena pedir raster,
  `scripts/stock/_svg-para-png.mjs <arquivo.svg> <saida.png> --w=<largura>` (pede `REGIE_MOTOR`).
- Estado e província (Alasca, Colúmbia Britânica, Yukon) não estão em `assets/flags/`: Commons, com a
  licença conferida. Entidade histórica leva o símbolo da época dela (ofício).

## 3 · Tamanho

A identidade não tem papel "logo" (§4.1), e desde 27/09/2026 nenhuma logo vai à cena (§4): a altura da logo
em destaque e da logo como selo deixou de ser pergunta. Para a bandeira: vetor (SVG) sempre que existir, porque
escala sem perda; raster, na maior resolução disponível, com a medida no relatório. A medida sai do `ffprobe`
(`identify` e `medir-imagem` não servem aqui; CLAUDE.md, "Os especialistas"). SVG não precisa dela.

## 4 · Logo de qualquer instituição, e o selo do Estado: só o nome escrito

**Regra** (midia.md §7.6): logo de jornal ou veículo de imprensa (ex.: Anchorage Daily News, KTOO), logo de
órgão do Estado do Alasca (ex.: Alaska Division of Elections, Alaska DOT&PF, Alaska Marine Highway) e o selo do
Estado (Lucas, 26/09/2026: "Só o nome escrito"), e logo de órgão federal (ex.: FHWA, os tribunais federais, o
Federal Register) e de outras instituições, públicas ou privadas (ex.: NFL, Dittman Research) (Lucas,
27/09/2026: "Só o nome escrito (Recomendado)"), **não vão à cena**, nem redesenhados. Onde o ofício pede a logo
da entidade, vale esta roupa.
- Vai o **nome da instituição em Inter 700 na pílula `--rotulo`** (`#0B0F14` a 88 %, texto em `--tinta`;
  identidade.md §2, §3, §4.1), nunca numa caixa em `--destaque`, que é a cor do protagonista.
- Você não busca nem entrega logo nem selo. Entrega o nome oficial, como a instituição o escreve, com a URL de
  onde saiu; a linha curta que o explica é a do §5. A bandeira não é logo: segue o §2.

## 5 · A linha que explica a entidade

O público não acompanha geopolítica, e o termo se define na primeira vez (identidade.md §0; voz.md §1).
Para entidade pouco conhecida, sugira ao `redator-de-tela` uma linha curta em inglês, como legenda
(84 px, Inter 500): no formato `<ENTITY> — <what it is, in plain English>`. Ex., tirado do roteiro do
Juneau: `Alaska Marine Highway — the state ferry system`.

## 6 · O que o canal não põe na cena

Logo do próprio canal. O canto inferior direito de 400 × 400 px fica livre para a marca-d'água do
YouTube (identidade.md §4.2; `marca/tokens.css`), e nenhuma logo de terceiro cai ali nem na faixa abaixo
de y = 1880.

## 7 · Decisões do Lucas que tocam o ofício

- **Sem título de capítulo na tela**; capítulo só na descrição (CLAUDE.md). Logo para card de capítulo
  é engano: devolva ao `montador`.
- **Os últimos 20 s não têm voz**: são da tela final do YouTube (`canal.json › narracao.cauda_tela_final_s`).
- **Mapa = MapTiler**, com `© MapTiler © OpenStreetMap contributors` na tela durante todo o mapa
  (`canal.json › mapa.perfil`; identidade.md §6). Isso é do `mapista`; você não pede tile, e o gasto de
  pedidos na MapTiler ainda não foi liberado: nenhum quadro ou render de mapa sem o ok do Lucas.
- **Banco pago** (midia.md §1, §2): só para B-roll genérico, baixado na conta do Lucas, pela caça no Chrome dele que ele aprova item por item
  (§2.3, §8). Logo não é B-roll genérico e não sai de banco; você não baixa nem
  abre o site de banco.

## 8 · Os portões, e a quem devolver

```
node scripts/validar-contrato.mjs pauta-pesquisa out/<proj>/_pesquisa/pauta-logos.json
REGIE_MOTOR=<motor> node scripts/stock/_commons-cat.mjs "Category:<logos of X>" --json=<arquivo.json>
REGIE_MOTOR=<motor> node scripts/qc-procedencia.mjs <proj>
```

- O `_commons-cat` usa o `contato` do `canal.json` no User-Agent. O `qc-procedencia` e o
  `scripts/procedencia-reconciliar.mjs` pedem `REGIE_MOTOR`.
- **A logo e a bandeira que você entrega passam pelo `conferente-de-midia`**
  (`.claude/agents/conferente-de-midia.md`, do canal; ofício dele, §2) antes de uma cena citá-las, em qualquer
  passo: também a bandeira que o `editor-de-arte` pede no `art`. O ofício grava direto em `out/<proj>/_media/logo/`,
  sem rascunho, e a cena só cita o arquivo com `aprovado` no veredito que casa com o sha256 dele. As bandeiras de
  `assets/flags/` ficam fora do conferente. A ordem, entrega → conferente → cena:
  1. entregue e registre na pauta, como o ofício manda: fonte, URL e licença. A sua resposta lista os arquivos
     entregues;
  2. o Claude central despacha o conferente no fluxo `midia` sobre eles. O veredito fica em
     `out/<proj>/_pesquisa/conferencia-midia.json`. Ele olha o SVG por uma cópia em PNG, feita pelo
     `_svg-para-png` (ofício dele, §4);
  3. num despacho novo, você retira o `reprovado` e o `trocar`. Leia o veredito no disco: o relato não vale. O
     `pendente_lucas` fica onde está, fora da cena, até o Lucas responder e o conferente regravar o veredito.
     - Mova o arquivo para `out/<proj>/_media/_caca/_retirado/logo/`, nunca o apague.
     - Reconcilie quem o cita (ofício do `pesquisa-imagens`, §3.6): a linha da pauta aponta o substituto ou
       diz `FALTA — <pedido>`.
  - O `trocar` volta com o que faltou (`trocar_por`), e a busca nova passa de novo pelo conferente. O
    `reprovado` com `reconferir` espera a conferência no navegador do app, com o Lucas vendo.
  - O `aprovado` dele não dispensa a sua validação (ofício §4).
  - O `regie advance` do `research` só se faz sem `reprovado` nem `trocar` em arquivo que continua em
    `_media/logo/`, e sem arquivo sem veredito (CLAUDE.md, "Os especialistas").
- Não há ledger de insumos nem seção "A ESCADA" neste canal. A devolução é a **última linha da sua
  resposta**: a cena, o degrau em que você parou e quem decide agora — `montador` (o que entra e onde),
  `regente-de-imagem` (o que a frase exige da tela) e `diretor-de-arte` (se mexe no arco). Nem logo de
  instituição nem o selo vão ao Lucas: a regra já é o nome escrito (§4; midia.md §7.6). A troca de modo é o
  nome da instituição na tipografia do canal, nunca uma logo redesenhada.
