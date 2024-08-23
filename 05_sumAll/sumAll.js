const sumAll = function(f, l) {
  if (!Number.isInteger(f) || !Number.isInteger(l) || f<0 || l<0) {
    return 'ERROR'
  }
  let min = Math.min(f,l);
  let max = Math.max(f,l);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum

};

// Do not edit below this line
module.exports = sumAll;
