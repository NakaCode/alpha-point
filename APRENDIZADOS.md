# Aprendizados — Alpha Point

O que apareceu no onboarding deste canal e pode servir ao motor. Para Lucas e Mateus decidirem;
nada aqui foi alterado no motor.

## Situação na v0.1.0 (canal atualizado em 23/09/2026)

| Item | Situação |
|---|---|
| 1 · `mirror` inalcançável | **resolvido**: `cut_detect → mirror → research`, e o `doctor` passou a conferir o alcance |
| 2 · `midia_termos` × `needs.midia` | em aberto (CHANGELOG, "Em aberto") |
| 3 · `npm test` sem identidade do git | **resolvido**: 54/54 nesta máquina |
| 4 · `source` com espaço | **resolvido** no gerador; o `canal.json` deste canal foi atualizado para `lucas-rosa` |
| 4 · `arquiteto-de-marca` no molde | **resolvido** |
| 4 · `~` depois de `--em=` | **resolvido** |
| 4 · aviso de 6 passos sem `retake` | declarado esperado na v0 |
| 5 · idioma | o gerador ganhou `--idioma`; o motor ainda não usa o campo (em aberto) |
| 6 · ofícios assumem pt-BR | em aberto |
| 7 · doutrina de mídia como template | em aberto |
| 8 e 9 · origem do master e estações vazias | escritos depois da v0.1.0: Lucas e Mateus ainda não viram |
| 10 · a linha do zero | proposta pronta em `propostas/linha-do-zero/`, com prova; Lucas e Mateus ainda não viram |
| 11 · prontidão dos ofícios | escrito em 23/09/2026: Lucas e Mateus ainda não viram |
| 12 · o primeiro dossiê de pauta | escrito em 23/09/2026: Lucas e Mateus ainda não viram |
| 13 · o primeiro roteiro e a bancada | escrito em 23/09/2026: Lucas e Mateus ainda não viram |
| 14 · a aprovação pelo dono e o anti-robô | escrito em 24/09/2026: Lucas e Mateus ainda não viram |
| 15 · título e miniatura pelas referências | escrito em 24/09/2026: Lucas e Mateus ainda não viram |

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

## 23/09/2026 — o primeiro canal em inglês (motor em `ffb3ec0`)

O Alpha Point narra em inglês dos EUA. Auditoria somente leitura do motor para ver o que isso muda.

### 5. Trocar `idiomas.origem` para `en-US` não quebra nada, porque nada lê o campo
- **O que foi provado:**
  - o `bin/create-regie:253` só **escreve** `pt-BR`, e não tem flag de idioma;
  - o `testes/create.test.mjs:70` trava esse default;
  - fora o teste, nenhum código lê `idiomas`: nem `doctor`, `open`, `advance`, schema ou linha;
  - o `doctor` dá o mesmo PASS com `pt-BR` e com `en-US`.
- **A consequência:** o idioma do canal é declarado, mas não governa nada. O `ingest`
  (`db/pipeline-long-form.json:7`) não recebe idioma, e `localizados` não tem consumidor. O
  `tradutor-de-tela` que os ofícios citam (`crafts/redator-de-tela/CONTRATO.md:122`) não existe em `crafts/`.
- **Sugestões:**
  - um `--idioma` no gerador;
  - o `ingest` e o contrato de cena lerem `idiomas.origem`.

### 6. Os ofícios assumem vídeo em pt-BR, em lugares que um agente copia
- **Contrato de cena:** fixa `<html lang="pt-BR" data-render="4k-native">`
  (`crafts/editor-de-arte/CONTRATO.md:138`).
- **Exemplos copiáveis em formato brasileiro:**
  - `QUASE 3.000×` (`crafts/redator-de-tela/OFICIO.md:55`);
  - `"QUASE 30 VEZES"`, `"28,0×"` e `"vezes"` no schema de exemplo
    (`crafts/redator-de-tela/CONTRATO.md:104-107`);
  - `6,76 m ABAIXO DO MAR` (`crafts/editor-de-arte/OFICIO.md:118`);
  - `1º DE MAIO DE 1994` (`crafts/editor-de-arte/OFICIO.md:287`).
- **Heurísticas só em português:**
  - despedida, mic-check e dangler do decupador (`crafts/decupador/OFICIO.md:173, 243, 274`);
  - adversativas e sintagmas do regente (`crafts/regente-de-imagem/OFICIO.md:39-43`).
- **Vocabulário de máquina em PT:** não se traduz, porque os contratos vieram do agent-core
  (`crafts/ORIGEM.json`) com chaves e enums em PT, e é assim que os gates e schemas do consumidor os
  leem. Mas a ADR 0005 **não cobre** esse caso: ela manda inglês para chave de contrato e valor de enum,
  e só isenta a conversa, os ids dos ofícios e o conteúdo editorial. É uma terceira exceção, não
  declarada. E tem uma armadilha: o `motivo` de span de título precisa conter "título" porque dois
  consumidores legados o acham por regex (`crafts/decupador/CONTRATO.md:98`).
- **Como este canal contornou, sem tocar no motor:** está no `CLAUDE.md` do canal, na seção "O vídeo
  fala inglês".
- **Sugestão:** marcar os exemplos como "formato pt-BR" ou tirá-los da marca ativa, e derivar o `lang`
  da cena do `canal.json`.

### 7. Doutrina de mídia verificada para quatro bancos: serve a qualquer canal que os assine
- **Onde está:** `marca/midia.md` deste canal. Shutterstock, Motion Array, Envato Elements e
  Storyblocks, com as regras lidas nas páginas oficiais e checadas por um segundo agente. Fontes no
  próprio arquivo.
- **O que vale para qualquer nicho, inclusive culinária:**
  - "editorial use only" não entra em vídeo monetizado;
  - as licenças individuais são de uma pessoa só, então editor contratado não fica coberto;
  - a assinatura precisa estar ativa quando o vídeo vai a público;
  - no Motion Array, vídeo privado que vira público depois do cancelamento fica descoberto.
- **Sugestão:** virar `template/marca/midia.md` do motor, com as regras gerais.

## 23/09/2026 — o dono pergunta "de onde parte o master?" (motor em `ffb3ec0`)

### 8. Nada produz o master, e o onboarding não diz de onde ele vem
- **O problema:** a linha começa no `ingest`, que transcreve um master editado. O dono de um canal
  novo não tem vídeo nem roteiro. O `ONBOARDING.md` Passo 5 manda abrir a primeira produção sem dizer
  de onde vem o master.
- **O que falta antes da Régie:** não há passo nem ofício de pauta, pesquisa, roteiro ou locução, e o
  planejamento não prevê nenhum. Esses ofícios existem no agent-core (`pesquisador-de-pauta`,
  `roteirista-narracao`, `critico-de-roteiro`, `verificador-de-fatos`, `critico-de-locucao`), mas não
  vieram para a Régie.
- **Canal faceless:** os ofícios supõem apresentador. O montador tem cota de rosto de 10–15 % e
  veredito `manter` = rosto em tela. O decupador parte de câmera e microfone do apresentador, e o
  editor-de-arte chama a base de "master do apresentador". A palavra "faceless" não aparece no motor.
  Este canal anulou a cota na marca (`identidade.md` §5).
- **Sugestão:** o onboarding perguntar "você já tem master?" e, se não, apontar o caminho. Os ofícios
  de roteiro do agent-core são candidatos a entrar na linha.
- **Por que serve a qualquer canal:** todo canal novo começa sem master.

### 9. As estações determinísticas da linha estão vazias
- **O problema:** `ingest`, `render` e `finalize` têm `craft: null`, e não há código em `src/` que
  transcreva, renderize ou gere o XMEML. A `CRITICA-DE-COMPLETUDE.md` §A1 já diz isso.
- **Onde vai virar promessa:** o `CLAUDE.md` que o gerador escreve em todo canal diz "entrega a camada
  visual como XML de 5 camadas". O dono lê isso como pronto.
- **Sugestão:** o template dizer o que existe hoje. Enquanto o motor não tiver essas peças, cada canal
  vai escrevê-las sozinho, e isso é justamente a divergência que a Régie existe para evitar.
- **O que este canal tem disponível na máquina:** `faster-whisper` com large-v3 (tempo por palavra),
  ffmpeg 8.1, Premiere Pro 2026. As específicas de
  geopolítica (Storyblocks proíbe uso *political*; Shutterstock proíbe modelo em contexto político)
  ficam no canal.

## 23/09/2026 — o dono pede a linha "do zero ao XML" (motor em `44cf6f7`, v0.1.0)

### 10. Proposta: a linha `long-form-from-scratch`, e o que ela revelou no `init`
- **O pedido do dono:** tema → pauta → roteiro → revisão → voz (ElevenLabs) → transcrição com
  tempos → plano de cenas → pesquisadores → cena a cena em HTML → portões por lente → XML.
- **Onde está:** `propostas/linha-do-zero/PROPOSTA.md`, e a linha pronta para copiar,
  `pipeline-long-form-from-scratch.json`. São 25 passos e 61 arestas: 13 passos novos e 12
  reaproveitados da `long-form`, com todos menos o `cut_detect`. Quatro passos são aprovação do dono.
  A proposta tem 21 decisões em aberto, entre elas voz, bancada das cenas e onde mora a linha.
- **A prova, feita num clone descartável do motor:**
  - canal novo nascido na linha: doctor PASS, 36 de 36 gatilhos no destino certo e 56/56 testes;
  - **migrar um canal que já existe quebra o banco.** O `semear` nunca apaga passo, então o
    `cut_detect` fica órfão, o doctor dá FAIL e a produção parada nele fica presa. Apagar à mão
    esbarra em chave estrangeira;
  - **`regie init` sem argumento volta a linha para `long-form`**, e é isso que o procedimento de
    atualização manda rodar. Num canal da linha nova, o resultado é FAIL permanente.
