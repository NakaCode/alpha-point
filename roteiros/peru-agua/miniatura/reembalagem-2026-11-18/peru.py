"""O mapa comum das 2 miniaturas novas da reembalagem do vídeo 3 (`peru-agua`, 18/11/2026): a terra em relevo amarelo, o mar azul, o lado do
Pacífico, o lado da Amazônia e os rios. O n1.py ("ONLY 2%") e o n2.py ("AMAZON SIDE") importam este módulo e pintam por cima o vermelho, o
ciano, a caixa e a seta. Não faz pedido de rede.

É uma CÓPIA de roteiros/australia-animais/miniatura/australia.py (que não foi editado nem rodado), mudada para o Peru: saíram o ABS, a Ásia e as
divisas dos estados; entraram as camadas do vídeo (as de roteiros/peru-agua/miniatura/base-A3.py, lidas do mesmo lugar) e o lago Titicaca. O
sombreado com o px de cada linha, o contorno sem ilhotas e a conferência da costa (os vetores contra o ASTER) são os da Austrália.

    python -X utf8 -B -P roteiros/peru-agua/miniatura/reembalagem-2026-11-18/peru.py      (da raiz; só o mapa do quadro do n1, em _bases/_tmp/)

As camadas (todas de geometria real; nada desenhado à mão nem por IA):
- o Peru: out/peru-agua/_media/geo/peru-ne.json (Natural Earth 1:10m, domínio público; o mesmo da A3);
- os lados: vertente-pacifico.json, vertente-atlantico.json e vertente-titicaca.json, e a divisória divisoria-continental-peru.json
  (HydroBASINS v1c nível 6, recortado pelo peru-ne; licença HydroSHEDS v1, aceita pelo Lucas em 22/10/2026: o Exhibit B vai na descrição e
  nada na tela; as mesmas da A3 e do vídeo);
- os rios do lado da Amazônia: rios-vertente-atlantico.json e amazonas-ate-o-atlantico.json (Natural Earth 1:10m, domínio público). Nenhuma
  camada do OpenStreetMap;
- os vizinhos: o Natural Earth 1:10m Admin 0 da pré-v1 (domínio público), como na Austrália;
- o lago Titicaca: o ne_10m_lakes do cache da máquina (Natural Earth, domínio público; o sha256 medido aqui em 18/11/2026);
- o relevo amarelo: o cinza da GIBS (ASTER GDEM) misturado com o sombreado calculado da altitude do ASTER GDEM (o índice de cor da GIBS
  decodificado pelo colormap), bases do n-bases.py;
- o mar: azul, com a textura leve da batimetria da Blue Marble (a base da miniatura A, de 24/10, copiada sem pedido).
"""
import hashlib, json, math, os, sys
import numpy as np
import cv2
from shapely.geometry import shape, box as _box
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

GEO = os.path.join(M.RAIZ, "out", "peru-agua", "_media", "geo")
NE_PAISES = "C:/projetos/regie-v1/acervo/geojson/ne10m-admin0-countries.json"
NE_SHA = "239eec57ac17f100a11e2536cffc56752c318b50ae765b0918ff7aab4ce8f255"     # o do manifest.json da pré-v1
NE_LAGOS = os.path.join(os.path.expanduser("~"), ".regie", "geo", "natural-earth", "ne_10m_lakes.geojson")
NE_LAGOS_SHA = None      # medido na 1ª rodada e gravado nas medidas (o cache não tem manifesto)
SIMPL = M.env("MINI_SIMPL", 0.0)
# o quadro da A3 (roteiros/peru-agua/miniatura/A3-pontos.json › quadro: EPSG:3857 [-11076290, -2137340, -7118290, 89060]), em (lat_s, lat_n,
# lon_c)
_A3 = (-11076290.0, -2137340.0, -7118290.0, 89060.0)
_lat = lambda y: math.degrees(2 * math.atan(math.exp(y / M.R_TERRA)) - math.pi / 2)
QUADRO_A3 = (_lat(_A3[1]), _lat(_A3[3]), math.degrees((_A3[0] + _A3[2]) / 2 / M.R_TERRA))
# o da Blue Marble da A é exatamente a janela da A3: um quadro do mesmo tamanho sai dela pelo arredondamento. Este fica 0,02° para dentro
QUADRO_A3_DENTRO = (QUADRO_A3[0] + 0.02, QUADRO_A3[1] - 0.02, QUADRO_A3[2])
CAMADAS = {"peru": "peru-ne.json", "pac": "vertente-pacifico.json", "atl": "vertente-atlantico.json", "tit": "vertente-titicaca.json",
           "div": "divisoria-continental-peru.json", "rios": "rios-vertente-atlantico.json", "amaz": "amazonas-ate-o-atlantico.json",
           "pontos": "pontos-fontes.json", "cidades": "cidades-peru-ne.json"}


