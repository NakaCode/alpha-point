"""O mapa comum das 2 miniaturas novas da reembalagem do vídeo 3 (`peru-agua`, 18/11/2026): CÓPIA de
roteiros/australia-animais/miniatura/mapa.py (que não foi editado nem rodado), com estas mudanças:
- PASTA é roteiros/peru-agua/miniatura/reembalagem-2026-11-18/; as bases novas ficam em _bases/ dela (fora do git, .gitignore linha 108); o
  colormap da GIBS continua lido de out/_pautas/video-8/miniaturas/_bases/, sem mover nem apagar;
- novo: rotulo_claro() (o rótulo de cidade em texto escuro sobre caixa clara, o do Big Sur, que lê a 320) e ler_fc() (um GeoJSON do
  _media/geo do vídeo, com o sha256 medido).
Nada mais mudou.

O texto abaixo é o da cópia da Austrália:

O mapa comum das 2 miniaturas da pauta do vídeo 8, a Austrália (`australia-animais`, 18/11/2026): CÓPIA de
out/_pautas/video-8-brasil/miniaturas/mapa.py (que não foi editado nem rodado), com estas mudanças:
- PASTA é roteiros/australia-animais/miniatura/; as bases novas ficam em _bases/ dela (fora do git, .gitignore linha 105); o colormap da GIBS
  continua lido de out/_pautas/video-8/miniaturas/_bases/, sem mover nem apagar;
- ler_shp_zip() pula os registros sem forma (o shape NULL dos "Outside Australia" e "No usual address" do ABS) e conserta a geometria
  inválida com buffer(0);
- os nomes de saída são m<n>-2560.jpg etc. (o salvar() é o mesmo).

O texto abaixo é o da cópia das duas florestas:

O mapa comum das 2 miniaturas das duas florestas (vídeo 8, Brasil; 18/11/2026): CÓPIA de roteiros/arizona-strip/miniatura/mapa.py
(que não foi editado nem rodado), com estas mudanças:
- PASTA é out/_pautas/video-8-brasil/miniaturas/; as bases novas ficam em _bases/ dela (fora do git, .gitignore linha 102); as já baixadas
  (o colormap da GIBS) são lidas de out/_pautas/video-8/miniaturas/_bases/ sem mover nem apagar;
- saiu o HPMS (ler_hpms), que era só da Strip;
- novo: ler_shp() (um shapefile solto, como o de biomas do IBGE), ler_geojson() (o Natural Earth da pré-v1, com o sha256 do manifesto),
  seta_dupla() (a seta reta de duas pontas, a do vão) e lonlat() (o inverso de palco()).

O texto abaixo é o da cópia da Strip, que já era cópia (o mapa.py da busca):

O mapa comum das 3 miniaturas da pauta do vídeo 8 (`arizona-strip`, 18/11/2026): CÓPIA de out/_pautas/video-8/miniaturas/mapa.py
(que não foi editado), com estas mudanças:
- a saída vai para roteiros/arizona-strip/miniatura/ (PASTA), com os nomes m<n>-2560.jpg, m<n>-1280.jpg, m<n>-320.png, m<n>-168.png e
  m<n>-pontos.json (sem o -ver.png: a folha.py faz a conferência);
- as bases já baixadas são LIDAS de out/_pautas/video-8/miniaturas/_bases/ (BASES), sem mover nem apagar; as novas, se houver, ficam em
  roteiros/arizona-strip/miniatura/_bases/ (BASES_NOVAS, fora do git), e base_em() acha cada uma num dos dois lugares;
- caixa_texto() e medir_texto() aceitam uma linha de duas cores ("265" vermelho + "MILES" branco): o texto da linha vira uma lista de
  (pedaço, cor);
- ler_hpms(): a geometria das rodovias do HPMS 2025 (FHWA), dos arquivos que o leitor B baixou (midia/arizona-strip/fontes/b/), cortada
  entre dois marcos de milha;
- ponto(): o ponto branco de uma cidade, com contorno escuro e sombra;
- seta_suave(): a seta que segue uma linha de verdade (a estrada), reamostrada e alisada, com o desvio medido.

O texto abaixo é o do original.

O mapa comum das miniaturas do vídeo 8 (esboços das finalistas, 17/11/2026), generalizado do mapa.py do vídeo 7
(roteiros/rio-columbia/miniatura/mapa.py, que fica como está). O estilo é o das referências do Lucas (The Geo Lens, Geography by Geoff;
out/rio-columbia/_tmp/miniatura/referencias/): a terra em relevo sombreado amarelo-dourado, a água em azul saturado, o assunto em
vermelho com o relevo por baixo e contorno branco fino, um destaque secundário em ciano, a caixa preta com Inter Black e as setas brancas
grossas e curvas.

O que mudou do vídeo 7: o quadro (Quadro), as bases e as camadas são parâmetros; o relevo vira um objeto (Relevo) que pinta qualquer
cor por três pontos; a terra pode ser o quadro inteiro (sem mar); há leitores de shapefile do Census (zip), de OSM (Overpass, com os
multipolígonos costurados) e do Natural Earth; os rótulos são uma função; a saída vai para out/_pautas/video-8/miniaturas/.
Novo no vídeo 8 (arizona-strip): a altitude do ASTER GDEM (Quadro.ler_altitude, o índice de cor da GIBS decodificado pelo colormap),
o sombreado calculado dela na escala do palco (sombreado, com exagero vertical), a profundidade de um cânion (profundidade) e o peso
perto de uma linha (perto_de); a seta por vários pontos (caminho) e a medida da caixa antes de desenhar (medir_texto).

Uma finalista nova é um <slug>-bases.py (as funções de bases.py) e um <slug>.py (este módulo); folha.py junta todas (finalistas.json).

Uso: um <slug>.py por finalista, da raiz do canal, sem rede (as bases vêm do <slug>-bases.py):
    python -X utf8 -B -P out/_pautas/video-8/miniaturas/<slug>.py

As letras: marca/fontes/inter (Inter, SIL OFL). Nada desenhado à mão nem por IA: toda forma vem de geometria real.
"""
import hashlib, io, json, math, os, sys, zipfile
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFont
import shapely
from shapely.geometry import shape, box, Polygon, MultiPolygon, LineString, MultiLineString, GeometryCollection
from shapely.ops import unary_union, polygonize, linemerge

Image.MAX_IMAGE_PIXELS = None

