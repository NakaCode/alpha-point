#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-procedencia.mjs (linhas 1-1147, commit 4afda12).
// O que mudou:
//   · raiz: só out/ da pasta do canal (a atual). Saiu o /dados/out da VM e o symlink dela;
//   · as listas de marca vêm de scripts/stock/lib/marcas-acervo.mjs: as cinco vetadas do estúdio
//     (coverr, unsplash, videvo, mixkit, freepik) CONTINUAM vetadas, somadas às que o canal vetar em
//     marca/midia.json (campo marcas_vetadas, o mesmo que o motor lê) — o canal restringe, não afrouxa;
//   · REUTERS: era acervo ASSINADO no estúdio; aqui é VETADA SEM EXCEÇÃO (a licença é do Top10, os
//     canais novos não podem usá-la — nem com excecao_autorizada). Getty saiu dos assinados pelo mesmo
//     motivo (não há contrato de agência nos canais); agência citada em qualquer fonte cai em
//     EDITORIAL_SEM_LICENCA, sem precisar da prova de "fora da assinatura", porque aqui não há assinatura;
//   · PROVA 2 (manifest.jsonl): em vez do stock-hub de ~/Downloads (que só existia no Mac da caça),
//     lê os manifest.jsonl que o buscar-midia do motor e o api-oficial.mjs gravam em
//     out/<proj>/_media/_caca/**; STOCK_HUB ainda vale, se definido;
//   · licença "a_confirmar" (o que o motor grava quando a linha do download não traz licença medida
//     na fonte) é SEM PROVA de licença, com o motivo dito — antes passaria como "declarada";
//   · faceless: a isenção de "máscara do apresentador" saiu; a de master ficou, declarada como
//     opcional (a finalização do motor ainda aceita um _master em _media/);
//   · as receitas impressas apontam o que EXISTE no canal (procedencia-reconciliar.mjs, buscar-midia
//     do motor): procedencia-declarar.mjs, aplicar-substituicao-midia.mjs, o túnel e o gcloud do
//     bucket não vieram;
//   · JSON com BOM (PowerShell 5.1) tolerado; alvo aceita out\<proj> do Windows;
//   · o PASS lembra a ESPECIFICIDADE quando há mídia de licença aberta (Pexels/Pixabay, PESQ-126);
//   · [revisão v1, 23/09/2026] NOME DE ARQUIVO NÃO É PROVA: `shutterstock_123.jpg` (o nome da prévia
//     COM marca d'água que qualquer um baixa) passava PROVADA num canal sem conta nenhuma. PROVADA exige
//     _PROCEDENCIA.json ou manifest.jsonl (I4); o nome de acervo pago sem um dos dois é SEM PROVA, dito;
//   · declaração que cita acervo assinado precisa de URL DO DOMÍNIO dele (shutterstock.com,
//     storyblocks.com, elements.envato.com…): `--plataforma=envato --url=<youtube>` não prova Envato;
//   · licença NC/ND (Creative Commons não comercial / sem derivação) é PROIBIDA, sem exceção: o canal é
//     monetizado (NC) e a cena é obra derivada (ND). Licença CC fora da trava do motor
//     (src/midia/licenca.mjs, licencaAceita) é SEM PROVA. Vale com ou sem reconciliar;
//   · marca/midia.json ILEGÍVEL é erro (exit 2), nunca "segue com as herdadas" (I5: fail-closed —
//     na dúvida o código barra); marca vetada com espaço ("Adobe Stock") casa normalizada;
//   · STOCK_HUB (o hub do Mac do Top10) saiu.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * QC DE PROCEDÊNCIA — de que acervo veio cada mídia que está no vídeo.
 *
 * ── POR QUE EXISTE ──────────────────────────────────────────────────────────────────────────────
 * A marca exige mídia REAL com procedência declarada. Os acervos ASSINADOS (Shutterstock, Storyblocks,
 * Envato, Motion Array, Reuters) são a fonte principal. Coverr, Unsplash, Videvo, Mixkit e Freepik são
 * **proibidos**.
 *
 * ⛔ **SUPERADO EM PARTE em 14/set/2026 pela [PESQ-126]: Pexels e Pixabay SAÍRAM do veto.** Palavra do
 * Mateus: *«Pexels/Pixabay podem SIM, e devem ser consultados, como uma fonte adicional de candidatos
 * de footages. O que eu não quero que usem de lá são footages genéricos.»* A régua passou da FONTE para
 * a ESPECIFICIDADE — e especificidade este gate NÃO mede: ele garante que a origem está declarada; se a
 * coisa na imagem é a coisa nomeada, julga o `qc-visual`. As listas moram em `lib/marcas-acervo.mjs`.
 * *O texto abaixo narra o caso que criou o veto; o defeito dele era imagem genérica sob afirmação
 * específica, e a plataforma foi o sintoma lido como causa.*
 *
 * O caso (29/jul/2026): uma sessão diagnosticou que a VM leva CAPTCHA nos acervos pagos (IP de
 * datacenter, [PESQ-33]) e "resolveu" migrando para Pexels/Pixabay. Contaminou três projetos —
 * `especies-humanas` 17 de 20 vídeos, `uruguai-despovoado` 16 de 21, `orcas-nao-matam` 7 de 16 — e
 * os TRÊS têm a melhor razão de mídia real do acervo. Passaram limpos por todos os gates.
 *
 * ✅ **OS TRÊS FORAM LIMPOS — medido em 11/ago/2026 com este gate, na VM:** `especies-humanas`
 * 30 itens · 0 proibidos · `uruguai-despovoado` 33 · 0 · `orcas-nao-matam` 85 · 0 (os 4 "sem prova"
 * dele são fotos órfãs que cena nenhuma usa). O parágrafo acima é o CASO que fez este gate nascer,
 * e continua valendo como tal — mas ele descrevia a contaminação no PRESENTE, e é a primeira coisa
 * que se lê ao abrir o arquivo. *Doutrina que descreve um buraco já tapado manda alguém caçar o que
 * já não existe*, e aqui a caça custaria cota diária de acervo assinado para repor mídia correta.
 * A limpeza foi feita e ninguém a registrou; quem fizer a próxima, date a medição aqui.
 *
 * ⛔ **MAS ERAM QUATRO, NÃO TRÊS — e o quarto nunca entrou na lista.** No mesmo dia, um
 * `--todos` acusou **`mamute-de-volta` com 21 arquivos de fonte PROIBIDA** (Pexels 28 · Pixabay 5
 * no registro; 21 com arquivo vivo), **4 deles já referenciados em cena**. Ele ficou invisível por
 * treze dias porque os dois detectores falhavam juntos: os nomes são impecáveis
 * (`s01-tundra-siberiana-aerea.mp4` não carrega marca de acervo) e a `fonte` só passou a existir no
 * `_PROCEDENCIA.json` quando o `procedencia-declarar.mjs` ([[PESQ-74]]) a transcreveu dos JSONs de
 * pesquisa, em 10/ago. *Nome limpo não é procedência limpa* — e uma lista de vítimas fechada em
 * "três" vira a régua de quem audita, que então nunca procura o quarto.
 *
 * ── ⚠️ POR QUE ESTE GATE FOI REESCRITO (05/ago/2026, FASE 4 da auditoria) ───────────────────────
 * A versão anterior **provava ZERO**. Ela decidia procedência só pela AUSÊNCIA de "pexels|pixabay|…"
 * no nome do arquivo, e o veredito era `exit(sujos ? 1 : 0)`. O contador `assinados` era calculado,
 * impresso e **nunca entrava no veredito** — apesar de o cabeçalho já prometer *"presença aqui é
 * prova positiva, não só ausência de proibição"*.
 *
 * Medido em 05/ago, antes desta reescrita: **172 arquivos em 10 projetos, `assinada` = 0 em 10 de
 * 10**, e o gate concluía `✓ PASS — toda a mídia vem de acervo assinado`. Nenhum arquivo casava com
 * NENHUMA das duas listas: a detecção do PROIBIDO só funcionava por acidente de nomenclatura alheia
 * (Pexels assa a marca no nome do arquivo; Envato/Shutterstock nomeiam pelo título), e a prova do
 * ASSINADO nunca funcionou porque a cópia para `_media/<assunto>/` renomeia por assunto.
 *
 * E havia um buraco pior: **ele varria só o DISCO, e o disco é limpo pós-entrega.** `especies-humanas`
 * tinha 3 arquivos em `_media` e **7 HTMLs com 30 referências a `pexels-*.mp4` vivas** — o projeto
 * contaminado dava PASS porque a prova tinha sido apagada. O gate ficava mais cego justamente onde o
 * defeito estava. Por isso agora ele varre **as cenas também**, e ali a ausência do arquivo no disco
 * não absolve: a cena continua apontando para o proibido.
 *
 * ── COMO ELE PROVA AGORA (o sinal invertido) ────────────────────────────────────────────────────
 * Três estados, não dois:
 *   ⛔ PROIBIDA   — nome de arquivo, referência em cena ou `fonte` declarada batem no veto da marca.
 *   ✓  PROVADA    — tem prova POSITIVA: entrada no `_PROCEDENCIA.json`, nome de acervo assinado, ou
 *                   nome presente no `manifest.jsonl` do stock-hub.
 *                   [porte Regie] Na Régie o NOME de acervo assinado deixou de ser prova (I4): PROVADA
 *                   exige `_PROCEDENCIA.json` ou `manifest.jsonl`, e acervo assinado exige a URL do
 *                   item no domínio dele. Ver o cabeçalho de porte.
 *   ?  SEM PROVA  — é mídia de acervo (footage/foto) e ninguém declarou de onde veio. **Reprova.**
 *
 * ── A CALIBRAÇÃO (por que ele não vira alarme falso) ────────────────────────────────────────────
 * Alarme falso é bug de prioridade alta: verificação que grita à toa ensina a ignorá-la, e aí ela
 * para de proteger justamente quando acerta. Então **nem toda mídia precisa de carimbo** — só a que
 * vem de acervo. Máscara, bandeira, logo oficial, master, clipping de documento, retrato de fonte
 * institucional, referência interna e captura própria são ISENTAS do carimbo.
 *
 * ⚠️ Isenção é do CARIMBO, nunca da PROIBIÇÃO: o veto da marca é checado em 100% dos arquivos e das
 * referências, isentos inclusive. Não existe pasta onde acervo VETADO seja aceitável (a lista está em
 * `lib/marcas-acervo.mjs`; desde a [PESQ-126], Pexels e Pixabay não estão nela).
 *
 * ── E POR QUE ISTO NÃO É "SÓ AVISAR" ────────────────────────────────────────────────────────────
 * Porta fechada não autoriza trocar a fonte; autoriza **avisar**. O caminho legítimo quando o acervo
 * pago bloqueia é reportar e parar.
 *
 * ⚠️ E o caminho não é mais "só o Mac": a [PESQ-34] ("a caça roda no Mac, a VM leva CAPTCHA por IP
 * de datacenter") **virou em 05/ago/2026** — a VM caça pelo SOCKS reverso com o IP de casa, medido
 * de ponta a ponta em `docs/CACA-DE-MIDIA-NA-VM.md`. Um gate que manda "recace no Mac" hoje está
 * mandando trabalho para uma restrição que não existe mais.
 *
 * Uso: node scripts/qc-procedencia.mjs <proj> [--json] [--todos] [--cenas=id1,id2]
 * Exit 1 se achar mídia PROIBIDA **ou** mídia de acervo SEM PROCEDÊNCIA DECLARADA.
 * É gate DURO: identidade de marca não é editorial.
 */
import { existsSync, readdirSync, statSync, readFileSync } from "node:fs";
import { join, dirname, basename, sep } from "node:path";
// [porte Regie] as três libs moram em scripts/stock/lib/ (a camada de mídia do canal)
import { ehCaminhoDeRascunhoDeCaca } from "./stock/lib/rascunho-de-caca.mjs";
// [porte Regie] referencias-midia é a de scripts/lib/ (uma cópia só — a de stock/lib/ era gêmea e saiu)
import { referenciasDeMidiaNoTexto } from "./lib/referencias-midia.mjs";
import { MARCAS_CONHECIDAS, MARCAS_LIBERADAS, MARCAS_VETADAS_SEM_EXCECAO, marcasVetadasDoCanal } from "./stock/lib/marcas-acervo.mjs";
import { DOMINIOS, hostDe, plataformaAssinadaDoTexto, urlEhDaPlataforma } from "./stock/lib/instalacao-procedencia.mjs";
import { julgarLicencaCC as julgarLicencaCCDoCanal } from "./stock/lib/licenca-cc.mjs";
import { importarDoMotor } from "./lib/motor.mjs";

// [porte Regie] a pasta do canal é a atual; out/ mora nela
const RAIZ = process.cwd();
/** [porte Regie] JSON escrito pelo PowerShell 5.1 vem com BOM, que o JSON.parse recusa */
const lerJson = (p) => JSON.parse(readFileSync(p, "utf8").replace(/^\uFEFF/, ""));
/**
 * [porte Regie] As marcas que o CANAL vetou (marca/midia.json), lidas pelo mesmo leitor do motor.
 * Sem canal.json (gate rodado fora da pasta do canal) valem só as do estúdio + Reuters, com aviso.
 *
 * [I5] FAIL-CLOSED: só a AUSÊNCIA do canal cai no padrão. marca/midia.json (ou canal.json) ILEGÍVEL
 * sai 2 com a mensagem do motor. Provado na revisão v1: um canal que vetou pexels dava exit 1 com o
 * JSON legível e, com UMA vírgula a mais no mesmo arquivo, PASS e exit 0 — uma vírgula desfazia o veto
 * do dono, e quem lê só o PASS não via o aviso de uma linha.
 */
let VETADAS_DO_CANAL = [];
let licencaAceita;
try {
  ({ licencaAceita } = await importarDoMotor("src/midia/licenca.mjs"));
  const { lerConfigCanal } = await importarDoMotor("src/midia/canal.mjs");
  VETADAS_DO_CANAL = lerConfigCanal(RAIZ, { exigirContato: false }).marcasVetadas;
} catch (e) {
  if (e?.code !== "SEM_CANAL" || !licencaAceita) {
    console.error(`⛔ ${String(e?.message || e)}`);
    if (e?.code === "JSON_ILEGIVEL") console.error("  Conserte o JSON (uma virgula a mais basta para quebrar). O gate NAO roda com a configuracao do canal ilegivel:\n  seguir sem ela desfaria os vetos do dono em silencio.");
    process.exit(2);
  }
  console.error(`  ! sem canal.json aqui (${String(e?.message || e).split("\n")[0]}) — valem so as vetadas herdadas.`);
}
const VETADAS = marcasVetadasDoCanal(VETADAS_DO_CANAL, { aviso: (t) => console.error(`  ! ${t}`) });

const argv = process.argv.slice(2);
const JSON_OUT = argv.includes("--json");
const TODOS = argv.includes("--todos");
/* ⚠️ ACEITA SLUG **OU** CAMINHO (08/ago/2026). Este gate espera o SLUG; o `qc-midia-real`, ao lado,
 * espera `out/<proj>`. Quem chama errado não recebe "argumento inválido": recebe
 * "✗ RECUSADO — não achei mídia NEM cena", que **parece um veredito sobre o projeto**. Mordeu duas
 * vezes no mesmo dia — um agente de QC leu o RECUSADO como gate quebrado e refez a procedência à
 * mão, e eu li o inverso no `qc-midia-real` e registrei "projeto sem espelho" num projeto com
 * espelho. Normalizar a entrada custa uma linha e mata a classe inteira. */
const alvoBruto = argv.find((a) => !a.startsWith("--"));
// [porte Regie] também a contrabarra do Windows (out\\<proj>)
const alvo = alvoBruto ? alvoBruto.replace(/[\\/]+$/, "").split(/[\\/]/).filter(Boolean).pop() : alvoBruto;
const cenasArg = argv.find((a) => a.startsWith("--cenas="));
let CENAS_ALVO = null;
if (cenasArg) {
  const ids = cenasArg.slice("--cenas=".length).split(",");
  if (!alvo || TODOS || !ids.length || ids.some((id) => !/^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(id))) {
    console.error("⛔ --cenas exige um projeto e uma lista não vazia de IDs seguros");
    process.exit(2);
  }
  CENAS_ALVO = new Set(ids);
  if (CENAS_ALVO.size !== ids.length) {
    console.error("⛔ --cenas não aceita IDs duplicados");
    process.exit(2);
  }
}

/**
 * Os acervos que a marca proíbe. O nome do arquivo carrega a origem porque o caçador o carimba —
 * e quando não carrega, a `fonte` declarada no `_PROCEDENCIA.json` é checada contra a mesma lista.
 *
 * ⚠️ VECTEEZY SAIU DAQUI (05/ago/2026). Ele estava na lista por arrasto e **não está no veto da
 * marca**: `VECTEEZY_ACCOUNT_ID`/`VECTEEZY_SECRET` seguem ATIVAS no `.env` de propósito e
 * `knowledge/CONEXOES-E-TOOLS.md:24` o registra como fonte a "ativar no hub de stock". Vetá-lo aqui
 * era um alarme falso esperando alguém ligar a fonte. Ele entra como fonte COM ATRIBUIÇÃO (abaixo).
 */
// ⛔ PEXELS E PIXABAY SAÍRAM DAQUI (14/set/2026, [PESQ-126]) — a lista mora em `lib/marcas-acervo.mjs`,
// fonte ÚNICA para este gate, o `despachante`, o `observatorio` e o `procedencia-declarar`. A régua
// passou de FONTE para ESPECIFICIDADE, e especificidade quem julga é o `qc-visual`, não este regex.
// [porte Regie] a lista do canal: as do estúdio + Reuters + as de marca/midia.json
const PROIBIDAS = new RegExp(VETADAS.join("|"), "i");
/** [porte Regie] Reuters: contrato do Top10 — exceção nenhuma a libera num canal da Régie. */
const SEM_EXCECAO = new RegExp(MARCAS_VETADAS_SEM_EXCECAO.join("|"), "i");

/**
 * ── USO NÃO É MENÇÃO — o gate lia a NEGAÇÃO como confissão ([SIS-456], 11/set/2026) ─────────────
 *
 * O teste era `PROIBIDAS.test(fonte + " " + url + " " + licenca)`: a marca aparece em qualquer
 * lugar do texto concatenado, reprova. O campo `fonte` das quatro fotos da `t-s103` do
 * `terremotos-america-do-sul` terminava, de boa-fé, com
 *
 *     "⛔ Nenhuma peça veio de Pexels, Pixabay ou Coverr"
 *
 * — uma declaração de CONFORMIDADE. O regex casou a marca dentro da negação, as quatro fotos
 * (FEMA/NARA em domínio público e Wikimedia CC BY-SA 2.0) viraram `motivo: "fonte declarada"`, e a
 * cena passou a ser retirada de TODO handoff em silêncio: laudo APROVADO, portão `ok:true`, e o
 * relatório imprimindo só o total — 142 contra 144 não denuncia quem faltou.
 *
 * ⛔ **O conserto NÃO afrouxa a proibição — ele muda ONDE ela é lida.** Usar um acervo vetado deixa
 * rastro em IDENTIFICADOR: o nome do arquivo, a URL de origem, o campo `url` da declaração. Prosa
 * livre não é rastro de uso; é o agente falando sobre o que fez. Então:
 *
 *   1 · toda URL escrita em QUALQUER campo é testada inteira e VENCE a prosa em volta — negar por
 *       extenso enquanto se declara `https://www.pexels.com/...` não absolve nada;
 *   2 · o campo `url` sem esquema é identificador de origem, e é testado como tal;
 *   3 · só o que sobra (prosa de `fonte`/`licenca`, já sem as URLs) passa pela régua de negação.
 *
 * A dispensa cobre apenas orações inteiras de não uso e sua lista de marcas. Dúvida, licença
 * negada, uso parcial e prosa fora desse molde continuam acusáveis. A dispensa não é prova de
 * origem: a declaração precisa ainda deixar fonte ou URL positiva depois da remoção.
 *
 * Enquanto o teste for "a palavra aparece?", toda prosa honesta sobre o que NÃO se usou vira
 * reprovação — e reprovação falsa em gate duro ensina a ignorar o gate, que é como o defeito de
 * verdade passa junto com o alarme falso.
 */
const URL_NO_TEXTO = /\bhttps?:\/\/[^\s"'<>)\]]+/gi;

/**
 * Quebra a prosa em orações. ⚠️ VÍRGULA NÃO SEPARA, de propósito: a frase que originou a
 * [SIS-456] nega uma LISTA ("Pexels, Pixabay ou Coverr"), e quebrar por vírgula deixaria os itens
 * seguintes órfãos da negação. A lista precisa ocupar a oração inteira. Travessão/hífen só quando cercado de
 * espaço, para não partir `motion-array`.
 */
const SEGMENTO = /[.;!?\n\r•·|]+|\s[—–-]\s/;

// Só uma oração inteira que nega uso/obtenção e enumera marcas vetadas é dispensada.
// Negar licença, declarar dúvida ou retomar uso não satisfaz este contrato restrito.
// ⚠️ MARCAS_CONHECIDAS, e NÃO MARCAS_VETADAS (14/set/2026). A oração de não uso lista marcas quaisquer —
// «Nenhuma peça veio de Pexels, Pixabay ou Coverr». Se esta régua usasse só as vetadas, a frase deixaria
// de ser reconhecida como negação quando Pexels/Pixabay saíram do veto, e o «Coverr» dentro dela voltaria
// a reprovar a cena: exatamente o alarme falso que a [SIS-456] fechou. Negar uso nunca é rastro de uso.
// [porte Regie] + Reuters e as vetadas do canal: negar uso delas também é conformidade
const MARCA_NA_LISTA = `(?:${[...new Set([...MARCAS_CONHECIDAS, ...VETADAS])].join("|")})`;
const SEPARADOR_LISTA = String.raw`(?:,\s*(?:(?:e|ou|nem)\s+)?|\s+(?:e|ou|nem)\s+)`;
const NAO_USO_EXPLICITO = new RegExp(
  String.raw`^(?:⛔\s*)?(?:nenhuma\s+(?:peça|imagem|mídia|foto)\s+(?:veio de|foi obtida em)|sem uso de|n[ãa]o (?:usei|usamos))\s+`
  + MARCA_NA_LISTA + `(?:${SEPARADOR_LISTA}${MARCA_NA_LISTA})*\\s*$`, "iu",
);
const oracaoDeNaoUso = (s) => NAO_USO_EXPLICITO.test(s.trim());
function semDeclaracoesDeNaoUso(s) {
  const original = String(s ?? "");
  let removeu = false;
  // Capturar os separadores preserva X.com e URLs: reconstruí-los como pontos muda a origem.
  const fonte = original.split(new RegExp(`(${SEGMENTO.source})`, "g")).map((seg, i, partes) => {
    if (i % 2 === 0 && !(partes[i + 1] || "").includes("?") && oracaoDeNaoUso(seg)) {
      removeu = true;
      return "";
    }
    return seg;
  }).join("");
  return {
    removeu,
    fonte: removeu ? fonte.replace(/^[\s.;!?•·|—–-]+|[\s.;!?•·|—–-]+$/g, "") : original,
  };
}

// Esta dispensa de não uso não pode suplantar uma pendência expressa de licenciamento.
const LICENCA_PENDENTE = /^(?:sem licen[cç]a(?: comprovada| confirmada)?|licen[cç]a (?:pendente|desconhecida|n[ãa]o confirmada))$/i;

const recorte = (s) => String(s).trim().replace(/\s+/g, " ").slice(0, 96);

/**
 * Menção NÃO negada a acervo vetado dentro de prosa. Devolve o trecho que acusa, ou null.
 * Chamar só com o texto JÁ sem as URLs — URL se julga por identificador, nunca por negação.
 */
function mencaoNaoNegada(txt) {
  const residual = semDeclaracoesDeNaoUso(txt).fonte;
  return PROIBIDAS.test(residual) ? recorte(residual) : null;
}

const partesDaLicenca = (v) => v && typeof v === "object"
  ? [v.nome, v.name, v.url].filter((x) => typeof x === "string")
  : [String(v ?? "")];
const textoDaLicenca = (v) => partesDaLicenca(v).join(" ");

/**
 * Evidência de USO de acervo vetado numa declaração de procedência.
 * `campos` é uma lista `[nome, valor]`, na ordem em que devem ser citados no laudo.
 * Devolve `{ via, trecho }` — o que acusou e onde — ou `null`.
 */
function evidenciaDeUsoProibido(campos) {
  // 1 · IDENTIFICADOR — onde o uso de fato fica registrado. Vence qualquer prosa em volta.
  for (const [campo, bruto] of campos) {
    const s = String(bruto ?? "");
    if (!s.trim()) continue;
    const urls = s.match(URL_NO_TEXTO) || [];
    for (const u of urls) if (PROIBIDAS.test(u)) return { via: `${campo} (url)`, trecho: recorte(u) };
    // `url: "pexels.com/photo/123"` — identificador escrito sem esquema. Aqui o campo INTEIRO é a
    // origem declarada; não há prosa em volta para negar coisa alguma.
    if (campo === "url" && !urls.length && PROIBIDAS.test(s)) return { via: "url", trecho: recorte(s) };
  }
  // 2 · PROSA — sem as URLs (já julgadas acima), e só a menção que NÃO está sob negação.
  for (const [campo, bruto] of campos) {
    const trecho = mencaoNaoNegada(String(bruto ?? "").replace(URL_NO_TEXTO, " "));
    if (trecho) return { via: campo, trecho };
  }
  return null;
}

/** Os assinados — presença aqui é prova positiva, não só ausência de proibição. */
// [porte Regie] sem reuters e sem getty: agência não é acervo assinado de nenhum canal da Régie
const ASSINADAS = /shutterstock|storyblocks|envato|motionarray|motion-array|adobe.?stock|sstk|\bSBV-\d/i;
// Texto que OCUPA o campo `fonte` sem dizer nada: o resultado de serializar um objeto ou um
// preenchimento vazio. Não é fonte — e antes passava no teste de comprimento como se fosse.
/* ⚠️ A CONFISSÃO DE IGNORÂNCIA TAMBÉM É PLACEHOLDER (13/ago/2026, `uruguai-despovoado`).
 * Dois agentes identificaram os mesmos 16 footages e nenhum achou a origem. O lote B escreveu
 * `fonte: null` e os 8 dele caíram, corretamente, em SEM PROVA. O lote A escreveu a string
 * `"NAO IDENTIFICADA"` — a mesma conclusão, em prosa — e os 8 dele viraram **PROVADOS**: 29
 * provados / 8 sem prova, quando a verdade eram 21 / 16. O texto que declara não saber passava no
 * teste de `length >= 3` e virava prova de origem.
 * É o irmão do `[object Object]` documentado abaixo, e o mais perigoso dos dois: aquele é um
 * acidente de serialização e este é o agente sendo HONESTO — punir a honestidade com um verde
 * falso ensina a escrever qualquer coisa no campo. Arquivo que pode ter vindo de banco gratuito
 * passava como limpo, que é exatamente o buraco que este gate existe para fechar. */
/* ⚠️ A MESMA CONFISSÃO TEM MAIS DE UMA REDAÇÃO (14/ago/2026, `nilo-nao-secou`). O conserto de
 * 13/ago fechou a redação que aquele projeto usou (`NÃO IDENTIFICADA`) e deixou passar as irmãs.
 * Os shards deste projeto escreveram `"NÃO PROVADA"` — a mesmíssima conclusão, outra palavra — e
 * ela passava no `length >= 3` como prova de origem. Ninguém tinha sido queimado ainda só porque
 * o `--aplicar` não chegou a rodar aqui; o defeito estava ARMADO, não ausente.
 * O agravante é que o `motivo` logo abaixo **recomenda** rodar `procedencia-declarar.mjs --aplicar`,
 * e esse script conta a string de ignorância como "declarada · 1/1 cobertos" no relatório. Ou seja:
 * o gate mandava executar exatamente o passo que produziria o verde falso.
 * Por isso a família toda entra por RADICAL (provad/identificad/encontrad/confirmad/localizad), e
 * não por frase inteira — a próxima sessão vai inventar a sexta redação. */
const PLACEHOLDER = /^(\[object Object\]|undefined|null|n\/?a|-+|\?+|desconhecid[ao]|sem fonte|sem prova|tbd|n[ãa]o[- ](?:provad|identificad|encontrad|confirmad|localizad)[ao]|sem procedencia|sem procedência|indefinid[ao])$/i;

/** Fonte livre/institucional CITÁVEL: legítima, exige crédito, e declarar continua sendo obrigatório. */
const CITAVEIS = /wikimedia|commons|nasa|noaa|usgs|jaxa|dvids|esa\b|eso\b|hubble|jwst|webb|smithsonian|europeana|nypl|rijksmuseum|met.?museum|internet.?archive|prelinger|openverse|flickr|loc\.gov|library of congress|gallica|rumsey|dominio publico|domínio público|public domain|\bCC[- ]?(BY|0)/i;

/** Vecteezy: permitido, mas com crédito obrigatório — declarar é o que torna o crédito auditável. */
const ATRIBUICAO = /vecteezy/i;

/**
 * Pexels/Pixabay: permitidos com LICENÇA ABERTA ([PESQ-126], 14/set/2026) — procedência declarada é
 * obrigatória como em qualquer acervo, mas **crédito NÃO**: as duas licenças dispensam atribuição
 * (conferido no documento). Por isso NÃO entram em `ATRIBUICAO`, que declara crédito obrigatório — pôr
 * na tela o crédito que a licença dispensa é reprovação na lente `fonte` ([ARTE-41]).
 * A especificidade (a coisa na imagem é a coisa nomeada?) não se mede aqui: é da lente de cobertura.
 */
const LICENCA_ABERTA = new RegExp(MARCAS_LIBERADAS.join("|"), "i");

/**
 * ── [porte Regie] LICENÇA NC/ND NUNCA VIRA MATERIAL APROVADO ──────────────────────────────────────
 * Provado na revisão v1 (23/09/2026): uma foto CC BY-NC-SA 4.0 atravessava `_commons-baixar` →
 * `_creditos.json` → `procedencia-reconciliar --escrever` → este gate com PASS, porque a classe vinha da
 * FONTE ("Wikimedia Commons" casa com CITAVEIS) e ninguém olhava a LICENÇA. A trava do motor
 * (src/midia/licenca.mjs, licencaAceita) recusava a mesma licença na busca — e a porta do canal a
 * contornava.
 *
 * Dois desfechos, e a diferença importa:
 *   · NC ou ND escrito na licença → PROIBIDA, sem exceção possível: NC porque o canal é monetizado,
 *     ND porque a cena é obra derivada. Não é risco que o dono assuma por escrito — é a licença dizendo
 *     não;
 *   · outra licença Creative Commons que a trava do motor não reconhece ("CC BY-SA 3.0 migrated",
 *     "CC BY-SA 2.5 PT"…) → SEM PROVA, com o motivo: pode ser boa, mas ninguém mediu.
 * Sufixos que não mudam a licença ("International", "Unported", "Generic", "Deed", "License") saem
 * antes; a forma por extenso ("Creative Commons Attribution-ShareAlike 4.0") vira a curta. Licença que
 * não é Creative Commons (Shutterstock, Pexels License, domínio público) não passa por aqui.
 */
const julgarLicencaCC = (valor) => julgarLicencaCCDoCanal(valor, { licencaAceita });   // a régua mora em stock/lib/licenca-cc.mjs

/**
 * [porte Regie] [I4] Declaração que cita acervo ASSINADO prova só com URL do domínio dele. Devolve o
 * motivo da recusa, ou null. `plat` é a plataforma que o texto cita (plataformaAssinadaDoTexto).
 */
function motivoAssinadaSemUrlDaPlataforma(plat, url) {
  if (!plat) return null;
  if (!url) return `declara ${plat} sem a URL do item — nome de acervo pago não prova licença; declare a página do item em ${DOMINIOS[plat].join(" / ")}`;
  if (!urlEhDaPlataforma(plat, url)) return `declara ${plat}, mas a URL é de ${hostDe(url) || "(ilegível)"} — a licença de ${plat} só se prova com a página do item em ${DOMINIOS[plat].join(" / ")}`;
  return null;
}

/**
 * ── ISENÇÕES DE CARIMBO ─────────────────────────────────────────────────────────────────────────
 * O que NÃO é mídia de acervo e portanto não precisa provar procedência. Cada linha diz por quê —
 * isenção sem motivo escrito vira porta dos fundos.
 */
const ISENTAS_POR_PASTA = [
  [/(^|\/)(flags?|bandeiras?)(\/|$)/i,                 "bandeira oficial (flagcdn) — não é acervo"],
  [/(^|\/)(logos?|marcas?)(\/|$)/i,                    "logo oficial via pesquisa-logos — não é acervo"],
  [/(^|\/)(m[aá]scaras?|masks?|matte|alpha)(\/|$)/i,   "máscara/chroma gerada na casa"],
  // `docs` incluído em 10/ago/2026: é o nome que o `pesquisa-documentos` REALMENTE cria (medido no
  // `mamute-de-volta`, `_media/docs/` com 8 clippings `*-prova.png`), e `documentos?` não casa com
  // ele. A isenção existia e não pegava a pasta que ela descreve — 8 arquivos entravam na conta de
  // "SEM PROVA" com a fonte estampada na própria imagem. Regra de isenção que não casa com o nome
  // usado na prática é uma isenção que não existe.
  [/(^|\/)(docs?|documentos?|clippings?)(\/|$)/i,      "clipping de documento — a fonte está na própria peça (pesquisa-documentos)"],
  [/(^|\/)(pessoas?|retratos?)(\/|$)/i,                "retrato de fonte institucional/PD (pesquisa-pessoas, regra própria)"],
  [/(^|\/)(refs?|_refs?|referencias?|referências?)(\/|$)/i, "material de referência interno"],
  // `_bframes-original` é o MESMO caso do `_fps-original`, com outro nome: a cópia guardada antes da
  // normalização (30 fps + all-intra, [REND-47]). A isenção citava só um dos dois e os 7 backups do
  // `mamute-de-volta` contavam como acervo sem prova — reclamando duas vezes do mesmo clipe, uma na
  // pasta boa e outra no backup dela.
  [/(^|\/)_(fps|bframes)-original(\/|$)/i,             "cópia pré-reencode de clipe já conferido na pasta irmã"],
  [/(^|\/)cenas?(\/|$)/i,                              "mídia gerada na casa (fundo/placa de cena)"],
  [/(^|\/)\.[^/]+(\/|$)/,                              "pasta temporária/oculta"],
];
const ISENTAS_POR_NOME = [
  // [porte Regie] canal faceless: não há apresentador nem máscara dele (a isenção de máscara por nome
  // saiu). A de master FICA, como opcional declarado: a finalização do motor ainda aceita um _master
  // em _media/ (src/ferramentas/finalizar.mjs) para o canal que tiver um.
  [/^_?master|master-decupado|^_?bruto|grava[cç][aã]o/i, "master/bruto da gravação — é o vídeo, não acervo"],
  [/^(qr|print|placa|socialblade|screenshot|captura)[-_]/i, "captura própria do canal"],
  // `_probe-*` são as SONDAS que a própria casa extrai para medir um conserto (frame do clipe, PSNR
  // de cena parada, comparação antes/depois). Não são acervo por construção — ninguém as baixa de
  // lugar nenhum. Contavam como "SEM PROVA": no `uruguai-despovoado`, 8 dos 22 alarmes eram sondas,
  // 36% do laudo. Gate que cobra procedência de artefato que ele mesmo mandou gerar gasta a atenção
  // de quem lê no lugar errado — e o item que importava era UM.
  [/^_?probe[-_]/i,                                      "sonda de medição gerada na casa"],
  [/logo/i,                                              "logo oficial — não é acervo"],
  [/^flag[-_]|^[a-z]{2}\.png$/i,                         "bandeira oficial"],
];
/**
 * Agência pública / instituição no NOME do arquivo. É heurística de ISENÇÃO, não prova — e essa
 * assimetria é de propósito: isentar demais deixa passar um arquivo sem carimbo; exigir demais
 * produz o alarme falso, que é o defeito caro. O veto da marca continua valendo sobre estes.
 */
const AGENCIA_PUBLICA = /(^|[-_.])(nasa|esa|noaa|usgs|jaxa|dvids|nsf|noirlab|eso|hubble|jwst|webb|modis|viirs|landsat|sentinel|copernicus|unesco|ipcc|usda|nih|cdc|who|oms|ibge|inpe|wikimedia|commons|smithsonian|europeana|nypl|loc|gov)([-_.]|$)/i;

function raizes() {
  // ⚠️ na VM `out/` é SYMLINK para `/dados/out` — varrer os dois conta cada arquivo DUAS vezes e
  // infla o laudo (medido: 2 arquivos viraram "4 proibidos"). Resolve o caminho real e deduplica.
  // [porte Regie] na Régie só existe out/ da pasta do canal — a raiz é uma.
  const base = join(RAIZ, "out");
  return existsSync(base) ? [base] : [];
}

function projetos() {
  if (alvo && !TODOS) return [alvo];
  const vistos = new Set();
  for (const r of raizes())
    for (const d of readdirSync(r, { withFileTypes: true }))
      if (d.isDirectory() && !d.name.startsWith("_")) vistos.add(d.name);
  return [...vistos].sort();
}

const EXT = /\.(mp4|mov|jpg|jpeg|png|webp)$/i;

/** Arquivos de mídia de `_media`, já com o caminho RELATIVO a `_media` (que é o que classifica). */
function midias(proj) {
  const out = [];
  for (const r of raizes()) {
    const dir = join(r, proj, "_media");
    if (!existsSync(dir)) continue;
    const desce = (d, rel = "", nivel = 0) => {
      if (nivel > 5) return;
      let es; try { es = readdirSync(d, { withFileTypes: true }); } catch { return; }
      for (const e of es) {
        const p = join(d, e.name);
        const r2 = rel ? `${rel}/${e.name}` : e.name;
        if (e.isDirectory()) { desce(p, r2, nivel + 1); continue; }
        if (!EXT.test(e.name)) continue;
        out.push({ abs: p, rel: r2, nome: e.name, dir: d });
      }
    };
    desce(dir);
  }
  return out;
}

/**
 * ── PROVA 1 · `_PROCEDENCIA.json` ───────────────────────────────────────────────────────────────
 * Um por pasta, chaveado pelo nome do arquivo. Ele já existia (3 pastas de 21 em 05/ago) e
 * **nenhum código o lia** — `grep -rn "_PROCEDENCIA" scripts/` voltava vazio. Agora é a prova
 * principal, porque é a única que sobrevive à renomeação por assunto na cópia para `_media`.
 */
/**
 * ── A `fonte` VEM COMO OBJETO, E O GATE SÓ ACEITAVA STRING ──────────────────────────────────────
 * A prova positiva é decidida por `typeof entrada.fonte === "string"`. Mas metade dos agentes de
 * pesquisa escreve `fonte: { provedor, pagina_url, licenca, credito_na_tela }` — o
 * `procedencia-declarar.mjs` até documenta isso em cima do próprio `textoFonte()`. Resultado: a
 * declaração mais RICA do repositório (a que traz provedor E url E licença E crédito, tudo junto)
 * era a única que não contava como prova, e o arquivo saía "SEM PROCEDÊNCIA" com a procedência
 * inteira aberta na frente do leitor.
 *
 * Achatar aqui é TRANSCRIÇÃO, não maquiagem: nada é decidido, só se lê o provedor de dentro do
 * objeto e se puxa a url para onde o resto do gate a procura. As duas defesas continuam de pé — o
 * teste de PLACEHOLDER (que existe justamente para pegar `[object Object]`) e o de fonte PROIBIDA,
 * que agora enxergam o texto real em vez de um objeto opaco. Na prática o achatamento AUMENTA a
 * chance de flagrar fonte vetada, porque antes o nome do provedor nem chegava ao regex.
 */
const _PROV = ["provedor", "nome", "plataforma", "acervo", "veiculo", "provider", "instituicao", "agencia"];
const _URLS = ["pagina_url", "url", "download_url", "pagina", "pagina_commons", "link"];
function achatar(e) {
  if (!e || typeof e !== "object") return e;
  const f = e.fonte;
  /**
   * Sem `fonte`, a URL http(s) declarada É a fonte — transcrita, não inventada. Medido em 10/set/2026
   * no `terremotos` (`t-s137`): recorte puro de cabeçalho oficial com `url`, `origem`, `origemSha256`
   * e `operacao`, e o gate dizia "SEM PROVA" porque o campo se chamava `url`. A transcrição também
   * FORTALECE a outra defesa: o regex de fonte PROIBIDA passa a ver o domínio (`pexels.com` só em
   * `url` escapava). Caminho local em `origem` sozinho não é prova e continua reprovando.
   */
  if (!f) {
    const url = [e.url, ..._URLS.map((k) => e[k])].find((v) => typeof v === "string" && /^https?:\/\//i.test(v.trim()));
    return url ? { ...e, fonte: url.trim(), url: e.url ?? url.trim(), _fonte_derivada_de: "url" } : e;
  }
  if (typeof f !== "object" || Array.isArray(f)) return e;
  const prov = _PROV.map((k) => f[k]).find((v) => typeof v === "string" && v.trim());
  const url = e.url ?? _URLS.map((k) => f[k]).find((v) => typeof v === "string" && v.trim());
  const licenca = e.licenca ?? (typeof f.licenca === "string" ? f.licenca : undefined);
  return { ...e, fonte: prov ? prov.trim() : JSON.stringify(f).slice(0, 300), url, licenca, _fonte_obj: f };
}

const cacheProc = new Map();
function procedenciaDeclarada(arq, raizMedia) {
  let d = arq.dir;
  for (let i = 0; i < 6; i++) {
    const f = join(d, "_PROCEDENCIA.json");
    if (!cacheProc.has(f)) {
      let j = null;
      if (existsSync(f)) { try { j = lerJson(f); } catch { j = null; } }   // [porte Regie] BOM
      /**
       * ── LISTA TAMBÉM É DECLARAÇÃO ────────────────────────────────────────────────────────────
       * O contrato é `{ "<arquivo>": {…} }`, mas parte dos agentes escreve `[ { arquivo, fonte,
       * url, … } ]` — a mesma informação, indexada de outro jeito. E o defeito é MUDO: em JS
       * `typeof [] === "object"`, então a lista passa pela guarda acima e só falha no
       * `j[arq.nome]`, que numa lista é sempre `undefined`. O arquivo existe, está completo, e o
       * gate jura que ninguém declarou nada.
       *
       * Medido em 10/ago/2026 no `orcas-nao-matam`, na VM: **16 arquivos "SEM PROVA" e o vídeo
       * REPROVADO** — 12 deles com procedência impecável (Wikimedia Commons com URL, descrição do
       * que se vê, data e lugar) dentro de `_media/c23/` e `_media/c25/`, em formato de lista.
       * O laudo mandava recaçar, que aqui queimaria cota de acervo para repor arquivo já correto.
       *
       * É a [[PESQ-74]] um passo adiante: não basta a prova estar ONDE o verificador olha — ela
       * precisa estar em FORMA que ele leia. Aceitar as duas formas custa cinco linhas; exigir que
       * cinco agentes acertem a mesma convenção custa para sempre.
       */
      /**
       * ── … E LISTA DENTRO DE ENVELOPE TAMBÉM ──────────────────────────────────────────────────
       * A calibração acima cobriu `[ {…} ]` na RAIZ e parou aí. Os agentes de pesquisa evoluíram
       * para um envelope — `{ agente, lote, cena, fontes_usadas, itens: [ {arquivo, fonte, …} ] }`
       * — que é a MESMA lista, um nível abaixo, e que o `Array.isArray(j)` não alcança: o objeto
       * atravessa a guarda inteira e `j[arq.nome]` volta `undefined`, exatamente o defeito mudo
       * que o comentário de cima descreve.
       *
       * Medido em 21/ago/2026 no `brasil-portugues`, na VM: das 39 pastas de `_media/` com
       * declaração, **21 estão neste formato** (mais da metade), e o gate REPROVOU o projeto por
       * "33 arquivos de acervo SEM procedência declarada" — entre eles a bula «Romanus Pontifex»
       * do ANTT e a Carta de Lei de 1815 da Câmara, ambas com fonte, cota, URL e licença escritas
       * no arquivo que ele acabara de abrir. O laudo mandava recaçar o que já estava certo.
       *
       * Mesma lição de novo, e é ela que justifica generalizar em vez de remendar: a prova não
       * precisa só estar ONDE o verificador olha — precisa estar em FORMA que ele leia, e a forma
       * muda quando os agentes evoluem. Por isso aqui se aceita a lista onde quer que ela esteja.
       */
      /**
       * ── … E O ENVELOPE `entradas` (terceira forma, 10/set/2026) ──────────────────────────────
       * `{ "entradas": { "<arquivo>": {…} } }` — o mesmo mapa um nível abaixo — trava a `t-s137` do
       * `terremotos` com 14 declarações exemplares dentro. É a terceira vez que a forma muda sem a
       * informação mudar; por isso `entradas` vale como mapa E como lista, e o mapa da raiz vence.
       */
      const envelope = j && typeof j === "object" && !Array.isArray(j) ? j : null;
      const lista = Array.isArray(j) ? j
        : Array.isArray(envelope?.itens) ? envelope.itens
        : Array.isArray(envelope?.entradas) ? envelope.entradas
        : null;
      if (lista) {
        const m = {};
        for (const e of lista) {
          const nome = e && (e.arquivo || e.nome || e.file || e.arq);
          if (nome && typeof e === "object") m[basename(String(nome))] = e;
        }
        /**
         * ⚠️ A lista COMPLEMENTA o mapa, não o substitui. Os arquivos deste projeto trazem as duas
         * formas no MESMO ficheiro (o envelope com `itens[]` e, ao lado, as chaves `"<arquivo>":
         * {…}` que o `procedencia-declarar.mjs` grava). Trocar `j` pelo mapa derivado da lista
         * apagava as chaves originais — e como as duas entradas do mesmo arquivo não são idênticas,
         * a troca mudava o veredito sem que ninguém pedisse. O mapa original vence; a lista só
         * preenche o que falta.
         */
        j = Array.isArray(j) ? m : { ...m, ...j };
      }
      if (envelope?.entradas && typeof envelope.entradas === "object" && !Array.isArray(envelope.entradas)) {
        j = { ...envelope.entradas, ...j };
      }
      cacheProc.set(f, j);
    }
    const j = cacheProc.get(f);
    if (j && typeof j === "object") {
      const e = j[arq.nome] ?? j[arq.rel];
      /**
       * `_fonte_comum` — a fonte declarada UMA vez para a pasta inteira, herdada pela entrada de
       * cada arquivo. Nasce quando os N arquivos saem da MESMA obra: os 5 fotogramas do filme da
       * NSF na `s105-projeto-mohole` repetiriam a mesma url/licença/atribuição cinco vezes, e o
       * agente de pesquisa (com razão) escreveu uma vez só, deixando em cada arquivo o que de fato
       * varia — o timecode, o que se vê, por que está ali.
       *
       * ⚠️ Até 09/ago/2026 este gate só olhava `entrada.fonte` e reprovava as cinco por "SEM
       * PROVA", com a procedência inteira escrita dois campos acima. O risco não é o falso
       * positivo: é o que ele ENSINA. O laudo manda "o agente de pesquisa ainda tem a URL na mão",
       * e recaçar por isso queima cota diária de Shutterstock para substituir arquivo que já estava
       * certo. Punir quem declarou bem ensina que caprichar não adianta — a mesma calibração que o
       * `qc-portabilidade` já faz com uso guardado.
       *
       * A herança é da PASTA, não global: só vale para o `_PROCEDENCIA.json` onde o arquivo está.
       */
      if (e && typeof e === "object") {
        const comum = j._fonte_comum;
        if (comum && typeof comum === "object" && !(typeof e.fonte === "string" && e.fonte.trim())) {
          return { entrada: achatar({ ...comum, ...e, fonte: comum.fonte ?? comum.obra ?? comum.produtor }), arquivo: f };
        }
        return { entrada: achatar(e), arquivo: f };
      }
    }
    if (d === raizMedia || d === dirname(d)) break;
    d = dirname(d);
  }
  return null;
}

/**
 * ── PROVA 2 · `manifest.jsonl` do stock-hub ─────────────────────────────────────────────────────
 * `scripts/stock/baixar.mjs` grava `~/Downloads/stock-hub/<PLATAFORMA>/` e registra plataforma+URL.
 * Só casa com o arquivo que chegou ao `_media` SEM renomear — mas quando casa, é prova de origem
 * com URL do item. (Na VM o stock-hub não existe: ausência aqui não é veredito, é só uma prova a
 * menos, porque a caça de stock pago roda no Mac.)
 */
/**
 * [porte Regie] Na Régie não há stock-hub: o buscar-midia do motor e o api-oficial.mjs do canal
 * gravam o manifest.jsonl AO LADO do download, em out/<proj>/_media/_caca/<cena>/<plataforma>/.
 * Lê todos esses (por projeto). A chave é o NOME do arquivo (a linha do motor grava o caminho
 * relativo; vale o basename).
 */
function carregarManifesto(proj) {
  const m = new Map();
  const arquivos = [];
  const caca = join(RAIZ, "out", proj, "_media", "_caca");
  const desce = (d, nivel = 0) => {
    if (nivel > 4) return;
    let es; try { es = readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of es) {
      if (e.isDirectory()) desce(join(d, e.name), nivel + 1);
      else if (e.name === "manifest.jsonl") arquivos.push(join(d, e.name));
    }
  };
  desce(caca);
  // [porte Regie] o STOCK_HUB (hub em ~/Downloads do Mac do Top10) saiu: prova de fora do projeto não
  // é prova de nada que o canal possa reconferir.
  for (const f of arquivos) {
    if (!existsSync(f)) continue;
    for (const l of readFileSync(f, "utf8").split(/\r?\n/)) {
      if (!l.trim()) continue;
      try { const j = JSON.parse(l); if (j?.arquivo) m.set(basename(String(j.arquivo).replace(/\\/g, "/")), j); } catch { }
    }
  }
  return { mapa: m, arquivos: arquivos.filter((f) => existsSync(f)) };
}

/**
 * ── AGÊNCIA DE NOTÍCIAS BAIXADA FORA DA ASSINATURA ─────────────────────────────────────────────
 *
 * Nomes de agência que a lista `ASSINADAS` reconhece — mas reconhecer o NOME não é o mesmo que
 * provar a PROCEDÊNCIA, e essa confusão custou caro.
 *
 * Medido no `ceuta-travessia-em-massa` (11/ago/2026): 16 arquivos declaravam, com todas as letras,
 * `"fonte": "Reuters — canal oficial no YouTube (arquivo de agência)"` e
 * `"licenca": "USO EDITORIAL … não há assinatura que cubra este material"`. O gate leu "reuters",
 * casou com `ASSINADAS`, e carimbou **PROVADA**. O laudo saiu `221 itens · 97 PROVADA · 0 PROIBIDA
 * · ✓ PASS` — sobre um projeto onde 43 dos 70 footages vieram de canais públicos de 12 veículos.
 *
 * *O gate confundia RASTREABILIDADE com LEGITIMIDADE: saber de onde veio não é o mesmo que poder
 * usar.* E o pior é que ele aceitava **por omissão** — ninguém tinha decidido nada; o material
 * passava porque a palavra "Reuters" estava na string.
 *
 * A decisão do Mateus (11/ago) foi **caso a caso**, e é o que este código encarna: material de
 * agência fora da assinatura não é proibido nem liberado — ele exige que alguém ASSINE embaixo,
 * pelo mecanismo de `excecao_autorizada` que já existe (nome, data e motivo, por arquivo).
 * Enquanto ninguém assina, ele aparece como pendência com nome próprio em vez de virar PASS mudo.
 */
const AGENCIAS = /\breuters\b|\bassociated press\b|\bap\b(?!\w)|\bafp\b|\befe\b|\beuropa press\b|\bgetty\b|\bap ?tn\b|\bstoryful\b/i;

/**
 * O que denuncia que o material NÃO veio pela assinatura: a própria declaração diz de onde veio.
 * É o oposto de heurística — o agente de pesquisa desta casa escreve a origem por extenso, e a
 * [PESQ-74] fez isso virar campo obrigatório. Aqui só se lê o que ele já escreveu.
 */
const FORA_DA_ASSINATURA = /youtube|canal oficial|canal p[úu]blico|dailymotion|vimeo|twitter|\bX\.com\b|instagram|facebook|telegram|arquivo de ag[êe]ncia|sem assinatura|n[ãa]o h[áa] assinatura|uso editorial/i;

/** Classifica uma fonte DECLARADA (string livre escrita pelo agente de pesquisa). */
function classificarFonte(txt) {
  if (!txt) return null;
  // ⚠️ A MESMA régua do bloco de proibição, chamada — nunca reescrita. Duas cópias do mesmo teste
  // divergem, e aí o mesmo defeito passa por uma pelo furo que a outra não tem.
  if (evidenciaDeUsoProibido([["fonte", txt]])) return "PROIBIDA";
  // ⚠️ ANTES do teste de `ASSINADAS`, e a ordem É a regra: se a própria declaração diz que veio de
  // fora da assinatura, o nome da agência não a redime.
  // [porte Regie] Nenhum canal da Régie tem assinatura de agência: a menção à agência BASTA para pedir
  // a decisão escrita (o FORA_DA_ASSINATURA fica como documentação do caso do estúdio).
  if (AGENCIAS.test(txt)) return "EDITORIAL_SEM_LICENCA";
  if (ASSINADAS.test(txt)) return "assinada";
  if (ATRIBUICAO.test(txt)) return "atribuição";
  if (LICENCA_ABERTA.test(txt)) return "licença aberta";
  if (CITAVEIS.test(txt)) return "citável";
  return "declarada";
}

/**
 * ── EXCEÇÃO AUTORIZADA À PROIBIÇÃO ──────────────────────────────────────────────────────────────
 * A proibição de acervo é regra de IDENTIDADE, e continua sendo o padrão. Mas o dono pode abrir
 * exceção para um arquivo específico — e quando abre, o gate precisa PARAR de acusar aquele
 * arquivo. Um gate que grita o que o dono já autorizou é alarme falso, e alarme falso ensina a
 * ignorar o gate: da próxima vez que ele acertar, ninguém olha.
 *
 * O caso que criou isto (10/ago/2026): dois footages de box/pitlane de F1 no `senna` vieram do
 * Pexels. Mateus, ao ser informado: *"mantenha os dois do Pexels, pois a F1 realmente é difícil
 * de conseguir imagens"* — escassez real de nicho em acervo assinado, medida na prática.
 *
 * As travas, porque exceção mal desenhada é como gate cego nasce:
 *   · mora no `_PROCEDENCIA.json` do PRÓPRIO arquivo, junto da fonte — quem lê a origem vê a
 *     exceção. Não existe lista central, e o script não traz nenhum nome cravado no código.
 *   · exige os TRÊS campos (`por`, `em`, `motivo`). Exceção sem autor, sem data ou sem razão é
 *     ignorada e o arquivo volta a reprovar — é assim que ela não vira carimbo automático.
 *   · é por ARQUIVO, nunca por padrão/pasta/acervo. Liberar "Pexels" abriria a porta inteira;
 *     liberar dois clipes de F1 libera dois clipes de F1.
 *   · **aparece SEMPRE no laudo**, contada em coluna própria. Exceção silenciosa é indistinguível
 *     de furo, e some da vista justamente de quem precisaria revisá-la depois.
 */
function excecaoAutorizada(dec) {
  const e = dec?.entrada?.excecao_autorizada;
  if (!e || typeof e !== "object") return null;
  const por = String(e.por || "").trim();
  const em = String(e.em || "").trim();
  const motivo = String(e.motivo || "").trim();
  if (!por || !em || !motivo) return null;            // incompleta não vale — reprova de novo
  return { por, em, motivo };
}

/** Isenta de CARIMBO? (nunca isenta da proibição) — devolve o motivo, ou null. */
function isencao(rel, nome) {
  for (const [re, motivo] of ISENTAS_POR_PASTA) if (re.test(rel)) return motivo;
  for (const [re, motivo] of ISENTAS_POR_NOME) if (re.test(nome)) return motivo;
  if (AGENCIA_PUBLICA.test(nome)) return "agência pública/instituição no nome (domínio público)";
  return null;
}

/**
 * ── A VARREDURA DAS CENAS ───────────────────────────────────────────────────────────────────────
 * O que o gate antigo não fazia, e o que teria pego `especies-humanas`: ler os HTMLs e extrair toda
 * referência a `_media`. Aqui a ausência do arquivo no disco **não absolve** — a cena que vai ao ar
 * continua carregando o nome proibido, e é isso que o espectador vê.
 */
// A extração mora em lib/referencias-midia.mjs: mesmo resultado da regex antiga, sem o custo
// quadrático que fazia cena de mapa estourar os 15 min do handoff (medido em 11/set/2026).
function referenciasEmCena(proj, cenasAlvo = null) {
  const refs = new Map();   // relativo a _media → Set(cenas)
  const encontradas = new Set();
  for (const r of raizes()) {
    const projDir = join(r, proj);
    if (!existsSync(projDir)) continue;
    let dirs; try { dirs = readdirSync(projDir, { withFileTypes: true }); } catch { continue; }
    for (const d of dirs) {
      if (!d.isDirectory() || !/^graphics/.test(d.name)) continue;
      const g = join(projDir, d.name);
      let fs2; try { fs2 = readdirSync(g); } catch { continue; }
      for (const f of fs2.filter((f) => f.endsWith(".html"))) {
        const id = f.slice(0, -".html".length);
        if (cenasAlvo && !cenasAlvo.has(id)) continue;
        let txt; try { txt = readFileSync(join(g, f), "utf8"); } catch { continue; }
        encontradas.add(id);
        for (const m of referenciasDeMidiaNoTexto(txt)) {
          const rel = m.slice(m.indexOf("_media/") + "_media/".length);
          if (!refs.has(rel)) refs.set(rel, new Set());
          refs.get(rel).add(`${d.name}/${f}`);
        }
      }
    }
  }
  return { refs, encontradas };
}

// ────────────────────────────────────────────────────────────────────────────────────────────────

const laudos = [];
let manifestosLidos = 0;   // [porte Regie] quantos manifest.jsonl da caça entraram como prova 2
for (const proj of projetos()) {
  const MANIFESTO = carregarManifesto(proj);   // [porte Regie] por projeto (ver carregarManifesto)
  manifestosLidos += MANIFESTO.arquivos.length;
  const refsCena = referenciasEmCena(proj, CENAS_ALVO);
  const refs = refsCena.refs;
  if (CENAS_ALVO) {
    const ausentes = [...CENAS_ALVO].filter((id) => !refsCena.encontradas.has(id));
    if (ausentes.length) {
      console.error(`⛔ ${proj}: --cenas contém HTML(s) inexistente(s): ${ausentes.join(", ")}`);
      process.exit(2);
    }
  }
  const todasMidias = midias(proj);
  // No modo parcial, o HTML selecionado é a autoridade do que pode chegar ao frame. Arquivo de
  // outra cena — mesmo na mesma pasta — não entra no laudo deste lote. O modo completo permanece
  // idêntico e continua auditando também arquivos órfãos do projeto.
  const arqs = CENAS_ALVO ? todasMidias.filter((a) => refs.has(a.rel)) : todasMidias;
  if (!arqs.length && !refs.size && !CENAS_ALVO) continue;

  const raizesMedia = raizes().map((r) => join(r, proj, "_media"));
  const proibidos = [];      // {arquivo, motivo, cenas[]}
  const excecoes = [];       // {arquivo, por, em, motivo, cenas[]} — proibido que o dono liberou
  const semProva = [];       // {arquivo, categoria}
  const provados = [];       // {arquivo, via, classe}
  const isentos = [];        // {arquivo, motivo}
  const fracos = [];         // provado, mas sem URL/ID que permita reconferir
  const editoriais = [];     // {arquivo, cenas, fonte} — agência baixada FORA da assinatura,
                             // sem exceção declarada. Nem proibido nem provado: pendente de decisão.
  const pastasFaltando = new Set();
  const rascunhos = [];      // {arquivo} — candidato de caça NÃO promovido; não é acervo

  const noDisco = new Set(arqs.map((a) => a.rel));

  for (const a of arqs) {
    const raizM = raizesMedia.find((r) => a.abs.startsWith(r + sep)) || raizesMedia[0];
    const cenas = [...(refs.get(a.rel) || [])];

    /**
     * 0 · RASCUNHO DE CAÇA — nem provado, nem sem prova: NÃO É ACERVO.
     *
     * `_media/_caca/<hash>/` e `_media/_caca-<cena>/` guardam o caderno da pesquisa: grades de
     * busca em PNG com marca d'água, `.log`, `.mjs` de sonda, PDFs brutos e os candidatos que a
     * caça REJEITOU. Nada disso é peça, e nada disso tem procedência a declarar — porque a
     * adoção, que é o ato que promove para `_media/<tipo>/<cena>/`, é a mesma que escreve o
     * `_PROCEDENCIA.json`. Contá-los como "SEM PROVA" reprovava o projeto por causa do rascunho.
     *
     * Medido em 11/set/2026 no `petroleo-foz-do-amazonas`: **32 arquivos em 9 pastas, todas de
     * caça**, e o gate imprimia `✗ REPROVADO — 32 arquivo(s) de acervo SEM procedência declarada`
     * enquanto o handoff seguia com `erros: []` (o `medirProcedencia` é escopado pela partição).
     * Alarme falso em gate duro ensina a ignorar o gate — e este passou a manhã inteira ligado.
     *
     * ⚠️ **MAS NÃO SOME: é CONTADO E DITO.** A objeção que segurou este conserto na onda 2 era
     * boa — "e se um arquivo estiver em `_caca` E for citado por um HTML de cena?". Por isso a
     * régua aqui não é "pular na varredura": é classificar à parte e IMPRIMIR o número. Arquivo
     * de rascunho CITADO por cena continua aparecendo como referência de cena pelo caminho
     * normal (`refs`), e quem lê o laudo vê quantos rascunhos existem em vez de vê-los sumir.
     * *Medição que motivou a régua: dos 138 HTMLs do projeto, 1 menciona `_caca` — e num
     * COMENTÁRIO, não num `src`.*
     */
    if (ehCaminhoDeRascunhoDeCaca(a.rel)) { rascunhos.push({ arquivo: a.rel }); continue; }

    // 1 · PROIBIÇÃO — vale para TODO arquivo, isento inclusive.
    const dec = procedenciaDeclarada(a, raizM);
    // O nome do arquivo é identificador puro: o caçador carimba a origem nele. A declaração passa
    // pela régua que separa USO de MENÇÃO ([SIS-456]) — ver `evidenciaDeUsoProibido`.
    const evidencia = PROIBIDAS.test(a.rel)
      ? { via: "nome do arquivo", trecho: basename(a.rel) }
      : dec && evidenciaDeUsoProibido([
        ["fonte", dec.entrada.fonte], ["url", dec.entrada.url], ["licenca", textoDaLicenca(dec.entrada.licenca)],
      ]);
    if (evidencia) {
      // [porte Regie] Reuters não tem exceção: o contrato é do Top10, não do dono do canal.
      const semExcecao = SEM_EXCECAO.test(evidencia.trecho || "") || SEM_EXCECAO.test(a.rel);
      const exc = semExcecao ? null : excecaoAutorizada(dec);
      if (exc) { excecoes.push({ arquivo: a.rel, ...exc, cenas }); continue; }
      proibidos.push({
        arquivo: a.rel,
        // O motivo NOMEIA o campo e cita o trecho: quem lê o laudo sabe o que releu o gate, e uma
        // acusação errada pode ser contestada pelo texto dela mesma em vez de por releitura cega.
        motivo: evidencia.via === "nome do arquivo" ? "nome do arquivo" : `fonte declarada · ${evidencia.via} → "${evidencia.trecho}"`,
        cenas,
      });
      continue;
    }
    // [porte Regie] 1b · LICENÇA NC/ND — vale para TODO arquivo declarado, isento inclusive, e exceção
    // nenhuma a libera (ver julgarLicencaCC). A do manifest conta também: é a licença medida na fonte.
    const licDeclarada = julgarLicencaCC(dec?.entrada.licenca) || julgarLicencaCC(MANIFESTO.mapa.get(a.nome)?.licenca);
    if (licDeclarada?.proibida) {
      proibidos.push({ arquivo: a.rel, motivo: `licença "${licDeclarada.proibida}" — NC/ND não serve a canal monetizado (NC: uso comercial; ND: a cena é obra derivada)`, cenas });
      continue;
    }

    // Retirar uma declaração de não uso não pode transformá-la em prova de origem.
    // Uma URL HTTP(S) já examinada acima ainda pode fornecer origem positiva.
    const fonteSemNaoUso = semDeclaracoesDeNaoUso(dec?.entrada.fonte);
    let fontePositiva = fonteSemNaoUso.fonte;
    if (fonteSemNaoUso.removeu && !fontePositiva && typeof dec?.entrada.url === "string") {
      try {
        const origem = new URL(dec.entrada.url);
        if (["http:", "https:"].includes(origem.protocol) && origem.hostname) fontePositiva = origem.hostname;
      } catch { /* URL inválida não oferece uma segunda prova. */ }
    }
    const fonteParaPlaceholder = fontePositiva.replace(/^(?:origem|fonte)\s*[:—-]?\s+/i, "");
    const licencaPendente = partesDaLicenca(dec?.entrada.licenca)
      .some((v) => PLACEHOLDER.test(v.trim()) || LICENCA_PENDENTE.test(v.trim()));
    if (dec && fonteSemNaoUso.removeu && (!fontePositiva || PLACEHOLDER.test(fonteParaPlaceholder)
      || licencaPendente)) {
      semProva.push({ arquivo: a.rel, cenas: cenas.length, referencias: cenas, motivo: "não uso de acervo vetado não resolve origem ausente ou licença declarada pendente" });
      pastasFaltando.add(dirname(a.rel) === "." ? "(raiz de _media)" : dirname(a.rel));
      continue;
    }

    // 2 · ISENÇÃO DE CARIMBO — não suprime pendência expressa no caminho de dispensa acima.
    const isento = isencao(a.rel, a.nome);
    if (isento) { isentos.push({ arquivo: a.rel, motivo: isento }); continue; }

    // 3 · PROVA POSITIVA
    //
    // ⚠️ O teste era só `typeof string && length >= 3` — e "[object Object]" tem 15 caracteres, então
    // um objeto achatado errado pela transcrição passava como PROVA. É o pior falso-PASS possível:
    // o campo que o gate existe para proteger é justamente o que virá a ser o crédito na tela, e o
    // arquivo saía da lista de pendências sem que ninguém soubesse mais de onde a mídia veio.
    // Medido em 11/ago (quasares-primordiais): 6 arquivos "provados" com o provedor apagado.
    if (dec && PLACEHOLDER.test(String(dec.entrada.fonte ?? "").trim())) {
      semProva.push({ arquivo: a.rel, cenas: cenas.length, referencias: cenas, motivo: `fonte declarada é placeholder ("${String(dec.entrada.fonte).trim().slice(0, 24)}") — o provedor se perdeu na transcrição; re-rode procedencia-reconciliar.mjs --escrever` });   // [porte Regie] o declarar não veio
      pastasFaltando.add(dirname(a.rel) === "." ? "(raiz de _media)" : dirname(a.rel));
      continue;
    }
    // [porte Regie] "a_confirmar" é o que o motor grava quando a linha do download não trouxe a licença
    // MEDIDA na fonte (src/midia/procedencia.mjs, itemDeProcedencia): declaração de que ninguém provou a
    // licença. Deixá-la cair em "declarada" transformaria a confissão em prova.
    if (dec && partesDaLicenca(dec.entrada.licenca).some((v) => /^a[_ ]confirmar$/i.test(v.trim()))) {
      semProva.push({ arquivo: a.rel, cenas: cenas.length, referencias: cenas, motivo: "licença a_confirmar — o download não trouxe licença medida na fonte; rebaixe pelo buscar-midia do motor, ou prove a licença" });
      pastasFaltando.add(dirname(a.rel) === "." ? "(raiz de _media)" : dirname(a.rel));
      continue;
    }
    if (licDeclarada?.semProva) {
      semProva.push({ arquivo: a.rel, cenas: cenas.length, referencias: cenas, motivo: `licença Creative Commons "${licDeclarada.semProva}" fora da trava do motor (aceitas: CC0, domínio público, CC BY e CC BY-SA) — confira a licença na página do item` });
      pastasFaltando.add(dirname(a.rel) === "." ? "(raiz de _media)" : dirname(a.rel));
      continue;
    }
    if (dec && typeof dec.entrada.fonte === "string" && fontePositiva.length >= 3) {
      const classe = classificarFonte(fontePositiva) || "declarada";
      // [porte Regie] [I4] "assinada" só com a URL do item NO DOMÍNIO da plataforma citada. Sem isso a
      // palavra "Envato" na fonte (e a receita que este gate imprimia) fabricava licença.
      if (classe === "assinada") {
        const motivo = motivoAssinadaSemUrlDaPlataforma(plataformaAssinadaDoTexto(fontePositiva), dec.entrada.url);
        if (motivo) {
          semProva.push({ arquivo: a.rel, cenas: cenas.length, referencias: cenas, motivo });
          pastasFaltando.add(dirname(a.rel) === "." ? "(raiz de _media)" : dirname(a.rel));
          continue;
        }
      }
      const temRastro = Boolean(dec.entrada.url) || Object.keys(dec.entrada).some((k) => /^id/i.test(k));

      // ── AGÊNCIA FORA DA ASSINATURA: PEDE ASSINATURA DE ALGUÉM, NÃO PASSA POR OMISSÃO ──────────
      // A régua do Mateus é CASO A CASO (11/ago/2026), e caso a caso significa que existe um caso
      // e alguém decidiu sobre ele. Sem exceção declarada, isto não é "provado" — é pendente com
      // nome próprio. *O estado que não pode existir é o silencioso: passar porque ninguém
      // perguntou.* O mecanismo já existe e é o mesmo da F1: `excecao_autorizada` no
      // `_PROCEDENCIA.json` do próprio arquivo, com `por`, `em` e `motivo`.
      // ⚠️ A exceção se consulta AQUI. O `exc` da proibição vive dentro daquele `if` e não
      // alcança este ponto — `node --check` passa (é escopo, não sintaxe) e o gate morre em
      // execução, na VM. *Conferir sintaxe não prova que roda.*
      if (classe === "EDITORIAL_SEM_LICENCA" && !excecaoAutorizada(dec)) {
        editoriais.push({
          arquivo: a.rel, cenas: cenas.length, referencias: cenas,
          fonte: String(dec.entrada.fonte).trim().slice(0, 96),
        });
        continue;
      }

      provados.push({ arquivo: a.rel, via: "_PROCEDENCIA.json", classe });
      if (!temRastro) fracos.push({ arquivo: a.rel, motivo: "declarada sem URL nem ID — não dá para reconferir" });
      continue;
    }
    const nom = MANIFESTO.mapa.get(a.nome);
    // [porte Regie] o manifest da caça dentro do projeto (ver carregarManifesto). Linha que diz acervo
    // assinado precisa da URL do domínio dele, como a declaração.
    if (nom) {
      const motivo = motivoAssinadaSemUrlDaPlataforma(plataformaAssinadaDoTexto(nom.plataforma), nom.url);
      if (!motivo) { provados.push({ arquivo: a.rel, via: "manifest.jsonl da caça", classe: nom.plataforma || "assinada" }); continue; }
      semProva.push({ arquivo: a.rel, cenas: cenas.length, referencias: cenas, motivo: `manifest.jsonl ${motivo}` });
      pastasFaltando.add(dirname(a.rel) === "." ? "(raiz de _media)" : dirname(a.rel));
      continue;
    }
    // [porte Regie] [I4] NOME NÃO É PROVA. No estúdio o nome de acervo assinado se apoiava nas quatro
    // assinaturas do Top10; num canal da Régie não há esse apoio, e `shutterstock_<id>.jpg` é também o
    // nome da prévia COM marca d'água que qualquer um baixa de graça. O nome vira PISTA dita no laudo.
    if (ASSINADAS.test(a.nome)) {
      semProva.push({ arquivo: a.rel, cenas: cenas.length, referencias: cenas, motivo: "nome de acervo pago sem _PROCEDENCIA.json nem manifest.jsonl — o nome do arquivo não prova licença (pode ser a prévia com marca d'água)" });
      pastasFaltando.add(dirname(a.rel) === "." ? "(raiz de _media)" : dirname(a.rel));
      continue;
    }

    // 4 · SEM PROVA — é mídia de acervo e ninguém declarou de onde veio.
    semProva.push({ arquivo: a.rel, cenas: cenas.length, referencias: cenas });
    pastasFaltando.add(dirname(a.rel) === "." ? "(raiz de _media)" : dirname(a.rel));
  }

  // 5 · REFERÊNCIAS EM CENA cujo arquivo já saiu do disco. Proibido continua proibido; o resto é
  //     limpeza pós-entrega normal e NÃO vira alarme.
  const orfas = [];
  for (const [rel, cenasSet] of refs) {
    if (noDisco.has(rel)) continue;
    if (PROIBIDAS.test(rel)) proibidos.push({ arquivo: rel, motivo: "referência VIVA em cena (arquivo já saiu do disco)", cenas: [...cenasSet] });
    else orfas.push({ arquivo: rel, cenas: cenasSet.size });
  }

  /* 6 · A CONFISSÃO DO PRÓPRIO AGENTE DE PESQUISA (08/ago/2026) — a quarta via, e a que faltava.
   *
   * As cinco checagens acima olham o ARTEFATO: nome do arquivo, `fonte` declarada no
   * `_PROCEDENCIA.json`, referência viva em cena. Todas falham juntas no mesmo caso, e ele não é
   * raro: **o agente renomeia o arquivo para um nome descritivo e não escreve `_PROCEDENCIA.json`**.
   * Aí `s01-tundra-siberiana-plano-aberto.mp4` não denuncia nada, e a mídia proibida cai no balde
   * "SEM PROVA" — que este gate trata, com razão, como *falta declaração*, não como *fonte vetada*.
   * O ponto cego: contaminação sem declaração fica MAIS escondida do que contaminação declarada.
   *
   * **Medido no `mamute-de-volta`:** este gate deu `0 PROIBIDA` e 120 "sem prova", e eu disparei 81
   * renders em cima disso. O `_pesquisa/footage.json` do mesmo projeto dizia, em `fontes_usadas`:
   * `Pexels = 26 clipes · Pixabay = 4`. A prova estava a um arquivo de distância, escrita pelo
   * próprio agente que baixou — com a justificativa registrada ("as 4 assinaturas estavam
   * DESLOGADAS; caí para fontes livres"), que é justamente o que a marca proíbe fazer.
   *
   * Ler `fontes_usadas` custa um `readFileSync` por projeto e fecha o buraco pela ponta mais
   * confiável que existe: a declaração de quem fez o download.
   *
   * ⚠️ Só `fontes_usadas` conta. `descartados_por_visao` e `leque_de_buscas` também citam Pexels —
   * como opção REJEITADA. Varredura por texto solto acusou 8 projetos; pela régua certa, um. */
  try {
    const dirP = raizes().map((r) => join(r, proj, "_pesquisa")).find((d) => existsSync(d));
    if (dirP) {
      for (const f of readdirSync(dirP).filter((x) => x.endsWith(".json"))) {
        let j; try { j = lerJson(join(dirP, f)); } catch { continue; }   // [porte Regie] BOM
        const usadas = j.fontes_usadas || j.fontes || [];
        if (!Array.isArray(usadas)) continue;
        for (const u of usadas) {
          const nome = String(u?.nome || u?.fonte || "");
          if (!PROIBIDAS.test(nome)) continue;
          const n = u?.clipes ?? u?.itens ?? "?";
          proibidos.push({ arquivo: `_pesquisa/${f} → ${nome} (${n} item(ns))`,
            motivo: `DECLARADO pelo agente em fontes_usadas — a mídia está no projeto com nome renomeado`, cenas: [] });
        }
      }
    }
  } catch {}

  const emCena = proibidos.filter((p) => p.cenas?.length).reduce((n, p) => n + p.cenas.length, 0);
  laudos.push({
    proj,
    ...(CENAS_ALVO ? { escopoCenas: [...CENAS_ALVO] } : {}),
    /**
     * ⚠️ `total` = ITENS CONFERIDOS (arquivo no disco **+** referência de cena sem arquivo), não
     * "arquivos no disco". A distinção decide um caso real: `entregar.mjs:417` recusa a entrega com
     * *"o gate não viu mídia nenhuma — está rodando na máquina errada"* quando `total === 0`. Medido
     * em 05/ago, o `ia-fisica` tem `_media` VAZIA e **3 `pexels*.jpg` vivos nas cenas**: com `total`
     * contando só o disco, aquela mensagem enganosa dispararia PRIMEIRO e esconderia a proibição que
     * o gate acabou de achar. Denominador zero tem de significar "não olhei nada", não "olhei só o
     * disco, e o disco foi limpo".
     */
    total: arqs.length + orfas.length + proibidos.filter((p) => !noDisco.has(p.arquivo)).length,
    totalDisco: arqs.length,
    sujos: proibidos.length,                 // ⚠️ contrato consumido por entregar.mjs:402 — não renomear
    assinados: provados.length,
    emCena,
    lista: proibidos.map((p) => p.arquivo),
    cenas: proibidos.flatMap((p) => (p.cenas || []).map((c) => ({ cena: c, arquivo: basename(p.arquivo) }))),
    // ── campos novos (prova positiva) ──
    semProva: semProva.length,
    listaSemProva: semProva.map((s) => s.arquivo),
    detalheSemProva: semProva.map((s) => ({
      arquivo: s.arquivo,
      cenas: s.referencias || [],
      ...(s.motivo ? { motivo: s.motivo } : {}),
    })),
    excecoes: excecoes.length,
    detalheExcecoes: excecoes,
    // Agência baixada FORA da assinatura, sem ninguém ter assinado embaixo. Campo próprio porque
    // somar isto a `semProva` diria "não sabemos de onde veio" — e sabemos exatamente: está
    // escrito na declaração. O que falta não é rastro, é DECISÃO.
    editoriais: editoriais.length,
    detalheEditoriais: editoriais,
    pastasSemProcedencia: [...pastasFaltando].sort(),
    // Rascunho de caça: contado à parte e DITO no rodapé. Não reprova, não some.
    rascunhos: rascunhos.length,
    listaRascunhos: rascunhos.map((r) => r.arquivo),
    isentos: isentos.length,
    provados: provados.map((p) => ({ ...p })),
    fracos,
    refsOrfas: orfas.length,
    detalheProibidos: proibidos,
  });
}

const totalSujo = laudos.reduce((n, l) => n + l.sujos, 0);
const totalSemProva = laudos.reduce((n, l) => n + l.semProva, 0);

/**
 * Ausência de resultado NÃO é aprovação. Pedir um projeto específico e não achar NADA (slug errado,
 * máquina errada, `_media` e `graphics` vazios) é falha a investigar — o gate anterior devolvia
 * `✓ PASS` para um slug inexistente, que é o mesmo defeito de denominador zero que ele foi escrito
 * para pegar.
 */
const nadaParaOlhar = Boolean(alvo) && !TODOS && !laudos.length;

/**
 * ⚠️ O MESMO DENOMINADOR ZERO, DISFARÇADO — e a guarda acima não o pegava.
 *
 * `nadaParaOlhar` exige laudo NENHUM. Basta UM arquivo isento para ela desarmar, e aí o gate
 * imprime `✓ PASS` tendo auditado zero mídia de acervo. Isso não é hipótese: medido em
 * 10/ago/2026 no `ceuta-travessia-em-massa`, rodando no Mac depois de `baixar-entrega.mjs` —
 * **1 item, 1 isento, 0 cenas, `✓ PASS`**, num projeto cujo bucket guarda **70 footages**, dos
 * quais 43 vieram do YouTube. O único arquivo local era o `_master-decupado.mp4`, isento por
 * nome, e ele sozinho bastou para o gate dizer que estava tudo provado.
 *
 * O defeito é sistemático, não deste projeto: TODA máquina que baixa só a entrega para editar
 * fica exatamente nesse estado, e é justamente aí que alguém pergunta "a mídia está limpa?".
 *
 * Auditável = o que não é isento, mais o que as cenas referenciam. Se os dois são zero, o gate
 * não tem opinião — e não ter opinião se diz em voz alta, nunca como aprovação.
 */
/**
 * ⚠️ E A GUARDA ESCAPAVA PELO `--todos` (11/ago/2026). O `!TODOS` acima excluía do teste
 * exatamente o modo que a auditoria usa. Medido no Mac: três projetos com **1 item isento cada**
 * — `ceuta`, `orcas-nao-matam`, `quao-fundo-terra` — e o gate imprimindo
 * `✓ PASS — toda a mídia de acervo tem procedência PROVADA`. Zero arquivos auditados nos três.
 *
 * *A lei [SIS-284] foi escrita para matar esse PASS e continuava passando pela outra porta.* No
 * modo projeto ela protegia; no modo varredura, que é o que se roda para responder "está tudo
 * limpo?", ela estava desligada.
 *
 * O `--todos` julga PROJETO A PROJETO: um projeto sem nada auditável não contamina o veredito dos
 * outros, mas aparece nomeado. Assim a varredura continua útil quando 15 projetos estão bem e 1
 * está descarregado — e deixa de mentir sobre esse 1.
 */
const semNadaAuditavelLista = laudos.filter((l) => (l.total - l.isentos) <= 0 && !l.emCena);
const semNadaAuditavel = !CENAS_ALVO && laudos.length > 0 &&
  (TODOS ? semNadaAuditavelLista.length > 0 : Boolean(alvo) && semNadaAuditavelLista.length === laudos.length);

const totalEditorial = laudos.reduce((a, l) => a + (l.editoriais || 0), 0);

/**
 * ⚠️ MATERIAL DE AGÊNCIA SEM LICENÇA **REPROVA**, e a razão de ser um estado próprio é esta:
 * antes ele passava por OMISSÃO. O gate lia "reuters" na fonte, casava com a lista de assinados, e
 * carimbava PROVADA um clipe cuja própria declaração dizia "canal oficial no YouTube · não há
 * assinatura que cubra este material". Ninguém tinha decidido nada — o material entrava porque a
 * palavra estava na string.
 *
 * A régua do Mateus é CASO A CASO (11/ago/2026), e caso a caso exige que exista um caso e que
 * alguém decida sobre ele. Reprovar aqui não proíbe o uso: obriga a decisão a ficar ESCRITA, com
 * nome e data, no `excecao_autorizada` do próprio arquivo — o mesmo mecanismo que liberou os dois
 * footages de F1 do `senna`. *O estado que não pode existir é o silencioso.*
 */
const reprova = totalSujo > 0 || totalSemProva > 0 || totalEditorial > 0 || nadaParaOlhar || semNadaAuditavel;

if (JSON_OUT) { console.log(JSON.stringify(laudos, null, 1)); process.exit(reprova ? 1 : 0); }

console.log(`\n══ PROCEDÊNCIA DA MÍDIA · ${laudos.length} projeto(s) ══\n`);
console.log(`  ${"PROJETO".padEnd(26)}${"itens".padStart(6)}${"PROVADA".padStart(9)}${"isenta".padStart(8)}${"S/PROVA".padStart(9)}${"PROIBIDA".padStart(10)}${"exceç".padStart(7)}${"em cena".padStart(9)}`);
for (const l of laudos.sort((a, b) => (b.sujos - a.sujos) || (b.semProva - a.semProva))) {
  const marca = l.sujos ? (l.emCena ? "⛔" : "▲") : (l.semProva ? "? " : "  ");
  console.log(`${marca} ${l.proj.padEnd(26)}${String(l.total).padStart(4)}${String(l.assinados).padStart(9)}${String(l.isentos).padStart(8)}${String(l.semProva).padStart(9)}${String(l.sujos).padStart(10)}${String(l.excecoes || 0).padStart(7)}${String(l.emCena).padStart(9)}`);
}
console.log();

/**
 * As exceções aparecem SEMPRE, e com nome, autor e data. Exceção que não se vê é a semente do
 * gate cego: passa a valer para sempre, ninguém lembra quem abriu, e o motivo — que um dia deixa
 * de ser verdade — não está escrito em lugar nenhum para poder ser revogado.
 */
for (const l of laudos.filter((x) => x.excecoes)) {
  console.log(`  ✎ ${l.proj} — ${l.excecoes} arquivo(s) de acervo proibido com EXCEÇÃO AUTORIZADA:`);
  for (const e of l.detalheExcecoes.slice(0, 10)) {
    console.log(`       ${basename(e.arquivo)}`);
    console.log(`           ↳ ${e.por}, ${e.em} — ${e.motivo}`);
  }
  if (l.detalheExcecoes.length > 10) console.log(`       … e mais ${l.detalheExcecoes.length - 10}`);
  console.log();
}

for (const l of laudos.filter((x) => x.sujos)) {
  console.log(`  ⛔ ${l.proj} — ${l.sujos} arquivo(s) de acervo PROIBIDO:`);
  for (const p of l.detalheProibidos.slice(0, 10)) {
    console.log(`       ${basename(p.arquivo)}  (${p.motivo})`);
    for (const c of (p.cenas || []).slice(0, 4)) console.log(`           ↳ NO AR em ${c}`);
  }
  if (l.detalheProibidos.length > 10) console.log(`       … e mais ${l.detalheProibidos.length - 10}`);
}

for (const l of laudos.filter((x) => x.semProva)) {
  console.log(`  ? ${l.proj} — ${l.semProva} arquivo(s) de acervo SEM procedência declarada, em ${l.pastasSemProcedencia.length} pasta(s):`);
  for (const p of l.pastasSemProcedencia.slice(0, 12)) console.log(`       _media/${p}/`);
  if (l.pastasSemProcedencia.length > 12) console.log(`       … e mais ${l.pastasSemProcedencia.length - 12} pasta(s)`);
  /* ⚠️ "SEM PROVA" QUASE NUNCA É AUSÊNCIA DE PROVA — é prova escrita com OUTRO NOME DE ARQUIVO. A
   * caça já grava fonte, licença, autor e URL em `_media/<pasta>/_creditos.json` e nos JSONs de
   * `_pesquisa/`; este gate lê `_PROCEDENCIA.json`, `manifest.jsonl` e `_pesquisa/pauta-*.json`, e o
   * resto ficava de fora pelo NOME, não por falta de declaração. Medido no `o-acre` (07/ago): 218
   * arquivos acusados aqui, 37 pastas, nenhum proibido — a mídia estava certa o tempo todo.
   * Sem esta linha, o caminho que sobra é um humano (ou um modelo caro) redigitar centenas de
   * entradas lendo 18 JSONs a três pastas de distância, com o erro de cópia garantido. O
   * reconciliador é TRANSCRITOR: grava `_via` de onde cada campo veio, e o que não tem prova em
   * lugar nenhum ele deixa em branco e reporta — inventar fonte plausível é o único jeito de causar
   * o dano que este gate existe para impedir [PESQ-50]. */
  console.log(`     ⚡ Antes de declarar à mão: a prova costuma já existir em _creditos.json / _pesquisa/`);
  console.log(`        node scripts/procedencia-reconciliar.mjs ${l.proj}              # simula (mostra o _via de cada campo)`);
  console.log(`        node scripts/procedencia-reconciliar.mjs ${l.proj} --aplicar    # transcreve para _PROCEDENCIA.json`);
  // [porte Regie] o motivo de cada um, quando o gate sabe — "SEM PROVA" por nome pago, por URL de outro
  // domínio ou por licença CC fora da trava pede conserto diferente de "ninguém declarou".
  const comMotivo = l.detalheSemProva.filter((d) => d.motivo);
  for (const d of comMotivo.slice(0, 8)) console.log(`       · ${d.arquivo}: ${d.motivo}`);
  if (comMotivo.length > 8) console.log(`       … e mais ${comMotivo.length - 8} com motivo (--json mostra todos)`);
}

const fracosTotal = laudos.flatMap((l) => l.fracos.map((f) => `${l.proj}/${f.arquivo}`));
if (fracosTotal.length) {
  console.log(`\n  ⚠ ${fracosTotal.length} declaração(ões) SEM url nem id — passam, mas não dá para reconferir:`);
  for (const f of fracosTotal.slice(0, 6)) console.log(`       ${f}`);
}

const orfasTotal = laudos.reduce((n, l) => n + l.refsOrfas, 0);
if (orfasTotal) console.log(`\n  · ${orfasTotal} referência(s) de cena sem arquivo no disco (limpeza pós-entrega — não é defeito).`);
// ⚠️ O que foi tirado da conta é DITO. Silêncio aqui viraria "cobri tudo" sobre uma cobertura
// reduzida — e foi justamente a dúvida honesta sobre esses arquivos que segurou este conserto antes.
const rascunhoTotal = laudos.reduce((n, l) => n + (l.rascunhos || 0), 0);
if (rascunhoTotal) {
  console.log(`  · ${rascunhoTotal} arquivo(s) em _media/_caca* — RASCUNHO da caça (candidato não promovido,`);
  console.log(`    grade de busca, log). Não é acervo e não tem procedência a declarar: a adoção é que promove.`);
}
// [porte Regie] sem stock-hub na Régie: diz-se quantos manifest.jsonl da caça (em _media/_caca/) entraram.
if (manifestosLidos) console.log(`  · ${manifestosLidos} manifest.jsonl de caça lido(s) em _media/_caca/ — prova 2 para arquivo que chegou sem renomear.`);

if (totalSujo) {
  console.log(`\n  ✗ REPROVADO — ${totalSujo} item(ns) de acervo PROIBIDO pela marca.`);
  // [porte Regie] o caminho de recaça que existe num canal da Régie (sem túnel, sem VM)
  console.log(`    Recace e substitua: node <motor>/src/ferramentas/buscar-midia.mjs ${alvo || '<proj>'} buscar ... (acervo livre,`);
  console.log(`    licença medida na fonte), ou pela conta assinada DO CANAL, se houver. Se nada servir: porta`);
  console.log(`    fechada não autoriza trocar a fonte; autoriza AVISAR. Pare e reporte.`);
  // ── A SEGUNDA METADE DA RECAÇA TEM FERRAMENTA (11/ago/2026) ──────────────────────────────────
  // Caçar o substituto é só metade: falta trocá-lo nos HTMLs. À mão, em 25 cenas, é onde se perde
  // arte — um `sed` largo demais come o arquivo, e não há `_bkp/` de HTML nesta casa (o
  // versionamento do bucket está `Suspended`; em 26/jul um rsync apagou 5 cenas recém-consertadas).
  // O `aplicar-substituicao-midia.mjs` nasceu da recaça do `mamute-de-volta` e vivia citado só em
  // `seed/regras/PESQ.md` — mesma lacuna que o `procedencia-declarar` tinha no balde de baixo.
  // [porte Regie] o aplicar-substituicao-midia.mjs NÃO veio para a Régie: o laudo não pode mandar rodá-lo.
  console.log(`\n    ⚡ Com os substitutos na mão, troque nos HTMLs de graphics/ com o git limpo antes (git diff`);
  console.log(`       mostra cada troca; um replace largo demais come o arquivo). O aplicar-substituicao-midia`);
  console.log(`       do estúdio não veio para o canal. Menção a fonte vetada também aparece em comentário de`);
  console.log(`       DESCARTE, que é registro pago: essas se reescrevem a olho [PESQ-77].`);
}
if (totalSemProva) {
  console.log(`\n  ✗ REPROVADO — ${totalSemProva} arquivo(s) de acervo SEM procedência declarada.`);
  console.log(`    Ausência de prova não é prova de limpeza: sem declaração, ninguém sabe se o clipe`);
  console.log(`    veio do acervo assinado ou de um banco gratuito. Escreva o \`_PROCEDENCIA.json\` na`);
  console.log(`    pasta do arquivo (o agente de pesquisa ainda tem a URL na mão — daqui a uma semana`);
  console.log(`    isso vira arqueologia):`);
  // [porte Regie] exemplo NEUTRO: o antigo trazia "Envato Elements — stock video (assinatura ativa)",
  // e um agente que seguisse a receita impressa pelo próprio gate fabricava uma licença.
  console.log(`      { "<nome-do-arquivo>": { "fonte": "<de onde veio, como a página do item diz>",`);
  console.log(`                               "url": "<a página do item, no site de onde veio>",`);
  console.log(`                               "licenca": "<a licença escrita na página do item>" } }`);
  console.log(`    Acervo pago (Shutterstock, Storyblocks, Envato, Motion Array) só prova com a URL do item no`);
  console.log(`    domínio dele — e só se o CANAL tem a conta. Não declare licença que você não viu.`);
  // ── ANTES DE ESCREVER À MÃO: A PROCEDÊNCIA COSTUMA JÁ ESTAR NO DISCO (11/ago/2026) ────────────
  // Este gate lê a prova de UM lugar (o `_PROCEDENCIA.json` da pasta), mas os agentes `pesquisa-*`
  // registram fonte, URL e licença de cada peça no relatório DELES (`_pesquisa/footage.json`,
  // `fotos.json`, …) — que gate nenhum lê. No `mamute-de-volta` isso deu 120 arquivos "SEM PROVA"
  // com a procedência inteira escrita a dois diretórios de distância.
  // O `procedencia-declarar.mjs` transcreve um lado no outro; existia desde 10/ago e nada o citava
  // fora de `seed/regras/PESQ.md`. *Laudo que reprova sem apontar o conserto ao lado vira ruído* —
  // e o conserto que ele não aponta é justamente o que evita recaçar mídia por lacuna de REGISTRO,
  // queimando cota diária de acervo assinado para resolver o que já está em disco.
  // ⚠️ ESTE BLOCO IMPRIMIA `undefined` NA VARREDURA. Sem alvo, `${alvo}` interpola a string
  // "undefined", e a receita saía como `procedencia-declarar.mjs undefined` — que responde
  // `✗ projeto não encontrado: out/undefined` e **sai 0**, falhando em silêncio. É a mesma lição
  // que o bloco `semNadaAuditavel` logo abaixo já aprendeu por escrito ("no modo --todos o culpado
  // tem de ser NOMEADO"), e que a linha do `aplicar-substituicao-midia` acima já defende com
  // `${alvo || '<proj>'}`: a regra estava no arquivo, em dois lugares, e este bloco ficou de fora.
  // *Instrução que não roda é pior que instrução nenhuma* — quem cola vê um ✗ com exit 0 e conclui
  // que o conserto não serve, quando o que não servia era o comando impresso.
  const projSemProva = laudos.filter((l) => l.semProva).map((l) => l.proj);
  const quem = alvo ? [alvo] : projSemProva;
  console.log(`\n    ⚡ Antes de escrever à mão — a pesquisa pode JÁ ter registrado tudo isso:`);
  for (const p of quem.slice(0, 6)) {
    // [porte Regie] o procedencia-declarar não veio; o reconciliar (portado) faz a mesma transcrição
    console.log(`       node scripts/procedencia-reconciliar.mjs ${p}              # simula, não escreve`);
    console.log(`       node scripts/procedencia-reconciliar.mjs ${p} --escrever   # grava os _PROCEDENCIA.json`);
  }
  if (quem.length > 6) console.log(`       … e mais ${quem.length - 6} projeto(s) — a lista completa é a tabela acima`);
  console.log(`       (ele COPIA a fonte como o agente a escreveu — inclusive quando ela é PROIBIDA.`);
  console.log(`        Declarar a fonte vetada é o objetivo: vira lista de recaça, não maquiagem.)`);
}
if (nadaParaOlhar) {
  console.log(`\n  ✗ RECUSADO — não achei mídia NEM cena em «${alvo}». Isso não é "limpo": é nada para olhar.`);
  // [porte Regie] sem VM: a mídia mora em out/<proj>/ DA PASTA DO CANAL
  console.log(`    Confira o slug, e confira a PASTA — rode de dentro da pasta do canal (a que tem out/${alvo}/).`);
}
if (semNadaAuditavel) {
  // ⚠️ NO MODO `--todos` O CULPADO TEM DE SER NOMEADO, e antes esta mensagem falava sempre de
  // `laudos[0]` e do `«alvo»` — que na varredura é indefinido. *Laudo que aponta o projeto errado
  // manda consertar o inocente*, e quem for conferir volta dizendo que o gate está quebrado.
  const alvos = TODOS ? semNadaAuditavelLista : [laudos[0] || {}];
  const nome = (l) => l.proj || alvo || "(?)";
  console.log(`\n  ✗ RECUSADO — ${alvos.length} projeto(s) sem NADA auditável:`);
  for (const l of alvos.slice(0, 10)) {
    console.log(`      ${nome(l)}: ${l.total ?? 0} arquivo(s), ${l.isentos ?? 0} ISENTO(S), 0 cena referenciando mídia`);
  }
  if (alvos.length > 10) console.log(`      … e mais ${alvos.length - 10}`);
  console.log(`    Isento é master, logo, bandeira… Zero mídia de acervo auditada.`);
  console.log(`    Isso NÃO é "limpo" — é o gate sem nada sobre o que opinar, e o PASS aqui seria mentira.`);
  // [porte Regie] sem VM nem bucket: a causa provável aqui é pasta errada ou pesquisa que não rodou
  console.log(`    Confira se você está na pasta do canal certa e se a pesquisa de mídia de fato entregou em`);
  console.log(`    out/${nome(alvos[0])}/_media/ (foto/ e footage/). Sem mídia auditada não há PASS.`);
}
if (totalEditorial > 0) {
  console.log(`\n  ⚖️ ${totalEditorial} arquivo(s) de AGÊNCIA baixados FORA da assinatura — não é proibido, e não é provado:`);
  for (const l of laudos.filter((x) => x.editoriais)) {
    console.log(`     ${l.proj}:`);
    for (const e of l.detalheEditoriais.slice(0, 8)) {
      console.log(`       ${e.arquivo}${e.cenas ? `  (${e.cenas} cena(s))` : ""}`);
      console.log(`         fonte: ${e.fonte}`);
    }
    if (l.detalheEditoriais.length > 8) console.log(`       … e mais ${l.detalheEditoriais.length - 8}`);
  }
  console.log(`\n     Saber de onde veio NÃO é o mesmo que poder usar. A régua desta casa é CASO A CASO:`);
  console.log(`     se o uso está autorizado, escreva a decisão no \`_PROCEDENCIA.json\` do arquivo —`);
  console.log(`       "excecao_autorizada": { "por": "<dono do canal>", "em": "AAAA-MM-DD", "motivo": "…" }`);   // [porte Regie]
  console.log(`     Os três campos são obrigatórios, e a exceção aparece no laudo em coluna própria.`);
  console.log(`     Se NÃO está, recace nos acervos assinados — o crédito na tela não substitui licença.`);
}
if (!reprova) console.log("  ✓ PASS — toda a mídia de acervo tem procedência PROVADA, e nenhuma é de fonte proibida.");
// [porte Regie] PESQ-126 no laudo: a licença aberta passa aqui, e a especificidade continua valendo
const abertas = laudos.reduce((n, l) => n + l.provados.filter((p) => p.classe === "licença aberta").length, 0);
if (abertas) console.log(`  · ${abertas} arquivo(s) de licença ABERTA (Pexels/Pixabay): a origem está provada, a ESPECIFICIDADE não —\n    imagem genérica sob afirmação específica continua proibida, e quem julga é o qc-visual olhando.`);

process.exit(reprova ? 1 : 0);
