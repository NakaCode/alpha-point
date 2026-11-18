"""O mapa comum das 2 miniaturas novas da reembalagem do vídeo 2 (`zona-do-canal`, 18/11/2026): o istmo em relevo amarelo, o mar azul e a Zona
do Canal (a máscara, sem cor: o n1.py e o n2.py a pintam de vermelho). Não faz pedido de rede.

    python -X utf8 -B -P roteiros/zona-do-canal/miniatura/reembalagem-2026-11-18/zona.py      (da raiz; só o mapa, em _bases/_tmp/)

É a CÓPIA de roteiros/zona-do-canal/miniatura/base-B3.py (que não foi editado nem rodado), mudada assim:
- FICOU da B3, com os mesmos números: a Zona do polígono da folha AMS de 1947 (out/zona-do-canal/_media/geo/zona-do-canal-1947.json, LOC
  83694755), com o buraco interno; a junção do Madden (o menor fechamento que junta o corpo e o lago Madden, e do que ele acrescenta só o pedaço
  que encosta nas duas peças); a generalização da B (a abertura de raio ~5 px, que tira os braços finos do Gatún) sem soltar o Madden (o caminho
  de menor área entre o corpo e o Madden volta inteiro, com o que encosta nele); a Zona recortada pela terra com os lagos (os lagos e o canal
  ficam na Zona); a Zona tem de sair numa peça só;
- SAIU da B3: o relevo dos Terrain Tiles (o cache out/zona-do-canal/_tmp/miniatura/terrario/ já não existe), as cores verdes e o mar marinho, a
  bandeira e o --destaque. O estilo é o de hoje (marca/embalagem.md §3; roteiros/australia-animais/miniatura/ e roteiros/arizona-strip/
  miniatura/): o relevo amarelo do ASTER GDEM da GIBS (o cinza da GIBS misturado com o sombreado calculado da altitude), o mar azul com a
  textura leve da Blue Marble, e, nos n*.py, a Zona em vermelho com o relevo por baixo, o contorno branco e a sombra por fora;
- o MAR é o dos water polygons do OpenStreetMap (out/zona-do-canal/_media/geo/agua-osm-zona.json, que o vídeo já tem; ODbL), conferido contra
  o mar do ASTER (a altitude 0 m) e contra o Panamá do Natural Earth (panama-ne.json). A terra é tudo o que não é mar: os lagos (Gatún, Madden,
  Miraflores) ficam terra, como na B3 ("os lagos contam como terra");
- o QUADRO é o Quadro de mapa.py (Mercator 16:9). quadro_b3() dá o quadro da B3 (de 80,47 O, 1700 px por grau de longitude, o topo da Zona
  de 1947 em y 455); os n*.py o alargam (o cético, §4: "Alargue o quanto a caixa pedir").
Nada é desenhado à mão nem por IA: toda forma vem de geometria real.
"""
import hashlib, heapq, json, math, os, sys
import numpy as np
import cv2
from PIL import Image, ImageFilter
from shapely.geometry import shape, Point
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

GEO = os.path.join(M.RAIZ, "out", "zona-do-canal", "_media", "geo")
ZONA_JSON = os.path.join(GEO, "zona-do-canal-1947.json")
MAR_JSON = os.path.join(GEO, "agua-osm-zona.json")
PANAMA_JSON = os.path.join(GEO, "panama-ne.json")
L1936 = os.path.join(GEO, "lugares-1936.json")
L1947 = os.path.join(GEO, "lugares-1947.json")
SS = 2
W, H = M.W, M.H


