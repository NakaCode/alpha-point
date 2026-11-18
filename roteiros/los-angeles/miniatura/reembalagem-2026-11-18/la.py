"""O mapa comum das 2 miniaturas novas da reembalagem do vídeo 1 (`los-angeles`, 18/11/2026): a terra em relevo amarelo e o mar azul. O n1.py
("9 MILES") e o n2.py ("NOT LA / YET") importam este módulo e pintam por cima o vermelho, o ciano, a caixa e as setas. Não faz pedido de rede.
Escrito para esta pasta, no molde do australia.py (roteiros/australia-animais/miniatura/), que não foi editado.

    python -X utf8 -B -P roteiros/los-angeles/miniatura/reembalagem-2026-11-18/la.py      (da raiz; só o mapa, em _bases/_tmp/)

As camadas (todas de geometria real; nada desenhado à mão nem por IA):
- A TERRA E O MAR: a costa do TIGER/Line 2025 (Coastline, o arquivo nacional de que saiu out/los-angeles/_media/geo/costa-hoje-tiger.json),
  costurada com a borda de uma caixa e transformada em faces (polygonize). Cada face é terra ou mar pela altitude do ASTER GDEM (a GIBS dá o mar
  sem dado): vale a maioria dos pixels da face. Da terra se tira a água do TIGER/Line 2025 Area Hydrography dos condados de Los Angeles e de
  Orange (as baías H2051, os lagos H2030 e os reservatórios H2040 de pelo menos 20.000 m², o filtro do agua-porto-hoje-tiger.json; sem os rios,
  H3010, e sem o oceano, H2053, que a costa já separa), MAS SÓ A QUE SE LIGA AO MAR: as baías e, em cadeia, o corpo que encosta (a ~30 m) no
  mar ou noutro já escolhido (o porto, as marinas, Alamitos Bay, Anaheim Bay). Os lagos e reservatórios de dentro (Silver Lake, Echo Park,
  MacArthur, Harbor Lake, Baldwin Hills) ficam como terra: na 2ª rodada viravam pontos de contorno branco no vermelho e no ciano, ruído na
  miniatura, e o mapa do cético só pede a água do porto e a costa;
- AS CIDADES: as camadas do vídeo, em out/los-angeles/_media/geo/ (o TIGER 2025 e o Hamlin de 1916), lidas com o sha256 registrado no
  pauta-geo.json do vídeo, e sempre cortadas pela terra (o TIGER põe a água do porto e o mar dentro das cidades);
- O RELEVO AMARELO: o cinza da GIBS (ASTER_GDEM_Greyscale_Shaded_Relief) misturado com o sombreado calculado da altitude do ASTER GDEM (o índice
  de cor da GIBS decodificado pelo colormap), com exagero vertical (a bacia de Los Angeles é quase plana);
- O MAR: azul saturado, com a textura leve da batimetria da Blue Marble (GIBS).
"""
import hashlib, io, json, math, os, sys, zipfile
import numpy as np
import cv2
from shapely.geometry import shape, box, LineString, MultiLineString, Polygon, MultiPolygon, GeometryCollection, Point
from shapely.ops import unary_union, polygonize, linemerge
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

GEO = os.path.join(M.RAIZ, "out", "los-angeles", "_media", "geo")
PAUTA_GEO = os.path.join(M.RAIZ, "out", "los-angeles", "_pesquisa", "pauta-geo.json")
CAIXA = box(-118.95, 33.55, -117.60, 34.25)        # a das bases da GIBS (n-bases.py)
AGUA_MTFCC = ("H2051", "H2030", "H2040")
AGUA_MIN_M2 = 20000
FINO_GRAUS = 0.0005         # ~50 m: o recuo que apaga um corpo de água com menos de ~100 m de largura (a 1ª prévia, a ~30 m, deixava canais)


def _rel(p):
    return os.path.relpath(p, M.RAIZ).replace("\\", "/")


