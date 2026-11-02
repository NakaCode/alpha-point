# A lista da r2 aplicada, como r2b · big-sur (vídeo 5)

Aplicada em 02/11/2026, ~14:26 de Brasília, por um subagente da Sala de controle, com
`node ferramentas/aplicar-lista.mjs big-sur --lista=roteiros/big-sur/_trabalho/lista-r2.json` (a lista, `lista-r2.json`, e o porquê dela,
`lista-r2.md`). Sem rede, sem gasto, sem commit, sem `regie`. O que a lista deixou de fora (a A2 do ouvinte; A6 (3) e (5); A10 (a) e (d); A12;
A13; A14) segue fora, e os dois PEDIR (VF12, a imagem do mirante; A1, a fala do Kirk Gafill palavra por palavra) ficam com a Sala.

## 1. O resultado, em uma linha

APLICADO, exit 0. Texto falado `4f827c30b9f8` → `50c2c56aaefc`. 21 itens, 18 diferenças, nenhuma frase sem item, 0 recusas, 0 avisos, 0 pendentes.
O portão PASSA no texto novo (2.260 palavras). O `--derivados` sai 1 só pelo `qc-roteiro/fatos.laudo.md`, que cita `4f827c30b9f8` de propósito (§8).

## 2. Por que "r2b", e antes de gravar

- A 1ª aplicação da lista, com `"rodada": "r2"`, saiu com exit 2, NAO_RODOU: `RECUSA [copia]: a cópia roteiros/big-sur/_trabalho/roteiro-r2.antes.md
  já existe com outro conteúdo: nada se grava`. Essa cópia é o r1 (sha12 `daa92ea6d0c4`), guardado pela reescrita r2; o aplicador não a sobrescreve,
  e não se mexeu nela.
- A única mudança na lista: `"rodada": "r2"` → `"rodada": "r2b"` (o `revisao_julgada` continua `4f827c30b9f8`; nenhum item mudou). O sha256 do
  arquivo da lista passou de `875fd7f4712cc3804058c552dbe1af284b683bcfe78143962d678099bf9f30f3` (reconstruído, com "r2" no lugar de "r2b") a
  `797796e08a9fe2561ae145a853c79918652b612d421017e213bf47954348045f`.
- Rodada seca (`--seco`): exit 0, `SECO_OK`, as mesmas 18 diferenças da rodada de verdade.
- Rodada de verdade (sem `--seco`): exit 0, `APLICADO`. A cópia que o próprio aplicador fez antes de gravar, conferida por ele (o sha256 da cópia é o
  do original): `roteiros/big-sur/_trabalho/roteiro-r2b.antes.md`, sha256 `af80c142091fca559faf2fc7d0bdfd5dd46f0efaeff9c33640e66b1d144f95d0`.
- A lista não tem par de editor (`provas_editor`: 0 pares): o aplicador não tocou no `roteiro-editor.md`. Antes de mexer nele à mão (§7), a cópia:
  `roteiros/big-sur/_trabalho/roteiro-editor-r2b.antes.md`, sha256 `0bec2a8298707e284f51e3116a61199755f77ea639825d66a71e5548cefc08b4` (igual ao original).

## 3. As provas do aplicador

Todas passaram (uma recusa seria exit 1, sem gravar nada; não houve):

| Prova | O que confere | Resultado |
|---|---|---|
| sha | o texto falado de agora é o `revisao_julgada` da lista (`4f827c30b9f8`) | passou |
| casa | cada "de" casa exatamente uma vez, na ordem da lista | passou |
| (a) | as aspas (citações) ficam idênticas e na mesma ordem | passou (0 antes, 0 depois) |
| (b) | os numerais do depois são os de antes, mais o que cada item declara; saldo por item | passou (82 antes, 82 depois; nenhum item declara numeral) |
| (c) | nenhum parágrafo mudou sem dono; nenhuma frase do diff sem item; o "parte" de cada item é a parte do dono | passou (17 parágrafos mudados, 35 antes e 35 depois; frases sem item: 0) |
| (d) | os REDIZER não trazem número, data, nome próprio, grupo de pessoas nem aspas novas | passou (14 REDIZER, 0 falhas) |
| (e) | os pares do editor casam exatamente uma vez em `roteiro-editor.md` | passou (0 pares) |
| gate | o `gate.mjs` do vídeo, rodado pelo aplicador antes e depois, lê o mesmo sha que ele | passou (antes: PASSA, 2.321 palavras; depois e `gate_depois_de_gravar`: PASSA, 2.260 palavras, 0 problemas) |

