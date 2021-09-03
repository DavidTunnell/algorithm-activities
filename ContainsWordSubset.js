/* If the 2nd passed string's words are contained in the 1st return true else false
 * Assume that neither string will be empty and that you won't need to deal with punctuation, but you will need to worry about capitalization.
 */
var strA = 'hello world';
var strB = 'hello';
//true

var strC = 'Whats so amazing that keeps us stargazing';
var strD = 'stargazing whats keeps us so amazing'; //Given the preceding strings, and because the word "Whats" is capitalized differently in each string
//false

const containsWordSubset = function(str1, str2) {
    const array1 = str1.trim().split(" ");
    const array2 = str2.trim().split(" ");
    let counter = 0;
    for (let i = 0; i < array2.length; i++) {
        const secondEle = array2[i];
        for (let f = 0; f < array1.length; f++) {
            const firstEle = array1[f];
            if (secondEle === firstEle) {
                counter++;
                break;
            }
        }
    }
    if (counter == array2.length) {
        return true;
    }
    return false;
};

console.log(containsWordSubset(strA, strB));
console.log(containsWordSubset(strC, strD));