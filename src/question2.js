// 2: PDA that simulates a PDA to check if a string is accepted by a given context-free language (e.g., balanced parentheses, a^n b^n)

function acceptsStringPDA(inputString) {
    const stack = [];
    for (const char of inputString) {
        if (char === "(") {
            stack.push(char);
        } else if (char === ")") {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

module.exports = { acceptsStringPDA };


// Test cases
// console.log("Testing PDA:");
// console.log("Input: (()), Expected: true, Actual:", acceptsStringPDA("(())"));
// console.log("Input: ()(), Expected: true, Actual:", acceptsStringPDA("()()"));
// console.log("Input: ((())), Expected: true, Actual:", acceptsStringPDA("((()))"));
// console.log("Input: (, Expected: false, Actual:", acceptsStringPDA("("));
// console.log("Input: ), Expected: false, Actual:", acceptsStringPDA(")"));
// console.log("Input: ((), Expected: false, Actual:", acceptsStringPDA("(()"));
// console.log("Input: ()), Expected: false, Actual:", acceptsStringPDA("())"));
// console.log("Input: , Expected: true, Actual:", acceptsStringPDA(""));
// console.log("Input: (a), Expected: false, Actual:", acceptsStringPDA("(a)"));
// console.log("Input: ())(, Expected: false, Actual:", acceptsStringPDA("())("));