# A divisão do CLAUDE.md enxuto: a proposta (30/10/2026)

O caminho 2 da página "Dois caminhos para a cota" (item 1: "O CLAUDE.md enxuto, com skills"), que o Lucas mandou testar no vídeo 5
(a Drake): "Vamos testar neste próximo vídeo os trabalhos mecânicos com script e o .md enxuto, a depender do resultado, voltamos ao modo
como funciona hoje".

**É proposta: nada mudou.** O `CLAUDE.md` está como estava, e `sala/` não existe. A divisão só vale com o ok do Lucas no chat da Sala.

Os arquivos desta pasta:
- `proposta.md`: este texto;
- `CLAUDE-nucleo-rascunho.md`: o núcleo, pronto para valer (é o que viraria o `CLAUDE.md`);
- `mapa-de-linhas.json`: cada bloco de linhas do `CLAUDE.md` de hoje, com o destino, a seção de destino, a categoria, o porquê e o
  sha1 do texto;
- `conferir-divisao.py`: a prova de que nenhuma linha se perde (sai 0);
- `montar-rascunho.py`: monta o mapa, o núcleo e as tabelas abaixo a partir da partição; serve para refazer tudo se o `CLAUDE.md`
  mudar antes do ok.

## Em resumo

- **Hoje:** o `CLAUDE.md` tem 1.767 linhas, uns 72 mil tokens (a 2,2 caracteres por token, como na página). O app o põe inteiro em
  todo agente, e o agente o relê em toda volta.
- **O núcleo:** uns **22,7 mil tokens** (31 % de hoje): toda regra que um agente usa (especialista, setor e subagente da Sala),
  palavra por palavra, mais uma nota no topo, quatro ponteiros curtos e o índice de onde está cada assunto (1,8 mil tokens de texto
  novo). Cada agente começa com uns 49 mil tokens a menos. (Era 22,1 mil antes da revisão do cético, de 30/10: o crédito do OSM e a
  "Convivência" da caça voltaram ao núcleo, e a nota do topo diz à Sala que lê o arquivo do assunto antes do trabalho; `cetico.md`.)
- **A Sala:** uns 51 mil tokens em 14 arquivos de `sala/`, que a Sala lê quando a tarefa pede. A caça sozinha tem 13,2 mil.
- **A volta:** o `CLAUDE.md` de hoje inteiro fica em `sala/CLAUDE-completo.md`.
- **Não chega aos 15 mil da página.** Com o texto palavra por palavra e toda regra de agente no núcleo, o piso deu 22,7 mil (uns 25
  mil se a razão real for a de 2,0 caracteres por token que o `razao-tokens.py` mediu nas leituras). O que
  sobra acima dos 15 são regras de uma peça ou de poucas: os tropeços do apoio, o contrato do conferente, a margem e a pré-carga dos
  portões e a cópia arquivada do Alasca. A **opção B**, abaixo, chega a uns 15 mil levando essas quatro para arquivos de consulta das
  peças. Ela quebra a defesa da página ("o núcleo guarda toda regra que um agente usa"), e por isso é decisão do Lucas.
- **A economia, estimada:** uns 9 % do total com o núcleo de 22,7 mil, e uns 10 % com o de 15 (a opção B). A conta é a da página
  interpolada pelos tokens que saem: "só tirar o que é da Sala" dava 6 %, e o núcleo de 15 mil, 10 %. Num dia como 29/10 (40
  pontos), uns 3,5 pontos a menos. Só o teste mede.

## O critério

Cada bloco do `CLAUDE.md` (um parágrafo, um item de lista com os subitens, uma tabela) caiu numa de quatro categorias:

| Categoria | O que é | Destino | Mil tokens |
|---|---|---|---:|
| agentes | regra que um agente usa: especialista, setor ou subagente da Sala | núcleo | 20,9 |
| Sala | trabalho só da Sala de controle: a caça, a trilha, a linha do tempo, o motor sem rosto, a narração, o git, a Régie, o envio aos setores | `sala/` | 38,5 |
| registro | decisão, prova ou histórico cuja regra, quando há, mora no núcleo, na marca, numa roupa ou no regimento | `sala/` | 10,4 |
| Juneau | só do Juneau, arquivado sem publicar | `sala/` | 2,3 |

Quatro regras guiaram a divisão:
- **Palavra por palavra.** As linhas mudam de lugar inteiras. Só o recuo do começo da linha muda, em quatro blocos que sobem de
  nível no núcleo (as linhas 59–60, 157–158, 164–168 e 1626–1628). O `conferir-divisao.py` prova as duas coisas.
