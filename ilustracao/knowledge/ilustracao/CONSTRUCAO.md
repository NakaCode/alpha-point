# Construção para movimento

Guia de trabalho do ilustrador, independente de canal. Estas são técnicas para resolver pedidos, não uma lista de objetos que toda cena deve conter.

## Silhueta, volume e perspectiva

Bloqueie em caixas, cilindros e planos; escolha vista frontal, oblíqua ou perspectiva conforme a direção recebida. Em vista oblíqua, mantenha o vetor de profundidade nas superfícies correspondentes. Em perspectiva, teste arestas paralelas contra os mesmos pontos de fuga. Um recuo precisa de lateral visível, borda frontal e plano de fundo compatíveis. Sombras internas são planos de oclusão, não degradês acrescentados ao fundo da cena.

Teste a peça pequena e em uma única cor. Se só o rótulo revela o objeto, faltam características estruturais. Se o olho lê duas peças como uma, ajuste espaço negativo ou sobreposição antes de acrescentar contornos.

## Detalhe que identifica

Máquinas: estrutura resistente, encaixes, eixos, juntas e peças que executam a ação. Parafusos seguem a montagem e têm escala consistente. Não desenhe dez controles sem função para “parecer técnico”.

Papel: espessura pequena, margem, cantos, dobra ou corte coerentes. O desgaste se concentra onde contato e pressão fariam sentido. Uma folha explicativa deve continuar claramente construída; não crie brasões, assinaturas, datas ou números não solicitados.

Dinheiro simbólico: moldura, impressão repetida, medalhão abstrato, pilha com deslocamentos contidos. Sem denominação ou insígnia inventada que pareça um fato. Se a cena precisa de moeda real identificável, a pesquisa e a direção devem fornecer a referência e a permissão adequadas.

Personagem: proporção, linha de ação e massas antes de rosto/detalhes. Articulações precisam de sobreposição para não abrir buracos. Contatos de mão e pé são posições verificáveis; não deslizam quando deveriam apoiar. Roupas e volume secundário seguem o movimento principal.

Ambiente: separe profundidades quando houver parallax; complete áreas reveladas pela câmera; mantenha horizonte, escala e luz coerentes. Não acrescente mapas quando o pedido pede objetos.

## Articulação e movimento possível

- Porta: pivô na dobradiça, espessura e interior revelado; se a vista exigir projeção, uma rotação 2D não equivale à porta abrindo em 3D.
- Gaveta/pistão: eixo de deslizamento, limites de curso e oclusão pelo corpo.
- Engrenagens: contato e razão de velocidades compatíveis com os raios; a arte precisa permitir que os dentes não atravessem o eixo vizinho.
- Biela/manivela: comprimentos constantes e contato preservado; calcule a posição a partir de um motor comum.
- Cabo/corrente: extremidades fixas, folga e curvatura coerentes; defina se exige deformação ou segmentos.
- Flexíveis: a silhueta pode mudar, respeitando espessura, elasticidade e limites declarados. Líquidos aproximadamente incompressíveis mudam de forma, preservando volume salvo entrada/saída explícita. Escolha o modelo pela ação; uma deformação estética não demonstra dinâmica de fluidos.

Pivô é dado de construção. Timing é dado editorial. Uma demonstração usa o intervalo normalizado fornecido para comprovar a articulação, sem substituir a regência da cena.

Para peças rígidas com giro em profundidade, fixe dimensões e eixos no espaço do objeto e projete seus vértices pela mesma câmera usada nas superfícies vizinhas. Não escolha achatamento e inclinação independentes a cada pose: esse atalho pode fazer a peça parecer encolher. A pose aberta precisa da face interna, das bordas de espessura e da ordem de oclusão corretas. A projeção muda o tamanho na tela, mas não o comprimento da peça no modelo. Confira a inversão de face pela orientação da superfície, não por um ângulo universal de 90°.

Em anatomia estilizada, fixe a relação entre massas e comprimentos dos segmentos antes do contorno: crânio/caixa torácica/pelve, braço/antebraço/mão, coxa/perna/pé. O estilo pode exagerar proporções deliberadamente, mas não alterá-las acidentalmente durante uma rotação. Confira linha de ação, equilíbrio, contato e foreshortening; teste a silhueta das poses extremas e intermediárias. Uma prova com objetos mecânicos não comprova anatomia.

