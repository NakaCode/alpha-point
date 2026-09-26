#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/api-oficial.mjs (linhas 1-426, commit 4afda12).
// O que mudou:
//   · o token vem do lerChave do motor (<motor>/src/lib/chaves.mjs):
//     ambiente, depois %USERPROFILE%\.regie\chaves.env, depois .env do canal — `--env-file` deixou de
//     ser necessário (e continua funcionando, porque ambiente vence). O valor NUNCA é impresso, e o
//     corpo de erro da API passa pela raspagem de chaves do motor antes de ir ao console;
//   · NÃO há hub em ~/Downloads: `baixar --aplicar` EXIGE --proj e --cena, grava o original em
//     out/<proj>/_media/_caca/<cena>/shutterstock/ com a linha no manifest.jsonl ao lado (a mesma
//     pasta de rascunho do buscar-midia do motor e do registrar-download.mjs) e instala em
//     _media/<foto|footage|audio>/<cena>/;
//   · a procedência vai para o _PROCEDENCIA.json DA PASTA DA CENA pela escrita de
//     lib/procedencia-canal.mjs (JSON ilegível não vira {} e não é sobrescrito; nome já declarado
//     recusa ANTES de licenciar), com a MEDIDA do arquivo (medir() do motor) e sem `maquina`
//     (hostname do PC do dono não vai para o git);
//   · o download é em fluxo (vídeo 4K não cabe inteiro na memória, como fazia o arrayBuffer);
//   · a dica `sips` do macOS saiu: a resolução medida é impressa direto;
//   · rede, chave e contador injetáveis para o teste (principal()); saídas por código de retorno.
// As travas de qualidade/editorial e o modo seco ficaram iguais.
//
// ── A DECISÃO QUE VALE (Mateus, 23/09/2026 ~20h20; ADR 0009 §D; docs/planejamento/V1-PLANO.md) ──
// Cada dono usa a PRÓPRIA conta Shutterstock, pelo Chrome (skill cacar-no-chrome), com o limite dela:
// 100 downloads por dia. O canal NÃO usa conta do Top10 no Shutterstock. Esta porta fica DESLIGADA
// por padrão, "só para quem tiver token próprio". Uma versão anterior deste arquivo (da decisão das
// 19h40, que a das 20h20 corrigiu) deixava a API LIGADA por padrão e licenciava foto do pote
// `integrated_media` do Top10; isso foi desfeito aqui:
//   · DESLIGADA POR PADRÃO. Só liga com as DUAS coisas: marca/midia.json →
//       "shutterstock": { "api_oficial": { "ligada": true, "usuario": "<usuário da SUA conta>" } }
//     e o token dessa conta em SHUTTERSTOCK_TOKEN_PROPRIO (o arquivo de chaves da máquina);
//   · [revisão v1, 23/09/2026] A TRAVA CONTRA A CONTA DO TOP10 MORA FORA DO CANAL. O `usuario` fica em
//     marca/midia.json, um arquivo do canal que o Claude do canal edita e mescla sozinho (ADR 0009 §C só
//     segura settings, hooks e .github) — sozinho, ele não segura nada. Por isso:
//       - o token do dono tem NOME PRÓPRIO, SHUTTERSTOCK_TOKEN_PROPRIO. SHUTTERSTOCK_API_TOKEN é o nome
//         que o .env do estúdio usa e que o arquivo de chaves de cada pessoa recebe preenchido a partir
//         dele (docs/planejamento/V1-PLANO.md, "Chaves"; docs/chaves.env.modelo): esta porta NUNCA o lê
//         como credencial. Um arquivo de chaves copiado do estúdio não liga nada;
//       - se SHUTTERSTOCK_TOKEN_PROPRIO tiver o MESMO valor de SHUTTERSTOCK_API_TOKEN, recusa (2) antes
//         de qualquer chamada: é o token do Top10 com outro nome. A comparação é feita em memória, e
//         nenhum dos dois valores é impresso;
//       - token de outra conta: a mensagem NÃO diz o usuário do token. Dizer o nome ensinava a abrir a
//         trava (copiar o nome para `usuario` e ligar) — é exatamente a conta que não pode ser usada;
//   · O TOKEN TEM DE SER DA CONTA DO DONO, e isso se CONFERE: antes de qualquer outra chamada, GET /user
//     tem de devolver o `usuario` declarado. Motivo concreto: o arquivo de chaves de cada pessoa é
//     preenchido a partir do .env do estúdio (V1-PLANO, "Chaves"), onde mora o token do Top10 — ligar a
//     API sem esta conferência gastaria o dia da conta do Top10 em silêncio;
//   · NUNCA o pote `integrated_media` (500/mês do Top10): a foto sai da licença `standard` do plano
//     diário da conta do dono. O campo antigo `shutterstock_api` e um `integrated_media` em
//     marca/midia.json são recusados com a forma nova (lib/teto-shutterstock.mjs, lerConfigShutterstock);
//   · O TETO DO DIA É DA CONTA, um só para a API e para o Chrome: quem conta é lib/teto-shutterstock.mjs
//     (restante/registrar). Este script não conta nada por conta própria — dois contadores do mesmo
//     teto divergem exatamente no dia em que importa (regra 1: um escritor por assunto);
//   · os códigos de saída casam com os do registrar-download.mjs onde o sentido é o mesmo: 2 uso ou
//     configuração (inclusive DESLIGADA e token de outra conta), 4 credencial recusada (401/403), 5 teto.
//     Erro de API que não é de credencial (500, 404) é 1, não 4: mandar "refazer o token" num 500 é
//     pista falsa;
//   · o corpo de erro é RASPADO antes de ser cortado (cortar antes deixava meio token passar).
//
// Códigos de saída: 0 ok · 1 falhou (API, licença que não saiu) · 2 uso/configuração/desligada ·
// 4 credencial recusada · 5 teto do dia da conta, ou pote da conta vazio · 6 licença gasta e download
// falhou · 7 abaixo de 4K · 8 editorial · 9 a conta não tem a assinatura · 11 destino ocupado ·
// 12 procedência não declarada.
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
//
// A PORTA SEM NAVEGADOR — busca e licencia no Shutterstock pela API OFICIAL.
//
//   node scripts/stock/api-oficial.mjs cota
//   node scripts/stock/api-oficial.mjs buscar foto  "oil refinery" [--n=10]
//   node scripts/stock/api-oficial.mjs buscar video "aerial pyramids" [--so4k]
//   node scripts/stock/api-oficial.mjs buscar audio "documentary tension"
//   node scripts/stock/api-oficial.mjs baixar foto <id> --proj=<slug> --cena=<id> [--nome=<nome>] [--busca="…"] --aplicar
//
// ── POR QUE ELE EXISTE (09/set/2026, no estúdio) ────────────────────────────────────────────────
// A caça de mídia para quando o CAPTCHA do Shutterstock aparece, e só uma pessoa destrava. Uma
// chamada autenticada por chave não tem CAPTCHA por construção: não abre Chrome, não depende de
// sessão, não é julgada pela reputação do IP ([PESQ-48]).
//
// ⛔ ELE É COMPLEMENTO, NÃO SUBSTITUTO — ordem do Mateus, 10/set/2026: *"a API já era pra estar
// sendo usada, ela não vai substituir o chrome headless"*. E a medição concorda: o catálogo de vídeo
// do token do estúdio tinha **93.872 clipes, sendo 1.207 em 4K** — estreito demais para sustentar
// footage. O que esta rota resolve de verdade é FOTO e ÁUDIO/SFX.
// [porte Regie] Na Régie a porta principal é o Chrome do dono (skill cacar-no-chrome +
// scripts/stock/registrar-download.mjs); esta fica para quem tem token próprio e quer foto/áudio sem
// navegador.
//
// ── ⚠️⚠️ AS COTAS SE CRUZAM (medido em 10/set/2026, na conta do estúdio) ─────────────────────────
// A conta anunciava CINCO assinaturas, cada uma com o seu "100 restantes" — pareciam cinco potes. Eram
// DOIS: vídeo + áudio + SFX + imagem `standard` dividiam o MESMO saldo diário (100/dia), e só a imagem
// `integrated_media` era separada (500/mês). Prova aritmética: o pote marcava `92/100` e o histórico
// de licenças tinha **exatamente 8** entradas desde o início da janela — todas feitas pela caça por
// CHROME, nenhuma por API. Ou seja: **esta porta e o Chrome gastam o mesmo dinheiro**.
// [porte Regie] Por isso o teto do dia é UM contador por conta (lib/teto-shutterstock.mjs), que a caça
// pelo Chrome e esta porta alimentam juntas. O `cota` mostra os potes da conta do DONO, pela raiz do id.
//
// *Duas funções anunciadas com limites próprios podem dividir o mesmo pote — e quem soma os
// anúncios projeta 500 downloads/dia onde existem 100.*
import { appendFileSync, copyFileSync, createWriteStream, existsSync, mkdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { importarDoMotor } from "../lib/motor.mjs";
import { declarar, podeDeclarar } from "./lib/procedencia-canal.mjs";
import * as tetoPadrao from "./lib/teto-shutterstock.mjs";
import { ehPrincipal, opcao } from "./lib/ferramentas.mjs";

export const API = "https://api.shutterstock.com/v2";
/** [porte Regie] O nome do token DA CONTA DO DONO no arquivo de chaves da máquina. */
export const VAR_TOKEN_DONO = "SHUTTERSTOCK_TOKEN_PROPRIO";
/** [porte Regie] O nome do token do ESTÚDIO (Top10). Lido só para ser recusado, nunca usado como credencial. */
export const VAR_TOKEN_ESTUDIO = "SHUTTERSTOCK_API_TOKEN";

export const TIPOS = {
  foto: {
    rota: "images", chaveId: "image_id", plural: "images",
    pote: "standard",                      // [porte Regie] plano diário da conta do dono — NUNCA o integrated_media
    ext: "jpg", tamanho: "huge", pasta: "foto",
  },
  video: {
    rota: "videos", chaveId: "video_id", plural: "videos",
    pote: "footage_standard",              // plano diário (compartilhado)
    ext: "mov", tamanho: "4k", pasta: "footage",
  },
  audio: {
    rota: "audio", chaveId: "audio_id", plural: "audio",
    pote: "audio_standard",                // plano diário (compartilhado)
    ext: "mp3", tamanho: null, pasta: "audio",
  },
};

/** [porte Regie] O pote mensal da conta do Top10. Existe aqui só para ser RECUSADO. */
export const POTE_DO_TOP10 = "integrated_media";

export const janela = (a) => (a?.end_time && a?.start_time && (Date.parse(a.end_time) - Date.parse(a.start_time)) / 86400e3 > 20) ? "mês" : "dia";

/**
 * QUAL POTE PAGA ESTA ASSINATURA — e por que não basta comparar `s.id`.
 *
 * Os ids das quatro assinaturas do plano diário são base64 de
 * `ae465965390d4620b58ccd3092e13172-videos-footage_standard`,
 * `…-audio-audio_standard`, `…-audio-sfx_standard`, `…-images-standard`:
 * **mesma raiz, sufixo por tipo**. Agrupar por `s.id` cru vê quatro potes onde há um — foi o que
 * a primeira versão desta função fez, e ela imprimiu o absurdo "5 POTE(S), não 5".
 */
export const raizDoPote = (id) => {
  const s = String(id || "");
  try {
    const dec = Buffer.from(s, "base64").toString("utf8");
    // só aceita a decodificação quando ela é texto limpo COM a forma esperada `<raiz>-<tipo>-<lic>`
    if (/^[\x20-\x7e]+$/.test(dec) && dec.includes("-")) return dec.split("-")[0];
  } catch { }
  return s;
};

/** A URL pública do item — as formas que o `baixar.mjs` do estúdio usava (`urlItem`). */
export const urlDoItem = (tipo, id) => tipo === "foto" ? `https://www.shutterstock.com/image-photo/-${id}`
  : tipo === "audio" ? `https://www.shutterstock.com/music/track-${id}`
    : `https://www.shutterstock.com/video/clip-${id}`;

/**
 * [porte Regie] A assinatura que paga este item: a licença do plano diário do tipo (`T.pote`). O
 * `integrated_media` NUNCA é escolhido, nem sobrando só ele. null quando a conta não tem — quem
 * chama diz o que existe.
 */
export function escolherAssinatura(subs, T) {
  return (subs || []).find((s) => s?.license === T.pote && s?.asset_type === T.rota && s?.license !== POTE_DO_TOP10) || null;
}

class Saida extends Error { constructor(codigo) { super(`saida ${codigo}`); this.codigo = codigo; } }

export async function principal(argv = process.argv.slice(2), {
  raiz = process.cwd(), fetch = globalThis.fetch, log = console.log, erro = console.error, chave = null, agora = () => Date.now(),
  teto = tetoPadrao, home = undefined,
} = {}) {
  const cmd = argv[0];
  const flag = (n) => argv.includes(`--${n}`);
  const opt = (n, d) => opcao(argv, n, d);
  const sair = (c) => { throw new Saida(c); };
  const optsTeto = (extra = {}) => ({ agora: agora(), ...(home ? { home } : {}), ...extra });

  // [porte Regie] a chave pelo motor — nunca impressa
  const { lerChave, ARQUIVO_MAQUINA } = await importarDoMotor("src/lib/chaves.mjs");
  const { rasparChaves } = await importarDoMotor("src/midia/busca.mjs");
  const lerK = chave || lerChave;

  try {
    if (!["cota", "buscar", "baixar"].includes(cmd)) {
      erro(`uso: api-oficial.mjs cota | buscar <foto|video|audio> "<termo>" | baixar <foto|video|audio> <id> --proj=<slug> --cena=<id> [--aplicar]`);
      sair(2);
    }
    // [porte Regie] DESLIGADA por padrão (ADR 0009 §D). A configuração é lida ANTES do token: com a
    // porta desligada, nem a chave é procurada.
    let cfg;
    try { cfg = teto.lerConfigShutterstock(raiz); }
    catch (e) { erro(`x ${e.message}`); sair(2); }
    if (!cfg.api.ligada) {
      erro(`x a API oficial do Shutterstock esta DESLIGADA neste canal (o padrao). Nada foi chamado.`);
      erro(`  O Shutterstock deste canal e a SUA conta, pelo Chrome: skill cacar-no-chrome + scripts/stock/registrar-download.mjs.`);
      erro(`  Para ligar esta porta e preciso um token da SUA conta (nunca o do Top10) em ${VAR_TOKEN_DONO}, no arquivo de chaves da maquina, e, em marca/midia.json:`);
      erro(`    "shutterstock": { "api_oficial": { "ligada": true, "usuario": "<seu usuario no Shutterstock>" } }`);
      sair(2);
    }
    if (!cfg.api.usuario) {
      erro(`x a API esta ligada sem "usuario" em marca/midia.json (shutterstock.api_oficial.usuario). Sem ele nao ha como conferir`);
      erro(`  que o token desta maquina e da SUA conta — e o arquivo de chaves pode trazer o token do Top10. Nada foi chamado.`);
      sair(2);
    }
    // [porte Regie] o token do DONO tem nome próprio; o SHUTTERSTOCK_API_TOKEN (o do estúdio) só é lido
    // para ser recusado — ver o cabeçalho, "A TRAVA CONTRA A CONTA DO TOP10 MORA FORA DO CANAL".
    const TOKEN = lerK(VAR_TOKEN_DONO);
    const DO_ESTUDIO = lerK(VAR_TOKEN_ESTUDIO);
    const raspar = (t) => rasparChaves(String(t), [TOKEN, DO_ESTUDIO].filter(Boolean));
    if (!TOKEN) {
      erro(`x falta ${VAR_TOKEN_DONO}. Ponha a linha ${VAR_TOKEN_DONO}=<valor> em ${ARQUIVO_MAQUINA()}`);
      erro("  com o token gerado na SUA conta Shutterstock (nunca no git, nunca colado no chat).");
      erro(`  ${VAR_TOKEN_ESTUDIO} NAO serve aqui: e o nome do token do estudio (Top10), e este canal nao usa essa conta.`);
      sair(2);
    }
    if (DO_ESTUDIO && String(DO_ESTUDIO).trim() === String(TOKEN).trim()) {
      erro(`x ${VAR_TOKEN_DONO} tem o MESMO valor de ${VAR_TOKEN_ESTUDIO} — o token do estudio (Top10) com outro nome. Nada foi chamado.`);
      erro(`  Este canal so usa a SUA conta Shutterstock. Gere um token na SUA conta, ou deixe a API desligada (o Chrome e a porta do canal).`);
      sair(2);
    }

    /**
     * ⚠️ ERRO DE API SE LÊ, NÃO SE ENGOLE. Um `fetch` que devolve 401/403 e segue adiante vira o
     * morto-silencioso clássico: a busca retorna zero, alguém escreve "não há footage deste tema" na
     * pauta e o beat vira desenho — com a assinatura paga e disponível o tempo todo ([PESQ-9b]).
     */
    async function api(rota, { metodo = "GET", corpo = null, query = {} } = {}) {
      const u = new URL(API + rota);
      for (const [k, v] of Object.entries(query)) if (v !== undefined && v !== null && v !== "") u.searchParams.set(k, v);
      const r = await fetch(u, {
        method: metodo,
        headers: { Authorization: `Bearer ${TOKEN}`, ...(corpo ? { "Content-Type": "application/json" } : {}) },
        body: corpo ? JSON.stringify(corpo) : undefined,
      });
      const txt = await r.text();
      let json = null; try { json = JSON.parse(txt); } catch { }
      if (!r.ok) {
        erro(`x ${metodo} ${rota} -> HTTP ${r.status}`);
        erro(`   ${raspar(txt).slice(0, 400)}`);                 // [porte Regie] RASPA e só então corta: cortar antes deixava meio token passar
        if (r.status === 401) erro(`   401 = token invalido ou vencido. Gere um token novo na SUA conta Shutterstock e troque-o no arquivo de chaves.`);
        if (r.status === 403) erro(`   403 = o token autenticou mas NAO tem o escopo desta rota.`);
        sair(r.status === 401 || r.status === 403 ? 4 : 1);     // [porte Regie] 4 só para credencial; o resto é falha (1)
      }
      return json ?? txt;
    }
    const assinaturas = async () => (await api("/user/subscriptions")).data || [];

    // [porte Regie] O TOKEN É DA CONTA DO DONO? Cada comando confere, depois de validar os próprios
    // argumentos e ANTES de qualquer outra chamada: uso errado não gasta nem uma chamada.
    async function conferirConta() {
      const eu = await api("/user");
      const usuarioDoToken = String(eu?.username || "");
      if (!usuarioDoToken || usuarioDoToken.toLowerCase() !== cfg.api.usuario.toLowerCase()) {
        // [porte Regie] o usuário do token NÃO é impresso: dizê-lo ensinava a copiar o nome para `usuario`.
        erro(`x o token em ${VAR_TOKEN_DONO} e de OUTRA conta Shutterstock — nao da declarada em marca/midia.json.`);
        erro(`  Nada foi buscado nem licenciado. Este canal so usa a SUA conta: ponha o token DA SUA conta em ${ARQUIVO_MAQUINA()},`);
        erro(`  ou desligue a API. Nao troque o "usuario" para caber no token: se o token nao e seu, a conta nao e sua.`);
        sair(2);
      }
      return eu;
    }

    /** [porte Regie] O dia da conta: quanto resta, pelo contador compartilhado com o Chrome. */
    function restanteDoDia() {
      try { return teto.restante(raiz, optsTeto({ config: cfg })); }
      catch (e) { erro(`x o contador do teto do dia falhou: ${raspar(String(e.message)).split("\n")[0]} — nada licenciado.`); sair(2); }
    }

    if (cmd === "cota") {
      const eu = await conferirConta();
      const d = await assinaturas();
      log(`\n  conta: ${eu.username} (id ${eu.id})\n`);
      const potes = new Map();
      for (const s of d) {
        const a = s.allotment || {};
        const tem4k = (s.formats || []).some((f) => /4K/i.test(f.description || ""));
        const raiz_ = raizDoPote(s.id);
        log(`  ${String(s.asset_type).padEnd(7)} | ${String(s.license).padEnd(20)} | ` +
          `${String(a.downloads_left ?? "?").padStart(4)}/${String(a.downloads_limit ?? "?").padEnd(4)} por ${janela(a)}` +
          ` | pote ${raiz_.slice(0, 8)}...${tem4k ? " | 4K" : ""}${s.license === POTE_DO_TOP10 ? " | NAO USADO por este canal" : ""}`);
        if (!potes.has(raiz_)) potes.set(raiz_, { licencas: [], resta: a.downloads_left, limite: a.downloads_limit, j: janela(a) });
        potes.get(raiz_).licencas.push(s.license);
      }
      log(`\n  ${potes.size} POTE(S) para ${d.length} assinaturas — o saldo e do POTE, nao da licenca:`);
      for (const [r_, p] of potes) {
        const partilha = p.licencas.length > 1 ? "COMPARTILHADO" : "separado";
        log(`     ${r_.slice(0, 8)}... | ${p.resta}/${p.limite} por ${p.j} | ${partilha} entre: ${p.licencas.join(" + ")}`);
      }
      const r = restanteDoDia();
      log(`\n  contador desta maquina (Chrome + API juntos): ${teto.descrever(r)}\n`);
      return 0;
    }

    if (cmd === "buscar") {
      const tipo = argv[1];
      const termo = argv[2];
      const T = TIPOS[tipo];
      if (!T || !termo) { erro(`uso: api-oficial.mjs buscar <foto|video|audio> "<termo>" [--n=10] [--so4k]`); sair(2); }
      await conferirConta();

      /**
       * ⚠️⚠️ NÃO CRAVE `resolution=4k` NA BUSCA DE VÍDEO — ELE TROCA O RESULTADO (medido 09/set/2026).
       *
       * A primeira versão pedia 4K sempre, porque a casa entrega 4K. Passou por plausível e estava
       * ERRADO: `"aerial view of pyramids of giza"` devolvia **Roma** e `"ocean waves"` devolvia
       * **Rio de Janeiro**. Num universo de 1.207 itens 4K o buscador **nunca devolve vazio** — devolve
       * o menos distante. *Filtro que estreita o universo antes da busca não filtra o resultado: troca
       * o resultado, e a troca sai plausível.*
       */
      const so4k = flag("so4k");
      const q = {
        query: termo,
        per_page: opt("n", "10"),
        ...(tipo === "video" ? { ...(so4k ? { resolution: "4k" } : {}), sort: "popular", duration_from: opt("duracao-min", "") } : {}),
        // A casa é landscape 4K de ponta a ponta; foto vertical entra na tela como erro.
        ...(tipo === "foto" ? { orientation: opt("orientacao", "horizontal"), image_type: "photo" } : {}),
        ...(tipo === "audio" ? { view: "full" } : {}),
      };
      const d = await api(`/${T.rota}/search`, { query: q });

      log(`\n  ${tipo} | "${termo}" | ${d.total_count} resultado(s)${so4k ? " no catalogo 4K (relevancia fraca)" : ""}\n`);
      for (const v of d.data || []) {
        if (tipo === "audio") {
          log(`  ${String(v.id).padEnd(10)} ${String(v.duration ?? "?") + "s"} | bpm ${v.bpm ?? "?"} | ${String(v.title || "").slice(0, 44)}`);
          log(`  ${"".padEnd(10)} ${(v.moods || []).slice(0, 3).join(", ")} | preview: ${v.assets?.preview_mp3?.url || "(sem)"}`);
        } else if (tipo === "foto") {
          log(`  ${String(v.id).padEnd(12)} ${String(v.description || "").slice(0, 72)}`);
          log(`  ${"".padEnd(12)} preview: ${v.assets?.preview_1500?.url || v.assets?.preview?.url || "(sem)"}`);
        } else {
          log(`  ${String(v.id).padEnd(12)} ${String(v.duration + "s").padStart(5)} ${String(v.aspect_ratio || "").padEnd(6)} ${String(v.description || "").slice(0, 70)}`);
          log(`  ${"".padEnd(12)} preview: ${v.assets?.preview_mp4?.url || "(sem)"}`);
        }
      }
      log(`\n  A busca NAO traz os formatos — so o detalhe traz. 'baixar' confere a resolucao antes de gastar.`);
      log(`  Olhe os previews ANTES de licenciar: cada licenca gasta um do dia da SUA conta.`);
      log(`  Licenciar:  node scripts/stock/api-oficial.mjs baixar ${tipo} <id> --proj=<slug> --cena=<id> --aplicar\n`);
      return 0;
    }

    // ── baixar ──────────────────────────────────────────────────────────────────────────────────
    const tipo = argv[1];
    const id = argv[2];
    const T = TIPOS[tipo];
    if (!T || !id || !/^[A-Za-z0-9_-]+$/.test(id)) { erro(`uso: api-oficial.mjs baixar <foto|video|audio> <id> --proj=<slug> --cena=<id> [--nome=<nome>] [--aplicar]`); sair(2); }

    // [porte Regie] sem hub: --proj e --cena são obrigatórios para licenciar. Arquivo que não chega a
    // _media/ não existe para a produção [PESQ-102] — e aqui não há outro lugar para ele morar.
    const proj = opt("proj", "");
    const cena = opt("cena", "");
    const { comTrava, nomeSeguro, renomearComRetentativa, relPosix } = await importarDoMotor("src/midia/arquivos.mjs");
    const { lerProcedencia, medir } = await importarDoMotor("src/midia/procedencia.mjs");
    let projDir = null, cenaSegura = null, nomeFinal = null, destDir = null, cacaDir = null;
    if (proj || cena || flag("aplicar")) {
      if (!proj || !cena) { erro("x --aplicar exige --proj=<slug> e --cena=<id>: o arquivo licenciado vai direto para out/<proj>/_media/, onde a producao o enxerga."); sair(2); }
      projDir = join(raiz, "out", proj);
      if (!existsSync(projDir)) { erro(`x out/${proj} nao existe em ${raiz} — nada foi licenciado (nenhuma pasta e criada fora de um projeto que ja existe).`); sair(2); }
      cenaSegura = nomeSeguro(cena, { max: 60, reserva: "cena" });
      nomeFinal = `${nomeSeguro(opt("nome", `shutterstock-${id}`), { max: 80, reserva: `shutterstock-${id}` })}.${T.ext}`;
      destDir = join(projDir, "_media", T.pasta, cenaSegura);
      cacaDir = join(projDir, "_media", "_caca", cenaSegura, "shutterstock");
    }

    await conferirConta();
    const meta = await api(`/${T.rota}/${id}`);
    const assets = meta.assets || {};
    const titulo = String(meta.description || meta.title || "").slice(0, 88);
    log(`\n  ${tipo} ${meta.id} | ${titulo}`);

    // ── a trava de QUALIDADE, por tipo ────────────────────────────────────────────────────────────
    // ⚠️ Ela mora aqui, e não na intenção de quem roda. Só o detalhe traz os formatos; sem esta
    // checagem um `--aplicar` distraído licencia HD, gasta um do dia e entrega abaixo da régua.
    const formatoLic = T.tamanho;
    if (tipo === "video") {
      const disp = ["4k", "hd", "sd", "web"].filter((k) => assets[k]?.width);
      log(`  formatos: ${disp.map((k) => `${k} ${assets[k].width}x${assets[k].height}`).join(" | ") || "(nenhum)"}`);
      if (!assets["4k"]) {
        erro(`\nx SEM 4K — o maior e ${disp[0] || "?"}. A casa entrega 4K; licenciar isto gastaria`);
        erro(`   um do dia por um arquivo que o padrao recusa. Outro id, ou busque com --so4k.\n`);
        sair(7);
      }
    } else if (tipo === "foto") {
      const huge = assets.huge_jpg || {};
      const maiorLado = Math.max(huge.width || 0, huge.height || 0);
      log(`  maior formato: ${huge.width || "?"}x${huge.height || "?"}${meta.is_editorial ? "  ! EDITORIAL" : ""}`);
      if (maiorLado < 3840) {
        erro(`\nx ABAIXO DE 4K — maior lado ${maiorLado}px, e a tela e 3840. Escolha outra.\n`);
        sair(7);
      }
      /**
       * ⚠️ EDITORIAL NÃO É FOTO COMUM. A licença editorial proíbe uso comercial, e um canal
       * monetizado é uso comercial. A caça pelo Chrome recusa editorial (a skill cacar-no-chrome, como
       * o `recusarEditorial` do baixar.mjs do estúdio); a rota da API recusa pelo mesmo motivo.
       */
      if (meta.is_editorial && !flag("aceito-editorial")) {
        erro(`\nx IMAGEM EDITORIAL — licenca sem uso comercial, e o canal e monetizado.`);
        erro(`   Se o uso for realmente jornalistico e o DONO decidiu isso, --aceito-editorial.\n`);
        sair(8);
      }
    } else {
      log(`  ${meta.duration ?? "?"}s | bpm ${meta.bpm ?? "?"} | ${(meta.moods || []).slice(0, 3).join(", ")}`);
    }

    const prev = assets.preview_mp4?.url || assets.preview_mp3?.url || assets.preview_1500?.url || assets.preview?.url;
    log(`  preview (gratis): ${prev || "(sem)"}`);

    // ── a assinatura certa, e o TETO do dia da conta ─────────────────────────────────────────────
    const subs = await assinaturas();
    const sub = escolherAssinatura(subs, T);
    if (!sub) {
      const doTipo = subs.filter((s) => s?.asset_type === T.rota).map((s) => s.license);
      erro(`\nx a conta nao tem a assinatura '${T.pote}' de ${T.rota}${doTipo.length ? ` (tem: ${doTipo.join(", ")})` : ""} — rode 'cota' para ver o que existe.`);
      if (doTipo.includes(POTE_DO_TOP10)) erro(`  O ${POTE_DO_TOP10} NAO serve: e o pote mensal da conta do Top10, que este canal nao usa.`);
      erro("");
      sair(9);
    }
    const restam = sub.allotment?.downloads_left ?? 0;
    const raizPote = raizDoPote(sub.id);
    const compartilhado = subs.filter((s) => raizDoPote(s.id) === raizPote).map((s) => s.license);
    log(`  pote ${raizPote.slice(0, 8)}... (${sub.license}) | ${restam} restantes por ${janela(sub.allotment)}` +
      (compartilhado.length > 1 ? `  ! COMPARTILHADO com ${compartilhado.filter((l) => l !== sub.license).join(", ")}` : `  (separado)`));
    const dia = restanteDoDia();
    log(`  ${teto.descrever(dia)} (Chrome e API juntos)`);
    if (dia.restante < 1) {
      erro(`\nx O DIA DA CONTA ACABOU — o contador desta maquina diz ${dia.usados} de ${dia.teto} (Chrome e API contam juntos).`);
      erro(`   Nada foi licenciado. Use Storyblocks, Envato ou Motion Array pelo Chrome (sem teto) ou o acervo livre,`);
      erro(`   ou espere o dia virar. Se o site da conta mostrar outro numero: registrar-download.mjs teto --acertar=<usados>.\n`);
      sair(5);
    }
    if (restam < 1) { erro(`\nx o pote da conta esta VAZIO (${restam} restantes) — nada licenciado.\n`); sair(5); }

    if (!flag("aplicar")) {
      log(`\n  MODO SECO — nada licenciado, nenhum download gasto.`);
      log(`     A chamada que rodaria:`);
      log(`       POST ${API}/${T.rota}/licenses`);
      log(`       {"${T.plural}":[{"${T.chaveId}":"${id}"${formatoLic ? `,"size":"${formatoLic}"` : ""},"subscription_id":"${String(sub.id).slice(0, 10)}..."}]}`);
      log(`\n     Repita com --aplicar (e --proj/--cena) para gastar 1 dos ${dia.restante} do dia da conta.\n`);
      return 0;
    }

    // [porte Regie] recusa ANTES de gastar: destino ocupado ou _PROCEDENCIA.json que não se pode completar
    if (existsSync(join(destDir, nomeFinal))) { erro(`x ja existe _media/${T.pasta}/${cenaSegura}/${nomeFinal} — nada licenciado; escolha --nome=<outro>.`); sair(11); }
    const pode = podeDeclarar(destDir, nomeFinal, { lerProcedencia });
    if (!pode.ok) { erro(`x ${pode.porque} — nada licenciado.`); sair(11); }

    const item = { [T.chaveId]: id, subscription_id: sub.id, ...(formatoLic ? { size: formatoLic } : {}) };
    const lic = await api(`/${T.rota}/licenses`, { metodo: "POST", corpo: { [T.plural]: [item] } });

    /**
     * ⚠️ HTTP 200 NÃO É LICENÇA. A rota de imagens devolve **200 com o erro por item** quando falha
     * (medido: `{"data":[{"image_id":"…","error":"Media cannot be found"}],"errors":[…]}`), enquanto a
     * de vídeo devolve 404. Ler só o status daria "licenciado com sucesso" para um download que nunca
     * existiu.
     */
    const primeiro = lic.data?.[0];
    if (!primeiro || primeiro.error || !primeiro.download?.url) {
      erro(`\nx a licenca NAO saiu: ${raspar(primeiro?.error || JSON.stringify(lic)).slice(0, 240)}\n`);   // [porte Regie] raspa, depois corta
      sair(1);
    }

    mkdirSync(cacaDir, { recursive: true });
    // [porte Regie] a licença SAIU: conta no dia da conta e registra já, antes do download (licença gasta
    // com download falho conta também). Sem `arquivo`, a linha do manifest não é prova de nada.
    try { teto.registrar(raiz, 1, optsTeto({ config: cfg, via: "api-oficial", url: urlDoItem(tipo, id) })); }
    catch (e) { erro(`  ! a licenca saiu mas o contador do dia NAO registrou (${raspar(String(e.message)).split("\n")[0].slice(0, 80)}): acerte com registrar-download.mjs teto --acertar=<usados>.`); }
    try {
      appendFileSync(join(cacaDir, "manifest.jsonl"), JSON.stringify({ ts: new Date(agora()).toISOString(), plataforma: "shutterstock",
        via: "api-oficial", evento: "licenca", tipo, id_na_fonte: String(id), licenca: sub.license, subscription_raiz: raizPote.slice(0, 8) }) + "\n");
    } catch (e) { erro(`  ! a licenca saiu mas o registro dela no manifest NAO gravou (${String(e.message).slice(0, 60)}).`); }
    const nomeOrig = `shutterstock_${id}.${T.ext}`;
    const arq = join(cacaDir, nomeOrig);
    const parte = `${arq}.part`;
    try {
      // [porte Regie] em fluxo: um .mov 4K não cabe inteiro na memória
      const r = await fetch(primeiro.download.url);
      if (!r.ok || !r.body) throw new Error(`HTTP ${r.status}`);
      await pipeline(Readable.fromWeb(r.body), createWriteStream(parte));
      renomearComRetentativa(parte, arq);
    } catch (e) {
      rmSync(parte, { force: true });
      erro(`x download ${raspar(e.message)} — a licenca foi gasta e o arquivo nao veio. A URL de download da licenca`);
      erro(`  vale por um tempo: repita o download pelo historico de licencas da conta.`);
      sair(6);
    }

    // ⚠️ EXISTÊNCIA NÃO É PROVA: um arquivo de 0 byte também "existe".
    const bytes = statSync(arq).size;
    let medida = {};
    try { medida = await medir(arq); } catch (e) { log(`  ! nao medi o arquivo: ${String(e.message).split("\n")[0]}`); }
    const mb = (bytes / 1048576).toFixed(1);
    log(`\n  licenciado e salvo: ${relPosix(raiz, arq)} (${mb} MB, ${medida.resolucao || "resolucao nao medida"}) | restam ${restam - 1} no pote`);
    if (bytes < 51200) log(`  ! menos de 50 KB — desconfie antes de usar.`);

    // A procedência entra no manifest ao lado do original — o mesmo formato de linha do buscar-midia
    // do motor e do registrar-download, para o _instalar-lote e o qc-procedencia lerem igual.
    const dim = assets.huge_jpg || assets["4k"] || {};
    const linha = {
      ts: new Date(agora()).toISOString(), plataforma: "shutterstock", via: "api-oficial",
      tipo, busca: opt("busca", null), arquivo: relPosix(projDir, arq), id_na_fonte: String(id),
      // ⚠️ A rota do site NÃO é a mesma para os três: as formas certas são as do `urlItem` do
      // baixar.mjs do estúdio, e o link importa: é ele que o crédito e a auditoria seguem.
      url: urlDoItem(tipo, id),
      conta: `propria do dono (${cfg.conta})`,
      licenca: sub.license, subscription_raiz: raizPote.slice(0, 8),   // [porte Regie] sem o id inteiro da assinatura no git
      medido: { ...medida, declarado_pela_api: dim.width ? `${dim.width}x${dim.height}` : null },
    };
    try { appendFileSync(join(cacaDir, "manifest.jsonl"), JSON.stringify(linha) + "\n"); }
    catch (e) { log(`  ! manifest nao gravou (${String(e.message).slice(0, 60)}) — o arquivo ESTA em disco`); }

    /**
     * ⛔ O DEGRAU QUE FALTAVA — SEM ELE O ARQUIVO NÃO EXISTE PARA A PRODUÇÃO [PESQ-102].
     *
     * Baixar não é entregar. Quem promove `FALTA→asset` olha `_media/<tipo>/<cena>/`, a cobertura
     * conta `_media/`, a arte classifica pela âncora. Arquivo parado no rascunho **não falha, não
     * alarma e não aparece**. Medido no estúdio (`rosto-da-formiga`): 25 clipes 4K com manifest,
     * parados nove dias. Por isso este bloco instala e declara na pasta da cena.
     */
    const destino = join(destDir, nomeFinal);
    const declaracao = {
      arquivo: nomeFinal,
      fonte: `Shutterstock — stock ${tipo === "foto" ? "photo" : tipo === "audio" ? "audio" : "video"} (conta propria do dono, via API oficial)`,
      url: urlDoItem(tipo, id),
      id: String(id),
      conta: `propria do dono (${cfg.conta})`,
      licenca: `Shutterstock — licença de assinatura (${sub.license}), uso comercial em produção audiovisual`,
      licenca_origem: "licenciamento_pela_api",   // [porte Regie] a licença saiu de um POST /licenses que respondeu com download
      busca: opt("busca", null),
      cena: cenaSegura,
      arquivo_original: nomeOrig,
      resolucao: medida.resolucao || (dim.width ? `${dim.width}x${dim.height}` : null),
      baixado_em: linha.ts,
      medido: { resolucao: medida.resolucao ?? null, codec: medida.codec ?? null, bytes, sha256: medida.sha256 ?? null },
      declarado_por: { quem: "api-oficial.mjs", manifesto: relPosix(projDir, join(cacaDir, "manifest.jsonl")) },
    };
    // [porte Regie] pôr o arquivo na cena e declarar: um passo só, sob a trava do _PROCEDENCIA.json. Se
    // a declaração recusar, o arquivo NÃO vai para a cena (o original licenciado fica no _caca).
    let instalado = false;
    let r;
    try {
      r = declarar(destDir, declaracao, {
        lerProcedencia, renomearComRetentativa, comTrava, quem: "api_oficial",
        antes: () => {
          if (existsSync(destino)) throw Object.assign(new Error(`ja existe ${relPosix(raiz, destino)} (outro processo instalou esse nome agora)`), { code: "JA_EXISTE" });
          copyFileSync(arq, destino);
          instalado = true;
        },
      });
    } catch (e) {
      if (instalado) rmSync(destino, { force: true });
      erro(`x a procedencia NAO foi declarada e o arquivo NAO ficou na cena: ${String(e.message).split("\n")[0]}`);
      erro(`  O original licenciado esta em ${relPosix(raiz, arq)}.`);
      sair(12);
    }
    if (!r.ok) { erro(`x a procedencia NAO foi declarada e o arquivo NAO foi para a cena: ${r.porque}. O original esta em ${relPosix(raiz, arq)}.`); sair(12); }
    log(`  instalado em out/${proj}/_media/${T.pasta}/${cenaSegura}/${nomeFinal}`);
    log(`  procedencia declarada em out/${proj}/_media/${T.pasta}/${cenaSegura}/_PROCEDENCIA.json`);
    if (tipo === "video") log(`  video: confira a REND-47 (30 fps, all-intra) com  node scripts/normalizar-footage.mjs ${proj} --dry`);
    log("");
    return 0;
  } catch (e) {
    if (e instanceof Saida) return e.codigo;
    throw e;
  }
}

/** Para quem importa: o mesmo principal. */
export const cli = (argv) => principal(argv);

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 1; }
}
