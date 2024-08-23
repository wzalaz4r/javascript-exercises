const removeFromArray = function(list, ...values) {
  const newList = [];
  list.forEach(item => {
    if (!values.includes(item)) {
      newList.push(item);
    }
  });
  return newList;
  // values.forEach(value => {
    //   for (let i = 0; i < list.length; i++) {
      //     if (list[i] === value) {
        //       list.splice(i, 1);
        //       i = -1;
        //     }
        //   }
        // });
        // return list
};
console.log(removeFromArray([2,2,3,3,4,5,6], 2,3,6));

// Do not edit below this line
module.exports = removeFromArray;
