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

var plusOne = function (digits) {
    let concatInt = "";
    let concatIntLong = "";

    //need to divide each section of 15 separately then process
    //IDEA: 2d array
    var subSet = [];
    var subSetHolder = [];
    for (let i = 0; i < digits.length; i++) {
        subSet.push(digits[i]);
        if (i % 10 === 0 && i !== 0) {
            subSetHolder.push(subSet);
            subSet = [];
        } else if (digits.length > 15 && digits.length - i < 10) {
            subSetHolder.push(subSet);
        }
    }
    if (subSetHolder.length == 0) {
        return subSet;
    } else {
        return subSetHolder;
    }

    // for (let f = 0; f < digits.length; f++) {
    //     subSet.push():
    //     if (f % 14 == 0) {
    //         concatInt += digits[f].toString();
    //     } else {
    //         concatIntLong += digits[f].toString();
    //     }
    // }
    // if (concatIntLong == "") {
    //     concatInt = parseInt(concatInt) + 1;//you dont add to it here if
    // } else {
    //     concatIntLong = parseInt(concatIntLong) + 1;
    // }
    // var backToString = concatInt.toString() + concatIntLong.toString();
    // var returnArray = [];
    // for (let i = 0; i < backToString.length; i++) {
    //     returnArray.push(parseInt(backToString[i]));
    // }
    // return returnArray;
};

// console.log(plusOne(digits));
// console.log(plusOne(digits2));
// console.log(plusOne(digits3));
// console.log(plusOne(digits4));
// console.log(plusOne(digits5));
console.log(plusOne(digits6));
