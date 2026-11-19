# Pauta de documentos: australia-animais (vídeo 8)

Peça `pesquisa-documentos`, passo `research`, 19/11/2026. O JSON ao lado (`pauta-documentos.json`, 18 itens: 9 imagens e 9 folhas)
passa no contrato `pauta-pesquisa` (exit 0). Ele traz o texto literal de cada fonte, os tempos do grifo e a licença de cada peça. Os
tempos vêm do `words.json` (grafia da voz, sha256 `064f54a0…`), e as janelas dos planos, do espelho r2 (sha256 `833aaa75…`). O gerador
é `out/australia-animais/_tmp/pesquisa-documentos/gerar-pauta.py`, e nenhum tempo foi digitado à mão. Cada literal foi conferido letra a
letra na cópia da fonte (`conferir-citacoes.py`: 0 falhas).

## Divergências entre a fonte e o que vai à tela (primeiro)

1. **s06, s07, s13 e s16: o 85 não está na tabela do ABS (média, de tela).** A Table 1.2 do cubo 2025_01 não tem coluna de total: traz,
   para cada ano de 2016 a 2025, homens, mulheres e pessoas. O 85 é a soma das dez células "Persons" da linha X20-X29
   (4+10+19+6+9+6+6+8+11+6; a conta do verificador, F011). Na folha recriada, o 85 vai **fora do corpo da tabela**, como anotação do canal,
   e nunca como uma coluna "Total" do ABS.
2. **s63 P3: "these interactions" fica sem antecedente (média, de tela).** A frase do NCIS começa em "However, deaths as a result of these
   interactions…", e o antecedente está na frase anterior ("contact with bees, hornets, wasps, spiders, snakes, ticks, ants and marine
   animals"). A voz o supre ("deaths from snakes, spiders, bees and the rest"). Se a folha trouxer as duas frases, o "Thousands" entra
   (é palavra, não número da ficha). Decisão do `redator-de-tela`. E o literal é a transcrição da Sala no registro: não há cópia da página
   no disco.
3. **s36: a afirmação "came out on top" não foi lida na fonte primária (leve; conhecida).** O artigo de 1979 não abriu (Elsevier,
   assinatura; o ScienceDirect recusa o robô). A folha só traz os dados de referência, que estão no registro do MEDLINE. O posto da taipan
   vem de Jackson et al. 2016 (ref. 21) e Paz et al. 2025 (ref. 26), como no laudo (F090).
4. **s37 P4: o "2009" do crédito não está impresso na ficha (leve, de crédito).** A ficha não traz data; os metadados do PDF dizem
   23/12/2009 (creationDate). O crédito do dossiê ("…SA Arid Lands NRM Board, 2009") se apoia só nisso.
5. **s55 P4: a Courier Prime não tem o δ (leve, de tela).** O título do artigo e a frase da Significance levam "δ". Medido no TTF do canal:
   a Courier Prime não tem o glifo; a Inter e a Noto Sans têm. Por isso a folha recomendada é a oração do Abstract, sem δ: "…with their
   lethal effects on humans being an unfortunate evolutionary coincidence."
6. **s57 P2: "AT LEAST" é o hedge do canal (leve).** A revisão diz "13 deaths (all before the introduction of antivenom in 1981)", nos
   casos registrados que ela achou. A voz diz "by one review of the recorded cases", e o laudo aceitou (F169).
7. **A ordem do grifo contra a da voz (leve, de tela).** Em s57 P2, a voz diz "Before 1981" antes de "at least 13", e a folha do espelho
   põe "AT LEAST 13 DEATHS BEFORE 1981". Em s37 P2, a voz diz "criticized" antes de "mouse tests". Em s36, a voz diz "snakes" antes de
   "mice". Nas três, a pauta dá uma varredura só, na ordem de leitura, ou a ordem da voz na folha do canal (s57), à escolha do redator.
