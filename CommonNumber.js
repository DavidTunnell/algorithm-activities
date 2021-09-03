/* Return the number in common between the two given arrays.
 * You may not use the `indexOf` or `includes` methods to complete this problem.
 */
var arrA = [1, 9, 8, 7];
var arrB = [10, 12, 1, 6, 5];
//1

const commonNumber = function(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let f = 0; f < arr2.length; f++) {
            if (arr1[i] === arr2[f]) {
                return arr1[i];
            }
        }
    }
};

console.log(commonNumber(arrA, arrB));