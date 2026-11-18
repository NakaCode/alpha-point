# b_rio_depurar.py: acha onde o grafo do Colorado quebra (leitor B)
import json, os, math, collections
PASTA = r'C:\projetos\alpha-point\midia\arizona-strip\fontes\b'
def chave(p): return (round(p[0], 5), round(p[1], 5))
def hav_km(a, b):
    R = 6371.0088
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))
feats = {}
for nome in ('nhd-colorado.json', 'nhd-lacuna.json', 'nhd-glen.json'):
    for f in json.load(open(os.path.join(PASTA, nome), encoding='utf-8'))['features']:
        feats[f['attributes']['permanent_identifier']] = f
E = []
for pid, f in feats.items():
    pts = [q for p in f['geometry']['paths'] for q in p]
    E.append((chave(pts[0]), chave(pts[-1]), pid, f['attributes']['gnis_name'], f['attributes']['flowdir']))
viz = collections.defaultdict(list)
for i, e in enumerate(E):
    viz[e[0]].append(i); viz[e[1]].append(i)
visto = set(); comps = []
for i in range(len(E)):
    if i in visto: continue
    st = [i]; visto.add(i); c = []
    while st:
        j = st.pop(); c.append(j)
        for n in (E[j][0], E[j][1]):
            for k in viz[n]:
                if k not in visto: visto.add(k); st.append(k)
    comps.append(c)
comps.sort(key=len, reverse=True)
for c in comps[:6]:
    xs = [E[j][0][0] for j in c] + [E[j][1][0] for j in c]; ys = [E[j][0][1] for j in c] + [E[j][1][1] for j in c]
    nm = collections.Counter(E[j][3] for j in c).most_common(3)
    print(len(c), 'lon %.3f..%.3f lat %.3f..%.3f' % (min(xs), max(xs), min(ys), max(ys)), nm)
# pontas soltas (grau 1) nas 3 maiores componentes
for c in comps[:4]:
    g = collections.Counter()
    for j in c: g[E[j][0]] += 1; g[E[j][1]] += 1
    print('pontas soltas:', [n for n, v in g.items() if v == 1][:12])
# distância entre pontas soltas de componentes diferentes
