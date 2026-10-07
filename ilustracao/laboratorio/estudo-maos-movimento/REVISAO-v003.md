# Mão v003 — reconstrução da forma

Lucas rejeitou a v002: “O formato da mão continua muito estranho”. A primeira tentativa manteve todo o rig anterior e mudou sua superfície. Isso conservou os movimentos, mas também preservou proporções e uma projeção que prejudicavam o desenho. A versão anterior está preservada em `revisoes/v002/`, com seu feedback e relatórios; os testes que passaram continuam sendo apenas evidências técnicas daquela versão.

## Método desta revisão

1. Observar uma mão real aberta e fechada, identificando palma, origem dos dedos, espaço do polegar e ordem das sobreposições.
2. Desenhar poses estáticas reconhecíveis, sem depender de luz ou textura para disfarçar o contorno.
3. Construir uma pose intermediária e a dobra das falanges. Uma silhueta aberta e uma fechada boas não autorizam simplesmente interpolar o comprimento aparente dos dedos.
4. Conferir a animação nas poses críticas e na escala de entrega.
5. Medir continuidade, área segura e execução independente da ordem de consulta. Avaliar beleza e anatomia visual separadamente desses testes.

A nova vista quase frontal é uma câmera de estudo. No fechamento e no punho, duas rotações ortogonais introduzem uma pequena vista lateral para mostrar a dobra; a pinça é desenhada em vista palmar 2D. Não altera o enquadramento ou qualquer cena do Alpha oficial. A identidade e a coreografia do consumidor permanecem externas à peça.

## Referências e decisões de desenho

