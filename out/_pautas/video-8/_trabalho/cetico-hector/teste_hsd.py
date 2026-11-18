# Teste do leitor: baixa 1 segmento B13 (15/11/2024 05:30 UTC, 15:00 em Darwin), imprime cabecalho e um mapa ASCII das Tiwi.
import sys, os, time, urllib.request
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import numpy as np, hsd
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
destino = sys.argv[1]
url = "https://noaa-himawari9.s3.amazonaws.com/AHI-L1b-FLDK/2024/11/15/0530/HS_H09_20241115_0530_B13_FLDK_R20_S0710.DAT.bz2"
arq = os.path.join(destino, "teste_S0710.DAT.bz2")
t0 = time.time()
if not os.path.exists(arq):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    open(arq, "wb").write(urllib.request.urlopen(req, timeout=60).read())
print("download s:", round(time.time() - t0, 2), os.path.getsize(arq))
info, cont = hsd.ler(arq)
print({k: info[k] for k in ["banda", "lambda_um", "ncol", "nlin", "seg", "nseg", "lin1", "sub_lon", "cfac", "lfac", "coff", "loff", "rs", "req", "rpol"]})
T = hsd.tb(info, cont)
for lat, lon, nome in [(-11.6, 130.8, "Tiwi centro"), (-12.46, 130.84, "Darwin"), (-11.2, 129.95, "NO Tiwi"), (-11.95, 131.55, "SE Tiwi")]:
    l, c = hsd.latlon_para_lc(info, lat, lon)
    print(nome, round(float(l), 1), round(float(c), 1), "linha no seg:", round(float(l) - info["lin1"], 1))
# mapa ASCII: lat -10.9..-12.7, lon 129.6..131.9, passo 0.04 lat e 0.03 lon
lats = np.arange(-10.9, -12.75, -0.05); lons = np.arange(129.6, 131.95, 0.03)
for la in lats:
    linha = ""
    for lo in lons:
        l, c = hsd.latlon_para_lc(info, la, lo)
        r, cc = int(round(float(l))) - info["lin1"], int(round(float(c))) - 1
        v = T[r, cc]
        linha += "#" if v < 220 else ("+" if v < 260 else ("o" if v < 295 else ("." if v < 302 else " ")))
    print(f"{la:6.2f} {linha}")
print("Tmin/Tmax caixa:", np.nanmin(T), np.nanmax(T))