## 4. O sha, antes e depois

| Arquivo | Antes | Depois |
|---|---|---|
| texto falado (o do portão) | `4f827c30b9f8` (`4f827c30b9f8a0ca585a5dcbea7286ce4939963825e8a2e0d0ac071e02d3be31`) | `50c2c56aaefc` (`50c2c56aaefce05924e9075fd6fd64a0f8b5d832f87cea2d5c525014106983ae`) |
| `roteiro-narrador.md` (o arquivo inteiro, sha256) | `af80c142091fca559faf2fc7d0bdfd5dd46f0efaeff9c33640e66b1d144f95d0` | `b0b7234a45a3006dc5cd0b9df9a87a004c94cc0dec3a4717f8cde02355907926` |
| `roteiro-editor.md` (o arquivo inteiro, sha256) | `0bec2a8298707e284f51e3116a61199755f77ea639825d66a71e5548cefc08b4` | `33a33e9a1326a4d4d7bb250ae14aaeb3d6f8101c87c1b7f97434847723e68e89` (depois das trocas à mão do §7) |

Os dois arquivos ficam com fim de linha LF.

## 5. O que mudou no roteiro, frase a frase (a saída do aplicador)

```
aplicar-lista · big-sur · r2b · APLICADO
texto falado: 4f827c30b9f8 → 50c2c56aaefc

roteiro-narrador.md: 21 itens · 18 diferenças · frases sem item: 0
  Diferença 1 (gancho)
    SAI:   It isn't the weather. ← L01
    ENTRA: It isn't a harsh climate. ← L01
  Diferença 2 (gancho)
    SAI:   So why did so few follow? ← L02
    SAI:   The mountains are part of it. ← L03
    SAI:   A road that took decades to build, and keeps giving way, is another. ← L03
    SAI:   There's also a rule in that plan about building anything you could see from the road. ← L03
    ENTRA: So why didn't it fill up? ← L02
    ENTRA: Part of the answer is what you'd expect: mountains, and a road that keeps giving way. ← L03
    ENTRA: The rest is less obvious. ← L03
    ENTRA: There's a rule in that plan about building anything you could see from the road. ← L03
  Diferença 3 (p1)
    SAI:   Let's start with that number, because it's easy to hear it wrong. ← L04
    ENTRA: Let's start with the district's number, because it's easy to hear it wrong. ← L04
  Diferença 4 (p1)
    SAI:   It starts a few miles south of Carmel, follows the shore past this bridge and a long way down the coast, and then climbs back into the mountains behind it. ← L05
    SAI:   Altogether, it takes in roughly two-thirds of the Big Sur coast. ← L05
    ENTRA: It takes in roughly two-thirds of the Big Sur coast and the mountains behind it, from a few miles south of Carmel, past this bridge, and a long way down the shore. ← L05
  Diferença 5 (p1)
    SAI:   With that settled, let's try something. ← L06
  Diferença 6 (p2)
    SAI:   Highway 1 is the basic route into the area. ← L07
    ENTRA: Mostly, that means Highway 1. ← L07
  Diferença 7 (p2)
    SAI:   The plan calls those water resources relatively small and seasonal, shared by the animals, the plants and the people. ← L08
    ENTRA: The supply is relatively small and seasonal, and the animals, the plants and the people all share it. ← L08
  Diferença 8 (p2)
    SAI:   Not the weather. ← L09
    SAI:   The winters are wet, the summers are dry, and the climate, in the county's own word, is mild. ← L09
  Diferença 9 (p2,p3)
    SAI:   Which raises a fair question. ← L10
    SAI:   Why did anyone come at all? ← L10
    SAI:   Because people did come. ← L11
    ENTRA: How did anyone make a living on this coast? ← L10
  Diferença 10 (p3)
    SAI:   Even so, by the turn of the century, visitors could already come by stagecoach from Monterey to camp in the redwoods. ← L12
    ENTRA: Even so, around the turn of the century, visitors could already come by stagecoach from Monterey to camp in the redwoods. ← L12
  Diferença 11 (p4)
    SAI:   In 1965, this stretch was designated California's first official scenic highway, and by the 1980s, by the county's estimate, nearly all of its summer traffic was recreational. ← L13
    SAI:   Which left the county with a harder question than how to get people in. ← L14
    SAI:   How much of this coast should be built on at all? ← L14
    ENTRA: In 1965, this stretch was designated California's first official scenic highway, and in the 1980s, the county estimated, nearly all of its summer traffic was recreational. ← L13
    ENTRA: That left the county with a harder question than how to get people in: how much of this coast should be built on. ← L14
  Diferença 12 (p5)
    SAI:   The plan has a name for everything in sight of those places: the critical viewshed. ← L15
    ENTRA: Everything in sight of those places got a name: the critical viewshed. ← L15
  Diferença 13 (p5)
    SAI:   In 1986, it estimated nearly three million visitors a year, expected that to double over the next 20 to 25 years, and noted that traffic jams on Highway 1 were already a problem. ← L16
    ENTRA: In 1986, it estimated nearly three million visitors a year, and expected that to double over the next 20 to 25 years. ← L16
    ENTRA: Traffic jams on Highway 1 were already a problem. ← L16
  Diferença 14 (p5)
    SAI:   The rule didn't empty this coast by itself. ← L17
    ENTRA: The rule didn't empty this coast. ← L17
  Diferença 15 (p5)
    SAI:   And then came the years when the trouble was keeping that road open at all. ← L18
    ENTRA: And then came the years when the trouble was keeping that road open. ← L18
  Diferença 16 (p6)
    SAI:   Regent's kept the road cut. ← L19
    ENTRA: Regent's kept the road shut. ← L19
  Diferença 17 (p6)
    SAI:   Firefighters were hurt fighting it. ← L20
  Diferença 18 (p7)
    SAI:   Part of that is the mountains, and part of it was a choice: in its 1986 plan, the county wrote that whatever came next should stay out of this view. ← L21
    ENTRA: Part of that is the mountains, and part of it was a choice. ← L21
    ENTRA: In its 1986 plan, the county wrote that whatever came next should stay out of this view. ← L21
```

