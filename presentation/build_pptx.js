/**
 * ProctorEdge Pitch Deck PPTX Builder — Complete Redesign (7 Slides)
 * Factskoot Internship Campus Challenge 2026 — Live Campus Project & Computer Vision Track
 * Uses pptxgenjs to create a premium, futuristic 7-slide presentation.
 */

const PptxGenJS = require('./node_modules/pptxgenjs');
const path = require('path');

const pptx = new PptxGenJS();

// ─── Global Configuration ──────────────────────────────────────────────────────
pptx.layout    = 'LAYOUT_WIDE';  // 13.33 × 7.5 in (16:9 widescreen)
pptx.author    = 'ProctorEdge Team (4-Member Engineering Squad)';
pptx.company   = 'Factskoot Campus Challenge 2026';
pptx.subject   = 'ProctorEdge Pitch Deck';
pptx.title     = 'ProctorEdge – Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment';

// ─── Color Palette (Cyber / AI Startup Theme) ──────────────────────────────────
const C = {
  bg         : '060B14',  // Ultra dark navy / obsidian
  panel      : '0E1626',  // Elevated card background
  panelAlt   : '121C30',  // Slightly lighter glass panel
  panelDark  : '090E1A',  // Subdued background
  border     : '1E2D4A',  // Default card border
  borderSub  : '162238',  // Subtle internal line
  white      : 'FFFFFF',
  cyan       : '00E5FF',  // Primary electric accent
  cyanLight  : '7CEBFF',
  blue       : '3B82F6',  // High-tech blue
  blueDark   : '1D4ED8',
  indigo     : '6366F1',
  purple     : '8B5CF6',  // AI / futuristic purple
  violet     : 'A855F7',
  emerald    : '10B981',  // Success / clean / verified
  amber      : 'F59E0B',  // Warning / partial credit
  rose       : 'F43F5E',  // Critical alert / contradiction
  slate100   : 'F1F5F9',
  slate200   : 'E2E8F0',
  slate300   : 'CBD5E1',
  slate400   : '94A3B8',
  slate500   : '64748B',
};

// ─── Reusable Helper Functions ─────────────────────────────────────────────────
function setSlideBackground(slide) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: '100%', h: '100%',
    fill: { color: C.bg },
    line: { color: C.bg },
  });
}

function addAccentBar(slide, color) {
  // Left vertical glowing neon bar
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 0.08, h: '100%',
    fill: { color },
    line: { color },
  });
}

function addSlideCategory(slide, text, color = C.cyan) {
  slide.addText(text.toUpperCase(), {
    x: 0.55, y: 0.22, w: 12.2, h: 0.28,
    fontSize: 8.5, bold: true, color,
    charSpacing: 2.5,
  });
}

function addSlideHeader(slide, title, color = C.white) {
  slide.addText(title, {
    x: 0.55, y: 0.52, w: 12.2, h: 0.72,
    fontSize: 27, bold: true, color,
    breakLine: false,
  });
}

function addDivider(slide, y = 1.35, color = C.border) {
  slide.addShape(pptx.ShapeType.line, {
    x: 0.55, y, w: 12.23, h: 0,
    line: { color, width: 1 },
  });
}

function addGlassCard(slide, x, y, w, h, fillColor = C.panel, borderColor = C.border) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h,
    rectRadius: 0.08,
    fill: { color: fillColor },
    line: { color: borderColor, width: 1.2 },
  });
}

