# Proposta · a linha `long-form-from-scratch`, do tema ao XML

**Para:** Lucas Barrios e Mateus · **De:** canal Alpha Point (dono: Lucas Rosa) · 23/09/2026
**Base:** motor v0.1.0 (`44cf6f7`) e agent-core `e68c8cf`. Nada foi escrito no motor (`git status` limpo, HEAD `44cf6f7`, conferido no fim desta redação).
**Siglas:** RG = `C:\projetos\regie` · AC = `agent-core\agentes` · AP = `C:\projetos\alpha-point` · ES = `Downloads\top10-estudio-analysis`, um clone legível do estúdio antigo (commit `1af7f44`, 17/09/2026).
**Convenção:** o que tem arquivo:linha foi conferido. O que está marcado **Proposta** é decisão minha. "Não achei" é resposta. "Não existe aqui" = não existe em RG, AP nem no agent-core. O ES é tratado à parte: tem quase todas as peças, mas não roda como está (§5).
**Arquivos:** esta proposta e a linha pronta para copiar, `pipeline-long-form-from-scratch.json`, na mesma pasta.

---

## 1 · O problema

- **A Régie começa num master pronto.**
  - O `ingest` "transcreve o master editado" (RG `db/pipeline-long-form.json:7`).
  - O próprio motor diz que não gera vídeo do zero e que só existe a linha `long-form` (RG `CHANGELOG.md:39,43`).
- **O Alpha Point não tem rosto.** O master é a narração sobre tela preta, e 100 % do tempo é coberto por cena (AP `marca/identidade.md:147-149`).
- **Nada produz esse master** (AP `APRENDIZADOS.md`, item 8). O canal já escreveu à mão a ordem que usa: pauta, pesquisa, roteiro, narração, master (AP `CLAUDE.md:66-75`). Além disso, `ingest`, `render` e `finalize` não têm código (item 9).
- **O pedido do dono, literal:**
  > "o Régie não prevê criação de workflow/pipeline do extremo zero (concepção do tema > escolha definida de pauta > criação de roteiro > revisão > gravação do áudio com ElevenLabs > transcrição do áudio com timestamps > plano de cenas pra edição > pesquisadores de footages/documentos/infos para cada cena > edição de cena por cena com HTML > revisão das cenas com “portões” (determinístico ou com LLM, uma bancada de revisores, cada um com uma lente específica, ex: revisão do alinhamento de texto (se tem algum por cima do outro) > revisão da cena se está de acordo com o plano original, etc etc) > montagem do vídeo final em um XML?"

**Resposta curta:**
- **Hoje a Régie não prevê isso.**
- Um arquivo de linha e os ofícios do agent-core fazem a Régie **guardar** a ordem e o histórico desse caminho. **Não fazem a Régie executá-lo.**
  - Dos 25 passos, 10 são estações sem ofício e sem código.
  - Quem faz o trabalho de cada passo continua sendo o Claude, junto com o dono (RG `CHANGELOG.md:39-42`).
- Antes, dois defeitos do `init` precisam de correção. Sem ela, uma atualização de versão apaga a linha nova do canal (§6).

## 2 · A linha numa tela

```
topic_pitch → [topic_pick] → story_research → [topic_approval] → script → script_lint → script_review
  → [script_approval] → voiceover → master → ingest → mirror → conducting → research → art_direction
  → screen_text → requisitions → art → scene_gates → qc → [owner_review] → render → score → finalize
  → assembly_qa ∎
```

- `[ ]` marca os passos `human`, que são aprovações do dono. São 4.
- São **25 passos**: 13 novos e 12 ids reaproveitados da `long-form`, que são todos os dela menos o `cut_detect`.
  - Dos 12 reaproveitados, **8 foram redefinidos** (capacidade, descrição ou arestas): `ingest`, `mirror`, `conducting`, `research`, `art_direction`, `art`, `qc` e `finalize`.
  - **4 ficam iguais:** `screen_text`, `requisitions`, `render` e `score`.
  - `step.id` é chave global, e o `init` faz upsert (`bin/regie:245-248`). Semear esta linha num banco **redefine** os passos da long-form. Por isso vale um banco por linha (§6).
- **61 arestas:** 25 `done`, 11 `retake`, 10 `blocked` e 15 `retake_<passo>`.

| O dono pediu | Passos |
|---|---|
| concepção do tema | `topic_pitch` |
| escolha definida de pauta | `topic_pick` → `story_research` → `topic_approval` |
| criação de roteiro | `script` |
| revisão | `script_lint` → `script_review` → `script_approval` |
| gravação do áudio com ElevenLabs | `voiceover`, mais o `master`, que a linha exige |
| transcrição com timestamps | `ingest` |
| plano de cenas para a edição | `mirror` → `conducting` |
| pesquisadores por cena | `research`, mais `requisitions` |
| edição cena a cena em HTML | `art_direction` → `screen_text` → `art` |
| portões determinísticos e com LLM | `scene_gates` → `qc`, mais `owner_review` |
| montagem em XML | `render` → `score` → `finalize` → `assembly_qa` |

**O formato, e o que a linha segue:**
- **Campos:** os mesmos da `long-form`: `id`, `capacity`, `craft`, `description` e `edges`.
- **`capacity`:** só os 7 valores do glossário (`glossary.mjs:89-97`, iguais a `schema.sql:35`).
- **Saídas:** cada gatilho tem um destino só (`schema.sql:46`). O gatilho é texto livre, sem CHECK (`schema.sql:45`), e não é termo do GLOSSARY. Por isso o número de saídas por passo é escolha desta proposta, não regra do motor.
- **A convenção de gatilhos (Proposta):**

| gatilho | significa | exemplo |
|---|---|---|
| `done` | segue | — |
| `retake` | um portão reprovou; o conserto é do autor do que foi julgado | `qc` → `art` |
| `retake_<passo>` | o defeito foi achado aqui, mas a raiz está em `<passo>` | `qc --retake_mirror-->` quando o modo da cena está errado |
| `blocked` | este passo não consegue trabalhar; o insumo que falta é do destino | `mirror` sem `words.json` com tempo → `ingest` |

- **O que o código faz com isso:**
  - Todo gatilho grava status `pending` no destino, inclusive `blocked` (`state.mjs:43`). `blocked` aqui é **rota**, não o status `blocked` do glossário.
  - O aviso do doctor procura o `retake` literal (`bin/regie:306-313`). `retake_<passo>` e `blocked` não contam.

## 3 · Etapa por etapa

A capacidade vai entre parênteses. **RG** = ofício que já está em `crafts/`. **AC** = ofício a instalar.

