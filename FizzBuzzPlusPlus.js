/** 
 * https://app.codesignal.com/test/EGNYCSFcnvLcpAvNM/task/82EovfzCmvHb8Spgi
 * For this activity, consider the original FizzBuzz challenge (replacing any integer in an array divisible by 3 with Fizz, anything divisible by 5 with Buzz and anything divisible by 3 and 5 with FizzBuzz).
 * This is FizzBuzz++.
 * If we take an input number, like 15, for example, all the natural numbers that are also multiples of 3 or 5 are 3, 5, 6, 9, 12. The sum of these numbers is 35.
 * Write a function that completes the solution so that it returns the sum of all multiples of 3 or 5 below the number passed in as a parameter.
 * However, if the number is a multiple of 3 and 5 (i.e. 15), you should only count it once in your final value.
 */
const a = 15; // 3 + 5 + 6 + 9 + (10?) + 12 = 35 (45) - what about 10?? "Write a function that completes the solution so that it returns the sum of all multiples of 3 or 5 below the number passed in as a parameter."
const b = 20; // 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 = 78 - what about 10??

var fizzBuzzPlusPlus = function(num) {
    const mySet = new Set();
    for (let i = 1; i < num; i++) {
        if (i % 5 === 0) {
            mySet.add(i);
        } else if (i % 3 === 0) {
            mySet.add(i);
        }
    }
    var array = [...mySet];
    let sum = 0;
    for (let f = 0; f < array.length; f++) {
        sum += array[f];
    }
    return sum;
}

console.log(fizzBuzzPlusPlus(a));
console.log(fizzBuzzPlusPlus(b));