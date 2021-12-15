// LOOP ONE///////////////
function loop1to20() {
    for (var i=0; i <= 20; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

loop1to20();

// LOOP TWO /////////////////////////
function loopBy3() {
    for (var i=100; i >= 0; i--) {
        if (i % 3 == 0){
            console.log(i)
        }
    }
}
loopBy3()

//LOOP THREE//////////////////////////////////
function printSequence() {
    for (var i = 4; i >= -4; i = i - 1.5) {
        console.log(i)
    }
}
printSequence()

//LOOP FOUR/////////////////////////////////////////////
function sigma() {
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        sum = sum + i
    }
    console.log(sum)
}
sigma();

//LOOP FIVE///////////////////////////////////////////
function factorial() {
    var product = 1;
    for (var i = 1; i <= 12; i++) {
        product = product * i
    }
    console.log(product)
}
factorial();