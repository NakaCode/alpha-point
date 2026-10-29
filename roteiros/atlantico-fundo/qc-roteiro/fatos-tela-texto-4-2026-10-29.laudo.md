# Laudo-delta · verificador de fatos · o conserto 6 do texto de tela · atlantico-fundo (vídeo 4) · 29/10/2026

Setor Texto e fatos, tarefa `atlantico-fundo-texto-4`, passo `art` (os textos do lote de consertos: os comentários do Lucas na linha do
tempo, a revisão de espectador r1b e a qualidade-2), data-base 29/10/2026.

**O que foi julgado:** toda entrada que mudou no `out/atlantico-fundo/textos-tela.json` entre `f4eede4d…` (o fim da `atlantico-fundo-texto-3`)
e `1c07466114705183beb633706b3f1a7d31c0424d206a85c7f0c82ce7a8cc9cef` (os consertos 6 e 6b do `redator-de-tela`), por cobertura, num
`verificador-de-fatos` novo, em `effort: 'high'` (regimento; Lucas, 29/10/2026, 12:56). O diff ele mesmo fez, sem partir da lista do redator.

**Depois do laudo, o conserto 6c** (`fdb8e1bb65779d78a94dddc9c210ca7d8aab572211f3dceb40e6fb452418fcf7`, o arquivo final) aplicou os dois
pedidos leves do verificador:
- a fonte do "DISPUTED" da s60 na nota: o protesto de EUA e Reino Unido de 18/10/2007, UN Law of the Sea Bulletin 66, p. 99;
- o `rotulos_dado` "s45 (s46)" dividido em dois.

Entraram também as condições de desenho da s05 e da s67 em `_instrucoes_para_a_arte`. Nenhum texto, t0 ou t1 de tela mudou no 6c: o setor
conferiu pelo diff contra `f4eede4d…`, que dá o mesmo conjunto de entradas de tela julgado aqui. O 6c não passou por reconferência: ele só
escreve as formas que o próprio verificador deu.

**O laudo do verificador vai abaixo como ele o gravou,** copiado sem mudar uma letra: `%TEMP%/claude/vf-atl-C/laudo-texto-4.md`, sha256
`c799da0434af11d25da86ca85a63c1cbd98cacf75f93803e6cdceb49b1da740d`.

---

COBERTURA: 50 de 50 (o diff f4eede4d → 1c074661 do out/atlantico-fundo/textos-tela.json, entrada a entrada, feito por script meu, sem a lista do redator; 49 entradas mudadas, novas ou saídas + 1 item fora do diff, a aritmética da régua do tempo; 35 CONFIRMADA · 15 NADA A CHECAR · 0 DIVERGE · 0 NÃO ACHEI · 0 REFUTADA)

# Laudo de fatos · atlantico-fundo · tarefa atlantico-fundo-texto-4 (consertos 6 e 6b) · verificador-de-fatos

- **Data-base:** 29/10/2026. A rede serviu a três leituras: marineregions.org (eezattribute.php e eezlinetype.php) e o PDF da ONU do démarche EUA–Reino Unido de 2007. Todo o resto saiu das cópias locais de `midia/atlantico-fundo/fontes/` e dos laudos.
- **Objeto:** `out/atlantico-fundo/textos-tela.json`, sha256 `1c07466114705183beb633706b3f1a7d31c0424d206a85c7f0c82ce7a8cc9cef` (conferido), contra a cópia de antes `out/atlantico-fundo/_tmp/redator/antes-texto-4/textos-tela.json`, `f4eede4d8a61533c0592b4e2c38a9db57baff709eb182c129e339794bed4bceb` (conferido).
- **Como a lista foi derivada:** `vf-atl-C/diff.py` compara as entradas serializadas de `_textos_por_cena`, `rotulos_dado`, `nao_vai_para_tela`, `cards_pessoa`, `glossario` e `_avisos_do_ano`.
  - `_textos_por_cena`: de 410 para 417 entradas. Saíram 8, entraram 15 e mudaram 17 (tempo, nota ou âncora), o que fecha a conta 410 − 8 + 15 = 417.
  - `rotulos_dado`: de 59 para 58 (3 mudaram, 1 saiu). `nao_vai_para_tela`: de 47 para 51 (1 mudou, 4 novas). `cards_pessoa`, `glossario` e `_avisos_do_ano` estão IGUAIS.
  - Também mudaram `_instrucoes_para_a_arte`, `_regras_de_serie`, `_consertos`, `_espera_a_sala`, `_pedidos_a_montante`, `_quem`, `_textos_vivos_max` e `_ritmo_max`. Nenhuma dessas chaves vai à tela; delas, só a aritmética da régua entra no laudo (TC4-050).
  - A lista do redator (relato, l. 89–154, e a seção "Conserto 6b") cabe inteira na minha. Faltavam nela as 8 saídas e as mudanças que só tocam a nota, que aqui entram uma a uma.
