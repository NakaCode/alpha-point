# Big Sur (`big-sur`, o vídeo 5): a folha de pronúncia

> Começa de `marca/pronuncias.md` (03/11/2026), que não tem nenhum nome deste vídeo. A cópia para a voz
> (`voz/texto-para-voz.md`, sha256 `5586198c9b99`, do roteiro `50c2c56aaefc`) vai **sem alias**, pela política da folha do canal:
> alias só depois de o nome ser confirmado de ouvido **e** a voz errar com a grafia normal. Por isso os nomes abaixo são
> **hipóteses**, a ouvir na narração; nenhum sobe para confirmado sem a fonte anotada.
> "Onde ouvir" é o parágrafo da cópia para a voz (§) e o minuto aproximado na `out/big-sur/narracao.wav` de 03/11/2026 (sha256
> `14c53e752758`, a tratada: o início do trecho mais a fração do texto até o nome, ± 2 s).

## Os nomes a ouvir

| Termo | Hipótese (como se fala) | Alias provisório | Risco na voz | Onde ouvir |
|---|---|---|---|---|
| Pfeiffer (the Pfeiffers, John Pfeiffer) | FY-fer, /ˈfaɪfər/ | Fifer | alto: o "Pf" lido como "P-f", ou "FEE-fer" | §14 5:02; §19 6:33 |
| Nepenthe | nuh-PEN-thee, /nəˈpɛnθi/ | Nuh-pen-thee | alto: "NEP-enth" | §27 9:52 |
| Kirk Gafill | GAF-il, /ˈɡæfɪl/ (a conferir na fonte) | — | médio | §27 9:51 |
| Santa Lucia (Mountains) | SAN-tuh loo-SEE-uh, /ˌsæntə luˈsiːə/ | Santa Loo-see-uh | médio: "loo-CHEE-uh", à italiana | §8 2:17 |
| Carmel | car-MEL, /kɑːrˈmɛl/ | Car-mel | médio: "CAR-muhl", como "caramel" | §5 1:17; §7 1:59 |
| CAL FIRE | Cal Fire, /kæl ˈfaɪər/ | Cal Fire | médio: soletrar "C-A-L" | §28 10:14 |
| Ventana (Wilderness) | ven-TAN-uh, /vɛnˈtænə/ | — | baixo | §11 3:38 |
| Los Padres (National Forest) | los PAH-drays, /lɔs ˈpɑːdreɪs/ | — | baixo | §11 3:36 |
| Monterey (County) | mon-tuh-RAY, /ˌmɒntəˈreɪ/ | — | baixo | §2 0:16; §4 1:09; §16 5:35 |
| Bixby (Creek, Charlie Bixby) | BIX-bee | — | baixo | §14 5:03; §17 6:04; §22 7:55; §34 12:07 |
| Caltrans | CAL-trans | — | baixo | §13 4:19; §27 9:34 e 9:56; §29 10:24; §32 11:35 |
| San Quentin | san KWEN-tin | — | baixo | §18 6:08 |
| Plaskett (Fire) | PLAS-kit | — | baixo | §29 10:30 |

## Como se fecha

1. A narração inteira sai sem alias (`narrar.mjs big-sur`, um pedido por parágrafo; Lucas, 03/11/2026: "Amostra 2").
2. O ouvido da máquina (`conferir-paragrafos.py`) confere as palavras; ele escreve o nome por expectativa e **não** julga a pronúncia.
3. Quem julga a pronúncia é a escuta do Lucas, antes do master (`sala/narracao.md`). Nome que ele ouvir errado ganha alias em
   `_ferramentas/preparar-voz.mjs` (`ALIASES`, com o motivo), e só aquele parágrafo se refaz (`narrar.mjs big-sur --refazer=N`).
4. O nome confirmado de ouvido, com a fonte anotada, sobe para `marca/pronuncias.md`.
