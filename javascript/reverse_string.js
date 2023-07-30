function reverseString(str) {
  let test = [];
  for (let i = str.length - 1; i >= 0; i--) {
    test.push(str[i]);
  }

  return test.join("");
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Take in a string and reverse the order of the letters and return the string
