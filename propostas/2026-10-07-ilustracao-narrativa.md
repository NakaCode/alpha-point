# A ilustração narrativa v1.4.0 no Alpha Point: a avaliação (07/10/2026)

O Lucas entregou o pacote em `v1.4.0-ilustracao-narrativa/` (fora do git) e pediu: "veja e leia
...\INSTRUCOES-PARA-CLAUDE.md". As instruções do pacote pedem, para começar, só a avaliação: "pare após identificar o ponto
de extensão e o piloto proposto". Esta é a avaliação. Nada foi instalado, copiado ou mudado no canal.

Quem avaliou: o Claude central e quatro revisores independentes, sem escrever no repositório: a roupa contra a marca, o
ponto de extensão, o piloto e um cético que tentou derrubar os três. Os relatos inteiros estão no scratchpad da sessão
(`ilustracao-roupa.md`, `-extensao.md`, `-piloto.md` e `-cetico.md`). Este arquivo diz o que sobreviveu ao cético.

## 1 · O pacote confere

- `python -B verificar-pacote.py --com-node`, rodado duas vezes (Claude central e cético): **PASS** nas 22 verificações. Os
  164 arquivos batem com o inventário, os 47 testes em Python e as 13 auditorias em Node passaram, e o pacote original ficou
  intacto (ele trabalha numa cópia temporária).
- **NÃO MEDIDO:** a rasterização da mão (`--com-canvas`). Pede um módulo de canvas que teria de ser instalado, e o pacote
  diz para não instalar nada.
- O PASS é estrutural. Não é aceite artístico nem QC de produção (o próprio pacote diz isso).

## 2 · O que é o produto

Uma habilidade que o **editor-de-arte que já existe** consulta dentro do passo `art`: método de construção (proporção,
perspectiva, articulação, contato), contratos, validadores e estudos. O agente `ilustrador-tecnico` é opcional. Não há
editor novo nem etapa nova.

## 3 · O ponto de extensão

**A roupa do editor-de-arte**, `marca/agentes/editor-de-arte.md`. O ofício do editor (`.claude/agents/editor-de-arte.md`) é
cópia do molde e não se edita. Ele não tem a ferramenta Skill, então uma skill em `.claude/skills/` não chega a ele sozinha.
- **Como se ativa:** uma seção curta na roupa diz onde a habilidade mora, quando vale e o que ler. O estado de ferramenta
  vai ao `CLAUDE.md`, não à roupa (`marca/agentes/LEIA-ME.md`). O despacho também manda ler a roupa: num transcript, o
  editor leu o ofício só até a linha 120.
- **Onde moraria:** `ferramentas/ilustracao-narrativa/`, com a árvore do núcleo preservada. Os validadores acham os
  schemas por caminho fixo, e as pastas `contratos/` e `knowledge/` do canal são cópia byte a byte do molde, com
  `ORIGEM.json`, e não recebem arquivo de fora.
- **O que viria:** só a habilidade, o conhecimento, os contratos e validadores que ela usa, e o estudo do fenômeno do
  piloto. São uns 22 arquivos, não o pacote inteiro.
  - **Antes do commit**, a linha `ferramentas/ilustracao-narrativa/** -text` no `.gitattributes`. Seis desses arquivos
    têm fim de linha CRLF (os 5 schemas e o perfil). O canal grava tudo em LF, e num clone o sha256 deixaria de bater: é o
    mesmo caso dos `assets/` (`APRENDIZADOS.md` item 35).
- **Como se prova a ativação:** pelo transcript do editor (o `Read` na `SKILL.md` e no estudo) e pela entrega dele, com os
  campos do contrato `cena-ilustrada-v1` validados pelo `validar-cena.py`. Copiar arquivos não prova nada.
- **Fica fora:**
  - o `ilustrador-tecnico`: não declara modelo e grava em `out/<proj>/animate/`;
  - a mão v003 e os módulos de movimento e física: o próprio pacote os marca como experimentais;
  - os módulos que pintam o fundo inteiro: apagariam a mesa.
