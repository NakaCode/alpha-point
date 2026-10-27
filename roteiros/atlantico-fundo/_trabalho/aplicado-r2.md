# A lista da rodada 2, aplicada · atlantico-fundo

Revisão julgada: `04ae6bfbeb60` → revisão de agora: `432dcb4041d4`

> 26/10/2026, à noite. A lista fechada `_trabalho/lista-r2.json` (24 trocas, L43–L66, com 49 pares para o `roteiro-editor.md`;
> sha256 do arquivo `2bfcc2824ad5…`), aplicada por `node ferramentas/aplicar-lista.mjs atlantico-fundo
> --lista=roteiros/atlantico-fundo/_trabalho/lista-r2.json`, primeiro com `--seco` (exit 0) e depois sem (exit 0, **APLICADO**). Nada
> fora da lista entrou no texto falado: o portão passou na primeira rodada, e nenhuma correção mínima foi preciso. Não houve pedido ao
> escritor (`_trabalho/pedidos-r2.json`, `itens: []`). Sem commit, sem `regie`, sem Discord nem Telegram, sem rede, sem gasto.

## 1. O aplicador

- **`--seco`:** exit 0, `SECO_OK`. 24 itens, 20 diferenças, nenhuma frase sem item, 0 recusas, 0 avisos, 0 pendentes; as provas (a) a
  (d) passam, e os 49 pares do editor casam uma vez cada.
- **Sem `--seco`:** exit 0, `APLICADO`. Recusas 0, avisos 0, pendentes (PEDIR) 0. O diff é o mesmo do `--seco`, linha por linha (só a
  1ª linha do resumo muda; conferido com `diff`).
- **Itens por op** (como o aplicador os leu): DO-DOSSIE L43, L44, L47, L61, L62, L63, L66 (7); REDIZER L46, L48, L49, L50, L55, L56,
  L58, L60, L65 (9); REORDENAR L51, L54, L59 (3); CORTAR L45, L53 (2); ATRIBUIR L52, L57 (2); ESTREITAR L64 (1). O relato de quem fez a
  lista diz "DO-DOSSIE 8, REDIZER 8"; a `lista-r2.json` e o `lista-r2.md` dão a L64 como ESTREITAR e nove REDIZER, e a prova (d) contou 9.
  A diferença é só da contagem do relato.
- **Parágrafos falados:** 29 → 29. Mudaram 16 (os 2, 3, 4, 7, 8, 10, 11, 14, 19, 20, 21, 24, 25, 26, 27 e 28), cada um com dono.
- **As cópias de antes** (o aplicador as fez e conferiu pelo sha256): `_trabalho/roteiro-r2.antes.md` (`538018a94cda…`) e
  `_trabalho/roteiro-editor-r2.antes.md` (`c1dd10cf8f68…`), os dois iguais aos do commit `d0e0f82` (`git show HEAD:…`).
- **Gravados, relidos e conferidos pelo aplicador:** `roteiro-narrador.md` (arquivo `7059fa34e5a0…`, texto falado `432dcb4041d4`;
  byte a byte igual à cópia da lista, `_trabalho/_tmp-lista-r2.md`, conferido com `cmp`) e `roteiro-editor.md` (`661d993ae847…`;
  depois, as mudanças à mão do §6 o levaram a `b60d9d1abd50…`).
- **O `gate.mjs`, rodado pelo aplicador antes e depois,** leu o mesmo sha que ele: antes REPROVADO (2.038 palavras; 6 problemas, todos
  das três regras novas do portão: [gancho-1200] ×1, [porque-sem-dono] ×1 e [tripulacao-francesa] ×4); depois PASSA (2.026 palavras,
  0 problemas).

## 2. As provas

- **(a) aspas:** ok, 3 antes e 3 depois, na mesma ordem.
- **(b) numerais:** ok, 110 → 111; o saldo item a item bate com o declarado:
  - L43: sai 1,200; entra 1,000.
  - L54: entra two.
  - L55: saem 2019 e two.
  - L57: sai 2019.
  - L61, L63 e L66: entra 1964 em cada.
- **(c) parágrafos:** ok, 16 parágrafos mudados, todos com dono; 29 antes e 29 depois; nenhuma frase do diff sem item; as partes
  conferem.