- **Outros defeitos que a prova mostrou:**
  - o `advance` reabre um vídeo concluído;
  - um passo `human` é igual a qualquer outro: mesmo ator e nenhuma `decision`;
  - o aviso de "sem retake" só conhece o gatilho literal;
  - o CLAUDE.md do gerador diz "não gera vídeo do zero" mesmo em canal da linha nova.
- **Consequência para este canal:** enquanto os itens 1, 2 e 2b da §6 da proposta não forem
  corrigidos no motor, o Alpha Point continua na `long-form`. Hoje ele tem 0 produções, então a
  migração, quando vier, é barata.
- **Por que serve a qualquer canal:** todo canal novo começa sem master (item 8), e os dois defeitos do
  `init` atingem qualquer canal que use uma linha diferente da padrão.

### 11. Prontidão dos ofícios: as specs existem, os portões não
- **A pergunta do dono:** "já temos specs de como construir o pesquisador, o revisor…?"
- **A resposta:** sim, como specs de ofício. Os 4 documentos existem no agent-core, e o
  `qc-spec-agentes` deu zero erro nas 50 definições. Mas **nenhum portão que os ofícios mandam
  rodar vem junto**, e isso é de propósito (`agent-core/CAPACIDADES.md:5-7`; `INSTALL.md:59-62`).
  O `conferir-capacidades.mjs` mede **0 de 89** capacidades no motor e neste canal. O próprio
  `INSTALL.md:80-83` avisa que, sem o script, o agente improvisa e diz que verificou.
- **Onde os portões estão:** no clone legível do estúdio antigo, `Downloads\top10-estudio-analysis`
  (commit `1af7f44`, 17/09/2026). Ele tem **76 de 89** capacidades e todos os scripts de runtime:
  `check-overlap`, `qc-*`, a bancada do roteiro, `xml-premiere-5camadas.mjs` e os schemas em
  `contratos/`. Não roda como está: falta `node_modules` (`playwright-core`), os scripts partem da
  raiz do estúdio e carregam a marca dele. **O trabalho é portar e adaptar, não construir.** A
  Régie já planeja isso (`docs/planejamento/PLANO-CONSOLIDADO.md:318`). Portar é decisão de Lucas e
  Mateus.
- **O instalador do agent-core (`ferramentas/instalar-agentes.mjs`), para quem for usar:**
  - projeta os 46 ofícios ativos de uma vez, sem filtro por ofício; o único recorte é `--emitir=<id>`;
  - sem `--dest`, instala em `~/.claude/agents`, que vale para todas as sessões;
  - grava lock em `~/.agent-core/install-locks` até no `--dry-run` e no doctor;
  - deixa a SPEC fora do texto projetado, então regra que só está na SPEC não chega ao agente;
  - não põe `StructuredOutput` na lista de ferramentas, e a saída estruturada some sem erro
    (`regie/docs/planejamento/DESPACHO.md:105-107`).
- **Defeitos nos documentos dos ofícios:**
  - o `executor-de-molde` só tem permissão de leitura, e o CONTRATO manda gravar HTML;
  - a prova da SPEC usa campos que o CONTRATO não tem em `pesquisa-dados`, `-documentos`, `-logos`
    e `-pessoas`;
  - o `pesquisa-geo` grava em `data/` pela SPEC e em `assets/geojson/` pelo CONTRATO;
  - o all-intra só vive na SPEC da `pesquisa-imagens`, e o transcode do OFICIO não o produz;
  - as lentes do roteiro usam vereditos diferentes: APROVADO/REPROVADO de um lado, PASS/RESSALVA/FAIL
    do outro;
  - `ferramentas/qc-oficio-portatil.mjs:216` compara `import.meta.url` com `file://`+argv[1]. No
    Windows isso nunca casa, e o CLI sai 0 sem imprimir nada.
- **A ADR 0003 se contradiz com o código:** a `docs/adr/0003-portabilidade-do-desenho.md:227` diz
  que a Régie nunca copia ofício, e o `crafts/ORIGEM.json` documenta a cópia. Além disso, o hash que
  a Régie guarda (`src/crafts.mjs:26`) não é o Source-SHA256 do recibo do agent-core. Os dois nunca
  batem.
- **Evidência:** `propostas/2026-09-23-prontidao-dos-oficios.fontes.json`.
- **Por que serve a qualquer canal:** qualquer canal que instale os revisores hoje recebe laudo sem
  medição de verdade.

## 23/09/2026 — o primeiro dossiê de pauta (Juneau), com o `pesquisador-de-pauta` rodado à mão

### 12. O que o ofício pede e o motor ainda não tem, visto num dossiê de verdade
- **Onde está:** `pautas/juneau/`. `fundamento.json` é o objeto canônico, `fundamento.md` é a projeção
  derivada dele por script, e `verificacao.json` guarda o log do verificador. Os números: 175 fontes nas
  cinco dimensões, 157 números, 93 datas, 72 divergências atribuídas e 16 lacunas, nenhuma que bloqueie.
  Um verificador cético por dimensão reabriu as fontes e corrigiu 94 itens (fontes, números e datas); nenhum foi derrubado.
- **O schema `pauta-fundamento` v2 não existe.** O CONTRATO do ofício o exige, mas ele não está no
  agent-core nem na Régie. O canal usou uma forma provisória, com os campos do CONTRATO, e o campo `schema`
  declara isso. Quando o motor trouxer o schema, este JSON se converte sem refazer a pesquisa
  (CONTRATO, "Retomada e custo").
- **O verificador por dimensão não basta; precisa de um crítico entre as dimensões.** Três erros só
  apareceram cruzando dimensões:
  - um voto de 1982 e outro de 1962 vinham de listas-resumo oficiais com erro de digitação, e duas
    dimensões os tratavam como oficiais. Os boletins, conferidos na imagem, dizem outra coisa;
  - uma correção pela inflação era inválida, porque a cifra de 1982 é estimativa em dólares correntes
    até 1994, com financiamento. Isso estava no folheto oficial, que outra dimensão tinha aberto;
  - treze origens apareciam com duas chaves de independência, o que é falsa corroboração.
  - **Sugestão:** o passo de pesquisa ter, além da verificação, uma síntese transversal com dono.
- **Passagem literal × direito autoral.** O ofício exige a passagem literal de cada afirmação, e o dossiê
  é versionado. Com 48 fontes de imprensa, isso acumula texto de jornal no git: uma única coluna tinha
  391 palavras citadas. O canal cortou as passagens de imprensa em 20 palavras, com teto de ~150 por
  fonte, e manteve a íntegra só na máquina. Documento de governo não foi cortado. **Sugestão:** o
  CONTRATO dizer quanto de uma obra protegida cabe no artefato versionado.
- **Onde guardar a evidência baixada.** Foram cerca de 500 MB de PDFs e páginas, a prova de cada
  passagem. A Régie não tem lugar para isso. O canal pôs tudo em `midia/juneau/fontes/`, que não vai ao
  git, e o `arquivo_local` de cada fonte aponta para lá.
- **Por que serve a qualquer canal:** todo canal que rodar o `pesquisador-de-pauta` vai esbarrar no
  schema ausente, na passagem de imprensa versionada e no lugar da evidência.

## 23/09/2026 — o primeiro roteiro (Juneau), com o `roteirista-narracao` e a bancada de quatro lentes

### 13. O laço de revisão da bancada regride sozinho; o que funcionou foi a lista fechada
- **Onde está:** `roteiros/juneau/`. A narração pura é `roteiro-narrador.md`; `roteiro-editor.md` diz de
  onde vem cada frase e traz a lista de auditoria; `roteiro.json` é o manifesto; os laudos estão em
  `qc-roteiro/`; e há uma folha de pronúncia. São 1.771 palavras, cerca de 11,4 minutos.
- **O que aconteceu:**
  - três planos concorrentes e um juiz; as partes escritas em sequência, cada uma só com as evidências
    atribuídas; um gate determinístico antes da bancada;
  - três rodadas de "bancada julga, roteirista reescreve tudo". A segunda foi a melhor. Na terceira, as
    quatro lentes reprovaram, e o crítico de roteiro disse que os achados já eram criados pela rodada
    anterior (OFICIO §3.1);
  - **o que destravou:** uma lista fechada de 10 mudanças, com os conflitos entre lentes resolvidos
    antes (a clareza pedia cortar vozes que o crítico mandava não tocar), aplicada cirurgicamente, sem
    tocar no resto. Depois, só consertos com a redação que os próprios revisores deram, e a
    reverificação apenas das frases trocadas, com prova por diff de que nada mais mudou;
  - **resultado final:** fatos PASS (132 de 132 itens, mais as 4 trocas finais), clareza PASS, crítico
    de roteiro e locução com ressalvas leves.
- **Três lições para o motor:**
  1. **O veredito é de uma revisão, não do roteiro.** As lentes julgaram textos diferentes (a clareza,
     a rodada 4; o crítico, a revisão anterior às 4 trocas; os fatos, a final). O canal registrou o
     sha256 da narração em cada laudo. A Régie não tem onde guardar isso: `attempt` e `decision`
     existem no schema, mas nada os escreve (item 10).
  2. **"Reescreva tudo" não é conserto.** Toda passada completa criou defeitos novos, inclusive dois
     factuais: um "because" sem fonte e uma estrada "never extended" que foi construída em 2006. O passo
     `retake` da linha precisa carregar a lista de achados e o que não tocar, e não só "volte ao roteiro".
  3. **Falta dono para a pronúncia.** O crítico de locução reprovou por falta de uma folha de pronúncia
     para nomes como Tlingit e Gladziszewski, e nenhum ofício a produz. O canal gerou uma, com fonte por
     termo, e oito termos ficaram sem confirmação.
