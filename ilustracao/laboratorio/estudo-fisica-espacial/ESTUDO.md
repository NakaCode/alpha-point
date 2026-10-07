# Física espacial para ilustrações narrativas

Estudo aplicado de 05/10/2026. **Entregas executáveis: órbita kepleriana excêntrica e disco de partículas em rotação diferencial.** Buracos negros, acreção, lentes e tempo de viagem da luz são conhecimento de construção e propostas de provas futuras; não foram simulados neste módulo. A pesquisa não equivale a treino de pesos, validação astrofísica universal ou autorização para substituir as fontes do roteiro. [Fontes e limites de consulta](fontes.json).

## 1. Escolher o nível de afirmação da imagem

Uma imagem pode ser um **esquema** que identifica partes, uma **animação qualitativa** que explica uma relação, uma **simulação limitada** com equações e hipóteses, ou uma **visualização de dados observados**. O ilustrador deve declarar qual está entregando. Esses níveis não são intercambiáveis: partículas bonitas girando em espiral não demonstram uma simulação de galáxia, e um círculo preto com halo não comprova relatividade geral.

A função continua sendo fornecer ao editor elementos e movimentos fiéis ao fenômeno pedido. Roteiro, metáfora, montagem, legendas, escalas escritas, câmera final, créditos e ritmo vêm das entradas ou do editor. As bancadas abaixo existem para testar construção e causalidade, sem criar nova etapa obrigatória na linha do Alpha.

## 2. Órbitas: mover pela dinâmica, não pelo desenho da elipse

