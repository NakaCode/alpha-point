# Mostra trechos da descricao oficial (Sodir FactPages, field_description) de campos pedidos, filtrando por termos.
# Uso: python -X utf8 -B desc_campo.py <CAMPO> [<termo> ...]
import csv, os, sys, re
AQUI = os.path.dirname(os.path.abspath(__file__))
campo = sys.argv[1].upper()
termos = sys.argv[2:]
with open(os.path.join(AQUI, "dados", "field_description.csv"), encoding="utf-8-sig", newline="") as f:
    for r in csv.DictReader(f):
        if r.get("fldName", "").upper() != campo:
            continue
        txt = r.get("fldDescriptionText", "")
        cab = r.get("fldDescriptionHeading", "")
        if termos and not any(re.search(t, txt, re.I) for t in termos):
            continue
        print("==", cab, "|", r.get("fldDescriptionDateUpdated", ""))
        print(re.sub(r"\s+", " ", txt)[:1500])
