# Kit — ottimizzazioni e bug rilevati

> **Scopo**: tracker delle cose da sistemare/ottimizzare nel kit pipeline narrativa, emerse durante il primo test (progetto California, 2026-05-10). Ogni voce: **cosa**, **dove**, **gravità**, **fix proposto**.
>
> Convenzione: spuntare con `[x]` quando risolto. Aggiungere voci nuove in fondo con data.

---

## Critici (bloccano il deploy)

### [ ] storie-dashboard.json richiesto ma marcato "opzionale" nel prebuild

**Dove**: `web/scripts/copy-data.mjs` (linea ~30) vs `web/app/storie/[sid]/page.tsx` + `/storie/page.tsx`

**Problema**: `copy-data.mjs` marca `storie-dashboard.json` come `required: false` (skip + warn se manca). Ma le route `/storie` e `/storie/[sid]` lo aprono senza fallback (`readFile()` diretto in `lib/storie-dashboard.ts`). Risultato: build Vercel fallisce con `ENOENT` su `Collecting page data` se il file manca.

**Workaround applicato per California**: creato placeholder vuoto `progetto/catalogo_index/data/storie.json` (con `storie: []`). Sblocca il build, mostra UI vuota.

**Fix proposto al kit**:
- Opzione A: in `lib/storie-dashboard.ts`, gestire `ENOENT` ritornando `{generated_from: "fallback", saga_style_reference: "", n_storie: 0, storie: []}`. Più robusto, vale anche per progetti che non hanno mai compilato la dashboard.
- Opzione B: marcare `storie-dashboard.json` come `required: true` in `copy-data.mjs` e fare in modo che il bootstrap_graph generi un placeholder valido in `progetto/catalogo_index/data/storie.json`.

Preferenza: **A**. Più graceful, non sporca la repo del progetto con file finti.

---

### [ ] Capitoli "consegna autoriale" senza frontmatter, ma `build-storie.mjs` richiede `sid`

**Dove**: `progetto/testi_finali/cap_*.md` (consegna autoriale California) vs `web/scripts/build-storie.mjs`

**Problema**: lo script salta i capitoli senza `sid` nel frontmatter (`[build-storie] cap_NN.md: sid mancante, skip`). I capitoli consegnati come "canone immutabile" non hanno frontmatter — è metadati non testo, ma comunque richiede modifica al file consegnato.

**Workaround applicato per California**: aggiunto frontmatter YAML minimale (sid, slug, title, status) ai 7 capitoli, lasciando l'H1 e la prosa intatti.

**Fix proposto al kit**:
- Opzione A: `build-storie.mjs` deriva `sid` dal nome file (`cap_01.md` → `sid: cap_01`) se manca nel frontmatter. Coerente con la pratica "il file system è fonte di verità per gli id".
- Opzione B: aggiungere uno step `_scripts/normalize_storie.py` (esiste già?) che normalizza i `.md` di consegna iniettando frontmatter da convenzione.
- Opzione C: documentare nel kit (`_fasi/06_prosa/PIPELINE.md` o `_convenzioni/`) che i `.md` di consegna **devono** avere frontmatter da subito.

Preferenza: **A**. Il filename è già unico e canonico, derivare sid da lì è naturale.

---

## Medi (deploy passa, UX subottimale)

### [ ] Vercel rifiuta `_comment` nel `vercel.json`

**Dove**: `web/vercel.json` (oggi nel kit California, prima volta che si usa)

**Problema**: Vercel valida lo schema strettamente, nessuna proprietà extra. `_comment` rifiutato con "Invalid request: should NOT have additional property `_comment`".

**Workaround applicato**: rimosso `_comment`.

**Fix proposto al kit**: nessun fix codice. Documentare la convenzione (in `_convenzioni/`?) che i JSON di config third-party (Vercel, ecc.) non possono avere `_comment` o `_PLACEHOLDER_NOTE`. Solo i nostri JSON interni (entities.json, story_graph.json, ecc.) li tollerano.

---

### [ ] `REPO_ROOT` di default non corrisponde alla struttura `progetto/` del kit California

**Dove**: `web/scripts/copy-data.mjs`, `build-storie.mjs`, `build-orchestra-data.mjs` (default `REPO_ROOT = ../`).

**Problema**: il template `web/` del kit ha `REPO_ROOT = ../` di default. Funziona se i dati sono direttamente nella root del repo (`<repo>/catalogo_index/`, `<repo>/testi_finali/`). Ma il kit California ha tutto sotto `progetto/<...>/` per separare kit-orchestrator dal canone progetto.

**Workaround applicato**: `web/vercel.json` con `build.env.REPO_ROOT=../progetto`.

**Fix proposto al kit**:
- Documentare meglio il pattern. Se il "kit istanziato" mette sempre i dati in `progetto/`, allora il default `REPO_ROOT` del template `web/` dovrebbe essere `../progetto`, non `../`.
- Oppure il `vercel.json` con questa env va incluso dal kit fin da subito (parte del template).

Preferenza: la seconda. `web/vercel.json` template col `REPO_ROOT=../progetto` baked-in.

---

## Minori (note operative)

### [ ] `subtitle` vuoto in `project-config.ts` lasciava `<p>` vuoto in DOM

**Dove**: `web/app/page.tsx` riga 24-26

**Problema**: con `subtitle: ""`, il `<p>` veniva comunque renderizzato e occupava spazio (margine + padding del CSS).

**Workaround applicato**: render condizionale `{PROJECT_CONFIG.subtitle && (<p>...)}`.

**Fix proposto al kit**: portare il pattern condizionale nel template kit.

---

### [ ] `STORIE_DASHBOARD_PATH` env var non documentata in `web/README.md`

**Dove**: `web/scripts/copy-data.mjs` linea ~28-30

**Problema**: env var supportata ma non listata nella tabella env vars del README. Se un progetto ha la dashboard storie in un path custom, deve leggere lo script per scoprirlo.

**Fix proposto**: aggiungere riga alla tabella env vars in `web/README.md`.

---

## Convenzionali / di pattern

### [ ] L'orchestratrice (Claude) deve sapere di iniziare dal `vercel.json` per il deploy

**Dove**: `CLAUDE.md` § "Configurazione del progetto adottante" + `_fasi/02_congelamento_grafo/PIPELINE.md` (o nuova fase deploy)

**Problema**: il kit non dice esplicitamente all'orchestratrice di creare un `web/vercel.json` quando si prepara il deploy. Ho dovuto scoprirlo dopo il primo build fallito.

**Fix proposto**: aggiungere una sezione "Setup deploy" nel `CLAUDE.md` o un `_fasi/00_setup_deploy/` con la convenzione `vercel.json` + env vars + checklist.

---

## Voci aggiunte da test successivi

(aggiungere qui con data)
