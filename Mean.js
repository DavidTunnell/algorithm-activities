/*
Write a function that takes in an array of numbers and outputs the average of all the numbers.
Ex:
Input: [ 1 , 4 , 7 ]
Output: 4
Input: [ 10, 5 ]
Output: 7.5
Input: [ 1.5, 3, 2.5, 1 ]
Output: 2
*/

function mean(numArray) {
    var returnVal = 0;
    for (var i = 0; i < numArray.length; i++) {
        returnVal += numArray[i];
    }
    return returnVal / numArray.length;

}

function main() {
    console.log(mean([1, 4, 7]));
    console.log(mean([10, 5]));
    console.log(mean([1.5, 3, 2.5, 1]));
}

main();