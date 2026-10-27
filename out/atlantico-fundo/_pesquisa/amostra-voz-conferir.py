# amostra-voz-conferir.py — confere, pelo ouvido local, o que a voz disse na amostra do vídeo 5 (amostra-voz.mjs).
# O faster-whisper (large-v3, do cache local, sem rede) transcreve cada pedido com os tokens de algarismo suprimidos
# (o mesmo recurso do whisperX: nenhum token com 0-9, %, $ ou £ pode sair), e assim escreve o número como a voz o disse:
# "thirteen eighty one" (ano) ou "one thousand three hundred eighty one" (quantidade). Para cada algarismo do roteiro, na
# ordem, procura uma das leituras certas dele; o que não acha vai a "numeros_fora", com a janela do que a voz disse.
# Também compara a transcrição inteira com a cópia para a voz (palavra a palavra, sem pontuação) e lista as palavras de
# probabilidade baixa: é aí que um nome mal dito aparece, mas só o ouvido do Lucas decide nome.
#   python -X utf8 -B out/atlantico-fundo/_pesquisa/amostra-voz-conferir.py [--so=A08,B25]      (cwd = raiz do canal)
# Saída: out/atlantico-fundo/_tmp/amostra-voz/conferencia.json e o resumo na tela. O número que a 1ª passada não acha vai a uma
# 2ª, num recorte do áudio em volta dele (ver janela(), abaixo).
# exit: 0 = todo algarismo lido de um jeito certo · 1 = algum fora · 2 = não rodou.
import difflib
import json
import os
import re
import sys

os.environ["HF_HUB_OFFLINE"] = "1"
PASTA = "out/atlantico-fundo/_tmp/amostra-voz"
SO = []
for a in sys.argv[1:]:
    if a.startswith("--so="):
        SO = [x for x in a[5:].split(",") if x]
    else:
        print(f"opção desconhecida: {a}", file=sys.stderr)
        sys.exit(2)

U = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
     "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
D = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
MESES = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
ORD = {"one": "first", "two": "second", "three": "third", "five": "fifth", "eight": "eighth", "nine": "ninth", "twelve": "twelfth"}


