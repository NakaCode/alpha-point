COBERTURA: 562 de 562 (vale para o textos-tela.json de sha256 c656a145c9b183a6afc1f566f6454e81473da265983a5e25ba5afbf222b3e2cb, depois da reconferência de 13/11/2026)

# Vídeo 7 (`rio-columbia`), screen_text: a passada inteira do texto de tela

- **Placar (sha `c656a145c9b183a6afc1…`, depois da reconferência):** 535 `confirmado` · 0 `corrigir` · 0 `NÃO CONFERIDO` · 27 `nada a checar`. Na primeira passada (sha `10d56053…`) foram 519 · 16 · 0 · 27.
- **NOTA: 9/10 depois da reconferência (8/10 na primeira passada).** Os números, as datas, as folhas e as citações batem com a fonte. Os defeitos estão no ano de quatro linhas de
  fonte (um deles, o "2013" da USACE e da BPA, se repete em 7 lugares), num hífen da folha do tratado e num rótulo que lê 1964
  como a data do pagamento.
- **VEREDITO: PASS** para o sha novo: os 16 `corrigir` da primeira passada (RESSALVA, sha `10d56053…`) estão na tela, letra a letra, como o conserto pronto (seção Reconferência, no fim).
- **Data-base:** 13/11/2026. As fontes locais foram lidas hoje; as que vieram da rede levam a data delas (abaixo).
- **O arquivo:** `out/rio-columbia/textos-tela.json`, sha256 `10d5605318d934097fd6ee577265561ece8c1446578ebb284ac98bad3d051df4`
  (conferido antes de começar).
- **Como a lista foi derivada, por script** (`out/rio-columbia/_tmp/verificar-tela/numerar_tela.py`, saída `lista-tela.json` e
  `lista-tela.txt`):
  - VT-001 a VT-428: os 428 textos de `_textos_por_cena`, na ordem do arquivo (nenhum tem `_vai_a_tela: false`);
  - VT-K01: o card; VT-R01 a VT-R57: os `rotulos_dado`; VT-A01 a VT-A25: os `_avisos_do_ano`; VT-Q01: a `_pergunta_cta`;
  - VT-G01 a VT-G36: as grafias do `glossario` que têm `_tela`.
  - **À mão:** VT-E01 a VT-E14, as escalas e proporções que as notas e as `_instrucoes_para_a_arte` declaram.
- **Os vereditos** saem de `julgar_tela.py`, que para se algum id ficar sem veredito (`faltam: []`). O que já tinha linha F (o laudo
  da voz, `5ae3b64d…`) ou P (a pré-conferência) se cita pelo id. Conferi só que a tela diz o que a linha sustenta: o número, a
  unidade, o arredondamento, a data, o dono e o ano do crédito.
- **Trabalho novo de hoje:**
  - as folhas, os grifos e as citações, letra a letra (`citacoes_tela.py`, `art4_3.py`; saída em `citacoes_tela.txt`): 25 de 25
    conferem, salvo o hífen de VT-131 e VT-408;
  - a pergunta do comentário, contra a série mensal de Nakusp (`arrow_inverno.py`, `arrow_inverno.txt`);
  - o ano das três fontes sem data (o ponto 5 da Sala);
  - uma imagem lida (a p. 2 da UNTS, `unts-p2-titulo.png`), dentro do teto de 6.

## Os `corrigir`, com o texto pronto

