/**
 * ProctorEdge Pitch Deck PPTX Builder
 * Factskoot Internship Campus Challenge 2026
 * Uses pptxgenjs to create a professional 6-slide presentation.
 */

const PptxGenJS = require('./node_modules/pptxgenjs');
const path = require('path');

const pptx = new PptxGenJS();

// ─── Global Theme ─────────────────────────────────────────────────────────────
pptx.layout    = 'LAYOUT_WIDE';  // 13.33 × 7.5 in (16:9)
pptx.author    = 'ProctorEdge Team';
pptx.company   = 'Factskoot Campus Challenge 2026';
pptx.subject   = 'ProctorEdge Pitch Deck';
pptx.title     = 'ProctorEdge – Real-Time AI Anti-Cheat Camera Proctoring';

// ─── Colour Palette ───────────────────────────────────────────────────────────
const C = {
  bg       : '0B1120',   // dark navy
  panel    : '131D2E',   // slightly lighter navy
  border   : '1E3050',   // subtle panel border
  white    : 'FFFFFF',
  cyan     : '00D9FF',
  blue     : '2563EB',
  emerald  : '10B981',
  amber    : 'F59E0B',
  rose     : 'F43F5E',
  violet   : '8B5CF6',
  slate400 : '94A3B8',
  slate300 : 'CBD5E1',
  slate200 : 'E2E8F0',
  darkRed  : '3D0A14',
  darkBlue : '0D2140',
  darkGreen: '052E1A',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function darkBg(slide) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: '100%', h: '100%',
    fill: { color: C.bg },
    line: { color: C.bg },
  });
}

function accentBar(slide, color) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.06, h: '100%',
    fill: { color },
    line: { color },
  });
}

function slideLabel(slide, text, color) {
  slide.addText(text.toUpperCase(), {
    x: 0.35, y: 0.22, w: 12, h: 0.3,
    fontSize: 8, bold: true, color,
    charSpacing: 3,
  });
}

function slideTitle(slide, text, color = C.white) {
  slide.addText(text, {
    x: 0.35, y: 0.55, w: 12.6, h: 0.9,
    fontSize: 34, bold: true, color,
    breakLine: false,
  });
}

function divider(slide, y, color = C.border) {
  slide.addShape(pptx.ShapeType.line, {
    x: 0.35, y, w: 12.6, h: 0,
    line: { color, width: 1 },
  });
}

function panel(slide, x, y, w, h, fillColor = C.panel, lineColor = C.border) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h,
    rectRadius: 0.07,
    fill: { color: fillColor },
    line: { color: lineColor, width: 1 },
  });
}

function bullet(slide, x, y, w, lines, fontSize = 11, color = C.slate300) {
  slide.addText(lines, {
    x, y, w, h: 3,
    fontSize,
    color,
    bullet: { type: 'bullet', characterCode: '25B8', color: C.cyan },
    breakLine: true,
    valign: 'top',
    wrap: true,
  });
}

