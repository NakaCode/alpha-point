"""O verificador de fatos (vídeo 7, rio-columbia, r2, 12/11/2026): as contas que o r2 pede além das do r1 (fatos-medidas.txt).

Uso: python -I -X utf8 -B roteiros/rio-columbia/qc-roteiro/fatos-medidas-r2.py midia/rio-columbia/fontes/c/usgs-pico-14105700.rdb
Só lê o arquivo local. Os outros números vêm transcritos das cópias em texto, com a fonte ao lado de cada um.
"""
import sys

dados = []
for l in open(sys.argv[1], encoding="utf-8").read().splitlines():
    if l.startswith("#") or l.startswith("agency_cd") or l.startswith("5s"):
        continue
    c = l.split("\t")
    if len(c) < 6 or not c[4].strip():
        continue
    dados.append((int(c[2][:4]), int(c[4])))

print("== A · 'passed the Canadian side's line in 40 of 89 years': maior que 600 mil, e não só igual")
sub = [d for d in dados if 1879 <= d[0] <= 1967]
print(f"1879-1967: {len(sub)} anos; pico > 600,000 cfs em {sum(1 for d in sub if d[1] > 600_000)} de {len(sub)} anos; "
      f"pico igual a 600,000 em {sum(1 for d in sub if d[1] == 600_000)}")
sub = [d for d in dados if 2009 <= d[0] <= 2025]
print(f"2009-2025: {len(sub)} anos; pico > 600,000 cfs em {sum(1 for d in sub if d[1] > 600_000)}; "
      f"entre 450,000 e 600,000 em {sum(1 for d in sub if 450_000 <= d[1] < 600_000)}")

print("== B · 'which is per call, 37.6 million a year looks steep' / 'which is per year, it looks cheap'")
pago, pedido_teto, ano_piso = 37.6, 34, 40  # PL 118-272 sec. 1152; CRS R43287 notas 41 e 40
print(f"pagamento por ano: 37.6 million; teto do custo por pedido (US Entity): {pedido_teto}; piso da perda por ano (Canadian Entity): {ano_piso}")
print(f"37.6 > {pedido_teto}: {pago > pedido_teto} (acima do maior custo de um pedido); 37.6 < {ano_piso}: {pago < ano_piso} (abaixo da menor perda de um ano)")

print("== C · 'The cut was more than a third.'")
corte = 37  # CRS R43287: "Beginning August 1, 2024, the Canadian Entitlement decreased by 37%."
print(f"corte da parte do Canadá: {corte} % contra 1/3 = {100/3:.1f} %: {corte > 100/3} (more than a third); "
      f"o corte previsto até 2033 (~50 %) também passa de 1/3")

print("== D · 'Part of that strip is the room': o espaço pago contra o armazenamento do tratado em Arrow")
pago_maf, arrow_maf = 3.6, 7.1  # PL 118-272 sec. 1152; BC Hydro 2026, p. 21
print(f"3.6 MAF pagos por ano em Keenleyside contra 7.1 MAF do tratado em Arrow: {pago_maf / arrow_maf:.0%} (parte, não o todo)")

print("== E · 'About 15 percent of the land, and about 39 percent of the water.'")
print("15 percent da bacia no Canadá (USACE + BPA, 2013: 'only about 15 percent of the 259,500 square miles'); "
      "39 percent = Birchbank/The Dalles 1938-2024 n=87, 39.3 % (fatos-medidas.txt); a USACE + BPA dá 'about 38 percent' do volume médio")

print("== F · 'Decades later, the Supreme Court of Canada wrote those words in a ruling.'")
print(f"1956 (a declaração) -> 2021 (R. v. Desautel, 2021 SCC 17): {2021 - 1956} anos")

print("== G · 'As a tariff fight between the two countries grew' / os dois países")
print("a briga de tarifas (CFJC/Canadian Press, 25/03/2025: 'Trade tensions between Canada and the United States'): Canada + United States = 2 países")
