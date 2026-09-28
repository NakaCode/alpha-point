# Juneau · research · pesquisa-dados (27/09/2026)

Executado pelo Claude a partir do manual (`.claude/agents/pesquisa-dados.md` e a roupa `marca/agentes/pesquisa-dados.md`),
com o CLAUDE.md por cima. Pedido: `espelho.json` › `_despacho_research` › `dados` (a busca nova de s54, a conferência
de 45 cenas e as cenas lidas de cópia arquivada, que somam s05, s18 e s25).

## Entrega

- **O dado, por cena:** `out/juneau/_dados/<cena>.json`. São 48 arquivos: as 45 da conferência mais s05, s18 e s25.
  Cada um traz os valores numéricos com unidade, a fonte, a URL, a data do dado, a data da consulta, a legenda e o
  `texto_para_tela` em inglês, e a nota em português. Leva também a conferência item a item, com página e trecho, e
  as fontes com a leitura de hoje.
  - A pasta é a do contrato do ofício (§2.1), não `_media/<tipo>/<cena>/`: o dado não é arquivo de acervo, e nenhum
    consumidor lê um caminho ou o outro.
- **Procedência:** `out/juneau/_dados/_PROCEDENCIA.json`, com URL, cópia arquivada e data da captura, sha256 da
  leitura de hoje e licença, por arquivo e por fonte.
- **Pauta:** `out/juneau/_pesquisa/pauta-dados.json`, com 48 itens.
  `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/validar-contrato.mjs pauta-pesquisa …` deu **✓ válido** (exit 0).
- **Resolução:** não se aplica (dado, não imagem). Nenhum arquivo de mídia foi baixado.

## Como se conferiu

Uma tentativa por URL, com o User-Agent do canal, sem repetir nem trocar cabeçalho.

- **As 16 cópias arquivadas da Divisão de Eleições** (boletins de 1960 a 2002 e folhetos de 1976 a 2002) abriram
  (200). 14 saíram **idênticas byte a byte** à cópia local, e as outras 2 são capturas de 2025 que devolvem os
  mesmos bytes das de 2016. Os números se leram **na imagem das páginas**. Em 1974 a soma das 22 linhas de distrito
  refeita fecha nos totais.
- **Abriram com os mesmos bytes ou o mesmo tamanho da cópia local:**
  - o FSEIS (HEAD, 200) e os Statutes at Large de 1900 e 1912 (govinfo);
  - o relatório do governador de 1906, o DOLWD, o parecer do AG de 1993 e o 9º Circuito.
- **Abriram e contêm o trecho:** a página da CBJ, a coluna do ADN e o 42 U.S.C. §4332 (govinfo, edição 2023).
- **Recusaram, e parei nelas:**
  - KTOO: 403;
  - nature.com: mandou para o login;
  - tax.alaska.gov: "Request Rejected".
- **Não abriram, sem recusa:** uscode.house.gov e o PDF do ISER (tempo de conexão esgotado).
- **Não toquei o akleg.gov**, que já recusou robô. AS 44.06 e o HB 3 valem pela cópia local de 23/09 e pela
  conferência no navegador do app de 26/09 (`volateis-conferidos.md`).

## O que não fechou (e quem decide)

| Cena | O que falta | Próximo passo |
|---|---|---|
| **s54** | **BUSCA NOVA: NÃO ENCONTRADO.** A série diária é do Alaska Department of Revenue, Tax Division ("Crude Oil and Natural Gas Prices", a fonte do Graph 2-1). O site recusa robô. O arquivo só guardou o formulário de consulta, sem a tabela. O mais próximo é a série federal da EIA, que é **mensal** e é outra medida ("first purchase"). Ela põe o pico em jun/2014 ($100.11), não em 2013, e contradiria a voz: não serve. | Como a `_figura` já prevê: **os dois pontos da fonte** (> $116, fev/2013 → pouco mais de $26, jan/2016; queda de 77,6 %), sem linha. Se quiserem a linha: o Claude central consulta o formulário do DOR no navegador do app, com o Lucas vendo, de 02/01/2013 a 01/31/2016 (o passo a passo está em `_dados/s54.json` › `busca_nova`). |
| **s54** (achado) | O título dentro do Graph 2-1 é **"Daily ANS West Coast Oil Price 2012-2016"**, e a página do DOR diz "Daily ANS prices are estimated by the Department of Revenue". A trava do espelho ("sem ANS na tela até uma fonte nomear o preço assim") agora tem essa fonte. | `redator-de-tela` e `montador` |
| **s44** | "An icefield straddles the border": a Nature pediu login. Conferido pelo dossiê em 23/09. Não é número. | Navegador do app, ou `pesquisa-geo` pela geometria |
| **s56** | 6–3: a KTOO recusou hoje (403); conferido na cópia local de 23/09. A fonte primária (resolução ou ata da CBJ de 23/01/2017) não se achou por script. | Navegador do app |
| **s40** | O HB 3 continua na primeira comissão: **VOLÁTIL**, conferido em 26/09. | Repetir na véspera de publicar |
| **s28, s29, s31** | São de **fonte secundária** (ADN/Reamer, 2026). A voz já atribui cada um ao dono: o anúncio de 1982 (s28), a pesquisa Dittman (s29) e Reamer (s31). O anúncio e a pesquisa originais não foram abertos. | A tela credita o ADN, como a voz |
| **s49, s53** | São do estudo de 2018, que cita outra fonte: o Final EIS de 2006 no s49, o ISER no s53. A fonte primária não foi aberta. A voz do s53 atribui ao estudo. | A tela credita o estudo |

