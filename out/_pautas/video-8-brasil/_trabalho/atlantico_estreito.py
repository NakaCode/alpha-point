# A medida nossa de Natal: onde o Atlantico e mais estreito entre a America do Sul e a Africa (continente a continente),
# e as distancias de Natal a Dakar, a Freetown e a Miami. Geometria: Natural Earth 1:10m admin-0 (dominio publico), copia do motor.
# Uso: python -X utf8 -B atlantico_estreito.py
import json, sys, os
import numpy as np
from shapely.geometry import shape
sys.path.insert(0, os.path.dirname(__file__))
from geo_util import vincenty_km, haversine_km

d = json.load(open("C:/projetos/regie-v1/acervo/geojson/ne10m-admin0-countries.json", encoding="utf-8"))
def maior(admin):
    g = shape([f for f in d["features"] if f["properties"]["ADMIN"] == admin][0]["geometry"])
    return max(getattr(g, "geoms", [g]), key=lambda p: p.area)

br = maior("Brazil")
xs, ys = np.array(br.exterior.coords).T
m = (xs > -40) & (ys > -12) & (ys < 0)          # o "cotovelo" do Nordeste
bx, by = xs[m], ys[m]
afr = []
for p in ["Senegal", "Gambia", "Guinea-Bissau", "Guinea", "Sierra Leone", "Liberia", "Ivory Coast"]:
    try:
        g = maior(p)
    except IndexError:
        continue
    ax, ay = np.array(g.exterior.coords).T
    afr.append((p, ax, ay))
R = 6371.0088
best = None
for p, ax, ay in afr:
    # haversine vetorizado: cada vertice do Nordeste contra cada vertice da costa africana (amostrado)
    la1, lo1 = np.radians(by)[:, None], np.radians(bx)[:, None]
    la2, lo2 = np.radians(ay[::2])[None, :], np.radians(ax[::2])[None, :]
    h = np.sin((la2 - la1) / 2) ** 2 + np.cos(la1) * np.cos(la2) * np.sin((lo2 - lo1) / 2) ** 2
    dd = 2 * R * np.arcsin(np.sqrt(h))
    i, j = np.unravel_index(dd.argmin(), dd.shape)
    v = (dd[i, j], p, bx[i], by[i], ax[::2][j], ay[::2][j])
    print(f"{p}: {v[0]:,.0f} km entre ({v[2]:.3f},{v[3]:.3f}) e ({v[4]:.3f},{v[5]:.3f})")
    if best is None or v[0] < best[0]:
        best = v
k = vincenty_km(best[2], best[3], best[4], best[5])
print(f"\nmais estreito: {best[1]}, {k:,.0f} km = {k/1.609344:,.0f} mi (Vincenty) entre ({best[2]:.3f},{best[3]:.3f}) e ({best[4]:.3f},{best[5]:.3f})")
pts = {"Natal": (-35.209, -5.795), "Parnamirim": (-35.263, -5.915), "Dakar": (-17.447, 14.693), "Freetown": (-13.234, 8.484),
       "Accra": (-0.187, 5.604), "Miami": (-80.191, 25.762), "Ascension (Georgetown)": (-14.416, -7.928), "Belem": (-48.504, -1.456)}
for a, b in [("Natal", "Dakar"), ("Natal", "Freetown"), ("Natal", "Ascension (Georgetown)"), ("Ascension (Georgetown)", "Accra"), ("Natal", "Miami"), ("Belem", "Natal")]:
    k = vincenty_km(*pts[a], *pts[b])
    print(f"{a} -> {b}: {k:,.0f} km = {k/1.609344:,.0f} mi")

# acrescimo: Natal a Norfolk (Virginia) e ao Canal do Panama (Colon), para a comparacao do Plan Rubber
extra = {"Norfolk": (-76.285, 36.847), "Colon (Panama)": (-79.900, 9.359)}
for nome, (lo, la) in extra.items():
    k = vincenty_km(*pts["Natal"], lo, la)
    print(f"Natal -> {nome}: {k:,.0f} km = {k/1.609344:,.0f} mi")
k1 = vincenty_km(*pts["Natal"], *pts["Dakar"]); k2 = vincenty_km(*pts["Natal"], *extra["Norfolk"])
print(f"Dakar/Norfolk a partir de Natal: {k1/k2:.2f}")
