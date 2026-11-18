# Terra do Fogo (cético, 18/11/2026): a área da Isla Grande por país, medida nossa.
# Fonte: Natural Earth 10m admin_1 (domínio público, cache da máquina): o polígono de "Tierra del Fuego" (AR) e o de
# "Magallanes y Antártica Chilena" (CL); de cada um, a parte que contém um ponto da Isla Grande (Río Grande; Porvenir).
# Área: projeção azimutal equivalente de Lambert (esfera autálica, R = 6.371,007 km), centrada em 54°S 68,6°W.
# A escala 1:10M simplifica a costa: o erro da área é de alguns por cento; a proporção entre os lados é o que vale.
# Uso: python -P -X utf8 -B area_ilha.py   (lê a biblioteca shapely)
import json, os, math
from shapely.geometry import shape, Point, Polygon, MultiPolygon
from shapely.ops import transform

NE = os.path.expanduser("~/.regie/geo/natural-earth/ne_10m_admin_1_states_provinces.geojson")
d = json.load(open(NE, encoding="utf-8"))
R = 6371.007
LAT0, LON0 = math.radians(-54.0), math.radians(-68.6)

def laea(lon, lat, z=None):
    lam, phi = math.radians(lon), math.radians(lat)
    k = math.sqrt(2 / (1 + math.sin(LAT0) * math.sin(phi) + math.cos(LAT0) * math.cos(phi) * math.cos(lam - LON0)))
    x = R * k * math.cos(phi) * math.sin(lam - LON0)
    y = R * k * (math.cos(LAT0) * math.sin(phi) - math.sin(LAT0) * math.cos(phi) * math.cos(lam - LON0))
    return x, y

def proj(g):
    return transform(lambda xs, ys, zs=None: tuple(zip(*[laea(x, y) for x, y in zip(xs, ys)])), g)

alvos = {"AR": ("Tierra del Fuego", Point(-67.70, -53.79)), "CL": ("Magallanes y Antártica Chilena", Point(-70.37, -53.30))}
saida = []
res = {}
for pais, (nome, ponto) in alvos.items():
    feats = [f for f in d["features"] if f["properties"].get("name") == nome or nome in (f["properties"].get("name_es") or "") or nome in (f["properties"].get("name_alt") or "")]
    if not feats:
        feats = [f for f in d["features"] if nome.split()[0] in (f["properties"].get("name") or "") and f["properties"].get("adm0_a3") in ("ARG", "CHL")]
    for f in feats:
        g = shape(f["geometry"])
        partes = list(g.geoms) if isinstance(g, MultiPolygon) else [g]
        for p in partes:
            if p.contains(ponto):
                a = proj(p).area
                res[pais] = a
                saida.append("%s | %s (%s) | a parte que contém %s: %.0f km² = %.0f mi² | %d vértices" % (
                    pais, f["properties"].get("name"), f["properties"].get("adm0_a3"), ponto.wkt, a, a / 2.589988, len(p.exterior.coords)))
if len(res) == 2:
    t = res["AR"] + res["CL"]
    saida.append("Isla Grande (soma): %.0f km² = %.0f mi²; Chile %.1f %%, Argentina %.1f %%" % (t, t / 2.589988, 100 * res["CL"] / t, 100 * res["AR"] / t))
# a faixa que o perito chileno deixou de lado em 1881-1895 (a linha no cabo, não no 68°34'): largura média ~2,7 km x 248 km
faixa = 2.7 * 248.4
saida.append("faixa entre o 68°34' do texto e a linha demarcada (aprox.): %.0f km² = %.0f mi²" % (faixa, faixa / 2.589988))
print("\n".join(saida))
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "area-ilha-saida.txt"), "w", encoding="utf-8").write("\n".join(saida) + "\n")
