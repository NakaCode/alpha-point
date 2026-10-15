Gravado pelo setor Texto e fatos, tarefa `zona-do-canal-texto-1`, em 15/10/2026. Os dois lotes abaixo são do `verificador-de-fatos` (`claude-opus-5-5`, conferido no transcript de cada um), sem mudança, tirados da última mensagem de cada subagente. Só esta cabeça e as linhas `# Lote` são do setor.

COBERTURA: 408 de 424 (lote A: 199 de 210; lote B: 209 de 214). CHECADO PARCIALMENTE: os 16 itens sem veredito são NÃO FOI CHECADO, todos por causa do teto de 0 imagens do pedido (A004, A006, A013, A078, A084, A085, A106, A140, A141, A142, A144; B074, B109, B113, B115, B127).

- **A soma é do setor**, item a item dos dois lotes: os ids A e B não se repetem. Cada lote derivou a lista à mão e diz de quais arquivos, com o sha256 de cada entrada.
- **Os lotes:**
  - **A:** a `pauta-dados`, os 56 `_dados/<cena>.json`, a `pauta-pessoas` e a `pauta-logos`;
  - **B:** a `pauta-documentos` (com os 47 grifos), a `pauta-geo` e os 46 `aprovado` do `conferencia-midia.json` (lugar, ano e aviso de ano, crédito).
- **As notas:** A, 8.6/10; B, 8.5/10. O setor não as junta.
- **Data-base:** 15/10/2026.
- **O veredito:** RESSALVA nos dois lotes. Nenhum REFUTADA, e os DIVERGE são de afirmação periférica (legenda, crédito, nota, localizador, rótulo), cada um com conserto.

VEREDITO: RESSALVA

---

# Lote A

COBERTURA: 199 de 210 (CHECADO PARCIALMENTE: 11 itens ficaram NÃO FOI CHECADO, porque o valor só existe em imagem e o teto do pedido é de 0 imagens; nenhum deles está num `texto_para_tela`, menos a legenda A004)

**Como a lista foi derivada: à mão.** O canal não tem extrator de afirmações para pauta. Li inteiros os 56 `_dados/<cena>.json`. De cada um saiu um item por afirmação checável que pode ir à tela. Cada campo foi lido: `valores`, `texto_para_tela`, `legenda`, `credito_sugerido`, `nota`, `fonte`, `dataDoDado` e `fontes_adicionais`. Depois li a `pauta-dados.json` e a `.md` (o campo `divergencia` e a `licenca`), a `pauta-pessoas.json` e a `.md` (nome, cargo, data do cargo, ano do retrato) e a `pauta-logos.json` e a `.md` (`nomes_escritos`, bandeiras, notas de período). Ficaram fora, por declaração:
- a licença e a procedência de mídia, que são lente do `conferente-de-midia`;
- o retrato retirado de Bunau-Varilla e o candidato da Bain, que não vão à tela;
- a nota "como a bandeira rasgou é contestado" (s52), que é orientação e não afirmação de tela;
- as classes (a) a (f) de 1936 e a lista das hortas, que são do lote B.

Entradas, com sha256:
- `out/zona-do-canal/_pesquisa/pauta-dados.json` `7ec75163666f19afe7c8e9641fbb0019b5e0ffb132d47c06d1e1f0441ebb5594`
- `pauta-dados.md` `a3b5db9f59cd7ac3fdeb5c44afdbda7debf011b543a6af6ed3446d3ed1a439d0`
- `pauta-pessoas.json` `ab129f033f775625b04aff7afa9a1043fd2e1c71406407544fd8312393e773bd`
- `pauta-pessoas.md` `af7fc6bc04c0efec92a96c7830cace5f8d8c5a9bfa94bb47f755036a26162e7d`
- `pauta-logos.json` `dd926757e4e378255f0d44fc759b2ce248c299cdc177cc98ba448e52d4eedf54`
- `pauta-logos.md` `51f31b221cc64b0d0c29832159d8a072c35a31181a55fd29e79d374f6ecf5b6e`
- Os 56 `_dados`, lidos em `out/zona-do-canal/_dados/`. Sha256 do conjunto: `81593c84c34ce265fb4d68184781b72ed1b453a1fb410a6063195e0c998c25cf`. Conta: os arquivos em ordem de nome, e o sha256 sobre a concatenação de `"<nome>\n<sha256 hex do arquivo>\n"`. Os 56 são byte a byte iguais às cópias em `_tmp/pesquisa-dados/_dados/` e à lista `_tmp/pesquisa-dados/_dados-sha256-depois.txt` (56 de 56).
- Herança: `roteiros/zona-do-canal/qc-roteiro/fatos.laudo.md` `38f51e4db53e3a6b2fc7ddc9f62d6e11838797787f8ed0664f5da519b3f105de`, sobre o roteiro `58db12762030…`. O `gate.mjs` de hoje dá o mesmo sha: o texto falado não mudou desde a herança.

Abreviatura: `fontes/` = `midia/zona-do-canal/fontes/`.

NOTA: 8.6/10. Os números que sustentam a tese estão confirmados ou herdados, e o 68–32 subiu à fonte primária. A nota não passa disso por quatro motivos: 11 valores opcionais ficaram presos em imagem; uma legenda endurece o que o censo diz; um nome de órgão está fora de época; e quatro créditos cobrem só parte da tela.

Data-base: 15/10/2026, 04:35 (Brasília).

## Respostas ao pedido

1. **s16, o "privately owned".** O relatório de 1915 põe o termo só nas 1,136 casas do ano: "1,136 privately owned houses were destroyed by the police or removed by the owners on request." A frase do total diz só "houses": "Since the beginning of this work a total of 3,988 houses have been destroyed or removed." Aqui "this work" é "The work of depopulating the Canal Zone". O laudo herdado (F021c) aceitou o "privately owned" sobre o total pela leitura de contexto. Eu não acho o termo na frase do total (A038: NÃO ACHEI, que não é refutação).
   - **O que a tela pode dizer:** `3,988 HOUSES DESTROYED OR REMOVED (BY JUNE 30, 1915)` e, se quiser o qualificador, só `1,136 PRIVATELY OWNED HOUSES IN FISCAL 1915`.
   - **O que a tela não pode dizer:** "3,988 privately owned houses", nem número de pessoas removidas.
   - A legenda deve parar em "Houses, not people." (A039).
   - A nota da pesquisa diz que "a fonte não data" o começo. O próprio relatório de 1915 cita "The President's depopulation order of December 5, 1912", e o de 1914 diz que a limpeza "was started on January 1, 1913" (A040).
   - **A voz:** não recomendo regravar. A frase não contradiz a fonte, só generaliza o qualificador. Se a Sala quiser levar, é decisão do Lucas.
2. **s54 e s58.**
   - **s58: CONFIRMADA na fonte primária.** Congressional Record, vol. 124, pt. 8, Senado, 18/04/1978, p. 10541: "The yeas and nays resulted—yeas 68, nays 32, as follows: [Rollcall Vote No. 119 Ex.]". E: "The VICE PRESIDENT. Two-thirds of the Senators present and voting having voted in the affirmative, the resolution of ratification, as amended, is agreed to." A resolução é a do "Panama Canal Treaty … done at Washington on September 7, 1977 (Executive N, Ninety-Fifth Congress, first session)". Li no govinfo, sem recusa: https://www.govinfo.gov/content/pkg/GPO-CRECB-1978-pt8/pdf/GPO-CRECB-1978-pt8-5-2.pdf. O PDF passa de 10 MB e o WebFetch não o abre por tamanho, então baixei-o para `%TEMP%` (sha256 `a42408ae6f970933256bb21c48d18926e7fae5a88920e33da5ccb59af61e361e`) e li a camada de texto. O senate.gov não foi tentado.
   - **s54: NÃO ACHEI em fonte primária a contagem 4 + 24.** A atribuição continua certa: o blog do NDC da NARA, de 03/11/2014, de Patrice Brown, diz "After four days of fighting four U.S. soldiers and twenty-four Panamanians were killed" (herdado, F112).
     - O FRUS 1964–68, vol. XXXI, doc. 368 registra no dia 10/01 "3 United States soldiers dead, 34 Americans injured" até aquele momento.
     - A CIJ diz que "found it impossible to establish with certainty the exact number of casualties on the Panamanian side".
     - Nenhuma lista oficial com nomes foi achada (busca na rede, 15/10).
     - A tela fica como a voz: com `(ACCORDING TO THE U.S. NATIONAL ARCHIVES)`.
     - Atenção: o mesmo trecho do blog põe o hasteamento americano na Balboa High School em 09/01, quando o DSB e a CIJ dizem 07/01. Não use esse blog para nenhum outro fato da tela.
3. **s32, s49, s51, s52 e s53.** As cinco atribuições estão certas, e a fonte citada é a própria fonte primária do achado.
   - **A CIJ.** O PDF local `fontes/experiencia/icj-1964-panama.pdf` tem o mesmo sha256 (`e680d4bf…a9cf`) do que o icj.org serve hoje, e o texto checado está na camada de texto do próprio PDF. É "Report on the Events in Panama, January 9-12, 1964", do Comitê de Investigação da International Commission of Jurists, Genebra, a pedido da "National Bar Association of Panama".
     - s49: §19, "the Governor selected seventeen spots where both flags were to be displayed".
     - s51: §23, "after classes at about 4.45 p.m., a group of approximately 200 students left the Panamanian National Institute".
     - s52: "proposed that a delegation of five students should display the Panamanian flag at the foot of the flagpole".
     - s53: §34, "The main group of students left the Zone at 6.45 to 7 p.m."
   - **Os Knapp (s32).** The Panama Canal Review de 01/10/1979, artigo "Looking Backward" (pp. 59–63), assinado "By Mary and Herbert Knapp" ("Mary and Herbert Knapp are teachers in the Canal Zone schools"). A citação está na p. 60.
   - **Um defeito de atribuição na s49.** O 16 que a pesquisa dá ao "Departamento de Estado" é do Gen. Andrew P. O'Meara (CINCSOUTH), ao telefone: "The Governor has 16 sites…" (FRUS 1964–68, vol. XXXI, doc. 367) (A151).
4. **s29: todos os valores confirmados no 53 Stat. 1807.**
   - As datas: "Signed at Washington March 2, 1936; ratification advised by the Senate July 25, 1939; ratified by the President of the United States July 26, 1939; ratified by Panama July 17, 1939; ratifications exchanged at Washington July 27, 1939; proclaimed July 27, 1939".
   - As licenças: "that at present about 1,568 agricultural licenses in the Canal Zone are outstanding" (53 Stat. 1831–1832).
   - O 1,568 está na troca de notas de 02/03/1936, não no tratado: é a nota de R. J. Alfaro e Narciso Garay a Cordell Hull, repetida na resposta de Hull. É o número que "the representatives of the Government of the United States" declararam na negociação. Se for à tela, o crédito é "Exchange of notes, March 2, 1936 (53 Stat. 1831)".
5. **s07, que a pesquisa deixou pelo dossiê.** É herdada (F008, F008b) e eu a reforcei nas camadas de texto.
   - O censo de 1940 diz "The citizenship statistics relate to persons of foreign birth". A Table 3 da mesma publicação traz 1930 pela mesma régua.
   - O capítulo da Zona no censo de 1950 (Tables 16 a 32) tabula "Country of birth" (Table 28) e nenhuma cidadania.
   - 1970 é herdado (Table 8). 1920 e 1960 continuam pelo dossiê: o de 1960 é só imagem, e o de 1920 não tem cópia local.
   - A contagem de seis censos fecha.
   - Dois defeitos: o crédito "U.S. Census Bureau, 1940" não cobre 1920–1970 (A018), e a legenda irmã da s02 endurece "não publicou" em "não contou" (A005).

## A tabela

