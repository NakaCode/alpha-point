# Movimento, contato e dinâmica

Use esta referência quando a peça precisa atuar, transferir carga, reagir a impacto ou conter líquido. Ela amplia a construção técnica; direção, eventos e duração continuam vindo do editor. Os estudos são referências aplicadas, não treinamento de pesos nem certificação de um simulador universal.

## Escolher o modelo pela ação

| Pedido | Método inicial | O que precisa permanecer verificável |
|---|---|---|
| Mão alcança/segura; pessoa caminha | Poses dirigidas e cinemática com restrições de contato | Segmentos constantes, lado da dobra, superfície de apoio, continuidade e alcance |
| Porta, pistão, roda, articulação | Geometria e relações mecânicas | Pivô, curso, dimensões, oclusão e acoplamento |
| Queda, lançamento, quique simples | Solução analítica por trechos | Unidades, gravidade, tempo do impacto, energia e repouso |
| Vários corpos interagem | Simulação com passo fixo e estados amostrados | Colisões, estabilidade, convergência e reprodução fora de ordem |
| Água em recipiente, pequena oscilação | Superfície livre com volume e limites, modelo reduzido declarado | Área/volume, resposta à aceleração, borda e amortecimento |
| Objeto dentro da água | Geometria submersa, empuxo e resistência declarada | Volume deslocado, apoio, massa e transições |
| Órbitas e discos estelares | Dinâmica gravitacional apropriada ao regime | Foco, velocidade, unidades e conservação |
| Buraco negro, lente ou disco relativístico | Esquema identificado ou cálculo/referência científica correspondente | Horizonte versus sombra, projeção, escala e procedência |
| Derramamento, onda quebrando, espuma, tecidos ou areia | Prova específica antes de prometer a entrega | Topologia, resolução, orçamento, aproximações e referências adequadas |

Não aplique o mesmo easing a tudo. Uma trajetória controlada pode ter suavização; um voo balístico precisa de aceleração coerente. Não acrescente simulação quando uma relação geométrica resolve a ação com menos variáveis. Um modelo de água em tanque não serve automaticamente a rios, lava ou uma avalanche.

## Corpo e mão: resolver a cadeia inteira

Para dedos e punho, priorize o [estudo específico de mãos](../../../laboratorio/estudo-maos-movimento/ESTUDO.md). Ele detalha MCP/PIP/DIP, oposição, coordenação por tarefa, tenodese e contatos. Os acoplamentos variam com a ação e a pessoa; não transforme uma razão ilustrativa de falanges ou limite articular em regra clínica universal. Estude fechamento, pinça e punho separadamente antes de encadear uma tarefa complexa.

Leia o estudo de **movimento corporal** e, para dedos/preensão, o estudo de anatomia existente. Defina massas principais, comprimentos, plano de flexão e estados de apoio antes do contorno. O alvo é uma superfície de contato, não apenas um ponto no centro da mão. Alcance é limitado pela cadeia; deslocar ombro, tronco ou dar um passo pode ser necessário, desde que a ação recebida permita. Não estique braço ou dedos silenciosamente.

Durante o apoio da marcha, o contato ativo permanece no chão; calcanhar, sola e ponta podem se alternar. Prender a planta inteira durante todo o passo também produz movimento errado. Use uma trajetória contínua na fase aérea, sem atravessar o solo. Pelve, tronco, braços e cabeça precisam de relações funcionais; senoides independentes não substituem coordenação. Diferencie equilíbrio estático de marcha: não reprove uma pose dinâmica somente porque a projeção do centro de massa passou do apoio instantâneo.

Na mão, a orientação do punho é relativa ao antebraço e a pronação/supinação pertence ao antebraço. Contato envolve palma/polegar/dedos conforme o tipo de preensão, com fechamento e soltura progressivos. Depois da liberação, a mão não deve continuar presa ao objeto. Um desenho pequeno de mão caminhando não demonstra manipulação fina ou cinco dedos articulados.

