// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables for character type:
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = upper.toLowerCase();
var num = "0123456789";
var symb = "@%+\\/\'!#$^?:,)(}{][~-_.";


// This function will execute when called by writePassword function.
function generatePassword() {
  //This prompt asks the user what password length they'd like
  var pwLen = prompt("How many characters would you like your password to contain?");
  // I put these variables into local scope so that they reset each time the user generates a new password (clicks the "Generate Password" button).
  var include = "";
  var returnPw = "";

  if (pwLen > 128 || pwLen < 8) {
    alert("Error! Password length must be 8 - 128 characters.");
  } else {

    // If the user inputs an accepetable number of characters, these if statements will add the selected character types to the string in the variable "include".
    var includeUpper = confirm("Click OK if you'd like to include uppercase letters.");
 
    if (includeUpper) {
      include += upper;
    }

    var includeLower = confirm("Click OK if you'd like to inlcude lowercase letters");

    if (includeLower) {
      include += lower;
    }

    var includeNumber = confirm("Click OK if you'd like to include numbers.");

    if (includeNumber) {
      include += num;
    }

    var includeSymbol = confirm("Click OK if you'd like to include special characters.");

    if (includeSymbol) {
      include += symb;
    }

    // If no character types are selected this will send the user an error alert.
    if (!(includeUpper || includeLower || includeNumber || includeSymbol)) {
      alert("Error! Must include at least one character type.")
    }

    for (var i = 0; i < pwLen; i++) {
      returnPw += include.charAt(Math.floor(Math.random() * include.length))
    }

    // This return sets a value to the variable password in the writePassword function below.
    return returnPw;
  }
};


// Write password to the #password input
function writePassword() {
  // The variable "password" equals the return value (returnPw) of the function generatePassword.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// This executes the writePassword function when the user clicks the "Generate Password" button.
generateBtn.addEventListener("click", writePassword);
