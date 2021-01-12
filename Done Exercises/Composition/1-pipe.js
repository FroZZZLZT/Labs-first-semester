'use strict';

const pipe = (...fns) => x => {
  let result = x;
  for (const el of fns) {
    if (typeof el !== 'function') {
      throw new Error('Error, try to use functions as arguments');
    }
    result = el(result);
  }
  return result;


};
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));
const e = pipe(inc, inc);
console.log(e(7));
const d = pipe(inc, 7, cube);
console.log(d(3));


module.exports = { pipe };
