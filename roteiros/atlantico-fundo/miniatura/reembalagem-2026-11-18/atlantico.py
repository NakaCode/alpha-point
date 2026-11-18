"""O mapa comum das 2 miniaturas novas da reembalagem do vídeo 4 (`atlantico-fundo`, 18/11/2026): a terra em relevo amarelo, o mar azul com o
relevo do fundo, a fossa em vermelho com o miolo escuro e, na n1, Porto Rico em ciano. O n1.py ("83 MILES") e o n2.py ("NOT FISH?") importam
este módulo e pintam por cima as peças (o ponto, a linha da medida, a seta, o rótulo TRENCH e a caixa). Não faz pedido de rede.

    python -X utf8 -B -P roteiros/atlantico-fundo/miniatura/reembalagem-2026-11-18/atlantico.py     (da raiz; só os dois mapas, em _bases/_tmp/)

É uma CÓPIA de roteiros/atlantico-fundo/miniatura/base-A2.py (que não foi editado nem rodado), refeita no estilo das miniaturas de 18/11
(o mapa.py da Austrália, copiado ao lado). Do base-A2 ficaram: a grade GEBCO_2026 de 15" conferida pelo sha256 e guardada em .npy, o relevo
de Horn na grade (com o espaçamento real em metros), a amostragem da grade no palco em Mercator (cv2.remap) e a distância de Vincenty. Saíram:
a foto da ISS (Porto Rico agora é o polígono do Census em ciano), o anel, a pílula e a vinheta.

As camadas (todas de geometria ou grade reais; nada desenhado à mão nem por IA):
- a terra e o fundo do mar: a grade GEBCO_2026 de 15" (o recorte gebco_2026_n26.0_s14.0_w-75.0_e-58.0, Esri ASCII; o sha256 8cd9cbbb… é o
  do _PROCEDENCIA.json da base gebco-caribe.png e o do base-A2.py). A terra é Z > 0, menos perto de Porto Rico, onde manda o polígono do
  Census (como no base-A2). Domínio público, com o reconhecimento da fonte (GEBCO Grid terms of use, lidos em 18/11);
- a fossa: _media/geo/fossa-porto-rico.json (a isóbata de 7.000 m da mesma grade) em vermelho, e o miolo,
  fossa-porto-rico-trecho-mais-fundo.json (a de 8.000 m), no vermelho × 0,6, sem contorno;
- Porto Rico: _media/geo/porto-rico.json (Census cb_2025 1:500k, a união dos 78 municípios, com Vieques, Culebra, Mona e Desecheo; domínio
  público);
- o ponto mais fundo e a costa de Aguadilla: _media/geo/ponto-mais-fundo-atlantico.json e aguadilla-costa-ponto.json (F10 e F04).
Cada arquivo de _media/geo/ é conferido pelo sha256 do out/atlantico-fundo/_pesquisa/pauta-geo.json antes de usar.
"""
import json, math, os, sys
import numpy as np
import cv2
from shapely.geometry import shape
from shapely.ops import unary_union
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mapa as M

PROJ = os.path.join(M.RAIZ, "out", "atlantico-fundo")
GEO = os.path.join(PROJ, "_media", "geo")
PAUTA_GEO = os.path.join(PROJ, "_pesquisa", "pauta-geo.json")
ASC = os.path.join(PROJ, "_tmp", "pesquisa-geo", "baixado", "gebco-cesta-1", "x", "gebco_2026_n26.0_s14.0_w-75.0_e-58.0_ascii.asc")
SHA_ASC = "8cd9cbbbda0518519cb1db686bcbb013874df30aa6a8443ccec897afc8abb096"   # gebco-caribe.png.json › procedencia.sha256_asc (o do base-A2)
NPY = os.path.join(M.BASES_NOVAS, "gebco-caribe-asc.npy")                      # a grade lida do .asc, só nesta máquina (fora do git)
NPY_PESQUISA = os.path.join(PROJ, "_tmp", "pesquisa-geo", "grade", "gebco_2026_n26.0_s14.0_w-75.0_e-58.0_ascii.npy")   # só para comparar

# os quadros do cético (out/_reembalagem/2026-11-18/atlantico-fundo/cetico.md, §4.2; _medir.py): lon da borda esquerda, da direita e a lat do centro
QUADRO_N1 = (-71.0, -64.2, 19.25)
QUADRO_N2 = (-68.8, -63.4, 19.6)

VERMELHO_ESCURO = 0.6          # o miolo de 8.000 m: o vermelho × 0,6 (o cético)


# ── as fontes ──
_PAUTA = None


