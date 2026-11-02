# A lista da rodada 1 aplicada · big-sur (vídeo 5)

Aplicada em 02/11/2026 por um subagente da Sala de controle, com `node ferramentas/aplicar-lista.mjs big-sur --lista=roteiros/big-sur/_trabalho/lista-r1.json`
(a lista, `lista-r1.json`, e o porquê dela, `lista-r1.md`). Sem rede, sem gasto, sem commit. O que a lista deixou de fora (a subtração S1 a S8 do crítico de
roteiro e os achados que batem no NÃO TOCAR) segue fora, e os quatro pedidos (P01 a P04, em `pedidos-r1.json`) não são texto: ficam abertos para a Sala.

## 1. O resultado, em uma linha

APLICADO, exit 0. Texto falado `c00a9cce37c4` → `a280be45a53a`. 23 itens, 21 diferenças, nenhuma frase sem item, 0 recusas, 0 avisos, 0 pendentes.
O portão PASSA no texto novo, e `--derivados` sai 0.

## 2. Antes de gravar

- Cópias de segurança, feitas à mão antes de tudo e conferidas pelo próprio aplicador (o sha256 das cópias é o dos originais):
  - `roteiros/big-sur/_trabalho/roteiro-r1.antes.md`: sha256 `3ea39ae514d7da1c4c1bbd6575c40ee1f593da4aee2ebdca451005207b98b167`;
  - `roteiros/big-sur/_trabalho/roteiro-editor-r1.antes.md`: sha256 `4af007b65669e0c20c271c911728ae98b5a89e5ee90941c903a13eb4cafa01b5`.
- Rodada seca (`--seco`): exit 0, `SECO_OK`, as mesmas 21 diferenças da rodada de verdade.
- Rodada de verdade (sem `--seco`): exit 0, `APLICADO`.

## 3. As provas do aplicador

Todas passaram (uma recusa seria exit 1, sem gravar nada; não houve):

| Prova | O que confere | Resultado |
|---|---|---|
| sha | o texto falado de agora é o `revisao_julgada` da lista (`c00a9cce37c4`) | passou |
| casa | cada "de" casa exatamente uma vez, na ordem da lista | passou |
| (a) | as aspas (citações) ficam idênticas e na mesma ordem | passou |
| (b) | os numerais do depois são os de antes, mais o que cada item declara; saldo por item | passou |
| (c) | nenhum parágrafo mudou sem dono; nenhuma frase do diff sem item; o "parte" de cada item é a parte do dono | passou (frases sem item: 0) |
| (d) | os REDIZER não trazem número, data, nome próprio, grupo de pessoas nem aspas novas | passou |
| (e) | os pares do editor casam exatamente uma vez em `roteiro-editor.md` | passou (35 pares, 0 falhas) |
| gate | o `gate.mjs` do vídeo, rodado pelo aplicador antes e depois, lê o mesmo sha que ele | passou (sha igual; `gate_depois_de_gravar`: PASSA, 2.357 palavras, 0 problemas) |

## 4. O sha, antes e depois

| Arquivo | Antes | Depois |
|---|---|---|
| texto falado (o do portão) | `c00a9cce37c4` (`c00a9cce37c4b89a738e92fa37bcf261ff96ce39d3105ba26722e8326b1c1277`) | `a280be45a53a` (`a280be45a53ad7648036e6398ffa70e8337d3a619af7bea689d177fbcac8bb32`) |
| `roteiro-narrador.md` (o arquivo inteiro, sha256) | `3ea39ae514d7da1c4c1bbd6575c40ee1f593da4aee2ebdca451005207b98b167` | `3e29ba0c441159052892b5c72b2fa05750eadd672b1242860dbc44c49335ee8a` |
| `roteiro-editor.md` (o arquivo inteiro, sha256) | `4af007b65669e0c20c271c911728ae98b5a89e5ee90941c903a13eb4cafa01b5` | `25c0cfb527530e4614ab1073483fae12647bfa04c89e596356bec2c79f1e55e3` (depois dos 35 pares e dos dois ajustes à mão do §7) |

Os dois arquivos ficam com fim de linha LF.

## 5. O que mudou no roteiro, frase a frase (a saída do aplicador)

