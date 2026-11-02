# Volta a média e a maior frase do portão de Big Sur aos tetos do molde (18 e 34), com a prova, em 02/11/2026: o Lucas achou o
# roteiro "engessado", e os tetos de 15 e 30 que a Sala tinha posto para o ritmo calmo deixaram o texto picado.
# Uso: python -I -X utf8 -B roteiros/big-sur/_trabalho/gate-teto-molde.py   (cwd = raiz do canal)
G = "roteiros/big-sur/_ferramentas/gate.mjs"
P = "roteiros/big-sur/_ferramentas/gate-provar.mjs"
TROCAS = {
    G: [
        ("//   - A MÉDIA de no máximo 15 palavras por frase e NENHUMA frase acima de 30 (a mesma decisão: frases mais curtas e mais espaço entre os\n//     fatos). O molde tinha 18 (o teto da voz §1, que continua o da marca) e 34.",
         "//   - A MÉDIA de no máximo 18 palavras por frase e NENHUMA frase acima de 34, os tetos do molde (o 18 é o da voz §1). A Sala tinha posto\n//     15 e 30 para o ritmo calmo; em 02/11/2026 o Lucas achou o roteiro \"engessado\" (\"não comunica bem com o público\"), e os tetos\n//     voltaram aos do molde: o ritmo calmo vem do espaço entre as ideias, não de frases cortadas."),
        ("const MEDIA_MAX = 15, FRASE_MAX = 30;", "const MEDIA_MAX = 18, FRASE_MAX = 34;"),
        ("(teto ${MEDIA_MAX}: o ritmo calmo, do vídeo 5 em diante, a Sala, 02/11/2026; a voz §1 diz 18)", "(teto ${MEDIA_MAX}: a voz §1)"),
        ("(teto ${FRASE_MAX}, o ritmo calmo: a Sala, 02/11/2026)", "(teto ${FRASE_MAX}, o do molde)"),
    ],
    P: [
        ("a média (15) e a maior frase (30): o piso", "a média (18) e a maior frase (34): o piso"),
        ("(teto 15), maior ${L.maior_frase} (teto 30)", "(teto 18), maior ${L.maior_frase} (teto 34)"),
        ('secao("A faixa (2.250 a 2.450), a média (15) e a maior frase (30)");', 'secao("A faixa (2.250 a 2.450), a média (18) e a maior frase (34)");'),
        ("metade das frases); nenhuma passa de 30", "metade das frases); nenhuma passa de 34"),
        ('caso("media-acima-de-15",', 'caso("media-acima-de-18",'),
        ("// a maior frase: 30 passa, 31 reprova", "// a maior frase: 34 passa, 35 reprova"),
        ('caso("frase-de-30", { trocas: { [I]: longa(30) } }, { exit: 0, semProblema: ["frase com"], nota: "uma frase de 30 palavras passa" });',
         'caso("frase-de-34", { trocas: { [I]: longa(34) } }, { exit: 0, semProblema: ["frase com"], nota: "uma frase de 34 palavras passa" });'),
        ('caso("frase-de-31", { trocas: { [I]: longa(31) } }, { exit: 1, problema: ["frase com 31 palavras (teto 30"], so: true, nota: "uma frase de 31 palavras reprova" });',
         'caso("frase-de-35", { trocas: { [I]: longa(35) } }, { exit: 1, problema: ["frase com 35 palavras (teto 34"], so: true, nota: "uma frase de 35 palavras reprova" });'),
        ('caso("frase-de-34-do-molde", { trocas: { [I]: longa(34) } }, { exit: 1, problema: ["frase com 34 palavras (teto 30"], so: true,\n  nota: "o teto do molde (34) já reprova" });',
         'caso("frase-de-31-de-antes", { trocas: { [I]: longa(31) } }, { exit: 0, semProblema: ["frase com"],\n  nota: "o teto de antes (30) já não reprova: 31 passa" });'),
    ],
}
for arq, trocas in TROCAS.items():
    s = open(arq, encoding="utf-8").read()
    for de, para in trocas:
        assert s.count(de) == 1, (arq, de[:60], s.count(de))
        s = s.replace(de, para)
    open(arq, "w", encoding="utf-8", newline="").write(s)
print("ok")