Os itens e as operações, na ordem da lista (linha do arquivo antes, parte e parágrafo dono): L01 REDIZER (l. 13, gancho, § 2) · L02 REDIZER (l. 13, gancho, § 2) · L03 REDIZER (l. 15, gancho, § 3) · L04 REDIZER (l. 19, p1, § 4) · L05 REDIZER (l. 21, p1, § 5) · L06 CORTAR (l. 25, p1, § 7) · L07 REDIZER (l. 31, p2, § 9) · L08 REDIZER (l. 31, p2, § 9) · L09 CORTAR (l. 33, p2, § 10) · L10 REDIZER (l. 39, p2, § 13) · L11 CORTAR (l. 43, p3, § 14) · L12 DA-FONTE (l. 47, p3, § 16) · L13 REDIZER (l. 57, p4, § 20) · L14 REDIZER (l. 57, p4, § 20) · L15 REDIZER (l. 61, p5, § 21) · L16 REDIZER (l. 67, p5, § 24) · L17 ESTREITAR (l. 69, p5, § 25) · L18 CORTAR (l. 69, p5, § 25) · L19 REDIZER (l. 73, p6, § 26) · L20 CORTAR (l. 77, p6, § 28) · L21 REDIZER (l. 93, p7, § 35) (os campos de cada item estão em
`lista-r2.json` › itens).

### O diff do arquivo (`diff -u roteiro-r2b.antes.md roteiro-narrador.md`)

