console.log("Start of the code!");
let firstName = "Josh";

// function definition; declaration
function foo(parameter1) {
    // this function gets hoisted to the top of the code
    let lastName = "Smith";
    console.log("Start of foo function!");

    console.log("End of foo function!");
    console.log("Variables and parameters are destroyed after the function is executed!");
}

foo(6); // function call / invocation

console.log("End of the code!");
console.log("Variable are destroyed after the code is executed!");