# p_ajuste2.py: o "pelo menos 13" das funnel-web em toda a pauta v1 (a revisão do MJA achou 13; não é um censo). Sem rede.
# Uso: python -X utf8 -B pautas/australia-animais/_trabalho/scripts/p_ajuste2.py pautas/2026-11-18-video-8-australia-pauta.md
import sys

caminho = sys.argv[1]
t = open(caminho, encoding="utf-8").read()
trocas = [
    ('"Deadly": as funnel-web mataram 13 antes do soro (fa D2)', '"Deadly": as funnel-web mataram pelo menos 13 antes do soro (fa D2)'),
    ("o veneno, a dúzia de casos e as 13 mortes das aranhas, sem a resposta.", "o veneno, a dúzia de casos e as 13 mortes (pelo menos) das aranhas, sem a resposta."),
    ("e a aranha que matou 13;", "e a aranha que matou pelo menos 13;"),
    ('"13 DEATHS BEFORE ANTIVENOM";', '"AT LEAST 13 DEATHS BEFORE ANTIVENOM";'),
    ('| sim: 1981, 13, "no confirmed death", "almost every case".', '| sim: 1981, "at least 13", "no confirmed death", "almost every case".'),
]
for velho, novo in trocas:
    n = t.count(velho)
    print(n, velho[:70])
    if n == 1:
        t = t.replace(velho, novo)
open(caminho, "w", encoding="utf-8").write(t)
