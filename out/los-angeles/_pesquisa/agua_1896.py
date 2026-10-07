# -*- coding: utf-8 -*-
"""A água das folhas do USGS de 1896 (Redondo e San Pedro, 1:62.500, domínio público) contra a faixa de 1906 lida na
folha de Hamlin (1916). Letra e traço preto (escuros) ficam fora. Classe "água" = onde a impressão, borrada a 4 px, fica azulada (B - R > -28; o papel fica perto de -45): pega a água desenhada (linhas d'água) e a hachura azul de pântano/baixio de maré, que nas folhas de 1896 é a
água desenhada (linhas d'água) e o pântano/baixio de maré (hachura azul). Mede: quanto da faixa cai sobre azul, em que
latitudes, e a distância da ponta sul da faixa ao azul mais próximo. Não decide frase nenhuma."""
import json, sys, os
import numpy as np
from PIL import Image, ImageDraw
import geo_hist as gh
import hamlin_conferir as hc
sys.stdout.reconfigure(encoding='utf-8')
AQUI = os.path.dirname(os.path.abspath(__file__))
mf = hc.mf
s = np.array(json.load(open(os.path.join(AQUI, '..', '_tmp', 'geo-hist', 'p1906-shoestring-hamlin.json')))['features'][0]['geometry']['coordinates'][0])
tip = s[np.argmin(s[:, 1])]
res = {}
for nome, arq, lat_lim in (('Redondo 1896', 'CA_Redondo_298753_1896_62500_geo.tif', (33.75, 33.80)), ('San Pedro 1896', 'CA_San_Pedro_298928_1896_62500_geo.tif', (33.72, 33.75))):
    F = gh.Folha(os.path.join(AQUI, '..', '_tmp', 'geo-fontes', 'usgs', arq))
    r, o = F.recorte(-118.34, -118.22, lat_lim[0], lat_lim[1], 1.0)
    a = np.asarray(r.convert('RGB'), dtype=int)
    import cv2
    bl = cv2.GaussianBlur(a.astype(np.float32), (0, 0), 4)
    escuro = cv2.dilate(((a.mean(axis=2) < 110)).astype(np.uint8), np.ones((7, 7), np.uint8)) > 0   # letra e traço preto
    azul = ((bl[:, :, 2] - bl[:, :, 0]) > -28) & ~escuro   # papel: B - R perto de -45; linhas d'água e hachura azul puxam para cima
    Image.fromarray((azul * 255).astype(np.uint8)).save(os.path.join(AQUI, '..', '_tmp', 'geo-hist', 'agua-%s.png' % nome.replace(' ', '-')))
    m = Image.new('L', r.size, 0)
    ImageDraw.Draw(m).polygon([(x - o[0], y - o[1]) for x, y in (F.lonlat_para_px(*p) for p in s)], fill=255)
    dentro = np.asarray(m) > 0
    ys, xs = np.nonzero(dentro & azul)
    px_m = F.sx  # metros por pixel da folha
    lats = [F.px_para_lonlat(x + o[0], y + o[1])[1] for x, y in zip(xs[::50], ys[::50])] if len(xs) else []
    # distância da ponta ao azul mais próximo (fora da faixa ou dentro)
    tx, ty = F.lonlat_para_px(*tip); tx -= o[0]; ty -= o[1]
    yy, xx = np.nonzero(azul)
    dist = None
    if len(xx):
        k = np.argmin(np.hypot(xx - tx, yy - ty))
        lo, la = F.px_para_lonlat(xx[k] + o[0], yy[k] + o[1])
        x1, y1 = mf.tm(np.array([tip[0], lo]), np.array([tip[1], la]))
        dist = float(np.hypot(x1[1] - x1[0], y1[1] - y1[0])); res_pt = (round(lo, 5), round(la, 5))
    res[nome] = {'pixels_da_faixa': int(dentro.sum()), 'pixels_azuis_na_faixa': int((dentro & azul).sum()),
                 'area_azul_na_faixa_km2': round(float((dentro & azul).sum()) * px_m * px_m / 1e6, 3),
                 'lat_do_azul_na_faixa': [round(min(lats), 4), round(max(lats), 4)] if lats else None,
                 'ponta_ao_azul_mais_proximo_m': round(dist) if dist else None, 'azul_mais_proximo_lonlat': res_pt if dist else None}
print(json.dumps({'ponta_1906': [round(tip[0], 5), round(tip[1], 5)], 'folhas': res}, ensure_ascii=False, indent=1))
