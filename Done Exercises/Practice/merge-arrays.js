'use strict';

//const merge = (...arr) => arr.flatMap(x => x);

const Merge = (...arrays) => {
    const res = [];
    for (const arr of arrays) {
        for (let i = 0; i < arr.length; i++) {
            res.push(arr[i]);
        }
    }
    return res;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [5, 6, 7, 8];
const arr3 = ['one', 'two', 'three'];
const arr4 = [
    [1, 2],
    [3, 4],
];

console.log(Merge(arr1, arr2));