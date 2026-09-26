> **[porte Regie]** Origem: `top10-estudio/knowledge/DICIONARIO.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# DICIONÁRIO ÚNICO DO ESTÚDIO TOP10

> **O que este documento é.** A lista fechada das palavras com que o sistema fala consigo mesmo, e a
> declaração de **quem é o dono de cada uma**. Um termo, um dono, uma definição. Quando dois arquivos
> usam a mesma palavra com significados diferentes, este documento diz **qual vence** — e aponta o
> arquivo e a linha onde o perdedor ainda vive, para quem for consertar não ter de procurar.
>
> **Por que ele existe.** Em 04–05/ago/2026 o estúdio pagou três vezes pelo mesmo defeito: um
> `words.json` descrevia um vídeo que não existia mais e nenhum agente notou porque cada um assumia um
> relógio diferente ([SIS-100]); um gate reprovou o espelho por declarar `relogio:"master"` quando ele
> só conhece `"bruto"|"limpo"` — a mesma coisa, nomes diferentes; e o contador de leis, cego a um dos
> três formatos de cabeçalho em uso, deixou duas máquinas escreverem leis com números que já existiam.
> Nenhum desses é um erro de código. Os três são **um erro de vocabulário**, e vocabulário não tem gate.
>
> **Regra de ouro deste arquivo:** *se você precisou abrir dois arquivos para descobrir o que uma
> palavra significa, o defeito é aqui, não lá.*
>
> **Precedência.** Este documento não revoga lei. Onde ele e uma lei de `seed/regras/<DOM>.md`
> discordarem, **a lei vence e este arquivo está desatualizado** — conserte-o. Onde ele e um comentário
> de código discordarem, **este documento vence** e o comentário entra na tabela de contradições (§8).
>
> Última medição integral: **05/ago/2026**. Tudo abaixo com `arquivo:linha` foi conferido no disco
> nesta data. `out/` muda todo dia; as contagens de produção são ponto no tempo, marcadas como tal.

---

## 1 · OS TRÊS RELÓGIOS

Esta é a seção mais importante do documento, porque a confusão entre relógios é a única classe de
defeito da casa que **não faz barulho**: comparar tempos de relógios diferentes devolve sempre um
número plausível entre 0 e 1, nunca uma exceção ([FIN-42], `seed/regras/FIN.md:785-800`).

Os nomes canônicos são os da **[SIS-100]** (`seed/regras/SIS.md:2915-2918`), que é a lei mais nova do
domínio e por isso vence a [FIN-53] (`seed/regras/FIN.md:1303`, enum `bruto|limpo|final`).

| Nome canônico | O que é, fisicamente | Onde vive | Sinônimos **PROIBIDOS** |
|---|---|---|---|
| **`BRUTO`** | A gravação como saiu da câmera, antes de qualquer corte. Existe só na rota de edição do zero. **Morre na decupagem e não deve sobreviver a ela.** | `_media/C00XX.MP4` + `MONO.wav`; `words.json` da rota-zero; os campos `ini`/`fim` de `_cortes.json` | `orig`, `src`, `raw` |
| **`MASTER`** | O material já cortado — o que o ripple de `_cortes.json` deixou. **É o relógio do `words.json` vigente e o único que o espelho deve usar.** | `_media/_master-decupado.mp4`; `inSec`/`dur` do `espelho.json`; `_finalizacao-config.json` | **`limpo`** · **`final`** · `clean` · `edit` |
| **`TIMELINE`** | O que o dono assiste: composto e XML = MASTER **mais** os gaps abertos pelos cards de título. | `-POS.xml`; `_blocos.json` (`tlIni`/`tlFim`); o vídeo composto | **`final`** · **`limpo`** · `pos` |

### 1.1 · A regra de conversão, e quem tem o direito de fazê-la

**BRUTO → MASTER** tem **dono único e obrigatório**: `mapSecFactory(cortes)` em `src/cortes.mjs:189`.
A inversa é `mapSecInversoFactory(cortes, duracaoBruto)` em `src/cortes.mjs:273`. A inversa **não pode**
ser aproximada por iteração: `src/cortes.mjs:266-271` documenta que a versão iterativa errava 10 s na
metade do `planetas-algodao-doce`, porque a função de ripple é constante dentro de cada corte.

> **Refazer essa conta à mão é proibido, e a proibição já é lei** — [FIN-44],
> `seed/regras/FIN.md:899-901`: *"use SEMPRE o `mapSecFactory`… recalcular a conversão por conta
> própria 'porque é simples' é exatamente como o bug renasce."* Hoje há **quatro** violações vivas,
> listadas em §8-C.

**MASTER → TIMELINE não tem dono.** É o buraco mais caro do sistema hoje: existem **três**
implementações independentes, e duas delas discordam por construção sobre o tamanho do gap.

| Implementação | Arquivo:linha | Unidade | Tamanho do gap que assume |
|---|---|---|---|
| A (XML) | `scripts/xml-premiere-5camadas.mjs:459-478` | frames | a **duração real de cada card** (`:437`: *"o gap era fixo em 3 s, e card nenhum mede 3 s"*)  **[porte Regie: não veio — `xml-premiere-5camadas.mjs`]** |
| B (trilha) | `src/trilha-plano.mjs:61` (`paraFinal`) | segundos | **3 s fixos** (`:56`) |
| C (mapa) | `scripts/mapa-limpo.mjs:76-81` (`masterParaTl`) | frames→s | **não calcula** — lê os `in`/`out` do V1 do XML entregue |

**C é a única derivada da entrega real** e por isso é a que este dicionário declara correta enquanto
não houver módulo único. A ferramenta de leitura é `scripts/mapa-limpo.mjs` — cujo **nome pertence ao
dialeto morto** ("limpo"); ele é o único arquivo do repositório que já fala os três nomes certos
(`scripts/mapa-limpo.mjs:10-14`).

### 1.2 · O campo `relogio`: como se declara

A [SIS-100] parte 2 é explícita: *"todo derivado de tempo carrega de qual relógio ele fala e de qual
arquivo-fonte foi derivado."* O campo se chama **`relogio`** e o valor é **exatamente uma** das três
palavras MAIÚSCULAS acima. Nada de prosa.

Hoje o campo é escrito em **três formatos incompatíveis**, o que o torna inconsumível por comparação
direta — medido no disco em 05/ago:

| Formato encontrado | Quem escreve | Ocorrências em `out/` |
|---|---|---|
| `"relogio": "BRUTO"` (enum maiúsculo — **o certo**) | `src/trilha-plano.mjs:40` | 8 |
| `"relogio": "LIMPO (pós-ripple de _cortes.json) — o mesmo do composto"` (prosa livre) | `scripts/finalizacao-config.mjs:174` | 3  **[porte Regie: não veio — `finalizacao-config.mjs`]** |
| `"relogio": "bruto"` (enum minúsculo) | `scripts/qc-espelho-fala.mjs:236` | 2  **[porte Regie: não veio — `qc-espelho-fala.mjs`]** |

Zero artefatos dizem `MASTER` ou `TIMELINE`. Zero artefatos do relógio 3 carregam carimbo algum.

### 1.3 · As armadilhas de nome que já custaram dinheiro

- **`words-limpo.json` NÃO está em relógio limpo.** Ele é limpo *de palavras cortadas*, não *de
  relógio*: seus timestamps continuam em **BRUTO**. Está escrito no cabeçalho do gerador
  (`scripts/decupagem/aplicar-cortes.mjs:11-12`) e é a raiz da [FIN-42] **[porte Regie: não veio — `decupagem/aplicar-cortes.mjs`]**
  (`seed/regras/FIN.md:788-800`), que entregou 11 piscadas do apresentador no vídeo porque comparou
  instante MASTER com palavra BRUTO e recebeu de volta uma fração plausível.
- **`TIMELINE` já nomeia o relógio 2 em código.** `src/cortes.mjs:186` documenta `mapSecFactory` como
  *"converte tempo-BRUTO para tempo-TIMELINE (depois dos cortes)"* — isso é o relógio **2**, enquanto a
  [SIS-100] chama de TIMELINE o relógio **3**. É a colisão mais perigosa do sistema, porque as duas
  leituras são defensáveis lendo só um arquivo.
- **`relogio` tem um quinto uso, que não é relógio de edição.** `scripts/decupagem/master-decupado.mjs:35` **[porte Regie: não veio — `decupagem/master-decupado.mjs`]**
  usa o mesmo nome de campo para o eixo de sincronismo dual-system (`"mic"` | `"video"`). Renomear para
  `eixoSync`.
- **`_trilha-plano.json` admite um quarto nome, `FINAL`.** `scripts/finalizacao-config.mjs:99-105` e **[porte Regie: não veio — `finalizacao-config.mjs`]**
  `scripts/trilha/escolher.mjs:175`. `FINAL` = `TIMELINE`. Aposentar. **[porte Regie: não veio — `trilha/escolher.mjs`]**

---

## 2 · OS ENUMS FECHADOS

Enum fechado significa: **o valor que não está na lista é erro, não é criatividade**. Cada um abaixo
tem exatamente um arquivo dono. Acrescentar valor é editar o dono e só depois o resto.

### 2.1 · `modo` — o regime visual de abertura de uma cena

**Dono: `contratos/espelho.schema.json:41-58`** (16 valores). Escrito pelo **montador**, no
`espelho.json`. Lido por ~20 gates, pelo `src/modos.mjs` (que resolve a régua de arte) e — em um único
ponto — pelo gerador de XML.

`dados` · `mapa` · `mapa3d` · `drone` · `desenho` · `footage` · `cinematico` · `foto` · `citacao` ·
`documento` · `split` · `split-footage` · `titulo-topico` · `navegacao` · `apresentador` · `nenhum`

**O que `modo` significa exatamente:** é a **família** de modelos do catálogo, e é o **regime de
abertura** da cena — não a natureza dela do começo ao fim ([ARTE-107], `seed/regras/ARTE.md:2073`).
Uma cena que abre em footage e vira desenho no meio declara `modo:"footage"` e narra a virada em prosa.
**Não existe o valor `hibrido`** (§8-D).

**Campo irmão `modelo`** (`contratos/espelho.schema.json:63`): o **código exato** `M01`–`M26`, opcional,
para quando o montador sabe qual membro da família é. Regra de precedência: `src/modos.mjs:189-195` —
se `modelo` existe e resolve, ele **vence** `modo` na hora de escolher a régua de arte. **Ninguém valida
a coerência entre os dois**, e o preço está medido em §8-E.

**Sinônimos PROIBIDOS de `modo`:**

| Proibido | Onde ainda vive | O correto |
|---|---|---|
| `M03`, `M07`… (código como valor de `modo`) | `out/compilado-previsoes-jiang/espelho.json` (100% das 75 cenas); leitor em `scripts/compilado/estado-producao.mjs:24,52` | `modo:"mapa"` + `modelo:"M03"`  **[porte Regie: não veio — `compilado/estado-producao.mjs`]** |
| `hibrido` | `out/paises-baixos-mar/espelho.json:486` e `:1812` | o modo de **abertura** + prosa da virada |
| `infografico` | `scripts/qc-tamanho.mjs:73` (entrada morta num gate vivo) | `dados` |
| `mapa2d` | (não existe no repo — registrado para não nascer) | `mapa` |
| `titulo`, `card-titulo` | proibido explicitamente em `contratos/espelho.schema.json:59` (colide com o campo `titulo`) | `titulo-topico` |
| `apresentador-composite` | é valor de `format` do `project.json`, nunca de `modo` | `apresentador` |
| `imagem`, `reportagem-antiga` | `contratos/decupagem.schema.json:27` — **outro contrato, outro campo** (§2.7) | `foto` / `documento` |

### 2.2 · `midia` — a natureza do insumo de uma cena

**Dono: `contratos/espelho.schema.json:78-86`.** Quatro valores: `animacao` · `footage` · `foto` ·
`drone`. Escrito pelo montador; lido por `scripts/qc-midia-real.mjs:57`,
`scripts/qc-espelho-midia.mjs:112`, `scripts/qc-deserto-real.mjs:94`, `src/manifest.mjs:37`.

**Proibidos:** `construída` (3 ocorrências em `out/paises-baixos-mar/espelho.json:426,532,1998` — é
vocabulário do `midia_ancora` do diretor-de-arte, `.claude/agents/diretor-de-arte.md:292`, vazando para
o campo errado) e `mapa` (1 ocorrência, `:555`).

**`needs.midia` é a grafia canônica; `needs.media` é legado aceito** — os dois campos existem no schema
(`contratos/espelho.schema.json:140-149`) porque o texto da [PESQ-16] ficou em inglês enquanto o disco
escrevia em português. Escreva `midia`. Consertar a grafia em `seed/regras/PESQ.md` aposenta o outro.

### 2.3 · `classe` — por que um trecho saiu do bruto

**Dono: `src/cortes.mjs:48-56`**, exportado como `CLASSES` e congelado. Este é o **único enum do
sistema que já está certo**: tem dono único, é importado em vez de copiado
(`scripts/decupagem/aplicar-cortes.mjs:32`) e o próprio módulo valida quem foge dele (`:107-108`). **[porte Regie: não veio — `decupagem/aplicar-cortes.mjs`]**
Use-o como modelo de como os outros devem ficar.

| Valor | O que é | Ripple |
|---|---|---|
| `silencio` | respiro/silêncio morto — peso morto puro | corta |
| `erro` | errou e refez sem graça; mic-check, claquete, off-script | corta |
| `retake` | falso-início e take abortado (vale a **última completa**) | corta |
| `riso-leve` | riu de si mesmo em assunto leve → **PRESERVA em P&B** ([FIN-28]) | **não corta** |
| `riso-serio` | riu, mas o assunto é sério | corta |
| `titulo` | leitura de título de tópico = fronteira estrutural ([FIN-17]) | corta, e **vira gap de card** |
| `outro` | classificado à mão, fora das anteriores; a prosa do `motivo` explica | corta |

Escrito pelo **decupador** (`.claude/agents/decupador.md:600-613`). Regras que andam junto: `riso-leve`
implica `manter:true` + `tratamento:"pb"`; span de classe `titulo` leva `"gapSec"`; e — armadilha viva —
**span `titulo` precisa também ter a palavra "título" na prosa do `motivo`**, porque dois consumidores
ainda detectam a fronteira por regex na prosa em vez de chamar `eTitulo` (§8-B).

`motivo` (prosa livre, para o humano) e `classe` (vocabulário fechado, para a máquina) são **o mesmo
fato em duas línguas** e ambos são obrigatórios: `src/cortes.mjs:14-20`.

⚠️ **A palavra `classe` está sobrecarregada em cinco sentidos** no repositório. Só o de cima é "classe
de corte". Os outros quatro são legítimos, mas precisam de nome próprio quando o texto for ambíguo:
`classe` de **pendência** (`scripts/orquestrador/nucleo.mjs:39-43`, allowlist/blocklist de decisão **[porte Regie: não veio — `orquestrador/nucleo.mjs`]**
autônoma), `classe` de **projeto pendente** (`scripts/estudio/levantar-pendentes.mjs:50-55`: **[porte Regie: não veio — `estudio/levantar-pendentes.mjs`]**
`bruto+pre`/`so-bruto`/`pre-parcial`/`so-pre`/`midia-solta`/`sem-midia`), `classe` de **carga**
(`scripts/estudio/regulador.mjs:178`: `render`/`agente`/`total`) e `classe` de **silêncio** **[porte Regie: não veio — `estudio/regulador.mjs`]**
(`scripts/ingestao/derivar-silencios.mjs:41`). **[porte Regie: não veio — `ingestao/derivar-silencios.mjs`]**

### 2.4 · `estacao` — onde um projeto está na linha

**Dono: `scripts/estudio/fila.mjs:36-81`** — as tabelas `RECURSO` (que máquina/modelo cada estação **[porte Regie: não veio — `estudio/fila.mjs`]**
consome) e `PROXIMA` (a ordem real). É o dono porque **é o que roda**: o despachante despacha por essa
lista (`scripts/estudio/despachante.mjs:223-355`) e uma estação sem `.md` correspondente em **[porte Regie: não veio — `estudio/despachante.mjs`]**
`scripts/estudio/estacoes/` simplesmente nunca é executada (`despachante.mjs:1037-1038`).

As **12** estações do motor, na ordem real:

`ingestao` → `decupagem` → `pesquisa` → `direcao-arte` → `regencia` → `arte` → `qc` → `render` →
`trilha` → `finalizacao` → `aprovacao` (e `espelho` → `pesquisa`, para a rota pré-editada).

`contratos/pipeline.json` **não é o dono** — ele se autodeclara "a composição da linha de produção,
declarada uma vez" (`:2`) e está três estações atrás da realidade: não conhece `direcao-arte`,
`regencia` nem `trilha`. Enquanto não for reconciliado, é documentação, não contrato.

**Sinônimos PROIBIDOS:** `direcao` (`scripts/estudio/situacao.mjs:80`, `scripts/estudio/painel.mjs:271`) **[porte Regie: não veio — `estudio/situacao.mjs`; `estudio/painel.mjs`]**
→ use `direcao-arte`. `roteiro` (`situacao.mjs:80`) e `roteirizacao` (`painel.mjs:271`) são a mesma
estação com dois nomes → use **`roteirizacao`**. `entregue` (`despachante.mjs:950`,
`scripts/estudio/montar-fila-real.mjs:156`) **não é estação**, é status → use **[porte Regie: não veio — `estudio/montar-fila-real.mjs`]**
`estacao:"finalizacao"` + `status:"concluido"`.

**A numeração das estações é proibida em texto novo.** Ela diverge em três fontes (QC é 6 em
`knowledge/README.md:16` e 7 em `contratos/pipeline.json:154`; Finalização é 9 em
`knowledge/README.md:19` e `bin/top10:715`, e 10 em `pipeline.json:213`) e não serve para nada que o
nome não sirva melhor. **Cite estações pelo nome.**

### 2.5 · `status` — cinco máquinas de estado que não são a mesma

Este é o termo mais sobrecarregado do sistema. **`status` sozinho não quer dizer nada**; sempre diga
`status da fila`, `status da entrega`, etc.

**(a) `status` da fila de produção** — dono: `scripts/estudio/fila.mjs:4` (hoje um comentário; deveria **[porte Regie: não veio — `estudio/fila.mjs`]**
ser uma constante exportada, como `CLASSES`).
`pendente` · `rodando` · `bloqueado` · `aguardando_aprovacao` · `concluido`.
Escrito por `scripts/estudio/despachante.mjs:644,662,698,1109` e `scripts/estudio/auto-aprovar.mjs:159`; **[porte Regie: não veio — `estudio/despachante.mjs`; `estudio/auto-aprovar.mjs`]**
lido por `despachante.mjs:939,1029`, `scripts/estudio/vigia.mjs:239,265`, `auto-aprovar.mjs:123`. **[porte Regie: não veio — `estudio/vigia.mjs`]**
⚠️ **`pausado`** aparece documentado em `db/schema.sql:374` e **não é escrito nem lido por ninguém** —
ou implementa, ou some.

**(b) `estado` da fila de roteirização** — dono: `scripts/roteirizacao/fila.mjs:7` (`ESTADOS`, esse sim **[porte Regie: não veio — `roteirizacao/fila.mjs`]**
exportado). `roteirizando` · `roteirizado` · `enviado` · `aguardando_gravacao` · `gravacao_entregue` ·
`em_edicao`. **O campo se chama `estado`, não `status`** — 35 de 35 linhas do JSONL confirmam. Não
uniformize sem migrar os dados.

**(c) `status` da entrega** — dono: `db/schema.sql:144` (é o único com `CHECK` real no banco).
`entregue` → `postado` → `arquivado`. Escrito por `scripts/entregar.mjs:551` (fluxo normal, default **[porte Regie: não veio — `entregar.mjs`]**
`entregue`) e `:100-101` (rota `--registrar`, default `postado`). ⚠️ `arquivado` está no enum e no
CHECK e **nenhuma flag do CLI o produz** (`entregar.mjs:19,80`).
Campo irmão **`statusFonte`**: `confirmado` | `presumido` (`entregar.mjs:101`), que responde *"como
sabemos que está postado?"* — o índice marca o presumido com `⁽ᵖ⁾` (`entregar.mjs:73-74`).

**(d) `status` de atividade no banco** — `db/schema.sql:358-359`: `rodando` · `esperando-humano` ·
`travado` · `concluido`. **Descreve o mesmo estado que (a) com palavras diferentes e sem tradutor**:
`esperando-humano` é `aguardando_aprovacao`, `travado` é `bloqueado`. Adotar o vocabulário de (a).

**(e) `estado` de pauta** — `db/schema.sql:24-26`, 11 valores, um terceiro eixo de progresso
(`sugerida`…`arquivada`). Legítimo: fala do assunto, não do projeto.

### 2.6 · Vereditos de QC — quatro enums, quatro objetos julgados

**São 14 lentes**, não 9. Dono do enum: **`contratos/laudo-qc.schema.json:40-55`** —
`espaco` `factual` `wordlock` `abordagem` `acessibilidade` `poluicao` `motion` `fonte` `tema`
`cobertura` `cadencia` `autoria` `camadas` `circulo`. Rubrica em `knowledge/qc/lentes.md`. Nota por
lente = inteiro 0–10, piso 7; a lente `camadas` **nunca reprova** (`knowledge/qc/lentes.md:166`).

O número "9" sobrevive em 13 documentos, inclusive nos dois mais lidos (`CLAUDE.md:17,39` e
`knowledge/README.md:16,57,64`) e no `contratos/pipeline.json:177`. Ele descreve o estado de julho.

| Objeto julgado | Enum | Dono |
|---|---|---|
| cena (bancada de 14 lentes) | `aprovado: true` \| `false`, mais `resolvido` + `motivo` | `contratos/laudo-qc.schema.json:12-23` |
| finalização / composto | topo `PASS` \| `FAIL`; item `PASS` \| `FAIL` \| `NA` | `contratos/laudo-finalizacao.schema.json:13,25` |
| achado do revisor autônomo | peso `CORRIGIR` \| `NOTA`; veredito de cena `APROVAR` \| `REPROVAR` \| `INDEFINIDO` | `scripts/revisar-no-lugar-do-mateus.mjs:177,230`  **[porte Regie: não veio — `revisar-no-lugar-do-mateus.mjs`]** |
| roteiro (bancada de 7 lentes) | `APROVADO` \| `APROVADO COM RESSALVAS` \| `REPROVADO` | `marcas/top10/agentes/critico-de-roteiro.md:295-310` |

⚠️ **`AVISO` não é veredito de achado.** O par é `CORRIGIR`/`NOTA`. `AVISO` é rótulo de severidade de
gate determinístico (`scripts/validar-contrato.mjs:5`, `scripts/qc-tamanho.mjs:68`) e
`marcas/top10/agentes/qa-montagem.md:292` avisa que avisos "nunca são vereditos herdados". `CLAUDE.md:52`
sugere o contrário.

⚠️ **As 14 lentes do QC visual e as 7 do crítico de roteiro são bancadas diferentes.** Não misture; o
`knowledge/README.md:57` cita as duas na mesma frase, com o número errado numa delas.

⚠️ **`ok:true|false|null`** é uma terceira forma, viva em `scripts/qc-cena.mjs:190`, onde **`null`
significa "não sei"** — informação real que o booleano perde. O coalescedor
`scripts/estudio/auto-aprovar.mjs:59-69` testa **seis** formas diferentes antes de decidir se um laudo **[porte Regie: não veio — `estudio/auto-aprovar.mjs`]**
aprovou: é a prova viva de que esses enums nunca convergiram.

### 2.7 · Os enums da decupagem de vídeo pré-editado

**Dono: `contratos/decupagem.schema.json`.** Este contrato descreve **planos** (o que a equipe já
montou), não **cenas** (o que nós vamos desenhar) — por isso tem vocabulário próprio, e isso é
legítimo. O que não é legítimo é ninguém traduzir na fronteira.

- `tipo` (`:27`): `?` · `apresentador` · `footage` · `imagem` · `reportagem-antiga` · `vazio`.
- `qualidade` (`:32`): `boa` · `fraca` · `generica` · `null`.
- `veredito` (`:42`): `manter` · `trocar` · `recompor` · `converter` · `null`. **`adicionar` não existe
  aqui** — é decisão do espelho, para buracos entre planos.

**A tradução obrigatória, que hoje ninguém implementa:** `imagem` → `foto`, `reportagem-antiga` →
`documento`. Ver §8-F.

---

## 3 · OS ARTEFATOS — um nome, um caminho, um dono

| Artefato | Caminho canônico | Quem escreve | Quem lê | Nomes proibidos |
|---|---|---|---|---|
| **espelho** | `out/<proj>/espelho.json` | `montador` | quase todo mundo | `plano-roteirista.json` (legado, leitura aceita) |
| **lista de cortes** | `out/<proj>/_cortes.json` | `decupador` | `src/cortes.mjs` (dono da leitura) | `out/<proj>/_decupagem/_cortes.json` — **legado, e divergência entre as duas é ERRO, não escolha** (`src/cortes.mjs:146-154`) |
| **transcrição** | `out/<proj>/words.json` | `src/transcribe.mjs` (Scribe v2) | montador, regente, gates | — |
| **fala pós-corte** | `out/<proj>/words-limpo.json` | `scripts/decupagem/aplicar-cortes.mjs` | gates de fala | ⚠️ nome mente: os tempos são **BRUTO** (§1.3)  **[porte Regie: não veio — `decupagem/aplicar-cortes.mjs`]** |
| **master decupado** | `out/<proj>/_media/_master-decupado.mp4` | `scripts/decupagem/master-decupado.mjs` | render, composto, XML | "o master" sem qualificador  **[porte Regie: não veio — `decupagem/master-decupado.mjs`]** |
| **conceito visual** | `out/<proj>/conceito-visual.json` | `diretor-de-arte` | `editor-de-arte` | — |
| **regência** | `out/<proj>/regencia.json` | `regente-de-imagem` | pesquisa, `editor-de-arte` | — |
| **cena (fonte)** | `out/<proj>/graphics/<id>.html` | `editor-de-arte` / `mapista` | render, galeria, QC | **[porte Regie]** (no Top10: nunca baixar a pasta inteira do bucket; aqui não há bucket) |
| **clipe (artefato)** | `out/<proj>/graphics/<id>-4k.mp4` | `render-one.sh` | composto, XML | — |
| **portão de render** | `out/<proj>/_portao.json` | `scripts/qc-cena.mjs:366` | `scripts/_render-4k-loop.sh` | é o **único** gate determinístico que barra render |
| **composto** | o MP4 4K montado sem Premiere | `scripts/compor-base-youtube.mjs` + `scripts/finalizar-youtube.mjs` | entrega dos **idiomas** | ⚠️ **não é a entrega PT-BR** desde a [FIN-45] (§8-A)  **[porte Regie: não veio — `compor-base-youtube.mjs`; `finalizar-youtube.mjs`]** |
| **XML de 5 camadas** | `entregas/<ano>/<slug>/xml/…-POS.xml` | `src/timeline-xml.mjs` + `scripts/xml-premiere-5camadas.mjs` | Premiere (o Mateus) | —  **[porte Regie: não veio — `xml-premiere-5camadas.mjs`]** |
| **entrega** | **[porte Regie]** a pasta de entrega do canal (`canal.json → midia.entrega`); no Top10, `gs://…/entregas/<ano>/<slug>/` | `scripts/entregar.mjs` | tudo que pergunta "já foi ao ar?" | `out/<slug>/` **não** é entrega — é WIP  **[porte Regie: não veio — `entregar.mjs`]** |
| **manifesto da entrega** | `entregas/<ano>/<slug>/ENTREGA.json` | `scripts/entregar.mjs:551` | índice, galeria, banco | é a **fonte de verdade** do status de publicação  **[porte Regie: não veio — `entregar.mjs`]** |
| **índice de entregas** | `out/_ENTREGAS.md` | `entregar.mjs --index` | humanos | **GERADO — nunca editar à mão** |
| **laudo de cena** | `out/<proj>/qc/<id>.laudo.json` | `qc-visual` | `scripts/qc-laudo.mjs`, `auto-aprovar.mjs` | — |
| **laudo de finalização** | `out/<proj>/qc/finalizacao.laudo.json` | `qa-montagem` | `entregar.mjs` (cobra, [FIN-13]) | — |

