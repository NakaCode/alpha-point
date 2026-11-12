"""O verificador de fatos (vídeo 7, rio-columbia, r1, 12/11/2026): as conversões que a fala usa, sobre os números que o
p_contas.py e o a_calc_fracoes.py imprimem (acima, no fatos-medidas.txt), e a posição da estação de Birchbank.

Uso: python -I -X utf8 -B roteiros/rio-columbia/qc-roteiro/fatos-medidas-contas.py midia/rio-columbia/fontes/a/wsc-estacao-08NE049.json
Só lê o arquivo local. Sem rede.
"""
import json
import sys

DIAS_SEMANA, DIAS_MES = 7.0, 365.25 / 12

# 1. Os dias de rio da medida-mãe (p_contas.py, bloco 1b: 15.50 MAF = 41.5 d em The Dalles; 110.0 d em Birchbank)
d_dalles, d_birch = 41.5, 110.0
print("== A · Os 15,5 MAF das três barragens do tratado (Art. II.1), em semanas e meses de rio médio")
print(f"  The Dalles: {d_dalles} dias = {d_dalles / DIAS_SEMANA:.1f} semanas (about 6)")
print(f"  Birchbank: {d_birch} dias = {d_birch / DIAS_MES:.2f} meses (closer to 3.5 than to 4)")

# 2. O trecho do rio no Canadá (p_contas.py, bloco 1c)
print("== B · O trecho no Canadá contra um terço da viagem")
print(f"  664/1942 km = {100 * 664 / 1942:.1f} % e 498/1243 mi = {100 * 498 / 1243:.1f} %, os dois acima de 1/3 ({100 / 3:.1f} %)")

# 3. Birchbank e a fronteira (o paralelo 49 N nesse trecho)
d = json.load(open(sys.argv[1], encoding="utf-8"))
lon, lat = d["features"][0]["geometry"]["coordinates"][:2]
km = (lat - 49.0) * 111.2
print("== C · A estação 08NE049 (COLUMBIA RIVER AT BIRCHBANK) e a fronteira")
print(f"  latitude {lat:.4f} N, longitude {lon:.4f}: {km:.1f} km ({km / 1.609344:.1f} mi) ao norte do paralelo 49")

# 4. As faixas da fala, como o ouvido as diz ("between 4 and 34 million"): o primeiro número da faixa carrega a escala do segundo
print("== D · As faixas da fala (o primeiro número leva a escala do segundo; a fonte e o trecho estão na tabela)")
print("  US Entity, custo por pedido (CRS R43287, nota 41): de 4 a 34 milhões de dólares, ou seja, 4 e 34")
print("  Canadian Entity, perda por ano (CRS R43287, nota 40): de 40 a 150 milhões de dólares, ou seja, 40 e 150")
print("  US Entity, 2012, receita a mais sem o tratado (CRS R43287, nota 26): de 180 a 280 milhões de dólares, ou seja, 180 e 280")

# 5. Contagem
print("== E · Contagens")
print("  nações na delegação do Canadá (GAC, nota de 28/05/2025): Ktunaxa, Syilx-Okanagan, Secwépemc = 3 nações")
print("  séries casadas (a_calc_fracoes.py): WSC 08NE049, do governo do Canadá, e USGS 14105700, do governo dos EUA = 2 séries, de 2 governos")
print("  líderes na fronteira em 16/09/1964 (USACE + BPA): Johnson, dos EUA; Pearson e Bennett, do Canadá = 2 países")
print("  quem acerta a operação das barragens do tratado (BC Hydro 2026, p. 7): both Canada and the U.S. = 2 lados")
