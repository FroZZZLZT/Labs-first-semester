'use strict';

function average(a, b) {

  return (a + b) / 2;
}

function square(x) {
  return x * x;
}

function cube(x) {
  return (Math.pow(x, 3));
}

function calculate() {
  const array = [];
  for (let i = 0; i <= 9; i++) {
    const res = average(square(i), cube(i));

    array.push(res);
  }
  return array;
}

console.log(average(1, 3.5));
console.log(square(3));
console.log(cube(3));
console.log(calculate());

module.exports = { square, cube, average, calculate };
