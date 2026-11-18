# p_v2_patch2.py: o orçamento final dos atos da v2 no p_contas.py (o ato 2 sobe a 430, o ato 4 desce a 340). Roda uma vez; confere a troca.
import sys

CAM = "pautas/australia-animais/_trabalho/scripts/p_contas.py"
t = open(CAM, encoding="utf-8").read()
trocas = [
    ('("ato 2 · as cobras que vieram da Ásia", 420)', '("ato 2 · as cobras que vieram da Ásia", 430)'),
    ('("ato 4 · a marrom e o endereço", 380)', '("ato 4 · a marrom e o endereço", 340)'),
]
for velho, novo in trocas:
    n = t.count(velho)
    if n != 1:
        sys.exit(f"ERRO: o trecho aparece {n} vezes: {velho!r}")
    t = t.replace(velho, novo)
open(CAM, "w", encoding="utf-8").write(t)
print(f"ok: {len(trocas)} trocas")
