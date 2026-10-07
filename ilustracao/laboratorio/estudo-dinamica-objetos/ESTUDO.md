# Dinâmica de objetos para ilustração narrativa

Estudo aplicado de 05/10/2026. Escopo: ensinar o ilustrador a construir movimentos com causas reconhecíveis e restrições verificáveis. O editor continua responsável pela cena, pelo relógio, pela câmera e pela relação com a fala. Este material é conhecimento consultável e uma prova executável; não é treinamento de pesos nem certificação física de qualquer cena futura.

## 1. O problema visual que queremos resolver

Um objeto pode estar bem desenhado e ainda parecer sem peso: acelera antes de receber força, desacelera no meio de uma queda, quica cada vez mais alto ou para antes de tocar o apoio. Nosso método deve ligar cada mudança de movimento à sua causa. A ordem de construção é: forma rígida ou deformável, escala, centro de massa, apoios, forças, regime de contato, movimento e acabamento.

Para uma mala colocada na mesa, a sequência causal é mão sustentando → aproximação → contato → peso transferido à mesa → dedos soltando. Para uma carga pendurada, mudar apenas a posição do contêiner é insuficiente: comprimento dos cabos, ponto de suspensão e atraso angular precisam continuar coerentes. Estas são recomendações de produção deste laboratório, não conclusões de uma medição dessas cenas.

## 2. A unidade precisa existir antes do pixel

O estado físico usa metros, segundos, quilogramas e radianos. A projeção converte metros em pixels somente ao desenhar. O contrato precisa informar a escala mesmo que o público não veja uma régua. Duplicar a dimensão desenhada sem mudar a escala física é um reenquadramento; duplicar o tamanho físico muda relações de tempo e inércia.

Para massa constante, a aceleração resulta da força líquida: `ΣF = m a`. Massa mede inércia; peso é uma força. Duas massas sujeitas apenas à gravidade uniforme têm a mesma aceleração. Resistência do ar, empuxo e contatos podem alterar o resultado. [Base: OpenStax, segunda lei](https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law).

Nossa bancada adota `g = 9,81 m/s²`, distância inicial entre esfera e chão de `2,6 m`, raio `0,27 m` e massas `1 kg` e `5 kg` no modo de massa. São parâmetros ilustrativos de um cenário ideal, não medições de objetos reais ou de uma localização geográfica. As duas esferas têm o mesmo tamanho para isolar massa; isso implica densidades diferentes. A aparência colorida sozinha não deve ser usada para comunicar essa diferença: a UI ou o editor precisa identificá-la.

## 3. Queda livre não é uma curva de easing

