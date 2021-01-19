'use strict';

// .find analog

//const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = ['one', 'two', 'three', 'four'];

const findEl = (fn, arr) => {
    let res;
    for (const el of arr) {

        if (fn(el) === true) {
            res = el;
            return res;
        }
    }
    return res;
};

console.log(findEl(x => x.length > 4, arr2));