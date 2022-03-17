function isPalindrome(word) {
  const firstArr = [word]
  const splitWord = word.split("")
  const reverseWord = splitWord.reverse()
  const secondArr = [reverseWord.join("")]
  
  if (firstArr[0] === secondArr[0]) {
    return true
  } else return false
}

/* 
  accept word into array
  reverse word and store in new array
  compare the first array to the second array
    if match, then return true, if not, then return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
