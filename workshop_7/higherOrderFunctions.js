// Higher order function is a function that receives function as a pramater
// functions that are passed as a parameter are called callbacks
const nums = [1, 2, 3, 4, 5, 6, 7, 8];


function repeat(n, operations) {
    for (let i = 0; i < n; i++) {
        operations(i);
    }
}

function greet() {
    console.log("hello");
}

repeat(3, () => {
    console.log("Hello");
});


repeat(10, (i) => {
    console.log(i);
});


console.log(nums.filter((number) => number % 2 === 0));
