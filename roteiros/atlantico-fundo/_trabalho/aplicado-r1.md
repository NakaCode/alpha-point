# A lista da rodada 1, aplicada · atlantico-fundo

Revisão julgada: `4694e58092c2` → revisão de agora: `0081efb271f0`

> 26/10/2026. A lista fechada `_trabalho/lista-r1.json` (42 trocas, L01–L42, com 89 pares para o `roteiro-editor.md`; sha256 do
> arquivo `e87d4902436a…`), aplicada por `node ferramentas/aplicar-lista.mjs atlantico-fundo
> --lista=roteiros/atlantico-fundo/_trabalho/lista-r1.json`, primeiro com `--seco` (exit 0) e depois sem (exit 0, **APLICADO**). Nada
> fora da lista entrou no texto falado: o portão passou na primeira rodada, e nenhuma correção mínima foi preciso. O pedido ao
> escritor P01 (`_trabalho/pedidos-r1.json`, p3, 3º parágrafo) não foi aplicado: é do escritor. Sem commit, sem `regie`, sem
> Discord nem Telegram, sem rede.

## 1. O aplicador

- **`--seco`:** exit 0, `SECO_OK`. 42 itens, 35 diferenças, nenhuma frase sem item, 0 recusas, 0 avisos, 0 pendentes; as provas (a) a
  (d) passam, e os 89 pares do editor casam uma vez cada.
- **Sem `--seco`:** exit 0, `APLICADO`. Recusas 0, avisos 0, pendentes (PEDIR) 0. O diff é o mesmo do `--seco`, linha por linha (só a
  1ª linha do resumo muda).
- **Itens por op:** DO-DOSSIE L01, L02, L11, L42; DA-FONTE L04, L09, L10, L17, L21, L25, L26, L41; ESTREITAR L13, L19, L22, L29, L31,
  L32, L34, L35, L36, L40; REDIZER L03, L06, L12, L14, L16, L20, L37, L38; REORDENAR L05, L07, L08, L30; CORTAR L15, L18, L23, L24,
  L28, L33, L39; ATRIBUIR L27.
- **Parágrafos falados:** 30 → 29. A L39 corta "The expedition had wanted to call it Pressure Deep…" e junta o 3º parágrafo de p7 ao
  2º; os parágrafos de depois (o resto de p7 e p8) descem um número.
- **As cópias de antes** (o aplicador as fez e conferiu pelo sha256): `_trabalho/roteiro-r1.antes.md` (`fe0765afba27…`) e
  `_trabalho/roteiro-editor-r1.antes.md` (`9c876a5cbebf…`), os dois iguais ao do commit `e6801f5`.
- **Gravados, relidos e conferidos pelo aplicador:** `roteiro-narrador.md` (arquivo `021317f44786…`, texto falado `0081efb271f0`) e
  `roteiro-editor.md` (`d33a425c6e06…`; depois, as mudanças à mão do §6 o levaram a `855314ea9b2b…`).
- **O `gate.mjs`, rodado pelo aplicador antes e depois,** leu o mesmo sha que ele: antes REPROVADO (2.089 palavras; 3 problemas, as
  três reprovações novas do portão que a lista veio consertar: [nenhum-peixe], [lista-decadas] e [vescovo-voltou]); depois PASSA
  (2.018 palavras, 0 problemas).

## 2. As provas

- **(a) aspas:** ok, 2 antes e 3 depois, na mesma ordem; a nova é o "One down!" (L26, declarada em `aspas_novas`).
- **(b) numerais:** ok, 114 → 110; o saldo item a item bate com o declarado:
  - L02: entra 2019.
  - L09: entra one.
  - L18: sai 1918.
  - L21: entra five.
  - L24: saem 95, 250 e 2021.
  - L26: entra one.
  - L28: saem 2011 e 28,000.
  - L31: sai 230.
  - L33: sai two.
  - L34: sai one.
  - L42: entra five.
- **(c) parágrafos:** ok, 20 parágrafos mudados, todos com dono; 30 antes e 29 depois; nenhuma frase do diff sem item; as partes
  conferem.
- **(d) REDIZER:** ok, 8 itens (L03, L06, L12, L14, L16, L20, L37, L38), sem número, data, nome ou grupo novo.
- **(e) editor:** ok, 89 pares, cada um casando uma vez.

## 3. O sha

