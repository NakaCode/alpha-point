# Cena ilustrada — contrato experimental

A capacidade principal é uma ferramenta técnica do próprio editor de arte para produzir animações melhores: métodos de desenho, articulações, controles de componente e verificações. O editor permanece autor e responsável pela cena e sua animação. O especialista opcional constrói peças e conjuntos mais fiéis e legíveis que o editor usa sem redesenhar. **“Cena ilustrada” é o nome histórico do envelope de demonstração e entrega contextual do conjunto.** Mantêm-se nomes de arquivos, campos e schemas v1; o envelope não cria outro editor nem transfere a cena final ao ilustrador. Este contrato não incorpora uma identidade de canal.

O editor conserva metáfora, encenação, composição, câmera, textos, créditos, cronograma editorial, sincronismo, integração e render. A autoridade já dada ao editor para inventar uma metáfora a partir de uma semente continua com ele; direção fornecida continua vinculante. A habilidade pode ser usada pelo próprio editor. O encaminhamento de peças complexas ao especialista pelo central é opcional e não cria uma etapa obrigatória ou uma linha paralela de produção.

## Entrada externa

- Peça ou conjunto solicitado, sua função na cena e ação a realizar.
- Trecho de roteiro aprovado, áudio disponível e âncoras reais, como contexto fornecido pelo editor no envelope narrativo v1.
- Relação visual, encenação/metáfora definidas pelo responsável editorial e regime de mídia.
- Referências de arte, incluindo qual versão preservar; identidade e fontes permitidas.
- Duração e fps da demonstração, vista, área de destino, escala de uso, camadas e espaços reservados.
- Textos permitidos, elementos existentes com os quais interagir e limites de alteração.
- Contatos e relações entre partes, estados exigidos, controles esperados e proprietário de cada transformação.
- Executor solicitado e entrega esperada: peça ou conjunto articulado, com demonstração contextual quando fornecida.

Não exigir do emissor instruções de cada traço ou keyframe. O especialista resolve desenho, poses, trajetórias locais, articulações, contatos e curvas do movimento interno pedido. Não escolhe metáfora, composição final ou cronograma editorial. Se uma escolha mudar a afirmação ou a encenação recebida, devolva-a ao editor. Uma escolha rotineira de construção não exige nova aprovação.

Uma prova técnica sem fala ou âncoras usa pedido laboratorial separado, com essas dimensões explicitamente não aplicáveis. Não invente fala, dado ou crédito nem preencha campos apenas para alegar conformidade narrativa v1. Isso não altera os schemas existentes.

## Construção e entrega

1. Um plano curto associa **peça/função recebida → estados necessários → articulações e contatos → controles de pose**. Registre a origem de cada exigência; fala e âncoras contextualizam o pedido, sem conferir autoridade para reencenar o trecho.
2. Poses de referência verificam a leitura antes do detalhamento. Preserve a arte preferida quando ela for uma entrada; não a redesenhe silenciosamente para facilitar importação ou encaixe.
3. Desenhos e componentes editáveis sustentam a ação pedida. O movimento interno realiza o mecanismo; o editor aciona os controles e mantém câmera, entradas, saídas e transições da cena.
4. Entregue a animação efetivamente executada no meio declarado, as fontes editáveis, a prévia e as evidências. Na rota JavaScript: vetores por parte móvel e uma função de pose que receba o tempo explícito do editor, sem relógio autônomo; avance, retorne e capture o mesmo instante numa página nova para conferir determinismo. Na rota Animate, apenas quando solicitada: FLA real, sequência com alpha e manifesto conforme `animacao-complementar.md`.
5. A prévia contextual usa a fala original, a composição e os eventos recebidos do editor. Seu HTML é um invólucro de demonstração/consumo, não uma nova decisão editorial. O editor mantém integração HTML/RIG, textos, créditos, sincronismo e renderização já estabelecidos.

