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
- **Depois, no Brave (02/10/2026):** o Lucas passou a caça para o Brave, por memória e preferência. A extensão
  Claude in Chrome roda no Brave (a documentação do Claude Code cita a detecção nele), e a prova é a mesma, com
  outro caminho: `BraveSoftware/Brave-Browser/User Data/Default/History`, que também grava com atraso (a marca
  apareceu na segunda procura, 10 s depois). Dois cuidados que serviriam a qualquer canal que troque o navegador
  da caça: o render e os portões da pré-v1 procuram o executável do Google Chrome (`src/lib/chrome.mjs`), então o
  Chrome continua instalado; e trocar de navegador não pode virar caminho para voltar a um banco que recusou. O
  motor poderia guardar o navegador e o caminho do histórico no `canal.json`, em vez de no texto da skill.

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

### 47. A conversa de peça abre no modelo padrão do app, não no da peça
- **Problema:** o diretor de arte roda no `fable` (frontmatter do ofício, decisão do dono), mas a conversa que o
  dono abriu para ele subiu no modelo padrão do app, o Opus, e começou a trabalhar. A troca de modelo só vale da
  próxima volta, e a tarefa inteira da peça cabe numa volta só: sem intervenção, o conceito sairia do modelo errado.
  O nome da conversa e o relato não mostram o modelo.
- **O que resolveu:** logo que a conversa aparece, o Claude central confere o modelo (`get_session`). Se não é o da
  peça, troca (`set_session_model`), interrompe a volta (`stop_session`), confere no disco que nada foi gravado e
  manda recomeçar. As respostas seguintes saíram como `claude-fable-5-1`, conferidas no transcript.
- **Como evitar:** o pedido que o dono cola já diz o modelo, mas o app não o aplica sozinho. A conferência do
  modelo entra no roteiro do Claude central junto com o nome e o grupo da conversa.
- **Por que serve a qualquer canal:** todo canal que roda uma peça por conversa, com modelo por peça, tem o mesmo
  furo. Vale levar ao motor: o despacho confere o modelo antes de aceitar o trabalho.

## 29/09/2026 — a primeira caça do Juneau nos bancos pagos (pré-v1 em `7ab9543`)

### 48. A aba da extensão do Chrome não toca prévia, e o banco recusou a caça no meio
- **Problema:** na Fase A, a prévia do Shutterstock ficava parada em 0:00, com o círculo girando, e no Motion Array
  nem as miniaturas carregavam. A extensão Claude in Chrome abre toda aba do grupo dela em segundo plano, e o Chrome
  não toca vídeo sem som nem carrega o que é preguiçoso numa aba que não está à vista. Nenhuma ferramenta permitida
  da extensão ativa a aba, e o Windows recusou o clique mandado por programa. Uma prévia gravada assim é o pôster,
  não um quadro do ponto: a primeira de 15 % saiu idêntica à de 50 %. Depois, na 20ª busca do Shutterstock (uma a
  cada 10–20 s, e as duas últimas sem espera entre elas), o site respondeu 403 do CloudFront ("Request blocked").
- **O que resolveu:** a prévia se confere antes de gravar (o tempo do player anda, e o quadro muda entre os
  pontos), e o dono dá um clique na aba do grupo, com a janela à vista, antes da Fase A. A rolagem ainda carrega a
  grade de resultados com a aba escondida, o que basta para ler os títulos. No 403, o banco saiu da caça sem nova
  tentativa, como manda a regra de robô.
- **Como evitar:** a skill ganha, no começo da Fase A, "a aba da caça ativa e à vista, conferida pela prévia que
  anda", e uma espera maior entre as buscas do mesmo banco, com uma lista de buscas curta por item (as que o
  pesquisador escreveu, sem extras).
- **Por que serve a qualquer canal:** todo canal que caça pelo Chrome com a extensão tem a mesma aba em segundo
  plano e o mesmo risco de recusa do banco. Vale levar ao motor, no molde da skill.
- **Em 30/09**, o Shutterstock recusou de novo (o mesmo 403) já na primeira página do dia seguinte, umas 30 h depois
  da última: o bloqueio não caiu com o tempo. O Lucas testou à mão, noutra máquina, e o site abriu para ele. A recusa
  é do acesso automático daqui, e o ritmo mais lento não a desfaz no dia seguinte. Trocar de navegador para voltar
  a um site que recusou é contornar: o banco fica fora da caça.

### 49. A troca de conta do Claude deixa a extensão do Chrome na conta antiga, e some com as conversas e os grupos
- **Problema:** em 30/09/2026 o Lucas trocou de conta do Claude no meio do Juneau (a antiga bateu o limite semanal).
  Na conta nova, `list_connected_browsers` veio vazio: a extensão Claude in Chrome continuava na conta antiga. As
  conversas de peça e os grupos da barra lateral (Orquestrador, Pesquisa e mídia, Direção…) não aparecem na conta
  nova, e a sessão antiga não se retoma por ela.
- **O que resolveu:** o Lucas entrou na extensão, no perfil da caça, com a conta nova; o `deviceId` continuou o mesmo,
  e a prova do perfil pelo disco se refez antes de qualquer busca. Os seis grupos se recriaram pelo `create_group`.
  O estado do trabalho veio do disco (notas da caça, `linha.md`, a memória) e do transcrito da sessão antiga, que
  fica em `~/.claude/projects/<pasta>/<sessão>.jsonl` na mesma máquina.
- **Como evitar:** na retomada depois de uma troca de conta, conferir primeiro a extensão (`list_connected_browsers`)
  e os grupos (`list_groups`), e refazer a prova do perfil. As conversas de peça de passos já fechados não precisam
  voltar; as do passo em curso, o dono abre de novo.
- **Por que serve a qualquer canal:** todo canal que orquestra peças por conversa e caça pelo Chrome depende de
  estado preso à conta do Claude (extensão, conversas, grupos). Vale levar ao motor: a retomada confere esse estado
  antes de trabalhar.

## 30/09/2026 — a caça 2 do Juneau, com downloads (pré-v1 em `7ab9543`)

### 50. O topo da página não prova de quem é a conta do banco
- **Problema:** na primeira página de cada banco, a skill manda dizer ao dono o nome que o topo mostra, e ele confirma
  que a conta é a individual dele. O topo da Storyblocks só mostra um ícone, e o canto do Envato, uma palavra genérica.
  O Lucas confirmou as duas como dele. Depois de quatro downloads, o histórico de downloads da Storyblocks (aberto
  para o PDF de licença) mostrou o nome inteiro: uma conta da empresa Top10, compartilhada, com milhares de downloads
  de outras pessoas. O registrador já tinha gravado "conta individual do Lucas" nos quatro arquivos, porque grava o
  texto do `marca/midia.json`, seja qual for a conta logada.
- **O que resolveu:** o Claude parou antes do próximo clique que baixava e perguntou. O Lucas decidiu que a conta da
  empresa vale ("A conta da Top10 vale"), com o risco de licença com ele (`marca/midia.md` §2.3, "A exceção da Top10").
  O `caca.contas` passou a dizer Top10 nesses dois bancos (como o molde já dizia), e os quatro registros foram
  corrigidos, com os originais guardados. A skill ganhou a regra: página da caça que mostre outra conta que a
  confirmada, pare e pergunte.
- **Como evitar:** a confirmação da conta precisa de uma página que mostre o nome inteiro. Proposta para decidir com o
  dono: antes do primeiro download de cada banco, abrir a lista de downloads da conta só para ler o nome (hoje a skill
  só a abre para o PDF).
- **Por que serve a qualquer canal:** todo canal que usa assinatura de banco num estúdio tem conta de empresa e conta
  pessoal no mesmo navegador, e o registrador grava o texto fixo, não a conta logada. Vale levar ao motor: o
  registrador poderia gravar "a confirmar" até a conta ser provada, e a skill, provar a conta por uma página que a
  nomeia.
- **Dois tropeços do registrador, achados por uma revisão independente no mesmo dia:**
  - ele corta o texto de `caca.contas` em 80 caracteres, sem avisar. O primeiro texto da Top10 tinha 84, e o
    download seguinte saiu com a data pela metade. O texto ficou com 65, e os registros se refizeram;
  - o campo `licenca` é fixo no molde ("licença de assinatura do canal", `scripts/stock/lib/instalacao-procedencia.mjs`,
    que não se edita), e a instalação de vídeo não copia a `conta`. A conta da Top10 foi para a `--nota` do
    `_instalar-lote`. Na foto, que se instala sem `--nota`, a nota se acrescentou à mão no `_PROCEDENCIA.json`.
  Vale levar ao motor: o `caca.contas` precisa de validação de tamanho, e a licença gravada, de seguir a conta.

### 51. No Envato, o nome da licença é da conta inteira, e o clique que o confirma já baixa
- **Problema:** com *Licensing → Always ask*, o "Download" abre uma lista de nomes de licença. A lista traz os
  projetos de toda a conta (de outros canais também), e o do vídeo não existia. A skill não deixa o Claude digitar.
  O dono digitou `juneau` e confirmou, e esse clique de confirmar já baixou o arquivo; ele achou que tinha baixado
  "por acidente". A rota de busca de foto da skill (`app.envato.com/photos?term=`) também não busca.
- **O que resolveu:** o arquivo era o da linha aprovada, e o `recolher` o pegou normalmente. Nas linhas seguintes, o
  nome já existia e se escolheu com um clique. O certificado ("Download license", no painel *Licenses* da página do
  item) cita o ID, o título e o nome da licença. A rota de foto que funciona é
  `app.envato.com/search?itemType=photos&term=`.
- **Como evitar:** no primeiro download de cada vídeo, o `marcar` roda ANTES de pedir ao dono que digite o nome, e o
  pedido avisa que confirmar já baixa. Nomes de outros projetos vistos na lista não vão para arquivo nenhum.
- **Por que serve a qualquer canal:** vale para todo canal que usa o Envato com *Always ask*. Vale levar ao molde da
  skill: a rota de foto e a ordem `marcar` → nome → confirmar.

### 52. A Storyblocks no plano Individual não dá prova de licença por item
- **Problema:** a lista tinha uma linha L (o PDF de licença) para cada clipe da Storyblocks. A página do item não tem
  PDF. No histórico de downloads, o botão da linha do item só oferece o vídeo de novo. Os metadados do arquivo trazem
  o título e o produtor, mas não o ID. O *Rights Certificate* é do plano Business (`marca/midia.md` §3.3).
