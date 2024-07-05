let text = "sorry";
let i = 0;

// 100
while (i < 100) { // code block
    console.log(text);
    i++; // i += 1; i = i + 1;
}

i = 0;
do {
    console.log(text.toUpperCase());
    i++;
} while (i < 100);

// console.log("Loop ended")