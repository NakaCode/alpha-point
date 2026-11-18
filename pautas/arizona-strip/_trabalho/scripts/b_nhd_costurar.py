# b_nhd_costurar.py: costura os trechos do NHD pelas pontas (grafo dirigido, sentido do fluxo), acha as componentes
# e mede o caminho mais curto entre dois pontos (leitor B, 18/11/2026).
import json, math, heapq, collections, sys

ARQ = sys.argv[1] if len(sys.argv) > 1 else r'C:\projetos\alpha-point\midia\arizona-strip\fontes\b\nhd-colorado.json'
d = json.load(open(ARQ, encoding='utf-8'))
F = d['features']

def hav_km(a, b):
    R = 6371.0088
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

def chave(p):
    return (round(p[0], 5), round(p[1], 5))

# arestas: cada trecho é uma polilinha (paths concatenados) no sentido do fluxo (flowdir=1: digitalizado a jusante)
arestas = []
for f in F:
    paths = f['geometry']['paths']
    pts = [q for p in paths for q in p]
    L = sum(hav_km(pts[i], pts[i + 1]) for i in range(len(pts) - 1))
    arestas.append({'id': f['attributes']['permanent_identifier'], 'pts': pts, 'km': L, 'nhdkm': f['attributes']['lengthkm'],
                    'a': chave(pts[0]), 'b': chave(pts[-1])})
print('trechos', len(arestas), 'soma geometria km', round(sum(e['km'] for e in arestas), 2), 'soma lengthkm', round(sum((e['nhdkm'] or 0) for e in arestas), 2))

# componentes (não dirigidas)
viz = collections.defaultdict(list)
for i, e in enumerate(arestas):
    viz[e['a']].append(i); viz[e['b']].append(i)
visto = set(); comps = []
for i in range(len(arestas)):
    if i in visto: continue
    pilha = [i]; visto.add(i); comp = []
    while pilha:
        j = pilha.pop(); comp.append(j)
        for no in (arestas[j]['a'], arestas[j]['b']):
            for k in viz[no]:
                if k not in visto:
                    visto.add(k); pilha.append(k)
    comps.append(comp)
comps.sort(key=lambda c: -sum(arestas[j]['km'] for j in c))
print('componentes', len(comps))
for c in comps[:8]:
    km = sum(arestas[j]['km'] for j in c)
    xs = [p[0] for j in c for p in arestas[j]['pts']]; ys = [p[1] for j in c for p in arestas[j]['pts']]
    print(' n=%d km=%.1f lon %.3f..%.3f lat %.3f..%.3f' % (len(c), km, min(xs), max(xs), min(ys), max(ys)))
# nós de grau 1 (pontas soltas) na maior componente
grau = collections.Counter()
for j in comps[0]:
    grau[arestas[j]['a']] += 1; grau[arestas[j]['b']] += 1
pontas = [n for n, g in grau.items() if g == 1]
print('pontas soltas da maior componente', len(pontas))
for n in pontas[:20]:
    print('  ', n)
