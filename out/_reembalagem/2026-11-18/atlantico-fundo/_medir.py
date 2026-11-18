"""Medidas do cético da reembalagem do vídeo 4 (atlantico-fundo). Sem rede; só lê o disco.

    python -X utf8 -B out/_reembalagem/2026-11-18/atlantico-fundo/_medir.py      (da raiz do canal)

1. os caracteres de cada título;
2. o segundo em que a voz diz cada coisa que um título promete (out/atlantico-fundo/words.json);
3. a geografia dos conceitos novos: o ponto mais fundo dentro da zona dos EUA, fora da cunha disputada, dentro das isóbatas;
   as caixas das isóbatas; e onde cada ponto cai em dois quadros Mercator 16:9 propostos.
"""
import json, math, os

RAIZ = os.getcwd()
GEO = os.path.join(RAIZ, "out", "atlantico-fundo", "_media", "geo")

TITULOS = [
    "The Deepest Point in the Atlantic Ocean",
    "The Deepest Point in the Atlantic Ocean Is Only 83 Miles From a U.S. Island",
    "What If Mount Everest Sat at the Bottom of the Atlantic?",
    "A 1964 Crew Counted 200 Fish Deep in the Atlantic. In 2019, None.",
    "The Atlantic Is Too Shallow to Hide Mount Everest",
    "The Deepest Point in the Atlantic Is Off a U.S. Island",
    "Nobody Reached the Atlantic's Deepest Point Until 2018",
    "The Atlantic's Answer to the Mariana Trench",
]
print("== caracteres")
for t in TITULOS:
    print(f"{len(t):3d}  {t}")

print("\n== a voz (words.json)")
words = json.load(open(os.path.join(RAIZ, "out", "atlantico-fundo", "words.json"), encoding="utf-8"))
toks = [(w["w"], w["start"]) for w in words if "w" in w]
def acha(seq, n=3):
    seq = [s.lower() for s in seq]
    achados = []
    for i in range(len(toks) - len(seq) + 1):
        ok = all(toks[i + k][0].lower().strip('.,;:!?"“”') .startswith(seq[k]) for k in range(len(seq)))
        if ok:
            achados.append(round(toks[i][1], 1))
    return achados[:n]
for frase in [["deepest", "point", "in", "the", "atlantic"], ["Stand", "Mount", "Everest"], ["you", "think", "Mariana"],
              ["In", "nineteen", "sixty-four"], ["It", "saw", "none"], ["only", "in", "December"], ["more", "than", "one", "thousand"],
              ["some", "two", "hundred"], ["about", "two", "hundred"], ["sea", "cucumbers"], ["U.S.", "waters"], ["first", "person"],
              ["Keep", "those", "fish"], ["So", "what", "is", "really"]]:
    print(f"{' '.join(frase):35s} {acha(frase)}")
print("fim da fala:", round(toks[-1][1], 1), "s")

def carrega(nome):
    return json.load(open(os.path.join(GEO, nome + ".json"), encoding="utf-8"))

def aneis(geom):
    if geom["type"] == "Polygon":
        return [geom["coordinates"]]
    if geom["type"] == "MultiPolygon":
        return geom["coordinates"]
    return []

def dentro_anel(x, y, anel):
    c = False
    n = len(anel)
    for i in range(n):
        x1, y1 = anel[i][:2]; x2, y2 = anel[(i + 1) % n][:2]
        if (y1 > y) != (y2 > y):
            xi = x1 + (y - y1) * (x2 - x1) / (y2 - y1)
            if x < xi:
                c = not c
    return c

def dentro(fc, x, y):
    for f in fc["features"]:
        for pol in aneis(f["geometry"]):
            if dentro_anel(x, y, pol[0]) and not any(dentro_anel(x, y, h) for h in pol[1:]):
                return True
    return False

def caixa(fc):
    xs, ys = [], []
    for f in fc["features"]:
        for pol in aneis(f["geometry"]):
            for p in pol[0]:
                xs.append(p[0]); ys.append(p[1])
    return (round(min(xs), 3), round(min(ys), 3), round(max(xs), 3), round(max(ys), 3))

def km(a, b):
    R = 6371.0088
    la1, lo1, la2, lo2 = map(math.radians, (a[1], a[0], b[1], b[0]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

print("\n== a geografia")
anel = carrega("ponto-mais-fundo-atlantico")["features"][0]["geometry"]["coordinates"]
lista = carrega("milwaukee-deep-lista-antiga")["features"][0]["geometry"]["coordinates"]
est19 = carrega("estimativa-2019-stewart-jamieson")["features"][0]["geometry"]["coordinates"]
agu = carrega("aguadilla-costa-ponto")["features"][0]["geometry"]["coordinates"]
for nome in ["zee-eua-porto-rico", "zee-sobreposicao-eua-rd", "zee-republica-dominicana", "fossa-porto-rico", "fossa-porto-rico-trecho-mais-fundo",
             "porto-rico", "republica-dominicana", "ilhas-virgens-britanicas"]:
    fc = carrega(nome)
    print(f"{nome:38s} caixa {caixa(fc)}  anel dentro: {dentro(fc, *anel)}  est.2019 dentro: {dentro(fc, *est19)}")
print("anel -> Aguadilla km/mi:", round(km(anel, agu), 1), round(km(anel, agu) / 1.609344, 1))
print("anel -> lista antiga km/mi:", round(km(anel, lista), 1), round(km(anel, lista) / 1.609344, 1))

def merc_y(lat):
    return math.degrees(math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)))

