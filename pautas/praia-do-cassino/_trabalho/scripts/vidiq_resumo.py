"""Resume uma resposta do vidiq_youtube_search (ou do vidiq_get_videos_by_ids) salva em JSON.

Uso: python -I -X utf8 -B vidiq_resumo.py <resposta.json> [--desc]

Imprime, por resultado: id, data, duração, views, inscritos do canal, outlier, canal e título.
Com --desc, também os primeiros 300 caracteres da descrição.
Só lê o arquivo; não acessa a rede.
"""
import json
import sys


def main():
    if len(sys.argv) < 2:
        print("uso: vidiq_resumo.py <resposta.json> [--desc]")
        sys.exit(2)
    caminho = sys.argv[1]
    com_desc = "--desc" in sys.argv[2:]
    with open(caminho, encoding="utf-8") as f:
        dados = json.load(f)
    if isinstance(dados, list):
        # o arquivo salvo pode vir como lista de blocos {type, text}
        textos = [b.get("text", "") for b in dados if isinstance(b, dict)]
        dados = json.loads("".join(textos))
    itens = dados.get("results") or dados.get("videos") or dados.get("items") or []
    print(f"resultados: {len(itens)}; créditos: {dados.get('_credits')}")
    for r in itens:
        rid = r.get("id") or r.get("videoId")
        data = (r.get("publishedAt") or "")[:10]
        dur = r.get("duration")
        views = r.get("viewCount")
        subs = r.get("subscriberCount")
        out = r.get("outlierScore")
        out_s = f"{out:.1f}" if isinstance(out, (int, float)) else "-"
        print(f"{rid} | {data} | {dur} | views={views} | subs={subs} | outlier={out_s} | "
              f"{r.get('channelTitle')} | {r.get('title')}")
        if com_desc:
            d = (r.get("description") or "").replace("\n", " ")
            print(f"    desc: {d[:300]}")


if __name__ == "__main__":
    main()
