/** 
 * Create a function that takes an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number ALSO in ascending order.
 */
const a = [-4, -1, 0, 3, 10]; //[0, 1, 9, 16, 100]
const b = [-7, -3, 2, 3, 11]; //[4, 9, 9, 49, 121] - Notice how squaring a number might change its order in the new array. For instance, `-7` is less than `2`, but `-7` squared is greater than `2` squared.
const c = []; //[]

var squaresOfSortedArray = function(num) {
    const newNumbers = num.map(function increment(num) {
        return num * num;
    });
    return newNumbers.sort(function(a, b) {
        return a - b;
    });
}

console.log(squaresOfSortedArray(a));
console.log(squaresOfSortedArray(b));
console.log(squaresOfSortedArray(c));