- **O que resolveu:** nenhum clique a mais. A prova do item fica sendo a do `marca/midia.md` §2.8: o nome do arquivo
  com o SBV-ID e o histórico da conta. O dono aceitou essa prova ("Usar mesmo assim"), e a Storyblocks saiu da
  linha L (skill §2.6).
- **Como evitar:** a lista de aprovação não põe linha L na Storyblocks sem plano Business. Diz "prova: nome com o ID
  e histórico da conta".
- **Por que serve a qualquer canal:** o plano é da conta, não do canal. Vale levar ao molde da skill: a linha L da
  Storyblocks depende do plano.

## 30/09/2026 — o piloto do Juneau: o mapa e a foto na mesa (pré-v1 em `7ab9543`)

### 53. Textura de fundo num `::after` pinta por cima da foto e do texto, e a medida de contraste pelo vizinho mente
- **Problema:** a cena de foto impressa (s09) e a prancha de referência da marca punham o grão da mesa num
  `#cam::after` (ou `.palco.mesa::after`) de `inset: 0`. Sendo o último filho, ele pinta por cima de tudo: a foto (até
  em tela cheia), a fita e os rótulos que estão dentro da câmera. A 9 % mal se via. Quando o dono pediu uma mesa com
  mais corpo e a textura subiu para 10–26 %, a trama apareceu sobre as barracas da foto de 1915: é filtro sobre a foto,
  que a marca proíbe. Na mesma prova, a medida de contraste do crédito deu 1,3:1 numa linha que se lia bem. Ela tomava
  como "fundo" os pixels 24 px em volta da letra, e a borda suavizada das próprias letras entrava como fundo claro.
- **O que resolveu:**
  - a textura virou uma camada `#mesa`, o PRIMEIRO filho da câmera, e a luz foi para o fundo da própria câmera. As
    duas ficam por baixo de tudo;
  - a prova é um recorte dentro da foto comparado com a mesma cena sem textura nenhuma. Antes da correção, a
    diferença média era de 6,5 (de 255). Depois, ficou em 0,65, o nível da compressão, nas cinco variantes;
  - o contraste se mede contra a mesma cena renderizada sem os textos: o fundo de cada letra é o pixel que está atrás
    dela, e a letra conta só o miolo, a 2 px ou mais da borda;
  - a prancha da marca, que tem uma cópia própria dos tokens no `:root`, ganhou o bloco da mesa. Sem ele,
    `var(--mesa-feltro)` invalidava a declaração inteira, e a mesa voltava lisa sem erro nenhum.
- **Como evitar:** textura, luz, vinheta ou grão de fundo nunca vão em pseudo-elemento por cima da cena. Vão como
  primeira camada ou como fundo do contêiner. O `qc-visual` confere com o recorte dentro da foto.
- **Por que serve a qualquer canal:** todo canal que põe foto sobre um fundo com textura em HTML cai nisso, e a
  medida de contraste pelo vizinho erra em qualquer texto pequeno. Vale levar ao molde: o `_rig.js` e os exemplos
  de cena com mesa.

### 54. O `qc-janela` não lê a duração das cenas de mapa do molde, e estrada se confundia com fronteira
- **Problema 1 (o portão):** o `qc-janela` acha a duração da cena por `window.__duracao = <número>` ou por
  `var DUR = <número>`. O molde de mapa da pré-v1 (`src/mapa/moldes/mapa-base.html:134`) escreve
  `var DUR = CENA.duracao`, e aí o portão não acha número nenhum e reprova. Isso acontece com toda cena de mapa que
  sai do `preparar-cena`, por mais certa que esteja.
- **O que resolveu:** na s03, o mapista escreveu `var DUR = 8.034`, com uma guarda que dá erro na cena se o número for
  diferente de `CENA.duracao`. O portão passou.
- **Problema 2 (a leitura):** na s03 aprovada, a malha de estradas (cinza, `--neutro`) e a divisa (branca) eram
  duas linhas claras com contorno escuro. O dono, que não conhece o lugar de cor, não soube dizer qual era a estrada
  e qual era a fronteira. Medida de folga e contraste não pegam isso: só um olho de fora pega.
- **O que resolveu:** a regra de que a fronteira é a única linha branca, as outras linhas vão em cor (`--rede-cor`),
  o tipo de linha que não se explica sozinho leva o nome na primeira vez ("ROADS"), e o rótulo de uma linha só
  entra com a linha já na tela (identidade §6).
- **Como evitar:** toda cena de mapa responde, antes do render, "um espectador que nunca viu o lugar sabe dizer o
  que é cada linha?". E todo molde de cena declara a duração em número.
- **Por que serve a qualquer canal:** o molde e o portão são do motor, e a confusão entre tipos de linha aparece em
  qualquer mapa explicativo. Vale levar ao molde (`var DUR = <número>`) e ao `qc-janela` (ler `CENA.duracao`).

### 55. O `geo-osm-rota` costura uma relation só, e o `around` do Overpass com linha longa dá 504
- **Problema:** a rota da balsa estadual no Lynn Canal está no OpenStreetMap em duas relations com um nó em comum
  (Juneau–Haines e Haines–Skagway, que se encontram no terminal de Lutak). O `derivarRota` da pré-v1 lê só os
  membros da primeira relation do dump. Na conferência da água, um `around` do Overpass com a linha longa, sozinho,
  respondeu 504 (sobrecarga).
- **O que resolveu:** os dois caminhos entraram pelos ways, sem as relations, e a costura de sempre (`--tol=0`) os
  colou no nó comum: 146,46 km, 0 órfãos. O script do canal é `out/juneau/_pesquisa/geo-balsa-lynn-canal.mjs`. No
  Overpass, a mesma consulta com a janela da linha no filtro (`(bbox)(around:…)`) respondeu.
- **Por que serve a qualquer canal:** rota partida em várias relations é comum no OSM (balsa, trilha, rodovia por
  estado). Vale levar ao motor um modo de várias relations no `geo-osm-rota`.

## 01/10/2026 — o conceito revisto do Juneau

### 56. Prova de cor de mapa sobre base aberta, sem pagar o provedor; e o território da cor de uma linha a engole
- **Problema 1 (o custo):** a dúvida era de cor (a estrada e o destino proposto, ambos em verde-água). A base de verdade
  é a MapTiler, e cada quadro renderizado sobre ela gasta pedidos pagos, sem cache. Uma prova de quatro opções seriam
  quatro gastos para responder uma pergunta de cor.
- **O que resolveu:** a prova foi desenhada sobre uma base Landsat (USGS, domínio público) baixada pela API aberta do
  Planetary Computer, com o mesmo tratamento da base (brilho 65 %, saturação 70 %), as fontes e os tokens do canal, e
  fotografada pelo Chrome sem interface, com perfil temporário (`out/juneau/_tmp/prova-verde-agua/gerar.py`). A
  legenda da prova diz que a base não é a do vídeo. O dono perguntou por que não era a MapTiler, e aceitou: "Se o
  resultado final será com o map, sem problemas".
- **Problema 2 (o que a prova mostrou):** o conceito pintava o território da contraparte a 85 %, como o do
  protagonista. Com isso, o quadro ficou quase todo verde-água, e as linhas finas da mesma cor sumiram dentro dele.
  A pergunta era sobre a estrada, e o defeito maior estava no preenchimento.
- **O que resolveu:** o território da contraparte passou a 35 % (`--territorio-contraparte-cor`; identidade §6).
- **Como evitar:** antes de pôr uma linha dentro de um território, confira se o preenchimento é da mesma cor que
  ela. A 85 %, a linha só se lê pelo contorno escuro.
- **Por que serve a qualquer canal:** todo canal com mapa pago tem dúvidas de cor e de legibilidade que não pedem a
  base paga, e a regra de 85 % do protagonista, aplicada por analogia a outro ator, cria o mesmo choque em qualquer
  paleta.

## 01/10/2026 — o art do Juneau

### 57. O Chrome do render cai em quadro de 4 MB: é o WebSocket do Node 24, e o conserto fica fora do motor
- **Problema:** o `renderizar.mjs --4k` da pré-v1 caiu duas vezes, sempre no mesmo quadro, com "a conexão com o
  navegador caiu (o Chrome fechou ou travou)". Na s22 do Juneau caiu no primeiro quadro, e na s01, no corte para a
  foto do Capitólio. As duas cenas mostram uma foto cheia de detalhe em tela cheia. Outras dez cenas, com fotos
  menores ou mais lisas, saíram. O achado 27 do item 17 já registrava o mesmo corte no `quadro.mjs` com PNG acima
  de ~4 MB, e supunha que o JPEG do render passava sempre. Não passa.
- **A causa, medida:**
  - o WebSocket embutido do Node 24 (o undici) sempre oferece a compressão `permessage-deflate`, e o Chrome a aceita;
  - ao descomprimir, o undici derruba a conexão quando a mensagem passa de 4 MB (`kDefaultMaxDecompressedSize`, fixo e
    sem opção). O quadro 4K em JPEG 95 da s22 tem 3,3 MB, que em base64 passam de 4 MB;
  - numa bancada com servidor local, o undici recebeu 8 MB sem compressão. Com compressão, 3 MB passaram e 5 MB caíram
    com o código 1006. No Chrome, os mesmos quadros saíram em JPEG 90 (2,2 MB) e caíram em JPEG 95.
- **O que resolveu:** `ferramentas/cdp-sem-compressao.mjs`, uma pré-carga do Node (`node --import`). Ela troca o
  WebSocket global por uma subclasse que tira o cabeçalho `Sec-WebSocket-Extensions` do pedido de abertura, e o
  Chrome passa a mandar sem compressão. O motor não muda, e a qualidade continua 95. A s22 saiu inteira, em 2160p.
  O resto do Node (fetch, http) não muda. O uso está no topo do arquivo e nos tropeços do CLAUDE.md.
- **Como evitar:** em todo render e todo `quadro.mjs` deste canal, carregue a pré-carga antes da ferramenta. Ela não
  custa nada nas cenas que já passavam.
- **Por que serve a qualquer canal:** todo canal que renderiza 4K com foto ou satélite, numa máquina com o Node 24,
  bate nesse teto, e a mensagem do motor manda olhar o Chrome, que não tem culpa. No motor, o conserto é o
  `chrome.mjs` abrir o WebSocket sem a compressão (o mesmo truque), ou pedir o quadro em pedaços. Vale avisar o
  Lucas e o Mateus.

