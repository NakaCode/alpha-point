"""Parte B da geo do vídeo 4 (atlantico-fundo), 28/10/2026: o que sai da GEBCO.
- as isóbatas das fossas (Porto Rico, Sandwich do Sul, Marianas), lidas da grade por marching squares, nunca desenhadas;
- o levantamento medido na Fossa das Sandwich do Sul (TID 2019 × TID 2026);
- as bases do fundo (relevo sombreado em Web Mercator) em _media/base/gebco-*.png, com .js e .json de procedência;
- a vista do mundo e do Atlântico (WMS oficial da GEBCO, EPSG:3857), e a máscara do que já foi medido.
Grava as FeatureCollections em _tmp/pesquisa-geo/fc/<slug>.json (+ <slug>.origem.json); quem as leva a _media/geo/ e à
pauta é o geo-gravar.mjs (gravarGeo da pré-v1). Medidas em _tmp/pesquisa-geo/medidas-fundo.json.
uso (de out/atlantico-fundo/): python -X utf8 -B -P _pesquisa/geo_fundo.py [--sem-base]"""
import os, sys, json, math, hashlib
import numpy as np
from PIL import Image
from shapely.geometry import Point, Polygon, MultiPolygon, box, mapping, shape
from shapely.ops import unary_union

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import geo_gebco as G
import geo_util as U

PROJ = G.PROJ
FC = os.path.join(G.TMP, "fc"); os.makedirs(FC, exist_ok=True)
BASE = os.path.join(PROJ, "_media", "base"); os.makedirs(BASE, exist_ok=True)
WMS = os.path.join(G.TMP, "baixado", "gebco-wms")
HOJE = "2026-10-28"
MED = {}

ORIGEM_GEBCO = {
    "fonte": "GEBCO Compilation Group (2026) GEBCO 2026 Grid — app de recorte download.gebco.net (Esri ASCII, 15\")",
    "licenca": "Domínio público (GEBCO Grid terms of use) — reconhecer a fonte; não sugerir aval do GEBCO/IHO/IOC; não serve para navegação",
    "url": "https://doi.org/" + G.GEBCO_DOI,
    "exige_credito": True,
}
CREDITO_GEBCO_TELA = "GEBCO Compilation Group (2026) GEBCO 2026 Grid"


def r5(geom, casas=5):
    from shapely import set_precision
    return set_precision(geom, 10 ** -casas)


def poly_fc(geom, props):
    geom = r5(geom)
    return {"type": "Feature", "properties": props, "geometry": mapping(geom)}


