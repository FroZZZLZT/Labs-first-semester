'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const arr2 = ['one', 'two', 'three', 'four'];

/* const randomEl = (arr) => {

    const res = arr[Math.floor(Math.random(arr) * arr.length)]
    return res;

} */
const randomEl = arr => arr[Math.floor(Math.random(arr) * arr.length)];

console.log(randomEl(arr));
console.log(randomEl(arr2));