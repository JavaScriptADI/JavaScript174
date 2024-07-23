// in Programing every character has a code
// ASCII code is a character encoding standard for electronic communication.

// [A - Z] [65 - 90] - [a - z] [97 - 122]

console.log("A".charCodeAt());
console.log(String.fromCharCode(65));

// string is same as array of characters
// we do not have char type in JavaScript
const text = "heLlo";
// const text2 = ['h', 'e', 'l', 'l', 'o'];

for (let i = 0; i < text.length; i++) {
    if ("A" <= text[i] || text[i] <= "Z") {
        console.log(`We found uppercase letter at ${i} index`);
    }
}

// console.log(Array.from(text));
// console.log(text.split(""));
text.split("")
.forEach((character, i) => {
    if ("A" <= character && character <= "Z") {       
        console.log(`We found uppercase letter at ${i} index`);
    }
});

