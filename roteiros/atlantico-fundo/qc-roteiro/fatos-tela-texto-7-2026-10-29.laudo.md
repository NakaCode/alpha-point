# Laudo-delta · verificador de fatos · o conserto 7 do texto de tela · atlantico-fundo (vídeo 4) · 29/10/2026

Setor Texto e fatos, tarefa `atlantico-fundo-texto-7`, passo `art` (os textos da arte-5: a s67 do espectador r2, a fonte da s60 e as quebras
da s55 e da s67), data-base 29/10/2026.

**O que foi julgado:** toda entrada que mudou no `out/atlantico-fundo/textos-tela.json` entre `58a328d0…` (o fim da `atlantico-fundo-texto-6`)
e `a5de351a4284e24031b4d2e35309adea5b4f128d212593137901964609b0b02d` (o conserto 7 do `redator-de-tela`), por cobertura, só por diff, sem
rede, num `verificador-de-fatos` em `effort: 'high'` (o da texto-4, retomado).

**O laudo do verificador vai abaixo como ele o gravou,** copiado sem mudar uma letra: `%TEMP%/claude/vf-atl-C/laudo-texto-7.md`, sha256
`84763b9a7cddb1245dc6bf88b65359aad7d51369db69cf801c767c83a96fbc1f`.

---

COBERTURA: 10 de 10 (diff 58a328d0 → a5de351a do out/atlantico-fundo/textos-tela.json, entrada a entrada, por script meu, sem partir da lista do redator: 9 entradas de `_textos_por_cena` (7 mudadas e 2 novas) e 1 de `rotulos_dado`. Resultado: 5 CONFIRMADA, 5 NADA A CHECAR, 0 DIVERGE, 0 NÃO ACHEI, 0 REFUTADA)

# Laudo de fatos · atlantico-fundo · tarefa atlantico-fundo-texto-7 (conserto 7) · verificador-de-fatos

- **Data-base:** 29/10/2026, sem rede, só com as cópias de `midia/atlantico-fundo/fontes/`.
- **Objeto:** `out/atlantico-fundo/textos-tela.json`, sha256 `a5de351a4284e24031b4d2e35309adea5b4f128d212593137901964609b0b02d`, contra `_tmp/redator/antes-texto-7/textos-tela.json`, sha256 `58a328d0911aef249b2ba3341d9b452cba961f6be742dd39fb4dbd10c0052ad4`. Conferi os dois.
- **O diff** (`vf-atl-C/diff7.py`):
  - `_textos_por_cena` foi de 416 para 418 entradas: 7 saíram e 9 entraram, ou seja, 7 mudaram e 2 são novas;
  - `rotulos_dado` tem 1 entrada mudada;
  - `nao_vai_para_tela`, `cards_pessoa`, `glossario` e `_avisos_do_ano` estão iguais;
  - mudaram também `_regras_de_serie`, `_ritmo_max`, `_instrucoes_para_a_arte`, `_quem` e `_consertos`, que não vão à tela.
- **Nota: 10/10.** As duas pontas da conta conferem na fonte, a conta fecha e nenhum texto partido perdeu palavra.

Abreviações: [BON] `02-bongiovanni-2021-gdj3.122.txt`; [IHO-PRO] `09-iho-A3-PRO-3.3-EN-v1.txt`; [IHO-DEC] `09-iho-A3-decisoes.txt`; [SJ19] `01-04-stewart-jamieson-2019-earscirev.txt`.