- **Os ofícios em pt-BR serviram ao inglês** com adaptação dita no prompt: homófonos e números do
  inglês, e voz sintética ou humana.
- **Por que serve a qualquer canal:** todo roteiro passa pela bancada, e o laço de revisão é igual em
  qualquer nicho.

## 24/09/2026 — a aprovação do roteiro pelo dono (motor em `44cf6f7`, v0.1.0)

### 14. O dono decide melhor numa página com a troca exata; e o subagente precisa ouvir a regra do anti-robô
- **O problema:** depois da bancada sobraram cerca de 25 pendências, espalhadas por quatro laudos e pelo
  histórico. Várias puxavam para lados opostos: a frase do petróleo tinha três pedidos diferentes, e a
  clareza queria mexer numa abertura que o crítico protegia. Em texto corrido, no chat, o dono não tinha
  como decidir item por item.
- **O que resolveu:** uma página publicada com uma pendência por item. Cada item traz o trecho de hoje, as
  opções com a troca exata (riscado o que sai, sublinhado o que entra, mais o saldo de palavras), a
  recomendação com o motivo e um campo de comentário. As marcações ficam guardadas na própria página, e o
  Claude as lê de lá. Antes de publicar, um script conferiu que cada troca casa uma vez só no texto e rodou
  o gate no conjunto recomendado. Uma conferência adversarial achou erros na própria página: uma atribuição
  errada entre revisores, um "57% dos eleitores" que o boletim oficial não sustenta e um "a few years" para
  seis anos. Depois da aprovação, as 14 trocas foram aplicadas verbatim (o texto final é byte a byte o que
  a página mostrou), e as quatro lentes julgaram o mesmo sha: APROVADO, PASS, PASS e PASS. Foi a primeira
  vez que todas as lentes leram a mesma revisão.
- **O incidente:** na conferência dos fatos voláteis, um subagente levou 403 do site do Legislativo do
  Alasca e tentou de novo por `curl`, o que contornou o bloqueio. O verificador e o crítico, que tinham a
  regra no pedido, pararam no bloqueio e usaram a cópia local. A regra agora está no `CLAUDE.md` do canal
  e em todo pedido a subagente que usa a rede. O dono escolheu conferir o site pelo navegador do app, com
  ele vendo.
- **Para o motor:**
  1. `script_approval` é um passo humano, mas a Régie não guarda o que foi aprovado. Aprovação sem sha e
     sem as escolhas não prova nada (item 13, lição 1). O canal gravou tudo em
     `roteiros/juneau/aprovacao.md`.
  2. A página de decisões serve a qualquer passo humano da linha (roteiro, pauta, marca). O gerador está em
     `roteiros/juneau/_ferramentas/pagina-de-decisoes/`.
  3. Todo pedido que dá rede a um subagente tem de dizer que não se contorna 403, captcha ou verificação.
     Sem a frase, o subagente trata o bloqueio como erro técnico a resolver.
- **Por que serve a qualquer canal:** todo canal tem passos que só o dono decide, e subagentes com rede.

## 24/09/2026 — título e miniatura do primeiro vídeo (motor em `44cf6f7`, v0.1.0)

### 15. "Como as referências" se mede, e título e miniatura passam por leitores a frio antes do dono
- **O problema:** o dono achou o título de trabalho fraco e pediu "algo mais como as referências". Os redatores
  não conheciam as referências além do nome no `marca/identidade.md`. A primeira rodada de propostas ignorava
  o estilo delas.
- **O que resolveu:**
  1. **Medir as referências.** Foram lidos os últimos 30 vídeos de cada canal de referência, com views, na
     página pública, e as miniaturas que mais renderam, vistas pelo navegador do app. Disso saíram os moldes: o
     Geography Effect escreve "Fato. Virada.", "Why + lugar + paradoxo" e põe dinheiro no título; o Big Systems
     faz pergunta curta; o Capital Financeiro usa o parêntese.
  2. **Um redator por molde**, e um júri com uma lente a mais: "caberia na grade da referência?".
  3. **Prova dos 5 finalistas.** Um refutador de fatos por finalista e três leitores americanos a frio, de
     perfis diferentes, que viram só o título e o texto da miniatura. Os leitores acharam o que o júri não viu:
     "capital" lida como dinheiro ao lado de "price"; "survive a vote" lida como votação derrotada; título sem
     data lido como notícia da semana; e o finalista 5 entrega o final.
  4. **Banca da miniatura.** A miniatura, em HTML renderizado pelo Chrome sobre satélite de domínio público,
     passou por quatro lentes: tamanho de 168×94, geografia por coordenadas, marca, e leitura a frio. A primeira
     versão, feita com o escurecimento da regra de vídeo (65/70), ficou escura demais para o feed: luminância
     média de 60/255. Isso virou regra própria de miniatura em `marca/embalagem.md`.
- **Para o motor:**
  1. A marca de um canal precisa dos moldes de título das referências, não só dos nomes delas. Um passo de
     onboarding poderia medi-los (títulos, views, miniaturas) e gravá-los numa `marca/embalagem.md`.
  2. A miniatura não é uma cena de vídeo. Escurecimento, margens, canto reservado e tamanho do anel mudam, e
     o canto que importa é o da duração, não o da marca-d'água. Vale ter um contrato de miniatura separado do
     contrato de cena.
  3. Leitor a frio (um agente sem o roteiro, com persona) é barato e acha a ambiguidade que quem leu o roteiro
     não vê. Serve a qualquer passo que o público lê sem contexto: título, miniatura, primeira frase.
- **Por que serve a qualquer canal:** todo canal tem referências e publica título e miniatura para um público
  que não leu o roteiro.

## 24/09/2026 — a voz do narrador na ElevenLabs (motor em `44cf6f7`, v0.1.0)

### 16. A escolha da voz: as vozes padrão vão acabar, o v3 prefere voz desenhada, e a prévia é pública
- **O problema:** era preciso escolher a voz do narrador (eleven_v3) sem gastar crédito. Também não havia a chave
  de API nesta máquina. A pesquisa pela web não achou nenhum link de prévia: a biblioteca de vozes do app pede
  login, e a API de vozes compartilhadas pede chave.
- **O que resolveu:**
  1. **As páginas públicas de categoria** (`elevenlabs.io/voice-library/<categoria>`, por exemplo `credible`,
     `straightforward`, `news-anchor-voices`) trazem nos dados da página, e não no texto, o nome, a descrição, o
     `voice_id` e o link da prévia de cada voz. A prévia toca sem login. Lidas pelo navegador do app, elas
     viraram uma página de audição (`marca/vozes.html`).
  2. **Como saber se a voz é desenhada ou clone.** Algumas vozes trazem, junto da ficha, o texto e a semente
     com que foram criadas (`voicePrompt`, `generationSeed`): essas são de Voice Design. As outras são clones
     de locutor (PVC).
  3. **O que a documentação da ElevenLabs diz** (conferido por um verificador em 24/09/2026):
     - as vozes padrão antigas (Brian, Adam, Roger…) expiram em 31/12/2026;
     - clone profissional ainda não está totalmente otimizado para o v3, e o guia recomenda voz desenhada ou
       clone instantâneo;
     - o v3 não aceita SSML e não costura pedidos;
     - o limite é de 5.000 caracteres por pedido;
     - números, datas e siglas vão por extenso no texto.
  4. **Refazer a voz que quase serve.** A voz de que o dono mais gostou soava velha. O texto de descrição dela é
     público, então foi refeita no Voice Design com o mesmo texto, trocando só o que a envelhecia ("middle-aged",
     "veteran", "gravitas", "measured pace"). A nova foi a escolhida. Custou só o texto da prévia (282 créditos),
     e o Voice Design devolve 3 opções.
  5. **O que o site da ElevenLabs faz sem avisar:**
     - no Text to Speech com o v3, cada clique gera 2 versões e cobra uma vez;
     - ao trocar para o v3, a voz volta para uma padrão;
     - no editor do v3, uma linha em branco entre parágrafos faz o contador contar só o primeiro. Use uma
       quebra simples e confira que o contador bate com o tamanho do texto antes de gerar;
     - para clone profissional, o próprio site recomenda o Multilingual v2, não o v3;
     - no v3 não há controle de velocidade; no v2 há, mas a velocidade 1,05 ainda saiu mais lenta que o v3;
     - no site, o editor do v2 também para em 5.000 caracteres (os 10.000 da documentação são da API);
     - a estabilidade do v3 tem só três posições: Criativo, Natural e Robusto.
  6. **"Lido" tem duas causas, e as duas foram testadas antes de mexer no roteiro inteiro.** Com a narração pronta,
     o dono achou o texto "lido". A prova usou só o trecho de abertura:
     - reescrito em tom de conversa por 3 redatores, 3 lentes (fatos, persona, ouvido americano) e um conferente
       de fatos;
     - lido pela voz de antes e por um **Remix de Voz** com força "Baixa", que mantém o timbre e muda o jeito de
       falar.

     O Remix venceu. A lição: **uma voz desenhada como "news anchor" lê como âncora**. Para narração que
     conversa, descreva quem conta, não quem apresenta o jornal. E faça a prova com um trecho curto: o custo é de
     uns 1.500 créditos, contra os uns 11.000 de uma narração inteira.
  7. **Pausas "programadas".** No v3 com estabilidade "Natural" e quebras de linha entre os parágrafos, o dono
     ouviu pausas de tamanho fixo. Com o bloco numa linha só e a estabilidade em "Criativo", soou natural. O preço
     é conferir as palavras de cada bloco, porque o "Criativo" pode pular ou trocar alguma.
  8. **O navegador do app corta downloads grandes.** O MP3 de um bloco de 4 min 29 s chegou com 1,8 MB e 112 s,
     duas vezes no mesmo tamanho. Para áudio longo, baixe por outro caminho.
