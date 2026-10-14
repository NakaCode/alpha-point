# O ilustrador do editor de arte: ilustração narrativa v1.4.0

Este ZIP traz a habilidade `ilustracao-narrativa`, que o editor de arte do canal Alpha Point usa para construir peças
ilustradas que agem: objeto pendurado ou preso, queda, encaixe, abertura, mecanismo, líquido, mão e corpo. Ela cuida da
proporção, da perspectiva, das articulações, dos contatos e da física do movimento. Não é um editor novo nem uma etapa
nova: o editor continua dono da cena (direção, composição, câmera, tempo, textos, créditos e render).

## O que tem aqui

- `ilustracao-narrativa-v1.4.0/`: o pacote como foi distribuído, arquivo por arquivo: os 164 arquivos que o `MANIFESTO.json`
  lista, mais o próprio manifesto.
- `LEIA-ANTES.md`: esta nota, com o caminho que o Alpha usou e o que aprendeu no uso.
- `PEDIDO-PARA-O-CLAUDE.md`: a mensagem pronta para colar no Claude Code do seu projeto. Ela faz a integração passo a passo
  e pede o seu ok antes do commit e do piloto.
- `COMPARTILHAMENTO.json`: o que entrou neste ZIP, o sha256 de cada arquivo e o resultado da verificação.

Nada do Alpha além do pacote vem junto: nem marca, nem cenas, nem mídia, nem chaves. Mas o pacote foi feito para o Alpha,
e isto vem dentro dele:

- **Os documentos dizem "o Alpha".** Leia "o seu projeto".
- **`INSTRUCOES-PARA-CLAUDE.md` e o passo 3 do `LEIA-PRIMEIRO.md` foram escritos para o Alpha integrar o pacote.** Não os
  entregue ao seu Claude: eles mandam ajustar a roupa e os hashes do Alpha. Use o `PEDIDO-PARA-O-CLAUDE.md` deste ZIP.
- **O `GUIA-INTEGRACAO.md` também fala com o Alpha** (Régie, agent-core, o commit do Alpha). O mapa do §3 dele põe o núcleo
  direto na raiz do projeto, sem a pasta `ilustracao/`. É outro caminho possível, mas esta nota segue o do Alpha (§2).
- **As cores das demonstrações são as do Alpha**, usadas como cor de prova (`roupa-demo.css`, `paleta-teste.css` e os HTML
  das bancadas): não as adote.
- **`adaptadores/alpha-point/` é a roupa do Alpha, e está desatualizada até para ele.** Ela fica no ZIP só porque a
  verificação do pacote conta todos os arquivos. Não a copie.
- **Os estudos de cor e sombra e de texturas** citam arquivos da marca do Alpha (`marca/identidade.md` e outros), que você
  não tem. O método vale; os caminhos, não.
- **`__renderAt(t)` é o gancho de tempo do Alpha.** O contrato do pacote pede "o hook indicado no pedido": use o do seu
  projeto.
- **"Lucas" é o dono do Alpha.** Onde um estudo diz "aceite de Lucas pendente", a pendência é dele, não sua.
- **Documento que cita arquivo ou valor do Alpha que não veio** (o "perfil Alpha" do `ROUPA.md`,
  `propostas/integracao-ilustrador.md` no `USO.md`, valores de exemplo em `contratos/`): ignore. Vale o seu projeto.

## 1. Confira o pacote antes de usar

De dentro de `ilustracao-narrativa-v1.4.0/` (Python 3.10 ou mais novo; o Node é opcional):

```
python -X utf8 -B verificar-pacote.py --com-node
```

O `-X utf8` evita os acentos quebrados na saída do Windows; o resultado não muda sem ele.

O verificador confere o sha256 de cada arquivo e as referências internas, e roda os testes dos validadores e as auditorias
dos estudos numa cópia temporária. O esperado é `"status": "PASS"`, com **22 verificações**. Foi conferido no Windows, com
Python 3.14 e Node 24.

