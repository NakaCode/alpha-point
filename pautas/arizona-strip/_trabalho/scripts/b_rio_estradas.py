# b_rio_estradas.py (leitor B, 18/11/2026): parte 2 do b_rio_medir.py. Lê o eixo já medido (rio-medida.json) e pergunta ao TIGERweb
# (Census, camadas de estradas) quais estradas chegam a 500 m do eixo e quais o CRUZAM (interseção de segmentos).
import json, math, time, urllib.parse, urllib.request, os
PASTA = r"C:/projetos/alpha-point/midia/arizona-strip/fontes/b"
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
KM_MI = 1.609344
def hav_km(a, b):
    R = 6371.0088
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))
_m = json.load(open(os.path.join(PASTA, 'rio-medida.json')))
linha = _m['linha']; cum = _m['cum_km']
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
             'outFields': 'OBJECTID,NAME,BASENAME,MTFCC,OID,RTTYP', 'returnGeometry': 'true', 'f': 'json', 'resultRecordCount': '2000'}
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
