# Tira de cada "Colorado River Accounting and Water Use Report" (Reclamation) o uso consuntivo anual do IID e dos tres
# estados da Bacia Baixa, e faz as razoes. Uso: python -X utf8 -B serie.py usbr/*DecreeRpt*.pdf
import sys, re, fitz, json

def numeros(bloco):
    return [int(x.replace(",", "")) for x in re.findall(r"\(?\d[\d,]*\)?", bloco) if "(" not in x]

res = {}
for arq in sys.argv[1:]:
    ano = re.search(r"(20\d\d)", arq.split("DecreeRpt")[-1]).group(1)
    doc = fitz.open(arq)
    txt = [p.get_text() for p in doc]
    d = {"arquivo": arq}
    # Resumo (Table 1): "Lower Division States Consumptive Use"
    for i, t in enumerate(txt):
        if "Lower Division States Consumptive Use" in t and "Arizona" in t:
            m = re.search(r"Lower Division States Consumptive Use\s+TOTAL\s+Arizona\s+([\d,]+)\s+California\s+([\d,]+)\s+Nevada\s+([\d,]+)\s+Total Lower Division States Consumptive Use\s+([\d,]+)", t)
            if m:
                d.update({k: int(v.replace(",", "")) for k, v in zip(["AZ", "CA", "NV", "LB"], m.groups())})
                d["pag_resumo"] = i + 1
                break
    # IID: do bloco "Imperial Irrigation District" ate "Coachella Valley Water District", o total de "Total Consumptive Use"
    for i, t in enumerate(txt):
        if "Imperial Irrigation District" in t and "Diversion at Imperial Dam" in t and "Coachella Valley Water District" in t and "Consumptive Use" in t:
            a = t.index("Imperial Irrigation District")
            b = t.index("Coachella Valley Water District", a)
            bloco = t[a:b]
            # diversao: 13 numeros depois de "Diversion" (12 meses + total)
            md = re.search(r"Diversion\s*\n((?:[\d,]+\s*\n){13})", bloco)
            if md:
                d["IID_diversao"] = numeros(md.group(1))[-1]
            # uso consuntivo total: ultimo "Consumptive Use" do bloco, 13 numeros
            pos = [m.end() for m in re.finditer(r"Total Consumptive Use|Consumptive Use(?! 1)", bloco)]
            for p in reversed(pos):
                mc = re.match(r"\s*\n((?:\(?[\d,]+\)?\s*\n){13})", bloco[p:])
                if mc:
                    d["IID_uc"] = numeros(mc.group(1))[-1]
                    break
            d["pag_iid"] = i + 1
            break
    res[ano] = d

print("ano | IID uso consuntivo | IID diversao | AZ | NV | CA | LB | IID/AZ | IID/(AZ+NV) | IID/CA | IID/NV")
for ano in sorted(res):
    d = res[ano]
    try:
        print(ano, "|", d.get("IID_uc"), "|", d.get("IID_diversao"), "|", d.get("AZ"), "|", d.get("NV"), "|", d.get("CA"), "|", d.get("LB"), "|",
              f'{d["IID_uc"]/d["AZ"]:.3f}', "|", f'{d["IID_uc"]/(d["AZ"]+d["NV"]):.3f}', "|", f'{d["IID_uc"]/d["CA"]:.3f}', "|", f'{d["IID_uc"]/d["NV"]:.1f}',
              "| p.", d.get("pag_resumo"), d.get("pag_iid"))
    except Exception as e:
        print(ano, d, "erro:", e)
json.dump(res, open("serie.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
