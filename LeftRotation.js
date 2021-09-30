// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one

const arr = [1, 2, 3];
const positions = 2; //[3, 1, 2]
const arr2 = [8, 8, 1];
const positions2 = 3; //[8, 8, 1]
const arr3 = [1];
const positions3 = 20; //[1]
const arr4 = [4, 8, 15, 16, 23, 42];
const positions4 = 0; //[4, 8, 15, 16, 23, 42]
const arr5 = [1, 2, 3];
const positions5 = 3; //[1, 2, 3]
const arr6 = [3, 1, 8, 0, 1];
const positions6 = 8; //[0, 1, 3, 1, 8]

const leftRotation = (arr, positions) => {
    for (let i = 0; i < positions; i++) {
        //get 1st value in array and assign it to variable while also removing from array - it could be one line but this is more clear to me
        var firstVal = arr.shift();
        //add it to the end of array
        arr.push(firstVal);
    }
    return arr;
};

console.log(leftRotation(arr, positions));
console.log(leftRotation(arr2, positions2));
console.log(leftRotation(arr3, positions3));
console.log(leftRotation(arr4, positions4));
console.log(leftRotation(arr5, positions5));
console.log(leftRotation(arr6, positions6));
