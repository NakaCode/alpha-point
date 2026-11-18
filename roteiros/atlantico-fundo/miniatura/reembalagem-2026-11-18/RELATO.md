# As miniaturas da reembalagem do vídeo 4 (`atlantico-fundo`): o relato (18/11/2026)

O pedido: `out/_reembalagem/2026-11-18/pedido-miniaturas.md` (com o estilo, o código e as regras do pedido do Grand Canyon,
`pautas/arizona-strip/_trabalho/pedido-miniaturas.md`) e o despacho da Sala. O laudo: `out/_reembalagem/2026-11-18/atlantico-fundo/cetico.md`, §4.

- **As novas** (§4.2 do cético): **n1 "83 MILES"** (o lugar) e **n2 "NOT FISH?"** (o mistério).
- **As do Lucas** (§4.1), só as prévias, sem mudar o desenho: a **C** ("NOT THE MARIANA TRENCH", a que está no ar) e a **A2** ("RIGHT HERE?", a que foi
  ao teste).
- **O título embaixo, na folha**: o mais clicável do cético (N1), *A 1964 Crew Counted 200 Fish Deep in the Atlantic. In 2019, None.*

## Os arquivos

Tudo em `roteiros/atlantico-fundo/miniatura/reembalagem-2026-11-18/`:

| Arquivo | O que é |
|---|---|
| `folha.png` | As quatro lado a lado, as do Lucas primeiro (C, A2, n1, n2), como o YouTube mostra: a 1280 com o título embaixo, a 320 com o título embaixo, a 168 com o título ao lado e a 168 ampliada 3 vezes (só para conferir a palavra). O selo é o da duração do vídeo, 11:54 (714,2 s, `out/atlantico-fundo/descricao-youtube.md`, l. 70). |
| `n1-*`, `n2-*` | Para cada uma: `-2560.jpg` (2560×1440), `-1280.jpg` (1280×720), `-320.png`, `-168.png` e as medidas em `-pontos.json`. |
| `l-C-*`, `l-A2-*` | As do Lucas: `-1280.jpg` é a cópia byte a byte do `miniatura-<id>-1280.jpg` de `roteiros/atlantico-fundo/miniatura/` (sha256 conferido; C `4ae29126…`, A2 `97d1b73b…`), e a `-320.png` e a `-168.png` saem dela por LANCZOS. O registro está em `l-pontos.json`. |
| `n1.py`, `n2.py` | O script de cada nova: as peças por cima do mapa. Sem rede. |
| `atlantico.py` | O mapa comum: a grade, o relevo, o mar, a fossa e Porto Rico. Sem rede. É uma cópia do `base-A2.py` do vídeo, refeita no estilo de hoje (o topo do arquivo diz o que ficou e o que saiu). |
| `lucas.py` | As prévias das do Lucas. Sem rede. |
| `mapa.py`, `folha.py` | Cópias das de `roteiros/australia-animais/miniatura/`, mudadas aqui. O topo de cada uma diz o que mudou: no `mapa.py`, a pasta, o `Quadro.por_lon()` (o quadro do cético) e o `tracejado()` (a linha da medida). |
| `_bases/` | Só a grade GEBCO em `.npy` (47 MB, lida do `.asc` conferido) e os ensaios em `_bases/_tmp/` (as rodadas `n1-e*`, `n2-e*`, os mapas sem peças e dois scripts de olhar: `ver.py` e `recorte.py`). Fica fora do git (`.gitignore`, linha 108). |

**Para refazer**, da raiz do canal e sem rede:

```
python -X utf8 -B -P roteiros/atlantico-fundo/miniatura/reembalagem-2026-11-18/n1.py
python -X utf8 -B -P roteiros/atlantico-fundo/miniatura/reembalagem-2026-11-18/n2.py
python -X utf8 -B -P roteiros/atlantico-fundo/miniatura/reembalagem-2026-11-18/lucas.py
python -X utf8 -B -P roteiros/atlantico-fundo/miniatura/reembalagem-2026-11-18/folha.py
```

