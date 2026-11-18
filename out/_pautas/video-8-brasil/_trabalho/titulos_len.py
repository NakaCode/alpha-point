# Conta os caracteres dos titulos e as palavras dos ganchos. Uso: python -X utf8 -B titulos_len.py
T = [
    "Why Brazil Has Two Rainforests That Never Touch",
    "Why South America Has Two Rainforests Instead of One",
    "The Dry Belt That Split South America's Rainforest in Two",
    "Why the U.S. Planned to Invade Brazil in 1941",
    "Why the U.S. Drew Up a Plan to Invade Brazil",
    "The Corner of Brazil the U.S. Was Ready to Invade",
    "The Railroad Brazil Built to Pay for a Piece of the Amazon",
    "How Brazil Bought a Piece of the Amazon Bigger Than Uruguay",
    "Why Brazil Paid for Part of the Amazon With a Railroad",
    "The Tiny Island That Gives Brazil an Ocean Bigger Than California",
    "Why Brazil Guards a 4-Square-Mile Island 700 Miles Out to Sea",
    "The Island Britain Took From Brazil in 1895",
    "Three-Quarters of Brazil Was Supposed to Be Spanish",
    "Why Spain's Half of South America Split Into 9 Countries",
    "Spain's Half Became 9 Countries. Portugal's Half Is Brazil.",
    "Why the Country With the Most Fresh Water Keeps Running Dry",
    "Brazil Has the Most Fresh Water on Earth. Its Biggest City Ran Dry.",
    "Why Brazil's Biggest City Ran Short of Water in 2014",
]
for t in T:
    print(len(t), t)
G = {
    "florestas": "South America has two great rainforests: the Amazon, and a second one along Brazil's Atlantic coast. On Brazil's official map, they never touch. At their closest, about 350 miles of savanna and dry scrub keep them apart.",
    "rubber": "In December 1941, American war planners approved a plan to land Marines on the beaches of Natal, Brazil. Brazil was neutral, and friendly. What made this one corner of South America worth invading wasn't anything on the ground.",
    "acre": "In 1903, Brazil paid Bolivia two million pounds for a piece of the Amazon bigger than Uruguay. The money wasn't the whole price. Brazil also promised a railroad through the jungle, and thousands of men died building it.",
    "trindade": "Seven hundred miles off Brazil's coast sits a volcanic island of about four square miles, with no permanent residents. Britain took it in 1895, and an American once crowned himself its prince. Brazil keeps sailors there year-round.",
    "metades": "In 1494, a line on a map gave Portugal a thin slice of South America. Today three-quarters of Brazil lies on what was supposed to be Spain's side. And Spain's half broke into nine countries, while Brazil stayed one.",
    "agua": "No country on Earth has more fresh water than Brazil. Yet in 2014, the reservoirs that supply its biggest city ran so low that engineers pumped from below the intake pipes. The water hadn't disappeared.",
}
for k, g in G.items():
    print(k, len(g.split()), "palavras")