def ler_geo(nome):
    """uma camada do vídeo (out/los-angeles/_media/geo/<nome>.json): [(props, geometria)] e o registro (o sha256 medido; o da pauta-geo, se
    houver)"""
    p = os.path.join(GEO, nome + ".json")
    sha = M.sha256(p)
    reg = {"arquivo": _rel(p), "sha256": sha}
    try:
        pauta = json.load(open(PAUTA_GEO, encoding="utf-8"))
        txt = json.dumps(pauta, ensure_ascii=False)
        reg["sha256_na_pauta_geo"] = sha in txt
    except Exception as e:      # a pauta é só conferência
        reg["sha256_na_pauta_geo"] = "não lida: %s" % e
    fc = json.load(open(p, encoding="utf-8"))
    return [(f["properties"], shape(f["geometry"])) for f in fc["features"] if f["geometry"]], reg


def _zip_reader(caminho):
    import shapefile
    z = zipfile.ZipFile(caminho)
    nomes = z.namelist()
    pega = lambda ext: io.BytesIO(z.read([n for n in nomes if n.endswith(ext)][0]))
    return shapefile.Reader(shp=pega(".shp"), shx=pega(".shx"), dbf=pega(".dbf"))


def _sha_base(p):
    meta = json.load(open(p + ".json", encoding="utf-8"))
    s = M.sha256(p)
    if s != meta["sha256"]:
        sys.exit("%s não confere com o sha256 do .json: parei" % os.path.basename(p))
    return {"arquivo": _rel(p), "sha256": s, "url": meta["procedencia"]["url"], "baixado_em": meta["procedencia"]["baixado_em"]}


def costa():
    """as linhas da costa do TIGER 2025 que tocam a CAIXA, cortadas nela"""
    p = M.base_em("tl_2025_us_coastline.zip")
    rd = _zip_reader(p)
    x0, y0, x1, y1 = CAIXA.bounds
    linhas = []
    for i, shp in enumerate(rd.iterShapes()):
        bx = shp.bbox
        if bx[2] < x0 or bx[0] > x1 or bx[3] < y0 or bx[1] > y1:
            continue
        g = shape(shp.__geo_interface__).intersection(CAIXA)
        for parte in getattr(g, "geoms", [g]):
            if isinstance(parte, LineString) and not parte.is_empty:
                linhas.append(parte)
    return linhas, _sha_base(p)


def agua():
    """a água do TIGER 2025 Area Hydrography (LA e Orange) que toca a CAIXA, pelo filtro do agua-porto-hoje-tiger.json"""
    partes, regs, nomes, finos = [], [], [], []
    for cod in ("06037", "06059"):
        p = M.base_em("tl_2025_%s_areawater.zip" % cod)
        rd = _zip_reader(p)
        campos = [f[0] for f in rd.fields[1:]]
        for sr in rd.iterShapeRecords():
            r = dict(zip(campos, list(sr.record)))
            if r["MTFCC"] not in AGUA_MTFCC or r["AWATER"] < AGUA_MIN_M2:
                continue
            g = shape(sr.shape.__geo_interface__)
            if not g.is_valid:
                g = g.buffer(0)
            if not g.intersects(CAIXA):
                continue
            # alguns canais vêm como H2030 compridos e finos: viravam riscos azuis soltos no amarelo (1ª prévia), enquanto os rios (H3010) ficam
            # fora. Sai o corpo que não é baía (H2051) e não tem nem ~100 m de largura em ponto nenhum (o recuo de ~50 m o apaga)
            if r["MTFCC"] != "H2051" and g.buffer(-FINO_GRAUS).is_empty:
                finos.append(r["FULLNAME"] or "(sem nome, %s)" % r["MTFCC"])
                continue
            partes.append((r["MTFCC"], r["FULLNAME"] or "(sem nome, %s)" % r["MTFCC"], g))
        regs.append(_sha_base(p))
    return partes, regs, finos


