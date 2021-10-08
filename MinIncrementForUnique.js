/* Create a function that takes in an array of numbers and returns the minimum number of increments needed to make the numbers unique.
 */
var arr = [1, 2, 2]; //1
var arr2 = [3, 2, 1, 2, 1, 7]; //6 - Since one of the number `2`s could be incremented twice to make `4` and one of the number `1`s could be incremented four times to make `5`. Together this is `6` increments total.
var arr3 = [8, 6, 8, 9, 10]; //3

var minIncrement = function (arr) {
    let counter = 0;
    //for each check if number is unique
    for (let i = 0; i < arr.length; i++) {
        for (let f = 0; f < arr.length; f++) {
            if (arr[i] === arr[f] && i != f) {
                //if we are here we found a non unique value
                //add 1 to the value in arr[i]
                arr[i]++;
                //add one to the counter that will be returned
                counter++;
                //reset the entire loop again to see if another increment is needed
                f = i = 0;
            }
        }
    }
    return counter;
};

console.log(minIncrement(arr));
console.log(minIncrement(arr2));
console.log(minIncrement(arr3));
