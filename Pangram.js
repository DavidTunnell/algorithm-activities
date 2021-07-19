/*
Write a function that takes in a string and returns true if it's a pangram or false otherwise.
Pangram: a sentence that contains every letter in the alphabet.

Ex:
Input: "Watch Jeopardy, Alex Trebek's fun TV quiz game"
Output: true

Input: "Five hexing wizard bots jump quickly"
Output: true

Input: "JavaScript is the best"
Output: false 
*/

function pangram(str) {
    //add to set and if 26 true

    var alphaSet = new Set();
    //take string and make lowercase, remove spaces and turn into a character array
    var str = str.toLowerCase().replace(/\s/g, '').split("");
    //loop through and add to set
    for (let i = 0; i < str.length; i++) {
        //if it is a letter add to set
        if (str[i].length === 1 && str[i].match(/[a-z]/i)) {
            alphaSet.add(str[i]);
        }
    }
    // if there are 26 entries then all characters are accounted for
    if (alphaSet.size == 26) {
        return true;
    } else {
        return false;
    }
}

function main() {
    console.log(pangram("Watch Jeopardy, Alex Trebek's fun TV quiz game"));
    console.log(pangram("Five hexing wizard bots jump quickly"));
    console.log(pangram("JavaScript is the best"));
}

main();

//trending albums, img, artist album name, make only albums that released last month, record label