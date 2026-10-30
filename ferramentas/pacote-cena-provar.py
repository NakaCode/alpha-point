#!/usr/bin/env python3
"""
ferramentas/pacote-cena-provar.py · a prova do ferramentas/pacote-cena.py.

USO (da raiz do canal):
    python -X utf8 -B ferramentas/pacote-cena-provar.py [<proj> [<cena>…]]
  Sem argumentos: o vídeo 4 (atlantico-fundo), nas cenas de tipos diferentes abaixo (CENAS_PADRAO).
  Grava os pacotes em out/<proj>/_tmp/pacotes/prova/ (fora do git) e sai 0 só sem nenhuma falha.

O QUE PROVA, cena a cena, lendo o pacote gravado (o .md) e as fontes direto do disco, sem importar o script:
  - cada "Fonte:" e cada procedência citada traz o sha256 de hoje do arquivo;
  - a fala: as mesmas palavras da janela do espelho (inSec ≤ início < inSec + dur), na mesma ordem, com o mesmo
    início, fim e tempo na cena (3 casas); o primeiro e o último índice batem com o `_borda.palavras` do espelho
    (da mãe e da última filha); a cena sem fala diz que não tem;
  - o espelho: a janela de cada segmento e os planos (de, até, regime); todo campo do segmento pelo nome, e cada
    needs.dados inteiro;
  - a regência: o mesmo número de beats, com o mesmo t0, t1 e `palavras` (texto exato), e o `exige` e o `porque` de
    cada beat inteiros no pacote;
  - o conceito: a metáfora e a técnica da cena (e das filhas) inteiras;
  - os textos de tela: os mesmos itens de `_textos_por_cena` da cena (o índice, t0, t1, papel e o texto exato), e a
    nota de cada um inteira;
  - as mídias: cada veredito do pacote é o mesmo da conferência (o id, a cena e o veredito); o pacote dá a mesma
    resposta que a regência deu ao casar a mídia com o veredito (`_conferencia_de_janelas.usos`); o arquivo de banco
    pago casa pela URL da procedência com `mesmo_item: true`; toda mídia que o HTML cita por caminho literal e toda
    mídia dos beats da regência estão no pacote;
  - o laudo: o aprovado, as notas de cada lente e o número de correções pedidas;
  - as notas laterais: o caminho de cada uma existe na fonte, o item cita a cena, e o texto começa como na fonte;
  - as exceções: as mesmas da cena, com a reprovação literal e o sha1, e a comparação com o sha1 do HTML de hoje; e
    todo campo do veredito e da exceção da cena no pacote, pelo nome, ou na linha "no original, sem copiar";
  - a cobertura (desde o cético de 30/10/2026): toda frase do espelho, da regência, do conceito, do textos-tela e da
    conferência que cita a cena (pelo id ou pela faixa da prosa, achada aqui por outro código), fora da entrada dela e
    do histórico, tem o caminho no pacote: numa nota lateral do arquivo, numa linha da parte 9 ou, no conceito, num
    `fluxo[i]` da parte 4. A 1.0 deixava fora, por exemplo, a decisão do Lucas "A IMAGEM DE s47" (espelho ›
    `_decisoes_do_lucas[9]`).
E imprime o tamanho de cada pacote contra o que a peça leria hoje (ver `medir_hoje`): os trechos da cena em JSON,
como estão nos arquivos, mais as linhas que um `grep -n <cena>` daria nos seis arquivos grandes; e, como teto, os
arquivos inteiros. O token conta ~2,0 caracteres (out/_modelos/esforco-2026-10-29, razao-tokens.py).

No vídeo 4, aplica ainda 21 mutações numa cópia do pacote da s02 (uma palavra, um tempo, um texto, um veredito, uma
exceção, uma impressão digital…) e exige que cada uma dê ao menos uma falha.

LIMITES: confere a cópia, não o julgamento (o script não julga). As notas laterais (regência e textos-tela fora da
entrada da cena) se conferem pelo caminho (ele existe na fonte, e o item cita a cena) e pelo começo do texto, não
pelo conteúdo inteiro. A medida de "hoje" é uma estimativa em
caracteres, não o custo em voltas que a página mediu nas transcrições.
"""
import hashlib
import json
import os
import re
import subprocess
import sys

CENAS_PADRAO = {
    "atlantico-fundo": [
        ("s02", "mapa, com duas exceções de portão e a foto da s01 reusada"),
        ("s03", "animação desenhada (desenho, ANIMAÇÃO em Opus)"),
        ("s14", "foto: o retrato (pessoa) sobre a mesa"),
        ("s17", "foto: a gravura e o retrato"),
        ("s10", "footage da caça (Shutterstock)"),
        ("s51", "footage da caça (Envato)"),
        ("s16", "documento (a página de 1883)"),
        ("s31", "filha de fusão: vira o pacote da mãe s30 (mapa)"),
        ("s39", "mãe de fusão com a foto da filha s41"),
        ("s63", "mãe de fusão, foto casada pelo rascunho julgado de outra pasta"),
        ("s75", "a tela final, sem fala"),
    ],
}
CHARS_POR_TOKEN = 2.0
RE_CENA = re.compile(r"(?<![A-Za-z0-9])s(\d{2,3})(?![0-9])")
falhas = []


def falha(cena, msg):
    falhas.append("%s: %s" % (cena, msg))


def sha256(c):
    h = hashlib.sha256()
    with open(c, "rb") as f:
        for b in iter(lambda: f.read(8 << 20), b""):
            h.update(b)
    return h.hexdigest()


def norm(s):
    return re.sub(r"\s+", " ", s or "").strip()


def ler(c):
    with open(c, encoding="utf-8") as f:
        return json.load(f)


def json_no_fim(linha, desde):
    """Lê a string JSON que começa no primeiro '"' a partir de `desde`."""
    i = linha.index('"', desde)
    v, _ = json.JSONDecoder().raw_decode(linha[i:])
    return v


