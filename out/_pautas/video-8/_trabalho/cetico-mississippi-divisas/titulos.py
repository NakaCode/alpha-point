# Conta os caracteres dos títulos propostos e as palavras do gancho.
t = ["Why 78 Pieces of States Are Stuck Across the Mississippi",
     "Why the Mississippi River No Longer Matches Its State Lines",
     "Why 450 Square Miles of States Sit Across the Mississippi",
     "How the Army Froze the Mississippi's State Lines in Place"]
for x in t: print(len(x), x)
g = ("The Mississippi River forms the border of ten states. Lay those borders over the river as it runs today, and they don't match: "
     "seventy-eight pieces of states sit on the wrong side of the water. Together, they're bigger than New York City.")
print(len(g.split()), "palavras no gancho")