| # | Passo | Ofício | Entrada → saída | Quem reprova → para onde volta |
|---|---|---|---|---|
| 1 | `topic_pitch` (judgment) | nenhum. O analista recusa escolher pauta (AC `analista-de-audiencia/CONTRATO.md:74`), e o pesquisador também (`pesquisador-de-pauta/SPEC.md:48-49`) | nicho e catálogo → temas candidatos, cada um com a pergunta central | ninguém; quem escolhe é o dono no passo 2 |
| 2 | `topic_pick` (**human**) | — | candidatos → UM `topic`. O pesquisador recebe um tema só, "preservado literalmente" (`pesquisador-de-pauta/CONTRATO.md:9`) | o dono. `retake` → `topic_pitch` |
| 3 | `story_research` (judgment) | `pesquisador-de-pauta` (AC) | `topic`, `catalog_snapshot`, brief e `freshness_policy` (CONTRATO:7-14) → `pauta-fundamento` v2 e a declaração de vazio (CONTRATO:21-31; SPEC:64-65) | não reprova: entrega o vazio. O gate `qc-placar-dossie` (SPEC:70) não existe aqui. Sem saída de reprovação, e o doctor avisa |
| 4 | `topic_approval` (**human**) | — | dossiê e lacunas → pauta aprovada | o dono. `retake` → `story_research` (mais fundamento) · `retake_topic_pitch` → `topic_pitch` (outra pauta) |
| 5 | `script` (judgment) | `roteirista-narracao` (AC) | ledger, `production_flags` e brief (CONTRATO:7-17) → primeiro o plan, depois as sections com `claim_usages` (:26-38) | bloqueia quando falta pesquisa (CONTRATO:19-20) → `blocked` → `story_research` |
| 6 | `script_lint` (cpu) | — (sem runner, §5) | projeções do roteiro → PASS/FAIL de estrutura, afirmações extraídas e faixa de palavras | `retake` → `script`. O roteiro reprovado aqui não chega à bancada (`critico-de-roteiro/CONTRATO.md:15-16`) |
| 7 | `script_review` (judgment) | `critico-de-roteiro` no `craft`, mais `critico-de-clareza`, `verificador-de-fatos` e `critico-de-locucao`. Os quatro são AC | `roteiro-<persona>.md`, `roteiro-editor.md`, `roteiro.json` e a rubrica (critico-de-roteiro CONTRATO:20-26), mais `pauta-fundamento.json` (verificador CONTRATO:12) → 4 laudos. O `bancada.veredito` é consolidado pelo `bancada-roteiro.sh` (verificador SPEC:78; critico SPEC:77), que não existe aqui | `retake` → `script` ("devolva pro roteirista", CONTRATO:63-64) · fonte do dossiê errada → `retake_story_research` (**Proposta**: o roteirista não pesquisa, OFICIO:23-25) |
| 8 | `script_approval` (**human**) | — | roteiro e laudos → roteiro congelado | o dono. `retake` → `script`. O veredito "informa a decisão humana" (critico-de-roteiro CONTRATO:62) |
| 9 | `voiceover` (external) | nenhum. O `tradutor-de-narracao` "não sintetiza voz" (CONTRATO:74) | texto do apresentador, uma projeção do runtime (roteirista CONTRATO:46) → narração por seção e recibo (**Proposta**) | a produção volta para cá vinda do `master` e do `ingest` |
| 10 | `master` (cpu) | — | narração → master no formato da marca. No Alpha: preto 3840×2160 (identidade.md:148). Sai também o `_cortes.json` (**Proposta**) | a conferência com ffprobe falha (sem faixa de áudio, duração errada) → `blocked` → `voiceover` |
| 11 | `ingest` (cpu) | — | alinhamento da narração e master → `words.json`, conferido contra uma transcrição independente | o dono confirma uma divergência → `retake` → `voiceover` (**Proposta**, §5) |
| 12 | `mirror` (judgment) | `montador` (RG) | `words.json` e `roteiro-editor.md`, que "MANDA" quando existe (CONTRATO:15; "a fala já limpa, no fluxo do zero", :18-20) → `espelho.json` | bloqueia sem `words.json` com tempo, ou com o de outro áudio (CONTRATO:189-196) → `blocked` → `ingest` |
| 13 | `conducting` (judgment) | `regente-de-imagem` (RG) | espelho e words, ambos obrigatórios, e `conceito-visual`, opcional (CONTRATO:10-12) → `regencia.json` | espelho incompleto; a duração e o corte da cena são do montador (OFICIO:169-170) → `blocked` → `mirror` (**Proposta**) |
| 14 | `research` (judgment) | `pesquisa-imagens` (RG) no `craft`, mais `pesquisa-dados`, `-documentos`, `-geo`, `-logos` e `-pessoas` (AC) | espelho, words e os beats imprescindíveis (regente CONTRATO:98) → um `_pesquisa/pauta-<tipo>.json` por caçador | "NÃO ENCONTRADO" é entrega válida, e mudar a abordagem é com o montador → `blocked` → `mirror` · a fonte não confirma a narração (pesquisa-dados CONTRATO:49-50; pesquisa-documentos CONTRATO:64-66) → `retake_script`, **só com decisão do dono** (§5 Narração) |
| 15 | `art_direction` (visual_craft) | `diretor-de-arte` (RG) | espelho, words e shards (CONTRATO:22-35) → `conceito-visual.json` | "Plano incompleto/ausente, ou `words.json` faltando → reporte" (CONTRATO:171-173) → `blocked` → `mirror` · a regência contradiz o arco → `retake_conducting` (**Proposta**, ver "Três mudanças") |
| 16 | `screen_text` (judgment) | `redator-de-tela` (RG) | espelho e words → `textos-tela.json` (CONTRATO:64) | o CONTRATO não tem seção de bloqueio (seções 1 a 5). Sem saída de reprovação, e o doctor avisa |
| 17 | `requisitions` (judgment) | — | uma linha por necessidade → atendida, ou dispensada com motivo | `blocked` → `research` (igual à long-form:22) |
| 18 | `art` (visual_craft) | `editor-de-arte` (RG) no `craft`. O `mapista` (AC) pega as cenas `mapa`/`mapa3d` (mapista SPEC:31; editor OFICIO:372) | a saída dos passos 12 a 17 → `graphics/<id>.html` | falta mídia, geometria ou dado (editor CONTRATO:242-246) → `blocked` → `research` · "o `modo` marcado contradiz o que a narração pede" (:247) → `retake_mirror` |
| 19 | `scene_gates` (cpu) | — (sem runner, §5) | HTML, espelho e regência → um resultado por gate (qc-visual CONTRATO:99-108) | qualquer gate reprovado → `retake` → `art` |
| 20 | `qc` (judgment) | `qc-visual` (RG) | frames, resultado dos gates e regência → `qc/<cena>.laudo.json`. Aprova com todas as lentes ≥7 e nenhum gate duro (CONTRATO:68-69) | `retake` → `art` · lente 4, modo errado ("Diga qual deveria ser", OFICIO:141-144) → `retake_mirror` · lente 11, pedido de mídia por cena e não por plano (OFICIO:260-262) → `retake_conducting` · falta mídia ou ela quebrou no frame (CONTRATO:172-173,180-181) → `blocked` → `research` |
| 21 | `owner_review` (**human**) | — | cenas aprovadas no qc → liberadas para o render | o dono. `retake` → `art` · `retake_research` (falta mídia) · `retake_mirror` (crítica contra a tese; revisor-criativo CONTRATO:90-97) · `retake_conducting` |
| 22 | `render` (gpu) | — | HTML aprovado → um clipe 4K, 30fps, all-intra por cena | `retake` → `art` (fora do quadro). O quadro preto se conserta re-renderizando (qa-montagem CONTRATO:148-149), e isso acontece dentro do próprio passo |
| 23 | `score` (judgment) | nenhum: não existe ofício de trilha | → `_trilha-plano.json` | sem saída de reprovação |
| 24 | `finalize` (judgment) | — | peças, master, words e planos → `<proj>-POS.xml` | sem plano de trilha → `blocked` → `score` (**Proposta**). Os planos de cards e de overlays não têm produtor (§5 XML) |
| 25 | `assembly_qa` (judgment) | `qa-montagem` (AC) | XML, peças, `_cortes`, espelho, words, planos e marca (CONTRATO:28-34) → `qc/finalizacao.laudo.json` | cada item volta à raiz que o próprio ofício nomeia (CONTRATO:244-258). Detalhe logo abaixo da tabela |

