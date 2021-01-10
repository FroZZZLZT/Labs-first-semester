'use strict';

const array = [true, 'hello', 5, 12, -200, false, false, 'word'];

const hash = { number: 0, string: 0, boolean: 0 };

/*for (const value of array) {
    if (typeof value == 'string') {
        hash.string++
    }
    if (typeof value == 'number') {
        hash.number++
    }
    if (typeof value == 'boolean') {
        hash.boolean++
    }

}*/

for (const value of array) {
    hash[`${typeof value}`]++;
}

console.dir(hash);




//