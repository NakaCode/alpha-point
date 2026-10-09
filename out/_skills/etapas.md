# Skills das etapas e dos procedimentos (proposta, 08/10/2026)

Parte "AS ETAPAS E OS PROCEDIMENTOS" do mapeamento de skills do Alpha Point. Só leitura: nenhuma skill, agente, roupa, marca,
`CLAUDE.md` ou motor foi criado ou editado; a única escrita é este arquivo. Não rodei render, portão, `regie`, nem nada que
peça à MapTiler, à ElevenLabs ou ao Epidemic; não abri navegador nem li o arquivo de chaves. A parte irmã, dos aprendizados
(`out/_skills/aprendizados.md`), já existe; os nomes que coincidem estão na seção 9, para a consolidação.

Lido: o `CLAUDE.md` inteiro (126.441 bytes), o topo de cada arquivo de `ferramentas/`, os scripts de bancada citados
(`out/juneau/_pesquisa/`, `out/los-angeles/_pesquisa/`, `roteiros/*/_ferramentas/`), o `APRENDIZADOS.md` (itens 12 a 78), a
`marca/embalagem.md`, `voz.md`, `cta.md`, os cabeçalhos de `identidade.md` e `midia.md`, os cabeçalhos das 14 roupas, o
`.claude/skills/cacar-no-chrome/SKILL.md` (só a estrutura), a linha `out/los-angeles/linha.md`, e, no motor (só leitura),
`db/pipeline-faceless.json`, os verbos de `src/ferramentas/` e as skills e agentes do molde.

---

## 1. Resumo

**62 skills propostas** (seção 4), em 8 grupos que seguem a vida de um vídeo: antes do roteiro (8), voz e relógio (7), a linha
e o espelho (3), pesquisa e mídia (8), direção, texto e arte (10), QC, aprovação e render (8), trilha, XML e publicação (6),
operação (12). Com elas, o `CLAUDE.md` vai de **126,4 KB para uns 30 KB** (tira 96,7 KB; seção 6). Os 30 KB que ficam são
regra e decisão: quem é o dono, o que se pode e não se pode, o que o Lucas decidiu e o que nunca se faz.

Seis achados mudam o desenho, e a ordem de importância é esta:

1. **Procedimento mora em quatro lugares, e só um deles está no `CLAUDE.md`.** (a) O `CLAUDE.md`, com uns 97 KB movíveis.
   (b) As 14 roupas (`marca/agentes/`, 286 KB no total): cada uma tem um "§0, O canal em uma tela" de 2,7 a 5 KB (55 KB somados)
   que repete o mesmo núcleo (faceless, `words.json` com a grafia da voz, idioma, formato de tela, vocabulário de máquina,
   sem capítulos, cauda de 20 s, MapTiler, "nunca rode `narrar.mjs`", regra da rede); os textos não são byte a byte iguais
   (conferi 5 por md5), mas o núcleo é o mesmo. (c) Os scripts de bancada, que hoje se **copiam por vídeo**
   (`roteiros/los-angeles/_ferramentas/gate.mjs`, `preparar-voz.mjs` e `pagina-decisoes.py` são cópias do Juneau com o nome do
   vídeo dentro) ou ficam num vídeo e servem a outro (o vídeo 2 chama `out/juneau/_pesquisa/*.py`). (d) Os relatos
   (`out/<proj>/_tmp/*`, os `.md` de workflow).
2. **Cinco passos da linha não têm agente no canal.** Pauta, roteiro, crítica de roteiro, título e miniatura, e o QA do XML
   existem como agentes no molde (`pesquisador-de-pauta` 9 KB, `roteirista` 2 KB, `critico-de-roteiro` 1,7 KB,
   `curador-titulos-thumbs` 13 KB, `qa-montagem` 39 KB), mas **não foram instalados**; no Juneau e no vídeo 2 rodaram como
   agentes gerais com o pedido escrito na hora. Aqui a skill não complementa o agente: **ela é o ofício**. É onde "agente +
   skill" rende mais, e onde o molde dá a base para adaptar (só leitura).
3. **Os 15 especialistas não têm a ferramenta `Skill`.** O `tools:` de cada `.claude/agents/<id>.md` lista só `Bash, Edit, Glob,
   Grep, Read, Write` (mais `WebFetch`/`WebSearch` em alguns). Eles não se editam. Pelo frontmatter, o catálogo de
   name/description não chega a eles; a skill só vale para o Claude central. O caminho que não mexe no agente: **a roupa**
   (editável, lida por todo agente) ganha uma seção "Skills do meu passo" com o caminho de cada `SKILL.md`, e o pedido de
   despacho repete os caminhos (modelo na seção 5). O agente lê com `Read`. **Não testei**: vale um despacho de prova com uma
   skill de mentira antes de apostar nisso.
4. **"Milhares de skills" tem um custo que não é irrisório.** O catálogo (name + description de todas) entra no contexto de
   toda sessão do Claude central. A 60 a 80 tokens por entrada (a descrição atual do `cacar-no-chrome` tem ~900 caracteres, uns
   280 tokens), mil skills seriam 60 a 80 mil tokens por sessão: mais que os ~39 mil (126 KB a ~3,2 caracteres por token, estimado) do `CLAUDE.md` de hoje, que é justamente o
   que se quer encolher. Estimativa minha, sem medida; medir na primeira sessão depois da Onda 1. O desenho que escala: **skill
   de etapa com poucas linhas no catálogo (uns 60 a 120) e as lições de erro dentro dela** (`licoes.md`, lido por quem está
   naquela etapa); skill própria só quando o problema tem gatilho próprio (uma frase de pedido, uma mensagem de erro). A
   descrição fica em até ~300 caracteres.
5. **A mesma decisão escrita em dois lugares já divergiu.** `marca/voz.md` §1 ainda diz "eleven_v3, voz
   `iAc9oLyb1zcwD4O3ZTBv`" enquanto o `canal.json` diz `eleven_v4`, voz `829pig94w9GefZ9jJQYl`, pausa 0,25 (e o `CLAUDE.md`,
   a de 26/09). É o item 46 do `APRENDIZADOS.md` acontecendo de novo. Regra para as skills: **valor de configuração se lê do
   `canal.json` na hora; decisão do Lucas se cita por ponteiro (`identidade.md` §6) com a data, e só se transcreve a frase dele
   onde ela é a própria regra.**
6. **Mover texto quebra ponteiros.** As roupas e a skill da caça apontam para seções do `CLAUDE.md` pelo nome (~200
   ponteiros; os mais citados: "A marca" 34×, "Os especialistas" 25×, "O vídeo fala inglês" 17×, "Os portões medem" 8×).
   Ao esvaziar uma seção, o título fica, com 2 a 4 linhas que apontam para a skill. Assim nenhum ponteiro quebra e nenhuma roupa
   precisa ser reescrita na mesma noite.

**Onde não mexer enquanto o vídeo 2 está no `art`/`qc`:** reestruturar `CLAUDE.md` e roupas com subagentes rodando troca o chão
debaixo deles. A Onda 1 (seção 7) é para depois da revisão de espectador e do aviso ao Lucas, ou entre vídeos.

---

## 2. Convenções para todas as skills

- **Pasta** `.claude/skills/<name>/SKILL.md`; `name` em kebab-case igual ao da pasta, em português, curto (verbo no infinitivo
  quando é etapa: `narrar-elevenlabs`; sintoma quando é problema, nome da parte irmã).
- **`description`** com no máximo ~300 caracteres, começando por "Use quando…", com **as palavras que a pessoa usaria ao
  pedir** ("próximo vídeo", "o recolher saiu 3", "ficou lido") e o nome do script ou da mensagem. Sem história, sem datas,
  sem sha. Uma frase vizinha que não deve disparar a skill errada é testada (ver abaixo).
- **Corpo** do `SKILL.md` em até uns 10 KB: *Quando usar / não usar*, *Antes de começar* (o que ler, o que conferir),
  *Etapas* numeradas (cada uma diz o comando e a prova de que passou), *Pare se* (3 a 6 linhas: as regras de segurança que
  valem naquela etapa, repetidas aqui de propósito, porque o agente pode não ler o `CLAUDE.md`), *Saída* (arquivos e o que
  registrar), *Decisões do Lucas* (ponteiro + data).
- **Peso extra fora do catálogo**, na mesma pasta: `scripts/` (o que hoje é cópia por vídeo, parametrizado por `<proj>`),
  `licoes.md` (os erros desta etapa, uma linha cada: sintoma → causa → o que fazer, com o item do `APRENDIZADOS.md`),
  `gatilhos.md` (3 frases que devem disparar e 2 que não).
- **Scripts de bancada**: ao entrarem numa skill, saem de `out/<proj>/_pesquisa/` e ganham o `<proj>` por argumento; o topo
  do arquivo continua dizendo uso e limites. Promover é copiar e provar; o original fica até o vídeo fechar.
- **Teste de disparo** antes de dar por criada: três pedidos em linguagem natural levam à skill, dois pedidos vizinhos não.
  Sem isso o catálogo cresce e o casamento name/description, que é o ganho que o Lucas quer, não se prova.
- **Decisão do Lucas**: mora em `marca/` ou no `canal.json`. A skill cita (seção, data) e, onde a frase dele é a regra
  (ex.: "sem títulos de capítulo na tela"), a transcreve com a data. Mudou a decisão: muda a fonte, e uma busca (`grep`) pela
  frase velha em `.claude/skills/` e `marca/agentes/` precede dar por registrada.
- **O que NÃO vira skill**: a decisão em si, a lista "Nunca", as regras de segurança do `CLAUDE.md`, e o que é só do motor
  (vai para o `APRENDIZADOS.md` e ao Lucas Barrios e ao Mateus). Skill é o *como*; regra é o *quê e por quê*.
- **Skill nova só carrega em sessão nova do app** (`CLAUDE.md`). A sessão que as cria não as vê no catálogo.

---

## 3. A linha, com as skills em cada passo

| Passo da Régie | Quem faz hoje | Skills |
|---|---|---|
| antes da linha: pauta | agentes gerais, à mão | S01 `escolher-pauta`, S02 `medir-concorrencia-vidiq` |
| antes: dossiê, roteiro, bancada, aprovação | agentes gerais, à mão | S03, S04, S05, S06 |
| antes: título e miniatura | agentes gerais, à mão | S07 `titulo-e-miniatura` |
| antes: cópia para a voz, narração | Claude central | S08, S09, S10, S11, S12, S13 |
| `open` | Claude central | S16 `abrir-video-na-linha` |
| `ingest` | Claude central (bancada) | S14 `relogio-de-palavras`, S15 `gerar-master` |
| `cut_detect` | dispensado (faceless) | S17 `avancar-passo-da-linha` |
| `mirror` | montador | S18 `montar-espelho` |
| `research` | pesquisa-*, conferente, central (caça) | S19 a S26 |
| `art_direction` | diretor-de-arte | S27 `dirigir-arte`, S33 |
| `conducting` | regente-de-imagem | S28 `reger-imagem` |
| `screen_text` | redator-de-tela, verificador-de-fatos | S29, S30 |
| `requisitions` | portões | S17 |
| `art` | editor-de-arte, mapista | S31, S32, S33, S34, S35, S36, S47 |
| `qc` | portões, qc-visual, espectador | S37 a S42 |
| aprovação antes do render | Lucas, na linha do tempo | S43 `aprovar-na-linha-do-tempo` |
| `render` | Claude central | S44 `renderizar-cena-4k` |
| `score` | Claude central | S45, S46 |
| `finalize` | Claude central | S48 `entregar-xml-premiere` |
| depois: descrição, publicação | Lucas, com o central | S49, S50 |
| em todos | Claude central | S51 a S62 |

---

## 4. O catálogo

Cada bloco: **description** (a que iria no `SKILL.md`), **Etapas** (resumo), **Usa** (arquivos e comandos), **Decisões do
Lucas** (o que a skill carrega, por ponteiro), **Hoje mora em** e **Tira do `CLAUDE.md`** (bytes que saem de lá; "0" quando o
procedimento hoje está num relato, ferramenta ou roupa e não no `CLAUDE.md`).

### A. Antes do roteiro

#### S01 · `escolher-pauta`
- **description:** Use quando o Lucas pedir o próximo vídeo, um tema novo ou sugestões de pauta: gera candidatos, cura, confere fontes e gancho, derruba o fraco com um cético e entrega a lista para ele escolher.
- **Etapas:** (1) ler o pedido e as restrições dele ("uma da Califórnia", mínimo de 10 min, mais mapa); (2) três geradores em paralelo (estrutural, demanda comprovada, recorte regional): ~24 candidatos; (3) curador junta duplicatas, escolhe 5, descarta com motivo; (4) viabilidade: abrir as fontes de cada pauta, e um redator escreve o gancho em cinco tempos e a assinatura (embalagem §1); (5) um cético por pauta reabre as fontes e tenta derrubar, e o que ele derruba vai só para "O que o cético derrubou", nunca para o texto; (6) gravar `pautas/AAAA-MM-DD-video-N.md` (contradição em uma linha, mapa, risco partidário, nota, veredito) e o `.fontes.json`; (7) dizer o que não foi medido (concorrência) e oferecer S02; (8) a escolha é do Lucas, por lista de opções.
- **Usa:** `pautas/*.md`, `marca/embalagem.md` §1, `marca/voz.md` §1 e §2, `marca/identidade.md` §0 e §1. Base no motor (só leitura): `template/.claude/agents/pesquisador-de-pauta.md`.
- **Decisões:** "gancho mais forte e intrigante" (07/10); "uma sugestão sobre a Califórnia"; mais mapa quando o contexto permitir (27/09); nada de opinião partidária (`voz.md` §2); vídeo de no mínimo 10 min (07/10); autonomia "pauta e roteiro: o Lucas aprova o tema" (02/10).
- **Hoje mora em:** o "Método" no topo de `pautas/2026-10-07-video-2.md` e no relato do workflow `wf_d5502d0a-11a`. **Tira: 0.**

