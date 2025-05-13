// 1: DFA that accepts binary strings where the number of 1s is divisible by 3

function acceptsStringDFA(inputString) {
    let currentState = "q0";
    const states = {
        "q0": { "0": "q0", "1": "q1", isAccepting: true },
        "q1": { "0": "q1", "1": "q2", isAccepting: false },
        "q2": { "0": "q2", "1": "q0", isAccepting: false },
    };

    for (const char of inputString) {
        if (char !== "0" && char !== "1") {
            return false;
        }
        currentState = states[currentState][char];
    }

    return states[currentState].isAccepting;
}

module.exports = { acceptsStringDFA };



// Test cases
// console.log("Test cases:");
// console.log("Input: '111', Expected: true, Actual:", acceptsStringDFA("111"));
// console.log("Input: '010101', Expected: true, Actual:", acceptsStringDFA("010101"));
// console.log("Input: '101', Expected: false, Actual:", acceptsStringDFA("101"));
// console.log("Input: '000', Expected: true, Actual:", acceptsStringDFA("000"));
// console.log("Input: '1', Expected: false, Actual:", acceptsStringDFA("1"));
// console.log("Input: '11', Expected: false, Actual:", acceptsStringDFA("11"));
// console.log("Input: '', Expected: true, Actual:", acceptsStringDFA(""));
// console.log("Input: '1111', Expected: false, Actual:", acceptsStringDFA("1111"));
// console.log("Input: '111111', Expected: true, Actual:", acceptsStringDFA("111111"));
// console.log("Input: 'abc', Expected: false, Actual:", acceptsStringDFA("abc"));