//////////// Brainstorming Code --- Will need to reorganize////////////////

function randomGen() {
    // Prompt for length
    var lengthPrompt = prompt("Choose the length of you password (between 8-128):");
    // need to validate length
    console.log(lengthPrompt);
    // Variable Stores the user length
    var passLength = lengthPrompt;
    //Prompt for Uppercase
    var inclUpperCase = confirm("Would you like to include Uppercase Characters?");
    //Prompt for including numbers
    var inclNum = confirm("Would you like to include Numbers?");
    //Prompt for including Special Characters
    var inclSpecial = confirm("Would you like to include special characters?");

    var char = 'abcdefghijklmnopqrstuvwxyz';
    var charUpper = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charUpperNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    var charUpperNumSpecial = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*=-_';
    //empty variable that will store the password
    var passWord = "";


    // var num = Math.floor(Math.random() * ((20 - 10) + 1) + 10;
    if (inclUpperCase === false && inclNum === false && inclSpecial === false) {
        for (var i = 0; i < passLength; i++) {
            var randGenerate = Math.floor(Math.random() * char.length);
            var match = char[randGenerate];
            //Push var match to the passWord variable to a string
            passWord += match;
        };
        console.log(passWord);
    };
    if (inclUpperCase === true && inclNum === false && inclSpecial === false) {
        for (var i = 0; i < passLength; i++) {
            var randGenerate = Math.floor(Math.random() * charUpper.length);
            var match = charUpper[randGenerate];
            passWord += match;
        };
        console.log(passWord);
    };
    if (inclUpperCase === true && inclNum === true && inclSpecial === false) {
        for (var i = 0; i < passLength; i++) {
            var randGenerate = Math.floor(Math.random() * charUpperNum.length);
            var match = charUpperNum[randGenerate];
            passWord += match;
        };
        console.log(passWord);
    };
    if (inclUpperCase === true && inclNum === true && inclSpecial === true) {
        for (var i = 0; i < passLength; i++) {
            var randGenerate = Math.floor(Math.random() * charUpperNumSpecial.length);
            var match = charUpperNumSpecial[randGenerate];
            passWord += match;
        };
        console.log(passWord);
    };
};


//randomGen();

/////////// Test-002

function randomGen2() {
    // Prompt for length
    var lengthPrompt = prompt("Choose the length of you password (between 8-128):");
    // need to validate length
    console.log(lengthPrompt);
    // Variable Stores the user length
    var passLength = lengthPrompt;
    //Prompt for Uppercase
    var inclUpperCase = confirm("Would you like to include Uppercase Characters?");
    //Prompt for including numbers
    var inclNum = confirm("Would you like to include Numbers?");
    //Prompt for including Special Characters
    var inclSpecial = confirm("Would you like to include special characters?");

    // var char = 'abcdefghijklmnopqrstuvwxyz';
    var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charNum = '1234567890';
    var charSpecial = '!@#$%^&*=-_';
    //empty variable that will store the password
    var requirements = "abcdefghijklmnopqrstuvwxyz";


    if (inclUpperCase === true) { requirements += charUpper; }
    //include false statements so that it saves the results?
    if (inclNum === true) { requirements += charNum; }
    if (inclSpecial === true) { requirements += charSpecial; }

    // var num = Math.floor(Math.random() * ((20 - 10) + 1) + 10;
    for (var i = 0; i < passLength; i++) {
        var passWord = "";
        var randGenerate = Math.floor(Math.random() * requirements.length);
        var match = requirements[randGenerate];
        //Push var match to the passWord variable to a string
        passWord += match;
    };
    console.log(passWord);
};


randomGen(2);