```diff
--- roteiros/big-sur/_trabalho/roteiro-r2b.antes.md	2026-11-02 14:26:15.400388600 -0300
+++ roteiros/big-sur/roteiro-narrador.md	2026-11-02 14:26:15.400388600 -0300
@@ -10,41 +10,41 @@
 
 This is Big Sur, between Los Angeles and San Francisco. Their metro areas hold more than 17 million people. But the census district around this bridge counted fewer than 1,500 people, as empty as Wyoming. Why?
 
-It isn't the weather. Monterey County's 1986 plan for this coast, a rulebook for what could be built on it, calls the climate mild. And it isn't that nobody came. By the 1880s, the same plan says, nearly a thousand people were living along this coast. So why did so few follow?
+It isn't a harsh climate. Monterey County's 1986 plan for this coast, a rulebook for what could be built on it, calls the climate mild. And it isn't that nobody came. By the 1880s, the same plan says, nearly a thousand people were living along this coast. So why didn't it fill up?
 
-The mountains are part of it. A road that took decades to build, and keeps giving way, is another. There's also a rule in that plan about building anything you could see from the road. And there are the homes that do stand along this coast, and often sit empty. You're at Alpha Point, and this is where the story of the coast that never filled up begins.
+Part of the answer is what you'd expect: mountains, and a road that keeps giving way. The rest is less obvious. There's a rule in that plan about building anything you could see from the road. And there are the homes that do stand along this coast, and often sit empty. You're at Alpha Point, and this is where the story of the coast that never filled up begins.
 
 <!-- p1 · The number, and the district it belongs to -->
 
-Let's start with that number, because it's easy to hear it wrong. The census doesn't count a town called Big Sur. It counts a district, one of the areas the Census Bureau draws inside a county to add up its numbers. This one, in Monterey County, carries the name Big Sur.
+Let's start with the district's number, because it's easy to hear it wrong. The census doesn't count a town called Big Sur. It counts a district, one of the areas the Census Bureau draws inside a county to add up its numbers. This one, in Monterey County, carries the name Big Sur.
 
-It starts a few miles south of Carmel, follows the shore past this bridge and a long way down the coast, and then climbs back into the mountains behind it. Altogether, it takes in roughly two-thirds of the Big Sur coast. The southern end of the coast belongs to a different district, one that reaches over the mountains to a valley inland.
+It takes in roughly two-thirds of the Big Sur coast and the mountains behind it, from a few miles south of Carmel, past this bridge, and a long way down the shore. The southern end of the coast belongs to a different district, one that reaches over the mountains to a valley inland.
 
 The count is from 2020, the most recent census. The district has about 250 square miles of land. Spread its people evenly across all of it, and you get about six people per square mile. Wyoming had about the same that year. Among U.S. states, only Alaska had fewer people for its size, and California, the most populous of them, was more than 40 times as crowded as this district.
 
-One more outline, and then we can get going. The county's 1986 plan covers the whole coast, more than 70 miles of it, from Carmel down to the next county. So when a number comes from the plan, it's a number for that bigger coast, and you'll hear which is which. With that settled, let's try something. Say you wanted to move to this coast. Not visit. Move. Where would you put the house?
+One more outline, and then we can get going. The county's 1986 plan covers the whole coast, more than 70 miles of it, from Carmel down to the next county. So when a number comes from the plan, it's a number for that bigger coast, and you'll hear which is which. Say you wanted to move to this coast. Not visit. Move. Where would you put the house?
 
 <!-- p2 · Try to build a house -->
 
 Picture it. You need a piece of flat ground, and there's very little of it. The Santa Lucia Mountains rise straight out of the surf. At Cone Peak, in the southern part of this coast, they reach about 5,200 feet, and their western slopes, in the words of the county's plan, drop precipitously to the sea. Much of the shoreline is sheer cliff, and beaches are few. The flat ground a town would need, or a port, mostly isn't there.
 
-Then you need a way in. Highway 1 is the basic route into the area. In 1986, the county counted just one other road from inland, a lightly used county road that climbed over the mountains and crossed a military reservation. And then there's water, which you'd think would be the easy part, since nearly fifty streams run down these mountains to the sea. It isn't. The plan calls those water resources relatively small and seasonal, shared by the animals, the plants and the people. Winters bring some of the heaviest rainfall in California. Summers are long and dry.
+Then you need a way in. Mostly, that means Highway 1. In 1986, the county counted just one other road from inland, a lightly used county road that climbed over the mountains and crossed a military reservation. And then there's water, which you'd think would be the easy part, since nearly fifty streams run down these mountains to the sea. It isn't. The supply is relatively small and seasonal, and the animals, the plants and the people all share it. Winters bring some of the heaviest rainfall in California. Summers are long and dry.
 
-When the county listed what holds building back on this coast, that was the list: water, difficult access, unstable soils on steep slopes, and the dangers of fire and flood. Not the weather. The winters are wet, the summers are dry, and the climate, in the county's own word, is mild. What's scarce is ground you can build on, and a way to reach it.
+When the county listed what holds building back on this coast, that was the list: water, difficult access, unstable soils on steep slopes, and the dangers of fire and flood. What's scarce is ground you can build on, and a way to reach it.
 
 And suppose you did find your patch of flat ground. There's a fair chance it's public land. About half of the land in the county's plan lies inside the Los Padres National Forest and the Ventana Wilderness. That's federal land, owned by the U.S. Forest Service, and in the wilderness, the plan limits land use to backcountry recreation. You can hike there, but you can't move in. State parks take up more of the land. Homes have to fit on what's left, and much of what's left is steep.
 
 And the ground itself can move. In 2017, at a place called Mud Creek, near the southern end of the coast and outside the census district, a whole hillside slid down over the highway. That July, a researcher with the U.S. Geological Survey flew a drone over the slide. In his video, the road simply disappears under a new slope of earth and rock.
 
-Mud Creek wasn't the end of it. Caltrans, California's highway department, has names for other slopes that have closed the road since then. Two of them are called Paul's Slide and Regent's Slide. So that's the ground you'd be building on: steep, slipping, and much of it spoken for. Which raises a fair question. Why did anyone come at all?
+Mud Creek wasn't the end of it. Caltrans, California's highway department, has names for other slopes that have closed the road since then. Two of them are called Paul's Slide and Regent's Slide. So that's the ground you'd be building on: steep, slipping, and much of it spoken for. How did anyone make a living on this coast?
 
 <!-- p3 · Nearly a thousand, by sea -->
 
-Because people did come. They ranched, mostly to feed their own families. They cut redwoods for lumber, and they peeled tanbark, a bark used to make tannic acid. They mined limestone, and some of them mined gold. By the 1880s, nearly a thousand people were living along this coast on work like that. That's the plan's count, and it's a count for the whole coast, not just the census district. Some of those homesteaders left their names on the map. The Pfeiffers did, and so did Charlie Bixby; the bridge at the start of this video carries his name.
+They ranched, mostly to feed their own families. They cut redwoods for lumber, and they peeled tanbark, a bark used to make tannic acid. They mined limestone, and some of them mined gold. By the 1880s, nearly a thousand people were living along this coast on work like that. That's the plan's count, and it's a count for the whole coast, not just the census district. Some of those homesteaders left their names on the map. The Pfeiffers did, and so did Charlie Bixby; the bridge at the start of this video carries his name.
 
 There was no highway. The mountains, the deep canyons and the lack of roads made travel slow and difficult, so most of what the coast produced went out by sea. Small trading boats called at landings along the shore. They loaded lumber, bark and limestone, and they dropped off supplies.
 
-Over land there was a road of sorts, hazardous enough that it had to be closed part of the year. Even so, by the turn of the century, visitors could already come by stagecoach from Monterey to camp in the redwoods. Some locals earned extra money guiding hunters and fishermen from the cities. A road you could count on in every season was decades away.
+Over land there was a road of sorts, hazardous enough that it had to be closed part of the year. Even so, around the turn of the century, visitors could already come by stagecoach from Monterey to camp in the redwoods. Some locals earned extra money guiding hunters and fishermen from the cities. A road you could count on in every season was decades away.
 
 <!-- p4 · A road cut into the cliffs -->
 
@@ -54,27 +54,27 @@
 
 In 1934, while the road was under construction, John Pfeiffer sold land to the state for a park. The county would later call that sale the start of the coast's long-term protection. The highway was finished in June 1937. The county's plan puts the cost at about 8 million dollars, and sums up the change in one line: a way of life had ended, and a new era began.
 
-The new road put the coast within easy reach. By the time the county wrote its plan, the Bay Area and Los Angeles were less than a day's drive away. Along the road grew campgrounds, lodges, restaurants, and places to pull over for the view. In 1965, this stretch was designated California's first official scenic highway, and by the 1980s, by the county's estimate, nearly all of its summer traffic was recreational. Which left the county with a harder question than how to get people in. How much of this coast should be built on at all?
+The new road put the coast within easy reach. By the time the county wrote its plan, the Bay Area and Los Angeles were less than a day's drive away. Along the road grew campgrounds, lodges, restaurants, and places to pull over for the view. In 1965, this stretch was designated California's first official scenic highway, and in the 1980s, the county estimated, nearly all of its summer traffic was recreational. That left the county with a harder question than how to get people in: how much of this coast should be built on.
 
 <!-- p5 · The rule about what you can see -->
 
-The county's answer took final form in 1986, in the plan we've been quoting. By then, much of this coast was already public land. And the basic rule the county wrote was about what you can see. The policy was to prohibit all future development, public or private, visible from Highway 1 and from major public viewpoints. The plan has a name for everything in sight of those places: the critical viewshed.
+The county's answer took final form in 1986, in the plan we've been quoting. By then, much of this coast was already public land. And the basic rule the county wrote was about what you can see. The policy was to prohibit all future development, public or private, visible from Highway 1 and from major public viewpoints. Everything in sight of those places got a name: the critical viewshed.
 
 It even names some of the viewpoints, and one of them is the turnout beside the bridge at Bixby Creek. Stand there, and the test, in the plan's own words, was this: normal, unaided vision, in any direction, for any amount of time, at any season.
 
 If a new building would show, it had to be moved, redesigned, or not built there at all. New roads couldn't scar that view either, and neither could grading, the earthmoving that reshapes a slope. Out of sight of the road, you could build, with conditions. New homes had to go where the land or the trees would screen them, not on open hillsides, and not on ridges against the sky.
 
-And the county treated the road itself as something that could run out. In 1986, it estimated nearly three million visitors a year, expected that to double over the next 20 to 25 years, and noted that traffic jams on Highway 1 were already a problem. So it reserved most of the highway's capacity for recreation, visitors and a few other priority uses. All the new homes on this coast, together, could use no more than 15 percent of it.
+And the county treated the road itself as something that could run out. In 1986, it estimated nearly three million visitors a year, and expected that to double over the next 20 to 25 years. Traffic jams on Highway 1 were already a problem. So it reserved most of the highway's capacity for recreation, visitors and a few other priority uses. All the new homes on this coast, together, could use no more than 15 percent of it.
 
-The rule didn't empty this coast by itself. It was thinly settled long before 1986. What the county decided was how the coast should look from the road, and who the road was for. And then came the years when the trouble was keeping that road open at all.
+The rule didn't empty this coast. It was thinly settled long before 1986. What the county decided was how the coast should look from the road, and who the road was for. And then came the years when the trouble was keeping that road open.
 
 <!-- p6 · Three years without the road, then fire -->
 
-So how long can a coast like this go without its road? In January 2023, Paul's Slide closed Highway 1. In February 2024, Regent's Slide gave way, six miles to the north. Paul's Slide reopened that summer. Regent's kept the road cut. For almost three years, you couldn't drive this coast from end to end.
+So how long can a coast like this go without its road? In January 2023, Paul's Slide closed Highway 1. In February 2024, Regent's Slide gave way, six miles to the north. Paul's Slide reopened that summer. Regent's kept the road shut. For almost three years, you couldn't drive this coast from end to end.
 
 Crews drilled thousands of steel bars into the slope at Regent's Slide to hold it in place. Caltrans reopened the road there at noon on January 14, 2026, months ahead of its target date. The agency put the repair at nearly 83 million dollars, and even then it warned drivers to expect occasional full closures while crews cleared debris. Kirk Gafill owns the Nepenthe restaurant in Big Sur. In May 2026, in a Caltrans release, he said his business, his staff and the community were recovering from those years.
 
-Fire was on the county's list of dangers, too. In August 2026, a wildfire started in the backcountry above the coast and spread through these mountains. It became known as the Timber Fire. CAL FIRE, the state's fire agency, listed hundreds of homes, businesses and other buildings as threatened. Firefighters were hurt fighting it. By mid-October, it was almost fully contained.
+Fire was on the county's list of dangers, too. In August 2026, a wildfire started in the backcountry above the coast and spread through these mountains. It became known as the Timber Fire. CAL FIRE, the state's fire agency, listed hundreds of homes, businesses and other buildings as threatened. By mid-October, it was almost fully contained.
 
 For weeks, Caltrans kept parts of Highway 1 inside the census district closed. Farther south, a second fire, the Plaskett Fire, closed another stretch. For the people who live along this road, the fire came only months after the long closures of the slides had ended. By November 2026, the road was open from end to end again, with one-way traffic at a few work zones.
 
@@ -90,4 +90,4 @@
 
 Back at Bixby Creek, drivers pull into the turnout to look at the bridge from the start of this video. It's one of the viewpoints named in the county's rule. The creek below carries a homesteader's name. Above it runs a road that prisoners helped cut into the cliffs.
 
-Hardly a house is in sight. Part of that is the mountains, and part of it was a choice: in its 1986 plan, the county wrote that whatever came next should stay out of this view. Together, the Los Angeles and San Francisco metro areas hold more than 17 million people. In between, on census day, the census district around this bridge counted fewer than 1,500 people who called it home.
+Hardly a house is in sight. Part of that is the mountains, and part of it was a choice. In its 1986 plan, the county wrote that whatever came next should stay out of this view. Together, the Los Angeles and San Francisco metro areas hold more than 17 million people. In between, on census day, the census district around this bridge counted fewer than 1,500 people who called it home.
```

