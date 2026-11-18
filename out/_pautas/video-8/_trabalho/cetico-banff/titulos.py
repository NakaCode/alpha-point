# Conta caracteres dos titulos candidatos e palavras do gancho.
ts = ["Why You Can Buy a House in Banff but Can't Live in It",
      "Why Remote Workers Can't Live in Banff",
      "Why Banff Can't Grow",
      "Why You Need a Job to Live in Banff",
      "Why You Can't Just Move to Banff"]
for t in ts:
    print(len(t), t)
g = ("Banff had a record four and a half million visitors last year. You can buy a house in town. "
     "But unless you work inside the national park, the law says you can't live in it. Why?")
print("gancho:", len(g.split()), "palavras")