- **As citações literais do Lucas viajam com a regra.** O bloco se move inteiro, com a fala. Onde a regra fica no núcleo, a
  pergunta e a resposta ficam com ela: "O ilustrador, com a física" (612–616) e "Os portões medem" (719–725) ficaram inteiros
  por isso, com uns 570 tokens a mais. Onde a regra mora noutro arquivo que o agente lê, o bloco do `CLAUDE.md` vai inteiro, com a
  fala, para `sala/`, e o arquivo onde a regra mora tem a própria citação: o crédito a 56 px (`marca/identidade.md` §4.1), "Mais
  mapa", "Mais ilustração" e "O gancho que prende" (§5), os modelos e o esforço (o regimento, "Quem faz o trabalho").
- **O setor é agente.** O que vale para todo agente ficou no núcleo: o que só a Sala faz, que nenhum subagente manda mensagem a
  setor, e a trava do Python. O protocolo dos setores (a raiz da autorização, as duas provas, a trava escrita, a peça como
  subagente, a máquina, o Lucas no setor, o fim da tarefa) está inteiro no `setores/REGIMENTO.md`, que o setor lê do começo ao fim
  a cada tarefa; a cópia do `CLAUDE.md` vai para `sala/setores.md`.
- **Arquivo, não skill, por enquanto.** Uma skill deixa a linha de descrição em toda sessão, inclusive nos setores e nos
  subagentes: uma skill de narrar ou de baixar trilha ficaria ao alcance de quem não pode gastar crédito. O arquivo de `sala/` é
  passivo: só a Sala o abre, pelo índice. E skill nova só carrega em sessão nova. A narração, a linha do tempo, a trilha e a revisão
  de espectador são procedimentos e podem virar skill depois do teste, se ele ficar. A caça já é skill (`cacar-no-chrome`): as
  regras do canal que ela segue vão para `sala/caca.md`, e a skill não muda (o sha256 dela continua valendo).

## O que fica no núcleo, e por quê

Na ordem do rascunho:
- **O topo, "Quem está do outro lado", "A numeração dos vídeos" e "O que você pode, e o que não pode":** todo agente. Da `main`,
  ficam só as duas linhas que valem para os outros ("nada pessoal vai ao git" e "só a Sala commita"); o resto é da Sala. Sobe para
  cá a linha do arquivo de chaves (nunca imprimir nem ler os valores, e o `onde()`), que morava no meio da narração.
- **"O que a Régie faz":** o que a linha faz e não faz, e "Sem títulos de capítulo na tela", que o montador, o editor, o designer e
  o redator usam. A cadeia do master e a narração vão para `sala/narracao.md`.
- **"Peças da pré-v1 em uso":** o clone que não se edita, `out/<slug>/`, o `file:///`, e os itens 3 (as palavras e o tempo do
  `words.json`), 4, 5, 6 (o crédito do OSM, que sete roupas citam como "pré-v1 item 6", e os cuidados da geometria) e 7 (as fontes, o `tokens.css`, o `RIG.paleta` e o `quadro.mjs` com satélite).
  Os itens 1, 2, 8 e 9, e o Juneau dos itens 6 e 7, vão para `sala/`.
- **"Os especialistas":** quem entra em que passo, o contrato do conferente (o que passa por ele, a regra da cena, o
  `pendente_lucas`, o `_retirado`, um despacho por vez), "Como se despacha", o ilustrador, a roupa, os marcadores com o
  `<tile-source>`, os scripts do canal, os portões (o `qc-cena`, a margem, a pré-carga, quem roda), "Não se rodam" e os tropeços.
  As roupas mandam a peça a essas seções pelo nome. Saem daqui o portão do `research` e o conferente como agente geral (da Sala),
  "Uma conversa por peça" (a regra do Juneau), os modelos e o esforço (o regimento tem a regra dos setores), o M11 e a limitação
  do portão (as roupas têm a regra), e "Mais mapa", "Mais ilustração" e "O gancho que prende" (a marca tem a regra).
- **"Os setores":** a Sala de controle e o que só ela faz, que nenhum subagente usa `SendMessage`, e a trava do Python, que vale
  para todos.
- **A caça e a trilha, a parte dos agentes:** "Nada pessoal no git", "Quem faz o quê" (menos o Lucas), a "Convivência" (nunca se mata
  navegador por nome: vale para toda peça que abre o Chrome) e "a música nunca entra em
  ferramenta de IA".