| id | cena | afirmação | veredito | o que a fonte diz | URL ou arquivo local |
|---|---|---|---|---|---|
| A001 | s02 | "BALBOA, 1960 · 3,139 RESIDENTS" | HERDADA (fatos.laudo.md F002) | Table 28, cidade de Balboa | fontes/mecanismo/census1960-p57-33-table28.png (lida pelo laudo herdado) |
| A002 | s02 | "1,580 BORN IN THE U.S." | HERDADA (F002, F094) | idem | idem |
| A003 | s02 | 1,580/3,139 = 50.3 % | HERDADA (F002m) | conta refeita: 0.5033 | — |
| A004 | s02 | legenda: "place of birth in the 50 states" | NÃO FOI CHECADO (teto de 0 imagens) | a definição está no PDF de 1960, que é só imagem (0 caracteres de texto); "50 states" deixa o D.C. de fora | fontes/cz-1960-vol1-p57.pdf |
| A005 | s02 | legenda: "the census did not count citizens" | DIVERGE | 1940: "The citizenship statistics relate to persons of foreign birth"; 1970, Table 8 (F008b). O que se sustenta: nenhum censo publicou quantos moradores eram cidadãos (F008) | fontes/census-1940-canal-zone.pdf; https://www2.census.gov/library/publications/decennial/island-areas/1940/1940-census-panama-canal-zone.pdf |
| A006 | s02 | nota: distrito de Balboa 30,623; Balboa Heights 118 (1960) | NÃO FOI CHECADO (teto de 0 imagens) | Table 28, só imagem | fontes/cz-1960-vol1-p57.pdf |
| A007 | s02 | crédito "Source: U.S. Census Bureau, 1960" | CONFIRMADA | volume do Census | https://www2.census.gov/library/publications/decennial/1960/population-volume-1/32111904v1p54-57ch4.pdf |
| A008 | s06 | "PARAÍSO, 1960 · 7 OF 3,113 BORN IN THE U.S." | HERDADA (F006, F095) | Table 28 | fontes/mecanismo/census1960-p57-33-table28.png |
| A009 | s06 | "RAINBOW CITY · 3 OF 3,688" | HERDADA (F007, F096) | idem | idem |
| A010 | s06 | "10 MILES WIDE (16 km)" | CONFIRMADA | as 10 milhas são herdadas (F005b); 10 × 1.609 = 16.09 km | fontes/mecanismo/avalon-pan001.txt |
| A011 | s06 | 5 milhas de cada lado do eixo | HERDADA (F014b) | "five miles on each side of the center line" | idem |
| A012 | s06 | legenda: "the strip is the 1903 grant, not the final Zone outline" | CONFIRMADA | o Art. II exclui as duas cidades e concede também "any other lands and waters outside of the zone above described which may be necessary" | idem |
| A013 | s06 | nota: a Zona tinha 362 sq mi em 1960 | NÃO FOI CHECADO (teto de 0 imagens) | 1960 é imagem; o censo de 1950, em texto, dá o mesmo número: "The total land area of the Canal Zone is 362 square miles" | fontes/cz-1950-vol2-p51-54ch8.pdf (PDF p. 18) |
| A014 | s06 | o crédito "U.S. Census Bureau, 1960" sobre uma tela que traz "10 MILES WIDE" | DIVERGE | as 10 milhas vêm do Art. II do tratado de 1903 | https://www.govinfo.gov/content/pkg/STATUTE-33/pdf/STATUTE-33-Pg2234.pdf |
| A015 | s07 | "CENSUS OF THE CANAL ZONE, 1920–1970 · PLACE OF BIRTH, NOT CITIZENSHIP" | HERDADA (F008, F008b), reforçada | 1940: "citizenship statistics relate to persons of foreign birth"; 1950: Table 28 "Country of birth" e nenhuma tabela de cidadania | fontes/census-1940-canal-zone.pdf; fontes/cz-1950-vol2-p51-54ch8.pdf |
| A016 | s07 | seis censos sem contagem de cidadãos | CONFIRMADA | 1920, 1930, 1940, 1950, 1960 e 1970; a Table 1 de 1940 lista 1912, 1920, 1930 e 1940 | fontes/census-1940-canal-zone.pdf |
| A017 | s07 | legenda: "citizenship only for the foreign-born" | CONFIRMADA | 1940 (e 1930 pela Table 3 de 1940) e 1970 (Table 8); 1920 e 1960 pelo dossiê | idem |
| A018 | s07 | o crédito "Source: U.S. Census Bureau, 1940" para 1920–1970 | DIVERGE | o crédito dá um ano só para seis censos | — |
| A019 | s09 | NOVEMBER 3, 1903 | HERDADA (F012) | "Panama, November 3, 1903 … Uprising occurred to-night" | https://history.state.gov/historicaldocuments/frus1903/d229 |
| A020 | s09 | NOVEMBER 18, 1903 | HERDADA (F012b) | — | fontes/mecanismo/avalon-pan001.txt |
| A021 | s09 | 15 DAYS | HERDADA (F012m) | — | — |
| A022 | s09 | crédito "U.S. Department of State (FRUS)" | CONFIRMADA | o FRUS 1903, doc. 229, dá o 03/11; o 18/11 é do próprio tratado | fontes/evento/frus1903-d229.txt |
| A023 | s11 | "10 MILES WIDE · 5 MILES ON EACH SIDE" | HERDADA (F014, F014b) | — | fontes/mecanismo/avalon-pan001.txt |
| A024 | s11 | "(16 km)", "(8 km)" | CONFIRMADA | 16.09 km e 8.05 km (conta) | — |
| A025 | s11 | "IN PERPETUITY" | HERDADA (F014) | — | idem |
| A026 | s11 | nota: as cidades "shall not be included within this grant" | HERDADA (F015) | literal | idem |
| A027 | s11 | crédito "Isthmian Canal Convention, 1903, Art. II" | CONFIRMADA | 1977, Art. I(1)(a): "The Isthmian Canal Convention … signed at Washington, November 18, 1903" | fontes/documento/unts-1280-I-21086-en.txt |
| A028 | s14 | "PANAMA CANAL ACT, 1912" | CONFIRMADA | Sec. 14: "this Act shall be known as, and referred to as, the Panama Canal Act" | fontes/mecanismo/statute-37-pg560.txt; https://www.govinfo.gov/content/pkg/STATUTE-37/pdf/STATUTE-37-Pg560.pdf |
| A029 | s14 | jurados "FROM AMONG THE CITIZENS OF THE UNITED STATES" | HERDADA (F019) | — | idem |
| A030 | s14 | aprovada em 24/08/1912 | HERDADA (F018c); a dúvida da pesquisa está resolvida | o "Approved, August 24, 1912." que fecha a Sec. 14 é do próprio CHAP. 390; a margem "August 24,1912. [H. R. 21969.] [Public, No. 337.]" abre o CHAP. 390 | idem |
| A031 | s14 | nota: o tribunal no antigo prédio da administração desde 1916 | CONFIRMADA | "the offices of the U.S. District Court moved in February of 1916" | fontes/experiencia/panamacanalrevie1979pana.txt |
| A032 | s14 | crédito "Panama Canal Act, 1912" | CONFIRMADA | idem A028 | idem A028 |
| A033 | s15 | "EXECUTIVE ORDER 1885 · JANUARY 27, 1914" | HERDADA (F020b) | lida na transcrição do American Presidency Project; o texto oficial não foi aberto | fontes/documento/app-eo-1885.txt |
| A034 | s15 | em vigor em 01/04/1914 | HERDADA (F020b) | "take effect from and after the 1st day of April, 1914" | idem |
| A035 | s15 | crédito "Executive Order 1885, 1914" | CONFIRMADA | "Executive Order 1885—To Establish a Permanent Organization for the Operation and Government of the Panama Canal" | https://www.presidency.ucsb.edu/node/276252 |
| A036 | s16 | "3,988 HOUSES DESTROYED OR REMOVED (BY JUNE 1915)" | HERDADA (F021b) | "a total of 3,988 houses have been destroyed or removed" | fontes/documento/annualreportofgo1915cana.txt |
| A037 | s16 | 1,136 "privately owned" no ano fiscal de 1915 | CONFIRMADA | "1,136 privately owned houses were destroyed by the police or removed by the owners on request" | idem |
| A038 | s16 | voz (p1): "almost four thousand privately owned houses" | NÃO ACHEI (literal) | "privately owned" só nas 1,136; o total diz "houses". F021c aceitou pelo contexto | idem |
| A039 | s16 | legenda: "the report does not count residents removed" | NÃO ACHEI (o universal) | nos trechos do despovoamento, só casas; noutro trecho, "One hundred and thirty-four persons were deported" (outra coisa); o relatório inteiro não foi varrido | idem |
| A040 | s16 | nota: "o começo do despovoamento a fonte não data" | DIVERGE | 1915: "The President's depopulation order of December 5, 1912"; 1914: "started on January 1, 1913" | idem; fontes/evento/annualreportofis1914isth_djvu.txt |
| A041 | s16 | crédito "Panama Canal annual report, 1915" | CONFIRMADA | relatório do Governor, ano fiscal até 30/06/1915 | https://archive.org/download/annualreportofgo1915cana/annualreportofgo1915cana_djvu.txt |
| A042 | s17 | "THE PERMANENT GOLD SITE AT BALBOA" | HERDADA (F022) | — | fontes/evento/annualreportofis1914isth_djvu.txt |
| A043 | s17 | "THE PERMANENT SILVER SETTLEMENT" | HERDADA (F022b) | — | idem |
| A044 | s17 | 1914 e o crédito "annual report, 1914" | HERDADA (F022c) | "Annual Report of the Isthmian Canal Commission and The Panama Canal for the fiscal year ended June 30, 1914" | idem |
| A045 | s18 | "BALBOA HEIGHTS · 1914" | HERDADA (F023) | — | fontes/documento/annualreportofgo1915cana.txt |
| A046 | s18 | 15/07/1914, os primeiros ocupantes | CONFIRMADA | "On July 15, 1914 … the Administration Building had its first occupants" | fontes/experiencia/panamacanalrevie1979pana.txt |
| A047 | s18 | a mudança de 20/08 a 14/09/1914 | CONFIRMADA | "Between August 20, 1914, and September 14, 1914, the general administrative offices of the canal were transferred … to the new administration building at Balboa Heights" | fontes/documento/annualreportofgo1915cana.txt |
| A048 | s18 | crédito "The Panama Canal Review, 1979" | CONFIRMADA | a Review traz o 15/07/1914 | fontes/experiencia/panamacanalrevie1979pana.txt |
| A049 | s20 | "SEPTEMBER 2, 1914" | HERDADA (F025b) | — | fontes/mecanismo/frus1915-d1732.txt |
| A050 | s20 | Art. III "…shall be as follows: Beginning at a concrete monument" | CONFIRMADA (a 1ª parte é herdada, F025) | literal | idem |
| A051 | s20 | proclamada em 18/02/1915 | CONFIRMADA | "this eighteenth day of February … one thousand ni[ne hundred and fifteen]"; ratificações trocadas no Panamá em 11/02/1915 | https://history.state.gov/historicaldocuments/frus1915/d1732 |
| A052 | s20 | crédito "Boundary Convention, 1914" | CONFIRMADA | assinada "at the City of Panama" | idem |
| A053 | s21 | "JUNE 1920 · GOLD ROLL 4,608" | CONFIRMADA | "consisted of 4,608 employees on the gold roll and 17,023 on the silver roll" | fontes/annualreportofgo1920cana.txt |
| A054 | s21 | "SILVER ROLL 17,023" | CONFIRMADA | idem | idem |
| A055 | s21 | total 21,631 | CONFIRMADA | "a total of 21,631 actually working"; 4,608 + 17,023 = 21,631 | idem |
| A056 | s21 | gold = 21.3 % | CONFIRMADA | 0.2130 | — |
| A057 | s21 | legenda: nomes de folha do próprio governo | HERDADA (F029) | — | fontes/mecanismo/frus1948v09-d490.txt |
| A058 | s21 | o canal e o Panama Railroad juntos | CONFIRMADA | Table No. 1, "Grand total … 17,023 4,608 21,631", com as linhas do Panama Railroad | fontes/annualreportofgo1920cana.txt |
| A059 | s21 | Table No. 1 de 23/06/1920 | CONFIRMADA | "Force actually at work on June 23, [1920]" (o OCR estraga o ano) | idem |
| A060 | s21 | crédito 1920 | CONFIRMADA | — | https://archive.org/download/annualreportofgo1920cana/annualreportofgo1920cana_djvu.txt |
| A061 | s22 | silver coin e ouro, "recruited largely from the United States" | HERDADA (F030) | — | fontes/annualreportofgo1940cana.txt |
| A062 | s22 | "employed in the Tropics" | CONFIRMADA | "…workers employed in the Tropics … in silver coin" | idem |
| A063 | s22 | "now paid in United States currency" | HERDADA (F031) | — | idem |
| A064 | s22 | crédito 1940 | HERDADA (F030b) | — | idem |
| A065 | s23 | 1920: "labor force of West Indians (known as silver roll force)" | HERDADA (F032) | — | fontes/annualreportofgo1920cana.txt |
| A066 | s23 | 1930: "West Indian negroes" (não vai à tela) | CONFIRMADA | "a huge percentage of the silver employees are West Indian negroes" | fontes/annualreportofgo1930cana.txt |
| A067 | s23 | crédito 1920 e 1930 | HERDADA (F032c, F032d) | — | — |
| A068 | s24 | "with a few exceptions, citizens of the United States" | HERDADA (F033) | — | fontes/annualreportofgo1940cana.txt |
| A069 | s24 | "composed almost entirely of natives of the Tropics, a considerable number of whom are Panamanians" | CONFIRMADA (o final é herdado, F033b) | literal | idem |
| A070 | s24 | crédito 1940 | HERDADA (F033c) | — | — |
| A071 | s25 | gold: Balboa, Ancon, Pedro Miguel, Gatun, Cristobal | HERDADA (F035, F035m) | — | fontes/annualreportofgo1920cana.txt |
| A072 | s25 | silver: La Boca, Red Tank, Paraiso, Gatun, Cristobal | CONFIRMADA | "Clubhouses for silver employees were operated at La Boca, Red Tank, Paraiso, Gatun, and Cristobal" | idem |
| A073 | s25 | crédito 1920 | HERDADA (F035b) | — | — |
| A074 | s26 | $158.46 | HERDADA (F037, F037m) | "$158. 46" | idem |
| A075 | s26 | $76.00 | HERDADA (F037) | "$76. 00" | idem |
| A076 | s26 | "TEACHER PAY, 1920 … A MONTH" | HERDADA (F037) | "Average monthly wages of teachers" | idem |
| A077 | s26 | 76.00/158.46 = 48 % | CONFIRMADA | 0.4796 | — |
| A078 | s26 | nota: 1919, $141.88 e $71.50 | NÃO FOI CHECADO (teto de 0 imagens) | o OCR da p. 247 tem uma coluna só | fontes/mecanismo-verificacao/ia1920-n286-p247.jpg |
| A079 | s26 | legenda: as categorias do próprio relatório | CONFIRMADA | "White schools", "Colored schools" | fontes/annualreportofgo1920cana.txt |
| A080 | s26 | crédito 1920 | HERDADA (F091b) | — | — |
| A081 | s27 | "$158.46 · $76.00 A MONTH (1920)" | HERDADA (F037) | — | — |
| A082 | s28 | "1930 · OVER 60% OF 'SILVER' EMPLOYEES LIVED IN PANAMA CITY AND COLÓN" | HERDADA (F038) | "are required to live in the cities of Panama and Colon" | fontes/annualreportofgo1930cana.txt |
| A083 | s28 | 1940, escola só para quem morava na Zona | HERDADA (F039) | "only when such employees reside on the Canal Zone" | fontes/annualreportofgo1940cana.txt |
| A084 | s28 | opcional: Balboa 3,199 (1930) | NÃO FOI CHECADO (teto de 0 imagens) | no OCR, "3, 199" aparece sem o nome da linha | fontes/escala_humana/img/gov1930-p79-tab.jpg |
| A085 | s28 | opcional: La Boca 3,228 (1930) | NÃO FOI CHECADO (teto de 0 imagens) | não está no OCR | idem |
| A086 | s28 | crédito 1930 | HERDADA (F038b) | — | — |
| A087 | s29 | assinado em 02/03/1936 | HERDADA (F043) | — | fontes/mecanismo/statute-53-pg1807.txt |
| A088 | s29 | em vigor em 27/07/1939 | HERDADA (F043b) | — | idem |
| A089 | s29 | Senado em 25/07/1939, Panamá em 17/07/1939, Presidente em 26/07/1939 | CONFIRMADA | cabeçalho do 53 Stat. 1807 (resposta 4) | https://www.govinfo.gov/content/pkg/STATUTE-53/pdf/STATUTE-53-Pg1807.pdf |
| A090 | s29 | "about 1,568 agricultural licenses" | CONFIRMADA | troca de notas de 02/03/1936, 53 Stat. 1831–1832 (resposta 4) | idem |
| A091 | s29 | crédito "U.S.–Panama treaty of 1936" | CONFIRMADA | "General treaty of friendship and cooperation…"; o 1,568 está na troca de notas anexa | idem |
| A092 | s31 | 1950, a casa antes da família | HERDADA (F051) | — | fontes/annualreportofgo1950cana.txt |
| A093 | s31 | crédito 1950 | HERDADA (F051c) | — | — |
| A094 | s32 | os Knapp, "teachers in the Canal Zone schools" | HERDADA (F052) | — | fontes/experiencia/panamacanalrevie1979pana.txt |
| A095 | s32 | autoria e artigo | CONFIRMADA | "Looking Backward 59-63"; "By Mary and Herbert Knapp"; "a digest of a chapter from that book" | idem |
| A096 | s32 | "lived in rented quarters", "commy" | HERDADA (F053, F053b) | p. 60 | idem |
| A097 | s32 | a edição de 01/10/1979 | HERDADA (F053c) | — | idem |
| A098 | s32 | crédito "The Panama Canal Review, 1979" | CONFIRMADA | é ensaio assinado: o crédito leva os autores (achado 8) | https://archive.org/download/panamacanalrevie1979pana/panamacanalrevie1979pana_djvu.txt |
| A099 | s33 | "44,198 RESIDENTS" | HERDADA (F060) | — | fontes/escala_humana/img/c1970-t7-top.png |
| A100 | s33 | legenda: o último censo | HERDADA (F059c) | — | — |
| A101 | s33 | crédito 1970 | CONFIRMADA | — | https://www2.census.gov/library/publications/decennial/1970/population-volume-1/00496492v1p54-58ch4.pdf |
| A102 | s34 | "23,559 OF 44,198 BORN IN THE U.S." | HERDADA (F060) | — | — |
| A103 | s34 | 53.3 % | HERDADA (F060) | — | — |
| A104 | s34 | "8,569 IN THE ARMED FORCES" | HERDADA (F057) | 8,494 + 75 = 8,569 | — |
| A105 | s34 | legenda: só os militares, sem as famílias | HERDADA (F057, F059) | — | — |
| A106 | s34 | Balboa 1960: 517 em outro país, 1 em outra área | NÃO FOI CHECADO (teto de 0 imagens) | a soma interna fecha: 1,041 + 1,580 + 517 + 1 = 3,139 | fontes/mecanismo/census1960-p57-33-table28.png |
| A107 | s34 | opcional: 1940, 45.6 % em área militar | CONFIRMADA | Table 1: "Military area, total" 23,638; "Percent in military area" 45.6; a Zona tinha 51,827 | fontes/census-1940-canal-zone.pdf |
| A108 | s34 | crédito 1970 | CONFIRMADA (para a tela de 1970) | o 1960 e o 1940 pedem o ano no crédito | — |
| A109 | s35 | a frase da lei de 1937; "Approved, August 4, 1937" | HERDADA (F065, F067, F068) | — | fontes/documento/stat-50-558.txt |
| A110 | s35, s36 | crédito "Act of Aug. 4, 1937" | CONFIRMADA | 50 Stat. 558 | idem |
| A111 | s36 | "AUGUST 4, 1937 → BACK TO FEBRUARY 26, 1904" | HERDADA (F068, F068b) | — | fontes/documento/fam-8-302-4.txt |
| A112 | s36 | 26/02/1904 = o tratado em vigor | HERDADA (F068c) | e o cabeçalho do 33 Stat. 2234: "ratifications exchanged at Washington, February 26, 190[4]" | fontes/documento/stat-33-2234-tratado-1903.txt |
| A113 | s37 | o FAM: a regra geral até 1937, retroativa a 1904 | HERDADA (F069, F070, F070c) | — | fontes/documento/fam-8-302-4.txt |
| A114 | s38 | "was never considered part of the United States or designated as an outlying possession" | HERDADA (F072, F075) | — | idem |
| A115 | s38 | "if it were the sovereign" | HERDADA (F073) | — | fontes/mecanismo/avalon-pan001.txt |
| A116 | s37, s38 | crédito "8 FAM 302.4" | HERDADA (lista de nomes do laudo herdado) | CT:CITZ-135, 01/09/2026 | https://fam.state.gov/FAM/08FAM/08FAM030204.html |
| A117 | s39 | "1,041 BORN IN THE CANAL ZONE" | HERDADA (F063) | — | — |
| A118 | s39 | legenda: "their citizenship was not recorded" | DIVERGE | as fontes dizem "não tabulado": a cidadania é publicada só para os nascidos fora | fontes/census-1940-canal-zone.pdf |
| A119 | s40 | "FEBRUARY 21, 1946", a instrução nº 71 | HERDADA (F077); o nº 71 confirmado | "the Department's instruction No. 71 of February 21, 1946" | fontes/mecanismo/frus1946v11-d927.txt |
| A120 | s40 | crédito FRUS | CONFIRMADA | FRUS 1946 XI, doc. 927 (Hines, 16/05/1946) | https://history.state.gov/historicaldocuments/frus1946v11/d927 |
| A121 | s41 | as citações de Mehaffey; 18/09/1946 | HERDADA (F080, F081); a data confirmada | "Balboa Heights, September 18, 1946" | fontes/mecanismo/frus1946v11-d931.txt |
| A122 | s41 | 1940: "a matter of long custom in tropical countries" | HERDADA (F082) | — | fontes/annualreportofgo1940cana.txt |
| A123 | s42 | NOVEMBER 1948 | HERDADA (F083) | — | fontes/mecanismo/frus1948v09-d490.txt |
| A124 | s42 | 08/12/1948, "recently removed" | HERDADA (F083b) | — | idem |
| A125 | s42 | "MORE THAN 23,000 EMPLOYEES" | CONFIRMADA (com recorte) | "an overhaul of salary and wage schedules … occupied by more than 23,000 employees of The Panama Canal and The Panama Railroad" | https://history.state.gov/historicaldocuments/frus1948v09/d490 |
| A126 | s43 | "'U.S.' RATES · 'LOCAL' RATES (1950)" | HERDADA (F084) | — | fontes/annualreportofgo1950cana.txt |
| A127 | s44 | 25/01/1955 | HERDADA (F085c) | — | fontes/mecanismo/statute-72-pg405.txt |
| A128 | s44 | "PUBLIC LAW 85-550 (1958)" | CONFIRMADA | "Public Law 85-550 AN ACT July 25, 1958 To implement item 1 of a Memorandum of Understandings attached to the treaty of January 25, 1955" | https://www.govinfo.gov/content/pkg/STATUTE-72/pdf/STATUTE-72-Pg405.pdf |
| A129 | s44 | DSB: "a single basic wage scale for all U.S. and Panamanian employees" | CONFIRMADA | literal; a frase continua "of the U.S. Government in the Canal Zone", e é o resumo do Bulletin | fontes/documento/dsb-1955-02-07.txt |
| A130 | s44 | crédito "treaty of 1955" sobre uma tela com a PL 85-550 | DIVERGE | a lei de 1958 é outra fonte | — |
| A131 | s45 | Art. III(1) de 1936, em vigor em 1939 | HERDADA (F086, F087, F087c) | — | fontes/mecanismo/statute-53-pg1807.txt |
| A132 | s46 | "FROM DECEMBER 31, 1956" | CONFIRMADA | Art. XII: "effective December 31, 1956, there will be excluded from the Privilege of making purchases in the commissaries" | fontes/documento/dsb-1955-02-07.txt |
| A133 | s46 | Dulles, "unjust and unfair competition" | HERDADA (F089) | — | fontes/mecanismo/frus1955-57v07-d161.txt |
| A134 | s46 | crédito "treaty of 1955" | CONFIRMADA | Art. XII | idem A132 |
| A135 | s47 | 1920 "White"/"Colored" | HERDADA (F091) | — | fontes/annualreportofgo1920cana.txt |
| A136 | s47 | 1968 "U.S. citizen schools and Latin American schools" | HERDADA (F092) | — | fontes/documento/pcc-1968_djvu.txt |
| A137 | s47 | "Latin American schools" desde 1954 | NÃO ACHEI (o começo) | a Review de 06/08/1954 usa o termo, mas não o data | fontes/mecanismo/pcr-1954-08-06.txt |
| A138 | s47 | a fonte de 1968 sem URL | CONFIRMADA (o texto) | o dossiê tem a origem | https://archive.org/details/annualreportpana1968pana |
| A139 | s48 | as três cidades de 1960 | HERDADA (F094–F096) | — | — |
| A140 | s48 | opcional: Gamboa 569 de 3,489 | NÃO FOI CHECADO (teto de 0 imagens) | — | fontes/mecanismo/census1960-p57-33-table28.png |
| A141 | s48 | opcional: pessoas por domicílio | NÃO FOI CHECADO (teto de 0 imagens) | — | fontes/experiencia/census1960-t28-domicilios.png |
| A142 | s48 | opcional: anos de escola | NÃO FOI CHECADO (teto de 0 imagens) | — | fontes/experiencia/census1960-t28-escolaridade.png |
| A143 | s48 | Silver City 1950: 5,726 | HERDADA (F097), reforçada | Table 19: "Silver City … Cristobal … 5,726" | fontes/cz-1950-vol2-p51-54ch8.pdf (PDF p. 26) |
| A144 | s48 | nota 4 da Table 4 de 1960, citação | NÃO FOI CHECADO (teto de 0 imagens) | a identidade Silver City = Rainbow City é herdada (F097) | fontes/escala_humana/img/c1960-p57-4-t4.png |
| A145 | s49 | 07/09/1960, Eisenhower | CONFIRMADA (a data é herdada, F101b) | "President Eisenhower took the 'voluntary and unilateral decision'" | fontes/experiencia/icj-1964-panama.txt |
| A146 | s49 | 12/10/1962, "Bridge of the Americas" | CONFIRMADA | "since October 12, 1962, at the Bridge of the Americas (Thatcher Ferry Bridge)" | idem |
| A147 | s49 | Administration Buildings, fim de outubro de 1962 | HERDADA (F102b) | — | idem |
| A148 | s49 | "JANUARY 10, 1963" | HERDADA (F103c) | — | idem |
| A149 | s49 | "DECEMBER 30, 1963" | HERDADA (F104) | — | idem |
| A150 | s49 | "17 SITES CHOSEN FOR BOTH FLAGS (ICJ)" | CONFIRMADA | §19, "seventeen spots" | https://www.icj.org/wp-content/uploads/1964/01/Panama-disturbances-fact-finding-mission-report-1964-eng.pdf |
| A151 | s49 | o 16 atribuído ao "Departamento de Estado" | DIVERGE (atribuição) | O'Meara: "The Governor has 16 sites…" | https://history.state.gov/historicaldocuments/frus1964-68v31/d367 |
| A152 | s49 | DSB: "Outdoor flags at schools were among those eliminated" | CONFIRMADA | literal | fontes/experiencia/departmentofstat501964unit.txt |
| A153 | s49 | crédito ICJ, 1964 | CONFIRMADA | — | fontes/experiencia/icj-1964-panama.pdf |
| A154 | s50 | "JANUARY 7, 1964" | HERDADA (F106, F106b) | — | — |
| A155 | s50 | DSB de 03/02/1964, p. 152 | CONFIRMADA | "THE SITUATION IN PANAMA … 152" | fontes/experiencia/departmentofstat501964unit.txt |
| A156 | s50 | crédito DSB 1964 | CONFIRMADA | — | idem |
| A157 | s51 | 09/01/1964, cerca de 4:45 p.m. | HERDADA (F107) | — | fontes/experiencia/icj-1964-panama.txt |
| A158 | s51 | "ABOUT 200 STUDENTS (ICJ)" | CONFIRMADA | §23 | fontes/experiencia/icj-1964-panama.pdf |
| A159 | s51 | NARA: "several hundred" | CONFIRMADA | "several hundred Panamanian students marched into the Zone" | fontes/evento/nara-declass-blog-2014-11-03.txt |
| A160 | s51 | crédito ICJ | CONFIRMADA | — | — |
| A161 | s52 | a delegação de cinco | HERDADA (F109) | — | fontes/experiencia/icj-1964-panama.txt |
| A162 | s53 | de 6:45 a 7 p.m. | HERDADA (F110) | — | idem |
| A163 | s53 | 4th of July Avenue | HERDADA (F110b) | — | idem |
| A164 | s54 | 4 + 24 "(ACCORDING TO THE U.S. NATIONAL ARCHIVES)" | HERDADA (F112, como atribuição) | "four U.S. soldiers and twenty-four Panamanians were killed" | https://declassification.blogs.archives.gov/2014/11/03/100-years-of-the-panama-canal-the-age-of-transition-1964-73/ |
| A165 | s54 | o 4 + 24 em fonte primária | NÃO ACHEI | FRUS doc. 368: "3 United States soldiers dead" (em 10/01); a CIJ não fecha o total panamenho | fontes/evento/frus1964-68v31-d368.txt |
| A166 | s54 | CIJ: 3 soldados | HERDADA (F113) | — | fontes/experiencia/icj-1964-panama.txt |
| A167 | s54 | CIJ: 95 feridos e 18 mortos no St. Thomas's | CONFIRMADA | "a total of 95 injured persons … Of these, 18 were fatal" | idem |
| A168 | s54 | imprensa panamenha: 21 e 22 | CONFIRMADA (como atribuição) | La Prensa: "21 panameños fallecidos"; La Estrella: "murieron 22 panameños" | https://www.prensa.com/sociedad/panama-conmemora-los-57-anos-de-la-gesta-patriotica-del-9-de-enero/; https://www.laestrella.com.pa/panama/nacional/rutina-panama-esconde-cicatriz-DSLE45072 |
| A169 | s54 | quatro dias | HERDADA (F111) | — | — |
| A170 | s54 | ruptura em 10/01/1964 | HERDADA (F114) | — | fontes/evento/hsg-countries-panama.txt |
| A171 | s54 | legenda "Counts differ between sources…" | CONFIRMADA | A164 a A168 | — |
| A172 | s54 | crédito "U.S. National Archives" | CONFIRMADA | NDC Blog, 03/11/2014 | idem A164 |
| A173 | s56 | Joint Declaration de 03/04/1964 | HERDADA (F116, F116b) | — | fontes/documento/unts-1280-I-21086-en.txt |
| A174 | s57 | "SEPTEMBER 7, 1977 · WASHINGTON" | HERDADA (F118) | — | idem |
| A175 | s57, s59, s63, s64, s66 | crédito "Panama Canal Treaty, 1977" | CONFIRMADA | UNTS vol. 1280, I-21086 | https://treaties.un.org/doc/Publication/UNTS/Volume%201280/volume-1280-I-21086-English.pdf |
| A176 | s58 | "SENATE: 68–32" | CONFIRMADA (subiu à fonte primária) | CR, p. 10541: "yeas 68, nays 32" | https://www.govinfo.gov/content/pkg/GPO-CRECB-1978-pt8/pdf/GPO-CRECB-1978-pt8-5-2.pdf |
| A177 | s58 | "APRIL 18, 1978" | CONFIRMADA | "April 18, 1978 CONGRESSIONAL RECORD — SENATE 10541" | idem |
| A178 | s58 | legenda: dois terços; 68 de 100 | CONFIRMADA | "Two-thirds of the Senators present and voting having voted in the affirmative"; 68 + 32 = 100 | idem |
| A179 | s58 | nota: Neutrality Treaty, 16/03/1978, 68–32 | NÃO ACHEI (uma secundária só) | só o Office of the Historian dá o placar; o CR de 16/03 não foi lido | fontes/documento/hsg-milestone-1977-1980-panama-canal.txt |
| A180 | s58 | crédito "U.S. National Archives" | CONFIRMADA | a NARA diz 68–32 em 18/04; o CR é a fonte primária | https://www.archives.gov/exhibits/treasures_of_congress/text/page25_text.html |
| A181 | s59 | 01/10/1979; "terminates and supersedes" | HERDADA (F120, F120b) | — | fontes/documento/unts-1280-I-21086-en.txt |
| A182 | s60 | "1904–1979 · 75 YEARS" | HERDADA (F121, F121m) | — | fontes/evento/annualreportist00usgoog_djvu.txt |
| A183 | s60 | crédito "Panama Canal Treaty, 1977" para o 1904 | DIVERGE | o 1904 é do relatório da ICC de 1905 | idem |
| A184 | s61 | Albrook, "a proud day" | HERDADA (F125, F125b) | — | fontes/experiencia/departmentofstatd7979unit.txt |
| A185 | s61 | DSB de novembro de 1979 | CONFIRMADA | "Volume 79 / Number 2032 / November 1979", "Panama Acquires Jurisdiction Over the Canal Zone" | idem |
| A186 | s62 | Vance a Mondale, 14/08/1979 | HERDADA (F126) | — | fontes/experiencia/frus1977-80v29-d239.html |
| A187 | s63 | 30 meses | HERDADA (F122) | — | fontes/documento/unts-1280-I-21086-en.txt |
| A188 | s63 | "30 MONTHS (OCTOBER 1979 – MARCH 1982)" e o tribunal extinto em 31/03/1982 | CONFIRMADA | FJC: "abolished the U.S. District Court for the Canal Zone, effective March 31, 1982" | https://www.fjc.gov/history/courts/us-court-appeals-fifth-circuit-legislative-history |
| A189 | s63 | as escolas passaram à Defesa | HERDADA (F123) | — | fontes/escala_humana/pcc1980_djvu.txt |
| A190 | s64 | "DECEMBER 31, 1999" | CONFIRMADA | Art. II(2): "terminate at noon, Panama time, December 31, 1999" | fontes/documento/unts-1280-I-21086-en.txt |
| A191 | s65 | "8 U.S.C. § 1403 · 'AT THE TIME OF THE BIRTH'" | HERDADA (F067, F074) | — | fontes/documento/govinfo-uscode-8-1403.txt |
| A192 | s66 | "if it were the sovereign" e "territorial sovereign" | HERDADA (F134, F135) | o Art. I(2) também foi conferido | fontes/documento/unts-1280-I-21086-en.txt |
| A193 | s67 | a ACP no Administration Building, Balboa, em 2026 | HERDADA (F136; volátil) | cópia de 14/10 (resposta 9 da seção "O que vai à Sala") | fontes/evento/acp-en-history.txt |
| A194 | s10 | John Hay, Secretary of State, em 1903 | HERDADA (F013c) | — | fontes/mecanismo/avalon-pan001.txt |
| A195 | s10 | Secretário de Estado de 1898 a 1905 | CONFIRMADA | "Entry on Duty: September 30, 1898"; "Termination of Appointment: July 1, 1905" | https://history.state.gov/departmenthistory/people/hay-john-milton |
| A196 | s10 | "Photo from 1902" (J. E. Purdy) | CONFIRMADA (no registro da LoC copiado pelo Commons) | "Date: 1902"; "Photo copyrighted by J.E. Purdy, Boston" | https://commons.wikimedia.org/wiki/File:John_Hay,_1838-1905,_head_and_shoulders_portrait,_facing_slightly_left._Secretary_of_State_LCCN2005689081.jpg |
| A197 | s10 | Bunau-Varilla, "Envoy Extraordinary and Minister Plenipotentiary of the Republic of Panama" | CONFIRMADA | literal no tratado | fontes/documento/stat-33-2234-tratado-1903.txt |
| A198 | s32 | o cartão dos Knapp | HERDADA (F052) | = A094 | — |
| A199 | s49 | bandeira dos EUA de 50 estrelas, oficial desde 04/07/1960 | CONFIRMADA | EO 10834, Sec. 31: "on that date the flag prescribed by Part I of this order shall become the official flag" | https://www.archives.gov/federal-register/codification/executive-order/10834.html |
| A200 | s49 | a bandeira do Panamá "a mesma desde 1903/1925" | NÃO ACHEI (fonte primária) | a Ley 34 de 1949 não foi lida; as secundárias concordam | https://www.worldatlas.com/webimage/countrys/namerica/camerica/panama/paflags.htm |
| A201 | s64 | Panama Canal Commission, "the U.S. agency that ran the canal, 1979–1999" | CONFIRMADA | PL 96-70, "Chapter 1—Panama Canal Commission"; o Art. II(2) | fontes/evento/STATUTE-93-Pg452.txt |
| A202 | s67 | Panama Canal Authority, "Panama's agency that runs the canal since 1999" | CONFIRMADA | ACP: "al mediodía … del 31 de diciembre de 1999 … Autoridad del Canal de Panamá … Ley 19 del 11 de junio de 1997" | fontes/evento/acp-resena-historica-del-canal-de-panama.txt |
| A203 | s03, s15, s18 | "Canal Zone Government" como nome escrito | DIVERGE (nas cenas de 1914) | órgão de 01/07/1951 a 30/09/1979: o relatório de 1958 é "the seventh annual report of the Governor of the Canal Zone"; liquidado "effective September 30, 1979" | fontes/documento/annualreportpana1958pana.txt; fontes/escala_humana/pcc1980_djvu.txt |
| A204 | s31, s33 | Panama Canal Company, 1951–1979 | CONFIRMADA | "its reorganization on July 1, 1951"; liquidada em 30/09/1979 | idem |
| A205 | s49, s51 | "INTERNATIONAL COMMISSION OF JURISTS (GENEVA), 1964" | CONFIRMADA | "International Commission of Jurists (ICJ) Geneva, Switzerland" | fontes/experiencia/icj-1964-panama.pdf |
| A206 | s54 | "U.S. NATIONAL ARCHIVES, 2014" | CONFIRMADA | o post é de 03/11/2014 | idem A164 |
| A207 | s63 | "DEPARTMENT OF DEFENSE" | HERDADA (F123) | — | — |
| A208 | s51, s53 | National Institute, "a public high school in Panama City" | NÃO ACHEI (o "public") | a CIJ sustenta escola secundária na Cidade do Panamá ("Panamanian National Institute", "Headmaster") | fontes/experiencia/icj-1964-panama.txt |
| A209 | s50, s52 | Balboa High School, escola da Zona | CONFIRMADA | o DSB; a CIJ (Gorgas Road, do lado da Zona) | idem |
| A210 | várias | "FOREIGN AFFAIRS MANUAL", "DEPARTMENT OF STATE BULLETIN" | CONFIRMADA | são os nomes das publicações | fontes/documento/fam-8-302-4.txt |

