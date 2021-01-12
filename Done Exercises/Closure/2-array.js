'use strict';

const array = () => {
  const temp = [];
  const res = (i) => temp[i];
  res.push = (x) => temp.push(x);
  res.pop = () => temp.pop();
  return res;

};


const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop());
module.exports = { array };