- **Antes:** `4694e58092c24ffe94b23e8fd1ec5ce56907d6163906f39874adc836571a594d` (2.089 palavras, 30 parágrafos).
- **Depois:** `0081efb271f0d728ca80edf02cf7c39e84b3b0f0fbb4f3b27bb2b0985277ff14` (2.018 palavras, 29 parágrafos). É o mesmo que o
  relato da lista previu, no `--seco` e na cópia (`_trabalho/_tmp-lista-r1.md`).

## 4. O diff, frase a frase (a saída do aplicador)

O aplicador parte a frase também no ponto de "U.S.", e por isso as diferenças 25 a 27 aparecem em pedaços ("U.", "Those U."). A L31,
inteira: "U.S. waters, in that sense, means the exclusive economic zone: a band of sea up to about 230 miles out, where the U.S.
controls the resources." → "Those U.S. waters are the exclusive economic zone, a band of sea where the U.S. controls the resources."

```
aplicar-lista · atlantico-fundo · r1 · APLICADO
texto falado: 4694e58092c2 → 0081efb271f0

roteiro-narrador.md: 42 itens · 35 diferenças · frases sem item: 0
  Diferença 1 (gancho)
    SAI:   It found no fish at all. ← L01
    ENTRA: It saw none of those fish. ← L01
  Diferença 2 (gancho)
    SAI:   And for decades, the official list of undersea features gave that point a number about 1,200 feet too deep, even after sonar showed otherwise. ← L02
    ENTRA: And a 2019 study found that the official list of undersea features still had the Atlantic about 1,200 feet too deep, even after sonar showed otherwise. ← L02
  Diferença 3 (p1)
    SAI:   It came back up with a sample of the seafloor and a reading of the water temperature down there. ← L03
    ENTRA: The wire came back up with a sample of the seafloor and a reading of the water temperature down there. ← L03
  Diferença 4 (p1)
    SAI:   At the time, that was believed to be the greatest depth a sample had ever been brought up from. ← L04
    ENTRA: At the time, no sounding was known to have brought back a sample and a temperature from that deep. ← L04
  Diferença 5 (p2)
    SAI:   Exactly how deep, the sources disagree. ← L05
    ENTRA: The sources disagree on exactly how deep. ← L05
  Diferença 6 (p2)
    SAI:   Some 200 of them, along about a mile of seafloor. ← L06
    ENTRA: They counted some 200 of them along roughly a mile of seafloor. ← L06
  Diferença 7 (p2)
    SAI:   ocean and weather agency, records that in 1970 a net hauled up from the trench brought back a small cusk-eel. ← L07
    ENTRA: ocean and weather agency, records that in 1970 a net brought back a small cusk-eel. ← L07
  Diferença 8 (p2)
    SAI:   The Australian Museum lists the same catch. ← L07
    ENTRA: The Australian Museum lists the same catch, from the Puerto Rico Trench. ← L07
  Diferença 9 (p2)
    SAI:   How deep the fish was when it swam in, no one knows. ← L08
    ENTRA: No one knows how deep the fish was when it swam in. ← L08
  Diferença 10 (p3)
    SAI:   Along the trench, the North American plate and the Caribbean plate mostly slide past each other, with only a little of one sinking under the other. ← L09
    ENTRA: In the Pacific, deep trenches lie where one plate sinks under another. ← L09
    ENTRA: Along this trench, the North American plate and the Caribbean plate mostly slide past each other, with only a little of one sinking under the other. ← L09
  Diferença 11 (p3)
    SAI:   By the USGS's measure, the trench has the most negative gravity anomaly on Earth. ← L10
    SAI:   Gravity there falls further below normal than anywhere else. ← L10
    SAI:   The agency found a tilted slab of limestone that starts more than 4,000 feet above sea level. ← L11
    ENTRA: According to the USGS, gravity over the trench falls further below normal than anywhere else on Earth. ← L10
    ENTRA: The agency says that points to an active force pulling down on the area. ← L10
    ENTRA: By the agency's reconstruction, a tilted slab of limestone starts more than 4,000 feet above sea level. ← L11
  Diferença 12 (p3)
    SAI:   On the trench's walls, its maps showed something else. ← L12
    ENTRA: On the trench's walls, the agency's maps showed something else. ← L12
  Diferença 13 (p4)
    SAI:   Anegada is a low, flat island in the British Virgin Islands. ← L13
    SAI:   Hundreds of coral boulders lie far inland there, along about six miles of its north shore, the side that faces the trench. ← L14
    ENTRA: Anegada is a low island in the British Virgin Islands. ← L13
    ENTRA: Hundreds of coral boulders lie far inland there, along roughly six miles of its north shore, the side that faces the trench. ← L14
  Diferença 14 (p4)
    SAI:   The authors suspect the coral died in summer or fall. ← L15
    SAI:   The earthquake behind it struck the eastern part of this trench, far from its deepest point. ← L16
    ENTRA: The earthquake behind that wave struck the eastern part of this trench, far from its deepest point. ← L16
  Diferença 15 (p4)
    SAI:   The scientists who dated the coral call it the only known sign that this stretch of the trench can do that. ← L17
    SAI:   That quake wasn't behind the deadly tsunami of 1918, either. ← L18
    ENTRA: The scientists who dated the coral call the wave the only known sign that this stretch of the trench has produced a quake that big. ← L17, L18
  Diferença 16 (p5)
    SAI:   That's in the eastern part of the trench, a long way from its deepest point. ← L19
    SAI:   The robot, Deep Discoverer, worked from NOAA's ship Okeanos Explorer, on one of a dozen dives it made on that voyage. ← L20
    ENTRA: That's a long way east of its deepest point. ← L19
    ENTRA: The robot, Deep Discoverer, worked from the ship Okeanos Explorer, on one of a dozen dives it made on that voyage. ← L20
  Diferença 17 (p5)
    SAI:   To get the sonar right, the ship lowered instruments to measure how fast sound travels at every depth, from the surface to the floor. ← L21, L22, L23
    SAI:   Most of the seafloor it covered had been mapped before. ← L23
    ENTRA: The expedition's goal was to reach the deepest point of each of the five oceans. ← L21
    ENTRA: To get the sonar right, the team measured how fast sound travels at every depth, from the surface to the floor. ← L21, L22, L23
  Diferença 18 (p5)
    SAI:   The scientists give that margin with 95 percent confidence. ← L24
    SAI:   They built their map as a grid of squares about 250 feet across. ← L24
    SAI:   The results were published in 2021. ← L24
  Diferença 19 (p5)
    SAI:   He made the trip alone, in a sub built to reach the bottom of any ocean. ← L25
    ENTRA: He made the trip alone, in his own sub, built to reach the bottom of any ocean. ← L25
  Diferença 20 (p5)
    ENTRA: When he climbed out, a reporter on board heard him say: "One down!" ← L26
  Diferença 21 (p6)
    SAI:   Until at least 2019, the official list of undersea features had the Milwaukee Deep at about 28,700 feet. ← L27
    ENTRA: A 2019 study found that the official list of undersea features had the Milwaukee Deep at about 28,700 feet. ← L27
  Diferença 22 (p6)
    SAI:   As late as 2011, a press release for a planned deep-diving sub listed more than 28,000 feet. ← L28
  Diferença 23 (p6)
    SAI:   In their check, the real floor came out shallower every time. ← L29
    ENTRA: Off Puerto Rico, the real floor came out shallower every time. ← L29
  Diferença 24 (p6)
    SAI:   Their study also put the deepest point somewhere else. ← L30
    ENTRA: Their study came out before the expedition's own results, and it put the deepest point somewhere else. ← L30
  Diferença 25 (p6)
    SAI:   Their study came out before the expedition's own results. ← L30
    SAI:   Those were published in 2021, and they placed the deepest point in U. ← L30
    ENTRA: The expedition's results, published in 2021, placed it in U. ← L30
  Diferença 26 (p6)
    SAI:   U. ← L31
    ENTRA: Those U. ← L31
  Diferença 27 (p6)
    SAI:   waters, in that sense, means the exclusive economic zone: a band of sea up to about 230 miles out, where the U. ← L31
    ENTRA: waters are the exclusive economic zone, a band of sea where the U. ← L31
  Diferença 28 (p6)
    SAI:   As of October 2026, the international list of undersea feature names no longer includes the Milwaukee Deep. ← L32
    SAI:   The two scientists had asked for that name to fall out of use. ← L33
    ENTRA: As of October 2026, the official list of undersea features doesn't include the Milwaukee Deep. ← L32, L33
  Diferença 29 (p7)
    SAI:   The Atlantic has one other contender for its deepest point: the South Sandwich Trench, far to the south, where one plate dives under another about three inches a year. ← L34
    ENTRA: The Atlantic has another contender for its deepest point: the South Sandwich Trench, far to the south, where one plate dives under another about three inches a year. ← L34
  Diferença 30 (p7)
    SAI:   The islands there are a chain of small volcanoes, with no one living on them. ← L35
    ENTRA: The islands there are a chain of small volcanoes, with no permanent residents. ← L35
  Diferença 31 (p7)
    SAI:   The depth most often published for its deepest point, the same 2019 study found, was deeper than the sonar's number for Puerto Rico. ← L36
    ENTRA: The same 2019 study noted the depth most often published for its deepest point. ← L36
    ENTRA: It was deeper than the sonar's number for Puerto Rico. ← L36
  Diferença 32 (p7)
    SAI:   The name Meteor Deep is old, after a German research ship. ← L38
    SAI:   Since 2021, it has officially belonged to the spot the sonar found, about 30 miles from where older books put it. ← L37, L39
    SAI:   The expedition had wanted to call it Pressure Deep, after its own ship, the Pressure Drop. ← L39
    ENTRA: The name Meteor Deep is old, taken from a German research ship. ← L39
    ENTRA: Since 2021, it has officially belonged to the spot the sonar found, about 30 miles from where older sources put it. ← L39
  Diferença 33 (p8)
    SAI:   Where the French had counted about 200 fish, it found none. ← L40
    SAI:   It found sea cucumbers instead, about as many as the fish the French had counted. ← L41
    ENTRA: Where the French had counted about 200 fish, it saw no snailfish. ← L40
    ENTRA: It found sea cucumbers instead, spread about as thickly as the fish the French had reported. ← L41
  Diferença 34 (p8)
    SAI:   The scientists who went back concluded that the "fish" of 1964 were sea cucumbers. ← L42
    ENTRA: In a 2020 paper on that return visit, five authors concluded that the "fish" of 1964 were sea cucumbers. ← L42
  Diferença 35 (p8)
    SAI:   The paper that reported it came out in 2020, with five authors. ← L42
    SAI:   One of them was Vescovo. ← L42
    ENTRA: One of the five was Vescovo. ← L42
```

