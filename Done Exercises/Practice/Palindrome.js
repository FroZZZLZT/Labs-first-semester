'use strict';


const Palindrome = str => str.split('').reverse().join('') === str;

console.log(Palindrome('топот'));
