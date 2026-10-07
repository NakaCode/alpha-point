# Texturas que explicam materiais sem esconder o desenho

Estudo aplicado de 29/09/2026. **Estado: pesquisa, recomendações e verificação matemática local.** O código deste diretório testa estabilidade de padrões, coordenadas de uma folha curvada e limites de densidade. Não gera uma biblioteca de materiais, não renderiza texturas naturais e não aprova o exemplo do livro. A demonstração visual tem evidências próprias; exercícios aqui propostos continuam propostas até receberem uma versão e uma avaliação.

O núcleo é portátil: aprende a organizar textura, forma e escala. A roupa informa a aparência permitida. O Alpha é um caso específico, sem transformar sua paleta ou parcimônia em regra universal para outros canais. Fontes, alcance da consulta e limites estão em [fontes.json](fontes.json).

## 1. Começar pela informação que falta

Textura pode explicar **material**, como fibra de papel ou veios de madeira; **escala e construção**, como juntas entre placas; e **condição**, como desgaste, depósito ou rachadura. São escolhas de representação, não uma obrigação de preencher superfícies vazias. No modelo do PBRT, textura descreve variação espacial de valores, enquanto material usa esses valores para determinar sua resposta à luz. [PBRT, Textures and Materials](https://www.pbr-book.org/4ed/Textures_and_Materials).

**Método proposto:** escrever uma frase antes do acabamento: “estas poucas marcas ajudam a perceber que a capa é revestida e a folha é flexível”. Se a resposta for apenas “parecer mais detalhado”, comparar primeiro sem as marcas. O feedback sobre excesso de traços na estrada torna essa comparação especialmente importante. Detalhe deve resolver uma ambiguidade concreta; não esconder uma forma, proporção ou contato ainda defeituoso.

## 2. Três escalas de leitura

Proponho separar os sinais em três grupos. A **macroestrutura** inclui dobra, borda, costura, junta e direção principal do material. A **mesoestrutura** contém grupos de fibras, pequenas faixas ou alguns veios. O **microdetalhe** inclui grão e poros. Essa divisão serve ao desenho; não estabelece uma classificação científica universal dos materiais.

No livro aberto, a lombada, a espessura e a curvatura da página vêm primeiro. Um vinco deliberado pode vir depois. Fibra quase invisível não torna o folhear convincente se o dedo atravessar o papel. Na vista distante, conservar a macroestrutura e retirar microdetalhes. No recorte próximo, verificar se o padrão continua discreto e se a ampliação não revela repetição mecânica indesejada.

O número de marcas nasce do tamanho de consumo. “Tem 4K” não significa que cada objeto ocupa muitos pixels: uma página pequena dentro de uma composição ainda pede simplificação.

## 3. Escolher a técnica conforme o efeito

| Técnica | O que representa | Limite relevante |
|---|---|---|
| Marcas vetoriais ou imagem de cor | Impressão, manchas, veios e distribuição de cor | Não criam espessura nem mudam a silhueta |
| Geometria explícita | Furos, bordas levantadas, juntas e relevo importante | Aumenta o número de faces e exige oclusão coerente |
| Bump ou mapa de normais | Variações de orientação usadas pelo sombreamento | Não substituem geometria de contorno ou contato |
| Deslocamento geométrico | Alteração efetiva da superfície | Exige resolução suficiente e nova revisão da forma |

A distinção entre bump, que modifica o sombreamento, e deslocamento real está documentada pelo Blender. A referência explica capacidades; não implica adotar Blender no executor do laboratório. [Blender, Displacement](https://docs.blender.org/manual/en/latest/render/materials/components/displacement.html).

Para SVG/JavaScript, começar pelas duas primeiras linhas. Desenhar pequenas manchas claras e escuras não é implementar um sistema físico de normais. Se o contrato disser “papel estilizado com três marcas”, entregar isso com nome honesto.

## 4. O padrão pertence à superfície

Definir coordenadas materiais `(u,v)` antes do movimento. Uma marca possui identidade, página, face e posição nessas coordenadas. A superfície animada fornece `S(u,v,t)`; depois vêm a transformação do objeto e a câmera. Frente e verso precisam de orientação declarada para evitar escrita espelhada por acidente. O PBRT distingue geração de coordenadas e avaliação da textura, incluindo derivadas usadas no filtro. [PBRT, Texture Coordinate Generation](https://www.pbr-book.org/4ed/Textures_and_Materials/Texture_Coordinate_Generation).

**Proposta para o livro:** toda extremidade de linha, fibra e região impressa passa pela mesma deformação da página. Se uma página usa faixas ou triângulos, a marca que atravessa essas regiões deve ser recortada e transportada de maneira coerente. Prender apenas seu centro não basta para uma marca longa. Subdividir a curva quando necessário, com limite de erro projetado e orçamento de segmentos.

O caso negativo é simples: a folha dobra, mas sua textura permanece parada na tela. O desenho parece deslizar sob uma máscara. Uma rotação plana correta também não prova que o transporte funciona numa dobra não linear.

## 5. SVG: declarar as coordenadas, não confiar no padrão implícito

`patternUnits` controla a geometria de repetição; `patternContentUnits`, o sistema dos conteúdos; `patternTransform` adiciona uma transformação. O primeiro parte de `objectBoundingBox` e o segundo de `userSpaceOnUse` quando omitidos; um `viewBox` muda como o conteúdo é estabelecido. A especificação documenta essas diferenças. [W3C, SVG Patterns](https://www.w3.org/TR/2016/CR-SVG2-20160915/pservers.html#Patterns).

**Aplicação proposta:** escrever os atributos explicitamente e testar o componente redimensionado. Usar a caixa delimitadora projetada de cada fragmento pode reescalar ou reiniciar o motivo entre fragmentos. Para uma superfície plana transformada, o padrão pode acompanhar seu sistema local. Para papel curvado, um único preenchimento SVG 2D não fornece automaticamente o mapeamento não linear necessário: escolher marcas deformadas, subdivisão ou um caminho de render com UV.

Recortar a textura na superfície correta, preservar margens da folha e considerar frente, verso e ocultação pela mão. Um `clipPath` esconde pintura excedente, mas não corrige uma projeção errada.

## 6. Densidade é medida na imagem final

Um motivo pode funcionar de frente e produzir faixas falsas quando a página fica oblíqua. Aliasing, moiré e cintilação são riscos da relação entre frequências do padrão e amostragem. PBRT descreve filtragem que considera essa relação, em vez de somente multiplicar amostras. [PBRT, Texture Sampling and Antialiasing](https://www.pbr-book.org/4ed/Textures_and_Materials/Texture_Sampling_and_Antialiasing).

Para a bancada, medir largura projetada das marcas, espaçamento e direção mais comprimida. O Jacobiano local de `(u,v)` para pixels permite estimar compressão em duas direções. Seu menor valor singular é um indicador conservador para motivos sem direção privilegiada. Uma grade alinhada pode ser avaliada por suas direções específicas, mas não basta olhar a largura total do objeto.

**Limiares do teste, não leis do canal:** a função de detalhe atenua motivos entre 4 e 8 pixels de espaçamento conservador e entre 1,25 e 2,5 pixels de espessura. Linhas com bordas duras contêm frequências altas; esses números não garantem ausência de aliasing. Inspecionar o vídeo exportado e sua redução continua necessário.

## 7. Filtrar e simplificar são decisões diferentes

Filtrar estima a contribuição de uma região da textura. Simplificar troca a representação por uma mais adequada à leitura. Mipmaps mantêm versões em escalas diferentes; filtros anisotrópicos consideram regiões alongadas, importantes em superfícies oblíquas. O capítulo de imagem do PBRT relaciona amostragem à geometria, câmera e mapeamento. [PBRT, Image Texture](https://www.pbr-book.org/4ed/Textures_and_Materials/Image_Texture).

**Método proposto:** reduzir primeiro a frequência e a quantidade de microdetalhes. Quando a roupa permitir, uma transição suave de contribuição pode retirar o detalhe; ela não deve introduzir novas cores ou opacidades sem especificação. Outra opção é manter uma representação simples durante todo o plano. Trocar uma grade por outra a cada quadro pode provocar saltos mesmo com seed fixo.

Usar uma função contínua do estado atual, sem depender dos quadros já visitados. Assim, buscar diretamente 6 segundos ou chegar lá por reprodução resulta na mesma representação. Perto do perfil da página, é aceitável que só permaneça a borda.

## 8. Aleatoriedade deve ter identidade

No procedimento proposto, cada marca recebe um valor de uma função de `seed`, identificador da página e índice estável. Não chamar `Math.random()` dentro de `renderAt(t)` nem consumir uma sequência global conforme a quantidade de faces visíveis. O desaparecimento de uma página não deve reorganizar a textura das demais. Mudança de seed é mudança de versão do componente.

O SVG possui `feTurbulence`, com parâmetros como frequência, oitavas e seed. Isso documenta uma ferramenta, sem garantir que seu resultado já corresponda a papel, concreto ou madeira. Filtros operam sobre a imagem renderizada e podem exigir cuidados de região e recorte. [W3C, Filter Effects](https://www.w3.org/TR/filter-effects-1/#feTurbulenceElement).

Para este primeiro contrato de trabalho, prefiro poucas marcas identificáveis. É possível acompanhar uma delas durante o folhear e diagnosticar um erro. Ruído denso dificulta essa inspeção e aumenta o custo sem assegurar melhor leitura.

## 9. A roupa controla cor, contraste e uso

Fontes locais consultadas: `marca/identidade.md` §§2, 4.2 e 5; `marca/tokens.css`; `marca/agentes/editor-de-arte.md`. No Alpha, cor mantém significado e a cena tem no máximo três matizes, fora a base de satélite. PRANCHA usa fundo sólido; textura de objeto não autoriza degradê, véu ou vinheta no fundo.

**Já possível sem ampliar a roupa:** reduzir marcas, ajustar sua posição, corrigir o mapeamento, manter as cores e papéis explicitamente recebidos e comparar o elemento com textura desligada. **Exige especificação de roupa:** novos tons, misturas, opacidade própria para fibras, brilho recorrente ou uma família de acabamentos. Reaproveitar a transparência de legenda para “enfraquecer” uma fibra não herda autorização de uso.

A identidade exclui textura da contagem formal de elementos simultâneos. Isso não elimina seu custo perceptivo. Textura não pode competir com a ação, virar uma segunda rede de linhas ou reduzir a legibilidade de créditos, rótulos e textos. Outro canal poderá receber um acabamento diferente pelo mesmo ofício.

## 10. Livro e caderno: plano de aplicação

| Parte | Sinal prioritário | Acabamento opcional proposto |
|---|---|---|
| Capa | Espessura, dobra na lombada e limite com o miolo | Poucas marcas de revestimento, presas ao plano |
| Papel | Curvatura contínua e borda que acompanha o gesto | Fibra esparsa somente se contribuir na escala final |
| Página pautada | Linhas espaçadas que identificam o tipo de caderno | Subdivisão das linhas pela mesma superfície |
| Encadernação | União reconhecível entre folhas e lombada | Furos ou costura só se existirem no modelo escolhido |
| Página impressa | Blocos e áreas de leitura recebidos do editor | Conteúdo autorizado, sem inventar uma fonte documental |

Não transformar qualquer livro em caderno espiral. A escolha de construção vem do pedido. Linhas gráficas esquemáticas devem ser apresentadas como tais; não criar texto quase legível fingindo que é um documento real. A mão deve ocultar impressão e textura quando passar à frente, enquanto a soltura deve deixar a superfície livre.

Este plano não certifica que fibra, impressão ou costura foram implementadas na prova visual. O integrador registra quais tratamentos realmente entraram e em qual versão.

## 11. Exercícios futuros com pergunta clara

Proponho quatro comparações mantendo geometria e câmera iguais. **Terreno:** poucas faixas geológicas explicam camadas sem parecer estradas? **Concreto:** juntas ajudam a escala e a montagem sem simular rachaduras? **Madeira:** direção e interrupção dos veios respeitam peças separadas e seus cortes? **Água:** o padrão explica superfície ou corrente sem se confundir com rota de navio?

Todas permanecem **não executadas por este estudo**. Cada ensaio precisa de referência pertinente, versão sem textura, versão simplificada e vídeo no tamanho de consumo. Condições como ferrugem e desgaste carregam informação: não envelhecer um objeto apenas para decorar. Num material natural, procurar variação estruturada e zonas de descanso, em vez de uniformizar ruído por toda a superfície.

## 12. Teste executado e limites

Executar `node laboratorio/estudo-texturas/verificar-texturas.cjs`; conferir evidência preservada com `--check`. O [resultado](resultados.json) registra o hash do código e seis grupos de verificações: identidade/seed; ordem independente; fixação à folha curvada e transformação rígida; detecção de deriva em tela; compressão projetada com transição de detalhe; e limite superior de cobertura.

A folha analítica do teste tem 620 × 440 unidades e curvatura cilíndrica. Essa é uma bancada matemática independente do livro, não uma simulação de papel. O caso de ancoragem recupera `(u,v)` pela inversa analítica da superfície; o negativo mantém a marca na posição de tela inicial e deve falhar. O ensaio de compressão usa, separadamente, um motivo regular hipotético no centro de uma folha plana; não filtra o conjunto de marcas aleatórias. Cobertura soma áreas paramétricas dos motivos como limite superior, não como medição de pixels pintados após sobreposição, filtro ou perspectiva.

Seed diferente precisa mudar o padrão; pose igual precisa reproduzir a mesma saída. Densidade excessiva deve ser rejeitada. Esses resultados não medem naturalidade, anatomia, oclusão entre dedo e folha, ausência de moiré no vídeo ou aceitação de Lucas. O QC oficial permanece não medido.

## 13. Entrega ao editor e critério de uso

O pedido deve informar material, condição, roupa, escala de uso, superfície, necessidade narrativa e conteúdo autorizado. O ilustrador propõe tipo de padrão, coordenadas, seed, orçamento de marcas, tamanho mínimo de apresentação e controle para desligar o acabamento. Registrar também de quais lados ele aparece, como segue a deformação e quais tratamentos ainda dependem de uma definição de identidade.

O editor continua dono da câmera, composição, tempo e render. A entrega inclui evidências com e sem textura nos mesmos instantes, além da inspeção em movimento. Só conservar um acabamento quando ele melhora reconhecimento ou relação espacial e mantém o foco da fala. Uma superfície limpa pode ser a solução mais fiel para aquela cena.
