# A lista da rodada 1, aplicada · zona-do-canal

Revisão julgada: `6917e62a2155` → revisão de agora: `d49183e2342d`

> 14/10/2026. A lista fechada `_trabalho/lista-r1.json` (29 trocas, L01–L29, com 47 pares para o `roteiro-editor.md`), aplicada
> por `node ferramentas/aplicar-lista.mjs zona-do-canal --lista=roteiros/zona-do-canal/_trabalho/lista-r1.json`, primeiro com
> `--seco` (exit 0) e depois sem (exit 0, **APLICADO**). Nada fora da lista entrou no roteiro: nenhuma correção mínima foi
> preciso, porque o portão passou na primeira rodada. Os dois pedidos ao escritor (`_trabalho/pedidos-r1.json`) ficaram para
> depois.

## 1. O aplicador

- **`--seco`:** exit 0, `SECO_OK`. 29 itens, 26 diferenças, nenhuma frase sem item, nenhum aviso, nenhum pendente.
- **Sem `--seco`:** exit 0, `APLICADO`. Recusas: nenhuma. Avisos: nenhum. Pendentes (PEDIR): nenhum.
- **sha do texto falado:** antes `6917e62a2155b91ef7b654397975b18fb78d86419d441948ccd0187ec6a58635` (`6917e62a2155`), depois `d49183e2342da5ea86c7ffe0abf67ace9b1c6901eb8120bdeb5f50978b518ea5` (`d49183e2342d`).
  O `gate.mjs` rodado pelo aplicador antes e depois leu o mesmo sha (antes PASSA, 2097 palavras; depois
  PASSA, 2106 palavras, 0 problemas).
- **Parágrafos falados:** 29 → 28 (L14 junta "Now go back to Balboa." ao parágrafo anterior;
  L26 passa a quebra para depois de "…over the former Zone.").
- **As cópias de antes** (o aplicador as fez e conferiu): `_trabalho/roteiro-r1.antes.md` (sha256 do arquivo `5c4f8e1ab93c…`) e
  `_trabalho/roteiro-editor-r1.antes.md` (`de5ddc5895b2…`). O `roteiro-narrador.md` de agora tem sha256 de arquivo `e0be458fc0cb…`.

### As provas

| Prova | Resultado |
|---|---|
| (a) aspas | ok: 49 citações antes, 49 depois, idênticas e na mesma ordem |
| (b) numerais | ok: 127 → 129; por item, cada saldo é o declarado: L06 sai "two"; L07 entram "four" ×2; L09 entra "1940"; L12 sai "1979"; L15 entra "1903"; L23 sai "1950s", entra "1950" |
| (c) parágrafos | ok: 20 parágrafos mudados, todos com o "de" do dono; nenhuma frase do diff sem item; a parte declarada é a do dono em todos |
| (d) REDIZER | ok: 5 itens REDIZER sem número, data, nome próprio, grupo nem citação novos |
| (e) editor | ok: os 47 pares casaram uma vez cada em `roteiro-editor.md` |

### Os itens aplicados

A operação do aplicador e a da lente (`op_lente`), quando o aplicador não a tem.

