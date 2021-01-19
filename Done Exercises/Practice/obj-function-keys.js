'use strict';

const obj1 = {
    name: 'Ivan',
    age: 13,
    sayHi() {
        console.log("Hi, " + this.name)
    },
    sayBye() {
        console.log('Bye, ' + this.name)
    }
}

const getFuncKeys = (obj) => {
    let arr = []
    let keys = Object.keys(obj)
    for (const key of keys) {
        if (typeof obj1[key] === 'function') {
            arr.push(obj1[key])
        }
    }
    return arr;
}
console.log(getFuncKeys(obj1))