# California — progetto narrativo

> **Repository del progetto** (separato dal kit). Contiene canone, documenti-anima, capitoli scritti, e configurazione MCP per orchestratrice.

---

## Cosa è California

Romanzo di fantascienza (~30+ pagine, 15-20 capitoli) ambientato in una Via Lattea colonizzata. Una nave cargo (la *California*) trasporta marijuana dalla Terra alle colonie, dove l'erba è illegale ovunque tranne che sulla Terra. Quattro personaggi a bordo: Milo (capitano), Vera (pilota), Jonas (meccanico), Sam (nuovo arrivato).

Riferimenti culturali: Firefly, The Expanse, Alien (senza alieno).

**Stato corrente:** 7 capitoli scritti, ~7600 parole, ~35% del totale atteso. Il progetto è stato sviluppato in formato `#AILA:1.0` autoriale (DNA + GRAFO + CHECKPOINT) ed è in fase di import nel kit per proseguire la scrittura.

## Struttura cartella

```
progetto/
├── README.md                        questo file
├── .mcp.json                        ← config server MCP per Claude Code
│
├── _convenzioni_progetto/
│   ├── EAR_NANO_KERNEL.md           ontologia EAR (referenza per Σ-codici)
│   └── convenzioni_california.md    decisioni autoriali del progetto (lessico, quote tracker, marker, ecc.)
│
├── _documenti_anima/
│   ├── bibbia.md                    canone-mondo
│   ├── carta_voce.md                ⚠️ PLACEHOLDER — da scrivere in chat dedicata
│   ├── pattern_ai_da_bandire.md     ⚠️ PLACEHOLDER — da scrivere in chat dedicata
│   ├── framework_strutturale.md     archi, atti, ritmo macro
│   └── archi_narrativi.md           semi narrativi e debiti aperti
│
├── glossario_consegna.json          machine-readable, input di bootstrap_graph
├── grafo_schema.json                schema specializzato per California (estende kit/grafo_schema_v1)
├── story_graph.json                 ← VUOTO inizialmente, generato da bootstrap_graph
│
├── narrazione_fattuale/             cap_01.md ... cap_07.md (i 7 capitoli scritti, fonte canonica)
├── testi_finali/                    cap_01.md ... cap_07.md (copia canonizzata; cap.8+ verrà popolato dalla pipeline)
├── briefs/                          ← VUOTO inizialmente, popolato da build_brief
├── catalogo/                        ← VUOTO inizialmente, popolato da promote_entities
│   ├── personaggi/<id>/scheda.md
│   ├── luoghi/<id>/scheda.md
│   └── oggetti/<id>/scheda.md
├── catalogo_index/data/             ← VUOTO inizialmente, popolato da build_catalog_index
├── visual/                          ← VUOTO, per immagini esplorative manuali (vedi sotto)
│
├── STATO_PROGETTO.md                stato corrente (schema WAY/LAUDREUR/LIEBROBINSON dal CHECKPOINT)
└── LOG_SINCRONIZZAZIONE.md          trail append-only delle sincronizzazioni
```

## Come si lavora con questo progetto

### Setup iniziale

1. Apri il terminale in radice `California_kit/` (la cartella estratta dalla zip)
2. Installa il server MCP:
   ```bash
   cd _mcp_server && pip install -e . && cd ..
   ```
3. (Opzionale) Setup web cruscotto:
   ```bash
   cd web && npm install && cd ..
   ```
4. Apri Claude Code:
   ```bash
   claude
   ```
5. Claude Code rileva `.mcp.json` in radice e propone l'attivazione del server `kit-orchestrator`. Conferma.

### Workflow per il prossimo capitolo (cap.8)

1. **Compilare i due placeholder** (`carta_voce.md` + `pattern_ai_da_bandire.md`) in chat dedicate. Vedi note nei file stessi.
2. **Eseguire bootstrap del grafo**:
   ```
   (chiedi all'orchestratrice via Claude Code)
   "Esegui bootstrap_graph"
   ```
   Genera `story_graph.json` dal `glossario_consegna.json`.
3. **Promuovere entità + creare schede embrionali**:
   ```
   "Esegui promote_entities --bootstrap-catalog"
   ```
4. **(Opzionale) Distillazione retroattiva** dei capitoli 1-7 per popolare il livello medio del grafo. Ogni capitolo in chat dedicata (agente foreground `distillatore`).
5. **Scrivere il cap.8**:
   - Brief generato meccanicamente: `build_brief --unit cap_08`
   - Prosa scritta in chat dedicata (agente foreground `agente_prosa`)
   - Audit drift al termine
   - Integrazione nel canone

## Immagini

Il progetto **abilita** i campi visual del catalogo (descrizioni scena, palette emotiva, prompt immagine), ma **non genera immagini automaticamente**. Le immagini sono **opzionali ed esplorative**:

- L'autore le crea a mano (Imagine, Midjourney, qualunque servizio)
- Le posiziona in `visual/<categoria>/<id>/` seguendo la convenzione del kit
- La UI le mostra nel catalogo e nelle scene
- Servono per **aiutare la visualizzazione** durante la scrittura, mantenere la coerenza visiva fra capitoli (es. una California rappresentata sempre con gli stessi tratti chiave)

Niente è bloccante senza immagini: la pipeline funziona con o senza.

## Riferimenti

- **Convenzioni progetto**: `_convenzioni_progetto/convenzioni_california.md`
- **Ontologia EAR**: `_convenzioni_progetto/EAR_NANO_KERNEL.md`
- **Stato pipeline**: `STATO_PROGETTO.md` + `LOG_SINCRONIZZAZIONE.md`
- **Architettura kit**: `../ARCHITETTURA.md` (nel kit globale)
- **Server MCP**: `../_mcp_server/README.md`

## Note di provenienza

Origine documenti autoriali (formato `#AILA:1.0`):
- `DNA.md` — DNA del progetto
- `GRAFO.md` — grafo delle entità con tratti per capitolo
- `CHECKPOINT.md` v7 — stato corrente

Convertiti il **2026-05-10** nel formato del kit (vedi `LOG_SINCRONIZZAZIONE.md` per dettagli completi).
