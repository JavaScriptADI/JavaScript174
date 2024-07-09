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
const name = "Joe";

// Function definiton / declaration
function greet(user) {
    // Each call user variable will be created and assigned to the value passed
    // this is a local scope
    // const name = "Shadowed Joe";
    {
        // this is a nested scope
        // const name = "Nested Joe";
        console.log(`Nested: ${name}`);
    }
    console.log(`${name} greets you ${user} are you today?`);
    // user variable will be destroyed after the function is done
}

{
    // this is a local scope
    // shadowing
    const name = "John";
    console.log(`Shadowing: ${name}`);
}

{
    var a = 10;
}
console.log(`a escaped: ${a}`);
// call / invocation
greet("Josh");
greet("John");
// greet();
