// ── NOVO na Régie (não é porte) ──────────────────────────────────────────────────────────────
// O que é: a escrita do _PROCEDENCIA.json para os scripts do CANAL que instalam mídia de acervo
// assinado (_instalar-lote.mjs e api-oficial.mjs). Um lugar só, para as duas portas não divergirem.
// De onde vieram as regras:
//   · top10-estudio/scripts/stock/_instalar-lote.mjs:321-338 e api-oficial.mjs:376-401 (commit
//     4afda12) — "MERGE relido na hora, nunca sobrescreve chave alheia". Mas os dois tinham o mesmo
//     furo: `try { JSON.parse } catch { atual = {} }` — um _PROCEDENCIA.json com uma vírgula a mais
//     virava {} e era SOBRESCRITO, apagando a declaração de todos os outros arquivos da pasta;
//   · <motor>/src/midia/procedencia.mjs (escreverProcedencia) — ilegível não se sobrescreve, arquivo
//     já declarado vence, gravação por tmp + rename com nova tentativa. Não se reusa a função do
//     motor porque ela carimba `declarado_pelo_buscar_midia_em` — e quem declarou aqui não foi ele.
// A leitura das quatro formas é a do motor (lerProcedencia), importada — não copiada. A TRAVA também
// (comTrava de <motor>/src/midia/arquivos.mjs, a mesma do escreverProcedencia): o entregar do motor,
// o _instalar-lote e o api-oficial podem escrever na MESMA pasta de cena ao mesmo tempo (subagentes em
// paralelo), e ler-modificar-gravar sem trava faz a última gravação apagar a declaração da outra — em
// silêncio, virando SEM PROVA ou recaça depois (achado da revisão v1, 23/09/2026).
// Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const NOME = "_PROCEDENCIA.json";

/**
 * Pode acrescentar `arquivo` em `pasta`? {ok:true} ou {ok:false, porque}. Roda ANTES de instalar:
 * recusar depois de copiar deixaria mídia na pasta da cena sem declaração (o dano que o estúdio
 * documenta em _instalar-lote.mjs:207-209).
 */
export function podeDeclarar(pasta, arquivo, { lerProcedencia }) {
  const caminho = join(pasta, NOME);
  if (existsSync(caminho)) {
    try { JSON.parse(readFileSync(caminho, "utf8").replace(/^﻿/, "")); }
    catch { return { ok: false, porque: `o ${NOME} de ${pasta} está ilegível (JSON inválido) — conserte-o antes; nada foi instalado` }; }
  }
  if (lerProcedencia(pasta).some((i) => i.arquivo === arquivo)) {
    return { ok: false, porque: `${arquivo} já está declarado em ${NOME} — escolha outro nome (ou remova o arquivo antigo E a entrada dele, conscientemente)` };
  }
  return { ok: true };
}

/**
 * Acrescenta UM item. Envelope {itens:[…]} (a forma que o motor escreve); arquivo em forma de mapa
 * ou de lista é preservado e completado. Devolve {ok, caminho, porque?}.
 *
 * `antes` (opcional) roda DENTRO da trava, depois da checagem e antes da gravação — é onde quem
 * instala põe o arquivo no lugar, para "pôr o arquivo" e "declarar o arquivo" serem um passo só aos
 * olhos de outro processo (o mesmo desenho do escreverProcedencia do motor). Se a checagem recusa,
 * `antes` não roda: nada chega à pasta da cena.
 */
export function declarar(pasta, item, { lerProcedencia, renomearComRetentativa, comTrava, quem, quando = new Date().toISOString(), antes = null }) {
  if (typeof comTrava !== "function") throw new TypeError("declarar exige comTrava (do motor: src/midia/arquivos.mjs)");
  const caminho = join(pasta, NOME);
  mkdirSync(pasta, { recursive: true });          // a trava mora ao lado do arquivo: a pasta tem de existir
  // Tudo — a checagem e a gravação — dentro da trava: checar fora e gravar dentro deixaria dois
  // processos passarem pela checagem do MESMO nome.
  return comTrava(caminho, () => gravarSobTrava(pasta, caminho, item, { lerProcedencia, renomearComRetentativa, quem, quando, antes }));
}

function gravarSobTrava(pasta, caminho, item, { lerProcedencia, renomearComRetentativa, quem, quando, antes }) {
  const pode = podeDeclarar(pasta, item.arquivo, { lerProcedencia });
  if (!pode.ok) return { ok: false, porque: pode.porque };
  if (antes) antes();
  let atual = null;
  if (existsSync(caminho)) atual = JSON.parse(readFileSync(caminho, "utf8").replace(/^﻿/, ""));
  let saida;
  if (Array.isArray(atual)) saida = { itens: [...atual, item] };
  else if (atual && typeof atual === "object") saida = { ...atual, itens: [...(Array.isArray(atual.itens) ? atual.itens : []), item] };
  else saida = { itens: [item] };
  saida[`atualizado_por_${quem}_em`] = quando;
  const tmp = `${caminho}.tmp-${process.pid}`;
  writeFileSync(tmp, `${JSON.stringify(saida, null, 2)}\n`);
  renomearComRetentativa(tmp, caminho);
  return { ok: true, caminho };
}
