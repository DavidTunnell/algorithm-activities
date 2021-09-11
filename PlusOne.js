/* You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 * https://leetcode.com/problems/plus-one/
 */
var digits = [1, 2, 3]; //[1,2,4]
var digits2 = [4, 3, 2, 1]; //[4,3,2,2]
var digits3 = [0]; //[1]
var digits4 = [9]; //[1,0]
var digits5 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]; //[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
var digits6 = [
    7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4,
    7, 4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 6,
]; //[7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4, 7, 4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 7,]
var digits7 = [8, 8, 2, 5, 2, 9, 9, 3, 3, 8, 5, 7, 0, 6, 6]; //[8,8,2,5,2,9,9,3,3,8,5,7,0,6,7]

var plusOne = function (digits) {
    let concatInt = "";
    var subSet = [];
    var subSetHolder = [];
    for (let i = 0; i < digits.length; i++) {
        subSet.push(digits[i]);
        if (i % 10 === 0 && i !== 0) {
            subSetHolder.push(subSet);
            subSet = [];
        } else if (digits.length > 15 && digits.length - i < 10) {
            subSetHolder.push(digits.slice(i, digits.length));
            break;
        }
    }
    if (subSetHolder.length == 0) {
        for (let f = 0; f < subSet.length; f++) {
            concatInt += subSet[f].toString();
        }
        concatInt = parseInt(concatInt) + 1;
        var backToString = concatInt.toString();
    } else {
        var concatLocal = "";
        var combinedArray = [];
        for (let j = 0; j < subSetHolder.length; j++) {
            for (let k = 0; k < subSetHolder[j].length; k++) {
                concatLocal += subSetHolder[j][k];
            }
            combinedArray.push(concatLocal);
            concatLocal = "";
        }
        combinedArray[combinedArray.length - 1] = (
            parseInt(combinedArray[combinedArray.length - 1]) + 1
        ).toString();
        var backToString = "";
        for (let x = 0; x < combinedArray.length; x++) {
            backToString += combinedArray[x];
        }
    }
    var returnArray = [];
    for (let i = 0; i < backToString.length; i++) {
        returnArray.push(parseInt(backToString[i]));
    }
    return returnArray;
};

console.log(plusOne(digits));
console.log(plusOne(digits2));
console.log(plusOne(digits3));
console.log(plusOne(digits4));
console.log(plusOne(digits5));
console.log(plusOne(digits6));
console.log(plusOne(digits7));
