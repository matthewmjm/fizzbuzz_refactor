//beginner
for (i = 1; i <= 100; i++) {
    //the most restrictive condition first
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
}


//advanced (no elses)
for (i = 1; i <= 100; i++) {
    //the least restrictive condition first
    var output = i;
    if (i % 3 == 0) {
        output = "fizz";
    }
    if (i % 5 == 0) {
        output = "buzz";
    }
    if ((i % 3 == 0) && (i % 5 == 0)) {
        output = "FizzBuzz";
    }
    console.log(output);
}

//super-advanced - the shortest fizzbuzz possible*/
for (var i = 1; i <= 100; i++) {
    var msg = "";
    if (i % 3 == 0) msg += "Fizz";
    if (i % 5 == 0) msg += "Buzz";
    console.log(msg || i);
}
