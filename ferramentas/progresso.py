"""O progresso de cada etapa, para o painel "Linha do Alpha Point" (o mod alpha-progresso) e para a Sala.

Uso, da raiz do canal:
    python -X utf8 -B ferramentas/progresso.py            # texto, para ler no terminal
    python -X utf8 -B ferramentas/progresso.py --json     # o que o mod lê

Só lê. Nada aqui escreve, roda o regie ou abre rede:
- o banco do canal (`db/canal.db`), aberto em modo só leitura: o passo de cada vídeo e quando ele entrou em cada passo;
- os arquivos de `out/<proj>/` que provam cada passo ("o artefato vence o relato"): narração, master, words.json,
  espelho, conceito, regência, textos, cenas, laudos, clipes 4K, trilha e XML;
- os avisos de ocupado de `out/_maquina/*.json` (setores/REGIMENTO.md, "A máquina e os arquivos únicos");
- os relatos dos setores (`out/<proj>/_tmp/setores/<id>.md` e `out/_maquina/setores/<id>.md`): o último de cada setor.

O relato só nasce no fim da tarefa: o painel mostra a última entrega de cada setor, não o que ele faz agora.
As horas saem em Brasília (UTC−3, sem horário de verão desde 2019).
"""

from __future__ import annotations

import glob
import json
import os
import re
import sqlite3
import sys
from datetime import datetime, timedelta, timezone

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BRT = timezone(timedelta(hours=-3))

ROTULOS = {
    "ingest": "Narração e relógio",
    "cut_detect": "Cortes",
    "mirror": "Plano de cenas",
    "research": "Pesquisa e mídia",
    "art_direction": "Direção de arte",
    "conducting": "Regência",
    "screen_text": "Texto de tela",
    "requisitions": "Requisições",
    "art": "Cenas (arte)",
    "qc": "Qualidade",
    "render": "Render 4K",
    "score": "Trilha",
    "finalize": "XML final",
}

SETORES = {
    "pesquisa": "Pesquisa e mídia",
    "direcao": "Direção",
    "texto": "Texto e fatos",
    "arte": "Arte",
    "qualidade": "Qualidade",
}

AVISO_ESQUECIDO_H = 6


def _agora() -> datetime:
    return datetime.now(timezone.utc)


def _iso(s: str | None) -> datetime | None:
    if not s:
        return None
    try:
        return datetime.fromisoformat(s.replace("Z", "+00:00"))
    except ValueError:
        return None


def _hora(d: datetime | None) -> str | None:
    return d.astimezone(BRT).strftime("%d/%m %H:%M") if d else None


def _ha(d: datetime | None, agora: datetime) -> str | None:
    if not d:
        return None
    s = max(0, int((agora - d).total_seconds()))
    if s < 90:
        return "agora"
    m = s // 60
    if m < 90:
        return f"há {m} min"
    h = m // 60
    if h < 36:
        return f"há {h} h"
    return f"há {h // 24} dias"


