# Reverificação pontual · atlantico-fundo (vídeo 4) · parágrafo 15 · F132

Revisão julgada: `ddd4567309e3` · data-base 2026-10-28 · rodada 2 (15:3x de Brasília): a frase escolhida, no texto falado de hoje. A rodada 1 (15:1x, mais abaixo) julgou o texto narrado e aprovado, `7b965eecdb7c`, e deu FAIL.

COBERTURA: 17 de 17 — os 16 itens da rodada 1 (as 10 linhas de `fatos-tabela.json` do §15, de F132 a F141; H1, achada na leitura à mão; as trocas T1 a T3; as notas de tela N1 e N2) e, na rodada 2, a frase escolhida (E1). Na rodada 2, F133 a F141 e H1 foram relidas no contexto da frase nova, sem mudança de veredito, e N1 e N2 foram reconferidas com a imagem nova da cena (a foto do lançamento, no lugar do vídeo). Todos os itens têm veredito.

NOTA: 9/10 — vale para o §15 de `ddd4567309e3` e as notas de tela dele. O texto falado do §15 está todo confirmado, frase nova inclusive: no laudo do roteiro inteiro (`fatos.laudo.md`), PASS. O que falta para 10 é de tela: o lugar do rótulo N1 (achado R2-1, abaixo). A rodada 1 deu 6/10 ao texto narrado.

## Rodada 2 · a frase escolhida, sobre `ddd4567309e3` (28/10/2026, 15:3x)

- **O pedido:** a Sala, às 15:2x, depois da resposta do Lucas, às 15:0x: "Corrigir a frase (Recomendado)" (`roteiros/atlantico-fundo/decisoes-lucas.md`, "Depois da pesquisa"). A opção aprovada dizia: "Troco só esse trecho, para dizer que o robô desceu quase 20.000 pés junto à parede sul, sem dizer que a filmou."
- **A frase escolhida** (escrita em Fable; o porquê está em `out/atlantico-fundo/_tmp/frase-2015/escrita.md`): "In 2015, a NOAA robot descended along the trench's south wall, almost 20,000 feet down."
- **Conferido pelo disco, não pelo relato:**
  - `roteiros/atlantico-fundo/roteiro-narrador.md`, linha 50: o `git diff --word-diff` contra o HEAD dá uma troca só, `filmed` → `descended along`;
  - o `gate.mjs` dá `ddd4567309e3` ao texto de hoje e `7b965eecdb7c` ao do HEAD, o arquivo `61f500f3e810…`, o mesmo que o laudo anterior julgou;
  - a cópia para a voz traz "descended along" e só as duas trocas de sempre ("twenty fifteen" e "twenty thousand"): `out/atlantico-fundo/roteiro.md`, linha 35, e `roteiros/atlantico-fundo/voz/texto-para-voz.md`, linha 31.

| id | afirmação | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| E1 | "In 2015, a NOAA robot descended along the trench's south wall, almost 20,000 feet down." | **CONFIRMADA** | "descended": S33, p. 18, linha 1081: "As the ROV descended and reached 6,000 m" · "along the trench's south wall": S32, p. 2, linha 131: "Today we conducted a 6,000 m ROV dive along the southern wall of the Puerto Rico Trench" · "almost 20,000 feet down": S32, p. 1, linha 80: "5999.7 m" = 19.684,1 ft (F135, F136) · "In 2015": S32, p. 1, linha 56: "2015-04-26T10:46:07.296000" (F133) · "a NOAA robot": S33, p. 10, linhas 547–548: "NOAA’s custom-built, dual-body, 6,000-meter- rated ROVs Deep Discoverer (D2) and Seirios" (H1). A frase não diz que o robô filmou, viu ou chegou à parede ou ao fundo, e é isso que a fonte nega: "without exploring the seafloor at this dive location" (S33, p. 14, linhas 738–739) | https://repository.library.noaa.gov/view/noaa/10424 · https://repository.library.noaa.gov/view/noaa/21287 |

- **É a T3 da rodada 1, com o verbo do próprio relatório.** "Descended" é a palavra da S33 para o que o robô fez. "Along the trench's south wall" é a palavra da S32, e a posição a sustenta (o perfil da GEBCO está na rodada 1, "As três trocas").
- **Não tem a ressalva da T2:** a cauda ", almost 20,000 feet down." amarra o número à descida.
- **As outras três frases continuam certas no contexto novo:**
  - "That's a long way east of its deepest point." (F137): o "That" segue caindo no lugar do mergulho, a 130 mi a leste.
  - A dúzia de mergulhos (F140).
  - "Soon after, a problem with the robot cut this one short." (F141): agora na ordem da fonte, "As the ROV descended and reached 6,000 m, the ROV pilots noticed a problem […]. The vehicles were recovered early" (S33, linhas 1081–1083).

