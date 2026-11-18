# A medida nossa (preliminar): a crista do dique Herbert Hoover contra o chao do lado de fora e contra as cidades,
# e o nivel do lago (faixa de operacao 12,5 a 15,5 ft NGVD29, SFWMD) contra o chao das cidades.
# Fontes abertas: a linha do dique do OSM (dique.json, (c) OpenStreetMap contributors, ODbL), o 3DEP da USGS
# (ImageServer getSamples, 1 m, metros NAVD88, dominio publico), o Gazetteer 2024 de lugares da Florida (Census) e o
# VERTCON 3.0 da NGS (NCAT: NAVD88 = NGVD29 - 0,377 m no centro do lago). Um pedido por vez, User-Agent do canal.
# Uso: python -X utf8 -B dique_alturas.py   (grava alturas-amostras.tsv, alturas-cidades.tsv e alturas-resumo.md)
import json, math, os, time, csv, io, urllib.request, urllib.parse, statistics as st

AQUI = os.path.dirname(os.path.abspath(__file__))
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
FT = 3.280839895
NGVD_PARA_NAVD = -0.377          # m, NCAT/VERTCON 3.0 em 26,95 N, 80,85 W (pedido de 17/11/2026)
LAGO_NGVD_FT = (12.5, 15.5)      # faixa que o Corpo de Engenheiros busca (SFWMD, "Lake Okeechobee Coastal Releases")
OLHO = 1.7                       # m, olho de quem esta em pe

def hav(a, b):
    R = 6371008.8
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    d = math.sin((la2-la1)/2)**2 + math.cos(la1)*math.cos(la2)*math.sin((lo2-lo1)/2)**2
    return 2*R*math.asin(math.sqrt(d))

def desloca(p, dn, de):  # metros norte, leste
    return (p[0] + dn/111320.0, p[1] + de/(111320.0*math.cos(math.radians(p[0]))))

def get(url, tent=3):
    for k in range(tent):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=120) as r:
                return r.read()
        except Exception as e:
            print("  falhou:", e); time.sleep(5)
    raise RuntimeError("sem resposta: " + url[:120])

# 1) A linha do dique (vias "Herbert Hoover Dike" do OSM) e amostras a cada 2 km
j = json.load(open(os.path.join(AQUI, "dique.json"), encoding="utf-8"))
C = ((26.6812480+27.2071083)/2, (-81.1061500-80.6111160)/2)
amostras = []
for e in j["elements"]:
    if e["type"] != "way" or e.get("tags", {}).get("name") != "Herbert Hoover Dike":
        continue
    pts = [(g["lat"], g["lon"]) for g in e["geometry"]]
    acum = 0.0; prox = 0.0
    for i in range(len(pts)-1):
        a, b = pts[i], pts[i+1]; L = hav(a, b)
        while prox <= acum + L and L > 0:
            f = (prox - acum)/L
            p = (a[0]+(b[0]-a[0])*f, a[1]+(b[1]-a[1])*f)
            # normal ao segmento, apontando para fora do lago
            dn = (b[0]-a[0])*111320.0; de = (b[1]-a[1])*111320.0*math.cos(math.radians(a[0]))
            n = math.hypot(dn, de); nn, ne = -de/n, dn/n
            q1 = desloca(p, nn*500, ne*500); q2 = desloca(p, -nn*500, -ne*500)
            if hav(q2, C) > hav(q1, C):
                nn, ne = -nn, -ne
            amostras.append({"way": e["id"], "p": p, "nn": nn, "ne": ne})
            prox += 2000.0
        acum += L
print("amostras na crista:", len(amostras))

