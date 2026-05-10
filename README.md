# California_kit — kit + progetto California pre-caricato

Questa è una **zip operativa**: il kit della pipeline narrativa **già configurato** col progetto California pre-importato. Pronto per Claude Code.

> **NOTA**: lo starter kit "vergine" (riusabile per qualsiasi progetto) sta in `_starter_kit.zip` separato. Questo `California_kit.zip` è un'**istanza** del kit, specializzata per il romanzo California di Ray.

---

## Cosa è dentro

```
California_kit/
├── README.md                ← questo file (cosa è, come si parte)
├── README_KIT.md            README originale del kit (riferimento generale)
├── ARCHITETTURA.md          architettura del kit (vedi una volta a freddo)
├── CLAUDE.md                istruzioni per Claude Code (orchestratrice)
├── .mcp.json                ← config server MCP per California (path a progetto/*)
├── .gitignore
│
├── _convenzioni/            convenzioni trasversali del kit (7 documenti)
├── _skills/                 7 skill agente IA Layer 0
├── _scripts/                14 script Python idempotenti + 4 audit
├── _fasi/                   materiali per le 7 fasi (02-06 popolate)
├── _agenti/                 pattern agenti foreground + template
├── _mcp_server/             server MCP kit-orchestrator (16 tool + 2 resources)
├── web/                     cruscotto editoriale Next.js
│
└── progetto/                ★ il progetto California, pre-caricato
    ├── README.md
    ├── _convenzioni_progetto/
    │   ├── EAR_NANO_KERNEL.md
    │   └── convenzioni_california.md
    ├── _documenti_anima/
    │   ├── bibbia.md
    │   ├── carta_voce.md           ⚠️ PLACEHOLDER da scrivere
    │   ├── pattern_ai_da_bandire.md ⚠️ PLACEHOLDER da scrivere
    │   ├── framework_strutturale.md
    │   └── archi_narrativi.md
    ├── glossario_consegna.json     (input di bootstrap_graph)
    ├── grafo_schema.json           (estensione del template kit per California)
    ├── narrazione_fattuale/        (cap_01.md ... cap_07.md)
    ├── testi_finali/               (cap_01.md ... cap_07.md)
    ├── catalogo/                   (vuoto, da popolare)
    ├── catalogo_index/data/        (vuoto, da popolare)
    ├── briefs/                     (vuoto, da popolare)
    ├── visual/                     (vuoto, per immagini esplorative manuali)
    ├── STATO_PROGETTO.md
    └── LOG_SINCRONIZZAZIONE.md
```

---

## Setup in 4 passi

### 1. Estrai la zip

```bash
unzip California_kit.zip -d <cartella_che_vuoi>
cd <cartella_che_vuoi>/California_kit
```

### 2. Installa il server MCP

Richiede Python ≥ 3.10:

```bash
cd _mcp_server
pip install -e .
cd ..
```

Verifica:

```bash
kit-orchestrator --help
```

### 3. (Opzionale) Setup web cruscotto

Richiede Node.js ≥ 20:

```bash
cd web
npm install
cd ..
```

Per lanciarlo:

```bash
cd web
npm run dev   # apre http://localhost:3000
```

> Il cruscotto sarà inizialmente quasi vuoto (il grafo non è ancora bootstrappato). Si riempirà man mano che esegui i tool MCP.

### 4. Apri Claude Code

```bash
claude
```

Claude Code legge automaticamente:
- `CLAUDE.md` (istruzioni orchestratrice)
- `.mcp.json` (registrazione server `kit-orchestrator`)

Conferma quando ti propone di attivare il server MCP. Da quel momento Claude ha accesso ai 16 tool del server (bootstrap_graph, write_unit_to_graph, build_brief, ecc.).

---

## Workflow consigliato per il primo test

L'orchestratrice (Claude in radice cartella) dovrebbe sapere già da `CLAUDE.md` cosa fare. Se vuoi guidarla:

### Step 1 — Compilare i due placeholder (chat dedicate)

```
"Carta voce e pattern AI sono ancora placeholder. Iniziamo con la carta voce.
Apri una sessione di analisi sui 7 capitoli scritti."
```

