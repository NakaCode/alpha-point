# p_v2_patch.py: põe no p_contas.py os títulos e o orçamento dos atos da pauta v2 (18/11/2026). Roda uma vez; confere cada troca.
import sys

CAM = "pautas/australia-animais/_trabalho/scripts/p_contas.py"
t = open(CAM, encoding="utf-8").read()

trocas = [
    ("# p_contas.py: as contas da pauta v1 do vídeo 8 (`australia-animais`), sem rede.",
     "# p_contas.py: as contas da pauta do vídeo 8 (`australia-animais`), sem rede. Na v2 (depois do cético da v1), os títulos e os atos novos."),
    ('''TITULOS = [
    # os três do teste
    "Why So Few People Die From Australia's Deadly Animals",
    "Australia Has the World's Most Venomous Snake. It Rarely Kills.",
    "Why Australia's Spiders Stopped Killing People",
    # as alternativas e os que caíram
''',
     '''TITULOS = [
    # v2: os três do teste
    "Australia Has the Venom. Why Doesn't It Have the Deaths?",
    "How Australia Ended Up With So Many Venomous Snakes",
    "Australia's Most Venomous Snake Lives Where Almost No One Does",
    # v2: as reservas do 2 e do 3
    "Where Australia's Venomous Snakes Came From",
    "The Snake That Actually Kills Australians",
    # v2: os que caíram na colisão da Sala (o 2 e o 3 do cético)
    "Why Most of Australia's Snakes Are Venomous",
    "Australia's Deadliest Snake Isn't Its Most Venomous One",
    # v1: os três do teste (caíram na colisão, K2)
    "Why So Few People Die From Australia's Deadly Animals",
    "Australia Has the World's Most Venomous Snake. It Rarely Kills.",
    "Why Australia's Spiders Stopped Killing People",
    # v1: as alternativas e os que caíram
'''),
    ('''ATOS = [
    ("ato 1 · o registro", 400),
    ("ato 2 · o continente que viajou sozinho", 450),
    ("ato 3 · quem chegou primeiro: as cobras", 480),
    ("inscrição falada", 16),
    ("ato 4 · a água e o norte", 330),
    ("ato 5 · as aranhas", 430),
    ("ato 6 · quem mata de verdade", 450),
    ("fecho", 165),
]''',
     '''ATOS = [  # a v2
    ("ato 1 · o registro e a fama", 360),
    ("ato 2 · as cobras que vieram da Ásia", 420),
    ("ato 3 · a taipan e o vazio", 380),
    ("inscrição falada", 15),
    ("ato 4 · a marrom e o endereço", 380),
    ("ato 5 · o norte e as aranhas", 420),
    ("ato 6 · quem mata de verdade", 360),
    ("fecho", 175),
]'''),
    ('''    print(f"  o parque: ~150 ordenhas por frasco; até 13 frascos num paciente = até {150 * 13:,} ordenhas")''',
     '''    print(f"  o parque: ~150 ordenhas por frasco; até 13 frascos num paciente = até {150 * 13:,} ordenhas")
    # v2: as contas do cético (cetico_contas.py), refeitas para a pauta
    mes = estrada25 / 12
    print(f"  v2 · a estrada de 2025 por mês: {mes:.1f}; os 85 de dez anos = {v / mes:.2f} mês = {v / (estrada25 / 365):.1f} dias de estrada")
    print(f"  v2 · as cobras (Lee, via Live Science, a conferir): 145 de 220 = {145 / 220 * 100:.1f} % ('65%'); o mundo, ~15 %:"
          f" {145 / 220 / 0.15:.1f} vezes a fração")
    print(f"  v2 · a queda envolvendo cama (W06), a média de dez anos: {cama10 / 10:.1f} por ano (o pico de 2025, preliminar: {cama25})")'''),
]
for velho, novo in trocas:
    n = t.count(velho)
    if n != 1:
        sys.exit(f"ERRO: o trecho aparece {n} vezes: {velho[:80]!r}")
    t = t.replace(velho, novo)
open(CAM, "w", encoding="utf-8").write(t)
print(f"ok: {len(trocas)} trocas")
