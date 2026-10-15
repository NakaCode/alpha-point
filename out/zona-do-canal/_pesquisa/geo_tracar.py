"""Traca uma linha preta (a divisa '— · —' da folha AMS 1947) num corredor em volta de pontos de passagem lidos no olho.
Nao desenha: em cada estacao (a cada 4 px) procura, na perpendicular (+-R px), o miolo da tinta preta; guarda so as
estacoes com tinta; filtra pela mediana movel (descarta o que foge > 4 px: texto, estrada, rio cruzando); devolve os
pontos achados (vertices reais da tinta) e as medidas.
uso como modulo: tracar(img, waypoints, R=45) -> dict"""
import numpy as np
def tinta(img):
    b, g, r = [img[..., i].astype(np.int16) for i in range(3)]
    mx = np.maximum(np.maximum(r, g), b); mn = np.minimum(np.minimum(r, g), b)
    return (mx < 95) & ((mx - mn) < 40)          # preto: escuro e sem cor (o azul dos rios e o marrom do relevo ficam fora)
def tracar(img, wps, R=45, passo=4.0, larg_max=16):
    T = None
    H, W = img.shape[:2]
    achados = []; total = 0
    for (x0, y0), (x1, y1) in zip(wps, wps[1:]):
        L = np.hypot(x1-x0, y1-y0); n = max(int(L/passo), 1)
        ux, uy = (x1-x0)/L, (y1-y0)/L; px, py = -uy, ux
        for k in range(n):
            t = k*passo; cx, cy = x0+ux*t, y0+uy*t; total += 1
            ss = np.arange(-R, R+1)
            xs = np.clip(np.round(cx+px*ss).astype(int), 0, W-1); ys = np.clip(np.round(cy+py*ss).astype(int), 0, H-1)
            v = img[ys, xs]
            mx = v.max(axis=1).astype(int); mn = v.min(axis=1).astype(int)
            pr = (mx < 95) & ((mx-mn) < 40)
            if not pr.any(): continue
            # corridas de tinta; fica a mais larga com largura plausivel de traco (3..larg_max px)
            runs = []; i = 0
            while i < len(pr):
                if pr[i]:
                    j = i
                    while j+1 < len(pr) and pr[j+1]: j += 1
                    runs.append((i, j)); i = j+1
                else: i += 1
            runs = [(i, j) for i, j in runs if 2 <= j-i+1 <= larg_max]
            if not runs: continue
            for i, j in runs:
                s = (ss[i]+ss[j])/2
                achados.append((total, cx+px*s, cy+py*s, s))
    if not achados: return {"pontos": [], "estacoes": total, "com_tinta": 0}
    A = np.array(achados)
    # por estacao pode haver mais de uma corrida; escolhe a que segue a mediana movel do deslocamento s
    ok = []
    est = A[:, 0]; s = A[:, 3]
    for idx in range(len(A)):
        jan = (np.abs(est-est[idx]) <= 25)
        med = np.median(s[jan])
        if abs(s[idx]-med) <= 4: ok.append((idx, med))
    B = [(A[i,0], A[i,1], A[i,2], A[i,3]-m) for i, m in ok]
    # uma por estacao (a mais perto da mediana)
    final = {}
    for e, x, y, sv in B:
        if e not in final or abs(sv) < abs(final[e][2]): final[e] = (x, y, sv)
    pts = [(final[e][0], final[e][1]) for e in sorted(final)]
    return {"pontos": pts, "estacoes": total, "com_tinta": len(final), "fracao": len(final)/total}