- **Nota 9/10.** Todo texto novo tem fonte, e toda conta fecha. Fica um ponto LEVE: a nota do "DISPUTED" se apoia só na camada da MarineRegions, cujas palavras são "Overlapping claim" e "Unsettled". O "disputed" vem do démarche de 2007, e a nota não o cita.

## A tabela

Abreviações: [KIL] `03-kilbourne-2025-grl-hal-05463233.txt`; [CGS] `04-uscgs-relatorio-1883-CSC-0082.txt`; [JAM20] `fa-nora-528113-dsr1-2020.txt`; [SJ19] `01-04-stewart-jamieson-2019-earscirev.txt`; [BON] `02-bongiovanni-2021-gdj3.122.txt`; [BGS] `fa-bgs-ngdc-porto-rico-7df163a1.txt`; [IHR] `04-ihr-1936-naming-nares-puerto-rico-deeps.txt`; [NOAA] `fb-noaa-oer-deepest-fish.txt` (todos em `midia/atlantico-fundo/fontes/`); [GEO] `out/atlantico-fundo/_media/geo/zee-*.json`.

| id | cena | papel | o texto novo ou o que mudou | veredito | a fonte e o trecho |
|---|---|---|---|---|---|
| TC4-001 | s05 · 5,733–8,033 | rotulo (novo) | SEAFLOOR | CONFIRMADA, com condição de desenho | [JAM20] l. 7: "observations of the diversity and density of **benthic** epifauna from hadal depths was reported in 1965 from depths of 7300 m in the Puerto Rico Trench"; "a one mile transect by the bathyscaphe". Benthic é o que vive sobre o fundo: a linha dos peixes estava no fundo do mar, a 7.300 m. "SEAFLOOR" na rocha, junto da linha dos peixes, é fiel. Como "o fundo da fossa", **não** é: lá a fossa passa de 8.300 m, e nenhuma fonte dá o fundo sob o sítio (TA254, PA007). O texto não afirma isso: não tem profundidade nem "trench floor". Quem pode afirmar é o desenho, se o rótulo cair no ponto mais baixo do perfil ou num chão desenhado abaixo da linha. A nota já pede "Na rocha, junto da linha dos peixes"; a conferência vai ao qc-visual (Para a Sala) |
| TC4-002 | s15 | rotulo | "1883 · Blake": t1 de 13,333 para 8,233 | NADA A CHECAR | Mudou só o tempo; o texto é o de antes |
| TC4-003 | s15 · 2,866–4,466 | cota | "1883 · WIRE · 27,366 FT ⏎ 4,561 FATHOMS": só a nota | NADA A CHECAR | Texto e tempo são os de antes (TA061/F032–F035): 4.561 × 6 = 27.366 ft |
| TC4-004 | s15 · 4,466–8,233 | cota | "≈ 60 MI": só a nota ("o único 60 MI") | NADA A CHECAR | Igual ao de antes. F035: 96,2 km = 59,75 mi. É de fato o único "60 MI" da cena |
| TC4-005 | s15 · 9,566–13,333 | rotulo (novo) | SEAFLOOR SAMPLE | CONFIRMADA | [CGS] l. 3515–3516: "the specimen·cup brought up brown ooze"; l. 5828–5829: "he sounded in four thousand five hundred and sixty-one fathoms, finding the bottom to be brown ooze"; l. 3517: "bottom specimen and temperature". A voz diz "a sample of the seafloor" (F036). "Source: U.S. Coast and Geodetic Survey, 1883" fica no ar até 13,333 |
| TC4-006 | s15 · 11,566–13,333 | rotulo (novo) | WATER TEMPERATURE | CONFIRMADA | [CGS] l. 3515–3516: "The temperature at this depth was found to be [36fO, OCR] Fahr."; l. 3512: "observations of surface, serial, and **bottom** temperatures". É a temperatura da água no fundo, e a voz diz "the water temperature down there". Vai sem número (PA023): o OCR o deixa ilegível ("36fO", "3tif°"), e a voz não o diz |
| TC4-007 | s45 · 5,8–17,3 | eixo (novo) | 1200 · 1300 · 1400 | CONFIRMADA (é escala) | O evento, [KIL] l. 446–447 ("ranges we combine broadly as 1381–1391 CE"), cai entre 1300 e 1400, e 1492 vem depois de 1400: a régua põe os dois do lado certo dos anos escritos. Sem o "1500", o 1492 fica além do último ano escrito, o que é correto (TC4-050) |
| TC4-008 | s46 · 0–8,4 | eixo (novo) | 1200 · 1300 · 1400 | CONFIRMADA (é escala) | A mesma régua da s45. Os anos saem em 8,4, antes de a régua se esticar em "thousands" (8,79): nenhum ano fica escrito sobre a régua que virou metáfora |
| TC4-009 | s46 · 1,4–8,4 | rotulo (novo) | CORAL BOULDER | CONFIRMADA | [KIL] l. 416–417: "cores of the brain‐coral boulder southeast of Bones Bight yielded four dates"; l. 445–446: "the tsunami is dated most reliably by the paired U‐series dates from core 13AN5 of the Bones Bight boulder"; l. 411–412: "These boulders, which we apply to tsunami dating, flank the island's north shore". O que se datou foi um bloco de coral, e o singular é fiel. "Source: Kilbourne et al., 2025" fica na cena de 0 a 10,4 |
| TC4-010 | s46 · 2,834–10,4 | cota (nova) | 1381–1391 | CONFIRMADA | [KIL] l. 446–447: "These dates imply coral death in 1381–1390 or 1386–1391 CE—ranges we combine broadly as 1381–1391 CE". É a forma da s45 ("1381–1391 · URANIUM-SERIES DATING"). Depois que a régua se estica, ela continua no tique, e ali é o nome da data do evento, não uma medida da régua |
| TC4-011 | s50 · 1,867–8,4 | legenda | "Surveyed Dec. 18–19, 2018": o texto é o mesmo; a âncora passa ao anel | CONFIRMADA | [BGS] l. 11: "The Brownson Deep area of the Puerto Rico Trench was surveyed … over the course of two days – December 18-19, 2018"; l. 13: "18/12/2018 to 19/12/2018". O anel (19,712°N 67,311°W; [BON] l. 452–457, "Puerto Rico Trench/Brownson Deep") fica dentro da área levantada, e preso a ele o texto é verdadeiro. Presa à isóbata, a legenda fazia o contorno passar pela área levantada, o que nenhuma fonte dá. O TB058 continua valendo |
| TC4-012 | s50 · 11,533–15,233 | credito | "Maritime boundaries: MarineRegions.org (VLIZ)": t0 de 9,633 para 11,533 | NADA A CHECAR | Mudou só o tempo. O crédito entra com "Inside the U.S. exclusive economic zone" (11,533), a única afirmação de zona da cena. O "≈ 83 MI · Aguadilla" (9,633) é medida nossa (pauta-geo), nunca foi da MarineRegions e não perde dono |
| TC4-013 | s58 · 2,6–9,2 | eixo | "SONAR" passa a SONAR · SAME SPOT | CONFIRMADA | [SJ19] l. 961–966, nos três pares: "7450 m for that **coincident location**, a median ridge"; sobre Lyman, 8710 m, "this study reports a **coincident** depth of 8370 m for that location"; "the Stewart and Jamieson (2018) maximum water depth of 8536 m **coincides with** an 8300 m depth". Cada sonar está no mesmo ponto do número publicado ao lado. O "8,526" da tela vem da Tabela 1 de [SJ18], e não do "8536" do texto (TB127, PB069); esse par não mudou |
| TC4-014 | s60 · 3,467–19,1 | credito | "Source: Stewart & Jamieson, 2019": t0 de 0,967 para 3,467 | CONFIRMADA | O crédito entra com o primeiro número do estudo, "24,442 FT (7,450 M) · A RIDGE" (3,467). De 0,967 a 3,467 a tela só tem "Milwaukee Deep · LISTED", sem número: nenhum número fica sem dono |
| TC4-015 | s60 · 30,0–36,4 | rotulo (novo) | DISPUTED (na cunha entre as zonas, junto da linha 3602 tracejada) | CONFIRMADA (a nota pede uma 2ª fonte: Para o redator, 1) | **A camada** [GEO]: `zee-sobreposicao-eua-rd.json` é a MRGID 48982, "Overlapping claim: United States (Puerto Rico) / Dominican Republic"; em `zee-limites-eua-rd.json`, a linha 3602 é "Unsettled median line (maritime)", com source1 "Limits in the Seas No. 130". **A MarineRegions** (marineregions.org/eezattribute.php): "For joint regimes and overlapping claims, multiple states can claim a territory (and associated EEZ) or sea area", e o exemplo dado é este mesmo, "Overlapping claim: Puerto Rico / Dominican Republic". Em marineregions.org/eezlinetype.php, a "Unsettled median line (maritime)" é "A median line calculated by VLIZ in cases where the unsettled status is purely maritime in nature"; o tipo oposto é "Unilateral claim (undisputed)", "An EEZ boundary defined by one state that is uncontested by another state". **O protesto:** o démarche conjunto do Reino Unido e dos EUA de 18/10/2007 contra a Lei dominicana 66-07 (UN Law of the Sea Bulletin 66, p. 99): "The Embassies note that portions of the claimed EEZ impinge on the rights of the United Kingdom in respect of the Turks and Caicos Islands and of the **United States in respect of Puerto Rico**". **O que as fontes sustentam:** a cunha é mar que os dois Estados reivindicam, e os EUA protestaram contra a reivindicação dominicana ali. "DISPUTED" sobre a cunha é fiel e não toma o lado de ninguém. A camada sozinha sustenta "OVERLAPPING CLAIMS" (e "UNSETTLED" para a linha); a palavra "DISPUTED" se apoia no démarche. Duas condições: o rótulo fica DENTRO da cunha, nunca sobre a zona dos EUA nem sobre a dominicana; e a 3602, que é uma linha calculada pela VLIZ e não a linha de controle de fato, vai tracejada, nunca acesa como fronteira (TB396). O crédito "Maritime boundaries: MarineRegions.org (VLIZ)" está no ar de 19,333 a 36,4 |
| TC4-016 | s63 · 18,067–21,367 | cota | "≈ 5,700 MI": t1 de 22,9 para 21,367 | NADA A CHECAR | Mudou só o tempo. Isso fecha a observação do R2-005: a fonte de Stewart & Jamieson não fica mais sob um número que não é dela |
| TC4-017 | s63 · 18,067–21,367 | credito (novo) | Source: Bongiovanni et al., 2021 (o dono do "≈ 5,700 MI") | CONFIRMADA | As duas pontas são do [BON]: l. 452–457 e a Tabela 1 ("Puerto Rico Trench/Brownson Deep 19.712°N 67.311°W 8,378 ± 5") e l. 330–332 ("Meteor Deep as 8,265 ± 13 m uncertainty (55.230°S/26.173°W)"). Conta refeita com Vincenty (WGS84): **9.170,3 km = 5.698,1 mi**; pelo haversine (R = 6.371 km), 9.194,6 km = 5.713,2 mi. "≈ 5,700" vale nas duas (PB091, TB160). A forma é a da s04, já CONFIRMADA (TA015, "≈ 9,500 MI" com Bongiovanni). O Bongiovanni dá as pontas, não a distância: daí o "≈" e a conta no `rotulos_dado` |
| TC4-018 | s67 · 10,034–13,567 | credito | "Source: Stewart & Jamieson, 2019": t1 de 15,567 para 13,567 | CONFIRMADA | O 27,651 (10,034–15,567) não perde dono: a linha das duas fontes entra em 13,567 (TC4-019) |
| TC4-019 | s67 · 13,567–15,567 | credito (novo) | Stewart & Jamieson, 2019; Bongiovanni et al., 2021 (sem "Sources:", numa linha) | CONFIRMADA (a atribuição) | Os dois números no ar nesse trecho: "27,651 FT (8,428 M) · MOST PUBLISHED", de [SJ19] (8.428 m = 27.650,9 ft; V40 em `fatos-medidas.txt`), e "DECEMBER 2018 · SONAR · 27,487 FT", do [BON] l. 452–457, "8,378 ± 5" (8.378 m = 27.486,9 ft). Cada fonte com o seu número. **A forma** (sem a palavra "Sources:", contra a identidade §7) não é questão de fato: a decisão é da Sala e já está em `_espera_a_sala` |
| TC4-020 | s67 · 12,567–26,7 | eixo | "DETAIL · 500 FT" (12,567–15,567) passa a DETAIL · 700 FT (12,567–26,7) | CONFIRMADA (é escala; condição de desenho) | A lupa tem de conter 27,116 ([BON], 8.265 m = 27.116,1 ft), 27,487 e 27,651. De um extremo ao outro são 27.651 − 27.116 = **535 ft**, menos que 700, e a janela de exemplo da nota (27.000–27.700) contém os três. O rótulo afirma a altura da janela, então o desenho tem de medir 700 ft na escala da régua. Vai ao qc-visual (Para a Sala) |
| TC4-021 | s67 · 13,567–15,567 | cota | "DECEMBER 2018 · SONAR · 27,487 FT": só a nota | NADA A CHECAR | Texto e tempo iguais. A nota manda a fonte para a linha das duas fontes (TC4-019), o que está certo |
| TC4-022 | s67 · 15,567–26,7 | credito | "Source: Bongiovanni et al., 2021": t0 de 16,2 para 15,567 | CONFIRMADA | Fecha o vão na faixa. Tudo o que esse crédito assina é do [BON]: "27,116 ± 43 FT (8,265 ± 13 M)" (18,9) e "371 FT (113 M) SHALLOWER" (20,434), já que 8.378 − 8.265 = 113 m = 370,7 ft ≈ 371 |
| TC4-023 | s67 · 20,434–26,7 | cota | "371 FT (113 M) SHALLOWER": só a nota (a âncora no colchete) | NADA A CHECAR | Texto e tempo iguais. Conta refeita: 113 m = 370,7 ft, e o colchete cabe na lupa de 700 ft |
| TC4-024 | s67 · 31,1–41,834 | rotulo | "SOUTHERN OCEAN (IHO, 2023)": só a nota (a pílula longe da ponta da fossa) | NADA A CHECAR | Texto e tempo iguais; muda só a posição |
| TC4-025 | s67 · 40,3–41,834 | rotulo (novo) | ATLANTIC OCEAN (ao norte da linha de 60°S) | CONFIRMADA | [BON] l. 127–128: "Therefore, the Meteor Deep lies within the waters of the southernmost Atlantic Ocean and not the Southern Ocean"; l. 129: "(8,265 ± 13 m) it is located within the waters of the Atlantic Ocean". O limite que sustenta a frase é a linha de 60°S, a mesma do "SOUTHERN OCEAN (IHO, 2023)" (F244); pela V43, o Meteor Deep fica 531,2 km (330,1 mi) ao norte dela. A voz diz "is in the Atlantic". É rótulo sem número, sem crédito próprio |
| TC4-026 | s72 · 0–4,5 | rotulo | "SNAILFISH": t0 de 0,3 para 0 | NADA A CHECAR | Mudou só o tempo |
| TC4-027 | s72 · 0–4,5 | rotulo | "SEA CUCUMBER": t0 de 0,3 para 0 | NADA A CHECAR | Mudou só o tempo |
| TC4-028 | s75 · 0–13,0 | credito | "Image(s) and/or video used under license from Shutterstock.com": era condicional, de 0 a 20,0; agora vale de 0 a 13,0 | CONFIRMADA | A s10 usa o Shutterstock 3607760923 (Wirestock Creators), baixado às 12:07:59 e aprovado pelo conferente com `mesmo_item: true` (`caca-relato.md`, Fase B). O `graphics/s10.html` cita `_media/footage/s10/aguadilla-costa-mar-aberto-aerea.mp4` e "Shutterstock 3607760923". O Lucas respondeu "2. B", "B. Só a linha do fim" (`caca-relato.md` l. 141–147). O texto bate letra a letra com `marca/midia.md` §3.4 ("em vídeo, a linha `Image(s) and/or video used under license from Shutterstock.com` … na faixa de crédito da última cena e repete na descrição"). A linha sai em 13,0, ainda dentro da última cena |
| TC4-029 | s75 · 13,0–15,0 | credito (novo) | Source: International Hydrographic Review, 1936 | CONFIRMADA (o PAR) | Rótulo no ar: "HMS Challenger · 23,250 FT" (13,0–15,0). [IHR] l. 4–6: "On 26th March 1875, H.M.S. Challenger … 3,875 fathoms = 7,087 metres"; 3.875 × 6 = 23.250 ft. A forma é a da s18 |
| TC4-030 | s75 · 14,2–16,2 | credito (novo) | Source: Jamieson et al., 2020 | CONFIRMADA (o PAR) | Rótulo no ar: "1964 · CREW · ~24,000 FT" (14,2–16,2). [JAM20] l. 7: "from depths of 7300 m in the Puerto Rico Trench"; 7.300 m = 23.950 ft, ~24,000. A forma é a da s26. De 14,2 a 15,0 há duas fontes e dois rótulos, cada um com a sua |
| TC4-031 | s75 · 15,4–18,6 | credito (novo) | Source: NOAA Ocean Exploration, 2026 | CONFIRMADA (o PAR) | Rótulos no ar: "~26,900–27,560 FT (8,200–8,400 M) · FISH LIMIT (NOAA ESTIMATE)" (15,4–17,4) e "1970 · NET · ~27,460 FT" (16,6–18,6). [NOAA] l. 28: "there may be a boundary between 8,200 and 8,400 meters deep"; l. 26: "In 1970, a deep-sea cusk eel was caught in a net that descended to 8,370 meters (27,460 feet)". A página tem `modified_time` 2026-01-14 (l. 8), daí o "2026". A forma é a da s74. O crédito cobre os dois rótulos e sai com o último |
| TC4-032 | s75 · 18,5–20,0 | credito (novo) | Source: Bongiovanni et al., 2021 | CONFIRMADA (o PAR) | Rótulo no ar: "DECEMBER 2018 · SONAR · 27,487 FT" (18,5–20,0). [BON] l. 452–457: "8,378 ± 5" (= 27.486,9 ft). A forma é a da s02 |
| TC4-033 | s10 | credito (saiu) | sai "<artista>/Shutterstock.com" [caca] | CONFIRMADA (a saída cumpre a licença) | O que a licença pede, e o que o Lucas escolheu para este vídeo, é a linha do fim (TC4-028; midia §3.4: o crédito do artista se decide a cada vídeo, "nos próximos vídeos, pergunta nova"). O `s10.html` já diz "o crédito '<artista>/Shutterstock.com' NÃO ENTRA". A s10 fica sem crédito na tela; quem cobre o clipe é a linha da s75 e a descrição |
| TC4-034 | s15 | cota (saiu) | sai "1883 · WIRE · 27,366 FT · ≈ 60 MI EAST ⏎ 4,561 FATHOMS" (4,466–13,333) | NADA A CHECAR | Só a saída, e nada se perde: a profundidade continua no marcador (TC4-003), a distância na linha "≈ 60 MI" (TC4-004) e o "leste" no traçado do alfinete (leste) ao anel (oeste); a voz diz "east". Fecha o A8 (TA062) |
| TC4-035 | s15 | eixo (saiu) | sai "DETAIL · 500 FT" (2,866–5,166) | NADA A CHECAR | Só a saída. A voz da s15 não fala dos 121 ft |
| TC4-036 | s43 | credito (saiu) | sai "<artista>/Shutterstock.com" [caca] | CONFIRMADA (a saída está certa) | A caça não achou a s43 em 4K (`caca-relato.md`, "s43 fica NÃO ACHADO em 4K"). A cena usa a foto do Commons (`graphics/s43.html`, `_media/foto/s43/s43-anegada-island-aerial-2012-david-broad.jpg`), e o crédito dela, "David Broad / Wikimedia Commons · CC BY 3.0" [sem_caca], continua no arquivo, de 0 a 3,3 |
| TC4-037 | s45 | cota (saiu) | sai "LESS THAN 80 MI SOUTH OF THE TRENCH" (2,734–4,667) | NADA A CHECAR | Só a saída. A voz da s45 não diz a distância |
| TC4-038 | s45 | credito (saiu) | sai "Source: Wei et al., 2024" (2,734–4,667) | CONFIRMADA (nenhuma afirmação perde dono) | O Wei era dono só do "LESS THAN 80 MI" (125 km, Wei l. 16), que também saiu. De 2,734 a 4,667 ficam "Anegada" e "North shore": um nome e um lugar, sem número. A fonte deles é o [KIL] l. 411–412 ("flank the island's north shore"), cujo crédito entra em 4,9. O Wei continua na cena como dono do "M 8+ · COMPUTER MODELS" ("Fault model: Wei et al., 2024", 22,933–26,2) |
| TC4-039 | s51 | credito (saiu) | sai "<artista>/Shutterstock.com" [caca] | CONFIRMADA (a saída está certa) | O clipe da s51 é do Envato (485c96d0…, world_footage, licenciado no projeto `atlantico-fundo`, com o PDF 4L; `caca-relato.md`, Fase B), não do Shutterstock. O Envato não pede crédito na tela, e o `s51.html` diz "Shutterstock, que aqui não existe". "Source: U.S. Census Bureau, 2025" continua com o "MORE THAN 3 MILLION" |
| TC4-040 | s63 | legenda (saiu) | sai "Goal: map the whole ocean floor by 2030" | NADA A CHECAR | Só a saída. Fica o rótulo "Seabed 2030", e a voz diz a meta |
| TC4-041 | — | rotulos_dado s15 | na_tela passa a "1883 · WIRE · 27,366 FT / 4,561 FATHOMS (…) e ≈ 60 MI (na linha)" | CONFIRMADA | Bate com o `_textos_por_cena` (TC4-003, TC4-004). O `valor_exato` é o mesmo: 4.561 fathoms = 27.366 ft; ≈ 60 mi (59,75) |
| TC4-042 | — | rotulos_dado "s45 (s46)" | a data, agora em duas cenas | CONFIRMADA (observação de forma: Para o redator, 2) | [KIL] l. 445–447, citado letra a letra (só o hífen especial de "U‐series" virou "-"). O valor 1381–1391 bate. Mas a chave `cena` vale "s45 (s46)", que não é um id de cena |
| TC4-043 | — | rotulos_dado s63 | a fonte ganha as pontas do Bongiovanni | CONFIRMADA | É o TC4-017. As linhas citadas (452–457, 330–332, 461–464) conferem no arquivo |
| TC4-044 | — | rotulos_dado s45 (saiu) | sai "LESS THAN 80 MI SOUTH OF THE TRENCH" | NADA A CHECAR | Sai junto com o rótulo (TC4-037) |
| TC4-045 | — | nao_vai_para_tela (mudou) | "<artista>/Shutterstock.com" em s10, s43 e s51: o motivo agora é a decisão do Lucas | CONFIRMADA | `caca-relato.md` l. 141–147: "2. B", "B. Só a linha do fim", e "Wirestock Creators/Shutterstock.com" não vai na cena de s10 |
| TC4-046 | — | nao_vai_para_tela (nova) | s45, "LESS THAN 80 MI" e "Wei et al., 2024" | CONFIRMADA | O motivo ("a voz não diz a distância") confere com o `_texto_aprovado` da s45 |
| TC4-047 | — | nao_vai_para_tela (nova) | s63, "Goal: map the whole ocean floor by 2030" | CONFIRMADA | A voz diz "Seabed 2030, the project to map the whole ocean floor by 2030"; a legenda repetia a voz |
| TC4-048 | — | nao_vai_para_tela (nova) | s15, a lupa e o "· ≈ 60 MI EAST" | CONFIRMADA | A voz da s15 não diz os 121 ft (`_texto_aprovado`) |
| TC4-049 | — | nao_vai_para_tela (nova) | o número da temperatura de 1883, "brown ooze", "brain-coral" e "Bones Bight" | CONFIRMADA | O OCR "36fO" e "3tif°" está em [CGS] l. 3515 e 5829. A voz não diz a temperatura, nem "brain-coral", nem "Bones Bight" |
| TC4-050 | — | `_instrucoes_para_a_arte` / nota da s45 (fora do diff da tela) | a régua: 1386 a 86 % de 1300–1400; 1492 a 92 % de 1400–1500; 3,2 px por ano; o "1500" a 26 px do 1492; o "1400" a 45 px do 1386 | CONFIRMADA | 86/100 = 86 %; 92/100 = 92 %; 8 × 3,2 = 25,6 ≈ 26 px; 14 × 3,2 = 44,8 ≈ 45 px. 1386 é o meio de 1381–1391 |

