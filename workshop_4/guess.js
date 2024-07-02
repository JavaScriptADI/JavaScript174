let secret = parseInt(Math.random() * 100);
let num;
let tries = 0;
let maxTries = 7;

// console.log(`you entered: ${num}`);

while (true) {
    // console.log(typeof num === "number");
    // მანამ სანამ num -ის data type არ იქნება რიცხვი
    // ან num -ის მნიშვნელობა არის NaN
    num = undefined;
    while (typeof num !== "number" || Number.isNaN(num)) {
        num = parseInt(prompt("Enter number"))
    }

    if (num < secret) {
        console.log("Higher");
    } else if (num > secret) {
        console.log("Lower");
    } else {
        console.log("You correctly guessed the number");
        break;
    }

    if (tries >= maxTries) {
        console.log("You lose!");
        break;
    }
    tries++;
}
