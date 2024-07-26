
let lastRun = new Date();
let lastRun2 = new Date();
setInterval(() => {
    console.log(new Date() - lastRun);
    console.log((new Date()).toLocaleString({'region': 'ka-GE'}));
    lastRun = new Date();
}, 1000);

setInterval(() => {
    console.log("Faster")
    console.log(new Date() - lastRun2);
    console.log((new Date()).toLocaleString({'region': 'ka-GE'}));
    lastRun2 = new Date();
}, 500);
console.log("I will be exectued first");