function addFooter(slide, slideIndex, totalSlides = 7, slideName = '') {
  slide.addText(`Slide ${slideIndex} of ${totalSlides}  ·  ${slideName}`, {
    x: 0.55, y: 7.15, w: 6.0, h: 0.25,
    fontSize: 7.5, color: C.slate500, align: 'left',
  });
  slide.addText('ProctorEdge  ·  Factskoot Campus Challenge 2026', {
    x: 6.78, y: 7.15, w: 6.0, h: 0.25,
    fontSize: 7.5, color: C.slate500, align: 'right',
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 1: TITLE / INTRODUCTION
// ═══════════════════════════════════════════════════════════════════════════════
(function buildSlide1() {
  const slide = pptx.addSlide();
  setSlideBackground(slide);
  addAccentBar(slide, C.cyan);

  // Top Challenge Pill Badge
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.65, y: 0.42, w: 6.2, h: 0.38,
    rectRadius: 0.19,
    fill: { color: '0A192F' },
    line: { color: C.cyan, width: 1 },
  });
  slide.addText('FACTSKOOT INTERNSHIP CAMPUS CHALLENGE 2026  ·  COMPUTER VISION TRACK', {
    x: 0.75, y: 0.46, w: 6.0, h: 0.3,
    fontSize: 7.5, bold: true, color: C.cyan,
  });

  // Massive Title
  slide.addText('PROCTOREDGE', {
    x: 0.62, y: 0.95, w: 12.0, h: 1.15,
    fontSize: 58, bold: true, color: C.white,
    charSpacing: 2,
  });

  // Subtitle
  slide.addText('Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment', {
    x: 0.65, y: 2.12, w: 12.0, h: 0.48,
    fontSize: 17, bold: true, color: C.cyan,
  });

  // Tagline
  slide.addText('"Smarter Assessments. Better Insights."', {
    x: 0.65, y: 2.62, w: 12.0, h: 0.38,
    fontSize: 14.5, italic: true, color: C.emerald,
  });

  addDivider(slide, 3.12, C.border);

  // 3 Futuristic Glass Feature Cards
  const cards = [
    {
      title: 'ZERO-INSTALL WEB PROCTORING',
      accent: C.cyan,
      tag: 'Browser-Native Edge Vision',
      points: [
        'Runs directly in modern browsers without desktop daemons or administrative root access.',
        'Synchronized MediaPipe Face Mesh (468 landmarks) for head pose & gaze angle estimation.',
        'Ultralight YOLOv8-Nano for real-time localization of mobile phones & secondary persons.',
        'Web Worker 3 FPS throttling protects candidate laptop performance without overheating.',
      ],
    },
    {
      title: 'AUTONOMOUS EXAM AGENT',
      accent: C.purple,
      tag: 'Source-Grounded Curriculum AI',
      points: [
        'Ingests raw textbook chapters, markdown syllabus files, or lecture documentation.',
        'Synthesizes balanced 10-Question assessments: 7 objective MCQs + 3 descriptive prompts.',
        'Pre-computes multi-tier grading rubrics and explicit factual contradiction boundaries.',
        'Eliminates weeks of manual exam drafting overhead for university faculty.',
      ],
    },
    {
      title: 'EXPLAINABLE TRUST MATRIX',
      accent: C.emerald,
      tag: 'Algorithmic Fairness & Audit Ledger',
      points: [
        '100-Point starting Trust Score: Candidates start at full trust; zero arbitrary penalties.',
        '3-Second Temporal Persistence Rule eliminates false positives from natural human reflexes.',
        'Timestamped visual evidence snapshot captures provide undisputed professor audit trails.',
        'Screening indicators for review, not black-box automated disqualifications.',
      ],
    },
  ];

  cards.forEach((card, i) => {
    const x = 0.65 + i * 4.12;
    const y = 3.3;
    const w = 3.82;
    const h = 3.48;

    addGlassCard(slide, x, y, w, h, C.panel, card.accent);

    // Glowing top bar
    slide.addShape(pptx.ShapeType.rect, {
      x, y, w, h: 0.06,
      fill: { color: card.accent },
      line: { color: card.accent },
    });

    // Card Tag
    slide.addText(card.tag.toUpperCase(), {
      x: x + 0.2, y: y + 0.16, w: w - 0.4, h: 0.24,
      fontSize: 7.5, bold: true, color: card.accent,
      charSpacing: 1.5,
    });

    // Card Title
    slide.addText(card.title, {
      x: x + 0.2, y: y + 0.42, w: w - 0.4, h: 0.42,
      fontSize: 12.5, bold: true, color: C.white,
    });

    // Card Bullet Points
    const bullets = card.points.map(pt => ({
      text: pt,
      options: { bullet: { indent: 8 }, fontSize: 9.2, color: C.slate300 },
    }));
    slide.addText(bullets, {
      x: x + 0.2, y: y + 0.9, w: w - 0.4, h: 2.45,
      breakLine: true, valign: 'top',
    });
  });

  // Slide Notes
  slide.addNotes(
    "Good morning judges. We are presenting ProctorEdge. High-stakes campus evaluations usually force universities to choose between invasive surveillance software and high manual grading workloads. ProctorEdge bridges this gap with an end-to-end platform that combines real-time lightweight computer vision proctoring with automated, source-grounded exam generation and grading. Our zero-install architecture runs directly in standard web browsers, ensuring academic integrity without compromising candidate privacy or laptop stability."
  );

  addFooter(slide, 1, 7, 'Title / Introduction');
})();

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 2: THE PROBLEM
// ═══════════════════════════════════════════════════════════════════════════════
(function buildSlide2() {
  const slide = pptx.addSlide();
  setSlideBackground(slide);
  addAccentBar(slide, C.rose);

  addSlideCategory(slide, 'The Problem Space · Examination Integrity Breakdown', C.rose);
  addSlideHeader(slide, 'Why Do Online Examinations Need Better Monitoring?');
  addDivider(slide, 1.35, C.border);

  // 5 Visual Problem Cards: 3 on Top Row, 2 on Bottom Row
  const topProblems = [
    {
      num: '01',
      title: 'False-Positive Alerts',
      color: C.rose,
      desc: 'Normal human reflexes — brief sneezes, natural blinking, or minor ambient lighting shifts — trigger immediate disqualifications in legacy tools, terrorizing honest candidates.',
      impact: 'Candidate panic & hundreds of false alerts for educators',
    },
    {
      num: '02',
      title: 'Examination Loopholes',
      color: C.amber,
      desc: 'Candidates easily exploit blind spots using secondary smartphones below camera bezels, unauthorized helpers whispering off-screen, or pre-recorded virtual camera loops (OBS).',
      impact: 'Compromised credibility of remote certifications',
    },
    {
      num: '03',
      title: 'Manual Monitoring Overload',
      color: C.purple,
      desc: 'Human proctors attempting to monitor 30–50 video feeds simultaneously suffer severe cognitive fatigue within 20 minutes, inevitably missing split-second infractions.',
      impact: 'Inconsistent enforcement & high staffing expenses',
    },
  ];

  const bottomProblems = [
    {
      num: '04',
      title: 'Time-Consuming Descriptive Evaluation',
      color: C.blue,
      desc: 'Multiple-choice questions only test rote memorization. Grading open-ended descriptive answers takes faculty weeks of manual effort, while ungrounded LLMs hallucinate grades without verifiable rubrics.',
      impact: 'Severe faculty burnout & delayed academic feedback',
    },
    {
      num: '05',
      title: 'Lack of Explainable Evidence',
      color: C.cyan,
      desc: 'Legacy proctoring software delivers black-box "cheater / not cheater" scores without timestamped visual proof or audit ledgers, leaving universities vulnerable to candidate disputes.',
      impact: 'Unfair student disqualifications & zero audit trails',
    },
  ];

  // Render Top 3 Cards
  topProblems.forEach((p, i) => {
    const x = 0.65 + i * 4.12;
    const y = 1.55;
    const w = 3.82;
    const h = 2.48;

    addGlassCard(slide, x, y, w, h, C.panel, p.color);

    // Number Badge
    slide.addShape(pptx.ShapeType.roundRect, {
      x: x + 0.18, y: y + 0.18, w: 0.44, h: 0.36,
      rectRadius: 0.06, fill: { color: p.color }, line: { color: p.color },
    });
    slide.addText(p.num, {
      x: x + 0.18, y: y + 0.18, w: 0.44, h: 0.36,
      fontSize: 11, bold: true, color: C.white, align: 'center', valign: 'middle',
    });

    // Title
    slide.addText(p.title, {
      x: x + 0.72, y: y + 0.16, w: w - 0.9, h: 0.4,
      fontSize: 12.5, bold: true, color: C.white,
    });

    // Description
    slide.addText(p.desc, {
      x: x + 0.18, y: y + 0.62, w: w - 0.36, h: 1.25,
      fontSize: 9.3, color: C.slate300, breakLine: true,
    });

    // Impact Bar
    slide.addShape(pptx.ShapeType.rect, {
      x: x + 0.18, y: y + 1.95, w: w - 0.36, h: 0.36,
      fill: { color: '0A101D' }, line: { color: p.color, width: 0.8 },
    });
    slide.addText(`Impact: ${p.impact}`, {
      x: x + 0.24, y: y + 1.97, w: w - 0.48, h: 0.32,
      fontSize: 8, bold: true, color: p.color,
    });
  });

  // Render Bottom 2 Cards
  bottomProblems.forEach((p, i) => {
    const x = 0.65 + i * 6.18;
    const y = 4.25;
    const w = 5.88;
    const h = 2.58;

    addGlassCard(slide, x, y, w, h, C.panel, p.color);

    // Number Badge
    slide.addShape(pptx.ShapeType.roundRect, {
      x: x + 0.22, y: y + 0.2, w: 0.46, h: 0.38,
      rectRadius: 0.06, fill: { color: p.color }, line: { color: p.color },
    });
    slide.addText(p.num, {
      x: x + 0.22, y: y + 0.2, w: 0.46, h: 0.38,
      fontSize: 11.5, bold: true, color: C.white, align: 'center', valign: 'middle',
    });

    // Title
    slide.addText(p.title, {
      x: x + 0.8, y: y + 0.18, w: w - 1.0, h: 0.4,
      fontSize: 13, bold: true, color: C.white,
    });

    // Description
    slide.addText(p.desc, {
      x: x + 0.22, y: y + 0.68, w: w - 0.44, h: 1.25,
      fontSize: 9.5, color: C.slate300, breakLine: true,
    });

    // Impact Bar
    slide.addShape(pptx.ShapeType.rect, {
      x: x + 0.22, y: y + 2.05, w: w - 0.44, h: 0.36,
      fill: { color: '0A101D' }, line: { color: p.color, width: 0.8 },
    });
    slide.addText(`Impact: ${p.impact}`, {
      x: x + 0.3, y: y + 2.07, w: w - 0.6, h: 0.32,
      fontSize: 8.5, bold: true, color: p.color,
    });
  });

  slide.addNotes(
    "Online proctoring is fundamentally broken across five dimensions: First, legacy software creates false-positive panic, penalizing candidates for brief glances or lighting shifts. Second, students easily circumvent cameras using hidden phones, second monitors, or OBS video loops. Third, human proctors suffer cognitive fatigue watching dozens of video tiles. Fourth, professors spend weeks grading descriptive answers manually, while generic LLMs hallucinate scores. Finally, existing tools lack transparent evidence ledgers, leaving universities vulnerable to grade disputes. ProctorEdge solves all five."
  );

  addFooter(slide, 2, 7, 'The Problem');
})();

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 3: UNIFIED SYSTEM ARCHITECTURE
// ═══════════════════════════════════════════════════════════════════════════════
(function buildSlide3() {
  const slide = pptx.addSlide();
  setSlideBackground(slide);
  addAccentBar(slide, C.cyan);

  addSlideCategory(slide, 'System Architecture · Dual-Engine Orchestration', C.cyan);
  addSlideHeader(slide, 'One Platform. Two Intelligent Engines.');
  addDivider(slide, 1.35, C.border);

  // Top Section: Engine 1 & Engine 2 Side-by-Side
  // Engine 1
  addGlassCard(slide, 0.65, 1.55, 5.88, 3.15, C.panel, C.cyan);
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.65, y: 1.55, w: 5.88, h: 0.06,
    fill: { color: C.cyan }, line: { color: C.cyan },
  });
  slide.addText('ENGINE 1: AUTONOMOUS QUIZ AGENT', {
    x: 0.88, y: 1.72, w: 5.4, h: 0.32,
    fontSize: 12.5, bold: true, color: C.cyan,
  });
  slide.addText('Curriculum Ingestion & Multi-Format Assessment Generation', {
    x: 0.88, y: 2.02, w: 5.4, h: 0.24,
    fontSize: 8.5, color: C.slate400, italic: true,
  });
  const engine1Bullets = [
    { text: 'Ingests raw syllabus text, textbook chapters, or lecture notes.', options: { bullet: { indent: 8 }, fontSize: 9.5, color: C.slate300 } },
    { text: 'Automatically synthesizes a balanced 10-Question Exam: 7 MCQs + 3 multi-tier short answer prompts.', options: { bullet: { indent: 8 }, fontSize: 9.5, color: C.slate300 } },
    { text: 'Pre-computes ground-truth answer keys, criteria rubric weights, and contradiction keyword lists.', options: { bullet: { indent: 8 }, fontSize: 9.5, color: C.slate300 } },
    { text: 'Delivers instant browser-based examination without server load.', options: { bullet: { indent: 8 }, fontSize: 9.5, color: C.cyan, bold: true } },
  ];
  slide.addText(engine1Bullets, {
    x: 0.88, y: 2.32, w: 5.4, h: 2.2,
    breakLine: true, valign: 'top',
  });

  // Engine 2
  addGlassCard(slide, 6.78, 1.55, 5.88, 3.15, C.panel, C.emerald);
  slide.addShape(pptx.ShapeType.rect, {
    x: 6.78, y: 1.55, w: 5.88, h: 0.06,
    fill: { color: C.emerald }, line: { color: C.emerald },
  });
  slide.addText('ENGINE 2: REAL-TIME AI PROCTORING', {
    x: 7.02, y: 1.72, w: 5.4, h: 0.32,
    fontSize: 12.5, bold: true, color: C.emerald,
  });
  slide.addText('Edge Computer Vision & Continuous Behavioral Verification', {
    x: 7.02, y: 2.02, w: 5.4, h: 0.24,
    fontSize: 8.5, color: C.slate400, italic: true,
  });
  const engine2Bullets = [
    { text: 'MediaPipe 3D Face Mesh: 468 landmarks for head pose (yaw/pitch/roll) and eye gaze deviation.', options: { bullet: { indent: 8 }, fontSize: 9.5, color: C.slate300 } },
    { text: 'YOLOv8-Nano: Real-time neural detection of prohibited mobile phones & additional persons.', options: { bullet: { indent: 8 }, fontSize: 9.5, color: C.slate300 } },
    { text: 'Web Worker Throttling: Limits inference to ~3 FPS, cutting client CPU/memory usage by ~70%.', options: { bullet: { indent: 8 }, fontSize: 9.5, color: C.slate300 } },
    { text: '3-Second Temporal Persistence: Requires 9 consecutive anomalous frames before review flagging.', options: { bullet: { indent: 8 }, fontSize: 9.5, color: C.emerald, bold: true } },
  ];
  slide.addText(engine2Bullets, {
    x: 7.02, y: 2.32, w: 5.4, h: 2.2,
    breakLine: true, valign: 'top',
  });

  // Bottom Section: Workflow Architecture Pipeline
  addGlassCard(slide, 0.65, 4.95, 12.01, 1.95, '0A101E', C.blue);
  slide.addText('END-TO-END UNIFIED EXAMINATION WORKFLOW', {
    x: 0.85, y: 5.08, w: 11.6, h: 0.26,
    fontSize: 8.5, bold: true, color: C.blue, charSpacing: 2,
  });

  // 6 Workflow Step Boxes
  const steps = [
    { title: '1. Candidate', sub: 'Browser Access', color: C.slate400 },
    { title: '2. Browser Exam', sub: 'Zero-Install WebApp', color: C.cyan },
    { title: '3. Dual Engines', sub: 'Quiz + CV Monitoring', color: C.purple },
    { title: '4. Evaluation', sub: 'NLP Rubrics & Events', color: C.amber },
    { title: '5. Twin Scores', sub: 'Trust (100) + Exam (%)', color: C.emerald },
    { title: '6. Final Report', sub: 'Evidence Ledger', color: C.blue },
  ];

  steps.forEach((st, i) => {
    const x = 0.85 + i * 1.95;
    const y = 5.42;
    const w = 1.68;
    const h = 1.25;

    // Step Container
    slide.addShape(pptx.ShapeType.roundRect, {
      x, y, w, h,
      rectRadius: 0.06, fill: { color: C.panel }, line: { color: st.color, width: 1 },
    });
    slide.addText(st.title, {
      x: x + 0.08, y: y + 0.22, w: w - 0.16, h: 0.36,
      fontSize: 10, bold: true, color: C.white, align: 'center',
    });
    slide.addText(st.sub, {
      x: x + 0.08, y: y + 0.58, w: w - 0.16, h: 0.42,
      fontSize: 8, color: st.color, align: 'center',
    });

    // Arrow (except last)
    if (i < steps.length - 1) {
      slide.addText('➔', {
        x: x + w + 0.02, y: y + 0.35, w: 0.25, h: 0.4,
        fontSize: 13, bold: true, color: C.cyan, align: 'center',
      });
    }
  });

  slide.addNotes(
    "Here is our core technical innovation: a dual-engine architecture that unifies exam creation with continuous monitoring. On the left, our Autonomous Quiz Agent converts syllabus materials into a structured 10-question assessment with pre-calculated rubrics. On the right, our vision pipeline runs client-side inside the browser using MediaPipe and YOLOv8-Nano. By throttling inference to approximately 3 FPS via Web Workers, we preserve candidate laptop responsiveness. The six-step workflow at the bottom demonstrates how both engines synchronize into a single explainable report."
  );

  addFooter(slide, 3, 7, 'Unified System Architecture');
})();

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 4: EXPLAINABLE 100-POINT TRUST MATRIX
// ═══════════════════════════════════════════════════════════════════════════════
(function buildSlide4() {
  const slide = pptx.addSlide();
  setSlideBackground(slide);
  addAccentBar(slide, C.amber);

  addSlideCategory(slide, 'Algorithmic Fairness · Evidence-Based Auditing', C.amber);
  addSlideHeader(slide, 'Trust Through Explainable Evidence');
  addDivider(slide, 1.35, C.border);

  // Left Section: Circular Score Gauge & Deduction Framework
  addGlassCard(slide, 0.65, 1.55, 4.95, 5.35, C.panel, C.amber);

  // Score Badge
  slide.addText('INITIAL TRUST SCORE', {
    x: 0.85, y: 1.72, w: 4.55, h: 0.26,
    fontSize: 8.5, bold: true, color: C.amber, align: 'center', charSpacing: 2,
  });

  // Circular Score Visualization
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 2.12, y: 2.05, w: 2.0, h: 2.0,
    fill: { color: '0A1526' }, line: { color: C.emerald, width: 3 },
  });
  slide.addText('100', {
    x: 2.12, y: 2.35, w: 2.0, h: 1.0,
    fontSize: 54, bold: true, color: C.white, align: 'center',
  });
  slide.addText('FULL TRUST BASELINE', {
    x: 2.12, y: 3.35, w: 2.0, h: 0.35,
    fontSize: 7.5, bold: true, color: C.emerald, align: 'center',
  });

  slide.addText('All candidates start at 100 points. Points are deducted only for sustained, verified infractions.', {
    x: 0.85, y: 4.18, w: 4.55, h: 0.42,
    fontSize: 8.5, italic: true, color: C.slate300, align: 'center',
  });

  // Illustrative Deductions Box
  slide.addText('ILLUSTRATIVE DEDUCTION FRAMEWORK', {
    x: 0.85, y: 4.7, w: 4.55, h: 0.24,
    fontSize: 7.5, bold: true, color: C.slate400, charSpacing: 1.5,
  });

  const deductions = [
    { label: 'Cell Phone / Hardware Detected', pts: '−20 Pts', sub: 'Instant Snapshot Capture', color: C.rose },
    { label: 'Multiple Faces in Video Frame', pts: '−15 Pts', sub: 'Secondary Person Flag', color: C.rose },
    { label: 'Candidate Absence (Empty Frame)', pts: '−10 Pts', sub: 'Absence Persistence', color: C.amber },
    { label: 'Persistent Off-Screen Gaze (>35°)', pts: '−5 Pts', sub: 'Sustained Deviation', color: C.amber },
  ];

  deductions.forEach((d, i) => {
    const y = 5.0 + i * 0.42;
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.85, y, w: 4.55, h: 0.36,
      fill: { color: '070D18' }, line: { color: C.border, width: 0.8 },
    });
    slide.addText(d.label, {
      x: 0.95, y: y + 0.06, w: 3.1, h: 0.24,
      fontSize: 8.5, color: C.slate200,
    });
    slide.addText(d.pts, {
      x: 4.15, y: y + 0.06, w: 1.15, h: 0.24,
      fontSize: 9.5, bold: true, color: d.color, align: 'right',
    });
  });

  // Right Section: Persistence Rule & Evidence Ledger
  // Card 1: 3-Second Temporal Persistence Rule
  addGlassCard(slide, 5.85, 1.55, 6.81, 2.55, C.panel, C.cyan);
  slide.addText('THE 3-SECOND TEMPORAL PERSISTENCE RULE', {
    x: 6.08, y: 1.72, w: 6.35, h: 0.32,
    fontSize: 12.5, bold: true, color: C.cyan,
  });
  slide.addText(
    'Human beings naturally sneeze, stretch, cough, and briefly glance away. ProctorEdge enforces a strict 9-frame (3.0 seconds at ~3 FPS) temporal persistence buffer before registering suspicious events.',
    {
      x: 6.08, y: 2.1, w: 6.35, h: 0.65,
      fontSize: 9.5, color: C.slate200, breakLine: true,
    }
  );

  const persistencePoints = [
    { text: 'A 1.2-second glance or cough causes ZERO deductions — scores stay at 100.', options: { bullet: { indent: 8 }, fontSize: 9, color: C.emerald } },
    { text: 'Deductions trigger ONLY if anomalous state persists for >= 3.0 continuous seconds.', options: { bullet: { indent: 8 }, fontSize: 9, color: C.slate300 } },
    { text: 'Eliminates approximately 99% of false alarms experienced in legacy proctoring tools.', options: { bullet: { indent: 8 }, fontSize: 9, color: C.cyan, bold: true } },
  ];
  slide.addText(persistencePoints, {
    x: 6.08, y: 2.8, w: 6.35, h: 1.15,
    breakLine: true, valign: 'top',
  });

  // Card 2: Audit-Ready Evidence Ledger & Human Review
  addGlassCard(slide, 5.85, 4.35, 6.81, 2.55, C.panel, C.emerald);
  slide.addText('AUDIT-READY EVIDENCE LEDGER & HUMAN REVIEW', {
    x: 6.08, y: 4.52, w: 6.35, h: 0.32,
    fontSize: 12.5, bold: true, color: C.emerald,
  });

  // Critical Principle Callout Box
  slide.addShape(pptx.ShapeType.rect, {
    x: 6.08, y: 4.9, w: 6.35, h: 0.55,
    fill: { color: '051D14' }, line: { color: C.emerald, width: 1 },
  });
  slide.addText('CORE PRINCIPLE: A suspicious event is an indicator for review, not automatic proof of cheating. Disciplinary decisions remain strictly with the human examiner.', {
    x: 6.18, y: 4.96, w: 6.15, h: 0.44,
    fontSize: 8.5, bold: true, color: C.emerald, breakLine: true,
  });

  const ledgerPoints = [
    { text: 'Every verified infraction event captures an encrypted, timestamped visual snapshot.', options: { bullet: { indent: 8 }, fontSize: 9, color: C.slate300 } },
    { text: 'Examiners access an infraction gallery for one-click dispute resolution without guesswork.', options: { bullet: { indent: 8 }, fontSize: 9, color: C.slate300 } },
    { text: 'Note: Deduction weights above reflect a proposed illustrative framework for institutional customization.', options: { bullet: { indent: 8 }, fontSize: 8.5, color: C.amber, italic: true } },
  ];
  slide.addText(ledgerPoints, {
    x: 6.08, y: 5.58, w: 6.35, h: 1.15,
    breakLine: true, valign: 'top',
  });

  slide.addNotes(
    "Judges, fairness is our highest design priority. We do not disqualify students on arbitrary heuristics. All candidates begin at full trust with 100 points. Our 3-second temporal persistence filter ensures that if a student stretches or sneezes, their score remains at 100. Deductions occur only if an anomaly persists for 9 consecutive sampled frames. Crucially, a flagged event is an indicator for review, not automated proof of cheating. Every event logs a timestamped snapshot, giving educators verifiable evidence for fair dispute resolution. Deduction weights shown are a proposed illustrative framework."
  );

  addFooter(slide, 4, 7, 'Explainable 100-Point Trust Matrix');
})();

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 5: SOURCE-GROUNDED NLP ANSWER EVALUATION
// ═══════════════════════════════════════════════════════════════════════════════
(function buildSlide5() {
  const slide = pptx.addSlide();
  setSlideBackground(slide);
  addAccentBar(slide, C.purple);

  addSlideCategory(slide, 'Academic Assessment Engine · Source-Grounded NLP Evaluation', C.purple);
  addSlideHeader(slide, 'Beyond Right or Wrong – Intelligent Answer Evaluation');
  addDivider(slide, 1.35, C.border);

  // Left Section: 4 Demonstration Result Cards (2x2 Grid)
  addGlassCard(slide, 0.65, 1.55, 6.2, 5.35, C.panel, C.purple);
  slide.addText('FOUR DEMO ANSWER TEST CATEGORIES (JS EVALUATOR)', {
    x: 0.85, y: 1.72, w: 5.8, h: 0.26,
    fontSize: 8.5, bold: true, color: C.purple, charSpacing: 1.5,
  });

  const demoCards = [
    {
      title: '1. FULLY CORRECT',
      score: '10 / 10',
      badge: 'GREEN · 100%',
      color: C.emerald,
      desc: 'Accurately contrasts TCP (3-way handshake, ACKs, flow/congestion control, 20B) vs UDP (connectionless, 8B, VoIP/DNS). Full entailment with chapter notes.',
    },
    {
      title: '2. PARTIALLY CORRECT',
      score: '6.7 / 10',
      badge: 'AMBER · PARTIAL',
      color: C.amber,
      desc: 'Correctly identifies connections and use cases; docks points for omitted technical mechanisms (missing 3-way handshake and ACK packets).',
    },
    {
      title: '3. CONTRADICTION',
      score: '0 / 10',
      badge: 'RED · ALERT',
      color: C.rose,
      desc: 'Deliberately claims "UDP guarantees reliable delivery & is used for banking." Factual inversion gate catches contradiction against chapter source.',
    },
    {
      title: '4. INSUFFICIENT / VAGUE',
      score: '0 / 10',
      badge: 'GRAY · LOW DENSITY',
      color: C.slate400,
      desc: 'Vague filler text ("Both are protocols..."). Lexical density gate (<35 words) filters out low-effort responses before running expensive evaluations.',
    },
  ];

  demoCards.forEach((dc, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.85 + col * 2.95;
    const y = 2.05 + row * 1.55;
    const w = 2.8;
    const h = 1.45;

    slide.addShape(pptx.ShapeType.roundRect, {
      x, y, w, h,
      rectRadius: 0.06, fill: { color: '09101D' }, line: { color: dc.color, width: 1 },
    });
    slide.addText(dc.title, {
      x: x + 0.1, y: y + 0.1, w: w - 0.2, h: 0.24,
      fontSize: 9, bold: true, color: C.white,
    });
    slide.addText(`${dc.score}  ·  ${dc.badge}`, {
      x: x + 0.1, y: y + 0.32, w: w - 0.2, h: 0.22,
      fontSize: 8, bold: true, color: dc.color,
    });
    slide.addText(dc.desc, {
      x: x + 0.1, y: y + 0.56, w: w - 0.2, h: 0.82,
      fontSize: 7.8, color: C.slate300, breakLine: true,
    });
  });

  // Note Box at Bottom of Left Panel
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.85, y: 5.25, w: 5.8, h: 1.45,
    fill: { color: '060C16' }, line: { color: C.border, width: 0.8 },
  });
  slide.addText('EVALUATOR ARCHITECTURE & TRANSPARENCY NOTE', {
    x: 0.95, y: 5.35, w: 5.6, h: 0.22,
    fontSize: 7.8, bold: true, color: C.cyan,
  });
  slide.addText(
    '• Deterministic MCQ Grading: Instant zero-drift evaluation against JSON answer keys.\n• Descriptive Rubric Grading: Multi-tier criterion scoring (accuracy, mechanisms, use cases).\n• Controlled Test Cases: The 4 demo outputs reflect controlled JavaScript evaluator script tests (demo_test_evaluator.js), not statistical real-world accuracy claims.',
    {
      x: 0.95, y: 5.6, w: 5.6, h: 1.0,
      fontSize: 8, color: C.slate300, breakLine: true,
    }
  );

  // Right Section: Competitive Positioning Comparison Table
  addGlassCard(slide, 7.1, 1.55, 5.58, 5.35, C.panel, C.blue);
  slide.addText('COMPETITIVE POSITIONING MATRIX', {
    x: 7.3, y: 1.72, w: 5.18, h: 0.26,
    fontSize: 8.5, bold: true, color: C.blue, charSpacing: 1.5,
  });

  const tableHeaders = ['Key Capability', 'ProctorEdge', 'Gradescope', 'Khanmigo', 'Kahoot!'];
  const tableRows = [
    ['Real-Time Edge CV Proctoring', 'YES (3 FPS)', 'NO', 'NO', 'NO'],
    ['Automated Chapter-to-Quiz', 'YES', 'NO', 'Partial', 'NO'],
    ['Criterion-Level Partial Credit', 'YES', 'Manual', 'Basic', 'NO'],
    ['Factual Contradiction Flagging', 'YES (Rules)', 'NO', 'NO', 'NO'],
    ['Zero-Install WebApp Experience', 'YES', 'YES', 'YES', 'YES'],
    ['Unified Proctor + Grading Flow', 'YES', 'NO', 'NO', 'NO'],
  ];

  const tableData = [
    tableHeaders.map((th, ci) => ({
      text: th,
      options: {
        bold: true,
        color: ci === 1 ? C.cyan : C.slate300,
        fontSize: 8.5,
        fill: { color: '0A162A' },
        align: ci === 0 ? 'left' : 'center',
      },
    })),
    ...tableRows.map((tr, ri) =>
      tr.map((cell, ci) => ({
        text: cell,
        options: {
          bold: ci === 1,
          color: ci === 1 ? C.emerald : (cell === 'NO' ? C.slate500 : C.slate300),
          fontSize: 8,
          fill: { color: ri % 2 === 0 ? C.panel : '0A1220' },
          align: ci === 0 ? 'left' : 'center',
        },
      }))
    ),
  ];

  slide.addTable(tableData, {
    x: 7.25, y: 2.1, w: 5.28, h: 3.0,
    border: { type: 'solid', color: C.border, pt: 0.5 },
    rowH: 0.42,
    colW: [2.18, 0.95, 0.8, 0.75, 0.6],
  });

  // Focus Statement Box
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 7.25, y: 5.25, w: 5.28, h: 1.45,
    rectRadius: 0.06, fill: { color: '071424' }, line: { color: C.cyan, width: 1 },
  });
  slide.addText('PROCTOREDGE UNIQUE FOCUS', {
    x: 7.4, y: 5.35, w: 5.0, h: 0.22,
    fontSize: 8, bold: true, color: C.cyan,
  });
  slide.addText(
    'While Gradescope focuses solely on manual grading workflows and Khanmigo provides broad conversational tutoring, ProctorEdge is purpose-built to combine lightweight browser-native camera proctoring with explainable rubric-based answer evaluation in a single unified examination workflow.',
    {
      x: 7.4, y: 5.62, w: 5.0, h: 0.98,
      fontSize: 8.5, color: C.slate200, breakLine: true,
    }
  );

  slide.addNotes(
    "Let's turn to academic assessment. Instead of giving flat binary scores, ProctorEdge decomposes descriptive responses against multi-tier rubrics. Our four demo answers demonstrate this: Full credit is awarded for comprehensive answers; transparent partial credit is granted when key steps like the 3-way handshake are omitted; and our contradiction gate flags factual inversions like claiming UDP guarantees reliability. Note that these results reflect our controlled JavaScript test evaluator. Our comparison matrix highlights ProctorEdge's unique market focus: unifying proctoring and grading into a single browser-native platform."
  );

  addFooter(slide, 5, 7, 'Source-Grounded NLP Answer Evaluation');
})();

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 6: TECHNOLOGY STACK, LIMITATIONS & FUTURE ROADMAP
// ═══════════════════════════════════════════════════════════════════════════════
(function buildSlide6() {
  const slide = pptx.addSlide();
  setSlideBackground(slide);
  addAccentBar(slide, C.blue);

  addSlideCategory(slide, 'Technical Foundations · Engineering Realities · Horizon Vision', C.blue);
  addSlideHeader(slide, 'Built Today. Improved Tomorrow.');
  addDivider(slide, 1.35, C.border);

  // 3 Distinct Section Columns
  const sections = [
    {
      title: 'TECHNOLOGY STACK',
      subtitle: 'Currently Implemented Prototype',
      accent: C.cyan,
      badge: 'PROTOTYPE ACTIVE',
      points: [
        'MediaPipe Face Mesh: 468 3D landmarks for head pose (yaw/pitch/roll) & eye gaze deviation.',
        'YOLOv8-Nano: On-device neural detection of mobile phones, secondary persons, and items.',
        'Browser WebApp: HTML5 Canvas, Web Workers (3 FPS throttling), zero installation.',
        'Source-Grounded Evaluator: Curriculum alignment against uploaded chapter texts & rubrics.',
        'Rule-Based Grading: Deterministic MCQ checking and regex contradiction rules.',
      ],
    },
    {
      title: 'CURRENT LIMITATIONS',
      subtitle: 'Honest Engineering Disclosures',
      accent: C.amber,
      badge: 'TRANSPARENT BOUNDARIES',
      points: [
        'Ambient Lighting & Angles: Glare, poor lighting, or extreme camera angles affect detection.',
        'Computer Vision False Positives: Natural body stretching or atypical postures may trigger flags.',
        'Lexical vs Semantic Limits: Rule-based offline grading checks keywords, not deep meaning.',
        'Human Review Requirement: Automated flags are screening indicators, never final verdicts.',
        'Hardware Variances: Varied webcam resolutions require calibrated confidence thresholds.',
      ],
    },
    {
      title: 'FUTURE ROADMAP',
      subtitle: 'Production & Campus Rollout',
      accent: C.purple,
      badge: '60 - 120 DAY HORIZON',
      points: [
        'Fine-Tuned DeBERTa Graders: Sub-50ms local semantic grading with full NLI entailment.',
        'Acoustic & Lip-Sync Verification: Voice Activity Detection (VAD) coupled with lip motion.',
        'Iris Saccade Tracking: Differentiating deep thinking from reading off-screen notes.',
        'Teacher Review Queue: Anomaly-sorted submission queues to review 200 exams in 10 minutes.',
        'LTI 1.3 LMS Integration: Direct plug-and-play SSO for Canvas, Moodle, and Blackboard.',
      ],
    },
  ];

  sections.forEach((sec, i) => {
    const x = 0.65 + i * 4.12;
    const y = 1.55;
    const w = 3.82;
    const h = 5.35;

    addGlassCard(slide, x, y, w, h, C.panel, sec.accent);

    // Glowing Header Bar
    slide.addShape(pptx.ShapeType.rect, {
      x, y, w, h: 0.06,
      fill: { color: sec.accent }, line: { color: sec.accent },
    });

    // Pill Badge
    slide.addShape(pptx.ShapeType.roundRect, {
      x: x + 0.18, y: y + 0.16, w: w - 0.36, h: 0.28,
      rectRadius: 0.06, fill: { color: '0A1424' }, line: { color: sec.accent, width: 0.8 },
    });
    slide.addText(sec.badge, {
      x: x + 0.18, y: y + 0.18, w: w - 0.36, h: 0.24,
      fontSize: 7.5, bold: true, color: sec.accent, align: 'center', charSpacing: 1.5,
    });

    // Column Title & Subtitle
    slide.addText(sec.title, {
      x: x + 0.18, y: y + 0.52, w: w - 0.36, h: 0.34,
      fontSize: 13, bold: true, color: C.white,
    });
    slide.addText(sec.subtitle, {
      x: x + 0.18, y: y + 0.84, w: w - 0.36, h: 0.24,
      fontSize: 8.5, color: C.slate400, italic: true,
    });

    // Bullets
    const bulletLines = sec.points.map(pt => ({
      text: pt,
      options: { bullet: { indent: 8 }, fontSize: 9.2, color: C.slate300 },
    }));
    slide.addText(bulletLines, {
      x: x + 0.18, y: y + 1.15, w: w - 0.36, h: 4.0,
      breakLine: true, valign: 'top',
    });
  });

  slide.addNotes(
    "To be completely transparent with the judging panel: Column 1 outlines what is implemented in our working prototype today: MediaPipe Face Mesh, YOLOv8-Nano, 3 FPS Web Worker throttling, and rule-based rubric evaluation. Column 2 acknowledges our current technical boundaries: lighting conditions, camera placement, and the reality that automated flags require teacher review. Column 3 presents our 60 to 120-day production roadmap: fine-tuning DeBERTa for semantic NLI grading, adding acoustic lip-sync verification, and building LTI 1.3 Canvas and Moodle LMS integrations."
  );

  addFooter(slide, 6, 7, 'Technology Stack, Limitations & Roadmap');
})();

