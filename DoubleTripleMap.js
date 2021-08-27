/** 
// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element
 */
const a = [1, 2, 3, 4]; //[3, 4, 9, 8]
const b = [4, 8, 15, 16, 23, 42]; //[8, 16, 45, 32, 69, 84]
const c = [-3, 3, -4, 0, -7, 9]; //[-9, 9, -8, 0, -21, 27]
const d = []; //[]

var doubleTripleMap = function(num) {
    const newNumbers = num.map(function increment(num) {
        if (num % 2 == 0) {
            return num * 2;
        } else {
            return num * 3;
        }
    });
    return newNumbers;
}

console.log(doubleTripleMap(a));
console.log(doubleTripleMap(b));
console.log(doubleTripleMap(c));
console.log(doubleTripleMap(d));