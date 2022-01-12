// function test(name) {
//     console.log(`Hello World! My name is ${name}`)
// }
// test("Mike")

////////////////////////////////////////////////////////////////

// function sigma(num){
//     var positiveNumber = 0
//     for (var i = 1; i <= num; i++){
//         positiveNumber = positiveNumber + i
//         // console.log(i)
//     }
//     return positiveNumber
// }
// console.log(sigma(3))

//////////////////////////////////////////////////////////

// function factorial(num){
//     var positiveNumber = 1
//     for (var i = 1; i <= num; i++){
//         positiveNumber = positiveNumber * i
//         // console.log(i)
//     }
//     return positiveNumber
// }
// console.log(factorial(5))

//////////////////////////////////////////////////////////
// Create function ThreesFives() that adds each value from 100 and 4000000 (inclusive) if that value
// is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

//function ThreesFives(num1, num2){
//  var sum1 = 0
//  var sum2 = 0
//  for (var i = num1; i <= num2; i++) {
//      if (i % 3 == 0){
//          sum1 = sum1 + i
//      }
//      if (i % 5 == 0) {
//          sum2 = sum2 +i
//      }
//  }
//return sum1 + sum2
//}
//console.log(ThreesFives(1, 100))
                
                
//////////////////////////////////////////////////////////
// Implement a ‘die’ that randomly returns an
// integer between 1 and 6 inclusive. Roll a pair of
// these dice, tracking the statistics until doubles
// are rolled. Display the number of rolls, min, max,
// and average.

// function doubles(){
    
//     diceArray = []

//     var roll1 = Math.ceil(Math.random() * 6 )
//     var roll2 = Math.ceil(Math.random() * 6 )

//     if (roll1 == roll2){
//         console.log("These dice match!")
//         diceArray.push(roll1, roll2)
//         console.log(diceArray)
//         return diceArray
//     }
//     else {
//         while (roll1 != roll2){
//             console.log("These dice do NOT match!")
//             diceArray.push(roll1, roll2)
//             console.log(diceArray)
//             doubles()
//         }
//     }
// }
// console.log(doubles())

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//                                      BASIC 13
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//#1
// Print 1-255
// Print all the integers from 1 to 255.

// function print1To255(){
//     for (i = 1; i <= 255; i++){
//         console.log(i)
//     }
// }
// print1To255()


//#2
// Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.

// function printSum0To255(){
//     sum = 0
//     for (i = 0; i <= 255; i++){
//         sum = sum + i
//         console.log(sum)
//     }
//     return "Sum equals: " + sum
// }

// console.log(printSum0To255())

//#3
// Find and Print Max
// Given an array, find and print its largest element.

// function printArrayMax(arr){
//     if (arr.length == 0) {
//         console.log("Empty array, no max value.");
//         return;
//     }
//     var max = arr[0];
//     for (var idx = 1; idx < arr.length; idx++) {
//         console.log(idx)
//         if (arr[idx] > max) {
//         max = arr[idx];
//         }
//     }
//     console.log("Max value is:", max);
// }
// printArrayMax([1,2,3,2,1,9])


// #4
// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
// function printIntegers(){    
//     for (i = 1; i < 256; i++){
//         if (i % 2 != 0) {
//             console.log(i)
//         }
//     }
//     return
// }
// console.log(printIntegers())


// #5
// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
// function greatherThanY(arr, val){
//     for (i = 0; i <= arr.length; i++){
//         if (arr[i] > val) {
//             console.log(arr[i])
//         }
//     }
// }
// console.log(greatherThanY([1,2,3,4,5,9,0,7,13,2,76], 3))


// #6
// Max, Min, Average
// Given an array, print the max, min and average values for that array.




// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
// 34

// Print Odds 1-255
// Print all odd integers from 1 to 255.

// Iterate and Print Array
// Iterate through a given array, printing each value.

// Get and Print Average
// Analyze an array’s values and print the average.

// Square the Values
// Square each value in a given array, returning that same array with changed values.

// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.

// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the
// end.