# Ilha ou país (vídeo 8, 18/11/2026): as medidas nossas de três candidatos.
#  - coordenadas: Nominatim (OSM), um pedido por vez (pausa de 1,2 s), User-Agent do canal; cache em geo-cache.json;
#  - rotas: servidor de demonstração do OSRM (router.project-osrm.org, dados do OSM), um pedido por vez, pausa de 1,5 s;
#    cache em rota-<nome>.json. Os trechos por país saem de pontos de passagem nas aduanas (não de polígonos).
# Uso: python -X utf8 -B medidas.py
import json, os, time, math, urllib.request, urllib.parse

AQUI = os.path.dirname(os.path.abspath(__file__))
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
CACHE = os.path.join(AQUI, "geo-cache.json")
geo = json.load(open(CACHE, encoding="utf-8")) if os.path.exists(CACHE) else {}

def busca(q):
    if q in geo:
        return geo[q]
    url = "https://nominatim.openstreetmap.org/search?" + urllib.parse.urlencode({"q": q, "format": "json", "limit": 1})
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        d = json.load(r)
    time.sleep(1.2)
    geo[q] = [float(d[0]["lat"]), float(d[0]["lon"]), d[0].get("display_name", "")[:100]] if d else None
    json.dump(geo, open(CACHE, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
    return geo[q]

def gc_km(a, b):
    R = 6371.0088
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

def rota(nome, pts):
    arq = os.path.join(AQUI, "rota-%s.json" % nome)
    if os.path.exists(arq):
        return json.load(open(arq, encoding="utf-8"))
    coords = ";".join("%.5f,%.5f" % (p[1], p[0]) for p in pts)
    url = "https://router.project-osrm.org/route/v1/driving/%s?overview=false&steps=false&alternatives=false" % coords
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=180) as r:
        d = json.load(r)
    d["_url"] = url
    d["_lido_em"] = time.strftime("%Y-%m-%d %H:%M:%S")
    json.dump(d, open(arq, "w", encoding="utf-8"))
    time.sleep(1.5)
    return d

def mi(km):
    return km / 1.609344

out = []
def p(*a):
    s = " ".join(str(x) for x in a)
    print(s); out.append(s)

# ---------- Kiribati ----------
K = {
    "banaba": "Banaba, Kiribati",
    "tarawa": "Bairiki, South Tarawa, Kiribati",
    "kiritimati": "London, Kiritimati, Kiribati",
    "caroline": "Caroline Island, Kiribati",
    "flint": "Flint Island, Kiribati",
    "teraina": "Teraina, Kiribati",
    "kanton": "Kanton, Kiribati",
    "honolulu": "Honolulu, Hawaii",
    "nyc": "New York City, New York",
    "la": "Los Angeles, California",
    "suva": "Suva, Fiji",
}
kc = {k: busca(q) for k, q in K.items()}
for k, v in kc.items():
    p("geo", k, v)
pares = [("banaba", "caroline"), ("tarawa", "kiritimati"), ("tarawa", "kanton"), ("kanton", "kiritimati"), ("teraina", "flint"),
         ("kiritimati", "honolulu"), ("nyc", "la"), ("tarawa", "suva"), ("suva", "kiritimati")]
for a, b in pares:
    if kc.get(a) and kc.get(b):
        d = gc_km(kc[a], kc[b]); p("KIRIBATI %s->%s: %.0f km = %.0f mi" % (a, b, d, mi(d)))

# ---------- Tierra del Fuego: Río Gallegos -> Ushuaia, trechos por país pelas aduanas ----------
T = {
    "riogallegos": "Río Gallegos, Santa Cruz, Argentina",
    "monteaymond": "Paso Integración Austral",
    "sansebastian_ar": "Paso San Sebastián",
    "ushuaia": "Ushuaia, Tierra del Fuego, Argentina",
    "puntadelgada": "Punta Delgada, Magallanes, Chile",
}
tc = {k: busca(q) for k, q in T.items()}
for k, v in tc.items():
    p("geo", k, v)
if all(tc.values()):
    tot = rota("tdf_total", [tc["riogallegos"], tc["ushuaia"]])
    a = rota("tdf_ar1", [tc["riogallegos"], tc["monteaymond"]])
    c = rota("tdf_cl", [tc["monteaymond"], tc["sansebastian_ar"]])
    b = rota("tdf_ar2", [tc["sansebastian_ar"], tc["ushuaia"]])
    for n, d in [("total", tot), ("Argentina 1 (Río Gallegos-Monte Aymond)", a), ("Chile (Monte Aymond-San Sebastián, com a balsa)", c), ("Argentina 2 (San Sebastián-Ushuaia)", b)]:
        if d.get("code") == "Ok":
            r = d["routes"][0]
            p("TDF %s: %.0f km = %.0f mi, %.1f h" % (n, r["distance"] / 1000, mi(r["distance"] / 1000), r["duration"] / 3600))
        else:
            p("TDF %s: ERRO %s" % (n, d.get("code")))

# ---------- Gâmbia: Dakar -> Ziguinchor, pela Gâmbia e por fora ----------
G = {
    "dakar": "Dakar, Senegal",
    "ziguinchor": "Ziguinchor, Senegal",
    "farafenni": "Farafenni, Gambia",
    "tambacounda": "Tambacounda, Senegal",
    "kolda": "Kolda, Senegal",
    "velingara": "Vélingara, Kolda, Senegal",
    "banjul": "Banjul, Gambia",
}
gcx = {k: busca(q) for k, q in G.items()}
for k, v in gcx.items():
    p("geo", k, v)
if all(gcx.values()):
    via = rota("gm_via_gambia", [gcx["dakar"], gcx["farafenni"], gcx["ziguinchor"]])
    fora = rota("gm_por_fora", [gcx["dakar"], gcx["tambacounda"], gcx["velingara"], gcx["kolda"], gcx["ziguinchor"]])
    livre = rota("gm_livre", [gcx["dakar"], gcx["ziguinchor"]])
    for n, d in [("pela Gâmbia (Farafenni)", via), ("por fora (Tambacounda, Vélingara, Kolda)", fora), ("rota livre do OSRM", livre)]:
        if d.get("code") == "Ok":
            r = d["routes"][0]
            p("GAMBIA %s: %.0f km = %.0f mi, %.1f h" % (n, r["distance"] / 1000, mi(r["distance"] / 1000), r["duration"] / 3600))
        else:
            p("GAMBIA %s: ERRO %s" % (n, d.get("code")))
    d = gc_km(gcx["dakar"], gcx["ziguinchor"]); p("GAMBIA linha reta Dakar-Ziguinchor: %.0f km = %.0f mi" % (d, mi(d)))

# ---------- Guiné Equatorial: distâncias ----------
E = {
    "malabo": "Malabo, Equatorial Guinea",
    "bata": "Bata, Equatorial Guinea",
    "annobon": "San Antonio de Palé, Annobón",
    "idenau": "Idenau, Cameroon",
    "ciudadpaz": "Ciudad de la Paz, Equatorial Guinea",
    "saotome": "São Tomé, São Tomé and Príncipe",
}
ec = {k: busca(q) for k, q in E.items()}
for k, v in ec.items():
    p("geo", k, v)
for a, b in [("malabo", "bata"), ("malabo", "idenau"), ("malabo", "annobon"), ("bata", "annobon"), ("malabo", "ciudadpaz"), ("annobon", "saotome")]:
    if ec.get(a) and ec.get(b):
        d = gc_km(ec[a], ec[b]); p("GE %s->%s: %.0f km = %.0f mi" % (a, b, d, mi(d)))

# ---------- Timor: Pante Macassar (Oecusse) -> Dili por terra, pela Indonésia ----------
TL = {
    "pantemacassar": "Pante Macassar, Oecusse, Timor-Leste",
    "dili": "Dili, Timor-Leste",
    "kupang": "Kupang, Indonesia",
}
tlc = {k: busca(q) for k, q in TL.items()}
for k, v in tlc.items():
    p("geo", k, v)
if tlc["pantemacassar"] and tlc["dili"]:
    d = rota("tl_oecusse_dili", [tlc["pantemacassar"], tlc["dili"]])
    if d.get("code") == "Ok":
        r = d["routes"][0]
        p("TIMOR Pante Macassar->Dili por terra: %.0f km = %.0f mi, %.1f h" % (r["distance"] / 1000, mi(r["distance"] / 1000), r["duration"] / 3600))
    else:
        p("TIMOR rota: ERRO %s" % d.get("code"))
    x = gc_km(tlc["pantemacassar"], tlc["dili"]); p("TIMOR linha reta Pante Macassar-Dili: %.0f km = %.0f mi" % (x, mi(x)))

open(os.path.join(AQUI, "medidas-saida.txt"), "w", encoding="utf-8").write("\n".join(out) + "\n")
