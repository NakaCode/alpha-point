// Grava na folha de pronúncia do Juneau o que o dono confirmou de ouvido (24/09/2026):
// Gladziszewski, Kiehl, KTOO e Mat-Su.
// Mexe só em `pronuncia` do junto; o texto do roteiro não muda. Depois: montar-roteiro.mjs.
//   node aplicar-pronuncias-ouvidas.mjs <junto.json>
import fs from "node:fs";

const [, , ENT] = process.argv;
const bruto = JSON.parse(fs.readFileSync(ENT, "utf8"));
const R = bruto.result ?? bruto;
const OUVIDO = "Ouvida pelo Lucas em 24/09/2026 em áudios da KTOO, a rádio pública de Juneau";

const NOVOS = {
  "Gladziszewski (Maria Gladziszewski)": {
    como_se_fala: "glad-ih-SHEV-skee (sem som de z)",
    ipa: "/ˌɡlædɪˈʃɛvski/",
    alias_tts: "Gladyshevsky",
    confirmado: true,
    fonte: `${OUVIDO}: a apresentadora do programa em que ela é entrevistada (jpm3-27-20_02.mp3, em 0:04, 0:12 e 7:46) e o repórter Jeremy Shea (05VLADIVOSTOK-NPR-One.mp3, em 1:13 e 3:32). O Lucas ouviu "Gladyshevsky". O transcritor, quando não tinha a grafia como pista, escreveu "Gladyshevsky" e "Kladyshevsky". A hipótese anterior, glad-zih-SHEF-skee, estava errada no "z". E ela mesma se apresenta no fórum de candidatos de 2017 da League of Women Voters, transmitido pela KTOO (AssemblyCandidateForum_LeagueOfWomenVoters_2017.mp3, em 1:52, "I am Maria Gladziszewski"; o transcritor escreveu "Gladiasheski"; o Lucas ouviu e confirmou). Trechos em midia/pronuncias/trechos/.`,
  },
  "Kiehl (Jesse Kiehl)": {
    como_se_fala: "KEEL",
    ipa: "/kiːl/",
    alias_tts: "Keel",
    confirmado: true,
    fonte: `${OUVIDO}: o perfil de candidato (kiehlNPR1.mp3, em 0:42, "That man's name is Jesse Kiehl") e a entrevista no estúdio (Sen.Kiehl_.1-12-26.wav, em 0:02). O Lucas ouviu "Kíl", que rima com o inglês "feel". E ele mesmo se apresenta no fórum de candidatos de 2017 (AssemblyCandidateForum_LeagueOfWomenVoters_2017.mp3, em 6:16, "My name is Jesse Kiehl"; o transcritor escreveu "Kiel" e, depois, "Keel"; o Lucas ouviu e confirmou). Trechos em midia/pronuncias/trechos/.`,
  },
  KTOO: {
    como_se_fala: "KAY-too (a letra K e depois \"too\"; não se soletra)",
    ipa: "/ˈkeɪ.tuː/",
    alias_tts: "Kay-too",
    confirmado: true,
    fonte: `${OUVIDO}: a própria emissora no ar, com o repórter Jeremy Shea ("I'm Jeremy Shea with KTOO", 05VLADIVOSTOK-NPR-One.mp3, em 0:01) e a vinheta ("You're listening to KTOO", 26anniversary.mp3, em 0:03). O Lucas ouviu "K-tu". A hipótese anterior, soletrar K-T-O-O, estava errada. Trechos em midia/pronuncias/trechos/.`,
  },
  "Mat-Su (Mat-Su Valley)": {
    como_se_fala: "MAT-soo, com o \"su\" do nome inglês Sue (ao ouvido brasileiro, \"mat-siu\")",
    ipa: "/ˈmætˌsuː/",
    alias_tts: "Mat-Sue",
    confirmado: true,
    fonte: `Ouvida pelo Lucas em 24/09/2026 no vídeo youtube.com/watch?v=QfNUdCMCKbc, que diz "the Mat-Su" no primeiro minuto: ele ouviu "mat-siu". Nenhum dos 6 áudios da KTOO diz o nome. O "u" longo do inglês americano sai mais para a frente da boca e soa como "iu" ao ouvido brasileiro; por isso o alias é "Mat-Sue", e não "Mat-Soo".`,
  },
};

let trocados = 0;
for (const t of R.pronuncia.termos) {
  if (NOVOS[t.termo]) { Object.assign(t, NOVOS[t.termo]); trocados++; }
}
if (trocados !== Object.keys(NOVOS).length) throw new Error(`esperava ${Object.keys(NOVOS).length} termos, achei ${trocados}`);

const i = R.pronuncia.notas_tts.findIndex((n) => n.startsWith('"KTOO"'));
if (i < 0) throw new Error("nota de KTOO não achada");
R.pronuncia.notas_tts[i] = '"KTOO" → "Kay-too": a emissora diz a letra K e depois "too"; não soletrar (ouvido na própria KTOO, 24/09/2026)';
const m = R.pronuncia.notas_tts.findIndex((n) => n.startsWith('"Mat-Su Valley"'));
if (m < 0) throw new Error("nota de Mat-Su não achada");
R.pronuncia.notas_tts[m] = '"Mat-Su Valley" → "Mat-Sue Valley": o "su" do nome Sue, que o dono ouviu como "mat-siu"; o hífen pode levar a voz a ler "Mat S-U" (24/09/2026)';

fs.writeFileSync(ENT, JSON.stringify(bruto, null, 1));
console.log(`${trocados} termos confirmados; nota de KTOO trocada`);
