<!-- Roupa do Alpha Point para o pesquisa-dados. Escrita em 26/09/2026, na instalação dos especialistas da
     pré-v1 da Régie. Molde de formato: template/marca/agentes/pesquisa-dados.md da pré-v1 (commit 7ab9543),
     que é a roupa do Canal Top10 — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do canal:
     marca/identidade.md, marca/voz.md, marca/tokens.css, canal.json, CLAUDE.md, pautas/<proj>/…, roteiros/<proj>/…
     Onde o canal ainda não decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE" e o que se faz até lá. -->

# ROUPA ALPHA POINT — pesquisa-dados

> Só o que é do canal. O ofício (hierarquia de fontes, recusa de inventar número, conferir o que a
> narração afirma, `_dados/<cena>.json`) está em `.claude/agents/pesquisa-dados.md` e não se discute
> aqui. Marca ativa: `marca/identidade.md`, `marca/voz.md`, `marca/midia.md`.

## 0 · O canal, em uma tela (vale para todo especialista)

- **Faceless.** Ninguém fala para a câmera (identidade.md §0). O master é a narração sobre tela preta
  3840×2160, e 100 % do tempo é coberto por cena (identidade.md §5). Há um relógio só,
  `out/<proj>/words.json`. Ele traz, por construção, as palavras do texto aprovado (a cópia para a voz,
  `out/<proj>/roteiro.md`) com os tempos. O que a voz disse diferente (palavra pulada ou trocada) está em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo`. O que a narração afirma = o `words.json` mais
  essas divergências. Como o `words.json` se faz: CLAUDE.md, "Peças da pré-v1 em uso", item 3.
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
  formato brasileiro (`QUASE 3.000×`, `≈2.700×`, `28,0×`, `R$ 2 bi`, "Fonte:"): **não se copiam**.
- **Vocabulário de máquina não se traduz:** as chaves do `_dados/<cena>.json` (`valores`, `unidade`,
  `fonte`, `dataDoDado`, `dataConsulta`, `legenda`, `nota`, `texto_para_tela`), enums, `data-qc-*`,
  `NÃO MEDIDO`, `NÃO ENCONTRADO` (CLAUDE.md, "O vídeo fala inglês").
- **Cena HTML**, se alguma entrega sua virar uma: `<html lang="en-US" data-render="4k-native">`, ligando
  `marca/tokens.css` (CLAUDE.md). A cena de DADO é do `editor-de-arte`.
- **`<motor>` nesta roupa é a pré-v1 da Régie**, clonada só para leitura (CLAUDE.md, "Peças da pré-v1 em
  uso"), e **não** o `motor.caminho` do `canal.json` (a v0.1.0). Script que importa do motor
  (`src/agent/dados-biblioteca.mjs`, `src/agent/data-tools.mjs`, parte de `scripts/`) pede
  `REGIE_MOTOR=<motor>` na mesma chamada. `MOTOR_SEM_ARQUIVO`, "atualize o motor" ou uma pilha com exit 1
  querem dizer só que faltou a variável (CLAUDE.md, "Os especialistas"), não reprovação. Nunca mexa no
  motor nem no `canal.json` por causa disso.
- **Gate que pede `sharp` ou `playwright-core` roda desde 01/10/2026**: o Lucas autorizou o npm (CLAUDE.md, "Os
  portões medem"), com `REGIE_MOTOR` na mesma chamada. Gate que sai exit 2 com o alvo certo é NÃO MEDIDO, pelo nome. Não simule gate.
- **Nunca** rode `narrar.mjs` nem `transcrever.mjs`: gastam crédito da ElevenLabs e refazem o relógio
  (CLAUDE.md).
- **Site que recusa leitura automática** (403, 405, captcha, verificação de robô, página "Just a
  moment…"): pare nele. Não tente de novo por `curl`, por outro programa, trocando o User-Agent nem
  qualquer outro cabeçalho. Diga no relatório a URL e o que ela respondeu; o Claude central confere no
  navegador do app, com o Lucas vendo (CLAUDE.md, "A marca"; APRENDIZADOS.md, item 14). Já aconteceu com
  as duas fontes de número mais usadas no Juneau: o `akleg.gov` deu 403, e o `elections.alaska.gov` pediu
  verificação humana (`roteiros/juneau/volateis-conferidos.md`). A cópia pública arquivada (web.archive.org)
  de **página oficial do Estado do Alasca** que recusou robô, como essas duas, **vale como fonte** (Lucas,
  27/09/2026; CLAUDE.md, "A marca"): leia-a antes, e registre a URL da cópia, a original e a data da captura; o
  crédito na tela é o do órgão, nunca o arquivo. Ler essa cópia não é contorno. O dossiê do Juneau leu as
  eleições assim em 23/09, e elas valem (a data de cada captura está em `url_acessada`, no
  `pautas/juneau/fundamento.json`). A cópia prova o número na data da captura: o volátil, que muda, continua
  pedindo a leitura de hoje. A cópia arquivada de outro site (federal, jornal, empresa) não foi perguntada ao
  Lucas e não se usa. O que a cópia não resolve vai ao navegador do app.
- **Quem decide é o Lucas Rosa** (`canal.json › owner`), inclusive a divergência de número (§5). As leis
  `[PESQ-NN]` (`seed/regras/PESQ.md`) e `knowledge/MIDIA-REAL.md` vieram do Top10: valem como ofício; onde
  falam de dono, formato ou exemplo, vale esta roupa.

## 1 · Antes de buscar: a pauta já tem os números

O canal não tem `out/<proj>/pauta-fundamento.json`. O equivalente:
- `pautas/<proj>/fundamento.json` › `numeros` (com `valor`, `unidade`, `escopo`, `data_base`, `fonte_id`,
  `formulacao_original`), `divergencias`, `volateis` e `numeros_descartados`; as fontes em `fontes`,
  agrupadas por dimensão;
- `roteiros/<proj>/roteiro-editor.md`: a checagem de cada frase e o que já se decidiu sobre número. Ex.:
  no Juneau, a tela de 1982 usa o boletim oficial, 91,049 × 102,083, e não os 91,249 das listas-resumo;
- `roteiros/<proj>/volateis-conferidos.md`: o que foi reconferido depois da gravação, e onde;
- `midia/<proj>/fontes/`: as cópias locais das fontes.

Reconfira só o volátil. O resto se transcreve para `_dados/<cena>.json` com a fonte e a data que a pauta
já tem.

## 2 · A fonte

- O órgão que **produz** o dado, no lugar do tema (ofício). No Juneau: Alaska Division of Elections
  (boletins oficiais de apuração), Alaska Department of Labor and Workforce Development, Alaska
  Legislature (BASIS), Alaska DOT&PF com a FHWA (`pautas/juneau/fundamento.json`). Número do estudo de 2018
  deles (custo, os 41 corredores de avalanche) vai com `Source: Alaska DOT&PF and FHWA, 2018`: o estudo conta
  como estadual (pesquisado a pedido do Lucas, 26/09/2026; midia.md §7.1, "O estudo de 2018").
- Dado estadual dos EUA vem do órgão que o produz, não de `src/agent/data-tools.mjs` (o que ele cobre:
  CLAUDE.md, tropeços do apoio).
- **Fontes aceitas desde 27/09/2026** (Lucas, 4ª rodada: "Entram (Recomendado)"; identidade.md §6; as licenças
  e os créditos em `marca/acervos/5-dados-e-fronteiras.md`):
  - Banco Mundial WDI (CC BY 4.0, conferida indicador por indicador: a página geral diz "não comercial, salvo
    indicação");
  - Our World in Data (CC BY; o dado de terceiro vale pela licença dele, e o crédito cita os dois);
  - Census, BLS, BEA e EIA (domínio público);
  - Global Carbon Project, GHSL e WorldPop (CC BY 4.0);
  - não servem: ACLED (uso comercial pede licença paga) e o Eurostat para país de fora da Europa (não
    comercial). FMI, OCDE, IEA e ACNUR ficaram não conferidos.

## 3 · Na tela (identidade.md §7; voz.md §1)

- `2,700` · `$2.8 billion` · `$966 million` · `ALMOST 3,000×` · `28.0×`. Unidade imperial primeiro
  (milhas, milhas quadradas, °F); métrico entre parênteses, quando a fonte é métrica: `22.2 ft (6.76 m)`.
  Datas absolutas, nunca "last week". Comparação em escala americana quando couber: `about the size of Texas`.
- Valor em outra moeda: convertido pela cotação da data da fonte, nunca trocando só o símbolo. Correção
  pela inflação, só com decisão escrita; no Juneau, dólares correntes, sem CPI
  (`roteiros/juneau/roteiro-editor.md`).
- **O hedge da voz fica na tela** (`almost 3 million`; voz.md §1), e a tela não afirma mais que a fonte:
  os 57 % de 1974 são dos votos, não "57% of Alaska voters" (`roteiros/juneau/aprovacao.md`).
- `fonte`, `legenda` e `texto_para_tela` vão à tela: em inglês. A `fonte` é o nome da instituição que
  entra no crédito `Source: <institution>, <year>` (identidade.md §7), em 76 px na faixa de crédito. A
  `nota` é da casa: em português.

## 4 · Como o dado aparece (identidade.md §2, §4.1, §5) — para quem desenha

- DADO é gráfico sobre `--papel`: a série do protagonista em `--destaque`, a da contraparte em
  `--contraparte`, do terceiro ator em diante em `--neutro`, e o eixo em `--tinta-escura` a 60 %.
- **Vermelho contra azul como dois lados: proibido** (para o público dos EUA é cor de partido). `--tensao`
  é zona de risco ou perda, nunca a cor de um lado.
- Número-herói 360 px (teto 560, até 5 palavras), rótulo 128, eixo e legenda 84, crédito 76.
- Na `nota`, diga qual série é do protagonista quando o espelho não disser.

## 5 · Quando a narração e a fonte divergem

- O número da narração se lê no `words.json` mais as divergências de `transcricao.json` ›
  `alinhamento.conteudo` (§0), não só no roteiro.
- Os dois números, as duas fontes e o que a fonte sustenta vão no relatório. Não escreva "corrija para
  X": o `texto_para_tela` é sugestão para o `redator-de-tela`, que não deixa a tela contradizer a voz.
- **Quem decide é o Lucas.** A narração está gravada e não muda por isso: regravar um parágrafo refaz o
  master e desloca todas as cenas seguintes (`roteiros/juneau/volateis-conferidos.md`).

## 6 · O acervo de fatos entre vídeos

`assets/dados/` não existe no canal. **DECISÃO DO LUCAS PENDENTE: se o canal guarda fatos verificados entre
vídeos.** Até lá, não grave fato lá, nem pelo `src/agent/dados-biblioteca.mjs`: o número fica por vídeo, em
`out/<proj>/_dados/` e na pauta.

## 7 · Decisões do Lucas que tocam o ofício

- **Sem título de capítulo na tela**; capítulo só na descrição (CLAUDE.md). Pedido de número para card
  de capítulo é engano: devolva ao `montador`.
- **Os últimos 20 s não têm voz**: são da tela final do YouTube (`canal.json › narracao.cauda_tela_final_s`).
  Nenhum dado ali.
- **Mapa = MapTiler** (`canal.json › mapa.perfil`), com `© MapTiler © OpenStreetMap contributors` na tela
  durante todo o mapa. Dado sobre mapa é do `mapista`; você não pede tile, e o gasto na MapTiler espera o
  ok do Lucas.
- **Banco pago** (midia.md §1, §2): só para B-roll genérico, na ordem Envato Elements → Motion Array →
  Storyblocks → Shutterstock, baixado nas contas que o Lucas designou (midia.md §2.3: a assinatura da Top10 na Storyblocks e no Envato), pela caça no Chrome dele que ele aprova item por item
  (§2.3, §8). Dado não sai de banco. Se uma cena sua pedir B-roll genérico, entregue a lista do que procurar
  (termos em inglês, cena, duração, por que é genérico); nunca baixe nem abra o site do banco.
- **Licença.** Tabela ou gráfico de jornal ou de documento do Estado do Alasca não é domínio público
  automático: você entrega os valores, e quem desenha refaz o gráfico na marca do canal, com a fonte citada.
  Mostrar a página original é DOCUMENTO, e só com permissão de uso clara, conferida e gravada na procedência
  (Lucas, 26/09/2026; midia.md §7.1; `pesquisa-documentos`).

## 8 · Os portões, e a quem devolver

```
node scripts/validar-contrato.mjs pauta-pesquisa out/<proj>/_pesquisa/pauta-dados.json
```

- Em lote, a pauta é `pauta-dados-<lote>.json`, para um lote não apagar o outro.
- Não há ledger de insumos nem seção "A ESCADA" neste canal. A devolução é a **última linha da sua
  resposta**: a cena, o degrau em que você parou e quem decide agora — `montador` (o que entra e onde),
  `regente-de-imagem` (o que a frase exige da tela), `diretor-de-arte` (se mexe no arco) e o Lucas, quando
  for divergência de número. A troca de modo mais barata aqui: afirmação sem cifra, proxy rotulado como
  proxy **na tela**, ou cortar a afirmação numérica.