**Placar:** 101 HERDADA, 82 CONFIRMADA, 9 DIVERGE, 7 NÃO ACHEI, 0 REFUTADA e 11 NÃO FOI CHECADO. Somam 210.

## Achados acionáveis

1. **[MÉDIO] A203.** "CANAL ZONE GOVERNMENT" em cena de 1914 é anacronismo: o órgão existiu de 1951 a 1979.
   - CONSERTO: nas s15 e s18, escrever `THE PANAMA CANAL`, o nome do órgão em 1914, como nos relatórios. `CANAL ZONE GOVERNMENT` fica só em cena de 1951 a 1979, e a s03 (Balboa, 1960) pode manter.
   - RAIZ: INSTRUÇÃO. A pauta de logos lista o nome sem o período.
2. **[MÉDIO] A005, A118 e A004.** As legendas transformam o "não publicou" em "não contou" e "não registrou".
   - CONSERTO s02: `Born in the U.S. = place of birth; the census published no count of citizens.`
   - CONSERTO s39: `Place of birth only; the census did not tabulate their citizenship.`
   - Tirar "in the 50 states", que deixa o D.C. de fora e não foi conferido.
   - RAIZ: INSTRUÇÃO.
3. **[LEVE] A014, A018, A130 e A183.** Os créditos cobrem só parte da tela.
   - s06: `Sources: U.S. Census Bureau, 1960; Isthmian Canal Convention, 1903`
   - s07: `Source: U.S. Census Bureau, censuses of 1920–1970`
   - s44: `Sources: U.S.–Panama treaty of 1955; Public Law 85-550, 1958`
   - s60: `Sources: Isthmian Canal Commission, 1905; Panama Canal Treaty, 1977`
   - RAIZ: INSTRUÇÃO.
