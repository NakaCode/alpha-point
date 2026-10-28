# corrigir-frase-2015.py — leva a correção da 1ª frase do parágrafo 15 (a cena s47) aos textos de apoio do vídeo 4.
#
# A frase "In 2015, a NOAA robot filmed the trench's south wall, almost 20,000 feet down." foi REFUTADA na reverificação de
# 28/10/2026 (roteiros/atlantico-fundo/qc-roteiro/f132-reverificacao-2026-10-28.laudo.md): o mergulho EX1502 L3 Dive 09 chegou
# a 6.000 m junto à parede sul e voltou sem explorar o fundo (S32 "Bottom Time: N/A"; S33 "without exploring the seafloor").
# O Lucas, 28/10/2026, 15:0x, no chat da Sala: "Corrigir a frase (Recomendado)"; e, sobre a imagem da cena, "Foto do robô e
# mapa (Recomendado)" (roteiros/atlantico-fundo/decisoes-lucas.md, "Depois da pesquisa").
#
# O roteiro-narrador.md e a cópia para a voz NÃO passam por aqui: o roteiro se troca à mão, e a cópia sai do
# roteiros/atlantico-fundo/_ferramentas/preparar-voz.mjs. Este script troca o resto: o dossiê (roteiro-editor.md), o fundamento
# (F68, .md e .json), a tabela de fatos (o parágrafo 15) e a ficha de dados da s47 (_dados/s47.json e pauta-dados.json).
# Cada troca exige achar o texto antigo o número de vezes esperado; senão, para sem gravar nada.
#   python -X utf8 -B out/atlantico-fundo/_pesquisa/corrigir-frase-2015.py "<a frase nova do roteiro>"   (cwd = raiz do canal)
import json
import sys
from pathlib import Path

ANTIGA = "In 2015, a NOAA robot filmed the trench's south wall, almost 20,000 feet down."
LAUDO = "roteiros/atlantico-fundo/qc-roteiro/f132-reverificacao-2026-10-28.laudo.md"
ROTULO_ANTIGO = "SOUTH WALL · ~19,700 FT (6,000 M) · FAR EAST OF THE DEEPEST POINT · 2015"
ROTULO_NOVO = "SOUTH WALL DIVE · ~19,700 FT (6,000 M) · FAR EAST OF THE DEEPEST POINT · 2015"

if len(sys.argv) != 2 or not sys.argv[1].strip():
    sys.exit("uso: python -X utf8 -B out/atlantico-fundo/_pesquisa/corrigir-frase-2015.py \"<a frase nova do roteiro>\"")
NOVA = sys.argv[1].strip()
if "filmed" in NOVA or NOVA == ANTIGA:
    sys.exit("a frase nova não pode dizer 'filmed'")

pendentes = {}  # caminho -> texto novo


def ler(caminho):
    if caminho in pendentes:
        return pendentes[caminho]
    return Path(caminho).read_text(encoding="utf-8")


def trocar(caminho, velho, novo, vezes=1):
    t = ler(caminho)
    n = t.count(velho)
    if n != vezes:
        sys.exit(f"{caminho}: esperava {vezes} ocorrência(s), achei {n}: {velho[:70]!r}")
    pendentes[caminho] = t.replace(velho, novo)


# 1 · o dossiê do roteiro
ED = "roteiros/atlantico-fundo/roteiro-editor.md"
trocar(ED,
       "A parede sul filmada em 2015 pelo Deep Discoverer (Okeanos Explorer), a quase 20.000 ft, longe a leste do ponto; o mergulho "
       "cortado por um problema no robô.",
       "O Deep Discoverer (Okeanos Explorer) desceu em 2015 junto à parede sul, a quase 20.000 ft, longe a leste do ponto, e um "
       "problema no robô cortou o mergulho antes de ele explorar o fundo (a frase corrigida em 28/10/2026: a antiga dizia que ele "
       "filmou a parede, e a reverificação a refutou; `qc-roteiro/f132-reverificacao-2026-10-28.laudo.md`).")
