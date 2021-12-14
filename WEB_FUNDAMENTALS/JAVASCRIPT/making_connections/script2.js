console.log("Starting in 5 seconds...")

function sayHello() {
    console.log("Hello, Mike...")
}
setTimeout(sayHello, 1000);



function codeToRunLater() {
    for (var i = 0; i <= 1000; i++) {
        console.log("running: " +i)
    }
    console.log("END")
}

setTimeout(codeToRunLater, 5000);


