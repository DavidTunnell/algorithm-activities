//Whiteboarding Interview Questions - https://coding-bootcamp-whiteboarding-algorithms.readthedocs-hosted.com/en/latest/modules/whiteboarding-interview-questions/
//Reverse a String

function firstDup(myString) {
    var charArray = myString.split("");
    var reversedString = "";

    for (let index = charArray.length; index >= 0; index--) {
        reversedString += charArray[index];
    }
    return reversedString;
}

function main() {
    var myRevString = firstDup('Welcome to my home in Mississippi.');
    console.log(myRevString);
}

main();