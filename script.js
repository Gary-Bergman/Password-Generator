// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created variables to represent the different possible character sets


var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// console.log(upper.length)

var lower = upper.toLowerCase();
// console.log(lower);
// console.log(lower.length);

// Not sure if I need this number set since I'm using randNum which doesn't include this var
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(num)

var symb = ['@', '%', '+', '', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// console.log(symb.length);

// Need to create randomizer for each variable

// This randomizes the set but only provides one random character so I'll have to add different character types chosen by user and run the collective set times the number of characters selected for the pw. 
var randUpper = upper.charAt(Math.floor(Math.random() * upper.length));
console.log(randUpper);

var randLower = lower.charAt(Math.floor(Math.random() * lower.length));
console.log(randLower);

var randNum = Math.floor(Math.random() * 10);
console.log(randNum);

var randSymb = symb[Math.floor(Math.random() * symb.length)]
console.log(randSymb);


// Set variables into key-value pairs. Not sure if this is applicalbe though
var randChar = {
  lower: randLower,
  upper: randUpper,
  number: randNum,
  symbol: randSymb
};


// var select = document.getElementById('selection');
// var selectLength = document.getElementById('length');
// var selectUpper = document.getElementById('upper');
// var selectLower = document.getElementById('lower');
// var selectNumber = document.getElementById('num');
// var selectSymbol = document.getElementById('symb');

// Basic outline for function and alerts:
var pwChar;
// Choose pw length and alert if not in rang
if (pwChar > 128 || pwChar < 8) {
  alert("Error! Password length must be 8 - 128 characters.");
}

// Choose pw character types 

// if ()



console.log(confirm("Include lower case?"))

// Try to write a fucntion to randomize total selection based on user input:
// function randomizer(randOne, randTwo, randThree, randFour) {
//   Math.floor(Math.random())

// }
// console.log(Math.floor(Math.random(num)))
// Need to create randomizer for variable combinations based on user choice




// Need to create functionality upon clicking button. 
// Need to prompt user for length: 8-128 - prompt user to choose w/in this range if selection out of range case for to low, case for too high
// prompt("How many characters would you like your password to contain?");
// Need to prompt user for special characters (symb)
// confirm("Click OK if you'd like to include special characters.");
// Need to prompt user for numeric
// confirm("Click OK if you'd like to include numbers.");
// Need to prompt user for lower
// confirm("Click OK if you'd like to inlcude lowercase letters");
// Need to prompt user for upper
// confirm("Click OK if you'd like to include uppercase letters.");
// Need to have user include at least one - prompt user to choose if none selected
// alert("Error! Must include at least one character type.")

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
