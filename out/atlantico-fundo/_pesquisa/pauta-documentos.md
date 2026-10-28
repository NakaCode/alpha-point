# Pauta de documentos — atlantico-fundo (vídeo 4)

Peça `pesquisa-documentos`, passo `research`, 28/10/2026, retomada depois da queda de energia. O JSON ao lado
(`pauta-documentos.json`, 14 itens) passa no contrato `pauta-pesquisa` (saída 0). Ele tem o texto literal, os tempos do
grifo pelo `words.json` (grafia da voz, sha256 `76e0514b…`), as caixas em px e a licença de cada peça. Espelho lido: sha256
`8899a33b…`.

## Divergências entre a fonte e o espelho (primeiro)

1. **s16: "No record is known…" está na p. 8, não na p. 46.** O motivo de s16 põe os dois grifos na p. 46. A p. 46 tem
   "finding the bottom to be brown ooze" e a frase irmã, "This is believed to be the greatest depth from which bottom
   specimens and temperature have been obtained". A p. 8 tem as duas frases que a voz diz, uma atrás da outra:
   "…and the specimen-cup brought up brown ooze. No record is known of any sounding from which bottom specimen and
   temperature have been obtained at a depth equaling this." **Recomendo a p. 8 para s16**, e a p. 46 fica de
   alternativa. As duas confirmam a voz.
2. **s73, plano 2: a metade final não está na fonte.** O trecho "and the animals the 1964 crew saw that day can't be
   checked again" não está no resumo. É ressalva do narrador, e é verdadeira pela lógica: ninguém guardou os animais de
   1964. Ela não leva grifo nem aspas, e não pode aparecer como frase do artigo. "The count and the look" bate com o
   resumo: "in a density similar to that reported originally for the snailfish" e "a similar exterior colour, texture
   and morphology".
3. **s08 e s56: a Tabela 1 não tem "Brownson Deep".** A página 4 inteira não tem o nome; ele só aparece nas p. 12 e 13
   do artigo, que não se usam. A Tabela 1 pode ir inteira, sem recorte por causa do N08.
4. **s21: a voz diz "newspapers" (plural), e se leu um jornal só.** O boletim traz "WNU Service" (Western Newspaper
   Union, que distribuía o mesmo texto a muitos jornais). Isso apoia o plural, mas não o prova. Fica para o verificador.
5. **s59: grifar a frase inteira.** O _grafias cita só o predicado ("propagated uncorrected…"). O sujeito é "Out of
   date, erroneous, misleading, or non-existent data on these locations", e a voz o diz como "numbers like these".
   Proponho duas varreduras: o sujeito e depois o predicado.

## O que vai à tela e o que é prova

| Arquivo (`out/atlantico-fundo/_media/documento/`) | Cena | À tela? | Licença | sha256 |
|---|---|---|---|---|
| `stewart-jamieson-2019-p4.jpg` (3308×4410, 14,6 MP) | s08, s56 p2 | sim, depois do conferente | CC BY 4.0 | `82c102bd…` |
| `stewart-jamieson-2019-p6-gazetteer.jpg` (2225×462) | s56 p2 / s08 (alternativa) | sim, depois do conferente | CC BY 4.0 | `147342ba…` |
| `stewart-jamieson-2019-p1-resumo.jpg` (3042×1184) | s59 | sim, depois do conferente | CC BY 4.0 | `c6a6ed9a…` |
| `stewart-jamieson-2019-p1-titulo.jpg` (3875×718) | s56 p1 (opcional) | sim, depois do conferente | CC BY 4.0 | `b727bf40…` |
| `uscgs-1883-p8.jpg` (2562×3310) | s16 (recomendada) | sim, depois do conferente | domínio público federal | `e435ec98…` |
| `uscgs-1883-p46.jpg` (2588×3330) | s16 (alternativa); dado de s12, s14 | sim, depois do conferente | domínio público federal | `cf82473f…` |
| `uscgs-1883-prova-p113.jpg` | s14 | não (prova) | domínio público | `b5834073…` |
| `iho-m3-2026-prova-p124.jpg`, `-p123.jpg`, `-p2-copyright.jpg` | s69 (e s68) | não (prova) | © IHO, sem permissão | `7519f20f…`, `4c2479ff…`, `145adca7…` |

Nenhuma imagem passa de 40 MP (medido pelo ffprobe). As páginas saíram do PDF local pelo PyMuPDF 1.28.0: o vetor de 2019
a 400 dpi (a página) e a 600 dpi (os recortes), e o escaneamento de 1883 na resolução nativa (~301 dpi), sem upscale.