As leis de Kepler descrevem elipses com o corpo central em um foco, áreas iguais varridas em tempos iguais e relação entre período e semieixo maior. A velocidade é maior perto do corpo central. [NASA, Orbits and Kepler’s Laws](https://science.nasa.gov/solar-system/orbits-and-keplers-laws/).

**Implementação própria:** esta bancada usa unidades normalizadas, semieixo `a=1`, excentricidade `e=0,64`, período visual `T=12 s` e `μ=(2π/T)²a³`. Não se trata de uma órbita específica do Sistema Solar. Resolvemos a equação de Kepler `E − e sin(E) = nt` por Newton; a posição no referencial do foco é:

```
n = 2π/T
x = a(cos E − e)
y = a√(1−e²) sin E
E' = n/(1−e cos E)
a⃗ = −μ r⃗ /|r⃗ |³
```

Velocidade e aceleração vêm da mesma solução. Não se percorre uma elipse com ângulo linear, nem se usa easing para decidir arbitrariamente quando acelerar. A aceleração aponta ao foco; a velocidade é tangente. Em uma órbita circular, a rapidez pode ser constante mesmo com aceleração, porque a direção da velocidade muda. [NASA, Gravity & Mechanics](https://science.nasa.gov/learn/basics-of-space-flight/chapter3-1/).

No desenho, os pequenos pontos marcam intervalos de tempo iguais: ficam próximos no trecho lento e distantes no rápido. Duas cunhas com intervalos de `0,6 s` têm a mesma área, embora uma seja comprida/estreita e outra curta/larga. A estrela e o corpo orbital foram ampliados para leitura; suas dimensões visuais não representam a escala orbital.

**Limites:** partícula de teste em campo central newtoniano, órbita planar isolada, sem perturbações, colisões, manobra propulsiva, relatividade ou movimento reflexo do corpo central. Para dois corpos de massas comparáveis, o próximo contrato deve incluir o baricentro e ambos os movimentos. Uma aproximação não autoriza desenhar um centro imóvel em qualquer sistema binário.

## 3. Galáxias: estrelas, distribuição de massa e padrão de braços

A documentação Gaia mostra que órbitas estelares dependem do campo coletivo de estrelas, gás e matéria escura; modelos simples podem usar movimentos circulares com velocidade dependente do raio. Isso difere de tratar a galáxia inteira como planetas ao redor de uma única massa central. [ESA/Gaia, Where do the stars go or come from?](https://www.cosmos.esa.int/web/gaia/dr3-where-do-the-stars-go-or-come-from).

**Modelo próprio da bancada:** 480 partículas de teste em um potencial fixo com núcleo suavizado:

```
Φ(r) = (v₀²/2) ln(r² + r꜀²)
v(r) = v₀r / √(r² + r꜀²)
ω(r) = v₀ / √(r² + r꜀²)
θ(t) = θ₀ + ω(r)t
v₀ = 0,32; r꜀ = 0,18
```

São unidades de bancada, não medições da Via Láctea. Cada estrela permanece em uma órbita circular permitida pelo potencial. Duas partículas destacadas mostram a diferença de velocidade angular: a interna completa mais voltas. O campo é fixo; estrelas não exercem força umas nas outras, não nasce gás, e não há evolução da distribuição de massa.

Os dois braços iniciais são uma distribuição ilustrativa imposta. Ao girar diferencialmente, essa marca material se enrola. **A prova demonstra esse enrolamento, não a origem ou manutenção de braços reais.** A estrutura espiral não contém para sempre as mesmas estrelas, e há diferentes interpretações e mecanismos. [ESA, braços e disco da Via Láctea](https://www.esa.int/About_Us/ESAC/Five_fascinating_Gaia_revelations_about_the_Milky_Way).

Também não se deve ensinar que todo braço real é necessariamente uma onda rígida eterna. Grand, Kawata e Cropper encontraram estruturas transitórias com velocidade de padrão variável em suas simulações. É um resultado de modelos específicos, útil para impedir uma regra simplista universal, não uma receita para todas as galáxias. [Grand et al., The dynamics of stars around spiral arms](https://arxiv.org/abs/1112.0019).

**Decisão visual:** a projeção inclinada pertence à câmera, não à dinâmica. Os cálculos ocorrem no disco; depois uma transformação fixa projeta os pontos. O brilho central é uma concentração desenhada e não um buraco negro luminoso. O traço de partículas e as cores mostram movimento; não representam temperatura, composição, massa ou luz calibradas.

## 4. Buracos negros: componentes que não podem virar um único efeito

Horizonte, sombra observada, disco de acreção e anéis de luz são conceitos distintos. A luz visível vem da matéria externa; nem todo buraco negro possui um disco brilhante. Lentes gravitacionais podem fazer partes distantes do disco aparecerem acima ou abaixo da sombra. Jatos não são matéria saindo de dentro do horizonte. [NASA, Anatomy of a Black Hole](https://science.nasa.gov/universe/black-holes/anatomy/).

**Contrato proposto para uma futura ilustração:** declarar massa e spin assumidos, distância/câmera, tipo de desenho, componentes pedidos e quais efeitos foram apenas esquematizados. Se a tarefa for identificar partes, entregar um esquema coerente e rotulado pelo editor. Se for mostrar “como um observador veria”, é preciso declarar trajetória de raios, relatividade e emissão; uma deformação gráfica de tela não basta.

ISCO é a órbita circular estável mais interna para a classe de partículas e espaço-tempo considerada. No caso de Schwarzschild, sem rotação, a referência usual para partículas de teste é três raios de Schwarzschild. Não confundir com horizonte ou esfera de fótons; não estender esse número a qualquer spin. [Chen e Taam, registro NASA NTRS](https://ntrs.nasa.gov/search.jsp?R=19930062324). Material da ESA mostra a dependência de ISCO com spin e orientação relativa da órbita. [ESA, Active Galactic Nuclei — XVision 2023](https://www.cosmos.esa.int/documents/332006/11733768/XVision2023_AGN_2.pdf).

Não existe módulo de buraco negro neste teste. O ilustrador ainda não demonstrou traçado relativístico de raios, transferência radiativa, magnetohidrodinâmica, marés ou queda atravessando horizonte. Para desenvolver isso depois, a prova deve ter limites físicos próprios e comparação com uma referência calculada/observada adequada. Reutilizar `orbitAt` perto de um horizonte seria uma extrapolação inválida.

## 5. Lentes: a imagem aparente precisa de um observador

Uma lente gravitacional pode distorcer, ampliar e multiplicar imagens de uma fonte. O resultado depende da distribuição de massa e do alinhamento fonte–lente–observador. [NASA, Hubble Gravitational Lenses](https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/hubble-gravitational-lenses/).

**Proposta de construção:** separar o desenho explicativo em corte, com caminhos e posição do observador, da imagem aparente que o observador recebe. Uma fonte duplicada na tela representa duas imagens aparentes; não duas galáxias físicas. Uma futura aproximação de lente fina deve documentar equação, distâncias, massa, regime e o que ignora. Um anel perfeito só deve aparecer sob as condições de alinhamento/modelo que o justificam. Esta bancada não desenha nem calcula lentes.

## 6. Luz, tempo e escala editorial

Ano-luz é uma distância; observar luz que viajou por muito tempo permite estudar o passado. [NASA, Time Travel: Observing Cosmic History](https://science.nasa.gov/mission/hubble/science/science-behind-the-discoveries/time-travel-observing-cosmic-history/).

**Método proposto:** manter distintos o tempo físico do modelo, o tempo de viagem da luz e os segundos de reprodução. Registrar `segundos_de_video → tempo_do_modelo`. Não desenhar uma frente de luz mudando de velocidade apenas para chegar junto de uma fala. Quando uma escala real torna o objeto invisível, ampliar o símbolo e informar essa escolha ao editor; não ampliar órbita, raio e velocidade de modos incompatíveis sem declarar a mudança.

Em cosmologia, não tratar distância atual, distância inferida pelo brilho e tempo de viagem como o mesmo número. O roteiro deve fornecer a medida e a fonte; a ilustração escolhe uma representação compatível. Uma transição entre planeta, galáxia e universo precisa declarar as trocas de escala. O fundo decorativo de estrelas não é um catálogo astronômico e não deve ser identificado como céu real de uma época/local.

## 7. Autonomia técnica e integração

O ilustrador pode escolher solução analítica, número de pontos, seed de partículas, ordem de desenho e resolução para cumprir o pedido. Deve justificar o modelo e verificar invariantes. Não pode transformar partículas arbitrárias em dados, inventar um efeito físico para preencher a tela, assumir um objeto astronômico real sem entrada ou mudar o papel da câmera editorial.

`espaco.mjs` não tem imports, relógio interno, chamadas de rede ou cores literais. Exporta `meta`, `sample(t, options)`, `draw(ctx, state, theme, debug=false)`, `orbitAt(t)` e `circularAt(r, theta0, t)`. O controle `modelo` aceita `orbitas` ou `galaxia`. `sample` recebe segundos e limita a bancada a `0…12`; cada estado independe dos quadros anteriores. O editor decide como consumir as peças e deve conservar os avisos de escala/modelo na entrega apropriada.

A arte ocupa a área de bancada `x=50…910`, `y=40…465` no Canvas `960×540`. Textos e créditos permanecem fora do módulo. A roupa fornece os papéis de cor; cores da demonstração não adicionam automaticamente significado físico. O núcleo pode ser usado em outro canal sem carregar a identidade do Alpha.

## 8. O que foi verificado e o que ainda falta

`node laboratorio/estudo-fisica-espacial/auditar.mjs` produz [resultados.json](resultados.json). Seis grupos passaram: energia e momento angular de Kepler em 1.441 instantes; áreas iguais por quadratura geométrica independente; velocidade no periastro, fechamento e derivadas; conservação dos 480 traçadores em 361 quadros; rotação diferencial; busca determinística, entradas e enquadramento.

Erro relativo de momento angular orbital: `4,14 × 10⁻¹⁶`. Erro máximo entre áreas calculadas geometricamente e área prevista: `1,40 × 10⁻⁸`. A razão de rapidez periastro/apoastro é `4,555…`, coerente com a excentricidade definida. Esses números não validam uma galáxia real nem relatividade; verificam duas implementações delimitadas. Inspeção visual integrada, aprovação de Lucas e QC oficial são evidências distintas.

Próximas provas úteis: sistema binário com baricentro; comparação de curvas de rotação com dados fornecidos; frente de luz com tempo de observação; lente fina com fonte/observador declarados; esquema de componentes de buraco negro antes de qualquer ray tracing. Cada nova prova deve incluir um caso que detecte um erro plausível, e não somente reproduzir a própria fórmula em um teste.