def quadro_b3():
    """(lat_s, lat_n, lon_c) do quadro da B3: oeste em -80,47, 1700 px por grau de longitude no palco de 2560, o topo da Zona (9,4028 N) em y 455"""
    lon_esq, px_grau, y_ref, lat_ref = -80.47, 1700.0, 455, 9.4028
    largura_graus = W / px_grau
    mp = math.radians(largura_graus) * M.R_TERRA / W
    fy_topo = M.merc(0, lat_ref)[1] + y_ref * mp
    lat = lambda fy: math.degrees(2 * math.atan(math.exp(fy / M.R_TERRA)) - math.pi / 2)
    return (lat(fy_topo - H * mp), lat(fy_topo), lon_esq + largura_graus / 2)


def borrar(a, r):
    """o borrão da B3 (PIL GaussianBlur sobre 0..255), sem mudança"""
    return np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))) / 255.0


def sha_de(p):
    return M.sha256(p)


def lugar(arquivo, slug):
    fc = json.load(open(arquivo, encoding="utf-8"))
    f = [f for f in fc["features"] if f["properties"].get("slug") == slug]
    assert len(f) == 1, (arquivo, slug)
    return tuple(f[0]["geometry"]["coordinates"]), f[0]["properties"]


def mascara_zona(q, terra):
    """a Zona da B3 no quadro q: o polígono de 1947 em SS×, a junção do Madden, a volta a 1×, a generalização da B sem soltar o Madden, o recorte
    pela terra (com os lagos). Devolve a máscara (0..1, uma peça só) e o registro"""
    gj = json.load(open(ZONA_JSON, encoding="utf-8"))
    z_img = Image.new("L", (W * SS, H * SS), 0)
    b_img = Image.new("L", (W * SS, H * SS), 0)
    from PIL import ImageDraw
    dz, dbur = ImageDraw.Draw(z_img), ImageDraw.Draw(b_img)
    exteriores = []
    for f in gj["features"]:
        g = f["geometry"]
        for poli in ([g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]):
            ext, *buracos = poli
            pts = [q.palco(*p) for p in ext]
            exteriores.append(np.array(pts))
            dz.polygon([(x * SS, y * SS) for x, y in pts], fill=255)
            for b in buracos:
                pb = [q.palco(*p, SS) for p in b]
                dz.polygon(pb, fill=0)
                dbur.polygon(pb, fill=255)
    bruta = (np.asarray(z_img) > 127).astype(np.uint8)
    buraco = np.asarray(b_img) > 127
    n0, lab0, st0, _ = cv2.connectedComponentsWithStats(bruta, connectivity=8)
    grandes = sorted((i for i in range(1, n0) if st0[i, 4] > 1000), key=lambda i: -st0[i, 4])
    assert len(grandes) == 2, ("esperava duas peças: o corpo e o Madden", sorted((int(s[4]) for s in st0[1:]), reverse=True))
    CORPO_SS, MADDEN_SS = grandes
    px_m = q.MP * math.cos(math.radians(9.15))          # o metro de chão por px do palco, na latitude da Zona
    vao = min(float(np.hypot(exteriores[0][:, 0] - p[0], exteriores[0][:, 1] - p[1]).min()) for p in exteriores[1])

    # a junção do Madden (a da B3, sem mudança)
    for r_ss in range(1, 40):
        k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * r_ss + 1, 2 * r_ss + 1))
        fz = cv2.morphologyEx(bruta, cv2.MORPH_CLOSE, k) & (~buraco).astype(np.uint8)
        _, labf, _, _ = cv2.connectedComponentsWithStats(fz, connectivity=8)
        if int(labf[lab0 == CORPO_SS][0]) == int(labf[lab0 == MADDEN_SS][0]):
            break
    else:
        raise SystemExit("o fechamento não juntou o Madden ao corpo")
    acresc = (fz > 0) & (bruta == 0)
    na, laba, _, _ = cv2.connectedComponentsWithStats(acresc.astype(np.uint8), connectivity=8)
    encosta = [cv2.dilate((lab0 == i).astype(np.uint8), np.ones((3, 3), np.uint8)) > 0 for i in (CORPO_SS, MADDEN_SS)]
    ponte = np.zeros_like(acresc)
    for j in range(1, na):
        m = laba == j
        if all((m & e).any() for e in encosta):
            ponte |= m
    assert ponte.any(), "nenhum pedaço do fechamento encosta nas duas peças"
    unida = ((bruta > 0) | ponte).astype(np.uint8)
    juncao = {"vao_entre_as_pecas_m": round(vao * px_m), "raio_do_fechamento_px_palco": r_ss / SS, "raio_do_fechamento_m": round(r_ss / SS * px_m),
              "ponte_area_km2": round(float(ponte.sum()) / SS / SS * px_m * px_m / 1e6, 4)}

    # ao palco (1×)
    z1 = np.asarray(Image.fromarray(unida * 255).resize((W, H), Image.LANCZOS)) / 255.0
    madden_1x = cv2.resize((lab0 == MADDEN_SS).astype(np.float32), (W, H), interpolation=cv2.INTER_AREA) > 0.5

    # a generalização da B (borrar 5, > 0,82; borrar 5, > 0,18), sem soltar o Madden (a da B3, sem mudança; o raio pode mudar por MINI_GEN_R)
    R_GEN = M.env("MINI_GEN_R", 5)
    bin_z = z1 >= 0.5
    erodida = borrar(bin_z, R_GEN) > 0.82
    aberta = (borrar(erodida, R_GEN) > 0.18) & bin_z
    residuo = bin_z & ~aberta
    nA, labA, stA, _ = cv2.connectedComponentsWithStats(aberta.astype(np.uint8), connectivity=8)
    nR, labR, stR, _ = cv2.connectedComponentsWithStats(residuo.astype(np.uint8), connectivity=8)
    viz = {("A", i): set() for i in range(1, nA)}
    for j in range(1, nR):
        x_, y_, w_, h_ = stR[j, :4]
        sl = (slice(max(y_ - 2, 0), y_ + h_ + 2), slice(max(x_ - 2, 0), x_ + w_ + 2))
        m = cv2.dilate((labR[sl] == j).astype(np.uint8), np.ones((3, 3), np.uint8)) > 0
        toca = {int(v) for v in np.unique(labA[sl][m]) if v > 0}
        if len(toca) >= 2:
            viz[("R", j)] = {("A", i) for i in toca}
            for i in toca:
                viz[("A", i)].add(("R", j))
    corpo = 1 + int(np.argmax(stA[1:, 4]))
    cont = np.bincount(labA[madden_1x], minlength=nA)
    cont[0] = 0
    madden = int(np.argmax(cont))
    assert madden != corpo

    def area(no):
        return int(stA[no[1], 4]) if no[0] == "A" else int(stR[no[1], 4])

    dist, ant, fila = {("A", corpo): 0}, {}, [(0, ("A", corpo))]
    while fila:
        d, no = heapq.heappop(fila)
        if no == ("A", madden):
            break
        if d > dist.get(no, 1e18):
            continue
        for v in viz.get(no, ()):
            nd = d + area(v)
            if nd < dist.get(v, 1e18):
                dist[v], ant[v] = nd, no
                heapq.heappush(fila, (nd, v))
    assert ("A", madden) in ant, "não há caminho entre o corpo e o Madden"
    caminho, no = [], ("A", madden)
    while no in ant:
        caminho.append(no)
        no = ant[no]
    caminho.append(("A", corpo))
    for t, i in list(caminho):
        if t == "R":
            caminho += [v for v in viz[("R", i)] if v not in caminho]
    fica = np.zeros_like(bin_z)
    for t, i in caminho:
        fica |= (labA == i) if t == "A" else (labR == i)
    km2 = px_m * px_m / 1e6
    fora = [i for i in range(1, nA) if ("A", i) not in caminho]
    generalizacao = {"abertura": "a da B (borrar %g, > 0,82; borrar %g, > 0,18)" % (R_GEN, R_GEN),
                     "pecas_soltas_que_sairam_km2": [round(int(stA[i, 4]) * km2, 3) for i in fora],
                     "restaurado_km2": round(sum(area(n_) for n_ in caminho if n_[0] == "R") * km2, 3),
                     "tirado_no_total_km2": round(float((bin_z & ~fica).sum()) * km2, 2),
                     "zona_depois_km2": round(float(fica.sum()) * km2, 1)}
    zona = np.minimum(z1, borrar(fica, 1.0))
    # NOVO nesta cópia: a largura mínima do caminho do Madden. Num quadro mais largo que o da B3, o vale do Chagres que a generalização devolve
    # fica com 1 a 2 px, e o borrão de 1 px o parte (o Madden volta a ser uma ilha). Só quando isso acontece: o caminho (os pedaços devolvidos e a
    # ponte da represa) se alarga 1 px de cada vez, dentro do polígono (z1 > 0,05), até a Zona ficar numa peça; quantos px, sai no registro
    vale_px = 0
    if len(cv2.connectedComponentsWithStats((zona > 0.5).astype(np.uint8), connectivity=8)[2]) > 2:
        cam_r = np.zeros_like(bin_z)
        for t, i in caminho:
            if t == "R":
                cam_r |= labR == i
        ponte_1x = cv2.resize(ponte.astype(np.float32), (W, H), interpolation=cv2.INTER_AREA) > 0
        cam_r |= ponte_1x
        for vale_px in range(1, 4):
            k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * vale_px + 1, 2 * vale_px + 1))
            larga = (cv2.dilate(cam_r.astype(np.uint8), k) > 0) & (z1 > 0.05)
            z_try = np.maximum(zona, borrar(larga, 0.6) * (z1 > 0.05))
            if len(cv2.connectedComponentsWithStats((z_try > 0.5).astype(np.uint8), connectivity=8)[2]) == 2:
                zona = z_try
                break
        else:
            raise SystemExit("o vale do Madden não se ligou nem com 3 px")
    generalizacao["largura_minima_do_vale_px"] = vale_px
    # o recorte pela terra, como na B3 (borrar 6, > 0,30): fecha os canais de mar estreitos (a entrada do canal até as eclusas é mar no OSM)
    costa = borrar(terra > 0.5, 6) > 0.30
    zona = (zona * borrar(costa, 1.0)).astype(np.float32)
    _, _, st1, _ = cv2.connectedComponentsWithStats((zona > 0.5).astype(np.uint8), connectivity=8)
    pecas = sorted((int(s[4]) for s in st1[1:]), reverse=True)
    assert len(pecas) == 1, ("a Zona saiu em mais de uma peça no palco", pecas[:6])
    cortado_pelo_mar = float(((z1 > 0.5) & ~costa).sum()) * km2
    reg = {"fonte": "out/zona-do-canal/_media/geo/zona-do-canal-1947.json (folha AMS de 1947, LOC 83694755)", "sha256": sha_de(ZONA_JSON),
           "juncao_madden": juncao, "generalizacao": generalizacao, "cortado_pelo_mar_km2": round(cortado_pelo_mar, 2),
           "pecas_no_palco_px": pecas, "px_por_km": round(1000 / px_m, 2)}
    return zona, reg