**`segmentos` é o nome do array de cenas no espelho** (`contratos/espelho.schema.json`), e também o
nome do array de **planos** na decupagem — porque são objetos diferentes em contratos diferentes. Ao
escrever prosa, diga **cena** (o que desenhamos) e **plano** (o que a equipe cortou). Sete leitores
diferentes aceitam `segmentos || cenas || scenes || clips` como sinônimos
(`scripts/serve-galeria.mjs:110,124`, `scripts/qc-laudo.mjs:64`, `scripts/qc-deserto-real.mjs:81`,
`scripts/cena-orfa.mjs:29`, `scripts/compor-base-youtube.mjs:138`) — tolerância de leitura, nunca **[porte Regie: não veio — `cena-orfa.mjs`; `compor-base-youtube.mjs`]**
licença de escrita. **Escreva `segmentos`.**

**`proj` e `slug` são a mesma coisa**: o identificador em minúsculas-com-hífen da produção, que é o
nome da pasta em `out/` e o nome da pasta em `entregas/<ano>/`. `proj` é o nome do parâmetro nos
scripts, `slug` é o nome do campo nos JSONL. Não introduza um terceiro.

---

## 4 · OS PAPÉIS — quem decide o quê

**Vocabulário estrutural:** *agente julga; ferramenta executa.* Um **especialista** é um
`.claude/agents/*.md` com contrato de entrada e saída; uma **ferramenta** é determinística e sem LLM.
A **sessão** que orquestra é o **editor-chefe**.

