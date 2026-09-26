> **[porte Regie]** Origem: `top10-estudio/knowledge/TITULOS-TOPICOS.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador. O caso B (o apresentador LÊ o título e a leitura é silenciada, [FIN-06]) não existe aqui: o título simplesmente fica fora do texto da narração. O agente `roteirista-narracao` do Top10 é o `roteirista` neste canal. O card de título deste canal é o do kit de marca do motor: `<motor>/src/marca/kit/card-capitulo.html`, escolhido no onboarding e renderizado por `node <motor>/src/ferramentas/renderizar-alfa.mjs`. (`<motor>/src/finalize/card-de-titulo.mjs` não é molde: é o teste «esta cena é o card que anuncia um capítulo?».)
> Trechos trocados no porte estão marcados `[porte Regie]`.

# TÍTULOS DE TÓPICO — obrigatórios em todo vídeo (e de onde eles saem)

> Regra do Mateus (03/jul/2026): **todo vídeo tem um CARD DE TÍTULO por tópico** (ex.: "Por que a
> comida do avião tem um gosto diferente?"). Só que o apresentador **NÃO narra** esses títulos —
> roda **só a música de fundo**. Logo o título **não existe na transcrição** (Scribe).
> A fonte da verdade dos títulos é o **roteiro original do canal** — **[porte Regie]** aqui, `out/<proj>/roteiro.md` (no Top10, o Google Drive).

## 1–3. Onde vivem os roteiros e de onde saem os títulos **[porte Regie]**

No Top10 os roteiros viviam no Drive compartilhado do canal (montado no Mac do dono), como Google Doc lido pelo
apresentador. Um script achava a pasta do vídeo, a API do Drive (ferramenta MCP `read_file_content`) buscava o
texto, um cache ia para `knowledge/roteiros/<proj>.md`, um RAG local (Ollama `bge-m3`) casava vídeo e roteiro, e
o `extrair-titulos.mjs` tirava os títulos. **Nada disso existe aqui**: nem Drive, nem MCP, nem Ollama, nem
esses scripts — não tente reproduzir o fluxo.

Neste canal faceless o roteiro nasce no próprio canal, em **`out/<proj>/roteiro.md`**, escrito pelo agente
`roteirista` (no Top10, `roteirista-narracao`). **Os títulos de tópico são as linhas `**Título**` desse arquivo,
na ordem em que aparecem**, fora os rótulos de produção (`[PUBLI]`, `ENCERRAMENTO`, `INTRO`, `CTA`, `BLOCO`,
`VINHETA`). Não há script extrator: leia o arquivo e liste as linhas.

## 4. Dois casos de produção (COMO o título entra no vídeo)
### A) Vídeo PRÉ-EDITADO (source já montada pela equipe — modo pós-produção; ex.: aviões)
- Título **não narrado** (só música). Nos **gaps** entre um tópico e outro (sem narração no `words.json`)
  entra o **card de título** (`modo:"titulo-topico"`).
- Fluxo: lê `out/<proj>/roteiro.md` **[porte Regie]** → extrai títulos → detecta os gaps de música (silêncio de fala) → gera 1
  card por tópico, **posicionado no gap**, na ordem do roteiro. Número-herói + o título (padrão v5).
### B) Bruto do ESTÚDIO (apresentador com erros, sem footage; edição do ZERO) — **FIN-06 (regra dura, 15/jul)**
- O apresentador **lê** os títulos → o Scribe capta. O título **JAMAIS** sai narrado (defeito nº 1 do 3i-atlas):
  a leitura é **SILENCIADA** e o card entra com **footage real + só música**.
- Fluxo **[porte Regie]** (só no Top10: o decupador não veio): o **decupador** puxa o roteiro (Drive) → compara e identifica QUAIS falas são títulos → grava cada
  span em **`out/<proj>/_titulos-mute.json`** (`[{ini,fim,titulo}]`, tempo-BRUTO). NÃO é ripple-cut: a janela de *(⚠️ mecanismo SUPERADO pela FIN-17: o título vira fronteira de bloco + gap de 3s; `_titulos-mute.json` nunca teve produtor — ver `seed/regras/FIN.md`)*
  vídeo PERMANECE (é onde o card entra); só a A-track de narração daquele intervalo é **muta/trocada por trilha**.
- Na FINALIZAÇÃO, o `timeline-xml` lê o `_titulos-mute.json` e silencia a narração nesses intervalos; o
  editor-de-arte veste o card-capa (footage + trilha) por cima. O **gate qa-montagem** reprova qualquer título
  com voz do Bôco. (Consultar o Drive é o que distingue "isto é título, não leia" de "isto é conteúdo".)

## 5. Scripts desta feature **[porte Regie]**

No Top10 eram `roteiro-do-drive.mjs`, `extrair-titulos.mjs`, `gerar-cards-titulo.mjs`, `integrar-cards-titulo.mjs`
e a skill `titulos-topico`. **Nenhum veio.** Neste canal:

- os títulos: as linhas `**Título**` de `out/<proj>/roteiro.md` (§1–3);
- o card: O card de título deste canal é o do kit de marca do motor: `<motor>/src/marca/kit/card-capitulo.html`, escolhido no onboarding e renderizado por `node <motor>/src/ferramentas/renderizar-alfa.mjs`. (`<motor>/src/finalize/card-de-titulo.mjs` não é molde: é o teste «esta cena é o card que anuncia um capítulo?».)
- ⚠️ **ARTE-34 continua valendo:** título de tópico ilustra o tema com VÍDEO/IMAGEM REAL, nunca fundo abstrato.
