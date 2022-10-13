/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// find a match, add an increment to a counter

// solving with a loop

const Vowels = ['a', 'e', 'i', 'o', 'u'];
function vowelsCounter(text) {
  // start of counter
  let counter = 0;
  //  loop through text
  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      // if vowels includes add value to counter
      counter++;
    }
  }
  return counter;
}

// solve with REGULAR EXPRESSION -- 88% faster
function vowelsCounter(text) {
  //search with Regex and store all matching instances
  //   match() method
  // gi - g = global search / i = case insensitive
  let matchingInstances = text.match(/[aeiou]/gi);

  //   check if matching exist then calculate the length - with conditional
  if (matchingInstances) {
    return matchingInstances.length;
  } else {
    return 0;
  }
}

module.exports = vowelsCounter;
