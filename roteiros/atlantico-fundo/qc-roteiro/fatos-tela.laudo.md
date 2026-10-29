# Laudo · verificador de fatos · texto de tela · atlantico-fundo (vídeo 4) · 29/10/2026

Setor Texto e fatos, tarefa `atlantico-fundo-texto-1`, passo `screen_text`, data-base 29/10/2026.

**O que foi julgado:** toda afirmação do `out/atlantico-fundo/textos-tela.json`, por cobertura, em dois lotes de `verificador-de-fatos`.
O arquivo final é **`b034414f3a020cc7421edd5be934f12b5487c9f77874edd7413b3a0e4706cd75`**, com 409 textos. A conferência entrou em todo
`_textos_por_cena`, nos `rotulos_dado`, nos `cards_pessoa`, nos `_avisos_do_ano`, no glossário, nas seções gerais e nas proporções e escalas
desenhadas.

**Os lotes:**
- **lote A** (s01–s37): 1ª rodada sobre `418ad23e…`, reconferência 1 sobre `4a0566b6…`;
- **lote B** (s38–s75 e as seções gerais): 1ª rodada sobre `418ad23e…`, reconferência 1 sobre `4a0566b6…` e reconferência 2 sobre `b034414f…`.

**O que mudou entre as rodadas:**
- **Os consertos** são três, todos do `redator-de-tela`, registrados em `_consertos`:
  - o conserto 1 aplicou os achados dos dois laudos: `418ad23e` → `4a0566b6`;
  - o conserto 2 trouxe as linhas de fonte da regra 11, a escala da s75 e a fonte da s45: `4a0566b6` → `c511cd7a`;
  - o conserto 3 deu 2,1 s no ar ao crédito da s51, pelo piso de 2,0 s, num achado do setor: `c511cd7a` → `b034414f`.
- **O diff de cada conserto** o setor conferiu à parte, texto a texto. O contrato `textos-tela` sai 0 em todas as versões.
- **O lote B entre o conserto 3 e a reconferência 2:** o conserto 3 só mudou o t0 do crédito da s51. A reconferência 2 já foi feita sobre o
  `b034414f`.

**As entradas do texto:**
- a regência `304ad420…`, o espelho `ad3b18e9…` e o conceito `beff3d33…`, do commit `922718a` (a direcao-3, 04:35, sem tempo de beat mudado);
- o `conferencia-midia.json` `a9565fb8…` (lote 7);
- o laudo-delta da pesquisa, `fatos-pesquisa-2026-10-29.laudo.md` (`f7808381…`).

## A soma (o setor, dos dois lotes, na última rodada de cada um)

| lote | cobertura | DIVERGE aberto | NÃO ACHEI | REFUTADA | nota | veredito |
|---|---|---|---|---|---|---|
| A (s01–s37) | 260 de 260 | 0 | 1 (TA092, a vírgula de 1939; só a imagem decide) | 0 | 9,3 | PASS |
| B (s38–s75, gerais) | 448 de 448 | 0 | 0 | 0 | 9,8 | PASS |
| **total** | **708 de 708** | **0** | **1** | **0** | | **PASS** |

- **Divergência da voz:** nenhuma refutada. O plural "the newspapers" (s21, s56) fica NÃO ACHEI no laudo-delta (PA036). A tela não o usa, e
  regravar seria decisão do Lucas.
- **Cada lote vai abaixo como o verificador o gravou,** copiado sem mudar uma letra. As reconferências ficam no fim de cada lote.
  - **A:** `%TEMP%/claude/vf-atl-A/laudo-tela.md`, sha256 `f7b61255a0e84dacf6b184c7144f05a15599c3471c3c8e847017741e1f118f6b`. Os primeiros 89576 bytes são a 1ª rodada, `23550f78…`.
  - **B:** `%TEMP%/claude/vf-atl-B/laudo-tela.md`, sha256 `557a2685f0cf4d264cba554227660cc21026fc12318d770e049e6c34a03988b3`. Os primeiros 98104 bytes são a 1ª rodada, `1b06a6ea…`, e os primeiros
    117527 vão até a reconferência 1, `38cc322d…`.

---

# Lote A (s01–s37), como o verificador gravou

COBERTURA: 260 de 260 (a lista derivada à mão, por script, sem escolha: abaixo, "Como a lista foi derivada")

# Laudo de tela · verificador de fatos · atlantico-fundo (vídeo 4) · lote A (s01–s37) · 29/10/2026

Setor Texto e fatos, tarefa `atlantico-fundo-texto-1`, passo `screen_text`. Data-base: 29/10/2026, das 04:50 às 05:30, hora de Brasília.

**O objeto:** `out/atlantico-fundo/textos-tela.json`, sha256 `418ad23e10523cadbeb1f1294853d20b411ac37f6679e455806859e816da3e8e`, nas cenas-mãe s01 a s37.

**As entradas**, com o sha256 conferido no disco hoje:
- a regência `304ad420…`, o espelho `ad3b18e9…` e o conceito `beff3d33…` (commit `922718a`, direcao-3);
- o `conferencia-midia.json` `a9565fb8…`;
- o laudo-delta `roteiros/atlantico-fundo/qc-roteiro/fatos-pesquisa-2026-10-29.laudo.md` `f7808381…`, de onde vêm os PA… e os PB…;
- o laudo do roteiro `fatos.laudo.md`, de onde vêm os F… (na tabela, "LR F…");
- a grafia da voz: `roteiros/atlantico-fundo/roteiro-narrador.md`, `ca4ac18d…`.

## Como a lista foi derivada (o denominador)

O canal não tem extrator para o `textos-tela.json`. A lista foi derivada à mão, por script, e entra inteira, sem escolha:

| ids | o quê | n |
|---|---|---|
| TA001–TA164 | as entradas de `_textos_por_cena` com cena-mãe de s01 a s37, na ordem do arquivo. TA001 é a 1ª entrada do lote, e as filhas fundidas vão na mãe (s30←s31) | 164 |
| TA165–TA189 | as entradas de `rotulos_dado` com cena de s01 a s37 (os índices 0 a 24) | 25 |
| TA190–TA191 | os `cards_pessoa` do lote (s14 e s17) | 2 |
| TA192–TA197 | as entradas de `_avisos_do_ano` do lote (s12 duas vezes, s14, s17 duas vezes, s19). O sha256 de cada arquivo foi conferido no disco | 6 |
| TA198–TA242 | as entradas do `glossario` com tela de s01 a s37, ou com "todo mapa", "todas" ou "várias" | 45 |
| TA243–TA260 | as escalas, proporções e posições desenhadas que a regência e o conceito pedem nessas cenas, cada uma contra o número da fonte | 18 |
| **M** | | **260** |

**O limite da lista:** o script pega o que tem forma: as entradas e os campos do arquivo. O que só se vê lendo (onde um desenho põe uma coisa, de que tamanho) eu acrescentei como TA243–TA260, depois de ler inteiras a regência e o conceito de s01 a s37. A arte final ainda não existe: o que se conferiu é a instrução que a arte vai seguir, não o desenho.

**O que não se refez:** o que o laudo-delta ou o laudo do roteiro já tinha confirmado, na mesma forma de tela, entra como CONFIRMADA, com o id. O que mudou de forma (conversão, sigla, arredondamento, "≈", "~", "+") foi refeito, e a conta está na linha.

**A rede:** uma leitura só, hoje: a página do jornal de 1939 no acervo (historicnewspapers.sc.edu/lccn/sn93067784/1939-07-28/ed-1/seq-3/), para saber o número da página. Nenhum site recusou. Nenhuma imagem foi aberta.

## Legenda das fontes

As cópias ficam em `midia/atlantico-fundo/fontes/`, e "l." é a linha da cópia.

| sigla | arquivo | URL |
|---|---|---|
| BON | `02-bongiovanni-2021-gdj3.122.txt` | doi.org/10.1002/gdj3.122 |
| SJ | `01-04-stewart-jamieson-2019-earscirev.txt` | Earth-Science Reviews 197 (2019) 102896 |
| JAM | `fa-nora-528113-dsr1-2020.txt` | nora.nerc.ac.uk/id/eprint/528113/ |
| CGS | `04-uscgs-relatorio-1883-CSC-0082.txt` | o Report of the Superintendent… 1883 |
| IHR | `04-ihr-1936-naming-nares-puerto-rico-deeps.txt` | journals.lib.unb.ca/index.php/ihr/article/view/27837 |
| SUN | `fb-thesun-1939-07-28-p3-ocr.txt` | historicnewspapers.sc.edu/lccn/sn93067784/1939-07-28/ed-1/seq-3/ |
| NOAA | `fb-noaa-oer-deepest-fish.txt` | oceanexplorer.noaa.gov/ocean-fact/what-is-the-deepest-living-fish/ |
| AM | `fb-australian-museum-deepest-fish.txt` | australian.museum/learn/animals/fishes/what-is-the-deepest-living-fish/ |
| USGS18 | `fb-usgs-seafloor-map.txt` | usgs.gov/centers/whcmsc/science/caribbean-tsunami-and-earthquake-hazards-studies-seafloor-map |
| OFR | `fa-usgs-ofr2006-1210-introduction.txt` | pubs.usgs.gov/of/2006/1210/html/introduction.html |
| CM | `out/atlantico-fundo/_pesquisa/conferencia-midia.json` (`a9565fb8…`) | — |
| REG, CON | `out/atlantico-fundo/regencia.json` e `conceito-visual.json` | — |
| ID7 | `marca/identidade.md` §7 | — |
| PA…, PB… | o laudo-delta | — |
| LR F… | `roteiros/atlantico-fundo/qc-roteiro/fatos.laudo.md` | — |

## A nota

NOTA: 8,4/10. O texto de tela é fiel em quase tudo, e os 7 DIVERGE e os 6 NÃO ACHEI do laudo-delta estão atendidos no texto. Sobram:
- um crédito que dá ao USGS a taxa das placas (s35);
- uma posição das placas invertida na regência (s35);
- dois NÃO ACHEI de desenho que o texto atende, mas a regência e o conceito ainda pedem (s05, s06, s26, s30);
- o número da página e uma vírgula da folha de 1939;
- acertos pequenos de forma e de citação.

## Os números

| veredito | n | ids |
|---|---|---|
| CONFIRMADA | 247 | o resto da lista |
| DIVERGE | 3 | TA153 (o crédito da s35), TA186 (a fonte declarada da mesma taxa), TA255 (a posição das placas na regência) |
| NÃO ACHEI | 5 | TA090 ("P. 3"), TA092 (a vírgula), TA174 (a data "1873" no contrato), TA253 (PA006 no desenho), TA254 (PA007 no desenho) |
| REFUTADA | 0 | — |
| NADA A CHECAR | 5 | TA039 (a pergunta do gancho), TA041 (o molde do crédito da caça), TA043, TA044 e TA097 (as entradas "nada") |
| sem veredito | 0 | — |

**Nenhuma afirmação de tese diverge.** As 3 DIVERGE são periféricas (dois créditos e uma instrução de desenho), e cada uma tem conserto de uma frase. As afirmações que sustentam a tese estão na série do medidor (27,487, 28,675, 1,188, 27,366, 23,250, 28,680, ~27,300 e ~27,460), e todas conferem.

**Divergência da voz:** nenhuma que contradiga. As formas que diferem de propósito estão em "Para a Sala". Nada a regravar.

## A tabela (uma linha por item da lista)

