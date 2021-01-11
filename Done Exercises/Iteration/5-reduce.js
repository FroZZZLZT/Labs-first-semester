'use strict';

const sum = (...args) => {

  const res = args;
  return res.reduce((a, b) => a + b, 0);

};
// Use Array.prototype.reduce method
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6


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
