# Avaliação por resultado

Ampliação de movimento/física de 05/10/2026: seis bancadas e matriz de limites em `laboratorio/movimento-fisica/ENTREGA.md`. Mãos são avaliadas separadamente da marcha; flutuação separadamente de oscilação de tanque; órbitas newtonianas separadamente de relatividade. Os novos testes técnicos não atribuem aceite artístico de Lucas. O livro/mão anterior foi rejeitado e não é referência de qualidade.

O repertório é construído com pedidos externos, arquivos editáveis e revisão no contexto. Estes exercícios não entram no prompt fixo do ilustrador. Nenhuma competência ampla é promovida só por um SVG válido.

| Caso | O que mede | Estado nesta rodada |
|---|---|---|
| Cofre e folha da s17, piloto HTML v002 | Materialidade, partes reutilizáveis, espaço de texto e consumo pelo editor | Integração técnica testada; Lucas rejeitou a mudança de formato do cofre. O vídeo não contém saída do Animate. Não demonstra ganho artístico nem animação narrativa nativa |
| Trecho ilustrado a partir da fala, com execução real no Animate | Desenho sob medida, ação que explica a fala, movimento interno e consumo pelo editor | Experimento preservado após crashes; cena completa não entregue. Fora da rota atual por escolha de Lucas |
| s17 JavaScript v003 | Projeção de uma porta rígida, faces e espessura, áreas seguras durante o movimento e regras Alpha | 331 quadros conferidos. Porta revisada aprovada visualmente por Lucas: “A porta do cofre também”. QC independente pendente |
| Estrada e balsa, estudo s50–s51, revisão v002 | Construção do zero, projeção comum, embarque e avalanche; simplificação de linhas | 16,333 s; 490 quadros conferidos. Lucas aprovou visualmente: “Agora está muito bom”. Alternativa laboratorial à direção oficial; QC independente pendente |
| Troca estrutural de roupa | Outro idioma, tokens, resolução, margens e hook temporal nos mesmos contratos | Exercício automatizado do validador, com roupa sintética de outro canal. Não é prova de direção artística em dois canais |
| Bomba mecânica em corte, sem texto inventado | Perspectiva, interior revelado e relações de movimento de pistão/biela | Não executado |
| Mão e antebraço que seguram o pegador do cofre, v001 | Anatomia estilizada, pinça, oclusão, proporção e contato | Componente com controles e bancada de 12 s. Auditoria de 360 quadros e 28 comparações de pixels passaram; crítica auxiliar de três poses realizada. Aceite visual de Lucas pendente. Não demonstra anatomia geral nem nova execução do editor oficial. Entrega de documento pela mão não foi demonstrada |
| Mão e antebraço, revisão v002 | Resposta à rigidez e à relação dedos/palma apontadas por Lucas; articulação mão–antebraço | Forma reconstruída, fechamento graduado e controle de punho. Auditoria de 360 quadros e 28 comparações de pixels passaram; retirada independente e continuidade conferidas. Lucas: “Está bem melhor” — avaliação comparativa positiva da v002. QC oficial pendente; v001 preservada |
| Objeto novo, outra proporção e outro fundo | Transferência de conhecimento sem repetir a composição anterior | Não executado |

Para cada caso, o emissor fornece fala, direção, âncoras, tamanho de destino e referências permitidas. O especialista resolve as decisões de desenho e movimento dentro desses limites. O avaliador confere reconhecimento sem rótulo, coerência geométrica, detalhe útil, legibilidade em escala real, respeito à direção e editabilidade. O teste de movimento confere pivôs, contatos, volume, sobreposição, intermediários e transições. A prova narrativa verifica se antes, ação e consequência explicam a relação da fala. O avaliador registra defeitos e o produtor corrige; não é o avaliador que redesenha.

Comparação de qualidade: mesma entrada e enquadramento, identificar versões A/B sem indicar produtor durante a primeira avaliação, preservar justificativas e custo/tempo. Uma preferência visual numa cena não comprova consistência em todas as outras.

Aprendizados confirmados nesta rodada:

- Preferência visual de Lucas nas duas revisões: proporções coerentes nas poses abertas; menos contornos redundantes; forma preenchida e poucos detalhes que identificam o objeto; ação e consequência visíveis. Registro vinculado às versões em `laboratorio/aceites-visuais.json`. Isso orienta próximas ilustrações sem fixar a mesma composição nem aprovar versões futuras automaticamente.

- Sob a composição desta s17, grupos SVG imóveis nas notas e o carimbo assentado apresentaram pequenas diferenças de raster após seeks. Uma deriva determinística subpixel nos próprios elementos eliminou as divergências nas 32 comparações executadas. Evidência: `laboratorio/relatorios/determinismo-html.json`. Isso é um resultado nesta combinação de Chrome/cena, não uma lei universal sobre SVG.
- Animate `WIN 24,0,15,5`: a importação ignorou instâncias `<use href>`. A mesma geometria, usando `xlink:href` e namespace SVG 1.1, trouxe notas e parafusos. Evidência: duas exportações nativas em `out/laboratorio/animate/ponte/`. A cor ainda diverge; o sucesso de importação estrutural não é aprovação visual completa.
