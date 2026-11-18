# Distancias da ilha (Nominatim/OSM, um pedido por vez, User-Agent do canal) e o tamanho da categoria do Commons (API do MediaWiki).
# Uso: python -X utf8 -B geo_e_commons.py
import json, time, math, urllib.request, urllib.parse
UA = "AlphaPointCanal/1.0 (contato.naka@hotmail.com)"

def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        d = json.load(r)
    time.sleep(1.5)
    return d

def nominatim(q):
    d = get("https://nominatim.openstreetmap.org/search?" + urllib.parse.urlencode({"q": q, "format": "json", "limit": 1}))
    if not d:
        return None
    return float(d[0]["lat"]), float(d[0]["lon"]), d[0].get("display_name", "")[:80]

def gc(a, b):
    R = 6371.0088
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

lugares = {
    "farol_msi": "Machias Seal Island Lighthouse",
    "little_river": "Little River Lighthouse, Cutler, Maine",
    "southwest_head": "Southwest Head Lighthouse, Grand Manan",
    "cutler": "Cutler, Washington County, Maine",
}
c = {}
for k, q in lugares.items():
    try:
        c[k] = nominatim(q)
    except Exception as e:
        c[k] = None
        print(k, "erro:", e)
    print(k, c[k])

# ponto A da Corte (1984), em WGS84 pelo aviso do Departamento de Estado de 21/12/2023 (ponto 12): 44 11'12" N, 67 16'44" W
ponto_a = (44 + 11 / 60 + 12 / 3600, -(67 + 16 / 60 + 44 / 3600))
# ECCC (santuario): 44 30' N, 67 06' W (arredondado ao minuto)
eccc = (44.5, -67.1)
ref = c.get("farol_msi") or eccc
print("referencia da ilha:", ref)
for k in ["little_river", "southwest_head", "cutler"]:
    if c.get(k):
        d = gc(ref, c[k]); print(f"ilha -> {k}: {d:.1f} km = {d/1.609344:.1f} mi = {d/1.852:.1f} nmi")
d = gc(ref, ponto_a); print(f"ilha -> ponto A (1984): {d:.1f} km = {d/1.609344:.1f} mi = {d/1.852:.1f} nmi")

# Commons: a categoria da ilha e as subcategorias
for cat in ["Category:Machias Seal Island", "Category:Machias Seal Island Lighthouse"]:
    try:
        d = get("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode({"action": "query", "prop": "categoryinfo", "titles": cat, "format": "json"}))
        for p in d["query"]["pages"].values():
            print(cat, p.get("categoryinfo"))
    except Exception as e:
        print(cat, "erro:", e)
