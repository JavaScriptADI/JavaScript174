function bar() {
    console.log('Bar is called');
    console.log('bar is execting');

    console.log('bar is done');
}

function zed() {
    console.log("Zed is called");
    console.log("Zed is executing");
    foo();
    console.log("Zed is done");
}

function foo() {
    console.log('Foo is called');
    console.log('foo is execting');
    bar();

    console.log('foo is done');
}

zed();
