# A lista r2b, aplicada (vídeo 5, `atlantico-fundo`)

Feita e aplicada pela Sala em 26/10/2026, à noite, depois da bancada final da rodada 2. Sem commit nesta etapa, sem rede no
aplicador, sem crédito.

## 1. Por que uma lista da Sala, e não uma rodada inteira

A bancada final da rodada 2 julgou `432dcb4041d4`. Os laudos foram renomeados para `qc-roteiro/*-r2b.laudo.md`, porque são a
entrada desta lista.

| Lente | Veredito | O que deixou |
|---|---|---|
| roteiro | RESSALVA | 2 médios e 3 leves: "depois destas, parar" |
| clareza | RESSALVA, nota 8,6 | 2 leves; passa pelo critério do ofício |
| locução | RESSALVA, nota 8 | 2 médios e 1 leve |
| fatos | PASS, nota 9,5 | 282 de 282 linhas confirmadas, sem achado |
| ouvinte a frio | FAIL de ritmo | 4 graves de estrutura |

Os graves do ouvinte a frio são o meio longo: p7, o Atlântico Sul; p3, a geologia; p6, a República Dominicana contra os EUA; e o
peixe que some por ~7 min. Nenhum aponta um fato falso. Ele propõe cortes de 2 a 3 min nas camadas da pauta (p4 e p7). Isso não é
troca de frase: vai ao Lucas, com o roteiro.

Por isso a lista é só de trocas seguras, e a Sala a fez à mão, no formato do aplicador.

## 2. Os itens (`_trabalho/lista-r2b.json`)

| Id | Op | Lente | Antes → depois |
|---|---|---|---|
| L67 | ESTREITAR | roteiro 1 (N51) | "Their account, published the next year…" → "The report, published the next year…" |
| L68 | REDIZER | roteiro 2 (C28) | "The floor the sonar found…" → "The floor the expedition's sonar found…" |
| L69 | ENFRAQUECER | locução A1 | "eight years earlier" → "about a decade earlier" |
| L70 | REDIZER | clareza A1, locução A2 | "a tilted slab of limestone" → "a tilted layer of limestone" |
| L71 | REDIZER | clareza A2 | "how deep." → "how deep it got." |
| L72 | ESTREITAR | roteiro 3, locução A3 | "Under the trench, rotated blocks of rock point to…" → "Under the trench's deepest part, rotated blocks of rock indicate…" |
| L73 | REDIZER | roteiro 4 | "in waters claimed by the Dominican Republic" → "in the Dominican Republic's waters" |

**L67:** a fonte diz "the report", sem autor.

**L68:** o 1.200 é contra o sonar da expedição, e p6 abre com o estudo de 2019.

**L69, o ano do Challenger está em disputa** (F22, C29, N52):
- as cópias do disco dizem 26/03/1875;
- o mesmo IHR de 1936 põe o navio "cruising between St. Thomas, Virgin Islands and the Bermudas", que é o trecho de março de 1873.

"About a decade" vale para os dois anos. Na tela, sem o ano: o alfinete, a tela da sondagem e o marcador do medidor perderam o
"1875" no editor.

**L70:** uma frase antes, "slabs" foi definido como as placas.

**L71:** sem o "it got", o 24.000 logo depois soava como a resposta da discordância.

**L72:**
- o USGS põe os blocos girados só sob o setor mais fundo, a oeste;
- "indicate" é o verbo da fonte;
- "of rock point" soava como nome de lugar.

**L73:** é o mesmo substantivo das "U.S. waters" (voz §2), e a zona dominicana não está em disputa na fonte.

O editor recebeu 16 pares:
- as frases trocadas;
- as notas do Challenger: o alfinete, a tela, o marcador, a lista de telas, o destino das cifras e a tabela das partes;
- o "44 a 105" velho, que passou a "44 a 109" (roteiro 5).

**Fora da lista:**
- **"Under the trench's deepest part" × o eco "point to" que o editor queria:** venceu o ouvido (locução A3).
- **A Argentina ao lado de "no political meaning" (clareza, considerado):** o porquê técnico seria fato novo.
- **O ouvinte a frio inteiro:** vai ao Lucas.

