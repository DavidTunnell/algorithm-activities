// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`
// [2, 8, 7, 5, 4, 3]
var isUnique = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        //i+1 so the same comparisons aren't repeatedly made
        for (let f = (i + 1); f < arr.length; f++) {
            if (arr[i] === arr[f]) {
                return false;
            }
        }
    }
    return true;
};