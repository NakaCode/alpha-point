# Laudo de fatos da descrição do YouTube, vídeo 3 (15/10/2026)

O `verificador-de-fatos` (Opus), em duas rodadas, dentro do workflow da Sala `wf_1315b437-8dd`, sobre `out/zona-do-canal/descricao-youtube.md`.
Este arquivo é a cópia literal do que ele devolveu (o resumo e cada achado com o conserto), gravada pela Sala, porque o verificador não tem `Write`.

## Rodada 1 (o rascunho)

COBERTURA: 68 de 68 afirmações, com a lista feita à mão (o canal não tem extrator para a descrição), conferida contra o texto aprovado, os laudos de fatos, o dossiê e as cópias locais das fontes.

**O que entrou na conta:**
- a abertura das duas versões: 10 afirmações;
- a linha de 1979: 9 afirmações;
- os 8 capítulos, com título e tempo;
- a pergunta;
- as 19 linhas de fontes;
- os 3 mapas antigos com o número do item, e o Natural Earth;
- as 6 coleções de imagens;
- os créditos de mapa, Copernicus e AWS;
- as 4 faixas de música e o link.

**O resultado:** 64 passam, 4 têm achado no texto público. Mais 3 erros nas notas internas do rascunho, que não vão ao YouTube. Data-base: 15/10/2026. Não precisei da web: as fontes locais bastaram, e não usei navegador.

**A linha de 1979, parte por parte:**
- **"Panama took back full jurisdiction":** CONFIRMADA. O tratado de 1977, Art. XI, diz "shall reassume plenary jurisdiction over the former Canal Zone" (cópia da UNTS: midia/zona-do-canal/fontes/documento/unts-1280-I-21086-en.txt, linha 587). Balboa ficava na antiga Zona, então "Balboa included" se sustenta.
- **Os 30 meses de polícia e tribunais americanos em certas áreas:** CONFIRMADA. O Art. XI(1) dá os "thirty calendar months". O XI(2)(a) dá a jurisdição sobre os empregados americanos da Commission, os militares e os dependentes. O XI(4) dá a polícia e o XI(5) os tribunais. A Agreed Minute 5(a) põe as housing areas entre essas áreas. Bate com a F122 e a F122b do fatos.laudo.md.
- **Balboa como housing area:** CONFIRMADA a lista. O Anexo A, §2(k), diz "Balboa (La Boca)", no texto do acordo publicado pela ACP (evt-34 do dossiê; midia/zona-do-canal/fontes/evento/acp-en-torrijos-carter-treaty.txt, linha 660). Vale como texto da parte panamenha.
- **"set aside for":** exagera. O Art. III(2) diz "primary purpose", e o Art. VI passa a propriedade das casas ao Panamá e entrega aos poucos o uso delas. O conserto está no primeiro achado.
- **A Commission como agência americana até o fim de 1999:** CONFIRMADA (F123b).
- **A data em que Balboa deixou de ser moradia americana:** não foi lida, e o texto acerta em não dar data nenhuma.

**O que passou, por grupo:**
- As aberturas repetem o roteiro aprovado (F001 a F005).
- Os capítulos batem com o espelho.json e com o words.json.
- A pergunta é a do textos-tela.json, palavra por palavra.
- Cada fonte listada tem uma linha "Source:" na tela. "U.S. Department of State, 1903" na tela é o FRUS 1903, doc. 229.
- Os itens LOC 83694755, LOC 82690127 e NARA 192812325 batem com a pauta-geo.md.
- O texto do Copernicus da versão completa é literal (§3.1).
- A música bate com o _creditos-trilha.md, e o MapTiler e o OSM com o _creditos-mapa.md.

**Fora do escopo de fato, só registrado:** a versão SEM LINKS não traz os links do MapTiler, do OSM e do Epidemic, que as licenças pedem. O rascunho já marca isso como pendente para quando o YouTube liberar os links.

NOTA: 8.8/10. Todos os fatos centrais se confirmam, mas a frase da moradia diz mais que o texto do acordo, e há 3 detalhes de crédito.

VEREDITO: RESSALVA. Não há nada REFUTADO. O exagero está numa afirmação periférica, e o conserto de uma frase está pronto. Com o primeiro achado aplicado, a linha de 1979 pode ser publicada.

**Achados:**

