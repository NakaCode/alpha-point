# Líquidos: causalidade, volume e superfície legível

Estudo aplicado de 05/10/2026, no laboratório isolado. **Estado: pesquisa e prova executável de um tanque com pequenas oscilações.** Este documento acrescenta decisões de construção ao ilustrador que apoia o editor. Não treina pesos de modelo, não substitui o editor e não entrega um simulador geral de fluidos. Fontes e alcance da consulta estão em [fontes.json](fontes.json); verificações locais, em [resultados.json](resultados.json).

## 1. Primeiro escolher o fenômeno que explica a fala

“Água se move” reúne problemas diferentes. O pedido deve dizer o que o público precisa entender: um reservatório subindo, uma embarcação deslocando água, um tanque freando, uma corrente levando sedimentos ou uma gota caindo. O desenho e o modelo mudam com essa intenção. Esta tabela é uma proposta de triagem do laboratório.

| Pedido | Construção inicial indicada | O que conferir | Estado aqui |
|---|---|---|---|
| Nível de reservatório | Área/volume e entradas menos saídas | Nível não cresce sem fonte | Método documentado |
| Líquido em tanque móvel | Modos de superfície excitados pela aceleração | Volume, paredes, atraso e amortecimento | Prova executável |
| Navio flutuando | Geometria submersa e equilíbrio de forças | Calado e deslocamento | Estudo; sem prova nova |
| Rio ou corrente | Direção, seção e velocidade coerentes | Continuidade e fronteiras | Exercício proposto |
| Derramamento | Fluxo de saída com perda de volume no recipiente | Contabilidade entre tanque, jato e poça | Não implementado |
| Gota e menisco | Curvatura, contato e tensão superficial | Escala e forma | Estudo; sem prova nova |
| Onda quebrando, espuma, catarata | Referência observada e modelo adequado | Topologia, colisão, escala | Fora desta prova |

Uma linha senoidal andando sobre um retângulo não demonstra todos esses fenômenos. Escolher uma aproximação estreita e verificável costuma explicar mais que muitos detalhes sem causa.

## 2. Volume vem antes de ondas

O tanque desta prova possui largura `L = 3,4 m`, altura `H = 1,8 m` e profundidade constante `D = 0,5 m`, valores fictícios de bancada. O enchimento define `h = H × fill`. A altura instantânea da superfície é `h + η(x,t)`. A integral da seção é `Lh`; o volume é `DLh`. Não há entrada, saída, evaporação, compressão ou objeto submerso.

**Escolha de implementação própria:** construir `η` como soma de funções ímpares no intervalo simétrico do tanque. A integral de cada função é zero; uma crista cresce retirando área de outro lado. A extrusão de profundidade constante permite conferir o volume sem fingir que se resolveu uma dinâmica 3D. A superfície é amostrada em 121 pontos e desenhada como uma única faixa contínua.

Não se usa uma máscara para esconder uma crista atravessando a borda. A combinação de movimento e controles foi delimitada para manter a água dentro do tanque. Se um novo pedido exigir derramar, deve mudar o modelo e registrar o volume que saiu; cortar visualmente a crista preservando o contador seria um erro.