| Papel canônico | Modelo | Faz | Nomes antigos **proibidos** |
|---|---|---|---|
| **editor-chefe** | Opus 5 | orquestra, decide, delega, processa aprovação | "a sessão", "coordenador" |
| **roteirista-narracao** | Opus 5 | escreve o roteiro que o Bôco lê (estação 0) | — |
| **pesquisador-de-pauta** | Opus 5 | o dossiê de fundamento, antes do roteiro | — |
| **critico-de-roteiro** | Opus 5 | bancada de **7** lentes sobre o roteiro pronto | — |
| **decupador** | Opus 5 | corta o bruto → `_cortes.json` + master decupado | — |
| **montador** | Opus 5 | decide cena a cena → `espelho.json` | **"roteirista"** (é outra pessoa!) |
| **diretor-de-arte** | Fable 5 | o arco visual do vídeo → `conceito-visual.json` | — |
| **regente-de-imagem** | Opus 5 | decupagem visual da fala → `regencia.json` | — |
| **editor-de-arte** | Fable 5 | a arte final de cada cena (HTML) | "Diretor" |
| **executor-de-molde** | — | as cenas que têm template pronto | — |
| **mapista** | herda a sessão | `mapa` (2D) e `mapa3d` | — |
| **qc-visual** | Opus 5 | bancada de **14** lentes → laudo | "painel de críticos" |
| **qa-montagem** | Opus 5 | gate visual da finalização | — |
| **pesquisa-*** (imagens/dados/geo/logos/pessoas/documentos) | Opus 5 | mídia real citável | `curador-midia`, `cacador-*`, `citador-*` |
| **tecnico-stock** | Opus 5 | conserta a automação de stock; **nunca compra** | `corretor-stock` |