Sem o Node, rode sem a opção. Sai `PASS` com 9 verificações: as 13 auditorias em JavaScript não rodam, e o relatório só as
lista em `opcionais_nao_solicitados`. Não confunda esse PASS com o de 22. O resultado diz que os arquivos estão íntegros,
não que o desenho é bom.

## 2. Como pôr no seu projeto (o caminho do Alpha)

1. **Copie tudo que está dentro de `nucleo/` para uma pasta `ilustracao/` na raiz do projeto, inclusive a pasta oculta
   `.claude/`.** O comando muda com o terminal, e o errado não dá erro:
   - Git Bash, Linux ou macOS: `cp -r nucleo/. <projeto>/ilustracao/`. O `nucleo/*` deixaria a pasta oculta de fora.
   - PowerShell: crie a pasta antes e copie para dentro:
     `New-Item -ItemType Directory -Force <projeto>\ilustracao | Out-Null; Copy-Item -Path nucleo\* -Destination <projeto>\ilustracao -Recurse`.
     Lá, o `cp` é outro comando: com a pasta já criada, `cp -r nucleo/. ilustracao/` cria `ilustracao/nucleo/`, e todo
     caminho fica errado.
   - **Confira depois:** 100 arquivos em `ilustracao/`, `ilustracao/habilidades/ilustracao-narrativa/SKILL.md` existe e
     `ilustracao/nucleo/` não existe.
   - Os caminhos que a habilidade cita têm duas bases. `references/…` é relativo à pasta da habilidade
     (`ilustracao/habilidades/ilustracao-narrativa/`). `knowledge/ilustracao/…`, `contratos/…`, `ferramentas/ilustracao/…` e
     `laboratorio/estudo-…/` são relativos a `ilustracao/`.
   - **Os 100 ou só 80.** O Alpha deixou no pacote 20 arquivos (vitrine, bancada, histórico de revisão e o agente opcional)
     e copiou os outros 80. A lista está em `COMPARTILHAMENTO.json` › `alpha_deixou_fora_do_projeto`. Os dois jeitos
     funcionam:
     - com os 100, 8 links das vitrines (`caderno-estudos.html`, `movimento-fisica.html` e
       `laboratorio/movimento-fisica/pagina.html`) apontam para fora de `ilustracao/` e ficam quebrados;
     - com os 80, 5 links de documentação apontam para os arquivos que ficaram no pacote.
     - Nenhum desses links é código, e a habilidade não depende deles.
   - **O agente opcional.** Com os 100, ele vem em `ilustracao/.claude/agents/`, mas só vale se você o puser onde o seu
     projeto carrega agentes. O Alpha não o ligou: o editor aplica a habilidade direto. Ligue só se precisar delegar uma peça
     complexa.
   - **Os testes do núcleo.** Depois de copiar, entre em `ilustracao/` e rode
     `python -B -m unittest discover -s laboratorio/testes -v`. Devem passar 47 testes. Os comandos de
     `ferramentas/ilustracao/USO.md` também rodam de dentro de `ilustracao/`.
2. **Ative a habilidade: copiar não ativa.** Uma pasta chamada `habilidades` não é descoberta sozinha. Ponha nas instruções
   do seu editor de arte (o ofício, o CLAUDE.md ou o que o seu projeto usar) um trecho como o modelo abaixo. A ativação só
   está provada quando o editor, numa cena real, escreve no cabeçalho o arquivo e a linha da habilidade que aplicou.
