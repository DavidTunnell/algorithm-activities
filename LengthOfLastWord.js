/* Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 * https://leetcode.com/problems/length-of-last-word/
 */
var val = "Hello World"; //5
var val2 = "   fly me   to   the moon  "; //4
var val3 = "luffy is still joyboy"; //6

var lengthOfLastWord = function (s) {
    var array = s.split(" ");
    for (let i = 0; i < array.length; i++) {
        const element = array[i].trim();
        if (element.length == 0) {
            array.splice(i, 1);
            i--;
        }
    }
    return array[array.length - 1].length;
};

console.log(lengthOfLastWord(val));
console.log(lengthOfLastWord(val2));
console.log(lengthOfLastWord(val3));
