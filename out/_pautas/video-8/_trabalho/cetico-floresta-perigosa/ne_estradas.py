# Lista os trechos de estrada do Natural Earth 10m (dominio publico, cache da maquina) na regiao do Darien
# e as pontas mais proximas da brecha, dos dois lados. Uso: python -P -X utf8 -B ne_estradas.py
import json, os, math

NE = os.path.expanduser("~/.regie/geo/natural-earth/ne_10m_roads.geojson")
d = json.load(open(NE, encoding="utf-8"))
BB = (-79.5, 6.5, -75.5, 9.5)  # lon_min, lat_min, lon_max, lat_max

def coords(g):
    if g["type"] == "LineString":
        return [g["coordinates"]]
    if g["type"] == "MultiLineString":
        return g["coordinates"]
    return []

pontas = []
for f in d["features"]:
    p = f["properties"]
    for linha in coords(f["geometry"]):
        dentro = [c for c in linha if BB[0] <= c[0] <= BB[2] and BB[1] <= c[1] <= BB[3]]
        if not dentro:
            continue
        print(p.get("sov_a3"), "|", p.get("type"), "|", p.get("name"), "|", p.get("label"), "|", len(linha), "pts | lon", round(min(c[0] for c in linha), 3), "a", round(max(c[0] for c in linha), 3))
        for c in (linha[0], linha[-1]):
            if BB[0] <= c[0] <= BB[2] and BB[1] <= c[1] <= BB[3]:
                pontas.append((p.get("sov_a3"), round(c[0], 4), round(c[1], 4)))

print("\n# pontas de linha dentro da caixa (pais, lon, lat):")
for x in sorted(set(pontas), key=lambda t: t[1]):
    print(x)