8. **s58 P2: a página do MJA põe a carta de Wiener sob o título do artigo a que ela responde (leve).** Esse título não vai à folha como se
   fosse da carta.
9. **s37 P2: "criticised" é a grafia da fonte (britânica); a voz diz "criticized".** Na página real e na folha recriada, a da fonte.

As citações da voz conferem: "usually quite shy", "an unfortunate evolutionary coincidence" e "remain relatively rare" estão letra a
letra na fonte e no texto aprovado. As paráfrases ("criticized … don't reflect what happens when a snake bites a person"; "didn't
significantly ease pain or other symptoms"; "hundreds of spiders") ficam dentro do que a fonte diz.

## O que vai à tela, e como

| Cena | A folha | Registro | O crédito |
|---|---|---|---|
| s06 P1, s13 P1, s16 P1 (s07 P2, se o diretor quiser) | ABS, *Causes of Death, Australia, 2025*, Table 1.2 | **RECRIADA** com os valores do cubo: não existe página que se rasterize (só o xlsx; o HTML do lançamento não tem as linhas X20-X29; não há PDF) | `Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0)`, com "2025 PRELIMINARY" |
| s36 P1, s37 P1 | Broad, Sutherland & Coulter, *Toxicon*, 1979 | **RECRIADA** (Elsevier, assinatura) | `Source: Broad, Sutherland & Coulter, Toxicon, 1979` |
| s37 P2 | Ainsworth et al., *PLOS NTD*, 2026, p. 17 | **PÁGINA REAL possível** (CC BY 4.0), depois do `conferente-de-midia`; senão, RECRIADA | `Source: Ainsworth et al., PLOS Neglected Tropical Diseases, 2026` (com a página real, vale "(CC BY 4.0)") |
| s37 P4 | a ficha "Inland Taipan" | **RECRIADA** (o PDF não traz licença; fotos de John Read, mapa da DWLBC, logo do governo) | `Source: Government of South Australia, SA Arid Lands NRM Board, 2009` |
| s55 P4 | Herzig et al., *PNAS*, 2020 | **RECRIADA** (PNAS license, não aberta) | `Source: Herzig et al., PNAS, 2020` |
| s57 P2 | o dado de Isbister et al., *MJA*, 2005 | **FOLHA DO CANAL** (o texto do MJA não vai à tela, DF-06) | `Source: Isbister et al., Medical Journal of Australia, 2005` |
| s58 P2 | o dado de Wiener, *MJA*, 2003 | **FOLHA DO CANAL** (DF-06) | `Source: Wiener, Medical Journal of Australia, 2003` |
| s59 P1 | RAVE-II, *Ann Emerg Med*, 2014 | **RECRIADA** (sem licença aberta) | `Source: Isbister et al., Annals of Emergency Medicine, 2014 (RAVE-II)` |
| s63 P3 | NCIS, o resumo da FS24-09 | **RECRIADA** com o texto que a Sala leu (CC BY 4.0) | `Source: National Coronial Information System (NCIS), CC BY 4.0` |

## Os literais e o grifo (os tempos são do `words.json`)

- **ABS, Table 1.2** (o cubo 2025_01, folha "Table 1.2", linhas 1763-1773; só as colunas "Persons"):
  - "Contact with venomous animals and plants (X20-X29)": 4 · 10 · 19 · 6 · 9 · 6 · 6 · 8 · 11 · 6;
  - "Contact with venomous spiders (X21)": 0 · 0 · 0 · 0 · 0 · 0 · 0 · 0 · 0 · 0;
  - as outras nove linhas, as notas (a) e (b) e o cabeçalho estão no JSON, como o ABS os imprime ("X20-X29" com hífen).
  - s16 P1: "Contact with venomous spiders (X21)" com "Spiders don't appear at all:" (112,99-114,38 s); os dez zeros com "not one death,
    in any of those years." (114,84-117,36 s). s06 P1 e s13 P1, sem grifo. s07 P2 (opcional): o rótulo X20-X29 em 31,59-34,06 s, as dez
    células em 34,24-35,68 s, e o "= 85" do canal em "eighty-five" (34,70 s).
- **Broad 1979**: "Broad AJ, Sutherland SK, Coulter AR. The lethality in mice of dangerous Australian and other snake venom. Toxicon.
  1979;17(6):661–664." (o registro do MEDLINE). s36 P1: o "1979" em "In nineteen seventy-nine," (371,26-372,50 s; DF-05), e o título
  inteiro numa varredura em "tested the venoms of dangerous snakes on lab mice." (373,41-376,09 s). Nenhum valor de LD50.
- **Ainsworth 2026** (p. 17, "Box: Key learning points", 2º item): "The mouse lethality assays (median lethal dose and median effective
  dose) have been criticised on ethical and scientific grounds since they induce severe pain and distress and do not reflect the actual
  circumstances of snakebite envenoming." s37 P2: "The mouse lethality assays" e "have been criticised" em "have since criticized mouse
  tests like that one," (390,86-393,23 s); "do not reflect the actual circumstances of snakebite envenoming" em "they don't reflect what
  happens when a snake bites a person." (394,38-397,06 s). As caixas em px das duas imagens estão no JSON (`grifo_caixas_px`).
