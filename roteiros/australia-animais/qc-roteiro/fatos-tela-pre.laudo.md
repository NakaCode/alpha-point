COBERTURA: 46 de 46

# Laudo do `verificador-de-fatos`: a pré-conferência dos fatos de tela (`australia-animais`, vídeo 8, passo `screen_text`)

Revisão julgada: `bfd94a54b442`

- **Data-base:** 19/11/2026, ~17h40–18h50 (Brasília). As fontes são as cópias locais (o PDF do NCIS, o xlsx do ABS, as cópias de
  `midia/australia-animais/fontes/` e de `out/_tmp/bancada-australia-animais/`) e **uma** consulta de rede: o Europe PMC (o robots.txt de
  `www.ebi.ac.uk` lido antes, ~18:18, sem nome da Anthropic, Crawl-Delay 10; um pedido, com o User-Agent do canal; `_log-rede.txt`).
  **O site do NCIS não foi acessado**: só a cópia local do PDF (sha256 `6bdefa14…`, igual ao do servidor, pela Sala).
- **Como a lista foi derivada:** à mão, do pedido (`out/australia-animais/_tmp/verificar-tela/pedido-pre.md`) e das notas dos itens 48, 54,
  21, 18, 17, 13, 3, 5, 14, 15, 19, 20 e 26 de `para-passos-seguintes.json` (`85217aeb…`): cada número, data, citação aspada, atribuição e
  crédito que elas nomeiam é uma linha (43), mais 2 linhas da régua dos soros que a régua mostra e a nota não lista (1930 e 1970) e 1 linha
  para a nota da Sala que diz "todas em acidente de veículo". **Não é a passada por cobertura do `textos-tela.json`** (que não li: o
  redator escreve agora); essa vem depois, com a Sala.
- **Placar:** 46 itens · **40 `confirmado`** · **6 `corrigir`** · **0 `NÃO CONFERIDO`** · 0 `nada a checar`. CHECADO POR INTEIRO na lista
  do pedido.
- **Nada foi editado** além deste arquivo e de `out/australia-animais/_tmp/verificar-tela/`. Sem commit, sem `regie`, sem gasto.

NOTA: 8.5/10 — os números do NCIS, da régua dos soros e do ABS conferem letra a letra na fonte primária; os seis `corrigir` são de forma
de tela e de crédito (um autor trocado, um dono que falta, períodos e recortes que a fonte dá e a forma não), e nenhum toca a voz.

## Os `corrigir` (a forma certa)

| id | onde | de | para |
|---|---|---|---|
| P06 | registro da Sala (`navegador-sala.md`; item 48) | "222 cavalos, 92 bovinos, 82 cães e 53 cangurus, **todas em acidente de veículo**" | só os **53 cangurus** são todos de veículo; bovinos, 42 de 92 (45,7 %); cavalos, quedas 59,5 %; cães, mordida 46,3 % e queda 42,7 % |
| P08 | s63 P3, a linha condicional | `HORSES 222 · CATTLE 92 · DOGS 82 · 2001–2021` | `ANIMAL-RELATED DEATHS, 2001–2021: HORSES 222 · CATTLE 92 · DOGS 82` · `Source: National Coronial Information System (NCIS), 2024 · CC BY 4.0` |
| A01 | s06, s07, s14, s63, s66 e as folhas do ABS | `2016–2025 · 2024–2025 PRELIMINARY` | `2016–2025 · 2023 REVISED · 2024–2025 PRELIMINARY` (curta: `2016–2025 · FINAL DATA TO 2022`) |
| C01 | s25 | `Source: Lee et al., Royal Society Open Science, 2016` sob "FRONT-FANGED" | `Source: Lee et al., Royal Society Open Science, 2016; Jackson et al., Toxins, 2016` (Lee não diz "front-fanged"; ou `; Live Science, 2023`) |
| C07 | s58 | `Source: Winkel et al., Australian Family Physician, 2004; Wiener, MJA, 2003` | `Source: Nimorakiotakis & Winkel, Australian Family Physician, 2004; Wiener, Medical Journal of Australia, 2003` |
| C15 | s16 P4 | `≈ 12,000 HOSPITAL ADMISSIONS (SPIDERS) · ONE STUDY · 0 DEATHS` · `Source: Welton et al., Internal Medicine Journal, 2017 (via University of Melbourne)` | `≈ 12,000 HOSPITAL ADMISSIONS FOR SPIDER BITES (2001–2013) · 0 DEATHS (2000–2013) · ONE STUDY` · `Source: University of Melbourne (Pursuit), Jan. 17, 2017` |

## Os `NÃO CONFERIDO`

**Nenhum.** Todos os itens tinham cópia local da fonte. O NCIS (`https://www.ncis.org.au/research-publications/fact-sheets`, que recusa
robô) não foi aberto: a ficha se leu no PDF local, que é o documento de quem o publica.

## A tabela (uma linha por item)

