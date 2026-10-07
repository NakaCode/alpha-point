# Revisão da forma da mão — v002

05/10/2026. Lucas avaliou as articulações como boas, mas rejeitou a forma da mão da bancada `movimento-fisica.html`. O escopo desta revisão é a superfície visível e sua leitura durante a animação. O registro anterior fica em `revisoes/v001/feedback.json`; esse aceite limitado ao movimento não se estende ao desenho.

## Construção

`maos-forma-v002.mjs` recebe a mesma função `sample` de `maos.mjs`. Preserva os comprimentos, centros das juntas, curvas, alvos da pinça, tempos e vistas da prova. Reconstrói palma, raízes dos dedos, região do polegar e transição para o punho. A superfície tem sua própria malha e rasterização com profundidade por pixel, com luz suave para distinguir os planos visíveis.

Os exports adicionais são `surfaceMesh(state)` e `rasterize(state, theme)`. O segundo retorna uma cópia de pixels RGBA em 960×540. `draw` desenha esse buffer num Canvas auxiliar e o compõe por `drawImage`, respeitando a transformação do consumidor. O cache é local e não expõe seus pixels internos ao chamador. Exige suporte a OffscreenCanvas ou a um Canvas auxiliar no documento.

O módulo depende localmente de `maos.mjs`, que conserva o rig original. Ao entregar a fonte editável, entregar ambos. O gerador da bancada incorpora somente a cinemática dessa dependência numa função isolada: o HTML final continua sem importações ou recursos de execução externos. A superfície antiga aparece apenas no comparativo.

## Roupa e escopo

As cores base continuam vindo dos papéis de roupa. A configuração opcional `theme.maoVolume` recebe `base`, `amplitude` e `light`; a bancada usa 0,05, 0,26 e direção [-0,45; -0,6; 1]. A luz e os tons de volume são um **tratamento experimental da bancada**, não uma autorização para introduzir tons ou degradês na produção Alpha. Devem ser especificados na roupa da cena e passar pelos controles do canal antes da integração. O fundo permanece chapado. O rasterizador faz uma mistura de cor para ilustração; não é um cálculo fotométrico em sRGB linear.

O editor continua responsável por cena, textos, créditos, câmera, tempos editoriais e render final. A revisão não instala componentes, não modifica o agente editor, não muda estados da Régie e não acrescenta narração. Não há colisão global de todos os tecidos nem certificação anatômica.

## Evidências e reprodução

O comparativo sincronizado está em `comparar-forma.html`. A bancada principal apresenta a revisão após geração. Para reproduzir as verificações locais:

```powershell
node laboratorio/estudo-maos-movimento/auditar-forma-v002.mjs
node laboratorio/estudo-maos-movimento/auditar.mjs
node laboratorio/estudo-maos-movimento/auditar-pixels-v002.mjs
python laboratorio/movimento-fisica/gerar.py
node laboratorio/movimento-fisica/auditar-integracao.mjs
```

`resultados-forma-v002.json` compara a articulação à v001. `resultados.json` mede a geometria da superfície e os contatos definidos no ensaio. `pixels-v002-resultados.json` confere os pixels renderizados, áreas seguras e reprodução fora de ordem. Os hashes desses relatórios devem corresponder à última fonte. A inspeção no navegador confere o consumidor real; um contexto de gravação em Node não o substitui.

O rascunho 2D intermediário foi descartado por apresentar serrilhado e fendas no fechamento. Seu texto-fonte está separado em `revisoes/rascunho-2d/` e não integra a bancada. O ensaio de volume sobre a malha antiga também não é a versão entregue.

**Limitação visual preservada:** na vista lateral da pinça, uma ponta de dedo recolhido continua aparecendo atrás do laço. Sua posição pertence ao gesto original. Contato tangente não modela achatamento real das polpas.

**Estado:** revisão visual de Lucas pendente. QC oficial não medido. Nenhum resultado numérico concede aprovação artística automática.