- **"A marca":** os arquivos da marca, o site que recusa robô, o navegador do app que só a Sala opera, e a cópia arquivada do
  Alasca (o `marca/midia.md` diz que essa regra mora aqui, e ela traz a regra geral da cópia de outros sites, que a pesquisa e o
  verificador usam).
- **"O vídeo fala inglês" e "As regras deste canal":** todo agente.
- **O índice:** cada seção de hoje e cada assunto que as roupas, os ofícios, o regimento e as skills citam, com o arquivo onde
  está.

## Os números

<!-- tabelas:inicio -->
### As seções do CLAUDE.md de hoje e o destino de cada uma

Em mil tokens, a 2,2 caracteres por token, como na página. "Quem usa" diz as categorias dos blocos da seção (agentes = regra que um agente usa; Sala = só da Sala; registro = decisão, prova ou histórico; Juneau = só do Juneau). A linha de cada bloco está no `mapa-de-linhas.json`.

| Seção (linhas) | Mil tokens | Quem usa | Fica no núcleo | Vai para |
|---|---:|---|---:|---|
| Alpha Point — canal da Régie (1–7) | 0,2 | agentes | 0,2 | — |
| Quem está do outro lado (8–13) | 0,1 | agentes | 0,1 | — |
| A numeração dos vídeos (desde 27/10/2026) (14–33) | 0,5 | agentes | 0,5 | — |
| O que você pode, e o que não pode (34–63) | 1,1 | agentes, Sala, registro | 0,4 | `sala/motor-e-git.md` (0,7) |
| Como rodar o motor (64–77) | 0,3 | agentes, Sala | 0,1 | `sala/motor-e-git.md` (0,2) |
| Versão do motor, e como atualizar (78–96) | 0,4 | Sala | 0,0 | `sala/motor-e-git.md` (0,4) |
| O que a Régie faz — e o que ainda não faz (97–190) | 4,1 | agentes, Sala | 0,6 | `sala/narracao.md` (3,5) |
| Peças da pré-v1 em uso (desde 25/09/2026) (191–355) | 6,9 | agentes, Sala, registro, Juneau | 1,7 | `sala/motor-e-git.md` (0,6); `sala/narracao.md` (2,0); `sala/mapas-e-maptiler.md` (2,5) |
| Os especialistas (desde 26/09/2026) (356–864) | 21,8 | agentes, Sala, registro | 11,3 | `sala/especialistas.md` (4,6); `sala/modelos-e-esforco.md` (5,0); `sala/mapas-e-maptiler.md` (0,9) |
| A autonomia do vídeo 2 em diante (02/10/2026) (865–957) | 4,1 | Sala | 0,0 | `sala/autonomia-e-espectador.md` (4,1) |
| Os setores (desde 12/10/2026) (958–1036) | 3,3 | agentes, Sala, registro | 1,0 | `sala/setores.md` (2,3) |
| Do vídeo 5 em diante: mais calmo, mais longo, e o teste dos dois caminhos (30/10/2026) (1037–1061) | 1,2 | Sala | 0,0 | `sala/do-video-5-em-diante.md` (1,2) |
| O motor sem rosto do Top10 (desde 24/10/2026, com o vídeo 5 como piloto) (1062–1159) | 4,2 | Sala | 0,0 | `sala/motor-sem-rosto.md` (4,2) |
| A linha do tempo pré-render (desde 02/10/2026) (1160–1229) | 2,5 | Sala | 0,0 | `sala/linha-do-tempo.md` (2,5) |
| Caça nos bancos pagos (desde 26/09/2026) (1230–1585) | 14,2 | agentes, Sala | 1,0 | `sala/caca.md` (13,2) |
| A trilha: Epidemic Sound (desde 05/10/2026) (1586–1639) | 2,6 | agentes, Sala | 0,2 | `sala/trilha.md` (2,5) |
| Os avisos no Discord e no Telegram: desligados (desde 29/10/2026) (1640–1651) | 0,4 | Sala | 0,0 | `sala/avisos.md` (0,4) |
| A marca (1652–1724) | 3,0 | agentes, Sala, Juneau | 2,4 | `sala/fontes-e-navegador.md` (0,6) |
| O vídeo fala inglês; a casa fala português (1725–1767) | 1,4 | agentes | 1,4 | — |

### O tamanho de cada destino

