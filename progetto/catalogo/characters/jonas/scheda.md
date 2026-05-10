---
id: jonas
name: Jonas
famiglia: personaggio
sottotipo: protagonista
tipo_grafo: umano
ruolo_saga: "meccanico, cuore tecnico; parla alla nave come a una persona; ottimista cronico"
status: provvisorio
ultima_modifica: 2026-05-10
fonti:
  - 'progetto/story_graph.json#entities.characters.jonas'
  - 'progetto/glossario_consegna.json#entities.characters.jonas'
appare_in_storie: ["cap_01", "cap_02", "cap_05", "cap_06", "cap_07"]
---

# Jonas

> **Stato compilazione:** body provvisorio derivato da `story_graph.json` + `glossario_consegna.json`. Sezioni visuali (aspetto, palette) sono derivazione autoriale da rifinire col vecchio grafo California (in arrivo).

## Identità (sintesi)

**Ruolo nel progetto:** meccanico, cuore tecnico; parla alla nave come a una persona; ottimista cronico.

**Tipo:** umano. **Categoria:** protagonista. **Età:** 28.

[Sintesi 3-5 righe — da rifinire dopo importazione vecchio grafo.]

## Aspetto / forma

28, viso aperto e caldo, sorriso lieve, sbavo di grasso sullo zigomo, capelli ricci scuri raccolti larghi

## Abbigliamento / stato d'uso

**Firma esteriore (provvisoria):** tuta da meccanico macchiata aperta sul petto sopra t-shirt sbiadita, multitool al cinturone

**Varianti permesse:** _da definire._

## Espressione / comportamento

spiega cose tecniche a chi non capisce e non si ferma, tangenti improvvise, filosofia profonda sotto superficie ottimista

## Palette / atmosfera

rame ossidato, arancio sala macchine, grasso e olio, ambra calda

## Contesto e ambientazioni ricorrenti

Appare in: cap_01, cap_02, cap_05, cap_06, cap_07.

## Coerenza cross-scena (cose che NON cambiano)

- non si arrenderebbe mai sulla nave
- non direbbe mai 'è solo una macchina'

## Variabilità ammessa

Variazioni di modalità sotto trigger (vedi "Voce" sotto).

## Cliché da evitare

- Glamour da modello.
- Posture da action hero.
- Tecnologia futuristica visibile (chrome, ologrammi).
- Uniformi militari pulite.
- (Specializzare con `pattern_ai_da_bandire.md` quando compilato.)

## Voce e frasi codificate

**Registro:** tecnico-affettuoso, parla della nave come persona

**Frasi-codice canoniche** (inalterabili, citate dove indicato dal brief):

- «Lei ce la fa»
- «Regge. Probabilmente.»
- «Una volta sola!»
- «Una nave che non vuole volare, non vola»
- «Questa vuole arrivare»
- «Non importa dove vai. Importa con chi ci vai»
- «Ha comprato la nave PER chiamarla California»

**Modalità di comunicazione:**

- spiega cose tecniche a chi non capisce e non si ferma
- tangenti improvvise
- filosofia profonda sotto superficie ottimista

**Cosa NON dice mai / non farebbe mai:**

- non si arrenderebbe mai sulla nave
- non direbbe mai 'è solo una macchina'

**Triggers (cambi di modalità):**

- *stress*: si butta nel lavoro, non parla
- *intimità*: condivide storie della nave
- *pericolo*: mani che sanno cosa fare prima della mente


## Arco narrativo

la nave viene messa alla prova; deve accettare che non può salvare tutto; Scavatore emerge più spesso. Cap.7: scarica tutto, sorride da bambino.

## Σ mix (mix comportamentale)

- **DOM**: `Σ₃₂₃₊` (Organicista) — peso 0.55
- **SEC**: `Σ₂₃₂₊` (Spiralista) — peso 0.3
- **LAT**: `Σ₃₁₁₊` (Scavatore) — peso 0.15


## Storie / scene di apparizione

- cap_01: _ruolo da distillare_
- cap_02: _ruolo da distillare_
- cap_05: _ruolo da distillare_
- cap_06: _ruolo da distillare_
- cap_07: _ruolo da distillare_

## Disallineamenti / domande aperte

_(da popolare durante distillazione retroattiva cap.1-7)_

## Riferimenti puntuali (citazioni dirette dalle fonti)

- **"Voce e frasi codificate"**: travaso 1:1 da `progetto/story_graph.json#entities.characters.jonas.voice`
- **"Σ mix"**: travaso 1:1 da `progetto/glossario_consegna.json#entities.characters.jonas.sigma_mix`
- **"Arco narrativo"**: travaso 1:1 da `progetto/glossario_consegna.json#entities.characters.jonas.arc_summary`
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

CHARACTER: Jonas (jonas)
ROLE: meccanico, cuore tecnico; parla alla nave come a una persona; ottimista cronico

PHYSICAL: 28, open warm face, slight smile, smudge of grease on cheekbone, curly dark hair tied back loose

OUTFIT: stained mechanic's coverall opened at the chest over a faded t-shirt, multitool clipped to belt

EXPRESSION / POSTURE: optimistic, present — talks to the ship like she's a person

PALETTE / MOOD: rame ossidato, arancio sala macchine, grasso e olio, ambra calda
VOICE HINTS (do not render as text, use to inform expression and posture):
- Lei ce la fa
- Regge. Probabilmente.
- Una volta sola!

VIEW: portrait, head-and-shoulders (or three-quarter), cinematic film still, shallow depth of field.

Aspect ratio suggestion: 3:4 (portrait).
```

