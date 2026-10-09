"""As bases das miniaturas alternativas do vídeo 2 (rodada 2, 09/10/2026), para o "Test & Compare" do YouTube.

    python roteiros/los-angeles/miniatura/variantes-base.py        (da raiz do canal; usa o cache de relevo da rodada 1)

Por quê: a miniatura publicada teve 0,9 % de cliques nas primeiras 236 impressões, e o Lucas a achou "meio fraca". O vidIQ
deu 81 de 100 e apontou o enquadramento largo ("Crop tighter on the subject"). Medida aqui: a faixa da cidade tem ~0,9 km de
largura, ~15 px no palco de 2560 da rodada 1, e some (1 px) no tamanho da página inicial do YouTube.

O que muda da rodada 1 (base-relevo.py, ao lado), sem mudar a geometria:
- o quadro aperta na cidade (A e C) ou na faixa e no porto (B);
- a faixa ganha um halo em --tinta por baixo do laranja: um contorno de destaque, como o anel do porto, não um polígono
  mais largo. A faixa é o trecho da cidade entre 33,785° e 33,921° de latitude a leste de -118,36° (medido no polígono
  do Census: 0,9 km de largura, de 33,92 a 33,79);
- A e B sobre fundo escuro e terra lisa (as miniaturas de mapa que estouraram em canais pequenos usam uma forma só, cor
  chapada, fundo calmo); C mantém o relevo da rodada 1.
Fontes: as mesmas da rodada 1 (relevo USGS/SRTM pelos Terrain Tiles da AWS; contorno TIGER/Line 2025 do Census), em
domínio público. Grava out/los-angeles/_tmp/miniatura-r2/<variante>-mapa.png e <variante>-pontos.json.
"""
import json, math, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

RAIZ = os.getcwd()
CACHE = os.path.join(RAIZ, "out", "los-angeles", "_tmp", "miniatura", "terrario")
SAIDA = os.path.join(RAIZ, "out", "los-angeles", "_tmp", "miniatura-r2")
GEO = os.path.join(RAIZ, "out", "los-angeles", "_media", "geo", "la-hoje-tiger.json")
Z, W, H = 11, 2560, 1440
FUNDO, TINTA, DEST = np.array((14, 23, 38.0)), np.array((244, 241, 234.0)), np.array((245, 165, 36.0))
FAIXA = dict(lat_min=33.785, lat_max=33.921, lon_min=-118.36)   # a faixa e, abaixo dela, o porto
PORTO_LAT = 33.785

VARIANTES = {
    # nome: (lat do topo, lat da base, lon do centro, fração x do centro, estilo, raio do halo em px)
    "A": (34.362, 33.690, -118.41, 0.28, "liso", 8),
    "B": (34.075, 33.692, -118.30, 0.36, "liso-faixa", 9),
    "C": (34.362, 33.690, -118.41, 0.28, "relevo", 8),
    "D": (34.075, 33.692, -118.30, 0.36, "relevo-faixa", 9),
}


def merc(lon, lat):
    n = 256 * 2 ** Z
    return ((lon + 180) / 360 * n,
            (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * n)


def borrar(a, r):
    return np.asarray(Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))) / 255.0


def tile(tx, ty):
    p = os.path.join(CACHE, f"{Z}-{tx}-{ty}.png")
    if not os.path.isfile(p):
        raise SystemExit(f"falta o tile {p}: rode a rodada 1 (base-relevo.py), que pede e guarda os tiles")
    a = np.asarray(Image.open(p).convert("RGB")).astype(np.float64)
    return a[..., 0] * 256 + a[..., 1] + a[..., 2] / 256 - 32768


