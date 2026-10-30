# O cético da proposta do CLAUDE.md enxuto (30/10/2026)

O pedido: rodar o `conferir-divisao.py`, procurar uma regra que um agente usa e que saiu do núcleo (lendo `.claude/agents/*.md`,
`marca/agentes/*.md` e `setores/REGIMENTO.md`), conferir que nenhum texto foi reescrito (as falas do Lucas intactas) e que o núcleo
cabe em uns 15 mil tokens, a 2,2 caracteres por token. Consertar na proposta o que for erro claro. O `CLAUDE.md` não foi tocado: o
sha256 continua `7dd31ffc…`, o do commit `a508701`.

## O veredito: RESSALVA

A divisão está bem feita, e o texto viaja palavra por palavra. Achei duas regras de agente que tinham saído do núcleo, mais uma lacuna da
Sala. Consertei as três na proposta, e o conferir continua saindo 0. A ressalva que fica é o tamanho: o núcleo tem 22,7 mil tokens, longe
dos 15 mil, e isso a proposta já diz.

## 1. O `conferir-divisao.py`

- **Antes dos consertos:** saiu 0. 92 blocos, núcleo de ~22.092 tokens, 181 citações de fora e 41 de dentro.
- **Depois:** sai 0. 96 blocos, núcleo de ~22.699 tokens (20.877 das linhas de hoje e 1.822 de texto novo), 181 citações de fora e 42 de
  dentro.
- **Com `--previa`,** numa pasta da área temporária desta sessão, fora do canal: sai 0, e cada linha não vazia está no arquivo do destino
  dela.

**O limite dele:** o script confere os NOMES citados entre aspas, e não o conteúdo que existe por trás de cada nome. As duas regras
que achei passaram por isso. "Peças da pré-v1 em uso" e "Caça nos bancos pagos" estão no núcleo como título, mas a regra que as roupas
procuravam ali não estava. A conferência do conteúdo foi feita à mão, roupa por roupa (§2).

## 2. A caça à regra que saiu

Li as 229 citações do `CLAUDE.md` em `marca/agentes/*.md`, as 8 do `conferente-de-midia.md` e as 18 do regimento. Para cada regra que
eles mandam seguir "pelo CLAUDE.md", conferi uma de duas coisas: que ela está no núcleo, ou que a regra mora no próprio arquivo de quem
cita (na roupa, no ofício, no regimento ou na marca) e que o índice aponta o arquivo certo.

### Achado 1 (consertado): o crédito do OSM

- **O que era:** a regra em negrito do item 6 diz que tudo que vem do OSM põe "© OpenStreetMap contributors" na tela da cena e a URL
  openstreetmap.org/copyright na descrição. Ela ia para `sala/mapas-e-maptiler.md` como "juneau", com o porquê "o crédito do OSM mora em
  `marca/identidade.md` §6".
- **Por que era erro:** o §6 só tem o OSM dentro da linha da MapTiler (e a linha 808 diz que ele "já está na linha da MapTiler"). O
  caso da geometria do OSM sem a base MapTiler não aparece lá.
- **Quem cita:** sete roupas mandam essa regra para "CLAUDE.md, pré-v1 item 6": o redator (l. 160), o regente (l. 173), o montador
  (l. 184), o designer (l. 39), o editor (l. 360), o mapista (l. 195) e a pesquisa-geo (§5).
- **O conserto:** as linhas 279–283 (a regra e o Taku refeito pelo `geo-osm-rota`) ficam no núcleo, dentro do item 6, onde o
  ponteiro das sete roupas cai.

### Achado 2 (consertado): a convivência e o Chrome

- **O que era:** "Nunca se mata navegador por nome" (`taskkill /IM chrome.exe` derruba o Chrome do Lucas e o render juntos) ia para
  `sala/caca.md`.
- **Por que era erro:** a regra vale para toda peça que abre o Chrome (o render, os portões, o `quadro.mjs`). Ela não está no regimento,
  que só fala do `python.exe` preso, nem em roupa nenhuma. Fora do `CLAUDE.md`, só aparece no `ferramentas/guia-mapas/GUIA.md`, que
  agente nenhum lê, e o `APRENDIZADOS.md` (item 89) a cita como "a regra do Chrome e do Brave".
- **O conserto:** a "Convivência" (linhas 1561–1567, com os três itens) fica inteira no núcleo, na parte dos agentes da caça. O
  índice diz que ela ficou aqui.
- **O que sobra:** em `sala/caca.md`, a linha 1366 ("Convivência", abaixo) continua palavra por palavra. A Sala acha a regra no núcleo,
  que ela sempre tem.

### Achado 3 (consertado): o ponteiro da geometria

- **O que era:** o item 6 do núcleo ficava só com "(o que se fez no Juneau: `sala/mapas-e-maptiler.md`)".
- **Por que era erro:** dois ponteiros apontavam para o item 6 do núcleo e não achavam nada lá:
  - a pesquisa-geo (§3) manda ler os tropeços do item 6, entre eles "rio que o NE 1:10M não tem" e "a rota costurada à mão";
  - os tropeços do próprio núcleo mandam o `geo-osm-rota` aos "itens 6 e 7".
- **O conserto:** o ponteiro do item 6 (texto novo) agora diz que esses dois tropeços estão em `sala/mapas-e-maptiler.md` e, em detalhe,
  no `APRENDIZADOS.md`, item 17, achados 22 e 23.

### Achado 4 (consertado): a Sala não tinha regra para abrir `sala/`

- **O que era:** a nota do topo dizia aos agentes o que não fazer com `sala/`, mas nada no núcleo mandava a Sala ler o arquivo do
  assunto antes do trabalho. A proposta dizia isso, e o núcleo não.