| id | cena | papel | texto | veredito | fonte e trecho literal | conserto |
|---|---|---|---|---|---|---|
| TA001 | s01 · 2.0–3.5 s | rotulo | "PUERTO RICO" | CONFIRMADA (PA001) | CM s01: lugar_na_origem "Puerto Rico (Caribbean)", aviso_de_ano false; a voz: "About 83 miles off Puerto Rico" | — |
| TA002 | s02 · 0–5.033 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s02: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA003 | s02 · 0–5.033 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA004 | s02 · 1.733–5.033 s | cota | "≈ 83 MI · AGUADILLA" | CONFIRMADA (F005) | LR F005: "134,3 km = 83,47 mi (Census, em Aguadilla)"; a voz (s50): "about 83 miles from the nearest coast of Puerto Rico, off Aguadilla" | — |
| TA005 | s02 · 2.8–5.033 s | cota | "27,487 FT" | CONFIRMADA (F006, F007) | BON: "The deepest point was identified as 8,378 ± 5 m uncertainty"; 8,378 m = 27,486.9 ft | — |
| TA006 | s02 · 3.467–5.033 s | cota | "MORE THAN 5 MI" | CONFIRMADA (F007) | 8,378 m = 5.206 mi; a voz: "It's more than five miles down." | — |
| TA007 | s02 · 2.8–5.033 s | credito | "Source: Bongiovanni et al., 2021" | CONFIRMADA (PA002) | BON l. 1–19: "Cassandra Bongiovanni \| Heather A. Stewart \| Alan J. Jamieson"; "Accepted: 7 April 2021" | a nota cita "PA004"; o id certo é PA002 (achado A10) |
| TA008 | s03 · 0.467–5.834 s | rotulo | "Mount Everest" | CONFIRMADA (F008) | LR F008 (AP, 08/12/2020): "8,848.86 meters (29,031.7 feet)"; a voz: "Stand Mount Everest on the bottom" | — |
| TA009 | s03 · 2.4–5.834 s | cota | "≈ 1,500 FT" | CONFIRMADA (F009) | 8,848.86 − 8,378 = 470.86 m = 1,544.8 ft; a voz: "its top 1,500 feet would stick out of the water" | — |
| TA010 | s03 · 0.467–5.834 s | credito | "Sources: China & Nepal survey, 2020; Bongiovanni et al., 2021" | CONFIRMADA (PA004) | "China and Nepal jointly announced a new official height for Mount Everest"; BON (PA002) | — |
| TA011 | s04 · 0–7.533 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA, com condição | REG s04: "WORLD VIEW in Mercator on gebco-mundo-relevo"; a P0 do fim volta à costa com satélite. A nota já diz "só se houver tile dela no quadro" | pôr a condição no campo `_condicao` (achado A15) |
| TA012 | s04 · 0–7.533 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA013 | s04 · 2.5–5.933 s | rotulo | "Mariana Trench" | CONFIRMADA (F010, F011) | NOAA (LR F011): "beneath the western Pacific Ocean in the southern end of the Mariana Trench"; a voz diz só "Mariana" | — |
| TA014 | s04 · 4.133–7.533 s | rotulo | "PACIFIC" | CONFIRMADA (F011) | idem; a voz: "But that's the Pacific" | — |
| TA015 | s04 · 5.266–7.533 s | cota | "≈ 9,500 MI" | CONFIRMADA (F013) | LR F013: "15,269.6 km = 9,488.06 mi, about 9,500 miles" (Vincenty, do anel ao Challenger Deep) | — |
| TA016 | s05 · 0–5.733 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s05: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela; o crédito sai em 5,733 s, quando o mapa vira corte | — |
| TA017 | s05 · 0–5.733 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA018 | s05 · 0.133–3.667 s | cota | "1964" | CONFIRMADA (F014) | JAM l. 3: "Revisiting the 1964 Archimède bathyscaphe dive to 7300 m in the Puerto Rico trench" | — |
| TA019 | s05 · 4.533–8.033 s | rotulo | "Puerto Rico Trench" | CONFIRMADA (F014) | idem; a voz: "descended into the Puerto Rico Trench" | — |
| TA020 | s05 · 5.967–8.033 s | cota | "1964 · REPORTED" | CONFIRMADA (PA005, F069) | JAM l. 7: "was reported in 1965 from depths of 7300 m"; o mergulho é de 1964. É a forma mais segura do laudo-delta (s05) | — |
| TA021 | s05 · 5.733–8.033 s | credito | "Source: Jamieson et al., 2020" | CONFIRMADA (F014) | JAM l. 3: "Jamieson, Alan J.; Linley, Thomas D.; … 2020 Revisiting the 1964 Archimède bathyscaphe dive" | — |
| TA022 | s06 · 0.167–6.334 s | cota | "2019" | CONFIRMADA (F017) | JAM l. 7: "In 2019 the submersible DSV Limiting Factor revisited the exact same site" | — |
| TA023 | s06 · 4.334–6.334 s | heroi | "NONE OF THOSE FISH" | CONFIRMADA (F018) | JAM l. 7: "No snailfish were observed."; a voz: "It saw none of those fish." | — |
| TA024 | s06 · 0–6.334 s | credito | "Source: Jamieson et al., 2020" | CONFIRMADA (F017) | idem | — |
| TA025 | s07 · 0–5.366 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s07: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA026 | s07 · 0–5.366 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA027 | s07 · 0.166–5.366 s | eixo | "0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT" | CONFIRMADA | aritmética interna (TA243): a régua vai de 0 a 30,000 ft, de 5,000 em 5,000, e cobre todos os marcadores do lote (23,250 a 28,680 ft). O DANFS (30,246 ft, F051) fica acima dela, e a s20 o mostra como faixa | — |
| TA028 | s07 · 3.733–5.366 s | cota | "DEC. 2018" | CONFIRMADA (F020) | LR F020: "DALLAS, TX (December 21, 2018) – In a historic feat, explorer Victor Vescovo became…" (o mergulho de 19/12/2018); a voz: "only in December 2018" | — |
| TA029 | s08 · 2.334–3.934 s | grifo_na_pagina | "Milwaukee Deep (Puerto Rico Trench) 19.58333° N 66.5° W 8740 GEBCO Gazetteer" | CONFIRMADA, letra a letra | SJ l. 338–342 (Tabela 1): "Milwaukee Deep (Puerto Rico Trench) / 19.58333° N / 66.5° W / 8740 / GEBCO Gazetteer" | — |
| TA030 | s08 · 1.934–3.934 s | legenda | "GEBCO Gazetteer: the official list of undersea feature names" | CONFIRMADA (PA011, F022) | SJ l. 496: "Note 'GEBCO Gazetteer' refers to the IHO-IOC GEBCO Gazetteer of Undersea Feature Names."; a voz diz "the official list of undersea features" (compatível) | — |
| TA031 | s08 · 0–3.934 s | credito | "Stewart & Jamieson / Earth-Science Reviews, 2019 · CC BY 4.0" | CONFIRMADA | CM s08: credito_na_tela "Stewart & Jamieson / Earth-Science Reviews, 2019 · CC BY 4.0"; SJ l. 95–96: "open access article under the CC BY license (http://creativecommons.org/licenses/BY/4.0/)" | — |
| TA032 | s09 · 0–5.866 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s09: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA033 | s09 · 0–5.866 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA034 | s09 · 0–5.866 s | eixo | "0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT" | CONFIRMADA | aritmética interna (TA243): a régua vai de 0 a 30,000 ft, de 5,000 em 5,000, e cobre todos os marcadores do lote (23,250 a 28,680 ft). O DANFS (30,246 ft, F051) fica acima dela, e a s20 o mostra como faixa | — |
| TA035 | s09 · 0.633–5.866 s | cota | "28,675 FT · THE LIST" | CONFIRMADA (PA010, F022) | SJ Tabela 1: "8740 \| GEBCO Gazetteer"; 8,740 m = 28,674.5 ft. A voz não diz o número aqui; na s56 diz "about 28,700 feet" (compatível) | — |
| TA036 | s09 · 1.2–5.866 s | cota | "27,487 FT" | CONFIRMADA (F007) | BON: 8,378 m = 27,486.9 ft; o mesmo da s02 | — |
| TA037 | s09 · 1.666–5.866 s | cota | "MORE THAN 1,000 FT" | CONFIRMADA (F026) | 28,675 − 27,487 = 1,188 ft (pelo número do próprio estudo, 1,089 ft): "more than 1,000" nas duas; a voz: "more than one thousand feet too deep" | — |
| TA038 | s09 · 1.2–5.866 s | credito | "Sources: Stewart & Jamieson, 2019; Bongiovanni et al., 2021" | CONFIRMADA (F021, PA002) | SJ: "Earth-Science Reviews 197 (2019) 102896"; BON | — |
| TA039 | s10 · 0–4.0 s | pergunta | "What is really down there, and how did anyone find out?" | NADA A CHECAR | é pergunta, sem fato; a grafia é a da voz ("So what is really down there, and how did anyone find out?"), sem o "So" | — |
| TA040 | s10 · 0.4–4.0 s | rotulo (caminho caca) | "Aguadilla, Puerto Rico" | CONFIRMADA (PA012), só o texto | Aguadilla é município de Porto Rico (Census, GEOID 72005; LR F005). Se vale sobre o clipe, só o veredito do clipe dirá: a `_condicao` está escrita | — |
| TA041 | s10 · 0.4–4.0 s | credito (caminho caca) | "<artista>/Shutterstock.com" | NADA A CHECAR | é molde, não texto de tela. A `_condicao` diz "só se o clipe da caça vier do Shutterstock" (ID7: banco pago vai sem crédito, exceto o Shutterstock) | à Sala: o molde sai e entra o credito_na_tela do veredito do clipe |
| TA042 | s10 · 0.4–4.0 s | rotulo (caminho sem_caca) | "San Juan, Puerto Rico" | CONFIRMADA (PA059, PB143) | NASA EO: "the bottom image provides a detailed view of the San Juan metropolitan area"; CM s10 (lote 7): lugar_na_origem "San Juan metropolitan area", e a condicao "uso só se a caça s10-a não trouxer o aéreo de Aguadilla" | — |
| TA043 | s11 · 0–5.0 s | nada (caminho caca) | (vazio) | NADA A CHECAR | a vinheta, no caminho caca: nenhum texto | — |
| TA044 | s11 · 0–5.0 s | nada (caminho sem_caca) | (vazio) | NADA A CHECAR | a vinheta, no caminho sem_caca: nenhum texto | — |
| TA045 | s11 · 0–5.0 s | credito (caminho sem_caca) | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s11: o mapa de reserva; ID7 e §6 | — |
| TA046 | s11 · 0–5.0 s | credito (caminho sem_caca) | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA047 | s12 · 0–7.034 s | aviso_ano | "Photo from 1880 or earlier" | CONFIRMADA (PA013 atendido) | CM s12 (as duas pranchas): data_na_origem "ca. 1870 – in or before 1880", aviso_de_ano true | — |
| TA048 | s12 · 0.267–7.034 s | cota | "JAN. 27, 1883" | CONFIRMADA (F027) | LR F027: "taken on 27th January 1883 by the U. S. Coast and Geodetic Survey"; a voz: "On January 27, 1883" | — |
| TA049 | s12 · 3.867–7.034 s | rotulo | "Blake" | CONFIRMADA (PA014, F028) | CGS: "the hydrographic party on board of the steamer Blake"; a prancha 1: "The United States coast survey steamer 'G. S. Blake,' 350 tons" | — |
| TA050 | s12 · 4.834–7.034 s | legenda | "U.S. Coast and Geodetic Survey" | CONFIRMADA (F027, PA058) | CGS, a folha de rosto: "U. S. COAST AND GEODETIC SURVEY"; a voz: "from the U.S. Coast and Geodetic Survey" | — |
| TA051 | s13 · 0–3.6 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s13: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA052 | s13 · 0–3.6 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA053 | s13 · 0.833–3.6 s | rotulo | "1883 · BLAKE" | CONFIRMADA (F034) | CGS l. 5826: "19° 40' 50" north, longitude 66° 23' 40" west of Greenwich"; o alfinete (`sondagem-blake-1883.json`) está em [-66.394444, 19.680556] | a nota diz "19°39'50"N": corrigir para 19°40'50"N (achado A9) |
| TA054 | s14 · 0.9–3.1 s | card_nome | "W. H. BROWNSON" | CONFIRMADA (PA016, PA018) | CGS l. 5804–5805: "under command of Lieutenant Commander W. H. Brownson, U. S. N., Assistant Coast Survey" | — |
| TA055 | s14 · 1.033–3.1 s | card_cargo | "Lieutenant-Commander, U.S. Navy · commanding the Blake, 1883" | CONFIRMADA (PA017, PA018) | CGS l. 5809: "Lieutenant-Commander Brownson left Hamilton"; App. 5 (l. 11455): Bartlett "was relieved October 1, 1882, by Lieut. Commander W. H. Brownson"; NHHC: "commanded the ship Blake until 1884" | — |
| TA056 | s14 · 0.9–3.1 s | aviso_ano | "Photo from about 1900–1909" | CONFIRMADA (PA020) | CM s14: data_na_origem "1900-1909 (NHHC NH 57975: 'After this Year: 1900 · Before this Year: 1909')", aviso_de_ano true | — |
| TA057 | s15 · 0–13.333 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s15: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA058 | s15 · 0–13.333 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA059 | s15 · 0–13.333 s | rotulo | "1883 · BLAKE" | CONFIRMADA (F034) | idem TA053 | — |
| TA060 | s15 · 0–3.767 s | eixo | "0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT" | CONFIRMADA | aritmética interna (TA243): a régua vai de 0 a 30,000 ft, de 5,000 em 5,000, e cobre todos os marcadores do lote (23,250 a 28,680 ft). O DANFS (30,246 ft, F051) fica acima dela, e a s20 o mostra como faixa | — |
| TA061 | s15 · 2.866–4.466 s | cota | "1883 · WIRE · 27,366 FT ⏎ 4,561 FATHOMS" | CONFIRMADA (F030, F032, F033) | CGS: "he sounded in four thousand five hundred and sixty-one fathoms"; 4,561 × 6 = 27,366 ft; a voz: "more than five miles" (5.183 mi) | — |
| TA062 | s15 · 4.466–13.333 s | cota | "1883 · WIRE · 27,366 FT · 60 MI EAST ⏎ 4,561 FATHOMS" | CONFIRMADA (F035) | LR F035: "96.2 km = 59.75 mi, about 60 miles; the sounding lies east of the point" (o alfinete fica em 66.394°W, o anel em 67.311°W) | forma: o mesmo número sai ao mesmo tempo como "60 MI EAST" e "≈ 60 MI" (TA064). Uma forma só (achado A8, opcional) |
| TA063 | s15 · 2.866–5.166 s | eixo | "DETAIL · 500 FT" | CONFIRMADA | aritmética: 27,487 − 27,366 = 121 ft, dentro da janela de 500 ft (TA248) | — |
| TA064 | s15 · 4.466–8.233 s | cota | "≈ 60 MI" | CONFIRMADA (F035) | 59.75 mi; a voz: "about 60 miles east of the deepest point" | — |
| TA065 | s15 · 2.866–13.333 s | credito | "Source: U.S. Coast and Geodetic Survey, 1883" | CONFIRMADA (PA021, F038) | CGS p. 1: "REPORT OF THE SUPERINTENDENT OF THE U. S. COAST AND GEODETIC SURVEY SHOWING THE PROGRESS OF THE WORK DURING THE FISCAL YEAR ENDING WITH JUNE, 1883" | a nota cita "PA019–PA023"; os ids certos são PA021–PA023 e F032–F035 (achado A10) |
| TA066 | s16 · 0.567–9.633 s | legenda | "U.S. Coast and Geodetic Survey, report for 1883" | CONFIRMADA (PA021) | idem; a voz: "The Survey's report for that year" | — |
| TA067 | s16 · 2.967–9.633 s | grifo_na_pagina | "and the specimen-cup brought up brown ooze" | CONFIRMADA (PA024; PA026 atendido) | CGS l. 3516 (p. 8, PDF p. 35): "and the specimen·cup brought up brown ooze." (o "·" é o hífen no OCR); REG s16: "the REAL page 8" | — |
| TA068 | s16 · 5.6–9.633 s | grifo_na_pagina | "No record is known of any sounding from which bottom specimen and temperature have been obtained at a depth equaling this." | CONFIRMADA, letra a letra (PA025, F039) | CGS l. 3516–3518 (p. 8): "No record / is known of any sounding from which bottom specimen and temperature have been obtained at a / depth equaling this." | — |
| TA069 | s17 · 0–8.634 s | aviso_ano | "Engraving, 1872" | CONFIRMADA (PA029) | CM s17 (a gravura): data_na_origem "14 December 1872", aviso_de_ano true; exceção do Lucas (28/10, 17:5x) | — |
| TA070 | s17 · 3.5–5.6 s | rotulo | "HMS Challenger" | CONFIRMADA (F042) | IHR p. 1: "H.M.S. Challenger, Captain Sir George S. Nares"; a voz: "the British research ship HMS Challenger" | — |
| TA071 | s17 · 6.3–8.634 s | card_nome | "Capt. George Nares" | CONFIRMADA (PA028, F043) | IHR p. 1: "Captain Sir George S. Nares"; Men of Mark (CM s17): "From 1872 down to the end of 1874 Captain Nares was in command"; a voz: "under Captain Nares" | — |
| TA072 | s17 · 5.9–8.634 s | aviso_ano | "Photo from the 1870s" | CONFIRMADA (PA030) | CM s17 (o retrato): data_na_origem "ca. 1873 - in of voor 1878", aviso_de_ano true | — |
| TA073 | s18 · 0–9.833 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s18: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA074 | s18 · 0–9.833 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA075 | s18 · 0–5.533 s | eixo | "0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT" | CONFIRMADA | aritmética interna (TA243): a régua vai de 0 a 30,000 ft, de 5,000 em 5,000, e cobre todos os marcadores do lote (23,250 a 28,680 ft). O DANFS (30,246 ft, F051) fica acima dela, e a s20 o mostra como faixa | — |
| TA076 | s18 · 0.7–9.833 s | rotulo | "HMS CHALLENGER" | CONFIRMADA | IHR p. 1: "Lat. i9°42’ N., Long. 65007’ W." (OCR de 19°42'N, 65°07'W); REG s18: "sondagem-challenger, 19°42'N 65°07'W"; sem ano, como a voz | — |
| TA077 | s18 · 3.033–5.533 s | cota | "23,250 FT ⏎ 3,875 FATHOMS" | CONFIRMADA (F045, F046) | IHR p. 1: "found a maximum depth of 3,875 fathoms = 7,087 metres"; 3,875 × 6 = 23,250 ft; a voz: "about 23,000 feet" | — |
| TA078 | s18 · 3.033–5.533 s | credito | "Source: International Hydrographic Review, 1936" | CONFIRMADA (PA031) | a procedência: "'The Naming of Nares and Puerto Rico Deeps', The International Hydrographic Review XIII(1), 1936" | — |
| TA079 | s18 · 5.133–9.833 s | rotulo | "Puerto Rico Trench" | CONFIRMADA (PA032, F047) | USGS18: "the entire 770-km-long trench"; a isóbata de 7,000 m contém o alfinete do Challenger | — |
| TA080 | s19 · 0.167–3.3 s | cota | "1939" | CONFIRMADA (F048) | DANFS (LR F048): "while steaming north of Hispaniola and Puerto Rico 14 February 1939, Milwaukee recorded the greatest depth" | — |
| TA081 | s19 · 0–3.3 s | aviso_ano | "Photo from 1942" | CONFIRMADA (PA033) | CM s19: data_na_origem "7 January 1942", aviso_de_ano true | — |
| TA082 | s19 · 1.6–3.3 s | rotulo | "USS Milwaukee" | CONFIRMADA (F048) | DANFS; CM s19: "USS Milwaukee (CL-5) off the New York Naval Shipyard" (NARA 19-N-27088) | — |
| TA083 | s20 · 0–11.4 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s20: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA084 | s20 · 0–11.4 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA085 | s20 · 1.5–8.734 s | rotulo | "NORTH OF PUERTO RICO" | CONFIRMADA (F048, F050) | DANFS: "north of Hispaniola and Puerto Rico"; SUN l. 24–25: "north of / Puerto Rico and Hispaniola"; a voz: "north of Puerto Rico" | — |
| TA086 | s20 · 2.967–7.767 s | eixo | "0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT" | CONFIRMADA | aritmética interna (TA243): a régua vai de 0 a 30,000 ft, de 5,000 em 5,000, e cobre todos os marcadores do lote (23,250 a 28,680 ft). O DANFS (30,246 ft, F051) fica acima dela, e a s20 o mostra como faixa | — |
| TA087 | s20 · 3.6–7.767 s | cota | "1939 · SOUND · MORE THAN 28,000 FT · REPORTED" | CONFIRMADA (PA034, F049–F051) | SUN: "(28,680 feet)"; DANFS: 30,246 ft; os dois passam de 28,000; "sonic depth-finding" (F049); a voz: "It reported more than 28,000 feet" | — |
| TA088 | s20 · 3.6–7.767 s | credito | "Source: National Geographic Society bulletin, 1939" | CONFIRMADA (F053) | SUN l. 18–19: "Prepared by National Geographic Society, / Washington. D. C.—WNU Service."; a voz: "a bulletin from the National Geographic Society" | — |
| TA089 | s20 · 8.867–11.4 s | rotulo | "Milwaukee Deep (1939)" | CONFIRMADA (PA034, F052) | SUN l. 29–32: "The new depression has been named the Milwaukee Deep, from the United States cruiser" | — |
| TA090 | s21 · 0–5.233 s | folha_cabecalho | "THE SUN (NEWBERRY, S.C.) · JULY 28, 1939 · P. 3" | NÃO ACHEI (o "P. 3") | SUN l. 209, o cabeçalho: "THE SUN. NEWBERRY. S. C- FRIDAY. JULY 28, 1939" (jornal e data conferem). O número impresso da página não está no OCR, e a página do acervo diz "Image 3" (historicnewspapers.sc.edu/lccn/sn93067784/1939-07-28/ed-1/seq-3/, lida em 29/10/2026), não "Page 3" | "THE SUN (NEWBERRY, S.C.) · JULY 28, 1939", sem "· P. 3"; ou a Sala lê o número na imagem (achado A5) |
| TA091 | s21 · 0–5.233 s | folha_texto | "New Method Used to Map Ocean Floor ⏎ Record Soundings Made In Atlantic Near Puerto Rico." | CONFIRMADA, letra a letra (PA038) | SUN l. 11–17: "New Method / Used to Map / Ocean Floor / ■ / Record Soundings Made / In Atlantic Near / Puerto Rico." | — |
| TA092 | s21 · 0–5.233 s | folha_texto | "Prepared by National Geographic Society, Washington, D. C.—WNU Service." | NÃO ACHEI (a vírgula) | SUN l. 18–19: "Prepared by National Geographic Society, / Washington. D. C.—WNU Service." O texto tem ponto depois de "Washington"; o OCR troca vírgula por ponto também no cabeçalho ("THE SUN. NEWBERRY."). O resto confere letra a letra | a Sala confere a vírgula na imagem; até lá, o texto não pode se dizer literal nesse ponto (achado A6) |
| TA093 | s21 · 0–5.233 s | folha_texto | "The recent discovery of a new and greater depth in the Atlantic ocean, establishing a new record of nearly five and a half miles (28,680 feet), north of Puerto Rico and Hispaniola, has called attention to efforts now being made to make complete contour maps of portions of the bottom of the ocean. The new depression has been named the Milwaukee Deep, from the United States cruiser from which the record sounding was made." | CONFIRMADA, letra a letra (F050, F052) | SUN l. 20–34: "The recent discovery of a new / and greater depth in the Atlan / tic ocean, establishing a new / record of nearly five and a half / miles (28,680 feet), north of / Puerto Rico and Hispaniola, has / called attention to efforts now / being made to make complete / contour maps of portions of the / bottom of the ocean. The new / depression has been named the / Milwaukee Deep, from the / United States cruiser from / which the record sounding / was made." ("Atlan/tic" é a quebra de linha) | — |
| TA094 | s21 · 0.8–5.233 s | grifo_na_pagina | "nearly five and a half miles (28,680 feet)" | CONFIRMADA (F050) | SUN l. 23–24: "record of nearly five and a half / miles (28,680 feet)" | — |
| TA095 | s21 · 1.467–5.233 s | cota | "28,680 FT · THE SUN, 1939" | CONFIRMADA (PA036 e PA037 atendidos; F050) | SUN: "(28,680 feet)"; um jornal só, sem braças | — |
| TA096 | s21 · 3.3–5.233 s | rotulo | "National Geographic Society" | CONFIRMADA (F053) | SUN l. 18: "Prepared by National Geographic Society,"; a voz: "a bulletin from the National Geographic Society" | — |
| TA097 | s22 · 0–4.1 s | nada | (vazio) | NADA A CHECAR | o desenho do som: nenhum texto | — |
| TA098 | s23 · 0–4.067 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s23: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA099 | s23 · 0–4.067 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA100 | s23 · 0.2–4.067 s | cota | "1964" | CONFIRMADA (F014, F055) | JAM l. 3: "the 1964 Archimède bathyscaphe dive"; a voz: "In 1964, people went down into the trench" | — |
| TA101 | s23 · 2.067–4.067 s | rotulo | "Puerto Rico Trench" | CONFIRMADA (F014) | idem: "in the Puerto Rico trench" | — |
| TA102 | s24 · 0.467–4.867 s | legenda | "Cité de la Mer, Cherbourg" | CONFIRMADA (PA039) | CM s24: lugar_na_origem "the Cité de la Mer museum, Cherbourg", aviso_de_ano false | — |
| TA103 | s24 · 3.367–4.867 s | rotulo | "Archimède" | CONFIRMADA (F057; PA039) | JAM l. 3: "Archimède bathyscaphe"; a voz: "called Archimède" | — |
| TA104 | s24 · 0–4.867 s | credito | "Raimond Spekking / Wikimedia Commons · CC BY-SA 4.0" | CONFIRMADA (PA039) | CM s24: credito_na_tela "Raimond Spekking / Wikimedia Commons · CC BY-SA 4.0"; Commons: "Author: Raimond Spekking", CC BY-SA 4.0 | — |
| TA105 | s25 · 0–7.6 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s25: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA106 | s25 · 0–7.6 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA107 | s25 · 0–5.333 s | eixo | "0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT" | CONFIRMADA | aritmética interna (TA243): a régua vai de 0 a 30,000 ft, de 5,000 em 5,000, e cobre todos os marcadores do lote (23,250 a 28,680 ft). O DANFS (30,246 ft, F051) fica acima dela, e a s20 o mostra como faixa | — |
| TA108 | s25 · 0.8–5.333 s | cota | "1964 · CREW · MORE THAN 4 MI" | CONFIRMADA (F061) | 7,300 m = 4.536 mi (JAM); ~8,300 m = 5.157 mi (o release da Five Deeps): "more than four miles" pelas duas; a voz: "It went more than four miles down." | — |
| TA109 | s25 · 2.966–5.333 s | legenda | "SOURCES DISAGREE" | CONFIRMADA (F062, F063) | JAM: "dive to 7300 m"; o release de 2018: "The trench was previously explored to approximately 8,300 meters"; a voz: "The sources disagree" | — |
| TA110 | s25 · 1.466–5.333 s | credito | "Source: Jamieson et al., 2020" | CONFIRMADA (F059) | JAM l. 3 | — |
| TA111 | s26 · 0.366–8.6 s | cota | "1964 · CREW · ~24,000 FT" | CONFIRMADA (F067) | 7,300 m = 23,950.1 ft; a voz: "About 24,000 feet down" | — |
| TA112 | s26 · 2.633–8.6 s | legenda | "Report published 1965" | CONFIRMADA (F069) | JAM l. 7: "was reported in 1965"; a voz: "The report, published the next year" | — |
| TA113 | s26 · 5.366–8.6 s | cota | "~200 · ALONG ~1 MI" | CONFIRMADA (F068) | JAM l. 7: "an account of observing 200 snailfish (Liparidae) during a one mile transect"; a voz: "some 200 of them along roughly a mile" | — |
| TA114 | s26 · 0.366–8.6 s | credito | "Source: Jamieson et al., 2020" | CONFIRMADA (F065) | JAM l. 3 e 7 | — |
| TA115 | s27 · 0–7.3 s | legenda | "Denson Seamount, Alaska · 4,480 ft (1,365 m) · 2023" | CONFIRMADA (PA041, PA042) | NOAA l. 22: "spotted at a depth of 1,365 meters (4,480 feet) during dive 8 of NOAA Ocean Exploration's 2023 Seascape Alaska 5 expedition"; CM s27: "Site: Denson Seamount" | — |
| TA116 | s27 · 3.0–7.3 s | rotulo | "SNAILFISH (LIPARIDAE)" | CONFIRMADA (F070a) | NOAA l. 22: "An example of a deep-sea snailfish."; JAM: "snailfish (Liparidae)" | — |
| TA117 | s28 · 0–7.433 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s28: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA118 | s28 · 0–7.433 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA119 | s28 · 0–7.433 s | eixo | "0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT" | CONFIRMADA | aritmética interna (TA243): a régua vai de 0 a 30,000 ft, de 5,000 em 5,000, e cobre todos os marcadores do lote (23,250 a 28,680 ft). O DANFS (30,246 ft, F051) fica acima dela, e a s20 o mostra como faixa | — |
| TA120 | s28 · 3.633–7.433 s | cota | "1970 · NET" | CONFIRMADA (F071) | NOAA l. 26: "In 1970, a deep-sea cusk eel was caught in a net"; a voz: "in 1970 a net brought back a small cusk-eel" | — |
| TA121 | s28 · 3.633–7.433 s | credito | "Source: NOAA Ocean Exploration" | CONFIRMADA a fonte (PA043); a forma do §7 sem o ano | NOAA l. 30: "Published January 14, 2026"; ID7: "Crédito: `Source: <instituição>, <ano>`" | "Source: NOAA Ocean Exploration, 2026" (achado A7) |
| TA122 | s29 · 0.2–4.8 s | rotulo | "CUSK-EEL (OPHIDIIDAE)" | CONFIRMADA (PA044) | CM s29: "PMNM - Ophidiid Fish off Salmon Bank", lugar_na_origem "off Salmon Bank, … Northwestern Hawaiian Islands", aviso_de_ano false. A pílula sai em 4,8 s, antes de a foto sair (5,1 s = 184,6 s) e de a ficha entrar | — |
| TA123 | s29 · 3.733–9.6 s | cota | "~8 IN" | CONFIRMADA (F075) | AM l. 28: "This 20 cm long fish"; 20 cm = 7.874 in; a voz: "about eight inches long" | à arte: o "~8 IN" fica preso à enguia de traço DENTRO da rede, do lado oposto à foto (de 3,733 a 5,1 s as duas estão na mesa) (achado A14) |
| TA124 | s29 · 5.1–9.6 s | folha_cabecalho | "AUSTRALIAN MUSEUM · WHAT IS THE DEEPEST-LIVING FISH?" | CONFIRMADA | AM, o <title>: "What is the deepest-living fish? - The Australian Museum"; og:title "What is the deepest-living fish?" | — |
| TA125 | s29 · 5.1–9.6 s | folha_texto | "This 20 cm long fish has been collected from the Puerto Rico Trench at a depth of 8,370 m (27,455 feet)." | CONFIRMADA, letra a letra (PA045) | AM l. 28: "This 20 cm long fish has been collected from the Puerto Rico Trench at a depth of 8,370 m (27,455 feet)." | — |
| TA126 | s29 · 8.033–9.6 s | grifo_na_pagina | "Puerto Rico Trench" | CONFIRMADA | idem: "from the Puerto Rico Trench" | — |
| TA127 | s29 · 5.1–9.6 s | credito | "Source: Australian Museum, 2020" | CONFIRMADA (PA046) | AM l. 8–20: "Author(s) / Mark McGrouther / Updated / 30/03/20" | — |
| TA128 | s30 · 0–26.133 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s30: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA129 | s30 · 0–26.133 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA130 | s30 · 0–7.1 s | eixo | "0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT" | CONFIRMADA | aritmética interna (TA243): a régua vai de 0 a 30,000 ft, de 5,000 em 5,000, e cobre todos os marcadores do lote (23,250 a 28,680 ft). O DANFS (30,246 ft, F051) fica acima dela, e a s20 o mostra como faixa | — |
| TA131 | s30 · 0.133–7.1 s | cota | "1970 · NET · ~27,460 FT" | CONFIRMADA (F071, F077) | NOAA l. 26: "a net that descended to 8,370 meters (27,460 feet)"; o "~" porque o museu dá 27,455 ft para os mesmos 8,370 m; a voz: "nearly as deep as the deepest point" (27,460 < 27,487) | — |
| TA132 | s30 · 1.0–7.1 s | credito | "Source: NOAA Ocean Exploration" | CONFIRMADA a fonte (PA043); a forma do §7 sem o ano | NOAA l. 30: "Published January 14, 2026" | "Source: NOAA Ocean Exploration, 2026" (achado A7) |
| TA133 | s30 · 8.3–12.033 s | cota | "~1 MI" | CONFIRMADA o número (F068) | JAM l. 7: "during a one mile transect"; a voz (s26): "along roughly a mile". A escala do retalho no mapa é o TA252 | — |
| TA134 | s30 · 16.133–26.133 s | cota | "USGS MULTIBEAM · 2002–2003" | CONFIRMADA (F080; PA047 atendido no texto) | USGS18 l. 21: "the morphology of the entire 770-km-long trench … was mapped with multibeam echosounder during three cruises in 2002 and 2003". O enquadramento da regência é o TA258 | — |
| TA135 | s30 · 18.7–26.133 s | rotulo | "U.S. Geological Survey" | CONFIRMADA (F080) | idem; a voz: "the U.S. Geological Survey mapped the trench with multibeam sonar" | — |
| TA136 | s32 · 0.4–3.567 s | cota | "3 CRUISES" | CONFIRMADA (F080, F082) | OFR l. 17: "All three cruises were carried out aboard the NOAA ship Ronald H. Brown"; "The seafloor multibeam data from the three cruises"; a voz: "It took three cruises" | — |
| TA137 | s32 · 1.367–3.567 s | rotulo | "Ronald H. Brown" | CONFIRMADA (PA049, F082) | OFR l. 17: "the NOAA ship Ronald H. Brown". A voz diz "the Ron Brown", e a fonte também usa o apelido (USGS18 l. 23: "(NOAA) ship Ron Brown") | — |
| TA138 | s32 · 0.4–3.567 s | legenda | "Gulf of Mexico" | CONFIRMADA (PA050) | CM s32: lugar_na_origem "Gulf of Mexico", data_na_origem "27 September 2003", aviso_de_ano false | — |
| TA139 | s32 · 0–3.567 s | credito | "NOAA Photo Library / Wikimedia Commons · CC BY 2.0" | CONFIRMADA (PA050) | CM s32: credito_na_tela "NOAA Photo Library / Wikimedia Commons · CC BY 2.0" | — |
| TA140 | s33 · 0–15.733 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s33: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA141 | s33 · 0–15.733 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA142 | s33 · 0–9.867 s | eixo | "0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT" | CONFIRMADA | aritmética interna (TA243): a régua vai de 0 a 30,000 ft, de 5,000 em 5,000, e cobre todos os marcadores do lote (23,250 a 28,680 ft). O DANFS (30,246 ft, F051) fica acima dela, e a s20 o mostra como faixa | — |
| TA143 | s33 · 0.367–6.133 s | eixo | "DETAIL · 500 FT" | CONFIRMADA | aritmética: 27,487 − 27,231…27,362 = 125 a 256 ft (o meio, ~190), dentro da janela de 500 ft (TA249) | — |
| TA144 | s33 · 3.633–9.867 s | cota | "2002–2003 · USGS · ~27,300 FT (8,300–8,340 M)" | CONFIRMADA (F083, F084) | USGS18 l. 25: "This sector is 10-15 km wide and 8300-8340 m deep relative to mean sea level"; 8,300–8,340 m = 27,231–27,362 ft, o meio 27,296.6 ft; a voz: "about 27,300 feet" | — |
| TA145 | s33 · 6.533–9.867 s | cota | "15 YEARS" | CONFIRMADA (F086) | 2018 − 2003 = 15 (o último cruzeiro acabou em 04/09/2003, F085; o mergulho, 19/12/2018); a voz: "15 years before anyone reached the deepest point" | — |
| TA146 | s33 · 3.633–9.867 s | credito | "Source: U.S. Geological Survey" | CONFIRMADA a fonte (PA051 atendido: sem "2003"); a forma do §7 sem o ano | USGS18 l. 15: "By Woods Hole Coastal and Marine Science Center August 22, 2018"; o meu conserto do PA051 tirava o ano, e o §7 pede o da fonte | "Source: U.S. Geological Survey, 2018" (achado A7) |
| TA147 | s34 · 0.234–4.4 s | rotulo | "PACIFIC" | CONFIRMADA (F088) | OFR l. 13: "Trenches in the Pacific are located in places where one tectonic plate subducts or slides under another one." | — |
| TA148 | s35 · 0–22.367 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s35: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA149 | s35 · 0–22.367 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA150 | s35 · 1.367–22.367 s | rotulo | "NORTH AMERICAN PLATE" | CONFIRMADA (F089) | SJ l. 551: "formed where the North American and Caribbean plates slide"; a posição desenhada é o TA255 | — |
| TA151 | s35 · 2.567–22.367 s | rotulo | "CARIBBEAN PLATE" | CONFIRMADA (F089) | idem | — |
| TA152 | s35 · 9.9–11.867 s | cota | "≈ ¾ IN/YR (20 MM/YR)" | CONFIRMADA (F091, F092) | SJ l. 554–556: "The Caribbean plate is drifting eastward at approximately 20 mm per year relative to the North American plate (DeMets et al., 2010)"; 20 mm = 0.787 in | — |
| TA153 | s35 · 9.9–22.367 s | credito | "Source: U.S. Geological Survey" | DIVERGE (a quem o crédito dá a taxa) | O crédito entra em 9,9 s com "≈ ¾ IN/YR (20 MM/YR)", mas nenhuma fonte do USGS lida dá a taxa: o OFR e a página de 2018 não têm "mm" nem "per year". A taxa é de SJ l. 554–556 ("approximately 20 mm per year … (DeMets et al., 2010)"; F091, F215). O USGS é a fonte do −380 mGal (OFR l. 13, TA154). A voz atribui ao USGS só a gravidade ("According to the USGS, gravity…") | "Sources: Stewart & Jamieson, 2019; U.S. Geological Survey, 2006" de 9,9 a 22,367 s; ou "Source: Stewart & Jamieson, 2019" de 9,9 a 13,6 s e a linha com os dois a partir de 13,6 s (achado A1) |
| TA154 | s35 · 13.6–22.367 s | cota | "−380 mGal · USGS" | CONFIRMADA (F093) | OFR l. 13: "the most negative free-air gravity anomaly on earth, -380 mGal" | — |
| TA155 | s35 · 15.867–22.367 s | legenda | "Gravity anomaly: how far gravity falls below normal" | CONFIRMADA, com ressalva | OFR l. 13: "the most negative free-air gravity anomaly", ou seja, a anomalia pode ser positiva ou negativa. A legenda define o termo só pelo lado de baixo, e a cena só mostra o lado de baixo (REG s35 b3: "the gravity curve drops below it") | opcional: "Gravity anomaly: how far gravity is from normal (here, below)" (achado A16) |
| TA156 | s36 · 0.933–9.9 s | legenda | "RECONSTRUCTED · USGS" | CONFIRMADA (PA056 e PA057 atendidos) | USGS18 l. 57: "between (reconstructed) elevations of +1300 m and -4000 m"; a legenda fica de 0,933 a 9,9 s e cobre os dois números (4,367 e 7,367 s); a voz: "By the agency's reconstruction" | — |
| TA157 | s36 · 2.133–9.9 s | legenda | "Tilted limestone layer" | CONFIRMADA (F095, F095a) | USGS18 l. 57: "a tilted carbonate platform"; F095a: a plataforma é de calcário; a voz: "a tilted layer of limestone" | — |
| TA158 | s36 · 4.367–9.9 s | cota | "+4,265 FT" | CONFIRMADA (PA054 atendido; F096) | +1,300 m = +4,265.1 ft; a voz: "more than 4,000 feet above sea level" | — |
| TA159 | s36 · 7.367–9.9 s | cota | "≈ −13,000 FT" | CONFIRMADA (PA055, F098) | −4,000 m = −13,123.4 ft; a voz: "about 13,000 feet below the surface" | — |
| TA160 | s36 · 0–9.9 s | eixo | "SEA LEVEL" | CONFIRMADA (F098) | "elevations of +1300 m and -4000 m" são cotas em relação ao nível do mar; a voz: "above sea level" | — |
| TA161 | s36 · 0.933–9.9 s | credito | "Source: U.S. Geological Survey" | CONFIRMADA a fonte (F095); a forma do §7 sem o ano | USGS18 l. 15: "August 22, 2018" (a página da frase "(reconstructed) elevations") | "Source: U.S. Geological Survey, 2018" (achado A7) |
| TA162 | s37 · 0–6.8 s | credito | "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | REG s37: "MapTiler satellite on the coast and the surface"; ID7 e §6: o crédito da MapTiler em todo quadro com tile dela | — |
| TA163 | s37 · 0–6.8 s | credito | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | PA003: "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | — |
| TA164 | s37 · 5.133–6.8 s | rotulo | "PUERTO RICO" | CONFIRMADA (F099) | USGS18 l. 57: "large vertical movements of a segment of the Puerto Rico Trench, its forearc, and the island of Puerto Rico"; a voz: "and in Puerto Rico itself" | — |
| TA165 | s02 (s50, s74) | rotulos_dado[0] | "≈ 83 MI · AGUADILLA" · valor_exato ≈ 83 mi · data 2018 (o levantamento) | CONFIRMADA (F005) | fonte declarada: Bongiovanni 2021 (a distância do ponto à costa); pauta-geo.json (aguadilla-costa-ponto → ponto-mais-fundo-atlantico) · LR F005: 83.47 mi até a costa de Aguadilla | — |
| TA166 | s02 (s09) | rotulos_dado[1] | "27,487 FT" · valor_exato 8,378 ± 5 m = 27,487 ± 16 ft · data dez. 2018 | CONFIRMADA (F006, F007) | fonte declarada: Bongiovanni et al., Geoscience Data Journal, 2021 (midia/atlantico-fundo/fontes/02-bongiovanni-2021-gdj3.122.txt); PA004 · BON: "8,378 ± 5 m"; ± 5 m = ± 16.4 ft | a fonte cita "PA004"; o id certo é PA002 (achado A10) |
| TA167 | s02 | rotulos_dado[2] | "MORE THAN 5 MI" · valor_exato 5.21 mi | CONFIRMADA (F007) | fonte declarada: Bongiovanni et al., Geoscience Data Journal, 2021 (midia/atlantico-fundo/fontes/02-bongiovanni-2021-gdj3.122.txt); PA004 · 5.206 mi | a fonte cita "PA004"; o id certo é PA002 (achado A10) |
| TA168 | s03 | rotulos_dado[3] | "≈ 1,500 FT" · valor_exato 1,545 ft (471 m) · data 2020 / 2018 | CONFIRMADA (F008, F009) | fonte declarada: China & Nepal, 2020 (Everest 8,848.86 m; sala-01-ap-everest-2020.txt) e Bongiovanni 2021 (8,378 m) · 1,544.8 ft (470.86 m) | — |
| TA169 | s04 | rotulos_dado[4] | "≈ 9,500 MI" · valor_exato ≈ 9,500 mi | CONFIRMADA (F013) | fonte declarada: pauta-geo.json (a distância do anel à Fossa das Marianas) · 9,488 mi | — |
| TA170 | s09 (s55, s57) | rotulos_dado[5] | "28,675 FT · THE LIST" · valor_exato 8,740 m = 28,675 ft · data a lista, como Stewart & Jamieson a leram em 2019 | CONFIRMADA (PA010, F022) | fonte declarada: Stewart & Jamieson, Earth-Science Reviews, 2019, Tabela 1 e §3.2 (midia/atlantico-fundo/fontes/01-04-stewart-jamieson-2019-earscirev.txt): "Milwaukee Deep (Puer… · SJ Tabela 1: "8740 \| GEBCO Gazetteer"; a voz na s56: "about 28,700 feet" (o por_que_diverge confere) | — |
| TA171 | s09 | rotulos_dado[6] | "MORE THAN 1,000 FT" · valor_exato 1,188 ft | CONFIRMADA (F026) | fonte declarada: a diferença 28,675 − 27,487 (Tabela 1; Bongiovanni 2021) · 1,188 ft | — |
| TA172 | s12 | rotulos_dado[7] | "JAN. 27, 1883" · valor_exato Jan. 27, 1883 | CONFIRMADA (F027) | fonte declarada: USCGS, relatório de 1883 (midia/atlantico-fundo/fontes/04-uscgs-relatorio-1883-CSC-0082.txt); PA011 · LR F027: "taken on 27th January 1883" | a fonte cita "PA011"; o id certo é F027 (o PA011 é a nota da Tabela 1) (achado A10) |
| TA173 | s15 | rotulos_dado[8] | "1883 · WIRE · 27,366 FT · 60 MI EAST / 4,561 FATHOMS" · valor_exato 4,561 fathoms = 27,366 ft; ≈ 60 mi · data 1883 | CONFIRMADA (F032–F035) | fonte declarada: USCGS 1883 (4,561 braças; PA019–PA022); a distância ao anel pela pauta-geo · 4,561 × 6 = 27,366 ft; 59.75 mi | a fonte cita "PA019–PA022"; o id certo é F032–F035, PA021 e PA022 (PA019 e PA020 são o retrato de Brownson) (achado A10) |
| TA174 | s18 | rotulos_dado[9] | "23,250 FT / 3,875 FATHOMS" · valor_exato 3,875 fathoms = 23,250 ft · data 1873 (a sondagem; o ano fica fora da tela) | NÃO ACHEI (o campo data) | fonte declarada: International Hydrographic Review, 1936 (midia/atlantico-fundo/fontes/04-ihr-1936-naming-nares-puerto-rico-deeps.txt) · os valores conferem (F045, F046). Mas a data "1873" não está em fonte: IHR p. 1 diz "On 26th March 1875", e LR F041 dá a travessia de março de 1873 como "data que nenhuma cópia local dá; F22 em disputa" | "data": "1873 ou 1875 (em disputa, LR F041); fora da tela" (achado A11) |
| TA175 | s20 | rotulos_dado[10] | "1939 · SOUND · MORE THAN 28,000 FT · REPORTED" · valor_exato 28,680 ft · data 1939 | CONFIRMADA (F050, F051) | fonte declarada: The Sun, 28/7/1939 (o boletim da National Geographic Society): "28,680 feet" · SUN 28,680 ft; DANFS 30,246 ft | — |
| TA176 | s21 (s56) | rotulos_dado[11] | "28,680 FT · THE SUN, 1939" · valor_exato 28,680 ft · data 28/7/1939 | CONFIRMADA (F050) | fonte declarada: midia/atlantico-fundo/fontes/fb-thesun-1939-07-28-p3-ocr.txt: "nearly five and a half miles (28,680 feet)" · SUN l. 23–24 | — |
| TA177 | s25 | rotulos_dado[12] | "1964 · CREW · MORE THAN 4 MI" · valor_exato 7,300 m = 4.5 mi · data 1964 | CONFIRMADA (F061) | fonte declarada: Jamieson et al. 2020 (o relato de 1965: 7,300 m) · 7,300 m = 4.536 mi | — |
| TA178 | s26 (s75) | rotulos_dado[13] | "1964 · CREW · ~24,000 FT" · valor_exato ≈ 7,300 m · data 1964 (relato de 1965) | CONFIRMADA (F067) | fonte declarada: Jamieson et al. 2020 · 7,300 m = 23,950 ft | — |
| TA179 | s26 | rotulos_dado[14] | "~200 · ALONG ~1 MI" · valor_exato 200; 1 mi · data 1964 | CONFIRMADA (F068) | fonte declarada: Jamieson et al. 2020: "observing 200 snailfish (Liparidae) during a one mile transect" · JAM l. 7: "200 snailfish (Liparidae) during a one mile transect" | — |
| TA180 | s27 (s72) | rotulos_dado[15] | "Denson Seamount, Alaska · 4,480 ft (1,365 m) · 2023" · valor_exato 1,365 m = 4,478 ft · data 2023 | CONFIRMADA (PA042, PB138) | fonte declarada: conferencia-midia.json, s27 (EX2306 Dive 08, 1,365 m, 2023); PB138 · NOAA l. 22: "1,365 meters (4,480 feet)". O 4,480 é o número da própria NOAA, não um arredondamento nosso | — |
| TA181 | s29 | rotulos_dado[16] | "~8 IN" · valor_exato 20 cm = 7.9 in · data 1970 | CONFIRMADA (F075) | fonte declarada: Australian Museum: "This 20 cm long fish" · 7.874 in | — |
| TA182 | s30 (s74, s75) | rotulos_dado[17] | "1970 · NET · ~27,460 FT" · valor_exato 8,370 m = 27,460 ft (NOAA) · data 1970 | CONFIRMADA (F071, F077; PA045) | fonte declarada: midia/atlantico-fundo/fontes/fb-noaa-oer-deepest-fish.txt: "a net that descended to 8,370 meters (27,460 feet)" · NOAA: 27,460 ft; AM: 27,455 ft | — |
| TA183 | s32 | rotulos_dado[18] | "3 CRUISES" · valor_exato 3 · data 2002–2003 | CONFIRMADA | fonte declarada: USGS (midia/atlantico-fundo/fontes/fa-usgs-ofr2006-1210-introduction.txt: "The seafloor multibeam data from the three cruises") · OFR l. 17: "The seafloor multibeam data from the three cruises" | — |
| TA184 | s33 (s38, s57) | rotulos_dado[19] | "2002–2003 · USGS · ~27,300 FT (8,300–8,340 M)" · valor_exato 8,300–8,340 m · data 2002–2003 | CONFIRMADA (F083, F084) | fonte declarada: USGS (midia/atlantico-fundo/fontes/fb-usgs-seafloor-map.txt; midia/atlantico-fundo/fontes/fa-usgs-ofr2006-1210-introduction.txt); laudo s33 · USGS18 l. 25 | — |
| TA185 | s33 | rotulos_dado[20] | "15 YEARS" · valor_exato 15 | CONFIRMADA (F086) | fonte declarada: conta nossa: 2003 → dez. 2018 · 2003 → dez. 2018 | — |
| TA186 | s35 (s63) | rotulos_dado[21] | "≈ ¾ IN/YR (20 MM/YR)" · valor_exato ~20 mm/yr = 0.79 in/yr | DIVERGE (a fonte declarada) | fonte declarada: USGS (midia/atlantico-fundo/fontes/fa-usgs-ofr2006-1210-introduction.txt); LR F213–F216 · o valor confere (F091, F092), mas a fonte declarada não: o OFR não tem a taxa, e LR F213–F216 são as das Sandwich do Sul e a comparação. A taxa de Porto Rico é de SJ l. 554–556 (F091, F215) | "fonte": "Stewart & Jamieson, 2019, citando DeMets et al., 2010 (SJ l. 554–556; LR F091, F092)" (achado A1) |
| TA187 | s35 | rotulos_dado[22] | "−380 mGal · USGS" · valor_exato −380 mGal | CONFIRMADA (F093) | fonte declarada: midia/atlantico-fundo/fontes/fa-usgs-ofr2006-1210-introduction.txt: "the most negative free-air gravity anomaly on earth, -380 mGal" · OFR l. 13 | — |
| TA188 | s36 | rotulos_dado[23] | "+4,265 FT" · valor_exato +1,300 m = +4,265 ft | CONFIRMADA (F096) | fonte declarada: midia/atlantico-fundo/fontes/fb-usgs-seafloor-map.txt: "between (reconstructed) elevations of +1300 m and -4000 m" · USGS18 l. 57 | — |
| TA189 | s36 | rotulos_dado[24] | "≈ −13,000 FT" · valor_exato −4,000 m = −13,123 ft | CONFIRMADA (F098) | fonte declarada: a mesma frase do USGS (-4000 m) · USGS18 l. 57 | — |
| TA190 | s14 | cards_pessoa | W. H. BROWNSON · Lieutenant-Commander, U.S. Navy, commanding the Blake · data_do_cargo 1883-01 | CONFIRMADA (PA016–PA020, F031) | CGS l. 5804–5805 e 7637–7640; NHHC; CM s14. O que vai à tela: "W. H. BROWNSON", "Lieutenant-Commander, U.S. Navy · commanding the Blake, 1883" e "Photo from about 1900–1909" | — |
| TA191 | s17 | cards_pessoa | GEORGE NARES · Captain, Royal Navy, commanding HMS Challenger · data_do_cargo 1873-03 | CONFIRMADA a tela (PA028, PA030) | IHR p. 1: "Captain Sir George S. Nares"; Men of Mark: "From 1872 down to the end of 1874 Captain Nares was in command". O data_do_cargo "1873-03" é o mês em disputa do TA174 e fica fora da tela | o data_do_cargo como no TA174 (achado A11) |
| TA192 | s12 | _avisos_do_ano | "Photo from 1880 or earlier" · s12-blake-steamer-plate1-sigsbee-1880-rijksmuseum.jpg | CONFIRMADA (PA013) | CM s12: "ca. 1870 – in or before 1880"; o sha256 do arquivo no disco confere (04370884…) | — |
| TA193 | s12 | _avisos_do_ano | "Photo from 1880 or earlier" · s12-sigsbee-sounding-machine-on-blake-plate-sigsbee-1880-rijksmuseum.jpg | CONFIRMADA (PA013) | idem; o sha256 confere (064ee016…) | — |
| TA194 | s14 | _avisos_do_ano | "Photo from about 1900–1909" · willard-h-brownson-harris-ewing-1907-nh57975-commons.jpg | CONFIRMADA (PA020) | CM s14: "1900-1909"; o sha256 confere (fa90788b…) | — |
| TA195 | s17 | _avisos_do_ano | "Engraving, 1872" · s17-hms-challenger-iln-1872-engraving.jpg | CONFIRMADA (PA029) | CM s17: "14 December 1872"; o sha256 confere (21e581fe…) | — |
| TA196 | s17 | _avisos_do_ano | "Photo from the 1870s" · george-nares-lock-whitfield-rijksmuseum-commons.jpg | CONFIRMADA (PA030) | CM s17: "ca. 1873 - in of voor 1878"; o sha256 confere (f8f86ba5…) | — |
| TA197 | s19 | _avisos_do_ano | "Photo from 1942" · s19-uss-milwaukee-cl5-new-york-1942-01-07-nara-19-n-27088.jpg | CONFIRMADA (PA033) | CM s19: "7 January 1942"; o sha256 confere (a6e8a8e3…) | — |
| TA198 | s14 | glossario | Willard H. Brownson → "W. H. Brownson" (W. H. BROWNSON) | CONFIRMADA (PA016, PA018) | CGS l. 5804–5805: "W. H. Brownson" | — |
| TA199 | s17 | glossario | George Nares → "George Nares" (Capt. George Nares (sem "Sir")) | CONFIRMADA (PA028) | IHR p. 1: "Captain Sir George S. Nares"; na tela, sem "Sir" | — |
| TA200 | s02, s03, s09 | glossario | Bongiovanni et al., 2021 → "Bongiovanni et al., 2021" | CONFIRMADA (PA002) | BON l. 1–19 | — |
| TA201 | s08, s09 | glossario | Stewart & Jamieson, 2019 → "Stewart & Jamieson" | CONFIRMADA (F021) | SJ: "Earth-Science Reviews 197 (2019) 102896" | — |
| TA202 | s05, s06, s25, s26 | glossario | Jamieson et al., 2020 → "Jamieson et al., 2020" | CONFIRMADA (F014) | JAM l. 3: "Jamieson, Alan J.; Linley, Thomas D.; Stewart, Heather A.; Nargeolet, Paul-Henry; Vescovo, Victor. 2020" | — |
| TA203 | s12, s15, s16 | glossario | U.S. Coast and Geodetic Survey → "U.S. Coast and Geodetic Survey" | CONFIRMADA (PA058) | CGS, a folha de rosto: "U. S. COAST AND GEODETIC SURVEY" | — |
| TA204 | s14 | glossario | U.S. Navy → "U.S. Navy" | CONFIRMADA (PA058) | CGS: "U. S. N." | — |
| TA205 | s28, s30 | glossario | National Oceanic and Atmospheric Administration → "NOAA" | CONFIRMADA | LR F072: "the National Oceanic and Atmospheric Administration (NOAA)". No lote A, a sigla só aparece dentro de "NOAA Ocean Exploration" (s28, s30) | — |
| TA206 | s28, s30 | glossario | NOAA Ocean Exploration → "NOAA Ocean Exploration" | CONFIRMADA (PA043) | NOAA l. 30 (oceanexplorer.noaa.gov) | — |
| TA207 | s32 | glossario | NOAA Photo Library → "NOAA Photo Library" | CONFIRMADA (PA050) | CM s32: "NOAA Photo Library / Wikimedia Commons · CC BY 2.0" | — |
| TA208 | s30, s33, s35, s36 | glossario | U.S. Geological Survey → "U.S. Geological Survey" | CONFIRMADA (PA058) | OFR: "U.S. Geological Survey (USGS)"; a voz diz "the U.S. Geological Survey" (s31) e "the USGS" (s35, s37) | — |
| TA209 | s20, s21 | glossario | National Geographic Society → "National Geographic Society" | CONFIRMADA (F053) | SUN l. 18: "Prepared by National Geographic Society," | — |
| TA210 | s29 | glossario | Australian Museum → "Australian Museum" | CONFIRMADA (PA046) | AM, o <title>: "… - The Australian Museum" | — |
| TA211 | s08 | glossario | GEBCO Gazetteer of Undersea Feature Names → "GEBCO Gazetteer" | CONFIRMADA (PA011) | SJ l. 496: "the IHO-IOC GEBCO Gazetteer of Undersea Feature Names" | — |
| TA212 | todo mapa | glossario | GEBCO Compilation Group → "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA (PA003) | "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | — |
| TA213 | s24, s32 | glossario | Wikimedia Commons → "Wikimedia Commons" | CONFIRMADA (PA039, PA050) | CM s24 e s32 | — |
| TA214 | s24 | glossario | Raimond Spekking → "Raimond Spekking" | CONFIRMADA (PA039) | Commons: "Author: Raimond Spekking" | — |
| TA215 | todo mapa com tile da MapTiler | glossario | MapTiler / OpenStreetMap → "© MapTiler © OpenStreetMap contributors" | CONFIRMADA | identidade §6: "© MapTiler © OpenStreetMap contributors" | — |
| TA216 | s21 | glossario | The Sun (Newberry, S.C.) → "The Sun (Newberry, S.C.)" | CONFIRMADA (F054) | SUN l. 209: "THE SUN. NEWBERRY. S. C-" | — |
| TA217 | s08 | glossario | Earth-Science Reviews → "Earth-Science Reviews" | CONFIRMADA (F021) | SJ l. 95 | — |
| TA218 | s18 | glossario | International Hydrographic Review → "International Hydrographic Review" | CONFIRMADA (PA031) | IHR, a procedência | — |
| TA219 | s12, s13, s14, s15 | glossario | Blake → "Blake" | CONFIRMADA (F028) | CGS: "the steamer Blake" | — |
| TA220 | s17, s18 | glossario | HMS Challenger → "HMS Challenger" | CONFIRMADA (F042) | IHR p. 1: "H.M.S. Challenger"; na tela, na forma do AP, sem pontos | — |
| TA221 | s19 | glossario | USS Milwaukee → "USS Milwaukee" | CONFIRMADA (F048) | DANFS; NARA 19-N-27088 | — |
| TA222 | s24 | glossario | Archimède → "Archimède" | CONFIRMADA (F057) | JAM l. 3: "Archimède" | — |
| TA223 | s32 | glossario | Ronald H. Brown → "Ronald H. Brown" | CONFIRMADA (PA049, F082) | OFR l. 17: "Ronald H. Brown"; a variante "Ron Brown" é da voz e da fonte (USGS18 l. 23) | — |
| TA224 | s12, s14, s30 | glossario | United States → "U.S." | CONFIRMADA | AP Stylebook: "U.S." com pontos, em "U.S. Coast and Geodetic Survey", "U.S. Navy", "U.S. Geological Survey" | — |
| TA225 | s01, s37 | glossario | Puerto Rico → "Puerto Rico" (PUERTO RICO (rótulo de território); Puerto Rico (dentro de nome composto)) | CONFIRMADA (PA001) | CM s01: "Puerto Rico (Caribbean)"; no lote A, também dentro de "San Juan, Puerto Rico", "Aguadilla, Puerto Rico" e "NORTH OF PUERTO RICO", que a lista _na_tela não cita | — |
| TA226 | s02, s10 | glossario | Aguadilla → "Aguadilla" | CONFIRMADA (F005) | Census, GEOID 72005 | — |
| TA227 | s10 | glossario | San Juan → "San Juan" | CONFIRMADA (PA059) | NASA EO: "the San Juan metropolitan area" | — |
| TA228 | s05, s18, s23, s29 | glossario | Puerto Rico Trench → "Puerto Rico Trench" | CONFIRMADA (F014) | JAM l. 3: "in the Puerto Rico trench"; o nome próprio vai em caixa de título | — |
| TA229 | s20 | glossario | Milwaukee Deep → "Milwaukee Deep" | CONFIRMADA (F052) | SUN l. 30–31: "named the / Milwaukee Deep" | — |
| TA230 | s04 | glossario | Mariana Trench → "Mariana Trench" | CONFIRMADA (F011) | NOAA (LR F011): "the Mariana Trench" | — |
| TA231 | s04, s34 | glossario | Pacific Ocean → "PACIFIC" | CONFIRMADA (F011) | "the western Pacific Ocean" | — |
| TA232 | s03 | glossario | Mount Everest → "Mount Everest" | CONFIRMADA (F008) | AP: "Mount Everest" | — |
| TA233 | s27 | glossario | Denson Seamount, Alaska → "Denson Seamount, Alaska" | CONFIRMADA (PA041) | CM s27: "Site: Denson Seamount" | — |
| TA234 | s24 | glossario | Cité de la Mer, Cherbourg → "Cité de la Mer, Cherbourg" | CONFIRMADA (PA039) | CM s24: "the Cité de la Mer museum, Cherbourg" | — |
| TA235 | s32 | glossario | Gulf of Mexico → "Gulf of Mexico" | CONFIRMADA (PA050) | CM s32: "Gulf of Mexico" | — |
| TA236 | s35 | glossario | North American plate → "NORTH AMERICAN PLATE" | CONFIRMADA (F089) | SJ l. 551: "the North American and Caribbean plates" | — |
| TA237 | s35 | glossario | Caribbean plate → "CARIBBEAN PLATE" | CONFIRMADA (F089) | idem | — |
| TA238 | todas | glossario | pé (foot) → "FT (cota) / ft (legenda)" | CONFIRMADA | ID7: "Unidades imperiais primeiro" | — |
| TA239 | s02, s04, s15, s25, s30 | glossario | milha (mile) → "MI / mi" | CONFIRMADA | ID7; o glossário do canal: só milhas | — |
| TA240 | várias | glossario | metro → "M / m, entre parênteses" | CONFIRMADA | ID7: "Métrico só entre parênteses, quando a fonte é métrica" (s27 e s33 conferem) | — |
| TA241 | s15, s18 | glossario | braça (fathom) → "FATHOMS" | CONFIRMADA (F032, F045) | CGS: "fathoms"; IHR: "3,875 fathoms" | — |
| TA242 | s35 | glossario | miligal → "mGal" | CONFIRMADA (F093) | OFR l. 13: "-380 mGal" | — |
| TA243 | s07–s33 | escala | O MEDIDOR: a régua de 0 a 30,000 ft e o y de cada marcador no CON | CONFIRMADA (aritmética interna) | CON dá o y de 6 marcadores: o fundo do sonar 27,487 ft em y 1594 (s07), 1883 27,366 em y 1588 (s15), o Challenger 23,250 em y 1382 (s18), 1939 em y 1620 (s20), a rede em y ~1593 (s28), o USGS ~27,300 em y 1585 (s33). Todos caem numa reta só: 50 px por 1,000 ft, 0 ft em y ≈ 217 e 30,000 ft em y ≈ 1720 (ajuste por mínimos quadrados; o maior resíduo é de 0,2 px) | — |
| TA244 | s09 | escala | "o vão de 1,000+ ft são ~60 px" (CON s09) | CONFIRMADA | 1,188 ft × 0,0501 px/ft = 59,5 px (com 28,700 − 27,500, 60 px). A troca para 28,675/27,487 muda a marca da lista em 1,25 px | — |
| TA245 | s20 | escala | o marcador de 1939 "desce até y 1620" (CON s20) | CONFIRMADA (PA034) | y 1620 = 28,000 ft na escala do TA243, abaixo do fundo de hoje (1594); "MORE THAN 28,000" pede faixa ou seta a partir daí (SUN 28,680 = y 1654; DANFS 30,246 = y 1732, abaixo do fim da régua, em y 1720) | — |
| TA246 | s28, s30 | escala | a rede a y ~1593 e "a 1 px da linha do fundo" (CON s28, s30) | CONFIRMADA | 27,460 ft = y 1592,6, a 1,4 px do fundo (1594); com 27,455 ft, 1,6 px. "Nearly as deep", sem lupa | — |
| TA247 | s25 | escala | a faixa sem número das fontes que discordam | CONFIRMADA (PA040, F061) | 23,950–27,231 ft = y 1417–1581, 13 px acima do fundo (1594): não toca o anel. O CON diz "de ~4,5 a ~5,2 mi" (4.536 e 5.157 mi) | — |
| TA248 | s15 | escala | a LUPA "DETAIL · 500 FT" com os 121 ft | CONFIRMADA | 27,487 − 27,366 = 121 ft, cerca de um quarto da janela | — |
| TA249 | s33 | escala | a LUPA "DETAIL · 500 FT" com os "~190 ft" | CONFIRMADA (F084) | 27,487 − 27,296.6 = 190 ft (de 125 a 256 ft pelos extremos de 8,300–8,340 m) | — |
| TA250 | s03 | proporção | o Everest pousado no fundo, com 1,500 ft de fora | CONFIRMADA os números (F008, F009); a proporção não está escrita | 29,032 ft de montanha sobre 27,487 ft de água: fica de fora 1,545 ft, 5,3 % da altura. Nem a REG nem o CON dão a proporção do desenho | à arte: a linha d'água corta a montanha a 94,7 % da altura; um topo maior de fora seria outra conta (achado A12) |
| TA251 | s36 | proporção | a camada de +4,265 a −13,123 ft em torno de SEA LEVEL | CONFIRMADA os números (F096, F098); a proporção não está escrita | 4,265 : 13,123 = 0,325: a ponta alta fica acima do nível do mar a um terço da distância a que a ponta baixa fica abaixo dele | à arte: manter 1 : 3,08 na vertical do corte (achado A12) |
| TA252 | s30 | escala | o retalho "~1 MI" sobre a fossa inteira (REG s30 b2: "a tiny ~1 mi patch") | CONFIRMADA o número (F068); a escala do desenho é instrução | na pose P0 (73,0°W a 58,6°W de ponta a ponta, 19,4°N), 1 mi ≈ 4 px no quadro de 3840 px. Um retalho visível de 30–40 px seria de ~8–10 mi | à arte: o retalho no tamanho real (um ponto de ~4 px, com um anel de chamada que não é o retalho), ou a cota sai (achado A4) |
| TA253 | s05, s30 | posição | a silhueta do batiscafo (REG s05 b0–b1: "FAR from the ring and outside the deepest stretch") e o retalho (REG s30 b2, CON s30 p3: "LONGE do anel e fora do trecho mais fundo") | NÃO ACHEI (PA006) | nenhuma fonte dá o sítio de 1964; com os ~8,300 m do release (F060), o batiscafo estaria dentro do trecho de 8,000 m. O texto atende (nenhum rótulo de sítio), mas a REG e o CON ainda pedem a posição "fora do trecho mais fundo" | à arte e à regência: a silhueta e o retalho sem posição que se leia como sítio, sem relação com o trecho mais fundo; "nunca no anel" basta (achado A3) |
| TA254 | s05 b2, s06, s26 | posição | a linha dos peixes "na parede a ~24,000 ft", com "o chão hachurado bem abaixo" (REG s05 b2, s26 b0–b1; CON s26) | NÃO ACHEI (PA007) | JAM l. 7: "benthic epifauna … from depths of 7300 m", sobre o fundo; nenhuma fonte dá o fundo da fossa sob o sítio. O texto atende (nenhuma cota de fundo); o desenho ainda afirma "o chão bem abaixo" | à arte e à regência: a linha sobre o fundo em declive, sem o fundo da fossa desenhado abaixo dela (achado A3) |
| TA255 | s35 | posição | "NORTH AMERICAN PLATE below the trench, CARIBBEAN PLATE above" (REG s35 b0) | DIVERGE (a posição desenhada) | USGS18 l. 39: "Puerto Rico and the Virgin Islands are located at an active plate boundary between the North American plate and the northeast corner of the Caribbean plate"; OFR: "the downtrending North American plate" e "the deep trench north of it" (de Porto Rico). Com o norte para cima, a placa norte-americana fica ACIMA da fossa (o mar aberto) e a do Caribe ABAIXO (com Porto Rico). O CON diz só "nomes dentro do território" | à arte (instrução nova) e à regência: NORTH AMERICAN PLATE ao norte da fossa, CARIBBEAN PLATE ao sul, com Porto Rico (achado A2) |
| TA256 | s13 | posição | a faixa "north of Puerto Rico" com o alfinete 1883 · BLAKE (PA015) | CONFIRMADA (PA015 atendido por instrução) | `_instrucoes_para_a_arte`: "s13: a região acesa ao norte de Porto Rico contém o alfinete". A camada declarada `mar-ao-norte-de-porto-rico.json` ainda acaba em 19,419°N, e o alfinete fica em 19,681°N: quem muda a camada é o mapista | — |
| TA257 | s18 | posição | o alfinete HMS CHALLENGER em 19°42'N 65°07'W | CONFIRMADA (PA032) | IHR p. 1: "Lat. i9°42’ N., Long. 65007’ W."; ponto dentro da isóbata de 7,000 m | — |
| TA258 | s30 › b4 (s31) | posição | a área do multifeixe: REG s30 b4 "the camera goes down to the western stretch", com o fundo aceso "INSIDE the cruise area" | CONFIRMADA, com ressalva (PA047) | a área acesa é a camada `levantamento-usgs-2002-2003` (as trilhas de 69,27°W a 62,04°W: a fossa inteira, USGS18 l. 21). Mas a câmera desce só ao trecho oeste, e quem vê o quadro vê o multifeixe só a oeste | à arte: a área acesa sai do quadro dos dois lados, ou a câmera mostra a fossa inteira antes de descer (achado A13) |
| TA259 | s02 | posição | a linha "≈ 83 MI · AGUADILLA" do ponto da costa de Aguadilla ao anel | CONFIRMADA (F005) | 134,3 km = 83,47 mi (Census); nunca de San Juan (116,7 mi) | — |
| TA260 | s04 | posição | o arco de círculo máximo das Marianas a Porto Rico, com "≈ 9,500 MI" | CONFIRMADA (F013) | 15,269.6 km = 9,488 mi (Vincenty) | — |