| id | item | afirmação | veredito | a forma que a fonte sustenta | fonte (URL) |
|---|---|---|---|---|---|
| P01 | 48 | 713 mortes ligadas a animais, 2001–2021 | confirmado | 713 ANIMAL-RELATED DEATHS · 2001–2021 | https://www.ncis.org.au/research-publications/fact-sheets (recusa robô; não acessado) |
| P02 | 48 | 222 com cavalos (31,1 %) | confirmado | HORSES 222 | idem P01 |
| P03 | 48 | 92 com bovinos | confirmado | CATTLE 92 | idem P01 |
| P04 | 48 | 82 com cães | confirmado | DOGS 82 | idem P01 |
| P05 | 48 | 53 com cangurus | confirmado | KANGAROOS 53 · ALL VEHICLE INCIDENTS (se for à tela) | idem P01 |
| P06 | 48 | '222 com cavalos, 92 com bovinos, 82 com cães e 53 com cangurus, todas em acidente de veículo' | corrigir | (nada na tela) — no registro: 'todas em acidente de veículo' vale só para os 53 cangurus; bovinos, 42 de 92; cavalos, quedas 59,5 %; cães, mordidas 46,3 % e quedas 42,7 % | idem P01 |
| P07 | 48 (s58) | 'There were no deaths confirmed to have involved a spider bite' (2001–2021) | confirmado | literal, sem ponto final como na ficha: "There were no deaths confirmed to have involved a spider bite" (NCIS, 2001–2021) · ou como dado: NO CONFIRMED SPIDER-BITE DEATH · 2001–2021 | idem P01 |
| P08 | 48 e conceito | 'HORSES 222 · CATTLE 92 · DOGS 82 · 2001–2021' | corrigir | ANIMAL-RELATED DEATHS, 2001–2021: HORSES 222 · CATTLE 92 · DOGS 82 | idem P01 |
| P09 | 54 | 'Source: National Coronial Information System (NCIS), 2024 · CC BY 4.0' | confirmado | Source: National Coronial Information System (NCIS), 2024 · CC BY 4.0 (mais preciso, se couber: Source: NCIS Fact Sheet FS24-09, Nov. 2024 · CC BY 4.0) | idem P01 |
| P10 | 21 | 'However, deaths as a result of these interactions remain relatively rare, particularly in comparison to deaths associated with other species.' | confirmado | a frase inteira, literal, DEPOIS da do 'Thousands' (P11) | idem P01 |
| P11 | 21 | 'Thousands of hospital admissions are attributable to contact with bees, hornets, wasps, spiders, snakes, ticks, ants and marine animals each year in Australia.' | confirmado | Thousands of hospital admissions are attributable to contact with bees, hornets, wasps, spiders, snakes, ticks, ants and marine animals each year in Australia (1). However, deaths as a result of these interactions remain relatively rare, particularly in comparison to deaths associated with other species. | idem P01 |
| S01 | 18 | 1955 · taipan | confirmado | 1955 · TAIPAN ANTIVENOM | https://europepmc.org/article/MED/17030053 |
| S02 | 18 | 1956 · marrom | confirmado | 1956 · BROWN SNAKE ANTIVENOM | idem S01 |
| S03 | 18 | 1958 · death adder | confirmado | 1958 · DEATH ADDER ANTIVENOM | idem S01 |
| S04 | 18 | 1959 · Papuan black snake | confirmado | 1959 · PAPUAN BLACK SNAKE ANTIVENOM | idem S01 |
| S05 | 18 | 1961 · sea snake | confirmado | 1961 · SEA SNAKE ANTIVENOM | idem S01 |
| S06 | 18 | 1962 · polivalente | confirmado | 1962 · POLYVALENT ANTIVENOM | idem S01 |
| S07 | 18 | funnel-web · 1980 (lançado) | confirmado | 1980 · FUNNEL-WEB SPIDER ANTIVENOM RELEASED (só se a régua mostrar o 1980) | idem S01 |
| S08 | 18 | funnel-web · 1981 (primeiro uso) | confirmado | 1981 · FUNNEL-WEB SPIDER ANTIVENOM · FIRST USED (ou só '1981 · FUNNEL-WEB SPIDER ANTIVENOM') | https://www.mja.com.au/journal/2005/182/8/funnel-web-spider-bite-systematic-review-recorded-clinical-cases |
| S09 | 18 | redback · 1956 | confirmado | 1956 · REDBACK SPIDER ANTIVENOM | https://www.mja.com.au/journal/2003/179/8/latrodectism-prospective-cohort-study-bites-formally-identified-redback-spiders |
| S10 | 18 (extra) | 1930 · tiger snake (início da fabricação comercial) | confirmado | 1930 · TIGER SNAKE ANTIVENOM | idem S01 |
| S11 | 18 (extra) | 1970 · box jellyfish | confirmado | 1970 · BOX JELLYFISH ANTIVENOM | idem S01 |
| A01 | 17 e 54 | '2016–2025 · 2024–2025 PRELIMINARY' | corrigir | 2016–2025 · 2023 REVISED · 2024–2025 PRELIMINARY (curta, se faltar espaço: 2016–2025 · FINAL DATA TO 2022) | https://www.abs.gov.au/statistics/health/causes-death/causes-death-australia/latest-release |
| A02 | 17 | 85 = soma do canal das dez células 'Persons' de X20–X29 | confirmado | na folha recriada, fora do corpo da tabela: 'Total, 2016–2025: 85 (Alpha Point sum)' | idem A01 |
| A03 | 13 e 17 | 'SPIDER DEATHS, 2016–2025: 0' | confirmado | VENOMOUS SPIDERS (X21): 0 · 2016–2025 (a forma de s16 e s60; 'SPIDER DEATHS' passa, mas a do código casa com as outras telas) | idem A01 |
| A04 | 17 | W56: 32 (2016–2025) | confirmado | MARINE ANIMALS (W56): 32 · 2016–2025 (nunca 'SHARKS') | idem A01 |
| A05 | 17 | X26: 2 (2016–2025) | confirmado | VENOMOUS MARINE ANIMALS (X26): 2 · 2016–2025 | idem A01 |
| C01 | 3 | 'Source: Lee et al., Royal Society Open Science, 2016' sob 'ELAPIDS · FRONT-FANGED SNAKES' | corrigir | ELAPIDS · FRONT-FANGED SNAKES, com dois créditos | https://pmc.ncbi.nlm.nih.gov/articles/PMC4736917/ |
| C02 | 3 | 'Source: Live Science, 2023' (o F053, no parágrafo de Michael Lee) | confirmado | Source: Live Science, 2023 | https://www.livescience.com/animals/snakes/why-does-australia-have-so-many-venomous-animals |
| C03 | 3 | 'Source: Live Science, 2023' (o F156, 'It lives around Sydney') | confirmado | Source: Live Science, 2023 — ou nenhum crédito, se a tela só põe o lugar 'SYDNEY' | idem C02 |
| C04 | 5 | 'AT LEAST 13 DEATHS BEFORE 1981' (Isbister et al., MJA 2005) | confirmado | AT LEAST 13 DEATHS BEFORE 1981 (IN RECORDED CASES, se couber) | idem S08 |
| C05 | 5 | '590 REDBACK SPIDERS · 1955–1957' (Wiener, MJA 2003) | confirmado | 590 REDBACK SPIDERS DISSECTED · 1955–1957 | idem S09 |
| C06 | 13 | 'AT LEAST 14 DEATHS BEFORE 1956 · NO CONFIRMED DEATH SINCE' | confirmado | AT LEAST 14 DEATHS BEFORE 1956 · NO CONFIRMED DEATH SINCE | https://www.racgp.org.au/getattachment/c01fb190-92d3-4596-beef-f9007668b97c/20040311winkel.pdf |
| C07 | 13 | 'Source: Winkel et al., Australian Family Physician, 2004; Wiener, MJA, 2003' | corrigir | Source: Nimorakiotakis & Winkel, Australian Family Physician, 2004; Wiener, Medical Journal of Australia, 2003 | https://europepmc.org/article/MED/15054982 |
| C08 | 14 | 'UNDER 100 A YEAR ON AVERAGE · 835 IN 10 YEARS (JULY 2005–JUNE 2015)' ou 'AVERAGE: UNDER 100 A YEAR · MEDIAN 87', com 'Source: Johnston et al., Medical Journal of Australia, 2017 (ASP-20)' | confirmado | UNDER 100 A YEAR ON AVERAGE · 835 IN 10 YEARS (JULY 2005–JUNE 2015) — ou — AVERAGE: UNDER 100 A YEAR · MEDIAN 87 | https://www.mja.com.au/journal/2017/207/3/australian-snakebite-project-2005-2015-asp-20 |
| C09 | 15 | 'JAN. 2026: ABOUT HALF THE USUAL NUMBER OF FUNNEL-WEBS', 'Source: Australian Reptile Park, Jan. 13, 2026' | confirmado | JAN. 2026: ABOUT HALF THE USUAL NUMBER OF FUNNEL-WEBS | https://www.reptilepark.com.au/about/zoo-news/covid-aftershock-venom-program |
| C10 | 19 | Welton, Liew & Braitberg, Toxicon 2017;131:11–15 (não o Intern Med J) | confirmado | (se for à tela) "Death from snake bite remains rare in Australia, and has maintained a steady rate for over 20 years." · 35 DEATHS · 2000–2016 | https://europepmc.org/article/MED/28288937 |
| C11 | 19 | Isbister & Gray, MJA 2003;179(2):88–91 | confirmado | (se for à tela) 68 BITES BY EXPERTLY IDENTIFIED REDBACKS · 1999–2002 | https://www.mja.com.au/journal/2003/179/2/latrodectism-prospective-cohort-study-bites-formally-identified-redback-spiders |
| C12 | 19 | '1 IN 225': a letalidade entre as 225 picadas confirmadas de Chironex | confirmado | 1 DEATH IN 225 CONFIRMED BOX JELLYFISH STINGS · NT, 1991–2004 | https://www.mja.com.au/journal/2005/183/11/prospective-study-chironex-fleckeri-and-other-box-jellyfish-stings-top-end-australia |
| C13 | 19 | 'more than a thousand' = W69, 1.010 (nunca W65–W74, 2.077) | confirmado | DROWNING IN NATURAL WATER (W69): 1,010 · 2016–2025 | idem A01 |
| C14 | 19 | OMS: 81.410–137.880 mortes por cobra por ano no mundo; crédito com a data da ficha | confirmado | 81,410–137,880 SNAKEBITE DEATHS A YEAR · WORLDWIDE (WHO ESTIMATE) | https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming |
| C15 | 20 | ≈ 12.000 (11.994) internações por aranha, atribuídas à página da Universidade de Melbourne | corrigir | ≈ 12,000 HOSPITAL ADMISSIONS FOR SPIDER BITES (2001–2013) · 0 DEATHS (2000–2013) · ONE STUDY | https://pursuit.unimelb.edu.au/articles/venomous-stings-and-bites-lie-close-to-home |
| C16 | 20 | o zero de Welton (nenhuma morte por aranha), pela página da Universidade de Melbourne | confirmado | 0 DEATHS (2000–2013), na linha de C15 | idem C15 |
| C17 | 20 | 73 % (a abelha), pela revisão de Turner et al. 2017 | confirmado | HONEYBEE: 73% OF FATAL INSECT-VENOM ANAPHYLAXIS · AUSTRALIA, 1997–2013 (ou só 'MOST', como a voz) | https://pmc.ncbi.nlm.nih.gov/articles/PMC5589409/ |
| C18 | 20 | 1822, pelo Bee Aware | confirmado | 1822 · EUROPEAN HONEYBEES ARRIVE BY SHIP (FIRST RECORDED SURVIVING INTRODUCTION) | https://beeaware.org.au/industry/ |
| C19 | 26 | 'Plate model: Müller et al., Solid Earth, 2022 (CC BY 4.0)' e a citação inteira com os dois DOI | confirmado | Plate model: Müller et al., Solid Earth, 2022 (CC BY 4.0) · descrição: Plate reconstruction: Müller, R. D., et al. (2022), A tectonic-rules-based mantle reference frame since 1 billion years ago, Solid Earth 13, 1127–1159, https://doi.org/10.5194/se-13-1127-2022; model files v1.2.4, https://doi.org/10.5281/zenodo.13636799, licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Changes: present-day Natural Earth coastlines rotated by Alpha Point with the model's rotations. | https://zenodo.org/records/13636799 (DOI 10.5281/zenodo.13636799) |

## 1 · A ficha do NCIS (itens 48, 54 e 21)

### P01 · 713 mortes ligadas a animais, 2001–2021

- **Veredito:** `confirmado` · item 48 · s63, s64
- **Fonte:** NCIS Fact Sheet FS24-09, 'Animal-related deaths in Australia', Nov. 2024 · https://www.ncis.org.au/research-publications/fact-sheets (recusa robô; não acessado) · cópia: `midia/australia-animais/fontes/s/ncis-fs24-09-animal-related-deaths-2024.pdf (sha256 6bdefa14…); texto: out/australia-animais/_tmp/ncis/fs24-09.txt` · p. 2 e p. 4 · acesso 2026-11-19 (cópia local)
- **O trecho:** "There were 713 animal-related deaths reported to an Australian coroner from 2001 to 2021 | p. 4: The data set extracted contained every closed case external cause death that was reported to an Australian coroner from 1 January 2001 to 31 December 2021 where contribution from an animal was indicated in coded fields. Cases were included where the coronial investigation had concluded and the case was closed in the NCIS."
- **A forma de tela:** 713 ANIMAL-RELATED DEATHS · 2001–2021
- **O crédito:** Source: National Coronial Information System (NCIS), 2024 · CC BY 4.0
- **O limite:** Só casos FECHADOS de morte por causa externa relatados a legista de 01/01/2001 a 31/12/2021, com contribuição de animal nos campos codificados; extraídos em ago/2024. Os anos são do relato ao legista; caso aberto em ago/2024 não entra. 'Animal-related' = o animal contribuiu (queda de cavalo e carro contra canguru contam). Não é o ABS: outro sistema, período e critério; não se soma nem se põe na régua dos 85 e 154.

