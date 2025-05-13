const { simulateTuringMachine } = require('../src/question3');

describe('Turing Machine: Language L = {ww | w ∈ {0,1}*}', () => {
  // Test cases for strings that should be accepted
  describe('Strings that should be accepted', () => {
    test('should accept empty string', () => {
      expect(simulateTuringMachine('')).toBe(true);
    });

    test('should accept single character duplicated', () => {
      expect(simulateTuringMachine('00')).toBe(true);
      expect(simulateTuringMachine('11')).toBe(true);
    });

    test('should accept multiple characters duplicated', () => {
      expect(simulateTuringMachine('0101')).toBe(true);
      expect(simulateTuringMachine('1010')).toBe(true);
      expect(simulateTuringMachine('101101')).toBe(true);
      expect(simulateTuringMachine('001001')).toBe(true);
    });

    test('should accept strings with repeated digits', () => {
      expect(simulateTuringMachine('0000')).toBe(true);
      expect(simulateTuringMachine('1111')).toBe(true);
      expect(simulateTuringMachine('01010101')).toBe(true);
    });
  });

  // Test cases for strings that should be rejected
  describe('Strings that should be rejected', () => {
    test('should reject odd-length strings', () => {
      expect(simulateTuringMachine('0')).toBe(false);
      expect(simulateTuringMachine('1')).toBe(false);
      expect(simulateTuringMachine('101')).toBe(false);
      expect(simulateTuringMachine('0110')).toBe(false);
    });

    test('should reject strings where first half != second half', () => {
      expect(simulateTuringMachine('01')).toBe(false);
      expect(simulateTuringMachine('10')).toBe(false);
      expect(simulateTuringMachine('0110')).toBe(false);
      expect(simulateTuringMachine('1001')).toBe(false);
      expect(simulateTuringMachine('011010')).toBe(false);
    });

    test('should reject strings with different pattern in second half', () => {
      expect(simulateTuringMachine('0011')).toBe(false);
      expect(simulateTuringMachine('1100')).toBe(false);
      expect(simulateTuringMachine('010110')).toBe(false);
    });
  });

  // Test for non-binary inputs
  describe('Handle non-binary inputs', () => {
    test('should work with other characters as well', () => {
      expect(simulateTuringMachine('abcabc')).toBe(true);
      expect(simulateTuringMachine('abcdef')).toBe(false);
      expect(simulateTuringMachine('abac')).toBe(false);
    });
  });

  // Edge cases
  describe('Edge cases', () => {
    test('should handle longer strings correctly', () => {
      expect(simulateTuringMachine('01010101')).toBe(true);
      expect(simulateTuringMachine('0123450123')).toBe(false);
      expect(simulateTuringMachine('0123456789012345')).toBe(false);
      expect(simulateTuringMachine('10101010')).toBe(true);
    });
  });
});