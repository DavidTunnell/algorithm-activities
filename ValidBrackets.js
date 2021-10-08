/* Create a function that takes in a string and returns `true` if the string contains a valid set or sets of brackets, else `false` should be returned.
 */
var str = "( )"; //true
var str2 = "{ } [ ( [] ) ]"; //true
var str3 = "( [ ) ]"; //false - Since the "[" and ")" are mismatched.
var str4 = "()))"; //false

//valid parenthesis is a classic stack problem
//we are about the most recent left ({) open bracket
//the most recent one needs to be closed - LIFO stack
//if we see an open parenthesis, add to stack
//if we see a closed parenthesis, it must match THE MOST RECENT OPEN bracket (if so remove it and continue) ELSE FALSE
var validBrackets = function (str) {
    const stack = [];
    const brackets = ["()", "{}", "[]"];
    var correctClosingBracket;
    var topElement;
    //iterate through each char in string
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
            //whenever an open bracket is found add it to the stack
            stack.push(str[i]);
        } else if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
            //if we encounter a closed bracket, we need to check if it matches THE MOST RECENT element
            //get the top element
            topElement = stack[stack.length - 1];
            //get the correct closing bracket type to check against
            for (let f = 0; f < brackets.length; f++) {
                if (topElement == brackets[f][0]) {
                    correctClosingBracket = brackets[f][1];
                }
            }
            //if it doesn't match the it is not valid, return false
            //also, if there is not a matching opening bracket (top element is undefined), return false
            if (str[i] != correctClosingBracket || !topElement) {
                return false;
            } else {
                //else return the top element on the stack because the bracket has been closed and continue
                stack.pop();
            }
        }
    }
    //if the stack length isn't zero, then an opening parenthesis was left unclosed, also return false
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(validBrackets(str));
console.log(validBrackets(str2));
console.log(validBrackets(str3));
console.log(validBrackets(str4));