3. **Faça a roupa do seu projeto** pelo `ilustracao/knowledge/ilustracao/ROUPA.md`. Cores, fontes, créditos, idioma e áreas
   seguras vêm da sua marca, nunca do pacote.
   - **O modelo** é `exemplos/contratos/roupa/perfil.json` do pacote, de uma marca fictícia, a "Oficina Clara". Copie-o
     para, por exemplo, `marca/roupa-ilustrador.json`.
   - **O que ele pede:**
     - os documentos da marca e um CSS de tokens, cada um com o sha256;
     - o idioma da tela e o palco;
     - 9 papéis de cor: `fundo`, `superficie`, `papel`, `tinta`, `tinta_papel`, `contorno`, `protagonista`, `contraparte` e
       `risco`;
     - 4 papéis de tipografia, com piso, alvo e teto: `heroi`, `rotulo`, `legenda` e `credito`;
     - 3 áreas: `conteudo`, `credito` e `reservadas`;
     - 3 limites: `elementos`, `blocos_leitura` e `herois`.
   - **Se a marca não tem um CSS de tokens,** crie um só com os valores dela.
   - **O que a marca não decide, pergunte de uma vez ao dono.** O `ROUPA.md` proíbe escalar fonte de um formato para outro.
   - **Valide**, de dentro de `ilustracao/`. O perfil é relativo à `--raiz`:
     `python -X utf8 -B ferramentas/ilustracao/validar-cena.py roupa marca/roupa-ilustrador.json --raiz ..`
   - **Se o Git do projeto converte fim de linha** (`core.autocrlf`), o sha256 dos documentos muda no checkout. Marque-os
     com `-text` no `.gitattributes`, ou recalcule.
4. **Confira os validadores com o exemplo do pacote.** A pasta `exemplos/` não entra no projeto: copie
   `exemplos/contratos/` para uma pasta de teste na raiz (por exemplo, `teste-contratos/`, apagada depois) e rode, de dentro
   de `ilustracao/`:

   ```
   python -X utf8 -B ferramentas/ilustracao/validar-cena.py roupa roupa/perfil.json --raiz ../teste-contratos
   python -X utf8 -B ferramentas/ilustracao/validar-tecnica.py pedido pedido-tecnico.json --raiz ../teste-contratos
   python -X utf8 -B ferramentas/ilustracao/validar-tecnica.py entrega entrega-tecnica.json --raiz ../teste-contratos
   python -X utf8 -B ferramentas/ilustracao/validar.py ../teste-contratos/manifesto-svg.json
   ```

   Os quatro devem sair 0 com `"estado": "passou"`. O `README.md` desse exemplo ainda fala em `v1.1.0` e em `nucleo/`:
   valem os caminhos acima.
5. **Faça um piloto** numa cena que já existe: uma peça só, a mesma direção, a mesma fala e os mesmos tempos, com o antes e
   o depois lado a lado (`GUIA-INTEGRACAO.md`, §5).

Para ver as demonstrações (mecanismos, maleta, movimento e física, caderno de estudos), sirva a pasta do pacote por HTTP
local e abra o `index.html`:

```
python -m http.server 8000 --bind 127.0.0.1
```

### Modelo de trecho para as instruções do editor

> **Ilustração narrativa.** Em toda cena com uma peça construída que age (objeto pendurado ou preso, queda, encaixe,
> abertura, mecanismo, líquido, mão, corpo):
> - antes de construir a peça, leia inteiros `ilustracao/habilidades/ilustracao-narrativa/SKILL.md` e
>   `ilustracao/knowledge/ilustracao/CONSTRUCAO.md`. Pelo
>   `ilustracao/habilidades/ilustracao-narrativa/references/movimento-fisica.md`, leia só o estudo do fenômeno, o
>   `ilustracao/laboratorio/<estudo>/ESTUDO.md`:
>   - `estudo-geometria`: a forma antes de animar, a projeção, a oclusão e o contato (porta, pistão, roda);
>   - `estudo-dinamica-objetos`: queda, impacto e quique, atrito e repouso, torque e carga suspensa;
>   - `estudo-liquidos`: água em recipiente;
>   - `estudo-agua-interacao`: objeto na água;
>   - `estudo-fisica-espacial`: órbita e disco;
>   - `estudo-movimento-corporal`: apoio e caminhada;
>   - `estudo-anatomia`: o corpo e a mão que segura;
>   - `estudo-maos-movimento`: mão, dedos e punho;
>   - `estudo-cor-sombra` e `estudo-texturas`: o acabamento;
> - aplique o contato e o pivô no lugar físico (o fio entra no furo, a porta gira na dobradiça), a oclusão certa, a
>   proporção e **um executor por transformação**;
> - a cena continua sua: se a peça pedir outra composição, não a mude, e diga no relato;
> - quando a física e o texto parado na leitura brigam com a "vida", vencem a física e o repouso. Nunca use balanço que
>   não amortece nem peça que finge estar presa;
> - no cabeçalho da cena, escreva o que aplicou (arquivo e linha) e o que fica fora da prova do pacote:
>   - **a mão v003 é experimental: nunca como padrão aprovado**;
>   - os módulos de movimento e física são experimentais no pacote até o dono deste projeto aceitá-los: ao usar, declare;
>   - pêndulo e carga suspensa são "exercício futuro" (`ilustracao/laboratorio/estudo-dinamica-objetos/ESTUDO.md`, §7);
> - o gancho de tempo deste projeto é `<o gancho do projeto>`. Onde o pacote diz `__renderAt(t)`, que é o do Alpha, use
>   este. Se o projeto não tiver um, pergunte ao dono antes da primeira cena;
> - a medida que prova o contato vem do DOM ou dos quadros renderizados, nunca da fórmula do próprio código;
> - a marca vence o pacote: cor, fonte, crédito e áreas seguras vêm da roupa do projeto.