def camada(chave):
    return M.ler_fc(os.path.join(GEO, CAMADAS[chave]))


def uniao(chave):
    fs, sha = camada(chave)
    return unary_union([g for p, g in fs]), sha


def sombreado_lat(elev, q, azim=315.0, alt=45.0, z=2.0, suave=1.5):
    """o sombreado de M.sombreado(), com o tamanho do px de cada linha (Mercator: MP · cos(lat))"""
    e = cv2.GaussianBlur(elev.astype(np.float32), (0, 0), suave) * z
    lat = np.array([M.lonlat(q, 0.0, y + 0.5)[1] for y in range(M.H)], np.float32)
    px = (q.MP * np.cos(np.radians(lat)))[:, None]
    gy, gx = np.gradient(e)
    gy, gx = gy / px, gx / px
    declive = np.arctan(np.hypot(gx, gy))
    aspecto = np.arctan2(-gx, gy)
    az, al = math.radians(azim), math.radians(alt)
    hs = np.sin(al) * np.cos(declive) + np.cos(al) * np.sin(declive) * np.cos(az - math.pi / 2 - aspecto)
    return np.clip(hs, 0, 1).astype(np.float32)


def sem_ilhotas(m, area_min_px):
    """a máscara só com as manchas de pelo menos area_min_px (o contorno branco não vira um ponto em volta de cada ilhota). A mancha continua
    pintada; só o contorno a ignora"""
    n, rot, st, _ = cv2.connectedComponentsWithStats((m > 0.5).astype(np.uint8), 8)
    manter = np.zeros(n, bool)
    manter[1:] = st[1:, cv2.CC_STAT_AREA] >= area_min_px
    return (manter[rot] & (m > 0.5)).astype(np.float32)


def titicaca():
    """o lago Titicaca do ne_10m_lakes (cache da máquina), com o sha256 medido"""
    sha = M.sha256(NE_LAGOS)
    fc = json.load(open(NE_LAGOS, encoding="utf-8"))
    gs = [shape(f["geometry"]) for f in fc["features"] if "titicaca" in str(f["properties"].get("name", "")).lower()]
    assert gs, "o Titicaca não está no ne_10m_lakes"
    return unary_union(gs).buffer(0), {"arquivo": NE_LAGOS.replace("\\", "/"), "sha256": sha, "feicoes": len(gs)}


