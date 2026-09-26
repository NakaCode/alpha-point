> **[porte Regie]** Origem: `top10-estudio/knowledge/roteiro/PESQUISA-HONESTIDADE.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Módulo de `knowledge/ROTEIRO-NARRACAO.md` (a «Ordem de leitura»). O agente `roteirista-narracao` do Top10 é o `roteirista` neste canal, e o `roteiro-boco.md` (o texto que o apresentador lia) é `out/<proj>/roteiro.md`; o `roteiro-editor.md` fica ao lado dele, em `out/<proj>/`. Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# PESQUISA & HONESTIDADE — como se apura (módulo do roteirista)

> Regra-mãe: **nada implícito e nada inventado.** Toda afirmação tem fonte; toda hipótese tem dono;
> todo "porquê" é dito por completo. Número, data e nome próprio só entram com a fonte aberta NESTE
> passe — "eu sei isso" não é apuração, e é indistinguível de invenção no texto final.
>
> E a apuração cobre o **campo**, não só o objeto do título (§3): o que você não apurou vira o teto
> do vídeo, e o grafo que não tem fonte para andar é convite a inventar.

## 1 · Os três níveis de fonte

| Tier | O que é | Corroboração |
|---|---|---|
| **T1 · primária/oficial** | quem PRODUZIU o dado (paper com DOI, órgão de estatística, tribunal, texto do acordo, relatório ao investidor) | sozinha basta |
| **T2 · veículo sério / divulgação especializada** | quem apurou o T1 com responsabilidade editorial | 2 independentes — dois que apuraram separado; a mesma agência em dois jornais é UMA fonte (confira o crédito no pé) |
| **T3 · secundária** | quem repassa (agregador, release, enciclopédia colaborativa) | nunca sustenta sozinha — serve para achar o caminho até a T1 |

Perfil de rede social, meme e vídeo de terceiros **nunca são fonte — são pista**. Wikipédia é mapa
de fontes: use as notas de rodapé, cite as notas. **Atributo de documento** (data de assinatura,
partes, vigência, cláusula) só se corrobora com o TEXTO do documento, no site de quem o assinou ou
guarda — duas secundárias concordando sobre um documento que não abriram são a mesma cópia. Sem o
texto: tire o ano, ou atribua.

**Onde ir, por tipo de afirmação:** estatística do Brasil → IBGE/BC/IPEA · mundo → Banco
Mundial/ONU/FMI · ciência → o paper (DOI), depois o release · espaço → NASA/ESA/arXiv (pré-print
marcado) · clima → INMET/NOAA/Copernicus/IPCC · saúde → OMS/sociedade da especialidade/Cochrane ·
lei e decisão → o texto no diário oficial ou o acórdão · acordo entre governos → o texto na
chancelaria/repositório de tratados · empresa → relatório ao investidor (CVM/SEC) · história
antiga → publicação acadêmica/museu da peça · geografia → base cartográfica oficial, nunca a
caixinha do buscador · recorde → a entidade que homologa · pessoa viva → o site da instituição, com
a data conferida.

## 2 · O piso de classe — fundo se mede por CLASSE, não por contagem

Doze fontes rasas valem menos que quatro fundas: matéria de agência responde *o quê, quantos,
quando* — e o canal vende *por quê, o que significa, o que muda*. Todo roteiro de acontecimento
precisa de **pelo menos uma fonte de cada classe**, e o dossiê lista as fontes agrupadas por elas,
com as vazias declaradas vazias:

1. **O evento** — 2 veículos que apuraram separado.
2. **O mecanismo** — quem estuda o assunto (think tank, artigo acadêmico), não quem cobriu o dia.
   É a classe que responde "por quê" — e o fundo não precisa ser recente: o evento é de ontem, a
   bibliografia tem década.
3. **O número humano** — estatística primária do órgão do país. Sem ela é proibido afirmar
   motivação ("gente jovem sem emprego"): ou vem com número e fonte, ou não entra.
4. **O documento** — lido, não a notícia sobre ele.
5. **A voz de quem viveu** — reportagem de longo formato com relato de campo; é o que impede tratar
   mortos como estatística. Tema de mecanismo puro, sem gente envolvida, declara esta classe vazia e
   segue: o piso é de apuração, não de cota de personagem na tela.
6. **A referência de estilo** — a BBC News Brasil cobriu o assunto? Como ela o conta em PT-BR?

## 3 · O CAMPO — apura-se o assunto, não só o objeto do título

O §2 é o piso do **objeto**: a porta por onde o vídeo entra. Meia hora de narração contínua não cabe
dentro da porta. Ela sai do **campo semântico em volta** — e o campo se apura com a mesma régua do
objeto, ou não se escreve. Esta é a apuração que decide o tamanho do vídeo, e ela acontece **antes**
da primeira frase: quem descobre o buraco no meio do parágrafo já não tem tempo de buscar, e o
parágrafo sai preenchido com o que a memória ofereceu.

**As seis direções que o grafo abre são também direções de apuração** — o mecanismo, os irmãos que
dão régua de escala, a origem, a consequência rio abaixo, o plano maior, o terreno que resiste. Você
não apura as seis: apura **as que este tema pede**.

**Como se sabe quais o tema pede.** Termine o piso do objeto e leia o que você tem como se fosse
ouvinte: **cada pergunta que o material deixa em pé aponta uma direção.** Três sinais valem por si:

- o objeto aparece como **inevitável** ou **único** — falta a origem (quem quis isso) ou faltam os
  irmãos (quem mais fez, e como se compara);
- um número central **não tem régua** — faltam os irmãos, e é ali que a escala vira sentido;
- o objeto foi contado **só por quem o defende** — falta o terreno, e falta quem paga a conta rio
  abaixo.

**A régua de fonte não afrouxa porque a informação é "contexto".** Primária sozinha, ou duas
independentes: o nó do campo entra sob a mesma exigência do fato do título. O erro típico é o objeto
chegar todo com fonte aberta e o campo vir de cabeça — e é justamente no campo que moram as
afirmações que o ouvinte não tem como conferir. A frase que liga o objeto ao nó também é afirmação:
ou tem fonte do elo, ou entra atribuída.

**Como se sabe que há material para meia hora, antes de escrever.** Não é contagem de nós. Leia a
lista das direções que você abriu e responda duas perguntas:

1. **Depois de cada uma delas, o objeto do título significa outra coisa?** Direção que não muda nada
   é curiosidade enfileirada; ela não sustenta capítulo, e nenhuma frase de ligação a salva.
2. **A lista chega ao fim do vídeo, ou ela acaba antes?** O sinal de que falta campo não é um número:
   é você perceber que, para chegar ao fecho, teria de dizer a mesma coisa de outro jeito. **No
   instante em que a resposta honesta é "eu reexplicaria", a apuração não terminou** — e o defeito
   não é o tema ser pequeno.

**"Não achei" é resposta válida, e é informação — quando é declarada.** A direção que você caminhou
e encontrou seca entra no dossiê **nomeada**, com onde você procurou e o que concluiu. Direção que
você não caminhou é silêncio, e silêncio se lê como "não há nada ali": alguém deixa de escrever o
melhor capítulo do vídeo por causa de uma linha que ninguém escreveu.

## 4 · Como se afirma

- **Fato ≠ hipótese.** O especulativo entra atribuído ("segundo os autores"); tema controverso leva
  os dois lados. Números que divergem não se cravam — use a formulação que sobrevive ("mais de
  quarenta") e registre a divergência.
- **O sujeito do número é parte do número.** Audite o que a fonte diz que ele MEDE (total × parte,
  conjunto × componente, o recorte da janela). Quem CITA não é quem AFIRMA: número achado dentro de
  artigo se segue até o produtor. Alegação de parte entra com dono; coletivo anônimo não lava
  superlativo — nomeia-se o veículo e narra-se a condição.
- **Elo causal precisa de fonte DO ELO** — ou entra como leitura atribuída. A frase-dobradiça que
  liga dois capítulos passa pelo mesmo teste de uma afirmação: *o que o texto acabou de estabelecer
  sustenta isto?* A costura se faz pelo elo forte, não pelo narrativamente conveniente.
- **Fato que caduca entra como piso ou instância datada.** Grandeza que só cresce: "mais de X",
  nunca "quase X". "Só uma vez na história" vira "pela primeira vez em [data]". Todo volátil leva
  `[⚠️ ATUALIZAR ANTES DE GRAVAR]` nomeando **as duas direções** — o que faz crescer E o evento que
  zera ou reverte; na véspera, a checagem se faz na GRANDEZA (a série, o boletim), não na última
  notícia. Aproximação não vira piso ("~6%" não é "passa dos 6%").
- **Aritmética interna fecha.** Antes de "a conta real é maior", pergunte: as duas medem a MESMA
  grandeza? Superlativo de série se confere na série, não na manchete.
- **Tese de ausência ("não existe mais X") se verifica primeiro** — é a mais fácil de refutar com
  uma manchete e a mais cara quando é a espinha.
- **A honestidade sobre limites é virtude dita uma vez POR DÚVIDA.** "Essa fama é contestada", com
  peso, e segue. Não conte poréns: a pergunta é se cada ressalva é uma dúvida NOVA ou a mesma dúvida
  vestida outra vez — a mesma repetida já soa como o texto se elogiando pelo próprio rigor. Dúvida
  levantada é dúvida resolvida ou isolada, e o ato final fecha no chão firme, nunca na ressalva.
  Tema genuinamente disputado carrega quantas ressalvas a disputa tiver; o que ele não carrega é a
  mesma ressalva três vezes.

## 5 · A auditoria (obrigatória, com lista)

Afirmação por afirmação: ✅ verdadeiro · ⚠️ ressalva registrada · ❌ impreciso. **❌ não sobra**
(corrige ou corta), e a ressalva propaga para TODA instância da alegação no texto. A lista mora em
`roteiro.json.auditoria.afirmacoes[]` — `{ afirmacao, veredito, fonte, tier, url, nota }` —, o placar
é derivado dela, e toda afirmação auditada existe literalmente no texto narrado (lista de memória
reprova no gate). Toda citação entre aspas entra com URL + o trecho original colado: aspas sem
lastro é ❌, não ⚠️. O dossiê é espelho do texto, não intenção — se descreve uma ressalva que a
narração não contém, o defeito é o dossiê.

A narração é idêntica entre `roteiro.md` e `roteiro-editor.md` (o gate faz o diff), e revisão
assina o que FICA, não só o que muda: o dado herdado que atravessa cinco passes sem conferência é o
erro mais caro, porque cada passe parece uma confirmação.