## 6. O portão no texto novo (`node roteiros/big-sur/_ferramentas/gate.mjs`)

Exit 0, **PASSA**, sem problema:

- sha `50c2c56aaefc`; 2.260 palavras (eram 2.321; faixa 2.250 a 2.450), 12,28 minutos estimados a 184 palavras/min;
- 35 parágrafos, 169 frases pelo portão (eram 175; o "U.S." parte três, e são 163 frases de verdade), média de 13,4 palavras por frase (teto 18), maior frase 32 (teto 34);
- gancho com 158 palavras até a assinatura, inclusive (≈ 51,5 s; teto 170), com o "But" na palavra 19;
- taxas todas abaixo dos tetos (abre "But" 0, "And" 3,57, "So" 3,12; perguntas 2,23 (5; teto 2,27; eram 6, acima do teto); frases curtas 2,68; travessões, "here" e antítese 0); autoplágio vazio;
- 4 alertas, os que o roteirista já havia decidido (`escrita-notas-r2.md` §2; o das perguntas saiu):
  1. conferir /\bnobody\b/i: "And it isn't that nobody came."
  2. conferir /\bnever\b/i: "You're at Alpha Point, and this is where the story of the coast that never filled up begins."
  3. conferir /\bfirst\b/i: "In 1965, this stretch was designated California's first official scenic highway, and in the 1980s, t"
  4. a primeira frase não tem número (algarismo ou por extenso): ela é o fato mais surpreendente sobre o lugar da imagem de abertura, concreto, com o nome do lugar e um número ou uma imagem (voz §1, "Os números da fala"); sem número, confira que a imagem concreta está lá: "This is Big Sur, between Los Angeles and San Francisco."

