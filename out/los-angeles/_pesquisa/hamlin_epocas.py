# -*- coding: utf-8 -*-
"""Os contornos de época a partir das peças lidas na folha de Hamlin (1916).
A união das peças é feita no espaço da imagem (raster na resolução da própria folha, fechamento morfológico de 2 px
para não deixar fresta entre duas peças que dividem a mesma divisa), e o contorno da união sai pelo cv2.findContours,
simplificado a 0,75 px (cerca de 5 m). Depois, pixel -> lon/lat pelo ajuste de ordem 2 (hamlin_conferir.transformador).
Grava os GeoJSON brutos em out/los-angeles/_tmp/geo-hist/ e imprime as medidas."""
import json, os, sys, importlib.util
import numpy as np
import cv2
from PIL import Image, ImageDraw
import hamlin_conferir as hc
AQUI = os.path.dirname(os.path.abspath(__file__))
TMP = os.path.join(AQUI, '..', '_tmp', 'geo-hist'); os.makedirs(TMP, exist_ok=True)
W, H = 7599, 11015

EPOCAS = {
    '1850': ['p1850-cidade-original'],
    '1899': ['p1850-cidade-original', 'p1869-extensao-sul', 'p1895-highland-park', 'p1896-adicao-sul', 'p1896-adicao-oeste', 'p1899-garvanza', 'p1899-universidade', 'p1896-ligacao'],
    '1906': ['p1850-cidade-original', 'p1869-extensao-sul', 'p1895-highland-park', 'p1896-adicao-sul', 'p1896-adicao-oeste', 'p1899-garvanza', 'p1899-universidade', 'p1896-ligacao', 'p1906-shoestring'],
    '1909-sem-san-pedro': ['p1850-cidade-original', 'p1869-extensao-sul', 'p1895-highland-park', 'p1896-adicao-sul', 'p1896-adicao-oeste', 'p1899-garvanza', 'p1899-universidade', 'p1896-ligacao', 'p1906-shoestring', 'p1909-wilmington'],
}


def uniao(ref, ids):
    m = Image.new('L', (W, H), 0); d = ImageDraw.Draw(m)
    for i in ids:
        d.polygon([(v[0], v[1]) for v in ref[i]], fill=255)
    a = np.asarray(m).copy()
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    a = cv2.morphologyEx(a, cv2.MORPH_CLOSE, k)
    cs, hier = cv2.findContours(a, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
    out = []
    for c, h in zip(cs, hier[0]):
        if cv2.contourArea(c) < 50: continue
        c = cv2.approxPolyDP(c, 0.75, True)[:, 0, :].astype(float) + 0.5
        out.append((c, h[3] >= 0))
    return out


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    ref = json.load(open(os.path.join(AQUI, '..', '_tmp', 'hamlin-vertices-refinados.json'), encoding='utf-8'))
    T = hc.transformador()
    res = {}
    for ep, ids in EPOCAS.items():
        partes = uniao(ref, ids)
        aneis = []
        for c, buraco in partes:
            ll = T(c)
            ll = np.vstack([ll, ll[:1]])
            if buraco: print('  aviso: buraco na união de', ep)
            aneis.append((ll, buraco))
        ext = [a for a, b in aneis if not b]
        area = sum(hc.area_mi2(a) for a in ext) - sum(hc.area_mi2(a) for a, b in aneis if b)
        res[ep] = {'partes': len(ext), 'buracos': sum(1 for _, b in aneis if b), 'area_mi2': round(area, 2), 'vertices': int(sum(len(a) for a, _ in aneis))}
        geom = {'type': 'MultiPolygon', 'coordinates': [[[[round(x, 6), round(y, 6)] for x, y in a]] for a in ext]}
        json.dump({'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {'epoca': ep}, 'geometry': geom}]},
                  open(os.path.join(TMP, 'la-%s-hamlin.json' % ep), 'w'))
        print(ep, res[ep])
    # as peças sozinhas também (Wilmington, e a faixa)
    for pid in ['p1906-shoestring', 'p1909-wilmington']:
        ll = T([v[:2] for v in ref[pid]]); ll = np.vstack([ll, ll[:1]])
        json.dump({'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {'peca': pid}, 'geometry': {'type': 'Polygon', 'coordinates': [[[round(x, 6), round(y, 6)] for x, y in ll]]}}]},
                  open(os.path.join(TMP, '%s-hamlin.json' % pid), 'w'))
