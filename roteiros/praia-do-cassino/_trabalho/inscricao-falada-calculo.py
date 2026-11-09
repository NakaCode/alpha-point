# Calcula a janela da inscrição falada do Cassino (só leitura; não grava nada fora da saída padrão).
import json, re, sys

RAIZ = "C:/projetos/alpha-point/"
d = json.load(open(RAIZ + "out/praia-do-cassino/narracao.json", encoding="utf-8"))
segs = d["segmentos"]
falas = [s for s in segs if s["tipo"] == "fala"]
total_audio = d["audio"]["duracaoSec"]
cauda = d["tratamento_canal"]["cauda_tela_final"]
fala_fim = max(s["end"] for s in falas)
print("duracaoSec do wav:", total_audio, "| cauda:", cauda["segundos"], "de", cauda["de_s"], "ate", cauda["ate_s"])
print("fim da última fala:", fala_fim, "| duracaoSec - cauda =", round(total_audio - cauda["segundos"], 2))
BASE = fala_fim          # fala, sem a cauda
BASE_C = total_audio     # vídeo com a cauda

# confere o texto da narração com a cópia para a voz
t = open(RAIZ + "out/praia-do-cassino/roteiro.md", encoding="utf-8").read()
corpo = t.split("---", 2)[2].strip()
pars = [p.strip() for p in corpo.split("\n\n") if p.strip()]
print("parágrafos da cópia para a voz:", len(pars), "| falas na narração:", len(falas))
iguais = all(pars[i] == falas[i]["texto"] for i in range(len(falas)))
print("texto da narração == cópia para a voz, parágrafo a parágrafo:", iguais)
print("caracteres: soma dos parágrafos", sum(len(p) for p in pars), "| JSON", d["custo"]["caracteres_total"])

def mmss(x):
    m, s = divmod(x, 60)
    return "%d:%04.1f" % (m, s)

lo, hi = 0.35 * BASE, 0.60 * BASE
loC, hiC = 0.35 * total_audio, 0.60 * total_audio
print("\njanela (fala, base %.1f s): %.1f s (%s) a %.1f s (%s)" % (BASE, lo, mmss(lo), hi, mmss(hi)))
print("janela (vídeo com a cauda, base %.1f s): %.1f s (%s) a %.1f s (%s)" % (total_audio, loC, mmss(loC), hiC, mmss(hiC)))
print("\n n | linha | início | fim | dur | %ini | %fim | %fim(c/ cauda) | chars | palavras | custo JSON | no_janela(fala) | no_janela(c/cauda)")
tot_chars = 0
for s in falas:
    n = s["trecho"]
    pi, pf = 100 * s["start"] / BASE, 100 * s["end"] / BASE
    pfc = 100 * s["end"] / total_audio
    pal = len(s["texto"].split())
    jan = "sim" if lo <= s["end"] <= hi else "-"
    janc = "sim" if loC <= s["end"] <= hiC else "-"
    print("%2d | %2d | %s | %s | %5.1f | %5.1f | %5.1f | %5.1f | %4d | %3d | %3d | %s | %s" % (
        n, s["linha"], mmss(s["start"]), mmss(s["end"]), s["end"] - s["start"], pi, pf, pfc,
        s["caracteres"], pal, s["characterCost"], jan, janc))

# ritmo real da narração
fala_s = sum(s["end"] - s["start"] for s in falas)
chars = sum(s["caracteres"] for s in falas)
palavras = sum(len(s["texto"].split()) for s in falas)
cost = sum(s["characterCost"] for s in falas)
print("\nritmo: %.2f caracteres/s | %.1f palavras/min | custo %.4f créditos/caractere (JSON: %d/%d)" % (
    chars / fala_s, 60 * palavras / fala_s, cost / chars, cost, chars))
cps = chars / fala_s
wps = palavras / fala_s

# opções de frase
opcoes = {
    "1": "If a beach that changes its name is your kind of story, subscribe to Alpha Point.",
    "2": "If you like tracing a claim back to its source, subscribe to Alpha Point.",
    "3": "If you're enjoying the map so far, subscribe to Alpha Point.",
    "R": "If you've followed the coast this far, subscribe to Alpha Point.",
}
proibidas = ["smash", "like button", "ring the bell", "don't forget", "make sure", "please", "comment", "every week",
             "shocking", "insane", "crazy", "breaking", "recently", "yesterday", "this week", "experts say", "most of you"]
print("\nopções:")
for k, f in opcoes.items():
    w = f.split()
    ok = "subscribe to Alpha Point" in f
    bad = [x for x in proibidas if x in f.lower()]
    print(" %s | %2d palavras | %3d chars | ~%.1f s (ritmo da narração) | 'subscribe to Alpha Point': %s | proibidas: %s" % (
        k, len(w), len(f), len(f) / cps, ok, bad or "nenhuma"))
    print("    ", f)

# custo
def custo(n, extra_chars):
    s = falas[n - 1]
    novo = s["caracteres"] + extra_chars
    return s["caracteres"], novo, 0.48 * s["caracteres"], 0.48 * novo, s["characterCost"], s["characterCost"] / s["caracteres"]

print("\ncustos (créditos a 0,48/caractere; entre parênteses, a razão real do parágrafo):")
for n in (9, 13, 11, 12):
    for k in ("1", "2", "3"):
        extra = 1 + len(opcoes[k])  # espaço + frase
        c0, c1, k0, k1, jc, razao = custo(n, extra)
        print(" trecho %2d, opção %s: %4d -> %4d chars | %.0f -> %.0f créditos | só o acréscimo: %.0f | razão do parágrafo %.4f (custo JSON atual %d)" % (
            n, k, c0, c1, k0, k1, k1 - k0, razao, jc))

chui = [8, 9, 11, 21]
c_chui = sum(falas[n - 1]["caracteres"] for n in chui)
print("\nparágrafos do Chuí", chui, ": chars", [falas[n - 1]["caracteres"] for n in chui], "= %d chars = %.0f créditos" % (c_chui, 0.48 * c_chui))

# posição da frase depois da inserção (opção 1 no fim do trecho 9, e opção 1 no fim do trecho 13)
for n, k in ((9, "1"), (13, "1"), (11, "1"), (12, "1")):
    s = falas[n - 1]
    dur = len(opcoes[k]) / cps
    ini = s["end"]
    novo_fala = BASE + dur
    novo_total = total_audio + dur
    print("\ntrecho %d: a frase começa em %.1f s (%s) e vai a ~%.1f s; fala nova %.1f s, vídeo novo %.1f s" % (n, ini, mmss(ini), ini + dur, novo_fala, novo_total))
    print("   início da frase: %.1f %% da fala nova | %.1f %% do vídeo novo (c/ cauda); fim da frase: %.1f %% | %.1f %%" % (
        100 * ini / novo_fala, 100 * ini / novo_total, 100 * (ini + dur) / novo_fala, 100 * (ini + dur) / novo_total))
    print("   limite dos 35 %%: fala nova %.1f s | vídeo novo %.1f s" % (0.35 * novo_fala, 0.35 * novo_total))