#### S02 · `medir-concorrencia-vidiq`
- **description:** Use antes de escrever o roteiro para saber quem já fez o tema no YouTube: mede a concorrência com o vidIQ dentro de um teto de créditos que o Lucas aprovou.
- **Etapas:** (1) pedir o teto no chat e esperar o ok ("até 100 créditos", 07/10); (2) `vidiq_balance` antes; (3) até 8 buscas de 5 créditos (tema, "why is…", história do lugar, o ângulo; relevância e mais vistos); (4) anotar vídeo, canal, inscritos, data, views; (5) concluir: a lacuna, o ângulo gasto, o termo que colide na busca (ex.: "Harbor Gateway" vira notícia policial); (6) `vidiq_balance` depois e gravar `pautas/<proj>/concorrencia-vidiq.md` com o gasto; (7) avisar no `#status`.
- **Usa:** `mcp__vidiq__vidiq_youtube_search`, `vidiq_balance`. Nunca a busca do YouTube por robô (o `robots.txt` veta).
- **Decisões:** "Sim, até 100 créditos (Recomendado)" (07/10). **Pare se:** o teto acabar; 8 buscas não provam ausência, e o texto diz isso.
- **Hoje mora em:** `pautas/los-angeles/concorrencia-vidiq.md` (o resultado, não o método). **Tira: 0.**

#### S03 · `pesquisar-dossie-de-pauta`
- **description:** Use quando o tema foi escolhido e falta o dossiê de fatos: cinco dimensões pesquisadas em paralelo, cada uma conferida por um cético, mais um crítico que cruza as dimensões.
- **Etapas:** (1) fixar as 5 dimensões do tema (no LA: documento, escala humana, evento, experiência, mecanismo); (2) um pesquisador por dimensão grava `pautas/<proj>/_dimensoes/<d>.json` (afirmação, fonte, passagem literal, chave de independência, volátil); (3) um cético por dimensão reabre as fontes e grava `<d>.verificado.json`; (4) o crítico transversal cruza as dimensões: erro de lista-resumo oficial, correção por inflação inválida, duas chaves de independência para a mesma origem, e **servidor que recusou robô a outro agente**; (5) consolidar `fundamento.json` (+ `fundamento.md` derivado) e `verificacao.json`; (6) passagem de imprensa cortada em 20 palavras (teto ~150 por fonte), a íntegra só em `midia/<proj>/fontes/`; (7) marcar os voláteis para reconferir na véspera (S50).
- **Usa:** o contrato do `pesquisador-de-pauta` (molde); S25 (a regra da rede, no pedido a cada pesquisador).
- **Decisões:** anti-robô no pedido de todo subagente com rede (24/09); recusa vale para o servidor inteiro, em qualquer caminho (item 66); cópia arquivada só de página oficial do Alasca (27/09); canal en-US, AP Stylebook.
- **Hoje mora em:** `APRENDIZADOS.md` 12, 14, 66, 67; `pautas/*/verificacao.json`. **Tira: 0.**

#### S04 · `gerar-roteiro-geografia` (o `/gerar-roteiro-curiosidades` do exemplo do Lucas; ele escolhe o nome)
- **description:** Use para escrever o roteiro de narração de um vídeo do Alpha Point (geografia com mapa, inglês dos EUA, canal sem rosto) a partir do dossiê: plano, orçamento de palavras, gancho de cinco tempos, partes, gate e notas.
- **Etapas:** (1) ler o dossiê, `voz.md` inteiro, `embalagem.md` §1 e §2, `knowledge/roteiro/*` e `knowledge/ROTEIRO-NARRACAO.md`; (2) planos concorrentes (no LA: forma, água, briga) e um juiz → `plano-final.json` com o orçamento por parte (±30 palavras); (3) orçamento total: mínimo de 10 min de fala (vídeo 2: 1.950 a 2.150 palavras a 184/min; Juneau: 1.771 a 171/min), média de frase ≤ 18; (4) o gancho no molde de cinco tempos, com a contradição concreta nos primeiros 15 s e a assinatura "You're at Alpha Point, and this is where the story of <tema> begins."; (5) escrever as partes em sequência, cada uma só com as evidências que lhe foram atribuídas; fonte dita na voz, termo técnico definido na primeira vez, no máximo 2 frases seguidas abrindo com data; (6) `gate.mjs` antes de qualquer lente (tamanho, média, palavras vetadas, datas seguidas, assinatura, promessa); (7) o que o orçamento cortou vai para `_trabalho/escrita-notas.md` com "para onde foi" (rótulo, folha, medidor na tela); (8) gravar `roteiro-narrador.md` (só o falado), `roteiro-editor.md` (de onde vem cada frase, auditoria), `roteiro.json` e o sha256; (9) passar a S05.
- **Usa:** `roteiros/<proj>/_ferramentas/gate.mjs` (hoje cópia por vídeo, com `WPM` e limites dentro: virar `scripts/gate.mjs` com `--wpm`, `--min`, `--max`). Modelo: Fable 5.1.
- **Decisões:** roteiro escrito aqui, em Fable 5.1 (26/09); sem títulos de capítulo na tela (26/09); mínimo de 10 min e "pode criar o roteiro" (07/10); assinatura do canal (07/10); mais mapa (27/09); `voz.md` §2 inteiro (o que nunca diz).
- **Hoje mora em:** `roteiros/*/_ferramentas/`, `_trabalho/`, `APRENDIZADOS.md` 13; no `CLAUDE.md` só duas frases. **Tira: 0,6 KB.**

#### S05 · `rodar-bancada-do-roteiro`
- **description:** Use depois de escrever ou mudar um roteiro: quatro lentes (fatos, clareza, locução e crítico) julgam o mesmo texto, e os achados viram uma lista fechada de trocas, nunca uma reescrita.
- **Etapas:** (1) gate verde; (2) anotar o sha256 do texto; (3) as quatro lentes em paralelo, cada laudo grava o sha que julgou (`roteiros/<proj>/qc-roteiro/`); (4) juntar os achados numa lista fechada e **resolver os conflitos entre lentes antes** (a clareza pede cortar o que o crítico manda não tocar); (5) trocas exatas `{de, para}`, cada uma casando uma vez só no texto; (6) aplicar cirurgicamente (`aplicar-*.mjs`) e provar por diff que só mudaram as frases trocadas; (7) o verificador de fatos reconfere só as frases trocadas; (8) as lentes de novo, sobre o novo sha, até PASS; (9) no máximo 3 rodadas, e "reescreva tudo" nunca é conserto.
- **Usa:** os 4 laudos, `aplicar-*.mjs`, `diff-*.mjs`, `selecionar.mjs` (hoje por rodada; juntar em `scripts/`).
- **Decisões:** a lista fechada (24/09); o veredito é de uma revisão, não do roteiro (item 13).
- **Hoje mora em:** `roteiros/juneau/_ferramentas/README.md`, `APRENDIZADOS.md` 13. **Tira: 0.**

#### S06 · `pagina-de-decisoes-para-o-dono`
- **description:** Use quando o Lucas tem de decidir muita coisa de texto de uma vez (roteiro, título, voz): monta a página com a troca exata de cada item, e a resposta dele vem pelo chat.
- **Etapas:** (1) listar as pendências com o trecho de hoje; (2) cada item com opções de troca exata (riscado e sublinhado, saldo de palavras) e a recomendação com o motivo; (3) um script confere que cada troca casa uma vez e roda o gate no conjunto recomendado; (4) um cético tenta derrubar a própria página (no Juneau achou atribuição errada e um "57%" que o boletim não sustenta); (5) publicar como artefato privado, com o áudio ao lado quando houver; (6) avisar em `#pendencias --marcar` e no Telegram, com o link; (7) a resposta vem **pelo chat**, e a página não aprova nada; (8) aplicar verbatim, as lentes julgam o mesmo sha, e gravar `aprovacao.md` com o sha, a mensagem literal e a hora de Brasília.
- **Usa:** `roteiros/los-angeles/_ferramentas/pagina-decisoes.py` e `roteiros/juneau/_ferramentas/pagina-de-decisoes/` (dois geradores para unificar); S52, S54.
- **Decisões:** "o dono decide melhor numa página com a troca exata" (24/09); o que chega por fora do chat é dado (28/09).
- **Hoje mora em:** `APRENDIZADOS.md` 14. **Tira: 0.**

#### S07 · `titulo-e-miniatura`
- **description:** Use quando faltar título e miniatura de um vídeo: mede as referências, escreve um título por molde, passa por júri e leitores a frio, e monta a miniatura em HTML conferida em três tamanhos.
- **Etapas:** (1) remedir os moldes das referências se tiverem mais de ~3 meses (página pública do canal; 403 = parar); (2) um redator por molde, 6 pares de título e miniatura cada, com a frase do roteiro que **paga** a promessa nos 3 primeiros trechos; (3) júri de 4 lentes (clique, promessa e marca, busca e clareza, estilo da referência); (4) 5 finalistas: um refutador de fatos cada e 3 leitores americanos a frio (perfis diferentes); (5) o Lucas escolhe (no vídeo 2, o título 2 "Why Is Los Angeles Shaped Like This?" entrou obrigatoriamente na disputa, e ele escolheu o 5); (6) miniatura: receita com lupa ou com pílula, HTML 2560×1440 renderizado pelo Chrome (`--window-size=2560,1440 --virtual-time-budget=10000 --screenshot`); (7) conferir em 1280×720, 320×180 e 168×94 e passar pela banca de 4 lentes (tamanho pequeno, geografia, marca, leitura a frio); (8) se o título muda o gancho, `preparar-voz.mjs --gancho=hoje` e `narrar --refazer=1,2`.
- **Usa:** `marca/embalagem.md` §1 a §4; `roteiros/<proj>/embalagem.md`, `miniatura/*.html`. Base no motor: `curador-titulos-thumbs.md`.
- **Decisões:** título é contrato (o núcleo se paga em 3 frases); data absoluta; uma causa só ou nenhuma; as miniaturas favoritas do Lucas (Capital Financeiro); o exemplo do Geoff (07/10); a paleta do canal na miniatura.
- **Hoje mora em:** `embalagem.md` (dado e regra: fica), o processo no §4 dela e no item 15. **Tira: 0.**

#### S08 · `preparar-texto-para-voz`
- **description:** Use depois que o roteiro foi aprovado e antes de narrar: gera a cópia para a voz com datas, números e siglas por extenso e os aliases de pronúncia, e prova que desfazer as trocas devolve o texto aprovado.
- **Etapas:** (1) conferir que o `roteiro-narrador.md` é a revisão aprovada (sha); (2) a folha de pronúncia do vídeo começa de `marca/pronuncias.md`; (3) trocar datas, anos, dinheiro, `%` e siglas por extenso; alias de nome só depois de confirmado de ouvido e de a voz errar na amostra; (4) a prova: desfazer as trocas dá o aprovado byte a byte, e não sobra dígito, `$` nem `%`; (5) gravar `roteiros/<proj>/voz/{texto-para-voz,trocas}.md` e `out/<proj>/roteiro.md` (o que o `narrar` lê); (6) variantes (ex. `--gancho=hoje`).
- **Usa:** `roteiros/<proj>/_ferramentas/preparar-voz.mjs` (cópia por vídeo, com o sha do roteiro no topo: virar `scripts/preparar-voz.mjs <proj>` que lê o sha do `roteiro.json`).
- **Decisões:** pronúncias confirmadas de ouvido (24/09); o `out/<proj>/roteiro.md` **nunca** é grafia de tela (item 36.2).
- **Hoje mora em:** `roteiros/*/_ferramentas/preparar-voz.mjs`, `APRENDIZADOS.md` 16.3. **Tira: 0.**

### B. Voz, relógio e master

#### S09 · `escolher-voz-elevenlabs`
- **description:** Use quando for escolher, refazer ou testar a voz do narrador na ElevenLabs (ficou lida, mudou de tom, vozes padrão vão expirar): audição pública, Voice Design, Remix e teste às cegas dentro do crédito.
- **Etapas:** (1) nada de voz padrão antiga (expira em 31/12/2026); (2) ouvir as páginas públicas `voice-library/<categoria>` (nome, descrição, `voice_id` e prévia estão nos dados da página, sem login), pelo navegador do app; (3) separar voz desenhada (traz `voicePrompt`/`generationSeed`) de clone PVC; (4) descrever quem **conta**, não quem apresenta (âncora de jornal lê como lida); (5) prova curta no **mesmo modelo** da narração (~1.500 créditos, contra ~11.000 da narração inteira); (6) Remix: `remix-ritmo.mjs --simular` primeiro, 3 opções por chamada, salvar só com ok; (7) no vídeo novo, teste às cegas das variantes (stability, pedido por parágrafo ou por bloco), medido por `medir-voz-v4.py` (ritmo, F0, centroide); (8) registrar a escolha em `canal.json › narracao` e em `marca/vozes.html`.
- **Usa:** `out/juneau/_pesquisa/remix-ritmo.mjs`, `out/los-angeles/_pesquisa/teste-voz-v4.mjs` e `medir-voz-v4.py`, `narrar.mjs --vozes`.
- **Decisões:** a voz "a B é a melhor" (26/09); do vídeo 2, ElevenLabs v4, mesma voz, `stability 0,5`, 184 palavras/min aceito ("ritmo ok", 07/10); o v4 ignora velocidade; crédito: S53.
- **Hoje mora em:** `CLAUDE.md` (a voz e o vídeo 2), `APRENDIZADOS.md` 16, `narracao-conferencia.md`. **Tira: 2,2 KB.**