- **(d) REDIZER:** ok, 9 itens, sem número, data, nome ou grupo novo. Uma observação, não falha: a L54 é REORDENAR (a prova (d) não a
  olha) e leva ao 19º parágrafo "In 2019, two scientists, Heather Stewart and Alan Jamieson", que a L55 tira do 20º, o parágrafo
  seguinte; os nomes e o ano só mudam de parágrafo, e a prova (b) fecha o saldo deles item a item.
- **(e) editor:** ok, 49 pares, cada um casando uma vez.

## 3. O sha

- **Antes:** `04ae6bfbeb6048c8993ece4150945de28cb81e5a6b9a2e906c4e803a16b0438c` (2.038 palavras, 29 parágrafos, 161 frases).
- **Depois:** `432dcb4041d4f0e31fab934bdd956370fca43cffcefe3d17e537b2af01f3dfb5` (2.026 palavras, 29 parágrafos, 160 frases). É o
  mesmo que o relato da lista previu, no `--seco` e na cópia (`_trabalho/_tmp-lista-r2.md`).

## 4. O diff, frase a frase (a saída do aplicador)

A diferença 15 e a 16 são a L59 (a mesma frase sobe duas posições no 25º parágrafo; nenhuma palavra muda). A 18 junta p7 e p8 porque
a L61 é a última frase de p7 e a L62 a primeira de p8.