trocar(ED, "SOUTH WALL · ~6,000 M (19,700 FT) · 2015 (F68)", "SOUTH WALL DIVE · ~6,000 M (19,700 FT) · 2015 (F68)")
trocar(ED,
       f'- "{ANTIGA}"\n',
       f'- "{NOVA}"\n'
       "  - Corrigida em 28/10/2026, com o ok do Lucas (\"Corrigir a frase (Recomendado)\", 15:0x). A antiga dizia \"filmed the "
       "trench's south wall\", e a reverificação a refutou: o mergulho voltou sem explorar o fundo (S32, \"Bottom Time: N/A\"; S33, "
       "\"without exploring the seafloor at this dive location\"; `qc-roteiro/f132-reverificacao-2026-10-28.laudo.md`).\n")
trocar(ED,
       "  - Imagem real: o vídeo da NOAA, EX1502 Leg 3 Dive 09, a parede sul escura e o ROV descendo (domínio público; HD: a decisão do Lucas \"As\n"
       "    duas\", pauta §6). Crédito \"NOAA Ocean Exploration, Exploring Puerto Rico's Seamounts, Trenches, and Troughs\". Rótulo \"SOUTH WALL ·\n"
       "    ~6,000 M (19,700 FT) · FAR EAST OF THE DEEPEST POINT · 2015\", nunca \"bottom\" (r1, L19).\n"
       "  - Mapa (antes do vídeo): o alfinete \"2015 · NOAA ROBOT · SOUTH WALL\" em 19°09′N, 65°24′W, e a câmera desce do mapa para o vídeo.\n",
       "  - Imagem real (o Lucas, 28/10/2026, 15:0x: \"Foto do robô e mapa (Recomendado)\"): a foto do Deep Discoverer sendo baixado ao mar\n"
       "    pelo Okeanos Explorer, de 10/04/2015, da mesma expedição e de outro mergulho (NOAA, domínio público; 999 × 666, impressa na mesa).\n"
       "    O vídeo do Dive 09 aberto é 640 × 360 e não mostra parede nenhuma (a água azul, o medidor em 5999, a sala de controle e o\n"
       "    convés): fica fora da cena. Rótulo \"SOUTH WALL DIVE · ~19,700 FT (6,000 M) · FAR EAST OF THE DEEPEST POINT · 2015\" (a\n"
       "    reverificação, N1), nunca \"SOUTH WALL\" sozinho sobre uma imagem nem \"bottom\" (r1, L19); a data da foto é a dela.\n"
       "  - Mapa: o alfinete \"2015 · NOAA ROBOT · SOUTH WALL\" em 19°09′N, 65°24′W (o nome do lugar no resumo da NOAA; a reverificação, N2).\n")

# 2 · o fundamento (F68)
FMD = "pautas/atlantico-fundo/fundamento.md"
FJS = "pautas/atlantico-fundo/fundamento.json"
AFIRM_VELHA = ("Em 26/04/2015, o ROV Deep Discoverer, da NOAA (navio Okeanos Explorer, expedição EX1502, Leg 3, Dive 09), filmou a "
               "parede sul da fossa a 5.999,7 m, a 19°09′N, 65°24′W; o mergulho foi abortado logo depois por um problema no "
               "compensador de óleo.")
AFIRM_NOVA = ("Em 26/04/2015, o ROV Deep Discoverer, da NOAA (navio Okeanos Explorer, expedição EX1502, Leg 3, Dive 09), desceu junto "
              "à parede sul da fossa até 5.999,7 m, a 19°09′N, 65°24′W; o mergulho foi abortado logo depois por um problema no "
              "compensador de óleo, e o robô voltou sem explorar o fundo nem filmar a parede (só a coluna d'água, na descida e na "
              "subida).")
NOTA_VELHA = ("A imagem real da própria fossa, em HD (câmeras HD da Insite Pacific; o original 'up to ProRes' só por e-mail, o que não "
              "o faz 4K): a decisão do Lucas 'As duas' cobre este uso (pauta §6). É a parte leste da fossa, longe do ponto mais "
              "fundo: o rótulo diz a parede a ~6.000 m, nunca o fundo nem o ponto mais fundo.")
NOTA_NOVA = ("Corrigido em 28/10/2026: o fato antigo dizia que o robô filmou a parede sul, e a reverificação o refutou (S32: 'Bottom "
             "Time: N/A', 'Observations in the water column during descent and ascent'; S33: 'came back to the surface without "
             "exploring the seafloor at this dive location'; " + LAUDO + "). O vídeo aberto do mergulho é 640×360 e não mostra a "
             "parede; o HD só sai por pedido. O Lucas, 28/10/2026, 15:0x: 'Foto do robô e mapa (Recomendado)': a cena usa a foto do "
             "robô sendo lançado (10/04/2015, a mesma expedição) e o mapa. É a parte leste da fossa, longe do ponto mais fundo: o "
             "rótulo diz o mergulho junto à parede a ~6.000 m, nunca o fundo nem o ponto mais fundo.")