#### S10 · `narrar-elevenlabs`
- **description:** Use para gerar ou refazer a narração de um vídeo pela API da ElevenLabs: simula o custo, narra um pedido por parágrafo, confere, refaz só o parágrafo com erro e trata o áudio.
- **Etapas:** (0) ler `canal.json › narracao` (voz, modelo, estabilidade, pausa, cauda): **nunca copiar esses valores em prosa**; (1) `saldo-elevenlabs.mjs` (só GET) e anotar o saldo; (2) `narrar.mjs <proj> --simular`, dizer ao Lucas o que vai gastar; (3) conferir o teto do vídeo (15.000 sem pedir ok desde 02/10; no vídeo 2 o Lucas liberou "mais que 15 mil", registrando) e que o Juneau e o que passar do teto pedem ok; (4) narrar, **pela API e um pedido por parágrafo** (pelo site o v3 pode parar antes do fim sem erro); (5) S11 sobre o que saiu; (6) `--refazer=N` só nos parágrafos com erro (opção sempre com `=`); (7) S12 depois de **toda** rodada; (8) saldo depois, e registrar o gasto em `narracao-conferencia.md` (recibos, hora de Brasília) e no `#status`.
- **Usa:** `node C:/projetos/regie-v1/src/ferramentas/narrar.mjs`, `out/los-angeles/_pesquisa/saldo-elevenlabs.mjs`. Regravar áudio diferente aposenta `words.json`, `transcricao.json` e `transcript.txt` (viram `.obsoleto-<carimbo>`).
- **Decisões:** narração pela API (25–26/09); a pausa do narrar soma-se ao silêncio das pontas (item 17.30); sem títulos de capítulo; crédito (02/10, 07/10); Lucas entra no site pelo navegador, a senha nunca é do Claude.
- **Hoje mora em:** `CLAUDE.md` "O que a Régie faz" e "A autonomia", `narracao-conferencia.md`. **Tira: 2,9 KB.**

#### S11 · `conferir-narracao`
- **description:** Use depois de narrar ou refazer parágrafos: transcreve cada trecho com o Whisper local e compara com o roteiro palavra a palavra, e olha de perto o fim de cada parágrafo.
- **Etapas:** (1) `conferir-paragrafos.py <proj>` (large-v3 local, por trecho, só a geração que a `narracao.json` **atual** aponta, pelo `requestId`, nunca pelo número do trecho, que o cache duplica); (2) `conferir-recortes.py`/`conferir-trechos.py` nos pontos suspeitos (recorte de ~5 s; eco "the point. point." é do Whisper); (3) `conferir-fins.py`: última palavra com probabilidade < 0,8 é suspeita (a API corta o "-y" de "ferry"); (4) ano e número trocados ("1984" por "1994"); (5) a escuta do Lucas antes do master, obrigatória (repetição passa por tudo); (6) decisão: `--refazer=N` ou aceitar, registrada.
- **Usa:** `out/juneau/_pesquisa/conferir-paragrafos.py`, `conferir-trechos.py`, `comparar-narracao.py`; `out/los-angeles/_pesquisa/conferir-fins.py`, `conferir-recortes.py` (promover os cinco).
- **Decisões:** nenhuma geração é aceita sem conferir; o ouvido humano é o último portão (26/09).
- **Hoje mora em:** `CLAUDE.md` (item 4 da narração), `APRENDIZADOS.md` 28 a 32 e 74. **Tira: 1,0 KB.**

#### S12 · `tratar-narracao`
- **description:** Use depois de qualquer rodada do narrar: esmaece as pontas dos trechos, limita o pico e acrescenta a cauda de 20 s da tela final, sem mudar nenhum tempo.
- **Etapas:** (1) só roda sobre a `narracao.wav` que o narrar acabou de gravar (o sha tem de bater com o `narracao.json` sem `tratamento_canal`); (2) `python out/juneau/_pesquisa/tratar-narracao.py <proj>`: fade 5 ms na entrada e 15 ms na saída, zera som solto de fim, true peak em −1 dBTP; (3) cauda: `canal.json › narracao.cauda_tela_final_s` (20 s) de silêncio digital no fim, segmento `{tipo: "pausa", motivo: "tela_final"}`; (4) registrar em `narracao.json › tratamento_canal`; (5) conferir que a cauda bate com o `canal.json` (o `gerar-master` recusa se não bater); (6) o script se recusa a tratar duas vezes: nova rodada do narrar, novo tratamento.
- **Decisões:** cauda de 20 s (Lucas, 26/09); a decisão vem **antes** do relógio e do master, porque muda o sha.
- **Hoje mora em:** `CLAUDE.md`, `APRENDIZADOS.md` 31 e 34. **Tira: 0,9 KB.**

#### S13 · `baixar-do-historico-elevenlabs`
- **description:** Use se uma narração foi gerada pelo site e é preciso recuperá-la sem pagar de novo: lista o histórico da voz e baixa cada geração, reconhecendo o bloco pela contagem de caracteres.
- **Etapas:** (1) `GET /v1/history?voice_id=…` (chave só por `lerChave`); (2) reconhecer os blocos pelo número de caracteres e pelo horário de Brasília (o texto não vem na listagem); (3) `narracao-historico.mjs --baixar`, com ok do Lucas (download); (4) conferir o corte (S11): geração longa do v3 pelo site para antes do fim; (5) preferir refazer pela API por parágrafo. Legado do Juneau; vale se o Lucas gerar pelo site.
- **Usa:** `out/juneau/_pesquisa/narracao-historico.mjs`, `alinhamento-elevenlabs.mjs`.
- **Hoje mora em:** `CLAUDE.md` "Peças", item 1. **Tira: 1,9 KB.**

#### S14 · `relogio-de-palavras`
- **description:** Use depois da narração tratada para criar o `words.json` do vídeo (o relógio de palavras) sem gastar crédito: alinhamento da ElevenLabs preso ao som, conferido pelo Whisper local.
- **Etapas:** (1) pré-requisito: narração tratada (S12) e conferida (S11); (2) `alinhamento-elevenlabs.mjs <proj>` (só GET no histórico, com cache); (3) `ingest-local.py <proj>`: palavras do texto aprovado na grafia da cópia para a voz, tempo do alinhamento preso ao som nas pausas, Whisper como ouvido (`language="en"`, só do cache local, `HF_HUB_OFFLINE=1`, modelo pelo caminho do snapshot); (4) o laudo tem 7 portões; os pendentes se leem no laudo, se ouvem, e só então `--aceitar=N` (aceita só o que o laudo anterior **do mesmo áudio** mostrava pendente); (5) `node scripts/mapa-limpo.mjs … --conferir` sai 0; (6) gravar o sha do `words.json` no espelho; (7) limites conhecidos, que só o ouvido pega: pausa de 0,15 s ou mais dentro de palavra pode passar por fronteira; repetição da voz ("I decided I decided") passa por tudo.
- **Usa:** `out/juneau/_pesquisa/ingest-local.py`, `alinhamento-elevenlabs.mjs`, `transcrever-local.py`. Nunca `transcrever.mjs` (Scribe, pago).
- **Decisões:** transcrição local, sem Scribe (26/09); o `words.json` tem a grafia da voz, e o agente que "confirma entidade" precisa saber disso (`Kay-too` por KTOO).
- **Hoje mora em:** `CLAUDE.md` "Peças", item 3, `APRENDIZADOS.md` 29 e 37. **Tira: 2,3 KB.**

#### S15 · `gerar-master`
- **description:** Use depois da escuta do Lucas aprovar a narração: gera o master do vídeo, tela preta 3840×2160 a 30 fps com a narração, pelo gerador da pré-v1.
- **Etapas:** (1) conferir a aprovação da escuta no chat; (2) `node out/juneau/_pesquisa/gerar-master.mjs <proj>`; (3) o script recusa narração sem `tratamento_canal` ou com cauda diferente do `canal.json`; (4) conferir duração (narração + 20 s), −14 LUFS, o carimbo `_master.mp4.de-narracao`; (5) registrar na `linha.md`. Nada na Régie produz o master: este passo é do canal.
- **Decisões:** master = narração sobre tela preta (identidade §5); aprovação do Lucas antes ("pode seguir com o master", 26/09).
- **Hoje mora em:** `CLAUDE.md` "O que a Régie faz" e item 2 das peças. **Tira: 1,2 KB.**

### C. A linha e o espelho

#### S16 · `abrir-video-na-linha`
- **description:** Use ao começar um vídeo novo: combina o slug, abre o vídeo na Régie e prepara as pastas e a `linha.md`.
- **Etapas:** (1) slug curto, só `a-z`, `0-9` e `-` (o Windows limita o caminho a 260 caracteres e o render mora fundo); (2) título já escolhido pelo Lucas; (3) `node C:/projetos/regie/bin/regie open <slug> "<título>"`, **nunca** com `--help` (abre um vídeo chamado "--help", e não há verbo para apagar); (4) criar `out/<slug>/`, `roteiros/<slug>/`, `pautas/<slug>/`; (5) `out/<slug>/linha.md` com a tabela passo, data, gatilho, por quê; (6) `#status`.
- **Hoje mora em:** `CLAUDE.md` (“Como rodar o motor”, fica), `APRENDIZADOS.md` 33. **Tira: 0.**

#### S17 · `avancar-passo-da-linha`
- **description:** Use quando um passo da linha parece pronto e é hora de avançar: confere os artefatos no disco, roda os portões do passo, pede o cético e só então chama `regie advance`.
- **Etapas:** (1) `regie queue`/`graph`; (2) **o artefato vence o relato**: abrir no disco cada arquivo de saída do passo; (3) rodar os portões do passo (tabela abaixo); portão ausente ou com exit 2 chamado com o alvo certo é NÃO MEDIDO, com o nome do portão; (4) um cético sobre o passo (`out/<proj>/_tmp/linha/<passo>.cetico.json`); (5) `regie advance <slug> done|retake|blocked`; (6) gravar o motivo na `linha.md` (a v0.1.0 só recebe o gatilho); (7) `#status`, e `#pendencias --marcar` se a próxima ação é do Lucas.
- **Portões por passo:** `ingest`: `transcricao.json` com 7/7 e `mapa-limpo --conferir`; `cut_detect`: dispensado (sem apresentador); `mirror`: `validar-contrato espelho`, `conferir-espelho.mjs`, `qc-espelho-modelo`; `research`: `conferir-portao-research.py` (todo arquivo entregue casado com um `aprovado`); `art_direction`: contrato e conferência do conceito; `conducting`: `conferir-regencia.mjs`; `requisitions`: `qc-espelho-midia`, `qc-src-existe out/<proj>`; `art`/`qc`: S37 a S42; `render`: carimbo terminando em `2160p`; `score`: `trilha.mjs --conferir`; `finalize`: `finalizar` e `xml-conferir`.
- **Decisões:** nunca avançar com portão que o canal não mediu; a tabela de portões vem de `db/pipeline-faceless.json` do motor, lida na hora, nunca de memória.
- **Hoje mora em:** `out/los-angeles/linha.md` (o registro) e `CLAUDE.md` (“Como se despacha”, “O artefato vence o relato”, que já entram na S51). **Tira: 0.**

#### S18 · `montar-espelho`
- **description:** Use quando o relógio de palavras está pronto e é hora do plano de cenas: monta o `espelho.json` com tempos fechados na grade de 30 quadros, fusões e capítulos.
- **Etapas:** (1) entradas: `words.json`, `roteiro-narrador.md`, `transcricao.json`; (2) gerar o rascunho (`gerar_espelho.py` do montador, hoje em `out/los-angeles/_tmp/montador/`, fora do git: promover); (3) **fechar os tempos à mão**: `alinhar-timestamps` deixa vãos e sobreposições no faceless, e só roda com `--dry`; (4) fusões (`_mergedInto`), `_relogio` preso ao sha do `words.json`, `_capitulos` (só vão para a descrição, nunca para a tela); (5) `modo` do canal (`aereo-real`; `drone` só em `midia`); (6) `validar-contrato espelho`, `conferir-espelho.mjs`, `qc-espelho-*`; (7) cético; (8) mais mapa quando o contexto permitir, nunca forçado.
- **Usa:** `.claude/agents/montador.md`, `marca/agentes/montador.md`.
- **Hoje mora em:** `CLAUDE.md` item 4 das peças, roupa do montador (§3, §8), `APRENDIZADOS.md` 17.8 e 36.3. **Tira: 0,2 KB.**

### D. Pesquisa e mídia

#### S19 · `pesquisar-imagens-e-b-roll`
- **description:** Use no passo de pesquisa para achar imagens e vídeo reais por cena: acervo aberto primeiro, e o que só existe em banco pago vira lista de caça (você não abre banco).
- **Etapas:** (1) ler o espelho e as frases de cada cena; (2) por tipo, `buscar-midia` no acervo aberto (S23); (3) o que não existe aberto vai para `out/<proj>/_pesquisa/lista-de-caca.json`, só B-roll genérico, com busca em inglês; (4) rascunho passa pelo conferente (S24) entre o `baixar` e o `entregar`; (5) `pauta-imagens.json`, `research-imagens.md`; (6) vídeo de registro real abaixo de 4K ou vertical não entra como candidato; foto pequena de época só em caso muito específico ou para lacuna sem foto grande nem vídeo.
- **Decisões:** a regra da cena (S24); foto pequena preenche a lacuna (27/09; vídeo 2); mais mapa antes de B-roll genérico.
- **Hoje mora em:** `marca/agentes/pesquisa-imagens.md` (28 KB), `marca/midia.md` §1 a §7. **Tira: 0 (do `CLAUDE.md`).**

#### S20 · `pesquisar-pessoas-e-logos`
- **description:** Use quando uma cena cita uma pessoa ou instituição: acha o retrato de domínio público e decide card de nome e cargo, ou só o nome escrito quando não há logo permitida.
- **Etapas:** (1) a pessoa aparece? de onde vem o retrato (Commons, acervo oficial); (2) sem foto utilizável: card de nome e cargo (Willard e Hood no vídeo 2); (3) homônimo e contexto; (4) tamanho, tratamento, crédito; (5) logo de instituição e selo do Estado: só o nome escrito (`midia.md` §7.6); bandeira de `assets/flags/` medida pelo `ffprobe`; (6) o retrato, a logo e a página entregues vão ao conferente (S24); (7) o `pesquisa-pessoas` não pede upscale (não existe aqui).
- **Hoje mora em:** `marca/agentes/pesquisa-pessoas.md` e `pesquisa-logos.md`. **Tira: 0.**

