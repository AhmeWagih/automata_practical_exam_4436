// 3: Turing Machine that decides the language L = {ww | w ∈ {0,1}*}

function simulateTuringMachine(inputString) {
    if (inputString.length % 2 !== 0) {
        return false;
    }
    if (inputString === "") {
        return true;
    }

    const n = inputString.length;
    const firstHalf = inputString.substring(0, n / 2);
    const secondHalf = inputString.substring(n / 2);

    return firstHalf === secondHalf;
}

module.exports = { simulateTuringMachine };

// Test cases 
// console.log("Test cases:");
// console.log("Input: '0101', Expected: true, Actual:", simulateTuringMachine("0101"));
// console.log("Input: '00', Expected: true, Actual:", simulateTuringMachine("00"));
// console.log("Input: '11', Expected: true, Actual:", simulateTuringMachine("11"));
// console.log("Input: '0110', Expected: false, Actual:", simulateTuringMachine("0110"));
// console.log("Input: '101', Expected: false, Actual:", simulateTuringMachine("101"));
// console.log("Input: '', Expected: true, Actual:", simulateTuringMachine(""));
// console.log("Input: '0', Expected: false, Actual:", simulateTuringMachine("0"));
// console.log("Input: '1', Expected: false, Actual:", simulateTuringMachine("1"));
// console.log("Input: '0000', Expected: true, Actual:", simulateTuringMachine("0000"));
// console.log("Input: '1111', Expected: true, Actual:", simulateTuringMachine("1111"));
// console.log("Input: '010010', Expected: false, Actual:", simulateTuringMachine("010010"));
// console.log("Input: '101101', Expected: true, Actual:", simulateTuringMachine("101101"));
// console.log("Input: '001001', Expected: true, Actual:", simulateTuringMachine("001001"));
// console.log("Input: 'abcabc', Expected: true, Actual:", simulateTuringMachine("abcabc"));
// console.log("Input: 'abac', Expected: false, Actual:", simulateTuringMachine("abac"));