Rodar de novo dá o mesmo arquivo: rodei cada uma duas vezes, e o sha256 dos `-2560.jpg` não mudou (n1 `5dc8fe56…`, n2 `fc48559e…`).

Nenhum arquivo antigo foi editado. De `roteiros/atlantico-fundo/miniatura/`, o `base-A2.py` foi copiado como `atlantico.py` e mudado na cópia, o
`C-RELATO.md` e a `banca-abc.md` foram lidos, e os dois JPG de 1280 foram só copiados. O `base-C.py` não foi usado. O `_medir.py` do cético foi rodado,
sem editar.

## O mapa (o mesmo método nas duas)

- **A base é a grade GEBCO_2026 de 15"** que já estava no disco, a mesma do `base-A2.py`: o recorte `gebco_2026_n26.0_s14.0_w-75.0_e-58.0`, Esri ASCII,
  em `out/atlantico-fundo/_tmp/pesquisa-geo/baixado/gebco-cesta-1/x/`.
  - O sha256 do `.asc` confere com o `8cd9cbbb…` do `_PROCEDENCIA.json` da base `gebco-caribe.png` antes de ler.
  - A grade lida (`_bases/gebco-caribe-asc.npy`) é idêntica, célula a célula, ao `.npy` da pesquisa-geo.
  - Ela tem a altitude da terra e a profundidade do mar: o relevo amarelo e o sombreado do fundo saem da mesma grade.
- **O relevo** é o de Horn na grade, com o espaçamento real em metros (o do `base-A2.py`), a luz em 315° e 45°, e exagero vertical de 5× na terra e de 4×
  no mar. Depois passa pelo `Relevo` do `mapa.py` (o volume e o contraste local das miniaturas de hoje), normalizado à parte na terra e no mar.
- **A terra** é Z > 0 da grade, menos perto de Porto Rico (0,08° em volta), onde manda o polígono do Census, como no `base-A2.py`. Fora de 4 px da costa,
  o Census e a grade discordam em 0,12 % dos pixels dessa faixa.
- **O mar** é azul (o `AZUL` das referências no abismo), mais claro na plataforma e um pouco mais escuro no fundo, com o relevo do fundo por cima.
- **A fossa** é a isóbata de 7.000 m (`fossa-porto-rico.json`) em vermelho, com o relevo do fundo por dentro (as ranhuras das paredes continuam), a sombra
  por fora e o contorno branco de 5 px.
  - **O miolo** (a isóbata de 8.000 m, `fossa-porto-rico-trecho-mais-fundo.json`) vai no vermelho × 0,6, sem contorno: o "mais escuro é mais fundo".
  - Conferido contra a grade: 99,4 % do vermelho tem Z < −7.000 m, e 98,9 % do miolo, Z < −8.000 m. A diferença é a tolerância de 0,002° com que o
    polígono foi simplificado.
- **Nenhum nome de lugar, nenhum número de profundidade, nenhum bicho, nenhuma foto.** Na imagem só estão "83 MILES" ou "NOT FISH?" e o rótulo genérico
  TRENCH.
- **O rótulo TRENCH**: branco (Inter 800, 58 px, com a sombra dos rótulos), no vermelho claro do lobo sul da fossa, fora do miolo. Só lê a 1280.

## n1, "83 MILES" (o lugar)

- **O quadro** é o do cético: Web Mercator, de 71,0 a 64,2 O, centro em 19,25 N (de 17,43 a 21,05 N), 376,5 px por grau.
- **As cores**:
  - o vermelho (a fossa) tem **10,4 %** da imagem, e o miolo, 2,6 %;
  - Porto Rico em **ciano**: o `porto-rico.json` inteiro (o Census, com Vieques, Culebra, Mona e Desecheo), com o relevo pintado de ciano e misturado ao
    amarelo a 85 %, e o contorno branco de 5 px (que pula as ilhotas de menos de 300 px, como Desecheo, para não virarem pontos brancos). 3,1 % da imagem;
  - em amarelo, a República Dominicana à esquerda e as Ilhas Virgens embaixo, à direita: só base.
