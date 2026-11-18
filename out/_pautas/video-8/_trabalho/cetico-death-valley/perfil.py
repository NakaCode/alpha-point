# Cético death-valley (17/11/2026): o perfil de altitude Mount Whitney -> Badwater Basin no USGS 3DEP (domínio público),
# pelo getSamples do ImageServer 3DEPElevation, em lotes, um pedido por vez.
# Uso: python -X utf8 -B perfil.py   (cwd = esta pasta). Grava perfil.tsv e imprime o resumo.
import json, math, time, urllib.parse, urllib.request

UA = "AlphaPoint-pauta/1.0"
URL = "https://elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer/getSamples"
FT = 3.280839895

# Whitney: NGS GT1811 (NAD 83); Badwater Basin: GNIS 255963
A = (36 + 34 / 60 + 42.89133 / 3600, -(118 + 17 / 60 + 31.18182 / 3600))
B = (36.25023418335752, -116.82589684182979)
PASSO_M = 200.0

def gc_interp(a, b, n):
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    d = 2 * math.asin(math.sqrt(math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2))
    out = []
    for i in range(n + 1):
        f = i / n
        A_ = math.sin((1 - f) * d) / math.sin(d); B_ = math.sin(f * d) / math.sin(d)
        x = A_ * math.cos(la1) * math.cos(lo1) + B_ * math.cos(la2) * math.cos(lo2)
        y = A_ * math.cos(la1) * math.sin(lo1) + B_ * math.cos(la2) * math.sin(lo2)
        z = A_ * math.sin(la1) + B_ * math.sin(la2)
        out.append((math.degrees(math.atan2(z, math.sqrt(x * x + y * y))), math.degrees(math.atan2(y, x))))
    return out, d * 6371008.8

def amostras(pts):
    geom = {"points": [[lo, la] for la, lo in pts], "spatialReference": {"wkid": 4326}}
    q = {"geometry": json.dumps(geom), "geometryType": "esriGeometryMultipoint", "returnFirstValueOnly": "true",
         "interpolation": "RSP_BilinearInterpolation", "f": "json"}
    data = urllib.parse.urlencode(q).encode()
    req = urllib.request.Request(URL, data=data, headers={"User-Agent": UA, "Content-Type": "application/x-www-form-urlencoded"})
    with urllib.request.urlopen(req, timeout=120) as r:
        d = json.loads(r.read().decode("utf-8"))
    if "samples" not in d:
        raise RuntimeError(str(d)[:300])
    res = {}
    for s in d["samples"]:
        res[s.get("locationId")] = float(s["value"]) if s.get("value") not in (None, "NoData") else None
    return [res.get(i) for i in range(len(pts))]

if __name__ == "__main__":
    _, dist = gc_interp(A, B, 1)
    n = int(dist // PASSO_M)
    pts, dist = gc_interp(A, B, n)
    vals = []
    for i in range(0, len(pts), 150):
        lote = pts[i:i + 150]
        for tent in range(3):
            try:
                vals += amostras(lote); break
            except Exception as e:
                print("erro lote", i, e); time.sleep(5)
        else:
            vals += [None] * len(lote)
        time.sleep(1)
    passo_mi = dist / n / 1609.344
    with open("perfil.tsv", "w", encoding="utf-8") as f:
        f.write("i\tmilha_desde_whitney\tlat\tlon\talt_m\talt_ft\n")
        for i, ((la, lo), v) in enumerate(zip(pts, vals)):
            f.write(f"{i}\t{i*passo_mi:.3f}\t{la:.5f}\t{lo:.5f}\t{'' if v is None else round(v,1)}\t{'' if v is None else round(v*FT)}\n")
    ok = [(i, v) for i, v in enumerate(vals) if v is not None]
    print(f"distância {dist/1609.344:.2f} mi ({dist/1000:.1f} km), {n+1} pontos a cada {PASSO_M:.0f} m; sem valor: {len(vals)-len(ok)}")
    print(f"início (Whitney) {vals[0]*FT:.0f} ft; fim (Badwater Basin, ponto GNIS) {vals[-1]*FT:.0f} ft")
    # subidas e descidas acumuladas (de Badwater para Whitney = inverso)
    sobe = sum(max(0, ok[k][1] - ok[k - 1][1]) for k in range(1, len(ok)))
    desce = sum(max(0, ok[k - 1][1] - ok[k][1]) for k in range(1, len(ok)))
    print(f"de Whitney a Badwater: desce {desce*FT:,.0f} ft e sobe {sobe*FT:,.0f} ft no total (passo de {PASSO_M:.0f} m)")
    print(f"de Badwater a Whitney: sobe {desce*FT:,.0f} ft no total")
    # vales e cristas: mínimos e máximos por trecho (janelas pelas milhas)
    def ext(m0, m1, fn):
        seg = [(i, v) for i, v in ok if m0 <= i * passo_mi <= m1]
        i, v = fn(seg, key=lambda t: t[1])
        return i * passo_mi, v * FT, pts[i]
    abaixo = sum(1 for i, v in ok if v < 0) * PASSO_M / 1609.344
    print(f"trecho abaixo do nível do mar na linha: {abaixo:.1f} mi")
    print("extremos por janela (milha desde Whitney, ft, lat/lon):")
    for nome, m0, m1, fn in [("Owens Valley (mín.)", 5, 25, min), ("Inyo Mountains (máx.)", 15, 40, max),
                              ("Saline/Panamint Valley (mín.)", 30, 60, min), ("Panamint Range (máx.)", 50, 75, max),
                              ("Death Valley (mín.)", 70, 86, min)]:
        m, ft, (la, lo) = ext(m0, m1, fn)
        print(f"  {nome}: milha {m:.1f}, {ft:,.0f} ft, {la:.4f}, {lo:.4f}")
