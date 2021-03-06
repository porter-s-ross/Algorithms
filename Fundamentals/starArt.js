// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left- justified (first star would be very first char in the text field), or right-justified (last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75-character text field (with same number of spaces on either side of the block of stars, plus/minus one).

// Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.

// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from right side. The last num characters should be asterisks; the other 75 should be spaces.

// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.

// (optional) Create epic text-art Empire vs. Rebellion battle scenes, with ships like (=*=)and >o<.

function drawLeftStars(num) {
    textField = 75;
    for (var j = 0; j < num; j++) {
        console.log("*")
    }
}

function drawRightStars(num) {
    textField = 75;
    for (var i = 0; i < textField - num; i++) {
        console.log(" ")
    }
    for (var j = 0; j < num; j++) {
        console.log("*")
    }
}

function drawCenteredStars(num) {
    textField = 75;
    centered = num / 2;
    for (var j = 0; j < centered; j++) {
        console.log(" ")
    }
    for (var h = centered; h < textField - num; h++) {
        console.log("*")
    }
    for (var i = textField - centered; i < textField; i++) {
        console.log(" ")
    }
}

rand = Math.random() * 75;

// drawLeftStars(10);
// drawRightStars(rand);
// drawCenteredStars(25);
// console.log(rand);


// From the above, derive the following that accept and draw the given characters, not just asterisks:

function drawLeftChars(num, char) {
    textField = 75;
    for (var j = 0; j < num; j++) {
        console.log(char)
    }
}

function drawRightChars(num, char){
    textField = 75;
    for (var i = 0; i < textField - num; i++) {
        console.log(" ")
    }
    for (var j = 0; j < num; j++) {
        console.log(char)
    }
}

function drawCenteredChars(num, char){
    textField = 75;
    centered = num / 2;
    for (var j = 0; j < centered; j++) {
        console.log(" ")
    }
    for (var h = centered; h < textField - num; h++) {
        console.log(char)
    }
    for (var i = textField - centered; i < textField; i++) {
        console.log(" ")
    }
}

drawLeftChars(15, ">.<");
drawRightChars(3, "heyo");
drawCenteredChars(rand, "!!!!!!!!!!!!");