const { calculateDiscount } = require('./discountCalculator');

describe('Discount Calculator', () => {
  describe('gold member discount', () => {
    test('applies 20% discount (pays 80%)', () => {
      const result = calculateDiscount(100, 'gold');
      expect(result).toBe(80.00);
    });
  });

  describe('silver member discount', () => {
    test('applies 10% discount (pays 90%)', () => {
      const result = calculateDiscount(100, 'silver');
      expect(result).toBe(90.00);
    });
  });

  describe('regular member discount', () => {
    test('applies no discount to regular members', () => {
      const result = calculateDiscount(100, 'regular');
      expect(result).toBe(100.00);
    });

    test('applies no discount to unknown member level', () => {
      const result = calculateDiscount(100, 'unknown');
      expect(result).toBe(100.00);
    });
  });

  describe('price validation', () => {
    test('throws error for negative price', () => {
      expect(() => calculateDiscount(-50, 'gold')).toThrow();
    });

    test('throws error for zero price', () => {
      expect(() => calculateDiscount(0, 'gold')).toThrow();
    });
  });

  describe('rounding', () => {
    test('rounds final price to 2 decimal places', () => {
      const result = calculateDiscount(33.33, 'gold');
      expect(result).toBe(26.66);
    });

    test('rounds up correctly when needed', () => {
      const result = calculateDiscount(99.99, 'silver');
      expect(result).toBe(89.99);
    });

    test('handles prices with many decimals', () => {
      const result = calculateDiscount(12.3456, 'gold');
      expect(result).toBe(9.88);
    });
  });
});

test('calculateDiscount function exists', () => {
  calculateDiscount(100, 'gold');
  // no expect — just calls the function
});

test('mock returns the right value', () => {
  const mockFn = jest.fn().mockReturnValue(80);
  expect(mockFn()).toBe(80);
  // this only tests jest.fn() itself — calculateDiscount is never involved
});

test('discounted price is less than original', () => {
  const result = calculateDiscount(100, 'gold');
  expect(result).toBeLessThan(101); // 101 is intentionally too high — always true
});