- **Para o motor:**
  1. `narracao.voice_id` não pode apontar para voz padrão antiga: ela some em 31/12/2026.
  2. A amostra paga tem de sair no mesmo modelo da narração. A prévia de um clone pode enganar no v3.
  3. A cópia para a voz (`roteiros/juneau/_ferramentas/preparar-voz.mjs`) serve de molde para uma estação: grafia
     por extenso, aliases de pronúncia e a prova de que desfazer as trocas devolve o texto aprovado byte a byte.
- **Por que serve a qualquer canal:** todo canal com narração sintética escolhe uma voz. As regras do modelo e o
  prazo das vozes padrão valem para qualquer nicho.


## 25/09/2026 — a pré-v1 (`1.0.0-rc.1`, `7ab9543`) vista de um canal v0.1.0

### 17. O que a pré-v1 resolve para um canal v0, e o que tropeça quando se olha deste lado

- **Problema:** o dono quis usar o que a pré-v1 já resolve (transcrição, render, XML, mídia) sem esperar a tag, e
  com o Juneau no meio da entrega.
- **O que resolveu:** clonar a pré-v1 à parte, só para leitura, e chamar as ferramentas por caminho, de dentro do
  canal, sem migrar o banco. Antes disso, pôr no `.gitignore` o bloco de `out/` que o `create-regie` escreve.
  Um levantamento lido no código, com um verificador cético por proposta, separou o que roda isolado do que exige
  a v1 inteira (CLAUDE.md, "Peças da pré-v1 em uso").
- **Para o motor (vale avisar o Lucas Barrios e o Mateus).** O levantamento leu estes pontos no código, com arquivo e
  linha. Não rodei cada um:
  1. O `regie atualizar` não traz `.gitignore`: o molde não tem um. Num canal v0, o áudio, os clipes e a mídia de
     `out/` iriam para o GitHub no primeiro commit (`bin/create-regie:380-393` × molde).
  2. Rodado de um clone sem tag, o `atualizar` grava `motor.caminho` = o clone e `motor.versao` = `1.0.0-rc.1`
     (`bin/regie:124-129`). O `canal.yml` clona o motor pela tag `v1.0.0-rc.1`, que não existe, e fica vermelho a
     cada push (`template/.github/workflows/canal.yml:30-35`).
  3. O `atualizar` preenche `contato` com o `git user.email`, e ele vai no User-Agent para a Wikimedia e o OSM
     sem o dono decidir (`bin/regie:103-106`; `src/midia/canal.mjs:53-63`).
  4. O `marca.schema.json` é fechado em 10 cores (`:47-62`). Uma paleta por papéis, como a deste canal, não cabe
     sem perda. Sem `marca.json`, o molde põe a marca neutra ao lado, e um `marca gerar` posterior sobrescreve o
     `tokens.css` próprio (`src/molde.mjs:84-100`).
  5. O `.claude/settings.json` do molde libera `git push`, `gh pr create`, edit e comment, e um hook de início de
     sessão (`template/.claude/settings.json:4-78`). É mudança de permissão: devia pedir o ok do dono.
  6. `template/marca/midia.json:22-24` diz que Storyblocks, Envato e Motion Array são contas do Top10. Aqui as
     contas são individuais, de assento único (`marca/midia.md`).
  7. O `regie init` sem argumento ainda cai em `long-form` (`bin/regie:76`), e a máquina de estados não mudou
     (`src/state.mjs` igual ao da v0.1.0). O item 10 continua valendo.
  8. O `alinhar-timestamps` no faceless deixa vãos e sobreposições. Medido: a s01 terminou em 4,10 s e a s02
     começou em 4,05 s, e ficaram vãos de 0,08 a 0,15 s. O checador não pega.
  9. O `_commons-baixar` baixa qualquer licença e só marca `licenca_aceita=false`, sem trava.
  10. O `qa-montagem` lê `file://localhost/C%3a/...` como `localhost/C:/...` e reprova referência certa no
      Windows (`template/.claude/agents/qa-montagem.md:455-461`).
  11. O `src/rotinas/rodar.mjs:159-174` recusa o `claude.cmd` instalado pelo npm, que é o desta máquina.
  12. No Windows, `import()` de caminho absoluto sem `file:///` falha com `ERR_UNSUPPORTED_ESM_URL_SCHEME`.
  13. O doctor da pré-v1, num canal v0, manda rodar `atualizar --aplicar` e `autonomia instalar --aplicar`. O
      segundo grava nas configurações de usuário do Claude. A sugestão é forte demais para quem não é técnico.
  14. O `narrar.mjs` não baixa do histórico: canal que gerou pelo site paga de novo ou baixa à mão. Um
      `--do-historico` (`GET /v1/history` + `/audio`) resolveria.
  15. O `medirCobertura` do `transcrever.mjs` conta palavras com ±10 % por trecho. Em blocos de uns 600
      palavras, deixa passar frase pulada e não vê palavra trocada, que é justamente o risco do v3 em "Criativo".
  16. O `geo-recorte-bbox --nome=…` grava o mesmo `name_pt` em TODAS as features do recorte: o Canadá saiu
      rotulado "Sudeste do Alasca". Aqui, rodamos sem `--nome`.
  17. O `derivado_por` da procedência geo resume o comando (sem o projeto e o `--slug`): dá para refazer, mas não é
      o comando literal.
  18. O leitor de marca dos portões (`template/scripts/lib/marca-tokens.mjs`) procura o motor v0.1.0 do canal e,
      sem achar o da pré-v1, usa os pisos de reserva ("Não achei o motor"). Hoje os valores coincidem.
  19. O que funcionou de primeira no Windows desta máquina (RTX 5060, Chrome, ffmpeg 8.1): `quadro.mjs` e
      `renderizar.mjs --4k` (75 quadros em 23,8 s, ANGLE/D3D11, sem aviso), `baixar-fonte.mjs`,
      `geo-pais-completo` e `geo-recorte-bbox`. Um `quadro.mjs --escala=2` de 3840×4400 derrubou o Chrome.
  20. Falta uma ferramenta de **pontos de cidade do Natural Earth** (`ne_10m_populated_places_simple`, domínio
      público). Hoje o caminho de ponto é o `geo-lugar-osm`, que é ODbL e põe crédito na tela. O canal escreveu
      `out/juneau/_pesquisa/cidades-ne.mjs`, que grava pelo `gravarGeo` da pré-v1. Um `geo-pontos-ne` no
      motor serviria a qualquer canal.
  21. O `geo-recorte-bbox` só herda a licença quando a camada tem `name` no topo. A de rios do NE não tem, e o
      recorte sai sem licença se não se passar `--fonte`, `--licenca` e `--fonte-url` à mão.
  22. O NE 1:10M não tem rio que costuma aparecer em mapa de região (aqui: Taku, Chilkat, Knik, Matanuska). A
      ferramenta de rio do OSM depende do Overpass, que respondeu 504 três vezes seguidas em 25/09. A saída foi
      a geometria que o próprio Nominatim devolve (`polygon_geojson`), registrada com licença ODbL. Na mesma
      tarde o Overpass respondeu (espaçando as tentativas), e o Taku foi refeito pelo `geo-osm-rota`.
  23. O `geo-osm-rota` costura os ways de uma relation pelas pontas. Em estrada com pista dupla e rotatória
      (a Alaska Route 7 em Juneau), saíram 21 órfãos e a linha parou no meio. O canal montou o caminho mais
      curto no grafo dos ways (vértice = coordenada) e entregou ao `--in` como um way só
      (`out/juneau/_pesquisa/estrada-juneau-cascade.mjs`). Um modo "de A até B" na ferramenta serviria a
      qualquer mapa de rota.
  24. **Base de satélite de domínio público não cabe nos perfis.** Os três perfis de base da pré-v1 (aberto = EOX
      2016, vetorial, maptiler) são de tiles na rede. Landsat e NASA, que a identidade deste canal aceita sem crédito
      na tela, não têm perfil. O canal fez a cena de teste `out/prova-mapa/graphics/landsat-juneau.html` ler uma base
      própria (`window.__BASE_CANAL`: fonte `image` do MapLibre, imagem local já em Web Mercator) no lugar do perfil,
      e barrar se ela faltar. A imagem veio do Planetary Computer, sem conta
      (`out/prova-mapa/_pesquisa/base-landsat.py`). Um perfil do tipo "imagem local", mais uma ferramenta que monta o
      Landsat de uma janela, serviriam a qualquer canal que queira satélite sem chave e sem crédito na tela.
  25. O molde de mapa não aplica tratamento à base (brilho, saturação), e o crédito dele tem medida fixa (46 px em
      x = 154). A marca deste canal pede base a 65 % de brilho e 70 % de saturação, e crédito de 76 px em x = 200,
      na faixa abaixo de y = 1880. A cena de teste acertou isso à mão. O molde poderia ler os dois dos tokens.
  26. O `_creditos-mapa.md` que o `preparar-cena` grava só conhece os perfis da pré-v1. Numa cena com a base do
      canal, ele escreveu o crédito da EOX, que a cena não usa. O canal apagou o arquivo e gravou a procedência
      certa em `out/prova-mapa/_pesquisa/base-landsat.json`.
  27. **`quadro.mjs` não fotografa cena de satélite nesta máquina** (Windows, Node 24). Ele pede PNG ao Chrome pelo
      CDP, e a conexão cai (WebSocket 1006) quando a resposta passa de uns 4 MB: 2,9 MB passou, 6 MB derrubou. Um
      quadro de foto de satélite em PNG passa disso, até em 1080p. O `renderizar.mjs` pede JPEG 95 e passa: a cena
      saiu em 4K por ele, e o quadro parado se tira do vídeo com o ffmpeg. Um `quadro.mjs --jpeg`, ou a foto em
      pedaços, resolveria.
  28. **O eleven_v3 corta texto longo e para no fim de uma frase, sem erro.** Das 6 gerações do Juneau
      (blocos de 3.466 a 3.827 caracteres, "Criativo", pelo site), 5 terminaram antes do texto: disseram de 41 %
      a 90 %. Como a voz para numa fronteira de frase, o corte soa como um final natural e passa no ouvido. A
      referência do Text to Dialogue da ElevenLabs pede até 2.000 caracteres por pedido para evitar "premature
      termination". No `narrar.mjs`, o `LIMITE_TRECHO` é 4.500: parágrafo longo passaria disso. E o portão de
      cobertura do `transcrever.mjs` (±10 %, achado 15) deixaria passar o corte da 1a, que perdeu 9,4 % no fim.
      Conferir cada geração palavra a palavra pega o corte (`out/juneau/_pesquisa/comparar-narracao.py`).
      Pedir por parágrafo resolve: refeitos pelo `narrar.mjs` (23 parágrafos, de 3 a 26 s cada), os blocos 2 e 3
      vieram completos, sem nenhum corte. A conferência por parágrafo ainda achou uma troca de verdade: "1984" no
      lugar de "1994", que os dois modelos do Whisper ouviram. Com `--refazer=8`, saiu certo. Então pedir
      curto evita o corte, mas não dispensa a conferência (`conferir-paragrafos.py`).
  29. O faster-whisper com `condition_on_previous_text=False` duplica a última palavra na emenda das janelas de
      30 s ("the point. point."). Quem compara transcrição com roteiro vai ler isso como eco da voz. Transcrever
      de novo só o recorte em volta resolve (`conferir-trechos.py`). Nesta máquina, a placa de vídeo não roda o
      faster-whisper (falta a cuBLAS 12 da NVIDIA); no processador, o large-v3 leva ~1 min por minuto de áudio.
  30. **No `narrar.mjs`, a `pausa_paragrafo_s` não é a pausa que se ouve.** Cada trecho do eleven_v3 pela API já
      começa com ~0,06 s de silêncio (e termina com ~0,02 s). Com 0,2 s, o silêncio entre parágrafos saiu ~0,28 s,
      o dobro dos ~0,14 s de uma leitura contínua do site. Num teste às cegas, essa pausa dobrada foi o que o dono
      mais ouviu como "outra voz" na emenda entre um bloco gerado no site e o resto gerado pela API. Encurtar a
      pausa resolveu, sem gasto e só com o cache. O timbre pesou pouco: o v3 não tem "request stitching", e cada
      pedido abre um pouco mais claro, mas um EQ para compensar não melhorou nada no ouvido. Serviria ao narrar:
      medir o silêncio das pontas de cada trecho e descontá-lo da pausa, ou documentar que ela se soma a ele.
  31. **O `narrar.mjs` cola os trechos da API no silêncio digital da pausa sem esmaecer as pontas**, e a API
      costuma terminar o trecho "seco", com a voz ainda soando. No Juneau, 14 dos 36 fins de parágrafo davam um
      estalo (salto de até 0,21 da última amostra para o zero). Resolveu, no canal, esmaecer 5 ms na entrada e 15 ms
      na saída de cada trecho, sem mudar o comprimento (`out/juneau/_pesquisa/tratar-narracao.py`). Como o narrar
      remonta a `narracao.wav` a cada rodada, o tratamento tem de vir depois. Serviria ao narrar: esmaecer na
      própria montagem.
  32. **A API do eleven_v3 pode cortar o último som de um parágrafo, e a conferência por palavra não vê.** No
      Juneau, um parágrafo terminou no "r" de "ferry", sem o "-y". O Whisper escreveu "ferry" mesmo assim, por
      expectativa: probabilidade 0,715, contra 0,99 nos outros "ferry". Só a medida dos formantes (F2 que não subia)
      e um verificador cético pegaram. Serviria a qualquer conferência de narração: tratar como suspeita a última
      palavra de um trecho com probabilidade baixa, ou que acaba com a voz ainda soando.
  33. **Na v0.1.0, `regie open --help` abre um vídeo chamado "--help".** O `open` pega o primeiro argumento como
      slug, sem olhar se é opção, e não há verbo para fechar ou apagar um vídeo. Para desfazer, foi preciso copiar o
      `db/canal.db` e apagar a linha de `production` (o `event` sai em cascata). Serviria ao motor: recusar slug que
      começa com "-" e ter um verbo para descartar uma produção aberta por engano.
  34. **No canal sem apresentador, o vídeo acaba junto com a última palavra, e a tela final do YouTube cai em cima
      dela.** O master sintético dura o que a `narracao.wav` dura, e o `xml-premiere.mjs` apara toda cena que passa
      do fim (o slot `tela_final` termina "exatamente no fim da narração"). O `narrar.mjs` só põe silêncio entre
      trechos e nos cards, nunca depois do último. Os elementos finais do YouTube pedem de 5 a 20 s. Resolveu, no
      canal, uma cauda de silêncio digital acrescentada depois do tratamento (`canal.json` ›
      `narracao.cauda_tela_final_s`, aplicada pelo `tratar-narracao.py`), com o segmento
      `{tipo: "pausa", motivo: "tela_final"}` no `narracao.json`. A decisão tem de vir **antes** do relógio de
      palavras e do master, porque muda o sha da narração. Serviria ao narrar: uma `pausa_final_s` no bloco
      `narracao`, e a pergunta "tela final?" no roteiro de cada vídeo.