NADA = object()


def resolver(fonte, caminho):
    """`a.b[2].c` na fonte; `auditoria._arco.picos` (a lista, sem índice) também."""
    v = fonte
    for parte in re.findall(r"[^.\[\]]+|\[\d+\]", caminho):
        if parte.startswith("["):
            i = int(parte[1:-1])
            if not isinstance(v, list) or i >= len(v):
                return NADA
            v = v[i]
        else:
            if not isinstance(v, dict) or parte not in v:
                return NADA
            v = v[parte]
    return v


# A faixa da prosa ("s45–s48"), não a de um nome de arquivo ("…-s10-s51.jpg"): escrita de novo aqui, sem importar o script.
RE_FAIXA_P = re.compile(r"(?<![A-Za-z0-9_/.-])s(\d{2,3})\s*[–-]\s*s(\d{2,3})(?![0-9A-Za-z_/]|-[A-Za-z0-9]|\.[A-Za-z0-9])")
META_P = {"_entradas_sha256", "_entradas_conferidas", "_como_ler", "projeto", "gerado_em", "_quem", "_proj"}
# (arquivo, a lista das entradas por cena, o campo da cena, o histórico de fora, o título das notas laterais no pacote)
COBERTURA = (("espelho.json", "segmentos", "id", set(), "### Notas do espelho que citam a cena"),
             ("regencia.json", "cenas", "id", set(), "### Notas da regência que citam a cena"),
             ("conceito-visual.json", "cenas", None, set(), "### Notas do conceito que citam a cena"),
             ("textos-tela.json", "_textos_por_cena", "cena", {"_consertos"}, "### Notas do textos-tela que citam a cena"),
             ("_pesquisa/conferencia-midia.json", "candidatos", "cena", {"substituidos"}, "### Notas da conferência que citam a cena"))


def cita_cena(s, ids):
    for m in RE_CENA.finditer(s):
        if "s" + m.group(1) in ids:
            return True
    for m in RE_FAIXA_P.finditer(s):
        a, b, w = int(m.group(1)), int(m.group(2)), max(len(m.group(1)), 2)
        if 0 < b - a < 200 and any(("s%0*d" % (w, n)) in ids for n in range(a, b + 1)):
            return True
    return False


def provar_cobertura(cena, txt, linhas, base, mae, ids):
    """Toda folha de texto dos cinco arquivos que cita a cena, fora da entrada dela e do histórico, tem o caminho (ou o
    de uma nota que a contém) no pacote: numa linha da parte 9 (`arquivo › caminho`), numa nota lateral do arquivo, ou,
    no conceito, numa linha `- fluxo[i]:` da parte 4. Devolve quantas folhas conferiu."""
    cobertos = {rel: set() for rel, *_ in COBERTURA}
    titulos = {t: rel for rel, _, _, _, t in COBERTURA}
    sec = None
    for l in linhas:
        if l.startswith("## ") or l.startswith("### "):
            sec = next((rel for t, rel in titulos.items() if l.startswith(t)), None)
        m = re.match(r"^- `([^`]+?) › ([^`]+)`", l)
        if m and m.group(1) in cobertos:
            cobertos[m.group(1)].add(m.group(2))
            continue
        m = re.match(r"^- `([^`]+)`: ", l)
        if m and sec:
            cobertos[sec].add(m.group(1))
        m = re.match(r"^- (fluxo\[\d+\]): run ", l)
        if m:
            cobertos["conceito-visual.json"].add(m.group(1))
    n = 0

    def coberto(rel, cam):
        return any(cam == c or cam.startswith(c + ".") or cam.startswith(c + "[") for c in cobertos[rel])

    for rel, lista, chave, hist, _ in COBERTURA:
        if not os.path.isfile(base + "/" + rel):
            continue
        d = ler(base + "/" + rel)
        proprias = set()
        L = d.get(lista)
        if isinstance(L, list):
            for i, e in enumerate(L):
                if isinstance(e, dict) and ((e.get(chave) == mae) if rel == "regencia.json" else (e.get(chave) in ids or e.get("_mergedInto") in ids)):
                    proprias.add("%s[%d]" % (lista, i))
        elif isinstance(L, dict):
            proprias = {"%s.%s" % (lista, k) for k in L if k in ids}
        pilha = [(k, v) for k, v in d.items() if k not in META_P and k not in hist]
        while pilha:
            cam, v = pilha.pop()
            if cam in proprias:
                continue
            if isinstance(v, dict):
                pilha.extend(("%s.%s" % (cam, k), x) for k, x in v.items())
            elif isinstance(v, list):
                pilha.extend(("%s[%d]" % (cam, i), x) for i, x in enumerate(v))
            elif isinstance(v, str) and cita_cena(v, ids):
                n += 1
                if not coberto(rel, cam):
                    falha(cena, "a frase `%s › %s`, que cita a cena, não está no pacote" % (rel, cam))
    if "## 9. As outras menções à cena" not in txt:
        falha(cena, "falta a parte 9 (as outras menções)")
    return n