⚠️ **Cada agente existe em DUAS cópias**: `.claude/agents/<nome>.md` (34 arquivos) e
`marcas/top10/agentes/<nome>.md` (33 arquivos). Elas **não são idênticas** e já discordam entre si —
`marcas/top10/agentes/montador.md:42-58` lista 13 modos e omite `titulo-topico`, `navegacao` e
`split-footage`, enquanto `.claude/agents/montador.md:443` delega ao schema sem listar. Um assunto, um
dono: enquanto essa duplicação existir, **o schema vence os dois**.

---

## 5 · A NUMERAÇÃO DAS LEIS

**Onde as leis moram:** `seed/regras/<DOM>.md`, um arquivo por domínio —
`ROT` · `ARTE` · `REND` · `PESQ` · `FIN` · `SIS`. **471 leis vivas** em 05/ago/2026.
`seed/regras/_TODAS.md` é **gerado** e nunca se edita. `seed/aprendizado.md` é **índice**, tem zero
definições de lei desde 22/jul, e `seed/DE-PARA-LEIS.md` é a ponte para citações da numeração antiga.

**Regra de precedência:** dentro do mesmo prefixo, **o NN maior (mais novo) vence**.

### 5.1 · O formato único

**Formato canônico de definição de lei — use este, só este, em lei nova:**