### O que a Sala pôs em dia, conferido pelo disco (eu não editei nada disso)

| arquivo | o que diz agora | veredito |
|---|---|---|
| `qc-roteiro/fatos-tabela.json`, F132 a F136 | a `frase` nova nas cinco; a F132 com a afirmação "O ROV da NOAA desceu junto à parede sul da fossa, a 6.000 m (sem filmá-la: voltou sem explorar o fundo)."; o campo `reverificacao` na F132 e na F134. Trechos, fontes e vereditos são os de antes, e a frase velha não sobra em linha nenhuma | certo. Resta uma anotação LEVE: a afirmação da F136 ainda diz "(a parede, nunca o fundo, F68)", mas os 5.999,7 m são a profundidade do robô (a O15 do `fatos.laudo.md`) |
| `pautas/atlantico-fundo/fundamento.md` (linhas 291–292) e `.json` (linhas 1971–1972), F68 | "desceu junto à parede sul da fossa até 5.999,7 m […] e o robô voltou sem explorar o fundo nem filmar a parede (só a coluna d'água, na descida e na subida)"; o "Como dizer" é a frase nova | CONFIRMADO pela S33 (linhas 738–739) e pela S32 (linhas 132–133). O achado 4 da rodada 1 está resolvido |
| `roteiros/atlantico-fundo/roteiro-editor.md` | o carimbo `ddd4567309e3`; o resumo do §5 (linha 152); a frase, a imagem, o rótulo e o mapa (linhas 627–635), com a foto do lançamento no lugar do vídeo, que "fica fora da cena"; e o rótulo de tela "SOUTH WALL DIVE · ~6,000 M (19,700 FT) · 2015" (linha 259) | o texto está certo. Os achados 1 a 3 da rodada 1 estão resolvidos no dossiê. Resta o lugar do rótulo (R2-1) |
| `out/atlantico-fundo/_dados/s47.json` | `texto_para_tela`: "SOUTH WALL DIVE · ~19,700 FT (6,000 M) · FAR EAST OF THE DEEPEST POINT · 2015"; a nota diz "o robô não explorou o fundo nem filmou a parede" | CONFIRMADO (os números da rodada 1, N1) |

### Achados da rodada 2

1. **[MÉDIO] R2-1 · o rótulo N1 não pode ser legenda da foto do lançamento.**
   - No dossiê (linhas 630–634), o rótulo "SOUTH WALL DIVE · ~19,700 FT (6,000 M) · FAR EAST OF THE DEEPEST POINT · 2015" está no item da imagem real, que agora é a foto do Deep Discoverer sendo baixado ao mar, "de 10/04/2015, da mesma expedição e de outro mergulho".
   - A origem da foto não é o mergulho da parede sul:
     - o título no Commons é "NOAAS Okeanos Explorer (R 337) deploys Deep Discoverer off Puerto Rico April 2015";
     - o `pauta-imagens.json` grava `lugar_na_origem` "ao largo de Porto Rico" e `data_na_origem` 2015-04-10. A data do dia eu não conferi na origem; o título diz só "April 2015";
     - o mergulho 9 foi em 26/04/2015 (S32, linha 56).
   - Sobre essa foto, "SOUTH WALL DIVE" diz que ela é o lançamento do mergulho da parede sul. A regra do canal é que o rótulo não nomeie lugar mais específico que o `lugar_na_origem` (`marca/midia.md` §2, item 7).
   - **CONSERTO:** o rótulo N1 vai no mapa, junto ao alfinete do mergulho (19°09′N, 65°24′W), onde está certo. A foto leva, se levar rótulo, só o que a origem diz, por exemplo "DEEP DISCOVERER · OKEANOS EXPLORER · APRIL 2015". Quem escreve é o `redator-de-tela`; quem confere, o `conferente-de-midia` e o `qc-visual`.
   - **RAIZ: PONTUAL.** O rótulo foi conferido sobre o vídeo, e a imagem mudou depois.
2. **[MÉDIO] R2-2 · o `out/atlantico-fundo/espelho.json` ainda é o de antes.**
   - Traz 4 vezes "filmed the trench", a tese com a semente "a luz na parede" (linha 3760), o beat "o vídeo da parede escura" (linha 3762) e o texto de tela "SOUTH WALL · ~19,700 FT (6,000 M) · …" (linhas 3801 e 3881).
   - **CONSERTO:** o plano da s47 refeito pela Direção, com a frase nova, a foto e o mapa (a decisão do Lucas "Foto do robô e mapa (Recomendado)"), sobre o relógio da narração refeita.
   - **RAIZ: PONTUAL.**