# ── as cores das referências (RGB), as mesmas do vídeo 7 ──
VERMELHO = (220, 48, 32)
AMARELO = (232, 176, 58)
AZUL = (30, 86, 172)
CIANO = (70, 214, 232)
TEXTO_VERMELHO = (234, 52, 36)
BRANCO = (255, 255, 255)
PRETO = (8, 8, 10)

W, H = 2560, 1440
SS = 2
K = 2
R_TERRA = 6378137.0
RAIZ = os.getcwd()
assert os.path.isfile(os.path.join(RAIZ, "canal.json")), "rode da raiz do canal"
PASTA = os.path.join(RAIZ, "roteiros", "peru-agua", "miniatura", "reembalagem-2026-11-18")
BASES = os.path.join(RAIZ, "out", "_pautas", "video-8", "miniaturas", "_bases")     # só leitura (o colormap da GIBS)
BASES_NOVAS = os.path.join(PASTA, "_bases")                                          # fora do git
NE = os.path.join(os.path.expanduser("~"), ".regie", "geo", "natural-earth")
FONTE = os.path.join(RAIZ, "marca", "fontes", "inter", "Inter-VF.ttf")


def env(nome, padrao):
    return float(os.environ.get(nome, padrao))


def sha256(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for bloco in iter(lambda: f.read(1 << 20), b""):
            h.update(bloco)
    return h.hexdigest()


def merc(lon, lat):
    return (math.radians(lon) * R_TERRA, R_TERRA * math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)))


def luma(a):
    return a[..., :3] @ np.array([0.2126, 0.7152, 0.0722])


def compor(img, cor, a):
    return img * (1 - a[..., None]) + np.asarray(cor, float)[None, None, :3] * a[..., None]


def fonte(px, peso=900, opsz=32):
    f = ImageFont.truetype(FONTE, int(px))
    f.set_variation_by_axes([opsz, peso])
    return f


# ── o quadro: da lat de baixo à de cima, centrado numa lon; a largura sai do 16:9 em Mercator ──
class Quadro:
    def __init__(self, lat_s, lat_n, lon_c):
        self.lat_s, self.lat_n, self.lon_c = lat_s, lat_n, lon_c
        _, self.FY0 = merc(0, lat_s)
        _, self.FY1 = merc(0, lat_n)
        fh = self.FY1 - self.FY0
        fw = fh * W / H
        fxc, _ = merc(lon_c, 0)
        self.FX0, self.FX1 = fxc - fw / 2, fxc + fw / 2
        self.MP = fw / W
        self.lon0 = math.degrees(self.FX0 / R_TERRA)
        self.lon1 = math.degrees(self.FX1 / R_TERRA)

    def palco_m(self, x, y, s=1):
        return ((x - self.FX0) / self.MP * s, (self.FY1 - y) / self.MP * s)

    def palco(self, lon, lat, s=1):
        return self.palco_m(*merc(lon, lat), s)

    def caixa_geo(self, folga=0.3):
        return box(self.lon0 - folga, self.lat_s - folga, self.lon1 + folga, self.lat_n + folga)

    def medidas(self):
        return {"lat_baixo": self.lat_s, "lat_cima": self.lat_n, "lon_centro": self.lon_c, "lon_esquerda": round(self.lon0, 3),
                "lon_direita": round(self.lon1, 3), "quadro_3857": [round(v, 1) for v in (self.FX0, self.FY0, self.FX1, self.FY1)],
                "metros_mercator_por_px_palco": round(self.MP, 1)}

    def ler_base(self, caminho):
        """uma base raster da GIBS (com o .json ao lado), recortada e reamostrada para o quadro; confere o sha256"""
        meta, sha = self._meta(caminho)
        crua = np.asarray(Image.open(caminho).convert("RGB")).astype(np.float32)
        return self._reamostrar(crua, meta, caminho, sha)

    def ler_altitude(self, caminho, colormap):
        """o ASTER_GDEM_Color_Index da GIBS decodificado pelo colormap dela (cada cor é uma faixa de 10 a 25 m; vale o meio da
        faixa), na resolução da base, e só então reamostrado: devolve a altitude em metros no palco"""
        import re
        meta, sha = self._meta(caminho)
        x = open(colormap, encoding="utf-8").read()
        ent = re.findall(r'<ColorMapEntry rgb="(\d+),(\d+),(\d+)"[^>]*value="\[([-\d.]+),([-\d.]+)\)"', x)
        pal = {int(e[0]) * 65536 + int(e[1]) * 256 + int(e[2]): (float(e[3]) + float(e[4])) / 2 for e in ent}
        rgba = np.asarray(Image.open(caminho).convert("RGBA")).astype(np.int32)
        chave = rgba[..., 0] * 65536 + rgba[..., 1] * 256 + rgba[..., 2]
        # o mar (e o que o ASTER não cobre) vem sem dado: transparente, ou preto (o fundo do WMS com TRANSPARENT=FALSE; o preto não é cor
        # do colormap). Vira 0 m
        sem_dado = (rgba[..., 3] == 0) | (chave == 0)
        u, inv = np.unique(chave, return_inverse=True)
        lut = np.array([pal.get(int(k), np.nan) for k in u], np.float32)
        elev = lut[inv].reshape(chave.shape)
        fora = float((np.isnan(elev) & ~sem_dado).mean())
        if fora > 0.001:
            sys.exit("%.2f %% dos pixels da altitude não casam com o colormap: parei" % (100 * fora))
        elev[sem_dado] = 0.0
        elev = np.clip(np.nan_to_num(elev, nan=float(np.nanmedian(elev))), 0, None)
        out, info = self._reamostrar(elev[..., None].repeat(3, 2), meta, caminho, sha)
        info["pixels_fora_do_colormap"] = fora
        info["pixels_sem_dado_mar"] = round(float(sem_dado.mean()), 4)
        info["colormap"] = {"arquivo": os.path.relpath(colormap, RAIZ).replace("\\", "/"), "sha256": sha256(colormap), "entradas": len(pal)}
        return out[..., 0], info

    def _meta(self, caminho):
        meta = json.load(open(caminho + ".json", encoding="utf-8"))
        sha = sha256(caminho)
        if sha != meta["imagem"]["sha256"]:
            sys.exit("%s não confere com o sha256 do .json: parei" % os.path.basename(caminho))
        return meta, sha

    def _reamostrar(self, crua, meta, caminho, sha):
        jan = meta["janela_3857"]
        th, tw = crua.shape[:2]
        mpx = (jan[2] - jan[0]) / tw
        if not (jan[0] <= self.FX0 and self.FX1 <= jan[2] and jan[1] <= self.FY0 and self.FY1 <= jan[3]):
            sys.exit("o quadro sai da base: parei")
        bx0, by0 = (self.FX0 - jan[0]) / mpx, (jan[3] - self.FY1) / mpx
        esc = self.MP / mpx
        cx0, cy0 = max(0, int(bx0) - 4), max(0, int(by0) - 4)
        cx1, cy1 = min(tw, int(bx0 + W * esc) + 6), min(th, int(by0 + H * esc) + 6)
        pedaco = cv2.GaussianBlur(crua[cy0:cy1, cx0:cx1], (0, 0), max(0.01, 0.42 * esc))
        M = np.float32([[esc, 0, bx0 - cx0], [0, esc, by0 - cy0]])
        out = cv2.warpAffine(pedaco, M, (W, H), flags=cv2.WARP_INVERSE_MAP | cv2.INTER_LINEAR)
        return out, {"arquivo": os.path.relpath(caminho, RAIZ).replace("\\", "/"), "sha256": sha, "metros_mercator_por_px": round(mpx, 2),
                     "escala_base_por_px_palco": round(esc, 3)}

    # as máscaras e as linhas, a partir de geometria shapely (lon, lat)
    def _aneis(self, g):
        g = g.intersection(self.caixa_geo(1.0)) if not g.is_empty else g
        if isinstance(g, Polygon):
            return [g]
        if isinstance(g, (MultiPolygon, GeometryCollection)):
            return [p for p in getattr(g, "geoms", []) if isinstance(p, Polygon)]
        return []

    def mascara(self, g):
        im = Image.new("L", (W * SS, H * SS), 0)
        d = ImageDraw.Draw(im)
        for p in self._aneis(g):
            if p.is_empty:
                continue
            d.polygon([self.palco(x, y, SS) for x, y in p.exterior.coords], fill=255)
            for b in p.interiors:
                d.polygon([self.palco(x, y, SS) for x, y in b.coords], fill=0)
        return np.asarray(im.resize((W, H), Image.LANCZOS)).astype(np.float32) / 255.0

    def linha(self, g, lw):
        im = Image.new("L", (W * SS, H * SS), 0)
        d = ImageDraw.Draw(im)
        g = g.intersection(self.caixa_geo(1.0))
        partes = []
        for p in getattr(g, "geoms", [g]):
            if isinstance(p, LineString):
                partes.append(p)
            elif isinstance(p, MultiLineString):
                partes += list(p.geoms)
            elif isinstance(p, Polygon):
                partes.append(LineString(p.exterior.coords))
        for p in partes:
            if len(p.coords) > 1:
                d.line([self.palco(x, y, SS) for x, y in p.coords], fill=255, width=max(1, int(round(lw * SS))), joint="curve")
        return np.asarray(im.resize((W, H), Image.LANCZOS)).astype(np.float32) / 255.0

    def cheio(self):
        return np.ones((H, W), np.float32)


