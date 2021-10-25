/* Create a function that takes in two sorted arrays of integers.
 * Your function should return a new two element array containing one number from each sorted array with the smallest difference.
 * Assume each array will contain at least one integer.
 */
var arr1 = [1, 6, 7, 9];
var arr1_2 = [8, 9, 10, 11, 12, 13]; // [9, 9]; - Since both arrays contain the number `9` and the difference between same numbers is `0`.
var arr2 = [2, 4, 6, 8, 15, 20];
var arr2_2 = [17, 25, 30, 47]; // [15, 17]; -Since the difference between `15` and `17` is `2`, the smallest difference between any two numbers across the arrays]

var smallestDifference = function (arr1, arr2) {
    var currentSmallest = [arr1[0], arr2[0]];
    for (let i = 0; i < arr1.length; i++) {
        for (let f = 0; f < arr2.length; f++) {
            if (arr1[i] === arr2[f]) {
                return [arr1[i], arr2[f]];
            }
            var smallestDiff = Math.abs(
                currentSmallest[0] - currentSmallest[1]
            );
            var currentDiff = Math.abs(arr1[i] - arr2[f]);
            if (currentDiff < smallestDiff) {
                currentSmallest = [arr1[i], arr2[f]];
            }
        }
    }
    return currentSmallest;
};

console.log(smallestDifference(arr1, arr1_2));
console.log(smallestDifference(arr2, arr2_2));