## 3. O aplicador

`node ferramentas/aplicar-lista.mjs atlantico-fundo --lista=roteiros/atlantico-fundo/_trabalho/lista-r2b.json`

- Com `--seco`: SECO_OK, exit 0.
- Sem `--seco`: APLICADO, exit 0.
- 7 itens e 7 diferenças.
- Nenhuma frase sem item, nenhuma recusa, nenhum aviso, nenhum pendente.
- Os 16 pares do editor casaram uma vez cada.

Texto falado: `432dcb4041d4f0e31fab934bdd956370fca43cffcefe3d17e537b2af01f3dfb5` →
`ffafacc2329b4a537328100990204af8d1aa885d2e3290d8e36adad4d4f78b3a`.

As cópias de antes, conferidas pelo sha256:

| Cópia | sha256 |
|---|---|
| `_trabalho/roteiro-r2b.antes.md` | `7059fa34…` |
| `_trabalho/roteiro-editor-r2b.antes.md` | `b60d9d1a…` |

O diff, frase a frase:

| Parte | Sai | Entra |
|---|---|---|
| p1 | The trench itself had been found eight years earlier, by the British research ship HMS Challenger, under Captain Nares, far to the east. | The trench itself had been found about a decade earlier, by the British research ship HMS Challenger, under Captain Nares, far to the east. |
| p2 | The sources disagree on exactly how deep. | The sources disagree on exactly how deep it got. |
| p2 | Their account, published the next year, described them as snailfish, a family of fish. | The report, published the next year, described them as snailfish, a family of fish. |
| p3 | By the agency's reconstruction, a tilted slab of limestone starts more than 4,000 feet above sea level. | By the agency's reconstruction, a tilted layer of limestone starts more than 4,000 feet above sea level. |
| p3 | Under the trench, rotated blocks of rock point to a sinking floor. | Under the trench's deepest part, rotated blocks of rock indicate a sinking floor. |
| p6 | The floor the sonar found is about 1,200 feet shallower. | The floor the expedition's sonar found is about 1,200 feet shallower. |
| p6 | Using public data from eight older surveys, it placed that point about 36 miles west of the sonar's spot, in waters claimed by the Dominican Republic. | Using public data from eight older surveys, it placed that point about 36 miles west of the sonar's spot, in the Dominican Republic's waters. |

## 4. O portão

`gate.mjs` PASSA, sem problema:
- 2.029 palavras (≈ 11:02);
- 29 parágrafos e 160 frases;
- média de 12,7 palavras por frase, e a maior com 28;
- gancho com 166 palavras e o "But" na palavra 49;
- os mesmos 8 alertas decididos.

Antes de aplicar, as duas regras novas, [challenger-ano] e [relato-de-quem], reprovavam `432dcb4041d4` de propósito. A prova do
portão dá 135 de 135, com o caso novo do `--derivados`: os laudos com sufixo de rodada (`-r1`, `-r2`, `-r2b`) ficam fora, como os
`-antigo`.

## 5. O dossiê, o editor e a pronúncia

**Dossiê:**
- C29 e N52;
- F22 em disputa, com a afirmação e a nota novas;
- F15 ("the Dominican Republic's waters"), F38 ("the fish the crew had reported": o relato é de 1965) e F44 ("layer");
- a nota do C11.

**Editor:** carimbo `ffafacc2329b`, a medida do portão e o bloco "A lista r2b da Sala".

**Pronúncia:**
- carimbo `ffafacc2329b`;
- os pedidos 3 e 4 da amostra postos em dia;
- o `pronuncia-amostra-conferir-r2.py` dá 14 de 14, e a amostra continua com 2.566 caracteres;
- nenhum nome novo na voz.

## 6. O que falta

- A conferência de fatos das 7 frases trocadas, com a tabela e o laudo de fatos postos no sha novo.
- A leitura do Lucas, com a pergunta do ritmo, que o ouvinte a frio levantou.
