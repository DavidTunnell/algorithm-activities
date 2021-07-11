/*
 Write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string.
 Ex:
 Input: "the quick brown fox jumps over the calm kitten quietly"
 Output: "b"
 Input: "this hat is the greatest!"
 Output: "g"
 Input: "what a wonderful day it has been!"
 Output: "o"
*/

function firstOccurrence(str) {
    var repeatCounter;
    //iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        repeatCounter = 0;
        //for each character, compare to all of the other characters
        for (let f = 0; f < str.length; f++) {
            //if the characters equal each other and also the string comparison isn't at the same char location add counter
            if (str[i] === str[f] && i !== f) {
                repeatCounter++;
                break;
            }
        }
        //if no counters at the end of the loop return the non repeating letter (str[i])
        if (repeatCounter == 0) {
            return str[i];
        }
    }
}

function main() {
    console.log(firstOccurrence("the quick brown fox jumps over the calm kitten quietly"));
    console.log(firstOccurrence("this hat is the greatest!"));
    console.log(firstOccurrence("what a wonderful day it has been!"));
}

main();