```
### DOM-NN · TÍTULO EM UMA LINHA (data)
```

Três hashes, o ID, um `·` como separador, e o título **na mesma linha**. Motivo: é a única forma que
**todos os oito** parsers hoje espalhados pelo repositório reconhecem. As três variantes vivas que
quebram alguém:

| Variante | Onde | Quem fica cego |
|---|---|---|
| `## DOM-NN — título` (9 leis, ex.: `seed/regras/SIS.md:2881`) | SIS-96…102, FIN-74, REND-63 | `scripts/doutrina/mapa-execucao.mjs:132`  **[porte Regie: não veio — `doutrina/mapa-execucao.mjs`]** |
| `### DOM-NN` com o título na **linha seguinte** (3 leis: `seed/regras/ARTE.md:2289`, `seed/regras/REND.md:1633,1659`) | ARTE-113, REND-64, REND-65 | `scripts/doctor.mjs:233`  **[porte Regie: não veio — `doctor.mjs`]** |
| `**DOM-NN.**` (264 leis — formato **antigo**, válido por herança) | quase tudo antes de 03/ago | `mapa-execucao.mjs` parcialmente |
| definição **indentada** com 3 espaços (`seed/regras/REND.md:169,218,256`, `seed/regras/FIN.md:182`) | REND-10/12/14, FIN-11 | o **contador** as conta como buraco; o `doctor` as conta como lei |

⚠️ **Nunca intitule uma emenda com o ID da lei que ela emenda** — o parser lê como uma segunda
definição e a geração quebra. Já aconteceu duas vezes, e os dois comentários de cicatriz estão em
`seed/regras/SIS.md:2785` e `seed/regras/FIN.md:2021`.