| ids | cena | o que está | o que vai | por quê |
|---|---|---|---|---|
| VT-021, VT-113, VT-138, VT-143, VT-153, VT-172 | s05, s22, s26 (2), s28, s30 | `Source: U.S. Army Corps of Engineers and`<br>`Bonneville Power Administration, 2013` | `Source: U.S. Army Corps of Engineers and`<br>`Bonneville Power Administration, 2009` | O documento termina em "Revised February 2009" (p. 8 da cópia local `us-entity-crt-history-2013.pdf`). O OSTI 1132837 o data de 01/02/2009 (https://www.osti.gov/biblio/1132837, lido hoje), e o texto fala da Fase 1 da revisão "completed in late 2009" como coisa futura. O "c. 2013" do dossiê era palpite. |
| VT-096 e VT-R10 | s19 | `≈ 15% OF THE BASIN · USACE AND BPA, 2013` | `≈ 15% OF THE BASIN · USACE AND BPA, 2009` | o mesmo documento (F005) |
| VT-131, VT-408 | s26 P1, s59 P4 | `… RELATING TO COOPERATIVE DEVELOPMENT …` | `TREATY BETWEEN CANADA AND THE UNITED STATES OF AMERICA RELATING TO CO-OPERATIVE DEVELOPMENT OF THE WATER RESOURCES OF THE COLUMBIA RIVER BASIN` | A folha recria o título da ONU (No. 7894). A p. 2 quebra a palavra em "CO-/OPERATIVE" (lida na imagem), e o sumário do volume escreve "co-operative" no meio da linha. As notas americanas do mesmo volume escrevem "cooperative", mas não são o cabeçalho. LEVE. |
| VT-185, VT-357 e VT-R25 | s33 P2, s55 P3 | `UP FRONT · 1964 TREATY` | `UP FRONT · UNDER THE TREATY` | Ao lado de `EVERY YEAR · STARTING WITH THE 2025 FLOOD SEASON`, o 1964 se lê como a data do pagamento. O pagamento único veio quando cada armazenamento começou a operar, de 1967–68 a 1973 (F048, F232). E o vídeo chama o tratado de 1961 em todas as linhas de fonte. O redator mede a largura. LEVE. |
| VT-192 | s34 | `Source: Government of British Columbia;`<br>`U.S. diplomatic note to Canada, Nov. 22, 2024` | `Source: Government of British Columbia, 2017;`<br>`U.S. diplomatic note to Canada, Nov. 22, 2024` | A página "Treaty highlights" (F066) tem `datePublished` 2012-04-28 e `dateModified` 2017-02-09 (cópia local `bc-treaty-highlights.html`). |
| VT-219 | s37 | `Source: U.S. Geological Survey;`<br>`Congressional Research Service, 2024` | `Source: U.S. Geological Survey, 2026;`<br>`Congressional Research Service, 2024` | A série de picos do NWIS é uma base viva, lida em 09/11/2026, com dados até 2025; o crédito leva o ano (identidade §7). LEVE. |
| VT-346 | s53 P6 | `Source: U.S. Bureau of Reclamation` | `Source: U.S. Bureau of Reclamation, 2023` | A FAQ do Grand Coulee diz "Last Updated: 10/5/23" (cópia local `usbr-gc-faq.html`). |

## Os `NÃO CONFERIDO`

Nenhum. Os da pré-conferência (P06, P14, P17, P19, P24) ficaram fora da tela ou foram contornados como ela pedia:
- os US$ 29,9 milhões não estão na tela;
- a trena da BC Hydro vai sem cifrão, num eixo próprio;
- as barragens vão sem ano;
- não há "abandoned in 1964";
- não há "proclaimed".

## Os pontos da Sala

1. **s17 (VT-067, VT-068).** `≈ 59% IN MAY–JULY` com `Columbia River at Birchbank, British Columbia · 1938–1967`: `confirmado`.
   - Conta de hoje: 58,92 % pelo volume, 58,85 % com médias simples.
   - Casa com a voz: 59 é "about 60", e a voz apresenta Birchbank como o medidor canadense (s18, s21); s47 usa o mesmo
     arredondamento (59% → 32%).
   - O limite fica de pé: a bacia de Birchbank inclui o alto Kootenai (Montana e Idaho). A tela não pode trocar o dono e manter
     `≈ 60%`. A escolha do redator é tão boa quanto Donald (P25), e mais coerente com s18–s21.
2. **A pergunta do comentário (VT-418, VT-Q01)**, "Would you live by a lake that drops every winter?": `confirmado`.
   - A série mensal de Nakusp (WSC 08NE104): o nível de novembro caiu até o mínimo de dezembro a abril em 54 dos 55 invernos
     completos de 1969 a 2024, e em todos desde 1974.
   - A exceção é 1973–74, o primeiro inverno de Mica.
   - Com F001, F084 e F085, "drops every winter" se sustenta como a voz o diz em s41. A pergunta não pressupõe lago vazio.
3. **s26 (VT-134 a VT-137): `confirmado`.**
   - `IN FORCE SEPT. 16, 1964` está certo (UNTS: "Came into force on 16 September 1964").
   - Os rótulos `Peace Arch` (P22), `Blaine, Washington` e `Surrey, British Columbia` (P21) dizem o que a voz diz: o tratado entrou
     em vigor, e os líderes marcaram o dia na fronteira.
   - Nada na tela fala de assinatura ou ratificação ali (P23). A linha de fonte de s26 P2 (USACE e BPA, que vai a 2009) não diz
     "Peace Arch", mas nome de lugar no mapa não pede crédito.
4. **s28 P2 (VT-148 a VT-150, VT-R57): `confirmado`.**
   - A ordem Duncan Dam → Hugh Keenleyside Dam → Mica Dam (P15), nos nomes da BC Hydro (P16), em 301,07 / 301,31 / 301,63 s.
   - Sem ano (P17). Correção à pré-conferência: o documento da USACE e da BPA citado em P15, P17 e P21 é de 2009, não de "c. 2013".
5. **Os anos dos créditos:**
   - USACE e BPA: **2009**, não 2013 (6 linhas e 2 rótulos);
   - a FAQ da Reclamation: **2023**;
   - "Treaty highlights" da BC: **2017** (publicada em 2012);
   - o USGS de s37 também ia sem ano.
6. **Os voláteis:** a lista abaixo, com a data de cada leitura.

## Os créditos de foto e os avisos do ano

- **Os 25 avisos (VT-A01 a VT-A25, e os mesmos em `_textos_por_cena`):** o ano de cada um é o `data_na_origem` do veredito
  `aprovado` da própria cena em `conferencia-midia.json` (`74ed6065…`). "Photo from about 1910" segue o "circa 1910" da origem.
  As fotos do ano do fato não levam aviso, e não levam: Vanport, junho de 1948; o medidor do USGS; Trail, 2026.
- **Os 12 créditos de mídia** casam autor e licença com o `credito_na_tela` do veredito.
  - A exceção declarada é s18 P4: o Commons diz "Bonneville Power" (a conta Flickr da BPA), e a tela leva "Bonneville Power
    Administration", como o item 38 do para-passos manda. É o mesmo dono: `confirmado`.
  - Os parênteses do veredito (s13, s57, s59) ficaram fora, como o item 38 pede.
- **Os rótulos de lugar sobre foto** nunca são mais específicos que o `lugar_na_origem`:
  - "Arrow Lakes" sobre "Lower Arrow Lake";
  - "Upper Arrow Lake" sobre Nakusp;
  - "Castlegar", "Trail", "Columbia Lake", "Kinbasket Lake", "Libby Dam, Montana", "John Day Dam", "The Dalles Dam", "Grand
    Coulee Dam", "Supreme Court of Canada" e "U.S. Capitol";
  - "Arrowhead, British Columbia";
  - "Example: a U.S. Geological Survey stream gauge", sobre um medidor da Virgínia, avisa que é exemplo.

## Os voláteis, com a data da leitura (a Sala relê antes do render e antes de publicar)

| ids | texto | lido em | o que muda |
|---|---|---|---|
| VT-033, VT-034, VT-388, VT-389 | TALKS PAUSED · SINCE MARCH 2025 | 12/11/2026 (Canadian Geographic, 17/08/2026); a busca de 13/11/2026 não achou retomada | a retomada das conversas |
| VT-390 | NOT RESUMED · AS OF AUG. 17, 2026 | datado na tela | uma fonte mais nova |
| VT-381 | NOT FINALIZED | 12/11/2026 (BC Hydro, jun. 2026); busca de 13/11/2026 | um tratado modernizado assinado |
| VT-191, VT-410 | STILL IN FORCE · IN FORCE | 12/11/2026 (F165, F201) | um aviso de denúncia (Art. XIX(2)) |
| VT-273 | NO NOTICE GIVEN · CRS, DEC. 2024 | 12/11/2026 (F101: nenhum aviso achado) | idem |
| VT-403 a VT-406 | S. 4949 · WOULD MOVE IT TO 2029 · as of Nov. 12, 2026 | 12/11/2026 (BILLSTATUS, F230, F231) | votação no Senado, lei nova |
| VT-401 | AUTHORITY EXPIRES AUG. 31, 2027 | 12/11/2026 (F163) | uma prorrogação pelo Congresso |
| VT-029, VT-395, VT-396, VT-426 | SPRING 2027 · UP TO 3 FLOOD SEASONS · JULY 31, 2027 | 12/11/2026 (F007, F162) | o tratado modernizado em vigor antes (o interino acaba antes) |
| VT-354, VT-355 | −37% · SINCE AUG. 1, 2024 | 12/11/2026 (a Sala, no Departamento de Estado) | o cronograma "anticipated" do AIP |
| VT-373 a VT-377 | o processo e o acordo das PUDs, 25 % | 12/11/2026 (APPA, The Star) | o acordo entrar ou não em vigor |
| VT-014, VT-183, VT-244 | $37.6M A YEAR | 12/11/2026 (PL 118-272) | o fim da autorização (31/08/2027) |

## A lista de nomes

Nada anônimo na tela: toda cifra e toda citação tem dono na pílula ou na linha de fonte. A fala de s45 é de Adrian Dix, com o card.

## Os dois padrões

1. **O ano da fonte copiado de um palpite.** O "c. 2013" do dossiê virou "2013" em 8 lugares, e o documento diz 2009. Duas fontes
   oficiais ("Treaty highlights", a FAQ da Reclamation) tinham data na própria página e foram sem ano.
2. **A data que sobra ao lado de outra.** `UP FRONT · 1964 TREATY` contra `STARTING WITH THE 2025 FLOOD SEASON`: duas pílulas
   paralelas fazem o 1964 parecer a data do pagamento.

## A tabela (um id por linha)

| id | cena | papel | texto | veredito | linha ou fonte |
|---|---|---|---|---|---|
| VT-001 | s01 | rotulo | Arrow Lakes | confirmado | conferência s01: lugar_na_origem Lower Arrow Lake · menos específico que a origem |
| VT-002 | s01 | aviso_ano | Photo from 2007 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · o aviso continua na miniatura de s02 até 4,3 s (o mesmo bloco, 4,15 s no ar) |
| VT-003 | s01 | credito | Shawn from Airdrie, Canada / Wikimedia Commons / CC BY-SA 2.0 | confirmado | conferencia-midia.json, veredito aprovado: Shawn from Airdrie, Canada / Wikimedia Commons · CC BY-SA 2.0 (s01, s02, s12, s28 P4, s43 P4) |
| VT-004 | s02 | aviso_ano | Photo from 2007 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · o aviso preso à miniatura da foto de s01 (conferência, s02 P1), até ela sumir |
| VT-005 | s02 | credito | Shawn from Airdrie, Canada / Wikimedia Commons / CC BY-SA 2.0 | confirmado | conferencia-midia.json, veredito aprovado: Shawn from Airdrie, Canada / Wikimedia Commons · CC BY-SA 2.0 (s01, s02, s12, s28 P4, s43 P4) |
| VT-006 | s02 | rotulo | Arrow Lakes Reservoir | confirmado | F001, F080 (Arrow Lakes Reservoir) |
| VT-007 | s02 | rotulo | CANADA | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-008 | s02 | rotulo | UNITED STATES | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-009 | s02 | rotulo | BRITISH COLUMBIA | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-010 | s02 | legenda | Vertical exaggeration 1.5× | nada a checar | a descrição do próprio gráfico (condição: o terreno 1,5× gravado pelo mapista) · se o valor gravado for outro, o número muda (a condição do redator) |
| VT-011 | s02 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-012 | s03 | legenda | Not to scale | nada a checar | aviso do próprio desenho |
| VT-013 | s03 | cota | STARTING WITH THE 2025 FLOOD SEASON | confirmado | F003, F004; a voz, p1 (starting with the 2025 flood season) |
| VT-014 | s04 | cota | $37.6M | confirmado | F003, F207 |
| VT-015 | s04 | cota | A YEAR | confirmado | F003, F207 |
| VT-016 | s04 | legenda | STARTING VALUE · ADJUSTED FOR INFLATION | confirmado | F003 ($37,600,000 for fiscal year 2025 and $37,600,000, adjusted for inflation) |
| VT-017 | s04 | credito | Source: U.S. Public Law 118-272, 2025 | confirmado | F003, F079, F086, F163 (Approved January 4, 2025) |
| VT-018 | s05 | rotulo | UNITED STATES | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-019 | s05 | rotulo | CANADA | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-020 | s05 | cota | ≈ 15% OF THE BASIN IN CANADA | confirmado | F005 (about 15 percent) |
| VT-021 | s05 | credito | Source: U.S. Army Corps of Engineers and / Bonneville Power Administration, 2013 | corrigir | F005, F031, F042, F046, F048, F056 (a fonte) · o documento diz, na última página: Revised February 2009; o OSTI 1132837 o data de 01/02/2009, e o texto fala da Fase 1 da revisão, completed in late 2009, como futuro. N… |
| VT-022 | s05 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-023 | s06 | rotulo | BRITISH COLUMBIA | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-024 | s06 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-025 | s07 | rotulo | Hugh Keenleyside Dam | confirmado | F080 (Arrow Reservoir, impounded by Hugh Keenleyside Dam); P16 |
| VT-026 | s07 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-027 | s08 | rotulo | INTERIM DEAL | confirmado | F007, F162 (o período interino da nota de 22/11/2024) |
| VT-028 | s08 | eixo | 2025 · 2026 · 2027 | confirmado | F162 (até três anos de operação, até 31/07/2027) |
| VT-029 | s08 | cota | LAST FLOOD SEASON IT CAN COVER · SPRING 2027 | confirmado | F007, F171 · o fim legal é 31/07/2027; a estação é a da voz |
| VT-030 | s08 | credito | Source: U.S. diplomatic note to Canada, Nov. 22, 2024 | confirmado | F007, F162, F165, F171 |
| VT-031 | s09 | rotulo | CANADA | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-032 | s09 | rotulo | UNITED STATES | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-033 | s09 | cota | TALKS PAUSED | confirmado | F008, F009, F010, F156, F157, F160 · VOLÁTIL: lido em 12/11/2026 (Canadian Geographic, 17/08/2026); a busca de 13/11/2026 não achou retomada |
| VT-034 | s09 | cota | SINCE MARCH 2025 | confirmado | F008, F009, F010, F156, F157, F160 · VOLÁTIL: lido em 12/11/2026 (Canadian Geographic, 17/08/2026); a busca de 13/11/2026 não achou retomada |
| VT-035 | s09 | credito | Source: Government of British Columbia, March 11, 2025 | confirmado | F008, F009 · volátil (a pausa) |
| VT-036 | s09 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-037 | s10 | folha_cabecalho | Article IV / OPERATION BY CANADA | confirmado | UNTS 542, Art. IV (cabeçalho), letra a letra (citacoes_tela.txt) |
| VT-038 | s10 | folha_texto | 3. For the purpose of flood control after the expiration of sixty years from the ratification date, and for so long a… | confirmado | UNTS 542, Art. IV(3), PDF p. 5-6: IGUAL letra a letra (art4_3.py) · flood period (a ONU), não flood control period (a CSG West) |
| VT-039 | s10 | legenda | COLUMBIA RIVER TREATY · ART. IV(3) | confirmado | UNTS 542, Art. IV(3) |
| VT-040 | s10 | grifo_na_pagina | Canada shall | confirmado | UNTS 542, Art. IV(3): trecho literal (citacoes_tela.txt) |
| VT-041 | s10 | grifo_na_pagina | when called upon by an entity designated by the United States of America | confirmado | UNTS 542, Art. IV(3): trecho literal (citacoes_tela.txt) |
| VT-042 | s10 | credito | Text: Columbia River Treaty, 1961 (U.N. Treaty Series) | confirmado | UNTS 542, No. 7894 (signed 17/01/1961) |
| VT-043 | s11 | pergunta | So why pay for empty space, when the U.S. can already call on Canada in a flood? | confirmado | F011, F092 (Art. IV(3)): a pergunta pressupõe que os EUA já podem chamar o Canadá numa cheia · vale depois de 16/09/2024 (F066), o tempo do pagamento |
| VT-044 | s11 | legenda | Not to scale | nada a checar | aviso do próprio desenho |
| VT-045 | s11 | grifo_na_pagina | when called upon | confirmado | UNTS 542, Art. IV(3): trecho literal (citacoes_tela.txt) |
| VT-046 | s12 | aviso_ano | Photo from 2009 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · canto inferior esquerdo, fora das áreas da vinheta e acima da faixa do crédito (regência, s12); nenhum rótulo de lugar |
| VT-047 | s12 | credito | Shawn from Airdrie, Canada / Wikimedia Commons / CC BY-SA 2.0 | confirmado | conferencia-midia.json, veredito aprovado: Shawn from Airdrie, Canada / Wikimedia Commons · CC BY-SA 2.0 (s01, s02, s12, s28 P4, s43 P4) |
| VT-048 | s13 | legenda | LARGEST HYDROPOWER-PRODUCING RIVER SYSTEM IN THE U.S. | confirmado | F012 (CRS: the largest hydropower-producing river system in the United States) |
| VT-049 | s13 | credito | Source: Congressional Research Service, 2024 | confirmado | F012, F039, F069, F072, F073, F091, F145, F154, F185 (CRS R43287, Dec. 3, 2024) |
| VT-050 | s13 | aviso_ano | Photo from 2008 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · a miniatura do Columbia Lake fica de "lake" (71,48 s) ao fim do plano (74,9 s): 3,4 s dentro da janela aprovada (item 79) |
| VT-051 | s13 | credito | Jürgen Regel, Marian… / Wikimedia Commons / CC BY 3.0 | confirmado | conferencia-midia.json, veredito aprovado: Jürgen Regel, Marian… / Wikimedia Commons · CC BY 3.0 (s13 P3) |
| VT-052 | s13 | rotulo | BRITISH COLUMBIA | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-053 | s13 | rotulo | Columbia Lake | confirmado | conferência s13 P3 (Columbia Lake, Canada); F013 |
| VT-054 | s13 | rotulo | OREGON | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-055 | s13 | legenda | The river’s big bend | confirmado | F017, F233 (a Big Bend) |
| VT-056 | s13 | rotulo | Kinbasket Lake | confirmado | conferência s14 (Kinbasket Lake); F233 |
| VT-057 | s13 | aviso_ano | Photo from 2010 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · na foto e depois na miniatura (o veredito: aviso_de_ano true) |
| VT-058 | s13 | cota | 498 OF 1,243 MI IN CANADA | confirmado | F015, F016, F018 (USGS 1981: 218 + 280 = 498 de 1,243 mi) |
| VT-059 | s13 | credito | Source: U.S. Geological Survey, 1981 | confirmado | F013, F015, F016, F018 (USGS, River Basins: The Columbia, 1981) |
| VT-060 | s13 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-061 | s13 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-062 | s15 | rotulo | BASIN IN CANADA | confirmado | F005 (a parte canadense da bacia) |
| VT-063 | s15 | legenda | Vertical exaggeration 1.5× | nada a checar | a descrição do próprio gráfico (condição: o terreno 1,5× gravado pelo mapista) · se o valor gravado for outro, o número muda (a condição do redator) |
| VT-064 | s15 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-065 | s16 | legenda | Satellite views: April 14 and July 11, 2024 | confirmado | pauta-geo: o par Landsat 14/04/2024 e 11/07/2024 |
| VT-066 | s17 | eixo | JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC | nada a checar | eixo de meses |
| VT-067 | s17 | cota | ≈ 59% IN MAY–JULY | confirmado | F235; P27: Birchbank 1938-1967, 58,92 % pelo volume (58,85 % simples), logo ≈ 59% · casa com a voz (About 60 percent ... those mountains): 59 é about 60, e a voz apresenta Birchbank como o medidor canadense em s18 e s… |
| VT-068 | s17 | legenda | Columbia River at Birchbank, British Columbia · 1938–1967 | confirmado | F021, F235 (Columbia River at Birchbank, 08NE049) |
| VT-069 | s17 | credito | Alpha Point calculation (Water Survey of Canada). | confirmado | F029, F108-F112, F235; P27 · conta do canal: sem ano, como nos vídeos anteriores |
| VT-070 | s17 | credito | Contains information licensed under the / Open Government Licence – Canada. | confirmado | OGL – Canada (WSC/ECCC; CGNDB) |
| VT-071 | s18 | rotulo | Castlegar, British Columbia | confirmado | conferência s18 P1 (Columbia River at Castlegar) |
| VT-072 | s18 | aviso_ano | Photo from 2013 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) |
| VT-073 | s18 | credito | Murray Foubister / Wikimedia Commons · CC BY-SA 2.0 | confirmado | conferencia-midia.json, veredito aprovado: idem (s18 P1) |
| VT-074 | s18 | legenda | Example: a U.S. Geological Survey stream gauge | confirmado | conferência s18 P2 (um streamgage do USGS em Little Back Creek, Virgínia) · Example: diz que não é o medidor do vídeo |
| VT-075 | s18 | credito | Alan Cressler, USGS / Wikimedia Commons · CC BY 2.0 | confirmado | conferencia-midia.json, veredito aprovado: idem (s18 P2) |
| VT-076 | s18 | rotulo | Birchbank | confirmado | F021 (WSC 08NE049, Birchbank) |
| VT-077 | s18 | rotulo | WATER SURVEY OF CANADA | confirmado | F021 (Water Survey of Canada) |
| VT-078 | s18 | cota | ≈ 12 MI NORTH OF THE BORDER | confirmado | F021 (19,8 km = 12,3 mi ao norte do paralelo 49) |
| VT-079 | s18 | credito | Contains information licensed under the / Open Government Licence – Canada. | confirmado | OGL – Canada (WSC/ECCC; CGNDB) |
| VT-080 | s18 | rotulo | The Dalles, Oregon | confirmado | F022 (USGS 14105700, Columbia River at The Dalles, OR) |
| VT-081 | s18 | rotulo | USGS GAUGE | confirmado | F022 |
| VT-082 | s18 | aviso_ano | Photo from 2013 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · a miniatura presa ao pino de The Dalles, de "Oregon" (147,24 s) ao fim: 2,8 s |
| VT-083 | s18 | credito | Bonneville Power Administration / Wikimedia Commons / CC BY 2.0 | confirmado | conferencia-midia.json, veredito aprovado: Bonneville Power / Wikimedia Commons · CC BY 2.0 (s18 P4): o autor no Commons é a conta Flickr Bonneville Power (bonnevillepower), da BPA; o nome inteiro é o do item 38 do pa… |
| VT-084 | s18 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-085 | s19 | legenda | Birchbank | confirmado | F021 (WSC 08NE049, Birchbank) |
| VT-086 | s19 | legenda | The Dalles | confirmado | F022 (USGS 14105700, Columbia River at The Dalles, OR) |
| VT-087 | s19 | cota | 87 YEARS (1938–2024) | confirmado | F023 (1938-2024, n = 87) |
| VT-088 | s19 | credito | Alpha Point calculation (Water Survey of Canada, USGS). | confirmado | F023, F193 |
| VT-089 | s19 | credito | Contains information licensed under the / Open Government Licence – Canada. | confirmado | OGL – Canada (WSC/ECCC; CGNDB) |
| VT-090 | s19 | rotulo | Birchbank | confirmado | F021 (WSC 08NE049, Birchbank) |
| VT-091 | s19 | rotulo | WATER SURVEY OF CANADA | confirmado | F021 (Water Survey of Canada) |
| VT-092 | s19 | rotulo | The Dalles | confirmado | F022 (USGS 14105700, Columbia River at The Dalles, OR) |
| VT-093 | s19 | rotulo | USGS | confirmado | F022 |
| VT-094 | s19 | cota | ≈ 39% | confirmado | F023, F193 (39,3 %) |
| VT-095 | s19 | cota | MEASURED AT BIRCHBANK · ALPHA POINT CALCULATION | confirmado | F193 (medido em Birchbank, conta do canal) |
| VT-096 | s19 | cota | ≈ 15% OF THE BASIN · USACE AND BPA, 2013 | corrigir | F005, F192 (a fonte) · o ano do documento da USACE e da BPA é 2009 (Revised February 2009), não 2013 |
| VT-097 | s19 | credito | Contains information licensed under the / Open Government Licence – Canada. | confirmado | OGL – Canada (WSC/ECCC; CGNDB) |
| VT-098 | s19 | rotulo | BC Hydro | confirmado | F026 (BC Hydro) |
| VT-099 | s19 | rotulo | Portland | confirmado | nome de cidade (Portland) |
| VT-100 | s19 | credito | Source: BC Hydro, 2026 | confirmado | F027, F028, F107, P13 (BC Hydro, 2026 Operations Update, June 23, 2026) · a URL da BC Hydro não foi registrada (só a cópia da Sala) |
| VT-101 | s19 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-102 | s21 | eixo | JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC | nada a checar | eixo de meses |
| VT-103 | s21 | legenda | BEFORE THE BIG STORAGE DAMS · 1938–1967 | confirmado | F108, F111 (WSC 08NE049, 1938-1967) |
| VT-104 | s21 | cota | JUNE ≈ 10× FEBRUARY | confirmado | F029, F108 (6.134 / 590 = 10,4 vezes) |
| VT-105 | s21 | cota | JUNE ≈ 217,000 CFS | confirmado | F108: 6.134 m3/s x 35,3147 = 216.620 cfs, logo ≈ 217,000 |
| VT-106 | s21 | cota | FEBRUARY ≈ 21,000 CFS | confirmado | F108: 590 m3/s x 35,3147 = 20.836 cfs, logo ≈ 21,000 |
| VT-107 | s21 | credito | Alpha Point calculation (Water Survey of Canada). | confirmado | F029, F108-F112, F235; P27 · conta do canal: sem ano, como nos vídeos anteriores |
| VT-108 | s21 | credito | Contains information licensed under the / Open Government Licence – Canada. | confirmado | OGL – Canada (WSC/ECCC; CGNDB) |
| VT-109 | s22 | rotulo | Vanport · JUNE 1948 | confirmado | conferência s22 P1 e s23 P2 (NARA, Vanport, Oregon, 1948-06) · sem aviso: a foto é do ano do fato |
| VT-110 | s22 | rotulo | Trail, British Columbia | confirmado | F031 (Trail, British Columbia) |
| VT-111 | s22 | rotulo | Vanport | confirmado | F031, F032 (Vanport, Ore., just north of Portland) |
| VT-112 | s22 | rotulo | Portland | confirmado | nome de cidade (Portland) |
| VT-113 | s22 | credito | Source: U.S. Army Corps of Engineers and / Bonneville Power Administration, 2013 | corrigir | F005, F031, F042, F046, F048, F056 (a fonte) · o documento diz, na última página: Revised February 2009; o OSTI 1132837 o data de 01/02/2009, e o texto fala da Fase 1 da revisão, completed in late 2009, como futuro. N… |
| VT-114 | s22 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-115 | s23 | cota | SUNDAY, MAY 30, 1948 | confirmado | P01 (WSP 1080, p. 9: Sunday, May 30) |
| VT-116 | s23 | rotulo | Vanport · JUNE 1948 | confirmado | conferência s22 P1 e s23 P2 (NARA, Vanport, Oregon, 1948-06) · sem aviso: a foto é do ano do fato |
| VT-117 | s23 | cota | AT LEAST 51 DEAD · THE WHOLE 1948 FLOOD | confirmado | F036 (At least 51 lives were lost as a result of the flood) |
| VT-118 | s23 | cota | 38,500 MADE HOMELESS · RED CROSS FIGURES | confirmado | F037; WSP 1080, p. 13: The Red Cross reported the following figures: ... 38,500 persons made homeless |
| VT-119 | s23 | rotulo | Trail, British Columbia | confirmado | F031 (Trail, British Columbia) |
| VT-120 | s23 | rotulo | Vanport | confirmado | F031, F032 (Vanport, Ore., just north of Portland) |
| VT-121 | s23 | credito | Source: U.S. Geological Survey, 1949 | confirmado | F033, F036, F037, P01 (WSP 1080, 1949) |
| VT-122 | s23 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-123 | s24 | legenda | Not to scale | nada a checar | aviso do próprio desenho |
| VT-124 | s24 | rotulo | ROOM | nada a checar | rótulo de metáfora ou de pergunta, sem fato próprio (o fato é o da voz, com a sua linha F) |
| VT-125 | s24 | rotulo | Libby Dam | confirmado | F039 (Libby Dam in Montana) |
| VT-126 | s24 | cota | PROPOSED 1951 | confirmado | F039 (the United States had proposed in 1951 to build Libby Dam) |
| VT-127 | s24 | rotulo | MONTANA | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-128 | s24 | credito | Source: Congressional Research Service, 2024 | confirmado | F012, F039, F069, F072, F073, F091, F145, F154, F185 (CRS R43287, Dec. 3, 2024) |
| VT-129 | s24 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-130 | s26 | folha_cabecalho | No. 7894 | confirmado | UNTS 542, p. 2: No. 7894 |
| VT-131 | s26 | folha_texto | TREATY BETWEEN CANADA AND THE UNITED STATES OF AMERICA RELATING TO COOPERATIVE DEVELOPMENT OF THE WATER RESOURCES OF … | corrigir | UNTS 542, p. 2 (a imagem da página, unts-p2-titulo.png) e o sumário do volume · o título que a ONU imprime quebra a palavra em CO-/OPERATIVE na p. 2, e o sumário do volume escreve co-operative no meio da linha. A folh… |
| VT-132 | s26 | legenda | COLUMBIA RIVER TREATY | confirmado | o nome curto do tratado (glossário; F041) |
| VT-133 | s26 | credito | Text: Columbia River Treaty, 1961 (U.N. Treaty Series) | confirmado | UNTS 542, No. 7894 (signed 17/01/1961) |
| VT-134 | s26 | cota | IN FORCE SEPT. 16, 1964 | confirmado | P23 (UNTS: came into force on 16 September 1964); F041 · com Peace Arch, Blaine e Surrey, a tela diz o que a voz diz (took effect ... marked the day at the border): nenhuma palavra de assinatura ou ratificação ali |
| VT-135 | s26 | rotulo | Blaine, Washington | confirmado | P21 (F042: at the International Boundary at Blaine, Wash., and Surrey, B.C.) |
| VT-136 | s26 | rotulo | Surrey, British Columbia | confirmado | P21 (F042: at the International Boundary at Blaine, Wash., and Surrey, B.C.) |
| VT-137 | s26 | rotulo | Peace Arch | confirmado | P22 (USACE, slides de 30/01/2013, p. 10; BC, comunicado de 16/09/2014) · a linha de fonte de s26 P2 cita só USACE + BPA, que não dizem Peace Arch; nome de lugar no mapa não pede crédito |
| VT-138 | s26 | credito | Source: U.S. Army Corps of Engineers and / Bonneville Power Administration, 2013 | corrigir | F005, F031, F042, F046, F048, F056 (a fonte) · o documento diz, na última página: Revised February 2009; o OSTI 1132837 o data de 01/02/2009, e o texto fala da Fase 1 da revisão, completed in late 2009, como futuro. N… |
| VT-139 | s26 | rotulo | Libby Dam, Montana | confirmado | conferência s27 P2 (Libby Dam, 17 miles north of Libby, Montana) |
| VT-140 | s26 | aviso_ano | Photo from 2025 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · na foto e na miniatura (o veredito: 08.05.2025) |
| VT-141 | s26 | rotulo | Lake Koocanusa | confirmado | F046 (Lake Koocanusa) |
| VT-142 | s26 | cota | 42 MI INTO CANADA | confirmado | F046 (backs 42 miles into Canada) |
| VT-143 | s26 | credito | Source: U.S. Army Corps of Engineers and / Bonneville Power Administration, 2013 | corrigir | F005, F031, F042, F046, F048, F056 (a fonte) · o documento diz, na última página: Revised February 2009; o OSTI 1132837 o data de 01/02/2009, e o texto fala da Fase 1 da revisão, completed in late 2009, como futuro. N… |
| VT-144 | s26 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-145 | s26 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-146 | s28 | cota | $64.4 MILLION | confirmado | F048 ($64.4 million) |
| VT-147 | s28 | cota | LUMP SUMS AS EACH DAM CAME INTO SERVICE | confirmado | F048 (when each of the three Canadian dams became operational) |
| VT-148 | s28 | rotulo | Duncan Dam | confirmado | P15, P16 (a ordem Duncan, Hugh Keenleyside, Mica; os nomes da BC Hydro) · sem ano (P17); 301,07 / 301,31 / 301,63 s |
| VT-149 | s28 | rotulo | Hugh Keenleyside Dam | confirmado | P15, P16 (a ordem Duncan, Hugh Keenleyside, Mica; os nomes da BC Hydro) · sem ano (P17); 301,07 / 301,31 / 301,63 s |
| VT-150 | s28 | rotulo | Mica Dam | confirmado | P15, P16 (a ordem Duncan, Hugh Keenleyside, Mica; os nomes da BC Hydro) · sem ano (P17); 301,07 / 301,31 / 301,63 s |
| VT-151 | s28 | cota | FOR 60 YEARS OF FLOOD PROTECTION | confirmado | F049, F195 (sixty years) |
| VT-152 | s28 | cota | HALF OF THE EXPECTED U.S. FLOOD-DAMAGE SAVINGS | confirmado | F050 (50 percent of the estimated value of U.S. flood damage prevented) |
| VT-153 | s28 | credito | Source: U.S. Army Corps of Engineers and / Bonneville Power Administration, 2013 | corrigir | F005, F031, F042, F046, F048, F056 (a fonte) · o documento diz, na última página: Revised February 2009; o OSTI 1132837 o data de 01/02/2009, e o texto fala da Fase 1 da revisão, completed in late 2009, como futuro. N… |
| VT-154 | s28 | cota | ARROW: $52.1M OF $64.4M | confirmado | F051 (Art. VI(1): 52,1 de 64,4) |
| VT-155 | s28 | cota | COLUMBIA RIVER TREATY, 1961 | confirmado | UNTS 542 (assinado em 17/01/1961) |
| VT-156 | s28 | aviso_ano | Photo from 2007 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · a miniatura do Arrow (s28 P4) |
| VT-157 | s28 | credito | Shawn from Airdrie, Canada / Wikimedia Commons / CC BY-SA 2.0 | confirmado | conferencia-midia.json, veredito aprovado: Shawn from Airdrie, Canada / Wikimedia Commons · CC BY-SA 2.0 (s01, s02, s12, s28 P4, s43 P4) |
| VT-158 | s28 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-159 | s29 | legenda | Not to scale | nada a checar | aviso do próprio desenho |
| VT-160 | s29 | cota | 1964 | confirmado | F041 (em vigor em 1964) |
| VT-161 | s29 | cota | 1964 → 2024 | confirmado | F049, F066 (60 anos da ratificação: de 16/09/1964 a 16/09/2024) |
| VT-162 | s29 | cota | 60 YEARS | confirmado | F049, F066 (60 anos da ratificação: de 16/09/1964 a 16/09/2024) |
| VT-163 | s29 | credito | Source: Columbia River Treaty, 1961, Art. IV(2) | confirmado | UNTS 542 (assinado em 17/01/1961) |
| VT-164 | s30 | rotulo | John Day Dam | confirmado | conferência s30 P2 (John Day Lock and Dam) |
| VT-165 | s30 | aviso_ano | Photo from 2022 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · (item 23: as duas fotos possíveis de s30 são de 2022) |
| VT-166 | s30 | cota | CANADA’S SHARE: HALF THE EXTRA POWER | confirmado | F054 (one half the downstream power benefits) |
| VT-167 | s30 | cota | DELIVERED AS ELECTRICITY | confirmado | F055 (deliver to Canada at a point on the boundary) |
| VT-168 | s30 | credito | Source: Columbia River Treaty, 1961, Art. V | confirmado | F054, F055 |
| VT-169 | s30 | rotulo | BRITISH COLUMBIA | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-170 | s30 | cota | THE FIRST 30 YEARS, SOLD UP FRONT | confirmado | F056; P02 · os 30 anos não contam de 1964 (três fatias, de 1968, 1969 e 1973): nenhuma data vai junto, e não vai |
| VT-171 | s30 | cota | ≈ $254 MILLION | confirmado | F056; P02 ($253,929,534.25 pagos; $254,400,000 o preço) |
| VT-172 | s30 | credito | Source: U.S. Army Corps of Engineers and / Bonneville Power Administration, 2013 | corrigir | F005, F031, F042, F046, F048, F056 (a fonte) · o documento diz, na última página: Revised February 2009; o OSTI 1132837 o data de 01/02/2009, e o texto fala da Fase 1 da revisão, completed in late 2009, como futuro. N… |
| VT-173 | s30 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-174 | s30 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-175 | s31 | cota | 1964–2024 | confirmado | F049, F066 (60 anos da ratificação: de 16/09/1964 a 16/09/2024) |
| VT-176 | s31 | cota | ROOM FOR MONEY | confirmado | F060 (a voz: room for money, and stored water for power) |
| VT-177 | s31 | cota | STORED WATER FOR POWER | confirmado | F060 (a voz: room for money, and stored water for power) |
| VT-178 | s31 | credito | Source: Columbia River Treaty, 1961, Art. IV(2) | confirmado | F049, F060 |
| VT-179 | s32 | rotulo | Upper Arrow Lake | confirmado | conferência s32, s50, s60 (Upper Arrow Lake, Nakusp) |
| VT-180 | s32 | aviso_ano | Photo from 2004 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · junto do rótulo, no terço de cima |
| VT-181 | s32 | credito | Kevstan / Wikimedia Commons · CC BY-SA 3.0 | confirmado | conferencia-midia.json, veredito aprovado: idem (s32 P1) |
| VT-182 | s33 | legenda | Not to scale | nada a checar | aviso do próprio desenho |
| VT-183 | s33 | cota | $37.6M A YEAR | confirmado | F003, F207 |
| VT-184 | s33 | rotulo | INSURANCE? | nada a checar | rótulo de metáfora ou de pergunta, sem fato próprio (o fato é o da voz, com a sua linha F) |
| VT-185 | s33 | cota | UP FRONT · 1964 TREATY | corrigir | F048, F232 (o pagamento único veio quando cada armazenamento começou a operar, de 1967-68 a 1973) · UP FRONT · 1964 TREATY, ao lado de EVERY YEAR · STARTING WITH THE 2025 FLOOD SEASON, lê o 1964 como a data do pagamen… |
| VT-186 | s33 | cota | EVERY YEAR · STARTING WITH THE 2025 FLOOD SEASON | confirmado | F003, F004; a voz, p1 |
| VT-187 | s33 | eixo | 2025 · 2026 · 2027 | confirmado | F162 (até três anos de operação, até 31/07/2027) |
| VT-188 | s33 | credito | Source: Columbia River Treaty, 1961; / U.S. Public Law 118-272, 2025 | confirmado | F232, F003 |
| VT-189 | s34 | cota | SEPT. 16, 2024 | confirmado | F066 (converts on 16 September 2024) |
| VT-190 | s34 | legenda | PROMISE: HELP WHEN CALLED UPON | confirmado | F011, F185 (Art. IV(3); Called Upon) |
| VT-191 | s34 | legenda | STILL IN FORCE | confirmado | F201 (the Treaty, which remains in force) · VOLÁTIL: lido em 12/11/2026 |
| VT-192 | s34 | credito | Source: Government of British Columbia; / U.S. diplomatic note to Canada, Nov. 22, 2024 | corrigir | F066, F185, F200 (BC, Treaty highlights); F201 · a página Treaty highlights do governo da BC tem data: datePublished 2012-04-28, dateModified 2017-02-09 (cópia local midia/rio-columbia/fontes/a/bc-treaty-highlights.html) |
| VT-193 | s35 | rotulo | CALLED-UPON FLOOD CONTROL | confirmado | F185 (Called Upon operation) |
| VT-194 | s35 | rotulo | ON CALL | nada a checar | rótulo de metáfora ou de pergunta, sem fato próprio (o fato é o da voz, com a sua linha F) |
| VT-195 | s35 | credito | Source: Congressional Research Service, 2024 | confirmado | F012, F039, F069, F072, F073, F091, F145, F154, F185 (CRS R43287, Dec. 3, 2024) |
| VT-196 | s35 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-197 | s36 | rotulo | The Dalles, Oregon | confirmado | F022 (USGS 14105700, Columbia River at The Dalles, OR) |
| VT-198 | s36 | legenda | NOT CURRENTLY DEFINED IN THE TREATY | confirmado | F069, F186 (CRS: not currently defined in the Treaty, literal) |
| VT-199 | s36 | legenda | CUBIC FEET PER SECOND (CFS) | confirmado | F070 |
| VT-200 | s36 | credito | Source: Congressional Research Service, 2024 | confirmado | F012, F039, F069, F072, F073, F091, F145, F154, F185 (CRS R43287, Dec. 3, 2024) |
| VT-201 | s36 | rotulo | The Dalles Dam | confirmado | conferência s36 P2 (The Dalles Lock and Dam) |
| VT-202 | s36 | aviso_ano | Photo from 2009 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) |
| VT-203 | s36 | cota | 2014/2024 TREATY REVIEW | confirmado | F071 (2014/2024 review) |
| VT-204 | s36 | cota | U.S. AGENCIES: 450,000–650,000 CFS | confirmado | F072, F202 (U.S. Entity = BPA e USACE: U.S. AGENCIES) |
| VT-205 | s36 | cota | BC HYDRO: ONLY AT 600,000 CFS | confirmado | F073, F203 (the Canadian Entity has assumed ... only once flows reach 600,000 cfs; Canadian Entity = BC Hydro, F026) · é suposição dos estudos da revisão; a voz diz assumed, e a pílula fica sob 2014/2024 TREATY REVIEW |
| VT-206 | s36 | rotulo | THE GAP | nada a checar | rótulo de metáfora ou de pergunta, sem fato próprio (o fato é o da voz, com a sua linha F) |
| VT-207 | s36 | credito | Source: Congressional Research Service, 2024 | confirmado | F012, F039, F069, F072, F073, F091, F145, F154, F185 (CRS R43287, Dec. 3, 2024) |
| VT-208 | s36 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-209 | s36 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-210 | s37 | eixo | 450,000 CFS · 600,000 CFS | confirmado | F072, F073 |
| VT-211 | s37 | cota | 1879–1967 | confirmado | F075, F204 (1879-1967) |
| VT-212 | s37 | legenda | 1961–2008: DAILY AVERAGES | confirmado | dados s37 (USGS: 1961-2008, máximo da média diária, código 1) |
| VT-213 | s37 | cota | AT LEAST 40 OF 89 YEARS | confirmado | F075, F204; item 19 (piso: AT LEAST) |
| VT-214 | s37 | cota | 1948 · 1,010,000 CFS (MAY 31) | confirmado | P11 (USGS 14105700, 1948-05-31, 1,010,000 cfs) |
| VT-215 | s37 | cota | USGS, THE DALLES | confirmado | P11 (USGS 14105700, 1948-05-31, 1,010,000 cfs) |
| VT-216 | s37 | cota | SINCE 2009 | confirmado | F077 (2009-2025) |
| VT-217 | s37 | eixo | 2010 · 2011 · 2012 · 2017 · 2018 · 2020 | confirmado | F077; dados s37 (2010 458,000; 2011 564,000; 2012 587,000; 2017 531,000; 2018 556,000; 2020 465,000) |
| VT-218 | s37 | rotulo | THE GAP | nada a checar | rótulo de metáfora ou de pergunta, sem fato próprio (o fato é o da voz, com a sua linha F) |
| VT-219 | s37 | credito | Source: U.S. Geological Survey; / Congressional Research Service, 2024 | corrigir | F075, F077, F204, P11 (USGS NWIS 14105700); F072, F073 · o USGS vai sem ano; a série de picos é base viva, lida em 09/11/2026 (o bruto rdb), com dados até 2025 |
| VT-220 | s38 | grifo_na_pagina | Approved January 4, 2025. | confirmado | PL 118-272, última linha: Approved January 4, 2025. (literal) |
| VT-221 | s38 | legenda | PUBLIC LAW 118-272 · APPROVED JAN. 4, 2025 | confirmado | PL 118-272 (approved Jan. 4, 2025) |
| VT-222 | s38 | cota | 3.6 MILLION ACRE-FEET A YEAR | confirmado | F079 (3,600,000 acre-feet ... per operating year) |
| VT-223 | s38 | rotulo | Hugh Keenleyside Dam | confirmado | F079, F080 |
| VT-224 | s38 | credito | Source: U.S. Public Law 118-272, 2025 | confirmado | F003, F079, F086, F163 (Approved January 4, 2025) |
| VT-225 | s38 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-226 | s39 | cota | 1 ACRE-FOOT | confirmado | F081 (1 acre to a depth of 1 foot) |
| VT-227 | s39 | cota | 1 ACRE | confirmado | F081 (1 acre to a depth of 1 foot) |
| VT-228 | s39 | cota | 1 FOOT | confirmado | F081 (1 acre to a depth of 1 foot) |
| VT-229 | s39 | credito | Source: Government of British Columbia, 2024 | confirmado | F081 (BC, AIP Public Description, Aug. 30, 2024) |
| VT-230 | s40 | legenda | PUBLIC LAW 118-272 · SEC. 1152 | confirmado | PL 118-272, sec. 1152 (F151) |
| VT-231 | s40 | grifo_na_pagina | operations that the Government of Canada may not be obligated to provide | confirmado | F082 (literal, citacoes_tela.txt) |
| VT-232 | s41 | legenda | Satellite views: July 11 and April 14, 2024 | confirmado | pauta-geo: o par Landsat (a ordem invertida, do cheio ao baixo) |
| VT-233 | s41 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-234 | s41 | legenda | Not to scale | nada a checar | aviso do próprio desenho |
| VT-235 | s41 | legenda | KEPT EMPTY · EVERY YEAR OF THE DEAL | confirmado | F086 (pre-planned flood storage per operating year) |
| VT-236 | s41 | credito | Source: U.S. Public Law 118-272, 2025 | confirmado | F003, F079, F086, F163 (Approved January 4, 2025) |
| VT-237 | s42 | cota | U.S. AGENCIES · PER CALL | confirmado | F091 (between $4 million and $34 million per request; U.S. Entity) |
| VT-238 | s42 | cota | $4–34 MILLION | confirmado | F091 (between $4 million and $34 million per request; U.S. Entity) |
| VT-239 | s42 | credito | Source: Congressional Research Service, 2024 | confirmado | F012, F039, F069, F072, F073, F091, F145, F154, F185 (CRS R43287, Dec. 3, 2024) |
| VT-240 | s42 | cota | BC HYDRO ANALYSIS, 2013 | confirmado | F089 (a análise da BC Hydro no estudo da província de 25/06/2013, p. 11) |
| VT-241 | s42 | cota | $40–150 MILLION IN LOST POWER | confirmado | F089, F206 (U.S. energy losses ... in a Called Upon year: $40-150 million) |
| VT-242 | s42 | cota | IN A CALLED-UPON YEAR | confirmado | F089, F206 (U.S. energy losses ... in a Called Upon year: $40-150 million) |
| VT-243 | s42 | credito | Source: Government of British Columbia, June 25, 2013 | confirmado | F089, F090, F206 |
| VT-244 | s42 | cota | THE PAYMENT: $37.6M A YEAR | confirmado | F003, F207 |
| VT-245 | s42 | credito | Source: U.S. Public Law 118-272, 2025 | confirmado | F003, F079, F086, F163 (Approved January 4, 2025) |
| VT-246 | s43 | folha_cabecalho | Article IV / OPERATION BY CANADA | confirmado | UNTS 542, Art. IV (cabeçalho), letra a letra (citacoes_tela.txt) |
| VT-247 | s43 | folha_texto | 3. For the purpose of flood control after the expiration of sixty years from the ratification date, and for so long a… | confirmado | UNTS 542, Art. IV(3), PDF p. 5-6: IGUAL letra a letra (art4_3.py) · flood period (a ONU), não flood control period (a CSG West) |
| VT-248 | s43 | legenda | COLUMBIA RIVER TREATY · ART. IV(3) | confirmado | UNTS 542, Art. IV(3) |
| VT-249 | s43 | grifo_na_pagina | when called upon | confirmado | UNTS 542, Art. IV(3): trecho literal (citacoes_tela.txt) |
| VT-250 | s43 | legenda | NO NUMBER SAYS WHEN | confirmado | F069, F209 (o gatilho não está definido no tratado) |
| VT-251 | s43 | credito | Text: Columbia River Treaty, 1961 (U.N. Treaty Series) | confirmado | UNTS 542, No. 7894 (signed 17/01/1961) |
| VT-252 | s43 | legenda | Not to scale | nada a checar | aviso do próprio desenho |
| VT-253 | s43 | rotulo | TREATY: THE PROMISE | nada a checar | rótulo de metáfora ou de pergunta, sem fato próprio (o fato é o da voz, com a sua linha F) |
| VT-254 | s43 | rotulo | DEAL: THE ROOM | nada a checar | rótulo de metáfora ou de pergunta, sem fato próprio (o fato é o da voz, com a sua linha F) |
| VT-255 | s43 | credito | Source: U.S. diplomatic note to Canada, Nov. 22, 2024 | confirmado | F007, F162, F165, F171 |
| VT-256 | s43 | aviso_ano | Photo from 2007 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · P4: só o aviso, sem rótulo de lugar (regência: "nada na tela") |
| VT-257 | s43 | credito | Shawn from Airdrie, Canada / Wikimedia Commons / CC BY-SA 2.0 | confirmado | conferencia-midia.json, veredito aprovado: Shawn from Airdrie, Canada / Wikimedia Commons · CC BY-SA 2.0 (s01, s02, s12, s28 P4, s43 P4) |
| VT-258 | s44 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-259 | s45 | cota | CBC NEWS · FEB. 17, 2025 | confirmado | navegador-sala.md (CBC News, uploadDate 2025-02-17, lido pela Sala em 12/11/2026) |
| VT-260 | s45 | citacao | “Could ending a water treaty help Canada fight U.S. tariffs?” | confirmado | navegador-sala.md: o título do vídeo, literal |
| VT-261 | s45 | card_nome | ADRIAN DIX | confirmado | F096 (Adrian Dix, Minister of Energy and Climate Solutions) · o cargo na data da fala |
| VT-262 | s45 | card_cargo | Minister of Energy and Climate Solutions, British Columbia | confirmado | F096 (Adrian Dix, Minister of Energy and Climate Solutions) · o cargo na data da fala |
| VT-263 | s45 | card_data | March 25, 2025 | confirmado | F097 (The Canadian Press, Mar. 25, 2025) |
| VT-264 | s45 | aviso_ano | Photo from 2020 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · o retrato (o veredito: 28 February 2020) |
| VT-265 | s45 | credito | Aeger eger / Wikimedia Commons · CC BY-SA 4.0 | confirmado | conferencia-midia.json, veredito aprovado: idem (s45 P2) |
| VT-266 | s45 | citacao | “…terminate the treaty would have little effect on the current dispute” | confirmado | F098 (literal; as reticências marcam o corte do começo, Canadian action to) |
| VT-267 | s45 | credito | Source: The Canadian Press, March 25, 2025 | confirmado | F097, F098 |
| VT-268 | s45 | folha_cabecalho | Article XIX / PERIOD OF TREATY | confirmado | UNTS 542, Art. XIX (cabeçalho), literal |
| VT-269 | s45 | folha_texto | 2. Either Canada or the United States of America may terminate the Treaty other than Article XIII (except paragraph (… | confirmado | UNTS 542, Art. XIX(2), PDF p. 17: literal (citacoes_tela.txt) |
| VT-270 | s45 | legenda | COLUMBIA RIVER TREATY · ART. XIX(2) | confirmado | UNTS 542, Art. XIX(2) |
| VT-271 | s45 | grifo_na_pagina | terminate the Treaty | confirmado | UNTS 542, Art. XIX(2): trecho literal |
| VT-272 | s45 | grifo_na_pagina | at least ten years written notice | confirmado | UNTS 542, Art. XIX(2): trecho literal |
| VT-273 | s45 | cota | NO NOTICE GIVEN · CRS, DEC. 2024 | confirmado | F101 (CRS: To date, neither country has given notice of termination) · VOLÁTIL: nenhum aviso achado até 12/11/2026 |
| VT-274 | s45 | credito | Text: Columbia River Treaty, 1961 (U.N. Treaty Series) | confirmado | UNTS 542, No. 7894 (signed 17/01/1961) |
| VT-275 | s46 | cota | 15.5 MILLION ACRE-FEET · TREATY STORAGE | confirmado | F104 (15,500,000 acre-feet) |
| VT-276 | s46 | rotulo | The Dalles | confirmado | F022 (USGS 14105700, Columbia River at The Dalles, OR) |
| VT-277 | s46 | cota | ≈ 6 WEEKS OF AVERAGE FLOW AT THE DALLES | confirmado | F102 (41,5 dias = 5,9 semanas) |
| VT-278 | s46 | cota | ALPHA POINT CALCULATION · USGS DATA | confirmado | F102 (41,5 dias = 5,9 semanas) |
| VT-279 | s46 | rotulo | Birchbank | confirmado | F021 (WSC 08NE049, Birchbank) |
| VT-280 | s46 | rotulo | WATER SURVEY OF CANADA | confirmado | F021 (Water Survey of Canada) |
| VT-281 | s46 | cota | CLOSER TO | confirmado | F105 (110 dias = 3,61 meses) |
| VT-282 | s46 | cota | 3.5 MONTHS AT BIRCHBANK | confirmado | F105 (110 dias = 3,61 meses) |
| VT-283 | s46 | cota | ALPHA POINT CALCULATION | confirmado | F105 (110 dias = 3,61 meses) |
| VT-284 | s46 | credito | Contains information licensed under the / Open Government Licence – Canada. | confirmado | OGL – Canada (WSC/ECCC; CGNDB) |
| VT-285 | s46 | rotulo | Trail, British Columbia | confirmado | conferência s46 P3 (Overlooking the 3 bridges of Trail, BC) |
| VT-286 | s46 | credito | Electron2.0 / Wikimedia Commons · CC BY-SA 4.0 | confirmado | conferencia-midia.json, veredito aprovado: idem (s46 P3) |
| VT-287 | s46 | rotulo | Birchbank | confirmado | F021 (WSC 08NE049, Birchbank) |
| VT-288 | s46 | credito | Contains information licensed under the / Open Government Licence – Canada. | confirmado | OGL – Canada (WSC/ECCC; CGNDB) |
| VT-289 | s46 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-290 | s46 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-291 | s47 | eixo | JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC | nada a checar | eixo de meses |
| VT-292 | s47 | legenda | BEFORE THE BIG STORAGE DAMS · 1938–1967 | confirmado | F108, F111 (WSC 08NE049, 1938-1967) |
| VT-293 | s47 | legenda | WITH ALL OF THEM IN PLACE · 1974–2025 | confirmado | F109, F110 (1974-2025) |
| VT-294 | s47 | cota | ≈ 2× | confirmado | F109 (2,1 vezes) |
| VT-295 | s47 | legenda | YEARLY TOTAL · BARELY CHANGED | confirmado | F110, F111 (de 2.026 a 2.001 m3/s, menos 1,2 %) |
| VT-296 | s47 | cota | DECEMBER–FEBRUARY: 8% → 26% | confirmado | F112; P27 (inteiros pelos dois métodos: 7,7/7,8 a 25,6/25,8; 58,9/58,8 a 31,8/31,6) |
| VT-297 | s47 | cota | MAY–JULY: 59% → 32% | confirmado | F112; P27 (inteiros pelos dois métodos: 7,7/7,8 a 25,6/25,8; 58,9/58,8 a 31,8/31,6) |
| VT-298 | s47 | credito | Alpha Point calculation (Water Survey of Canada). | confirmado | F029, F108-F112, F235; P27 · conta do canal: sem ano, como nos vídeos anteriores |
| VT-299 | s47 | credito | Contains information licensed under the / Open Government Licence – Canada. | confirmado | OGL – Canada (WSC/ECCC; CGNDB) |
| VT-300 | s48 | citacao | “must be agreed to by both Canada and the U.S.” · BC HYDRO, 2026 | confirmado | F107 (BC Hydro 2026, p. 7: must be agreed to by both Canada and the U.S., literal) |
| VT-301 | s48 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-302 | s49 | eixo | JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC | nada a checar | eixo de meses |
| VT-303 | s50 | rotulo | Upper Arrow Lake | confirmado | conferência s32, s50, s60 (Upper Arrow Lake, Nakusp) |
| VT-304 | s50 | aviso_ano | Photo from 2023 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · P1 (a foto larga); o mesmo bloco segue na foto de P2, do mesmo dia |
| VT-305 | s50 | aviso_ano | Photo from 2023 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · P2 (a foto de perto, 30/04/2023) |
| VT-306 | s50 | credito | Adam Jones / Wikimedia Commons · CC BY 2.0 | confirmado | conferencia-midia.json, veredito aprovado: idem (s50 P1-P2, s60 P1-P2) |
| VT-307 | s50 | legenda | Not to scale | nada a checar | aviso do próprio desenho |
| VT-308 | s50 | rotulo | ROOM | nada a checar | rótulo de metáfora ou de pergunta, sem fato próprio (o fato é o da voz, com a sua linha F) |
| VT-309 | s51 | rotulo | Arrowhead, British Columbia | confirmado | conferência s51 P1 (The town of Arrowhead, British Columbia); P18 |
| VT-310 | s51 | aviso_ano | Photo from about 1910 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · c. 1910 (o veredito); segue com a foto enquanto ela encolhe até o ponto (P2, 679,6–680,4 s) |
| VT-311 | s51 | rotulo | Arrowhead | confirmado | P18, P20 (o ponto da localidade, sem TOWN, sem afundar) |
| VT-312 | s51 | credito | Contains information licensed under the / Open Government Licence – Canada. | confirmado | OGL – Canada (WSC/ECCC; CGNDB) |
| VT-313 | s51 | cota | ≈ 2,300 PEOPLE DISPLACED | confirmado | BC Review 2012 (Approximately 2,300 people were displaced); F120 |
| VT-314 | s51 | cota | MORE THAN A DOZEN COMMUNITIES FLOODED | confirmado | BC Review 2012 (more than a dozen small communities were inundated); F121 |
| VT-315 | s51 | credito | Source: Government of British Columbia, 2012 | confirmado | BC Review 2012 (Approximately 2,300 people were displaced; more than a dozen small communities were inundated); F120-F123 |
| VT-316 | s51 | rotulo | Edgewood · RELOCATED | confirmado | BC Review 2012, p. 27 (Burton, Fauquier, and Edgewood were relocated); F122 |
| VT-317 | s51 | rotulo | Burton · RELOCATED | confirmado | BC Review 2012, p. 27 (Burton, Fauquier, and Edgewood were relocated); F122 |
| VT-318 | s51 | rotulo | Renata | confirmado | BC Review 2012 (a lista das comunidades perdidas); F123 |
| VT-319 | s51 | legenda | The river’s big bend | confirmado | F017, F233 (a Big Bend) |
| VT-320 | s51 | rotulo | Kinbasket Lake | confirmado | conferência s14 (Kinbasket Lake); F233 |
| VT-321 | s51 | rotulo | Boat Encampment | confirmado | F124 (Boat Encampment, rescinded 1974 due to flooding of Kinbasket Lake behind Mica Dam); pauta-geo (o ponto dentro do lago) |
| VT-322 | s51 | rotulo | UNDER KINBASKET LAKE | confirmado | F124 (Boat Encampment, rescinded 1974 due to flooding of Kinbasket Lake behind Mica Dam); pauta-geo (o ponto dentro do lago) |
| VT-323 | s51 | credito | Contains information licensed under the / Open Government Licence – Canada. | confirmado | OGL – Canada (WSC/ECCC; CGNDB) |
| VT-324 | s51 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-325 | s52 | folha_cabecalho | About the Columbia River Treaty | confirmado | F125; a página da BC, literal (citacoes_tela.txt) |
| VT-326 | s52 | folha_texto | First Nations and public consultation and mitigation at the time could be considered inadequate to non-existent by to… | confirmado | F125; a página da BC, literal (citacoes_tela.txt) |
| VT-327 | s52 | legenda | GOVERNMENT OF BRITISH COLUMBIA | confirmado | a página About the Columbia River Treaty, do governo da BC |
| VT-328 | s52 | grifo_na_pagina | could be considered inadequate to non-existent by today’s standards | confirmado | F125; a página da BC, literal (citacoes_tela.txt) |
| VT-329 | s53 | rotulo | SINIXT TRADITIONAL TERRITORY | confirmado | F130 (traditional territory) |
| VT-330 | s53 | credito | Source: Supreme Court of Canada, R. v. Desautel, 2021 | confirmado | F130-F136; P07-P12 |
| VT-331 | s53 | folha_cabecalho | [6] | confirmado | R. v. Desautel, parágrafo 6 |
| VT-332 | s53 | folha_texto | By 1930, only one person remained on the rolls of the Arrow Lakes Band, and after her death in 1956, the government o… | confirmado | P09 (literal, cortada com reticências) |
| VT-333 | s53 | legenda | R. v. DESAUTEL · PARA. 6 | confirmado | P09, P10 |
| VT-334 | s53 | grifo_na_pagina | after her death in 1956, | confirmado | P10 (literal) |
| VT-335 | s53 | grifo_na_pagina | the government of Canada declared the Arrow Lakes Band extinct | confirmado | P10 (literal) |
| VT-336 | s53 | rotulo | Supreme Court of Canada | confirmado | conferência s53 P3 (the facade of the Supreme Court of Canada) |
| VT-337 | s53 | aviso_ano | Photo from 2022 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) |
| VT-338 | s53 | legenda | R. v. Desautel · April 23, 2021 | confirmado | P12 (2021: April 23) |
| VT-339 | s53 | rotulo | Lakes Tribe | confirmado | F136 (Lakes Tribe of the Colville Confederated Tribes based in the State of Washington) |
| VT-340 | s53 | legenda | COLVILLE CONFEDERATED TRIBES · WASHINGTON STATE | confirmado | F136 (Lakes Tribe of the Colville Confederated Tribes based in the State of Washington) |
| VT-341 | s53 | rotulo | Grand Coulee Dam | confirmado | conferência s54 P2 (Grand Coulee Dam, shown before forebay construction) |
| VT-342 | s53 | aviso_ano | Photo from 1942 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · na foto (P6) e na miniatura (P7) |
| VT-343 | s53 | rotulo | Grand Coulee Dam | confirmado | F126 (Grand Coulee Dam) |
| VT-344 | s53 | cota | FINISHED 1941 | confirmado | F126 (the original dam structure and Left Powerhouse completed in 1941) |
| VT-345 | s53 | aviso_ano | Photo from 1938 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · a miniatura do salmão, em "salmon" (741,28 s): 2,6 s (item 79) |
| VT-346 | s53 | credito | Source: U.S. Bureau of Reclamation | corrigir | F126, F127 (Reclamation, Grand Coulee FAQ) · a página tem data: Last Updated: 10/5/23 (cópia local midia/rio-columbia/fontes/a/usbr-gc-faq.html) |
| VT-347 | s53 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-348 | s53 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-349 | s53 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-350 | s55 | legenda | Not to scale | nada a checar | aviso do próprio desenho |
| VT-351 | s55 | rotulo | U.S. | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-352 | s55 | rotulo | CANADA | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-353 | s55 | cota | CANADA’S SHARE | confirmado | P05 (a parte do Canadá, o CE) |
| VT-354 | s55 | cota | −37% · SINCE AUG. 1, 2024 | confirmado | P05; navegador-sala.md (Beginning on August 1, the Canadian Entitlement decreased by 37%; MEDIA NOTE, Nov. 25, 2024) |
| VT-355 | s55 | cota | U.S. STATE DEPARTMENT, NOV. 25, 2024 | confirmado | P05; navegador-sala.md (Beginning on August 1, the Canadian Entitlement decreased by 37%; MEDIA NOTE, Nov. 25, 2024) |
| VT-356 | s55 | cota | EVERY YEAR · STARTING WITH THE 2025 FLOOD SEASON | confirmado | F003, F004; a voz, p1 |
| VT-357 | s55 | cota | UP FRONT · 1964 TREATY | corrigir | F048, F232 (o pagamento único veio quando cada armazenamento começou a operar, de 1967-68 a 1973) · UP FRONT · 1964 TREATY, ao lado de EVERY YEAR · STARTING WITH THE 2025 FLOOD SEASON, lê o 1964 como a data do pagamen… |
| VT-358 | s55 | credito | Source: Columbia River Treaty, 1961; / U.S. Public Law 118-272, 2025 | confirmado | F232, F003 |
| VT-359 | s55 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-360 | s56 | cota | U.S. AGENCIES, JUNE 2012 | confirmado | F141-F144 (CRS nota 26: U.S. Entity, Recent Study Results, June 2012) |
| VT-361 | s56 | cota | ≈ +$180–280 MILLION A YEAR | confirmado | CRS nota 26: net annual revenues for the United States would increase by about $180 million to $280 million · é o cenário sem o tratado; a voz o diz (ending it would raise American power revenues) |
| VT-362 | s56 | credito | Source: Congressional Research Service, 2024 | confirmado | F012, F039, F069, F072, F073, F091, F145, F154, F185 (CRS R43287, Dec. 3, 2024) |
| VT-363 | s56 | legenda | DISPUTED BY BRITISH COLUMBIA | confirmado | F145 (It disputed several assumptions in the U.S. Entity review process) |
| VT-364 | s56 | cota | CANADA’S SHARE: TYPICALLY 110–400 MILLION A YEAR | confirmado | P13 (o número e a data); P14 (a moeda NÃO CONFERIDA: a tela vai sem cifrão, num eixo próprio, como a instrução da arte manda) |
| VT-365 | s56 | cota | BC HYDRO, JUNE 2026 | confirmado | P13 (o número e a data); P14 (a moeda NÃO CONFERIDA: a tela vai sem cifrão, num eixo próprio, como a instrução da arte manda) |
| VT-366 | s56 | credito | Source: BC Hydro, 2026 | confirmado | F027, F028, F107, P13 (BC Hydro, 2026 Operations Update, June 23, 2026) · a URL da BC Hydro não foi registrada (só a cópia da Sala) |
| VT-367 | s57 | rotulo | U.S. Capitol | confirmado | conferência s57 P2 e s59 P2 (U.S. Capitol) |
| VT-368 | s57 | aviso_ano | Photo from 2024 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) |
| VT-369 | s57 | cota | FEDERAL · PUBLIC LAW 118-272 | confirmado | F151 (Public Law 118-272: o pagamento é federal) |
| VT-370 | s57 | aviso_ano | Photo from 2009 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · a miniatura de Rocky Reach (sem rótulo: a voz não nomeia a barragem) |
| VT-371 | s57 | credito | David Brodbeck / Wikimedia Commons · CC BY 2.0 | confirmado | conferencia-midia.json, veredito aprovado: David Brodbeck / Wikimedia Commons · CC BY 2.0 (s57 P3; o parêntese do veredito fica fora, item 38) |
| VT-372 | s57 | legenda | Chelan, Grant and Douglas public utility districts | confirmado | F224, F228 (Chelan, Grant and Douglas) |
| VT-373 | s57 | cota | JUNE 2024: LAWSUIT | confirmado | F153 (initiated litigation in June 2024) |
| VT-374 | s57 | cota | SEPTEMBER 2024: STOPPED PAYING | confirmado | F225 (stopped contributing to the CE in September 2024) |
| VT-375 | s57 | cota | SEPTEMBER 2026: SETTLEMENT | confirmado | APPA, 25/09/2026 (approved a settlement agreement ... announced on Sept. 25) · VOLÁTIL: o acordo ainda vai entrar em vigor |
| VT-376 | s57 | cota | THEY PAY 25% OF CANADA’S SHARE | confirmado | F223 (will pay for 25% of the reduced Canadian Entitlement (CE) obligations) · uma fonte só (a APPA; o Star a repete), atribuída na linha de fonte; VOLÁTIL |
| VT-377 | s57 | credito | Source: American Public Power Association, 2026; / The Star (Grand Coulee), Sept. 30, 2026 | confirmado | F152, F153, F223, F225 (APPA, Sept. 25, 2026; The Star, Sept. 30, 2026) · o Star repete o texto da APPA (P06): uma fonte só, atribuída; volátil |
| VT-378 | s57 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-379 | s57 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-380 | s58 | cota | AGREEMENT IN PRINCIPLE · JULY 11, 2024 | confirmado | F154 (agreement in principle ... on July 11, 2024) |
| VT-381 | s58 | rotulo | NOT FINALIZED | confirmado | BC Hydro 2026, p. 8 (Treaty negotiations ... are currently paused); F172 · VOLÁTIL: lido em 12/11/2026; a busca de 13/11/2026 não achou acordo |
| VT-382 | s58 | rotulo | KTUNAXA · SYILX-OKANAGAN · SECWÉPEMC | confirmado | F158, F159 (Ktunaxa, Syilx-Okanagan, Secwépemc) |
| VT-383 | s58 | credito | Source: Congressional Research Service, 2024 | confirmado | F012, F039, F069, F072, F073, F091, F145, F154, F185 (CRS R43287, Dec. 3, 2024) |
| VT-384 | s58 | credito | Source: BC Hydro, 2026 | confirmado | F027, F028, F107, P13 (BC Hydro, 2026 Operations Update, June 23, 2026) · a URL da BC Hydro não foi registrada (só a cópia da Sala) |
| VT-385 | s58 | credito | Source: Global Affairs Canada, May 28, 2025 | confirmado | F158, F159 |
| VT-386 | s58 | rotulo | CANADA | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-387 | s58 | rotulo | UNITED STATES | confirmado | nome de país, estado ou província no mapa (glossário) |
| VT-388 | s58 | cota | TALKS PAUSED | confirmado | F008, F009, F010, F156, F157, F160 · VOLÁTIL: lido em 12/11/2026 (Canadian Geographic, 17/08/2026); a busca de 13/11/2026 não achou retomada |
| VT-389 | s58 | cota | SINCE MARCH 2025 | confirmado | F008, F009, F010, F156, F157, F160 · VOLÁTIL: lido em 12/11/2026 (Canadian Geographic, 17/08/2026); a busca de 13/11/2026 não achou retomada |
| VT-390 | s58 | cota | NOT RESUMED · AS OF AUG. 17, 2026 | confirmado | F010, F160 (At the time of writing, the negotiations are still paused; Aug. 17, 2026) · datado (AS OF): reler antes do render e antes de publicar |
| VT-391 | s58 | credito | Source: Government of British Columbia, March 11, 2025 | confirmado | F008, F009 · volátil (a pausa) |
| VT-392 | s58 | credito | Source: Canadian Geographic, Aug. 17, 2026 | confirmado | F010, F160 · volátil |
| VT-393 | s58 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-394 | s59 | eixo | 2025 · 2026 · 2027 | confirmado | F162 (até três anos de operação, até 31/07/2027) |
| VT-395 | s59 | cota | UP TO 3 FLOOD SEASONS | confirmado | F162 (up to three consecutive operating years) |
| VT-396 | s59 | cota | ENDS JULY 31, 2027 AT THE LATEST | confirmado | F007 (or July 31, 2027) |
| VT-397 | s59 | credito | Source: U.S. diplomatic note to Canada, Nov. 22, 2024 | confirmado | F007, F162, F165, F171 |
| VT-398 | s59 | rotulo | U.S. Capitol | confirmado | conferência s57 P2 e s59 P2 (U.S. Capitol) |
| VT-399 | s59 | aviso_ano | Photo from 2014 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) |
| VT-400 | s59 | credito | David / Wikimedia Commons · CC BY 2.0 | confirmado | conferencia-midia.json, veredito aprovado: David / Wikimedia Commons · CC BY 2.0 (s59 P2; idem) |
| VT-401 | s59 | cota | AUTHORITY EXPIRES AUG. 31, 2027 | confirmado | F163, F229 (shall expire on August 31, 2027) · VOLÁTIL: muda se o Congresso prorrogar |
| VT-402 | s59 | credito | Source: U.S. Public Law 118-272, 2025 | confirmado | F003, F079, F086, F163 (Approved January 4, 2025) |
| VT-403 | s59 | cota | SENATE BILL S. 4949 | confirmado | F164, F230, F231 (S. 4949: de 2027 para 2029) · VOLÁTIL: lido em 12/11/2026 |
| VT-404 | s59 | cota | WOULD MOVE IT TO 2029 | confirmado | F164, F230, F231 (S. 4949: de 2027 para 2029) · VOLÁTIL: lido em 12/11/2026 |
| VT-405 | s59 | eixo | 2027 · 2029 | confirmado | F164, F230, F231 (S. 4949: de 2027 para 2029) · VOLÁTIL: lido em 12/11/2026 |
| VT-406 | s59 | credito | Source: U.S. Senate, S. 4949, as of Nov. 12, 2026 | confirmado | F164, F230, F231 · volátil: o BILLSTATUS lido em 12/11/2026 |
| VT-407 | s59 | folha_cabecalho | No. 7894 | confirmado | UNTS 542, p. 2: No. 7894 |
| VT-408 | s59 | folha_texto | TREATY BETWEEN CANADA AND THE UNITED STATES OF AMERICA RELATING TO COOPERATIVE DEVELOPMENT OF THE WATER RESOURCES OF … | corrigir | UNTS 542, p. 2 (a imagem da página, unts-p2-titulo.png) e o sumário do volume · o título que a ONU imprime quebra a palavra em CO-/OPERATIVE na p. 2, e o sumário do volume escreve co-operative no meio da linha. A folh… |
| VT-409 | s59 | legenda | COLUMBIA RIVER TREATY | confirmado | o nome curto do tratado (glossário; F041) |
| VT-410 | s59 | legenda | IN FORCE | confirmado | F165, F201 (remains in force) · VOLÁTIL: lido em 12/11/2026 |
| VT-411 | s59 | legenda | NO NUMBER SAYS WHEN | confirmado | F069, F209 (o gatilho não está definido no tratado) |
| VT-412 | s59 | credito | Text: Columbia River Treaty, 1961 (U.N. Treaty Series) | confirmado | UNTS 542, No. 7894 (signed 17/01/1961) |
| VT-413 | s59 | credito | Source: U.S. diplomatic note to Canada, Nov. 22, 2024 | confirmado | F007, F162, F165, F171 |
| VT-414 | s60 | rotulo | Upper Arrow Lake | confirmado | conferência s32, s50, s60 (Upper Arrow Lake, Nakusp) |
| VT-415 | s60 | aviso_ano | Photo from 2023 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · P1, junto do rótulo, no terço de baixo à esquerda |
| VT-416 | s60 | aviso_ano | Photo from 2023 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · P2, sozinho (a outra foto do mesmo dia, a praia ao pôr do sol) |
| VT-417 | s60 | credito | Adam Jones / Wikimedia Commons · CC BY 2.0 | confirmado | conferencia-midia.json, veredito aprovado: idem (s50 P1-P2, s60 P1-P2) |
| VT-418 | s60 | chamada | Would you live by a lake that drops every winter? | confirmado | F001, F084, F085; a série mensal de Nakusp (WSC 08NE104), arrow_inverno.txt: o nível de novembro caiu até o mínimo de dez-abr em 54 dos 55 invernos completos de 1969 a 2024, e em todos desde 1974 · a única exceção é 1… |
| VT-419 | s61 | legenda | Not to scale | nada a checar | aviso do próprio desenho |
| VT-420 | s61 | rotulo | ROOM | nada a checar | rótulo de metáfora ou de pergunta, sem fato próprio (o fato é o da voz, com a sua linha F) |
| VT-421 | s61 | legenda | Satellite views: April 14 and July 11, 2024 | confirmado | pauta-geo: o par Landsat 14/04/2024 e 11/07/2024 |
| VT-422 | s61 | rotulo | Portland | confirmado | nome de cidade (Portland) |
| VT-423 | s61 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-424 | s63 | legenda | Not to scale | nada a checar | aviso do próprio desenho |
| VT-425 | s63 | rotulo | ROOM | nada a checar | rótulo de metáfora ou de pergunta, sem fato próprio (o fato é o da voz, com a sua linha F) |
| VT-426 | s63 | cota | SPRING 2027 | confirmado | F007, F171 (o fim do interino, 31/07/2027: a primavera de 2027 é a última) |
| VT-427 | s63 | credito | Source: U.S. diplomatic note to Canada, Nov. 22, 2024 | confirmado | F007, F162, F165, F171 |
| VT-428 | s63 | credito | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 (a base de mapa) |
| VT-K01 | s45 | card | ADRIAN DIX / Minister of Energy and Climate Solutions, British Columbia / March 25, 2025; o retrato de 2020 com "Phot… | confirmado | F096, F097, F098; conferência s45 P2 (o retrato de 2020, Aeger eger, CC BY-SA 4.0) · o card diz o cargo da data da fala (25/03/2025) |
| VT-R01 | s04 | rotulo_dado | $37.6M A YEAR · STARTING VALUE · ADJUSTED FOR INFLATION | confirmado | o mesmo texto de VT-014 VT-015 VT-016; F003, F207 |
| VT-R02 | s05 | rotulo_dado | ≈ 15% OF THE BASIN IN CANADA | confirmado | o mesmo texto de VT-020; F005 (about 15 percent) |
| VT-R03 | s08 | rotulo_dado | LAST FLOOD SEASON IT CAN COVER · SPRING 2027 | confirmado | o mesmo texto de VT-029; F007, F171 · o fim legal é 31/07/2027; a estação é a da voz |
| VT-R04 | s09, s58 | rotulo_dado | TALKS PAUSED / SINCE MARCH 2025 | confirmado | o mesmo texto de VT-033 VT-034; F008, F009, F010, F156, F157, F160 · VOLÁTIL: lido em 12/11/2026 (Canadian Geographic, 17/08/2026); a busca de 13/11/2026 não achou retomada |
| VT-R05 | s13 | rotulo_dado | 498 OF 1,243 MI IN CANADA | confirmado | o mesmo texto de VT-058; F015, F016, F018 (USGS 1981: 218 + 280 = 498 de 1,243 mi) |
| VT-R06 | s17 | rotulo_dado | ≈ 59% IN MAY–JULY | confirmado | o mesmo texto de VT-067; F235; P27: Birchbank 1938-1967, 58,92 % pelo volume (58,85 % simples), logo ≈ 59% · casa com a voz (About 60 percent ... those mountains): 59 é about 60, e a voz apresenta Birchbank como o med… |
| VT-R07 | s18 | rotulo_dado | ≈ 12 MI NORTH OF THE BORDER | confirmado | o mesmo texto de VT-078; F021 (19,8 km = 12,3 mi ao norte do paralelo 49) |
| VT-R08 | s19 | rotulo_dado | 87 YEARS (1938–2024) | confirmado | o mesmo texto de VT-087; F023 (1938-2024, n = 87) |
| VT-R09 | s19 | rotulo_dado | ≈ 39% · MEASURED AT BIRCHBANK · ALPHA POINT CALCULATION | confirmado | o mesmo texto de VT-094 VT-095; F023, F193 (39,3 %) |
| VT-R10 | s19 | rotulo_dado | ≈ 15% OF THE BASIN · USACE AND BPA, 2013 | corrigir | o mesmo texto de VT-096; F005, F192 (a fonte) · o ano do documento da USACE e da BPA é 2009 (Revised February 2009), não 2013 |
| VT-R11 | s21 | rotulo_dado | JUNE ≈ 10× FEBRUARY | confirmado | o mesmo texto de VT-104; F029, F108 (6.134 / 590 = 10,4 vezes) |
| VT-R12 | s21 | rotulo_dado | JUNE ≈ 217,000 CFS · FEBRUARY ≈ 21,000 CFS | confirmado | o mesmo texto de VT-105 VT-106; F108: 6.134 m3/s x 35,3147 = 216.620 cfs, logo ≈ 217,000 |
| VT-R13 | s23 | rotulo_dado | SUNDAY, MAY 30, 1948 | confirmado | o mesmo texto de VT-115; P01 (WSP 1080, p. 9: Sunday, May 30) |
| VT-R14 | s23 | rotulo_dado | AT LEAST 51 DEAD · THE WHOLE 1948 FLOOD | confirmado | o mesmo texto de VT-117; F036 (At least 51 lives were lost as a result of the flood) |
| VT-R15 | s23 | rotulo_dado | 38,500 MADE HOMELESS · RED CROSS FIGURES | confirmado | o mesmo texto de VT-118; F037; WSP 1080, p. 13: The Red Cross reported the following figures: ... 38,500 persons made homeless |
| VT-R16 | s24 | rotulo_dado | Libby Dam / PROPOSED 1951 | confirmado | o mesmo texto de VT-125 VT-126; F039 (Libby Dam in Montana) |
| VT-R17 | s26 | rotulo_dado | IN FORCE SEPT. 16, 1964 | confirmado | o mesmo texto de VT-134; P23 (UNTS: came into force on 16 September 1964); F041 · com Peace Arch, Blaine e Surrey, a tela diz o que a voz diz (took effect ... marked the day at the border): nenhuma palavra de assinatu… |
| VT-R18 | s26 | rotulo_dado | Lake Koocanusa / 42 MI INTO CANADA | confirmado | o mesmo texto de VT-141 VT-142; F046 (Lake Koocanusa) |
| VT-R19 | s28 | rotulo_dado | $64.4 MILLION · LUMP SUMS AS EACH DAM CAME INTO SERVICE · FOR 60 YEARS OF FLOOD PROTECTION | confirmado | o mesmo texto de VT-146 VT-147 VT-151; F048 ($64.4 million) |
| VT-R20 | s28 | rotulo_dado | HALF OF THE EXPECTED U.S. FLOOD-DAMAGE SAVINGS | confirmado | o mesmo texto de VT-152; F050 (50 percent of the estimated value of U.S. flood damage prevented) |
| VT-R21 | s28 | rotulo_dado | ARROW: $52.1M OF $64.4M · COLUMBIA RIVER TREATY, 1961 | confirmado | o mesmo texto de VT-154 VT-155; F051 (Art. VI(1): 52,1 de 64,4) |
| VT-R22 | s29, s31 | rotulo_dado | 1964 → 2024 / 60 YEARS; 1964–2024 | confirmado | o mesmo texto de VT-161 VT-162 VT-175; F049, F066 (60 anos da ratificação: de 16/09/1964 a 16/09/2024) |
| VT-R23 | s30 | rotulo_dado | CANADA’S SHARE: HALF THE EXTRA POWER · DELIVERED AS ELECTRICITY | confirmado | o mesmo texto de VT-166 VT-167; F054 (one half the downstream power benefits) |
| VT-R24 | s30 | rotulo_dado | ≈ $254 MILLION · THE FIRST 30 YEARS, SOLD UP FRONT | confirmado | o mesmo texto de VT-170 VT-171; F056; P02 · os 30 anos não contam de 1964 (três fatias, de 1968, 1969 e 1973): nenhuma data vai junto, e não vai |
| VT-R25 | s33, s55 | rotulo_dado | EVERY YEAR · STARTING WITH THE 2025 FLOOD SEASON; UP FRONT · 1964 TREATY | corrigir | o mesmo texto de VT-185 VT-186; F048, F232 (o pagamento único veio quando cada armazenamento começou a operar, de 1967-68 a 1973) · UP FRONT · 1964 TREATY, ao lado de EVERY YEAR · STARTING WITH THE 2025 FLOOD SEASON, … |
| VT-R26 | s34 | rotulo_dado | SEPT. 16, 2024 · PROMISE: HELP WHEN CALLED UPON · STILL IN FORCE | confirmado | o mesmo texto de VT-189 VT-190 VT-191; F066 (converts on 16 September 2024) |
| VT-R27 | s36 | rotulo_dado | U.S. AGENCIES: 450,000–650,000 CFS | confirmado | o mesmo texto de VT-204; F072, F202 (U.S. Entity = BPA e USACE: U.S. AGENCIES) |
| VT-R28 | s36 | rotulo_dado | BC HYDRO: ONLY AT 600,000 CFS | confirmado | o mesmo texto de VT-205; F073, F203 (the Canadian Entity has assumed ... only once flows reach 600,000 cfs; Canadian Entity = BC Hydro, F026) · é suposição dos estudos da revisão; a voz diz assumed, e a pílula fica so… |
| VT-R29 | s37 | rotulo_dado | AT LEAST 40 OF 89 YEARS · 1879–1967 | confirmado | o mesmo texto de VT-211 VT-213; F075, F204 (1879-1967) |
| VT-R30 | s37 | rotulo_dado | 1961–2008: DAILY AVERAGES | confirmado | o mesmo texto de VT-212; dados s37 (USGS: 1961-2008, máximo da média diária, código 1) |
| VT-R31 | s37 | rotulo_dado | 1948 · 1,010,000 CFS (MAY 31) / USGS, THE DALLES | confirmado | o mesmo texto de VT-214 VT-215; P11 (USGS 14105700, 1948-05-31, 1,010,000 cfs) |
| VT-R32 | s37 | rotulo_dado | SINCE 2009 · 2010 · 2011 · 2012 · 2017 · 2018 · 2020 | confirmado | o mesmo texto de VT-216 VT-217; F077 (2009-2025) |
| VT-R33 | s38 | rotulo_dado | 3.6 MILLION ACRE-FEET A YEAR | confirmado | o mesmo texto de VT-222; F079 (3,600,000 acre-feet ... per operating year) |
| VT-R34 | s38 | rotulo_dado | PUBLIC LAW 118-272 · APPROVED JAN. 4, 2025 | confirmado | o mesmo texto de VT-221; PL 118-272 (approved Jan. 4, 2025) |
| VT-R35 | s42 | rotulo_dado | $4–34 MILLION · U.S. AGENCIES · PER CALL | confirmado | o mesmo texto de VT-237 VT-238; F091 (between $4 million and $34 million per request; U.S. Entity) |
| VT-R36 | s42 | rotulo_dado | $40–150 MILLION IN LOST POWER · IN A CALLED-UPON YEAR · BC HYDRO ANALYSIS, 2013 | confirmado | o mesmo texto de VT-240 VT-241 VT-242; F089 (a análise da BC Hydro no estudo da província de 25/06/2013, p. 11) |
| VT-R37 | s42 | rotulo_dado | THE PAYMENT: $37.6M A YEAR | confirmado | o mesmo texto de VT-244; F003, F207 |
| VT-R38 | s45 | rotulo_dado | NO NOTICE GIVEN · CRS, DEC. 2024 | confirmado | o mesmo texto de VT-273; F101 (CRS: To date, neither country has given notice of termination) · VOLÁTIL: nenhum aviso achado até 12/11/2026 |
| VT-R39 | s46 | rotulo_dado | 15.5 MILLION ACRE-FEET · TREATY STORAGE | confirmado | o mesmo texto de VT-275; F104 (15,500,000 acre-feet) |
| VT-R40 | s46 | rotulo_dado | ≈ 6 WEEKS OF AVERAGE FLOW AT THE DALLES · ALPHA POINT CALCULATION · USGS DATA | confirmado | o mesmo texto de VT-277 VT-278; F102 (41,5 dias = 5,9 semanas) |
| VT-R41 | s46 | rotulo_dado | CLOSER TO 3.5 MONTHS AT BIRCHBANK · ALPHA POINT CALCULATION | confirmado | o mesmo texto de VT-281 VT-282 VT-283; F105 (110 dias = 3,61 meses) |
| VT-R42 | s47 | rotulo_dado | ≈ 2× · WITH ALL OF THEM IN PLACE · 1974–2025 | confirmado | o mesmo texto de VT-293 VT-294; F109, F110 (1974-2025) |
| VT-R43 | s47 | rotulo_dado | MAY–JULY: 59% → 32% · DECEMBER–FEBRUARY: 8% → 26% | confirmado | o mesmo texto de VT-296 VT-297; F112; P27 (inteiros pelos dois métodos: 7,7/7,8 a 25,6/25,8; 58,9/58,8 a 31,8/31,6) |
| VT-R44 | s51 | rotulo_dado | ≈ 2,300 PEOPLE DISPLACED · MORE THAN A DOZEN COMMUNITIES FLOODED | confirmado | o mesmo texto de VT-313 VT-314; BC Review 2012 (Approximately 2,300 people were displaced); F120 |
| VT-R45 | s53 | rotulo_dado | R. v. Desautel · April 23, 2021 | confirmado | o mesmo texto de VT-338; P12 (2021: April 23) |
| VT-R46 | s53 | rotulo_dado | Grand Coulee Dam / FINISHED 1941 | confirmado | o mesmo texto de VT-343 VT-344; F126 (Grand Coulee Dam) |
| VT-R47 | s55 | rotulo_dado | CANADA’S SHARE · −37% · SINCE AUG. 1, 2024 · U.S. STATE DEPARTMENT, NOV. 25, 2024 | confirmado | o mesmo texto de VT-353 VT-354 VT-355; P05 (a parte do Canadá, o CE) |
| VT-R48 | s56 | rotulo_dado | ≈ +$180–280 MILLION A YEAR · U.S. AGENCIES, JUNE 2012 | confirmado | o mesmo texto de VT-360 VT-361; F141-F144 (CRS nota 26: U.S. Entity, Recent Study Results, June 2012) |
| VT-R49 | s56 | rotulo_dado | CANADA’S SHARE: TYPICALLY 110–400 MILLION A YEAR · BC HYDRO, JUNE 2026 | confirmado | o mesmo texto de VT-364 VT-365; P13 (o número e a data); P14 (a moeda NÃO CONFERIDA: a tela vai sem cifrão, num eixo próprio, como a instrução da arte manda) |
| VT-R50 | s57 | rotulo_dado | JUNE 2024: LAWSUIT · SEPTEMBER 2024: STOPPED PAYING · SEPTEMBER 2026: SETTLEMENT · THEY PAY 25% OF CANADA’S SHARE | confirmado | o mesmo texto de VT-373 VT-374 VT-375 VT-376; F153 (initiated litigation in June 2024) |
| VT-R51 | s58 | rotulo_dado | AGREEMENT IN PRINCIPLE · JULY 11, 2024 | confirmado | o mesmo texto de VT-380; F154 (agreement in principle ... on July 11, 2024) |
| VT-R52 | s58 | rotulo_dado | NOT RESUMED · AS OF AUG. 17, 2026 | confirmado | o mesmo texto de VT-390; F010, F160 (At the time of writing, the negotiations are still paused; Aug. 17, 2026) · datado (AS OF): reler antes do render e antes de publicar |
| VT-R53 | s59 | rotulo_dado | UP TO 3 FLOOD SEASONS · ENDS JULY 31, 2027 AT THE LATEST | confirmado | o mesmo texto de VT-395 VT-396; F162 (up to three consecutive operating years) |
| VT-R54 | s59 | rotulo_dado | AUTHORITY EXPIRES AUG. 31, 2027 | confirmado | o mesmo texto de VT-401; F163, F229 (shall expire on August 31, 2027) · VOLÁTIL: muda se o Congresso prorrogar |
| VT-R55 | s59 | rotulo_dado | SENATE BILL S. 4949 · WOULD MOVE IT TO 2029 | confirmado | o mesmo texto de VT-403 VT-404; F164, F230, F231 (S. 4949: de 2027 para 2029) · VOLÁTIL: lido em 12/11/2026 |
| VT-R56 | s63 | rotulo_dado | SPRING 2027 | confirmado | o mesmo texto de VT-426; F007, F171 (o fim do interino, 31/07/2027: a primavera de 2027 é a última) |
| VT-R57 | s28 | rotulo_dado | Duncan Dam → Hugh Keenleyside Dam → Mica Dam (as barragens que acendem em ordem, sem ano) | confirmado | o mesmo texto de VT-148 VT-149 VT-150; P15, P16 (a ordem Duncan, Hugh Keenleyside, Mica; os nomes da BC Hydro) · sem ano (P17); 301,07 / 301,31 / 301,63 s |
| VT-A01 | s01 | aviso_ano | Photo from 2007 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 2 February 2007, 15:15 (campo Date da página do Commons, vindo do Flickr) |
| VT-A02 | s02 | aviso_ano | Photo from 2007 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 2 February 2007, 15:15 (campo Date da página do Commons, vindo do Flickr) |
| VT-A03 | s12 | aviso_ano | Photo from 2009 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 19 August 2009, 19:08 (campo Date, vindo do Flickr) |
| VT-A04 | s13 | aviso_ano | Photo from 2008 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · Taken on 2 August 2008 (campo Date, do Panoramio) |
| VT-A05 | s13 | aviso_ano | Photo from 2010 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 1 August 2010 (campo Date; o EXIF dá 24 July 2010) |
| VT-A06 | s18 | aviso_ano | Photo from 2013 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 11 October 2013, 15:49:47 (campo Date) |
| VT-A07 | s18 | aviso_ano | Photo from 2013 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 8 August 2013, 09:58 (campo Date) |
| VT-A08 | s26 | aviso_ano | Photo from 2025 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 08.05.2025 (Date Taken na página do DVIDS; o EXIF não traz data de captura) |
| VT-A09 | s28 | aviso_ano | Photo from 2007 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 2 February 2007, 15:15 (campo Date da página do Commons, vindo do Flickr) |
| VT-A10 | s30 | aviso_ano | Photo from 2022 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 08.03.2022 (Date Taken na página do DVIDS) |
| VT-A11 | s32 | aviso_ano | Photo from 2004 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 11 August 2004 (campo Date) |
| VT-A12 | s36 | aviso_ano | Photo from 2009 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 01.30.2009 (Date Taken na página do DVIDS) |
| VT-A13 | s43 | aviso_ano | Photo from 2007 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 2 February 2007, 15:15 (campo Date da página do Commons, vindo do Flickr) |
| VT-A14 | s45 | aviso_ano | Photo from 2020 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 28 February 2020 (campo Date; o EXIF dá 2020:02:28 11:38:03); a descrição diz 'Tuesday, 28th January 2020' |
| VT-A15 | s50 | aviso_ano | Photo from 2023 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 30 April 2023, 21:23 (campo Date; o EXIF confirma o dia) |
| VT-A16 | s50 | aviso_ano | Photo from 2023 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 30 April 2023, 21:34 (campo Date; o EXIF confirma o dia) |
| VT-A17 | s51 | aviso_ano | Photo from about 1910 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · circa 1910 (campo Date) |
| VT-A18 | s53 | aviso_ano | Photo from 2022 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 6 July 2022, 17:39:13 (campo Date) |
| VT-A19 | s53 | aviso_ano | Photo from 1942 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 1942 (campo Date da página do Commons, relida em 12/11/2026; a origem: Library of Congress, FSA/OWI, LC-USW33-035035-C) |
| VT-A20 | s53 | aviso_ano | Photo from 1938 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 1938 ('With car and onlookers. 1938.', na descrição) |
| VT-A21 | s57 | aviso_ano | Photo from 2024 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 25 July 2024, 11:31:26 (campo Date; a legenda diz July 25, 2024) |
| VT-A22 | s57 | aviso_ano | Photo from 2009 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 13 June 2009, 16:17 (campo Date) |
| VT-A23 | s59 | aviso_ano | Photo from 2014 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 23 June 2014, 10:11:58 (campo Date) |
| VT-A24 | s60 | aviso_ano | Photo from 2023 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 30 April 2023, 21:44 ('Taken on') |
| VT-A25 | s60 | aviso_ano | Photo from 2023 | confirmado | o ano é o data_na_origem do veredito aprovado da própria cena (conferencia-midia.json) · 30 April 2023, 21:35 (campo Date; o EXIF confirma o dia) |
| VT-Q01 | s60 | chamada | Would you live by a lake that drops every winter? | confirmado | F001, F084, F085; a série mensal de Nakusp (WSC 08NE104), arrow_inverno.txt: o nível de novembro caiu até o mínimo de dez-abr em 54 dos 55 invernos completos de 1969 a 2024, e em todos desde 1974 · a única exceção é 1… |
| VT-G01 |  | grafia | Adrian Dix | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G02 |  | grafia | BC Hydro | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G03 |  | grafia | Water Survey of Canada | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G04 |  | grafia | Government of British Columbia | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G05 |  | grafia | R. v. Desautel | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G06 |  | grafia | Red Cross | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G07 |  | grafia | CBC News | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G08 |  | grafia | Chelan, Grant and Douglas public utility districts | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G09 |  | grafia | Colville Confederated Tribes | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G10 |  | grafia | Sinixt | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G11 |  | grafia | Secwépemc | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G12 |  | grafia | Columbia River Treaty | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G13 |  | grafia | U.N. Treaty Series | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G14 |  | grafia | Public Law 118-272 | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G15 |  | grafia | S. 4949 | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G16 |  | grafia | Alpha Point | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G17 |  | grafia | Arrow Lakes Reservoir | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G18 |  | grafia | Upper Arrow Lake | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G19 |  | grafia | Columbia River | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G20 |  | grafia | British Columbia | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G21 |  | grafia | Canada | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G22 |  | grafia | United States | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G23 |  | grafia | Washington | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G24 |  | grafia | The river’s big bend | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G25 |  | grafia | Duncan Dam | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G26 |  | grafia | Mica Dam | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G27 |  | grafia | The Dalles | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G28 |  | grafia | Birchbank | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G29 |  | grafia | Blaine | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G30 |  | grafia | Surrey | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G31 |  | grafia | Peace Arch | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G32 |  | grafia | Arrowhead | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G33 |  | grafia | U.S. Capitol | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G34 |  | grafia | cubic feet per second (CFS) | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G35 |  | grafia | acre-foot | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-G36 |  | grafia | MI | confirmado | glossário (conferido: true, com a fonte de cada grafia) |
| VT-E01 | s17 | escala | as 12 barras mensais de Birchbank, 1938-1967, proporcionais às médias | confirmado | F029, F108, F235; P27 |
| VT-E02 | s19 | escala | as duas séries casadas, Birchbank e The Dalles, 87 anos; a parte de 39 % | confirmado | F023, F193 |
| VT-E03 | s21 | escala | junho contra fevereiro (10,4 vezes) na mesma régua | confirmado | F029, F108 |
| VT-E04 | s29, s31 | escala | a régua de 1964 a 2024 (60 anos) | confirmado | F049, F066 |
| VT-E05 | s08, s33, s59 | escala | a régua 2025 · 2026 · 2027 (até três estações) | confirmado | F162 |
| VT-E06 | s36 | escala | a régua de cfs: a faixa de 450 a 650 mil e o traço de 600 mil | confirmado | F072, F073 |
| VT-E07 | s37 | escala | os picos anuais com as linhas de 450 e 600 mil; 1961-2008 marcados como médias diárias | confirmado | F075, F077, F204; P11 |
| VT-E08 | s46 | escala | seis semanas em The Dalles contra 3,5 meses em Birchbank | confirmado | F102, F105 |
| VT-E09 | s47 | escala | as curvas antes e depois, no mesmo eixo de 12 meses (cerca de 2 vezes) | confirmado | F108-F112; P27 |
| VT-E10 | s56 | escala | as duas trenas: $180-280 milhões e 110-400 milhões em eixos próprios | confirmado | P13, P14; a instrução da arte (eixo próprio, sem cifrão) |
| VT-E11 | s59 | escala | a régua de 2027 a 2029 | confirmado | F164 (volátil) |
| VT-E12 | s13 | escala | 498 de 1,243 mi (a parte canadense do comprimento) | confirmado | F018 |
| VT-E13 | s55 | escala | a parte do Canadá encurtada em 37 % | confirmado | P05 (o 37 % do Departamento de Estado, sem os MW) |
| VT-E14 | s28 | escala | Arrow, 52,1 de 64,4 milhões (80,9 %) | confirmado | F051 |

