import sys, fitz
doc = fitz.open(sys.argv[1])
for p in doc:
    print(p.get_text())
