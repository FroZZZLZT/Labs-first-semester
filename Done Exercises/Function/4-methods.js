'use strict';
const array = [];

const iFace = {
  // Introspect all properties of iface object and
  // extract function names and number of arguments
  // For example: {

  m1: x => [x],
  m2(x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
  /*  will return: [
         ['m1', 1],
         ['m2', 2],
         ['m3', 3]
     ] */
};
const functionNumber = () => {
  let value = [];

  for (const key in iFace) {
    value = iFace[key];
    if (typeof value === 'function') {
      array.push[(key, value.length)];
    }

  }

  return array;
};
console.dir(functionNumber());
//module.exports = { methods };