### P02 · 222 com cavalos (31,1 %)

- **Veredito:** `confirmado` · item 48 · s63 P3
- **Fonte:** NCIS FS24-09 · idem P01 · cópia: `idem P01; p. 3 rasterizada: out/australia-animais/_tmp/verificar-tela/ncis-p3.png` · p. 3, 'Horses' · acesso 2026-11-19
- **O trecho:** "Horses · 222 deaths · 59.5% fall-related · Nearly one third (31.1%) of animal-related deaths involved horses. … Falls were the most common mechanism of injury, comprising over half (59.5%, n=132) of these deaths."
- **A forma de tela:** HORSES 222
- **O crédito:** idem P01
- **O limite:** A extração de texto cola o '222' em 'Bovine'; a página rasterizada mostra que é dos cavalos, e a conta fecha: 222/713 = 31,1 %; 112/222 = 50,5 %; 132/222 = 59,5 %. 59,5 % foram quedas: não é 'mortos por cavalos'. Os 5 de outros equinos ficam fora.

### P03 · 92 com bovinos

- **Veredito:** `confirmado` · item 48 · s63 P3
- **Fonte:** NCIS FS24-09 · idem P01 · cópia: `idem P01` · p. 3, 'Bovine' · acesso 2026-11-19
- **O trecho:** "Cows, bulls and other bovine animals contributed to 92 (12.9%) animal-related deaths. … Over two fifths of bovine-related deaths were due to vehicle incidents (45.7%, n=42)."
- **A forma de tela:** CATTLE 92
- **O crédito:** idem P01
- **O limite:** A ficha diz 'Bovine'; 'CATTLE' é a palavra comum e serve. 42 das 92 (45,7 %) foram acidente de veículo; 48 (52,2 %), força contundente. 92/713 = 12,9 %.

### P04 · 82 com cães

- **Veredito:** `confirmado` · item 48 · s63 P3
- **Fonte:** NCIS FS24-09 · idem P01 · cópia: `idem P01` · p. 3, 'Dogs' · acesso 2026-11-19
- **O trecho:** "Dogs contributed to 11.5% of animal-related deaths. … The most common mechanisms of injury attributed to dog-related deaths were bites (46.3%, n=38) and falls (42.7%, n=35). · 82 deaths"
- **A forma de tela:** DOGS 82
- **O crédito:** idem P01
- **O limite:** 82/713 = 11,5 %; 41/82 = 50,0 %; 38/82 = 46,3 %. Mordida em 38, queda em 35: não é 'mortos por mordida de cão'.

### P05 · 53 com cangurus

- **Veredito:** `confirmado` · item 48 · s63, s64
- **Fonte:** NCIS FS24-09 · idem P01 · cópia: `idem P01` · p. 3, 'Kangaroos' · acesso 2026-11-19
- **O trecho:** "There were 53 deaths involving kangaroos. All kangaroo-related deaths were due to vehicle incidents. Nearly half of these deaths (49.1%, n=26) involved a motorcyclist."
- **A forma de tela:** KANGAROOS 53 · ALL VEHICLE INCIDENTS (se for à tela)
- **O crédito:** idem P01
- **O limite:** Todas as 53 em acidente de veículo (26 com motociclista; 48 em via pública).

### P06 · '222 com cavalos, 92 com bovinos, 82 com cães e 53 com cangurus, todas em acidente de veículo'

- **Veredito:** `corrigir` · item 48 · registro (navegador-sala.md; nota do item 48)
- **Fonte:** NCIS FS24-09 · idem P01 · cópia: `idem P01` · p. 3 · acesso 2026-11-19
- **O trecho:** "All kangaroo-related deaths were due to vehicle incidents. | Over two fifths of bovine-related deaths were due to vehicle incidents (45.7%, n=42). | Falls were the most common mechanism of injury, comprising over half (59.5%, n=132) | bites (46.3%, n=38) and falls (42.7%, n=35)"
- **A forma de tela:** (nada na tela) — no registro: 'todas em acidente de veículo' vale só para os 53 cangurus; bovinos, 42 de 92; cavalos, quedas 59,5 %; cães, mordidas 46,3 % e quedas 42,7 %
- **O limite:** O erro está só na nota da Sala (navegador-sala.md, 'Os números'; para-passos-seguintes.json item 48). Não chegou à voz. Se virar legenda da linha de s63 P3, é afirmação falsa sobre cavalos, bois e cães.

### P07 · 'There were no deaths confirmed to have involved a spider bite' (2001–2021)

- **Veredito:** `confirmado` · item 48 (s58) · s57, s58
- **Fonte:** NCIS FS24-09 · idem P01 · cópia: `idem P01` · p. 2, destaque ao lado da Figure 1 · acesso 2026-11-19
- **O trecho:** "There were no deaths confirmed to have involved a spider bite"
- **A forma de tela:** literal, sem ponto final como na ficha: "There were no deaths confirmed to have involved a spider bite" (NCIS, 2001–2021) · ou como dado: NO CONFIRMED SPIDER-BITE DEATH · 2001–2021
- **O crédito:** Source: National Coronial Information System (NCIS), 2024 · CC BY 4.0
- **O limite:** Letra a letra igual. Vale para os casos fechados de 2001–2021 (P01). É lastro primário do 'NO CONFIRMED DEATH SINCE' de s58 em 2001–2021 (o laudo das divergências o tinha só de segunda mão, pela ScienceAlert); 2016–2025 fica com o ABS (A03).

### P08 · 'HORSES 222 · CATTLE 92 · DOGS 82 · 2001–2021'

- **Veredito:** `corrigir` · item 48 e conceito · s63 P3 (linha condicional)
- **Fonte:** NCIS FS24-09 · idem P01 · cópia: `idem P01` · p. 2–3 · acesso 2026-11-19
- **O trecho:** "This fact sheet refers to fatal incidents that occurred in Australia where an animal contributed to the person’s death. | Horses 222 deaths | contributed to 92 (12.9%) | Dogs 82 deaths"
- **A forma de tela:** ANIMAL-RELATED DEATHS, 2001–2021: HORSES 222 · CATTLE 92 · DOGS 82
- **O crédito:** Source: National Coronial Information System (NCIS), 2024 · CC BY 4.0
- **O limite:** Os três números conferem (P02–P04). A forma do pedido não diz O QUE conta: sem 'ANIMAL-RELATED DEATHS', ao lado de 'deaths associated with other species', lê-se 'mortos por cavalos/bois/cães', e a ficha conta morte em que o animal contribuiu (queda do cavalo, carro contra boi). Crédito e período próprios: não é o ABS (85/154, 2016–2025), e não se compara com ele.

### P09 · 'Source: National Coronial Information System (NCIS), 2024 · CC BY 4.0'

- **Veredito:** `confirmado` · item 54 · s07, s09, s63, s66 (o crédito do NCIS)
- **Fonte:** NCIS FS24-09 · idem P01 · cópia: `idem P01` · p. 2 (data) e p. 4 (licença) · acesso 2026-11-19
- **O trecho:** "NCIS FACT SHEET · Animal-related deaths in Australia · NOVEMBER 2024 · ISSN: 2201-2192 | p. 4: Unless otherwise stated, this content is provided under a Creative Commons Attribution 4.0 International License (CC BY 4.0), with the exception of logos, images or branding. Attribution must be provided to the NCIS."
- **A forma de tela:** Source: National Coronial Information System (NCIS), 2024 · CC BY 4.0 (mais preciso, se couber: Source: NCIS Fact Sheet FS24-09, Nov. 2024 · CC BY 4.0)
- **O limite:** A licença exclui logos, imagens e marca: nada da arte da ficha vai à tela; a folha é recriada. A data impressa é NOVEMBER 2024.

### P10 · 'However, deaths as a result of these interactions remain relatively rare, particularly in comparison to deaths associated with other species.'

- **Veredito:** `confirmado` · item 21 · s63 P3 (a folha)
- **Fonte:** NCIS FS24-09 · idem P01 · cópia: `idem P01` · p. 2, 2º parágrafo · acesso 2026-11-19
- **O trecho:** "However, deaths as a result of these interactions remain relatively rare, particularly in comparison to deaths associated with other species."
- **A forma de tela:** a frase inteira, literal, DEPOIS da do 'Thousands' (P11)
- **O crédito:** Source: National Coronial Information System (NCIS), 2024 · CC BY 4.0
- **O limite:** Letra a letra igual no PDF e na leitura da página pela Sala (F191). Sozinha, 'However' e 'these interactions' ficam sem antecedente (o item 21 tem razão): a folha leva as duas frases, ou fica só a meia citação da voz ('remain relatively rare', F191), sem folha.

### P11 · 'Thousands of hospital admissions are attributable to contact with bees, hornets, wasps, spiders, snakes, ticks, ants and marine animals each year in Australia.'

