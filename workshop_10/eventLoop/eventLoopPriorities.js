let start = new Date();

// Queue a timed callback after 20ms
setTimeout(function() {
    display("20ms callback");
}, 20);

// Queue a timed callback after 30ms
setTimeout(function() {
    display("30ms callback");
}, 30);

// Queue a timed callback after 10ms
setTimeout(function() {
    display("10ms callback");
}, 10);

// Busy-wait 40ms
display("Start of busy-wait");
let stop = new Date() + 40;
while (new Date() < stop) {
    // Busy-wait
}
display("End of busy-wait");

function display(msg) {
    const p = document.createElement('p');
    const elapsed = String(+new Date() - start);
    p.innerHTML = "+" + "00000".substring(elapsed.length - 5) + elapsed + ": " + msg;
    document.body.appendChild(p);
}