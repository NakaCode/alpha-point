# A lista r3, aplicada (vídeo 5, `atlantico-fundo`)

Revisão julgada: `b064eb75cb8c` → revisão de agora: `286ff3abf7c7`

> 26/10/2026, ~23:3x. A lista fechada `_trabalho/lista-r3.json` (sha256 `fceeef445852…`) é só a decisão do Lucas, no chat da Sala,
> depois de ler `b064eb75cb8c`: "Enxugar o Atlântico Sul (Recomendado)". São 6 trocas, L75–L80, todas em p7, com 37 pares para o
> `roteiro-editor.md` e 29 `pronuncia_pares` para a folha. Não houve pedido ao escritor (`pedidos-r3.json`, `itens: []`). Nada fora
> da lista entrou no texto falado, e o portão passou na primeira rodada, sem correção. Sem commit, `regie`, Discord, Telegram, rede
> ou gasto.

## 1. O aplicador

`node ferramentas/aplicar-lista.mjs atlantico-fundo --lista=roteiros/atlantico-fundo/_trabalho/lista-r3.json`:

- **`--seco`:** exit 0, `SECO_OK`. 6 itens e 4 diferenças. Nenhuma frase sem item; 0 recusas, 0 avisos, 0 pendentes.
- **Sem `--seco`:** exit 0, `APLICADO`. 0 recusas, 0 avisos, 0 pendentes. O resumo é o mesmo do `--seco`, linha por linha (só a 1ª
  muda; conferido com `diff`).
- **Itens por op:** CORTAR L75, L76, L77, L78 (4); REORDENAR L79 (1); DO-DOSSIE L80 (1).
- **Parágrafos falados:** 29 → 28. Mudaram 3 (os 23º, 24º e 25º/26º de antes), cada um com dono. O 25º e o 26º de antes viraram
  um (L79 e L80).
- **As cópias de antes,** feitas pelo aplicador e conferidas pelo sha256 (`confere: true`):
  - `_trabalho/roteiro-r3.antes.md` (`ad9a6adff88a…`);
  - `_trabalho/roteiro-editor-r3.antes.md` (`7d9c6bd53a11…`).
  - As duas são iguais aos arquivos do commit `aa966ec`: o `git status` do começo não dava mudança neles.
- **Gravados, relidos e conferidos:**
  - `roteiro-narrador.md`: arquivo `42b914c663ae…`, texto falado `286ff3abf7c7`. É byte a byte igual à cópia de prova da lista
    (`_trabalho/_tmp-lista-r3.md`), conferido com `cmp`.
  - `roteiro-editor.md`: `69acaedcc29a…`.
- **O `gate.mjs`, rodado pelo aplicador antes e depois,** leu o mesmo sha que ele:
  - antes: PASSA, 2.030 palavras, 0 problemas;
  - depois de gravar: PASSA, 1.956 palavras, 0 problemas.

## 2. As provas

- **(a) aspas:** ok, 3 antes e 3 depois.
- **(b) numerais:** ok, 110 → 104. O saldo de cada item bate com o declarado:
  - L76: saem 2021 e 30;
  - L77: sai "one" (de "for one");
  - L78: saem 2019, 20 e "half" (de "the other half").
  - O "one" e o "half" são palavras que o contador lê como numeral, não números do texto.
- **(c) parágrafos:** ok, 3 parágrafos mudados, todos com dono.
- **(d) REDIZER:** ok, nenhum item.
- **(e) editor:** ok, os 37 pares casaram uma vez cada.
- **A prova independente da lista:** o `pautas/atlantico-fundo/_trabalho/scripts/lista-r3-copia.py`, rodado de novo sobre as cópias
  de antes, deu exit 0 (6 itens, 37 pares do editor, 29 da folha). A cópia do roteiro é igual ao roteiro aplicado. O editor em memória
  é igual ao `roteiro-editor.md` gravado pelo aplicador, conferido com `cmp`.

## 3. O sha

- **Antes:** `b064eb75cb8ccfd1f4373650be4f9a67cc1bd4588ad5775b77eb948ba7497345` (2.030 palavras, 29 parágrafos, 160 frases).
- **Depois:** `286ff3abf7c7b32cbd05c747be80c575ff971da60e6515c3390cd67f68a00ad9` (1.956 palavras, 28 parágrafos, 154 frases). É o
  mesmo que a lista previu, no `--seco` e na cópia.

## 4. O diff

O diff frase a frase, como o aplicador o imprimiu:

