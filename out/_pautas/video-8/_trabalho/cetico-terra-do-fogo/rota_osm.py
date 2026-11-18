# Terra do Fogo (cético, 18/11/2026): a medida nossa, refeita SEM servidor de rotas.
# Monta o grafo das vias do OpenStreetMap baixadas pelo osm_baixar.py e roda um Dijkstra próprio (menor distância),
# de Río Gallegos (centro) a Ushuaia (centro), em dois modos:
#   "principais": só trunk, primary e secondary (com os _link) e a balsa, salvo nos 6 km de cada ponta (ruas da cidade);
#   "todas": também as tertiary (inclui os atalhos de cascalho Y-5xx/Y-7xx do lado chileno).
# Cada pedaço do caminho recebe o país pelo lado da fronteira do próprio OSM (admin_level=2, sem as marítimas):
#   na ilha (lat < -52,66), Chile a oeste da linha; no continente, Chile ao sul da linha Dungeness–Monte Aymond–paralelo 52;
#   o que está na água do estreito (a balsa) é Chile.
# Distâncias: haversine, raio médio 6.371,0088 km (erro < 0,5 % nessa latitude). Dados: © OpenStreetMap contributors, ODbL.
# Uso: python -X utf8 -B rota_osm.py
import json, os, math, heapq, bisect

D = r"C:\projetos\alpha-point\midia\_pautas\video-8\cetico-terra-do-fogo\osm"
AQUI = os.path.dirname(os.path.abspath(__file__))
R = 6371.0088
MI = 1.609344

def hav(a, b):  # a, b = (lat, lon)
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

est = json.load(open(os.path.join(D, "estradas.json"), encoding="utf-8"))
nos = {e["id"]: (e["lat"], e["lon"]) for e in est["elements"] if e["type"] == "node"}
vias = [e for e in est["elements"] if e["type"] == "way"]
tags_via = {v["id"]: v.get("tags", {}) for v in vias}

out = []
def pr(*a):
    s = " ".join(str(x) for x in a); print(s); out.append(s)

# ---------- a fronteira terrestre do OSM ----------
fr = json.load(open(os.path.join(D, "fronteira.json"), encoding="utf-8"))
ilha, cont = [], []
for e in fr["elements"]:
    if e.get("tags", {}).get("maritime") == "yes":
        continue
    g = [(p["lat"], p["lon"]) for p in e.get("geometry", [])]
    for p in g:
        (ilha if p[0] < -52.655 else cont).append(p)
ilha.sort(); cont.sort(key=lambda p: p[1])
il_lat = [p[0] for p in ilha]; ct_lon = [p[1] for p in cont]
def lon_fronteira_ilha(lat):
    i = min(max(bisect.bisect_left(il_lat, lat), 1), len(ilha) - 1)
    (a, la), (b, lb) = ilha[i - 1], ilha[i]
    return la if b == a else la + (lb - la) * (lat - a) / (b - a)
def lat_fronteira_cont(lon):
    i = min(max(bisect.bisect_left(ct_lon, lon), 1), len(cont) - 1)
    (a, la), (b, lb) = (cont[i - 1][1], cont[i - 1][0]), (cont[i][1], cont[i][0])
    return la if b == a else la + (lb - la) * (lon - a) / (b - a)
pr("# fronteira terrestre: %d pontos na ilha (lon %.5f a %.5f), %d no continente" % (len(ilha), min(p[1] for p in ilha), max(p[1] for p in ilha), len(cont)))

# a costa sul do estreito, grosseira: tudo ao sul de -52,40 e a oeste de -68,6 entre a balsa e a ilha é "ilha" se lat < costa
def pais(p, eh_balsa=False):
    lat, lon = p
    if eh_balsa:
        return "CL"
    if lat < -52.655 or (lat < -52.47 and lon > -69.70):  # a Isla Grande (a balsa desembarca em Bahía Azul, lat -52,495)
        return "CL" if lon < lon_fronteira_ilha(max(lat, -54.95)) else "AR"
    return "CL" if lat < lat_fronteira_cont(lon) else "AR"

