
console.log("5 + 1"); // string
console.log(5 + 1); // number

console.log("5 + 1 = 6");
let a = parseInt(prompt("შემოიტანეთ რიცხვი (a)"));
let b = parseInt(prompt("შემოიტანეთ რიცხვი (b)"));

console.log(a + b); // 5 + 1

console.log(String(a) + " + " + String(b) + " = " + String(a + b));

// template strings
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} > ${b} = ${a > b}`);
