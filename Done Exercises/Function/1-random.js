'use strict';

const random = (min, max) => {
  if (max === undefined) {
    return Math.floor(Math.random() * min);
  }
  // Generate random Number between from min to max
  // Use Math.random() and Math.floor()
  // See documentation at MDN
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(random(3, 5));

module.exports = { random };