def ligada_ao_mar(partes, mar_geo, folga=0.0003):
    """os corpos de água ligados ao mar: começa pelo mar (a caixa menos as faces de terra) e, em cadeia, junta todo corpo que encosta (a `folga`
    graus, ~30 m) no que já foi escolhido. Devolve os escolhidos e os de fora"""
    escolhidos, resto = [], list(partes)
    alcance = mar_geo.buffer(folga)
    while True:
        novos = [pt for pt in resto if pt[2].intersects(alcance)]
        if not novos:
            break
        escolhidos += novos
        resto = [pt for pt in resto if pt not in novos]
        alcance = unary_union([alcance] + [pt[2].buffer(folga) for pt in novos])
    return escolhidos, resto


def _nodata_base():
    """o 'sem dado' do ASTER GDEM da GIBS (o mar), na grade da base: (máscara bool, janela 3857, m por px)"""
    p = M.base_em("la-aster-altitude.png")
    meta = json.load(open(p + ".json", encoding="utf-8"))
    from PIL import Image
    rgba = np.asarray(Image.open(p).convert("RGBA")).astype(np.int32)
    chave = rgba[..., 0] * 65536 + rgba[..., 1] * 256 + rgba[..., 2]
    nd = (rgba[..., 3] == 0) | (chave == 0)
    jan = meta["janela_3857"]
    return nd, jan, (jan[2] - jan[0]) / nd.shape[1]


def terra():
    """a terra: as faces da costa (com a borda da CAIXA) que o ASTER dá como terra, menos a água do Area Hydrography. Devolve a geometria e o
    registro"""
    linhas, reg_costa = costa()
    rede = unary_union(linhas + [CAIXA.exterior])
    faces = list(polygonize(rede))
    nd, jan, mpx = _nodata_base()
    H_, W_ = nd.shape
    escolhidas, descartes = [], []
    def _px(anel):
        return np.array([((M.merc(x, y)[0] - jan[0]) / mpx, (jan[3] - M.merc(x, y)[1]) / mpx) for x, y in anel.coords])

    for f in faces:
        ext = _px(f.exterior)
        c0, r0 = max(0, int(ext[:, 0].min()) - 1), max(0, int(ext[:, 1].min()) - 1)
        c1, r1 = min(W_, int(ext[:, 0].max()) + 2), min(H_, int(ext[:, 1].max()) + 2)
        if c1 <= c0 or r1 <= r0:
            descartes.append({"area_graus2": f.area, "motivo": "fora da base"})
            continue
        m = np.zeros((r1 - r0, c1 - c0), np.uint8)
        cv2.fillPoly(m, [np.round((ext - (c0, r0)) * 4).astype(np.int32)], 1, lineType=cv2.LINE_8, shift=2)
        for b in f.interiors:
            cv2.fillPoly(m, [np.round((_px(b) - (c0, r0)) * 4).astype(np.int32)], 0, lineType=cv2.LINE_8, shift=2)
        n = int(m.sum())
        if n == 0:
            descartes.append({"area_graus2": f.area, "motivo": "menor que 1 px da base"})
            continue
        frac_nd = float(nd[r0:r1, c0:c1][m > 0].mean())
        if frac_nd < 0.5:
            escolhidas.append(f)
        else:
            descartes.append({"px": n, "sem_dado": round(frac_nd, 3)})
    partes, reg_agua, finos = agua()
    terra_faces = unary_union(escolhidas)
    mar_geo = CAIXA.difference(terra_faces)
    ligados, internos = ligada_ao_mar(partes, mar_geo)
    agua_g = unary_union([g for _, _, g in ligados])
    t = terra_faces.difference(agua_g).buffer(0)
    nomes = lambda lst: sorted(set(n for _, n, _ in lst if not n.startswith("(")))
    reg = {"costa": dict(reg_costa, linhas_na_caixa=len(linhas)), "faces": len(faces), "faces_de_terra": len(escolhidas),
           "agua": {"arquivos": reg_agua, "mtfcc": list(AGUA_MTFCC), "minimo_m2": AGUA_MIN_M2,
                    "ligada_ao_mar": {"quantos": len(ligados), "com_nome": nomes(ligados)},
                    "lagos_de_dentro_como_terra": {"quantos": len(internos), "com_nome": nomes(internos)},
                    "fora_por_finos": {"criterio": "não H2051 e sem ~100 m de largura em ponto nenhum", "quantos": len(finos),
                                       "com_nome": sorted(set(n for n in finos if not n.startswith("(")))}},
           "criterio": "face da costa (com a borda da caixa) é terra se menos da metade dos pixels dela é 'sem dado' no ASTER GDEM da GIBS; "
                       "da terra sai só a água ligada ao mar (ligada_ao_mar)"}
    return t, agua_g, reg


