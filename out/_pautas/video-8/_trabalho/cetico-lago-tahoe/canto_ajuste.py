# Ajusta a divisão do lago Tahoe ao canto do decreto de 1982 (o TIGER desenha o canto em 39°N x 120°W).
# Entradas: o canto do decreto convertido a NAD83(2011) pela API NCAT do NGS (17/11/2026):
#   https://geodesy.noaa.gov/api/ncat/llh?lat=N390012.55&lon=W1200019.62&inDatum=nad27&outDatum=nad83(2011)
#   -> 39.0033979261, -120.0064763677
# e, do lago_por_estado.py (TIGER 2024): o vértice de dobra 38.999574, -120.001014; as travessias da margem
#   norte (39.22261, -120.005634) e sudeste (38.98286, -119.976692); CA 344,8 km², NV 139,4 km².
# Uso: python -X utf8 -B canto_ajuste.py
import math
LAT0 = 39.0
KY = 111030.0
KX = 111320.0 * math.cos(math.radians(LAT0))

def xy(lat, lon):
    return ((lon + 120.0) * KX, (lat - 39.0) * KY)

legal = xy(39.0033979261, -120.0064763677)
tiger = xy(38.999574, -120.001014)
norte = xy(39.22261, -120.005634)
sudeste = xy(38.98286, -119.976692)

def area(*p):
    s = 0.0
    for i in range(len(p)):
        x1, y1 = p[i]; x2, y2 = p[(i + 1) % len(p)]
        s += x1 * y2 - x2 * y1
    return s / 2

print(f"Canto do decreto (NAD83): {legal[1]:+.0f} m norte, {legal[0]:+.0f} m leste de 39°N x 120°W; "
      f"{math.hypot(*legal):.0f} m = {math.hypot(*legal)/1609.344:.2f} mi = {math.hypot(*legal)/0.3048:,.0f} pés")
print(f"Canto do TIGER (NAD83): {math.hypot(*tiger):.0f} m de 39°N x 120°W; distância TIGER→decreto "
      f"{math.hypot(legal[0]-tiger[0], legal[1]-tiger[1]):.0f} m")
# A área entre as duas versões da linha: o polígono norte -> canto TIGER -> sudeste -> canto legal
a = abs(area(norte, tiger, sudeste, legal))
print(f"Área entre a linha do TIGER e a do decreto: {a/1e6:.2f} km² (passa de CA para NV se o canto vai a noroeste)")
ca, nv = 344.8 - a / 1e6, 139.4 + a / 1e6
print(f"Divisão ajustada ao decreto: CA {ca:.1f} km² ({100*ca/(ca+nv):.1f} %), NV {nv:.1f} km² ({100*nv/(ca+nv):.1f} %)")
# A linha de Von Schmidt em relação ao meridiano 120 W hoje (NAD83), no canto
print(f"No canto, a linha que devia ser o meridiano 120 fica {-legal[0]:.0f} m ({-legal[0]/0.3048:,.0f} pés) a oeste dele (NAD83)")