def provar_cena(proj, pedido, md_path, base):
    words = ler(base + "/words.json")
    esp = ler(base + "/espelho.json")
    segs = {s["id"]: s for s in esp["segmentos"]}
    mae = segs[pedido].get("_mergedInto") or pedido
    filhos = [s["id"] for s in esp["segmentos"] if s.get("_mergedInto") == mae]
    ids = {mae} | set(filhos)
    seg = segs[mae]
    txt = open(md_path, encoding="utf-8").read()
    linhas = txt.splitlines()
    cena = mae
    if not linhas[0].startswith("# Pacote da cena %s · %s" % (mae, proj)):
        falha(cena, "o título não é o da mãe %s" % mae)

    # A. as impressões digitais
    n_fontes = 0
    for m in re.finditer(r"(?:Fonte|procedência): `([^`]+)` · sha256 `([0-9a-f]{64})`", txt):
        n_fontes += 1
        if not os.path.isfile(m.group(1)):
            falha(cena, "a fonte %s não existe" % m.group(1))
        elif sha256(m.group(1)) != m.group(2):
            falha(cena, "o sha256 de %s não bate" % m.group(1))
    if n_fontes < 5:
        falha(cena, "só %d impressões digitais no pacote" % n_fontes)
    html = base + "/graphics/%s.html" % mae
    sha1 = hashlib.sha1(open(html, "rb").read()).hexdigest() if os.path.isfile(html) else None
    if sha1 and ("sha1 `%s`" % sha1) not in txt:
        falha(cena, "o sha1 do HTML de hoje não está no cabeçalho")

    # B. a fala
    ini, fim = seg["inSec"], seg["inSec"] + seg["dur"]
    esperadas = [i for i, w in enumerate(words) if w["start"] >= ini - 1e-6 and w["start"] < fim - 1e-6]
    achadas = []
    for l in linhas:
        if re.match(r"^\d+\t", l):
            i, w, a, b, r = l.split("\t")
            achadas.append((int(i), w, a, b, r))
    if [a[0] for a in achadas] != esperadas:
        falha(cena, "a fala: índices %s… em vez de %s…" % ([a[0] for a in achadas][:3], esperadas[:3]))
    for i, w, a, b, r in achadas:
        if i >= len(words):
            continue
        W = words[i]
        if w != W["w"] or a != "%.3f" % W["start"] or b != "%.3f" % W["end"]:
            falha(cena, "a palavra %d não bate (%s %s %s)" % (i, w, a, b))
        if abs(float(r.lstrip("+")) - (W["start"] - ini)) > 0.0015:
            falha(cena, "o tempo na cena da palavra %d não bate" % i)
    if not esperadas:
        if "Sem fala" not in txt:
            falha(cena, "a cena sem fala não diz que não tem")
    else:
        b0 = (seg.get("_borda") or {}).get("palavras")
        ult = segs[filhos[-1]] if filhos else seg
        b1 = (ult.get("_borda") or {}).get("palavras")
        if b0 and esperadas[0] != b0[0]:
            falha(cena, "a 1ª palavra não é a do _borda do espelho")
        if b1 and esperadas[-1] != b1[1]:
            falha(cena, "a última palavra não é a do _borda do espelho")
    n_palavras = len(achadas)

    # C. o espelho
    for sid in [mae] + filhos:
        s = segs[sid]
        cab = "### %s · %.3f → %.3f s (%.3f s)" % (sid, s["inSec"], s["inSec"] + s["dur"], s["dur"])
        if cab not in txt:
            falha(cena, "o espelho: falta o cabeçalho de %s com a janela" % sid)
        for p in s.get("_planos") or []:
            if ("- plano %.3f–%.3f s · %s ·" % (p["de"], p["ate"], p.get("regime"))) not in txt:
                falha(cena, "o espelho: falta o plano %s–%s de %s" % (p["de"], p["ate"], sid))
        # todo campo do segmento está no bloco dele, pelo nome (a 1.0 só nomeava o motivo, a necessidade de mídia, a
        # licença, o relevo…, e contava os needs.dados sem copiá-los); os do cabeçalho, da fala e da linha do modo, não
        i0 = next((k for k, l in enumerate(linhas) if l.startswith(cab)), None)
        if i0 is not None:
            bloco = []
            for l in linhas[i0 + 1:]:
                if l.startswith("#"):
                    break
                bloco.append(l)
            ditos = {m.group(1) for m in (re.match(r"^- ([A-Za-z0-9_]+)[:. ]", l) for l in bloco) if m}
            fora = {"id", "inSec", "dur", "anima", "modo", "midia", "_quadros", "_planos", "_texto_aprovado", "_mergedInto",
                    "_fusao", "_borda"}
            vazio = lambda v: v in (None, [], "", {}) or (isinstance(v, dict) and all(x in (None, [], "", {}) for x in v.values()))
            faltam = sorted(k for k, v in s.items() if k not in fora and k not in ditos and not vazio(v))
            if faltam:
                falha(cena, "o espelho de %s: campos fora do pacote: %s" % (sid, ", ".join(faltam)))
            dados = (s.get("needs") or {}).get("dados") or []
            if sum(1 for l in bloco if l.startswith("- needs.dados: ")) != len(dados):
                falha(cena, "o espelho de %s: %d needs.dados na fonte, outro número no pacote" % (sid, len(dados)))
            for d_ in dados:
                if isinstance(d_, str) and ("- needs.dados: " + norm(d_)) not in bloco:
                    falha(cena, "o espelho de %s: um needs.dados não está inteiro" % sid)

    # D. a regência
    reg = ler(base + "/regencia.json")
    rc = next((c for c in reg["cenas"] if c["id"] == mae), None)
    beats_md = []
    for k, l in enumerate(linhas):
        m = re.match(r"^### b(\d+) · ([\d.]+)–([\d.]+) s na cena", l)
        if m:
            pal = None
            for l2 in linhas[k + 1:k + 4]:
                if l2.startswith("- palavras: "):
                    pal = json_no_fim(l2, len("- palavras: ") - 1)
            beats_md.append((int(m.group(1)), m.group(2), m.group(3), pal))
    if rc is None:
        if beats_md:
            falha(cena, "beats no pacote, mas a regência não tem a cena")
    else:
        if len(beats_md) != len(rc["beats"]):
            falha(cena, "a regência: %d beats no pacote, %d na fonte" % (len(beats_md), len(rc["beats"])))
        ntxt = norm(txt)
        for (n, t0, t1, pal), b in zip(beats_md, rc["beats"]):
            if t0 != "%.3f" % b["t0"] or t1 != "%.3f" % b["t1"]:
                falha(cena, "a regência: o tempo do b%d não bate" % n)
            if pal != b["palavras"]:
                falha(cena, "a regência: as palavras do b%d não batem" % n)
            for k in ("exige", "porque"):
                if b.get(k) and norm(b[k]) not in ntxt:
                    falha(cena, "a regência: o %s do b%d não está inteiro" % (k, n))
    n_beats = len(beats_md)

    # E. o conceito
    con = ler(base + "/conceito-visual.json")
    ntxt = norm(txt)
    for sid in [mae] + filhos:
        e = con["cenas"].get(sid)
        if e:
            for k in ("metafora", "tecnica"):
                if e.get(k) and norm(e[k]) not in ntxt:
                    falha(cena, "o conceito: a %s de %s não está inteira" % (k, sid))

    # F. os textos de tela
    tt = ler(base + "/textos-tela.json")["_textos_por_cena"]
    meus = {i: x for i, x in enumerate(tt) if x.get("cena") in ids}
    vistos = {}
    for l in linhas:
        m = re.match(r"^- \[(\d+)\] ([\d.]+)–([\d.]+) s · (\w+) · ", l)
        if m:
            vistos[int(m.group(1))] = (m.group(2), m.group(3), m.group(4), json_no_fim(l, m.end() - 1))
    if set(vistos) != set(meus):
        falha(cena, "os textos: itens %s no pacote, %s na fonte" % (sorted(vistos), sorted(meus)))
    for i, x in meus.items():
        if i in vistos:
            t0, t1, papel, texto = vistos[i]
            if (t0, t1, papel) != ("%.3f" % x["t0"], "%.3f" % x["t1"], x["papel"]) or texto != x["texto"]:
                falha(cena, "o texto [%d] não bate" % i)
            if x.get("nota") and norm(x["nota"]) not in ntxt:
                falha(cena, "a nota do texto [%d] não está inteira" % i)

    # G. as mídias e os vereditos
    cm = ler(base + "/_pesquisa/conferencia-midia.json")
    cands = cm["candidatos"]
    blocos = {}
    atual = None
    for l in linhas:
        m = re.match(r"^### `(_media/[^`]+)`$", l)
        if m:
            atual = m.group(1)
            blocos[atual] = []
            continue
        if l.startswith("## ") or (l.startswith("### ") and not l.startswith("### `")):
            atual = None
        if atual:
            m = re.match(r"^- veredito desta cena: \*\*(\w+)\*\* · candidatos\[(\d+)\] · id `([^`]+)` · cena (s\d+)", l)
            if m:
                blocos[atual].append((m.group(1), int(m.group(2)), m.group(3), m.group(4)))
    n_vered = 0
    for rel, vs in blocos.items():
        for v, i, cid, c in vs:
            n_vered += 1
            C = cands[i]
            if (C.get("veredito"), C.get("id"), C.get("cena")) != (v, cid, c):
                falha(cena, "a mídia %s: o veredito candidatos[%d] não bate com a conferência" % (rel, i))
            if c not in ids:
                falha(cena, "a mídia %s: veredito de outra cena (%s) como desta" % (rel, c))
    # todo campo do veredito da cena está no pacote, pelo nome, ou no "no original, sem copiar" (a 1.0 calava, por
    # exemplo, a janela_no_clipe da s72); o cabeçalho do veredito diz o veredito, o id, a cena e o lote
    for k, l in enumerate(linhas):
        m = re.match(r"^- veredito desta cena: \*\*\w+\*\* · candidatos\[(\d+)\]", l)
        if not m:
            continue
        i = int(m.group(1))
        ditos = {"veredito", "id", "cena", "lote", "sha256"}
        for l2 in linhas[k + 1:]:
            if not l2.startswith("  "):
                break
            m2 = re.match(r"^  - ([a-z_]+)(?:,| coberta)?[ :]", l2)
            if m2:
                ditos.add({"frase": "frase_coberta"}.get(m2.group(1), m2.group(1)))
            if l2.startswith("  - no original, sem copiar: "):
                ditos |= set(re.findall(r"`([^`]+)`", l2))
        faltam = sorted(x for x, v in cands[i].items() if x not in ditos and v not in (None, [], "", {}))
        if faltam:
            falha(cena, "o veredito candidatos[%d]: campos fora do pacote, sem aviso: %s" % (i, ", ".join(faltam)))
    # o que a regência casou (independente do script)
    usos = (reg.get("_conferencia_de_janelas") or {}).get("usos") or []
    n_usos = 0
    for u in usos:
        if u.get("cena") in ids or u.get("cena_espelho") in ids:
            n_usos += 1
            rel = u["arquivo"].replace("out/%s/" % proj, "")
            ve = u.get("veredito") or {}
            if rel not in blocos:
                falha(cena, "a mídia %s, casada pela regência, não está no pacote" % rel)
                continue
            if ve.get("id") and not any(cid == ve["id"] and v == ve.get("veredito") and c == ve.get("cena") for v, _, cid, c in blocos[rel]):
                # a conferência pode ter mudado depois da regência: só falha se a conferência de hoje ainda diz o mesmo
                hoje = [C for C in cands if C.get("id") == ve["id"] and C.get("cena") == ve.get("cena")]
                if hoje and hoje[0].get("veredito") == ve.get("veredito"):
                    falha(cena, "a mídia %s: a regência casou %s (%s, %s), o pacote não" % (rel, ve["id"], ve.get("cena"), ve.get("veredito")))
    # o banco pago, pela URL da procedência
    for rel in blocos:
        pasta, nome = os.path.split(base + "/" + rel)
        proc = pasta + "/_PROCEDENCIA.json"
        if os.path.isfile(proc):
            it = next((x for x in ler(proc).get("itens", []) if x.get("arquivo") == nome), None)
            if it and it.get("url") and "_instalar-lote" in json.dumps(it.get("declarado_por"), ensure_ascii=False):
                esperado = [i for i, C in enumerate(cands) if (C.get("fonte") or {}).get("url") == it["url"]
                            and C.get("mesmo_item") is True and C.get("cena") in ids]
                if not esperado:
                    falha(cena, "a mídia de banco %s não tem candidato com a URL e mesmo_item true" % rel)
                for i in esperado:
                    if not any(j == i for _, j, _, _ in blocos[rel]):
                        falha(cena, "a mídia de banco %s: o candidatos[%d] (URL, mesmo_item) não está no pacote" % (rel, i))
    # o que o HTML e a regência citam
    if os.path.isfile(html):
        h = open(html, encoding="utf-8", errors="replace").read()
        for m in re.finditer(r"_media/(?:foto|footage|pessoa|documento|logo)/[A-Za-z0-9._/-]+?\.(?:jpe?g|png|webp|mp4|mov)", h):
            if m.group(0) not in blocos:
                falha(cena, "o HTML cita %s, e o pacote não o tem" % m.group(0))
    if rc:
        for b in rc["beats"]:
            for mm in b.get("midia") or []:
                rel = mm["arquivo"].replace("out/%s/" % proj, "")
                if rel not in blocos:
                    falha(cena, "a regência cita %s, e o pacote não o tem" % rel)

    # G2. as notas laterais: o caminho existe na fonte, e o item cita a cena
    n_notas = 0
    for titulo, fonte in (("### Notas do espelho que citam a cena", esp), ("### Notas da regência que citam a cena", reg),
                          ("### Notas do conceito que citam a cena", con),
                          ("### Notas do textos-tela que citam a cena", ler(base + "/textos-tela.json")),
                          ("### Notas da conferência que citam a cena", cm)):
        dentro = False
        for l in linhas:
            if l.startswith(titulo):
                dentro = True
                continue
            if dentro and (l.startswith("## ") or l.startswith("### ")):
                break
            m = re.match(r"^- `([^`]+)`: (.*)$", l) if dentro else None
            if not m or m.group(1) in ("_consertos", "substituidos"):
                continue
            n_notas += 1
            v = resolver(fonte, m.group(1))
            if v is NADA:
                falha(cena, "a nota `%s` não existe na fonte" % m.group(1))
                continue
            if m.group(2) == "a cena está nesta lista":
                if not (isinstance(v, list) and set(x for x in v if isinstance(x, str)) & ids):
                    falha(cena, "a nota `%s` diz que a cena está na lista, e não está" % m.group(1))
                continue
            ultimo = re.split(r"[.\[]", m.group(1))[-1].rstrip("]")
            # pelo id ou pela faixa da prosa ("cena": "s60–s70" cita a s67)
            if not cita_cena(json.dumps(v, ensure_ascii=False), ids) and ultimo not in ids:
                falha(cena, "a nota `%s` não cita a cena" % m.group(1))
            elif isinstance(v, str) and norm(v)[:60] not in norm(m.group(2)):
                falha(cena, "a nota `%s` não começa como a fonte" % m.group(1))

    # J. nenhuma frase que cita a cena fica fora do pacote (a parte 9 e as notas laterais), menos o histórico
    n_mencoes = provar_cobertura(cena, txt, linhas, base, mae, ids)

    # H. o laudo
    lp = base + "/qc/%s.laudo.json" % mae
    if os.path.isfile(lp):
        L = ler(lp)
        apr = "sim" if L.get("aprovado") is True else ("não" if L.get("aprovado") is False else str(L.get("aprovado")))
        if ("- aprovado: %s ·" % apr) not in txt:
            falha(cena, "o laudo: o aprovado não bate")
        notas = " · ".join("%s %s" % (l["lente"], l["nota"]) for l in L.get("lentes", []))
        if ("- as notas: %s" % notas) not in txt:
            falha(cena, "o laudo: as notas das lentes não batem")
        ncor = sum(len(l.get("correcoes") or []) for l in L.get("lentes", []))
        if txt.count("- correção pedida (") != ncor:
            falha(cena, "o laudo: %d correções na fonte, %d no pacote" % (ncor, txt.count("- correção pedida (")))
    elif "não existe (a cena ainda não foi julgada)" not in txt:
        falha(cena, "o laudo: o pacote não diz que ele não existe")

    # I. as exceções
    ex = ler(base + "/qc/_excecoes-portao.json")["excecoes"]
    minhas = {i: e for i, e in enumerate(ex) if e.get("cena") in ids}
    achadas_ex = {}
    for k, l in enumerate(linhas):
        m = re.match(r"^- excecoes\[(\d+)\] · .* · sha1_html `([0-9a-f]+)`( \(= o HTML de hoje\)| \(≠ o HTML de hoje, `[0-9a-f]+`\))?", l)
        if m:
            rep = None
            if linhas[k + 1].startswith("  - reprovacao: "):
                rep = json_no_fim(linhas[k + 1], len("  - reprovacao: ") - 1)
            achadas_ex[int(m.group(1))] = (m.group(2), m.group(3) or "", rep)
    if set(achadas_ex) != set(minhas):
        falha(cena, "as exceções: %s no pacote, %s na fonte" % (sorted(achadas_ex), sorted(minhas)))
    # todo campo da exceção (e da decisão do Lucas dentro dela) está no pacote, pelo nome, ou no "no original"
    for k, l in enumerate(linhas):
        m = re.match(r"^- excecoes\[(\d+)\] · ", l)
        if not m or int(m.group(1)) not in minhas:
            continue
        e = minhas[int(m.group(1))]
        ditos, ditos_dl = {"cena", "portao", "sha1_html"}, {"mensagem", "quando"}
        for l2 in linhas[k + 1:]:
            if not l2.startswith("  "):
                break
            m2 = re.match(r"^  - ([a-z_]+):", l2)
            if m2:
                ditos.add(m2.group(1))
            if l2.startswith("  - a decisão do Lucas: "):
                ditos.add("decisao_lucas")
            m3 = re.match(r"^    - ([a-z_]+):", l2)
            if m3:
                ditos_dl.add(m3.group(1))
            if l2.startswith("  - no original, sem copiar: "):
                ditos |= set(re.findall(r"`([^`]+)`", l2))
        faltam = sorted(x for x, v in e.items() if x not in ditos and v not in (None, [], ""))
        dl = e.get("decisao_lucas") if isinstance(e.get("decisao_lucas"), dict) else {}
        faltam += sorted("decisao_lucas." + x for x, v in dl.items() if x not in ditos_dl and v not in (None, [], ""))
        if faltam:
            falha(cena, "a exceção [%s]: campos fora do pacote, sem aviso: %s" % (m.group(1), ", ".join(faltam)))
    for i, e in minhas.items():
        if i in achadas_ex:
            s1, cmp_, rep = achadas_ex[i]
            if s1 != e.get("sha1_html") or rep != e.get("reprovacao"):
                falha(cena, "a exceção [%d] não bate" % i)
            if sha1 and (("(= o HTML de hoje)" in cmp_) != (e.get("sha1_html") == sha1)):
                falha(cena, "a exceção [%d]: a comparação com o HTML de hoje está errada" % i)

    return {"mae": mae, "ids": ids, "palavras": n_palavras, "beats": n_beats, "textos": len(vistos), "notas": n_notas,
            "midias": len(blocos), "vereditos": n_vered, "usos": n_usos, "excecoes": len(achadas_ex), "mencoes": n_mencoes,
            "laudo": os.path.isfile(lp), "chars": len(txt)}


