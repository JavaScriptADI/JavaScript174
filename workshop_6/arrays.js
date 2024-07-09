// Data Structure - Array
/*
- Accessing elements
- Adding new elements
- Removing elements
- Changing elements
*/


// We want to store daily average temperature of Tbilisi
// Array definition
// Each element of an array is number
// Each number represents daily average
// leftmost element is today and decreases to the right
const temps = [25, 27, 28, 30, 31, 37, 19, 23, 24];

// How to access individual day?
console.log(`There are ${temps.length} data points in our temps array`);
console.log(`Today's avg is: ${temps[0]}`);
console.log(`Yesterday's avg is: ${temps[1]}`);
console.log(`3 days before avg is: ${temps[3]}`);
console.log(`Earliest avg is: ${temps[temps.length - 1]}`);
console.log(`${temps.length - 1} day before avg is: ${temps[temps.length - 1]}`);


// How to add new data?
temps.push(27); // push adds new element at the end of array
console.log(temps);
console.log(`${temps.length - 1} day before avg is: ${temps[temps.length - 1]}`);

temps.unshift(23);
console.log(temps);
console.log(`Today's avg is: ${temps[0]}`);

// How to remove old data?
temps.pop();
console.log("pop was used!");
console.log(temps);

temps.shift();
console.log("shift was used!");
console.log(temps);

// Changing exsiting elements
temps[0] = 17;
console.log("After changing element!");
console.log(temps);

temps[temps.length - 1] = 24.3;
console.log("After changing element!");
console.log(temps);

console.log(`${parseInt(temps.length / 2)} days before avg is: ${temps[parseInt(temps.length / 2)]}`);

// How to extend?
const vazhaTemps = [25, 26, 24.3, 26];
const rustaveliTemps = [26, 24, 24.5, 26.4];

const tbilisiTemps = vazhaTemps.concat(rustaveliTemps);
console.log(`Tbilisi: ${tbilisiTemps}`);
console.log(`Vazha: ${vazhaTemps}`);
console.log(`Rustaveli: ${rustaveliTemps}`);

// Print out all daily averages
for (let i = 0; i < tbilisiTemps.length; i++) {
    console.log(`${i} day before avg is: ${tbilisiTemps[i]} celsius`);
}