| id | cena | papel | o que mudou | veredito | a fonte e o trecho |
|---|---|---|---|---|---|
| TC7-001 | s67 · 39,234–41,834 | credito (novo) | Sources: Bongiovanni et al., 2021; IHO, 2023 (dono do "~330 MI NORTH OF 60°S") | CONFIRMADA | **Ponta norte:** [BON] l. 330–332, "the deepest point in the entire trench observed in Meteor Deep as 8,265 ± 13 m uncertainty (55.230°S/26.173°W)". **Ponta sul:** [IHO-PRO] l. 106–108, "the northern geographic limit of the Southern Ocean is defined by the parallel of Latitude 60°S". **O ano:** [IHO-DEC] l. 123–125, "PRO 3.3: The Assembly: a) approved the proposed IHO Resolution on the recognition of the Southern Ocean"; a sessão é a A-3 de 2023 (l. 16, "Doc. A3_2023_G_01_EN_Rev4"). **A conta**, refeita por integração do arco de meridiano no WGS84 de 55,230°S a 60°S (`vf-atl-C/arc7.py`): **531,24 km = 330,10 mi**, como diz o redator; na esfera dá 530,4 km = 329,6 mi. "~330 MI" vale nas duas. A distância ao paralelo se mede pelo meridiano, que é o caminho mais curto até ele. **"IHO, 2023"** é a mesma forma da pílula "SOUTHERN OCEAN (IHO, 2023)" e do glossário. É conta nossa entre duas pontas com dono, na forma do s04 e do s63 (TA015, TC4-017). O crédito entra e sai com o número |
| TC7-002 | s67 · 39,234–41,834 | cota | "~330 MI NORTH OF 60°S": só a nota | NADA A CHECAR | Texto e tempo iguais; já era a V43 (531,2 km = 330,10 mi), e a nota agora aponta o crédito |
| TC7-003 | — | rotulos_dado s67 (s68) | `fonte` com as duas pontas e a conta | CONFIRMADA | Igual ao TC7-001: as linhas citadas (BON 330–332, IHO-PRO 107–108, IHO-DEC 123–125) conferem, e a conta também. `valor_exato` "≈ 330 mi" não mudou. Observação de forma, já feita no TC4-042: `"cena": "s67 (s68)"` não é um id de cena |
| TC7-004 | s67 · 15,567–26,7 | rotulo (novo) | South Sandwich Trench, preso à linha turquesa dentro da lupa | CONFIRMADA | A linha turquesa é a marca do sul, a profundidade do ponto mais fundo desta fossa. Até "settled" ela está nos 27,651 "MOST PUBLISHED" ([SJ19], o mais publicado para o ponto mais fundo dela). Depois sobe para 27,116 = 8.265 m, que pelo [BON] l. 330–332 é "the deepest point in the entire trench … Meteor Deep". Nos dois momentos, a marca é o ponto mais fundo da South Sandwich Trench, primeiro pelo número antigo e depois pelo do sonar. O rótulo usa o nome da fossa da cena e a mesma grafia do rótulo de 0–7,633. Não afirma nada novo. O "Source: Bongiovanni et al., 2021" está no ar de 13,567 a 26,7 |
| TC7-005 | s67 · 18,9–26,7 | cota | "27,116 ± 43 FT (8,265 ± 13 M)" vai para a lupa, partido em "27,116 ± 43 FT" / "(8,265 ± 13 M)" | NADA A CHECAR (a forma não perdeu nada) | Antes: `27,116 ± 43 FT (8,265 ± 13 M)`. Agora: `27,116 ± 43 FT\n(8,265 ± 13 M)`. Mesmos caracteres, com a quebra no lugar do espaço; o "(8,265 ± 13 M)" ficou. O número continua sendo o do Meteor Deep ([BON] l. 330–332; 8.265 m = 27.116,1 ft; 13 m = 42,7 ft ≈ 43), e o Meteor Deep é o ponto mais fundo da South Sandwich Trench, que o rótulo logo acima nomeia (TC7-004). A pílula "Meteor Deep" fica no anel, na cor turquesa. A voz diz "The trench's deepest point, the Meteor Deep" |
| TC7-006 | s67 · 18,9–26,7 | rotulo | "Meteor Deep": só a nota (fica no mapa e sobe ~40 px) | NADA A CHECAR | Texto e tempo iguais; muda só a posição |
| TC7-007 | s67 · 13,567–26,7 | cota | "DECEMBER 2018 · SONAR · 27,487 FT" vai até 26,7 (antes 15,567), partido em "DECEMBER 2018" / "SONAR · 27,487 FT" | CONFIRMADA (tempo e quebra; nenhuma palavra perdida) | Os dois textos têm as mesmas palavras e números. Saiu só o "·" entre "2018" e "SONAR", trocado pela quebra, e o sentido não muda. No tempo novo, o dono é o "Source: Bongiovanni et al., 2021" de 13,567 a 26,7 ([BON] l. 452–457, "8,378 ± 5"; 8.378 m = 27.486,9 ft). É o número de Porto Rico que o colchete de 371 ft compara (8.378 − 8.265 = 113 m = 370,7 ft) |
| TC7-008 | s60 · 3,467–21,367 | credito | "Source: Stewart & Jamieson, 2019": t1 vai de 19,1 para 21,367 | CONFIRMADA | De 19,1 a 21,367 continuam no ar "27,585 FT (8,408 M) · 2019 ESTIMATE" (15,433–21,367), a estimativa de 2019 de [SJ19] (já CONFIRMADA), e "≈ 36 MI" (16,533–21,367), a distância medida da estimativa de Stewart & Jamieson até o anel (57,3 km = 35,6 mi, pauta-geo). O crédito agora sai com os números dele. Nenhum número fica sem dono. As 4 linhas de crédito por ~2 s são questão de forma (identidade §4.2), não de fato |
| TC7-009 | s55 · 0–7,433 | cota | "DECEMBER 2018 · SONAR · 27,487 FT" partido em "DECEMBER 2018 · SONAR" / "27,487 FT" | NADA A CHECAR | Mesmas palavras e números; saiu só o "·" entre "SONAR" e "27,487". Tempo igual |
| TC7-010 | s55 · 2,867–6,3 | cota | "SUB GAUGES · WITHIN ~7 FT OF THE SONAR" partido em "SUB GAUGES" / "WITHIN ~7 FT" / "OF THE SONAR" | NADA A CHECAR | Mesmas palavras ("SUB", "GAUGES", "WITHIN", "~7", "FT", "OF", "THE", "SONAR"); saiu só o "·". Tempo igual. O "Source: Bongiovanni et al., 2021" (2,867–6,3) continua com ele |

