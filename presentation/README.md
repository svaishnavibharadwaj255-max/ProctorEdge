# presentation/ — ProctorEdge Pitch Deck

**Project:** ProctorEdge — Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment  
**Competition:** Factskoot Internship Campus Challenge 2026

This folder contains the professional hackathon pitch presentation in editable PowerPoint format.

---

## Contents

```
presentation/
├── ProctorEdge_Pitch_Deck.pptx    Editable 6-slide PowerPoint presentation
├── build_pptx.js                  Source script used to generate the PPTX (Node.js + pptxgenjs)
├── node_modules/                  pptxgenjs library (required only to rebuild)
└── README.md                      This file
```

---

## How to Open the Presentation

### Option 1 — Microsoft PowerPoint (Recommended)
1. Double-click `ProctorEdge_Pitch_Deck.pptx`.
2. It opens in Microsoft PowerPoint (Windows / Mac / Office 365).
3. Use **Slide Show → From Beginning** (or press **F5**) to present.
4. Speaker notes appear in the Notes panel at the bottom of each slide.

### Option 2 — Google Slides
1. Go to [slides.google.com](https://slides.google.com).
2. Click **File → Import Slides** → Upload `ProctorEdge_Pitch_Deck.pptx`.
3. Navigate through all 6 slides; formatting may differ slightly.

### Option 3 — LibreOffice Impress (Free)
1. Download LibreOffice from [libreoffice.org](https://www.libreoffice.org).
2. Open `ProctorEdge_Pitch_Deck.pptx` with LibreOffice Impress.
3. Some gradient and shadow effects may render slightly differently.

---

## Presentation Overview

### Theme & Design
- **Background:** Dark navy (#0B1120)
- **Accent colours:** Cyan (#00D9FF), Emerald (#10B981), Blue (#2563EB), Amber (#F59E0B), Rose (#F43F5E), Violet (#8B5CF6)
- **Layout:** Widescreen 16:9 (13.33 × 7.5 inches)
- **Typography:** System defaults (Inter-compatible)
- Speaker notes included on every slide

---

## Slide-by-Slide Breakdown

### Slide 1 — Introduction
**Purpose:** Hook the judges. Establish what ProctorEdge is and why it fits the Factskoot challenge.

**Content:**
- Title: ProctorEdge
- Subtitle: Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment
- Tagline: *"Trust the Exam. Trust the Grade."*
- Three value cards: Zero-Install WebApp · Dual-Engine Core · Factskoot Mandate Fit

**Accent colour:** Emerald  
**Delivery time:** ~30 seconds

---

### Slide 2 — The Problem
**Purpose:** Establish the pain points that ProctorEdge solves.

**Content:**
- Three-column problem cards:
  - 01 · False-Positive Panic (legacy proctoring tools)
  - 02 · Modern Hardware Exploits (phones, virtual cameras)
  - 03 · The Grading Bottleneck (MCQs, faculty time, hallucinating LLMs)

**Accent colour:** Rose  
**Delivery time:** ~45 seconds

---

### Slide 3 — Unified Architecture
**Purpose:** Explain the technical dual-engine pipeline clearly.

**Content:**
- Left panel: Autonomous Quiz Generation Agent (chapter → 10-question exam)
- Right panel: 3 FPS Throttled Edge Vision Engine (MediaPipe + YOLOv8-Nano)
- Pipeline flow bar: document → quiz agent → rubric model | webcam → 3 FPS worker → temporal filter → trust ledger

**Accent colour:** Cyan  
**Delivery time:** ~45 seconds

---

### Slide 4 — Explainable 100-Point Trust Matrix
**Purpose:** Show the proctoring fairness system with transparent scoring.

**Content:**
- Trust Score visualisation (starts at 100)
- 3-Second Temporal Persistence Rule explanation
- Illustrative deduction examples (phone: −20, multiple faces: −15, absence: −10, gaze: −5)
- Audit-ready evidence ledger description
- ⚠ Disclosure: deduction weights are illustrative examples

**Accent colour:** Amber  
**Delivery time:** ~45 seconds

---

### Slide 5 — Source-Grounded NLP Grading
**Purpose:** Demonstrate the academic grading engine and four demo answer categories.

**Content:**
- 3-step grading flow: MCQ Gate → Rubric Decomposer → Contradiction Detector
- Four demo answer result badges (actual verified scores)
- Feature comparison table: ProctorEdge vs Gradescope vs Khanmigo vs Kahoot!
- ⚠ Disclosure: offline evaluator uses keyword matching / regex, not full semantic AI

**Accent colour:** Violet  
**Delivery time:** ~45 seconds

---

### Slide 6 — Production Roadmap
**Purpose:** Show a credible path from prototype to production.

**Content:**
- Phase 1 (60 Days): Deep Vision Hardening — local NLP grading model, VAD + lip-sync, replay detection
- Phase 2 (90 Days): Behavioural Biometrics — iris saccade tracking, dual-camera QR pairing, teacher review queue
- Phase 3 (120 Days): LTI 1.3 LMS Integration — Canvas, Moodle, Blackboard, scalable deployment
- ⚠ Footer disclaimer: all items are planned future improvements

**Accent colour:** Blue  
**Delivery time:** ~30 seconds

---

## Speaker Notes

Each slide includes a speaker script in the PowerPoint Notes panel. To view them:
- **PowerPoint:** View → Notes Page, or the Notes panel at the bottom of the editor.
- **During presentation:** Use Presenter View (Slide Show → Presenter View).

---

## Rebuilding the PPTX

If you need to modify and regenerate the PPTX from source:

1. Ensure Node.js is installed (`node --version`).
2. The `node_modules/pptxgenjs` library is already installed in this folder.
3. Edit `build_pptx.js` as needed.
4. Run:
   ```bash
   cd presentation/
   node build_pptx.js
   ```
5. The updated `ProctorEdge_Pitch_Deck.pptx` is overwritten in place.

---

## Important Disclosures

The presentation is accurate about what is currently implemented vs. planned:

| Feature | Status |
|---------|--------|
| Browser-based quiz with 10 questions | ✅ Implemented (demo-data) |
| MediaPipe face mesh proctoring | ✅ Implemented in app |
| YOLOv8-Nano phone/person detection | ✅ Implemented in app |
| 3 FPS Web Worker throttling | ✅ Implemented in app |
| 3-second temporal persistence rule | ✅ Implemented in app |
| Keyword/rubric short-answer grading | ✅ Implemented (offline evaluator) |
| Full semantic NLI transformer grading | 🔵 Planned (Phase 1) |
| Iris saccade biometric tracking | 🔵 Planned (Phase 2) |
| LTI 1.3 LMS integration | 🔵 Planned (Phase 3) |

---

*Prepared by the ProctorEdge Team — Factskoot Campus Challenge 2026*