Avalie **articulação e superfície separadamente**. Juntas corretas não garantem uma mão reconhecível: a palma precisa afunilar até o punho, o primeiro metacarpal do polegar precisa se integrar à massa tenar, e as falanges precisam continuar legíveis no fechamento. Não esconda junções de volumes com mais sombra ou textura. Primeiro confira silhueta aberta, meio fechamento, fechada, pinça e extremos do punho; depois confira as oclusões em movimento. Um aceite limitado à articulação não aprova a forma. Preserve a intenção e a coordenação do movimento aceito; isso não exige congelar proporções, posições de juntas ou projeções defeituosas. Compare no mesmo instante e vista quando possível; declare mudanças de vista. Alterar a câmera editorial exige entrada do editor, mas a câmera técnica de uma bancada pode ser escolhida para estudar o problema.

**Antes de refinar uma mão rejeitada:** procure referências visuais comparáveis, desenhe primeiro o contorno aberto, fechado e intermediário, e teste sem sombra. As comissuras visíveis dos dedos não coincidem automaticamente com os centros MCP do esqueleto. O polegar deve continuar identificável ao recobrir dedos dobrados. Uma pose 2D desenhada pode ser a solução adequada para uma vista delimitada; não a apresente como rig tridimensional ou como prova de contato físico. Não anime fechamento apenas encurtando os dedos no plano: a dobra precisa de encurtamento por projeção, volumes que se sobrepõem e mudança de visibilidade.

## Objetos e líquidos: explicitar as hipóteses

Declare coordenadas, unidades, gravidade, geometria de colisão e condições iniciais. Diferencie valores medidos de parâmetros escolhidos para uma ilustração. Massa maior não implica queda mais rápida na mesma gravidade sem resistência do ar. Restituição é uma propriedade idealizada do par de superfícies e do modelo, não um valor universal determinado pelo nome do material. Atrito e amortecimento têm papéis diferentes.

Trate o evento de colisão no intervalo em que ocorreu, não depois de o desenho atravessar o chão. Não introduza energia sem força/impulso ou intenção explícita. Use limiar de repouso declarado, evitando vibração infinita. Para forças/contatos complexos, fixe o passo de integração, verifique um passo menor e armazene a simulação para consulta; não integre com o tempo variável da interface.

Para líquido aproximadamente incompressível, a forma muda, mas o volume deve se conservar salvo entrada/saída explícita. Em um corte 2D de espessura constante, conservar área é apenas o equivalente desse modelo. Movimento uniforme do recipiente não é a mesma excitação que aceleração. Em repouso, a superfície tende ao nível compatível com a gravidade; oscilação precisa dissipar quando não há excitação. Transparência não dispensa superfície e oclusão legíveis. Se o modelo não admite derramamento ou quebra, limite o domínio e explique; cortar a água na borda não é simular a perda de massa.

## Autonomia técnica dentro do pedido

Para espaço, leia o [estudo de física espacial](../../../laboratorio/estudo-fisica-espacial/ESTUDO.md). Distingua órbita newtoniana de relatividade, rotação de partículas de braços espirais, disco luminoso de horizonte, horizonte de sombra e imagem aparente de geometria física. Não use rotação rígida para uma galáxia por conveniência, nem represente buraco negro como aspirador indiscriminado. Compressão de tempo e ampliação de corpos para leitura precisam ser declaradas na entrega; valores observacionais devem vir da pesquisa do vídeo.

Pode resolver e registrar sem nova consulta: número de segmentos, método de interpolação, discretização, pivôs, ordem de desenho, tolerâncias, subdivisões, estratégias de contato e simplificações reversíveis que mantenham a ação e a identidade recebidas. Deve corrigir por conta própria estiramento, deslizamento não solicitado, penetração, saltos, energia/volume artificiais e excesso de detalhe.