4. **[LEVE] A038, A039 e A040 (s16).**
   - Tela: `3,988 HOUSES DESTROYED OR REMOVED (BY JUNE 30, 1915)`.
   - Legenda: `Houses, not people.`
   - A nota da pesquisa passa a dizer: "ordem de despovoamento de 05/12/1912; limpeza desde 01/01/1913".
   - Nada na voz.
   - RAIZ: PONTUAL.
5. **[LEVE] A151.** A divergência 17 × 16 passa a se escrever "17 (CIJ) × 16 (Gen. Andrew P. O'Meara, CINCSOUTH, ao telefone, 09/01/1964; FRUS 1964–68, vol. XXXI, doc. 367)". Na tela, só `17 SITES (ICJ)`. RAIZ: PONTUAL.
6. **[LEVE] A146.** Se a ponte for nomeada: `BRIDGE OF THE AMERICAS (THEN THATCHER FERRY BRIDGE)`. RAIZ: PONTUAL.
7. **[LEVE] A125.** `NOVEMBER 1948 · NEW PAY SCHEDULES FOR MORE THAN 23,000 EMPLOYEES`. RAIZ: PONTUAL.
8. **[LEVE] A098.** `Source: Mary and Herbert Knapp, The Panama Canal Review, Oct. 1, 1979`. RAIZ: PONTUAL.
9. **[LEVE] A137.** `"LATIN AMERICAN SCHOOLS" (BY 1954)`, nunca "since 1954". RAIZ: PONTUAL.
10. **[LEVE] A208.** `National Institute — a high school in Panama City`, sem "public" até ler uma fonte primária. RAIZ: PONTUAL.
11. **[LEVE] A107.** Se o 1940 for à tela: `1940 · 23,638 OF 51,827 RESIDENTS LIVED IN MILITARY AREAS (45.6%)`. O "23.638 moradores" do relato é a população da área militar, não a da Zona. RAIZ: PONTUAL.
12. **[LEVE] A138.** Na `fontes_adicionais` da s47, a URL passa a `https://archive.org/details/annualreportpana1968pana`. RAIZ: PONTUAL.
13. **[LEVE] A176 e A180, opcional.** O crédito da s58 pode subir para `Source: Congressional Record, April 18, 1978`. A179 só vai à tela com o crédito `U.S. Department of State, Office of the Historian`. RAIZ: PONTUAL.

## Lista de nomes

- "o Departamento de Estado, de primeira hora" (o 16) → Gen. Andrew P. O'Meara, Commander in Chief, U.S. Southern Command (CINCSOUTH), na conversa por telefone de 09/01/1964. FRUS 1964–68, vol. XXXI, doc. 367: https://history.state.gov/historicaldocuments/frus1964-68v31/d367. O cargo está no DSB de 1964: "General [Andrew P.] O'Meara, Commander in Chief, Southern Command (CINCSOUTH)".
- "a imprensa panamenha" (21 e 22):
  - 21 → La Prensa, Henry Cárdenas P., 09/01/2021: https://www.prensa.com/sociedad/panama-conmemora-los-57-anos-de-la-gesta-patriotica-del-9-de-enero/
  - 22 → La Estrella de Panamá, "La cicatriz de Panamá que la rutina esconde" (2018): https://www.laestrella.com.pa/panama/nacional/rutina-panama-esconde-cicatriz-DSLE45072
- "a NARA" (4 + 24) → Patrice Brown, Senior NDC Archivist, NDC Blog, 03/11/2014 (herdado).
- "os representantes dos EUA" (o 1,568) → registrados na nota de R. J. Alfaro e Narciso Garay (Panamanian Treaty Commission) a Cordell Hull, Secretário de Estado, de 02/03/1936 (53 Stat. 1831). Os representantes americanos não são nomeados.

## Os 2 padrões mais vistos

1. **O crédito cobre só uma das fontes da tela** (s06, s07, s44 e s60): um número vem de uma fonte e o crédito nomeia outra.
2. **A legenda endurece o que a fonte diz** (s02, s39 e s16): "não publicou" vira "não contou" ou "não registrou", e "o trecho não conta" vira "o relatório não conta".

## O que vai à Sala

**NÃO FOI CHECADO (teto de 0 imagens).** A004, A006, A013, A078, A084, A085, A106, A140, A141, A142 e A144. Os arquivos estão na tabela. Nenhum deles vai à tela sem uma leitura com orçamento de imagem.

**Outros pontos sem leitura:**
- s67 hoje: o WebFetch recusou o domínio pancanal.com ("Unable to verify if domain pancanal.com is safe to fetch"). É restrição da ferramenta, não recusa do site. A cópia de 14/10 e a leitura da pesquisa de 15/10 valem.
- O catálogo da LoC para a data da foto de Hay (A196) não foi tentado, porque a LoC recusa robô (403 do Cloudflare, registrado no CLAUDE.md): https://www.loc.gov/pictures/item/2005689081/
- A lei panamenha dos símbolos (A200) e a condição pública do Instituto Nacional (A208): fontes primárias não lidas.

**Voláteis:**
- s67, o endereço da ACP. Cresce se a ACP mudar de sede ou de rodapé; zera se o rodapé continuar. Reconferir na véspera de publicar.
- A letra do 8 FAM 302.4 (CT:CITZ-135, herdado).

**DECISÕES DO LUCAS PENDENTES que tocaram esta checagem:**
- s49: bandeira sobre mapa (identidade §6), uso não perguntado.
- s16: o "privately owned" da voz. Recomendo não regravar; regravar é gasto e decisão dele.
- s54: a imprensa panamenha como fonte dos 21 e 22.
- Onde gravar os laudos dos próximos vídeos (roupa §2).

VEREDITO: RESSALVA

---

# Lote B

COBERTURA: 209 de 214 (lote B; 5 itens NÃO FOI CHECADO porque só se leriam na imagem, com teto de 0 imagens: B074, B109, B113, B115, B127). A checagem é PARCIAL, e por isso este laudo não pode sair PASS.

- **Como a lista foi derivada: à mão, pelos arquivos inteiros.** O canal não tem extrator de afirmações. Cada linha abaixo é uma afirmação que pode ir à tela:
  - `pauta-documentos.json`: 25 itens. Cada um deu uma linha de identificação (título, data, autor, página) e uma linha por grifo, 47 ao todo. A elas somei 1 afirmação nova (B073, as notas de 1936) e 1 linha de cabeçalho (B074). São 74.
  - `pauta-geo.json` e `.md`: 10 camadas, partidas em 29 afirmações de fonte, data, limite, rótulo, medida e crédito.
  - `conferencia-midia.json`: os 46 vereditos `aprovado`.
    - Os 15 de documento dão uma linha cada, com crédito e rótulo.
    - O retrato do Hay dá 2 linhas (ano e crédito). Ele não tem lugar na origem: o lugar é NADA A CHECAR.
    - As 30 fotos dão 3 linhas cada: o lugar, o ano com o aviso de ano, e o crédito.
    - A s47 ganha mais 4 linhas, uma por rótulo de categoria.
  - O relato da pesquisa (`_tmp/setores/zona-do-canal-pesquisa-1.md`) serviu de mapa, não de placar. Os relatos das peças não foram lidos por inteiro.
- **sha256 das entradas** (12 primeiros caracteres):
  - pautas e conferente: `pauta-documentos.json` a4caa8904749 · `.md` 750dfc4a2006 · `pauta-geo.json` 244a037bea33 · `.md` f1f1847993c2 · `pauta-imagens.json` a76bffa216d4 · `.md` 47f9ef20bb56 · `conferencia-midia.json` 58197f2e0b9a · `.md` a746ac6a3a81;
  - texto e laudo herdado: `espelho.json` d760e53faa83 · `roteiro-narrador.md` 9828291d9248 · `fatos.laudo.md` 38f51e4db53e · `fatos-tabela.json` 100a9230bfde · `fundamento.json` d6d34e357d7d · relato do setor dc17e16702e2;
  - as camadas de `_media/geo/` batem uma a uma com o `pauta-geo.json` (390c72ba…, 862fcaa3…, e708d77c…, 983539f0…, 771273f1…, ea755639…, 6f2aa85e…, b6d00661…, 1c6c4ae5…, c708fe10…);
  - a cópia do tratado de 1903 (0fc0d2792468) bate com a `copia_local_sha256` da pauta.
- **Fontes locais lidas pela camada de texto** (PyMuPDF e .txt, nenhuma imagem aberta):
  - Statutes: `stat-33-2234` 0fc0d279, `stat-37-560` fb9a564e, `stat-50-558` 1f51fe87, `stat-53-1807` b95541ff, `statute-72-pg405` 6e42356e;
  - `crecb-1977-pt22-3-2.pdf` b7437080 · `dsb-1955-02-07.txt` 12057250 · `icj-1964-panama.txt` d80a44c5;
  - relatórios do governador: 1920 27f52c22, 1930 3ea40c57, 1940 228a5226, 1950 cdd00085; relatórios da Zona de 1958 63d86faa e 1965 b92b6a02;
  - `departmentofstat501964unit.txt` f56e48a0 · `panamacanalrevie1979pana.txt` 373223ed · `fam-8-302-4.txt` 55596a34;
  - FRUS: d927 de8381d9, d931 8670d16c, d239 f5432139, `frus1915-d1732` a6be1544;
  - `avalon-pan001` 9a7e8877 · `annualreportofis1912isth` 91082271 · `laestrella-2018-cicatriz` b06ce426 · `census-history-2024-08` 5a06e19b · `pcr-1954-08-06` 1456b1f2 · `deslocamento-1936.json` 1658c05a.
- **Rede, toda pela porta oficial e com o User-Agent do canal** (`contato.naka@hotmail.com`), um pedido por vez:
  - a API v2 da NARA para os 30 itens de foto: 30 respostas 200, gravadas fora do canal em `%TEMP%/claude/vf-zona-B/nara/nara.json` (sha256 355477359d22);
  - a API do Commons, para 3 arquivos;
  - a API do OSM (`api/0.6`), para 18 objetos;
  - o Nominatim (sem resultado) e a busca do archive.org (sem a Review de 1952);
  - WebFetch: Cancillería de Colombia, FRUS 1924 doc. 229, Natural Earth, a política do govinfo e a Wikipedia (Arco Iris e Paraíso).
  - Nenhum site recusou robô. Não usei web.archive.org.

NOTA: 8.5/10. Os 47 grifos são literais na fonte, e as datas e os lugares das 30 fotos batem com a NARA. A nota cai por quatro pontos frágeis: o rótulo "Latin American" sobre a foto de Paraíso não tem fonte primária; a lista de 1936 tem acréscimos nas notas trocadas no mesmo dia; o contorno de 1947 não é o de 1960 e 1964 em Colón; e 5 itens só se conferem na imagem.