def _ler_json(caminho: str):
    try:
        with open(caminho, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return None


def _mtime(caminho: str) -> datetime | None:
    try:
        return datetime.fromtimestamp(os.path.getmtime(caminho), timezone.utc)
    except OSError:
        return None


def _banco():
    """Os passos e os vídeos, do banco do canal, em modo só leitura."""
    caminho = os.path.join(RAIZ, "db", "canal.db").replace("\\", "/")
    con = sqlite3.connect(f"file:{caminho}?mode=ro", uri=True)
    try:
        passos = [
            {"id": r[0], "ordinal": r[1], "capacidade": r[2], "peca": r[3]}
            for r in con.execute("select id, ordinal, capacity, craft from step order by ordinal")
        ]
        videos = [
            {"id": r[0], "slug": r[1], "titulo": r[2], "passo": r[3], "estado": r[4], "aberto": r[5], "mudou": r[6]}
            for r in con.execute(
                "select id, slug, title, step, status, created_at, updated_at from production order by created_at"
            )
        ]
        eventos: dict[str, list] = {}
        for r in con.execute(
            "select production_id, type, from_step, to_step, created_at from event order by id"
        ):
            eventos.setdefault(r[0], []).append({"tipo": r[1], "de": r[2], "para": r[3], "em": r[4]})
    finally:
        con.close()
    return passos, videos, eventos


def _provas(slug: str) -> tuple[dict[str, list], int | None]:
    """O que existe em disco para cada passo. Cada prova: (rótulo, ok, detalhe)."""
    base = os.path.join(RAIZ, "out", slug)
    p = lambda *x: os.path.join(base, *x)  # noqa: E731
    existe = os.path.exists
    provas: dict[str, list] = {k: [] for k in ROTULOS}

    provas["ingest"] = [
        {"rotulo": "narração", "ok": existe(p("narracao.wav"))},
        {"rotulo": "master", "ok": existe(p("_media", "_master.mp4"))},
        {"rotulo": "words.json", "ok": existe(p("words.json"))},
    ]

    cenas = None
    espelho = _ler_json(p("espelho.json"))
    if isinstance(espelho, dict) and isinstance(espelho.get("segmentos"), list):
        cenas = len(espelho["segmentos"])
    provas["mirror"] = [
        {"rotulo": "espelho", "ok": cenas is not None, "detalhe": f"{cenas} cenas" if cenas is not None else None}
    ]

    pautas = len(glob.glob(p("_pesquisa", "pauta-*.json")))
    conf = _ler_json(p("_pesquisa", "conferencia-midia.json"))
    provas["research"] = [
        {"rotulo": "pautas", "ok": pautas > 0, "detalhe": str(pautas) if pautas else None},
        {"rotulo": "conferência de mídia", "ok": conf is not None},
    ]
    provas["art_direction"] = [{"rotulo": "conceito", "ok": existe(p("conceito-visual.json"))}]
    provas["conducting"] = [{"rotulo": "regência", "ok": existe(p("regencia.json"))}]
    provas["screen_text"] = [{"rotulo": "textos", "ok": existe(p("textos-tela.json"))}]

    # Sem denominador: o espelho pode ter mais segmentos que as cenas construídas (no Juneau, 61 e 56, por fusões).
    htmls = glob.glob(p("graphics", "*.html"))
    provas["art"] = [{"rotulo": "cenas", "ok": bool(htmls), "detalhe": str(len(htmls)) if htmls else None}]

    laudos = glob.glob(p("qc", "*.laudo.json"))
    aprovados = sum(1 for x in laudos if (_ler_json(x) or {}).get("aprovado") is True)
    provas["qc"] = [
        {"rotulo": "aprovadas", "ok": bool(laudos), "detalhe": f"{aprovados}/{len(laudos)}" if laudos else None},
        {"rotulo": "portões", "ok": existe(p("_portao.json"))},
    ]

    em4k = 0
    for mp4 in glob.glob(p("graphics", "*.mp4")):
        try:
            with open(mp4 + ".de-html", encoding="utf-8") as f:
                if f.read().strip().endswith("2160p"):
                    em4k += 1
        except OSError:
            pass
    provas["render"] = [{"rotulo": "clipes 4K", "ok": em4k > 0, "detalhe": str(em4k) if em4k else None}]
    provas["score"] = [{"rotulo": "plano de trilha", "ok": existe(p("_trilha-plano.json"))}]
    xmls = glob.glob(p("*.xml"))
    provas["finalize"] = [{"rotulo": "XML", "ok": bool(xmls), "detalhe": str(len(xmls)) if xmls else None}]
    return provas, cenas


def _linha(video: dict, passos: list, eventos: list, agora: datetime) -> list:
    """Cada passo do vídeo: feito, atual ou a fazer, com quando entrou e saiu (a última vez)."""
    ordem = {s["id"]: s["ordinal"] for s in passos}
    atual = ordem.get(video["passo"], 0)
    terminou = video["estado"] == "done" and video["passo"] == passos[-1]["id"]
    entrou: dict[str, str] = {}
    saiu: dict[str, str] = {}
    voltas: dict[str, int] = {}
    for ev in eventos:
        if ev["para"]:
            entrou[ev["para"]] = ev["em"]
            voltas[ev["para"]] = voltas.get(ev["para"], 0) + 1
        if ev["de"]:
            saiu[ev["de"]] = ev["em"]
    linha = []
    for s in passos:
        if terminou or s["ordinal"] < atual:
            estado = "feito"
        elif s["ordinal"] == atual:
            estado = "atual"
        else:
            estado = "falta"
        e = _iso(entrou.get(s["id"]))
        linha.append({
            "id": s["id"],
            "rotulo": ROTULOS.get(s["id"], s["id"]),
            "peca": s["peca"],
            "estado": estado,
            "entrou": _hora(e),
            "ha": _ha(e, agora) if estado == "atual" else None,
            "saiu": _hora(_iso(saiu.get(s["id"]))) if estado == "feito" else None,
            "voltas": voltas.get(s["id"], 0),
        })
    return linha


def _avisos(agora: datetime) -> list:
    saida = []
    for arq in sorted(glob.glob(os.path.join(RAIZ, "out", "_maquina", "*.json"))):
        d = _ler_json(arq)
        nome = os.path.splitext(os.path.basename(arq))[0]
        if not isinstance(d, dict):
            saida.append({"nome": nome, "estado": "ilegível"})
            continue
        desde = _iso(d.get("desde"))
        ocupado = d.get("estado") == "ocupado"
        esquecido = bool(ocupado and desde and agora - desde > timedelta(hours=AVISO_ESQUECIDO_H))
        saida.append({
            "nome": nome,
            "estado": d.get("estado"),
            "quem": d.get("quem"),
            "tarefa": d.get("tarefa"),
            "desde": _hora(desde),
            "ha": _ha(desde, agora),
            "esquecido": esquecido,
        })
    return saida


def _setores(agora: datetime) -> list:
    padrao = re.compile(r"^(?P<proj>.+)-(?P<setor>" + "|".join(SETORES) + r")-(?P<n>\d+)$")
    ultimos: dict[str, dict] = {}
    arquivos = glob.glob(os.path.join(RAIZ, "out", "*", "_tmp", "setores", "*.md"))
    arquivos += glob.glob(os.path.join(RAIZ, "out", "_maquina", "setores", "*.md"))
    for arq in arquivos:
        m = padrao.match(os.path.splitext(os.path.basename(arq))[0])
        if not m:
            continue
        quando = _mtime(arq)
        atual = ultimos.get(m["setor"])
        if atual and atual["_t"] >= quando:
            continue
        titulo = None
        try:
            with open(arq, encoding="utf-8") as f:
                for l in f:
                    if l.strip():
                        titulo = l.strip().lstrip("#").strip()
                        break
        except OSError:
            pass
        ultimos[m["setor"]] = {
            "_t": quando,
            "id": f"{m['proj']}-{m['setor']}-{m['n']}",
            "proj": m["proj"],
            "titulo": titulo,
            "quando": _hora(quando),
            "ha": _ha(quando, agora),
            "relato": os.path.relpath(arq, RAIZ).replace("\\", "/"),
        }
    saida = []
    for chave, nome in SETORES.items():
        u = ultimos.get(chave)
        if u:
            u = {k: v for k, v in u.items() if k != "_t"}
        saida.append({"setor": nome, "chave": chave, "ultimo": u})
    return saida


def coletar() -> dict:
    agora = _agora()
    passos, videos, eventos = _banco()
    saida_videos = []
    for v in videos:
        provas, cenas = _provas(v["slug"])
        linha = _linha(v, passos, eventos.get(v["id"], []), agora)
        for l in linha:
            l["provas"] = provas.get(l["id"], [])
        feitos = sum(1 for l in linha if l["estado"] == "feito")
        saida_videos.append({
            "slug": v["slug"],
            "titulo": v["titulo"],
            "passo": v["passo"],
            "rotulo_passo": ROTULOS.get(v["passo"], v["passo"]),
            "estado": v["estado"],
            "entregue": v["estado"] == "done" and v["passo"] == passos[-1]["id"],
            "aberto": _hora(_iso(v["aberto"])),
            "cenas": cenas,
            "feitos": feitos,
            "total": len(linha),
            "linha": linha,
        })
    # O vídeo em curso primeiro, o mais novo antes; os entregues por último (a lista do banco vem do mais velho).
    ativos = [x for x in reversed(saida_videos) if not x["entregue"]]
    entregues = [x for x in reversed(saida_videos) if x["entregue"]]
    return {
        "lido": _hora(agora),
        "videos": ativos + entregues,
        "setores": _setores(agora),
        "avisos": _avisos(agora),
    }


def _texto(d: dict) -> str:
    marca = {"feito": "✓", "atual": "▶", "falta": "·"}
    out = [f"Linha do Alpha Point · lido {d['lido']}", ""]
    for v in d["videos"]:
        cab = f"{v['slug']} · {v['titulo'] or ''}"
        if v["entregue"]:
            out.append(f"{cab} · entregue")
            continue
        out.append(f"{cab} · {v['feitos']}/{v['total']} passos · agora: {v['rotulo_passo']} ({v['estado']})")
        for l in v["linha"]:
            provas = ", ".join(
                f"{p['rotulo']} {('✓' if p['ok'] else '✗')}{(' ' + p['detalhe']) if p.get('detalhe') else ''}"
                for p in l["provas"]
            )
            quando = l["ha"] or l["saiu"] or ""
            out.append(f"  {marca[l['estado']]} {l['rotulo']:<20} {quando:<12} {provas}")
        out.append("")
    out.append("Setores (a última entrega de cada um)")
    for s in d["setores"]:
        u = s["ultimo"]
        out.append(f"  {s['setor']:<17} " + (f"{u['id']} · {u['ha']}" if u else "nada entregue ainda"))
    out.append("")
    ocupados = [a for a in d["avisos"] if a.get("estado") != "livre"]
    out.append("Máquina: " + ("livre" if not ocupados else "; ".join(
        f"{a['nome']} {a['estado']} ({a.get('quem')}, {a.get('tarefa')}, {a.get('ha')})" for a in ocupados)))
    return "\n".join(out)


if __name__ == "__main__":
    dados = coletar()
    if "--json" in sys.argv[1:]:
        sys.stdout.write(json.dumps(dados, ensure_ascii=False))
    else:
        print(_texto(dados))