```
roteiro-narrador.md: 23 itens · 21 diferenças · frases sem item: 0
  Diferença 1 (gancho)
    SAI:   Monterey County's 1986 plan for this coast calls the climate mild. ← L01
    ENTRA: Monterey County's 1986 plan for this coast, the rulebook for building on it, calls the climate mild. ← L01
  Diferença 2 (gancho)
    SAI:   So why didn't more follow? ← L02
    ENTRA: So why did so few follow? ← L02
  Diferença 3 (p1)
    SAI:   Keep both outlines in mind, because they don't describe the same ground. ← L03
    ENTRA: The census district and the plan don't cover the same ground. ← L03
  Diferença 4 (p2)
    SAI:   At Cone Peak, near the southern end of the coast, they reach 5,200 feet. ← L04
    ENTRA: At Cone Peak, in the southern part of the coast, they reach about 5,200 feet. ← L04
  Diferença 5 (p2)
    SAI:   Much of the coast is bounded by sheer cliffs, the plan adds, and beaches are few. ← L05
    ENTRA: Much of the coast is bounded by sheer cliffs, and beaches are few. ← L05
  Diferença 6 (p2)
    SAI:   Highway 1, the plan says, is the basic route into the area. ← L06
    SAI:   In 1986, it counted just one other road from inland. ← L06
    ENTRA: Highway 1 is the basic route into the area. ← L06
    ENTRA: In 1986, the plan counted just one other road from inland. ← L06
  Diferença 7 (p2)
    SAI:   Yet it calls the water resources small and seasonal, shared by the animals, the plants and the people. ← L07
    ENTRA: Yet it calls the water resources relatively small and seasonal, shared by the animals, the plants and the people. ← L07
  Diferença 8 (p3)
    SAI:   Forest Service, the plan notes. ← L08
    ENTRA: Forest Service. ← L08
  Diferença 9 (p3)
    SAI:   Two of them, Paul's Slide and Regent's Slide, will matter later in this story. ← L09
    ENTRA: Two of them are called Paul's Slide and Regent's Slide. ← L09
  Diferença 10 (p5)
    SAI:   It sums up the change in one line. ← L10
    SAI:   A way of life had ended. ← L10
    ENTRA: It sums up the change in one line: a way of life had ended, and a new era began. ← L10
  Diferença 11 (p6)
    SAI:   The county's answer came in 1986, in the plan this video keeps quoting. ← L11
    SAI:   By then, about half of the coastal zone was public land, the plan says. ← L12
    SAI:   Other families, after the Pfeiffers, had given land for parks too, and the plan credits their generosity. ← L13
    ENTRA: The county's answer took final form in 1986, in the plan this video keeps quoting. ← L11
    ENTRA: By then, much of this coast was already public land, the plan says. ← L12
    ENTRA: After the Pfeiffer sale, other families gave land for parks, and the plan credits their generosity. ← L13
  Diferença 12 (p6)
    SAI:   One of them is the turnout at Bixby Creek, beside the bridge from the start of this video. ← L14
    ENTRA: One of them is the turnout beside the bridge at Bixby Creek. ← L14
  Diferença 13 (p6)
    SAI:   If a new building would show, the plan says, it had to be moved, redesigned, or not built there at all. ← L15
    ENTRA: If a new building would show, it had to be moved, redesigned, or not built there at all. ← L15
  Diferença 14 (p6)
    SAI:   So it reserved most of the highway's capacity for recreation and visitors. ← L16
    ENTRA: So it reserved most of the highway's capacity for recreation, visitors and a few other priority uses. ← L16
  Diferença 15 (p7)
    SAI:   In August 2026, a wildfire started in the national forest above the coast. ← L17
    ENTRA: In August 2026, a wildfire started in the backcountry above the coast. ← L17
  Diferença 16 (p7)
    SAI:   For the people who live along this road, the fire came right after the long closures of the slides. ← L18
    ENTRA: For the people who live along this road, the fire came only months after the long closures of the slides. ← L18
  Diferença 17 (p8)
    SAI:   Back in 1986, the county's plan had found homes like these in small clusters, or scattered along Highway 1. ← L19
    ENTRA: Back in 1986, the county's plan had found homes like these in rural clusters, or scattered along Highway 1. ← L19
  Diferença 18 (p8)
    SAI:   The same 1986 plan described a serious housing shortage for the people who worked on this coast, especially in the visitor business. ← L20
    SAI:   Some, it said, had camped out, lived in cars, or moved in with friends. ← L20
  Diferença 19 (p8)
    SAI:   They come for the view the 1986 plan set out to protect. ← L21
    ENTRA: Many come for the view the 1986 plan set out to protect. ← L21
  Diferença 20 (p9)
    SAI:   It's one of the viewpoints the county's rule was written to protect. ← L22
    ENTRA: It's one of the viewpoints named in the county's rule. ← L22
  Diferença 21 (p9)
    SAI:   In 1986, the county wrote that whatever came next should stay out of this view. ← L23
    ENTRA: In its 1986 plan, the county wrote that whatever came next should stay out of this view. ← L23
```