- **Para voltar atrás:** apagar `ferramentas/ilustracao-narrativa/`, tirar a seção da roupa e a linha do
  `.gitattributes`.

## 4 · A roupa do adaptador está atrasada

O adaptador do Alpha (`adaptadores/alpha-point/`) foi feito sobre o commit `16f0ebbf` (29/09), 63 commits atrás.
- **O que bate com o `tokens.css` de hoje:** palco, margens, tipografia e papéis de cor.
- **Os 5 hashes da marca não batem**, e o validador da roupa reprova ("Hash divergente: marca/tokens.css").
- **Ela contradiz regras aprovadas depois:**
  - a PRANCHA em fundo sólido, quando a mesa vale para ela desde 30/09;
  - de hoje em diante, a mesa é o satélite.
- **Faltam regras que afetam desenho:** o teto de 3 matizes, bandeira nunca desenhada, rota aproximada tracejada, campo
  vazio que não vai à tela, crédito de geometria e o aviso do ano.

**No piloto, ela nem é instalada.** O editor já carrega as regras na própria roupa, e o piloto só precisa do perfil
numérico, apontando para a roupa do editor. Se um dia o `ilustrador-tecnico` entrar, a roupa dele se refaz contra a marca
daquele dia.

## 5 · O piloto proposto

O guindaste do pacote (a peça com aceite visual) não cabe em nenhuma cena do Juneau sem mudar a composição. Os
revisores acharam cinco peças desenhadas no Juneau. O cético reordenou as duas melhores:
- **s34, a etiqueta de preço pendurada no fio:** o melhor piloto para **provar a ativação e a cadeia inteira**. Os
  portões dela estão verdes, e ela não tem foto nem exceção de portão. O estudo que ela pede é `estudo-dinamica-objetos`
  (cabos e pêndulo).
- **s49, a balança de dois pratos:** a que **mais mostraria construção**. O laudo dela aponta a balança "quase parada", e
  o conceito pede que "a agulha treme na diferença". Mas ela traz dois bloqueios:
  - a foto da cena precisaria de veredito do conferente na cópia;
  - o portão `carga` dela é vermelho, com exceção aprovada só para o sha1 de produção. A cópia voltaria ao Lucas.
- **Em qualquer caso:**
  - **a cópia:** numa pasta isolada (`out/prova-ilustracao-s34/`, como as outras provas do canal), com as entradas
    congeladas na pasta (o espelho inclusive, que o `qc-tamanho` lê);
  - **a comparação:** quadros nos mesmos instantes, antes e depois, em 1080p;
  - **sem custo:** sem render 4K e sem MapTiler;
  - **os portões:** os do canal na cópia, e a QC independente;
  - **o Juneau:** não muda, nem vai ao XML.

**E o vídeo 2?** O tema escolhido hoje (Los Angeles e o porto) torna o guindaste de contêiner pertinente. Mas a regra da
identidade (§5) vale: o guindaste real do porto continua em imagem real. A animação explica mecanismo, processo ou regra.
Ali, a candidata natural seria o mecanismo do quebra-mar (as ondas que ele segura) ou a dragagem. E o estilo das animações
além da PRANCHA ainda não está decidido: "Quando o vídeo 2 pedir, o Lucas vê opções numa página" (identidade §5).

## 6 · O que é decisão do Lucas

1. Se a integração entra, primeiro só como piloto na cópia (o pacote pede piloto isolado e revisão antes de ir ao
   oficial).
2. O piloto: s34, para provar a ativação, ou s49, para mostrar construção (esta volta a ele pela exceção do portão).
3. O estilo das animações além da PRANCHA, que a identidade deixa para quando o vídeo 2 pedir.
4. Mais adiante: habilitar o `ilustrador-tecnico`, a mão v003 e os módulos de física (todos experimentais), e como uma peça
   ilustrada conta no teto de 6 elementos.

Recomendação do Claude central: **o piloto na s34, depois do roteiro do vídeo 2**. Ele usa o editor em `fable` por algumas
horas e disputa a máquina com o render. Se der certo, a habilidade entra no `art` do vídeo 2 só nas cenas de mecanismo.