def medir_hoje(proj, mae, ids, base):
    """Estimativa do que a peça lê hoje para achar a própria cena, em caracteres:
    trechos = os pedaços JSON da cena como estão nos arquivos (indentação 1): o(s) segmento(s) do espelho, a entrada da
              regência, o conceito, os textos da cena, os vereditos inteiros que citam a cena, os _PROCEDENCIA das mídias
              dela, o laudo inteiro, as exceções da cena e as palavras da janela (o words.json é de uma linha só);
    grep    = as linhas que `grep -n <cena>` daria (com as filhas) na regência, no espelho, no conceito, no textos-tela,
              na conferência e nas exceções: é como a peça acha as notas laterais hoje;
    inteiros= os arquivos inteiros (o teto, se ela os lesse todos)."""
    J = lambda x: len(json.dumps(x, ensure_ascii=False, indent=1))
    words = ler(base + "/words.json")
    esp = ler(base + "/espelho.json")
    segs = [s for s in esp["segmentos"] if s["id"] in ids]
    seg = next(s for s in segs if s["id"] == mae)
    ini, fim = seg["inSec"], seg["inSec"] + seg["dur"]
    janela = [w for w in words if ini - 1e-6 <= w["start"] < fim - 1e-6]
    trechos = sum(J(s) for s in segs) + len(json.dumps(janela, ensure_ascii=False, separators=(",", ":")))
    reg = ler(base + "/regencia.json")
    trechos += sum(J(c) for c in reg["cenas"] if c["id"] == mae)
    con = ler(base + "/conceito-visual.json")
    trechos += sum(J(con["cenas"][s]) for s in ids if s in con["cenas"])
    tt = ler(base + "/textos-tela.json")
    trechos += sum(J(x) for x in tt["_textos_por_cena"] if x.get("cena") == mae)
    cm = ler(base + "/_pesquisa/conferencia-midia.json")
    trechos += sum(J(c) for c in cm["candidatos"] if c.get("cena") in ids)
    pastas = set()
    for c in reg["cenas"]:
        if c["id"] == mae:
            for b in c["beats"]:
                for m in b.get("midia") or []:
                    pastas.add(os.path.dirname(base + "/" + m["arquivo"].replace("out/%s/" % proj, "")))
    for p in pastas:
        if os.path.isfile(p + "/_PROCEDENCIA.json"):
            trechos += os.path.getsize(p + "/_PROCEDENCIA.json")
    lp = base + "/qc/%s.laudo.json" % mae
    if os.path.isfile(lp):
        trechos += len(open(lp, encoding="utf-8").read())
    ex = ler(base + "/qc/_excecoes-portao.json")
    trechos += sum(J(e) for e in ex["excecoes"] if e.get("cena") in ids)
    grep = 0
    arquivos = ["regencia.json", "espelho.json", "conceito-visual.json", "textos-tela.json",
                "_pesquisa/conferencia-midia.json", "qc/_excecoes-portao.json"]
    for a in arquivos:
        for n, l in enumerate(open(base + "/" + a, encoding="utf-8"), 1):
            if any(("s" + m) in ids for m in RE_CENA.findall(l)):
                grep += len("%d:%s" % (n, l))
    inteiros = sum(os.path.getsize(base + "/" + a) for a in arquivos + ["words.json"])
    if os.path.isfile(lp):
        inteiros += os.path.getsize(lp)
    return trechos, grep, inteiros