# ── os leitores de geometria ──
def ler_shp_zip(caminho, filtro=lambda r: True):
    """um shapefile zipado do Census: devolve [(registro dict, geometria shapely em lon/lat NAD83)]"""
    import shapefile
    z = zipfile.ZipFile(caminho)
    nomes = z.namelist()
    pega = lambda ext: io.BytesIO(z.read([n for n in nomes if n.endswith(ext)][0]))
    rd = shapefile.Reader(shp=pega(".shp"), shx=pega(".shx"), dbf=pega(".dbf"))
    campos = [f[0] for f in rd.fields[1:]]
    out = []
    for sr in rd.iterShapeRecords():
        reg = dict(zip(campos, list(sr.record)))
        if sr.shape.shapeType == 0:          # nesta cópia: o shape NULL (o ABS tem "Outside Australia", "No usual address")
            continue
        if filtro(reg):
            g = shape(sr.shape.__geo_interface__)
            out.append((reg, g if g.is_valid else g.buffer(0)))
    return out


def ler_ne(nome, filtro=lambda p: True):
    fc = json.load(open(os.path.join(NE, nome), encoding="utf-8"))
    return [(f["properties"], shape(f["geometry"])) for f in fc["features"] if f["geometry"] and filtro(f["properties"])]


def ler_osm(caminho):
    """a resposta da Overpass (out geom): devolve {'linhas': [(tags, LineString)], 'areas': [(tags, (Multi)Polygon)]}; os
    multipolígonos e os limites (relações boundary: cidade, parque) são costurados pelos membros (outer menos inner); as tags levam
    _id e _tipo do elemento"""
    d = json.load(open(caminho, encoding="utf-8"))
    linhas, areas = [], []

    def ls(geom):
        return LineString([(p["lon"], p["lat"]) for p in geom])

    for e in d["elements"]:
        t = dict(e.get("tags", {}), _id=e["id"], _tipo=e["type"])
        if e["type"] == "way" and "geometry" in e:
            g = ls(e["geometry"])
            if t.get("natural") == "water" or t.get("landuse") == "reservoir":
                if g.is_ring and len(g.coords) >= 4:
                    areas.append((t, Polygon(g.coords).buffer(0)))
            else:
                linhas.append((t, g))
        elif e["type"] == "relation" and t.get("type") in ("multipolygon", "boundary"):
            fora = [ls(m["geometry"]) for m in e["members"] if m["type"] == "way" and m.get("role") in ("outer", "") and "geometry" in m]
            dentro = [ls(m["geometry"]) for m in e["members"] if m["type"] == "way" and m.get("role") == "inner" and "geometry" in m]
            pf = unary_union(list(polygonize(linemerge(fora)))) if fora else Polygon()
            pd = unary_union(list(polygonize(linemerge(dentro)))) if dentro else Polygon()
            areas.append((t, pf.difference(pd).buffer(0)))
    return {"linhas": linhas, "areas": areas}