- **Veredito:** `confirmado` · item 21 · s63 P3 (a folha)
- **Fonte:** NCIS FS24-09 · idem P01 · cópia: `idem P01` · p. 2, 1º parágrafo · acesso 2026-11-19
- **O trecho:** "Thousands of hospital admissions are attributable to contact with bees, hornets, wasps, spiders, snakes, ticks, ants and marine animals each year in Australia (1)."
- **A forma de tela:** Thousands of hospital admissions are attributable to contact with bees, hornets, wasps, spiders, snakes, ticks, ants and marine animals each year in Australia (1). However, deaths as a result of these interactions remain relatively rare, particularly in comparison to deaths associated with other species.
- **O crédito:** Source: National Coronial Information System (NCIS), 2024 · CC BY 4.0
- **O limite:** No PDF a frase termina com a chamada '(1)' (Welton, Williams & Liew, Intern Med J 2017;47(2):170–176); na página do site, lida pela Sala, não. Folha que imita a ficha mantém o '(1)'; folha que cita a página vai sem ele. Nunca outra palavra. Com as duas frases, 'these interactions' = 'contact with bees, … marine animals'.

## 2 · A régua dos soros (item 18)

### S01 · 1955 · taipan

- **Veredito:** `confirmado` · item 18 · s47, s72 (a régua)
- **Fonte:** Winkel, Mirtschin & Pearn, 'Twentieth century toxinology and antivenom development in Australia', Toxicon 2006;48(7):738–754 (PMID 17030053), resumo · https://europepmc.org/article/MED/17030053 · cópia: `midia/australia-animais/fontes/b/epmc-antivenom-history.json` · resumo · acesso 2026-11-19 (cópia de 18/11)
- **O trecho:** "Commercial antivenom manufacture began in Australia in 1930 with the tiger snake antivenom. This was followed by other antivenoms for the other important species (1955: taipan; 1956: brown snake; 1958: death adder; 1959: Papuan black snake; 1961: sea snake; 1962: polyvalent) including the first marine antivenoms in the world (1956: stonefish antivenom; 1970: box jellyfish) culminating, in 1980, with the release of the funnel web spider antivenom."
- **A forma de tela:** 1955 · TAIPAN ANTIVENOM
- **O crédito:** Source: Winkel et al., Toxicon, 2006
- **O limite:** A fonte dá só o ano e a espécie ('followed by other antivenoms'): nem 'released', nem 'first used'. A régua não põe verbo: nome do soro e ano.

### S02 · 1956 · marrom

- **Veredito:** `confirmado` · item 18 · s47, s72
- **Fonte:** Winkel et al., Toxicon 2006 · idem S01 · cópia: `idem S01` · resumo · acesso 2026-11-19
- **O trecho:** "1956: brown snake"
- **A forma de tela:** 1956 · BROWN SNAKE ANTIVENOM
- **O crédito:** Source: Winkel et al., Toxicon, 2006
- **O limite:** idem S01. O 1956 do redback é de outra fonte (S09).

### S03 · 1958 · death adder

- **Veredito:** `confirmado` · item 18 · s47, s72
- **Fonte:** Winkel et al., Toxicon 2006 · idem S01 · cópia: `idem S01` · resumo · acesso 2026-11-19
- **O trecho:** "1958: death adder"
- **A forma de tela:** 1958 · DEATH ADDER ANTIVENOM
- **O crédito:** Source: Winkel et al., Toxicon, 2006
- **O limite:** idem S01. A death adder é elapídeo, não víbora: não vai perto do 'NO VIPERS' de s27 sem cuidado.

### S04 · 1959 · Papuan black snake

- **Veredito:** `confirmado` · item 18 · s47, s72
- **Fonte:** Winkel et al., Toxicon 2006 · idem S01 · cópia: `idem S01` · resumo · acesso 2026-11-19
- **O trecho:** "1959: Papuan black snake"
- **A forma de tela:** 1959 · PAPUAN BLACK SNAKE ANTIVENOM
- **O crédito:** Source: Winkel et al., Toxicon, 2006
- **O limite:** idem S01. Cobra da Nova Guiné: se a régua a deixar de fora, leva 'SELECTED', nunca em silêncio.

### S05 · 1961 · sea snake

- **Veredito:** `confirmado` · item 18 · s47, s72
- **Fonte:** Winkel et al., Toxicon 2006 · idem S01 · cópia: `idem S01` · resumo · acesso 2026-11-19
- **O trecho:** "1961: sea snake"
- **A forma de tela:** 1961 · SEA SNAKE ANTIVENOM
- **O crédito:** Source: Winkel et al., Toxicon, 2006
- **O limite:** idem S01.

### S06 · 1962 · polivalente

- **Veredito:** `confirmado` · item 18 · s47, s72
- **Fonte:** Winkel et al., Toxicon 2006 · idem S01 · cópia: `idem S01` · resumo · acesso 2026-11-19
- **O trecho:** "1962: polyvalent"
- **A forma de tela:** 1962 · POLYVALENT ANTIVENOM
- **O crédito:** Source: Winkel et al., Toxicon, 2006
- **O limite:** A letra é só 'polyvalent', dentro da lista das cobras; 'POLYVALENT SNAKE ANTIVENOM' é leitura do contexto, defensável. A classe tem seis anos (S01–S06): a régua leva os seis, ou os que a voz nomeia com 'SELECTED'.

### S07 · funnel-web · 1980 (lançado)

- **Veredito:** `confirmado` · item 18 · s57, s72
- **Fonte:** Winkel et al., Toxicon 2006 · idem S01 · cópia: `idem S01` · resumo · acesso 2026-11-19
- **O trecho:** "culminating, in 1980, with the release of the funnel web spider antivenom"
- **A forma de tela:** 1980 · FUNNEL-WEB SPIDER ANTIVENOM RELEASED (só se a régua mostrar o 1980)
- **O crédito:** Source: Winkel et al., Toxicon, 2006
- **O limite:** A voz segue 1981 (F170). O 1980 só com 'RELEASED' e o crédito de Winkel; o mais simples é a régua ficar só com o 1981 (S08).

### S08 · funnel-web · 1981 (primeiro uso)

- **Veredito:** `confirmado` · item 18 · s57, s72
- **Fonte:** Isbister et al., 'Funnel-web spider bite: a systematic review of recorded clinical cases', Med J Aust 2005;182(8):407–411 · https://www.mja.com.au/journal/2005/182/8/funnel-web-spider-bite-systematic-review-recorded-clinical-cases · cópia: `midia/australia-animais/fontes/a/mja2005-funnelweb.txt` · Introdução · acesso 2026-11-19
- **O trecho:** "Funnel-web spider antivenom was first used in 1981."
- **A forma de tela:** 1981 · FUNNEL-WEB SPIDER ANTIVENOM · FIRST USED (ou só '1981 · FUNNEL-WEB SPIDER ANTIVENOM')
- **O crédito:** Source: Isbister et al., Medical Journal of Australia, 2005
- **O limite:** Nunca 'RELEASED 1981'. Linha da voz: F170.

### S09 · redback · 1956

- **Veredito:** `confirmado` · item 18 · s58, s72
- **Fonte:** Wiener, carta, Med J Aust 2003;179(8):455–456 · https://www.mja.com.au/journal/2003/179/8/latrodectism-prospective-cohort-study-bites-formally-identified-redback-spiders · cópia: `midia/australia-animais/fontes/a/mja2003-redback.txt` · carta · acesso 2026-11-19
- **O trecho:** "No fatalities have occurred from redback spider bite since antivenom became available in 1956"
- **A forma de tela:** 1956 · REDBACK SPIDER ANTIVENOM
- **O crédito:** Source: Wiener, Medical Journal of Australia, 2003
- **O limite:** Winkel 2006 não dá o ano do soro do redback; o 'Since 1955' de Nimorakiotakis & Winkel 2004 é das mortes, não do soro (f158b). O verbo da fonte é 'became available'.

### S10 · 1930 · tiger snake (início da fabricação comercial)

- **Veredito:** `confirmado` · item 18 (extra) · s47, s72
- **Fonte:** Winkel et al., Toxicon 2006; na voz, F134 (ASP-20) · idem S01 · cópia: `idem S01` · resumo · acesso 2026-11-19
- **O trecho:** "Commercial antivenom manufacture began in Australia in 1930 with the tiger snake antivenom."
- **A forma de tela:** 1930 · TIGER SNAKE ANTIVENOM
- **O crédito:** Source: Winkel et al., Toxicon, 2006
- **O limite:** Fora da lista do pedido; entra porque a régua começa nele ('SINCE 1930', s47).

### S11 · 1970 · box jellyfish

- **Veredito:** `confirmado` · item 18 (extra) · s52, s72
- **Fonte:** Winkel et al., Toxicon 2006; na voz, F154 · idem S01 · cópia: `idem S01` · resumo · acesso 2026-11-19
- **O trecho:** "including the first marine antivenoms in the world (1956: stonefish antivenom; 1970: box jellyfish)"
- **A forma de tela:** 1970 · BOX JELLYFISH ANTIVENOM
- **O crédito:** Source: Winkel et al., Toxicon, 2006
- **O limite:** A fonte põe o de 1970 entre 'the first marine antivenoms in the world' (com o do peixe-pedra, 1956). 'THE WORLD'S FIRST ANTIVENOM FOR A JELLYFISH' (s52) é a leitura da voz (F154), defensável por ser o único de água-viva na lista; a forma mais segura na tela é 'AMONG THE WORLD'S FIRST MARINE ANTIVENOMS'.

## 3 · O ABS (itens 17 e 13)

### A01 · '2016–2025 · 2024–2025 PRELIMINARY'

