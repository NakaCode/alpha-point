"""As contas da pauta do vídeo 6 (a Praia do Cassino): conversões, títulos, ganchos e palavras por ato.

Uso: python -I -X utf8 -B contas_cassino.py   (sem argumento; não lê nem baixa nada)

Ritmo da voz: ~179 palavras/min (o Big Sur: 2.300 palavras em 767,6 s de fala; o teste às cegas de 03/11 ficou no ritmo de hoje).
As contagens dos ganchos são sobre o texto como está (números em algarismos contam como uma palavra; na cópia para a voz,
"158" vira "one hundred fifty-eight" e o tempo sobe: a conta da voz vem abaixo).
"""
import re

KM_MI = 0.621371
WPM = 179.0


def mi(km):
    return km * KM_MI


print("== Conversões (km -> mi)")
for rot, km in [
    ("IBGE, a faixa inteira", 218.0),
    ("IBGE, Rio Grande (Praia do Cassino)", 62.05),
    ("IBGE, Santa Vitória do Palmar", 155.95),
    ("Governo do RS", 254.0),
    ("Prefeitura / Rede de Trilhas (cerca de)", 223.0),
    ("mínimo publicado (en.wikipedia)", 212.0),
    ("corda reta, conta de memória (fatos 2.8)", 212.0),
    ("costa do RS (Toldo et al. 2003)", 630.0),
    ("Eighty Mile Beach, Ramsar 2025", 220.0),
    ("Eighty Mile Beach, en.wikipedia", 230.0),
    ("Cox's Bazar", 120.0),
    ("Molhes ao centro de Rio Grande", 22.0),
    ("Altair ao centro do Cassino (g1)", 16.0),
    ("plataforma, mínimo", 150.0),
    ("plataforma, máximo", 200.0),
    ("barreira do Cassino, mínimo", 8.0),
    ("barreira do Cassino, máximo", 14.0),
    ("cascalho biodetrítico (Calliari e Klein 1993)", 60.0),
]:
    print(f"  {rot}: {km} km = {mi(km):.1f} mi")
print(f"  lagoas Patos + Mirim: 13.750 km2 = {13750 * KM_MI ** 2:,.0f} mi2")
print(f"  soma IBGE: 62,05 + 155,95 = {62.05 + 155.95:.2f} km; parte do Cassino = {62.05 / 218 * 100:.1f} %")
print(f"  maré média 0,25 m = {0.25 / 0.0254:.1f} pol; micromaré < 0,50 m = {0.50 / 0.0254:.1f} pol")
print(f"  mar holocênico +3 m = {3 / 0.3048:.1f} pés")
print(f"  Long Beach (WA) 28 mi: o Cassino pelo IBGE é {mi(218) / 28:.1f}x; pelo RS, {mi(254) / 28:.1f}x")
print(f"  Padre Island 70 mi (NPS): o Cassino pelo IBGE é {mi(218) / 70:.1f}x")
print(f"  release 66-285: 15 mi = {15 / KM_MI:.0f} km ao sul de Rio Grande")
print(f"  eclipse de 12/11/1966: 60 anos em 12/11/2026")

print("\n== Títulos (caracteres)")
for t in [
    "Why the World's Longest Beach Has Three Official Lengths",
    "Why Nobody Agrees How Long the World's Longest Beach Is",
    "Why the World's Longest Beach Is Only 39 Miles Long",
    "Why This Beach Runs 135 Miles Without a Single Bay",
    "Why Nobody Can Agree on the World's Longest Beach",
]:
    print(f"  {len(t):>3}  {t}")

GANCHO_A = (
    "This is Praia do Cassino, in southern Brazil, sold as the longest beach in the world. "
    "Ask how long it is, and you get three official answers. "
    "So which one is right? "
    "The state says 158 miles. The city, about 139. Brazil's national statistics agency, 135. "
    "In a way, all three are. "
    "And the stretch that's actually called Cassino is only about 39 miles long. "
    "And the world record everyone repeats? "
    "In 2025, Guinness World Records told a Brazilian news site it doesn't monitor this title. "
    "The answer runs through a town line drawn across the sand, a ruler that changes the answer, "
    "and a coast that runs almost straight for nearly 400 miles. "
    "You're at Alpha Point, and this is where the story of a beach longer than its own name begins."
)
GANCHO_A_VOZ = GANCHO_A.replace("158 miles", "one hundred fifty-eight miles").replace(
    "about 139", "about one thirty-nine").replace("agency, 135", "agency, one thirty-five").replace(
    "about 39 miles", "about thirty-nine miles").replace("In 2025", "In twenty twenty-five").replace(
    "nearly 400 miles", "nearly four hundred miles")

