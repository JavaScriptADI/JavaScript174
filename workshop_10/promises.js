let promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise
    .then(() => {
        console.log('Success, You are a GEEK');
    })
    .catch(() => {
        console.log('Some error has occurred');
    });
