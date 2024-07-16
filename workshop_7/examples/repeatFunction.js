// define a function that will receive a function and repeat count and 
// does that function in repeat count

// functions get hoisted to the top of a JS file
// that is why you can use this here!
repeat(greet, 10);

// greet will be a callback function
function greet() {
    console.log("Hello");
}

// repeat is higher order function
function repeat(callback, repeatCount) {
    for (let i = 0; i < repeatCount; i++) {
        callback();
    }
}

// Greet is a callback function

repeat(
    () => { // arrow function / anonnymus function / inline function
        console.log("What am I?");
    },
    10
);