## As contas refeitas (todas fecham)

- De 19,712°N 67,311°W a 55,230°S 26,173°W: 9.170,3 km = 5.698,1 mi (Vincenty, WGS84) e 9.194,6 km = 5.713,2 mi (haversine, R = 6.371 km).
- 8.428 m = 27.650,9 ft; 8.378 m = 27.486,9 ft; 8.265 m = 27.116,1 ft; 113 m = 370,7 ft; 13 m = 42,7 ft; 5 m = 16,4 ft.
- A lupa da s67: 27.651 − 27.116 = 535 ft, menos que os 700 da janela.
- 3.875 fathoms × 6 = 23.250 ft; 4.561 × 6 = 27.366 ft.
- Os tempos de tela que as notas declaram (3,77 s; 1,77 s; 2,3 s; 7,0 s; 1,53 s; 3,3 s; 3,7 s) conferem com os t0 e t1.

## Os achados que pedem ação

- **[LEVE] TC4-015 · s60, a nota do "DISPUTED".** A nota cita só a camada da MarineRegions, que fala em "Overlapping claim" e em linha "Unsettled". Quem sustenta a palavra "disputed" é o démarche de 2007. Sem ele, se alguém contestar o rótulo, a nota não o defende.
  → **CONSERTO:** na nota de `{"cena":"s60","papel":"rotulo","texto":"DISPUTED"}`, logo depois de `source1 "Limits in the Seas No. 130"`, acrescentar: `; a disputa: o démarche conjunto do Reino Unido e dos EUA de 18/10/2007 contra a Lei dominicana 66-07, "portions of the claimed EEZ impinge on the rights … of the United States in respect of Puerto Rico" (UN Law of the Sea Bulletin 66, p. 99: https://static.un.org/Depts/los/LEGISLATIONANDTREATIES/PDFFILES/communications/uk_usa_re_dom2007frombulletin66.pdf); a MarineRegions define a área como "multiple states can claim … sea area" (https://marineregions.org/eezattribute.php)`. O texto de tela não muda.
  → RAIZ: PONTUAL.
