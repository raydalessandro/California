# Convenzioni progetto — California

> **Decisioni autoriali specifiche del progetto.** Questi sono i Layer 2 del kit (vedi `ARCHITETTURA.md` §7.5 dello starter kit): le particolarità di *questa* opera che si aggiungono alle convenzioni generali del kit (`_convenzioni/` del kit) e ai vincoli di mestiere delle skill.

---

## 1. Lessico canonico

| Concetto kit | Forma canonica California | Note |
|---|---|---|
| unità narrativa | **capitolo** | id: `cap_NN` (es. `cap_01`, `cap_07`) |
| unità di pagina-prodotto | **scena narrativa** | id: `cap_NN_sM` (es. `cap_01_s2`); il romanzo è puro testo, niente "pagina libro fisica" |
| medium | `testo` | romanzo lungo, ~30+ pagine, 15-20 capitoli |
| target audience | adulti / young adult | linguaggio adulto, temi adulti, niente eufemismi |

## 2. Ontologia: EAR Nano Kernel

Il progetto opera dentro l'ontologia **EAR (Emergent Attribute Reality)**, dichiarata in `_convenzioni_progetto/EAR_NANO_KERNEL.md`.

Conseguenze operative per gli agenti:

- I **codici Σ** (es. `Σ₄₂₃₊ Narratore`) sono parte del campo `voice.sigma_mix` dei personaggi. L'agente prosa li interpreta secondo §MATRIX e §PROPOSITIONS del kernel.
- I parametri stilistici (`Σ_Δ`, `Σ_⇄`, `Σ_⟳`) della carta voce hanno significato preciso (Δ=distinzione, ⇄=relazione, ⟳=processo) e sono valori target con tolleranza.
- Il pattern di **risonanza** (∿) si applica all'analisi delle scene: una scena è "risonante" se le 4 fasi (⊙ gate, ∞ spiral, ◇ node, ↻ seed) sono co-presenti.

L'orchestratrice e gli agenti foreground devono leggere il kernel **una volta al boot**, dichiarare "operating within EAR ontology" come da §ACTIVATION del kernel, e poi operare.

## 3. Gerarchia di precedenza fra fonti

Quando due fonti dicono cose diverse, vale quest'ordine (la più alta vince):

1. **`_documenti_anima/carta_voce.md`** (autoriale, decreta lo stile)
2. **`_documenti_anima/pattern_ai_da_bandire.md`** (vincoli negativi inderogabili)
3. **`story_graph.json`** (canone narrativo: cosa è successo, chi c'era, cosa hanno detto)
4. **`catalogo/<id>/scheda.md`** (dettagli entità: descrizione, vincoli, frasi-codice)
5. **`_documenti_anima/bibbia.md`** (canone-mondo)
6. **`_documenti_anima/framework_strutturale.md`** (struttura archi)

I capitoli già scritti (`narrazione_fattuale/cap_NN.md`) sono **fatti consegnati**: per i capitoli da `cap_01` a `cap_07` valgono come canone immutabile, per i capitoli futuri sono "consegna autoriale" da distillare in Fase 03.

## 4. Marker testo finale

Pattern del kit, adattato per romanzo:

```html
<!-- @scena cap1_s2 | @cast [milo, vera, sam] | @location california.cucina | @durata ~8min -->
```

Solo marker scena (livello narrativo). Niente marker pagina-prodotto: il romanzo non ha pagine fisiche fisse.

## 5. Quote tracker — soglie globali

Frasi-codice e parole-virus con vincoli quantitativi sull'opera intera (15-20 capitoli):

| Espressione | Personaggio | Max nell'opera | Note |
|---|---|---|---|
| `"Definisci [X]"` | Vera, Milo | ~6-8 totali | tic ricorrente, non saturare |
| `"probabilmente"` | Jonas, Milo, Sam | ~12-15 totali | parola-virus contagiosa, gradiente |
| `"abbastanza"` / `"doveva esserlo"` | Milo | ~5-6 totali | filosofia del personaggio |
| `"lei ce la fa"` | Jonas (sulla nave) | ~3-4 totali | esclusivo Jonas |
| `"Diffondere sorrisi nell'universo"` | Milo | 1-2 totali | frase-codice forte |
| `"California Love"` (riferimento canzone/file mp3) | varie | ~3 totali | non saturare il leitmotiv |
| `"si fermò sulla soglia"` (Sam) | narrazione | ~3-4 totali | gesto-codice di Sam |

L'agente prosa controlla quote_tracker prima di usare una frase-codice. Se il limite è raggiunto, **non la usa**: trova altra forma.

## 6. Vincoli su scene e capitoli

- Lunghezza tipica capitolo: 800-1500 parole (capitoli intimi) / 1500-2500 (capitoli con eventi esterni). Cap.5 e Cap.7 sono i picchi.
- Scene per capitolo: 2-5 di solito. Cap.1 ne ha 3-4.
- Niente capitoli > 3000 parole salvo cap. di climax.
- Niente prologo, niente epilogo. Si entra dentro, si esce.

## 7. Style anchors (vedi `carta_voce.md` per il dettaglio)

Tic stilistici **canonici** del progetto, da preservare:

- **Spezzature visive**: paragrafi brevi, accapo frequente per ritmo.
- **Dialogo asciutto**: tag minimali (`disse Milo`, `chiese Vera`), niente tag elaborati (`mormorò pensieroso`).
- **Aside autoriale corto**: una frase-commento ogni tanto, dal narratore-onnisciente che conosce i personaggi (es. *"dopo dieci anni, vedeva tutto"*).
- **Asterischi `*lei*` `*California*`**: enfasi/voce interna, non corsivo letterario. Usati con misura.
- **Frasi nominali**: spesso. *"Mattino. Quattordici ore a Kepler-7. Caffè all'olio."*
- **Trapassato remoto e infiniti narrativi**: alternati al presente storico per stratificare i tempi della narrazione.

## 8. Stato di partenza (al momento dell'import nel kit)

- Capitoli scritti e canonici: 7/15-20 attesi (~35%)
- Parole scritte: ~7600
- Capitolo corrente in progress: **cap.7 → cap.8** (next)
- Riferimento ultimo stato: `STATO_PROGETTO.md` (importato da CHECKPOINT v7)

## 9. Backup chain canonica (Fase 02 import)

```
story_graph.json.pre_import_california_v1.backup.json
```

Generato al primo bootstrap. Canonico (committato). I successivi bumps schema generano backup secondo convenzione kit (`<file>.pre_<scope>.backup.<ext>`).

## 10. Cosa NON è nel canone (e va creato in chat dedicate)

- **`_documenti_anima/carta_voce.md`** — placeholder. Va popolato analizzando i capitoli scritti (1-7) in chat dedicata. Skill: `analista_voce` (da scrivere) oppure dialogo orchestratrice ↔ autore.
- **`_documenti_anima/pattern_ai_da_bandire.md`** — placeholder. Va popolato con i pattern stilistici **da NON usare** (gerundi descrittivi, triadi, "piano piano", moralizzazione esplicita, ecc.). Si scrive a mano o si deriva con skill dedicata.
