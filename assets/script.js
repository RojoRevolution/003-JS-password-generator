// Assignment Code
var generateBtn = document.querySelector("#generate");

// ------------------------------//
//------ Custom Function ------ //
// ----------------------------//
function randomGen2() {
  //variables of options, will be combined and stored in empty variable "requirements"
  var charLower = "abcdefghijklmnopqrstuvwxyz";
  var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charNum = '1234567890';
  var charSpecial = '!@#$%^&*=-_';
  //empty variable that will store the combined vars above
  var requirements = "";
  //empty variable that will store the random generated final password
  var randPassWord = "";

  // ----- FIRST LOOP ---- // Password Length 

  // Initial prompt with validation for the specific length - will loop until number entered is between 8-128.
  do {
    var lengthPrompt = prompt("Choose the length of you password (between 8-128):");
    if (lengthPrompt < 8 || lengthPrompt > 128) {
      alert("Password must be between 8 characters and 128 characters long.");
    }
  } while (lengthPrompt < 8 || lengthPrompt > 128) {
  };

  // Variable Stores the legth of the password the user chose
  var passLength = lengthPrompt;

  // ----- SECOND LOOP ---- // Password Options

  //Prompts will continue to be asked until the user choose at least one of the options below
  do {
    //Prompt user if they'd like to include lowercase letters
    var inclLowerCase = confirm("Would you like to include lowercase letters?");
    //If prompt is true, 
    if (inclLowerCase === true) {
      //add variable string to empty requirements variable string -- if statements will be the same for each prompt
      var requirements = requirements += charLower;
    };
    //Prompt user if they'd like to include uppercase letters
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
    // Above prompts will loop until at least one of the conditions above is true
  } while (!inclLowerCase && !inclUpperCase && !inclNum && !inclSpecial) {
  };

  // ----- THIRD LOOP ---- // Randomizer

  //for loop runs the length of the user chosen password length in the initial promp
  for (var i = 0; i < passLength; i++) {
    // random numbers generate are stored to a variable
    var randGenerate = Math.floor(Math.random() * requirements.length);
    //random number is then passed into the requirements string to choose a character/index
    var match = requirements[randGenerate];
    //random string character is then added to the final password variable
    randPassWord += match;
  };
  //return the final completed, randmized password
  return randPassWord;

};
// ------------------------------//
//------**************** ------ //
// ----------------------------//


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = randomGen2();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