- **Veredito:** `corrigir` · item 17 e 54 · s06, s07, s14, s63, s66; folhas do ABS (s06 P1, s13 P1, s16 P1)
- **Fonte:** ABS, Causes of Death, Australia, 2025, Table 1.2 (lançado em 27/10/2026) · https://www.abs.gov.au/statistics/health/causes-death/causes-death-australia/latest-release · cópia: `midia/australia-animais/fontes/b/abs-2025_01.xlsx (sha256 7ab6e5e1…), folha 'Table 1.2', A1956 e A1957; lida por out/australia-animais/_tmp/verificar-tela/abs_xlsx.py` · Table 1.2, notas (a) e (b) · acesso 2026-11-19
- **O trecho:** "(a) Causes of death data for recent years is preliminary and subject to a revisions process. This table includes final data for 2016-2022, revised data for 2023, preliminary revised data for 2024 and preliminary data for 2025. | (b) Data is by date of registration."
- **A forma de tela:** 2016–2025 · 2023 REVISED · 2024–2025 PRELIMINARY (curta, se faltar espaço: 2016–2025 · FINAL DATA TO 2022)
- **O crédito:** Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0)
- **O limite:** '2024–2025 PRELIMINARY' é verdade no que diz, mas faz ler 2016–2023 como final, e a nota põe 2023 como 'revised', não 'final'. Os anos são de REGISTRO (nota (b)), não de morte. O '2025 preliminar' sozinho (VC-17) também não basta. **Volátil.**

### A02 · 85 = soma do canal das dez células 'Persons' de X20–X29

- **Veredito:** `confirmado` · item 17 · s07, s63, s66 e a folha do ABS
- **Fonte:** ABS, Table 1.2 · idem A01 · cópia: `idem A01, linha 1764` · Table 1.2, 'Contact with venomous animals and plants (X20-X29)' · acesso 2026-11-19
- **O trecho:** "Persons: 2016 4 · 2017 10 · 2018 19 · 2019 6 · 2020 9 · 2021 6 · 2022 6 · 2023 8 · 2024 11 · 2025 6 (colunas E, H, K, N, Q, T, W, Z, AC, AF)"
- **A forma de tela:** na folha recriada, fora do corpo da tabela: 'Total, 2016–2025: 85 (Alpha Point sum)'
- **O crédito:** Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0) · total: Alpha Point sum
- **O limite:** 4+10+19+6+9+6+6+8+11+6 = 85. A Table 1.2 não tem coluna de total (só Males, Females e Persons por ano): um 'Total' com cara de coluna do ABS atribuiria ao ABS uma conta do canal. Linha da voz: F011. **Volátil.**

### A03 · 'SPIDER DEATHS, 2016–2025: 0'

- **Veredito:** `confirmado` · item 13 e 17 · s58 (régua), s16 P1, s60
- **Fonte:** ABS, Table 1.2 · idem A01 · cópia: `idem A01, linha 1766` · Table 1.2, 'Contact with venomous spiders (X21)' · acesso 2026-11-19
- **O trecho:** "Contact with venomous spiders (X21): 0 em Males, Females e Persons nos dez anos, 2016–2025"
- **A forma de tela:** VENOMOUS SPIDERS (X21): 0 · 2016–2025 (a forma de s16 e s60; 'SPIDER DEATHS' passa, mas a do código casa com as outras telas)
- **O crédito:** Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0)
- **O limite:** Causa básica, por ano de registro; 2024–2025 provisórios. Nada do caso de 2016 na tela (f158c). Zera se um ABS futuro der X21 > 0. Linhas da voz: F013, F027. **Volátil.**

### A04 · W56: 32 (2016–2025)

- **Veredito:** `confirmado` · item 17 · s63
- **Fonte:** ABS, Table 1.2; laudo da voz · idem A01 · cópia: `roteiros/australia-animais/qc-roteiro/fatos-medidas.txt [A-W56]; xlsx, linha 1706` · — · acesso 2026-11-19 (relido no xlsx)
- **O trecho:** "Contact with marine animal (W56) | [4, 2, 2, 0, 8, 4, 2, 2, 2, 6] | soma 2016-2025 = 32"
- **A forma de tela:** MARINE ANIMALS (W56): 32 · 2016–2025 (nunca 'SHARKS')
- **O crédito:** Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0)
- **O limite:** Já tem linha no laudo da voz: F196 ([A-W56]) e N010–N013. Relido hoje: igual. **Volátil.**

### A05 · X26: 2 (2016–2025)

- **Veredito:** `confirmado` · item 17 · s15
- **Fonte:** ABS, Table 1.2; laudo da voz · idem A01 · cópia: `xlsx, linha 1771` · — · acesso 2026-11-19
- **O trecho:** "Contact with venomous marine animals and plants (X26): Persons 2021 1 · 2022 1 · os outros anos 0"
- **A forma de tela:** VENOMOUS MARINE ANIMALS (X26): 2 · 2016–2025
- **O crédito:** Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0)
- **O limite:** Já tem linha no laudo da voz: F025. Relido hoje: igual. **Volátil.**

## 4 · As formas de crédito (itens 3, 5, 13, 14, 15, 19, 20 e 26)

### C01 · 'Source: Lee et al., Royal Society Open Science, 2016' sob 'ELAPIDS · FRONT-FANGED SNAKES'

- **Veredito:** `corrigir` · item 3 · s25
- **Fonte:** Lee, Sanders, King & Palci, 'Diversification rates and phenotypic evolution in venomous snakes (Elapidae)', R. Soc. Open Sci. 2016;3:150277 (PMC4736917, CC BY 4.0) · https://pmc.ncbi.nlm.nih.gov/articles/PMC4736917/ · cópia: `midia/australia-animais/fontes/a/lee2016-fulltext.xml (texto: out/_tmp/bancada-australia-animais/texto/a__lee2016-fulltext.xml.txt)` · texto integral · acesso 2026-11-19
- **O trecho:** "basal lineages are predominantly Asian, suggesting that this was the distribution of the common ancestor of extant elapids | (busca por 'fang' no texto integral: 0 ocorrências)"
- **A forma de tela:** ELAPIDS · FRONT-FANGED SNAKES, com dois créditos
- **O crédito:** Source: Lee et al., Royal Society Open Science, 2016; Jackson et al., Toxins, 2016
- **O limite:** Lee 2016 sustenta 'elapids' e a origem asiática (F052, F054), mas não diz 'front-fanged'. Quem diz, entre as fontes do canal: Jackson et al., Toxins 2016;8(11):309 (CC BY), 'Australia is the stronghold of the front-fanged venomous snake family Elapidae' (out/_tmp/bancada-australia-animais/texto/a__jackson2016-fulltext.xml.txt), já creditada em s27; ou Live Science, 2023 (C02). Só com Lee no crédito, 'FRONT-FANGED' fica sem dono.

### C02 · 'Source: Live Science, 2023' (o F053, no parágrafo de Michael Lee)

- **Veredito:** `confirmado` · item 3 · s25 (F053)
- **Fonte:** Live Science, Elana Spivack, 'Why does Australia have so many venomous animals?', 26/11/2023 · https://www.livescience.com/animals/snakes/why-does-australia-have-so-many-venomous-animals · cópia: `out/_tmp/bancada-australia-animais/texto/c__livescience-why-venomous.html.txt (de midia/australia-animais/fontes/c/livescience-why-venomous.html, sha256 cbc43221…)` · o parágrafo que abre com Michael Lee · acesso 2026-11-19
- **O trecho:** "Another part of this answer stretches back 60 million years to "an accident of history," according to Michael Lee, a professor of evolutionary biology at the South Australian Museum and Flinders University. … By chance, 40 million years after this "accident," the first snakes colonized the continent — and they happened to be from the venomous front-fanged Elapidae family, which includes cobras, mambas, coral snakes and taipans."
- **A forma de tela:** Source: Live Science, 2023
- **O limite:** A frase é da jornalista, no parágrafo atribuído a Lee; não é aspa de Lee nem de Arbuckle. Nunca 'Kevin Arbuckle, to Live Science'. Atenção: em out/australia-animais/_dados/s25.json o provedor LIVESCI está rotulado 'Kevin Arbuckle, Swansea University, to Live Science, 2023'; esse rótulo não vira crédito de s25.

### C03 · 'Source: Live Science, 2023' (o F156, 'It lives around Sydney')

- **Veredito:** `confirmado` · item 3 · s53 (F156)
- **Fonte:** Live Science, 26/11/2023 · idem C02 · cópia: `idem C02` · legenda da imagem de abertura · acesso 2026-11-19
- **O trecho:** "Sydney funnel-web spiders have killed people with their venom. But does Australia have more than its fair share of venomous animals? (Image credit: Image Created by James van den Broek via Getty Images)"
- **A forma de tela:** Source: Live Science, 2023 — ou nenhum crédito, se a tela só põe o lugar 'SYDNEY'
- **O limite:** O F156 não é a abertura do texto: é a legenda da imagem do topo, texto da publicação (não de Arbuckle); o dono 'Live Science' está certo. Ela dá o nome da aranha, não a área. Se a tela quiser dono para 'around Sydney': Loria et al., BMC Ecology and Evolution 2025;25:7 (CC BY), 'widespread and common in the Sydney Basin bioregion and beyond, roughly 250 km from the Newcastle area south to the Illawarra' (midia/australia-animais/fontes/b/epmc-funnel-web.json, PMID 39800689).

### C04 · 'AT LEAST 13 DEATHS BEFORE 1981' (Isbister et al., MJA 2005)

