# Pauta de pessoas: vídeo 8 (`australia-animais`), passo `research`

Gravada pelo `pesquisa-pessoas` em 19/11/2026, por volta das 00:5x (Brasília). Os dados estão em `pauta-pessoas.json`, ao lado.
O contrato `pauta-pesquisa` saiu 0. O `qc-procedencia australia-animais` saiu 1 com "sem NADA auditável", porque em `_media/` ainda só
existe o master. Não é reprovação, e a explicação está no fim.

## O pedido

O espelho r2 (`out/australia-animais/espelho.json`, sha256 `833aaa75…`) só pede pessoa em duas cenas, as duas de Kevin Arbuckle:

| Cena | Planos | O que a cena pede | Sem retrato |
|---|---|---|---|
| s19 (147,73–167,70 s) | P1 o retrato pousa; P2 o nome e o cargo; P3 e P4 as falas no cartão | o card de pessoa (identidade §5) | nome e cargo |
| s67 (858,00–879,13 s) | P1 o card volta; P2 "scientific capital" e "excellent infrastructure" | o card de pessoa | nome e cargo |

## O resultado

**Nenhum retrato foi entregue.** Não gravei nada em `_media/pessoa/`, então o `conferente-de-midia` não tem arquivo para julgar.

| Pessoa | Ano do fato | Retrato | Na tela |
|---|---|---|---|
| Kevin Arbuckle | 2023 (a Live Science, 26/11/2023) | nenhum em fonte aprovada; o da Swansea tem a reprodução vetada e não tem data | o card só com nome e cargo: `KEVIN ARBUCKLE` e `Associate professor of evolutionary bioscience, Swansea University` (a forma final é do redator) |

### Onde procurei

- **Commons**, pela API: buscas por "Kevin Arbuckle", por título, pela categoria, pelo "retrata" (P180) do item do Wikidata, por
  "Arbuckle Swansea" e por "Arbuckle venom". Não há nenhuma foto dele. O único arquivo com o nome é um PDF de um artigo dele.
- **Wikidata**: o item é Q46267271 (herpetólogo, biólogo evolutivo, Swansea University, ORCID 0000-0002-9171-5874). Não tem imagem
  (P18) nem verbete na Wikipedia. A **Wikispecies** só tem um ícone.
- **Swansea University**: a página dele tem um retrato, e está no item abaixo. Na nota de imprensa de 2020 em que ele aparece, a única
  foto é de uma cobra.
- **Busca na web** (3 consultas): uma entrevista num site comercial e um perfil de evento de 2014. Nenhum dos dois é fonte aprovada,
  e não foram lidos.

### O retrato da Swansea (registrado, não baixado)

- **A página:** https://www.swansea.ac.uk/staff/kevin.arbuckle/
- **A imagem:** `https://intranet.swan.ac.uk/staffphoto/photoapi/staff-profile/kevin.arbuckle/`, com o alt "Dr Kevin Arbuckle".
- **A data:** a página não tem nenhuma.
- **A licença:** está em https://www.swansea.ac.uk/disclaimer-and-copyright/, lida em 19/11/2026:
  > "Photographs and other images appearing on the University webserver have varying copyright. They are explicitly for use only on
  > web pages published on the University webserver. For details on individual images please contact the Web Office. Images must not
  > be reproduced without permission being granted in advance."
- **O que falta para entrar:** o sim do Lucas à fonte e, da própria Swansea, a permissão prévia por escrito e a data da foto. Sem data
  na origem, o retrato não entra (midia §7.2).

## O cargo e a data, conferidos

| O quê | O texto | A data | A fonte |
|---|---|---|---|
| O cargo na fala (vai ao card) | "an associate professor of evolutionary bioscience at Swansea University in the U.K." | 26/11/2023 | Live Science (cópia local `c/livescience-why-venomous.html`) |
| O cargo de hoje | "Associate Professor", "Biosciences" | lido em 19/11/2026; a página não diz desde quando | swansea.ac.uk/staff/kevin.arbuckle/ |
| O cargo anterior (não vai à tela) | "Senior Lecturer in Biosciences (Evolutionary Biology)" | 26/03/2020 | a nota de imprensa da Swansea |

- **O posto é o mesmo de 2023 a hoje.** O card mostra o da fala. Pôr o "(2023)" no fim do cargo fica a critério do redator.
- **A data da fala** é a da matéria: 26/11/2023, às 10:00 UTC. As falas vieram por e-mail ("he told Live Science in an email"), e a
  matéria não dá a data do e-mail.
- **A grafia** é `Kevin Arbuckle` na matéria, na Swansea e no Wikidata.
- **É a pessoa certa:** o herpetólogo de Swansea que estuda veneno ("toxic weaponry of animals such as venoms and poisons", na página
  dele). O Wikidata não tem homônimo. Os "Arbuckle" do Commons são outras pessoas e lugares.

## Para o redator-de-tela e o verificador-de-fatos

- **A credencial:** a voz diz "an evolutionary biologist", e a tela leva a da fonte. Se o cargo inteiro não couber, "Associate
  professor, Swansea University" continua sendo o da fonte.
- **O cartão de s19 P4:** a frase literal tem 14 palavras ("Its venomous animal diversity is not unusual at all for a largely tropical
  area"). O corte fiel para 12 é do redator.
- **s67 P2:** a frase é da jornalista. Só "scientific capital" e "excellent infrastructure" são palavras dele.

## Fora do pedido

- Nenhuma logo da Swansea University (midia §7.6): vai só o nome escrito.
- Michael Lee e Dieter Hochuli, da mesma matéria, não têm card no espelho. Não procurei retrato deles.

## Os portões

| Portão | Resultado |
|---|---|
| `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/validar-contrato.mjs pauta-pesquisa out/australia-animais/_pesquisa/pauta-pessoas.json` | `✓ válido`, exit 0 |
| `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/qc-procedencia.mjs australia-animais` | exit 1, "RECUSADO — sem NADA auditável": 1 item em `_media/`, o master, isento. Ainda não há mídia de acervo, e este shard não entregou arquivo. Não é reprovação deste shard. |
| ffprobe, o limite de 40 MP e a visão | não se aplicam, porque nenhuma imagem foi entregue |