**Rotas do `assembly_qa`:**
- `retake` → `finalize`: A1, A2, A9 (gerador) e A3 (**Proposta**: a raiz "ponte de relógios" fica com o gerador);
- `retake_master`: A4;
- `retake_mirror`: A7, A9, A10 e A13 (montador);
- `retake_art`: A12 (**Proposta**: a peça com dado é a cena);
- `retake_render`: A5 e A6;
- `retake_score`: A8.
- **Sem rota:** A10 quando a raiz é o roteirista, e A11 (branding).
- O **bloqueio** do ofício (CONTRATO:298-308) não é aresta: a produção fica em `assembly_qa` até o dono ou a marca decidir.

**Três mudanças em relação à long-form (Proposta):**
1. **O `cut_detect` sai.**
   - Master sintético não tem bruto para decupar.
   - O `_cortes.json` que o `qa-montagem` cobra (CONTRATO:30) nasce no compositor do master.
2. **O `conducting` vem antes do `research`,** como diz a doutrina: "o regente vem ANTES deles" (RG `crafts/regente-de-imagem/SPEC.md:37`).
   - **Custo:** o regente roda sem `conceito-visual`, que para ele é opcional (CONTRATO:12).
   - Com isso, a validação 5, "Contra o arco" (regente CONTRATO:119-120), e a recusa "contrariar o arco" (OFICIO:167-168) ficam sem objeto. Nada confere a regência contra o arco depois.
   - Por isso o `art_direction` ganha `retake_conducting`, para reger de novo contra o arco. O preço é que a pesquisa roda outra vez.
   - O `art_direction` continua depois da pesquisa, porque lê os shards dela (`diretor-de-arte/CONTRATO.md:5-16`).
3. **Portões novos:**
   - `scene_gates` antes do `qc`: quem roda os gates é o autor da cena, e o QC só lê o resultado (qc-visual CONTRATO:95-97).
   - `owner_review` antes do `render`: "aprovação — o olho humano, antes do render em lote" e "Render nunca é especulativo" (AC `../dominios/producao-de-video/OFICIO.md:86,90`).
   - `assembly_qa` depois do XML. Na long-form, o `finalize` é terminal (:31-32).

**Idioma:**
- O motor avisa que "os ofícios foram escritos para vídeo em português" (RG `CHANGELOG.md:44-45`), e o canal deixou isso em aberto (AP `APRENDIZADOS.md`, item 6).
- Os 13 ofícios novos também são pt-BR. O `critico-de-locucao`, por exemplo, julga homófonos do português ("a cessão"/"a sessão", SPEC:22-23) e supõe apresentador humano com retake de cabine (:28-30).
- O gate 5 do `scene_gates`, o til do Bold em Ã/Õ (qc-visual CONTRATO:99-108), não se aplica a inglês. Ver a decisão 21.

## 4 · Pesquisadores por especialidade (e as bancadas)

**O que o motor impõe:**
- Um ofício por passo (`schema.sql:34`).
- A produção fica num passo só (`schema.sql:55`), e o `advance` move a produção inteira (`state.mjs:34-54`).
- Um destino por gatilho (`schema.sql:46`).
- Portanto a linha não se divide em ramos paralelos que depois se juntam.

**O que a doutrina pede:**
- A pesquisa se divide **por tipo de coisa**, não por cena: "seis caçadores em paralelo", com tabela de roteamento (AC `pesquisa-pessoas/SPEC.md:30-40`).
- Cada caçador grava o próprio shard, porque não há lock (`pesquisa-pessoas/CONTRATO.md:29-31`).
- O diretor de arte lê os shards pelo manifesto (RG `crafts/diretor-de-arte/CONTRATO.md:31-35`).

**O que descartei:**
- **Seis passos em série:** inventa dependência que não existe, e todo vídeo atravessaria passos vazios.
- **Um ofício "pesquisa" que faz tudo:** não existe no agent-core, e apagaria as recusas que cada SPEC declara.

**O que está no JSON (Proposta):** o passo é a fase. O `craft` é o ofício que o doctor confere. Os demais ofícios são **despachados pelo Claude dentro do passo**, porque não há worker na Régie.
- **`research`:**
  - `craft` = `pesquisa-imagens`;
  - junto dele, mais cinco caçadores, um por tipo, cada um cobrindo todas as cenas do seu tipo e gravando o próprio shard;
  - "Seis simultâneos passaram limpo em 9 s" numa máquina de 7,8 GiB (RG `docs/planejamento/DESPACHO.md:65`). **Não é um teto medido nesta máquina**, e a Régie não tem despachante.
- **`script_review`:**
  - `craft` = `critico-de-roteiro`. É uma das quatro lentes, "o generalista" (verificador SPEC:37), e "não avança o estado" (critico-de-roteiro CONTRATO:62).
  - **Não é ele quem consolida.** O `bancada.veredito` sai do `bancada-roteiro.sh` do consumidor, que "dispara as 4 lentes e consolida" (verificador SPEC:78). Esse script não existe aqui: a consolidação é trabalho determinístico sem dono na linha.
  - As lentes "rodam em paralelo e não conversam — de propósito" (verificador SPEC:39-41). Em série, cada reprovação obrigaria a refazer as outras, porque o veredito é carimbado pelo hash do roteiro (verificador SPEC:83-87).
- **`art`:**
  - `craft` = `editor-de-arte`;
  - o `mapista` pega as cenas `mapa`/`mapa3d`: "A fronteira é o `modo`" (mapista SPEC:31);
  - o próprio editor manda delegar (RG `crafts/editor-de-arte/OFICIO.md:372`);
  - no Alpha, o mapa é a espinha do vídeo (AP `marca/identidade.md:12,17-20`).

**O custo honesto:**
- O doctor só confere o `craft` do passo (`bin/regie:320-328`). **9 dos 13 ofícios novos ficam invisíveis para ele:** se um sumir, só se descobre no dia do despacho.
- A ADR 0004 chama esse padrão de "agentes sem porta" (RG `docs/adr/0004-um-canal-um-projeto.md:89-90`). Por isso a recomendação é instalar os 9 **junto** com o campo de rotas abaixo, não antes.
- O retake vale para a produção inteira: uma cena reprovada no `qc` devolve o vídeo todo para `art` (`state.mjs:34-54`). Um `retake_master` no fim refaz o caminho inteiro a partir do `master`.
- As tabelas que resolveriam os dois problemas já existem, mas nenhum código escreve nelas: `asset` e `requisition`, esta com 7 tipos (`schema.sql:79-105`), e `attempt.craft` (`:124`).

**Para o motor (Proposta):**
- Um campo opcional de rotas por passo no JSON. Por exemplo: `research` com `person` → `pesquisa-pessoas` e `geo` → `pesquisa-geo`; `art` com o modo `mapa` → `mapista`.
- O doctor estendendo a checagem de `bin/regie:320-328` a essas rotas.
- O retake por cena movendo o `asset`, e não a produção.
- Nada disso entrou no JSON, porque a tarefa pediu o formato exato da long-form.