3. **[LEVE] o achado 5 da rodada 1 continua.** A `nota` de `out/atlantico-fundo/_media/geo/mergulho-ex1502-dive09.json` ainda diz "a parede sul a 5.999,7 m". **CONSERTO:** "o mergulho na parede sul; o robô a 5.999,7 m, sem chegar ao fundo".
4. **A narração gravada ainda diz "filmed".** Não é achado de texto: o Lucas já aprovou refazer o §15 ("A voz refaz só esse parágrafo (menos de 500 créditos). Você ouve o trecho novo"). Depois dela vêm a conferência palavra a palavra, o relógio e o plano.

---

## Rodada 1 · o texto narrado e aprovado, `7b965eecdb7c` (28/10/2026, 15:1x)

Fica como foi gravada, para registro. Só os títulos desceram um nível. A nota dela e o veredito estão no fim desta parte.

Cobertura da rodada 1: 16 de 16 — as 11 afirmações checáveis do parágrafo 15 como foi narrado (as 10 linhas de `fatos-tabela.json` do §15, de F132 a F141, mais H1, achada na leitura à mão), as 3 trocas propostas pela Sala (T1 a T3) e as 2 notas de tela do `roteiro-editor.md` que dependem da frase (N1 e N2).

- **Data-base:** 28/10/2026, 15:1x (Brasília).
- **Pedido:** a Sala de controle, 28/10/2026, 15:0x, a partir do achado da pesquisa de imagens
  (`out/atlantico-fundo/_tmp/pesquisa-imagens/relato.md`, "O que achei e muda o plano", item 1; `out/atlantico-fundo/_pesquisa/pauta-imagens.md`, linhas 31, 64 e 77).
- **Escopo:** só o parágrafo 15 do texto aprovado e narrado. Ele está na linha 50 de `roteiros/atlantico-fundo/roteiro-narrador.md` e na linha 35 da cópia para a voz, `out/atlantico-fundo/roteiro.md`, onde também é o 15º parágrafo.
  **O resto do roteiro NÃO FOI CHECADO nesta tarefa.** O laudo dele é `roteiros/atlantico-fundo/qc-roteiro/fatos.laudo.md` (PASS, 285 de 285), e este não o reabre nem o confirma.
- **Como a lista foi derivada:** as 10 linhas de `fatos-tabela.json` do parágrafo 15 e a leitura integral do parágrafo, feita à mão, que acrescentou uma afirmação sem linha própria na tabela (H1, "a NOAA robot"). As trocas e as notas de tela vêm do pedido.
- **Fontes:** as três têm cópia local, e li inteiros os trechos do mergulho 9 nelas. Nenhum pedido à rede.
  - S32, o resumo oficial do mergulho: `midia/atlantico-fundo/fontes/fa-noaa-ir-21287-ex1502l3-dive09.txt`, texto do PDF https://repository.library.noaa.gov/view/noaa/21287/noaa_21287_DS1.pdf (sha256 bbb17a4e…).
  - S33, o relatório da expedição: `midia/atlantico-fundo/fontes/fa-noaa-ir-10424-ex1502l3-relatorio.txt`, texto do PDF https://repository.library.noaa.gov/view/noaa/10424/noaa_10424_DS1.pdf (sha256 8ff3cf36…).
  - S35, a página dos mergulhos na NCEI: `midia/atlantico-fundo/fontes/fa-ncei-waf-ex1502l3.txt`, cópia de https://www.ncei.noaa.gov/waf/okeanos-rov-cruises/ex1502l3/.
  - Nas citações, "linha" é a linha da cópia em texto, e "p." é a página do PDF, marcada na própria cópia (`=== p. N ===`).
- **O que serviu só de apoio, e não sustenta veredito nenhum:**
  - as folhas do trailer do mergulho 9, `out/atlantico-fundo/_tmp/pesquisa-imagens/video-1.jpg` e `video-2.jpg`;
  - a grade GEBCO 2026 que está no disco, `out/atlantico-fundo/_tmp/pesquisa-geo/baixado/gebco-cesta-1/x/gebco_2026_n26.0_s14.0_w-75.0_e-58.0_ascii.asc`;
  - as contas, que refiz nesta tarefa (Vincenty inverso no WGS84; 1 ft = 0,3048 m; 1 mi = 1.609,344 m). Dão o mesmo resultado que a V24 e a V25 de `fatos-medidas.txt`.

