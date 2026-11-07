"""O cético (07/11/2026): a régua pode explicar os 254 km numa costa quase reta?

Uso: python -I -X utf8 -B cetico_regua.py   (sem argumento; não lê nem baixa nada)

As pontas são as coordenadas aproximadas da base de fatos (fatos 2.8, de memória, FRÁGIL). A conta é de conferência: quanto a costa
teria de se afastar da corda (a flecha de um arco) para render cada número, e quanto cada número passa da corda.
O `pesquisa-geo` decide com a linha do OSM e a malha do IBGE.
"""
import math

R = 6371.0088  # raio médio da Terra, km


def hav(lat1, lon1, lat2, lon2):
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp = p2 - p1
    dl = math.radians(lon2 - lon1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(a))


PONTAS = {
    "base (fatos 2.8)": ((-32.17, -52.09), (-33.74, -53.37)),
    "molhe mais ao sul, foz mais ao sul (+-0,03 grau)": ((-32.20, -52.08), (-33.75, -53.39)),
    "molhe mais ao norte, foz mais ao norte (+-0,03 grau)": ((-32.14, -52.10), (-33.71, -53.35)),
}
for nome, (a, b) in PONTAS.items():
    c = hav(*a, *b)
    print(f"corda {nome}: {c:.1f} km = {c * 0.621371:.1f} mi")

c = hav(-32.17, -52.09, -33.74, -53.37)
print()
for rot, km in [("IBGE (soma)", 218.0), ("Prefeitura / Rede de Trilhas", 223.0), ("Governo do RS", 254.0)]:
    excesso = km - c
    # arco circular raso: comprimento ~ L + 8 s^2 / (3 L)  ->  flecha s = sqrt(3 L (A - L) / 8)
    flecha = math.sqrt(3 * c * excesso / 8) if excesso > 0 else 0.0
    print(f"{rot}: {km:.0f} km = corda + {excesso:.1f} km ({excesso / c * 100:.1f} %); "
          f"um arco liso precisaria de uma flecha de {flecha:.0f} km ({flecha * 0.621371:.0f} mi) no meio")

print()
print("Diferença entre os números (o que a régua teria de explicar):")
print(f"  254 contra 218: {254 / 218 * 100 - 100:.1f} %;  223 contra 218: {223 / 218 * 100 - 100:.1f} %")
print("Linhas paralelas numa costa reta (as dunas, a preamar, a baixa-mar, a uns 100 m uma da outra):")
d = 0.1  # km entre a linha das dunas e a da baixa-mar, ordem de grandeza
print(f"  numa costa reta, o comprimento é o mesmo; num arco com a flecha do IBGE, a diferença é da ordem de "
      f"d * ângulo de giro: {d * 2 * math.atan(4 * 21 / c):.3f} km")