| Item | Op | Op da lente | Parte | Parágrafo(s) dono(s), antes | Lentes |
|---|---|---|---|---|---|
| L01 | REDIZER | REDIZER | gancho | 1 | locucao:A1(a) GRAVE, subtracao:SUSP-01 |
| L02 | ESTREITAR | QUALIFICAR | p1 | 3 | roteiro:14 |
| L03 | DA-PAUTA | REDIZER | p1 | 3 | roteiro:11, locucao:A8(a) |
| L04 | REDIZER | REDIZER | p1 | 5 | clareza:3, locucao:A1(b) GRAVE |
| L05 | ESTREITAR | QUALIFICAR | p1 | 6 | roteiro:2 GRAVE, fatos:A3 |
| L06 | REDIZER | CORTAR | p2 | 7 | subtracao:SUB-03 |
| L07 | DA-FONTE | REDIZER | p2 | 9 | clareza:8, locucao:A4, roteiro:18 |
| L08 | REORDENAR | REORDENAR | p2 | 9 | locucao:A5 |
| L09 | DA-FONTE | DATAR | p2 | 10 | roteiro:10, fatos:L2 |
| L10 | ESTREITAR | QUALIFICAR | p2 | 10 | fatos:A4, roteiro:22 |
| L11 | ESTREITAR | QUALIFICAR | p3 | 12 | fatos:A5 |
| L12 | DA-FONTE | DATAR | p3 | 12 | clareza:9 |
| L13 | REORDENAR | REORDENAR | p3 | 13 | clareza:2, roteiro:6, subtracao:nao_tocar |
| L14 | CORTAR | CORTAR | p3 | 13, 14 | roteiro:7, clareza:1 (parte do corpo), subtracao:SUB-02 |
| L15 | DA-FONTE | CORRIGIR | p4 | 15 | fatos:L3, roteiro:13, locucao:A9(a) |
| L16 | CORTAR | CORTAR | p4 | 17 | locucao:A7, roteiro:8 (parte), clareza:1 (parte do corpo), subtracao:SUB-01 (parte) |
| L17 | DA-FONTE | CORRIGIR | p5 | 18 | roteiro:9, fatos:A6, locucao:A6 |
| L18 | ESTREITAR | QUALIFICAR | p5 | 19 | roteiro:21 |
| L19 | ESTREITAR | CORRIGIR | p5 | 19 | fatos:L4 |
| L20 | ESTREITAR | QUALIFICAR | p5 | 20 | roteiro:16, fatos:L5 |
| L21 | REDIZER | REDIZER | p5 | 20 | clareza:7, locucao:A3, roteiro:15 |
| L22 | CORTAR | CORTAR + REDIZER | p5 | 21 | roteiro:3 GRAVE, fatos:L6 (substituído) |
| L23 | ESTREITAR | QUALIFICAR + REORDENAR | p5 | 21 | locucao:A2, roteiro:17 |
| L24 | REDIZER | REDIZER | p6 | 22 | locucao:A8(b) |
| L25 | DA-FONTE | REDIZER | p6 | 24 | clareza:6, roteiro:19, locucao:A9(b) |
| L26 | DA-FONTE | QUALIFICAR | p7 | 26, 27 | roteiro:1 GRAVE, clareza:5, fatos:A2 |
| L27 | ESTREITAR | QUALIFICAR | p7 | 28 | fatos:L7 |
| L28 | ESTREITAR | QUALIFICAR | p7 | 28 | roteiro:4 GRAVE |
| L29 | CORTAR | QUALIFICAR (forma mínima) | p7 | 28 | fatos:A1 |

### O diff (a saída do aplicador, frase a frase)

O ponto de "U.S.", "$158.46" e "$76.00" parte a frase na régua do aplicador: as linhas "46 a month…", "00." e "S." são
pedaços dessas frases, não frases novas.

