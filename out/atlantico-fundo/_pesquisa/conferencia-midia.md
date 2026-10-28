# Conferência de mídia: atlantico-fundo (vídeo 4), fluxo `midia`, lote 1 de 3, 28/10/2026, 15:16 (Brasília)

**O laudo:** 9 aprovados de 11 vereditos (2 reprovados com reconferir, 0 trocar, 0 pendente_lucas); 2 com algo não conferido;
recebidos: 9 arquivos, todos conferidos. A p. 4 e a p. 6 do artigo de 2019 têm veredito em duas cenas (s08 e s56).

Fora deste lote, por ordem do pedido: o retrato do Vescovo (s52) e os 4 arquivos `-prova` de `_media/documento/` (prova de
trabalho; não vão à tela).

| Arquivo (`out/atlantico-fundo/`) | Cena | Fonte | sha256 | Veredito | Motivo |
|---|---|---|---|---|---|
| `_media/pessoa/s14/willard-h-brownson-harris-ewing-1907-nh57975-commons.jpg` | s14 | Commons (NHHC NH 57975), PD nos EUA | `fa90788b…8c62` | reprovado | o retrato serve (Willard H. Brownson, 1900–1909, com aviso do ano), mas o NHHC, onde estaria uma foto mais perto de 1883, recusou script e não foi visto no navegador do app |
| `_media/pessoa/s17/george-nares-lock-whitfield-rijksmuseum-commons.jpg` | s17 | Commons (Rijksmuseum), CC0 | `f8f86ba5…bea8` | aprovado | George Nares em retrato de ca. 1873–1878 (Rijksmuseum, domínio público), rosto inteiro no card a 0,72×; vai com o aviso do ano da década, sem o ano do fato |
| `_media/pessoa/s56/alan-j-jamieson-gnangcomapp-2022-commons.jpg` | s56 | Commons, CC BY-SA 4.0 | `679f2962…94b8` | reprovado | a foto de 2022 serve (Jamieson, com aviso do ano), mas não se procurou a de 2019 na Newcastle University nem nas fotos da Caladan Oceanic liberadas hoje pelo Lucas |
| `_media/documento/stewart-jamieson-2019-p4.jpg` | s08 | Earth-Science Reviews 2019 (NORA), CC BY 4.0 | `82c102bd…aa0b` | aprovado | a Tabela 1 de 2019 com a linha "Milwaukee Deep … 8740 … GEBCO Gazetteer"; sem "Brownson" na página |
| `_media/documento/stewart-jamieson-2019-p4.jpg` | s56 | idem | `82c102bd…aa0b` | aprovado | a mesma Tabela 1 cobre a lista, o nome e os 8.740 m de s56 (plano 2), como volta declarada de s08 |
| `_media/documento/stewart-jamieson-2019-p6-gazetteer.jpg` | s56 | idem | `147342ba…6f14` | aprovado | a frase da p. 6 ("8740 m as published in the IHO-IOC GEBCO Gazetteer…") cobre s56 (plano 2) palavra por palavra; alternativa à Tabela 1 |
| `_media/documento/stewart-jamieson-2019-p6-gazetteer.jpg` | s08 | idem | `147342ba…6f14` | aprovado | a frase da p. 6 também cobre s08; alternativa à Tabela 1 |
| `_media/documento/stewart-jamieson-2019-p1-resumo.jpg` | s59 | idem | `c6a6ed9a…e65f` | aprovado | o resumo com "propagated uncorrected through online sources and the scientific literature", a frase que s59 atribui aos autores |
| `_media/documento/stewart-jamieson-2019-p1-titulo.jpg` | s56 | idem | `b727bf40…1442` | aprovado | o título e os autores do artigo, ao lado dos cards de s56 (plano 1), com as instituições de 2019 |
| `_media/documento/uscgs-1883-p8.jpg` | s16 | NOAA Central Library, obra federal | `e435ec98…18a2` | aprovado | a p. 8 do relatório de 1883 tem as duas frases de s16 seguidas ("brown ooze" e "No record is known…"); até 1,4× |
| `_media/documento/uscgs-1883-p46.jpg` | s16 | idem | `cf82473f…25c7` | aprovado | a p. 46 cobre s16 com "brown ooze" e a frase irmã "This is believed to be the greatest depth…"; alternativa à p. 8; vale só para s16 |

Os sha256 inteiros, a frase coberta de cada um e os motivos por critério estão em `conferencia-midia.json`.

## Para o Lucas pesar

Nada neste lote.

## Para reconferir

