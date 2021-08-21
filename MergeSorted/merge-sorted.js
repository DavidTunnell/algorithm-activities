/* Create a function that takes in two sorted arrays of numbers and merges the contents of both arrays into one new sorted array.
 * Note: You may not use the built-in sort method for this activity.
 * var arr1 = [4, 8, 15, 16, 23, 42];
 * var arr2 = [1, 2, 3, 6, 20, 21];
 * returns: [1, 2, 3, 4, 6, 8, 15, 16, 20, 21, 23, 42];
 */

// var arr1 = [4, 8, 15, 16, 23, 42, 44];
// var arr2 = [1, 2, 3, 6, 20, 21];
// var arr1 = [1, 3];
// var arr2 = [2, 4];

// https://stackoverflow.com/questions/31922223/how-to-merge-two-sorted-array-in-one-sorted-array-in-javascript-without-using-so/48147806#48147806
function mergeSorted(arr1, arr2) {
    //create a temp array that will be returned after consuming both incoming arrays
    var tempArray = [];
    //iterate as long as a and b have length
    //compares beginning of each and adds the lower and then removes it and then does the same again until both arrays are empty
    //uses queue as a structure, it adds to the temp array the lowest one and then removes from front of queue
    while (arr1.length || arr2.length) {
        //if the lengths of the arrays are even, because of the if logic below, 
        //arr1[0] will become empty/undefined and then wont be comparable, this fixes this senario
        //is this true backwards? ^
        if (typeof arr1[0] === 'undefined') {
            console.log(arr1[0]);
            tempArray.push(arr2.shift());
        } else if (arr1[0] > arr2[0]) { //the 1st value in array one is larger, thus push array 2 and then remove it
            tempArray.push(arr2.shift());;
        } else { //else push and remove the beginning of array 1
            tempArray.push(arr1.shift());
        }
    }
    return tempArray;
}

// console.log(mergeSorted(arr1, arr2));