```
aplicar-lista · zona-do-canal · r1 · APLICADO
texto falado: 6917e62a2155 → d49183e2342d

roteiro-narrador.md: 29 itens · 26 diferenças · frases sem item: 0
  Diferença 1 (gancho)
    SAI:   This is Balboa, the town below Balboa Heights, where the Panama Canal Zone was run from. ← L01
    ENTRA: This is Balboa, the town below Balboa Heights, the hillside the Panama Canal Zone was run from. ← L01
  Diferença 2 (p1)
    SAI:   Its second article granted the United States, "in perpetuity," a band ten miles wide, five on each side of the canal, to build, run and protect it. ← L02
    SAI:   The cities of Panama and Colón sat inside those limits, and the same article left them out. ← L03
    ENTRA: Its second article granted the United States, "in perpetuity," a band ten miles wide, five on each side of the planned canal, to build, run and protect it. ← L02
    ENTRA: Panama City, the capital, and Colón sat inside those limits, and the same article left them out. ← L03
  Diferença 3 (p1)
    SAI:   That is the town you saw first: Balboa, the town at the foot of Balboa Heights, the hillside the Canal Zone was run from. ← L04
    ENTRA: The town you saw first is Balboa, the town at the foot of Balboa Heights, the hillside the Canal Zone was run from. ← L04
  Diferença 4 (p1)
    SAI:   So before anyone was born in Balboa, the plan for it already had two words in it: "gold" and "silver." ← L05
    ENTRA: So when Balboa was planned as a permanent town, the plan already had two words in it: "gold" and "silver." ← L05
  Diferença 5 (p2)
    SAI:   The Zone paid its people from two payrolls, which its government called the "gold roll" and the "silver roll." ← L06
    ENTRA: The Zone's government called them the "gold roll" and the "silver roll." ← L06
  Diferença 6 (p2)
    SAI:   The Zone's 1920 report lists "gold" clubhouses at Balboa, Ancón, Pedro Miguel, Gatún and Cristóbal, and "silver" clubhouses at La Boca, Red Tank, Paraíso, Gatún and Cristóbal. ← L07
    SAI:   It lists "white" schools and "colored" schools, and prints what it paid their teachers: $158. ← L08
    SAI:   46 a month, on average, in the first, and $76. ← L08
    SAI:   00 in the second. ← L08
    ENTRA: The Zone's 1920 report lists "gold" clubhouses at Balboa and four other towns, and "silver" clubhouses at La Boca and four others. ← L07
    ENTRA: Gatún and Cristóbal had both. ← L07
    ENTRA: It lists "white" schools and "colored" schools, and prints what it paid their teachers on average: in the first, $158. ← L08
    ENTRA: 46 a month; in the second, $76. ← L08
    ENTRA: 00. ← L08
  Diferença 7 (p2)
    SAI:   The Zone's free schools took their children only if the family lived inside. ← L09
    ENTRA: By 1940, the Zone's free schools took their children only if the family lived inside. ← L09
  Diferença 8 (p2)
    SAI:   So the Zone sorted its people by payroll, not by passport. ← L10
    ENTRA: So the Zone sorted its workers by payroll. ← L10
  Diferença 9 (p3)
    SAI:   The Zone's 1950 report says an employee had to be assigned family quarters before his family got permission to come to the Zone at all. ← L11
    ENTRA: The Zone's 1950 report says its "U. ← L11
    ENTRA: S. ← L11
    ENTRA: -rate" employees had to be assigned family quarters before their families got permission to come to the Zone at all. ← L11
  Diferença 10 (p3)
    SAI:   In 1979 they wrote, in the Panama Canal Review, the Zone's own magazine, that everyone "lived in rented quarters" and shopped at the "commy," the commissary. ← L12
    ENTRA: In the Panama Canal Review, the Zone's own magazine, in its issue dated the day the Zone ended, they wrote that everyone "lived in rented quarters" and shopped at the "commy," the commissary. ← L12
  Diferença 11 (p3)
    SAI:   That is why the number for the whole Zone says less than it seems. ← L13
  Diferença 12 (p3)
    ENTRA: So the number for the whole Zone says less than it seems. ← L13, L14
  Diferença 13 (p3)
    SAI:   The census recorded only where they were born, not whether they were citizens. ← L14
  Diferença 14 (p4)
    SAI:   Congress passed it on August 4, 1937, and made it reach back to February 26, 1904, the day the treaty took effect. ← L15
    ENTRA: Congress enacted it on August 4, 1937, and made it reach back to February 26, 1904, the day the 1903 treaty took effect. ← L15
  Diferença 15 (p4)
    SAI:   For the thousand-odd residents of Balboa who had been born in the Zone, the rule was the same: citizens if a parent had been one at the time of the birth. ← L16
    SAI:   The census never asked. ← L16
    ENTRA: For the thousand or so residents of Balboa born in the Zone, the rule was the same: they were citizens if a parent had been one at the time of the birth. ← L16
  Diferença 16 (p5)
    SAI:   The Zone's governor answered the ambassador that its "silver" workers wanted "the complete abolition of any segregation in the Canal Zone," and that granting it soon would wreck the canal and the railroad. ← L17
    ENTRA: The Zone's governor answered the ambassador. ← L17
    ENTRA: The "silver" workers, he said, wanted "the complete abolition of any segregation in the Canal Zone." ← L17
    ENTRA: Granting that soon, he added, would wreck the canal and railroad organizations. ← L17
  Diferença 17 (p5)
    SAI:   The names came off the pay tables in November 1948, and off the signs by December. ← L18
    ENTRA: The names came off the pay tables in November 1948, and off the signs in public places by December. ← L18
  Diferença 18 (p5)
    SAI:   In 1955, a new treaty and a 1958 law set the same base pay for the same job, whether the employee was a citizen of the United States or of Panama. ← L19
    ENTRA: In 1955, a new treaty promised, and a 1958 law set, the same base pay for the same job, whether the employee was a citizen of the United States or of Panama. ← L19
  Diferença 19 (p5)
    SAI:   From 1939, the Zone's commissaries sold only to its own employees and soldiers. ← L20
    SAI:   From the end of 1956, not even to employees who were not citizens of the United States and lived in Panama. ← L21
    ENTRA: From 1939, the Zone's commissaries sold only to its own employees and soldiers, with their families. ← L20
    ENTRA: From the end of 1956, employees who lived in Panama and were not citizens of the United States could no longer shop there. ← L21
  Diferença 20 (p5)
    SAI:   The word on the sign was now "citizen." ← L22
    SAI:   The 1960 census shows the map that went with it. ← L22
    ENTRA: Now the 1960 census, town by town. ← L22
  Diferença 21 (p5)
    SAI:   Rainbow City, on the Atlantic side, Silver City until the early 1950s: 3 of 3,688. ← L23
    ENTRA: Rainbow City, on the Atlantic side: 3 of 3,688. ← L23
    ENTRA: In the 1950 census, it was called Silver City. ← L23
  Diferença 22 (p6)
    SAI:   First at Shaler Triangle, a square in Panama City that was Zone ground, then on the bridge over the canal and on the Administration Buildings. ← L24
    ENTRA: It flew first at Shaler Triangle, a plaza of Zone ground in Panama City, then on the bridge over the canal and on the Administration Buildings. ← L24
  Diferença 23 (p6)
    SAI:   By seven that evening the students had left the Zone along Fourth of July Avenue, the street beside the line in front of their school, and four days of fighting had begun. ← L25
    ENTRA: By seven that evening the students had left the Zone along Fourth of July Avenue, the street beside the line in front of the National Institute. ← L25
    ENTRA: Four days of fighting had begun. ← L25
  Diferença 24 (p7)
    SAI:   The transition ran thirty months, and an American agency, the Panama Canal Commission, ran the canal until the end of 1999. ← L26
    ENTRA: For thirty months more, American police and courts still covered the canal's American employees, the military and their families, in certain areas. ← L26
    ENTRA: The Zone's schools passed to the Department of Defense, and an American agency, the Panama Canal Commission, ran the canal until the end of 1999. ← L26
  Diferença 25 (p7)
    SAI:   A second treaty, which let only those in the canal's service live inside the line. ← L27
    SAI:   And a payroll, which sorted everyone inside it: first into "gold" and "silver," then into "U. ← L28
    ENTRA: A second treaty, which let only those who worked or served there, and their families, live inside the line. ← L27
    ENTRA: And a payroll, which sorted the people who worked for the canal: first into "gold" and "silver," then into "U. ← L28
  Diferença 26 (p7)
    SAI:   The rule about being born there never changed, and it is still on the books. ← L29
    ENTRA: The rule about being born there never changed. ← L29
```

