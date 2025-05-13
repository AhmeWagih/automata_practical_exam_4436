Automata Practical Exam 
Section 1: Automata Implementation
This section contains implementations for three automata-related tasks as specified in the practical exam.

Task 1: DFA for Binary Strings with 1s Divisible by 3
File: question1.js
Description: This program implements a Deterministic Finite Automaton (DFA) that accepts binary strings (composed of '0's and '1's) where the total count of '1's is divisible by 3.
How to Run and Test:
Navigate to the directory containing question1.js in your terminal.
Execute the script using Node.js: npx jest test/question1.test.js
The output will display results for a predefined set of test cases, showing the input string, expected outcome, and actual outcome from the DFA.

Task 2: PDA for Balanced Parentheses
File: question2.js
Description: This program simulates a Pushdown Automaton (PDA) to check if a given string consists of balanced parentheses. For example, "(())" is accepted, while "(()" is not.
How to Run and Test:
Navigate to the directory containing question2.js in your terminal.
Execute the script using Node.js: npx jest test/question2.test.js
The output will show results for various test strings, indicating whether they are accepted (balanced) or rejected (unbalanced).

Task 3: Turing Machine for Language L = {ww | w ∈ {0,1}*}
File: question3.js
Description: This program simulates a basic single-tape Turing Machine that decides the language L = {ww | w ∈ {0,1}*}. This language consists of strings formed by concatenating a binary string 'w' with itself (e.g., "0101" where w="01").
How to Run and Test:
Navigate to the directory containing question3.js in your terminal.
Execute the script using Node.js: npx jest test/question3.test.js
The script will output test results for several input strings, indicating if they belong to the language L.

General Instructions
Environment: All scripts are written in Node.js.
Dependencies: These scripts do not have external dependencies beyond a standard Node.js installation.
Source Code: The full source code with expressive comments is provided in each respective .js file.
Unit Tests: The submission includes formal unit tests implemented using the Jest testing framework. All test cases are located in the test directory and can be run using the provided Jest commands.