Data-base: 15/10/2026 (Brasília).

## Respostas ao pedido

**1. s29: as notas de 1936.**
- **A tela não pode chamar as classes (a) a (f) de lista completa.** O próprio cabeçalho do tratado diz "And exchanges of notes." (53 Stat. 1807).
- **O que as notas dizem:**
  - Em 02/03/1936, R. J. Alfaro e Narciso Garay (Panamanian Treaty Commission) escreveram a Hull que o Panamá "would have no objection to the residence therein of the following persons also: settlers engaged in the cultivation of truck gardens to furnish vegetables to the residents of the Canal Zone; hucksters engaged in the sale of such vegetables; proprietors of small establishments for the supply of such settlers and hucksters, and members of the families of all these persons."
  - A mesma nota continua: "It is also understood that the settlers engaged in the cultivation of small tracts under agricultural licenses issued by the Panama Canal will continue to reside in the Canal Zone". Na época, "about 1,568 agricultural licenses" estavam em vigor, e todas, "except a few, such as those for Chinese gardens", estavam sendo encerradas "by natural processes".
  - Hull respondeu: "In reply I have the honor to confirm the understanding reached on the foregoing points" (53 Stat. 1831–1833).
  - Outra nota acrescenta que as restrições "in no wise affect the guests of hotels" (53 Stat. 1834).
- **Como a tela nomeia, sem passar do documento:**
  - A folha leva o rótulo do próprio artigo: `ART. III(2), 1936 TREATY`.
  - Os grifos são as palavras do artigo, letra a letra.
  - Nunca escrever `ONLY`, `THE FULL LIST`, `6 CLASSES — NO ONE ELSE`.
  - Na classe (d), nunca escrever "licensed businesses" nem "a few" como se fosse texto do tratado. A classe (d) é "companies entitled under Section 5 of this Article", e a Seção 5 proíbe "private business enterprises other than those existing therein at the time of the signature of this Treaty", com exceção das ligadas ao canal.
  - Se a cena quiser mostrar o acréscimo, uma linha opcional: `Notes exchanged the same day also allowed truck gardeners, vegetable sellers and licensed farm settlers (53 Stat. 1831–1833)`.
- **Na voz:** "a short list" e "Nobody lived in the Zone just because they wanted to" continuam de pé. O "only those who worked or served there" da s65 fica frouxo (achado A3, LEVE).

**2. s47: "white" e "Latin American".**
- **"white" em Ancón: CONFIRMADA.**
  - O relatório de 1920 traz "the white pupils of the Pedro Miguel, Ancon, and Balboa Schools".
  - O de 1930 traz "For white children there are six elementary schools, in Ancon, Balboa, Pedro Miguel, Paraiso, Gatun, and Cristobal". As escolas para "colored children" ficavam em La Boca, Red Tank, Paraiso, Gamboa, Las Cascadas, Gatun e Cristobal (Silver City). Ancón não tem nenhuma.
  - A palavra pousa na foto da escola de Ancón de 1918 entre aspas, como palavra do relatório, com "Photo from 1918".
- **"Latin American" em Paraíso: NÃO ACHEI.**
  - Nenhuma fonte primária diz que a escola da foto de 1953 ("Elementary - Junior High School, F.Y. 1953, Paraiso") era da rede "Latin American".
  - Paraíso teve as duas redes em 1930 ("white" e "colored").
  - A PCR de 1954 cita os "11 schools" da rede "Latin American" sem dar os nomes.
  - Só a Wikipedia (sem nota de rodapé) fala de uma escola secundária em Paraíso, inaugurada em 1956.
- **A palavra sobre o par:** "U.S. citizen schools" e "Latin American schools" são palavras dos relatórios de 1958 e 1965 (por exemplo, "U.S. citizen schools 10,353 · Latin American schools 3,459"). Elas vão como legenda do PAR, nunca pregadas na foto de Paraíso (achado A2, MÉDIO).
- **Balboa High School como "U.S. citizen school": CONFIRMADA.** O relatório de 1965 cita "Balboa High School, Cristobal High School…", seguido de "The first regular summer school for the U.S. schools".
- **"colored" em La Boca: CONFIRMADA** pela própria legenda da foto, "School House for Colored Children".

**3. s09: a divisa com a Colômbia.**
- A linha do Natural Earth é a de hoje. Ela foi fixada pelo "Tratado de Límites entre la República de Colombia y la República de Panamá", assinado em Bogotá em 20 de agosto de 1924 por Jorge Vélez e Nicolás Victoria J. (Cancillería de Colombia).
- O traçado segue a descrição do Art. III do tratado EUA–Colômbia de 1914: "From Cape Tiburón … to a point on the Pacific half way between Cocalito and La Ardita" (FRUS 1924, doc. 229).
- Se ela coincide com o limite de 1903: NÃO ACHEI.
- **A cena pode afirmar** que o Panamá se separou da Colômbia e acender o istmo. Ela **não pode** datar a linha em 1903.
- **O que fazer, em ordem de preferência:**
  1. acender o Panamá sem desenhar a divisa leste;
  2. se a linha aparecer, que seja fina e sem data, ou com o rótulo `Present-day border`.
- Nunca `BORDER, 1903`.

**4. s48: Rainbow City no lugar da Silver City de 1947.**
- **É a mesma cidade, com o nome trocado: CONFIRMADA.** Fonte: a nota do Census de 1960, "Rainbow City town reported as Silver City town prior to 1960", transcrita no dossiê (`fundamento.json`, esc-11 e esc-12; herdada F097).
- **A data da troca: NÃO ACHEI** em fonte primária. A Wikipedia diz "On May 1, 1952, the change of name to Rainbow City was made effective by Newcomer", citando a PCR de 02/05/1952, que não está no archive.org.
- **O contorno: NÃO ACHEI** que o de 1960 seja o de 1947. A Wikipedia registra "an extension to Silver City" a partir de 1951.
- **Na tela:**
  - o pino de 1947 (centróide da mancha da folha) serve de PONTO, nunca de área;
  - os rótulos: `Rainbow City` (1960) e `Silver City` (1950 census), como a voz já diz;
  - nenhuma data de renomeação.

**5. s49, s53 e s65: o contorno de 1947 em 1960 e 1964.**
- **Não vale tal qual em Colón.** O tratado de 25/01/1955 mudou o limite depois da folha (DSB, 07/02/1955):
  - **Art. V:** sobre "the area known as PAITILLA POINT", os EUA "shall relinquish all the rights, power and authority granted to it in such area under the Convention signed November 18, 1903". O polígono de 1947 já não inclui Paitilla, então ali nada muda na tela.
  - **Art. VI:** trocou o limite "between the City of Colón … and the Canal Zone" e passou a Colón a parte do Colón Corridor ao norte de 9°21'. O artigo vale "upon completion of the withdrawal … from … New Cristobal, Colón Beach and the de Lesseps Area". Em que ano isso se completou: NÃO ACHEI.
  - A Convenção de 24/05/1950 sobre o Colón Corridor também é posterior à folha.
- **Escala da Zona inteira (s65):** o contorno serve com o rótulo `Canal Zone (1947 map)`, ou sem data. Nunca `1960` nem `1964`.
- **Colón e o Administration Building de Cristóbal (s49):** não desenhar a divisa de 1947 em close. Se aparecer, declarar o mapa e o ano: `Boundary as mapped in 1947`.
- **Cidade do Panamá (s49, Shaler Triangle; s53):** use a `linha-1914-panama`, desenhada sobre a folha de 1936. O tratado de 1955 não mexe nessa linha. O relatório da CIJ de 1964 confirma a fronteira na avenida: "the National Institute on the Panamanian side of 4th of July Avenue".

## TABELA

### Documentos (pauta-documentos)