- **Veredito:** `confirmado` · item 5 · s57 P2
- **Fonte:** Isbister et al., Med J Aust 2005;182(8):407–411 · idem S08 · cópia: `midia/australia-animais/fontes/a/mja2005-funnelweb.txt` · Resultados · acesso 2026-11-19
- **O trecho:** "The 77 cases comprised: 13 deaths (all before the introduction of antivenom in 1981), seven in children"
- **A forma de tela:** AT LEAST 13 DEATHS BEFORE 1981 (IN RECORDED CASES, se couber)
- **O crédito:** Source: Isbister et al., Medical Journal of Australia, 2005
- **O limite:** Os 13 são as mortes entre os casos registrados que a revisão achou; 'AT LEAST' é o piso honesto. Linha da voz: F169. Autores: Geoffrey K Isbister, Michael R Gray, Corrine R Balit et al.

### C05 · '590 REDBACK SPIDERS · 1955–1957' (Wiener, MJA 2003)

- **Veredito:** `confirmado` · item 5 · s58 P2
- **Fonte:** Wiener, carta, Med J Aust 2003;179(8):455–456 · idem S09 · cópia: `midia/australia-animais/fontes/a/mja2003-redback.txt` · carta · acesso 2026-11-19
- **O trecho:** "Between 1955 and 1957, I dissected the venom glands of 590 redback spiders for the production of antivenom."
- **A forma de tela:** 590 REDBACK SPIDERS DISSECTED · 1955–1957
- **O crédito:** Source: Wiener, Medical Journal of Australia, 2003
- **O limite:** É uma CARTA de Wiener (comenta o estudo de Isbister & Gray, 179(2):88–91), não o estudo: o título do artigo comentado não vai à folha como se fosse dela (item 21). Linha da voz: F174.

### C06 · 'AT LEAST 14 DEATHS BEFORE 1956 · NO CONFIRMED DEATH SINCE'

- **Veredito:** `confirmado` · item 13 · s58
- **Fonte:** Nimorakiotakis & Winkel, Aust Fam Physician 2004;33(3):153–157; Wiener 2003; NCIS 2024; ABS 2025 · https://www.racgp.org.au/getattachment/c01fb190-92d3-4596-beef-f9007668b97c/20040311winkel.pdf · cópia: `midia/australia-animais/fontes/b/racgp-winkel2004.pdf` · p. 154 · acesso 2026-11-19
- **O trecho:** "Before the introduction of redback spider antivenom in Australia, at least 14 deaths had been reported. | (Wiener) No fatalities have occurred from redback spider bite since antivenom became available in 1956 | (NCIS) There were no deaths confirmed to have involved a spider bite"
- **A forma de tela:** AT LEAST 14 DEATHS BEFORE 1956 · NO CONFIRMED DEATH SINCE
- **O crédito:** ver C07
- **O limite:** Já julgado (divergencias-research.laudo.md, f158a–c). O 'CONFIRMED' nunca sai. O 'since' agora tem lastro primário em 2001–2021 (P07) e 2016–2025 (A03). **Volátil.**

### C07 · 'Source: Winkel et al., Australian Family Physician, 2004; Wiener, MJA, 2003'

- **Veredito:** `corrigir` · item 13 · s58
- **Fonte:** Europe PMC, PMID 15054982; o próprio PDF (p. 153) · https://europepmc.org/article/MED/15054982 · cópia: `out/australia-animais/_tmp/verificar-tela/epmc-afp2004.json (consulta de hoje); midia/australia-animais/fontes/b/racgp-winkel2004.pdf` · — · acesso 2026-11-19, ~18:18
- **O trecho:** "15054982 | Nimorakiotakis B, Winkel KD. | Spider bite--the redback spider and its relatives. | Aust Fam Physician 2004 33 3 153-157 | (PDF, p. 153) B Nimorakiotakis, MBBS, FACEM, is Staff Specialist, Epworth Hospital and Sunshine Hospital … KD Winkel, MBBS, BMedSc, PhD, FACTM, is Director, The Australian Venom Research Unit"
- **A forma de tela:** Source: Nimorakiotakis & Winkel, Australian Family Physician, 2004; Wiener, Medical Journal of Australia, 2003
- **O limite:** O artigo tem DOIS autores, e o primeiro é Nimorakiotakis: 'Winkel et al.' troca o nome da frente e inventa coautores. O mesmo 'Winkel et al., AFP 2004' está no laudo da voz (F175), no das divergências (que chama Winkel de 'primeiro autor do AFP 2004'), na pauta de dados e em _dados/s58.json; a voz não diz nome: nada a regravar. Lastro de hoje, se quiser: '; NCIS, 2024'.

### C08 · 'UNDER 100 A YEAR ON AVERAGE · 835 IN 10 YEARS (JULY 2005–JUNE 2015)' ou 'AVERAGE: UNDER 100 A YEAR · MEDIAN 87', com 'Source: Johnston et al., Medical Journal of Australia, 2017 (ASP-20)'

- **Veredito:** `confirmado` · item 14 · s46
- **Fonte:** Johnston et al., 'The Australian Snakebite Project, 2005–2015 (ASP-20)', Med J Aust 2017;207(3):119–125 · https://www.mja.com.au/journal/2017/207/3/australian-snakebite-project-2005-2015-asp-20 · cópia: `midia/australia-animais/fontes/c/mja-asp20.txt` · Resumo e Resultados · acesso 2026-11-19
- **O trecho:** "Patients presenting to Australian hospitals with suspected or confirmed snakebites from July 2005 to June 2015 | Systemic envenoming occurred in 835 patients (54%; median, 87 patients per year; IQR, 62–102 per year; Box 1)"
- **A forma de tela:** UNDER 100 A YEAR ON AVERAGE · 835 IN 10 YEARS (JULY 2005–JUNE 2015) — ou — AVERAGE: UNDER 100 A YEAR · MEDIAN 87
- **O crédito:** Source: Johnston et al., Medical Journal of Australia, 2017 (ASP-20)
- **O limite:** 835/10 = 83,5; mediana 87; IQR 62–102 (em 2 ou 3 anos passou de 100): o 'ON AVERAGE' ou o 'MEDIAN' é obrigatório. Conta pacientes recrutados com envenenamento sistêmico. Já julgado em f124a/b.

### C09 · 'JAN. 2026: ABOUT HALF THE USUAL NUMBER OF FUNNEL-WEBS', 'Source: Australian Reptile Park, Jan. 13, 2026'

- **Veredito:** `confirmado` · item 15 · s71
- **Fonte:** Australian Reptile Park, 'Covid Aftershock Impacts Life-Saving Funnel Web Venom Program' · https://www.reptilepark.com.au/about/zoo-news/covid-aftershock-venom-program · cópia: `out/_tmp/bancada-australia-animais/texto/b__rp-covid.html.txt` · — · acesso 2026-11-19
- **O trecho:** "Date Published: January 13, 2026 | the Australian Reptile Park is now operating at around half of its usual funnel-web spider capacity, one of the lowest numbers seen in the Park’s history."
- **A forma de tela:** JAN. 2026: ABOUT HALF THE USUAL NUMBER OF FUNNEL-WEBS
- **O crédito:** Source: Australian Reptile Park, Jan. 13, 2026
- **O limite:** O 'half' é de aranhas ('capacity', 'lowest numbers'), não de veneno nem de soro: nunca 'SUPPLY' sozinho, nem 'VENOM'/'ANTIVENOM' junto do 'HALF'. Já julgado (f199a/b).

### C10 · Welton, Liew & Braitberg, Toxicon 2017;131:11–15 (não o Intern Med J)

- **Veredito:** `confirmado` · item 19 · s49 (f131)
- **Fonte:** Welton, Liew & Braitberg, 'Incidence of fatal snake bite in Australia: A coronial based retrospective study (2000-2016)', Toxicon 2017;131:11–15 (PMID 28288937) · https://europepmc.org/article/MED/28288937 · cópia: `midia/australia-animais/fontes/b/epmc-toxicon-snake.json` · resumo · acesso 2026-11-19
- **O trecho:** "Deaths were identified from January 2000 to December 2016 from the National Coronial Information System. … Thirty five deaths (2.2 per year) were ascribed or antecedent to a snake bite. … Death from snake bite remains rare in Australia, and has maintained a steady rate for over 20 years."
- **A forma de tela:** (se for à tela) "Death from snake bite remains rare in Australia, and has maintained a steady rate for over 20 years." · 35 DEATHS · 2000–2016
- **O crédito:** Source: Welton, Liew & Braitberg, Toxicon, 2017
- **O limite:** O '2.2 per year' do resumo não fecha: 35 em 17 anos (jan/2000–dez/2016) = 2,06; 2,2 supõe 16 anos. Na tela, '35 DEATHS · 2000–2016', nunca '2.2 A YEAR'. Não são os 35 do X20 do ABS (2016–2025). O 'held steady' saiu da voz (F146): a frase, se for, vai sem seta para o soro.

### C11 · Isbister & Gray, MJA 2003;179(2):88–91

