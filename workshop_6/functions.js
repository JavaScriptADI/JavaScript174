/*
- Do you remember code block?
- What is a function?
    function is a block of code that will be executed when it is called.
- Definition vs Call
- What is a parameter?
- What is a Return statement?
- What are Scopes?
- Global vs Local vs Nested scopes
- Scope resolution
*/

// Global scope
const gName = "Joe";

// Function definiton / declaration
function greet(user) {
    // Each call user variable will be created and assigned to the value passed
    return `${gName} greets you ${user}, How are you today?`;
    // user variable will be destroyed after the function is done
}


function add(a, b) {
    return a + b;
}


// call / invocation
console.log(greet("Josh"));
const greetingText = greet("John");
console.log(greetingText);
// greet();

console.log(add(1, 2));
console.log(add(1, -3));