```
aplicar-lista · atlantico-fundo · r3 · APLICADO
texto falado: b064eb75cb8c → 286ff3abf7c7

roteiro-narrador.md: 6 itens · 4 diferenças · frases sem item: 0
  Diferença 1 (p7)
    SAI:   Both Britain and Argentina claim them. ← L75
  Diferença 2 (p7)
    SAI:   The name Meteor Deep is old, taken from a German research ship. ← L76
    SAI:   Since 2021, that name has officially marked the spot the sonar found, about 30 miles from where older sources put it. ← L76
  Diferença 3 (p7)
    ENTRA: The trench's southern tip crosses the line. ← L79
  Diferença 4 (p7)
    SAI:   Argentina, for one, disagrees. ← L77
    SAI:   The trench's southern tip crosses the line. ← L78, L79
    SAI:   Just south of the line lies the deepest point of the Southern Ocean, the Factorian Deep. ← L78
    SAI:   The expedition's sub, the Limiting Factor, reached the bottom there in 2019, and that's where the odd name comes from. ← L78
    SAI:   Its neighbor, about 20 miles away, got the other half of the name: Limiting Deep. ← L78
    ENTRA: With the line or without it, the deepest point in the Atlantic lies at the other end of the ocean. ← L80
```

A diferença 3 e a 4 juntas são a L79. A frase da ponta sul da fossa sobe para logo depois de "It begins at 60 degrees south.", sem
mudar uma palavra.

p7 depois da lista (o 3º parágrafo junta o 3º e o 4º de antes):

> The Atlantic has another contender for its deepest point: the South Sandwich Trench, far to the south, where one plate dives under
> another about three inches a year. That is three to four times the pace of the plates off Puerto Rico. The islands there are a chain
> of small volcanoes, with no permanent residents. In August 2026, a Landsat satellite caught the heat of a lava lake in the crater of
> Mount Michael, one of those volcanoes.
>
> The expedition mapped this trench with its sonar in 2019. Before that, about nine-tenths of it had never been mapped. Stewart and
> Jamieson's study noted the depth most often published for its deepest point. It was deeper than the sonar's number for Puerto Rico.
> The sonar settled that. The trench's deepest point, the Meteor Deep, is about 370 feet shallower than the one off Puerto Rico. The
> expedition mapped it but didn't dive there.
>
> In 2023, the International Hydrographic Organization recognized the Southern Ocean. It begins at 60 degrees south. The trench's
> southern tip crosses the line. By that line, the Meteor Deep, well to the north, is in the Atlantic. The organization says the line
> carries no political meaning, and not every country uses it. With the line or without it, the deepest point in the Atlantic lies at
> the other end of the ocean. Off Puerto Rico, the 1964 crew's fish were waiting for a second look.

## 5. O portão

`node roteiros/atlantico-fundo/_ferramentas/gate.mjs`: exit 0, **PASSA**, sha `286ff3abf7c7`.

- **A medida:**
  - 1.956 palavras, ≈ 10,63 min a 184 palavras/min: 6 acima do piso e 194 abaixo do teto;
  - 28 parágrafos e 154 frases, com média de 12,8 palavras por frase e a maior com 28;
  - o gancho, 166 palavras até a assinatura (≈ 54,1 s; teto 170), com o "But" na palavra 49.
- **Problemas:** nenhum. Nenhuma correção mínima foi precisa.
- **Taxas:** todas abaixo do teto:
  - abre_and 2 (1,03 por mil), abre_so 1, perguntas 2, frases_curtas 1;
  - abre_but, travessões, imperativo_mapa, heres e antítese, 0.
- **Autoplágio:** vazio. Nenhum alerta de fecho.
- **Os 8 alertas** são os mesmos de antes, todos já decididos (`_trabalho/lista-r2.md` e `lista-r3.md`): "never" ×2, "first" ×2,
  "Milwaukee Deep" ×3 e o "still" do gancho. Nenhum alerta novo: a L80 não tem "still", "here", "this line" nem número.

`gate.mjs --derivados`: exit 0, PASSA. O `roteiro-editor.md` e a `pronuncia.md` citam `286ff3abf7c7` (ok).

## 6. O editor (`roteiro-editor.md`)

- **Os 37 pares da lista** foram aplicados pelo aplicador (prova (e)). Entre eles estão o carimbo "Revisão do roteiro:
  `286ff3abf7c7`", "A medida do portão", "As partes", as chamadas e o cabeçalho da lista r3. Nenhuma mudança à mão foi precisa.
