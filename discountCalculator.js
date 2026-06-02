function calculateDiscount(price, memberLevel) {
  if (price <= 0) {
    throw new Error('Price must be a positive number');
  }
  let finalPrice;
  if (memberLevel === 'gold') {
    finalPrice = price * 0.85;
  } else if (memberLevel === 'silver') {
    finalPrice = price * 0.9;
  } else {
    finalPrice = price;
  }
  return Math.round(finalPrice * 100) / 100;
}

module.exports = { calculateDiscount };
