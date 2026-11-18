# Cético death-valley (17/11/2026): a subida acumulada de Badwater a Whitney pela linha reta, em passos de 200 m a 2 km,
# lida do perfil.tsv (3DEP), para ver o quanto o número depende do passo. Uso: python -X utf8 -B subida_por_passo.py
v = []
for l in open("perfil.tsv", encoding="utf-8").read().splitlines()[1:]:
    c = l.split("\t")
    v.append(float(c[5]))
v = v[::-1]  # de Badwater para Whitney
for k in (1, 2, 5, 10):
    s = v[::k]
    sobe = sum(max(0, s[i] - s[i - 1]) for i in range(1, len(s)))
    print(f"passo {200*k} m: sobe {sobe:,.0f} ft")