| id | cena | afirmação | veredito | o que a fonte diz | URL ou arquivo local |
|---|---|---|---|---|---|
| B001 | s12, s38, s66 | 33 Stat. 2235: Isthmian Canal Convention, 18/11/1903, proclamada em 26/02/1904; Art. III inteiro | CONFIRMADA | "ISTHMIAN CANAL CONVENTION. November 18, 1903. 2235"; Avalon: "proclaimed February 26, 1904" | `fontes/documento/stat-33-2234-tratado-1903.pdf`; `mecanismo/avalon-pan001.txt` |
| B002 | s12 | grifo "all the rights, power and authority" | HERDADA (F016), grifo conferido na página | "The Republic of Panama grants to the United States all the rights, power and authority within the zone mentioned and described in Article II" | idem |
| B003 | s12 | grifo "would possess and exercise if it were the sovereign of the territory" | HERDADA (F016b), conferido | "…which the United States would possess and exercise if it were the sovereign of the territory within which said lands and waters are located…" | idem |
| B004 | s38 | grifo "if it were the sovereign" | HERDADA (F073), conferido | idem, Art. III | idem |
| B005 | s66 | grifo "if it were the sovereign" | HERDADA (F134), conferido | idem, Art. III | idem |
| B006 | s59 | 33 Stat. 2234: cabeçalho, proclamação, Art. I e começo do Art. II | CONFIRMADA | "2234 ISTHMIAN CANAL CONVENTION. November 18, 1903. … Signed at Washington, November 18, 1903" | idem |
| B007 | s59 | grifo "in perpetuity" (Art. II) | HERDADA (F014, F120d), conferido | "ARTICLE II. The Republic of Panama grants to the United States in perpetuity the use, occupation and control of a zone of land and land under water" (o OCR lê "underwater") | idem |
| B008 | s13 | 37 Stat. 560: ch. 390, 24/08/1912, título e Sec. 1 | CONFIRMADA | "Chs. 389-390. 1912. 560 … [Public, No. 337.] Panama Canal Act" | `fontes/documento/stat-37-560.pdf` |
| B009 | s13 | grifo "government of the Canal Zone" (título do capítulo) | HERDADA (F017), conferido | "CHAP. 390.—An Act To provide for the opening, maintenance, protection, and operation of the Panama Canal, and the sanitation and government of the Canal Zone." | idem |
| B010 | s13 | grifo "shall be known and designated as the Canal Zone" (Sec. 1) | HERDADA (F018), conferido em outra cópia | no scan, a faixa preta corta "the Ca[nal]" (OCR "the Cs� Zone"); o relatório de 1912 reproduz a lei: "shall be known and designated as the Canal Zone, and the canal now being constructed thereon shall hereafter be known and designated as the Panama Canal" | idem; `fontes/annualreportofis1912isth.txt` |
| B011 | s13 | 37 Stat. 561, Sec. 4: o governador (a pauta corrige a "seção 7" do roteiro-editor) | CONFIRMADA | "Sec. 4. That when in the judgment of the President …"; nota de margem "Appointment of governor." | `stat-37-560.pdf` |
| B012 | s13 | grifo "The governor of the Panama Canal shall be appointed by the President" | HERDADA (F018b), conferido | "The governor of the Panama Canal shall be appointed by the President, by and with the advice and consent of the Senate" | idem |
| B013 | s14 | 37 Stat. 565, Sec. 8 | CONFIRMADA | "Sec. 8. That there shall be in the Canal Zone one district court with two divisions, one including Balboa and the other including Cristobal" | idem |
| B014 | s14 | grifo "one district court" | CONFIRMADA | idem | idem |
| B015 | s14 | grifo "jurors from among the citizens of the United States" | HERDADA (F019), conferido | "compensation of jurors from among the citizens of the United States, to be subject to jury duty in either division" | idem |
| B016 | s35 | 50 Stat. 558: ch. 563, Public No. 242, S. 2416, 04/08/1937 | CONFIRMADA | "August 4,1937 [S. 2416] [Public, No. 242] … [CHAPTER 563]" | `fontes/documento/stat-50-558.pdf` |
| B017 | s35 | grifo do título "Relating to the citizenship of certain classes of persons born in the Canal Zone or the Republic of Panama" | CONFIRMADA | "AN ACT Relating to the citizenship of certain classes of persons born in the Canal Zone or the Republic of Panama." | idem |
| B018 | s35 | grifo "whose father or mother or both at the time of the birth of such person was or is a citizen of the United States" | HERDADA (F067, F074), conferido | Sec. 1, letra a letra | idem |
| B019 | s29 | 53 Stat. 1807: assinado em 02/03/1936; T.S. No. 945; ratificações trocadas e proclamação em 27/07/1939 | CONFIRMADA | "Signed at Washington March 2, 1936; … ratifications exchanged at Washington July 27, 1939; proclaimed July 27, 1939. And exchanges of notes." | `fontes/documento/stat-53-1807-tratado-1936.pdf` |
| B020 | s29 | grifo "Signed at Washington March 2, 1936" | HERDADA (F043), conferido | idem | idem |
| B021 | s29 | grifo "ratifications exchanged at Washington July 27, 1939", com o localizador "Art. XI (53 Stat. 1826)" para a entrada em vigor | DIVERGE (só o localizador) | o grifo está certo. A cláusula de vigência é o **Article XII** (p. 1826): "The present Treaty shall be ratified … and shall take effect immediately on the exchange of ratifications which shall take place at Washington." | idem, p. 1826 |
| B022 | s29 | 53 Stat. 1811: Art. III(2), classes (a) a (f), duas colunas | CONFIRMADA | bloco em inglês à esquerda; margem "Residence restrictions." | idem |
| B023 | s29 | grifo "No person who is not comprised within the following classes shall be entitled to reside within the Canal Zone" | CONFIRMADA | "2) No person who is not comprised within the following classes shall be entitled to reside within the Canal Zone:" | idem |
| B024 | s29 | grifo (a) | HERDADA (F045), conferido | "(a) Officers, employees, workmen or laborers in the service or employ of the United States of America, the Panama Canal or the Panama Railroad Company, and members of their families actually residing with them;" | idem |
| B025 | s29 | grifo (b) | HERDADA (F046), conferido | "(b) Members of the armed forces of the United States of America and members of their families actually residing with them;" | idem |
| B026 | s29 | grifo (c) | HERDADA (F047), conferido | "(c) Contractors operating in the Canal Zone and their employees, workmen and laborers during the performance of contracts;" | idem |
| B027 | s29 | grifo (d), que a voz chama "a few licensed businesses" | HERDADA (F047b) para a voz; o grifo está CONFIRMADO | "(d) Officers, employees, or workmen of companies entitled under Section 5 of this Article to conduct operations in the Canal Zone;". A Seção 5: "will not permit the establishment … of private business enterprises other than those existing therein at the time of the signature". "licensed" e "a few" não estão na página | idem, pp. 1811–1812 |
| B028 | s29 | grifo (e) | HERDADA (F047), conferido | "(e) Persons engaged in religious, welfare, charitable, educational, recreational and scientific work exclusively in the Canal Zone;" | idem |
| B029 | s29 | grifo (f) | HERDADA (F047), conferido | "(f) Domestic servants of all the beforementioned persons and members of the families of the persons in classes (c), (d) and (e) actually residing with them." | idem |
| B030 | s44 | 72 Stat. 405: Public Law 85-550, 25/07/1958, Sec. 1(a)–(b) | CONFIRMADA | "Public Law 85-550 AN ACT July 25. 1958 To implement item 1 of a Memorandum of Understandings…"; Sec. 1(b): "the Government of the United States assumed certain obligations set forth in item 1" | `fontes/mecanismo/statute-72-pg405.pdf` |
| B031 | s44 | grifo "treaty of January 25, 1955" | HERDADA (F085c), conferido | "attached to the treaty of January 25, 1955" | idem |
| B032 | s44 | grifo do princípio (a) | HERDADA (F085), conferido | "(a) The basic wage for any given grade level will be the same for any employee eligible for appointment to the position without regard to whether he is a citizen of the United States or of the Republic of Panama." | idem |
| B033 | s44 | grifo "Public Law 85-550 — July 25, 1958" | CONFIRMADA | o cabeçalho impresso é "PUBLIC LAW 85-550-JULY 25, 1958" (hífen, não travessão; o OCR da p. 405 lê "8 5 - 6 5 0"); a margem traz "Public Law 85-550" | idem |
| B034 | s07 | Census 1960, Vol. I, Part 57, p. 57-33, Table 28 | HERDADA (F002, F009) | "Table 28.—SOCIAL CHARACTERISTICS OF THE POPULATION, FOR COURT DISTRICTS AND PLACES OF 2,500 OR MORE: 1960" (leitura gravada pelo conferente; o PDF não tem camada de texto) | `conferencia-midia.json` › census1960-p57-33; `fundamento.json` esc-12 |
| B035 | s07 | grifo "COUNTRY OF BIRTH — Born in Canal Zone / Born in other outlying area of the U.S. / Born in the United States / Born in other country" | HERDADA (F009) | dossiê: "Born in Canal Zone 1,041 … Born in other outlying area of the U.S. 1 … Born in the United States 1,580 … Born in other country 517"; são linhas, não colunas | `fundamento.json` (esc-12); `conferencia-midia.json` |
| B036 | s33 | Census 1970, Part 57, p. 57-16, Table 7 "Ethnic Characteristics: 1970" | HERDADA (F059) | conferente: "'Table 7. Ethnic Characteristics: 1970'; … rodapé '57-16 CANAL ZONE'" | `conferencia-midia.json`; `fundamento.json` esc-13 |
| B037 | s33 | grifo "PLACE OF BIRTH" | HERDADA (F059) | dossiê: "PLACE OF BIRTH … Total population 44 198 … Born in United States 23 559" | idem |
| B038 | s56, s59, s66 | Congressional Record, Senado, 08/09/1977, p. 28306, texto impresso a pedido do senador Muskie | CONFIRMADA | "28306 CONGRESSIONAL RECORD- SENATE September 8, 1977"; "Mr. MUSKIE. … I ask unanimous consent that a copy of that text be printed in the RECORD." O "vol. 123" não está no texto: não vai à tela | `out/…/_tmp/pesquisa-documentos/fontes/crecb-1977-pt22-3-2.pdf` |
| B039 | s56 | grifo "Acting in the spirit of the Joint Declaration of April 3, 1964" | HERDADA (F116), conferido | "Acting in the spirit of the Joint Declara- tion of April 3, 1964, by the Representatives of the Governments…" | idem |
| B040 | s59 | grifo "this Treaty terminates and supersedes: (a) The Isthmian Canal Convention … signed at Washington, November 18, 1903" | HERDADA (F120b), conferido | "1. Upon its entry into force, this Treaty terminates and supersedes: (a) The Isthmian Canal Convention … signed at Washington, ~ovember 18, 1903;" | idem |
| B041 | s66 | grifo "as territorial sovereign" | HERDADA (F135), conferido | "the Republic of Panama, as territorial sovereign, grants to the United States of America, for the dura- tion of this Treaty…" (Art. I(2); o termo se repete no Art. III(1)) | idem |
| B042 | s24, s41 | Relatório do governador, ano fiscal até 30/06/1940, p. 62 | CONFIRMADA | IA: leaf 72 (n71) = "pageNumber 62" | `fontes/mecanismo/ia1940-page_numbers.json` |
| B043 | s24, s41 | idem, p. 63 | CONFIRMADA | leaf 73 (n72) = "pageNumber 63" | idem |
| B044 | s24 | grifo "with a few exceptions, citizens of the United States" | HERDADA (F033), conferido | "The gold employees — that is, those carried on the gold pay roll — are, with a few exceptions, citizens of the United States" | `fontes/annualreportofgo1940cana.txt` |
| B045 | s24 | grifo "a considerable number of whom are Panamanians" | HERDADA (F033b), conferido | "The force of silver employees is composed almost entirely of natives of the Tropics, a considerable number of whom are Panamanians." | idem |
| B046 | s41 | grifo "a matter of long custom in tropical countries" | HERDADA (F082), conferido | "The division of labor between the two classes of employees is a matter of long custom in tropical countries" | idem |
| B047 | s26 | Relatório de 1920, p. 247, tabela da Division of Schools | CONFIRMADA | a tabela termina antes de "248 THE PANAMA CANAL" | `fontes/annualreportofgo1920cana.txt` |
| B048 | s26 | grifo "White schools / Colored schools", com matrícula e frequência | HERDADA (F037, F091), conferido | "Net enrollment White schools Colored schools … 2,004 1,481 … Average daily attendance … 1,588.5 864.9" | idem |
| B049 | s26 | grifo "Average monthly wages of teachers: White $158.46 / Colored $76.00" | HERDADA (F037, F037m) | "Average monthly wages of teachers: White Colored … $158. 46 $76. 00" | idem |
| B050 | s31 | Relatório de 1950, p. 43, "Quarters"; governador F. K. Newcomer | CONFIRMADA | leaf 57 (n56) = p. 43; "F. K. Newcomer, Governor" | `out/…/_tmp/pesquisa-documentos/ia/annualreportofgo1950cana-pagenums.json`; `fontes/annualreportofgo1950cana.txt` |
| B051 | s31 | grifo "employees are required to have an assignment to family quarters before permission is granted for their families to come to the Canal Zone" | HERDADA (F051), conferido | literal | idem |
| B052 | s50 | DSB, Vol. L, No. 1284, 03/02/1964, "The Situation in Panama", p. 152, "BACKGROUND" | CONFIRMADA | "VOL. L, NO. 1284 … FEBRUARY 3, 1964"; o rodapé "FEBRUARY 3, 19C4 151" vem logo antes de "The Situation in Panama BACKGROUND" | `fontes/experiencia/departmentofstat501964unit.txt` |
| B053 | s50 | grifo "in defiance of the Governor's orders" | HERDADA (F106), conferido | "students at Balboa High School hoisted a flag on their own in defiance of the Governor's orders." | idem |
| B054 | s32 | Panama Canal Review, edição especial de 01/10/1979, publicada pela Panama Canal Commission | CONFIRMADA | "this special edition of {he Review is being published to mark the day of the implementation of the new … Panama Canal treaties"; "Panama Canal Commission Public Information Office"; "Administration Building, Balboa Heights" | `fontes/experiencia/panamacanalrevie1979pana.txt` |
| B055 | s32 | grifo "The Panama Canal Review — October 1, 1979" | HERDADA (F053c) | os rodapés dizem "October 1, 1979" | idem |
| B056 | s32 | p. 60, "Looking Backward", de Mary e Herbert Knapp | CONFIRMADA | sumário: "Looking Backward 59-63"; "Mary and Herbert Knapp are teachers in the Canal Zone schools" | idem |
| B057 | s32 | grifo "everyone lived in rented quarters and did most of his shopping at the "commy."" | HERDADA (F053, F053b), conferido | "a com- munity where everyone lived in rented 60 October 1, 1979 quarters and did most of his shopping at the "commy."" (a frase passa da p. 60 para a 61) | idem |
| B058 | s32 | p. 61, continuação do ensaio | CONFIRMADA | idem | idem |
| B059 | s51 | capa: CIJ, "Report on the Events in Panama, January 9-12, 1964", Genebra | CONFIRMADA | "Report on the EVENTS IN PANAMA January 9-12, 1964 Prepared by the Investigating Committee appointed by the International Commission of Jurists International Commission of Jurists Geneva, Switzerland" | `fontes/experiencia/icj-1964-panama.pdf` |
| B060 | s51 | grifo da capa (composto com travessão) | CONFIRMADA | idem; o travessão é do redator, não da capa | idem |
| B061 | s37, s38 | 8 FAM 302.4-2, versão CT:CITZ-135, 01-09-2026 | CONFIRMADA (volátil) | "(CT:CITZ-135; 01-09-2026)" | `fontes/documento/fam-8-302-4.txt` |
| B062 | s37 | grifo "Until August 4, 1937, there was no special law … Section 1993, Revised Statutes (RS)" | HERDADA (F069b), conferido | "c. Until August 4, 1937, there was no special law relating to U.S. citizens born in Panama. Acquisition of U.S. citizenship was governed by Section 1993, Revised Statutes (RS):" | idem |
| B063 | s37 | grifo "the rights of citizenship shall not descend to children whose fathers or mothers never resided in the United States previous to the birth of such child" | HERDADA (F070), conferido | literal no c.(2) | idem |
| B064 | s37 | grifo "this Act was retroactive to February 26, 1904" | HERDADA (F068b), conferido | "Additionally, this Act was retroactive to February 26, 1904 "Isthmian Canal Convention."" | idem |
| B065 | s38 | grifo "was never considered part of the United States" | HERDADA (F072), conferido | "a. The Panama Canal Zone, … was never considered part of the United States or designated as an outlying possession for purposes of section 201 …" | idem |
| B066 | s40 | FRUS 1946, vol. XI, doc. 927: Hines ao Secretário de Estado, No. 1596, Panamá, 16/05/1946, pp. 1156–1157 | CONFIRMADA | "The Ambassador in Panama (Hines) to the Secretary of State … No. 1596 Panama, May 16, 1946"; marca "[Page 1157]" | `fontes/mecanismo/frus1946v11-d927.txt`; https://history.state.gov/historicaldocuments/frus1946v11/d927 |
| B067 | s40 | grifo "the Department's instruction No. 71 of February 21, 1946, concerning racial discrimination in the Canal Zone" | HERDADA (F078), conferido | "I have the honor to submit the following progress report in connection with the Department's instruction No. 71 of February 21, 1946, concerning racial discrimination in the Canal Zone." São palavras de Hines; a instrução em si não foi lida | idem |
| B068 | s41 | FRUS 1946, vol. XI, doc. 931: Mehaffey a Hines, Balboa Heights, 18/09/1946, pp. 1161–1162 | CONFIRMADA | "The Governor of the Panama Canal (Mehaffey) to the Ambasador in Panama (Hines) … Balboa Heights, September 18, 1946"; "[Page 1162]" | `fontes/mecanismo/frus1946v11-d931.txt`; https://history.state.gov/historicaldocuments/frus1946v11/d931 |
| B069 | s41 | grifo "the complete abolition of any segregation in the Canal Zone" | HERDADA (F080), conferido | literal | idem |
| B070 | s41 | grifo "could not be granted immediately or in the near future without wrecking the Panama Canal and Panama Railroad organizations" | HERDADA (F081), conferido | "The second objective could not be granted immediately or in the near future without wrecking the Panama Canal and Panama Railroad organizations" | idem |
| B071 | s62 | FRUS 1977–80, vol. XXIX, doc. 239: Vance a Mondale, 14/08/1979 | CONFIRMADA | "Memorandum From Secretary of State Vance to Vice President Mondale … Washington, August 14, 1979" | `fontes/experiencia/frus1977-80v29-d239.html`; https://history.state.gov/historicaldocuments/frus1977-80v29/d239 |
| B072 | s62 | grifo "It will serve to reassure American Canal employees that the U.S. is not abandoning them." | HERDADA (F126), conferido | literal | idem |
| B073 | s29, s65 | (nova) as notas de 02/03/1936 ampliam quem podia morar na Zona | CONFIRMADA | "settlers engaged in the cultivation of truck gardens …; hucksters …; proprietors of small establishments …"; "settlers … under agricultural licenses issued by the Panama Canal will continue to reside"; "about 1,568 agricultural licenses"; Hull: "In reply I have the honor to confirm the understanding reached on the foregoing points" | `stat-53-1807-tratado-1936.pdf`, 53 Stat. 1830–1834 |
| B074 | s59 | as datas impressas no cabeçalho da p. 2234 (a recomendação do Senado e a ratificação do Presidente) | NÃO FOI CHECADO na imagem (teto de 0 imagens) | o OCR lê "February 23, 1905" e "February 25, 1905". A Avalon dá "February 23, 1904" e "February 25,1904". Pode ser erro de impressão ou de OCR | `stat-33-2234-tratado-1903.pdf`, PDF p. 1; `avalon-pan001.txt` |

### Geometria (pauta-geo)