## 5. O portão

`node roteiros/atlantico-fundo/_ferramentas/gate.mjs`: exit 0, **PASSA**, sha `0081efb271f0`. 2.018 palavras (≈ 10,97 min a 184
palavras/min), 29 parágrafos, 159 frases, média 12,7 palavras por frase, maior frase 28; gancho com 161 palavras até a assinatura
(≈ 52,5 s), "But" na palavra 49. Problemas: nenhum. Nenhuma correção mínima foi preciso. Taxas todas abaixo do teto (abre_and 2,
abre_so 1, perguntas 2, frases_curtas 2; abre_but, imperativo_mapa, heres, antítese e travessões 0); autoplágio vazio contra Juneau,
Los Angeles, Zona do Canal e Peru; nenhum alerta de fecho.

Os 8 alertas, decididos (os mesmos que a lista conferiu na cópia):
- **"still"** (novo, L02): "And a 2019 study found that the official list of undersea features still had the Atlantic about 1,200
  feet too deep, even after sonar showed otherwise." Aceito: é o passado da R03, dentro do estudo de 2019 (o sonar já mostrava outro
  número desde 2003), não estado do mundo de hoje (decidido em `_trabalho/lista-r1.md`, "Os alertas do portão").
- **"Milwaukee Deep"** ×3: o nome de 1939 (p1); a L27, atribuída ao estudo de 2019; a L32, datada ("As of October 2026"), volátil, que
  a Sala relê na véspera da gravação.
