# b_rio_medir.py (leitor B, 18/11/2026)
# 1) costura o eixo do Colorado (NHD, USGS) da barragem Glen Canyon até a Hoover Dam e mede o comprimento (caminho mais curto, sentido do fluxo);
# 2) pergunta ao TIGERweb (Census, camadas de estradas) quais estradas chegam a 500 m do eixo e quais o CRUZAM de verdade
#    (interseção de segmentos), para listar as pontes e provar que não há outra entre a Navajo Bridge e a Hoover Dam.
# Entradas (já baixadas): nhd-colorado.json, nhd-lacuna.json, nhd-glen.json em midia/arizona-strip/fontes/b/
# Um pedido por vez ao TIGERweb, User-Agent do canal. Grava rio-medida.json e rio-estradas.json no mesmo lugar.
import json, math, heapq, collections, time, urllib.parse, urllib.request, os

PASTA = r'C:\projetos\alpha-point\midia\arizona-strip\fontes\b'
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
KM_MI = 1.609344

def hav_km(a, b):
    R = 6371.0088
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

def chave(p): return (round(p[0], 5), round(p[1], 5))

# ---------- 1) o grafo
feats = {}
for nome in ('nhd-colorado.json', 'nhd-lacuna.json', 'nhd-glen.json'):
    for f in json.load(open(os.path.join(PASTA, nome), encoding='utf-8'))['features']:
        feats[f['attributes']['permanent_identifier']] = f
# da lacuna só entram os caminhos que ligam algo do rio: o Dijkstra dirigido resolve isso sozinho
adj = collections.defaultdict(list)   # no -> [(no2, km, id)]
pts_de = {}
for pid, f in feats.items():
    pts = [q for p in f['geometry']['paths'] for q in p]
    km = sum(hav_km(pts[i], pts[i + 1]) for i in range(len(pts) - 1))
    a, b = chave(pts[0]), chave(pts[-1])
    adj[a].append((b, km, pid)); pts_de[pid] = pts
print('trechos no grafo', len(feats), 'nós', len(adj))
nos = set(adj.keys()) | {b for v in adj.values() for (b, _, _) in v}

def mais_perto(lon, lat):
    return min(nos, key=lambda n: hav_km(n, (lon, lat)))

def dijkstra(origem, destino):
    dist = {origem: 0.0}; prev = {}
    h = [(0.0, origem)]
    while h:
        d, u = heapq.heappop(h)
        if u == destino: break
        if d > dist.get(u, 1e18): continue
        for (v, km, pid) in adj.get(u, []):
            nd = d + km
            if nd < dist.get(v, 1e18):
                dist[v] = nd; prev[v] = (u, pid); heapq.heappush(h, (nd, v))
    if destino not in dist: return None
    cam = []; u = destino
    while u != origem:
        p, pid = prev[u]; cam.append(pid); u = p
    return dist[destino], list(reversed(cam))

# pontos de referência (aproximados; servem só para escolher o nó do eixo mais perto)
REF = {
    'glen_canyon_dam': (-111.4836, 36.9370),
    'lees_ferry': (-111.5885, 36.8647),
    'hoover_dam': (-114.7377, 36.0160),
}
O = mais_perto(*REF['glen_canyon_dam']); D = mais_perto(*REF['hoover_dam'])
print('nó inicial', O, hav_km(O, REF['glen_canyon_dam']), 'km do ponto de referência')
print('nó final', D, hav_km(D, REF['hoover_dam']), 'km do ponto de referência')
res = dijkstra(O, D)
if res is None:
    print('SEM CAMINHO'); raise SystemExit
tot, cam = res
print('comprimento do eixo, barragem Glen Canyon -> Hoover Dam: %.2f km = %.2f mi, %d trechos' % (tot, tot / KM_MI, len(cam)))
linha = []
for pid in cam:
    for q in pts_de[pid]:
        if not linha or linha[-1] != q: linha.append(q)
cum = [0.0]
for i in range(1, len(linha)): cum.append(cum[-1] + hav_km(linha[i - 1], linha[i]))
print('vértices', len(linha), 'soma pelos vértices %.2f km' % cum[-1])

def pos_no_eixo(lon, lat):
    # projeta no vértice mais perto (basta: vértices ~ dezenas de metros) e devolve (km desde a barragem, distância ao eixo em km)
    i = min(range(len(linha)), key=lambda k: hav_km(linha[k], (lon, lat)))
    return cum[i], hav_km(linha[i], (lon, lat)), linha[i]

for k, (lo, la) in REF.items():
    c, dd, p = pos_no_eixo(lo, la)
    print('  %-16s km %.2f (mi %.2f) a %.2f km do eixo' % (k, c, c / KM_MI, dd))
