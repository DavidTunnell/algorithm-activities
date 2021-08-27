/** 
 * https://app.codesignal.com/test/7ETQDhFRJdJsTJe84/task/TZtZckZCLmrSkztDg
 * Reverse the order of words in a given string sentence. You can assume that sentence does not have any leading, trailing or repeating spaces.
 * For sentence = "Man bites dog", the output should be reverseSentence(sentence) = "dog bites Man"
 */
const a = "Man bites dog";

var reverseSentence = function(str) {
    const array = str.split(" ");
    let sentence = "";
    for (let i = array.length - 1; i >= 0; i--) {
        sentence += array[i] + " ";
    }
    return sentence.trim();
};

console.log(reverseSentence(a));