- **"never"** ×2 e **"first"** ×2: os da 1ª versão, decididos em `escrita-notas.md` §5; a locução os ouviu limpos, e fatos não os
  apontou.
- O "anomaly" da 1ª versão saiu (L10).

`gate.mjs --derivados`, antes de refazer os carimbos: exit 1, o editor e a pronúncia citando `4694e58092c2`. Depois: exit 0,
**PASSA**; `roteiro-editor.md` e `pronuncia.md` citam `0081efb271f0`; nenhum derivado velho. Os laudos de `qc-roteiro/` são os da
r1 (`*-r1.laudo.md`, que o `--derivados` não confere) e continuam com "Revisão julgada: `4694e58092c2`", que é a revisão que eles
julgaram. A cópia para a voz (`voz/texto-para-voz.md`) ainda não existe.

## 6. O editor (`roteiro-editor.md`)

- **Os 89 pares da lista**, aplicados pelo aplicador (prova (e)).
- **A cobertura, conferida por script** (`pautas/atlantico-fundo/_trabalho/scripts/editor-cobertura-r1.py`, exit 0):
  - os 29 parágrafos falados se cobrem, do começo ao fim e na ordem, pelas frases de topo da seção "De onde vem cada frase" (144
    frases; a linha da L36 junta duas, `"…" / "…"`); nenhuma linha de frase do editor ficou sem uso;
  - as 42 frases que entraram no texto falado estão todas, literais, no editor;
  - das 49 frases que saíram (contando os pedaços do "U.S."), nenhuma ficou viva: 11 ficaram riscadas (`~~…~~`, com a nota da r1:
    L15, L18, L23, as três da L24, L28, L30, L33, L39 e L42), e as outras foram trocadas pela forma nova.