**A bancada das cenas e os exemplos do dono:**
- O dono pediu "uma bancada de revisores, cada um com uma lente específica". A doutrina faz de outro jeito:
  - **um** `qc-visual` com **14 lentes**, cada uma julgada separadamente (RG `crafts/qc-visual/OFICIO.md:84-94`);
  - mais scripts determinísticos que o autor da cena roda antes (CONTRATO:95-108). Aqui eles viraram o passo `scene_gates`.
- **"Texto por cima do outro"** = gate 2 (`check-overlap`) + lente 1 (espaço). **O runner não existe aqui.**
- **"De acordo com o plano"** = gate 7 (`qc-janela`) + a `regencia.json` ("manda") + a lente 4 (abordagem), com volta ao `mirror` por `retake_mirror`. **O runner do gate 7 também não existe aqui.**
- 14 agentes por cena multiplicariam por 14 o custo de uma etapa que já roda uma vez por cena, em vídeos de mais de 130 cenas (qc-visual SPEC:116-117).
- **Isto é desvio do pedido literal, e fica como decisão do dono** (decisão 7).

## 5 · As estações mecânicas

- Nenhuma tem código no motor (AP `APRENDIZADOS.md`, item 9).
- O schema aceita `attempt.kind='tool'` (`schema.sql:149`), mas nada o usa.
- O `advance` não confere artefato nenhum (`state.mjs:34-54`).
- **Correção depois da redação:** o texto original tratava o top10-estudio como ilegível nesta máquina. Não é. O clone `Downloads\top10-estudio` está interrompido (só `.git`), mas o ES é legível e tem quase tudo:
  - o `conferir-capacidades.mjs` do agent-core mede **76 de 89** capacidades presentes no ES, contra 0 de 89 em RG e em AP, e nenhum script de runtime ausente;
  - faltam lá `knowledge/CATALOGO-MODELOS.md`, `assets/geojson/`, `assets/dados/`, `seed/regras/ROT.md`/`SIS.md` e `scripts/estudio/auto-aprovar.mjs`;
  - os schemas estão em `ES/contratos/`: `laudo-qc`, `laudo-finalizacao`, `textos-tela`, `regencia`, `conceito-visual`, `espelho`, `roteiro`, `pauta-fundamento` (v1), entre outros. O `validar-contrato.mjs` roda em node puro contra eles.
  - **O que isso muda:** os portões e as estações abaixo **não precisam ser inventados; precisam ser portados e adaptados**. A própria Régie já planeja isso (RG `docs/planejamento/PLANO-CONSOLIDADO.md:318`).
  - **Por que não plugam como estão:** o ES não tem `node_modules`; `shot.mjs:5`, `maprender.mjs:4`, `check-overlap.mjs:7` e `qc-carga.mjs:55` importam `playwright-core`; os scripts resolvem `out/<proj>` a partir da raiz do estúdio (`qc-espelho-midia.mjs:91-100`); e trazem a marca e a infraestrutura do estúdio.
  - **Não sei provar** que algum deles passa contra artefatos de um canal: não rodei nenhum.

### Portões · `script_lint` e `scene_gates`
- **Nenhum runner existe nesta máquina.** Busquei `check-overlap`, `qc-contrato`, `qc-janela`, `qc-laudo`, `qc-carga`, `qc-tamanho`, `qc-src-existe`, `_audit-til`, `validar-roteiro`, `bancada-roteiro` e `qc-placar-dossie` em RG, AP e no agent-core: 0 arquivos. `agent-core/ferramentas/` só tem ferramentas de ofício (instalar, conferir, testar), nenhuma de cena.
- **O `scene_gates` precisa de** (qc-visual CONTRATO:74-78, 99-114):
  - `qc-contrato`;
  - `check-overlap`, o "texto por cima do outro" do dono;
  - `qc-carga`;
  - `qc-tamanho` e `qc-ornamento`;
  - `_audit-til` (não se aplica a inglês);
  - `qc-src-existe`;
  - `qc-janela`, o "de acordo com o plano";
  - `qc-laudo`, que barra o render.
- **O `script_lint` precisa de:** `validar-roteiro.mjs`, do extrator de afirmações checáveis e da contagem de assinaturas (critico-de-roteiro OFICIO:138-139).
- **No ES, existem todos** (linhas contadas): `check-overlap` 494, `qc-contrato` 224, `qc-carga` 663, `qc-tamanho` 467, `qc-ornamento` 63, `_audit-til` 214, `qc-src-existe` 88, `qc-janela` 511 e `qc-laudo` 181, em `scripts/`.
  - A bancada do roteiro também: `scripts/roteirizacao/validar-roteiro.mjs` 1.675, `afirmacoes-checaveis.mjs` 224, `qc-cobertura-fatos.mjs` 172 e `veredito-bancada.mjs` 126, mais `scripts/estudio/bancada-roteiro.sh` 230 (o consolidador que falta no §4; chama o `claude` e gasta crédito, então não rodei).
  - E o `scripts/qc-placar-dossie.mjs`, 126, que o `pesquisador-de-pauta` pede.

### Narração · `voiceover`
- **O que exige:**
  - Nenhum ofício pede parâmetro de TTS. Não achei nenhum.
  - Duas lentes do `critico-de-locucao` viram decisão de TTS: número e sigla falados (OFICIO:55-56) viram normalização; nome estrangeiro (:52-54) vira dicionário de pronúncia.
  - A aprovação fica presa ao hash dos bytes (`tradutor-de-narracao/OFICIO.md:103-111`).
  - A persona é um jornalista de uns 35 anos, a 150–160 palavras por minuto (AP `marca/voz.md:10,23`).
- **O que existe nesta máquina:**
  - SDK `elevenlabs` 2.54.0 no Python 3.12, **sem chave**.
  - `convert_with_timestamps` devolve alinhamento por caractere, em dois campos: `alignment`, do "original text", e `normalized_alignment`, do texto normalizado (SDK `types/audio_with_timestamps_response.py:19-27`). O método também aceita `apply_text_normalization`.
  - O `seed` é "best effort" (`client.py:112`). PCM ou WAV a 44,1 kHz exige o plano Pro (`client.py:97`).
  - O `edge-tts` usa um endpoint não oficial e fica fora de produção.
- **O que falta:**
  - o script que narra seção a seção, com `previous_text`/`next_text`;
  - o recibo `narration.json`: voz, modelo, settings, seed, request_ids, e o sha256 do texto e de cada saída;
  - a decisão de serviço, voz, plano e licença (decisão 11).
- **Regra dura:** a narração congela antes do `mirror`. Refazer o TTS depois da arte muda o `words.json`, e a cena "apodrece" sem que nenhum gate veja (RG `crafts/editor-de-arte/CONTRATO.md:82-85`).
- **Por isso o `research --retake_script-->` só com decisão do dono.** Reabrir o roteiro invalida tudo do `voiceover` em diante e gasta crédito. A alternativa é corrigir só na tela, pelo redator (decisão 19).

### Master · `master`
- **O que exige:**
  - a faixa de áudio, medida (RG `crafts/decupador/CONTRATO.md:50-51`);
  - `words.json` do master que está no disco (montador CONTRATO:18-20);
  - o último instante da fala igual à duração do ffprobe (AC `doutor-de-roteiro/CONTRATO.md:28-32`);
  - all-intra (qa-montagem A4, CONTRATO:249);
  - os gaps dos cards no arquivo **ou** na timeline, e a marca diz qual (decupador CONTRATO:53-55). **A marca do Alpha não diz.**
