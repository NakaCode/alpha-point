"""As peças comuns da n1 e da n2 (reembalagem do vídeo 2, `zona-do-canal`, 18/11/2026): o quadro, a ponta da seta presa ao ponto, o ponto com o
anel colorido (n2) e as medidas das peças. Não faz pedido de rede.
"""
import math, os
import numpy as np
import cv2
from PIL import Image, ImageDraw
import mapa as M
import zona as Z


def _quadro():
    """o quadro da B3 (zona.quadro_b3) alargado MINI_FATOR vezes em volta do meio da altura, com o centro deslocado MINI_DLON graus de longitude
    e MINI_DLAT de latitude.

    As rodadas (em _bases/_tmp/): e1, o quadro da B3 sem mudança (fator 1,0; 15,47 px/km): a caixa cabia, mas a 24 px do Madden na n2 e a 45 px
    na n1, e o Pacífico era uma faixa; e2, fator 1,12 e o centro 0,03° a leste (de 80,53 a 78,84 O e de 8,78 a 9,72 N; 13,81 px/km): a caixa
    fica a 41 e 62 px da Zona, o Pacífico cresce embaixo à direita e o Caribe continua em cima à esquerda. Fica o e2. Nele, o vale do Chagres
    que liga o Madden fica com 1 a 2 px, e zona.mascara_zona() o alarga 1 px (largura_minima_do_vale_px)"""
    s, n, c = Z.quadro_b3()
    f = M.env("MINI_FATOR", 1.12)
    lat_c = (s + n) / 2 + M.env("MINI_DLAT", 0.0)
    meio = (n - s) / 2 * f
    return (lat_c - meio, lat_c + meio, c + M.env("MINI_DLON", 0.03))


QUADRO_N = _quadro()


def ponta_no_ponto(de, alvo, dist):
    """a ponta da seta: no segmento de `de` até `alvo`, a `dist` px do alvo (a seta termina encostada no ponto, sem cobri-lo)"""
    dx, dy = alvo[0] - de[0], alvo[1] - de[1]
    n = math.hypot(dx, dy)
    return (alvo[0] - dx / n * dist, alvo[1] - dy / n * dist)


def ponto_anel(img, x, y, r_miolo, anel, cor, borda=5):
    """o ponto da n2: o miolo branco, o anel na cor da palavra (amarelo em Balboa, prata em Silver City), o contorno escuro e a sombra (os do
    ponto() de mapa.py)"""
    K = M.K
    r = r_miolo + anel
    m_t = Image.new("L", (M.W * K, M.H * K), 0)
    ImageDraw.Draw(m_t).ellipse([(x - r) * K, (y - r) * K, (x + r) * K, (y + r) * K], fill=255)
    m_b = Image.new("L", (M.W * K, M.H * K), 0)
    ImageDraw.Draw(m_b).ellipse([(x - r_miolo) * K, (y - r_miolo) * K, (x + r_miolo) * K, (y + r_miolo) * K], fill=255)
    a = np.asarray(m_t.resize((M.W, M.H), Image.LANCZOS)).astype(np.float32) / 255
    b = np.asarray(m_b.resize((M.W, M.H), Image.LANCZOS)).astype(np.float32) / 255
    contorno = cv2.GaussianBlur(cv2.dilate(a, np.ones((2 * borda + 1, 2 * borda + 1), np.uint8)), (0, 0), 1.0)
    somb = np.roll(np.roll(cv2.GaussianBlur(contorno, (0, 0), 6), 6, 0), 4, 1)
    img = M.compor(img, M.PRETO, np.clip(somb * 0.6, 0, 0.6))
    img = M.compor(img, M.PRETO, contorno * 0.9)
    img = M.compor(img, cor, a)
    img = M.compor(img, M.BRANCO, b)
    return img, np.maximum(a, contorno)


def medir_pecas(q, caixa, caixas_l, a_caixa, zona, terra, curvas, a_seta, comps, alvos, r_alvo, a_rot, caixas_rot):
    """as medidas que o cético pede conferir (§4): a maiúscula da caixa no 168, a caixa sem cobrir a Zona, cada seta com pelo menos 400 px e
    terminando no ponto, o canto da duração (em mapa.salvar)"""
    cap = {k: v for k, v in caixas_l.items() if k != "_barra"}
    sel_c = a_caixa > 0.15
    dist_z = cv2.distanceTransform((zona < 0.5).astype(np.uint8), cv2.DIST_L2, 5)
    out = {"caixa": {"caixa_palco": caixa, "linhas": caixas_l,
                     "maiusculas_no_168_px": {k: round((v[3] - v[1]) * 168 / M.W, 1) for k, v in cap.items()},
                     "fracao_da_largura": [round(caixa[0] / M.W, 3), round(caixa[2] / M.W, 3)],
                     "sobre_a_terra": round(float((sel_c & (terra > 0.5)).sum() / sel_c.sum()), 4),
                     "px_da_zona_sob_a_caixa": int((sel_c & (zona > 0.5)).sum()),
                     "distancia_a_zona_px": round(float(dist_z[sel_c].min()), 1)}}
    setas = []
    for c, L, (ax, ay) in zip(curvas, comps, alvos):
        p = c[-1]
        setas.append({"comprimento_px": L, "inicio_palco": [round(v) for v in c[0]], "ponta_palco": [round(v) for v in p],
                      "da_ponta_ao_centro_do_ponto_px": round(math.dist(p, (ax, ay)), 1), "raio_do_ponto_px": r_alvo,
                      "fracao_sobre_o_vermelho": None})
    sel_s = a_seta > 0.15
    out["setas"] = setas
    out["setas_fracao_sobre_o_vermelho"] = round(float((sel_s & (zona > 0.5)).sum() / max(1, sel_s.sum())), 4)
    out["setas_fracao_sobre_o_mar"] = round(float((sel_s & (terra < 0.5)).sum() / max(1, sel_s.sum())), 4)
    out["rotulos"] = caixas_rot
    return out
