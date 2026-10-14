# A lista da rodada 2, aplicada (14/10/2026)

Revisão do roteiro: `69bb7fb13954`

Texto falado `4c93f1712cf2` → `69bb7fb13954`. A lista é `_trabalho/lista-r2.json` (17 trocas, L01–L17, e 23 pares do
editor), feita sobre os laudos da bancada final (`qc-roteiro/*-r2-antigo.laudo.md`); o pedido ao escritor é
`_trabalho/pedidos-r2.json` (P01), que esta tarefa não aplica.

## 1. O aplicador

`node ferramentas/aplicar-lista.mjs zona-do-canal --lista=roteiros/zona-do-canal/_trabalho/lista-r2.json`

- `--seco`: exit 0, `SECO_OK`, sem recusas, avisos nem pendentes.
- Sem `--seco`: exit 0, `APLICADO`. A saída inteira está em `out/zona-do-canal/_tmp/aplicar-r2.saida.txt` (fora do git).
  - 17 itens aplicados, 15 diferenças, nenhuma frase sem item, nenhum item fora do diff.
  - Provas: aspas 49 → 49; numerais 135 → 135 (entram "2026" em L03 e "1937" em L04, os dois declarados; saem "1940" e
    "half" em L17, declarados); 13 parágrafos mudados, 28 → 28; os 9 REDIZER passaram; os 23 pares do editor casaram.
  - Cópias de antes: `_trabalho/roteiro-r2.antes.md` (sha256 `2cd9f46a…`) e `_trabalho/roteiro-editor-r2.antes.md`
    (sha256 `917dac71…`), as duas conferidas.
  - Gravados: `roteiro-narrador.md` (sha256 do arquivo `0f2e182b…`, texto falado `69bb7fb13954`) e `roteiro-editor.md`.
  - O portão rodado pelo aplicador antes e depois de gravar: PASSA (2.148 → 2.136 palavras, nenhum problema).

As 15 diferenças, em resumo (o SAI e o ENTRA literais estão na saída):

| Parte | Item | O que mudou |
|---|---|---|
| gancho | L12 | vírgulas em "and, under a 1903 treaty, its police…"; nenhuma palavra muda |
| p1 | L13 | a frase de 1912 e 1915 partida em duas |
| p2 | L08 | "…recruited largely from the United States, had been paid in gold." |
| p3 | L14 | "its employees paid at "U.S." rates … permission to come at all." |
| p3 | L10 | "They wrote in the Panama Canal Review, …: everyone "lived in rented quarters"…" |
| p3 | L17 | sai "In 1940, nearly half of the Zone's residents lived in military areas." |
| p4 | L04, L05 | "Until 1937, …"; "…a condition the 1937 law dropped, back to 1904." |
| p4 | L09 | "So the law that ran the ground left citizenship to the parents." |
| p5 | L11 | "In 1955, a new treaty promised the same base pay…" / "A 1958 law set it." |
| p5 | L15, L02 | "The store sorted its customers, too." / "…sold only to its employees and soldiers, their families, and certain residents." |
| p5 | L07 | "A State Department memo says Panama had insisted on that, calling…" |
| p5 | L16 | "The payroll had lost its old names." / "The division was still there." / "And the next fight was about a flag." |
| p7 | L06 | o par dos 30 meses e da Commission até 1999 passa para o fim do 2º parágrafo de p7, depois de "ceased to exist", Mondale e Vance |
| p7 | L01 | "Being born there, by itself, was never enough." |
| p7 | L03 | "The Panama Canal Authority, in 2026, gives its address as the Administration Building, in Balboa." |

## 2. O portão

`node roteiros/zona-do-canal/_ferramentas/gate.mjs`: exit 0, **PASSA**, sem correção. Saída em
`out/zona-do-canal/_tmp/gate-r2.saida.txt`.

