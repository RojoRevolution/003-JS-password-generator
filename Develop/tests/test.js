//////////// Brainstorming Code --- Will need to reorganize////////////////




// Generate a number between 8 and 128
// Can use perhaps use this with .length for the final output

// function getRandomFloat(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// var random = getRandomFloat(8, 128);
// console.log(random);


///////////////////////////////
// String Option Variables
///////////////////////////////


// let show = myShows[Math.floor(Math.random() * myShows.length)];


function randomGen() {
    // Prompt for length
    var lengthPrompt = prompt("Choose the length of you password (between 8-128):");
    // need to validate length
    console.log(lengthPrompt);
    var passLength = lengthPrompt;
    //Prompt for Uppercase
    var upperCase = confirm("Would you like to include Uppercase Characters?")
    //Prompt for numbers
    //Prompt for Special Characters
    var char = 'abcdefghijklmnopqrstuvwxyz';
    var num = '0123456789';
    var sym = '!@#$%^&*=-_';
    var passWord = "";


    // var num = Math.floor(Math.random() * ((20 - 10) + 1) + 10;

    for (var i = 0; i < passLength; i++) {
        var randGenerate = Math.floor(Math.random() * char.length);
        var match = char[randGenerate];
        //Pushing to a string
        passWord += match;
    };
    console.log(passWord);

}


randomGen();


///////////////////////////////
// Prompt / Confirm Variables
///////////////////////////////


// Needs to be a fucntion because it doesn't start until the button is clicked
// var generate = function () {
//     // prompt length
//     var lengthPrompt = prompt("Choose the length of you password (between 8-128):");
//     var length = lengthPrompt;
//     // confirm numbers
//     var inclNumbers = confirm("Would You Like To Include Numbers?");
//     var inclNumbersResponse = inclNumbers;
//     // confirm characthers
//     var inclChar = confirm("Would you like to include special charachters?")
//     var inclCharResponse = inclChar;
//     //empty password string
//     var pwd = "";

    //Run Loop
    // for (i = 0; i < length; i++) {
    //     pwd += characters.charAt(Math.floor(Math.random() * length.length));
    // }

// }






// Original Function
// function generatePassword() {
//     var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }

