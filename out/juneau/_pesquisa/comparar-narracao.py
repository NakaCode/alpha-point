# Confere palavra a palavra o que a voz disse (transcrição local, .words.json) contra o texto aprovado do bloco.
#
# Normaliza os dois lados antes de comparar (CLAUDE.md: "Normalize os números antes de comparar"): caixa baixa,
# hífen vira espaço, pontuação sai; e o que o Whisper escreve em algarismo vira palavra no formato do roteiro
# ("1974" → "nineteen seventy four", "1906" → "nineteen oh six", "27th" → "twenty seventh", "90%" → "ninety
# percent", "$265 million" → "two hundred sixty five million dollars"). Sigla em maiúsculas ("NFL", "U.S.") vira
# letras soltas, como o roteiro as escreve para a voz ("N F L").
#
#   python out/juneau/_pesquisa/comparar-narracao.py <bloco-N.txt> <versao.words.json> [...] [--json=<saida>]
# Diz, para cada versão: quanto do texto foi dito, e cada trecho PULADO, TROCADO ou ACRESCENTADO, com o minuto.
import difflib, json, os, re, sys

for fluxo in (sys.stdout, sys.stderr):
    fluxo.reconfigure(encoding="utf-8", errors="replace")

UN = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split()
DEZ = "_ _ twenty thirty forty fifty sixty seventy eighty ninety".split()
ORD = {"one": "first", "two": "second", "three": "third", "five": "fifth", "eight": "eighth", "nine": "ninth", "twelve": "twelfth"}

def ate99(n):
    return UN[n] if n < 20 else DEZ[n // 10] + ("" if n % 10 == 0 else " " + UN[n % 10])

def cardinal(n):
    if n < 100: return ate99(n)
    if n < 1000: return UN[n // 100] + " hundred" + ("" if n % 100 == 0 else " " + ate99(n % 100))
    for valor, nome in ((10**9, "billion"), (10**6, "million"), (1000, "thousand")):
        if n >= valor:
            resto = n % valor
            return cardinal(n // valor) + " " + nome + ("" if resto == 0 else " " + cardinal(resto))

def ano(n):
    if 2000 <= n <= 2009: return "two thousand" + ("" if n == 2000 else " " + UN[n - 2000])
    a, b = divmod(n, 100)
    if b == 0: return ate99(a) + " hundred"
    if b < 10: return ate99(a) + " oh " + UN[b]
    return ate99(a) + " " + ate99(b)

def ordinal(n):
    palavras = cardinal(n).split()
    u = palavras[-1]
    palavras[-1] = ORD.get(u, u[:-1] + "ieth" if u.endswith("y") else u + "th")
    return " ".join(palavras)

def verbalizar(tok, seguinte):
    """Um token do Whisper com algarismo → palavras no formato do roteiro. Devolve (texto, consumiu_seguinte)."""
    t = tok.strip(".,;:!?\"()")
    m = re.fullmatch(r"\$([\d,]+(?:\.\d+)?)", t)
    if m:
        num = numero(m.group(1))
        escala = seguinte.strip(".,;:!?").lower() if seguinte else ""
        if escala in ("thousand", "million", "billion", "trillion"):
            return f"{num} {escala} dollars", True
        return f"{num} dollars", False
    m = re.fullmatch(r"(\d{1,2})-(\d{1,2})", t)      # placar de votação: "6-3" é como o Whisper escreve "six to three"
    if m: return cardinal(int(m.group(1))) + " to " + cardinal(int(m.group(2))), False
    m = re.fullmatch(r"([\d,]+(?:\.\d+)?)%", t)
    if m: return numero(m.group(1)) + " percent", False
    m = re.fullmatch(r"(\d+)(st|nd|rd|th)", t)
    if m: return ordinal(int(m.group(1))), False
    m = re.fullmatch(r"(\d{4})s", t)
    if m: return ano(int(m.group(1))).rsplit(" ", 1)[0] + " " + re.sub(r"y$", "ie", ano(int(m.group(1))).rsplit(" ", 1)[1]) + "s", False
    if re.fullmatch(r"\d{4}", t) and (1100 <= int(t) <= 2099): return ano(int(t)), False
    if re.fullmatch(r"[\d,]+(?:\.\d+)?", t): return numero(t), False
    return None, False

def numero(s):
    if "." in s:
        inteiro, dec = s.split(".")
        return cardinal(int(inteiro.replace(",", "") or 0)) + " point " + " ".join(UN[int(d)] for d in dec)
    return cardinal(int(s.replace(",", "")))

# Grafias do TRANSCRITOR que soam igual ao roteiro: não são erro da voz. Contam à parte ("equivalências"), para
# ninguém esconder nelas uma troca de verdade.
MESMO_SOM = {"capitol": "capital", "glen": "glenn", "su": "sue", "it's": "its", "percent": "percent"}
ROMANOS = {"ii": "two", "iii": "three", "iv": "four", "vi": "six", "vii": "seven", "viii": "eight", "ix": "nine"}
VOCAB = set()   # palavras do roteiro: sigla em maiúsculas que existe como palavra no roteiro ("FRANK") fica palavra

def tokens(texto):
    """Texto corrido → tokens normalizados."""
    texto = texto.replace("’", "'").replace("‘", "'")
    texto = re.sub(r"\b((?:[A-Z]\.){2,})", lambda m: " ".join(m.group(1).replace(".", "")), texto)   # U.S. → U S
    texto = re.sub(r"\b(?:War|Two|World)\s+(II|III|IV)\b", lambda m: m.group(0)[: -len(m.group(1))] + ROMANOS[m.group(1).lower()], texto)
    texto = re.sub(r"\b([A-Z]{2,5})\b", lambda m: m.group(1) if m.group(1).lower() in VOCAB else " ".join(m.group(1)), texto)   # NFL → N F L
    texto = texto.replace("%", " percent ")
    texto = re.sub(r"[—–\-/]", " ", texto.lower())
    texto = re.sub(r"[^a-z0-9$%.,' ]", " ", texto)
    brutos = texto.split()
    out, i = [], 0
    while i < len(brutos):
        b, seg = brutos[i], brutos[i + 1] if i + 1 < len(brutos) else ""
        if re.search(r"\d", b):
            v, pulou = verbalizar(b, seg)
            if v:
                out.extend(v.split()); i += 2 if pulou else 1; continue
        b = re.sub(r"[.,]", "", b).strip("'")
        if b: out.append(b)
        i += 1
    return out

def tokens_com_tempo(words):
    """Palavras do Whisper → tokens normalizados, cada um com o tempo da palavra de origem."""
    # O Whisper às vezes parte um número em duas palavras ("$2" + ".8", "6" + "-3"): junta antes de verbalizar.
    juntas = []
    for w in words:
        if juntas and re.match(r"\s*[.\-]\d", w["w"]) and re.search(r"\d\s*$", juntas[-1]["w"]):
            juntas[-1] = {**juntas[-1], "w": juntas[-1]["w"].rstrip() + w["w"].strip()}
        else:
            juntas.append(w)
    words = juntas
    out, i = [], 0
    while i < len(words):
        w = words[i]; seg = words[i + 1]["w"] if i + 1 < len(words) else ""
        texto = w["w"]
        consumiu = False
        # "World War II" chega palavra por palavra: o "II" sozinho viraria "I I" (sigla)
        if i and texto.strip(" .,;:") in ("II", "III", "IV") and words[i - 1]["w"].strip(" .,").lower() == "war":
            texto = ROMANOS[texto.strip(" .,;:").lower()]
        if re.search(r"\d", texto):
            v, consumiu = verbalizar(texto.lower(), seg)
            if v: texto = v
        for t in tokens(texto):
            out.append((t, w["start"]))
        i += 2 if consumiu else 1
    return out

def mmss(s): return f"{int(s // 60)}:{int(s % 60):02d}"

def comparar(roteiro, arq_words):
    roteiro = re.sub(r"\A---\n.*?\n---\n", "", roteiro, flags=re.S)   # front matter (roteiro.md do narrar) não é fala
    ref = tokens(roteiro)
    VOCAB.update(ref)
    dados = json.load(open(arq_words, encoding="utf-8"))
    hip = tokens_com_tempo(dados["words"])
    equivalencias = {}
    for t, _ in hip:
        if t in MESMO_SOM and MESMO_SOM[t] != t:
            equivalencias[f"{t}→{MESMO_SOM[t]}"] = equivalencias.get(f"{t}→{MESMO_SOM[t]}", 0) + 1
    hip = [(MESMO_SOM.get(t, t), s) for t, s in hip]
    ht = [t for t, _ in hip]
    sm = difflib.SequenceMatcher(None, ref, ht, autojunk=False)
    iguais = sum(b.size for b in sm.get_matching_blocks())
    ocorr = []
    for op, a0, a1, b0, b1 in sm.get_opcodes():
        if op == "equal": continue
        quando = hip[b0][1] if b0 < len(hip) else (hip[-1][1] if hip else 0)
        tipo = {"delete": "PULOU", "insert": "ACRESCENTOU", "replace": "TROCOU"}[op]
        # a palavra acrescentada repete a anterior ("the point. point."): eco da voz OU emenda do transcritor
        n = b1 - b0
        if op == "insert" and (ht[b0:b1] == ht[max(0, b0 - n):b0] or ht[b0:b1] == ht[b1:b1 + n]):
            tipo = "REPETIU"
        ocorr.append({"tipo": tipo,
                      "minuto": mmss(quando), "segundos": round(quando, 1),
                      "roteiro": " ".join(ref[a0:a1]), "ouvido": " ".join(ht[b0:b1]), "palavras_do_roteiro": a1 - a0,
                      "contexto": " ".join(ref[max(0, a0 - 6):a0]) + " [[" + " ".join(ref[a0:a1]) + "]] " + " ".join(ref[a1:a1 + 6])})
    return {"arquivo": arq_words, "duracao": dados.get("duracao"), "equivalencias_de_grafia": equivalencias, "palavras_roteiro": len(ref), "palavras_ouvidas": len(ht),
            "iguais": iguais, "cobertura": round(100 * iguais / max(1, len(ref)), 1),
            "puladas": sum(o["palavras_do_roteiro"] for o in ocorr if o["tipo"] == "PULOU"), "ocorrencias": ocorr}

if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith("--json=")]
    saida_json = next((a[7:] for a in sys.argv[1:] if a.startswith("--json=")), None)
    roteiro = open(args[0], encoding="utf-8").read()
    rel = []
    for w in args[1:]:
        r = comparar(roteiro, w); rel.append(r)
        print(f"\n== {os.path.basename(w)} · {r['duracao']} s · {r['palavras_ouvidas']} de {r['palavras_roteiro']} palavras · "
              f"cobertura {r['cobertura']} % · {r['puladas']} palavras puladas"
              + (f" · grafias do transcritor: {r['equivalencias_de_grafia']}" if r['equivalencias_de_grafia'] else ""))
        for o in r["ocorrencias"]:
            if o["tipo"] == "PULOU" and o["palavras_do_roteiro"] >= 1 or o["tipo"] != "PULOU":
                print(f"  {o['minuto']} {o['tipo']:<11} roteiro: \"{o['roteiro'][:140]}\"" + (f" → ouvido: \"{o['ouvido'][:80]}\"" if o["ouvido"] else ""))
    if saida_json:
        json.dump({"roteiro": args[0], "versoes": rel}, open(saida_json, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