// ═══════════════════════════════════════════════════════════════════════════════
// SLIDE 7: THANK YOU
// ═══════════════════════════════════════════════════════════════════════════════
(function buildSlide7() {
  const slide = pptx.addSlide();
  setSlideBackground(slide);
  addAccentBar(slide, C.emerald);

  // Giant Center Glass Presentation Frame
  const frameX = 1.25;
  const frameY = 0.85;
  const frameW = 10.83;
  const frameH = 5.75;

  addGlassCard(slide, frameX, frameY, frameW, frameH, C.panel, C.cyan);

  // Top Neon Line
  slide.addShape(pptx.ShapeType.rect, {
    x: frameX, y: frameY, w: frameW, h: 0.08,
    fill: { color: C.cyan }, line: { color: C.cyan },
  });

  // Top Challenge Badge
  slide.addText('FACTSKOOT INTERNSHIP CAMPUS CHALLENGE 2026  ·  LIVE CAMPUS PROJECT', {
    x: frameX, y: frameY + 0.35, w: frameW, h: 0.32,
    fontSize: 9, bold: true, color: C.cyan, align: 'center', charSpacing: 2,
  });

  // Main Thank You Title
  slide.addText('THANK YOU!', {
    x: frameX, y: frameY + 0.75, w: frameW, h: 1.1,
    fontSize: 54, bold: true, color: C.white, align: 'center', charSpacing: 3,
  });

  // Subtitle
  slide.addText('Thank you for your time, consideration, and feedback.', {
    x: frameX, y: frameY + 1.85, w: frameW, h: 0.42,
    fontSize: 16, color: C.slate200, align: 'center',
  });

  // Divider
  slide.addShape(pptx.ShapeType.line, {
    x: frameX + 1.5, y: frameY + 2.45, w: frameW - 3.0, h: 0,
    line: { color: C.border, width: 1.2 },
  });

  // Project Logo / Branding
  slide.addText('PROCTOREDGE', {
    x: frameX, y: frameY + 2.7, w: frameW, h: 0.65,
    fontSize: 32, bold: true, color: C.cyan, align: 'center', charSpacing: 2,
  });
  slide.addText('Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment', {
    x: frameX, y: frameY + 3.35, w: frameW, h: 0.38,
    fontSize: 12.5, bold: true, color: C.slate300, align: 'center',
  });
  slide.addText('"Smarter Assessments. Better Insights."', {
    x: frameX, y: frameY + 3.75, w: frameW, h: 0.38,
    fontSize: 13.5, italic: true, color: C.emerald, align: 'center',
  });

  // 3 Pill Badges
  const pills = [
    'Zero-Install Browser Engine',
    'Dual Edge CV + NLP Pipeline',
    'Explainable Algorithmic Fairness',
  ];
  pills.forEach((p, i) => {
    const pw = 2.8;
    const px = frameX + 0.8 + i * 3.3;
    const py = frameY + 4.3;

    slide.addShape(pptx.ShapeType.roundRect, {
      x: px, y: py, w: pw, h: 0.42,
      rectRadius: 0.21, fill: { color: '0A1628' }, line: { color: C.purple, width: 1 },
    });
    slide.addText(p, {
      x: px, y: py + 0.08, w: pw, h: 0.26,
      fontSize: 9, bold: true, color: C.purple, align: 'center',
    });
  });

  // Team & Call to Action
  slide.addText('4-Member Engineering Squad  ·  Computer Vision & NLP Track', {
    x: frameX, y: frameY + 4.95, w: frameW, h: 0.3,
    fontSize: 9.5, color: C.slate400, align: 'center',
  });
  slide.addText('We welcome your questions and feedback!', {
    x: frameX, y: frameY + 5.25, w: frameW, h: 0.32,
    fontSize: 11, bold: true, color: C.cyan, align: 'center',
  });

  slide.addNotes(
    "Thank you judges for your time and consideration. ProctorEdge was built to transform remote campus hiring challenges into trustworthy, fair, and automatically graded academic evaluations. We invite your questions, feedback, and discussion on our architecture, edge vision proctoring, and source-grounded grading engine."
  );

  addFooter(slide, 7, 7, 'Thank You');
})();

// ─── Write File ───────────────────────────────────────────────────────────────
const outPath = path.join(__dirname, 'ProctorEdge_Pitch_Deck.pptx');
pptx.writeFile({ fileName: outPath })
  .then(() => {
    console.log('SUCCESS: Professional 7-Slide Pitch Deck written to:', outPath);
  })
  .catch(err => {
    console.error('ERROR during PPTX generation:', err.message);
    process.exit(1);
  });
