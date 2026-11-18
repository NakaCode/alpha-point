# b_rota_tiger.py (leitor B, 18/11/2026): mede de novo, sobre a geometria de estradas do Census (TIGERweb, domínio público), as duas rotas do cético
# (Colorado City -> Kingman, a mais rápida e a só-pelo-Arizona). NÃO usa o OSRM: o corredor sai dos pontos já gravados pelo cético
# (rotas-cc_kingman*.json, só como mapa do caminho), cada trecho recebe uma faixa de 8 km, as estradas primárias e secundárias do TIGERweb
# dentro da faixa viram um grafo e o caminho MAIS CURTO entre os dois extremos é medido. Um pedido por vez, User-Agent do canal.
# Saída: rota-tiger-<nome>.json em midia/arizona-strip/fontes/b/ e o resumo no terminal.
import json, math, time, heapq, collections, urllib.parse, urllib.request, os, sys

PASTA = r'C:/projetos/alpha-point/midia/arizona-strip/fontes/b'
CET = r'C:/projetos/alpha-point/out/_pautas/video-8/_trabalho/cetico-arizona-strip'
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
MI = 1.609344
BASE = 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Transportation/MapServer/%d/query'

def hav_km(a, b):
    R = 6371.0088
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

def baixar(nome, arq_rota):
    saida = os.path.join(PASTA, 'rota-tiger-%s-estradas.json' % nome)
    if os.path.exists(saida):
        return json.load(open(saida, encoding='utf-8'))
    pts = json.load(open(os.path.join(CET, arq_rota), encoding='utf-8'))['routes'][0]['geometry']['coordinates']
    achadas = {}
    for cam in (2, 6):
        for i in range(len(pts) - 1):
            geom = json.dumps({'paths': [[[round(pts[i][0], 5), round(pts[i][1], 5)], [round(pts[i + 1][0], 5), round(pts[i + 1][1], 5)]]], 'spatialReference': {'wkid': 4326}})
            off = 0
            while True:
                q = {'where': '1=1', 'geometry': geom, 'geometryType': 'esriGeometryPolyline', 'inSR': '4326', 'outSR': '4326',
                     'spatialRel': 'esriSpatialRelIntersects', 'distance': '8000', 'units': 'esriSRUnit_Meter',
                     'outFields': 'OBJECTID,OID,NAME,MTFCC,RTTYP', 'returnGeometry': 'true', 'f': 'json',
                     'resultOffset': str(off), 'resultRecordCount': '1000'}
                req = urllib.request.Request(BASE % cam + '?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
                try:
                    d = json.load(urllib.request.urlopen(req, timeout=300))
                except Exception as e:
                    print('erro', cam, i, e); time.sleep(4); break
                if 'error' in d:
                    print('erro API', cam, i, d['error']); break
                for ft in d.get('features', []):
                    a = ft['attributes']
                    achadas[(cam, a.get('OID') or a.get('OBJECTID'))] = {'NAME': a.get('NAME'), 'MTFCC': a.get('MTFCC'), 'paths': ft['geometry']['paths']}
                time.sleep(1.0)
                if d.get('exceededTransferLimit'):
                    off += len(d.get('features', []))
                    continue
                break
        print(nome, 'camada', cam, 'acumulado', len(achadas), flush=True)
    lista = [{'k': '%d:%s' % k, **v} for k, v in achadas.items()]
    json.dump({'_lido_em': time.strftime('%Y-%m-%d %H:%M:%S'), 'features': lista}, open(saida, 'w', encoding='utf-8'))
    return {'features': lista}

def estado_poly():
    EST = []
    for ft in json.load(open(os.path.join(CET, 'estados-geom.json'), encoding='utf-8'))['features']:
        EST.append((ft['attributes']['NAME'], ft['geometry']['rings']))
    return EST

def anel(x, y, aneis):
    c = False
    for r in aneis:
        n = len(r); j = n - 1
        for i in range(n):
            xi, yi = r[i]; xj, yj = r[j]
            if ((yi > y) != (yj > y)) and (x < (xj - xi) * (y - yi) / (yj - yi + 1e-15) + xi):
                c = not c
            j = i
    return c

def medir(nome, dados, A, B):
    adj = collections.defaultdict(list); chaves = {}
    def ch(p): return (round(p[0], 5), round(p[1], 5))
    for f in dados['features']:
        for p in f['paths']:
            if len(p) < 2: continue
            km = sum(hav_km(p[i], p[i + 1]) for i in range(len(p) - 1))
            a, b = ch(p[0]), ch(p[-1])
            adj[a].append((b, km, f['NAME'], f['MTFCC'], p)); adj[b].append((a, km, f['NAME'], f['MTFCC'], p[::-1]))
    nos = list(adj.keys())
    print(nome, 'nós', len(nos))
    s = min(nos, key=lambda n: hav_km(n, A)); t = min(nos, key=lambda n: hav_km(n, B))
    print('  início: nó a %.2f km do ponto pedido; fim: nó a %.2f km' % (hav_km(s, A), hav_km(t, B)), s, t)
    dist = {s: 0.0}; prev = {}; h = [(0.0, s)]
    while h:
        d, u = heapq.heappop(h)
        if u == t: break
        if d > dist.get(u, 1e18): continue
        for (v, km, nm, mt, p) in adj[u]:
            nd = d + km
            if nd < dist.get(v, 1e18):
                dist[v] = nd; prev[v] = (u, nm, mt, p, km); heapq.heappush(h, (nd, v))
    if t not in dist:
        print('  SEM CAMINHO'); return None
    cam = []; u = t
    while u != s:
        pu, nm, mt, p, km = prev[u]; cam.append((nm, mt, p, km)); u = pu
    cam.reverse()
    tot = dist[t]
    print('  caminho mais curto no grafo do TIGERweb: %.2f km = %.2f mi, %d trechos' % (tot, tot / MI, len(cam)))
    # por estado e por nome de estrada
    EST = estado_poly(); por_est = collections.Counter(); por_nome = collections.OrderedDict()
    for nm, mt, p, km in cam:
        for i in range(len(p) - 1):
            seg = hav_km(p[i], p[i + 1]); mx, my = (p[i][0] + p[i + 1][0]) / 2, (p[i][1] + p[i + 1][1]) / 2
            e = next((n for n, r in EST if anel(mx, my, r)), 'outro'); por_est[e] += seg
        k = (nm or '(sem nome)')
        por_nome[k] = por_nome.get(k, 0) + km
    print('  por estado (mi):', {k: round(v / MI, 1) for k, v in por_est.most_common()})
    # sequência de nomes, juntando vizinhos
    seq = []
    for nm, mt, p, km in cam:
        k = nm or '(sem nome)'
        if seq and seq[-1][0] == k: seq[-1][1] += km
        else: seq.append([k, km])
    print('  sequência (mi):', [(k, round(v / MI, 1)) for k, v in seq if v / MI >= 0.5])
    json.dump({'km': tot, 'mi': tot / MI, 'por_estado_mi': {k: v / MI for k, v in por_est.items()}, 'sequencia_mi': [(k, v / MI) for k, v in seq]},
              open(os.path.join(PASTA, 'rota-tiger-%s-resultado.json' % nome), 'w'), indent=1)
    return tot / MI

CC = (-112.9758, 36.9906); KM = (-114.0516, 35.1908)
ROTAS = [('cc_kingman', 'rotas-cc_kingman.json'), ('cc_kingman_so_az', 'rotas-cc_kingman_so_az.json')]
alvo = sys.argv[1:] or [r[0] for r in ROTAS]
for nome, arq in ROTAS:
    if nome in alvo:
        medir(nome, baixar(nome, arq), CC, KM)