- **A ficha da Austrália do Sul** (p. 2): "The Inland Taipan has the most potent venom of any land snake on earth, but fortunately it is
  usually quite shy and has a placid disposition." s37 P4: "usually quite shy" em "\"usually quite shy.\"" (407,34-408,64 s).
- **Herzig 2020** (Abstract, a última frase): "…with their lethal effects on humans being an unfortunate evolutionary coincidence."
  s55 P4: "lethal effects on humans" em "Its lethal effect on humans," (672,16-673,77 s); "an unfortunate evolutionary coincidence" em
  "\"an unfortunate evolutionary coincidence.\"" (675,53-677,88 s).
- **Isbister 2005** (para o registro; não vai à tela): "13 deaths (all before the introduction of antivenom in 1981), seven in children;".
  s57 P2, na folha do canal: "BEFORE 1981" em "Before nineteen eighty-one," (695,00-696,28 s); "AT LEAST 13 DEATHS" em "killed at least
  thirteen people," (697,515-699,16 s).
- **Wiener 2003** (para o registro; não vai à tela): "Between 1955 and 1957, I dissected the venom glands of 590 redback spiders for the
  production of antivenom." s58 P2, na folha do canal: "590 REDBACK SPIDERS" em "dissected the venom glands of hundreds of spiders"
  (720,665-723,07 s); "1955–1957" sem grifo.
- **RAVE-II** (o resumo, "Conclusion"): "The addition of antivenom to standardized analgesia in patients with latrodectism did not
  significantly improve pain or systemic effects." s59 P1: "antivenom" em "the antivenom" (734,35-735,07 s); "did not significantly improve
  pain or systemic effects" em "didn't significantly ease pain or other symptoms." (735,15-737,76 s).
- **NCIS** (o resumo da FS24-09, lido pela Sala): "However, deaths as a result of these interactions remain relatively rare, particularly
  in comparison to deaths associated with other species." s63 P3: "deaths as a result of these interactions" (opcional) em 792,42-795,42 s;
  "remain relatively rare" em 795,69-797,15 s; "particularly in comparison to deaths associated with other species" em "next to deaths
  associated with other species." (797,33-799,66 s).

A câmera chega 0,3 s antes da 1ª palavra de cada grifo e para (identidade §4.4): o `camera_chega_s` de cada plano está no JSON.

## As imagens em `out/australia-animais/_media/documento/`

Medidas pelo `ffprobe` (o `identify` não existe nesta máquina); nenhuma passa de 40 MP. O `_PROCEDENCIA.json` tem uma linha por arquivo,
com o sha256.

