"""Aplica as correções de redação ao rascunho da pauta v2 (o corpo, antes de juntar com o fim do arquivo).

Uso: python -I -X utf8 -B corrigir_corpo_v2.py <corpo-v2.md>
Cada troca tem de casar exatamente uma vez; senão, para sem gravar.
"""
import sys

TROCAS = [
    ("As três condições dele para voltar a 6,0 estão cumpridas; as que subiriam a 6,5, não (§12).",
     "Das quatro condições dele para voltar a 6,0, três estão cumpridas e a quarta em parte; as que subiriam a 6,5, não (§12)."),
    ("   - Um decreto federal de 06/03/2026 criou o parque e a APA na faixa de Santa Vitória do Palmar.",
     "   - Um decreto federal de 06/03/2026 criou o parque e a APA no litoral de Santa Vitória do Palmar (os limites citam a Lagoa Mangueira e a\n"
     "     foz do Arroio Chuí; de que ponto a que ponto da areia, a confirmar)."),
    ("\"o modelo explica como a ação das ondas pode suprimir as reentrâncias e saliências (projeções) da linha de costa. Como conseqüência da "
     "refração de ondas as projeções costeiras tendem a concentrar a energia das ondas, enquanto as reentrâncias tendem à dispersão dessa "
     "energia, resultando na erosão das projeções e na deposição do material erodido nas reentrâncias adjacentes\" (o modelo de May e Tanner, 1973)",
     "\"o modelo explica como a ação das ondas pode suprimir as reentrâncias e saliências (projeções) da linha de costa\" (o modelo de May e "
     "Tanner, 1973). Em resumo do artigo: pela refração, as projeções concentram a energia das ondas e se desgastam, e o material vai para as "
     "reentrâncias ao lado"),
    ("\"o sistema praial do RS recebe muito pouca areia do continente, pois a carga de fundo dos rios […] é depositada no interior de lagoas e "
     "lagunas\" (Dillenburg)",
     "o sistema praial \"recebe muito pouca areia do continente\", porque a carga de fundo dos rios fica nas lagoas (Dillenburg)"),
    ("\"entre Hermenegildo e o Chuí (10 km), depósitos de lama lagunar e turfa afloram na zona de pós-praia, indicando uma natureza "
     "retrogradante da barreira\"",
     "entre o Hermenegildo e o Chuí (10 km), \"depósitos de lama lagunar e turfa afloram na zona de pós-praia\": a barreira ali é retrogradante "
     "(recua para terra)"),
    ("39 mi (o IBGE, pelo g1 e pela Fepam: o limite municipal é o único critério).",
     "39 mi (a medida do IBGE, S1; o enquadramento do nome é do g1 e da Fepam: o limite municipal é o único critério)."),
    ("parado numa comissão do Senado em novembro de 2026.", "à espera de relator numa comissão do Senado em novembro de 2026."),
    ("tem dente. Os 23 mi a mais não estão na areia, e nenhuma fonte que lemos diz quem os mediu.",
     "tem dente. Os 20 e poucos mi a mais não estão na areia, e nenhuma fonte que lemos diz quem os mediu."),
    ("geólogos da UFRGS, uma vez na voz). Nenhuma rocha para segurar uma ponta.", "geólogos da UFRGS, uma vez na voz)."),
    ("As três condições do cético para voltar a 6,0 estão cumpridas: a medida com as réguas e a corda; a origem dos 254 lida (o turismo e a",
     "Das quatro condições do cético para voltar a 6,0, três estão cumpridas e a quarta em parte: a medida com as réguas e a corda; a origem dos 254\nlida em parte (o turismo e a"),
    ("O vídeo prova que os 23 mi não estão na areia", "O vídeo prova que os 20 e poucos mi não estão na areia"),
]


def main():
    caminho = sys.argv[1]
    with open(caminho, encoding="utf-8") as f:
        txt = f.read()
    for velho, novo in TROCAS:
        n = txt.count(velho)
        if n != 1:
            print(f"não casou exatamente uma vez ({n}): {velho[:80]}")
            sys.exit(1)
        txt = txt.replace(velho, novo)
    with open(caminho, "w", encoding="utf-8", newline="\n") as f:
        f.write(txt)
    print(f"{len(TROCAS)} trocas aplicadas")


if __name__ == "__main__":
    main()