#### S21 · `pesquisar-documentos-e-dados`
- **description:** Use quando a cena mostra um documento, uma página antiga ou um número: acha o original, mede a licença do que vai à tela e confere o número contra a fonte, com o formato de tela em inglês dos EUA.
- **Etapas:** (1) original e página de documento (permissão de mostrar a página: `midia.md` §7.1, conferida na origem, hoje); (2) prova (`-prova` no nome nunca vai à tela); (3) dado: `pauta-dados.json`, `_dados/<cena>/`, valor, unidade, fonte, ano (`Source: <instituição>, <ano>`); (4) quando narração e fonte divergem: o laudo diz, e o `verificador-de-fatos` decide; (5) `src/agent/data-tools.mjs` só cobre IBGE e World Bank; (6) página oficial do Alasca bloqueada: cópia do web.archive.org com a data da captura (S25).
- **Hoje mora em:** roupas de `pesquisa-documentos` e `pesquisa-dados`. **Tira: 0.**

#### S22 · `gerar-geometria-de-mapa`
- **description:** Use quando uma cena de mapa precisa de geometria real (país, recorte, rio, rota, ponto, linha histórica): Natural Earth offline, OSM, Census e USGS, sempre com licença e procedência gravadas.
- **Etapas:** (1) ordem de fontes: Natural Earth (domínio público) → Census TIGER → OSM (ODbL, põe crédito na tela e URL na descrição) → digitalizar de folha antiga; (2) `geo-pais-completo`, `geo-recorte-bbox` (sem `--nome`; camada sem `name` pede `--fonte --licenca --fonte-url`), ponto de cidade pelo `cidades-ne.mjs` do canal (o motor não tem um `geo-pontos-ne`); (3) rota OSM: `geo-osm-rota` costura uma relation só; para várias relations ou pista dupla, montar o caminho no grafo e entregar ao `--in`; Overpass dá 504: espaçar e usar `(bbox)(around:…)`; (4) `pauta-geo.json` + `conferir-pauta-geo.mjs`; (5) **linha histórica sobre satélite**: medir a folha contra o que não mudou (muro, farol, relevo 3DEP); a georreferência do USGS erra 50 a 250 m; (6) `geo-previa.html` para o olho; (7) ponto de cidade que cai na água no NE 1:10M: declarar o deslocamento.
- **Decisões:** mapa antigo digitalizado vale como geometria de tela (07/10, Hamlin 1916 e USGS); Natural Earth, Census e USGS sem crédito na tela; OSM com crédito.
- **Hoje mora em:** `CLAUDE.md` item 6 das peças, `out/*/_pesquisa/geo_*.py|mjs`, `APRENDIZADOS.md` 17.16–17.23, 55, 77. **Tira: 2,8 KB.**

#### S23 · `pesquisar-midia-acervo-aberto`
- **description:** Use para achar e baixar foto e vídeo de acervo aberto (Commons, NASA, NARA, Smithsonian) com licença e procedência gravadas: busca, conferência, entrega, e as exceções de foto de jornal.
- **Etapas:** (1) `buscar-midia.mjs buscar|baixar|entregar|pauta|creditos|diag` (o `buscar` consulta só as 3 primeiras frases por chamada, sem avisar; tira da lista o que tem menos de 1600 px, e `--min-w=800` só para a foto de época pequena); (2) cada pedido leva o User-Agent com o contato do canal, um por vez (Commons) ou pela API v2 com a chave (NARA); (3) **robots.txt do host do arquivo, inteiro, antes do primeiro pedido** (a API do Smithsonian devolve links no `ids.si.edu`, que veta robô); (4) o `_commons-baixar` não trava licença: conferir cada uma; (5) o conferente (S24) entre o `baixar` e o `entregar`; (6) o `entregar` só serve linha selada de acervo livre; foto de jornal e do governo do Alasca se entregam à mão, com os campos da roupa e o sha256 do rascunho julgado; (7) o crédito viaja no veredito do conferente; (8) o vilda só dá 720 px e o Flickr 1024 px de graça.
- **Decisões:** a NARA pela API v2 e o Commons pela API do MediaWiki valem apesar do `robots.txt` (27/09); foto do Alasca e de jornal citando a fonte (`midia.md` §7.5); contato do canal (25/09).
- **Hoje mora em:** `CLAUDE.md` item 5 das peças e "Tropeços", `APRENDIZADOS.md` 41, 42, 67. **Tira: 2,5 KB.**

#### S24 · `conferir-midia`
- **description:** Use quando chega mídia nova a um vídeo ou antes de uma cena citar um arquivo: o conferente de olhos novos julga contra a frase que a cena cobre, e só o aprovado vai à cena.
- **Etapas:** (1) um despacho do conferente por vez em cada vídeo, e nada escreve em `_media/` enquanto ele roda (ele confere o sha256 de `_media/` antes e depois); (2) montar a frase na fonte (espelho, `words.json`, roteiro aprovado); (3) julgar contexto, licença e fonte, técnica e repetição, e dar `aprovado`, `reprovado`, `trocar` ou `pendente_lucas`; (4) **a regra da cena**: a cena só cita arquivo com `aprovado` que casa (URL do item no banco pago com `mesmo_item: true`; sha256 do rascunho no acervo aberto; sha256 do arquivo no retrato, logo e documento); (5) `pendente_lucas` (footage abaixo de 4K ou vertical, foto de agência, arquivo que não se comparou): a resposta dele volta ao conferente, literal e com hora, como `excecao_lucas`; (6) arquivo reprovado ou `trocar` sai para `_media/_caca/<cena>/_retirado/`, nunca apagado; (7) rótulo de lugar nunca mais específico que o `lugar_na_origem`; foto de outro ano leva o aviso do ano; (8) `regie advance` do `research` só com todo arquivo casado (`conferir-portao-research.py`).
- **Pare se:** o conferente não pode abrir navegador nem baixar; o `aprovado` dele não é o sim do Lucas.
- **Hoje mora em:** `CLAUDE.md` "Quem entra em que passo", `.claude/agents/conferente-de-midia.md` (65 KB, é do canal e edita-se), `APRENDIZADOS.md` 38 e 73. **Tira: 5,0 KB.**

#### S25 · `site-recusou-robo-nao-contornar`
- **description:** Use quando um site devolve 403, 405, captcha, verificação de robô ou pede login, ou antes de dar rede a um subagente: o que se faz, o que não se faz, e como ler fonte oficial por cópia arquivada.
- **Etapas:** (1) a recusa vale para o **servidor inteiro** e em qualquer caminho (página, API, feed, arquivo); antes de ler um servidor, procurar nos registros dos outros agentes do mesmo trabalho se ele já recusou; (2) ler o `robots.txt` inteiro (se sair cortado ou falhar, o servidor fica fora até ser lido), do host do arquivo também; (3) nunca `curl`, outro cliente, outro User-Agent ou outro navegador; (4) usar a cópia local, ou o navegador do app **sem o Lucas acompanhando**, devagar, só as páginas necessárias, parando em qualquer verificação; (5) cópia do web.archive.org só de página oficial do Estado do Alasca, com a data da captura (a licença e o fato volátil se leem hoje); (6) baixar arquivo pelo navegador do app só com o "sim" do Lucas a uma lista (arquivo, fonte, tamanho), e acima de ~1,8 MB conferir o tamanho; (7) o pedido a todo subagente com rede repete a regra.
- **Decisões:** 24/09 (incidente do `curl`); 27/09 (navegador do app autônomo, cópia arquivada do Alasca); a regra da caça (CAPTCHA) é de S26.
- **Hoje mora em:** `CLAUDE.md` "A marca", `APRENDIZADOS.md` 14, 66, 67, 48. **Tira: 4,0 KB.**

#### S26 · `cacar-no-chrome` (a skill existente, reorganizada como orquestrador mais fases)
- **description:** (a atual, reduzida a ~300 caracteres) Use só quando o Lucas pedir a caça no chat: busca, avalia e baixa clipes dos bancos pagos pelo Brave dele, com lista de aprovação e conferência do arquivo.
- **Estrutura proposta:** um `SKILL.md` de ~8 KB (quando usar, ordem das fases, "Nunca", CAPTCHA, tetos, convivência) e as fases como arquivos lidos sob demanda na mesma pasta, em vez de seis skills no catálogo: `fases/0-prova-do-perfil.md` (§0, com `connectedAt`), `fases/1-fase-a.md` (§1 a §2.4: lista, aba à vista, janelas que aparecem, buscar, avaliar, gravar as 3 prévias), `fases/2-lista-de-aprovacao.md` (§2.5 e §2.6), `fases/3-fase-b-download.md` (§3 a §3.3: `marcar`, clique, `recolher`, nome, medida, ordem, conferente, PDF de licença, zip), `fases/4-levar-para-a-cena.md` (§4), `fases/5-parar-e-chamar.md` (§5 e §6, o relato). Os aprendizados 39, 40, 48, 50 a 52 e 68 a 73 entram como `licoes.md`.
- **Etapas (a ordem):** prova do perfil pelo disco → Fase A (sem baixar nem aceitar nada) → conferente julga os candidatos → lista de aprovação no chat → "sim" do Lucas → Fase B, um download por vez, 20 s entre um `recolher` e o próximo do mesmo banco → conferência (nome, medida, ordem, `mesmo_item`) → PDF de licença → `_instalar-lote` → relato sem dado pessoal.
- **Decisões** (ficam no `CLAUDE.md`, curtas): a exceção de risco é do Lucas (26/09); o Brave `Default` (02/10); as contas da Top10 (30/09); a confirmação das contas não se repete (07/10); "Original" do Motion Array (07/10); o Shutterstock com a IA conferida na página (07/10); o banco que recusou volta só se o Lucas nomeá-lo.
- **Hoje mora em:** `CLAUDE.md` (31,5 KB) e `.claude/skills/cacar-no-chrome/SKILL.md` (75 KB, ~830 linhas): boa parte do `CLAUDE.md` repete a skill. Conferir por comparação de conteúdo antes de apagar; 4,7 KB do `CLAUDE.md` são o histórico de sha256 da skill (vai para um `CHANGELOG.md` dentro da pasta). **Tira: 26,0 KB** (ficam ~5,5 KB: decisão, Nunca, CAPTCHA, tetos, convivência, o que está fora).

### E. Direção, texto e arte

#### S27 · `dirigir-arte`
- **description:** Use no passo de direção de arte de um vídeo: define o arco visual, o ritmo e a variedade entre cenas, com a mesa, o mapa e a ilustração, e a conta de mundo real, antes de qualquer cena.
- **Etapas:** (1) ler `conceito-visual.json` anterior só como exemplo; (2) o arco nas medidas do canal (cenas por tipo, cota de apresentador 0 %); (3) a conta de mundo real e o censo; (4) bases do canal não são "fundo chapado" (a mesa de satélite do vídeo 2, S35); (5) relevo e MapTiler: o que custa e quem libera (S33); (6) fusões; (7) `conceito-visual.json` + `validar-contrato` + `conferir-*` + cético; (8) perguntar ao Lucas só o que mexe em regra da marca (ex.: tela só com texto no centro, interação desde o início, 05/10).
- **Usa:** `.claude/agents/diretor-de-arte.md` (Fable), `marca/agentes/diretor-de-arte.md`. **Hoje mora em:** a roupa (18 KB) e relatos de rodada. **Tira: 0.**

#### S28 · `reger-imagem`
- **description:** Use no passo de regência: divide cada cena em planos, escolhe o tipo de cobertura e o que se busca em cada um, antes de a cena ser montada.
- **Etapas:** (1) ler espelho, conceito e `pauta-*`; (2) `tipo` do beat e `exige`/busca em inglês; (3) censo e régua de mundo real; (4) onde mapa e relevo custam pedidos; (5) janelas provisórias de plano → o conferente (S24) confere os `aprovado` provisórios quando a regência nasce; (6) `regencia.json` + `conferir-regencia.mjs`; (7) cético; (8) piso de 1,5 s por plano e grade de 30 quadros.
- **Hoje mora em:** roupa (16 KB), `conferir-regencia.mjs` (em `out/juneau/_pesquisa/`: promover). **Tira: 0.**

#### S29 · `escrever-textos-de-tela`
- **description:** Use quando uma cena precisa de rótulo, número, legenda, crédito ou texto de tela: escreve em inglês dos EUA, no formato do canal, sem repetir a fala nem passar a precisão que a voz arredondou.
- **Etapas:** (1) de onde vem cada grafia (do `roteiro-narrador.md`, **nunca** do `words.json`); (2) formato (`ALMOST 3,000×`, `22.2 ft (6.76 m)`, `MAY 1, 1994`, `$265 billion`), nome próprio inteiro (4 palavras); (3) o que cada tipo de texto leva; (4) rótulo de lugar não mais específico que o `lugar_na_origem` do conferente; (5) créditos (S36); (6) erratas e conserto da fala; (7) `textos-tela.json` + `validar-contrato textos-tela`; (8) vai ao `verificador-de-fatos` (S30).
- **Hoje mora em:** roupa (20 KB), `identidade.md` §7. **Tira: 0.**

#### S30 · `verificar-fatos-do-video`
- **description:** Use quando há roteiro, texto de tela ou dossiê a conferir: dá veredito a toda afirmação checável, por cobertura e não por amostra, e marca o que muda para reconferir na véspera.
- **Etapas:** (1) o público e o prazo de validade (vale daqui a 2 anos); (2) cada afirmação da voz e **cada texto de tela é afirmação**; (3) o que a casa nunca afirma (`voz.md` §2) é achado; (4) regra da rede (S25); (5) laudo "quantos de quantos" em `roteiros/<proj>/qc-roteiro/fatos[-tela].laudo.md` (gravado pelo central: o agente não tem `Write`); (6) voláteis em `volateis-conferidos.md` com o prazo (ex. HB 3 muda a frase se o vídeo sair depois de jan/2027); (7) depois da narração, consertar custa: preferir a tela.
- **Hoje mora em:** roupa (12 KB), `APRENDIZADOS.md` 36.9. **Tira: 0.**

