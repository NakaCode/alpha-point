COBERTURA: 13 de 13, com o denominador tirado do confronto entre `out/juneau/textos-tela.json` (sha256 `4e2d9c19…30befc`) e a cópia de antes, `out/juneau/_tmp/textos-tela-antes-6a.json` (sha256 `fe7518cb…1415ac2`): 3 entradas novas que vão à tela (N01 a N03), mais 10 afirmações sem texto próprio que elas fazem (X01 a X10), lidas à mão nas entradas, nas notas e no `nao_vai_para_tela` novo

<!-- Laudo do verificador-de-fatos (subagente do Claude central, 05/10/2026, ~12:5x de Brasília), sobre a 6ª vista do
Lucas na linha do tempo (o redator-de-tela, entradas 286 a 288). Gravado pelo próprio verificador, a pedido do despacho.
Os laudos anteriores continuam em fatos-tela.laudo.md (28/09), fatos-tela-2026-10-01.laudo.md (01/10),
fatos-tela-2026-10-03.laudo.md (03/10) e fatos-tela-2026-10-04.laudo.md (04/10). -->

NOTA: 9.5/10. Os três textos conferem na imagem das páginas oficiais: a barra maior é o NO (88,783), a menor o YES (31,491), a cédula de 1978 diz "Bonds Yes / Bonds No", e a cédula de 1994 da Medida nº 3 não lista preço nenhum. O meio ponto a menos é de procedência, não de tela: o campo `fonte` de 286 e 287 cola a captura do arquivo a uma URL que não é a capturada (achado LEVE 1).

# Laudo de fatos da tela: Juneau, 6ª vista do Lucas (`screen_text`), 05/10/2026

- **A data-base:** 05/10/2026, 12:5x de Brasília.
- **O objeto:** `rotulos_dado[286]` (s20, `NO`), `[287]` (s20, `YES`) e `[288]` (s35, `NOT LISTED`) de `out/juneau/textos-tela.json`.
- **A régua (cópias locais, lidas pela IMAGEM da página com PyMuPDF, salvo onde se diz):**
  - `midia/juneau/fontes/documento/verif/r78.pdf` (sha256 `1d9d8618…d192a5`, igual à leitura de 27/09 do `url_lida` do `out/juneau/_dados/s20.json`): boletim oficial de 7/11/1978, PDF p. 64 (impressa 62);
  - `midia/juneau/fontes/documento/verif/oep78.pdf` (sha256 `cb5139af…f5ad1`): folheto de 1978, PDF p. 20 (impressa 63);
  - `midia/juneau/fontes/documento/verif/oep94.pdf` (sha256 `956e7ee8…9b5e45`, o `arquivo_local` do doc-19): folheto de 1994, PDF p. 5 (impressa B-24) e PDF p. 8–9 (B-27, Medida nº 5); e o recorte do redator, `out/juneau/_tmp/redator-5g/oep94-b24-ballot-language.png` (sha256 `ed7800d7…dd64b`), que bate com a página;
  - `midia/juneau/fontes/documento/ag93.txt` (texto, não imagem): a opinião do Department of Law de 24/08/1993;
  - `midia/juneau/fontes/documento/verif/oep82.ocr.txt` (texto do OCR; o PDF não tem camada de texto): folheto de 1982, PDF p. 17;
  - `out/juneau/words.json` (índices 609 e 1037), `out/juneau/regencia.json` (s20 `inSec` 207,1, `dur` 9,3; s35 `inSec` 363,1, `dur` 16,7), `out/juneau/graphics/s20.html` (sha1 `69518ae7…`) e `s35.html` (sha1 `5a9a84e2…`), lidos no código;
  - `pautas/juneau/fundamento.json` › doc-19 e `roteiros/juneau/roteiro-editor.md` › A15 e f-065.
- **A rede:** WebSearch (duas buscas por estimativa de custo de 1994) e WebFetch. A página da Ballotpedia da Medida nº 3 voltou vazia; o akhistory.lpsd.com recusou a conexão (ECONNREFUSED); parei nos dois, sem outro cliente. Nenhum `mcp__claude-in-chrome__*` nem painel de navegador do app. Nenhum site do Alasca foi aberto: tudo saiu das cópias locais.

