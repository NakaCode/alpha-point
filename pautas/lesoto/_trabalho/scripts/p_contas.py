"""As contas da pauta v1 do vídeo 7 (lesoto), 09/11/2026.

Uso: python -I -X utf8 -B p_contas.py [<AllSales.pdf>]

- as conversões (m, km, Mm³, m³/s) para o formato de tela do canal (pés, milhas, galões americanos);
- as razões que a pauta usa (todas "conta nossa", nunca da fonte);
- o tamanho dos títulos;
- os dois ganchos: palavras, frases, segundos a 179 palavras/min, no texto e na cópia para a voz (números por extenso);
- o orçamento de palavras por ato e os minutos;
- com o PDF da LHDA (AllSales), a parte de cada componente do royalty por ano (fixo, O&M, eletricidade).
Só lê o arquivo local.
"""
import re
import sys
from collections import defaultdict

PPM = 179  # palavras por minuto, a voz de hoje (memória ritmo-duracao, 03/11/2026)
M_FT = 3.28084
KM_MI = 0.621371
M3_GAL = 264.172  # galão americano


def ft(m):
    return m * M_FT


def mi(km):
    return km * KM_MI


def palavras(t):
    return len(re.findall(r"[A-Za-z0-9][A-Za-z0-9'’,.\-–]*", t))


def frases(t):
    return [f for f in re.split(r"(?<=[.?!])\s+", t.strip()) if f]


def seg(n):
    return n / PPM * 60


print("=== conversões (conta nossa) ===")
for nome, m in [("Katse, muro (LHDA)", 185), ("Katse, nível cheio (LHDA)", 2053), ("Mohale, muro (LHDA)", 145),
                ("Mohale, nível cheio (LHDA)", 2075), ("Mohale acima de Katse", 2075 - 2053),
                ("ponto mais baixo, 1.381 m (Guinness)", 1381), ("ponto mais baixo, 1.400 m (CIA, cópia)", 1400),
                ("Ruanda, 950 m (CIA, cópia)", 950), ("limiar 1.000 m", 1000), ("Thabana Ntlenyana 3.482 m", 3482),
                ("Polihali 163,5 m (LHDA)", 163.5), ("Polihali 165 m (TCTA)", 165), ("'Muela, açude 55 m", 55)]:
    print(f"{nome}: {m} m = {ft(m):,.0f} ft ({ft(m)/5280:.2f} mi)")
for nome, km in [("Katse–'Muela", 45), ("Entrega Sul", 15), ("Entrega Norte", 22), ("os três, Katse ao Ash", 45 + 15 + 22),
                 ("Mohale–Katse", 32), ("Polihali–Katse", 38), ("Fase 1 inteira (The Conversation)", 120),
                 ("o Vaal a ~70 km de Joanesburgo (Tempelhoff)", 70)]:
    print(f"{nome}: {km} km = {mi(km):.1f} mi")
print(f"Lesoto, área 30.355 km² = {30355 * KM_MI**2:,.0f} mi²")
print(f"chuva média do Lesoto 755 mm = {755/25.4:.1f} in")
print(f"Orange 2.200 km (SAHO) = {mi(2200):,.0f} mi; 2.300 km (ORASECOM) = {mi(2300):,.0f} mi")
seg_ano = 365.25 * 24 * 3600
for nome, mm3 in [("Fase 1", 780), ("Fase 2, a mais", 490), ("as duas", 1270), ("entregue em 2025", 624.047)]:
    m3s = mm3 * 1e6 / seg_ano
    print(f"{nome}: {mm3} Mm³/ano = {m3s:.1f} m³/s = {m3s*M3_GAL:,.0f} gal/s = {mm3*1e6*M3_GAL/1e9:,.0f} bi de galões/ano")
print(f"o alvo do tratado, 70 m³/s = {70*seg_ano/1e6:,.0f} Mm³/ano; a Fase 1 é {780/(70*seg_ano/1e6)*100:.0f} % disso")

print("\n=== razões (conta nossa) ===")
print(f"41,5 % da água em 3,4 % da área: {41.5/3.4:.1f} vezes a média da bacia por km²")
lesoto_natural = 0.415 * 11900
print(f"escoamento natural do Lesoto (41,5 % de 11.900 Mm³): {lesoto_natural:,.0f} Mm³/ano; a Fase 1 leva {780/lesoto_natural*100:.1f} % disso")
print(f"Katse no total da LDF: 17 de 29 = {17/29*100:.0f} % (duas fontes: M&G 2000 e a ata de 02/11/1998)")
print(f"royalty: dez/2023 M114,95 mi -> jan/2024 M298,30 mi = x{298.30/114.95:.2f}")
print(f"receita: 2025/26 M4,78 bi de M27,15 bi = {4.78/27.15*100:.1f} %")
print(f"ponto mais baixo do Lesoto sobre o de Ruanda: {1381-950} a {1400-950} m = {ft(1381-950):,.0f} a {ft(1400-950):,.0f} ft")

print("\n=== títulos (caracteres) ===")
TITULOS = [
    "Why South Africa Pays the Country Inside It for Gravity",
    "Why South Africa Pays a Mountain Kingdom for Gravity",
    "The Dam South Africa Sent Troops To in 1998",
    "Why South Africa Needs the Country Inside It",
    "Why South Africa's Longest River Starts in Another Country",
]
for t in TITULOS:
    print(f"{len(t):3d}  {t}")