MUTACOES = [
    ("o início de uma palavra", lambda L: [l.replace("\t3.895\t", "\t3.896\t") if l.startswith("10\tthe\t") else l for l in L]),
    ("uma palavra a menos", lambda L: [l for l in L if not l.startswith("13\tin\t")]),
    ("um texto de tela", lambda L: [l.replace('· "27,487 FT"', '· "27,488 FT"') for l in L]),
    ("o veredito", lambda L: [l.replace("veredito desta cena: **aprovado**", "veredito desta cena: **trocar**") for l in L]),
    ("a reprovação da exceção", lambda L: [l.replace("1.19 entradas", "1.20 entradas") if l.startswith("  - reprovacao: ") else l for l in L]),
    ("o t0 de um beat", lambda L: [l.replace("### b1 · 2.800–", "### b1 · 2.900–") for l in L]),
    ("a impressão digital de uma fonte", lambda L: [l.replace("sha256 `a86e44af", "sha256 `a86e44ae") for l in L]),
    ("a nota de uma lente", lambda L: [l.replace("- as notas: espaco 8 ·", "- as notas: espaco 9 ·") for l in L]),
    ("a técnica do conceito", lambda L: [l.replace("p1 (3,5–6,3 s)", "p1 (3,5–6,4 s)") if l.startswith("- tecnica:") else l for l in L]),
    ("a mídia que o HTML cita", lambda L: [l.replace("### `_media/foto/s01/s01-iss071-e-1036", "### `_media/foto/s01/s01-iss071-e-9999") for l in L]),
    ("a comparação do sha1 da exceção", lambda L: [l.replace("(= o HTML de hoje)", "(≠ o HTML de hoje, `aaaaaaaaaaaa`)", 1) if l.startswith("- excecoes[0]") else l for l in L]),
    ("um plano do espelho", lambda L: [l.replace("- plano 3.500–6.300 s", "- plano 3.500–6.400 s") for l in L]),
    ("o caminho de uma nota lateral", lambda L: [l.replace("`_para_o_redator_e_a_arte[1]`", "`_para_o_redator_e_a_arte[0]`") for l in L]),
    ("um texto de tela a menos", lambda L: [l for l in L if not l.startswith("- [3] ")]),
    ("uma frase da parte 9 a menos", lambda L: tirar_primeira(L, lambda l: l.startswith("- `espelho.json › _decisoes_do_lucas"))),
    ("uma nota do espelho a menos", lambda L: tirar_primeira(L, lambda l: l.startswith("- `"), depois_de="### Notas do espelho que citam a cena")),
    ("uma nota da conferência a menos", lambda L: tirar_primeira(L, lambda l: l.startswith("- `"), depois_de="### Notas da conferência que citam a cena")),
    ("um campo do veredito a menos", lambda L: tirar_primeira(L, lambda l: l.startswith("  - credito_na_tela: "))),
    ("um campo da exceção a menos", lambda L: tirar_primeira(L, lambda l: l.startswith("  - falha_no_portao: "))),
    ("um campo do espelho a menos", lambda L: tirar_primeira(L, lambda l: l.startswith("- motivo: "))),
    ("um dado da cena (needs.dados) a menos", lambda L: tirar_primeira(L, lambda l: l.startswith("- needs.dados: "))),
]


