'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    array.splice(index, 1);


  }

  // Remove multiple items from array modifying original array
};
const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);

module.exports = { removeElements };
