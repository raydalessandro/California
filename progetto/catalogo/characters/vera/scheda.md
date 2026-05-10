---
id: vera
name: Vera
famiglia: personaggio
sottotipo: protagonista
tipo_grafo: umano
ruolo_saga: "pilota e navigatrice della California; precisione contro il caos; in cap.7 prende il comando per la prima volta"
status: provvisorio
ultima_modifica: 2026-05-10
fonti:
  - 'progetto/story_graph.json#entities.characters.vera'
  - 'progetto/glossario_consegna.json#entities.characters.vera'
appare_in_storie: ["cap_01", "cap_03", "cap_04", "cap_05", "cap_06", "cap_07"]
---

# Vera

> **Stato compilazione:** body provvisorio derivato da `story_graph.json` + `glossario_consegna.json`. Sezioni visuali (aspetto, palette) sono derivazione autoriale da rifinire col vecchio grafo California (in arrivo).

## Identità (sintesi)

**Ruolo nel progetto:** pilota e navigatrice della California; precisione contro il caos; in cap.7 prende il comando per la prima volta.

**Tipo:** umano. **Categoria:** protagonista. **Età:** 35.

[Sintesi 3-5 righe — da rifinire dopo importazione vecchio grafo.]

## Aspetto / forma

35, capelli scuri tirati indietro pratico, occhi affilati e focalizzati, niente trucco, mascella decisa

## Abbigliamento / stato d'uso

**Firma esteriore (provvisoria):** tuta da pilota color carbone, mezza zip, catenina sottile al collo

**Varianti permesse:** _da definire._

## Espressione / comportamento

domande dirette invece di affermazioni, silenzio come comunicazione, sarcasmo come affetto, quando parla, tutti ascoltano

## Palette / atmosfera

carbone, ciano cabina pilotaggio, acciaio freddo, riflessi blu

## Contesto e ambientazioni ricorrenti

Appare in: cap_01, cap_03, cap_04, cap_05, cap_06, cap_07.

## Coerenza cross-scena (cose che NON cambiano)

- non prenderebbe decisioni impulsive
- non direbbe mai 'mi fido ciecamente'

## Variabilità ammessa

Variazioni di modalità sotto trigger (vedi "Voce" sotto).

## Cliché da evitare

- Glamour da modello.
- Posture da action hero.
- Tecnologia futuristica visibile (chrome, ologrammi).
- Uniformi militari pulite.
- (Specializzare con `pattern_ai_da_bandire.md` quando compilato.)

## Voce e frasi codificate

**Registro:** precisa, poche parole, dirette

**Frasi-codice canoniche** (inalterabili, citate dove indicato dal brief):

- «Definisci dormire»
- «Definisci esplode»
- «Svegliatemi se qualcosa esplode»
- «Fuoco. Decompressione. Jonas che canta.»
- «Sto pensando a dopo Kepler-7»
- «C'è sempre un dopo. Questo è il problema.»
- «Credi ancora che sia giusto?»
- «Una nave non è viva. È metallo, circuiti e speranze mal riposte.»
- «Gente stanca che fa scelte discutibili.»

**Modalità di comunicazione:**

- domande dirette invece di affermazioni
- silenzio come comunicazione
- sarcasmo come affetto
- quando parla, tutti ascoltano

**Cosa NON dice mai / non farebbe mai:**

- non prenderebbe decisioni impulsive
- non direbbe mai 'mi fido ciecamente'

**Triggers (cambi di modalità):**

- *stress*: si chiude, controlla tutto
- *intimità*: sarcasmo gentile
- *pericolo*: freddissima, efficiente


## Arco narrativo

dubita della missione (non del carico, del rischio); deve scegliere se restare; Membranista cresce, poi forse cede. Cap.7: ha preso comando, ha scelto sacrificio.

## Σ mix (mix comportamentale)

- **DOM**: `Σ₁₃₃₊` (Cartografo) — peso 0.5
- **SEC**: `Σ₃₁₃₊` (Membranista) — peso 0.35
- **LAT**: `Σ₂₂₃₊` (Networker) — peso 0.15


## Storie / scene di apparizione

- cap_01: _ruolo da distillare_
- cap_03: _ruolo da distillare_
- cap_04: _ruolo da distillare_
- cap_05: _ruolo da distillare_
- cap_06: _ruolo da distillare_
- cap_07: _ruolo da distillare_

## Disallineamenti / domande aperte

_(da popolare durante distillazione retroattiva cap.1-7)_

## Riferimenti puntuali (citazioni dirette dalle fonti)

- **"Voce e frasi codificate"**: travaso 1:1 da `progetto/story_graph.json#entities.characters.vera.voice`
- **"Σ mix"**: travaso 1:1 da `progetto/glossario_consegna.json#entities.characters.vera.sigma_mix`
- **"Arco narrativo"**: travaso 1:1 da `progetto/glossario_consegna.json#entities.characters.vera.arc_summary`
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

CHARACTER: Vera (vera)
ROLE: pilota e navigatrice della California; precisione contro il caos; in cap.7 prende il comando per la prima volta

PHYSICAL: 35, woman, sharp focused eyes, dark hair pulled back practical, no makeup, jaw set

OUTFIT: charcoal pilot jumpsuit zipped halfway, a thin chain at the neck

EXPRESSION / POSTURE: precise, contained — the kind of person who answers a feeling with a question

PALETTE / MOOD: carbone, ciano cabina pilotaggio, acciaio freddo, riflessi blu
VOICE HINTS (do not render as text, use to inform expression and posture):
- Definisci dormire
- Definisci esplode
- Svegliatemi se qualcosa esplode

VIEW: portrait, head-and-shoulders (or three-quarter), cinematic film still, shallow depth of field.

Aspect ratio suggestion: 3:4 (portrait).
```

