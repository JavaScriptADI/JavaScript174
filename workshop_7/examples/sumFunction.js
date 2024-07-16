// define a function that will sum all the array elements and returns it
function sum(nums) {
    let s = 0;
    for (let i = 0; i < nums.length; i++) {
        s += nums[i];
    }
    return s;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(sum(nums));