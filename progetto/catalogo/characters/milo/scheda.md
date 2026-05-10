---
id: milo
name: Milo
famiglia: personaggio
sottotipo: protagonista
tipo_grafo: umano
ruolo_saga: "capitano e proprietario della California; portatore della filosofia 'diffondere sorrisi nell'universo'"
status: provvisorio
ultima_modifica: 2026-05-10
fonti:
  - 'progetto/story_graph.json#entities.characters.milo'
  - 'progetto/glossario_consegna.json#entities.characters.milo'
appare_in_storie: ["cap_01", "cap_02", "cap_03", "cap_04", "cap_05", "cap_06", "cap_07"]
---

# Milo

> **Stato compilazione:** body provvisorio derivato da `story_graph.json` + `glossario_consegna.json`. Sezioni visuali (aspetto, palette) sono derivazione autoriale da rifinire col vecchio grafo California (in arrivo).

## Identità (sintesi)

**Ruolo nel progetto:** capitano e proprietario della California; portatore della filosofia 'diffondere sorrisi nell'universo'.

**Tipo:** umano. **Categoria:** protagonista. **Età:** 40+.

[Sintesi 3-5 righe — da rifinire dopo importazione vecchio grafo.]

## Aspetto / forma

40+ anni, capelli grigi (erano scuri 10 anni fa), faint smile lines, occhi caldi e stanchi, barba di due giorni

## Abbigliamento / stato d'uso

**Firma esteriore (provvisoria):** camicia di tela denim sbiadita, maniche arrotolate, vecchia cinghia di pelle al polso

**Varianti permesse:** _da definire._

## Espressione / comportamento

ironia come scudo, affetto come sottotesto, cita canzoni che nessuno conosce, dà senso alle cose con storie

## Palette / atmosfera

denim sbiadito, ottone, cuoio invecchiato, ombre calde

## Contesto e ambientazioni ricorrenti

Appare in: cap_01, cap_02, cap_03, cap_04, cap_05, cap_06, cap_07.

## Coerenza cross-scena (cose che NON cambiano)

- non abbandonerebbe mai l'equipaggio
- non direbbe mai 'non ne vale la pena'

## Variabilità ammessa

Variazioni di modalità sotto trigger (vedi "Voce" sotto).

## Cliché da evitare

- Glamour da modello.
- Posture da action hero.
- Tecnologia futuristica visibile (chrome, ologrammi).
- Uniformi militari pulite.
- (Specializzare con `pattern_ai_da_bandire.md` quando compilato.)

## Voce e frasi codificate

**Registro:** parlato medio-basso, ironico-affettuoso, riempie i silenzi

**Frasi-codice canoniche** (inalterabili, citate dove indicato dal brief):

- «Diffondere sorrisi nell'universo»
- «La vera California non esiste più. Ma l'idea sì.»
- «Probabilmente era abbastanza»
- «Doveva esserlo»
- «Credo che sia necessario»
- «A volte è abbastanza»
- «Qualunque cosa decidi, va bene»

**Modalità di comunicazione:**

- ironia come scudo, affetto come sottotesto
- cita canzoni che nessuno conosce
- dà senso alle cose con storie

**Cosa NON dice mai / non farebbe mai:**

- non abbandonerebbe mai l'equipaggio
- non direbbe mai 'non ne vale la pena'

**Triggers (cambi di modalità):**

- *stress*: diventa serio, frasi corte (Scavatore Σ₃₁₁₊ emerge)
- *intimità*: si apre troppo, poi si ritrae
- *pericolo*: stranamente calmo, decisioni rapide


## Arco narrativo

messo alla prova nella sua fede in quello che fa; deve scegliere tra sicurezza e missione; mix Σ stabile, ma Scavatore cresce. Cap.7: per la prima volta non guida, segue Vera.

## Σ mix (mix comportamentale)

- **DOM**: `Σ₄₂₃₊` (Narratore) — peso 0.55
- **SEC**: `Σ₂₃₂₊` (Spiralista) — peso 0.3
- **LAT**: `Σ₃₁₁₊` (Scavatore) — peso 0.15


## Storie / scene di apparizione

- cap_01: _ruolo da distillare_
- cap_02: _ruolo da distillare_
- cap_03: _ruolo da distillare_
- cap_04: _ruolo da distillare_
- cap_05: _ruolo da distillare_
- cap_06: _ruolo da distillare_
- cap_07: _ruolo da distillare_

## Disallineamenti / domande aperte

_(da popolare durante distillazione retroattiva cap.1-7)_

## Riferimenti puntuali (citazioni dirette dalle fonti)

- **"Voce e frasi codificate"**: travaso 1:1 da `progetto/story_graph.json#entities.characters.milo.voice`
- **"Σ mix"**: travaso 1:1 da `progetto/glossario_consegna.json#entities.characters.milo.sigma_mix`
- **"Arco narrativo"**: travaso 1:1 da `progetto/glossario_consegna.json#entities.characters.milo.arc_summary`
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

CHARACTER: Milo (milo)
ROLE: capitano e proprietario della California; portatore della filosofia 'diffondere sorrisi nell'universo'

PHYSICAL: 40+ years old male, salt-and-pepper hair (gray now, dark ten years ago), warm tired eyes, faint smile lines, two-day stubble

OUTFIT: faded denim work shirt with rolled-up sleeves, an old leather strap on the wrist

EXPRESSION / POSTURE: ironic, affectionate, slightly worn — looks like someone who tells stories to give meaning to things

PALETTE / MOOD: denim sbiadito, ottone, cuoio invecchiato, ombre calde
VOICE HINTS (do not render as text, use to inform expression and posture):
- Diffondere sorrisi nell'universo
- La vera California non esiste più. Ma l'idea sì.
- Probabilmente era abbastanza

VIEW: portrait, head-and-shoulders (or three-quarter), cinematic film still, shallow depth of field.

Aspect ratio suggestion: 3:4 (portrait).
```