- **Veredito:** `confirmado` · item 19 · s59 (f160)
- **Fonte:** Isbister & Gray, 'Latrodectism: a prospective cohort study of bites by formally identified redback spiders', Med J Aust 2003;179(2):88–91 · https://www.mja.com.au/journal/2003/179/2/latrodectism-prospective-cohort-study-bites-formally-identified-redback-spiders · cópia: `out/_tmp/bancada-australia-animais/texto/b__mja-latrodectism2003.html.txt; midia/australia-animais/fontes/a/epmc-redback2003.json (PMID 12864719)` · cabeçalho · acesso 2026-11-19
- **O trecho:** "Authors: Geoffrey K Isbister and Michael R Gray Med J Aust 2003; 179 (2): 88-91. || doi: 10.5694/j.1326-5377.2003.tb05442.x Published online: 21 July 2003"
- **A forma de tela:** (se for à tela) 68 BITES BY EXPERTLY IDENTIFIED REDBACKS · 1999–2002
- **O crédito:** Source: Isbister & Gray, Medical Journal of Australia, 2003
- **O limite:** O arquivo fontes/a/mja2003-redback.* é a carta de Wiener (179(8):455–456) sobre esse estudo, não o estudo. O 'later trial' da voz (s59) é o RAVE-II (Isbister et al., Ann Emerg Med 2014), outra fonte. O 1 de 6 contra 2 de 17 (IC −36 % a +64 %) não vai à tela como prova de nada.

### C12 · '1 IN 225': a letalidade entre as 225 picadas confirmadas de Chironex

- **Veredito:** `confirmado` · item 19 · s51 (f137)
- **Fonte:** Currie & Jacups, 'Prospective study of Chironex fleckeri and other box jellyfish stings in the "Top End" of Australia’s Northern Territory', Med J Aust 2005;183(11):631–636 · https://www.mja.com.au/journal/2005/183/11/prospective-study-chironex-fleckeri-and-other-box-jellyfish-stings-top-end-australia · cópia: `midia/australia-animais/fontes/a/mja2005-chironex.txt` · Resumo; Discussão; Box 4 e Box 5 · acesso 2026-11-19
- **O trecho:** "Of 606 jellyfish stings documented, 225 were confirmed to have been caused by C. fleckeri. … Cardiorespiratory arrest occurred within several minutes of the sting in the one fatal case | we are unable to quantify the risks as we do not know how many people were in the water | All patients with jellyfish sting details recorded between 1 April 1991 and 30 May 2004."
- **A forma de tela:** 1 DEATH IN 225 CONFIRMED BOX JELLYFISH STINGS · NT, 1991–2004
- **O crédito:** Source: Currie & Jacups, Medical Journal of Australia, 2005
- **O limite:** Letalidade entre os picados que chegaram ao Royal Darwin Hospital e às clínicas da costa do NT (abr/1991–mai/2004), não o risco de quem entra na água: os autores dizem que não podem medir risco. O caso fatal (menina de 3 anos, fev/1996, comunidade de ilha) está entre os 225 (Box 4). Os 225 são 'confirmed' no resumo; no texto, são as picadas com nematocisto de quirodropídeo em Darwin Harbour e nas Tiwi, 'classified as' C. fleckeri.

### C13 · 'more than a thousand' = W69, 1.010 (nunca W65–W74, 2.077)

- **Veredito:** `confirmado` · item 19 · s66 (f180)
- **Fonte:** ABS, Table 1.2; laudo da voz · idem A01 · cópia: `roteiros/australia-animais/qc-roteiro/fatos-medidas-r2.txt [R1-W69] e [R3]; out/australia-animais/_dados/serie-abs-mortes-2016-2025.csv` · — · acesso 2026-11-19
- **O trecho:** "Drowning and submersion while in natural water (W69) | [97, 73, 88, 97, 109, 95, 113, 111, 124, 103] | soma 2016-2025 = 1010"
- **A forma de tela:** DROWNING IN NATURAL WATER (W69): 1,010 · 2016–2025
- **O crédito:** Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0)
- **O limite:** Já tem linha no laudo da voz: F205 (e F204). O W65–W74 (2.077) inclui banheira e piscina: não é o da voz. 2023–2025 não finais (A01). **Volátil.**

### C14 · OMS: 81.410–137.880 mortes por cobra por ano no mundo; crédito com a data da ficha

- **Veredito:** `confirmado` · item 19 · s45 (f117)
- **Fonte:** OMS, ficha 'Snakebite envenoming', 17/09/2026 · https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming · cópia: `out/_tmp/bancada-australia-animais/web/who-snakebite.html.txt` · Key facts · acesso 2026-11-19 (cópia de 18/11)
- **O trecho:** "Snakebite envenoming 17 September 2026 … Around 81 410 to 137 880 people die each year because of snake bites"
- **A forma de tela:** 81,410–137,880 SNAKEBITE DEATHS A YEAR · WORLDWIDE (WHO ESTIMATE)
- **O crédito:** Source: World Health Organization, Snakebite envenoming fact sheet, Sept. 17, 2026
- **O limite:** A ficha não dá o ano da medida nem a referência do intervalo: o crédito é a ficha, com a data dela, e a tela diz 'ESTIMATE'. Não se mistura com o '≈ 58,000 A YEAR' da Índia (outra fonte, outro período). **Volátil.**

### C15 · ≈ 12.000 (11.994) internações por aranha, atribuídas à página da Universidade de Melbourne

- **Veredito:** `corrigir` · item 20 · s16 P4
- **Fonte:** University of Melbourne, Pursuit, Jane Gardner, 'Venomous stings and bites lie close to home', 17/01/2017 (tabela de Welton et al., Intern Med J 2017) · https://pursuit.unimelb.edu.au/articles/venomous-stings-and-bites-lie-close-to-home · cópia: `out/_tmp/bancada-australia-animais/texto/b__pursuit-venomous.html.txt (de midia/australia-animais/fontes/b/pursuit-venomous.html)` · a tabela · acesso 2026-11-19
- **O trecho:** "By Jane Gardner, University of Melbourne Published 17 January 2017 … Creature Deaths (2000-2013) Hospitalisations (2001-2013) … Spiders 0 11,994"
- **A forma de tela:** ≈ 12,000 HOSPITAL ADMISSIONS FOR SPIDER BITES (2001–2013) · 0 DEATHS (2000–2013) · ONE STUDY
- **O crédito:** Source: University of Melbourne (Pursuit), Jan. 17, 2017
- **O limite:** O crédito de s16 em _dados/s16.json ('Welton et al., Internal Medicine Journal, 2017 (via University of Melbourne)') põe o número na revista, que o canal não leu: o item 20 manda atribuir à fonte secundária. E a forma de s16 ('≈ 12,000 … · ONE STUDY · 0 DEATHS') não dá os períodos, que são DIFERENTES (internações 2001–2013, mortes 2000–2013). Linhas da voz: F029, F030.

### C16 · o zero de Welton (nenhuma morte por aranha), pela página da Universidade de Melbourne

- **Veredito:** `confirmado` · item 20 · s16 P4
- **Fonte:** University of Melbourne, Pursuit, 17/01/2017 · idem C15 · cópia: `idem C15` · texto e tabela · acesso 2026-11-19
- **O trecho:** "There were no spider bite fatalities. A man died from a red back spider bite in April 2016, the first spider bite death in more than 30 years, however this was outside the study period."
- **A forma de tela:** 0 DEATHS (2000–2013), na linha de C15
- **O crédito:** Source: University of Melbourne (Pursuit), Jan. 17, 2017
- **O limite:** O zero vale para 2000–2013. A mesma página afirma, sem fonte, uma morte por redback em abril de 2016 (f158c: a causa nunca foi confirmada): a tela nunca tira o período do zero, e nada do caso de 2016 vai à tela. Linha da voz: F031.

### C17 · 73 % (a abelha), pela revisão de Turner et al. 2017

- **Veredito:** `confirmado` · item 20 · s62
- **Fonte:** Turner et al., 'Fatal Anaphylaxis: Mortality Rate and Risk Factors', J Allergy Clin Immunol Pract 2017;5(5):1169–1178 (PMC5589409, CC BY-NC-ND), Table III, sobre Mullins et al. 2016 · https://pmc.ncbi.nlm.nih.gov/articles/PMC5589409/ · cópia: `out/_tmp/bancada-australia-animais/texto/c__turner2017-fulltext.xml.txt; midia/australia-animais/fontes/c/epmc-pmc5589409.json` · Table III · acesso 2026-11-19
- **O trecho:** "Table III Population-based data for rate of fatal anaphylaxis triggered by insect venom … Australia · Australian Bureau of Statistics and National Coronial Information System (NCIS) · 1997-2013 · 324 (119 with known cause) · 41 (13%) insect · X23, X25 … Honeybee 73% Ants 9% Ticks 9% Wasp 6% … Mullins et al 2016"
- **A forma de tela:** HONEYBEE: 73% OF FATAL INSECT-VENOM ANAPHYLAXIS · AUSTRALIA, 1997–2013 (ou só 'MOST', como a voz)
- **O crédito:** Source: Turner et al., J Allergy Clin Immunol Pract, 2017 (citing Mullins et al., 2016)
- **O limite:** 73 % de 41 mortes por anafilaxia a veneno de inseto (os carrapatos entram nos 'insects' da tabela). O canal leu a tabela de Turner, não o Mullins: o número vai a Turner. A forma de s62 em _dados ('MOST FATAL STING ALLERGIES · ONE STUDY, 1997–2013') confere; o '73%' só com o recorte. Linhas da voz: F186, F187.

### C18 · 1822, pelo Bee Aware

