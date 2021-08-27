/** 
 * https://app.codesignal.com/test/gF9pmS5QLTmmpJ4cg/task/Wqvd3kZMT4DkXY9gq
 * You are developing a new programming language and currently working on variable names. You have a list of words that you consider to be good and could be used for variable names. All the strings in words consist of lowercase English letters.
 * A complex variable name is a combination (possibly with repetitions) of some strings from words, written in CamelCase. In other words, all the strings are written without spaces and each string (with the possible exception of the first one) starts with a capital letter.
 * Your programming language should accept complex variable names only.
 * You need to check if the variableName is accepted by your programming language.
 * For words = ["is", "valid", "right"] and variableName = "isValid", the output should be camelCaseSeparation(words, variableName) = true.
 * As variableName consists of words "is" and "valid", and both of them are in words.
 * For words = ["is", "valid", "right"] and variableName = "isValId", the output should be camelCaseSeparation(words, variableName) = false.
 * variableName is separated to words "is", "val", "id", and not all words are in words.
 */
const words = ["is", "valid", "right"];
const variableName = "isValid";
const variableName2 = "isValId";

var camelCaseSeparation = function(words, variableName) {
    let counter = 0;
    //break up variableName into words based on camel case rules
    const array = brokenUpByUpperCase(variableName);
    //compare both arrays and if they equal add to counter
    for (let i = 0; i < array.length; i++) {
        for (let f = 0; f < words.length; f++) {
            if (array[i].toLowerCase() === words[f].toLowerCase()) {
                counter++;
            }
        }
    }
    //if the same amount of words matched above as the length of the variable name, it's valid so return true
    if (counter == array.length) {
        return true;
    } else {
        return false;
    }
};

function brokenUpByUpperCase(str) {
    return str.match(/([A-Z]?[^A-Z]*)/g).slice(0, -1);
}

console.log(camelCaseSeparation(words, variableName));
console.log(camelCaseSeparation(words, variableName2));