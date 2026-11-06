COBERTURA: 146 de 146

# Laudo-delta de tela · verificador-de-fatos · big-sur (vídeo 5) · tarefa big-sur-texto-3

- **Data-base:** 06/11/2026. Nenhum volátil novo nesta rodada (os da s53 não mudaram de texto; a releitura é da Sala, antes de publicar).
- **O objeto:** `out/big-sur/textos-tela.json`, sha256 `70c95797ba57b46e5d0c8d036b17acf779a49fb8f870baee456d0761226084a8` (379 textos,
  51 cenas), contra o de antes, `71405fb4c7b14bb7304763e8e79940a9d8053654e6c91fc0f327b56f4cef4e53` (`out/big-sur/_tmp/redator/t3-antes/`),
  julgado no laudo de tela `fatos-tela.laudo.md` (VT-001 a VT-471, PASS 10/10). A mídia, contra o `conferencia-midia.json`
  `470095dc159999582beb777f5ed22e35769715010b2c60000904280cea545bb1`. Os HTML lidos como texto: `s58.html` `0ba1a072…`, `s47.html` `c8169e63…`.
- **A roupa** (`marca/agentes/verificador-de-fatos.md`) existe e foi lida, com o ofício inteiro e a identidade §7.
- **Como a lista foi derivada (o denominador, 146):**
  - **129 por script** (`out/big-sur/_tmp/vf-bs-D/delta.py` e `gerar.py`): toda entrada de `_textos_por_cena` com QUALQUER diferença entre
    o arquivo de antes e o de agora (107: 45 com texto ou tempo mudado, 62 só com anotação da caça), mais as 22 entradas de `_avisos_do_ano`,
    que ganharam `_vai_a_tela` (e, na s33, o t0). O `rotulos_dado` e o card não mudaram (`vaitela.py`). Nenhum texto foi apagado, reordenado
    ou criado: o índice `[n]` é o de antes, e o id é o VT-### do laudo anterior (VT = n+1).
  - **17 à mão, pelo pedido:** os 8 textos da s58 (T6, VT-348 a VT-355), os 2 números que a barra da s47 desenha (T7, VT-260 e VT-261) e
    7 escalas: VT-462 a VT-466 do laudo anterior, que tocam o [333], a s58 e a s47, e duas novas, VD-001 (os calendários da s58) e VD-002
    (a barra da s47).
  - **O que o script não pega:** o sentido. Por isso li cada um dos 45 textos mudados contra o de antes, e as duas cenas de T6 e T7 no HTML.
    O laudo tem mais itens que o script achou (os 17), nunca menos.
- **O que já tinha veredito se cita pelo id, sem refazer.** Os 31 da quebra: o texto com o ⏎ lido como " · " é o de antes, letra a letra,
  nos 31 (`delta.py`), e em nenhum a quebra separa um número do dono dele ou muda a atribuição; o veredito é o do VT-###. Os 11 de tempo: o
  texto não mudou, e o tempo novo não muda nenhuma afirmação (as condições que o qc confere vão na linha). As 62 anotações: texto e tempo
  iguais.
- **A conferência do `_vai_a_tela`** (`vaitela.py`, `conferir.py`): 34 entradas com `false`, 32 com `true`, 313 sem a chave (vão). Toda
  entrada que vai à tela (`true` ou sem a chave) tem veredito no laudo anterior ou neste: 0 sem veredito. As que vão com "nada a checar" são os
  trechos declarados sem texto, os títulos de painel da s58 e a pergunta do comentário; o único texto novo que vai e não tinha veredito é o
  [270], julgado aqui. Os 4 marcadores da caça que não vão (VT-207, VT-232, VT-321, VT-346) ficam "nada a checar". Os 22 avisos do ano têm o
  mesmo `_vai_a_tela` do texto de aviso que lhes corresponde: 22 de 22.

NOTA: 9/10. Nenhum número errado na tela, nenhuma citação diverge e a aritmética fecha. Os 3 `corrigir` são periféricos: a legenda nova da s39
promete um dólar constante que a fonte não dá, a s58 não diz na tela o que um quadradinho vale, e a barra da s47 desenha uma proporção que
nenhuma fonte sustenta. Cada um tem o conserto de uma linha.

**Placar:** 146 itens · **136 confirmados** · **3 corrigir** · **0 não conferidos** · **7 nada a checar**. Nenhuma REFUTADA. O delta foi
**CHECADO POR INTEIRO**. Os 7 "nada a checar": os 4 marcadores da caça que não vão à tela e os 3 títulos de painel da s58.

## A tabela

Uma linha por item. "VT-### (…)" é o veredito do laudo anterior, citado; a nota diz o que conferi nesta rodada.

