"""Georreferencia da folha 'Road Map of Ancon, Balboa and Panama' (Office of the Department Engineer, Panama Canal
Department, out/1936, 1:8.000; NARA 192812325, via Commons) pela graticula de 1' da propria folha (as 4 linhas que ela
desenha: 8 57', 8 58', 79 33', 79 32'). Ajuste afim pelas 4 intersecoes. Linhas refinadas no pixel (miolo da linha branca)."""
import json, numpy as np, cv2
B = r"C:/projetos/alpha-point/out/zona-do-canal/_tmp/pesquisa-geo/"
LINHAS = {  # (rotulo, valor em graus, dois pontos de Hough em pixel da folha cheia)
    "lat_8_57": (8 + 57/60, (242, 866), (3814, 4186)),
    "lat_8_58": (8 + 58/60, (2616, 212), (5780, 3164)),
    "lon_79_33": (-(79 + 33/60), (1810, 3376), (4736, 206)),
    "lon_79_32": (-(79 + 32/60), (3926, 4186), (7038, 814)),
}
def refinar(img, p0, p1, R=6):
    """recentra a reta no miolo da linha branca: em estacoes a cada 40 px, o maximo de brilho na perpendicular"""
    p0, p1 = np.array(p0, float), np.array(p1, float); d = (p1 - p0) / np.linalg.norm(p1 - p0); n = np.array([-d[1], d[0]])
    pts = []
    for t in np.arange(60, np.linalg.norm(p1 - p0) - 60, 40):
        c = p0 + d*t; ss = np.arange(-R, R+1)
        xy = np.round(c[None, :] + ss[:, None]*n[None, :]).astype(int)
        if (xy < 0).any() or (xy[:, 0] >= img.shape[1]).any() or (xy[:, 1] >= img.shape[0]).any(): continue
        v = img[xy[:, 1], xy[:, 0]].astype(float)
        if v.max() - np.median(v) < 25: continue
        w = np.clip(v - np.median(v), 0, None); s = (w*ss).sum()/w.sum()
        pts.append(c + n*s)
    P = np.array(pts)
    for _ in range(4):   # reta por minimos quadrados ortogonais, descartando > 2 px
        m = P.mean(0); u, s_, vt = np.linalg.svd(P - m); dd = vt[0]; nn = np.array([-dd[1], dd[0]])
        r = (P - m) @ nn
        k = np.abs(r) < max(2.0, 2.5*np.median(np.abs(r)))
        if k.all(): break
        P = P[k]
    return m, dd, float(np.sqrt((r[k]**2).mean())), len(P)
def montar():
    img = cv2.imread(B + "baixado/road1936/road1936.jpg", cv2.IMREAD_GRAYSCALE)
    L = {}
    for k, (val, p0, p1) in LINHAS.items():
        m, dd, rms, n = refinar(img, p0, p1); L[k] = (val, m, dd); print(k, "rms %.2f px" % rms, "n", n)
    def inter(a, b):
        _, m1, d1 = a; _, m2, d2 = b
        A = np.c_[d1, -d2]; t = np.linalg.solve(A, m2 - m1); return m1 + d1*t[0]
    gcp = []
    for la in ("lat_8_57", "lat_8_58"):
        for lo in ("lon_79_33", "lon_79_32"):
            p = inter(L[la], L[lo]); gcp.append({"x": float(p[0]), "y": float(p[1]), "lat": L[la][0], "lon": L[lo][0]})
    json.dump(gcp, open(B + "gcp-1936.json", "w"), indent=1)
    return gcp
class Folha1936:
    def __init__(self, gcp=None):
        gcp = gcp or json.load(open(B + "gcp-1936.json"))
        X = np.array([[g["x"], g["y"], 1] for g in gcp]); Y = np.array([[g["lon"], g["lat"]] for g in gcp])
        self.C, res, *_ = np.linalg.lstsq(X, Y, rcond=None)
        r = X @ self.C - Y
        self.residuo_m = float(np.sqrt(((r[:, 0]*110000)**2 + (r[:, 1]*110600)**2).mean()))
        self.Ci = np.linalg.lstsq(np.c_[Y, np.ones(len(Y))], X[:, :2], rcond=None)[0]
    def px2ll(self, x, y): lo, la = np.array([x, y, 1]) @ self.C; return float(lo), float(la)
    def ll2px(self, lon, lat): x, y = np.array([lon, lat, 1]) @ self.Ci; return float(x), float(y)
if __name__ == "__main__":
    g = montar(); F = Folha1936(g)
    print("residuo afim nas 4 intersecoes: %.1f m" % F.residuo_m)
    # escala
    l0, a0 = F.px2ll(3000, 2000); l1, a1 = F.px2ll(3100, 2000)
    print("m por px: %.3f" % (np.hypot((l1-l0)*110000, (a1-a0)*110600)/100))
