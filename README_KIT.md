# Starter Kit — Pipeline Narrativa Riusabile

Scheletro **agnostico** per costruire un sistema *agentico* di produzione narrativa: dall'idea all'opera finale (libro, albo illustrato, fumetto, romanzo, podcast narrativo, opera multimediale), con qualità autoriale e impronta umana, riducendo i costi di gestione del flusso.

> **Punto di ingresso obbligatorio:** [`ARCHITETTURA.md`](./ARCHITETTURA.md). Spiega *come è fatto* il sistema prima di mostrare *cosa* mettere dove. Letto a freddo, una volta. Riconsultato quando si prendono decisioni di forma.

## Cuore della pipeline

L'autore e l'AI iterano in chat su un set di documenti-anima del progetto (bibbia, voce, archi, glossario-consegna), finché l'autore dice "abbiamo abbastanza". Da lì il **grafo del progetto si congela** in una forma frattale a 3 livelli (macro / medio / micro). Da grafo + catalogo + bibbia + carta voce uno script meccanico compone, per ogni unità narrativa, un **brief autosufficiente** (fino a ~30k parole). L'agente prosa lavora *solo* sul brief: applica voce, non inventa. Una **orchestratrice** sopra coordina il flusso e parla con l'autore. Una **UI cruscotto** in `web/` permette all'autore di visualizzare grafo, catalogo, atlante saga e progresso.

Vedi `ARCHITETTURA.md` §2 per la pipeline a 7 fasi e §6 per la mappa al modello agentico generale.

## Struttura modulare

```
_starter_kit/
├── ARCHITETTURA.md              documento fondante (leggi questo per primo)
├── README.md                    questo file
│
├── _fasi/                       le 7 fasi della pipeline, una cartella ciascuna
│   ├── 01_ideazione/            🟡 da estrarre
│   ├── 02_congelamento_grafo/   ✅
│   ├── 03_distillazione/        ✅
│   ├── 04_catalogo/             ✅
│   ├── 05_brief/                ✅
│   ├── 06_prosa/                ✅
│   └── 07_editing_composizione/ 🟡 da estrarre
│
├── _skills/                     ✅ inventario skill agente IA (7 skill Layer 0)
├── _scripts/                    ✅ script Python idempotenti riusabili (14 script)
├── _convenzioni/                ✅ regole trasversali (7 documenti)
├── _agenti/                     ✅ pattern agenti foreground (template + tool MCP)
├── _mcp_server/                 ✅ server MCP per l'orchestratrice (Claude Code)
└── web/                         ✅ cruscotto editoriale (Next.js + TS)
```

Ogni cartella contiene il proprio `README.md` con cosa-va / cosa-non-va / stato.

## Cosa contiene il kit

- Documento architetturale fondante (forme, decisioni, isomorfismo agentico)
- 7 cartelle-fase autocontenute, sviluppabili singolarmente in qualsiasi ordine
- Inventario skill base (Layer 0), con specializzazioni Layer 1 dentro le fasi e Layer 2 nella repo del progetto
- Script Python idempotenti con pattern `--dry-run` di default
- Convenzioni trasversali (stato, git, naming, marker testo finale, quote tracker, architettura informativa)
- Cruscotto editoriale Next.js da specializzare via `lib/project-config.ts`

## Cosa NON contiene

- Nessun contenuto narrativo specifico (personaggi, luoghi, prosa, prompt canonici, immagini)
- Nessun database o dipendenza pesante: filesystem Git versionato come memoria long-term
- Nessuna scelta opinionata sul medium del prodotto (testo / illustrato / fumetto / audio sono tutti supportati)

## Stato del kit

| Componente | Stato |
|---|---|
| Documento architetturale fondante (`ARCHITETTURA.md`) | ✅ |
| Convenzioni trasversali (6/7) | ✅ |
| Skill agente IA Layer 0 (7/7) | ✅ |
| Script Python idempotenti (14 script + 4 audit) | ✅ |
| Materiali fasi 02–06 (PIPELINE + template + skill_overlay) | ✅ |
| Materiali fase 01 (ideazione) | 🟡 |
| Materiali fase 07 (editing/composizione) | 🟡 |
| Cruscotto editoriale `web/` (Next.js) | ✅ |
| Server MCP per orchestratrice (`_mcp_server/`) | ✅ |
| Pattern agenti foreground (`_agenti/`, `_convenzioni/agenti_foreground.md`) | ✅ |
| Specifica orchestratrice (chat-router fra agenti) | 🟡 fase a sé |

## Come si adotta il kit

1. **Copia `_starter_kit/` come radice del nuovo progetto** (o esplodi la zip `starter_kit.zip` in una cartella vuota)
2. **Leggi `ARCHITETTURA.md` una volta** per capire la forma del sistema
3. **Configura `web/lib/project-config.ts`** con titolo / sottotitolo / decisioni autoriali del tuo progetto
4. **Comincia dalla Fase 01** (ideazione): converse con l'AI per stabilizzare i documenti-anima del progetto
5. **Procedi fase per fase** seguendo i `PIPELINE.md` di ognuna

## Convenzioni rapide

- Script idempotenti: `--dry-run` di default, `--apply` per scrivere, backup automatico
- Schema grafo congelato dopo Fase 02: aggiunte additive + retroattive a `null` + riempimenti contestualizzati (mai inventando)
- Branch dedicato + commit chiari per ogni grossa modifica al canone, mai `--force` o amend altrui

Vedi `_convenzioni/` per i dettagli.

## Output finale del kit

Starter kit pronto all'uso (`starter_kit.zip` o `git clone` della directory) per avviare un nuovo progetto narrativo da zero, con orchestratrice + agenti specializzati che gestiscono il flusso, e cruscotto UI per supervisionarlo.