Precisa de entrada do editor quando a solução muda o significado da ação, o objeto, o sentido causal, o evento, o intervalo editorial, o enquadramento ou uma referência factual necessária. Se a ação não cabe no espaço/tempo autorizado, entregue a incompatibilidade e uma alternativa concreta; não reescreva a cena. Falta de informação mecânica secundária pode ser hipótese declarada; vazão real, velocidade de navio, massa histórica e escala geográfica não são detalhes a inventar.

## Entrega e inspeção

Mantenha funções separadas para avaliar estado e desenhar. Para cada transformação, um controlador. `sample(t, parametros)` recebe tempo físico/local explícito; `draw(ctx, estado, roupa)` não avança o relógio. A bancada pode usar `requestAnimationFrame`, mas a peça não. Integração usa o relógio já existente do editor. Recalcular a partir do estado inicial, uma solução fechada ou uma tabela com passo fixo são opções; o estado não pode depender da ordem de visita.

Tempo físico e tempo editorial não são equivalentes: acelerar o player serve à inspeção. Remapear uma simulação para caber numa fala altera velocidades/acelerações aparentes. Registre o remapeamento; quando a relação física importa, renegocie a duração ou a escala em vez de encobrir isso com easing.

Em conjuntos acoplados, como mão–copo–água, estabeleça um referencial físico e uma única fonte para pose, velocidade e aceleração do recipiente. A água reage ao deslocamento físico do copo, não a uma panorâmica ou escala gráfica da câmera. Defina quem dirige o objeto e quem resolve a mão durante a preensão; não deixe dois controladores disputarem a pose. Quando houver rotação, o modelo precisa incluir sua influência ou limitar explicitamente o domínio. A prova atual do tanque só recebe translação horizontal da sua coreografia, não trajetórias arbitrárias de um copo.

Entregue parâmetros, unidades, hipóteses, domínio válido, controles, contatos, poses críticas, evidência e limites. O [contrato de movimento](../../../contratos/movimento-componente-v1.md) define o anexo técnico sem alterar os envelopes anteriores. Inspecione velocidade normal, câmera lenta, contatos, escala final e transições; depois confira numericamente os invariantes relevantes. Uma captura recortada dentro do canvas não prova área segura: registre extremos da geometria incluindo traços e efeitos.

Repetir a mesma pose e obter os mesmos pixels demonstra determinismo, não beleza. Comprimentos constantes não aprovam anatomia, conservação de área não aprova realismo de água, e um quique correto não prova colisões genéricas. Separe conferência do produtor, avaliação visual de Lucas e QC independente.

## Estudos e aplicação

- Corpo: [estudo de movimento corporal](../../../laboratorio/estudo-movimento-corporal/ESTUDO.md).
- Objetos: [estudo de dinâmica](../../../laboratorio/estudo-dinamica-objetos/ESTUDO.md).
- Líquidos: [estudo de superfície livre](../../../laboratorio/estudo-liquidos/ESTUDO.md).
- Contato com água: [corpos, empuxo e deslocamento](../../../laboratorio/estudo-agua-interacao/ESTUDO.md).
- Mãos: [dedos, polegar e punho](../../../laboratorio/estudo-maos-movimento/ESTUDO.md).
- Espaço: [órbitas, galáxias e buracos negros](../../../laboratorio/estudo-fisica-espacial/ESTUDO.md).
- Resultados e reprodução: [bancada integrada](../../../laboratorio/movimento-fisica/ENTREGA.md).

Sobre execução numérica: a documentação do [Box2D](https://box2d.org/documentation/md_simulation.html) recomenda passos fixos e subdivisões para melhorar resolução de juntas/contatos. A explicação original de [Glenn Fiedler](https://gafferongames.com/post/fix_your_timestep/) separa passo de simulação e apresentação. São referências de método consultadas em 05/10/2026; nenhuma dessas bibliotecas foi adicionada ao laboratório.
