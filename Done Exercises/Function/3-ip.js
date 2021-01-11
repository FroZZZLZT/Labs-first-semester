'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const res = [];
  let sum = 0;
  const array = (ip.split('.')).map(el => parseInt(el));
  for (let i = 0; i <= 3; i++) {
    res[i] = array[i] << 8 * (array.length - i - 1);
  }
  for (const key of res) {
    sum += key;
  }
  return sum;



  // Parse ip address as string, for example '10.0.0.1'
  // to ['10', '0', '0', '1'] to [10, 0, 0, 1]
  // and convert to Number value 167772161 with bitwise shift
  // (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
  // Use Array.prototype.reduce of for loop
};
console.dir(ipToInt());
module.exports = { ipToInt };
