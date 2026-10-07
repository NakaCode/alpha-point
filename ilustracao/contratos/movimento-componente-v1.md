# Anexo de movimento de componente — v1

Data: 05/10/2026. Contrato técnico experimental do laboratório. Complementa, por referência a arquivo, os contratos de ilustração existentes; não adiciona campos obrigatórios nem altera seus schemas. Não é novo passo da Régie.

## Entrada

O editor fornece identificação/versão da peça, ação, instantes/eventos locais ou domínio de progresso, vista e transformação de composição, área disponível, menor escala, roupa versionada, contatos e referências autorizadas. O pedido informa se representa uma relação física quantitativa ou uma explicação qualitativa. Valores ausentes usados na bancada são parâmetros declarados da bancada.

O produtor descreve modelo (cinemático/analítico/numérico), unidades, eixo da gravidade, condições iniciais, limites de parâmetros, discretização quando houver e fenômenos excluídos. Recebe o horário do consumidor; não consulta `Date.now`, relógio global ou estado de reprodução para calcular geometria. Ruído, se necessário, exige seed fixa registrada.

Para componentes acoplados, declare o referencial físico e a fonte única de pose/velocidade/aceleração de cada corpo acionador. Transformações de câmera/composição são separadas da trajetória física; mover o canvas não fornece automaticamente aceleração ao fluido. O vínculo mão–objeto e o vínculo recipiente–líquido precisam usar o mesmo estado e unidades. A API desta bancada ainda não padroniza uma entrada genérica para trajetórias externas: integrar um copo movido por uma mão exige extensão versionada, teste de contato e revisão das forças do modelo.

## API da bancada v1

Os módulos ES independentes exportam:

```js
export const meta = {
  id, title, duration, summary, limitations, controls
};
export function sample(t, options = {}) { /* estado completo */ }
export function draw(ctx, state, theme, debug = false) { /* Canvas 2D */ }
```

`t` é segundo local, finito, entre zero e `meta.duration` na interface. O módulo documenta a política fora do intervalo. `sample` mantém equivalência observável de entrada/saída mesmo se usar cache imutável internamente; não depende da ordem de chamadas. O estado possui fase, posições e dados de contato/limites adequados ao modelo. Campos específicos de cada módulo são descritos em seu estudo. `draw` recebe o contexto do consumidor, balanceia `save/restore`, não altera estado ou relógio e não faz I/O. Não retorna uma aprovação.

Na bancada o espaço local é 960×540. Tema recebe `fundo`, `superficie`, `papel`, `tinta`, `contorno`, `protagonista`, `contraparte`, `risco`. Valores Alpha só ficam no adaptador. Conteúdo demonstrado deve caber em x=50..910, y=40..465; textos da interface são externos à arte. Isso não substitui a medida da cena transformada nem os espaços de crédito do canal.

Controles têm `key`, `label`, `type`, `default`; `range` acrescenta `min`, `max`, `step`; `select` traz `options` com `{value,label}`. Os rótulos portugueses são da interface de estudo, não textos editoriais para vídeos Alpha. `meta.duration` descreve a prova, não determina duração de cena real. As coreografias fixas das provas precisam ser adaptadas a eventos externos em uma encomenda diferente.

## Saída

- Fontes editáveis e este contrato, sem dependência instalada implicitamente.
- Parâmetros e limitações documentados no estudo do componente.
- Prévia com controle de tempo, inspeção e caso de uso explícito.
- Auditoria com critérios, resultados e código reproduzível, inclusive testes de seek fora de ordem.
- Inventário de versão e hashes; avaliação artística, integração e QC registrados separadamente.

Estados de cada item: `preparado`, `conferido`, `integrado` ou `aprovado`, conforme o contrato anterior. `conferido` não significa aceito visualmente pelo usuário. Falhas e itens não medidos permanecem no relatório, com escopo específico. Distribuições antigas são preservadas.

## Consumo pelo editor

O editor transforma seu tempo de cena em tempo local e fornece a roupa. O consumidor aplica composição fora do componente. Um exemplo mínimo, para um canvas já existente:

```js
import * as piece from './componente.mjs';
function renderPiece(localSeconds, options, theme) {
  ctx.save();
  ctx.translate(destination.x, destination.y);
  ctx.scale(destination.width / 960, destination.height / 540);
  piece.draw(ctx, piece.sample(localSeconds, options), theme, false);
  ctx.restore();
}
```

Preserve proporção: largura/960 e altura/540 devem ter a mesma razão ou usar um retângulo interno proporcional. O exemplo não instala o componente nem substitui o RIG. A API do laboratório pressupõe palco preenchido; reutilizar como camada transparente exige adaptar a pintura do fundo e verificar composição. O editor mantém render final, câmera, fontes, textos, créditos e sincronismo. Revalidar links, importação, tamanho, cor, oclusões e extremos depois de qualquer adaptação.

Em um conjunto acoplado, registre estados de posse (`apoiado`, `em_preensao`, `livre`, por exemplo), quem controla a transformação em cada estado e a continuidade na transferência. Se o consumidor passa progresso normalizado, uma camada explícita o converte em segundos e calcula derivadas no referencial físico; não derive forças de um progresso sem unidade. Para intercalar dedos, líquido e paredes de um copo, o produtor pode entregar um conjunto que resolva a ordem internamente ou passes de camadas documentados. A interface simples destas provas não garante composição correta de módulos independentes por mera ordem de chamadas.