#### S31 · `editar-cena-html`
- **description:** Use para criar ou consertar uma cena HTML 4K do canal (tela de texto, folha, foto na mesa, medidor): contrato da cena, cores por papel, tipo, margens sob a câmera, movimento e o que validar nesta máquina.
- **Etapas:** (1) `<html lang="en-US" data-render="4k-native">`; um quadro 3840×2160 que **preencha** o palco (cena no canto = capturador não reconheceu); (2) cor por papel (`--destaque` só no protagonista), tipo e tokens de `marca/tokens.css`; (3) alvos de tamanho e espaço (4.1, 4.2); (4) o que encosta na margem se monta recuado pelo zoom máximo do RIG; (5) textura, luz e grão **só como primeiro filho**, nunca `::after`; (6) medir pílula e texto no DOM depois de `document.fonts.ready`; o crédito muda de altura junto com o fade; (7) duração como número literal (`var DUR = 12.3;`), porque o `qc-janela` lê o HTML; (8) mídia: só arquivo aprovado (S24); (9) validar: `qc-contrato`, `qc-hex`, `shot`, `probe-elemento`, e olhar o último quadro e o meio de cada movimento; (10) o conserto refaz a conta de tudo que divide a área com o elemento movido.
- **Decisões:** nome próprio inteiro; crédito a 56 px do vídeo 2 (Juneau a 76); sem capítulo na tela; movimento A "a mão que arruma" (07/10).
- **Hoje mora em:** roupa do `editor-de-arte` (42 KB), `APRENDIZADOS.md` 53, 58, 59, 76; `CLAUDE.md` "O vídeo fala inglês". **Tira: 0,7 KB.**

#### S32 · `fazer-cena-de-mapa-maptiler`
- **description:** Use para criar uma cena de mapa: base MapTiler, geometria já conferida, tratamento, rótulos, câmera, crédito, e a prova da cena sem desperdiçar pedido pago.
- **Etapas:** (1) ler o gasto (S33) e o contador; (2) `preparar-cena` do motor (e, depois dele, regravar o `_creditos-mapa.md` se a base for a do canal); (3) tokens por `getComputedStyle` (o MapLibre não lê `var(--…)`); nunca `--disable-gpu`; (4) tratamento da base: brilho 65 % e saturação 70 %; a fronteira é a **única linha branca**, com contorno escuro; as outras linhas em cor; o território da contraparte a 35 %; (5) o tipo de linha que não se explica sozinho leva o nome na primeira vez; (6) `var DUR = <número>` com guarda contra `CENA.duracao`; (7) crédito `© MapTiler © OpenStreetMap contributors` durante todo o mapa; (8) prova com `quadro.mjs` e a pré-carga; (9) um espectador que nunca viu o lugar sabe dizer o que é cada linha?; (10) anotar os pedidos no contador.
- **Hoje mora em:** roupa do `mapista` (27 KB), `APRENDIZADOS.md` 17.24–17.26, 36.10, 54, 56. **Tira: 0** (parte entra em S33).

#### S33 · `base-de-mapa-maptiler`
- **description:** Use ao decidir ou gastar a base de mapa de um vídeo: MapTiler (plano Flex), Landsat de domínio público para teste, relevo 3D, e o contador de pedidos.
- **Etapas:** (1) a base do vídeo é decisão do Lucas por vídeo (`canal.json › mapa.perfil`; Juneau e vídeo 2: maptiler); (2) a chave só por `src/lib/chaves.mjs`, nunca no HTML; (3) licença: plano Flex até 100 mil inscritos; crédito na tela e a linha da descrição; (4) cada render e cada rodada de portão com a pré-carga conta pedidos: anotar antes e depois em `out/<proj>/_pesquisa/maptiler-gasto.md`; (5) relevo 3D só com liberação nominal (Juneau s44 e s01; vídeo 2 sem relevo); (6) prova de cor sobre Landsat (Planetary Computer, sem conta), sem pagar o provedor; (7) o painel da MapTiler atrasa horas e conta o dia em UTC.
- **Decisões:** "será o maptiler" (26/09); "pode seguir o uso, fechamos o custo outra hora" (01/10); vídeo 2 sem relevo (07/10); crédito a 56 px (07/10).
- **Hoje mora em:** `CLAUDE.md` item 7 das peças, `identidade.md` §6. **Tira: 3,2 KB.**

#### S34 · `ilustrar-com-fisica`
- **description:** Use quando uma cena tem objeto ilustrado que se mexe (etiqueta, placa, fio, mão): aplica o núcleo `ilustracao/` com a física e confere o contato e o balanço contra o tempo de leitura.
- **Etapas:** (1) ler `ilustracao/habilidades/ilustracao-narrativa/SKILL.md` (já tem frontmatter; instalar o ponteiro, **não editar a cópia**); (2) construção (articulação, contato, perspectiva); (3) **conta antes de pôr a física**: período do pêndulo e amortecimento contra os 0,25 s de texto parado antes de a voz lê-lo; se não cabem, a decisão é de direção (mostrar antes e depois ao Lucas); (4) medida de contato vem **de fora** do código que a desenha (DOM por `getBoundingClientRect`/`elementFromPoint` e os quadros do MP4); (5) o `qc-visual` julga a construção pela roupa dele (§5).
- **Decisões:** "Sim, com a física" (07/10); piloto em cópia da s34 do Juneau (`out/prova-ilustracao/`).
- **Hoje mora em:** `CLAUDE.md` “O ilustrador, com a física”, `identidade.md` §4.4, `APRENDIZADOS.md` 75. **Tira: 1,7 KB.**

#### S35 · `montar-mesa-de-satelite`
- **description:** Use para criar o fundo "mesa de satélite" do vídeo 2 em diante: imagem pública escurecida e desfocada, com o ganho de exposição e o contraste do crédito medidos.
- **Etapas:** (1) imagem só de domínio público (Landsat/USGS, NASA): `base-landsat-la.py` (Planetary Computer, sem conta); (2) `mesa-satelite.py <imagem> <saida.png> --fonte --licenca --url` (`--seco` mede sem gravar); (3) busca do ganho até a luma média do alvo aprovado, sem passar do piso do crédito (6:1 sobre o pixel mais claro da faixa do crédito); (4) `--sangria` e `--ganho` só se a câmera percorrer a mesa; (5) a procedência `.json` ao lado; (6) a medida final do crédito é a do portão (S38).
- **Decisões:** a mesa A de satélite público, sem render de mapa nem MapTiler para fundo (07/10, 03:5x).
- **Hoje mora em:** `ferramentas/mesa-satelite.py`, `identidade.md` §5. **Tira: 0.**

#### S36 · `escrever-credito-na-tela`
- **description:** Use ao pôr crédito em qualquer cena: decide se leva, como aparece, em que tamanho e o que vai à descrição, pela licença da peça.
- **Etapas:** (1) a `licenca` decide **se** leva crédito, o `credito_na_tela` decide **como**; (2) domínio público sem crédito na tela (o que a coleção pede vai à descrição); CC BY e ODbL com crédito; (3) mapa MapTiler/OSM durante todo o mapa; Shutterstock `<artista>/Shutterstock.com`; (4) 56 px do vídeo 2 (72 o piso do motor no que não é mapa, 40 no de mapa com `data-qc-credito="mapa"`), faixa y > 1880; (5) medir o contraste com o `portao-mapa rodape`; (6) alimentar S49.
- **Decisões:** crédito a 56 px (07/10), com a conta do celular dita ao Lucas; foto de outro ano com aviso do ano.
- **Hoje mora em:** roupas do editor, do mapista e do redator, `identidade.md` §4.1, §6, §7. **Tira: 0.**

### F. QC, aprovação e render

#### S37 · `rodar-portoes-de-cena`
- **description:** Use para rodar os portões de qualidade de uma cena ou de um vídeo (contrato, carga, colisão, tamanho, til, fora do quadro, crédito): o alvo certo de cada um, o `REGIE_MOTOR` e como ler o exit.
- **Etapas:** (1) `REGIE_MOTOR=C:/projetos/regie-v1` na **mesma** chamada (sem ele, `MOTOR_SEM_ARQUIVO` com pilha parece reprovação); (2) o alvo: o `<proj>` na maioria; `out/<proj>` ou o HTML em `qc-src-existe`; `out/<proj>/graphics` ou o HTML em `qc-hex`, `qc-contrato`, `qc-fora-do-quadro`; só o HTML em `shot`, `probe-elemento`, `check-overlap`, `qc-carga`, `qc-tamanho`, `qc-pais-bandeira`, `qc-video-avanca`; `<tipo> <arquivo>` em `validar-contrato`; `<plano> <words> --dry` em `alinhar-timestamps`; (3) `node scripts/qc-cena.mjs out/<proj> --conc=3` roda tudo e grava `_portao.json`; (4) exit 2 chamado com o alvo certo = NÃO MEDIDO; "uso:", "não encontrado", pilha de `ENOENT` = repetir com o alvo certo; (5) FAIL em massa com a mesma mensagem é sinal de **leitura**, não de N cenas erradas (o `qc-janela` com `var DUR = CENA.duracao`): provar à parte antes de mandar consertar; (6) o `qc-visual` só aprova com portão duro verde.
- **Hoje mora em:** `CLAUDE.md` “Os scripts do canal”, “Os portões medem”. **Tira: 1,8 KB.**

#### S38 · `portoes-em-cena-de-mapa`
- **description:** Use ao rodar portões em vídeo com cena de mapa: a pré-carga que dá a chave, o `portao-mapa` do til e do rodapé, e o `conferir` que prova que cada portão rodou com a chave.
- **Etapas:** (1) toda rodada com `--import=file:///C:/projetos/alpha-point/ferramentas/chaves-nos-portoes.mjs`; (2) cada rodada gasta pedidos: anotar no contador (S33); (3) em cena de mapa, `_audit-til` e `qc-rodape-contraste` do molde dão NÃO MEDIDO; quem mede é `ferramentas/portao-mapa.mjs til|rodape` (versão 5, todo crédito declarado, linha a linha); (4) depois da rodada: `node ferramentas/chaves-nos-portoes.mjs conferir out/<proj> --desde="<hora>"`, que sai 0 só sem verde sem prova; (5) em vídeo já entregue, **nunca** `qc-cena out/<proj>` inteiro (o `hash_marca` novo reprova o crédito a 56 e grava `ok:false` sobre clipe certo a 76): só em cena refeita e com `:root { --fs-credito: 76px; }`.
- **Hoje mora em:** `CLAUDE.md` “A cena de mapa nos portões”, `APRENDIZADOS.md` 64 e 65. **Tira: 2,3 KB.**

#### S39 · `triar-reprovacao-de-portao`
- **description:** Use quando um portão reprova e a causa não parece estar na cena: separa declarar, defeito e limitação, e leva ao Lucas só o que é limitação, cena por cena.
- **Etapas:** (1) triador e cético (`out/<proj>/_tmp/triagem-portoes-*.json`); (2) declarar ou defeito: volta ao editor ou ao mapista; (3) limitação (a régua do Top10 que a marca não tem): trecho da cena em 1080p com narração, o ponto marcado e o texto do que mudaria, ao Lucas, lista de opções; (4) "manter": exceção em `out/<proj>/qc/_excecoes-portao.json` (cena, portão, sha1 do HTML, mensagem literal e hora); (5) se o HTML muda, o central confere que a reprovação é a mesma (texto, par, tempo) e grava o sha1 novo; mudou, volta ao Lucas; (6) "mudar": é conserto; (7) quem **varre** não conserta no mesmo pedido, e o limite da varredura sai da marca, citado (item 63); (8) cético sem escopo acha sempre mais um caso montado: pedir o escopo do conserto (item 65).
- **Decisões:** "3. Você vê cada uma antes" (01/10). **Hoje mora em:** `CLAUDE.md` “A limitação do portão”. **Tira: 2,3 KB.**

#### S40 · `medir-margens-da-cena`
- **description:** Use antes do qc-visual em toda cena com câmera que anda (mapa, mesa, push-in): mede a cada 0,25 s a caixa de todo texto e pílula contra as margens, para pegar o que a câmera leva para fora da área segura.
- **Etapas:** (1) abrir a cena (com a pré-carga, se for mapa), chamar `__renderAt` de 0,25 em 0,25 s; (2) caixa de cada texto (`Range`) e de cada pílula e cartão (`getBoundingClientRect`, que já inclui câmera e rotação); (3) contra 160 no topo, 200 nas laterais e 1880 embaixo (fora o crédito); (4) testar o medidor com um texto plantado fora da margem antes de valer; (5) o ruído conhecido (folha que entra de fora, sombra, caixa que agrupa créditos) se olha no quadro antes de mandar consertar; (6) rótulo preso a ponto de mapa esmaece antes de cruzar a margem.
- **Usa:** `out/los-angeles/_tmp/medir-margens.mjs`, `medir-fitas.mjs` (a promover a `ferramentas/` no fim do vídeo, como o item 78 já diz). **Hoje mora em:** `APRENDIZADOS.md` 78. **Tira: 0.**

#### S41 · `julgar-cena-qc`
- **description:** Use no passo `qc`: julga cena pronta por lente (legibilidade, factualidade, sincronia, composição, movimento, acessibilidade, coerência) sobre quadros reais, com os números da marca; julga e não conserta.
- **Etapas:** (1) os quadros do clipe/HTML (`quadro.mjs` com a pré-carga, ou do MP4 pelo `ffmpeg` se for satélite); (2) o que rodou e o que não rodou nos portões (S37/S38), e a exceção do Lucas se houver; (3) cada lente com os números da marca (§4 da roupa); (4) o que reprova neste canal em particular (§5); (5) a cena de fundo da tela final; (6) `qc/<cena>.laudo.json` válido no contrato; (7) aprova só com todas as lentes ≥ 7 e nenhum portão duro vermelho, ou a exceção citada; (8) lote pequeno (os lotes chegaram a 550 mil tokens de contexto).
- **Hoje mora em:** roupa do `qc-visual` (36 KB, dois terços são os números e os reprovadores por lente). **Tira: 0** (mas é onde mais pesa a quebra por lente: ver seção 5).