## Como a lista foi derivada

O canal não tem extrator para texto de tela. O denominador saiu de um confronto em Python, só leitura, campo a campo, entre o arquivo novo e a cópia de antes.

| parte | o diff |
|---|---|
| `rotulos_dado` | 3 novas, no fim (286, 287, 288); a 160 mudou só a `_nota` (o `na_tela` `$` é o mesmo) |
| `_formas_de_serie` 7 e 15 | só texto de regra interna (a linha do preço da s35 deixa de ser vazia) |
| `_entradas` | 1 linha nova (as fontes da 6ª vista) |
| `nao_vai_para_tela` | 4 novas (82 a 85): as formas recusadas |
| `_revisao_2026_10_03` | 1 linha nova (a 21) |

- **O relato do redator bate com o arquivo.** Cada mudança que a `_revisao` descreve está no diff, e o diff não tem nenhuma que ela não descreva.
- **Fora do denominador como texto de tela**, porque não vão à tela: a `_nota` da 160, as `_formas_de_serie`, a `_entrada` e a `_revisao`. Li todas; nenhuma contradiz as entradas. Do `nao_vai_para_tela` novo, as afirmações de fato que justificam a recusa (os literais dos opositores, a estimativa de 1982) entraram como X06 e X07.
- **O resto do arquivo** é igual byte a byte e herda o veredito dos laudos de 28/09, 01/10, 03/10 e 04/10.

## A tabela