- sha256 do texto falado `69bb7fb139546891637d54d7aed1f0ba8181eacb620b16bfb2ca9ec39db94771`.
- 2.136 palavras (≈11:37 a 184/min), 28 parágrafos, 153 frases, média 14,0, maior 32.
- Gancho: 166 palavras até a assinatura (≈54 s), "But" na palavra 49.
- Taxas todas abaixo do teto (abre_and 2,36, abre_so 3,31, perguntas 1,42, frases curtas 2,36; o resto 0); autoplágio vazio.
- 22 alertas de palavra: `citizens` ×12, `citizenship` ×3, `white` ×2, `sovereign` ×4, `segregat` ×1. O único novo é
  `citizenship` em "So the law that ran the ground left citizenship to the parents." (L09). Aceito: fala da lei de
  cidadania, não troca "born in the United States" por "citizens" nem nomeia grupo.

Depois do carimbo, `gate.mjs --derivados`: exit 0, PASSA, `roteiro-editor.md` e `pronuncia.md` citam `69bb7fb13954`
(saída em `out/zona-do-canal/_tmp/gate-r2-derivados.txt`). A cópia para a voz (`out/zona-do-canal/roteiro.md`) ainda não
existe.

## 3. O editor (`roteiro-editor.md`)

- **A cobertura:** as 139 frases do texto novo (partidas por fim de frase, com "U.S." protegido) aparecem inteiras, literais,
  no editor; nenhuma falta. Cada frase trocada tem a anotação do item da lista-r2 (os 23 pares do aplicador).
- **O que mudei à mão, além dos pares:**
  - "Revisão do roteiro" → `69bb7fb13954`.
  - "A medida do portão" refeita para `69bb7fb13954` (2.136, 153 frases, média 14,0, maior 32, 22 alertas com o
    `citizenship` novo explicado), dizendo que a `4c93f1712cf2` passou pela bancada final e que fica aberto o P01 da r2.
  - A tabela das partes: palavras e tempos de p1 (316), p2 (258), p3 (263), p4 (224) e p7 (330), com os tempos de
    p1 a p7 refeitos a 184/min; o "quase metade em área militar" de p3 marcado como só na tela (L17); a descrição de p7
    com o fecho novo (L01) e a ACP em 2026 (L03).
  - A promessa S2 com as vírgulas novas do gancho (L12).
  - O parágrafo dos orçamentos: 2.136 depois da lista-r2 (p1 −1, p2 +3, p3 −13, p4 −2, p7 +1), a 14 do teto, que é o
    orçamento do P01; os pedidos à voz agora entre 45 e 105 palavras (o maior era o dos soldados, 106 → 94 com L17; agora
    é o 2º parágrafo do gancho).
  - As chamadas: a inscrição termina na palavra ≈909 (≈4:56, ≈41 % de 11:57); a reserva na ≈826 (≈38 %); o pedido de
    comentário com ≈32 palavras, de ≈11:26 a ≈11:37.

## 4. A pronúncia (`pronuncia.md`)

- Nenhum nome próprio novo e nenhuma sigla nova (vocabulário que entrou: "2026", "They", "customers", "enough",
  "parents", "too"; que saiu: "Today", "U.S.-rate", "changed", "followed", "nearly", "papers", "parents'").
- "Revisão do roteiro" → `69bb7fb13954`, e uma nota de carimbo da r2 no topo.
- A linha "U.S.-rate" virou "U.S." rates (2 vezes: p3, 12º parágrafo, desde L14; p7, 27º, que já existia), hipótese, com
  o risco da pausa depois de "U.S." e a reserva sem as aspas.
- O ano 2026 → twenty twenty-six, nos anos da cópia para a voz.
- O pedido 4 da amostra refeito com as frases novas de L14 e L10 (1.474 caracteres, eram 1.482); os outros sete pedidos
  conferidos contra o texto novo e iguais. "U.S.-rate" trocado por "U.S." rates nas listas de escuta e de reserva.
- As posições por parágrafo continuam valendo: 28 parágrafos, e Department of Defense, Albrook e Mondale seguem no 26º.

## 5. O que fica para depois

- O P01 de `_trabalho/pedidos-r2.json` (1º parágrafo de p7, no máximo +14 palavras: o total iria a 2.150, o teto).
- O `_trabalho/plano-final.json` ainda tem as pontes antigas de p4 e p5.
- A revisão `69bb7fb13954` não passou por lente, cético nem Lucas.