L'orchestratrice apre una chat dedicata (agente foreground) per analizzare i capitoli e proporre la carta voce. Tu validi.

Stesso pattern per `pattern_ai_da_bandire.md`.

### Step 2 — Bootstrap del grafo

```
"Adesso esegui bootstrap_graph"
```

L'orchestratrice lancia il tool MCP. Genera `progetto/story_graph.json` dal `glossario_consegna.json`. Il livello macro è popolato (entità, relazioni, semi iniziali).

### Step 3 — Schede catalogo embrionali

```
"Esegui promote_entities con bootstrap_catalog"
```

Genera `progetto/catalogo/<categoria>/<id>/scheda.md` per ogni entità. Schede embrionali (sezioni `_da popolare_`).

### Step 4 — Indice catalogo + dati web

```
"Esegui build_catalog_index e poi rebuild_web_data"
```

Adesso il cruscotto Next.js (se l'hai lanciato) mostra:
- catalogo entità popolato
- atlante saga con i 7 capitoli
- dashboard del progetto

### Step 5 — Distillazione retrospettiva (opzionale)

```
"Distilla retrospettivamente cap.1 nel grafo medio"
```

L'orchestratrice apre un agente foreground `distillatore` per ogni capitolo già scritto. Tu collabori. Output: nodo unità completo nel grafo (livello medio + scene interne).

Ripeti per cap.2-7.

### Step 6 — Cap.8

Quando carta voce + pattern AI + grafo distillato sono pronti:

```
"Genera il brief per cap.8"
```

E poi la sessione di scrittura prosa in agente foreground dedicato.

---

## Cose importanti da sapere

### Le due cose da fare PRIMA di scrivere cap.8

⚠️ **Carta voce** e **pattern AI da bandire** sono **placeholder** (`_documenti_anima/carta_voce.md`, `_documenti_anima/pattern_ai_da_bandire.md`).

Senza di essi, la pipeline parte ma l'agente prosa fa drift verso registro letterario standard. Vanno compilati **entrambi** prima di lanciare la prima sessione di scrittura cap.8.

### I 7 capitoli sono "consegna autoriale"

Sono stati scritti a mano fra il 2022 e il 2025-2026. Per il kit valgono come **canone immutabile**. Se durante la distillazione retrospettiva l'agente nota incoerenze, le segnala in `OUTPUT/proposte_orchestratrice.md` ma **non modifica i capitoli**.

### Le immagini sono opzionali

Il progetto è romanzo (testo puro). Le immagini, se ci sono, sono **esplorative**: l'autore le crea a mano (Imagine, Midjourney, ecc.) per aiutare la visualizzazione e la coerenza visiva. Niente generazione automatica nel kit.

### Documenti originali conservati

I tre documenti `#AILA:1.0` originali (DNA, GRAFO, CHECKPOINT) sono stati convertiti nel formato del kit ma **non sono inclusi nella zip**. Se ti servono come riferimento, li hai nel tuo archivio locale.

### Server MCP non testato runtime

Il server è sintatticamente valido (`ast.parse` passato), ma non è stato avviato in un ambiente Claude Code reale durante la costruzione del kit. **Al primo lancio possono emergere problemi di config**. Se ce ne sono, segnalami i log e sistemo.

---

## File di riferimento

| Quando | Leggi |
|---|---|
| Capire l'architettura | `ARCHITETTURA.md` |
| Capire come Claude lavora | `CLAUDE.md` |
| Capire le convenzioni del progetto California | `progetto/_convenzioni_progetto/convenzioni_california.md` |
| Capire la storia | `progetto/_documenti_anima/bibbia.md` |
| Capire la struttura archi | `progetto/_documenti_anima/framework_strutturale.md` |
| Capire i fili narrativi | `progetto/_documenti_anima/archi_narrativi.md` |
| Vedere lo stato corrente | `progetto/STATO_PROGETTO.md` |
| Trail eventi | `progetto/LOG_SINCRONIZZAZIONE.md` |
| Server MCP | `_mcp_server/README.md` |
| Web cruscotto | `web/README.md` |
