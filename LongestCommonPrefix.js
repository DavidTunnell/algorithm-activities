/**
 * https://leetcode.com/problems/longest-common-prefix/
 * https://www.youtube.com/watch?v=gJOgI8TpSgc&ab_channel=WebDevSimplified
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * EX1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * EX2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 */
const a = ["flower", "flow", "flight"];
const b = ["dog", "racecar", "car"];

var longestCommonPrefix = function(strs) {
    let prefix = "";
    if (strs.length === 0) {
        return prefix;
    }
    //loop through chars of first string in array
    for (let i = 0; i < strs[0].length; i++) {
        const character = strs[0][i];
        //loop through each string
        for (let j = 0; j < strs.length; j++) {
            const stringToCompare = strs[j];
            const charToCompare = stringToCompare[i];
            //for each char in the 1st string, compare to each char in each other string in the array
            //if  its not equal give the prefix
            if (charToCompare !== character) {
                return prefix;
            }
        }
        //if you get to this point, the character is found in all strings in the array so add it 
        prefix = prefix + character;
    }
    return prefix;
};

console.log(longestCommonPrefix(a));