Os itens e as operações, na ordem da lista: L01 DA-FONTE · L02 REDIZER · L03 REDIZER · L04 ESTREITAR · L05 CORTAR · L06 REDIZER · L07 DA-FONTE · L08 CORTAR ·
L09 REDIZER · L10 DA-FONTE · L11 ESTREITAR · L12 ENFRAQUECER · L13 ESTREITAR · L14 REDIZER · L15 CORTAR · L16 ESTREITAR · L17 ENFRAQUECER · L18 ESTREITAR ·
L19 DA-FONTE · L20 CORTAR · L21 ENFRAQUECER · L22 REDIZER · L23 REDIZER (os campos de cada item estão em `lista-r1.json` › itens).

### O diff do arquivo (`diff -u roteiro-r1.antes.md roteiro-narrador.md`)

```diff
--- roteiros/big-sur/_trabalho/roteiro-r1.antes.md	2026-11-02 04:20:18.770685300 -0300
+++ roteiros/big-sur/roteiro-narrador.md	2026-11-02 04:20:18.770685300 -0300
@@ -9,7 +9,7 @@
 
 This is Big Sur, between Los Angeles and San Francisco. Their metro areas hold more than 17 million people. But the census district around this bridge counted fewer than 1,500, as empty as Wyoming. Why?
 
-It isn't the weather. Monterey County's 1986 plan for this coast calls the climate mild. And it isn't that nobody came. The same plan says nearly a thousand people lived along this coast by the 1880s. So why didn't more follow? The mountains are only part of it. The rest is a road that has closed again and again, and a rule in that plan about building in sight of it. And then there are the homes that often sit empty. You're at Alpha Point, and this is where the story of the coast that never filled up begins.
+It isn't the weather. Monterey County's 1986 plan for this coast, the rulebook for building on it, calls the climate mild. And it isn't that nobody came. The same plan says nearly a thousand people lived along this coast by the 1880s. So why did so few follow? The mountains are only part of it. The rest is a road that has closed again and again, and a rule in that plan about building in sight of it. And then there are the homes that often sit empty. You're at Alpha Point, and this is where the story of the coast that never filled up begins.
 
 <!-- p1 · What the census counted -->
 
@@ -17,25 +17,25 @@
 
 The count is from 2020, the most recent census. The district has about 250 square miles of land. Spread its people evenly across all of it. You get about six people per square mile. Wyoming had about the same that year. Among U.S. states, only Alaska had fewer people for its size. California, the most populous of them, was more than 40 times as crowded.
 
-The county's plan for this coast draws a longer outline. It covers the whole coast, more than 70 miles, from Carmel down to the next county. Keep both outlines in mind, because they don't describe the same ground. To see why the census number is so low, start with the ground itself.
+The county's plan for this coast draws a longer outline. It covers the whole coast, more than 70 miles, from Carmel down to the next county. The census district and the plan don't cover the same ground. To see why the census number is so low, start with the ground itself.
 
 <!-- p2 · Mountains that drop into the sea -->
 
-So what makes this ground so hard to live on? Behind the coast rise the Santa Lucia Mountains. At Cone Peak, near the southern end of the coast, they reach 5,200 feet. Their western slopes, in the words of the county's plan, drop precipitously to the sea. Much of the coast is bounded by sheer cliffs, the plan adds, and beaches are few. That leaves little flat ground for a town, or for a port.
+So what makes this ground so hard to live on? Behind the coast rise the Santa Lucia Mountains. At Cone Peak, in the southern part of the coast, they reach about 5,200 feet. Their western slopes, in the words of the county's plan, drop precipitously to the sea. Much of the coast is bounded by sheer cliffs, and beaches are few. That leaves little flat ground for a town, or for a port.
 
-The plan lists what holds building back: water, difficult access, unstable soils on steep slopes, and the dangers of fire and flood. Take access. Highway 1, the plan says, is the basic route into the area. In 1986, it counted just one other road from inland. That one was a lightly used county road that climbed over the mountains and crossed a military reservation.
+The plan lists what holds building back: water, difficult access, unstable soils on steep slopes, and the dangers of fire and flood. Take access. Highway 1 is the basic route into the area. In 1986, the plan counted just one other road from inland. That one was a lightly used county road that climbed over the mountains and crossed a military reservation.
 
-Then there's water, which sounds like the odd one out. Nearly fifty separate streams run down these mountains, according to the plan. Yet it calls the water resources small and seasonal, shared by the animals, the plants and the people. Winters, it says, bring some of the heaviest rainfall in California, and summers are long and dry.
+Then there's water, which sounds like the odd one out. Nearly fifty separate streams run down these mountains, according to the plan. Yet it calls the water resources relatively small and seasonal, shared by the animals, the plants and the people. Winters, it says, bring some of the heaviest rainfall in California, and summers are long and dry.
 
 The weather itself, remember, is mild. The trouble is finding ground where a house can stand, and a way to reach it. That's one reason the census district holds so few people per square mile. The other reasons have more to do with who owns the land, and what happened on it.
 
 <!-- p3 · Public land and moving ground -->
 
-About half of the land in the county's plan lies inside the Los Padres National Forest and the Ventana Wilderness. It's federal land, owned by the U.S. Forest Service, the plan notes. A wilderness area is land set aside to stay wild, without roads or new buildings. People can hike there, but they can't move in. State parks take up more of the land, with names like Andrew Molera and Julia Pfeiffer Burns. Homes have to fit on what's left, and much of what's left is steep.
+About half of the land in the county's plan lies inside the Los Padres National Forest and the Ventana Wilderness. It's federal land, owned by the U.S. Forest Service. A wilderness area is land set aside to stay wild, without roads or new buildings. People can hike there, but they can't move in. State parks take up more of the land, with names like Andrew Molera and Julia Pfeiffer Burns. Homes have to fit on what's left, and much of what's left is steep.
 
 And the ground itself can move. In 2017, at a place called Mud Creek, a whole hillside slid down over the highway. Mud Creek lies near the southern end of the coast, outside the census district. That July, Shawn Harrison, a researcher with the U.S. Geological Survey, flew a drone over the slide. The agency was tracking how the slide kept changing. In his video, the road simply disappears under a new slope of earth and rock.
 
-Mud Creek wasn't the end of it. Caltrans, California's highway department, has names for other slopes that have closed the road since then. Two of them, Paul's Slide and Regent's Slide, will matter later in this story. Steep ground, slipping ground, public ground, and not much water. Even so, long before the highway, people made a living on this coast.
+Mud Creek wasn't the end of it. Caltrans, California's highway department, has names for other slopes that have closed the road since then. Two of them are called Paul's Slide and Regent's Slide. Steep ground, slipping ground, public ground, and not much water. Even so, long before the highway, people made a living on this coast.
 
 <!-- p4 · Nearly a thousand, by sea -->
 
@@ -53,17 +53,17 @@
 
 Part of the labor came from prisoners. San Quentin, a California state prison, set up three temporary camps along the route. One stood by the Little Sur River, one at Kirk Creek, and later one at Anderson Creek. The inmates were paid 35 cents a day, and their sentences were reduced. Machinery blasted through the cliffs. Many of the original settlers, the county's plan says, were enraged by the damage. It describes scarred headlands, and canyons and waterfalls fouled with debris.
 
-In 1934, while the road was being built, John Pfeiffer sold land to the state for a park. The county's plan marks that sale as the start of the coast's long-term protection. The highway was finished in June 1937, for about 8 million dollars, the plan says. It sums up the change in one line. A way of life had ended.
+In 1934, while the road was being built, John Pfeiffer sold land to the state for a park. The county's plan marks that sale as the start of the coast's long-term protection. The highway was finished in June 1937, for about 8 million dollars, the plan says. It sums up the change in one line: a way of life had ended, and a new era began.
 
 The new road put the coast within easy reach. Decades later, the county's plan noted that the Bay Area and Los Angeles were less than a day's drive away. Along the road grew campgrounds, lodges, restaurants and places to pull over for the view. In 1965, the plan notes, this stretch became California's first official scenic highway. By the 1980s, nearly all summer traffic on it was recreational, by the plan's estimate. More visitors raised a harder question for the county, about how much of this coast should be built on at all.
 
 <!-- p6 · The rule about what you can see -->
 
-The county's answer came in 1986, in the plan this video keeps quoting. By then, about half of the coastal zone was public land, the plan says. Other families, after the Pfeiffers, had given land for parks too, and the plan credits their generosity. The plan's basic rule was about what you can see. The county made it policy to prohibit all future development, public or private, visible from Highway 1 and from major public viewpoints. The plan calls everything in sight of those places the critical viewshed.
+The county's answer took final form in 1986, in the plan this video keeps quoting. By then, much of this coast was already public land, the plan says. After the Pfeiffer sale, other families gave land for parks, and the plan credits their generosity. The plan's basic rule was about what you can see. The county made it policy to prohibit all future development, public or private, visible from Highway 1 and from major public viewpoints. The plan calls everything in sight of those places the critical viewshed.
 
-It even names some of those viewpoints. One of them is the turnout at Bixby Creek, beside the bridge from the start of this video. The test, in the plan's own words, was normal, unaided vision, in any direction, for any amount of time, at any season. If a new building would show, the plan says, it had to be moved, redesigned, or not built there at all. New roads and grading, the earthmoving that reshapes a slope, were not allowed to scar that view either.
+It even names some of those viewpoints. One of them is the turnout beside the bridge at Bixby Creek. The test, in the plan's own words, was normal, unaided vision, in any direction, for any amount of time, at any season. If a new building would show, it had to be moved, redesigned, or not built there at all. New roads and grading, the earthmoving that reshapes a slope, were not allowed to scar that view either.
 
-Out of sight of the road, new homes were possible, with conditions. They had to go where the land or the trees would screen them. They couldn't sit on open hillsides, or on ridges against the sky. The plan also treated the road itself as a limited resource. In 1986, it estimated nearly three million visitors a year. Traffic jams on Highway 1 were already a problem, the plan says. It expected that number to double. So it reserved most of the highway's capacity for recreation and visitors. All the new homes together could use no more than 15 percent of it.
+Out of sight of the road, new homes were possible, with conditions. They had to go where the land or the trees would screen them. They couldn't sit on open hillsides, or on ridges against the sky. The plan also treated the road itself as a limited resource. In 1986, it estimated nearly three million visitors a year. Traffic jams on Highway 1 were already a problem, the plan says. It expected that number to double. So it reserved most of the highway's capacity for recreation, visitors and a few other priority uses. All the new homes together could use no more than 15 percent of it.
 
 The rule didn't empty this coast. The coast was thinly settled long before 1986. What the plan decided was how the coast should look from the road, and who the road was for. In the 2020s, the trouble was keeping that road open at all.
 
@@ -73,22 +73,22 @@
 
 For almost three years, you couldn't drive this coast from end to end. Crews drilled thousands of steel bars into the slope at Regent's Slide to hold it in place. Caltrans reopened the road there at noon on January 14, 2026, months ahead of its target date. The agency estimated the repair at nearly 83 million dollars. Even then, it warned drivers to expect occasional full closures while crews cleared debris.
 
-Fire was on the county's list of dangers, too. In August 2026, a wildfire started in the national forest above the coast. It became known as the Timber Fire, and it spread through these mountains. Air tankers from across California flew missions over the ridges. CAL FIRE, the state's fire agency, listed hundreds of homes, businesses and other buildings as threatened. Firefighters were hurt fighting it. By mid-October, it was almost fully contained.
+Fire was on the county's list of dangers, too. In August 2026, a wildfire started in the backcountry above the coast. It became known as the Timber Fire, and it spread through these mountains. Air tankers from across California flew missions over the ridges. CAL FIRE, the state's fire agency, listed hundreds of homes, businesses and other buildings as threatened. Firefighters were hurt fighting it. By mid-October, it was almost fully contained.
 
-For weeks, Caltrans kept parts of Highway 1 inside the census district closed. Farther south, a second fire, the Plaskett Fire, closed another stretch. For the people who live along this road, the fire came right after the long closures of the slides. By November 2026, the road was open from end to end again, with one-way traffic at a few work zones.
+For weeks, Caltrans kept parts of Highway 1 inside the census district closed. Farther south, a second fire, the Plaskett Fire, closed another stretch. For the people who live along this road, the fire came only months after the long closures of the slides. By November 2026, the road was open from end to end again, with one-way traffic at a few work zones.
 
 <!-- p8 · Empty homes and passing visitors -->
 
-The census counted the homes along this road, too. In 2020, the census district had a little under 900 of them. Back in 1986, the county's plan had found homes like these in small clusters, or scattered along Highway 1. On census day in 2020, almost four in ten of the district's homes stood empty.
+The census counted the homes along this road, too. In 2020, the census district had a little under 900 of them. Back in 1986, the county's plan had found homes like these in rural clusters, or scattered along Highway 1. On census day in 2020, almost four in ten of the district's homes stood empty.
 
-Empty, on census day, doesn't have to mean abandoned. The Census Bureau also runs an ongoing survey, year after year. Its results for 2020 to 2024 put nearly all of the district's empty homes in one category: seasonal, recreational or occasional use. In other words, they're homes people keep, but don't live in. Across California, homes like that make up only about a third of the empty ones. The same 1986 plan described a serious housing shortage for the people who worked on this coast, especially in the visitor business. Some, it said, had camped out, lived in cars, or moved in with friends.
+Empty, on census day, doesn't have to mean abandoned. The Census Bureau also runs an ongoing survey, year after year. Its results for 2020 to 2024 put nearly all of the district's empty homes in one category: seasonal, recreational or occasional use. In other words, they're homes people keep, but don't live in. Across California, homes like that make up only about a third of the empty ones.
 
-The visitors are the other side of the count. After the road reopened in 2026, Caltrans reported that the visitors came back. They come for the view the 1986 plan set out to protect. Then they drive on. The census doesn't count them, because this isn't where they live.
+The visitors are the other side of the count. After the road reopened in 2026, Caltrans reported that the visitors came back. Many come for the view the 1986 plan set out to protect. Then they drive on. The census doesn't count them, because this isn't where they live.
 
 So how empty this coast looks depends on what you count. Count the people who live in the census district, and it's as empty as Wyoming. Count the homes, and many of them are kept by people who live somewhere else. Count the cars on Highway 1, and you find a road the county was already rationing in 1986.
 
 <!-- p9 · The view from Bixby Creek -->
 
-Back at Bixby Creek, drivers pull into the turnout to look at the bridge from the start of this video. It's one of the viewpoints the county's rule was written to protect. The creek below carries a homesteader's name. Above it runs a road that prisoners helped cut into the cliffs.
+Back at Bixby Creek, drivers pull into the turnout to look at the bridge from the start of this video. It's one of the viewpoints named in the county's rule. The creek below carries a homesteader's name. Above it runs a road that prisoners helped cut into the cliffs.
 
-Hardly a house is in sight. Part of that is the mountains, and part of it was a choice. In 1986, the county wrote that whatever came next should stay out of this view. That highway runs all the way from one metro area to the other. Together, they hold more than 17 million people. In between, on census day, the census district around this bridge counted fewer than 1,500 people who called it home.
+Hardly a house is in sight. Part of that is the mountains, and part of it was a choice. In its 1986 plan, the county wrote that whatever came next should stay out of this view. That highway runs all the way from one metro area to the other. Together, they hold more than 17 million people. In between, on census day, the census district around this bridge counted fewer than 1,500 people who called it home.
```

