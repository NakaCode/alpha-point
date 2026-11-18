# Conta os caracteres dos titulos e as palavras do gancho.
# Uso: python -X utf8 -B titulos.py
T = [
    "Why Texas Got Rich From Land Nobody Wanted",
    "Why the University of Texas Owns 2 Million Acres of Oil Country",
    "Why Washington Collects New Mexico's Oil Royalties but Not Texas's",
    "New Mexico's Oil Is 62% Federal. Texas's Is Almost Zero. Why?",
    "Why Texas Gave Its University a Desert, and the Desert Struck Oil",
    "Why Texas Gave Its University 2 Million Acres of Oil Country",
    "Why Washington Gets New Mexico's Oil Royalties but Not Texas's",
]
G2 = ("In 1876, Texas set aside a million acres of dry West Texas land for a university it hadn't built yet. "
      "The land was thought to be of little value. "
      "Across the state line, the same oil field now pays Washington first.")
print(len(G2.split()), "palavras no gancho 2")
for t in T:
    print(len(t), t)
G = ("In 1876, Texas gave its future university a million acres of West Texas desert. "
     "Under it lay the richest part of America's biggest oil field. "
     "And just across the line in New Mexico, the same oil pays Washington first.")
print(len(G.split()), "palavras no gancho")
