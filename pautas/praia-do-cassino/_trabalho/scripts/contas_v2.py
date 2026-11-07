"""As contas da pauta v2 do vídeo 6 (a Praia do Cassino): conversões novas, títulos, ganchos e palavras por ato.

Uso: python -I -X utf8 -B contas_v2.py   (sem argumento; não lê nem baixa nada)

Ritmo da voz: ~179 palavras/min (o Big Sur: 2.300 palavras em 767,6 s). Na cópia para a voz, os números vão por extenso; a conta
da voz troca cada número pelo extenso antes de contar.
"""
import re

KM_MI = 0.621371
WPM = 179.0

print("== As medidas (km -> mi)")
for rot, km in [
    ("IBGE, o limite com o mar (barra -> foz do Chuí)", 218.00),
    ("OSM, natural=coastline, o mesmo trecho", 219.73),
    ("OSM, régua de 10 m", 219.41),
    ("OSM, régua de 50 km", 215.75),
    ("corda (linha reta entre as pontas)", 211.97),
    ("maior afastamento da corda (IBGE)", 18.21),
    ("Rio Grande (IBGE)", 62.05),
    ("Santa Vitória do Palmar (IBGE)", 155.95),
    ("Trilha Cassino x Barra do Chuí", 223.0),
    ("turismo do RS", 254.0),
    ("costa do RS (Dillenburg et al. 2003)", 625.0),
    ("plataforma, 100 a 200 km (Dillenburg) / 150 a 200 (Toldo)", 200.0),
    ("barreira do Cassino, 8 a 14 km (Clerot)", 14.0),
]:
    print(f"  {rot}: {km} km = {km * KM_MI:.1f} mi")
print(f"  traçado - corda: IBGE {(218.00 - 211.97) * KM_MI:.1f} mi; OSM {(219.73 - 211.97) * KM_MI:.1f} mi")
print(f"  excesso sobre a corda: IBGE {100 * (218.00 / 211.97 - 1):.2f} %; OSM {100 * (219.73 / 211.97 - 1):.2f} %")
print(f"  OSM, régua de 10 m contra a de 50 km: {100 * (219.41 / 215.75 - 1):.2f} %")
print(f"  o turismo do RS contra o OSM: +{100 * (254 / 219.73 - 1):.1f} %; contra o IBGE: +{100 * (254 / 218 - 1):.1f} %; "
      f"a diferença: {(254 - 218) * KM_MI:.1f} mi (IBGE), {(254 - 219.73) * KM_MI:.1f} mi (OSM)")
print(f"  a trilha contra o OSM: +{100 * (223 / 219.73 - 1):.1f} %")
print(f"  Long Beach (WA), 28 mi: o Cassino pelo IBGE é {218 * KM_MI / 28:.1f}x")
print(f"  maré: 0,25 m = {0.25 / 0.0254:.0f} pol (Toldo); 0,5 m = {0.5 / 0.0254:.0f} pol (Dillenburg; Clerot: < 50 cm)")
print(f"  mar de 5 ka: 2 m = {2 / 0.3048:.1f} pés (Dillenburg); 3 m = {3 / 0.3048:.1f} pés (Clerot)")
print(f"  as réguas da fala: 50 km = {50 * KM_MI:.0f} mi; 10 m = {10 / 0.3048:.0f} pés")
print(f"  Parque Nacional do Albardão, ~1.004.480 ha = {10044.8 * KM_MI ** 2:,.0f} mi2; APA, ~55.983 ha = {559.83 * KM_MI ** 2:,.0f} mi2")

print("\n== Títulos (caracteres)")
TITULOS = [
    "Why the World's Longest Beach Is Almost a Straight Line",
    "Why the World's Longest Beach Is So Straight",
    "Why the World's Longest Beach Is So Easy to Measure",
    "How Long Is the World's Longest Beach, Really?",
    "Why the Coastline Paradox Barely Works on the World's Longest Beach",
]
for t in TITULOS:
    print(f"  {len(t):>3}  {t}")

