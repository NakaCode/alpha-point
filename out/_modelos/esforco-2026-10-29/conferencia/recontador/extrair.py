"""Extrai, de todos os .jsonl de transcricao, uma linha por resposta (message.id
contado uma vez por arquivo, com a linha de maior output_tokens).

Saida: msgs.pkl (lista de tuplas) e arquivos.pkl (info por arquivo).
Somente leitura nas transcricoes.
"""
import json
import os
import pickle
import sys
import time
from multiprocessing import Pool

RAIZ = "C:/Users/zangp/.claude/projects/C--projetos-alpha-point"
SAIDA = os.path.dirname(os.path.abspath(__file__))


def lista_arquivos():
    out = []
    for dp, dn, fn in os.walk(RAIZ):
        for f in fn:
            if f.endswith(".jsonl"):
                p = os.path.join(dp, f).replace("\\", "/")
                out.append(p)
    return out


def processa(path):
    melhores = {}
    n_linhas = 0
    try:
        with open(path, "rb") as fh:
            for linha in fh:
                if b'"type":"assistant"' not in linha or b'"usage"' not in linha:
                    continue
                try:
                    d = json.loads(linha)
                except Exception:
                    continue
                if d.get("type") != "assistant":
                    continue
                m = d.get("message") or {}
                u = m.get("usage")
                if not isinstance(u, dict):
                    continue
                mid = m.get("id")
                if not mid:
                    mid = "SEM-ID-" + str(d.get("uuid"))
                outt = u.get("output_tokens") or 0
                cc = u.get("cache_creation") or {}
                cw_total = u.get("cache_creation_input_tokens")
                cw1h = cc.get("ephemeral_1h_input_tokens") or 0
                if cw_total is None:
                    cw_total = (cc.get("ephemeral_5m_input_tokens") or 0) + cw1h
                cw5 = cw_total - cw1h
                reg = (
                    mid,
                    d.get("timestamp"),
                    m.get("model"),
                    d.get("effort"),
                    u.get("input_tokens") or 0,
                    cw5,
                    cw1h,
                    u.get("cache_read_input_tokens") or 0,
                    outt,
                    d.get("attributionAgent"),
                )
                ant = melhores.get(mid)
                if ant is None or outt > ant[8]:
                    melhores[mid] = reg
                n_linhas += 1
    except Exception as e:
        return path, [], {"erro": str(e)}
    return path, list(melhores.values()), {"linhas_assistant": n_linhas}


if __name__ == "__main__":
    t0 = time.time()
    arqs = lista_arquivos()
    arqs.sort(key=lambda p: -os.path.getsize(p))
    print("arquivos:", len(arqs), flush=True)
    todas = []
    info = {}
    with Pool(14) as pool:
        for i, (p, regs, inf) in enumerate(pool.imap_unordered(processa, arqs, chunksize=1)):
            info[p] = inf
            for r in regs:
                todas.append((p,) + r)
            if i % 300 == 0:
                print(i, len(todas), round(time.time() - t0), "s", flush=True)
    with open(os.path.join(SAIDA, "msgs.pkl"), "wb") as fh:
        pickle.dump(todas, fh)
    with open(os.path.join(SAIDA, "arquivos.pkl"), "wb") as fh:
        pickle.dump(info, fh)
    erros = [p for p, v in info.items() if "erro" in v]
    print("respostas (por arquivo):", len(todas), "erros:", len(erros), "tempo:", round(time.time() - t0), "s")
