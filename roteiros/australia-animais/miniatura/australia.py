"""O mapa comum das miniaturas da pauta do vídeo 8, a Austrália (`australia-animais`, 18/11/2026): a terra em relevo amarelo e o mar azul. O m1.py
("1 IN 3 MILLION"), o m2.py ("NO VIPERS") e o reserva-aranhas.py ("SPIDER DEATHS / ZERO", a reserva) importam este módulo e pintam por cima o
vermelho, o ciano, a caixa e a seta. Não faz pedido de rede.

    python -X utf8 -B -P roteiros/australia-animais/miniatura/australia.py      (da raiz; só o mapa do quadro do continente, em _bases/_tmp/)

As camadas (todas de geometria real; nada desenhado à mão nem por IA):
- a terra da Austrália: a união dos estados e territórios do ABS (ASGS Edition 3, STE 2021, GDA2020; CC BY 4.0), simplificada a 0,003° (~330 m,
  um sétimo do px do palco); as divisas entre os estados em branco fino, quando pedidas (só as divisas de terra: a costa fica sem linha);
- a terra dos vizinhos (a Ásia, a Papua-Nova Guiné, as ilhas do Pacífico): o Natural Earth 1:10m Admin 0 da pré-v1 (domínio público);
- o relevo amarelo: o cinza da GIBS (ASTER GDEM) misturado com o sombreado calculado da altitude do ASTER GDEM (o índice de cor da GIBS
  decodificado pelo colormap), com exagero vertical (o continente é quase plano: a ~2,3 km por px, sem exagero, o relevo some). O sombreado usa
  o tamanho do px de cada linha (o Mercator estica o sul: em 44 S, o px tem 0,72 do chão do de 9 S);
- o mar: azul, com a textura leve da batimetria da Blue Marble (GIBS), como no vídeo 7, na Nova Zelândia e nas duas florestas.

Os quadros (Mercator 16:9; a largura sai da altura):
- QUADRO_CONTINENTE (m1 e a reserva): de 45 S (a Tasmânia dentro, com mar embaixo) a 8 S (a Nova Guiné cortada em cima), centrado em 128,4 E, de
  ~90,6 a ~166,2 E. O 108–166 E do §8 da pauta não cabe o continente em 16:9 (com 58° de largura, o 16:9 só vai de 44,5 S a 16,4 S e corta o
  norte inteiro). A borda direita fica antes de 166,5 E, para a Nova Zelândia não entrar;
- QUADRO_ASIA (m2): definido no m2.py.
"""
import hashlib, json, math, os, sys
import numpy as np
import cv2
from shapely.geometry import shape, box as _box
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

STE_ZIP = M.base_em("STE_2021_AUST_SHP_GDA2020.zip")
GCC_ZIP = M.base_em("GCCSA_2021_AUST_SHP_GDA2020.zip")
NE_PAISES = "C:/projetos/regie-v1/acervo/geojson/ne10m-admin0-countries.json"
NE_SHA = "239eec57ac17f100a11e2536cffc56752c318b50ae765b0918ff7aab4ce8f255"     # o do manifest.json da pré-v1
# as províncias da Indonésia (Natural Earth 1:10m Admin 1, o cache da máquina, baixado pela pré-v1 do mesmo commit ca96624a do nvkelso/
# natural-earth-vector: src/geo/obter-natural-earth.mjs). O sha256 é o medido aqui em 18/11/2026; não há manifesto do cache
NE_ADM1 = os.path.join(os.path.expanduser("~"), ".regie", "geo", "natural-earth", "ne_10m_admin_1_states_provinces.geojson")
NE_ADM1_SHA = "22d0e3ad85eb3e27f17cabf8ba2d50e554fbc27a87796ff891d958185da62fb5"
SIMPL = M.env("MINI_SIMPL", 0.003)
QUADRO_CONTINENTE = (-45.0, -8.0, 128.4)