- **Por que serve a qualquer canal:** todo canal nascido na v0.1.0 vai passar por esta migração. Os itens 1, 2, 3 e
  5 afetam qualquer um no primeiro `atualizar`.

## 26/09/2026 — os especialistas da pré-v1 instalados num canal v0.1.0 (pré-v1 em `7ab9543`)

### 35. O `.gitattributes` que o `create-regie` escreve não protege os bytes que a procedência mede

- **Problema:** o apoio dos especialistas veio byte a byte do molde, com o sha256 de cada arquivo no `ORIGEM.json`.
  Duas bandeiras, `assets/flags/mn.svg` e `mn-contorno.svg`, vieram do estúdio com CRLF. O `.gitattributes` do
  canal (`* text=auto eol=lf`) as gravaria com LF no commit: num clone novo, o sha256 delas deixaria de bater com o
  `ORIGEM.json`, e a promessa de que o sha256 prova a origem cairia sem ninguém ver. Medido num repositório de
  teste: com o `.gitattributes` antigo, 134 de 136 arquivos de `assets/` batiam depois do clone; as duas bandeiras
  não.
- **O que resolveu:** `assets/** -text` no `.gitattributes` do canal, antes do primeiro commit do apoio. Com ela, 136
  de 136 batem no clone, com `core.autocrlf` `true` ou `false`. Os outros 364 arquivos novos (agentes, roupas,
  `scripts/`, `contratos/`, `knowledge/`, `seed/`, `regua/`…) não mudam no commit: o git grava os bytes crus deles.
- **Para o motor (vale avisar o Lucas Barrios e o Mateus):** a pré-v1 já tem `template/assets/** -text` no `.gitattributes` do próprio
  motor, com o comentário de 23/09 sobre esta mesma bandeira. Mas o `bin/create-regie:346` escreve no canal só
  `* text=auto eol=lf` e uma lista de extensões binárias, sem `svg` e sem a regra de `assets/`. Todo canal novo
  nasce com o mesmo furo.
- **Por que serve a qualquer canal:** qualquer canal que receba o apoio do molde herda as bandeiras.

### 36. O que a instalação dos especialistas mostrou, e que é do motor e não da roupa

