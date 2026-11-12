"""O verificador de fatos (vídeo 7, rio-columbia, r1, 12/11/2026): os picos anuais do USGS em The Dalles (14105700) por período e
por código de qualificação, para as frases do p23 ("passed British Columbia's line in 40 of 89 years"; "Since 2009 ... it hasn't
passed it once, and six springs have peaked in the gap").

Uso: python -I -X utf8 -B roteiros/rio-columbia/qc-roteiro/fatos-medidas-picos.py midia/rio-columbia/fontes/c/usgs-pico-14105700.rdb
Só lê o arquivo local.
"""
import sys

dados = []
for l in open(sys.argv[1], encoding="utf-8").read().splitlines():
    if l.startswith("#") or l.startswith("agency_cd") or l.startswith("5s"):
        continue
    c = l.split("\t")
    if len(c) < 6 or not c[4].strip():
        continue
    dados.append((int(c[2][:4]), int(c[4]), c[2], c[5]))

def bloco(rot, a0, a1):
    sub = [d for d in dados if a0 <= d[0] <= a1]
    ge600 = [d for d in sub if d[1] >= 600_000]
    gap = [d for d in sub if 450_000 <= d[1] < 600_000]
    cod1 = [d for d in sub if "1" in d[3].split(",")]
    print(f"{rot}: {len(sub)} anos; pico >= 600,000 cfs em {len(ge600)} de {len(sub)} anos; entre 450,000 e 600,000 em {len(gap)}; "
          f"com o código 1 (Maximum Daily Average) em {len(cod1)}")
    if gap and a0 >= 2009:
        print("   no vão (450-600 mil): " + "; ".join(f"{d[2]} {d[1]:,} ({d[3]})" for d in gap))
    if a0 >= 2009:
        print("   maior pico do período: " + max(sub, key=lambda d: d[1])[2] + f" {max(d[1] for d in sub):,}")
        print("   códigos: " + "; ".join(sorted({d[3] for d in sub})))

bloco("1879-1967", 1879, 1967)
bloco("1974-2008", 1974, 2008)
bloco("2009-2025", 2009, 2025)
print("último ano com código 1 depois de 1974: " + str(max(d[0] for d in dados if d[0] >= 1974 and "1" in d[3].split(","))))
