'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
//const arr2 = ['one', 'two', 'three', 'four'];

const arrDivision = (arr, n) => {
    const res = [];
    const numberOfEL = Math.ceil(arr.length / n);
    for (let i = 0; i < n; i++) {
        res.push(arr.splice(0, numberOfEL));
    }
    return res;
};

console.log(arrDivision(arr, 2));