- **As peças**:
  - **o ponto branco** de 44 px, com contorno escuro de 6 px, no ponto mais fundo (19,712 N; 67,311 O; F10). Ele cai dentro do miolo, onde a grade dá
    −8.374 m (o S01 dá 8.378 ± 5 m);
  - **a linha da medida**: branca, tracejada (16 px, traço de 40, vão de 24), do ponto à costa de Aguadilla (18,513 N; 67,1145 O; F04), com um ponto
    branco de 28 px na costa. Tem 483 px de centro a centro. A distância pela geodésica de Vincenty dá **134,32 km, ou 83,46 mi**, e a voz diz "About 83
    miles off Puerto Rico" no primeiro segundo. O ponto da costa cai na borda do polígono de Porto Rico;
  - **a seta** (614 px; corpo de 40 a 84 px, cabeça de 170 × 236) sai da borda direita da caixa, na altura do "83", e desce em curva sobre o mar aberto
    até o ponto, chegando pelo noroeste. A ponta para a 30 px da borda do ponto, e a seta não cruza a linha da medida;
  - **TRENCH** no lobo sul da fossa, a leste da linha.
- **A caixa** fica em cima, à esquerda, no Atlântico ao norte da República Dominicana, de 2,0 % a 31,6 % da largura.
  - "83" vai em amarelo (300 px), e "MILES", em branco (212 px), em duas linhas, com o sublinhado vermelho.
  - Fica a 128 px do vermelho e cobre a ponta noroeste da República Dominicana (5 % da caixa fica sobre a terra; o cético deixou encostar).
- **O que mudei do pedido**: "MILES" foi a 212 px, e não aos ~200: a 200, a maiúscula dava 9,6 px no 168 (`_bases/_tmp/n1-e1-*`). A seta tem 614 px, e não
  os ~700: mais longa, ela teria de sair mais de cima ou fazer mais curva sobre o mar.
- **Os títulos**: serve ao N1, ao N2 e ao T1. **Com o T2, repete o "83": não usar com ele** (o cético).

## n2, "NOT FISH?" (o mistério; só com o N1)

- **O quadro** é o do cético: Web Mercator, de 68,8 a 63,4 O, centro em 19,6 N (de 18,16 a 21,02 N), 474,1 px por grau.
- **As cores**:
  - o vermelho tem **17,5 %** da imagem, e o miolo, 4,2 %. A fossa atravessa a imagem de x 131 até a borda direita: aqui ela é a cena;
  - nada em ciano;
  - em amarelo, a costa norte de Porto Rico (embaixo), a ponta leste da República Dominicana (canto de baixo à esquerda) e as Ilhas Virgens (embaixo, à
    direita).
- **As peças**:
  - nenhum ponto;
  - **a seta** (528 px; o mesmo corpo e a mesma cabeça da n1) sai da borda de baixo da caixa, sob "FISH?", e desce em curva até o vermelho claro da parede
    norte da fossa. A ponta cai a 67,60 O e 19,80 N, **dentro do vermelho e fora do miolo**, onde a grade dá −7.499 m. Ela chega pelo nordeste, com a
    cabeça sobre o mar e só a ponta no vermelho. Na 1ª rodada (`_bases/_tmp/n2-e1-*`), ela chegava quase na horizontal, e a cabeça cobria o miolo
    (12,6 % da seta, contra 3,9 % agora);
  - **A SETA É ESQUEMÁTICA.** O disco não tem o ponto do mergulho de 1964: a fonte (S06) dá só "7300 m in the Puerto Rico trench". A seta diz "nesta
    fossa", não "aqui". Ela fica fora do miolo porque 7.300 m cai entre as isóbatas de 7.000 e de 8.000;
  - **TRENCH** no lobo sul da fossa.
- **A caixa** fica em cima, à esquerda, sobre o Atlântico aberto: "NOT" em branco e "FISH?" em amarelo, numa linha (250 px), com o sublinhado vermelho.
  - Vai de 2,0 % a 57,1 % da largura e fica a 80 px do vermelho.
  - Não coube em duas linhas: a fossa sobe até y ~560 na metade oeste, e as duas linhas com "FISH?" grande pediam uns 490 px de altura, sem lugar para a
    seta de 450 px.