```
aplicar-lista · atlantico-fundo · r2 · APLICADO
texto falado: 04ae6bfbeb60 → 432dcb4041d4

roteiro-narrador.md: 24 itens · 20 diferenças · frases sem item: 0
  Diferença 1 (gancho)
    SAI:   In 1964, a French crew dove into the Puerto Rico Trench and reported a crowd of fish. ← L44
    ENTRA: In 1964, a crew in a French deep-diving craft descended into the Puerto Rico Trench and reported a crowd of fish. ← L44
  Diferença 2 (gancho)
    SAI:   And a 2019 study found that the official list of undersea features still had the Atlantic about 1,200 feet too deep, even after sonar showed otherwise. ← L43
    ENTRA: And a 2019 study found that the official list of undersea features still had the Atlantic more than 1,000 feet too deep, even after sonar showed otherwise. ← L43
  Diferença 3 (p1)
    SAI:   Its commander was a Navy officer named Brownson, who had taken charge of the ship a few months earlier. ← L45
    ENTRA: Its commander was a Navy officer named Brownson. ← L45
  Diferença 4 (p1)
    SAI:   At the time, no sounding was known to have brought back a sample and a temperature from that deep. ← L46
    ENTRA: At the time, no one was known to have brought back a sample and a temperature from that deep. ← L46
  Diferença 5 (p2)
    SAI:   About 24,000 feet down, the French crew reported a crowd of fish. ← L47
    ENTRA: About 24,000 feet down, its crew reported a crowd of fish. ← L47
  Diferença 6 (p2)
    SAI:   ocean and weather agency, records that in 1970 a net brought back a small cusk-eel. ← L48
    ENTRA: ocean and weather agency, reports that in 1970 a net brought back a small cusk-eel. ← L48
  Diferença 7 (p3)
    SAI:   The agency says that points to an active force pulling down on the area. ← L49
    ENTRA: The agency says this points to an active force pulling down on the area. ← L49
  Diferença 8 (p3)
    SAI:   To the USGS, that tilt records big vertical shifts in this part of the trench and in Puerto Rico itself. ← L50
    SAI:   Rotated blocks of rock under the trench point to a sinking floor. ← L51
    SAI:   That is why the trench is so deep. ← L52
    ENTRA: To the USGS, that tilt reflects big vertical shifts in this part of the trench and in Puerto Rico itself. ← L50
    ENTRA: Under the trench, rotated blocks of rock point to a sinking floor. ← L51
    ENTRA: That, the agency suggests, is why the trench is so deep. ← L52
  Diferença 9 (p4)
    SAI:   To see the trench's walls, you need a camera down there. ← L53
  Diferença 10 (p6)
    SAI:   A 2019 study found that the official list of undersea features had the Milwaukee Deep at about 28,700 feet. ← L54
    ENTRA: In 2019, two scientists, Heather Stewart and Alan Jamieson, found that the official list of undersea features had the Milwaukee Deep at about 28,700 feet. ← L54
  Diferença 11 (p6)
    SAI:   In 2019, two scientists, Heather Stewart and Alan Jamieson, checked the published depths against sonar data that was already public. ← L55
    ENTRA: Stewart and Jamieson checked the published depths against sonar data that was already public. ← L55
  Diferença 12 (p6)
    SAI:   Working from public data from eight older surveys, it placed that point about 36 miles west of the sonar's spot, in waters claimed by the Dominican Republic. ← L56
    ENTRA: Using public data from eight older surveys, it placed that point about 36 miles west of the sonar's spot, in waters claimed by the Dominican Republic. ← L56
  Diferença 13 (p7)
    SAI:   The same 2019 study noted the depth most often published for its deepest point. ← L57
    ENTRA: Stewart and Jamieson's study noted the depth most often published for its deepest point. ← L57
  Diferença 14 (p7)
    SAI:   Since 2021, it has officially belonged to the spot the sonar found, about 30 miles from where older sources put it. ← L58
    ENTRA: Since 2021, that name has officially marked the spot the sonar found, about 30 miles from where older sources put it. ← L58
  Diferença 15 (p7)
    ENTRA: By that line, the Meteor Deep, well to the north, is in the Atlantic. ← L59
  Diferença 16 (p7)
    SAI:   By that line, the Meteor Deep, well to the north, is in the Atlantic. ← L59
  Diferença 17 (p7)
    SAI:   The Limiting Factor reached its bottom in 2019, and that's where the odd name comes from. ← L60
    ENTRA: The expedition's sub, the Limiting Factor, reached the bottom there in 2019, and that's where the odd name comes from. ← L60
  Diferença 18 (p7,p8)
    SAI:   Off Puerto Rico, the French crew's fish were waiting for a second look. ← L61
    SAI:   In 2019, the same sub went back to the spot where the French crew had reported their fish. ← L62
    ENTRA: Off Puerto Rico, the 1964 crew's fish were waiting for a second look. ← L61
    ENTRA: In 2019, the same sub went back to the spot where that crew had reported their fish. ← L62
  Diferença 19 (p8)
    SAI:   Where the French had counted about 200 fish, it saw no snailfish. ← L63
    SAI:   It found sea cucumbers instead, spread about as thickly as the fish the French had reported. ← L64
    SAI:   From the outside, the two look a lot alike: similar color, similar texture, similar shape. ← L65
    ENTRA: Where the 1964 crew had counted about 200 fish, it saw no snailfish. ← L63
    ENTRA: It found sea cucumbers instead, spread about as thickly as the fish the crew had reported. ← L64
    ENTRA: From the outside, the two look a lot alike in color, texture and shape. ← L65
  Diferença 20 (p8)
    SAI:   It's a conclusion drawn from the count and the look, and the animals the French saw that day can't be checked again. ← L66
    ENTRA: It's a conclusion drawn from the count and the look, and the animals the 1964 crew saw that day can't be checked again. ← L66
```

## 5. O portão

`node roteiros/atlantico-fundo/_ferramentas/gate.mjs`: exit 0, **PASSA**, sha `432dcb4041d4`. 2.026 palavras (≈ 11,01 min a 184
palavras/min), 29 parágrafos, 160 frases, média 12,7 palavras por frase, maior frase 28; gancho com 166 palavras até a assinatura
(≈ 54,1 s; teto 170), "But" na palavra 49. Problemas: nenhum. Nenhuma correção mínima foi preciso. Taxas todas abaixo do teto
(abre_and 2, abre_so 1, perguntas 2, frases_curtas 2; abre_but, travessões, imperativo_mapa, heres e antítese 0); autoplágio vazio
contra Juneau, Los Angeles, Zona do Canal e Peru; nenhum alerta de fecho.

Os 8 alertas, os mesmos de antes, todos já decididos (`_trabalho/lista-r2.md`, "Os alertas do portão"): "never" ×2 e "first" ×2 (os da
1ª versão, `escrita-notas.md` §5); "Milwaukee Deep" ×3 (o nome de 1939; a entrada da lista, agora atribuída aos dois autores pela L54;
a ausência de outubro de 2026, volátil, que a Sala relê na véspera da gravação); e o "still" do gancho (o passado da R03, dentro do
estudo de 2019, agora com "more than 1,000 feet", L43). Nenhum alerta novo.

