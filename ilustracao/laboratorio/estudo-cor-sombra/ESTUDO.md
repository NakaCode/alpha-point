# Cor e sombra para ilustrações do Alpha Point

Estudo aplicado à maleta e à mão, consultado em 29/09/2026. **Estado: pesquisa e proposta de comparação.** Os três tratamentos abaixo não foram implementados por este estudo. O cálculo local foi executado; cenas, roupa, assets anteriores, pacote de integração e motor permaneceram intactos. O objetivo é tornar forma, ação e relações mais claras, preservando a linguagem do canal.

## 1. A identidade continua sendo a referência

Foram lidos somente `marca/identidade.md`, `marca/tokens.css` e `marca/agentes/editor-de-arte.md` como fontes locais. A identidade §2 vincula cor a significado durante o vídeo: protagonista, contraparte, demais atores e risco têm papéis distintos. Ela limita a cena a três matizes, fora a base de satélite. Portanto, uma sombra não pode transformar casualmente uma peça em outro ator, e um reflexo não pode distribuir o destaque por objetos secundários.

A roupa do editor §2 determina PRANCHA em `--fundo`, sem degradê, véu ou vinheta. A sombra da folha de documento é um tratamento daquele objeto; não autoriza escurecer toda a prancha. O §3 também rejeita sombra/contorno de texto. `tokens.css` confirma `--degrade: none` e derivados de opacidade com usos específicos. Não há ali uma biblioteca de sombras para pele, metal ou plástico. Este caderno propõe ensaios locais, não cria uma nova regra oficial de material.

## 2. Separar matiz, croma, claridade e luminância

