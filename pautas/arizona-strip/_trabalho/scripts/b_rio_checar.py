# b_rio_checar.py: verificações do eixo do Colorado medido (rio-medida.json): onde caem 277/278 mi abaixo de Lees Ferry, e as distâncias-chave (leitor B)
import json, math
PASTA = r'C:/projetos/alpha-point/midia/arizona-strip/fontes/b'
m = json.load(open(PASTA + '/rio-medida.json')); L = m['linha']; C = m['cum_km']
MI = 1.609344
def hav_km(a, b):
    R = 6371.0088
    lo1, la1, lo2, la2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))
def em(km):
    i = min(range(len(C)), key=lambda k: abs(C[k] - km)); return L[i], C[i]
LF = 25.62   # km da barragem a Lees Ferry (ponto de referência do paria)
NB = 32.63   # km da barragem à interseção do US 89A (Navajo Bridge)
PR = 166.98  # km da barragem à interseção da trilha Phantom Ranch (Black/Silver Bridge)
HD = 589.37  # km da barragem ao nó final (Hoover Dam)
print('barragem Glen Canyon -> Lees Ferry: %.2f km = %.2f mi' % (LF, LF / MI))
print('Lees Ferry -> Navajo Bridge (US 89A): %.2f km = %.2f mi' % (NB - LF, (NB - LF) / MI))
print('Lees Ferry -> Phantom Ranch (pontes): %.2f km = %.2f mi' % (PR - LF, (PR - LF) / MI))
print('Navajo Bridge -> Hoover Dam: %.2f km = %.2f mi' % (HD - NB, (HD - NB) / MI))
print('Lees Ferry -> Hoover Dam: %.2f km = %.2f mi' % (HD - LF, (HD - LF) / MI))
print('barragem Glen Canyon -> Hoover Dam: %.2f km = %.2f mi' % (HD, HD / MI))
for mi in (225.9, 277, 278, 280):
    p, c = em(LF + mi * MI)
    print('  %.1f mi abaixo de Lees Ferry cai em lon %.4f lat %.4f' % (mi, p[0], p[1]))
# longitude do Grand Wash Cliffs (limite oeste do parque): ponto do eixo mais a oeste antes de entrar no lago
# distância do eixo do ponto de 278 mi até o Hoover Dam
p, c = em(LF + 278 * MI)
print('do ponto 278 mi até a Hoover Dam: %.2f km = %.2f mi' % (HD - c, (HD - c) / MI))
