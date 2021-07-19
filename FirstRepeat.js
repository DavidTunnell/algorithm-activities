//"Describe and code an algorithm that returns the first repeated character in a string."

function firstRepeat(myString) {
    var charArray = myString.toUpperCase().split("");

    for (let index = 0; index < charArray.length; index++) {
        const prevElement = charArray[index - 1];
        const currentElement = charArray[index];

        if (prevElement == currentElement) {
            console.log("String Entered: " +
                myString);
            console.log("The strings 1st duplicate is >> " + prevElement + " << at index " + (index - 1).toString() + ".");
            break;
        }
    }
}

function main() {
    firstRepeat('Welcome to my home in Mississippi.');
}

main();