| id | cena | texto (⏎ = quebra) | mudança | veredito | fonte ou id citado | conserto |
|---|---|---|---|---|---|---|
| VT-001 | s01 | Big Sur, California | anotação da caça | confirmada | VT-001 (VP-B-040; conferencia-midia.json candidatos[0]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-002 | s01 | Photo from 2023 | anotação da caça | confirmada | VT-002 (VP-B-041; conferencia-midia.json candidatos[0]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-003 | s01 | Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0 | anotação da caça | confirmada | VT-003 (VP-B-042; conferencia-midia.json candidatos[0]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-004 | s02 | Photo from 2023 | anotação da caça | confirmada | VT-004 (conferencia-midia.json candidatos[37]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-005 | s02 | Mavic of Steel / Wikimedia Commons⏎CC BY-SA 4.0 | quebra (T1) | confirmada | VT-005 (conferencia-midia.json candidatos[37]) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-015 | s03 | 1,474⏎CENSUS DISTRICT · 2020 | quebra (T1) | confirmada | VT-015 (VP-A-008, R004, R013, R032) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-023 | s05 | Big Sur coast, California | anotação da caça | confirmada | VT-023 (VP-B-043; conferencia-midia.json candidatos[2]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-024 | s05 | Photo from 2013 | anotação da caça | confirmada | VT-024 (VP-B-044; conferencia-midia.json candidatos[2]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-025 | s05 | David Iliff / Wikimedia Commons · CC BY-SA 3.0 | anotação da caça | confirmada | VT-025 (VP-B-045; conferencia-midia.json candidatos[2]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-034 | s07 | NEARLY 1,000 PEOPLE · 1880s⏎MONTEREY COUNTY PLAN (1986) | quebra (T1) | confirmada | VT-034 (VP-A-021, R012, R022, R092) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-040 | s09 | Highway 1, Big Sur | anotação da caça | confirmada | VT-040 (VP-B-084; conferencia-midia.json candidatos[38]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-041 | s09 | Photo from 2024 | anotação da caça | confirmada | VT-041 (VP-B-085; conferencia-midia.json candidatos[38]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-042 | s09 | Caltrans | anotação da caça | confirmada | VT-042 (VP-B-086, VP-B-123; conferencia-midia.json candidatos[38]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-043 | s09 | Mud Creek, Big Sur | anotação da caça | confirmada | VT-043 (VP-B-064, VP-B-066; conferencia-midia.json candidatos[39]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-044 | s09 | Photo from 2017 | anotação da caça | confirmada | VT-044 (VP-B-065; conferencia-midia.json candidatos[39]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-051 | s12 | Highway 1, Big Sur | anotação da caça | confirmada | VT-051 (VP-B-046; conferencia-midia.json candidatos[4]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-052 | s12 | Photo from 2012 | anotação da caça | confirmada | VT-052 (VP-B-047; conferencia-midia.json candidatos[4]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-053 | s12 | Fred Moore / Wikimedia Commons · CC BY 2.0 | anotação da caça | confirmada | VT-053 (VP-B-048; conferencia-midia.json candidatos[4]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-056 | s13 | BIG SUR CCD⏎MONTEREY COUNTY | quebra (T1) | confirmada | VT-056 (VP-A-035, VP-A-262, VP-A-332) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-073 | s15 | Source: U.S. Census Bureau, 2020 Census | tempo (T2, T4 ou RITMO) | confirmada | VT-073 (VP-A-050, VP-A-057) — o crédito do Census inteiro no quadro 0 (T4), continuando o da s13; o texto e a fonte são os mesmos | — |
| VT-074 | s15 | Carmel | tempo (T2, T4 ou RITMO) | confirmada | VT-074 (VP-A-292) — Carmel entra em 31,5, na palavra "Carmel"; o rótulo de lugar não muda de lugar nem de sentido | — |
| VT-075 | s15 | SAN LUIS OBISPO COUNTY | tempo (T2, T4 ou RITMO) | confirmada | VT-075 (VP-A-298) — SAN LUIS OBISPO COUNTY entra em 31,967, um quadro antes de "down", dentro de "down to the next county": é o condado vizinho ao sul (VP-A-298); 0,43 s antes de "next" não antecipa outra afirmação | — |
| VT-080 | s18 | Big Sur coast, California | anotação da caça | confirmada | VT-080 (VP-B-043; conferencia-midia.json candidatos[40]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-081 | s18 | Photo from 2013 | anotação da caça | confirmada | VT-081 (VP-B-044; conferencia-midia.json candidatos[40]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-082 | s18 | David Iliff / Wikimedia Commons · CC BY-SA 3.0 | anotação da caça | confirmada | VT-082 (VP-B-045; conferencia-midia.json candidatos[40]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-096 | s19 | “DROP PRECIPITOUSLY TO THE SEA”⏎MONTEREY COUNTY PLAN (1986) | quebra (T1) | confirmada | VT-096 (VP-A-073) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-097 | s20 | Coast near Big Sur, California | anotação da caça | confirmada | VT-097 (VP-B-058, VP-B-059, VP-B-060, VP-B-121; conferencia-midia.json candidatos[10]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-100 | s21 | Highway 1, Big Sur | anotação da caça | confirmada | VT-100 (VP-B-046; conferencia-midia.json candidatos[41]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-101 | s21 | Photo from 2012 | anotação da caça | confirmada | VT-101 (VP-B-047; conferencia-midia.json candidatos[41]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-102 | s21 | Fred Moore / Wikimedia Commons · CC BY 2.0 | anotação da caça | confirmada | VT-102 (VP-B-048; conferencia-midia.json candidatos[41]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-106 | s21 | HUNTER-LIGGETT MILITARY RESERVATION⏎1986 PLAN | quebra (T1) | confirmada | VT-106 (VP-A-274, VP-A-328) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-119 | s23 | Highway 1 | tempo (T2, T4 ou RITMO) | confirmada | VT-119 (VP-A-080) — o eixo Highway 1 entra em 14,234 ("way"); o perfil continua o mesmo | — |
| VT-122 | s24 | ≈ HALF FEDERAL LAND⏎MONTEREY COUNTY PLAN (1986) | quebra (T1) | confirmada | VT-122 (VP-A-093, VP-A-270) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-157 | s31 | NEARLY 1,000 PEOPLE · 1880s⏎MONTEREY COUNTY PLAN (1986) | quebra (T1) | confirmada | VT-157 (VP-A-119) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-163 | s31 | Photo from 2023 | anotação da caça | confirmada | VT-163 (VP-B-041; conferencia-midia.json candidatos[44]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-164 | s31 | Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0 | anotação da caça | confirmada | VT-164 (conferencia-midia.json candidatos[44]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-173 | s33 | Monterey | tempo (T2, T4 ou RITMO) | confirmada | VT-173 (VP-A-292) — Monterey entra em 10,0, um quadro antes de "from" ("from Monterey") | — |
| VT-174 | s33 | Big Sur Valley | tempo (T2, T4 ou RITMO) | confirmada | VT-174 (VP-A-292) — Big Sur Valley entra em 9,433, com a foto da sequoia ("by stagecoach") | — |
| VT-175 | s33 | Photo from 2023 | tempo (T2, T4 ou RITMO) | confirmada | VT-175 (VP-B-076; conferencia-midia.json candidatos[22]) — o aviso entra em 9,433 com o rótulo; casa com o _avisos_do_ano [14] (t0 9,433). Condição para a Arte e o qc: a foto não aparece antes do aviso, salvo o fade de entrada (o mesmo intervalo de 0,3 s entre crédito e aviso que o laudo anterior aceitou: 5,467/5,767) | — |
| VT-176 | s33 | Marty Aligata / Wikimedia Commons · CC BY-SA 4.0 | tempo (T2, T4 ou RITMO) | confirmada | VT-176 (VP-B-077; conferencia-midia.json candidatos[22]) — o crédito de Aligata entra em 9,133 ("by"), antes do aviso e do rótulo, como antes | — |
| VT-183 | s35 | Bixby Creek Bridge | anotação da caça | confirmada | VT-183 (VP-B-078, VP-A-135; conferencia-midia.json candidatos[24]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-184 | s35 | Photo from 2025 | anotação da caça | confirmada | VT-184 (VP-B-079; conferencia-midia.json candidatos[24]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-185 | s35 | Jav72 / Wikimedia Commons · CC BY-SA 4.0 | anotação da caça | confirmada | VT-185 (VP-B-080; conferencia-midia.json candidatos[24]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-187 | s36 | San Quentin⏎3 TEMPORARY CAMPS | quebra (T1) | confirmada | VT-187 (VP-A-286, VP-A-136, VP-A-323) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-193 | s37 | “ENRAGED”⏎MONTEREY COUNTY PLAN (1986) | quebra (T1) | confirmada | VT-193 (VP-A-141) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-196 | s38 | © MapTiler © OpenStreetMap contributors | anotação da caça | confirmada | VT-196 (VP-A-303; identidade §6) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-199 | s38 | 1934 | anotação da caça | confirmada | VT-199 (VP-A-311) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-200 | s38 | 1934 | anotação da caça | confirmada | VT-200 (VP-A-143, VP-A-311) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-201 | s38 | PFEIFFER BIG SUR STATE PARK | anotação da caça | confirmada | VT-201 (VP-A-143) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-202 | s38 | PFEIFFER BIG SUR STATE PARK | anotação da caça | confirmada | VT-202 (VP-A-143, VP-A-273) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-203 | s38 | 1934 · SOLD TO THE STATE⏎MONTEREY COUNTY PLAN (1986) | quebra (T1) | confirmada | VT-203 (VP-A-143, VP-A-312, VP-A-146) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-204 | s38 | 1934 · SOLD TO THE STATE⏎MONTEREY COUNTY PLAN (1986) | quebra (T1) | confirmada | VT-204 (VP-A-143, VP-A-312) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-205 | s38 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | anotação da caça | confirmada | VT-205 (VP-A-145) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-206 | s38 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | anotação da caça | confirmada | VT-206 (VP-A-145) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-207 | s38 | Pfeiffer Big Sur State Park | anotação da caça | nada a checar | VT-207 (—) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-215 | s39 | In 1937 dollars. | forma nova (T5) | corrigir | VP-B-005, VP-B-006, VP-A-151; plano de 1986, p. 59 (cópia local bigsur-lup-1986-govinfo.htm, l. 4301–4302): "On June 27,1937, the highway was completed at a cost of approximately $8,000,000."; FHWA: "Construction on Highway One began in 1919" e "The initial $1.5 million estimate to build Highway One became $10 million nineteen years later" (cópia local fhwa-back0403-2026-11-02.htm, l. 118 e 139) — O ano está certo: 1937 é o ano em que o plano dá o custo (a conclusão). Mas "In 1937 dollars" é a fórmula do dólar constante (um valor expresso no nível de preços de 1937), e o plano não converteu nada: os ~US$ 8 milhões são a soma nominal do que se gastou de 1919 a 1937, em dólares de anos diferentes. A forma nova afirma uma base de preço que a fonte não dá. LEVE e periférica: o número e o ano estão certos; o que muda é o que o "dollars" promete. O conserto mantém o ano e diz o que a fonte sustenta (o custo dado na conclusão, sem correção) — https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm ; https://www.fhwa.dot.gov/infrastructure/back0403.cfm | Cost as of 1937, not adjusted. |
| VT-221 | s40 | LESS THAN A DAY’S DRIVE⏎1986 PLAN | quebra (T1) | confirmada | VT-221 (VP-A-153) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-228 | s42 | Coast near Big Sur, California | anotação da caça | confirmada | VT-228 (VP-B-058; conferencia-midia.json candidatos[45]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-229 | s42 | Big Sur coast, California | anotação da caça | confirmada | VT-229 (conferencia-midia.json candidatos[46]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-230 | s42 | Photo from 2013 | anotação da caça | confirmada | VT-230 (conferencia-midia.json candidatos[46]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-231 | s42 | David Iliff / Wikimedia Commons · CC BY-SA 3.0 | anotação da caça | confirmada | VT-231 (conferencia-midia.json candidatos[46]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-232 | s42 | (o rótulo do clipe da caça, pelo lugar_na_origem do veredito dele) | anotação da caça | nada a checar | VT-232 (—) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-239 | s43 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | tempo (T2, T4 ou RITMO) | confirmada | VT-239 (VP-A-166) — o crédito do plano entra em 5,067, colado ao [235]: o mesmo crédito, sem piscar no corte; a fonte é a mesma | — |
| VT-240 | s43 | Public land, 2025 | tempo (T2, T4 ou RITMO) | confirmada | VT-240 (VP-A-269, VP-A-306) — "Public land, 2025" de 6,6 a 8,2, com a camada do PAD-US acendendo junto, em 6,6, nunca antes (_condicao novo). De 5,8 a 6,6 a pílula de 1986 fica sem a camada; de 6,6 a 8,2 a camada tem o "2025" na tela; em 8,2 saem a pílula e o rótulo juntos. A condição do VP-A-269 (a camada de hoje nunca sob a pílula de 1986 sem o "2025") fica cumprida. Condição para o qc: a camada não acende antes de 6,6 | — |
| VT-248 | s44 | Bixby Creek Bridge | anotação da caça | confirmada | VT-248 (VP-B-040; conferencia-midia.json candidatos[47]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-249 | s44 | Photo from 2023 | anotação da caça | confirmada | VT-249 (VP-B-041; conferencia-midia.json candidatos[47]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-250 | s44 | Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0 | anotação da caça | confirmada | VT-250 (VP-B-042; conferencia-midia.json candidatos[47]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-269 | s48 | © MapTiler © OpenStreetMap contributors | anotação da caça | confirmada | VT-269 (VP-A-303; identidade §6) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-270 | s48 | Illustrative | anotação da caça | confirmada | VT-270 (regência (desenho declarado)) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-271 | s48 | Big Sur coast, California | forma nova (o rótulo do clipe da caça) | confirmada | conferencia-midia.json (470095dc…) › candidatos[58], lote 4, aprovado, mesmo_item true: lugar_na_origem "Scenic coastal drive along California's Big Sur coastline (título); Breathtaking aerial footage showcases the iconic Big Sur coastline in California. (…) (descrição)" — "Big Sur coast, California" diz o mesmo que a origem ("California's Big Sur coastline"), sem lugar mais específico (marca/midia.md §2.7). O arquivo da cena casa com o veredito pela URL do item (_media/footage/s48/_PROCEDENCIA.json, a mesma URL 39739042-…); a s48.html (l. 121 e 124) já cita o arquivo e escreve o rótulo. Sem crédito na tela (Envato) e sem aviso de ano (aéreo de hoje, fala sem data; o veredito não dá aviso_de_ano). O L1 do Lucas (06/11) encurta este rótulo para "Big Sur coast": continua dentro da origem — https://app.envato.com/search/stock-video/39739042-fb1d-44c3-9dc8-1cbaf425e00c | — |
| VT-275 | s49 | Paul’s Slide⏎JAN. 14, 2023 | quebra (T1) | confirmada | VT-275 (VP-A-189) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-276 | s49 | Paul’s Slide⏎JAN. 14, 2023 – JUNE 23, 2024 | quebra (T1) | confirmada | VT-276 (VP-A-189, VP-B-118) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-277 | s49 | Regent’s Slide⏎FEB. 9, 2024 | quebra (T1) | confirmada | VT-277 (VP-A-190, VP-B-119) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-284 | s50 | 4,600+ STEEL BARS⏎UP TO 60 FT · CALTRANS | quebra (T1) | confirmada | VT-284 (VP-A-198, R175) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-306 | s53 | TIMBER FIRE⏎STARTED AUG. 8, 2026⏎25,352 ACRES | quebra (T1) | confirmada | VT-306 (VP-A-295, VP-A-212, VP-A-217) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-307 | s53 | Source: CAL FIRE incident page, updated Oct. 20, 2026⏎Los Padres National Forest fire | quebra (T1) | confirmada | VT-307 (VP-A-214) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-310 | s53 | 661 STRUCTURES THREATENED⏎LISTED BY CAL FIRE | quebra (T1) | confirmada | VT-310 (VP-A-213, VP-A-219) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-311 | s53 | 97% CONTAINED⏎OCT. 14, 2026 | quebra (T1) | confirmada | VT-311 (VP-A-220) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-312 | s53 | Source: CAL FIRE incident page, updated Oct. 20, 2026⏎Los Padres National Forest fire | quebra (T1) | confirmada | VT-312 (VP-A-214) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-313 | s53 | CLOSED · AUGUST 2026⏎CALTRANS | quebra (T1) | confirmada | VT-313 (VP-A-221, VP-A-278) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-318 | s53 | NOV. 4, 2026: OPEN⏎ONE-WAY AT WORK ZONES⏎CALTRANS | quebra (T1) | confirmada | VT-318 (VP-A-222, VP-A-228, VP-A-229) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-320 | s55 | © MapTiler © OpenStreetMap contributors | anotação da caça | confirmada | VT-320 (VP-A-303; identidade §6) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-321 | s55 | (o rótulo do clipe da caça, pelo lugar_na_origem do veredito dele) | anotação da caça | nada a checar | VT-321 (—) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-323 | s55 | 887 HOMES⏎2020 CENSUS | quebra (T1) | confirmada | VT-323 (VP-A-230, R020, R201, R202) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-324 | s55 | 345 EMPTY ON CENSUS DAY⏎2020 CENSUS | quebra (T1) | confirmada | VT-324 (VP-A-231) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-326 | s55 | ACS QUESTIONNAIRE⏎2024 | quebra (T1) | confirmada | VT-326 (VP-B-035, VP-B-097; conferencia-midia.json candidatos[35], [36]) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-329 | s55 | SEASONAL, RECREATIONAL OR OCCASIONAL USE⏎ACS 2020–2024 | quebra (T1) | confirmada | VT-329 (VP-A-237) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-334 | s55 | SHARE OF EMPTY HOMES FOR SEASONAL USE⏎ACS 2020–2024 | forma nova (T3) | confirmada | VP-A-237, VP-A-238, VP-A-239, VP-A-340; B25004 (cópia local acsdt5y2024-b25004.dat, cbc82f08…), recalculado do bruto (acs.py): Big Sur CCD 265 ± 94 de 285 ± 95 vagas = 93,0 % ± 11,3; Califórnia 357,596 ± 6,059 de 1,096,644 ± 18,928 = 32,6 % ± 0,8; B25004_006 = "For seasonal, recreational, or occasional use" (table shells, cópia local) — O 93 % e o 33 % são, de fato, a parte das casas VAZIAS (o denominador é o B25004_001, as vagas da própria ACS) que é de uso sazonal, recreativo ou ocasional, na ACS 2020–2024, no distrito e na Califórnia. "Empty homes" é a palavra da voz para "vacant housing units"; "seasonal use" é a forma curta da categoria, que a cota [328] mostra inteira antes, na mesma cena. A 2ª linha (ACS 2020–2024) prende a régua: não é o 345 do censo. A voz casa: "nearly all of the district's empty homes" e "about a third of the empty ones" — https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/5YRData/acsdt5y2024-b25004.dat | — |
| VT-335 | s57 | Highway 1, Big Sur | anotação da caça | confirmada | VT-335 (VP-B-046; conferencia-midia.json candidatos[48]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-336 | s57 | Photo from 2012 | anotação da caça | confirmada | VT-336 (VP-B-047; conferencia-midia.json candidatos[48]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-337 | s57 | Fred Moore / Wikimedia Commons · CC BY 2.0 | anotação da caça | confirmada | VT-337 (VP-B-048; conferencia-midia.json candidatos[48]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-338 | s57 | Tourism on Big Sur is Surging Since Reopening of Highway 1⏎May 15, 2026 | quebra (T1) | confirmada | VT-338 (VP-B-028) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-342 | s57 | View from Hurricane Point, Big Sur | anotação da caça | confirmada | VT-342 (VP-A-284; conferencia-midia.json candidatos[51]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-343 | s57 | Photo from 2025 | anotação da caça | confirmada | VT-343 (conferencia-midia.json candidatos[51]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-344 | s57 | Joe Mabel / Wikimedia Commons · CC BY-SA 4.0 | anotação da caça | confirmada | VT-344 (conferencia-midia.json candidatos[51]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-345 | s57 | © MapTiler © OpenStreetMap contributors | anotação da caça | confirmada | VT-345 (VP-A-303; identidade §6) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-346 | s57 | (o rótulo do clipe da caça, pelo lugar_na_origem do veredito dele) | anotação da caça | nada a checar | VT-346 (—) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-356 | s59 | Bixby Creek Bridge | anotação da caça | confirmada | VT-356 (VP-B-040; conferencia-midia.json candidatos[49]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-357 | s59 | Photo from 2023 | anotação da caça | confirmada | VT-357 (VP-B-041; conferencia-midia.json candidatos[49]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-358 | s59 | Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0 | anotação da caça | confirmada | VT-358 (VP-B-042; conferencia-midia.json candidatos[49]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-362 | s59 | Bixby Creek Turnout⏎NAMED IN THE 1986 PLAN | quebra (T1) e tempo | confirmada | VT-362 (VP-A-254, VP-B-019) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição; a cota entra em 6,733, na palavra "named" | — |
| VT-363 | s59 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | tempo (T2, T4 ou RITMO) | confirmada | VT-363 (VP-A-255) — o crédito do plano entra em 6,733, com a cota que ele credita | — |
| VT-365 | s60 | Big Sur, California | anotação da caça | confirmada | VT-365 (VP-B-078; conferencia-midia.json candidatos[50]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-366 | s60 | Photo from 2025 | anotação da caça | confirmada | VT-366 (VP-B-079; conferencia-midia.json candidatos[50]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-367 | s60 | Jav72 / Wikimedia Commons · CC BY-SA 4.0 | anotação da caça | confirmada | VT-367 (VP-B-080; conferencia-midia.json candidatos[50]) — só anotação da caça (texto e tempo iguais); _vai_a_tela = True | — |
| VT-374 | s60 | 1,474⏎CENSUS DISTRICT · 2020 | quebra (T1) | confirmada | VT-374 (VP-A-257) — o texto com a quebra lida como " · " é o de antes, letra a letra (delta.py); a quebra separa a afirmação do dono dela, sem mudar número, data, nome nem atribuição | — |
| VT-379 | s60 | Image(s) and/or video used under license from Shutterstock.com | anotação da caça | confirmada | VT-379 (identidade §7; midia §3.4) — só anotação da caça (texto e tempo iguais); _vai_a_tela = False; não vai à tela: o veredito anterior vale para o arquivo, se ele voltar | — |
| VT-436 | s01 | Photo from 2023 | anotação (aviso do ano) | confirmada | VT-436 (conferencia-midia.json candidatos[0]; VP-B-041) — _avisos_do_ano[0]: ganhou _vai_a_tela = False, igual ao do texto do aviso (conferir.py) | — |
| VT-437 | s02 | Photo from 2023 | anotação (aviso do ano) | confirmada | VT-437 (conferencia-midia.json candidatos[37]; VP-B-041) — _avisos_do_ano[1]: ganhou _vai_a_tela = True, igual ao do texto do aviso (conferir.py) | — |
| VT-438 | s05 | Photo from 2013 | anotação (aviso do ano) | confirmada | VT-438 (conferencia-midia.json candidatos[2]; VP-B-044) — _avisos_do_ano[2]: ganhou _vai_a_tela = False, igual ao do texto do aviso (conferir.py) | — |
| VT-439 | s09 | Photo from 2024 | anotação (aviso do ano) | confirmada | VT-439 (conferencia-midia.json candidatos[38]; VP-B-085; veredito novo de s09, lote 3) — _avisos_do_ano[3]: ganhou _vai_a_tela = True, igual ao do texto do aviso (conferir.py) | — |
| VT-440 | s09 | Photo from 2017 | anotação (aviso do ano) | confirmada | VT-440 (conferencia-midia.json candidatos[39]; VP-B-065; veredito novo de s09, lote 3 (2ª opção)) — _avisos_do_ano[4]: ganhou _vai_a_tela = False, igual ao do texto do aviso (conferir.py) | — |
| VT-441 | s12 | Photo from 2012 | anotação (aviso do ano) | confirmada | VT-441 (conferencia-midia.json candidatos[4]; VP-B-047) — _avisos_do_ano[5]: ganhou _vai_a_tela = False, igual ao do texto do aviso (conferir.py) | — |
| VT-442 | s18 | Photo from 2013 | anotação (aviso do ano) | confirmada | VT-442 (conferencia-midia.json candidatos[40]; VP-B-044) — _avisos_do_ano[6]: ganhou _vai_a_tela = False, igual ao do texto do aviso (conferir.py) | — |
| VT-443 | s19 | Photo from 2022 | anotação (aviso do ano) | confirmada | VT-443 (conferencia-midia.json candidatos[9]; VP-B-056) — _avisos_do_ano[7]: ganhou _vai_a_tela = True, igual ao do texto do aviso (conferir.py) | — |
| VT-444 | s21 | Photo from 2012 | anotação (aviso do ano) | confirmada | VT-444 (conferencia-midia.json candidatos[41]; VP-B-047) — _avisos_do_ano[8]: ganhou _vai_a_tela = False, igual ao do texto do aviso (conferir.py) | — |
| VT-445 | s25 | Photo from 2012 | anotação (aviso do ano) | confirmada | VT-445 (conferencia-midia.json candidatos[12]; VP-B-062) — _avisos_do_ano[9]: ganhou _vai_a_tela = True, igual ao do texto do aviso (conferir.py) | — |
| VT-446 | s30 | Photo from 2023 | anotação (aviso do ano) | confirmada | VT-446 (conferencia-midia.json candidatos[19]; VP-B-068) — _avisos_do_ano[10]: ganhou _vai_a_tela = True, igual ao do texto do aviso (conferir.py) | — |
| VT-447 | s30 | Photo from 2023 | anotação (aviso do ano) | confirmada | VT-447 (conferencia-midia.json candidatos[43]; VP-B-076) — _avisos_do_ano[11]: ganhou _vai_a_tela = True, igual ao do texto do aviso (conferir.py) | — |
| VT-448 | s30 | Photo from 2002 | anotação (aviso do ano) | confirmada | VT-448 (conferencia-midia.json candidatos[20]; VP-B-072) — _avisos_do_ano[12]: ganhou _vai_a_tela = True, igual ao do texto do aviso (conferir.py) | — |
| VT-449 | s31 | Photo from 2023 | anotação (aviso do ano) | confirmada | VT-449 (conferencia-midia.json candidatos[44]; VP-B-041) — _avisos_do_ano[13]: ganhou _vai_a_tela = True, igual ao do texto do aviso (conferir.py) | — |
| VT-450 | s33 | Photo from 2023 | anotação (aviso do ano) | confirmada | VT-450 (conferencia-midia.json candidatos[22]; VP-B-076) — _avisos_do_ano[14]: ganhou _vai_a_tela = True, igual ao do texto do aviso (conferir.py); t0 5.767 → 9.433, igual ao [174] | — |
| VT-451 | s35 | Photo from 2025 | anotação (aviso do ano) | confirmada | VT-451 (conferencia-midia.json candidatos[24]; VP-B-079) — _avisos_do_ano[15]: ganhou _vai_a_tela = False, igual ao do texto do aviso (conferir.py) | — |
| VT-452 | s42 | Photo from 2013 | anotação (aviso do ano) | confirmada | VT-452 (conferencia-midia.json candidatos[46]; VP-B-044) — _avisos_do_ano[16]: ganhou _vai_a_tela = False, igual ao do texto do aviso (conferir.py) | — |
| VT-453 | s44 | Photo from 2023 | anotação (aviso do ano) | confirmada | VT-453 (conferencia-midia.json candidatos[47]; VP-B-041) — _avisos_do_ano[17]: ganhou _vai_a_tela = False, igual ao do texto do aviso (conferir.py) | — |
| VT-454 | s57 | Photo from 2012 | anotação (aviso do ano) | confirmada | VT-454 (conferencia-midia.json candidatos[48]; VP-B-047) — _avisos_do_ano[18]: ganhou _vai_a_tela = False, igual ao do texto do aviso (conferir.py) | — |
| VT-455 | s57 | Photo from 2025 | anotação (aviso do ano) | confirmada | VT-455 (conferencia-midia.json candidatos[51]; veredito novo de s57 › beats[2], lote 3 (candidatos[51])) — _avisos_do_ano[19]: ganhou _vai_a_tela = True, igual ao do texto do aviso (conferir.py) | — |
| VT-456 | s59 | Photo from 2023 | anotação (aviso do ano) | confirmada | VT-456 (conferencia-midia.json candidatos[49]; VP-B-041) — _avisos_do_ano[20]: ganhou _vai_a_tela = False, igual ao do texto do aviso (conferir.py) | — |
| VT-457 | s60 | Photo from 2025 | anotação (aviso do ano) | confirmada | VT-457 (conferencia-midia.json candidatos[50]; VP-B-079) — _avisos_do_ano[21]: ganhou _vai_a_tela = True, igual ao do texto do aviso (conferir.py) | — |
| VT-348 | s58 | PEOPLE | T6 (sem mudança) | nada a checar | VT-348 (—) — texto e tempo iguais; entra pela T6 | — |
| VT-349 | s58 | HOMES | T6 (sem mudança) | nada a checar | VT-349 (—) — texto e tempo iguais; entra pela T6 | — |
| VT-350 | s58 | VISITORS | T6 (sem mudança) | nada a checar | VT-350 (—) — texto e tempo iguais; entra pela T6 | — |
| VT-351 | s58 | As empty as Wyoming | T6 (sem mudança) | confirmada | VT-351 (VP-A-252) — texto e tempo iguais; entra pela T6 | — |
| VT-352 | s58 | Kept by people who live somewhere else | T6 (sem mudança) | confirmada | VT-352 (R220, R221) — texto e tempo iguais; entra pela T6; a legenda fala dos calendários (as casas de uso sazonal, de quem mora noutro lugar), a mesma fatia da voz da s58 ("many of them are kept by people who live somewhere else"): ver VD-001 | — |
| VT-353 | s58 | 85% · 1986 PLAN | T6 (sem mudança) | confirmada | VT-353 (VP-A-178) — texto e tempo iguais; entra pela T6 | — |
| VT-354 | s58 | Source: U.S. Census Bureau, 2020 Census and American Community Survey, 2020–2024 | T6 (sem mudança) | confirmada | VT-354 (VP-A-232, VP-A-240) — texto e tempo iguais; entra pela T6 | — |
| VT-355 | s58 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | T6 (sem mudança) | confirmada | VT-355 (VP-A-180) — texto e tempo iguais; entra pela T6 | — |
| VT-260 | s47 | ≈ 2.9 MILLION A YEAR · 1986 | T7 (sem mudança) | confirmada | VT-260 (VP-A-176, R156); plano, cópia local l. 4549–4551: "an estimated 2.9 million people visit the Big Sur coast annually and demand is predicted to double over the next 20 to 25 years" — o número da pílula está na fonte; o que a fonte não dá é a relação de comprimento da barra com a faixa (VD-002) — https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm | — |
| VT-261 | s47 | EXPECTED TO DOUBLE IN 20–25 YEARS | T7 (sem mudança) | confirmada | VT-261 (VP-A-177); plano, cópia local l. 4549–4551: "an estimated 2.9 million people visit the Big Sur coast annually and demand is predicted to double over the next 20 to 25 years" — o número da pílula está na fonte; o que a fonte não dá é a relação de comprimento da barra com a faixa (VD-002) — https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm | — |
| VT-462 | s55 | o calendário em ≈ 93 % dos 345 contornos (uns 320) | escala (T3, T6 ou T7) | confirmada | VT-462 (VP-A-237, VP-A-238); recalculado: 265/285 = 93,0 % — sem mudança; o título novo [333] diz de que é o 93 % — https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/5YRData/acsdt5y2024-b25004.dat | — |
| VT-463 | s55 | as duas barras, ≈ 93 % (distrito) e ≈ 33 % (Califórnia) | escala (T3, T6 ou T7) | confirmada | VT-463 (VP-A-238, VP-A-239, VP-A-340); recalculado do bruto: 93,0 % ± 11,3 e 32,6 % ± 0,8 — o título novo [333] fica sob estas barras e diz a mesma fatia — https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/5YRData/acsdt5y2024-b25004.dat | — |
| VT-464 | s58 | a amostra de 90 quadradinhos na razão 887 : 345, "declarada como representação" | escala (T3, T6 ou T7) | corrigir | VT-464 (VP-A-230, VP-A-231); s58.html l. 367–383: 90 quadradinhos, 55 cheios em --destaque e 35 em contorno (90 × 345/887 = 35,0) — A razão está certa (35 de 90 = 38,9 %, o "almost four in ten" da s55). Mas a representação só está declarada no comentário do HTML: na tela não há nada que diga o que um quadradinho vale nem de que total. O título é "HOMES", e a voz da s58 diz "Count the homes": quem conta vê 90 casas, e o distrito tem 887. O texto mínimo: "Each square ≈ 10 homes" (887 ÷ 90 = 9,86), no painel 2, com o crédito do Census que já está na cena. O lugar e o papel são do redator e da Arte — https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/California/ca2020.pl.zip | Each square ≈ 10 homes |
| VT-465 | s47 | a faixa de 100 células: 85 de usos prioritários e 15 casinhas | escala (T3, T6 ou T7) | confirmada | VT-465 (VP-A-178, VP-A-179); plano, cópia local l. 4960–4968: "85 percent of the capacity of Highway 1" e "not more than 15 percent of highway capacity at buildout" — sem mudança — https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm | — |
| VT-466 | s58 | a faixa de 85 células | escala (T3, T6 ou T7) | confirmada | VT-466 (VP-A-178) — sem mudança; s58.html: 85 das 100 células a 40 % — https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm | — |
| VD-001 | s58 | os 32 calendários sobre os 35 vazios, sob "Kept by people who live somewhere else" | escala (T3, T6 ou T7) | confirmada | s58.html l. 373–383 (VAZIA = 35; SEM_CAL = 3; N_CAL = 32); a conta: 90 × (345/887) × (265/285) = 35,0 × 0,930 = 32,6; com o intervalo de 90 % da ACS (81,7–100 %): 28,6 a 35,0 — O HTML acende 32 calendários: dentro do arredondamento (32,6; 33 seria o inteiro mais perto, a diferença é um quadradinho, 1,1 ponto, muito dentro da margem de ±11,3). É a mesma regra da s55 (o calendário em ≈ 93 % dos contornos, VT-462). O "cerca de 3 em 10" do pacote da Arte vem do R220 (265 ÷ 887 = 29,9 %, o número da ACS sobre o total do censo, "só ordem de grandeza"): daria 27 calendários sobre 35 contornos, 77 %, contra o "nearly all" e a barra de 93 % da s55, na mesma forma de marca. A contagem certa é 32 (ou 33), não 27 — https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/5YRData/acsdt5y2024-b25004.dat ; https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/California/ca2020.pl.zip | — |
| VD-002 | s47 | a barra dos visitantes contra a faixa: 1.450 px de 3.000 (metade da capacidade) para 2,9 milhões por ano, e a seta do dobro até x 3.300 (2.900 px, 97 % da faixa) | escala (T3, T6 ou T7) | corrigir | s47.html l. 34–37 e 260–261 (barra x 400, w 1450; seta x0 1850 → x1 3300; faixa x 400–3400, 3000 px, l. 141). O plano dá 2,9 milhões de visitantes por ano e o dobro em 20 a 25 anos (l. 4549–4551), o tráfego em veículos por dia (4.500 de média anual no nível D, 8.300 no pico, nível E, l. 4572–4575; 2.600 e 4.700 ao sul, l. 4592–4593), que trechos já estão "at capacity during peak recreational use periods" (l. 4674–4675) e a partilha de 85/15 (l. 4960–4968). Nenhum número põe os visitantes por ano como fração da capacidade: são unidades diferentes (pessoas por ano contra veículos por dia), e o plano não as converte — NÃO ACHEI fonte para a relação, depois de ler todo trecho do plano com "capacity", "2.9 million", "double" e "vehicles per" (grep na cópia local). O desenho afirma "os visitantes de 1986 ocupavam metade da estrada, e o dobro a encheria": a fonte não dá isso, e o que ela dá (trechos já no limite no pico) até puxa para o outro lado. Nenhum texto afirma a relação (o relato do redator, §8, confere) — https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm | sem texto novo: a barra perde a relação de comprimento com a faixa (A12, da Arte): ou sai a barra e ficam a pílula "≈ 2.9 MILLION A YEAR · 1986" e a seta do dobro, ou a barra fica sem eixo e sem escala comuns com a faixa |

## Os achados acionáveis (os 3 "corrigir")

1. **[LEVE] VT-215 · s39 [214]** "In 1937 dollars." → **CONSERTO:** `Cost as of 1937, not adjusted.` → RAIZ: PONTUAL.
   O ano está certo: o plano dá o custo na conclusão, "On June 27,1937, the highway was completed at a cost of approximately $8,000,000."
   (p. 59; cópia local `bigsur-lup-1986-govinfo.htm`, l. 4301–4302; VP-B-005). Mas "in 1937 dollars" é a fórmula do dólar constante: diz que o
   valor está expresso no nível de preços de 1937. O plano não converteu nada, e o valor é a soma nominal de uma obra que começou em 1919
   ("Construction on Highway One began in 1919"; "became $10 million nineteen years later", FHWA, cópia local `fhwa-back0403-2026-11-02.htm`,
   l. 118 e 139). São dólares de quase vinte anos diferentes somados, não dólares de 1937. A forma que o redator deixou de reserva diz o que a
   fonte sustenta (o custo dado em 1937, sem correção) e mantém o ano que separa o valor do "(1986)" da pílula ao lado. Se não couber, a mais
   curta que continua certa é `Not adjusted for inflation.`, mas ela perde o ano que a T5 pediu.
   Fontes: https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm · https://www.fhwa.dot.gov/infrastructure/back0403.cfm
2. **[LEVE] VT-464 · s58, a escala dos quadradinhos** → **CONSERTO:** um texto no painel 2, `Each square ≈ 10 homes` (887 ÷ 90 = 9,86). →
   RAIZ: INSTRUÇÃO. O laudo anterior confirmou a amostra "declarada como representação", e a declaração só existe no comentário do HTML
   (`s58.html`, cabeçalho: "DECLARADA como representação (o exige): aqui, no cabeçalho; na tela, a legenda do redator"). A legenda que o
   redator escreveu ("Kept by people who live somewhere else") não declara escala. Sob o título "HOMES" e a voz "Count the homes", quem conta vê
   90 casas, e o distrito tem 887. O crédito do Census (VT-354) já cobre o número. O papel, o lugar e o tempo são do redator e da Arte (a s58 é
   cena de PICO, com o teto de textos vivos dela).
   Fonte: https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/California/ca2020.pl.zip (HU100 887; VP-A-230, VP-A-231)
3. **[LEVE] VD-002 · s47, a barra dos visitantes contra a faixa** → **CONSERTO, sem texto novo:** a barra perde a relação de comprimento com
   a faixa (A12, da Arte): sai a barra, e ficam a pílula `≈ 2.9 MILLION A YEAR · 1986` e a seta do dobro; ou a barra fica sem eixo e sem escala
   comuns com a faixa. → RAIZ: PONTUAL. **NÃO ACHEI** fonte para a relação (T7, abaixo).
   Fonte: https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm

Nenhum dos três é afirmação de tese, e nenhum é um número errado: o "≈ $8 MILLION", os 345 de 887 e os 2,9 milhões estão certos e
continuam confirmados.

## As respostas da Sala

### T5 · a s39, "In 1937 dollars."

- **O ano na fonte: CONFIRMADO, 1937.** É o da conclusão, "On June 27,1937, the highway was completed at a cost of approximately
  $8,000,000." (p. 59, 5º parágrafo; cópia local, l. 4301–4302; VP-B-005, VP-B-006). A voz diz "The county’s plan puts the cost at about
  eight million dollars" (`words.json`, ~404,6–406,3 s) e a pílula, `≈ $8 MILLION · MONTEREY COUNTY PLAN (1986)` (VT-214, confirmada).
- **A forma: CORRIGIR.** "In 1937 dollars" leva quem entende de dinheiro a ler dólar constante de 1937, um valor corrigido para os preços
  daquele ano, e isso a fonte não dá: os ~US$ 8 milhões são a soma nominal de 1919 a 1937. A FHWA, que dá outra régua (US$ 10 milhões,
  VP-A-338), confirma o começo em 1919. O conserto proposto é `Cost as of 1937, not adjusted.` (achado 1).

### T6 · a s58, os 90 quadradinhos

- **O que são** (`s58.html`, l. 367–383, lidos como texto): uma amostra de 90 das 887 moradias do distrito no Censo de 2020, na razão
  887 : 345. São **55 cheios em --destaque** (as ocupadas: 90 × 542/887 = 55,0) e **35 só em contorno** (as vazias no dia do censo:
  90 × 345/887 = 35,0; `VAZIA` = 35). Sobre **32 dos 35** contornos pousa um calendário (`SEM_CAL` = 3, `N_CAL` = 32): as de uso sazonal,
  recreativo ou ocasional, pela proporção da ACS. A escolha dos vazios é por semente fixa (mulberry32, 58).
- **Quantos acendem:** em --destaque, 55. **Os 32 que o qc mediu são os calendários**, não os quadradinhos acesos: 32/90 = 35,6 %.
- **A contagem certa para a legenda e a voz da s58:** as casas "kept by people who live somewhere else" são as de uso sazonal. A conta é
  90 × (345/887) × (265/285) = 35,0 × 0,930 = **32,6**. Com o intervalo de 90 % da ACS no distrito (81,7 % a 100 %), vai de 28,6 a 35,0.
  **O HTML acende 32: a contagem se sustenta.** 33 é o inteiro mais perto (um quadradinho, 1,1 ponto), muito dentro da margem; não peço troca.
  (VD-001, recalculado do bruto do B25004: `acs.py`, `acs.log`.)
- **O "cerca de 3 em 10" do pacote da Arte** vem do laudo do roteiro, R220: 265 ÷ 887 = 29,9 %, o número da ACS sobre o total do censo, que o
  próprio R220 marca como "só ordem de grandeza (réguas diferentes)". Aplicado à grade, daria 27 calendários sobre 35 contornos, 77 % das vazias,
  e desmentiria o "nearly all" e a barra de 93 % da s55, na mesma peça de marca. **Não se usa para a contagem.** O R220 continua valendo para o
  que ele sustenta, o "many" da voz.
- **A voz e a legenda falam da mesma fatia? Sim.** A voz da s58 não diz "almost four in ten". Ela diz "Count the homes, and many of them are
  kept by people who live somewhere else" (`words.json`, 717,1–720,5 s; o roteiro, parágrafo 33). O "almost four in ten" é da s55 (parágrafo 30;
  VT-324), e fala das vazias no dia do censo, que na s58 são os 35 contornos. A legenda "Kept by people who live somewhere else" (VT-352) diz a
  mesma fatia da voz, os calendários. O "many" cobre os 32,6 de 90, e nenhum número dessa fatia vai à tela (VC-01).
- **A escala na tela: FALTA.** Nada na tela diz o que um quadradinho vale nem de que total. O texto mínimo é `Each square ≈ 10 homes` (achado 2).
- **Os 8 textos da s58** (VT-348 a VT-355) não mudaram: 3 títulos de painel (nada a checar) e 5 confirmados, citados na tabela.

### T7 · a s47, a barra dos visitantes

- **O que o HTML desenha** (`s47.html`, l. 34–37, 141, 260–261): a FAIXA de capacidade tem x 400–3400 (3.000 px, 100 células). A barra dos
  visitantes nasce em x 400, com **1.450 px, "metade da faixa"** (o comentário da l. 35 diz isso), sob a pílula "≈ 2.9 MILLION A YEAR · 1986".
  Em "double", a seta leva a barra **de x 1.850 a x 3.300: 2.900 px, 97 % da faixa**. O desenho afirma: em 1986 os visitantes ocupavam metade
  da estrada, e o dobro a encheria.
- **O que as fontes dão** (o plano, cópia local): "an estimated 2.9 million people visit the Big Sur coast annually and demand is predicted to
  double over the next 20 to 25 years" (l. 4549–4551); o tráfego em **veículos por dia**, 4.500 de média anual ao norte do Big Sur Valley no
  nível de serviço D e 8.300 no pico de verão, nível E (l. 4572–4575), 2.600 e 4.700 ao sul (l. 4592–4593); que trechos da estrada "are at
  capacity during peak recreational use periods" (l. 4674–4675); e a partilha, 85 % da capacidade para os usos prioritários e no máximo 15 % para
  as casas novas (l. 4960–4968; VP-A-178, VP-A-179).
- **Confirmado: nenhuma fonte dá a relação de comprimento.** O plano não põe os visitantes por ano como fração da capacidade, e as duas grandezas
  têm unidades diferentes (pessoas por ano, veículos por dia). O que ele diz até puxa para o outro lado: trechos já no limite no pico de 1986, e
  não na metade. Nenhum texto de tela afirma a relação (as pílulas VT-260 a VT-265 continuam confirmadas). A Arte tira a relação (achado 3).

### As formas novas e os tempos (o resto do item 1 do pedido)

- **[333], s55, "SHARE OF EMPTY HOMES FOR SEASONAL USE⏎ACS 2020–2024": CONFIRMADA.** Recalculei do bruto do B25004 (`acs.py`): no distrito,
  265 ± 94 de 285 ± 95 vagas são "For seasonal, recreational, or occasional use" (B25004_006), 93,0 % ± 11,3; na Califórnia, 357,596 de
  1,096,644, 32,6 % ± 0,8. O denominador é o das vagas da própria ACS, então "share of empty homes" está certo, e a linha de baixo prende a
  régua à ACS, longe do 345 do censo. "Seasonal use" é a forma curta da categoria que a cota [328] mostra inteira na mesma cena.
  Fonte: https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/5YRData/acsdt5y2024-b25004.dat
- **[270], s48, "Big Sur coast, California": CONFIRMADA.** O veredito do clipe (candidatos[58], lote 4, aprovado, `mesmo_item: true`) dá o
  lugar_na_origem "Scenic coastal drive along California’s Big Sur coastline" e "the iconic Big Sur coastline in California". O rótulo não é
  mais específico que isso, e o arquivo que a cena cita (`_media/footage/s48/big-sur-highway-1-carros-costa-aerea.mp4`) casa pela URL do item
  no `_PROCEDENCIA.json`. Fonte: https://app.envato.com/search/stock-video/39739042-fb1d-44c3-9dc8-1cbaf425e00c
- **Os 12 de tempo** ([72], [73], [74], [118], [172] a [175], [238], [239], [361], [362]): nenhum muda uma afirmação. O [239] fica dentro da
  condição do VP-A-269: a camada de 2025 acende em 6,6, junto do "Public land, 2025", e de 5,8 a 6,6 a pílula de 1986 fica sem ela; em 8,2
  saem juntos a pílula e o rótulo.
- **Os 31 da quebra:** voltam letra a letra ao texto de antes, e nenhum muda de sentido. O veredito é o do VT-### de cada um.

## PARA A SALA

1. **Os 3 consertos.** O [214] e o texto da escala da s58 vão ao redator, pelo setor. A barra da s47 vai à Arte (A12), sem texto. Depois deles,
   a reconferência é só dessas linhas.
2. **A contagem da s58 fica em 32** (A12 não muda a contagem). O "cerca de 3 em 10" do pacote da Arte não é a contagem da grade.
3. **Um sinal de leitura na s58, para o qc-visual** (não é um veredito meu): o --destaque está nos 55 quadradinhos ocupados, e a legenda "Kept by
   people who live somewhere else" fala dos 32 calendários, em --tinta. A gramática (contorno = vazia, calendário = sazonal) veio da s55, mas na
   s58 não há chave. Se o espectador ler os 55 acesos como "kept by people who live somewhere else", lê 61 %, e isso é falso. Quem julga se a
   leitura se sustenta é o qc, nos quadros.
4. **As condições que o qc confere nos quadros:** na s33, a foto da sequoia não aparece antes do "Photo from 2023" (9,433), salvo o fade de
   entrada; na s43, a camada da terra pública não acende antes de 6,6.
5. **Os 11 vereditos da caça sem `data_na_origem` e `aviso_de_ano`** (relato do redator, §12, item 5): no [270] não falta aviso, porque é um
   aéreo de hoje sobre uma fala sem data, e o veredito não dá obrigação. Se o conferente grava as chaves, a Sala decide.
6. **O L1 do Lucas** (06/11, "1. A") muda rótulos que este laudo confirmou ([55], [270] e os do §8 do relato). As formas curtas continuam dentro
   da origem, mas, quando a Sala as escrever, voltam a esta lente só nessas linhas.
7. **Nenhum NÃO CONFERIDO novo.** Tentei ler o total de moradias da ACS no distrito pela API do Census
   (https://api.census.gov/data/2024/acs/acs5), para medir o R220 só com a régua da ACS. A API respondeu "Missing Key": ela pede chave, e o
   canal não tem. Não contornei e não precisei: a T6 se resolve com a régua que o vídeo já usa.

## A lista de nomes

Nenhuma atribuição anônima nos textos do delta: toda pílula e todo crédito nomeiam a instituição (Monterey County, U.S. Census Bureau, Caltrans,
CAL FIRE, Los Padres National Forest). **A lista fica vazia, e está declarada.**

## Os 2 padrões mais vistos

1. **A fórmula técnica que promete mais que a fonte.** "In 1937 dollars" é termo de economista: diz "corrigido para 1937". Quando a legenda
   traduz um número antigo, a forma simples ("not adjusted") é a que a fonte sustenta.
2. **A escala que mora só no comentário do HTML.** A s58 diz "declarada como representação" e a s47, "1.450 px = metade da faixa", e os dois
   só no código. Um desenho de proporção afirma um número, e esse número precisa de uma fonte, se estiver na tela, ou de um texto, se for escala.

## Os voláteis que ficam na tela

Nenhum novo. Na s53 só entrou a quebra (VT-306, VT-307, VT-310, VT-311, VT-312, VT-313, VT-318): o texto e as datas são os de antes, e a Sala
relê o fogo e a estrada antes de publicar (a decisão da Sala de 06/11, §3).

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- O "In 1934" da voz (VP-A-311): continua com o Lucas. As pílulas da s38 que só mudaram de quebra ([202], [203]) seguem a voz.
- O L1 já respondido ("1. A", 06/11, 01:0x): a aplicação é da Sala; as formas curtas voltam a esta lente (PARA A SALA, item 6).

## Os arquivos

- Este laudo: `roteiros/big-sur/qc-roteiro/fatos-tela-delta-2026-11-06.laudo.md`.
- Os itens, um por linha da tabela: `out/big-sur/_tmp/vf-bs-D/laudo-tela-delta.json`.
- Os scripts e os logs, em `out/big-sur/_tmp/vf-bs-D/`: `delta.py` (`delta.log`), `vaitela.py` (`vaitela.log`), `avisos.py`, `conferir.py`
  (`conferir.log`), `acs.py` (`acs.log`), `cm.py`, `cm48.py`, `vp.py`, `rtab.py`, `cena.py`, `palavras.py`, `gerar.py` e `resumo.py`.
- Nada fora de `roteiros/big-sur/qc-roteiro/` e de `out/big-sur/_tmp/vf-bs-D/` foi escrito. Sem commit, sem `regie`, sem Chrome, sem imagem,
  sem crédito, sem Discord e sem Telegram.

NOTA: 9/10

VEREDITO: RESSALVA


## Reconferência (06/11/2026, ~01:50, Brasília)

O objeto agora é `out/big-sur/textos-tela.json` sha256 `590a70e4363d3ce9308cfeae6a5720c4efe01e14cafa874428006c386badccfe` (era
`70c95797…`), pelo conserto do redator (relato, §14). Conferi por script (`out/big-sur/_tmp/vf-bs-D/reconf.py`, saída `reconf.log`):

- contra a cópia de antes (`_tmp/redator/t3-antes/`, `71405fb4…`), diferem as **mesmas 107 entradas** julgadas acima, mais a **[379]** nova
  (380 textos); dessas 107, **só a [214]** mudou de texto, tempo ou `_vai_a_tela` desde a versão julgada;
- os 8 textos da s58 e os 2 da s47 citados acima estão iguais; os 22 avisos do ano, iguais; o card, igual; os 55 `rotulos_dado` de antes, iguais,
  mais o **[55]** novo;
- limite declarado: o `70c95797` não tem cópia no disco, então as notas das 107 não se compararam com ele. O texto, o tempo e o `_vai_a_tela`,
  sim, contra o que `laudo-tela-delta.json` registrou.

| id | cena | texto | veredito | fonte | URL |
|---|---|---|---|---|---|
| VT-215 | s39 [214] | Cost as of 1937, not adjusted for inflation. | **confirmada** (era corrigir) | o plano dá o custo na conclusão, "On June 27,1937, the highway was completed at a cost of approximately $8,000,000." (p. 59; cópia local l. 4301–4302; VP-B-005), sem correção nenhuma: a soma nominal de uma obra de 1919 a 1937 (FHWA, cópia local l. 118 e 139). O ano fica, e o "for inflation" tira a leitura de "estimativa não revista". Tempo igual, 2,0–5,7 | https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm · https://www.fhwa.dot.gov/infrastructure/back0403.cfm |
| VD-003 (o "VT-380" do redator) | s58 [379] | Each square ≈ 10 homes | **confirmada** | 887 ÷ 90 = 9,856 → ≈ 10 (2020 Census P.L. 94-171, Big Sur CCD, HU100 887; VP-A-230, VP-A-231; VT-323). Vale para os 90 da grade (`s58.html` igual, `0ba1a072…`), cheios e em contorno. Entra em 8,334, um quadro antes de "homes" (8,357), com a grade acendendo; o crédito do Census [353] está no ar desde 3,967 | https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/California/ca2020.pl.zip |
| VD-004 | s58 | `rotulos_dado` [55]: "Each square ≈ 10 homes" ← 9.86 moradias por quadradinho (887 ÷ 90), April 1, 2020 | **confirmada** | o valor exato, a unidade, a data e o "derivado de conta nossa" casam com a forma de tela e com a grade; o `na_tela` é o texto letra a letra | a mesma |
| VT-464 | s58 | a amostra de 90 na razão 887 : 345 | **confirmada** (era corrigir) | a representação agora está declarada na tela, pelo VD-003; a razão 55/35 e os 32 calendários não mudaram | a mesma |

**Um aviso de id:** o redator chamou a [379] de VT-380 (VT = n+1), e VT-380 é o card de `cards_pessoa` no laudo de tela. Aqui ela é **VD-003**, e
o `rotulos_dado` [55], **VD-004** (no laudo de tela, os `rotulos_dado` 0–54 são VT-381 a VT-435; o 436 já é aviso do ano). Quem casar ids entre os
laudos usa o índice `[n]`.

**COBERTURA final: 148 de 148.** A conta nova: **140 confirmadas · 1 corrigir · 0 não conferidas · 7 nada a checar.** O único `corrigir` é o
VD-002, a barra da s47, e é da Arte, sem texto (A12). O texto de tela do delta está **CHECADO E LIMPO**. O VD-002 sai quando a Arte tirar a
relação e o qc confirmar nos quadros. Os sinais e as condições da seção PARA A SALA continuam valendo (a ênfase da s58, a s33 e a s43). O lugar da
escala no painel é da Arte (instrução [26]).

NOTA final: 9.5/10

VEREDITO: RESSALVA
