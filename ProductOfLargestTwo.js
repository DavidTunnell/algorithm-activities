/* Create a function that does the following:
    - Find the largest and the second largest numbers in the given array.
    - Return the product of the largest and the second largest number.
    **Note:** The given array will always contain at least two elements.
*/

const arr = [10, 20, 9, 6, 3, 11];

var ProductOfLargestTwo = numberArray => {
    let largest = 0;
    let second = 0;
    //iterate through each value in array
    for (let i = 0; i < numberArray.length; i++) {
        const checkedNum = numberArray[i];
        //if larger than the current largest number, update it. Also set the previous high to second
        if (checkedNum > largest) {
            second = largest;
            largest = checkedNum;
        } else if (checkedNum > second) {
            //if the current number is greater than second but isnt greater than the largest also set second
            second = checkedNum;
        }
    }
    //multiply for product
    return largest * second;
}

function main() {
    const results = ProductOfLargestTwo(arr);
    console.log(results);
}

main();