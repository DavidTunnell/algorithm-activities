/* Create a function that does the following:
    - Return a camel case version of the given string.
    - A string is in camel case when there are no spaces between words, the first letters of each word except the first word is capitalized, and all other letters are in lowercase.
      "letTheForceFlowThroughYou"
*/

const str = "let the force flow through you";

var camelCase = myString => {
    //take the string argument and make it lowercase and break it into an array
    const lowerCaseWords = myString.toLowerCase().split(" ");
    const updatedArray = [];
    for (let i = 0; i < lowerCaseWords.length; i++) {
        const word = lowerCaseWords[i];
        //for each word if its not the 1st, make the 1st letter uppercase
        if (i != 0) {
            updatedArray.push(word[0].toUpperCase() + word.substring(1));
        } else {
            updatedArray.push(word);
        }
    }
    //combine with no spaces and return
    return updatedArray.join("");
}

function main() {
    const result = camelCase(str);
    console.log(result);
}

main();