Nota da rodada 1: 6/10 — vale só para o parágrafo 15, como foi narrado. Das 11 afirmações, 10 se confirmam. A que cai é a primeira frase do parágrafo, e é sobre ela que se montou a imagem da cena (o "filmed"). Com a troca T3 ou T1, a nota vai a 10/10. Esta nota não se compara com a do laudo do roteiro inteiro (9,6/10), que mede outra coisa.

### A tabela

| id | afirmação | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| F132 | (a) "a NOAA robot filmed the trench's south wall": o robô filmou a parede sul | **REFUTADA** | S33, p. 13–14, linhas 737–739: "successfully reached its rated depth of 6,000 m. However, it was soon noticed that two of the high voltage compensators were leaking, and thus the ROV came back to the surface without exploring the seafloor at this dive location." · S32, p. 1, linhas 74–76: "Bottom Time: N/A" · S32, p. 2, linhas 131–133: "The vehicles successfully reached 6,000m, but shortly thereafter the dive was aborted due to an issue with D2’s high voltage oil compensator. Observations in the water column during descent and ascent included fish, ctenophores, salps, and siphonophores." · S35, linha 375: "Bottom Time: \| n/a". Nas 12 fichas da S35, este é o único mergulho que tem profundidade e não tem tempo de fundo. · S33, p. 80, linhas 4999–5001, as duas legendas das "Representative Photos of the Dive": "ROV control interface as D2 hit 6000 m." e "Using the camera platform to inspect the oil compressor prior to aborting the dive." | https://repository.library.noaa.gov/view/noaa/10424 · https://repository.library.noaa.gov/view/noaa/21287 · https://www.ncei.noaa.gov/waf/okeanos-rov-cruises/ex1502l3/ |
| F133 | (b) "In 2015" | CONFIRMADA | S32, p. 1, linhas 54–56: "In Water at: … 2015-04-26T10:46:07.296000" · S35, linha 371: "Date: \| April 26, 2015" | https://repository.library.noaa.gov/view/noaa/21287 · https://www.ncei.noaa.gov/waf/okeanos-rov-cruises/ex1502l3/ |
| F134 | o robô tinha câmeras HD | CONFIRMADA quanto ao equipamento, **mas não sustenta a F132** | S32, p. 1, linhas 36–38: "HD Camera 1 / HD Camera 2 / ROV HD 2". As câmeras gravaram a descida e a subida na coluna d'água (S32, linhas 132–133). Ter câmera não prova que se filmou a parede | https://repository.library.noaa.gov/view/noaa/21287 |
| F135 | a profundidade máxima foi de 5.999,7 m | CONFIRMADA | S32, p. 1, linhas 78–80: "Max. depth: … 5999.7 m" · S33, p. 20, linha 1293, na tabela dos mergulhos: "5999.7" · S35, linha 373: "Max Depth: \| 5999.7 Meters" | as três acima |
| F136 | (c) "almost 20,000 feet down" | CONFIRMADA | Conta refeita: 5.999,7 m ÷ 0,3048 = 19.684,1 ft, 1,6 % abaixo de 20.000, o que cabe em "almost". O número é a profundidade do robô. O fundo ali fica mais embaixo (ver "A frase 1, parte por parte", abaixo) | medida sobre a S32 |
| F137 | "That's a long way east of its deepest point." | CONFIRMADA | S32, p. 1, linha 60: "19°, 09.053' N ; 065°, 24.430' W". O ponto mais fundo é 19,712°N, 67,311°W (Bongiovanni et al. 2021, como em `fatos-medidas.txt`, linha 3). Conta refeita: 209,4 km, ou 130,09 mi. O mergulho fica a 65,407°W e o ponto a 67,311°W, então o mergulho está a leste | https://repository.library.noaa.gov/view/noaa/21287 |
| F138 | "The robot, Deep Discoverer" | CONFIRMADA | S32, p. 1, linhas 23–24: "ROV: / Deep Discoverer" | https://repository.library.noaa.gov/view/noaa/21287 |
| F139 | "worked from the ship Okeanos Explorer" | CONFIRMADA | S32, p. 1, linha 3: "OKEANOS EXPLORER ROV DIVE SUMMARY" · S33, p. 2, linha 27: "In April 2015, NOAA Ship Okeanos Explorer" | https://repository.library.noaa.gov/view/noaa/21287 · https://repository.library.noaa.gov/view/noaa/10424 |
| F140 | "one of a dozen dives it made on that voyage" | CONFIRMADA | S33, p. 13, linhas 710–711: "ROV Deep Discoverer (D2) completed 12 dives to depths ranging from 300 to 6,000 m." · S33, p. 9, linha 492: "the vehicles conducted 12 dives at depths ranging from 300-6,000" · S35, linha 11: "Twelve remotely operated vehicle (ROV) dives". A S35 tem 12 fichas, datadas de 10/04 a 29/04/2015, e a do mergulho 9 é a de 26/04 | https://repository.library.noaa.gov/view/noaa/10424 · https://www.ncei.noaa.gov/waf/okeanos-rov-cruises/ex1502l3/ |
| F141 | "Soon after, a problem with the robot cut this one short." | CONFIRMADA | S32, p. 2, linhas 131–132: "The vehicles successfully reached 6,000m, but shortly thereafter the dive was aborted due to an issue with D2’s high voltage oil compensator." · S33, p. 18, linhas 1081–1083: "As the ROV descended and reached 6,000 m, the ROV pilots noticed a problem with the mineral oil levels in the high voltage compensator system on D2. The vehicles were recovered early" | https://repository.library.noaa.gov/view/noaa/21287 · https://repository.library.noaa.gov/view/noaa/10424 |
| H1 | "a NOAA robot" (achada na leitura à mão; não tem linha própria na tabela) | CONFIRMADA | S33, p. 10, linhas 547–548: "using NOAA’s custom-built, dual-body, 6,000-meter- rated ROVs Deep Discoverer (D2) and Seirios" | https://repository.library.noaa.gov/view/noaa/10424 |
| T1 | (i) "In 2015, a NOAA robot went almost 20,000 feet down, along the trench's south wall." | CONFIRMADA | "went almost 20,000 feet down" se apoia na F135 e na F136. "along the trench's south wall" é o termo da própria fonte, S32, p. 2, linha 131: "Today we conducted a 6,000 m ROV dive along the southern wall of the Puerto Rico Trench". A posição também sustenta (ver "As três trocas") | https://repository.library.noaa.gov/view/noaa/21287 |
| T2 | (ii) "In 2015, a NOAA robot went down along the trench's south wall, almost 20,000 feet." | CONFIRMADA, com uma ressalva LEVE sobre o que o número mede | Os mesmos apoios da T1. Mas "almost 20,000 feet", solto no fim, logo depois de "along the trench's south wall", pode ser ouvido como uma distância percorrida ao longo da parede. As fontes só sustentam a profundidade, e o robô não percorreu a parede: o tempo de fundo foi "N/A" (S32, linha 76) | https://repository.library.noaa.gov/view/noaa/21287 |
| T3 | (iii) "In 2015, a NOAA robot dove along the trench's south wall, almost 20,000 feet down." | CONFIRMADA. É a mais próxima da letra da fonte | S32, p. 2, linha 131: "Today we conducted a 6,000 m ROV dive along the southern wall of the Puerto Rico Trench". O "dove" é o "dive" da fonte, e o "almost 20,000 feet down" amarra o número à profundidade | https://repository.library.noaa.gov/view/noaa/21287 |
| N1 | o rótulo sobre o vídeo, "SOUTH WALL · ~6,000 M (19,700 FT) · 2015" (`roteiro-editor.md`, linha 253; na linha 625, com "· FAR EAST OF THE DEEPEST POINT ·") | **REFUTADA como legenda deste vídeo**. Os números e o resto do rótulo estão CONFIRMADOS | Sobre um vídeo em que não aparece parede (o robô na água azul, o medidor em 5999, a sala de controle, o convés), "SOUTH WALL" diz que a imagem é a parede. A S33, p. 14, linhas 738–739, diz: "came back to the surface without exploring the seafloor at this dive location". Os números batem: ~6,000 M (5.999,7), 19,700 FT (19.684,1 arredondado à centena), 2015 e FAR EAST OF THE DEEPEST POINT (130 mi) | https://repository.library.noaa.gov/view/noaa/10424 |
| N2 | o alfinete "2015 · NOAA ROBOT · SOUTH WALL" em 19°09′N, 65°24′W (`roteiro-editor.md`, linha 626) | CONFIRMADA | É o nome do lugar no mapa, e não diz que o robô filmou nada. S32, p. 1, linha 5, dá o nome do lugar: "Puerto Rico Trench- South Wall"; a linha 60 dá a posição: "19°, 09.053' N ; 065°, 24.430' W". "NOAA ROBOT" se apoia na H1, e "2015", na F133 | https://repository.library.noaa.gov/view/noaa/21287 |

