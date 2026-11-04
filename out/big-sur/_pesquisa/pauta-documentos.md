# Pauta de documentos: big-sur (vídeo 5)

Peça `pesquisa-documentos`, passo `research`, 04/11/2026. O JSON ao lado (`pauta-documentos.json`, 13 itens) passa no contrato
`pauta-pesquisa` (exit 0). Ele traz o texto literal, os tempos do grifo e a licença de cada peça. Os tempos vêm do `words.json`
(grafia da voz, sha256 `f6055f41…`), e as janelas dos planos, do espelho r2 (sha256 `6e787c20…`). O gerador é
`out/big-sur/_tmp/pesquisa-documentos/gerar-pauta.py`, e nenhum tempo foi digitado à mão.

## Divergências entre a fonte e o espelho (primeiro)

1. **s43 P1: o "1986" da capa não é do título (média, de tela).** O `needs.dados` de s43 cita "P (capa): 'LOCAL COASTAL PROGRAM
   1986 MONTEREY COUNTY, CALIFORNIA'". Na imagem da capa, o "1986" é da etiqueta de catálogo do acervo ("HD / 211 / .C2 / M67 /
   1986", em outra fonte, à esquerda), e o OCR a juntou ao título. A capa impressa pelo condado não tem ano. A folha recriada não
   põe "1986" como texto da capa. O ano vem da folha de rosto: "Certification Acknowledged by the California Coastal Commission
   on April 10, 1986", com o "10" riscado à mão e um "9" escrito embaixo. A voz ("took final form in 1986") confere. O Board of
   Supervisors adotou o plano em 5/11/1985, e "final form" é a certificação.
2. **s39 P2: a frase continua (leve, de tela).** O `_grafias` grava "A way of life had ended, and a new era began." com ponto final.
   A fonte diz "A way of life had ended, and a new era began for the beautiful country." (p. 59, olhado na imagem). A voz pode
   encurtar, porque o sentido não muda. A folha e qualquer etiqueta entre aspas levam a frase inteira, ou o corte marcado; a forma
   é do redator. O grifo cobre só o que a voz diz.
3. **s51 P2: "expect" contra "may encounter" (leve).** A voz diz "warned drivers to expect occasional full closures". A nota diz
   "Over the next months, travelers … may encounter occasional full closures while crews remove debris". O grifo leva o "may".
   Isso não bloqueia nada: a voz está aprovada, e o verificador-de-fatos decide se a nuance importa.
4. **s56 P2: o formulário não diz "ongoing" nem "year after year" (informação).** Ele diz "The American Community Survey is
   conducted by the U.S. Census Bureau." O "ongoing … on a yearly basis" está na página "About" do Census (item `census-acs-sobre`,
   R206). A voz confere com as duas.

As outras citações conferem palavra por palavra: s06, s39 P1, s45 P4, s51 P1, s52 P2 (a paráfrase não infla: "recover rapidly"
na fonte) e s57 P2 (a etiqueta "TOURISTS ARE RETURNING IN CONSIDERABLE NUMBERS" é o literal).

## O que vai à tela e o que é prova

Arquivos em `out/big-sur/_media/documento/`, medidos pelo `ffprobe`. Nenhum passa de 40 MP.

| Arquivo | Cena | À tela? | Licença | sha256 |
|---|---|---|---|---|
| `acs-2024-questionario-p1.jpg` (3123×3779, 11,8 MP) | s56 P2 | **sim, depois do conferente** | domínio público federal | `367dcefd…` |
| `acs-2024-questionario-p1-titulo.jpg` (1885×190) | s56 P2 (opcional) | **sim, depois do conferente** | domínio público federal | `3a23aaad…` |
| `acs-2024-questionario-prova-p1.jpg` (1700×2200) | s56 | não (tem a logo do Census) | domínio público federal | `91e44fae…` |
| `bigsur-lup-1986-prova-p2.jpg` (2400×3150) | s06 | não: recriado | sem permissão (condado) | `97a652cb…` |
| `bigsur-lup-1986-prova-p59.jpg` | s39 | não: recriado | sem permissão | `10c200cd…` |
| `bigsur-lup-1986-prova-capa.jpg` | s43 | não: recriado, sem a foto | sem permissão | `3ea53fcd…` |
| `bigsur-lup-1986-prova-rosto.jpg` | s43 | não: recriado | sem permissão | `d7c6ff39…` |
| `bigsur-lup-1986-prova-p13.jpg` | s45 P4 | não: recriado | sem permissão | `d6bbd4ac…` |
| `bigsur-lup-1986-prova-p11.jpg` | s45 P1–P2 (apoio) | não | sem permissão | `925450d7…` |
| `bigsur-lup-1986-prova-p73.jpg` | s43 P2 (apoio) | não | sem permissão | `7799d4f4…` |
| `caltrans-2026-01-14-prova.png` (2368×3010) | s51 | não: recriado | texto em domínio público (Conditions of Use) | `7df6cc46…` |
| `caltrans-2026-05-15-prova.png` (2368×2734) | s52 P2, s57 P2 | não: recriado | idem | `1c0db2ab…` |