- **O risco:** depois de um `clear_session`, a Sala commita só com o núcleo. Esqueceria o `git push origin main` e o `git push pessoal
  main`, que ficam em `sala/motor-e-git.md` (a memória também os guarda).
- **O conserto:** uma frase nova na nota do topo: "A Sala lê o arquivo do assunto antes de fazer o trabalho dele: o commit e o push
  (`sala/motor-e-git.md`), a narração, a caça, a trilha, a linha do tempo, o despacho aos setores."

### Conferidos, e certos

Cada item abaixo diz onde a regra mora:
- **As regras dos setores** (as duas provas, a peça como subagente, o `run_in_background`, a máquina, o Lucas no setor, o Opus da
  animação, o `effort`, o `MapTiler liberado`): estão no regimento.
- **A exceção de portão do qc-visual e do editor:** está nas roupas (qc-visual l. 199–205; editor l. 183).
- **O M11:** está na roupa do qc-visual e no regimento.
- **O aceite do ilustrador, com a mão v003 experimental:** está na roupa do editor, §5.
- **Mais mapa, mais ilustração e o gancho:** estão no `marca/identidade.md` §5 e no `voz.md`.
- **O crédito a 56 px como não achado:** está no `ferramentas/espectador-pedido.md`, que também tem as 7 perguntas.
- **O conferente na caça:** o ofício dele cobre `mesmo_item`, a preferida e a reserva, e os três pontos da prévia.
- **O portão do `research`:** as roupas da pesquisa o repetem, e o índice aponta `sala/especialistas.md`.
- **O que fica de fora da pré-v1** (`gerar-imagem`, `marca gerar`, o `doctor` com as sugestões que não se seguem): nenhum agente cita.

### Observações, sem conserto (não são erro claro)

- **"A escrita também desacelera: frases mais curtas e mais espaço entre os fatos"** (linha 1046) vai para
  `sala/do-video-5-em-diante.md`.
  - Quem escreve o roteiro é um subagente da Sala, e a pauta da Drake já leva o ritmo calmo e as ~155 palavras/min.
  - O lugar certo dessa regra é o `marca/voz.md`. Até lá, o pedido de escrita da Sala tem de levá-la.
- **"Nada de `qc-cena out/juneau`"** (os 56 px do Juneau) vai para `sala/`. O Juneau está arquivado, e o núcleo manda rodar todo script
  com alvo.
- **O texto antigo que o núcleo carrega como está, e que já estava velho antes da divisão:** os marcadores dizem "(hoje, `juneau`)". Não
  é coisa desta proposta.

## 3. Nenhum texto reescrito

- **O `conferir-divisao.py`:** o núcleo é exatamente os blocos dele mais o texto novo declarado. Só o recuo muda, em 4 blocos.
- **A minha conferência,** à parte, com `cetico_citacoes.py`, na área temporária:
  - toda linha não vazia do núcleo é uma linha do `CLAUDE.md` (só o recuo muda) ou do texto novo: nenhuma sem origem;
  - os 405 trechos entre aspas dos 96 blocos estão, iguais, no arquivo do destino de cada bloco (na prévia gravada e relida);
  - as 19 falas do Lucas dos blocos do núcleo estão no núcleo;
  - nenhum bloco corta uma citação ao meio (as aspas fecham dentro de cada bloco; a única contagem ímpar é a do `grep -o '"model"…'`,
    dentro de um bloco só).
- **O texto novo** (a nota, os ponteiros, os títulos das partes dos agentes e o índice) não cita o Lucas nem reescreve regra. A minha
  frase da Sala e o ponteiro do item 6 seguem a mesma linha.

## 4. O tamanho: não cabe nos 15 mil

| | Caracteres | A 2,2 c/t | A 2,0 c/t |
|---|---:|---:|---:|
| `CLAUDE.md` de hoje | 158.589 | 72,1 mil | 79,3 mil |
| o núcleo, antes do cético | 48.603 | 22,1 mil | 24,3 mil |
| o núcleo, depois do cético | 49.938 | 22,7 mil | 25,0 mil |

- **O que os consertos acrescentam:** uns 600 tokens, que o núcleo tinha de ter pela própria régua da proposta ("toda regra que um
  agente usa").
- **A meta da página não se alcança com o texto palavra por palavra.** Só a opção B chega a ~15 mil: os tropeços, o conferente, a
  margem e a pré-carga dos portões, e a cópia arquivada do Alasca iriam para arquivos de consulta das peças. Isso quebra a defesa de
  que "o núcleo guarda toda regra", e a escolha é do Lucas.
- **A razão de 2,2 é otimista:** a página registra que o `razao-tokens.py` deu uns 2,0 nas leituras. Com 2,0, o núcleo tem uns 25 mil.
  A medida de verdade é a largada dos agentes no lote da Drake.

## O que mudou na proposta

- **`montar-rascunho.py`:**
  - a `PARTICAO` divide os blocos 268–293 (o crédito do OSM fica no núcleo) e 1425–1585 (a "Convivência" fica no núcleo);
  - o `NUCLEO` ganha os dois blocos;
  - o ponteiro do item 6, a nota do topo e duas linhas do índice mudaram. Os comentários `# cético` dizem o porquê.
- **Refeitos pelo script:** `mapa-de-linhas.json`, `CLAUDE-nucleo-rascunho.md` e as tabelas da `proposta.md`.
- **O texto da `proposta.md`:** os números (22,7 mil, 31 %, 13,2 mil da caça, as categorias), o que fica no núcleo e a linha do
  "pré-v1 item 6" na tabela das citações.
- **Não mexi:** o `conferir-divisao.py`, o `CLAUDE.md`, `.claude/`, `setores/` e `marca/`.
