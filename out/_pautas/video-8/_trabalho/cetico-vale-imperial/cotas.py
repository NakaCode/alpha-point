# Cota do terreno (USGS 3DEP, servico EPQS da The National Map), um pedido por vez, com o User-Agent do canal.
# Uso: python -X utf8 -B cotas.py   (grava cotas.json)
import json, time, urllib.request, urllib.parse

UA = "regie/0.1 (canal alpha-point; pesquisa geografica para video; contato.naka@hotmail.com)"
PONTOS = [
    ("Imperial Dam (rio Colorado, tomada do All-American Canal)", 32.8836, -114.4656),
    ("All-American Canal perto de Pilot Knob", 32.7345, -114.7120),
    ("Calexico (fronteira)", 32.6789, -115.4989),
    ("El Centro", 32.7920, -115.5631),
    ("Brawley", 32.9787, -115.5303),
    ("Calipatria", 33.1256, -115.5142),
    ("Salton Sea, margem sul (Red Hill)", 33.1960, -115.6100),
    ("Lake Havasu, tomada do CAP", 34.3083, -114.1180),
    ("Phoenix (centro)", 33.4484, -112.0740),
    ("Tucson (centro)", 32.2226, -110.9747),
]
saida = []
for nome, lat, lon in PONTOS:
    q = urllib.parse.urlencode({"x": lon, "y": lat, "units": "Feet", "wkid": 4326, "includeDate": "false"})
    url = "https://epqs.nationalmap.gov/v1/json?" + q
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=60) as r:
            d = json.loads(r.read().decode("utf-8"))
        v = d.get("value")
        saida.append({"ponto": nome, "lat": lat, "lon": lon, "cota_pes": v, "url": url})
        print(f"{nome}: {v} ft")
    except Exception as e:
        saida.append({"ponto": nome, "lat": lat, "lon": lon, "erro": str(e), "url": url})
        print(nome, "erro", e)
    time.sleep(1.2)
json.dump(saida, open("cotas.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
