'use strict';

const array = [];

function range(start, end) {
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

console.dir(range(15, 30));

module.exports = { range };
