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
    //variables of options, will be combined and stored in empty variable
    var charLower = "abcdefghijklmnopqrstuvwxyz";
    var charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charNum = '1234567890';
    var charSpecial = '!@#$%^&*=-_';
    //empty variable that will store the combined vars above
    var requirements = "";
    //empty variable that will store the random generated final password
    var passWord = "";

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
            //add variabele string to empty password variable string
            var requirements = requirements += charLower;
            console.log(requirements);
        };
        //Prompt for uppercase
        var inclUpperCase = confirm("Would you like to include uppercase letters?");
        if (inclUpperCase === true) {
            var requirements = requirements += charUpper;
            console.log(requirements);
        };
        //Prompt for including numbers
        var inclNum = confirm("Would you like to include numbers?");
        if (inclNum === true) {
            var requirements = requirements += charNum;
            console.log(requirements);
        };
        //Prompt for including Special Characters
        var inclSpecial = confirm("Would you like to include special characters?");
        if (inclSpecial === true) {
            var requirements = requirements += charSpecial;
            console.log(requirements);
        };
        //Validated that at least one option was chosen
        if (inclLowerCase === false && inclUpperCase === false && inclNum === false === inclSpecial === false) {
            alert("ALERT: Password must include at least one option in order to be generated. Press OK to select again.")
        };
    } while (inclLowerCase === false && inclUpperCase === false && inclNum === false === inclSpecial === false) {
    };



    // var num = Math.floor(Math.random() * ((20 - 10) + 1) + 10;
    for (var i = 0; i < passLength; i++) {
        var randGenerate = Math.floor(Math.random() * requirements.length);
        var match = requirements[randGenerate];
        //Push var match to the passWord variable to a string
        passWord += match;
    };
    console.log(passWord);
};

randomGen2();
