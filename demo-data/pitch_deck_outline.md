# PROCTOREDGE
## Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment

### Slide 1 – Title & Factskoot Challenge Fit
- **Project:** ProctorEdge
- **Tagline:** Smarter Assessments. Better Insights.
- **Challenge:** Factskoot Internship Campus Challenge 2026
- **Project Focus:** Live Campus Project – Computer Vision
- **Team:** Four Members
- **Core Idea:** Combine real-time camera-based proctoring with automated examination assessment.

### Slide 2 – The Problem
- **False-positive panic:** Brief movements or looking away can trigger unnecessary suspicion.
- **Exam loopholes:** Hidden phones, additional people and pre-recorded video loops can compromise online examinations.
- **Manual monitoring:** Monitoring many candidates simultaneously is difficult.
- **Slow evaluation:** Descriptive answer assessment requires time and consistent grading.
- **Lack of transparency:** Examiners need clear evidence and understandable scoring.

### Slide 3 – Our Unified Architecture
ProctorEdge combines two coordinated engines:

**1. Autonomous 10-Question Quiz Agent**
- Generates a structured 10-question examination from supplied study material.
- Supports objective and descriptive questions.
- Collects candidate answers for automated assessment.

**2. Real-Time Proctoring Engine**
- Uses MediaPipe Face Mesh for facial landmarks and monitoring indicators.
- Uses YOLOv8-Nano for detecting additional people and mobile phones.
- Processes sampled camera frames at approximately 3 FPS.
- Combines suspicious indicators with temporal filtering.

**Overall Workflow:**
Candidate → Quiz → Answer Submission → Camera Monitoring → Answer Evaluation → Combined Exam Report.

### Slide 4 – Explainable 100-Point Trust Matrix
**Goal:** Make suspicious-event scoring understandable and reviewable.

- Starts with a 100-point trust score.
- Applies weighted deductions for configured suspicious indicators.
- Uses a 3-second temporal persistence rule to filter brief events.
- At approximately 3 FPS, this represents 9 sampled frames.
- Maintains timestamped evidence snapshots for examiner review.
- Provides an explainable record of detected events and score changes.

**Important:** A low trust score or suspicious indicator is not automatic proof of cheating. Human review is essential.

### Slide 5 – Source-Grounded NLP Grading
- Questions are generated from supplied study material.
- MCQs are checked using deterministic answer keys.
- Descriptive answers are evaluated against reference content and grading criteria.
- Criterion-level partial credit recognises partially correct answers.
- Contradiction checks flag potentially incorrect statements.
- Feedback identifies strengths, missing concepts and areas for improvement.

**Evaluation Demonstration:**
- Fully correct answer: 10/10 – GREEN
- Partially correct answer: 6.7/10 – AMBER
- Contradictory answer: 0/10 – RED
- Insufficient answer: 0/10 – GRAY

**Competitive Positioning:** ProctorEdge aims to bring examination proctoring and explainable answer assessment into one workflow, complementing learning and assessment tools such as Khanmigo, Kahoot and Gradescope.

### Slide 6 – Production Roadmap
**Planned Improvements:**
- Fine-tuned DeBERTa-based graders for stronger semantic evaluation.
- Lip-sync and audio checks for additional identity and activity indicators.
- Iris-reading detection research to improve suspicious-behaviour analysis.
- Teacher review queues for flagged events and disputed assessments.
- Better calibration of detection thresholds.
- Secure candidate and examination management.
- Live dashboards and detailed reports.
- Broader testing across devices and examination environments.

**Conclusion:** ProctorEdge proposes a unified, evidence-supported examination workflow that combines computer vision monitoring with automated answer assessment while keeping fairness and human review central.

**PROCTOREDGE – Smarter Assessments. Better Insights.**