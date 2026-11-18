# cetico_contas.py (cético da pauta v1, 18/11/2026): refaz, sem rede, as contas da medida nossa a partir dos arquivos que os leitores já baixaram.
# Uso (da raiz do canal): python -I -X utf8 -B pautas/arizona-strip/_trabalho/scripts/cetico_contas.py
#
# 1. A I-15 do Arizona na base do HPMS: quanto dela fica ao norte de 37,0° N (a "sobra" de 1,72 mi que o leitor B tirou à mão).
# 2. A rota Colorado City -> Kingman, refeita com essa correção, por estado.
# 3. Ao longo da AZ 389: até que marco a rota por Utah e Nevada é mais curta que a rota só pelo Arizona (o denominador da medida).
# 4. Quem mora onde: os CCDs e os lugares do Censo 2020 (os JSON do cético da escolha), e a parte da gente da Strip cuja rota mais curta
#    até a sede do condado sai do Arizona.
# 5. O rio sem estrada, das posições que o b_rio_estradas.py gravou.
import json
import math
import os

RAIZ = os.getcwd()
B = os.path.join(RAIZ, "midia", "arizona-strip", "fontes", "b")
C = os.path.join(RAIZ, "out", "_pautas", "video-8", "_trabalho", "cetico-arizona-strip")


def hav_mi(a, b):
    R = 3958.7613
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def i15_az():
    d = json.load(open(os.path.join(B, "hpms-AZ-2-15.json"), encoding="utf-8"))
    norte = total = 0.0
    lat_max, mp_max = -1, None
    for f in d["features"]:
        a = f["attributes"]
        for p in f["geometry"]["paths"]:
            for i in range(len(p) - 1):
                s = hav_mi(p[i], p[i + 1])
                total += s
                if p[i][1] > 37.0 and p[i + 1][1] > 37.0:
                    norte += s
                elif (p[i][1] > 37.0) != (p[i + 1][1] > 37.0):
                    fr = abs(max(p[i][1], p[i + 1][1]) - 37.0) / abs(p[i][1] - p[i + 1][1])
                    norte += s * fr
            for q in p:
                if q[1] > lat_max:
                    lat_max = q[1]
                    mp_max = (a["begin_point"], a["end_point"])
    print("== 1 · A I-15 do Arizona no HPMS 2025")
    print(f"  geometria total {total:.2f} mi; ao norte de 37,000° N {norte:.2f} mi; o vértice mais ao norte em {lat_max:.4f}° N"
          f" (seção com marcos {mp_max})")
    return norte


def rota(sobra):
    # as pernas pela geometria das seções (hpms-rota-saida.txt, do b_hpms_rota.py)
    pernas = [("AZ 389", "Arizona", 1.401), ("UT 59", "Utah", 22.247), ("UT 9", "Utah", 9.613), ("I-15 UT", "Utah", 15.953),
              ("I-15 AZ", "Arizona", 31.111 - sobra), ("I-15 NV", "Nevada", 80.820), ("I-11 NV", "Nevada", 37.043),
              ("US 93 AZ", "Arizona", 69.782)]
    est = {}
    for _, e, mi in pernas:
        est[e] = est.get(e, 0) + mi
    tot = sum(est.values())
    print("\n== 2 · Colorado City -> Kingman, com a I-15 do Arizona corrigida")
    print(f"  total {tot:.1f} mi (+ 0,73 e + 0,92 dos centros = {tot + 1.65:.1f}); " +
          "; ".join(f"{e} {v:.1f}" for e, v in est.items()) +
          f"; Utah + Nevada {est['Utah'] + est['Nevada']:.1f} ({(est['Utah'] + est['Nevada']) / tot * 100:.0f} %)")
    return tot


def ponto_de_virada(tot):
    # rota por Utah a partir do marco m da AZ 389: m (até a linha de Utah, MP 0) + o resto (tot - 1,401)
    # rota só pelo Arizona: (32,583 - m) até a US 89A em Fredonia + 30 (NPS) + 164 (NPS) + 151,4 (HPMS, I-40)
    resto = tot - 1.401
    so_az_de_fredonia = 30 + 164 + 151.4
    m = (32.583 + so_az_de_fredonia - resto) / 2
    print("\n== 3 · Ao longo da AZ 389 (do MP 0, na linha de Utah, ao MP 32,58, na US 89A em Fredonia)")
    for mp in (0, 1.4, 10, 20, 30, 32.583):
        print(f"  MP {mp:5.1f}: por Utah e Nevada {mp + resto:6.1f} mi | só pelo Arizona {32.583 - mp + so_az_de_fredonia:6.1f} mi")
    print(f"  as duas empatam no MP {m:.1f}, além do fim da AZ 389 (32,6): em toda a rodovia, a rota por Utah e Nevada é a mais curta")


def gente():
    ccd = json.load(open(os.path.join(C, "ccd2020.json"), encoding="utf-8"))
    pops = {f["attributes"]["NAME"]: f["attributes"]["POP100"] for f in ccd["features"]
            if f["attributes"]["NAME"] in ("Kaibab Plateau CCD", "North Mohave CCD")}  # os dois CCDs da Strip (o arquivo traz os dos dois condados)
    print("\n== 4 · A gente (Censo 2020)")
    print("  CCDs:", pops)
    lug = {}
    for arq in ("places26.json", "places28.json"):
        d = json.load(open(os.path.join(C, arq), encoding="utf-8"))
        for f in d["features"]:
            a = f["attributes"]
            lug[a["NAME"]] = (a["POP100"], float(a["CENTLAT"]), float(a["CENTLON"]))
    grupos = {
        "por Utah e Nevada (AZ 389)": ["Colorado City town", "Centennial Park CDP", "Cane Beds CDP", "Moccasin CDP", "Kaibab CDP"],
        "só por Nevada (I-15)": ["Beaver Dam CDP", "Littlefield CDP", "Scenic CDP"],
        "sem sair do Arizona (Coconino)": ["Fredonia town", "Greenehaven CDP"],
    }
    total = sum(pops.values())
    for g, nomes in grupos.items():
        achados = {n: lug[n] for n in nomes if n in lug}
        faltam = [n for n in nomes if n not in lug]
        s = sum(v[0] for v in achados.values())
        print(f"  {g}: {s:,.0f} ({s / total * 100:.1f} % de {total:,.0f})", {n: int(v[0]) for n, v in achados.items()},
              ("faltam " + str(faltam)) if faltam else "")
    moh = [v for k, v in pops.items() if k == "North Mohave CCD"]
    if moh:
        print(f"  o CCD de Mohave inteiro: {moh[0]:,.0f} = {moh[0] / total * 100:.1f} % da Strip")


def rio():
    nav, hoover, glen_total = 32.63, 589.25, 589.4
    print("\n== 5 · O rio sem estrada (rio-estradas-saida.txt)")
    print(f"  da Navajo Bridge (km {nav}) à travessia da Hoover Dam (km {hoover}): {hoover - nav:.2f} km = {(hoover - nav) / 1.609344:.1f} mi;"
          f" a barragem Glen Canyon à Hoover Dam: {glen_total / 1.609344:.1f} mi")


def main():
    sobra = i15_az()
    tot = rota(sobra)
    ponto_de_virada(tot)
    gente()
    rio()


if __name__ == "__main__":
    main()