GANCHO_A = (
    "This is Praia do Cassino, in Brazil, sold as the world's longest beach. "
    "Stone walls mark its two ends, about 132 miles apart in a straight line. "
    "The beach itself is less than five miles longer. "
    "How does a coast end up that straight? "
    "It should also make it easy to measure. "
    "Yet the state's own tourism website says 158 miles, right next to the words \"Guinness Book.\" "
    "And in 2025, Guinness World Records told a Brazilian news site it doesn't monitor that title. "
    "So why won't the famous number fit on this sand? "
    "You're at Alpha Point, and this is where the story of the beach between two walls begins."
)
VOZ_A = {"132": "one hundred thirty-two", "158": "one hundred fifty-eight", "2025": "twenty twenty-five"}

GANCHO_B = (
    "Praia do Cassino, in southern Brazil, is sold as the world's longest beach, and it barely bends. "
    "Why would a coast this long stay this straight? "
    "Coastlines usually do the opposite: the closer you measure them, the longer they get. "
    "Measure this one with a ruler the size of a town, then one the size of a boat, and it hardly changes: about 135 miles. "
    "That makes one number hard to place. "
    "The state's own tourism website says 158, right next to the words \"Guinness Book.\" "
    "So where would the sea hide the other 23 miles? "
    "You're at Alpha Point, and this is where the story of the beach between two walls begins."
)
VOZ_B = {"135": "one hundred thirty-five", "158": "one hundred fifty-eight", "23": "twenty-three"}


def palavras(txt):
    return re.findall(r"[A-Za-z0-9'’\-]+", txt)


def voz(txt, trocas):
    for k, v in trocas.items():
        txt = re.sub(rf"\b{k}\b", v, txt)
    return txt


def relatorio(nome, txt, trocas):
    v = voz(txt, trocas)
    p, pv = palavras(txt), palavras(v)
    frases_v = [f for f in re.split(r"(?<=[.?!])\s+|(?<=[.?!]\")\s+", v) if f]
    nums = re.findall(r"\b\d[\d,]*\b", txt)
    print(f"\n== {nome}")
    print(f"  palavras: {len(p)} no texto, {len(pv)} na cópia para a voz; frases: {len(frases_v)}; "
          f"média {len(p) / len(frases_v):.1f} por frase; números em algarismo: {len(nums)} ({', '.join(nums)})")
    print(f"  duração a {WPM:.0f}/min: {len(pv) / WPM * 60:.1f} s")
    acum = 0
    for i, f in enumerate(frases_v, 1):
        acum += len(palavras(f))
        q = "  <- pergunta" if f.rstrip('"').endswith("?") else ""
        print(f"  frase {i} acaba na palavra {acum:>3}: {acum / WPM * 60:5.1f} s{q}  | {f[:72]}")


relatorio("Gancho A", GANCHO_A, VOZ_A)
relatorio("Gancho B", GANCHO_B, VOZ_B)

print("\n== Camadas (palavras planejadas -> minutos a 179/min)")
ATOS = [
    ("gancho (A, na voz)", 118, 4),
    ("1 · a palavra de cada praia", 440, 6),
    ("2 · duas paredes e uma régua", 660, 9),
    ("3 · por que o mar desenha reto", 660, 8),
    ("4 · o que a areia guarda", 400, 6),
    ("fecho", 120, 0),
]
tot = nums = 0
ini = 0.0
for nome, w, n in ATOS:
    dur = w / WPM * 60
    um = f"1 a cada {w / n:>4.0f}" if n else "sem número"
    print(f"  {nome:<34} {w:>5} palavras  {n:>2} números  {um:<14} {ini / 60:5.2f}-{(ini + dur) / 60:5.2f} min")
    ini += dur
    tot += w
    nums += n
print(f"  {'miolo':<34} {tot:>5} palavras  {nums:>2} números  1 a cada {tot / nums:>4.0f}   "
      f"= {tot / WPM:.1f} min de fala (+20 s da cauda = {tot / WPM + 1 / 3:.1f} min)")
OPC = 60 + 70 + 60
print(f"  com os 3 opcionais (+{OPC}): {tot + OPC} palavras = {(tot + OPC) / WPM:.1f} min")
for alvo in (13.0, 14.0):
    print(f"  alvo {alvo} min a {WPM:.0f}/min = {alvo * WPM:.0f} palavras")
