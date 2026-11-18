# Duas medidas de geometria, sobre o Natural Earth 10m admin-1 (dominio publico) do cache da maquina:
# 1) o que ha de terra no paralelo de Wellington (41,29 S), indo para oeste, ate dar a volta ao mundo;
# 2) a largura minima do estreito de Cook (Ilha Norte x Ilha Sul), num recorte do estreito.
# Uso: python -X utf8 -B geo_paralelo.py
import json, math, os
from shapely.geometry import shape, LineString, box
from shapely.ops import unary_union

NE = os.path.expanduser("~/.regie/geo/natural-earth/ne_10m_admin_1_states_provinces.geojson")
LAT = -41.2865   # Wellington (centro), NIWA/LINZ ~41 deg 17' S
LON_WLG = 174.7762

with open(NE, encoding="utf-8") as f:
    fc = json.load(f)

linha = LineString([(-180, LAT), (180, LAT)])
cruzes = []
for ft in fc["features"]:
    g = shape(ft["geometry"])
    if g.is_empty or not g.intersects(linha):
        continue
    inter = g.intersection(linha)
    partes = getattr(inter, "geoms", [inter])
    for p in partes:
        if p.length == 0:
            continue
        x0, x1 = sorted([p.coords[0][0], p.coords[-1][0]])
        pr = ft["properties"]
        cruzes.append((x0, x1, pr.get("admin"), pr.get("name")))

# ordena para oeste a partir de Wellington: distancia angular para oeste
def oeste(x):
    return (LON_WLG - x) % 360

cruzes.sort(key=lambda c: oeste(c[1]))
km_grau = 111.32 * math.cos(math.radians(abs(LAT)))
print(f"# Terra no paralelo {LAT} (Natural Earth 10m admin-1), indo para oeste a partir de Wellington ({LON_WLG} E)")
print(f"# 1 grau de longitude aqui = {km_grau:.1f} km; volta inteira = {360*km_grau:,.0f} km")
total_terra = 0
agrup = {}
for x0, x1, adm, nome in cruzes:
    w = (x1 - x0) * km_grau
    total_terra += w
    chave = adm
    agrup.setdefault(chave, [0, oeste(x1) * km_grau, oeste(x0) * km_grau, set()])
    a = agrup[chave]
    a[0] += w
    a[1] = min(a[1], oeste(x1) * km_grau)
    a[2] = max(a[2], oeste(x0) * km_grau)
    a[3].add(nome)
for adm, (w, d0, d1, nomes) in sorted(agrup.items(), key=lambda kv: kv[1][1]):
    print(f"  {adm:28} terra {w:8.0f} km   de {d0:8.0f} a {d1:8.0f} km a oeste de Wellington   ({', '.join(sorted(nomes))[:90]})")
print(f"  terra total no paralelo: {total_terra:,.0f} km de {360*km_grau:,.0f} km ({total_terra/(360*km_grau)*100:.1f} %)")

# 2) a largura minima do estreito de Cook
nz = [shape(ft["geometry"]) for ft in fc["features"] if ft["properties"].get("admin") == "New Zealand"]
recorte = box(173.6, -41.9, 175.4, -40.6)
nz_r = unary_union([g.intersection(recorte) for g in nz if g.intersects(recorte)])
pol = list(getattr(nz_r, "geoms", [nz_r]))
# Ilha Norte: poligonos cujo ponto mais ao norte passa de 40,7 S e que tocam a peninsula de Wellington; o resto e Ilha Sul + ilhas
def proj(g):
    from shapely.affinity import scale
    c = math.cos(math.radians(41.25))
    return scale(g, xfact=111.32 * c, yfact=110.57, origin=(0, 0))
norte = [p for p in pol if p.bounds[0] > 174.5 and p.bounds[3] > -41.2 and p.area > 0.01]
sul = [p for p in pol if p.bounds[2] < 174.5 + 0.5 and p.bounds[1] < -41.0 and p not in norte and p.area > 0.001]
N = unary_union([proj(p) for p in norte])
S = unary_union([proj(p) for p in sul])
d = N.distance(S)
from shapely.ops import nearest_points
a, b = nearest_points(N, S)
c = math.cos(math.radians(41.25))
print(f"\n# Estreito de Cook (recorte 173,6-175,4 E; 40,6-41,9 S; NE 10m, a costa generalizada)")
print(f"  largura minima Ilha Norte x Ilha Sul (com as ilhas do lado sul, como Arapawa): {d:.1f} km")
print(f"  entre ({a.x/(111.32*c):.3f} E, {a.y/110.57:.3f}) e ({b.x/(111.32*c):.3f} E, {b.y/110.57:.3f})")
