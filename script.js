// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for character type:
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = upper.toLowerCase();
var num = '0123456789';
var symb = "@%+\\/\'!#$^?:,)(}{][~-_.";
// var includeUpper;
// var includeLower;
// var includeNumber;
// var includeSymbol;
// var characters;
// var pw


// This function will execute when called by writePassword function.
function generatePassword() {
  //This prompt asks the user what password length they'd like
  var pwLen = prompt("How many characters would you like your password to contain?");
  // I put these variables into local scope so that they reset each time the user generates a new password (clicks the generate password button).
  var include = "";
  var returnPw = "";

  if (pwLen > 128 || pwLen < 8) {
    alert("Error! Password length must be 8 - 128 characters.");
  } else {
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
}


// var pw = "";
// var characters = "";

// console.log(characters)

// pw += characters;

// console.log(pw)






//   }
// };


// pwLen = parseInt(prompt("How many characters would you like your password to contain?"));
// if (pwLen > 128 || pwLen < 8) {
//   alert("Error! Password length must be 8 - 128 characters.");

//   // If pw length selection is in range, continue to character type selecton
// } else {
//   includeUpper = confirm("Click OK if you'd like to include uppercase letters.");
//   includeLower = confirm("Click OK if you'd like to inlcude lowercase letters");
//   includeNumber = confirm("Click OK if you'd like to include numbers.");
//   includeSymbol = confirm("Click OK if you'd like to include special characters.");
// }

// if (includeUpper) {
//   include += randUpper;
// }

// if (includeLower) {
//   include += randLower;
// }

// if (includeNumber) {
//   include += randNum;
// }
// // if (includeSymbol) {
// //   include += randSymb;
// // }



// // // If user didn't select any character types, alert goes off
// // selected = includeUpper && includeLower && includeNumber && includeSymbol;

// // if (!selected) {
// //   alert("Error! Must include at least one character type.")
// // };

// // //Getting an error here!!

// for (var i = 0; i < pwLen; i++) {
//   var character = include[Math.floor(Math.random() * inlclude.length)];
//   //console.log(character);
//   password += character;
// // for (i = 0; i < pwLen; i++) {
// //   pw = include
// }

// console.log(password)

// // pw = include[Math.floor(Math.random() * include.length)];

// // }












// Write password to the #password input
function writePassword() {
  // The variable password equals the return value (returnPw) of the function generatePassword.
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