## Divergências (nenhuma contradiz a voz)

- **s03 e s59:** a fonte diz "about 43 miles"; a geometria OSM do canal mede 41,9 mi. Já decidido: a tela fica com
  a fonte.
- **s11:** para o sim de 1962, o H26 dá 26,452; o boletim oficial dá 26,542, e as parciais do próprio boletim somam
  26,542. A tela usa o boletim.
- **s29:** para o sim de 1982, a lista H29 dá 91,249; o boletim dá 91,049. A tela usa o boletim (decisão do
  roteiro-editor), e com os dois o "não" fica em "nearly 53 percent".
- **s28:** "about one-fourth" é palavra do anúncio; a conta dá 28 %.
- **s51:** a base monetária dos $680.2 milhões é ambígua na própria fonte (dólares de 2015 na p. 1-4, estimativas de
  2016 na p. 2-8). O ano-base não vai à tela sem o verificador-de-fatos.
- **s10:** "more than half" (1960) não é 50 %: o pictograma não pode mostrar a metade exata.
- **s43:** a lei diz "major Federal actions", termo mais amplo que o "federal project" da voz (ressalva do dossiê).

## Por cena

Estes são os itens que **conferem**. Os que não fecharam estão na tabela acima.

| Cena | Número ou fato | Fonte (crédito sugerido) | Data do dado |
|---|---|---|---|
| s01 | 46,659 × 35,683 = 56,66 % → 57 % | Alaska Division of Elections, 1974 | 27/08/1974 |
| s02, s30 | $2,843,147,000 | Division of Elections, 1982 (folheto) | 1982 |
| s03, s59 | about 43 mi, Cascade Point | Alaska DOT&PF and FHWA, 2018 | 2018 |
| s05 | citação de Frank W. Harris (Chairman, Capital Access Committee, Inc.) | Division of Elections, 1982 | 1982 |
| s06 | 1880 | City and Borough of Juneau | 1880 |
| s07 | 1900 · 1906 · 1912, citação letra a letra | U.S. Statutes at Large; Governor of Alaska, 1906 | 1900, 1906, 1912 |
| s09 | 1914 | Alaska DOLWD, 2013 | 1914 |
| s10 | 1942; ~15 % (1940), 40 % (1950), mais da metade (1960) | Alaska DOLWD, 2013 | 1940–1960 |
| s11 | 18,865 × 23,972; 26,542 × 32,325; 46,659 × 35,683 | Division of Elections | 1960, 1962, 1974 |
| s12 | Anchorage 79,96 %; Southeast 94,19 % não; Fairbanks 50,65 %; 3 locais, 30 mi | Division of Elections, 1974 e 1976 | 1974 |
| s13 | 1974 (Boucher v. Engstrom), no resumo do AG de 1993 | Alaska Department of Law, 1993 | 1974 |
| s15 | 56,219 · 33,170 · 16,169 (53,26 %); 70 road mi; 5 mi | Division of Elections, 1976 | 02/11/1976 |
| s16 | início de 1977, FRANK | Division of Elections, 1978 | 1977 |
| s17 | até 1992 | Division of Elections, 1978 | 1978 |
| s18 | citação da declaração contra (1978) | Division of Elections, 1978 | 1978 |
| s19 | $966,000,000 | Division of Elections, 1978 | 07/11/1978 |
| s20 | 69,414 × 55,253 (55,68 %); 31,491 × 88,783 (2,82 : 1) | Division of Elections, 1978 | 07/11/1978 |
| s22 | 1981 | Division of Elections, 1982 | 1981 |
| s23 | $2,843,147,000 e as 4 parcelas; indenização $589,323,000 | Division of Elections, 1982 | 1982 (até 1994) |
| s25 | Harris ("inflated"), Jim Clark (Chairman, Alaska Committee) | Division of Elections, 1982 | 1982 |
| s32 | os termos do "não"; AS 44.06.100–.299 revogadas | Division of Elections, 1982 | 1982 |
| s33 | Wasilla a partir de 1º/1/1997; sem preço; "on the road system" | Division of Elections, 1994 | 1994 |
| s34 | $2,843,000,000; a citação letra a letra | Division of Elections, 1994 | 1994 |
| s35 | 96,398 × 116,277 (54.7 %); 159,781 × 46,665 (77.4 %) | Division of Elections, 1994 | 08/11/1994 |
| s36, s38, s61 | 12 anos; 9 membros; "right to know"; desde 1994 | Alaska Statutes, AS 44.06 | vigente em 26/09/2026 |
| s39 | 74,650 × 153,127 (2,05 : 1) | Division of Elections, 2002 | 05/11/2002 |
| s43 | 42 U.S.C. §4332(2)(C); o isolamento no estudo | U.S. Code; DOT&PF and FHWA, 2018 | 2018 |
| s44 | 2 corredores; B.C. em 1993 e 2003; Haines Junction e Whitehorse | DOT&PF and FHWA, 2018 | 2018 |
| s47 | AMHS = elo do National Highway System | DOT&PF and FHWA, 2018 | 2018 |
| s48 | janeiro de 2000, Knowles | U.S. Court of Appeals, 9th Cir., 2011 | 01/2000 |
| s49 | 5,840 × 5,761 = 79 | DOT&PF and FHWA, 2018 | 10/2000 |
| s50 | abril de 2006; 50.8 mi (47.9 + 2.9); 2 mi ao norte do Katzehin | DOT&PF and FHWA, 2018 | 2006 |
| s51 | 41 corredores (de 43); ≈ $680.2 milhões | DOT&PF and FHWA, 2018 | 2018 |
| s52 | 13/02/2009; 9º Circuito, 04/05/2011, 2 a 1 | DOT&PF and FHWA, 2018; 9th Cir. | 2009, 2011 |
| s53 | 90 % em média, 2005–2014 | DOT&PF and FHWA, 2018 (citando o ISER) | 2005–2014 |
| s54 | > $116 (fev/2013) → pouco mais de $26 (jan/2016): queda de 77,6 % | DOT&PF and FHWA, 2018 | 2013–2016 |
| s55 | 15/12/2016 | DOT&PF and FHWA, 2018 | 15/12/2016 |
| s58 | ROD de 18/06/2018 (data manuscrita, lida na imagem), No Action; os motivos | Federal Highway Administration, 2018 | 18/06/2018 |
| s60 | 1974 sim; 1978 títulos, não; 1982 custo, não | Division of Elections | 1974, 1978, 1982 |

