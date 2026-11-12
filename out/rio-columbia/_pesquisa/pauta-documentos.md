# Pauta de documentos: rio-columbia (vídeo 7)

Peça `pesquisa-documentos`, passo `research`, 12/11/2026. O JSON ao lado (`pauta-documentos.json`, 15 itens) passa no contrato
`pauta-pesquisa` (exit 0). Ele traz o texto literal, os tempos do grifo e a licença de cada peça. Os tempos vêm do `words.json`
(grafia da voz, sha256 `04692a8f…`), e as janelas dos planos, do espelho r2 (sha256 `28f6121b…`). O gerador é
`out/rio-columbia/_tmp/pesquisa-documentos/gerar-pauta.py`, e nenhum tempo foi digitado à mão.

## Divergências entre a fonte e o que vai à tela (primeiro)

1. **s10, s43 e s59: o fim do Art. IV(3) não é o da cópia do laudo (média, de tela).** A coletânea da CSG West, que o laudo de
   fatos usou (`midia/rio-columbia/fontes/a/crt-protocol-documents-csgwest.pdf`), diz "for the duration of the flood **control** period
   for which the call is made". O texto registrado na ONU (UNTS vol. 542, No. 7894, p. 254, conferido na imagem) diz "for the duration of
   the flood period for which the call is made". A voz não cita esse pedaço, e a linha F011 do laudo para antes dele. Mas a folha mostra o
   parágrafo inteiro: **o texto da folha sai da ONU**, não da CSG West. Os outros trechos citados batem letra a letra nas duas.
2. **s26 P1 e s59 P4: "COLUMBIA RIVER TREATY" não é o título impresso (leve, de tela).** O título oficial é "Treaty between Canada and
   the United States of America relating to cooperative development of the water resources of the Columbia River Basin. Signed at
   Washington, on 17 January 1961". O nome curto é o da lei ("The term 'Columbia River Treaty' means the treaty relating to cooperative
   development …", sec. 1152(d)(2)) e o de uso. O texto oficial não tem capa. Na folha recriada, o nome curto vai como a referência da
   peça, na caixa do cabeçalho, e o título oficial pode ir no corpo. As datas da tela conferem nas duas fontes: assinado em Washington
   em 17/01/1961; em vigor em 16/09/1964, com a troca das ratificações em Ottawa (a nota 1 da ONU; o Art. XX). "Signed in Ottawa"
   continua fora.
3. **s43 P1: a anotação "no number" não pode cair perto de "sixty years" (leve, de tela).** O Art. IV(3) tem um número só, "sixty years",
   que diz QUANDO o regime começa. O que falta é o número da cheia que dispara o pedido. O CRS (nota 39) diz: "The actual trigger for
   called-upon flood control operations […] is not currently defined in the Treaty". A anotação vai junto de "as the entity requires to
   meet flood control needs", ou a folha começa em "… Canada shall, when called upon" com o corte marcado.
4. **s53 P2: o "her" fica sem antecedente (média, de tela).** O espelho quer só a frase de 1956 na folha, até a checagem. Mas
   "after her death in 1956" se refere à frase de antes, "By 1930, only one person remained on the rolls of the Arrow Lakes Band". O
   para. 6 inteiro está no JSON, letra a letra, para o `verificador-de-fatos`. Com a linha dele, a folha pode trazer a frase inteira; sem
   ela, vai "… after her death in 1956, the government of Canada declared the Arrow Lakes Band extinct …". Atenção ao de 1930: é **"only
   one person … on the rolls of the Arrow Lakes Band"**, e não "one Sinixt".
5. **s28 (só se virar folha): o Art. VI(1)(b) não diz "Arrow" (leve).** Ele paga "52,100,000 dollars upon the commencement of operation
   of the storage referred to in subparagraph (a) (ii)". A ligação com o Arrow passa pelo IV(2)(a)(ii) ("7,100,000 acre-feet of the
   Canadian storage described in Article II (2) (b)") e pelo II(2)(b) ("near the outlet of Arrow Lakes, British Columbia"). A folha não
   põe "Arrow" como texto do VI(1).
6. **Informação, sem mudar nada:**
   - s38 P1: "PUBLIC LAW 118-272 · APPROVED JAN. 4, 2025" junta duas páginas reais: o cabeçalho de toda página diz "PUBLIC LAW 118–272—JAN.
     4, 2025", e a última diz "Approved January 4, 2025.";
   - s45 P3: a fonte diz "at least ten years written notice", e a voz diz "ten years' written notice". O "at least" fica na folha. Fora da
     voz: pelo Art. XIX(4), se o tratado acabar, "Articles IV (3) and VI (4) and (5) remain in force" enquanto existirem as instalações e as
     condições. A promessa do IV(3) pode durar mais que o próprio tratado;
   - s52: a frase da BC tem "and mitigation at the time" e continua (", and feelings of hurt remain to this day."). O grifo cobre só a
     citação. O resto fica na folha, sem grifo, ou o corte vai marcado.

