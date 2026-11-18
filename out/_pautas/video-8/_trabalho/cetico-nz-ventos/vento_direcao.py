# O funil nos dados: de onde sopra o vento em Wellington (aeroporto), contra Chicago e Auckland, pelo ISD-Lite ja baixado
# (midia/_pautas/video-8/cetico-nz-ventos/isd/, 2015-2024). Conta as horas com vento (>= 1 m/s) por setor de 30 graus,
# e a fatia das horas fortes (>= 31 km/h, o "strong" da NIWA) que vem dos dois setores dominantes.
# Uso: python -X utf8 -B vento_direcao.py
import glob, gzip, os
AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", ".."))
CRU = os.path.join(RAIZ, "midia", "_pautas", "video-8", "cetico-nz-ventos", "isd")
EST = {"934360": "Wellington", "931190": "Auckland", "725300": "Chicago O'Hare", "718010": "St. John's"}
SET = ["N", "NNE", "ENE", "E", "ESE", "SSE", "S", "SSW", "WSW", "W", "WNW", "NNW"]  # centros 0,30,...,330
for usaf, nome in EST.items():
    vistos = set()
    cont = [0] * 12
    fortes = [0] * 12
    n = 0
    for arq in sorted(glob.glob(os.path.join(CRU, f"{usaf}-*-20[12][0-9].gz"))):
        ano = int(arq[-7:-3])
        if not 2015 <= ano <= 2024:
            continue
        with gzip.open(arq, "rt") as f:
            for ln in f:
                if len(ln) < 43:
                    continue
                chave = ln[0:13]
                if chave in vistos:
                    continue
                vistos.add(chave)
                d, v = int(ln[31:37]), int(ln[37:43])
                if d in (-9999, 0) or v == -9999 or v < 10:
                    continue
                s = int(((d % 360) + 15) // 30) % 12
                cont[s] += 1
                n += 1
                if v / 10 * 3.6 >= 31:
                    fortes[s] += 1
    if n == 0:
        print(nome, "sem dados"); continue
    ordem = sorted(range(12), key=lambda i: -cont[i])
    top2 = ordem[:2]
    nf = sum(fortes)
    print(f"{nome}: {n} horas com vento; setores mais comuns: " + ", ".join(f"{SET[i]} {cont[i]/n*100:.0f}%" for i in ordem[:4]))
    print(f"   os 2 setores de 30 graus mais comuns ({SET[top2[0]]} e {SET[top2[1]]}) = {sum(cont[i] for i in top2)/n*100:.0f}% das horas com vento"
          f" e {sum(fortes[i] for i in top2)/max(nf,1)*100:.0f}% das {nf} horas fortes (>= 31 km/h)")