def ler_geo(nome):
    """um GeoJSON de out/atlantico-fundo/_media/geo/, conferido pelo sha256 do pauta-geo.json; devolve a geometria (a união das features) e o
    registro"""
    global _PAUTA
    if _PAUTA is None:
        _PAUTA = {it.get("arquivo"): it for it in json.load(open(PAUTA_GEO, encoding="utf-8"))["itens"] if isinstance(it, dict)}
    rel = "_media/geo/%s.json" % nome
    p = os.path.join(GEO, nome + ".json")
    it = _PAUTA.get(rel)
    sha = M.sha256(p)
    if not it or it.get("sha256") != sha:
        sys.exit("%s não confere com o sha256 do pauta-geo.json: parei" % rel)
    fc = json.load(open(p, encoding="utf-8"))
    g = unary_union([shape(f["geometry"]) for f in fc["features"]])
    return g, {"arquivo": "out/atlantico-fundo/" + rel, "sha256": sha, "fonte": it.get("fonte"), "licenca": it.get("licenca")}


def grade():
    """a grade GEBCO (inteiros, metros; terra > 0), lida do .asc conferido pelo sha256 e guardada em _bases/ (a 1ª vez lê o texto de 68 MB)"""
    if not os.path.exists(NPY):
        if M.sha256(ASC) != SHA_ASC:
            sys.exit("a grade GEBCO não confere com o sha256 do _PROCEDENCIA.json da base: parei")
        with open(ASC, "rb") as f:
            cab = [f.readline() for _ in range(6)]
            z = np.array(f.read().split(), dtype=np.int32)
        hdr = {l.split()[0].decode().lower(): float(l.split()[1]) for l in cab}
        z = z.reshape(int(hdr["nrows"]), int(hdr["ncols"]))
        os.makedirs(M.BASES_NOVAS, exist_ok=True)
        np.save(NPY, z)
        hdr["sha256_asc"] = SHA_ASC
        hdr["igual_ao_npy_da_pesquisa_geo"] = bool(os.path.exists(NPY_PESQUISA) and np.array_equal(np.load(NPY_PESQUISA), z))
        json.dump(hdr, open(NPY + ".json", "w", encoding="utf-8"), indent=1)
    z = np.load(NPY).astype(np.float32)
    hdr = json.load(open(NPY + ".json", encoding="utf-8"))
    assert (int(hdr["nrows"]), int(hdr["ncols"])) == z.shape
    return z, hdr


def horn(z, hdr, exag, azim=315.0, alt=45.0):
    """o relevo sombreado na grade (Horn, o espaçamento real em metros, exagero vertical exag): o do base-A2"""
    cs = hdr["cellsize"]
    nr = z.shape[0]
    lat_c = hdr["yllcorner"] + nr * cs - (np.arange(nr) + 0.5) * cs
    dy = 6371008.8 * math.radians(cs)
    dx = dy * np.cos(np.radians(lat_c))[:, None]
    zp = np.pad(z * exag, 1, mode="edge")
    gx = ((zp[:-2, 2:] + 2 * zp[1:-1, 2:] + zp[2:, 2:]) - (zp[:-2, :-2] + 2 * zp[1:-1, :-2] + zp[2:, :-2])) / (8 * dx)
    gy = ((zp[2:, :-2] + 2 * zp[2:, 1:-1] + zp[2:, 2:]) - (zp[:-2, :-2] + 2 * zp[:-2, 1:-1] + zp[:-2, 2:])) / (8 * dy)
    az, al = math.radians(360 - azim + 90), math.radians(alt)
    declive = np.arctan(np.hypot(gx, gy))
    aspecto = np.arctan2(gy, -gx)
    hs = np.sin(al) * np.cos(declive) + np.cos(al) * np.sin(declive) * np.cos(az - aspecto)
    return np.clip(hs, 0, 1).astype(np.float32)


def amostrar(q, campo, hdr, interp=cv2.INTER_CUBIC):
    """um campo da grade levado ao palco do quadro (Mercator), pelo centro de cada px"""
    cs, xll = hdr["cellsize"], hdr["xllcorner"]
    lat_topo = hdr["yllcorner"] + campo.shape[0] * cs
    xs = (np.arange(M.W) + 0.5) * q.MP + q.FX0
    ys = q.FY1 - (np.arange(M.H) + 0.5) * q.MP
    lon = np.degrees(xs / M.R_TERRA)
    lat = np.degrees(2 * np.arctan(np.exp(ys / M.R_TERRA)) - math.pi / 2)
    col = ((lon - xll) / cs - 0.5).astype(np.float32)
    lin = ((lat_topo - lat) / cs - 0.5).astype(np.float32)
    mx = np.repeat(col[None, :], M.H, 0)
    my = np.repeat(lin[:, None], M.W, 1)
    return cv2.remap(campo.astype(np.float32), mx, my, interp, borderMode=cv2.BORDER_REPLICATE)