### A frase 1, parte por parte (o que a Sala perguntou)

- **(a) o robô filmou a parede sul: REFUTADA.**
  - O que a fonte confirma:
    - o nome do lugar ("Puerto Rico Trench- South Wall");
    - a intenção, que é propósito e não resultado: "Investigate the lithology and stratigraphy of the rocks exposed in the south wall" e "To document benthic communities living on and around the southern wall of the trench at a depth of 6,000 m" (S32, linhas 128–129);
    - que as câmeras gravaram.
  - O que a fonte nega é o objeto da frase:
    - o relatório da expedição diz que o robô voltou "without exploring the seafloor at this dive location" (S33, linhas 738–739);
    - o resumo dá "Bottom Time: N/A" (S32, linha 76) e só registra observações "in the water column during descent and ascent" (linhas 132–133);
    - as duas fotos que o próprio relatório escolheu para o mergulho são a tela de controle e a inspeção do compensador (S33, linhas 4999–5001).
  - **Apoio, sem valor de veredito:**
    - num quadro do trailer (t = 58 s, `video-2.jpg`), a tela de controle marca "Depth 5999" e "Altitude 94.2". A unidade da altitude não aparece no quadro; a profundidade está em metros. Se a altitude também estiver em metros, o robô parou uns 94 m acima do fundo;
    - os seis quadros do clipe "ROVHD_6000M" (`video-1.jpg`) mostram só água azul e a estrutura do robô;
    - a GEBCO 2026 dá 6.179 m no ponto onde o robô entrou na água.
    - As três coisas apontam para um fundo, ali, abaixo dos 6.000 m que o robô podia alcançar ("rated depth of 6,000 m", S33, linha 737).
