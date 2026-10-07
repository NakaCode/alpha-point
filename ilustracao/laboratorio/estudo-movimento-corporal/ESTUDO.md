# Movimento corporal: apoio, articulação e continuidade

Estudo aplicado ao ilustrador, 05/10/2026. É uma referência para construir e revisar ações recebidas do editor. Não treina pesos do modelo, não instala um simulador e não certifica biomecânica clínica. A prova incluída é uma **reconstrução cinemática ilustrativa**: trajetórias e contatos escolhidos pelo produtor, resolvidos com geometria e avaliados no tempo.

O livro folheado anterior foi rejeitado por Lucas. Não é referência visual aprovada nem evidência de que mãos e contatos já estejam resolvidos para qualquer ação.

## O ganho pretendido

Uma figura reconhecível parada pode deixar de parecer humana quando se move. Os problemas mais perceptíveis costumam aparecer na relação entre partes: pé que desliza enquanto sustenta o corpo, joelho que troca o lado da dobra, punho que não acompanha o antebraço, braço que atravessa a carga, ombro imóvel enquanto a mão alcança longe. Melhorar apenas o contorno não corrige essas relações.

O método proposto resolve primeiro **o que sustenta, o que alcança e o que permanece unido**. Depois desenha os volumes sobre essa estrutura. A identidade visual continua vindo da roupa; direção, câmera, fala, duração e montagem permanecem com o editor.

## Vocabulário suficiente para desenhar sem transformar tudo em dobradiça

