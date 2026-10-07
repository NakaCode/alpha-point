# Vestir o ilustrador em outro canal

O ofício e a habilidade ensinam construção, encenação e movimento. O pedido contém a cena. A roupa contém escolhas do canal. Trocar a roupa não exige mudar o ofício nem o contrato.

O emissor fornece `pedido.roupa.arquivo` e seu SHA-256. A roupa JSON obedece a `contratos/roupa-ilustrador.schema.json`, aponta para os documentos autoritativos e para o CSS de tokens. Referências são relativas à raiz do consumidor; nenhuma pasta Alpha é implícita.

Para preparar outra roupa, derive dos documentos daquele canal:

| Campo | Informação necessária |
|---|---|
| `id`, `revisao`, `idioma_tela` | Identidade e revisão; idioma que pode aparecer no vídeo |
| `documentos` | Ofício de marca, identidade, mídia e regras editoriais, todos com hash |
| `tokens_css`, `papeis_cor` | CSS existente e associação entre funções visuais e tokens; não copiar hex de outro canal |
| `tipografia` | Família/peso/tamanho por papel; piso, alvo e teto daquele consumidor |
| `palco`, `areas` | Resolução, área útil, faixa de crédito e todas as reservas, em coordenadas desse palco |
| `limites` | Unidades de informação, blocos de leitura e heróis; definição de unidade nos documentos |
| `regras` | Como citar, quando ilustrar ou usar registro real, efeitos permitidos e convenções do canal |
| `executor_padrao` | Executor habilitado pelo perfil; atualmente `html-svg-js` |

Não arredonde áreas seguras a percentuais nem escale fontes automaticamente entre formatos. Um formato vertical precisa de regras e composição próprias. Se os documentos não decidirem uma regra essencial, o emissor resolve essa lacuna antes do trabalho dependente.

Valide a roupa, emita um novo pedido referenciando seu hash e execute um teste no consumidor do canal. Confira resolução, pixels, fontes, créditos e áreas seguras novamente. A aceitação de dois JSONs pelo validador demonstra independência estrutural de marca; não demonstra que duas direções artísticas foram aprovadas.

O perfil Alpha fornecido na integração é opcional. Seu exemplo não deve ser renomeado como nova marca sem revisar todos os valores e documentos. Fontes, mídia e direitos não se transferem por trocar o nome do canal.