O material do MIT apresenta conservação de massa, condições de interface e fronteiras no estudo de fluidos. Aqui essas restrições orientam a construção; não se implementam todas as equações daquele curso. [MIT, leis e relações da mecânica de fluidos](https://ocw.mit.edu/courses/6-642-continuum-electromechanics-fall-2008/resources/lec05_f08/).

## 3. Por que a água continua depois da parada

A aceleração lateral do recipiente excita a superfície. Na aproximação de equilíbrio no referencial acelerado, a inclinação é `dη/dx = −a/g`. Durante a mudança, a resposta tem atraso e oscila em torno do equilíbrio. Uma velocidade constante do tanque não pede inclinação permanente: a aceleração é zero.

Ondas lineares relacionam frequência, gravidade, profundidade e número de onda por `ω² = gk tanh(kh)`. A hipótese exige amplitudes e inclinações pequenas; não cobre ondas quebrando. [MIT, Marine Hydrodynamics, Lecture 20](https://ocw.mit.edu/courses/2-20-marine-hydrodynamics-13-021-spring-2005/5d48a5937971d973fd8ca90c051a83f8_lecture20.pdf).

**Derivação e adaptação desta bancada:** usar três modos ímpares, `n ∈ {1,3,5}`, com `kₙ = nπ/L`, e construir:

```
η(x,t) = Σ qₙ(t) sin(kₙx)
qₙ'' + 2ζωₙ qₙ' + ωₙ²qₙ = ωₙ²qeqₙ
qeqₙ = −4La(t) sin(nπ/2) / (g n² π²)
```

O termo `qeq` é a projeção da inclinação de equilíbrio sobre essa base. O código integra cada oscilador com RK4 e passo fixo de `1/240 s`. A trajetória do recipiente usa um polinômio de quinto grau; posição, velocidade e aceleração se conectam sem salto. O movimento de ida começa em 1,1 s e termina em 3,8 s; o retorno parcial acontece de 5,1 a 7,8 s. Depois, a excitação acaba e a oscilação perde energia.

O controle `damping` é uma razão adimensional escolhida para a bancada, **não uma viscosidade mensurada de água, óleo ou mel**. A NASA relata que o amortecimento real do sloshing depende de detalhes do tanque, das paredes e de defletores; prever seus valores exige validação apropriada. [NASA, previsão de sloshing em tanques com defletores](https://www.nas.nasa.gov/SC15/demos/demo12.html).

Na versão final, a ida mede 0,6 m. Reduzi-la durante o desenvolvimento manteve a maior amplitude dentro de 23,7% da profundidade média em todas as combinações testadas. O limite de 25% é uma barreira operacional conservadora desta demonstração, **não uma garantia universal de validade linear**. A prova não foi calibrada contra filmagem experimental. Ela demonstra coerência do modelo declarado.

## 4. Viscosidade, empuxo e tensão superficial não são a mesma coisa

**Viscosidade** está relacionada à resistência ao movimento relativo no fluido. Fluxos viscosos podem desenvolver perfis de velocidade; turbulência não é apenas “onda mais rápida”. O material da OpenStax distingue escoamento laminar, resistência e turbulência. [OpenStax, Viscosity and Turbulence](https://openstax.org/books/university-physics-volume-1/pages/14-7-viscosity-and-turbulence).

**Regra de desenho proposta:** não transformar o mesmo tanque em mel apenas mudando a cor e aumentando `damping`. Para um líquido muito viscoso, o contato com paredes, a queda, a espessura do jato e o tempo de deformação pedem outro estudo. Não apresentar o slider desta bancada como seletor de material.

**Empuxo** corresponde ao peso do fluido deslocado em condições do princípio de Arquimedes. A parcela submersa, a densidade e o volume do corpo importam para o equilíbrio. [OpenStax, Archimedes’ Principle](https://openstax.org/books/college-physics-2e/pages/11-7-archimedes-principle).

**Aplicação futura proposta:** antes de animar um navio boiando, definir sua seção, massa visualmente plausível e água deslocada. Uma carga adicional deve aumentar o calado na direção correta. Se o navio inclinar, revisar estabilidade e contato; posicioná-lo automaticamente em cima de qualquer senoide não constitui um modelo de flutuação. Nenhum corpo flutuante foi adicionado à prova atual justamente para não implicar essa capacidade sem teste.

**Tensão superficial** tende a reduzir a área da interface e influencia gotas, bolhas e meniscos; adesão entre materiais também afeta o contato. [OpenStax, Surface Tension and Capillary Action](https://openstax.org/books/college-physics-2e/pages/11-8-cohesion-and-adhesion-in-liquids-surface-tension-and-capillary-action).

**Aplicação futura proposta:** usar referências da escala representada. Um reservatório não deve receber uma borda arredondada grossa só porque uma gota parece arredondada. Uma gota pequena e uma onda grande não compartilham a mesma proporção entre gravidade e interface. A bancada atual omite menisco, capilaridade, gotas e bolhas; o brilho fino é um recurso de desenho, não uma solução desses efeitos.

## 5. Desenhar para distinguir tanque, superfície e profundidade

O objeto é uma seção 2D extrudida em profundidade visual constante. A água frontal, a superfície superior e a face lateral compartilham a mesma curva. A borda próxima fica à frente da água; a borda afastada é discreta. Essa ordem comunica contenção sem uma grade de linhas sobre o líquido.

Toda cor chega por `theme`; o núcleo não contém a paleta do Alpha. O papel `protagonista` colore o líquido, `papel` ajuda nas bordas e na superfície, `contorno` define o suporte e `contraparte` diferencia a base. Transparência é um recurso local deste desenho; o editor deve confirmar se a roupa do canal permite seu uso. A roupa pode fornecer outros papéis ou exigir uma adaptação opaca equivalente.

Não há espuma aleatória, partículas decorativas, reflexo que desliza sem causa, texto, crédito ou tipografia na peça. O editor continua responsável por todos os elementos editoriais e pelo relógio. A bancada desenha em `960 × 540`, dentro de `x=50…910` e `y=40…465`; isso não autoriza presumir que a mesma área seja segura em qualquer canal ou enquadramento final.

## 6. Autonomia técnica com fronteira clara

Dentro de um pedido de tanque aberto sem derramamento, o ilustrador pode escolher resolução da curva, número limitado de modos, organização das faces e uma aproximação que cumpra o contrato. Deve entregar o motivo dessa escolha, limites e evidências. Pode refinar o passo temporal e corrigir vazamentos sem consultar o editor a cada operação.

Mudam o escopo: inventar entrada de água, acrescentar uma tempestade, trocar a ação pedida por uma metáfora, aumentar a duração da cena ou definir um novo estilo de canal. Essas decisões continuam vindo do responsável pela cena. Se o pedido depende de turbulência, fluido não newtoniano, derramamento ou dados quantitativos reais, declarar a lacuna e propor uma prova específica; não rotular este módulo como solução pronta.

Ao receber um pedido, registrar: ação e causa; escala; gravidade; recipiente; volume inicial; fronteiras; passagem de entrada/saída quando houver; material pretendido; tempo e câmera fornecidos pelo editor; parâmetros de roupa e critérios de revisão. Para uma ilustração qualitativa, valores de bancada são aceitáveis se identificados. Para uma afirmação numérica no vídeo, o modelo ilustrativo não pode virar fonte factual.

## 7. API, determinismo e evidências

`liquidos.mjs` é ESM sem imports, mídia ou dependências externas. Exporta `meta`, `sample(t, options)`, `draw(ctx, state, theme, debug=false)` e `drive(t)` para auditoria. `sample` recebe segundos, sem relógio interno. `fill` aceita `0,35…0,70` e `damping`, `0,12…0,55`. Entradas inválidas falham; tempos anteriores/posteriores são limitados aos extremos da prova de 18 s. `_step` existe para auditoria numérica, não como controle editorial.

O estado informa curva, coeficientes, volume, área, altura mínima/máxima, aceleração e fase. `energy` é uma soma modal normalizada usada para conferir decaimento; **não mede joules nem carga estrutural**. O cache é uma otimização: toda integração começa da condição inicial, e a busca em qualquer ordem retorna o mesmo resultado. `draw` só desenha o estado recebido e preserva o contexto com `save/restore`.

Reprodução: `node laboratorio/estudo-liquidos/auditar.mjs`. Sete grupos passaram: volume/confinamento em 9.729 quadros de nove combinações; repouso e decaimento; direção da resposta; busca independente da ordem e descarte do cache; continuidade nas transições; refinamento `1/240 → 1/480 s`; área segura analítica e entradas inválidas. Os valores completos estão no JSON. O maior erro de volume ficou em `3,11 × 10⁻¹⁵ m³`; a maior diferença por refinamento ficou em `1,08 × 10⁻¹⁰ m`.

Esses números verificam implementação e estabilidade desta bancada. Não aprovam semelhança com qualquer líquido real, qualidade artística geral, comportamento de líquidos fora do envelope ou QC oficial. A revisão visual integrada e a aprovação de Lucas são evidências separadas.

## 8. Próximas provas que acrescentariam capacidade real

Reservatório com entrada/saída e balanço de volume; embarcação simples com deslocamento e calado; corrente de canal com seção/velocidade coerentes; transferência entre recipientes com jato e volume rastreável; pequena gota com contato documentado. Cada exercício deve ter contrato, estado inicial, modelo declarado, caso negativo e comparação visual própria. Aumentar a biblioteca só depois de conseguir explicar o que a nova prova resolve e onde deixa de funcionar.