Sem ar e com gravidade constante, `y(t)=y₀+v₀t−g t²/2` e `v(t)=v₀−gt`, com eixo positivo para cima. A curva de posição é quadrática. No topo de um lançamento a velocidade vertical é zero, mas a aceleração continua apontando para baixo; não existe uma pausa física. A duração de uma queda inicialmente parada, de altura `h`, é `√(2h/g)`. [Base: OpenStax, queda livre](https://openstax.org/books/university-physics-volume-1/pages/3-5-free-fall).

Procedimento aplicado: marcar o instante de soltura e o primeiro contato; resolver a trajetória entre os dois; só então enquadrar. Se o editor quiser ampliar o instante do choque, ele pode usar câmera lenta declarada. O componente não deve inventar uma gravidade que muda silenciosamente para caber na fala. Um objeto submerso, uma folha de papel ou um paraquedas exige outro modelo.

## 4. Impacto, restituição e energia

No impacto ideal com um chão imóvel, `v⁺ = −e v⁻` na direção normal. O coeficiente `e` descreve a relação entre velocidades de separação e aproximação; `0` elimina o retorno normal e `1` representa o caso perfeitamente elástico. Para um corpo que volta ao mesmo nível, a energia cinética normal depois do impacto é `e²` vezes a anterior. Materiais reais dependem da combinação de superfícies, velocidade e deformação. [Base: OpenStax, colisões inelásticas](https://openstax.org/books/college-physics-2e/pages/8-5-inelastic-collisions-in-one-dimension).

Impulso é mudança de momento: `J=Δp`. Em nossa colisão unidimensional, `J=m(v⁺−v⁻)`. Um salto instantâneo de velocidade pode representar o limite de uma colisão muito breve; não implica que a posição salte. [Base: OpenStax, impulso](https://openstax.org/books/university-physics-volume-1/pages/9-2-impulse-and-collisions).

A auditoria acompanha `E=mgh+mv²/2`, com referência potencial na altura de contato. Em voo livre essa soma permanece constante. Choques dissipativos reduzem energia mecânica; energia total inclui deformação, calor e som que o modelo não calcula. [Base: OpenStax, conservação de energia](https://openstax.org/books/university-physics-volume-1/pages/8-3-conservation-of-energy).

Nesta prova, “borracha” usa `e=0,78` e “madeira” usa `e=0,34`. Os nomes ajudam a comparar respostas idealizadas; os valores não são constantes universais de materiais. Depois de um impacto cujo retorno calculado seria menor que `0,09 m/s`, o componente mantém repouso exato e elimina a pequena energia restante. Esse limiar é uma decisão numérica explícita: evita uma série de microquiques invisíveis. Não é uma simulação de deformação da esfera.

## 5. Atrito, repouso e deslizamento

No modelo de Coulomb, a força de atrito cinético tem módulo `μₖN`, enquanto o atrito estático se ajusta até um limite `μₛN`. Atrito depende do contato; amortecimento do movimento inteiro não é equivalente. Para um bloco deslizando num plano horizontal sem outras forças, a desaceleração tem módulo `μₖg` até parar. Depois, inverter automaticamente o sinal a cada passo produziria uma vibração artificial. [Base: OpenStax, atrito](https://openstax.org/books/university-physics-volume-1/pages/6-2-friction).

Aplicação recomendada: ao parar uma caixa, resolver o instante de parada dentro do passo e trocar para o regime de repouso. Ao apoiar uma roda, distinguir deslizar de rolar. Uma relação `v=ωR` pertence ao rolamento sem escorregamento; não deve ser aplicada quando o contato escorrega. Nenhum desses casos está implementado na prova vertical atual, porque não há movimento tangencial.

## 6. Torque e orientação do corpo

Torque depende de onde e em que direção a força age: `τ=r×F`. Empurrar longe da dobradiça é diferente de empurrar junto dela. A peça deve girar em torno do pivô apropriado, preservando distâncias rígidas. [Base: OpenStax, torque](https://openstax.org/books/university-physics-volume-1/pages/10-6-torque).

Para rotação plana de corpo rígido com eixo fixo, `Στ=Iα`. O momento de inércia depende da distribuição de massa e do eixo escolhido; não basta reutilizar uma massa escalar em qualquer rotação. Esta expressão de eixo fixo não é um solucionador geral de rotação espacial. [Base: OpenStax, dinâmica de rotação](https://openstax.org/books/university-physics-volume-1/pages/10-7-newtons-second-law-for-rotation).

Aplicação ao cofre: a dobradiça é restrição geométrica; uma mão pode dirigir o ângulo pela encenação. Não é necessário simular torque para todas as aberturas. É necessário impedir a porta de encolher, trocar de pivô ou atravessar a estrutura. Simulação física passa a ser útil quando interessa mostrar uma porta solta batendo, um limitador ou resistência ao giro. Esses casos pedem parâmetros e validações adicionais.

## 7. Pêndulo e carga suspensa

Um pêndulo simples ideal obedece a `θ̈=−(g/L)sinθ`. A aproximação de pequeno ângulo substitui `sinθ` por `θ` e produz `T≈2π√(L/g)`. Um seno de amplitude grande com esse período não é a solução exata geral. A posição precisa preservar a distância `L` entre pivô e massa. [Base: OpenStax, pêndulos](https://openstax.org/books/university-physics-volume-1/pages/15-4-pendulums).

Para a animação de um guindaste, definir se o cabo está tenso; um cabo não empurra a carga. Não aumentar amplitude sem uma força ou deslocamento do apoio que forneça energia. O amortecimento pode modelar perda gradual se declarado. Cabos múltiplos, carga extensa e colisão pedem restrições adicionais. Pêndulo entra aqui como conhecimento e exercício futuro, não como prova entregue.

## 8. Escolher o método com autonomia delimitada

| Situação recebida | Método preferencial | Evidência que precisa acompanhar |
|---|---|---|
| Porta conduzida pela mão, montagem dirigida | Keyframes com vínculos geométricos | Pivô, contatos, comprimentos e poses intermediárias |
| Queda isolada ou lançamento sem ar | Solução analítica | Unidades, forças adotadas, instante de contato |
| Muitos contatos e restrições acopladas | Simulação com passo fixo e bake | Versão do solver, parâmetros, passo, convergência e cache |
| Objeto real cujo tempo é relevante | Referência medida ou rastreada | Origem e escala, margem de erro e o que foi simplificado |
| Movimento estilizado pedido pelo editor | Curvas dirigidas explicitamente | Intenção, limites de exagero e preservação dos contatos |

Esta tabela é uma decisão de implementação do laboratório. O ilustrador pode escolher o método para cumprir o pedido, mas não alterar fatos, peso narrativo, duração editorial, câmera, marca ou créditos sem entrada que autorize. Se falta um parâmetro que altera a afirmação do vídeo, registrar a lacuna. Para uma prova visual, usar um valor ilustrativo declarado. Para uma simulação factual, solicitar referência ou calibração.

## 9. Passo fixo, bake e busca de quadros

A documentação oficial do Box2D recomenda um passo de tempo fixo; um passo de `1/60 s` e subpassos são escolhas usuais para o motor, não garantias universais. Contatos pequenos ou rápidos podem exigir mais resolução. [Base: Box2D, simulação](https://box2d.org/documentation/md_simulation.html). O motor também disponibiliza um limiar de restituição para favorecer repouso estável. [Base: Box2D, mundo](https://box2d.org/documentation/group__world.html).

Fluxo recomendado para futuros componentes simulados: rodar desde o estado inicial com passo constante; salvar estados e eventos; registrar hash e parâmetros; amostrar o cache com o tempo do editor. A taxa de captura de vídeo não deve alterar a física. Fazer busca de `8 s → 2 s → 5 s` deve gerar os mesmos estados que reprodução linear. Testar convergência reduzindo o passo; se a diferença muda a leitura da ação, aumentar resolução ou trocar o método. Não instalar um motor apenas para um arco parabólico solucionável diretamente.

## 10. Prova entregue e API

`objetos.mjs` é ESM sem imports, rede, relógio, dependências ou aleatoriedade. Exporta:

- `meta`: identidade da bancada, duração de 8 segundos, resumo, limites e controles.
- `sample(t, options)`: função pura; recebe segundos e `{comparacao:'materiais'|'massas', material:'borracha'|'madeira'}`. Retorna duas esferas com posição física, velocidade, massa, energia, restituição, contatos, eventos e unidades. Tempo negativo congela a pose inicial; tempo não finito e opções desconhecidas são rejeitados.
- `draw(ctx, state, theme, debug=false)`: desenha os componentes em Canvas 2D de 960×540. Recebe papéis de cor `fundo, superficie, papel, tinta, contorno, protagonista, contraparte, risco`. Não limpa o quadro, não coloca títulos, créditos ou textos, não define o relógio e não depende de uma marca.
- `parameters` e `ballAt`: parâmetros congelados e solução física para auditoria/reuso controlado.

No modo materiais, as massas são iguais e os coeficientes distintos. No modo massas, as massas são 1 kg e 5 kg com o mesmo coeficiente; as trajetórias coincidem. Os centros ficam em x=306 e x=654. A projeção usa 109 px/m, o apoio fica em y=428; arte e sombras cabem na área segura da bancada. O editor pode posicionar e escalar o conjunto preservando a proporção, inserir legendas e remapear a roupa.

## 11. Verificação e limites de transferência

`node laboratorio/estudo-dinamica-objetos/auditar.mjs` gerou `resultados.json`: oito grupos passaram, incluindo 11.523 estados amostrados, contatos exatos, energia, aceleração, repouso, busca fora de ordem e sentinelas que precisam reprovar estados deliberadamente errados. A auditoria matemática não concede aprovação artística nem QC oficial.

Esta prova não demonstra atrito, rotação, pilhas de caixas, malhas deformáveis, cabo frouxo ou líquido. Sua transferência válida é: unidades explícitas; movimento com causa; contato consistente; estado determinístico; parâmetros documentados; e seleção de método. Os próximos exercícios de física devem ser avaliados separadamente. Uma mesa de bilhar ou um navio em ondas não está validado porque a esfera caiu corretamente.

As fontes consultadas e o papel de cada uma estão em `fontes.json`. Nenhuma figura, tabela de coeficientes ou exercício de livro foi copiado para a arte. A composição e os parâmetros da bancada foram criados no laboratório.