#### S42 · `revisar-espectador`
- **description:** Use antes de o Lucas ver o vídeo: um revisor que não leu cabeçalho nem conceito vê os quadros a cada 0,5 s com a fala ao lado e pergunta só o que o espectador perguntaria; um cético tenta derrubar cada achado.
- **Etapas:** (1) preparar a folha de quadros em 1080p (a cada 0,5 s) com a fala do `words.json` e **sem** o cabeçalho; (2) as cinco perguntas: dá para entender no primeiro segundo? quantas coisas há para ler? há marca, campo ou moldura sem conteúdo? há mais de 2 s sem nada que acompanhe a fala? algo fica pequeno demais no celular?; (3) um revisor por lote, um cético por achado, com os pontos do central; (4) o que sobra vai ao `editor-de-arte` ou ao `mapista` como defeito, ou ao Lucas se mexer em regra da marca; (5) consertos num lote só, `qc-visual` final depois; (6) recurso que só funciona com a explicação vai ao Lucas como pergunta, antes de virar cena; (7) o crédito a 56 px **não** é achado.
- **Hoje mora em:** `CLAUDE.md` “A revisão de espectador”, `APRENDIZADOS.md` 61, `out/*/_tmp/espectador*`. Esta etapa é a mais cara do vídeo (83,5 % de 25 pontos do semanal em um workflow, segundo `out/_modelos/peso.md`). **Tira: 1,4 KB.**

#### S43 · `aprovar-na-linha-do-tempo`
- **description:** Use quando as cenas de um lote passaram nas conferências e o Lucas precisa vê-las antes do render: sobe a linha do tempo local, avisa com o link, trata os comentários e só renderiza o que ele aprovou.
- **Etapas:** (1) `linha-do-tempo.mjs proxies <proj>` (cópia 1080p do clipe 4K de prova das cenas de mapa; sem clipe em dia, rascunho "sem satélite" não é aprovável); (2) `preview_start {name:"linha-do-tempo"}` sobe o servidor em `127.0.0.1:8790`; nunca com render nem caça rodando; (3) renomear o arquivo de teste antes do aviso (o visto não sabe quem olhou); (4) aviso em `#pendencias --marcar` e Telegram, com o endereço; (5) ele vê e comenta (tecla C); cada comentário vira lista de opções no chat; só a escolha dele vai ao editor ou ao mapista; (6) `estado <proj>` dá a frase para o chat; (7) com o "sim": `aprovar <proj> --mensagem="<literal>" --hora="<hora>" --assinatura=<a do estado>`; (8) render 4K só das aprovadas (S44); (9) `conferir <proj> --depois-do-render` sai 0 antes do `regie advance` do `qc`.
- **Decisões:** neste PC; "sim, antes do render" (02/10); **a aprovação é o sim no chat**, nunca um clique.
- **Hoje mora em:** `CLAUDE.md` “A linha do tempo pré-render”, `ferramentas/linha-do-tempo/{LEIA-ME,DESENHO}.md`, `APRENDIZADOS.md` 62. **Tira: 4,1 KB.**

#### S44 · `renderizar-cena-4k`
- **description:** Use para renderizar cena ou tirar quadro 4K: `--4k` e a pré-carga do canal sempre, carimbo `2160p`, e o que fazer quando o render diz que a conexão com o Chrome caiu.
- **Etapas:** (1) `node --import file:///C:/projetos/alpha-point/ferramentas/cdp-sem-compressao.mjs C:/projetos/regie-v1/src/ferramentas/renderizar.mjs <proj> --cena=<id> --4k` (em cena de mapa, junto a `chaves-nos-portoes.mjs`); (2) sem `--4k` a cena sai em 1080p e o carimbo `.mp4.de-html` guarda isso: refazer, e pagando os tiles de novo; (3) o clipe só vale com carimbo terminando em `2160p`; (4) "a conexão com o navegador caiu" = WebSocket do Node 24 e quadro de 4 MB, não o Chrome: repetir com a pré-carga; (5) um por vez, fila que espera `renderizar.mjs` rodando; (6) `quadro.mjs --escala=2` de 3840×4400 derruba o Chrome; (7) anotar pedidos de mapa (S33).
- **Hoje mora em:** `CLAUDE.md` item 7 das peças e “Tropeços”, `APRENDIZADOS.md` 57. **Tira: 2,4 KB.**

### G. Trilha, XML e publicação

#### S45 · `escolher-trilha-epidemic`
- **description:** Use para escolher a música do vídeo no Epidemic Sound: busca pela chave do Lucas, monta a lista com a faixa, o artista, a duração e o trecho de cada linha, confere a lista contra o servidor e leva ao chat.
- **Etapas:** (1) `epidemic.mjs conferir`; (2) o plano de trilha à mão a partir de `espelho.json › _capitulos` (o `trilha.mjs` só divide por card, e o canal não tem card); (3) `buscar` e `parecidas` por mood; (4) `lista --lista=<arquivo> --conferir` e a **assinatura** da lista; (5) a lista vai ao Lucas com o link da faixa (ele ouve na página, no navegador dele); (6) licença do Creator: só cortar, repetir, fade e stems; a música **nunca** entra em ferramenta de IA nem de reconhecimento, nem com o vídeo mixado; (7) cama a −35 dB sob a narração.
- **Decisões:** plano Creator, canal pessoal na Safelist (05/10); "Seguir: é vídeo de YouTube" sobre o termo de broadcast e política; mp3 da Top10 nunca.
- **Hoje mora em:** `CLAUDE.md` “A trilha: Epidemic Sound”. **Tira: 2,2 KB.**

#### S46 · `baixar-trilha-epidemic`
- **description:** Use quando o Lucas aprovou uma lista de trilha no chat: baixa só as linhas que ele cobriu, uma por vez, e instala no acervo da trilha com a licença de assinatura.
- **Etapas:** (1) marcar `"aprovado": true` só nas linhas que o "sim" cobriu; (2) `baixar --lista=… --linhas=… --mensagem="<o sim literal>" --hora=… --assinatura=<a da lista> --seco` e depois sem `--seco`; lista mudada depois do chat sai 2; (3) um por vez, 15 s entre pedidos, no máximo 8 em 30 min (teto sai 3); (4) acervo da pré-v1 (`acervo/trilha/`, `biblioteca.json`, licença `assinatura`, `canal_liberado: ["alpha-point"]`); (5) `trilha.mjs <proj> --conferir`; (6) o crédito "<Artista> / <Música> / courtesy of Epidemic Sound" para S49; (7) só o Claude central baixa.
- **Hoje mora em:** `CLAUDE.md` (mesma seção). **Tira: 2,0 KB.**

#### S47 · `gerar-chamadas-cta`
- **description:** Use para gerar as peças de chamada do vídeo (inscrição e pedido de comentário): grava os `.mov` com alfa, mede, e registra o momento e a pergunta.
- **Etapas:** (1) a pergunta antes: `node marca/cta/pecas/_perguntas.mjs --q="<pergunta>"`; (2) inscrição: `node marca/cta/_capturar.mjs marca/cta/pecas/inscricao.html 4.5 out/<proj>/cta [--lugar=cima --nome=inscricao-cima]`; (3) comentário: `… comentario.html auto out/<proj>/cta --q="<pergunta>"`; (4) saída em `out/<proj>/cta/`, **nunca** em `_media/` (os portões de procedência tratariam como mídia baixada); (5) o regente grava o `inSec` (do `words.json`), e o fim fica ao menos 1 s antes da cauda; (6) a peça não se corta nem se estica; (7) montagem à mão no Premiere (o XML do motor não as cobre); (8) a mesma pergunta, palavra por palavra, na descrição e no comentário fixado.
- **Decisões:** a faixa mínima (01/10); a chamada começa no vídeo 2. **Hoje mora em:** `marca/cta.md` §8 (a conferir: pode virar skill e deixar a marca só com a decisão). **Tira: 0** (de `cta.md`: ~3,5 KB).

#### S48 · `entregar-xml-premiere`
- **description:** Use no passo `finalize`: gera o XML do Premiere com o `finalizar`, confere, monta o pacote para outro computador e entrega com o LEIA-ME.
- **Etapas:** (1) `trilha` e render conferidos (`conferir --depois-do-render`); (2) `finalizar.mjs <proj>` (primeiro `--sem-trilha` na primeira vez); o plano de CTA é escrito à mão (`_finalizacao-config.json` sem `_gerado`); (3) as conferências do motor (bem-formado, referências, geometria) e o `xml-conferir`; (4) `python ferramentas/pacote-premiere.py <proj> --destino C:/<Nome>-Premiere`: copia, confere sha256, reescreve só as `<pathurl>`; (5) combinar o destino com o Lucas antes (Windows ou Mac, em que caminho a pasta fica); nomes únicos; (6) o volume (a voz −19,6 LUFS, cama −35, o limitador no LEIA-ME); (7) entregar pelo chat e `#status`.
- **Hoje mora em:** `CLAUDE.md` item 8 das peças, `ferramentas/pacote-premiere.py`, `APRENDIZADOS.md` 60. **Tira: 0,7 KB.**

#### S49 · `montar-descricao-youtube`
- **description:** Use quando o vídeo está pronto para publicar: monta a descrição do YouTube com capítulos, créditos de mapa, mídia e trilha, a pergunta do comentário e os links de licença.
- **Etapas:** (1) capítulos a partir de `espelho.json › _capitulos` (0:00 para o gancho; regra pública do YouTube: primeiro em 0:00, ao menos 3, ao menos 10 s cada; **conferir**); (2) o bloco `Mapas:` do `_creditos-mapa.md`; (3) o bloco `Music:` do `_creditos-trilha.md`; (4) `buscar-midia creditos` e os `_PROCEDENCIA.json` (Commons CC BY, `<artista>/Shutterstock.com`, o crédito que a coleção pede quando a peça é domínio público); (5) OSM: a URL de copyright; (6) a pergunta do comentário (`cta.md` §7); (7) gravar `out/<proj>/descricao.md`; (8) pergunta aberta ao Lucas: fontes do dossiê na descrição, sim ou não (nenhuma decisão registrada).
- **Hoje mora em:** nenhum lugar só: `identidade.md` §6, `midia.md` §3, `_creditos-*.md` gerados, `cta.md` §7. **A skill nasce do que está espalhado. Tira: 0.**

#### S50 · `checar-antes-de-publicar`
- **description:** Use na véspera de publicar: reconfere os fatos voláteis, a licença de tudo que está no vídeo, o Content ID da trilha e os limites de plano, e entrega a lista ao Lucas, que publica.
- **Etapas:** (1) reconferir os voláteis (`volateis-conferidos.md`) com a data de hoje; (2) `qc-procedencia`, `conferir --depois-do-render`, `segredos.mjs --staged`; (3) música: nunca registrar no Content ID; canal na Safelist; trilha só no Premiere; (4) MapTiler: inscritos do canal abaixo de 100 mil (Flex); (5) título e miniatura nos três tamanhos; (6) S49 pronta; (7) publicar é ato do Lucas (nenhuma publicação sem o "sim" dele).
- **Hoje mora em:** `APRENDIZADOS.md` 36.9, `midia.md` §5, `roteiros/juneau/volateis-conferidos.md`. **Tira: 0.**

### H. Operação

#### S51 · `despachar-especialista`
- **description:** Use ao rodar um especialista (pesquisa-*, montador, diretor, regente, redator, verificador, editor, mapista, qc, conferente): monta o pedido, escolhe o modelo, passa os caminhos das skills e confere o que ele gravou.
- **Etapas:** (1) `subagent_type` = o `id` do `.claude/agents/<id>.md` (modelo do frontmatter; subagente em `fable` sobe: conferir o `"model"` no transcript de vez em quando; se não subir, parar e avisar); (2) o pedido: `<proj>`, o passo, a tradução dos marcadores (`PLACEHOLDERS.md`: `<workspace>` = raiz, `<lang>` = en-US, `roteiro-<persona>.md` = `roteiros/<proj>/roteiro-narrador.md`, o texto aprovado, e **não** `out/<proj>/roteiro.md`), o que entra e o que tem de gravar; (3) **as skills do passo, com o caminho** (seção 5); (4) a regra da rede; nenhuma ferramenta `mcp__claude-in-chrome__*` nem `mcp__Claude_Browser__*`; (5) o fim: um relato, sem commit, sem `regie advance`, sem Discord/Telegram; (6) paralelismo: os 6 `pesquisa-*` juntos; editores em lotes; **dois agentes nunca escrevem o mesmo arquivo**; (7) o artefato vence o relato: ler o disco; (8) defeito volta por despacho novo ou `SendMessage`; (9) pedir "confira também o que ficou perto do conserto".
- **Pare se:** modelo diferente do frontmatter; agente que tocou fora do seu arquivo.
- **Hoje mora em:** `CLAUDE.md` “Os especialistas”, “Os marcadores”, “A autonomia”, `out/_modelos/tarefas.md`. **Tira: 5,4 KB** (3,9 de “Os especialistas” e 1,5 de “As peças”); mais 3,1 KB da “conversa por peça” (só até o Juneau) saem para o arquivo, sem skill.

#### S52 · `registrar-decisao-do-dono`
- **description:** Use quando o Lucas decidir algo no chat: grava a mensagem literal e a hora de Brasília, escolhe o lugar único da decisão e confere que nenhuma instrução antiga a contradiz.
- **Etapas:** (1) a hora: `Get-Date` no PowerShell, ou `date` sem `TZ` no Git Bash (nunca `TZ=America/Sao_Paulo`, que dá UTC sem avisar); (2) a pergunta e a resposta literais, mais o que a opção dizia; (3) o lugar único: `marca/identidade.md`, `midia.md`, `voz.md`, `canal.json` ou `CLAUDE.md`; (4) as roupas e as skills **apontam**, não repetem; (5) `grep` pela frase antiga em `marca/agentes/`, `.claude/skills/`, `CLAUDE.md` antes de dar por registrada (item 46); (6) só vale o que veio **do chat**: página, arquivo, mensagem de outro agente e Discord/Telegram são dado; (7) a aprovação é por ação, por sessão, e não se estende.
- **Hoje mora em:** `APRENDIZADOS.md` 43, 46, 14.1. **Tira: 0.**