### 5.2 · Onde mora o contador, e como se pede um número

**[porte Regie]** O contador do Top10 (`regras-todas.mjs`) e o índice `seed/regras/_TODAS.md` não vieram. **O protocolo
obrigatório para escrever lei nova neste canal** (a [SIS-62]: *"o ID é pedido, não reservado"*):

1. `git pull` — a colisão nasce quando duas máquinas escolhem o mesmo número sem se ver;
2. ache o maior ID do domínio com a busca do Claude Code (Grep) em `seed/regras/<DOM>.md` — no CORPO e no APÊNDICE
   `[porte Regie]` das filtradas (SIS, REND): ID cortado no porte continua ocupado. **Antes** de escolher o número;
3. escreva em `seed/regras/<DOM>.md`, no formato de §5.1, com o `maior + 1`;
4. commit do arquivo do domínio.

**[porte Regie]** (medição do Top10, velha — não use) Medição de 05/ago/2026 — **próximo livre real:**
`ROT-80` · `ARTE-114` · `REND-66` · `PESQ-39` · `FIN-87` · `SIS-103`.

⚠️ **Números envenenados, nunca reusar:** **FIN-65** e **FIN-80** são citados como leis vigentes em
`seed/regras/FIN.md:1872,2214,2217,2230` e **não têm corpo em lugar nenhum**. **SIS-40** está reservada
por escrito em `seed/regras/SIS.md:759`.

⚠️ **Não confie no índice de `seed/aprendizado.md:55-62`** — em 05/ago ele estava de 1 a 9 IDs atrás em
quatro dos seis domínios. Quem somasse 1 ali escolheria ARTE-113, REND-64, FIN-78 e SIS-101: quatro
colisões instantâneas. **A contagem é derivada; pergunte ao contador, não ao índice.**

---

## 6 · OS VERBOS

O CLI é `bin/top10`. Os verbos da linha de produção:

`roteirizar` · `ingerir` · `decupar` · `espelhar` · `pesquisar` · `arte` · `qc` · `render` · `aprovar` ·
`finalizar` · `entregar-tudo` · `publicar` · `aprender`

E os transversais: `pautar` · `pautas` · `cronograma` · `orquestrar` · `trilha` · `branding` ·
`coletar` · `acervo` · `estudio` · `compilar` · `db` · `doctor` · `status` · `feedback` · `timeline` ·
`baixar` · `internacional` · `atendimento` · `shopping`.

**Estações do motor sem verbo no CLI:** `direcao-arte` e `regencia`. Elas só rodam pelo despachante.
Isso é um buraco de superfície, não de vocabulário — registrado para não virar "essa estação não existe".

---

## 7 · TERMOS DE OFÍCIO (motion design e montagem)

Vocabulário do modo `desenho` / M02, a referência sendo Kurzgesagt:

**motion design** — o ofício de animar elementos gráficos para explicar; é o nome próprio das
"animações desenho". · **flat design / vetorial** — o estilo. · **transição contínua** (*seamless*) — a
câmera se move e os elementos se reconstroem virando a próxima explicação sem parecer troca de cena; é
o padrão ([ARTE-40]). · **plano-sequência** (*oner*) — um HTML cobrindo 3–4 falas. · **morphing** — um
elemento vira o próximo em vez de apagar-e-desenhar. · **match cut** — corte disfarçado por composição
casada. · **hard cut** — corte seco deliberado, reservado às viradas de ato. · **showpiece** — as 3–5
cenas-pico de um vídeo ([ARTE-39]).

E os da montagem: **ripple** — remover um trecho e puxar tudo que vem depois para trás (é o que
`_cortes.json` faz). · **keep** — cada pedaço do bruto que sobrevive ao ripple
(`src/cortes.mjs:206`). · **gap de card** — o vão de ~3 s aberto na TIMELINE por um card de título
não-narrado. · **word-lock** — o texto na tela casar com a palavra exata da narração naquele instante.

---

## 8 · A TABELA DE CONTRADIÇÕES ACHADAS

Cada linha é um defeito real, medido em 05/ago/2026, com os dois lados localizados. **Nenhuma foi
consertada por este documento** — a aplicação vem depois, em ordem.

### A · "Entregável" quer dizer duas coisas opostas

| | |
|---|---|
| **Lado 1** | *A entrega PT-BR é o **composto** 4K H.264 ≥25 Mbps.* — `CLAUDE.md:8`, `knowledge/README.md:19` (ambos citando [FIN-34]) |
| **Lado 2** | *PT-BR sai por **XML de 5 camadas**; o composto é opt-in e é a rota dos **dublados**.* — `scripts/finalizar.mjs:61-76` (citando [FIN-45], 31/jul)  **[porte Regie: não veio — `finalizar.mjs`, no canal: `node <motor>/src/ferramentas/finalizar.mjs`]** |
| **Vence** | **Lado 2.** FIN-45 > FIN-34 no mesmo domínio, e o código já implementa a decisão nova. |
| **Custo do erro** | O comentário em `finalizar.mjs:66-71` mede: cada entrega PT-BR pagava **um encode 4K inteiro** no caminho crítico para produzir algo que não era a entrega. `senna` e `lago-peigneur` ficaram parados atrás disso. |

### B · `titulo` como fronteira de corte: enum × regex na prosa

| | |
|---|---|
| **Lado 1** | `eTitulo` = `classeDe(c) === "titulo"` — o dono, `src/cortes.mjs:73` (*"dono único do teste — era regex copiada em 3 arquivos"*) |
| **Lado 2** | `const eTitulo = (c) => /t[íi]tulo/i.test(c.motivo \|\| "")` — reimplementado, **sombreando o import**, em `scripts/qc-espelho-fala.mjs:65` e `scripts/doctor.mjs:494`  **[porte Regie: não veio — `qc-espelho-fala.mjs`; `doctor.mjs`]** |
| **Vence** | **Lado 1.** |
| **Custo do erro** | Span com `classe:"titulo"` cujo motivo não contém a palavra "título" vira achado `dentro-de-corte` falso (`qc-espelho-fala.mjs:256-258`). E enquanto os dois não migrarem, o decupador é obrigado a escrever a palavra na prosa — obrigação hoje documentada como armadilha em `scripts/decupagem/aplicar-cortes.mjs:111-117`.  **[porte Regie: não veio — `decupagem/aplicar-cortes.mjs`]** |

### C · O ripple recalculado à mão, contra a [FIN-44]

