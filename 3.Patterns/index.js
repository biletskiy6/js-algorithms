// Algorithm - a process of set of steps to accomplish a certain task

// 1. Understanding the problem
// 2. Restate the problem in my own words
// 3. What are the inputs / outputs
// 4.

// const countDuplicates = (string) => {
//   let duplicates = {};
//   if (!string.trim().length) return false;
//   for (let i = 0; i < string.length; i++) {
//     const letter = string[i].toLowerCase();
//     if (letter !== ' ') {
//       duplicates[letter] = duplicates[letter] + 1 || 1;
//     }
//   }
//   return duplicates;
// };

const isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
};
const countDuplicates = (string) => {
  let duplicates = {};
  for (let char of string) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      duplicates[char] = ++duplicates[char] || 1;
    }
  }
  return duplicates;
};

console.log(countDuplicates('hello!'));