## Em especial (o que o despacho pediu)

### 1. Os 7 DIVERGE e os 6 NÃO ACHEI do laudo-delta, um por um

| id | o que era | na tela de hoje | atende? |
|---|---|---|---|
| PA013 (s12) | "BEFORE 1880" | "Photo from 1880 or earlier", uma legenda só para as duas pranchas (`_instrucoes_para_a_arte`) | sim (TA047, TA192, TA193) |
| PA015 (s13) | a faixa acesa não contém o alfinete | a instrução à arte manda a região conter o alfinete | sim no texto. A camada `mar-ao-norte-de-porto-rico.json` ainda acaba em 19,419°N, e quem a muda é o mapista (TA256) |
| PA026 (s16) | a p. 46 | a p. 8 (REG s16: "the REAL page 8"), com os dois grifos literais | sim (TA067, TA068) |
| PA037 (s21) | braças no jornal | nenhuma braça | sim (TA095, TA176) |
| PA047 (s30, que era s31) | o multifeixe só a oeste | o texto diz a fossa inteira; a REG faz a câmera descer ao trecho oeste | sim no texto. O enquadramento é LEVE (TA258, A13) |
| PA051 (s33) | "U.S. Geological Survey, 2003" | "Source: U.S. Geological Survey", sem 2003 | sim. Mas o §7 pede o ano da fonte, 2018: o meu conserto de antes tirava o ano, e erra nisso (A7) |
| PA054 (s36) | "+4,000 FT" | "+4,265 FT" | sim (TA158) |
| PA006 (s05, s30) | um sítio do mergulho de 1964 no mapa | nenhum rótulo de sítio. Mas a REG (s05 b0–b1, s30 b2) e o CON (s30 p3) ainda pedem a silhueta e o retalho "fora do trecho mais fundo" | não, no desenho (TA253, A3) |
| PA007 (s05, s06, s26) | "o fundo bem abaixo" da linha dos peixes | nenhuma cota de fundo. Mas a REG e o CON ainda desenham "o chão hachurado bem abaixo" | não, no desenho (TA254, A3) |
| PA009 (s08) | "(UNTIL AT LEAST 2019)" | a s08 não tem, e a regra da série o tira da s56 | sim (TA030) |
| PA023 (s15) | a temperatura como número | nenhum número | sim (TA065) |
| PA036 (s21) | "NEWSPAPERS" | "28,680 FT · THE SUN, 1939" | sim (TA095) |
| PA057 (s36) | "where the layer once stood" | "RECONSTRUCTED · USGS", sem "once stood" | sim (TA156) |

### 2. Os cards

- **Brownson (s14):** "W. H. BROWNSON" e "Lieutenant-Commander, U.S. Navy · commanding the Blake, 1883", com "Photo from about 1900–1909", estão CONFIRMADOS (TA054–TA056, TA190).
  - O posto, com hífen, é o do relatório do próprio ano: "Lieutenant-Commander Brownson left Hamilton" (CGS l. 5809).
  - O comando: de 01/10/1882 (CGS, App. 5) "until 1884" (NHHC). Em 27/01/1883 ele comandava o Blake.
- **Nares (s17):** "Capt. George Nares", sem "Sir", com "Photo from the 1870s", está CONFIRMADO (TA071, TA072). O `data_do_cargo` do contrato ("1873-03") é um mês em disputa, mas fica fora da tela (TA191, A11).

### 3. Os avisos do ano

As quatro cenas estão CONFIRMADAS, e o sha256 dos 6 arquivos confere com o disco e com o veredito (TA192–TA197):
- **s12:** "Photo from 1880 or earlier", uma legenda só na margem comum das duas pranchas;
- **s14:** "Photo from about 1900–1909";
- **s17:** "Engraving, 1872" e "Photo from the 1870s";
- **s19:** "Photo from 1942", com o "1939" solto, longe da foto.

### 4. A série 28,675 / 27,487

A forma é fiel: 8,740 m = 28,674.5 ft (a Tabela 1) e 8,378 m = 27,486.9 ft (Bongiovanni 2021). Contra a voz, cena por cena:

| cena | o que a voz diz | a conta com a série | lote |
|---|---|---|---|
| s02 | "more than five miles down" | 27,487 ft = 5.21 mi | A: confere (TA005, TA006) |
| s09 | não diz o número; "more than 1,000 feet too deep" | 28,675 − 27,487 = 1,188 | A: confere (TA035–TA037) |
| s50 | "about 27,500 feet. Give or take about 16 feet" | 27,487 ± 16 | B (a conta confere) |
| s56 | "about 28,700 feet"; "almost exactly what the newspapers reported in 1939"; "about 1,200 feet shallower" | 28,675; a 5 ft de 28,680; 1,188 | B (a conta confere) |
| s57 | "the USGS sonar had shown a shallower floor since 2003" | ~27,300 < 28,675 | B (a conta confere) |
| s58 | "about 24,400 feet, the top of a ridge" | 7,450 m = 24,442 ft | B (a conta confere) |

- A voz só diz esses números arredondados ("about"), e a tela põe a constante publicada. As duas formas são compatíveis em toda cena.
- A regência e o conceito ainda escrevem 28,700 e 27,500 na s09, s55 e s57, e o pedido a montante está feito.
- Na régua (TA243), a diferença é de 1,25 px (28,675 contra 28,700) e de 0,65 px (27,487 contra 27,500): nenhuma posição desenhada muda à vista.
- O veredito de s50 e s56–s58 é do lote B. Aqui vai só a aritmética.

### 5. s36

"+4,265 FT" confere: +1,300 m = 4,265.1 ft, e a voz diz "more than 4,000 feet" (TA158). A legenda "RECONSTRUCTED · USGS" fica no ar de 0,933 a 9,9 s e cobre os dois números, o "+4,265 FT" (desde 4,367 s) e o "≈ −13,000 FT" (desde 7,367 s) (TA156). Sem "once stood".

### 6. s16

Os dois grifos conferem letra a letra, na p. 8 (PDF p. 35, CGS l. 3516–3518), e a REG pede "the REAL page 8" (TA067, TA068):
- "and the specimen-cup brought up brown ooze" (no OCR, "specimen·cup": o "·" é o hífen);
- "No record is known of any sounding from which bottom specimen and temperature have been obtained at a depth equaling this."

### 7. s21

- O título, o subtítulo e o parágrafo conferem letra a letra com o texto da página (TA091, TA093). "Atlan/tic" é a quebra de linha do OCR.
- **A assinatura:** NÃO ACHEI a vírgula de "Washington, D. C." (TA092). O texto que existe tem "Washington. D. C.—WNU Service.", mas o mesmo OCR troca vírgula por ponto no cabeçalho ("THE SUN. NEWBERRY."). A vírgula é provável, mas só a imagem decide, e isso é da Sala.
- **O cabeçalho:** "· P. 3" é NÃO ACHEI (TA090). A página do acervo diz "Image 3", e o número impresso não está no texto.

### 8. s29

Nenhum texto liga a foto da enguia viva (Salmon Bank, Havaí) ao exemplar de 1970:
- a pílula "CUSK-EEL (OPHIDIIDAE)" sai em 4,8 s;
- a foto sai em 5,1 s (184,6 s);
- a ficha do museu, com "Puerto Rico Trench", entra em 5,1 s (TA122, TA124–TA127).

O "~8 IN" (o exemplar de 1970, 20 cm) entra em 3,733 s, com a foto ainda na mesa. Ele é do contorno de traço na rede, e não da foto. Fica uma instrução à arte para não ficar entre as duas (A14).

### 9. s05 e s30

O texto atende: nenhum rótulo de sítio, nenhuma cota de fundo, e o "~1 MI" é só a escala. O desenho não atende: a REG e o CON ainda põem o batiscafo e o retalho "fora do trecho mais fundo" e o chão "bem abaixo" (TA253, TA254, A3). Também a escala do retalho: 1 mi ≈ 4 px na pose P0 (TA252, A4).

### 10. s10 e s11

Os dois caminhos estão escritos e conferem (TA040–TA046):
- **sobre a ISS071-E-1042:** "San Juan, Puerto Rico", nunca "Aguadilla" (PA059, PB143). O "San Juan area, Puerto Rico" fica para o recorte que pegar os municípios vizinhos;
- **sobre o clipe da caça:** "Aguadilla, Puerto Rico" só se a origem dele nomear Aguadilla, e o crédito só se o clipe for do Shutterstock. O clipe não existe: os dois esperam o veredito dele;
- **na s11:** nada nos dois caminhos, e no mapa de reserva só as duas linhas de crédito.

### 11. s33 e s08

- **s33:** o crédito vai sem "2003" (PA051 atendido). Falta o ano da fonte, 2018 (A7).
- **s08:** sem "(UNTIL AT LEAST 2019)" (TA030).

### 12. Os créditos (ID7: "Source: <instituição>, <ano>"; o de mídia, "<autor> / <acervo> · <licença>")

- **Conferem na fonte e na forma:**
  - s02, s03, s05, s06, s09, s15, s18, s20, s25, s26 e s29, os "Source:";
  - s08, s24 e s32, os de mídia;
  - GEBCO e MapTiler, em todo mapa.
- **Sem crédito na tela, como o §7 manda para domínio público** (os vereditos da CM): s01, s10, s12, s14, s16, s17, s19, s27 e s29 (a foto).
- **Sem o ano:**
  - s28 e s30, que deve ser "Source: NOAA Ocean Exploration, 2026" (a página: "Published January 14, 2026");
  - s33 e s36, que deve ser "Source: U.S. Geological Survey, 2018" (a página: "August 22, 2018").
- **A fonte errada:** s35 (A1).

## Achados acionáveis

- **A1 · [MÉDIO] TA153 e TA186 · s35.** O crédito "Source: U.S. Geological Survey" entra em 9,9 s, junto com "≈ ¾ IN/YR (20 MM/YR)". Nenhuma fonte do USGS lida dá essa taxa: ela é de Stewart & Jamieson 2019, citando DeMets et al. 2010 (SJ l. 554–556). A `fonte` de `rotulos_dado[21]` cita o OFR, que não tem a taxa, e LR F213–F216, que são das Sandwich do Sul.
  - **CONSERTO:** na entrada [153] da s35 (9,9–22,367 s), "Sources: Stewart & Jamieson, 2019; U.S. Geological Survey, 2006". Ou, partido: "Source: Stewart & Jamieson, 2019" de 9,9 a 13,6 s, e a linha com os dois a partir de 13,6 s. Em `rotulos_dado[21].fonte`: "Stewart & Jamieson, 2019, citando DeMets et al., 2010 (SJ l. 554–556; LR F091, F092)".
  - **RAIZ:** PONTUAL.
- **A2 · [MÉDIO] TA255 · s35.** A REG s35 b0 diz "NORTH AMERICAN PLATE below the trench, CARIBBEAN PLATE above". Com o norte para cima, é o contrário: a placa norte-americana é a do mar aberto, ao norte da fossa, e Porto Rico fica na do Caribe, ao sul (USGS18 l. 39; OFR: "the deep trench north of it"). Os textos estão certos, e quem erraria é o lugar onde a arte os põe.
  - **CONSERTO:** nova linha em `_instrucoes_para_a_arte`: "s35 (e s33 › b3): NORTH AMERICAN PLATE ao norte da fossa, sobre o mar aberto; CARIBBEAN PLATE ao sul, do lado de Porto Rico. A regência diz 'below/above' no sentido inverso." E um item em `_pedidos_a_montante` para a regência.
  - **RAIZ:** INSTRUÇÃO.
- **A3 · [MÉDIO] TA253 e TA254 · s05, s06, s26, s30 (PA006 e PA007).** O texto atende, mas a REG e o CON, que a arte segue, ainda pedem duas coisas sem fonte: o batiscafo e o retalho "fora do trecho mais fundo", e "o chão hachurado bem abaixo" da linha dos peixes. Nenhuma linha de `_instrucoes_para_a_arte` diz o contrário.
  - **CONSERTO:** duas linhas em `_instrucoes_para_a_arte`. A primeira: "s05 e s30 › b2: a silhueta do batiscafo e o retalho sem posição que se leia como o sítio de 1964 e sem relação com o trecho mais fundo; basta nunca tocar o anel." A segunda: "s05 › b2, s06 e s26: a linha dos peixes sobre o fundo em declive, sem o fundo da fossa desenhado abaixo dela." E um pedido a montante para a regência (s05 b0–b2, s26, s30 b2) e o conceito (s26, s30 p3).
  - **RAIZ:** INSTRUÇÃO.
- **A4 · [MÉDIO] TA252 e TA133 · s30.** O "~1 MI" dá escala a um retalho sobre a fossa inteira. Na pose P0, 1 mi ≈ 4 px no quadro de 3840 px, e um retalho visível de 30–40 px seria de ~8–10 mi.
  - **CONSERTO:** em `_instrucoes_para_a_arte`: "s30 › b2: o retalho no tamanho real (~4 px na P0), apontado por um anel de chamada que não é o retalho; se o retalho tiver de ser maior para se ver, a cota '~1 MI' sai."
  - **RAIZ:** INSTRUÇÃO.
- **A5 · [LEVE] TA090 · s21.**
  - **CONSERTO:** em vez de "THE SUN (NEWBERRY, S.C.) · JULY 28, 1939 · P. 3", "THE SUN (NEWBERRY, S.C.) · JULY 28, 1939". Ou o "P. 3" fica, se a Sala ler o número na imagem.
  - **RAIZ:** PONTUAL.
- **A6 · [LEVE] TA092 · s21.** A vírgula de "Washington, D. C." não está no texto.
  - **CONSERTO:** a Sala confere na imagem. Se a página tiver ponto, vai "Washington. D. C.—WNU Service.". Até lá, o texto não se diz literal nesse ponto.
  - **RAIZ:** PONTUAL.
- **A7 · [LEVE] TA121, TA132, TA146 e TA161.** Quatro créditos sem o ano que o §7 pede.
  - **CONSERTO:** "Source: NOAA Ocean Exploration, 2026" (s28, s30); "Source: U.S. Geological Survey, 2018" (s33, s36).
  - **RAIZ:** INSTRUÇÃO. A regra da série "A FONTE NA FAIXA" não diz que o ano vai sempre, e o meu conserto do PA051 já tinha tirado o ano.
- **A8 · [LEVE, opcional] TA062 e TA064 · s15.** O mesmo número aparece ao mesmo tempo como "60 MI EAST" e como "≈ 60 MI". A conta (59.75 mi) aceita as duas formas, mas o próprio `_escolhas` diz que um número em duas formas são duas afirmações.
  - **CONSERTO:** uma forma só: a etiqueta "1883 · WIRE · 27,366 FT · ≈ 60 MI EAST", ou a linha "60 MI".
  - **RAIZ:** PONTUAL.
- **A9 · [LEVE] TA053 · s13.** A nota diz "(19°39'50"N 66°23'40"W)". O relatório e o alfinete dizem 19°40'50"N.
  - **CONSERTO:** "(19°40'50"N 66°23'40"W)".
  - **RAIZ:** PONTUAL.
- **A10 · [LEVE] as citações do contrato.** Os ids estão trocados:
  - na nota da [007] e em `rotulos_dado[1]` e `[2]`, "PA004" deve ser "PA002";
  - em `rotulos_dado[7]`, "PA011" deve ser "LR F027";
  - em `rotulos_dado[8]`, "PA019–PA022" deve ser "LR F032–F035; PA021, PA022";
  - na nota da [065], "PA019–PA023" deve ser "PA021–PA023; LR F032–F035".
  - **RAIZ:** PONTUAL. Um portão que casa ids leria o PA004 do Everest.
- **A11 · [LEVE] TA174 e TA191.**
  - **CONSERTO:** em `rotulos_dado[9].data`, "1873 ou 1875 (em disputa, LR F041); fora da tela". O `data_do_cargo` de Nares em `cards_pessoa`, idem. O IHR diz "On 26th March 1875", e nenhuma cópia local dá março de 1873.
  - **RAIZ:** PONTUAL.
- **A12 · [LEVE] TA250 e TA251 · s03 e s36.** As proporções não estão escritas.
  - **CONSERTO:** em `_instrucoes_para_a_arte`: "s03: a linha d'água corta o Everest a 94,7 % da altura (1,545 de 29,032 ft de fora)"; "s36: a ponta alta acima do nível do mar a 1/3,08 da distância da ponta baixa (4,265 : 13,123 ft)".
  - **RAIZ:** INSTRUÇÃO.
- **A13 · [LEVE] TA258 · s30 › b4.** A REG desce a câmera "to the western stretch".
  - **CONSERTO:** em `_instrucoes_para_a_arte`: "s30 › b4: a área acesa do multifeixe sai do quadro dos dois lados, ou a câmera mostra a fossa inteira antes de descer (PA047)".
  - **RAIZ:** INSTRUÇÃO.
- **A14 · [LEVE] TA123 · s29.**
  - **CONSERTO:** em `_instrucoes_para_a_arte`: "s29: o '~8 IN' preso à enguia de traço dentro da rede, do lado oposto à foto, nunca entre as duas".
  - **RAIZ:** INSTRUÇÃO.
- **A15 · [LEVE] TA011 · s04.** O crédito da MapTiler na vista do mundo só vale se houver tile dela no quadro, e hoje isso só está escrito na nota.
  - **CONSERTO:** `"_condicao": "só nos quadros com tile da MapTiler (o começo no Atlântico e a P0 do fim)"`.
  - **RAIZ:** PONTUAL.
- **A16 · [LEVE, opcional] TA155 · s35.**
  - **CONSERTO:** em vez de "Gravity anomaly: how far gravity falls below normal", "Gravity anomaly: how far gravity is from normal (here, below)". O OFR fala em "the most negative … anomaly", e a anomalia também pode ser positiva.
  - **RAIZ:** PONTUAL.

## LISTA DE NOMES (anônimo → pessoa nomeável)

| como está | pessoa | credencial | de onde |
|---|---|---|---|
| "a Navy officer named Brownson" (s14) | Willard H. Brownson | Lieutenant-Commander, U.S. Navy, Assistant Coast Survey; no comando do Blake de 01/10/1882 a 1884 | CGS l. 5804–5805 e 11455; NHHC (lido pela Sala, 28/10/2026); en.wikipedia.org/wiki/Willard_H._Brownson |
| "Captain Nares" (s17) | George Strong Nares | Captain, Royal Navy, no comando do HMS Challenger "from 1872 down to the end of 1874" | IHR p. 1; Men of Mark (CM s17) |
| "the agency" e "By the agency's reconstruction" (s35–s37) | Uri ten Brink | "chief Scientist" do último cruzeiro do USGS, no Woods Hole Coastal and Marine Science Center. A página de 2018 não tem autor | OFR l. 17 |
| "Source: Australian Museum, 2020" (s29) | Mark McGrouther | autor da página do museu, atualizada em 30/03/2020 | AM l. 14–20 |
| "a crew" (1964) e "the report" (s05, s26, s27) | NÃO ACHEI | nenhuma fonte lida nomeia quem estava a bordo nem o autor do relato de 1965 (como no laudo-delta) | JAM l. 7 |
| "a net" (1970) (s28, s30) | NÃO ACHEI | de que navio e de quem era a rede, nenhuma fonte lida diz | NOAA l. 26 |

## PADRÕES (os 2 mais vistos)

1. **O texto atende o laudo, e a instrução de desenho não.** O que o texto tirou (o sítio de 1964, o chão bem abaixo, o multifeixe só a oeste), e uma posição que o texto nem toca (o lado de cada placa), continuam na regência e no conceito, que a arte lê. Sem uma linha em `_instrucoes_para_a_arte`, a arte desenha o que o texto deixou de dizer.
2. **A fonte escorrega para o vizinho.** Um crédito que entra com um número é a fonte de outro número da mesma cena (s35). E o contrato cita ids de fonte deslocados: PA004 por PA002, PA011 por F027, PA019 por PA021.