| Destino | Mil tokens | O que guarda | Forma |
|---|---:|---|---|
| núcleo (`CLAUDE.md`): as linhas de hoje | 20,9 | O núcleo: toda regra que um agente usa (especialista, setor e subagente da Sala), mais o índice de onde está cada assunto. O app o põe em todo agente. | o app o põe em todo agente |
| núcleo: o texto novo (a nota, os ponteiros e o índice) | 1,8 | | |
| **núcleo inteiro** (o rascunho) | **22,7** | | |
| `sala/motor-e-git.md` | 1,8 | A `main` sempre em dia e a cópia `pessoal`; como rodar e atualizar a Régie; a decisão de usar a peça do motor; o `segredos.mjs` e o `doctor` da pré-v1; o XML do Premiere (item 8). | arquivo |
| `sala/narracao.md` | 5,5 | A cadeia que produz o master e a narração inteira: a voz, o v3 e o v4, como se gera, a conferência, o tratamento, o gasto da ElevenLabs; os itens 1, 2, 3 (o ouvido e os limites) e 9 da pré-v1. | arquivo; candidato a skill depois do teste (é procedimento: narrar, conferir, tratar, gerar o master) |
| `sala/mapas-e-maptiler.md` | 3,4 | A liberação da MapTiler em cada vídeo (o `MapTiler liberado`), a base de satélite, o teste com Landsat, a geometria do Juneau, o crédito a 56 px do vídeo 2 e o Juneau depois dos 56 px. | arquivo |
| `sala/especialistas.md` | 4,6 | O que é só da Sala ou registro em "Os especialistas": o portão do `research`, o conferente como agente geral, uma conversa por peça (até o Juneau), o `package.json`, o M11 e a limitação do portão (as regras moram nas roupas e no regimento), "Mais mapa", "Mais ilustração" e "O gancho que prende" (as regras moram na marca), o ilustrador conferido e o aceite artístico, e a conversa em Fable de 29/09. | arquivo |
| `sala/modelos-e-esforco.md` | 5,0 | O roteiro em Fable, o levantamento dos modelos, o que a Sala decide sozinha, a Sala em máx, o ultracode, a Sala que recomeça a cada etapa, o balanço depois do vídeo 3 e o teste da animação em Opus. | arquivo |
| `sala/autonomia-e-espectador.md` | 4,1 | A autonomia do vídeo 2 em diante (as quatro respostas do Lucas) e a revisão de espectador, antes do Lucas. | arquivo; a revisão de espectador é candidata a skill depois do teste |
| `sala/setores.md` | 2,3 | O pedido dos setores, as cinco conversas (a tabela com os sessionIds), como a Sala manda a tarefa, a prova da trava do Python e o vídeo novo. | arquivo |
| `sala/do-video-5-em-diante.md` | 1,2 | As decisões de 30/10/2026: o motor do Top10 sem data, o ritmo mais calmo, os vídeos mais longos e o teste dos dois caminhos. | arquivo |
| `sala/motor-sem-rosto.md` | 4,2 | O motor sem rosto do Top10: o piloto, o pacote `estudio/`, as respostas do Lucas e o que muda. | arquivo |
| `sala/linha-do-tempo.md` | 2,5 | A linha do tempo pré-render: o pedido, a ferramenta, o Tailscale, o que se provou e o fluxo. | arquivo; candidato a skill depois do teste (é procedimento) |
| `sala/caca.md` | 13,2 | Caça nos bancos pagos: as regras do canal que a skill `cacar-no-chrome` tem de seguir (o Brave, as contas, a lista, os downloads, os tetos, o que fica de fora). A parte dos agentes ficou no núcleo. | arquivo, lido junto com a skill `cacar-no-chrome` (a skill não muda: o sha256 dela continua valendo) |
| `sala/trilha.md` | 2,5 | A trilha do Epidemic Sound: a chave, o MCP, a ferramenta, o robots.txt, a licença e onde a faixa entra. A música fora de IA ficou no núcleo. | arquivo; candidato a skill depois do teste (é procedimento) |
| `sala/avisos.md` | 0,4 | Os avisos no Discord e no Telegram, desligados desde 29/10/2026. | arquivo |
| `sala/fontes-e-navegador.md` | 0,6 | Como a Sala usa o navegador do app sem o Lucas acompanhando, e as fontes do Juneau lidas pela cópia arquivada. | arquivo |
| **CLAUDE.md de hoje** | **72,1** | 1767 linhas | |
<!-- tabelas:fim -->

