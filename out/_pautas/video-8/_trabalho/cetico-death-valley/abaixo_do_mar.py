# Cético death-valley (17/11/2026): quanto do Death Valley fica abaixo do nível do mar, e onde está o ponto mais baixo,
# no USGS 3DEP (domínio público), pelo exportImage do ImageServer 3DEPElevation (um pedido, raster de ~100 m).
# Uso: python -X utf8 -B abaixo_do_mar.py   (cwd = esta pasta). Grava dv-3dep-100m.tif (~2 MB) e imprime o resumo.
import json, math, urllib.parse, urllib.request
import numpy as np
from PIL import Image

UA = "AlphaPoint-pauta/1.0"
URL = "https://elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer/exportImage"
FT = 3.280839895
# caixa: do sul de Saratoga Spring ao norte de Stovepipe Wells; do Panamint ao Amargosa (graus, WGS84)
W, S, E, N = -117.20, 35.60, -116.30, 36.80
NX, NY = 810, 1335   # ~100 m em cada direção nessa latitude

q = {"bbox": f"{W},{S},{E},{N}", "bboxSR": 4326, "imageSR": 4326, "size": f"{NX},{NY}", "format": "tiff",
     "pixelType": "F32", "noDataInterpretation": "esriNoDataMatchAny", "interpolation": "RSP_BilinearInterpolation", "f": "image"}
url = URL + "?" + urllib.parse.urlencode(q)
with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=180) as r:
    dados = r.read()
open("dv-3dep-100m.tif", "wb").write(dados)
im = Image.open("dv-3dep-100m.tif")
a = np.array(im, dtype=np.float64)
print("raster", a.shape, "min/max m:", np.nanmin(a), np.nanmax(a))
a[a < -1000] = np.nan
ny, nx = a.shape
lats = N - (np.arange(ny) + 0.5) * (N - S) / ny
dlat_m = (N - S) / ny * 111_320.0
dlon_m = (E - W) / nx * 111_320.0 * np.cos(np.radians(lats))
cel = (dlat_m * dlon_m)[:, None] * np.ones((1, nx))
abaixo = a < 0
area_km2 = np.nansum(np.where(abaixo, cel, 0)) / 1e6
vol_km3 = np.nansum(np.where(abaixo, -a * cel, 0)) / 1e9
i, j = np.unravel_index(np.nanargmin(a), a.shape)
lon_min = W + (j + 0.5) * (E - W) / nx
print(f"área abaixo do nível do mar na caixa: {area_km2:,.0f} km² = {area_km2/2.589988:,.0f} mi²")
print(f"volume entre o chão e o nível do mar: {vol_km3:.1f} km³ = {vol_km3*810713.2/1e6:,.2f} milhões de acre-pés")
print(f"ponto mais baixo do raster (~100 m, bilinear): {a[i,j]:.1f} m = {a[i,j]*FT:.0f} ft em {lats[i]:.4f}, {lon_min:.4f}")
# o recorte abaixo do mar toca a borda da caixa? (se tocar, a caixa é pequena)
print("toca a borda N/S/W/E:", bool(abaixo[0].any()), bool(abaixo[-1].any()), bool(abaixo[:, 0].any()), bool(abaixo[:, -1].any()))
# comprimento norte-sul da parte abaixo do mar
linhas = np.where(abaixo.any(axis=1))[0]
print(f"de {lats[linhas.max()]:.3f} a {lats[linhas.min()]:.3f} N: {(lats[linhas.min()]-lats[linhas.max()])*69.05:.0f} mi norte-sul")