def tirar_primeira(L, cond, depois_de=None):
    """A lista sem a primeira linha que cumpre `cond` (depois da linha que começa com `depois_de`, se houver)."""
    dentro = depois_de is None
    for i, l in enumerate(L):
        if not dentro:
            dentro = l.startswith(depois_de)
            continue
        if cond(l):
            return L[:i] + L[i + 1:]
    return L


def provar_mutacoes(proj, base, saida, cena="s02"):
    """Cada mutação numa cópia do pacote da s02 tem de dar ao menos uma falha: a prova pega o erro que diz pegar."""
    orig = open("%s/%s.md" % (saida, cena), encoding="utf-8").read().splitlines()
    pegas, nao = 0, []
    caminho = "%s/_mutacao.md" % saida
    for nome, f in MUTACOES:
        mut = f(list(orig))
        if mut == orig:
            nao.append("%s (a mutação não se aplicou)" % nome)
            continue
        with open(caminho, "w", encoding="utf-8", newline="\n") as fh:
            fh.write("\n".join(mut) + "\n")
        antes = len(falhas)
        provar_cena(proj, cena, caminho, base)
        if len(falhas) > antes:
            pegas += 1
        else:
            nao.append(nome)
        del falhas[antes:]
    if os.path.isfile(caminho):
        os.remove(caminho)
    return pegas, nao


