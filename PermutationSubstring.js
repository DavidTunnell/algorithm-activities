/* Create a function that takes in two strings and returns true if the second string is a substring of any permutation (combination of characters in) the first string.
 * 
 */
var str = "tbacowa";
var sub = "bat"; // the first string contains all of the characters needed to make the second
//true

const permutationSubstring = function(str, sub) {
    let counter = 0;
    for (let i = 0; i < sub.length; i++) {
        const ele = sub[i];
        for (let f = 0; f < str.length; f++) {
            const ele2 = str[f];
            if (ele === ele2) {
                counter++;
                break;
            }
        }
    }
    if (counter == sub.length) {
        return true;
    }
    return false;
};

console.log(permutationSubstring(str, sub));