def gravar_fc(slug, feats, origem, extra=None):
    fc = {"type": "FeatureCollection", "features": feats}
    json.dump(fc, open(os.path.join(FC, slug + ".json"), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    o = dict(origem); o.update(extra or {})
    json.dump(o, open(os.path.join(FC, slug + ".origem.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"  fc {slug}: {len(feats)} features")


def janela(z, h, s, n, w, e):
    lon, lat = G.eixos(h)
    r0, r1 = np.searchsorted(-lat, -n), np.searchsorted(-lat, -s)
    c0, c1 = np.searchsorted(lon, w), np.searchsorted(lon, e)
    return z[r0:r1, c0:c1], lon[c0:c1], lat[r0:r1]


def partes(g):
    return list(g.geoms) if g.geom_type == "MultiPolygon" else [g]


def sem_furos(p):
    return Polygon(p.exterior)


def contem(g, x, y):
    return g.contains(Point(x, y))


# ======================= PORTO RICO =======================
def porto_rico():
    print("Fossa de Porto Rico")
    z, h = G.ler_asc("gebco_2026_n26.0_s14.0_w-75.0_e-58.0_ascii")
    zz, lo, la = janela(z, h, 17.5, 22.0, -71.0, -59.0)
    P = {"anel_F10": (-67.311, 19.712), "estimativa_2019_F15": (-67.847, 19.613), "blake_1883_F23": (-(66 + 23 / 60 + 40 / 3600), 19 + 40 / 60 + 50 / 3600),
         "challenger_F22": (-(65 + 7 / 60), 19 + 42 / 60), "lista_milwaukee_F29": (-66.5, 19 + 35 / 60), "dive09_F68": (-65.4, 19.15),
         "lyman_1954_S02": (-68.31667, 19.6)}
    MED["pr_pontos_z_gebco2026"] = {k: G.valor_em(z, h, x, y)[0] for k, (x, y) in P.items()}
    out = {}
    for nivel, slug in [(-7000, "fossa-porto-rico"), (-8000, "fossa-porto-rico-trecho-mais-fundo")]:
        g = G.poligonos_abaixo(zz, nivel, lo, la)
        corpo = max((p for p in partes(g) if contem(p, *P["anel_F10"])), key=lambda p: p.area)
        cheio = sem_furos(corpo)
        simp = cheio.simplify(0.002, preserve_topology=True)
        b = simp.bounds
        info = {"nivel_m": nivel, "partes_na_janela": len(partes(g)), "furos_preenchidos": len(corpo.interiors),
                "area_km2": round(U.area_km2(simp), 0), "vertices": len(simp.exterior.coords),
                "bbox": [round(v, 4) for v in b], "comprimento_leste_oeste_km": round(U.vincenty(b[0], (b[1] + b[3]) / 2, b[2], (b[1] + b[3]) / 2) / 1000, 1),
                "pontos_dentro": [k for k, (x, y) in P.items() if contem(simp, x, y)],
                "pontos_fora": {k: round(simp.exterior.distance(Point(x, y)) * 111.32 * math.cos(math.radians(y)), 2) for k, (x, y) in P.items() if not contem(simp, x, y)},
                "dif_simplificacao_area_%": round(100 * (U.area_km2(simp) - U.area_km2(cheio)) / U.area_km2(cheio), 3)}
        MED[slug] = info; out[slug] = simp
        print("  ", slug, info)
    # a fossa inteira, a metade leste (a leste do meio do eixo)
    f = out["fossa-porto-rico"]; b = f.bounds
    meio = (b[0] + b[2]) / 2
    leste = f.intersection(box(meio, b[1] - 1, b[2] + 1, b[3] + 1))
    leste = max(partes(leste), key=lambda p: p.area) if leste.geom_type == "MultiPolygon" else leste
    MED["fossa-porto-rico-leste"] = {"meridiano_do_meio": round(meio, 4), "area_km2": round(U.area_km2(leste), 0), "bbox": [round(v, 4) for v in leste.bounds],
                                     "anegada_centro_lon": -64.33}
    print("   leste", MED["fossa-porto-rico-leste"])
    ex = {"grade": "gebco_2026_n26.0_s14.0_w-75.0_e-58.0 (Esri ASCII, 4080×2880, células de 15\")", "sha256_asc": h["sha256_asc"],
          "recorte_da_curva": "janela 17,5–22°N, 71–59°W", "metodo": "marching squares na grade (centros das células), sela pela média; o corpo que contém o anel (F10); furos preenchidos; simplificado a 0,002° (~200 m) com a topologia preservada"}
    gravar_fc("fossa-porto-rico", [poly_fc(out["fossa-porto-rico"], {"papel": "fossa inteira", "isobata_m": 7000, "rotulo": "Puerto Rico Trench"})], ORIGEM_GEBCO,
              dict(ex, derivado_por="geo_fundo.py: isóbata de 7.000 m (corpo principal), furos preenchidos, tol 0,002°"))
    gravar_fc("fossa-porto-rico-trecho-mais-fundo", [poly_fc(out["fossa-porto-rico-trecho-mais-fundo"], {"papel": "trecho mais fundo", "isobata_m": 8000})], ORIGEM_GEBCO,
              dict(ex, derivado_por="geo_fundo.py: isóbata de 8.000 m (corpo que contém o anel), furos preenchidos, tol 0,002°"))
    gravar_fc("fossa-porto-rico-leste", [poly_fc(leste, {"papel": "metade leste da fossa", "isobata_m": 7000, "corte_lon": round(meio, 4)})], ORIGEM_GEBCO,
              dict(ex, derivado_por=f"geo_fundo.py: a isóbata de 7.000 m a leste do meridiano do meio do eixo ({meio:.4f}°)"))
    # as células mais fundas que o ponto do sonar (8.378 ± 5 m): o aviso de que a grade não dá o 'mais fundo'
    m = zz < -8383
    ii, jj = np.nonzero(m)
    k = np.argmin(zz)
    i0, j0 = np.unravel_index(k, zz.shape)
    MED["pr_celulas_abaixo_8383"] = {"n": int(m.sum()), "min_m": int(zz.min()), "min_em": [round(float(la[i0]), 4), round(float(lo[j0]), 4)],
                                     "lon_de_ate": [round(float(lo[jj].min()), 3), round(float(lo[jj].max()), 3)]}
    print("   abaixo de 8.383 m:", MED["pr_celulas_abaixo_8383"])
    return out


# ======================= SANDWICH DO SUL =======================
def sandwich():
    print("Fossa das Sandwich do Sul")
    z, h = G.ler_asc("gebco_2026_n-51.0_s-63.0_w-36.0_e-18.0_ascii")
    zz, lo, la = janela(z, h, -62.5, -52.0, -34.0, -19.0)
    P = {"meteor_F75": (-26.173, -55.230), "sul_60_S01": (-25.542, -60.479), "ref_marine_regions_C03": (-26.294, -55.323)}
    MED["ss_pontos_z_gebco2026"] = {k: G.valor_em(z, h, x, y)[0] for k, (x, y) in P.items()}
    g = G.poligonos_abaixo(zz, -6000, lo, la)
    ps = partes(g)
    principal = max((p for p in ps if contem(p, *P["meteor_F75"])), key=lambda p: p.area)
    sul = max((p for p in ps if contem(p, *P["sul_60_S01"])), key=lambda p: p.area)
    fossa = MultiPolygon([sem_furos(principal), sem_furos(sul)]).simplify(0.003, preserve_topology=True)
    b = fossa.bounds
    MED["fossa-sandwich-do-sul"] = {"nivel_m": -6000, "partes": 2, "area_km2": round(U.area_km2(fossa), 0), "bbox": [round(v, 4) for v in b],
                                    "lat_norte_sul": [round(b[3], 3), round(b[1], 3)], "F73_diz": "~54°40'S (−54,667) a 60°40'S (−60,667)",
                                    "furos_preenchidos": [len(principal.interiors), len(sul.interiors)],
                                    "pontos_dentro": [k for k, (x, y) in P.items() if contem(fossa, x, y)],
                                    "folga_entre_partes_km": round(sem_furos(principal).distance(sem_furos(sul)) * 111.32 * math.cos(math.radians(60.3)), 2)}
    print("  ", MED["fossa-sandwich-do-sul"])
    ex = {"grade": "gebco_2026_n-51.0_s-63.0_w-36.0_e-18.0 (Esri ASCII, 4320×2880)", "sha256_asc": h["sha256_asc"], "recorte_da_curva": "janela 52–62,5°S, 34–19°W",
          "metodo": "isóbata de 6.000 m por marching squares; as duas partes que contêm o Meteor (F75) e o ponto ao sul de 60°S (S01, Tabela 1), separadas por um degrau mais raso que 6.000 m; furos preenchidos; tol 0,003°"}
    gravar_fc("fossa-sandwich-do-sul", [poly_fc(fossa, {"papel": "fossa inteira", "isobata_m": 6000, "rotulo": "South Sandwich Trench"})], ORIGEM_GEBCO,
              dict(ex, derivado_por="geo_fundo.py: isóbata de 6.000 m (2 partes), tol 0,003°"))
    # o levantamento: células de medida direta (TID 10–17) na GEBCO_2019 e na GEBCO_2026, dentro da fossa
    t26, ht = G.ler_asc("gebco_2026_tid_n-51.0_s-63.0_w-36.0_e-18.0_ascii")
    t19, h19 = G.ler_asc("gebco_2019_tid_n-51.0_s-63.0_w-36.0_e-18.0_ascii")
    T26, _, _ = janela(t26, ht, -62.5, -52.0, -34.0, -19.0)
    T19, _, _ = janela(t19, h19, -62.5, -52.0, -34.0, -19.0)
    med26 = (T26 >= 10) & (T26 <= 17); med19 = (T19 >= 10) & (T19 <= 17)
    # máscara da fossa em células
    from shapely import contains_xy
    LO, LA = np.meshgrid(lo, la)
    dentro = contains_xy(fossa, LO, LA)
    area_cel = (1 / 240 * math.pi / 180 * U.R_AUTALICO) ** 2 * np.cos(np.radians(LA)) / 1e6
    A = float(area_cel[dentro].sum())
    a19 = float(area_cel[dentro & med19].sum()); a26 = float(area_cel[dentro & med26].sum()); anovo = float(area_cel[dentro & med26 & ~med19].sum())
    MED["ss_medido"] = {"area_fossa_km2": round(A), "medido_2019_km2": round(a19), "medido_2026_km2": round(a26), "novo_entre_2019_e_2026_km2": round(anovo),
                        "fracao_sem_medida_direta_2019_%": round(100 * (1 - a19 / A), 1), "fracao_sem_medida_direta_2026_%": round(100 * (1 - a26 / A), 1),
                        "F78_diz": "~91 % sem mapa antes da Five Deeps", "S01_tabela1": "15.052 km² mapeados, 15.045 novos (Meteor e o sul de 60°S juntos)",
                        "tid_2026_na_fossa": {int(k): int(v) for k, v in zip(*np.unique(T26[dentro], return_counts=True))},
                        "tid_2019_na_fossa": {int(k): int(v) for k, v in zip(*np.unique(T19[dentro], return_counts=True))}}
    print("   medido:", {k: v for k, v in MED["ss_medido"].items() if not k.startswith("tid")})
    feats = []
    for nome, mask in [("medido em 2019 (TID 10-17 na GEBCO_2019)", dentro & med19), ("medido só depois de 2019 (TID 10-17 na GEBCO_2026 e não na GEBCO_2019)", dentro & med26 & ~med19)]:
        pol = G.poligonos_abaixo(-mask.astype(np.float64), -0.5, lo, la)   # células com 1 → valor −1 < −0,5
        if pol is None:
            continue
        pol = unary_union([p for p in partes(pol) if U.area_km2(p) > 2]).simplify(0.004, preserve_topology=True)
        feats.append(poly_fc(pol, {"papel": nome, "area_km2": round(U.area_km2(pol))}))
    gravar_fc("levantamento-fossa-sandwich-tid", feats, dict(ORIGEM_GEBCO, fonte="GEBCO Compilation Group: TID Grid da GEBCO_2019 e da GEBCO_2026 — app de recorte download.gebco.net"),
              {"grade": "gebco_2026_tid e gebco_2019_tid, n-51 s-63 w-36 e-18", "sha256_asc": [ht["sha256_asc"], h19["sha256_asc"]],
               "metodo": "células com TID 10–17 (medida direta: monofeixe, multifeixe, sísmica, sondagem isolada, ENC, lidar, ótico, combinação) dentro da fossa de 6.000 m; contorno das células por marching squares; pedaços < 2 km² fora; tol 0,004°",
               "derivado_por": "geo_fundo.py: TID 2019 × TID 2026 dentro de fossa-sandwich-do-sul"})
    return fossa


# ======================= MARIANAS =======================
def marianas():
    print("Fossa das Marianas")
    z, h = G.ler_asc("gebco_2026_n25.0_s9.0_w138.0_e150.0_ascii")
    zz, lo, la = janela(z, h, 9.0, 25.0, 138.0, 150.0)
    g = G.poligonos_abaixo(zz, -7000, lo, la)
    ps = [sem_furos(p) for p in partes(g) if U.area_km2(p) > 3000 and p.bounds[0] > 140.5]
    fossa = MultiPolygon(ps).simplify(0.01, preserve_topology=True)
    MED["fossa-marianas"] = {"nivel_m": -7000, "partes": len(ps), "area_km2": round(U.area_km2(fossa)), "bbox": [round(v, 3) for v in fossa.bounds],
                             "challenger_dentro": contem(fossa, 142.587, 11.369), "z_no_challenger": G.valor_em(z, h, 142.587, 11.369)[0],
                             "min_da_grade": [int(zz.min())]}
    print("  ", MED["fossa-marianas"])
    gravar_fc("fossa-marianas", [poly_fc(fossa, {"papel": "fossa (vista do mundo)", "isobata_m": 7000, "rotulo": "Mariana Trench"})], ORIGEM_GEBCO,
              {"grade": "gebco_2026_n25.0_s9.0_w138.0_e150.0", "sha256_asc": h["sha256_asc"], "recorte_da_curva": "9–25°N, 138–150°E (o recorte para em 25°N)",
               "metodo": "isóbata de 7.000 m; as partes com mais de 3.000 km² a leste de 140,5°E (o arco da fossa); furos preenchidos; tol 0,01° (escala de mundo)",
               "derivado_por": "geo_fundo.py: isóbata de 7.000 m, 4 partes, tol 0,01°"})


# ======================= BASES =======================
RAMPA = [  # profundidade (m, positiva) → cor; proposta neutra a partir do --fundo (#0E1726), mais claro no raso
    (0, (70, 96, 122)), (200, (52, 76, 101)), (1000, (38, 58, 82)), (3000, (26, 42, 63)), (5000, (19, 31, 49)), (7000, (14, 23, 38)), (9000, (9, 15, 26))]


def colorir(prof):
    xs = np.array([p for p, _ in RAMPA], dtype=float)
    out = np.zeros(prof.shape + (3,), dtype=np.float64)
    for c in range(3):
        out[..., c] = np.interp(prof, xs, np.array([col[c] for _, col in RAMPA], dtype=float))
    return out


def base(nome_grade, recorte, slug, rotulo, exagero=4.0, reduzir=1):
    z, h = G.ler_asc(nome_grade)
    s, n, w, e = recorte
    lon, lat = G.eixos(h)
    c = h["cellsize"]
    r0 = int(round((h["yllcorner"] + h["nrows"] * c - n) / c)); r1 = int(round((h["yllcorner"] + h["nrows"] * c - s) / c))
    c0 = int(round((w - h["xllcorner"]) / c)); c1 = int(round((e - h["xllcorner"]) / c))
    zz = z[r0:r1, c0:c1].astype(np.float64)
    hh = dict(h, nrows=zz.shape[0], ncols=zz.shape[1], xllcorner=w, yllcorner=s)
    hs = G.sombreamento(zz, hh, exagero=exagero)
    prof = np.clip(-zz, 0, None)
    cor = colorir(prof) * (0.45 + 0.75 * hs[..., None])   # o relevo modula a cor; 0,45 no lado da sombra
    cor = np.clip(cor, 0, 255)
    alfa = np.where(zz < 0, 255.0, 0.0)                    # terra (≥ 0 m) transparente: a MapTiler mostra a terra
    rgba = np.concatenate([cor, alfa[..., None]], -1)
    merc, cantos = G.para_mercator(rgba, hh)
    if reduzir > 1:
        merc = merc[::reduzir, ::reduzir]
    img = Image.fromarray(np.clip(np.round(merc), 0, 255).astype(np.uint8), "RGBA")
    arq = os.path.join(BASE, slug + ".png")
    img.save(arq, optimize=True)
    sha = G.sha256_arquivo(arq)
    meta = {"nome": slug, "tipo": "raster", "rotulo": rotulo,
            "imagem": {"arquivo": f"../_media/base/{slug}.png", "coordinates": [[round(x, 6), round(y, 6)] for x, y in cantos], "largura": img.width, "altura": img.height, "sha256": sha},
            "projecao": "Web Mercator (EPSG:3857): as linhas da imagem são igualmente espaçadas em y de Mercator, como a fonte de imagem do MapLibre pede (4 cantos)",
            "o_que_e": "relevo sombreado do fundo do mar (só onde a GEBCO dá < 0 m; terra transparente), cor por profundidade",
            "atribuicao": {"exigida": True, "tela": CREDITO_GEBCO_TELA, "descricao": G.GEBCO_CITACAO},
            "procedencia": {"fonte": ORIGEM_GEBCO["fonte"], "grade": nome_grade, "sha256_asc": h["sha256_asc"], "recorte_graus": {"sul": s, "norte": n, "oeste": w, "leste": e},
                            "celulas": [int(zz.shape[1]), int(zz.shape[0])], "licenca": ORIGEM_GEBCO["licenca"], "termos": G.GEBCO_TERMOS_URL, "termos_copia": G.GEBCO_TERMOS_COPIA,
                            "sombreamento": {"metodo": "Horn, espaçamento real das células em metros", "azimute": 315, "altitude": 45, "exagero_vertical": exagero},
                            "rampa_de_cor": {"profundidade_m_rgb": RAMPA, "nota": "proposta da pesquisa, a partir do --fundo (#0E1726); a cor final é do diretor de arte e do mapista"},
                            "reamostragem": "linhas: lat → y de Mercator, interpolação linear entre as duas linhas vizinhas da grade; colunas intactas" + (f"; depois 1 a cada {reduzir} pixels" if reduzir > 1 else ""),
                            "gerado_por": "out/atlantico-fundo/_pesquisa/geo_fundo.py", "gerado_em": HOJE}}
    json.dump(meta, open(arq + ".json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    js = (f"// Base do fundo (GEBCO 2026), gravada por out/atlantico-fundo/_pesquisa/geo_fundo.py. A cena lê window.__BASE_GEBCO[\"{slug}\"].\n"
          "window.__BASE_GEBCO = window.__BASE_GEBCO || {};\n"
          f"window.__BASE_GEBCO[{json.dumps(slug)}] = {json.dumps({k: meta[k] for k in ('nome', 'tipo', 'rotulo', 'imagem', 'atribuicao')}, ensure_ascii=False)};\n")
    open(os.path.join(BASE, slug + ".js"), "w", encoding="utf-8").write(js)
    MED["base_" + slug] = {"px": [img.width, img.height], "bytes": os.path.getsize(arq), "sha256": sha, "cantos": meta["imagem"]["coordinates"]}
    print("  base", slug, img.size, os.path.getsize(arq), sha[:12])


def base_wms(arq_in, slug, rotulo, bbox_3857, o_que_e, tid=False, jpeg=False):
    im = Image.open(os.path.join(WMS, arq_in))
    x0, y0, x1, y1 = bbox_3857
    cantos = [[round(math.degrees(x0 / G.R), 6), round(float(G.merc_lat(y1)), 6)], [round(math.degrees(x1 / G.R), 6), round(float(G.merc_lat(y1)), 6)],
              [round(math.degrees(x1 / G.R), 6), round(float(G.merc_lat(y0)), 6)], [round(math.degrees(x0 / G.R), 6), round(float(G.merc_lat(y0)), 6)]]
    if tid:
        a = np.array(im.convert("RGBA"))
        medido = a[..., 3] > 0
        out = np.zeros_like(a); out[..., :3] = 255; out[..., 3] = np.where(medido, 255, 0)   # preto → branco: a cor fica para a cena
        im2 = Image.fromarray(out, "RGBA"); ext = "png"
        MED["mundo_tid_" + slug] = {"pixels_medidos_%": round(100 * medido.mean(), 2)}
    else:
        im2 = im.convert("RGB"); ext = "jpg" if jpeg else "png"
    arq = os.path.join(BASE, f"{slug}.{ext}")
    if ext == "jpg":
        im2.save(arq, quality=92, optimize=True)
    else:
        im2.save(arq, optimize=True)
    sha = G.sha256_arquivo(arq)
    meta = {"nome": slug, "tipo": "raster", "rotulo": rotulo,
            "imagem": {"arquivo": f"../_media/base/{slug}.{ext}", "coordinates": cantos, "largura": im2.width, "altura": im2.height, "sha256": sha},
            "projecao": "Web Mercator (EPSG:3857), pedida assim ao WMS",
            "o_que_e": o_que_e,
            "atribuicao": {"exigida": True, "tela": CREDITO_GEBCO_TELA,
                           "descricao": "Imagery reproduced from the GEBCO_2026 Grid, GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi:10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)"},
            "procedencia": {"fonte": "WMS oficial da GEBCO (BODC), https://wms.gebco.net/mapserv, camada " + ("GEBCO_LATEST_TID" if tid else "GEBCO_LATEST"),
                            "pedido": {"crs": "EPSG:3857", "bbox": [round(v, 3) for v in bbox_3857], "largura": im.width, "altura": im.height},
                            "sha256_original": G.sha256_arquivo(os.path.join(WMS, arq_in)), "original": f"_tmp/pesquisa-geo/baixado/gebco-wms/{arq_in}",
                            "termos_wms": "GetCapabilities: 'It is intended that this Web Map Service (WMS) provides access to data from GEBCO's latest bathymetric grid in the form of imagery for use in your applications'; crédito pedido: 'Imagery reproduced from the GEBCO_2026 Grid, GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi:…)'; não serve para navegação",
                            "tratamento": ("as células medidas (TID 10–17 e 44, em preto no WMS) viraram branco opaco, o resto transparente; a cor é da cena" if tid else
                                           ("convertida a JPEG, qualidade 92" if jpeg else "como veio")),
                            "gerado_por": "out/atlantico-fundo/_pesquisa/geo_fundo.py", "gerado_em": HOJE}}
    json.dump(meta, open(arq + ".json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    js = (f"// Base GEBCO (WMS oficial), gravada por out/atlantico-fundo/_pesquisa/geo_fundo.py. A cena lê window.__BASE_GEBCO[\"{slug}\"].\n"
          "window.__BASE_GEBCO = window.__BASE_GEBCO || {};\n"
          f"window.__BASE_GEBCO[{json.dumps(slug)}] = {json.dumps({k: meta[k] for k in ('nome', 'tipo', 'rotulo', 'imagem', 'atribuicao')}, ensure_ascii=False)};\n")
    open(os.path.join(BASE, slug + ".js"), "w", encoding="utf-8").write(js)
    MED["base_" + slug] = {"px": [im2.width, im2.height], "bytes": os.path.getsize(arq), "sha256": sha, "cantos": cantos}
    print("  base", slug, im2.size, os.path.getsize(arq), sha[:12])


if __name__ == "__main__":
    porto_rico()
    sandwich()
    marianas()
    if "--sem-base" not in sys.argv:
        print("Bases")
        base("gebco_2026_n26.0_s14.0_w-75.0_e-58.0_ascii", (15.0, 24.5, -72.5, -59.0), "gebco-caribe",
             "GEBCO 2026 Grid — relevo sombreado do fundo, Caribe e Atlântico Norte ocidental (15–24,5°N, 72,5–59°W)")
        base("gebco_2026_n-51.0_s-63.0_w-36.0_e-18.0_ascii", (-61.5, -53.0, -33.0, -20.0), "gebco-sandwich-do-sul",
             "GEBCO 2026 Grid — relevo sombreado do fundo, Fossa das Sandwich do Sul (53–61,5°S, 33–20°W)")
        E = 20037508.342789244
        base_wms("mundo-gebco-latest-4096.png", "gebco-mundo-relevo", "GEBCO 2026 (WMS GEBCO_LATEST) — o mundo em Web Mercator, relevo sombreado com a cor da GEBCO",
                 (-E, -E, E, E), "o mundo inteiro (±85,05°) em Mercator, terra e mar, na rampa de cor da própria GEBCO", jpeg=True)
        bb = [float(v) for v in open(os.path.join(WMS, "atlantico-bbox.txt")).read().split()[0].split(",")]
        base_wms("atlantico-gebco-latest.png", "gebco-atlantico-relevo", "GEBCO 2026 (WMS GEBCO_LATEST) — o Atlântico, 100°W–20°E, 66°S–72°N, em Web Mercator",
                 bb, "o Atlântico com as Américas e a África, terra e mar, na rampa de cor da própria GEBCO", jpeg=True)
        base_wms("mundo-gebco-tid-4096.png", "gebco-mundo-medido", "GEBCO 2026 TID (WMS GEBCO_LATEST_TID) — o que já foi medido, o mundo",
                 (-E, -E, E, E), "máscara: branco onde a célula da GEBCO_2026 se baseia em dado medido (TID 10–17 e 44), transparente no resto", tid=True)
        base_wms("atlantico-gebco-tid.png", "gebco-atlantico-medido", "GEBCO 2026 TID (WMS GEBCO_LATEST_TID) — o que já foi medido, o Atlântico",
                 bb, "máscara: branco onde a célula da GEBCO_2026 se baseia em dado medido (TID 10–17 e 44), transparente no resto", tid=True)
    json.dump(MED, open(os.path.join(G.TMP, "medidas-fundo.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1, default=str)
    print("ok")