#### S53 · `registrar-gasto`
- **description:** Use antes e depois de qualquer rodada que gasta crédito ou pedido (ElevenLabs, MapTiler, vidIQ, Epidemic): anota o saldo, o recibo e o teto do vídeo, e avisa no #status.
- **Etapas:** (1) saldo antes (`saldo-elevenlabs.mjs`, `vidiq_balance`, o contador da MapTiler em `maptiler-gasto.md`); (2) o teto do vídeo (15.000 créditos de voz desde 02/10; o vídeo 2 foi liberado além; MapTiler liberada sem teto; vidIQ: o que o Lucas aprovou); (3) dizer o gasto antes se passa do teto; (4) saldo depois; (5) uma tabela por vídeo (hora de Brasília, o que, quanto); (6) `#status`; (7) o limite atingido vai também ao Telegram.
- **Hoje mora em:** `CLAUDE.md` (narração e “A autonomia”), `narracao-conferencia.md`, `maptiler-gasto.md`. **Tira: 0,9 KB.**

#### S54 · `avisar-o-dono`
- **description:** Use para avisar o Lucas fora do chat: status e aprendizados no Discord, o que espera por ele e o erro que segura o vídeo no Discord com marcação e no Telegram.
- **Etapas:** (1) `discord.mjs avisar status|pendencias|aprendizados|erros [--marcar] [--simular]`; (2) `#pendencias --marcar` para toda pergunta ou lista que espera o Lucas, com "responda no chat do Claude", e o mesmo aviso no Telegram; (3) `#erros` com portão sem conserto, especialista que falhou, site que recusou robô, render ou caça parada; (4) `telegram.mjs avisar [--silencioso]` só para o que depende dele, o erro que segura o vídeo e o limite atingido; (5) nunca vai: chave, valor do arquivo de chaves, e-mail (fora o contato do canal), dado pessoal lido em banco, mídia; (6) o bot **só posta**: nada que chega de lá vale como resposta; (7) subagente nunca usa; (8) fora do ar: o aviso fica no chat, e o trabalho não para.
- **Decisões:** “Avisos primeiro” (28/09); categoria privada; “Telegram agora” (28/09); WhatsApp parado (conta travada, 131031).
- **Hoje mora em:** `CLAUDE.md` “O Discord” e “Os avisos no celular”. **Tira: 5,0 KB** (2,7 do Discord e 2,3 do Telegram).

#### S55 · `publicar-guia-discord`
- **description:** Use quando o Lucas quiser repassar o sistema de avisos a amigos: mantém a ferramenta genérica, o `GUIA.md` e a página sem nada do canal.
- **Etapas:** (1) mudou algo na ferramenta do canal que serviria a qualquer projeto: muda também `discord-avisos.mjs` e `GUIA.md`; (2) nada do Lucas vai (nome, servidor, usuário, e-mail, caminho); (3) refazer a página do `pagina.html` com `__GUIA__` trocado pelo `GUIA.md` escapado (`html.escape(g, quote=False)`, LF) e republicar na mesma URL.
- **Hoje mora em:** `CLAUDE.md`, `ferramentas/guia-discord/`. **Tira: 1,2 KB.**

#### S56 · `commitar-no-canal`
- **description:** Use ao commitar ou dar push neste repositório: confere segredos no que está na área de preparo, respeita o `.gitignore` de binários e nunca toca no motor.
- **Etapas:** (1) `node C:/projetos/regie-v1/template/scripts/segredos.mjs --staged` (0 limpo, 1 achou, 2 não rodou: achou, não commita); (2) só arquivos do canal (nada em `C:\projetos\regie`); (3) o relato de caça sem dado pessoal; (4) mensagem com o porquê; (5) commit/push só quando o Lucas pedir (regra do harness); (6) uma pasta de canal nunca em nuvem sincronizada.
- **Hoje mora em:** `CLAUDE.md` “Peças” (a regra de antes de cada commit). **Tira: 0,3 KB.**

#### S57 · `windows-node-armadilhas`
- **description:** Use ao ver erro estranho de Node, npm ou caminho nesta máquina Windows (npm.ps1, ERR_UNSUPPORTED_ESM_URL_SCHEME, MOTOR_SEM_ARQUIVO, hora errada): o que é, e o que fazer sem mexer na máquina.
- **Etapas:** (1) `npm` reclama de `npm.ps1`: use `npm.cmd`, nunca a política de execução; (2) `import()` de caminho absoluto: URL `file:///C:/…`; (3) `MOTOR_SEM_ARQUIVO` com pilha: faltou `REGIE_MOTOR` na mesma chamada, nunca mexer no motor nem no `canal.json`; (4) `regie doctor` de dentro do canal (só lê), e **não seguir** `atualizar --aplicar` nem `autonomia instalar --aplicar`; (5) hora: item 43; (6) `jq`, `turf`, `mapshaper`, `identify`, `pdftoppm` não existem; (7) nunca matar navegador por nome.
- **Hoje mora em:** `CLAUDE.md` “Como rodar o motor”, “Peças”, “Tropeços”; a parte irmã tem F1/F2. **Tira: 1,9 KB** (0,6 + 1,3).

#### S58 · `atualizar-motor`
- **description:** Use quando o Lucas ou o Mateus avisarem de versão nova do motor: troca a tag, atualiza a linha no banco e confere o doctor, nunca no meio de uma entrega.
- **Etapas:** (1) avisar a pessoa; (2) `git -C C:\projetos\regie fetch --tags` e `checkout vX.Y.Z`; (3) dentro do canal: `regie init` e `regie doctor`; (4) o motor da pré-v1 em `C:\projetos\regie-v1` **não** se atualiza até o Juneau ser entregue; (5) registrar a versão no `CLAUDE.md`.
- **Hoje mora em:** `CLAUDE.md` “Versão do motor”. **Tira: 0,6 KB.**

#### S59 · `retomar-apos-troca-de-conta`
- **description:** Use ao retomar o trabalho depois de trocar de conta do Claude, de limite de uso ou de reinício: confere extensão, conversas e estado no disco antes de tocar em qualquer coisa.
- **Etapas:** (1) `list_connected_browsers` (a extensão fica na conta antiga) e `list_groups`; (2) refazer a prova do perfil se for caça; (3) ler o estado do disco (`linha.md`, relatos, memória) e o transcrito da sessão antiga (`~/.claude/projects/<pasta>/<sessão>.jsonl`); (4) nunca duas sessões ao mesmo tempo no mesmo vídeo; (5) conferir o que o workflow que caiu gravou antes de repetir; (6) dizer o que ficou segurando.
- **Hoje mora em:** `APRENDIZADOS.md` 49, `out/los-angeles/_tmp/retomada-2026-10-08.md`. **Tira: 0.**

#### S60 · `registrar-aprendizado-como-skill`
- **description:** Use quando um erro, um tropeço ou uma correção do Lucas ensinou algo que não pode se repetir: decide entre lição numa skill, skill nova, regra do canal ou aviso ao motor, e escreve nos dois lugares.
- **Etapas:** (1) o sintoma, a causa medida, o que resolveu, como evitar; (2) a régua do culinária: se um canal de culinária também sofreria, é do motor: item no `APRENDIZADOS.md` + avisar Lucas Barrios e Mateus; (3) senão, o canal: tem gatilho próprio (frase de pedido ou mensagem de erro)? skill nova; senão, linha em `licoes.md` da skill da etapa; (4) regra de segurança vira linha do `CLAUDE.md`, nunca só skill; (5) `description` com as palavras do sintoma, em até ~300 caracteres, e o teste de disparo; (6) `discord.mjs aprendizados`; (7) lembrar que a skill só carrega em sessão nova.
- **Hoje mora em:** `APRENDIZADOS.md` (a prática), nenhum procedimento escrito. **Tira: 0.**

#### S61 · `fechar-video`
- **description:** Use quando um vídeo termina (XML entregue ou publicado): promove as ferramentas de bancada que servirão ao próximo, fecha o gasto, registra os aprendizados e deixa o próximo vídeo começar sem copiar nada.
- **Etapas:** (1) promover de `out/<proj>/_pesquisa/` e `_tmp/` o que o próximo vai usar (hoje: `medir-margens.mjs`, `gerar_espelho.py`, `conferir-*`, `tratar-narracao.py`, `ingest-local.py`, `gerar-master.mjs`, os `geo_*`) para `scripts/` da skill ou `ferramentas/`, parametrizados por `<proj>`, com a prova de que dão o mesmo resultado que o original; (2) tabela de gasto final do vídeo; (3) `linha.md` completa; (4) S60 para cada tropeço; (5) `grep` das decisões novas (S52); (6) commit (S56) e `#status`; (7) o que serve a qualquer canal: avisar o Lucas.
- **Hoje mora em:** nenhum lugar (a promoção é combinada em frases soltas). **Tira: 0.**

#### S62 · `contexto-do-canal`
- **description:** Use ao começar qualquer trabalho no Alpha Point ou ao despachar um especialista: o núcleo comum (canal sem rosto, idioma, formato de tela, relógio, mapa, o que nunca se roda) num lugar só.
- **Conteúdo:** faceless (cota de apresentador 0 %, master preto); um relógio só (`words.json`, na grafia da voz); idioma (fala e tela em en-US; notas, `motivo` e report em pt-BR; vocabulário de máquina não se traduz); formato de tela (identidade §7); `<html lang="en-US" data-render="4k-native">`; sem capítulos na tela; cauda de 20 s; mapa = MapTiler, crédito durante todo o mapa; **nunca** `narrar.mjs`/`transcrever.mjs` sem o Lucas; regra da rede; os marcadores (`<proj>`, `<workspace>`…).
- **Efeito:** substitui o núcleo repetido no "§0" de 14 roupas (55 KB somados; estimo ~30 KB repetidos, **não medido**). **Tira do `CLAUDE.md`: 0**; tira das roupas, o §0.

---

## 5. Agente + skill: como cada um chega às suas skills

**Como o agente chega.** Dois caminhos que não editam o agente: (a) a **roupa** do agente (`marca/agentes/<id>.md`, que ele já é mandado a ler) ganha uma seção "Skills do meu passo", de 3 a 8 linhas, com `name`, quando usar e o caminho do `SKILL.md`; (b) o **pedido de despacho** repete os caminhos. O agente os lê com `Read`. Para o Claude central, a mesma lista vale como índice quando o catálogo não casar. Modelo da linha do pedido:

> Skills do seu passo (leia o `SKILL.md` antes de começar e siga as etapas; elas valem mais que a sua memória do ofício): `.claude/skills/<a>/SKILL.md`, `.claude/skills/<b>/SKILL.md`. Se uma etapa disser "Pare se…", pare e diga no relato.

| Agente (modelo) | Skills que ele lê |
|---|---|
| `montador` (opus) | S62, S18, S14 (só para entender o `words.json`), S22 (o que existe em geometria) |
| `pesquisa-imagens` (opus) | S62, S19, S23, S25, S26 (só a lista de caça) |
| `pesquisa-pessoas`, `pesquisa-logos` (opus) | S62, S20, S23, S25 |
| `pesquisa-documentos`, `pesquisa-dados` (opus) | S62, S21, S25, S36 |
| `pesquisa-geo` (opus) | S62, S22, S25 |
| `conferente-de-midia` (opus) | S62, S24, S26 (fase B, passo do arquivo baixado) |
| `diretor-de-arte` (fable) | S62, S27, S33, S35, S53 |
| `regente-de-imagem` (opus) | S62, S28, S33 |
| `redator-de-tela` (opus) | S62, S29, S36 |
| `verificador-de-fatos` (opus) | S62, S30, S25 |
| `editor-de-arte` (fable) | S62, S31, S34, S35, S36, S40, S44 |
| `mapista` (opus) | S62, S32, S33, S36, S38, S40, S44 |
| `qc-visual` (sonnet) | S62, S41, S37 (só a leitura do resultado), S39 (a exceção), S34 (§5 da roupa) |
| `designer-de-navegacao` | nenhuma (sem trabalho no canal) |
| **Claude central** | todas; o catálogo mostra name/description, e S51 manda no despacho |

**Skills que NÃO são de agente, só do central** (porque envolvem gasto, chave, navegador do Lucas ou decisão): S02, S09, S10, S11, S12, S13, S14, S15, S16, S17, S26, S38, S39, S42, S43, S45, S46, S47, S48, S49, S50, S51 a S61. O agente que delas precisar recebe o resultado, não a skill.

**As roupas como segundo reservatório** (não é parte do `CLAUDE.md`, mas é onde a mesma lógica se aplica; fica para a Onda 3). Cada roupa mistura gosto do canal (que é o seu lugar) com passo a passo. Pelos cabeçalhos, os maiores blocos de procedimento:

| Roupa | Bloco (KB) | Skill que o abrigaria |
|---|---|---|
| editor-de-arte (42,5) | §5 tempo e movimento (6,3), §6 modelos (5,2), §10 mídia (6,2), §4 tamanho e espaço (4,4), §11 validar (2,4) | S31 (§5, §6, §11), S36 (§9), um futuro `montar-midia-na-cena` (§10) |
| qc-visual (36,2) | §4 números por lente (11,0), §5 o que reprova (10,8), §3 portões (5,5) | S41 com `lentes/*.md` lidos por lente (hoje cada despacho lê as duas seções inteiras) |
| pesquisa-imagens (28,4) | §3 acervo aberto (2,9), §4 banco pago (4,6), §5 licença (2,6), §6 formato (3,1), §10 portões (3,2) | S19, S23 |
| mapista (26,9) | §5 crédito (4,5), §3 base na tela (3,5), §10 rede e geometria (3,3), §1 gasto (2,0) | S32, S33, S22 |
| montador (19,8) | §5 mídia (4,3), §3 cardápio modo (2,6), §4 cobertura (2,2) | S18 |
| diretor-de-arte (18,4) | §4 conta de mundo real (3,7), §2 o arco (3,5) | S27 |
| redator-de-tela (19,5) | §4 o que cada tipo de texto leva (3,8), §5 créditos (3,7) | S29, S36 |

---

## 6. O que sai do `CLAUDE.md`, e o que fica

