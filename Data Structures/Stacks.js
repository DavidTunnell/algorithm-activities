/*
 * Stacks
 * if you make a stack of books, the top of the stack is the one you put there last
 * 
 * LIFO - Last in first out
 * Push - add to top of stack
 * Pop - remove from top of stack
 * peek - display top element of stack
 * length - # of elements on the stack
 * 
 * In JS, a stack can be created using an array because it has the functions needed
 * The top of the stack is the end of the array
 * 
 * This solves for isPalendrome using a custom created stack
 */

function isPalendromeUsingStack(str) {
    var letters = [];
    var reverseWord = "";
    var word = str;

    for (let i = 0; i < word.length; i++) {
        //add each letter to an array of characters stack
        letters.push(word[i]);
    }
    for (let i = 0; i < word.length; i++) {
        //LIFO, pop(remove from top) the end of the word and create a new reversed word
        reverseWord += letters.pop();
    }
    // console.log(reverseWord);
    if (reverseWord === word) {
        return true;
    }
    return false;
}

//using custom stack above
var result = isPalendromeUsingStack("racecar");
console.log(result);

//or just using javascript
var test = [];
var word = "12345";
var backwards = "";
for (let i = 0; i < word.length; i++) {
    test.push(word[i]);

}
for (let i = 0; i < word.length; i++) {
    backwards += test.pop();
}
console.log(backwards);