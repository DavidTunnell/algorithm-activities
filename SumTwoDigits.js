/** 
 * https://app.codesignal.com/test/b2T3BGwuAFroexn8s/task/wAGdN6FMPkx7WBq66
 * You are given a two-digit integer n. Return the sum of its digits.
 * For n = 29, the output should be
addTwoDigits(n) = 11.
 */
const n = 29;
const x = 111;

var sumTwoDigits = function(n) {
    const str = n.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);

    }
    return sum;
};

console.log(sumTwoDigits(n));
console.log(sumTwoDigits(x));