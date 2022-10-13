/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

// this is character mapping
// take out of string, group by type, count each group ,compare
// the group == object

// iterable object  use **for...in**
function maxRecurringChar(text) {
  let charMap = {};
  //   used to store max value
  let maxCharValue = 0;
  //   store character at highest value
  let maxChar = '';

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > maxCharValue) {
      maxCharValue = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

//  ES6 version with CHARACTER MAP
function maxRecurringChar(text) {
  let charMap = {};
  //   creates a new arry for the values
  let charArray = [];
  //creates a new array for occurance of values
  let valuesArray = [];
  let maxCharValue = 0;

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  charArray = Object.keys(charMap);
  valuesArray = Object.values(charMap);
  //   Math.max() to find max value in valuesArray
  maxCharValue = Math.max(...valuesArray);

  //   return the indexOf() [position] of the maxCharValue formula calculate earlier
  return charArray[valuesArray.indexOf(maxCharValue)];
}

// function maxRecurringChar(text) {
//   // Code goes here
// }

module.exports = maxRecurringChar;
