'use strict';

const array = [];

function rangeOdd(start, end) {
  for (let i = start; i <= end; i++) {

    if ((i % 2)) {
      array.push(i);
    }
  }

  return array;

}

console.log(rangeOdd(15, 30));
module.exports = { rangeOdd };