- **Problema:** as roupas deste canal tinham começado a guardar estado de ferramenta ("o `quadro.mjs` cai com PNG
  acima de 4 MB", "o `qc-pais-bandeira` só conhece nomes em português") e regra de ofício. Nada disso é gosto do
  canal: vale para qualquer canal nesta máquina, e envelhece na primeira versão nova do motor.
- **O que resolveu:** a roupa diz o que fazer aqui e aponta para o `CLAUDE.md` ("Os especialistas", "Tropeços
  conhecidos do apoio"), que se atualiza com o motor. O `marca/agentes/LEIA-ME.md` do canal ganhou essa regra.
- **Para o motor (vale avisar o Lucas Barrios e o Mateus).** Medido no código ou no canal em 26/09:
  1. **O `renderizar.mjs` grava cena `4k-native` em 1080p quando falta `--4k`** (DPR 0,5), e o carimbo
     (`<id>.mp4.de-html`) guarda a resolução. Num canal 4K, um render de prova sem `--4k` obriga a renderizar de
     novo, e em cena de mapa paga os tiles de novo. As roupas deste canal omitiam o `--4k` nos comandos.
  2. **A tabela de marcadores traduz `roteiro-<persona>.md` como `out/<proj>/roteiro.md`**, que é o texto que o
     `narrar` lê. Num canal com folha de pronúncia, esse texto tem aliases (`Gladyshevsky` no lugar de
     `Gladziszewski`) e números por extenso: usado como grafia de tela ou como objeto do `verificador-de-fatos`,
     põe o alias na tela. O texto aprovado precisa de um marcador próprio.
  3. **A roupa do montador no molde põe `drone` como `modo`** (`template/marca/agentes/montador.md:78`). Desde
     07/ago o `modo` é `aereo-real`, e `drone` só vale em `midia`: o `validar-contrato` reprova (exit 1, medido).
  4. O `qc-pais-bandeira` compara com uma lista de nomes em português (`CANADÁ`): num canal en-US ele não conta
     `CANADA`, nem com o npm instalado.
  5. O `lib/erratas-gravadas.mjs` procura o laudo em `out/<slug>/qc-roteiro/entrada/`. Canal que guarda o dossiê
     fora de `out/` recebe NÃO MEDIDO.
  6. O `decupagem/corrigir-nomes.mjs` só corrige `words-final`/`words-limpo`: no faceless, que só tem `words.json`,
     sai com exit 2.
  7. O `scripts/lib/motor.mjs`, num canal cujo `motor.caminho` aponta a v0.1.0, diz "atualize o motor para a
     versão que o canal.json declara" (`MOTOR_SEM_ARQUIVO`) quando falta só a variável `REGIE_MOTOR`. O
     `stock/lib/ferramentas.mjs` importa o motor no topo (`await`), e o `procedencia-reconciliar` quebra com
     pilha e exit 1 até sem argumento: parece reprovação.
  8. O `LEIA-ME.md` das roupas no molde diz que as roupas vêm do Top10 e que o `testes/roupas.test.mjs` as
     garante. Esse teste só lê `template/marca/agentes/`: num canal, ninguém confere os caminhos das roupas.
  9. **Para o agent-core:** o `verificador-de-fatos` manda marcar o volátil para reconferir "antes da gravação".
     No Juneau, a reconferência depois da gravação achou um volátil com prazo (o HB 3 muda a frase se o vídeo sair
     depois de janeiro de 2027), e ficou a ordem de repetir na véspera de publicar
     (`roteiros/juneau/volateis-conferidos.md`). "Reconfira na véspera de publicar" serviria a qualquer canal.
  10. **Para o agent-core (`mapista`):** duas regras que o ofício não tem e que valem em qualquer canal. Saíram da
      roupa deste canal em 26/09.
      (a) O MapLibre não lê `var(--…)`: a cena lê os tokens com `getComputedStyle(document.documentElement)`, como
      o `tok()` da cena de teste do canal (`out/prova-mapa/graphics/landsat-juneau.html`). O molde
      `src/mapa/moldes/mapa-base.html` traz a cor do território cravada em hex (`#E8B04B`, linha 122).
      (b) Nunca acrescentar `--disable-gpu` ao Chrome: a rasterização por software cortava pedaços de cena
      (`src/lib/chrome.mjs:270`). O log que acusa SwiftShader ou llvmpipe vai ao report. Esta está na roupa do
      Top10 (`template/marca/agentes/mapista.md:393`), não no ofício.
  11. **Os portões não aceitam o mesmo alvo.** A maioria recebe o slug, mas o `qc-src-existe` só aceita
      `out/<proj>` ou o HTML e, com o slug, quebra com pilha de `ENOENT` e exit 1 (parece reprovação). O `qc-hex`,
      o `qc-contrato` e o `shot` saem 2 com o slug, e o 2 é o código de NÃO MEDIDO: quem lê só o código registra
      como NÃO MEDIDO um portão que mede. O `qc-laudo`, o `qc-cena` e o `qc-midia-real` já aceitam as duas formas;
      os outros deveriam também, ou sair com um código próprio de uso errado. Medido num canal de teste em 26/09.
      Nos portões que pedem npm, o aviso de npm vem antes da leitura do alvo e esconde o uso errado.
  12. **O estado de ferramenta que ainda estava nas roupas foi para o `CLAUDE.md`** ("Tropeços conhecidos do
      apoio"), em 26/09. A origem de cada linha, lida no código:
      - `buscar-midia` sem `marca/midia.json`: nenhuma fonte desligada pelo canal e largura mínima de 1600 px
        (`src/midia/canal.mjs:13` e `:20`; `src/midia/busca.mjs:251`). NARA só com `tipos: ["imagem"]`; LoC e
        Internet Archive com `desligada`, a LoC por 403 do Cloudflare, `medido_em` 23/09 (`src/midia/fontes.mjs`);
      - `image.upscale.classic`: nenhuma ocorrência em `src/` nem em `template/scripts/` da pré-v1;
      - `src/agent/data-tools.mjs`: só `ibgePopEstados` e `worldBank` (linhas 29 e 39);
      - `src/geo/catalogo.mjs:25-26`: lê `CACHE_GEO()` (`~/.regie/geo`) e `acervo/geojson` do motor, não o
        `assets/geojson/` do canal;
      - `scripts/navegacao/gerar.mjs:14-18`: "INOPERANTE NA v1";
      - relevo e câmera 3D da MapTiler: o `CLAUDE.md` (item 7) registra só um pedido de teste ao `satellite-v2`
        (200, 25/09), nenhum ao `terrain-rgb-v2`;
      - `assets/flags/`: as 89 PNG variam de 160 a 2560 px de largura (ffprobe em todas, 26/09). A primeira
        versão desta linha generalizou a `us.png` (320 × 168) para o conjunto, e o verificador derrubou. As do
        Juneau, `us.png` (320 × 168) e `ca.png` (320 × 160), são pequenas para o círculo de 640 px da PRANCHA;
      - PyMuPDF 1.28.0 importa no Python da máquina; nenhum PDF foi rasterizado com ele.
  13. **Para o agent-core (`editor-de-arte`):** uma lição que só estava na roupa do Top10, e que vale em qualquer
      canal: na procedência, a `licenca` decide **se** a peça leva crédito, e o `credito_na_tela` decide **como**
      ele aparece. Confundir os dois ou põe crédito em domínio público (poluindo a tela) ou tira o de CC BY (quebra
      a licença). Saiu da roupa deste canal em 26/09, porque é ofício, e a roupa aponta para cá até o ofício a ter.
- **Por que serve a qualquer canal:** os itens 1 a 3 e 8 atingem todo canal 4K, com folha de pronúncia ou com
  roupa copiada do molde; os itens 4 a 7, todo canal en-US, faceless ou nascido na v0.1.0; os itens 10 a 12,
  todo canal que despacha o mapista, roda os portões ou escreve roupa.

## 26/09/2026 — o relógio de palavras do Juneau sem o Scribe (pré-v1 em `7ab9543`)

### 37. Um relógio de palavras sem gasto, e o que as verificações derrubaram no caminho

- **Problema:** o `transcrever.mjs` da pré-v1 usa o Scribe, que é pago. O faster-whisper local sozinho erra a
  palavra da fronteira em pausas sem pontuação (12 de 230 no Juneau) e comprime os números (até 0,5 s). O
  alinhamento por caractere que a ElevenLabs guarda no histórico acerta o miolo e os números, mas põe a pausa dentro
  da palavra seguinte e, por ser o alinhamento do texto ENVIADO, não prova o que a voz disse.
- **O que resolveu:** `out/juneau/_pesquisa/ingest-local.py` (com `alinhamento-elevenlabs.mjs`, só GET no histórico,
  sem gasto). As palavras são as do texto aprovado; o tempo, o da ElevenLabs preso ao som nas pausas; o Whisper local
  é o ouvido, e nada passa sem ele: a fronteira de uma pausa sem pontuação que o ouvido não confirma reprova, mesmo
  quando as duas fontes concordam (no teste, 0,25 s de silêncio dentro de "temporary" enganou as duas juntas). O
  laudo tem 7 portões medidos no som.
- **Três armadilhas que valem fora daqui:**
  - `WhisperModel("large-v3")` pelo nome consulta huggingface.co a cada carga, mesmo com o modelo no cache (e, se a
    branch mudou, baixa outra revisão sem avisar). Carregue pelo caminho do snapshot
    (`download_model(nome, local_files_only=True)`) e ponha `HF_HUB_OFFLINE=1` antes de importar. Medido em 26/09
    com a rede bloqueada: pelo nome, uma tentativa de conexão a `huggingface.co:443`; pelo caminho, nenhuma;
  - um `--aceitar=N` por trecho aceita também o item que nasce na própria rodada e que ninguém viu. Aqui ele só
    aceita o que o laudo anterior do mesmo áudio mostrava pendente;
  - o `words.json` feito do texto aprovado tem a grafia da cópia para a voz (`Kay-too`, `nineteen seventy-four`).
    Todo agente que "confirma a entidade" ou procura âncora nele precisa saber disso (as roupas avisam no §0).
- **Por que serve a qualquer canal:** todo canal que narra pela ElevenLabs tem o alinhamento no histórico de graça,
  e todo canal que roda o faster-whisper na máquina carrega o modelo do mesmo jeito. Vale avisar o Lucas.

## 26/09/2026 — o conferente de mídia, entre a pesquisa e a aprovação (pré-v1 em `7ab9543`)

### 38. Quem acha a mídia não é quem a confere, e o conferente julga contra a frase, não contra a busca

- **Problema:** na pré-v1, quem busca a mídia também a valida por visão (ofício do `pesquisa-imagens`, §4), e a
  caça nos bancos pagos vai da avaliação ao clique de baixar sem um segundo olhar. Quem escolheu tende a ver o que
  procurou: a balsa certa num fiorde da Noruega passa por "balsa de carros". E a lista de aprovação do dono só
  serve se o que chega a ela já foi julgado contra a fala, e não contra o termo de busca.
- **O que resolveu:** um especialista do canal, `.claude/agents/conferente-de-midia.md`, que não baixa nem edita.
  Por candidato, ele monta a frase na fonte (espelho, `words.json` e roteiro aprovado), abre a imagem, e julga
  quatro critérios (contexto, licença e fonte pela marca, técnica, repetição por hash e por ID). O veredito é
  `aprovado`, `reprovado` (defeito do arquivo ou da prova dele, ou algo que não se conferiu), `trocar` (o
  arquivo presta, mas não para esta frase) ou `pendente_lucas` (o que a marca deixa o dono pesar), e fica no
  disco. Só o `aprovado` e o `pendente_lucas` vão à lista do dono, e o `aprovado` não vale como o sim do dono.
  Ainda não rodou num candidato real.
- **Ajuste da revisão (26/09):** a duração do candidato se mede contra o plano que ele vai ocupar, não contra a
  cena. A regência, que divide a cena em planos, nasce depois da pesquisa, e com a cena inteira como janela um
  clipe de 5 s numa cena de 20 s saía `trocar` e voltava à busca. Sem regência, a janela da cena se divide
  pelos planos escritos, ou pelo mínimo que o teto de permanência deixa, e a cobertura da cena vira recado sobre
  o conjunto, não veredito de um arquivo. E a mídia que chega sem rascunho (retrato, logo, documento) também
  passa por ele, sobre o arquivo entregue.
- **Ajuste da segunda revisão (26/09):** três remendos seguidos abriram defeito novo, e o ofício foi reescrito
  num desenho só. (1) O que a marca deixa para o dono decidir (footage abaixo de 4K, foto de agência, arquivo que
  não se pôde comparar com a prévia) sai `pendente_lucas`, e a resposta dele volta ao conferente, literal e com a
  hora, como `excecao_lucas`: sem isso, a exceção prometida não tinha onde ficar, e o orquestrador era empurrado a
  passar por cima do veredito. (2) A regra vale na cena, em qualquer passo: a cena só cita arquivo com `aprovado`
  no veredito que casa com ele (pela URL do item no banco pago, pelo sha256 do arquivo julgado no resto). Um
  portão só no fim da pesquisa deixava passar a mídia pedida depois. (3) A procedência se cobra pela régua de cada
  tipo, e o conferente mede o que dá para medir (sha256, resolução, duração) em vez de reprovar quem não o gravou.
- **Por que serve a qualquer canal:** um canal de culinária também mostra o prato errado sob a frase certa, e
  todo canal que baixa por assinatura paga o download que ninguém devia ter aprovado. O motor pode ter o ofício
  (a pré-v1 não tem) e deixar a régua de licença na marca de cada canal. Vale avisar o Lucas.

### 39. O `recolher` da pré-v1 não sabe se o arquivo é o item, e o nome não o prova em dois dos quatro bancos

- **Problema:** o `scripts/stock/registrar-download.mjs recolher` aceita qualquer arquivo que chegue em Downloads
  depois do `marcar`, e grava nele a URL, o ID e a conta do item. Só no Shutterstock ele exige o ID no nome. Na
  bancada de teste (26/09, Downloads e home falsos, sem rede), o mesmo clipe pessoal saiu com exit 0 como item da
  Storyblocks (`ferias praia.mp4`, gravado como `SBV-111222333`), do Motion Array (`download`, gravado como
  `download.mp4`) e do Envato (URL de item com UUID, que o nome não traz). O `_instalar-lote` o levou à cena com
  a procedência do item. E o nome não salva: o Motion Array entrega sempre `download`.
- **O que resolveu (texto, sem mexer no script do molde):** a identidade se prova pelo olho. Na Fase A, três
  prévias em pontos fixos (15, 50 e 85 % da barra do player), só da área do vídeo (`zoom` com `save_to_disk`).
  Depois do `recolher`, o `conferente-de-midia` tira os quadros do arquivo nos mesmos pontos
  (`_frames-de-clipe.mjs`, com o nome inteiro no `--so=`, porque ele casa por trecho) e grava `mesmo_item`. Só o
  `aprovado` com `mesmo_item: true` se instala, e outro clipe nunca se instala com a procedência do item (skill
  `cacar-no-chrome`, §3, passos 4 e 5).
- **Por que serve a qualquer canal:** todo canal que caçar pelo navegador com esse registrador tem o mesmo buraco.
  O motor poderia deixar de declarar a procedência no `recolher` e declará-la só no `instalar`, depois de uma
  confirmação de identidade registrada. Vale avisar o Lucas.

### 40. Qual perfil do Chrome a extensão opera se prova pelo disco, e o NTFS herda a data de um nome repetido

- **Problema 1:** `list_connected_browsers` da extensão Claude in Chrome não diz o perfil. Os nomes ("Browser 1",
  "Browser 2") trocam de ordem, o `isLocal` só compara o sistema operacional, e neste PC a extensão estava também
  em perfis do Top10. Caçar no perfil errado baixa na conta errada.
- **O que resolveu:** a prova pelo disco, no começo de cada caça (skill `cacar-no-chrome`, §0, item 5): `select_browser`
  com o `deviceId` do perfil do dono, uma aba numa URL única (`https://example.com/?alpha-point-perfil-<marca>`),
  e a marca procurada só no `History` desse perfil (`User Data/Profile 1/History`). Achou, é ele. O `deviceId`
  identifica o navegador entre as caças, e muda se a extensão for reinstalada.
- **Ajuste da revisão (26/09):** a prova do começo não basta. Se a extensão cair e voltar no meio da caça, a
  seleção pode se perder, e um pedido de conexão aceito na janela de outro perfil manda os downloads seguintes
  para lá. Por isso, antes de cada banco e de cada clique que baixa (o do clipe e o do PDF de licença), o `inUse`
  de `list_connected_browsers` tem de estar
  no `deviceId` do perfil do dono; se não estiver, ou se a extensão reconectar, a prova se refaz e o dono
  confirma de novo as contas. Pedido de conexão da extensão durante a caça se recusa, em qualquer perfil.
- **Problema 2:** o `recolher` da pré-v1 recusa o arquivo "criado ANTES do 'marcar'". No Windows, o NTFS dá a um
  arquivo que nasce com o nome de outro que saiu da pasta até 15 s antes a data de criação do antigo (o
  *tunneling*). O Motion Array entrega sempre `download`: na bancada (26/09, Downloads e home falsos), o segundo
  `download`, recolhido logo depois do primeiro, saiu 3 com a data de criação do primeiro; com 20 s de espera,
  saiu 0. O erro é do lado seguro, mas trava a caça e gasta a aprovação do download.
- **O que resolveu (texto, sem mexer no script do molde):** um download por vez e 20 s entre um `recolher` e o
  próximo download do mesmo banco (skill, §3).
- **Por que serve a qualquer canal:** todo canal que caçar pelo Chrome com mais de um perfil tem o problema 1, e
  todo canal no Windows que baixar do Motion Array tem o 2. O motor poderia fazer a prova do perfil num verbo, e o
  registrador poderia ele mesmo recusar um `marcar` feito menos de 15 s depois de mover um arquivo da pasta
  Downloads. Vale avisar o Lucas.

## 27/09/2026 — acervos livres e oficiais (pré-v1 em `7ab9543`)

### 41. As licenças de uns 170 acervos lidas na origem, e o que elas mudam no motor

- **Problema:** o `buscar-midia` da pré-v1 conhece 12 fontes, e o canal só liga cinco (mais a sala de imprensa
  federal, fora dele). Para geografia faltavam vídeo 4K de satélite, mapa histórico e fronteira com licença
  comercial, e ninguém tinha lido as licenças.
- **O que resolveu:** cinco pesquisadores leram, em 27/09/2026, a página de licença de cerca de 170 fontes, sem
  contornar bloqueio (site que recusou robô ficou "não conferido"). O resultado está em `marca/acervos/`. O Lucas
  aprovou quatro grupos e as fontes de dados e fronteiras (`marca/midia.md` §7.3, "A 4ª rodada";
  `marca/identidade.md` §6).
- **O que é do motor**, e vale para qualquer canal que use a pré-v1:
  - o `src/mapa/perfis.json` escreve o crédito da EOX com "Contains modified Copernicus Sentinel data 2016 &
    2017", e o WMTS da EOX diz hoje "(Contains modified Copernicus Sentinel data 2016)";
  - da EOX, só a camada de 2016 é CC BY 4.0. As de 2018 a 2025 são CC BY-NC-SA 4.0: o motor nunca deveria
    oferecer outro ano a um canal monetizado;
  - o SRTM e o NASADEM param em 60°N. Para relevo acima disso: o USGS 3DEP (EUA, o Alasca a 5 m) ou o Copernicus
    DEM (o mundo);
  - no NASA GIBS e no Worldview, a camada de rótulos é da Esri e de outros, e a de bordas vem do OpenStreetMap.
    Só as imagens são domínio público;
  - o `buscar-midia` não tem o NASA Scientific Visualization Studio: vídeo 4K e 5K em domínio público, com API
    sem chave. Seria a fonte de vídeo 4K livre mais útil para geografia;
  - o robots.txt do Flickr veta tudo, inclusive a API: nenhum canal busca lá por script;
  - endereços que mudaram: o CIA World Factbook acabou em 04/02/2026, o NASA NEO foi desligado em setembro de 2026
    e o Earth Observatory mudou para science.nasa.gov.
- **Por que serve a qualquer canal:** a licença de uma fonte não depende do nicho. Um canal de culinária usaria os
  mesmos federais, o mesmo Commons e as mesmas regras de crédito. O motor poderia guardar o levantamento como
  catálogo comum, com a data da leitura, e o `buscar-midia` poderia ganhar o SVS. Vale avisar o Lucas.

### 42. O `entregar` não serve à foto de jornal, e dois acervos limitam o tamanho que dão de graça

- **Problema:** na 3ª passada do `pesquisa-imagens` do Juneau (27/09/2026, noite) apareceram cinco limites:
  - o `entregar` do `buscar-midia` recusou a foto do Juneau Empire (saída 3): a linha do manifesto não tem selo,
    porque a foto não veio pelo `buscar-midia`. E, com selo, ele gravaria licença `a_confirmar`, que o canal proíbe
    para foto de jornal. O motor não tem caminho para entregar foto que entra por decisão de licença do canal (aqui,
    o `marca/midia.md` §7.5);
  - o `entregar` copia a licença que o Commons declara e não leva o crédito que o canal pede à fonte. No s22, o
    Commons diz "Public domain", e o crédito na tela é "State of Alaska / Alaska State Library";
  - o `buscar` consulta só as 3 primeiras frases de cada chamada (`maxFrases = 3`), sem avisar;
  - o Alaska's Digital Archives (vilda) mostra, das fotos da Alaska State Library, só a cópia grátis de 720 px de
    largura. O `info.json` do IIIF diz o máximo. A alta resolução é compra;
  - o Flickr só libera o download até 1024 px em conta gratuita, mesmo com o original maior.
- **O que resolveu:**
  - a foto de jornal se entregou à mão, com os campos da roupa do `pesquisa-imagens` (§5) e o sha256 do rascunho
    julgado. Os precedentes são `_media/pessoa/s41/` e `_media/foto/s56/`, e o Claude central aceitou a entrega
    (`out/juneau/_pesquisa/research-imagens.md`, "3ª passada");
  - o crédito do s22 viaja no veredito do conferente;
  - a foto do vilda se mede pelo `info.json` antes de ser proposta (`marca/midia.md` §7.5).
- **Para o motor:** o `entregar` poderia aceitar uma linha declarada à mão, com a licença e a base da decisão do
  canal, e um campo de crédito que sobreponha o da fonte. O `buscar` deveria avisar quando corta frases.
- **Por que serve a qualquer canal:** todo canal que usa foto de jornal por decisão própria, ou uma fonte com crédito
  diferente do que o Commons declara, cai nos mesmos limites. O teto de 720 px do vilda e o de 1024 px do Flickr valem
  para qualquer nicho. Vale avisar o Lucas.

### 43. No Git Bash do Windows, o fuso nomeado dá UTC sem avisar

- **Problema:** em 28/09/2026, a hora de uma decisão do Lucas se tirou com `TZ=America/Sao_Paulo date`, no Git
  Bash, e foi gravada como "14:2x de Brasília". Era UTC: a hora de Brasília era 11:2x. O Git Bash não traz a base de
  fusos (tzdata). Com um fuso nomeado que ele não conhece, cai em UTC e não dá erro nem aviso.
- **O que resolveu:** a conferência com o PowerShell (`Get-Date`, `[DateTime]::UtcNow` e `Get-TimeZone`: "E. South
  America Standard Time"). No mesmo Git Bash, o `date` sem `TZ` dá a hora local certa, e o `date -u`, a UTC. As horas
  "de Brasília" gravadas antes nesta máquina saíram do `date` sem `TZ` e estão certas. A de 28/09 se corrigiu na
  `marca/identidade.md` §6 e no pedido ao montador, antes de chegar ao espelho.
- **Por que serve a qualquer canal:** todo canal que registra a hora de uma decisão do dono (a regra "a mensagem
  literal e a hora") e roda no Windows pode gravar a hora 3 h fora, sem perceber. A hora local sai do `date` sem
  `TZ` ou do `Get-Date`, nunca de `TZ=<Continente/Cidade>` no Git Bash. Vale avisar o Lucas.

## 28/09/2026 — os avisos do canal no Discord (pré-v1 em `7ab9543`)

### 44. Os avisos do canal no Discord, sem dependência e sem ler o que chega de lá
- **Problema:** o dono acompanha pelo celular e quer um lugar organizado para status, pendências, notas e erros,
  com aviso quando algo depende dele. O painel da pré-v1 (`regie painel`, `docs/PAINEL.md`) só abre no próprio PC
  (127.0.0.1) e só lê.
- **O que resolveu:** `ferramentas/discord.mjs`, um bot que só posta, em quatro canais (`status`, `pendencias`,
  `aprendizados`, `erros`), só com o `fetch` do Node 24, sem npm. A chave fica no arquivo de chaves da
  máquina, lida pelo `src/lib/chaves.mjs` da pré-v1. Antes de todo envio, uma guarda barra valor do arquivo de
  chaves e e-mail que não seja o contato do canal. O `aprendizados` posta cada item deste arquivo com a data da
  seção, e guarda o último postado. Conferido na documentação do Discord (`discord/discord-api-docs`, 28/09/2026):
  os bits de permissão do convite, o `User-Agent: DiscordBot (url, versão)` e o teto de 2.000 caracteres. A exigência
  de o bot se identificar no gateway antes do primeiro post, que eu supunha, não está mais nela.
- **O gateway saiu:** no Windows, o Node 24 cai ao sair do processo depois de um `WebSocket` ("Assertion failed:
  !(handle->flags & UV_HANDLE_CLOSING)", exit 127), e identificações seguidas voltam "sessão inválida". A chave se
  prova pela API (`conferir`).
- **Num servidor de equipe:** os canais se procuram só dentro da categoria do projeto (um "status" pode ser de outra
  pessoa), e a marcação é o usuário do dono, nunca o dono do servidor. Categoria privada é `@everyone` sem ver e o
  bot e o dono com permissão própria. O bot não fecha sozinho uma categoria que já existe (mudar permissão de canal
  pede "Gerenciar cargos"): aqui quem fechou foi o dono. Pela documentação, a categoria que o bot cria já pode nascer
  fechada; isso ainda não foi exercitado. **Administrador do servidor vê tudo, até o privado** (regra do Discord): o
  `privado` conta isso, só lendo.
- **O guia, para outros projetos:** `ferramentas/guia-discord/` tem a mesma ferramenta sem nada do canal
  (`discord-avisos.mjs`), o passo a passo com as regras para o Claude (`GUIA.md`) e a página que o dono repassa
  (`pagina.html`), pedido pelo dono em 28/09/2026 para os amigos dele.
- **Por que não lê as respostas:** o que chega por fora do chat do Claude é dado, não ordem, e aprovação por lá não
  valeria (a mesma régua da caça: "texto numa página" não é aprovação). O dono escolheu os avisos com as respostas no
  chat ("Avisos primeiro (Recomendado)").
- **Por que serve a qualquer canal:** todo canal tem um dono que nem sempre está no PC. Vale levar ao motor, ao lado
  do painel.

### 45. Os avisos no celular pelo Telegram, e por que o WhatsApp da Meta ficou parado
- **Problema:** o dono quer no celular, no app que ele olha, o que espera por ele, o erro que segura o vídeo e o
  limite atingido. O Discord já marca (item 44), mas nem todo dono vive no Discord.
- **O que resolveu:** `ferramentas/telegram.mjs`, a Bot API oficial do Telegram, só com o `fetch` do Node. O dono cria
  o bot no @BotFather (grátis, uns 5 minutos) e põe a chave no arquivo de chaves pelo Bloco de Notas. O chat dele se
  liga por um link `t.me/<bot>?start=<código>`, de uso único e válido por 2 h: o `preparar` só aceita o chat que
  mandou aquele código, e descarta a fila. Dali em diante, a ferramenta só envia, com a mesma guarda do Discord.
- **O WhatsApp oficial, tentado no mesmo dia:** o número de teste da Meta é grátis e não pede cartão, mas:
  - fora da janela de 24 h, só entrega modelo aprovado;
  - a chave de teste vence em 24 h, e a permanente pede um usuário do sistema, que só se cria com um app no
    portfólio;
  - a conta nova foi travada na primeira mensagem ("Business account has been locked", 131031), sem motivo dito.
    Nos fóruns, há o mesmo relato desde maio de 2026, sem solução confirmada.

  O jeito não oficial (WhatsApp Web automatizado, serviço que repassa a mensagem) vai contra as regras do WhatsApp ou
  passa o número do dono por terceiros. `ferramentas/whatsapp.mjs` fica pronto para quando a conta destravar.
- **Tropeços:** a Bot API do Telegram leva a chave no caminho da URL, então nenhuma mensagem de erro da ferramenta
  mostra a URL. O código do convite só chega depois que o dono aperta Iniciar: por isso são dois comandos, `convite`
  e `preparar`.
- **Por que serve a qualquer canal:** todo dono quer saber, longe do PC, quando o vídeo espera por ele. Vale levar ao
  motor junto com o Discord, e ao guia dos amigos.

## 28/09/2026 — os textos de tela do Juneau, numa conversa por peça (pré-v1 em `7ab9543`)

### 46. A decisão do dono copiada em várias roupas envelhece em todas de uma vez
- **Problema:** a decisão de gastar na MapTiler (28/09, identidade §6) entrou na identidade, no CLAUDE.md e em três
  roupas (diretor de arte, montador e regente). Outras sete roupas continuaram dizendo "o gasto ainda não foi
  liberado": o mapista e o editor de arte, que são os que renderizam, parariam antes de cada mapa pedindo um ok
  que o dono já tinha dado. Quem achou foi o verificador de fatos, lendo a própria roupa; nenhum portão pega isso.
- **O que resolveu:** as sete corrigidas no mesmo commit, e uma varredura (`grep` pela frase velha em
  `marca/agentes/`) antes de dar a decisão por registrada.
- **Como evitar:** a roupa não repete o estado de uma decisão; aponta para o lugar dela (a seção da identidade).
  Quando repetir for inevitável, a decisão nova só se dá por registrada depois do `grep` pela frase antiga em todas
  as instruções do canal. O mesmo aconteceu, no mesmo dia, com o exemplo do card de pessoa, em quatro roupas.
- **Por que serve a qualquer canal:** todo canal tem várias instruções de agente que citam as decisões do dono. Vale
  levar ao motor como regra de escrita das roupas, e como um portão simples: frase da marca que contradiz a
  identidade.
