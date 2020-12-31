
// Assignment Code
var generateBtn = document.querySelector("#generate");

// ------------------------------------//
//------ Start Custom Function ------ //
// ----------------------------------//
function randomGen() {
  //variables of options, will be combined and stored in empty variable
  var charLower = "abcdefghijklmnopqrstuvwxyz";
  var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charNum = '1234567890';
  var charSpecial = '!@#$%^&*=-_';
  //empty variable that will store the combined vars above
  var requirements = "";
  //empty variable that will store the random generated final password
  var randPassWord = "";

  // Initial prompt with validation for the specific length - will loop until number entered is between 8-128.
  do {
    var lengthPrompt = prompt("Choose the length of you password (between 8-128):");
    if (lengthPrompt < 8 || lengthPrompt > 128) {
      alert("Password must be between 8 characters and 128 characters long.");
    }
  } while (lengthPrompt < 8 || lengthPrompt > 128) {
  };

  console.log(lengthPrompt);
  // Variable Stores the user length
  var passLength = lengthPrompt;
  //Prompts will continue to be asked until the user choose at least one of the options below
  do {
    //Prompt for lowercase
    var inclLowerCase = confirm("Would you like to include lowercase letters?");
    //If prompt is true, 
    if (inclLowerCase === true) {
      //add variable string to empty requirements variable string
      var requirements = requirements += charLower;
    };
    //Prompt for uppercase
    var inclUpperCase = confirm("Would you like to include uppercase letters?");
    if (inclUpperCase === true) {
      var requirements = requirements += charUpper;
    };
    //Prompt for including numbers
    var inclNum = confirm("Would you like to include numbers?");
    if (inclNum === true) {
      var requirements = requirements += charNum;
    };
    //Prompt for including Special Characters
    var inclSpecial = confirm("Would you like to include special characters?");
    if (inclSpecial === true) {
      var requirements = requirements += charSpecial;
    };
    //Validated that at least one option was chosen
    if (!inclLowerCase && !inclUpperCase && !inclNum && !inclSpecial) {
      alert("ALERT: Password must include at least one option in order to be generated. Press OK to select again.")
    };
  } while (!inclLowerCase && !inclUpperCase && !inclNum && !inclSpecial) {
  };



  // var num = Math.floor(Math.random() * ((20 - 10) + 1) + 10;
  for (var i = 0; i < passLength; i++) {
    var randGenerate = Math.floor(Math.random() * requirements.length);
    var match = requirements[randGenerate];
    //Push var match to the passWord variable to a string
    randPassWord += match;
  };
  console.log(randPassWord);
  return randPassWord;

};

// ----------------------------------//
//------ End Custom Funciton ------ //
// --------------------------------//


// Write password to the #password input
function writePassword() {
  // var password = begins main function
  var password = randomGen();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

