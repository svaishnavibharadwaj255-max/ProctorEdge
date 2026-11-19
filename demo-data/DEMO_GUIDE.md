# ProctorEdge Demo Guide

**Project:** ProctorEdge — Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment  
**Competition:** Factskoot Internship Campus Challenge 2026  
**Purpose:** Step-by-step walkthrough for running the live demo during the judging session.

---

## 1. What Is This Demo?

The demo showcases two core capabilities of ProctorEdge:

1. **Automated Exam Generation** — a 10-question Computer Networks quiz auto-generated from a source chapter.
2. **Automated Answer Evaluation** — a scoring engine that grades short-answer responses against rubric criteria and detects factual contradictions.

> **Important:** The offline demo evaluator (`demo_test_evaluator.js` / `demo_test_evaluator.py`) uses **rule-based keyword matching and regex pattern detection** — not a full semantic NLP/AI model. It simulates the grading concept accurately for demonstration purposes, but does not use embeddings, NLI transformers, or vector search. Document this honestly to judges if asked.

---

## 2. Files in This Folder

| File | Purpose |
|------|---------|
| `computer_networks_chapter.txt` | Source material the quiz was generated from (~830 words, 4 topics) |
| `generated_quiz_10q.json` | Auto-generated quiz: 7 MCQs + 3 short-answer questions with rubrics |
| `demo_script_answers.md` | 4 copy-paste-ready scripted answers for live demo use |
| `demo_test_evaluator.js` | Node.js evaluator — runs the 4 sample answers through the grading engine |
| `demo_test_evaluator.py` | Python evaluator — same logic, requires Python 3 installed |
| `pitch_deck_outline.md` | Markdown outline of the 6-slide presentation |
| `presentation_deck.html` | Interactive browser-based slide deck (open in any browser) |

---

## 3. How to Open the HTML Presentation

The `presentation_deck.html` file is a fully self-contained interactive slide deck.

**Steps:**
1. Open **File Explorer** and navigate to the `demo-data/` folder.
2. Double-click `presentation_deck.html`.
3. It will open in your default browser (Chrome or Edge recommended).
4. Use the **← / → arrow keys** or the **Previous / Next buttons** to navigate between slides.
5. Press **N** (or click "Toggle Speaker Notes") to show presenter scripts at the bottom.

> **No internet connection required** after the first load (Tailwind CSS is loaded from CDN on first open).

**Alternatively, open from VS Code:**
- Right-click `presentation_deck.html` → "Open with Live Server" (if the Live Server extension is installed).

---

## 4. How to Load and Inspect the Generated Quiz

The quiz is stored as a JSON file and can be used in multiple ways:

### Option A — Read it directly
Open `generated_quiz_10q.json` in VS Code or any text editor. It is human-readable JSON.

