# Projeção lon/lat -> pixel do quadro 3840x2160 de uma cena de mapa (MapLibre, tiles de 512 px, pitch 0), com a câmera que o
# agua_camera_em.mjs devolve. Sem rede, sem tile.
import json, math, subprocess
W, H = 3840, 2160
def cameras(pares):
    a = ["node", "out/los-angeles/_pesquisa/agua_camera_em.mjs"]
    for c, t in pares: a += [c, str(t)]
    return json.loads(subprocess.check_output(a, text=True))
class Proj:
    def __init__(s, cam):
        s.z = cam["zoom"]; s.ws = 512 * 2 ** s.z; s.b = math.radians(cam["bearing"])
        s.cx, s.cy = s.mundo(*cam["center"]); s.cam = cam
        lat = cam["center"][1]
        s.m_px = 40075016.686 * math.cos(math.radians(lat)) / s.ws   # metros por pixel do quadro
    def mundo(s, lon, lat):
        x = (lon + 180) / 360 * s.ws
        si = math.sin(math.radians(lat)); y = (0.5 - math.log((1 + si) / (1 - si)) / (4 * math.pi)) * s.ws
        return x, y
    def px(s, lon, lat):
        x, y = s.mundo(lon, lat); dX, dY = x - s.cx, y - s.cy
        c, n = math.cos(s.b), math.sin(s.b)
        return (W / 2 + dX * c + dY * n, H / 2 - dX * n + dY * c)
    def lonlat(s, X, Y):
        dx, dy = X - W / 2, Y - H / 2; c, n = math.cos(s.b), math.sin(s.b)
        wx = s.cx + dx * c - dy * n; wy = s.cy + dx * n + dy * c
        return wx / s.ws * 360 - 180, math.degrees(math.atan(math.sinh(math.pi * (1 - 2 * wy / s.ws))))
