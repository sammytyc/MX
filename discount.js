function calculateDiscount(price, memberLevel) {
  if (memberLevel === 'gold') return price * 0.8;
  if (memberLevel === 'silver') return price * 0.9;
  return price;
}

module.exports = { calculateDiscount };