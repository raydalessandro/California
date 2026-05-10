# Originali #AILA:1.0 — California

> Documenti **autoriali originali** del progetto California, formato `#AILA:1.0` (sintassi pre-kit). Conservati come **audit trail / fonte storica**: dal qui sono stati derivati i documenti del kit (`bibbia.md`, `framework_strutturale.md`, `archi_narrativi.md`, `glossario_consegna.json`).
>
> **Non modificare.** Sono fonte primaria per controllo coerenza e per future re-derivazioni.

## Contenuto

| File | Tipo | Cosa è |
|---|---|---|
| `DNA.md` | `@type: DNA.STORIA` | Identità del progetto: meta, premessa, personaggi (Σ-mix, voce, triggers, archi, vincoli), relazioni, mondo, stile base, struttura prevista a 3 atti, semi iniziali. È il "cuore" del progetto. |
| `GRAFO.md` | `@type: GRAFO.STORIA` | Mappa completa del mondo narrativo come emerso dai cap 1-3 (poi cap 5 e altri): personaggi (con tratti mostrati per capitolo), luoghi (interni nave, Kepler-7, Terra), oggetti significativi, timeline, relazioni, fili narrativi, temi attivi, echi e risonanze. Granulare per capitolo. |
| `CHECKPOINT.md` | `@type: CHECKPOINT` (v.7) | Stato sincronizzato post-cap.7: posizione, WAY/LAUDREUR/LIEBROBINSON (3 livelli del CHECKPOINT California), risonanze, prossima sessione. |

## Mapping verso il kit

| Sorgente AILA | Documenti kit derivati |
|---|---|
| `DNA.md` §META, §PREMESSA, §MONDO, §RELAZIONI | `progetto/_documenti_anima/bibbia.md` |
| `DNA.md` §STRUTTURA.PREVISTA, §SEMI.INIZIALI | `progetto/_documenti_anima/framework_strutturale.md` + `archi_narrativi.md` |
| `DNA.md` §PERSONAGGI (voce, Σ-mix, triggers, archi, vincoli) | `progetto/glossario_consegna.json` → `entities.characters.*` |
| `GRAFO.md` §PERSONAGGI (tratti mostrati per cap) + §LUOGHI + §OGGETTI + §FILI.NARRATIVI | `progetto/glossario_consegna.json` → `entities.locations.*`, `entities.objects.*`; arricchimento schede catalogo |
| `CHECKPOINT.md` §POSIZIONE, §LAUDREUR, §LIEBROBINSON | `progetto/STATO_PROGETTO.md` |

## Convenzione `#AILA:1.0`

Sintassi compatta autoriale pre-kit. Pattern:

- `#AILA:1.0` header con `@type`, `@storia`, `@versione`, `@ultimo.aggiornamento`
- Sezioni `## §NOME` (es. `§POSIZIONE`, `§WAY`, `§LAUDREUR`, `§LIEBROBINSON`, `§RISONANZE`)
- Markers `◉` per blocchi e `→` per voci
- Notazione `parola.parola` (con punti) per concetti compositi
- `[da definire]`, `[seme — può tornare]` per placeholder e annotazioni autoriali

Il kit usa formati machine-readable equivalenti (JSON, frontmatter YAML), ma questi originali restano la fonte canonica per ogni dubbio.