function footerTag(slide, text) {
  slide.addText(text, {
    x: 0, y: 7.1, w: 13.33, h: 0.3,
    fontSize: 7.5, color: C.border, align: 'center',
  });
  slide.addText('ProctorEdge  ·  Factskoot Campus Challenge 2026', {
    x: 10.5, y: 7.1, w: 2.8, h: 0.3,
    fontSize: 7, color: C.border, align: 'right',
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 1 — INTRODUCTION
// ═══════════════════════════════════════════════════════════════════════════════
(function slide1() {
  const slide = pptx.addSlide();
  darkBg(slide);
  accentBar(slide, C.emerald);

  // Tag line
  slideLabel(slide, 'Live Campus Project · Computer Vision Track', C.emerald);

  // Title
  slide.addText('ProctorEdge', {
    x: 0.35, y: 0.6, w: 12.6, h: 1.1,
    fontSize: 60, bold: true, color: C.white,
  });

  // Subtitle
  slide.addText('Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment', {
    x: 0.35, y: 1.75, w: 12.6, h: 0.55,
    fontSize: 18, color: C.cyan, bold: false,
  });

  divider(slide, 2.4, C.border);

  // Tagline
  slide.addText('"Trust the Exam. Trust the Grade."', {
    x: 0.35, y: 2.5, w: 12.6, h: 0.4,
    fontSize: 15, italic: true, color: C.slate400,
  });

  // 3 value cards
  const cards = [
    { title: 'Zero-Install WebApp', body: 'Runs in any browser.\nNo desktop daemons,\nno root certificates.', color: C.emerald },
    { title: 'Dual-Engine Core', body: 'MediaPipe + YOLOv8-Nano\nvision pipeline meets\nan AI exam generator.', color: C.cyan },
    { title: 'Factskoot Mandate Fit', body: 'Solves academic integrity\nand grading bottlenecks\nfor campus hiring challenges.', color: C.blue },
  ];

  cards.forEach((card, i) => {
    const x = 0.35 + i * 4.33;
    panel(slide, x, 3.1, 4.1, 2.9, C.panel, card.color);
    slide.addShape(pptx.ShapeType.rect, { x, y: 3.1, w: 4.1, h: 0.06, fill: { color: card.color }, line: { color: card.color } });
    slide.addText(card.title, { x: x + 0.18, y: 3.22, w: 3.75, h: 0.4, fontSize: 13, bold: true, color: C.white });
    slide.addText(card.body,  { x: x + 0.18, y: 3.7,  w: 3.75, h: 2.1, fontSize: 10.5, color: C.slate300, breakLine: true });
  });

  // Speaker note
  slide.addNotes('Good morning judges. We are presenting ProctorEdge. High-stakes campus evaluations force universities to choose between invasive surveillance software and high manual grading workloads. ProctorEdge bridges this gap with an end-to-end platform combining real-time lightweight computer vision proctoring with automated, source-grounded exam generation and grading.');

  footerTag(slide, 'Slide 1 of 6  ·  Introduction');
})();

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 2 — THE PROBLEM
// ═══════════════════════════════════════════════════════════════════════════════
(function slide2() {
  const slide = pptx.addSlide();
  darkBg(slide);
  accentBar(slide, C.rose);

  slideLabel(slide, 'The Problem Space', C.rose);
  slideTitle(slide, 'The Triad of Assessment Failure');
  divider(slide, 1.6, C.border);

  const problems = [
    {
      num: '01',
      title: 'False-Positive Panic',
      body: 'Legacy tools (Proctorio, Honorlock)\nflag blinks, head twitches, and minor\nlighting shifts — terrorising candidates\nwith arbitrary disqualifications.',
      tag: 'Legacy tools: Proctorio, Honorlock',
      color: C.rose,
      bgColor: darkRed = '1F0A10',
    },
    {
      num: '02',
      title: 'Modern Hardware Exploits',
      body: 'Students bypass webcam perimeters\nusing off-screen smartphones, secondary\nmonitors, or virtual camera loops\n(OBS, ManyCam) undetected.',
      tag: 'Result: Compromised exam integrity',
      color: C.amber,
      bgColor: '1F150A',
    },
    {
      num: '03',
      title: 'The Grading Bottleneck',
      body: 'MCQs only test memorisation. Short-\nanswer questions take weeks of faculty\ntime, while ungrounded LLMs hallucinate\nscores without rubrics.',
      tag: 'Bottleneck: Faculty burnout',
      color: C.violet,
      bgColor: '130A1F',
    },
  ];

  problems.forEach((p, i) => {
    const x = 0.35 + i * 4.33;
    panel(slide, x, 1.75, 4.1, 5.1, p.bgColor, p.color);

    // number badge
    slide.addShape(pptx.ShapeType.roundRect, { x: x + 0.18, y: 1.93, w: 0.52, h: 0.52, rectRadius: 0.06, fill: { color: p.color }, line: { color: p.color } });
    slide.addText(p.num, { x: x + 0.18, y: 1.93, w: 0.52, h: 0.52, fontSize: 13, bold: true, color: C.white, align: 'center', valign: 'middle' });

    slide.addText(p.title, { x: x + 0.18, y: 2.6, w: 3.75, h: 0.45, fontSize: 14, bold: true, color: C.white });
    slide.addText(p.body,  { x: x + 0.18, y: 3.12, w: 3.75, h: 2.3,  fontSize: 10.5, color: C.slate300, breakLine: true });

    // tag
    slide.addShape(pptx.ShapeType.rect, { x: x + 0.18, y: 6.4, w: 3.75, h: 0.26, fill: { color: p.bgColor }, line: { color: p.color, width: 1 } });
    slide.addText(p.tag, { x: x + 0.22, y: 6.4, w: 3.7, h: 0.26, fontSize: 8, color: p.color, bold: true });
  });

  slide.addNotes('Online proctoring is fundamentally broken in three distinct ways: First, existing tools trigger constant false alarms over minor head movements. Second, students easily circumvent them using mobile phones right off-screen or virtual camera loops. Third, grading open-ended technical questions takes professors dozens of hours, while unconstrained LLMs hallucinate grades. ProctorEdge was engineered from the ground up to solve all three simultaneously.');

  footerTag(slide, 'Slide 2 of 6  ·  The Problem');
})();

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 3 — UNIFIED ARCHITECTURE
// ═══════════════════════════════════════════════════════════════════════════════
(function slide3() {
  const slide = pptx.addSlide();
  darkBg(slide);
  accentBar(slide, C.cyan);

  slideLabel(slide, 'System Architecture', C.cyan);
  slideTitle(slide, 'Unified Dual-Engine Pipeline');
  divider(slide, 1.6, C.border);

  // Left engine card
  panel(slide, 0.35, 1.75, 6.0, 4.3, C.panel, C.cyan);
  slide.addShape(pptx.ShapeType.rect, { x: 0.35, y: 1.75, w: 6.0, h: 0.06, fill: { color: C.cyan }, line: { color: C.cyan } });
  slide.addText('① Autonomous Quiz Generation Agent', { x: 0.55, y: 1.9, w: 5.6, h: 0.4, fontSize: 13, bold: true, color: C.cyan });
  const leftBullets = [
    { text: 'Ingests raw chapter text, lecture notes, or textbook PDF.', options: { bullet: { indent: 10 }, fontSize: 10.5, color: C.slate300 } },
    { text: 'Auto-synthesises a balanced 10-question exam: 7 MCQs + 3 short-answer prompts.', options: { bullet: { indent: 10 }, fontSize: 10.5, color: C.slate300 } },
    { text: 'Builds ground-truth rubric criteria and contradiction keyword lists before launch.', options: { bullet: { indent: 10 }, fontSize: 10.5, color: C.slate300 } },
    { text: 'Output: generated_quiz_10q.json', options: { bullet: { indent: 10 }, fontSize: 10, color: C.cyan, bold: true } },
  ];
  slide.addText(leftBullets, { x: 0.55, y: 2.4, w: 5.6, h: 2.4, breakLine: true, valign: 'top' });

  // Right engine card
  panel(slide, 6.6, 1.75, 6.08, 4.3, C.panel, C.emerald);
  slide.addShape(pptx.ShapeType.rect, { x: 6.6, y: 1.75, w: 6.08, h: 0.06, fill: { color: C.emerald }, line: { color: C.emerald } });
  slide.addText('② 3 FPS Throttled Edge Vision Engine', { x: 6.8, y: 1.9, w: 5.7, h: 0.4, fontSize: 13, bold: true, color: C.emerald });
  const rightBullets = [
    { text: 'MediaPipe 3D Face Mesh: 468 landmarks → head yaw/pitch/roll + gaze angle.', options: { bullet: { indent: 10 }, fontSize: 10.5, color: C.slate300 } },
    { text: 'YOLOv8-Nano: Real-time detection of phones, secondary persons, and prohibited items.', options: { bullet: { indent: 10 }, fontSize: 10.5, color: C.slate300 } },
    { text: 'Web Worker throttling locks inference to 3 FPS — prevents browser overload.', options: { bullet: { indent: 10 }, fontSize: 10.5, color: C.slate300 } },
    { text: '3-sec temporal persistence rule eliminates false alarms.', options: { bullet: { indent: 10 }, fontSize: 10, color: C.emerald, bold: true } },
  ];
  slide.addText(rightBullets, { x: 6.8, y: 2.4, w: 5.7, h: 2.4, breakLine: true, valign: 'top' });

  // Pipeline flow bar
  panel(slide, 0.35, 6.2, 12.33, 0.75, '0A0F1A', C.cyan);
  slide.addText(
    '[Chapter TXT]  →  [Quiz Agent]  →  [Rubric Model]       |       [Webcam Stream]  →  [3 FPS Worker]  →  [Temporal Filter]  →  [Trust Ledger]',
    { x: 0.5, y: 6.3, w: 12.1, h: 0.5, fontSize: 9, color: C.cyan, fontFace: 'Courier New', align: 'center' }
  );

  slide.addNotes('Our core technical innovation is a dual-engine architecture. On the left, the Autonomous Quiz Agent converts raw chapter notes into a balanced interactive exam with pre-computed rubrics. On the right, the vision pipeline runs entirely in the browser. By throttling inference to 3 FPS via Web Workers, we run MediaPipe face mesh and YOLOv8-Nano simultaneously without overheating the candidate laptop.');

  footerTag(slide, 'Slide 3 of 6  ·  Unified Architecture');
})();

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 4 — EXPLAINABLE 100-POINT TRUST MATRIX
// ═══════════════════════════════════════════════════════════════════════════════
(function slide4() {
  const slide = pptx.addSlide();
  darkBg(slide);
  accentBar(slide, C.amber);

  slideLabel(slide, 'Algorithmic Fairness', C.amber);
  slideTitle(slide, 'Explainable 100-Point Trust Matrix');
  divider(slide, 1.6, C.border);

  // Score visualisation
  panel(slide, 0.35, 1.75, 4.5, 5.2, C.panel, C.amber);
  slide.addText('TRUST SCORE', { x: 0.55, y: 1.9, w: 4.1, h: 0.35, fontSize: 9, bold: true, color: C.amber, align: 'center', charSpacing: 3 });
  slide.addText('100', { x: 0.55, y: 2.3, w: 4.1, h: 1.4, fontSize: 80, bold: true, color: C.white, align: 'center' });
  slide.addText('Starting Score — All candidates begin at full trust', { x: 0.55, y: 3.75, w: 4.1, h: 0.4, fontSize: 9, color: C.slate400, align: 'center', italic: true });

  // Deduction legend (illustrative examples)
  slide.addText('ILLUSTRATIVE DEDUCTION EXAMPLES', { x: 0.55, y: 4.25, w: 4.1, h: 0.3, fontSize: 7.5, color: C.amber, align: 'center', charSpacing: 2 });
  const deductions = [
    { label: 'Phone / Hardware Detected', pts: '−20 pts', color: C.rose },
    { label: 'Multiple Faces in Frame', pts: '−15 pts', color: C.rose },
    { label: 'Candidate Absence', pts: '−10 pts', color: C.amber },
    { label: 'Persistent Gaze Deviation', pts: '−5 pts', color: C.amber },
  ];
  deductions.forEach((d, i) => {
    const y = 4.65 + i * 0.5;
    slide.addShape(pptx.ShapeType.rect, { x: 0.55, y, w: 4.1, h: 0.42, fill: { color: '0A0F1A' }, line: { color: C.border, width: 1 } });
    slide.addText(d.label, { x: 0.7, y: y + 0.08, w: 2.8, h: 0.28, fontSize: 9, color: C.slate300 });
    slide.addText(d.pts,   { x: 3.3, y: y + 0.08, w: 1.2, h: 0.28, fontSize: 10, bold: true, color: d.color, align: 'right' });
  });

  // Right panel — 3-sec rule + audit ledger
  panel(slide, 5.1, 1.75, 7.58, 2.5, C.panel, C.border);
  slide.addText('The 3-Second Temporal Persistence Rule', { x: 5.3, y: 1.9, w: 7.2, h: 0.4, fontSize: 14, bold: true, color: C.white });
  slide.addText(
    'Natural human behaviours — sneezes, stretches, brief glances — do NOT trigger deductions.\n\nA deduction fires ONLY when an anomalous state (face absent · secondary face · gaze >35° · phone visible) persists continuously for 3.0 seconds (9 consecutive frames at 3 FPS).',
    { x: 5.3, y: 2.4, w: 7.2, h: 1.7, fontSize: 10.5, color: C.slate300, breakLine: true }
  );

  panel(slide, 5.1, 4.45, 7.58, 2.5, C.panel, C.border);
  slide.addText('Audit-Ready Evidence Ledger', { x: 5.3, y: 4.6, w: 7.2, h: 0.4, fontSize: 14, bold: true, color: C.white });
  slide.addText(
    'Every penalty event captures a timestamped snapshot stored in the exam session.\n\nProfessors access a one-click infraction gallery — undeniable visual proof, not vague warnings.\n\n⚠ Note: Deduction weights shown are design examples — verify actual values in the application.',
    { x: 5.3, y: 5.1, w: 7.2, h: 1.65, fontSize: 10.5, color: C.slate300, breakLine: true }
  );
  slide.addShape(pptx.ShapeType.rect, { x: 5.1, y: 4.45, w: 7.58, h: 0.055, fill: { color: C.emerald }, line: { color: C.emerald } });
  slide.addText('Zero Unfair Disqualifications', { x: 10.9, y: 4.52, w: 1.75, h: 0.4, fontSize: 9, bold: true, color: C.emerald, align: 'right' });

  slide.addNotes("Judges, fairness is our highest design priority. We don't disqualify students on arbitrary heuristics. Our 3-second temporal persistence filter ensures that if a student sneezes or stretches, their score stays 100. But if an unauthorised phone or second person remains in view for 3 continuous seconds, our system logs a weighted deduction and saves a timestamped snapshot. The professor gets undeniable visual proof, not vague warnings. Deduction values on this slide are illustrative examples.");

  footerTag(slide, 'Slide 4 of 6  ·  Explainable 100-Point Trust Matrix');
})();

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 5 — SOURCE-GROUNDED NLP GRADING
// ═══════════════════════════════════════════════════════════════════════════════
(function slide5() {
  const slide = pptx.addSlide();
  darkBg(slide);
  accentBar(slide, C.violet);

  slideLabel(slide, 'Academic Assessment Engine', C.violet);
  slideTitle(slide, 'Source-Grounded NLP Grading');
  divider(slide, 1.6, C.border);

  // Left — grading flow
  panel(slide, 0.35, 1.75, 5.5, 5.2, C.panel, C.violet);
  slide.addShape(pptx.ShapeType.rect, { x: 0.35, y: 1.75, w: 5.5, h: 0.055, fill: { color: C.violet }, line: { color: C.violet } });
  slide.addText('How Short-Answer Grading Works', { x: 0.55, y: 1.87, w: 5.1, h: 0.4, fontSize: 13, bold: true, color: C.violet });

  const steps = [
    { n: '1', title: 'MCQ Gate', body: 'Instantaneous deterministic scoring.\nCorrect index matched against JSON answer key.', color: C.cyan },
    { n: '2', title: 'Rubric Decomposer', body: 'Short answers evaluated on 3 axes:\nTechnical Accuracy · Mechanism Explanation · Use Cases.\nPartial credit awarded per criterion.', color: C.emerald },
    { n: '3', title: 'Contradiction Detector', body: 'Keyword + pattern matching flags factual inversions\n(e.g., "UDP guarantees reliable delivery").\nImplemented via regex rules against source chapter.', color: C.rose },
  ];
  steps.forEach((s, i) => {
    const y = 2.4 + i * 1.5;
    slide.addShape(pptx.ShapeType.roundRect, { x: 0.55, y, w: 0.45, h: 0.45, rectRadius: 0.06, fill: { color: s.color }, line: { color: s.color } });
    slide.addText(s.n, { x: 0.55, y, w: 0.45, h: 0.45, fontSize: 14, bold: true, color: C.white, align: 'center', valign: 'middle' });
    slide.addText(s.title, { x: 1.1, y: y + 0.02, w: 4.5, h: 0.35, fontSize: 12, bold: true, color: s.color });
    slide.addText(s.body,  { x: 1.1, y: y + 0.4,  w: 4.5, h: 0.9,  fontSize: 9.5, color: C.slate300, breakLine: true });
  });

  // Demo answer badges
  slide.addText('DEMO ANSWER CATEGORIES (Actual Test Results)', { x: 0.55, y: 6.6, w: 5.1, h: 0.25, fontSize: 7.5, color: C.violet, charSpacing: 2 });
  const badges = [
    { label: '10/10 · GREEN',   color: C.emerald }, { label: '6.7/10 · AMBER',  color: C.amber },
    { label: '0/10 · RED',      color: C.rose },    { label: '0/10 · GRAY',     color: C.slate400 },
  ];
  badges.forEach((b, i) => {
    const x = 0.55 + (i % 2) * 2.65;
    const y = 6.9 + Math.floor(i / 2) * 0.0;
    // show inline
  });
  slide.addText(
    '🟢 10/10 (Full Credit)   🟡 6.7/10 (Partial)   🔴 0/10 (Contradiction)   ⬜ 0/10 (Low Density)',
    { x: 0.55, y: 6.87, w: 5.1, h: 0.4, fontSize: 9, color: C.slate300 }
  );

  // Right — comparison table
  panel(slide, 6.1, 1.75, 6.9, 5.2, C.panel, C.border);
  slide.addText('Feature Comparison', { x: 6.3, y: 1.9, w: 6.5, h: 0.4, fontSize: 13, bold: true, color: C.white });

  const headers = ['Feature', 'ProctorEdge', 'Gradescope', 'Khanmigo', 'Kahoot!'];
  const rows = [
    ['Live Edge Proctoring',          'YES (3 FPS)', 'NO',          'NO',      'NO'],
    ['Chapter-to-Exam Agent',         'YES',         'NO',          'Partial', 'NO'],
    ['NLI Contradiction Detection',   'YES',         'NO',          'NO',      'NO'],
    ['Rubric Partial Credit',         'YES',         'Manual Only', 'Basic',   'NO'],
    ['Zero-Install Browser App',      'YES',         'YES',         'YES',     'YES'],
  ];

  const tableData = [
    headers.map((h, i) => ({
      text: h,
      options: { bold: true, color: i === 1 ? C.emerald : C.slate400, fontSize: 9, fill: { color: '0A0F1A' } },
    })),
    ...rows.map((row, ri) =>
      row.map((cell, ci) => ({
        text: cell,
        options: {
          bold: ci === 1,
          color: ci === 1 ? C.emerald : (cell === 'NO' ? C.slate400 : C.slate300),
          fontSize: 9,
          fill: { color: ri % 2 === 0 ? C.panel : '0E1828' },
        },
      }))
    ),
  ];

  slide.addTable(tableData, {
    x: 6.1, y: 2.42, w: 6.9, h: 4.2,
    border: { type: 'solid', color: C.border, pt: 0.5 },
    rowH: 0.56,
    colW: [2.2, 1.0, 1.0, 0.95, 0.75],
  });

  slide.addNotes("Let's talk about the academic grading engine. The NLP evaluator in this demo uses rule-based keyword matching and regex contradiction patterns — this is disclosed honestly. When a candidate writes an answer, the evaluator checks keywords against rubric criteria and scans for known factual inversions like claiming UDP is reliable. If found, it triggers a red flag. Future versions may incorporate semantic NLI models.");

  footerTag(slide, 'Slide 5 of 6  ·  Source-Grounded NLP Grading');
})();

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 6 — PRODUCTION ROADMAP
// ═══════════════════════════════════════════════════════════════════════════════
(function slide6() {
  const slide = pptx.addSlide();
  darkBg(slide);
  accentBar(slide, C.blue);

  slideLabel(slide, 'The Horizon — Future Improvements', C.blue);
  slideTitle(slide, 'Production Roadmap & Campus Rollout');
  divider(slide, 1.6, C.border);

  // Timeline arrow
  slide.addShape(pptx.ShapeType.line, { x: 0.35, y: 2.7, w: 12.6, h: 0, line: { color: C.border, width: 1.5 } });
  [0, 1, 2].forEach(i => {
    slide.addShape(pptx.ShapeType.ellipse, { x: 0.35 + i * 4.33 + 1.75, y: 2.55, w: 0.3, h: 0.3, fill: { color: [C.cyan, C.emerald, C.blue][i] }, line: { color: [C.cyan, C.emerald, C.blue][i] } });
  });

  const phases = [
    {
      phase: 'Phase 1  ·  60 Days',
      title: 'Deep Vision Hardening',
      items: [
        'Fine-tune a local NLP grading model for faster short-answer evaluation.',
        'Implement Voice Activity Detection (VAD) + MediaPipe lip-sync verification to detect whisper-coaching.',
        'Improve replay-loop detection for virtual camera streams.',
      ],
      color: C.cyan,
      bg: '041520',
    },
    {
      phase: 'Phase 2  ·  90 Days',
      title: 'Behavioural Biometrics',
      items: [
        'Iris saccade tracking to distinguish deep thinking from reading hidden notes below the camera bezel.',
        'Dual-camera smartphone QR pairing for a 45° desk overview.',
        'Teacher review queue — sort submissions by Trust Score for fast anomaly triage.',
      ],
      color: C.emerald,
      bg: '031A0F',
    },
    {
      phase: 'Phase 3  ·  120 Days',
      title: 'LTI 1.3 LMS Integration',
      items: [
        'Direct Canvas, Moodle, and Blackboard single-sign-on integration via LTI 1.3.',
        'Scalable cloud deployment with per-institution session isolation.',
        'Professor Smart Review Queue: batch-review flagged exams efficiently.',
      ],
      color: C.blue,
      bg: '040A1F',
    },
  ];

  phases.forEach((p, i) => {
    const x = 0.35 + i * 4.33;
    panel(slide, x, 2.95, 4.1, 4.0, p.bg, p.color);
    slide.addShape(pptx.ShapeType.rect, { x, y: 2.95, w: 4.1, h: 0.055, fill: { color: p.color }, line: { color: p.color } });
    slide.addText(p.phase, { x: x + 0.18, y: 3.07, w: 3.75, h: 0.28, fontSize: 8.5, bold: true, color: p.color, charSpacing: 1 });
    slide.addText(p.title, { x: x + 0.18, y: 3.42, w: 3.75, h: 0.4,  fontSize: 13, bold: true, color: C.white });

    const bulletLines = p.items.map(text => ({ text, options: { bullet: { indent: 10 }, fontSize: 9.5, color: C.slate300 } }));
    slide.addText(bulletLines, { x: x + 0.18, y: 3.9, w: 3.75, h: 2.8, breakLine: true, valign: 'top' });
  });

  // Footer disclaimer
  slide.addText('⚠  All roadmap items above are planned future improvements, not currently implemented features.', {
    x: 0.35, y: 7.1, w: 12.6, h: 0.28, fontSize: 8, color: C.amber, align: 'center', italic: true,
  });

  slide.addNotes('Looking ahead, our roadmap bridges this prototype into enterprise campus deployment. By introducing localised grading models, acoustic lip-sync checks, and direct Canvas/Moodle LMS integration, ProctorEdge will provide educational institutions with an uncompromising, ethical, and fully automated testing infrastructure. All items listed are planned improvements. Thank you — we welcome your questions!');

  footerTag(slide, 'Slide 6 of 6  ·  Production Roadmap');
})();

// ─── Write File ───────────────────────────────────────────────────────────────
const outPath = path.join(__dirname, 'ProctorEdge_Pitch_Deck.pptx');
pptx.writeFile({ fileName: outPath })
  .then(() => console.log('SUCCESS: PPTX written to', outPath))
  .catch(err => { console.error('ERROR:', err.message); process.exit(1); });
