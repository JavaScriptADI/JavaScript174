let age = parseInt(prompt("Enter your age: "));

// and operator returns the first false value or the last true value
// and operator returns the last checked value if all values are true
console.log(age && "Something");

// age <= 18 && alert("You cannot enter the site!");

if (age <= 18) {
    alert("You cannot enter the site!");
} else if (age > 18 && age <= 30) {
    alert("You can enter the site!");
} else {
    alert("You are too old to enter the site!");
}