### Licença

- **Documento do Estado** (boletins, folhetos, estudo de 2018, leis): o número e o texto citado vão à tela recriados,
  com a fonte. A página original só vai com permissão clara (midia.md §7.1). A cópia arquivada vale como fonte do
  texto, não como permissão.
- **Obra federal** (Statutes at Large, U.S. Code, 9º Circuito, relatório de 1906, EIA): domínio público.
- **Imprensa** (ADN, KTOO): o fato vai recriado, com a fonte. Página e logo do veículo não vão (§7.1 e §7.6).

## Checagens do §3

Não há outro portão de dado no canal; os itens abaixo se conferiram assim:

1. **JSON válido:** 49 arquivos lidos. ✓
2. **Unidade em todo valor, e valor numérico:** 123 valores. ✓
3. **Ordem de grandeza:** faixas verificadas, sem erro; cada número bate com a voz (tabela e notas acima). ✓
4. **Fonte primária:** confirmada, com as exceções da tabela "O que não fechou". ✓
5. **A URL abre e contém o número:** ver "Como se conferiu". ✓, com as recusas registradas.
6. **Classe inteira:**
   - s11: antes de 1974, as iniciativas de capital na cédula foram só as de 1960 e 1962 (H26);
   - s60: com preço na cédula, só 1978 e 1982 (H26, H28, H29 e os folhetos). Limite: não há lista local das propostas
     de títulos. ✓
7. **validar-contrato:** ✓ válido.

Nenhum portão saiu NÃO MEDIDO: o `validar-contrato` é o único do §3 que existe como script.

Não fiz nada de gasto nem de risco: nenhum banco pago, nenhum crédito (MapTiler, ElevenLabs), nenhum navegador,
nenhuma chave lida. Não editei o espelho, o roteiro, a pauta, a marca nem o motor. Nenhum `regie advance`, nenhum
commit.

**Devolução:**
- **s54:** parei no degrau "dois pontos da fonte, sem série diária". Decidem o `montador` e o `regente-de-imagem` (se
  mantém os dois pontos ou pede a consulta ao DOR no navegador do app) e o `redator-de-tela` (se usa "ANS West Coast").
- **s44, s56:** conferência no navegador do app, pelo Claude central.
- **s40:** repetir na véspera de publicar.
- **Número divergente:** nenhum para o Lucas decidir hoje.