### 58. O render mostra o que o quadro de montagem não mostra: a câmera do RIG leva o que está na margem para fora
- **Problema:** depois dos primeiros 35 renders do Juneau, uma conferência independente nos MP4 (7 conferentes e 7
  céticos, 1.054 quadros) confirmou 34 defeitos que nenhum portão pegou, porque os portões que abrem a cena no Chrome
  estão NÃO MEDIDO sem o npm, e o editor conferia a montagem pelo primeiro quadro:
  - **a margem sob a câmera:** o `R.camera` do RIG tem zoom contínuo (base + 0,0024 por segundo), e a órbita e a deriva
    movem o palco. O que foi montado rente à margem de 200 px sai dela no fim da cena: 20 a 55 px em 13 cenas;
  - **o canto do YouTube e a faixa do crédito:** a foto impressa e o cartão da fala entram neles pelo mesmo motivo, e
    uma fala quebrou em 5 linhas no render, e não nas 3 que o relato previa;
  - **o salto do crédito:** com duas linhas num bloco ancorado embaixo, a que entra por `hidden` faz a outra subir
    83 px num quadro só;
  - **o recorte da foto conferido só num instante:** a borda da digitalização, a moldura do diapositivo, um pedaço da
    aeronave e uma placa com o nome de uma deputada continuaram no quadro em outros momentos, ou com o Ken Burns.
- **O que resolveu:** a regra na roupa do `editor-de-arte` (o que encosta na margem se monta recuado pelo zoom
  máximo da cena, com a conta escrita; o crédito muda de altura junto com o fade), e a conferência dos clipes
  renderizados por quadros do MP4, em vários instantes de cada beat, com um cético por achado. A lista está em
  `out/juneau/_tmp/verificacao-render-2026-10-01.json` (fora do git).
- **Como evitar:** confira a cena no último quadro e no meio de cada movimento, não só no primeiro. Com o npm
  autorizado, o `qc-fora-do-quadro` e o `check-overlap` mediriam isso em toda cena.
- **Por que serve a qualquer canal:** o RIG é do motor, e todo canal que monta cena com a câmera dele e conferência
  pelo primeiro quadro vai ter o mesmo desvio. No molde, vale o RIG expor a escala máxima da cena, ou o editor de arte
  do motor trazer a conta da margem sob a câmera.

### 59. O conserto cria o defeito ao lado, e a conta escrita no cabeçalho não é a caixa que o navegador desenha
- **Problema:** nas rodadas de correção dos clipes do Juneau (01/10), cada reconferência confirmou os consertos pedidos
  e achou defeitos novos nascidos deles, perto do lugar mexido:
  - a foto impressa recentrada para sair da margem (s04, s16) passou a correr sob a pílula do rótulo, que ficou parada
    na camada fixa;
  - a linha do preço que subiu (s19) pôs o herói sobre a quebra tracejada; a pílula alinhada à direita (s26) encostou
    na vizinha; o cartão que desceu (s31) cobriu a pílula ao lado; a legenda que encolheu no deslize (s27) mudou de
    quebra num quadro só;
  - os cabeçalhos das cenas seguiam com as contas de antes do conserto ("a pílula termina em y≈357"), e o mapista
    mediu no ensaio sem tile uma pílula de 512 px que o navegador desenhou com 622 (s50), ancorada pela direita, sobre
    a divisa.
- **O que resolveu:** a reconferência de cada rodada procura também o defeito novo, e não só o antigo: o mesmo
  conferente olha os achados anteriores e a cena inteira de novo, e um cético tenta derrubar cada achado. O pedido de
  correção diz "confira também o que ficou perto do conserto".
- **Como evitar:** ao mover um elemento, refaça a conta de tudo o que divide a área com ele, inclusive o que está numa
  camada fixa fora da câmera, e reescreva a conta do cabeçalho. Meça largura de pílula e de texto no DOM, depois do
  `document.fonts.ready`, e não por conta.
- **Por que serve a qualquer canal:** toda cena com camadas (mesa sob a câmera, rótulo fixo por cima) e todo ensaio
  sem navegador tem esse risco; a conferência que só confirma o conserto pedido deixa passar o defeito que ele criou.

## 01/10/2026 — o primeiro XML do Premiere, e o pacote para outro computador (pré-v1 em `7ab9543`)

### 60. O XML do `finalizar` só abre na máquina que o gerou; o pacote leva tudo para outra
- **Problema:** o `finalizar.mjs` da pré-v1 grava cada `<pathurl>` com o caminho absoluto desta máquina
  (`file://localhost/C%3a/projetos/alpha-point/out/juneau/...`). É de propósito (o estúdio reescrevia tudo para o Mac
  de uma pessoa), e a conferência dele prova que as referências existem AQUI. O Lucas precisou abrir o projeto em
  outro computador: lá, as 56 referências viriam offline, espalhadas entre `_media/` e `graphics/`.
- **O que resolveu:** `ferramentas/pacote-premiere.py <proj> --destino C:/Juneau-Premiere`. Ele copia cada arquivo
  citado para uma pasta `midia/` só, confere o sha256 da cópia contra o original, reescreve só as `<pathurl>` para o
  destino, prova que nada mais mudou no XML, e grava um LEIA-ME e um manifesto. A pasta vai para o mesmo caminho no
  outro computador. Se o caminho mudar, o Premiere pede um arquivo e acha o resto na mesma pasta. As três
  conferências do motor (`xml-conferir.mjs`: bem-formado, referências, geometria) passaram no XML do pacote.
- **Como evitar:** a entrega do XML vem sempre com o pacote, e o destino se combina com o dono antes (Windows ou
  Mac, e onde a pasta fica). Os nomes dos arquivos precisam ser únicos: o pacote recusa dois arquivos com o mesmo nome.
- **Por que serve a qualquer canal:** todo canal da Régie entrega o XML para alguém editar, e quase nunca na mesma
  máquina. Vale levar ao motor como um `--pacote <destino>` do `finalizar`.

## 02/10/2026 — a revisão do Lucas no Premiere (pré-v1 em `7ab9543`)

### 61. A conferência por cena aprova o que o espectador estranha num olhar; falta uma revisão de espectador antes do dono
- **Problema:** o `qc-visual` julgou as 55 cenas do Juneau por lente (legibilidade, factualidade, sincronia,
  composição, movimento, acessibilidade, coerência) e aprovou todas, com nota de 8 a 10. O Lucas abriu o XML no
  Premiere e achou, num olhar só, oito defeitos de espectador:
  - seis coisas para ler de uma vez (s01);
  - o crédito que pesa (s01);
  - um grifo sobre uma lacuna vazia (s02);
  - um começo que não se entende (s05);
  - um campo em branco antes do número (s23);
  - quase 3 s de mesa vazia (s40);
  - uma foto recortada numa tira fina (s56);
  - um fim pobre (s62 e s63).
  Cada um tinha um porquê escrito no cabeçalho da cena, e a régua da marca os deixava passar. O crédito e o aviso do
  ano não contam no teto de elementos, o campo vazio cumpria "nenhum número antes da voz", e o recorte cumpria o teto
  de 1,4×. O conferente lê o porquê, e o espectador não lê.