# ── o relevo: o cinza da GIBS vira volume e cor (o método da 3ª rodada do vídeo 7) ──
class Relevo:
    def __init__(self, cinza, sel, suave=1.6, sig_vol=4.5, vol=0.62, nit=1.5, sig_loc=26, aprofundar=0.0, sig_rug=5.0):
        """cinza: o relevo sombreado (0..1); sel: onde é terra (para os percentis). aprofundar > 0 escurece o terreno acidentado (o
        desvio local do cinza, medido na própria base): o cânion vira uma faixa funda. 0 é o método do vídeo 7"""
        hs_s = cv2.GaussianBlur(cinza, (0, 0), suave)
        hs_l = cv2.GaussianBlur(cinza, (0, 0), sig_vol)
        hs_m = (1 - vol) * hs_s + vol * hs_l
        hs_d = hs_m + nit * (hs_m - cv2.GaussianBlur(hs_m, (0, 0), sig_loc))
        p2, p98 = np.percentile(hs_d[sel], 1.5), np.percentile(hs_d[sel], 98.5)
        self.n = np.clip((hs_d - p2) / max(1e-6, p98 - p2), 0, 1).astype(np.float32)
        # a rugosidade: o desvio local do cinza (o terreno acidentado), medido na própria base
        dev = np.abs(cinza - cv2.GaussianBlur(cinza, (0, 0), 2.0))
        rug = cv2.GaussianBlur(dev, (0, 0), sig_rug)
        r99 = np.percentile(rug[sel], 99.0)
        self.rug = np.clip(rug / max(1e-6, r99), 0, 1).astype(np.float32)
        if aprofundar > 0:
            self.n = np.clip(self.n * (1 - aprofundar * self.rug), 0, 1)
        self.piv = float(np.median(self.n[sel]))

    def aprofundar_por(self, d, forca, gama=1.0):
        """escurece o relevo pela profundidade d (0..1; de profundidade()): o fundo do cânion vai para a cor da sombra"""
        self.n = np.clip(self.n * (1 - forca * d ** gama), 0, 1).astype(np.float32)

    def cor(self, meio, sombra_f=0.30, sombra_tinta=(1.0, 0.86, 0.6), luz=(255, 244, 186), luz_f=0.72):
        meio = np.asarray(meio, float)
        sombra = meio * sombra_f * np.asarray(sombra_tinta)
        luz_c = meio + (np.asarray(luz, float) - meio) * luz_f
        t = self.n
        a = np.clip(t / self.piv, 0, 1)[..., None]
        b = np.clip((t - self.piv) / (1 - self.piv), 0, 1)[..., None]
        s_, m_, l_ = (c[None, None, :] for c in (sombra, meio, luz_c))
        return np.where((t < self.piv)[..., None], s_ + (m_ - s_) * a, m_ + (l_ - m_) * b)

    def amarelo(self):
        return self.cor(AMARELO, env("MINI_REL_SOMBRA", 0.30), (1.0, 0.86, 0.6), (255, 244, 186), env("MINI_REL_LUZ", 0.72))

    def vermelho(self):
        return self.cor(VERMELHO, env("MINI_REV_SOMBRA", 0.48), (1.0, 0.7, 0.8), (255, 150, 122), env("MINI_REV_LUZ", 0.40))


def perto_de(mascara_linha, raio_px):
    """o peso 1 sobre uma linha (ou área), caindo a 0 a raio_px dela, liso"""
    m8 = (mascara_linha < 0.5).astype(np.uint8)
    d = cv2.distanceTransform(m8, cv2.DIST_L2, 5)
    return np.clip(1 - d / raio_px, 0, 1).astype(np.float32) ** 1.5


def profundidade(elev, raio_px, d0, suave=None, d_min=0.0):
    """quanto cada ponto está abaixo do terreno mais alto num raio (o máximo local, alisado, menos a altitude), em 0..1 (d0 metros
    = 1; abaixo de d_min metros, 0): um cânion de 1.500 m sai 1, um vale raso sai 0. Medido na altitude do ASTER GDEM, não desenhado"""
    k = int(round(raio_px))
    topo = cv2.dilate(elev.astype(np.float32), cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * k + 1, 2 * k + 1)))
    topo = cv2.GaussianBlur(topo, (0, 0), suave or raio_px / 2)
    return np.clip((topo - elev - d_min) / (d0 - d_min), 0, 1).astype(np.float32)


def sombreado(elev, px_m, azim=315.0, alt=45.0, z=2.0, suave=1.5):
    """o relevo sombreado calculado da altitude (ASTER GDEM decodificado), na escala do palco, com exagero vertical z: o volume
    largo que as referências têm (o cinza da GIBS vem de 30 m e, reduzido, vira textura fina). Devolve 0..1 (0,5 ~ plano)"""
    e = cv2.GaussianBlur(elev.astype(np.float32), (0, 0), suave) * z
    gy, gx = np.gradient(e, px_m)
    declive = np.arctan(np.hypot(gx, gy))
    aspecto = np.arctan2(-gx, gy)
    az, al = math.radians(azim), math.radians(alt)
    hs = np.sin(al) * np.cos(declive) + np.cos(al) * np.sin(declive) * np.cos(az - math.pi / 2 - aspecto)
    return np.clip(hs, 0, 1).astype(np.float32)


def borda_de(m, lw):
    """o contorno de uma máscara, por fora, com lw px"""
    m8 = (m > 0.5).astype(np.uint8)
    k = max(1, int(round(lw)))
    dil = cv2.dilate(m8, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * k + 1, 2 * k + 1)))
    b = (dil - m8).astype(np.float32)
    return cv2.GaussianBlur(b, (0, 0), 0.7)


def sombra_fora(img, mascara, terra, sig=18, forca=1.1, teto=0.6):
    """a sombra escura e macia por fora de um destaque, que o descola do amarelo (a da Louisiana)"""
    s = cv2.GaussianBlur(mascara, (0, 0), sig) * (1 - mascara) * terra
    return compor(img, PRETO, np.clip(s * forca, 0, teto))


def pintar_agua(img, mascara, cor, textura=None, a=0.78, b=0.36):
    """a água: a cor lisa, ou com a textura leve de uma base (a luminância normalizada, como o mar do vídeo 7)"""
    if textura is None:
        return compor(img, cor, mascara)
    lm = luma(textura)
    sel = mascara > 0.5
    t = (lm - np.percentile(lm[sel], 5)) / max(1.0, np.percentile(lm[sel], 95) - np.percentile(lm[sel], 5))
    t = cv2.GaussianBlur(np.clip(t, 0, 1).astype(np.float32), (0, 0), 1.5)
    c = np.clip(np.asarray(cor, float)[None, None, :] * (a + b * t)[..., None], 0, 255)
    return img * (1 - mascara[..., None]) + c * mascara[..., None]