def gerar(nome, lat_topo, lat_base, lon_c, x_c, estilo, r_halo):
    y0, y1 = merc(0, lat_topo)[1], merc(0, lat_base)[1]
    larg = (y1 - y0) * W / H
    x0 = merc(lon_c, 0)[0] - x_c * larg
    esc = W / larg

    def palco(lon, lat):
        x, y = merc(lon, lat)
        return (x - x0) * esc, (y - y0) * esc

    # o relevo (do cache da rodada 1)
    tx0, tx1, ty0, ty1 = int(x0 // 256), int((x0 + larg) // 256), int(y0 // 256), int(y1 // 256)
    mos = np.zeros(((ty1 - ty0 + 1) * 256, (tx1 - tx0 + 1) * 256))
    for ty in range(ty0, ty1 + 1):
        for tx in range(tx0, tx1 + 1):
            mos[(ty - ty0) * 256:(ty - ty0 + 1) * 256, (tx - tx0) * 256:(tx - tx0 + 1) * 256] = tile(tx, ty)
    el = np.asarray(Image.fromarray(mos.astype(np.float32), mode="F").transform(
        (W, H), Image.AFFINE, (1 / esc, 0, x0 - tx0 * 256, 0, 1 / esc, y0 - ty0 * 256), resample=Image.BICUBIC))
    m_px = 156543.03 * math.cos(math.radians((lat_topo + lat_base) / 2)) / 2 ** Z / esc
    gy, gx = np.gradient(el * 1.8, m_px)
    inc, asp = np.arctan(np.hypot(gx, gy)), np.arctan2(-gx, gy)

    def sol(az, alt):
        az, alt = math.radians(az), math.radians(alt)
        return np.clip(np.sin(alt) * np.cos(inc) + np.cos(alt) * np.sin(inc) * np.cos(az - asp), 0, 1)

    hs = 0.65 * sol(315, 40) + 0.35 * sol(270, 50)
    eh_terra = borrar(el > 2.5, 5) > 0.68
    m_terra = borrar(eh_terra, 1.2)

    if estilo.startswith("relevo"):   # a paleta da rodada 1
        pares = [(0, (150, 188, 112)), (120, (140, 180, 102)), (350, (160, 170, 96)), (750, (192, 166, 108)),
                 (1300, (214, 188, 146)), (2200, (236, 224, 200))]
        terra = np.stack([np.interp(el, [p[0] for p in pares], [p[1][i] for p in pares]) for i in range(3)], -1)
        terra = terra * (0.42 + 0.78 * hs)[..., None]
        perto = borrar(eh_terra, 45)[..., None]
        mar = np.array((14, 25, 44.0)) * (1 - perto) + np.array((30, 52, 82.0)) * perto
    else:                    # terra lisa em cinza neutro, com um sopro de relevo; mar azul-marinho, mais escuro que a terra
        # (embalagem.md §3: base escura demais vira mancha no feed escuro do YouTube. A banca de 09/10 pediu a terra sem azul,
        # para não inverter "azul é água", e o mar mais claro que o feed #0f0f0f)
        terra = np.array((88, 92, 100.0)) * (0.80 + 0.38 * hs)[..., None]
        mar = np.full((H, W, 3), (20, 34, 56.0))
    base = mar * (1 - m_terra[..., None]) + terra * m_terra[..., None]

    # a cidade (2× e reduzida), e a faixa com o porto
    gj = json.load(open(GEO, encoding="utf-8"))
    SS = 2
    cid_i = Image.new("L", (W * SS, H * SS), 0)
    dc = ImageDraw.Draw(cid_i)
    for f in gj["features"]:
        g = f["geometry"]
        for poli in ([g["coordinates"]] if g["type"] == "Polygon" else g["coordinates"]):
            ext, *buracos = poli
            dc.polygon([tuple(c * SS for c in palco(*p)) for p in ext], fill=255)
            for b in buracos:
                dc.polygon([tuple(c * SS for c in palco(*p)) for p in b], fill=0)
    cid = np.asarray(cid_i.resize((W, H), Image.LANCZOS)) / 255.0
    cid = cid * borrar(borrar(eh_terra, 14) > 0.25, 1.2)   # recortada pela costa "fechada", como na rodada 1

    yy, xx = np.mgrid[0:H, 0:W]
    _, ymax = palco(lon_c, FAIXA["lat_max"])
    _, ymin = palco(lon_c, FAIXA["lat_min"])
    xlim, _ = palco(FAIXA["lon_min"], lat_base)
    sul = (yy > ymax) & (xx > xlim)                         # a faixa e o porto, ao sul de 33,921° e a leste de -118,36°
    faixa = cid * (sul & (yy < ymin))                         # só a faixa
    destaque = cid * sul

    # o halo da faixa: --tinta dos dois lados, macio (o raio vem da variante)
    halo = np.clip(borrar(faixa, r_halo) * 9.0, 0, 1)
    halo = borrar(halo, 3)
    # o contorno e a sombra da cidade, como na rodada 1
    dil = np.clip(borrar(cid, 7) * 6.0, 0, 1)
    somb = np.roll(np.roll(borrar(np.maximum(dil, halo), 18), 12, 0), 7, 1)
    out = base * (1 - 0.6 * somb[..., None])

    if estilo.endswith("-faixa"):   # o resto da cidade num --destaque claro (42 % com --tinta); a faixa e o porto cheios
        # (o --destaque a 38 % sobre a base, que a banca pediu, virou marrom no cinza e oliva no verde: a cidade tem de seguir
        # com a mesma cor, só mais clara)
        out = out * (1 - dil[..., None]) + TINTA * dil[..., None]
        out = out * (1 - halo[..., None]) + TINTA * halo[..., None]
        apagada = (DEST * 0.42 + TINTA * 0.58) * (0.90 + 0.16 * hs)[..., None]
        out = out * (1 - cid[..., None]) + apagada * cid[..., None]
        laranja = DEST * (0.82 + 0.26 * hs)[..., None]
        out = out * (1 - destaque[..., None]) + laranja * destaque[..., None]
    else:
        out = out * (1 - np.maximum(dil, halo)[..., None]) + TINTA * np.maximum(dil, halo)[..., None]
        laranja = DEST * ((0.70 + 0.42 * hs) if estilo == "relevo" else (0.82 + 0.26 * hs))[..., None]
        out = out * (1 - cid[..., None]) + laranja * cid[..., None]

    os.makedirs(SAIDA, exist_ok=True)
    Image.fromarray(np.clip(out, 0, 255).astype(np.uint8)).save(os.path.join(SAIDA, f"{nome}-mapa.png"))
    ys, xs = np.nonzero(faixa > 0.5)
    pts = {
        "faixa_meio": palco(-118.300, 33.86),
        "faixa_topo": palco(-118.288, 33.925),
        "porto": palco(-118.268, 33.738),
        "cidade_bbox": [int(np.nonzero(cid.max(0) > 0.5)[0].min()), int(np.nonzero(cid.max(1) > 0.5)[0].min()),
                        int(np.nonzero(cid.max(0) > 0.5)[0].max()), int(np.nonzero(cid.max(1) > 0.5)[0].max())],
        "faixa_bbox": [int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())],
        "px_por_km": 1000 / m_px,
        "faixa_largura_px": round(0.9 * 1000 / m_px, 1),
    }
    json.dump(pts, open(os.path.join(SAIDA, f"{nome}-pontos.json"), "w"), indent=1)
    print(nome, estilo, json.dumps({k: (v if not isinstance(v, tuple) else [round(c) for c in v]) for k, v in pts.items()}))


if __name__ == "__main__":
    for nome, args in VARIANTES.items():
        gerar(nome, *args)