def sem_ilhotas(m, area_min_px):
    """a máscara só com as manchas de pelo menos area_min_px (a de australia.py): o contorno branco não vira um ponto branco em volta de cada
    ilhota (Desecheo, as ilhotas de Culebra). A mancha continua pintada; só o contorno a ignora"""
    n, rot, st, _ = cv2.connectedComponentsWithStats((m > 0.5).astype(np.uint8), 8)
    manter = np.zeros(n, bool)
    manter[1:] = st[1:, cv2.CC_STAT_AREA] >= area_min_px
    return (manter[rot] & (m > 0.5)).astype(np.float32)


def cor_px(rel, meio, sombra_f, sombra_tinta, luz, luz_f):
    """Relevo.cor() com a cor do meio por px (a rampa do mar pela profundidade)"""
    meio = np.asarray(meio, np.float32)
    sombra = meio * sombra_f * np.asarray(sombra_tinta, np.float32)[None, None, :]
    luz_c = meio + (np.asarray(luz, np.float32)[None, None, :] - meio) * luz_f
    t = rel.n
    a = np.clip(t / rel.piv, 0, 1)[..., None]
    b = np.clip((t - rel.piv) / (1 - rel.piv), 0, 1)[..., None]
    return np.where((t < rel.piv)[..., None], sombra + (meio - sombra) * a, meio + (luz_c - meio) * b)


# a rampa do mar: o AZUL das referências no abismo; mais claro na plataforma e um pouco mais escuro no fundo da fossa
RAMPA = [(0, (96, 176, 232)), (30, (78, 158, 224)), (150, (58, 132, 208)), (800, (44, 110, 192)), (2500, (34, 94, 178)),
         (4500, (30, 86, 172)), (6500, (26, 76, 160)), (8500, (22, 66, 146))]