O relatório identifica separadamente autoria do desenho, construção da animação, programa que gerou os quadros e método de composição final. Um vídeo HTML não pode ser apresentado como resultado do Animate se não contém sua saída. Testes técnicos de bola, importação ou reabertura não contam como prova narrativa.

## Aceite

- O desenho representa a peça/ação na identidade recebida, mantendo proporções e legibilidade.
- A ação interna realiza o mecanismo pedido; os controles permitem ao editor usá-lo sem redesenhar.
- Na prévia contextual, os estados ocorrem nas âncoras recebidas e cumprem a função definida pelo editor, sem alterar metáfora ou ordem editorial.
- Partes, contatos, pivôs, volume e oclusões funcionam nos intermediários.
- A exportação vista na prévia corresponde ao arquivo nativo declarado. A integração só é declarada quando há evidência de consumo pelo editor.
- Há avaliação contextual do resultado e QC independente antes de produção. Execução técnica sem erro não certifica ganho artístico.

## Perfil executável HTML/SVG/JavaScript v1

Schemas aditivos: `pedido-cena-ilustrada.schema.json`, `roupa-ilustrador.schema.json` e `entrega-cena-ilustrada.schema.json`. Campos fora do perfil são rejeitados. O SVG estático continua com contrato próprio; geometria procedimental por pose não deve ser apresentada como SVG estático conforme àquele perfil.

- O pedido referencia roupa, direção, regência e demais entradas por caminho relativo à raiz do consumidor e SHA-256. Define palco do consumidor, área de destino do conjunto, duração em quadros/fps, eventos recebidos, textos autorizados e limites editoriais. Os campos `fala`, `direcao`, `relacao_visual`, `eventos` e `textos` são contexto externo; não transferem decisões editoriais ao especialista. A delimitação da peça/conjunto e de seus contatos consta das entradas, direção e limites já suportados pelo v1.
- A roupa aponta para documentos e CSS, com hashes; mapeia papéis de cor e tipografia, áreas de conteúdo/crédito/reserva e limites de carga. A prosa de identidade é a autoridade; o JSON não substitui sua leitura. Divergência entre eles volta ao emissor para correção.
- A entrega declara pedido/roupa usados, cena de entrada, fontes editáveis, prévia e evidências com hash; partes móveis; verificação por domínio; pendências. Nenhum caminho depende de uma máquina específica. Todos são relativos à raiz passada ao validador, inclusive quando o manifesto fica numa subpasta.
- O HTML do consumidor expõe o hook indicado no pedido (no adaptador Alpha: `__renderAt(t)`). `t` é tempo local em segundos. A cada chamada, reconstrua todo o estado, inclusive invisibilidade antes da entrada; a mesma chamada em qualquer ordem deve produzir a mesma imagem. Imagens/fontes têm prontidão explícita. Nenhum relógio, áudio ou câmera autônomos dentro do componente.
- O consumidor aplica o posicionamento global e aciona os controles de pose; o ilustrador constrói as articulações internas. Declare o proprietário de cada transformação. O editor mantém metáfora, composição, câmera, eventos, textos e créditos. A prévia contextual só reproduz essas decisões fornecidas para conferência.
- Se a cena sair da área de destino ou faltar roupa, mídia, âncora ou texto autorizado, a entrega informa a pendência concreta. Regras ausentes não são completadas com a identidade de outro canal.

Validação: `python ferramentas/ilustracao/validar-cena.py pedido <pedido.json> --raiz <raiz>` e o equivalente com `roupa` ou `entrega`. O validador cobre tipos, campos, arquivos, hashes, coerência de tempo e vínculos. **Não executa HTML, não mede pixels nem decide qualidade visual.** Determinismo, áreas seguras ao longo dos quadros, sincronismo e revisão visual têm evidências separadas. `aprovado` exige registro de QC independente e ausência de pendências; um teste estrutural nunca promove o estado sozinho.