# 2) Os lugares do Census em volta do lago (Gazetteer 2024, Florida)
gz = get("https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_12.txt").decode("latin-1")
time.sleep(2)
rows = list(csv.reader(io.StringIO(gz), delimiter="\t"))
cab = [c.strip() for c in rows[0]]
alvo = ["Belle Glade city", "South Bay city", "Pahokee city", "Clewiston city", "Moore Haven city", "Okeechobee city",
        "Canal Point CDP", "Lakeport CDP", "Buckhead Ridge CDP", "Taylor Creek CDP", "Harlem CDP", "Port LaBelle CDP"]
cidades = []
for r in rows[1:]:
    nome = r[cab.index("NAME")].strip()
    if nome in alvo:
        cidades.append({"nome": nome, "p": (float(r[cab.index("INTPTLAT")]), float(r[cab.index("INTPTLONG")].strip()))})
print("lugares:", [c["nome"] for c in cidades])

# 3) Os pontos a medir: a crista (o maximo num corte de -40 a +40 m, de 5 em 5 m), o chao a 300 m e a 1.000 m
#    para fora, e o ponto interno de cada lugar
pontos = []
for k, a in enumerate(amostras):
    for d in range(-40, 45, 5):
        pontos.append(("crista", k, desloca(a["p"], a["nn"]*d, a["ne"]*d)))
    pontos.append(("fora300", k, desloca(a["p"], a["nn"]*300, a["ne"]*300)))
    pontos.append(("fora1000", k, desloca(a["p"], a["nn"]*1000, a["ne"]*1000)))
for k, c in enumerate(cidades):
    pontos.append(("cidade", k, c["p"]))

vals = {}
URL = "https://elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer/getSamples"
LOTE = 100
for i0 in range(0, len(pontos), LOTE):
    lote = pontos[i0:i0+LOTE]
    geom = {"points": [[round(p[2][1], 7), round(p[2][0], 7)] for p in lote], "spatialReference": {"wkid": 4326}}
    q = urllib.parse.urlencode({"geometry": json.dumps(geom), "geometryType": "esriGeometryMultipoint",
                                "returnFirstValueOnly": "true", "interpolation": "RSP_NearestNeighbor", "f": "json"})
    resp = json.loads(get(URL + "?" + q))
    for s in resp.get("samples", []):
        try:
            v = float(s["value"])
        except Exception:
            v = None
        vals[i0 + int(s["locationId"])] = (v, s.get("resolution"))
    print(f"  lote {i0//LOTE+1}: {len(resp.get('samples', []))} valores")
    time.sleep(2)

crista = {}; fora300 = {}; fora1000 = {}; cid = {}
for i, (tipo, k, p) in enumerate(pontos):
    v = vals.get(i, (None, None))[0]
    if v is None or v < -50:
        continue
    if tipo == "crista":
        crista[k] = max(crista.get(k, -99), v)
    elif tipo == "fora300":
        fora300[k] = v
    elif tipo == "fora1000":
        fora1000[k] = v
    else:
        cid[k] = v

lago_navd = [x/FT + NGVD_PARA_NAVD for x in LAGO_NGVD_FT]
with open(os.path.join(AQUI, "alturas-amostras.tsv"), "w", encoding="utf-8") as f:
    f.write("k\tlat\tlon\tcrista_m_navd88\tchao300_m\tchao1000_m\tcrista_sobre_chao300_ft\n")
    for k, a in enumerate(amostras):
        c = crista.get(k); g = fora300.get(k); g2 = fora1000.get(k)
        dif = (c - g)*FT if (c is not None and g is not None) else None
        f.write(f"{k}\t{a['p'][0]:.5f}\t{a['p'][1]:.5f}\t{c}\t{g}\t{g2}\t{dif}\n")

ok = [k for k in range(len(amostras)) if k in crista and k in fora300]
dif = [(crista[k]-fora300[k])*FT for k in ok]
cr = [crista[k]*FT for k in ok]
ch = [fora300[k]*FT for k in ok]
ch1 = [fora1000[k]*FT for k in ok if k in fora1000]
abaixo_lago_alto = sum(1 for k in ok if fora300[k] < lago_navd[1])
abaixo_lago_baixo = sum(1 for k in ok if fora300[k] < lago_navd[0])
cego = sum(1 for k in ok if crista[k] > fora300[k] + OLHO)