- **Os títulos**: só funciona com o N1. Com o T1, o T2, o T3 ou o N2, "NOT FISH?" fica sem objeto. Se o Lucas não escolher o N1, ela não entra.

## As medidas, lado a lado

| | C (Lucas, no ar) | A2 (Lucas, teste) | n1 | n2 |
|---|---|---|---|---|
| o protagonista (fração da imagem) | — | — | fossa 10,4 % (miolo 2,6 %) | fossa 17,5 % (miolo 4,2 %) |
| maiúscula da caixa no 168 | 11,3 px (C-RELATO) | — | **83 14,3 px**; MILES 10,2 px | **NOT FISH? 11,9 px** |
| a caixa, na largura | — | — | 2,0 % a 31,6 % | 2,0 % a 57,1 % |
| distância da caixa ao vermelho | — | — | 128 px | 80 px |
| peças sobre o vermelho | — | — | 3,0 % | 2,4 % |
| canto da duração (320 × 320 do palco) | livre (C-RELATO) | livre | livre (alfa 0; são as Ilhas Virgens, só base) | livre (alfa 0) |
| luminância média | 94,6 (C-RELATO) | — | 101,7 | 94,7 |
| JPG de 1280 | 461 KB | 407 KB | 437 KB, q 95 | 405 KB, q 95 |

## A conferência

**Os três tamanhos, com o título embaixo** (`folha.png`, com o selo de 11:54). Olhei cada uma a 1280, a 320 e a 168, e a 168 ampliada 3 e 4 vezes.
- **A palavra lê no 168 nas duas novas**: "83 MILES" e "NOT FISH?". O "83" amarelo é o texto mais forte da folha a 168.
- **A geografia lê no 168**: na n1, a fossa vermelha, a ilha ciano embaixo e a seta. A linha tracejada vira um fio cinza a 168, mas lê a 320. Na n2, a
  faixa vermelha com o miolo escuro e a seta.
- **O ponto da n1** é pequeno a 168, mas a seta leva até ele.
- O selo não cobre peça nenhuma. TRENCH só lê a 1280.

**A geografia** (os `-pontos.json`; sem rede):
- cada arquivo de `out/atlantico-fundo/_media/geo/` usado (a fossa de 7.000 e a de 8.000 m, Porto Rico, o ponto mais fundo e a costa de Aguadilla) foi
  conferido pelo sha256 do `out/atlantico-fundo/_pesquisa/pauta-geo.json` antes de usar;
- as posições no palco batem com as do `_medir.py` do cético: o ponto em (1388,8; 535,5) e a costa em (1462,8; 1013,2) na n1; o ponto em (705,9; 663,6) na
  n2; a fossa de 7.000 m a partir de x 932 (n1) e x 131 (n2);
- o vermelho e o miolo contra a grade, o Census contra a grade e o ponto mais fundo: acima, em "O mapa";
- o ponto da costa de Aguadilla cai na borda do polígono de Porto Rico, e a distância dá 83,46 mi.

## As fontes, as licenças e o crédito