- **Podem ir à tela, depois do conferente** (CC BY 4.0; o logo da PLOS NTD ficou fora dos dois recortes):
  - `ainsworth-2026-plosntd-p17.jpg` (2550 × 2967, 7,57 MP; a p. 17 a 300 dpi, sem o logo);
  - `ainsworth-2026-plosntd-p17-box.jpg` (4500 × 859, 3,87 MP; o quadro a 600 dpi, o corpo a ~83 px).
  - Legibilidade: a linha do quadro tem 518 pt; inteira na largura útil da tela, o corpo fica em ~66 px, abaixo do piso de 84. A saída é
    a da marca: a folha recua, e o trecho aparece ampliado ao lado, literal e com até 12 palavras ("do not reflect the actual
    circumstances of snakebite envenoming"). Pela conta; quem monta a cena olha o frame.
- **Provas, nunca na tela (7):** `ainsworth-2026-plosntd-prova-p1-titulo.jpg` e `-prova-p1-licenca.jpg` (a licença no PDF; os recortes
  deixam fora o e-mail do autor); `sa-inland-taipan-2009-prova-p2.jpg`; `herzig-2020-pnas-prova-resumo.png` e `-prova-significance.png`;
  `isbister-2005-mja-prova-13-deaths.png`; `wiener-2003-mja-prova-590.png`. As quatro PNG são fotos das cópias locais, num Chrome sem
  cabeça, sem rede e sem JavaScript.

## As licenças, lidas

- **ABS:** CC BY 4.0, "All material presented on this website is provided under a Creative Commons Attribution 4.0 International
  licence", com as exceções do brasão e do logo (a cópia `abs-copyright.html`, do leitor B).
- **PLOS NTD (Ainsworth):** "This is an open access article distributed under the terms of the Creative Commons Attribution License, which
  permits unrestricted use, distribution, and reproduction in any medium, provided the original author and source are credited." (PDF
  p. 1, baixado do journals.plos.org em 19/11).
- **A ficha da Austrália do Sul:** o PDF não traz licença. O rodapé do site que a liga (lido em 19/11): "The Landscape Boards South
  Australia website is licensed under a Creative Commons Attribution 3.0 Australia Licence." É o aviso do site, não o do produto, e a
  ficha tem fotos e mapa de terceiros e o logo: sem permissão clara para a página.
- **PNAS (Herzig):** "Published under the PNAS license" (a página do PMC); a Europe PMC diz "isOpenAccess: N". O pnas.org deu o desafio
  do Cloudflare (403).
- **Elsevier (Broad 1979, RAVE-II):** sem licença aberta ("isOpenAccess: N"; "Subscription required").
- **MJA (Isbister 2005, Wiener 2003):** direitos reservados (o laudo do r1; DF-06).
- **NCIS:** "Content is provided under a Creative Commons Attribution 4.0 International License (CC BY 4.0), unless otherwise stated.
  Attribution must be provided to the National Coronial Information System (NCIS)." (lido pela Sala, no navegador do app).

## Para a Sala ler no navegador do app (nada disto segura a pauta)

1. **A licença da PNAS**, se a Sala quiser confirmar: https://www.pnas.org/doi/10.1073/pnas.2004516117 (o rodapé de direitos) ou a página
   de licenças da PNAS. O site deu 403 com o desafio do Cloudflare. A folha já é recriada.
2. **A página do RAVE-II** no Annals of Emergency Medicine (https://doi.org/10.1016/j.annemergmed.2014.06.006): a linha de copyright.
   O robots.txt do www.annemergmed.com veta `anthropic-ai` e `ClaudeBot`, e a página deu 403 (Cloudflare). A folha já é recriada.
3. **O artigo de 1979** (https://doi.org/10.1016/0041-0101(79)90245-9), só se alguém quiser a afirmação "came out on top" na fonte
   primária: o ScienceDirect recusa o robô, e o artigo é de assinatura.
4. **Uma captura da página "Fact sheets" do NCIS** (https://www.ncis.org.au/research-publications/fact-sheets), como prova do literal de
   s63, que hoje só existe na transcrição da Sala.
