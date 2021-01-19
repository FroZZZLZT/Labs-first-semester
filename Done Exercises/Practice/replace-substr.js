'use strict';


const replaceSubString = (str, searchStr, replaceStr) => {
  let res = '';
  if (str.includes(searchStr)) {
    res = str.replace(searchStr, replaceStr);
  }
  return res;
};


const string = 'Hi there';
const strToReplace = ' there';
const replaceWith = ', Mike';

console.log(replaceSubString(string, strToReplace, replaceWith));
