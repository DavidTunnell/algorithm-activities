//Intro to Whiteboarding
//4. Find a Peak Element (return index of peak)

function peakEle(myArray) {
    var highestValue = 0;
    var highestValueIndex = 0;
    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
        if (element > highestValue) {
            highestValue = element;
            highestValueIndex = index;
        }
    }
    return [highestValueIndex, highestValue];
}

function main() {
    var integers = [1, 2, -10, 1, 3, 3];
    var returnArray = peakEle(integers);
    console.log("The first location of the peak value is " + returnArray[1] + " and is at array index location " + returnArray[0] + ".");
}

main();