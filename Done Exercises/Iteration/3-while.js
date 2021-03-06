'use strict';

const sum = (...args) => {
  // Use while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let res = 0;
  let i = 0;
  while (i < args.length) {
    res += args[i];
    i++;
  }
  return res;
};
const a = sum(1, 2, 3); // a === 6
const b = sum(0); // b === 0
const c = sum(); // c === 0
const d = sum(1, -1, 1); // d === 1
const e = sum(10, -1, -1, -1); // e === 7
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
module.exports = { sum };