- **(b) 2015: CONFIRMADA** (F133).
- **(c) quase 20.000 pés: CONFIRMADA** (F135 e F136). O número é a profundidade do robô, nunca a do fundo.
- **As outras três frases continuam sustentadas:**
  - "That's a long way east of its deepest point.": F137, 130 mi a leste.
  - A dúzia de mergulhos: F140, pela S33.
  - "Soon after, a problem with the robot cut this one short.": F141.
    - Na frase atual, o "Soon after" deixa entender que o robô filmou a parede e só depois o problema cortou o mergulho, o que é falso.
    - Com qualquer uma das trocas, a ordem fica a da fonte: chegou a ~6.000 m e, "shortly thereafter", o mergulho foi abortado.

### As três trocas

- **"along the trench's south wall" se sustenta, pelo resumo e pela posição.**
  - **O resumo.** O termo é da própria NOAA:
    - "a 6,000 m ROV dive along the southern wall of the Puerto Rico Trench" (S32, linha 131);
    - o lugar se chama "Puerto Rico Trench- South Wall" (S32, linha 5);
    - o relatório diz que o navio "headed to the south wall of the Puerto Rico Trench" (S33, p. 13, linha 724).
  - **A posição.** O mergulho entrou na água a 19°09,053′N, 65°24,430′W e saiu a 19°08,418′N, 65°24,493′W (S32, linhas 60 e 68). No perfil norte–sul da GEBCO 2026 nessa longitude (65,406°W), o fundo vai assim:

    | onde | profundidade |
    |---|---|
    | 18,50°N, a plataforma de Porto Rico e das Ilhas Virgens | −213 m |
    | 19,06°N | −3.999 m |
    | 19,13°N | −5.027 m |
    | o ponto de entrada | −6.179 m |
    | 19,20°N | −7.441 m |
    | o eixo da fossa nessa longitude, 19,94°N | −8.322 m |

    O ponto cai na encosta voltada para o norte, do lado sul da fossa. Entre o ponto e o eixo há ainda uma depressão de ~7.400 m (19,2–19,3°N) e uma elevação de ~5.200 m (19,46°N). O nome "south wall" é da NOAA, e a GEBCO não o contradiz.
  - O "along" não diz que o robô tocou a parede nem que a viu. É a palavra da fonte para um mergulho feito ao lado da encosta, e o apoio do trailer põe o robô uns 94 m acima dela.
- **(i) T1, CONFIRMADA. (iii) T3, CONFIRMADA. (ii) T2, CONFIRMADA com a ressalva LEVE da tabela.**
  - Pela fonte, a ordem é T3 = T1 > T2. A escolha entre elas é de estilo, e não é deste laudo.
  - O que a fonte não sustenta, em nenhuma delas: dizer, ou deixar ver, que o robô filmou, viu ou chegou à parede ou ao fundo.
  - O que a fonte sustenta, se a Sala quiser dizer mais: "came back to the surface without exploring the seafloor" (S33, linhas 738–739). Isto não é recomendação de reescrita.
- **"That's a long way east of its deepest point." continua certo depois das três: CONFIRMADA** (F137).
  - O "That" é o lugar do mergulho, a 130 mi a leste do ponto mais fundo, e o "its" é a fossa.
  - Uma observação que não pede conserto: a parede sul, inteira, corre o comprimento da fossa, e a frase só é verdadeira do lugar do mergulho. É isso que ela quer dizer, nas três trocas como no original.

