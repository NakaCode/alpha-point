# Coordenadas no Nominatim (OSM), um pedido por vez, com o User-Agent do canal; e distancias de circulo maximo.
# Uso: python -X utf8 -B geo_nominatim.py
import json, time, math, urllib.request, urllib.parse
UA = "AlphaPointCanal/1.0 (contato.naka@hotmail.com)"
def busca(q):
    url = "https://nominatim.openstreetmap.org/search?" + urllib.parse.urlencode({"q": q, "format": "json", "limit": 1})
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        d = json.load(r)
    time.sleep(1.2)
    if not d: return None
    return float(d[0]["lat"]), float(d[0]["lon"]), d[0].get("display_name","")[:90]
def gc(a, b):
    R = 6371.0088
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2-la1)/2)**2 + math.cos(la1)*math.cos(la2)*math.sin((lo2-lo1)/2)**2
    return 2*R*math.asin(math.sqrt(h))
lugares = {
 "lindeman": "Lindeman Lake, British Columbia",
 "bennett": "Bennett Lake, Yukon",
 "dyea": "Dyea, Alaska",
 "skagway": "Skagway, Alaska",
 "chilkoot": "Chilkoot Pass",
 "machias": "Machias Seal Island",
 "cutler": "Cutler, Maine",
 "grandmanan": "Grand Manan, New Brunswick",
 "redfield": "Redfield, Oswego County, New York",
 "killarney": "Killarney, Queensland",
 "goolwa": "Goolwa, South Australia",
 "goldcoast": "Point Danger, Queensland",
}
coords = {}
for k, q in lugares.items():
    try:
        coords[k] = busca(q)
    except Exception as e:
        coords[k] = None
    print(k, coords[k])
def km(a, b):
    if coords.get(a) and coords.get(b):
        d = gc(coords[a], coords[b]); return f"{a}->{b}: {d:.1f} km = {d/1.609344:.1f} mi"
    return f"{a}->{b}: sem coordenada"
for a, b in [("lindeman","dyea"),("bennett","skagway"),("lindeman","skagway"),("machias","cutler"),("machias","grandmanan"),("killarney","goldcoast"),("killarney","goolwa")]:
    print(km(a, b))
