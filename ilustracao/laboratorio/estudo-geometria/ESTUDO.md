# Geometria aplicada ao ilustrador: construir a forma antes de animá-la

Estudo de 29/09/2026, isolado do núcleo distribuído. Seu objetivo é melhorar os elementos que o editor recebe: forma reconhecível, espessura coerente, articulações utilizáveis e contatos verificáveis. Não muda a autoria da cena, o motor, a roupa do canal, o ZIP v1.1.0 ou arquivos já aprovados. Blender aparece como referência de conhecimento geométrico; não se propõe trocar o executor SVG/JavaScript.

**Como ler:** os trechos identificados como fundamento resumem matemática/documentação citada. As recomendações de construção, tolerâncias e exercícios são propostas próprias para este laboratório. Não são leis físicas nem resultados já obtidos. A bibliografia consultada, sua finalidade e seus limites estão em [fontes.json](fontes.json).

## 1. Volume, vazio e proporção

**Fundamento.** A geometria construtiva permite descrever formas por união, interseção e diferença de sólidos mais simples. Isso oferece uma linguagem para pensar cavidades e encaixes, além das superfícies externas. Não significa que o nosso consumidor já implemente operações booleanas robustas. [PBRT, exercícios de formas](https://www.pbr-book.org/4ed/Shapes/Exercises).

**Método proposto.** Antes dos paths, registrar três coisas: massa principal, massas secundárias e vazios funcionais. Uma maleta contém casca, tampa, espessura e espaço interno; sua alça contém um vão. Uma mão contém palma e dedos, mas também intervalos entre dedos. Pintar uma mancha da cor do fundo pode funcionar numa vista e denunciar uma cavidade falsa na próxima.

Escolher primitivas por função: prisma para estrutura rígida, cilindro para eixo, seção arredondada para palma, sequência de seções para tubo ou membro. Elas são andaimes de construção, não o acabamento obrigatório. Retirar o andaime quando a silhueta precisar de uma forma própria.

Normalizar a dimensão dominante para 100 unidades e registrar razões: largura/altura, profundidade/altura, espessura/largura, abertura/peça. Usar referências pertinentes e marcar o que foi estimado. Conferir frente, lado e três quartos antes de detalhes. Aumentar uma peça para torná-la legível é uma decisão do pedido; aumentar apenas sua tampa durante o giro é uma deformação inadvertida.

## 2. Espaços, transformações e orientação

**Fundamento.** Matrizes expressam mudanças entre sistemas de coordenadas e permitem compor transformações. A ordem da composição importa. Com vetores coluna, uma cadeia coerente é `p_tela = P · V · M · p_local`, seguida da divisão homogênea quando exigida. [PBRT, transformações](https://www.pbr-book.org/4ed/Geometry_and_Transformations/Transformations).

**Método proposto.** Declarar unidade, origem e eixos do componente. O espaço local pertence ao ilustrador; o mundo agrupa peças; a câmera pertence ao consumidor; a tela mede pixels. Não misturar um deslocamento em pixels com outro em unidades do objeto. Documentar também que o eixo vertical da tela pode crescer para baixo. Uma mudança de convenção deve ocorrer em um ponto conhecido da cadeia.

**Fundamento.** Uma rotação rígida satisfaz `RᵀR = I` e `det(R) = +1`; portanto, preserva distâncias. Na forma `p' = R(p − a) + a + t`, `a` é o pivô. Quaternions unitários representam rotações; interpolação esférica permite interpolar orientação com velocidade angular constante em relação ao parâmetro. Não fornece automaticamente ritmo expressivo ou resposta física. [PBRT, animação de transformações](https://www.pbr-book.org/3ed-2018/Geometry_and_Transformations/Animating_Transformations).

Para uma dobradiça, um ângulo em torno de eixo fixo costuma ser mais claro que três ângulos independentes. Para orientação livre, usar quaternion normalizado, convenção documentada e continuidade entre representações equivalentes. Aplicar aceleração ao parâmetro de animação sem deformar a geometria.

**Fundamento.** Pontos, direções e normais não têm o mesmo tratamento. Na parte linear invertível `A`, a normal correta é proporcional a `(A⁻¹)ᵀn`; escala não uniforme pode tornar incorreto tratá-la como direção comum. Determinante negativo inverte a orientação espacial. [PBRT, aplicação de transformações](https://www.pbr-book.org/4ed/Geometry_and_Transformations/Applying_Transformations).

Proposta: a escala de apresentação fica no wrapper do consumidor. Não compensar uma perspectiva defeituosa esticando seletivamente a peça; se o design requer proporções diferentes, reconstruir suas dimensões explicitamente.

## 3. Projeção, espessura e elipses

**Fundamento.** A projeção ortográfica preserva paralelismo e não reduz objetos apenas por estarem mais distantes. A perspectiva introduz redução com profundidade. Numa convenção com profundidade positiva, a forma simplificada é `x = cx + fX/Z`, `y = cy − fY/Z`; pontos próximos de `Z = 0` exigem tratamento, não uma divisão cega. [PBRT, câmeras projetivas](https://www.pbr-book.org/4ed/Cameras_and_Film/Projective_Camera_Models).

**Método proposto.** Escolher a câmera antes de aprovar proporções. Ortográfica pode facilitar diagramas e comparação de peças, mas não corrige volumes mal construídos. A perspectiva pode explicar profundidade, mas exige testar o enquadramento e a distância da câmera. Não misturar pontos de fuga incompatíveis num mesmo conjunto rígido.

Derivação útil para a bancada: para um círculo de raio `r`, normal unitária `n` e direção unitária de observação `v`, uma projeção ortográfica isotrópica tem semieixos proporcionais a `r` e `r·|n·v|`. A razão vale de frente a perfil; não é uma fórmula geral para perspectiva. Projetar a geometria comum de borda, eixo e cubo evita elipses arbitrárias desalinhadas.

Espessura também é geometria: projetar os dois pontos `p` e `p + e·n`, ligados pela mesma dimensão `e`. Quando a tampa gira, sua face encurta visualmente, mas a lateral passa a explicar o volume. Uma espessura subpixel pode precisar de outra escala de uso autorizada; acrescentar um contorno não deve substituir uma face interna ausente.

## 4. Faces, topologia e oclusão

**Fundamento.** Malhas relacionam vértices, arestas e faces. A documentação do Blender distingue essa conectividade dos dados derivados, como bounds e normais; a normal geométrica da face depende da ordem dos vértices. [Blender Developer, Mesh](https://developer.blender.org/docs/features/objects/mesh/mesh/). Normais modificadas podem alterar o sombreamento sem alterar a malha. Portanto, suavizar luz não repara contorno quebrado. [Blender, estrutura de malhas](https://docs.blender.org/manual/en/3.3/modeling/meshes/structure.html).

Para o nosso emissor de faces, propor contratos pequenos: coordenadas finitas, face simples, área não nula, coplanaridade e convexidade. Escolher três pontos não colineares para definir o plano e medir a distância dos restantes. Triângulos não degenerados são planares; quadriláteros deformados podem não ser. [Blender, teste de planaridade](https://docs.blender.org/manual/sr/5.1/modeling/geometry_nodes/mesh/read/face_is_planar.html).

**Método proposto.** Verificar primeiro autointerseções; só depois verificar se todas as viradas do contorno simples mantêm o mesmo sinal para confirmar convexidade. Uma face côncava pede decomposição. Um sólido fechado deve ter suas bordas emparelhadas de maneira coerente; essa inspeção sozinha não prova ausência de interpenetração. Na região de um corte, distinguir abertura intencional de buraco acidental.

**Fundamento.** O descarte de faces depende da convenção de orientação e da projeção. A configuração de frente/verso deve ser consistente com a ordem dos vértices. Superfícies abertas não podem ser tratadas indiscriminadamente como sólidos opacos fechados. [Khronos, glFrontFace](https://wikis.khronos.org/opengl/GLAPI/glFrontFace).

Ordenar tudo pela profundidade média falha em cruzamentos. BSP particiona por planos, pode dividir polígonos e percorre a estrutura conforme o observador. O custo de fragmentação importa. [CMU, particionamento espacial](https://www.cs.cmu.edu/~fp/courses/graphics/pdf-color/17-spatial.pdf). Nossa proposta é manter limites de fragmentos e diagnóstico de coplanaridade; excedê-los deve produzir uma falha explícita. Camadas ajustadas para uma câmera específica não são um solucionador geral de oclusão.

## 5. Curvas, superfícies e silhueta

**Fundamento.** Uma Bézier fica no fecho convexo dos seus pontos de controle e suas tangentes nas extremidades seguem o polígono de controle. Isso limita a curva, mas não obriga que ela permaneça na caixa formada apenas pelos dois extremos. [MIT, propriedades de Bézier](https://web.mit.edu/hyperbook/Patrikalakis-Maekawa-Cho/node12.html).

**Método proposto.** Em palma, dedo e alça, separar curvas que descrevem a silhueta das que apenas sugerem uma dobra. Começar com poucos segmentos, continuidade de posição e tangentes bem dirigidas; acrescentar controles apenas onde há mudança de forma necessária. Um cabo longo mal colocado produz uma saliência, mesmo que os extremos estejam corretos. Não confundir essa saliência espacial com overshoot temporal de uma função de animação.

Para bounds exatos de uma Bézier cúbica planar, avaliar extremos e raízes internas das derivadas de `x(t)` e `y(t)`. Depois da transformação, medir no espaço adequado. A caixa dos controles é conservadora, mas geralmente folgada. A especificação SVG distingue limites da geometria, do traço e dos marcadores; uma caixa que ignora o traço não basta para todos os testes de margem. [W3C, bounding boxes](https://www.w3.org/TR/SVG/coords.html#BoundingBoxes).

Para discretizar curvas, propor subdivisão adaptativa guiada pelo desvio projetado, com teto de segmentos. Em arcos circulares, a flecha `r·(1 − cos(Δθ/2))` fornece um erro local conhecido. Em curvas gerais, medir apenas o ponto médio não oferece garantia suficiente: usar limites pelos controles ou subdivisão conservadora.

Superfícies recebem amostragem nas duas direções e bordas compartilhadas consistentes. Mais polígonos não corrigem uma seção errada. Distribuir resolução onde muda a silhueta ou a curvatura; evitar microfaces e triângulos quase degenerados. O limite de erro em pixels é uma escolha do tamanho de exibição, não uma propriedade universal do objeto.

## 6. Contato não é somente proximidade

**Fundamento.** PBRT transforma o raio para o espaço local da esfera e calcula sua interseção ali. Para triângulos, são necessárias condições que distingam um ponto no plano de um ponto dentro da face. Esses testes respondem perguntas geométricas delimitadas; não constituem simulação física completa. [PBRT, esferas](https://www.pbr-book.org/4ed/Shapes/Spheres), [PBRT, malhas triangulares](https://www.pbr-book.org/4ed/Shapes/Triangle_Meshes).

**Método proposto.** Um contato recebido deve especificar duas âncoras locais, orientação de apoio, intervalo ativo e regra de soltura. Transformar ambas para o mundo e medir `erro = ||a_mundo − b_mundo||`. Para um apoio planar, medir também distância assinada ao plano e se a projeção está dentro da região útil. Pontos coincidentes não impedem o restante dos corpos de se atravessar.

Na mão, a âncora do punho não substitui a região de pegada. Conferir polegar, dedos e palma no objeto, com graus de liberdade e formas compatíveis. Depois de soltar, a mão não deve herdar involuntariamente a rotação da porta. Isso é consistência cinemática; força, atrito e deformação da pele exigiriam outro escopo.

Erros de arredondamento afetam testes geométricos; um epsilon arbitrário aplicado a qualquer escala pode esconder defeitos. PBRT discute limites conservadores de erro e suas consequências nas interseções. [PBRT, arredondamento](https://www.pbr-book.org/4ed/Shapes/Managing_Rounding_Error). Proposta: registrar unidade, escala, tolerância e erro observado; separar tolerância numérica de folga intencional do desenho.

## 7. Aplicação aos problemas já observados

Estas são hipóteses de diagnóstico e critérios para novas peças, não pedidos de alteração das versões aprovadas:

- **Cofre:** preservar largura, altura e espessura no espaço local; dobradiça fixa; face interna construída. Conferir a redução projetada sem adicionar escala ao giro.
- **Ponte:** validar planos e junções, depois oclusão global. Uma ordem de pintura pode funcionar durante a montagem e falhar quando o veículo cruza a junção.
- **Guindaste:** separar legibilidade cromática de erro geométrico. Conferir paralelismo de trilhos, centros das rodas, conexão dos cabos e distância da carga; contraste não prova contato.
- **Mão:** revisar massas, intervalos e continuidade palma/dedos antes de suavizar movimentos. Uma trajetória suave pode transportar uma forma inadequada; uma boa silhueta parada pode desmanchar nas poses intermediárias.

## 8. Rotina de QC proposta

Emitir uma ficha por versão: dimensões, vista, controles, partes rígidas, regiões deformáveis, contatos, limites e hipóteses. Conferir a geometria sem roupa, depois com a roupa e na escala final. Assim, um contraste ruim não é confundido com um plano errado.

Na parte quantitativa, começar com `ε = 10⁻⁸·max(1,D)`, em que `D` é a diagonal local, somente como tolerância inicial de uma bancada com coordenadas moderadas. Registrar erro de rigidez, desvio de plano, âncora, contagem de degenerações, fragmentos e distância às margens. Ajustar com evidência; não usar essa sugestão como certificação.

Na parte visual, revisar silhueta, identificação, espessura, vazios, separação de planos, contatos e mudanças de oclusão. Inspecionar todos os quadros por métricas e uma seleção justificada por imagens: extremos, contato inicial, máximo giro e soltura. Amostras temporais não provam ausência de defeitos entre quadros; trajetórias críticas podem exigir análise adicional.

Separar `passou`, `falhou`, `nao_medido` e `nao_aplicavel`. Um teste matemático pode passar com uma ilustração feia. Aceite visual não substitui revisão técnica nem aprovação de integração. A capacidade só será incorporada ao repertório após exercícios produzidos e revisados.

## 9. Seis exercícios especificados — todos propostos

**E1 — Volume e vazio. Estado: `proposto`.** Construir recipiente de 100 × 70 × 45 unidades, parede 4, e alça com vão real. Entregar três vistas e corte. Critérios: dimensões medidas; ausência de faces tapando o vão; espessura constante onde declarada; reconhecimento por revisor no tamanho de uso. Não há execução registrada.

**E2 — Tampa rígida. Estado: `proposto`.** Girar uma tampa de 100 × 70 × 4 entre 0° e 110°, em torno da dobradiça recebida. Critérios: 221 poses com erro de distâncias e pivô abaixo de `ε`; face interna e lateral presentes; nenhuma escala animada; inspeção de 0°, 45°, 90° e 110°. A avaliação visual continua obrigatória.

**E3 — Círculo projetado. Estado: `proposto`.** Projetar disco e eixo em inclinações de 0°, 30°, 60° e 80°. Critérios: no caso ortográfico, semieixos compatíveis com a relação analítica; erro máximo de contorno de 0,5 pixel na escala escolhida; repetir em perspectiva medindo contra projeção geométrica, sem reaplicar a fórmula ortográfica.

**E4 — Cruzamento e junção. Estado: `proposto`.** Criar dois prismas que cruzem a ordem de profundidade e um tabuleiro com rampa adjacente. Critérios: rejeitar face não planar injetada; particionar cruzamentos; conferir pontos de visibilidade previamente definidos em duas câmeras; nenhuma fissura de borda acima de 0,5 pixel. Câmera nova não herda aprovação anterior.

**E5 — Curva e proporção. Estado: `proposto`.** Construir palma esquemática e dedo com Bézier, além de uma curva adversarial que exceda a caixa dos extremos. Critérios: bounds incluem extremos internos; sem autointerseção; tolerância de tesselação declarada; silhueta revisada em cinco poses. Não avaliar anatomia clínica nem deduzir proporções humanas universais.

**E6 — Contato e soltura. Estado: `proposto`.** Um atuador genérico toca, acompanha e abandona uma manivela. Critérios: erro de âncora abaixo de `ε` durante contato; orientação compatível; retirada independente após soltura; seeks fora de ordem e reinício reproduzem poses; colisões não testadas são listadas. Não chamar essa prova de simulação física.

## 10. Próximo uso do estudo

Aplicar primeiro os critérios pertinentes à nova peça solicitada, sem transformar os seis exercícios em bloqueio obrigatório de toda edição. A API deve expor dimensões, pivôs, controles e contatos que o editor consiga usar; o ilustrador não precisa receber autoridade editorial adicional para melhorar sua construção. Este estudo entrega método e plano de avaliação. Resultados futuros devem citar versões e evidências próprias, mantendo separados conhecimento, execução e aceite.

## 11. Bancada numérica auxiliar executada

[verificar-fundamentos.cjs](verificar-fundamentos.cjs) usa apenas Node padrão e exemplos analíticos independentes. Seis verificações passaram: rigidez/pivô, elipse ortográfica, classificação de faces, extremos de Bézier, âncora/soltura e normal sob escala. Há casos negativos de deformação, face não planar, concavidade, cruzamento e normal incorreta. O registro está em [fundamentos.resultados.json](fundamentos.resultados.json).

Reprodução, a partir do laboratório: `node laboratorio/estudo-geometria/verificar-fundamentos.cjs --registrar`. Os erros máximos medidos foram aproximadamente `4,27·10⁻¹⁴` na rigidez e `4,45·10⁻¹⁶` na âncora. São testes de fundamentos em entradas limitadas; não executam E1–E6, não avaliam desenhos e não aprovam um renderer geral. Os exercícios permanecem `proposto`.