### As notas de tela do `roteiro-editor.md`

- **N1, o rótulo sobre o vídeo (linhas 253 e 625): muda.**
  - Os números ficam: ~6.000 M, 19,700 FT, 2015 e FAR EAST OF THE DEEPEST POINT.
  - O que não pode ficar é "SOUTH WALL" sozinho, como legenda de uma imagem em que a parede não aparece.
  - Duas formas que as fontes sustentam por inteiro (a escolha é do `redator-de-tela`):
    - "SOUTH WALL DIVE · ~19,700 FT (6,000 M) · FAR EAST OF THE DEEPEST POINT · 2015". É o nome do mergulho, pela S32, linha 5;
    - "OPEN WATER · ~19,700 FT (6,000 M) · SOUTH WALL DIVE · 2015". "Observations in the water column", pela S32, linha 132.
  - A ordem, pés ou metros primeiro, não é fato: segue a identidade §7, como o `espelho.json` já fez.
- **A descrição da imagem na linha 623 é falsa e tem de mudar.** O trecho "o vídeo da NOAA, EX1502 Leg 3 Dive 09, a parede sul escura e o ROV descendo" vira "o ROV descendo na água aberta, a ~6.000 m (o medidor em 5999), sem a parede no quadro". É o que o trailer mostra, e o que a S32, linhas 132–133, registra.
- **N2, o alfinete "2015 · NOAA ROBOT · SOUTH WALL" (linha 626): fica.** Marca o lugar do mergulho com o nome que a NOAA dá ao lugar, na posição certa. Querendo deixar explícito que é o lugar do mergulho, "2015 · NOAA ROBOT DIVE · SOUTH WALL" também se sustenta, mas não é necessário.

### Achados acionáveis

1. **[GRAVE] §15, frase 1: "filmed the trench's south wall" está REFUTADA.**
   - **CONSERTO**, a T3: "In 2015, a NOAA robot dove along the trench's south wall, almost 20,000 feet down." A T1 também serve. O resto do parágrafo fica como está.
   - **O custo:** a frase está na voz.
     - Refazer o parágrafo 15 na ElevenLabs gasta crédito, refaz o master e desloca o relógio do §15 em diante, inclusive a palavra 1084 ("south wall,", fim em 370,58 s) que o `espelho.json` usa para a reserva da inscrição (linha 6759).
     - É decisão e gasto do Lucas (roupa §6). O verificador não roda `narrar.mjs`.
     - Nenhum conserto de tela corrige a voz.
   - **RAIZ: INSTRUÇÃO.**
     - A linha F132 da tabela testou uma afirmação mais fraca que a frase: "O ROV da NOAA mergulhou na parede sul". A frase diz "filmed".
     - E a F132 citou a "Description of the Dive" sem o "Bottom Time: N/A" e o "Observations in the water column" do mesmo documento.
     - O F68 do fundamento já trazia "filmou a parede sul", sem fonte para o verbo.
2. **[GRAVE] N1, o rótulo "SOUTH WALL · …" sobre o vídeo.**
   - **CONSERTO:** "SOUTH WALL DIVE · ~19,700 FT (6,000 M) · FAR EAST OF THE DEEPEST POINT · 2015".
   - Hoje o conserto é barato: a cena ainda não foi desenhada.
   - **RAIZ: PONTUAL**, porque vem do F68.
   - O mesmo texto está em:
     - `out/atlantico-fundo/espelho.json`, linhas 3801 e 3881;
     - `out/atlantico-fundo/_dados/s47.json`, linha 30;
     - `out/atlantico-fundo/_pesquisa/pauta-dados.json`, linha 859.
3. **[MÉDIO] A cena s47 foi pensada sobre uma imagem que não existe.**
   - Onde:
     - `roteiro-editor.md`, linha 623 ("a parede sul escura");
     - `espelho.json`, linha 3760 (a tese, com a semente "a luz na parede");
     - `espelho.json`, linha 3762 (o beat 2, "o vídeo da parede escura");
     - `espelho.json`, linha 6759 ("a parede no vídeo da NOAA").
   - **CONSERTO:** descrever a imagem como "o ROV na água aberta a ~6.000 m, o medidor em 5999". O que a cena faz com isso é da direção.
   - **RAIZ: PONTUAL.**