def rotulos(img, itens):
    """itens: [(texto, x, y, px, ancora)] ou [(texto, x, y, px, ancora, graus)], brancos com sombra (os CANADA/U.S. do vídeo 7); ancora
    do PIL ('mm', 'lm', 'rm'…). Com graus (nesta cópia), o rótulo gira em torno de (x, y), no sentido anti-horário, e a caixa é a dos
    quatro cantos girados"""
    cam = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(cam)
    caixas = {}
    for item in itens:
        texto, x, y, px, ancora = item[:5]
        graus = item[5] if len(item) > 5 else 0
        f = fonte(px, 800, 14)
        if not graus:
            d.text((x, y), texto, font=f, fill=BRANCO + (255,), anchor=ancora)
            caixas[texto] = [round(v) for v in d.textbbox((x, y), texto, font=f, anchor=ancora)]
            continue
        camada = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ImageDraw.Draw(camada).text((x, y), texto, font=f, fill=BRANCO + (255,), anchor=ancora)
        bb = ImageDraw.Draw(camada).textbbox((x, y), texto, font=f, anchor=ancora)
        camada = camada.rotate(graus, resample=Image.BICUBIC, center=(x, y))
        cam.alpha_composite(camada)
        c, s_ = math.cos(math.radians(graus)), math.sin(math.radians(graus))
        cs = [(x + (u - x) * c + (v - y) * s_, y - (u - x) * s_ + (v - y) * c) for u, v in ((bb[0], bb[1]), (bb[2], bb[1]), (bb[2], bb[3]), (bb[0], bb[3]))]
        caixas[texto] = [round(min(p[0] for p in cs)), round(min(p[1] for p in cs)), round(max(p[0] for p in cs)), round(max(p[1] for p in cs))]
    a = np.asarray(cam.split()[3]).astype(np.float32) / 255
    somb = np.roll(np.roll(cv2.GaussianBlur(cv2.dilate(a, np.ones((5, 5), np.uint8)), (0, 0), 4), 4, 0), 3, 1)
    img = compor(img, PRETO, np.clip(somb * 1.2, 0, 0.85))
    img = compor(img, BRANCO, a)
    return img, caixas, a