## Para o redator-de-tela

As mudanças no `textos-tela.json`, pela ordem de `_textos_por_cena` do lote (o nº é o do TA):

| ref. | cena | hoje | o certo | gravidade |
|---|---|---|---|---|
| ref. TA153 | s35 | "Source: U.S. Geological Survey" (9,9–22,367 s) | "Sources: Stewart & Jamieson, 2019; U.S. Geological Survey, 2006" | MÉDIO |
| ref. TA186 | s35 | `rotulos_dado[21].fonte` "USGS (… ofr2006-1210 …); LR F213–F216" | "Stewart & Jamieson, 2019, citando DeMets et al., 2010 (SJ l. 554–556; LR F091, F092)" | MÉDIO |
| ref. TA255 | s35 | (nenhuma instrução) | a instrução das placas do A2 | MÉDIO |
| ref. TA253, TA254 | s05, s06, s26, s30 | (nenhuma instrução) | as duas instruções do A3 | MÉDIO |
| ref. TA252 | s30 | (nenhuma instrução) | a instrução do retalho do A4 | MÉDIO |
| ref. TA090 | s21 | "THE SUN (NEWBERRY, S.C.) · JULY 28, 1939 · P. 3" | "THE SUN (NEWBERRY, S.C.) · JULY 28, 1939" | LEVE |
| ref. TA121, TA132 | s28, s30 | "Source: NOAA Ocean Exploration" | "Source: NOAA Ocean Exploration, 2026" | LEVE |
| ref. TA146, TA161 | s33, s36 | "Source: U.S. Geological Survey" | "Source: U.S. Geological Survey, 2018" | LEVE |
| ref. TA062 | s15 | "60 MI EAST" ao lado de "≈ 60 MI" | uma forma só (A8) | LEVE, opcional |
| ref. TA053 | s13 | a nota "19°39'50"N" | "19°40'50"N" | LEVE |
| ref. A10 | contrato | PA004, PA011, PA019–PA022/23 | PA002, LR F027, LR F032–F035 com PA021–PA023 | LEVE |
| ref. TA174, TA191 | s18, s17 | "1873" e "1873-03" | "1873 ou 1875 (em disputa, LR F041); fora da tela" | LEVE |
| ref. TA250, TA251, TA258, TA123 | s03, s36, s30, s29 | (nenhuma instrução) | as instruções do A12, do A13 e do A14 | LEVE |
| ref. TA011 | s04 | a condição só na nota | o campo `_condicao` (A15) | LEVE |
| ref. TA155 | s35 | "Gravity anomaly: how far gravity falls below normal" | "Gravity anomaly: how far gravity is from normal (here, below)" | LEVE, opcional |

O que não muda: todo o resto da tabela. Em especial a série do medidor, os cards, os avisos, os grifos de s08, s16, s21 e s29, os dois caminhos de s10 e s11, e os créditos de mídia.

## Para a Sala

**NÃO FOI CHECADO.** Faltou insumo, e isto não autoriza dizer nada:
1. **A vírgula de "Washington, D. C." e o número impresso da página do jornal de 1939** (s21). Os dois só se leem na imagem da página, e eu não abro imagem nesta tarefa. A página: historicnewspapers.sc.edu/lccn/sn93067784/1939-07-28/ed-1/seq-3/. O acervo não recusou: lido em 29/10/2026, ele dá "Image 3".
2. **O clipe da caça de s10 e s11:** o rótulo de lugar e o crédito dele esperam o veredito do conferente sobre um arquivo que ainda não existe. O molde "<artista>/Shutterstock.com" não é texto de tela: ele sai, e entra o `credito_na_tela` do veredito.
3. **A arte final:** o que conferi nas escalas e posições (TA243–TA260) é a instrução que a arte vai seguir, e não o desenho. Os portões de cena e o `qc-visual` medem o desenho.
4. **Os nomes da tripulação de 1964 e do autor do relato de 1965:** nenhuma fonte lida os dá.

**Divergência da voz:** nenhuma que contradiga, e nada a regravar. As formas que diferem de propósito, todas compatíveis com a fonte:
- s32: a tela escreve "Ronald H. Brown", e a voz diz "the Ron Brown". O apelido está na própria fonte (USGS18 l. 23: "(NOAA) ship Ron Brown").
- s14: "W. H. BROWNSON", e a voz diz "Brownson". s17: "Capt. George Nares", e a voz diz "Captain Nares".
- s04: "Mariana Trench", e a voz diz "Mariana".
- s08: "the official list of undersea feature names", e a voz diz "the official list of undersea features". O nome do gazetteer é "of Undersea Feature Names".
- s10: a pergunta vai sem o "So" da fala.
- s21: a tela mostra um jornal ("THE SUN, 1939"), e a voz diz "newspapers printed the news". O "WNU Service" é o sindicato que distribuía o boletim (LR F053).
- Os números: a tela põe a constante publicada (27,487, 28,675, 27,366, 23,250, +4,265, ~27,460), e a voz, a forma arredondada.

**Para o lote B:**
- A mesma taxa "≈ ¾ IN/YR (20 MM/YR)" volta na s63 › b4. Se o crédito de lá também for do USGS, vale o A1.
- A aritmética da série em s50 e s56–s58 confere (o item 4 acima), mas o veredito é do lote B.

**Pedidos a montante que este laudo acrescenta** (a regência e o conceito, que o redator não edita):
- s35 b0: o lado das placas (A2);
- s05 b0–b2, s26 e s30 b2, e o conceito s26 e s30 p3: o sítio e o chão (A3);
- s30 b4: o enquadramento do multifeixe (A13).

COBERTURA: 260 de 260
NOTA: 8,4/10
VEREDITO: RESSALVA

## Reconferência 1 (textos-tela 4a0566b6)

Data-base: 29/10/2026, das 05:20 às 05:40, hora de Brasília.

**O objeto:** `out/atlantico-fundo/textos-tela.json`, sha256 `4a0566b639376c949f381af576da2ce15cfb99ce40dff07da8766f02e6c169e6`. A cópia de antes (`out/atlantico-fundo/_tmp/redator/antes-consertos-1/textos-tela.json`) tem o sha256 `418ad23e…`, o mesmo do objeto da tabela acima.

**Como a lista foi derivada:** por script, a diferença entre as duas versões, campo a campo, em tudo que toca s01–s37:
- **as entradas de `_textos_por_cena` do lote:** 14 mudaram, e nenhuma entrou nem saiu (continuam 164);
- **`rotulos_dado`:** 6 do lote;
- **`cards_pessoa`:** 1;
- **`glossario`:** nenhuma do lote (as duas mudanças são de s39, s45 e s60);
- **as linhas novas ou trocadas** de `_instrucoes_para_a_arte`, `_pedidos_a_montante`, `_espera_a_sala`, `_nao_conferido`, `_escolhas`, `_regras_de_serie` e `_ritmo_max` que citam cenas do lote ou regras que elas usam.

O que mudou só no lote B (s39, s45, s50, s52, s58, s60, s63, s67, s69, s72, s73, s75) fica fora. O `_consertos` lista exatamente essas mudanças, sem nenhuma a mais no lote. M = 43.

### A tabela da reconferência

| id | onde | antes → agora | veredito | fonte e trecho | achado |
|---|---|---|---|---|---|
| R1-01 | s02, a nota do crédito [007] | "PA004" → "PA002" | CONFIRMADA | PA002 é o crédito de Bongiovanni no laudo-delta | A10, atendido |
| R1-02 | s04, o crédito da MapTiler [011] | a condição só na nota → `_condicao` "só nos quadros com tile da MapTiler (o começo no Atlântico e a P0 do fim)" | CONFIRMADA | REG s04 b0 (a vista do mundo sobre `gebco-mundo-relevo`) e b1 (a volta à P0) | A15, atendido |
| R1-03 | s13, a nota de "1883 · BLAKE" [053] | "19°39'50"N" → "19°40'50"N 66°23'40"W" | CONFIRMADA (F034) | CGS l. 5826: "19° 40' 50" north, longitude 66° 23' 40" west of Greenwich" | A9, atendido |
| R1-04 | s15, a nota da cota de 2,866 s [061] | "60 MI EAST" → "≈ 60 MI EAST … a mesma forma da linha" | CONFIRMADA (F035) | 59.75 mi | A8, atendido |
| R1-05 | s15, a cota [062] | "1883 · WIRE · 27,366 FT · 60 MI EAST ⏎ 4,561 FATHOMS" → "1883 · WIRE · 27,366 FT · ≈ 60 MI EAST ⏎ 4,561 FATHOMS" | CONFIRMADA (F032–F035) | CGS: "four thousand five hundred and sixty-one fathoms"; 4,561 × 6 = 27,366 ft; 59.75 mi a leste (o alfinete em 66.394°W, o anel em 67.311°W). É a mesma forma da linha "≈ 60 MI" | A8, atendido |
| R1-06 | s15, a nota do crédito [065] | "PA019–PA023" → "PA021–PA023; LR F032–F035" | CONFIRMADA | os ids certos | A10, atendido |
| R1-07 | s21, o cabeçalho [090] | "THE SUN (NEWBERRY, S.C.) · JULY 28, 1939 · P. 3" → "THE SUN (NEWBERRY, S.C.) · JULY 28, 1939" | CONFIRMADA (F054) | SUN l. 209: "THE SUN. NEWBERRY. S. C- FRIDAY. JULY 28, 1939" | A5, atendido |
| R1-08 | s21, a assinatura [092] | a nota "literal … da leitura do _dados" → "a vírgula é normalização: o OCR lê 'Washington. D. C.'"; e a `_condicao` com a forma do ponto | NÃO ACHEI (a vírgula); o conserto foi aplicado | SUN l. 19: "Washington. D. C.—WNU Service." A `_condicao` é o OCR letra a letra, e a nota não diz mais "literal" | A6, atendido no que o texto pode; a imagem é da Sala |
| R1-09 | s28, o crédito [121] | "Source: NOAA Ocean Exploration" → "Source: NOAA Ocean Exploration, 2026" | CONFIRMADA (PA043) | NOAA l. 30: "Published January 14, 2026" | A7, atendido |
| R1-10 | s30, o crédito [132] | idem | CONFIRMADA (PA043) | idem | A7, atendido |
| R1-11 | s33, o crédito [146] | "Source: U.S. Geological Survey" → "Source: U.S. Geological Survey, 2018" | CONFIRMADA | USGS18 l. 15: "By Woods Hole Coastal and Marine Science Center August 22, 2018"; o "8300-8340 m deep" está na mesma página (l. 25) | A7, atendido |
| R1-12 | s35, o crédito [153] | "Source: U.S. Geological Survey" → "Sources: Stewart & Jamieson, 2019; U.S. Geological Survey, 2006" | CONFIRMADA (F091, F093) | SJ l. 554–556: "approximately 20 mm per year … (DeMets et al., 2010)"; OFR l. 3: "U.S. Geological Survey Open-File Report 2006-1210"; OFR l. 13: "-380 mGal" | A1, atendido |
| R1-13 | s35, a legenda [155] | "Gravity anomaly: how far gravity falls below normal" → "Gravity anomaly: how far gravity is from normal (here, below)" | CONFIRMADA | OFR l. 13: "the most negative free-air gravity anomaly on earth, -380 mGal" | A16, atendido |
| R1-14 | s36, o crédito [161] | "Source: U.S. Geological Survey" → "Source: U.S. Geological Survey, 2018" | CONFIRMADA (F095) | USGS18 l. 15 e l. 57: "(reconstructed) elevations of +1300 m and -4000 m" | A7, atendido |
| R1-15 | `rotulos_dado[1].fonte` | "PA004" → "PA002" | CONFIRMADA | — | A10, atendido |
| R1-16 | `rotulos_dado[2].fonte` | idem | CONFIRMADA | — | A10, atendido |
| R1-17 | `rotulos_dado[7].fonte` | "PA011" → "LR F027" | CONFIRMADA | LR F027: "taken on 27th January 1883" | A10, atendido |
| R1-18 | `rotulos_dado[8]` | o na_tela com "≈ 60 MI EAST"; a fonte "LR F032–F035; PA021, PA022" | CONFIRMADA | igual à cota da s15 (R1-05) | A10 e A8, atendidos |
| R1-19 | `rotulos_dado[9].data` | "1873 (a sondagem; …)" → "1873 ou 1875 (em disputa, LR F041); fora da tela" | CONFIRMADA | IHR p. 1: "On 26th March 1875"; LR F041; o laudo-delta, "Para a Sala": "Tudo favorece 1873" | A11, atendido |
| R1-20 | `rotulos_dado[21].fonte` | "USGS (… ofr2006-1210 …); LR F213–F216" → "Stewart & Jamieson, 2019, citando DeMets et al., 2010 (SJ l. 554–556; LR F091, F092)" | CONFIRMADA | SJ l. 554–556 | A1, atendido |
| R1-21 | `cards_pessoa[1].data_do_cargo` (Nares) | "1873-03" → "1873 ou 1875 (em disputa, LR F041); fora da tela" | CONFIRMADA | idem R1-19. A `fonte` do card ainda cita "a travessia de março de 1873" do laudo lote A, que é a leitura que o laudo-delta favorece: as duas são compatíveis | A11, atendido |
| R1-22 | instrução nova: s35 (e s33 › b3), as placas | NORTH AMERICAN PLATE ao norte da fossa, CARIBBEAN PLATE ao sul | CONFIRMADA | USGS18 l. 39: "between the North American plate and the northeast corner of the Caribbean plate"; OFR: "the deep trench north of it" | A2, atendido no textos-tela; a regência espera o pedido a montante |
| R1-23 | instrução nova: s05 e s30 › b2, o batiscafo e o retalho | sem posição de sítio e sem relação com o trecho mais fundo; "nunca tocar o anel" | CONFIRMADA | PA006: nenhuma fonte dá o sítio; o anel intocado é LR F064 ("but it did not reach the deepest point") | A3, atendido no textos-tela |
| R1-24 | instrução nova: s05 › b2, s06 e s26, a linha dos peixes | sobre o fundo em declive, sem o fundo da fossa abaixo | CONFIRMADA | JAM l. 7: "benthic epifauna … from depths of 7300 m" | A3, atendido no textos-tela |
| R1-25 | instrução nova: s30 › b2, o retalho | ~4 px na P0, ou sem a cota "~1 MI" | CONFIRMADA | 1 mi ≈ 4.09 px na P0 (73,0°W a 58,6°W em 3840 px, a 19,4°N) | A4, atendido |
| R1-26 | instrução nova: s30 › b4, o multifeixe | a área acesa sai do quadro dos dois lados, ou a fossa inteira primeiro | CONFIRMADA | USGS18 l. 21: "the entire 770-km-long trench" | A13, atendido |
| R1-27 | instrução nova: s03, o Everest | "a 94,7 % da altura (1,545 de 29,032 ft de fora)" | CONFIRMADA (F008, F009) | 27,487 / 29,032 = 94,68 % | A12, atendido |
| R1-28 | instrução nova: s36, a camada | "a 1/3,08 … (4,265 : 13,123 ft)" | CONFIRMADA (F096, F098) | 4,265.1 / 13,123.4 = 0,325 = 1/3,08 | A12, atendido |
| R1-29 | instrução nova: s29, o "~8 IN" | preso à enguia de traço na rede, do lado oposto à foto | CONFIRMADA | AM l. 28 (o exemplar de 20 cm); CM s29 (a foto é de Salmon Bank) | A14, atendido |
| R1-30 | instrução nova: "A FAIXA DE CRÉDITO E A FOLHA, um nó só cada" (s21, s57) | nova | NADA A CHECAR | é montagem (a conta do qc-carga), sem fato | — |
| R1-31 | pedido a montante: regência s35 › b0 (e s33 › b3) | novo | CONFIRMADA | idem R1-22 | A2, atendido |
| R1-32 | pedido a montante: regência s05 › b0–b2, s26 e s30 › b2; conceito s26 e s30 p3 | novo | CONFIRMADA | idem R1-23 e R1-24 | A3, atendido |
| R1-33 | pedido a montante: regência s30 › b4 | novo | CONFIRMADA | idem R1-26 | A13, atendido |
| R1-34 | `_espera_a_sala`: o ritmo da s21 (o grifo passaria de "newspapers" a "printed") | novo | NADA A CHECAR | é ritmo; o texto do grifo não muda e continua literal (SUN l. 23–24) | — |
| R1-35 | `_espera_a_sala`: o "· P. 3" volta se a Sala ler o número | novo | CONFIRMADA | o acervo diz "Image 3" (lido em 29/10/2026) | A5 |
| R1-36 | `_nao_conferido`: a vírgula de "Washington, D. C." | trocado | CONFIRMADA | SUN l. 19 | A6 |
| R1-37 | `_nao_conferido`: o plural "newspapers" da voz | novo | CONFIRMADA, com ressalva | É um jornal lido (SUN), e o "WNU Service" é o sindicato (LR F053). O PA036 é o da tela. O da voz é a observação "sustentação frágil, não erro" do laudo-delta. A conclusão ("O roteiro não muda") confere | — |
| R1-38 | `_nao_conferido`: o número da página | novo | CONFIRMADA | idem R1-35 | A5 |
| R1-39 | `_escolhas`: a rede de 1970 | "Source: NOAA Ocean Exploration" → "…, 2026" | CONFIRMADA | NOAA l. 30 | A7 |
| R1-40 | `_regras_de_serie[0]`: os marcadores | "60 MI EAST" → "≈ 60 MI EAST", "na forma da linha" | CONFIRMADA | a diferença, letra a letra: só os dois "≈ " e a frase "na forma da linha"; o resto da série é igual | A8 |
| R1-41 | `_regras_de_serie[2]`: o marcador de 1883 | idem | CONFIRMADA | idem | A8 |
| R1-42 | `_regras_de_serie[10]`: a fonte na faixa | "Source: <instituição>, <ano>", sempre com o ano da fonte lida: 2018 (a página do WHCMSC), 2006 (o OFR) e 2026 (NOAA Ocean Exploration) | CONFIRMADA | ID7; USGS18 l. 15; OFR l. 3; NOAA l. 30 | A7, com a raiz (INSTRUÇÃO) atendida |
| R1-43 | `_ritmo_max › estrito` (s21: 5) | novo | NADA A CHECAR | é contagem de ritmo | — |

### Os achados do laudo, um por um

| achado | atendido? |
|---|---|
| A1 (TA153, TA186) | sim (R1-12, R1-20) |
| A2 (TA255) | sim no textos-tela (R1-22, R1-31). A regência s35 › b0 ainda diz o inverso até a Direção aplicar o pedido |
| A3 (TA253, TA254) | sim no textos-tela (R1-23, R1-24, R1-32). A regência e o conceito, idem |
| A4 (TA252) | sim (R1-25) |
| A5 (TA090) | sim (R1-07, R1-35, R1-38) |
| A6 (TA092) | sim no que o texto pode (R1-08, R1-36). A vírgula continua NÃO ACHEI até a Sala ler a imagem, e a `_condicao` já dá a forma do ponto |
| A7 (TA121, TA132, TA146, TA161) | sim (R1-09–R1-11, R1-14, R1-39, R1-42) |
| A8 (TA062) | sim (R1-04, R1-05, R1-18, R1-40, R1-41) |
| A9 (TA053) | sim (R1-03) |
| A10 | sim (R1-01, R1-06, R1-15–R1-18) |
| A11 (TA174, TA191) | sim (R1-19, R1-21) |
| A12 (TA250, TA251) | sim (R1-27, R1-28) |
| A13 (TA258) | sim (R1-26, R1-33) |
| A14 (TA123) | sim (R1-29) |
| A15 (TA011) | sim (R1-02) |
| A16 (TA155) | sim (R1-13) |

### Os vereditos da tabela do lote que mudam

| item | antes | agora |
|---|---|---|
| TA090 | NÃO ACHEI | CONFIRMADA |
| TA153 | DIVERGE | CONFIRMADA |
| TA174 | NÃO ACHEI | CONFIRMADA |
| TA186 | DIVERGE | CONFIRMADA |
| TA253, TA254 | NÃO ACHEI | CONFIRMADA (a instrução do textos-tela) |
| TA255 | DIVERGE | CONFIRMADA (a instrução do textos-tela) |
| TA092 | NÃO ACHEI | NÃO ACHEI, à espera da imagem |

Nada novo a consertar no `textos-tela.json`.

### Para a Sala

- **A vírgula de "Washington, D. C."** (s21) é NÃO FOI CHECADO na imagem, que eu não abro. A página: historicnewspapers.sc.edu/lccn/sn93067784/1939-07-28/ed-1/seq-3/. Com ponto na imagem, vale a `_condicao`. Com vírgula, fica o texto de hoje.
- **Os pedidos a montante** (R1-31 a R1-33) seguem à Direção: o lado das placas na s35, o sítio de 1964 e o chão em s05, s26 e s30, e o enquadramento da s30 › b4. Até a regência e o conceito mudarem, a arte de s05, s06, s26, s30 e s35 recebe duas instruções que se contradizem. A Sala decide se manda a arte seguir o textos-tela ou se espera a Direção.
- **Divergência da voz:** nenhuma, e nada a regravar.

COBERTURA DA RECONFERÊNCIA: 43 de 43 (CONFIRMADA 39 · NÃO ACHEI 1 · NADA A CHECAR 3 · DIVERGE 0 · REFUTADA 0)
A SOMA DO LOTE, depois da reconferência: 260 de 260 · CONFIRMADA 254 · DIVERGE 0 · NÃO ACHEI 1 (TA092, a vírgula) · REFUTADA 0 · NADA A CHECAR 5
NOTA: 9,3/10
VEREDITO: PASS

---

# Lote B (s38–s75 e as seções gerais), como o verificador gravou

COBERTURA: 397 de 397 (o texto de tela do lote B, s38–s75, e as seções gerais do textos-tela.json; o denominador é derivado à mão, §1; 10 itens NADA A CHECAR ficam fora do M, declarados na tabela)

# Laudo de fatos — o texto de tela, lote B · `atlantico-fundo` (vídeo 4) · passo `screen_text`

- **Tarefa:** `atlantico-fundo-texto-1`, o laudo do texto de tela, lote B.
- **Peça:** `verificador-de-fatos`.
- **Data-base:** 29/10/2026, 05:0x (hora de Brasília, pelo `date` sem TZ).
- **O objeto:** `out/atlantico-fundo/textos-tela.json`, sha256 `418ad23e10523cadbeb1f1294853d20b411ac37f6679e455806859e816da3e8e`.
- **As entradas de hoje:**
  - regência `304ad420…`, espelho `ad3b18e9…`, conceito `beff3d33…` (commit `922718a`);
  - `conferencia-midia.json` `a9565fb8…`;
  - `roteiro-narrador.md` `ca4ac18d…`.
- **O apoio:**
  - o laudo-delta, `roteiros/atlantico-fundo/qc-roteiro/fatos-pesquisa-2026-10-29.laudo.md` (sha256 `f7808381…`; ids PA e PB);
  - o laudo do roteiro (`fatos.laudo.md` e `fatos-tabela.json`; ids F, aqui "LR").
- **O que já tinha veredito na mesma forma** cito pelo id e dou como CONFIRMADA, sem refazer. **O que mudou de forma conferi de novo:** a conversão, o arredondamento, o "~" e o "≈", a abreviação, o ano.
- Imagens abertas: 0. Nada foi gravado no canal. Os scripts e as cópias estão em `C:/Users/zangp/AppData/Local/Temp/claude/vf-atl-B/` (`scripts/gerar_tela.py`, `mapa_cena.py`, `mapa_glos.py`; `tela/`).

## 1 · Como a lista foi construída

O canal não tem extrator para o texto de tela. **O denominador saiu do próprio contrato**, por script e sem escolha (`scripts/gerar_tela.py`). Cada entrada vira uma linha:
1. as **237 entradas** de `_textos_por_cena` com cena-mãe de s38 a s75 (TB001–TB237), com cena, tempo, papel e texto copiados do JSON;
2. as **34 entradas** de `rotulos_dado` dessas cenas (TB238–TB271);
3. os **3 cards** de `cards_pessoa` (TB272–TB274);
4. o **aviso de s56** de `_avisos_do_ano` (TB275). Os outros seis são de s12 a s19 (lote A);
5. as **67 entradas** do glossário que vão à tela de s38 a s75, ou a todo mapa (TB276–TB342);
6. **as seções gerais**, item por item:
   - `_pergunta_cta`, 3 itens (TB343–TB345);
   - `_caca`, 4 (TB346–TB349);
   - `_escolhas`, 20 (TB350–TB369);
   - `_regras_de_serie`, 16 (TB370–TB385);
   - `_nao_conferido`, 4 (TB386–TB389);
7. **a proporção desenhada do gráfico da s58** (TB390), que não é texto, mas a tarefa a pede;
8. **as 17 respostas** de `_diverge_do_laudo_atendido` aos meus 14 DIVERGE e 3 NÃO ACHEI (TB391–TB407).

Total: **407 linhas**.
- **Fora do M:** 10 NADA A CHECAR.
  - Os "traços da régua", que não são texto.
  - Seis regras de desenho ou de estilo, sem fato.
  - Duas declarações de processo do redator.
  - O s11, que não tem texto.
- **M = 397**, e todos têm veredito: **N = 397**.
  - CONFIRMADA: 390.
  - DIVERGE: 7, todos periféricos, nenhum na voz nem na tese.
  - NÃO ACHEI: 0.
  - REFUTADA: 0.

**O limite do detector, declarado:**
- A lista é a do contrato: se o redator esqueceu um texto que a arte vai escrever, ele não está aqui.
- Achei dois que a regência pede e o contrato não tem.
  - O nome "Dominican Republic" na s39 › b3 ("with its name"): o contrato não o escreve. Não é erro de fato, e vai ao redator-de-tela (§5, s39).
  - A linha da licença do Shutterstock na s75, se a caça trouxer clipe de lá (TB023, TB067).
- A grafia contra a voz foi lida no `roteiro-narrador.md`, l. 38–82 (o lote B inteiro).

## 2 · As fontes (a chave usada na tabela)

| chave | fonte | URL / arquivo |
|---|---|---|
| [USGS] | USGS WHCMSC, "Caribbean Tsunami and Earthquake Hazards Studies – Seafloor Map" (página de 22/08/2018) | https://www.usgs.gov/centers/whcmsc/science/caribbean-tsunami-and-earthquake-hazards-studies-seafloor-map · `FONTES/fb-usgs-seafloor-map.txt` |
| [USGS-FOTO] | a foto do bloco de coral (USGS) | https://www.usgs.gov/media/images/brain-coral-boulder-brought-ashore-large-waves |
| [NCEI] | NOAA NCEI, evento de tsunami 1458 | https://www.ngdc.noaa.gov/hazel/hazard-service/api/v1/tsunamis/events/1458/info |
| [KIL] | Kilbourne et al., GRL, 2025 | https://hal.science/hal-05463233v1 · `FONTES/03-kilbourne-2025-grl-hal-05463233.txt` |
| [WEI] | Wei, ten Brink & Atwater, JGR, 2024 | https://repository.library.noaa.gov/view/noaa/61168 |
| [EX1502] | NOAA, EX1502L3, mergulho 09 e relatório | https://repository.library.noaa.gov/view/noaa/21287 · https://repository.library.noaa.gov/view/noaa/10424 |
| [BONG] | Bongiovanni, Stewart & Jamieson, Geoscience Data Journal, 2021 | https://doi.org/10.1002/gdj3.122 |
| [SJ19] | Stewart & Jamieson, Earth-Science Reviews, 2019 (CC BY 4.0) | https://doi.org/10.1016/j.earscirev.2019.102896 |
| [SJ18] | Stewart & Jamieson, Progress in Oceanography, 2018, Tabela 1 | https://storre.stir.ac.uk/bitstream/1893/27792/1/1-s2.0-S0079661117302768-main.pdf |
| [REL] | Five Deeps, release de 21/12/2018 | https://fivedeeps.com/wp-content/uploads/2019/01/PRT-Five-Deeps-Dive-Release-FINAL1221-1.pdf |
| [FD-ATL] | Five Deeps, a página do Atlântico | https://fivedeeps.com/home/expedition/atlantic/ |
| [POPSCI] | Popular Science, 21/12/2018 | https://www.popsci.com/victor-vescovo-five-deeps-submarine |
| [BGS] | BGS, 11/05/2021 | https://www.bgs.ac.uk/news/deepest-points-of-the-indian-ocean-and-southern-ocean-revealed/ |
| [SUN] | The Sun (Newberry, S.C.), 28/07/1939, p. 3 (OCR) | https://historicnewspapers.sc.edu/lccn/sn93067784/1939-07-28/ed-1/seq-3/ocr/ · `FONTES/fb-thesun-1939-07-28-p3-ocr.txt` |
| [GAZ] | a API do GEBCO Gazetteer (NOAA NCEI), relida HOJE | https://www.ngdc.noaa.gov/gazetteer/api/v1/feature?nameContains=Milwaukee |
| [NOAA-EEZ] | NOAA, "What is the EEZ?" | https://oceanservice.noaa.gov/facts/eez.html |
| [MR] | Marine Regions, a licença e a citação | https://www.marineregions.org/disclaimer.php |
| [GEBCO] | a documentação da grade GEBCO 2026 e os termos | `out/atlantico-fundo/_tmp/pesquisa-geo/baixado/gebco-cesta-1/GEBCO_Grid_documentation.txt` · https://www.gebco.net/data-products/gridded-bathymetry/terms-of-use |
| [NASA-EO] | NASA Earth Observatory, "A Bright Spot at Mount Michael" | https://science.nasa.gov/earth/earth-observatory/a-bright-spot-at-mount-michael/ |
| [M3] | IHO Publication M-3 ("2nd Edition 2010 - Updated September 2026") | `FONTES/09-iho-M3-E-2026.txt` (p. 123–124) |
| [NORA] | Jamieson et al., Deep-Sea Research I, 2020 (o resumo) | https://nora.nerc.ac.uk/id/eprint/528113/ |
| [NOAA-FISH] | NOAA Ocean Exploration, "What is the deepest living fish?" ("Published January 14, 2026") | https://oceanexplorer.noaa.gov/ocean-fact/what-is-the-deepest-living-fish/ |
| [NOAA-SAMOA] | NOAA Ocean Exploration, o pepino-do-mar nadador e a EX2606 | https://oceanexplorer.noaa.gov/multimedia/sea-cucumber-swimming/ · https://oceanexplorer.noaa.gov/expedition/ex2606/ |
| [IHR 1936] | International Hydrographic Review, 1936 | `FONTES/04-ihr-1936-naming-nares-puerto-rico-deeps.txt` |
| [CM] | conferencia-midia.json `a9565fb8` | `out/atlantico-fundo/_pesquisa/conferencia-midia.json` |

`FONTES/` = `midia/atlantico-fundo/fontes/`.

## 3 · A tabela

