"""Mede a linha de costa do OpenStreetMap (natural=coastline) entre os mesmos dois pontos do IBGE (a barra do Rio Grande e a
foz do Arroio Chuí), com réguas de tamanhos diferentes, e o afastamento da linha reta.

Uso: python -I -X utf8 -B costa_osm.py <osm-coastline.json>

A entrada é a resposta do Overpass (out skel qt) a:
  way["natural"="coastline"](-33.80,-53.50,-32.12,-52.00);(._;>;);out skel qt;
Não baixa nada. As distâncias e o compasso são os do costa_ibge.py (carregado pelo caminho absoluto, não pelo sys.path).
Dados © OpenStreetMap contributors, ODbL.
"""
import importlib.util
import json
import math
import os
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("costa_ibge", os.path.join(AQUI, "costa_ibge.py"))
ci = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ci)

BARRA = (-52.09720, -32.16167)  # a ponta do IBGE no Rio Grande (a raiz do Molhe Oeste)
CHUI = (-53.36949, -33.74354)  # o vértice do IBGE na foz do Arroio Chuí


def main():
    if len(sys.argv) < 2:
        print("uso: costa_osm.py <osm-coastline.json>")
        sys.exit(2)
    with open(sys.argv[1], encoding="utf-8") as f:
        d = json.load(f)
    nos = {e["id"]: (e["lon"], e["lat"]) for e in d["elements"] if e["type"] == "node"}
    vias = [e["nodes"] for e in d["elements"] if e["type"] == "way"]
    print(f"OSM: {len(vias)} vias natural=coastline, {len(nos)} nós")
    # costura: a costa é dirigida (terra à esquerda); liga o fim de uma via ao começo de outra
    por_inicio = {v[0]: i for i, v in enumerate(vias)}
    usadas, cadeias = set(), []
    for i, v in enumerate(vias):
        if i in usadas:
            continue
        # anda para trás até achar o começo da cadeia
        ini = i
        por_fim = {w[-1]: j for j, w in enumerate(vias)}
        visto = {ini}
        while vias[ini][0] in por_fim and por_fim[vias[ini][0]] not in visto:
            ini = por_fim[vias[ini][0]]
            visto.add(ini)
        cad, j = list(vias[ini]), ini
        usadas.add(j)
        while cad[-1] in por_inicio and por_inicio[cad[-1]] not in usadas:
            j = por_inicio[cad[-1]]
            usadas.add(j)
            cad.extend(vias[j][1:])
        cadeias.append(cad)
    cadeias.sort(key=len, reverse=True)
    print(f"cadeias costuradas: {len(cadeias)}; as maiores: {[len(c) for c in cadeias[:5]]} nós")

    def mais_perto(p):
        melhor = None
        for ic, c in enumerate(cadeias):
            for k, nid in enumerate(c):
                dd = ci.dist_km(p, nos[nid])
                if melhor is None or dd < melhor[0]:
                    melhor = (dd, ic, k)
        return melhor

    b, s = mais_perto(BARRA), mais_perto(CHUI)
    print(f"ponto do OSM mais perto da barra (IBGE): {b[0] * 1000:.0f} m, cadeia {b[1]}, nó {b[2]}")
    print(f"ponto do OSM mais perto da foz do Chuí (IBGE): {s[0] * 1000:.0f} m, cadeia {s[1]}, nó {s[2]}")
    if b[1] != s[1]:
        print("as duas pontas caem em cadeias diferentes: a costa do OSM tem um furo entre elas. Parei.")
        sys.exit(1)
    c = cadeias[b[1]]
    k0, k1 = sorted((b[2], s[2]))
    trecho = [nos[n] for n in c[k0:k1 + 1]]
    if ci.dist_km(trecho[0], BARRA) > ci.dist_km(trecho[0], CHUI):
        trecho = trecho[::-1]  # da barra para o Chuí, como no IBGE
    L = ci.comprimento(trecho)
    corda = ci.dist_km(trecho[0], trecho[-1])
    seg = sorted(ci.dist_km(trecho[i], trecho[i + 1]) for i in range(len(trecho) - 1))
    print(f"\ntrecho do OSM: {len(trecho)} nós, de ({trecho[0][0]:.5f}, {trecho[0][1]:.5f}) a ({trecho[-1][0]:.5f}, {trecho[-1][1]:.5f})")
    print(f"  segmentos: mediana {seg[len(seg) // 2] * 1000:.0f} m; o maior {seg[-1] * 1000:.0f} m")
    print(f"  comprimento pelo traçado do OSM: {L:.2f} km ({L * 0.621371:.1f} mi); corda {corda:.2f} km "
          f"({corda * 0.621371:.1f} mi); excesso {100 * (L / corda - 1):.2f} %")
    print("\nO compasso sobre o traçado do OSM (régua -> comprimento):")
    for r in (0.01, 0.02, 0.05, 0.1, 0.5, 1, 5, 10, 25, 50):
        comp, n = ci.compasso(trecho, r)
        print(f"  régua de {r * 1000:>6.0f} m: {comp:7.2f} km ({comp * 0.621371:6.1f} mi; {n} passos)", flush=True)
    # sinuosidade em janelas de ~10 km
    acum = [0.0]
    for k in range(1, len(trecho)):
        acum.append(acum[-1] + ci.dist_km(trecho[k - 1], trecho[k]))
    for jan in (1, 10):
        razoes, k0 = [], 0
        while k0 < len(trecho) - 1:
            k1 = k0
            while k1 < len(trecho) - 1 and acum[k1] - acum[k0] < jan:
                k1 += 1
            if acum[k1] - acum[k0] < jan * 0.9:
                break
            razoes.append(((acum[k1] - acum[k0]) / ci.dist_km(trecho[k0], trecho[k1]), acum[k0]))
            k0 = k1
        rs = sorted(x[0] for x in razoes)
        pior = max(razoes)
        print(f"  janelas de ~{jan} km: {len(razoes)}; traçado/corda mediana {rs[len(rs) // 2]:.4f}, "
              f"a maior {pior[0]:.4f} (a partir do km {pior[1]:.1f})")


if __name__ == "__main__":
    main()
