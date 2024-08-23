const reverseString = function(string) {
  const stringArray = string.split('');
  const reverseArray = new Array(stringArray.length)
  for (let i = 0; i < stringArray.length; i++) {
    reverseArray[stringArray.length - i] = stringArray[i];
  }
  return reverseArray.join('');
};
console.log(reverseString('hey there what is up'));
// Do not edit below this line
module.exports = reverseString;
