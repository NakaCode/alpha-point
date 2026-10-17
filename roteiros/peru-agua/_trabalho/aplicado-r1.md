# Rodada 1 aplicada · peru-agua

Revisão julgada: `87ea57b0abe5` → revisão nova: `c803b5cf5e0b`

> 17/10/2026. A lista fechada `_trabalho/lista-r1.json` (26 itens, L01–L26, e 58 pares do editor), aplicada por
> `node ferramentas/aplicar-lista.mjs peru-agua --lista=roteiros/peru-agua/_trabalho/lista-r1.json`, primeiro com `--seco`.
> Nada fora da lista entrou no texto falado. O pedido P01 (`_trabalho/pedidos-r1.json`) não foi aplicado: é do escritor.

## 1. O aplicador

- `--seco`: exit 0, `SECO_OK`; 26 itens, 20 diferenças, 0 frases sem item, 0 recusas, 0 avisos, 0 pendentes.
- Sem `--seco`: exit 0, `APLICADO`; recusas 0, avisos 0, pendentes 0.
- Itens por op: DA-FONTE L01, L02, L04, L08, L10, L13, L18; ESTREITAR L03, L05, L06, L09, L14; ATRIBUIR L07; REDIZER L11, L22, L23, L26; REORDENAR L12, L16, L21; CORTAR L15, L17, L19, L20; DA-PAUTA L24, L25.
- Cópias de antes (conferidas pelo sha256): `_trabalho/roteiro-r1.antes.md` (`f7596bd14273…`) e `_trabalho/roteiro-editor-r1.antes.md` (`6c5b9d509ed6…`).
- Gravados, relidos e conferidos: `roteiro-narrador.md` (arquivo `aec8d38aeeb2…`, texto falado `c803b5cf5e0b`) e `roteiro-editor.md` (o aplicador gravou `7a1103bb35d3…`; depois, a linha da revisão e a medida, abaixo, o levaram a `905e500cced0…`).

## 2. As provas

- (a) aspas: ok, 3 antes e 3 depois, na mesma ordem.
- (b) numerais: ok, 112 → 111; o saldo item a item bate com o declarado:
  - L01: saem —, entram ['two', 'one'].
  - L02: saem —, entram ['7,000'].
  - L10: saem ['two'], entram ['40'].
  - L16: saem —, entram ['three'].
  - L17: saem ['2,000'], entram —.
  - L19: saem ['65'], entram —.
  - L20: saem ['12'], entram —.
  - L23: saem ['third'], entram —.
  - L24: saem ['three'], entram —.
- (c) parágrafos: ok, 18 parágrafos mudados, todos com dono; 27 antes e 27 depois; nenhuma frase do diff sem item; as partes conferem.
- (d) REDIZER: ok, 4 itens (L11, L22, L23, L26), sem número, data, nome ou grupo novo.
- (e) editor: ok, 58 pares, cada um casando uma vez.
- O gate do vídeo, rodado pelo aplicador antes e depois: o mesmo sha que o dele (`87ea57b0abe5` → `c803b5cf5e0b`), PASSA nos dois.

## 3. O sha

- Antes: `87ea57b0abe551676e18c3347454c08c1cdc7a8501c51b49ad650791fcd4a5a0` (2.039 palavras).
- Depois: `c803b5cf5e0b7974cfab5e7b836e4ba73a1611c5f34dd9a967145f4571212891` (2.019 palavras). É o mesmo que o relato da lista previu no `--seco` e na cópia.

## 4. O diff, frase a frase (a saída do aplicador)

