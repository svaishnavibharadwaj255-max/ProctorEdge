# PROCTOREDGE
### Real-Time AI Anti-Cheat Camera Proctoring with Automated Exam Assessment

## 1. Project Overview

ProctorEdge is a proposed AI-powered online examination support system that combines computer vision-based proctoring with automated answer assessment.

The project aims to assist examiners in monitoring suspicious activity indicators and evaluating candidate answers using reference material and scoring rubrics.

## 2. Main Components

### A. Computer Vision Proctoring

Proposed technologies and workflow:

- **MediaPipe Face Mesh:** Facial landmark detection and gaze/head-pose indicators.
- **YOLOv8-Nano:** Phone and additional-person detection.
- **Frame Sampling:** Approximately 3 frames per second.
- **Persistence Filtering:** A 3-second persistence rule (9 sampled frames).
- **Evidence Snapshots:** Timestamped images for examiner review.

### B. NLP-Based Answer Assessment

The demonstration includes:

- Reference-material-based questions.
- MCQ answer-key evaluation.
- Rubric-based descriptive answer evaluation.
- Basic contradiction checks.
- Score and feedback generation.

## 3. Project Folder Structure

```text
proctor-edge/
│
├── demo-data/
│   ├── computer_networks_chapter.txt
│   ├── demo_script_answers.md
│   ├── demo_test_evaluator.js
│   ├── demo_test_evaluator.py
│   ├── generated_quiz_10q.json
│   ├── pitch_deck_outline.md
│   └── presentation_deck.html
│
└── README.md
```

## 4. Demo Dataset

**Subject:** Computer Networks

The reference chapter covers:

- OSI Model
- IPv4 and IPv6
- TCP and UDP
- TCP Three-Way Handshake
- DNS
- TTL and IP addressing

The offline quiz contains 10 questions:
- 7 Multiple Choice Questions
- 3 Short Answer Questions

## 5. Running the Evaluation Harness

### JavaScript Evaluator

Open the VS Code terminal in the project root and run:

```powershell
node demo-data/demo_test_evaluator.js
```

### Python Evaluator

Run:

```powershell
py demo-data/demo_test_evaluator.py
```

Both evaluators have passed four designed test cases.

| Test Case | Expected Result |
|---|---|
| Fully Correct | 10/10 – GREEN |
| Partially Correct | 6.7/10 – AMBER |
| Contradictory | 0/10 – RED |
| Insufficient Content | 0/10 – GRAY |

## 6. Presentation

Open `demo-data/presentation_deck.html` in Google Chrome to view the 12-slide project presentation.

Use the arrow keys or Previous/Next buttons to navigate.

## 7. Current Prototype Limitations

- The evaluation harness uses simplified rule-based checks.
- Keyword matching does not guarantee semantic correctness.
- Contradiction detection is limited and may produce errors.
- Computer vision components are part of the proposed system design and require implementation and validation before being presented as a working integrated feature.
- Automated flags are indicators for human review, not proof of cheating.

## 8. Future Enhancements

- Integrate live webcam-based monitoring.
- Improve semantic answer evaluation.
- Add secure candidate and examination management.
- Develop a combined examiner dashboard.
- Test performance and accuracy across different environments.

## 9. Conclusion

ProctorEdge aims to combine intelligent examination monitoring and automated answer assessment to support more efficient and responsible online examinations.

**Smarter Assessments. Better Insights.**
