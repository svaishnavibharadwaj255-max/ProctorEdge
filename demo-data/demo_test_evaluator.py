
"""
====================================================
 PROCTOREDGE - PYTHON EVALUATION TESTING HARNESS
 Purpose: Test four categories of student answers
====================================================
"""

import re


# ================================================
# TEST CASES
# ================================================

test_cases = [

    {
        "name": "Sample 1 - Fully Correct",

        "answer": """
        TCP uses a three-way handshake consisting of
        SYN, SYN-ACK and ACK. It uses sequence numbers,
        acknowledgements, retransmission, sliding window
        and congestion control.

        TCP has a minimum 20-byte header and provides
        reliable communication.

        UDP is connectionless, does not guarantee delivery
        and has an 8-byte header. UDP is used for gaming
        and VoIP applications.
        """,

        "expected_score": 10,
        "expected_status": "FULL_CREDIT",
        "expected_flag": "GREEN"
    },

    {
        "name": "Sample 2 - Partially Correct",

        "answer": """
        TCP and UDP are two important transport layer
        protocols used for communication between computers.

        TCP establishes a connection before sending data
        and provides reliable communication.

        TCP uses retransmission to recover lost data.

        UDP is connectionless and has lower overhead.
        It is commonly used for online gaming and
        live streaming where speed is important.
        """,

        "expected_score": 6.7,
        "expected_status": "PARTIAL_CREDIT",
        "expected_flag": "AMBER"
    },

    {
        "name": "Sample 3 - Deliberate Contradiction",

        "answer": """
        UDP is connection-oriented and guarantees 100%
        reliable delivery using acknowledgements and
        retransmissions.

        TCP is an unreliable protocol and does not
        provide retransmissions.
        """,

        "expected_score": 0,
        "expected_status": "CRITICAL_CONTRADICTION",
        "expected_flag": "RED"
    },

    {
        "name": "Sample 4 - Insufficient Content",

        "answer": """
        TCP and UDP are both protocols used in networking.
        One is fast and the other is slow.
        Both help computers communicate with each other
        over networks.
        """,

        "expected_score": 0,
        "expected_status": "INSUFFICIENT_CONTENT",
        "expected_flag": "GRAY"
    }

]


# ================================================
# EVALUATION FUNCTION
# ================================================

def evaluate_answer(answer):

    text = answer.lower().strip()

    words = text.split()

    # RULE 1: CHECK CONTRADICTIONS FIRST

    contradictions = [
        r"udp is connection-oriented",
        r"udp guarantees 100% reliable delivery",
        r"tcp is unreliable",
        r"tcp does not provide acknowledgements",
        r"tcp does not provide retransmissions"
    ]

    has_contradiction = any(
        re.search(pattern, text)
        for pattern in contradictions
    )

    if has_contradiction:
        return {
            "score": 0,
            "status": "CRITICAL_CONTRADICTION",
            "flag": "RED"
        }

    # RULE 2: CHECK CONTENT LENGTH

    if len(words) < 35:
        return {
            "score": 0,
            "status": "INSUFFICIENT_CONTENT",
            "flag": "GRAY"
        }

    # RULE 3: CHECK TECHNICAL CONCEPTS

    concepts = [
        "three-way handshake",
        "syn",
        "syn-ack",
        "ack",
        "sequence numbers",
        "sliding window",
        "congestion control",
        "retransmission",
        "connectionless",
        "20-byte",
        "8-byte"
    ]

    matched_concepts = [
        concept for concept in concepts
        if concept in text
    ]

    matched_count = len(matched_concepts)

    # FULL CREDIT

    if matched_count >= 9:
        return {
            "score": 10,
            "status": "FULL_CREDIT",
            "flag": "GREEN"
        }

    # PARTIAL CREDIT

    if matched_count >= 2:
        return {
            "score": 6.7,
            "status": "PARTIAL_CREDIT",
            "flag": "AMBER"
        }

    # INSUFFICIENT TECHNICAL CONTENT

    return {
        "score": 0,
        "status": "INSUFFICIENT_CONTENT",
        "flag": "GRAY"
    }


# ================================================
# RUN EVALUATION TESTS
# ================================================

print("\n======================================")
print("     PROCTOREDGE PYTHON EVALUATOR")
print("======================================\n")

passed = 0
failed = 0

for index, test in enumerate(test_cases, start=1):

    result = evaluate_answer(test["answer"])

    is_passed = (
        result["score"] == test["expected_score"]
        and result["status"] == test["expected_status"]
        and result["flag"] == test["expected_flag"]
    )

    if is_passed:
        passed += 1
    else:
        failed += 1

    print(f"TEST {index}: {test['name']}")

    print(f"Expected Score : {test['expected_score']}/10")
    print(f"Actual Score   : {result['score']}/10")

    print(f"Expected Status: {test['expected_status']}")
    print(f"Actual Status  : {result['status']}")

    print(f"Expected Flag  : {test['expected_flag']}")
    print(f"Actual Flag    : {result['flag']}")

    print(
        f"TEST RESULT    : {'PASS' if is_passed else 'FAIL'}"
    )

    print("--------------------------------------")


# ================================================
# FINAL SUMMARY
# ================================================

print("\n======================================")
print("          FINAL TEST SUMMARY")
print("======================================")

print(f"Total Tests : {len(test_cases)}")
print(f"Passed      : {passed}")
print(f"Failed      : {failed}")

if failed == 0:
    print("Final Result: ALL TESTS PASSED")
else:
    print("Final Result: SOME TESTS FAILED")

print("======================================\n")
