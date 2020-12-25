//Steps
//Push button, begin first prompt
//First Prompt, user chooses between 8 and 128 charachters ---- Math.floor > Math.random
//Second prompt - would you like Lowercase charachters
//Third prompt - would you like uppercase charachters
//Fourth Prompt - would you like Numeric Charachters
//Fitht prompt - Special Charachters
// Validate options chosen - Atleast one option needs to be true
// Generate password
// Display password on the page or in an alert



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
˜