- **[LEVE, forma, não fato] TC4-042 · `rotulos_dado`, `"cena": "s45 (s46)"`.** Quem procura o `rotulos_dado` pelo id da cena não acha a s46, e talvez nem a s45.
  → **CONSERTO:** dividir em duas entradas, `{"cena":"s45","na_tela":"1381–1391 · URANIUM-SERIES DATING", …}` e `{"cena":"s46","na_tela":"1381–1391","por_que_diverge":"não diverge; sem o método, que a voz disse na s45", …}`, com a mesma `fonte` e o mesmo `valor_exato`.
  → RAIZ: PONTUAL.

Nenhuma afirmação DIVERGE, nenhuma é REFUTADA, nenhuma ficou NÃO ACHEI.

## Para o redator-de-tela

1. **s60, a nota do "DISPUTED"** (TC4-015): acrescentar a segunda fonte, como no conserto acima. O texto de tela fica.
2. **`rotulos_dado`, "s45 (s46)"** (TC4-042): dividir em duas entradas, com `"cena":"s45"` e `"cena":"s46"`, como no conserto acima.

Nenhum outro conserto. O texto de tela das 15 entradas novas e das 17 mudadas está CHECADO E LIMPO.

## Para a Sala

- **NÃO ACHEI: nenhum.** O texto do *Limits in the Seas* No. 130 (Departamento de Estado, 2014) ficou sem leitura, e não fez falta: a camada e o démarche bastam para o "DISPUTED".
- **Ao qc-visual, no quadro.** São condições de desenho; o texto já as atende:
  - s05: o "SEAFLOOR" fica na rocha, junto da linha dos peixes. Não pode cair no ponto mais baixo do perfil desenhado nem num "chão" desenhado abaixo da linha dos peixes: nenhuma fonte dá o fundo da fossa sob o sítio de 1964 (TA254, PA007, o A3 do laudo da tela);
  - s60: o "DISPUTED" fica dentro da cunha da sobreposição (MRGID 48982), nunca sobre a zona dos EUA nem sobre a dominicana, e a 3602 vai tracejada, nunca acesa como fronteira;
  - s67: a janela "DETAIL · 700 FT" mede 700 ft na escala da régua e contém 27,116, 27,487 e 27,651.