GANCHO_A = (
    "This is Katse Dam, in Lesotho, a small mountain kingdom that South Africa surrounds on every side. "
    "Its water drops through about 50 miles of tunnel into South Africa, and no pump pushes it. "
    "Yet South Africa pays for it every month. "
    "And under a treaty from 1986, most of that money is priced on electricity for pumping that never happens. "
    "When it's full, this lake sits about 6,700 feet above the sea. "
    "From up here, gravity does the work. "
    "The cheapest scheme South Africa could have built instead would have needed pumps, and the power to run them. "
    "So South Africa shares what it saves with Lesotho. In effect, it pays for gravity. "
    "By Lesotho's own budget, those payments were expected to bring in about 18 percent of the government's revenue in 2025 to 2026. "
    "So why would a country so much bigger pay the small one inside it for water that runs downhill on its own? "
    "And why does so much water start up here at all? "
    "You're at Alpha Point, and this is where the story of the water that falls into South Africa begins."
)
GANCHO_A_VOZ = (GANCHO_A.replace("50 miles", "fifty miles").replace("1986", "nineteen eighty-six")
                .replace("6,700 feet", "six thousand seven hundred feet").replace("18 percent", "eighteen percent")
                .replace("2025 to 2026", "twenty twenty-five to twenty twenty-six"))
GANCHO_B = (
    "This is Katse Dam, in Lesotho, a small mountain kingdom that South Africa surrounds on every side. "
    "In January 1998, Nelson Mandela and Lesotho's king opened it together. "
    "Eight months later, South African paratroopers came for the small army post at the dam. "
    "It was five in the morning on September 22. "
    "Most of the force crossed the border and headed for the capital, Maseru. "
    "At the same hour, a platoon in helicopters, with gunships, went for the post up here. "
    "South Africa said it had come at the request of Lesotho's prime minister, to restore stability after a disputed election. "
    "Its statement that morning listed power and water supply facilities among the places to secure. "
    "In its 2025 report, Rand Water, which supplies more than 18 million people in and around Johannesburg, lists this dam among the four key dams that supply it. "
    "Another of the four is in Lesotho too. "
    "So why would South Africa put a key part of its water inside another country? "
    "And why would a dam this far up the mountains matter this much? "
    "You're at Alpha Point, and this is where the story of Katse Dam begins."
)
GANCHO_B_VOZ = (GANCHO_B.replace("1998", "nineteen ninety-eight").replace("September 22", "September twenty-second")
                .replace("2025", "twenty twenty-five").replace("18 million", "eighteen million"))

print("\n=== os ganchos (179 palavras/min) ===")
for nome, txt, voz in [("A", GANCHO_A, GANCHO_A_VOZ), ("B", GANCHO_B, GANCHO_B_VOZ)]:
    fs = frases(voz)
    n = palavras(voz)
    print(f"gancho {nome}: {palavras(txt)} palavras no texto, {n} na voz, {len(fs)} frases, média {n/len(fs):.1f}; {seg(n):.1f} s")
    acum = 0
    for i, f in enumerate(fs, 1):
        acum += palavras(f)
        print(f"  frase {i:2d} fecha aos {seg(acum):5.1f} s: {f[:70]}")

print("\n=== as camadas (orçamento de palavras) ===")
ATOS = [("gancho (A)", palavras(GANCHO_A_VOZ)), ("1 · o teto", 400), ("2 · como o teto virou um país", 420),
        ("3 · o acordo que cobra a gravidade", 580), ("4 · setembro de 1998", 480), ("5 · o dinheiro e a torneira", 430),
        ("fecho", 140)]
acum = 0
for nome, n in ATOS:
    ini = seg(acum)
    acum += n
    fim = seg(acum)
    print(f"{nome:38s} {n:5d}  {int(ini//60)}:{int(ini%60):02d}–{int(fim//60)}:{int(fim%60):02d}")
print(f"total: {acum} palavras = {acum/PPM:.1f} min de fala (+ 20 s da cauda)")
print(f"alvo 14 a 15 min: {14*PPM} a {15*PPM} palavras; 2.500 a 2.700: {2500/PPM:.1f} a {2700/PPM:.1f} min")

if len(sys.argv) > 1:
    import fitz  # PyMuPDF

    MES = {"Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6, "Jul": 7, "Aug": 8, "Sept": 9, "Sep": 9,
           "Oct": 10, "Nov": 11, "Dec": 12}
    rx = re.compile(r"^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)-(\d\d)$")

    def num(s):
        return float(re.sub(r"[^0-9.\-]", "", s) or 0)

    toks = []
    for p in fitz.open(sys.argv[1]):
        toks += [t.strip() for t in p.get_text().splitlines() if t.strip()]
    por_ano = defaultdict(lambda: [0.0, 0.0, 0.0, 0.0, 0.0])  # entrega, fixo, om, eletricidade, total
    i = 0
    while i < len(toks):
        m = rx.match(toks[i])
        if m and i + 11 < len(toks) and re.match(r"^\d+$", toks[i + 1]):
            ano = 2000 + int(m.group(2)) if int(m.group(2)) < 90 else 1900 + int(m.group(2))
            v = toks[i + 1: i + 12]
            a = por_ano[ano]
            a[0] += num(v[1]); a[1] += num(v[7]); a[2] += num(v[8]); a[3] += num(v[9]); a[4] += num(v[10])
            i += 12
            continue
        i += 1
    print("\n=== o royalty por componente (LHDA, AllSales; conta nossa) ===")
    for ano in (2022, 2023, 2024, 2025, 2026):
        e, fx, om, el, tot = por_ano[ano]
        if tot:
            print(f"{ano}: entrega {e:7.1f} Mm³; total M{tot/1e9:.3f} bi; fixo {fx/tot*100:4.1f} %, O&M {om/tot*100:4.1f} %, "
                  f"eletricidade {el/tot*100:4.1f} %; M{tot/1e6/e:.2f} por m³ entregue" if e else f"{ano}: sem entrega")
