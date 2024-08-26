const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(nums) {
	// return parseInt(nums.reduce((total, n) => total + n, 0));
  return nums.reduce((total, num) => (total) + (num), 0);
};
const multiply = function(nums) {
  return nums.reduce((total, num) => total * num, 1);
};

const power = function(n,e) {
	return n**e;
};

const factorial = function(n) {
	for (let i = n - 1; i > 0; i--) {
    n *= i
  }
  // Math.factorial(n);
  return n==0 ? 1 : n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
