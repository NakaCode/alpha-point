# Escolha e entrega do executor

Estas são decisões de produção, não uma hierarquia universal de qualidade.

| Situação | Rota a considerar | Custo ou limite a verificar |
|---|---|---|
| Vetores 2D, documentos e gráficos num pipeline HTML existente | JavaScript + SVG/Canvas | Geometria de poses complexas, renderização determinística e custo por quadro |
| Atuação 2D com poses, deformações e edição manual na timeline | Animate | Autoria nativa, importação fiel, manutenção do projeto e exportação |
| Volume real, câmera com mudanças de ângulo, relevo ou mecanismo espacial | Blender | Modelagem, materiais, iluminação, render e integração da sequência |

Não trocar o executor de um teste solicitado sem manter a versão pedida. Para comparar ferramentas, mantenha primeiro a mesma arte e os mesmos eventos. Uma segunda comparação pode explorar recursos particulares de cada ferramenta, identificando a mudança de direção.

## JavaScript

Use o relógio explícito e as convenções do renderizador do projeto. `__renderAt(t)` deve reconstruir o estado completo em qualquer ordem, sem depender de reprodução anterior. Confira capturas após avanços, retornos e nova página. Fontes e imagens precisam estar prontas antes da captura.

Uma peça muito articulada pode precisar de geometria própria por pose; mover um ícone como bloco não resolve atuação. Preserve grupos semânticos e separe a função temporal do conteúdo da cena.

## Animate

Leia o ofício e as referências técnicas existentes no ambiente. Crie símbolos/camadas utilizáveis e confirme pivôs, paleta e importação antes de uma montagem longa. Prefira keyframes necessários, holds e tweens adequados; gravar todos os quadros de todas as partes, inclusive imóveis, pode tornar a automação desnecessariamente lenta. Não atribua esse custo à ferramenta sem comparar estratégias.

Uma execução por instância; jobs pendentes são consultados antes de qualquer repetição. Preserve documentos alheios. Salve e reabra o nativo, exporte e inspecione movimento real. Para consumo por HTML, entregue sequência com alpha e manifesto temporal quando esse for o contrato.

## Blender

Use geometria espacial quando ela simplificar a construção do componente solicitado. Defina pivôs, materiais e unidades de movimento conforme a identidade recebida; configure a câmera técnica e a exportação conforme a vista e o enquadramento definidos pelo editor. O apoio delegado não escolhe a câmera da cena final. A capacidade de executar Python e render sem interface facilita automação, mas não demonstra qualidade de modelagem.

Entregue `.blend` e saída realmente renderizada, conferindo transparência, cor, câmera, duração e contatos. Ausência de Blender ou de teste real deve aparecer como não medido; não declare essa rota validada por analogia com JavaScript ou Animate.

## Integração

O próprio editor aplica a habilidade ao construir seus componentes e animações. Quando delega uma peça, recebe fontes editáveis, partes e controles de pose; continua responsável pela metáfora, encenação, composição, câmera, textos, créditos, sincronismo e render da cena final. Evite dois relógios ou duas animações controlando a mesma peça. A roupa de marca e o pedido particular ficam fora desta habilidade técnica.