def montar(quadro, mar_a=0.92):
    """o mapa do istmo (sem as peças): devolve um dicionário com o quadro, a imagem, o relevo, a terra, o mar, a Zona e as medidas. quadro = (lat_s,
    lat_n, lon_c); MINI_LAT_S, MINI_LAT_N e MINI_LON_C o mudam nos ensaios"""
    q = M.Quadro(M.env("MINI_LAT_S", quadro[0]), M.env("MINI_LAT_N", quadro[1]), M.env("MINI_LON_C", quadro[2]))
    # ── o mar e a terra: os water polygons do OSM ──
    mar_g = unary_union([shape(f["geometry"]) for f in json.load(open(MAR_JSON, encoding="utf-8"))["features"]])
    mar = q.mascara(mar_g.intersection(q.caixa_geo(0.5)))
    terra = 1 - mar
    # ── as bases da GIBS ──
    rel_base, info_rel = q.ler_base(M.base_em("panama-aster-relevo.png"))
    elev, info_alt = q.ler_altitude(M.base_em("panama-aster-altitude.png"), M.base_em("gibs-colormap-ASTER_GDEM_Color_Index.xml"))
    mar_bm, info_bm = q.ler_base(M.base_em("panama-bluemarble.png"))
    PX_M = q.MP * math.cos(math.radians((q.lat_s + q.lat_n) / 2))
    Z = M.env("MINI_SOMB_Z", 2.5)
    SUAVE = M.env("MINI_SOMB_SUAVE", 1.4)
    hs_dem = 0.5 * (M.sombreado(elev, PX_M, azim=315, alt=40, z=Z, suave=SUAVE) + M.sombreado(elev, PX_M, azim=270, alt=40, z=Z, suave=SUAVE))
    sel = terra > 0.5

    def _z(a):
        return (a - np.median(a[sel])) / max(1e-6, np.percentile(a[sel], 84) - np.percentile(a[sel], 16))

    MIX = M.env("MINI_SOMB_MIX", 0.6)
    cinza = (1 - MIX) * _z(rel_base[..., 0] / 255.0) + MIX * _z(hs_dem)
    rel = M.Relevo(cinza, sel, suave=M.env("MINI_REL_SUAVE", 1.2), sig_vol=M.env("MINI_REL_SIG_VOL", 4.0), vol=M.env("MINI_REL_VOL", 0.5),
                   nit=M.env("MINI_REL_NIT", 1.6), sig_loc=M.env("MINI_REL_SIG_LOC", 26), aprofundar=M.env("MINI_APROFUNDAR", 0.12),
                   sig_rug=4.0)
    img = rel.amarelo()
    img = M.pintar_agua(img, mar, M.AZUL, textura=mar_bm, a=M.env("MINI_MAR_A", mar_a), b=M.env("MINI_MAR_B", 0.36))

    # ── a Zona ──
    zona, reg_zona = mascara_zona(q, terra)

    # ── a costa: o mar do OSM contra o mar do ASTER (0 m) e contra o Panamá do Natural Earth, além de 4 px da costa ──
    d_costa = cv2.distanceTransform((M.borda_de(terra, 1) < 0.3).astype(np.uint8), cv2.DIST_L2, 5)
    longe = d_costa > 4
    aster_terra = elev > 0.5
    pan = unary_union([shape(f["geometry"]) for f in json.load(open(PANAMA_JSON, encoding="utf-8"))["features"]])
    ne_terra = q.mascara(pan.intersection(q.caixa_geo(0.5))) > 0.5
    costa = {"osm_contra_aster": {"px_discordantes_alem_de_4px": int((((terra > 0.5) != aster_terra) & longe).sum()),
                                  "fracao": round(float((((terra > 0.5) != aster_terra) & longe).mean()), 5),
                                  "terra_do_osm_sem_altitude_no_aster": int(((terra > 0.5) & ~aster_terra & longe).sum()),
                                  "mar_do_osm_com_altitude_no_aster": int(((terra < 0.5) & aster_terra & longe).sum())},
             "osm_contra_natural_earth": {"px_discordantes_alem_de_4px": int((((terra > 0.5) != ne_terra) & longe).sum()),
                                          "fracao": round(float((((terra > 0.5) != ne_terra) & longe).mean()), 5)}}
    for chave, outra in (("osm_contra_aster", aster_terra), ("osm_contra_natural_earth", ne_terra)):
        disc = ((terra > 0.5) != outra) & longe
        if disc.any():
            yy, xx = np.unravel_index(np.argmax(np.where(disc, d_costa, -1)), d_costa.shape)
            costa[chave]["a_mais_longe_px"] = round(float(d_costa[yy, xx]), 1)
            costa[chave]["a_mais_longe_lonlat"] = [round(v, 4) for v in M.lonlat(q, float(xx), float(yy))]

    medidas = {"quadro": q.medidas(), "px_por_km_no_chao": round(1000 / PX_M, 2),
               "bases": {"relevo": info_rel, "altitude": info_alt, "mar": info_bm},
               "geometria": {"mar": {"arquivo": "out/zona-do-canal/_media/geo/agua-osm-zona.json", "sha256": sha_de(MAR_JSON),
                                     "fonte": "OpenStreetMap water polygons (osmdata.openstreetmap.de), ODbL: © OpenStreetMap contributors"},
                             "panama_ne": {"arquivo": "out/zona-do-canal/_media/geo/panama-ne.json", "sha256": sha_de(PANAMA_JSON)},
                             "zona": reg_zona},
               "relevo": {"mistura_sombreado_da_altitude": MIX, "exagero_vertical": Z, "px_chao_m": round(PX_M, 1)},
               "mar": {"fracao_da_imagem": round(float((mar > 0.5).mean()), 4), "brilho_a": M.env("MINI_MAR_A", mar_a)},
               "costa_conferida": costa}
    return {"q": q, "img": img, "rel": rel, "terra": terra, "mar": mar, "zona": zona, "elev": elev, "medidas": medidas}


