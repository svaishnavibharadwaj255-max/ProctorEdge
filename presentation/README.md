# presentation/ — ProctorEdge Pitch Deck

**Project:** ProctorEdge — Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment  
**Competition:** Factskoot Internship Campus Challenge 2026 (Live Campus Project & Computer Vision Track)  

This folder contains the official, professional 7-slide hackathon pitch presentation in editable Microsoft PowerPoint (`.pptx`) format.

---

## Contents

```
presentation/
├── ProctorEdge_Pitch_Deck.pptx         Editable 7-slide PowerPoint presentation (Redesigned & Verified)
├── ProctorEdge_Pitch_Deck_backup.pptx  Original 6-slide presentation backup
├── build_pptx.js                       Node.js builder script using pptxgenjs
├── node_modules/                       pptxgenjs dependencies (excluded via .gitignore)
└── README.md                           This documentation file
```

---

## How to Open and Present the Deck

### Option 1 — Microsoft PowerPoint (Recommended)
1. Double-click `ProctorEdge_Pitch_Deck.pptx`.
2. It opens directly in Microsoft PowerPoint (Windows / macOS / Office 365).
3. Press **F5** to start presentation mode from Slide 1.
4. Press **Shift + F5** to enter **Presenter View** to see embedded speaker notes and timings.

### Option 2 — Google Slides
1. Navigate to [slides.google.com](https://slides.google.com).
2. Click **File** → **Import slides** → **Upload** `ProctorEdge_Pitch_Deck.pptx`.
3. View all 7 slides with speaker notes.

### Option 3 — LibreOffice Impress (Open Source)
1. Open `ProctorEdge_Pitch_Deck.pptx` in LibreOffice Impress.
2. Fully editable format.

---

## Presentation Overview

### Visual Theme & Aesthetics
- **Canvas Layout:** Modern 16:9 widescreen (`13.33" × 7.5"`).
- **Background:** Deep obsidian / cyber navy (`#060B14`).
- **Accents:** Electric cyan (`#00E5FF`), high-tech blue (`#3B82F6`), AI purple (`#8B5CF6`), emerald green (`#10B981`), amber warning (`#F59E0B`), and rose alert (`#F43F5E`).
- **Design Elements:** Glass-style card containers with subtle neon borders, circular score gauges, structured workflow chevron pipelines, and competitive comparison tables.
- **Presenter Support:** Complete, natural speaker delivery notes embedded in every slide.

---

## Slide-by-Slide Detailed Breakdown

### Slide 1 — Title / Introduction
- **Header:** `PROCTOREDGE`
- **Subtitle:** `Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment`
- **Tagline:** *"Smarter Assessments. Better Insights."*
- **Badge:** Factskoot Internship Campus Challenge 2026 · Computer Vision Track
- **Showcase Cards:** Zero-Install Web Proctoring, Autonomous Exam Agent, Explainable Trust Matrix.
- **Speaking Points:** High-level vision, solving campus assessment bottlenecks without invasive software.

### Slide 2 — The Problem: Why Do Online Examinations Need Better Monitoring?
- **Layout:** 5 distinct problem cards covering the examination integrity breakdown:
  1. *False-Positive Alerts:* Natural blinks or brief glances trigger unfair disqualifications.
  2. *Examination Loopholes:* Off-screen smartphones, extra people, and OBS virtual camera loops.
  3. *Manual Monitoring Overload:* Human proctor cognitive fatigue watching dozens of video tiles.
  4. *Time-Consuming Descriptive Evaluation:* Weeks of manual faculty grading; unconstrained LLM hallucinations.
  5. *Lack of Explainable Evidence:* Black-box scores without verifiable audit ledgers.

### Slide 3 — Unified System Architecture: One Platform. Two Intelligent Engines.
- **Top Section:** Dual-Engine side-by-side architecture:
  - *Engine 1 (Autonomous Quiz Agent):* Syllabus ingestion, 10-question synthesis (7 MCQs + 3 Short-Answer), rubric generation.
  - *Engine 2 (Real-Time AI Proctoring):* MediaPipe Face Mesh (468 landmarks), YOLOv8-Nano device detection, Web Worker 3 FPS throttling, 3s temporal persistence.
- **Bottom Section:** 6-Step Unified Exam Workflow Pipeline:
  `Candidate` ➔ `Browser Exam` ➔ `Dual Engines` ➔ `Evaluation & Event Analysis` ➔ `Twin Scores` ➔ `Final Report`.

### Slide 4 — Explainable 100-Point Trust Matrix: Trust Through Explainable Evidence
- **Left Panel:** Circular 100-point starting score visual gauge and illustrative deduction framework (-20 phone, -15 multi-face, -10 absence, -5 gaze deviation).
- **Right Panel:**
  - *3-Second Temporal Persistence Rule:* 9 consecutive sampled frames at ~3 FPS required before triggering deductions.
  - *Audit-Ready Evidence Ledger:* Timestamped snapshots for educator dispute resolution.
  - *Core Principle:* Suspicious events are screening indicators for human review, never automated proof of cheating.

### Slide 5 — Source-Grounded NLP Answer Evaluation: Beyond Right or Wrong
- **Left Panel:** Four demonstration result cards matching verified JavaScript test suite outputs:
  1. *Fully Correct (10/10 - GREEN):* Complete conceptual & mechanism coverage.
  2. *Partially Correct (6.7/10 - AMBER):* Transparent partial credit for omitted handshake/ACKs.
  3. *Contradictory (0/10 - RED):* Factual inversion caught against chapter source.
  4. *Insufficient (0/10 - GRAY):* Lexical density gate stops low-effort responses (<35 words).
- **Right Panel:** Competitive positioning matrix comparing ProctorEdge with Gradescope, Khanmigo, and Kahoot!.
- **Focus Statement:** ProctorEdge's unique value in unifying edge proctoring with explainable rubric evaluation in a single workflow.

### Slide 6 — Technology Stack, Current Limitations & Production Roadmap
- **3 Distinct Columns:**
  - *Technology Stack (Implemented Prototype):* MediaPipe Face Mesh, YOLOv8-Nano, HTML5 Canvas, Web Workers, source-grounded rubrics.
  - *Current Limitations (Honest Disclosures):* Lighting/angles, CV edge-case false positives, lexical vs semantic grading bounds, human-in-the-loop mandate.
  - *Future Roadmap (60–120 Days):* Fine-tuned DeBERTa semantic grading, acoustic/lip-sync verification, iris saccade tracking, teacher review queues, LTI 1.3 Canvas/Moodle integration.

### Slide 7 — Thank You!
- **Visual Design:** Grand glass-morphic celebration frame with cyber blue/purple glowing accents.
- **Content:** Warm appreciation to the judges, project branding recap, key architectural pillars, 4-member team recognition, and open floor for Q&A discussion.

---

## Rebuilding the Presentation from Source

The presentation is fully automated and reproducible using Node.js:

```powershell
cd presentation
node build_pptx.js
```

Upon execution, `ProctorEdge_Pitch_Deck.pptx` will be regenerated with all 7 widescreen slides and embedded speaker notes.

---

*Prepared by the ProctorEdge Team — Factskoot Campus Challenge 2026*