## O que muda para cada um

- **As peças:** nada no trabalho. Começam com uns 22,7 mil tokens de `CLAUDE.md` em vez de 72 mil. As roupas citam o `CLAUDE.md` por
  nome de seção, e todo nome citado está no núcleo, num título que ficou ou no índice (o `conferir-divisao.py` confere as 181
  citações de fora e as 41 de dentro).
- **Os setores:** o regimento manda ler a seção "Os setores" do disco, e ela continua no núcleo, com o ponteiro para o regimento e
  para `sala/setores.md`. A mensagem de abertura que o Lucas digitou em cada setor continua valendo.
- **Os subagentes da Sala:** como as peças.
- **A Sala:** lê o arquivo de `sala/` do assunto quando a tarefa pede (o índice diz qual). Depois de um `clear_session`, recomeça
  com 22,7 mil em vez de 72 mil.
- **O Lucas:** vê a divisão e diz se vale.

## Para onde apontam as citações de hoje

As que apontam para o que ficou no núcleo não mudam: "A marca", "O vídeo fala inglês", "Os especialistas", "Peças da pré-v1 em uso"
(itens 3 a 7), "Os portões medem", "Os scripts do canal", "Tropeços conhecidos do apoio", "O navegador do app, sem o Lucas
acompanhando", "O que a Régie faz" e "Os setores". Estas passam a achar o texto pelo índice:

| Citação | Quem cita | Onde passa a estar |
|---|---|---|
| "Caça nos bancos pagos" | a skill `cacar-no-chrome`, as roupas do diretor, do editor, do montador e do pesquisa-imagens, `marca/midia.md` | `sala/caca.md` (a parte dos agentes ficou no núcleo) |
| "Os modelos", "O esforço em extra", "Três peças voltam ao alto" | `setores/REGIMENTO.md`, `marca/identidade.md` | `sala/modelos-e-esforco.md` (o regimento tem a regra inteira) |
| "A revisão de espectador, antes do Lucas" | a roupa do qc-visual, `APRENDIZADOS.md` | `sala/autonomia-e-espectador.md` |
| "A autonomia do vídeo 2 em diante" | `ferramentas/linha-do-tempo/` (`DESENHO.md`, `LEIA-ME.md`), `APRENDIZADOS.md` | `sala/autonomia-e-espectador.md` |
| "Como se gera" | a roupa do redator | `sala/narracao.md` |
| "A linha do tempo pré-render" | `APRENDIZADOS.md` | `sala/linha-do-tempo.md` |
| "Os avisos no Discord e no Telegram" | `ferramentas/linha-do-tempo/DESENHO.md` | `sala/avisos.md` |
| "pré-v1 item 8" | a roupa do montador | `sala/motor-e-git.md` |
| "pré-v1 item 6" e "item 7", na parte do Juneau | as roupas do mapista, do editor, do diretor e da pesquisa-geo | `sala/mapas-e-maptiler.md` (o crédito do OSM e os cuidados ficaram no núcleo; o ponteiro do item 6 aponta também o `APRENDIZADOS.md`, item 17, achados 22 e 23) |

Para o teste, o índice basta: nenhuma roupa precisa mudar. Se a divisão ficar, a Sala troca esses ponteiros pelo arquivo novo.

## Como aplicar, depois do ok

1. Rodar `python -X utf8 -B out/_modelos/md-enxuto/conferir-divisao.py`. Se o `CLAUDE.md` mudou depois de 30/10 (o mapa é do sha256
   `7dd31ffc…`, o do commit `a508701`), o script sai 1: a Sala confere as faixas da `PARTICAO` no `montar-rascunho.py` contra o
   arquivo novo, põe cada linha nova no destino dela, e roda o montar e o conferir de novo, até sair 0.
2. Copiar o `CLAUDE.md` para `sala/CLAUDE-completo.md`, byte a byte.
3. Montar os arquivos de `sala/`: `conferir-divisao.py --previa=<pasta temporária>` grava exatamente esses arquivos, e a Sala os copia
   para `sala/`.
4. Pôr o `CLAUDE-nucleo-rascunho.md` no lugar do `CLAUDE.md`.
5. Rodar `conferir-divisao.py --aplicado`, que relê do disco o núcleo, os arquivos de `sala/` e a cópia completa, e tem de sair 0.
6. No regimento, a linha do topo ("vale o `CLAUDE.md` lido do disco… lê a seção 'Os setores' do disco") passa a citar também
   `sala/setores.md`.
