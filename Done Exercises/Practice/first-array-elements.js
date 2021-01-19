'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

/* const firstElements = (arr, n) => {

    let res = arr.slice(0, n)
    return res;
} */
const firstElements = (arr, n) => arr.slice(0, n);

console.log(firstElements(arr, 3));