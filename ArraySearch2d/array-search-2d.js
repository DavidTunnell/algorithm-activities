// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

const arraySearch2D = (arr) => {
    let counter = 0;
    //for each array in the array
    arr.forEach((ele, i) => {
        //go through it and add a counter whenever an X is encountered
        ele.forEach((innerEle, j) => {
            if (innerEle === "X") {
                counter++;
            }
        });
    });
    return counter;
}