# -*- coding: utf-8 -*-
"""Leitura das divisas na folha de Hamlin (1916), lado a lado (pesquisa-geo, vídeo 2 los-angeles, 07/10/2026).

Não desenha nada: a divisa é a linha escura impressa na folha. Para cada polígono, eu dou os vértices APROXIMADOS
(lidos a olho em recortes com grade, hamlin_vertices.json). Este script, para cada lado do polígono:
  1. toma amostras a cada ~6 px ao longo do lado (longe das pontas);
  2. em cada amostra, procura na perpendicular (+-busca px) a faixa mais escura da imagem (média de 7 px ao longo do
     lado), que é o traço impresso da divisa;
  3. ajusta uma reta aos pontos achados (mínimos quadrados, com dois cortes de valores aberrantes a 2,5 sigma);
e o vértice final é o cruzamento das retas de dois lados vizinhos. Lado marcado "livre" (curva, rio, costa) fica com
os pontos achados, sem reta. Lado que não acha traço (resíduo alto ou poucos pontos) mantém o vértice lido a olho e é
marcado no relatório.
Saída: os vértices refinados em pixel, com o resíduo de cada lado, e uma imagem de conferência por polígono."""
import json, os, sys, math
import numpy as np
from PIL import Image, ImageDraw
Image.MAX_IMAGE_PIXELS = None
AQUI = os.path.dirname(os.path.abspath(__file__))
IMG = os.path.join(AQUI, '..', '_tmp', 'geo-fontes', 'hamlin1916', 'hamlin-1916-LOC-2006627663.jpg')

_arr = None
def arr():
    global _arr
    if _arr is None:
        im = Image.open(IMG).convert('RGB')
        a = np.asarray(im, dtype=float)
        # "tinta": escuro e azulado (o traço é azul-marinho); o amarelo/rosa/azul-claro das faixas pintadas fica fraco
        _arr = 255 - a.min(axis=2) * 0.5 - a.mean(axis=2) * 0.5
    return _arr


def amostrar_lado(p, q, busca=10, passo=6, margem=14, larg=3):
    A = arr()
    p, q = np.array(p, float), np.array(q, float)
    L = np.linalg.norm(q - p)
    if L < 2 * margem + passo:
        return []
    t = (q - p) / L; n = np.array([-t[1], t[0]])
    pts = []
    for s in np.arange(margem, L - margem, passo):
        c = p + t * s
        perfil = []
        for d in range(-busca, busca + 1):
            v = 0.0
            for k in range(-larg, larg + 1):
                x, y = c + n * d + t * k
                xi, yi = int(round(x)), int(round(y))
                if 0 <= yi < A.shape[0] and 0 <= xi < A.shape[1]:
                    v += A[yi, xi]
            perfil.append(v)
        perfil = np.array(perfil)
        i = int(np.argmax(perfil))
        contraste = perfil[i] - np.median(perfil)
        if contraste < 60 * (2 * larg + 1) / 7:   # sem traço nítido nesta amostra (vão do traço-ponto)
            continue
        lo, hi = max(i - 2, 0), min(i + 3, len(perfil))
        w = perfil[lo:hi] - perfil.min()
        d = (np.arange(lo, hi) * w).sum() / w.sum() - busca
        pts.append(c + n * d)
    return pts


def reta(pts):
    P = np.array(pts)
    for _ in range(3):
        c = P.mean(axis=0)
        u, s, vt = np.linalg.svd(P - c)
        dirv = vt[0]; nrm = np.array([-dirv[1], dirv[0]])
        r = (P - c) @ nrm
        sd = r.std() if len(r) > 2 else 0
        if sd == 0: break
        keep = np.abs(r) <= 2.5 * sd + 0.5
        if keep.all(): break
        P = P[keep]
    c = P.mean(axis=0); u, s, vt = np.linalg.svd(P - c); dirv = vt[0]; nrm = np.array([-dirv[1], dirv[0]])
    r = (P - c) @ nrm
    return c, dirv, float(np.sqrt((r ** 2).mean())), len(P)


def cruzar(l1, l2):
    (c1, d1), (c2, d2) = l1, l2
    M = np.array([d1, -d2]).T
    if abs(np.linalg.det(M)) < 1e-6:
        return None
    s = np.linalg.solve(M, c2 - c1)
    return c1 + d1 * s[0]


