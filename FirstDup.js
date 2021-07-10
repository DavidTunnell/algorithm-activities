//Intro to Whiteboarding - https://coding-bootcamp-whiteboarding-algorithms.readthedocs-hosted.com/en/latest/
//From Glassdoor: "Describe and code an algorithm that returns the first duplicate character in a string."

function firstDup(myString) {
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
    firstDup('Welcome to my home in Mississippi.');
}

main();