### Option B — Validate it in the browser console
1. Open any browser → Press **F12** → Go to the **Console** tab.
2. Paste and run:
```javascript
fetch('generated_quiz_10q.json')
  .then(r => r.json())
  .then(d => {
    console.log('Total questions:', d.questions.length);
    console.log('MCQs:', d.questions.filter(q => q.type === 'mcq').length);
    console.log('Short answer:', d.questions.filter(q => q.type === 'short_answer').length);
  });
```
> This requires the page to be served (not opened as a file://), or run directly from the browser DevTools if already on the page.

### Option C — Feed it to the ProctorEdge frontend
If the main application is running, load `generated_quiz_10q.json` via the quiz import interface in the app.

---

## 5. How to Attempt the Quiz (Demo Walkthrough)

### Step 1 — Understand the Question Used for Demo
The main demo question is **Question 8** in the JSON (a 10-point short-answer):

> *"Explain the key differences between TCP and UDP at the Transport Layer, detailing connection establishment, reliability mechanisms, and their respective ideal use cases."*

### Step 2 — Open the Demo Evaluator
Choose either:
- **Node.js:** `node demo_test_evaluator.js`
- **Python 3:** `python demo_test_evaluator.py`

### Step 3 — Read the Output
The evaluator automatically runs all 4 scripted answers through the grading engine and prints results to the terminal.

---

## 6. The Four Scripted Demo Answers

All four answers are in `demo_script_answers.md` with copy-paste text, expected scores, and presenter instructions.

### Answer 1 — Fully Correct ✅
**What to say:** *"Watch ProctorEdge award full marks — it identifies all three rubric criteria: connection management, reliability mechanisms, and header overhead."*

**Expected output:**
- Status: `FULL_CREDIT`
- Flag: 🟢 `GREEN (CLEAN)`
- Score: `10 / 10`
- Breakdown: `{c1: 3, c2: 4, c3: 3}`

---

### Answer 2 — Partially Correct 🟡
**What to say:** *"Unlike binary graders, ProctorEdge awards partial credit transparently — the student mentioned connections and use cases but missed the 3-way handshake and ACK mechanisms."*

**Expected output:**
- Status: `PARTIAL_CREDIT`
- Flag: 🟡 `AMBER (PARTIAL_CREDIT)`
- Score: `~6.7 / 10`

---

### Answer 3 — Deliberate Factual Contradiction 🔴
**What to say:** *"This answer falsely claims UDP guarantees reliable delivery. Watch the red flag — the contradiction engine catches it immediately."*

**Expected output:**
- Status: `CRITICAL_CONTRADICTION`
- Flag: 🔴 `RED (FACTUAL_HALLUCINATION_ALERT)`
- Score: `0 / 10`
- Conflicts detected: UDP connection-oriented claim + UDP for banking claim

---

### Answer 4 — Blank / Vague ⬜
**What to say:** *"Generic filler text with 30 words is instantly filtered by the semantic density gate — no expensive model calls wasted."*

**Expected output:**
- Status: `INSUFFICIENT_CONTENT`
- Flag: ⬜ `GRAY (LOW_DENSITY)`
- Score: `0 / 10`
- Reason: Word count (30) below threshold (35)

---

## 7. Running the Node.js Evaluator

**Requirement:** Node.js installed (check with `node --version`)

```bash
node demo-data/demo_test_evaluator.js
```

**Expected output summary:**

```
Sample 1 → FULL_CREDIT         | GREEN  | 10 / 10
Sample 2 → PARTIAL_CREDIT      | AMBER  | ~6.7 / 10
Sample 3 → CRITICAL_CONTRADICTION | RED | 0 / 10
Sample 4 → INSUFFICIENT_CONTENT | GRAY | 0 / 10
```

---

## 8. Running the Python Evaluator (Optional)

**Requirement:** Python 3 installed (check with `python --version` or `python3 --version`)

```bash
python demo-data/demo_test_evaluator.py
```

Output is identical to the Node.js version.

---

## 9. Known Limitations of the Offline Evaluator

| Limitation | Explanation |
|-----------|-------------|
| **Keyword matching only** | Scoring is based on whether specific keywords appear in the answer. It does not understand meaning or context. A paraphrased correct answer may score lower than expected. |
| **Regex contradiction detection** | The contradiction gate uses fixed regex patterns. It catches the scripted bad answers reliably but would not catch all creative phrasings of incorrect answers. |
| **No semantic embeddings** | The offline evaluator does not use vector embeddings, cosine similarity, or transformer models. These are proposed for future versions. |
| **No NLI entailment model** | The "NLI" label in demo materials describes the concept — the actual implementation in this offline script uses regex rules, not a true Natural Language Inference model. |
| **Fixed rubric only** | The evaluator is hardcoded for the TCP vs UDP question (Q8). Other short-answer questions from the JSON require integration with the main application backend. |
| **No live camera grading** | The offline evaluator only grades text answers. Camera proctoring requires the full application to be running. |

---

## 10. Quick Reference — Demo Sequence for Judges

1. Open `presentation_deck.html` → present 6 slides (use arrow keys).
2. Run `node demo_test_evaluator.js` → show terminal output.
3. Paste **Answer 1** from `demo_script_answers.md` → show GREEN result.
4. Paste **Answer 3** (contradiction) → show RED alert.
5. Paste **Answer 4** (vague) → show GRAY density flag.
6. Show `generated_quiz_10q.json` → demonstrate 10 questions, 7 MCQ + 3 short-answer structure.
7. Open `pitch_deck_outline.md` → reference for any Q&A on slide content.

---

*Last updated: November 2026 — Factskoot Campus Challenge 2026*
