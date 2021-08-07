// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false
// var strA = "octagonal";
// var strB = "tganoalco"; //true

var isAnagram = function(strA, strB) {
    // get an array with no spaces and all lower case
    strA = strA.replace(/\s/g, "").toLowerCase();
    strB = strB.replace(/\s/g, "").toLowerCase().split("");
    // if not the same number of characters then it's not an anagram
    if (strA.length != strB.length) {
        return false;
    }
    // iterate through each value in strA and filter it out of strB
    for (let i = 0; i < strA.length; i++) {
        // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
        strB = strB.filter(item => item !== strA[i]);
    }
    //if strB is empty after all of that it's an anagram
    if (strB.length === 0) {
        return true;
    }
    //else it is not
    return false;
};