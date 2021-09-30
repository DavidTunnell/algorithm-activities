// Write code to reverse an array in place (no new array, keep same array)
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        //remove value at array index
        var removed = arr.splice(i, 1)[0];
        //add it to the beginning of the array
        arr.unshift(removed);
    }
    return arr;
};

const arr = [1, 2, 3, 4, 5];
console.log(reverseInPlace(arr));
