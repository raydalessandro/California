# Deploy Vercel — California (cruscotto editoriale)

> Istruzioni passo-passo per deployare il cruscotto `web/` su Vercel. Il primo deploy mostrera' una UI quasi vuota (placeholder JSON validi ma nessuna entita'/unita' nel grafo); si riempira' man mano che si eseguono i tool della pipeline (bootstrap_graph, build_catalog_index, ecc.).

---

## 1. Crea progetto Vercel

1. Vai su https://vercel.com/new
2. **Import Git Repository** → seleziona `raydalessandro/California`
3. Branch: `claude/setup-project-files-nQjRz` (per anteprima) oppure `main` (quando mergiato)

## 2. Configurazione progetto

| Campo | Valore |
|---|---|
| **Framework Preset** | Next.js (auto-detect) |
| **Root Directory** | `web` |
| **Build Command** | `npm run build` (default) |
| **Output Directory** | `.next` (default) |
| **Install Command** | `npm install` (default) |
| **Node.js Version** | 20.x o superiore |

## 3. Environment Variables

Aggiungi in Vercel → Settings → Environment Variables:

| Nome | Valore | Note |
|---|---|---|
| `REPO_ROOT` | `../progetto` | Path relativo a `web/`. Punta alla cartella `progetto/` con grafo, catalogo, testi. |
| `NEXT_PUBLIC_IMAGE_BASE` | (lasciare vuoto) | Solo se userai un CDN esterno per le immagini. Default: serve da `web/public/visual/`. |

> Le altre env vars (`GRAPH_PATH`, `CATALOG_INDEX_PATH`, `TESTI_FINALI_DIR`, ecc.) hanno default sensati derivati da `REPO_ROOT` e non servono.

## 4. Deploy

Click **Deploy**. Il build esegue in ordine:

1. `npm install`
2. **`prebuild`** (script automatico):
   - `copy-data.mjs` → copia `progetto/catalogo_index/data/entities.json` in `web/public/data/`
   - `build-storie.mjs` → genera `storie.json` dai 7 capitoli in `progetto/testi_finali/`
   - `build-orchestra-data.mjs` → genera `orchestra.json` dal `progetto/story_graph.json`
3. `next build`

Tempo atteso: ~2-3 minuti.

## 5. Cosa vedere al primo deploy

- **`/`** — home cruscotto col titolo "California — Romanzo, fantascienza cargo, smuggling"
- **`/catalogo`** — vuoto ("0 entita'") — si riempira' dopo bootstrap_graph + build_catalog_index
- **`/orchestra`** — vuoto ("0 unita'") — si riempira' dopo bootstrap_graph
- **`/storie`** — popolato con i 7 capitoli scritti (parsing diretto dai .md di `testi_finali/`). Le pagine mostrano i marker @hook/@subhook se presenti, altrimenti la prosa raw.

## 6. Caricare immagini

Le immagini esplorative vanno in `web/public/visual/<categoria>/<id>/<file>.jpg` (committate sul repo). Il path nel JSON catalogo o nei marker `@image` deve essere relativo alla root del repo, es. `visual/personaggi/vera/vera_v1.jpg`. Il componente UI le risolve via `imageUrl()` che antepone `NEXT_PUBLIC_IMAGE_BASE` (vuoto = serve dal `public/` Vercel).

Per i prompt da generare con Midjourney/Imagine: vedi `progetto/visual/PROMPT_IMMAGINI_INIZIALI.md`.

## 7. Re-deploy automatico

Ogni push sulla branch deployata triggera un nuovo build. Quando si esegue il bootstrap del grafo o si popola il catalogo, basta committare i JSON aggiornati in `progetto/` e Vercel rigenera la UI.

---

## Troubleshooting

- **Build fallisce su `copy-data`**: verifica che `progetto/catalogo_index/data/entities.json` esista (placeholder o reale). Il file e' richiesto.
- **Build fallisce su `build-orchestra-data`**: verifica che `progetto/story_graph.json` esista (placeholder o reale).
- **`/storie` vuoto**: verifica che `progetto/testi_finali/cap_*.md` siano committati e abbiano frontmatter YAML con `sid`.
- **Immagini 404**: il path nel JSON deve corrispondere a un file in `web/public/<path>`. Esempio: `visual/personaggi/vera/vera_v1.jpg` → file in `web/public/visual/personaggi/vera/vera_v1.jpg`.
