'use strict';

// .some analog

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const arr2 = ['one', 'two', 'three', 'four'];

const someAnalog = (arr, fn) => {

    let res = false;
    for (const el of arr) {

        if (fn(el) === true) {
            res = true;
            return res;
        }
    }
    return res;

};

console.log(someAnalog(arr1, x => (x % 2 === 0)));