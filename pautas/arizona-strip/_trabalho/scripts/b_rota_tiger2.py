# b_rota_tiger2.py (leitor B, 18/11/2026): mede de novo, sobre a geometria de estradas do Census (TIGERweb, domínio público), as duas rotas do cético
# (Colorado City -> Kingman, a mais rápida e a só-pelo-Arizona). NÃO usa o OSRM nem o corredor dele: baixa em ladrilhos de 0,5 grau as vias
# interestaduais, federais e estaduais (RTTYP I, U, S) e as rampas (MTFCC S1630) das camadas "Primary Roads" (2) e "Secondary Roads" (6),
# monta um grafo, e mede o caminho mais curto entre os extremos, passando pelos pontos de via que forçam cada rota.
# Um pedido por vez, User-Agent do canal. Cache: rota-tiger2-ladrilhos.json.
import json, math, time, heapq, collections, urllib.parse, urllib.request, os, sys

PASTA = r'C:/projetos/alpha-point/midia/arizona-strip/fontes/b'
CET = r'C:/projetos/alpha-point/out/_pautas/video-8/_trabalho/cetico-arizona-strip'
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
MI = 1.609344
BASE = 'https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Transportation/MapServer/%d/query'
CACHE = os.path.join(PASTA, 'rota-tiger2-ladrilhos.json')
BBOX = (-115.40, 35.10, -111.30, 37.20)
PASSO = 0.5

def hav_km(a, b):
    R = 6371.0088
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