4. **[MÉDIO] O F68 do fundamento afirma o que a fonte nega.**
   - Onde: `pautas/atlantico-fundo/fundamento.md`, linhas 291–292, e `fundamento.json`, linhas 1971–1972 ("filmou a parede sul da fossa a 5.999,7 m"; "Como dizer: … filmed the trench's south wall").
   - Também: o resumo do §5 no `roteiro-editor.md`, linha 146 ("A parede sul filmada em 2015"), e as linhas F132 e F134 de `fatos-tabela.json`.
   - **CONSERTO**, no texto do fato: "Em 26/04/2015, o ROV Deep Discoverer, da NOAA (…), mergulhou ao longo da parede sul da fossa até 5.999,7 m e voltou sem explorar o fundo (S33: 'without exploring the seafloor at this dive location'; S32: 'Bottom Time: N/A')".
   - **RAIZ: PONTUAL.**
5. **[LEVE] A `nota` do alfinete, em `out/atlantico-fundo/_media/geo/mergulho-ex1502-dive09.json`, diz "a parede sul a 5.999,7 m".**
   - A nota não vai à tela, mas lê como se a parede estivesse a 5.999,7 m. Quem estava a 5.999,7 m era o robô.
   - **CONSERTO:** "o mergulho na parede sul; o robô a 5.999,7 m, sem chegar ao fundo".
   - **RAIZ: PONTUAL.**
6. **[LEVE] Se a escolha for a T2**, o "almost 20,000 feet" do fim pode ser ouvido como distância ao longo da parede.
   - **CONSERTO:** preferir a T3 ou a T1, que amarram o número a "down".
   - **RAIZ: PONTUAL.**

Nada foi editado: este laudo é o único arquivo que gravei. Quem conserta é a Sala ou a peça dona de cada arquivo.

### A lista de nomes

**NADA A CHECAR.** Olhei o parágrafo inteiro, e ele não atribui nada a anônimo: nenhum "scientists say" nem "researchers". Se o texto um dia quiser alguém com nome para este mergulho, a S32 (p. 1, linhas 6–11) dá:
- Brian Bingham, chefe da operação do ROV ("ROV Lead");
- Brian Kennedy, coordenador da expedição ("Expedition Coordinator");
- Andrea Quattrini (USGS) e Mike Cheadle (University of Wyoming), chefes da equipe científica ("Science Team Leads").

Os e-mails do documento não entram aqui.

### Os 2 padrões

1. **Na tabela, a afirmação testada era mais fraca que o verbo da frase.**
   - A F132 conferiu "mergulhou na parede sul", e a frase diz "filmed".
   - O verbo de ação (filmar, ver, tocar, chegar) é a afirmação, e ele passou sem checagem.
   - A F134 tomou o equipamento (as câmeras HD) como prova do ato.
2. **A frase-resumo foi lida sem os campos de dado do mesmo documento.**
   - Citou-se "a 6,000 m ROV dive along the southern wall".
   - Ficaram de fora o "Bottom Time: N/A", 55 linhas acima, e o "Observations in the water column", na frase seguinte.
   - O propósito do mergulho ("Investigate…", "To document…") é intenção, não resultado.

### Os voláteis

**NADA A CHECAR.** O parágrafo fala de 2015, e nada nele cresce nem zera.

### DECISÃO DO LUCAS PENDENTE que toca esta checagem

- **Refazer o parágrafo 15 na ElevenLabs:** o crédito, o master, o relógio e as cenas seguintes (roupa §6; CLAUDE.md, o teto de 15.000 créditos por vídeo).
- **Fora desta lente:** pedir o HD do mergulho 9 à NCEI é decisão da Sala (relato da pesquisa de imagens, item 2) e não muda nenhum veredito daqui.

O veredito da rodada 1, sobre o texto narrado (`7b965eecdb7c`), foi **FAIL**: 1 afirmação REFUTADA (F132, "filmed the trench's south wall"). As outras 10 afirmações e as três trocas saíram confirmadas.

## O veredito desta reverificação (rodada 2, sobre `ddd4567309e3`)

- **O texto falado do §15:** zero REFUTADA e zero DIVERGE. A frase nova (E1) está CONFIRMADA, e F133 a F141 e H1 continuam confirmadas no contexto novo. O laudo do roteiro inteiro, `fatos.laudo.md`, julga a mesma revisão por diff e dá PASS.
- **A tela:** resta um item periférico, com o conserto de uma frase pronto. É o R2-1: sobre a foto do lançamento, que é de outro mergulho, o rótulo "SOUTH WALL DIVE · …" diverge da origem da foto; no mapa, junto ao alfinete, está certo.
- **Fora desta lente, a fazer:** o `espelho.json` (R2-2), a nota do alfinete (achado 5) e a narração do §15, que o Lucas já aprovou.

VEREDITO: RESSALVA
