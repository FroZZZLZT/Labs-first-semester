'use strict';

// .some analog

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const arr2 = ['one', 'two', 'three', 'four'];

const everyAnalog = (arr, fn) => {

    let res = true;
    for (const el of arr) {

        if (fn(el) === false) {
            res = false;
            return res;
        }
    }
    return res;

};

console.log(everyAnalog(arr1, x => x > 0));