`gate.mjs --derivados`, depois de refazer os carimbos: exit 1. O `roteiro-editor.md` e a `pronuncia.md` citam `432dcb4041d4` (ok). Os
cinco laudos da bancada final (`qc-roteiro/roteiro-r2`, `clareza-r2`, `locucao-r2`, `fatos-r2` e `escuta-fria-r2`) citam
`04ae6bfbeb60`, que é a revisão que eles julgaram, e por isso ficam como estão: trocar o carimbo diria que julgaram um texto que não
leram. O portão só deixa fora os que terminam em `-r1.laudo.md` ou `-antigo.laudo.md` (`FORA`, l. 575), e esta tarefa não edita o
portão nem os laudos. Fica para a Sala ("O que fica para a Sala", abaixo). Sem `--derivados`, o portão passa. A cópia para a voz
(`voz/texto-para-voz.md`) ainda não existe.

## 6. O editor (`roteiro-editor.md`)

- **Os 49 pares da lista**, aplicados pelo aplicador (prova (e)).
- **A cobertura, conferida por script** (`pautas/atlantico-fundo/_trabalho/scripts/editor-cobertura-r1.py`, o da r1, genérico, com os
  caminhos como argumentos; rodado depois das mudanças à mão também):
  - os 29 parágrafos falados se cobrem, do começo ao fim e na ordem, pelas frases de topo da seção "De onde vem cada frase" (144
    linhas, 145 frases: a linha da L36 junta duas); nenhuma linha de frase do editor ficou sem uso;
  - as 23 frases que entraram no texto falado estão todas, literais, no editor;
  - das 24 que saíram, a L53 ("To see the trench's walls, you need a camera down there.") ficou riscada, com a nota "saiu da voz na r2,
    lista-r2 L53"; a única que o script dá como "viva" é a da L59 ("By that line, the Meteor Deep, well to the north, is in the
    Atlantic."), que sai e entra de novo (REORDENAR, as mesmas palavras): no editor ela subiu para logo depois de "It begins at 60
    degrees south.", como na voz. As outras 22 foram trocadas pela forma nova. O script sai 1 só por esse falso positivo.