| id | cena | afirmação | veredito | o que a fonte diz | URL ou arquivo local |
|---|---|---|---|---|---|
| B101 | mapas | `panama-ne`: o contorno do Panamá é o de hoje (Natural Earth 1:10m), domínio público, sem crédito | CONFIRMADA | "All versions of Natural Earth raster + vector map data found on this website are in the public domain." "Crediting the authors is unnecessary." | https://www.naturalearthdata.com/about/terms-of-use/ |
| B102 | s09 | `colombia-ne`: a divisa é a de hoje, do tratado de 1924 | CONFIRMADA | "Tratado de Límites entre la República de Colombia y la República de Panamá", Bogotá, 20/08/1924, "JORGE VELÉZ de Colombia y NICOLÁS VICTORIA J. de Panamá"; o traçado segue o Art. III de 1914: "From Cape Tiburón … to a point on the Pacific half way between Cocalito and La Ardita" | https://cancilleria.gov.co/politica-exterior/asuntos-bilaterales/frontera-terrestre-colombia-panama; https://history.state.gov/historicaldocuments/frus1924v01/d229 |
| B103 | s09 | a relação dessa divisa com a de 1903 | NÃO ACHEI | nenhuma das duas fontes diz se a linha de 1924 coincide com o limite de 1903 | idem |
| B104 | mapas | `eixo-do-canal`: OSM relation/2389520, "Panama Canal" | CONFIRMADA | API do OSM: `name=Canal de Panamá`, `name:en=Panama Canal`, `waterway=canal` | https://www.openstreetmap.org/relation/2389520 |
| B105 | mapas | 76,05 km = 47,25 mi (a linha do OSM, que não é o comprimento do canal) | CONFIRMADA (a conta) | 76,05/1,609344 = 47,255; a ACP dá "approximately 80 kilometers" de oceano a oceano | `fontes/evento/acp-en-history.txt` |
| B106 | mapas | camadas do OSM: ODbL, com "© OpenStreetMap contributors" na tela | CONFIRMADA | regra do canal; OSM copyright | https://www.openstreetmap.org/copyright |
| B107 | s65 e outras | `zona-do-canal-1947`: AMS, "Canal Zone and Vicinity", 1:100,000, 1947, LOC 83694755, domínio público | CONFIRMADA | Commons: ""10-47."", DateTimeOriginal "1947", Artist "United States. Army Map Service", "Public domain", sha1 d7887cb8 | https://commons.wikimedia.org/wiki/File:Canal_Zone_and_vicinity,_1-100,000._LOC_83694755.jpg |
| B108 | mapas | área: 534 mi² contra 552.95 mi² (−3.4 %) | CONFIRMADA | "Land area of the Canal Zone 362. 01 Water area of the Canal Zone (inclusive of Madden Lake to + 260-foot contour) 190. 94 Total area of the Canal Zone 552. 95"; 534/552.95 − 1 = −3.43 % | `fontes/annualreportofgo1940cana.txt` |
| B109 | mapas | a fidelidade do polígono (mediana de 71 m, p90 de 142 m; de 199 a 529 m na Cidade do Panamá) | NÃO FOI CHECADO (medida feita sobre a folha; teto de 0 imagens) | — | `_tmp/pesquisa-geo/` |
| B110 | mapas | Paitilla: área da Zona em 1947, devolvida pelo tratado de 1955 | CONFIRMADA | Art. V: "the United States of America shall relinquish all the rights, power and authority granted to it in such area under the Convention signed November 18, 1903" | `fontes/documento/dsb-1955-02-07.txt` |
| B111 | mapas | "a extensão de 1935" do vale do Chagres e do Madden | NÃO ACHEI | 1940: "inclusive of Madden Lake to + 260-foot contour". O ano de 1935 não foi achado | `annualreportofgo1940cana.txt` |
| B112 | s49, s53, s65 | o contorno de 1947 vale para 1960 e 1964 | DIVERGE (periférico) | 1955, Art. VI: novo limite "between the City of Colón … and the Canal Zone", que entra em vigor "upon completion of the withdrawal … from … New Cristobal, Colón Beach and the de Lesseps Area"; Convenção do Colón Corridor de 24/05/1950 | `dsb-1955-02-07.txt` |
| B113 | mapas | `divisa-zona-1947`: 8 trechos tirados da tinta da folha | NÃO FOI CHECADO (só na imagem) | — | `_media/geo/divisa-zona-1947.json` |
| B114 | s49, s53 | `linha-1914-panama`: a folha "Road Map of Ancon, Balboa and Panama", out/1936, NARA 192812325, domínio público | CONFIRMADA | Commons: "October 1936", "National Archives Identifier: 192812325", "Public domain" | https://commons.wikimedia.org/wiki/File:Road_Map_of_Ancon_Balboa_and_Panama_-_DPLA_-_b7b2563167e5395c4f00f91b538503aa.jpg |
| B115 | — | o autor "Office of the Department Engineer, Panama Canal Department" e a base no mapa de 1927 | NÃO FOI CHECADO (o quadro de título só se lê na imagem) | Commons e NARA dão "War Department. Office of the Chief of Engineers" | idem |
| B116 | s49, s53, s65 | o rótulo "the line": a linha de 1936 é a linha da Convenção de 1914 | NÃO ACHEI (não se provou que a linha não mudou de 1914 a 1936) | o texto de 1914 traz trechos que a folha também tem ("to Rio Curundu", "near Calidonia Bridge", a Panama Railroad), mas não foi comparado ponto a ponto | `fontes/mecanismo/frus1915-d1732.txt` |
| B117 | — | translação de 346 m; incerteza típica de ~40 m, até ~90 m | CONFIRMADA (no arquivo de medida) | "T_m": 346.26; LOO de 9,1 a 90,7 m. As componentes 270 O e 213 N dariam 343,9 m (arredondamento; não vai à tela) | `_tmp/pesquisa-geo/deslocamento-1936.json` |
| B118 | s53 | Instituto Nacional do lado do Panamá; Administration Building e Cerro Ancón do lado da Zona | CONFIRMADA (Zona: HERDADA F001, F024) | CIJ: "went to the National Institute on the Panamanian side of 4th of July Avenue" | `fontes/experiencia/icj-1964-panama.txt` |
| B119 | s53 | `fourth-of-july-avenue-1936`: rua da divisa em 1964; hoje Avenida de los Mártires | CONFIRMADA | CIJ (acima); La Estrella: "la avenida de los Mártires … llamada así en homenaje a los caídos del 9 de enero de 1964, delimitaba la frontera con EE.UU." | `fontes/mecanismo/laestrella-2018-cicatriz.txt` |
| B120 | s11, s65 | `faixa-art2-5mi`: buffer de 8,046.72 m; rótulo "10 MILES WIDE (5 + 5)" | CONFIRMADA (a conta) e HERDADA (F014b) | 5 × 1,609.344 = 8,046.72 | `avalon-pan001.txt` |
| B121 | s11, s65 | a faixa é esquema sobre o eixo de hoje, não a divisa | CONFIRMADA (a declaração está certa) | `"o_que_e": "… NAO e a divisa"` | `_media/geo/faixa-art2-5mi.json` |
| B122 | mapas | `pontos-osm-hoje`: os 17 nomes e tipos | CONFIRMADA | API do OSM: Cerro Ancón/peak, Cerro Sosa/peak, "Edificio de la Administración del Canal de Panamá", Goethals Memorial, Estadio de Balboa, La Boca/neighbourhood, Instituto Nacional de Panamá/school, "Puente de las Américas"/"Bridge of the Americas", Paraíso/hamlet, Pedro Miguel/hamlet, Diablo Heights, Ciudad del Saber, Albrook "Marcos A. Gelabert", Plaza 5 de Mayo, as eclusas de Miraflores, Pedro Miguel e Gatún | https://api.openstreetmap.org/api/0.6/ (ids no arquivo) |
| B123 | mapas | os rótulos históricos: "Fort Clayton" na Ciudad del Saber; "Albrook" no aeroporto | CONFIRMADA (fonte secundária) | "Fort Clayton, la antigua base militar estadounidense, es hoy la Ciudad del Saber"; OSM: "Aeropuerto Internacional de Albrook" | https://www.laestrella.com.pa/panama/nacional/fort-clayton-procesos-cambio-urbano-PILE459512 |
| B124 | s49 | a ponte é a antiga Thatcher Ferry Bridge, de 1962 | CONFIRMADA (o nome); o ano de abertura NÃO ACHEI explícito | CIJ: "since October 12, 1962, at the Bridge of the Americas (Thatcher Ferry Bridge)" | `icj-1964-panama.txt` |
| B125 | mapas | o ponto "La Boca" é o bairro de hoje, não a La Boca de 1914 a 1958 | CONFIRMADA (ressalva correta) | OSM `place=neighbourhood`; dossiê: La Boca tinha 48 moradores em 1960, depois da demolição | `fundamento.json` |
| B126 | s16, s48 | `lugares-1947`: os 11 nomes existiam por volta de 1947 | CONFIRMADA em 10; NÃO ACHEI Fort Amador no texto local | relatórios de 1940 e 1950: Gatun, Fort Davis, Margarita, Fort Sherman (1950), Silver City, Red Tank, Pedro Miguel, Paraiso, Fort Clayton (1940), Albrook | `annualreportofgo1940cana.txt`; `annualreportofgo1950cana.txt` |
| B127 | s16, s48 | as posições (centróide da mancha amarela da folha) | NÃO FOI CHECADO (só na imagem) | — | `_media/geo/lugares-1947.json` |
| B128 | s48 | Silver City de 1947 = Rainbow City de 1960 | CONFIRMADA a identidade (HERDADA F097); NÃO ACHEI a data nem a área | Census 1960: "Rainbow City town reported as Silver City town prior to 1960" (dossiê); Wikipedia: "On May 1, 1952, the change of name to Rainbow City was made effective by Newcomer" e "an extension to Silver City" (1951) | `fundamento.json` (esc-11, esc-12); https://en.wikipedia.org/wiki/Arco_Iris,_Panama |
| B129 | descrição | créditos: "U.S. Army Map Service, Canal Zone and Vicinity (1947), Library of Congress"; "Road Map of Ancon, Balboa and Panama (1936), U.S. National Archives" | CONFIRMADA | Commons: "Credit: https://www.loc.gov/item/83694755/"; "National Archives Identifier: 192812325" | ver B107 e B114 |

### Documentos aprovados pelo conferente: crédito e rótulo

| id | cena | afirmação | veredito | o que a fonte diz | URL ou arquivo local |
|---|---|---|---|---|---|
| B201 | s07 | census1960-p57-33: sem crédito obrigatório; lugar "Canal Zone"; rótulo "U.S. CENSUS, 1960" | CONFIRMADA | govinfo: "Copyright protection under this title is not available for any work of the United States Government"; volume Part 57 (Canal Zone) | https://www.govinfo.gov/about/policies |
| B202 | s12 | p2235: sem crédito; a nota de margem "Territorial sovereignty over zone." é do compilador | CONFIRMADA | o OCR da margem: "Territorial sover- eignty over zone." | `stat-33-2234-tratado-1903.pdf` |
| B203 | s13 | p560: sem crédito | CONFIRMADA | domínio público federal | govinfo |
| B204 | s13 | p561: sem crédito | CONFIRMADA | idem | idem |
| B205 | s14 | p565: sem crédito | CONFIRMADA | idem | idem |
| B206 | s29 | p1807: sem crédito | CONFIRMADA | idem | idem |
| B207 | s29 | p1811: sem crédito; o grifo só na coluna em inglês | CONFIRMADA | idem | idem |
| B208 | s33 | census1970-p57-16: sem crédito; lugar "Canal Zone" | CONFIRMADA | idem; rodapé "57-16 CANAL ZONE" (conferente) | idem |
| B209 | s35 | 1937, p. 558: sem crédito | CONFIRMADA | idem | idem |
| B210 | s38 | p2235: sem crédito | CONFIRMADA | idem | idem |
| B211 | s44 | 1958, p. 405: rótulo "Quoted in Public Law 85-550, 1958" | CONFIRMADA | Sec. 1(b) cita o item 1 de 1955 entre aspas | `statute-72-pg405.pdf` |
| B212 | s56 | CR p. 28306: rótulo "Treaty text as printed in the Congressional Record, Sept. 8, 1977" | CONFIRMADA | ver B038 | `crecb-1977-pt22-3-2.pdf` |
| B213 | s59 | CR p. 28306: o mesmo rótulo; a data de vigência não está na página | CONFIRMADA | idem | idem |
| B214 | s59 | p2234: sem crédito; o "in perpetuity" fica sem a finalidade nesta página | CONFIRMADA | a finalidade está no topo da p. 2235 | `stat-33-2234-tratado-1903.pdf` |
| B215 | s66 | p2235: sem crédito | CONFIRMADA | idem | govinfo |
| B216 | s10 | retrato de John Hay: 1902, com "Photo from 1902" | CONFIRMADA | Commons: DateTimeOriginal "1902"; LoC LCCN 2005689081; o carimbo "COPYRIGHT 1902 by J.E. PURDY" (lido pelo conferente) | https://commons.wikimedia.org/wiki/File:John_Hay,_1838-1905,_head_and_shoulders_portrait,_facing_slightly_left._Secretary_of_State_LCCN2005689081.jpg |
| B217 | s10 | sem crédito na tela | CONFIRMADA | "Public domain" (Commons); obra de 1902 | idem |

### Fotos aprovadas: lugar (a), ano e aviso (b), crédito (c)

Todos os créditos foram conferidos na API da NARA: useRestriction "Unrestricted" nos 30 itens, obras federais. Nenhuma foto precisa de crédito na tela.