def montar(q, simpl=0.00002):
    """o mapa de um quadro q (M.Quadro): devolve um dicionário com as geometrias, as máscaras, o relevo e a imagem (sem as peças)"""
    t_geo, agua_geo, reg_terra = terra()
    t_geo_s = t_geo.simplify(simpl, preserve_topology=True)
    m_terra = q.mascara(t_geo_s)
    mar = 1 - m_terra

    rel_base, info_rel = q.ler_base(M.base_em("la-aster-relevo.png"))
    elev, info_alt = q.ler_altitude(M.base_em("la-aster-altitude.png"), M.base_em("gibs-colormap-ASTER_GDEM_Color_Index.xml"))
    mar_bm, info_bm = q.ler_base(M.base_em("la-bluemarble.png"))
    PX_M = q.MP * math.cos(math.radians((q.lat_s + q.lat_n) / 2))
    Z = M.env("MINI_SOMB_Z", 3.0)
    SUAVE = M.env("MINI_SOMB_SUAVE", 1.6)
    hs_dem = 0.5 * (M.sombreado(elev, PX_M, azim=315, alt=40, z=Z, suave=SUAVE) + M.sombreado(elev, PX_M, azim=270, alt=40, z=Z, suave=SUAVE))
    sel = m_terra > 0.5

    def _z(a):
        return (a - np.median(a[sel])) / max(1e-6, np.percentile(a[sel], 84) - np.percentile(a[sel], 16))

    MIX = M.env("MINI_SOMB_MIX", 0.6)
    cinza = (1 - MIX) * _z(rel_base[..., 0] / 255.0) + MIX * _z(hs_dem)
    rel = M.Relevo(cinza, sel, suave=M.env("MINI_REL_SUAVE", 1.2), sig_vol=M.env("MINI_REL_SIG_VOL", 4.0), vol=M.env("MINI_REL_VOL", 0.5),
                   nit=M.env("MINI_REL_NIT", 1.6), sig_loc=M.env("MINI_REL_SIG_LOC", 26), aprofundar=M.env("MINI_APROFUNDAR", 0.0),
                   sig_rug=4.0)
    img = rel.amarelo()
    # o mar: a Blue Marble vem a ~500 m por px, ampliada em blocos pela GIBS, e os blocos da costa misturam terra. A textura é a luminância dela
    # só no mar longe da costa (o mar dos vetores recuado SIG_COSTA px), espalhada por convolução normalizada e lisa (MINI_MAR_SIG px)
    lm = M.luma(mar_bm).astype(np.float32)
    longe_costa = cv2.erode((mar > 0.5).astype(np.uint8), np.ones((int(M.env("MINI_MAR_SIG_COSTA", 41)),) * 2, np.uint8)).astype(np.float32)
    SIGM = M.env("MINI_MAR_SIG", 28)
    tex = cv2.GaussianBlur(lm * longe_costa, (0, 0), SIGM) / np.maximum(cv2.GaussianBlur(longe_costa, (0, 0), SIGM), 1e-3)
    tex[cv2.GaussianBlur(longe_costa, (0, 0), SIGM) < 1e-3] = float(np.median(lm[longe_costa > 0.5])) if (longe_costa > 0.5).any() else 0
    sel_m = mar > 0.5
    t = (tex - np.percentile(tex[sel_m], 5)) / max(1.0, np.percentile(tex[sel_m], 95) - np.percentile(tex[sel_m], 5))
    t = np.clip(t, 0, 1).astype(np.float32)
    c = np.clip(np.asarray(M.AZUL, float)[None, None, :] * (M.env("MINI_MAR_A", 0.84) + M.env("MINI_MAR_B", 0.30) * t)[..., None], 0, 255)
    img = img * (1 - mar[..., None]) + c * mar[..., None]

    # a costa: a terra dos vetores contra a do ASTER, além de 4 px dela (a conferência do registro entre o raster e os vetores)
    d_costa = cv2.distanceTransform((M.borda_de(m_terra, 1) < 0.3).astype(np.uint8), cv2.DIST_L2, 5)
    aster_terra = elev > 0.5
    longe = d_costa > 4
    disc = ((m_terra > 0.5) != aster_terra) & longe
    costa_c = {"terra_dos_vetores_sem_dado_no_aster_alem_de_4px": round(float(((m_terra > 0.5) & ~aster_terra & longe).sum() / max(1, ((m_terra > 0.5) & longe).sum())), 5),
               "mar_dos_vetores_com_altitude_no_aster_alem_de_4px": round(float(((m_terra < 0.5) & aster_terra & longe).sum() / max(1, ((m_terra < 0.5) & longe).sum())), 5),
               "px_discordantes_alem_de_4px": int(disc.sum())}
    medidas = {"quadro": q.medidas(), "px_chao_m": round(PX_M, 2), "px_por_km": round(1000 / PX_M, 2),
               "bases": {"relevo": info_rel, "altitude": info_alt, "mar": info_bm},
               "terra_e_agua": reg_terra,
               "relevo": {"mistura_sombreado_da_altitude": MIX, "exagero_vertical": Z, "luz_azimutes": [315, 270]},
               "mar": {"fracao_da_imagem": round(float((mar > 0.5).mean()), 4)},
               "costa_vetores_contra_aster": costa_c}
    return {"q": q, "img": img, "rel": rel, "terra": m_terra, "mar": mar, "terra_geo": t_geo, "agua_geo": agua_geo, "elev": elev,
            "disc": disc, "medidas": medidas}