## 7. O que mudou no editor (`roteiros/big-sur/roteiro-editor.md`)

Sem par de editor na lista, as trocas foram à mão, por um script de trocas exatas (cada uma casando uma vez só, ou nada se grava; 88 trocas, 0 falhas;
`C:\Users\zangp\AppData\Local\Temp\claude\C--projetos-alpha-point\b375663d-aa56-4ef7-91a0-2424b9ea0483\scratchpad\r2b\trocas-editor.txt`):

- a linha 3, "Revisão do roteiro: `4f827c30b9f8`" → "Revisão do roteiro: `50c2c56aaefc`";
- as 27 notas "Lista r2, Lnn (pendente; o aplicador não gravou)" viraram "Lista r2, Lnn (r2b)", agora com a redação de antes ("era …") e o mesmo porquê;
  a frase de cada entrada passou à redação aplicada. As ids (fN e R001–R237) e as linhas de crédito ficam; as oito frases que saíram ficam
  riscadas no lugar, com as ids: f20 (juntada a f19, L05), f30 (L06), f50 e f51 (L09), f68 (juntada a f69, L10), f70 (L11), f103 (juntada a
  f102, L14) e f138 (L20). f116 (L16) e f167 (L21) ficam numa entrada só, com as duas frases. Onde a fonte saiu da voz (f46, L08; f108, L15),
  a entrada ganhou a linha "A fonte saiu da voz na r2b … Crédito `Source: Monterey County, Big Sur Coast Land Use Plan, 1986`";