- **Forma, decisão da Sala (não é fato).** A linha da s67 sem o "Sources:" (TC4-019) está em `_espera_a_sala`; a atribuição está certa nos dois caminhos. A s09 e a s35, com 4 linhas de crédito, ficam fora deste diff e não mudaram de texto.
- **O que reconferir na véspera de publicar:**
  - a página da NOAA Ocean Exploration (fb-noaa-oer-deepest-fish, modificada em 14/01/2026): o ano do crédito "NOAA Ocean Exploration, 2026" (s74, s75) acompanha a página;
  - a sobreposição EUA–RD na MarineRegions (consultada em 28/10/2026): ela some se os dois países assinarem um tratado, e então o "DISPUTED" deixa de valer. Não achei nenhum tratado.
- **Fora do escopo, sem veredito novo:** as cenas fora do diff, como o "~330 MI NORTH OF 60°S" da s67 (V43), que não mudou.

## As fontes abertas na rede nesta tarefa

- https://marineregions.org/eezattribute.php (POL_TYPE "Overlapping claim"; o exemplo Puerto Rico / Dominican Republic)
- https://www.marineregions.org/eezlinetype.php ("Unsettled median line (maritime)"; "Unilateral claim (undisputed)")
- https://www.marineregions.org/eezmethodology.php (não define os termos)
- https://static.un.org/Depts/los/LEGISLATIONANDTREATIES/PDFFILES/communications/uk_usa_re_dom2007frombulletin66.pdf (o démarche de 18/10/2007, p. 98–99)