As citações da voz conferem palavra por palavra:
- a da lei em s40 ("operations that the Government of Canada may not be obligated to provide");
- a da BC em s52 ("could be considered inadequate to non-existent by today’s standards");
- a da Corte em s53;
- o Art. XIX(2) em s45;
- o "remains in force" da nota dos EUA em s59.

O script é `conferir-citacoes.py` e o resultado está em `conferir-citacoes.json`, na pasta de trabalho.

## O texto do tratado: qual publicação

**United Nations — Treaty Series, vol. 542 (1965), No. 7894**, o texto que o Canadá registrou na ONU (Art. XXI do tratado). O PDF em
inglês da ONU tem 52 páginas escaneadas. A camada de texto é OCR, com erros, e por isso cada trecho foi lido na imagem a 300 dpi.

Por que não as outras:
- a série do Canadá (Canada Treaty Series 1964 No. 2, `publications.gc.ca`) respondeu ao programa com um desafio de robô (AWS WAF);
- o state.gov dá 403 (LEIA-ME das fontes);
- a base do `treaty-accord.gc.ca` diz "The data you are trying to access is not currently available";
- o Canadiana veta agentes de IA no robots.txt e não foi usado.

## O que vai à tela e o que é prova

Os arquivos estão em `out/rio-columbia/_media/documento/`, medidos pelo `ffprobe`, com o `_PROCEDENCIA.json`. Nenhum passa de 40 MP.

| Arquivo | Cena | À tela? | Licença | sha256 |
|---|---|---|---|---|
| `plaw-118-272-p1.jpg` (2550×3050) | s38 P1 | **sim, depois do conferente** (alternativa à folha recriada) | domínio público federal | `1910b4c4…` |
| `plaw-118-272-p241-approved.jpg` (3375×834) | s38 P1 | **sim, depois do conferente** (alternativa) | domínio público federal | `25b63dc2…` |
| `plaw-118-272-p53.jpg` (2550×3300) | s40 | **sim, depois do conferente** (alternativa) | domínio público federal | `07432ee7…` |
| `plaw-118-272-p53-sec1152.jpg` (3292×1284) | s40 | **sim, depois do conferente** (alternativa; o recorte legível) | domínio público federal | `a9be20ab…` |
| `tratado-1961-unts542-prova-p6.jpg` | s10, s43, s59 | não: RECRIADA | ONU: só uso pessoal e não comercial | `3542c943…` |
| `tratado-1961-unts542-prova-p5.jpg` | s10, s43 (o começo do IV(3)) | não | idem | `8d8420e3…` |
| `tratado-1961-unts542-prova-p17.jpg` | s45 P3 | não: RECRIADA | idem | `c1231196…` |
| `tratado-1961-unts542-prova-p2.jpg` | s26 P1, s59 P4 | não: RECRIADA | idem | `54667c6b…` |
| `tratado-1961-unts542-prova-p1.jpg` | s26, s59 (apoio) | não | idem | `47153f67…` |
| `tratado-1961-unts542-prova-p18.jpg` | s26 (apoio: Washington) | não | idem | `4496050d…` |
| `tratado-1961-unts542-prova-p7.jpg` | s28 (só se o diretor pedir a folha) | não: RECRIADA | idem | `d5077d16…` |
| `desautel-2021-scc17-prova-p17.jpg` | s53 P2 | não: RECRIADA | o texto, sim (Reproduction of Federal Law Order); a página, não | `063cfab7…` |
| `desautel-2021-scc17-prova-p1.jpg` | s53 P3 (apoio do rótulo) | não | idem | `c03f3915…` |
| `bc-about-crt-prova.png` (2368×4258) | s52 | não: RECRIADA | licença não lida (o site recusou) | `8ad544f8…` |
| `nota-eua-2024-11-22-prova-p7.jpg` | s59 P4, s43 P2 (apoio) | não (não é folha no espelho; tem o selo) | domínio público federal | `9f7f7dc0…` |

As páginas da lei têm, no JSON, as caixas do grifo em px do JPEG entregue, medidas pela camada de texto do PDF. A p. 1 é recortada abaixo
do selo "Authenticated U.S. Government Information · GPO" (midia §7.6). O espelho descreve s38 e s40 como folhas recriadas. A página real
é alternativa, porque a lei é obra federal (identidade §5: "Com permissão de uso clara, a página real […] entra como a folha"). A escolha
é do diretor e do editor.

## As licenças

- **A lei (PL 118-272): domínio público.** É obra do governo federal, pelo 17 U.S.C. §105, e o govinfo diz o mesmo (lido hoje; o HTML
  é idêntico ao da leitura do vídeo 5). O selo do GPO fica fora.
- **O tratado (ONU): a página não vai à tela.** Os termos da ONU (un.org/en/about-us/terms-of-use, lidos hoje) dão "personal,
  non-commercial use", como no vídeo 3. A folha recria o texto, que é o texto que os dois governos assinaram.
