const { calculateDiscount } = require('./discount');

test('gold member gets 20% off', () => {
  expect(calculateDiscount(100, 'gold')).toBe(80);
});

test('silver member gets 10% off', () => {
  expect(calculateDiscount(100, 'silver')).toBe(90);
});

test('calculateDiscount function exists', () => {
  calculateDiscount(100, 'gold');
  // no expect — just calls the function
});

