let age = parseInt(prompt("Enter your age: "));

console.log(typeof age);


/*
თუ (პირობა) {
    ჭეშმარიტის შემთხვევაში ეს კოდი შეასრულე რაც ფიგურულ ფრჩხილებს შორის არის
} თუარა და {
    ეს კოდი შეასრულე
} 

*/

if (age < 18) { // block of code; code block; code fragment
    console.log("You are a minor.");
    console.log("You are not allowed to drink alcohol.");
    let parentPermission = prompt("Do you have permission from your parents? (yes/no)").toLowerCase() === "yes";
    if (parentPermission) {
        console.log("You are allowed to drink alcohol.");
    }
} else {
    console.log("You are an adult.");
}
console.log(`You are ${age} years old.`);