- **Veredito:** `confirmado` · item 20 · s62
- **Fonte:** Bee Aware (Plant Health Australia), página 'Industry' · https://beeaware.org.au/industry/ · cópia: `out/_tmp/bancada-australia-animais/texto/c__beeaware-industry.html.txt (de midia/australia-animais/fontes/c/beeaware-industry.html)` · 1º parágrafo · acesso 2026-11-19
- **O trecho:** "The first recorded surviving introduction of European honey bees (Apis mellifera) into Australia occurred in 1822 aboard the Isabella."
- **A forma de tela:** 1822 · EUROPEAN HONEYBEES ARRIVE BY SHIP (FIRST RECORDED SURVIVING INTRODUCTION)
- **O crédito:** Source: Bee Aware (Plant Health Australia)
- **O limite:** A fonte diz 'first recorded surviving introduction': nunca 'FIRST HONEYBEES EVER'. A página não tem data. Linhas da voz: F188, F189.

### C19 · 'Plate model: Müller et al., Solid Earth, 2022 (CC BY 4.0)' e a citação inteira com os dois DOI

- **Veredito:** `confirmado` · item 26 · s23–s26, s29 (contorno girado); a descrição
- **Fonte:** Zenodo, registro 13636799 (EarthByte Group), 'A tectonic-rules-based mantle reference frame since 1 billion years ago – implications for supercontinent cycles and plate–mantle system evolution', Version 1.2.4 · https://zenodo.org/records/13636799 (DOI 10.5281/zenodo.13636799) · cópia: `out/australia-animais/_tmp/pesquisa-geo/baixado/zenodo-10297173.html (canonical: zenodo.org/records/13636799); muller2022/README.txt` · — · acesso 2026-11-19 (cópia do pesquisa-geo, 19/11 00:50)
- **O trecho:** "Published July 7, 2022 | Version 1.2.4 … Authors/Creators Müller, R. Dietmar … Flament, Nicolas … Cannon, John … Tetley, Michael G. … Williams, Simon E. … Cao, Xianzhi … Bodur, Ömer F. … Zahirovic, Sabin … Merdith, Andrew … Published in Solid Earth, 13, 1127-1159, ISSN: 1869-9529, 2022 … License Creative Commons Attribution 4.0 International … Is supplement to Journal article: 10.5194/se-13-1127-2022 (DOI)"
- **A forma de tela:** Plate model: Müller et al., Solid Earth, 2022 (CC BY 4.0) · descrição: Plate reconstruction: Müller, R. D., et al. (2022), A tectonic-rules-based mantle reference frame since 1 billion years ago, Solid Earth 13, 1127–1159, https://doi.org/10.5194/se-13-1127-2022; model files v1.2.4, https://doi.org/10.5281/zenodo.13636799, licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Changes: present-day Natural Earth coastlines rotated by Alpha Point with the model's rotations.
- **O limite:** Os nove autores, o título, volume e páginas, os dois DOI, a versão e a licença batem com o registro do Zenodo. A CC BY 4.0 é a dos ARQUIVOS do modelo; o '(CC BY 4.0)' da tela fala deles. A tela não dá latitude, distância nem velocidade do modelo. A descrição usa a forma da pauta-geo.md, linha 217 (a da linha 220, 'the model's coastlines … and simplified', só se a cena usar as costas do modelo).

## Achados acionáveis

1. **[MÉDIO] C07, o crédito de s58** → CONSERTO: `Source: Nimorakiotakis & Winkel, Australian Family Physician, 2004; Wiener, Medical
   Journal of Australia, 2003`. O AFP 2004 tem dois autores e o primeiro é Nimorakiotakis (Europe PMC, PMID 15054982; a nota de autores do
   próprio PDF, p. 153). O "Winkel et al." está também em `_dados/s58.json`, `pauta-dados.json`/`.md`, `roteiro-editor.md` (7 vezes), no
   laudo da voz (F175) e no das divergências (que chama Winkel de "primeiro autor"): a voz não diz o nome, nada a regravar → RAIZ:
   INSTRUÇÃO (o nome do arquivo, `20040311winkel.pdf`, virou o autor; autor se lê no cabeçalho ou no índice, nunca no nome do arquivo).
2. **[MÉDIO] C15, s16 P4** → CONSERTO: `≈ 12,000 HOSPITAL ADMISSIONS FOR SPIDER BITES (2001–2013) · 0 DEATHS (2000–2013) · ONE STUDY`, com
   `Source: University of Melbourne (Pursuit), Jan. 17, 2017` → RAIZ: PONTUAL (o crédito de `_dados/s16.json` contraria o item 20; os
   dois períodos da tabela são diferentes e a forma não os dava).
3. **[MÉDIO] P08, s63 P3** → CONSERTO: `ANIMAL-RELATED DEATHS, 2001–2021: HORSES 222 · CATTLE 92 · DOGS 82`, com o crédito do NCIS e nunca na
   mesma régua dos 85/154 do ABS → RAIZ: INSTRUÇÃO (número de ficha leva o substantivo da ficha: o que ela conta é "morte em que o animal
   contribuiu", não "morto pelo animal").
4. **[LEVE] A01, o período do ABS** → CONSERTO: `2016–2025 · 2023 REVISED · 2024–2025 PRELIMINARY` → RAIZ: PONTUAL (a nota (a) tem três
   estados, e a forma do item 17 levava dois).
5. **[LEVE] C01, s25** → CONSERTO: `Source: Lee et al., Royal Society Open Science, 2016; Jackson et al., Toxins, 2016` → RAIZ: PONTUAL
   (o rótulo tem duas afirmações e o crédito cobria uma). E em `_dados/s25.json` o provedor LIVESCI está rotulado "Kevin Arbuckle … to
   Live Science": esse rótulo não vira crédito (C02).
6. **[LEVE] P06, o registro da Sala** → CONSERTO: em `navegador-sala.md` ("Os números") e na nota do item 48, "todas em acidente de
   veículo" passa a valer só para os 53 cangurus → RAIZ: PONTUAL (a frase da ficha sobre os cangurus colou na lista inteira).

Notas de forma que não são `corrigir` (a fonte as sustenta, e o laudo dá o limite): o "(1)" no fim da frase do "Thousands" no PDF (P11); o
"2.2 per year" de Welton, Liew & Braitberg que não fecha com 35 em 17 anos (C10: na tela, `35 DEATHS · 2000–2016`); o 1970 da água-viva
como "among the world's first marine antivenoms" (S11); o F156 é a legenda da imagem de abertura da Live Science, não a abertura da
jornalista (C03).

## A lista de nomes

- **Bill Nimorakiotakis** (B Nimorakiotakis, MBBS, FACEM), Staff Specialist, Epworth Hospital e Sunshine Hospital, Victoria; Fellow da
  Australian Venom Research Unit, Universidade de Melbourne: primeiro autor do AFP 2004 (as "at least 14 deaths"). Cópia:
  `midia/australia-animais/fontes/b/racgp-winkel2004.pdf`, p. 153; https://europepmc.org/article/MED/15054982
- **Kenneth D. Winkel** (KD Winkel, MBBS, BMedSc, PhD, FACTM), então Director da Australian Venom Research Unit: segundo autor do AFP 2004
  e primeiro do *Toxicon* 2006 (a régua dos soros). Mesma cópia; https://europepmc.org/article/MED/17030053
- **Michael Lee**, "a professor of evolutionary biology at the South Australian Museum and Flinders University" (Live Science, 26/11/2023):
  o dono do parágrafo do F053 (C02), e primeiro autor de Lee et al. 2016.
- **Jane Gardner**, University of Melbourne: a autora da página do Pursuit (17/01/2017) que dá os 11.994 e o zero (C15, C16); a
  pesquisadora citada nela é **Ronelle Welton** (Australian Venom Research Unit).
- **Bart J Currie e Susan P Jacups** (C12); **Geoffrey K Isbister e Michael R Gray** (C11); **Paul J Turner** (C17); **R. Dietmar Müller**
  e mais oito, EarthByte Group, University of Sydney (C19).

## Os voláteis (data-base 19/11/2026)

- **O ABS** (A01–A05, C13): 2023 revisado, 2024 preliminar revisado, 2025 preliminar; o próximo lançamento (sem data, "Next release
  Unknown") revisa 2023–2025. Cresce ou muda com a revisão; o zero das aranhas (A03) zera com um X21 > 0. Reler antes de publicar.
- **"NO CONFIRMED DEATH SINCE"** (C06): não cresce; zera com um achado de legista ou um ABS futuro. Hoje tem lastro primário em 2001–2021
  (NCIS, P07) e 2016–2025 (ABS, A03).
- **A ficha da OMS** (C14), de 17/09/2026: a OMS atualiza as fichas sem aviso; reler antes de publicar.
- **O Reptile Park** (C09): datado na tela (Jan. 13, 2026); o que a página disse em janeiro não muda.
- **O NCIS** (P01–P11): é a ficha de nov/2024, fechada; não é volátil, mas uma ficha nova com 2022+ não muda o que esta diz.

## Os dois padrões

1. **O dono trocado no crédito.** O autor do AFP 2004 saiu do nome do arquivo (C07); o crédito de s16 foi para a revista que o canal não
   leu (C15); o crédito de s25 cobre "elapids" e não "front-fanged" (C01). Os números estavam certos; os donos, não.
2. **O recorte da fonte que a forma de tela perde.** "Animal-related" (P08), os dois períodos do Pursuit (C15), o "revised" de 2023 (A01),
   e a frase dos cangurus que colou na lista inteira (P06).

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Nenhuma nova. As de antes continuam (regravar ou não f124 e f199: o laudo das divergências recomenda não regravar e consertar na tela,
  e as formas de tela de C08 e C09 confirmam esse conserto).

VEREDITO: RESSALVA
