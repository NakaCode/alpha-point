# O vento medio de Wellington contra outras cidades, nas estacoes de aeroporto, pelo NOAA ISD-Lite (bucket aberto noaa-isd-pds, AWS).
# Um pedido por vez, User-Agent do canal. Os .gz ficam fora do git, em midia/_pautas/video-8/cetico-nz-ventos/isd/.
# Uso: python -X utf8 -B vento_isd.py
# Saida: vento-isd-saida.txt (tabela) e vento-isd.csv (por estacao), nesta pasta.
import gzip, io, os, re, sys, time, urllib.request, statistics, csv

UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
BUCKET = "https://noaa-isd-pds.s3.amazonaws.com"
AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", ".."))
CRU = os.path.join(RAIZ, "midia", "_pautas", "video-8", "cetico-nz-ventos", "isd")
os.makedirs(CRU, exist_ok=True)
ANOS = list(range(2015, 2025))  # 10 anos completos; o ISD parou em ago/2025

# (USAF, nome, grupo)
ESTACOES = [
    ("934360", "Wellington (aeroporto)", "NZ"),
    ("931190", "Auckland (aeroporto)", "NZ"),
    ("937800", "Christchurch (aeroporto)", "NZ"),
    ("725300", "Chicago O'Hare", "EUA"),
    ("725090", "Boston Logan", "EUA"),
    ("744860", "Nova York JFK", "EUA"),
    ("724940", "San Francisco SFO", "EUA"),
    ("724510", "Dodge City (Kansas)", "EUA"),
    ("724050", "Washington Reagan", "EUA"),
    ("718010", "St. John's (Terra Nova)", "outros"),
    ("716280", "Ottawa", "outros"),
    ("040300", "Reykjavik", "outros"),
    ("062400", "Amsterdam Schiphol", "outros"),
    ("037720", "Londres Heathrow", "outros"),
    ("039690", "Dublin", "outros"),
    ("061800", "Copenhague Kastrup", "outros"),
    ("013840", "Oslo Gardermoen", "outros"),
    ("949260", "Canberra", "outros"),
    ("949700", "Hobart", "outros"),
    ("859340", "Punta Arenas", "outros"),
    ("879250", "Rio Gallegos", "outros"),
    ("875820", "Buenos Aires Aeroparque", "outros"),
    ("865800", "Montevideo Carrasco", "outros"),
    ("688160", "Cidade do Cabo", "outros"),
]

def pedir(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()

def chaves(usaf, ano):
    xml = pedir(f"{BUCKET}/?list-type=2&prefix=isd-lite/data/{ano}/{usaf}-&max-keys=10").decode()
    time.sleep(0.3)
    return re.findall(r"<Key>([^<]+)</Key>", xml)

def ler(usaf, ano):
    linhas = []
    for k in chaves(usaf, ano):
        nome = os.path.join(CRU, os.path.basename(k))
        if not os.path.exists(nome):
            dados = pedir(f"{BUCKET}/{k}")
            with open(nome, "wb") as f:
                f.write(dados)
            time.sleep(0.3)
        with gzip.open(nome, "rt") as f:
            linhas.extend(f.read().splitlines())
    return linhas

res = []
for usaf, nome, grupo in ESTACOES:
    por_hora = {}  # (ano,mes,dia,hora) -> m/s
    for ano in ANOS:
        try:
            for ln in ler(usaf, ano):
                if len(ln) < 43:
                    continue
                v = int(ln[37:43])
                if v == -9999:
                    continue
                y, m, d, h = int(ln[0:4]), int(ln[5:7]), int(ln[8:11]), int(ln[11:13])
                por_hora[(y, m, d, h)] = v / 10.0
        except Exception as e:
            print(f"# {nome} {ano}: erro {e}", file=sys.stderr)
    if not por_hora:
        res.append((nome, grupo, None, None, None, 0, 0))
        continue
    vals = list(por_hora.values())
    media = statistics.fmean(vals)
    # media equilibrada: media das 24 medias horarias (corrige estacao que so reporta de dia)
    hh = {}
    for (y, m, d, h), v in por_hora.items():
        hh.setdefault(h, []).append(v)
    horas_ok = [statistics.fmean(hh[h]) for h in range(24) if len(hh.get(h, [])) >= 365]
    media_eq = statistics.fmean(horas_ok) if len(horas_ok) == 24 else None
    # fracao de horas com vento medio >= 31 km/h (o "strong" da NIWA) e >= 50 km/h (forte, Beaufort 7)
    f31 = sum(1 for v in vals if v * 3.6 >= 31) / len(vals)
    f50 = sum(1 for v in vals if v * 3.6 >= 50) / len(vals)
    cobertura = len(vals) / (len(ANOS) * 8766)
    res.append((nome, grupo, media * 3.6, (media_eq * 3.6 if media_eq else None), f31, f50, len(vals), cobertura))
    print(f"{nome}: {media*3.6:.1f} km/h, {len(vals)} horas", file=sys.stderr)

res = [r for r in res if r[2] is not None]
res.sort(key=lambda r: -r[2])
with open(os.path.join(AQUI, "vento-isd.csv"), "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["estacao", "grupo", "media_kmh", "media_equilibrada_kmh", "frac_horas_ge31kmh", "frac_horas_ge50kmh", "horas", "cobertura"])
    for r in res:
        w.writerow([r[0], r[1], f"{r[2]:.2f}", f"{r[3]:.2f}" if r[3] else "", f"{r[4]:.4f}", f"{r[5]:.4f}", r[6], f"{r[7]:.3f}"])

saida = [f"# Vento medio a 10 m nas estacoes de aeroporto, NOAA ISD-Lite, {ANOS[0]}-{ANOS[-1]} (todas as horas com vento valido; calmaria = 0)",
         f"# {'estacao':28} {'km/h':>6} {'mph':>5} {'equil.':>7} {'h>=31':>6} {'h>=50':>6} {'horas':>7} {'cobert.':>7}"]
for r in res:
    eq = f"{r[3]:7.1f}" if r[3] else "     --"
    saida.append(f"  {r[0]:28} {r[2]:6.1f} {r[2]/1.609344:5.1f} {eq} {r[4]*100:5.1f}% {r[5]*100:5.2f}% {r[6]:7d} {r[7]*100:6.0f}%")
wel = next(r for r in res if r[0].startswith("Wellington"))
chi = next(r for r in res if r[0].startswith("Chicago"))
saida.append("")
saida.append(f"Wellington / Chicago O'Hare = {wel[2]/chi[2]:.2f}x (media); horas com vento medio >= 50 km/h: {wel[5]*100:.2f}% contra {chi[5]*100:.2f}%")
txt = "\n".join(saida)
print(txt)
with open(os.path.join(AQUI, "vento-isd-saida.txt"), "w", encoding="utf-8") as f:
    f.write(txt + "\n")