- **A cobertura,** conferida por `pautas/atlantico-fundo/_trabalho/scripts/editor-cobertura-r1.py`, com a saída do aplicador:
  - os 28 parágrafos falados se cobrem do começo ao fim, na ordem, pelas 138 frases de topo do editor (139 frases cobertas: uma
    linha junta duas);
  - 0 falhas de cobertura e 0 frases do editor sem uso;
  - as 2 frases que entraram estão no editor: a L80, com as fontes DO-DOSSIE (F02, F74, F83 e F79) e o mapa, e a L79, na posição nova,
    logo depois de "It begins at 60 degrees south.", com a nota de mapa;
  - das 8 que saíram, 7 estão riscadas, com a nota "saiu da voz na r3, lista-r3 L..".
  - O script sai 1 só pela frase da L79, que ele dá como "viva". É um falso positivo: ela sai e entra de novo, com as mesmas
    palavras, e no editor subiu como na voz (o mesmo caso da L59 na r2).
- **Os trechos velhos entre aspas,** por `editor-citacoes-velhas-r2.py` com a rodada `r3`: 9 trechos que estavam no texto de antes e
  não estão no de agora.
  - 7 são as frases riscadas.
  - Os outros 2 ("about 30 miles" e "about 20 miles", l. 219) estão na nota "Saíram da voz na r3" da lista "Narradas uma vez".
  - Nenhum trecho velho fora de nota.
- **Os tempos e as chamadas,** remedidos sobre o roteiro aplicado, batem com o editor:
  - **as partes:** `medida-partes-r1.py` dá 1.956 palavras, ≈ 10:38 de fala e ≈ 10:58 com a cauda. p7 tem 237 palavras
    (8:26–9:43), e p8, 167 (9:43–10:38). Os 28 pedidos à voz ficam entre 44 e 109 (p7: 78, 74 e 85);
  - **as chamadas:** `lista-r2-chamadas.py` põe a inscrição nas palavras 1.085–1.095 (≈ 5:53, 53,7 %) e a reserva nas 1.031–1.040
    (≈ 5:35, 51,1 %). O comentário fica em ≈ 10:23, a última frase em ≈ 10:32, e a ponte dos peixes em ≈ 9:39.
- **Nomes que saíram da voz,** fora das riscadas: o Factorian e o Limiting Deep ficam só em notas da r3, no livro-razão (a ponte de p6)
  e na fonte da L80. A Argentina fica só em notas.

## 7. A pronúncia (`pronuncia.md`)

- **Nenhum nome novo entrou na voz.**
  - A L80 não tem nome próprio além de "Atlantic", que já está na folha.
  - A L79 só muda de lugar.
- **A cópia de antes:** `_trabalho/pronuncia-r3.antes.md` (`fa7f5bed0498…`). Ela saiu de
  `git show HEAD:roteiros/atlantico-fundo/pronuncia.md`, e o sha256 é igual ao do arquivo de antes desta tarefa.
- **Os 29 `pronuncia_pares` da lista** foram aplicados na ordem, cada "de" casando uma vez, por
  `pautas/atlantico-fundo/_trabalho/scripts/pronuncia-pares-aplicar.py`. O script é novo e genérico; ele confere a cópia de antes,
  aplica tudo ou nada e relê.
  - Resultado: `fa7f5bed0498…` → `e2856f74c12a…`.
  - A folha gravada é byte a byte igual à que o `lista-r3-copia.py` monta em memória (`cmp`).
  - O carimbo "Revisão do roteiro: `286ff3abf7c7`" veio com os pares. Nenhuma mudança à mão foi precisa.
- **A contagem nova,** por `pronuncia-contar.py`, está em `pautas/atlantico-fundo/_trabalho/pronuncia-contagem-r3.json`
  (`e263021c1dad…`; 28 parágrafos). Comparada com a mesma contagem sobre `_trabalho/roteiro-r3.antes.md`:
  - **Saíram:** Argentina (2 → 0), Britain (1 → 0), German (1 → 0), Factorian Deep (1 → 0) e Limiting Deep (1 → 0).
  - **Diminuíram:** Limiting Factor (2 → 1, só o 18º), Meteor Deep (3 → 2, no 24º e no 25º) e Southern Ocean (2 → 1).
  - **Aumentou:** Atlantic (11 → 12; duas vezes no 25º).
  - **Mudaram de número** os parágrafos de p8, que descem um:
    - Vescovo: 26º e 27º;
    - NOAA e NOAA's: 28º;
    - snailfish e sea cucumbers: 26º e 27º;
    - cusk-eel: 28º;
    - Puerto Rico: ainda 18 vezes, agora no 25º e no 28º.
  - **Números:** saem 2021, 30, 20 e o 2019 do Factorian. O 1964 da ponte passa ao 25º, e o 1964, o 200, o 2020, o 27,500, o 1970 e o
    83 de p8 descem um número.
  - Cada número de parágrafo que a folha cita confere com esta contagem: as tabelas, os "Lidos sem folha", os anos e as medidas da
    cópia para a voz.
