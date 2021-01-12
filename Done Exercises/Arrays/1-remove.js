'use strict';

const removeElement = (array, item) => {
  array.splice(item - 1, 1);
  // Remove item from array modifying original array
};
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

module.exports = { removeElement };