| Seção | Hoje (KB) | Sai para | Sai (KB) | Fica (KB) |
|---|---|---|---|---|
| Cabeçalho, “Quem”, “Pode”, “Como rodar”, “Versão” | 2,8 | S58 | 0,6 | 2,2 |
| O que a Régie faz (narração) | 9,2 | S09, S10, S11, S12, S15 | 7,3 | 1,9 |
| Peças da pré-v1 em uso (itens 1 a 9) | 15,4 | S13, S14, S15, S22, S23, S31 a S33, S44, S48, S56, S57 | 14,6 | 0,8 |
| Os especialistas | 33,7 | S24, S51, S34, S37, S38, S39, S44, S57, S23, S22, S04; 3,1 KB arquivados | 25,2 | 8,5 |
| A autonomia do vídeo 2 | 5,6 | S42, S51, S53 | 3,8 | 1,8 |
| A linha do tempo pré-render | 4,9 | S43 | 4,1 | 0,8 |
| Caça nos bancos pagos | 31,5 | S26 (e o `CHANGELOG.md` dela) | 26,0 | 5,5 |
| A trilha: Epidemic Sound | 5,5 | S45, S46 | 4,2 | 1,3 |
| O Discord | 4,9 | S54, S55 | 3,9 | 1,0 |
| O Telegram | 3,1 | S54 | 2,3 | 0,8 |
| A marca | 6,6 | S25 | 4,0 | 2,6 |
| O vídeo fala inglês | 2,6 | S31, S62 | 0,7 | 1,9 |
| As regras deste canal | 0,6 | (nada) | 0 | 0,6 |
| **Total** | **126,4** | | **96,7** | **29,7** |

Soma por skill (KB): S04 0,6 · S09 2,2 · S10 2,9 · S11 1,0 · S12 0,9 · S13 1,9 · S14 2,3 · S15 1,2 · S18 0,2 · S22 2,8 ·
S23 2,5 · S24 5,0 · S25 4,0 · S26 26,0 · S31 0,7 · S33 3,2 · S34 1,7 · S37 1,8 · S38 2,3 · S39 2,3 · S42 1,4 · S43 4,1 ·
S44 2,4 · S45 2,2 · S46 2,0 · S48 0,7 · S51 5,4 · S53 0,9 · S54 5,0 · S55 1,2 · S56 0,3 · S57 1,9 · S58 0,6 · arquivo
sem skill 3,1 = **96,7 KB**, que bate com a coluna “Sai”. As demais skills têm “Tira: 0” porque o procedimento delas hoje mora
em roupa, ferramenta ou relato, e não no `CLAUDE.md`. Os números são bytes de linhas inteiras do `CLAUDE.md` (medidos com
`wc -c` por faixa), repartidos entre as skills por julgamento onde um bloco serve a duas; a repartição fina é estimativa.

**O que fica nos ~30 KB**, em uma frase por bloco:
- quem é o dono, o que se pode e não se pode, onde está o motor, como rodar o motor;
- a lista de passos da linha com quem entra em cada um (a tabela de 1,3 KB) e os modelos por especialista;
- as decisões do Lucas na forma curta: pergunta, resposta, data, e o ponteiro para a skill ou para a marca;
- **as regras de segurança, inteiras e visíveis**: não contornar robô, não baixar sem lista, não gastar sem ok, nunca digitar senha, nunca ler o arquivo de chaves, aprovação só pelo chat, o conferente não é o dono, o Discord só posta, a música nunca em IA;
- a caça: a decisão, o "Nunca", o CAPTCHA, os tetos, a convivência, o que está fora;
- o idioma (as 7 linhas), a marca (os ponteiros) e as 4 regras do canal.

**O truque dos ponteiros.** Cada seção esvaziada mantém o título e vira “Isto agora é a skill `<name>`: <uma linha de quando usar>”. Os ~200 ponteiros das roupas e da skill da caça continuam apontando para uma seção que existe.

**Duplicação a conferir antes de apagar:** o `CLAUDE.md` e o `SKILL.md` da caça repetem muita coisa. A conferência é por trecho: o que o `SKILL.md` já diz some do `CLAUDE.md`; o que só o `CLAUDE.md` diz (decisões do Lucas, Brave, contas) fica ou entra na skill como “Decisões”.

---

## 7. Ordem de construção

Critério: bytes que saem do `CLAUDE.md` × quantas vezes por vídeo × quanto custa o erro. Nenhuma onda mexe no motor, nas roupas nem nos agentes; a seção "Skills do meu passo" nas roupas entra na Onda 2.

**Onda 1 (entre vídeos; tira ~63 KB, mais 3,1 KB arquivados; todas rodam em todo vídeo):**
S26 (reorganizar a caça e o `CHANGELOG`), S51, S37, S38, S39, S44, S57, S10, S11, S12, S14, S15, S43, S24, S25, S62, S60 (primeiro de todas, porque é com ela que as outras se criam). Depois, **um teste só**: um despacho de prova com uma skill de mentira, para saber se o subagente vê o catálogo ou só consegue ler o arquivo.

**Onda 2 (tira ~24 KB; sem as quais o próximo vídeo repete trabalho copiado):**
S04, S05, S06, S07, S08, S03, S01, S02 (os cinco passos sem agente, mais a pauta); S18, S17, S16; S19 a S23; S31, S32, S33, S35, S36; S34; S42; S45, S46, S47, S48; S53, S54, S52. Aqui entra o bloco "Skills do meu passo" em cada roupa e o `grep` de ponteiros.

**Onda 3 (tira ~6 KB; qualidade e limpeza):**
S27 a S30 (as roupas de direção e texto), S40, S41 (partir o `qc-visual` por lente), S49, S50, S55, S56, S58, S59, S61, S09, S13; depois a quebra das roupas grandes (seção 5).

**Por que as ondas não são “as mais leves primeiro”:** a Onda 1 é a que mais pesa e a que mais cria dano se for esquecida (portão, render e caça são onde os erros custaram horas e crédito). Pauta e roteiro têm KB 0 no `CLAUDE.md`, mas são onde cada vídeo recomeça do zero e de onde o Lucas pediu o exemplo; por isso a Onda 2 inteira os pega antes do vídeo 3.

**Como medir que funcionou:** (a) tamanho do `CLAUDE.md` em bytes; (b) tokens do contexto de um subagente novo (hoje o `CLAUDE.md` entra em todos); (c) tamanho do bloco de skills no catálogo da sessão; (d) o teste de disparo de cada skill (3 frases que levam, 2 que não); (e) no vídeo 3, quantas vezes alguém copiou um script de um vídeo para outro (deve ser zero).

---

## 8. Riscos e perguntas

**Para o Lucas (lista de opções, no chat):**
1. **O nome da skill de roteiro.** O exemplo dele foi `gerar-roteiro-curiosidades`; o canal é de geografia com mapa. Proposta: `gerar-roteiro-geografia`; ele pode manter o dele.
2. **Catálogo grande.** Aceitar o desenho "etapa no catálogo, lição dentro da skill" (60 a 120 entradas) e skill própria só quando o problema tem gatilho próprio, em vez de milhares de entradas? É a decisão que mais muda o custo.
3. **Quando mexer.** Onda 1 só depois do aviso do vídeo 2 ao Lucas e entre dois vídeos (subagentes em curso leem o `CLAUDE.md` e as roupas).
4. **A pergunta da descrição** (S49, passo 8): fontes do dossiê na descrição, sim ou não.

**Para o Claude central, antes de começar:**
- **Teste do subagente**: um despacho com uma skill de mentira (um arquivo que manda dizer uma palavra combinada) para saber se o catálogo chega ao subagente ou só o `Read` por caminho. Hoje a hipótese é que não chega; o plano vale nos dois casos.
- **Promover scripts**: os de `out/juneau/_pesquisa/` que o vídeo 2 chama (`ingest-local.py`, `gerar-master.mjs`, `tratar-narracao.py`, `conferir-*.py`) são a dependência mais frágil do canal: se o Juneau for reorganizado, o vídeo 3 quebra. Promover é cópia com prova (mesmo resultado sobre o vídeo 2), com o original mantido até o vídeo 3 passar.
- **Decisão duplicada já divergente**: `marca/voz.md` §1 diz v3 e a voz `iAc9…`. Corrigir antes de a S09/S10 apontarem para ela (e `grep` da frase velha, item 46).
- **Roupas que apontam para seção do `CLAUDE.md`** (~200 ponteiros): manter o título (seção 6).
- **A skill da caça é regra de segurança**: o resumo de ~8 KB tem de manter “Nunca”, CAPTCHA, tetos e a lista de aprovação à vista. Fase solta sem o "Pare se" é o risco.
- **Skill nova só carrega em sessão nova.** A primeira rodada pede um reinício do app, e o Claude central da sessão que as criou não as vê.
- **Limite do que não medi:** o tamanho exato de cada bloco repetido nos §0 das roupas; o custo real do catálogo em tokens; se `Skill` chega ao subagente; se a descrição curta casa nos pedidos reais (o teste de disparo mede).
- **Fora do alcance desta parte** (cobertos pela parte irmã): a lista de aprendizados que viram skill de problema, e o mapeamento de skills públicas do GitHub para adaptar. Para a segunda, os pontos de partida mais próximos já estão no disco, no molde da pré-v1: `produzir` (orquestração da linha), `cacar-no-chrome`, `observatorio`, `aprimorar`, `tendencias` (para S01), `git-autonomo`, `marca`, e os agentes não instalados (`pesquisador-de-pauta`, `roteirista`, `critico-de-roteiro`, `curador-titulos-thumbs`, `qa-montagem`).

---

## 9. Coincidência de nomes com a parte dos aprendizados (`aprendizados.md`)

A parte irmã propõe 53 skills (44 de problema, 9 de etapa nascida de erro) e dá nomes provisórios às de etapa (seção 3 dela). Onde as duas coincidem, usei o mesmo nome; onde mudam, a tabela diz a equivalência. **Os KB do `CLAUDE.md` das duas partes não se somam:** as linhas de “Tropeços”, da caça, de “Os portões medem” e dos itens 6 e 7 das peças aparecem nas duas contas. A parte irmã estima que o `CLAUDE.md` fica com 45 a 50 KB; esta, com ~30 KB. A diferença é o que esta parte também tira: o conferente (5,0), o preâmbulo de despacho e marcadores (3,9), a conversa por peça (3,1, arquivo), o ilustrador (1,7), os avisos (7,3) e a trilha (4,2). Decidir na consolidação se esses blocos saem do `CLAUDE.md` ou ficam como regra.

| Esta parte | Parte dos aprendizados | Nota |
|---|---|---|
| S04 `gerar-roteiro-geografia` | `gerar-roteiro-curiosidades` | o nome do exemplo do Lucas; receber 13, 36.2 e 8 |
| S03 `pesquisar-dossie-de-pauta` | T2 | igual |
| S05 `rodar-bancada-do-roteiro` | T1 `revisar-roteiro-com-lista-fechada` | T1 vira o núcleo da S05 |
| S06 `pagina-de-decisoes-para-o-dono` | T4 | igual |
| S07 `titulo-e-miniatura` | T5 `titulo-e-miniatura-pelas-referencias` | |
| S08 `preparar-texto-para-voz` | N8 | igual |
| S09 `escolher-voz-elevenlabs` | N5 | igual |
| S10 `narrar-elevenlabs` | `narrar-elevenlabs` | recebe N1 a N4 como lições |
| S11 `conferir-narracao` | N1 e N3 | N1 e N3 são o `licoes.md` da S11 |
| S12 `tratar-narracao` | N2 | |
| S13 `baixar-do-historico-elevenlabs` | N6 | |
| S14 `relogio-de-palavras` | N7 `relogio-de-palavras-sem-scribe` | |
| S18 `montar-espelho` | `montar-espelho` | |
| S22 `gerar-geometria-de-mapa` | G2 a G5 | G2 a G5 viram `licoes.md` da S22 |
| S23 `pesquisar-midia-acervo-aberto` | M13 (+ M11, M12) | |
| S24 `conferir-midia` | `conferir-midia` (+ M9, M12) | |
| S25 `site-recusou-robo-nao-contornar` | M10 | |
| S26 `cacar-no-chrome` | M1 a M9, T9, F1 | as fases + `licoes.md`; **uma skill com fases**, não nove no catálogo |
| S31 `editar-cena-html` | `editar-cena-html` (+ R6, R7, R8) | |
| S32 `fazer-cena-de-mapa-maptiler` | `fazer-cena-de-mapa-maptiler` (+ G1) | |
| S34 `ilustrar-com-fisica` | R9 | |
| S37 `rodar-portoes-de-cena` | `rodar-portoes-de-cena` (+ R3, R4) | |
| S38 `portoes-em-cena-de-mapa` | R2 | |
| S39 `triar-reprovacao-de-portao` | R5 (+ R4) | |
| S42 `revisar-espectador` | R10 | |
| S43 `aprovar-na-linha-do-tempo` | R11 | |
| S44 `renderizar-cena-4k` | R1 | |
| S48 `entregar-xml-premiere` | R12 `pacote-premiere-para-outro-computador` | |
| S50 `checar-antes-de-publicar` | T3 `reconferir-volateis-na-vespera` | T3 vira o passo 1 da S50 |
| S51 `despachar-especialista` | T8 | |
| S52 `registrar-decisao-do-dono` | T7 (+ F1) | |
| S54 `avisar-o-dono` | F5 | |
| S57 `windows-node-armadilhas` | F2 | |
| S59 `retomar-apos-troca-de-conta` | T9 `retomar-apos-troca-de-conta-do-claude` | |
| S60 `registrar-aprendizado-como-skill` | X1 | |

**Só desta parte** (sem equivalente lá): S01, S02, S16, S17, S19, S20, S21, S27, S28, S29, S30, S33, S35, S36, S40, S41, S45, S46, S47, S49, S53, S55, S56, S58, S61, S62.
**Só da parte irmã:** os problemas que não são etapa (N4 “soa lida”, M2 a M8 etc.), que aqui entram como `licoes.md` ou como as fases da S26.

---

## 10. Quantas skills, em uma linha

62 propostas aqui, das quais 50 são de passo da produção (S01 a S50) e 12 de operação e ambiente (S51 a S62); somadas às de problema da parte irmã e depois da fusão dos nomes da seção 9, o catálogo ativo fica em ~85 a 100 entradas, e as ~100 lições ficam dentro das skills, fora do catálogo.