Veredito da primeira passada (sha `10d56053…`): RESSALVA.

## Reconferência (13/11/2026)

- **O arquivo de hoje:** `out/rio-columbia/textos-tela.json`, sha256 `c656a145c9b183a6afc1f566f6454e81473da265983a5e25ba5afbf222b3e2cb`. A cópia julgada na primeira passada (`10d56053…`) é `out/rio-columbia/_tmp/redator/v2-conserto1/textos-tela.json`.
- **O que mudou, por script** (`reconferir.py`, saída `reconferir.txt` e `reconferir.json`): em `_textos_por_cena`, só o `texto` de 14 ids, todos dos `corrigir` (nenhum tempo, papel, plano, condição ou caminho mudou); em `rotulos_dado`, o `na_tela` de VT-R10 e VT-R25. `cards_pessoa`, `_avisos_do_ano` e `_pergunta_cta` não mudaram.
- **Fora dos 16, só metadado que não vai à tela:** o campo `fonte` de VT-R02, R17, R18, R19, R20, R24 e R57 e o `fonte` de 9 entradas do `glossario` ("c. 2013" virou "Revised February 2009"), a descrição `_tela` do glossário de Columbia River Treaty e as notas `_espera_a_sala`, `_itens_herdados`, `_regras_de_serie` e `nao_vai_para_tela`, que repetem o conserto. Nenhuma grafia e nenhum `na_tela` fora dos 16 mudou.