linhas = []
linhas.append(f"# A crista do dique contra o chao de fora (3DEP 1 m, NAVD88), {time.strftime('%d/%m/%Y %H:%M')}\n")
linhas.append(f"- Amostras na crista (a cada 2 km das vias 'Herbert Hoover Dike' do OSM, {len(amostras)}; com valor: {len(ok)}).")
linhas.append(f"- Crista: mediana {st.median(cr):.1f} ft NAVD88 (min {min(cr):.1f}, max {max(cr):.1f}).")
linhas.append(f"- Chao a 300 m para fora: mediana {st.median(ch):.1f} ft (min {min(ch):.1f}, max {max(ch):.1f}); a 1.000 m: mediana {st.median(ch1):.1f} ft.")
linhas.append(f"- Crista acima do chao a 300 m: mediana {st.median(dif):.1f} ft (min {min(dif):.1f}, max {max(dif):.1f}; quartis {st.quantiles(dif, n=4)[0]:.1f} e {st.quantiles(dif, n=4)[2]:.1f}).")
linhas.append(f"- Amostras em que a crista passa o olho de quem esta em pe a 300 m (chao + 1,7 m): {cego} de {len(ok)} ({cego/len(ok)*100:.0f} %).")
linhas.append(f"- O lago, na faixa de operacao 12,5-15,5 ft NGVD29 = {lago_navd[0]*FT:.1f}-{lago_navd[1]*FT:.1f} ft NAVD88.")
linhas.append(f"- Amostras em que o chao a 300 m fica abaixo do lago a 15,5 ft NGVD: {abaixo_lago_alto} de {len(ok)} ({abaixo_lago_alto/len(ok)*100:.0f} %); abaixo do lago a 12,5 ft NGVD: {abaixo_lago_baixo} ({abaixo_lago_baixo/len(ok)*100:.0f} %).")
linhas.append("\n## Os lugares (ponto interno do Census; o trecho de crista mais perto)\n")
linhas.append("| Lugar | Chao (ft NAVD88) | Lago 12,5 / 15,5 ft NGVD acima do chao (ft) | Crista mais perto (ft) e distancia | Crista acima do chao (ft) |")
linhas.append("|---|---|---|---|---|")
with open(os.path.join(AQUI, "alturas-cidades.tsv"), "w", encoding="utf-8") as f:
    f.write("lugar\tlat\tlon\tchao_ft_navd88\tlago_baixo_menos_chao_ft\tlago_alto_menos_chao_ft\tcrista_ft\tdist_crista_m\tcrista_menos_chao_ft\n")
    for k, c in enumerate(cidades):
        if k not in cid:
            continue
        g = cid[k]
        kk = min(ok, key=lambda x: hav(amostras[x]["p"], c["p"]))
        dist = hav(amostras[kk]["p"], c["p"])
        f.write(f"{c['nome']}\t{c['p'][0]}\t{c['p'][1]}\t{g*FT:.1f}\t{(lago_navd[0]-g)*FT:.1f}\t{(lago_navd[1]-g)*FT:.1f}\t{crista[kk]*FT:.1f}\t{dist:.0f}\t{(crista[kk]-g)*FT:.1f}\n")
        linhas.append(f"| {c['nome']} | {g*FT:.1f} | {(lago_navd[0]-g)*FT:+.1f} / {(lago_navd[1]-g)*FT:+.1f} | {crista[kk]*FT:.1f} a {dist/1000:.1f} km | {(crista[kk]-g)*FT:.1f} |")
open(os.path.join(AQUI, "alturas-resumo.md"), "w", encoding="utf-8").write("\n".join(linhas) + "\n")
print("\n".join(linhas))
