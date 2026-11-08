"""Aplica à tradução de leitura (roteiro-narrador-pt-BR.md) o gancho A escolhido pelo Lucas e a costura do ato 1 (o r3, 08/11/2026).

Uso: python -I -X utf8 -B aplicar-gancho-a-ptbr.py <roteiro-narrador-pt-BR.md>

O texto do gancho é a tradução de `_trabalho/ganchos-r3.md` (gancho A); as três emendas do ato 1 traduzem as do mesmo arquivo. Cada troca
exige achar o trecho antigo exatamente uma vez; se não achar, para sem gravar.
"""
import sys

GANCHO_VELHO_MARCA = "<!-- gancho · os cinco tempos (três parágrafos; o 1º termina na pergunta da miniatura, o 2º na pergunta do número) -->"
GANCHO_NOVO_MARCA = "<!-- gancho A (r3) · a imagem primeiro: a linha vista de cima, e quem a desenhou -->"

GANCHO_NOVO = (
    "Esta é a Praia do Cassino, no Brasil, vendida como a praia mais longa do mundo. Vista do alto, ela parece uma linha que alguém traçou. "
    "Dois muros marcam as suas pontas, a cerca de 132 milhas (212 km) uma da outra em linha reta, e a areia entre eles tem menos de cinco "
    "milhas (8 km) a mais.\n\n"
    "Mas as costas, em geral, não fazem isso. A maioria serpenteia: entra em baías, contorna pontas, passa por fozes de rio, e quanto mais "
    "longa a costa, mais espaço ela tem para serpentear. Esta corre de muro a muro e mal se dobra. Os muros das duas pontas, foram pessoas "
    "que construíram. A linha entre eles é a pergunta. Então, quem desenhou esta costa?\n\n"
    "Você está no Alpha Point, e é aqui que começa a história da praia que parece desenhada com régua."
)

TROCAS = [
    ("Comece pelo lugar onde a maioria das pessoas encontra o título",
     "De perto, essa linha não é bem uma linha. Perto do meio, a praia se arqueia mar adentro por cerca de 11 milhas (18 km), num S suave, "
     "e esse é o ponto em que ela mais se afasta da linha reta. Comece pelo lugar onde a maioria das pessoas encontra o título"),
    ("e recebeu a resposta que você ouviu há um minuto.",
     "e a resposta foi curta: ele não monitora esse título."),
    ("As 158 milhas, enquanto isso, estão impressas em duas páginas de sites do próprio governo do estado, cada uma com as palavras "
     "\"Guinness Book\" ao lado do número.",
     "E tem o número: 158 milhas (254 km), impressas em duas páginas de sites do próprio governo do estado, cada uma com as palavras "
     "\"Guinness Book\" ao lado."),
    ("73dbed36b793", "8c8beff8c0b4"),
]


def main():
    if len(sys.argv) < 2:
        print("uso: aplicar-gancho-a-ptbr.py <roteiro-narrador-pt-BR.md>")
        sys.exit(2)
    p = sys.argv[1]
    t = open(p, encoding="utf-8").read()
    # o gancho: da marca velha até a marca do p1, troca os três parágrafos
    i = t.find(GANCHO_VELHO_MARCA)
    j = t.find("<!-- p1 ·")
    if t.count(GANCHO_VELHO_MARCA) != 1 or j < i:
        print("não achei a marca do gancho uma vez só: parei sem gravar")
        sys.exit(1)
    bloco = t[i:j]
    k = bloco.find("## Gancho")
    if k < 0:
        print("não achei o título '## Gancho': parei sem gravar")
        sys.exit(1)
    novo_bloco = GANCHO_NOVO_MARCA + "\n\n## Gancho\n\n" + GANCHO_NOVO + "\n\n"
    t = t[:i] + novo_bloco + t[j:]
    for velho, novo in TROCAS:
        n = t.count(velho)
        if n != 1:
            print(f"o trecho aparece {n} vezes (esperado 1): {velho[:60]}…; parei sem gravar")
            sys.exit(1)
        t = t.replace(velho, novo)
    open(p, "w", encoding="utf-8", newline="\n").write(t)
    print("ok: o gancho A e as três emendas do ato 1 aplicados, e o sha12 do topo trocado")


if __name__ == "__main__":
    main()
