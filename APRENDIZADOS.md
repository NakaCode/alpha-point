# Aprendizados — Alpha Point

O que apareceu no onboarding deste canal e pode servir ao motor. Para Lucas e Mateus decidirem;
nada aqui foi alterado no motor.

## 23/09/2026 — onboarding (motor em `ffb3ec0`)

### 1. O passo `mirror` (montador) é inalcançável na linha `long-form`
- **O problema:** nenhuma aresta chega em `mirror`; `cut_detect` vai direto para `research`
  (`db/pipeline-long-form.json`, linhas 9–11). Conferido consultando o banco semeado.
- **Por que importa:** pelas SPECs dos próprios ofícios, decupador (bruto) e montador (master já
  editado) são entradas alternativas (`crafts/decupador/SPEC.md` §3). Como a Régie começa num master
  editado, quem deveria rodar é o montador — que a SPEC chama de "o teto de tudo que vem depois".
  O teste `testes/state.test.mjs:40` fixa o caminho atual.

### 2. Dois ofícios se contradizem sobre o pedido de mídia
- `crafts/montador/CONTRATO.md` §2.1 exige `midia_termos`/`midia_necessidade` e diz que
  `needs.midia` NÃO é o pedido.
- `crafts/pesquisa-imagens/CONTRATO.md` §1b diz que esses campos "não existem mais" e usa
  `needs.midia` como sinal duro.
- Quem seguir os dois perde pedidos de mídia no meio do caminho.

### 3. `npm test` falha sem identidade do git — e o onboarding lê isso como defeito do motor
- Nesta máquina o git não tinha `user.name`/`user.email`: 44/45, com a falha em
  `testes/create.test.mjs` ("does not have any commits yet"), sem dizer que a causa é a identidade.
- O `ONBOARDING.md` diz "se não fechar, pare: o problema é do motor, não da pessoa". Aqui era da
  máquina. Configurada a identidade: 45/45.
- Sugestão: o teste passar `GIT_AUTHOR_*`/`GIT_COMMITTER_*` no ambiente isolado, ou reprovar com
  mensagem que nomeie a causa.

### 4. Menores
- `source` no `canal.json` sai com espaço quando o dono tem sobrenome: `regie://alpha-point@Lucas Rosa`.
  Vira caminho `facts/<canal>/<dono>/` na ADR 0006.
- `template/marca/identidade.md` ainda diz que quem a escreve é o `arquiteto-de-marca`, ofício que
  não existe.
- No Mac/Linux, a sugestão do gerador `--em=~/projetos/<slug>` (`bin/create-regie:134`) cria uma
  pasta literal `~` dentro do motor: o shell não expande `~` depois de `=`.
- O `doctor` de todo canal novo abre com o aviso "6 passos sem aresta 'retake'".

## 23/09/2026 — o primeiro canal em inglês (motor em `ffb3ec0`)

O Alpha Point narra em inglês dos EUA. Auditoria somente leitura do motor para ver o que isso muda.

### 5. Trocar `idiomas.origem` para `en-US` não quebra nada, porque nada lê o campo
- **O que foi provado:**
  - o `bin/create-regie:253` só **escreve** `pt-BR`, e não tem flag de idioma;
  - o `testes/create.test.mjs:70` trava esse default;
  - fora o teste, nenhum código lê `idiomas`: nem `doctor`, `open`, `advance`, schema ou linha;
  - o `doctor` dá o mesmo PASS com `pt-BR` e com `en-US`.
- **A consequência:** o idioma do canal é declarado, mas não governa nada. O `ingest`
  (`db/pipeline-long-form.json:7`) não recebe idioma, e `localizados` não tem consumidor. O
  `tradutor-de-tela` que os ofícios citam (`crafts/redator-de-tela/CONTRATO.md:122`) não existe em `crafts/`.
- **Sugestões:**
  - um `--idioma` no gerador;
  - o `ingest` e o contrato de cena lerem `idiomas.origem`.

### 6. Os ofícios assumem vídeo em pt-BR, em lugares que um agente copia
- **Contrato de cena:** fixa `<html lang="pt-BR" data-render="4k-native">`
  (`crafts/editor-de-arte/CONTRATO.md:138`).
- **Exemplos copiáveis em formato brasileiro:**
  - `QUASE 3.000×` (`crafts/redator-de-tela/OFICIO.md:55`);
  - `"QUASE 30 VEZES"`, `"28,0×"` e `"vezes"` no schema de exemplo
    (`crafts/redator-de-tela/CONTRATO.md:104-107`);
  - `6,76 m ABAIXO DO MAR` (`crafts/editor-de-arte/OFICIO.md:118`);
  - `1º DE MAIO DE 1994` (`crafts/editor-de-arte/OFICIO.md:287`).
