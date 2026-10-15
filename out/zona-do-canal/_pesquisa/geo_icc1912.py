"""2a rodada (pesquisa-2): as cidades da obra (Gorgona, Empire, Culebra) na 'Property map of the Canal Zone' da Isthmian
Canal Commission (Office of the Chief Engineer + Department of Law; 'Ancon ... January 26, 1912'; LOC 82690127, via
Wikimedia Commons, Public domain; sha1 25133ce1... conferido contra o Commons).
A folha nao tem graticula (e girada ~45 graus). Georreferencia por pontos de controle INDEPENDENTES: o eixo do canal
desenhado na folha (a faixa verde-escura do prisma) contra o eixo do canal do OSM de hoje (eixo-do-canal.json, o
tracado de 1914): pontos lidos sobre a faixa nos recortes com grade (v1912-a, v1912-b), recentrados no miolo da faixa
pelo perfil de escuridao na perpendicular, e um ajuste afim que minimiza a distancia perpendicular ao eixo do OSM
(Gauss-Newton), com o chute inicial por dois pares (Gamboa e Pedro Miguel). Validacao cruzada: deixa-um-de-fora e
pontos que nao entram no ajuste (as eclusas de Pedro Miguel e Miraflores desenhadas e os rotulos de Paraiso e Pedro
Miguel contra o OSM e a folha AMS 1947).
uso: python -I geo_icc1912.py  (grava _tmp/pesquisa-geo/r2/icc1912-ajuste.json e fc-cidades-obra-1912.json)"""
import json, math, sys, cv2, numpy as np
RAIZ = r"C:/projetos/alpha-point/out/zona-do-canal/"
B = RAIZ + "_tmp/pesquisa-geo/"
img = cv2.imread(B + "baixado/property1912/property1912.jpg", cv2.IMREAD_GRAYSCALE)
eixo = np.array(json.load(open(RAIZ + "_media/geo/eixo-do-canal.json"))["features"][0]["geometry"]["coordinates"])
COS = math.cos(math.radians(9.1)); MX, MY = 111320 * COS, 110600
def m(ll): return np.c_[ll[:, 0] * MX, ll[:, 1] * MY]
EIXO_M = m(eixo)
# pontos aproximados sobre a faixa do canal (px da folha cheia), lidos nos recortes v1912-a (origem 9800,4900; 0,3) e
# v1912-b (origem 14600,4500; 0,3): X = x0 + u/0,3, Y = y0 + v/0,3
A = [(0, 532), (100, 545), (200, 565), (300, 580), (460, 598), (600, 622), (760, 600), (850, 560), (880, 500), (920, 420),
     (960, 340), (1000, 290), (1100, 230), (1200, 175), (1300, 108), (1400, 78)]
BB = [(100, 205), (200, 240), (300, 280), (400, 318), (500, 340), (640, 340), (720, 352), (850, 358), (1000, 352),
      (1100, 330), (1200, 325), (1300, 325), (1400, 320)]
