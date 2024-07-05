/*
write a program that will check user number
and say if it is a 0; negative or positive!
*/
let num = Number(prompt("Enter a number"));


if (num === 0) {
    console.log(num);
} else if (num < 0) {
    console.log(`${num} is Negative`);
} else {
    // All other cases
    console.log(`${num} is Positive`);
}

// if (num === 0) {
//     console.log(num);
// }
// if (num < 0) {
//     console.log(`${num} is Negative`);
// }
// if (num > 0) {
//     console.log(`${num} is Positive`);
// }

if (num > 0) {
    console.log(`${num} is Positive`);
} else if (num < 0) {
    console.log(`${num} is Negative`);
} else {
    console.log("Zero");
}
