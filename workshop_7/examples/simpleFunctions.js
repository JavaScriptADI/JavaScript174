// define function that will show product of 2 numbers
// name? parameters? body?
// this is function definition
function multiply(a, b) {
    // function body / code block
    console.log(a * b); // statement
}

// define a function that will return divison of 2 numbers
function divide(a, b) {
    return a / b;
}

// define a function that will print and return addittion of 3 numbers, but one number's default will be 0
function add(a, b, c = 0) {
    const result = a + b + c;
    console.log(result);
    return result;
}

console.log(multiply(5, 7)); // call / invoke
multiply(9, 2);
console.log(divide(10, 2));
console.log(divide(15, 2));
console.log(divide(30, 2));
console.log(divide(40, 2));
console.log(divide(50, 2));

console.log(`Return Value is: ${add(7, 3, 4)}`);
console.log(`Return Value is: ${add(7, 3)}`);