Para uma mão articulada, construa palma, punho, cadeias de falanges e polegar oposto no espaço local. Varie comprimentos e larguras entre os dedos; a superfície deve envolver as juntas com volume contínuo, sem usar círculos aparentes para esconder emendas. Calcule as poses por ângulos e comprimentos constantes, depois projete pela câmera recebida. Unhas e detalhes acompanham a orientação da superfície e desaparecem quando ocultos.

Na preensão, defina uma âncora na pose fechada e mantenha-a no alvo durante o contato. Separe aproximação, fechamento, ação e soltura em controles que o editor possa temporizar. Verifique o espaço entre a superfície dos dedos e o objeto, não só os centros das articulações. Oclusão depende da vista: desenhar o pegador novamente sobre a mão pode parecer um anel colado. Compare poses de contato e soltura para decidir as camadas. Testes de comprimentos e âncora ajudam a detectar deriva; não provam anatomia, pressão de contato ou ausência de toda interpenetração.

Uma mão não precisa fechar todos os dedos e falanges na mesma proporção. Use progressões distintas, com raízes, nós e membranas contínuos; uma palma sobreposta como tampa pode parecer uma luva com tubos encaixados. Só arredonde a extremidade exposta de um dedo: tampas nas juntas internas criam degraus falsos. Nas poses fechadas, oculte as partes recolhidas pelo volume da palma e procure pontas duplicadas ou fendas na silhueta.

Trate o punho como articulação local em relação ao antebraço. Se o punho muda, transforme também a âncora da preensão antes de fixá-la no alvo. O editor pode combinar a desaceleração do alcance com o começo do fechamento, mantendo a estabilidade do contato quando completo. Depois da soltura, a trajetória deve partir da posição de liberação no mundo; continuar recalculando a mão pelo alvo em movimento faz o braço segui-lo involuntariamente. Essas são verificações de construção e de continuidade; fluidez ainda exige observar a animação no ritmo final.

Áreas seguras são restrições do enquadramento final, não do desenho local. Transforme também seus limites com a câmera e inclua traços, partes que giram e superfícies reveladas. Confira toda a duração, além de contatos e pose de maior extensão. Créditos usam a faixa e o papel fornecidos pela roupa; não acompanham a câmera sem instrução explícita do consumidor.

## Transferência entre ferramentas

Para atuação corporal, impactos e superfície livre, use [movimento e física](../../habilidades/ilustracao-narrativa/references/movimento-fisica.md). O contato do pé muda entre calcanhar, sola e ponta; não prenda todas as regiões ao chão simultaneamente. Em simulação, separe unidades físicas da projeção em pixels, e tempo físico do relógio editorial. Os estudos documentam quais fenômenos foram apenas estudados e quais receberam prova executável.

O SVG contém geometria e grupos; um editor HTML pode inseri-lo inline e mover grupos por tempo explícito. Num editor nativo, verifique importação real: nomes, curvas, recortes, transparência e substituição de fontes. Guarde o vetor original e compare imagens antes/depois. Não suponha preservação pelo fato de a ferramenta aceitar a extensão.

Se o destino só aceita raster, entregue camadas transparentes com tamanho, âncora e sobreposição declarados. Se entrega uma sequência, duração = quantidade de quadros / fps, início local explícito e numeração contínua. Não esconda um quadro faltante repetindo o anterior.

## Revisão visual

1. Reconhece-se o objeto sem rótulo?
2. A hierarquia permanece em tamanho real e numa prévia menor?
3. As peças parecem pertencer ao mesmo objeto, material e ponto de vista?
4. A ação exigida é possível sem redesenho improvisado?
5. A sobreposição preserva contatos e revela interiores completos?
6. O detalhe ajuda a explicar, sem disputar com texto, voz e protagonista?

Registre uma imagem e um motivo para cada falha relevante. Compare alternativas só quando há uma decisão real de desenho; não faça variantes cosméticas como substituto de revisão.