- **O que resolveu:** uma revisão de espectador antes de o vídeo ir ao dono (CLAUDE.md, "A autonomia do vídeo 2 em
  diante"). Um revisor que não lê cabeçalho nem conceito vê os quadros em 1080p a cada 0,5 s, com a fala ao lado, e
  pergunta só o que o espectador perguntaria:
  - dá para entender no primeiro segundo?
  - quantas coisas há para ler?
  - há marca sem conteúdo?
  - há mais de 2 s sem nada que acompanhe a fala?
  - algo fica pequeno demais no celular?
  Um cético tenta derrubar cada achado.
- **Como evitar:** recurso que só funciona com a explicação (o campo em branco que "espera" a voz, a tira que evita
  um rosto) vai ao dono como pergunta antes de virar cena. A conta da régua (elementos, escala) não substitui olhar o
  quadro como quem nunca leu a cena.
- **Por que serve a qualquer canal:** todo canal que confere cena por cena com régua escrita tem esse ponto cego.
  A conferência por regra aprova o que cumpre a regra, e o espectador julga o que vê. Vale levar ao motor como uma
  lente "espectador" do `qc-visual`, que julga sem o cabeçalho.

### 62. O dono aprova as cenas antes do render, numa linha do tempo local que toca o HTML ao vivo

- **Problema:** no Juneau, o Lucas só viu as cenas no Premiere, depois de 55 renders 4K (cerca de 2 h) e do XML. Os 8
  defeitos que ele achou pediram refazer 11 cenas e renderizar de novo. A galeria do molde (`scripts/serve-galeria.mjs`)
  já mostra uma cena por vez ao vivo, mas em laço: não toca o vídeo inteiro com a narração, e o vídeo de banco perde a
  sincronia. A timeline do top10-estudio saiu no porte.
- **O que resolveu:** `ferramentas/linha-do-tempo.mjs`, do canal, sem editar o molde nem o motor (CLAUDE.md, "A linha do
  tempo pré-render"; o desenho em `ferramentas/linha-do-tempo/DESENHO.md`).
  - O relógio é o `<audio>` da narração. A cena sem mapa toca o HTML ao vivo, pelo `__renderAt(t)`, em dois iframes
    que se revezam, com a preparação do render e o `__PREVIEW` desligado. A cena de mapa toca a cópia leve do clipe de
    prova; sem ele, um rascunho com tiles gerados localmente, sem falar com o provedor pago.
  - A aprovação é o "sim" no chat, presa à versão de cada cena: o sha1 do HTML, as fotos que ele cita e o clipe de
    origem. Mudou depois de vista, volta a "não vista". A trava `conferir --depois-do-render` sai 0 só com tudo aprovado
    e renderizado na versão aprovada.
  - No Juneau, as trocas de cena caíram no quadro exato, as cenas tocaram de 26 a 30 quadros por segundo e o quadro
    parado bateu com o render.
- **Como evitar:** o dono vê o vídeo antes do passo caro, não depois. E o "visto" não sabe quem olhou: teste do Claude
  na página se separa antes de avisar o dono.
- **Por que serve a qualquer canal:** todo canal da Régie faz cenas HTML que só viram vídeo no render, e todo dono só
  vê o resultado no editor. A peça usa só o contrato de cena do motor (`__renderAt`, `__duracao`, `__prepararCaptura`) e
  o espelho. O motor poderia trazê-la como verbo (`regie linha-do-tempo`), no lugar da galeria em laço. Vale avisar o
  Lucas.

## 03/10/2026 — a 5ª leva do Juneau, depois da linha do tempo (pré-v1 em `7ab9543`)

### 63. Uma varredura com um limite que a marca não tem vira conserto em massa do que já estava aprovado

- **O problema:** na s31, a 2ª linha de crédito descia até a borda. O Claude central mandou varrer as 55 cenas atrás de
  "crédito com o pé abaixo de y ≈ 2080", um número que ele tirou de uma medida da s31, não da marca: a identidade §4.2 só
  diz "faixa inferior, y > 1880". A varredura achou as 55 (a linha única da casa tem o pé em ~2131–2146, aprovada pelo dono
  em todas as revisões), e o mesmo pedido mandou o editor consertar as achadas. Ele subiu o crédito de 38 cenas, o que
  envelheceu 38 renders 4K, mudou o sha1 de 5 cenas com exceção de portão do dono e deixou os mapas noutra altura.
- **O que resolveu:** as 37 voltaram byte a byte às cópias de antes (o sha1 conferido contra o de antes; as versões
  desfeitas guardadas), com os laudos de antes; os portões delas se mediram de novo; só a s31 ficou com o conserto dela,
  na posição da casa.
- **Como evitar:** quem varre não conserta no mesmo pedido. O limite de uma varredura sai da marca, citado; sem número na
  marca, a varredura mede e devolve a distribuição, e o que fazer com ela é decisão do Claude central ou do dono, antes de
  qualquer conserto. Se a varredura acha o defeito em quase tudo, o limite está errado, não o vídeo.
- **Por que serve a qualquer canal:** todo canal tem regras sem número e cenas já aprovadas. Uma régua inventada no meio
  de uma revisão desfaz, em silêncio, o que o dono já viu.

### 64. O portão abre a cena de mapa sem a chave, mede a página parada e dá verde

- **O problema:** os portões do molde (`qc-cena` e os avulsos) abrem a cena pelo `playwright-core` e nunca dão à página a
  chave da base de mapa, que o render injeta na hora. A base de mapa da pré-v1 para antes de criar o mapa, e o
  `__renderAt` fica vazio: todo portão de cena de mapa mediu uma tela sem satélite e sem movimento, e passou. O
  `_audit-til` e o `qc-rodape-contraste` ainda trocam o `requestAnimationFrame` por um que não roda, e sem ele o
  MapLibre não pinta nem com a chave: o contraste do crédito da s03 saiu "✓ 12.12:1" medido sobre o fundo vazio. E o
  achador de crédito do `qc-rodape-contraste` só olha elementos sem filhos: o crédito com o ano num `<span>` sai "sem
  crédito de rodapé". A regra do canal ainda dizia que o portão "pede tiles à MapTiler".
- **O que resolveu:** uma pré-carga do canal (`ferramentas/chaves-nos-portoes.mjs`, `node --import=…`) que dá a chave
  como o render dá, conta os tiles servidos e transforma em NÃO MEDIDO (saída 2) o portão que mediu mapa que não pintou
  (rAF trocado, tile recusado, sem rede); um portão do canal para o til e o rodapé com o rAF vivo
  (`ferramentas/portao-mapa.mjs`); e um `conferir` que, depois da rodada, prova pelo registro que cada portão de cada
  cena de mapa rodou com a chave. Três céticos acharam falhas abertas nas duas peças, e todas se consertaram antes
  de valerem. Nada do molde nem do motor mudou.
- **Como evitar:** portão que abre página com recurso de fora (chave, tile, fonte, vídeo) tem de provar que o recurso
  chegou antes de dar veredito; sem a prova, o veredito é NÃO MEDIDO, nunca verde. E uma régua que mede "o que está
  na tela" se confere uma vez com um defeito plantado.
- **Por que serve a qualquer canal:** todo canal com cena de mapa da pré-v1 e os portões do molde mede hoje um mapa
  vazio e recebe verde. O conserto de verdade é no motor (a chave nos portões, o rAF vivo em cena de mapa, o achador
  de crédito com filhos): vale avisar o Lucas e o Mateus.

### 65. Um cético sem escopo, sobre um portão, acha sempre mais um caso montado para enganá-lo

- **O problema:** o achador de crédito do `portao-mapa` passou por cinco rodadas de cético. Da terceira em diante, toda reprovação vinha
  de página montada para esconder letra do portão (sombra fechada, `iframe`, `::first-line` com corpo num pai de corpo 0, fonte com as
  métricas zeradas por CSS, caracteres mongóis e ogâmicos). Nenhuma das 56 cenas do vídeo tinha nada disso, e a medida delas não mudou
  de uma rodada para a outra. Foram umas 10 horas de agentes, e o portão não ficou melhor para o vídeo.
- **O que resolveu:** o Claude central parou a caça. Instalou a versão que media igual todas as cenas reais, escreveu os casos
  adversariais como limites, e passou a pedir ao cético que julgue o escopo do conserto: os defeitos que o conserto diz resolver, as
  cenas reais e as provas de antes, sem abrir mecanismo novo.
- **Como evitar:** o portão de um canal mede as cenas que o próprio canal escreve. Antes de mandar um cético atacar um portão, diga o
  que conta como defeito: um caso que um agente do canal escreveria sem querer. O caso que só existe para enganar vira limite escrito,
  e o portão se reabre se uma cena real chegar perto dele.
- **Por que serve a qualquer canal:** todo canal que escreve portão e o põe à prova com revisores adversariais cai no mesmo laço: o
  revisor sempre acha mais um jeito de enganar uma régua de pixels.

### 66. O servidor que recusou o robô foi lido pela API dele, por outro pesquisador, minutos depois

- **O problema:** no dossiê do vídeo 2, o servidor do porto de Long Beach recusou o robô do canal duas vezes, em dois agentes
  diferentes. Outros dois agentes, que não sabiam disso, leram o mesmo servidor pela API JSON do site, e os números de Long Beach
  entraram no dossiê por esse caminho. Cada agente seguiu a regra no que viu: o que recusou parou, e o que leu pela API não tinha
  visto recusa nenhuma. Quem juntou as pontas foi o crítico transversal, que lê os registros de todas as dimensões.
- **O que resolveu:** o Claude central contou como contorno. A regra veda ler de novo, por outro cliente, o servidor que recusou, e
  a API é outro caminho para o mesmo servidor. As provas saíram, e Long Beach entrou pela republicação de uma revista do setor.
- **Como evitar:** o pedido a cada pesquisador diz que a recusa vale para o servidor inteiro, em qualquer caminho (página, API,
  feed, arquivo), e que antes de ler um servidor ele procura nos registros dos outros agentes do mesmo trabalho se esse servidor já
  recusou. O crítico transversal procura a mesma coisa de propósito.
- **Por que serve a qualquer canal:** todo canal que espalha a pesquisa por vários agentes em paralelo tem esse ponto cego: a recusa
  fica no registro de um agente, e o vizinho não a vê.

### 67. A API abre a porta, e o arquivo que ela aponta mora num servidor que veta robô

- **O problema:** no vídeo 2, o `pesquisa-pessoas` procurou retratos pela API aberta do Smithsonian (`api.si.edu`, com a chave do
  canal; esse servidor não tem robots.txt). A API devolve o link de cada imagem em outro servidor, o `ids.si.edu`, cujo robots.txt
  libera só alguns buscadores pelo nome e veta o resto (`User-agent: *` / `Disallow: /`). O agente baixou dois retratos por esses
  links, um pedido cada, antes de ler o robots.txt inteiro: a primeira leitura tinha saído cortada. Ele apagou os dois sem olhar nem
  usar, e disse isso no relato. O Claude central conferiu no disco que não sobrou nada e leu os dois robots.txt.
- **O que resolveu:** nada se usou daquela porta, e o retrato do vídeo veio do Commons. A pergunta "o link que a API devolve vale como
  porta para programas?" ficou em aberto para o Smithsonian. Na NARA e no Commons ela foi respondida que sim (CLAUDE.md, "Tropeços
  conhecidos do apoio"), mas cada acervo se decide pelo que ele próprio diz. Até a decisão, o `ids.si.edu` fica fora.
- **Como evitar:** antes do primeiro pedido a um servidor novo, o robots.txt dele se lê inteiro, e o host do ARQUIVO conta tanto
  quanto o da busca. Se a leitura sai cortada ou falha, o servidor fica fora até ser lido.
- **Por que serve a qualquer canal:** todo acervo com API costuma servir o arquivo de outro host (CDN, servidor de imagens). Quem lê
  a regra só da API está lendo a regra errada.

## 07/10/2026 — a caça do vídeo 2 no Brave (pré-v1 em `7ab9543`)

### 68. A extensão do navegador reconecta sem erro, e só o horário de conexão denuncia

- **O problema:** na caça do vídeo 2, o `list_connected_browsers` continuou mostrando o mesmo `deviceId`, com `inUse`, mas o
  horário de conexão (`connectedAt`) tinha mudado: a extensão reconectou às 12:55 sem nenhum erro nas ferramentas. A skill pede a
  prova do perfil refeita a cada reconexão, e a caça seguiu 13 minutos sem ela, porque só o `deviceId` e o `inUse` eram conferidos.
  Duas outras quedas, no mesmo dia, deram erro "not connected" e não mudaram o horário.
- **O que resolveu:** a prova se refez quando o horário novo apareceu, e o relato da caça registra a janela sem prova.
- **Como evitar:** todo `list_connected_browsers` compara o `connectedAt` com o da última prova. Mudou, a prova se refaz antes do
  próximo clique, mesmo sem erro nenhum. A skill `cacar-no-chrome` (§0, item 5) ainda não diz isso: vale propor a linha.
- **Por que serve a qualquer canal:** todo canal que caça pela extensão do navegador depende de saber que a sessão é a mesma, e a
  reconexão silenciosa não aparece em nenhuma outra ferramenta.

### 69. A vista aérea de cidade e de porto, de perto, quase sempre tem marca legível

- **O problema:** na primeira rodada da caça do vídeo 2, 4 dos 7 candidatos caíram no conferente por marca de terceiro legível: o
  letreiro de um hotel num telhado, os logotipos de um banco e de uma companhia aérea no alto das torres, e o nome de armador no
  casco de navios. A skill já recusava isso na Fase A (§2.3, item 4), e mesmo assim eu os gravei: olhei o quadro inteiro, não o alto
  das torres nem o casco.
- **O que resolveu:** buscar de longe. O centro de Los Angeles visto de um parque, ao fim da tarde, passou; no porto, o navio
  atracado quase sempre mostrava o nome.
- **Como evitar:** antes de gravar um candidato de cidade ou de porto, ampliar (`zoom`) o alto das torres, as fachadas e os cascos
  nas prévias. Se algo se lê, ou se lê em parte, não vira candidato. Para porto, preferir o plano alto, o navio de proa ou de popa, ou
  o pátio sem navio, e dizer na lista o que falta.
- **Por que serve a qualquer canal:** todo canal que usa B-roll de cidade ou de porto em banco pago esbarra nas mesmas marcas, e o
  banco não garante a autorização de propriedade.

### 70. A busca de vídeo do Shutterstock não tem o filtro de IA que a marca pede

- **O problema:** `marca/midia.md` §2.6 manda ligar "Exclua imagens geradas por IA" na busca do Shutterstock. Na busca de vídeo, o
  painel de filtros não tem essa opção (lido inteiro em 07/10/2026): tem "Uso → Não editorial", tipo, resolução, duração, pessoas e
  outros, e nada de IA. O filtro é das imagens. Pela skill, sem o filtro nenhum vídeo do Shutterstock viraria candidato.
- **O que resolveu:** o Shutterstock parou, e a pergunta foi ao Lucas. A resposta: "1. Quero o shutter". O banco entra com a marca
  de IA conferida na página de cada item.
- **Como evitar:** a marca e a skill passam a dizer que, no vídeo do Shutterstock, a IA se confere na página do item, porque o
  filtro não existe. Até lá, a decisão do Lucas vale para o vídeo 2.
- **Por que serve a qualquer canal:** todo canal que caça vídeo no Shutterstock com a regra escrita para imagem.

### 71. O "4K" do Motion Array, de um original DCI, chega abaixo de 3840×2160

- **O problema:** a página do item do Motion Array mostra, no cabeçalho, a medida do arquivo "Original" (no vídeo 2, 4096×2160
  ProRes 422, 984 MB). A skill manda baixar o formato "4K", nunca o "Original", e o "4K" é outra codificação: 3840 de largura com a
  mesma proporção do original. De um original 4096×2160 (o 4K de cinema), chegou 3840×2026, abaixo da régua de 3840×2160 do banco
  pago. A página não mostra a resolução do formato "4K", só o tamanho, no balão do botão (107,81 MB). O nome do arquivo também mudou:
  nesta conta, o Motion Array entrega `<Título>_uhd_<id>.mp4`, com o ID, e não `download`, como a skill diz.
- **O que resolveu:** o passo 4 da skill (a medida contra a página) pegou a diferença, e o conferente reprovou o arquivo só na
  técnica. O Lucas escolheu "Baixar o Original (Recomendado)": o mesmo item em 4096×2160 (ProRes 422 LT, 984 MB), que enche a tela
  sem ampliar. A skill passou a aceitar o "Original" numa linha aprovada para ele, quando o "4K" vier abaixo de 2160 (§3, passo 2).
- **Como evitar:** na Fase A, item do Motion Array com cabeçalho 4096 de largura (ou outra proporção que não 16:9) vai à lista
  dizendo que o "4K" sai abaixo de 2160 de altura, e o que o "Original" pesa. Escolher entre os dois é do dono, antes do "sim".
- **Por que serve a qualquer canal:** todo canal com régua de 3840×2160 que baixa do Motion Array.

### 72. No Envato novo, o *workspace* não é o nome de licença

- **O problema:** para a caça do vídeo 2, o Lucas criou `los-angeles` no Envato, e ele apareceu em *Workspaces*. No clique de
  baixar, a janela de licença (o *Always ask*) lista só os nomes de licença da conta, e `los-angeles` não estava lá: o *workspace* é
  uma pasta de itens, não um nome de licença. A skill fala em criar o projeto "em *Projects*", menu que o Envato novo não mostra.
- **O que resolveu:** como no Juneau, o Lucas digitou `los-angeles` na própria janela de licença e confirmou, o que já baixou o item
  aprovado. O certificado saiu citando o ID, o título e `los-angeles`.
- **Como evitar:** antes da caça, dizer ao dono que o nome de licença do vídeo se cria digitando-o na primeira janela de licença (o
  Claude não digita na caça), e que o *workspace* não o substitui. Vale corrigir a skill (§3, passo 2).
- **Por que serve a qualquer canal:** todo canal que licencia por projeto no Envato.

### 73. O título do banco diz um porto, e o letreiro do guindaste, no 4K, diz outro

- **O problema:** o clipe do Motion Array "Cargo Shipping Operations At Port Of Los Angeles" passou na Fase A (prévias de ~1.100 px)
  e no conferente da caça. No arquivo 4K, os pórticos mostram "LBCT", o Long Beach Container Terminal, no porto vizinho, que o roteiro
  separa de propósito. E o logotipo do fabricante (ZPMC) se lê em quase todo guindaste de porto.
- **O que resolveu:** o conferente olhou o arquivo baixado no tamanho real, antes de instalar (skill, §3, passo 5), e um cético
  confirmou. O clipe ficou no rascunho.
- **Como evitar:** em porto, o título do banco não prova o terminal. Na Fase A, ampliar o alto dos pórticos e procurar o nome da
  operadora; na dúvida, preferir o plano alto, sem guindaste legível, ou cobrir o porto com mapa ou foto de acervo. E todo arquivo de
  banco se olha no tamanho real antes de ir à cena.
- **Por que serve a qualquer canal:** todo canal que usa B-roll de porto, aeroporto ou fábrica, onde o nome da operadora está pintado
  no equipamento.

### 74. O cache da narração guarda as gerações antigas, e o conferidor ouviu a errada

- **O problema:** o `narrar.mjs` guarda cada pedido pelo hash do texto, e o áudio de um parágrafo que mudou (ou que se refez)
  fica no cache ao lado do novo, com o mesmo número de trecho no recibo. Os conferidores do canal (`conferir-paragrafos.py`,
  `conferir-fins.py`, `conferir-recortes.py`) escolhiam o áudio pelo número do trecho, e o último arquivo lido vencia. Na
  revisão r3a do vídeo 2, a conferência ouviu o gancho ANTIGO nos trechos 2 e 24 e acusou "palavras trocadas" que a voz nova
  não tinha; num caso pior, teria aprovado um áudio que não está na narração.
- **O que resolveu:** os três passaram a usar só a geração que a `narracao.json` atual aponta, pelo `requestId` do segmento, e
  param se ela faltar no cache.
- **Como evitar:** todo leitor de cache por trecho escolhe pelo identificador que o manifesto atual registra, nunca pelo número
  de posição. Desconfie de "trocou o texto inteiro" num trecho que acabou de ser refeito.
- **Por que serve a qualquer canal:** todo canal que narra pela API, um pedido por parágrafo, e refaz parágrafos.

### 75. A física certa e o texto parado na leitura podem apagar o movimento que dava vida à cena

- **O problema:** no teste do pacote de ilustração numa cópia da s34 do Juneau (a etiqueta de preço pendurada num fio), o
  editor consertou a construção: o fio passou a entrar no furo, e a etiqueta, a girar no ponto de contato. Mas a escala da
  queda, já aprovada, fixa o período do pêndulo em 2,8 s, e a regra da marca pede o texto parado 0,25 s antes de a voz lê-lo.
  As duas juntas só cabem com o balanço quase zerado: de ±3° para 0,43°, e a etiqueta parece parada por 2 s. O `qc-visual` deu
  nota 7 em movimento, e a escolha entre "certo" e "vivo" não era técnica.
- **O que resolveu:** o antes e o depois lado a lado, com a narração e um recorte do furo, e uma pergunta só ao dono do canal
  ("com a física", "com balanço visível" ou "não usar"). Ele escolheu a física; a regra foi para a marca e para as roupas do
  editor e do QC.
- **Como evitar:** antes de pôr física num objeto que carrega texto, conte o período e o amortecimento contra o tempo que a
  leitura deixa. Se não cabem, a decisão é de direção: diga cedo, com o antes e o depois, em vez de "ajustar" a física.
- **E a prova:** o editor mediu "fio a 20,00 px do furo em todos os quadros" pelo próprio gancho, que calculava `fioFim = furoY +
  r`: a medida repetia a fórmula e não provava nada. Quem provou foi um verificador pelo DOM (`getBoundingClientRect`,
  `elementFromPoint`) e pelos quadros do MP4. Medida de contato vem de fora do código que a produz.
- **Por que serve a qualquer canal:** todo canal com objeto animado que carrega texto (etiqueta, placa, papel, cartão), e todo
  canal que aceita uma medida escrita pela mesma peça que desenha.

### 76. O `qc-janela` reprova a cena que escreve a duração por variável

- **O problema:** no vídeo 2 (Los Angeles), o `qc-janela` saiu FAIL em 23 das 24 cenas de mapa, com "`__duracao null` <
  janela" e "não consegui ler window.__duracao". O portão não abre a cena: ele lê o HTML com uma regex
  (`scripts/qc-janela.mjs:239`), que só reconhece `window.__duracao = <número>` ou `= X` com `const X = <número>`. As cenas de
  mapa escrevem `var DUR = CENA.duracao` e `window.__duracao = DUR`, e a regex não segue o objeto. A única que passou, a s03,
  escreve `var DUR = 27.534`. A pré-carga das chaves não muda nada: não é página, é texto.
- **O que resolveu:** uma conferência à parte do mesmo fato: uma atribuição só, `DUR = CENA.duracao`, e o literal de
  `CENA.duracao` contra a janela que o próprio portão leu do espelho; e os clipes 4K com dur × 30 quadros. As 23 bateram
  (`out/los-angeles/_tmp/qc-janela-mapas-conferido.txt`). O FAIL foi lido como limite de leitura, não como defeito.
- **Como evitar:** escreva a duração como número literal (`var DUR = 12.3;`), ou ponha o literal direto em
  `window.__duracao`. O portão do molde não se edita; quem muda é a cena, na próxima vez que nascer.
- **Por que serve a qualquer canal:** todo canal que usa o `qc-janela` do molde e monta a cena a partir de um objeto de
  configuração. Um FAIL em massa, todo com o mesmo "null", é sinal de leitura, não de 23 cenas erradas, e se prova à parte antes
  de mandar consertar.

### 77. A folha topográfica antiga do USGS pode errar 50 a 250 m, mesmo com a georreferência do próprio USGS

- **O problema:** no vídeo 2 (Los Angeles), as linhas históricas foram digitalizadas das folhas HistoricalTopo do USGS
  (GeoTIFF com a georreferência do próprio USGS), com incerteza declarada de ±5 a ±11 m (a georreferência mais a leitura do
  traço). Sobre o satélite, o `qc-visual` viu o quebra-mar de 1923 correr paralelo ao muro de verdade, 55–70 m ao norte. A
  pesquisa-geo mediu: a folha "Wilmington" de 1923 erra 53–59 m no porto, e a "Calabasas" de 1903 erra 219–263 m (o píer de
  1903 aparecia 200 m dentro do mar, e a primeira explicação foi "a praia cresceu").
- **O que resolveu:** medir cada folha contra o que não mudou desde ela: a mesma obra que existe hoje (o muro, o farol, pela
  geometria do OSM), o relevo (as curvas de nível da folha contra o modelo de terreno 3DEP de hoje) ou a grade de ruas antiga.
  Onde a obra existe hoje, a geometria de hoje substitui a da folha; onde não existe, a folha se corrige pelo deslocamento
  medido perto, com a incerteza da correção declarada.
- **Como evitar:** a incerteza da georreferência de uma folha antiga não é a do arquivo: confira a folha num ponto fixo antes de
  pôr a linha dela sobre o satélite, e desconfie de toda linha que corre paralela ao que se vê no satélite. "A paisagem mudou"
  é hipótese, não explicação, até a medida num ponto fixo.
- **Por que serve a qualquer canal:** todo canal que põe mapa histórico, cadastro antigo ou folha digitalizada sobre base de
  satélite. O erro é sistemático (uma translação) e por isso parece um traço limpo e convincente.

### 78. Nem os portões nem o olho pegam o texto que a câmera leva para fora da área segura

- **O problema:** no vídeo 2 (Los Angeles), as 49 cenas passaram nos portões (`qc-cena` com a pré-carga, `portao-mapa`, o
  `conferir`), e o `qc-visual` aprovou a maior parte delas olhando quadros a cada 0,5 s. Depois, uma varredura de todo
  texto, pílula e caixa visível, na tela, sob a câmera, a cada 0,25 s, achou 17 casos reais: rótulo de mapa CORTADO pela borda
  do quadro enquanto a câmera voa (s29, s33, s44), pílula na faixa do crédito (s29, s33, s37), pílula acima da margem do topo
  (s26), a última linha de uma folha descendo abaixo de y 1880 (s38) e pílulas a 1–24 px dentro da margem lateral. O
  `qc-fora-do-quadro` do molde mede alguns instantes, e o olho do qc lê o conteúdo, não a borda.
- **O que resolveu:** um medidor que abre a cena (com a pré-carga das chaves, em mapa), anda de 0,25 em 0,25 s chamando
  `__renderAt` e mede a caixa de todo texto (pelo `Range`) e de toda pílula e cartão (pelo `getBoundingClientRect`, que já
  inclui a câmera e a rotação), contra 160 no topo, 200 nas laterais e 1880 embaixo (fora o crédito). Testado com um texto
  plantado fora da margem antes de valer. A saída tem ruído conhecido (a folha que entra de fora do quadro, a sombra, a caixa
  que agrupa os créditos), que se olha no quadro antes de mandar consertar
  (`out/los-angeles/_tmp/medir-margens.mjs` e `medir-fitas.mjs`, a promover a `ferramentas/` no fim do vídeo).
  **Promovido em 14/10/2026** (M6 da auditoria de tokens; Lucas: "M6 pode ser aplicada", e "Aplicar (Recomendado)" ao texto
  final): `ferramentas/portao-margens.mjs` mede sem pré-carga e sem tile (o mapa sai cinza, com os pedidos respondidos no
  próprio PC), a cada 0,1 s, e a prova é `ferramentas/portao-margens-provar.mjs`. O mapa com relevo 3D sai NÃO MEDIDO: o
  terreno de quem mede sem tile é plano, e a pílula presa a uma montanha muda até 19 px de lugar (s44 do Juneau).
- **Como evitar:** rode a varredura das margens em toda cena antes do `qc-visual`, e dê ao qc e ao editor o mesmo medidor como
  prova. Rótulo preso a um ponto do mapa esmaece antes de cruzar a margem, ou fica preso a ela.
- **Por que serve a qualquer canal:** todo canal com câmera que anda sobre a cena (mapa, mesa, push-in), e com área segura para
  a legenda e a barra do player.

### 79. O `trilha.mjs --conferir` apaga o `_creditos-trilha.md` escrito à mão quando a trilha não é CC BY

- **O problema:** no fechamento do vídeo 2 (09/10/2026), o `trilha.mjs los-angeles --conferir` da pré-v1 saiu 0 e, sem avisar,
  apagou `out/los-angeles/_creditos-trilha.md`, o arquivo do canal com os créditos do Epidemic Sound para a descrição. O motor
  usa o mesmo nome para o crédito que ELE grava, e só o grava para faixa CC BY; sem nenhuma CC BY no plano, ele apaga o arquivo
  para "o crédito de uma escolha anterior não ficar mentindo" (`src/trilha/biblioteca.mjs`, `conferirTrilhaDoPlano` com
  `gravarCreditos: true`). A faixa de assinatura (Epidemic) não entra nessa conta. Só o `git status` mostrou o `D`.
- **O que resolveu:** restaurar do git (`git checkout HEAD -- out/<proj>/_creditos-trilha.md`), que tinha a versão de 08/10.
- **Como evitar:** depois de todo `trilha.mjs --conferir`, rode `git status out/<proj>/` e restaure o arquivo se ele sumiu. O
  conserto de raiz é no motor (gravar também o crédito das faixas de assinatura que pedem crédito, como o Epidemic, ou não apagar
  arquivo que ele não escreveu); até lá, o crédito escrito à mão precisa estar no git antes do primeiro `--conferir`.
- **Por que serve a qualquer canal:** todo canal que usa música de assinatura que pede crédito na descrição (Epidemic, Artlist)
  e escreve esse crédito à mão com o nome que o motor administra.

### 80. Entre duas conversas do app, o `list_events` não prova quem mandou: use desafio e resposta

- **O problema:** em 12/10/2026, a Sala de controle passou a mandar tarefas a cinco conversas fixas de setor
  (`setores/REGIMENTO.md`). Cada setor precisava provar que o pedido vinha da conversa principal da Sala, e não de um
  subagente dela, que envia com o mesmo código de origem. Três tentativas falharam, medidas nos testes:
  - o nome do remetente ("Sala de controle") é só o título, e um título se troca;
  - o `SendMessage` endereça pelo título, não pelo sessionId; o `send_message` de `ccd_session_mgmt` aceita o sessionId;
  - o `list_events` não mostra os argumentos das chamadas;
  - o texto que a conversa escreve logo antes de uma chamada às vezes nem é gravado: no arquivo `.jsonl`, a mensagem
    ficou só com o raciocínio e as chamadas. Uma linha "Enviado a …" escrita como prova sumiu no 1º e no 3º teste.
- **O que resolveu:** duas provas.
  - A origem: o `from` da `<cross-session-message>` traz o sessionId, gravado pelo app.
  - Um desafio: o setor manda um código aleatório, repetindo o que recebeu, e só a conversa principal responde com o
    mesmo código, porque a mensagem que chega à Sala não passa pelos subagentes.

  Os cinco setores passaram no 4º teste. Dois achados vieram dos próprios setores:
  - repetir o conteúdo do pedido no desafio (Pesquisa e mídia);
  - `run_in_background: false` no `Agent`, porque nessas conversas ele roda em segundo plano por padrão (Arte).
- **O que sobra:** um subagente com `Bash` poderia ler o desafio no `.jsonl` da conversa principal. Contra isso:
  - os pedidos a subagente proíbem o envio entre sessões;
  - a Sala responde "não mandei: pare" a `id` que não mandou.
- **Por que serve a qualquer canal:** todo canal que quiser várias conversas trabalhando sob uma central, no app, esbarra na
  mesma pergunta (quem mandou isto?), e as três primeiras respostas parecem certas e falham.

### 81. Revisor que lê muitas imagens cai num laço: o Claude Code tira as antigas, e ele as relê

- **O problema:** no vídeo 2 (06–12/10/2026), a revisão de espectador custou uns US$ 1.280 a preço de tabela, mais que qualquer
  outra etapa, e 80 % das leituras de imagem dos revisores eram de folhas que o mesmo revisor já tinha aberto. A causa está na
  documentação do Claude Code (code.claude.com/docs/en/prompt-caching, "Accumulating many images"), sem o número.
  - Quando as imagens de uma conversa passam de um teto, o Claude Code tira as mais antigas.
  - A conversa inteira se regrava, a preço de escrita.
  - O revisor, sem ver mais o que viu, reabre as mesmas folhas, e o teto volta a estourar.
  - Nas transcrições, o teto separa sem exceção os 43 revisores: são 24 MiB de imagem em base64, umas 40 folhas de
    1920×1208. O contexto em tokens NÃO separa: houve revisor a 303 mil tokens sem regravação.
  - O sinal na transcrição é o anexo `thinking_drop` com `reason: prefix_mismatch`, junto da queda do `cache_read` ao tamanho
    do prompt de sistema.
  - As regravações custaram US$ 751. O `qc-visual` cai no mesmo laço (cerca de US$ 55).
- **O que resolveu:** cada agente que lê imagem fica abaixo do teto com folga, e termina (M10 da auditoria de tokens; CLAUDE.md,
  "A revisão de espectador, antes do Lucas").
  - Lotes de até 20 folhas e no máximo 25 imagens por revisor, contando as reabertas, e um revisor por lote.
  - A folha de passagem: a última do lote anterior, para não perder a troca de cena na fronteira.
  - `ferramentas/folhas-espectador.py` faz as folhas e os lotes, e `ferramentas/medir-espectador.py` mede cada rodada nas
    transcrições: regravações, imagens reabertas, cobertura do lote e custo.
  - No teste sobre as mesmas folhas do vídeo 2, os revisores curtos acharam 20 dos 22 achados importantes que o cético tinha
    mantido, e mais 6 novos, com 0 regravação e US$ 19 contra US$ 389.
- **Como evitar:** antes de dar muitas imagens a um agente, some os MB delas, não os tokens: ~0,62 MB de base64 por folha, teto
  de ~25 MB. Fique em ~70 % disso. Partir o trabalho em agentes curtos sai muito mais barato do que um agente longo relendo
  tudo. Não adianta mandar o agente "não reabrir": quem tira a imagem é o Claude Code, e ele precisa dela de novo.
- **Por que serve a qualquer canal:** todo canal que revisa quadros, folhas de contato, prints ou PDFs com um agente esbarra no
  mesmo teto; o laço não dá erro nenhum e só aparece na conta.

### 82. O `_commons-baixar` pode gravar o PNG de prévia com a extensão `.svg`, sem avisar

- **O problema:** no vídeo 3 (15/10/2026), a `pesquisa-logos` pediu ao `stock/_commons-baixar` da pré-v1 duas bandeiras em SVG do
  Wikimedia Commons. O original falhou, por um motivo que o script não imprime. Ele caiu na prévia PNG de 3840 px que o Commons
  gera e gravou o arquivo como `flag-panama.svg` e `flag-united-states.svg`. A extensão mentia, e nada no terminal dizia isso.
  - Um consumidor que confia na extensão (um `<img>`, uma conversão SVG → PNG, a conferência de vetor) recebe um bitmap.
  - O sha256 grava o arquivo errado como se fosse o certo.
- **O que resolveu:** a peça conferiu o tipo pelo conteúdo, renomeou o arquivo para `.png` e baixou o SVG original de novo, com um
  pedido por arquivo, o User-Agent do canal e 2 s de pausa. O sha1 bateu com o que a API do Commons dá ao arquivo.
- **Como evitar:** depois de todo download do Commons, confira o tipo pelos primeiros bytes (`\x89PNG`, `<svg` ou `<?xml`), não pela
  extensão, e confira o sha1 contra o da API (`prop=imageinfo&iiprop=sha1`).
- **Por que serve a qualquer canal:** todo canal que baixa logo, bandeira ou mapa vetorial do Commons pelo script do motor cai no
  mesmo silêncio. O conserto é do motor (o `_commons-baixar` avisar e recusar quando cai na prévia): vale avisar o Lucas e o Mateus.

### 83. Na caça pelo Brave, a prévia do banco só tocou depois do play dado pela pessoa

- **O problema:** na caça do vídeo 3 (15/10/2026), a extensão abriu a aba da caça numa janela nova do Brave. As prévias do
  Shutterstock e do Motion Array ficaram paradas em 0:00, com o círculo de carregamento, em todas estas situações:
  - com a janela fora de vista;
  - depois do clique do Lucas na aba;
  - com as janelas lado a lado;
  - com o play, o clique na barra e uma recarga pela extensão.
  Só depois que o Lucas deu o play com o próprio mouse ("Agora sim") as prévias andaram, e seguiram andando nas páginas de item
  seguintes, inclusive nas que o Claude abriu depois. Em Los Angeles (07/10), o clique dele na aba tinha bastado.
- **O que resolveu:** perguntar ao Lucas, como diagnóstico, se o play pelo clique dele tocava, sem mexer nos escudos.
- **Como evitar:** antes da primeira prévia de cada caça, peça na mesma mensagem as duas coisas: o clique na aba da caça e um play
  dado por ele numa prévia qualquer do banco. A causa provável é a regra de reprodução automática do navegador, que espera um
  gesto da pessoa na página, mas isso não foi medido. A skill (§2.0) ainda pede só o clique na aba: mudá-la pede o ok do Lucas e
  o sha256 novo no CLAUDE.md.
- **Por que serve a qualquer canal:** todo canal que caça pelo navegador com a extensão perde o tempo de várias voltas até achar
  isso, e a prévia parada não dá erro nenhum.

### 84. Um download lento do Epidemic venceu a sessão do MCP, e o pedido seguinte voltou 404

- **O problema:** em 15/10/2026, no download da trilha do vídeo 3, a primeira faixa ("Zero:Null", 10,2 MB) levou uns 6 minutos
  para chegar da CDN do Epidemic (em Los Angeles, cada uma levou segundos). O pedido seguinte de `DownloadRecording`, na mesma
  execução do `ferramentas/epidemic.mjs baixar`, voltou "HTTP 404 a tools/call", e a ferramenta parou como "RECUSADO PELO
  EPIDEMIC". Aconteceu duas vezes, sempre logo depois de um download lento; o `conferir` de logo depois entrou normalmente.
  A ferramenta abre uma sessão do MCP (o `Mcp-Session-Id`) no começo e a reusa em todos os pedidos; pelo protocolo do MCP
  (Streamable HTTP), o servidor responde 404 à sessão que ele já encerrou, e o cliente tem de abrir outra.
- **O que resolveu:** rodar o mesmo `baixar` de novo, com a mesma lista, as mesmas linhas e a mesma mensagem do "sim": a faixa
  que já está na biblioteca se pula sozinha, e a execução nova abre sessão nova. Os 4 arquivos chegaram com a duração que o
  Epidemic declara. O ritmo (15 s entre pedidos, 8 em 30 min) se conta no disco e valeu entre as execuções.
- **Como evitar:** o conserto de raiz é na ferramenta: no 404 de um pedido que levou `Mcp-Session-Id`, abrir sessão nova uma vez
  e repetir o pedido, contando o download no ritmo, com a prova no `epidemic-provar.mjs`. Até lá, o 404 depois de um download
  lento se resolve rodando o `baixar` de novo; o 404 sem download lento antes não é este caso, e vai ao Lucas.
- **Por que serve a qualquer canal:** todo cliente de servidor MCP por HTTP que reusa a sessão entre pedidos longos (download,
  render, geração) tropeça nisso, e o 404 parece "o item não existe".

### 85. O fecho que dá certo vira molde da casa, e o portão não pega paráfrase

- **O problema:** em 17/10/2026, no roteiro do vídeo 4 (o Peru), o crítico de roteiro notou que o fecho era o 4º do canal com o
  mesmo esqueleto: "So" + a pergunta do gancho repetida + a resposta em lista + uma frase curta de imagem. Cada fecho foi elogiado
  no seu vídeo, e o roteirista (e o plano, e o juiz) copiou a forma que tinha passado. O autoplágio do portão compara trechos
  literais e não vê a mesma forma com outras palavras.
- **O que resolveu:** a pergunta ao Lucas, com os quatro fechos lado a lado; ele decidiu manter o do Peru e variar do vídeo 5 em
  diante (`marca/voz.md` §1, "Como ele fecha").
- **Como evitar:** o pedido do plano e o do crítico de roteiro levam os fechos dos vídeos anteriores, e o crítico julga se o fecho
  novo repete a forma. O mesmo vale para o gancho de cinco tempos, que é molde de propósito: ali a repetição é decisão, não deriva.
- **Por que serve a qualquer canal:** todo canal com roteiro feito por agentes que leem os roteiros aprovados como exemplo tende a
  copiar a forma que passou; a variedade tem de ser regra escrita e conferida, porque nenhuma lente de um vídeo só a vê.

### 86. O Whisper engole a palavra curta depois da pausa, e o relógio de palavras fica sem decidir a fronteira

- **O problema:** em 18/10/2026, no ingest do vídeo 4 (o Peru), a pausa 149,79–149,96 s de "It stays as fog, low cloud and drizzle."
  ficou indecidida: a regra e a ElevenLabs punham a fronteira em "cloud | and", e o ouvido (o Whisper em recorte curto) ouviu "low
  cloud," antes e "drizzle." depois, sem o "and". A voz v4 reduz o "and" a uma sílaba de ~0,1 s, e o Whisper a junta à palavra
  seguinte. O portão relogio reprova a fronteira que o ouvido não decide, e o `ingest-local.py` não tinha aceite para ela.
- **O que resolveu:** a medida da energia do som em quadros de 20 ms mostrou a sílaba curta depois da pausa, separada de "drizzle" por
  um vale; o `ingest-local.py` ganhou o `--aceitar-fronteiras=<início>`, com a disciplina do `--aceitar-vaos` (só a proposta comum da
  regra e da ElevenLabs, só a fronteira que o laudo anterior do mesmo áudio mostrava indecidida, com quem e como no laudo). A prova
  negativa recusou o aceite sem o laudo anterior, e os relógios da Zona do Canal e de Los Angeles saíram idênticos byte a byte.
- **Como evitar:** nada a evitar na voz; o caso vai voltar com outras palavras curtas ("and", "a", "the") depois de pausa. A medida
  de energia é a prova; o aceite registra quem a fez.
- **Por que serve a qualquer canal:** todo canal que alinha narração sintética com um transcritor como juiz esbarra nisso: o
  transcritor tem viés de juntar a função reduzida à palavra de conteúdo, e um portão que exige o acordo dele trava sem defeito real.

### 87. O robots.txt do host de download não é o do site: ler o dele antes do primeiro pedido

- **O problema:** em 22/10/2026, no research do vídeo 4 (o Peru), o `pesquisa-geo` baixou por script o HydroBASINS v1 de
  `data.hydrosheds.org` e só depois leu o `robots.txt` desse host: "Disallow: /". O levantamento de acervos de 27/09 tinha lido o
  `robots.txt` de `www.hydrosheds.org` (só o Sitemap) e registrado "Script: sem veto", sem olhar o host para onde a página manda baixar.
  No mesmo dia, um pedido ao serviço do CENEPRED saiu junto com a leitura do `robots.txt`, antes de saber que ele vetava `/arcgis/`.
- **O que resolveu:** nada mais se pediu aos dois hosts; o Lucas aceitou baixar ele mesmo o arquivo no navegador, pelo botão da página
  do produto, e a Sala confere o sha256 contra o que já estava no disco. O levantamento (`marca/acervos/5-dados-e-fronteiras.md` §1.9)
  passou a dizer o veto do host de download.
- **Como evitar:** antes do primeiro pedido a um host, ler o `robots.txt` DELE (o de download, o de API, o de tiles), num comando
  separado, e só seguir com o "pode" lido. O levantamento de uma fonte registra os hosts todos que ela usa, não só o das páginas.
- **Por que serve a qualquer canal:** muitos acervos servem as páginas num host e os arquivos noutro (data., files., cdn., api.); a
  regra de não contornar quem recusa robô só funciona se a recusa for lida no host certo e antes do pedido.

### 88. A fala citada marcada como rótulo passa no portão de tamanho com menos da metade do piso

- **O problema:** em 22/10/2026, no art do vídeo 4 (o Peru), a s13 tinha uma citação de 9 palavras a 112 px, e o `qc-tamanho` saiu
  verde. O piso da fala citada na marca é 260 (alvo 280). O cartão estava marcado `data-qc-papel="rotulo"`, que o portão mede pelo piso
  do rótulo (104). Em outras duas cenas (s32 e s46), a fala estava marcada "fala", um papel que o portão não conhece e mede pelo piso de
  legibilidade (72). Quem pegou foi o `qc-visual`, no olho, com a régua da identidade.
- **O que resolveu:** a fala citada passou a levar `data-qc-papel="heroi"`, o único papel do portão com piso de 260. O próprio portão
  foi desenhado assim: na cena de citação, o herói é a fala. A regra entrou nas roupas do `editor-de-arte` e do `mapista`.
- **Como evitar:** o papel que a marca dá ao texto e o papel que o portão conhece precisam casar. Todo papel da marca que o portão
  não nomeia ("fala", "cota", "legenda") deve ser traduzido para um dos papéis dele, escolhendo o de piso igual ou maior.
- **Por que serve a qualquer canal:** todo portão que mede por declaração mede o que se declara, não o que se pretende. Uma marcação
  frouxa compra o verde, e o defeito só aparece no celular do espectador.

### 89. Python por heredoc no Git Bash do Windows fica preso e segura a cadeia de comandos

- **O problema:** em 22/10/2026, no qc do vídeo 4 (o Peru), 7 dos 10 lotes do `qc-visual` rodaram Python por heredoc (`python - <<'EOF'`)
  no Git Bash, apesar de o pedido dizer "o Python em arquivo, sem heredoc". Às 20:03 havia 7 Pythons presos, sem saída, esperando a entrada.
  Em duas cadeias (`&&`), o comando seguinte regravaria laudos com dados atrasados quando o Python enfim saísse. Um lote ainda tentou
  destravar com `taskkill /IM cat.exe`, que mata por nome todo `cat` da máquina.
- **O que resolveu:** o setor encerrou as 7 árvores pelo PID de cada uma, conferiu o sha256 dos laudos antes e depois (nenhum mudou) e
  repetiu o trabalho com o Python num arquivo (`python -X utf8 -B arquivo.py`).
- **Como evitar:** Python sempre num arquivo de script, nunca por heredoc nem por `-c` longo, quando quem roda é um agente no Git Bash do
  Windows; o `ffmpeg` com `-nostdin`. Redirecionar a entrada não resolve: na qualidade-8 (22/10/2026, 20:5x), 3 lotes rodaram `python -`
  com `</dev/null` e travaram do mesmo jeito. Processo preso se encerra pelo PID da árvore dele, nunca por nome (`taskkill /IM`), como a regra do
  Chrome e do Brave já manda.
- **Por que serve a qualquer canal:** qualquer canal que rode agentes no Windows usa o Git Bash; um comando que espera a entrada não falha,
  só para, e o que vem depois dele numa cadeia roda tarde, sobre um estado que já mudou.
- **Voltou na arte-17 (23/10/2026, 03:0x–05:0x):** as peças da Arte travaram 6 vezes em `python -`, com a regra no pedido. O setor encerrou cada
  uma pelo PID, sem nada gravado. A regra escrita no pedido não basta: o hábito do agente vence. Dois reforços:
  - a Sala põe a regra no `setores/REGIMENTO.md`, que todo setor lê e repete em todo pedido às peças: o Python sempre num arquivo,
    `python -X utf8 -B <arquivo>.py`, e antes do "terminou" o setor confere que não sobrou `python.exe` preso (pelo PID);
  - a trava técnica seria um hook no `.claude/settings.json` que recuse o comando do Bash com `python -` ou heredoc para o Python. Mexer
    no `settings.json` pede o ok do Lucas (CLAUDE.md, "Os setores"): fica proposto a ele.
- **A trava técnica, instalada em 24/10/2026** (Lucas: "Instalar (Recomendado)"): o hook `PreToolUse` do `.claude/settings.json` roda
  `ferramentas/trava-python.mjs` antes de cada comando do Bash, do PowerShell e do Monitor, e recusa o Python que lê o script pela
  entrada (`python -`, heredoc, here-string, pipe, `python < arquivo`, Python sem script), com a mensagem do jeito certo. O texto entre
  aspas, o comentário e o corpo do heredoc não contam (`grep "python -"` e a mensagem de commit passam). A prova tem 215 casos
  (`ferramentas/trava-python-provar.mjs`).
  - **A varredura e os céticos:** o verificador passou pelos 100 mil comandos distintos já rodados no canal (3.146 conversas, 23 GB): recusaria
    12 mil, 11.882 deles `python - <<'EOF'`. Três céticos tentaram derrubá-lo. Dos 12 mil, só 3 eram falsos positivos (uma função `py()` e
    dois `foreach` do PowerShell). Acharam também um furo real: o script `.sh` gravado por heredoc com `python -` dentro e rodado depois
    (18 comandos, 12 deles da arte do Peru). A versão consertada lê o `.sh` que o comando grava ou roda, e a nova varredura mudou só esses
    21 comandos. No mesmo dia, antes da trava, a Sala reproduziu o defeito sem querer: um heredoc VAZIO
  (`python -X utf8 -B - <<'EOF'` com o `EOF` na linha seguinte) prendeu o Python por mais de 2 minutos, e ele foi encerrado pelo PID.
  - **Por que serve a qualquer canal:** a regra escrita não venceu o hábito do agente (6 travas na arte-17 com a regra no pedido); o
    verificador vence, e custa uns 0,1 s por comando (medido: 99 ms, a partida do Node). Vale para qualquer projeto que rode agentes no Git Bash do Windows.

### 90. O motor sem rosto não lê a marca do canal: a cópia vai no pacote, e uma conferência acusa quando ela envelhece

- **O problema** (24/10/2026, no pacote `estudio/` do vídeo 5): o motor sem rosto do Top10 só semeia na obra o que está dentro do
  pacote do canal. O `obra_semente` recusa `..` no caminho (`semente.mjs:30`), e o agente do motor só lê a pasta da roupa. O
  `tokens.css`, as fontes e as regras da marca que moram em `marca/` não chegam às cenas do motor.
- **O que resolveu:**
  - a cópia byte a byte do `tokens.css` e das fontes em `estudio/semente/marca/`, com o sha256 de cada arquivo em
    `estudio/semente/ORIGEM.json`;
  - o que o motor pede diferente da marca (o crédito a 60 px) vai num `motor.css` à parte, ligado depois do `tokens.css`. A cópia
    continua igual à `marca/`;
  - `node estudio/conferir-copias.mjs` confere a semente e as fontes da roupa contra `marca/` e sai 1 com a lista do que envelheceu.
    Na primeira rodada, ele acusou os 10 arquivos da marca que tinham mudado desde 20/10.
- **Por que serve a qualquer canal:** todo canal que entra no motor tem a marca fora do pacote e muda a marca com o tempo. Sem a
  conferência, a roupa do motor fica para trás em silêncio. No Alpha Point, a roupa de 20/10 já não tinha as regras de 22 a 24/10.
  Vale avisar o Lucas e o Mateus: os canais Polar Plasma e Blue Casefiles têm o mesmo caminho.

### 91. O transcritor escreve o nome que está no texto: quantas sílabas a voz disse, quem mostra é o espectro

- **O problema** (27/10/2026, na amostra de nomes do vídeo 5): o Lucas escolheu "Nares" em uma sílaba (NAIRZ), e a Sala precisava
  saber se a voz já o dizia assim ou se o texto do portão pedia um alias. O faster-whisper escreveu "Nares", como está no texto, e a
  mesma grafia serve às duas pronúncias. O alinhamento da ElevenLabs também não mostra: ele reparte o tempo da palavra entre as letras.
- **O que resolveu:** `ferramentas/formantes.py` mede as vogais quadro a quadro (LPC, só com o numpy) e desenha o espectro pelo
  ffmpeg. No "Nares", o "r" derrubou o F3 e a voz entrou direto no "z", sem o "ee" da segunda sílaba (F1 baixo e F2 alto). Que a
  medida enxerga o "ee" mostrou uma palavra da mesma voz que o tem: o "ri" de "Mariana", no mesmo lote, com F1 de ~300 Hz e F2 acima
  de 2.000 Hz.
- **Como evitar:** quando a dúvida é de som (uma sílaba a mais ou a menos, uma vogal trocada), o transcritor não é o juiz. Meça o
  trecho e compare com uma palavra da mesma voz que tem o som em dúvida. A medida não mostra a tônica, e vale só para a geração medida.
- **Por que serve a qualquer canal:** todo canal com voz sintética confere os nomes pelo transcritor, e ele escreve o que espera ler.
  Um canal de culinária teria o mesmo problema com "Worcestershire" ou "quinoa".

### 92. O preparar-cena regrava o perfil do mapa a cada cena nova, e a linha do tempo passa a achar velhos os clipes de mapa já feitos

- **O problema** (29/10/2026, no vídeo 4, `atlantico-fundo`): o verbo `proxies` da linha do tempo pulou 21 das 25 cenas de mapa com
  "sem clipe 4K em dia". Os carimbos batiam com o HTML e terminavam em `2160p`. O que pesou foi a regra da linha do tempo
  (`ferramentas/linha-do-tempo/linha.mjs`, `clipeEmDia`): um arquivo citado pela cena mais novo que o clipe deixa o clipe velho. O
  `_media/_vendor/perfil-mapa.js` tinha a data das 08:44, de um `preparar-cena` da arte-2. Esse script grava o `perfil-mapa.js` e o
  `.json` a cada cena nova, mesmo quando o texto não muda (`gravarAtomico`). Ele só marca as cenas para refazer quando o texto muda.
- **O que resolveu:**
  - um script gera o perfil como o `preparar-cena` gera, com o `perfis.mjs` do motor e o `canal.json`, e compara com o disco. Deu
    igual byte a byte nos dois arquivos;
  - com o conteúdo provado igual, a data dos dois voltou à da cópia do vendor (`touch -r camera-mapa.js`, 00:27, quando o conteúdo
    nasceu);
  - o `proxies` fez as 21 cópias que faltavam, e o `quadros` tirou os quadros das 25 cenas de mapa.
- **Como evitar:** depois de toda tarefa de arte que rode `preparar-cena`, antes do `proxies`, refaça a prova. Só com o texto igual a
  data volta. Com o texto diferente, os clipes estão mesmo velhos, e o render se refaz. O conserto de verdade é a linha do tempo comparar
  o perfil pelo conteúdo, e não pela data, com o caso novo na prova dela.
- **Por que serve a qualquer canal:** todo canal que use a linha do tempo com cena de mapa da pré-v1 cai nisso no segundo mapa de cada
  vídeo. A data de um arquivo regravado sem mudança não prova que ele mudou.
