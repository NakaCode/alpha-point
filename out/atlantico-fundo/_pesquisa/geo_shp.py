# -*- coding: utf-8 -*-
"""Leitor mínimo de shapefile dentro de zip. Cópia fiel de out/los-angeles/_pesquisa/geo_shp.py (vídeo 2, 07/10/2026), trazida ao vídeo 4 em 28/10/2026.
Sem bibliotecas de fora: só a biblioteca padrão. Lê .dbf, .shp e .shx; tipos 3 (PolyLine) e 5 (Polygon).
Polígono sai como MultiPolygon GeoJSON (RFC 7946: exterior anti-horário, buracos horários)."""
import io, struct, zipfile


def abrir(zip_path):
    z = zipfile.ZipFile(zip_path)
    nomes = {n.rsplit('.', 1)[-1].lower(): n for n in z.namelist()}
    return {ext: z.read(n) for ext, n in nomes.items()}


def dbf_registros(dbf):
    n = struct.unpack('<I', dbf[4:8])[0]
    hlen, rlen = struct.unpack('<HH', dbf[8:12])
    campos, p = [], 32
    while dbf[p] != 0x0D:
        nome = dbf[p:p + 11].split(b'\0')[0].decode('latin1')
        campos.append((nome, dbf[p + 16]))
        p += 32
    for i in range(n):
        o, q = {}, hlen + i * rlen + 1
        for nome, tam in campos:
            o[nome] = dbf[q:q + tam].decode('utf-8', 'replace').strip()
            q += tam
        yield o


def _area(r):
    s = 0.0
    for i in range(len(r)):
        x1, y1 = r[i - 1]; x2, y2 = r[i]
        s += (x2 - x1) * (y2 + y1)
    return s / 2  # >0 = horário


def _dentro(pt, anel):
    x, y = pt; d = False
    for i in range(len(anel)):
        xi, yi = anel[i]; xk, yk = anel[i - 1]
        if (yi > y) != (yk > y) and x < (xk - xi) * (y - yi) / (yk - yi) + xi:
            d = not d
    return d


def geometria(shp, shx, i):
    off = struct.unpack('>I', shx[100 + i * 8:104 + i * 8])[0] * 2 + 8
    tipo = struct.unpack('<i', shp[off:off + 4])[0]
    if tipo == 0:
        return None
    nP, nPt = struct.unpack('<ii', shp[off + 36:off + 44])
    partes = list(struct.unpack('<%di' % nP, shp[off + 44:off + 44 + 4 * nP]))
    base = off + 44 + 4 * nP
    pts = list(struct.iter_unpack('<dd', shp[base:base + 16 * nPt]))
    pts = [[x, y] for x, y in pts]
    aneis = [pts[s:(partes[k + 1] if k + 1 < nP else nPt)] for k, s in enumerate(partes)]
    if tipo == 3:
        return {'type': 'MultiLineString', 'coordinates': aneis}
    if tipo != 5:
        raise ValueError('tipo %d não suportado' % tipo)
    ext = [[r[::-1]] for r in aneis if _area(r) > 0]
    for h in (r for r in aneis if _area(r) <= 0):
        dono = None
        for v in h[:: max(1, len(h) // 12)]:   # um vértice do buraco pode estar na própria borda do exterior
            dono = next((p for p in ext if _dentro(v, p[0])), None)
            if dono is not None: break
        if dono is None:   # último recurso: o exterior cuja caixa contém a caixa do buraco
            hx = [q[0] for q in h]; hy = [q[1] for q in h]
            dono = next((p for p in ext if min(q[0] for q in p[0]) <= min(hx) and max(q[0] for q in p[0]) >= max(hx)
                         and min(q[1] for q in p[0]) <= min(hy) and max(q[1] for q in p[0]) >= max(hy)), None)
        if dono is None:
            raise ValueError('registro %d: buraco sem exterior' % i)
        dono.append(h[::-1])
    return {'type': 'MultiPolygon', 'coordinates': ext}


def features(zip_path, filtro=lambda r: True):
    B = abrir(zip_path)
    prj = B.get('prj', b'').decode('latin1')
    out = []
    for i, r in enumerate(dbf_registros(B['dbf'])):
        if filtro(r):
            out.append({'type': 'Feature', 'properties': r, 'geometry': geometria(B['shp'], B['shx'], i)})
    return out, prj
