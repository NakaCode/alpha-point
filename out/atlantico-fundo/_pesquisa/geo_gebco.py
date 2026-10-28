"""Leitura das grades GEBCO (Esri ASCII raster do app de recorte download.gebco.net) e as funções comuns da parte B da geo.
Vídeo 4 (atlantico-fundo), pesquisa-geo, 28/10/2026. Só numpy, PIL e shapely (esta máquina não tem GDAL, netCDF4 nem rasterio).

Geometria da grade (cabeçalho Esri ASCII): xllcorner/yllcorner são o CANTO inferior esquerdo da grade (bordas das
células); a 1ª linha do arquivo é a do norte. O centro da célula (i, j) fica em
    lon = xll + (j + 0.5) * cell,   lat = yll + (nrows - i - 0.5) * cell.
"""
import os, hashlib, json, math
import numpy as np

AQUI = os.path.dirname(os.path.abspath(__file__))
PROJ = os.path.normpath(os.path.join(AQUI, ".."))
TMP = os.path.join(PROJ, "_tmp", "pesquisa-geo")
EXTRAIDO = os.path.join(TMP, "baixado", "gebco-cesta-1", "x")
CACHE = os.path.join(TMP, "grade")

GEBCO_DOI = "10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa"
GEBCO_CITACAO = ("GEBCO Bathymetric Compilation Group 2026 (2026). The GEBCO_2026 Grid - a continuous terrain model for oceans "
                 "and land at 15 arc-second intervals. doi:10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa")
GEBCO_LICENCA = ("Domínio público (GEBCO Grid terms of use): livre para copiar, publicar, adaptar e uso comercial; exige reconhecer a "
                 "fonte, não sugerir aval oficial do GEBCO/IHO/IOC, não enganar sobre o dado; não serve para navegação")
GEBCO_TERMOS_URL = "https://www.gebco.net/data-products/gridded-bathymetry/terms-of-use"
GEBCO_TERMOS_COPIA = "midia/atlantico-fundo/fontes/fa-gebco-terms-of-use.txt (lida em 26/10/2026) e GEBCO_Grid_terms_of_use.pdf do próprio zip"


