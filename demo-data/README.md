# demo-data/ — ProctorEdge Demo Assets

**Project:** ProctorEdge — Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment  
**Competition:** Factskoot Internship Campus Challenge 2026

This folder contains all demonstration assets, testing materials, and presentation content prepared for the live judging session.

---

## Contents

```
demo-data/
├── computer_networks_chapter.txt   Source material (~830 words, 4 key networking topics)
├── generated_quiz_10q.json         Auto-generated 10-question exam (7 MCQ + 3 short-answer)
├── demo_script_answers.md          4 scripted answers for live grading demo
├── demo_test_evaluator.js          Node.js grading simulation script
├── demo_test_evaluator.py          Python 3 grading simulation script
├── pitch_deck_outline.md           6-slide presentation outline (Markdown)
├── presentation_deck.html          Interactive browser-based slide deck
└── DEMO_GUIDE.md                   Full step-by-step demo walkthrough guide
```

---

## File Descriptions

### `computer_networks_chapter.txt`
An ~830-word Computer Networks reference chapter used as the source document for exam generation.

**Topics covered:**
- OSI 7-Layer Reference Model (all layers, encapsulation / decapsulation)
- Network Layer: logical addressing, IPv4, IPv6, CIDR, subnetting
- Routing: routing tables, OSPF, BGP, TTL, longest prefix match
- Transport Layer: TCP (3-way handshake, ACKs, flow control, congestion avoidance) vs UDP (connectionless, low latency)
- DNS: resolution hierarchy (Recursive Resolver → Root → TLD → Authoritative), record types (A, AAAA, CNAME, MX), TTL caching

**Suitability:** Technically accurate and suitable for automated question generation.

---

### `generated_quiz_10q.json`
A JSON quiz file auto-generated from the Computer Networks chapter.

| Property | Value |
|----------|-------|
| Exam ID | `pe-exam-cn-101` |
| Total Questions | 10 |
| MCQs | 7 (Questions 1–7) |
| Short-Answer | 3 (Questions 8–10) |
| MCQ Points Each | 1 pt |
| Short-Answer Q8 | 10 pts |
| Short-Answer Q9, Q10 | 5 pts each |
| Duration | 25 minutes |
| Passing Score | 70% |

Each question includes: topic, question text, options (MCQ), correct answer index, points, explanation, and rubric criteria (short-answer).

---

### `demo_script_answers.md`
A presenter cheat-sheet with four scripted answers to Question 8 (TCP vs UDP).

| Sample | Type | Expected Score | Flag |
|--------|------|---------------|------|
| 1 | Fully Correct | 10 / 10 | 🟢 GREEN |
| 2 | Partially Correct | ~6.7 / 10 | 🟡 AMBER |
| 3 | Deliberate Contradiction (UDP = reliable) | 0 / 10 | 🔴 RED |
| 4 | Blank / Vague | 0 / 10 | ⬜ GRAY |

Each sample includes copy-paste text, expected evaluation output, rubric breakdown, and presenter talking points.

---

### `demo_test_evaluator.js` / `demo_test_evaluator.py`
Offline simulation of the ProctorEdge grading engine.

> ⚠ **Important disclosure:** These scripts use **rule-based keyword matching and regex contradiction patterns** — not a full semantic NLP/AI model. They correctly simulate the grading concept for demonstration but do not use transformer models, embeddings, or real NLI entailment.

**To run:**
```bash
# Node.js (requires Node installed)
node demo-data/demo_test_evaluator.js

# Python (requires Python 3)
python demo-data/demo_test_evaluator.py
```

**Actual verified test results (run 19-Nov-2026):**
```
Sample 1  →  FULL_CREDIT          | 🟢 GREEN  | 10.0 / 10
Sample 2  →  PARTIAL_CREDIT       | 🟡 AMBER  |  6.7 / 10
Sample 3  →  CRITICAL_CONTRADICTION | 🔴 RED  |  0.0 / 10
Sample 4  →  INSUFFICIENT_CONTENT | ⬜ GRAY   |  0.0 / 10
```

---

### `pitch_deck_outline.md`
Full Markdown outline of the 6-slide hackathon pitch. Includes slide content, suggested visuals, and presenter speaking notes for each slide.

| Slide | Title |
|-------|-------|
| 1 | Introduction |
| 2 | Problem |
| 3 | Unified Architecture |
| 4 | Explainable 100-Point Trust Matrix |
| 5 | Source-Grounded NLP Grading |
| 6 | Production Roadmap |

---

### `presentation_deck.html`
An interactive browser-based version of the pitch deck.

**How to open:**
- Double-click the file → opens in your default browser.
- Navigate with **← / →** arrow keys or on-screen buttons.
- Press **N** to toggle speaker notes.
- Requires internet for Tailwind CSS CDN on first load.

---

### `DEMO_GUIDE.md`
Complete step-by-step guide for running the live demo, including:
- How to open each file
- How to run both evaluators
- How to demonstrate all 4 sample answers
- Known limitations of the offline evaluator
- Quick-reference demo sequence for the judging session

---

## How the Demo Works — Summary

```
1. Open presentation_deck.html         → Present 6 slides to judges
2. Run demo_test_evaluator.js          → Show live terminal evaluation
3. Use demo_script_answers.md          → Copy-paste 4 answers, show grading outputs
4. Show generated_quiz_10q.json        → Demonstrate 10-question structure
5. Reference computer_networks_chapter.txt → Show source-grounded generation
```

---

## Known Offline Evaluator Limitations

- Uses keyword matching, not semantic AI — correctly disclosed.
- Contradiction detection is regex-based, not transformer-based NLI.
- Hardcoded for Q8 (TCP vs UDP) only; other questions require the full app.
- No camera proctoring in offline mode.

For the full camera proctoring and AI grading experience, the main application must be running.

---

*Prepared by the ProctorEdge Team — Factskoot Campus Challenge 2026*