- **A amostra:**
  - `pronuncia-amostra-conferir-r2.py`: 14 de 14 linhas casam com o roteiro de agora;
  - `pronuncia-amostra-contar.py`: 2.481 caracteres (eram 2.570). O pedido 13 perdeu a frase do Factorian; a folha dá de 890 a 1.190
    créditos. Nada foi gerado.

## 8. Os arquivos, depois

- `roteiros/atlantico-fundo/roteiro-narrador.md`: `42b914c663ae…` (texto falado `286ff3abf7c7`).
- `roteiros/atlantico-fundo/roteiro-editor.md`: `69acaedcc29a…`.
- `roteiros/atlantico-fundo/pronuncia.md`: `e2856f74c12a…`.
- As cópias de antes:
  - `_trabalho/roteiro-r3.antes.md` (`ad9a6adff88a…`);
  - `_trabalho/roteiro-editor-r3.antes.md` (`7d9c6bd53a11…`);
  - `_trabalho/pronuncia-r3.antes.md` (`fa7f5bed0498…`).
- `pautas/atlantico-fundo/_trabalho/pronuncia-contagem-r3.json` (`e263021c1dad…`).
- O script novo é `pautas/atlantico-fundo/_trabalho/scripts/pronuncia-pares-aplicar.py`. Foram reusados sem mudança:
  `lista-r3-copia.py`, `editor-cobertura-r1.py`, `editor-citacoes-velhas-r2.py`, `medida-partes-r1.py`, `lista-r2-chamadas.py`,
  `pronuncia-contar.py`, `pronuncia-amostra-conferir-r2.py` e `pronuncia-amostra-contar.py`. Todos rodaram com
  `python -X utf8 -B`, com os caminhos como argumentos e sem rede.
- Todos os arquivos estão com fim de linha LF, sem CR (conferido byte a byte).

## 9. O que fica para a Sala

- **A revisão curta que a opção do Lucas previa.** A única frase que o verificador de fatos ainda não viu é a da L80, "With the line
  or without it, the deepest point in the Atlantic lies at the other end of the ocean.", que se apoia em F02, F74, F79, F82 e F83.
  - O resto do diff é corte e mudança de lugar de frases já conferidas.
  - Na `qc-roteiro/fatos-tabela.json`, a F248 (a ponta) e a F255–F256 (a ponte) passam ao 25º parágrafo.
  - As linhas das frases que saíram ficam sem frase: F219, F234–F239, F247 e F249–F254.
  - A nota da F211 deixa de valer para p7 (`lista-r3.md`, "À Sala").
- **O antecedente do submersível.** Sem o Factorian, a ponte de p6 ("…and its sub, to the other end of the Atlantic.") e o "the same
  sub" do 1º parágrafo de p8 se apoiam só no "didn't dive there" de p7. A frase que nomeava o submersível logo antes ("The
  expedition's sub, the Limiting Factor…") saiu. A lista deu a dívida como leve; se a revisão curta achar que pesa, o conserto é em p6
  ou em p8, fora desta lista.
- **A O10 do `fatos-r3`:** a nota de "HMS Challenger" no dossiê.
- **As telas do Factorian e do Limiting Deep** saíram do editor. Se o Lucas quiser o anel do Factorian só no mapa, é decisão de tela.
- **Arquivos fora desta tarefa, sem toque:**
  - `qc-roteiro/fatos.laudo.md` já estava apagado no `git status` do começo. Como na r2c, o laudo da entrada desta lista é
    `qc-roteiro/fatos-r3.laudo.md`.
  - `_trabalho/_tmp-lista-r3.md` é a cópia de prova e pode sair.
- O commit, a leitura do Lucas e a conversão para o motor (`node ferramentas/roteiro-motor.mjs converter atlantico-fundo`, depois do
  "sim" dele) são da Sala.
