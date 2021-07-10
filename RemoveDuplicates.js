//Intro to Whiteboarding
//3. Remove Duplicate Members of an Array

function removeDup(myArray) {
    var newArray = myArray;
    for (let i = 0; i < myArray.length; i++) {
        for (let f = 0; f < myArray.length; f++) {
            if (myArray[i] === myArray[f] && i !== f) {
                newArray.splice(f, 1)
            }
        }
    }
    return newArray;
}

function main() {
    var cars = ["Saab", "Volvo", "BMW", "Toyota", "Volvo", "BMW"];
    var integers = [5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
    var combined = ["Saab", "Volvo", "BMW", "Toyota", "Volvo", 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, "BMW"]

    var test1 = removeDup(integers);
    var test2 = removeDup(cars);
    var test3 = removeDup(combined);
    console.log(test1);
    console.log(test2);
    console.log(test3);
}

main();