- **O que existe (medido no levantamento):**
  - ffmpeg 8.1: 16 s de preto 4K com `-g 1` e PCM 48k saem em 2,3 s;
  - com `-shortest`, o vídeo estoura 1,1 s; com `-t` exato, a diferença cai para 3,5 ms.
- **O que falta:**
  - o compositor: `color=black:3840x2160:r=30`, o WAV, `-t` exato, `-g 1`, `-color_range tv` e o recibo com sha256;
  - o `_cortes.json`;
  - a conferência que dispara `master --blocked--> voiceover`.
- **Risco:** o `blackdetect` do qa-montagem ("tem que voltar 0", CONTRATO:143-149) **reprova o master preto por construção**. A V1 precisa ficar isenta.
- **Referência:** `scripts/decupagem/master-decupado.mjs` (decupador CONTRATO:43) existe no ES, com 922 linhas. Não li: ele parte de bruto gravado, e aqui o master é sintético.

### Transcrição · `ingest`
- **O que exige:**
  - Nenhum ofício traz schema de `words.json`. Não achei.
  - A única forma explícita é `[{w,start,end}]` (AC `curador-de-acervo/CONTRATO.md:24`).
  - `start` em segundos (editor-de-arte CONTRATO:11).
- **O que existe:**
  - faster-whisper 1.2.1 com large-v3 funciona na CPU (int8): 14,8 s de áudio em 19,3 s.
  - Na GPU falha, por falta de `cublas64_12.dll`. Consertar exige baixar as bibliotecas CUDA, e isso pede permissão.
  - Defeitos medidos: espaço à esquerda na palavra, pontuação ausente, "bridge" virou "breed", e a palavra engole a pausa.
- **Proposta:**
  - O `words.json` vem do `alignment`, o do texto original, e **não** do `normalized_alignment`: o roteiro vence a transcrição na grafia (montador CONTRATO:14).
  - A normalização de números e siglas vai por `apply_text_normalization` e por dicionário de pronúncia, **sem reescrever o texto do roteiro**.
  - O whisper fica como conferência independente. Como ele erra (medido acima), **uma divergência abre uma decisão do dono**: ele ouve o trecho, e só a divergência confirmada gera `ingest --retake--> voiceover`. Um falso positivo do conferidor não pode gastar crédito de voz.
- **O que falta:** o conversor de caractere para palavra, o deslocamento por seção, a conferência de duração e o registro de origem (lineage) (montador CONTRATO:120-121).
- **Referência:** `src/transcribe.mjs`, 216 linhas (RG `docs/planejamento/CRITICA-DE-COMPLETUDE.md:25`), existe no ES; `scripts/alinhar-timestamps.mjs`, 38 linhas, também.

### Render · `render`
- **O que exige:**
  - o contrato de cena: `__duracao`, `__renderAt(t)` e os ganchos, sem `Date.now()`, `new Date()`, `Math.random()` nem `@keyframes` (editor-de-arte CONTRATO:99-130);
  - `data-render="4k-native"` (:134-143);
  - laudo aprovado, porque o `qc-laudo` barra o render (qc-visual CONTRATO:78).
- **O que existe (medido no levantamento):**
  - Chrome 153 headless, via Playwright 1.61 no Python 3.14, com WebGL pela RTX 5060 (ANGLE D3D11).
  - O protótipo rodou a 8,1 fps em 3840×2160, com 60 de 60 keyframes. Nesse ritmo, 10 min de vídeo levam uns 37 min.
  - A saída veio em `yuvj420p` com faixa `pc`. Precisa de `scale=in_range=pc:out_range=tv` e `-color_range tv`.
  - O disco C: tem 207 GB livres.
- **O que falta portar:**
  - o capturador, com espera por `seeked`;
  - os gates do `scene_gates` (acima). O `qc-contrato`, pelo que o CONTRATO lista, não pega `new Date()` (qc-visual CONTRATO:101);
  - `shot`, `maprender`, `qc-footage-seekavel` e a conferência de preto e duração.
- **Contradição nos ofícios:** o transcode do `pesquisa-imagens` sai sem `-g 1` (OFICIO:234-235), e o gate exige all-intra (SPEC:63,67-70).
- **Referência:** `render/*.mjs` e `scripts/render-l4/*`, 3.630 linhas segundo a CRITICA:25. No ES existem, e somam 3.486 linhas hoje; o capturador é `render/capturar.mjs`, 539. `shot.mjs` (257), `maprender.mjs` (56) e `qc-footage-seekavel.mjs` (143) também estão lá.

### Trilha · `score`
- **O que exige:**
  - A8: cama e realce em dB, rampas, e a faixa mais longa que a janela (qa-montagem CONTRATO:253);
  - o duck em cada card (:194-204);
  - `_trilha-plano.json` (:33). Não achei o schema.
- **O que não existe:**
  - Ofício de trilha, em nenhuma das 51 pastas do agent-core. O qa-montagem cita um "curador de trilha" (:253) que não existe.
  - Alvo em dB na marca. Sem limiar, o qa-montagem bloqueia (:304-305).
  - AP `marca/midia.md:156` dizia "Música em geral já vem no master", o que é falso para master de TTS. Corrigido no canal junto com esta proposta.
- **O que existe:** ffmpeg, com `loudnorm`, `ebur128` e `astats`.

### XML · `finalize`
- **O que exige:**
  - `<proj>-POS.xml` e seus insumos (qa-montagem CONTRATO:28-34);
  - a ordem das faixas: V1 é o master, V1 ≡ A1 quadro a quadro, e A2 é a trilha, com keyframes (:186-194);
  - `<clipitem>` (RG `docs/planejamento/NOMENCLATURA.md:42`);
  - tempos em quadros inteiros (qa :166-175);
  - `<pathurl>` absoluto e `<name>` só em ASCII. Um `&` cru faz o importador recusar o arquivo inteiro (:210-221).
- **Três planos obrigatórios** (qa CONTRATO:33): `_overlays-branding.json`, `_trilha-plano.json` e `_cards-titulo.json`.
  - A linha só produz o de trilha, no `score`.
  - **Nenhum passo produz `_cards-titulo.json`.** O A3 exige "nº de gaps == nº de cards na tela" (:248).
  - **Nenhum passo produz `_overlays-branding.json`.** O gerador que existe no agent-core é o do compilado, que lê `_reaproveitamento.json` (`designer-de-navegacao/CONTRATO.md:27-29`).
  - **Saídas possíveis:** a marca declara os dois vazios e o A1/A3 são adaptados, ou a decisão dos cards ganha dono.
  - Com o gap na timeline, os cards podem ser decididos no `mirror`. Com o gap no arquivo, a decisão precisa vir antes do `master`, e nenhum passo faz isso (decisão 13).
- **As camadas:**
  - Não achei o que é a V3.
  - A V4 são overlays (`designer-de-navegacao/CONTRATO.md:29`), e a V5, transições (qa :101).
- **No Alpha, a V4 e a V5 tendem a nascer vazias (inferência):**
  - a marca não declara overlay nenhum (`grep overlay` em `marca/`: 0 resultados). O canto inferior direito só é reservado à marca-d'água do YouTube (AP `identidade.md:103-104`);
  - a marca pede viagem de câmera contínua entre mapas e corte seco na troca de regime (`identidade.md:126-127`). Não declara elemento de transição;
  - "faixa vazia é FAIL" no A1 (qa :246). A marca precisa declarar as camadas.
- **O que existe:**
  - Premiere Pro 2026, para a prova de importação ("válido não é abre", qa OFICIO:162-164);
  - não há `xmllint`, mas o Python stdlib confere se o XML está bem-formado.