## 6. O portão no texto novo (`node roteiros/big-sur/_ferramentas/gate.mjs`)

Exit 0, **PASSA**, sem problema:

- sha `a280be45a53a`; 2.357 palavras (eram 2.396; faixa 2.250 a 2.450), 12,81 minutos estimados;
- 34 parágrafos, 190 frases pelo portão (eram 193), média de 12,4 palavras por frase (teto 15), maior frase 23 (teto 30);
- gancho com 141 palavras até a assinatura, inclusive (≈ 46 s; teto 170), com o "But" na palavra 19;
- taxas todas abaixo dos tetos (abre "But" 0, "And" 1,28, "So" 2,57; perguntas 1,71; frases curtas 2,14; travessões, "here" e antítese 0); autoplágio vazio;
- os mesmos 4 alertas de antes, que o roteirista já havia decidido (`escrita-notas.md` §4):
  1. "nobody" em "And it isn't that nobody came.";
  2. "never" na assinatura ("the coast that never filled up");
  3. "first" em "California's first official scenic highway" (1965, atribuído ao plano);
  4. a 1ª frase sem número ("This is Big Sur, between Los Angeles and San Francisco."): a imagem concreta está lá, e os números vêm na 2ª frase (17 milhões) e na 3ª (1.500).

O portão passou de primeira: não foi preciso nenhuma correção no roteiro depois do aplicador.

