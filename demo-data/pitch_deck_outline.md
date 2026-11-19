
# PROCTOREDGE
## Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment

### Slide 1 – Title
- Project: ProctorEdge
- Tagline: Smarter, Fairer and More Reliable Online Assessments
- Team: Four Members
- Internship Challenge: Factskoot Campus Challenge 2026

### Slide 2 – Problem Statement
- Online examinations are vulnerable to suspicious activities.
- Manual monitoring of candidates is difficult at scale.
- Evaluating descriptive answers takes time and effort.
- Traditional systems may not provide clear evidence or consistent feedback.

### Slide 3 – Our Solution
ProctorEdge combines two assessment engines:
1. Computer Vision Proctoring
2. NLP-Based Answer Evaluation

The platform aims to assist examiners by identifying suspicious patterns and evaluating answers against reference material.

### Slide 4 – System Architecture
Candidate
  |
  v
Browser-Based Examination
  |
  +---------------------------+
  |                           |
  v                           v
Camera Monitoring       Answer Evaluation
  |                           |
  v                           v
Face Mesh / Gaze          Reference Content
Head Pose / Detection     Rubric-Based Grading
  |                           |
  v                           v
Suspicious Event Flags    Answer Scores
  |                           |
  +-------------+-------------+
                |
                v
       Combined Exam Report

### Slide 5 – Computer Vision Proctoring
- Webcam-based monitoring.
- MediaPipe Face Mesh for facial landmarks and head-pose/gaze indicators.
- YOLOv8-Nano for detecting phones and additional people.
- Frame sampling at approximately 3 FPS.
- Persistence filtering over 3 seconds (9 sampled frames).
- Timestamped evidence snapshots for review.

### Slide 6 – NLP-Based Assessment
- Questions are grounded in supplied study material.
- MCQs use deterministic answer-key evaluation.
- Descriptive answers are evaluated against rubrics.
- Concept coverage contributes to scoring.
- Contradiction checks flag potentially incorrect claims.
- Final feedback highlights strengths and improvement areas.

### Slide 7 – Demo Dataset
- Subject: Computer Networks.
- Reference chapter: computer_networks_chapter.txt.
- Sample answers: demo_script_answers.md.
- Offline quiz: generated_quiz_10q.json.
- Test cases: fully correct, partially correct, contradictory and insufficient answers.

### Slide 8 – Evaluation Harness Results
- JavaScript evaluator: 4 out of 4 tests passed.
- Python evaluator: 4 out of 4 tests passed.
- Full-credit answer: 10/10 – GREEN.
- Partial-credit answer: 6.7/10 – AMBER.
- Contradictory answer: 0/10 – RED.
- Insufficient answer: 0/10 – GRAY.

Note: These are controlled prototype test cases, not real-world accuracy measurements.

### Slide 9 – Trust and Evidence
- Suspicious indicators should be reviewed, not treated as proof of cheating.
- Persistence filtering helps reduce brief false alerts.
- Timestamped snapshots provide supporting evidence.
- Human review remains important before making disciplinary decisions.

### Slide 10 – Limitations and Future Scope
Current prototype limitations:
- Camera-based detection can produce false positives.
- Gaze estimation is affected by lighting and camera placement.
- Rule-based grading does not fully understand answer meaning.
- NLI contradiction detection can make mistakes.

Future improvements:
- Stronger semantic answer evaluation.
- Better calibration of detection thresholds.
- Secure candidate and exam management.
- Live dashboards and detailed reports.
- Broader testing across devices and environments.

### Slide 11 – Conclusion
ProctorEdge brings camera-based monitoring and automated answer assessment together in one proposed examination workflow.

It aims to support more efficient assessments while keeping human review and fairness central.

### Slide 12 – Thank You
PROCTOREDGE
Smarter Assessments. Better Insights.
