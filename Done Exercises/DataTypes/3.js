'use strict';

const obj = { n: 5 };

function inc(Num) {
    Num.n = 777;
}

inc(obj);

console.dir(obj);

//