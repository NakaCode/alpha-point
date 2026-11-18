# O perfil de altitude da brecha da Pan-Americana: a linha reta de Yaviza (Panama, onde a estrada acaba)
# a Turbo (Colombia, onde a estrada volta), pelas pontas das estradas do Natural Earth 10m (dominio publico).
# Altitude: Terrain Tiles da AWS (Mapzen/Tilezen "terrarium", dado aberto sem login; fontes SRTM, GMTED, ETOPO1 etc.),
# zoom 12 (~38 m por pixel no equador). Os ladrilhos ficam em midia/_pautas/video-8/cetico-floresta-perigosa/terrarium/.
# Pais de cada ponto: Natural Earth 10m admin-1 (dominio publico).
# Uso (de dentro desta pasta): python -P -X utf8 -B perfil_brecha.py
import os, math, json, time, urllib.request, io
import numpy as np
from PIL import Image
from shapely.geometry import shape, Point
from shapely.strtree import STRtree

RAIZ = "C:/projetos/alpha-point/midia/_pautas/video-8/cetico-floresta-perigosa/terrarium"
os.makedirs(RAIZ, exist_ok=True)
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
Z = 12
A = (-77.6926, 8.1730)   # Yaviza: ponta da estrada no Panama (NE 10m roads)
B = (-76.7358, 8.0905)   # Turbo: ponta da estrada na Colombia (NE 10m roads)
N = 800

def hav(p, q):
    R = 6371.0088
    l1, f1, l2, f2 = map(math.radians, (p[0], p[1], q[0], q[1]))
    a = math.sin((f2 - f1) / 2) ** 2 + math.cos(f1) * math.cos(f2) * math.sin((l2 - l1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(a))

def tile_xy(lon, lat, z):
    n = 2 ** z
    x = (lon + 180) / 360 * n
    y = (1 - math.asinh(math.tan(math.radians(lat))) / math.pi) / 2 * n
    return x, y

cache = {}
def tile(x, y):
    k = (x, y)
    if k in cache:
        return cache[k]
    p = os.path.join(RAIZ, f"{Z}_{x}_{y}.png")
    if not os.path.exists(p):
        url = f"https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{Z}/{x}/{y}.png"
        for tentativa in range(4):
            try:
                data = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=60).read()
                break
            except Exception as e:
                print(f"# ladrilho {x},{y}: tentativa {tentativa + 1} falhou ({e}); de novo em 3 s")
                time.sleep(3)
        else:
            raise SystemExit(f"ladrilho {x},{y} nao baixou")
        open(p, "wb").write(data)
        time.sleep(0.3)
    im = np.asarray(Image.open(p).convert("RGB")).astype(np.float64)
    elev = im[:, :, 0] * 256 + im[:, :, 1] + im[:, :, 2] / 256 - 32768
    cache[k] = elev
    return elev

def alt(lon, lat):
    fx, fy = tile_xy(lon, lat, Z)
    x, y = int(fx), int(fy)
    e = tile(x, y)
    px = min(255, int((fx - x) * 256))
    py = min(255, int((fy - y) * 256))
    return float(e[py, px])

# paises (admin-1 do NE)
ne = json.load(open(os.path.expanduser("~/.regie/geo/natural-earth/ne_10m_admin_1_states_provinces.geojson"), encoding="utf-8"))
geoms, nomes = [], []
for f in ne["features"]:
    pr = f["properties"]
    if pr.get("admin") in ("Panama", "Colombia"):
        geoms.append(shape(f["geometry"]))
        nomes.append((pr.get("admin"), pr.get("name")))
arv = STRtree(geoms)

def onde(lon, lat):
    pt = Point(lon, lat)
    for i in arv.query(pt):
        if geoms[i].contains(pt):
            return nomes[i]
    return ("mar/fora", "")

total = hav(A, B)
print(f"# Yaviza -> Turbo, linha reta (haversine, R medio): {total:.1f} km = {total / 1.609344:.1f} mi")
pts = []
for i in range(N + 1):
    t = i / N
    lon = A[0] + (B[0] - A[0]) * t
    lat = A[1] + (B[1] - A[1]) * t
    d = total * t
    pts.append((d, lon, lat, alt(lon, lat), onde(lon, lat)))

alts = np.array([p[3] for p in pts])
im = int(alts.argmax())
print(f"# ladrilhos usados: {len(cache)}")
print(f"# ponto mais alto da linha: {alts.max():.0f} m ({alts.max() * 3.28084:.0f} ft) a {pts[im][0]:.1f} km de Yaviza, lon {pts[im][1]:.4f} lat {pts[im][2]:.4f}, {pts[im][4]}")
seg = total / N
for lim in (0, 5, 20):
    print(f"# trecho abaixo de {lim} m: {np.sum(alts < lim) * seg:.1f} km ({np.mean(alts < lim) * 100:.0f} %)")
for lim in (200, 500):
    print(f"# trecho acima de {lim} m: {np.sum(alts > lim) * seg:.1f} km ({np.mean(alts > lim) * 100:.0f} %)")

# a passagem de pais ao longo da linha
ant = None
for d, lon, lat, a, w in pts:
    if w[0] != ant:
        print(f"  km {d:6.1f}  {w[0]:9s} {w[1]:24s} alt {a:6.0f} m")
        ant = w[0]

# o perfil, de 5 em 5 km
print("\n# perfil (km, alt m, pais/provincia)")
passo = max(1, int(round(5 / seg)))
for d, lon, lat, a, w in pts[::passo]:
    print(f"{d:6.1f}  {a:6.0f}  {w[0]} / {w[1]}")

# a mesma linha, mas so a terra: o trecho de terra baixa (abaixo de 20 m) no lado colombiano, a oeste do golfo
terra_col = [p for p in pts if p[4][0] == "Colombia"]
if terra_col:
    a_col = np.array([p[3] for p in terra_col])
    print(f"\n# na Colombia (terra, pelo NE): {len(terra_col) * seg:.1f} km; abaixo de 20 m: {np.sum(a_col < 20) * seg:.1f} km")
terra_pan = [p for p in pts if p[4][0] == "Panama"]
if terra_pan:
    a_pan = np.array([p[3] for p in terra_pan])
    print(f"# no Panama: {len(terra_pan) * seg:.1f} km; acima de 200 m: {np.sum(a_pan > 200) * seg:.1f} km; maximo {a_pan.max():.0f} m")
