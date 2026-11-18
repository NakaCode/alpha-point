# Leitor minimo do Himawari Standard Data (HSD), so banda infravermelha (B13), um segmento.
# Le o .DAT.bz2, calibra para temperatura de brilho (K) e converte lat/lon -> linha/coluna
# pela projecao geoestacionaria normalizada (CGMS), com os parametros do bloco 3 do proprio arquivo.
import bz2, struct, math
import numpy as np

def ler(caminho):
    raw = bz2.decompress(open(caminho, "rb").read())
    off = 0
    info = {}
    while True:
        num = raw[off]
        blen = struct.unpack_from("<H", raw, off + 1)[0]
        b = raw[off:off + blen]
        if num == 1:
            info["nblocos"] = struct.unpack_from("<H", b, 3)[0]
            info["t_ini_mjd"] = struct.unpack_from("<d", b, 46)[0]
            info["hdr_total"] = struct.unpack_from("<I", b, 70)[0]
        elif num == 2:
            info["bits"], info["ncol"], info["nlin"] = struct.unpack_from("<HHH", b, 3)
        elif num == 3:
            info["sub_lon"] = struct.unpack_from("<d", b, 3)[0]
            info["cfac"], info["lfac"] = struct.unpack_from("<II", b, 11)
            info["coff"], info["loff"] = struct.unpack_from("<ff", b, 19)
            (info["rs"], info["req"], info["rpol"], info["e1"], info["e2"], info["e3"], info["sd"]) = struct.unpack_from("<7d", b, 27)
        elif num == 5:
            info["banda"] = struct.unpack_from("<H", b, 3)[0]
            info["lambda_um"] = struct.unpack_from("<d", b, 5)[0]
            info["cnt_err"], info["cnt_fora"] = struct.unpack_from("<HH", b, 15)
            info["gain"], info["offset"] = struct.unpack_from("<dd", b, 19)
            (info["c0"], info["c1"], info["c2"], _C0, _C1, _C2, info["c"], info["h"], info["k"]) = struct.unpack_from("<9d", b, 35)
        elif num == 7:
            info["nseg"], info["seg"] = struct.unpack_from("<BB", b, 3)
            info["lin1"] = struct.unpack_from("<H", b, 5)[0]
        off += blen
        if num == info.get("nblocos", 11) or num >= 11:
            break
    off = info["hdr_total"]
    cont = np.frombuffer(raw, dtype="<u2", count=info["ncol"] * info["nlin"], offset=off).reshape(info["nlin"], info["ncol"])
    return info, cont

def tb(info, cont):
    rad = info["gain"] * cont.astype("f8") + info["offset"]          # W m-2 sr-1 um-1
    lam = info["lambda_um"] * 1e-6
    c, h, k = info["c"], info["h"], info["k"]
    with np.errstate(divide="ignore", invalid="ignore"):
        te = (h * c / (k * lam)) / np.log(1 + (2 * h * c * c) / (lam ** 5 * rad * 1e6))
    t = info["c0"] + info["c1"] * te + info["c2"] * te * te
    ruim = (cont == info["cnt_err"]) | (cont == info["cnt_fora"]) | (rad <= 0)
    t[ruim] = np.nan
    return t

def latlon_para_lc(info, lat, lon):
    """lat, lon em graus (arrays). Devolve (linha_no_disco, coluna), 1-based, em float."""
    lat = np.radians(np.asarray(lat, "f8")); lon = np.asarray(lon, "f8")
    clat = np.arctan(info["e2"] * np.tan(lat))                     # rpol^2/req^2 * tan(lat)
    rl = info["rpol"] / np.sqrt(1 - info["e1"] * np.cos(clat) ** 2)
    dl = np.radians(lon - info["sub_lon"])
    r1 = info["rs"] - rl * np.cos(clat) * np.cos(dl)
    r2 = -rl * np.cos(clat) * np.sin(dl)
    r3 = rl * np.sin(clat)
    rn = np.sqrt(r1 * r1 + r2 * r2 + r3 * r3)
    x = np.degrees(np.arctan(-r2 / r1))
    y = np.degrees(np.arcsin(-r3 / rn))
    col = info["coff"] + x * 2.0 ** -16 * info["cfac"]
    lin = info["loff"] + y * 2.0 ** -16 * info["lfac"]
    return lin, col