def provar_raiz_minima(proj, base, saida, cenas):
    """O começo de um vídeo (só words.json e espelho.json, sem regência, conceito, textos, conferência, laudo, HTML):
    o pacote sai com cada parte dizendo que a fonte ainda não existe. E as saídas de erro: cena que não existe = 1;
    sem o espelho = 2; fora da raiz do canal = 2."""
    import shutil
    raiz = os.path.abspath(saida + "/raiz-minima")
    if os.path.isdir(raiz):
        shutil.rmtree(raiz)
    os.makedirs(raiz + "/out/" + proj)
    shutil.copy("canal.json", raiz + "/canal.json")
    for a in ("words.json", "espelho.json"):
        shutil.copy(base + "/" + a, raiz + "/out/%s/%s" % (proj, a))
    script = os.path.abspath("ferramentas/pacote-cena.py")
    roda = lambda args, cwd: subprocess.run([sys.executable, "-X", "utf8", "-B", script] + args, cwd=cwd, capture_output=True,
                                             text=True, encoding="utf-8", stdin=subprocess.DEVNULL)
    r = roda([proj] + cenas, raiz)
    if r.returncode != 0:
        falhas.append("raiz mínima: saiu %d (%s)" % (r.returncode, r.stderr.strip()[:200]))
    else:
        for c in cenas:
            t = open(raiz + "/out/%s/_tmp/pacotes/%s.md" % (proj, c), encoding="utf-8").read()
            for frase in ("regencia.json` ainda não existe", "conceito-visual.json` ainda não existe",
                          "textos-tela.json` ainda não existe", "conferencia-midia.json` não existe",
                          "não existe (a cena ainda não foi julgada)", "_excecoes-portao.json` não existe",
                          "ainda não existe.", "## 1. A fala"):
                if frase not in t:
                    falhas.append("raiz mínima, %s: falta \"%s\"" % (c, frase))
    r = roda([proj, "s999"], raiz)
    if r.returncode != 1:
        falhas.append("a cena que não existe devia sair 1, saiu %d" % r.returncode)
    os.remove(raiz + "/out/%s/espelho.json" % proj)
    r = roda([proj, cenas[0]], raiz)
    if r.returncode != 2:
        falhas.append("sem o espelho devia sair 2, saiu %d" % r.returncode)
    r = roda([proj, cenas[0]], raiz + "/out")
    if r.returncode != 2:
        falhas.append("fora da raiz do canal devia sair 2, saiu %d" % r.returncode)
    shutil.rmtree(raiz)
    print("A raiz mínima (só words e espelho) e as saídas de erro (1 e 2): conferidas.")


