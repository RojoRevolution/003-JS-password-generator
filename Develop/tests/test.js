//////////// Brainstorming Code --- Will need to reorganize////////////////




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

// let show = myShows[Math.floor(Math.random() * myShows.length)];






