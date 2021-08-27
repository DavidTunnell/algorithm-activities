/** 
 * https://app.codesignal.com/test/z6o3jQgmLgnmhfffq/task/tk9r2MvcKXsAfnsxp
 * You are given a string s that consists of only lowercase English letters. If vowels ('a', 'e', 'i', 'o', and 'u') are given a value of 1 and consonants are given a value of 2, return the sum of all of the letters in the input string.
 * For s = "a", the output should be countVowelConsonant(s) = 1;
 * The letters in s, converted to 1s and 2s and added together as described above: 1 + 2 + 2 + 2 + 1 = 8.
 */
const a = "a";
const b = "abcde";

var countVowelConsonants = function(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            sum += 1;
        } else {
            sum += 2;
        }
    }
    return sum;
};

console.log(countVowelConsonants(a));
console.log(countVowelConsonants(b));