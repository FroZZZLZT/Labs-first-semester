'use strict';
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
const ages = obj => {

  const result = {};
  for (const key in obj) {
    const temp = obj[key];
    result[key] = temp.died - temp.born;

  }
  return result;
  // Use for..in to calculate age for each person
  // For example ages({
  //   lenin: { born: 1870, died: 1924 },
  //   mao: { born: 1893, died: 1976 },
  //   gandhi: { born: 1869, died: 1948 },
  //   hirohito: { born: 1901, died: 1989 },
  // })
  // should return {
  //   lenin: 54,
  //   mao: 83,
  //   gandhi: 79,
  //   hirohito: 88,
  // }
};
console.log(ages(persons));
module.exports = { ages };