## 2. O portão

`node roteiros/zona-do-canal/_ferramentas/gate.mjs`: exit 0, **PASSA**.

- sha256 do texto falado `d49183e2342da5ea86c7ffe0abf67ace9b1c6901eb8120bdeb5f50978b518ea5`, o mesmo que o aplicador imprimiu.
- 2106 palavras (faixa 1.950–2.150) · ≈11.45 min a 184 palavras/min (≈11:27; +20 s de cauda ≈ 11:47) ·
  28 parágrafos · 150 frases · média 14.1 · maior 33.
- Gancho: 166 palavras até a assinatura (≈54.1 s), "But" na palavra 49.
- Problemas: nenhum. Autoplágio: vazio.
- Taxas, todas sem alerta: abre_but 0 (teto 0.49); abre_and 2.4 (teto 3.92); abre_so 3.35 (teto 3.92); travessoes 0 (teto 0); perguntas 1.44 (teto 2.27); frases_curtas 2.87 (teto 3.92); imperativo_mapa 0 (teto 2.45); heres 0 (teto 0); antitese 0 (teto 0.98).
- **Os 20 alertas de palavra**, decididos um a um: `citizens` ×11, `citizenship` ×2, `white` ×2, `sovereign` ×4,
  `segregat` ×1. São as mesmas palavras, no mesmo uso, dos 22 aceitos na escrita (`escrita-notas.md`, item 6); saíram dois
  `citizen` (as frases cortadas por L14 e L22). Cinco caem em frases reescritas pela lista (L16 "they were citizens if a parent
  had been one…", L19 "a citizen of the United States or of Panama", L21 "were not citizens of the United States", L17 "any
  segregation", L08 "white" schools): em todas a palavra é a da lei, do relatório ou da citação atribuída, e o bullet da frase no
  `roteiro-editor.md` diz que o alerta é aceito. O único alerta sem a nota no bullet ("Under that law, you were one if your
  father or mother was a citizen…") é de frase que a lista não tocou, aceito em `escrita-notas.md`, item 6. Nenhum alerta pede
  troca.
- Com `--derivados`, antes de refazer os carimbos: exit 1, `roteiro-editor.md` e `pronuncia.md` citando `6917e62a2155` (o
  esperado). Depois: exit 0, **PASSA**, os dois citando `d49183e2342d`. Os laudos de `qc-roteiro/` são todos `*-r1.laudo.md`
  (julgaram `6917e62a2155` e ficam fora da conferência, como o portão manda). A cópia para a voz (`voz/texto-para-voz.md`) ainda
  não existe: o `preparar-voz.mjs` não rodou nesta tarefa.
- Uma diferença de medida contra o relato da lista: pelo `contar` do portão, os pedidos à voz vão de **45** a 106 palavras (o
  relato dizia 43 a 106), e os dois parágrafos de p7 que a L26 separa ficam com 66 e 99 (o relato dizia 68 e 97). Todos dentro
  de 40 a 110.

## 3. O que mudou no `roteiro-editor.md`

- **A cobertura, conferida antes do carimbo:** as 136 frases do texto falado (separadas sem partir "U.S." nem os decimais) estão,
  cada uma, citadas literalmente em "De onde vem cada frase"; os 114 bullets citam só frases que o roteiro tem. As frases trocadas
  trazem os ids da troca (L03 `doc.afi-04`; L07 `mec.afi-20`; L11 `mec-12`, p. 43; L15 `doc.afi-29`; L17 `mec-18`; L19
  `mec.afi-25`, `doc.afi-32`; L20 `mec-04`; L23 `esc.afi-07`, `mec-16`; L26 `doc.afi-36`, `exp-13`; L29 `doc-09`), a
  atribuição (o relatório de 1950, o governador, o manual, a NARA) e o mapa (os dez nomes dos clubes só nos rótulos; Red Tank
  fora do mapa se não houver posição; Balboa, Paraíso e Rainbow City com o número; a Fourth of July Avenue diante do National
  Institute). Os 47 pares já tinham posto isso; nada nos bullets foi mexido à mão.
- **À mão, nesta tarefa:**
  - "Revisão do roteiro": `6917e62a2155` → `d49183e2342d`;
  - "A medida do portão": a de agora (2.106 palavras, ≈11:27 + 20 s, 28 parágrafos, 150 frases, média 14,1, maior 33, gancho
    166, "But" na 49, 20 alertas), com a nota de que a revisão anterior passou pelas cinco lentes e esta ainda não, e os dois
    pedidos pendentes;
  - "As partes": as palavras e os tempos de cada parte (gancho 166, p1 317, p2 255, p3 276, p4 207, p5 297, p6 259, p7 329) e,
    na linha de p7, o que os 30 meses cobriam e as escolas ao Departamento de Defesa; o parágrafo dos totais refeito (2.106; p7
    passa da folga de ±30 com +39, por causa da L26; "still on the books" saiu; pedidos de 45 a 106);
  - "As chamadas (CTA)": as posições recalculadas (inscrição na palavra ≈908, ≈4:56, ≈42 % de 11:47; reserva ≈824, ≈4:29,
    ≈38 %; comentário de ≈11:17 a ≈11:27). As frases e os lugares não mudaram.

## 4. O que mudou na `pronuncia.md`

- "Revisão do roteiro": `6917e62a2155` → `d49183e2342d`, e a nota do topo diz o que a refeitura mudou.
- **Saíram de todo da voz e da tabela principal:** Ancón e Pedro Miguel (as duas linhas foram para "fora do texto de agora",
  com a pronúncia, a fonte e o risco guardados) e Red Tank (dos "Lidos sem folha" para a lista dos nomes que a narração não diz).
  Conferido no texto falado: Ancón 0, Pedro Miguel 0, Red Tank 0.
- **Entraram:** "U.S.-rate" (p3, 12º parágrafo, L11), na tabela dos que pedem atenção, como **Hipótese**, risco médio (a pausa
  depois de "U.S."), reserva "U.S. rate" só se a amostra errar; nenhuma fonte lida, porque a tarefa foi sem rede. "Department of
  Defense" (p7, 26º parágrafo, L26), nos "Lidos sem folha".
- **Contagens e parágrafos refeitos** sobre o texto de agora: Torrijos 25º; Paraíso 2 (gancho e p5: 2º e 20º); Cristóbal 1 e
  Gatún 1 (9º, "Gatún and Cristóbal had both."); Shaler 21º; Albrook 26º. Os outros não mudaram (Balboa 20 em 12 parágrafos,
  Panama 23 em 16, Colón 2, La Boca 3).
- **A amostra proposta** (nada gerado): as frases refeitas com o texto de `d49183e2342d` (L03, L07, L12, L24), mais o "U.S.-rate"
  no pedido 4 e um 8º pedido com Paraíso (o de p5), para Paraíso seguir em dois pedidos. 1.482 caracteres, uns 190 créditos
  (antes 1.242, uns 160). As perguntas ao Lucas e a decisão dos acentos perderam Ancón e Pedro Miguel; "the early 1950s" saiu
  da lista de anos.

## 5. O que ficou para depois

- **Os pedidos ao escritor** (`_trabalho/pedidos-r1.json`), sobre o texto de agora:
  - **P01**, parágrafo 15 (p4, "Until then, the State Department's manual says…"): dizer o que a lei de 1937 mudou, a residência
    prévia do pai ou da mãe que a regra geral exigia e a lei dispensou, atribuída ao manual (`doc.afi-29`); clareza:4.
  - **P02**, parágrafo 21 (p6, "From 1960, Panama's flag began to fly…"): o porquê da bandeira retirada em 30/12/1963, o acordo
    de 10/01/1963 na voz da comissão de juristas (`exp-15`, §18–19); clareza:10.
- O que a lista deixou fora e o conflito da resposta em quatro partes de p7 (se vira pergunta ao Lucas): `lista-r1.md`.
- A cópia para a voz não foi gerada; quando for, o `preparar-voz.mjs` grava o carimbo de `d49183e2342d` (ou do sha que vier
  depois dos pedidos).