def sha256_arquivo(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def ler_asc(nome):
    """Lê <EXTRAIDO>/<nome>.asc; guarda um .npy em _tmp/pesquisa-geo/grade/ (só cache de leitura)."""
    asc = os.path.join(EXTRAIDO, nome + ".asc")
    os.makedirs(CACHE, exist_ok=True)
    npy, js = os.path.join(CACHE, nome + ".npy"), os.path.join(CACHE, nome + ".json")
    if os.path.exists(npy) and os.path.exists(js):
        return np.load(npy), json.load(open(js, encoding="utf-8"))
    with open(asc, "r", encoding="ascii") as f:
        hdr, resto = {}, ""
        while True:
            pos = f.tell(); linha = f.readline()
            partes = linha.split()
            if len(partes) == 2 and partes[0][0].isalpha():
                hdr[partes[0].lower()] = float(partes[1])
            else:
                resto = linha; break
        hdr.setdefault("nodata_value", -32767.0)   # o cabeçalho da TID de 2019 não traz a linha NODATA_value
        dados = np.fromstring(resto + " " + f.read(), dtype=np.float64, sep=" ")   # o modo texto (sep) lê qualquer espaço em branco
    nr, nc = int(hdr["nrows"]), int(hdr["ncols"])
    if dados.size != nr * nc:
        raise SystemExit(f"{nome}: {dados.size} valores, esperado {nr}x{nc}")
    a = dados.reshape(nr, nc)
    nd = hdr["nodata_value"]
    if np.any(a == nd):
        print(f"  aviso: {nome} tem {int(np.sum(a == nd))} células NODATA")
    a = a.astype(np.int16)
    hdr.update({"arquivo_asc": os.path.relpath(asc, PROJ).replace("\\", "/"), "sha256_asc": sha256_arquivo(asc)})
    np.save(npy, a)
    json.dump(hdr, open(js, "w", encoding="utf-8"), indent=1)
    return a, hdr


def eixos(hdr):
    nr, nc, c = int(hdr["nrows"]), int(hdr["ncols"]), hdr["cellsize"]
    lon = hdr["xllcorner"] + (np.arange(nc) + 0.5) * c
    lat = hdr["yllcorner"] + (nr - np.arange(nr) - 0.5) * c
    return lon, lat


def valor_em(a, hdr, lon, lat):
    """Valor da célula que contém (lon, lat)."""
    c = hdr["cellsize"]
    j = int(math.floor((lon - hdr["xllcorner"]) / c))
    i = int(hdr["nrows"]) - 1 - int(math.floor((lat - hdr["yllcorner"]) / c))
    return int(a[i, j]), (i, j)


# ---------- curvas de nível (marching squares) ----------
def isolinhas(z, nivel, lon, lat):
    """Segmentos da isolinha z == nivel (z em células, centros em lon/lat). Devolve lista de ((x1,y1),(x2,y2)).
    Interpolação linear nas arestas; a sela se decide pela média das 4 células."""
    a = z[:-1, :-1].astype(np.float64); b = z[:-1, 1:].astype(np.float64)
    c = z[1:, 1:].astype(np.float64); d = z[1:, :-1].astype(np.float64)   # a=NO b=NE c=SE d=SO (linha 0 = norte)
    caso = ((a > nivel) * 8 + (b > nivel) * 4 + (c > nivel) * 2 + (d > nivel) * 1).astype(np.int8)
    ii, jj = np.nonzero((caso != 0) & (caso != 15))
    X0, X1 = lon[jj], lon[jj + 1]
    Y0, Y1 = lat[ii], lat[ii + 1]           # Y0 = norte, Y1 = sul
    A, B, C, D = a[ii, jj], b[ii, jj], c[ii, jj], d[ii, jj]
    def t(p, q):
        with np.errstate(divide="ignore", invalid="ignore"):
            r = (nivel - p) / (q - p)
        return np.clip(np.nan_to_num(r, nan=0.5), 0, 1)
    top = np.stack([X0 + t(A, B) * (X1 - X0), Y0 + 0 * X0], 1)
    rig = np.stack([X1 + 0 * X0, Y0 + t(B, C) * (Y1 - Y0)], 1)
    bot = np.stack([X0 + t(D, C) * (X1 - X0), Y1 + 0 * X0], 1)
    lef = np.stack([X0 + 0 * X0, Y0 + t(A, D) * (Y1 - Y0)], 1)
    E = {"t": top, "r": rig, "b": bot, "l": lef}
    tab = {1: [("l", "b")], 2: [("b", "r")], 3: [("l", "r")], 4: [("t", "r")], 6: [("t", "b")], 7: [("l", "t")],
           8: [("l", "t")], 9: [("t", "b")], 11: [("t", "r")], 12: [("l", "r")], 13: [("b", "r")], 14: [("l", "b")]}
    segs = []
    caso = caso[ii, jj]
    med = (A + B + C + D) / 4
    for k in range(len(ii)):
        cs = int(caso[k])
        if cs == 5:
            pares = [("l", "t"), ("b", "r")] if med[k] > nivel else [("l", "b"), ("t", "r")]
        elif cs == 10:
            pares = [("t", "r"), ("l", "b")] if med[k] > nivel else [("l", "t"), ("b", "r")]
        else:
            pares = tab[cs]
        for p, q in pares:
            segs.append((tuple(E[p][k]), tuple(E[q][k])))
    return segs


def poligonos_abaixo(z, nivel, lon, lat):
    """Polígonos (shapely) das regiões com z < nivel (mais fundas que |nivel|), fechados pela isolinha lida.
    A grade é cercada por uma moldura acima do nível, para toda curva fechar dentro do recorte (a borda do
    recorte vira borda do polígono onde a região toca a moldura: quem usa confere com toca_borda)."""
    from shapely.ops import polygonize, unary_union
    from shapely.geometry import LineString
    c = lon[1] - lon[0]
    zz = np.pad(z.astype(np.float64), 1, constant_values=nivel + 1e4)
    lo = np.concatenate([[lon[0] - c], lon, [lon[-1] + c]])
    la = np.concatenate([[lat[0] + c], lat, [lat[-1] - c]])
    segs = isolinhas(zz, nivel, lo, la)
    linhas = [LineString([p, q]) for p, q in segs if p != q]
    polys = list(polygonize(unary_union(linhas)))
    # polygonize devolve também os "furos" como polígonos: fica o que tem centro abaixo do nível
    keep = []
    for p in polys:
        r = p.representative_point()
        j = int(round((r.x - lon[0]) / c)); i = int(round((lat[0] - r.y) / c))
        i = min(max(i, 0), z.shape[0] - 1); j = min(max(j, 0), z.shape[1] - 1)
        if z[i, j] < nivel:
            keep.append(p)
    return unary_union(keep) if keep else None


# ---------- Web Mercator ----------
R = 6378137.0
def merc_y(lat):
    return R * np.log(np.tan(np.pi / 4 + np.radians(lat) / 2))
def merc_lat(y):
    return np.degrees(2 * np.arctan(np.exp(y / R)) - np.pi / 2)


def para_mercator(img, hdr, largura=None, altura=None, ordem=1):
    """Reamostra uma grade lat/lon (linhas igualmente espaçadas em latitude) para linhas igualmente espaçadas em
    Web Mercator, com o mesmo recorte (as BORDAS da grade). Colunas não mudam (lon é linear nas duas).
    Devolve (img_merc, cantos [[lon,lat] NO, NE, SE, SO])."""
    nr, nc = img.shape[:2]
    c = hdr["cellsize"]
    norte = hdr["yllcorner"] + nr * c; sul = hdr["yllcorner"]
    oeste = hdr["xllcorner"]; leste = oeste + nc * c
    yN, yS = merc_y(norte), merc_y(sul)
    if altura is None:
        # mantém a densidade de pixels do equador do recorte: mesma escala nas duas direções em Mercator
        larg_m = (leste - oeste) / 360 * 2 * np.pi * R
        altura = int(round(nc * (yN - yS) / larg_m))
    ys = yN - (np.arange(altura) + 0.5) * (yN - yS) / altura
    lats = merc_lat(ys)
    fi = (norte - lats) / c - 0.5          # índice fracionário de linha na grade original
    if ordem == 0:
        idx = np.clip(np.round(fi).astype(int), 0, nr - 1)
        out = img[idx]
    else:
        i0 = np.clip(np.floor(fi).astype(int), 0, nr - 1); i1 = np.clip(i0 + 1, 0, nr - 1)
        w = (fi - np.floor(fi)).reshape(-1, *([1] * (img.ndim - 1)))
        out = img[i0] * (1 - w) + img[i1] * w
    cantos = [[oeste, norte], [leste, norte], [leste, sul], [oeste, sul]]
    return out, cantos


def sombreamento(z, hdr, azimute=315.0, altitude=45.0, exagero=1.0):
    """Relevo sombreado (Horn) com o espaçamento real das células em metros (dx varia com a latitude)."""
    c = hdr["cellsize"]
    _, lat = eixos(hdr)
    dy = c * np.pi / 180 * R
    dx = (c * np.pi / 180 * R * np.cos(np.radians(lat)))[:, None]
    zp = np.pad(z.astype(np.float64) * exagero, 1, mode="edge")
    gx = ((zp[:-2, 2:] + 2 * zp[1:-1, 2:] + zp[2:, 2:]) - (zp[:-2, :-2] + 2 * zp[1:-1, :-2] + zp[2:, :-2])) / (8 * dx)
    gy = ((zp[2:, :-2] + 2 * zp[2:, 1:-1] + zp[2:, 2:]) - (zp[:-2, :-2] + 2 * zp[:-2, 1:-1] + zp[:-2, 2:])) / (8 * dy)
    # gy > 0 = sobe para o sul (linha 0 é o norte)
    az = np.radians(360.0 - azimute + 90.0); alt = np.radians(altitude)
    declive = np.arctan(np.hypot(gx, gy))
    aspecto = np.arctan2(gy, -gx)
    hs = np.sin(alt) * np.cos(declive) + np.cos(alt) * np.sin(declive) * np.cos(az - aspecto)
    return np.clip(hs, 0, 1)


def terrarium(z):
    """Codifica a elevação em RGB Terrarium (v = R*256 + G + B/256 - 32768), sem perda para inteiros."""
    v = z.astype(np.float64) + 32768.0
    r = np.floor(v / 256); g = np.floor(v - r * 256); b = np.floor((v - np.floor(v)) * 256)
    return np.stack([r, g, b], -1).astype(np.uint8)