- **A Suprema Corte do Canadá: recriada.** Os termos da Corte (lidos hoje, "Date modified: 2026-09-02") dizem:
  - as razões caem na Reproduction of Federal Law Order e "may be reproduced, in whole or in part and by any means, without charge and
    without further permission […] provided that due diligence is exercised […] and that the reproduction is not represented as an
    official version";
  - os elementos editoriais (inclusive "paragraph numbers") só valem para uso pessoal, e o uso comercial pede permissão.

  O texto pode ir à folha recriada, sem selo nem cabeçalho do S.C.R. A página, não.
- **O governo da BC: recriada.** A página aponta para www2.gov.bc.ca/gov/content/home/copyright. Esse servidor fechou a conexão ao
  programa ("server closed abruptly") e não se tentou de novo. Sem permissão lida, a folha recria a frase, como o espelho já diz.
- **A nota dos EUA de 22/11/2024: domínio público, mas só apoio.** Ela é obra do Departamento de Estado (assinada "Brian A. Nichols, For
  the Secretary of State"), e o PDF é a cópia que a BC publicou. O espelho não a pede como folha.
- **O CRS R43287 (as anotações de s43 e s45) é obra federal.** A cópia local vem do EveryCRSReport, o agregador: o congress.gov recusou
  (LEIA-ME). A fonte na tela é o CRS.

## Os grifos, com os tempos do `words.json`

| Cena · plano | O que grifa na fonte | Com a voz | Entra–sai (s) |
|---|---|---|---|
| s10 P1 | "Canada shall," · "when called upon by an entity designated by the United States of America" (Art. IV(3)) | "promises Canada's help" · "if the United States asks." | 43,875–45,11 · 46,23–47,73 |
| s26 P1 | (sem grifo: 2,2 s, e a voz não diz data) | "Out of that argument came a treaty." | — |
| s28 P4 | (só se virar folha) "52,100,000 dollars" (Art. VI(1)(b)) | "Most of the money was for one lake: Arrow," | 309,49–312,05 |
| s38 P1 | "JAN. 4, 2025" (p. 1) ou "Approved January 4, 2025." (p. 241) | "In January twenty twenty-five," | 470,65–472,30 |
| s40 P1 | "including" (opcional) · "oper-/ations" · "that the Government of Canada" · "may not be obligated" · "to provide" · "under the Columbia River Treaty" | "includes," · "operations" · … · "under the treaty." | 486,925–487,33 · 488,93–489,62 · 489,70–490,90 · 490,98–492,10 · 492,18–492,76 · 493,00–493,70 |
| s43 P1 | "Canada shall, when called upon by an entity designated by the United States of America"; depois, a anotação | "the United States can call on Canada in a flood." · "And no number says when." | 538,09–540,72 · 541,16–542,61 |
| s45 P3 | "terminate the Treaty" (opcional) · "at least ten years written notice"; depois, "NO NOTICE GIVEN · CRS, DEC. 2024" | "leaving" · "ten years' written notice," · "and nothing we've read says either side has given it." | 578,62–579,175 · 579,375–580,67 · 580,94–583,40 |
| s52 P1 | "First Nations and public consultation" (opcional) · "could be considered" · "inadequate to non-existent" · "by today’s standards" | "residents and First Nations were consulted," · a citação | 698,92–700,87 · 703,69–704,525 · 704,525–706,20 · 706,28–707,26 |
| s53 P2 | "after her death in 1956," · "the government of Canada declared the Arrow Lakes Band extinct" | "In nineteen fifty-six," · o resto da frase | 711,37–712,62 · 712,83–716,07 |
| s59 P4 | a anotação "IN FORCE" (apoio: "the Treaty, which remains in force", nota dos EUA); opcional, "when called upon" de novo | "remains in force," · "on-call promise," | 856,92–857,81 · 858,16–859,16 |

Todos caem dentro da janela do plano. A pontuação da folha é a da fonte, não a da voz.

## Os pedidos de rede

Foram 21 pedidos, um por vez, com o User-Agent do canal, registrados em `registro-pedidos.jsonl`, na pasta de trabalho:
- os robots.txt (publications.gc.ca, treaties.un.org, treaty-accord.gc.ca, gac.canadiana.ca, govinfo, un.org, www2.gov.bc.ca,
  decisions.scc-csc.ca, scc-csc.ca, engage.gov.bc.ca);
- três páginas do treaty-accord;
- o PDF da ONU (HEAD e GET) e o da lei (HEAD e GET);
- as políticas do govinfo, os termos da ONU e os da Suprema Corte;
- a página "About" da BC.

O que recusou parou ali, sem nova tentativa:
- o publications.gc.ca respondeu 202 com "x-amzn-waf-action: challenge";
- o www2.gov.bc.ca fechou a conexão.

Os `Crawl-delay` da ONU (2 s no treaties.un.org, 10 s no un.org) foram respeitados.
