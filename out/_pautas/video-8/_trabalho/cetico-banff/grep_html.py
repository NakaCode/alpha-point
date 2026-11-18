# Tira as tags de um HTML e mostra trechos ao redor de um padrao. Uso: python -X utf8 -B grep_html.py <arquivo> <regex> [largura]
import sys, re, html
t = open(sys.argv[1], encoding="utf-8", errors="replace").read()
t = re.sub(r"<script.*?</script>|<style.*?</style>", " ", t, flags=re.S)
t = html.unescape(re.sub(r"<[^>]+>", " ", t))
t = re.sub(r"\s+", " ", t)
w = int(sys.argv[3]) if len(sys.argv) > 3 else 400
for m in re.finditer(sys.argv[2], t, flags=re.I):
    print("...", t[max(0, m.start()-w):m.end()+w], "...\n")
