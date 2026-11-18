# Cético arizona-strip (17/11/2026): as rotas de carro das cidades da Strip às sedes de condado e à capital.
# Motor de rota: o servidor de demonstração do OSRM (router.project-osrm.org, dados do OpenStreetMap), um pedido por vez,
# com pausa de 1,5 s e o User-Agent do canal (política do servidor: uso razoável, até 1 pedido por segundo).
# Os estados de cada trecho saem dos polígonos do Censo 2020 (TIGERweb, estados-geom.json, nesta pasta).
# Uso: python -X utf8 -B rotas.py   (grava rotas-<nome>.json e rotas-resumo.tsv nesta pasta; se o .json existir, não pede de novo)
import json, os, time, math, urllib.request

AQUI = os.path.dirname(os.path.abspath(__file__))
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'

P = {
    'colorado_city': (-112.9758, 36.9906),        # centro da cidade (Central St.)
    'fredonia': (-112.5265, 36.9455),
    'beaver_dam': (-113.9324, 36.8987),
    'kingman_tribunal': (-114.0516, 35.1908),     # sede de Mohave (centro de Kingman)
    'flagstaff_tribunal': (-111.6477, 35.1993),   # sede de Coconino (centro de Flagstaff)
    'phoenix_capitolio': (-112.0970, 33.4482),
    'st_george': (-113.5841, 37.1041),
    'kanab': (-112.5263, 37.0475),
    'navajo_bridge': (-111.6318, 36.8176),
    'cameron': (-111.4130, 35.8756),
    'north_rim': (-112.0551, 36.1981),           # Grand Canyon Lodge, North Rim
    'south_rim': (-112.1401, 36.0579),           # Grand Canyon Village, South Rim
}

ROTAS = [
    ('cc_kingman', ['colorado_city', 'kingman_tribunal']),
    ('cc_kingman_so_az', ['colorado_city', 'fredonia', 'navajo_bridge', 'cameron', 'flagstaff_tribunal', 'kingman_tribunal']),
    ('cc_phoenix', ['colorado_city', 'phoenix_capitolio']),
    ('fredonia_flagstaff', ['fredonia', 'flagstaff_tribunal']),
    ('fredonia_phoenix', ['fredonia', 'phoenix_capitolio']),
    ('beaverdam_kingman', ['beaver_dam', 'kingman_tribunal']),
    ('beaverdam_phoenix', ['beaver_dam', 'phoenix_capitolio']),
    ('cc_st_george', ['colorado_city', 'st_george']),
    ('fredonia_kanab', ['fredonia', 'kanab']),
    ('north_south_rim', ['north_rim', 'south_rim']),
]

def anel_contem(x, y, aneis):
    c = False
    for anel in aneis:
        n = len(anel); j = n - 1
        for i in range(n):
            xi, yi = anel[i]; xj, yj = anel[j]
            if ((yi > y) != (yj > y)) and (x < (xj - xi) * (y - yi) / (yj - yi + 1e-15) + xi):
                c = not c
            j = i
    return c

with open(os.path.join(AQUI, 'estados-geom.json'), encoding='utf-8') as f:
    EST = [(ft['attributes']['NAME'], ft['geometry']['rings']) for ft in json.load(f)['features']]

def estado(x, y):
    for n, r in EST:
        if anel_contem(x, y, r):
            return n
    return 'outro'

def hav(a, b):
    R = 3958.7613  # milhas
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

def pede(nome, pontos):
    arq = os.path.join(AQUI, 'rotas-%s.json' % nome)
    if os.path.exists(arq):
        with open(arq, encoding='utf-8') as f:
            return json.load(f)
    coords = ';'.join('%.5f,%.5f' % P[p] for p in pontos)
    url = 'https://router.project-osrm.org/route/v1/driving/%s?overview=simplified&geometries=geojson&steps=false&alternatives=false' % coords
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=180) as r:
        d = json.load(r)
    d['_url'] = url
    d['_lido_em'] = time.strftime('%Y-%m-%d %H:%M:%S')
    with open(arq, 'w', encoding='utf-8') as f:
        json.dump(d, f)
    time.sleep(1.5)
    return d

linhas = ['rota\tmilhas\thoras\tsequencia_de_estados\tmilhas_por_estado\tlinha_reta_mi']
for nome, pts in ROTAS:
    d = pede(nome, pts)
    if d.get('code') != 'Ok':
        linhas.append('%s\tERRO %s' % (nome, d.get('code')))
        continue
    rt = d['routes'][0]
    mi = rt['distance'] / 1609.344
    h = rt['duration'] / 3600
    co = rt['geometry']['coordinates']
    seq, por = [], {}
    for i in range(len(co) - 1):
        a, b = co[i], co[i + 1]
        m = ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2)
        e = estado(*m)
        por[e] = por.get(e, 0) + hav(a, b)
        if not seq or seq[-1] != e:
            seq.append(e)
    # trechos de menos de 0,5 mi não contam como "passar por" um estado (ruído de borda)
    seq2 = []
    reta = hav(P[pts[0]], P[pts[-1]])
    linhas.append('%s\t%.1f\t%.2f\t%s\t%s\t%.1f' % (nome, mi, h, ' > '.join(seq),
                  '; '.join('%s %.1f' % (k, v) for k, v in sorted(por.items(), key=lambda t: -t[1])), reta))
with open(os.path.join(AQUI, 'rotas-resumo.tsv'), 'w', encoding='utf-8') as f:
    f.write('\n'.join(linhas) + '\n')
print('\n'.join(linhas))
