
/*
====================================================
 PROCTOREDGE - EVALUATION TESTING HARNESS
 Purpose: Evaluate four categories of student answers
====================================================
*/

const testCases = [

  // SAMPLE 1: FULLY CORRECT ANSWER
  {
    name: "Sample 1 - Fully Correct",

    answer: `
      TCP uses a three-way handshake consisting of
      SYN, SYN-ACK and ACK. It uses sequence numbers,
      acknowledgements, retransmission, sliding window
      and congestion control.

      TCP has a minimum 20-byte header and provides
      reliable communication.

      UDP is connectionless, does not guarantee delivery
      and has an 8-byte header. UDP is used for gaming
      and VoIP applications.
    `,

    expectedScore: 10,
    expectedStatus: "FULL_CREDIT",
    expectedFlag: "GREEN"
  },

  // SAMPLE 2: PARTIALLY CORRECT ANSWER
  {
    name: "Sample 2 - Partially Correct",

    answer: `
      TCP and UDP are two important transport layer
      protocols used for communication between computers.

      TCP establishes a connection before sending data
      and provides reliable communication.

      TCP uses retransmission to recover lost data.

      UDP is connectionless and has lower overhead.
      It is commonly used for online gaming and
      live streaming where speed is important.
    `,

    expectedScore: 6.7,
    expectedStatus: "PARTIAL_CREDIT",
    expectedFlag: "AMBER"
  },

  // SAMPLE 3: FACTUAL CONTRADICTION
  {
    name: "Sample 3 - Deliberate Contradiction",

    answer: `
      UDP is connection-oriented and guarantees 100%
      reliable delivery using acknowledgements and
      retransmissions.

      TCP is an unreliable protocol and does not
      provide retransmissions.
    `,

    expectedScore: 0,
    expectedStatus: "CRITICAL_CONTRADICTION",
    expectedFlag: "RED"
  },

  // SAMPLE 4: INSUFFICIENT CONTENT
  {
    name: "Sample 4 - Insufficient Content",

    answer: `
      TCP and UDP are both protocols used in networking.
      One is fast and the other is slow.
      Both help computers communicate with each other
      over networks.
    `,

    expectedScore: 0,
    expectedStatus: "INSUFFICIENT_CONTENT",
    expectedFlag: "GRAY"
  }
];


// ================================================
// EVALUATION FUNCTION
// ================================================

function evaluateAnswer(answer) {

  const text = answer.toLowerCase().trim();

  const words = text.split(/\s+/).length;


  // RULE 1: DETECT FACTUAL CONTRADICTIONS FIRST

  const contradictions = [
    /udp is connection-oriented/,
    /udp guarantees 100% reliable delivery/,
    /tcp is unreliable/,
    /tcp does not provide acknowledgements/,
    /tcp does not provide retransmissions/
  ];

  const hasContradiction = contradictions.some(
    pattern => pattern.test(text)
  );

  if (hasContradiction) {

    return {
      score: 0,
      status: "CRITICAL_CONTRADICTION",
      flag: "RED"
    };

  }


  // RULE 2: CHECK ANSWER LENGTH

  if (words < 35) {

    return {
      score: 0,
      status: "INSUFFICIENT_CONTENT",
      flag: "GRAY"
    };

  }


  // RULE 3: CHECK TECHNICAL CONCEPTS

  const concepts = [
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
  ];

  const matchedConcepts = concepts.filter(
    concept => text.includes(concept)
  );

  const matchedCount = matchedConcepts.length;


  // FULL CREDIT

  if (matchedCount >= 9) {

    return {
      score: 10,
      status: "FULL_CREDIT",
      flag: "GREEN"
    };

  }


  // PARTIAL CREDIT

  if (matchedCount >= 2) {

    return {
      score: 6.7,
      status: "PARTIAL_CREDIT",
      flag: "AMBER"
    };

  }


  // INSUFFICIENT TECHNICAL CONTENT

  return {
    score: 0,
    status: "INSUFFICIENT_CONTENT",
    flag: "GRAY"
  };

}


// ================================================
// RUN EVALUATION TESTS
// ================================================

console.log("\n======================================");
console.log("     PROCTOREDGE EVALUATION HARNESS");
console.log("======================================\n");

let passed = 0;
let failed = 0;


testCases.forEach((test, index) => {

  const result = evaluateAnswer(test.answer);

  const isPassed =
    result.score === test.expectedScore &&
    result.status === test.expectedStatus &&
    result.flag === test.expectedFlag;


  if (isPassed) {
    passed++;
  } else {
    failed++;
  }


  console.log(`TEST ${index + 1}: ${test.name}`);

  console.log(`Expected Score : ${test.expectedScore}/10`);
  console.log(`Actual Score   : ${result.score}/10`);

  console.log(`Expected Status: ${test.expectedStatus}`);
  console.log(`Actual Status  : ${result.status}`);

  console.log(`Expected Flag  : ${test.expectedFlag}`);
  console.log(`Actual Flag    : ${result.flag}`);

  console.log(
    `TEST RESULT    : ${isPassed ? "PASS" : "FAIL"}`
  );

  console.log("--------------------------------------");

});


// ================================================
// FINAL SUMMARY
// ================================================

console.log("\n======================================");
console.log("          FINAL TEST SUMMARY");
console.log("======================================");

console.log(`Total Tests : ${testCases.length}`);
console.log(`Passed      : ${passed}`);
console.log(`Failed      : ${failed}`);

console.log(
  `Final Result: ${passed === testCases.length
    ? "ALL TESTS PASSED"
    : "SOME TESTS FAILED"}`
);

console.log("======================================\n");


// Exit with failure code if any test fails
if (failed > 0) {
  process.exitCode = 1;
}
