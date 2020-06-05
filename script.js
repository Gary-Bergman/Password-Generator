// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables:
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = upper.toLowerCase();
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symb = ['@', '%', '+', '', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Randomized Variables:
var randUpper = upper.charAt(Math.floor(Math.random() * upper.length));
var randLower = lower.charAt(Math.floor(Math.random() * lower.length));
var randNum = Math.floor(Math.random() * 10);
var randSymb = symb[Math.floor(Math.random() * symb.length)]


// User selected character types to be included in pw:
var pwCharLen;
var includeUpper;
var includeLower;
var includeNumber;
var includeSymbol;
var selected;
var include = [];


//--------------------------------------------------------------------------------------------
// Set variables into key-value pairs. Not sure if this is applicalbe though
var charSelect = {
  lower: randLower,
  upper: randUpper,
  number: randNum,
  symbol: randSymb
};

//--------------------------------------------------------------------------------------------

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
if (includeUpper) {
  include.push(charSelect.upper);
};

if (includeLower) {
  include.push(charSelect.lower);
};

if (includeNumber) {
  include.push(charSelect.number);
};

if (includeSymbol) {
  include.push(charSelect.symbol);
};


console.log(include)




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
