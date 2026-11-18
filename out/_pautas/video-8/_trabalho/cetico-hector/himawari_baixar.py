# Baixa o segmento 7 da banda 13 (10,4 um) do Himawari-9 (NOAA Open Data no AWS, sem login), corta a janela
# do Top End (lat -10.9 a -13.5, lon 127.3 a 132.5), grava a temperatura de brilho (K) em .npz e apaga o bruto.
# Licenca: "NOAA and JMA request attribution"; https://registry.opendata.aws/noaa-himawari/
# Amostra:
#   - de hora em hora, XX:30 UTC de 00:30 a 11:30 (10:00 a 21:00 em Darwin, UTC+9:30): novembro de 2023, 2024 e 2025;
#   - 4 vezes ao dia (00:30, 04:30, 06:30, 08:30 UTC = 10:00, 14:00, 16:00, 18:00 em Darwin): set, out e dez/2024, jan, fev e mar/2025.
# Uso: python -I -X utf8 -B himawari_baixar.py <pasta_midia>
import sys, os, json, time, datetime as dt, urllib.request, threading
from concurrent.futures import ThreadPoolExecutor
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import numpy as np, hsd
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
BASE = "https://noaa-himawari9.s3.amazonaws.com/AHI-L1b-FLDK/{y:04d}/{m:02d}/{d:02d}/{hm}/HS_H09_{y:04d}{m:02d}{d:02d}_{hm}_B13_FLDK_R20_S0710.DAT.bz2"
pasta = sys.argv[1]
cortes = os.path.join(pasta, "cortes"); tmp = os.path.join(pasta, "tmp")
os.makedirs(cortes, exist_ok=True); os.makedirs(tmp, exist_ok=True)

def dias(a, m):
    d = dt.date(a, m, 1)
    while d.month == m:
        yield d
        d += dt.timedelta(days=1)

jobs = []
for a in (2023, 2024, 2025):
    for d in dias(a, 11):
        for h in range(0, 12):
            jobs.append((d, f"{h:02d}30"))
for a, m in [(2024, 9), (2024, 10), (2024, 12), (2025, 1), (2025, 2), (2025, 3)]:
    for d in dias(a, m):
        for hm in ("0030", "0430", "0630", "0830"):
            jobs.append((d, hm))

JAN = None
lock = threading.Lock()
log = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "himawari-log.txt"), "a", encoding="utf-8")

def janela(info):
    l1, c1 = hsd.latlon_para_lc(info, -10.9, 127.3)
    l2, c2 = hsd.latlon_para_lc(info, -13.5, 132.5)
    r0 = int(np.floor(min(l1, l2))) - info["lin1"] - 2; r1 = int(np.ceil(max(l1, l2))) - info["lin1"] + 2
    k0 = int(np.floor(min(c1, c2))) - 1 - 2; k1 = int(np.ceil(max(c1, c2))) - 1 + 2
    return max(r0, 0), min(r1, info["nlin"]), k0, k1

def um(job):
    global JAN
    d, hm = job
    nome = f"{d:%Y%m%d}_{hm}.npz"
    destino = os.path.join(cortes, nome)
    if os.path.exists(destino):
        return "ja"
    url = BASE.format(y=d.year, m=d.month, d=d.day, hm=hm)
    bruto = os.path.join(tmp, f"{d:%Y%m%d}_{hm}.bz2")
    err = ""
    for tentativa in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=90) as r:
                open(bruto, "wb").write(r.read())
            info, cont = hsd.ler(bruto)
            with lock:
                if JAN is None:
                    JAN = janela(info)
                    meta = {k: v for k, v in info.items() if isinstance(v, (int, float))}
                    meta["janela_r0_r1_k0_k1"] = JAN
                    json.dump(meta, open(os.path.join(pasta, "meta.json"), "w"), indent=1)
            r0, r1, k0, k1 = JAN
            T = hsd.tb(info, cont[r0:r1, k0:k1]).astype("float32")
            np.savez_compressed(destino, T=T, t_ini_mjd=info["t_ini_mjd"])
            os.remove(bruto)
            return "ok"
        except urllib.error.HTTPError as e:
            if e.code == 404:
                with lock: log.write(f"404 {url}\n"); log.flush()
                return "404"
            err = f"HTTP {e.code}"
            time.sleep(3)
        except Exception as e:
            err = str(e)
            time.sleep(3)
    with lock: log.write(f"falhou {url} {err}\n"); log.flush()
    return "falhou"

t0 = time.time()
# o primeiro sozinho, para fixar a janela
print(len(jobs), "pedidos; primeiro:", um(jobs[0]), flush=True)
cont = {}
with ThreadPoolExecutor(max_workers=5) as ex:
    for i, r in enumerate(ex.map(um, jobs[1:]), 1):
        cont[r] = cont.get(r, 0) + 1
        if i % 100 == 0:
            print(i, cont, round(time.time() - t0), "s", flush=True)
print("fim", cont, round(time.time() - t0), "s", flush=True)