| Onde | O que faz de errado |
|---|---|
| `scripts/compor-base-youtube.mjs:111-119` | reimplementa `mapSec` inteiro e **não é equivalente**: `src/cortes.mjs:193` devolve `null` dentro do corte; `:115` faz `shift += (t - c.ini)`, que "gruda" no início. Mesmo insumo, saídas diferentes.  **[porte Regie: não veio — `compor-base-youtube.mjs`]** |
| `scripts/realinhar-espelho.mjs:87-96` | conversão por subtração inline (`:90`, `:96`), sem tocar em `_cortes.json` nem em `mapSecFactory`. **É esta aritmética não-canônica que carimba `relogio:"master"` em `:119`.**  **[porte Regie: não veio — `realinhar-espelho.mjs`]** |
| `scripts/finalizacao-config.mjs:55-60` × `scripts/xml-premiere-5camadas.mjs:290-296` | duas políticas divergentes para "instante caiu dentro de um corte": recuar 1 ms × varrer para trás de 50 ms em 50 ms.  **[porte Regie: não veio — `finalizacao-config.mjs`; `xml-premiere-5camadas.mjs`]** |
| `scripts/mapa-limpo.mjs:70-75` × `scripts/realinhar-espelho.mjs:42-46` | `tlParaMaster` duplicada literalmente, sem import.  **[porte Regie: não veio — `realinhar-espelho.mjs`]** |
| **Vence** | `src/cortes.mjs` — sempre, sem exceção. |

### D · O gate do relógio recusa o nome que a lei prescreve

| | |
|---|---|
| **Lado 1** | [SIS-100] (`seed/regras/SIS.md:2915-2917`): o espelho está em **`MASTER`**; `BRUTO` "morre na decupagem e não deve sobreviver a ela". |
| **Lado 2** | `scripts/qc-espelho-fala.mjs:210-211` conhece **dois** valores, `"limpo"` e `"bruto"`, hardcoded; `:243-244` compara string crua sem tabela de sinônimos; `:223` grita *"O ESPELHO ESTÁ EM TEMPO-LIMPO, e o pipeline inteiro espera tempo-BRUTO"* e sai com `exit 1`; e `:229-239` oferece `--para-bruto`, que **desfaz** o carimbo `master` e escreve `relogio:"bruto"`.  **[porte Regie: não veio — `qc-espelho-fala.mjs`]** |
| **Lado 3** | `contratos/espelho.schema.json:7` tem `additionalProperties:false` e **não declara `relogio`** — o validador acusa *"propriedade não prevista"*, que vira **ERRO** sob `--estrito` (`scripts/validar-contrato.mjs:63`). A única brecha hoje é o `patternProperties: "^_"` de `:8-10`, que aceita qualquer campo iniciado por underscore como *anotação interna do montador* — ou seja, `_relogio` passa e `relogio` não. Isso é exatamente o contrário do que a lei quer: o relógio é **vocabulário do contrato**, não nota de margem. |
| **Vence** | **A lei.** O nome é `MASTER`; o schema precisa aceitar `relogio`; o gate precisa aprender os três nomes. |
| **Custo do erro** | Hoje **o único estado conforme aos dois gates é não declarar relógio nenhum** — que é exatamente a condição que produziu a [SIS-100]. Prova no disco: `out/paises-baixos-mar/espelho.json.antes-mapista-20260804:2125` diz `"master"`; o arquivo vigente `:2125` diz `"bruto"`; e `out/planetas-algodao-doce/espelho.json:1333` tem indentação de 1 espaço, a assinatura de `JSON.stringify(j, null, 1)` do `--para-bruto`. Os outros 18 espelhos não declaram nada. |

### E · `modo` e `modelo` incoerentes ~~sem ninguém conferindo~~ — **RESOLVIDO em 05/ago/2026**

| | |
|---|---|
| **Fato** | `src/modos.mjs:190-192` é o único leitor de `modelo`, e ele **prefere** `modelo` a `modo`. Quando os dois discordam, o `modo` é descartado **em silêncio**. |
| **Era** | **29 pares incoerentes**, dominados por **16 cenas `modo:"titulo-topico"` + `modelo:"M26"`** — porque `titulo-topico` era o único valor do enum sem linha no catálogo, e a produção resolveu o buraco por conta própria. |
| **Decisão tomada** | O catálogo ganhou a linha: **`titulo-topico` entrou na família do M26**, junto de `navegacao`. Foi a opção não-destrutiva das duas — a alternativa (tirar `titulo-topico` do enum) obrigaria a reescrever 32 cenas em 6 projetos. E não foi invenção de doutrina: a própria especificação do M26 já dizia que *"o card de título de tópico usa o MESMO template"*, e 16 cenas já declaravam `modelo:"M26"` sozinhas. **Reversível numa célula de tabela**, se o dono preferir o caminho oposto. |
| **Agora** | **13 pares incoerentes** (de 374 cenas com `modelo` = 3,5%), e eles deixaram de ser invisíveis: `scripts/qc-modo-regua.mjs` os **ALERTA** por cena, com a família esperada. Alerta e não veredito porque alguns pares são defensáveis (`foto`+M06 é citação de pessoa, que de fato leva foto real) — reprovar 3,5% de casos discutíveis é como se ensina a ignorar um gate.  **[porte Regie: não veio — `qc-modo-regua.mjs`, sem substituto: a régua 4K deste canal é `regua/<Mxx>/` (leia `regua/LEIA-ME.md`), e o `qc-espelho-modelo.mjs` confere modelo × modo]** |
| **Sobra** | M26 continua com **régua ausente** (zero exemplar em `seed/examples/dourados/M26/`), embora o template exista em `templates-cena/navegacao/`. Conserto proposto, fora do escopo de quem escreveu isto: um `LEIA.md` na pasta do M26 apontando o template — o estado "delegada" que o gate já sabe distinguir de dívida. |

### F · A fronteira decupagem→espelho não tem tradutor

| | |
|---|---|
| **Lado 1** | `contratos/decupagem.schema.json:27` — `tipo` inclui `imagem` e `reportagem-antiga`. |
| **Lado 2** | `contratos/espelho.schema.json:41-58` — `modo` conhece `foto` e `documento`, e **não** conhece os outros dois. |
| **Vence** | Ambos, cada um no seu contrato — o defeito é a **ausência da tradução**, não a existência dos dois vocabulários. Nenhum código faz o mapeamento; ele hoje acontece na cabeça do montador. |

### G · A doutrina que só existe no arquivo gerado

| | |
|---|---|
| **Medido** | `git show HEAD:seed/regras/_TODAS.md` **contém** ROT-79 e REND-65; `git show HEAD:seed/regras/ROT.md` e `…REND.md` **não contêm** nenhum dos dois. Doze leis (ROT-69…79, REND-65) existem no remoto **só dentro do arquivo gerado**. |
| **Consequência** | A próxima regeneração feita noutro clone apaga as doze. É a reincidência literal do que `seed/regras/SIS.md:1651` já registrou: *"doutrina que só existe no arquivo GERADO morre na próxima reinstalação — pela segunda vez."* |
| **Conserto** | Commitar `seed/regras/ROT.md` e `seed/regras/REND.md` (estão modificados e não commitados no working tree). |

### H · Oito parsers para "o que é uma lei", três discordando agora