def tracar(poli):
    V = [np.array(v[:2], float) for v in poli['vertices']]
    livres = set(poli.get('lados_livres', []))  # índice i = lado V[i] -> V[i+1]
    fixos = set(poli.get('vertices_fixos', []))
    busca = poli.get('busca', 10)
    n = len(V)
    lados = []
    for i in range(n):
        p, q = V[i], V[(i + 1) % n]
        if i in livres:
            lados.append({'i': i, 'tipo': 'livre'}); continue
        pts = amostrar_lado(p, q, busca=int(poli.get('busca_lados', {}).get(str(i), busca)))
        L = np.linalg.norm(q - p)
        if len(pts) >= max(3, 0.25 * L / 6):
            c, d, rms, k = reta(pts)
            ok = rms <= 2.5
            lados.append({'i': i, 'tipo': 'reta', 'c': c, 'd': d, 'rms': rms, 'n': k, 'amostras': len(pts), 'ok': ok, 'L': L})
        else:
            lados.append({'i': i, 'tipo': 'sem_traco', 'amostras': len(pts), 'L': L})
    out = []
    for i in range(n):
        a, b = lados[i - 1], lados[i]  # lados que chegam e saem do vértice i
        v = V[i]; fonte = 'olho'
        if i not in fixos and a['tipo'] == 'reta' and b['tipo'] == 'reta' and a['ok'] and b['ok']:
            x = cruzar((a['c'], a['d']), (b['c'], b['d']))
            if x is not None and np.linalg.norm(x - v) < 25:
                v, fonte = x, 'cruzamento'
            elif x is not None:
                fonte = 'olho (cruzamento a %.0f px)' % np.linalg.norm(x - v)
        elif i not in fixos and (b['tipo'] == 'reta' and b['ok']) != (a['tipo'] == 'reta' and a['ok']):
            l = b if (b['tipo'] == 'reta' and b['ok']) else a
            # projeta o vértice lido a olho na reta achada
            v = l['c'] + l['d'] * ((v - l['c']) @ l['d']); fonte = 'projetado'
        out.append((v, fonte))
    return out, lados


def conferir_imagem(poli, verts, saida, margem=60, escala=1.0):
    im = Image.open(IMG).convert('RGB')
    P = np.array([v for v, _ in verts])
    x0, y0 = P.min(axis=0) - margem; x1, y1 = P.max(axis=0) + margem
    x0, y0 = max(int(x0), 0), max(int(y0), 0)
    r = im.crop((x0, y0, int(x1), int(y1)))
    if escala != 1.0:
        r = r.resize((int(r.size[0] * escala), int(r.size[1] * escala)), Image.LANCZOS)
    d = ImageDraw.Draw(r)
    pts = [((x - x0) * escala, (y - y0) * escala) for x, y in P]
    d.line(pts + [pts[0]], fill=(255, 0, 0), width=1)
    for k, (x, y) in enumerate(pts):
        d.ellipse((x - 2, y - 2, x + 2, y + 2), outline=(255, 0, 0))
        d.text((x + 3, y + 1), str(k), fill=(255, 0, 0))
    r.save(saida)


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8')
    dados = json.load(open(os.path.join(AQUI, 'hamlin_vertices.json'), encoding='utf-8'))
    alvo = sys.argv[1:] or [p['id'] for p in dados['poligonos']]
    res = {}
    for poli in dados['poligonos']:
        if poli['id'] not in alvo: continue
        verts, lados = tracar(poli)
        print('==', poli['id'])
        for l in lados:
            if l['tipo'] == 'reta':
                print('   lado %2d  reta  rms %.2f px  %d/%d amostras  L %.0f px  %s' % (l['i'], l['rms'], l['n'], l['amostras'], l['L'], '' if l['ok'] else 'RUIM'))
            else:
                print('   lado %2d  %s' % (l['i'], l['tipo'] + (' (%d amostras)' % l['amostras'] if 'amostras' in l else '')))
        for k, (v, f) in enumerate(verts):
            print('   v%-2d %8.1f %8.1f  %s' % (k, v[0], v[1], f))
        res[poli['id']] = [[round(float(v[0]), 1), round(float(v[1]), 1), f] for v, f in verts]
        conferir_imagem(poli, verts, os.path.join(AQUI, '..', '_tmp', 'hamlin-zoom', 'conf-%s.png' % poli['id']), escala=poli.get('escala_conf', 0.6))
    arq = os.path.join(AQUI, '..', '_tmp', 'hamlin-vertices-refinados.json')
    ant = json.load(open(arq, encoding='utf-8')) if os.path.exists(arq) else {}
    ant.update(res)
    json.dump(ant, open(arq, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
