import re, html, sys
t = open("fontes/cnpa.html", encoding="utf-8", errors="replace").read()
t = re.sub(r"<script.*?</script>|<style.*?</style>", " ", t, flags=re.S)
t = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", t)))
i = t.find("(1) Banff National Park of Canada All and singular")
j = t.find("(2)", i + 50)
seg = t[i:i+200000]
m = re.search(r"(comprising|containing)[^.]{0,80}(hectares|square kilometres)", seg)
print(i, m.group(0) if m else None, m.start() if m else None)
print(seg[m.start()-300:m.end()+50] if m else "")
