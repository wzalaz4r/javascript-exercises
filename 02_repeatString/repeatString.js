const repeatString = function(string, times) {
  let newString = '';
  for (let i = 0; i < times; i++) {
    newString += string;
  }
  return times < 0 ? 'ERROR' : newString;
};
console.log(repeatString('hey',-1));
// Do not edit below this line
module.exports = repeatString;
