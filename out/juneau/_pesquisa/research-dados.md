# Juneau · research · pesquisa-dados (27/09/2026; s54 atualizado em 28/09/2026)

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
- **s54, em 28/09/2026:** a série diária do Alaska Department of Revenue em `_dados/s54.json` › `serie` (748
  pontos), com o `serie_meta`, a procedência e a conferência. O script `out/juneau/_pesquisa/s54-conferir-serie.py`
  refaz a conferência sem rede e sem gravar nada (seção "s54 · a série diária", abaixo).

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
  - tax.alaska.gov: "Request Rejected". Em 28/09, a tabela foi lida pelo Claude central no navegador do app (s54,
    abaixo).
- **Não abriram, sem recusa:** uscode.house.gov e o PDF do ISER (tempo de conexão esgotado).
- **Não toquei o akleg.gov**, que já recusou robô. AS 44.06 e o HB 3 valem pela cópia local de 23/09 e pela
  conferência no navegador do app de 26/09 (`volateis-conferidos.md`).

## O que não fechou (e quem decide)

| Cena | O que falta | Próximo passo |
|---|---|---|
| **s54** (o nome) | A sigla tem fonte: o título dentro do Graph 2-1 é **"Daily ANS West Coast Oil Price 2012-2016"**, e a página do DOR diz "Daily ANS prices are estimated by the Department of Revenue". A **expansão** ("Alaska North Slope") não tem fonte à mão para este preço: o FSEIS não a escreve (procurei no texto inteiro), e a página do DOR, como foi lida em 28/09, só traz a sigla. A legenda de s54 não usa a sigla. | `redator-de-tela` (se puser "ANS" na tela, a expansão pede fonte) |
| **s44** | "An icefield straddles the border": a Nature pediu login. Conferido pelo dossiê em 23/09. Não é número. | Navegador do app, ou `pesquisa-geo` pela geometria |
| **s56** | 6–3: a KTOO recusou hoje (403); conferido na cópia local de 23/09. A fonte primária (resolução ou ata da CBJ de 23/01/2017) não se achou por script. | Navegador do app |
| **s40** | O HB 3 continua na primeira comissão: **VOLÁTIL**, conferido em 26/09. | Repetir na véspera de publicar |
| **s28, s29, s31** | São de **fonte secundária** (ADN/Reamer, 2026). A voz já atribui cada um ao dono: o anúncio de 1982 (s28), a pesquisa Dittman (s29) e Reamer (s31). O anúncio e a pesquisa originais não foram abertos. | A tela credita o ADN, como a voz |
| **s49, s53** | São do estudo de 2018, que cita outra fonte: o Final EIS de 2006 no s49, o ISER no s53. A fonte primária não foi aberta. A voz do s53 atribui ao estudo. | A tela credita o estudo |

A busca nova de s54, que estava aqui como NÃO ENCONTRADO em 27/09, foi achada em 28/09: seção seguinte.

## s54 · a série diária (28/09/2026)

**O que chegou.** O Claude central consultou o formulário do Alaska Department of Revenue, Tax Division
(`https://tax.alaska.gov/programs/oil/dailyoil/dailyoilold.aspx`) no navegador do app, com o sim do Lucas para enviar
as datas, de 2/1/2013 a 1/31/2016. Ele leu a coluna "ANS West Coast" na tela, sem baixar arquivo, às 14:41:44Z. A
leitura, a autorização e a prova da cópia estão em `out/juneau/_pesquisa/s54-serie-ans-west-coast-dor.json` (não
editei esse arquivo).

**O que gravei:**
- `_dados/s54.json` › `serie`: 748 pontos no formato de `valores` do contrato (`label` = a data ISO, `valor`,
  `unidade` = US dollars per barrel), de 2013-02-01 a 2016-01-29;
- `serie_meta`: a fonte, a consulta, os extremos, os dias sem preço e a ressalva da estimativa;
- os extremos da série e a queda em `valores`, ao lado dos números do FSEIS;
- a procedência em `_dados/_PROCEDENCIA.json` (`leitura_navegador_app`, com o sha256 do arquivo da leitura) e a pauta.

**A cópia confere com a página.** O sha256 da cadeia (`2539e4f1…344e`), as 748 linhas com preço e a soma de
6.265.799 centavos, recalculados no arquivo, são iguais aos que o Claude central calculou na página.

**Os extremos batem com o FSEIS 2018:**
- **pelo texto** (p. 2-43): "a high of more than $116 per barrel in February 2013 to a low of just over $26 per barrel in
  January 2016". A série dá **$116.26 em 12/02/2013** e **$26.23 em 20/01/2016**, o máximo e o mínimo dos 748 dias.
  Só dois dias passam de $116 (12 e 14/02/2013), e só dois ficam abaixo de $27 (19 e 20/01/2016);
- **pelo Graph 2-1** (p. 2-44, a imagem embutida de 554 × 341 px, com a escala lida nela mesma: 1 px = $0,60):
  - os 748 pontos caem sobre o traço azul (a maior distância é de 1,24 px, $0,75);
  - nenhum pixel do traço, no período, fica a mais de 1,89 px ($1,14) da série de hoje, o que é a meia espessura do
    traço;
  - o topo desenhado (8 a 14/02/2013) e o fundo (jan/2016) caem nas mesmas linhas de pixel que $116.26 e $26.23, e são
    o topo e o fundo do gráfico inteiro, de dez/2012 a jan/2017;
  - **controle negativo:** a mesma checagem reprova a série deslocada em $1, as datas em 10 dias e um dia só alterado
    em $3.
- **A queda é de 77,44 %.** Os 77,6 % de 27/09 eram a conta com os números arredondados ($116 → $26). As duas passam
  de três quartos, como a voz diz.

