# `sala/motor-sem-rosto.md`, da Sala de controle

Veio do `CLAUDE.md` na divisão do CLAUDE.md enxuto, palavra por palavra (o mapa: `out/_modelos/md-enxuto/mapa-de-linhas.json`). O núcleo, com o índice, é o `CLAUDE.md`; o completo de antes, `sala/CLAUDE-completo.md`.

O motor sem rosto do Top10: o piloto, o pacote `estudio/`, as respostas do Lucas e o que muda.

## O motor sem rosto do Top10 (desde 24/10/2026, com o vídeo 5 como piloto)

**O piloto passa à Passagem de Drake, o vídeo 5 na numeração nova** (Lucas, 28/10/2026, 02:2x, no chat da Sala: "Vamos continuar
esse vídeo com nosso motor. O Top10 entra no próximo"). O vídeo 4 (`atlantico-fundo`) sai no jeito de hoje: a narração pela API, o
relógio, a linha da Régie, os setores, a linha do tempo e o Premiere. O que esta seção diz do "vídeo 5" foi escrito na numeração
antiga e falava do Atlântico ("A numeração dos vídeos", no topo):
- vão para o piloto da Drake as respostas de 24 e 25/10 sobre o motor: a trilha automática, sem banco no piloto, as conferências
  por fora, a palavra dele nos portões, a nuvem, o PC 24 h, as duas contas Claude, o relógio, o YouTube e o veto da trilha;
- ficam com o Atlântico: a aprovação do roteiro (27/10, 02:40), os nomes ouvidos (27/10, 13:1x), o MapTiler liberado como no Peru
  (com o contador anotado a cada render, em `out/atlantico-fundo/_pesquisa/maptiler-gasto.md`) e o crédito a 60 px, que a
  identidade registra do Atlântico em diante. A caça nos bancos volta, se a lista de mídia pedir, e a trilha sai pela lista da
  Epidemic com o "sim" dele;
- deixam de valer no Atlântico: o texto do portão (`roteiros/atlantico-fundo/motor/roteiro-portao.md` fica como registro) e os
  números em algarismos na voz, cujo motivo era o motor não ter cópia para a voz. A voz do Atlântico lê a cópia com os números por
  extenso (`out/atlantico-fundo/roteiro.md`), como nos vídeos 1 a 3.

**A decisão.** O Lucas, 24/10/2026, depois de publicar o Peru: "Lembrando também que para o próximo temos algumas coisas novas no
github". A novidade é o motor sem rosto do `top10-company/top10-estudio` (a skill `motor-sem-rosto`). À pergunta "Como fazemos o vídeo
5?", ele respondeu **"Vídeo 5 no motor"**. A opção dizia: "Eu monto o pacote agora, o Top10 instala a máquina, e o vídeo 5 sai pelo
motor. Você aprova pauta, roteiro, título e capa; a linha do tempo e o Premiere deixam de existir."
- **O que é:** um motor que roda num WSL deste PC (uma distro só dele, `C:\estudio\`, um cofre de chaves por canal), operado pelo Top10
  por SSH. Um relógio o conduz a cada 5 min: a narração, o relógio, o espelho, a pesquisa, a direção, a regência, os textos, a arte e o
  QC, o render, a trilha, o master (sem Premiere), o título e a capa, e o envio privado ao YouTube.
- **Os portões** são quatro: pauta, roteiro, título e capa, e publicar. Cada um só abre com a palavra do Lucas no chat da Sala.
- **As contas:** a ElevenLabs e o depósito R2 são do Top10. O Claude, a Epidemic, a MapTiler e o YouTube são do Lucas.
- **O pacote do canal** é `estudio/`, no repositório. O Mateus Souza o fez em 21–22/10, e a Sala o pôs em dia em 24/10 (commit
  `a035245`): `canal.json`, `canal-motor.json`, a roupa em `estudio/marcas/alpha-point/`, as peças do master, a paleta da trilha e a
  semente da marca.
  - O que o Lucas faz para a máquina está em `estudio/PASSOS-DO-LUCAO.md`. Começa só quando o Top10 avisar que `C:\estudio\maquina\`
    existe. Em 24/10, nada do motor estava instalado neste PC.
  - O estudo do motor e o relato do pacote estão em `out/_maquina/motor-sem-rosto/` (`requisitos.md` e `pacote-24-10.md`), fora do
    git.
- **Instalar não é da Sala:** o WSL, os usuários, as tarefas agendadas, o cofre, as permissões e o `-Ligado24h` são do Lucas e do
  Top10.
- **A Sala não edita o motor**, como não edita a Régie. O pacote `estudio/` é do canal: a Sala o mantém, e o
  `node estudio/conferir-copias.mjs` confere a semente e a roupa contra `marca/`.

**As respostas do Lucas (24/10/2026, das 17h às 19h, no chat da Sala):**
- **A trilha:** "Automática, pelo roteiro". Um agente lê o roteiro e escreve o clima de cada trecho; o motor escolhe pela ficha da
  Epidemic e baixa da conta do Lucas, sem lista. Nenhuma IA ouve a música, como a licença pede.
  - As prévias baixadas por programa, só para medir o volume: "Pode (Recomendado)". Elas vêm pela mesma API, pelo link que a busca
    devolve, e nunca pelo site. Isso vale só para o motor; no jeito de hoje, continua "A trilha: Epidemic Sound", abaixo.
- **Os bancos pagos:** "Sem banco no piloto (Recomendado)". A cena que só teria footage de banco sai em "versão pronta", que o Lucas vê
  nomeada antes de publicar.
- **As conferências:** "Faço as que dá (Recomendado)". O motor não tem a checagem de fatos nem a revisão de espectador do canal. A Sala
  faz as duas por fora:
  - a checagem do roteiro, por cobertura, antes do portão `roteiro`;
  - a revisão de espectador do vídeo pronto, com cético, antes de o Lucas publicar.
- **As aprovações:** "Só com a sua palavra (Recomendado)". O Mateus entra como `operador`: o motor recusa a aprovação dele sem a fala do
  Lucas (`--fala`). O motor não confere que a fala é dele, e por isso a Sala só passa adiante o "sim" que o Lucas deu no chat dela.
- **O crédito:** "60 px (Recomendado)", que é o piso do motor (`marca/identidade.md` §4.1). Os vídeos 2 a 4 ficam com 56.
- **A nuvem:** "Só o do motor (Recomendado)". A `midia/` e o histórico dos vídeos 1 a 4 ficam só neste PC (regra 3, "O bruto não
  viaja"). O `backup-r2-canal.ps1` não roda sobre `C:\projetos\alpha-point` sem decisão nova.
- **O PC:** "Sim, 24 h (Recomendado)". O passo 1 vai com `-Ligado24h`.
- **As contas Claude:** "As duas" (a principal e a de reserva, `portas: 2`), e o plano: "As duas Max 20x".
- **O relógio:** fica o do canal (`ingest-local.py`, portado), com o Scribe pago da ElevenLabs de reserva ("Fica o Scribe
  (Recomendado)"). A conta da ElevenLabs no motor é a do Top10.
- **O MapTiler do vídeo 5:** "Sim, como no Peru (Recomendado)" ("Peças da pré-v1 em uso", item 7).

**O que muda no vídeo 5:**
- **Saem do caminho:** a linha do tempo pré-render, o XML do Premiere, a caça nos bancos e os portões do canal (M6, conferente,
  `qc-cena`). Quem julga as cenas é o `qc-visual` do motor, com a roupa do canal.
- **Continua com a Sala:**
  - o roteiro, escrito aqui, como sempre ("Os modelos");
  - a checagem dos fatos do roteiro e a revisão de espectador do vídeo pronto;
  - o título e a miniatura (`marca/embalagem.md`);
  - a descrição;
  - o "sim" do Lucas em cada portão.
- **O que o motor ainda não faz como o canal**, para o Top10: o `_obra/R2.json` da obra, o modelo e o esforço por papel (o motor
  fixa os dele), o satélite das cenas de mesa e os 15 s entre pedidos à Epidemic (`pacote-24-10.md`, §7).
- **O Juneau fica arquivado** (Lucas, 24/10/2026, à pergunta "O Juneau tem o XML pronto desde 07/10 e nunca foi publicado. O que
  fazemos com ele?": "Arquivar"). Ele fica guardado como está, neste PC, sem publicar. No banco da Régie, a linha dele continua parada
  no `finalize`: a v0.1.0 não tem verbo de arquivar.
- **O YouTube no motor** (`estudio/marcas/alpha-point/publicacao-youtube.json`; `PASSOS-DO-LUCAO.md` §6):
  - a categoria é Educação (27): "Educação (Recomendado)" (24/10/2026), depois de ver que 4 dos 5 canais de referência a usam;
  - o "conteúdo alterado ou sintético" fica desmarcado: "Deixar desmarcado (Recomendado)". O Lucas não o marcava, e o YouTube só o
    pede em conteúdo realista (support.google.com/youtube/answer/14328491);
  - nenhum e-mail de contato na descrição: "Nenhum, como hoje" (25/10/2026);
  - a monetização fica `desligada`: à pergunta "O Alpha Point já está no Programa de Parcerias do YouTube (com anúncios)?", "Ainda
    não" (25/10/2026). Quando o canal entrar, ela passa a `ligada`, com a palavra dele.
- **O veto da trilha** (`estudio/musica/paleta.json` › `moods_evitar`): "Vetar festivos e agitados (Recomendado)" (25/10/2026). O
  motor nunca escolhe alegre, eufórico, excêntrico, brincalhão, glamoroso, romântico, raivoso, de perseguição nem frenético. Os tensos
  (suspense, sombrio) continuam. A música com voz o motor já tira.
- **A porta do roteiro:** `node ferramentas/roteiro-motor.mjs converter <proj>` converte o roteiro ao formato do portão do motor, e
  `conferir <arquivo>` confere as regras dele. A prova (`ferramentas/roteiro-motor-provar.mjs --clone=<clone do top10-estudio>`) deu
  85 de 85, com o validador do próprio motor. O relato está em `out/_maquina/motor-sem-rosto/porta-roteiro-relato.md`.
- **Os números na voz do vídeo 5: algarismos** (Lucas, 27/10/2026, 02:40, no chat da Sala: "Sim, aprovo (Recomendado)"). A opção
  dizia: "Aprovo o roteiro como está (…) e os números em algarismos". O motor não tem cópia para a voz, e o texto do portão é o que a
  voz lê e o que toda etapa lê como o roteiro.
  - Por isso o portão recebe o `roteiro-narrador.md` (`converter <proj> --de=narrador`, o padrão), e não a cópia com os números por
    extenso.
  - A amostra do v4, na voz e nos ajustes do motor, leu os 66 algarismos certo. O registro está em
    `out/atlantico-fundo/_pesquisa/narracao-conferencia.md`.
  - O texto do portão do vídeo 5 é `roteiros/atlantico-fundo/motor/roteiro-portao.md`, e a aprovação está no dossiê do roteiro.
  - Os vídeos seguintes no motor pedem a pergunta de novo.
- **O jeito de hoje** (a linha da Régie, os setores, a linha do tempo, o Premiere) continua para o que não for o vídeo 5, até o Lucas
  aprovar o piloto.
