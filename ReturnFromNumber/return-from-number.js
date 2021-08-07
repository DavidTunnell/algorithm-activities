/* Write a function that takes in a string and if the string is a string representation of a number, return the negative version of that number otherwise throw an Error.

Ex:
Input: '1'
Output: -1

Input: '4'
Output: -4

Input: 'cow'
Error
*/

var returnFromNumber = function(str) {
    //if it's a number
    if (!isNaN(str)) {
        return parseFloat(str) * -1;
    } else {
        //else throw error if not a number
        throw new Error(str + ' is not a number!');
    }
};