- **Os trechos velhos entre aspas** (`pautas/atlantico-fundo/_trabalho/scripts/editor-citacoes-velhas-r2.py`, novo: o da r1 com a
  rodada como argumento): 7 trechos que estavam no texto de antes e não estão no de agora, todos em nota da r2 ("who had taken charge of
  the ship a few months earlier", "agency, records", "says that", "that tilt records", "under the trench point", "its bottom") ou na
  linha riscada da L53. Nenhum fora de nota.
- **Busca das formas velhas fora de aspas** ("French crew", "the French had", "French saw", "no sounding", "same 2019 study", "Working
  from", "similar color", "officially belonged", "That is why the trench", "records that", "says that points", "dove"): só sobram em
  nota da r2 ou em proibição ("nunca 'the French saw sea cucumbers'", "nunca 'Vescovo dove the Meteor Deep'").
- **À mão, só a medida e o que ficou velho por causa da lista:**
  - a linha "Revisão do roteiro" para `432dcb4041d4`;
  - o bloco "A medida do portão" refeito com a medida de agora (2.026 palavras, ≈ 11:01, 29 parágrafos, 160 frases, média 12,7, maior
    28, gancho 166 com o teto de 170, os 8 alertas decididos, as três regras novas do portão passando), com as medidas de antes
    (r1 e P01) entre parênteses; e um bloco "A rodada 2" (as cinco lentes julgaram `04ae6bfbeb60`; a lista; nenhum pedido; a última
    lista; o Lucas ainda não leu). A frase "O Lucas ainda não leu esta revisão." passou do bloco da rodada 1 para o da rodada 2;
  - "As partes": as colunas "Palavras" e "Tempo" com a medida de agora (gancho 165, 166 pelo portão, 0:00–0:54; p1 229, 0:54–2:08;
    p2 189, 2:08–3:10; p3 237, 3:10–4:27; p4 215, 4:27–5:38; p5 261, 5:38–7:03; p6 252, 7:03–8:25; p7 311, 8:25–10:06; p8 167,
    10:06–11:01), por `medida-partes-r1.py`, que repete a contagem do portão (2.038 e 2.026, as mesmas dele) e, sobre
    `_trabalho/roteiro-r2.antes.md`, reproduz a tabela de antes. A troca das duas colunas, sem tocar o resto das linhas (que os pares
    da lista já tinham posto em dia), foi feita por `pautas/atlantico-fundo/_trabalho/scripts/editor-partes-r2.py`. Um parágrafo novo,
    "Depois da rodada 2", dá o total (2.026, −12; 76 acima do piso e 124 abaixo do teto), os pedidos à voz (29, de 44 a 109; o maior
    passa a ser o 2º do gancho, 109) e os onze que mudaram de tamanho; o do P01 perdeu o "as colunas acima são desta revisão";
  - "As chamadas": a inscrição na palavra ≈ 1.080 de 2.026, ≈ 5:52 de fala, ≈ 52 % de ≈ 11:21 (era ≈ 1.095, 5:57); a reserva,
    agora a última frase de p4 (L53), na ≈ 1.026, ≈ 5:34, ≈ 49 %; o comentário de ≈ 10:46 a ≈ 10:55, e a última frase de ≈ 10:55 a
    11:01 (a peça continua terminando ≈ 6 s antes da cauda). Nenhuma chamada muda de frase, e a inscrição continua dentro de 35–60 %.
- Ficou como estava, por ser histórico da escrita (como na r1): o parágrafo do plano sob "As partes" ("o texto fechou em **2.089**",
  os 30 pedidos de 44 a 105) e o título da decisão de escrita n.º 4 ("de 44 a 105 palavras"), que a lista só tocou na ponte de p4. A
  medida de hoje está no parágrafo "Depois da rodada 2".

## 7. A pronúncia (`pronuncia.md`)

- **Nenhum nome novo entrou na voz.** Os das frases trocadas já estavam na folha ou nos "Lidos sem folha": French, Heather Stewart,
  Jamieson, Limiting Factor, NOAA, USGS, Puerto Rico, Brownson, Meteor Deep, Factorian Deep, snailfish, sea cucumbers, Milwaukee Deep.
  As palavras novas (descended, deep-diving craft, reports, reflects, this, that name, marked, Using, crew) são comuns.
- **Saíram da voz** três homógrafos que a escuta automática do motor não pega: "dove" (L44), e os dois "records" (L48 e L50).
- **Contagens refeitas** pelo mesmo `pronuncia-contar.py`, gravadas em `pautas/atlantico-fundo/_trabalho/pronuncia-contagem-r2.json`
  (sha256 `3dbfb77795b2…`; a de antes, `pronuncia-contagem-r1-p01.json`, é idêntica à que o script dá sobre
  `_trabalho/roteiro-r2.antes.md`). Mudaram só três termos: French 8 → 2 (só o batiscafo, 2º e 7º); "Alan Jamieson" (o padrão é o
  sobrenome) 1 → 3 (19º, 20º e 24º); Heather Stewart do 20º ao 19º. Puerto Rico 18, NOAA 5, USGS 4, Limiting Factor 2 e o resto não
  mudam; os números de parágrafo também não (29 antes e depois).
- **Na folha, à mão:**
  - a linha "Revisão do roteiro" para `432dcb4041d4`; o cabeçalho com a revisão de agora (29 parágrafos, 2.026 palavras, PASSA) e a
    contagem nova; uma nota "O que a rodada 2 mudou nesta folha";
  - a linha de Jamieson: 3 vezes (19º, 20º e 24º, este com o possessivo "Stewart and Jamieson's study"), e o que conferir na escuta
    (o mesmo nos três pedidos; o possessivo não virar "Jamiesons");
  - "Lidos sem folha": French com as 2 vezes de agora, Limiting Factor (18º e 26º), Heather Stewart no 19º e "Stewart" no 20º e no
    24º; os homógrafos que saíram na r2;
  - a reserva diz que nem a narração de `432dcb4041d4` tem Hispaniola, Peniagone, GEBCO, IHO, San Juan, Zavodovski, Caladan nem Banks
    (conferido: 0 cada);
  - a amostra proposta, nas frases de agora: o pedido 2 sem a oração do mês (L45), o 5 com "reports" (L48) e o 12 trocado pela ponte
    de entrada de p6, onde Heather Stewart e Alan Jamieson entram desde a L54 ("In twenty nineteen, two scientists, Heather Stewart and
    Alan Jamieson, found that the official list of undersea features had the Milwaukee Deep at about twenty-eight thousand seven
    hundred feet."). Que as 14 linhas estão, literais, no roteiro de agora (com os números na forma da cópia) confere
    `pautas/atlantico-fundo/_trabalho/scripts/pronuncia-amostra-conferir-r2.py` (novo; 14 de 14; a folha de antes contra o texto de
    antes também dá 14 de 14, e contra o de agora, 3 linhas sem casar: as do 2, 5 e 12). A amostra foi recontada por
    `pronuncia-amostra-contar.py`: 2.566 caracteres (eram 2.570), os mesmos uns 920 a 1.240 créditos. Nada foi gerado;
  - "O que a cópia para a voz vai trocar": 1964 também no 26º, no 27º e no 28º ("the 1964 crew", L61, L63 e L66), entre os anos que
    podem soar como quantidade ("the nineteen sixty-four crew", nunca uma contagem de gente); o "a 2019 study" só no 2º (o do 19º virou
    "In 2019, two scientists"); o "The same 2019 study" do 24º saiu (L57); "more than 1,000 feet" no 2º (L43), com o 1,200 só no 19º,
    e a forma corrente "a thousand" ao lado de "fifteen hundred" e "twelve hundred", a decidir na cópia.
- A folha de antes ficou em `_trabalho/pronuncia-r2.antes.md` (sha256 `280c72fe1cb6…`, igual à do commit `d0e0f82`). O aplicador não
  copia a folha de pronúncia; a cópia saiu de `git show HEAD:roteiros/atlantico-fundo/pronuncia.md`, que é o arquivo de antes desta
  tarefa (o `git status` do começo a dava sem mudança, e o sha256 bate com o medido antes da primeira edição).

## 8. Os arquivos, depois

- `roteiros/atlantico-fundo/roteiro-narrador.md`: `7059fa34e5a0…` (texto falado `432dcb4041d4`).
- `roteiros/atlantico-fundo/roteiro-editor.md`: `b60d9d1abd50…`.
- `roteiros/atlantico-fundo/pronuncia.md`: `705048d46c10…`.
- As cópias de antes: `_trabalho/roteiro-r2.antes.md` (`538018a94cda…`), `_trabalho/roteiro-editor-r2.antes.md` (`c1dd10cf8f68…`) e
  `_trabalho/pronuncia-r2.antes.md` (`280c72fe1cb6…`).
- `pautas/atlantico-fundo/_trabalho/pronuncia-contagem-r2.json` (`3dbfb77795b2…`).
- Os scripts novos, em `pautas/atlantico-fundo/_trabalho/scripts/`: `editor-citacoes-velhas-r2.py`, `editor-partes-r2.py` e
  `pronuncia-amostra-conferir-r2.py` (rodados com `python -X utf8 -B`, os caminhos como argumentos, sem rede). Reusados sem mudança:
  `editor-cobertura-r1.py`, `medida-partes-r1.py`, `pronuncia-contar.py` e `pronuncia-amostra-contar.py`.
- Todos com fim de linha LF.

## 9. O que fica para a Sala

- **Os laudos da bancada final e o `--derivados`:** os cinco `*-r2.laudo.md` julgaram `04ae6bfbeb60` e continuam a citá-lo; o
  `gate.mjs --derivados` sai 1 por eles. É a Sala quem decide se o texto aplicado passa por uma conferência (nem que só de fatos, sobre
  as 20 diferenças) ou se os laudos da r2 entram no `FORA` do portão, como os da r1.
- **O que a lista mandou à Sala** e esta tarefa não toca (`_trabalho/lista-r2.md`, "À Sala"): a `como_dizer` do F38 no dossiê ("the fish
  reported in 1964", quando o resumo de 2020 diz "was reported in 1965"; a L64 diz "the fish the crew had reported"); a legenda do USGS
  para a ponta alta da laje (F44), que entrou só no editor; a voz de Brownson antes da metade (clareza A1).
- O Lucas ainda não leu o roteiro. A conversão para o motor (`ferramentas/roteiro-motor.mjs converter atlantico-fundo`) vem depois do
  "sim" dele.