Só texto, sem imagem na tela:

| Peça | Cena | Licença | Na tela |
|---|---|---|---|
| The Sun (Newberry, S.C.), 28/07/1939, p. 3: o boletim da National Geographic Society | s21, s56 p3 | **NÃO CONFERIDA** | recriação, até a Sala ler a licença |
| Jamieson, Linley, Stewart, Nargeolet & Vescovo, Deep-Sea Research I, 2020 | s73 | © Elsevier | recriação (o espelho já pede) |
| Popular Science, 21/12/2018 (Josh Dean, a bordo) | s52 (data), s54 ("One down!") | © | card e citação recriados |
| GEBCO Gazetteer, consulta à API da NCEI, 28/10/2026 | s62 | fato, nada reproduzido | recriação da consulta |

## O texto que cada cena cita (a fonte confirma a voz em todas, com as ressalvas acima)

- **s08** — Tabela 1, linha do Atlântico: "Milwaukee Deep (Puerto Rico Trench) | 19.58333° N | 66.5° W | 8740 | GEBCO
  Gazetteer". Grifo em 43,60–45,35 s ("official list of undersea features"). A nota ao pé liga a coluna à voz: "'GEBCO
  Gazetteer' refers to the IHO-IOC GEBCO Gazetteer of Undersea Feature Names". Não grifar o "List" do título da tabela.
- **s56 p2** — a mesma linha, em três grifos na ordem da voz: "GEBCO Gazetteer" (462,52–464,48), "Milwaukee Deep"
  (464,56–465,68) e "8740" (465,76–467,97). A tabela está em metros, e a conversão é do redator (8,740 m = 28,675 ft). A
  alternativa é a p. 6: "8740 m as published in the IHO-IOC GEBCO Gazetteer of Undersea Feature Names", grifo em
  462,52–467,97, que é a frase mais literal para "the official list of undersea features".
- **s56 p3** — The Sun, 1939 (OCR): "a new record of nearly five and a half miles (28,680 feet)" e "North Atlantic, the
  new Milwaukee deep, 28,680 feet". Grifo em 468,60–472,22.
- **s59** — resumo: "Out of date, erroneous, misleading, or non-existent data on these locations have **propagated
  uncorrected through online sources and the scientific literature**." Grifos em 491,67–492,41 e 492,49–496,78.
- **s16** — p. 8: "and the specimen-cup brought up brown ooze" (88,99–91,62) e "No record is known of any sounding from
  which bottom specimen and temperature have been obtained at a depth equaling this" (93,13–96,71).
- **s14** — p. 46: "under command of Lieutenant Commander W. H. Brownson, U. S. N., Assistant Coast Survey". Prova da
  p. 113: "relieved October 1, 1882, by Lieut. Commander W. H. Brownson". O card e o retrato são do pesquisa-pessoas.
- **s21** — The Sun: "New Method Used to Map Ocean Floor" / "Prepared by National Geographic Society, Washington, D.
  C.—WNU Service." Grifos em 131,80–132,51 ("printed the news") e 132,55–135,00 ("a bulletin from the National
  Geographic Society").
- **s62** — `nameContains=Milwaukee` e `nameContains=Brownson` devolvem `totalItems: 0`. O controle `Puerto Rico`
  devolve 1 item, a fossa (APPROVED). Consultas de 28/10/2026, 13:00–13:03, HTTP 200, a mesma resposta da consulta do
  dossiê de 26/10. A busca prova que o nome não está na lista hoje; não prova quando nem por que saiu.
- **s69** — IHO, Res. 02/2023 (M-3, set. 2026, PDF p. 124): "Since these limits have **neither political nor
  oceanographic or, more generally, environmental significance whatsoever**, **Hydrographic Offices may continue to
  adopt their own limits**…". Grifos em 622,10–623,91 e 624,14–625,61. O "not every country" se apoia também no Apêndice
  1 (a Argentina e a Austrália), e nenhum país vai à tela.
- **s73** — resumo (NORA): "It is concluded that the reported hadal snailfish of the Puerto Rico Trench was in fact a
  misidentification of the holothurian Peniagone sp." (663,59–668,09). Depois vêm a contagem (668,63–670,40) e a
  aparência (670,48–671,00). "Vescovo" acende em 676,79.
- **s52 / s54** — Popular Science: "on Wednesday, December 19" (19/12/2018 foi quarta-feira) e "“One down!” […] Or at
  least those were the first intelligible words". O "heard him say" da voz está certo.
