// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created variables to represent the different possible character sets


var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// console.log(upper.length)

var lower = upper.toLowerCase();
// console.log(lower);
// console.log(lower.length);

var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(num)

var symb = ['@', '%', '+', '', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// console.log(symb.length);

// Need to create randomizer for each variable

// Need to create randomizer for variable combinations based on user choice




// Need to create functionality upon clicking button. 
// Need to prompt user for length: 8-128 - prompt user to choose w/in this range if selection out of range case for to low, case for too high
prompt("How many characters would you like your password to contain?");
alert("Error! Password length must be at least 8 characters.");
alert("Error! Password length cannot exceed 128 characters.");
// Need to prompt user for special characters (symb)
alert("Click OK if you'd like to include special characters.");
// Need to prompt user for numeric
alert("Click OK if you'd like to include numbers.");
// Need to prompt user for lower
alert("Click OK if you'd like to inlcude lowercase letters");
// Need to prompt user for upper
alert("Click OK if you'd like to include uppercase letters.");
// Need to have user include at least one - prompt user to choose if none selected
alert("Error! Must include at least one character type.")

// Need to generate pw derived from user choices
// Need to test all possibilities
// OPTIONAL: have pw generated on page instead of in an alert






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
