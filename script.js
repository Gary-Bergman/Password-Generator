// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for character type:
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lower = upper.toLowerCase();
console.log(lower)
var num = '0123456789'
var symb = '@%+"/\'!#$^?:,)(}{][~-_.';


// Randomized character type variables:
var randUpper = upper.charAt(Math.floor(Math.random() * upper.length));
var randLower = lower.charAt(Math.floor(Math.random() * lower.length));
var randNum = num.charAt(Math.floor(Math.random() * num.length));
var randSymb = symb.charAt[Math.floor(Math.random() * symb.length)]


// User selected character types to be included in password:
var pwCharLen;
var includeUpper;
var includeLower;
var includeNumber;
var includeSymbol;
var selected;
var include;


//----------------------------------------------------------------------------
// Character type variables into key-value pairs
var charSelect = {
  lower: randLower,
  upper: randUpper,
  number: randNum,
  symbol: randSymb
};

//----------------------------------------------------------------------------

// Choose pw length and alert if not in range
pwCharLen = prompt("How many characters would you like your password to contain?");
if (pwCharLen > 128 || pwCharLen < 8) {
  alert("Error! Password length must be 8 - 128 characters.");

  // If pw length selection is in range, continue to character type selecton
} else {
  includeUpper = confirm("Click OK if you'd like to include uppercase letters.");
  includeLower = confirm("Click OK if you'd like to inlcude lowercase letters");
  includeNumber = confirm("Click OK if you'd like to include numbers.");
  includeSymbol = confirm("Click OK if you'd like to include special characters.");
};

// If user didn't select any character types, alert goes off
selected = includeUpper && includeLower && includeNumber && includeSymbol;

if (!selected) {
  alert("Error! Must include at least one character type.")
};

// If user selects character type, add that randomized character type value to charSelect
// if (includeUpper) {
//   include.push(charSelect.upper);
// };

// if (includeLower) {
//   include.push(charSelect.lower);
// };

// if (includeNumber) {
//   include.push(charSelect.number);
// };

// if (includeSymbol) {
//   include.push(charSelect.symbol);
// };


// Used Fisheer-Yates Algorithm to shuffle include array

// var arrayShuffle = function (include) {
//   let newPos,
//     temp;
// }
// for (let i = include.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * i)
//   const temp = inlcude[i]
//   include[i] = include[j]
//   inlcude[j] = temp
// }


console.log()

// var pw;

// if (pwCharLen) {
//   for (i = 0; i < pwCharLen; i++) {
//     pw += include[Math.floor(Math.random() * include.length)]
//   }
// }

// console.log(pw)




// var select = document.getElementById('selection');
// var selectLength = document.getElementById('length');
// var selectUpper = document.getElementById('upper');
// var selectLower = document.getElementById('lower');
// var selectNumber = document.getElementById('num');
// var selectSymbol = document.getElementById('symb');









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
