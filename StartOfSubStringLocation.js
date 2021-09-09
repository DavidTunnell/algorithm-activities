/* Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 * https://leetcode.com/problems/implement-strstr/
 */
var haystack = "hello";
var needle = "ll"; //2
var haystack2 = "aaaaa";
var needle2 = "bba"; //-1
var haystack3 = "";
var needle3 = ""; //0
var haystack4 = "a";
var needle4 = ""; //0 expected not -1
var haystack5 = "";
var needle5 = "a"; //-1 expected not 0

var strStr = function (haystack, needle) {
    if (needle === "") {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        let subStringToCheck = "";
        if (haystack[i] === needle[0]) {
            subStringToCheck = haystack.substring(i, i + needle.length);
            if(subStringToCheck === needle) {
                return i;
            }          
        }
    }
    return -1;
};


console.log(strStr(haystack, needle));
console.log(strStr(haystack2, needle2));
console.log(strStr(haystack3, needle3));
console.log(strStr(haystack4, needle4));
console.log(strStr(haystack5, needle5));