def sha_zip(p):
    """o sha256 do zip, conferido contra o .json da procedência (o do download)"""
    meta = json.load(open(p + ".json", encoding="utf-8"))
    s = M.sha256(p)
    if s != meta["sha256"]:
        sys.exit("%s não confere com o sha256 do .json: parei" % os.path.basename(p))
    return {"arquivo": os.path.relpath(p, M.RAIZ).replace("\\", "/"), "sha256": s, "url": meta["procedencia"]["url"],
            "baixado_em": meta["procedencia"]["baixado_em"]}


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
    """a máscara só com as manchas de pelo menos area_min_px (para o contorno branco não virar um ponto branco em volta de cada ilhota longe da
    costa: Christmas, Cocos, Lord Howe, Norfolk). A mancha continua pintada; só o contorno a ignora"""
    n, rot, st, _ = cv2.connectedComponentsWithStats((m > 0.5).astype(np.uint8), 8)
    manter = np.zeros(n, bool)
    manter[1:] = st[1:, cv2.CC_STAT_AREA] >= area_min_px
    return (manter[rot] & (m > 0.5)).astype(np.float32)


def asia(paises, sem_nova_guine=True):
    """a Ásia do ciano da m2: os países que o Natural Earth põe no continente "Asia", menos os Territórios do Oceano Índico (Christmas e Cocos,
    que são da Austrália e o NE põe na Ásia), e, com sem_nova_guine, menos as duas províncias da Indonésia na Nova Guiné (Papua e Papua Barat,
    do Admin 1 do NE): a ilha fica amarela, como a metade da Papua-Nova Guiné. Devolve a geometria, os nomes e o registro"""
    escolhidos = [(p, g) for p, g in paises if p.get("CONTINENT") == "Asia" and p.get("ADM0_A3") not in ("IOA",)]
    g = unary_union([g for p, g in escolhidos])
    reg = {"criterio": "Natural Earth 1:10m Admin 0, CONTINENT = 'Asia', menos 'Indian Ocean Ter.' (Christmas e Cocos, da Austrália)",
           "paises_no_recorte": sorted(p["NAME"] for p, gg in escolhidos)}
    if sem_nova_guine:
        if M.sha256(NE_ADM1) != NE_ADM1_SHA:
            sys.exit("o Admin 1 do Natural Earth (cache) mudou: parei")
        fc = json.load(open(NE_ADM1, encoding="utf-8"))
        prov = [shape(f["geometry"]) for f in fc["features"]
                if f["properties"].get("adm0_a3") == "IDN" and f["properties"].get("iso_3166_2") in ("ID-PA", "ID-PB")]
        assert len(prov) == 2, len(prov)
        g = g.difference(unary_union(prov).buffer(0.03))
        reg["sem_a_nova_guine"] = ("menos as províncias Papua (ID-PA) e Papua Barat (ID-PB) do Natural Earth 1:10m Admin 1 (cache da máquina, "
                                   "sha256 %s…), com 0,03° de folga: a metade indonésia da Nova Guiné e as ilhas dessas duas províncias "
                                   "(Raja Ampat, Biak, Yapen) ficam amarelas, como a Papua-Nova Guiné" % NE_ADM1_SHA[:12])
    return g, reg