- **Heurísticas só em português:**
  - despedida, mic-check e dangler do decupador (`crafts/decupador/OFICIO.md:173, 243, 274`);
  - adversativas e sintagmas do regente (`crafts/regente-de-imagem/OFICIO.md:39-43`).
- **Vocabulário de máquina em PT:** não se traduz, porque os contratos vieram do agent-core
  (`crafts/ORIGEM.json`) com chaves e enums em PT, e é assim que os gates e schemas do consumidor os
  leem. Mas a ADR 0005 **não cobre** esse caso: ela manda inglês para chave de contrato e valor de enum,
  e só isenta a conversa, os ids dos ofícios e o conteúdo editorial. É uma terceira exceção, não
  declarada. E tem uma armadilha: o `motivo` de span de título precisa conter "título" porque dois
  consumidores legados o acham por regex (`crafts/decupador/CONTRATO.md:98`).
- **Como este canal contornou, sem tocar no motor:** está no `CLAUDE.md` do canal, na seção "O vídeo
  fala inglês".
- **Sugestão:** marcar os exemplos como "formato pt-BR" ou tirá-los da marca ativa, e derivar o `lang`
  da cena do `canal.json`.

### 7. Doutrina de mídia verificada para quatro bancos: serve a qualquer canal que os assine
- **Onde está:** `marca/midia.md` deste canal. Shutterstock, Motion Array, Envato Elements e
  Storyblocks, com as regras lidas nas páginas oficiais e checadas por um segundo agente. Fontes no
  próprio arquivo.
- **O que vale para qualquer nicho, inclusive culinária:**
  - "editorial use only" não entra em vídeo monetizado;
  - as licenças individuais são de uma pessoa só, então editor contratado não fica coberto;
  - a assinatura precisa estar ativa quando o vídeo vai a público;
  - no Motion Array, vídeo privado que vira público depois do cancelamento fica descoberto.
- **Sugestão:** virar `template/marca/midia.md` do motor, com as regras gerais.

## 23/09/2026 — o dono pergunta "de onde parte o master?" (motor em `ffb3ec0`)

### 8. Nada produz o master, e o onboarding não diz de onde ele vem
- **O problema:** a linha começa no `ingest`, que transcreve um master editado. O dono de um canal
  novo não tem vídeo nem roteiro. O `ONBOARDING.md` Passo 5 manda abrir a primeira produção sem dizer
  de onde vem o master.
- **O que falta antes da Régie:** não há passo nem ofício de pauta, pesquisa, roteiro ou locução, e o
  planejamento não prevê nenhum. Esses ofícios existem no agent-core (`pesquisador-de-pauta`,
  `roteirista-narracao`, `critico-de-roteiro`, `verificador-de-fatos`, `critico-de-locucao`), mas não
  vieram para a Régie.
- **Canal faceless:** os ofícios supõem apresentador. O montador tem cota de rosto de 10–15 % e
  veredito `manter` = rosto em tela. O decupador parte de câmera e microfone do apresentador, e o
  editor-de-arte chama a base de "master do apresentador". A palavra "faceless" não aparece no motor.
  Este canal anulou a cota na marca (`identidade.md` §5).
- **Sugestão:** o onboarding perguntar "você já tem master?" e, se não, apontar o caminho. Os ofícios
  de roteiro do agent-core são candidatos a entrar na linha.
- **Por que serve a qualquer canal:** todo canal novo começa sem master.

### 9. As estações determinísticas da linha estão vazias
- **O problema:** `ingest`, `render` e `finalize` têm `craft: null`, e não há código em `src/` que
  transcreva, renderize ou gere o XMEML. A `CRITICA-DE-COMPLETUDE.md` §A1 já diz isso.
- **Onde vai virar promessa:** o `CLAUDE.md` que o gerador escreve em todo canal diz "entrega a camada
  visual como XML de 5 camadas". O dono lê isso como pronto.
- **Sugestão:** o template dizer o que existe hoje. Enquanto o motor não tiver essas peças, cada canal
  vai escrevê-las sozinho, e isso é justamente a divergência que a Régie existe para evitar.
- **O que este canal tem disponível na máquina:** `faster-whisper` com large-v3 (tempo por palavra),
  ffmpeg 8.1, Premiere Pro 2026. As específicas de
  geopolítica (Storyblocks proíbe uso *political*; Shutterstock proíbe modelo em contexto político)
  ficam no canal.
