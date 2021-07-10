//Intro to Whiteboarding
//5. Find a Single Element (Given a sorted array of integers, every element appears twice except for one. Find that single element.)

function singleEle(myArray) {
    var singleValue = 0;

    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
        if (element != myArray[index - 1] && element != myArray[index + 1]) {
            singleValue = element;
        }
    }
    return singleValue;
}

function main() {
    var sortedArray1 = [1, 1, 3, 3, 4, 4, 6, 6, 7, 7, 8, 8, 12, 12, 14, 14, 15]; //15
    var sortedArray2 = [1, 1, 3, 3, 4, 4, 6, 6, 7, 7, 8, 12, 12, 14, 14]; //8
    var returnedValue1 = singleEle(sortedArray1);
    var returnedValue2 = singleEle(sortedArray2);
    console.log(returnedValue1);
    console.log(returnedValue2);
}

main();