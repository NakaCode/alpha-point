# Miniatura B do vídeo 7 (`rio-columbia`): "WHY?", no estilo das referências

17/11/2026, refeita depois que o Lucas achou a anterior "muito fraca" e mandou quatro prints de referência
(`out/rio-columbia/_tmp/miniatura/referencias/`). O molde é a costa de Washington da The Geo Lens: a caixa "WHY?" e duas setas
curvas. A versão de antes ("EMPTY ON PURPOSE", com o satélite do Arrow, o anel e a lupa com o corte do lago) está no git, no commit
`ce3538b`.

Feita por `base-B.py` sobre `mapa.py`, sem rede, numa passada e um ajuste. **O mapa é o mesmo da A** (o teste do YouTube passa a medir só
o texto). O quadro, as camadas, as cores, as fontes, as licenças, os pedidos à GIBS e o ajuste do mapa estão no `A-RELATO.md`.

## O que muda da A

- **A caixa preta**, à esquerda, um pouco acima do meio: "WHY?" em vermelho, Inter 900 a 225 px. A maiúscula tem 164 px (10,8 px no
  168). Na 1ª passada, a 250 px, a caixa cobria o lóbulo oeste da bacia.
- **Duas setas** brancas, grossas e curvas, com contorno escuro e sombra. Uma sai de cima da caixa e a outra de baixo, e as duas
  chegam à margem oeste do Arrow, no terço de cima e no de baixo do lago (839 e 819 px).
  - A de baixo passa sobre o lóbulo oeste da bacia: as peças cobrem 4 % do vermelho.
  - Nenhuma cobre o Arrow.
- **Sem a linha do K9:** ela é da A, porque a B não tem número.
- **O canto da duração** está livre: alfa máximo das peças 0.

## A fonte e a licença de cada camada

As mesmas da A (`A-RELATO.md`): o relevo ASTER GDEM e a Blue Marble da NASA GIBS, o Natural Earth, o OSM do disco, o USGS WBD e o Census.
Para a descrição do vídeo, o reconhecimento da GIBS e o crédito do OpenStreetMap.

## O que vi nos três tamanhos

- **1280:** "WHY?", as duas setas, a bacia vermelha com relevo, o Arrow ciano e "CANADA"/"U.S." leem. O canto está livre.
- **320:** "WHY?", as setas, a bacia e o Arrow leem.
- **168:** "WHY?" lê, a bacia vermelha lê, e as setas se juntam numa forma branca que aponta o vermelho.

## A comparação com as referências (`out/rio-columbia/_tmp/miniatura/folha-comparacao.png`)

- **O mais perto das referências é esta:** a caixa e as duas setas seguem a de Washington.
- **Os mesmos três pontos abaixo delas que na A:** o assunto menor (9 % da imagem), o relevo mais fraco e o Arrow como um fio ciano.
- **"WHY?" sozinho não diz o assunto.** Quem diz é o título; como na de Washington, a miniatura aponta o lugar.

- **3ª rodada (17/11/2026, acabamento, pedido da Sala):** o mesmo mapa da A (o quadro fechado na bacia, com o vermelho em 31,3 % da imagem e a fronteira numa faixa embaixo; o relevo com volume; o Arrow como mancha ciano com contorno branco); o "WHY?" subiu a Inter 900 a 290 px (a maiúscula com ~15 % da altura, como a de Washington) e ganhou o sublinhado vermelho das referências; as duas setas brancas engrossaram (26→52 px, cabeça 118 × 158) e abraçam o Arrow por cima e por baixo, a de baixo passando sobre o lobo oeste da bacia (2,95 % de peças sobre o vermelho, só as setas; a caixa não o cobre); o canto da duração segue livre (alfa 0). Mesmas bases do disco, nenhum pedido de rede.
