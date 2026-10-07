# Corpos interagindo com a água

Estudo e prova de 05/10/2026. Pedido de Lucas: verificar o comportamento da água com coisas interagindo com ela, além de um recipiente se mover. A bancada acrescenta três situações: corpo leve cai e flutua; corpo denso cai e afunda; corpo leve é liberado já submerso e emerge.

## O que a interação precisa mostrar

Antes do contato, o corpo cai sob gravidade. A parte submersa desloca água e recebe empuxo. O arrasto se opõe à velocidade e dissipa energia. O corpo leve pode ultrapassar a posição de equilíbrio e oscilar; o denso encontra apoio no fundo. O líquido tem volume constante, e o nível médio aumenta conforme cresce o volume ocupado pelo corpo.

O princípio de Arquimedes relaciona a força de empuxo ao peso do fluido deslocado. Em equilíbrio de flutuação sem outras forças verticais, a fração de volume submerso corresponde à razão entre densidades. Um objeto que afunda também recebe empuxo. Essa é a base física usada aqui. [OpenStax, Archimedes’ Principle and Buoyancy](https://openstax.org/books/university-physics-volume-1/pages/14-4-archimedes-principle-and-buoyancy).

Esta prova trata a água como um reservatório hidrostático que ajusta o nível instantaneamente. Isso permite demonstrar deslocamento e flutuação, mas não simula a propagação de ondas durante a entrada. Não acrescente espuma ou respingos aleatórios para disfarçar esse limite. A prova de oscilação do tanque e esta prova de empuxo estudam relações diferentes; combiná-las exigiria novo acoplamento e nova validação.

## Geometria e unidades

A implementação própria usa uma esfera de raio 0,4 m em tanque de largura 3,2 m, profundidade 0,95 m e altura 1,8 m. O nível inicial é 0,95 m; a água tem densidade escolhida de 1.000 kg/m³. O corpo tem densidade de 420 kg/m³ nos casos de flutuação e 1.250 kg/m³ no caso denso. São valores de cenário ilustrativo, não caracterização de uma substância ou objeto histórico. Não há material real inferido apenas pela cor.

Para uma calota de altura submersa `h` numa esfera de raio `r`, a geometria dá `Vsub=πh²(r−h/3)`, limitada ao intervalo `0≤h≤2r`. O volume total é `4πr³/3`. A cada avaliação resolvemos:

```
A = largura × profundidade
nivel = nivelInicial + Vsub(nivel, centroDaEsfera) / A
Vagua = A × nivel − Vsub
```

A solução por bisseção considera que o próprio aumento de nível altera a parcela submersa. Isso evita o erro de subir a água por um número de pixels arbitrário. O desenho mostra uma projeção frontal da esfera e um recipiente em vista oblíqua; o cálculo de deslocamento usa volume 3D, não a área circular desenhada.

## Forças e aproximações

O eixo vertical físico aponta para cima. Fora da água, a aceleração é `−g`. Dentro dela, `m a = empuxo − peso + arrasto`, com `empuxo=ρagua g Vsub` e `peso=mg`. Há um termo de resistência quadrática e outro linear, ambos contrários à velocidade. A equação de arrasto relaciona força à densidade, área de referência, coeficiente e velocidade; o coeficiente depende do regime. [NASA Glenn, Drag Equation](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-equation/).

**Escolha de bancada:** `Cd=0,8` e coeficiente linear de 450 N·s/m, multiplicados pela fração submersa. Essa interpolação simples não é um modelo validado de impacto hidrodinâmico. Ignora massa adicionada, formação de cavidade, spray, viscosidade distribuída, escoamento ao redor do corpo e resistência do ar. Não permite afirmar a trajetória real de uma bola, navio ou pessoa na água.

Depois de 0,6 s de apresentação, a esfera é solta. Integração RK4 com passo fixo de 1/360 s calcula a dinâmica; o consumidor consulta os estados pelo tempo local. No fundo existe um contato inelástico: projeção para a altura de contato e velocidade descendente anulada. A trajetória do caso denso é uma aproximação numérica desse contato; não representa a deformação de um impacto real.

## Desenho e revisão

O objeto usa `protagonista`; a água usa `contraparte`; tanque e suporte usam os papéis neutros recebidos na roupa. Não há texto na arte. A parte submersa recebe uma cobertura translúcida para leitura de profundidade, sem alegar render de refração. A posição da linha d’água é a calculada pelo modelo.

Inspecionar: contato inicial, maior imersão, retorno, repouso e apoio no fundo. Uma esfera densa parada no fundo não deve ser chamada de equilíbrio de flutuação. No modo de inspeção, a linha tracejada mostra o nível inicial e as setas representam peso e empuxo. As setas não incluem todas as forças transitórias; arrasto e reação de apoio constam do estado e não dessa visualização simplificada.

## API e evidência

`agua.mjs` exporta `meta`, `sample(t,{caso})` e `draw(ctx,state,theme,debug)`, além de auxiliares de auditoria. Os casos são `flutuar`, `afundar` e `emergir`; a duração é 12 s. Tempo finito é limitado à duração. `_step` existe para refinamento de auditoria, não como controle do editor. O módulo não consulta relógio nem aleatoriedade. O cache guarda estados do mesmo início e dos mesmos parâmetros, sem depender da ordem das consultas.

`node laboratorio/estudo-agua-interacao/auditar.mjs` verifica oito grupos: 4.323 estados entre as três ações, conservação de água, balanço de forças com retenção/apoio, finitude, ausência de penetração de fundo, dissipação por arrasto, equilíbrio final, geometria de calota, busca fora de ordem, mutação externa, refinamento temporal e área segura geométrica. A comparação de passo refinado cobre os casos sem impacto de fundo; esse recorte está explícito no resultado. Não é laudo de CFD, validação de dados científicos ou aprovação artística.

## Próxima transferência possível

Para usar em outra cena, substituir a esfera por uma geometria de deslocamento apropriada, informar massa/densidade e declarar forças incluídas. Um casco exige curvas de volume submerso e estabilidade angular; uma mão entrando num copo exige geometria composta, oclusão e contato próprios. Derramar exige acompanhar água que sai, jato, gotas e volume restante. Nenhuma dessas capacidades está aprovada por esta prova. O editor conserva texto, crédito, cena, sincronismo, câmera e render.