Fora da pasta, só texto: a página "About the American Community Survey" (cópia local de 02/11), o apoio de "ongoing".

## As licenças

- **O plano de 1986 é RECRIADO.** Foi escrito pelo condado ("Prepared by the Monterey County Planning Department"). O dinheiro da
  NOAA não faz dele obra federal. O govinfo só distribui, diz que o domínio público é só da obra federal e manda consultar o órgão
  de origem (lido em 04/11). O OCR não traz aviso de copyright, mas isso não é permissão. Também não vão à tela: a foto da capa
  (Steve A. Early, 1986), a etiqueta do acervo, o selo do GPO e logos.
- **As notas da Caltrans são RECRIADAS, com permissão.** As Conditions of Use (lidas em 04/11) dizem: "In general, information
  presented on this website, unless otherwise indicated, is considered in the public domain. It may be distributed or copied as
  permitted by law." As fotos estão fora dessa frase ("copyrighted data (e.g., photographs)"). A nota vai recriada pela regra do
  ofício para página da web. A logo da Caltrans não vai (midia §7.6). O nome, o telefone e o e-mail do contato de imprensa não vão
  à folha.
- **O questionário da ACS é PÁGINA REAL.** É obra do Census Bureau (Form ACS-1(INFO)(2024)), domínio público pelo 17 U.S.C. §105,
  e vai sem crédito de mídia na tela (identidade §7). O recorte deixa de fora a logo (midia §7.6) e o código de barras. A marca
  d'água "INFORMATIONAL COPY" é do documento e fica.

## Os grifos, com os tempos do `words.json`

| Cena · plano | O que grifa na fonte | Com a voz | Entra–sai (s) |
|---|---|---|---|
| s06 P1 | "The climate in Big Sur is mild." (ou só "mild", 23,52–24,02) | "calls the climate mild." | 22,53–24,02 |
| s39 P1 | "at a cost of approximately $8,000,000" | "cost at about eight million dollars," | 405,03–406,75 |
| s39 P2 | "A way of life had ended," + "and a new era began" | idem | 409,45–410,70 · 411,01–412,37 |
| s43 P1 | (a capa, sem grifo; opcional "1986" na linha da certificação, sem o dia) | "nineteen eighty-six," | 447,05–448,10 |
| s45 P4 | "normal, unaided vision" · "in any direction" · "for any amount of time" · "at any season" | palavra a palavra | 479,47–484,81 |
| s51 P1 | "estimated $82.6 million" | "nearly eighty-three million dollars," | 583,03–584,86 |
| s51 P2 | "may encounter" · "occasional full closures" · "while crews remove debris" | "it warned drivers to expect … cleared debris." | 586,07–590,20 |
| s52 P2 | (opcional) "May 15, 2026"; depois "our business," · "employees," · "and larger community" · "to recover rapidly from the three-year closure" | "May twenty twenty-six," · "his business, his staff and the community were recovering from those years." | 594,55–595,75 · 597,62–601,72 |
| s56 P2 | "The American Community Survey is" · "conducted by the U.S. Census Bureau." (caixas em px no JSON) | "The Census Bureau also runs an ongoing survey," | 667,02–669,55 |
| s57 P2 | "Since Reopening of Highway 1" (título) · "tourists are returning in considerable numbers" (lead) | "After the road reopened in twenty twenty-six," · "Caltrans reported that the visitors came back." | 693,13–695,40 · 695,74–698,01 |

Todos caem dentro da janela do plano. A pontuação da folha é a da fonte, não a da voz (s45 P4: a voz põe vírgulas que o plano não
tem).

## Os pedidos de rede

Foram 12 pedidos, um por vez, com o User-Agent do canal: robots.txt do govinfo, do `www2.census.gov` e do `www.census.gov`; o PDF
do plano (HEAD e GET); os metadados do pacote; as páginas de política e da coleção CZIC do govinfo; as Conditions of Use da
Caltrans; o questionário da ACS (HEAD e GET); e um 404 no census.gov. Nenhum site recusou. Nenhuma página da Caltrans foi pedida:
as provas saíram das cópias locais de 02/11, sem rede. O registro está em
`out/big-sur/_tmp/pesquisa-documentos/registro-pedidos.jsonl`.