def montar(quadro=QUADRO_A3_DENTRO, bases="peru", mar_a=0.86, z=3.0, mix=0.7, rel_kw=None):
    """devolve um dicionário com o quadro, as geometrias, as máscaras, o relevo e a imagem do mapa (o amarelo e o mar, sem as peças).
    quadro = (lat_s, lat_n, lon_c), que MINI_LAT_S, MINI_LAT_N e MINI_LON_C mudam nos ensaios; bases = o prefixo das bases da GIBS em _bases/
    ("peru" ou "centro")"""
    q = M.Quadro(M.env("MINI_LAT_S", quadro[0]), M.env("MINI_LAT_N", quadro[1]), M.env("MINI_LON_C", quadro[2]))
    caixa = q.caixa_geo(1.0)

    # ── a geometria ──
    peru, sha_peru = uniao("peru")
    pac, sha_pac = uniao("pac")
    atl, sha_atl = uniao("atl")
    tit, sha_tit = uniao("tit")
    divs, sha_div = camada("div")
    paises, sha_ne = M.ler_geojson(NE_PAISES, lambda p: p.get("ADM0_A3") != "PER", NE_SHA)
    vizinhos = [(p, g) for p, g in paises if g.intersects(caixa)]
    nomes_viz = sorted(p["NAME"] for p, g in vizinhos if g.intersects(q.caixa_geo(0.0)))
    viz = unary_union([g for p, g in vizinhos]) if vizinhos else None
    lago, reg_lago = titicaca()

    # ── as máscaras ──
    m_peru = q.mascara(peru)
    m_viz = q.mascara(viz) if viz is not None else np.zeros((M.H, M.W), np.float32)
    terra = np.clip(m_peru + m_viz * (1 - m_peru), 0, 1)
    m_lago = q.mascara(lago) if lago.intersects(caixa) else np.zeros((M.H, M.W), np.float32)
    mar = 1 - terra
    agua = np.clip(mar + m_lago, 0, 1)
    seca = terra * (1 - m_lago)
    m_pac = q.mascara(pac) * m_peru
    m_atl = q.mascara(atl) * m_peru
    m_tit = q.mascara(tit) * m_peru
    base = {"q": q, "terra": terra, "seca": seca, "mar": mar, "agua": agua, "m_lago": m_lago, "m_peru": m_peru, "m_pac": m_pac, "m_atl": m_atl,
            "m_tit": m_tit, "peru": peru, "pac": pac, "atl": atl, "tit": tit, "divs": divs, "vizinhos": vizinhos, "lago": lago}

    # ── o relevo ──
    rel_base, info_rel = q.ler_base(M.base_em("%s-aster-relevo.png" % bases))
    elev, info_alt = q.ler_altitude(M.base_em("%s-aster-altitude.png" % bases), M.base_em("gibs-colormap-ASTER_GDEM_Color_Index.xml"))
    mar_bm, info_bm = q.ler_base(M.base_em("peru-bluemarble.jpg"))
    # nesta cópia: os vazios do ASTER em terra (o "sem dado" do índice de cor, que vira 0 m) faziam buracos escuros no sombreado (um ponto no
    # ciano da n2, perto de 74,73 O e 11,53 S). Antes do sombreado, eles se preenchem pelos vizinhos (cv2.inpaint), longe da costa; a conferência
    # da costa, abaixo, continua com a altitude crua
    d_costa0 = cv2.distanceTransform((terra > 0.5).astype(np.uint8), cv2.DIST_L2, 5)
    vazio = ((seca > 0.5) & (elev < 0.5) & (d_costa0 > 4)).astype(np.uint8)
    elev_s = cv2.inpaint(elev.astype(np.float32), vazio, 6, cv2.INPAINT_TELEA) if vazio.any() else elev
    Z = M.env("MINI_SOMB_Z", z)
    AZ1, AZ2 = M.env("MINI_SOMB_AZIM", 315), M.env("MINI_SOMB_AZIM2", 270)
    SUAVE = M.env("MINI_SOMB_SUAVE", 1.6)
    hs_dem = 0.5 * (sombreado_lat(elev_s, q, azim=AZ1, alt=40, z=Z, suave=SUAVE) + sombreado_lat(elev_s, q, azim=AZ2, alt=40, z=Z, suave=SUAVE))
    sel = seca > 0.5

    def _z(a):
        return (a - np.median(a[sel])) / max(1e-6, np.percentile(a[sel], 84) - np.percentile(a[sel], 16))

    MIX = M.env("MINI_SOMB_MIX", mix)
    cinza = (1 - MIX) * _z(rel_base[..., 0] / 255.0) + MIX * _z(hs_dem)
    kw = dict(suave=1.0, sig_vol=3.5, vol=0.4, nit=1.4, sig_loc=30, aprofundar=0.1, sig_rug=4.0)
    kw.update(rel_kw or {})
    kw = {k: M.env("MINI_REL_" + k.upper(), v) for k, v in kw.items()}
    rel = M.Relevo(cinza, sel, **kw)

    # a costa: a terra dos vetores contra a terra do ASTER (o mar vem sem dado, 0 m); se o raster e os vetores estivessem fora de registro, a
    # discordância cresceria além de uns poucos px da costa
    d_costa = cv2.distanceTransform((M.borda_de(terra, 1) < 0.3).astype(np.uint8), cv2.DIST_L2, 5)
    aster_terra = elev > 0.5
    longe = (d_costa > 4) & (m_lago < 0.5)
    disc = ((terra > 0.5) != aster_terra) & longe
    costa = {"terra_dos_vetores_sem_dado_no_aster_alem_de_4px": round(float(((terra > 0.5) & ~aster_terra & longe).sum() / max(1, ((terra > 0.5) & longe).sum())), 5),
             "mar_dos_vetores_com_altitude_no_aster_alem_de_4px": round(float(((terra < 0.5) & aster_terra & longe).sum() / max(1, ((terra < 0.5) & longe).sum())), 5),
             "px_discordantes_alem_de_4px": int(disc.sum())}
    if disc.any():
        yy, xx = np.unravel_index(np.argmax(np.where(disc, d_costa, -1)), d_costa.shape)
        costa["a_mais_longe_px"] = round(float(d_costa[yy, xx]), 1)
        costa["a_mais_longe_lonlat"] = [round(v, 3) for v in M.lonlat(q, float(xx), float(yy))]
        costa["a_mais_longe_e"] = "terra dos vetores sem dado no ASTER" if terra[yy, xx] > 0.5 else "mar dos vetores com altitude no ASTER"

    # ── as cores: o amarelo e a água ──
    img = rel.amarelo()
    img = M.pintar_agua(img, agua, M.AZUL, textura=mar_bm, a=M.env("MINI_MAR_A", mar_a), b=M.env("MINI_MAR_B", 0.36))

    PX_M = q.MP * math.cos(math.radians((q.lat_s + q.lat_n) / 2))
    medidas = {"quadro": q.medidas(),
               "bases": {"relevo": info_rel, "altitude": info_alt, "mar": info_bm},
               "geometria": {"peru": {"arquivo": "out/peru-agua/_media/geo/peru-ne.json", "sha256": sha_peru, "fonte": "Natural Earth 1:10m (domínio público)"},
                             "lado_do_pacifico": {"arquivo": "out/peru-agua/_media/geo/vertente-pacifico.json", "sha256": sha_pac},
                             "lado_da_amazonia": {"arquivo": "out/peru-agua/_media/geo/vertente-atlantico.json", "sha256": sha_atl},
                             "lado_do_titicaca": {"arquivo": "out/peru-agua/_media/geo/vertente-titicaca.json", "sha256": sha_tit},
                             "divisoria": {"arquivo": "out/peru-agua/_media/geo/divisoria-continental-peru.json", "sha256": sha_div},
                             "fonte_dos_lados": "HydroBASINS v1c nível 6 (WWF), recortado pelo peru-ne; licença HydroSHEDS v1 (aceita pelo Lucas em 22/10/2026)",
                             "vizinhos": {"arquivo": NE_PAISES, "sha256": sha_ne, "no_quadro": nomes_viz},
                             "titicaca": dict(reg_lago, no_quadro=bool(lago.intersects(q.caixa_geo(0.0))))},
               "relevo": {"mistura_sombreado_da_altitude": MIX, "exagero_vertical": Z, "luz_azimutes": [AZ1, AZ2], "px_chao_m_no_meio": round(PX_M, 1),
                          "vazios_do_aster_em_terra_preenchidos_px": int(vazio.sum())},
               "mar": {"fracao_da_imagem": round(float((mar > 0.5).mean()), 4), "brilho_a": M.env("MINI_MAR_A", mar_a)},
               "costa_vetores_contra_aster": costa}
    base.update(img=img, rel=rel, elev=elev, medidas=medidas)
    return base