| id | cena | agora na tela | veredito |
|---|---|---|---|
| VT-021 | s05 | Source: U.S. Army Corps of Engineers and / Bonneville Power Administration, 2009 | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-096 | s19 | ≈ 15% OF THE BASIN · USACE AND BPA, 2009 | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-113 | s22 | Source: U.S. Army Corps of Engineers and / Bonneville Power Administration, 2009 | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-131 | s26 | TREATY BETWEEN CANADA AND THE UNITED STATES OF AMERICA RELATING TO CO-OPERATIVE DEVELOPMENT OF THE WATER RESOURCES OF THE COLUMBIA RIVER BASIN | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-138 | s26 | Source: U.S. Army Corps of Engineers and / Bonneville Power Administration, 2009 | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-143 | s26 | Source: U.S. Army Corps of Engineers and / Bonneville Power Administration, 2009 | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-153 | s28 | Source: U.S. Army Corps of Engineers and / Bonneville Power Administration, 2009 | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-172 | s30 | Source: U.S. Army Corps of Engineers and / Bonneville Power Administration, 2009 | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-185 | s33 | UP FRONT · UNDER THE TREATY | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-192 | s34 | Source: Government of British Columbia, 2017; / U.S. diplomatic note to Canada, Nov. 22, 2024 | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-219 | s37 | Source: U.S. Geological Survey, 2026; / Congressional Research Service, 2024 | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-346 | s53 | Source: U.S. Bureau of Reclamation, 2023 | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-357 | s55 | UP FRONT · UNDER THE TREATY | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-408 | s59 | TREATY BETWEEN CANADA AND THE UNITED STATES OF AMERICA RELATING TO CO-OPERATIVE DEVELOPMENT OF THE WATER RESOURCES OF THE COLUMBIA RIVER BASIN | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-R10 | s19 | ≈ 15% OF THE BASIN · USACE AND BPA, 2009 | confirmado (igual ao conserto do laudo, letra a letra) |
| VT-R25 | s33, s55 | EVERY YEAR · STARTING WITH THE 2025 FLOOD SEASON; UP FRONT · UNDER THE TREATY | confirmado (igual ao conserto do laudo, letra a letra) |

- **Placar final:** 562 de 562 com veredito: 535 `confirmado` · 0 `corrigir` · 0 `NÃO CONFERIDO` · 27 `nada a checar`.
- **Os voláteis** da tabela acima continuam valendo, com as datas de leitura dela: a Sala relê antes do render e antes de publicar.
- **NOTA: 9/10.**

VEREDITO: PASS