- o topo: o parágrafo "A lista da r2, pendente" virou "Depois da lista r2, aplicada como r2b", com a medida do texto novo (a medida de partida, sobre
  `4f827c30b9f8`, fica como estava); e a nota das posições aponta o script que as mediu no texto novo;
- "A espinha" (a pergunta de f9; o "by itself" de f119), o "Livro-razão da promessa" (f5–f6, f9, f10 e f11, f102), "As partes" (as palavras e os
  tempos do texto novo; a coluna "Com a lista" virou "Antes da r2b", com as do texto julgado), o tamanho dos pedidos à voz (44 a 95), as posições
  das chamadas (inscrição: palavras 1.029–1.040, ≈ 45 %; reserva: 1.237–1.245; comentário: 2.171–2.189; cauda a ≈ 12:17 e ≈ 14:35), "roughly
  two-thirds" em f19, a palavra da assinatura (158) e o "Para a bancada" (os CORRIGIR 1 e 2 fechados no texto; "A lista-r2, aplicada (r2b)").

A conferência, por script (`…\scratchpad\r2b\conferir-editor.mjs`): as 161 entradas vivas do editor, em ordem (f116 e f167 com duas frases cada,
163 frases), juntadas, reproduzem o texto falado `50c2c56aaefc` caractere por caractere; riscadas, as oito acima.