PTS = [(9800 + u / 0.3, 4900 + v / 0.3) for u, v in A] + [(14600 + u / 0.3, 4500 + v / 0.3) for u, v in BB]
def refinar(pts, R=110, L=60):
    """recentra cada ponto no miolo da faixa: perfil de escuridao (255 - cinza) na perpendicular, alisado na largura da
    faixa (~55 px), maximo dentro de +-R px"""
    P = np.array(pts, float); out = []
    for i, p in enumerate(P):
        a, b = P[max(0, i - 1)], P[min(len(P) - 1, i + 1)]; d = (b - a) / np.linalg.norm(b - a); n = np.array([-d[1], d[0]])
        prof = []
        for s in range(-R, R + 1):
            q = p + n * s; acc = []
            for t in range(-L // 2, L // 2 + 1, 6):
                r = q + d * t; x, y = int(round(r[0])), int(round(r[1]))
                acc.append(255 - int(img[y, x]))
            prof.append(np.mean(acc))
        prof = np.convolve(np.array(prof), np.ones(55) / 55, mode="same")
        s = int(np.argmax(prof)) - R; out.append((p + n * s).tolist())
    return out
REF = refinar(PTS)
def dpol(q, P=EIXO_M):
    a, b = P[:-1], P[1:]; v = b - a; t = np.clip(((q - a) * v).sum(1) / (v * v).sum(1), 0, 1)
    return np.min(np.hypot(*(q - a - t[:, None] * v).T))
def aplicar(C, xy): xy = np.atleast_2d(xy); return np.c_[xy, np.ones(len(xy))] @ C   # -> metros (x=lon*MX, y=lat*MY)
def residuos(C, pts): return np.array([dpol(q) for q in aplicar(C, pts)])
# chute inicial: similaridade com a escala da folha (1:40.000; os marcos K48 e K58 da faixa ficam a ~2.660 px = 10 km,
# ~3,76 m/px), a rotacao da seta do norte desenhada (~38,7 graus) e a translacao que leva a faixa junto ao rotulo PEDRO
# MIGUEL as eclusas de Pedro Miguel (OSM). Depois, ajuste de SIMILARIDADE (escala, rotacao, translacao; a folha e plana)
# pela distancia perpendicular de cada ponto da faixa ao eixo do OSM.
def C_de(par):
    s_, th, tx, ty = par; R = s_ * np.array([[math.cos(th), -math.sin(th)], [math.sin(th), math.cos(th)]]) @ np.diag([1, -1])
    return np.vstack([R.T, [tx, ty]])
P2, Q2 = np.array(REF[-5]), np.array([-79.6123, 9.0169]) * [MX, MY]
th0 = math.radians(90 - math.degrees(math.atan2(75, -60)))
C_tmp = C_de([3.76, th0, 0, 0]); t0 = Q2 - aplicar(C_tmp, P2)[0]
par0 = np.array([3.76, th0, t0[0], t0[1]])
def ajustar(pts, par, n_it=100):
    x = np.array(par, float)
    for _ in range(n_it):
        r0 = residuos(C_de(x), pts); J = np.zeros((len(r0), 4)); h = [1e-4, 1e-5, 1.0, 1.0]
        for j in range(4):
            dx = np.zeros(4); dx[j] = h[j]; J[:, j] = (residuos(C_de(x + dx), pts) - r0) / h[j]
        dxs = np.linalg.lstsq(J, -r0, rcond=None)[0]; x = x + dxs
        if abs(dxs[0]) < 1e-6 and abs(dxs[1]) < 1e-7 and np.hypot(*dxs[2:]) < 1e-2: break
    return x
par = ajustar(REF, par0)
# robusto: os pontos com residuo > 300 m no primeiro ajuste saem (leitura duvidosa da faixa: no lago Gatun a faixa
# desenhada e o eixo do OSM de hoje divergem, e um ponto em 14097,5185 caiu na linha do trem). Ficam no relato.
r1 = residuos(C_de(par), REF); FORA = [i for i, v in enumerate(r1) if v > 300]
print("fora do ajuste (residuo > 300 m no 1o ajuste):", FORA, [round(float(r1[i])) for i in FORA])
REF_TODOS = REF; REF = [p for i, p in enumerate(REF) if i not in FORA]
par = ajustar(REF, par); C = C_de(par)
print("chute: residuo mediano %.0f m; ajuste: escala %.3f m/px, rotacao %.2f graus" % (np.median(residuos(C_de(par0), REF)), par[0], math.degrees(par[1])))
r = residuos(C, REF)
print("pontos da faixa:", len(REF), "| residuo perpendicular ao eixo OSM: mediana %.0f m, p90 %.0f m, max %.0f m" % (np.median(r), np.percentile(r, 90), r.max()))
loo = []
for i in range(len(REF)):
    pi = ajustar([p for k, p in enumerate(REF) if k != i], par)
    loo.append(float(residuos(C_de(pi), [REF[i]])[0]))
print("deixa-um-de-fora (perpendicular): mediana %.0f m, max %.0f m" % (np.median(loo), max(loo)))
def ll(xy): q = aplicar(C, xy)[0]; return [round(q[0] / MX, 6), round(q[1] / MY, 6)]
json.dump({"fora": FORA, "ref_todos_px": REF_TODOS, "par": par.tolist(), "C": C.tolist(), "ref_px": REF, "residuo_m": r.round(1).tolist(), "loo_m": [round(v, 1) for v in loo], "MX": MX, "MY": MY},
          open(B + "r2/icc1912-ajuste.json", "w"), indent=1)
if len(sys.argv) > 1 and sys.argv[1] == "--so-ajuste":
    sys.exit(0)
# validacao: pontos fora do ajuste (px lidos nos recortes) contra referencias independentes
VAL = json.load(open(B + "r2/icc1912-validacao.json")) if __import__("os").path.exists(B + "r2/icc1912-validacao.json") else []
for v in VAL:
    p = ll(v["px"]); d = math.hypot((p[0] - v["ref"][0]) * MX, (p[1] - v["ref"][1]) * MY)
    print(f"  validacao {v['nome']:40s} {d:6.0f} m  ({v['ref_fonte']})")
# ---- as cidades da obra (rotulos lidos no recorte v1912-conferencia: origem 13400,4850; escala 0,37) ----
CID = [("gorgona-1912", "Gorgona", (13968, 5909), "centro do rotulo GORGONA (a cidade ficou sob o lago Gatun depois de 1913)"),
       ("empire-1912", "Empire", (16211, 5855), "centro do rotulo EMPIRE, na faixa amarela do sitio urbano Empire-Culebra"),
       ("culebra-1912", "Culebra", (16657, 5855), "centro do rotulo CULEBRA, na mesma faixa")]
feats = []
for s, n, px, nota in CID:
    p = ll(px); feats.append({"type": "Feature", "properties": {"name": n, "name_pt": n, "rotulo": n, "slug": s, "px_folha": list(px), "nota": nota,
        "data_do_tracado": "1911-1912 (folha datada 'Ancon ... January 26, 1912')", "fonte_folha": "Isthmian Canal Commission, Property map of the Canal Zone (LOC 82690127)",
        "incerteza": "+-700 m: o ajuste ao eixo do canal fica em 38 m (mediana), mas o rotulo nao e o centro da cidade; nos rotulos/manchas de Paraiso e Pedro Miguel, 430-710 m contra a folha AMS 1947"},
        "geometry": {"type": "Point", "coordinates": p}})
    print(f"  {n:8s} {p}  a {dpol(np.array([p[0]*MX, p[1]*MY])):.0f} m do eixo do canal (OSM)")
json.dump({"type": "FeatureCollection", "features": feats}, open(B + "r2/fc-cidades-obra-1912.json", "w"))
