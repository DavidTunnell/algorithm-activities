/* You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 * https://leetcode.com/problems/plus-one/
 */
var digits = [1, 2, 3, 9]; //[1,2,4]
var digits2 = [4, 3, 2, 1]; //[4,3,2,2]
var digits3 = [0]; //[1]
var digits4 = [9]; //[1,0]
var digits5 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]; //[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
var digits6 = [
    7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4,
    7, 4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 6,
]; //[7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4, 7, 4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 7,]
var digits7 = [8, 8, 2, 5, 2, 9, 9, 3, 3, 8, 5, 7, 0, 6, 6]; //[8,8,2,5,2,9,9,3,3,8,5,7,0,6,7]
var digits8 = [4, 3, 2, 1]; //[4,3,2,2]
var digits9 = [
    9, 8, 2, 1, 3, 3, 1, 8, 1, 4, 4, 7, 2, 7, 2, 0, 5, 6, 8, 9, 7, 7, 4, 3,
]; //[9,8,2,1,3,3,1,8,1,4,4,7,2,7,2,0,5,6,8,9,7,7,4,4] -- 7, 2, 7, 2, 0 missing somehow
var digits10 = [
    9, 0, 0, 8, 8, 4, 9, 6, 8, 2, 1, 1, 3, 9, 4, 9, 5, 1, 1, 2, 5, 4, 9, 1, 2,
    0, 8, 1, 4, 1, 9, 6, 3, 9, 6, 1, 5, 7,
]; //[9,0,0,8,8,4,9,6,8,2,1,1,3,9,4,9,5,1,1,2,5,4,9,1,2,0,8,1,4,1,9,6,3,9,6,1,5,8]

var plusOne = function (digits) {
    var lastDigit = digits[digits.length - 1];
    if (lastDigit !== 9) {
        digits[digits.length - 1] = digits[digits.length - 1] + 1;
    } else {
        //else 9 is last
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] == 9 && i == 0) {
                digits[i] = 0;
                digits.unshift(1);
            } else if (digits[i] == 9) {
                digits[i] = 0;
            } else {
                digits[i] = digits[i] + 1;
                break;
            }
        }
    }
    return digits;
};

console.log(plusOne(digits));
console.log(plusOne(digits2));
console.log(plusOne(digits3));
console.log(plusOne(digits4));
console.log(plusOne(digits5));
console.log(plusOne(digits6));
console.log(plusOne(digits7));
console.log(plusOne(digits8));
console.log(plusOne(digits9));
console.log(plusOne(digits10));