- **Brownson (s14), no navegador do app, pelo Claude central.** O history.navy.mil recusou o script da pesquisa (404 vazio, até
  na página inicial), e eu não tentei de novo.
  - Abrir a página do NH 57975 e as fotos e a biografia de Willard H. Brownson.
  - Procurar retrato de 1882–1884, ou de ano mais perto de 1883 que 1900–1909 (os anos 1890, por exemplo), com data na página.
  - Copiar o que a página do NH 57975 diz (a data, o "courtesy" e a descrição) e o trecho da biografia que o põe no comando do
    Blake.
  - Sem foto mais perto, o arquivo volta em conferência nova com esse texto copiado e a hora. A licença, a técnica e a repetição
    já passam.
- **Jamieson (s56), uma busca do `pesquisa-pessoas`**, despachada pela Sala.
  - Procurar retrato de 2018–2019 com data na origem em dois lugares:
    - nas fotos da Caladan Oceanic no Commons, com a permissão VRT. O Lucas as liberou hoje às 15:0x ("Pode usar, com crédito
      (Recomendado)"), e Jamieson era o cientista-chefe da Five Deeps;
    - na Newcastle University, o empregador dele em 2019 (o perfil e as notícias de 2019 sobre a Five Deeps).
  - Se achar uma que encha o card sem ampliar, ela entra no lugar desta. Se não achar, este arquivo volta com a busca registrada na
    pauta. A licença, a técnica e a repetição já passam.

## Para quem volta, e o que sai da pasta

- **`pesquisa-pessoas`**: os dois reprovados saem de `_media/pessoa/` para `_media/_caca/_retirado/pessoa/`, movidos e nunca
  apagados (ofício, §6.2). Eles voltam ao lugar se uma conferência nova os aprovar pelo reconferir, e o sha256 é o mesmo.
  Enquanto estiverem em `_media/pessoa/` com `reprovado`, o `regie advance` do `research` fica parado (CLAUDE.md).
- **`redator-de-tela`**:
  - **s16, se a p. 8 for usada:** a referência é a p. 8, não a p. 46. A frase "No record is known…" é da p. 8.
  - **s17, o aviso do ano do Nares:** a origem diz "ca. 1873 - in of voor 1878". Um aviso na década ("Photo from the 1870s") não
    põe na tela o ano do fato, que fica fora (N52).
  - **s14, o aviso do ano do Brownson, se o arquivo voltar:**
    - a origem diz "1900-1909";
    - "Photo from 1907" afirmaria um ano que a origem não dá: o 1907 é o do copyright impresso;
    - "the 1900s" pode ser lido como o século.
  - **A CC BY 4.0 de 2019:** na tela, o crédito curto; na descrição, o título, os autores, o DOI, "© 2019 British Geological
    Survey (UKRI)", o link da licença e "highlight added".
- **`regente-de-imagem` e `editor-de-arte`**:
  - **s16:** escolher entre a p. 8 e a p. 46. A p. 8 tem a frase literal do plano 2; a p. 46, a irmã.
  - **s08 e s56:** escolher entre a Tabela 1 e a p. 6. A mesma folha nas duas cenas é a volta que o montador declarou.
  - **Tabela 1:** a câmera fica no grupo Atlantic. O título "List of…" não é a lista da fala, e "HMS Challenger 1875" é do
    Pacífico.
  - **Páginas de 1883:** a página real vai até 1,4× do tamanho dela. A essa escala a letra fica com uns 40 px em 4K; se não ler
    no celular, o trecho que a voz diz vai ampliado ao lado.
  - **Páginas de 2019:** são vetor. Se a câmera pedir mais que 1,4×, o `pesquisa-documentos` rasteriza o recorte a 600 dpi sem
    custo, em vez de se ampliar o arquivo.
  - **Jamieson, se o arquivo voltar:** uma janela acima dos bolsos (950 px, y 600–1550) tira do quadro os logos da UWA e da
    Minderoo, sem ampliar.
- **`montador`:** o motivo de s08 previa recortar "Brownson Deep" da Tabela 1. O nome não está na página: só nas PDF p. 12 e 13.

Avisos do conjunto da cena: nenhum. As cenas deste lote são de documento e de card, com imagem parada, e os planos têm de 2,7 a
6,6 s. A janela é a do espelho, provisória até a regência.

## Divergências entre a marca e este ofício

Nenhuma. Uma leitura a registrar: apliquei aos retratos a regra da `identidade.md` §6 ("É exceção: a foto de outro ano só entra
depois de a busca pela foto do ano ter passado pelos acervos onde ela provavelmente está", inclusive os que recusam robô). O ofício,
§5.1, fala só em escolher, "entre as que servem", a do ano mais perto. Os dois reprovados saem daí, e não de defeito do arquivo.
