/* Create a function that takes an array of unique numbers and returns `true` if the product of any two numbers is 20; else returns `false`.
 */

// var arr = [3, 4, 5, 7, 9]; // 4 * 5 === 20
// var arr2 = [20, -20, 18, 2, 3, 4]; // no two numbers multiply into 20

const multiplyInto20 = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let f = i + 1; f < arr.length; f++) {
            if (arr[i] * arr[f] === 20) {
                return true;
            }
        }
    }
    return false;
};

// console.log(multiplyInto20(arr));
// console.log(multiplyInto20(arr2));