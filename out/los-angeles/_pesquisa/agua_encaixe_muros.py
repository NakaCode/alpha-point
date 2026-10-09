# Encaixe dos quebra-mares (estruturas estreitas) contra o satélite dos clipes 4K, sem tile: perfis perpendiculares ao eixo de
# cada muro. Em cada perfil: a faixa clara da foto (brilho acima da metade entre a água dos dois lados, a 45-70 m do eixo, e o pico)
# contra a faixa de "terra" da camada (o que não é água no agua-osm-la ao longo do mesmo perfil).
#   - San Pedro Breakwater: o eixo é quebra-mar-osm (o buraco é esse eixo com a folga);
#   - Middle Breakwater (way/4883616) e Long Beach Breakwater (way/4883682): o eixo é o lado longo do retângulo mínimo do polígono
#     do OSM (os dois são retos); na camada eles já são terra, porque o OSM os marca natural=coastline.
# Saída: px e metros do quadro 4K. centro = (centro da faixa da foto) - (centro da faixa de terra da camada), com sinal pela normal;
# cobre = a faixa da foto inteira cai dentro da terra da camada (o tom não pinta o muro); fita = o que sobra de água crua da foto
# entre a borda do muro e a borda da camada, de cada lado.
# Uso, de dentro de C:/projetos/alpha-point:
#   python out/los-angeles/_pesquisa/agua_encaixe_muros.py <geojson> s29:180 s31:0 s53:0
import sys, json, math, os
sys.path.insert(0, "out/los-angeles/_pesquisa")
from agua_proj import Proj, cameras, W, H
import numpy as np, cv2
from shapely.geometry import shape, Point, LineString, Polygon
from shapely.prepared import prep

OUT = "out/los-angeles/_tmp/agua/encaixe/"
geo = shape(json.load(open(sys.argv[1], encoding="utf-8"))["features"][0]["geometry"])
pv = prep(geo)
E = json.load(open("out/los-angeles/_tmp/agua/work/overpass-estruturas.json", encoding="utf-8"))["elements"]


def wpoly(i):
    for e in E:
        if e["type"] == "way" and e["id"] == i:
            return Polygon([(p["lon"], p["lat"]) for p in e["geometry"]])


def eixo_retangulo(pg):
    r = list(pg.minimum_rotated_rectangle.exterior.coords)
    a, b, c = r[0], r[1], r[2]
    d1 = math.dist(a, b); d2 = math.dist(b, c)
    if d1 > d2:
        return LineString([((a[0] + r[3][0]) / 2, (a[1] + r[3][1]) / 2), ((b[0] + c[0]) / 2, (b[1] + c[1]) / 2)])
    return LineString([((a[0] + b[0]) / 2, (a[1] + b[1]) / 2), ((r[3][0] + c[0]) / 2, (r[3][1] + c[1]) / 2)])


