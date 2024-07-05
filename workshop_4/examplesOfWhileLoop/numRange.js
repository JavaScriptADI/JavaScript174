/*
ask user to enter a 2 numbers
and tell user if our secret number is in range of theese 2 numbers

*/

let secret = 14;
let maxRange = 10;
let num1 = parseInt(prompt("Enter a number 1"));
let num2 = parseInt(prompt("Enter a number 2"));
if (num1 > num2) {
    let num3 = num2;
    num2 = num1;
    num1 = num3;
}
let difference = Math.abs(num2 - num1);


if (difference < maxRange) { // nested if else statement
    // თუ num1 ნაკლებია secret და num2 მეტია secret
    if (num1 < secret && secret < num2) {
        console.log("it's in between");
    } else {
        console.log("secret is outside of this range");
    }
} else {
    console.log(`range should be <= ${maxRange}; it is ${difference}`)
}