```
  Diferença 1 (p1)
    SAI:   A smaller third region, in the south, drains into Lake Titicaca. ← L23
    ENTRA: A small part of the south drains into Lake Titicaca instead. ← L23
  Diferença 2 (p1)
    SAI:   There, Loreto, Peru's largest department, is also one of its least populated. ← L04
    ENTRA: There, Loreto, Peru's largest department, is also one of its most thinly populated. ← L04
  Diferença 3 (p2)
    SAI:   Peru's weather service calls that sinking air the main cause of the coast's dryness. ← L15
    SAI:   Off the shore, the cold Humboldt Current, water rising from the deep and a blanket of low cloud keep the sea unusually cold for its latitude. ← L16
    ENTRA: Off the shore, three things keep the sea unusually cold for its latitude: the cold Humboldt Current, water rising from the deep, and a blanket of low cloud. ← L16
  Diferença 4 (p2)
    SAI:   In El Niño years, the high pressure and the trade winds ease, the cold water stops rising, the sea warms, and the desert coast gets heavy rain and floods. ← L06
    ENTRA: In El Niño years, the high pressure and the trade winds ease, and the cold water slows or stops rising. ← L06
    ENTRA: The sea warms, and the desert coast gets heavy rain and floods, mostly in the north. ← L06
  Diferença 5 (p2)
    SAI:   The dry side gets real rain too, but only high up, from December to March. ← L05
    ENTRA: The dry side gets real rain too, but mostly high up, and most of it from December to March. ← L05
  Diferença 6 (p2)
    SAI:   It does not stop at the border: with Chile's Atacama, it forms a desert belt more than 2,000 miles long. ← L17
  Diferença 7 (p3)
    SAI:   Rivers like the Supe come down from the mountains near the line, and each one leaves a strip of green across the desert. ← L09
    ENTRA: Rivers like the Supe come down from the mountains near the line, and their valleys run as strips of green across the desert. ← L09
  Diferença 8 (p3)
    SAI:   There stands Chan Chan, the Chimú capital, which UNESCO calls the largest earthen city of the Americas before Columbus. ← L22
    SAI:   A canal about 50 miles long once supplied it. ← L08
    SAI:   In the south, near Nazca, underground channels called puquios, commonly attributed to the Nazca culture, carry water to some fields, a 2012 study reports. ← L21
    ENTRA: There stands Chan Chan, the Chimú capital, which UNESCO describes as the largest earthen city of the Americas before Columbus. ← L22
    ENTRA: A canal about 50 miles long once watered the land around it. ← L08
    ENTRA: In the south, near Nazca, a 2012 study reports that underground channels called puquios carry water to some fields. ← L21
    ENTRA: They are commonly attributed to the Nazca culture. ← L21
  Diferença 9 (p3)
    SAI:   It did not put most of its people there. ← L03
    ENTRA: It did not put most of its people on the coast. ← L03
  Diferença 10 (p4)
    SAI:   Fewer than three in ten lived in the region the census calls the coast. ← L25
    ENTRA: Fewer than three in ten lived in the region the census calls the coast, which covers only part of the dry side. ← L25
  Diferença 11 (p4)
    SAI:   The coast became the largest of the three census regions between 1961 and 1972. ← L24
    ENTRA: The coast overtook the highlands as the most populous census region between 1961 and 1972. ← L24
  Diferença 12 (p4)
    SAI:   Later, the violence of the 1980s and '90s pushed many more. ← L26
    ENTRA: The political violence of the 1980s and '90s pushed many more. ← L26
  Diferença 13 (p4)
    SAI:   In 2022, Lima and Callao alone produced about two-fifths of Peru's economic output, by the statistics institute's estimate. ← L10
    SAI:   A large share were newcomers: in 1993, almost four in ten of Lima's residents had been born somewhere else. ← L11
    ENTRA: In 2022, the Lima region, with Callao, produced more than 40 percent of Peru's economic output, by the statistics institute's estimate. ← L10
    ENTRA: The city drew newcomers: in 1993, almost four in ten of Lima's residents had been born somewhere else. ← L11
  Diferença 14 (p4)
    SAI:   In May 1971, the government moved 180 families who had taken over a plot of land to a vast, semi-desert stretch of sand south of the city. ← L02
    ENTRA: In 1971, 180 families took over a plot of land, and more followed. ← L02
    ENTRA: The government set out to resettle about 7,000 families on a vast, semi-desert stretch of sand south of the city. ← L02
  Diferença 15 (p4)
    SAI:   By 1981, about one in four people in Lima lived in informal settlements, which Peruvians call barriadas, by census figures Peru's truth commission cites. ← L12
    ENTRA: Census figures cited by Peru's truth commission put about one in four of Lima's people in informal settlements by 1981. ← L12
    ENTRA: Peruvians call them barriadas. ← L12
  Diferença 16 (p5)
    SAI:   A weather station there, at Marcapomacocha, sits about 65 miles from downtown Lima in a straight line. ← L19
  Diferença 17 (p5)
    SAI:   Rómulo Cárhuaz, a watershed analyst at the utility, said in a 2024 interview that the releases run from May 1 to November 30. ← L07
    ENTRA: In remarks reported in 2024, Rómulo Cárhuaz, a watershed analyst at the utility, told its press office that the releases run from May 1 to November 30. ← L07
  Diferença 18 (p6)
    SAI:   She washes clothes once a week, or every two weeks, to save water. ← L14
    ENTRA: She said she washed clothes once a week, or every two weeks, to save water. ← L14
  Diferença 19 (p6)
    SAI:   On the city's northern edge, in Puente Piedra, a German magazine visited a cooperative of 42 families without water, sewers or electricity, in January 2024. ← L01
    SAI:   There, Virginia Martínez Morales, 30, a mother of three, ran a hose from a tank up the hill down to her door. ← L01
    SAI:   After a tanker truck slid down the slope and took three houses with it, drivers stopped going up the steepest streets. ← L01
    SAI:   Another resident, Tula Tinoco Espinoza, began carrying buckets. ← L01
    ENTRA: AFP reported that those deliveries were free. ← L13
    ENTRA: On the city's northern edge, in Puente Piedra, a German magazine described two cooperatives in a January 2024 report. ← L01
    ENTRA: In one, a 30-year-old mother of three, Virginia Martínez Morales, could pipe water from a tank to her front door. ← L01
    ENTRA: The other had 42 families without water, sewers or electricity. ← L01
    ENTRA: After a tanker truck slid down the slope there and took three houses with it, drivers stopped going up the steepest streets. ← L01
    ENTRA: A resident, Tula Tinoco Espinoza, began carrying buckets. ← L01
  Diferença 20 (p7)
    SAI:   In 2026, it still had no construction date. ← L18
    SAI:   Lima's is not the only tunnel across the line. ← L20
    SAI:   In the north, a tunnel about 12 miles long carries water from the Amazon side to farmland on the coast. ← L20
    ENTRA: As of late August 2026, that tunnel still had no construction date. ← L18, L20
```