def main(argv):
    if not os.path.isfile("canal.json"):
        print("rode da raiz do canal", file=sys.stderr)
        return 2
    proj = argv[0] if argv else "atlantico-fundo"
    if len(argv) > 1:
        cenas = [(c, "") for c in argv[1:]]
    else:
        cenas = CENAS_PADRAO.get(proj)
        if not cenas:
            print("sem cenas padrão para %s: passe as cenas" % proj, file=sys.stderr)
            return 2
    base = "out/%s" % proj
    saida = base + "/_tmp/pacotes/prova"
    os.makedirs(saida, exist_ok=True)
    for f in os.listdir(saida):
        if f.endswith(".md"):
            os.remove(os.path.join(saida, f))
    cmd = [sys.executable, "-X", "utf8", "-B", "ferramentas/pacote-cena.py", proj] + [c for c, _ in cenas] + ["--saida=" + saida]
    r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", stdin=subprocess.DEVNULL)
    print(r.stdout.rstrip())
    if r.returncode != 0:
        print(r.stderr.rstrip())
        print("✗ o pacote-cena.py saiu %d" % r.returncode)
        return 1

    # o pedido cobre os tipos (pelos dados, não pelo rótulo)
    esp = ler(base + "/espelho.json")
    segs = {s["id"]: s for s in esp["segmentos"]}
    reg = ler(base + "/regencia.json")
    rc = {c["id"]: c for c in reg["cenas"]}
    ex = ler(base + "/qc/_excecoes-portao.json")["excecoes"]
    maes = []
    for c, _ in cenas:
        m = segs[c].get("_mergedInto") or c
        if m not in maes:
            maes.append(m)
    tem = {
        "mapa": any(rc.get(m, {}).get("modo") == "mapa" for m in maes),
        "animação": any("ANIMAÇÃO" in b.get("porque", "") for m in maes for b in rc.get(m, {}).get("beats", [])),
        "foto": any(m2["arquivo"].split("/_media/")[1].startswith(("foto/", "pessoa/"))
                    for m in maes for b in rc.get(m, {}).get("beats", []) for m2 in b.get("midia") or []),
        "footage da caça": any(os.path.isfile("%s/_media/footage/%s/_PROCEDENCIA.json" % (base, m)) and "_instalar-lote" in
                               open("%s/_media/footage/%s/_PROCEDENCIA.json" % (base, m), encoding="utf-8").read() for m in maes),
        "exceção de portão": any(e.get("cena") in maes for e in ex),
        "s75": "s75" in maes,
        "fusão": any(any(s.get("_mergedInto") == m for s in segs.values()) for m in maes),
    }
    for k, v in tem.items():
        if not v:
            falhas.append("o pedido não cobre: %s" % k)

    print()
    print("%-5s %-58s %6s %5s %6s %6s %6s %6s %5s %5s %6s" % ("cena", "tipo", "falas", "beats", "textos", "notas", "mídias", "vered.", "usos", "exc.", "menç."))
    resultados = []
    feitas = set()
    for c, rotulo in cenas:
        m = segs[c].get("_mergedInto") or c
        if m in feitas:
            continue
        feitas.add(m)
        antes = len(falhas)
        r = provar_cena(proj, c, "%s/%s.md" % (saida, m), base)
        r["ok"] = len(falhas) == antes
        r["rotulo"] = rotulo
        resultados.append(r)
        print("%-5s %-58s %6d %5d %6d %6d %6d %6d %5d %5d %6d %s" % (m, rotulo[:58], r["palavras"], r["beats"], r["textos"], r["notas"],
                                                                       r["midias"], r["vereditos"], r["usos"], r["excecoes"], r["mencoes"],
                                                                       "ok" if r["ok"] else "FALHOU"))
    print()
    print("O tamanho, em caracteres (tokens a ~%.1f caracteres cada):" % CHARS_POR_TOKEN)
    print("%-5s %9s %9s %9s %9s %8s %11s" % ("cena", "pacote", "trechos", "grep", "hoje", "pac/hoje", "inteiros"))
    tp = th = 0
    for r in resultados:
        trechos, grep, inteiros = medir_hoje(proj, r["mae"], r["ids"], base)
        hoje = trechos + grep
        tp += r["chars"]
        th += hoje
        print("%-5s %9d %9d %9d %9d %7.0f%% %11d" % (r["mae"], r["chars"], trechos, grep, hoje, 100.0 * r["chars"] / hoje, inteiros))
    print("%-5s %9d %9s %9s %9d %7.0f%%" % ("soma", tp, "", "", th, 100.0 * tp / th))
    print("≈ %d mil tokens no pacote contra ≈ %d mil hoje, nas %d cenas (hoje = trechos + grep; o teto são os arquivos inteiros)."
          % (round(tp / CHARS_POR_TOKEN / 1000), round(th / CHARS_POR_TOKEN / 1000), len(resultados)))
    if proj == "atlantico-fundo" and "s02" in feitas:
        pegas, nao = provar_mutacoes(proj, base, saida)
        print("As mutações na cópia do pacote da s02: %d de %d pegas." % (pegas, len(MUTACOES)))
        for n in nao:
            falhas.append("a mutação não foi pega: %s" % n)
    minimas = [resultados[0]["mae"]] + (["s75"] if "s75" in feitas and resultados[0]["mae"] != "s75" else [])
    provar_raiz_minima(proj, base, saida, minimas)
    print()
    if falhas:
        print("✗ %d falha(s):" % len(falhas))
        for f in falhas:
            print("  - " + f)
        return 1
    print("✓ 0 falhas: %d pacotes conferidos contra as fontes (tipos cobertos: %s)." % (len(resultados), ", ".join(tem)))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
