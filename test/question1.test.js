const { acceptsStringDFA } = require('../src/question1');

describe('DFA: Binary strings where number of 1s is divisible by 3', () => {
  // Test cases for strings that should be accepted (number of 1s divisible by 3)
  describe('Strings that should be accepted', () => {
    test('should accept empty string (0 ones, which is divisible by 3)', () => {
      expect(acceptsStringDFA('')).toBe(true);
    });

    test('should accept string with 0 ones', () => {
      expect(acceptsStringDFA('000')).toBe(true);
      expect(acceptsStringDFA('00000')).toBe(true);
    });

    test('should accept string with 3 ones', () => {
      expect(acceptsStringDFA('111')).toBe(true);
      expect(acceptsStringDFA('101010')).toBe(true);
      expect(acceptsStringDFA('00010011')).toBe(true);
    });

    test('should accept string with 6 ones', () => {
      expect(acceptsStringDFA('111111')).toBe(true);
      expect(acceptsStringDFA('10101010101')).toBe(true);
    });
  });

  // Test cases for strings that should be rejected
  describe('Strings that should be rejected', () => {
    test('should reject string with 1 one', () => {
      expect(acceptsStringDFA('1')).toBe(false);
      expect(acceptsStringDFA('10')).toBe(false);
      expect(acceptsStringDFA('01000')).toBe(false);
    });

    test('should reject string with 2 ones', () => {
      expect(acceptsStringDFA('11')).toBe(false);
      expect(acceptsStringDFA('011')).toBe(false);
      expect(acceptsStringDFA('0101')).toBe(false);
    });

    test('should reject string with 4 ones', () => {
      expect(acceptsStringDFA('1111')).toBe(false);
      expect(acceptsStringDFA('1010')).toBe(false);
    });

    test('should reject string with 5 ones', () => {
      expect(acceptsStringDFA('11111')).toBe(false);
      expect(acceptsStringDFA('10101010')).toBe(false);
    });
  });

  // Edge cases and invalid inputs
  describe('Edge cases and invalid inputs', () => {
    test('should reject strings with invalid characters', () => {
      expect(acceptsStringDFA('abc')).toBe(false);
      expect(acceptsStringDFA('1a0')).toBe(false);
      expect(acceptsStringDFA('10-1')).toBe(false);
    });
  });
});