- **Referência:** `src/timeline-xml.mjs` (465 linhas) e `scripts/xml-premiere-5camadas.mjs` (2.715) (CRITICA:25; qa CONTRATO:38) existem no ES, e os 7 imports relativos do gerador resolvem lá. Também estão `scripts/finalizar.mjs` (748) e `scripts/qa-finalizacao.mjs` (191). Existe ainda uma cópia parcial do estúdio numa pasta do OneDrive; ali nenhum dos 7 imports resolve, e o canal não trabalha em pasta sincronizada.

## 6 · O que muda no motor

**Bloqueiam: sem isto, a linha nova se desfaz.**

1. **O `init` sem argumento semeia a `long-form`** (`bin/regie:73`).
   - O `create-regie` grava `pipeline` no `canal.json` (`bin/create-regie:285`), mas só o usa no nascimento (`:309`).
   - O procedimento de atualização manda rodar `init` sem argumento (`bin/create-regie:467`; `CHANGELOG.md:7-10`; AP `CLAUDE.md:55`).
   - **Medido na rodada 1** (sobre o rascunho de 24 passos): `init` sem argumento num canal from-scratch deu doctor FAIL, com 12 becos e 24 passos inalcançáveis.
     - O doctor partiu de `topic_pitch`, empatado com `ingest` no ordinal 1 (`state.mjs:142`; `bin/regie:289-294`).
     - Conforme o desempate implícito, seriam 12 ou 24 inalcançáveis.
     - Voltar com `init long-form-from-scratch` não limpou o resíduo.
   - Na versão final, os passos exclusivos são 13. **Confirmado na prova final:** 13 inalcançáveis e 13 em beco (ver "A prova").
   - **Para os canais do gerador, isto bloqueia.** No Alpha, enquanto o motor não corrigir, o CLAUDE.md do próprio canal passa a mandar `init long-form-from-scratch` na atualização (AP `CLAUDE.md:55`). O canal pode editar esse arquivo.
   - **Proposta:** sem argumento, o `init` lê `canal.json.pipeline`, ou recusa quando o banco tem outra linha.
2. **A semeadura nunca apaga passo** (`bin/regie:245-248`), mas apaga **todas** as arestas (`:252`).
   - **Medido na rodada 1:** num canal long-form, `init long-form-from-scratch` deixou o `cut_detect` órfão, e o doctor deu FAIL (inalcançável e em beco).
   - É isto que bloqueia a migração do Alpha.
   - **Proposta:** remover o passo que saiu da linha quando nada o referencia; se algo referencia, recusar.
   - **2b.** O `init <outra linha>` recusa quando há produção fora de `done`/`archived` num passo cuja posição muda.
     - Medido na rodada 1: `em-artdir` pulou o `conducting`, `em-fim` (já `done`) reabriu em `assembly_qa` e `em-cut` ficou preso ("sem aresta declarada", `state.mjs:40`).

**Para a linha funcionar:**

3. **Criar `db/pipeline-long-form-from-scratch.json`.** O `init <nome>` e o `--pipeline=` do gerador já o aceitam (`bin/regie:73-74`; `bin/create-regie:182-184`).
   - A alternativa é a linha morar no canal. A ADR 0004 põe "pipeline.json — a linha deste canal, que pode divergir da padrão" dentro da pasta do canal (`docs/adr/0004-um-canal-um-projeto.md:57`). A ADR 0006 diz que a linha vem "do canal, via `pipeline.json`" (`0006-federacao-por-publicacao.md:110`).
   - Isso também resolveria o defeito 1 (decisão 1).
   - As descrições de `voiceover` e `master` estão genéricas de propósito: o serviço de voz e o formato do master são roupa da marca (a régua da ADR 0004:60-63).
4. **Instalar os ofícios em `crafts/`.**
   - **Os 4 que o doctor exige agora**, porque são `craft` de passo: `pesquisador-de-pauta`, `roteirista-narracao`, `critico-de-roteiro` e `qa-montagem`.
   - **Os 9 despachados por dentro**, junto com o campo de rotas (§4): `critico-de-clareza`, `verificador-de-fatos`, `critico-de-locucao`, `pesquisa-dados`, `pesquisa-documentos`, `pesquisa-geo`, `pesquisa-logos`, `pesquisa-pessoas` e `mapista`.
   - **Como copiar:** com `git show e68c8cf:agentes/<id>/<arquivo>`, que entrega os arquivos em LF. É o mesmo commit de `crafts/ORIGEM.json:3`. O clone local do agent-core está em CRLF, e o hash é sobre os bytes.
   - A entrada no ORIGEM é opcional (`crafts.mjs:65-66`), mas recomendo pôr.
   - Os 13 passaram no gate de portabilidade na rodada 1.
   - Hashes recalculados nesta redação, no formato do ORIGEM (primeiros 16 hex do sha256 do blob em `e68c8cf`):

| ofício | agent.json | OFICIO.md | SPEC.md | CONTRATO.md |
|---|---|---|---|---|
| pesquisador-de-pauta | 1edcc69db236232a | 5497fc1a60175c2f | cbb008ead6d801c8 | 38b8cfa9c479e122 |
| roteirista-narracao | e9eb6324f4b44627 | 17a06b4bc12685dd | 86ba2702bf75717d | 4d46f5a97715d79b |
| critico-de-roteiro | efc29c5762e690ef | 65ac01493537e1aa | 2811e7951fac9ce6 | b1afa8495f15f553 |
| qa-montagem | 7058feee3ac222b6 | 0bd8e10d6ad466b2 | 5b4475cff77c7075 | 51d657a39f7be307 |
| critico-de-clareza | 9eff84192dc233cd | 1fcec032235188c4 | 307db25efe718d89 | 68341299a7036685 |
| verificador-de-fatos | cdc3a2c077383a2b | 816f9c7ae39b0daa | 4d620af680f21efd | 564dc289bf1d276e |
| critico-de-locucao | deaeea66d1b50184 | 1a278e2d6ed64237 | 2541d097d12839a1 | c0573e422c0c784c |
| pesquisa-dados | 647e824a64339acc | 39dbb58077c9431e | c1c71c4ec52f1f36 | f057a00c04c5a499 |
| pesquisa-documentos | 4d6912fbbd4dd9a3 | c6effc24bd099cca | d98ee6b48d0bc24a | 76b879986c1fd670 |
| pesquisa-geo | c088ca3c221d227c | 48d41bca476ea996 | d3a7a17cdb40f5ba | fd15da15faf7d628 |
| pesquisa-logos | e30eac64a1715423 | c8fde260bf591953 | 9ac3d7e22856ef3f | 99c81be94780172d |
| pesquisa-pessoas | e92d2390a3aa674c | fcea580b90fab53d | a7ca1d5b206e63d6 | 29e1ba5e2be642c5 |
| mapista | 43c9b5a0a402b020 | ffb2acba70af0d10 | 78ec92972223a332 | 68c7c407c49d5ded |

5. **O gerador e o onboarding.**
   - O CLAUDE.md que o gerador escreve diz "A linha começa num vídeo **já editado**… Não gera vídeo do zero" (`bin/create-regie:472-475`). O `docs/ONBOARDING.md:20-21` diz o mesmo. O texto precisa depender da linha escolhida.
   - O onboarding deve perguntar "você já tem master?" (AP `APRENDIZADOS.md`, item 8).
   - **5b.** `testes/create.test.mjs:244` exige `/já editado/` e muda junto com o texto.
