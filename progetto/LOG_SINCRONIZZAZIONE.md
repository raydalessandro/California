# LOG SINCRONIZZAZIONE — California

> **File append-only.** Trail di tutte le sincronizzazioni significative del progetto. Mai si rimuovono entry. Formato canonico:
>
> ```
> ---
> [<ISO datetime>] [<chi>] [<categoria>]
>
> <descrizione 1-N paragrafi>
> ```
>
> Categorie: `IMPORT`, `BOOTSTRAP`, `WRITE_UNIT`, `CATALOG`, `BRIEF`, `PROSA`, `AUDIT`, `BACKUP`, `DECISION`, `MIGRATION`.

---

## [2026-05-10T16:20:00Z] [orchestratrice] [IMPORT]

**Evento:** Import iniziale di California nel kit.

Origine: documenti autoriali in formato `#AILA:1.0`:
- `DNA.md` (280 righe): genere, premessa, mondo, 4 personaggi con Σ-mix EAR, struttura 3 atti, semi iniziali, stile base
- `GRAFO.md` (380 righe): personaggi con tratti per capitolo, frasi chiave, oggetti significativi, timeline, relazioni, fili narrativi, temi attivi, echi
- `CHECKPOINT.md` (120 righe, versione 7): posizione corrente cap.7, schema WAY/LAUDREUR/LIEBROBINSON

Stato pre-import: 7 capitoli scritti (~7600 parole, ~35% dell'opera), versione autoriale finale.

**Conversione applicata:**
1. `DNA.md` §META + §PREMESSA + §MONDO + §RELAZIONI → `_documenti_anima/bibbia.md`
2. `DNA.md` §STRUTTURA.PREVISTA + §SEMI.INIZIALI → `_documenti_anima/framework_strutturale.md`
3. `DNA.md` §SEMI.INIZIALI + `GRAFO.md` §FILI.NARRATIVI → `_documenti_anima/archi_narrativi.md`
4. `DNA.md` §PERSONAGGI + `GRAFO.md` §PERSONAGGI/§LUOGHI/§OGGETTI → `glossario_consegna.json`
5. `CHECKPOINT.md` v7 → `STATO_PROGETTO.md` (mantenuto schema WAY/LAUDREUR/LIEBROBINSON come pattern progetto)
6. `EAR_NANO_KERNEL_AILA_v1_0.md` → `_convenzioni_progetto/EAR_NANO_KERNEL.md` (riferimento ontologico)
7. Convenzioni progetto-specifiche → `_convenzioni_progetto/convenzioni_california.md`
8. Capitoli `01.md` … `07.md` → `narrazione_fattuale/cap_NN.md` + `testi_finali/cap_NN.md`

**Cosa NON è stato compilato:**
- `_documenti_anima/carta_voce.md` (placeholder — da scrivere in chat dedicata)
- `_documenti_anima/pattern_ai_da_bandire.md` (placeholder — da scrivere in chat dedicata)
- `story_graph.json` (verrà generato da `bootstrap_graph` come passo successivo)
- `catalogo/<id>/scheda.md` (verranno generate da `promote_entities --bootstrap-catalog`)

**Decisioni autoriali registrate:**
- Medium: `testo` (romanzo lungo, niente illustrazioni canoniche; immagini opzionali esplorative)
- Lessico canonico: `unità narrativa` = `capitolo`, `scena narrativa` interna al capitolo, niente `pagina-prodotto`
- Marker testo finale: solo `@scena`, niente `@pagina_prodotto`
- Estensioni schema: `voice.vincoli_negativi`, `voice.triggers`, `entities.characters.<id>.sigma_mix`, `arc_summary`, `quote_tracker.recurring_phrases`
- Quote tracker iniziale: 7 frasi-codice/parole-virus tracciate con limiti per l'opera intera

**Pending immediato:**
1. Compilare `carta_voce.md` (chat dedicata)
2. Compilare `pattern_ai_da_bandire.md` (chat dedicata)
3. Eseguire `bootstrap_graph` per generare `story_graph.json` dal glossario
4. Eseguire `promote_entities --bootstrap-catalog` per generare schede embrionali
5. (opzionale) distillazione retroattiva cap.1-7 per popolare livello medio del grafo
6. Brief + prosa cap.8

---
