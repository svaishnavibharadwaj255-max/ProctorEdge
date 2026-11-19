
# PROCTOREDGE – DEMO SCRIPT ANSWERS

## Examination Question

Explain the key differences between TCP and UDP at the Transport Layer, detailing connection establishment, reliability mechanisms, and their respective ideal use cases.

---

## SAMPLE 1 – FULLY CORRECT ANSWER

**Student Answer:**

TCP (Transmission Control Protocol) is a connection-oriented protocol that provides reliable and ordered data delivery. It establishes a connection using a three-way handshake consisting of SYN, SYN-ACK and ACK.

TCP uses sequence numbers to identify data segments and acknowledgements (ACKs) to confirm successful receipt. It also uses retransmission to recover lost data, sliding window mechanisms for flow control and congestion control to manage network traffic.

TCP has a minimum header size of 20 bytes. It is suitable for applications requiring reliable communication, such as file transfers, web browsing and email.

UDP (User Datagram Protocol) is a connectionless protocol that sends independent datagrams without establishing a connection. It does not guarantee delivery, ordering or retransmission of lost packets.

UDP has an 8-byte header and lower protocol overhead. It is suitable for low-latency applications such as online gaming, VoIP and DNS.

**Expected Evaluation:**
- Technical correctness: Excellent
- Completeness: Excellent
- Contradictions: None
- Expected Score: 10/10
- Expected Status: FULL_CREDIT
- Expected Flag: GREEN

---

## SAMPLE 2 – PARTIALLY CORRECT ANSWER

**Student Answer:**

TCP and UDP are two important transport layer protocols used for communication between applications.

TCP establishes a connection before transferring data and provides reliable communication. It is generally used for file transfers and web browsing.

UDP does not establish a connection before sending data. It is faster and is commonly used in online gaming and video streaming.

However, TCP has more overhead than UDP, while UDP is lightweight.

**Expected Evaluation:**
- Technical correctness: Mostly correct
- Completeness: Missing important technical details
- Missing concepts: Three-way handshake, sequence numbers, acknowledgements and sliding windows
- Expected Score: 6.7/10
- Expected Status: PARTIAL_CREDIT
- Expected Flag: AMBER

---

## SAMPLE 3 – DELIBERATE FACTUAL CONTRADICTION

**Student Answer:**

TCP and UDP are both connection-oriented protocols. UDP guarantees 100% reliable data delivery using acknowledgements and retransmissions.

UDP is mainly used for banking transactions because it guarantees that every packet reaches its destination.

TCP is an unreliable protocol and does not provide acknowledgements or retransmissions.

**Expected Evaluation:**
- Technical correctness: Incorrect
- Contradictions: Multiple factual contradictions
- Contradiction 1: UDP is connection-oriented.
- Contradiction 2: UDP guarantees reliable delivery using acknowledgements and retransmissions.
- Contradiction 3: TCP is unreliable and does not provide retransmissions.
- Expected Score: 0/10
- Expected Status: CRITICAL_CONTRADICTION
- Expected Flag: RED

---

## SAMPLE 4 – VAGUE / INSUFFICIENT CONTENT

**Student Answer:**

TCP and UDP are both protocols used in networking. One is fast and the other is slow. Both help computers communicate with each other over networks.

**Expected Evaluation:**
- Technical correctness: Insufficient information
- Content quality: Too vague
- Word count: Below 35 words
- Semantic density: Insufficient
- Expected Score: 0/10
- Expected Status: INSUFFICIENT_CONTENT
- Expected Flag: GRAY

---

## DEMONSTRATION SUMMARY

| Sample | Expected Score | Status | Flag |
|---|---:|---|---|
| Sample 1 | 10/10 | FULL_CREDIT | GREEN |
| Sample 2 | 6.7/10 | PARTIAL_CREDIT | AMBER |
| Sample 3 | 0/10 | CRITICAL_CONTRADICTION | RED |
| Sample 4 | 0/10 | INSUFFICIENT_CONTENT | GRAY |

## PURPOSE OF THIS DEMONSTRATION

These four answers demonstrate that ProctorEdge does not simply award marks based on matching keywords.

It evaluates technical correctness, completeness, factual contradictions and answer quality.

The expected scores above are demonstration targets. The actual evaluator must be tested against them.