# ── as peças por cima: a caixa preta com o texto, e as setas brancas grossas e curvas (as do vídeo 7) ──
def bezier(p0, p1, p2, p3, n=260):
    return [tuple((1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * e
                  for a, b, c, e in zip(p0, p1, p2, p3)) for t in (i / n for i in range(n + 1))]


def caminho(pontos, n=400):
    """uma curva lisa por vários pontos (Catmull-Rom centrípeta), para a seta que dá a volta"""
    P = [np.asarray(p, float) for p in pontos]
    P = [P[0] + (P[0] - P[1])] + P + [P[-1] + (P[-1] - P[-2])]
    out = []
    seg = len(P) - 3
    for i in range(seg):
        p0, p1, p2, p3 = P[i], P[i + 1], P[i + 2], P[i + 3]
        t0 = 0.0
        t1 = t0 + np.linalg.norm(p1 - p0) ** 0.5
        t2 = t1 + np.linalg.norm(p2 - p1) ** 0.5
        t3 = t2 + np.linalg.norm(p3 - p2) ** 0.5
        m = max(2, n // seg)
        for t in np.linspace(t1, t2, m, endpoint=(i == seg - 1)):
            a1 = (t1 - t) / (t1 - t0) * p0 + (t - t0) / (t1 - t0) * p1
            a2 = (t2 - t) / (t2 - t1) * p1 + (t - t1) / (t2 - t1) * p2
            a3 = (t3 - t) / (t3 - t2) * p2 + (t - t2) / (t3 - t2) * p3
            b1 = (t2 - t) / (t2 - t0) * a1 + (t - t0) / (t2 - t0) * a2
            b2 = (t3 - t) / (t3 - t1) * a2 + (t - t1) / (t3 - t1) * a3
            out.append(tuple((t2 - t) / (t2 - t1) * b1 + (t - t1) / (t2 - t1) * b2))
    return out


def forma_seta(curva, w0, w1, cab_l, cab_w):
    acum = [0.0]
    for i in range(1, len(curva)):
        acum.append(acum[-1] + math.dist(curva[i - 1], curva[i]))
    Lc = acum[-1]
    corte = Lc - cab_l * 0.9
    corpo = [(p, a) for p, a in zip(curva, acum) if a <= corte]
    esq, dirr = [], []
    for i, (p, a) in enumerate(corpo):
        q0 = corpo[max(0, i - 1)][0]
        q1 = corpo[min(len(corpo) - 1, i + 1)][0]
        tx, ty = q1[0] - q0[0], q1[1] - q0[1]
        n = math.hypot(tx, ty) or 1
        nx, ny = -ty / n, tx / n
        w = w0 + (w1 - w0) * (a / corte) ** 0.7
        esq.append((p[0] + nx * w / 2, p[1] + ny * w / 2))
        dirr.append((p[0] - nx * w / 2, p[1] - ny * w / 2))
    ponta = curva[-1]
    i_b = max(i for i, a in enumerate(acum) if a <= Lc - cab_l)
    bx, by = curva[i_b]
    dx, dy = ponta[0] - bx, ponta[1] - by
    n = math.hypot(dx, dy)
    ux, uy = dx / n, dy / n
    bx, by = ponta[0] - ux * cab_l, ponta[1] - uy * cab_l
    cabeca = [(bx - uy * cab_w / 2, by + ux * cab_w / 2), ponta, (bx + uy * cab_w / 2, by - ux * cab_w / 2)]
    return esq + dirr[::-1], cabeca, corpo[0][0], Lc


def desenhar_setas(img, curvas, w0=26, w1=52, cab_l=118, cab_w=158):
    """curvas: listas de pontos do palco (de bezier() ou caminho()); brancas, com contorno escuro fino e sombra (as das referências)"""
    m = Image.new("L", (W * K, H * K), 0)
    d = ImageDraw.Draw(m)
    comps = []
    for curva in curvas:
        corpo, cab, ini, Lc = forma_seta(curva, w0, w1, cab_l, cab_w)
        d.polygon([(x * K, y * K) for x, y in corpo], fill=255)
        d.polygon([(x * K, y * K) for x, y in cab], fill=255)
        d.ellipse([(ini[0] - w0 / 2) * K, (ini[1] - w0 / 2) * K, (ini[0] + w0 / 2) * K, (ini[1] + w0 / 2) * K], fill=255)
        comps.append(round(Lc))
    a = np.asarray(m.resize((W, H), Image.LANCZOS)).astype(np.float32) / 255
    contorno = cv2.GaussianBlur(cv2.dilate(a, np.ones((7, 7), np.uint8)), (0, 0), 1.0)
    somb = np.roll(np.roll(cv2.GaussianBlur(cv2.dilate(a, np.ones((9, 9), np.uint8)), (0, 0), 10), 12, 0), 8, 1)
    img = compor(img, PRETO, np.clip(somb * 0.75, 0, 0.75))
    img = compor(img, PRETO, contorno * 0.85)
    img = compor(img, BRANCO, a)
    return img, comps, a



def _pedacos(s, cor):
    """uma linha da caixa: um texto de uma cor só (str) ou de várias ([(pedaço, cor), ...]); devolve o texto inteiro e os pedaços"""
    if isinstance(s, str):
        return s, [(s, cor)]
    return "".join(p for p, c in s), list(s)


def caixa_texto(img, x0, y0, linhas, pad_x, pad_y, entre, raio=10, barra=None):
    """linhas: [(texto, px, peso, cor)]; o texto pode ser uma lista de (pedaço, cor) para uma linha de duas cores; uma caixa preta só,
    com as linhas alinhadas à esquerda; devolve a imagem e a caixa.
    barra: (espessura, distância, cor), o sublinhado vermelho sob a última linha, na largura dela"""
    medidas_l, larg, alt = [], 0, 0
    for i, (s, px, peso, cor) in enumerate(linhas):
        txt, pcs = _pedacos(s, cor)
        f = fonte(px * K, peso, 32 if px > 80 else 14)
        bb = f.getbbox(txt)
        cap = f.getbbox("H")
        w_ = (bb[2] - bb[0]) / K
        h_ = (cap[3] - cap[1]) / K
        medidas_l.append((txt, pcs, f, bb, cap, w_, h_))
        larg = max(larg, w_)
        alt += h_ + (entre[i - 1] if i else 0)
    if barra:
        alt += barra[0] + barra[1]
    caixa = (x0, y0, x0 + larg + 2 * pad_x, y0 + alt + 2 * pad_y)
    cam = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
    d = ImageDraw.Draw(cam)
    d.rounded_rectangle([v * K for v in caixa], radius=raio * K, fill=PRETO + (250,))
    y = y0 + pad_y
    caixas_l = {}
    for i, (txt, pcs, f, bb, cap, w_, h_) in enumerate(medidas_l):
        if i:
            y += entre[i - 1]
        x = (x0 + pad_x) * K - bb[0]
        feito = ""
        for p, c in pcs:
            # cada pedaço começa no avanço do texto anterior (o kerning entre pedaços é o do espaço, que fica no fim do 1º)
            d.text((x + f.getlength(feito), y * K - cap[1]), p, font=f, fill=c + (255,))
            feito += p
        caixas_l[txt] = [round(x0 + pad_x), round(y), round(x0 + pad_x + w_), round(y + h_)]
        y += h_
    if barra:
        y += barra[1]
        d.rectangle([(x0 + pad_x) * K, y * K, (x0 + pad_x + medidas_l[-1][5]) * K, (y + barra[0]) * K], fill=barra[2] + (255,))
        caixas_l["_barra"] = [round(x0 + pad_x), round(y), round(x0 + pad_x + medidas_l[-1][5]), round(y + barra[0])]
    camr = cam.resize((W, H), Image.LANCZOS)
    a = np.asarray(camr.split()[3]).astype(np.float32) / 255
    somb = np.roll(np.roll(cv2.GaussianBlur(a, (0, 0), 14), 12, 0), 9, 1)
    img = compor(img, PRETO, np.clip(somb * 0.6, 0, 0.6))
    rgb = np.asarray(camr.convert("RGB")).astype(np.float32)
    img = img * (1 - a[..., None]) + rgb * a[..., None]
    return img, [round(v) for v in caixa], caixas_l, a


def medir_texto(linhas, entre=None):
    """a largura e a altura que caixa_texto() daria às linhas (sem o padding e a barra), sem desenhar (para posicionar antes)"""
    larg, alt = 0, 0
    for i, (s, px, peso, cor) in enumerate(linhas):
        txt, _ = _pedacos(s, cor)
        f = fonte(px * K, peso, 32 if px > 80 else 14)
        bb = f.getbbox(txt)
        cap = f.getbbox("H")
        larg = max(larg, (bb[2] - bb[0]) / K)
        alt += (cap[3] - cap[1]) / K + ((entre[i - 1] if entre else 0) if i else 0)
    return larg, alt


# ── novo nesta cópia: as bases nos dois lugares, o HPMS, o ponto da cidade e a seta que segue a estrada ──
def base_em(nome):
    """o caminho de uma base: a nova (roteiros/peru-agua/miniatura/reembalagem-2026-11-18/_bases) ou a já baixada
    (out/_pautas/video-8/miniaturas/_bases)"""
    for p in (os.path.join(BASES_NOVAS, nome), os.path.join(BASES, nome)):
        if os.path.exists(p):
            return p
    sys.exit("a base %s não está no disco: rode o n-bases.py" % nome)


def ler_fc(caminho):
    """nesta cópia: um GeoJSON (FeatureCollection) do _media/geo do vídeo, como [(propriedades, geometria shapely)], e o sha256 medido"""
    fc = json.load(open(caminho, encoding="utf-8"))
    out = []
    for f in fc["features"]:
        if not f.get("geometry"):
            continue
        g = shape(f["geometry"])
        out.append((f["properties"], g if g.is_valid else g.buffer(0)))
    return out, sha256(caminho)


def rotulo_claro(img, texto, x, y, px, ancora="mm", pad_x=None, pad_y=None, raio=18, fundo=(246, 243, 236), tinta=(16, 18, 22)):
    """nesta cópia: o rótulo de cidade das referências do Big Sur (texto escuro, Inter 800, numa caixa clara de cantos redondos, com sombra), que
    lê a 320. (x, y) é o ponto de ancoragem da caixa ('mm' = o centro; 'rm' = o meio da borda direita; 'lm', 'mb', 'mt'...). Devolve a imagem,
    a caixa e o alfa"""
    f = fonte(px * K, 800, 32 if px > 80 else 14)
    cap = f.getbbox("H")
    bb = f.getbbox(texto)
    w_, h_ = (bb[2] - bb[0]) / K, (cap[3] - cap[1]) / K
    pad_x = pad_x if pad_x is not None else round(0.36 * px)
    pad_y = pad_y if pad_y is not None else round(0.30 * px)
    cw, ch = w_ + 2 * pad_x, h_ + 2 * pad_y
    ax = {"l": 0.0, "m": 0.5, "r": 1.0}[ancora[0]]
    ay = {"t": 0.0, "m": 0.5, "b": 1.0}[ancora[1]]
    x0, y0 = x - ax * cw, y - ay * ch
    caixa = (x0, y0, x0 + cw, y0 + ch)
    cam = Image.new("RGBA", (W * K, H * K), (0, 0, 0, 0))
    d = ImageDraw.Draw(cam)
    d.rounded_rectangle([v * K for v in caixa], radius=raio * K, fill=tuple(fundo) + (255,))
    d.text(((x0 + pad_x) * K - bb[0], (y0 + pad_y) * K - cap[1]), texto, font=f, fill=tuple(tinta) + (255,))
    camr = cam.resize((W, H), Image.LANCZOS)
    a = np.asarray(camr.split()[3]).astype(np.float32) / 255
    somb = np.roll(np.roll(cv2.GaussianBlur(a, (0, 0), 12), 10, 0), 7, 1)
    img = compor(img, PRETO, np.clip(somb * 0.6, 0, 0.6))
    rgb = np.asarray(camr.convert("RGB")).astype(np.float32)
    img = img * (1 - a[..., None]) + rgb * a[..., None]
    return img, [round(v) for v in caixa], a


def ler_shp(caminho, campo, sha_esperado=None):
    """um shapefile solto (o de biomas do IBGE, em SIRGAS 2000 geográfico, que difere do WGS 84 em menos de 1 m): devolve {valor do campo:
    geometria shapely em lon/lat} e o registro (o sha256 do .shp)"""
    import shapefile
    sha = sha256(caminho)
    if sha_esperado and sha != sha_esperado:
        sys.exit("%s não confere com o sha256 esperado: parei" % os.path.basename(caminho))
    r = shapefile.Reader(caminho, encoding="utf-8")
    out = {}
    for sr in r.iterShapeRecords():
        g = shape(sr.shape.__geo_interface__)
        if not g.is_valid:
            g = g.buffer(0)
        out[sr.record[campo]] = g
    return out, {"arquivo": os.path.relpath(caminho, RAIZ).replace("\\", "/"), "sha256_shp": sha}


def ler_geojson(caminho, filtro=lambda p: True, sha_esperado=None):
    """um GeoJSON (o Natural Earth da pré-v1, C:/projetos/regie-v1/acervo/geojson/, com o sha256 do manifest.json dela)"""
    sha = sha256(caminho)
    if sha_esperado and sha != sha_esperado:
        sys.exit("%s não confere com o sha256 do manifesto: parei" % os.path.basename(caminho))
    fc = json.load(open(caminho, encoding="utf-8"))
    return [(f["properties"], shape(f["geometry"])) for f in fc["features"] if f["geometry"] and filtro(f["properties"])], sha


def lonlat(q, x, y):
    """o inverso de Quadro.palco(): (x, y) do palco para (lon, lat)"""
    return (math.degrees((q.FX0 + x * q.MP) / R_TERRA), math.degrees(2 * math.atan(math.exp((q.FY1 - y * q.MP) / R_TERRA)) - math.pi / 2))


def seta_dupla(img, p0, p1, w=60, cab_l=130, cab_w=175):
    """a seta reta de duas pontas (a do vão): o corpo de largura w e as duas cabeças, com as pontas exatamente em p0 e p1; branca, com o
    contorno escuro fino e a sombra das outras setas"""
    m = Image.new("L", (W * K, H * K), 0)
    d = ImageDraw.Draw(m)
    (x0, y0), (x1, y1) = p0, p1
    L = math.hypot(x1 - x0, y1 - y0)
    ux, uy = (x1 - x0) / L, (y1 - y0) / L
    nx, ny = -uy, ux
    a0 = (x0 + ux * cab_l * 0.9, y0 + uy * cab_l * 0.9)
    a1 = (x1 - ux * cab_l * 0.9, y1 - uy * cab_l * 0.9)
    corpo = [(a0[0] + nx * w / 2, a0[1] + ny * w / 2), (a1[0] + nx * w / 2, a1[1] + ny * w / 2),
             (a1[0] - nx * w / 2, a1[1] - ny * w / 2), (a0[0] - nx * w / 2, a0[1] - ny * w / 2)]
    d.polygon([(x * K, y * K) for x, y in corpo], fill=255)
    for (px, py), s in (((x0, y0), 1), ((x1, y1), -1)):
        bx, by = px + s * ux * cab_l, py + s * uy * cab_l
        cab = [(bx + nx * cab_w / 2, by + ny * cab_w / 2), (px, py), (bx - nx * cab_w / 2, by - ny * cab_w / 2)]
        d.polygon([(x * K, y * K) for x, y in cab], fill=255)
    a = np.asarray(m.resize((W, H), Image.LANCZOS)).astype(np.float32) / 255
    contorno = cv2.GaussianBlur(cv2.dilate(a, np.ones((7, 7), np.uint8)), (0, 0), 1.0)
    somb = np.roll(np.roll(cv2.GaussianBlur(cv2.dilate(a, np.ones((9, 9), np.uint8)), (0, 0), 10), 12, 0), 8, 1)
    img = compor(img, PRETO, np.clip(somb * 0.75, 0, 0.75))
    img = compor(img, PRETO, contorno * 0.85)
    img = compor(img, BRANCO, a)
    return img, round(L), a


def _hav_mi(a, b):
    R = 3958.7613
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def seta_suave(pontos_palco, passo=6.0, sig=14.0, corte_ini=0.0):
    """a seta que segue uma linha de verdade: reamostra a linha do palco a cada `passo` px e alisa com uma gaussiana de `sig` px ao longo
    dela (a seta tem 26 a 52 px de largura; a estrada, as curvas de uns poucos px). As pontas ficam presas. Devolve a curva e o desvio
    (máximo e mediano, em px do palco) entre a curva e a linha original"""
    P = np.asarray(pontos_palco, float)
    seg = np.hypot(*np.diff(P, axis=0).T)
    s = np.concatenate([[0], np.cumsum(seg)])
    n = max(2, int(s[-1] / passo))
    t = np.linspace(0, s[-1], n)
    R = np.stack([np.interp(t, s, P[:, 0]), np.interp(t, s, P[:, 1])], 1)
    k = int(3 * sig / passo)
    pad = np.concatenate([np.repeat(R[:1], k, 0), R, np.repeat(R[-1:], k, 0)])
    g = np.exp(-0.5 * (np.arange(-k, k + 1) * passo / sig) ** 2)
    g /= g.sum()
    Rs = np.stack([np.convolve(pad[:, 0], g, "valid"), np.convolve(pad[:, 1], g, "valid")], 1)
    Rs[0], Rs[-1] = R[0], R[-1]
    if corte_ini > 0:
        Rs = Rs[t >= corte_ini]
    linha_orig = LineString(P)
    desv = np.array([linha_orig.distance(shapely.geometry.Point(p)) for p in Rs])
    return [tuple(p) for p in Rs], {"desvio_max_px": round(float(desv.max()), 1), "desvio_mediano_px": round(float(np.median(desv)), 1)}


def desenhar_setas_traco(img, curvas, w0=26, w1=52, cab_l=118, cab_w=158):
    """como desenhar_setas(), mas o corpo é um traço (um círculo e um segmento por ponto da curva, com a largura crescendo de w0 a w1),
    e não o polígono dos dois lados: numa curva fechada (a volta de Las Vegas), o lado de dentro do polígono dobrava sobre si e deixava um
    dente. A cabeça é a mesma de forma_seta()"""
    m = Image.new("L", (W * K, H * K), 0)
    d = ImageDraw.Draw(m)
    comps = []
    for curva in curvas:
        acum = [0.0]
        for i in range(1, len(curva)):
            acum.append(acum[-1] + math.dist(curva[i - 1], curva[i]))
        Lc = acum[-1]
        corte = Lc - cab_l * 0.9
        corpo = [(p, a) for p, a in zip(curva, acum) if a <= corte]
        larg = [w0 + (w1 - w0) * (a / corte) ** 0.7 for p, a in corpo]
        for i, ((p, a), w) in enumerate(zip(corpo, larg)):
            x, y = p
            d.ellipse([(x - w / 2) * K, (y - w / 2) * K, (x + w / 2) * K, (y + w / 2) * K], fill=255)
            if i:
                q0 = corpo[i - 1][0]
                d.line([(q0[0] * K, q0[1] * K), (x * K, y * K)], fill=255, width=max(1, int(round(min(w, larg[i - 1]) * K))))
        _, cab, _, _ = forma_seta(curva, w0, w1, cab_l, cab_w)
        d.polygon([(x * K, y * K) for x, y in cab], fill=255)
        comps.append(round(Lc))
    a = np.asarray(m.resize((W, H), Image.LANCZOS)).astype(np.float32) / 255
    contorno = cv2.GaussianBlur(cv2.dilate(a, np.ones((7, 7), np.uint8)), (0, 0), 1.0)
    somb = np.roll(np.roll(cv2.GaussianBlur(cv2.dilate(a, np.ones((9, 9), np.uint8)), (0, 0), 10), 12, 0), 8, 1)
    img = compor(img, PRETO, np.clip(somb * 0.75, 0, 0.75))
    img = compor(img, PRETO, contorno * 0.85)
    img = compor(img, BRANCO, a)
    return img, comps, a


def ponto(img, x, y, r=17, borda=5):
    """o ponto branco de uma cidade, com contorno escuro e sombra (o 'ponto branco de 34 px' de embalagem.md §3)"""
    m = Image.new("L", (W * K, H * K), 0)
    ImageDraw.Draw(m).ellipse([(x - r) * K, (y - r) * K, (x + r) * K, (y + r) * K], fill=255)
    a = np.asarray(m.resize((W, H), Image.LANCZOS)).astype(np.float32) / 255
    contorno = cv2.GaussianBlur(cv2.dilate(a, np.ones((2 * borda + 1, 2 * borda + 1), np.uint8)), (0, 0), 1.0)
    somb = np.roll(np.roll(cv2.GaussianBlur(contorno, (0, 0), 6), 6, 0), 4, 1)
    img = compor(img, PRETO, np.clip(somb * 0.6, 0, 0.6))
    img = compor(img, PRETO, contorno * 0.9)
    img = compor(img, BRANCO, a)
    return img, np.maximum(a, contorno)


def salvar(img, nome, pontos, alfa_pecas, pasta=PASTA):
    """grava <nome>-2560.jpg, <nome>-1280.jpg (até 2 MB), <nome>-320.png, <nome>-168.png e <nome>-pontos.json"""
    os.makedirs(pasta, exist_ok=True)
    final = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    final.save(os.path.join(pasta, "%s-2560.jpg" % nome), quality=92, subsampling=0, optimize=True)
    m1280 = final.resize((1280, 720), Image.LANCZOS)
    q = 95
    J = os.path.join(pasta, "%s-1280.jpg" % nome)
    while True:
        m1280.save(J, quality=q, subsampling=0, optimize=True)
        if os.path.getsize(J) <= 2 * 1024 * 1024 or q <= 70:
            break
        q -= 5
    final.resize((320, 180), Image.LANCZOS).save(os.path.join(pasta, "%s-320.png" % nome))
    final.resize((168, 94), Image.LANCZOS).save(os.path.join(pasta, "%s-168.png" % nome))
    CANTO = (W - 320, H - 320)
    pontos["canto_duracao_320"] = {"caixa": [CANTO[0], CANTO[1], W, H], "alfa_max_pecas": int(round(255 * float(alfa_pecas[CANTO[1]:, CANTO[0]:].max())))}
    pontos["luminancia_media_final"] = round(float(np.asarray(final.convert("L")).mean()), 1)
    pontos["jpg_1280_bytes"] = os.path.getsize(J)
    pontos["jpg_1280_qualidade"] = q
    pontos.setdefault("pedidos_de_rede", 0)
    json.dump(pontos, open(os.path.join(pasta, "%s-pontos.json" % nome), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print(json.dumps(pontos, ensure_ascii=False)[:1200])
    return final
