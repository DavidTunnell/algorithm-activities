//"Describe and code an algorithm that returns the first letter that has a duplicate in the string."

function firstDuplicate(myString) {
    var charArray = myString.toUpperCase().split("");
    for (let i = 0; i < charArray.length; i++) {
        //start at the character after each loop because the previous were already compared
        for (let f = i + 1; f < charArray.length; f++) {
            //if equal and not a space
            if (charArray[i] == charArray[f] && charArray[i] != " ") {
                return "Character at index: " + i + " | Value: " +
                    charArray[i];
            }
        }
    }
    //if no duplicates
    return "No duplicate found.";
}

function main() {
    var result = firstDuplicate('Welcome to my home in Mississippi.'); // e, 1
    console.log(result);
    var result2 = firstDuplicate('Sphinx of black.'); //no duplicate
    console.log(result2);
}

main();