Flexão e extensão mudam o ângulo entre segmentos; abdução e adução afastam e aproximam do plano de referência; rotação ocorre em torno do eixo do segmento. Pronação e supinação do antebraço envolvem a relação entre rádio e ulna, e não simplesmente dobrar o punho. A oposição do polegar permite aproximá-lo dos demais dedos. Esses nomes ajudam a escolher o eixo certo, mas não substituem observar uma ação específica. [OpenStax, movimentos do corpo](https://openstax.org/books/anatomy-and-physiology-2e/pages/9-5-types-of-body-movements)

O cotovelo tem uma articulação principal de flexão e extensão; o joelho funciona principalmente como dobradiça, com componentes de rolamento, deslizamento e rotação. O ombro permite movimentos em vários planos. Portanto, uma projeção 2D de duas barras é uma redução útil para uma vista de perfil, não um modelo anatômico completo. [OpenStax, articulações selecionadas](https://openstax.org/books/anatomy-and-physiology-2e/pages/9-6-anatomy-of-selected-synovial-joints)

Para produzir uma peça, registrar:

| Região | Decisão de construção | Defeito a procurar |
|---|---|---|
| Pelve e tronco | Dois volumes conectados, com deslocamento moderado e intenção definida | Corpo inteiro oscilando como uma placa |
| Ombro e braço | Origem do braço acompanha o tronco; cotovelo conserva a solução escolhida | Mão alcança enquanto ombro fica desconectado |
| Antebraço e punho | Orientação local herdada, com ajuste secundário limitado | Mão gira em um eixo isolado ou descola |
| Palma e dedos | Palma dá volume; dedos dobram em sequência e mantêm raízes separadas | Luva plana, dedos paralelos ou polegar colado |
| Quadril, joelho e tornozelo | Comprimentos definidos e espaço de alcance conhecido | Perna estica para alcançar o chão |
| Pé | Calcanhar, sola e antepé tratados como possíveis contatos | Tornozelo parado com sola escorregando |

Não adotar um conjunto único de amplitudes para toda pessoa ou toda ação. Proporção, idade representada, vestuário, carga, velocidade e intenção devem vir do pedido e de referências adequadas. O exemplo usa um adulto estilizado, visto de lado; outras vistas exigem novos desenhos e conferências.

## Marcha: o corpo avança sobre apoios que ficam no mundo

Na convenção didática consultada, um ciclo vai de um contato inicial até o próximo contato do mesmo pé. Marcha simétrica usa o membro oposto defasado aproximadamente em meio ciclo. A divisão introdutória é cerca de 60% de apoio e 40% de balanço, incluindo dois períodos de apoio duplo. São referências para compreender uma caminhada, não parâmetros universais de qualquer velocidade ou pessoa. [University of Oklahoma Health Sciences Center](https://ouhsc.edu/bserdac/dthompso/web/gait/intro.htm)

Aplicação adotada na bancada:

1. O pé chega com o calcanhar; esse ponto permanece no mesmo local enquanto a sola desce.
2. Durante o apoio de sola, a figura avança e o pé conserva sua posição no chão.
3. O calcanhar sobe ao redor do apoio dianteiro; a ponta não acompanha o corpo para a frente.
4. Só depois da saída do chão o pé avança até o próximo apoio.
5. A outra perna executa a mesma sequência defasada; pelo menos um apoio permanece ativo.

A trajetória no ar tem altura suficiente para que o pé não corte o piso e aproximação suave antes do contato. A pelve varia pouco em altura; o tronco mantém orientação legível. Essas curvas são escolhas da reconstrução, não dados medidos em uma pessoa.

Braços e pernas precisam ser coordenados. O estudo experimental e de simulação de Collins, Adamczyk e Kuo relaciona o balanço dos braços à dinâmica da marcha e ao momento de reação do chão. A aplicação artística aqui é mais restrita: braços contralaterais, cotovelos com flexão discreta e mãos acompanhando o antebraço. Não reproduzimos forças, gasto energético nem o modelo dinâmico da pesquisa. [Pesquisa original](https://pmc.ncbi.nlm.nih.gov/articles/PMC2817299/) · [Vídeos do laboratório de Stanford](https://biomechatronics.stanford.edu/dynamic-arm-swinging-videos)

## Cinemática inversa ajuda a manter contato; não escolhe uma boa pose sozinha

Uma cadeia de duas barras é um problema geométrico conhecido: dados os comprimentos e o alvo final, encontrar a articulação intermediária. A descrição didática da CMU separa os segmentos e seus eixos; essa separação permite testar cada comprimento e cada conexão. [CMU, Two-Link Robot Model](https://courses.ideate.cmu.edu/16-375/f2021/text/simulations/two-link.html)

Nesta implementação, sejam `a` e `b` os comprimentos de coxa e canela, e `d` a distância entre quadril e tornozelo. A projeção do joelho sobre a direção do alvo é `(a² − b² + d²) / (2d)`; a distância perpendicular vem do triângulo retângulo restante. Há duas soluções de dobra. O módulo escolhe continuamente a solução com joelho voltado para a frente.

Antes de resolver, o produtor deve garantir `|a−b| < d < a+b`. Um alvo fora do alcance deve provocar revisão da pelve, posição do apoio ou postura. **Não esticar o membro silenciosamente.** Próximo da extensão total, mudanças pequenas no alvo podem produzir alterações grandes no joelho; por isso a bancada guarda margem geométrica da singularidade.

Manter apenas o tornozelo imóvel não garante sola plantada: a orientação do sapato também importa. A pesquisa da University of Wisconsin trata explicitamente restrições de pés plantados e transições para evitar deslizamento e saltos no joelho. Usamos esse problema como critério de revisão, sem copiar seu solucionador ou sua opção de variar comprimentos. [Kovar, Schreiner e Gleicher, Footskate Cleanup](https://research.cs.wisc.edu/graphics/Gallery/kovar.vol/Cleanup/)

## Mão e braço: construir a ação em cadeia

A mão continua sendo uma prioridade do ilustrador, mas não deve receber detalhamento isolado do gesto. Uma proposta de trabalho para ações futuras:

1. Identificar qual parte toca: polpa, lateral do indicador, polegar, palma ou vários contatos.
2. Desenhar a palma como volume e localizar as raízes dos dedos antes da pose fechada.
3. Escolher a orientação da palma e do antebraço para que o contato seja alcançável.
4. Ajustar cotovelo e ombro; se a mão só chega esticando o braço, rever a postura.
5. Fechar dedos em torno do objeto, verificando penetrações por vista.
6. Na sustentação, conservar a relação mão–objeto; na soltura, encerrar o vínculo em um instante definido.
7. Manter a continuidade do punho quando a direção muda, sem rotação instantânea.

Essa lista é uma proposta de construção, não um conjunto de ações já demonstradas. A caminhada contém apenas **mão relaxada de perfil**, com silhueta agrupada de dedos e polegar próprio. Ela não testa pinça, preensão forte, unhas, rotação 3D, independência dos dedos, contato com objetos nem folhear papel. Não permite declarar esses aspectos resolvidos.

Para uma próxima prova de mão, preferir uma única ação curta com objeto rígido e contato visível. Registrar início, aproximação, fechamento, sustentação e soltura. Avaliar primeiro sem texturas e sem câmera se movendo. O acabamento só entra após a relação entre partes funcionar.

## Peso, apoio e intenção

Peso percebido depende da sequência inteira. É possível desenhar uma caixa grande e fazê-la parecer vazia se mão, tronco e deslocamento mantiverem exatamente o comportamento de um objeto leve. O editor fornece a intenção; o ilustrador propõe antecipação, apoio e limites de alcance compatíveis. Para afirmar que a ação obedece a uma massa ou força específica, é necessário um modelo e uma validação correspondentes.

Na prova atual **não há controle “leve/pesado”**. Não existe objeto carregado nem dinâmica calculada que justifique esse botão. A figura transfere apoios, mas centro de massa físico, reação do chão, torque e equilíbrio dinâmico não são medidos. Uma queda, levantamento ou empurrão deverá receber uma nova prova; reutilizar o ciclo de caminhada não basta.

## Autonomia útil do ilustrador

Dentro do pedido recebido, o ilustrador pode escolher uma simplificação, organizar articulações, propor contatos e corrigir uma trajetória impossível. Deve indicar o que assumiu e apresentar poses de inspeção antes de esconder problemas com acabamento. Se a ação exige mudar a intenção, conteúdo ou duração editorial, devolver o conflito ao editor.

Procedimento recomendado por peça:

- Inventariar volumes, articulações, superfícies e contatos necessários.
- Selecionar referência para a ação e vista solicitadas; registrar fonte e licença caso algum material seja reutilizado.
- Definir o menor modelo que represente a causa visível do movimento.
- Resolver alcance e apoios antes dos detalhes.
- Amostrar começo, fim, transições de contato e extremos.
- Corrigir violações e inspecionar na escala final.
- Entregar controles, limites, exemplos de uso e evidência separada por tipo.

A habilidade não deve transformar esses passos em uma nova direção de arte obrigatória, inventar fatos da narração nem alterar a roupa. Fontes anatômicas orientam a construção; não autorizam inserir material médico no vídeo.

## Prova entregue e contrato técnico

`corpo.mjs` é ESM sem dependências. Exporta `meta`, `sample(t, options={})` e `draw(ctx, state, theme, debug=false)`. O espaço de desenho é 960×540; a área segura da prova é x=50…910, y=40…465. Os papéis de cor são `fundo`, `superficie`, `papel`, `tinta`, `contorno`, `protagonista`, `contraparte` e `risco`; o núcleo não fixa paleta Alpha.

`sample` é pura, aceita tempo em segundos, limita a faixa a 0…8 e retorna articulações, contatos ativos, fase, limites e parâmetros. `options` está reservado; nenhum controle de comportamento é anunciado nesta versão. Há três ciclos, seis passos, 384 unidades de avanço; o fim não retorna ao início. Repetição ou recorte pertencem ao consumidor.

O joelho usa IK de duas barras; o braço usa rotações encadeadas; o punho herda o antebraço com pequena variação limitada. O desenho evita linhas internas em excesso, diferencia os membros ao fundo por valor e preserva o volume do tronco. `debug=true` sobrepõe articulações e contatos para inspeção, sem textos dentro da ilustração.

`prancha.html` apresenta quatro poses e reprodução para conferência do produtor. É uma bancada técnica, não cena pronta para o Alpha. O consumidor final continua responsável por câmera, texto, créditos, áudio, áreas reservadas adicionais e enquadramento após transformações.

## O que foi verificado e o que permanece aberto

Executar `node laboratorio/estudo-movimento-corporal/auditar.mjs` na raiz do laboratório. O relatório `resultados.json` registra 2.401 amostras, comprimentos, apoios sem deriva, ausência de penetração do pé no plano, lado de dobra dos joelhos, flexão limitada dos cotovelos, ligação do punho, área segura, continuidade nas trocas de contato e determinismo mesmo consultando tempos em ordem inversa. O código recebe um hash no relatório.

Esses testes verificam esta geometria e estes tempos. Não são avaliação estética, teste perceptual, medição clínica ou QC do motor oficial. Aprovação artística do usuário: **PENDENTE**. QC independente oficial: **NÃO MEDIDO**.

Exercícios seguintes, ainda **propostos**: sentar e levantar com contato no assento; pegar e pousar objeto rígido; virar o tronco preservando o apoio; caminhar em rampa; vista em três quartos; gesto de mão com pronossupinação. Cada um exige um pedido delimitado, fontes adequadas, uma nova prova e seu próprio aceite.
