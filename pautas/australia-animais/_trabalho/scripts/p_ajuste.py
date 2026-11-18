# p_ajuste.py: troca, na pauta v1, os relógios da primeira versão pelos da contagem final do p_contas.py (sem rede).
# Uso: python -X utf8 -B pautas/australia-animais/_trabalho/scripts/p_ajuste.py pautas/2026-11-18-video-8-australia-pauta.md
import sys

caminho = sys.argv[1]
t = open(caminho, encoding="utf-8").read()
trocas = [
    ("## 7 · As camadas (15,9 min de fala, ~2.838 palavras, no ritmo de hoje)",
     "## 7 · As camadas (15,9 min de fala, ~2.840 palavras, no ritmo de hoje)"),
    ("**~2.838 palavras dão 15,9 min de fala** (15:51)", "**~2.840 palavras dão 15,9 min de fala** (15:52)"),
    ("1. **O gancho A (0:00–0:39, 117 palavras na voz, 7 números).**", "1. **O gancho A (0:00–0:40, 119 palavras na voz, 7 números).**"),
    ("2. **Ato 1 · O registro (0:39–2:53,", "2. **Ato 1 · O registro (0:40–2:54,"),
    ("3. **Ato 2 · O continente que viajou sozinho (2:53–5:24,", "3. **Ato 2 · O continente que viajou sozinho (2:54–5:25,"),
    ("4. **Ato 3 · Quem chegou primeiro: as cobras (5:24–8:05,", "4. **Ato 3 · Quem chegou primeiro: as cobras (5:25–8:06,"),
    ("5. **A inscrição falada (~8:05, ~51 % do vídeo).**", "5. **A inscrição falada (~8:06, ~51 % do vídeo).**"),
    ("a margem é de 2:32 depois do começo e de 1:26 antes do fim.", "a margem é de 2:33 depois do começo e de 1:25 antes do fim."),
    ("6. **Ato 4 · A água e o norte (8:10–10:01, ~330 palavras, 5 números).**", "6. **Ato 4 · A água e o norte (8:11–10:02, ~330 palavras, 4 números).**"),
    ("7. **Ato 5 · As aranhas (10:01–12:25,", "7. **Ato 5 · As aranhas (10:02–12:26,"),
    ("8. **Ato 6 · Quem mata de verdade (12:25–14:56, ~450 palavras, 10 números).**",
     "8. **Ato 6 · Quem mata de verdade (12:26–14:57, ~450 palavras, 11 números).**"),
    ("9. **O fecho (14:56–15:51, ~165 palavras, 4 números)**", "9. **O fecho (14:57–15:52, ~165 palavras, 4 números)**"),
    ("| gancho (A) | 117 | 7 | 17 | 0:00–0:39 |", "| gancho (A) | 119 | 7 | 17 | 0:00–0:40 |"),
    ("| 1 · o registro | 400 | 5 | 80 | 0:39–2:53 |", "| 1 · o registro | 400 | 5 | 80 | 0:40–2:54 |"),
    ("| 2 · o continente | 450 | 5 | 90 | 2:53–5:24 |", "| 2 · o continente | 450 | 5 | 90 | 2:54–5:25 |"),
    ("| 3 · as cobras | 480 | 7 | 69 | 5:24–8:05 |", "| 3 · as cobras | 480 | 7 | 69 | 5:25–8:06 |"),
    ("| inscrição | 14 | 0 | | 8:05–8:10 | |", "| inscrição | 16 | 0 | | 8:06–8:11 | |"),
    ("| 4 · a água e o norte | 330 | 5 | 66 | 8:10–10:01 | 70, 1971, ten (years of records), 13, 1935 |",
     "| 4 · a água e o norte | 330 | 4 | 83 | 8:11–10:02 | 70, 1971, 13, 1935 |"),
    ("| 5 · as aranhas | 430 | 5 | 86 | 10:01–12:25 | 150 to 200 million, 1981, 13, 14, 1950s |",
     "| 5 · as aranhas | 430 | 5 | 86 | 10:02–12:26 | 150 to 200 million, 1981, 13, 14, 1950s |"),
    ("| 6 · quem mata | 450 | 10 | 45 | 12:25–14:56 | 23, 17, four (hours), half (anafilaxia), 154, 202, a thousand, 2025, 1,276, one and a half (a confirmar) |",
     "| 6 · quem mata | 450 | 11 | 41 | 12:26–14:57 | 23, 17, four (hours), half (anafilaxia), 154, 202, a thousand, 2025, 1,276, one and a half (a confirmar), 2026 (o TGA) |"),
    ("| fecho | 165 | 4 | 41 | 14:56–15:51 | 150, 2026, half, 40 |", "| fecho | 165 | 4 | 41 | 14:57–15:52 | 150, 2026, half, 40 |"),
    ("| **total** | **~2.836** | **48** | **59** | **15,9 min** (+20 s) | |", "| **total** | **~2.840** | **48** | **59** | **15,9 min** (+20 s) | |"),
    ("**Os cortáveis**, nesta ordem, para chegar a 45: o 1935 (vai à tela; a voz diz \"in the\n1930s\"? não: sai inteiro, e a tela dá o ano), as \"more than four hours\" (vão à tela), e a medida contra os EUA (sai sozinha se a Sala não confirmar). O\n2026 do estudo do camundongo pode virar o nome do periódico na tela, mas a voz precisa de dono, e o ano é o dono mais curto.",
     "**Os cortáveis**, nesta ordem, para chegar a 45: o 1935 (a voz diz só \"a man on Hayman\nIsland\", e a tela dá o ano), as \"more than four hours\" (vão à tela) e a medida contra os EUA (sai sozinha se a Sala não confirmar). O 2026 do\nestudo do camundongo fica: a voz precisa de dono, e o ano é o dono mais curto. Ninguém conta \"decade\", \"a few\" nem \"tens of millions\"."),
    ("- **As contas** (`p_contas.py`, o bloco que abre com \"Out on the floodplains\"): o título 2 se paga nas frases 1 e 2, de 0 a 12,7 s; o 3, nas frases 3 e 6,\n  aos 12,7 e 23,5 s; o 1, nas frases 5 e 6 (de 19,1 a 24,5 s) e na pergunta (aos 28,5 s); **a pergunta é feita uma vez**, aos 28,5 s; 117 palavras na voz,\n  **39,2 s** a 179, em 9 frases, média de 13,0 palavras; 7 números (a dozen, 13, 2016, 2025, 85, 2025, 118).",
     "- **As contas** (`p_contas.py`, o bloco que abre com \"Out on the floodplains\"): o título 2 se paga nas frases 1 e 2, de 0 a 12,7 s; o 3, nas frases 3 e 6,\n  aos 12,7 e 24,1 s; o 1, nas frases 5 e 6 (de 19,8 a 25,1 s) e na pergunta (aos 29,2 s); **a pergunta é feita uma vez**, aos 29,2 s; 119 palavras na voz,\n  **39,9 s** a 179, em 9 frases, média de 13,2 palavras; 7 números (a dozen, 13, 2016, 2025, 85, 2025, 118)."),
    ("- **O gancho até 45 palavras:** as frases 1 a 3, **49 palavras, 16,4 s**:", "- **O gancho até 45 palavras:** as frases 1 a 3, **51 palavras, 17,1 s**:"),
    ("- **Os primeiros ~30 s** vão até a pergunta (a frase 8 termina aos 34,5 s; a 7, a da cama, aos 28,5).",
     "- **Os primeiros ~30 s** vão até a pergunta (a frase 7, a da cama, termina aos 29,2 s; a 8, a pergunta, aos 35,2)."),
    ("- **A imagem, beat a beat** (≈ 39 s, mais a vinheta):", "- **A imagem, beat a beat** (≈ 40 s, mais a vinheta):"),
    ("  - 35–39 s: a assinatura e a vinheta.", "  - 35–40 s: a assinatura e a vinheta."),
    ("   - **A voz paga** aos 23,5 s (gancho A, frase 6: \"Spiders killed none\")", "   - **A voz paga** aos 24,1 s (gancho A, frase 6: \"Spiders killed none\")"),
    ("- **a inscrição falada:** o lugar (~8:05, ~51 %) e a forma da frase;", "- **a inscrição falada:** o lugar (~8:06, ~51 %) e a forma da frase;"),
]
faltou = []
for velho, novo in trocas:
    n = t.count(velho)
    if n != 1:
        faltou.append((n, velho[:80]))
        continue
    t = t.replace(velho, novo)
open(caminho, "w", encoding="utf-8").write(t)
print(f"{len(trocas) - len(faltou)} de {len(trocas)} trocas feitas")
for n, v in faltou:
    print(f"  NÃO FEITA ({n} ocorrências): {v}")