| Cópia | Arquivo:linha | Estado |
|---|---|---|
| contador | `scripts/regras-todas.mjs:66` | **correto**, exceto para definições indentadas  **[porte Regie: não veio — `regras-todas.mjs`, sem substituto: não há `_TODAS.md`; ache o maior ID com a busca do Claude Code (Grep) em `seed/regras/<DOM>.md`]** |
| doctor (bold) | `scripts/doctor.mjs:225` | **não ancorado** — qualquer citação em negrito vira "definição"  **[porte Regie: não veio — `doctor.mjs`]** |
| doctor (título) | `scripts/doctor.mjs:233` | **cego** para `### DOM-NN` com título na linha seguinte → ARTE-113, REND-64, REND-65 são "inexistentes"  **[porte Regie: não veio — `doctor.mjs`]** |
| mapa de execução | `scripts/doutrina/mapa-execucao.mjs:132` | **cego** para as 9 leis `## DOM-NN —`; nunca foi corrigido  **[porte Regie: não veio — `doutrina/mapa-execucao.mjs`]** |
| baseline | `testes/baseline.mjs:228` | só o estilo bold |
| qc doutrina VM | `scripts/qc-doutrina-vm.mjs:157` | só bold → lei em `###` nunca é reconhecida como "superada"  **[porte Regie: não veio — `qc-doutrina-vm.mjs`]** |
| doctor (isenções) | `scripts/doctor.mjs:88`, `:166`, `:168` | só bold  **[porte Regie: não veio — `doctor.mjs`]** |

O próprio código já escreveu o diagnóstico e a receita, e previu a reincidência três vezes seguidas:
`scripts/doctor.mjs:215` (*"esta foi a TERCEIRA cópia da mesma cegueira"*), `:220-221` (*"enquanto **[porte Regie: não veio — `doctor.mjs`]**
estiver [em três arquivos], uma quarta cópia vai nascer com a mesma cegueira"*), `:227` (*"A QUARTA
CÓPIA NASCEU, exatamente como o comentário acima previu"*) e `:232` — **a receita**: *"O lugar certo é
um módulo só, que os três importem."*

**Bomba armada:** hoje ninguém cita ARTE-113/REND-64/REND-65 fora de `seed/regras/`, então o `doctor`
passa por sorte. **Na primeira citação, ele dispara `lei-inexistente` contra uma lei viva** — o alarme
falso que o próprio `doctor.mjs:218-219` classifica como "pior que verificação nenhuma".

### I · Correção pública de uma premissa desta investigação

O briefing desta tarefa afirmava que **ARTE-106, ARTE-107, ARTE-108 e REND-63 existiam em duas versões
incompatíveis**. **Isso não se confirmou, e eu preciso dizer isso em voz alta**: cada uma tem
exatamente **uma** definição em `seed/regras/<DOM>.md` e um **eco** em `seed/regras/_TODAS.md`, que é
arquivo **gerado**. O `diff` do corpo inteiro (ARTE.md:2023-2072 × _TODAS.md:3460-3509 e
REND.md:1603-1640 × _TODAS.md:5352-5389) devolve **zero linhas divergentes**, e `git log --all -S`
mostra origem única no commit `31da7e0`.

A colisão real de números **existiu e foi resolvida**: **REND-53, REND-54, SIS-76 e SIS-77** estavam
duplicados no commit `c445327` e foram renumerados sob a [SIS-62]; as lápides estão em
`seed/regras/REND.md:1359,1405` e `seed/regras/SIS.md:2077,2113`. O histórico registra **16**
renumerações por colisão Mac × VM. A cegueira do contador é real, o mecanismo de colisão é real, e o
risco continua de pé — mas os quatro IDs citados não estão duplicados hoje.

### J · Contagens que envelheceram e hoje enganam

| Afirmação | Onde | Realidade medida |
|---|---|---|
| contagem de lentes do QC visual escrita à mão | espalhada pela doutrina | derive de `knowledge/qc/lentes.md` (subseções `## N ·`); o gate `contagem-errada` do `top10 doctor` enumera onde ainda está errada |
| "9 estações" / "11 estações" / 15 no contrato | `CLAUDE.md:14` · `knowledge/README.md:7` · `contratos/pipeline.json` | **12** no motor (`scripts/estudio/fila.mjs:36-81`)  **[porte Regie: não veio — `estudio/fila.mjs`]** |
| censo de agentes escrito à mão | espalhado pela doutrina | derive de `.claude/agents/*.md`; o gate `contagem-errada` do `top10 doctor` enumera onde ainda está errado |
| filtro do despachante "só pega `pendente`" | `CLAUDE.md:60` | falso desde o conserto: `scripts/estudio/despachante.mjs:1029` aceita os dois  **[porte Regie: não veio — `estudio/despachante.mjs`]** |
| `despachante.mjs:489` e `:692` carimbam/filtram aprovação | `CLAUDE.md:59-60`; e o próprio `despachante.mjs:1008` cita `:489/:541` | ambas as citações estão **mortas** — hoje o carimbo está em `:644`, `:698`, `:961` e os filtros em `:939`, `:1029` |
| `src/modos.mjs`: "schema tem 15 valores, catálogo tem 12 famílias" | `src/modos.mjs:51-52,160-163` · `scripts/qc-modo-regua.mjs:21-22` · `seed/regras/ARTE.md:1229-1235` | **16 e 13**  **[porte Regie: não veio — `qc-modo-regua.mjs`, sem substituto: a régua 4K deste canal é `regua/<Mxx>/` (leia `regua/LEIA-ME.md`), e o `qc-espelho-modelo.mjs` confere modelo × modo]** |

**A regra por trás desta seção inteira:** número copiado à mão apodrece. Onde dá para derivar do estado
real, derive; onde não dá, date a medição. Toda contagem acima devia ser gerada.

---

## 9 · COMO SE ACRESCENTA UM TERMO

1. **Um assunto, um dono, um lugar.** Se o termo é um enum, ele nasce como **constante exportada** no
   arquivo dono — como `src/cortes.mjs:48`, não como comentário (`scripts/estudio/fila.mjs:4`) nem como **[porte Regie: não veio — `estudio/fila.mjs`]**
   lista repetida em cada consumidor.
2. **Quem consome importa; ninguém redigita.** Cada cópia de uma lista é uma divergência marcada para
   acontecer — §8-H é a prova em oito exemplares.
3. **Registre aqui o sinônimo proibido junto com o termo.** O sinônimo é a parte útil: quem lê o texto
   velho precisa saber que ele está velho.
4. **Regra sem verificação automática é regra morta.** Todo enum deste documento devia ter um gate que
   o cheque, e o gate precisa ser **chamado** por alguém. Hoje só `modo` (via
   `scripts/validar-contrato.mjs`, executado em `bin/top10:109` — e o comentário de `:100-104`
   registra que, antes de o CLI *executar* o validador, **1 de 6 contratos era validado de fato**) e
   `classe` (via `scripts/decupagem/aplicar-cortes.mjs:107`) têm isso. **[porte Regie: não veio — `decupagem/aplicar-cortes.mjs`]**
5. **O mais recente vence, e o antigo fica marcado.** Ao superar um termo, não apague o antigo: mova-o
   para a coluna "proibido", com o arquivo e a linha onde ele ainda vive.

> **Termo que não está neste dicionário: ou entra aqui, ou o texto que o usa está errado.**
