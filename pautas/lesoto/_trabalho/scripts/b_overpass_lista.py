"""Leitor B: lista as feicoes de um JSON do Overpass (out tags center): tipo/id, nome e tags de interesse.

Uso: python -I -X utf8 -B b_overpass_lista.py <arquivo.json>
So le o arquivo local.
"""
import json
import sys


def main():
    with open(sys.argv[1], encoding="utf-8") as f:
        d = json.load(f)
    print("osm3s:", d.get("osm3s", {}).get("timestamp_osm_base"), "| elementos:", len(d.get("elements", [])))
    chaves = ("name", "waterway", "man_made", "tunnel", "natural", "water", "power", "dam", "landuse", "building", "type", "ele", "operator", "length", "start_date", "layer", "location", "plant:output:electricity", "generator:output:electricity", "plant:source", "intermittent", "seamark:type")
    for e in d.get("elements", []):
        tg = e.get("tags", {})
        resumo = {k: tg[k] for k in chaves if k in tg}
        print(f"{e['type']}/{e['id']}: {json.dumps(resumo, ensure_ascii=False)}")


if __name__ == "__main__":
    main()
