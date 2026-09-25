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
      a geometria que o próprio Nominatim devolve (`polygon_geojson`), registrada com licença ODbL.
- **Por que serve a qualquer canal:** todo canal nascido na v0.1.0 vai passar por esta migração. Os itens 1, 2, 3 e
  5 afetam qualquer um no primeiro `atualizar`.
