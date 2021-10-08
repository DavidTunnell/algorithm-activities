/* Create a function that takes in an array of numbers and returns the peak of the array.
 */
var arr = [1, 3, 7, 4, 3, 2, 1]; //7
var arr2 = [2, 4, 6, 8, 10]; //10

var peakFinder = function (arr) {
    let peak = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > peak) {
            peak = arr[i];
        }
    }
    return peak;
};

console.log(peakFinder(arr));
console.log(peakFinder(arr2));