- **media** · A linha de 1979, idêntica no comentário fixado e na versão completa: "under an agreement that came with the 1977 treaty, Balboa was one of the housing areas set aside for the canal's U.S. citizen employees"
  - problema: Diz mais que a fonte. O Acordo de Implementação do Art. III lista "Balboa (La Boca)" entre as housing areas (Anexo A, §2(k)), e isso CONFIRMA. Mas o Art. III(2) não as "reserva" aos americanos: diz que elas "shall be dedicated to the primary purpose of housing United States citizen employees and dependents". O Art. VI do mesmo acordo puxa para o lado contrário. A propriedade das casas passou ao Panamá em 1979 (VI(1)). Também em 1979 passou ao Panamá o uso das unidades além das que os EUA precisavam (VI(3)). E havia um calendário de entrega progressiva ao Panamá: pelo menos 20 % em 5 anos, 30 % em 10 e 45 % em 15. "Set aside for" soa exclusivo, e o "primary purpose" some. As famílias ("dependents") também somem. Fonte: o texto do acordo publicado pela ACP, que já está no dossiê como evt-34, com cópia local em midia/zona-do-canal/fontes/evento/acp-en-torrijos-carter-treaty.txt (Art. III(2) na linha 44, Art. VI nas linhas 296–299, Anexo A §2(k) na linha 660). URL: https://pancanal.com/en/torrijos-carter-treaty/
  - conserto: "…under an agreement that came with the 1977 treaty, Balboa was listed among the housing areas meant mainly for the canal's U.S. citizen employees and their families; and an American agency, the Panama Canal Commission, ran the canal until the end of 1999." Se o espaço do comentário apertar: "…Balboa was one of the housing areas kept mainly for the canal's U.S. citizen employees…". Nunca "set aside for" sem o "mainly".
- **baixa** · A versão completa, linha "Historical photos, portraits and documents (public domain): U.S. National Archives (Records of the Panama Canal); …"
  - problema: O parêntese deixa de fora coleções do Arquivo Nacional que têm foto aprovada no conferencia-midia.json:
- s33: RG 111, Army Signal Corps (NARA 329582950, 33rd Infantry, Fort Clayton, 1928);
- s64: RG 330, Department of Defense (NARA 6433742, USNS Comfort em Miraflores, 1988);
- s57: as fotos de Carter e Torrijos (NAID 176082 e 176083), da série 'Carter White House Photographs', com 'White House Staff Photographers' como autor, na Jimmy Carter Library.
Não é crédito obrigatório (domínio público federal), mas a linha nomeia a fonte e fica menor que ela.
  - conserto: "Historical photos, portraits and documents (public domain): U.S. National Archives (Records of the Panama Canal; Army Signal Corps; Department of Defense; Jimmy Carter Library); Library of Congress; U.S. Senate Historical Office; U.S. Government Publishing Office; U.S. Census Bureau; via Wikimedia Commons." Outra saída é tirar o parêntese: "U.S. National Archives;".
- **baixa** · Versão completa, Sources: "Panama Canal Treaty, 1977, and the Agreement in Implementation of Article III, Annex A"
  - problema: A linha de 1979 apoia-se em duas partes do acordo: na lista do Anexo A (§2(k)) e no propósito das áreas, que está no Art. III(2) e não no Anexo A. Do jeito que está, a fonte nomeia só a lista. Além disso, o fim da Zona e os 30 meses vêm do Art. XI do tratado, que a tela cita como "Panama Canal Treaty, 1977, Art. XI".
  - conserto: "Panama Canal Treaty, 1977 (Art. XI), and the Agreement in Implementation of Article III (Art. III and Annex A)"
- **baixa** · A versão SEM LINKS: a linha "Produced using Copernicus WorldDEM-30 © DLR e.V. … all rights reserved"
  - problema: Falta a frase que a licença do Copernicus pede "in a licence or any legal warning or notice covering their distribution or communication to the General Public": "The organisations in charge of the Copernicus programme by law or by delegation do not incur any liability for any use of the Copernicus WorldDEM-30" (marca/acervos/5-dados-e-fronteiras.md §3.1). A versão completa a tem. O rascunho diz que "ficaram as obrigações de licença" na versão curta, e essa frase pode ser uma delas. É crédito, não fato: leitura de licença, a confirmar por quem cuida da licença.
  - conserto: Acrescentar, se couber nos ~1.000 caracteres: "The organisations in charge of the Copernicus programme by law or by delegation do not incur any liability for any use of the Copernicus WorldDEM-30." Se não couber, registrar no rascunho que ela fica para a versão com links e por quê.