| id | cena · t0–t1 (s) · papel | texto de tela | veredito | fonte (id ou trecho literal) | conserto |
|---|---|---|---|---|---|
| TB001 | s38 · 0.867–9.2 · cota | 2002–2003 · USGS · ~27,300 FT (8,300–8,340 M) | CONFIRMADA | PB001, PB065: [USGS] '8300-8340 m deep'; 'three cruises in 2002 and 2003'. 8,300–8,340 m = 27,231–27,362 ft | — |
| TB002 | s38 · 1.767–9.2 · legenda | Rotated blocks | CONFIRMADA | PB002: [USGS] 'underlain by rotated blocks of the NOAM plate that indicate trench subsidence' | — |
| TB003 | s38 · 0–9.2 · credito | Source: U.S. Geological Survey | **DIVERGE** | Forma da identidade §7 ('Source: <instituição>, <ano>'): falta o ano. A página lida é 'By Woods Hole Coastal and Marine Science Center August 22, 2018' (PA051); 2002–2003 é o ano dos cruzeiros, não da fonte | Source: U.S. Geological Survey, 2018 |
| TB004 | s39 · 0–28.8 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB005 | s39 · 0–28.8 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB006 | s39 · 4.0–13.533 · credito | Source: U.S. Geological Survey | **DIVERGE** | Forma da identidade §7 ('Source: <instituição>, <ano>'): falta o ano. A página lida é 'By Woods Hole Coastal and Marine Science Center August 22, 2018' (PA051); 2002–2003 é o ano dos cruzeiros, não da fonte | Source: U.S. Geological Survey, 2018 |
| TB007 | s39 · 7.267–13.533 · legenda | Old underwater landslides | CONFIRMADA | PB004; LR F105–F106: [USGS] 'numerous retrograde slope failures'; a voz 'many old underwater landslides' | — |
| TB008 | s39 · 9.033–13.533 · citacao | “APPEARS TO BE HIGH” · USGS | CONFIRMADA | PB003 (literal): [USGS] 'Tsunami hazard … from submarine slope failures appears to be high.' | — |
| TB009 | s39 · 13.667–19.033 · cota (_bloco: out-1918) | OCT. 1918 | CONFIRMADA | PB005: [NCEI] 1918-10-11; a voz 'In October 1918' | — |
| TB010 | s39 · 19.033–24.533 · cota (_bloco: out-1918) | OCT. 1918 · NOT IN THE TRENCH | CONFIRMADA | PB006; LR F109: epicentro 18.7°N, 67.189°W, a falha do Cânion de Mona | — |
| TB011 | s39 · 16.3–24.533 · rotulo | Mona Passage | CONFIRMADA | PB005: [NCEI] 'PUERTO RICO: MONA PASSAGE' | — |
| TB012 | s39 · 22.4–28.8 · cota | M 7.1 · NOAA NCEI | CONFIRMADA | PB007: [NCEI] eqMagnitude 7.1; o banco cita também M 7.5, e a atribuição fica | — |
| TB013 | s39 · 26.033–28.8 · cota | UP TO 20 FT (6.1 M) · NOAA NCEI | CONFIRMADA | PB010: [NCEI] maxWaterHeight 6.1; 6.1 m = 20.01 ft; só no mapa da costa oeste (b5), nunca sobre a foto | — |
| TB014 | s39 · 28.8–32.4 · credito | El Mundo / Universidad de Puerto Rico | CONFIRMADA | PB013, PB148: [CM] s41, credito_na_tela; Commons, Artist 'Colección de Fotos del Periódico El Mundo: 1918', Credit 'Universidad de Puerto Rico, Recinto de Río Piedras' | — |
| TB015 | s39 · 29.1–32.4 · rotulo | Mayagüez, Puerto Rico | CONFIRMADA | PB012, PB148: lugar_na_origem '…in Mayagüez, Puerto Rico after the Earthquake of San Firmín in 1918' | — |
| TB016 | s39 · 30.533–32.4 · cota | MORE THAN 100 | CONFIRMADA | PB011: [NCEI] 'official death toll … 116'; em Mayagüez, 'more than 100' | — |
| TB017 | s42 · 0–4.467 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB018 | s42 · 0–4.467 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB019 | s42 · 1.133–4.467 · rotulo | Anegada | CONFIRMADA | PB016, PB020, PB150: [WEI] 'Anegada, 125 km south of the trench'; a s44 pela notícia do USGS: 'found in the British Virgin Islands at Anegada' | — |
| TB020 | s43 · 0.3–3.3 · rotulo (_caminho: sem_caca) | Anegada, British Virgin Islands | CONFIRMADA | PB017, PB149: lugar_na_origem 'Anegada Island, part of the British Virgin Islands'. No caminho da caça, o lugar do clipe, no máximo este | — |
| TB021 | s43 · 0–3.3 · credito (_caminho: sem_caca) | David Broad / Wikimedia Commons · CC BY 3.0 | CONFIRMADA | PB018: autor David Broad; 'Creative Commons Attribution 3.0 Unported' | — |
| TB022 | s43 · 0.3–3.3 · rotulo (_caminho: caca; _condicao: o lugar_na_origem do veredito do clipe, nunca mais específico que "Anegada, Brit; _espera_a_caca: True) | Anegada, British Virgin Islands | CONFIRMADA | PB017, PB149: lugar_na_origem 'Anegada Island, part of the British Virgin Islands'. No caminho da caça, o lugar do clipe, no máximo este | — |
| TB023 | s43 · 0–3.3 · credito (_caminho: caca; _condicao: só se o clipe vier do Shutterstock; _espera_a_caca: True) | <artista>/Shutterstock.com | CONFIRMADA | Molde da identidade §7 ('<artista>/Shutterstock.com'), condicional: só se o clipe da caça vier do Shutterstock. Com Shutterstock, a identidade §7 pede também a linha da licença na faixa da última cena e na descrição, e a s75 não a tem | condicional, na s75: 'Image(s) and/or video used under license from Shutterstock.com' |
| TB024 | s44 · 0.3–2.866 · rotulo | Anegada | CONFIRMADA | PB016, PB020, PB150: [WEI] 'Anegada, 125 km south of the trench'; a s44 pela notícia do USGS: 'found in the British Virgin Islands at Anegada' | — |
| TB025 | s44 · 0.633–2.866 · legenda | Coral boulder | CONFIRMADA | PB022: [USGS-FOTO] 'A brain coral boulder eight feet in diameter'; LR F118 | — |
| TB026 | s45 · 0–26.2 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB027 | s45 · 0–26.2 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB028 | s45 · 0–17.3 · rotulo | Anegada | CONFIRMADA | PB016, PB020, PB150: [WEI] 'Anegada, 125 km south of the trench'; a s44 pela notícia do USGS: 'found in the British Virgin Islands at Anegada' | — |
| TB029 | s45 · 1.7–4.667 · legenda | North shore | CONFIRMADA | PB023 no texto: nenhum '6 MI'. [KIL] l. 412: 'flank the island's north shore'. A linha acesa (12.39 mi) e a regência s45 b0 ('~6 mi … at six miles') continuam: ver TB393 | — |
| TB030 | s45 · 2.734–4.667 · cota | LESS THAN 80 MI SOUTH OF THE TRENCH | CONFIRMADA | PB024: [WEI] 125 km = 77.7 mi | — |
| TB031 | s45 · 4.9–17.3 · credito | Source: Kilbourne et al., 2025 | CONFIRMADA | PB025: Geophysical Research Letters, 2025 | — |
| TB032 | s45 · 11.034–17.3 · cota | 1381–1391 · URANIUM-SERIES DATING | CONFIRMADA | PB025: [KIL] 'coral death in 1381–1390 or 1386–1391 CE—ranges we combine'; o método 'Uranium-series'/'U-series' (238U-234U-230Th) | — |
| TB033 | s45 · 15.534–17.3 · cota | 1492 · COLUMBUS | CONFIRMADA | PB026: [KIL] 'almost exactly one century before Columbus' (LR F125) | — |
| TB034 | s45 · 19.5–26.2 · rotulo | Eastern Puerto Rico Trench | CONFIRMADA | PB027: [KIL] 'the only reported sign that the eastern Puerto Rico Trench has produced a great earthquake' | — |
| TB035 | s45 · 22.933–26.2 · credito | Fault model: Wei et al. (2024) | CONFIRMADA | PB029: Wei et al., JGR, 2024, CC BY. A fonte e o ano estão certos; a forma §7 põe o ano depois de vírgula | forma: 'Fault model: Wei et al., 2024' |
| TB036 | s45 · 24.167–26.2 · cota | M 8+ · COMPUTER MODELS | CONFIRMADA | PB028: [KIL] 'magnitudes of 8.0 or more'; [WEI] M8.45 e M8.17 | — |
| TB037 | s46 · 8.4–10.4 · heroi | THOUSANDS OF YEARS | CONFIRMADA | PB030: [KIL] 'probably spans thousands of years' | — |
| TB038 | s46 · 0–10.4 · credito | Source: Kilbourne et al., 2025 | CONFIRMADA | PB025: Geophysical Research Letters, 2025 | — |
| TB039 | s47 · 0–9.6 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB040 | s47 · 0–9.6 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB041 | s47 · 0.2–9.6 · rotulo | 2015 · NOAA ROBOT · SOUTH WALL | CONFIRMADA | PB031: [EX1502] 'Puerto Rico Trench- South Wall'; na água em 2015-04-26 | — |
| TB042 | s47 · 4.867–9.6 · cota | ~19,700 FT (6,000 M) | CONFIRMADA | PB032: [EX1502] max depth 5999.7 m = 19,684 ft; a profundidade do robô | — |
| TB043 | s47 · 7.2–9.6 · legenda | Far east of the deepest point | CONFIRMADA | PB032: ~209 km = ~130 mi a leste (LR F137); a voz 'a long way east' | — |
| TB044 | s47 · 10.467–13.6 · legenda | Deep Discoverer · Okeanos Explorer · April 2015 | CONFIRMADA | PB034, PB151: Commons 'NOAAS Okeanos Explorer (R 337) deploys Deep Discoverer off Puerto Rico April 2015', 2015-04-10 | — |
| TB045 | s47 · 13.6–26.567 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB046 | s47 · 13.6–26.567 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB047 | s47 · 13.6–20.3 · rotulo | 2015 · NOAA ROBOT · SOUTH WALL | CONFIRMADA | PB031: [EX1502] 'Puerto Rico Trench- South Wall'; na água em 2015-04-26 | — |
| TB048 | s47 · 20.467–26.567 · cota | DEC. 2018 · FIVE DEEPS EXPEDITION | CONFIRMADA | PB035 (LR F144, F146) | — |
| TB049 | s47 · 26.567–29.0 · credito | Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0 | CONFIRMADA | PB037, PB049, PB051, PB130, PB140: Artist 'Richard Varcoe on behalf of Caladan Oceanic (LLC)'; CC BY-SA 4.0 com VRT | — |
| TB050 | s47 · 26.867–29.0 · rotulo | Pressure Drop | CONFIRMADA | PB036, PB152; sem 'on deck' (PB038) | — |
| TB051 | s47 · 29.0–33.567 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB052 | s47 · 29.0–33.567 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB053 | s47 · 31.834–33.567 · cota | FIVE OCEANS | CONFIRMADA | PB039 (LR F146–F147) | — |
| TB054 | s49 · 1.833–6.5 · legenda | Speed of sound, measured at every depth | CONFIRMADA | PB040: [BGS] '…rely on sound velocity models rather than direct measurements making this work unique' | — |
| TB055 | s49 · 1.833–6.5 · credito | Source: Bongiovanni et al., 2021 | CONFIRMADA | PB042: Geoscience Data Journal, aceito em 7 April 2021, © 2021 | — |
| TB056 | s50 · 0–15.233 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB057 | s50 · 0–15.233 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB058 | s50 · 1.867–8.4 · legenda | Surveyed Dec. 18–19, 2018 | CONFIRMADA | PB041 (LR F144) | — |
| TB059 | s50 · 0–15.233 · eixo | 0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT | CONFIRMADA | Escala do medidor, linear, de 0 a 30,000 ft: todas as cotas do lote cabem nela (a maior é 28,675). O conceito fixa ~60 px para os 1,188 ft entre a lista e o sonar (≈ 20 ft/px) | condição: cada marca na posição do número, sem quebra de escala |
| TB060 | s50 · 3.6–15.233 · cota | DEC. 2018 · SONAR · 27,487 FT | CONFIRMADA | PB042, PB124: 8,378 m = 27,486.9 ft; levantamento de 18–19/12/2018 | — |
| TB061 | s50 · 6.3–15.233 · cota | 27,487 ± 16 FT (8,378 ± 5 M) · BONGIOVANNI ET AL. 2021 | CONFIRMADA | PB042: [BONG] 8,378 ± 5 m; 5 m = 16.4 ft | — |
| TB062 | s50 · 7.167–8.4 · eixo | DETAIL · 100 FT | CONFIRMADA | Escala da lupa: a faixa de ± 16 ft e o vão de ~7 ft cabem nela | — |
| TB063 | s50 · 9.633–15.233 · cota | ≈ 83 MI · AGUADILLA | CONFIRMADA | PB044 (LR F154–F155: 83.47 mi), PB123 (LR F282) | — |
| TB064 | s50 · 11.533–15.233 · legenda | Inside the U.S. exclusive economic zone | CONFIRMADA | PB045: [MR] o anel na MRGID 33179; fica a 1.6 mi da MRGID 48982 (reivindicação sobreposta): nunca 'deep inside' | — |
| TB065 | s50 · 9.633–15.233 · credito | Maritime boundaries: MarineRegions.org (VLIZ) | CONFIRMADA | PB083: [MR] 'licensed under CC-BY since Maritime Boundaries version 11 (2019)'; a citação 'Flanders Marine Institute (2026)…' vai à descrição | — |
| TB066 | s51 · 0.3–3.134 · rotulo (_caminho: caca; _condicao: a cidade que o lugar_na_origem do veredito nomear, nunca mais específica; sem el; _espera_a_caca: True) | PUERTO RICO | CONFIRMADA | Nos três caminhos da s51 e na s70: o nome da ilha (lugar_na_origem das fotos da ilha, CM s01); PB046 | — |
| TB067 | s51 · 0.3–3.134 · credito (_caminho: caca; _condicao: só se o clipe vier do Shutterstock; _espera_a_caca: True) | <artista>/Shutterstock.com | CONFIRMADA | Molde da identidade §7 ('<artista>/Shutterstock.com'), condicional: só se o clipe da caça vier do Shutterstock. Com Shutterstock, a identidade §7 pede também a linha da licença na faixa da última cena e na descrição, e a s75 não a tem | condicional, na s75: 'Image(s) and/or video used under license from Shutterstock.com' |
| TB068 | s51 · 0.3–3.134 · rotulo (_caminho: sem_caca_1042; _condicao: só se a s10 NÃO usar a 1042 (a s10 tem o clipe da caça); "San Juan area, Puerto ) | San Juan, Puerto Rico | CONFIRMADA | PB143: Commons 'a more detailed view of the San Juan metropolitan area'; vale só com a condição da s51 (CM, condicao) | 'San Juan area, Puerto Rico', se o recorte pegar Bayamón, Guaynabo ou Cataño |
| TB069 | s51 · 0.3–3.134 · rotulo (_caminho: sem_caca_mapa; _condicao: a 1042 já está na s10) | PUERTO RICO | CONFIRMADA | Nos três caminhos da s51 e na s70: o nome da ilha (lugar_na_origem das fotos da ilha, CM s01); PB046 | — |
| TB070 | s51 · 0–3.134 · credito (_caminho: sem_caca_mapa) | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB071 | s51 · 0–3.134 · credito (_caminho: sem_caca_mapa) | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB072 | s51 · 0.5–3.134 · cota | MORE THAN 3 MILLION | CONFIRMADA | PB046 (LR F156–F157): 3,285,874 (2020) e 3,184,835 (2025) | — |
| TB073 | s52 · 0.233–3.9 · cota | WEDNESDAY, DEC. 19, 2018 | CONFIRMADA | PB048 (LR F158, F161); solta, longe do retrato (PB134 atendido) | — |
| TB074 | s52 · 0.933–3.9 · card_nome (_bloco: vescovo) | VICTOR VESCOVO | CONFIRMADA | PB047: [REL] 'explorer Victor Vescovo' | — |
| TB075 | s52 · 1.067–3.9 · card_cargo (_bloco: vescovo) | Five Deeps Expedition | CONFIRMADA | PB047; PB134 atendido: só isto sob o retrato | — |
| TB076 | s52 · 0–3.9 · credito | Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0 | CONFIRMADA | PB037, PB049, PB051, PB130, PB140: Artist 'Richard Varcoe on behalf of Caladan Oceanic (LLC)'; CC BY-SA 4.0 com VRT | — |
| TB077 | s53 · 0–5.233 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB078 | s53 · 0–5.233 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB079 | s53 · 0–5.233 · eixo | 0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT | CONFIRMADA | Escala do medidor, linear, de 0 a 30,000 ft: todas as cotas do lote cabem nela (a maior é 28,675). O conceito fixa ~60 px para os 1,188 ft entre a lista e o sonar (≈ 20 ft/px) | condição: cada marca na posição do número, sem quebra de escala |
| TB080 | s53 · 1.266–5.233 · rotulo | Limiting Factor | CONFIRMADA | PB050 (s53); LR F257–F258 (s71) | — |
| TB081 | s53 · 5.233–10.2 · credito | Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0 | CONFIRMADA | PB037, PB049, PB051, PB130, PB140: Artist 'Richard Varcoe on behalf of Caladan Oceanic (LLC)'; CC BY-SA 4.0 com VRT | — |
| TB082 | s53 · 5.533–10.2 · legenda | Limiting Factor during testing, 2018 | CONFIRMADA | PB051, PB153: Commons 'during the test phase near in 2018' | — |
| TB083 | s53 · 10.2–16.733 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB084 | s53 · 10.2–16.733 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB085 | s53 · 10.2–16.733 · eixo | 0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT | CONFIRMADA | Escala do medidor, linear, de 0 a 30,000 ft: todas as cotas do lote cabem nela (a maior é 28,675). O conceito fixa ~60 px para os 1,188 ft entre a lista e o sonar (≈ 20 ft/px) | condição: cada marca na posição do número, sem quebra de escala |
| TB086 | s53 · 11.366–16.733 · cota | ≈ 2 H 30 MIN | CONFIRMADA | PB052: [REL] 'approximate two-and-a-half hour descent' | — |
| TB087 | s53 · 13.366–16.733 · cota | FIRST PERSON · DEC. 19, 2018 | CONFIRMADA | PB053: [REL] 'the first person to reach the absolute nadir of the Atlantic Ocean' | — |
| TB088 | s54 · 2.467–4.5 · citacao | “One down!” | CONFIRMADA | PB054 (literal): [POPSCI] '“One down!” Those were Victor Vescovo’s first words…' | — |
| TB089 | s54 · 2.467–4.5 · legenda | — Victor Vescovo | CONFIRMADA | PB055; PB131 atendido: a atribuição sem data, dentro do cartão | — |
| TB090 | s54 · 0–4.5 · credito | Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0 | CONFIRMADA | PB037, PB049, PB051, PB130, PB140: Artist 'Richard Varcoe on behalf of Caladan Oceanic (LLC)'; CC BY-SA 4.0 com VRT | — |
| TB091 | s54 · 2.467–4.5 · credito | Source: Popular Science, 2018 | CONFIRMADA | PB056: o artigo é de 21/12/2018 | — |
| TB092 | s55 · 0–7.433 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB093 | s55 · 0–7.433 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB094 | s55 · 0–7.433 · eixo | 0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT | CONFIRMADA | Escala do medidor, linear, de 0 a 30,000 ft: todas as cotas do lote cabem nela (a maior é 28,675). O conceito fixa ~60 px para os 1,188 ft entre a lista e o sonar (≈ 20 ft/px) | condição: cada marca na posição do número, sem quebra de escala |
| TB095 | s55 · 0–7.433 · cota | DEC. 2018 · SONAR · 27,487 FT | CONFIRMADA | PB042, PB124: 8,378 m = 27,486.9 ft; levantamento de 18–19/12/2018 | — |
| TB096 | s55 · 1.167–6.3 · eixo | DETAIL · 100 FT | CONFIRMADA | Escala da lupa: a faixa de ± 16 ft e o vão de ~7 ft cabem nela | — |
| TB097 | s55 · 2.867–6.3 · cota | SUB GAUGES · WITHIN ~7 FT OF THE SONAR | CONFIRMADA | PB057: 8,378 − 8,376 = 2 m = 6.56 ft | — |
| TB098 | s55 · 4.633–7.433 · cota | 28,675 FT · THE LIST | CONFIRMADA | PB062: 8,740 m = 28,674.5 ft. A série que o redator fixou (_escolhas 1) é fiel à fonte e casa com a voz, que diz 'about 28,700' (s56) | — |
| TB099 | s56 · 0.2–4.433 · legenda | Earth-Science Reviews, 2019 | CONFIRMADA | PB061, PB156 | — |
| TB100 | s56 · 1.5–4.433 · card_nome (_bloco: stewart) | HEATHER A. STEWART | CONFIRMADA | PB058: [NORA] 'Stewart, Heather A.' | — |
| TB101 | s56 · 1.633–4.433 · card_cargo (_bloco: stewart) | Marine geologist, British Geological Survey (2019) | CONFIRMADA | PB058: [BGS] 'Heather Stewart, British Geological Survey marine geologist based at the Lyell Centre, Edinburgh'; a afiliação de 2019 é a BGS | — |
| TB102 | s56 · 1.767–4.433 · card_nome (_bloco: jamieson) | ALAN J. JAMIESON | CONFIRMADA | PB059: [NORA] 'Jamieson, Alan J.' | — |
| TB103 | s56 · 1.9–4.433 · card_cargo (_bloco: jamieson) | Scientist, Newcastle University (2019) | CONFIRMADA | PB059: a afiliação de 2019, 'School of Natural and Environmental Sciences, Newcastle University'; 'scientist' é a palavra da voz | — |
| TB104 | s56 · 0–4.433 · aviso_ano (_bloco: jamieson) | Photo from 2022 | CONFIRMADA | PB060, PB154: Exif 29/09/2022; o fato é de 2019 | — |
| TB105 | s56 · 0–4.433 · credito | Gnangcomapp / Wikimedia Commons · CC BY-SA 4.0 | CONFIRMADA | PB060 | — |
| TB106 | s56 · 0–15.234 · credito | Stewart & Jamieson / Earth-Science Reviews, 2019 · CC BY 4.0 | CONFIRMADA | PB061, PB073: 'open access article under the CC BY license (http://creativecommons.org/licenses/BY/4.0/)' | — |
| TB107 | s56 · 7.167–15.234 · grifo_na_pagina | Milwaukee Deep (Puerto Rico Trench) 19.58333° N 66.5° W 8740 GEBCO Gazetteer | CONFIRMADA | PB062 (literal): a linha da Tabela 1 (l. 341) | — |
| TB108 | s56 · 8.6–10.7 · cota | 28,675 FT (8,740 M) · GEBCO GAZETTEER | CONFIRMADA | PB062; sem 'UNTIL AT LEAST 2019' (PA009) | — |
| TB109 | s56 · 11.0–15.234 · folha_cabecalho | THE SUN (NEWBERRY, S.C.) · JULY 28, 1939 · P. 3 | CONFIRMADA | [SUN] o cabeçalho impresso 'THE SUN. NEWBERRY. S. C- FRIDAY. JULY 28, 1939'; a página é a seq-3 | — |
| TB110 | s56 · 11.0–15.234 · folha_texto | The recent discovery of a new and greater depth in the Atlantic ocean, establishing a new record of nearly five and a half miles (28,680 feet), north of Puerto Rico and Hispaniola | CONFIRMADA | [SUN] l. 20–25, letra a letra (com 'Atlan-tic' unido): 'The recent discovery of a new / and greater depth in the Atlan / tic ocean, establishing a new / record of nearly five and a half / miles (28,680 feet), north of / Puerto Rico and Hispaniola, has'. A frase continua depois do recorte | fechar o recorte com '…' (a frase segue: ', has called attention…') |
| TB111 | s56 · 12.4–15.234 · grifo_na_pagina | nearly five and a half miles (28,680 feet) | CONFIRMADA | [SUN] l. 23–24 (literal) | — |
| TB112 | s56 · 12.4–15.234 · cota | 28,680 FT · THE SUN, 1939 | CONFIRMADA | LR F179–F181; PA036 (só um jornal foi lido). A voz diz 'the newspapers': ver Para a Sala | — |
| TB113 | s57 · 0–8.966 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB114 | s57 · 0–8.966 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB115 | s57 · 0–8.966 · eixo | 0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT | CONFIRMADA | Escala do medidor, linear, de 0 a 30,000 ft: todas as cotas do lote cabem nela (a maior é 28,675). O conceito fixa ~60 px para os 1,188 ft entre a lista e o sonar (≈ 20 ft/px) | condição: cada marca na posição do número, sem quebra de escala |
| TB116 | s57 · 0–8.966 · cota | 28,675 FT · THE LIST | CONFIRMADA | PB062: 8,740 m = 28,674.5 ft. A série que o redator fixou (_escolhas 1) é fiel à fonte e casa com a voz, que diz 'about 28,700' (s56) | — |
| TB117 | s57 · 0–8.966 · cota | DEC. 2018 · SONAR · 27,487 FT | CONFIRMADA | PB042, PB124: 8,378 m = 27,486.9 ft; levantamento de 18–19/12/2018 | — |
| TB118 | s57 · 2.433–8.966 · cota | ≈ 1,200 FT | CONFIRMADA | LR F183: 28,675 − 27,487 = 1,188 ft | — |
| TB119 | s57 · 5.0–8.966 · cota | 2002–2003 · USGS · ~27,300 FT (8,300–8,340 M) | CONFIRMADA | PB001, PB065: [USGS] '8300-8340 m deep'; 'three cruises in 2002 and 2003'. 8,300–8,340 m = 27,231–27,362 ft | — |
| TB120 | s58 · 1.5–9.2 · eixo | PUBLISHED | CONFIRMADA | PB066: [SJ19] 'consistently shallower than those published' | — |
| TB121 | s58 · 1.9–9.2 · eixo | THE LIST | CONFIRMADA | PB067; nunca 'Brownson Deep' | — |
| TB122 | s58 · 1.9–9.2 · cota | 28,675 → 24,442 FT ⏎ (8,740 → 7,450 M) | CONFIRMADA | PB067: [SJ19] 'the deepest of those being 8740 m … 7450 m for that coincident location'; 28,674.5 → 24,442.3 ft | — |
| TB123 | s58 · 2.6–9.2 · eixo | SONAR | CONFIRMADA | PB066: [SJ19] 'publically available multibeam echosounder data' | — |
| TB124 | s58 · 3.0–9.2 · eixo | LYMAN 1954 | CONFIRMADA | PB068: Tabela 1 '19.6° N 68.31667° W 8710 Lyman (1954)' | — |
| TB125 | s58 · 3.0–9.2 · cota | 28,576 → 27,461 FT ⏎ (8,710 → 8,370 M) | CONFIRMADA | PB068: [SJ19] 'Lyman (1954) reports a depth of 8710 m … a coincident depth of 8370 m'; 28,576.1 → 27,460.6 ft | — |
| TB126 | s58 · 3.767–9.2 · eixo | STEWART & JAMIESON 2018 | CONFIRMADA | PB069 | — |
| TB127 | s58 · 3.767–9.2 · cota | 27,972 → 27,231 FT ⏎ (8,526 → 8,300 M) | CONFIRMADA | PB069: Tabela 1 de [SJ18] '8526'; [SJ19] §3.2 'coincides with an 8300 m depth'; 27,972.4 → 27,231.0 ft; nunca 8,536 | — |
| TB128 | s58 · 7.0–9.2 · heroi | SHALLOWER EVERY TIME | CONFIRMADA | PB070: os três pares mais rasos (−4,232, −1,115 e −741 ft) | — |
| TB129 | s58 · 0–9.2 · credito | Source: Stewart & Jamieson, Earth-Science Reviews, 2019 · Table 1 and Section 3.2 · CC BY 4.0 | CONFIRMADA | PB136; PB071 atendido | — |
| TB130 | s59 · 1.634–6.467 · grifo_na_pagina | propagated uncorrected through online sources and the scientific literature | CONFIRMADA | PB072 (literal; no PDF, 'scientiﬁc' com ligadura) | — |
| TB131 | s59 · 0–6.467 · credito | Stewart & Jamieson / Earth-Science Reviews, 2019 · CC BY 4.0 | CONFIRMADA | PB061, PB073: 'open access article under the CC BY license (http://creativecommons.org/licenses/BY/4.0/)' | — |
| TB132 | s60 · 0–36.4 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB133 | s60 · 0–36.4 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB134 | s60 · 0.967–12.567 · rotulo | MILWAUKEE DEEP · LISTED | CONFIRMADA | PB074: Tabela 1 '19.58333° N 66.5° W 8740 GEBCO Gazetteer' | — |
| TB135 | s60 · 3.467–12.567 · cota | 24,442 FT (7,450 M) · A RIDGE | CONFIRMADA | PB075: 7,450 m = 24,442.3 ft. Sem '~', é a conversão exata, igual ao par 1 da s58; a voz diz 'about 24,400' | — |
| TB136 | s60 · 0.967–19.1 · credito | Source: Stewart & Jamieson, 2019 | CONFIRMADA | PB074–PB077 (s60), PB098 (s67) | — |
| TB137 | s60 · 7.833–12.567 · cota | 2019 → 2021 | CONFIRMADA | PB076 (LR F192–F193) | — |
| TB138 | s60 · 15.433–21.367 · cota | 27,585 FT (8,408 M) · 2019 ESTIMATE | CONFIRMADA | PB077: [SJ19] '8408 m 19.613° N/67.847° W'; 27,585.3 ft | — |
| TB139 | s60 · 16.533–21.367 · cota | ≈ 36 MI | CONFIRMADA | PB078 (LR F198: 35.58 mi) | — |
| TB140 | s60 · 19.333–36.4 · rotulo | DOMINICAN REPUBLIC | CONFIRMADA | PB079: [MR] MRGID 8409, 'Dominican (Republic) Exclusive Economic Zone'; a voz: 'in the Dominican Republic's waters'. Sobre a água, ao lado de 'U.S. WATERS', o nome sozinho pode se ler como território | 'DOMINICAN REPUBLIC WATERS' (3 palavras), em par com 'U.S. WATERS' |
| TB141 | s60 · 19.333–36.4 · credito | Maritime boundaries: MarineRegions.org (VLIZ) | CONFIRMADA | PB083: [MR] 'licensed under CC-BY since Maritime Boundaries version 11 (2019)'; a citação 'Flanders Marine Institute (2026)…' vai à descrição | — |
| TB142 | s60 · 23.433–30.0 · cota | 2021 | CONFIRMADA | PB080 (LR F193, F199) | — |
| TB143 | s60 · 25.267–36.4 · rotulo | U.S. WATERS | CONFIRMADA | PB045, PB081: MRGID 33179; a voz 'U.S. waters' | — |
| TB144 | s60 · 27.433–30.0 · cota | ≈ 100 MI | CONFIRMADA | PB080 (LR F201: 99.68 mi) | — |
| TB145 | s60 · 31.333–36.4 · legenda | Exclusive economic zone: up to ~230 mi (200 nmi) · NOAA | CONFIRMADA | PB081: [NOAA-EEZ] 'extends no more than 200 nautical miles'; 200 nmi = 230.2 mi | — |
| TB146 | s62 · 0–6.4 · folha_cabecalho | GEBCO GAZETTEER · NAME SEARCH | CONFIRMADA | [GAZ] a busca por nome (nameContains=Milwaukee) | — |
| TB147 | s62 · 0–6.4 · folha_texto | “MILWAUKEE” | CONFIRMADA | [GAZ] o termo da consulta | — |
| TB148 | s62 · 0.4–6.4 · cota | AS OF OCT. 2026 | CONFIRMADA | VOLÁTIL. [GAZ] relida HOJE, 29/10/2026, às 04:5x: totalItems 0 (também em 26/10, 28/10 e 29/10 às 03:3x) | reconferir antes de publicar |
| TB149 | s62 · 4.233–6.4 · cota | NO RESULT | CONFIRMADA | VOLÁTIL. [GAZ] {'items':[], 'totalItems':0} | reconferir antes de publicar |
| TB150 | s62 · 0–6.4 · credito | Source: GEBCO Gazetteer (NOAA NCEI), Oct. 2026 | CONFIRMADA | [GAZ] a API fica em ngdc.noaa.gov (NOAA NCEI) | — |
| TB151 | s63 · 0–8.5 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB152 | s63 · 0–8.5 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB153 | s63 · 3.5–8.5 · rotulo | Seabed 2030 | CONFIRMADA | PB086: [BONG] 'All bathymetric data collected by Caladan Oceanic were submitted to Seabed 2030' | — |
| TB154 | s63 · 6.067–8.5 · legenda | Goal: map the whole ocean floor by 2030 | CONFIRMADA | LR F208; a voz 'the project to map the whole ocean floor by 2030' | — |
| TB155 | s63 · 8.5–13.2 · credito | Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0 | CONFIRMADA | PB037, PB049, PB051, PB130, PB140: Artist 'Richard Varcoe on behalf of Caladan Oceanic (LLC)'; CC BY-SA 4.0 com VRT | — |
| TB156 | s63 · 8.8–13.2 · rotulo | South Georgia | CONFIRMADA | PB140: 'Limiting Factor at the Cumberland East Bay (South Georgia Island)'; nunca 'Southern Ocean' nem 'South Sandwich' | — |
| TB157 | s63 · 13.2–31.3 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB158 | s63 · 13.2–31.3 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB159 | s63 · 16.633–26.567 · rotulo | South Sandwich Trench | CONFIRMADA | PB090: [BONG] 54°40′S–60°40′S | — |
| TB160 | s63 · 18.067–22.9 · cota | ≈ 5,700 MI | CONFIRMADA | PB091: 9,170.3 km = 5,698 mi (WGS84); 9,195 km = 5,714 mi (esfera) | — |
| TB161 | s63 · 21.367–26.567 · cota | ≈ 3 IN/YR (65–78 MM/YR) | CONFIRMADA | PB092 (LR F213–F214: 2.56–3.07 in) | — |
| TB162 | s63 · 23.267–26.567 · cota | 3–4× | CONFIRMADA | LR F216 (65/20 = 3.25; 78/20 = 3.9) | — |
| TB163 | s63 · 24.4–26.567 · cota | ≈ ¾ IN/YR (20 MM/YR) | CONFIRMADA | LR F215 (~20 mm = 0.79 in) | — |
| TB164 | s63 · 26.733–31.3 · rotulo | SOUTH SANDWICH ISLANDS | CONFIRMADA | PB093: [NASA-EO] 'Saunders Island is one of the South Sandwich Islands' | — |
| TB165 | s63 · 28.467–31.3 · rotulo | Mount Michael | CONFIRMADA | PB094, PB095, PB158: [NASA-EO] 'Mount Michael, the stratovolcano at the center of Saunders Island'; a pílula no centro, sem alfinete fino (o cume não foi lido) | — |
| TB166 | s66 · 0.3–3.033 · rotulo | Mount Michael | CONFIRMADA | PB094, PB095, PB158: [NASA-EO] 'Mount Michael, the stratovolcano at the center of Saunders Island'; a pílula no centro, sem alfinete fino (o cume não foi lido) | — |
| TB167 | s66 · 0.233–3.033 · legenda | Landsat · Aug. 24, 2026 | CONFIRMADA | PB095, PB158: [NASA-EO] 'acquired with the OLI … on Landsat 8 on August 24, 2026' | — |
| TB168 | s66 · 3.9–7.633 · legenda | Lava lake (illustration) | CONFIRMADA | LR F221: [NASA-EO] 'revealing heat from the persistent lava lake in its summit crater'; o '(illustration)' diz que o desenho é desenho | — |
| TB169 | s67 · 0–41.834 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB170 | s67 · 0–41.834 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB171 | s67 · 0–7.633 · rotulo | South Sandwich Trench | CONFIRMADA | PB090: [BONG] 54°40′S–60°40′S | — |
| TB172 | s67 · 5.2–7.633 · cota | ~9/10 NEVER MAPPED | CONFIRMADA | PB097: [BONG] 'Prior to the FDE, around 91% of the trench was un-mapped'. Entra com a voz 'Before that, about nine-tenths…', que dá o tempo | — |
| TB173 | s67 · 7.633–15.567 · eixo | 0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT | CONFIRMADA | Escala do medidor, linear, de 0 a 30,000 ft: todas as cotas do lote cabem nela (a maior é 28,675). O conceito fixa ~60 px para os 1,188 ft entre a lista e o sonar (≈ 20 ft/px) | condição: cada marca na posição do número, sem quebra de escala |
| TB174 | s67 · 10.034–15.567 · cota | 27,651 FT (8,428 M) · MOST PUBLISHED | CONFIRMADA | PB098: [SJ19] 'The most commonly reported depth for the Meteor Deep is 8428 m'; 27,650.9 ft | — |
| TB175 | s67 · 10.034–15.567 · credito | Source: Stewart & Jamieson, 2019 | CONFIRMADA | PB074–PB077 (s60), PB098 (s67) | — |
| TB176 | s67 · 12.567–15.567 · eixo | DETAIL · 500 FT | CONFIRMADA | Escala da lupa: o vão de 164 ft (8,428 − 8,378 = 50 m) cabe nela | — |
| TB177 | s67 · 13.567–15.567 · cota | DEC. 2018 · SONAR · 27,487 FT | CONFIRMADA | PB042, PB124: 8,378 m = 27,486.9 ft; levantamento de 18–19/12/2018 | — |
| TB178 | s67 · 18.9–26.7 · rotulo | Meteor Deep | CONFIRMADA | PB099: [BONG] 55.230°S, 26.173°W | — |
| TB179 | s67 · 18.9–26.7 · cota | 27,116 ± 43 FT (8,265 ± 13 M) | CONFIRMADA | PB099: [BONG] 8,265 ± 13 m; 27,116.1 ft; 13 m = 42.7 ft | — |
| TB180 | s67 · 16.2–26.7 · credito | Source: Bongiovanni et al., 2021 | CONFIRMADA | PB042: Geoscience Data Journal, aceito em 7 April 2021, © 2021 | — |
| TB181 | s67 · 20.434–26.7 · cota | 371 FT (113 M) SHALLOWER | CONFIRMADA | PB100: 8,378 − 8,265 = 113 m = 370.7 ft; a voz 'about 370 feet' | — |
| TB182 | s67 · 28.2–34.667 · rotulo | International Hydrographic Organization | CONFIRMADA | PB102: [M3] | — |
| TB183 | s67 · 31.1–41.834 · rotulo | SOUTHERN OCEAN (IHO, 2023) | CONFIRMADA | PB102 (LR F240–F243): resolução 02/2023, 'the IHO recognizes the Southern Ocean' | — |
| TB184 | s67 · 33.0–41.834 · eixo | 60°S | CONFIRMADA | PB102: [M3] 'the parallel of Latitude 60°S' | — |
| TB185 | s67 · 38.434–41.834 · rotulo | Meteor Deep | CONFIRMADA | PB099: [BONG] 55.230°S, 26.173°W | — |
| TB186 | s67 · 39.234–41.834 · cota | ~330 MI NORTH OF 60°S | CONFIRMADA | PB103: 60° − 55.230° = 4.77° ≈ 531 km = 330 mi | — |
| TB187 | s69 · 0–5.166 · folha_cabecalho | INTERNATIONAL HYDROGRAPHIC ORGANIZATION (IHO) · RESOLUTION 02/2023 | CONFIRMADA | [M3] p. 123: 'RECOGNITION OF THE SOUTHERN OCEAN AND CONSEQUENCES ON THE LIMITS OF SOME GLOBAL SEA AREAS 02/2023 A-3' | — |
| TB188 | s69 · 0–5.166 · folha_texto | Since these limits have neither political nor oceanographic or, more generally, environmental significance whatsoever, Hydrographic Offices may continue to adopt their own limits as long as these limits remain technically consistent with the data model of the polygonal demarcation of global sea areas (IHO S-130). | CONFIRMADA | PB105 (literal): [M3] p. 124, l. 8169–8172 | — |
| TB189 | s69 · 1.9–5.166 · grifo_na_pagina | neither political nor oceanographic or, more generally, environmental significance whatsoever | CONFIRMADA | PB105 (literal); PB106 atendido no texto | — |
| TB190 | s69 · 3.333–5.166 · grifo_na_pagina | Hydrographic Offices may continue to adopt their own limits | CONFIRMADA | PB105 (literal); PB106 atendido no texto | — |
| TB191 | s69 · 0–5.166 · credito | Source: IHO Publication M-3, 2026 | CONFIRMADA | [M3] 'Publication M-3 – 2nd Edition 2010 - Updated September 2026'; '© Copyright International Hydrographic Organization (2026)' | — |
| TB192 | s70 · 0–10.334 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB193 | s70 · 0–10.334 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB194 | s70 · 0–5.567 · eixo | 60°S | CONFIRMADA | PB102: [M3] 'the parallel of Latitude 60°S' | — |
| TB195 | s70 · 3.3–5.567 · rotulo | Equator | CONFIRMADA | PB107: o anel a 19.712°N (LR F289) | — |
| TB196 | s70 · 5.834–10.334 · rotulo | PUERTO RICO | CONFIRMADA | Nos três caminhos da s51 e na s70: o nome da ilha (lugar_na_origem das fotos da ilha, CM s01); PB046 | — |
| TB197 | s71 · 0.166–9.567 · cota | 2019 | CONFIRMADA | LR F257: [NORA] 'In 2019 the submersible DSV Limiting Factor revisited the exact same site' | — |
| TB198 | s71 · 5.666–9.567 · rotulo | Limiting Factor | CONFIRMADA | PB050 (s53); LR F257–F258 (s71) | — |
| TB199 | s71 · 7.533–9.567 · cota | DEC. 2018 | CONFIRMADA | LR F258 (o Limiting Factor levou Vescovo em dezembro de 2018); a voz 'the year before' | — |
| TB200 | s71 · 11.933–13.6 · cota (_bloco: peixes-1964-2019) | ~200 · 1964 (REPORTED) | CONFIRMADA | PB108: [NORA] 'observing 200 snailfish (Liparidae) during a one mile transect' | — |
| TB201 | s71 · 13.6–20.1 · cota (_bloco: peixes-1964-2019) | ~200 · 1964 (REPORTED) → NO SNAILFISH SEEN · 2019 | CONFIRMADA | PB108: [NORA] 'No snailfish were observed.' | — |
| TB202 | s71 · 15.366–20.1 · rotulo | SEA CUCUMBERS | CONFIRMADA | PB109: [NORA] 'a large number of the holothurian Peniagone sp.'; holotúrio = pepino-do-mar (LR F264–F265) | — |
| TB203 | s71 · 0.166–20.1 · credito | Source: Jamieson et al., 2020 | CONFIRMADA | PB117: Deep-Sea Research I 162:103336 (2020) | — |
| TB204 | s72 · 0–4.5 · legenda (_bloco: s72-peixe) | Denson Seamount, Alaska · 4,480 ft (1,365 m) · 2023 | CONFIRMADA | PB137, PB138; PA041 (ressalva: 'Alaska' é a região; o monte fica em mar aberto). [NOAA-FISH] 'The fish in this video was spotted at a depth of 1,365 meters (4,480 feet) during dive 8 of NOAA Ocean Exploration's 2023 Seascape Alaska 5 expedition' | — |
| TB205 | s72 · 0.3–4.5 · rotulo (_bloco: s72-peixe) | SNAILFISH | CONFIRMADA | PB111: [NOAA-FISH] 'An example of a deep-sea snailfish' | — |
| TB206 | s72 · 0–4.5 · legenda (_bloco: s72-pepino) | North Tutuila Flank, American Samoa · Dive 03 · 2026 | CONFIRMADA | PB113, PB159: [NOAA-SAMOA] 'Dive 03: North Tutuila Flank'; '2026 American Samoa ROV + Mapping Exploration (EX2606)'; sem a profundidade (PB160) | — |
| TB207 | s72 · 0.3–4.5 · rotulo (_bloco: s72-pepino) | SEA CUCUMBER | CONFIRMADA | PB111: [NOAA-SAMOA] 'this sea cucumber put on quite a show' | — |
| TB208 | s72 · 2.466–2.866 · cota (_bloco: s72-cts) | COLOR | CONFIRMADA | PB110: [NORA] 'a similar exterior colour, texture and morphology' | — |
| TB209 | s72 · 2.866–3.733 · cota (_bloco: s72-cts) | COLOR · TEXTURE | CONFIRMADA | PB110 | — |
| TB210 | s72 · 3.733–4.5 · cota (_bloco: s72-cts) | COLOR · TEXTURE · SHAPE | CONFIRMADA | PB110: 'SHAPE' por 'morphology', sem aspas | — |
| TB211 | s73 · 0–16.733 · folha_cabecalho | DEEP-SEA RESEARCH I · 2020 · ABSTRACT | CONFIRMADA | [NORA] 'Deep Sea Research Part I: Oceanographic Research Papers, 162, 103336'; 'Abstract' | — |
| TB212 | s73 · 0–16.733 · folha_cabecalho | Jamieson, Linley, Stewart, Nargeolet & Vescovo | CONFIRMADA | PB117: [NORA] 'Jamieson, Alan J.; Linley, Thomas D.; Stewart, Heather A.; Nargeolet, Paul-Henry; Vescovo, Victor' | — |
| TB213 | s73 · 0–16.733 · folha_texto | In 2019 the submersible DSV Limiting Factor revisited the exact same site in the Puerto Rico Trench. No snailfish were observed. However, a large number of the holothurian Peniagone sp. were seen in a density similar to that reported originally for the snailfish. The holothurian has a similar exterior colour, texture and morphology to the snailfish. It is concluded that the reported hadal snailfish of the Puerto Rico Trench was in fact a misidentification of the holothurian Peniagone sp. | CONFIRMADA | [NORA] as cinco últimas frases do resumo, letra a letra. O resumo começa antes ('The first direct observations…') | abrir a folha com '…', ou o cabeçalho diz 'ABSTRACT (EXCERPT)' |
| TB214 | s73 · 6.133–16.733 · grifo_na_pagina | misidentification of the holothurian Peniagone sp. | CONFIRMADA | [NORA] (literal); PB118 atendido no texto | — |
| TB215 | s73 · 6.133–16.733 · legenda | Holothurian = sea cucumber | CONFIRMADA | LR F264–F265: Peniagone é um holotúrio elasipodídeo, um pepino-do-mar. É a legenda do canal, fora da folha | — |
| TB216 | s73 · 8.866–16.733 · grifo_na_pagina | in a density similar to that reported originally for the snailfish | CONFIRMADA | [NORA] (literal); PB119 atendido no texto | — |
| TB217 | s73 · 9.566–16.733 · grifo_na_pagina | similar exterior colour, texture and morphology | CONFIRMADA | [NORA] (literal); PB119 atendido no texto | — |
| TB218 | s73 · 15.666–16.733 · grifo_na_pagina | Vescovo | CONFIRMADA | [NORA] o 5º autor, 'Vescovo, Victor' | — |
| TB219 | s73 · 0–16.733 · credito | Source: Jamieson et al., 2020 | CONFIRMADA | PB117: Deep-Sea Research I 162:103336 (2020) | — |
| TB220 | s74 · 0–16.1 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 (o crédito na tela durante todo o mapa); CLAUDE.md, Peças da pré-v1, item 7 | — |
| TB221 | s74 · 0–16.1 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB222 | s74 · 0–10.7 · eixo | 0 FT · 5,000 · 10,000 · 15,000 · 20,000 · 25,000 · 30,000 FT | CONFIRMADA | Escala do medidor, linear, de 0 a 30,000 ft: todas as cotas do lote cabem nela (a maior é 28,675). O conceito fixa ~60 px para os 1,188 ft entre a lista e o sonar (≈ 20 ft/px) | condição: cada marca na posição do número, sem quebra de escala |
| TB223 | s74 · 0–10.7 · cota | DEC. 2018 · SONAR · 27,487 FT | CONFIRMADA | PB042, PB124: 8,378 m = 27,486.9 ft; levantamento de 18–19/12/2018 | — |
| TB224 | s74 · 3.167–10.7 · cota | ~26,900–27,560 FT (8,200–8,400 M) · FISH LIMIT (NOAA ESTIMATE) | CONFIRMADA | PB120: [NOAA-FISH] 'a boundary between 8,200 and 8,400 meters deep (27,000 to 28,000 feet)'; 8,200 m = 26,902.9 ft; 8,400 m = 27,559.1 ft | — |
| TB225 | s74 · 1.267–10.7 · credito | Source: NOAA Ocean Exploration | **DIVERGE** | Forma da identidade §7: falta o ano. [NOAA-FISH] 'Published January 14, 2026' | Source: NOAA Ocean Exploration, 2026 |
| TB226 | s74 · 5.967–10.7 · cota | 1970 · NET · ~27,460 FT | CONFIRMADA | PB122: [NOAA-FISH] '8,370 meters (27,460 feet)' | — |
| TB227 | s74 · 12.833–16.1 · cota | ≈ 83 MI · AGUADILLA | CONFIRMADA | PB044 (LR F154–F155: 83.47 mi), PB123 (LR F282) | — |
| TB228 | s75 · 0–20.0 · credito | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] 'This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-…)'; o DOI na descrição | — |
| TB229 | s75 · 0–20.0 · legenda | Vertical exaggeration ×10 | CONFIRMADA | O exagero declarado (regência s75 b0); o perfil é o real da GEBCO (_dados/perfil-aguadilla-anel.json, 270 amostras) | condição: a régua e o perfil na mesma escala vertical, para o fundo de 27,487 cair no fundo do perfil, no anel |
| TB230 | s75 · 0–20.0 · eixo | SURFACE · 0 FT | CONFIRMADA | Escala: o zero da régua | — |
| TB231 | s75 · 0–7.0 · eixo | (traços da régua, sem número) | NADA A CHECAR | Não é texto | — |
| TB232 | s75 · 7.0–20.0 · eixo | 5,000 · 10,000 · 15,000 · 20,000 · 25,000 FT | CONFIRMADA | Escala linear, um número a cada 5,000 ft. Das cotas da descida, duas (23,250 e ~24,000) ficam entre os traços de 20,000 e 25,000, e três (26,900–27,560, ~27,460 e 27,487) passam do traço de 25,000; a régua tem de descer além dele, até o fundo do perfil, com cada cota na sua posição | — |
| TB233 | s75 · 13.0–15.0 · cota | HMS CHALLENGER · 23,250 FT | CONFIRMADA | PA022: [IHR 1936] '3,875 fathoms = 7,087 metres'; 3,875 × 6 = 23,250 ft (7,087 m = 23,251 ft) | — |
| TB234 | s75 · 14.2–16.2 · cota | 1964 · CREW · ~24,000 FT | CONFIRMADA | PB125: [NORA] 'dive to 7300 m' = 23,950 ft | — |
| TB235 | s75 · 15.4–17.4 · cota | ~26,900–27,560 FT (8,200–8,400 M) · FISH LIMIT (NOAA ESTIMATE) | CONFIRMADA | PB120: [NOAA-FISH] 'a boundary between 8,200 and 8,400 meters deep (27,000 to 28,000 feet)'; 8,200 m = 26,902.9 ft; 8,400 m = 27,559.1 ft | — |
| TB236 | s75 · 16.6–18.6 · cota | 1970 · NET · ~27,460 FT | CONFIRMADA | PB122: [NOAA-FISH] '8,370 meters (27,460 feet)' | — |
| TB237 | s75 · 18.5–20.0 · cota | DEC. 2018 · SONAR · 27,487 FT | CONFIRMADA | PB042, PB124: 8,378 m = 27,486.9 ft; levantamento de 18–19/12/2018 | — |

**rotulos_dado (as entradas de s38 a s75)**

| id | cena | na_tela | veredito | a fonte do contrato, conferida | conserto |
|---|---|---|---|---|---|
| TB238 | s39 | M 7.1 · NOAA NCEI | CONFIRMADA | PB007: [NCEI] eqMagnitude 7.1; o banco cita também M 7.5, e a atribuição fica | — |
| TB239 | s39 (s41) | UP TO 20 FT (6.1 M) · NOAA NCEI | CONFIRMADA | PB010: [NCEI] maxWaterHeight 6.1; 6.1 m = 20.01 ft; só no mapa da costa oeste (b5), nunca sobre a foto | — |
| TB240 | s39 (s41) | MORE THAN 100 | CONFIRMADA | PB011: [NCEI] 'official death toll … 116'; em Mayagüez, 'more than 100' | — |
| TB241 | s45 | LESS THAN 80 MI SOUTH OF THE TRENCH | CONFIRMADA | PB024: [WEI] 125 km = 77.7 mi | — |
| TB242 | s45 | 1381–1391 · URANIUM-SERIES DATING | CONFIRMADA | PB025: [KIL] 'coral death in 1381–1390 or 1386–1391 CE—ranges we combine'; o método 'Uranium-series'/'U-series' (238U-234U-230Th) | — |
| TB243 | s45 | 1492 · COLUMBUS | CONFIRMADA | PB026: [KIL] 'almost exactly one century before Columbus' (LR F125) | — |
| TB244 | s45 | M 8+ · COMPUTER MODELS | CONFIRMADA | PB028: [KIL] 'magnitudes of 8.0 or more'; [WEI] M8.45 e M8.17 | — |
| TB245 | s47 | ~19,700 FT (6,000 M) | CONFIRMADA | PB032: [EX1502] max depth 5999.7 m = 19,684 ft; a profundidade do robô. O valor_exato do contrato ("6,000 m = 19,685 ft") arredonda a fonte: 5,999.7 m = 19,684 ft | — |
| TB246 | s50 | 27,487 ± 16 FT (8,378 ± 5 M) · BONGIOVANNI ET AL. 2021 | CONFIRMADA | PB042: [BONG] 8,378 ± 5 m; 5 m = 16.4 ft | — |
| TB247 | s51 | MORE THAN 3 MILLION | CONFIRMADA | PB046 (LR F156–F157): 3,285,874 (2020) e 3,184,835 (2025) | — |
| TB248 | s53 | ≈ 2 H 30 MIN | CONFIRMADA | PB052: [REL] 'approximate two-and-a-half hour descent'. A fonte do contrato devia ser o release [REL], não o roteiro | — |
| TB249 | s55 | SUB GAUGES · WITHIN ~7 FT OF THE SONAR | CONFIRMADA | PB057: 8,378 − 8,376 = 2 m = 6.56 ft. [FD-ATL] "DEPTH: 8,376 M / 27,480 FT" confere | — |
| TB250 | s56 | 28,675 FT (8,740 M) · GEBCO GAZETTEER | CONFIRMADA | PB062; sem 'UNTIL AT LEAST 2019' (PA009) | — |
| TB251 | s57 | ≈ 1,200 FT | CONFIRMADA | LR F183: 28,675 − 27,487 = 1,188 ft | — |
| TB252 | s58 | 28,675 → 24,442 FT (8,740 → 7,450 M) | CONFIRMADA | PB067: [SJ19] 'the deepest of those being 8740 m … 7450 m for that coincident location'; 28,674.5 → 24,442.3 ft | — |
| TB253 | s58 | 28,576 → 27,461 FT (8,710 → 8,370 M) | CONFIRMADA | PB068: [SJ19] 'Lyman (1954) reports a depth of 8710 m … a coincident depth of 8370 m'; 28,576.1 → 27,460.6 ft | — |
| TB254 | s58 | 27,972 → 27,231 FT (8,526 → 8,300 M) | CONFIRMADA | PB069: Tabela 1 de [SJ18] '8526'; [SJ19] §3.2 'coincides with an 8300 m depth'; 27,972.4 → 27,231.0 ft; nunca 8,536 | — |
| TB255 | s60 | 24,442 FT (7,450 M) · A RIDGE | CONFIRMADA | PB075: 7,450 m = 24,442.3 ft. Sem '~', é a conversão exata, igual ao par 1 da s58; a voz diz 'about 24,400' | — |
| TB256 | s60 | 27,585 FT (8,408 M) · 2019 ESTIMATE | CONFIRMADA | PB077: [SJ19] '8408 m 19.613° N/67.847° W'; 27,585.3 ft | — |
| TB257 | s60 | ≈ 36 MI | CONFIRMADA | PB078 (LR F198: 35.58 mi) | — |
| TB258 | s60 (s61) | ≈ 100 MI | CONFIRMADA | PB080 (LR F201: 99.68 mi) | — |
| TB259 | s60 (s61) | Exclusive economic zone: up to ~230 mi (200 nmi) · NOAA | CONFIRMADA | PB081: [NOAA-EEZ] 'extends no more than 200 nautical miles'; 200 nmi = 230.2 mi | — |
| TB260 | s62 | AS OF OCT. 2026 / NO RESULT | CONFIRMADA | VOLÁTIL. [GAZ] totalItems 0, relida hoje, 29/10/2026, às 04:5x | reconferir antes de publicar |
| TB261 | s63 | ≈ 5,700 MI | CONFIRMADA | PB091: 9,170.3 km = 5,698 mi (WGS84); 9,195 km = 5,714 mi (esfera) | — |
| TB262 | s63 | ≈ 3 IN/YR (65–78 MM/YR) | CONFIRMADA | PB092 (LR F213–F214: 2.56–3.07 in) | — |
| TB263 | s63 | 3–4× | CONFIRMADA | LR F216 (65/20 = 3.25; 78/20 = 3.9) | — |
| TB264 | s67 | ~9/10 NEVER MAPPED | CONFIRMADA | PB097: [BONG] 'Prior to the FDE, around 91% of the trench was un-mapped'. Entra com a voz 'Before that, about nine-tenths…', que dá o tempo. A fonte do contrato devia ser Bongiovanni 2021 ("around 91%"), não o roteiro | — |
| TB265 | s67 | 27,651 FT (8,428 M) · MOST PUBLISHED | CONFIRMADA | PB098: [SJ19] 'The most commonly reported depth for the Meteor Deep is 8428 m'; 27,650.9 ft | — |
| TB266 | s67 | 27,116 ± 43 FT (8,265 ± 13 M) | CONFIRMADA | PB099: [BONG] 8,265 ± 13 m; 27,116.1 ft; 13 m = 42.7 ft | — |
| TB267 | s67 | 371 FT (113 M) SHALLOWER | CONFIRMADA | PB100: 8,378 − 8,265 = 113 m = 370.7 ft; a voz 'about 370 feet' | — |
| TB268 | s67 (s68) | ~330 MI NORTH OF 60°S | CONFIRMADA | PB103: 60° − 55.230° = 4.77° ≈ 531 km = 330 mi | — |
| TB269 | s71 | ~200 · 1964 (REPORTED) → NO SNAILFISH SEEN · 2019 | CONFIRMADA | PB108: [NORA] 'No snailfish were observed.' | — |
| TB270 | s74 | ~26,900–27,560 FT (8,200–8,400 M) · FISH LIMIT (NOAA ESTIMATE) | CONFIRMADA | PB120: [NOAA-FISH] 'a boundary between 8,200 and 8,400 meters deep (27,000 to 28,000 feet)'; 8,200 m = 26,902.9 ft; 8,400 m = 27,559.1 ft | — |
| TB271 | s75 | HMS CHALLENGER · 23,250 FT | CONFIRMADA | PA022: [IHR 1936] '3,875 fathoms = 7,087 metres'; 3,875 × 6 = 23,250 ft (7,087 m = 23,251 ft) | — |

**cards_pessoa (s52, s56)**

| id | cena | _na_tela | veredito | fonte | conserto |
|---|---|---|---|---|---|
| TB272 | s52 | {"nome": "VICTOR VESCOVO", "cargo": "Five Deeps Expedition", "s54": "“One down!” — Victor Vescovo (no cartão da citação)"} | CONFIRMADA | PB047, PB134 (cargo só "Five Deeps Expedition"), PB131 (s54, "— Victor Vescovo"). O o_que_e ("leader and pilot") não vai à tela; [REL] l. 85 "Founder Victor Vescovo" sustenta o vínculo com a Caladan | — |
| TB273 | s56 | {"nome": "HEATHER A. STEWART", "cargo": "Marine geologist, British Geological Survey (2019)"} | CONFIRMADA | PB058: [BGS] "British Geological Survey marine geologist"; a afiliação de 2019; sem retrato (regência, _espera_o_lucas 5) | — |
| TB274 | s56 | {"nome": "ALAN J. JAMIESON", "cargo": "Scientist, Newcastle University (2019)", "aviso": "Photo from 2022", "credito": "Gnangcomapp / Wikimedia Commons · CC BY-SA 4.0"} | CONFIRMADA | PB059, PB060: a afiliação de 2019 (Newcastle); "Photo from 2022"; o crédito de Gnangcomapp | — |

**_avisos_do_ano (a entrada de s56; as outras seis são de s12 a s19, do lote A)**

| id | cena | texto | veredito | fonte | conserto |
|---|---|---|---|---|---|
| TB275 | s56 | Photo from 2022 | CONFIRMADA | PB060, PB154: data_na_origem "29 September 2022 (according to Exif data)"; o fato é de 2019 | — |

**glossário (as entradas que vão à tela de s38 a s75, ou a todo mapa)**

| id | referente | grafia | veredito | fonte | conserto |
|---|---|---|---|---|---|
| TB276 | Victor Vescovo | Victor Vescovo | CONFIRMADA | PB047: [REL] 'explorer Victor Vescovo'; [NORA] 'Vescovo, Victor' | — |
| TB277 | Heather A. Stewart | Heather A. Stewart | CONFIRMADA | PB058: [NORA] 'Stewart, Heather A.'; a forma da linha de autores, 'Stewart' | — |
| TB278 | Alan J. Jamieson | Alan J. Jamieson | CONFIRMADA | PB059: [NORA] 'Jamieson, Alan J.' | — |
| TB279 | Thomas D. Linley | Linley | CONFIRMADA | PB117: [NORA] 'Linley, Thomas D.' | — |
| TB280 | Paul-Henry Nargeolet | Nargeolet | CONFIRMADA | PB117: [NORA] 'Nargeolet, Paul-Henry' | — |
| TB281 | Christopher Columbus | Columbus | CONFIRMADA | PB026: '1492 · COLUMBUS' | — |
| TB282 | Bongiovanni et al., 2021 | Bongiovanni et al., 2021 | CONFIRMADA | PB042: Geoscience Data Journal, aceito em 7 April 2021, © 2021 (o fascículo é de 2022: o ano da publicação on-line vale) | — |
| TB283 | Stewart & Jamieson, 2019 | Stewart & Jamieson | CONFIRMADA | PB061: Earth-Science Reviews, 2019, CC BY 4.0 | — |
| TB284 | Jamieson et al., 2020 | Jamieson et al., 2020 | CONFIRMADA | PB117: Deep-Sea Research I 162:103336 (2020) | — |
| TB285 | Kilbourne et al., 2025 | Kilbourne et al., 2025 | CONFIRMADA | PB025: Geophysical Research Letters, 2025 | — |
| TB286 | Wei et al., 2024 | Wei et al. (2024) | CONFIRMADA | PB029; a forma da tela, '(2024)': ver TB035 | — |
| TB287 | Lyman, 1954 | LYMAN 1954 | CONFIRMADA | PB068: Tabela 1 '8710 Lyman (1954)' | — |
| TB288 | National Oceanic and Atmospheric Administration | NOAA | CONFIRMADA | a sigla da voz ('NOAA's tsunami database', 'a NOAA robot', 'By NOAA's estimate') | — |
| TB289 | NOAA Ocean Exploration | NOAA Ocean Exploration | CONFIRMADA | [NOAA-FISH] oceanexplorer.noaa.gov; o crédito da s74 sem ano: TB225 | — |
| TB290 | NOAA National Centers for Environmental Information | NOAA NCEI | CONFIRMADA | [NCEI] e [GAZ] (ngdc.noaa.gov) | — |
| TB291 | U.S. Geological Survey | U.S. Geological Survey | CONFIRMADA | [USGS]; a sigla é da voz ('The USGS says'); o crédito sem ano: TB003, TB006 | — |
| TB292 | International Hydrographic Organization | International Hydrographic Organization | CONFIRMADA | PB102: [M3] | — |
| TB293 | IHO Publication M-3 | IHO Publication M-3, 2026 | CONFIRMADA | [M3] '2nd Edition 2010 - Updated September 2026' | — |
| TB294 | GEBCO Gazetteer of Undersea Feature Names | GEBCO Gazetteer | CONFIRMADA | PB085: 'IHO-IOC GEBCO Gazetteer of Undersea Feature Names' (SJ19 §2.1.2) | — |
| TB295 | GEBCO Compilation Group | GEBCO Compilation Group (2026) GEBCO 2026 Grid | CONFIRMADA | PB088: [GEBCO] | — |
| TB296 | Seabed 2030 | Seabed 2030 | CONFIRMADA | PB086 | — |
| TB297 | Five Deeps Expedition | Five Deeps Expedition | CONFIRMADA | PB047: [REL] | — |
| TB298 | British Geological Survey | British Geological Survey | CONFIRMADA | PB058: a afiliação de 2019 | — |
| TB299 | Newcastle University | Newcastle University | CONFIRMADA | PB059: a afiliação de 2019 | — |
| TB300 | Caladan Oceanic | Caladan Oceanic | CONFIRMADA | PB037: Artist 'Richard Varcoe on behalf of Caladan Oceanic (LLC)' | — |
| TB301 | Marine Regions (VLIZ) | MarineRegions.org (VLIZ) | CONFIRMADA | PB083: [MR] | — |
| TB302 | El Mundo / Universidad de Puerto Rico | El Mundo / Universidad de Puerto Rico | CONFIRMADA | PB013 | — |
| TB303 | Wikimedia Commons | Wikimedia Commons | CONFIRMADA | PB018, PB037, PB060: os créditos de mídia do Commons | — |
| TB304 | David Broad | David Broad | CONFIRMADA | PB018 | — |
| TB305 | Gnangcomapp | Gnangcomapp | CONFIRMADA | PB060: o nome de usuário do autor no Commons | — |
| TB306 | Richard Varcoe | Richard Varcoe | CONFIRMADA | PB037 | — |
| TB307 | MapTiler / OpenStreetMap | © MapTiler © OpenStreetMap contributors | CONFIRMADA | identidade §6 | — |
| TB308 | Landsat | Landsat | CONFIRMADA | PB095: Landsat 8, OLI | — |
| TB309 | Popular Science | Popular Science | CONFIRMADA | PB056: [POPSCI] | — |
| TB310 | The Sun (Newberry, S.C.) | The Sun (Newberry, S.C.) | CONFIRMADA | [SUN] 'THE SUN. NEWBERRY. S. C-'; PA036 | — |
| TB311 | Earth-Science Reviews | Earth-Science Reviews | CONFIRMADA | PB061 | — |
| TB312 | Deep-Sea Research Part I | Deep-Sea Research I | CONFIRMADA | PB117: [NORA] 'Deep Sea Research Part I: Oceanographic Research Papers'; 'Deep-Sea Research I' é a forma curta da revista | — |
| TB313 | HMS Challenger | HMS Challenger | CONFIRMADA | PA022 (s75: só o nome e os pés, sem ano) | — |
| TB314 | Okeanos Explorer | Okeanos Explorer | CONFIRMADA | PB033 | — |
| TB315 | Deep Discoverer | Deep Discoverer | CONFIRMADA | PB033 | — |
| TB316 | Pressure Drop | Pressure Drop | CONFIRMADA | PB036: [POPSCI] | — |
| TB317 | Limiting Factor | Limiting Factor | CONFIRMADA | PB050: [POPSCI] 'DSV Limiting Factor' | — |
| TB318 | United States | U.S. | CONFIRMADA | AP: 'U.S.' com pontos (s50, s60) | — |
| TB319 | Puerto Rico | Puerto Rico | CONFIRMADA | PB046; a voz | — |
| TB320 | Aguadilla | Aguadilla | CONFIRMADA | PB044 (LR F154) | — |
| TB321 | San Juan | San Juan | CONFIRMADA | PB143 | — |
| TB322 | Mayagüez | Mayagüez | CONFIRMADA | PB012, com o trema | — |
| TB323 | Mona Passage | Mona Passage | CONFIRMADA | PB005 | — |
| TB324 | Dominican Republic | Dominican Republic | CONFIRMADA | PB079; a forma, TB140 | — |
| TB325 | Anegada | Anegada | CONFIRMADA | PB016, PB020 | — |
| TB326 | British Virgin Islands | British Virgin Islands | CONFIRMADA | PB017 | — |
| TB327 | Puerto Rico Trench | Puerto Rico Trench | CONFIRMADA | PB027 ('eastern Puerto Rico Trench', s45) | — |
| TB328 | Milwaukee Deep | Milwaukee Deep | CONFIRMADA | PB074, PB085; nunca 'Milwaukee Depth' (a Marine Regions) | — |
| TB329 | South Sandwich Trench | South Sandwich Trench | CONFIRMADA | PB090 | — |
| TB330 | South Sandwich Islands | SOUTH SANDWICH ISLANDS | CONFIRMADA | PB093 | — |
| TB331 | Mount Michael | Mount Michael | CONFIRMADA | PB094 | — |
| TB332 | Meteor Deep | Meteor Deep | CONFIRMADA | PB099 | — |
| TB333 | Southern Ocean | SOUTHERN OCEAN | CONFIRMADA | PB102 | — |
| TB334 | South Georgia | South Georgia | CONFIRMADA | PB140 | — |
| TB335 | Denson Seamount, Alaska | Denson Seamount, Alaska | CONFIRMADA | PB137; PA041 (ressalva: 'Alaska' é a região) | — |
| TB336 | North Tutuila Flank, American Samoa | North Tutuila Flank, American Samoa | CONFIRMADA | PB113, PB159 | — |
| TB337 | Equator | Equator | CONFIRMADA | PB107 | — |
| TB338 | pé (foot) | FT (cota) / ft (legenda) | CONFIRMADA | identidade §7: imperial primeiro | — |
| TB339 | milha (mile) | MI / mi | CONFIRMADA | identidade §7 | — |
| TB340 | metro | M / m, entre parênteses | CONFIRMADA | identidade §7: o métrico entre parênteses quando a fonte é métrica (todas as cotas métricas do lote o são) | — |
| TB341 | milha náutica | nmi | CONFIRMADA | PB081: [NOAA-EEZ] '200 nautical miles' | — |
| TB342 | zona econômica exclusiva | exclusive economic zone | CONFIRMADA | PB081: [NOAA-EEZ] 'Exclusive Economic Zone (EEZ)' | — |

**_pergunta_cta**

| id | item | texto | veredito | fonte | conserto |
|---|---|---|---|---|---|
| TB343 | a pergunta (s75, 695,2–701,2 s) | "Would you make that dive alone?" | CONFIRMADA | A premissa se sustenta. [REL]: "explorer Victor Vescovo became the first human to dive on a solo mission to the deepest point in the Atlantic Ocean"; a voz, s53: "He made the trip alone" (LR F162). "That dive" é a descida até o ponto mais fundo, que a s75 acabou de mostrar. 6 palavras e 31 caracteres conferem | — |
| TB344 | a reserva | "Would you ride a sub that deep?" | CONFIRMADA | Não pressupõe fato além de um submersível ter ido àquela profundidade (PB053). 7 palavras | — |
| TB345 | "pressupoe" | a citação do release e da voz | CONFIRMADA | [REL] l. 15, letra a letra, como citada | — |

**_caca**

| id | cena | o que diz | veredito | fonte | conserto |
|---|---|---|---|---|---|
| TB346 | s10 | com o clipe, o lugar dele; sem ele, a ISS071-E-1042 com "San Juan, Puerto Rico" | CONFIRMADA | PB143 (o lote A também deu "San Juan, Puerto Rico"); nunca "Aguadilla" sobre a 1042 (nao_vai_para_tela) | — |
| TB347 | s11 | nenhum texto | NADA A CHECAR | — | — |
| TB348 | s43 | com o clipe, no máximo "Anegada, British Virgin Islands"; sem ele, a foto de David Broad com o mesmo rótulo e o crédito CC BY 3.0 | CONFIRMADA | PB017, PB018, PB149 | — |
| TB349 | s51 | três caminhos: o clipe, a 1042 ("San Juan, Puerto Rico") só se a s10 tiver o clipe, e o mapa ("PUERTO RICO") se a 1042 estiver na s10; "MORE THAN 3 MILLION" nos três | CONFIRMADA | [CM] s51, condicao: "só se a caça s51-a não trouxer o aéreo E a s10 não usar a 1042 … vale o fallback (2) da regência: o mapa da ilha". A lógica do contrato é a mesma | — |

**_escolhas**

| id | tema | a escolha | veredito | fonte | conserto |
|---|---|---|---|---|---|
| TB350 | a lista e o sonar no medidor (s09, s55, s57) | "28,675 FT · THE LIST" e "27,487 FT" no vídeo inteiro | CONFIRMADA | Fiel: 8,740 m = 28,674.5 ft e 8,378 m = 27,486.9 ft (PB062, PB042). Casa com a voz, que diz os dois com "about" ("about 28,700", s56; "about 27,500", s50). "≈ 1,200 FT" continua certo (1,188 ft), e "MORE THAN 1,000 FT" (s09) também | — |
| TB351 | s14, o card de Brownson | "W. H. BROWNSON"; "Lieutenant-Commander, U.S. Navy · commanding the Blake, 1883" | CONFIRMADA | PA016, PA018 (lote A): "under command of Lieutenant Commander W. H. Brownson, U. S. N." | — |
| TB352 | s36 | "+4,265 FT" | CONFIRMADA | PA054, PA056 (lote A): +1,300 m = 4,265.1 ft. A ressalva do PA056 ("reconstructed") é do lote A | — |
| TB353 | s60, sem o "~" | "24,442 FT (7,450 M) · A RIDGE" | CONFIRMADA | TB135: a conversão exata, igual ao par 1 da s58 | — |
| TB354 | s56, o cargo de Jamieson | "Scientist, Newcastle University (2019)" | CONFIRMADA | TB103 | — |
| TB355 | s63 › b1 | "South Georgia", sem data | CONFIRMADA | TB156 | — |
| TB356 | s54 | "“One down!”" e "— Victor Vescovo", sem data | CONFIRMADA | TB088, TB089 (PB131) | — |
| TB357 | s05 | "1964 · REPORTED" | CONFIRMADA | PA005 (lote A) | — |
| TB358 | s26 | "1964 · CREW · ~24,000 FT" e "Report published 1965" | CONFIRMADA | PA005: o relato é de 1965; [NORA] "dive to 7300 m" = 23,950 ft | — |
| TB359 | s25 | "1964 · CREW · MORE THAN 4 MI" | CONFIRMADA | 7,300 m = 4.54 mi ([NORA], o título): "more than 4" vale | — |
| TB360 | s45 | "1381–1391 · URANIUM-SERIES DATING" e a fonte na faixa | CONFIRMADA | TB032, TB031 | — |
| TB361 | s62 | o cabeçalho, o campo, "NO RESULT" e "AS OF OCT. 2026" | CONFIRMADA | TB146–TB150 (volátil) | — |
| TB362 | s60, a zona dominicana | "DOMINICAN REPUBLIC" | CONFIRMADA (com forma) | TB140 | "DOMINICAN REPUBLIC WATERS" |
| TB363 | s67 | "27,116 ± 43 FT (8,265 ± 13 M)" junto da pílula "Meteor Deep" | CONFIRMADA | TB179 | — |
| TB364 | s27 e s72 | "Denson Seamount, Alaska · 4,480 ft (1,365 m) · 2023" | CONFIRMADA | TB204; PA041 (a ressalva da região) | — |
| TB365 | s72, a Samoa | "North Tutuila Flank, American Samoa · Dive 03 · 2026" | CONFIRMADA | TB206 | — |
| TB366 | s73, Vescovo | o grifo na linha de autores | CONFIRMADA | TB218 | — |
| TB367 | o crédito da GEBCO | a forma curta na tela; o WMS e o DOI na descrição | CONFIRMADA | PB088: [GEBCO] "This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: …)" | — |
| TB368 | a rede de 1970 | "1970 · NET · ~27,460 FT", com a NOAA na faixa | CONFIRMADA | PB122: [NOAA-FISH] "8,370 meters (27,460 feet)"; o "~" cobre os 27,455 ft do museu (lote A) | — |
| TB369 | s10 e s51, sobre a 1042 | "San Juan, Puerto Rico", com a condição | CONFIRMADA | PB143 | "San Juan area, Puerto Rico", se o recorte pegar os municípios vizinhos |

**_regras_de_serie** (as 16 regras, uma linha por regra; as que só dizem forma ou desenho, sem fato, são NADA A CHECAR)

| id | regra | o que afirma | veredito | fonte | conserto |
|---|---|---|---|---|---|
| TB370 | 1 · os marcadores do medidor | a forma de cada visita, ANO · MÉTODO · PROFUNDIDADE, e a mesma grafia em todas as cenas | CONFIRMADA | Os membros do lote B, um a um: "2002–2003 · USGS · ~27,300 FT (8,300–8,340 M)" (TB001, TB119); "DEC. 2018 · SONAR · 27,487 FT" (TB060, TB095, TB117, TB177, TB223, TB237); "28,675 FT · THE LIST" (TB098, TB116); "1970 · NET · ~27,460 FT" (TB226, TB236); a faixa dos peixes (TB224, TB235); "HMS CHALLENGER · 23,250 FT" (TB233); "1964 · CREW · ~24,000 FT" (TB234). Os do lote A, pelos ids do laudo do canal: 4,561 fathoms = 27,366 ft, 1883 (C24, C25: F032, F033); "MORE THAN 28,000" (PA034); 3,875 fathoms (PA022). Nas cenas do lote B, nenhuma grafia diverge da regra | — |
| TB371 | 2 · só a visita da vez tem rótulo | desenho | NADA A CHECAR | — | — |
| TB372 | 3 · o marcador de 1883 | quando ele tem rótulo | NADA A CHECAR | A forma e o número estão na regra 1 (TB370). No lote B, o marcador de 1883 aparece só na s53, como traço | — |
| TB373 | 4 · a distância da costa | "≈ 83 MI · AGUADILLA", sempre da costa de Aguadilla | CONFIRMADA | TB063, TB227; PB044 (83.47 mi) | — |
| TB374 | 5 · as taxas das placas | "≈ ¾ IN/YR (20 MM/YR)" e "≈ 3 IN/YR (65–78 MM/YR)" | CONFIRMADA | TB163, TB161 (PB092). 65–78 mm = 2.56–3.07 in, e 20 mm = 0.79 in | — |
| TB375 | 6 · o 1939 impresso | "28,680 FT · THE SUN, 1939", nunca "NEWSPAPERS" | CONFIRMADA | TB112 ([SUN] l. 23–24: "(28,680 feet)"). A tela nomeia o jornal que foi lido (PA036) | — |
| TB376 | 7 · a lista na página | "28,675 FT (8,740 M) · GEBCO GAZETTEER", sem "~" e sem "UNTIL AT LEAST 2019" | CONFIRMADA | TB108; PB062; PA009 (o "UNTIL AT LEAST 2019" ficou NÃO ACHEI no lote A, e a regra o tira) | — |
| TB377 | 8 · os peixes identificados | "SNAILFISH (LIPARIDAE)", "CUSK-EEL (OPHIDIIDAE)", e na s72 "SNAILFISH" e "SEA CUCUMBER" | CONFIRMADA | [NORA] "200 snailfish (Liparidae)" (PB108); PA044 (Ophidiidae, lote A); TB205, TB207 (s72) | — |
| TB378 | 9 · o crédito de mapa | MapTiler + OSM e a GEBCO curta em todo quadro de mapa; a s75 só com a GEBCO | CONFIRMADA | identidade §6; PB088 ([GEBCO] a forma de citação); TB228 (s75). A s75 desenha sobre o perfil da GEBCO, sem tile da MapTiler | — |
| TB379 | 10 · no máximo 3 linhas de crédito | desenho (a arte mede) | NADA A CHECAR | — | — |
| TB380 | 11 · a fonte na faixa | onde a "Source:" entra | NADA A CHECAR | A forma de cada "Source:" se confere na própria linha (TB003, TB006, TB225) | — |
| TB381 | 12 · a lupa | "DETAIL · 500 FT" e "DETAIL · 100 FT" | NADA A CHECAR | É o tamanho da janela que a arte desenha, não um fato. A arte tem de desenhar a janela nessa escala | — |
| TB382 | 13 · os avisos do ano | um aviso por foto de outra época; as outras fotos não levam aviso | CONFIRMADA | TB275 (s56, "Photo from 2022"); PB154; o lote 7 (PB130–PB160) não deu `aviso_de_ano` novo em s38–s75 | — |
| TB383 | 14 · as folhas | as recriadas com o texto literal da fonte; as reais com o grifo só sobre o que está impresso | CONFIRMADA | s56: TB109–TB111 ([SUN], literal); s62: TB146–TB150; s69: TB187–TB190 ([M3] p. 124, literal); s73: TB211–TB218 ([NORA], literal); s59: TB130 (PB072, literal); s56 › b0–b1: TB107 (PB062, a linha da Tabela 1) | — |
| TB384 | 15 · os cards de pessoa | o nome em caixa alta, o cargo, o ano quando o cargo é de outra época; Vescovo só com "Five Deeps Expedition" | CONFIRMADA | TB272–TB274; PB047, PB134, PB059. Nares, "Capt. George Nares", é do lote A | — |
| TB385 | 16 · a caixa | país em caixa alta, cidade e acidente em caixa normal | NADA A CHECAR | É norma de grafia. As grafias dos nomes se conferem no glossário (TB276–TB342) | — |

**_nao_conferido**

| id | item | o que diz | veredito | fonte | conserto |
|---|---|---|---|---|---|
| TB386 | 1 | "Nenhuma URL foi aberta nesta tarefa" | NADA A CHECAR | Diz como o redator trabalhou, não diz fato | — |
| TB387 | 2 | "A vírgula de \"Washington, D. C.\" (s21): do OCR, não da imagem." | **DIVERGE** | `midia/atlantico-fundo/fontes/fb-thesun-1939-07-28-p3-ocr.txt`, l. 19: "Washington. D. C.—WNU Service." O OCR traz ponto, não vírgula. A vírgula é a forma provável do impresso, mas foi o redator que a pôs. Não veio do OCR. Na tela, a assinatura sai na s21 (lote A) | "A vírgula de \"Washington, D. C.\" (s21) é normalização: o OCR lê \"Washington. D. C.\"; quem decide é a imagem da página (a Sala confere)" |
| TB388 | 3 | "_perguntas.mjs: NÃO MEDIDO" | NADA A CHECAR | É uma medida de máquina, não um fato | — |
| TB389 | 4 | o cume do Mount Michael: o GVP não foi lido; a pílula vai "no centro da ilha" | CONFIRMADA | [NASA-EO]: "Mount Michael, the stratovolcano at the center of Saunders Island" (PB094, PB158). O centro da ilha tem fonte. A coordenada do cume continua NÃO FOI CHECADO (Para a Sala) | — |

**As proporções desenhadas** (a régua do medidor, a régua da s75 e os eixos estão nas linhas de cena: TB173, TB176, TB229–TB232; aqui fica a dos pares da s58)

| id | cena | o que se desenha | veredito | fonte | conserto |
|---|---|---|---|---|---|
| TB390 | s58 | as três diferenças "PUBLISHED → SONAR". O conceito pede que elas acendam "como três degraus iguais" (conceito-visual.json › s58 › metafora) | **DIVERGE** (proporção) | Pelos próprios números da tela (TB122, TB125, TB127): 28,675 − 24,442 = 4,233 ft; 28,576 − 27,461 = 1,115 ft; 27,972 − 27,231 = 741 ft. As diferenças não são iguais: a primeira é 5,7 vezes a terceira. Três degraus iguais desenhariam o que as fontes não dizem. O texto do `textos-tela.json` está certo, mas não traz instrução nenhuma de escala para a s58 | Em `_instrucoes_para_a_arte`: "s58: as barras em escala, de 0 FT, ou com a quebra do eixo declarada na tela; as três diferenças com o tamanho de cada uma (4,233, 1,115 e 741 ft), nunca três degraus iguais (o 'iguais' do conceito é 'todas mais rasas')" |

**Os 14 DIVERGE e os 3 NÃO ACHEI do laudo-delta, um a um** (`_diverge_do_laudo_atendido`: se o texto de tela os atende, e o que ainda chega à tela por outro caminho)

| id | do laudo | cena | o que o texto de tela faz | veredito | o que falta | conserto |
|---|---|---|---|---|---|---|
| TB391 | PB008 | s39 (s40) | "OCT. 1918" vai no marcador, sobre o epicentro do NCEI (18.7°N, 67.189°W), e "Mona Passage" vai sobre a passagem (`_instrucoes_para_a_arte`) | CONFIRMADA (atendido) | — | — |
| TB392 | PB019 | s43 | nenhum texto de tela diz "east tip"; o rótulo é "Anegada, British Virgin Islands" (TB020) | CONFIRMADA (atendido) | A regência s43 › b0 ainda diz "the window moving toward the island's east tip". O pedido está em `_pedidos_a_montante` | — |
| TB393 | PB023 | s45 | a legenda é "North shore", sem "6 MI" (TB029) | **DIVERGE** (parcial) | A regência s45 › b0 ainda acende a linha "anegada-costa-norte, ~6 mi" em "six miles". Essa linha mede 19,94 km (12,39 mi), o dobro do trecho dos blocos: "a shore-parallel distance of nearly 10 km from Bones Bight and Windlass Bight in the west … to Warner" ([KIL] l. 412–414). A tela desenha o dobro do que a voz diz, e o `textos-tela.json` não pede o conserto | Em `_pedidos_a_montante`: {"para": "regência", "cenas": "s45 › b0", "pedido": "em 'six miles', acender só o trecho de Bones Bight/Windlass Bight a Warner (~10 km, [KIL] l. 412–414), ou acender a costa norte sem prendê-la a 'six miles'; a linha anegada-costa-norte mede 12,39 mi (PB023)"} |
| TB394 | PB038 | s47 (s48) | a legenda é "Pressure Drop", sem "on deck" (TB050) | CONFIRMADA (atendido) | A regência s47 ainda diz "with the Limiting Factor on deck". O pedido está em `_pedidos_a_montante` | — |
| TB395 | PB071 | s58 | "Source: Stewart & Jamieson, Earth-Science Reviews, 2019 · Table 1 and Section 3.2 · CC BY 4.0" (TB129) | CONFIRMADA (atendido) | — | — |
| TB396 | PB082 | s60 (s61) | nenhum texto diz "BORDER"; os rótulos são "DOMINICAN REPUBLIC" e "U.S. WATERS" (TB140, TB143) | **DIVERGE** (parcial) | A regência s60 › b6 ainda manda "the boundary (zee-limites-eua-rd) lit". Na camada, a linha ao lado do anel é a 3602, "Unsettled median line" (Limits in the Seas No. 130), a borda da área "Overlapping claim: United States (Puerto Rico) / Dominican Republic" (MRGID 48982). Acesa como fronteira, ela adota uma linha que nenhum dos dois lados assentou. Pela identidade, fronteira disputada vai tracejada, com rótulo `DISPUTED`, sem adotar a reivindicação de um lado. O `textos-tela.json` não traz nenhuma instrução sobre a linha | Em `_instrucoes_para_a_arte`: "s60 (s61): a linha entre as duas zonas, ao lado do anel, é 'Unsettled median line' (3602; MRGID 48982): tracejada e, se tiver nome na tela, 'DISPUTED' (identidade); nunca acesa como fronteira". Em `_pedidos_a_montante`, o mesmo para a regência s60 › b6 |
| TB397 | PB087 | s63 | nenhum texto diz "measured"; os rótulos são "Seabed 2030" e "Goal: map the whole ocean floor by 2030" (TB153, TB154) | CONFIRMADA (atendido no texto) | A regência s63 › b0 ainda diz "the measured mask … (measured bright", e a máscara mistura o TID 44, que é indireto. Sem rótulo, a tela não afirma "medido". O pedido não está em `_pedidos_a_montante` (LEVE) | Pedido a montante: tirar "measured" do exige da s63 › b0 |
| TB398 | PB096 | s67 | nenhum texto diz "2019 SURVEY"; o número é "~9/10 NEVER MAPPED" (TB172) | CONFIRMADA (atendido no texto) | A regência s67 › b0 ainda chama a área TID de "the 2019 survey". O pedido não está em `_pedidos_a_montante` (LEVE) | Pedido a montante: tirar "the 2019 survey" da s67 › b0 |
| TB399 | PB104 | s67, s69 | só o nome, "International Hydrographic Organization" (TB182, TB187); nenhuma frase que define a IHO | CONFIRMADA (atendido) | — | — |
| TB400 | PB106 | s69 | os grifos estão só nos literais da M-3 (TB189, TB190) | CONFIRMADA (atendido no texto) | A regência s69 › b0 ainda pede o grifo em "political meaning" e "not every country". A instrução geral "Grifos só sobre o texto impresso listado" cobre, mas o pedido não está em `_pedidos_a_montante` (LEVE) | Pedido a montante para a s69 › b0 |
| TB401 | PB114 | s72 | a legenda da Samoa não dá profundidade (TB206) | CONFIRMADA (atendido) | A regência s72 › b0 ainda traz "North Tutuila Flank, American Samoa · 2,300 m · 2026". O pedido não está em `_pedidos_a_montante` (LEVE) | Pedido a montante para a s72 › b0 |
| TB402 | PB115 | s72 | nenhum "St. Croix" | CONFIRMADA (atendido) | O pedido ao espelho está em `_pedidos_a_montante` | — |
| TB403 | PB118 | s73 | o grifo em "misidentification of the holothurian Peniagone sp." (TB214) | CONFIRMADA (atendido no texto) | A regência s73 › b0 ainda pede o grifo em "sea cucumbers", com "\"fish\"" entre aspas. O pedido não está em `_pedidos_a_montante` (LEVE) | Pedido a montante para a s73 › b0 |
| TB404 | PB119 | s73 | os grifos estão nos literais do resumo (TB216, TB217) | CONFIRMADA (atendido no texto) | A regência s73 › b1 ainda trata "count and the look" como texto do artigo (LEVE) | Pedido a montante para a s73 › b1 |
| TB405 | PB131 | s54 | "— Victor Vescovo", sem data (TB089) | CONFIRMADA (atendido) | O pedido para a regência s54 › b0 está em `_pedidos_a_montante` | — |
| TB406 | PB134 | s52 | só "Five Deeps Expedition" (TB075) | CONFIRMADA (atendido no texto) | A regência s52 › b0 ainda traz "(Five Deeps Expedition · Dec. 19, 2018)" no cargo. O pedido de `_pedidos_a_montante` sobre a s52 trata só do tempo do card (LEVE) | Pedido a montante: tirar "· Dec. 19, 2018" do cargo na s52 › b0 |
| TB407 | PB160 | s72 | a legenda vai sem a profundidade, e a decisão de reler o quadro fica com a Sala (`_espera_a_sala`) | CONFIRMADA (atendido) | A releitura do quadro é da Sala (Para a Sala) | — |

## 4 · Os achados acionáveis

Nenhum é GRAVE. Nenhuma afirmação da tela saiu REFUTADA. As 7 linhas DIVERGE são de forma de crédito (3), de desenho (3) e de uma nota interna (1). Nenhuma está num número, num nome ou numa citação que vá à tela.

1. **[MÉDIO] TB396 · s60 (s61), a linha entre as zonas.** O `textos-tela.json` não traz "BORDER", mas também não diz à arte o que a linha é. A regência s60 › b6 acende "the boundary (zee-limites-eua-rd)", e essa linha é a 3602, "Unsettled median line", a borda da área de reivindicação sobreposta (MRGID 48982).
   → CONSERTO: em `_instrucoes_para_a_arte`, "s60 (s61): a linha entre as duas zonas, ao lado do anel, é 'Unsettled median line' (3602; MRGID 48982): tracejada e, se tiver nome na tela, 'DISPUTED' (identidade, 'Fronteira disputada'); nunca acesa como fronteira". O mesmo vai em `_pedidos_a_montante` para a regência s60 › b6.
   → RAIZ: INSTRUÇÃO. A regra da fronteira disputada não chegou à regência nem ao texto.
2. **[MÉDIO] TB393 · s45, a linha da costa norte de Anegada.** A legenda está certa ("North shore"), mas a regência s45 › b0 acende em "six miles" uma linha de 12,39 mi.
   → CONSERTO: em `_pedidos_a_montante`, {"para": "regência", "cenas": "s45 › b0", "pedido": "em 'six miles', acender só o trecho de Bones Bight/Windlass Bight a Warner (~10 km, Kilbourne l. 412–414), ou acender a costa norte sem prendê-la a 'six miles' (PB023)"}.
   → RAIZ: PONTUAL.
3. **[MÉDIO] TB390 · s58, os três pares.** As diferenças são 4,233, 1,115 e 741 ft, e o conceito pede "três degraus iguais". O texto está certo, e o desenho ainda não foi feito.
   → CONSERTO: em `_instrucoes_para_a_arte`, "s58: as barras em escala, de 0 FT, ou com a quebra do eixo declarada na tela; as três diferenças com o tamanho de cada uma (4,233, 1,115 e 741 ft), nunca três degraus iguais".
   → RAIZ: INSTRUÇÃO. Uma metáfora do conceito virou escala.
   - Por que não segura o texto: a afirmação da tese, "SHALLOWER EVERY TIME" (TB128), está CONFIRMADA, e os seis números dos pares também (TB122, TB125, TB127). O que diverge é a instrução de desenho, que tem conserto de uma frase.
4. **[LEVE] TB003, TB006 · s38, s39.** "Source: U.S. Geological Survey" → "Source: U.S. Geological Survey, 2018".
   → RAIZ: INSTRUÇÃO. O PA051 tirou o "2003" e não pôs o ano da página (22/08/2018). A identidade §7 pede `Source: <instituição>, <ano>`.
5. **[LEVE] TB225 · s74.** "Source: NOAA Ocean Exploration" → "Source: NOAA Ocean Exploration, 2026" ([NOAA-FISH]: "Published January 14, 2026").
   → RAIZ: INSTRUÇÃO. É o mesmo padrão do item 4.
6. **[LEVE] TB387 · `_nao_conferido` 2.** "A vírgula de \"Washington, D. C.\" (s21): do OCR, não da imagem." → "A vírgula de \"Washington, D. C.\" (s21) é normalização: o OCR lê \"Washington. D. C.\"; quem decide é a imagem da página (a Sala confere)".
   → RAIZ: PONTUAL.
7. **[LEVE] A linha do Shutterstock, que falta.** Se algum clipe da caça (s10, s11, s43, s51) vier do Shutterstock, a identidade §7 pede `Image(s) and/or video used under license from Shutterstock.com` na faixa de crédito da última cena, e o `textos-tela.json` não a tem na s75.
   → CONSERTO: uma entrada na s75, com `_condicao: "só se algum clipe da caça vier do Shutterstock"` e `_espera_a_caca: true`, e a mesma linha na descrição.
   → RAIZ: INSTRUÇÃO.
8. **[LEVE] Os pedidos a montante que faltam** (TB397, TB398, TB400, TB401, TB403, TB404, TB406). O texto de tela atende, mas a regência ainda traz a forma de antes:
   - s63 › b0 "measured";
   - s67 › b0 "the 2019 survey";
   - s69 › b0 os grifos em "political meaning" e "not every country";
   - s72 › b0 "· 2,300 m ·" na legenda da Samoa;
   - s73 › b0 o grifo em "sea cucumbers" com "\"fish\"";
   - s73 › b1 "count and the look" como texto do artigo;
   - s52 › b0 "(Five Deeps Expedition · Dec. 19, 2018)".
   → CONSERTO: uma linha para cada uma em `_pedidos_a_montante`.
   → RAIZ: PONTUAL.
9. **[LEVE, forma] TB035 · s45.** "Fault model: Wei et al. (2024)" → "Fault model: Wei et al., 2024" (a vírgula da identidade §7). A fonte e o ano estão certos.
10. **[LEVE, sugestão] TB140, TB362 · s60.** "DOMINICAN REPUBLIC" fica sobre a zona de mar, não sobre a terra. "DOMINICAN REPUBLIC WATERS" diz o que a voz diz ("in the Dominican Republic's waters"), como "U.S. WATERS" faz do outro lado. Como está, não é erro, e fica a critério do redator.
11. **[LEVE, condição] TB068, TB369 · s51 e s10.** "San Juan, Puerto Rico" sobre a 1042 vale se o recorte ficar no município. Se pegar Bayamón, Guaynabo ou Cataño, vai "San Juan area, Puerto Rico" (o Commons diz "the San Juan metropolitan area").
12. **[LEVE, condição] TB229 · s75.** A régua e o perfil vão na mesma escala vertical (com o ×10 declarado), para os 27,487 FT caírem no fundo do perfil, no anel. A régua desce além do traço de 25,000 (TB232).

## 5 · Para o redator-de-tela (por cena; só o que muda)

- **s38:** "Source: U.S. Geological Survey" → "Source: U.S. Geological Survey, 2018" (TB003).
- **s39:**
  - "Source: U.S. Geological Survey" → "Source: U.S. Geological Survey, 2018" (TB006).
  - A regência s39 › b3 pede a República Dominicana "with its name", e o texto não tem a entrada. Se ela entrar, a grafia é a da s60, "DOMINICAN REPUBLIC" (TB140), em caixa alta pela regra 16, sobre a terra do país. Esta linha não entra no M: é texto que falta, não afirmação feita.
- **s45:**
  - "Fault model: Wei et al. (2024)" → "Fault model: Wei et al., 2024" (TB035).
  - O pedido a montante da linha de Anegada (achado 2).
- **s52:** o pedido a montante para tirar "· Dec. 19, 2018" do cargo na regência (TB406).
- **s58:** a instrução de escala dos pares (achado 3).
- **s60 (s61):**
  - A instrução da linha disputada (achado 1).
  - Opcional: "DOMINICAN REPUBLIC" → "DOMINICAN REPUBLIC WATERS" (achado 10).
- **s63, s67, s69, s72, s73:** os pedidos a montante do achado 8.
- **s74:** "Source: NOAA Ocean Exploration" → "Source: NOAA Ocean Exploration, 2026" (TB225).
- **s75:** a linha condicional do Shutterstock (achado 7).
- **`_nao_conferido` 2:** a frase da vírgula (achado 6).
- **Opcional, decisão de série:** o AP Stylebook escreve o mês por extenso quando vem só com o ano ("October 1918", "December 2018", "October 2026"). A série usa "OCT. 1918", "DEC. 2018" e "AS OF OCT. 2026". A identidade §7 só fixa a forma da data completa ("March 3, 2024"), e por isso isto não conta como DIVERGE. Se a série mudar, muda em todas as cenas de uma vez.

Fica como está, conferido: "24,442 FT (7,450 M) · A RIDGE", sem "~" (TB135, TB353), e "28,675"/"27,487" na série (TB350). Também: "URANIUM-SERIES DATING" (TB032), os três caminhos da s51 (TB349), os cards da s56 (TB273, TB274), "NO RESULT · AS OF OCT. 2026" (TB148–TB150), "South Georgia" (TB156), "~330 MI NORTH OF 60°S" (TB186), as duas legendas da s72 (TB204, TB206), a folha e os grifos da s73 (TB211–TB218), a pergunta e a reserva (TB343, TB344), os números da régua da s75 (TB230–TB237) e o crédito da GEBCO (TB228).

## 6 · Para a Sala

**NÃO FOI CHECADO.** Faltou insumo, ou a fonte não respondeu. Isto não autoriza afirmar nada além do que a tabela já sustenta, e nenhum destes itens é texto de tela do lote B sem veredito.
1. **O registro da UPR** da foto do El Mundo (s39 › b6, a s41): http://bibliotecadigital.uprrp.edu/cdm/singleitem/collection/fotoselmund/id/2159/rec/31. Esgotou o tempo numa tentativa anterior, e não insisti. O crédito se sustenta pelo Commons (PB013, PB148).
2. **O trecho de ~10 km de Anegada:** as coordenadas de Bones Bight, Windlass Bight e Warner não foram lidas. Estão na Fig. S1 do suplemento de Kilbourne et al. 2025, https://doi.org/10.1029/2024GL114448. A geo do achado 2 depende delas.
3. **O cume do Mount Michael**, no Global Volcanism Program: https://volcano.si.edu/volcano.cfm?vn=390090. Não foi lido. A pílula no centro da ilha tem fonte (TB389).
4. **A profundidade da Samoa**, que só aparece no quadro da legenda (~2–5 s do clipe; conferencia-midia.json, s72). A janela usada é a 3ª tomada (PB160). A legenda continua sem ela.
5. **O retrato de Heather Stewart:** o perfil da BGS deu 404, e https://fivedeeps.com/home/team/crew/heather/ não foi aberta. O card vai só com nome e cargo.
6. **O texto integral de Jamieson et al. 2020** (https://doi.org/10.1016/j.dsr.2020.103336) é pago. Os grifos da s73 ficam no resumo.
7. **A vírgula de "Washington, D. C."** na imagem da página de 1939 (s21, lote A): o OCR traz ponto (TB387).

**Divergência da voz** (não mexi no roteiro; regravar é decisão do Lucas):
- **s56, "the newspapers reported in 1939".** Só um jornal foi lido, The Sun, de Newberry (S.C.), em 28/07/1939, p. 3 ([SUN]). A matéria é boletim da National Geographic Society distribuído pelo WNU Service, um serviço de jornais, e por isso o plural é provável. Mas o plural, com o número de 28,680 ft, ficou NÃO ACHEI no lote A (PA036). Não está refutado. Uma segunda página impressa com o mesmo boletim fecha o item. A tela já diz só "THE SUN, 1939" (TB112, TB375).
- No lote B, nenhuma outra frase da voz diverge da fonte. O "about 28,700" e o "about 27,500" casam com a série 28,675/27,487 (TB350).

**Voláteis**, a reconferir antes do render:
- **s62:** "NO RESULT" e "AS OF OCT. 2026". O gazetteer foi relido hoje às 04:5x e devolveu `{"items":[],"page":1,"totalPages":0,"totalItems":0,"itemsPerPage":50}` (TB148). Antes da publicação, ler de novo; se o Milwaukee Deep entrar na lista, a s62 e a voz da s62 mudam.
- **s63:** a lava do Mount Michael "In August 2026" é da voz, e a tela não a data.
- **s51:** "MORE THAN 3 MILLION" (3,184,835 em 2025).

**Licença, fora da minha lente** (dado ao conferente e à Sala; não pesa no veredito):
- A passagem da M-3 na s69 é texto com "© Copyright International Hydrographic Organization". A recriação literal pede a leitura da permissão.
- O resumo da s73 é © Elsevier. A recriação literal de cinco frases pede a mesma leitura.

## 7 · A lista de nomes (anônimo → pessoa)

- "computer models" (s45) → Yong Wei (University of Washington, CICOES, e NOAA PMEL), Uri S. ten Brink (USGS, Woods Hole Coastal and Marine Science Center) e Brian F. Atwater (USGS na University of Washington): "Wei, Y., ten Brink, U. S., & Atwater, B. F. (2024)", *Journal of Geophysical Research*, CC BY, o modelo da falha [WEI]. Na tela, "Fault model: Wei et al., 2024".
- "the scientists who dated the coral" (s46) → K. Halimeda Kilbourne (Chesapeake Biological Laboratory, University of Maryland Center for Environmental Science) e mais 8 autores, entre eles Jennifer Weil‐Accardo, Nathalie Feuillet, Pierre Deschamps e Brian F. Atwater, *Geophysical Research Letters*, 2025 [KIL], https://doi.org/10.1029/2024GL114448.
- "a reporter on board" (s54) → Josh Dean, *Popular Science*, 21/12/2018 [POPSCI]. Não vai à tela (`nao_vai_para_tela`).
- "five authors" (s73) → Alan J. Jamieson, Thomas D. Linley, Heather A. Stewart, Paul-Henry Nargeolet (a grafia do [NORA]) e Victor Vescovo, *Deep-Sea Research I* 162, 103336 (2020) [NORA]. Na tela, só na linha de autores.
- "the expedition's scientists" (s63) → Cassandra Bongiovanni (Caladan Oceanic), Heather A. Stewart e Alan J. Jamieson, *Geoscience Data Journal* (© 2021; o volume é Geosci. Data J. 2022;9:108–123) [BONG].

## 8 · Os 2 padrões mais vistos

1. **"Source:" sem o ano** (TB003, TB006, TB225). O ano saiu quando a data do fato não era a da fonte. A forma da identidade §7 quer o ano da fonte lida.
2. **O texto de tela conserta e a regência continua com a forma antiga** (TB393, TB396 e as 7 do achado 8). O que a tela não escreve, a arte ainda desenha: a linha que mede o dobro, a fronteira acesa, o grifo fora do texto. Sem pedido a montante, o conserto fica só no texto.

COBERTURA: 397 de 397 (as 407 linhas da tabela, menos as 10 NADA A CHECAR; a lista foi derivada à mão, pelo método do §1)
NOTA: 9,0/10 (todas as afirmações têm veredito, nenhuma REFUTADA, nenhum número, nome ou citação errado na tela; as 7 DIVERGE são de forma e de desenho, cada uma com conserto de uma frase)
VEREDITO: RESSALVA

## Reconferência 1 (textos-tela 4a0566b6)

**Data-base:** 29/10/2026, das 05:1x em diante (Brasília).
**O que li:**
- `out/atlantico-fundo/textos-tela.json`, sha256 `4a0566b639376c94…`;
- a cópia de antes, `out/atlantico-fundo/_tmp/redator/antes-consertos-1/textos-tela.json`, sha256 `418ad23e10523cad…`. É o mesmo arquivo que este laudo conferiu acima.

**Como a lista foi derivada:** por script (`scripts/r1_diff.py`), que compara as duas versões entrada por entrada. Nas cenas s38–s75 saíram 7 entradas e entraram 9: as 7 trocadas e 2 novas, s39 › b3 e s75. Nas seções gerais, mudaram 13 chaves: uma nova, `_consertos`, e as outras com entradas trocadas ou acrescentadas.
- Cada entrada nova ou trocada que toca o lote B ou uma regra geral virou uma linha `R1-`.
- As entradas novas só do lote A ficaram fora do M, porque são do outro verificador: em `_instrucoes_para_a_arte`, as de s35, s05/s06/s26, s30, s03, s36 e s29; em `_pedidos_a_montante`, as de s35, s05/s26/s30 e s30 › b4; o card de Nares (s17); e os rótulos de s02, s12, s15 e s18.
- O resto do arquivo não mudou. Os vereditos de cima continuam valendo para ele.

**As fontes novas desta rodada:**
- `midia/atlantico-fundo/fontes/01-04-stewart-jamieson-2019-earscirev.txt`, l. 554–556 e l. 701;
- `fa-usgs-ofr2006-1210-introduction.txt`, l. 3;
- `fb-usgs-seafloor-map.txt`, l. 21;
- `fb-thesun-1939-07-28-p3-ocr.txt`, l. 1–3 e l. 19;
- `out/atlantico-fundo/_pesquisa/pauta-geo.json`, passagem-de-mona;
- `marca/identidade.md`, l. 1200–1203 e l. 1066.

| id | onde | o texto (o de agora) | veredito | fonte | conserto |
|---|---|---|---|---|---|
| R1-001 | s38 · 0–9.2 · credito | Source: U.S. Geological Survey, 2018 | CONFIRMADA | TB003 atendido. [USGS] "August 22, 2018" (PA051); a forma da identidade §7 | — |
| R1-002 | s39 · 4.0–13.533 · credito | Source: U.S. Geological Survey, 2018 | CONFIRMADA | TB006 atendido; a mesma página | — |
| R1-003 | s39 · 16.633–24.533 · rotulo (novo) | DOMINICAN REPUBLIC | CONFIRMADA | A terra a oeste da Mona Passage é a da República Dominicana. A geo da passagem é "Derivada: costa da República Dominicana (NE 10m) e de Porto Rico (Census 2025)" (pauta-geo.json). O [USGS], l. 21, diz "the entire 770-km-long trench from the Dominican Republic in the west to Anguilla in the east". A grafia é a do AP, igual à do glossário; país em caixa alta (regra 16). A voz da s39 não diz o nome, mas a regência o pede ("with its name"), e o rótulo fica sobre a terra, não sobre a zona | — |
| R1-004 | s45 · 22.933–26.2 · credito | Fault model: Wei et al., 2024 | CONFIRMADA | TB035 atendido. [WEI] "Wei, Y., ten Brink, U. S., & Atwater, B. F. (2024)" | — |
| R1-005 | s56 · 11.0–15.234 · folha_cabecalho | THE SUN (NEWBERRY, S.C.) · JULY 28, 1939 | CONFIRMADA | [SUN]: o cabeçalho impresso é "THE SUN. NEWBERRY. S. C- FRIDAY. JULY 28, 1939". Sem "· P. 3", a peça afirma menos: a página só aparece na URL do acervo (".../1939-07-28/ed-1/seq-3/ocr/", a 3ª imagem da edição), e o número impresso não foi lido (TA090). "S.C." é a forma do AP | — |
| R1-006 | s60 · 19.333–36.4 · rotulo | DOMINICAN REPUBLIC WATERS | CONFIRMADA | PB079: [MR] MRGID 8409, "Dominican (Republic) Exclusive Economic Zone". A voz diz "in the Dominican Republic's waters" (l. 64), e o rótulo faz par com "U.S. WATERS" (TB143) | — |
| R1-007 | s63 · 0–8.5 · credito, com `_condicao: "só nos quadros com tile da MapTiler"` | © MapTiler © OpenStreetMap contributors | CONFIRMADA | Identidade §6 (o crédito enquanto houver mapa da MapTiler na tela) e regra 9. A condição só tira o crédito do quadro sem tile; nada fica sem crédito | — |
| R1-008 | s74 · 1.267–10.7 · credito | Source: NOAA Ocean Exploration, 2026 | CONFIRMADA | TB225 atendido. [NOAA-FISH] "Published January 14, 2026" | — |
| R1-009 | s75 · 0–20.0 · credito (novo; `_condicao` e `_espera_a_caca: true`) | Image(s) and/or video used under license from Shutterstock.com | CONFIRMADA | Letra a letra igual à identidade, l. 1201: "`Image(s) and/or video used under license from Shutterstock.com` na faixa de crédito da última cena". A s75 é a última cena. A condição, "só se algum clipe da caça (s10, s11, s43, s51) vier do Shutterstock", é a da identidade ("exceto Shutterstock") | — |
| R1-010 | `_nao_conferido` | A vírgula de "Washington, D. C." (s21) é normalização: o OCR lê "Washington. D. C."; quem decide é a imagem da página (a Sala confere). | CONFIRMADA | TB387 atendido. `fb-thesun-1939-07-28-p3-ocr.txt`, l. 19: "Washington. D. C.—WNU Service." | — |
| R1-011 | `_nao_conferido` (nova) | O plural "newspapers" da voz (s21, s56) fica NÃO ACHEI (PA036): só um jornal foi lido. O roteiro não muda; a tela diz "THE SUN, 1939". | CONFIRMADA | PA036; o roteiro, l. 24 ("newspapers printed the news") e l. 60 ("what the newspapers reported in 1939"); TB112 | — |
| R1-012 | `_nao_conferido` (nova) | O número da página do jornal de 1939 ("P. 3"): o acervo diz "Image 3", e o número impresso só se lê na imagem (TA090); o cabeçalho vai sem ele. | CONFIRMADA | A URL do acervo é ".../ed-1/seq-3/ocr/" (`fb-thesun-1939-07-28-p3-ocr.txt`, l. 1 e 3), a 3ª imagem da edição. A palavra "Image" do site não li, porque abri só a cópia em texto. O que importa se sustenta: a página impressa não foi lida | — |
| R1-013 | `_instrucoes_para_a_arte` (nova) | "A FAIXA DE CRÉDITO E A FOLHA, um nó só cada …" (o qc-carga, l. 27 e 522–556) | NADA A CHECAR | É regra de montagem e de máquina, não fato público. Fica fora da minha lente | — |
| R1-014 | `_instrucoes_para_a_arte` (nova) | s60 (s61): a linha entre as duas zonas … "Unsettled median line" (3602; MRGID 48982): tracejada e, se tiver nome na tela, "DISPUTED" …; nunca acesa como fronteira (TB396). | CONFIRMADA | TB396 atendido. PB082 (a camada: 3602 "Unsettled median line", Limits in the Seas No. 130; MRGID 48982 "Overlapping claim"); a identidade, l. 1066: "Fronteira disputada: linha tracejada e rótulo `DISPUTED`" | — |
| R1-015 | `_instrucoes_para_a_arte` (nova) | s45 › b0: em 'six miles', só o trecho de Bones Bight/Windlass Bight a Warner (~10 km), ou a costa norte acesa sem prendê-la a 'six miles' (TB393; PB023). | CONFIRMADA | TB393 atendido. [KIL] l. 412–414: "nearly 10 km from Bones Bight and Windlass Bight in the west … to Warner" | — |
| R1-016 | `_instrucoes_para_a_arte` (nova) | s58: as barras em escala, de 0 FT, ou com a quebra do eixo declarada na tela; as três diferenças com o tamanho de cada uma (4,233, 1,115 e 741 ft), nunca três degraus iguais (TB390). | CONFIRMADA | TB390 atendido. A conta, refeita sobre os números da tela: 28,675 − 24,442 = 4,233; 28,576 − 27,461 = 1,115; 27,972 − 27,231 = 741 | — |
| R1-017 | `_instrucoes_para_a_arte` (nova) | s39 › b3–b4 (s40): "DOMINICAN REPUBLIC" sobre a terra do país …; na s60, a forma é a da zona, "DOMINICAN REPUBLIC WATERS". | CONFIRMADA | R1-003, R1-006 | — |
| R1-018 | `_instrucoes_para_a_arte` (nova) | s75: a linha da licença do Shutterstock só entra se algum clipe da caça vier de lá (_condicao), na mesma faixa da GEBCO. | CONFIRMADA | A identidade, l. 1201: "na faixa de crédito da última cena" | — |
| R1-019 | `_pedidos_a_montante` (novo) | s60 › b6 (s61): a linha 3602 tracejada, nunca acesa como fronteira; "DISPUTED" se tiver nome (TB396; PB082) | CONFIRMADA | R1-014 | — |
| R1-020 | `_pedidos_a_montante` (novo) | s45 › b0: o trecho de ~10 km, ou a costa sem prendê-la a 'six miles' (TB393; PB023) | CONFIRMADA | R1-015 | — |
| R1-021 | `_pedidos_a_montante` (novo, ao conceito) | s58: trocar "três degraus iguais" pelas barras em escala: 4,233, 1,115 e 741 ft (TB390) | CONFIRMADA | R1-016; o conceito, s58 › metafora: "como três degraus iguais" | — |
| R1-022 | `_pedidos_a_montante` (novo) | s63 › b0: tirar "measured" da máscara da GEBCO (TID 44; PB087; TB397) | CONFIRMADA | TB397 atendido. PB087: a GEBCO põe o TID 44 em "Indirect measurements" | — |
| R1-023 | `_pedidos_a_montante` (novo) | s67 › b0: tirar "the 2019 survey" da área acesa (PB096; TB398) | CONFIRMADA | TB398 atendido. PB096: 23.323 km² de todos os levantamentos de 2019 a 2026; 15.045 km² da Five Deeps | — |
| R1-024 | `_pedidos_a_montante` (novo) | s69 › b0: os grifos só no texto impresso ("neither political nor oceanographic…" e "Hydrographic Offices may continue to adopt their own limits") (PB106; TB400) | CONFIRMADA | TB400 atendido. Os dois grifos são literais da M-3, p. 124 (TB189, TB190) | — |
| R1-025 | `_pedidos_a_montante` (novo) | s72 › b0: a legenda da Samoa sem "· 2,300 m ·" (PB160; TB401) | CONFIRMADA | TB401 atendido. PB114, PB160 | — |
| R1-026 | `_pedidos_a_montante` (novo) | s73 › b0: o grifo na conclusão literal ("misidentification of the holothurian Peniagone sp.") (PB118; TB403) | CONFIRMADA | TB403 atendido. [NORA], literal (TB214) | — |
| R1-027 | `_pedidos_a_montante` (novo) | s73 › b1: "count and the look" e "can't be checked again" não são texto do artigo (PB119; TB404) | CONFIRMADA | TB404 atendido. O roteiro, l. 80, é a voz; [NORA] não tem as duas expressões | — |
| R1-028 | `_pedidos_a_montante` (novo) | s52 › b0: o cargo só "Five Deeps Expedition", sem "· Dec. 19, 2018" (PB134; TB406) | CONFIRMADA | TB406 atendido. PB134: o retrato é de 24/10/2018 | — |
| R1-029 | `_escolhas` (trocada) | "DOMINICAN REPUBLIC WATERS" (s60) e "DOMINICAN REPUBLIC" sobre a terra (s39 › b3) | CONFIRMADA | R1-003, R1-006 | — |
| R1-030 | `_escolhas` (trocada) | "1970 · NET · ~27,460 FT" em s30, s74 e s75, com "Source: NOAA Ocean Exploration, 2026" na faixa | CONFIRMADA | PB122; R1-008 (o ano da página da NOAA) | — |
| R1-031 | `_regras_de_serie` 1 (trocada) | os marcadores do medidor; a única troca é o de 1883, que passa a "1883 · WIRE · 27,366 FT · ≈ 60 MI EAST" | CONFIRMADA | A troca é de forma, e os números são os de antes: 4,561 fathoms = 27,366 ft (C24, C25 do laudo do canal); "≈ 60 MI" é a forma da linha (TA062, lote A). Os membros do lote B continuam os do TB370 | — |
| R1-032 | `_regras_de_serie` 3 (trocada) | o marcador de 1883, quando tiver rótulo | NADA A CHECAR | Como a TB372: a forma; o número está na regra 1 | — |
| R1-033 | `_regras_de_serie` 11 (trocada) | "A FONTE NA FAIXA ("Source: <instituição>, <ano>", sempre com o ano da fonte lida …: U.S. Geological Survey, 2018 para a página do WHCMSC e 2006 para o OFR; NOAA Ocean Exploration, 2026) entra onde o número aparece pela primeira vez ou onde a voz o diz …" | **DIVERGE** (parcial) | **Os anos estão certos:** a página do WHCMSC, "August 22, 2018" (PA051); o OFR, "U.S. Geological Survey Open-File Report 2006-1210" (`fa-usgs-ofr2006-1210-introduction.txt`, l. 3, e a URL pubs.usgs.gov/of/2006/1210); a NOAA, "Published January 14, 2026". **A segunda metade da regra não vale no texto.** Varri por script (`scripts/r1_fontes.py`) os 75 textos com número das cenas s38–s75. 34 não têm "Source:" no mesmo quadro, e 28 se explicam pela própria regra: a fonte no rótulo, a visita seguinte, ou a medida do canal. Em 5 cenas, o número aparece pela primeira vez, a voz o diz, e nenhuma fonte entra na faixa: s51, s53, s55, s63 e s67. A lista vem logo abaixo | As 5 linhas de "Source:" abaixo, ou a regra fica mais estreita ("…quando a fonte não estiver no rótulo e a cena tiver lugar na faixa") e diz quais números ficam sem fonte |
| R1-034 | `_espera_a_sala` (nova) | o ritmo da s21 e da s57 (o qc-carga) | NADA A CHECAR | É máquina e ritmo, não fato | — |
| R1-035 | `_espera_a_sala` (nova) | "O \"· P. 3\" … saiu (TA090): se a Sala ler o número impresso na imagem, ele volta." | NADA A CHECAR | Diz o que a Sala vai fazer, não diz fato. O fato está na R1-012 | — |
| R1-036 | `_espera_a_sala` (nova) | a linha do Shutterstock também na descrição, se a caça trouxer clipe de lá | CONFIRMADA | A identidade, l. 1202: "repetida na descrição do YouTube" | — |
| R1-037 | `_ritmo_max` (nova chave `estrito`) | s21, s57, s75: 5 (na s75, "na tela, 4") | NADA A CHECAR | É conta de máquina | — |
| R1-038 | `_textos_vivos_max` | s39 passa de 3 a 4 | NADA A CHECAR | É conta de máquina; o 4º texto é o R1-003 | — |
| R1-039 | `_quem` | "com o conserto 1 (os laudos de tela A 23550f78 e B 1b06a6ea sobre o 418ad23e)" | CONFIRMADA | O laudo B que o redator leu é este, no sha256 `1b06a6ea6c6c…`, conferido em `tela/r1/laudo-tela-antes-r1.md`. A cópia de antes é a `418ad23e…`. O laudo A não li, e por isso só o B está confirmado | — |
| R1-040 | `rotulos_dado` · s35 (s63) | "≈ ¾ IN/YR (20 MM/YR)", agora com a fonte "Stewart & Jamieson, 2019, citando DeMets et al., 2010 (SJ l. 554–556)" | CONFIRMADA | [SJ19] l. 554–556: "The Caribbean plate is drifting eastward at approximately 20 mm per year relative to the North American plate (De Mets et al., 2010)". 20 mm = 0.79 in, "≈ ¾"; o texto na tela é o mesmo | — |
| R1-041 | `rotulos_dado` · s50 | a fonte de "27,487 ± 16 FT (8,378 ± 5 M) · BONGIOVANNI ET AL. 2021" perdeu o "PA004" | CONFIRMADA | Só a referência interna mudou; o número é o de antes (PB042) | — |
| R1-042 | `rotulos_dado` · s67 | a fonte de "27,116 ± 43 FT (8,265 ± 13 M)" perdeu o "PA004" | CONFIRMADA | Idem (PB099) | — |
| R1-043 | `glossario` · Wei et al., 2024 | a grafia passa a "Wei et al., 2024" | CONFIRMADA | R1-004 | — |
| R1-044 | `glossario` · Dominican Republic | `_na_tela`: s39 e s60; as duas formas | CONFIRMADA | R1-003, R1-006 | — |
| R1-045 | `_consertos` (chave nova), as 9 entradas do lote B | o antes e o depois de TB396/TB393/TB390, TB003/TB006, TB225, TB387, TB035, o achado 7, a §5 s39, o achado 10 e o achado 8 | CONFIRMADA | Cada antes e depois bate com a diferença real entre `418ad23e` e `4a0566b6` (`tela/r1/diff.txt`). Tudo o que está no registro está no arquivo. Três mudanças estão no arquivo e faltam no registro: a nota do PA036 em `_nao_conferido`, os anos novos da regra 11 e as duas entradas novas de `_espera_a_sala` (a do P. 3 e a da descrição). São do registro interno, não do texto de tela, e não pesam no veredito | — |

**A varredura da regra 11** (R1-033). Uma falha minha, que declaro: no laudo de cima, a TB380 deu a regra 11 como NADA A CHECAR, e eu conferi a forma de cada "Source:" que estava lá, mas não procurei os números que ficaram sem nenhuma. A varredura de agora cobre os 75 textos com número das cenas s38–s75.
- 41 têm uma fonte no mesmo quadro.
- 34 não têm, e destes, 28 se explicam pela própria regra:
  - a fonte está no rótulo (NOAA NCEI, NOAA ROBOT, FIVE DEEPS EXPEDITION, IHO, Landsat, as legendas de origem da s72, Seabed 2030) ou chega na mesma sequência (s39, s50);
  - é uma visita seguinte (THE LIST, SONAR, USGS, o "≈ ¾ IN/YR" na s63 e o "≈ 83 MI" na s74);
  - ou é uma medida do canal sobre o mapa ou sobre os números da tela (≈ 5,700 MI, ~330 MI NORTH OF 60°S, ≈ 1,200 FT, 3–4×, e o caso da s45, logo abaixo).
- Os outros 6, em 5 cenas, pedem a linha. Cada uma cabe no limite de 3 linhas de crédito (regra 10).

| cena | o número, a primeira vez (a voz o diz) | a linha que falta | fonte |
|---|---|---|---|
| s51 · 0.5–3.134 (nos três caminhos) | MORE THAN 3 MILLION | Source: U.S. Census Bureau, 2025 | PB046: a estimativa de 01/07/2025, 3,184,835 (`07-census-NST-EST2025-ALLDATA.csv`, l. 67) |
| s53 · 11.366–16.733 | ≈ 2 H 30 MIN; FIRST PERSON · DEC. 19, 2018 | Source: Five Deeps Expedition, 2018 | [REL], o release de 21/12/2018: "approximate two-and-a-half hour descent"; "the first person to reach the absolute nadir of the Atlantic Ocean" (PB052, PB053) |
| s55 · 2.867–6.3 | SUB GAUGES · WITHIN ~7 FT OF THE SONAR | Source: Bongiovanni et al., 2021 | PB057: [BONG] 8,376 ± 5 m (o submersível) × 8,378 ± 5 m (o sonar) |
| s63 · 21.367–26.567 | ≈ 3 IN/YR (65–78 MM/YR) | Source: Stewart & Jamieson, 2019 | [SJ19] l. 699–701: "at a rate of 65–78 mm per year (Smalley et al., 2007)"; e l. 554–556 para o "≈ ¾ IN/YR" do mesmo quadro |
| s67 · 5.2–7.633 | ~9/10 NEVER MAPPED | Source: Bongiovanni et al., 2021 (uma linha só para este trecho; a de 16.2 s continua) | PB097: [BONG] "Prior to the FDE, around 91% of the trench was un-mapped". Se a linha de 16.2 s só começasse antes, cairia sobre a de Stewart & Jamieson (10.034–15.567) e daria 4 linhas |

Opcional: na s45, "LESS THAN 80 MI SOUTH OF THE TRENCH" (2.734–4.667) vem de [WEI], "Anegada, 125 km south of the trench", e a fonte só entra em 22.933. Se o redator a contar como medida do canal sobre o mapa, fica como está, e o `valor_exato` do rótulo diz isso. Se não, entra "Source: Wei et al., 2024" nesse trecho.

**Os achados do laudo, um a um:**

| achado | o que pedia | estado em 4a0566b6 |
|---|---|---|
| 1 · TB396 | a linha disputada da s60 | ATENDIDO (R1-014, R1-019) |
| 2 · TB393 | o trecho de Anegada da s45 | ATENDIDO (R1-015, R1-020) |
| 3 · TB390 | as barras da s58 em escala | ATENDIDO (R1-016, R1-021). O conceito ainda diz "iguais" até o pedido ser cumprido |
| 4 · TB003, TB006 | "…Geological Survey, 2018" | ATENDIDO (R1-001, R1-002) |
| 5 · TB225 | "…Ocean Exploration, 2026" | ATENDIDO (R1-008) |
| 6 · TB387 | a frase da vírgula | ATENDIDO (R1-010) |
| 7 · Shutterstock | a linha condicional na s75 e na descrição | ATENDIDO (R1-009, R1-018, R1-036) |
| 8 · os 7 pedidos a montante | s63, s67, s69, s72, s73 b0 e b1, s52 | ATENDIDO (R1-022 a R1-028) |
| 9 · TB035 | "Wei et al., 2024" | ATENDIDO (R1-004) |
| 10 · opcional | "DOMINICAN REPUBLIC WATERS" | ATENDIDO (R1-006) |
| 11 · condição | "San Juan area" conforme o recorte | SEGUE CONDICIONAL, como deve: está em `_espera_a_sala` |
| 12 · condição | a régua e o perfil da s75 na mesma escala vertical, com a régua até o fundo do perfil | **NÃO ATENDIDO** (LEVE). A instrução da s75 em `_instrucoes_para_a_arte` fala do tempo dos números, da legenda ×10 e da distância à caixa, mas não da escala |
| §5 · s39 | o nome da República Dominicana | ATENDIDO (R1-003, R1-017) |
| §5 · opcional | os meses do AP | não adotado; era opcional e fica a critério da série |

**O que ainda pede conserto** (tudo LEVE; nenhum número, nome ou citação errado na tela):
1. **R1-033, a regra 11:** as 5 linhas de "Source:" da tabela acima, ou a regra fica mais estreita e diz quais números ficam sem fonte.
2. **O achado 12:** em `_instrucoes_para_a_arte`, "s75: a régua e o perfil na mesma escala vertical (o ×10 declarado vale para os dois); a régua desce além do traço de 25,000 até o fundo do perfil, e os 27,487 FT caem no anel".

COBERTURA DA RECONFERÊNCIA: 39 de 39 (45 linhas R1-; 6 NADA A CHECAR fora do M; 38 CONFIRMADA · 1 DIVERGE · 0 NÃO ACHEI · 0 REFUTADA; lista derivada por script, a diferença 418ad23e → 4a0566b6)
SOMA DO LOTE: 436 de 436 (397 do laudo + 39 da reconferência). Hoje há 1 DIVERGE aberto (R1-033), periférico e de forma de crédito; os 7 DIVERGE de antes estão atendidos; 0 NÃO ACHEI; 0 REFUTADA. Ficam ainda 1 condição de desenho (o achado 12) e os NÃO FOI CHECADO de §6, que continuam com a Sala
NOTA: 9,5/10 (todos os consertos entraram certos; o que falta é uma linha de fonte em 5 cenas e uma condição de escala)
VEREDITO: RESSALVA

## Reconferência 2 (textos-tela b034414f)

**Data-base:** 29/10/2026, das 05:2x em diante (Brasília).
**O que li:**
- `out/atlantico-fundo/textos-tela.json`, sha256 `b034414f3a020cc7…`;
- as cópias de antes, `_tmp/redator/antes-consertos-2/` (`4a0566b6…`, a versão da reconferência 1) e `antes-consertos-3/` (`c511cd7a…`).

**Como a lista foi derivada:** por script (`scripts/r2_diff.py`), de 4a0566b6 a b034414f e de c511cd7a a b034414f.
- Nas cenas s38–s75 entraram 6 entradas e não saiu nenhuma (239 → 245).
- Mudaram 6 chaves gerais: `_consertos`, `_instrucoes_para_a_arte`, `_quem`, `_regras_de_serie`, `_ritmo_max` e `rotulos_dado` (só a s45).
- Do conserto 2 ao 3, só mudou o começo da linha da s51 (de 1.334 para 1.033 s) e o registro dela.

**Cada linha nova, conferida em três pontos:** o autor, o ano, e se ela é a fonte do número do quadro (`scripts/r2_creditos.py`). As seis cabem no limite de 3 linhas de crédito.

| id | onde | o texto | veredito | fonte | conserto |
|---|---|---|---|---|---|
| R2-001 | s45 · 2.734–4.667 · credito | Source: Wei et al., 2024 | CONFIRMADA | `fa-noaa-ir-61168-wei-2024-jgr.txt`: l. 16, "cobbles on Anegada, 125 km south of the trench", é a fonte do "LESS THAN 80 MI SOUTH OF THE TRENCH" (125 km = 77.7 mi), o único número do quadro; l. 74, "Wei, Y., ten Brink, U. S., & Atwater, B. F. (2024)". No quadro, 3 linhas: MapTiler, GEBCO e esta. Ela sai antes da de Kilbourne (4.9 s) | — |
| R2-002 | s51 · 1.033–3.134 · credito, nos três caminhos | Source: U.S. Census Bureau, 2025 | CONFIRMADA | `07-census-NST-EST2025-ALLDATA.csv`, l. 67: "Puerto Rico,…,POPESTIMATE2025 = 3184835", pelo cabeçalho da l. 1. Passa de 3 milhões, como diz "MORE THAN 3 MILLION" (0.5–3.134). O ano 2025 é o da estimativa. Fica com 3 linhas no caminho do mapa, 2 no da caça e 1 no da 1042 | — |
| R2-003 | s53 · 11.366–16.733 · credito | Source: Five Deeps Expedition, 2018 | CONFIRMADA | [REL], publicado pela Five Deeps (fivedeeps.com, contato "FiveDeepsPress"), "DALLAS, TX (December 21, 2018)" (l. 15). O release sustenta "≈ 2 H 30 MIN": "after an approximate two-and-a-half hour descent" (l. 48–49). Sustenta também "FIRST PERSON": o título "First Human Reaches the Deepest Point in the Atlantic Ocean" (l. 10) e "became the first human to dive on a solo mission to the deepest point in the Atlantic Ocean" (l. 15–16). A data "DEC. 19, 2018" do mesmo rótulo não está no release; vem do PB048 (LR F158, F161; a Popular Science, "sometime early Wednesday afternoon", l. 45). Ela já entrou na s52 e continua certa | — |
| R2-004 | s55 · 2.867–6.3 · credito | Source: Bongiovanni et al., 2021 | CONFIRMADA | `02-bongiovanni-2021-gdj3.122.txt`, l. 320–323: "The deepest point was identified as 8,378 ± 5 m … The maximum depth was verified by the subsequent submersible dive to the location as 8,376 ± 5 m (Table 1)". É a fonte de "SUB GAUGES · WITHIN ~7 FT OF THE SONAR" (2 m = 6.6 ft) e do "SONAR · 27,487 FT" do quadro. O ano 2021 é o da TB180 (© 2021). Observação: de 4.633 a 6.3 s, ela divide o quadro com "28,675 FT · THE LIST", que Bongiovanni não traz (só cita o Milwaukee Deep, l. 108–113). O rótulo THE LIST diz a fonte dele (regra 11) | — |
| R2-005 | s63 · 21.367–26.567 · credito | Source: Stewart & Jamieson, 2019 | CONFIRMADA | [SJ19] l. 699–701: "at a rate of 65–78 mm per year (Smalley et al., 2007)", a fonte de "≈ 3 IN/YR (65–78 MM/YR)"; l. 554–556: "approximately 20 mm per year", a de "≈ ¾ IN/YR". "3–4×" é a conta dos dois. Observação: de 21.367 a 22.9 s, ela divide o quadro com "≈ 5,700 MI", que é medida do canal (PB091) e não está em [SJ19] (busquei "5,700" e "9,170": 0 ocorrências). Opcional: o "≈ 5,700 MI" sair em 21.367 (fica 3,3 s no ar) | opcional: "≈ 5,700 MI" de 18.067 a 21.367 |
| R2-006 | s67 · 5.2–7.633 · credito | Source: Bongiovanni et al., 2021 | CONFIRMADA | `02-bongiovanni-2021-gdj3.122.txt`, l. 337–338: "Prior to the FDE, around 91% of the trench was un-mapped", a fonte de "~9/10 NEVER MAPPED". Numa linha própria: 3 linhas no quadro, e ela sai antes da de Stewart & Jamieson (10.034 s) | — |
| R2-007 | `rotulos_dado` · s45 | a fonte de "LESS THAN 80 MI SOUTH OF THE TRENCH": "Wei, ten Brink & Atwater, 2024: \"cobbles on Anegada, 125 km south of the trench\" (… l. 16)" | CONFIRMADA | A citação é literal (l. 16), e os três autores são os da l. 74 | — |
| R2-008 | `_instrucoes_para_a_arte` · s75 | "s75: a régua e o perfil na mesma escala vertical (×10); a régua desce além do traço de 25,000 até o fundo do perfil, e os 27,487 FT caem no anel (conserto 2, o achado 12 do laudo B)." | CONFIRMADA | **O achado 12 está atendido.** O texto é o conserto que propus, letra a letra. Os 27,487 FT são o PB042 | — |
| R2-009 | `_regras_de_serie` 11 | "… (conserto 2: s45, s51, s53, s55, s63 e s67 ganharam a linha que faltava) …" | CONFIRMADA | **O R1-033 está atendido.** Refiz a varredura no b034414f (`scripts/r2_fontes.py`): dos 75 textos com número, 22 ficam sem "Source:" no quadro, e os 22 são dos tipos que a regra explica (a fonte no rótulo, a visita seguinte, a medida do canal). Nenhum número aparece pela primeira vez sem fonte. Os anos da regra são os do R1-033 | — |
| R2-010 | `_consertos` · as 3 entradas "fora do registro" (PA036, os anos da regra 11, `_espera_a_sala`) | o antes e o depois | CONFIRMADA | Batem com o que a reconferência 1 achou fora do registro (R1-045). O registro agora está completo para o lote B | — |
| R2-011 | `_consertos` · o conserto 2 (as 6 linhas e o achado 12) e o conserto 3 (a s51) | o antes e o depois | CONFIRMADA | Batem com a diferença real (`tela/r2/diff.txt`, `diff-3a-fim.txt`). A s51 estava em 1.334 no c511cd7a e está em 1.033 no b034414f, como o registro diz | — |
| R2-012 | `_quem` | "… e o conserto 2 (a reconferência 1 do laudo B, 38cc322d, sobre o 4a0566b6) …" | CONFIRMADA | 38cc322d… é o sha256 deste laudo ao fim da reconferência 1, e 4a0566b6 é a versão que ela leu | — |
| R2-013 | `_ritmo_max` · s51 | as contas do qc-carga (caça 4, 1042 3, mapa 3) | NADA A CHECAR | É conta de máquina | — |

**Uma correção ao meu próprio texto** (a reconferência 1, a tabela da regra 11, linha da s53). Lá, atribuí ao release [REL] a frase "the first person to reach the absolute nadir of the Atlantic Ocean". Ela é da Popular Science (`fb-popsci-2018-12-21-vescovo.txt`, l. 33), não do release. O release sustenta o mesmo fato com outras palavras (R2-003), e por isso a linha "Source: Five Deeps Expedition, 2018" continua certa. O mesmo deslize está no PB053 do laudo-delta, que diz "idem PB047" (o release). Não mexi em nenhum dos dois, porque estão acima desta seção.

**O estado dos achados:** todos os do laudo e da reconferência 1 estão atendidos. O achado 11 ("San Juan area") segue condicional em `_espera_a_sala`, como deve. Não há DIVERGE aberto. Ficam duas observações opcionais (R2-004 e R2-005), que não seguram o texto, e os NÃO FOI CHECADO do §6, que continuam com a Sala.

COBERTURA DA RECONFERÊNCIA: 12 de 12 (13 linhas R2-, 1 NADA A CHECAR fora do M; 12 CONFIRMADA · 0 DIVERGE · 0 NÃO ACHEI · 0 REFUTADA; lista derivada por script, a diferença 4a0566b6 → b034414f)
SOMA DO LOTE: 448 de 448 (397 do laudo + 39 da reconferência 1 + 12 desta). Hoje há 0 DIVERGE aberto (os 7 do laudo e o R1-033 estão atendidos), 0 NÃO ACHEI e 0 REFUTADA
NOTA: 9,8/10 (todas as fontes certas, com o ano; ficam só duas sobreposições opcionais de 1,5–1,7 s entre uma linha de fonte e um número de outra origem)
VEREDITO: PASS

---

## Fecho do setor

COBERTURA: 708 de 708 (lote A 260 de 260; lote B 448 de 448), sobre o `textos-tela.json` `b034414f…`. 0 REFUTADA, 0 DIVERGE aberto e 1 NÃO
ACHEI (TA092, a vírgula de "Washington, D. C." na página de 1939, que só a imagem decide; a forma com ponto está no `_condicao`).

VEREDITO: PASS
