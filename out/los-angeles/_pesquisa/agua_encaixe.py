# Confere o encaixe da camada agua-osm-la com o satélite dos clipes 4K que já existem, sem pedir nada à MapTiler.
# Para cada (cena, quadro): tira o quadro do clipe com o ffmpeg, projeta o contorno com a câmera da cena (agua_proj.py), e mede
# perfis perpendiculares à costa: onde a foto passa de água (escura) para terra (clara), em px do quadro 4K e em metros.
# A borda da foto em cada perfil é onde o brilho passa da metade entre a água (mediana de -20 a -12 px) e a terra (de +8 a +20 px).
# Sinal: + = a borda da foto fica do lado da terra (sobra uma fita de água crua da foto); - = o tom escuro cobriria terra.
# Uso, de dentro de C:/projetos/alpha-point:
#   python out/los-angeles/_pesquisa/agua_encaixe.py <geojson> s29:180 s31:0 s53:0 ...
import sys, json, math, subprocess, os
sys.path.insert(0, "out/los-angeles/_pesquisa")
from agua_proj import Proj, cameras, W, H
import numpy as np, cv2
from shapely.geometry import shape, Point, LineString, Polygon
from shapely.prepared import prep

OUT = "out/los-angeles/_tmp/agua/encaixe/"
os.makedirs(OUT, exist_ok=True)
TOM = (0x16, 0x14, 0x06)  # #061416 em BGR
geo = shape(json.load(open(sys.argv[1], encoding="utf-8"))["features"][0]["geometry"])
eixo = LineString(json.load(open("out/los-angeles/_media/geo/quebra-mar-osm.json", encoding="utf-8"))["features"][0]["geometry"]["coordinates"])
E = json.load(open("out/los-angeles/_tmp/agua/work/overpass-estruturas.json", encoding="utf-8"))["elements"]


def wpoly(i):
    for e in E:
        if e["type"] == "way" and e["id"] == i:
            return Polygon([(p["lon"], p["lat"]) for p in e["geometry"]])


MIDDLE, LBBW = wpoly(4883616), wpoly(4883682)
ZONA_BW = MIDDLE.buffer(0.0003).union(LBBW.buffer(0.0003))
# o que a cena desenha por cima nesses quadros (px 4K): o crédito e os rótulos; nada se mede ali
CRED = (150, 1980, 1400, 2160)
EXCLUI = {"s29": [CRED, (360, 1380, 1460, 1580)]}


def classe(lon, lat, d_eixo_m):
    p = Point(lon, lat)
    if d_eixo_m < 40:
        return "quebra-mar San Pedro (buraco)"
    if ZONA_BW.contains(p):
        return "quebra-mar Middle/Long Beach (costa do OSM)"
    if (lon < -118.278 and lat < 33.7125) or lon < -118.29:
        return "costa natural (Cabrillo, Point Fermin, Palos Verdes)"
    if -118.29 <= lon <= -118.09 and 33.70 <= lat <= 33.79:
        return "cais e aterros do porto"
    if lon > -118.17 and lat > 33.74:
        return "praias de Long Beach e Seal Beach"
    return "outra costa"


def quadro(cena, f):
    png = f"out/los-angeles/_tmp/agua/work/{cena}-f{f}.png"
    if not os.path.exists(png):
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", f"out/los-angeles/graphics/{cena}.mp4",
                        "-vf", f"select=eq(n\\,{f})", "-frames:v", "1", png], check=True)
    return cv2.imread(png)


