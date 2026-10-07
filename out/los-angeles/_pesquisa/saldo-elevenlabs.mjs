// saldo-elevenlabs.mjs — imprime o saldo de créditos da conta da ElevenLabs (limite − usado), só GET, sem gasto.
// A chave se lê pelo leitor da pré-v1 e nunca se imprime.   node out/los-angeles/_pesquisa/saldo-elevenlabs.mjs
const { lerChave } = await import("file:///C:/projetos/regie-v1/src/lib/chaves.mjs");
const s = await (await fetch("https://api.elevenlabs.io/v1/user/subscription", { headers: { "xi-api-key": await lerChave("ELEVENLABS_API_KEY") } })).json();
console.log(JSON.stringify({ quando: new Date().toISOString(), restante: s.character_limit - s.character_count, usado: s.character_count, limite: s.character_limit }));
