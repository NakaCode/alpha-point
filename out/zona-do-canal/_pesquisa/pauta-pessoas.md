# Pauta de pessoas — zona-do-canal (pesquisa-pessoas, 15/10/2026)

Fonte da verdade: `pauta-pessoas.json` (ao lado). Procedência dos arquivos: `_media/pessoa/s10/_PROCEDENCIA.json`.

| Cena | Pessoa | Arquivo | Medida (ffprobe) | Data na origem | Aviso do ano | Licença | Crédito na tela |
|---|---|---|---|---|---|---|---|
| s10 plano 1 | John Hay (Secretary of State) | `_media/pessoa/s10/hay-john-1902-purdy-loc-commons.jpg` | 1218×1536 | 1902 (LoC; carimbo "COPYRIGHT 1902 J.E. PURDY BOSTON" na cópia) | `Photo from 1902` | domínio público (PD-old-70, publicada 1902) | nenhum |
| s10 plano 2 | Philippe Bunau-Varilla (Envoy Extraordinary and Minister Plenipotentiary of the Republic of Panama) | — (retirado em 15/10, veredito `trocar`) | — | — | — | — | card só com nome e cargo, até a data da LoC (abaixo) |
| s32 | Mary e Herbert Knapp | — | — | — | — | — | card só com nome e cargo (fallback documentado) |

sha256:
- John Hay: `01f07a1a4f72e3cfe60b3cad855c4fc0f4f4c5d74730b3b9ea52a216d6ad51de`
- Bunau-Varilla (retirado): `f3625a3d78588858b662a4e99390af296264777763c011da9f1c40e10d09aebe`

Janelas para o card de 932×932 (os dois arquivos vão inteiros, sem recorte):
- Hay: x 110–1110, y 130–1130 (escala 0,932).

Fora do escopo: Carter e Torrijos (s57) e Mondale (s61) são fotos do evento, da pesquisa-imagens. O McCain fica fora do vídeo.
Antes de qualquer cena: os dois arquivos passam pelo `conferente-de-midia` (fluxo `midia`).

## 2ª rodada (15/10/2026): o veredito do conferente

- Hay: `aprovado`, com `Photo from 1902`. Fica.
- Bunau-Varilla (World's Work, 1904): `trocar` (escrevendo à mesa na palavra "signed it"; sem ano da foto na origem). Movido, não apagado, de `_media/pessoa/s10/` para `_media/_caca/_retirado/pessoa/bunau-varilla-philippe-1904-worldswork-commons.jpg` (sha256 `f3625a3d…aebe`, igual antes e depois). Registrado em `retirados` no `pauta-pessoas.json` e no `_PROCEDENCIA.json` da s10.
- Substituto: nenhum entregue. Candidato frontal da Bain (LoC cph.3f06238, LCCN 2001696911; 2809×4096 por ffprobe), só em `_tmp/pesquisa-pessoas/candidato/`. O Commons copia `date=1924` do registro da LoC, mas o ano impresso na cópia está ilegível e o rosto parece mais novo que 64 anos: a data se lê em https://www.loc.gov/pictures/item/2001696911/ (só pelo navegador; por script a LoC dá 403). Até lá, o card do plano 2 sai só com nome e cargo.
