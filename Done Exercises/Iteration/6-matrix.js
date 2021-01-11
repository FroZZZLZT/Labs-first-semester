'use strict';


const max = array => {

  const temp = array.flat();
  const res = Math.max.apply(null, temp);
  return res;

  // Use nested for loop to find max value in 2d matrix
  // For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  // should return 9
};

const m = max([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
console.log(m); // 9
module.exports = { max };