json.dump({'linha': linha, 'cum_km': cum, 'total_km': tot}, open(os.path.join(PASTA, 'rio-medida.json'), 'w'))

# ---------- 2) as estradas (TIGERweb)
CAM = {2: 'Primary Roads', 6: 'Secondary Roads 72_1k', 8: 'Local Roads 42000'}
BASE = 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Transportation/MapServer/%d/query'
# pedaços de ~12 km do eixo, decimados a <= 50 vértices
pedacos = []; ini = 0
for i in range(1, len(linha)):
    if cum[i] - cum[ini] >= 12.0 or i == len(linha) - 1:
        seg = linha[ini:i + 1]
        passo = max(1, len(seg) // 50)
        s2 = seg[::passo]
        if s2[-1] != seg[-1]: s2.append(seg[-1])
        pedacos.append((cum[ini], cum[i], s2)); ini = i
print('pedaços para consultar', len(pedacos))
achadas = {}
for cam_id in CAM:
    for k, (c0, c1, s2) in enumerate(pedacos):
        geom = json.dumps({'paths': [[[round(x, 5), round(y, 5)] for x, y in s2]], 'spatialReference': {'wkid': 4326}})
        q = {'where': '1=1', 'geometry': geom, 'geometryType': 'esriGeometryPolyline', 'inSR': '4326', 'outSR': '4326',
             'spatialRel': 'esriSpatialRelIntersects', 'distance': '500', 'units': 'esriSRUnit_Meter',
             'outFields': 'OBJECTID,NAME,BASENAME,MTFCC,OID,LENGTH', 'returnGeometry': 'true', 'f': 'json', 'resultRecordCount': '2000'}
        req = urllib.request.Request(BASE % cam_id + '?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
        try:
            d = json.load(urllib.request.urlopen(req, timeout=240))
        except Exception as e:
            print('erro', cam_id, k, e); time.sleep(3); continue
        if 'error' in d:
            print('erro da API', cam_id, k, d['error']); continue
        for ft in d.get('features', []):
            at = ft['attributes']
            achadas[(cam_id, at.get('OID') or at.get('OBJECTID'))] = {'camada': CAM[cam_id], 'attrs': at, 'paths': ft['geometry']['paths']}
        if d.get('exceededTransferLimit'): print('  excedeu em', cam_id, k)
        time.sleep(1.2)
    print('camada', cam_id, CAM[cam_id], 'acumulado', len(achadas))

# ---------- cruzamento de verdade
def seg_inter(p1, p2, p3, p4):
    def o(a, b, c): return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
    d1 = o(p3, p4, p1); d2 = o(p3, p4, p2); d3 = o(p1, p2, p3); d4 = o(p1, p2, p4)
    return (d1 * d2 < 0) and (d3 * d4 < 0)

res_est = []
for key, r in achadas.items():
    cruz = []; dmin = 1e9
    rpts = [q for p in r['paths'] for q in p]
    # distância mínima (vértice a vértice, aproximada) e cruzamentos
    for p in r['paths']:
        for i in range(len(p) - 1):
            a, b = p[i], p[i + 1]
            for j in range(len(linha) - 1):
                c, d_ = linha[j], linha[j + 1]
                if abs(a[0] - c[0]) > 0.02 and abs(b[0] - c[0]) > 0.02 and abs(a[0] - d_[0]) > 0.02: continue
                if seg_inter(a, b, c, d_):
                    cruz.append(cum[j])
    for q in rpts:
        i = min(range(len(linha)), key=lambda k: abs(linha[k][0] - q[0]) + abs(linha[k][1] - q[1]))
        dmin = min(dmin, hav_km(q, linha[i]))
    res_est.append({'camada': r['camada'], 'NAME': r['attrs'].get('NAME'), 'MTFCC': r['attrs'].get('MTFCC'), 'cruza_km': sorted(set(round(x, 2) for x in cruz)), 'dist_min_km': round(dmin, 3)})
json.dump(res_est, open(os.path.join(PASTA, 'rio-estradas.json'), 'w'), indent=1)
print('--- estradas que CRUZAM o eixo:')
for r in sorted(res_est, key=lambda r: (r['cruza_km'] or [999])[0]):
    if r['cruza_km']:
        print('  ', r['NAME'], r['MTFCC'], r['camada'], 'km', r['cruza_km'], 'mi', [round(x / KM_MI, 1) for x in r['cruza_km']])
print('--- estradas a menos de 150 m do eixo que NÃO cruzam (amostra):')
n = 0
for r in sorted(res_est, key=lambda r: r['dist_min_km']):
    if not r['cruza_km'] and r['dist_min_km'] < 0.15:
        print('  ', r['NAME'], r['MTFCC'], r['camada'], r['dist_min_km'], 'km'); n += 1
        if n >= 25: break
