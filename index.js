function isPalindrome(word) {
  // Write your algorithm here
// Compare the word elements at similar index on the right and left side of the word

/* 
  Add your pseudocode here
*/
  for(let i=0;i<word.length; i++){
    const k = word.length-1-i;
    if(word[i] !== word[k]){
      return false;
    } 
  }
  return true;

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
}
module.exports = isPalindrome;