- **baixa** · A nota do rascunho (linhas 12 a 16 do descricao-youtube.md): "Este último fato NÃO está no roteiro, nem no dossiê, nem nos laudos: vem só do refutador-A1.md"
  - problema: A nota está errada sobre a origem. O dossiê tem o acordo como evt-34 ("Torrijos-Carter Treaty: Agreement in Implementation of Article III … (texto publicado pela ACP)", lida: true), com cópia local que traz o Anexo A §2(k) e o Art. III(2) palavra por palavra. O fato está, sim, no dossiê. Não está no roteiro nem nos laudos.
  - conserto: "Este último fato não está no roteiro nem nos laudos. Está no dossiê como evt-34 (o acordo publicado pela ACP), com cópia em midia/zona-do-canal/fontes/evento/acp-en-torrijos-carter-treaty.txt: Art. III(2), linha 44; Anexo A §2(k), linha 660. Conferido pelo verificador-de-fatos em 15/10/2026."
- **baixa** · A nota do rascunho (linhas 10 e 11): "a Panama Canal Commission até o fim de 1999 (F131–F133)"
  - problema: A referência ao laudo está errada. No fatos.laudo.md, F131 é a folha de pagamento "gold"/"silver", F132 é "nascer ali nunca bastou" e não existe F133. A linha da Commission até 1999 é a F123b (evt-31, NARA).
  - conserto: "a Panama Canal Commission até o fim de 1999 (F123b do fatos.laudo.md)"
- **baixa** · A nota do rascunho sobre os capítulos (linha 20): "8 capítulos, o mais curto com 73 s"
  - problema: A aritmética não fecha. O capítulo do gancho vai de 0:00 a 64,87 s (cerca de 65 s), e esse é o mais curto. Os 73 s são o de 6:15 a 7:28. Os tempos dos capítulos em si estão certos: batem com o espelho.json e com a primeira palavra de cada parte no words.json, e a narração mede 827,47 s.
  - conserto: "8 capítulos, o mais curto com 65 s (o gancho), o último com 151 s até o fim (827,47 s, 13:47)"

## Rodada 2 (a versão final, depois do ajuste)

Checagem feita em 15/10/2026 contra a versão final de C:/projetos/alpha-point/out/zona-do-canal/descricao-youtube.md. Não editei nada.

Cobertura: 77 de 77. Eu mesmo montei a lista lendo o arquivo inteiro, sem extrator. Entraram as duas aberturas, a linha de 1979 (que aparece igual na versão sem links, na completa e no comentário fixado da opção b), os 8 títulos e os 8 tempos dos capítulos, as 19 linhas de Sources, os mapas antigos (as duas versões), a linha das fotos (6 instituições), MapTiler/OSM, o Copernicus (crédito, isenção e data de acesso), as 4 faixas de música e o link, e a aritmética das notas. Resultado: 76 passaram e há 1 achado de gravidade baixa. Nada saiu REFUTADO nem DIVERGE em afirmação de tese. Pela régua do ofício, PASS. Nota: 9/10.

**A linha de 1979, parte por parte (todas passam):**
- **"Panama took back full jurisdiction"**: o Art. XI do tratado diz "shall reassume plenary jurisdiction over the former Canal Zone" (cópia UNTS, `unts-1280-I-21086-en.txt`, linhas 587–588; F121b).
- **"For thirty more months"**: o Art. XI(1) diz "shall remain in effect for thirty calendar months" (linha 593).
- **Polícia e tribunais americanos "in certain areas"**:
  - XI(2) diz "in certain of the areas and installations".
  - XI(2)(a) dá aos EUA a jurisdição criminal primária sobre os empregados cidadãos da Commission, as forças armadas e os dependentes.
  - XI(4) mantém a polícia americana; XI(5) mantém os tribunais (F122 e F122b).
- **"An agreement that came with the 1977 treaty"**: o acordo diz "Signed at Washington September 7, 1977" e "pursuant to Article III of the Panama Canal Treaty, signed this date". Está no dossiê como evt-34, texto da ACP, lido: true, linhas 21–24.
- **"Balboa was listed among the housing areas"**: o Anexo A §2(k) diz "Balboa (La Boca)" (linha 660).
- **"Meant mainly for the canal's U.S. citizen employees and their families"**:
  - Art. III(2) diz "dedicated to the primary purpose of housing United States citizen employees and dependents" (linha 44).
  - "United States citizen employees" quer dizer os empregados da Commission (linha 30).
  - "Dependents" é "the spouse and children … and other relatives" (linha 31), então "their families" está fiel.
