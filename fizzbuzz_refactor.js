//declare or define function

//write function to validate input
function validate(inputNumber) {

    //by default we are assuming that the input is valid (setting a FLAG to true)
    var userInputCorrectFlag = true;

    //set the traps:

    //at least 1 characters
    while (inputNumber.length < 1) {
        var inputNumber = prompt("Please enter 1 digit or more.");
        userInputCorrectFlag = false;
    }

    //if there are spaces (OR the number of spaces is larger than 0)
    while (inputNumber.indexOf(' ') > 0) {
        var inputNumber = prompt("Please don't enter spaces. Try a number!");
        userInputCorrectFlag = false;
    }

    //the limit is a number (if the rounded value of your number (Math.floor(inputNumber)) is the same with the initial number (inputNumber), it means that the number (inputNumber) was integer in the first place)
    while (Math.floor(inputNumber) != inputNumber) {
        var inputNumber = prompt("Your upper limit was not a number. Set it again.");
        //change the user input flag to false
        userInputCorrectFlag = false;
    }

    //if the limit is valid, then play the game
    if (userInputCorrectFlag = true) {
        playFizzBuzz(inputNumber);
    }
}
//if input is valid we can play fizzbuzz

//write a function to play fizzbuzz
function playFizzBuzz(validatedLimit) {

    for (i = 1; i <= validatedLimit; i++) {
        //the least restrictive condition first
        var output = "<li>" + i + "</li>";
        if (i % 3 == 0) {
            output = "<li>Fizz</li>";
        }
        if (i % 5 == 0) {
            output = "<li>Buzz</li>";
        }
        if ((i % 3 == 0) && (i % 5 == 0)) {
            output = "<li>FizzBuzz</li>";
        }
        $('#showResults').append(output);
    }
}

//use functions
$(document).ready(function () {
    //prompt user for imput
    var limit = prompt("Please set the upper limit to play FizzBuzz.");
    //validate input
    validate(limit);

});
