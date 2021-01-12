'use strict';

/* const seq = (f) => (g) => {
    if (typeof g === 'number') {
        f(g)
    } else {
        seq(x => f(g(x)))
    }
}; */
const seq = (f) => (g) => (typeof(g) === 'number' ? f(g) : seq((x) => f(g(x))));

console.log(seq((x) => x + 7)((x) => x * 2)((x) => 5 + x)(6));

module.exports = { seq };