## Os 2 padrões que mais apareceram

1. **Cada fonte presa ao seu número, no tempo dele** (s60, s63, s67, s75). O conserto 6/6b fechou todos os vãos e todas as fontes erradas sob um número, o padrão que os laudos anteriores mais apontavam (R2-005, a qualidade-2).
2. **Rótulos com as palavras da voz, sem o que a voz não diz** (SEAFLOOR SAMPLE, WATER TEMPERATURE, CORAL BOULDER, SEAFLOOR). Todos são fiéis à fonte primária, e o que ela não sustenta (a temperatura ilegível no OCR, o fundo da fossa) ficou fora da tela.

## A conclusão

- **CHECADO E LIMPO** no texto de tela: os 50 itens têm veredito, nenhuma citação entre aspas diverge e todas as contas fecham.
- Os 2 consertos pedidos são LEVES, um de nota e um de forma de máquina, e nenhum muda o que vai à tela.

NOTA: 9/10
VEREDITO: PASS

---

## Fecho do setor

COBERTURA: 50 de 50 (35 CONFIRMADA, 15 NADA A CHECAR, 0 DIVERGE, 0 NÃO ACHEI, 0 REFUTADA), sobre o `textos-tela.json` `1c074661…`; o arquivo
final `fdb8e1bb…` só acrescenta os dois pedidos leves e as condições de desenho, sem mudar a tela.

VEREDITO: PASS