### Modelo do que o QC faz

O QC julga pela `SKILL.md` ("Julgar a entrega") e pelo `CONSTRUCAO.md` ("Revisão visual"), em `ilustracao/`:

- **Reprova:** fio que não chega ao furo, objeto que gira fora do ponto de contato, oclusão trocada, mão que não toca o que
  segura e balanço que não amortece.
- **Sinaliza:** a medida de contato que só repete a fórmula do código. Ela não vale como prova, e a prova tem de vir do DOM
  ou dos quadros.
- **Não é defeito:** o objeto que quase não se move, para o texto ficar parado enquanto se lê. É a escolha da física com
  repouso.

## 3. O estado de cada parte

- **O pacote** chama de experimentais os módulos de movimento e física e a mão v003. Nele, nada tem aceite de QC oficial.
- **No Alpha Point**, o dono do canal aceitou os módulos de movimento e física como método em 12/10/2026, depois de vê-los
  em 5 cenas de um vídeo do canal: "com exceção da mão, acredito que as outras partes podem deixar de ser experimentais".
  **A mão v003 continua experimental**: nunca como padrão aprovado. Esse aceite é do Alpha. O seu projeto decide o dele.
- **Pêndulo e carga suspensa** são conhecimento e "exercício futuro", não prova entregue
  (`nucleo/laboratorio/estudo-dinamica-objetos/ESTUDO.md`, §7).

## 4. O que o Alpha aprendeu no uso

1. **A física certa e o texto parado na leitura podem apagar a "vida" da cena.** No piloto, uma etiqueta de preço pendurada
   num fio passou a entrar no furo e a girar no ponto de contato. Só que o período do pêndulo, a 2,8 s, e o texto parado
   antes de a voz o ler só cabiam juntos com o balanço quase zerado: de ±3° para 0,43°. A etiqueta pareceu parada por uns
   2 s. Antes de pôr física num objeto que carrega texto, conte o período e o amortecimento contra o tempo de leitura. Se não
   cabem, é decisão de direção: leve o antes e o depois a quem decide, cedo, em vez de "ajustar" a física.
2. **A medida que prova o contato vem de fora do código que desenha.** O editor mediu "fio a 20,00 px do furo em todos os
   quadros" pelo próprio código, que calculava o fim do fio a partir do furo: a medida repetia a fórmula e não provava nada.
   Quem provou foi um verificador pelo DOM (`getBoundingClientRect`, `elementFromPoint`) e pelos quadros do vídeo.

E uma regra que o pacote já traz (`SKILL.md`, "Roupa e integração") e que o Alpha confirmou em outras cenas: **a margem se
mede na tela, sob a câmera, durante a animação inteira**. Conte a espessura do traço, as articulações nos extremos e o
movimento de entrada. Uma pose inicial dentro da margem não prova que o resto cabe.