## 7. O que mudou no editor (`roteiros/big-sur/roteiro-editor.md`)

O aplicador gravou os 35 pares da lista. Conferi depois, por texto: as 23 frases que entraram no roteiro estão no editor com a redação nova (0 ausentes), e as 3 que
saíram sem substituta (f107, juntada a f106; f167 e f168, cortadas) estão riscadas, cada uma com a marca "(r1, Lnn)". Os pares:

- "A espinha" (a pergunta do gancho, f9, "So why did so few follow?", L02, e a sua linha no livro-razão, com o aviso de que os trabalhadores sem casa saíram, L20);
- o "Livro-razão da promessa" (f30, L03; f65, L09; f113, L11);
- as entradas por frase: f6 (L01), f9 (L02), f30 (L03), f34 (L04), f36 (L05), f40 e f41 (L06), f45 (L07), f52 (L08), f65 (L09), f106 e f107 (L10), f114 (L11),
  f115 (L12), f116 (L13), f121 (L14), f123 (L15), f132 (L16), f148 (L17), f156 (L18), f160 (L19), f167 e f168 (L20), f171 (L21), f179 (L22), f184 (L23);
- as duas frases do bloco da natureza (a definição de "wilderness" e o "they can't move in"), que ganharam a nota "CONFERIDA na r1 pelo verificador" (F061 e F062 do
  `fatos-r1`: 16 U.S.C. 1131(c) e 1133(c)); a frase não mudou (o achado 3 do crítico de roteiro ficou fora da lista).

