const start = new Date();

// this function will be executed after 1000 milliseconds
setTimeout(() => {
    console.log(`This function is executed after ${new Date() - start} milliseconds`);
    const start_ = new Date();
    while (new Date() - start_ < 4000) {
        // do nothing
    }
    console.log("Function ended");
}, 1000);

setTimeout(() => {
    console.log(`This function is executed after ${new Date() - start} milliseconds`);
    const start_ = new Date();

    while (new Date() - start_ < 4000) {
        // do nothing
    }
    console.log("Function ended");
}, 1000);