def baixar_ladrilhos():
    dados = json.load(open(CACHE, encoding='utf-8')) if os.path.exists(CACHE) else {'tiles': {}, 'feats': {}}
    x = BBOX[0]
    while x < BBOX[2] - 1e-9:
        y = BBOX[1]
        while y < BBOX[3] - 1e-9:
            for cam in (2, 6):
                chave = '%.2f,%.2f,%d' % (x, y, cam)
                if chave in dados['tiles']: continue
                off = 0; n = 0
                while True:
                    q = {'where': "RTTYP IN ('I','U','S') OR MTFCC='S1630' OR MTFCC='S1100'", 'geometry': '%.4f,%.4f,%.4f,%.4f' % (x, y, x + PASSO, y + PASSO),
                         'geometryType': 'esriGeometryEnvelope', 'inSR': '4326', 'outSR': '4326', 'spatialRel': 'esriSpatialRelIntersects',
                         'outFields': 'OBJECTID,OID,NAME,MTFCC,RTTYP', 'returnGeometry': 'true', 'f': 'json', 'resultOffset': str(off), 'resultRecordCount': '1000'}
                    req = urllib.request.Request(BASE % cam + '?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
                    try:
                        d = json.load(urllib.request.urlopen(req, timeout=300))
                    except Exception as e:
                        print('erro', chave, e, flush=True); time.sleep(5); break
                    if 'error' in d:
                        print('erro API', chave, d['error'], flush=True); break
                    for ft in d.get('features', []):
                        a = ft['attributes']
                        dados['feats']['%d:%s' % (cam, a.get('OID') or a.get('OBJECTID'))] = {'NAME': a.get('NAME'), 'MTFCC': a.get('MTFCC'), 'RTTYP': a.get('RTTYP'), 'paths': ft['geometry']['paths']}
                        n += 1
                    time.sleep(1.0)
                    if d.get('exceededTransferLimit'):
                        off += len(d.get('features', [])); continue
                    dados['tiles'][chave] = n; break
                print('ladrilho', chave, 'features', n, 'total', len(dados['feats']), flush=True)
                json.dump(dados, open(CACHE, 'w', encoding='utf-8'))
            y += PASSO
        x += PASSO
    return dados

def ch(p): return (round(p[0], 5), round(p[1], 5))

def grafo(dados):
    adj = collections.defaultdict(list)
    for f in dados['feats'].values():
        for p in f['paths']:
            if len(p) < 2: continue
            km = sum(hav_km(p[i], p[i + 1]) for i in range(len(p) - 1))
            a, b = ch(p[0]), ch(p[-1])
            adj[a].append((b, km, f['NAME'], f['MTFCC'], p)); adj[b].append((a, km, f['NAME'], f['MTFCC'], p[::-1]))
    return adj

def dijkstra(adj, s, t):
    dist = {s: 0.0}; prev = {}; h = [(0.0, s)]
    while h:
        d, u = heapq.heappop(h)
        if u == t: break
        if d > dist.get(u, 1e18): continue
        for (v, km, nm, mt, p) in adj[u]:
            nd = d + km
            if nd < dist.get(v, 1e18):
                dist[v] = nd; prev[v] = (u, nm, mt, p, km); heapq.heappush(h, (nd, v))
    if t not in dist: return None
    cam = []; u = t
    while u != s:
        pu, nm, mt, p, km = prev[u]; cam.append((nm, mt, p, km)); u = pu
    cam.reverse()
    return dist[t], cam

EST = [(f['attributes']['NAME'], f['geometry']['rings']) for f in json.load(open(os.path.join(CET, 'estados-geom.json'), encoding='utf-8'))['features']]
def dentro(x, y, aneis):
    c = False
    for r in aneis:
        n = len(r); j = n - 1
        for i in range(n):
            xi, yi = r[i]; xj, yj = r[j]
            if ((yi > y) != (yj > y)) and (x < (xj - xi) * (y - yi) / (yj - yi + 1e-15) + xi): c = not c
            j = i
    return c

def medir(nome, adj, pontos):
    nos = list(adj.keys())
    total = 0.0; cam_tot = []
    for A, B in zip(pontos[:-1], pontos[1:]):
        s = min(nos, key=lambda n: hav_km(n, A)); t = min(nos, key=lambda n: hav_km(n, B))
        print('  perna: nó inicial a %.2f km do ponto pedido, nó final a %.2f km' % (hav_km(s, A), hav_km(t, B)), flush=True)
        r = dijkstra(adj, s, t)
        if r is None: print('  SEM CAMINHO nesta perna', A, B); return None
        total += r[0]; cam_tot += r[1]
    por_est = collections.Counter()
    for nm, mt, p, km in cam_tot:
        for i in range(len(p) - 1):
            seg = hav_km(p[i], p[i + 1]); mx, my = (p[i][0] + p[i + 1][0]) / 2, (p[i][1] + p[i + 1][1]) / 2
            por_est[next((n for n, r in EST if dentro(mx, my, r)), 'outro')] += seg
    seq = []
    for nm, mt, p, km in cam_tot:
        k = nm or '(sem nome)'
        if seq and seq[-1][0] == k: seq[-1][1] += km
        else: seq.append([k, km])
    print(nome, ': %.1f mi (%.1f km)' % (total / MI, total))
    print('  por estado (mi):', {k: round(v / MI, 1) for k, v in por_est.most_common()})
    print('  sequência (>= 1 mi):', [(k, round(v / MI, 1)) for k, v in seq if v / MI >= 1.0])
    json.dump({'mi': total / MI, 'por_estado_mi': {k: v / MI for k, v in por_est.items()}, 'sequencia_mi': [(k, v / MI) for k, v in seq]},
              open(os.path.join(PASTA, 'rota-tiger2-%s.json' % nome), 'w'), indent=1)
    return total / MI

if __name__ == '__main__':
    dados = baixar_ladrilhos()
    adj = grafo(dados)
    print('grafo: nós', len(adj), 'features', len(dados['feats']))
    CC = (-112.9758, 36.9906); KM = (-114.0516, 35.1908)
    FRED = (-112.5265, 36.9455); NBR = (-111.6308, 36.8182); CAM = (-111.4130, 35.8756); FLAG = (-111.6477, 35.1993)
    HURR = (-113.2900, 37.1750)
    medir('cc_kingman_mais_curta', adj, [CC, KM])
    medir('cc_kingman_so_az', adj, [CC, FRED, NBR, CAM, FLAG, KM])
    medir('cc_stgeorge_i15', adj, [CC, (-113.5841, 37.1041)])
    medir('northrim_southrim_via_navajo', adj, [(-112.0551, 36.1981), (-112.1401, 36.0579)])