**Estimativa.** A página diz "Daily ANS prices are estimated by the Department of Revenue", e os valores podem ter
sido revistos desde que o FSEIS os desenhou (a fonte do gráfico é de 2017). Na resolução do Graph 2-1, nenhuma revisão
aparece. A checagem pegaria $1 na série inteira ou $3 num dia só; revisão menor, num dia isolado, não se veria.
Registrado na `nota` e no `serie_meta`.

**Os dias sem preço.** São 33 dias úteis:
- 27 feriados do mercado dos EUA;
- 4 emendas: a sexta depois da Ação de Graças (três vezes) e 26/12/2014;
- 2 dias úteis comuns, 20/02/2013 e 11/09/2015. Os vizinhos de 20/02/2013 são $115.41 e $111.19, e os extremos não
  mudam.

A página contou uma linha sem preço a menos que o calendário (346 contra 347): o mais provável é ter listado até
30/01/2016, um sábado. Não muda a série.

**O que muda para quem vem depois:**
- **`diretor-de-arte`**: o conceito de s54 ("a linha entre eles não pode ser desenhada") já previa que "a linha real
  substitui a seta". A série chegou, e a fonte do crédito agora é o DOR, não o estudo;
- **`montador`**: já pôs a série no espelho, na décima segunda revisão de s54 (28/09), que reli depois de gravar. A
  tese diz −77,4 %, e a conta antiga de 77,6 % ficou no `needs.dados` como histórico, com a nova ao lado. A `_figura`
  diz que o número na tela é o que a voz diz, e que os valores dos extremos fazem a linha. Nada a mudar por este dado;
- **`redator-de-tela`**:
  - o crédito sugerido é `Source: Alaska Department of Revenue`, sem ano, como em s06 (página viva, sem data de
    edição); se quiser o ano, é o da leitura, 2026;
  - o `texto_para_tela` segue o AP Stylebook: `FEBRUARY 2013`, não `FEB. 2013`;
  - há uma alternativa com os valores exatos: `$116.26 (FEB. 12, 2013) → $26.23 (JAN. 20, 2016)`;
  - a sigla ANS: tabela acima;
- **`regente-de-imagem`**: o conflito de 1,9 s de "more than three quarters" continua como estava.

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
- **s54** (28/09): a queda é de 77,44 % na série diária do DOR. Os 77,6 % de 27/09 eram a conta com os números
  arredondados do FSEIS. O espelho já usa 77,4 %. A voz diz "more than three quarters", e as duas contas passam. Se um
  percentual for à tela, é 77.4% (ou 77%), não 77.6%.

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
| s54 | série diária de 748 dias (01/02/2013–29/01/2016): máx. $116.26 (12/02/2013) → mín. $26.23 (20/01/2016), queda de 77,44 %; confere com o FSEIS (> $116 em fev/2013 → pouco mais de $26 em jan/2016), no texto e no Graph 2-1 | Alaska Department of Revenue (estimativa do DOR; lida em 28/09/2026) | 2013–2016 |
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

**De novo em 28/09, depois de s54:**
1. **JSON válido:** os 49 arquivos. ✓
2. **Unidade e valor numérico:** 126 valores, mais os 748 pontos da série de s54. ✓
3. **Ordem de grandeza:** a série vai de $26.23 a $116.26 por barril, a mesma escala do FSEIS. ✓
4. **Fonte primária:** o DOR, que produz a estimativa (a fonte que o próprio FSEIS cita no Graph 2-1). ✓
5. **A URL contém o número:** quem abriu a URL foi o Claude central, no navegador do app. Eu não fui à rede, e o site
   recusa robô. A cópia confere com a página pelo sha256, pela contagem e pela soma.
6. **Classe inteira:** o máximo e o mínimo são os da série diária inteira (748 dias). No Graph 2-1 inteiro
   (dez/2012–jan/2017), o topo e o fundo desenhados são os mesmos. ✓
7. **validar-contrato:** ✓ válido (exit 0), também com `--estrito`.

O `python out/juneau/_pesquisa/s54-conferir-serie.py --dados` deu **CONFERE** (exit 0). Ele confere a cópia, o
calendário, os extremos, o texto e o Graph 2-1 do FSEIS, e a série gravada em `_dados/s54.json`.

Não fiz nada de gasto nem de risco: nenhum banco pago, nenhum crédito (MapTiler, ElevenLabs), nenhum navegador,
nenhuma chave lida. Não editei o espelho, o roteiro, a pauta, a marca nem o motor. Nenhum `regie advance`, nenhum
commit.

Em 28/09, o mesmo:
- não fui à rede nem ao navegador, e não baixei nada;
- o FSEIS se leu na cópia local (sha256 conferido), com o PyMuPDF. A imagem do gráfico só se abriu na memória do
  script; o que rasterizei para olhar ficou no rascunho da sessão, fora do canal;
- não editei o espelho, o conceito visual, os `conferencia-*`, o `_media/` nem o arquivo do Claude central;
- nenhum `regie advance`, nenhum commit.

**Devolução:**
- **s54** (28/09): a série diária existe e confere com o FSEIS; o degrau "dois pontos, sem linha" ficou para trás.
  Decidem:
  - o `diretor-de-arte`, a troca da seta pela linha real, como o conceito já previa;
  - o `redator-de-tela`, o crédito, os rótulos e a sigla ANS (o espelho diz que o número na tela é o que a voz diz);
  - o `regente-de-imagem`, o conflito de 1,9 s, que não mudou.
  Nenhuma divergência de número vai ao Lucas.
- **s44, s56:** conferência no navegador do app, pelo Claude central.
- **s40:** repetir na véspera de publicar.
- **Número divergente:** nenhum para o Lucas decidir hoje.
