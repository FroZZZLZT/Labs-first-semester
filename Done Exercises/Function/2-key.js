'use strict';
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


const generateKey = (length, possible) => {
  const array = possible.split('');
  let res = [];
  array.sort(() => Math.random() - 0.5);
  res = array.slice(0, length);
  return res.join();
};

const key = generateKey(16, characters);
console.log(key);

module.exports = { generateKey };