6. **Os testes.**
   - O arquivo novo já entra sozinho em `pipeline.test.mjs:16-38`: alcance e destino existente.
   - Vale um teste próprio, como o de `:40-45`: `voiceover → master → ingest`, e `assembly_qa` como terminal.
   - O GATE de ofícios (`crafts.test.mjs:32-36`) só olha a linha padrão, porque roda `init` sem argumento (`:18-19`). Deveria semear cada `pipeline-*.json`.
   - Os testes que fixam 13 passos (`state.test.mjs:26-28`; `create.test.mjs:85`) não quebram, porque a long-form não muda.
   - Faltam testes para os itens 1, 2 e 2b.
   - **6b.** O doctor passa a acusar ✗ ordinal duplicado. Hoje o primeiro passo depende de desempate implícito (`state.mjs:142`).
7. **O passo `human`.**
   - O `advance` não olha capacidade, status nem ator (`state.mjs:34-54`), e nada grava `decision` nem `awaiting_human`.
   - Hoje, aprovar é rodar `advance`, e um `done` digitado por engano aprova.
   - **Proposta mínima:** num passo `human`, exigir gatilho explícito e gravar uma `decision` (`schema.sql:179-191`).
   - **7b. O terminal reabre.** O `advance` aceita produção em `done`.
     - Na rodada 1, `advance retake` depois do terminal devolveu o vídeo a `finalize`.
     - Aqui o `assembly_qa` tem 6 saídas de retake, então um gatilho errado depois de FINALIZAÇÃO OK reabre o vídeo sem aviso.
     - **Proposta:** recusar `advance` em produção `done`, ou exigir um gatilho explícito de reabertura.
   - **7c.** Na rodada 1, o `lease` sem filtro reservou o `topic_approval` (human) para `cli-<pid>` (`state.mjs:66-85`). **Proposta:** `lease` sem capacidade não reserva passo `human`.
8. **O aviso de retake é literal** (`bin/regie:306-313`).
   - A linha sai com 8 avisos: `story_research`, `script`, `mirror`, `conducting`, `research`, `art_direction`, `screen_text` e `art`.
   - **Seis deles têm saída de reprovação**, só que não com o `retake` literal: `script`, `mirror` e `conducting` (por `blocked`); `research`, `art_direction` e `art` (por `blocked` e `retake_<passo>`).
   - **Dois só saem por `done`:**
     - `story_research`: o pesquisador não reprova; declara o vazio (SPEC:64-65);
     - `screen_text`: o CONTRATO do redator não tem seção de bloqueio.
   - **Proposta:** o doctor passa a contar `blocked` e `retake_<passo>` como caminho de correção, e os dois restantes ficam declarados como passos sem reprovação.
9. **A migração do Alpha Point.**
   - O banco do canal tem só a `long-form`, com 0 produções.
   - Depois dos itens 1 e 2: `init long-form-from-scratch`, atualizar `canal.json.pipeline` e a linha 55 do CLAUDE.md do canal.
   - De passagem: o `canal.json` registra o commit `ffb3ec0` (AP `canal.json:19-21`), mas o motor está em `44cf6f7`.

**Conferência de forma:**
- **Rodada 1, sobre o RASCUNHO** (24 passos, 45 arestas), num clone descartável da v0.1.0 com os 13 ofícios copiados de `e68c8cf`:
  - `npm.cmd test`: 56/56, inclusive o PORTÃO de credenciais;
  - doctor PASS, com 8 avisos;
  - um driver de 101 chamadas levou os 10 `retake` e os 11 `blocked` aos destinos do JSON;
  - a migração e o `init` sem argumento reproduziram os defeitos 1, 2 e 2b.
- **Nesta redação, sobre a VERSÃO FINAL** (25 passos, 61 arestas), sem clone:
  - **Como:** semeada com o código do motor num banco do scratchpad (`REGIE_DB`), com o JSON lido de fora do motor pelo caminho que o `init` não valida (`bin/regie:73-74`). É o acidente que o levantamento registrou, não uma interface. Nada foi escrito no motor.
  - **Doctor:** alcance ✓, becos ✓, 8 avisos. O único ✗ foram os 4 ofícios de passo ainda não instalados.
  - **Driver:** 209 chamadas. Os 36 gatilhos que não são `done` chegaram ao destino do JSON, com 0 divergências, e o terminal foi alcançado. Um gatilho fora da linha (`approved`) foi recusado.
- **Depois, sobre a versão final, num clone descartável:** `npm test` com os 13 ofícios e a migração. Resultado em "A prova", no fim.

## 7 · Decisões em aberto

1. **Onde mora a linha.** (a) arquivo novo no motor (esta proposta); (b) estender a `long-form`, que quebra `state.test.mjs:26-28,40`, `create.test.mjs:85` e `pipeline.test.mjs:60,71,74`; (c) `<canal>/pipeline.json` (ADR 0004:57; 0006:110), com o `init` lendo de lá. E o nome.
2. **Como corrigir o `init`** (itens 1, 2 e 2b). É pré-requisito.
3. **Aprovação do dono** nos 4 passos `human`: basta um `done`, ou exige gatilho explícito e grava uma `decision`?
4. **Vocabulário de gatilhos:** adotar `done`/`retake`/`retake_<passo>`/`blocked`? Fixar o `EDGE_TRIGGER` no glossário (`NOMENCLATURA.md:215`)? E o doctor aceitar essas saídas como correção?
5. **Vários ofícios num passo:** um campo de rotas com o doctor conferindo, ou outra forma.
6. **Bancada do roteiro:** um passo (a proposta) ou quatro em série. Quem escreve o consolidador.
7. **Bancada das cenas.** O dono pediu um revisor por lente. As opções:
   - (a) como está: um `qc-visual` com 14 lentes e os scripts;
   - (b) mais dois juízes independentes só nas showpieces (qc-visual SPEC:86-88);
   - (c) um agente por lente, com o custo por cena multiplicado (SPEC:116-117).
   - **Decide o dono do canal.**
8. **Ordem:** `conducting` antes do `research`, com o `retake_conducting` do `art_direction`, ou a ordem da long-form.
9. **`owner_review`:** manter, contra a aposentadoria da aprovação por desuso no estúdio (long-form:5)? O `revisor-criativo` entra entre ele e o `art`?
10. **Escolha do tema:** o `topic_pick` (a proposta) ou o `topic_pitch` entregar um tema só. A concepção fica com o dono e o Claude, ou vira ofício novo?
11. **Voz:** plano da ElevenLabs, voz, licença comercial, chave e quem paga, ou um TTS local. A ADR 0001:37-39 põe as APIs de rede "fora do caminho crítico"; aqui a voz está no caminho crítico.
12. **`words.json`:** o alinhamento do TTS com o whisper conferindo (a proposta), o whisper puro ou o Scribe. E o schema.
13. **Gaps e cards:** no arquivo do master ou na timeline. Quem produz `_cards-titulo.json` e `_overlays-branding.json`, ou a marca os declara vazios.
14. **Código das estações:** no motor ou em cada canal? Portar do top10-estudio? O ES tem 76 das 89 capacidades e todos os scripts de runtime (§5). Portar custa dependências (`playwright-core`), tirar a marca e a raiz `out/<proj>` do estúdio, e provar cada script contra um artefato de canal.
15. **Runtime do roteirista e gates do roteiro:** nenhum dos dois existe; o contrato do roteirista não tem campo para os laudos da bancada. **Sem dono:** os títulos propostos do `roteiro.json` (critico-de-roteiro CONTRATO:24) e o `[IMAGEM SUGERIDA]` do `roteiro-editor.md` (montador CONTRATO:15). O roteirista proíbe imagem e título de vitrine (roteirista CONTRATO:40-41,71).
16. **Vereditos:** mapear PASS/RESSALVA/FAIL para approved/retake/inconclusive (`glossary.mjs:74-81`). RESSALVA não tem par.
17. **Limiares da marca que o `qa-montagem` exige:** dB, LUFS, piso de taxa, camadas e isenção do `blackdetect` na V1.
18. **Marca × mapista:** brilho do satélite, e base estática contra tiles com DEM.
19. **Fatos depois da voz:** em que passo reconferir os voláteis antes de gravar? Uma divergência achada na pesquisa corrige só na tela ou reabre o roteiro (`retake_script`)?
20. **Rubrica e duração-alvo:** a rubrica do roteiro não existe no canal, e o canal não declara duração-alvo.
21. **Idioma:** os 13 ofícios são pt-BR (CHANGELOG.md:44-45; AP APRENDIZADOS item 6). No Alpha, o `critico-de-locucao` julga com AP `marca/voz.md`, e "apresentador" vira "TTS". O gate do til fica não aplicável.

