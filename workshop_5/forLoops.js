let text = "Hello";

function findIteration(x, base) {
    return parseInt((Math.log(x) / Math.log(base)) + 1)
}

// for (start; end; step)
for (let i = 0; i < 100; i++) { // iteration
    // this loop does maximum 100
    let randomNum = parseInt(Math.random() * 100);
    console.log(`RandomNum = ${randomNum}`);
    if (randomNum === 50) {
        console.log("Loop ended randomly");
        break;
    }

    if (randomNum % 2 === 0){
        console.log("Loop was skipped!");
        continue;
    }

    console.log(i);
    console.log(text);
}


for (let i = 1; i <= 100; i *= 9) {
    let iteration = findIteration(i, 9)
    console.log(`Iteration ${iteration}; i = ${i}`);
}