def ate99(n):
    return U[n] if n < 20 else D[n // 10] + ("" if n % 10 == 0 else " " + U[n % 10])


def ate999(n):
    return ate99(n) if n < 100 else U[n // 100] + " hundred" + ("" if n % 100 == 0 else " " + ate99(n % 100))


def milhares(n):
    a, b = divmod(n, 1000)
    return (ate999(a) + " thousand" + (" " + ate999(b) if b else "")) if a else ate999(b)


def ordinal(n):
    w = ate99(n).split(" ")
    r = w[-1]
    w[-1] = ORD.get(r) or (r[:-1] + "ieth" if r.endswith("y") else r + "th")
    return " ".join(w)


def anos(y):
    a, b = divmod(y, 100)
    f = set()
    if 2000 <= y <= 2009:
        f |= {"two thousand" + ("" if y == 2000 else " " + U[y - 2000]), "two thousand and " + U[y - 2000] if y > 2000 else "two thousand"}
        if y > 2000:
            f.add("twenty oh " + U[y - 2000])
    elif 2010 <= y <= 2099:
        f |= {"twenty " + ate99(b), "two thousand " + ate99(b), "two thousand and " + ate99(b)}
    else:
        f.add(ate99(a) + (" hundred" if b == 0 else (" oh " + U[b] if b < 10 else " " + ate99(b))))
    return f


def leituras(tok, kind, m):
    """As leituras certas de um algarismo do roteiro, como listas de palavras."""
    if kind == "data":
        mes, dia, ano = m.group("mes").lower(), int(m.group("dia")), m.group("ano")
        dias = {ordinal(dia), ate99(dia)}
        fins = anos(int(ano)) if ano else {""}
        return {f"{mes} {d} {a}".strip() for d in dias for a in fins}
    if kind == "dec":
        i, d = m.group(0).split(".")
        return {milhares(int(i)) + " point " + " ".join(U[int(x)] for x in d)}
    if kind == "mil":
        n = int(m.group(0).replace(",", ""))
        f = {milhares(n)}
        if 1000 < n < 10000 and n % 100 == 0 and n % 1000:
            f.add(ate99(n // 100) + " hundred")
        if n == 1000:
            f.add("a thousand")
        return f
    if kind == "ano":
        return anos(int(m.group(0)))
    n = int(m.group(0))
    f = {ate999(n)}
    if n == 100:
        f.add("a hundred")
    return f


NUM = re.compile(r"(?P<data>(?P<mes>" + "|".join(x.capitalize() for x in MESES) + r") (?P<dia>\d{1,2})\b(?:, (?P<ano>\d{4}))?)"
                 r"|(?P<dec>\d+\.\d+)|(?P<mil>\d{1,3}(?:,\d{3})+)|(?P<ano4>\b(?:1[3-9]\d\d|20\d\d)\b)|(?P<int>\d{1,3})")


def numeros(texto):
    out = []
    for m in NUM.finditer(texto):
        kind = "data" if m.group("data") else "dec" if m.group("dec") else "mil" if m.group("mil") else "ano" if m.group("ano4") else "int"
        out.append({"algarismo": m.group(0), "tipo": kind, "pos": m.start(), "fim": m.end(), "leituras": sorted(leituras(m.group(0), kind, m))})
    return out


# A 2ª passada, só no algarismo que a 1ª não achou. Com os algarismos suprimidos, o Whisper às vezes PULA o número que ele
# queria escrever em algarismo (mês + ano, "a 2025 study", "between 1381 and 1391"): a transcrição sai sem ele, e isso não
# prova que a voz o pulou. Então se recorta o áudio da palavra de antes à palavra de depois do número, pelo alinhamento por
# caractere da API (o do próprio algarismo não serve: a API dá a "2025" 0,16 s), e se transcreve só o recorte, com os
# algarismos suprimidos e um prompt de estilo, com números por extenso que não são os do vídeo.
PROMPT_ESTILO = "In nineteen forty-five, about seven hundred and twelve thousand people came, and in two thousand three, ninety-one more."


def janela(al, texto, pos, fim, dur):
    ini = pos - 1
    while ini > 0 and not texto[ini - 1].isalpha():
        ini -= 1
    while ini > 0 and texto[ini - 1].isalpha():
        ini -= 1
    fin = fim
    while fin < len(texto) and not texto[fin].isalpha():
        fin += 1
    while fin < len(texto) and texto[fin].isalpha():
        fin += 1
    t0 = al["character_start_times_seconds"][max(0, ini)] - 0.15
    t1 = al["character_end_times_seconds"][min(len(texto), fin) - 1] + 0.15
    return max(0.0, t0), min(dur, t1)


def palavras(t):
    t = t.lower().replace("’", "'").replace("-", " ").replace("—", " ")
    t = re.sub(r"[^a-zà-ÿ' ]+", " ", t)
    return [w.strip("'") for w in t.split() if w.strip("'")]


def casa(tw, j, forma):
    t = j
    for k, f in enumerate(forma):
        while k > 0 and t < len(tw) and tw[t] == "and" and f != "and":
            t += 1
        if t >= len(tw) or tw[t] != f:
            return None
        t += 1
    return t


def main():
    try:
        plano = json.load(open(f"{PASTA}/plano.json", encoding="utf-8"))
    except FileNotFoundError:
        print("PARADO: sem plano.json; rode antes o amostra-voz.mjs", file=sys.stderr)
        return 2
    itens = [p for p in plano["itens"] if not SO or p["id"] in SO]
    falta = [p["id"] for p in itens if not os.path.exists(f"{PASTA}/{p['id']}.wav")]
    if falta:
        print(f"PARADO: faltam os áudios {' '.join(falta)}", file=sys.stderr)
        return 2
    from faster_whisper import WhisperModel, decode_audio
    from faster_whisper.tokenizer import Tokenizer
    from faster_whisper.utils import download_model
    try:
        caminho = download_model("large-v3", local_files_only=True)
    except Exception as e:
        print(f"PARADO: o large-v3 não está no cache local ({type(e).__name__}); este script não baixa nada", file=sys.stderr)
        return 2
    modelo = WhisperModel(caminho, device="cpu", compute_type="int8", cpu_threads=max(1, (os.cpu_count() or 4) - 2), local_files_only=True)
    tok = Tokenizer(modelo.hf_tokenizer, True, task="transcribe", language="en")
    suprimir = [i for i in range(tok.eot) if any(c in "0123456789%$£" for c in tok.decode([i]).lstrip(" "))]
    resultado, fora_total = [], 0
    for p in itens:
        segs, _ = modelo.transcribe(f"{PASTA}/{p['id']}.wav", language="en", beam_size=5, suppress_tokens=[-1] + suprimir,
                                    condition_on_previous_text=False, vad_filter=False, word_timestamps=True)
        ws = [w for s in segs for w in (s.words or [])]
        transcricao = "".join(w.word for w in ws).strip()
        tw = palavras(transcricao)
        nums, ptr, fora = numeros(p["texto"]), 0, []
        for n in nums:
            achou = None
            for j in range(ptr, len(tw)):
                for forma in n["leituras"]:
                    fim = casa(tw, j, forma.split())
                    if fim is not None:
                        achou = (j, fim, forma)
                        break
                if achou:
                    break
            if achou:
                n["ouvido"] = " ".join(tw[achou[0]:achou[1]])
                n["passada"] = 1
                ptr = achou[1]
                continue
            n["janela"] = " ".join(tw[max(0, ptr - 2):ptr + 12])
            rec = json.load(open(f"{PASTA}/{p['id']}.json", encoding="utf-8"))
            t0, t1 = janela(rec["alinhamento"], p["texto"], n["pos"], n["fim"], rec["duracao_s"])
            audio = decode_audio(f"{PASTA}/{p['id']}.wav", sampling_rate=16000)[int(t0 * 16000):int(t1 * 16000)]
            s2, _ = modelo.transcribe(audio, language="en", beam_size=5, suppress_tokens=[-1] + suprimir, initial_prompt=PROMPT_ESTILO,
                                      condition_on_previous_text=False, vad_filter=False)
            t2 = " ".join(s.text.strip() for s in s2)
            w2 = palavras(t2)
            n["recorte"] = {"de_s": round(t0, 2), "a_s": round(t1, 2), "transcricao": t2}
            for j in range(len(w2)):
                for forma in n["leituras"]:
                    fim2 = casa(w2, j, forma.split())
                    if fim2 is not None:
                        n["ouvido"], n["passada"] = " ".join(w2[j:fim2]), 2
                        break
                if n.get("ouvido"):
                    break
            if not n.get("ouvido"):
                n["ouvido"] = None
                fora.append(n)
        exp = palavras(p["texto_voz"])
        ops = [(op, " ".join(exp[a:b]), " ".join(tw[c:d])) for op, a, b, c, d in
               difflib.SequenceMatcher(None, exp, tw, autojunk=False).get_opcodes() if op != "equal"]
        baixas = [(w.word.strip(), round(w.probability, 2)) for w in ws if w.probability < 0.6]
        fora_total += len(fora)
        resultado.append({"id": p["id"], "grupo": p["grupo"], "texto": p["texto"], "transcricao": transcricao, "numeros": nums,
                          "numeros_fora": [n["algarismo"] for n in fora], "diferencas_da_copia": ops, "palavras_baixas": baixas})
        marca = "OK " if not fora else "FORA"
        print(f"{marca} {p['id']}: {len(nums) - len(fora)}/{len(nums)} números", end="")
        rec2 = [n for n in nums if n.get("passada") == 2]
        if rec2:
            print(" · no recorte: " + "; ".join(f"{n['algarismo']} = {n['ouvido']}" for n in rec2), end="")
        if fora:
            print(" · fora: " + "; ".join(f"{n['algarismo']} (recorte {n['recorte']['de_s']}–{n['recorte']['a_s']} s: {n['recorte']['transcricao']})" for n in fora), end="")
        if ops:
            print(" · difere da cópia: " + "; ".join(f"[{a}]→[{b}]" for _, a, b in ops), end="")
        if baixas:
            print(" · prob. baixa: " + ", ".join(f"{w} {pr}" for w, pr in baixas), end="")
        print()
    json.dump({"modelo": "faster-whisper large-v3 (cache local), cpu int8, beam 5, algarismos suprimidos", "pedidos": len(resultado),
               "numeros": sum(len(r["numeros"]) for r in resultado), "numeros_fora": fora_total, "itens": resultado},
              open(f"{PASTA}/conferencia.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"\n{sum(len(r['numeros']) for r in resultado) - fora_total} de {sum(len(r['numeros']) for r in resultado)} algarismos lidos de um jeito certo; {fora_total} fora")
    return 0 if fora_total == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