def quadro(lon0, lon1, lat_centro, W=2560, H=1440):
    pxg = W / (lon1 - lon0)
    yc = merc_y(lat_centro)
    ytop = yc + (H / 2) / pxg
    ybot = yc - (H / 2) / pxg
    def inv(ym):
        return math.degrees(2 * math.atan(math.exp(math.radians(ym))) - math.pi / 2)
    def palco(lon, lat):
        return (round((lon - lon0) * pxg), round((ytop - merc_y(lat)) * pxg))
    return pxg, inv(ytop), inv(ybot), palco

print("\n== a fossa, faixa de latitude por longitude (isóbatas de 7.000 e 8.000 m)")
def faixa(fc, lon):
    ys = []
    for f in fc["features"]:
        for pol in aneis(f["geometry"]):
            a = pol[0]
            for i in range(len(a)):
                x1, y1 = a[i][:2]; x2, y2 = a[(i + 1) % len(a)][:2]
                if (x1 - lon) * (x2 - lon) <= 0 and x1 != x2:
                    ys.append(y1 + (lon - x1) * (y2 - y1) / (x2 - x1))
    return (round(min(ys), 2), round(max(ys), 2)) if ys else None
f7, f8 = carrega("fossa-porto-rico"), carrega("fossa-porto-rico-trecho-mais-fundo")
for lon in [-68.4, -68.0, -67.5, -67.311, -67.0, -66.5, -66.0, -65.5, -65.0, -64.5, -64.0, -63.0, -62.0]:
    print(f"   {lon:8.3f}  7000 m {faixa(f7, lon)}   8000 m {faixa(f8, lon)}")
zee = carrega("zee-eua-porto-rico")
print("   a zona dos EUA (PR) a 19,7 N, longitudes de borda:", [round(x, 2) for x in sorted(
    x for f in zee["features"] for pol in aneis(f["geometry"]) for a in [pol[0]]
    for i in range(len(a)) for (x1, y1), (x2, y2) in [(a[i][:2], a[(i + 1) % len(a)][:2])]
    if (y1 - 19.7) * (y2 - 19.7) <= 0 and y1 != y2 for x in [x1 + (19.7 - y1) * (x2 - x1) / (y2 - y1)])])

def dist_borda_km(fc, p):
    melhor = 1e9
    kx = 111.32 * math.cos(math.radians(p[1])); ky = 110.57
    for f in fc["features"]:
        for pol in aneis(f["geometry"]):
            for a in pol:
                for i in range(len(a)):
                    x1, y1 = a[i][:2]; x2, y2 = a[(i + 1) % len(a)][:2]
                    ax, ay = (x1 - p[0]) * kx, (y1 - p[1]) * ky
                    bx, by = (x2 - p[0]) * kx, (y2 - p[1]) * ky
                    dx, dy = bx - ax, by - ay
                    t = 0 if dx == dy == 0 else max(0, min(1, -(ax * dx + ay * dy) / (dx * dx + dy * dy)))
                    melhor = min(melhor, math.hypot(ax + t * dx, ay + t * dy))
    return round(melhor, 1)
for nm in ["zee-eua-porto-rico", "zee-sobreposicao-eua-rd", "zee-republica-dominicana"]:
    print(f"   do anel à borda de {nm}: {dist_borda_km(carrega(nm), anel)} km")
sob = carrega("zee-sobreposicao-eua-rd")
for lat in [19.5, 19.712, 19.9, 20.2]:
    print(f"   a {lat} N:", end="")
    xs = sorted(x for f in sob["features"] for pol in aneis(f["geometry"]) for a in [pol[0]]
                for i in range(len(a)) for (x1, y1), (x2, y2) in [(a[i][:2], a[(i + 1) % len(a)][:2])]
                if (y1 - lat) * (y2 - lat) <= 0 and y1 != y2 for x in [x1 + (lat - y1) * (x2 - x1) / (y2 - y1)])
    print(f" a cunha disputada entre as longitudes {[round(x, 3) for x in xs]}")

for nome, (lon0, lon1, latc) in {"n1 (83 MILES)": (-71.0, -64.2, 19.25), "n2 (NOT FISH?)": (-68.8, -63.4, 19.6)}.items():
    pxg, latn, lats, palco = quadro(lon0, lon1, latc)
    print(f"\n{nome}: lon {lon0}..{lon1}, lat {lats:.2f}..{latn:.2f}, {pxg:.0f} px/grau no palco de 2560")
    for rot, p in [("anel", anel), ("lista antiga", lista), ("estimativa 2019", est19), ("Aguadilla", agu)]:
        print(f"   {rot:16s} {palco(*p)}")
    for nm in ["fossa-porto-rico", "fossa-porto-rico-trecho-mais-fundo", "porto-rico"]:
        x0, y0, x1, y1 = caixa(carrega(nm))
        a = palco(x0, y1); b = palco(x1, y0)
        print(f"   {nm:36s} de {a} a {b}")