def cortar(g, t_geo):
    """uma cidade cortada pela terra (o TIGER põe a água do porto e o mar dentro das cidades)"""
    return g.intersection(t_geo).buffer(0)


def previa(img, nome):
    from PIL import Image
    f = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    v = Image.new("RGB", (1280 + 20 + 320, 720), (15, 15, 15))
    v.paste(f.resize((1280, 720), Image.LANCZOS), (0, 0))
    v.paste(f.resize((320, 180), Image.LANCZOS), (1300, 0))
    v.paste(f.resize((168, 94), Image.LANCZOS), (1300, 200))
    os.makedirs(os.path.join(M.BASES_NOVAS, "_tmp"), exist_ok=True)
    v.save(os.path.join(M.BASES_NOVAS, "_tmp", nome), quality=90)


if __name__ == "__main__":
    q = M.Quadro(M.env("MINI_LAT_S", 33.69), M.env("MINI_LAT_N", 34.07), M.env("MINI_LON_C", -118.345))
    A = montar(q)
    img = A["img"].copy()
    if os.environ.get("MINI_VER_DISC"):
        img = M.compor(img, (255, 0, 255), cv2.dilate(A["disc"].astype(np.float32), np.ones((5, 5), np.uint8)))
    previa(img, "mapa-%s.jpg" % os.environ.get("MINI_SO_MAPA", "x"))
    from PIL import Image
    Image.fromarray(np.clip(img, 0, 255).astype(np.uint8)).save(os.path.join(M.BASES_NOVAS, "_tmp", "mapa-%s-2560.jpg" % os.environ.get("MINI_SO_MAPA", "x")), quality=88)
    print(json.dumps({k: A["medidas"][k] for k in ("quadro", "px_por_km", "mar", "costa_vetores_contra_aster", "terra_e_agua")}, ensure_ascii=False)[:3000])
