# Pauta de documentos — peru-agua (vídeo 4)

Peça `pesquisa-documentos`, tarefa `peru-agua-pesquisa-1`, passo `research`, 22/10/2026. O JSON ao lado
(`pauta-documentos.json`, 12 itens, contrato `pauta-pesquisa` com saída 0) tem o texto literal, os tempos do grifo
(`words.json`, grafia da voz) e a licença de cada página. Espelho lido: sha256 `a249aa6b…`.

## O que vai à tela e o que é prova

| Arquivo (`out/peru-agua/_media/documento/`) | Cena | Vai à tela? | Licença |
|---|---|---|---|
| `cobo-1882-p9.jpg` | s27 (plano 1, opcional) | sim, depois do conferente | domínio público (Commons, `{{PD-US-expired}}`) |
| `cobo-1882-p10.jpg` | s27 | sim, depois do conferente | idem |
| `cobo-1882-p14.jpg` | s28 (plano 2) | sim, depois do conferente | idem |
| `ana-pnrh-2013-prova-p38.jpg` | s10 | não (prova) | ANA/gob.pe: fora como imagem |
| `ana-politica-2009-prova-p1.jpg`, `-prova-creditos.jpg` | s12 | não (prova) | ANA/gob.pe: fora; "sin fines de lucro" |
| `inei-perfil-2017-prova-p18.jpg` | s32 | não (prova) | INEI/gob.pe: fora |
| `cvr-2003-tomo6-prova-p627.jpg` | s33 | não (prova) | sem licença no site da CVR; regra da violência |
| `senamhi-2016-prova-pdf58.jpg` | s41 | não (prova) | SENAMHI/gob.pe: fora; CC BY-NC-SA |
| `defensoria-id239-2025-prova-p74.jpg`, `-prova-capa.jpg` | s50 | não (prova) | Defensoría: sem licença lida |
| (texto só; cópia local da ProActivo) | s42 | não | SEDAPAL: fora |

## O texto que cada cena cita (a fonte confirma a voz em todas)

- **s10** — PNRH (ANA), Cuadro 2.3, p. 38: "Pacífico 278,48 [10³ km²] 21,67 [%]". A voz: "less than a quarter of the
  country". Grifo 105,39–107,89 s. A tabela tem três linhas (Pacífico, Amazonas, Titicaca); os cabeçalhos quase somem
  na página (branco sobre azul claro).
- **s12** — Política de 2009 (ANA), p. 1: "el 1.8% restante se encuentra en la vertiente del Pacífico, en donde
  **paradójicamente** se concentra el 65% de la población que produce el 80.4% del PBI." Grifo 114,73–116,38 s.
- **s27** — auto do cabildo de Jauja, 28/11/1534, em Cobo (1882), p. 10: "por ser **fria y de muchas nieves** […] por
  estar **cuarenta leguas de la mar y el camino muy despoblado** […] que **por cargarlos han sido muchos de ellos
  muertos**". Grifos 281,48–282,82 / 283,13–284,61 / 286,08–289,92 s. **A data 1534 é correção do editor de 1882**
  (nota 3, p. 9: "El MS. que poseemos dice 1539").
- **s28 (plano 2)** — ordem de Pizarro, Pachacamac, 06/01/1535, p. 14: "está en **comedio de tierra donde los dichos
  indios puedan servir con poco trabajo** […] junto á él **muy buen puerto**". Grifo 297,76–302,86 s.
- **s32** — INEI, Perfil Sociodemográfico 2017, p. 18: "la población de ser **predominantemente andina** ha pasado a
  ser **mayoritariamente costeña**". Grifos 363,32–364,68 e 365,29–366,38 s.
- **s33 (planos 2–3)** — CVR, Informe Final, t. VI, p. 627: "alrededor de medio millón de personas abandonaron sus
  localidades". Estimativa, dita como tal pela CVR.
- **s41 (plano 2)** — SENAMHI 2016, PDF p. 58: "La finalidad del proyecto fue cubrir la demanda del servicio eléctrico
  en la ciudad de Lima […] además de afianzar el caudal de río Rímac aguas abajo."
- **s42 (plano 1)** — SEDAPAL, 17/02/2021 (pela ProActivo): "El túnel transandino es el único medio de trasvase del
  agua almacenada en el sistema de lagunas de la cuenca del Atlántico hacia la cuenca del Pacífico".
- **s50 (plano 2)** — Informe Defensorial 239, p. 74: "**dependiendo de un solo túnel trasandino** con un **potencial
  riesgo de colapso ante sismos de alta intensidad** […] (SEDAPAL 2019: 9)". É "dependiendo", não "depender". O
  SEDAPAL 2019 da bibliografia é o tomo VI do Plan Maestro 2020–2025: "the utility's own plan" confere.

## Medida

Todas as imagens ≤ 40 MP (ffprobe; `identify` não existe): as provas, 2,2–2,3 MP (150 dpi, PyMuPDF); as de Cobo,
19,8–20,3 MP (resolução nativa do scan). Legibilidade no quadro: NÃO MEDIDO (sem Chrome nesta tarefa).

Relato completo: `out/peru-agua/_tmp/pesquisa-documentos/relato.md`.
