"""Mede o deslocamento entre a graticula da folha de 1936 e o WGS84 de hoje, por pontos de controle independentes (OSM):
o Instituto Nacional (o predio 'INS.' da folha), o topo do Cerro Ancon (o anel de cota da folha) e o eixo da 4th of July
Avenue (hoje Avenida de los Martires: os centros dos trechos do OSM tem de cair sobre a avenida desenhada na folha).
Devolve a translacao (em pixel da folha) e os residuos, inclusive deixando-um-de-fora."""
import sys, json, numpy as np
sys.path.insert(0, r"C:/projetos/alpha-point/out/zona-do-canal/_pesquisa")
from geo_road1936 import Folha1936
F = Folha1936(); MPX = 0.878
PONTOS = {  # nome: (pixel lido na folha, (lon, lat) OSM, peso)
    "instituto_nacional": ((3510, 2316), (-79.543155, 8.957579), 1.0),
    "cerro_ancon_topo": ((2981, 1695), (-79.549201, 8.957648), 0.5),
}
AVENIDA_1936 = [(2552, 2405), (2719, 2398), (2933, 2355), (3171, 2302), (3410, 2248), (3624, 2202), (4014, 2195), (4057, 2176), (4057, 1533)]
# av4 (-79.550337, 8.949378) fica de fora: cai a sudoeste da ponta da avenida de 1936 (a avenida de hoje segue ate La Boca)
AV_OSM = [(-79.542851, 8.962366), (-79.542558, 8.963279), (-79.546431, 8.954216), (-79.548337, 8.951813)]
def dpol(p, pol):
    best = 1e9
    for a, b in zip(pol, pol[1:]):
        a, b = np.array(a, float), np.array(b, float); v = b - a; t = np.clip(((p - a) @ v)/(v @ v), 0, 1)
        best = min(best, np.linalg.norm(p - a - t*v))
    return best
def custo(T, usar):
    r = []
    for k, (m, o, w) in PONTOS.items():
        if k not in usar: continue
        q = np.array(F.ll2px(*o)) + T; r += [w*(q[0]-m[0]), w*(q[1]-m[1])]
    for i, o in enumerate(AV_OSM):
        if f"av{i}" not in usar: continue
        q = np.array(F.ll2px(*o)) + T; r.append(dpol(q, AVENIDA_1936))
    return np.array(r)
def resolver(usar):
    T = np.array([-90.0, -430.0])
    for _ in range(60):   # Gauss-Newton numerico
        r0 = custo(T, usar); J = np.zeros((len(r0), 2))
        for j in range(2):
            d = np.zeros(2); d[j] = 0.5; J[:, j] = (custo(T + d, usar) - r0)/0.5
        dT = np.linalg.lstsq(J, -r0, rcond=None)[0]; T = T + dT
        if np.linalg.norm(dT) < 0.01: break
    return T
todos = list(PONTOS) + [f"av{i}" for i in range(len(AV_OSM))]
T = resolver(todos)
print("translacao (px da folha):", T.round(1), "=", (np.linalg.norm(T)*MPX).round(0), "m")
for k in todos:
    r = custo(T, [k]); print(" residuo", k, (np.linalg.norm(r)*MPX).round(1), "m")
print("deixando um de fora (erro no ponto retirado, m):")
loo = []
for k in todos:
    Tk = resolver([u for u in todos if u != k]); e = np.linalg.norm(custo(Tk, [k]))*MPX; loo.append(e); print(" ", k, round(float(e), 1))
json.dump({"T_px": T.tolist(), "T_m": float(np.linalg.norm(T)*MPX), "loo_m": dict(zip(todos, [round(float(x), 1) for x in loo])),
           "pontos": {k: [list(v[0]), list(v[1])] for k, v in PONTOS.items()}, "avenida_1936_px": AVENIDA_1936, "avenida_osm": AV_OSM},
          open(r"C:/projetos/alpha-point/out/zona-do-canal/_tmp/pesquisa-geo/deslocamento-1936.json", "w"), indent=1)
