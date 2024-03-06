function isPalindrome(word) {
  const wordReversed = word.split("").reverse().join("");
  return word === wordReversed;
}

/* 
  Add your pseudocode here
*/

/*
  Splitting a string, reversing it then joining it together, gives me word in its reversed state.
  Once I have this data, I can match the argument passed to the reversed word to see if it matches.
  I then used an if statement to return the result true or false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotator"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;