def pintar_ciano(img, rel, m, mix=0.84):
    """o lado da Amazônia: o relevo pintado em ciano (a sombra puxada para o azul-petróleo, a luz quase branca), misturado ao amarelo (o método
    da Utah da Strip e da Ásia da Austrália)"""
    ciano_rel = rel.cor(M.CIANO, M.env("MINI_CI_SOMBRA", 0.42), (0.55, 0.85, 1.0), (225, 252, 255), M.env("MINI_CI_LUZ", 0.45))
    a = M.env("MINI_CI_MIX", mix) * m
    return img * (1 - a[..., None]) + ciano_rel * a[..., None]


def pintar_vermelho(img, rel, m, fundo, borda=5.0, ilhota=150):
    """o lado do Pacífico: a sombra por fora, o relevo pintado em vermelho e o contorno branco (que também o separa do azul do mar:
    marca/embalagem.md §3, 'nada de vermelho contra azul')"""
    img = M.sombra_fora(img, m, fundo, sig=M.env("MINI_SOMBRA_SIG", 14), forca=M.env("MINI_SOMBRA", 1.0))
    img = img * (1 - m[..., None]) + rel.vermelho() * m[..., None]
    return M.compor(img, M.BRANCO, M.borda_de(sem_ilhotas(m, ilhota), M.env("MINI_VM_BORDA", borda)))


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
    A = montar()
    previa(A["img"], "mapa-%s.jpg" % os.environ.get("MINI_SO_MAPA", "x"))
    print(json.dumps({k: A["medidas"][k] for k in ("quadro", "mar", "costa_vetores_contra_aster")}, ensure_ascii=False))
    print(json.dumps(A["medidas"]["geometria"]["vizinhos"]["no_quadro"], ensure_ascii=False))