- **"An American agency, the Panama Canal Commission, ran the canal until the end of 1999"**: o tratado diz "United States Government agency called the Panama Canal Commission" (linha 147) e termina "at noon … December 31, 1999" (linha 101). O F123b (evt-31, NARA) confirma.

**O resto também confere:**
- **As aberturas** batem com o roteiro aprovado: F001, F002/F002m (1.580 de 3.139 = 50,3 %), F002b–d, F003 e a faixa de dez milhas (F128b).
- **Os capítulos:** os títulos são os de `espelho.json` › `_capitulos`. Cada tempo cai na primeira palavra da parte no `words.json`: "The first", "Those two", "The rule", "The answer", "In February", "From nineteen sixty", "On September". O mais curto é o gancho, com 64,87 s, e o último tem 151,03 s até 827,47 s.
- **As fontes:** as 19 linhas de Sources cobrem todas as linhas "Source(s):" do `textos-tela.json`. A lei de 1912 aparece na tela como a folha "37 Stat. 560".
- **Os mapas antigos** (LOC 83694755 e 82690127, NAID 192812325, títulos e autores) e o MapTiler/OSM conferem com o `_creditos-mapa.md`.
- **A música** confere com o `_creditos-trilha.md`.
- **O Copernicus** confere com o `pauta-geo.md` e o `marca/acervos/5-dados-e-fronteiras.md` §3.1.
- **A linha das fotos** cobre os 53 itens aprovados no `conferencia-midia.json`: NARA, incluindo a Carter Library; Library of Congress (retrato de Hay); Senate Historical Office (retrato de Mondale); govinfo/GPO; Census; e o Commons.
- **A contagem de caracteres** está certa: 1.817 com o parágrafo de 1979 e 1.297 sem ele.

**Os 7 achados da 1ª rodada foram todos consertados:**
1. A frase de moradia agora diz "listed among the housing areas meant mainly for… and their families".
2. O parêntese do Arquivo Nacional saiu, que era a outra saída proposta.
3. Os artigos foram nomeados na linha do tratado. Esse conserto, porém, gerou o achado baixo desta rodada.
4. A isenção do Copernicus entrou na versão sem links.
5. A nota sobre o evt-34 está corrigida.
6. A referência F131–F133 virou F123b.
7. A nota dos capítulos diz 65 s.

**Achado novo (baixa):** o "(Art. XI)" depois de "Panama Canal Treaty, 1977" estreita a fonte. O vídeo usa também o Art. I, o preâmbulo e o "territorial sovereign".

**Fora do escopo de fato, só para registro:** a versão sem links não traz os links que as licenças pedem (Epidemic, MapTiler e OSM). Isso já está declarado no "Pendente: Os links" do próprio arquivo.

Nenhuma ida à web foi necessária: o dossiê e as cópias locais bastaram.

**Achados:**

- **baixa** · Versão completa, Sources, linha 133 do descricao-youtube.md: "Panama Canal Treaty, 1977 (Art. XI), and the Agreement in Implementation of Article III (Art. III and Annex A)"
  - problema: O parêntese "(Art. XI)" faz a linha dizer menos do que o vídeo usa. O tratado de 1977 também sustenta outras partes. Na tela, ele aparece sozinho como "Source: Panama Canal Treaty, 1977" e em "Sources: Isthmian Canal Commission, 1905; Panama Canal Treaty, 1977". A voz cita dele o Art. I ("terminates and supersedes", F120b/F120c), o preâmbulo ("in the spirit of the Joint Declaration of April 3, 1964") e o "territorial sovereign". O Art. XI cobre só o fim da Zona e os 30 meses (F121b, F122). O defeito veio do conserto que eu mesmo sugeri na 1ª rodada (achado 3): ele deixou a lista de fontes mais estreita que a tela. Não há erro de fato. É uma fonte nomeada pela metade. O "(Art. III and Annex A)" do acordo está certo: a linha de 1979 usa só essas duas partes dele.
  - conserto: "Panama Canal Treaty, 1977, and the Agreement in Implementation of Article III (Art. III and Annex A)". Se quiser manter o artigo: "Panama Canal Treaty, 1977 (incl. Art. XI), and the Agreement in Implementation of Article III (Art. III and Annex A)".