def montar(quadro, ciano_pr=True):
    """o mapa de um quadro (lon0, lon1, lat_c), sem as peças: devolve um dicionário com o quadro, a imagem, as máscaras e as medidas"""
    q = M.Quadro.por_lon(*quadro)
    z, hdr = grade()
    Z = amostrar(q, z, hdr)
    EX_T, EX_M = M.env("MINI_EXAG_TERRA", 5.0), M.env("MINI_EXAG_MAR", 4.0)
    hs_t = np.clip(amostrar(q, horn(z, hdr, EX_T), hdr), 0, 1)
    hs_m = np.clip(amostrar(q, horn(z, hdr, EX_M), hdr), 0, 1)

    # ── a geometria ──
    fossa7, i7 = ler_geo("fossa-porto-rico")
    fossa8, i8 = ler_geo("fossa-porto-rico-trecho-mais-fundo")
    pr, ipr = ler_geo("porto-rico")
    anel, ianel = ler_geo("ponto-mais-fundo-atlantico")
    costa, icosta = ler_geo("aguadilla-costa-ponto")

    # ── as máscaras: a terra é a da grade (Z > 0), menos perto de Porto Rico, onde manda o Census ──
    m_pr = q.mascara(pr)
    perto = cv2.GaussianBlur(q.mascara(pr.buffer(M.env("MINI_PR_FOLGA", 0.08))), (0, 0), 6)
    terra_g = cv2.GaussianBlur((Z > 0).astype(np.float32), (0, 0), 0.7)
    terra = np.clip(terra_g * (1 - perto) + m_pr * perto, 0, 1)
    mar = 1 - terra
    m7 = q.mascara(fossa7)
    m8 = q.mascara(fossa8)

    # ── o relevo: o da terra e o do mar, cada um normalizado no seu domínio (Relevo, do mapa.py) ──
    sel_t, sel_m = terra > 0.5, mar > 0.5

    def _z(a, sel):
        return (a - np.median(a[sel])) / max(1e-6, np.percentile(a[sel], 84) - np.percentile(a[sel], 16))

    rel_t = M.Relevo(_z(hs_t, sel_t), sel_t, suave=1.0, sig_vol=3.5, vol=0.4, nit=1.6, sig_loc=30, aprofundar=0.1, sig_rug=4.0)
    rel_m = M.Relevo(_z(hs_m, sel_m), sel_m, suave=M.env("MINI_MAR_SUAVE", 1.2), sig_vol=3.5, vol=0.4, nit=M.env("MINI_MAR_NIT", 1.4),
                     sig_loc=40, aprofundar=0.0, sig_rug=4.0)

    # ── as cores ──
    img = rel_t.amarelo()
    prof = np.clip(-Z, 0, None)
    meio = np.stack([np.interp(prof, [p for p, _ in RAMPA], [c[i] for _, c in RAMPA]) for i in range(3)], -1).astype(np.float32)
    agua = cor_px(rel_m, meio, M.env("MINI_MAR_SOMBRA", 0.62), (0.85, 0.92, 1.0), (205, 232, 255), M.env("MINI_MAR_LUZ", 0.30))
    img = img * (1 - mar[..., None]) + agua * mar[..., None]
    if ciano_pr:
        PR_MIX = M.env("MINI_PR_MIX", 0.85)
        ciano = rel_t.cor(M.CIANO, M.env("MINI_PR_SOMBRA", 0.42), (0.55, 0.85, 1.0), (225, 252, 255), M.env("MINI_PR_LUZ", 0.45))
        a_pr = PR_MIX * m_pr * terra
        img = img * (1 - a_pr[..., None]) + ciano * a_pr[..., None]
        img = M.compor(img, M.BRANCO, M.borda_de(sem_ilhotas(m_pr, M.env("MINI_PR_ILHA_PX", 300)), M.env("MINI_PR_BORDA", 5)) * mar)

    # ── a fossa: o vermelho com o relevo do fundo por baixo, a sombra por fora, o miolo escuro e o contorno branco de 5 px ──
    img = M.sombra_fora(img, m7, np.ones_like(m7), sig=M.env("MINI_FOSSA_SOMBRA_SIG", 14), forca=M.env("MINI_FOSSA_SOMBRA", 1.0))
    verm = rel_m.vermelho()
    a_core = np.clip(m8, 0, 1) * M.env("MINI_MIOLO", 1.0)
    verm = verm * (1 - a_core[..., None]) + verm * VERMELHO_ESCURO * a_core[..., None]
    img = img * (1 - m7[..., None]) + verm * m7[..., None]
    img = M.compor(img, M.BRANCO, M.borda_de(m7, M.env("MINI_FOSSA_BORDA", 5)))

    # ── as medidas e as conferências do mapa ──
    xa, ya = q.palco(anel.x, anel.y)
    xc, yc = q.palco(costa.x, costa.y)
    s7 = m7 > 0.5
    s8 = m8 > 0.5
    spr = m_pr > 0.5
    terra_gebco = Z > 0
    longe_pr = cv2.distanceTransform((M.borda_de(m_pr, 1) < 0.3).astype(np.uint8), cv2.DIST_L2, 5) > 4
    na_tela_pr = spr.any()
    medidas = {
        "quadro": dict(q.medidas(), quadro_do_cetico_lon0_lon1_latc=list(quadro), px_por_grau_lon=round(M.W / (quadro[1] - quadro[0]), 1)),
        "grade": {"arquivo": os.path.relpath(ASC, M.RAIZ).replace("\\", "/"), "sha256_asc": SHA_ASC,
                  "npy": os.path.relpath(NPY, M.RAIZ).replace("\\", "/"), "igual_ao_npy_da_pesquisa_geo": hdr.get("igual_ao_npy_da_pesquisa_geo"),
                  "celula_graus": hdr["cellsize"], "px_do_palco_por_celula": round(hdr["cellsize"] * M.W / (quadro[1] - quadro[0]), 2),
                  "relevo": {"exagero_terra": EX_T, "exagero_mar": EX_M, "luz": "Horn, azimute 315, altura 45"}},
        "geometria": {"fossa_7000m": i7, "miolo_8000m": i8, "porto_rico": ipr, "ponto_mais_fundo": ianel, "costa_aguadilla": icosta},
        "vermelho_fossa": {"fracao_da_imagem": round(float(s7.mean()), 4), "miolo_fracao_da_imagem": round(float(s8.mean()), 4),
                           "fossa_px_com_Z_abaixo_de_-7000m": round(float((Z[s7] < -7000).mean()), 4),
                           "fora_da_fossa_com_Z_abaixo_de_-7000m_px": int(((Z < -7000) & ~s7).sum()),
                           "miolo_px_com_Z_abaixo_de_-8000m": round(float((Z[s8] < -8000).mean()), 4) if s8.any() else None,
                           "caixa_palco": [int(v) for v in (np.nonzero(s7)[1].min(), np.nonzero(s7)[0].min(), np.nonzero(s7)[1].max(), np.nonzero(s7)[0].max())]},
        "ponto_mais_fundo": {"lonlat": [anel.x, anel.y], "palco": [round(xa, 1), round(ya, 1)],
                             "no_miolo_8000m": bool(m8[int(ya), int(xa)] > 0.5), "Z_gebco_no_palco_m": round(float(Z[int(ya), int(xa)]))},
        "costa_aguadilla": {"lonlat": [costa.x, costa.y], "palco": [round(xc, 1), round(yc, 1)],
                            "na_tela": bool(0 <= xc < M.W and 0 <= yc < M.H)},
        "porto_rico": {"ciano": bool(ciano_pr), "fracao_da_imagem": round(float(spr.mean()), 4),
                       "census_contra_gebco_alem_de_4px": round(float(((spr != terra_gebco) & longe_pr & (perto > 0.5)).sum() / max(1, ((perto > 0.5) & longe_pr).sum())), 4) if na_tela_pr else None},
        "terra_fracao_da_imagem": round(float(sel_t.mean()), 4),
    }
    if 0 <= xc < M.W and 0 <= yc < M.H:
        medidas["costa_aguadilla"]["na_borda_de_porto_rico"] = bool(m_pr[max(0, int(yc) - 4):int(yc) + 5, max(0, int(xc) - 4):int(xc) + 5].max() > 0.3)
    return {"q": q, "img": img, "Z": Z, "m7": m7, "m8": m8, "m_pr": m_pr, "terra": terra, "mar": mar, "rel_m": rel_m, "rel_t": rel_t,
            "anel": (anel.x, anel.y), "costa": (costa.x, costa.y), "fossa7": fossa7, "fossa8": fossa8, "medidas": medidas}