| id | afirmação | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| N01 | s20, `NO` na barra maior (`#barraNao`, 1.140 px) | CONFIRMADA | Boletim de 1978, p. 62 (PDF p. 64), coluna "BONDING PROPOSITION # 10 NEW STATE CAPITAL CONSTRUCTION BOND", cabeçalho "YES" / "NO"; na linha de totais do Estado, `31491` sob YES e `88783` sob NO. Lido na IMAGEM (recortes a 250 dpi do cabeçalho e da linha de totais). A barra maior é o não. | https://www.elections.alaska.gov/Core/Archive/78GENR/78genr.pdf (lida em http://web.archive.org/web/20161230084012id_/https://www.elections.alaska.gov/results/78GENR/78genr.pdf) |
| N02 | s20, `YES` na barra menor (`#barraSim`, 404 px) | CONFIRMADA | A mesma linha de totais: `31491` sob YES. Lido na IMAGEM. | idem N01 |
| N03 | s35, `NOT LISTED` sobre o traço do preço (`$ ____`) da cédula de 1994 recriada, lido como "o valor em dólar não estava listado" | CONFIRMADA | Folheto de 1994, p. B-24 (PDF p. 5), Medida nº 3, "CHANGE OF CAPITAL TO WASILLA / 93MCAP", "BALLOT LANGUAGE", inteira: "This initiative would amend state law to change the state capital from Juneau to Wasilla as of January 1, 1997. SHOULD THIS INITIATIVE BECOME LAW? YES [ ] NO [ ]". Nenhum custo, nenhuma cifra. Lido na IMAGEM (110 dpi a página inteira; o recorte do redator a 200 dpi). O rótulo não diz mais que isso (X10). | http://www.elections.alaska.gov/doc/oep/1994/1994-Ballot-Measures.pdf (cópia local do doc-19, `url_acessada` web.archive.org/web/20161230104042id_/…) |
| X01 | o placar da barra do não é 88,783 | CONFIRMADA | `88783`, totais, coluna NO. IMAGEM. Bate com `out/juneau/_dados/s20.json` ("New State Capital Construction Bond, no" 88783). | idem N01 |
| X02 | o placar da barra do sim é 31,491 | CONFIRMADA | `31491`, totais, coluna YES. IMAGEM. Bate com `s20.json` ("…, yes" 31491). | idem N01 |
| X03 | a cédula de 1978 imprimia "Bonds Yes / Bonds No" (folheto, p. 63) | CONFIRMADA | Folheto de 1978, p. 63 (PDF p. 20), "BONDING PROPOSITION NO. 10 / CAPITAL CONSTRUCTION COSTS OF THE NEW ALASKA CAPITAL", sob "BALLOT QUESTION:": "Bonds Yes" e "Bonds No", cada um com a caixa de marcar. IMAGEM. A página impressa é 63, como o `fonte` diz. | http://www.elections.alaska.gov/doc/oep/1978/1978-Ballot-Prop-Bond-Prop.pdf |
| X04 | a "BALLOT LANGUAGE" da Medida nº 3 não traz custo nem cifra | CONFIRMADA | O literal de N03. A Medida nº 3 ocupa só a B-24 (a PDF p. 6 já é a Medida nº 4). IMAGEM. | idem N03 |
| X05 | o "FULL TEXT OF PROPOSED LAW" tem duas seções, sem custo | CONFIRMADA | B-24: "SECTION 1. At the first statewide election at which this initiative can be submitted to the People of Alaska, the voters shall be asked: Shall the capital of Alaska be changed to Wasilla?" e "SECTION 2. If a majority of the votes cast on the question vote yes, Wasilla, Alaska shall be Alaska’s capital effective January 1, 1997." IMAGEM. A opinião de 24/08/1993 (File No. 663-94-0113) traz o mesmo texto e diz: "The proposed initiative would not make an appropriation." TEXTO. | idem N03; https://law.alaska.gov/pdf/opinions/opinions_1993/93-040_663940113.pdf |
| X06 | os literais dos opositores, no mesmo folheto (B-24): "This time, no price tag is attached." e "Alaskans are being asked to sign a blank check" | CONFIRMADA | "STATEMENT IN OPPOSITION", B-24: "Twelve years ago, the Capital Site Planning Commission estimated that it would cost $2,843,000,000 to move the capital. This time, no price tag is attached. Alaskans are being asked to sign a blank check and trust a few politicians to fill in the amount." IMAGEM (200 dpi), letra a letra. Atribuídos aos opositores, como o redator os trata. | idem N03 |
| X07 | uma estimativa existia: a da comissão, US$ 2,843 bilhões, impressa na cédula de 1982, e a declaração contra a cita | CONFIRMADA | Folheto de 1982, PDF p. 17, Medida nº 8, "SUMMARY (As it will appear on the November 2, 1982 General Election Ballot)": "may the State of Alaska spend the money necessary (estimated to total $2,843,147,000)". TEXTO do OCR (o título da página conferido na IMAGEM). A citação de 1994 é X06. | cópia local `midia/juneau/fontes/documento/verif/oep82.ocr.txt` (doc-18 do dossiê) |
| X08 | os tempos: NO em 6,2 e YES em 6,3 (s20), NOT LISTED em 6,0 (s35), até o corte | CONFIRMADA | `words.json` 609 "rejected" 213,282; 213,282 − 207,1 = 6,182 → teto de quadro 186/30 = 6,2. 1037 "without" 369,08; 369,08 − 363,1 = 5,98 → 180/30 = 6,0. Cortes 9,3 e 16,7 batem com a `regencia.json`. O s20.html cresce `#barraNao` em `T.rejected` e `#barraSim` em `T.rejected + 0.1`. | — |
| X09 | a barra do sim tem 404 px = 31,491/88,783 × 1.140 (35,5 %) | CONFIRMADA | 31491/88783 = 0,3547; × 1140 = 404,4. No s20.html: `#barraNao` 1140px, `#barraSim` 404px. A proporção 2,82 : 1 continua só no desenho. | — |
| X10 | `$ NOT LISTED` não diz que não havia estimativa em lugar nenhum, nem que o custo era zero, nem que foi escondido | CONFIRMADA (a busca por estimativa de 1994: NÃO ACHEI) | No folheto de 1994 não há cifra de custo da mudança para Wasilla: a declaração a favor diz só que "The City of Wasilla has offered to build a 140,000 square foot building" e que o custo "will be lower"; a contra fala da "complete absence of information about the proposal and its costs", diz "would cost millions and possibly billions of dollars" e cita a de 1982 (X06, X07); a Medida nº 5 (B-27) cita a de 1982 ("$2.8 billion"). Nas duas buscas na rede, nenhuma estimativa de 1994 em dólar. Se uma existir (jornal, estudo de Juneau), o rótulo continua verdadeiro: ele fala da linha do preço da cédula, e a cédula não trazia cifra. "LISTED" é o verbo certo para isso; "NO ESTIMATE" e "NO COST", que diriam mais, estão fora (`nao_vai_para_tela`). | idem N03; busca: https://ballotpedia.org/Alaska_State_Capital_in_Wasilla,_Measure_3_(1994) (voltou vazia) |