Dois ajustes à mão, fora dos pares:

1. a linha 3, "Revisão do roteiro: `c00a9cce37c4`" → "Revisão do roteiro: `a280be45a53a`" (a ordem do pedido);
2. logo abaixo da "medida do portão" de partida (que fica como estava, de 02/11, sobre `c00a9cce37c4`), um parágrafo curto, "Depois da rodada 1", com a medida do
   texto novo (sha, 2.357 palavras, 190 frases, 141 palavras de gancho, PASSA, os mesmos 4 alertas) e a nota de que as frases trocadas levam a marca "(r1, Lnn)". Os números
   f das frases não se renumeram (as três que saíram ficam riscadas no lugar).

## 8. O `--derivados` (`node roteiros/big-sur/_ferramentas/gate.mjs --derivados`)

Exit 0, PASSA, `derivados_velhos` vazio. Ele conferiu um só derivado, o `roteiros/big-sur/roteiro-editor.md`, que agora cita `a280be45a53a` (ok). Não conferiu os três laudos
`roteiros/big-sur/qc-roteiro/fatos-r1.laudo.md`, `ouvinte-r1.laudo.md` e `roteiro-r1.laudo.md`, que seguem citando `c00a9cce37c4` **de propósito**: o gate os deixa de fora
(os que terminam em `-r<n>.laudo.md` são a entrada daquela rodada e julgaram o texto de antes). Não há `pronuncia.md` nem `voz/texto-para-voz.md` ainda: quando a cópia para a voz
nascer, leva o carimbo `a280be45a53a`.

## 9. O que continua aberto (não é texto, não se aplicou)

- P01 (VF13 e A18): a Sala lê no navegador do app a lei do traçado da Highway 1 (o §301).
- P02 (VF12): a regência e o conferente-de-midia escolhem a imagem do mirante de Bixby Creek.
- P03 (A5 e A9): a pesquisa traz uma fala de gente com nome, data e dono, para o p7.
- P04 (A10, parte a): a pesquisa confirma se a regra de 1986 vale hoje.
- A subtração do crítico de roteiro (S1 a S8) vai ao teste do ritmo (sobram 107 palavras acima do piso).
