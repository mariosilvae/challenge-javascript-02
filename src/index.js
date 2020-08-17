const fibonacci = (n) => {
  let arrayFib = [];

  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      arrayFib[i] = 1;
    } else if (i > 1) {
      arrayFib[i] = arrayFib[i - 2] + arrayFib[i - 1];
    }
  }
  return arrayFib;
};

module.exports = fibonacci;