| id | cena | afirmação | veredito | o que a fonte diz (API da NARA, 15/10/2026) | URL |
|---|---|---|---|---|---|
| B301 | s03 | lugar "Balboa Central Police Station, Balboa, Canal Zone" | CONFIRMADA | "Original Caption: 13-J-6(4) Balboa Central Police Station, Balboa, Canal Zone. August 17, 1943." | https://catalog.archives.gov/id/202800161 |
| B302 | s03 | "Photo from 1943" | CONFIRMADA | productionDates 1943-08-17 | idem |
| B303 | s03 | crédito: nenhum | CONFIRMADA | RG "Records of the Panama Canal"; Unrestricted | idem |
| B304 | s03 | lugar "Balboa Elementary School, Canal Zone" | CONFIRMADA | "13-N-6(38) Balboa Elementary School, Canal Zone. December, 1954." | https://catalog.archives.gov/id/202800569 |
| B305 | s03 | "Photo from 1954" | CONFIRMADA | 1954-12 | idem |
| B306 | s03 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B307 | s14 | lugar "District Court Building, Ancon, Canal Zone" | CONFIRMADA | "13-O-3(14)B District Court Building, Ancon, Canal Zone. September 24, 1958." | https://catalog.archives.gov/id/202800691 |
| B308 | s14 | "Photo from 1958" | CONFIRMADA | 1958-09-24 | idem |
| B309 | s14 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B310 | s15 | lugar "Empire Police Station" (Empire, Canal Zone) | CONFIRMADA | "Empire Police Station - Dec 1904" | https://catalog.archives.gov/id/100995370 |
| B311 | s15 | "Photo from 1904" | CONFIRMADA | 1904-12 | idem |
| B312 | s15 | crédito: nenhum | CONFIRMADA | Unrestricted (o arquivo vem do Commons e é o mesmo NAID) | idem |
| B313 | s15 | lugar "San Pablo, Canal Zone" | CONFIRMADA | "Canal Zone Free Public School San Pablo, 1904" | https://catalog.archives.gov/id/100995360 |
| B314 | s15 | "Photo from 1904" | CONFIRMADA | 1904 | idem |
| B315 | s15 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B316 | s15 | lugar "La Boca" (correio) | CONFIRMADA | "Canal Zone Post Office - La Boca, 1904" | https://catalog.archives.gov/id/100995348 |
| B317 | s15 | "Photo from 1904" | CONFIRMADA | 1904 | idem |
| B318 | s15 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B319 | s18 | lugar "Administration Building, Balboa Heights" | CONFIRMADA | "13-O-7(30) Administration Building, Balboa Heights, Canal Zone. November 27, 1957." | https://catalog.archives.gov/id/202800733 |
| B320 | s18 | "Photo from 1957" | CONFIRMADA | 1957-11-27 | idem |
| B321 | s18 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B322 | s22 | lugar "Culebra Cut" | CONFIRMADA | "Crowd Waiting for Pay Car, Culebra Cut, January 1908" | https://catalog.archives.gov/id/100998772 |
| B323 | s22 | sem aviso de ano (1908, do tempo da obra) | CONFIRMADA | 1908-01 | idem |
| B324 | s22 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B325 | s22 | lugar "Gold Quarters, Balboa" | CONFIRMADA | "13-Q-6(30) Four-Family Type, Gold Quarters, Balboa, C.Z. September 1944." | https://catalog.archives.gov/id/202800899 |
| B326 | s22 | "Photo from 1944" | CONFIRMADA | 1944-09 | idem |
| B327 | s22 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B328 | s22 | lugar "Silver Commissary, Gamboa" | CONFIRMADA | a NARA transcreve "Camboa" (erro dela); a legenda na foto, lida pelo conferente, diz "Gamboa" | https://catalog.archives.gov/id/202799599 |
| B329 | s22 | "Photo from 1947" | CONFIRMADA | 1947-05 | idem |
| B330 | s22 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B331 | s22 | lugar "Curundu Silver Commissary, Ancon" | CONFIRMADA | "13-C-3(27)A Curundu Silver Commissary, Ancon, Canal Zone. November 26, 1947." | https://catalog.archives.gov/id/202799485 |
| B332 | s22 | "Photo from 1947" | CONFIRMADA | 1947-11-26 | idem |
| B333 | s22 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B334 | s22 | lugar "La Boca Silver Commissary, La Boca" | CONFIRMADA | "13-C-52(02)B La Boca Silver Commissary, La Boca, C.Z. November 26, 1947." | https://catalog.archives.gov/id/202799615 |
| B335 | s22 | "Photo from 1947" | CONFIRMADA | 1947-11-26 | idem |
| B336 | s22 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B337 | s22 | lugar "Clubhouse for gold employees at Balboa" | CONFIRMADA | "Panama Canal Clubhouse for gold employees at Balboa, CZ June 11, 1915" | https://catalog.archives.gov/id/100995304 |
| B338 | s22 | "Photo from 1915" | CONFIRMADA | 1915-06-11 | idem |
| B339 | s22 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B340 | s31 | lugar "Las Cruces Street, Balboa" | CONFIRMADA | "13-Q-6(46) Four-family quarters on Las Cruces Street, Balboa, Canal Zone. November 7, 1951." | https://catalog.archives.gov/id/202800907 |
| B341 | s31 | "Photo from 1951" | CONFIRMADA | 1951-11-07 | idem |
| B342 | s31 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B343 | s32 | lugar "Balboa Commissary" | CONFIRMADA | "13-C-6(18) Sale of Panama-made shirts, Balboa Commissary, Canal Zone. August 19, 1954." | https://catalog.archives.gov/id/202799537 |
| B344 | s32 | "Photo from 1954" | CONFIRMADA | 1954-08-19 | idem |
| B345 | s32 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B346 | s33 | lugar "in front of new Balboa Post Office" (nunca "home") | CONFIRMADA | "Canal Zone Postal Employees and their families in front of new Balboa Post Office - March 13, 1938" | https://catalog.archives.gov/id/100996124 |
| B347 | s33 | "Photo from 1938" | CONFIRMADA | 1938-03-13 | idem |
| B348 | s33 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B349 | s33 | lugar "Fort Clayton, C.Z." | CONFIRMADA | "33rd Inf. pack train loading up. Fort Clayton, C.Z. 1928" (RG 111, Signal Corps) | https://catalog.archives.gov/id/329582950 |
| B350 | s33 | "Photo from 1928" | CONFIRMADA | 1928 | idem |
| B351 | s33 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B352 | s39 | lugar "Balboa Elementary School" | CONFIRMADA | "91-A-1(178)A Registration Day, Balboa Elementary School, Canal Zone. September 9, 1954." | https://catalog.archives.gov/id/202803255 |
| B353 | s39 | "Photo from 1954" | CONFIRMADA | 1954-09-09 | idem |
| B354 | s39 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B355 | s45 | lugar "Balboa Commissary" | CONFIRMADA | "13-C-6(20) New Entrance, Balboa Commissary, Canal Zone. May 19, 1955." | https://catalog.archives.gov/id/202799541 |
| B356 | s45 | "Photo from 1955" | CONFIRMADA | 1955-05-19 | idem |
| B357 | s45 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B358 | s45 | lugar "Balboa Commissary" (nunca "aerial") | CONFIRMADA | "13-C-6(25) Aerial view, Balboa Commissary, Canal Zone. June 1, 1956." | https://catalog.archives.gov/id/202799553 |
| B359 | s45 | "Photo from 1956" | CONFIRMADA | 1956-06-01 | idem |
| B360 | s45 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B361 | s47 | lugar "Public School, Ancon" | CONFIRMADA | "Public School, Ancon CZ Flag raising - March 1918" | https://catalog.archives.gov/id/100997644 |
| B362 | s47 | "Photo from 1918" | CONFIRMADA | 1918-03 | idem |
| B363 | s47 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B364 | s47 | lugar "La Boca" (School House) | CONFIRMADA | "School House for Colored Children, La Boca, CZ June, 1921" | https://catalog.archives.gov/id/100997756 |
| B365 | s47 | "Photo from 1921" | CONFIRMADA | 1921-06 | idem |
| B366 | s47 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B367 | s47 | lugar "Balboa High School and Canal Zone Junior College, Balboa" | CONFIRMADA | "13-N-6(37) … Balboa, Canal Zone. October 5, 1953." | https://catalog.archives.gov/id/202800567 |
| B368 | s47 | "Photo from 1953" | CONFIRMADA | 1953-10-05 | idem |
| B369 | s47 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B370 | s47 | lugar "Paraiso" (Elementary - Junior High School) | CONFIRMADA | "13-N-76(7)A Elementary - Junior High School, F.Y. 1953, Paraiso, Canal Zone. … October 22, 1953." | https://catalog.archives.gov/id/202800663 |
| B371 | s47 | "Photo from 1953" | CONFIRMADA | 1953-10-22 | idem |
| B372 | s47 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B373 | s52 | lugar: no máximo "Canal Zone" (o item não nomeia lugar) | CONFIRMADA | título sem lugar; série "Photographic Prints of Student Riots in the Canal Zone, Panama" | https://catalog.archives.gov/id/218517742 |
| B374 | s52 | sem aviso de ano (janeiro de 1964, o próprio evento) | CONFIRMADA | 1964-01 | idem |
| B375 | s52 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B376 | s52 | lugar "at the Flagpole" (Balboa High School não está nesta origem) | CONFIRMADA | "In the Confusion at the Flagpole, Two of the Four Panamanian Flag Bearers Stumbled…" | https://catalog.archives.gov/id/218517740 |
| B377 | s52 | sem aviso de ano (janeiro de 1964) | CONFIRMADA | 1964-01 | idem |
| B378 | s52 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B379 | s54 | lugar "President Kennedy Avenue Near Tivoli Guest House" | CONFIRMADA | título literal | https://catalog.archives.gov/id/218517734 |
| B380 | s54 | sem aviso de ano (janeiro de 1964) | CONFIRMADA | 1964-01 | idem |
| B381 | s54 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B382 | s57 | lugar: nenhum na origem ("Washington" vem da voz, HERDADA F118) | CONFIRMADA | "Jimmy Carter and General Omar Torrijos sign the Panama Canal Treaty with OAS Secretary Alejandro Orfila." | https://catalog.archives.gov/id/176082 |
| B383 | s57 | sem aviso de ano (07/09/1977) | CONFIRMADA | 1977-09-07 | idem |
| B384 | s57 | crédito: nenhum | CONFIRMADA | White House Staff Photographers; Unrestricted | idem |
| B385 | s57 | lugar: nenhum na origem | CONFIRMADA | "Jimmy Carter and General Omar Torrijos shake hands after signing the Panama Canal Treaty." | https://catalog.archives.gov/id/176083 |
| B386 | s57 | sem aviso de ano (07/09/1977) | CONFIRMADA | 1977-09-07 | idem |
| B387 | s57 | crédito: nenhum | CONFIRMADA | Unrestricted | idem |
| B388 | s64 | lugar "Miraflores Locks" | CONFIRMADA | "departing from Miraflores Locks during its transit of the Panama Canal" | https://catalog.archives.gov/id/6433742 |
| B389 | s64 | "Photo from 1988" | CONFIRMADA | 1988-06-03 | idem |
| B390 | s64 | crédito: nenhum | CONFIRMADA | DoD ("SGT Matt Gildow, USAF"); Unrestricted | idem |
| B391 | s47 | categoria "white" sobre a escola de Ancón | CONFIRMADA | 1920: "the white pupils of the Pedro Miguel, Ancon, and Balboa Schools"; 1930: escolas "white" em "Ancon, Balboa, Pedro Miguel, Paraiso, Gatun, and Cristobal"; nenhuma "colored" em Ancón | `annualreportofgo1920cana.txt`; `annualreportofgo1930cana.txt` |
| B392 | s47 | categoria "Latin American" sobre a escola de Paraíso (1953) | NÃO ACHEI | em 1930 Paraíso tinha as duas redes; a PCR de 1954 não dá os nomes dos 11 "Latin American schools"; só a Wikipedia, sem nota, fala de "a new high school, inaugurated in 1956" | `annualreportofgo1930cana.txt`; `pcr-1954-08-06.txt`; https://en.wikipedia.org/wiki/Para%C3%ADso,_Panam%C3%A1_Province |
| B393 | s47 | categoria "U.S. citizen" sobre a Balboa High School | CONFIRMADA | 1965: "Balboa High School, Cristobal High School, … The first regular summer school for the U.S. schools was held" | `annualreportpana1965pana.txt` |
| B394 | s47 | categoria "colored" sobre a escola de La Boca | CONFIRMADA | a própria origem: "School House for Colored Children, La Boca" | 100997756 |

## Achados acionáveis

- **A1. [MÉDIO] s29: a folha do Art. III(2) não pode virar "a lista completa".**
  - CONSERTO, rótulo de tela: `ART. III(2), 1936 TREATY`, com o grifo literal de cada classe.
  - Sem `ONLY`, `FULL LIST` nem uma contagem fechada ("SIX CLASSES").
  - Na (d), o texto do tratado: `companies entitled under Section 5`. Nunca `"licensed businesses"`.
  - Linha opcional na tela: `Notes exchanged the same day also allowed truck gardeners, vegetable sellers and licensed farm settlers (53 Stat. 1831–1833)`.
  - RAIZ: INSTRUÇÃO. A pesquisa leu só a página entregue; acessórios do mesmo documento mudam a afirmação.
- **A2. [MÉDIO] s47: "Latin American" não pousa sobre a foto de Paraíso.**
  - CONSERTO: as palavras dos relatórios vão como legenda do PAR: `1960s reports: "U.S. citizen schools" · "Latin American schools"`.
  - Cada foto leva só o lugar e o ano da origem: `Balboa High School · Photo from 1953` e `Paraiso · Photo from 1953`.
  - A foto de Paraíso só leva a categoria se uma fonte primária a sustentar (por exemplo, a PCR "Your Town – Paraiso", 04/11/1955).
  - A outra saída: trocar a foto por uma escola cuja rede a própria origem nomeie.
  - RAIZ: PONTUAL.
- **A3. [LEVE, voz] s65: "A second treaty, which let only those who worked or served there, and their families, live inside the line."**
  - As notas de 1936 também deixavam morar hortelões, vendedores de verdura e lavradores licenciados.
  - A frase aguenta a leitura frouxa ("worked there"), mas omite a exceção. Não pede regravação.
  - Se o Lucas quiser refazer, a frase pronta: "A second treaty, which let almost no one but those who worked or served there, and their families, live inside the line."
  - Regravar é decisão e gasto dele (roupa §6).
  - RAIZ: PONTUAL.
- **A4. [MÉDIO] s49, s53, s65: o contorno de 1947 em cena de 1960 e 1964.**
  - CONSERTO, rótulo pequeno: `Canal Zone (1947 map)`, na escala da Zona inteira.
  - Sem close da divisa de Colón ou de Cristóbal, por causa do Art. VI de 1955.
  - Na Cidade do Panamá, usar só a `linha-1914-panama`.
  - Nunca escrever `ZONE IN 1960` nem `ZONE IN 1964` sobre o polígono.
  - RAIZ: INSTRUÇÃO.
- **A5. [LEVE] s09: a divisa com a Colômbia.**
  - CONSERTO: a cena acende o Panamá sem desenhar a divisa leste.
  - Se a linha aparecer: sem data, ou `Present-day border`. Nunca `1903`.
  - RAIZ: PONTUAL.
- **A6. [LEVE] "the line" (linha-1914-panama).**
  - Não se provou que a linha de 1936 é a de 1914.
  - CONSERTO: o rótulo de tela fica `the line`, sem ano. Se a cena precisar de um ano, use `as mapped in 1936`.
  - RAIZ: PONTUAL.
- **A7. [LEVE, só o localizador] B021: a vigência do tratado de 1936 está no Art. XII, não no XI.**
  - CONSERTO: onde a tela ou a procedência citar o artigo, usar `Art. XII (53 Stat. 1826)`.
  - RAIZ: PONTUAL.
- **A8. [LEVE] s52, s54, s57: a `pauta-imagens.json` grava um `lugar_na_origem` mais específico que a origem.**
  - Ela escreve "mastro da Balboa High School" em 218517742, "(a linha)" em 218517734 e "sede da OEA, Washington, D.C." em 176082 e 176083.
  - Vale o `lugar_na_origem` do conferente. O redator não usa o da pauta.
  - CONSERTO de tela:
    - 218517742: sem lugar, ou `Canal Zone`;
    - 218517740: `At the flagpole`;
    - 218517734: `Kennedy Avenue, near the Tivoli`;
    - s57: nenhum lugar sobre as fotos.
  - RAIZ: INSTRUÇÃO.
- **A9. [LEVE] s64: a `pauta-imagens.json` deixa sem aviso de ano a foto do Comfort de 1988.** O conferente pede o aviso, e ele está certo. CONSERTO: `Photo from 1988`. RAIZ: PONTUAL.
- **A10. [LEVE] s12: a nota de margem "Territorial sovereignty over zone." é do compilador.** Ela fica fora do quadro ou ilegível, porque fala de soberania por fora das palavras do tratado. RAIZ: PONTUAL.
- **A11. [LEVE] s59 (p. 2234): não grifar nem citar as datas impressas no cabeçalho.** O OCR lê "1905"; elas só se resolvem na imagem (B074). Se a tela precisar delas, use "February 23, 1904" (Avalon). RAIZ: PONTUAL.
- **A12. [LEVE] s44: "Public Law 85-550 — July 25, 1958", se recriado como citação, leva o hífen da página (`PUBLIC LAW 85-550-JULY 25, 1958`).** Como rótulo do redator, o travessão serve. RAIZ: PONTUAL.
- **A13. [LEVE] s48: o pino de Silver City e Rainbow City é ponto, não área.** Nenhuma data de renomeação vai à tela. RAIZ: PONTUAL.

## Lista de nomes

| anônimo | pessoa nomeável | credencial | URL ou arquivo |
|---|---|---|---|
| "the Zone's governor" (s49, 30/12/1963) | Maj. Gen. Robert J. Fleming Jr. | "the Governor of the Canal Zone, Major-General Robert J. Fleming Jr." (CIJ, §5) | `icj-1964-panama.txt` |
| "the police let a delegation of five" (s52) | Captain Gaddis Wall | "the head of the Canal Zone police in the Balboa District" (CIJ) | idem |
| "An international commission of jurists" (s51) | Prof. A. D. Belinfante, Judge Gustaf Petrén, Navroz Vakil | o Investigating Committee: "Amsterdam University (Netherlands)", "(Sweden)", "practising lawyer, Bombay (India)" | idem |
| "The Zone's governor answered the ambassador" (s41, 1946) | Maj. Gen. J. C. Mehaffey; o embaixador Frank T. Hines | FRUS 1946, vol. XI, docs. 931 e 927 | https://history.state.gov/historicaldocuments/frus1946v11/d931 |
| "the Secretary of State had written to him" (s62) | Cyrus Vance, a Walter Mondale | FRUS 1977–80, vol. XXIX, doc. 239 | https://history.state.gov/historicaldocuments/frus1977-80v29/d239 |
| quem pediu a moradia extra em 1936 (s29) | Ricardo J. Alfaro e Narciso Garay; resposta de Cordell Hull | "Members of the Panamanian Treaty Commission"; Secretário de Estado | 53 Stat. 1831–1833 |
| o governador do relatório de 1950 (s31) | F. K. Newcomer | "F. K. Newcomer, Governor" | `annualreportofgo1950cana.txt` |
| quem pôs o texto de 1977 no Record (s56) | senador Edmund Muskie | "Mr. MUSKIE … I ask unanimous consent" | `crecb-1977-pt22-3-2.pdf` |

## Os 2 padrões mais vistos

1. **O rótulo mais específico que a origem.** A `pauta-imagens` deu lugares que a origem não dá (s52, s54, s57). A geo deu o nome "1914" a uma linha desenhada em 1936. Paraíso ganhou uma categoria sem fonte. O conferente cortou o das fotos; o da geometria e o das categorias chegam ao redator sem esse corte.
2. **O documento lido só na página entregue.** As notas de 1936 ficaram fora da lista de quem podia morar. A vigência foi atribuída ao Art. XI quando é o XII. O contorno de 1947 ficou sem o tratado de 1955. O que está nas páginas vizinhas muda a afirmação.

## O que vai à Sala

- **NÃO FOI CHECADO**, todos por causa do teto de 0 imagens; nenhum por recusa de robô:
  - B074: as datas do cabeçalho de `tratado1903-stat33-p2234.jpg` (33 Stat. 2234);
  - B109: a fidelidade do polígono de 1947, medida sobre a folha AMS (`_tmp/pesquisa-geo/baixado/ams1947/`);
  - B113: os 8 trechos da `divisa-zona-1947`, tirados da tinta da mesma folha;
  - B115: o quadro de título da folha de 1936 (NARA 192812325);
  - B127: as posições de `lugares-1947`.
- **Não achado na rede:** a Panama Canal Review de 02/05/1952 ("Governor Officially Names Rainbow City…") não está no archive.org. Ela resolveria a data de B128.
- **Voláteis:**
  - B061: o 8 FAM 302.4-2 está em CT:CITZ-135 (01-09-2026). Reconferir antes de publicar, se a folha citar a versão.
  - B122: os pontos do OSM são de 15/10/2026 e não vão à tela com data.
  - As datas das fotos na API da NARA são estáveis.
- **Decisões do Lucas pendentes que tocaram esta checagem:**
  - as páginas do Internet Archive (s24, s26, s31, s41, s50): os grifos foram conferidos no texto; a recriação tem de manter as letras;
  - a permissão da Panama Canal Review vinda do Internet Archive (s32, s14);
  - a translação de 346 m do mapa de 1936 como controle independente (B117);
  - o polígono da Cidade do Panamá e de Colón (A4);
  - a s64: a foto de 1988 com aviso de ano, ou o B-roll de hoje (A9);
  - as bandeiras sobre o mapa da s49.
- **Fora deste lote:** o "privately owned" da s16 (1.136 casas contra 3.988) é do lote A, pela `pauta-dados`.

VEREDITO: RESSALVA