A [Emoria, estúdio de animação](https://note.com/emoria_inc/n/nba684145b969), publicou fotografias e sequências próprias da mão abrindo e fechando. Foram observadas as junções aparentes dos dedos, o espaço entre polegar e indicador e a sobreposição do polegar no fechamento. O próprio artigo comenta diferenças individuais; a mão fotografada não é uma medida universal. Nenhuma fotografia foi incluída como asset do laboratório.

A [figura 3 de Wang, Kowalski e Chung](https://pmc.ncbi.nlm.nih.gov/articles/PMC3825763/#F3) apresenta vistas palmar, lateral e dorsal da mão aberta e fechada. Serve como referência de comparação entre vistas. A [figura 3 de Jahn et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC3652995/#Fig3) foi indicada na revisão para observar a postura de pinça. Estas fontes não aprovam o desenho, o modelo cinemático ou suas proporções.

As seguintes decisões são do laboratório, e não medidas extraídas dessas fontes:

- Palma como massa contínua, afunilando para o punho.
- Comprimentos visíveis de dedos menores que na v002; alturas e espessuras diferentes entre os dedos.
- Polegar com base integrada e contorno próprio quando recobre os demais dedos.
- Poucas marcas de dobra, com sombra local para separar partes que se sobrepõem.
- Vista quase frontal para julgar o contorno, com projeção ortográfica por rotações no lugar do cisalhamento anterior.

## Entrada, saída e integração

Fonte candidata: `maos-forma-v003.mjs`, com dependência local explícita `pinca-forma-v003.mjs`. Prévia: [forma-v003.html](forma-v003.html). O padrão de consumo permanece `meta`, `sample(t, {gesto})` e `draw(ctx, estado, tema, debug)`. O tempo é local, em segundos; a coreografia de demonstração tem 12 segundos. Não há relógio dentro da peça, nem dependência de execução anterior. A roupa fornece os papéis de cor; o módulo não deve escolher a identidade do canal.

| Parte | Construção efetivamente usada | Limite da evidência |
|---|---|---|
| Quatro dedos, fechamento/punho | Juntas 3D de comprimentos constantes dirigem as superfícies vetoriais projetadas | Não simula músculos nem colisão geral da pele |
| Palma e polegar de fechamento | Contornos e poses desenhadas, combinados com a articulação do punho | Não há comprimento ósseo auditado no polegar |
| Pinça | Contornos 2D dirigidos, polpas aproximadas e dedos restantes relaxados | Não é IK 3D nem simulação de pressão; pequeno recobrimento gráfico evita fresta de antialiasing |
| Punho | Flexão/desvio aplicados ao conjunto, com manga fixa | Não demonstra pronação/supinação |

`geometry(estado)` expõe os caminhos que desenham fechamento/punho e suas juntas projetadas. Na pinça expõe as silhuetas, a comissura e a manga; os traços internos decorativos ficam em `drawPinch`. `sample` devolve listas próprias, sem compartilhar configurações mutáveis entre amostras. O argumento `debug` do módulo mostra as juntas apenas onde há FK; “Só silhueta” da comparação é um controle do consumidor que iguala o papel de contorno à cor da pele.

O desenho permite aumento de largura da pele de até 32% no fechamento como acomodação gráfica. Os comprimentos ósseos permanecem fixos, mas isso não é conservação de volume ou mecânica de tecidos. A revisão visual independente observou melhora de leitura na aberta, pinça e punho; o fechamento ainda apresenta polpas e dobras simplificadas, com aparência de luva em parte da transição. É uma limitação artística registrada, não eliminada por um PASS numérico.

O canvas de estudo é 960×540. `draw` preenche seu fundo; para compor sobre uma cena, o editor precisa adaptar esse passe ou consumir os caminhos e a função local `drawPinch`, sem apagar o fundo da cena. O gerador da bancada embute os dois módulos no HTML, preservando a versão portátil sem importações externas.

A página de comparação é um consumidor técnico. Ela escolhe o tempo, gesto e escala e exibe a v002 no mesmo instante. Como a forma e a vista foram revistas, não é um ensaio de equivalência de pixels, ossos ou trajetórias entre versões.

Esta revisão é delimitada às vistas e gestos demonstrados. Não constitui uma mão tridimensional pronta para qualquer câmera, nem prova de preensão de objetos, pressão de contato, deformação de tecidos ou anatomia universal. Uma encomenda nova exige poses e contatos adequados à ação recebida.

## Evidências

`auditar-forma-v003.mjs` usa Canvas local já instalado para gerar a prancha e conferir os pixels. Não instala dependências. Onde esse runtime não estiver disponível, a execução deve ser marcada NÃO MEDIDO ou receber o caminho de um runtime autorizado por `ALPHA_CANVAS_MODULE`.

```powershell
node laboratorio/estudo-maos-movimento/auditar-forma-v003.mjs --prancha
node laboratorio/estudo-maos-movimento/auditar-forma-v003.mjs
```

O relatório resultante registra o hash exato do componente conferido. Uma aprovação numérica não concede aceite visual: avaliação artística de Lucas permanece pendente, e QC oficial não foi executado.

Na rodada final, foram conferidos 1.083 quadros dos três gestos, a área segura, busca de tempo fora de ordem e uma roupa alternativa. A auditoria independente `auditar-cinematica-v003.mjs` verificou 722 estados de fechamento/punho e 32 perturbações de juntas, confirmando que a pele responde à articulação correspondente; erro máximo de comprimento aproximado de 1,78×10⁻¹⁴ unidades. Esse resultado se aplica aos quatro dedos FK, não ao polegar dirigido nem à pinça 2D. O relatório `resultados-cinematica-v003.json` delimita o escopo.

## Preservação e distribuição

O desenvolvimento ocorre exclusivamente na cópia isolada. O editor oficial, as 770 origens, as cópias de referência, os pacotes anteriores e a galeria histórica permanecem preservados. Esta revisão não modifica os ZIPs v1.1.0, v1.2.0 ou v1.3.0. Animate continua suspenso. Copiar esta prova não ativa automaticamente uma habilidade no Claude ou no editor do Alpha.
