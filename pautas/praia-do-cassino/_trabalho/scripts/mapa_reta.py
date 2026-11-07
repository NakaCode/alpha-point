"""Desenha, para o teste dos leitores, a praia (o traçado do IBGE, da barra do Rio Grande à foz do Arroio Chuí) e a linha reta
entre as duas pontas, sem nomes de lugar, com uma escala em milhas.

Uso: python -I -X utf8 -B mapa_reta.py <Municipios_Defrontantes_com_o_Mar_2024_shp.zip> <saida.png>

Reaproveita o desvio_corda.py (mesma pasta, carregado pelo caminho absoluto) para montar o traçado. Projeção local equidistante.
Não baixa nada.
"""
import importlib.util
import math
import os
import sys

from PIL import Image, ImageDraw, ImageFont

AQUI = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("desvio_corda", os.path.join(AQUI, "desvio_corda.py"))
dc = importlib.util.module_from_spec(spec)
spec.loader.exec_module(dc)

W = H = 1200
MARGEM = 140
KM_POR_MI = 1.609344


def fonte(tam):
    for nome in ("arial.ttf", "segoeui.ttf", "DejaVuSans.ttf"):
        try:
            return ImageFont.truetype(nome, tam)
        except OSError:
            continue
    return ImageFont.load_default()


def main():
    if len(sys.argv) < 3:
        print("uso: mapa_reta.py <shp.zip> <saida.png>")
        sys.exit(2)
    total, _ = dc.montar(sys.argv[1])
    a, b = total[0], total[-1]
    lat0 = math.radians((a[1] + b[1]) / 2)
    lon0 = (a[0] + b[0]) / 2
    R = 6371.0

    def km(p):
        return (math.radians(p[0] - lon0) * R * math.cos(lat0), math.radians(p[1] - math.degrees(lat0)) * R)

    pts = [km(p) for p in total]
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    span = max(max(xs) - min(xs), max(ys) - min(ys))
    esc = (W - 2 * MARGEM) / span
    cx, cy = (max(xs) + min(xs)) / 2, (max(ys) + min(ys)) / 2

    def px(p):
        return (W / 2 + (p[0] - cx) * esc, H / 2 - (p[1] - cy) * esc)

    img = Image.new("RGB", (W, H), (244, 241, 234))
    d = ImageDraw.Draw(img)
    # a linha reta, tracejada
    pa, pb = px(pts[0]), px(pts[-1])
    n_traco = 60
    for k in range(n_traco):
        if k % 2:
            continue
        t0, t1 = k / n_traco, (k + 1) / n_traco
        d.line([(pa[0] + (pb[0] - pa[0]) * t0, pa[1] + (pb[1] - pa[1]) * t0),
                (pa[0] + (pb[0] - pa[0]) * t1, pa[1] + (pb[1] - pa[1]) * t1)], fill=(200, 40, 40), width=4)
    # a praia
    d.line([px(p) for p in pts], fill=(30, 60, 110), width=7, joint="curve")
    for p in (pa, pb):
        d.ellipse([p[0] - 11, p[1] - 11, p[0] + 11, p[1] + 11], fill=(30, 30, 30))
    # a escala: 25 mi
    mi25 = 25 * KM_POR_MI * esc
    x0, y0 = MARGEM, H - 80
    d.line([(x0, y0), (x0 + mi25, y0)], fill=(30, 30, 30), width=5)
    for x in (x0, x0 + mi25):
        d.line([(x, y0 - 12), (x, y0 + 12)], fill=(30, 30, 30), width=4)
    d.text((x0, y0 - 52), "25 miles", fill=(30, 30, 30), font=fonte(34))
    # o norte
    d.polygon([(W - 90, 70), (W - 110, 120), (W - 70, 120)], fill=(30, 30, 30))
    d.text((W - 101, 125), "N", fill=(30, 30, 30), font=fonte(34))
    # a legenda
    f = fonte(32)
    d.line([(MARGEM, 70), (MARGEM + 70, 70)], fill=(30, 60, 110), width=7)
    d.text((MARGEM + 90, 52), "the beach", fill=(30, 30, 30), font=f)
    d.line([(MARGEM, 125), (MARGEM + 30, 125)], fill=(200, 40, 40), width=4)
    d.line([(MARGEM + 42, 125), (MARGEM + 70, 125)], fill=(200, 40, 40), width=4)
    d.text((MARGEM + 90, 107), "a straight line between its two ends", fill=(30, 30, 30), font=f)
    os.makedirs(os.path.dirname(os.path.abspath(sys.argv[2])), exist_ok=True)
    img.save(sys.argv[2])
    print(f"gravado: {sys.argv[2]} ({len(pts)} vértices; {dc.ci.comprimento(total):.2f} km; corda {dc.ci.dist_km(a, b):.2f} km)")


if __name__ == "__main__":
    main()