trocar(FMD, AFIRM_VELHA, AFIRM_NOVA)
trocar(FMD, f"  - Como dizer: {ANTIGA}\n", f"  - Como dizer: {NOVA}\n")
trocar(FMD, NOTA_VELHA, NOTA_NOVA)
fj = json.loads(ler(FJS))
f68 = [x for x in fj.get("fatos", []) if isinstance(x, dict) and x.get("id") == "F68"] if isinstance(fj, dict) else []
if not f68:
    # o fundamento guarda os fatos numa lista de primeiro nível ou dentro de outra chave: procura em qualquer lista
    def achar(no):
        if isinstance(no, dict):
            if no.get("id") == "F68" and "afirmacao" in no:
                return [no]
            for v in no.values():
                r = achar(v)
                if r:
                    return r
        elif isinstance(no, list):
            for v in no:
                r = achar(v)
                if r:
                    return r
        return []
    f68 = achar(fj)
if len(f68) != 1:
    sys.exit(f"{FJS}: achei {len(f68)} F68")
f = f68[0]
if f["afirmacao"] != AFIRM_VELHA or f["como_dizer"] != ANTIGA or not f["nota"].startswith(NOTA_VELHA):
    sys.exit(f"{FJS}: o F68 não está como esperado")
f["afirmacao"] = AFIRM_NOVA
f["como_dizer"] = NOVA
f["nota"] = NOTA_NOVA + f["nota"][len(NOTA_VELHA):]
pendentes[FJS] = json.dumps(fj, ensure_ascii=False, indent=1) + "\n"

# 3 · a tabela de fatos do roteiro (o parágrafo 15)
TAB = "roteiros/atlantico-fundo/qc-roteiro/fatos-tabela.json"
tab = json.loads(ler(TAB))
mudadas = []
for x in tab:
    if x.get("paragrafo") == 15 and x.get("frase") == ANTIGA:
        x["frase"] = NOVA
        mudadas.append(x["id"])
        if x["id"] == "F132":
            x["afirmacao"] = "O ROV da NOAA desceu junto à parede sul da fossa, a 6.000 m (sem filmá-la: voltou sem explorar o fundo)."
            x["reverificacao"] = ("28/10/2026: a frase antiga (\"filmed the trench's south wall\") foi REFUTADA (S32: 'Bottom Time: N/A'; "
                                  "S33: 'without exploring the seafloor at this dive location') e trocada com o ok do Lucas; " + LAUDO)
        if x["id"] == "F134":
            x["reverificacao"] = ("28/10/2026: a frase nova não fala de câmera nem de filmagem; o equipamento continua confirmado, sem "
                                  "papel na fala; " + LAUDO)
if mudadas != ["F132", "F133", "F134", "F135", "F136"]:
    sys.exit(f"{TAB}: as linhas trocadas foram {mudadas}")
pendentes[TAB] = json.dumps(tab, ensure_ascii=False, indent=1) + "\n"

# 4 · a ficha de dados da s47
D47 = "out/atlantico-fundo/_dados/s47.json"
PD = "out/atlantico-fundo/_pesquisa/pauta-dados.json"
trocar(D47, ROTULO_ANTIGO, ROTULO_NOVO, vezes=2)  # o texto_para_tela e o pedido
trocar(D47, "É a parede, nunca o fundo nem o ponto mais fundo.",
       "É o lugar do mergulho, junto à parede sul, nunca o fundo nem o ponto mais fundo: o robô não explorou o fundo nem filmou a "
       "parede (\\\"Bottom Time: N/A\\\"; reverificação F132, 28/10/2026).")
trocar(PD, ROTULO_ANTIGO, ROTULO_NOVO)
trocar("out/atlantico-fundo/_pesquisa/pauta-dados.md", ROTULO_ANTIGO, ROTULO_NOVO)
json.loads(pendentes[D47])
json.loads(pendentes[PD])

for caminho, texto in pendentes.items():
    Path(caminho).write_text(texto, encoding="utf-8", newline="\n")
    print("gravado:", caminho)
print("tabela: frase trocada em", ", ".join(mudadas))
