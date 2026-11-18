# Quanto do lago Tahoe fica em cada estado, pelo TIGER/Line 2024 do Census (AREAWATER dos 5 condados da margem).
# Baixa os 5 zips (um por vez) para ./dados/ e soma a área de água (AWATER, m²) dos polígonos "Lake Tahoe".
# Também acha, na geometria, a linha de estado dentro do lago e o vértice onde ela dobra (NAD83).
# Uso: python -X utf8 -B lago_por_estado.py
import os, sys, time, zipfile, urllib.request, math
import shapefile
from shapely.geometry import shape
from shapely.ops import unary_union

AQUI = os.path.dirname(os.path.abspath(__file__))
DADOS = os.path.join(AQUI, "dados")
os.makedirs(DADOS, exist_ok=True)
CONDADOS = {"06017": ("CA", "El Dorado"), "06061": ("CA", "Placer"),
            "32005": ("NV", "Douglas"), "32031": ("NV", "Washoe"), "32510": ("NV", "Carson City")}
BASE = "https://www2.census.gov/geo/tiger/TIGER2024/AREAWATER/tl_2024_{}_areawater.zip"

pecas = {"CA": [], "NV": []}
awater = {"CA": 0, "NV": 0}
for fips, (uf, nome) in CONDADOS.items():
    z = os.path.join(DADOS, f"tl_2024_{fips}_areawater.zip")
    if not os.path.exists(z):
        url = BASE.format(fips)
        print("baixando", url, file=sys.stderr)
        with urllib.request.urlopen(url, timeout=120) as r:
            open(z, "wb").write(r.read())
        time.sleep(1)
    with zipfile.ZipFile(z) as zz:
        base = f"tl_2024_{fips}_areawater"
        rd = shapefile.Reader(shp=zz.open(base + ".shp"), dbf=zz.open(base + ".dbf"), shx=zz.open(base + ".shx"))
        campos = [f[0] for f in rd.fields[1:]]
        for sr in rd.iterShapeRecords():
            rec = dict(zip(campos, sr.record))
            if (rec.get("FULLNAME") or "").strip().lower() in ("lake tahoe", "lk tahoe"):
                g = shape(sr.shape.__geo_interface__)
                pecas[uf].append(g)
                awater[uf] += int(rec["AWATER"])
                print(f"  {uf} {nome}: AWATER {int(rec['AWATER'])/1e6:.2f} km²", file=sys.stderr)

tot = awater["CA"] + awater["NV"]
print(f"Lago Tahoe, área de água (TIGER 2024 AWATER): total {tot/1e6:.1f} km² ({tot/2589988.11:.1f} mi²)")
for uf in ("CA", "NV"):
    print(f"  {uf}: {awater[uf]/1e6:.1f} km² ({awater[uf]/2589988.11:.1f} mi²) = {100*awater[uf]/tot:.1f} %")

# A linha de estado dentro do lago: a fronteira comum entre as peças da Califórnia e as de Nevada
ca = unary_union(pecas["CA"]); nv = unary_union(pecas["NV"])
comum = ca.boundary.intersection(nv.boundary)
linhas = []
if comum.geom_type == "LineString":
    linhas = [comum]
elif hasattr(comum, "geoms"):
    linhas = [g for g in comum.geoms if g.geom_type == "LineString"]
from shapely.ops import linemerge
lm = linemerge(linhas) if linhas else None
if lm is None or lm.is_empty:
    print("linha comum não encontrada"); sys.exit()
cs = list(lm.coords) if lm.geom_type == "LineString" else [c for g in lm.geoms for c in g.coords]
cs = sorted(cs, key=lambda c: -c[1])  # do norte para o sul
print(f"Linha de estado no lago: {len(cs)} vértices; extremos {cs[0][::-1]} → {cs[-1][::-1]}")
# o vértice de maior desvio de rumo
def rumo(p, q):
    dx = (q[0] - p[0]) * math.cos(math.radians(39)); dy = q[1] - p[1]
    return math.degrees(math.atan2(dx, dy)) % 360
melhor = None
for i in range(1, len(cs) - 1):
    d = abs((rumo(cs[i], cs[i + 1]) - rumo(cs[i - 1], cs[i]) + 180) % 360 - 180)
    if melhor is None or d > melhor[0]:
        melhor = (d, cs[i])
print(f"Vértice de dobra (NAD83, TIGER): lat {melhor[1][1]:.6f}, lon {melhor[1][0]:.6f}, mudança de rumo {melhor[0]:.1f}°")
lat, lon = melhor[1][1], melhor[1][0]
dn = (lat - 39.0) * 111030.0
de = (lon + 120.0) * 111320.0 * math.cos(math.radians(39.0))
print(f"  em relação a 39°N x 120°W: {dn:+.0f} m norte, {de:+.0f} m leste; {math.hypot(dn, de):.0f} m ({math.hypot(dn, de)/1609.344:.2f} mi)")
print(f"  rumo da linha ao norte do canto: {rumo(cs[0], melhor[1]):.2f}°; ao sul: {rumo(melhor[1], cs[-1]):.2f}°")
