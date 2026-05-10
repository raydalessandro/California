---
id: sam
name: Sam
famiglia: personaggio
sottotipo: protagonista
tipo_grafo: umano
ruolo_saga: "tuttofare/nuovo arrivato; specchio del lettore; arco da esterno a parte della famiglia"
status: provvisorio
ultima_modifica: 2026-05-10
fonti:
  - 'progetto/story_graph.json#entities.characters.sam'
  - 'progetto/glossario_consegna.json#entities.characters.sam'
appare_in_storie: ["cap_01", "cap_02", "cap_05", "cap_06", "cap_07"]
---

# Sam

> **Stato compilazione:** body provvisorio derivato da `story_graph.json` + `glossario_consegna.json`. Sezioni visuali (aspetto, palette) sono derivazione autoriale da rifinire col vecchio grafo California (in arrivo).

## Identità (sintesi)

**Ruolo nel progetto:** tuttofare/nuovo arrivato; specchio del lettore; arco da esterno a parte della famiglia.

**Tipo:** umano. **Categoria:** protagonista. **Età:** 23.

[Sintesi 3-5 righe — da rifinire dopo importazione vecchio grafo.]

## Aspetto / forma

23, occhi incerti, corporatura snella, capelli corti, abiti da lavoro prestati (maniche un po' lunghe)

## Abbigliamento / stato d'uso

**Firma esteriore (provvisoria):** abiti da lavoro semplici, taglie non perfette, niente firma esteriore propria ancora

**Varianti permesse:** _da definire._

## Espressione / comportamento

il 'nuovo' che vede con occhi freschi, comincia a usare 'probabilmente' come Jonas (sintomo di assorbimento), si ferma sulla soglia (gesto-codice)

## Palette / atmosfera

off-white plastica, ombre lunghe, luce calda dietro, luce fredda davanti

## Contesto e ambientazioni ricorrenti

Appare in: cap_01, cap_02, cap_05, cap_06, cap_07.

## Coerenza cross-scena (cose che NON cambiano)

- non tradirebbe chi lo ha accolto
- non direbbe 'non mi riguarda'

## Variabilità ammessa

Variazioni di modalità sotto trigger (vedi "Voce" sotto).

## Cliché da evitare

- Glamour da modello.
- Posture da action hero.
- Tecnologia futuristica visibile (chrome, ologrammi).
- Uniformi militari pulite.
- (Specializzare con `pattern_ai_da_bandire.md` quando compilato.)

## Voce e frasi codificate

**Registro:** domande più che affermazioni; osserva più di quanto parli; quando parla, spesso centra

**Frasi-codice canoniche** (inalterabili, citate dove indicato dal brief):

- «Non lo so ancora. Forse per questo sono ancora qui. Per capirlo.»

**Modalità di comunicazione:**

- il 'nuovo' che vede con occhi freschi
- comincia a usare 'probabilmente' come Jonas (sintomo di assorbimento)
- si ferma sulla soglia (gesto-codice)

**Cosa NON dice mai / non farebbe mai:**

- non tradirebbe chi lo ha accolto
- non direbbe 'non mi riguarda'

**Triggers (cambi di modalità):**

- *stress*: si ritira, guarda
- *intimità*: si apre a sorpresa
- *pericolo*: segue chi si fida


## Arco narrativo

da esterno a parte della famiglia; Networker cresce, Nomade diminuisce; trova casa. Cap.7: shift completo ("solo adesso capisco").

## Σ mix (mix comportamentale)

- **DOM**: `Σ₂₁₃₋` (Nomade) — peso 0.5
- **SEC**: `Σ₄₂₁₋` (Sincronista) — peso 0.3
- **LAT**: `Σ₂₂₃₊` (Networker) — peso 0.2


## Storie / scene di apparizione

- cap_01: _ruolo da distillare_
- cap_02: _ruolo da distillare_
- cap_05: _ruolo da distillare_
- cap_06: _ruolo da distillare_
- cap_07: _ruolo da distillare_

## Disallineamenti / domande aperte

_(da popolare durante distillazione retroattiva cap.1-7)_

## Riferimenti puntuali (citazioni dirette dalle fonti)

- **"Voce e frasi codificate"**: travaso 1:1 da `progetto/story_graph.json#entities.characters.sam.voice`
- **"Σ mix"**: travaso 1:1 da `progetto/glossario_consegna.json#entities.characters.sam.sigma_mix`
- **"Arco narrativo"**: travaso 1:1 da `progetto/glossario_consegna.json#entities.characters.sam.arc_summary`
- **"Aspetto / forma"** e **"Abbigliamento"**: derivazione autoriale provvisoria da bibbia + cap.1-7. Da rifinire col vecchio grafo California.

## Prompt Grok

```
ART STYLE — California novel:
cinematic film still, gritty hard sci-fi cargo aesthetic, lived-in industrial spaceship interiors,
warm dim ambient lighting (amber + teal practicals), analog texture, condensation on metal pipes,
scratched panels, no holographic interfaces, no sleek chrome, no clean Star Trek look.
Visual references: Firefly's Serenity, The Expanse Rocinante, Alien (Nostromo) — but warmer, familial.
Color palette: brass, oxidized copper, faded denim blue, off-white plastic, deep shadow.
Grain: 35mm film, slight halation.
NEGATIVE: chrome, sleek futuristic, glamour, model-handsome, holograms, transparent panels, military uniforms, action hero poses.

CHARACTER: Sam (sam)
ROLE: tuttofare/nuovo arrivato; specchio del lettore; arco da esterno a parte della famiglia

PHYSICAL: 23, uncertain eyes, slim build, short hair, borrowed work clothes that don't quite fit (sleeves a touch too long)

OUTFIT: simple work clothes that don't fit perfectly, no personal signature yet

EXPRESSION / POSTURE: still figuring out where they belong, captured mid-hesitation on a doorway

PALETTE / MOOD: off-white plastica, ombre lunghe, luce calda dietro, luce fredda davanti
VOICE HINTS (do not render as text, use to inform expression and posture):
- Non lo so ancora. Forse per questo sono ancora qui. Per capirlo.

VIEW: portrait, head-and-shoulders (or three-quarter), cinematic film still, shallow depth of field.

Aspect ratio suggestion: 3:4 (portrait).
```

