'use strict';

// .filter analog

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const arr2 = ['one', 'two', 'three', 'four'];


const filterArr = (fn, arr) => {
    const res = [];
    for (const el of arr) {
        if (fn(el) === true) {
            res.push(el);
        }
    }
    return res;
};

console.log(filterArr(x => x > 3, arr1));