Placar: 13 CONFIRMADAS, 0 DIVERGE, 0 NÃO ACHEI em afirmação de tela, 0 REFUTADAS. Na X10, a busca por estimativa de 1994 fora do folheto é NÃO ACHEI, e o veredito do rótulo não depende dela.

## Os achados

1. **[LEVE] → RAIZ: PONTUAL.** O `fonte` de 286 e 287 escreve "https://www.elections.alaska.gov/Core/Archive/78GENR/78genr.pdf (cópia pública web.archive.org/web/20161230084012…)", mas a captura de 30/12/2016 é de outra URL do mesmo arquivo, `…/results/78GENR/78genr.pdf` (o `url_lida` do `out/juneau/_dados/s20.json`). O PDF é o mesmo (sha256 `1d9d8618…` na leitura de 27/09 e na cópia local), e nada muda na tela. **CONSERTO pronto**, se o redator mexer no arquivo de novo: "(cópia pública http://web.archive.org/web/20161230084012id_/https://www.elections.alaska.gov/results/78GENR/78genr.pdf)". Não segura o passo.

Nenhum outro achado. Uma condição, que não é achado de fato e é do `qc-visual`: a cédula de 1994 não imprimia nem o `$` nem `NOT LISTED`. A verdade da s35 depende de as duas coisas lerem como anotação do canal, como o próprio redator avisa ao editor-de-arte (a `_nota` da 288). Se o `NOT LISTED` sair com a cara das linhas impressas (Inter 700, 128 px, `--tinta-escura`), a tela passa a afirmar que a cédula dizia isso, e aí é DIVERGE.

## A lista de nomes

Nada a nomear: os três textos não têm anônimo. A declaração contra de 1994 (X06) é atribuída no folheto; o nome de quem a assina não vai à tela, e o redator a trata como "a declaração contra", atribuída.

## Os voláteis

Nenhum. Os três textos falam de 1978 e de 1994, fixos.

## Os 2 padrões mais vistos

1. A procedência que cola a URL canônica a uma captura de outra URL (achado 1). O `s20.json` guarda as duas em campos separados (`url` e `url_lida`), e a fusão num campo só perde a diferença.
2. O cuidado certo com o que a tela diz além do literal: o redator recusou "NO PRICE TAG", "NO ESTIMATE", "NO COST" e "BLANK CHECK" pelas razões certas, e cada razão confere na fonte (X06, X07, X10).

## O que NÃO FOI CHECADO

- A cédula física de 8/11/1994: conferi a "BALLOT LANGUAGE" que o folheto oficial imprime, não uma cédula de papel. Mesmo critério de A15 e f-065.
- Jornais de 1994 (Juneau Empire, Anchorage Daily News) à procura de uma estimativa de custo da mudança para Wasilla: as buscas não acharam nenhuma, e os arquivos de jornal não foram abertos. A página da Ballotpedia da Medida nº 3 voltou vazia, e o akhistory.lpsd.com recusou a conexão (ECONNREFUSED); parei nos dois. Isso não muda o veredito de N03 (X10).
- O folheto de 1982 foi lido pelo OCR, não pela imagem da linha do custo (o PDF não tem camada de texto). O número é o mesmo que os laudos anteriores conferiram para s19 e s23.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Onde gravar o laudo de fatos dos próximos vídeos (roupa, §2). Este segue o Juneau: `roteiros/juneau/qc-roteiro/`.

VEREDITO: PASS
