# Conta os caracteres dos titulos (limite 65) e as palavras dos ganchos (alvo ~45).
T = """Why Kahoolawe Is the Hawaiian Island Nobody Can Live On
Why Kahoolawe Is Still Off-Limits, 36 Years After the Bombs
The Hawaiian Island the Navy Bombed for 50 Years
Why Hilo Turned Its Waterfront Into a Park
Why Nobody Is Allowed to Live on Hilo's Waterfront
Why Hilo Is Hawaii's Tsunami Trap
Why Part of Australia Is Still Off-Limits After Britain's Nukes
Why Nobody Can Live at Maralinga, Where Britain Tested Nukes
Why Britain Nuked the Australian Outback
Why Alaska Had to Abandon the Village of Newtok
The Alaska Village That Had to Move 9 Miles to Survive
Why the Ground Under Newtok, Alaska, Washed Away
Why Ontario Abandoned Lemieux Before the Ground Turned to Liquid
The Clay Under Ottawa That Can Turn to Liquid
Why Canada Moved a Whole Town, Then Watched the Ground Vanish
Why Australia's Islands Off Papua New Guinea Are Going Under
The Australian Islands Built From Papua New Guinea's Mud
Why Saibai Island Floods Every Year, 2 Miles From PNG
Why Australia Is Paying People to Leave Lismore
Why Lismore's Flood Zone Can Never Have Homes Again
Why Lismore Keeps Drowning
Why Nobody Lives on Attu, America's Westernmost Island
Why America Never Let Anyone Go Back to Attu
Why Attu, Alaska, Has Been Empty Since 2010"""
for t in T.splitlines():
    print(len(t), t)

G = {
"kahoolawe": "In 1953, America promised to hand this Hawaiian island back in a condition suitable for habitation. Congress later set aside $400 million to do it. Today only one acre in ten is cleared deep enough to dig, and nobody lives there. What went wrong?",
"hilo": "Twice in fourteen years, waves born thousands of miles away wiped out the same Hawaiian waterfront. After the second time, Hilo did something almost no American city has done: it stopped people from living there. Why does Hilo keep getting hit?",
"maralinga": "In the 1950s, Britain set off seven atomic bombs in the Australian desert, almost ten thousand miles from London. The land was cleaned up twice and handed back. Yet part of it is still not safe to live on. Why there, and why still?",
"newtok": "For years, this Alaska village lost about seventy feet of ground a year. In 2024, it shut off its power and water, and the last families left. Newtok is a ghost town now. What is eating the ground under Alaska's villages?",
"lemieux": "In 1991, the 28 homes of Lemieux, Ontario, were bought out and emptied. Two years later, the ground where the town had stood flowed into the river like wet cement. How did they know, and what else sits on that clay?",
"saibai": "Saibai Island is part of Australia, yet Papua New Guinea's coast is about two miles away. The island is built from mud that New Guinea's rivers carried out to sea, and king tides now flow through its homes. Can Australia keep it?",
"lismore": "In 2022, the river at Lismore rose more than seven feet above its old record. Since then, the government has been buying homes on the floodplain, and that land can never hold a house again. So why was a town built there?",
"attu": "In 1942, Japan took the whole village of Attu, Alaska, to a prison camp in Hokkaido. Almost half never came home. The survivors were not allowed to go back. Today the island is empty. Why did America let it go?",
}
for k, g in G.items():
    print(k, len(g.split()), "palavras")
