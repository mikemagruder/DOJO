// ARRAY CHALLENGE ONE ///////////////////////////////
function alwaysHungry(arr) {
    // your code here 
    for (var i = 0; i <= arr.length-1; i++) {

        if (arr[i] == "food") {
            console.log("yummy");
        } else {
            console.log(`I'm hungry!`)
        }
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// ARRAY CHALLENGE TWO ///////////////////////////////////
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] >= cutoff ) {
            filteredArr.push(arr[i])
        }
    }

    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// ARRAY CHALLENGE THREE ///////////////////////////////
function betterThanAverage(arr) {
    var sum = 0;
    for (i = 0; i <= arr.length-1; i++) {
        sum = arr[i] + sum;
    }
    // calculate the average
    var average = sum / arr.length;

    var count = 0
    // count how many values are greater than the average
    for (i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > average) {
            count++;
        } 
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


// ARRAY CHALLENGE FOUR ///////////////////////////////
function reverse(arr) {
    // your code here
    var temp = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        temp.push(arr[i]);
    }
    arr = temp;
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// ARRAY CHALLENGE FIVE ///////////////////////////////
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var prev = fibArr[fibArr.length-1];
        var prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
