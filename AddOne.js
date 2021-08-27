/** 
 * https://app.codesignal.com/test/vA5NLjkkxdNcTPbT2/task/wP96PpGm72Fq87cPg
 * You are given an array of integers digits representing the digits of a positive integer. For example, digits = [1, 2, 3] represents the integer 123.
 * It is guaranteed that digits does not have any leading zeros.
 * Assuming that digits represents the integer n, your task is to return an array that represents the integer n + 1.
 * For digits = [1, 2, 3], the output should be addOne(digits) = [1, 2, 4];
 * For digits = [1, 2, 9], the output should be addOne(digits) = [1, 3, 0];
 * For digits = [9, 9, 9], the output should be addOne(digits) = [1, 0, 0, 0].
 */
const a = [1, 2, 3];
const b = [1, 2, 9];
const c = [9, 9, 9];

var addOne = function(digits) {
    let str = "";
    digits.forEach(digit => {
        str += digit;
    });
    let myInt = parseInt(str) + 1;
    let backToStrArray = myInt.toString().split("");
    const returnArray = [];
    backToStrArray.forEach(element => {
        returnArray.push(parseInt(element));
    });
    return returnArray;
}

console.log(addOne(a));
console.log(addOne(b));
console.log(addOne(c));