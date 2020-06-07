// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for character type:
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lower = upper.toLowerCase();
var num = '0123456789'
var symb = '@%+"/\'!#$^?:,)(}{][~-_.';


// Randomized character type variables:
var randUpper = upper.charAt(Math.floor(Math.random() * upper.length));
var randLower = lower.charAt(Math.floor(Math.random() * lower.length));
var randNum = num.charAt(Math.floor(Math.random() * num.length));

// var randSymb = symb.charAt[Math.floor(Math.random() * symb.length)]
// console.log(randSymb)


// User selected character types to be included in password:
var pwLen;
var includeUpper;
var includeLower;
var includeNumber;
var includeSymbol;
var selected;
var include = "";
var pw = "";


//----------------------------------------------------------------------------
// Character type variables into key-value pairs
// var charSelect = {
//   upper: randUpper,
//   lower: randLower,
//   number: randNum,
//   symbol: randSymb
// };

//----------------------------------------------------------------------------

// Choose pw length and alert if not in range
// function pwGen() {
pwLen = parseInt(prompt("How many characters would you like your password to contain?"));
if (pwLen > 128 || pwLen < 8) {
    alert("Error! Password length must be 8 - 128 characters.");

    // If pw length selection is in range, continue to character type selecton
} else {
    includeUpper = confirm("Click OK if you'd like to include uppercase letters.");
    includeLower = confirm("Click OK if you'd like to inlcude lowercase letters");
    includeNumber = confirm("Click OK if you'd like to include numbers.");
    includeSymbol = confirm("Click OK if you'd like to include special characters.");
}

if (includeUpper) {
    include += randUpper;
}

if (includeLower) {
    include += randLower;
}

if (includeNumber) {
    include += randNum;
}
// if (includeSymbol) {
//   include += randSymb;
// }



// // If user didn't select any character types, alert goes off
// selected = includeUpper && includeLower && includeNumber && includeSymbol;

// if (!selected) {
//   alert("Error! Must include at least one character type.")
// };

// //Getting an error here!!

for (var i = 0; i < pwLen; i++) {
    var character = include[Math.floor(Math.random() * inlclude.length)];
    //console.log(character);
    password += character;
    // for (i = 0; i < pwLen; i++) {
    //   pw = include
}

console.log(password)

// pw = include[Math.floor(Math.random() * include.length)];

// }



// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);