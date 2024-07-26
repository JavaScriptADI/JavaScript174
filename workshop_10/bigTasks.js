function analyzeBigData(anbalyzingTime, title) {
    let start = new Date();
    console.log(`Analyzing ${title}`);
    // milliseconds are 1000th of a second
    while (new Date() - start < anbalyzingTime) {
        // do nothing
    }
    // console.log(start.getTime() / 1000);
    // console.log(start.getTime() - 1000);
    console.log(`Analyzing ${title} takes ${(new Date() - start) / 1000} seconds`);
}

// every function will be executed in order of their call
// this means that these functions are executed in a synchronous way
analyzeBigData(5000, "Finances");
analyzeBigData(2000, "Stocks");
analyzeBigData(7000, "Weather");