- **Os trechos velhos entre aspas** (`editor-citacoes-velhas-r1.py`: o que estava no texto de antes e não está no de agora): sobravam
  dois fora de nota da r1, consertados à mão (abaixo); os outros 26 estão em nota da r1, em linha riscada ou numa proibição ("nunca
  'the ship lowered instruments'").
- **À mão, só a medida e o que ficou velho por causa da lista:**
  - a linha "Revisão do roteiro" para `0081efb271f0`;
  - o bloco "A medida do portão" refeito com a medida de agora (2.018 palavras, 29 parágrafos, 159 frases, média 12,7, maior 28,
    gancho 161, os 8 alertas decididos), mais um bloco "A rodada 1" (as cinco lentes julgaram `4694e58092c2`; a lista; o P01 não
    aplicado; o Lucas ainda não leu);
  - "As partes": as colunas "Palavras" e "Tempo" com a medida de agora (gancho 160, 161 pelo portão; p1 240; p2 190; p3 214; p4 226;
    p5 261; p6 253; p7 307; p8 167), por `pautas/atlantico-fundo/_trabalho/scripts/medida-partes-r1.py`, que repete a contagem do
    portão (2.089 e 2.018, as mesmas dele; a medida de antes reproduz a tabela velha). O parágrafo da escrita fica como histórico, com
    uma nota nova da r1 (29 pedidos à voz, de 44 a 107 palavras; o maior, p7, 2º);
  - "As chamadas": as posições refeitas pela mesma contagem (a inscrição na palavra ≈ 1.074 de 2.018, ≈ 5:50, ≈ 52 % de fala +
    cauda; a reserva na ≈ 1.009, ≈ 5:29, ≈ 49 %; o comentário de ≈ 10:44 a ≈ 10:52; a última frase de ≈ 10:52 a 10:58). A
    inscrição continua dentro de 35–60 %, e a peça do comentário continua terminando ≈ 6 s antes da cauda. No "Onde NÃO", a linha de
    60°S passou a "p7, 3º e 4º parágrafos" (eram o 4º e o 5º antes da L39);
  - "O destino das cifras": "Some 200 of them" e "Some 200" em minúscula, como a fala diz agora ("They counted some 200 of them"), e
    "about a mile" e "about six miles" como "roughly a mile" (L06) e "roughly six miles" (L14);
  - a nota do F43 sob a frase da gravidade, que ainda dizia "a palavra 'anomaly' só aqui" e "O alerta está decidido": passou a "desde
    a r1, a palavra 'anomaly' não está na voz; o termo e o número do USGS só na tela".
- Ficou como estava, por ser histórico da escrita: os números do plano em "Decisões de escrita" (o "+24" da zona econômica, que a L31
  encurtou) e a frase "o texto fechou em **2.089**".

## 7. A pronúncia (`pronuncia.md`)

- **Nenhum nome novo entrou na voz.** Os nomes das frases trocadas já estavam na folha ou nos "Lidos sem folha": Pacific (agora 2
  vezes, a nova no 10º, L09), "the Puerto Rico Trench" (agora 2, a nova no 8º, L07), USGS, Anegada, British Virgin Islands, Okeanos
  Explorer, Deep Discoverer, Five Deeps, Vescovo, snailfish, sea cucumbers, Meteor Deep, German, Milwaukee Deep.
- **Saíram da voz:** o possessivo "USGS's" (L10), "anomaly" (L10), "Pressure Deep" (L39), um "Pressure Drop" (o de p7, L39) e um
  "NOAA's" ("NOAA's ship", L20).
- **Contagens refeitas** pelo mesmo `pronuncia-contar.py`, gravadas em `pautas/atlantico-fundo/_trabalho/pronuncia-contagem-r1.json`
  (a de antes, `pronuncia-contagem.json`, é idêntica à que o script dá sobre `_trabalho/roteiro-r1.antes.md`): Puerto Rico 15 → 17
  (+ "from the Puerto Rico Trench", L07; + "Off Puerto Rico", L29); NOAA 6 → 5; snailfish 1 → 2 ("it saw no snailfish", L40);
  Atlantic 10 → 11 (gancho); os números de parágrafo de Vescovo, Factorian, Meteor, cusk-eel, NOAA e da cópia para a voz, pela junção
  da L39.
- **Na folha, à mão:**
  - a linha "Revisão do roteiro" para `0081efb271f0`, o cabeçalho com a medida de agora (29 parágrafos, 2.018 palavras, a divisão das
    partes de p7 e p8) e uma nota "O que a rodada 1 mudou nesta folha";
  - a linha do USGS: sem o possessivo, risco baixo (a linha fica em "Os que pedem atenção", para se ler a mudança; o alias U-S-G-S's
    ficou sem uso); NOAA "nos 5 pedidos"; as citações de Okeanos ("the ship Okeanos Explorer"), Anegada ("a low island"), snailfish e
    Meteor ("taken from a German research ship") na forma de agora;
  - "Lidos sem folha": sem anomaly e Pressure Deep, com a nota de que saíram; a reserva diz que nem a narração de `0081efb271f0` tem
    Hispaniola, Peniagone, GEBCO, IHO nem San Juan (conferido: 0 cada);
  - a amostra proposta, nas frases de agora, literais (conferido por comparação com o roteiro): os pedidos 5, 6, 8, 9 e 14. O 9
    ganhou a frase anterior do mesmo parágrafo ("In twenty fifteen, a NOAA robot filmed…"), porque a L20 tirou o "NOAA's" dele, e a
    folha queria NOAA em três pedidos. A amostra foi recontada por `pronuncia-amostra-contar.py`: 2.570 caracteres (eram 2.481, a
    mesma conta), uns 920 a 1.240 créditos pelos saldos dos vídeos 3 e 4. Nada foi gerado. O "USGS's" saiu da lista do que o Lucas
    responde;
  - "O que a cópia para a voz vai trocar": saíram o 1918 do 14º, o 2011, os 28,000 do 19º, o 95 percent, os 250 feet e os 230 miles;
    entraram "a 2019 study" (2º e 19º) e "a 2020 paper" (28º) entre os anos que podem soar como quantidade, e "the five oceans",
    "One down!" e "one of the five" entre o que já está por extenso; os números de parágrafo de p7 e p8 descem um.
- A folha de antes ficou em `_trabalho/pronuncia-r1.antes.md` (sha256 `2e54af5b6923…`, igual à do commit `e6801f5`).

## 8. Os arquivos, depois

- `roteiros/atlantico-fundo/roteiro-narrador.md`: `021317f44786…` (texto falado `0081efb271f0`).
- `roteiros/atlantico-fundo/roteiro-editor.md`: `855314ea9b2b…`.
- `roteiros/atlantico-fundo/pronuncia.md`: `67c18180953b…`.
- As cópias de antes: `_trabalho/roteiro-r1.antes.md` (`fe0765afba27…`), `_trabalho/roteiro-editor-r1.antes.md` (`9c876a5cbebf…`) e
  `_trabalho/pronuncia-r1.antes.md` (`2e54af5b6923…`).
- `pautas/atlantico-fundo/_trabalho/pronuncia-contagem-r1.json` (`2d9031c8330c…`).
- Os scripts novos, em `pautas/atlantico-fundo/_trabalho/scripts/`: `editor-cobertura-r1.py`, `editor-citacoes-velhas-r1.py`,
  `medida-partes-r1.py` e `pronuncia-amostra-contar.py` (rodados com `python -X utf8 -B`, os caminhos como argumentos, sem rede).

## 9. O que fica para a Sala

- O pedido P01 ao escritor (`_trabalho/pedidos-r1.json`): p3, 3º parágrafo (o 11º pedido à voz), de +5 a +20 palavras. Ele já está
  escrito sobre o texto de `0081efb271f0`.
- O que a lista mandou à Sala e esta tarefa não toca: o AC16 (falta uma cópia local da fonte), as duas sugestões fora da rubrica
  (Aguadilla em 1918; os invertebrados) e o dossiê a pôr em dia (o F43 ainda diz "anomaly"; o F38 ainda diz "about as many").
- O Lucas ainda não leu o roteiro.