# ---------- o grafo ----------
CLASSES_PRINC = {"motorway", "motorway_link", "trunk", "trunk_link", "primary", "primary_link", "secondary", "secondary_link"}
P = {"riogallegos": (-51.6230, -69.2168), "ushuaia": (-54.8069, -68.3073)}

def monta(modo):
    adj = {}; info = {}
    for v in vias:
        t = v.get("tags", {})
        nd = [n for n in v["nodes"] if n in nos]
        eh_balsa = t.get("route") == "ferry"
        hw = t.get("highway", "")
        perto_ponta = any(min(hav(nos[n], P[k]) for k in P) < 6 for n in nd[:: max(1, len(nd) // 5)] + nd[-1:])
        if modo == "principais" and not eh_balsa and hw not in CLASSES_PRINC and not perto_ponta:
            continue
        mao = t.get("oneway") in ("yes", "1") and not eh_balsa
        for a, b in zip(nd, nd[1:]):
            w = hav(nos[a], nos[b])
            adj.setdefault(a, []).append((b, w)); info[(a, b)] = v["id"]
            if not mao:
                adj.setdefault(b, []).append((a, w)); info[(b, a)] = v["id"]
    # as pontas de balsa que não tocam estrada: liga ao nó de estrada mais perto (até 1,5 km)
    estrada = {n for v in vias if v.get("tags", {}).get("route") != "ferry" for n in v["nodes"] if n in adj}
    for v in vias:
        if v.get("tags", {}).get("route") != "ferry":
            continue
        nd = [n for n in v["nodes"] if n in nos]
        for ponta in (nd[0], nd[-1]):
            if ponta in estrada:
                continue
            best, bd = None, 1e9
            for n in estrada:
                q = nos[n]
                if abs(q[0] - nos[ponta][0]) < 0.02 and abs(q[1] - nos[ponta][1]) < 0.03:
                    d = hav(q, nos[ponta])
                    if d < bd:
                        best, bd = n, d
            if best is not None and bd <= 1.5:
                adj.setdefault(ponta, []).append((best, bd)); adj.setdefault(best, []).append((ponta, bd))
                info[(ponta, best)] = info[(best, ponta)] = "conector-balsa"
    return adj, info

def perto(p, adj):
    best, bd = None, 1e9
    for n in adj:
        q = nos[n]
        if abs(q[0] - p[0]) < 0.02 and abs(q[1] - p[1]) < 0.03:
            d = hav(p, q)
            if d < bd:
                best, bd = n, d
    return best

def dijkstra(adj, o, dst):
    dist = {o: 0.0}; ant = {}; pq = [(0.0, o)]
    while pq:
        d, u = heapq.heappop(pq)
        if u == dst:
            break
        if d > dist.get(u, 1e18):
            continue
        for v, w in adj.get(u, []):
            nd = d + w
            if nd < dist.get(v, 1e18):
                dist[v] = nd; ant[v] = u; heapq.heappush(pq, (nd, v))
    if dst not in dist:
        return None
    cam = [dst]
    while cam[-1] != o:
        cam.append(ant[cam[-1]])
    return cam[::-1]

def analisa(cam, info, nome):
    soma = {"AR": 0.0, "CL": 0.0}
    total = 0.0
    trechos = []  # [pais, km, de_km]
    balsa_km = 0.0
    for a, b in zip(cam, cam[1:]):
        vid = info.get((a, b))
        eh_balsa = isinstance(vid, int) and tags_via.get(vid, {}).get("route") == "ferry"
        pa, pb = nos[a], nos[b]
        w = hav(pa, pb)
        # subdivide o segmento em pedaços de ~50 m para achar a troca de país com precisão
        k = max(1, int(w / 0.05))
        for i in range(k):
            m = (pa[0] + (pb[0] - pa[0]) * (i + 0.5) / k, pa[1] + (pb[1] - pa[1]) * (i + 0.5) / k)
            c = pais(m, eh_balsa)
            soma[c] += w / k
            if not trechos or trechos[-1][0] != c:
                trechos.append([c, 0.0, total + w * i / k])
            trechos[-1][1] += w / k
        if eh_balsa:
            balsa_km += w
        total += w
    pr("\n## %s: %.1f km = %.1f mi" % (nome, total, total / MI))
    for c, km, de in trechos:
        pr("   %s: %.1f km = %.1f mi (do km %.1f ao km %.1f)" % (c, km, km / MI, de, de + km))
    for c in ("AR", "CL"):
        pr("   TOTAL %s: %.1f km = %.1f mi (%.1f %%)" % (c, soma[c], soma[c] / MI, 100 * soma[c] / total))
    pr("   balsa: %.2f km" % balsa_km)
    refs = []
    for a, b in zip(cam, cam[1:]):
        vid = info.get((a, b)); t = tags_via.get(vid, {}) if isinstance(vid, int) else {}
        r = t.get("ref") or t.get("name") or ("" if not isinstance(vid, str) else vid)
        if r and (not refs or refs[-1] != r):
            refs.append(r)
    pr("   vias, em ordem:", " > ".join(refs))
    return total, soma, trechos

resultado = {}
for modo in ("principais", "todas"):
    adj, info = monta(modo)
    o, dst = perto(P["riogallegos"], adj), perto(P["ushuaia"], adj)
    cam = dijkstra(adj, o, dst)
    if not cam:
        pr("\n## modo %s: SEM CAMINHO" % modo); continue
    resultado[modo] = analisa(cam, info, "Río Gallegos -> Ushuaia, modo '%s'" % modo)
    geo = {"type": "FeatureCollection", "features": [{"type": "Feature",
           "properties": {"nome": "Río Gallegos–Ushuaia (OSM, menor distância, modo %s)" % modo, "fonte": "© OpenStreetMap contributors (ODbL)"},
           "geometry": {"type": "LineString", "coordinates": [[round(nos[n][1], 5), round(nos[n][0], 5)] for n in cam]}}]}
    json.dump(geo, open(os.path.join(AQUI, "rota-rio-gallegos-ushuaia-osm-%s.geojson" % modo), "w", encoding="utf-8"))

# a linha reta da ilha: do Hito I-I (Cabo Espíritu Santo) ao último hito no Beagle (OSM, marcos.json)
m = json.load(open(os.path.join(D, "marcos.json"), encoding="utf-8"))
hit = {e.get("tags", {}).get("ref"): (e["lat"], e["lon"]) for e in m["elements"] if e.get("tags", {}).get("ref", "").startswith("I-")}
if "I-I" in hit and "I-XXVI" in hit:
    a, b = hit["I-I"], hit["I-XXVI"]
    d = hav(a, b)
    pr("\n## a linha da ilha: Hito I-I (%.5f, %.5f) a Hito I-XXVI (%.5f, %.5f): %.1f km = %.1f mi" % (a[0], a[1], b[0], b[1], d, d / MI))
    lons = [p[1] for k, p in hit.items()]
    pr("   longitude dos %d hitos 'I-' no OSM: de %.5f a %.5f (média %.5f = 68°%05.2f' W)" % (len(lons), min(lons), max(lons), sum(lons) / len(lons), (-(sum(lons) / len(lons)) - 68) * 60))
    t_lon = -(68 + 34 / 60)
    for k in ("I-I", "I-X", "I-XXVI"):
        if k in hit:
            p = hit[k]
            pr("   %s: %.5f, a %.2f km a oeste do 68°34' do tratado de 1881" % (k, p[1], hav((p[0], p[1]), (p[0], t_lon))))
    d1984 = -(68 + 36 / 60 + 38.5 / 3600)
    pr("   o 68°36'38,5\" do tratado de 1984 = %.5f" % d1984)

open(os.path.join(AQUI, "rota-osm-saida.txt"), "w", encoding="utf-8").write("\n".join(out) + "\n")
