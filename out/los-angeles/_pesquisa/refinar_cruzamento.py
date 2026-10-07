# -*- coding: utf-8 -*-
"""Refina o cruzamento de uma linha vertical e uma horizontal numa folha escaneada: procura, perto do ponto
aproximado, a coluna e a linha mais escuras (média de tinta numa faixa que evita o próprio cruzamento).
Uso: python refinar_cruzamento.py <imagem> <cx> <cy> [busca=15]  -> imprime x y e o contraste de cada linha."""
import sys
import numpy as np
from PIL import Image
Image.MAX_IMAGE_PIXELS = None

def refinar(arr, cx, cy, busca=15, braco=(12, 45)):
    def perfil(eixo):
        vals = []
        for d in range(-busca, busca + 1):
            if eixo == 'x':
                x = cx + d
                ys = list(range(cy - braco[1], cy - braco[0])) + list(range(cy + braco[0], cy + braco[1]))
                v = arr[ys, x].mean()
            else:
                y = cy + d
                xs = list(range(cx - braco[1], cx - braco[0])) + list(range(cx + braco[0], cx + braco[1]))
                v = arr[y, xs].mean()
            vals.append(v)
        vals = np.array(vals)
        i = int(np.argmin(vals))
        # centro ponderado da mancha escura em volta do mínimo (sub-pixel)
        lo, hi = max(i - 2, 0), min(i + 3, len(vals))
        w = (vals.max() - vals[lo:hi])
        pos = (np.arange(lo, hi) * w).sum() / w.sum() if w.sum() > 0 else i
        return pos - busca, float(np.median(vals) - vals[i])
    dx, cxr = perfil('x'); dy, cyr = perfil('y')
    return cx + dx, cy + dy, cxr, cyr

if __name__ == '__main__':
    im = Image.open(sys.argv[1]).convert('L')
    arr = np.asarray(im, dtype=float)
    b = int(sys.argv[4]) if len(sys.argv) > 4 else 15
    x, y, c1, c2 = refinar(arr, int(sys.argv[2]), int(sys.argv[3]), b)
    print('%.1f %.1f contraste_x=%.0f contraste_y=%.0f' % (x, y, c1, c2))
