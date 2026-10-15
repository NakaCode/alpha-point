# Pendências de banco pago: Zona do Canal

Escrito pelo `pesquisa-imagens` em 15/10/2026 (tarefa `zona-do-canal-pesquisa-1`, 2ª rodada), pela roupa §4. Aqui estão
só os planos de B-roll genérico de hoje, que o acervo aberto não tem. Evento nomeado, pessoa pública e data não vão a
banco pago (marca/midia.md §1). A ordem dos bancos é Envato → Motion Array → Storyblocks → Shutterstock. A Storyblocks
fica fora deste vídeo, porque o assunto é soberania e política (midia.md §3.3).

As outras cenas seguem sem estes itens. Nada aqui se baixa sem a caça da Sala, pedida pelo Lucas no chat, e sem o "sim"
dele à lista.

## 1. `s01-a`: Balboa e o Administration Building, de hoje, aéreo (cenas s01, s19 e s67)

**Situação:** já está na `out/zona-do-canal/_pesquisa/lista-de-caca.json`. Espera a caça.

- **Duração na tela:** s01 6,2 s; s19 6,9 s; s67 11,6 s (o fecho). Dá para usar 1 ou 2 clipes do mesmo voo
  (`quantos: 2`).
- **Por que é genérico:** é o lugar de hoje, sem data nem evento. O acervo aberto (NARA, Commons, DVIDS e NASA) não tem
  aéreo em 4K de Balboa Heights.
- **Buscas:** `Panama Canal Administration Building` · `Balboa Panama aerial` · `Ancon Hill aerial` ·
  `Balboa Heights drone`.
- **O que tem de aparecer:**
  - aéreo horizontal de Balboa;
  - o Administration Building da Autoridade do Canal, inteiro e legível, na encosta de Balboa Heights;
  - o morro de Ancón atrás;
  - a descrição do item nomeando Balboa, Balboa Heights, o Administration Building ou o morro de Ancón;
  - de preferência, um clipe longo, lento e estável. Para s67, com a bandeira do Panamá diante do prédio.
- **O que se recusa:**
  - editorial;
  - pessoa reconhecível em primeiro plano, ou pessoa falando para a câmera;
  - marca ou logotipo de terceiro legível;
  - propriedade privada identificável como assunto do quadro;
  - gerado por IA;
  - lugar diferente do rótulo (outro bairro da Cidade do Panamá, a Cinta Costera, o Casco Viejo, as eclusas);
  - vertical;
  - abaixo de 3840×2160;
  - marca d'água.
- **Bancos:** envato, motionarray, shutterstock.

## 2. `s64-a`: as eclusas de Miraflores, de hoje (cena s64): ESPERA O OK DO LUCAS

**Situação:** está fora da lista de caça, porque precisa do ok do Lucas. Quem pergunta é a Sala.

- **A frase:** "and an American agency, the Panama Canal Commission, ran the canal until the end of 1999" (741,61–747,41 s,
  janela de 6,2 s).
- **O que já existe:** o conferente aprovou uma foto de época para a s64. É o USNS Comfort saindo das eclusas de
  Miraflores, em 1988 (DoD/NARA 6433742, 2772 px, com o aviso "Photo from 1988"). Ela está entregue em
  `out/zona-do-canal/_media/foto/s64/usns-comfort-departing-miraflores-1988-dod-nara-6433742.jpg`.
  - Com ela, a cena passa de footage a foto. Quem refaz o espelho é o montador.
  - A janela de 6,2 s passa 0,2 s do teto da foto parada, que é 6 s. Resolver isso é do regente.
- **A pergunta ao Lucas:** a s64 fica com a foto de 1988? Ou entra o B-roll de hoje das eclusas antigas de Miraflores?
  O B-roll entraria sem data na tela, porque não é a Commission no tempo dela.
- **Por que é genérico:** é o canal operando hoje, sem evento. A cerimônia de 31/12/1999 não tem footage no acervo
  aberto pela API.
- **Buscas:** `Miraflores Locks ship` · `Miraflores Locks aerial` · `Panama Canal locks` · `Miraflores Locks transit`.
- **O que tem de aparecer:**
  - as eclusas ANTIGAS de Miraflores, não as de Cocolí, de 2016;
  - um navio em trânsito;
  - a descrição do item nomeando Miraflores.
- **O que se recusa:** o mesmo do item 1, mais as eclusas novas (Agua Clara e Cocolí) no papel de Miraflores, e o
  rótulo "1999" sobre um clipe de hoje.
- **Bancos:** envato, motionarray, shutterstock. Quantos: 1. `nome_final`: `miraflores-locks-hoje`.
- **O item pronto para a lista, se o Lucas aprovar:**

```json
{"id":"s64-a","cena":"s64","tipo":"video","plataformas":["envato","motionarray","shutterstock"],"buscas":["Miraflores Locks ship","Miraflores Locks aerial","Panama Canal locks","Miraflores Locks transit"],"tem_de_aparecer":"as eclusas ANTIGAS de Miraflores (não as de Cocolí, de 2016), com navio em trânsito; a descrição do item nomeia Miraflores","recusa":"editorial; pessoa reconhecível em primeiro plano; pessoa falando para a câmera; marca ou logotipo de terceiro legível; propriedade privada identificável como assunto do quadro; gerado por IA; lugar diferente do rótulo (as eclusas novas de Agua Clara ou Cocolí no papel de Miraflores); retrato (vertical); abaixo de 3840×2160; marca d'água","quantos":1,"nome_final":"miraflores-locks-hoje"}
```