7. `segredos.mjs --staged`, o commit, `git push origin main` e `git push pessoal main`.
8. A Sala manda os setores relerem (o regimento: "Mudou este arquivo, o `CLAUDE.md` ou `.claude/agents/`"). Conversa já aberta
   guarda o `CLAUDE.md` antigo no contexto até reler; subagente novo já nasce com o núcleo.
9. Durante o teste, decisão nova vai ao arquivo do assunto, e regra nova de agente, ao núcleo.

Fica de fora desta divisão, e pede o ok à parte: o item 2 do caminho 2, a regra dos 5 minutos (nenhum agente parado mais de 5
minutos esperando um comando), que é texto novo e entra nas roupas e no regimento.

## Como voltar

- `sala/CLAUDE-completo.md` é o `CLAUDE.md` de hoje inteiro, com o mesmo sha256.
- Voltar é copiá-lo de volta para o `CLAUDE.md`, num commit novo, sem reescrever o histórico, e pôr nele o que entrou durante o
  teste no núcleo e em `sala/` (o `git diff` desde o commit da divisão mostra tudo). Os arquivos de `sala/` saem no mesmo commit e
  ficam no histórico. A linha do regimento volta a ser a de antes.
- Nenhum texto se perde: o completo guarda o de antes, e o git, o do teste.

## A medida do teste

A mesma de 29/10 (`out/_modelos/esforco-2026-10-29/LEIA-ME.md`), num lote da Drake, contra o Atlântico:

| O que medir | Como | Hoje | O esperado |
|---|---|---|---|
| a largada de cada agente (a pilha da volta 1) | `dados-pagina.py` (a pilha volta a volta) e `partes-do-custo.py` (gravar a largada) | ~101 mil tokens, ~75 mil do `CLAUDE.md` | ~50 mil a menos |
| o custo de reler texto fixo | `releitura-fixos.py`, com os caracteres por token de cada lado | 14 % do custo dos agentes | uns 4 a 5 % |
| o custo por papel e por cena | `por-esforco.py` e `peru-x-atlantico.py`, o mesmo papel no mesmo esforço | o Atlântico, 28–29/10 | menor; o número de voltas mostra os scripts (caminho 1), e a largada, o núcleo |
| nenhuma regra perdida | em cada defeito do lote (portão, qc-visual, espectador, Lucas), a Sala marca se a causa foi regra que saiu do núcleo | — | zero |
| o agente que precisou da Sala | quantas vezes um agente abriu um arquivo de `sala/` (o `Read` nos `.jsonl` do lote) | — | perto de zero; muitas aberturas dizem que a divisão errou para aquela peça |

**Volta o jeito de hoje** se um defeito causado por regra que saiu do núcleo chegar ao Lucas, se a largada não cair, ou se o Lucas
pedir.

## A opção B: chegar aos 15 mil

As quatro peças maiores do que ficou no núcleo são regras de uma peça ou de poucas:

| Bloco (linhas de hoje) | Mil tokens | Quem usa |
|---|---:|---|
| "Tropeços conhecidos do apoio" (802–864) | 2,6 | quem usa cada ferramenta: o render, o `quadro.mjs`, o `buscar-midia`, a NARA, o Commons, as bandeiras |
| o conferente: o que passa por ele, a regra da cena, o `pendente_lucas`, o `_retirado`, um despacho por vez (371–412, 419–423) | 2,2 | o conferente, a pesquisa, o editor, o mapista, o redator e o qc-visual |
| os portões: a margem (M6) e a cena de mapa com a pré-carga (735–765) | 1,6 | o editor, o mapista e o qc-visual |
| a cópia arquivada do Alasca (1694–1717) | 1,1 | a pesquisa e o verificador |

Levá-las para arquivos de consulta das peças (por exemplo `regras/tropecos.md`, `regras/conferente.md`, `regras/portoes.md` e
`regras/copia-arquivada.md`) deixa o núcleo com uns 15 mil. O índice e as roupas apontariam para eles, e o pedido de cada
despacho diria qual a peça lê. O risco é o que a página temia: a peça não abrir o arquivo e perder a regra.

**A recomendação: o núcleo de 22,7 mil no lote da Drake.** Ele leva quase 90 % da economia do de 15 mil sem tirar regra nenhuma do que o
agente sempre vê. Se a medida mostrar que o `CLAUDE.md` ainda pesa, a opção B vem depois, com a mesma medida.