def vermelho(A, img, borda=5, sombra_sig=16, sombra=1.0):
    """a Zona em vermelho, como a Austrália e a Strip: a sombra por fora (sobre a terra e o mar), o relevo pintado de vermelho, o contorno branco"""
    zona = A["zona"]
    img = M.sombra_fora(img, zona, np.ones_like(zona), sig=sombra_sig, forca=sombra)
    img = img * (1 - zona[..., None]) + A["rel"].vermelho() * zona[..., None]
    return M.compor(img, M.BRANCO, M.borda_de(zona, borda))


def previa(img, nome):
    f = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    v = Image.new("RGB", (1280 + 20 + 320, 720), (15, 15, 15))
    v.paste(f.resize((1280, 720), Image.LANCZOS), (0, 0))
    v.paste(f.resize((320, 180), Image.LANCZOS), (1300, 0))
    v.paste(f.resize((168, 94), Image.LANCZOS), (1300, 200))
    os.makedirs(os.path.join(M.BASES_NOVAS, "_tmp"), exist_ok=True)
    v.save(os.path.join(M.BASES_NOVAS, "_tmp", nome), quality=90)


if __name__ == "__main__":
    qd = quadro_b3()
    if os.environ.get("MINI_FATOR"):
        # o quadro da B3 alargado: a mesma lon do centro e o mesmo meio, com MINI_FATOR vezes a altura
        f = float(os.environ["MINI_FATOR"])
        lat_c = (qd[0] + qd[1]) / 2
        qd = (lat_c - (lat_c - qd[0]) * f, lat_c + (qd[1] - lat_c) * f, qd[2])
    print("quadro:", qd)
    A = montar(qd)
    img = vermelho(A, A["img"].copy())
    previa(img, "mapa-%s.jpg" % os.environ.get("MINI_SO_MAPA", "x"))
    print(json.dumps({k: A["medidas"][k] for k in ("quadro", "px_por_km_no_chao", "mar", "costa_conferida")}, ensure_ascii=False))
    print(json.dumps(A["medidas"]["geometria"]["zona"], ensure_ascii=False))
    q = A["q"]
    for nome, (arq, slug) in {"balboa": (L1936, "balboa-clubhouse-1936"), "silver city": (L1947, "silver-city-1947")}.items():
        ll, _ = lugar(arq, slug)
        print(nome, ll, [round(v) for v in q.palco(*ll)])
    zy, zx = np.nonzero(A["zona"] > 0.5)
    print("caixa da zona:", int(zx.min()), int(zy.min()), int(zx.max()), int(zy.max()))
