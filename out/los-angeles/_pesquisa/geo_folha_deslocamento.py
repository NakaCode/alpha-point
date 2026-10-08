# -*- coding: utf-8 -*-
"""Mede o deslocamento local de uma folha histórica do USGS contra uma referência de hoje (pesquisa-geo, 08/10/2026).

Referências (pontos fixos que existem na folha e hoje):
  ruas   : eixos de rua do TIGER/Line 2025 (Census, domínio público; cache roads-cache.pkl) contra o papel claro entre as quadras da folha
           (nas folhas 1:24.000 dos anos 1920 a rua é o vão claro entre quadras impressas em marrom);
  relevo : curvas de 50 ft do USGS 3DEP (exportImage) contra as curvas marrons impressas na folha.
Método: os pontos da referência são deslocados (leste, norte) em metros numa grade e projetados na folha pela georreferência do
próprio USGS (geo_hist.Folha); a nota é a média da máscara (borrada) da folha nesses pixels. O melhor deslocamento é onde a folha
desenha o lugar de hoje: posição_na_folha - posição_real. Corrige-se subtraindo-o.
Uso: python geo_folha_deslocamento.py <folha.tif> <ruas|relevo> <lonW,latS,lonE,latN> [raio_m=200] [passo_m=4] [dem.tif]
Imprime JSON: melhor (de, dn), nota, nota sem deslocamento, fundo, 2º pico fora de 40 m, meia-largura do pico."""
import sys, math, json, pickle, os
import numpy as np
from PIL import Image, ImageFilter
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from geo_hist import Folha
AQUI = os.path.dirname(os.path.abspath(__file__))

def pontos_ruas(reg, passo=3.0):
    rs = pickle.load(open(os.path.join(AQUI, '..', '_tmp', 'geo-fontes', 'roads-cache.pkl'), 'rb'))
    kx = 111320 * math.cos(math.radians((reg[1] + reg[3]) / 2)); ky = 110950
    out = []
    for n, a in rs:
        for (x0, y0), (x1, y1) in zip(a[:-1, :2], a[1:, :2]):
            L = math.hypot((x1 - x0) * kx, (y1 - y0) * ky); k = max(1, int(L / passo))
            for t in np.linspace(0, 1, k, endpoint=False):
                lo, la = x0 + t * (x1 - x0), y0 + t * (y1 - y0)
                if reg[0] < lo < reg[2] and reg[1] < la < reg[3]: out.append((lo, la))
    return np.array(out)

def pontos_relevo(reg, dem_arq):
    im = Image.open(dem_arq); t = im.tag_v2; tie, esc = t[33922], t[33550]
    dem = np.array(im).astype(float); dem[(dem < -50) | (dem > 1500)] = np.nan
    k = np.floor(dem / 15.24); m = np.zeros_like(dem, bool)
    m[:, :-1] |= (k[:, :-1] != k[:, 1:]); m[:-1, :] |= (k[:-1, :] != k[1:, :]); m &= ~np.isnan(dem) & (dem > 3)
    ii, jj = np.nonzero(m); lon = tie[3] + (jj + .5) * esc[0]; lat = tie[4] - (ii + .5) * esc[1]
    s = (lon > reg[0]) & (lon < reg[2]) & (lat > reg[1]) & (lat < reg[3])
    return np.c_[lon[s], lat[s]]

def medir(folha_arq, tipo, reg, raio=200, passo=4, dem=None):
    f = Folha(folha_arq)
    P = pontos_ruas(reg) if tipo == 'ruas' else pontos_relevo(reg, dem)
    if len(P) > 40000: P = P[np.random.default_rng(0).choice(len(P), 40000, replace=False)]
    m0 = 0.003
    cs = [f.lonlat_para_px(reg[0] - m0, reg[1] - m0), f.lonlat_para_px(reg[2] + m0, reg[3] + m0)]
    c0, c1 = int(min(c[0] for c in cs)), int(max(c[0] for c in cs)); l0, l1 = int(min(c[1] for c in cs)), int(max(c[1] for c in cs))
    im = np.array(f.im.crop((c0, l0, c1, l1)).convert('RGB')).astype(int); R, G, B = im[..., 0], im[..., 1], im[..., 2]
    if tipo == 'ruas': mask = (R + G + B) > 560   # a rua impressa na folha de 1:24.000 é o claro entre as quadras (o papel), não um traço preto
    else: mask = ((R - G) > 45) & (R > 150) & (B < 170)
    bl = 1.5 if f.sx < 3 else 2.0
    sc = np.array(Image.fromarray((mask * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(bl))).astype(float)
    lat0 = (reg[1] + reg[3]) / 2; lon0 = (reg[0] + reg[2]) / 2
    kx = 111320 * math.cos(math.radians(lat0)); ky = 110950
    XY = np.array([f.lonlat_para_px(lo, la) for lo, la in P]); X0, Y0 = XY[:, 0] - c0, XY[:, 1] - l0
    o = np.array(f.lonlat_para_px(lon0, lat0)); ex = np.array(f.lonlat_para_px(lon0 + 1 / kx, lat0)) - o; ny = np.array(f.lonlat_para_px(lon0, lat0 + 1 / ky)) - o
    def nota(de, dn):
        X = X0 + de * ex[0] + dn * ny[0]; Y = Y0 + de * ex[1] + dn * ny[1]
        ok = (X >= 0) & (Y >= 0) & (X < sc.shape[1] - 1) & (Y < sc.shape[0] - 1)
        return float(sc[Y[ok].astype(int), X[ok].astype(int)].mean())
    g = {(de, dn): nota(de, dn) for de in range(-raio, raio + 1, passo) for dn in range(-raio, raio + 1, passo)}
    (bde, bdn), bv = max(g.items(), key=lambda kv: kv[1])
    vals = np.array(list(g.values())); fundo = float(np.median(vals))
    sec = max(((v, k) for k, v in g.items() if math.hypot(k[0] - bde, k[1] - bdn) > 40), default=(None, None))
    meio = fundo + (bv - fundo) / 2
    perto = [math.hypot(k[0] - bde, k[1] - bdn) for k, v in g.items() if v >= meio and math.hypot(k[0] - bde, k[1] - bdn) <= 40]
    borda = abs(bde) >= raio - passo or abs(bdn) >= raio - passo
    return dict(folha=os.path.basename(folha_arq), tipo=tipo, janela=reg, n_pontos=int(len(P)), de=bde, dn=bdn, desloc_m=round(math.hypot(bde, bdn), 1),
                nota=round(bv, 2), nota_zero=round(nota(0, 0), 2), fundo=round(fundo, 2), segundo_pico=dict(nota=round(sec[0], 2), em=sec[1]) if sec[0] else None,
                meia_largura_m=round(max(perto), 1) if perto else None, na_borda=borda)

if __name__ == '__main__':
    a = sys.argv
    reg = tuple(map(float, a[3].split(',')))
    r = medir(a[1], a[2], reg, int(a[4]) if len(a) > 4 else 200, int(a[5]) if len(a) > 5 else 4, a[6] if len(a) > 6 else None)
    print(json.dumps(r, ensure_ascii=False))