## 8. O `--derivados` (`node roteiros/big-sur/_ferramentas/gate.mjs --derivados`)

Exit 1, REPROVADO, com 1 problema(s), e ele é só este: "derivado com sha velho: roteiros/big-sur/qc-roteiro/fatos.laudo.md cita 4f827c30b9f8, e o texto falado de agora é 50c2c56aaefc".

Os derivados conferidos (2):
- `roteiros/big-sur/qc-roteiro/fatos.laudo.md`: cita `4f827c30b9f8` (sha velho);
- `roteiros/big-sur/roteiro-editor.md`: cita `50c2c56aaefc` (ok);

O `fatos.laudo.md` cita `4f827c30b9f8` **de propósito**: é o laudo da bancada sobre o texto julgado, e o carimbo só muda quando o verificador
reler as frases trocadas no texto novo. O `ouvinte-r2.laudo.md` (e os `-r1`) o gate deixa de fora (os que terminam em `-r<n>.laudo.md` são a
entrada daquela rodada). Não há `pronuncia.md` nem `voz/texto-para-voz.md` ainda: quando a cópia para a voz nascer, leva o carimbo `50c2c56aaefc`.
Fora o laudo, o portão no texto novo é o do §6 (sem `--derivados`, exit 0).

## 9. O que continua aberto (não é texto, não se aplicou)

- O verificador relê as frases trocadas: a `qc-roteiro/fatos-tabela.json` casa pela frase e foi feita sobre `4f827c30b9f8`, e o `portao-fatos` só
  passa com a tabela no texto novo. Até lá, o `fatos.laudo.md` segue com o carimbo velho, e o `--derivados` o aponta.
- VF12 (PEDIR): a imagem do mirante de Bixby Creek decide f166 ("Hardly a house is in sight."), à regência e ao conferente-de-midia.
- A1 (PEDIR): a fala do Kirk Gafill palavra por palavra, da nota da Caltrans de 15/05/2026, é decisão da Sala e passa pelo verificador.
- O texto está a 10 palavras do piso (2.260; a faixa é 2.250–2.450): não há folga para outra subtração.
- A `roteiro-narrador-pt-BR.md` (a versão em português para o Lucas ler) é da revisão `daa92ea6d0c4`, o r1: não acompanha nem a r2 nem a r2b.