def montar(quadro=QUADRO_CONTINENTE, bases="au", divisas=True, mar_a=0.78):
    """devolve um dicionário com o quadro, as geometrias, as máscaras, o relevo e a imagem do mapa (sem as peças). quadro = (lat_s, lat_n,
    lon_c), que MINI_LAT_S, MINI_LAT_N e MINI_LON_C mudam nos ensaios; bases = o prefixo das bases da GIBS em _bases/ ("au" ou "asia")"""
    q = M.Quadro(M.env("MINI_LAT_S", quadro[0]), M.env("MINI_LAT_N", quadro[1]), M.env("MINI_LON_C", quadro[2]))
    caixa = q.caixa_geo(1.0)

    # ── a geometria ──
    ste = M.ler_shp_zip(STE_ZIP)
    estados = {r["STE_NAME21"]: g for r, g in ste}
    assert set(estados) >= {"New South Wales", "Victoria", "Queensland", "South Australia", "Western Australia", "Tasmania",
                            "Northern Territory", "Australian Capital Territory", "Other Territories"}, sorted(estados)
    estados_s = {k: g.simplify(SIMPL, preserve_topology=True) for k, g in estados.items()}
    # a terra inteira: a união dos estados na geometria cheia, e só então simplificada (a união dos estados já simplificados deixava uma fresta
    # de ~1 px nas divisas, que aparecia como um fio no vermelho da m1)
    australia = unary_union(list(estados.values())).simplify(SIMPL, preserve_topology=True)
    gcc = {r["GCC_CODE21"]: g for r, g in M.ler_shp_zip(GCC_ZIP, lambda r: r["GCC_CODE21"] == "1GSYD")}
    paises, sha_ne = M.ler_geojson(NE_PAISES, lambda p: p.get("ADM0_A3") != "AUS", NE_SHA)
    vizinhos = [(p, g) for p, g in paises if g.intersects(caixa)]
    nomes_viz = sorted(p["NAME"] for p, g in vizinhos if g.intersects(q.caixa_geo(0.0)))
    viz = unary_union([g for p, g in vizinhos])

    # ── as máscaras ──
    m_au = q.mascara(australia)
    m_viz = q.mascara(viz)
    terra = np.clip(m_au + m_viz * (1 - m_au), 0, 1)
    mar = 1 - terra
    base = {"q": q, "terra": terra, "mar": mar, "m_au": m_au, "estados": estados, "estados_s": estados_s, "sydney": gcc["1GSYD"],
            "australia": australia, "vizinhos": vizinhos}

    # MINI_CACHE=1 (só nos ensaios): o relevo e a imagem do mapa vêm do _bases/_tmp/cache-<chave>.npz, se houver; as finais rodam sem
    do_mapa = ("MINI_LAT_", "MINI_LON_C", "MINI_SIMPL", "MINI_SOMB_", "MINI_REL_", "MINI_APROFUNDAR", "MINI_MAR_", "MINI_DIVISA")
    chave = hashlib.sha256(json.dumps([quadro, bases, divisas, mar_a, {k: v for k, v in sorted(os.environ.items()) if k.startswith(do_mapa)}]).encode()
                           + open(__file__, "rb").read() + open(M.__file__, "rb").read()).hexdigest()[:16]
    cache = os.path.join(M.BASES_NOVAS, "_tmp", "cache-%s.npz" % chave)
    if os.environ.get("MINI_CACHE") == "1" and os.path.exists(cache):
        z = np.load(cache, allow_pickle=True)
        rel = M.Relevo.__new__(M.Relevo)
        rel.n, rel.rug, rel.piv = z["rel_n"], z["rel_rug"], float(z["rel_piv"])
        base.update(img=z["img"], rel=rel, medidas=json.loads(str(z["medidas"])))
        print("(cache do mapa: %s)" % os.path.basename(cache))
        return base

    # ── o relevo ──
    rel_base, info_rel = q.ler_base(M.base_em("%s-aster-relevo.png" % bases))
    elev, info_alt = q.ler_altitude(M.base_em("%s-aster-altitude.png" % bases), M.base_em("gibs-colormap-ASTER_GDEM_Color_Index.xml"))
    mar_bm, info_bm = q.ler_base(M.base_em("%s-bluemarble.png" % bases))
    Z = M.env("MINI_SOMB_Z", 9.0)
    AZ1, AZ2 = M.env("MINI_SOMB_AZIM", 315), M.env("MINI_SOMB_AZIM2", 270)
    SUAVE = M.env("MINI_SOMB_SUAVE", 2.0)
    hs_dem = 0.5 * (sombreado_lat(elev, q, azim=AZ1, alt=40, z=Z, suave=SUAVE) + sombreado_lat(elev, q, azim=AZ2, alt=40, z=Z, suave=SUAVE))
    sel = terra > 0.5

    def _z(a):
        return (a - np.median(a[sel])) / max(1e-6, np.percentile(a[sel], 84) - np.percentile(a[sel], 16))

    MIX = M.env("MINI_SOMB_MIX", 0.8)
    cinza = (1 - MIX) * _z(rel_base[..., 0] / 255.0) + MIX * _z(hs_dem)
    rel = M.Relevo(cinza, sel, suave=M.env("MINI_REL_SUAVE", 1.0), sig_vol=M.env("MINI_REL_SIG_VOL", 3.5), vol=M.env("MINI_REL_VOL", 0.4),
                   nit=M.env("MINI_REL_NIT", 1.6), sig_loc=M.env("MINI_REL_SIG_LOC", 30), aprofundar=M.env("MINI_APROFUNDAR", 0.1),
                   sig_rug=4.0)

    # a costa: a terra dos vetores contra a terra do ASTER (o mar vem sem dado, 0 m); se o raster e os vetores estivessem fora de registro, a
    # discordância cresceria além de uns poucos px da costa. O lago Eyre e o Torrens (abaixo do nível do mar) também saem sem dado no ASTER:
    # entram na conta como "terra dos vetores sem dado", e por isso a conta exclui um recorte em volta deles
    lagos_sal = q.mascara(_box(136.3, -31.6, 139.0, -27.6).buffer(0))
    d_costa = cv2.distanceTransform((M.borda_de(terra, 1) < 0.3).astype(np.uint8), cv2.DIST_L2, 5)
    aster_terra = elev > 0.5
    longe = (d_costa > 4) & (lagos_sal < 0.5)
    disc = ((terra > 0.5) != aster_terra) & longe
    costa = {"terra_dos_vetores_sem_dado_no_aster_alem_de_4px": round(float(((terra > 0.5) & ~aster_terra & longe).sum() / max(1, ((terra > 0.5) & longe).sum())), 5),
             "mar_dos_vetores_com_altitude_no_aster_alem_de_4px": round(float(((terra < 0.5) & aster_terra & longe).sum() / max(1, ((terra < 0.5) & longe).sum())), 5),
             "px_discordantes_alem_de_4px": int(disc.sum()),
             "fora_da_conta": "o recorte dos lagos salgados abaixo do nível do mar (136,3 a 139,0 E; 31,6 a 27,6 S: Eyre e Torrens)"}
    if disc.any():
        yy, xx = np.unravel_index(np.argmax(np.where(disc, d_costa, -1)), d_costa.shape)
        costa["a_mais_longe_px"] = round(float(d_costa[yy, xx]), 1)
        costa["a_mais_longe_lonlat"] = [round(v, 3) for v in M.lonlat(q, float(xx), float(yy))]
        costa["a_mais_longe_e"] = "terra dos vetores sem dado no ASTER" if terra[yy, xx] > 0.5 else "mar dos vetores com altitude no ASTER"

    # ── as cores ──
    img = rel.amarelo()
    img = M.pintar_agua(img, mar, M.AZUL, textura=mar_bm, a=M.env("MINI_MAR_A", mar_a), b=M.env("MINI_MAR_B", 0.36))
    if divisas:
        # as divisas de terra entre os estados (cada borda que encosta noutro estado; a costa fica de fora)
        oito = [k for k in estados_s if k != "Other Territories"]
        linhas = []
        for k in oito:
            outros = unary_union([estados_s[o] for o in oito if o != k]).buffer(0.02)
            linhas.append(estados_s[k].boundary.intersection(outros))
        img = M.compor(img, M.BRANCO, q.linha(unary_union(linhas), M.env("MINI_DIVISA", 3.5)) * terra * M.env("MINI_DIVISA_A", 0.8))

    PX_M = q.MP * math.cos(math.radians((q.lat_s + q.lat_n) / 2))
    medidas = {"quadro": q.medidas(),
               "bases": {"relevo": info_rel, "altitude": info_alt, "mar": info_bm},
               "geometria": {"estados": dict(sha_zip(STE_ZIP), edicao="ABS, ASGS Edition 3, States and Territories 2021 (STE), GDA2020",
                                             simplificado_graus=SIMPL),
                             "grande_sydney": dict(sha_zip(GCC_ZIP), edicao="ABS, ASGS Edition 3, GCCSA 2021, 1GSYD (Greater Sydney), GDA2020"),
                             "vizinhos": {"arquivo": NE_PAISES, "sha256": sha_ne, "no_quadro": nomes_viz}},
               "relevo": {"mistura_sombreado_da_altitude": MIX, "exagero_vertical": Z, "luz_azimutes": [AZ1, AZ2],
                          "px_chao_m_no_meio": round(PX_M, 1)},
               "divisas_dos_estados": bool(divisas),
               "mar": {"fracao_da_imagem": round(float((mar > 0.5).mean()), 4), "brilho_a": M.env("MINI_MAR_A", mar_a)},
               "costa_vetores_contra_aster": costa}
    if os.environ.get("MINI_CACHE") == "1":
        np.savez(cache, img=img.astype(np.float32), rel_n=rel.n, rel_rug=rel.rug, rel_piv=rel.piv, medidas=json.dumps(medidas))
    base.update(img=img, rel=rel, medidas=medidas)
    return base


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
