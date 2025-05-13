const { acceptsStringPDA } = require('../src/question2');

describe('PDA: Balanced Parentheses Checker', () => {
  // Test cases for valid balanced parentheses
  describe('Valid balanced parentheses', () => {
    test('should accept empty string', () => {
      expect(acceptsStringPDA('')).toBe(true);
    });

    test('should accept simple balanced pairs', () => {
      expect(acceptsStringPDA('()')).toBe(true);
    });

    test('should accept nested balanced pairs', () => {
      expect(acceptsStringPDA('(())')).toBe(true);
      expect(acceptsStringPDA('((()))')).toBe(true);
      expect(acceptsStringPDA('((((()))))')).toBe(true);
    });

    test('should accept multiple balanced pairs', () => {
      expect(acceptsStringPDA('()()')).toBe(true);
      expect(acceptsStringPDA('()(())')).toBe(true);
      expect(acceptsStringPDA('(())()((()))')).toBe(true);
    });
  });

  // Test cases for invalid parentheses
  describe('Invalid parentheses', () => {
    test('should reject unbalanced opening parentheses', () => {
      expect(acceptsStringPDA('(')).toBe(false);
      expect(acceptsStringPDA('(()')).toBe(false);
      expect(acceptsStringPDA('(()(')).toBe(false);
    });

    test('should reject unbalanced closing parentheses', () => {
      expect(acceptsStringPDA(')')).toBe(false);
      expect(acceptsStringPDA('())')).toBe(false);
      expect(acceptsStringPDA('())(')).toBe(false);
    });

    test('should reject improperly nested parentheses', () => {
      expect(acceptsStringPDA(')(')).toBe(false);
      expect(acceptsStringPDA('())()')).toBe(false);
      expect(acceptsStringPDA(')()()')).toBe(false);
    });
  });

  // Test cases for invalid characters
  describe('Invalid characters', () => {
    test('should reject strings with characters other than parentheses', () => {
      expect(acceptsStringPDA('a')).toBe(false);
      expect(acceptsStringPDA('(a)')).toBe(false);
      expect(acceptsStringPDA('(1+2)')).toBe(false);
      expect(acceptsStringPDA('([)]')).toBe(false);
    });
  });
});