# Explora as vias do OSM marcadas como o dique Herbert Hoover: comprimento, cobertura angular em volta do lago.
# Uso: python -X utf8 -B dique_explorar.py
import json, math, os
AQUI = os.path.dirname(os.path.abspath(__file__))
j = json.load(open(os.path.join(AQUI, "dique.json"), encoding="utf-8"))

def hav(a, b):
    R = 6371.0088
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    d = math.sin((la2-la1)/2)**2 + math.cos(la1)*math.cos(la2)*math.sin((lo2-lo1)/2)**2
    return 2*R*math.asin(math.sqrt(d))

# centro aproximado do lago (bbox do OSM, relacao 1240556)
C = ((26.6812480+27.2071083)/2, (-81.1061500-80.6111160)/2)

def az(p):
    dy = p[0]-C[0]; dx = (p[1]-C[1])*math.cos(math.radians(C[0]))
    return (math.degrees(math.atan2(dx, dy)) + 360) % 360

grupos = {}
for e in j["elements"]:
    if e["type"] != "way":
        continue
    t = e.get("tags", {})
    nome = t.get("name") or "(sem nome)"
    pts = [(g["lat"], g["lon"]) for g in e.get("geometry", [])]
    L = sum(hav(pts[i], pts[i+1]) for i in range(len(pts)-1))
    # distancia media ao centro
    dmed = sum(hav(p, C) for p in pts)/max(1, len(pts))
    grupos.setdefault(nome, []).append((e["id"], L, dmed, t, pts))

for nome, ws in sorted(grupos.items(), key=lambda kv: -sum(w[1] for w in kv[1])):
    print(f"{nome:30s} vias={len(ws):3d} km={sum(w[1] for w in ws):7.1f} dist_media_centro_km={sum(w[2] for w in ws)/len(ws):5.1f}")

hhd = [w for w in grupos.get("Herbert Hoover Dike", [])]
print("\nHHD: vias", len(hhd), "km", round(sum(w[1] for w in hhd), 1), "milhas", round(sum(w[1] for w in hhd)/1.609344, 1))
# cobertura angular: graus (de 0,5 em 0,5) em que algum segmento HHD aparece
cob = set()
for w in hhd:
    pts = w[4]
    for i in range(len(pts)-1):
        a1, a2 = az(pts[i]), az(pts[i+1])
        # interpola
        n = max(1, int(hav(pts[i], pts[i+1])/0.05))
        for k in range(n+1):
            p = (pts[i][0]+(pts[i+1][0]-pts[i][0])*k/n, pts[i][1]+(pts[i+1][1]-pts[i][1])*k/n)
            cob.add(int(az(p)*2))
print("cobertura angular HHD (meio grau):", len(cob), "de 720 =", round(len(cob)/720*100, 1), "%")
falta = sorted(set(range(720)) - cob)
# agrupa lacunas
lac = []
for x in falta:
    if lac and x == lac[-1][1]+1:
        lac[-1][1] = x
    else:
        lac.append([x, x])
for a, b in lac:
    print(f"  lacuna de {a/2:.1f} a {b/2+0.5:.1f} graus ({(b-a+1)/2:.1f} graus)")
