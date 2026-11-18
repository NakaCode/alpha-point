# A medida do cético do niagara (17/11/2026): o nível do rio logo abaixo das cataratas, de hora em hora, o ano de 2025 inteiro.
# Fonte: NOAA CO-OPS, estação 9063007 "Ashland Ave, NY" (no rio Niágara, abaixo das quedas e acima da volta das usinas;
# é o medidor que o International Niagara Board of Control usa para a vazão sobre as cataratas: relatórios 143 e 144, Figura 9).
# Produto hourly_height, datum IGLD, metros, hora local (EST/EDT). Um pedido por mês, um por vez.
# Uso: python -X utf8 -B noaa_noite.py   (grava ashland-2025-horario.csv e noaa-noite-resumo.md nesta pasta)
import csv, io, os, statistics, time, urllib.request
from collections import defaultdict

AQUI = os.path.dirname(os.path.abspath(__file__))
CSV = os.path.join(AQUI, "ashland-2025-horario.csv")
URL = ("https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=hourly_height&station=9063007"
       "&begin_date={ini}&end_date={fim}&datum=IGLD&units=metric&time_zone=lst_ldt&format=csv&application=research")
DIAS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

if not os.path.exists(CSV):
    linhas = []
    for m in range(1, 13):
        url = URL.format(ini=f"2025{m:02d}01", fim=f"2025{m:02d}{DIAS[m-1]:02d}")
        with urllib.request.urlopen(url, timeout=90) as r:
            txt = r.read().decode("utf-8")
        for row in list(csv.reader(io.StringIO(txt)))[1:]:
            if len(row) >= 2 and row[1].strip():
                linhas.append((row[0].strip(), float(row[1])))
        time.sleep(2)
    with open(CSV, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["hora_local", "nivel_m_IGLD"])
        w.writerows(linhas)

serie = {}
with open(CSV, encoding="utf-8") as f:
    for row in list(csv.reader(f))[1:]:
        serie[row[0]] = float(row[1])

por_dia = defaultdict(dict)
for k, v in serie.items():
    por_dia[k[:10]][int(k[11:13])] = v

M2FT = 3.28084
res = []  # (dia, dia_med, noite_med, queda, hora_da_queda)
for d in sorted(por_dia):
    h = por_dia[d]
    dia = [h[x] for x in range(11, 19) if x in h]          # 11h-18h: dentro do horário diurno nas duas regras
    noite = [h[x] for x in range(1, 6) if x in h]           # 01h-05h: noite em qualquer regra
    if len(dia) < 6 or len(noite) < 4:
        continue
    queda = statistics.mean(dia) - statistics.mean(noite)
    # a hora da maior descida de uma hora para a outra entre 18h e 24h
    maior, hora = 0.0, None
    for x in range(18, 24):
        if x in h and (x + 1) in h and h[x] - h[x + 1] > maior:
            maior, hora = h[x] - h[x + 1], x + 1
    res.append((d, statistics.mean(dia), statistics.mean(noite), queda, hora, maior))

meses = defaultdict(list)
for r in res:
    meses[r[0][:7]].append(r)

out = ["# O nível abaixo das cataratas, 2025 (NOAA 9063007, Ashland Ave)", "",
       f"Horas lidas: {len(serie)} de 8.760. Dias com dado suficiente: {len(res)}.", "",
       "Queda = média das 11h-18h menos a média das 01h-05h (hora local). 'Noites com queda' = queda de 1 m ou mais.", "",
       "| Mês | Dias | Queda mediana (m) | (pés) | Noites com queda ≥ 1 m | Hora mais comum da descida |", "|---|---|---|---|---|---|"]
for m in sorted(meses):
    rs = meses[m]
    q = statistics.median(r[3] for r in rs)
    n = sum(1 for r in rs if r[3] >= 1.0)
    horas = [r[4] for r in rs if r[3] >= 1.0 and r[4] is not None]
    hc = max(set(horas), key=horas.count) if horas else "-"
    out.append(f"| {m} | {len(rs)} | {q:.2f} | {q*M2FT:.1f} | {n} | {hc}h |")
tot = sum(1 for r in res if r[3] >= 1.0)
temp = [r for r in res if "2025-04-01" <= r[0] <= "2025-10-31"]
fora = [r for r in res if not ("2025-04-01" <= r[0] <= "2025-10-31")]
out += ["",
        f"Noites com queda ≥ 1 m no ano: {tot} de {len(res)}.",
        f"Na temporada (01/04-31/10): {sum(1 for r in temp if r[3] >= 1.0)} de {len(temp)}; queda mediana {statistics.median(r[3] for r in temp):.2f} m ({statistics.median(r[3] for r in temp)*M2FT:.1f} pés); a maior, {max(r[3] for r in temp):.2f} m.",
        f"Fora dela (jan-mar e nov-dez): {sum(1 for r in fora if r[3] >= 1.0)} de {len(fora)}; queda mediana {statistics.median(r[3] for r in fora):.2f} m.",
        f"Amplitude do ano (máx - mín das horas): {max(serie.values()) - min(serie.values()):.2f} m."]
with open(os.path.join(AQUI, "noaa-noite-resumo.md"), "w", encoding="utf-8") as f:
    f.write("\n".join(out) + "\n")
print("\n".join(out))
