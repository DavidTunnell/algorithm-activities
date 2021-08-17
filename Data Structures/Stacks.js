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
 */

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