## 8 · O que NÃO está nesta proposta

- **Código das estações:** narração, master, transcrição, gates, render, XML e QA. **E o worker que despacha.** A Régie continua guardando estado, ordem e histórico; quem faz o trabalho é o Claude, junto com o dono.
- **Ofícios fora da linha:**
  - `doutor-de-roteiro`: propõe cortes que precisam de aprovação humana (SPEC:40);
  - `curador-titulos-thumbs`: usa o VidIQ, que gasta crédito (SPEC:87);
  - `analista-de-audiencia`: laço contínuo, e com zero vídeos publicados não há evidência;
  - `curador-de-acervo`: outro produto, e reprova no gate de portabilidade;
  - `executor-de-molde`: o canal não tem exemplar;
  - `revisor-criativo`: fica para a decisão 9;
  - `tradutor-de-narracao`.
- **Publicação, embalagem, localização e arquivamento de produção.** Não há verbo nem aresta para isso.
- **O runtime do roteirista e a rubrica.** Os ofícios os pressupõem (roteirista OFICIO:27-36), e eles não existem aqui.
- **Os scripts do top10-estudio:** a existência foi conferida no ES (§5), mas eles não foram portados, adaptados nem rodados contra artefato de canal.
- **Ferramentas pagas:** nenhuma chamada a ElevenLabs, Scribe ou VidIQ.

## A prova

**Onde:** num clone descartável do motor em `%TEMP%\regie-prova-zero-*`, com checkout de `v0.1.0` (`44cf6f7`). A pasta foi apagada no fim, e o apagamento foi conferido por Bash e por PowerShell. O motor real terminou limpo (`git status` vazio, `describe` = `v0.1.0`), e o canal ficou como estava.

**O que foi instalado no clone:**
- o JSON desta pasta, como `db/pipeline-long-form-from-scratch.json`: válido, com 25 passos, 61 arestas, nenhum id repetido e 6 capacidades, todas do CHECK;
- os 13 ofícios, tirados de `git show e68c8cf:agentes/<id>/<arquivo>`. Os bytes do disco batem com o commit, e o `crafts --diff` deu os 21 ofícios como "igual";
- **CRLF:** o clone local do agent-core tem 0 de 32 arquivos iguais em bytes crus e 32 de 32 depois de normalizar para LF. Copiar a pasta crua grava hash errado.

**Canal novo, nascido na linha** (`create-regie teste-zero --idioma=en-US --sem-drive --pipeline=long-form-from-scratch`):

| Conferência | Resultado |
|---|---|
| `init long-form-from-scratch` | ✓ 25 passos |
| `graph` | ✓ as arestas iguais ao JSON; o `assembly_qa` com 7 saídas |
| `doctor` | **PASS**: alcance ✓, nenhum beco ✓, ofícios ✓, com 8 avisos de "sem `retake`" (§6 item 8) |
| `advance done` × 25 | ✓ de `topic_pitch` até o terminal, na ordem da §2 |
| os 36 gatilhos que não são `done` | **36 de 36** chegaram ao destino do JSON, com status `pending`, e o `done` voltou ao passo de origem |
| passeio inteiro | 215 chamadas à CLI, 0 falhas |
| `npm.cmd test` na cópia do motor | **56 de 56**, inclusive os dois testes genéricos da linha nova e o de portabilidade com os 21 ofícios |

**O que a prova confirmou de errado no motor** (todos na §6):
- **O terminal reabre (7b):** depois do terminal, `advance done` foi aceito de novo, e virou uma segunda transição terminal. `advance retake` reabriu o vídeo concluído em `finalize`. Um gatilho inventado foi recusado ("sem aresta declarada").
- **O passo `human` não se distingue (7):** as 211 transições gravaram o mesmo ator, o usuário do Windows, inclusive na saída dos 4 passos `human`. Foram 0 `decision`, 0 `receipt` e 0 `attempt`.
- **O `blocked` grava `pending` no destino** (`state.mjs:43`), como a §2 já diz.
- **Os testes cobrem pouco da linha nova (6):** um passo da from-scratch que aponte para um ofício inexistente só seria pego pelo doctor, não por teste.
- **O gerador não acompanha a linha (5):** o canal de teste nasceu com "Não gera vídeo do zero" no CLAUDE.md, e com `motor.commit` = `44cf6f7`, embora a cópia estivesse suja (`v0.1.0-dirty`).

**Migração de um canal `long-form` que já existia**, com produções paradas em `ingest`, `cut_detect` e `mirror`:

| Passo | Resultado |
|---|---|
| `init long-form-from-scratch` | ✓ 25 passos, exit 0 |
| `doctor` | ✗ **FAIL**: `cut_detect` inalcançável e em beco (item 2) |
| `graph` | 26 passos; `cut_detect` no ordinal 2, empatado com `topic_pick` (6b) |
| produção em `cut_detect` | ✗ **presa**: "sem aresta declarada", tanto com `done` quanto com `blocked` |
| produção em `ingest` | mudou de capacidade em silêncio (external → cpu) e foi para `mirror` (2b) |
| apagar `cut_detect` à mão | ✗ recusado: `FOREIGN KEY constraint failed` |
| `canal.json` | continuou dizendo `pipeline: long-form` |
| voltar com `init long-form` | ✗ **FAIL** com 13 passos inalcançáveis e 13 em beco. O `open` seguinte caiu em `ingest` pelo desempate implícito do ordinal 1, e a produção aberta na linha nova ficou presa em `topic_pitch` |

**Conclusão:** a linha está bem formada e roteia como a proposta diz, tanto num canal que nasce nela quanto no motor atual sem mudança. **Migrar um canal que já existe, ou atualizar o motor rodando `init` sem argumento, quebra o banco** e não tem volta pelos verbos da Régie. Por isso os itens 1, 2 e 2b da §6 vêm antes de qualquer canal adotar a linha, inclusive o Alpha Point, que hoje tem 0 produções.

**O que não foi provado:** nenhum ofício rodou de verdade, nenhuma estação mecânica existe, e nenhum script do ES rodou. A prova é da **forma** da linha: estado, ordem e rotas.

