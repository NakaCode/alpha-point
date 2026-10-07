# Ilustração técnica v1 — contrato aditivo

Pedido e entrega de uma ilustração ou componente, sem exigir fala, áudio ou âncoras narrativas. Uso principal: fornecer ao responsável pela composição o elemento que ele precisa para montar sua cena, infográfico ou apresentação. A generalidade está no assunto, projeto e identidade recebidos. `ilustracao_independente` é um modo explicitamente pedido, não uma ampliação automática da autoridade do ilustrador.

Este perfil não altera os schemas nem os validadores narrativos/SVG anteriores. O nome e o tipo `ilustracao-tecnica` identificam o envelope novo. `validar-tecnica.py` reutiliza o motor restrito de schema, resolução de arquivos, hashes e roupa do `validar-cena.py`, sem executar HTML/JavaScript nem instalar dependências.

## Pedido

Campos obrigatórios: `versao_contrato: 1`, `tipo_contrato: "ilustracao-tecnica"`, `projeto`, `id`, `revisao`, `modo`, `objetivo`, `brief`, `roupa`, `entradas`, `palco`, `area_destino`, `autoridade`, `consumidor`, `limites`, `saidas_esperadas` e `controles`. `brief`, `roupa` e cada entrada são `{arquivo, sha256}`. `entradas` pode ser vazia; o brief obrigatório registra o pedido concreto. Nenhuma fala deve ser inventada para validar o envelope.

- `modo`: `componente` ou `ilustracao_independente`.
- `autoridade`: `{composicao: "consumidor" | "ilustrador", funcao_recebida: string}`. Componente exige `composicao: "consumidor"`. O texto declara a função recebida; o validador não interpreta sua legitimidade. A entrega repete exatamente modo e autoridade do pedido versionado.
- `consumidor`: `{responsavel, interface, hook?}`. `svg-estatico` dispensa hook, tempo e controles. `poses-js` exige hook e controles, mas dispensa cronograma. `animacao-html` exige hook e tempo. Um hook é o nome declarado da API: sua existência/execução será conferida pelo consumidor, fora deste validador.
- `palco`: `[largura, altura]`; `area_destino`: `[x,y,largura,altura]`, nas unidades da roupa. O destino precisa caber no conteúdo e evitar as reservas. Isso valida a área solicitada, não os pixels finais da arte.
- `saidas_esperadas`: lista sem duplicatas de `asset`, `fonte`, `api`, `previa`, `evidencia`; `asset` é obrigatório. O consumidor escolhe os formatos concretos no brief. Arquivos de composição, áudio ou publicação não são implicitamente solicitados.
- `tempo`, quando aplicável: `{fps, quadros, duracao}`. A duração deve equivaler a quadros/fps. Não existe tempo obrigatório para uma ilustração estática ou função de pose sem cronograma.

Os caminhos de todos os perfis deste contrato são relativos à raiz explícita, usam `/`, permanecem dentro dela após resolução e não dependem de máquina específica. Hashes congelam revisões; uma mudança no pedido ou na roupa exige referência atualizada deliberadamente, não correção silenciosa.

## Controles e poses

`controles` contém objetos com `id` e `tipo`, mais exatamente o domínio correspondente:

| Tipo | Campos de domínio |
|---|---|
| `numero` | `minimo`, `maximo`, `inicial_numero` |
| `inteiro` | `minimo`, `maximo`, `inicial_numero`, todos inteiros |
| `enum` | `opcoes` (strings únicas), `inicial_opcao` |

Intervalos são finitos e crescentes. O valor inicial deve pertencer ao domínio. Um seletor binário pode usar `enum` com duas opções explícitas; booleanos JSON não fazem parte deste perfil restrito. O pedido estático usa `controles: []`.

Cada item de `poses_exemplo` da entrega contém `id` e `valores`; cada valor é `{controle, numero}` ou `{controle, opcao}`. A pose fornece uma vez cada controle solicitado, sem extras, respeitando domínio e integralidade. Componente procedural com controles requer ao menos uma pose. O validador confere esses dados, não a geometria produzida por eles.

## Entrega

Campos obrigatórios: `versao_contrato: 1`, `tipo_contrato`, `projeto`, `id`, `versao`, `estado`, `modo`, `autoridade`, `pedido`, `roupa`, `arquivos`, `api`, `partes`, `poses_exemplo`, `verificacoes` e `pendencias`. `tempo` existe somente quando o pedido o inclui, com os mesmos valores.

- `pedido` e `roupa` são referências com hash. Projeto, id, modo, autoridade e roupa precisam corresponder ao pedido. A entrega não pode tomar a composição de um componente para si nem passar a ser ilustração independente sem outro pedido explícito.
- `arquivos`: `{arquivo, sha256, funcao}`; funções iguais às saídas esperadas. Um arquivo tem uma função, sem caminhos duplicados. Todas as funções solicitadas precisam aparecer. Fonte editável, API documentada e prévia devem ser solicitadas quando necessárias; o contrato não finge que um arquivo existe por citar seu papel em prosa.
- `api`: `{interface, entrada, hook?}`; interface/hook coincidem com o consumidor. A entrada precisa apontar para um arquivo listado como `asset`, com hash. O validador não executa a API nem inspeciona sua linguagem.
- `partes`: objetos `{id, funcao, pivot?, bounds?}` com IDs únicos. Pivô é opcional quando não há articulação. `pivot` tem duas ou três coordenadas; `bounds` tem quatro ou seis valores, respectivamente posição seguida de dimensões positivas. Quando ambos existem, usam a mesma dimensionalidade. São declarações do produtor, não medidas do contorno/volume.
- `poses_exemplo`: vazia na arte estática; segue o formato acima quando há controles.

## Verificações e estados

Declare uma vez cada domínio: `estrutura`, `integridade`, `areas_seguras`, `identidade`, `movimento`, `determinismo`, `qc_independente`. Cada registro contém `tipo`, `estado`, `motivo` e, quando houver, `evidencia: {arquivo, sha256}`. A evidência precisa constar também em `arquivos` com função `evidencia`.

`passou` exige arquivo de evidência existente e íntegro. `falhou` e `nao_medido` exigem motivo concreto, sem fabricar um relatório. `nao_aplicavel` é aceito somente para movimento/determinismo em SVG estático; falta de ferramenta ou de revisão significa `nao_medido`.

Estados da entrega: `preparado`, `conferido`, `integrado`, `aprovado`, `bloqueado`. Bloqueado exige pendência. Aprovado exige QC independente registrado como passou, todos os domínios concluídos e nenhuma pendência. Conferido/integrado não promovem a arte a aprovada. O programa valida a presença e o vínculo dos registros; não verifica a autoria/independência ou a veracidade de um laudo, não concede aprovação e não altera o estado informado.

## Execução

```text
python ferramentas/ilustracao/validar-tecnica.py pedido exemplos/pedido.json --raiz .
python ferramentas/ilustracao/validar-tecnica.py entrega exemplos/entrega.json --raiz .
python -m unittest discover -s laboratorio/testes -p test_ilustracao_tecnica.py -v
```

Saída 0 significa que as conferências deste utilitário passaram; saída 1 informa falha. Campos desconhecidos são rejeitados. O perfil usa somente o subconjunto de JSON Schema distribuído com o motor local. Não há efeitos colaterais de produção, geração de mídia, acesso à rede ou publicação. Usar uma roupa válida não prova contraste, legibilidade, áreas seguras por quadro, fidelidade visual, funcionamento mecânico ou qualidade artística: esses resultados precisam de execução e revisão próprias.
