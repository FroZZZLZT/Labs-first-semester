'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

/* const shuffle = (arr) => {
    const res = arr.sort(() => Math.random() - 0.5)
    return res;
} */
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

console.log(shuffle(arr));