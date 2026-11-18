# p_v2_patch3.py: a correção do Lucas (18/11/2026, ~12h, pela Sala): o título dele entra no teste, com os 3 mais clicáveis dos seis já propostos;
# nenhum título cai por colisão. Põe a lista nova no topo de TITULOS do p_contas.py. Roda uma vez; confere a troca.
import sys

CAM = "pautas/australia-animais/_trabalho/scripts/p_contas.py"
t = open(CAM, encoding="utf-8").read()
velho = '''TITULOS = [
    # v2: os três do teste
'''
novo = '''TITULOS = [
    # v2, depois da correção do Lucas (18/11, ~12h): os quatro do teste (o dele e os 3 mais clicáveis dos seis já propostos)
    "Why Does Australia Have So Many Dangerous Animals?",
    "Why So Few People Die From Australia's Deadly Animals",
    "Australia's Deadliest Snake Isn't Its Most Venomous One",
    "Why Australia's Spiders Stopped Killing People",
    # v2, antes da correção: os três que a v2 tinha posto no teste (agora o 1 é reserva, e os outros dois, sugestões fora do teste)
'''
n = t.count(velho)
if n != 1:
    sys.exit(f"ERRO: o trecho aparece {n} vezes")
t = t.replace(velho, novo)
open(CAM, "w", encoding="utf-8").write(t)
print("ok: 1 troca")