def vincenty(lon1, lat1, lon2, lat2):
    """a distância geodésica no WGS84, em metros (Vincenty, inversa; a do base-A2)"""
    a, f = 6378137.0, 1 / 298.257223563
    b = (1 - f) * a
    L = math.radians(lon2 - lon1)
    U1, U2 = math.atan((1 - f) * math.tan(math.radians(lat1))), math.atan((1 - f) * math.tan(math.radians(lat2)))
    sU1, cU1, sU2, cU2 = math.sin(U1), math.cos(U1), math.sin(U2), math.cos(U2)
    lam = L
    for _ in range(200):
        sl, cl = math.sin(lam), math.cos(lam)
        ss = math.hypot(cU2 * sl, cU1 * sU2 - sU1 * cU2 * cl)
        cs = sU1 * sU2 + cU1 * cU2 * cl
        sig = math.atan2(ss, cs)
        sa = cU1 * cU2 * sl / ss
        c2a = 1 - sa * sa
        c2sm = cs - 2 * sU1 * sU2 / c2a
        C = f / 16 * c2a * (4 + f * (4 - 3 * c2a))
        lam0, lam = lam, L + (1 - C) * f * sa * (sig + C * ss * (c2sm + C * cs * (-1 + 2 * c2sm * c2sm)))
        if abs(lam - lam0) < 1e-12:
            break
    u2 = c2a * (a * a - b * b) / (b * b)
    A = 1 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)))
    B = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)))
    ds = B * ss * (c2sm + B / 4 * (cs * (-1 + 2 * c2sm * c2sm) - B / 6 * c2sm * (-3 + 4 * ss * ss) * (-3 + 4 * c2sm * c2sm)))
    return b * A * (sig - ds)


def previa(img, nome):
    """a 1280, a 320 e a 168 lado a lado, em _bases/_tmp/ (só para olhar nos ensaios)"""
    from PIL import Image
    f = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    v = Image.new("RGB", (1280 + 20 + 320, 720), (15, 15, 15))
    v.paste(f.resize((1280, 720), Image.LANCZOS), (0, 0))
    v.paste(f.resize((320, 180), Image.LANCZOS), (1300, 0))
    v.paste(f.resize((168, 94), Image.LANCZOS), (1300, 200))
    v.paste(f.resize((168, 94), Image.LANCZOS).resize((168 * 2, 94 * 2), Image.NEAREST), (1300, 320))
    os.makedirs(os.path.join(M.BASES_NOVAS, "_tmp"), exist_ok=True)
    v.save(os.path.join(M.BASES_NOVAS, "_tmp", nome), quality=90)


if __name__ == "__main__":
    for nome, qd, ciano in (("n1", QUADRO_N1, True), ("n2", QUADRO_N2, False)):
        A = montar(qd, ciano_pr=ciano)
        previa(A["img"], "mapa-%s-%s.jpg" % (nome, os.environ.get("MINI_SO_MAPA", "x")))
        print(nome, json.dumps({k: A["medidas"][k] for k in ("quadro", "vermelho_fossa", "ponto_mais_fundo", "costa_aguadilla", "porto_rico")},
                               ensure_ascii=False))