Matiz identifica a família cromática; croma expressa distância do neutro; claridade descreve uma dimensão perceptiva de claro/escuro. Em OKLCH essas dimensões têm eixos distintos. O L de HSL não equivale à luminância nem garante a mesma claridade percebida entre matizes. “Valor”, no desenho, será usado aqui como organização prática das massas claras e escuras, não como uma unidade física. [W3C, CSS Color 4, terminologia e OKLCH](https://www.w3.org/TR/css-color-4/#color-terminology).

Para o editor, isso produz três perguntas separadas: a peça comunica o papel certo; sua silhueta se destaca; seus planos ainda pertencem ao mesmo objeto? Mudar somente a matiz pode responder à primeira e falhar nas outras. Na maleta, diferenciar a alça do fundo e os dedos da alça é mais útil que acrescentar novas cores aos fechos.

## 3. O que os tokens mostram numericamente

O teste `medir-cor.cjs` lê os tokens opacos existentes e calcula luminância relativa sRGB e razão de contraste. Ele usa a conversão por trechos especificada pelo W3C, seguida por `Y = 0,2126 R + 0,7152 G + 0,0722 B` com componentes lineares. A razão compara `(Y claro + 0,05)/(Y escuro + 0,05)`. [W3C, definição de luminância e contraste](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html#dfn-relative-luminance).

| Par de tokens opacos | Razão calculada |
|---|---:|
| `--tinta` / `--fundo` | 15,92:1 |
| `--tinta-escura` / `--papel` | 14,55:1 |
| `--painel` / `--fundo` | 1,14:1 |
| `--papel` / `--tinta` | 1,08:1 |
| `--neutro` / `--papel` | 3,40:1 |
| `--destaque` / `--contraparte` | 1,06:1 |

Esses resultados são nossos cálculos, não avaliação visual. Eles sugerem cautela ao usar painel contra fundo para uma alça indispensável, ou papel contra tinta para uma mudança importante de plano. Protagonista e contraparte podem ter matizes distintas e valores próximos: a cena também precisa de posição, forma e rótulos coerentes.

Não se impõe 3:1 a cada face de uma ilustração. WCAG distingue texto, controles e partes gráficas necessárias à compreensão; detalhes decorativos não recebem automaticamente a mesma exigência. Na interface do caderno, os controles têm contexto próprio. Na arte, os portões do canal e a leitura final continuam necessários. [W3C, contraste de elementos não textuais](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

## 4. Misturar luz não é tirar a média do código RGB

sRGB armazena componentes com uma curva de transferência; eles não são proporcionais à luz. Para uma conta de iluminação, primeiro se linearizam os canais; depois se calcula; por último se recodifica. Uma mistura perceptiva para design pode ter outro objetivo e outro espaço. [W3C, sRGB e sRGB linear](https://www.w3.org/TR/css-color-4/#predefined-sRGB).

O teste compara extremos acromáticos em proporções iguais. A média codificada é 0,5, cuja luminância é aproximadamente 0,214. A média de luz linear, recodificada, é aproximadamente 0,735 e tem luminância 0,5. Não são duas implementações equivalentes. O teste também confere 1.001 conversões de ida e volta; não mede a saída do navegador.

`color-mix()` declara o espaço e as proporções da interpolação; alpha participa do cálculo. Isso oferece uma ferramenta de desenho, não uma aprovação editorial de qualquer mistura. Os derivados atuais usam `in srgb` para funções já documentadas e devem ser preservados. Uma futura família de tons de material precisaria declarar espaço, proporções, finalidade e verificação de suporte no renderizador. [W3C, CSS Color 5, color-mix](https://www.w3.org/TR/css-color-5/#color-mix). Este ensaio numérico não introduz novas cores nas cenas.

## 5. Papel semântico e material são camadas diferentes

A proposta de trabalho é registrar primeiro o papel recebido pelo componente, depois sua construção material. “Maleta do protagonista” não significa “todos os fechos em destaque”. “Metal” também não significa “contraparte”. O acento deve continuar guiando a informação que o editor escolheu, não simular brilho.

Para a comparação, manter uma tabela pequena: corpo, alça, fechos, mão e manga; cada entrada recebe um papel do pedido e os tokens permitidos. Não fixar uma cor de pele universal no conhecimento do ilustrador. A mão pode ser uma forma simbólica segundo a roupa recebida. Se a cena contém atores codificados por cor, conferir a tabela inteira para que a manga neutra ou uma peça escura não adquira um significado indevido. A leitura em conjunto precede o acabamento de cada objeto.

## 6. Uma direção de luz, poucas decisões

A irradiância depende da orientação da superfície em relação à luz. O fator cosseno usa a normal e a direção incidente; a descrição completa integra contribuições de direções diferentes. [PBRT, Working with Radiometric Integrals](https://www.pbr-book.org/3ed-2018/Color_and_Radiometry/Working_with_Radiometric_Integrals). Para o ensaio, podemos usar `max(0, dot(normal, luz))`, com ambos os vetores normalizados, como **classificador simplificado de planos**, sem multiplicar arbitrariamente os valores sRGB dos tokens.

Proponho luz única, constante no espaço da cena, e no máximo três classes visuais por material: voltado à luz, intermediário e afastado. Os limiares seriam escolhas do desenho, não leis físicas. Triângulos que representam a mesma superfície devem compartilhar a decisão; iluminar cada fragmento gerado pelo BSP produziria mosaico. Em giro, transformar a normal junto com a peça. A luz não deve acompanhar cada peça separadamente, fazendo todos os lados parecerem iluminados ao mesmo tempo.

## 7. Simplificação editorial e material físico

Radiometria modela transporte de energia; sua base inclui linearidade e conservação. Um esquema de duas ou três cores não resolve esse transporte, reflexões indiretas ou propriedades ópticas completas. [PBRT, Radiometry](https://pbr-book.org/4ed/Radiometry,_Spectra,_and_Color/Radiometry). O Principled BSDF, por exemplo, distingue cor de base, rugosidade e comportamento metálico, combinando respostas materiais. [Blender, Principled BSDF](https://docs.blender.org/manual/en/dev/render/shader_nodes/shader/principled.html).

Para o Alpha, a aplicação proposta é modesta: corpo predominantemente fosco, alça claramente separada, fechos com uma face clara pequena quando isso explicar sua forma. Não precisamos instalar Blender ou adotar um renderizador físico para aprender essa distinção. Um brilho animado só entraria se ajudasse a ação; um reflexo que percorre a maleta sem causa pareceria apresentação de produto e disputaria atenção com a preensão.

## 8. Volume, oclusão, contato e reflexo

Planos de volume explicam orientação. Uma sombra projetada precisa de objeto que bloqueia a luz e superfície que a recebe. A sombra de contato deve ajudar a localizar uma proximidade concreta, como dedo/alça ou pé da maleta/apoio. Oclusão ambiente é uma aproximação de bloqueio por superfícies próximas; não é iluminação indireta fisicamente completa. [Blender, Ambient Occlusion](https://docs.blender.org/manual/en/2.90/render/cycles/world_settings.html).

Na proposta, a lateral da maleta recebe um plano único; a cavidade da alça permanece legível; somente contatos decisivos recebem marcas curtas. Não adicionar sombra em toda aresta, em toda falange ou em cada triângulo. Isso converteria volume em sujeira e faria peças lisas parecerem rachadas. Se a marca escura continuar visível depois que a mão se afasta, ela está colada ao objeto errado. Luz refletida e reflexos especulares ficam fora do primeiro ensaio: seriam mais controles, mais superfícies e novas decisões de roupa sem necessidade demonstrada.

## 9. Alpha não substitui volume

Na composição source-over, a contribuição depende do alpha e do conteúdo atrás; uma cor parcialmente transparente muda de aparência com o fundo. Opacidade de um grupo e alpha em cada face também podem produzir sobreposições diferentes. [W3C, Compositing and Blending](https://www.w3.org/TR/compositing-1/#simplealphacompositing).

A proposta é manter os volumes opacos. Fazer a lateral “escura” reduzindo sua opacidade pode revelar a face traseira e falsificar o material. Para uma sombra transparente, usar uma única região recortada na superfície receptora, sem sobrepor muitos triângulos translúcidos. Ordenar as camadas pelo espaço real; separar deliberadamente receptora, sombra e objeto. Um pequeno deslocamento geométrico evita superfícies coincidentes, mas não corrige uma ordem errada. Se a sombra exigir um alpha ainda sem papel na roupa, registrar a necessidade; não reaproveitar o alpha de uma legenda por conveniência.

## 10. Rasterização não é textura

O responsável pela integração comparou duas correções. Agrupar faces opacas consecutivas da mesma cor em um único path, sem traço, reduziu as costuras entre triângulos BSP, mas não as eliminou. A combinação desse agrupamento com traço da própria cor de 4 px no palco 4K removeu a rede triangular na inspeção do detalhe aos 9,7 s, exibido na interface em escala aproximada de 0,31. Nessa inspeção, silhuetas e vãos permaneceram legíveis. O raio adicional de 2 px foi incluído nos limites de enquadramento.

O agrupamento não cruza objetos que ocultam outros: preserva a sequência de pintura e reúne apenas faces consecutivas compatíveis. Transparências continuam em faces isoladas. A compensação de cobertura/antialias não é hachura, sombra ou autorização para contornar a pele. Os 4 px não são regra universal nem prova de ausência de costuras em toda escala.

O render foi concluído. O relatório local `laboratorio/referencia-maleta/render-resultados.json` registra duas saídas, 3840×2160 e 1920×1080, ambas confirmadas por ffprobe com 20 segundos, 30 fps e 600 quadros. A QA passou 36 comparações de pixels em nove instantes, incluindo nove verificações com página nova, sem erros de navegador registrados. Essa conferência testa determinismo nos instantes amostrados; não demonstra qualidade visual em toda a sequência, anatomia correta ou aprovação artística.

Na comparação, observar dedos, cantos da maleta e vãos da alça. Se a compensação engrossar a mão ou fechar espaços, perdeu-se geometria visível. Testar quadro inteiro, redução e recorte ampliado; depois voltar ao tamanho de consumo. Este estudo registra o resultado informado pelo integrador, sem substituir a inspeção da sequência final. A correção técnica não implementa os três tratamentos de cor e sombra propostos adiante.

## 11. Três tratamentos propostos para a mesma maleta

| Tratamento | Mudança proposta | Pergunta de avaliação |
|---|---|---|
| **Plano** | Uma massa por peça, somente tokens atuais e oclusão correta; sem sombra adicional. | Reconhecemos mão, alça, fechos e corpo imediatamente? |
| **Planos de volume** | Preservar o anterior e distinguir superfícies grandes orientadas à mesma luz; nenhuma tonalidade por triângulo. | A espessura fica mais clara sem parecer outro material ou ator? |
| **Contato discreto** | Preservar os planos e acrescentar somente pequenas regiões junto aos contatos decisivos. | A preensão parece firme sem criar linhas sujas ou dedos fundidos? |

Os três precisam da mesma geometria, câmera, escala, pose e cronograma. Acentos, títulos, fundo e textos permanecem iguais. A tabela descreve candidatos, não resultados já obtidos. Para viabilizar o segundo com a roupa atual, podemos comparar planos usando cores existentes explicitamente atribuídas no pedido; se a distância entre essas cores for grosseira ou insuficiente, a conclusão correta pode ser que faltam tons de material documentados.

## 12. Comparar, decidir e portar

Proponho observar aproximação, fechamento, elevação, transporte e soltura. Comparar a saída final, uma redução a 960×540 e uma prévia em cinza. Esta última deve usar luminância calculada, recodificada para exibição, como diagnóstico; não é simulação de daltonismo nem validação de acessibilidade. Perguntar em cada quadro: o que prende o quê, onde está a frente, qual detalhe recebe atenção primeiro? A sombra só vence se melhorar essas respostas sem acrescentar ambiguidade.

Já cabe nos tokens atuais: reorganizar sua distribuição conforme papéis recebidos, simplificar massas, melhorar silhuetas, corrigir oclusão e usar planos opacos explicitamente definidos. Requer especificação adicional de roupa: novos tons, misturas parametrizadas, famílias claro/médio/escuro, sombras com alpha próprio e reflexos recorrentes. Fundo com vinheta ou degradê continua fora deste ensaio.

Uma implementação local em SVG/JavaScript pode escolher faces, recortar contatos e aplicar tokens sem API paga ou dependência nova obrigatória. Ela ainda consome tempo de desenho, revisão e renderização; o custo real deve ser medido. O editor mantém a autoria da cena e solicita o tratamento que ajuda a fala. O ilustrador entrega controles e limites; o caderno conserva versões comparáveis. A regra operacional é olhar a cena inteira antes de aprovar o acabamento da peça.

Reprodução do cálculo: `node laboratorio/estudo-cor-sombra/medir-cor.cjs`. Métodos, hashes e limites estão em `medidas.json`; procedência e escopo das fontes estão em `fontes.json`.


## Nota da distribuição v1.4.0

Esta cópia preserva o método do laboratório. Para reprodução portátil, a paleta da bancada foi extraída para CSS local; os documentos e fontes oficiais do canal não são distribuídos. As evidências históricas da bancada original ficam em `evidencias-origem/` na raiz do pacote. Os hashes atuais e as verificações de distribuição ficam em `MANIFESTO.json` e `VERIFICACAO.json`. Não executar o script de preservação do laboratório em outra máquina.