| Camada | Fonte | Licença e crédito |
|---|---|---|
| a terra, o relevo e o fundo do mar; a fossa (as isóbatas de 7.000 e de 8.000 m saem da mesma grade) | GEBCO Compilation Group (2026), GEBCO_2026 Grid, o recorte de 15" já no disco (sha256 `8cd9cbbb…`); os polígonos `fossa-porto-rico.json` (`c7ab743f…`) e `fossa-porto-rico-trecho-mais-fundo.json` (`fe65ab32…`) | **Domínio público, com o reconhecimento da fonte.** Li os termos no PDF que veio com a grade (`out/atlantico-fundo/_tmp/pesquisa-geo/baixado/gebco-cesta-1/x/GEBCO_Grid_terms_of_use.pdf`, lido em 18/11/2026): "The GEBCO Grid is placed in the public domain and may be used free of charge"; o usuário pode adaptar e usar comercialmente; deve reconhecer a fonte, não sugerir aval do GEBCO, da IHO ou da IOC, e não deturpar a grade. Não serve para navegação. O crédito vai na descrição, como na C: "Imagery reproduced from the GEBCO_2026 Grid, GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi:10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" (`C-RELATO.md`, "A base e a licença"). A descrição do vídeo já cita a GEBCO |
| Porto Rico (o ciano na n1; o recorte da terra perto da ilha nas duas) | U.S. Census Bureau, Cartographic Boundary Files 2025, `cb_2025_us_county_500k` (a união dos 78 municípios), `porto-rico.json` (`34112f86…`) | **Domínio público** (obra federal dos EUA), sem crédito obrigatório, pelo `pauta-geo.json` |
| o ponto mais fundo e a costa de Aguadilla | `ponto-mais-fundo-atlantico.json` (F10) e `aguadilla-costa-ponto.json` (F04) do dossiê do vídeo | coordenadas publicadas, sem crédito de geometria (`pauta-geo.json`) |
| as letras | `marca/fontes/inter` | SIL OFL |

**Fora**: nada da MapTiler, do OpenStreetMap ou de serviço pago, nada desenhado à mão nem por IA, nenhum vidIQ, nenhum navegador, nenhum `SendMessage`,
nenhum commit.

## Os pedidos de rede: 0

Tudo já estava no disco: a grade GEBCO, os polígonos do vídeo e os termos de uso da GEBCO. Não houve site novo nem robots.txt a ler, e nada foi baixado
para `_bases/`.

## O que declaro de método

- **Usei `python -c "print(1)"` uma vez**, por descuido, no fim de uma linha de comando. Não tinha rede nem leu ou gravou arquivo, mas fere a regra
  ("nunca `python -c`"). Todo o resto rodou como `python -X utf8 -B -P <arquivo>.py`.
- Os ensaios ficaram em `_bases/_tmp/` (fora do git). Não apaguei nada fora dela.

## O que ficou fraco

- **O vermelho ainda pode ler como terra.** O miolo escuro, as ranhuras do fundo dentro do vermelho e o TRENCH ajudam, mas a 168 a fossa é uma mancha
  vermelha no mar, com uma "baía" azul na parede sul. O TRENCH só lê a 1280. Só a banca e os leitores dizem se basta.
- **A seta da n2 é esquemática**: o disco não tem o lugar do mergulho de 1964. O ponto em que ela cai não tem fonte, só a faixa de profundidade.
- **A n2 é casada com o N1**, e a n1 não serve ao T2. Nenhuma das duas novas funciona com os três títulos do trio do cético. A C é a que atravessa os três.
- **A linha tracejada some a 168**: vira um fio cinza. O "83" da caixa e a distância visível entre a ilha e a fossa carregam a medida no tamanho pequeno.
- **A caixa da n1 cobre a ponta noroeste da República Dominicana** (5 % da caixa sobre a terra).
- **A seta da n1 tem 614 px**, abaixo dos ~700 do cético.
- **"MILES" tem 10,2 px no 168**, no limite.
- **A n1 e a n2 usam quadros diferentes**, como o cético pediu. O teste compara a palavra e o enquadramento juntos.
- **Nenhum leitor a frio viu as duas novas.** A banca de quatro lentes (`marca/embalagem.md` §3) não foi feita aqui.

## Para a Sala (git)

- **O `.gitignore` deixa de fora** o `_bases/` desta pasta (linha 108, 47 MB com o `.npy`) e os PNGs (linha 109): `folha.png` e as prévias de 320 e 168
  não sobem.
- **Sobem** os JPGs, os `-pontos.json`, o `l-pontos.json`, os `.py` e este relato. Os `l-C-1280.jpg` e `l-A2-1280.jpg` são cópias exatas de arquivos que já
  estão no git (867 KB a mais), e a Sala pode deixá-los fora se preferir.
- **Nada pessoal** em arquivo nenhum.