MUROS = {
    "San Pedro Breakwater (buraco: eixo quebra-mar-osm, folga 15 m)":
        LineString(json.load(open("out/los-angeles/_media/geo/quebra-mar-osm.json", encoding="utf-8"))["features"][0]["geometry"]["coordinates"]),
    "Middle Breakwater (way/4883616, costa do OSM)": eixo_retangulo(wpoly(4883616)),
    "Long Beach Breakwater (way/4883682, costa do OSM)": eixo_retangulo(wpoly(4883682)),
}
CRED = (150, 1980, 1400, 2160)
EXCLUI = {"s29": [CRED, (360, 1380, 1460, 1580)]}
res = {}
for arg in sys.argv[2:]:
    cena, f = arg.split(":")
    f = int(f)
    t = f / 30
    cam = cameras([(cena, t)])[0]
    P = Proj(cam)
    mpx = P.m_px
    img = cv2.imread(f"out/los-angeles/_tmp/agua/work/{cena}-f{f}.png")
    Lum = cv2.GaussianBlur(img.astype(np.float32).mean(axis=2), (0, 0), 0.7)
    ex = EXCLUI.get(cena, [CRED])
    out = {}
    for nome, eixo in MUROS.items():
        S = LineString([P.px(*c) for c in eixo.coords])
        meio = 70.0 / mpx  # meio perfil de 70 m
        offs = np.arange(-meio, meio + 1e-9, 0.25)
        linhas = []
        for s in np.arange(0, S.length, 3.0):
            p = S.interpolate(s)
            if not (40 < p.x < W - 40 and 40 < p.y < H - 40):
                continue
            if any(x0 <= p.x <= x1 and y0 <= p.y <= y1 for x0, y0, x1, y1 in ex):
                continue
            q, o = S.interpolate(min(s + 2, S.length)), S.interpolate(max(s - 2, 0))
            dx, dy = q.x - o.x, q.y - o.y
            n = math.hypot(dx, dy)
            if n == 0:
                continue
            nx, ny = -dy / n, dx / n
            xs = (p.x + nx * offs).astype(np.float32)
            ys = (p.y + ny * offs).astype(np.float32)
            if xs.min() < 0 or ys.min() < 0 or xs.max() > W - 1 or ys.max() > H - 1:
                continue
            # a terra da camada ao longo do perfil
            terra = np.array([not pv.contains(Point(P.lonlat(x, y))) for x, y in zip(xs[::2], ys[::2])])
            terra = np.repeat(terra, 2)[:len(offs)]
            ic = np.where(terra & (np.abs(offs) < 30 / mpx))[0]
            if not len(ic):
                continue
            # a faixa contínua de terra que passa pelo eixo (ou a mais perto dele)
            k0 = ic[np.argmin(np.abs(offs[ic]))]
            a_ = k0
            while a_ > 0 and terra[a_ - 1]:
                a_ -= 1
            b_ = k0
            while b_ < len(offs) - 1 and terra[b_ + 1]:
                b_ += 1
            if a_ == 0 or b_ == len(offs) - 1:
                continue  # a terra encosta na ponta do perfil: raiz em terra firme, fora da medida
            v = cv2.remap(Lum, xs[None, :], ys[None, :], cv2.INTER_LINEAR)[0]
            fora = np.abs(offs) * mpx >= 45
            agua_e, agua_d = np.median(v[(offs < 0) & fora]), np.median(v[(offs > 0) & fora])
            agua_l = max(agua_e, agua_d)
            jan = np.abs(offs) * mpx <= 30
            ip = int(np.argmax(np.where(jan, v, -1e9)))
            pico = v[ip]
            if pico - agua_l < 20 or abs(agua_e - agua_d) > 15:
                continue  # muro sem contraste, ou emenda da foto atravessando o perfil
            lim = agua_l + 0.5 * (pico - agua_l)
            i = ip
            while i > 0 and v[i - 1] > lim:
                i -= 1
            j = ip
            while j < len(v) - 1 and v[j + 1] > lim:
                j += 1
            fe, fd = offs[i], offs[j]          # bordas da faixa clara da foto
            ce, cd = offs[a_], offs[b_]        # bordas da terra da camada
            linhas.append(((fe + fd) / 2 - (ce + cd) / 2, fe - ce, cd - fd, (fd - fe), (cd - ce), fe >= ce - 0.5 and fd <= cd + 0.5))
        if not linhas:
            out[nome] = {"perfis": 0, "nota": "fora do quadro ou sem perfil medível"}
            continue
        L = np.array(linhas, dtype=float)
        fita = np.r_[L[:, 1], L[:, 2]]
        out[nome] = {"perfis": len(L),
                     "centro_px_mediana": round(float(np.median(L[:, 0])), 2), "centro_px_p10": round(float(np.percentile(L[:, 0], 10)), 2),
                     "centro_px_p90": round(float(np.percentile(L[:, 0], 90)), 2), "centro_m_mediana": round(float(np.median(L[:, 0]) * mpx), 2),
                     "centro_m_abs_p90": round(float(np.percentile(np.abs(L[:, 0]), 90) * mpx), 2),
                     "largura_foto_m_mediana": round(float(np.median(L[:, 3]) * mpx), 1), "largura_terra_camada_m_mediana": round(float(np.median(L[:, 4]) * mpx), 1),
                     "fita_agua_crua_px_mediana": round(float(np.median(fita)), 2), "fita_px_p10": round(float(np.percentile(fita, 10)), 2),
                     "fita_px_p90": round(float(np.percentile(fita, 90)), 2), "fita_m_mediana": round(float(np.median(fita) * mpx), 2),
                     "pct_perfis_muro_inteiro_fora_do_tom": round(float(L[:, 5].mean() * 100), 1)}
    res[f"{cena}@{t:.3f}s"] = {"m_por_px_4k": round(mpx, 3), "zoom": round(cam["zoom"], 4), "muros": out}
    print(cena, f, json.dumps(res[f"{cena}@{t:.3f}s"], ensure_ascii=False, indent=1))
arq = OUT + "medidas-muros.json"
old = json.load(open(arq, encoding="utf-8")) if os.path.exists(arq) else {}
old.update(res)
json.dump(old, open(arq, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