## 5. O portão

`node roteiros/peru-agua/_ferramentas/gate.mjs`: exit 0, **PASSA**, sha `c803b5cf5e0b`. 2.019 palavras (≈ 10,97 min), 27
parágrafos, 128 frases, média 15,8, maior frase 31; gancho com 166 palavras até a assinatura (≈ 54 s), "But" na 44. Problemas:
nenhum. Taxas todas abaixo do teto (abre_and 2, abre_so 3, perguntas 2, frases_curtas 2, o resto 0); autoplágio vazio. Nenhuma
correção do portão foi necessária.

O alerta, decidido: `still` em "As of late August 2026, that tunnel still had no construction date." Aceito: é estado datado
(a data é a da leitura da Gestión, 30/08/2026, L18), a forma da R10; o Lucas relê os voláteis na semana da gravação.

`gate.mjs --derivados`: exit 0; o editor e a pronúncia citam `c803b5cf5e0b`; nenhum derivado velho. Os laudos de
`qc-roteiro/` continuam com "Revisão julgada: `87ea57b0abe5`", que é a revisão que eles julgaram. A cópia para a voz
(`out/peru-agua/roteiro.md`) ainda não existe.

## 6. O editor (`roteiro-editor.md`)

- Os 58 pares da lista, aplicados pelo aplicador (prova (e)). Conferido depois, por script: as 30 frases que entraram no texto
  falado estão todas, literais, no editor; das 29 que saíram, 24 sumiram (trocadas pela forma nova) e 5 ficaram riscadas (`~~…~~`,
  com a nota da r1: L15, L17, L19 e as duas de L20). A única frase velha ainda viva era a da medida do portão no topo.
- À mão, só isto: a linha "Revisão do roteiro" para `c803b5cf5e0b`, e o bloco "A medida do portão" refeito com a medida
  de agora (2.019 palavras, 128 frases, média 15,8, o alerta na frase nova do túnel), dizendo que as lentes leram a `87ea57b0abe5`
  e que o P01 não foi aplicado.

## 7. A pronúncia (`pronuncia.md`)

- **Nenhum nome novo entrou.** Os nomes das frases trocadas (Titicaca, Loreto, Humboldt, El Niño, Supe, Chan Chan, Chimú,
  UNESCO, Nazca, puquios, Callao, barriadas, Rómulo Cárhuaz, AFP, Puente Piedra, Virginia Martínez Morales, Tula Tinoco
  Espinoza) já estavam na folha.
- Saíram da voz: **Marcapomacocha** (L19) e **Atacama** (L17), que passaram à tabela de reserva com a pronúncia que tinham.
- Contagens refeitas: Chile 2 → 1 (só "the border with Chile"); AFP 1 → 2 ("AFP reported", L13); Peru e Peru's 21 → 20; Lima
  24 → 22; Amazon 8 → 7.
- A amostra proposta seguiu as frases de agora, literais (pedidos 2, 5, 7, 8, 10 e 12), e foi recontada: 2.484 caracteres,
  uns 320 créditos (nada foi gerado). Marcapomacocha saiu da lista do que o Lucas responde e da lista de Lima.
- A cópia para a voz: entraram "7,000 families" e "40 percent", e "In remarks reported in 2024" no lugar de "a 2024
  interview"; saíram 2,000, 65 e 12 miles e o "two-fifths"; a idade da Virginia virou "a 30-year-old mother of three".
  Atacama saiu do que pode subir à folha permanente.
- A linha "Revisão do roteiro" para `c803b5cf5e0b`, e uma nota da r1 no topo. A folha de antes ficou em
  `_trabalho/pronuncia-r1.antes.md` (sha256 `d147565a5701…`).

## 8. Os arquivos, depois

- `roteiros/peru-agua/roteiro-narrador.md`: `aec8d38aeeb2…` (texto falado `c803b5cf5e0b`).
- `roteiros/peru-agua/roteiro-editor.md`: `905e500cced0…`.
- `roteiros/peru-agua/pronuncia.md`: `f64a3bb83ace…`.