res = {}
for arg in sys.argv[2:]:
    cena, f = arg.split(":")
    f = int(f)
    t = f / 30
    cam = cameras([(cena, t)])[0]
    P = Proj(cam)
    mpx = P.m_px
    img = quadro(cena, f)
    Lum = cv2.GaussianBlur(img.astype(np.float32).mean(axis=2), (0, 0), 1.0)
    lo = [P.lonlat(X, Y) for X, Y in [(-60, -60), (W + 60, -60), (W + 60, H + 60), (-60, H + 60)]]
    vis = geo.intersection(Polygon(lo))
    polys = [g for g in getattr(vis, "geoms", [vis]) if g.geom_type == "Polygon"]

    def scr(ring):
        return np.round(np.array([P.px(*c) for c in ring.coords]) * 4).astype(np.int32)  # 2 bits de subpixel

    mask = np.zeros((H, W), np.uint8)
    for pg in polys:
        cv2.fillPoly(mask, [scr(pg.exterior)], 255, cv2.LINE_AA, 2)
        for r in pg.interiors:
            cv2.fillPoly(mask, [scr(r)], 0, cv2.LINE_AA, 2)
    a = (mask.astype(np.float32) / 255)[..., None]
    camada = (img * (1 - a) + np.array(TOM, np.float32) * a).astype(np.uint8)
    tag = f"{cena}-t{t:06.3f}"
    cv2.imwrite(OUT + f"{tag}-camada-4k.png", camada)
    cv2.imwrite(OUT + f"{tag}-camada-1080p.jpg", cv2.resize(camada, (1920, 1080), interpolation=cv2.INTER_AREA), [cv2.IMWRITE_JPEG_QUALITY, 90])
    cont = img.copy()
    for pg in polys:
        for r in [pg.exterior, *pg.interiors]:
            cv2.polylines(cont, [scr(r)], True, (0, 0, 255), 2, cv2.LINE_AA, 2)
    ex = EXCLUI.get(cena, [CRED])
    pv = prep(geo)
    med = []
    descartados = [0]
    offs = np.arange(-20, 20.01, 0.5)  # px
    for pg in polys:
        for r in [pg.exterior, *pg.interiors]:
            S = LineString([P.px(*c) for c in r.coords])
            for s in np.arange(0, S.length, 6.0):
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
                # a normal aponta para a terra: o ponto 3 m para um lado cai na água, o do outro lado fora dela
                lt = P.lonlat(p.x + nx * 3 / mpx, p.y + ny * 3 / mpx)
                la = P.lonlat(p.x - nx * 3 / mpx, p.y - ny * 3 / mpx)
                dentro_t, dentro_a = pv.contains(Point(lt)), pv.contains(Point(la))
                if dentro_t and not dentro_a:
                    nx, ny = -nx, -ny
                elif dentro_t == dentro_a:
                    continue  # ponta fina, canto
                xs = (p.x + nx * offs).astype(np.float32)
                ys = (p.y + ny * offs).astype(np.float32)
                if xs.min() < 0 or ys.min() < 0 or xs.max() > W - 1 or ys.max() > H - 1:
                    continue
                v = cv2.remap(Lum, xs[None, :], ys[None, :], cv2.INTER_LINEAR)[0]
                va, vt = v[offs <= -12], v[offs >= 8]
                agua_l, terra_l = float(np.median(va)), float(np.median(vt))
                # só onde a água da foto é água lisa e escura de um lado e há terra clara do outro: navio, esteira, emenda clara
                # e sombra dão perfil sem borda única e ficam fora da medida (contados em "descartados")
                if terra_l - agua_l < 25 or np.std(va) > 6:
                    descartados[0] += 1
                    continue
                limiar = agua_l + 0.5 * (terra_l - agua_l)
                k = np.where((offs >= -12) & (v > limiar))[0]
                if not len(k):
                    descartados[0] += 1
                    continue
                i = int(k[0])
                lon, lat = P.lonlat(p.x, p.y)
                d_eixo = eixo.distance(Point(lon, lat)) * 111320 * math.cos(math.radians(lat))
                med.append((classe(lon, lat, d_eixo), float(offs[i]), float(offs[i] * mpx), p.x, p.y, lon, lat))
    porc = {}
    for c in sorted(set(m[0] for m in med)):
        o = np.array([m[1] for m in med if m[0] == c])
        porc[c] = {"perfis": int(len(o)),
                   "px_mediana": round(float(np.median(o)), 2), "px_p10": round(float(np.percentile(o, 10)), 2),
                   "px_p90": round(float(np.percentile(o, 90)), 2),
                   "px_abs_mediana": round(float(np.median(np.abs(o))), 2), "px_abs_p90": round(float(np.percentile(np.abs(o), 90)), 2),
                   "pct_acima_de_5px": round(float((np.abs(o) > 5).mean()) * 100, 1),
                   "m_mediana": round(float(np.median(o)) * mpx, 2), "m_p10": round(float(np.percentile(o, 10)) * mpx, 2),
                   "m_p90": round(float(np.percentile(o, 90)) * mpx, 2), "m_abs_p90": round(float(np.percentile(np.abs(o), 90)) * mpx, 2)}
    for m in med:
        col = (0, 255, 0) if abs(m[1]) <= 2 else (0, 255, 255) if abs(m[1]) <= 5 else (255, 0, 255)
        cv2.circle(cont, (int(m[3]), int(m[4])), 4, col, -1)
    cv2.imwrite(OUT + f"{tag}-contorno-4k.jpg", cont, [cv2.IMWRITE_JPEG_QUALITY, 85])
    res[f"{cena}@{t:.3f}s"] = {"quadro": f, "clipe": f"graphics/{cena}.mp4",
                               "camera": {"centro": [round(x, 6) for x in cam["center"]], "zoom": round(cam["zoom"], 4), "giro": round(cam["bearing"], 4)},
                               "m_por_px_4k": round(mpx, 3), "perfis_descartados": descartados[0], "classes": porc}
    json.dump(med, open(OUT + f"{tag}-perfis.json", "w", encoding="utf-8"), ensure_ascii=False)
    print(cena, f, json.dumps(res[f"{cena}@{t:.3f}s"], ensure_ascii=False, indent=1))
arq = OUT + "medidas.json"
old = json.load(open(arq, encoding="utf-8")) if os.path.exists(arq) else {}
old.update(res)
json.dump(old, open(arq, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
