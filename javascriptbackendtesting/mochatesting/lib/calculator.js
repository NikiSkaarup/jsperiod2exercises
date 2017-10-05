var exports = module.exports = {};
exports.add = (n1, n2) => n1 + n2;
exports.subtract = (n1, n2) => n1 - n2;
exports.times = (n1, n2) => n1 * n2;
exports.divide = (n1, n2) => {
  if (n2 === 0) throw new Error("Attempt to divide by zero");
  return n1 / n2;
};