GANCHO_B = (
    "This is Praia do Cassino, in southern Brazil. "
    "Since the 1990s, newspapers here have called it the Guinness record holder for the longest beach on Earth. "
    "In 2025, Guinness World Records told a Brazilian news site it doesn't monitor that title. "
    "So why can't anyone agree on the world's longest beach? "
    "It isn't for lack of rivals. "
    "A town in Washington State has a sign that says World's Longest Beach, over 28 miles of sand. "
    "Texas, Australia and Bangladesh have their own versions, and each one wins with a different word. "
    "And this beach can't even agree with itself: the state says 158 miles, the national statistics agency 135. "
    "The answer runs through a town line drawn across the sand, a ruler that changes the answer, "
    "and a coast that runs almost straight for nearly 400 miles. "
    "You're at Alpha Point, and this is where the story of a beach longer than its own name begins."
)
GANCHO_B_VOZ = GANCHO_B.replace("1990s", "nineteen nineties").replace("In 2025", "In twenty twenty-five").replace(
    "over 28 miles", "over twenty-eight miles").replace("158 miles", "one hundred fifty-eight miles").replace(
    "agency 135", "agency one thirty-five").replace("nearly 400 miles", "nearly four hundred miles")


def palavras(txt):
    return re.findall(r"[A-Za-z0-9'’\-]+", txt)


def relatorio(nome, txt, voz):
    p = palavras(txt)
    pv = palavras(voz)
    frases = [f for f in re.split(r"(?<=[.?!])\s+", txt) if f]
    print(f"\n== {nome}")
    print(f"  palavras (texto): {len(p)}; na cópia para a voz: {len(pv)}; frases: {len(frases)}; "
          f"média {len(p) / len(frases):.1f} palavras/frase")
    print(f"  duração a {WPM:.0f}/min: {len(pv) / WPM * 60:.1f} s (a 160: {len(pv) / 160 * 60:.1f} s)")
    # posição da primeira pergunta e das três primeiras frases, na cópia para a voz
    frases_v = [f for f in re.split(r"(?<=[.?!])\s+", voz) if f]
    acum = 0
    for i, f in enumerate(frases_v, 1):
        acum += len(palavras(f))
        marca = " <- pergunta" if f.strip().endswith("?") else ""
        if i <= 5 or marca:
            print(f"  frase {i} termina na palavra {acum} da voz: {acum / WPM * 60:.1f} s{marca}  | {f[:70]}")


relatorio("Gancho A", GANCHO_A, GANCHO_A_VOZ)
relatorio("Gancho B", GANCHO_B, GANCHO_B_VOZ)

print("\n== Camadas (palavras planejadas -> minutos a 179/min)")
ATOS = [
    ("gancho", 135, 7),
    ("1 · o recorde que ninguém mostra", 520, 7),
    ("2 · a régua", 600, 8),
    ("3 · a física", 620, 8),
    ("4 · o que a praia guardou", 420, 6),
    ("fecho", 120, 1),
]
tot = 0
nums = 0
inicio = 0.0
for nome, w, n in ATOS:
    dur = w / WPM * 60
    print(f"  {nome:<36} {w:>5} palavras  {n:>2} números  1 a cada {w / n:>5.0f}  "
          f"{inicio / 60:>5.2f}-{(inicio + dur) / 60:>5.2f} min")
    inicio += dur
    tot += w
    nums += n
print(f"  {'miolo':<36} {tot:>5} palavras  {nums:>2} números  1 a cada {tot / nums:>5.0f}  "
      f"= {tot / WPM:.1f} min de fala (+20 s da cauda = {tot / WPM + 1 / 3:.1f} min)")
OPC = 4 * 75
print(f"  com os 4 opcionais (+{OPC}): {tot + OPC} palavras = {(tot + OPC) / WPM:.1f} min")
for alvo in (13.0, 13.5, 14.0):
    print(f"  alvo {alvo} min a {WPM:.0f}/min = {alvo * WPM:.0f} palavras")