## As contas refeitas

- Arco de meridiano no WGS84, de 55,230°S a 60°S: 531,24 km = 330,10 mi. Na esfera de R = 6.371 km: 530,4 km = 329,6 mi.
- 8.265 m = 27.116,1 ft; 13 m = 42,7 ft; 8.378 m = 27.486,9 ft; 8.378 − 8.265 = 113 m = 370,7 ft.

## Para o redator-de-tela

Nenhum conserto.

## Para a Sala

- **NÃO ACHEI:** nenhum. Não houve leitura de rede.
- **Ao qc-visual, no quadro (condição de desenho, não de texto):** na lupa da s67, o "South Sandwich Trench" e o "27,116 ± 43 FT / (8,265 ± 13 M)" ficam presos à linha turquesa, e o "DECEMBER 2018 / SONAR · 27,487 FT" à laranja. Se os dois blocos trocarem de linha, o número passa a dizer a profundidade da outra fossa.
- **Forma, não fato:** na s60, de 19,333 a 21,367, ficam 4 linhas de crédito no ar. É decisão da Sala e da Arte, e a nota já pede o check-overlap.

## A conclusão

CHECADO E LIMPO: os 10 itens têm veredito, nenhuma palavra se perdeu nas quebras e todas as contas fecham.

NOTA: 10/10
VEREDITO: PASS

---

## Fecho do setor

COBERTURA: 10 de 10 (5 CONFIRMADA, 5 NADA A CHECAR, 0 DIVERGE, 0 NÃO ACHEI, 0 REFUTADA), sobre o `textos-tela.json` `a5de351a…`.

VEREDITO: PASS
