/* https://leetcode.com/problems/reverse-integer/
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
*/
const reverseInteger = (integer) => {
    let negative = 1;
    let charArray = integer.toString().split("");
    if (charArray[0] == "-") {
        negative = -1;
    }
    let concatStr = "";
    for (let i = charArray.length - 1; i >= 0; i--) {
        concatStr += charArray[i];
    }
    let reversedInt = parseInt(concatStr);
    //check if int is out of range and if so return 0 - https://stackoverflow.com/questions/47600096/what-is-32-bit-integer-in-javascript
    if (reversedInt > 0x7FFFFFFF) {
        return 0;
    }
    return reversedInt * negative;
}